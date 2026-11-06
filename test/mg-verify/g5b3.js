// 五下 單元三 容積：驗算（跟出題用不同算法：容積一層一層加、厚度用「整塊外部的小方格裡，哪些不在壁上」一格一格數、單位一律先換成毫升／公釐再算）
const { R, add, sub, mul, div, eq } = require('../../math/grade.js').H;
const layers = (l, w, h) => { let s = 0; for (let k = 0; k < h; k++) s += l * w; return s; };          // 一層 l×w，疊 h 層
// 外部 L×W×H 的方格裡，不在壁上的格子（lid＝上面也有一片）
const hollow = (L, W, H, t, lid) => { let n = 0; for (let x = 0; x < L; x++) for (let y = 0; y < W; y++) for (let z = 0; z < H; z++) if (x >= t && x < L - t && y >= t && y < W - t && z >= t && (!lid || z < H - t)) n++; return n; };
const ML = 1000;   // 1 公升＝1000 毫升，1 毫升＝1 立方公分
const cm2mm = x => mul(x, 10);   // 公分 → 公釐；1 立方公分＝1000 立方公釐
module.exports = {
  inner: v => layers(v.l, v.w, v.h),
  unit: v => [mul(v.x, ML), div(v.x, ML), R(v.x), [Math.floor(v.x / ML), v.x - Math.floor(v.x / ML) * ML]][v.t],
  toL: v => div(layers(v.l, v.w, v.h), ML),
  thick: v => hollow(v.L, v.W, v.H, v.t, false),
  // 上升那層水換成立方公釐算，再換回立方公分
  water: v => div(mul(mul(cm2mm(v.l), cm2mm(v.w)), cm2mm(sub(v.b, v.a))), 1000),
  fill: v => (v.ml ? layers(v.l, v.w, v.x) : div(layers(v.l, v.w, v.x), ML)),
  same: (v, q) => (v.c != null ? div(v.c, ML) : mul(v.x, ML)),
  thickL: v => div(hollow(v.L, v.W, v.H, v.t, v.lid), ML),
  balls: v => { const tot = layers(v.l, v.w, v.rise); for (let e = 1; e <= tot; e++) if (e * v.k === tot) return e; },
  rise: v => div(add(layers(v.l, v.w, v.a), v.V), v.l * v.w),   // 水＋鐵塊的總體積 ÷ 底面積
  fit: (v, q) => q.ov.filter(b => div(layers(b.l, b.w, b.h), ML)[0] >= v.X * div(layers(b.l, b.w, b.h), ML)[1]),
  pour: v => layers(v.l, v.w, v.h) - v.cup * v.k,
  mlmc: v => div(mul(v.ml, R(1, ML)), R(1, ML)),   // 毫升 → 公升 → 立方公分（1 公升＝1000 立方公分）
  whichmc: v => hollow(v.l + 2, v.w + 2, v.h + 1, 1, false)
};
