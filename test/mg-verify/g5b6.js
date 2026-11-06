// 五下 單元六 整數、小數除以整數：驗算（跟出題用不同算法：一位一位做直式除法、小數先放大成整數再除、比大小用交叉相乘）
const { R, add, fromDec } = require('../../math/grade.js').H;
// 直式除法：a÷b（整數），最多除到小數第 max 位；回 {ip, ds: 小數各位, rem}
function ldiv(a, b, max, stop) {
  let ip = 0; while ((ip + 1) * b <= a) ip++;
  let rem = a - ip * b; const ds = [];
  while (ds.length < max && !(stop && !rem)) { rem *= 10; let d = 0; while ((d + 1) * b <= rem) d++; ds.push(d); rem -= d * b; }
  return { ip, ds, rem };
}
const exact = (a, b) => { const o = ldiv(a, b, 40, true); return o.rem ? null : fromDec(o.ip + '.' + (o.ds.join('') || '0')); };
// 四捨五入到小數第 k 位：除到 k+1 位，看最後一位
const round = (a, b, k) => { const o = ldiv(a, b, k + 1), keep = +(String(o.ip) + o.ds.slice(0, k).join('')); return R(keep + (o.ds[k] >= 5 ? 1 : 0), Math.pow(10, k)); };
// 小數字串放大成整數：'8.52' → [852, 100]
const big = s => { const [i, f = ''] = s.split('.'); return [+(i + f), Math.pow(10, f.length)]; };
const divBig = ([x, p], n) => { const q = exact(x, n); return R(q[0], q[1] * p); };
const decDiv = (s, n) => divBig(big(s), n);
module.exports = {
  intdiv: v => exact(v.a, v.b),
  decdiv: v => decDiv(v.x, v.b),
  f2d: v => exact(v.n, v.d),
  d2f: v => big(v.s),
  round: v => round(v.a, v.b, v.k),
  f2dr: v => round(v.a, v.b, v.k),
  life: v => decDiv(v.X, v.n),
  cmp: v => v.items.reduce((m, o) => ((o.n * m.d > m.n * o.d) === v.big ? o : m)),
  d2fm: v => big(v.s),
  fset: v => v.cand.filter(([n, d]) => !ldiv(n, d, 40, true).rem),
  multi: v => {
    if (v.mode === 'oil') { const [x, px] = big(v.X), [y, py] = big(v.Y), p = Math.max(px, py); return divBig([x * (p / px) - y * (p / py), p], v.n); }
    const per = decDiv(v.D, v.n); let left = R(0); for (let i = v.k; i < v.n; i++) left = add(left, per); return left;
  },
  rlife: v => round(v.a, v.b, v.k),
  f2dmc: v => exact(v.n, v.d)
};
