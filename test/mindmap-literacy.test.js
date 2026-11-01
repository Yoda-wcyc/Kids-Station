// mindmap-literacy.test.js — 社會、自然〈🧩 素養題組〉資料與接線檢查（2026-11-01）
// 用法：node test/mindmap-literacy.test.js
// - 資料（mindmap/data/<科>/lit1-2.js、lit3-4.js → <資料>.lit[單元id]）：8 個單元、每單元剛好 5 組、題組 id＝'<單元>-L1'～'-L5'
// - 每組：資料區塊格式（沿用國語閱讀 ZhReading.blockErr：表格／SVG／時間軸／段落…；SVG 不准 script、事件、外部連結）、資料 150～400 字（ZhReading.wordCount）
// - 每組 4 題：id q1～q4、d 由小到大（第 1 題 d1、第 4 題 d3）、自動判分題至少 3 題；單選只有一個正解、選項不重複、長度不洩答（QuizKit.validate）；
//   開放題有參考答案＋2～4 條評分要點（ZhReading.openErr）；錯題庫 id 全站唯一
// - 接線：兩科頁面載入 lit 資料、quizkit、reading-core、reading.css；mindmap.js 素養題組不寫單元完成（doneRec）、錯題 id 用 '|L|'
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const QK = require(path.join(root, 'quizkit.js'));
const ZR = require(path.join(root, 'chinese', 'reading-core.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL mindmap-literacy:', m); } };

const UNITS = { social: ['u1', 'u2', 'u3', 'u4'], science: ['n1', 'n2', 'n3', 'n4'] };
const VAR = { social: 'DATA_SOCIAL', science: 'DATA_SCIENCE' };
const kindOf = b => typeof b === 'string' ? '短文' : b.table ? '表格' : b.svg ? 'SVG' : b.timeline ? '時間軸' : b.box ? '短文' : b.h ? '' : '短文';

// 檢查一組（回傳錯誤字串陣列）
function check(st, uid, n) {
  const E = [], add = m => E.push((st && st.id || uid + '?') + '：' + m);
  if (!st || typeof st !== 'object') return [uid + ' 第 ' + n + ' 組不是物件'];
  if (st.id !== uid + '-L' + n) add('id 要是 ' + uid + '-L' + n);
  if (typeof st.title !== 'string' || !st.title.trim()) add('沒有標題');
  if (!Array.isArray(st.body) || !st.body.length) { add('body 是空的'); return E; }
  st.body.forEach((b, i) => { const m = ZR.blockErr(b); if (m) add('body[' + i + '] ' + m); });
  const wc = ZR.wordCount(st);
  if (wc < 150 || wc > 400) add('資料字數 ' + wc + '，要 150～400');
  const qs = st.qs;
  if (!Array.isArray(qs) || qs.length !== 4) { add('要剛好 4 題'); return E; }
  qs.forEach((q, i) => {
    const w = 'q' + (i + 1) + ' ';
    if (q.id !== 'q' + (i + 1)) add(w + 'id 要是 q' + (i + 1));
    if ([1, 2, 3].indexOf(q.d) < 0) add(w + 'd 要是 1|2|3');
    if (i && q.d < qs[i - 1].d) add(w + 'd 要由小到大');
    (ZR.isOpen(q) ? ZR.openErr(q) : QK.validate(q)).forEach(m => add(w + m));
    if (q.type === 'mc' && Array.isArray(q.opts) && q.opts.filter((_, k) => k === q.a).length !== 1) add(w + '單選要剛好一個正解');
  });
  if (qs[0].d !== 1) add('第 1 題 d 要是 1');
  if (qs[3].d !== 3) add('第 4 題 d 要是 3');
  if (qs.filter(q => !ZR.isOpen(q)).length < 3) add('自動判分題至少 3 題');
  return E;
}

// 載入資料（跟頁面一樣：單元檔 → lit 檔）
const all = [], kinds = {}, svgIds = {};
Object.keys(UNITS).forEach(k => {
  const ctx = { window: {} }; vm.createContext(ctx);
  ['unit1-2.js', 'unit3-4.js', 'lit1-2.js', 'lit3-4.js'].forEach(f => {
    const p = path.join(root, 'mindmap', 'data', k, f);
    ok(fs.existsSync(p), k + '/' + f + ' exists');
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: k + '/' + f });
  });
  const D = ctx.window[VAR[k]] || {}, lit = D.lit || {};
  ok(Object.keys(lit).sort().join() === UNITS[k].join(), k + ' lit units = ' + UNITS[k].join() + ': ' + Object.keys(lit).join());
  ok((D.units || []).map(u => u.id).join() === UNITS[k].join(), k + ' unit files still load 4 units');
  UNITS[k].forEach(uid => {
    const sets = lit[uid] || [];
    ok(sets.length === 5, uid + ' has exactly 5 sets: ' + sets.length);
    sets.forEach((st, i) => {
      check(st, uid, i + 1).forEach(e => ok(false, e));
      all.push({ k, uid, st });
      (st.body || []).forEach(b => { const t = kindOf(b); if (t) kinds[t] = (kinds[t] || 0) + 1; });
      (st.body || []).filter(b => b.svg).forEach(b => [...b.svg.matchAll(/\sid="([^"]+)"/g)].forEach(m => { ok(!svgIds[m[1]], 'svg id unique across sets: ' + m[1] + ' (' + st.id + ')'); svgIds[m[1]] = 1; }));
    });
  });
});
ok(all.length === 40, '40 sets in total: ' + all.length);
ok(all.reduce((n, x) => n + (x.st.qs || []).length, 0) === 160, '160 questions in total');
const sids = all.map(x => x.st.id);
ok(new Set(sids).size === sids.length, 'set ids unique');
const mk = all.flatMap(x => (x.st.qs || []).map(q => x.uid + '|L|' + x.st.id + ':' + q.id));
ok(new Set(mk).size === mk.length && mk.every(id => id.length <= 200 && /^[un][1-4]\|L\|[un][1-4]-L[1-5]:q[1-4]$/.test(id)), 'mistake ids unique, well-formed');
ok(all.every(x => x.st.qs.filter(ZR.isOpen).every(q => q.ref.length >= 15)), 'open questions have a full reference answer');
ok(all.every(x => x.st.body.some(b => b.table || b.svg || b.timeline) || x.k === 'social'), 'every science set has a table, SVG or timeline');

