// 六上 單元三 數量關係：驗算（跟出題用不同算法：從 0 一個一個試、逐年模擬年齡、一個一個加上去數堆疊）
const fits = (op, c, x, y) => ({ '+': x + y === c, '-': x - y === c, '*': x * y === c, '/': y !== 0 && x === y * c })[op];
const findY = (op, c, x) => { for (let y = 0; y <= 5000; y++) if (fits(op, c, x, y)) return y; };
const findX = (op, c, y) => { for (let x = 0; x <= 5000; x++) if (fits(op, c, x, y)) return x; };
const solve = v => (v.x != null ? findY(v.op, v.c, v.x) : findX(v.op, v.c, v.y));
// 只看表格找出關係（四種都試，每一組都要符合）
const guess = ps => {
  const [x, y] = ps[0];
  for (const [op, c] of [['+', x + y], ['-', x - y], ['*', x * y], ['/', x / y]]) if (Number.isInteger(c) && ps.every(p => fits(op, c, p[0], p[1]))) return { op, c };
};
const stackAt = (first, inc, n) => { let t = first; for (let i = 2; i <= n; i++) t += inc; return t; };
module.exports = {
  sum: solve, diff: solve, quot: solve, prod: solve,
  rel: (v, q) => q.ov.find(o => v.ps.every(p => fits(o.op, o.c, p[0], p[1]))),
  fill: v => { const g = guess(v.ps); return findY(g.op, g.c, v.x); },
  age: v => { let kid = v.m, mom = v.M; while (kid < v.x) { kid++; mom++; } while (kid > v.x) { kid--; mom--; } return mom; },
  rect: v => v.cand.filter(o => { let s = 0; for (let i = 0; i < o.w; i++) s += o.l; return s === v.A; }),
  stack: v => stackAt(v.first, v.inc, v.n),
  pick: (v, q) => q.ov.find(o => fits(v.op, v.c, o.x, o.y)),
  stackset: v => v.cand.filter(x => { for (let n = 1; n < 100; n++) if (stackAt(v.first, v.inc, n) === x) return true; return false; }),
  stackr: v => { for (let n = 1; n < 500; n++) if (stackAt(v.first, v.inc, n) === v.v) return n; },
  age2: v => {
    for (let t = 1; t < 100; t++) {
      if (v.mode === 'sum' && v.a + v.b + 2 * t === v.S) return t;
      if (v.mode === 'twice' && v.F + t === 2 * (v.m + t)) return t;
    }
  }
};
