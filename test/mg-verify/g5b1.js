// 五下 單元一 體積：驗算（跟出題用不同算法：數積木用三層迴圈一個一個數、單位換算先換成公尺再算）
const { R, mul, sub, add } = require('../../math/grade.js').H;
const count = (l, w, h) => { let n = 0; for (let i = 0; i < l; i++) for (let j = 0; j < w; j++) for (let k = 0; k < h; k++) n++; return n; };
module.exports = {
  cube: v => count(v.a, v.b, v.c),
  box: v => count(v.l, v.w, v.h),
  cubic: v => count(v.s, v.s, v.s),
  high: v => { for (let h = 1; h < 1000; h++) if (count(v.l, v.w, h) === v.v) return h; },
  // 1 公分＝1/100 公尺 → 1 立方公分＝(1/100)³ 立方公尺
  m3: v => v.dir === 'toM' ? mul(v.cm, R(1, 100 * 100 * 100)) : mul(R(v.m, 10), 1000000),
  big: v => v.boxes.reduce((b, x) => (count(x.l, x.w, x.h) > count(b.l, b.w, b.h) ? x : b)),
  all: v => v.cand.filter(b => count(b.l, b.w, b.h) === v.V),
  cut: v => count(v.L - v.a, v.W, v.H) + count(v.a, v.W, v.H - v.c),   // 另一種切法：不切的那段＋被切那段剩下的
  life: v => mul(mul(mul(R(v.lm), R(v.wcm, 100)), R(v.hcm, 100)), 1000000),   // 先全部換成公尺算立方公尺，再換回立方公分
  how: v => `${v.l}×${v.w}×${v.h}`,   // 概念題：長×寬×高（值另由 box 驗）
  fit: v => v.cand.filter(p => count(p.l, p.w, v.h) === v.V),
  step: v => add(count(v.l2, v.w, v.h1 + v.h2), count(v.l1 - v.l2, v.w, v.h1))   // 直的切法：上下一整條＋旁邊矮的
};
