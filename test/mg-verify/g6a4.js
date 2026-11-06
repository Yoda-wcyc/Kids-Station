// 六上 單元四 小數除法：驗算（跟出題用不同算法：兩個數先放大成同樣倍數的整數，再一位一位做直式除法、一次一次減）
const { R, fromDec } = require('../../math/grade.js').H;
const big = s => { const [i, f = ''] = String(s).split('.'); return [+(i + f), Math.pow(10, f.length)]; };   // '2.88' → [288, 100]
const same = (a, b) => { const [x, p] = big(a), [y, q] = big(b), P = Math.max(p, q); return [x * (P / p), y * (P / q)]; };   // 放大成同樣倍數的整數
// 直式除法 X÷Y（整數），最多除到小數第 max 位
function ldiv(X, Y, max, stop) {
  let ip = 0; while ((ip + 1) * Y <= X) ip++;
  let rem = X - ip * Y; const ds = [];
  while (ds.length < max && !(stop && !rem)) { rem *= 10; let d = 0; while ((d + 1) * Y <= rem) d++; ds.push(d); rem -= d * Y; }
  return { ip, ds, rem };
}
const exact = (a, b) => { const [X, Y] = same(a, b), o = ldiv(X, Y, 30, true); return o.rem ? null : fromDec(o.ip + '.' + (o.ds.join('') || '0')); };
const round = (a, b, k) => { const [X, Y] = same(a, b), o = ldiv(X, Y, k + 1), keep = +(String(o.ip) + o.ds.slice(0, k).join('')); return R(keep + (o.ds[k] >= 5 ? 1 : 0), Math.pow(10, k)); };
const subs = (a, b) => { let [X, Y] = same(a, b), n = 0; while (X >= Y) { X -= Y; n++; } return { n, X }; };   // 一次一次減
const lt1 = s => big(s)[0] < big(s)[1];
module.exports = {
  intdec: v => exact(v.a, v.b),
  decdec: v => exact(v.a, v.b),
  shift: (v, q) => { const t = exact(v.a, v.b); return q.ov.find(s => { const [x, y] = s.split('÷'), u = exact(x, y); return u && u[0] === t[0] && u[1] === t[1]; }); },
  rem: v => { const o = subs(v.X, v.b), P = Math.max(big(v.X)[1], big(v.b)[1]); return [o.n, R(o.X, P)]; },
  round: v => round(v.a, v.b, v.k),
  life: v => exact(v.X, v.b),
  cmp: (v, q) => q.ov.find(d => lt1(d) === v.up),
  qset: v => v.cand.filter(o => lt1(o.d)),
  ceil: v => { const o = subs(v.X, v.b); return o.n + (v.up && o.X > 0 ? 1 : 0); },
  multi: v => {
    if (v.mode === 'rest') { const [x, y] = same(v.X, v.Y), P = Math.max(big(v.X)[1], big(v.Y)[1]), o = subs(fromDecStr(x - y, P), v.b); return o.X ? null : o.n; }
    const per = exact(v.X, v.a), c = big(v.c); return R(per[0] * c[0], per[1] * c[1]);
  }
};
function fromDecStr(n, P) { const s = String(n).padStart(String(P).length, '0'); const k = String(P).length - 1; return k ? s.slice(0, -k) + '.' + s.slice(-k) : s; }
