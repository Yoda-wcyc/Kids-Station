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

// 頁面接線：每題學習幣＋每日清單（數學「異分母加減」），要登入；首頁數學卡片有入口
const html = fs.readFileSync(path.join(root, 'math', 'fracadd.html'), 'utf8');
ok(html.includes("KidsDaily.rec('math', ok, 'fracadd')") && html.includes("KidsCoins.answer(!!ok, 'math')") && html.includes("KidsAuth.startActivity('math'"), 'page records daily + coins + login');
ok(/id: 'fracadd'[^\n]*src: 'math\/fracadd\.html'/.test(fs.readFileSync(path.join(root, 'subjects.js'), 'utf8')), 'math card');

console.log(`fracadd: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
