// 六下 單元三 柱體體積與表面積：驗算（圓面積用「半圓周長×半徑」、梯形拆成長方形＋三角形、體積一層一層疊、表面積照展開圖一片一片加、求高與半徑用暴力試）
const { R, add, sub, mul, div, eq, cmp } = require('../../math/grade.js').H;
const PI = R(314, 100);
const grid = (a, b) => { let n = 0; for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) n++; return n; };
const circle = r => mul(div(mul(PI, 2 * r), 2), r);                  // 圓切成很多小片拼成長方形：長＝半圓周、寬＝半徑
const ring = d => mul(PI, d);                                         // 圓周長＝直徑×3.14
const layers = (A, h) => { let s = R(0); for (let k = 0; k < h; k++) s = add(s, A); return s; };   // 底面一層一層往上疊
const triA = (a, b) => div(grid(a, b), 2);
const trapA = (u, w, t) => add(grid(u, t), div(grid(w - u, t), 2));   // 中間長方形＋兩邊的三角形
const volOf = s => (s.k === 'cyl' ? layers(circle(s.r), s.h) : s.k === 'tri' ? layers(triA(s.a, s.b), s.h) : layers(grid(s.l, s.w), s.h));
const sum = xs => xs.reduce((s, x) => add(s, x), R(0));
module.exports = {
  tri: v => layers(triA(v.a, v.b), v.h),
  quad: v => layers(v.kind === 'trap' ? trapA(v.u, v.w, v.t) : grid(v.p, v.t), v.h),
  cyl: v => layers(circle(v.r), v.h),
  base: v => layers(v.S, v.h),
  back: v => { const A = v.kind === 'cyl' ? circle(v.r) : triA(v.a, v.b); for (let h = 1; h <= 200; h++) if (eq(layers(A, h), v.V)) return h; },
  hollow: v => sub(layers(circle(v.R), v.h), layers(circle(v.r), v.h)),
  combo: v => add(layers(grid(v.w, v.a), v.L), layers(triA(v.w, v.t), v.L)),
  big: v => v.shapes.reduce((m, s) => (cmp(volOf(s), volOf(m)) * (v.big ? 1 : -1) > 0 ? s : m)),
  area: v => (v.kind === 'cyl' ? circle(v.r) : triA(v.a, v.b)),
  facts: v => {
    const q = { len: ring(2 * v.r), wid: R(v.h), base: circle(v.r), side: mul(ring(2 * v.r), v.h), sa: sum([circle(v.r), circle(v.r), mul(ring(2 * v.r), v.h)]) };
    return v.cand.filter(s => eq(q[s.k], s.n));
  },
  which: v => v.cand.filter(s => eq(volOf(s), v.Vt)),
  prsa: v => sum([triA(v.a, v.b), triA(v.a, v.b), grid(v.a, v.h), grid(v.b, v.h), grid(v.c, v.h)]),
  cylsa: v => sum([circle(v.r), circle(v.r), mul(ring(2 * v.r), v.h)]),
  side: v => {
    if (v.k === 0) return ring(2 * v.r);
    if (v.k === 1) { for (let r = 1; r <= 50; r++) if (eq(ring(2 * r), v.L)) return r; }
    return mul(ring(v.d), v.h);
  },
  can: v => (v.k === 'label' ? mul(ring(v.d), v.h) : sum([circle(v.r), mul(ring(2 * v.r), v.h)]))
};
