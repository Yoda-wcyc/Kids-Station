// 六上 單元七 圓面積與扇形面積：驗算（跟出題用不同算法：用「百分之一平方公分」的整數累加、扇形一度一度加、反過來暴力找半徑）
const { R, add, sub, div, mul, eq, cmp, fromDec } = require('../../math/grade.js').H;
// 圓面積：半徑 x（可為有理數）→ 314×x×x 個 1/100
const area = x => { x = R(x); let s = 0; for (let i = 0; i < x[0] * x[0]; i++) s += 314; return R(s, 100 * x[1] * x[1]); };
const secA = (rr, deg) => { const one = div(area(rr), 360); let s = R(0); for (let i = 0; i < deg; i++) s = add(s, one); return s; };
const shapeA = o => (o.k === 'r' ? area(o.x) : o.k === 'd' ? area(R(o.x, 2)) : o.k === 'semi' ? secA(o.x, 180) : R(o.x * o.x));
const evalX = s => s.split('×').reduce((a, t) => mul(a, fromDec(t)), R(1));
// 挖掉的部分：一律換成「幾個 1 度的扇形」再數
const cutA = c => (c.k === 'q' ? secA(c.x, 90) : c.k === 'in' ? secA(c.x, 360) : c.k === 'q4' ? secA(c.x, 90 * 4) : c.k === 'semi' ? secA(R(c.x, 2), 180) : secA(c.x, 90));
module.exports = {
  fml: (v, q) => q.ov.filter(s => eq(evalX(s), area(v.m)))[0],   // 每個選項真的算出來，跟圓面積比
  same: v => v.cand.filter(c => eq(sub(v.a * v.a, cutA(c)), v.Y)),
  ar: v => area(v.r),
  ad: v => area(R(v.d, 2)),
  rect: v => [div(mul(R(314, 100), v.r + v.r), 2), v.r],   // 圓周長先算，再取一半
  inv: v => { for (let x = 1; x < 200; x++) if (eq(area(x), v.a)) return v.askD ? x + x : x; },
  sec: v => secA(v.r, v.deg),
  big: v => v.os.reduce((b, o) => (cmp(shapeA(o), shapeA(b)) * (v.big ? 1 : -1) > 0 ? o : b)),
  over: v => v.degs.filter(g => cmp(secA(v.r, g), v.T) > 0),
  cut: v => {
    if (v.kind === 'a') return mul(v.a * v.a, R(215, 1000));            // 正方形的 1－0.785
    if (v.kind === 'b') return mul(v.r * v.r, R(86, 100));              // 4－3.14＝0.86 個「半徑平方」
    return add(R(2 * v.r * v.h), mul(v.r * v.r, R(157, 100)));          // 半圓＝1.57 個「半徑平方」
  },
  ring: v => mul(v.R * v.R - v.r * v.r, R(314, 100)),
  goat: v => secA(v.L, v.deg)
};
