// chinese-writing.test.js — 國語〈作文〉資料與規則檢查（2026-11-08）
// 用法：node test/chinese-writing.test.js（smoke.js 也會跑）。只測一個檔：node test/chinese-writing.test.js t09（或 L16）
// - 目錄（chinese/writing/data/catalog.js）：50 題（文體 8/12/6/6/6/6/6、難度 1～3）、22 課（階段 5/5/5/7）、id 與題名唯一
// - 每題一支 topics/tNN.js、每課一支 lessons/LNN.js：格式（writing-core validateTopic／validateLesson）、跟目錄一致、不放個資
// - 做好的題目：審題正解在題目字串裡、圈對才過、四段都有範例主旨、選材干擾卡要「不寫」、心智圖畫得出來（四主枝＋細枝）
// - 做好的課：小練習 5～8 題、只能 mc／tf、單選只有一個正解（QuizKit.validate）
// - 頁面：writing.html 載入每一支檔；subjects.js 國語「✏️ 作文」卡；kids_writing 不同步、不連外、不接學習幣
'use strict';
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), dir = path.join(root, 'chinese', 'writing');
const W = require(path.join(dir, 'writing-core.js')), QK = require(path.join(root, 'quizkit.js')), C = require(path.join(dir, 'data', 'catalog.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL chinese-writing:', m); } };
const only = process.argv[2] && /^(t\d\d|L\d\d)$/.test(process.argv[2]) ? process.argv[2] : '';

// ---- 目錄 ----
const count = (a, k) => a.reduce((o, x) => (o[x[k]] = (o[x[k]] || 0) + 1, o), {});
ok(C.topics.length === 50 && C.topics.every((t, i) => t.id === 't' + String(i + 1).padStart(2, '0')), 'catalog: 50 topics t01～t50 in order');
ok(JSON.stringify(count(C.topics, 'genre')) === JSON.stringify({ person: 8, event: 12, object: 6, scene: 6, imagine: 6, feel: 6, explain: 6 }), 'catalog: genre split 8/12/6/6/6/6/6');
ok(C.topics.every(t => [1, 2, 3].includes(t.d) && W.GENRES[t.genre]) && W.ORDER.every(g => [1, 2, 3].filter(d => C.topics.some(t => t.genre === g && t.d === d)).length >= 2), 'catalog: d 1～3, every genre spans ≥ 2 levels');
ok(new Set(C.topics.map(t => t.title)).size === 50, 'catalog: titles unique');
ok(C.lessons.length === 22 && C.lessons.every((l, i) => l.id === 'L' + String(i + 1).padStart(2, '0') && l.goal && W.len(l.goal) <= 50), 'catalog: 22 lessons L01～L22, each has a goal');
ok(JSON.stringify(count(C.lessons, 'stage')) === JSON.stringify({ 1: 5, 2: 5, 3: 5, 4: 7 }), 'catalog: stages 5/5/5/7');
ok(['譬喻', '擬人', '誇飾', '排比', '設問', '對話', '五感'].every(w => C.lessons.some(l => l.stage === 4 && l.title.includes(w))), 'catalog: stage 4 = 7 rhetoric lessons');
ok(!W.BAN.test(JSON.stringify(C)), 'catalog: no personal / school info');

// ---- 每題、每課一支檔 ----
const T = {}, L = {};
C.topics.forEach(t => { const f = path.join(dir, 'topics', t.id + '.js'); ok(fs.existsSync(f), 'topic file exists: ' + t.id); if (fs.existsSync(f)) T[t.id] = require(f); });
C.lessons.forEach(l => { const f = path.join(dir, 'lessons', l.id + '.js'); ok(fs.existsSync(f), 'lesson file exists: ' + l.id); if (fs.existsSync(f)) L[l.id] = require(f); });
ok(fs.readdirSync(path.join(dir, 'topics')).length === 50 && fs.readdirSync(path.join(dir, 'lessons')).length === 22, 'no extra files in topics/ lessons/');
const sel = (o, id) => only ? (id === only ? o : null) : o;
W.validateAll(C, T, L).filter(m => !only || m.startsWith(only)).forEach(m => ok(false, m));
// 檔頭註解要寫題名（作者對檔不會對錯）
C.topics.concat(C.lessons).forEach(c => { const f = path.join(dir, c.stage ? 'lessons' : 'topics', c.id + '.js'); if (fs.existsSync(f)) ok(fs.readFileSync(f, 'utf8').split('\n')[0].includes('〈' + c.title + '〉'), c.id + ' header names 〈' + c.title + '〉'); });