// 檢查器本身會擋下錯的資料
if (all.length) {
  const base = JSON.parse(JSON.stringify(all[0].st)), uid = all[0].uid;
  const bad = (fn, re, m) => { const s = JSON.parse(JSON.stringify(base)); fn(s); const e = check(s, uid, 1); ok(e.some(x => re.test(x)), 'validator catches: ' + m + ' → ' + e.join(' / ')); };
  const mcAt = base.qs.findIndex(q => q.type === 'mc');
  bad(s => { s.qs.pop(); }, /4 題/, 'only 3 questions');
  bad(s => { s.qs.reverse(); }, /由小到大|d 要是/, 'd not ascending');
  bad(s => { s.qs[1].id = 'q1'; }, /id 要是 q2/, 'duplicate question id');
  if (mcAt >= 0) {
    bad(s => { s.qs[mcAt].a = 9; }, /正解/, 'mc answer out of range');
    bad(s => { s.qs[mcAt].opts[1] = s.qs[mcAt].opts[0]; }, /重複/, 'duplicate options');
    bad(s => { s.qs[mcAt].opts[s.qs[mcAt].a] += '而且這個選項特別特別特別長'; }, /洩答/, 'correct option much longer');
  }
  bad(s => { s.qs[3] = { id: 'q4', d: 3, type: 'open', q: '你覺得呢？', ref: '' }; }, /參考答案|評分要點/, 'open without reference');
  bad(s => { s.body = ['太短了']; }, /字數/, 'material too short');
  bad(s => { s.body.push({ svg: '<svg viewBox="0 0 1 1"><script>x()</script></svg>', cap: 'x', alt: 'x' }); }, /script/, 'svg with script');
  bad(s => { s.id = 'u9-L1'; }, /id 要是/, 'wrong set id');
}

// 接線
['social', 'science'].forEach(k => {
  const h = fs.readFileSync(path.join(root, 'mindmap', k + '.html'), 'utf8').replace(/\?v=[0-9a-f]+"/g, '"'), at = s => h.indexOf('src="' + s + '"');   // 部署夾的 ?v= 快取參數不影響
  ok(at('data/' + k + '/unit3-4.js') > 0 && at('data/' + k + '/unit3-4.js') < at('data/' + k + '/lit1-2.js') && at('data/' + k + '/lit1-2.js') < at('data/' + k + '/lit3-4.js') && at('data/' + k + '/lit3-4.js') < at('mindmap.js'), k + '.html loads lit data after unit data, before engine');
  ok(at('../quizkit.js') > 0 && at('../quizkit.js') < at('../chinese/reading-core.js') && at('../chinese/reading-core.js') < at('mindmap.js'), k + '.html loads quizkit → reading-core → engine');
  ok(h.indexOf('href="../chinese/reading.css"') > 0 && h.indexOf('href="../chinese/reading.css"') < h.indexOf('href="mindmap.css"'), k + '.html loads reading.css before mindmap.css');
});
const mm = fs.readFileSync(path.join(root, 'mindmap', 'mindmap.js'), 'utf8');
const litSrc = mm.slice(mm.indexOf('/* ---------- 🧩 素養題組'), mm.indexOf('/* ---------- 📕 只練錯題'));
ok(litSrc.length > 500 && !/doneRec\(|KidsDone/.test(litSrc), 'mindmap.js literacy block does not touch unit completion');
ok(litSrc.includes("mkRec(u.id + '|L|' + LT.st.id + ':' + q.id") && litSrc.includes('coinAnswer(ok)') && !litSrc.includes('coinRound('), 'mindmap.js literacy: mistakes id, per-answer coins, no practice_round (sets < 5 questions)');
ok(mm.includes("data-v=\"lit\" hidden>🧩 素養題組</button>") && mm.includes("if(p.k === 'L')") && mm.includes("lit:'做素養題組'"), 'mindmap.js: 🧩 mode button next to 練習題, mistakes redo, login reason');
ok(fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8').includes("L: '素養題組'"), 'kids-mistakes.js: badge 素養題組');
ok(typeof ZR.blockHTML === 'function' && /<table>/.test(ZR.blockHTML({ table: { cap: 'c', head: ['a'], rows: [['1']] } })) && ZR.blockHTML('<b>').indexOf('&lt;b&gt;') > 0, 'reading-core blockHTML shared and escapes text');

console.log('mindmap-literacy material blocks: ' + Object.keys(kinds).map(t => t + ' ' + kinds[t]).join('、'));
console.log(`mindmap-literacy: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
