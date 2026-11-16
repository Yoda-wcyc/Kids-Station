// island.test.js — 首頁學習島（island.js）純函式：時段、任務對應島、成長階段（完成度＋練習天數＋學會數）、連續天數；首頁接線
// 用法：node test/island.test.js
'use strict';
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL island:', m); } };
const I = require(path.join(root, 'island.js'));

// ---------- 時段（裝置時鐘）----------
ok([4, 5, 7, 8, 16, 17, 18, 19, 23, 0].map(I.phase).join() === 'night,dawn,dawn,day,day,dusk,dusk,night,night,night', 'phase boundaries');
ok(I.TIMES.map(t => t[0]).join() === 'dawn,day,dusk,night', 'four times');

// ---------- 今日清單 → 島上任務旗 ----------
{
  const T = { rows: [{ key: 'e', k: 'english', done: true }, { key: 'm', k: 'math', done: false }, { key: 'r', k: 'chinese', done: false }, { key: 'h', k: 'history', done: true }, { key: 'g', k: 'geo', done: false }], allDone: false, next: { key: 'm', k: 'math' } };
  const q = I.quests(T);
  ok(JSON.stringify(q.q) === '{"english":"done","math":"todo","chinese":"todo","history":"done","geo":"todo"}' && q.next === 'math' && q.all === false, '5 rows → 港口 done、數字塔／書院／燈塔 todo、時光碼頭 done；🦉 去數學 ' + JSON.stringify(q));
  const all = I.quests({ rows: T.rows.map(r => Object.assign({}, r, { done: true })), allDone: true, next: null });
  ok(all.all && all.next === null && Object.values(all.q).every(v => v === 'done'), 'all done → celebrate, owl free');
  ok(JSON.stringify(I.quests(null)) === '{"q":{},"next":null,"all":false}' && I.quests({ rows: [], allDone: true }).all === false, 'no list (logged out / goals all 0) → no flags, no party');
  ok(!('x' in I.quests({ rows: [{ k: 'x', done: false }], next: { k: 'x' } }).q) && I.quests({ rows: [{ k: 'x' }], next: { k: 'x' } }).next === null, 'unknown subject ignored');
  // 跟 kids-daily.js 的 checkDay 對：列的 k 一定是島
  const KD = require(path.join(root, 'kids-daily.js'))._core, c = KD.checkDay({}, 0, KD.GOAL_DEF);
  ok(c.rows.map(r => r.k).join() === 'english,math,chinese,history,geo' && c.rows.every(r => I.KS.includes(r.k)), 'checkDay rows map to islands: ' + c.rows.map(r => r.k));
}

// ---------- 連續天數、各島練習天數（kids_daily 合併後的 ddSum）----------
{
  const sum = { 261116: { e: [5, 4], j: [2, 2] }, 261115: { m: [3, 3] }, 261114: { v: [1, 1], c: [0, 0] }, 261112: { g: [2, 1] }, 261117: { e: [9, 9] }, bad: { e: [1, 1] } };
  const s = I.ddStats(sum, '261116');
  ok(s.streak === 3 && JSON.stringify(Object.keys(s.days).sort().map(k => k + s.days[k])) === '["english1","geo1","history1","math1"]', 'streak 3 (16,15,14; 13 missing), future day + bad key ignored, 0-count code ignored ' + JSON.stringify(s));
  ok(I.ddStats(sum, '261117').streak === 4 && I.ddStats({ 261115: { e: [1, 1] } }, '261116').streak === 1 && I.ddStats({ 261114: { e: [1, 1] } }, '261116').streak === 0, 'today not yet → count from yesterday; gap → 0');
  ok(I.ddStats({ 261231: { e: [1, 1] }, 270101: { m: [1, 1] } }, '270101').streak === 2 && I.ddStats({ 260228: { e: [1, 1] }, 260301: { e: [1, 1] } }, '260301').streak === 2, 'streak across month/year end');
  ok(I.ddStats(null, '261116').streak === 0 && I.ddStats({}, 'x').streak === 0, 'empty / bad input');
  // 用真的 syncmerge 寫兩台裝置再合併：同一天兩台都練只算一天
  const SM = require(path.join(root, 'syncmerge.js')), t = Date.parse('2026-11-16T04:00:00Z');
  let dd = SM.ddAdd({}, 'devA', t, 'e', true); dd = SM.ddAdd(dd, 'devB', t, 'e', false); dd = SM.ddAdd(dd, 'devA', t - 864e5, 's', true);
  const r = I.ddStats(SM.ddSum(dd), SM.ddDay(t));
  ok(r.streak === 2 && r.days.english === 1 && r.days.social === 1, 'real dd (two devices) → streak 2, english 1 day ' + JSON.stringify(r));
}