const readyT = C.topics.filter(c => T[c.id] && !T[c.id].wip), readyL = C.lessons.filter(c => L[c.id] && !L[c.id].wip);
ok(['person', 'event', 'object', 'scene', 'imagine'].every(g => readyT.some(c => c.genre === g)) && readyT.length >= 5, 'samples cover 記人、記事、記物、寫景、想像: ' + readyT.map(c => c.id).join());
// Yoda 11-08 指定第一個樣本：〈我最喜歡的動漫〉（記物，取代「我的小寶貝」）；關鍵字＝最喜歡、動漫；不指定作品
ok(T.t25 && !T.t25.wip && T.t25.title === '我最喜歡的動漫' && T.t25.genre === 'object' && T.t25.keys.map(k => k.w).join() === '最喜歡,動漫' && T.t25.tip.includes('劇情大綱') && !C.topics.some(t => t.title === '我的小寶貝'), 't25 我最喜歡的動漫: ready, keys 最喜歡＋動漫, replaces 我的小寶貝');
ok(readyL.some(c => c.id === 'L01') && readyL.some(c => c.id === 'L16'), 'sample lessons L01 + L16 ready');

// ---- 做好的題目：每一步的規則 ----
readyT.forEach(c => {
  const t = sel(T[c.id], c.id); if (!t) return;
  const tag = c.id + ' ';
  // ① 審題
  t.keys.forEach(k => ok(t.title.includes(k.w), tag + '審題正解「' + k.w + '」在題目字串裡'));
  const right = t.seg.map((s, i) => i).filter(i => t.keys.some(k => k.w === t.seg[i]));
  ok(W.checkKeys(t, right).ok, tag + 'checkKeys: right answer passes');
  ok(!W.checkKeys(t, []).ok && W.checkKeys(t, []).miss.length === t.keys.length, tag + 'checkKeys: nothing circled fails');
  const allK = W.checkKeys(t, t.seg.map((s, i) => i));
  ok(t.keys.length === t.seg.length ? t.seg.length <= 2 && allK.ok : !allK.ok && allK.extra.length > 0, tag + 'checkKeys: circling everything fails (1～2 詞全是關鍵字的題目除外)');
  ok(!['鏡|子', '早|晨', '大|掃除', '運動|會', '讀|書|心得', '新學期|新|希望'].includes(t.seg.join('|')), tag + 'seg: 不把一個詞拆成單字（11-08 修掉的切法不准回來）');
  const gq = W.genreQ(t); ok(QK.validate(gq).length === 0 && gq.opts[gq.a] === W.GENRES[t.genre].s && gq.opts.every(o => W.len(o) === 2) && gq.why.includes(W.GENRES[t.genre].n), tag + 'genre question valid, 2-char options, answer = ' + W.GENRES[t.genre].s);
  // ② 發想 → ③ 選材
  const ideas = t.cards.flatMap((cd, ci) => cd.eg.slice(0, 2).map(e => ({ t: e, c: ci })));
  const keep = {}; W.pool(t, ideas).forEach(x => { keep[x.t] = x.c >= 0; });
  ok(W.pool(t, ideas).length === ideas.length + t.off.length, tag + 'pool mixes in every off card');
  ok(W.checkPick(t, ideas, keep).ok, tag + 'checkPick: drop off cards → ok');
  const bad = Object.assign({}, keep, { [t.off[0].t]: true }), rb = W.checkPick(t, ideas, bad);
  ok(!rb.ok && rb.offKept.length === 1 && rb.msg, tag + 'checkPick: keeping an off card fails');
  ok(!W.checkPick(t, ideas, {}).ok, tag + 'checkPick: undecided fails');
  // ④ 架構：四段
  ok(t.paras.length === 4 && W.GENRES[t.genre].paras.length === 4, tag + '四段都有');
  const items = ideas.map(x => ({ t: x.t, p: t.cards[x.c].p })), main = t.paras.map(p => p.eg[0]);
  ok(W.checkPlan(t, items, main).ok, tag + 'checkPlan: 4 main sentences + cards → ok');
  ok(!W.checkPlan(t, items, ['', main[1], main[2], main[3]]).ok && !W.checkPlan(t, items.filter(x => x.p !== 2), main).ok, tag + 'checkPlan: missing 主旨 or empty 高潮 fails');
  // ⑤ 心智圖
  const svg = W.mapSVG(t, { items, main });
  ok(svg.startsWith('<svg') && svg.endsWith('</svg>') && svg.includes('viewBox="0 0 800 1100"') && !/undefined|NaN/.test(svg), tag + 'mapSVG renders (A4 portrait viewBox)');
  ok(svg.includes(QK.esc(t.title)) && W.GENRES[t.genre].paras.every(n => svg.includes(n)), tag + 'mapSVG: center = title, 4 branches');
  ok((svg.match(/<rect /g) || []).length === 1 + 4 + 1 + Math.min(items.length, 4 * 6) || items.some((x, i, a) => a.filter(y => y.p === x.p).length > 6), tag + 'mapSVG: one leaf box per card');
  ok(W.checklist(t).length === W.CHECK.length + t.check.length, tag + 'checklist = common + topic');
});
// 心智圖：一段超過 6 張只畫 5 張＋「…還有」、主旨太長會截斷
{
  const t = T.t09, many = Array.from({ length: 9 }, (_, i) => ({ t: '小卡' + i, p: 1 })), svg = W.mapSVG(t, { items: many, main: ['很長'.repeat(25), 'b', 'c', 'd'] });
  ok(svg.includes('…還有 4 張') && !svg.includes('小卡5') && svg.includes('小卡4') && svg.includes('…</text>'), 'mapSVG: >6 leaves → 5 + 「…還有」, long 主旨 truncated');
  ok(!W.mapSVG(t, { items: [], main: [] }).includes('undefined') && W.mapSVG(t, { items: [], main: [] }).includes('主旨還沒寫'), 'mapSVG: empty state draws placeholders');
  ok(W.mapSVG(t, { items: [{ t: '<b>&"', p: 0 }], main: [] }).includes('&lt;b&gt;&amp;&quot;'), 'mapSVG escapes text');
}

