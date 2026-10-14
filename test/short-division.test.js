// node test/short-division.test.js — 短除法（math/short-division.js）單元測試
'use strict';
const path = require('path');
const SD = require(path.join(__dirname, '..', 'math', 'short-division.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('FAIL', m); } };
const J = JSON.stringify;
// 歐幾里得演算法（跟被測的 SD.gcd 分開寫一份）
const eu = (a, b) => (b === 0 ? a : eu(b, a % b));
const euL = (a, b) => a / eu(a, b) * b;
// 可重現的亂數
function lcg(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// ---- 步驟產生器：各種數對 ----
{
  const p = SD.plan([12, 18]);
  ok(p.mode === 'both' && J(p.divs) === '[2,3]' && J(p.rows) === '[[12,18],[6,9],[2,3]]' && p.gcd === 6 && p.lcm === 36, '12,18 → 2,3｜6,9｜2,3；GCD 6、LCM 36: ' + J(p));
  const q = SD.plan([24, 36]);
  ok(J(q.divs) === '[2,2,3]' && J(q.last) === '[2,3]' && q.gcd === 12 && q.lcm === 72, '24,36 → 2,2,3｜2,3: ' + J(q));
  const r = SD.plan([8, 15]);
  ok(r.divs.length === 0 && r.rows.length === 1 && r.gcd === 1 && r.lcm === 120, '互質 8,15：不用除，GCD 1、LCM 120: ' + J(r));
  const s = SD.plan([6, 18]);
  ok(J(s.divs) === '[2,3]' && J(s.last) === '[1,3]' && s.gcd === 6 && s.lcm === 18, '倍數 6,18 → 最後一列 1,3；LCM＝18（大的那個）: ' + J(s));
  const t = SD.plan([1, 7]);
  ok(t.divs.length === 0 && t.gcd === 1 && t.lcm === 7, '含 1：1,7 一開始就互質: ' + J(t));
  const u = SD.plan([1, 1]);
  ok(u.divs.length === 0 && u.gcd === 1 && u.lcm === 1, '1,1: ' + J(u));
  const v = SD.plan([7, 7]);
  ok(J(v.divs) === '[7]' && J(v.last) === '[1,1]' && v.gcd === 7 && v.lcm === 7, '相同 7,7: ' + J(v));
  const w = SD.plan([360, 840]);
  ok(w.divs.every(SD.isPrime) && w.divs.join() === [...w.divs].sort((a, b) => a - b).join() && w.gcd === 120 && w.lcm === 2520 && SD.gcd(w.last[0], w.last[1]) === 1, '三位數 360,840: ' + J(w));
  // 每一步都是「最小的共同質因數」，copied 兩個數都不照抄
  ok(w.copied.every(c => c.every(x => !x)), '兩個數不會有照抄');
}

// ---- GCD／LCM 正確性：跟歐幾里得比對，隨機 1000 組（兩個數）＋ 300 組三個數 ----
{
  const rnd = lcg(20261014); let bad = 0, bad3 = 0;
  for (let i = 0; i < 1000; i++) {
    const a = 1 + Math.floor(rnd() * 999), b = 1 + Math.floor(rnd() * 999), p = SD.plan([a, b]);
    const okRow = p.rows.every((row, k) => k === 0 || row.every((x, j) => x * p.divs[k - 1] === p.rows[k - 1][j]));
    if (p.gcd !== eu(a, b) || p.lcm !== euL(a, b) || SD.gcd(a, b) !== eu(a, b) || SD.lcm(a, b) !== euL(a, b) || !okRow || p.gcd * p.lcm !== a * b) { bad++; if (bad < 4) console.log('  bad', a, b, J(p)); }
  }
  ok(bad === 0, '1000 組兩個數：GCD、LCM 跟歐幾里得一樣、GCD×LCM＝兩數相乘、每列×除數＝上一列（錯 ' + bad + '）');
  for (let i = 0; i < 300; i++) {
    const xs = [0, 0, 0].map(() => 1 + Math.floor(rnd() * 120));
    const g = SD.plan(xs, 'gcd'), l = SD.plan(xs, 'lcm');
    if (g.gcd !== eu(eu(xs[0], xs[1]), xs[2]) || l.lcm !== euL(euL(xs[0], xs[1]), xs[2]) || !SD.pairwiseCoprime(l.last) || SD.gcdAll(g.last) !== 1) { bad3++; if (bad3 < 4) console.log('  bad3', xs, J(g), J(l)); }
  }
  ok(bad3 === 0, '300 組三個數：GCD（三個都整除才除）、LCM（兩兩互質才停）都對（錯 ' + bad3 + '）');
}

// ---- 三個數的 LCM 短除規則 ----
{
  const a = SD.plan([4, 6, 9], 'lcm');
  ok(J(a.divs) === '[2,3]' && J(a.rows) === '[[4,6,9],[2,3,9],[2,1,3]]' && J(a.copied) === '[[false,false,true],[true,false,false]]' && a.lcm === 36,
    '4,6,9：2 只除 4、6，9 照抄；3 除 3、9，2 照抄；最後 2,1,3 兩兩互質 → 2×3×2×1×3＝36: ' + J(a));
  const b = SD.plan([12, 18, 30], 'lcm');
  ok(J(b.divs) === '[2,3]' && J(b.last) === '[2,3,5]' && b.lcm === 180, '12,18,30：先用三個都整除的 2、3 → 2,3,5 → 180: ' + J(b));
  const c = SD.plan([12, 18, 30], 'gcd');
  ok(J(c.divs) === '[2,3]' && J(c.last) === '[2,3,5]' && c.gcd === 6 && c.lcm === null, '12,18,30 找最大公因數 → 6: ' + J(c));
  const d = SD.plan([6, 10, 15], 'gcd');
  ok(d.divs.length === 0 && d.gcd === 1, '6,10,15：三個沒有共同公因數（兩兩有也不管）→ GCD 1: ' + J(d));
  const e = SD.plan([6, 10, 15], 'lcm');
  ok(J(e.divs) === '[2,3,5]' && J(e.last) === '[1,1,1]' && e.lcm === 30, '6,10,15 找最小公倍數：2、3、5 各除兩個 → 30: ' + J(e));
  ok(!SD.isDone([2, 3, 9], 'lcm') && SD.isDone([2, 3, 9], 'gcd') && SD.isDone([2, 1, 3], 'lcm'), '停止條件：gcd 看三個共同、lcm 看兩兩互質');
  ok(J(SD.stillFactor([2, 3, 9], 'lcm')) === '{"d":3,"xs":[3,9]}', '還沒停的提示：3 和 9 還有公因數 3');
  // 照抄的數在 checkDivisor 裡不能跟除數還有公因數
  const u = SD.checkDivisor([12, 18, 8], 6, 'lcm');
  ok(!u.ok && u.why === 'unsafe' && u.x === 8 && u.g === 2, '12,18,8 用 6 除：8 照抄但 8 和 6 有公因數 2 → 不行: ' + J(u));
  const bigOk = SD.plan([12, 18, 8], 'lcm', { 0: 6 });
  ok(bigOk.divs[0] !== 6 && bigOk.lcm === 72, '指定不合規則的 6 → 改用預設，答案仍是 72: ' + J(bigOk));
  ok(SD.checkDivisor([4, 6, 9], 2, 'lcm').ok && SD.checkDivisor([4, 6, 9], 3, 'lcm').ok && SD.checkDivisor([4, 6, 9], 5, 'lcm').why === 'fewer', 'lcm：至少兩個能整除');
}

// ---- 「任何公因數都可以」的判定 ----
{
  ok(SD.checkDivisor([12, 18], 6, 'both').ok && SD.checkDivisor([12, 18], 3, 'both').ok && SD.checkDivisor([12, 18], 2, 'both').ok, '12,18：2、3、6 都可以（6 不是質數也算）');
  const f = SD.checkDivisor([12, 18], 4, 'both');
  ok(!f.ok && f.why === 'notAll' && f.x === 18, '12,18 用 4：18 不能被 4 整除: ' + J(f));
  ok(SD.checkDivisor([12, 18], 1, 'both').why === 'num' && SD.checkDivisor([12, 18], 0, 'both').why === 'num' && SD.checkDivisor([12, 18], 2.5, 'both').why === 'num', '1、0、小數都不行');
  ok(SD.checkDivisor([2, 3], 2, 'both').why === 'done', '已經互質還想除 → done');
  ok(J(SD.validDivisors([12, 18], 'both')) === '[2,3,6]' && J(SD.validDivisors([24, 36], 'both')) === '[2,3,4,6,12]', 'validDivisors：所有公因數（>1）');
  // 不管每一步選哪一個合法的除數，GCD、LCM 都一樣（隨機挑 500 次）
  const rnd = lcg(7); let bad = 0, used = 0;
  for (let i = 0; i < 500; i++) {
    const n3 = i % 3 === 0, xs = (n3 ? [0, 0, 0] : [0, 0]).map(() => 2 + Math.floor(rnd() * (n3 ? 90 : 400)));
    const mode = n3 ? (i % 2 ? 'gcd' : 'lcm') : 'both';
    let row = xs.slice(); const divs = [];
    for (let k = 0; k < 40 && !SD.isDone(row, mode); k++) {
      const opts = SD.validDivisors(row, mode); const d = opts[Math.floor(rnd() * opts.length)];
      if (!SD.isPrime(d)) used++;
      divs.push(d); row = SD.divideRow(row, d);
    }
    const D = divs.reduce((a, b) => a * b, 1), G0 = xs.reduce((a, b) => eu(a, b)), L0 = xs.reduce((a, b) => euL(a, b));
    if ((mode !== 'lcm' && D !== G0) || (mode !== 'gcd' && D * row.reduce((a, b) => a * b, 1) !== L0)) { bad++; if (bad < 4) console.log('  any-factor bad', xs, mode, divs, row); }
  }
  ok(bad === 0 && used > 10, '500 題隨便挑合法除數（含 ' + used + ' 次不是質數），GCD／LCM 都跟歐幾里得一樣（錯 ' + bad + '）');
  // plan 的指定除數（我想用別的公因數）
  const p6 = SD.plan([12, 18], 'both', { 0: 6 });
  ok(J(p6.divs) === '[6]' && J(p6.last) === '[2,3]' && p6.gcd === 6 && p6.lcm === 36, '12,18 第一步用 6 → 一步到位，答案一樣: ' + J(p6));
  const p4 = SD.plan([12, 18], 'both', { 0: 4 });
  ok(J(p4.divs) === '[2,3]', '指定 4（不合法）→ 用預設 2');
}

// ---- 出題 ----
{
  const rnd = lcg(42);
  const lv = { l20: [2, 20], l100: [10, 100], l3d: [100, 999] };
  Object.keys(lv).forEach(k => {
    let coprime = 0, badRange = 0;
    for (let i = 0; i < 400; i++) {
      const xs = SD.generate(k, { rnd });
      if (xs.length !== 2 || xs[0] === xs[1] || xs.some(x => x < lv[k][0] || x > lv[k][1])) badRange++;
      if (eu(xs[0], xs[1]) === 1) coprime++;
    }
    ok(badRange === 0 && coprime > 10 && coprime < 120, k + '：兩個數、範圍對、偶爾互質（400 題互質 ' + coprime + '）');
  });
  let tg = 0, tl = 0, bad = 0;
  for (let i = 0; i < 300; i++) {
    const g = SD.generate('tri', { rnd, mode: 'gcd' }), l = SD.generate('tri', { rnd, mode: 'lcm' });
    if (g.length !== 3 || l.length !== 3 || new Set(g).size !== 3 || new Set(l).size !== 3 || SD.lcmAll(l) > 3000) bad++;
    if (SD.gcdAll(g) === 1) tg++; if (SD.pairwiseCoprime(l)) tl++;
  }
  ok(bad === 0 && tg > 5 && tg < 90 && tl > 5 && tl < 90, '三個數：三個不同、LCM ≤ 3000、偶爾一開始就停（gcd ' + tg + '、lcm ' + tl + ' / 300）');
  ok(J(SD.parseNums('12, 18', 2)) === '[12,18]' && J(SD.parseNums('１２、１８、３０', 3)) === '[12,18,30]' && SD.parseNums('12', 2) === null && SD.parseNums('0 5', 2) === null, 'parseNums');
}

console.log(fail ? `\n${pass} passed, ${fail} FAILED` : `OK ${pass} passed`);
process.exit(fail ? 1 : 0);
