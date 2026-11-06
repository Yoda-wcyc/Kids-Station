// anim-A.test.js — 🎬 A 範圍裡的倍數：動畫標的數字＋練習答案，用暴力法重算（node test/anim-A.test.js；test/anim.test.js 會跑）
'use strict';
const path = require('path');
const S = require(path.join(__dirname, '..', 'math', 'anim', 'A.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim-A:', m); } };
const mults = (a, lo, hi) => { const o = []; for (let i = lo; i <= hi; i++) if (i % a === 0) o.push(i); return o; };
const txt = S.steps.map(s => s.t).join('\n');

// 動畫：水梨 380～520、16 個一盒
const k = S.key, m = mults(k.per, k.lo, k.hi);
ok(k.per === 16 && k.lo === 380 && k.hi === 520, 'key = 期中題目');
ok(m[0] === k.min && m[m.length - 1] === k.max && k.min === 384 && k.max === 512, 'min/max by brute force: ' + m[0] + ',' + m[m.length - 1]);
ok(k.out[0] === m[0] - k.per && k.out[0] < k.lo && k.out[1] === m[m.length - 1] + k.per && k.out[1] > k.hi, 'neighbours 368／528 fall outside');
[['16×23＝368', 23 * 16 === 368], ['16×24＝384', 24 * 16 === 384], ['16×32＝512', 32 * 16 === 512], ['16×33＝528', 33 * 16 === 528], ['380÷16＝23…12', Math.floor(380 / 16) === 23 && 380 % 16 === 12]]
  .forEach(([s, c]) => ok(c && txt.includes(s), 'step text has correct ' + s));
ok(txt.includes('最少 384') && txt.includes('最多 512') && txt.includes('框'), 'step text: 最少 384、最多 512、框');
// 數線上的點：k 從 352 起每次 +16，第 2、3、11、12 個點＝368、384、512、528
const at = n => 352 + 16 * (n - 1), st = i => Object.assign({}, S.v0, ...S.steps.slice(0, i + 1).map(s => s.v));
ok(at(st(2).k) === 368 && at(st(3).k) === 384 && at(st(4).k) === 512 && at(st(5).k) === 528, 'jump counts land on 368/384/512/528');

// 練習：每題暴力法
S.prac.forEach((P, i) => {
  const c = P.calc, r = mults(c.a, c.lo, c.hi);
  ok(c.f === 'range' && P.ans[0] === r[0] && P.ans[1] === r[r.length - 1], `prac ${i + 1}: ${P.ans} vs ${r[0]},${r[r.length - 1]}`);
  ok(!(c.a === 16 && c.lo === 380 && c.hi === 520), `prac ${i + 1} numbers differ from the exam`);
  ok(c.lo % c.a !== 0 && c.hi % c.a !== 0, `prac ${i + 1}: bounds are not multiples (no edge ambiguity)`);
  ok(P.q.includes(c.lo + '～' + c.hi) && P.q.includes(String(c.a)) && P.why.includes(String(P.ans[0])) && P.why.includes(String(P.ans[1])), `prac ${i + 1} text matches calc`);
});

console.log(`anim-A: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
