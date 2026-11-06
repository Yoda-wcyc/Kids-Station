// anim-B.test.js — 🎬 B 拼大找公倍、切小找公因：動畫標的數字＋練習答案，用暴力法重算（node test/anim-B.test.js；test/anim.test.js 會跑）
'use strict';
const path = require('path');
const S = require(path.join(__dirname, '..', 'math', 'anim', 'B.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim-B:', m); } };
const cms = (a, b, n) => { const o = []; for (let i = 1; o.length < n; i++) if (i % a === 0 && i % b === 0) o.push(i); return o; };
const gcf = (a, b) => { let g = 1; for (let i = 1; i <= Math.min(a, b); i++) if (a % i === 0 && b % i === 0) g = i; return g; };
const txt = S.steps.map(s => s.t).join('\n');
const st = i => Object.assign({}, S.v0, ...S.steps.slice(0, i + 1).map(s => s.v));

// 動畫：38×19 拼正方形、48×32 剪正方形、24 和 36 的公倍數
const k = S.key;
ok(k.tile.join() === '38,19' && k.paper.join() === '48,32' && k.a === 24 && k.b === 36, 'key = 期中題目');
ok(cms(38, 19, 1)[0] === k.side && k.side === 38, 'LCM(38,19) = 38 by brute force');
ok(gcf(48, 32) === k.sq && k.sq === 16, 'GCF(48,32) = 16 by brute force');
ok(cms(24, 36, 3).join() === k.cm.join() && k.cm.join() === '72,144,216', 'common multiples of 24,36 = 72,144,216');
ok(k.side / 19 === 2 && k.side / 38 === 1, '38×38 = two 38×19 tiles');
ok(k.cuts === (48 / 16 - 1) + (32 / 16 - 1) && k.pieces === (48 / 16) * (32 / 16) && st(S.steps.length - 1).cut === k.cuts, 'cuts 3 → 6 pieces of 16×16');
// 數線上的倍數：k24、k36 跑到 216
ok(st(5).k24 * 24 === 216 && st(5).k36 * 36 === 216, 'multiples rows end at 216');
['38×19', '38×38', '48×32', '16×16', '72、144、216', '拼成大的找公倍，切成小的找公因'].forEach(s => ok(txt.includes(s), 'step text has ' + s));

// 練習：每題暴力法
const EXAM = ['38,19', '19,38', '48,32', '32,48', '24,36', '36,24'];
S.prac.forEach((P, i) => {
  const c = P.calc, want = c.f === 'lcm' ? [cms(c.a, c.b, 1)[0]] : c.f === 'gcd' ? [gcf(c.a, c.b)] : c.f === 'cm' ? cms(c.a, c.b, c.n) : null;
  ok(want && P.ans.join() === want.join(), `prac ${i + 1}: ${P.ans} vs ${want}`);
  ok(EXAM.indexOf(c.a + ',' + c.b) < 0, `prac ${i + 1} numbers differ from the exam`);
  ok(P.q.includes(String(c.a)) && P.q.includes(String(c.b)) && P.ans.every(x => P.why.includes(String(x))), `prac ${i + 1} text matches calc`);
});

console.log(`anim-B: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
