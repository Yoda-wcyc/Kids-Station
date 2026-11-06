// 六上 單元二 分數除法：驗算（跟出題用不同算法：通分後分子相除、一份一份減數份數、試除找最簡、交叉相乘比大小）
const { R, sub, cmp } = require('../../math/grade.js').H;
// 通分後分子相除：a/b ÷ c/d → (a×L/b) ÷ (c×L/d)
const tong = (x, y) => { x = R(x); y = R(y); let L = x[1]; while (L % y[1]) L += x[1]; return R(x[0] * (L / x[1]), y[0] * (L / y[1])); };
const coprimeB = (n, d) => { for (let k = 2; k <= Math.min(n, d); k++) if (n % k === 0 && d % k === 0) return false; return true; };
const count = (X, p) => { let k = 0; X = R(X); while (cmp(X, 0) > 0) { X = sub(X, p); k++; } return cmp(X, 0) === 0 ? k : null; };   // X 裡剛好有幾個 p
const lt1 = d => { d = R(d); return d[0] < d[1]; };
module.exports = {
  simp: v => { let n = v.n, d = v.d; for (let k = 2; k <= n; k++) while (n % k === 0 && d % k === 0) { n /= k; d /= k; } return [n, d]; },
  isimp: v => v.cand.filter(s => { const [n, d] = s.split('/').map(Number); return coprimeB(n, d); }),
  same: v => tong(R(v.a, v.d), R(v.b, v.d)),
  diff: v => tong(v.a, v.b),
  recip: (v, q) => q.ov.find(o => { const x = R(o[0] * o[2], o[1] * o[3]), y = tong(v.a, v.c); return x[0] === y[0] && x[1] === y[1]; }),
  inclu: v => count(v.X, v.p),
  equal: v => tong(v.c, v.a),
  bigger: (v, q) => q.ov.find(d => lt1(d) === v.up),
  qset: v => v.cand.filter(o => cmp(tong(o.A, o.D), o.A) > 0),
  multi: v => count(sub(v.X, v.Y), v.p),
  area: v => tong(v.A, v.w)
};
