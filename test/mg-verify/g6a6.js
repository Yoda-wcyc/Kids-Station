// 六上 單元六 圓周長與扇形周長：驗算（跟出題用不同算法：用「百分之一公分」的整數一圈一圈累加、反過來暴力找直徑／角度）
const { R, add, mul, div, eq, cmp, fromDec } = require('../../math/grade.js').H;
// 直徑 d（可為有理數）的圓周長：3.14 拆成 314 個 1/100，累加 d 次（d 先化成 [分子,分母]）
const circ = d => { d = R(d); let s = 0; for (let i = 0; i < d[0]; i++) s += 314; return R(s, 100 * d[1]); };
// 扇形弧長：每 1 度是圓周長的 1/360，一度一度加上去
const arc = (rr, deg) => { const one = div(circ(rr + rr), 360); let s = R(0); for (let i = 0; i < deg; i++) s = add(s, one); return s; };
const dia = c => (c.k === 'r' ? R(c.x + c.x) : c.k === 'mm' ? R(c.x, 10) : R(c.x));
// 算式字串（只有 ×）→ 有理數
const evalX = s => s.split('×').reduce((a, t) => mul(a, fromDec(t)), R(1));
module.exports = {
  fml: (v, q) => q.ov.filter(s => eq(evalX(s), circ(v.byR ? v.x + v.x : v.x)))[0],   // 每個選項真的算出來，跟圓周長比
  over: v => v.cs.filter(s => cmp(add(arc(s.r, s.deg), s.r + s.r), v.T) > 0),
  pi: v => div(v.c, v.d),
  cd: v => circ(v.d),
  cr: v => circ(v.r + v.r),
  ang: v => {
    if (v.deg != null) { for (let m = 1; m <= 360; m++) if ((v.deg * m) % 360 === 0) return [v.deg * m / 360, m]; }
    for (let g = 1; g <= 360; g++) if (g * v.m === 360 * v.n) return g;
  },
  inv: v => { for (let x = 1; x < 500; x++) if (eq(circ(x), v.c)) return v.ask === 'd' ? x : R(x, 2); },
  semi: v => add(arc(v.r, v.deg), v.r + v.r),
  big: v => v.cs.reduce((b, c) => (cmp(circ(dia(c)), circ(dia(b))) * (v.long ? 1 : -1) > 0 ? c : b)),
  all: v => v.cand.filter(c => eq(circ(dia(c)), v.c)),
  sec: v => add(arc(v.r, v.deg), v.r + v.r),
  life: v => {
    if (v.kind === 0) { let s = R(0); for (let i = 0; i < v.n; i++) s = add(s, circ(v.d)); return div(s, 100); }
    if (v.kind === 1) { let s = R(0); for (let i = 0; i < v.k; i++) s = add(s, circ(v.r + v.r)); return s; }
    let s = R(0), n = 0; const cm = R(v.m[0] * 100, v.m[1]); while (cmp(s, cm) < 0) { s = add(s, circ(v.d)); n++; } return n;
  }
};
