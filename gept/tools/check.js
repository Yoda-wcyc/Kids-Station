#!/usr/bin/env node
/* gept/tools/check.js — 全民英檢題目檢查工具（CONTRACT.md §6）。
   用法（在網站根目錄或任何地方）：
     node gept/tools/check.js            檢查 gept/data/ 全部題目；有錯就列出來、exit 1
     node gept/tools/check.js e/L1-01    只檢查一組（路徑相對 gept/data/，可多個）
     node gept/tools/check.js --write    檢查通過後重寫 gept/data/catalog.js（題目清單；新增／改題目後一定要跑）
     node gept/tools/check.js --lttc     另外列出「不在 LTTC 官方字表」的字（只在本機有 scratchpad/gept-local/lttc_*.txt 時；只是參考，不影響通過與否）
   檢查：id／檔名／題號規則、各題型題數與選項數、正解索引、答案分布、句長與篇長、表外字（自動處理複數、時態、比較級）、全部 id 不重複、catalog.js 是最新的。 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const GEPT = path.resolve(__dirname, '..'), DATA = path.join(GEPT, 'data');
const C = require(path.join(GEPT, 'gept-core.js'));
const V = Object.assign({}, require(path.join(GEPT, 'vocab', 'moe2000.js')), require(path.join(GEPT, 'vocab', 'cefrj.js')), require(path.join(GEPT, 'vocab', 'octanove-c1.js')), require(path.join(GEPT, 'vocab', 'names.js')));

function loadSet(file) {
  const ctx = { window: { GEPT_SETS: [] } }; ctx.window.window = ctx.window;
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx.window, { filename: file });
  return ctx.window.GEPT_SETS;
}
function listFiles() {
  const out = [];
  ['e', 'i', 'a'].forEach(lv => { const d = path.join(DATA, lv); if (fs.existsSync(d)) fs.readdirSync(d).filter(f => /\.js$/.test(f)).sort().forEach(f => out.push(path.join(d, f))); });
  return out;
}
// 題目清單（頁面用）：{e:{L1:[{id,t,n,h}], …, M:[…]}, …}；t＝標題、n＝題數、h＝檔案內容雜湊（頁面載題目檔時加 ?v=h，iPad 才不會吃到快取的舊題）
function catalogOf(sets, hash) {
  const cat = { e: {}, i: {}, a: {} };
  sets.slice().sort((a, b) => a.id < b.id ? -1 : 1).forEach(s => { const m = C.ID_RE.exec(s.id); (cat[m[1]][m[2]] = cat[m[1]][m[2]] || []).push({ id: s.id, t: s.title || '', n: C.questions(s).length, h: (hash || {})[s.id] || '' }); });
  return '/* gept/data/catalog.js — 由 node gept/tools/check.js --write 產生，不要手改（CONTRACT.md §6） */\nwindow.GEPT_CATALOG = ' + JSON.stringify(cat) + ';\n';
}
function run(argv) {
  argv = argv || [];
  const only = argv.filter(a => !a.startsWith('--')), write = argv.includes('--write'), lttc = argv.includes('--lttc');
  const files = only.length ? only.map(f => path.join(DATA, f.replace(/\.js$/, '') + '.js')) : listFiles();
  const lex = { e: C.lexOf('e', V), i: C.lexOf('i', V), a: C.lexOf('a', V) };
  const errors = [], warns = [], sets = [], ids = {}, names = {}, hash = {};
  files.forEach(f => {
    const rel = path.relative(DATA, f).replace(/\\/g, '/');
    let got;
    try { got = loadSet(f); } catch (e) { errors.push(rel + ': 載入失敗 ' + e.message); return; }
    if (got.length !== 1) { errors.push(rel + ': 一個檔只能放一組（GEPT_SETS.push 一次），現在 ' + got.length); return; }
    const s = got[0], m = C.ID_RE.exec(s && s.id || '');
    if (!m || C.fileOf(s.id) !== 'data/' + rel) { errors.push(rel + ': 檔名要跟 id 一致（id ' + (s && s.id) + ' → ' + (m ? C.fileOf(s.id) : '?') + '）'); return; }
    const r = C.validateSet(s, V, { lex: lex[m[1]] });
    r.errors.forEach(e => errors.push(rel + ': ' + e)); r.warns.forEach(w => warns.push(rel + ': ' + w));
    r.names.forEach(n => { names[n] = (names[n] || 0) + 1; });
    C.questions(s).forEach(q => { if (q.id && ids[q.id]) errors.push(rel + ': 題目 id 重複 ' + q.id + '（也在 ' + ids[q.id] + '）'); ids[q.id] = rel; });
    sets.push(s); hash[s.id] = require('crypto').createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 10);
  });
  const catFile = path.join(DATA, 'catalog.js');
  if (!only.length) {
    const want = catalogOf(sets, hash);
    if (write && !errors.length) fs.writeFileSync(catFile, want);
    else if (!write && (!fs.existsSync(catFile) || fs.readFileSync(catFile, 'utf8') !== want)) errors.push('catalog.js 不是最新的：跑 node gept/tools/check.js --write');
  }
  let lttcReport = '';
  if (lttc) {
    const dir = path.join(GEPT, '..', 'scratchpad', 'gept-local'), map = { e: 'lttc_e.txt', i: 'lttc_i.txt', a: 'lttc_hi.txt' };
    Object.keys(map).forEach(lv => {
      const f = path.join(dir, map[lv]); if (!fs.existsSync(f)) return;
      const L = {}; fs.readFileSync(f, 'utf8').split('\n').forEach(w => w.split(/[\s\/()-]+/).forEach(t => { if (t) L[t.toLowerCase()] = 1; }));
      const miss = {};
      sets.filter(s => s.id[0] === lv).forEach(s => { /* 只列用到的字 */ JSON.stringify(s).replace(/"(?:id|a|zh|points|prompt|spk|e|type)":("(?:[^"\\]|\\.)*"|\d+)/g, '').split(/[^A-Za-z']+/).forEach(w => { const k = w.toLowerCase().replace(/'.*$/, ''); if (k.length > 2 && !C.stems(k, lv).some(x => L[x])) miss[k] = 1; }); });
      lttcReport += `[LTTC ${lv}] 不在 LTTC 字表（含變化形判斷，僅供參考）：${Object.keys(miss).sort().join(', ') || '（無）'}\n`;
    });
    if (!lttcReport) lttcReport = '[LTTC] 本機沒有 scratchpad/gept-local/lttc_*.txt，略過\n';
  }
  return { errors, warns, sets, names, lttcReport, catalog: catalogOf(sets, hash) };
}
if (require.main === module) {
  const r = run(process.argv.slice(2));
  r.warns.forEach(w => console.log('⚠ ' + w));
  r.errors.forEach(e => console.log('✗ ' + e));
  if (r.lttcReport) process.stdout.write(r.lttcReport);
  const nq = r.sets.reduce((a, s) => a + C.questions(s).length, 0);
  console.log(`gept check: ${r.sets.length} 組、${nq} 題；專有名詞 ${Object.keys(r.names).sort().join(', ') || '（無）'}`);
  console.log(r.errors.length ? `✗ ${r.errors.length} 個錯誤` : '✓ 全部通過' + (process.argv.includes('--write') ? '（catalog.js 已更新）' : ''));
  process.exit(r.errors.length ? 1 : 0);
}
module.exports = { run, loadSet, catalogOf, V };
