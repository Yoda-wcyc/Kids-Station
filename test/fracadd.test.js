// fracadd.test.js — 異分母分數加減（math/fracadd.js）：node test/fracadd.test.js
'use strict';
const path = require('path'), fs = require('fs');
const root = path.join(__dirname, '..');
const FA = require(path.join(root, 'math', 'fracadd.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL', m); } };
let s = 11; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);

// 大量出題：分母 2～12、不一樣、題目最簡、減法大減小不出 0、答案最簡
let reduce = 0, total = 0, mixedAns = 0;
for (let r = 0; r < 300; r++) {
  const qs = FA.round(10, rnd);
  ok(qs.length === 10 && new Set(qs.map(q => q.id)).size === 10, 'round of 10, no repeats');
  ok(FA.KINDS.every(k => qs.some(q => q.kind === k)), 'all four kinds in a round');
  qs.forEach(q => {
    total++; if (q.ans.reduce) reduce++; if (q.ans.w && q.ans.n) mixedAns++;
    ok(q.a.d >= 2 && q.a.d <= 12 && q.b.d >= 2 && q.b.d <= 12 && q.a.d !== q.b.d, 'denominators 2..12, different ' + q.id);
    ok(q.a.n >= 1 && q.a.n < q.a.d && q.b.n >= 1 && q.b.n < q.b.d && FA.gcd(q.a.n, q.a.d) === 1 && FA.gcd(q.b.n, q.b.d) === 1, 'operands are proper/simplest ' + q.id);
    const va = FA.imp(q.a) / q.a.d, vb = FA.imp(q.b) / q.b.d, v = q.op === '+' ? va + vb : va - vb, a = q.ans;
    ok(v > 0 && Math.abs(a.w + a.n / a.d - v) < 1e-9, 'answer value ' + q.id);
    ok(a.n === 0 ? a.d === 1 || true : a.n < a.d && FA.gcd(a.n, a.d) === 1, 'answer simplest ' + q.id);
    ok(FA.grade(q, { w: a.w || '', n: a.n || '', d: a.n ? a.d : '' }).st === 'ok', 'own answer graded ok ' + q.id);
  });
}
ok(reduce / total > 0.35 && reduce / total < 0.65, 'about half need reducing: ' + reduce + '/' + total);
ok(mixedAns > 0, 'some answers are mixed numbers');

// 判分
const q = { kind: 'add', op: '+', a: { w: 0, n: 1, d: 2 }, b: { w: 0, n: 1, d: 4 } }; q.ans = FA.answer(q);   // 1/2+1/4 = 3/4
ok(FA.grade(q, { n: 3, d: 4 }).st === 'ok' && FA.grade(q, { n: 6, d: 8 }).st === 'fix' && FA.grade(q, { n: 2, d: 4 }).st === 'wrong', '3/4 ok, 6/8 fix (reduce), 2/4 wrong');
const q2 = { kind: 'add', op: '+', a: { w: 0, n: 5, d: 6 }, b: { w: 0, n: 3, d: 4 } }; q2.ans = FA.answer(q2);   // 5/6+3/4 = 19/12 = 1 7/12
ok(q2.ans.w === 1 && q2.ans.n === 7 && q2.ans.d === 12, '5/6+3/4 = 1 7/12');
ok(FA.grade(q2, { w: 1, n: 7, d: 12 }).st === 'ok' && FA.grade(q2, { n: 19, d: 12 }).st === 'fix' && FA.grade(q2, { w: 1, n: 14, d: 24 }).st === 'fix', 'improper / unreduced mixed → fix');
const q3 = { kind: 'msub', op: '-', a: { w: 2, n: 1, d: 3 }, b: { w: 1, n: 1, d: 3 } }; q3.ans = FA.answer(q3);   // 整數答案 1
ok(FA.grade(q3, { w: 1 }).st === 'ok' && FA.grade(q3, { w: 1, n: 0, d: 3 }).st === 'fix' && FA.grade(q3, { n: 3, d: 3 }).st === 'fix', 'integer answer: write the integer');
ok(FA.grade(q, { n: 3 }).st === 'bad' && FA.grade(q, { n: 3, d: 0 }).st === 'bad' && FA.grade(q, {}).st === 'bad' && FA.grade(q, { n: 'x', d: 4 }).st === 'bad', 'bad input');
ok(FA.steps(q2).join('|').includes('最小公倍數是 12') && FA.steps(q2).some(x => /帶分數/.test(x)), 'steps');

