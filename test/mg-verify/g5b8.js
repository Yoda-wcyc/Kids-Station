// 五下 單元八 比率與百分率：驗算（跟出題用不同算法：逐一試千分位／百分位、移小數點的字串做法、從中文字讀出幾折幾成、反推原價）
const { R, add, mul, sub, eq, cmp, fromDec } = require('../../math/grade.js').H;
const CN = '零一二三四五六七八九';
const digits = s => [...s].map(c => CN.indexOf(c)).filter(x => x >= 0);
const pctOfWord = s => { const d = digits(s); return d[0] * 10 + (d[1] || 0); };   // 七五 → 75、三成五 → 35
const zheRate = s => fromDec('0.' + digits(s).join(''));                           // 七五 → 0.75
const movePoint = p => { const s = String(p).padStart(3, '0'); return fromDec(s.slice(0, -2) + '.' + s.slice(-2)); };   // 35 → 0.35
const findPct = x => { for (let k = 0; k <= 1000; k++) if (eq(R(k, 100), x)) return k; };
const val = o => o.f === 'dec' ? fromDec(o.s) : o.f === 'pct' ? movePoint(o.p) : o.f === 'frac' ? R(o.n, o.d) : R(pctOfWord(o.s), 100);
module.exports = {
  rate: v => { for (let k = 0; k <= 1000; k++) if (k * v.T === v.p * 1000) return R(k, 1000); },
  toPct: v => findPct(v.s ? fromDec(v.s) : R(v.n, v.d)),
  fromPct: v => movePoint(v.p),
  cheng: v => pctOfWord(v.s),
  price: v => mul(v.price, zheRate(v.s)),
  pctOf: v => { let n = 0; for (let c = 0; c < v.T / 100; c++) n += v.p; return n; },   // 每 100 個裡有 p 個
  cmpRate: (v, q) => q.ov.reduce((b, o) => (cmp(val(o), val(b)) === (v.big ? 1 : -1) ? o : b)),
  findRate: v => { for (let k = 0; k <= 100; k++) if (k * v.T === v.p * 100) return k; },
  same: (v, q) => q.ov.filter(o => eq(val(o), R(v.k, 100))),
  orig: v => { for (let x = 1; x <= 10000; x++) if (eq(mul(x, zheRate(v.s)), v.sale)) return x; },
  change: v => { for (let c = 0; c <= 100; c++) if (v.B * (100 + (v.up ? c : -c)) === v.N * 100) return c; },
  zheMc: v => '0.' + digits(v.s).join(''),
  bestBuy: v => v.stores.reduce((b, x) => (cmp(mul(x.P, zheRate(x.s)), mul(b.P, zheRate(b.s))) < 0 ? x : b)).name,
  twoStep: v => { const one = mul(v.P, zheRate(v.s)); if (v.kind === 0) return sub(one, v.m); let t = R(0); for (let i = 0; i < v.n; i++) t = add(t, one); return t; }
};
