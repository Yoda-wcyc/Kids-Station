// 五下 單元十 生活中的大單位：驗算（跟出題用不同算法：移小數點的字串做法、一次加一份、面積用「邊長平方」換算、數 10 公尺×10 公尺的小格）
const { R, add, sub, mul, eq, cmp, fromDec } = require('../../math/grade.js').H;
const times1000 = s => { const [ip, fp = ''] = s.split('.'); return +(ip + fp.padEnd(3, '0')); };              // '2.05' → 2050
const over1000 = n => { const s = String(n).padStart(4, '0'); return fromDec(s.slice(0, -3) + '.' + s.slice(-3)); };   // 2050 → 2.05
const rep = (x, n) => { let s = 0; for (let i = 0; i < n; i++) s += x; return s; };
const SIDE = { 平方公尺: 1, 公畝: 10, 公頃: 100, 平方公里: 1000 };   // 正方形邊長幾公尺
const AREA = ['平方公尺', '公畝', '公頃', '平方公里'];
const LIN = { 公里: 1000, 公尺: 1, 公噸: 1000, 公斤: 1 };
const base = u => LIN[u] || SIDE[u] * SIDE[u];
const val = o => o.f === 'dec' ? mul(fromDec(o.s), base(o.u)) : o.f === 'int' ? R(o.x * base(o.u)) : R(o.a * base(o.u) + o.b * base(o.u2));
// 數 10 公尺×10 公尺的小格＝公畝
const squares = (a, b) => { let n = 0; for (let i = 0; i < a / 10; i++) for (let j = 0; j < b / 10; j++) n++; return n; };
const bigSmall = v => v.kind === 0 ? times1000(v.s) : v.kind === 1 ? rep(1000, v.a) + v.b : over1000(v.M);
module.exports = {
  km: bigSmall,
  ton: bigSmall,
  area: v => { const s1 = SIDE[AREA[v.a]], s2 = SIDE[AREA[v.b]]; return mul(mul(R(v.x), s1 * s1), R(1, s2 * s2)); },
  mix: v => v.kind === 0 ? add(fromDec(v.A), R(v.B, 1000)) : mul(sub(fromDec(v.A), R(v.B, 1000)), 1000),
  load: v => { if (v.kind === 0) { const X = times1000(v.X); let n = 0, t = 0; while (t + v.w <= X) { t += v.w; n++; } return n; } return over1000(rep(v.w, v.n)); },
  land: v => v.unit === '公畝' ? squares(v.a, v.b) : R(squares(v.a, v.b), 100),
  cmpU: (v, q) => q.ov.reduce((b, o) => (cmp(val(o), val(b)) === (v.big ? 1 : -1) ? o : b)),
  same: (v, q) => q.ov.filter(o => eq(val(o), val(v.target))),
  field: v => { const n = squares(times1000(v.L), v.W); return v.unit === '公畝' ? n : R(n, 100); },
  truck: v => { let left = times1000(v.X), n = 0; while (left > 0) { left -= v.w; n++; } return n; },
  // 選單位：用關鍵字另外判（跟出題表分開寫）
  unitMc: v => [[/卡車/, '公噸'], [/開車到/, '公里'], [/校園/, '公頃'], [/教室/, '平方公尺'], [/本島/, '平方公里'], [/包米/, '公斤'], [/操場/, '公尺'], [/菜園/, '公畝']].find(x => x[0].test(v.thing))[1],
  // 數 10 公尺×10 公尺的小格，要剛好 ha×100 格
  sideSet: (v, q) => q.ov.filter(o => squares(o.lu === '公里' ? times1000(o.l) : +o.l, o.w) === v.ha * 100),
  run: v => v.kind === 0 ? sub(mul(fromDec(v.L), 1000), rep(1000, v.a) + v.b) : over1000(rep(v.lap, v.n) + v.m)
};
