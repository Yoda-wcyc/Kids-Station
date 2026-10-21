// multiply.test.js — 〈乘法快算〉math/multiply.js 單元測試（2026-10-21）
// 用法：node test/multiply.test.js（smoke.js 也會跑）
'use strict';
const path = require('path');
const X = require(path.join(__dirname, '..', 'math', 'multiply.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL multiply:', m); } };
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const rnd = rng(1021);
// 獨立的直式乘法（逐位、進位）—— 不用 multiply.js
function longMul(a, b) { const da = String(a).split('').reverse().map(Number), db = String(b).split('').reverse().map(Number), r = new Array(da.length + db.length).fill(0); for (let i = 0; i < da.length; i++) for (let j = 0; j < db.length; j++) r[i + j] += da[i] * db[j]; for (let k = 0; k < r.length - 1; k++) { r[k + 1] += Math.floor(r[k] / 10); r[k] %= 10; } return +r.reverse().join(''); }
const RANGE = { nn: [[2, 9], [2, 9]], d21: [[12, 99], [2, 9]], d22t: [[11, 99], [20, 90]], d22: [[11, 99], [11, 99]], d31: [[101, 999], [2, 9]] };

X.LV.forEach(lv => {
  let bad = 0, first = '';
  for (let i = 0; i < 500; i++) {
    const q = X.gen(lv, rnd), [ra, rb] = RANGE[lv], P = longMul(q.a, q.b);
    const inR = q.a >= ra[0] && q.a <= ra[1] && q.b >= rb[0] && q.b <= rb[1];
    const shape = lv === 'd22t' ? q.b % 10 === 0 && q.a % 10 !== 0 : lv === 'd21' ? q.a % 10 !== 0 : lv === 'd31' ? q.a % 100 !== 0 : lv === 'd22' ? q.a % 10 !== 0 : true;
    const V = X.vertical(q.a, q.b), last = V.rows[V.rows.length - 1];
    // 拆解：部分積加起來＝乘積；完整算法最後是乘積；直式最後一列＝乘積，每一列逐位比對都過
    const ps = X.parts(q.a, q.b), sum = ps ? ps.reduce((s, p) => s + p[1], 0) * (q.b >= 10 && q.b % 10 === 0 ? 10 : 1) : P;
    const rowsOk = V.rows.every((r, ri) => X.checkRow(V, ri, X.rowDigits(r.val, r.shift, V.width)).ok);
    const full = X.full(q.a, q.b);
    if (!(inR && shape && q.a * q.b === P && last.val === P && sum === P && rowsOk && new RegExp('＝ ' + P + '$').test(full) && X.hint(q.a, q.b).indexOf(q.a + '×' + q.b) === 0 && !new RegExp('[＝=] ?' + P + '(?!\\d)').test(X.hint(q.a, q.b).replace(/^\S+/, '')))) {
      bad++; if (!first) first = JSON.stringify({ q, P, inR, shape, last: last.val, sum, rowsOk, full, hint: X.hint(q.a, q.b) });
    }
  }
  ok(!bad, `${lv}: 500 random questions in range; parts, full, vertical agree with long multiplication; hint never gives the answer` + (bad ? ` — ${bad} bad, e.g. ${first}` : ''));
});
const d22 = Array.from({ length: 1000 }, () => X.gen('d22', rnd)), tens = d22.filter(q => q.b % 10 === 0).length;
ok(tens > 200 && tens < 400 && d22.every(q => q.lv === 'd22'), 'd22 mixes 整十 (~30%) and 一般: ' + tens + '/1000');
ok(X.round('nn', 20, rnd).length === 20 && new Set(X.round('d21', 20, rnd).map(q => q.a + 'x' + q.b)).size === 20, 'round: 20 questions, unique within a round');

// 考卷上算錯的題：提示要具體
ok(X.hint(15, 57) === '15×57 再算一次：15×50=750、15×7=105，加起來是多少？', 'hint 15×57: ' + X.hint(15, 57));
ok(X.hint(15, 56) === '15×56 再算一次：15×50=750、15×6=90，加起來是多少？', 'hint 15×56');
ok(X.hint(78, 3) === '78×3 再算一次：70×3=210、8×3=24，加起來是多少？', 'hint 78×3');
ok(X.hint(45, 2) === '45×2 再算一次：40×2=80、5×2=10，加起來是多少？', 'hint 45×2');
ok(/8、16、24、？/.test(X.hint(8, 4)) && /8×5=40、8×2=16/.test(X.hint(8, 7)) && /先算 15×5=75，後面再補一個 0/.test(X.hint(15, 50)), 'hint 九九 / 整十');
ok(X.full(15, 57) === '15×57 ＝ 15×50 ＋ 15×7 ＝ 750 ＋ 105 ＝ 855' && X.full(15, 50) === '15×50 ＝ 15×5×10 ＝ 75×10 ＝ 750' && X.full(345, 6) === '345×6 ＝ 300×6 ＋ 40×6 ＋ 5×6 ＝ 1800 ＋ 240 ＋ 30 ＝ 2070', 'full decomposition');

// 直式：哪一位錯就說哪一位（含進位）
{
  const V = X.vertical(15, 57);
  ok(V.rows.map(r => r.k + ':' + r.val + ':' + r.shift).join() === 'p1:105:0,p2:75:1,sum:855:0' && V.width === 3, 'vertical 15×57: 105 / 75_ / 855');
  let r = X.checkRow(V, 0, ['1', '0', '6']);
  ok(!r.ok && r.bad.join() === '2' && r.text === '15×7 的個位：5×7=35，寫 5，進 3', 'row 15×7 ones wrong: ' + r.text);
  r = X.checkRow(V, 0, ['1', '1', '5']);
  ok(!r.ok && r.bad.join() === '1' && /十位：1×7=7，加進位 3 ＝ 10，寫 10/.test(r.text), 'row 15×7 forgot the carry: ' + r.text);
  ok(X.checkRow(V, 1, ['7', '5', '']).ok && X.checkRow(V, 1, ['7', '5', '0']).ok && !X.checkRow(V, 1, ['', '7', '5']).ok, 'row 15×5 shifted one place (ones may be blank or 0)');
  r = X.checkRow(V, 2, ['8', '4', '5']);
  ok(!r.ok && r.text === '加起來的十位：0＋5 ＝ 5，寫 5', 'sum row: ' + r.text);
  const V2 = X.vertical(78, 3);
  r = X.checkRow(V2, 0, ['2', '3', '0']);
  ok(V2.rows.length === 1 && !r.ok && r.text === '78×3 的個位：8×3=24，寫 4，進 2', '78×3 → 230: ' + r.text);
  const V3 = X.vertical(15, 50);
  ok(V3.rows.length === 1 && V3.rows[0].tens && X.checkRow(V3, 0, ['7', '5', '0']).ok && /個位先補一個 0/.test(X.checkRow(V3, 0, ['7', '5', '5']).text), '整十 15×50: one row, ones must be 0');
}
ok(X.parseNum('８５５') === 855 && X.parseNum(' 1,020 ') === 1020 && X.parseNum('8x') === null && X.parseNum('') === null, 'parseNum: full-width, commas');
const s = X.summarize([8, 9.5, 12, 6.5], [true, true, false, true]);
ok(s.acc === 75 && s.total === 36 && s.avg === 9 && s.n === 4 && s.ok === 3, 'summarize: ' + JSON.stringify(s));
ok(X.valid(15, 57) && !X.valid(0, 3) && !X.valid('15', 3) && !X.valid(15, 1000), 'valid');

console.log(`multiply: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
