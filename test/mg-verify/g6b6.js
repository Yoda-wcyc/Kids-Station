// 六下 單元六 圓形圖：驗算（跟出題用不同算法：一格一格往上數、1% 或 1 度一份一份累加、把每個可能結果拿來逐一檢查）
const { R, add, sub, eq } = require('../../math/grade.js').H;
const times = (x, k) => { let t = R(0); for (let i = 0; i < k; i++) t = add(t, x); return t; };
const ok = e => x => e.t === 'col' ? e.cs.includes(x) : e.t === 'lt' ? x < e.n : e.t === 'gt' ? x > e.n : e.t === 'eq' ? x === e.n : e.t === 'even' ? x % 2 === 0 : x % 2 === 1;
const word = (outs, e) => { let k = 0; for (const x of outs) if (ok(e)(x)) k++; return k === 0 ? '不可能發生' : k === outs.length ? '一定會發生' : '可能會發生'; };
const pctOf = (c, N) => { for (let k = 0; k <= 100; k++) if (eq(times(R(N, 100), k), c)) return k; };
const degOf = (c, N) => { for (let k = 0; k <= 360; k++) if (eq(times(R(N, 360), k), c)) return k; };
module.exports = {
  readPct: v => { const s = v.others.reduce((a, b) => a + b, 0); let x = 0; while (s + x < 100) x++; return x; },
  p2deg: v => { for (let d = 0; d <= 360; d++) if (eq(times(R(d, 360), 100), v.p)) return d; },
  deg2p: v => pctOf(v.deg, 360),
  maybe: v => word(v.outs, v.e),
  count: v => times(R(v.N, 100), v.p),
  degCount: v => times(R(v.N, 360), v.deg),
  make: v => [pctOf(v.c, v.N), degOf(v.c, v.N)],
  maybeSet: (v, q) => q.ov.filter(e => word(v.outs, e) === v.want),
  diff: v => sub(times(R(v.N, 100), v.pa), times(R(v.N, 100), v.pb)),
  rev: v => { let N = 1; while (!eq(times(R(N, 100), v.pa), v.ca)) N++; return v.kind === 0 ? N : times(R(N, 100), v.pb); },
  degMiss: v => { let d = 360; v.others.forEach(x => { d -= x; }); return times(R(v.N, 360), d); },
  pieSet: (v, q) => q.ov.filter(o => eq(o.v, o.t === 'c' ? times(R(v.N, 100), v.ps[o.i]) : times(R(360, 100), v.ps[o.i])))
};
