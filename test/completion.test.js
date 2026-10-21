// completion.test.js — 單元完成判定（completion.js）＋同步 v6 的 done 欄位（syncmerge.js）單元測試（v6＝2026-10-21 done 多 mp、mx）
// 用法：node test/completion.test.js（smoke.js 也會跑這支）
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL completion:', m); } };
const SM = require(path.join(root, 'syncmerge.js'));
const KC = require(path.join(root, 'completion.js'));
const KE = require(path.join(root, 'engine.js'));
const ctxD = { window: {} }; vm.createContext(ctxD);
['words', 'words-2', 'words-3', 'words-4', 'words-5', 'phrases', 'roots', 'grammar', 'patterns', 'textbook'].forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctxD, { filename: n + '.js' }));
const W = ctxD.window;
const DATA = { textbook: W.DATA_TEXTBOOK, words: W.DATA_WORDS, phrases: W.DATA_PHRASES, roots: W.DATA_ROOTS, grammar: W.DATA_GRAMMAR, patterns: W.DATA_PATTERNS, KE };
const C = SM.canon, same = (a, b) => C(a) === C(b);
const ev = (key, ctx) => KC.evaluate(key, DATA, ctx || {});
const T0 = Date.parse('2026-10-20T01:00:00Z');

// ---------- 英文課本單元 ----------
{
  const U = 'hanlin-5-u2', items = KC.tbItems(DATA, U, KE);
  ok(items.length === 15 + 1 + 2 && items.every(x => x.id && x.qp && x.label), 'tbItems: U2 = 15 words + 1 phrase + 2 patterns (grammar not counted): ' + items.length);
  const learnAll = (xs, at) => Object.fromEntries(xs.map(x => [x.id, { at: at || '2026-10-20T01:00:00Z', score: '3/3' }]));
  const done = (best, last) => ({ tb: { [U]: { best, last: last == null ? best : last, at: T0 } } });
  let r = ev('tb:' + U, {});
  ok(r.status === 'todo' && r.pct === 0 && r.checklist.length === 4 && r.checklist.every(c => !c.ok), 'tb: empty → todo 0%, 4 checks (單字／片語／句型／考試)');
  r = ev('tb:' + U, { learned: learnAll(items), done: done(80) });
  ok(r.status === 'done' && r.pct === 100 && r.checklist.every(c => c.ok), 'tb: all learned + exam 80 (exactly) → done');
  r = ev('tb:' + U, { learned: learnAll(items), done: done(79) });
  ok(r.status === 'doing' && r.pct === 75 && !r.checklist[3].ok && /最高 79 分/.test(r.checklist[3].detail), 'tb: exam 79 → doing 75%, says best 79: ' + r.pct + ' ' + r.checklist[3].detail);
  r = ev('tb:' + U, { learned: learnAll(items) });
  ok(r.status === 'doing' && /還沒有考試紀錄/.test(r.checklist[3].detail), 'tb: all learned, no exam record → doing, says 還沒有考試紀錄');
  r = ev('tb:' + U, { done: done(85) });
  ok(r.status === 'doing' && r.checklist[3].ok && /還沒按「學會了」/.test(r.checklist[0].detail), 'tb: exam 85 but nothing learned → doing, lists missing words');
  const words = items.filter(x => x.kind === 'word');
  r = ev('tb:' + U, { learned: learnAll(words.slice(0, 5)) });
  ok(r.status === 'doing' && /（5\/15）/.test(r.checklist[0].label) && !r.checklist[0].ok && r.pct === Math.round((5 / 15) / 4 * 100), 'tb: 5/15 words → doing, partial pct ' + r.pct);
  // 取消學會（墓碑 removedAt，沒有 at）不算學會
  r = ev('tb:' + U, { learned: Object.assign(learnAll(items), { [words[0].id]: { removedAt: '2026-10-20T02:00:00Z' } }), done: done(90) });
  ok(r.status === 'doing' && !r.checklist[0].ok, 'tb: unlearned (tombstone) item does not count');
  // 只有作答紀錄（練過、還沒學會、沒考）→ doing（有進度）
  r = ev('tb:' + U, { log: [{ t: T0, id: 'tb:' + U + ':ans:1', ok: 0 }] });
  ok(r.status === 'doing' && r.pct === 0, 'tb: only practised (log) → doing');
  r = ev('tb:' + U, { agg: { ['w:' + KE.wordKey(W.DATA_WORDS.find(w => (w.tb || []).includes(U))) + ':listen']: { n: 1, k: 1, fc: T0 } } });
  ok(r.status === 'doing', 'tb: compacted answers (agg) also count as progress');
  ok(ev('tb:hanlin-6-u1', { log: [{ t: T0, id: 'tb:' + U + ':x', ok: 1 }] }).status === 'todo', 'tb: another unit\'s special questions do not touch this unit');
  // record：最高分取大、最近一次照時間
  let s = KC.record({}, 'tb', U, 70, 1000); s = KC.record(s, 'tb', U, 90, 2000); s = KC.record(s, 'tb', U, 60, 3000);
  ok(same(s.tb[U], { best: 90, last: 60, at: 3000 }), 'record tb: best 90, last 60: ' + C(s.tb[U]));
  ok(KC.record({}, 'tb', U, 84.6, 1).tb[U].best === 85, 'record tb: rounds score');
}

