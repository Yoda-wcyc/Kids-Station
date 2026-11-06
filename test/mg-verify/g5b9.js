// 五下 單元九 時間的乘除：驗算（跟出題用不同算法：一次一次累加再逐次進位、暴力試商、一分一分數時間、全部換成秒來比）
const rep = (x, n) => { let s = 0; for (let i = 0; i < n; i++) s += x; return s; };
// 小單位 → [大, 小]：一次扣 60
const carry = x => { let a = 0; while (x >= 60) { x -= 60; a++; } return [a, x]; };
// 幾時幾分×n：一次加一份，分滿 60 就進位
const addTimes = (h, m, n) => { let H = 0, M = 0; for (let i = 0; i < n; i++) { H += h; M += m; while (M >= 60) { M -= 60; H++; } } return [H, M]; };
const divide = (tot, n) => { for (let x = 0; x <= tot; x++) if (rep(x, n) === tot) return x; };
const sec = o => o.u ? (o.u === '分' ? rep(60, o.x) : o.x) : o.op === '×' ? rep(rep(3600, o.h) + rep(60, o.m), o.n) : divide(rep(3600, o.h) + rep(60, o.m), o.n);
module.exports = {
  mulHM: v => addTimes(v.h, v.m, v.n),
  mulMS: v => addTimes(v.m, v.s, v.n),
  divHM: v => carry(divide(rep(60, v.th) + v.tm, v.n)),
  conv: v => v.kind === 0 ? rep(60, v.a) + v.b : v.kind === 2 ? rep(24, v.a) + v.b : carry(v.N),
  daily: v => carry(rep(v.m, v.days)),
  share: v => divide(rep(60, v.h) + v.m, v.n),
  cmpT: (v, q) => q.ov.reduce((b, o) => ((v.big ? sec(o) > sec(b) : sec(o) < sec(b)) ? o : b)),
  same: (v, q) => q.ov.filter(o => sec(o) === rep(3600, v.h) + rep(60, v.m)),
  // 一分一分數：從上班數到下班
  work: v => { let n = 0; for (let t = v.a * 60 + v.b; t < (v.c + 12) * 60 + v.d; t++) n++; return carry(rep(n - v.rest, v.days)); },
  // 一班一班往後推
  trip: v => { let h = v.a, m = v.b; for (let k = 2; k <= v.n; k++) { m += v.iv; while (m >= 60) { m -= 60; h++; } } return [h, m]; },
  unitMc: v => rep(60, v.a) + v.b,
  // 從首班一班一班往後排到中午，把在表上的挑出來
  schedSet: (v, q) => { const on = []; let h = v.a, m = v.b; while (h < 12) { on.push(h + ':' + m); m += v.iv; while (m >= 60) { m -= 60; h++; } } return q.ov.filter(o => on.includes(o.h + ':' + o.m)); },
  days: v => carry(divide(rep(1440, v.dd) + rep(60, v.hh) + v.mm, v.n))
};
