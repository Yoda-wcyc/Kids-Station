// anim-C.test.js — 🎬 C 公車何時再同時開：動畫標的數字＋練習答案，用暴力法重算（node test/anim-C.test.js；test/anim.test.js 會跑）
'use strict';
const path = require('path');
const S = require(path.join(__dirname, '..', 'math', 'anim', 'C.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim-C:', m); } };
// 一分鐘一分鐘往後數，直到兩班同時開
const next = (a, b) => { let t = 1; while (t % a || t % b) t++; return t; };
const clock = (h, m, add) => { const t = h * 60 + m + add; return [Math.floor(t / 60), t % 60]; };
const fmt = ([h, m]) => h + ':' + String(m).padStart(2, '0');
const txt = S.steps.map(s => s.t).join('\n');

// 動畫：每 30 分、每 45 分，9:20 同時開
const k = S.key, gap = next(30, 45);
ok(k.a === 30 && k.b === 45 && k.start === '9:20', 'key = 期中題目');
ok(gap === 90 && k.lcm === gap && k.meet === fmt(clock(9, 20, gap)) && k.meet === '10:50', 'meet after 90 min at 10:50 by brute force');
const dep = p => { const o = []; for (let t = 0; t <= gap; t += p) o.push(t); return o; };
ok(k.A.join() === dep(30).join() && k.B.join() === dep(45).join(), 'departure lists');
ok(k.A.filter(t => t > 0 && t < gap && k.B.includes(t)).length === 0, 'no earlier common departure');
['9:20', '9:50', '10:05', '10:20', '10:50'].forEach(s => ok(txt.includes(s), 'step text has ' + s));
ok([30, 60, 90].map(t => fmt(clock(9, 20, t))).join() === '9:50,10:20,10:50' && fmt(clock(9, 20, 45)) === '10:05', 'step times are 9:20 + multiples');
ok(txt.includes('30×3') && 30 * 3 === 90 && txt.includes('45×2') && 45 * 2 === 90 && txt.includes('公倍數'), 'step text: 30×3、45×2、公倍數');
const last = Object.assign({}, S.v0, ...S.steps.map(s => s.v));
ok(last.t === gap, 'time cursor ends at 90');

// 練習：每題暴力法
S.prac.forEach((P, i) => {
  const c = P.calc, want = clock(c.h, c.m, next(c.a, c.b));
  ok(c.f === 'bus' && P.ans.join() === want.join(), `prac ${i + 1}: ${P.ans} vs ${want}`);
  ok(!(c.a === 30 && c.b === 45) && !(c.h === 9 && c.m === 20), `prac ${i + 1} numbers differ from the exam`);
  ok(P.q.includes(String(c.a)) && P.q.includes(String(c.b)) && P.q.includes(fmt([c.h, c.m])) && P.why.includes(fmt(want)), `prac ${i + 1} text matches calc`);
});

console.log(`anim-C: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