// ---------- 社會／自然 ----------
{
  const K = 'social:u1', pr = lv => ({ [K]: { unlocked: Math.min(5, lv.length + 1), best: Object.fromEntries(lv.map(l => [l, 100])), passedAt: Object.fromEntries(lv.map(l => [l, T0])), lastPassAt: T0, reviewStep: 0 } });
  let r = ev('mm:social:u1', {});
  ok(r.status === 'todo' && r.checklist.length === 3, 'mm: empty → todo, 3 checks');
  r = ev('mm:social:u1', { mm: pr([1, 2, 3, 4]), done: { mm: { [K]: { czFirst: 80, qz: 80 } } } });
  ok(r.status === 'done' && r.pct === 100, 'mm: 4 levels + 考考自己第一次答對 80 + 練習題 80 (exactly) → done');
  r = ev('mm:social:u1', { mm: pr([1, 2, 3, 4]), done: { mm: { [K]: { czFirst: 79, qz: 100 } } } });
  ok(r.status === 'doing' && !r.checklist[1].ok && /79%/.test(r.checklist[1].detail) && r.pct === 67, 'mm: 考考自己第一次答對 79 → doing 67%: ' + r.pct);
  // 考考自己只採用 czFirst（第一次作答就答對）：舊紀錄只有 cz（含「再答一次」才答對的格子）→ 未達成，說要再做一輪
  r = ev('mm:social:u1', { mm: pr([1, 2, 3, 4]), done: { mm: { [K]: { cz: 100, qz: 100 } } } });
  ok(r.status === 'doing' && !r.checklist[1].ok && /再答一次/.test(r.checklist[1].detail) && /第一次/.test(r.checklist[1].label), 'mm: old record (cz 100, no czFirst) → not achieved: ' + r.checklist[1].detail);
  ok(ev('mm:social:u1', { done: { mm: { [K]: { cz: 50 } } } }).status === 'doing', 'mm: old cz record still counts as progress (doing, not todo)');
  r = ev('mm:social:u1', { mm: pr([1, 2, 3, 4]), done: { mm: { [K]: { cz: 60, czFirst: 85, qz: 90 } } } });
  ok(r.status === 'done' && /85%/.test(r.checklist[1].detail), 'mm: czFirst decides, old cz ignored');
  // 一輪 10 格：7 格第一次就答對、2 格「再答一次」才答對、1 格看答案 → 結果畫面 9/10＝90%，但存的第一次答對率 70% → 未達成
  {
    const cells = [...Array(7).fill({ st: 'ok', first: true }), { st: 'ok', first: false, retry: true }, { st: 'ok', first: false, retry: true }, { st: 'shown' }];
    const firstPct = Math.round(cells.filter(c => c.st === 'ok' && c.first && !c.retry).length / cells.length * 100), shownPct = Math.round(cells.filter(c => c.st === 'ok').length / cells.length * 100);
    const sv = KC.record({}, 'czFirst', K, firstPct, 1);
    r = ev('mm:social:u1', { mm: pr([1, 2, 3, 4]), done: Object.assign(sv, { mm: { [K]: Object.assign({}, sv.mm[K], { qz: 100 }) } }) });
    ok(shownPct === 90 && firstPct === 70 && r.status === 'doing' && /70%/.test(r.checklist[1].detail), 'mm: retried cells not counted (shown 90%, saved first 70% → not achieved)');
    // 再一輪 8/10 第一次就答對（另 2 格重答才對）→ 80% → 達成
    const sv2 = KC.record(sv, 'czFirst', K, Math.round(8 / 10 * 100), 2);
    ok(sv2.mm[K].czFirst === 80 && ev('mm:social:u1', { mm: pr([1, 2, 3, 4]), done: { mm: { [K]: { czFirst: sv2.mm[K].czFirst, qz: 80 } } } }).status === 'done', 'mm: next round 8/10 first-try → 80 → done');
  }
  r = ev('mm:social:u1', { mm: pr([1, 2]), done: { mm: { [K]: { qz: 90 } } } });
  ok(r.status === 'doing' && /還差第 3、4 關/.test(r.checklist[0].detail) && /還沒有紀錄/.test(r.checklist[1].detail) && r.checklist[2].ok, 'mm: partial levels, cz no record, qz ok');
  ok(ev('mm:social:u1', { mmBlanks: { [K]: { sess: 1, w: {}, a: {} } } }).status === 'doing', 'mm: only cloze blanks practised → doing');
  ok(ev('mm:social:u2', { mm: pr([1, 2, 3, 4]) }).status === 'todo', 'mm: other unit untouched → todo');
  ok(ev('mm:science:n1', { mm: { 'science:n1': { unlocked: 1, best: { 1: 50 }, passedAt: {} } } }).status === 'doing', 'mm: failed level 1 (best 50) counts as progress');
  let s = KC.record({}, 'czFirst', K, 70, 1); s = KC.record(s, 'czFirst', K, 60, 2); s = KC.record(s, 'qz', K, 0, 3);
  ok(same(s.mm[K], { czFirst: 70, qz: 0 }), 'record czFirst/qz: best kept, 0% kept as progress: ' + C(s.mm[K]));
  ok(same(KC.record({ mm: { [K]: { cz: 95 } } }, 'czFirst', K, 40, 4).mm[K], { cz: 95, czFirst: 40 }), 'record czFirst: keeps old cz alongside (separate field)');
}