// ---- 做好的課：小練習只有一個正解 ----
readyL.forEach(c => {
  const l = sel(L[c.id], c.id); if (!l) return;
  ok(l.quiz.length >= 5 && l.quiz.length <= 8, c.id + ' quiz 5～8: ' + l.quiz.length);
  l.quiz.forEach(q => ok(['mc', 'tf'].includes(q.type) && QK.validate(q).length === 0 && (q.type === 'tf' ? typeof q.a === 'boolean' : Number.isInteger(q.a) && new Set(q.opts).size === q.opts.length), c.id + ':' + q.id + ' auto-graded, exactly one right answer'));
  ok(l.cards.length >= 3 && l.cards.length <= 5 && l.compare.length >= 1, c.id + ' 3～5 cards + compare');
});

// ---- 本機紀錄大小：塞爆也很小（不同步，但也不能無限長）----
{
  const huge = { st: 5, reach: 9, sel: Array.from({ length: 99 }, (_, i) => i), ideas: Array.from({ length: 200 }, (_, i) => ({ t: 'x'.repeat(50) + i, c: 1 })), keep: {}, para: {}, main: ['y'.repeat(999), 'z'.repeat(999)], done: 1, junk: 'q'.repeat(9999) };
  huge.ideas.forEach(x => { huge.keep[x.t] = true; huge.para[x.t] = 2; });
  const n = W.normState(huge), b = JSON.stringify(n).length;
  ok(n.ideas.length <= W.IDEAS_MAX && n.ideas.every(x => W.len(x.t) <= W.IDEA_MAX) && n.main.every(s => s.length <= W.MAIN_MAX) && n.reach === 5 && !n.junk && b < 6000, 'normState caps one topic at ' + b + ' B');
  ok(JSON.stringify(W.normState(null)) === JSON.stringify({ st: 1, reach: 1, sel: [], ideas: [], keep: {}, para: {}, main: ['', '', '', ''] }), 'normState(null) = fresh');
}

// ---- 頁面接線 ----
{
  const html = fs.readFileSync(path.join(dir, 'writing.html'), 'utf8').replace(/\?v=[0-9a-f]+"/g, '"'), js = fs.readFileSync(path.join(dir, 'writing.js'), 'utf8');
  const at = s => html.indexOf('<script src="' + s + '"></script>');
  ok(at('../../quizkit.js') >= 0 && at('../../quizkit.js') < at('writing-core.js') && at('writing-core.js') < at('data/catalog.js') && at('data/catalog.js') < at('topics/t01.js'), 'writing.html: quizkit → core → catalog → topics');
  ok(C.topics.every(t => at('topics/' + t.id + '.js') > 0) && C.lessons.every(l => at('lessons/' + l.id + '.js') > at('topics/t50.js')) && at('writing.js') > at('lessons/L22.js'), 'writing.html loads all 50 topics + 22 lessons, then writing.js');
  ok(html.includes('href="../../style.css"') && html.includes('href="../reading.css"') && html.includes('href="writing.css"'), 'writing.html stylesheets');
  ok(!/fetch\(|XMLHttpRequest|sendBeacon|KidsCoins|KidsMistakes|api\./i.test(js.replace(/\/\*[\s\S]*?\*\//g, '')), 'writing.js: no network, no AI, no coins/mistakes');
  ok(js.includes("K = 'kids_writing'") && !fs.readFileSync(path.join(root, 'sync.js'), 'utf8').includes('kids_writing'), 'kids_writing is local only (not in sync.js)');
  const css = fs.readFileSync(path.join(dir, 'writing.css'), 'utf8');
  ok(/@page\{size:A4 portrait/.test(css) && /@media print\{/.test(css) && css.includes('.wr-map{break-after:page'), 'writing.css: A4 portrait print, map page then checklist page');
  const sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
  ok(sj.includes("{ id: 'writing', title: '作文', desc: () => wrDesc(), icon: '✏️', src: 'chinese/writing/writing.html' }") && /chinese: \[[\s\S]*?id: 'writing'[\s\S]*?\],\n\s+math:/.test(sj), 'subjects.js: 國語 tab has ✏️ 作文 card');
}

console.log(`chinese-writing: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
