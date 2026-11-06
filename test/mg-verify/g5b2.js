// 五下 單元二 分數的計算：驗算（跟出題用不同算法：整數倍用一個一個加、分數×分數改成「÷倒數」、帶分數用分配律拆開乘、平分用「找一個數乘回去等於原數」）
const { R, add, sub, mul, div, cmp, eq } = require('../../math/grade.js').H;
const rep = (a, f) => { let s = R(0); for (let i = 0; i < a; i++) s = add(s, f); return s; };   // a 個 f 相加
const times = (x, y) => div(x, div(1, y));                                                    // x×y＝x÷(1/y)
const whole = x => Math.floor(R(x)[0] / R(x)[1]);
// 帶分數拆成「整數＋真分數」再用分配律：(a＋b)×y＝a×y＋b×y
const dist = (x, y) => add(rep(whole(x), y), times(sub(x, whole(x)), y));
// 平分：找 q 讓 q 個 k 份加起來＝tot（q＝tot 的分母放大 k 倍後一個一個試分子）
const share = (tot, k) => { tot = R(tot); const den = tot[1] * k; for (let n = 1; n <= tot[0] * k; n++) if (eq(rep(k, R(n, den)), tot)) return R(n, den); };
module.exports = {
  intfrac: v => rep(v.a, v.f),
  fracfrac: v => times(v.x, v.y),
  divint: v => share(v.f, v.k),
  mixed: v => dist(v.x, v.y),
  bigger: (v, q) => q.ov.filter(m => cmp(dist(v.A, m), v.A) === (v.up ? 1 : -1))[0],
  relset: (v, q) => q.ov.filter(m => cmp(dist(v.A, m), v.A) === (v.small ? -1 : 1)),
  life: v => (v.t === 0 ? rep(v.a, v.b) : dist(v.a, v.b)),
  share: v => share(v.tot, v.k),
  remain: v => share(sub(v.L, dist(v.L, v.f)), v.k),
  area: v => dist(v.l, v.w),
  cost: v => v.give - (whole(v.w) * v.p + dist(sub(v.w, whole(v.w)), v.p)[0]),
  pick: v => (v.dv ? share(v.f, v.a) : rep(v.a, v.f)),
  overT: (v, q) => q.ov.filter(e => cmp(dist(e.x, e.y), v.T) > 0)
};