// 📕 錯題庫（2026-11-09）：id＝題目本身（'fa:1_3+3_4'、帶分數 'fa:2.1_3-1_4'），fromId 還原同一題、同一個答案
const KM = require(path.join(root, 'kids-mistakes.js'))._core, SM = require(path.join(root, 'syncmerge.js'));
let rt = 0;
for (let r = 0; r < 200; r++) FA.round(10, rnd).forEach(q => {
  const e = FA.mkEntry(q), back = FA.fromId(e.id);
  ok(/^fa:(\d\.)?\d{1,2}_\d{1,2}[+-](\d\.)?\d{1,2}_\d{1,2}$/.test(e.id) && e.id === q.id && e.id.length <= 18,'id compact: ' + e.id);
  ok(back && back.kind === q.kind && back.op === q.op && JSON.stringify([back.a, back.b]) === JSON.stringify([q.a, q.b]) && JSON.stringify(back.ans) === JSON.stringify(q.ans), 'fromId round-trips ' + e.id);
  ok(e.p.type === 'fracadd' && e.p.v.join() === [q.a.w, q.a.n, q.a.d, q.b.w, q.b.n, q.b.d].join() && e.p.op === q.op && JSON.stringify(e.p).length < 120, 'p small: ' + JSON.stringify(e.p));
  rt++;
});
ok(rt === 2000, 'round-tripped 2000 random questions');
ok(FA.mkId({ op: '+', a: { w: 0, n: 1, d: 3 }, b: { w: 0, n: 3, d: 4 } }) === 'fa:1_3+3_4' && FA.mkId({ op: '-', a: { w: 2, n: 1, d: 3 }, b: { w: 0, n: 1, d: 4 } }) === 'fa:2.1_3-1_4', 'id format examples');
const m1 = FA.fromId('fa:2.1_3-1_4');
ok(m1 && m1.kind === 'msub' && m1.a.w === 2 && m1.b.w === 0 && FA.txt(m1.ans) === '2 又 1/12', 'mixed minus proper restores: ' + (m1 && FA.txt(m1.ans)));
ok(['fa:1_3+3_4x', 'fa:1_3*3_4', 'fa:0_3+1_4', 'fa:3_3+1_4', 'fa:1_1+1_4', 'fa:1_13+1_4', 'fa:1_4-3_4', 'fa:1_4-1_4', 'frc:1_3+3_4', 'fa:', '', null].every(x => FA.fromId(x) === null), 'bad ids rejected (format, 0/improper numerator, denominator range, negative/zero difference)');
// 分組：五上單元六（異分母分數的加減）
ok(KM.unitOf('math', 'fa:1_3+3_4', { type: 'fracadd' }) === 'g5a6', 'unitOf → g5a6');
// 未畢業最多 50 題：第 51 題進來 → 最舊答錯的蓋墓碑；畢業規則照舊（連對 3 次）
{
  const bk = {}; let t = 1e12;
  for (let i = 0; i < 60; i++) { const q = FA.gen(FA.KINDS[i % 4], rnd), e = FA.mkEntry(q); t += 1000; if (KM.mark(bk, e.id, false, e.p, t) === 'added') KM.cap(bk, 'fa:', KM.MAX_FA, t); }
  const live = Object.keys(bk).filter(k => !bk[k].d), dead = Object.keys(bk).filter(k => bk[k].d);
  ok(KM.MAX_FA === 50 && live.length === 50 && dead.length === Object.keys(bk).length - 50, 'cap: 50 live fa: entries, rest tombstoned: ' + live.length + '/' + dead.length);
  ok(Math.min(...live.map(k => bk[k].t)) > Math.max(...dead.map(k => bk[k].t)), 'cap: the oldest wrong answers are the ones squeezed out');
  bk['eq:x+1=2'] = { c: 0, w: 1, t: 1, u: 1, p: { q: 'x+1=2' } };
  ok(KM.cap(bk, 'fa:', KM.MAX_FA, t) === 0 && !bk['eq:x+1=2'].d, 'cap: other math mistakes untouched (even very old ones)');
  const id = live[0]; let r = [];
  for (let k = 0; k < 3; k++) r.push(KM.mark(bk, id, true, null, t + 10 + k));
  ok(r.join() === 'counted,counted,graduated' && bk[id].d === 1, 'graduates after 3 correct in a row: ' + r);
  // 同步：墓碑傳到別台，舊的那份救不回來；大小 50 題＋300 墓碑遠小於 MAX_BYTES/4
  const old = JSON.parse(JSON.stringify(bk)); dead.forEach(k => { old[k] = { c: 0, w: 1, t: bk[k].t, u: bk[k].t, p: {} }; });
  const merged = SM.mergeMk({ math: bk }, { math: old }).math;
  ok(dead.every(k => merged[k].d === 1), 'cap tombstones beat stale live copies on another device');
  const big = {}; for (let i = 0; i < 50; i++) { const e = FA.mkEntry(FA.gen('madd', rnd)); big[e.id + i] = { c: 2, w: 99, t: 1.8e12, u: 1.8e12, p: e.p }; } for (let i = 0; i < 300; i++) big['fa:' + i + '_1+1_2'] = { d: 1, w: 99, t: 1.8e12, u: 1.8e12 };
  const n = SM.bytes(SM.normMk({ math: big }));
  ok(n < 30 * 1024 && n <= SM.MAX_BYTES / 4, 'mk.math with 50 fa + 300 tombstones = ' + n + ' B (≤ MAX_BYTES/4, 上限不放寬)');
}
// 頁面接線：?mistakes=1 重練、每題進錯題庫、做完送 math:mistakes；錯題庫的路由／徽章／接著練
{
  const h = fs.readFileSync(path.join(root, 'math', 'fracadd.html'), 'utf8'), kmj = fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8'), sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
  ok(/<script src="\.\.\/kids-mistakes\.js(\?v=[0-9a-f]+)?"><\/script>/.test(h) && h.indexOf('kids-mistakes.js') < h.indexOf('window.FAPage'), 'fracadd.html loads kids-mistakes.js before the page script');
  ok(h.includes("KidsMistakes.record('math', m.id, ok, m.p)") && h.includes('FA.fromId(e.id)') && h.includes("coinReport('math:mistakes'") && h.includes("e.p.type !== 'fracadd'"), 'fracadd.html: record + replay by id + math:mistakes');
  ok(sj.includes("'math/fracadd.html?mistakes=1'") && kmj.includes("['fracadd', '異分母加減', 'fracadd.html?mistakes=1']") && kmj.includes("p.type === 'fracadd' ? '異分母加減'") && kmj.includes("t === 'fracadd'"), 'route + badge + 接著練 + mathType');
  const CK = require(path.join(root, 'kids-coins.js'))._core;
  const KA = require(path.join(root, 'assistant-core.js'));
  ok(KA._.mathKind('fa:1_3+3_4', { type: 'fracadd' }) === 'fracadd' && /fracadd$/.test(KA.MATH_KIND.fracadd[1]), '學習小助理：異分母錯題自成一類（不算成天平）');
  ok(CK.validEvent({ event_id: 'e-1', type: 'practice_round', item: 'math:mistakes', correct: 1, total: 2 }), 'math:mistakes already whitelisted (no new category)');
}

// 頁面接線：每題學習幣＋每日清單（數學「異分母加減」），要登入；首頁數學卡片有入口
const html = fs.readFileSync(path.join(root, 'math', 'fracadd.html'), 'utf8');
ok(html.includes("KidsDaily.rec('math', ok, 'fracadd')") && html.includes("KidsCoins.answer(!!ok, 'math')") && html.includes("KidsAuth.startActivity('math'"), 'page records daily + coins + login');
ok(/id: 'fracadd'[^\n]*src: 'math\/fracadd\.html'/.test(fs.readFileSync(path.join(root, 'subjects.js'), 'utf8')), 'math card');

console.log(`fracadd: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
