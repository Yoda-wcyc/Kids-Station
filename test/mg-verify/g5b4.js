// 五下 單元四 小數的乘法：驗算（跟出題用不同算法：拿掉小數點當整數乘，再數位數、用字串把小數點點回去，最後才轉成有理數）
const { R, fromDec, sub, add, cmp } = require('../../math/grade.js').H;
const split = s => { s = String(s); const i = s.indexOf('.'); return i < 0 ? [parseInt(s, 10), 0] : [parseInt(s.replace('.', ''), 10), s.length - i - 1]; };
// 字串小數相乘 → 字串（直式：整數乘完，從右邊數回位數點小數點）
const mulS = (a, b) => {
  const [x, p] = split(a), [y, q] = split(b), k = p + q;
  let s = String(x * y); while (s.length <= k) s = '0' + s;
  return k ? s.slice(0, s.length - k) + '.' + s.slice(s.length - k) : s;
};
const val = s => fromDec(s);
// 整數 n 從右邊數 p 位點小數點（字串）
const pt = (n, p) => { let s = String(n); while (s.length <= p) s = '0' + s; return p ? s.slice(0, s.length - p) + '.' + s.slice(s.length - p) : s; };
const placesOf = s => { s = String(s).replace(/0+$/, '').replace(/\.$/, ''); const i = s.indexOf('.'); return i < 0 ? 0 : s.length - i - 1; };
const dS = r => { r = R(r); let s = ''; const k = 12; const n = r[0] * Math.pow(10, k) / r[1]; s = String(n); while (s.length <= k) s = '0' + s; return (s.slice(0, s.length - k) + '.' + s.slice(s.length - k)).replace(/0+$/, '').replace(/\.$/, ''); };   // 有理數 → 小數字串（先放大 10^12 再去掉末尾的 0；出題的值都是有限小數）
module.exports = {
  d3int: v => val(mulS(v.a, v.k)),
  intdec: v => val(mulS(v.n, v.b)),
  decdec: v => val(mulS(v.a, v.b)),
  point: v => val(mulS(pt(v.a, v.p), pt(v.b, v.q))),
  places: v => placesOf(mulS(v.a, v.b)),
  rel: (v, q) => q.ov.filter(m => cmp(val(mulS(v.A, dS(m))), val(v.A)) === (v.up ? 1 : -1))[0],
  relset: (v, q) => q.ov.filter(m => cmp(val(mulS(v.A, dS(m))), val(v.A)) === (v.small ? -1 : 1)),
  price: v => val(mulS(v.p, v.w)),
  many: v => val(mulS(v.a, v.k)),
  area: v => val(mulS(v.l, v.w)),
  two: v => add(val(mulS(v.p1, v.w1)), val(mulS(v.p2, v.w2))),
  times: v => (v.t === 'h' ? sub(val(mulS(v.a, v.m)), val(v.a)) : val(mulS(v.a, sub1(v.m)))),   // 剩下＝全長×(1－用掉的倍數)
  pick: v => val(mulS(v.a, v.b)),
  overT: (v, q) => q.ov.filter(e => cmp(val(mulS(dS(e.a), dS(e.b))), v.T) > 0)
};
// 1－m（m 是小數字串）：換成 10^p 個小格再扣
function sub1(m) { const [x, p] = split(m); const t = Math.pow(10, p) - x; return p ? '0.' + String(t).padStart(p, '0') : String(t); }
