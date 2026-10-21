// multiples.test.js — 〈倍數與公倍數〉math/multiples.js 單元測試（2026-10-21）
// 用法：node test/multiples.test.js（smoke.js 也會跑）
// - 每種題型隨機出 500 題：答案跟這裡另外寫的「暴力法」逐題比對（不用 multiples.js 的任何函式）
// - 「不超過且最接近」「比它多且最接近」「無條件進位」剛好整除的邊界；範圍題用下限或上限去除都對
// - check() 正解拿滿分、錯答不給分；考試六大題配分 9／9／16／20／36／10＝100；錯題庫原題重做
'use strict';
const path = require('path');
const root = path.join(__dirname, '..');
const M = require(path.join(root, 'math', 'multiples.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL multiples:', m); } };
// 可重現的亂數
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const rnd = rng(20261021);

// ---------- 暴力法（獨立實作）----------
const B = {
  lcm(a, b) { for (let x = Math.max(a, b); ; x++) if (x % a === 0 && x % b === 0) return x; },
  floor(d, N) { for (let x = N; x > 0; x--) if (x % d === 0) return x; return 0; },
  over(d, N) { for (let x = N + 1; ; x++) if (x % d === 0) return x; },
  ceil(d, N) { let k = 0; while (k * d < N) k++; return [k, k * d]; },
  inRange(A, Bb, f) { const o = []; for (let x = A; x <= Bb; x++) if (f(x)) o.push(x); return o; },
  board(m, ds) { const xs = []; const rec = (i, acc) => { if (i === 4) { if (acc % m === 0) xs.push(acc); return; } const opts = ds[i] === -1 ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] : [ds[i]]; opts.forEach(d => rec(i + 1, acc * 10 + d)); }; rec(0, 0); return [Math.max(...xs), Math.min(...xs)]; },
  last(head, m) { return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(d => (head * 10 + d) % m === 0); }
};
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ---------- 500 題 × 每種題型：答案對 ----------
const N = 500, kinds = Object.keys(M.GROUP_OF);
kinds.forEach(k => {
  let bad = 0, made = 0, first = '';
  for (let i = 0; i < N; i++) {
    const Q = M.make(k, rnd); if (!Q) { bad++; first = first || 'make null'; continue; } made++;
    let want, got = Q.ans;
    switch (k) {
      case 'circle': want = Q.nums.map((x, j) => (x % Q.N === 0 ? j : -1)).filter(j => j >= 0); break;
      case 'both': want = Q.nums.map((x, j) => (x % Q.a === 0 && (!Q.b || x % Q.b === 0) ? j : -1)).filter(j => j >= 0); break;
      case 'range': want = B.inRange(Q.A, Q.B, x => x % Q.N === 0); break;
      case 'board': want = B.board(Q.m, Q.digits); break;
      case 'last': want = { 2: B.last(+Q.head, 2), 5: B.last(+Q.head, 5), 10: B.last(+Q.head, 10) }; break;
      case 'lcm': { const L = B.lcm(Q.a, Q.b); want = [L, 2 * L, 3 * L]; break; }
      case 'wfloor': want = [B.floor(Q.d, Q.N)]; break;
      case 'wover': want = [B.over(Q.d, Q.N)]; break;
      case 'wceil': want = B.ceil(Q.d, Q.N); break;
      case 'wrange': want = B.inRange(Q.A, Q.B, x => x % Q.d === 0); break;   // 範圍裡只有一個
      case 'wlcm': want = [B.lcm(Q.a, Q.b)]; break;
      case 'wlcmr': want = B.inRange(Q.A, Q.B, x => x % Q.a === 0 && x % Q.b === 0); break;
      case 'lminmax': { const xs = B.inRange(Q.A, Q.B, x => x % Q.d === 0); want = [xs[0], xs[xs.length - 1]]; break; }
      case 'lsquare': want = [B.lcm(Q.L, Q.W)]; break;
    }
    if (!same(got, want)) { bad++; if (!first) first = JSON.stringify({ v: Q.v, got, want }); }
    // 題目本身合理：範圍題 A、B 不是倍數；circle 有對有錯；應用題文字有數字、單位
    if (k === 'range' && (Q.A % Q.N === 0 || Q.B % Q.N === 0)) { bad++; first = first || 'range bound is a multiple ' + Q.v; }
    if ((k === 'wrange' || k === 'lminmax') && (Q.A % Q.d === 0 || Q.B % Q.d === 0)) { bad++; first = first || k + ' bound is a multiple ' + Q.v; }
    if (Q.steps && (!Q.units || Q.units.some(u => M.UNITS.indexOf(u) < 0) || /\{/.test(Q.text))) { bad++; first = first || 'word text/units ' + Q.text; }
    // 正解丟進 check → 滿分；用 build(k, v) 重建一樣
    if (!M.check(Q, correctAns(Q)).ok || M.check(Q, correctAns(Q)).got !== M.PTS[k]) { bad++; first = first || 'check(correct) not full ' + JSON.stringify(Q.v); }
    if (M.build(k, Q.v).id !== Q.id) { bad++; first = first || 'rebuild ' + Q.v; }
  }
  ok(!bad && made === N, `${k}: ${N} random questions match brute force` + (bad ? ` — ${bad} bad, e.g. ${first}` : ''));
});
function correctAns(Q) {
  switch (Q.kind) {
    case 'circle': case 'both': return { sel: Q.ans.slice() };
    case 'range': return { list: Q.ans.join('、') };
    case 'board': return { max: String(Q.max), min: String(Q.min) };
    case 'last': return { s2: [0, 2, 4, 6, 8], s5: [5, 0], s10: [0] };
    case 'lcm': return { l: String(Q.l), ms: Q.ans.map(String) };
    case 'lminmax': return { min: Q.min, max: Q.max };
    case 'lsquare': return { n: Q.l };
    default: return { nums: Q.ans.slice(), units: Q.units.slice() };
  }
}

// ---------- 邊界：剛好整除 ----------
{
  // 不超過且最接近：700 ÷ 21 ＝ 33 … 7 → 693；剛好整除 → 就是 N 本身、商不 +1
  let Q = M.build('wfloor', [0, 21, 700]);
  ok(Q.ans[0] === 693 && Q.plus === false && Q.k === 33, 'wfloor 700/21 → 693（原卷）');
  Q = M.build('wfloor', [0, 25, 750]);
  ok(Q.ans[0] === 750 && Q.r === 0 && Q.k === 30 && !M.needPlus(Q, 750), 'wfloor exact: 750/25 → 750 itself, no +1');
  // 比它多且最接近：850 ÷ 15 ＝ 56 … 10 → 855；剛好整除也要 +1（一樣多不算「比它多」）
  Q = M.build('wover', [0, 15, 850]);
  ok(Q.ans[0] === 855 && Q.k === 57 && M.needPlus(Q, 850), 'wover 850/15 → 855（原卷，15×57）');
  Q = M.build('wover', [0, 15, 855]);
  ok(Q.ans[0] === 870 && Q.r === 0 && Q.k === 58 && M.needPlus(Q, 855) && /一樣多不算/.test(M.plusWhy(Q, 855)), 'wover exact: 855/15 → 870 (still +1), explains why');
  // 無條件進位：120 ÷ 35 ＝ 3 … 15 → 4 包 140 顆；剛好整除不 +1
  Q = M.build('wceil', [0, 35, 120]);
  ok(same(Q.ans, [4, 140]) && M.needPlus(Q, 120), 'wceil 120/35 → 4 包 140 顆（原卷）');
  Q = M.build('wceil', [0, 35, 140]);
  ok(same(Q.ans, [4, 140]) && !M.needPlus(Q, 140) && /不用多買/.test(M.plusWhy(Q, 140)), 'wceil exact: 140/35 → 4 包, no +1');
  // 範圍：150～170、每 28 → 168；用 150 除要 +1、用 170 除不用 +1，兩種都對
  Q = M.build('wrange', [0, 28, 150, 170]);
  ok(Q.ans[0] === 168 && M.stepDiv(Q, 150, 28, 5, 10).ok && M.stepDiv(Q, 170, 28, 6, 2).ok && M.stepPlus(Q, 150, true).ok && M.stepPlus(Q, 170, false).ok && !M.stepPlus(Q, 170, true).ok && M.stepPlus(Q, 150, true).k === 6 && M.stepPlus(Q, 170, false).k === 6, 'wrange 150～170/28 → 168, either bound works');
  ok(M.build('wrange', [0, 28, 140, 170]) === null && M.build('wrange', [0, 28, 150, 200]) === null, 'wrange: bound that is a multiple, or two multiples in range → rejected');
  ok(M.build('lminmax', [0, 12, 110, 270]).ans.join() === '120,264', 'lminmax 110～270/12 → 120, 264（原卷）');
  ok(M.build('lminmax', [0, 12, 108, 270]) === null, 'lminmax: bound that is a multiple → rejected (範圍含不含端點會有爭議)');
  ok(M.build('lsquare', [0, 100, 60]).ans[0] === 300 && M.build('wlcm', [0, 30, 45]).ans[0] === 90 && M.build('wlcm', [1, 18, 27]).ans[0] === 54, 'lcm word problems: 300 cm, 90 塊, 54 個（原卷）');
  ok(same(M.build('lcm', [5, 15]).ans, [15, 30, 45]) && same(M.build('lcm', [26, 39]).ans, [78, 156, 234]) && same(M.build('lcm', [24, 16]).ans, [48, 96, 144]), 'lcm: 5,15 → 15（較大的數本身）; 26,39 → 78,156,234; 24,16 → 48…');
  ok(same(M.build('range', [9, 100, 120]).ans, [108, 117]), 'range 100～120 中 9 的倍數 → 108、117（原卷）');
  ok(same(M.build('board', [2, 2, 3, 2, -1]).ans, [2328, 2320]) && same(M.build('board', [5, 1, -1, 2, -1]).ans, [1925, 1020]), 'board: 232▲ 2 的倍數 2328/2320; 1■2★ 5 的倍數 1925/1020（原卷）');
  ok(same(M.build('circle', [14, 7, 28, 35, 70, 112]).ans, [1, 3, 4]), 'circle 14: 28, 70, 112（原卷）');
  const six = [105, 1040, 4008, 2000, 825, 5160];
  ok(same(M.build('both', [5, 0].concat(six)).ans, [0, 1, 3, 4, 5]) && same(M.build('both', [2, 5].concat(six)).ans, [1, 3, 5]) && same(M.build('both', [5, 10].concat(six)).ans, [1, 3, 5]), 'both: 5 / 2&5 / 5&10（原卷）');
}

// ---------- 提示：乘法算錯給拆解；其他錯誤說清楚 ----------
{
  let Q = M.build('wover', [0, 15, 850]);
  let r = M.check(Q, { nums: [845], units: ['張'] });
  ok(!r.ok && /15×57 再算一次：15×50=750、15×7=105/.test(r.hint), 'wover: 845（乘錯）→ 15×57 拆解提示: ' + r.hint);
  r = M.check(Q, { nums: [840], units: ['張'] });
  ok(!r.ok && /比 850 少/.test(r.hint) && /商要 \+1/.test(r.hint), 'wover: 840 (=15×56) → 比 850 少、商要 +1: ' + r.hint);
  r = M.check(Q, { nums: [855], units: ['顆'] });
  ok(!r.ok && r.got === 5 && /單位/.test(r.hint), 'wover: right number, wrong unit → 5 分, hint about unit');
  ok(M.stepMul(Q, 57, 845).hint.indexOf('15×57 再算一次：15×50=750、15×7=105') === 0 && M.stepMul(Q, 57, 855).ok, 'stepMul: 15×57 hint / ok');
  Q = M.build('lcm', [6, 8]);
  r = M.check(Q, { l: 24, ms: [24, 48, 72] });
  ok(r.ok && r.got === 4, 'lcm 6,8 correct → 4 分');
  r = M.check(Q, { l: 48, ms: [24, 48, 72] });
  ok(!r.ok && r.got === 2 && /也是公倍數，可是還有更小的/.test(r.hint), 'lcm: 48 → 也是公倍數但不是最小, 2 分');
  Q = M.build('lcm', [26, 39]);
  r = M.check(Q, { l: 78, ms: [78, 156, 230] });
  ok(!r.ok && r.got === 2 && /78×3 再算一次：70×3=210、8×3=24/.test(r.hint), 'lcm: 78×3 寫成 230 → 拆解提示: ' + r.hint);
  Q = M.build('circle', [14, 7, 28, 35, 70, 112]);
  r = M.check(Q, { sel: [0, 1, 3, 4] });
  ok(!r.ok && /7 ÷ 14 ＝ 0 … 7/.test(r.hint), 'circle: picking 7 → explains remainder: ' + r.hint);
  r = M.check(Q, { sel: [2, 1, 3, 4] });
  ok(!r.ok && /35 是 7 的倍數，可是不是 14 的倍數/.test(r.hint), 'circle: 35 → 是 7 的倍數不是 14 的倍數');
  Q = M.build('wrange', [0, 28, 150, 170]);
  ok(!M.stepDiv(Q, 150, 28, 5, 20).ok && /餘數 20|驗算/.test(M.stepDiv(Q, 150, 28, 5, 20).hint) && !M.stepDiv(Q, 150, 28, 6, 0).ok && /商太大/.test(M.stepDiv(Q, 150, 28, 6, 0).hint) && !M.stepDiv(Q, 160, 28, 5, 20).ok, 'stepDiv: wrong remainder / quotient too big / wrong dividend');
  ok(M.stepMethod(Q, 'div').ok && !M.stepMethod(Q, 'lcm').ok && M.stepMethod(M.build('wlcm', [0, 30, 45]), 'lcm').ok && !M.stepMethod(M.build('wlcm', [0, 30, 45]), 'div').ok, 'stepMethod: division kinds vs common-multiple kinds');
  Q = M.build('wlcmr', [0, 12, 18, 100, 130]);
  ok(Q && Q.ans[0] === 108 && Q.k === 3 && M.stepLcm(Q, 36).ok && !M.stepLcm(Q, 72).ok && M.stepMul(Q, 3, 108).ok && !M.stepMul(Q, 2, 72).ok, 'wlcmr 100～130, 12 & 18 → 36×3 = 108');
}

// ---------- 考試：六大題、配分、判分 ----------
{
  let okE = 0;
  for (let i = 0; i < 200; i++) {
    const E = M.exam(rnd), maxes = E.map(s => s.max), n = E.map(s => s.items.length);
    const all = {}; E.forEach(s => s.items.forEach(Q => { all[Q.id] = correctAns(Q); }));
    const ids = []; E.forEach(s => s.items.forEach(Q => ids.push(Q.id)));
    const full = M.examScore(E, all), zero = M.examScore(E, {});
    if (same(maxes, [9, 9, 16, 20, 36, 10]) && same(n, [3, 3, 4, 5, 6, 2]) && full.total === 100 && full.max === 100 && zero.total === 0 && new Set(ids).size === ids.length &&
      same(E[4].items.map(Q => Q.kind), M.GROUP_KINDS.word) && E[0].items.every(Q => Q.kind === 'circle') && new Set(E[0].items.map(Q => Q.N)).size === 3) okE++;
  }
  ok(okE === 200, 'exam ×200: sections 9/9/16/20/36/10, item counts 3/3/4/5/6/2, all-correct 100, blank 0, unique ids: ' + okE);
  // 部分分：定位板一格對 2 分、末位一格對 2 分、應用題珠子兩格各 3 分
  const E = M.exam(rng(7)), b = E[2].items[1], l = E[2].items[3], c = E[4].items.find(Q => Q.kind === 'wceil');
  ok(M.check(b, { max: b.max, min: 1 }).got === 2 && M.check(l, { s2: [0, 2, 4, 6, 8], s5: [0], s10: [0] }).got === 4 && M.check(c, { nums: [c.ans[0], 1], units: c.units }).got === 3 && M.check(c, { nums: c.ans, units: ['', ''] }).got === 5, 'exam partial credit: board 2, last 4, beads 3 / unit −1');
}

// ---------- 錯題庫：存題型＋數字，原題重做 ----------
{
  let good = 0;
  kinds.forEach(k => { for (let i = 0; i < 20; i++) { const Q = M.make(k, rnd), e = M.mkEntry(Q), R = M.fromMistake(JSON.parse(JSON.stringify(e.p))); if (e.id === Q.id && e.p.type === 'multiples' && e.p.k === k && R && R.id === Q.id && same(R.ans, Q.ans) && e.id.length <= 200 && JSON.stringify(e.p).length < 4000) good++; } });
  ok(good === kinds.length * 20, 'mistakes: mkEntry → fromMistake rebuilds the same question for every kind');
  ok(M.fromMistake({ type: 'multiples', k: 'nope', v: [1] }) === null && M.fromMistake({ type: 'gcd', k: 'lcm', v: [6, 8] }) === null && M.fromMistake({ type: 'multiples', k: 'lcm', v: ['x', 8] }) === null, 'mistakes: bad entries → null');
}

// ---------- 練習一輪 ----------
{
  let good = 0;
  M.GROUPS.forEach(([g]) => { const r = M.round(g, 5, rnd); if (r.length === 5 && r.every(Q => Q.group === g) && new Set(r.map(Q => Q.id)).size === 5) good++; });
  const w = M.round('word', 5, rnd, 'wover');
  ok(good === 6 && w.length === 5 && w.every(Q => Q.kind === 'wover'), 'round: 5 unique questions per group; word can be limited to one template');
}

console.log(`multiples: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
