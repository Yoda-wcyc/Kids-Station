// 六上 單元五 比與比值：驗算（跟出題用不同算法：交叉相乘判斷相等、從 1 開始試 □、一個一個試最小的公因數去約、一份一份試）
const { R } = require('../../math/grade.js').H;
const eqR = (a, b, c, d) => a * d === b * c;   // a：b＝c：d
const reduce = (a, b) => { for (let k = 2; k <= Math.min(a, b); k++) while (a % k === 0 && b % k === 0) { a /= k; b /= k; } return [a, b]; };
const big = s => { const [i, f = ''] = String(s).split('.'); return [+(i + f), Math.pow(10, f.length)]; };
const unit = (sum, tot) => { for (let k = 1; k <= tot; k++) if (k * sum === tot) return k; };   // 1 份是多少（一個一個試）
module.exports = {
  val: v => [v.a, v.b],   // 比值＝a/b（R 會約分比對）
  eqset: v => v.cand.filter(s => { const [p, q] = s.split('：').map(Number); return eqR(p, q, v.x, v.y); }),
  simp: v => reduce(v.a, v.b),
  simpd: v => {
    if (v.mode === 'dec') { const [a, p] = big(v.A), [b, q] = big(v.B), P = Math.max(p, q); return reduce(a * P / p, b * P / q); }
    const [p, q, s, t] = v.f; return reduce(p * t, s * q);   // 兩邊都乘 q×t（不一定最小公倍數），再約
  },
  miss: v => {
    const [l, rr] = v.s.split('＝'), [a, b] = l.split('：'), [c, d] = rr.split('：');
    for (let x = 1; x <= 2000; x++) { const n = s => (s === '□' ? x : +s); if (eqR(n(a), n(b), n(c), n(d))) return x; }
  },
  valmc: (v, q) => q.ov.find(s => { const [a, b] = s.split('：').map(Number); return eqR(a, b, v.p, v.q); }),
  word: v => { const k = unit(v.a, v.X); return v.b * k; },
  share: v => { const k = unit(v.a + v.b, v.tot); return (v.who ? v.b : v.a) * k; },
  gap: v => { for (let k = 1; ; k++) if ((v.a - v.b) * k === v.D) return (v.a + v.b) * k; },
  sharemc: (v, q) => q.ov.find(o => o.x + o.y === v.tot && eqR(o.x, o.y, v.a, v.b)),   // 合起來是全部、而且比相等
  rect: v => { for (let k = 1; k <= v.P; k++) if (2 * (v.x + v.y) * k === v.P) return v.x * k * v.y * k; }
};
