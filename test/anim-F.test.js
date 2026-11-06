// anim-F.test.js — 🎬 F 分數是平分：動畫標的數字＋練習答案，用暴力法重算（node test/anim-F.test.js；test/anim.test.js 會跑）
'use strict';
const path = require('path');
const S = require(path.join(__dirname, '..', 'math', 'anim', 'F.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim-F:', m); } };
const gcd = (a, b) => (b ? gcd(b, a % b) : a), red = ([n, d]) => [n / gcd(n, d), d / gcd(n, d)];
const eq = (a, b) => a[0] * b[1] === b[0] * a[1], cmp = (a, b) => Math.sign(a[0] * b[1] - b[0] * a[1]);   // 分數用交叉相乘，不用浮點
const add = (a, b) => red([a[0] * b[1] + b[0] * a[1], a[1] * b[1]]);
const txt = S.steps.map(s => s.t).join('\n'), k = S.key, F = ([n, d]) => `[[${n}/${d}]]`;

// 動畫 1：7 個蛋糕、27 人。1 個切 27 份每人 1 份；7 個 → 7 份
ok(k.cakes === 7 && k.people === 27, 'key = 期中題目');
let pieces = 0; for (let c = 0; c < k.cakes; c++) pieces += 1;   // 每個蛋糕每人拿 1 份（1/27 個）
ok(eq([pieces, k.people], k.share) && k.share[0] === 7 && k.share[1] === 27, 'share 7/27 by counting pieces');
ok(txt.includes('[[1/27]]') && txt.includes('[[7/27]]') && txt.includes('27 份') && txt.includes('7 份'), 'step text: 27 份、[[1/27]]、7 份、[[7/27]]');
// 動畫 2：1/2＝2/4（每份再切一刀：分子分母 ×2）
ok(eq(k.half, k.eq) && k.eq[0] === k.half[0] * 2 && k.eq[1] === k.half[1] * 2, '1/2 = 2/4');
ok(txt.includes('[[1/2]]＝[[2/4]]') && txt.includes('4 份') && txt.includes('2 份'), 'step text: [[1/2]]＝[[2/4]]');
// 動畫 3：2/3＋2/3＝4/3＞1＞4/6
const sum = add(k.add, k.add);
ok(sum[0] === k.sum[0] && sum[1] === k.sum[1] && cmp(sum, [1, 1]) > 0, '2/3+2/3 = 4/3 > 1: ' + sum);
ok(k.wrong[0] === k.add[0] * 2 && k.wrong[1] === k.add[1] * 2 && cmp(k.wrong, [1, 1]) < 0 && cmp(sum, k.wrong) > 0, 'wrong 4/6 (分子分母都加) < 1 < 4/3');
ok(txt.includes(F(k.add) + '＋' + F(k.add)) && txt.includes(F(k.sum)) && txt.includes(F(k.wrong)) && txt.includes('超過 1') && txt.includes('比 1 小'), 'step text 2/3＋2/3、4/3、4/6');
// 畫面：最後一步畫出 4/3 和 4/6 的塗色長度（1 整條＝270）
const st = i => Object.assign({}, S.v0, ...S.steps.slice(0, i + 1).map(s => s.v));
const A = require(path.join(__dirname, '..', 'math', 'anim.js')), last = S.draw(st(S.steps.length - 1), A.h);
ok(last.includes('width="90"') && last.includes('width="180"') && /x="330"/.test(last), 'draw: 2/3 bars in 1/3 pieces, the "1" line at 330');

// 練習：每題暴力法
S.prac.forEach((P, i) => {
  const c = P.calc, tag = `prac ${i + 1}`, opt = j => (/\[\[(\d+)\/(\d+)\]\]/.exec(P.opts[j]) || []).slice(1).map(Number);
  if (c.f === 'div') {
    ok(!(c.a === 7 && c.b === 27), tag + ' differs from the exam');
    let n = 0; for (let j = 0; j < c.a; j++) n += 1;   // a 個，每個切 b 份、每人 1 份
    const right = P.opts.map((_, j) => opt(j)).filter(f => eq(f, [n, c.b]));
    ok(right.length === 1 && eq(opt(P.ans), [n, c.b]), `${tag}: ${P.opts[P.ans]} = ${n}/${c.b}`);
    ok(P.q.includes(c.a + ' 個') && P.q.includes(c.b + ' 個人') && P.why.includes(F([c.a, c.b])), tag + ' text matches calc');
  } else if (c.f === 'eqv') {
    const want = [c.n * c.k, c.d * c.k];
    ok(opt(P.ans)[0] === want[0] && opt(P.ans)[1] === want[1] && eq(want, [c.n, c.d]), `${tag}: ${want}`);
    ok(P.opts.filter((_, j) => { const f = opt(j); return f[0] === want[0] && f[1] === want[1]; }).length === 1, tag + ' one right option');
    ok(P.q.includes(F([c.n, c.d])) && P.why.includes(F(want)), tag + ' text matches calc');
  } else if (c.f === 'fsum') {
    let s = [0, 1]; for (let j = 0; j < c.k; j++) s = add(s, c.a);
    const r = cmp(s, c.b), sym = r > 0 ? '＞' : r < 0 ? '＜' : '＝';
    ok(P.opts[P.ans] === sym, `${tag}: ${s} vs ${c.b} → ${sym}`);
    ok(!(c.a[0] === 2 && c.a[1] === 3), tag + ' differs from the exam');
    ok(P.q.includes(F(c.a) + '＋' + F(c.a)) && P.q.includes(F(c.b)) && P.why.includes(F(s)), tag + ' text matches calc');
  } else ok(false, tag + ' unknown calc ' + c.f);
});

console.log(`anim-F: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
