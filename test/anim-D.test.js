// anim-D.test.js — 🎬 D 三角形邊長條件：動畫標的數字＋練習答案，用暴力法重算（node test/anim-D.test.js；test/anim.test.js 會跑）
'use strict';
const path = require('path');
const S = require(path.join(__dirname, '..', 'math', 'anim', 'D.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim-D:', m); } };
// 三根能不能圍：最長的那根要比另外兩根加起來短（排序後比，不用公式）
const can = s => { const t = s.slice().sort((x, y) => x - y); return t[0] + t[1] > t[2]; };
const thirds = (a, b) => { const o = []; for (let c = 1; c <= 100; c++) if (can([a, b, c])) o.push(c); return o; };
const trios = st => { const o = []; for (let i = 0; i < st.length; i++) for (let j = i + 1; j < st.length; j++) for (let k = j + 1; k < st.length; k++) o.push([st[i], st[j], st[k]]); return o; };
const txt = S.steps.map(s => s.t).join('\n');
const k = S.key;

// 3、8：整數第三邊 6～10 → 範圍 5～11 不含
const r = thirds(k.a, k.b);
ok(k.a === 3 && k.b === 8 && r[0] === k.lo + 1 && r[r.length - 1] === k.hi - 1 && k.lo === 5 && k.hi === 11, '3、8 third side strictly between 5 and 11: ' + r);
ok(!can([3, 8, 5]) && !can([3, 8, 11]), '5 and 11 themselves fail');
// 動畫夾角：小 → 接近 5、大 → 接近 11（餘弦定理只是畫圖；這裡用座標直接量長度）
const len = th => { const t = th * Math.PI / 180, x = 3 * Math.cos(t), y = 3 * Math.sin(t); return Math.hypot(8 - x, y); };
const st = i => Object.assign({}, S.v0, ...S.steps.slice(0, i + 1).map(s => s.v));
ok(Math.abs(len(st(1).th) - 5) < 0.15 && len(st(1).th) > 5, 'step 2 angle → third side near 5: ' + len(st(1).th));
ok(Math.abs(len(st(2).th) - 11) < 0.15 && len(st(2).th) < 11, 'step 3 angle → third side near 11: ' + len(st(2).th));
ok(len(st(3).th) > 5 && len(st(3).th) < 11, 'step 4 angle inside the band');
// 7、7、14
ok(k.iso.join() === '7,7,14' && !can(k.iso) && 7 + 7 === 14, '7、7、14 cannot');
ok(st(4).fold === 0, '7、7 rods end lying flat');
// 竹籤 5、8、12、13
const all = trios(k.sticks), good = all.filter(can), bad = all.filter(t => !can(t));
ok(k.sticks.join() === '5,8,12,13' && all.length === 4 && JSON.stringify(k.combos) === JSON.stringify(all), 'combos = all 4 trios');
ok(good.length === k.can && k.can === 3 && JSON.stringify(bad) === JSON.stringify(k.cannot) && bad[0].join() === '5,8,13', 'brute force: 3 can, 5、8、13 cannot');
ok(st(5).k === all.length, 'step 6 shows every trio');
[['8－3＝5', 8 - 3 === 5], ['8＋3＝11', 8 + 3 === 11], ['7＋7＝14', 7 + 7 === 14], ['5＋8＝13', 5 + 8 === 13]].forEach(([s, c]) => ok(c && txt.includes(s), 'step text has correct ' + s));
ok(txt.includes('5～11') && txt.includes('能排 3 種') && txt.includes('兩短邊加起來要比長邊長'), 'step text: 5～11、3 種、口訣');

// 練習
S.prac.forEach((P, i) => {
  const c = P.calc, t = `prac ${i + 1}`;
  if (c.f === 'tri3') {
    const okOpts = c.opts.filter(x => can([c.a, c.b, x]));
    ok(okOpts.length === 1 && c.opts[P.ans] === okOpts[0] && P.opts[P.ans] === okOpts[0] + ' 公分', `${t}: only ${okOpts} works`);
    ok(!(c.a === 3 && c.b === 8), t + ' numbers differ from the exam');
    ok(P.q.includes(c.a + ' 公分和 ' + c.b + ' 公分') && P.opts.every((o, j) => o === c.opts[j] + ' 公分'), t + ' text matches calc');
  } else if (c.f === 'iso') {
    const cand = [c.a, c.b].filter(x => can([c.a, c.b, x]));
    ok(cand.length === 1 && P.ans[0] === cand[0], `${t}: isosceles third side ${cand}`);
    ok(!(c.a === 7 && c.b === 14), t + ' numbers differ from the exam');
    ok(P.q.includes(c.a + ' 公分和 ' + c.b + ' 公分') && P.why.includes(String(P.ans[0])), t + ' text matches calc');
  } else if (c.f === 'combo') {
    const n = trios(c.sticks).filter(can).length;
    ok(P.ans[0] === n, `${t}: ${n} trios can`);
    ok(c.sticks.join() !== '5,8,12,13', t + ' numbers differ from the exam');
    ok(P.q.includes(c.sticks.join('、')) && P.why.includes('共 ' + n + ' 種'), t + ' text matches calc');
  } else ok(false, t + ' unknown calc ' + c.f);
});

console.log(`anim-D: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