// ---------- 數學 ----------
{
  const bal = n => ({ bal: Object.fromEntries(Array.from({ length: n }, (_, i) => ['b' + (i + 1), T0 + i])) });
  ok(ev('math:balance', {}).status === 'todo', 'balance: empty → todo');
  let r = ev('math:balance', { done: bal(7) });
  ok(r.status === 'doing' && r.pct === 88 && /第 8 題 x\+\(10−4\)=15/.test(r.checklist[0].detail), 'balance: 7/8 → doing 88%, names the missing one: ' + r.checklist[0].detail);
  ok(ev('math:balance', { done: bal(8) }).status === 'done', 'balance: 8/8 → done');
  let s = KC.record({}, 'bal', 'b3', 0, 500); s = KC.record(s, 'bal', 'b3', 0, 900);
  ok(s.bal.b3 === 500, 'record bal: keeps first time');
  const sd = v => ({ sd: { l20: v[0], l100: v[1], l3d: v[2], tri: v[3] } });
  ok(ev('math:sd', {}).status === 'todo', 'sd: empty → todo');
  ok(ev('math:sd', { done: sd([80, 80, 80, 80]) }).status === 'done', 'sd: four levels at 80 → done');
  r = ev('math:sd', { done: sd([100, 79, 80, 80]) });
  ok(r.status === 'doing' && r.pct === 75 && !r.checklist[1].ok && /100 以內/.test(r.checklist[1].label), 'sd: 100 以內 79 → doing 75%');
  r = ev('math:sd', { done: { sd: { l20: 0 } } });
  ok(r.status === 'doing' && r.pct === 0, 'sd: one round at 0% → doing (has a record)');
  s = KC.record({}, 'sd', 'l20', 60, 1); s = KC.record(s, 'sd', 'l20', 40, 2); s = KC.record(s, 'sd', 'bogus', 100, 3);
  ok(same(s.sd, { l20: 60 }), 'record sd: best kept, unknown level dropped');
  ok(ev('math:gw', { done: { gw: { basic: 80, adv: 80 } } }).status === 'done', 'gw: basic 80 + adv 80 → done');
  r = ev('math:gw', { done: { gw: { basic: 100 } } });
  ok(r.status === 'doing' && r.pct === 50 && /還沒有紀錄/.test(r.checklist[1].detail), 'gw: only basic → doing 50%');
  // 倍數與公倍數（2026-10-21）：六種題型練習各一輪 ≥80% ＋ 考試 ≥80
  const mp = (o) => ({ mp: Object.assign({ circle: 80, both: 80, fill: 80, lcm: 80, word: 80, lit: 80, test: 80 }, o || {}) });
  ok(ev('math:mul', {}).status === 'todo' && ev('math:mul', {}).checklist.length === 7, 'mul: empty → todo, 7 checks (6 題型＋考試)');
  ok(ev('math:mul', { done: mp() }).status === 'done', 'mul: all 80 (exactly) + test 80 → done');
  r = ev('math:mul', { done: mp({ word: 79 }) });
  ok(r.status === 'doing' && r.pct === Math.round(6 / 7 * 100) && !r.checklist[4].ok && /應用題/.test(r.checklist[4].label) && /最佳一輪 79%/.test(r.checklist[4].detail), 'mul: 應用題 79 → doing, names it: ' + r.pct);
  r = ev('math:mul', { done: mp({ test: 79 }) });
  ok(r.status === 'doing' && !r.checklist[6].ok && /最高 79 分/.test(r.checklist[6].detail), 'mul: test 79 → not done: ' + r.checklist[6].detail);
  r = ev('math:mul', { done: { mp: { test: 95 } } });
  ok(r.status === 'doing' && r.checklist[6].ok && r.checklist.slice(0, 6).every(c => !c.ok && /還沒有紀錄/.test(c.detail)), 'mul: test only → doing, practice still missing');
  ok(KC.MP_G.map(x => x[0]).join() === require(path.join(root, 'math', 'multiples.js')).GROUPS.map(x => x[0]).join(), 'mul: 題型 list matches math/multiples.js GROUPS');
  s = KC.record({}, 'mp', 'word', 70, 1); s = KC.record(s, 'mp', 'word', 90, 2); s = KC.record(s, 'mp', 'word', 60, 3); s = KC.record(s, 'mp', 'test', 84, 4); s = KC.record(s, 'mp', 'zz', 100, 5);
  ok(same(s.mp, { test: 84, word: 90 }), 'record mp: best kept, unknown key dropped: ' + C(s.mp));
  // 乘法快算：二位×一位（≤10 秒）、二位×二位（≤20 秒，2026-10-21 放寬）挑戰各一輪 ≥90% 且平均在秒數內（同一輪）
  ok(ev('math:mx', {}).status === 'todo' && ev('math:mx', {}).checklist.length === 2, 'mx: empty → todo, 2 checks');
  s = KC.record({}, 'mx', 'd21', { acc: 90, sec: 10 }, 7);
  ok(s.mx.d21.ok === 7 && s.mx.d21.acc === 90 && s.mx.d21.sp === 100, 'record mx: 90% & 10.0 s (exactly) → ok: ' + C(s.mx));
  s = KC.record({}, 'mx', 'd21', { acc: 100, sec: 10.1 }, 1); s = KC.record(s, 'mx', 'd21', { acc: 85, sec: 6 }, 2);
  ok(!s.mx.d21.ok && s.mx.d21.acc === 100 && s.mx.d21.sp === 60, 'record mx: fast round and accurate round separately do NOT pass (same round needed): ' + C(s.mx));
  r = KC.evaluate('math:mx', {}, { done: s });
  ok(r.status === 'doing' && !r.checklist[0].ok && /最佳 100%、最快平均 6\.0 秒/.test(r.checklist[0].detail), 'mx: shows best acc and fastest avg: ' + r.checklist[0].detail);
  s = KC.record(s, 'mx', 'd21', { acc: 95, sec: 8.4 }, 3); s = KC.record(s, 'mx', 'd21', { acc: 50, sec: 30 }, 4);
  ok(s.mx.d21.ok === 3 && s.mx.d21.acc === 100 && s.mx.d21.sp === 60, 'record mx: ok kept at first passing round, later bad round does not undo it');
  s = KC.record(s, 'mx', 'd22', { acc: 100, sec: 9.9 }, 5);
  ok(KC.evaluate('math:mx', {}, { done: s }).status === 'done', 'mx: d21 + d22 passed → done');
  ok(KC.evaluate('math:mx', {}, { done: { mx: { d22t: { acc: 100, sp: 50, ok: 1 }, nn: { acc: 100, sp: 20, ok: 1 } } } }).status === 'doing', 'mx: 九九／整十 達標不算（只看二位×一位、二位×二位）');
  ok(KC.mxPass(90, 10, 'd21') && !KC.mxPass(89, 5, 'd21') && !KC.mxPass(100, 10.01, 'd21') && KC.MX_N === 20, 'mxPass d21 thresholds 90% / 10 s, round 20');
  ok(KC.mxPass(100, 19.9, 'd22') && KC.mxPass(90, 20, 'd22') && !KC.mxPass(100, 20.1, 'd22') && !KC.mxPass(89, 12, 'd22'), 'mxPass d22: 19.9 s / 20 s pass, 20.1 s fails, 89% fails');
  ok(KC.mxSec('d21') === 10 && KC.mxSec('d22') === 20 && ['nn', 'd22t', 'd31', undefined].every(k => KC.mxSec(k) === 10) && !KC.mxPass(100, 10.1), 'mxSec: d21 10、d22 20、其他（含沒給題型）10');
  s = KC.record({}, 'mx', 'd22', { acc: 95, sec: 19.9 }, 11);
  ok(s.mx.d22.ok === 11 && s.mx.d22.sp === 199, 'record mx d22: 95% & 19.9 s → ok: ' + C(s.mx));
  s = KC.record({}, 'mx', 'd22', { acc: 100, sec: 20.1 }, 12);
  ok(!s.mx.d22.ok && s.mx.d22.sp === 201, 'record mx d22: 100% & 20.1 s → NOT ok: ' + C(s.mx));
  s = KC.record({}, 'mx', 'd21', { acc: 100, sec: 15 }, 13);
  ok(!s.mx.d21.ok, 'record mx d21: 15 s still NOT ok (二位×一位 維持 10 秒)');
  r = KC.evaluate('math:mx', {}, { done: {} });
  ok(/平均每題 10 秒內/.test(r.checklist[0].label) && /二位數×二位數.*平均每題 20 秒內/.test(r.checklist[1].label), 'mx labels: d21 10 秒、d22 20 秒: ' + r.checklist.map(c => c.label).join(' ｜ '));
  r = KC.evaluate('math:mx', {}, { done: { mx: { d22: { acc: 95, sp: 250 } } } });
  ok(!r.checklist[1].ok && /平均每題 20 秒內/.test(r.checklist[1].detail), 'mx d22 detail says 20 秒: ' + r.checklist[1].detail);
}

