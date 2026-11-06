// 六下 單元四 基準量與比較量：驗算（跟出題用不同算法：先求「一份」再一份一份累加、從 1 往上試基準量、從句子裡找「比」後面／「的」前面、小數字串一步一步乘）
const { R, add, sub, eq, fromDec, mul, div } = require('../../math/grade.js').H;
const times = (x, k) => { let t = R(0); for (let i = 0; i < k; i++) t = add(t, x); return t; };
const part = (X, n, d) => times(R(X, d), n);                                   // X 平分成 d 份，取 n 份
const findBase = (c, n, d) => { for (let B = 1; B <= 100000; B++) if (eq(part(B, n, d), c)) return B; };
const pctStep = (B, x, up) => { const one = R(B, 100); let t = R(B); for (let i = 0; i < x; i++) t = up ? add(t, one) : sub(t, one); return t; };
const findPct = (diff, base) => { for (let k = 0; k <= 1000; k++) if (eq(times(R(base, 100), k), diff)) return k; };
const pad2 = n => String(n).padStart(2, '0');
function who(v) {
  const s = v.s, i = s.indexOf('比');
  if (i >= 0) { const rest = s.slice(i + 1); return v.ask === 'base' ? rest.slice(0, rest.search(/[多少貴]/)) : s.slice(0, i); }
  const k = s.indexOf('是'); return v.ask === 'base' ? s.slice(k + 1, s.lastIndexOf('的')) : s.slice(0, k);
}
module.exports = {
  cmpQ: v => part(v.X, v.n, v.d),
  baseQ: v => findBase(v.c, v.n, v.d),
  rateQ: v => findPct(v.c, v.B),
  who: v => who(v),
  more: v => pctStep(v.B, v.x, v.up),
  cls: v => { if (v.kind === 1) return findBase(v.c, v.n, v.d); let g = 0; while (g * v.d < v.T * v.n) g++; return v.T - g; },
  save: v => findBase(v.c, v.n, v.d),
  trueSet: (v, q) => q.ov.filter(o => eq(times(R(v.B, 100), o.p), o.c)),
  less: v => { for (let B = 1; B <= 100000; B++) if (eq(pctStep(B, v.x, v.up), v.c)) return B; },
  diffPct: v => findPct(Math.abs(v.x1 - v.x2), v.up ? v.x2 : v.x1),
  chain: v => v.kind === 0 ? mul(mul(v.X, fromDec('1.' + v.p)), fromDec('0.' + v.z)) : mul(mul(v.X, fromDec('1.' + pad2(v.p))), fromDec('0.' + pad2(v.q))),
  // 先暴力找出基準量，再把每個選項的算式真的算一遍，挑算得出它的那個
  formula: (v, q) => { let B = 1; while (!eq(pctStep(B, v.x, v.up), v.c)) B++; return q.ov.find(o => { const k = o.sg === '＋' ? add(1, R(v.x, 100)) : sub(1, R(v.x, 100)); return eq(o.op === '÷' ? div(v.c, k) : mul(v.c, k), B); }); }
};
