#!/usr/bin/env node
/* english-reading/check.js — 英文閱讀測驗的題目檢查工具（CONTRACT.md §7）。
   用法（在網站根目錄或任何地方）：
     node english-reading/check.js            檢查 english-reading/data/ 全部檔案；有錯列出來、exit 1
     node english-reading/check.js a3         只看作者 3 的檔（data/a3.js）；撞文仍然跟全部的篇比
     node english-reading/check.js --final    交稿檢查：另外要求每位作者 38 篇都到齊、每種文體至少 3 篇、全部 200 篇
     node english-reading/check.js --words    另外列出每篇的表外字（含已註解的），給作者自己看
   檢查：格式、id 唯一、id 在作者自己的篇號範圍、主題在作者自己的主題範圍、字數、句長、一個字串一句、表外字 ≤ 3 而且都有中文註解、
         專有名詞要在名單裡、每題四個不重複的選項、正解索引、解說（中文）、答案依據 ev 找得到而且只對到一句、題型規則與配比、篇與篇撞文／過度相似。
   字表：易＝站上 lv1～lv2 單字＋基本功能詞；中＝再加 lv3；難＝再加教育部 2000 字＋CEFR-J A1～A2（最高 A2，不收 B1 以上）。變化形（複數、時態、比較級、-ly）自動認。 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const HERE = __dirname, SITE = path.resolve(HERE, '..'), DATA = path.join(HERE, 'data');
const ER = require(path.join(HERE, 'reading-core.js'));
const GC = require(path.join(SITE, 'gept', 'gept-core.js'));   // 斷字 tokens()、變化形 stems() 跟英檢同一套
const VOC = Object.assign({}, require(path.join(SITE, 'gept', 'vocab', 'moe2000.js')), require(path.join(SITE, 'gept', 'vocab', 'cefrj.js')), require(path.join(SITE, 'gept', 'vocab', 'names.js')));

// ---------- 分工：每位作者的檔案、篇號、主題（CONTRACT.md §8；改這裡要同步改 CONTRACT） ----------
const OWN = {
  s0: { who: '樣本', e: [1, 4], m: [1, 3], h: [1, 3], topics: null },
  a1: { who: '作者 1', e: [5, 20], m: [4, 16], h: [4, 12], topics: ['school', 'friend', 'library', 'club'] },
  a2: { who: '作者 2', e: [21, 35], m: [17, 30], h: [13, 21], topics: ['animal', 'plant', 'weather', 'ocean'] },
  a3: { who: '作者 3', e: [36, 50], m: [31, 44], h: [22, 30], topics: ['festival', 'food', 'family', 'home'] },
  a4: { who: '作者 4', e: [51, 65], m: [45, 57], h: [31, 40], topics: ['sport', 'hobby', 'health', 'art'] },
  a5: { who: '作者 5', e: [66, 80], m: [58, 70], h: [41, 50], topics: ['science', 'taiwan', 'travel', 'shopping'] }
};
const TOPICS = { school: '學校', friend: '朋友', library: '圖書館', club: '社團才藝', animal: '動物', plant: '植物', weather: '天氣季節', ocean: '海洋環境', festival: '節日', food: '食物', family: '家人', home: '家裡生活',
  sport: '運動', hobby: '嗜好', health: '健康身體', art: '音樂美術', science: '科學小知識', taiwan: '台灣在地', travel: '交通旅行', shopping: '購物金錢' };
// 題型配比（全部題目的百分比範圍；一個檔 ≥ 30 題才檢查）
const MIX = { main: [15, 25], detail: [30, 45], infer: [10, 25], vocab: [10, 20], ref: [10, 20] };
const PRON = ['it', 'its', 'they', 'them', 'their', 'he', 'him', 'his', 'she', 'her', 'we', 'us', 'our', 'this', 'that', 'these', 'those', 'there', 'one'];
// 每一級都可以用的基本功能詞（代名詞、冠詞、介系詞、連接詞、助動詞、數字）
const FUNC = ('a an the this that these those i you he she it we they me him her us them my your his its our their mine yours ours theirs myself yourself himself herself itself ourselves themselves ' +
  'and or but so because if when than then as at by for from in into of off on onto out over to up down with without about after before under above near between behind around through during until since ' +
  'be am is are was were been being do does did done have has had will would can could may might must shall should not no yes there here who what where why how which whose ' +
  'all any some every each other another much many more most very too also just only both either neither nor own same such ' +
  'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand ' +
  'first second third last next ok okay mr mrs ms dr am pm dad').split(' ');   // dad：教育部表只收 father／daddy，孩子文章一定會用
// 題目、選項另外可以用的字（題目說法，不算文章用字）
const QWORDS = 'paragraph mainly main idea probably true false according sentence line word mean means story article passage notice letter email title best describe writer text information refer refers diary schedule dialogue table step steps reason most'.split(' ');

function addWords(S, s) { String(s).replace(/\(([^)]*)\)/g, ',$1').split(/[,\/]/).forEach(w => w.split(/[\s-]+/).map(t => t.replace(/[^A-Za-z']/g, '').toLowerCase()).filter(Boolean).forEach(t => { S[t] = 1; if (/[^s]s$/.test(t) && t.length > 3) S[t.slice(0, -1)] = 1; })); }
function siteWords() { const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx.window); ['', '-2', '-3', '-4', '-5', '-6', '-7', '-8'].forEach(f => { const p = path.join(SITE, 'data', 'words' + f + '.js'); if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx.window); }); return ctx.window.DATA_WORDS || []; }
let LEX = null;
function lexicons() {
  if (LEX) return LEX;
  const W = siteWords(), base = {}; FUNC.forEach(w => { base[w] = 1; }); GC.lexOf('e', {}) && Object.keys(GC.lexOf('e', {})).forEach(w => { base[w] = 1; });   // gept-core 的 ALWAYS（oh、wow、序數…）
  const L1 = Object.assign({}, base); W.filter(w => w.lv <= 2).forEach(w => addWords(L1, w.w));
  const L2 = Object.assign({}, L1); W.filter(w => w.lv === 3).forEach(w => addWords(L2, w.w));
  const L3 = Object.assign({}, L2); (VOC.moe.t1 || []).concat(VOC.moe.t2 || [], VOC.cefrj.A1 || [], VOC.cefrj.A2 || []).forEach(s => addWords(L3, s));   // 國中＝教育部 2000＋CEFR-J A2 以下
  const names = {}; (VOC.names || []).forEach(n => GC.tokens(n).forEach(t => { names[t.w] = 1; }));
  const q = {}; QWORDS.forEach(w => { q[w] = 1; });
  LEX = { 1: L1, 2: L2, 3: L3, names, q };
  return LEX;
}
const inLex = (S, k) => GC.stems(k, 'e').some(s => S[s]);
const CJK = /[㐀-鿿]/, cjkN = s => (String(s).match(/[㐀-鿿]/g) || []).length;
const str = x => typeof x === 'string' && x.trim().length > 0;
const normOpt = s => String(s).toLowerCase().replace(/[^a-z0-9㐀-鿿]+/g, ' ').trim();
const ownerOf = id => { const m = ER.ID_RE.exec(id || ''); if (!m) return null; const n = +m[2]; return Object.keys(OWN).find(k => n >= OWN[k][m[1]][0] && n <= OWN[k][m[1]][1]) || null; };
const hasWord = (text, w) => new RegExp('(^|[^A-Za-z])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^A-Za-z]|$)', 'i').test(text);

// 表外字：回傳 {off:{小寫:[原字]}, unglossed:[…], names:[…], unknownNames:[…]}
function vocabOf(art, extraText) {
  const X = lexicons(), S = X[art.lv] || X[1], gl = Object.keys(art.gloss || {}).map(k => k.toLowerCase()), nm = {}, out = { off: {}, unglossed: {}, usedNames: {}, unknownNames: {}, qOff: {} };
  (art.names || []).forEach(n => GC.tokens(n).forEach(t => { nm[t.w] = 1; }));
  (art.body || []).forEach(b => { if (b && b.who) GC.tokens(b.who).forEach(t => { if (!X.names[t.w] && !nm[t.w] && !inLex(S, t.k)) out.unknownNames[t.w] = 1; else out.usedNames[t.w] = 1; }); });
  const look = (text, isQ) => GC.tokens(text).forEach(t => {
    if (inLex(S, t.k) || (isQ && X.q[t.k])) return;
    if (/^[A-Z]/.test(t.w) && (X.names[t.w] || nm[t.w])) { out.usedNames[t.w] = 1; return; }
    const g = gl.find(k => k === t.k || GC.stems(t.k, 'e').indexOf(k) >= 0);
    if (g) { out.off[g] = 1; return; }
    (isQ ? out.qOff : out.unglossed)[t.k] = 1;   // 大寫開頭（句首、標題）也一樣：不是名單裡的專有名詞就算表外字
  });
  look(art.title || '', false); ER.units(art).forEach(u => look(u.t, false));
  (art.qs || []).forEach(q => { look(q.q || '', true); (q.opts || []).forEach(o => look(o, true)); });
  if (extraText) look(extraText, false);
  return out;
}

function checkArt(art, own) {
  const E = [], W = [], id = art && art.id || '?', add = m => E.push(id + '：' + m);
  if (!art || typeof art !== 'object') return { E: ['不是物件'], W };
  const m = ER.ID_RE.exec(art.id || '');
  if (!m) add('id 要像 e001（易）、m001（中）、h001（難）');
  const L = ER.LV[art.lv]; if (!L) { add('lv 要是 1（易）、2（中）、3（難）'); return { E, W }; }
  if (m && ER.lvOf(art.id) !== art.lv) add('id 開頭字母跟 lv 不一樣（e＝1、m＝2、h＝3）');
  if (own && ownerOf(art.id) !== own) add('這個篇號不是這個檔的（' + OWN[own].who + '的範圍：易 e' + OWN[own].e.join('～') + '、中 m' + OWN[own].m.join('～') + '、難 h' + OWN[own].h.join('～') + '）');
  if (!ER.GENRES[art.genre]) add('genre 只能用：' + Object.keys(ER.GENRES).join(', '));
  if (!TOPICS[art.topic]) add('topic 只能用：' + Object.keys(TOPICS).join(', '));
  else if (own && OWN[own].topics && OWN[own].topics.indexOf(art.topic) < 0) add('topic「' + art.topic + '」不是' + OWN[own].who + '的主題（' + OWN[own].topics.join(', ') + '）');
  if (!str(art.title) || ER.wordsOf(art.title) > 8 || CJK.test(art.title)) add('title 要是英文、1～8 個字');
  if (!str(art.zh) || !CJK.test(art.zh)) add('zh（中文標題）要寫');
  if (art.names != null && (!Array.isArray(art.names) || art.names.length > 6 || !art.names.every(str))) add('names 要是字串陣列、最多 6 個');
  const gl = art.gloss || {};
  if (typeof gl !== 'object' || Array.isArray(gl)) add('gloss 要是 {英文字: 中文}');
  else {
    if (Object.keys(gl).length > 3) add('gloss 最多 3 個字');
    Object.keys(gl).forEach(k => {
      if (!/^[a-z][a-z'-]*$/i.test(k)) add('gloss 的 key 要是一個英文字：' + k);
      if (!str(gl[k]) || !CJK.test(gl[k]) || gl[k].length > 12) add('gloss「' + k + '」的中文要寫、最多 12 個字');
      if (!ER.units(art).some(u => hasWord(u.t, k))) add('gloss「' + k + '」要照文章裡出現的樣子寫（文章裡找不到這個字）');
    });
  }
  // body
  if (!Array.isArray(art.body) || !art.body.length) { add('body 是空的'); return { E, W }; }
  art.body.forEach((b, i) => {
    const w = 'body[' + i + '] ';
    if (Array.isArray(b)) { if (!b.length || !b.every(str)) add(w + '一段要是句子字串陣列'); }
    else if (b && b.who != null) { if (!str(b.who) || !Array.isArray(b.s) || !b.s.length || !b.s.every(str)) add(w + '對話要寫成 {who:"Amy", s:["句子", …]}'); }
    else if (b && b.h != null) { if (!str(b.h)) add(w + '標題 h 空白'); }
    else if (b && b.table != null) { const t = b.table; if (!Array.isArray(t) || t.length < 3 || !t.every(r => Array.isArray(r) && r.length === t[0].length && r.length >= 2 && r.every(c => str(String(c))))) add(w + 'table 要是 [[表頭…], [列…], …]，至少 2 列資料、每列格數一樣'); }
    else add(w + '不認得的區塊（只能用：句子陣列、{who,s}、{h}、{table}）');
  });
  const us = ER.units(art), wc = ER.wordCount(art);
  if (wc < L.min || wc > L.max) add('字數 ' + wc + '，' + L.name + '要 ' + L.min + '～' + L.max + ' 字');
  us.forEach(u => {
    if (u.k !== 's') return;
    if (CJK.test(u.t)) add('文章裡不能有中文：' + u.t);
    const n = ER.wordsOf(u.t); if (n > L.sl) add('句子太長（' + n + ' 字，' + L.name + '最多 ' + L.sl + ' 字）：' + u.t);
    if (!/[.!?]["')’”]?$/.test(u.t.trim())) add('句子要用 . ! ? 結尾（一個字串一句）：' + u.t);
    if (/[a-z0-9][.!?]["')’”]?\s+["“‘(]?[A-Z]/.test(u.t.replace(/\b(Mr|Mrs|Ms|Dr|St)\.\s/g, '$1 ').replace(/\b([ap])\.m\.\s/gi, '$1m '))) add('一個字串只能放一句（拆成兩個字串，答案依據才標得準）：' + u.t);
  });
  // 用字
  const V = vocabOf(art), offN = Object.keys(V.off).length + Object.keys(V.unglossed).length;
  if (Object.keys(V.unglossed).length) add('字表外的字要加中文註解 gloss（或換成字表裡的字；人名、地名寫進 names）：' + Object.keys(V.unglossed).join(', '));
  if (offN > 3) add('字表外的字 ' + offN + ' 個，最多 3 個：' + Object.keys(V.off).concat(Object.keys(V.unglossed)).join(', '));
  if (Object.keys(V.qOff).length) add('題目或選項用了字表外的字（題目不能有新字）：' + Object.keys(V.qOff).join(', '));
  if (Object.keys(V.unknownNames).length) add('專有名詞不在名單裡，要寫進 names：' + Object.keys(V.unknownNames).join(', '));
  Object.keys(gl).forEach(k => { if (!V.off[k.toLowerCase()]) W.push(id + '：gloss「' + k + '」本來就在字表裡，可以不用註解'); });
  // 題目
  const qs = art.qs; if (!Array.isArray(qs)) { add('沒有 qs'); return { E, W, V }; }
  if (qs.length < L.q[0] || qs.length > L.q[1]) add('題數 ' + qs.length + '，' + L.name + '要 ' + (L.q[0] === L.q[1] ? L.q[0] : L.q.join('～')) + ' 題');
  const cnt = {}, whys = {};
  qs.forEach((q, i) => {
    const w = 'qs[' + i + '] ';
    if (q.id !== 'q' + (i + 1)) add(w + 'id 要照順序 q1、q2…');
    if (!ER.KINDS[q.k]) { add(w + 'k（題型）只能用：' + Object.keys(ER.KINDS).join(', ')); return; }
    cnt[q.k] = (cnt[q.k] || 0) + 1;
    if (!str(q.q) || CJK.test(q.q) || !/[?:.]$/.test(q.q.trim())) add(w + '題目 q 要是英文，用 ? 或 : 結尾');
    if (!Array.isArray(q.opts) || q.opts.length !== 4 || !q.opts.every(o => str(String(o)))) add(w + '要剛好 4 個選項');
    else {
      if (new Set(q.opts.map(normOpt)).size !== 4) add(w + '選項不能重複');
      const zh = q.opts.filter(o => CJK.test(o)).length; if (zh && zh !== 4) add(w + '選項要全部英文或全部中文');
    }
    if (!(Number.isInteger(q.a) && q.a >= 0 && q.a <= 3)) add(w + 'a（正解）要是 0～3');
    if (!str(q.why) || cjkN(q.why) < 6 || q.why.length > 150) add(w + 'why（中文解說）要寫，6～150 字');
    else if (whys[q.why]) add(w + '解說跟別題一樣'); else whys[q.why] = 1;
    if (!Array.isArray(q.ev) || q.ev.length < 1 || q.ev.length > 2 || !q.ev.every(str)) { add(w + 'ev（答案依據）要 1～2 段原文'); return; }
    const hit = ER.evUnits(art, q);
    hit.forEach((h, j) => { if (h < 0) add(w + 'ev「' + q.ev[j] + '」在文章裡要剛好對到一句（照原文抄一段，大小寫、標點都一樣）'); });
    const evText = hit.filter(h => h >= 0).map(h => us[h].t).join(' ');
    if (q.k === 'ref') {
      const m2 = /["“']([A-Za-z]+)["”']/.exec(q.q || ''), p = m2 && m2[1].toLowerCase();
      if (!p || PRON.indexOf(p) < 0) add(w + '指代題的題目要用引號標出代名詞，例如 What does "it" mean?（可用：' + PRON.join(', ') + '）');
      else if (!hasWord(evText, p)) add(w + '指代題的 ev 要是有「' + p + '」的那一句');
    }
    if (q.k === 'vocab') {
      const m3 = /["“']([A-Za-z][A-Za-z' -]*)["”']/.exec(q.q || ''), v = m3 && m3[1];
      if (!v) add(w + '字義題的題目要用引號標出那個字，例如 What does "busy" mean here?');
      else if (!hasWord(evText, v)) add(w + '字義題的 ev 要是有「' + v + '」的那一句');
    }
  });
  if (!cnt.detail) add('每篇至少 1 題細節題（detail）');
  Object.keys(cnt).forEach(k => { if (cnt[k] > 2) add('同一種題型最多 2 題（' + k + ' 有 ' + cnt[k] + ' 題）'); });
  if (art.lv === 1 && (cnt.infer || 0) > 1) add('易的推論題最多 1 題');
  if (art.lv === 3 && !(cnt.main || cnt.infer)) add('難要有主旨或推論題');
  return { E, W, V };
}

// 撞文：同一句（≥ 7 字）一樣，或 5 字連續片段重疊 ≥ 30%（且至少 3 段）；標題一樣
function similar(arts) {
  const out = [], W = t => GC.norm(t).split(' ').filter(Boolean);
  const U = arts.map(a => { const ws = W(ER.units(a).map(u => u.t).join(' ')), g = new Set(); for (let i = 0; i + 5 <= ws.length; i++) g.add(ws.slice(i, i + 5).join(' ')); return { id: a.id, t: GC.norm(a.title || ''), g, sen: new Set(ER.units(a).map(u => W(u.t).join(' ')).filter(x => x.split(' ').length >= 7)) }; });
  for (let i = 0; i < U.length; i++) for (let j = i + 1; j < U.length; j++) {
    const a = U[i], b = U[j];
    if (a.t && a.t === b.t) out.push('標題一樣：' + a.id + ' ↔ ' + b.id);
    const same = [...a.sen].filter(x => b.sen.has(x))[0];
    const [sm, lg] = a.g.size < b.g.size ? [a.g, b.g] : [b.g, a.g]; let k = 0; sm.forEach(x => { if (lg.has(x)) k++; });
    if (same || (sm.size && k >= 3 && k / sm.size >= 0.3)) out.push('撞文／過度相似：' + a.id + ' ↔ ' + b.id + '（' + (same ? '同一句「' + same + '」' : '5 字片段重疊 ' + Math.round(k / sm.size * 100) + '%') + '）');
  }
  return out;
}
function mixErr(label, arts) {
  const qs = [].concat(...arts.map(a => a.qs || [])), n = qs.length, E = [];
  if (n < 30) return E;
  Object.keys(MIX).forEach(k => { const p = Math.round(qs.filter(q => q.k === k).length / n * 100); if (p < MIX[k][0] || p > MIX[k][1]) E.push(label + '：題型配比 ' + ER.KINDS[k] + ' ' + p + '%，要 ' + MIX[k].join('～') + '%（共 ' + n + ' 題）'); });
  // 正解常常是最長的選項＝孩子會學到「挑最長的」：最多一半
  const longest = qs.filter(q => Array.isArray(q.opts) && q.opts.length === 4 && q.opts.every((o, i) => i === q.a || String(o).length < String(q.opts[q.a]).length)).length;
  if (longest / n > 0.5) E.push(label + '：正解是最長選項的題占 ' + Math.round(longest / n * 100) + '%，最多 50%（把錯的選項寫長一點）');
  return E;
}

function loadFile(f) { const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx.window); vm.runInContext(fs.readFileSync(f, 'utf8'), ctx.window, { filename: f }); return ctx.window.DATA_ER || []; }
function run(argv) {
  argv = argv || [];
  const only = argv.filter(a => !a.startsWith('--')).map(a => a.replace(/\.js$/, '')), final = argv.includes('--final'), showWords = argv.includes('--words');
  const errors = [], warns = [], info = [], all = [], ids = {}, byFile = {};
  Object.keys(OWN).forEach(k => {
    const f = path.join(DATA, k + '.js'); if (!fs.existsSync(f)) { errors.push('少了 data/' + k + '.js'); return; }
    const txt = fs.readFileSync(f, 'utf8'); if (txt.charCodeAt(0) === 0xfeff) errors.push('data/' + k + '.js 不能有 BOM（存成 UTF-8 無 BOM）');
    let arts; try { arts = loadFile(f); } catch (e) { errors.push('data/' + k + '.js 載入失敗：' + e.message); return; }
    byFile[k] = arts;
    arts.forEach(a => { if (ids[a && a.id]) errors.push('篇 id 重複：' + a.id + '（' + ids[a.id] + '、' + k + '）'); ids[a && a.id] = k; all.push(a); });
  });
  const files = only.length ? only : Object.keys(byFile);
  files.forEach(k => {
    if (!OWN[k]) { errors.push('不認得的檔：' + k + '（只有 ' + Object.keys(OWN).join(', ') + '）'); return; }
    const arts = byFile[k] || [];
    arts.forEach(a => { const r = checkArt(a, k); errors.push(...r.E.map(e => k + '.js ' + e)); warns.push(...r.W.map(w => k + '.js ' + w)); if (showWords && r.V) info.push(a.id + ' 表外字：' + (Object.keys(r.V.off).join(', ') || '（無）')); });
    errors.push(...mixErr(k + '.js', arts));
    const o = OWN[k], quota = (o.e[1] - o.e[0] + 1) + (o.m[1] - o.m[0] + 1) + (o.h[1] - o.h[0] + 1);
    info.push(k + '.js（' + o.who + '）：' + arts.length + ' / ' + quota + ' 篇');
    if (final && arts.length !== quota) errors.push(k + '.js：交稿要 ' + quota + ' 篇，現在 ' + arts.length + ' 篇');
    if (final && k !== 's0') Object.keys(ER.GENRES).forEach(g => { const n = arts.filter(a => a.genre === g).length; if (n < 3) errors.push(k + '.js：文體 ' + g + '（' + ER.GENRES[g] + '）只有 ' + n + ' 篇，每種至少 3 篇'); });
  });
  const ok = all.filter(a => a && ER.ID_RE.test(a.id || ''));
  errors.push(...similar(ok).filter(d => !only.length || only.some(k => (byFile[k] || []).some(a => d.indexOf(a.id) >= 0))));
  if (!only.length) errors.push(...mixErr('全部', ok));
  if (final) [1, 2, 3].forEach(lv => { const n = ok.filter(a => a.lv === lv).length; if (n !== ER.LV[lv].n) errors.push('交稿：' + ER.LV[lv].name + '要 ' + ER.LV[lv].n + ' 篇，現在 ' + n + ' 篇'); });
  return { errors, warns, info, arts: all };
}
if (require.main === module) {
  const r = run(process.argv.slice(2));
  r.info.forEach(x => console.log('· ' + x));
  r.warns.forEach(w => console.log('⚠ ' + w));
  r.errors.forEach(e => console.log('✗ ' + e));
  const nq = r.arts.reduce((n, a) => n + ((a && a.qs) || []).length, 0);
  console.log(`english-reading check: ${r.arts.length} 篇、${nq} 題`);
  console.log(r.errors.length ? `✗ ${r.errors.length} 個錯誤` : '✓ 全部通過');
  process.exit(r.errors.length ? 1 : 0);
}
module.exports = { run, checkArt, vocabOf, similar, mixErr, lexicons, loadFile, OWN, TOPICS, MIX, PRON };
