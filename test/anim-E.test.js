// anim-E.test.js — 🎬 E 內角和：動畫標的角度（直接從畫面座標量）＋練習答案，用暴力法重算（node test/anim-E.test.js；test/anim.test.js 會跑）
'use strict';
const path = require('path');
const S = require(path.join(__dirname, '..', 'math', 'anim', 'E.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim-E:', m); } };
const near = (a, b) => Math.abs(a - b) < 0.01;
// 頂點 V 夾在 P、N 之間的角（度）
const angle = (V, P, N) => { const a = [P[0] - V[0], P[1] - V[1]], b = [N[0] - V[0], N[1] - V[1]]; return Math.acos((a[0] * b[0] + a[1] * b[1]) / Math.hypot(...a) / Math.hypot(...b)) * 180 / Math.PI; };
const polyAngles = pts => pts.map((V, i) => angle(V, pts[(i + pts.length - 1) % pts.length], pts[(i + 1) % pts.length]));
// 正三角形排一排（上下交錯）拼起來：每個點把碰到的 60° 加起來，180°（平角）和 360°（裡面）的點不是角，剩下的加起來＝內角和
function tiles(n) {
  const pt = {}, add = (x, y) => { const k = x + ',' + y; pt[k] = (pt[k] || 0) + 60; };
  for (let i = 0; i < n; i++) { const j = Math.floor(i / 2); if (i % 2 === 0) { add(2 * j, 0); add(2 * j + 2, 0); add(2 * j + 1, 1); } else { add(2 * j + 1, 1); add(2 * j + 2, 0); add(2 * j + 3, 1); } }
  const all = Object.values(pt), corners = all.filter(a => a !== 180 && a !== 360);
  return { raw: 180 * n, total: corners.reduce((x, y) => x + y, 0), corners: corners.length, flats: all.filter(a => a === 180).length };
}
const txt = S.steps.map(s => s.t).join('\n'), k = S.key;

// 三角形：畫出來的角＝50、70、60，和＝180
const ta = polyAngles(k.triPts);
ok(ta.every((a, i) => near(a, k.tri[i])) && k.tri.reduce((x, y) => x + y) === 180, 'triangle drawn angles ' + ta.map(Math.round));
ok(txt.includes('50°＋60°＋70°＝180°'), 'step text 50+60+70=180');
// 四邊形：畫出來的角＝90、85、65、120；★＝360－120－90－85
const qa = polyAngles(k.quadPts);
ok(qa.every((a, i) => near(a, k.quadAng[i])), 'quad drawn angles ' + qa.map(x => x.toFixed(2)));
ok(360 - k.quadKnown.reduce((x, y) => x + y) === k.star && k.star === 65 && near(qa[2], 65), '★ = 65');
ok(txt.includes('★＝360°－120°－90°－85°＝65°') && txt.includes('180°＋180°＝360°'), 'step text: quad sums');
// 三個正三角形：每個角 60°，中間 B1 三個角＝平角，梯形 360 不是 540
const { B0, B1, B2, T0, T1 } = k.tilePts, tris = [[B0, B1, T0], [T0, B1, T1], [B1, B2, T1]];
ok(tris.every(t => polyAngles(t).every(a => near(a, 60))), 'three equilateral triangles');
ok(near(angle(B1, B0, T0) + angle(B1, T0, T1) + angle(B1, T1, B2), 180) && near(angle(B1, B0, B2), 180), 'middle three angles make a straight angle');
const t3 = tiles(3);
ok(t3.raw === k.wrong && k.wrong === 540 && t3.total === k.right && k.right === 360 && t3.corners === 4 && t3.flats === 1, 'tiles(3): 540 → 360');
ok(near(polyAngles([B0, B2, T1, T0]).reduce((x, y) => x + y), 360), 'trapezoid drawn angles sum 360');
ok(txt.includes('540°－180°＝360°') && txt.includes('平角'), 'step text 540-180=360');

// 練習
S.prac.forEach((P, i) => {
  const c = P.calc, t = `prac ${i + 1}`;
  if (c.f === 'tri-ang' || c.f === 'quad') {
    const tot = c.f === 'quad' ? 360 : 180;
    let x = 0; while (x < tot && x + c.known.reduce((p, q) => p + q, 0) !== tot) x++;   // 從 0 度一個一個試
    ok(P.ans[0] === x && x > 0 && x < 180, `${t}: ${x}°`);
    ok(c.known.every(n => P.q.includes(n + '°')) && P.why.includes('＝' + x), t + ' text matches calc');
    ok(!(c.f === 'quad' && c.known.join() === '120,90,85') && !(c.f === 'quad' && x === 65) && !(c.f === 'tri-ang' && c.known.join() === '48,67'), t + ' numbers differ from the exam');
  } else if (c.f === 'tiles') {
    const r = tiles(c.n);
    ok(P.opts[P.ans] === r.total + '°' && P.opts.includes(r.raw + '°'), `${t}: ${c.n} tiles → ${r.total}° (not ${r.raw}°)`);
    ok(c.n !== 3 && r.corners === 4, t + ' differs from the exam and is a quadrilateral');
  } else ok(false, t + ' unknown calc ' + c.f);
});

console.log(`anim-E: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
