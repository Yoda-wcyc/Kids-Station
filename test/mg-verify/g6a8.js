// 六上 單元八 認識速率：驗算（跟出題用不同算法：一分鐘一分鐘累加／扣掉、全部先換成「每秒幾公尺」再換回、比快慢用交叉相乘）
const { R, mul, div, add, cmp } = require('../../math/grade.js').H;
// 速率 → 每秒幾公尺（o.u：h＝時速公里、m＝分速公尺、s＝秒速公尺）
const perS = (u, x) => (u === 'h' ? div(mul(x, 1000), 3600) : u === 'm' ? div(x, 60) : R(x));
// 每秒幾公尺 → 目標單位（h 回公里）
const fromS = (u, v) => (u === 'h' ? div(mul(v, 3600), 1000) : u === 'm' ? mul(v, 60) : v);
const steps = (total, each) => { let n = 0, left = total; while (left > 0) { left -= each; n++; } return n; };
module.exports = {
  // 交叉相乘：a.d×b.t 和 b.d×a.t 比
  cmp: v => (v.a.d * v.b.t > v.b.d * v.a.t ? v.names[0] : v.names[1]),
  spd: v => { for (let s = 1; s <= v.d; s++) if (s * v.t === v.d) return s; },
  dist: v => { let d = 0; for (let i = 0; i < v.t; i++) d += v.s; return d; },
  time: v => steps(v.d, v.s),
  c1: v => fromS(v.to, perS(v.from, v.x)),
  c2: v => fromS(v.to, perS(v.from, v.x)),
  mix: v => {
    if (v.kind === 0) return div(mul(perS('h', v.v), v.t * 60), 1000);   // 每秒公尺×秒數＝公尺 → 公里
    if (v.kind === 1) { let d = 0; for (let i = 0; i < v.hr * 60 + v.mn; i++) d += v.s; return d; }
    return div(mul(v.d, 1000), mul(perS('h', v.v), 60));                                // 公尺÷分速
  },
  all: v => v.cand.filter(c => { let d = 0; for (let i = 0; i < c.t; i++) d += v.S; return d === c.d; }),
  fast: v => v.os.reduce((b, o) => (cmp(perS(o.u, o.x), perS(b.u, b.x)) * (v.fast ? 1 : -1) > 0 ? o : b)),
  trip: v => (v.kind === 0 ? div(mul(perS('h', v.v), v.t * 60), 1000) : fromS('h', div(v.D, v.s))),
  walk: v => { let d = 0; for (let i = 0; i < v.t; i++) d += v.a; return steps(d, v.b); }
};