// ---------- AI／Scratch ----------
{
  ok(ev('ai:ask-well', {}).status === 'todo' && ev('ai:ask-well', { done: { ai: { 'ask-well': T0 } } }).status === 'done' && ev('ai:secrets', { done: { ai: { 'ask-well': T0 } } }).status === 'todo', 'ai: played flag per page');
  const sc = { 'M123|scratch-td:L1': '2026-10-05T01:00:00.000Z', 'M123|scratch-td:L3': '2026-10-06T01:00:00.000Z', 'K100|scratch-td:lesson2': '2026-10-06T01:00:00.000Z', 'x|scratch-td:L11': 'y' };
  ok(['1', '2', '3', '4', '7'].map(n => ev('scratch:' + n, { scratch: sc }).status).join() === 'done,done,done,todo,todo', 'scratch: L1/lesson2/L3 done (any member key), L4 not, L11 ≠ L1');
}

// ---------- 地圖：目錄、整體完成率、題庫 ----------
{
  const M = KC.build(DATA, {});
  ok(M.subjects.map(s => s.k + ':' + s.total).join() === 'english:8,social:4,science:4,math:5,ai:3,scratch:7' && M.total === 31 && M.done === 0 && M.pct === 0, 'map: 31 judgeable units: ' + M.subjects.map(s => s.k + ':' + s.total).join());
  ok(M.subjects.every(s => s.units.every(u => u.href && u.title && ['done', 'doing', 'todo'].includes(u.status))), 'map: every cell has href, title, status');
  const ctx = { learned: Object.fromEntries(KC.tbItems(DATA, 'hanlin-5-u2', KE).map(x => [x.id, { at: '2026-10-20T01:00:00Z' }])), done: { tb: { 'hanlin-5-u2': { best: 85, last: 85, at: T0 } }, ai: { secrets: T0 } } };
  const M2 = KC.build(DATA, ctx);
  ok(M2.done === 2 && M2.subjects[0].done === 1 && M2.subjects[0].units.find(u => u.key === 'tb:hanlin-5-u2').status === 'done' && M2.subjects[4].done === 1, 'map: one textbook unit + one AI page done → 2/31');
  const bw = M2.bank.find(b => b.k === 'words');
  ok(M2.bank.map(b => b.k).join() === 'words,phrases,roots,grammar,patterns' && bw.total === W.DATA_WORDS.length && bw.levels.map(l => l.lv).join() === '1,2,3,4' && bw.learned >= 15, 'bank: categories + word levels 1–4, learned counted: ' + bw.learned + '/' + bw.total);
  ok(M2.bank.find(b => b.k === 'patterns').levels.length === 3 && M2.bank.find(b => b.k === 'roots').levels.length === 0, 'bank: pattern levels 簡單／基本／進階, roots no levels');
  ok(KC.statusText({ status: 'doing', pct: 42 }) === '🟡 進行中 42%' && KC.statusText({ status: 'done' }) === '✅ 已完成' && KC.statusText({ status: 'todo' }) === '⚪ 還沒開始', 'status text');
  // 目錄要跟各頁一致：心智圖單元（subjects.js、mindmap/data）、天平內建題、AI 頁
  const sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
  Object.keys(KC.MM_UNITS).forEach(k => KC.MM_UNITS[k].forEach(([id, t]) => ok(sj.includes(`['${id}', '${t}']`), 'MM unit matches subjects.js: ' + k + ' ' + id)));
  const mmD = { window: {} }; vm.createContext(mmD);
  ['social/unit1-2.js', 'social/unit3-4.js', 'science/unit1-2.js', 'science/unit3-4.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, 'mindmap', 'data', f), 'utf8'), mmD));
  [['social', 'DATA_SOCIAL'], ['science', 'DATA_SCIENCE']].forEach(([k, g]) => {
    const us = mmD.window[g].units;
    ok(us.map(u => u.id).join() === KC.MM_UNITS[k].map(x => x[0]).join(), 'MM unit ids match mindmap data: ' + k);
    ok(us.every(u => (u.quiz || []).length > 0), 'every ' + k + ' unit has 練習題 (so qz is reachable)');
  });
  const bh = fs.readFileSync(path.join(root, 'math', 'balance.html'), 'utf8'), bm = /var BUILTIN = (\[[^\]]+\]);/.exec(bh);
  ok(bm && same(JSON.parse(bm[1].replace(/'/g, '"')), KC.BAL), 'BAL matches balance.html BUILTIN');
  KC.AI.forEach(([id]) => ok(sj.includes(`src: 'ai/${id}.html'`) && fs.existsSync(path.join(root, 'ai', id + '.html')), 'AI page exists: ' + id));
  ok(sj.includes("src: 'math/short-division.html?tab=word', hidden: true") && M.subjects[3].units[2].href === 'index.html#s/math/short-division-word', 'gcd-word map link opens the 應用題 tab');
  // 新單元（2026-10-21）：地圖連到首頁數學卡（subjects.js 的 id／dk 要一致）
  ok(M.subjects[3].units[3].href === 'index.html#s/math/multiples' && sj.includes("id: 'multiples'") && sj.includes("src: 'math/multiples.html', dk: 'math:mul'"), 'multiples: map link + home card dk');
  ok(M.subjects[3].units[4].href === 'index.html#s/math/multiply' && sj.includes("id: 'multiply'") && sj.includes("src: 'math/multiply.html', dk: 'math:mx'"), 'multiply: map link + home card dk');
}

// ---------- 同步 v5／v6：done 欄位 ----------
{
  const props = (a, b, c, name) => {
    ok(same(SM.merge(a, b), SM.merge(b, a)), name + ': commutative');
    const ab = SM.merge(a, b); ok(same(SM.merge(ab, a), ab) && same(SM.merge(ab, b), ab) && same(SM.merge(ab, ab), ab), name + ': idempotent');
    ok(same(SM.merge(SM.merge(a, b), c), SM.merge(a, SM.merge(b, c))), name + ': associative');
  };
  ok(SM.VERSION === 6, 'sync doc version 6');
  const v4 = SM.normalize({ v: 4, log: [], learned: {}, mistakes: {}, mk: {} });
  ok(v4.v === 6 && same(v4.done, { tb: {}, mm: {}, bal: {}, sd: {}, gw: {}, ai: {}, mp: {}, mx: {} }), 'v4 doc → v6 with empty done');
  // v6：mp 取大、mx acc 取大／sp 取小／ok 取最早；壞資料不會壞
  const P1 = { done: { mp: { circle: 60, test: 85 }, mx: { d21: { acc: 80, sp: 70 }, d22: { acc: 95, sp: 95, ok: 900 } } } }, P2 = { done: { mp: { circle: 90, word: 0 }, mx: { d21: { acc: 95, sp: 120, ok: 500 }, d22: { acc: 70, sp: 60, ok: 700 } } } }, P3 = { done: { mp: { lit: 100 }, mx: { nn: { acc: 100, sp: 20 } } } };
  const P12 = SM.merge(P1, P2).done;
  ok(same(P12.mp, { circle: 90, test: 85, word: 0 }) && same(P12.mx.d21, { acc: 95, sp: 70, ok: 500 }) && same(P12.mx.d22, { acc: 95, sp: 60, ok: 700 }), 'done.mp／mx merge: ' + C(P12.mp) + ' ' + C(P12.mx));
  props(P1, P2, P3, 'done v6 mp/mx');
  ok(same(SM.normalize({ done: { mp: { circle: 150, zz: 5, test: 'x' }, mx: { d21: { acc: 'abc' }, d22: { acc: 50, sp: -3, ok: 'y' }, qq: { acc: 1 } } } }).done, { tb: {}, mm: {}, bal: {}, sd: {}, gw: {}, ai: {}, mp: { circle: 100 }, mx: { d22: { acc: 50 } } }), 'garbage mp／mx: clamps, drops unknown');
  const strip5 = d => { const n = SM.normalize(d); delete n.done.mp; delete n.done.mx; n.v = 5; return n; }, full6 = SM.merge(SM.merge(P1, P2), P3);
  ok(same(SM.merge(full6, strip5(full6)), full6), 'v5 device drops mp/mx → v6 merge restores them from local');
  ok(same(SM.normalize({ done: 'x' }).done, SM.normDone(null)) && same(SM.normalize({ done: { tb: [1], sd: { l20: 'abc', l100: 150, zz: 5 }, ai: { '': 5, ok: -1 } } }).done.sd, { l100: 100 }), 'garbage done does not throw, clamps %, drops unknown');
  const A = { done: { tb: { u1: { best: 70, last: 70, at: 100 } }, mm: { 'social:u1': { cz: 60 } }, bal: { b1: 500, b2: 600 }, sd: { l20: 0 }, gw: { basic: 40 }, ai: { secrets: 900 } } };
  const B = { done: { tb: { u1: { best: 90, last: 50, at: 200 }, u2: { best: 80, last: 80, at: 50 } }, mm: { 'social:u1': { qz: 85 }, 'science:n1': { cz: 100 } }, bal: { b1: 300 }, sd: { l20: 80, tri: 20 }, ai: { secrets: 1000, 'ask-well': 5 } } };
  const Cc = { done: { tb: { u1: { best: 75, last: 75, at: 200 } }, gw: { adv: 100 }, bal: { b8: 1 } } };
  const AB = SM.merge(A, B).done;
  ok(same(AB.tb.u1, { best: 90, last: 50, at: 200 }) && AB.tb.u2.best === 80, 'done.tb: best max, last follows newer at: ' + C(AB.tb));
  ok(same(AB.mm['social:u1'], { cz: 60, qz: 85 }) && AB.mm['science:n1'].cz === 100, 'done.mm: per field max, union of units');
  // czFirst：一樣取大、跟著同步；舊文件（只有 cz/qz）合併不會壞
  const F1 = { done: { mm: { 'social:u1': { czFirst: 70 }, 'social:u2': { cz: 90 } } } }, F2 = { done: { mm: { 'social:u1': { czFirst: 85, cz: 95, qz: 40 } } } };
  const F12 = SM.merge(F1, F2).done.mm;
  ok(same(F12['social:u1'], { cz: 95, czFirst: 85, qz: 40 }) && same(F12['social:u2'], { cz: 90 }), 'done.mm.czFirst: max, merged with old cz-only records: ' + C(F12));
  ok(SM.normalize({ done: { mm: { 'social:u1': { czFirst: 150, zz: 3 } } } }).done.mm['social:u1'].czFirst === 100, 'done.mm.czFirst: clamped, unknown fields dropped');
  props(F1, F2, A, 'done czFirst');
  ok(same(AB.bal, { b1: 300, b2: 600 }) && same(AB.ai, { 'ask-well': 5, secrets: 900 }), 'done.bal／ai: union, earliest time');
  ok(same(AB.sd, { l20: 80, tri: 20 }) && same(SM.merge(A, {}).done.sd, { l20: 0 }), 'done.sd: max, 0% round kept');
  ok(SM.merge(B, Cc).done.tb.u1.last === 75, 'done.tb: same at → larger last (deterministic)');
  props(A, B, Cc, 'done');
  // 舊版（v4）裝置 PUT 回去的文件沒有 done → 新版下次同步從本機補回來
  const full = SM.merge(A, B), strip4 = d => { const n = SM.normalize(d); delete n.done; n.v = 4; return n; };
  ok(same(SM.merge(full, strip4(full)), full), 'v4 device strips done → v5 merge restores it from local');
  // 兩台輪流 syncOnce：會收斂
  (async () => {
    const remote = { doc: { v: 4, log: [], learned: {}, mistakes: {} }, etag: 0 };
    const io = dev => ({ get: async () => ({ doc: JSON.parse(JSON.stringify(remote.doc)), etag: remote.etag }), put: async (c, d, e) => { if (e !== remote.etag) return { conflict: true }; remote.doc = JSON.parse(JSON.stringify(d)); remote.etag++; return {}; },
      readLocal: () => dev.local, writeLocal: d => { dev.local = d; } });
    const dA = { local: SM.normalize(A) }, dB = { local: SM.normalize(B) };
    for (let i = 0; i < 3; i++) { await SM.syncOnce(io(dA), 'X'); await SM.syncOnce(io(dB), 'X'); }
    const last = (await SM.syncOnce(io(dA), 'X')).puts + (await SM.syncOnce(io(dB), 'X')).puts;
    ok(same(dA.local, dB.local) && same(dA.local.done, AB) && remote.doc.v === 6 && last === 0, 'syncOnce: two devices converge on done, remote doc v6');
    // 第二台的紀錄同步進來 → 判定跟著變（地圖、橫幅讀的就是這份）
    const tbDone = { learned: Object.fromEntries(KC.tbItems(DATA, 'hanlin-5-u1', KE).map(x => [x.id, { at: '2026-10-20T01:00:00Z' }])) };
    const devX = { local: SM.normalize(tbDone) }, devY = { local: SM.normalize({ done: { tb: { 'hanlin-5-u1': { best: 88, last: 88, at: T0 } } } }) };
    remote.doc = { v: 5, log: [], learned: {}, mistakes: {} }; remote.etag = 100;
    ok(ev('tb:hanlin-5-u1', devX.local).status === 'doing', 'device X alone: learned all but no exam → doing');
    await SM.syncOnce(io(devY), 'X'); await SM.syncOnce(io(devX), 'X');
    ok(ev('tb:hanlin-5-u1', devX.local).status === 'done', 'after syncing device Y\'s exam 88 → done on device X');
    done();
  })().catch(e => { fail++; console.error(e); done(); });
}

// 文件大小：done 全部塞滿也很小
{
  const big = { tb: {}, mm: {}, bal: {}, sd: { l20: 100, l100: 100, l3d: 100, tri: 100 }, gw: { basic: 100, adv: 100 }, ai: {} };
  for (let i = 0; i < 40; i++) big.tb['hanlin-' + i] = { best: 100, last: 100, at: 1.8e12 };
  for (let i = 0; i < 40; i++) big.mm['social:u' + i] = { cz: 100, qz: 100 };
  for (let i = 1; i <= 8; i++) big.bal['b' + i] = 1.8e12;
  ['a', 'b', 'c', 'd', 'e'].forEach(p => { big.ai[p] = 1.8e12; });
  const n = SM.bytes(SM.normDone(big));
  ok(n < 8 * 1024, 'done section at a generous maximum stays small: ' + n + ' bytes');
}

let finished = false;
function done() {
  if (finished) return; finished = true;
  console.log(`completion: ${pass} passed, ${fail} failed`);
  if (fail) process.exitCode = 1;
}
