// anim-G.test.js — 🎬 G 小數位值和排大小：動畫標的數字＋練習答案，全部用整數重算（node test/anim-G.test.js；test/anim.test.js 會跑）
'use strict';
const path = require('path');
const S = require(path.join(__dirname, '..', 'math', 'anim', 'G.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim-G:', m); } };
const P5 = 100000;   // 都換成 0.00001 的個數（整數），避開浮點誤差
const toInt = (s, dp = 5) => { const [a, b = ''] = s.split('.'); return parseInt(a + b.padEnd(dp, '0'), 10); };
const fmt = (n, dp) => { const d = 10 ** dp, i = Math.floor(n / d); return dp ? i + '.' + String(n % d).padStart(dp, '0') : String(i); };
const place = items => { let n = 0; items.forEach(([c, p]) => { for (let j = 0; j < c; j++) n += 10 ** (5 - p); }); return n; };   // 一個一個加
const sortDec = xs => xs.slice().sort((a, b) => toInt(a, 6) - toInt(b, 6));
const round = (x, dp) => { const ds = (x.split('.')[1] || '').length, n = toInt(x, ds), u = 10 ** (ds - dp); return fmt(Math.floor(n / u) + (n % u * 2 >= u ? 1 : 0), dp); };
const txt = S.steps.map(s => s.t).join('\n'), k = S.key;

// 動畫 1：27 個 1、8 個 0.1、32 個 0.001、45 個 0.00001
const sum = place(k.items);
ok(fmt(sum, 5) === k.sum && k.sum === '27.83245', 'sum by counting: ' + fmt(sum, 5));
ok(fmt(place([[32, 3]]), 5) === '0.03200' && fmt(place([[45, 5]]), 5) === '0.00045', '32×0.001 = 0.032, 45×0.00001 = 0.00045');
ok(txt.includes('0.032') && txt.includes('0.00045') && txt.includes(k.sum) && txt.includes('27 個 1、8 個 0.1、32 個 0.001、45 個 0.00001'), 'step text: items, 0.032, 0.00045, 27.83245');
ok(sum === 27 * P5 + 8 * P5 / 10 + 3 * P5 / 100 + 2 * P5 / 1000 + 4 * 10 + 5, 'place digits 2 7 . 8 3 2 4 5 (10 個換 1 個進位後)');
// 動畫 2：排大小
const so = sortDec(k.xs);
ok(so.join() === k.sorted.join() && so.join() === '0.0523,0.1,1.0894,1.521', 'sorted by integers: ' + so);
ok(txt.includes(so.join('＜')) && txt.includes('由小到大＝從左到右'), 'step text: chain ＜ and 由小到大＝從左到右');
// 動畫 3：8.9971 取到第二位
ok(round(k.round.x, k.round.dp) === k.round.r && k.round.r === '9.00', 'round 8.9971 → ' + round(k.round.x, 2));
ok(txt.includes('8.9971') && txt.includes('第三位是 7') && txt.includes('9.00'), 'step text: 8.9971、第三位是 7、9.00');
// 畫面：第 3 步畫出 27.83245；最後一步畫出 9.00 和數線順序
const A = require(path.join(__dirname, '..', 'math', 'anim.js')), st = i => Object.assign({}, S.v0, ...S.steps.slice(0, i + 1).map(s => s.v));
ok(S.draw(st(2), A.h).includes(k.sum) && S.draw(st(4), A.h).includes(so.join(' ＜ ')) && S.draw(st(6), A.h).includes('9.00'), 'draw shows 27.83245 / chain / 9.00');

// 練習：每題暴力法
S.prac.forEach((P, i) => {
  const c = P.calc, tag = `prac ${i + 1}`;
  if (c.f === 'place') {
    const want = fmt(place(c.items), 5).replace(/0+$/, '');
    ok(P.ans[0] === want && P.fields[0].t === 'dec', `${tag}: ${P.ans[0]} vs ${want}`);
    ok(want !== k.sum, tag + ' differs from the animation');
    ok(c.items.every(([n, p]) => P.q.includes(n + ' 個 ' + fmt(10 ** (5 - p), 5).replace(/\.?0+$/, ''))) && P.why.includes(want), tag + ' text matches calc');
  } else if (c.f === 'dorder') {
    const so2 = sortDec(c.xs).join('＜');
    ok(P.opts[P.ans] === so2 && P.opts.filter(o => o === so2).length === 1, `${tag}: ${so2}`);
    ok(c.xs.join() !== k.xs.join() && c.xs.every(x => P.q.includes(x)), tag + ' differs from the exam, text matches');
  } else if (c.f === 'round') {
    const want = round(c.x, c.dp);
    ok(P.ans[0] === want && P.fields[0].t === 'dec' && want.split('.')[1].length === c.dp, `${tag}: ${P.ans[0]} vs ${want}`);
    ok(c.x !== k.round.x && P.q.includes(c.x) && P.why.includes(want), tag + ' differs from the exam, text matches');
  } else ok(false, tag + ' unknown calc ' + c.f);
});

console.log(`anim-G: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
