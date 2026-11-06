// 六下 單元二 速率的應用：驗算（不用「相加、相減」公式：一分鐘一分鐘／一小時一小時模擬兩人的位置；船速水速用暴力試；來回平均用調和平均另算）
const { R, mul, div } = require('../../math/grade.js').H;
// 兩人起點 p1、p2，每單位時間位移 s1、s2（往右正、往左負）；第幾個單位時間碰在一起
const until = (p1, s1, p2, s2) => { for (let t = 1; t <= 100000; t++) { p1 += s1; p2 += s2; if (p1 === p2) return t; } throw new Error('never meet'); };
const setup = (k, a, b, X) => ({ meet: [0, a, X, -b], away: [0, -a, 0, b], chase: [0, a, X, b], ahead: [0, a, 0, b], bstill: [0, a, X, 0], astill: [0, 0, 0, b] })[k];
const change = (k, a, b, X) => { const [p1, s1, p2, s2] = setup(k, a, b, X), d0 = Math.abs(p1 - p2), d1 = Math.abs(p1 + s1 - p2 - s2); return { ch: d1 < d0 ? '縮短' : '拉開', m: Math.abs(d1 - d0) }; };
// 整數算式求值（* 乘、: 除、括號）
function calc(e) {
  let i = 0;
  const atom = () => { if (e[i] === '(') { i++; const x = sum(); i++; return x; } const m = /^\d+/.exec(e.slice(i)); i += m[0].length; return R(+m[0]); };
  const prod = () => { let x = atom(); while (e[i] === '*' || e[i] === ':') { const op = e[i++], y = atom(); x = op === '*' ? mul(x, y) : div(x, y); } return x; };
  const sum = () => { let x = prod(); while (e[i] === '+' || e[i] === '-') { const op = e[i++], y = prod(); x = op === '+' ? R(x[0] * y[1] + y[0] * x[1], x[1] * y[1]) : R(x[0] * y[1] - y[0] * x[1], x[1] * y[1]); } return x; };
  return sum();
}
// 流水：一小時一小時模擬（船自己划＋河水推）
const truth = (s, v, w) => {
  if (s.k === 'down') { let p = 0; p += v; p += w; return p === s.n; }
  if (s.k === 'up') { let p = 0; p += v; p -= w; return p === s.n; }
  if (s.k === 'downD') { let p = 0; for (let h = 0; h < s.t; h++) { p += v; p += w; } return p === s.n; }
  let p = 0, h = 0; while (p < s.D) { p += v; p -= w; h++; } return p === s.D && h === s.n;
};
module.exports = {
  expr: (v, q) => { const t = v.chase ? until(0, v.a, v.D, v.b) : until(0, v.a, v.D, -v.b); return q.ov.find(e => { const x = calc(e); return x[1] === 1 && x[0] === t; }); },
  claim: v => v.cand.filter(s => truth(s, v.v, v.w)),
  avg: v => { let dist = 0, time = 0; v.segs.forEach(([sp, t]) => { for (let k = 0; k < t; k++) { dist += sp; time++; } }); return R(dist, time); },
  meet: v => until(0, v.a, v.D, -v.b),
  chase: v => until(0, v.a, v.D, v.b),
  away: v => { let p1 = 0, p2 = 0; for (let k = 0; k < v.t; k++) { p1 += v.same ? v.a : -v.a; p2 += v.b; } return Math.abs(p1 - p2); },
  river: v => {
    if (v.k === 0) { let pos = 0; for (let h = 0; h < v.t; h++) { pos += v.v; pos += v.w; } return pos; }   // 船自己划＋河水推
    if (v.k === 1) { let pos = 0, h = 0; while (pos < v.D) { pos += v.v; pos -= v.w; h++; } return h; }
    return v.v + (v.up ? -v.w : v.w);
  },
  rel: v => change(v.kind, v.a, v.b, v.X),
  kinds: v => v.cand.filter(k => change(k, v.a, v.b, 1000).m === v.N),
  river3: v => { for (let s = 1; s <= 100; s++) for (let w = 1; w < s; w++) if ((s + w) * v.t1 === v.D1 && (s - w) * v.t2 === v.D2) return v.boat ? s : w; },
  chase3: v => { let y = 0, o = 0; for (let m = 1; m <= 1000; m++) { y += v.b; if (m > v.x) { o += v.a; if (o === y) return v.dist ? o : m - v.x; } } },
  avg3: v => mul(2, div(v.p * v.s, v.p + v.s))   // 調和平均：2÷(1/p＋1/s)
};