// ---------- 完成度（KidsCompletion.build 的 subjects）----------
{
  const subs = [{ k: 'chinese', units: [{ status: 'done', pct: 100 }, { status: 'todo', pct: 0 }] }, { k: 'idioms', units: [{ status: 'doing', pct: 50 }, { status: 'todo' }] },
    { k: 'scratch', units: [{ status: 'done' }] }, { k: 'math', units: [{ status: 'doing', pct: 140 }] }, { k: 'nope', units: [{ status: 'done' }] }];
  ok(JSON.stringify(I.pctOf(subs)) === '{"chinese":38,"game":100,"math":100}', '國語閱讀＋成語 → 書院 (100+0+50+0)/4、Scratch → 遊樂園、pct clamp、unknown ignored ' + JSON.stringify(I.pctOf(subs)));
  ok(JSON.stringify(I.pctOf(null)) === '{}', 'pctOf(null)');
  const KC = require(path.join(root, 'completion.js')), cat = KC.catalog({ textbook: [{ id: 'u1', title: 'x' }], zhCatalog: [{ id: 'zh1-01', lv: 1 }] });
  ok(cat.every(s => s.k in { chinese: 1, idioms: 1, english: 1, social: 1, science: 1, math: 1, geo: 1, ai: 1, scratch: 1 }), 'every catalog subject maps to an island: ' + cat.map(s => s.k));
  ok(I.learnedN({ a: { at: '2026-11-01' }, b: { at: '2026-11-02', removedAt: '2026-11-03' }, c: {} }) === 1 && I.learnedN(null) === 0, 'learned count skips removed');
}

// ---------- 成長階段 ----------
{
  ok(I.stage({}) === 0 && I.stage({ pct: 0, days: 0 }) === 0, 'nothing → 0');
  ok(I.stage({ days: 1 }) === 1 && I.stage({ pct: 14 }) === 1 && I.stage({ pct: 15 }) === 2 && I.stage({ pct: 39 }) === 2 && I.stage({ pct: 40 }) === 3 && I.stage({ pct: 69 }) === 3 && I.stage({ pct: 70 }) === 4 && I.stage({ pct: 100, days: 30 }) === 4, 'thresholds 15 / 40 / 70');
  ok(I.stage({ days: 5 }) === 2 && I.stage({ days: 10 }) === 2 && I.stage({ days: 99 }) === 2 && I.stage({ days: 10, pct: 10 }) === 3, 'days ×3 capped at 10 days (=30)');
  ok(I.stage({ learned: 50 }) === 2 && I.score({ learned: 1000 }) === 30 && I.stage({ pct: -5, days: -3 }) === 0, 'learned ×0.3 capped 30; negatives clamp');
  ok([0, 1, 2, 3, 6, 7, 13, 14, 100].map(I.townStage).join() === '0,1,1,2,2,3,3,4,4', 'town stage by streak 1/3/7/14');
  const g = I.growth({ pct: { english: 10, math: 80 }, days: { english: 2 }, learned: 20, streak: 7 });
  ok(g.isl.english === 2 && g.isl.math === 4 && g.isl.game === 0 && g.town === 3 && Object.keys(g.isl).length === 9, 'growth: english 10+6+6=22 → 2, math 80 → 4, game 0, town 3 ' + JSON.stringify(g));
  ok(I.growth({ learned: 1000 }).isl.math === 0 && I.growth({ learned: 1000 }).isl.english === 2, 'learned counts only for english');
  ok(JSON.stringify(I.growth(null)) === JSON.stringify({ isl: Object.fromEntries(I.KS.map(k => [k, 0])), town: 0 }), 'growth(null) all 0');
}

// ---------- 接線：首頁載入、9 島＝9 科、活動清單來自 subjects.js、不新增同步欄位 ----------
{
  const idx = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), js = fs.readFileSync(path.join(root, 'island.js'), 'utf8'), sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
  ok(/<link rel="stylesheet" href="island\.css(\?v=[0-9a-f]+)?">/.test(idx) && /<script src="island\.js(\?v=[0-9a-f]+)?"><\/script>/.test(idx) && idx.indexOf('app.js') < idx.indexOf('island.js') && idx.indexOf('id="island"') < idx.indexOf('id="assist"'), 'index.html: island.css, #island above #assist, island.js after app.js');
  const sk = [...sj.matchAll(/\{ k: '([a-z]+)', n: /g)].map(m => m[1]);
  ok(sk.length === 9 && sk.every(k => I.KS.includes(k)) && I.KS.length === 9, 'islands = 9 subject tabs ' + sk);
  ok(sj.includes('window.KidsActs = ACTS') && /english: \[\{ id: 'learn'/.test(sj) && sj.includes("href: 'gept/index.html'"), 'subjects.js exposes ACTS (+ english harbour list incl. 全民英檢)');
  ok(!/requestAnimationFrame\(|requestPointerLock|addEventListener\('(touchmove|wheel)'/.test(js), 'no rAF loop, no pointer lock, no scroll capture');
  ok(js.includes("UIK = 'kids_island_ui'") && !fs.readFileSync(path.join(root, 'sync.js'), 'utf8').includes('kids_island_ui') && !fs.readFileSync(path.join(root, 'syncmerge.js'), 'utf8').includes('island'), 'only local kids_island_ui; nothing new in sync');
  ok(['hero-island', 'hero-world', 'kids-town'].every(id => js.includes(`['${id}',`)) && !/KidsCoins\.(report|answer|activity)/.test(js), '遊樂園三個傳送門；島不送學習幣事件');
  const css = fs.readFileSync(path.join(root, 'island.css'), 'utf8');
  ok(css.includes('prefers-reduced-motion') && css.includes('.isl-pause') && /body\.home-page #island\{display:block\}/.test(css), 'css: reduced motion, pause when hidden, only on #home');
  const kb = (Buffer.byteLength(js) + Buffer.byteLength(css)) / 1024;
  ok(kb < 60, 'island.js + island.css < 60KB: ' + kb.toFixed(1) + ' KB');
}

console.log(`island: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
