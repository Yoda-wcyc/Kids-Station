// 六上 單元九 放大圖、縮圖與比例尺：驗算（跟出題用不同算法：一格一格數方格、暴力找倍數與比例尺、先換成公分再一段一段累加）
const { R, mul, div, add, eq, cmp } = require('../../math/grade.js').H;
const cells = (w, h) => { let n = 0; for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) n++; return n; };
module.exports = {
  // 圖上距離＝實際公尺÷每公分代表幾公尺（先把 1：N 換成公尺）
  long: v => v.os.reduce((b, o) => { const len = x => div(v.km * 1000, x.k === 'N' ? R(x.N, 100) : R(x.m)); return cmp(len(o), len(b)) * (v.long ? 1 : -1) > 0 ? o : b; }),
  side: v => [div(mul(v.a, v.k[0]), v.k[1]), div(mul(v.b, v.k[0]), v.k[1])],
  ang: v => v.x,   // 對應角相等
  grid: v => (v.byCell ? cells(v.w * v.k, v.h * v.k) : cells(v.w * v.k, v.h * v.k) / cells(v.w, v.h)),
  map: v => { let cm = 0; for (let i = 0; i < v.x; i++) cm += v.N; return R(cm, 100); },
  which: v => v.cand.filter(c => eq(div(c.w, v.a), div(c.h, v.b))),
  other: v => div(mul(v.c, v.b), v.a),   // 先乘再除
  area: v => { const k = div(v.k[0], v.k[1]); return mul(v.A, mul(k, k)); },   // 倍數先平方
  rev: v => div(mul(v.real, v.km ? 100000 : 100), v.N),
  ruler: v => { let s = R(0), cm = R(0); while (cmp(cm, v.x) < 0) { cm = add(cm, R(1, 2)); s = add(s, R(v.u, 2)); } return s; },
  toN: v => (v.km ? v.u * 1000 * 100 : v.u * 100),
  findN: v => { const cm = mul(v.y, 100000); for (const N of [1000, 2000, 5000, 10000, 20000, 25000, 50000, 100000, 200000, 500000]) if (eq(mul(v.x, N), cm)) return N; },
  trip: v => { const m = div(mul(v.x, v.N), 100); let t = 0, left = m; while (cmp(left, 0) > 0) { left = add(left, -v.s); t++; } return t; }
};
