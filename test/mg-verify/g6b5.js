// 六下 單元五 怎樣解題：驗算（跟出題用不同算法：從 0 開始一個一個試、一年一年模擬、把所有排法／選法真的列出來再數）
function perms(xs, k) {   // 從 xs 取 k 個排成一列的所有排法
  if (!k) return [[]];
  const out = [];
  xs.forEach((x, i) => perms(xs.filter((_, j) => j !== i), k - 1).forEach(p => out.push([x].concat(p))));
  return out;
}
const pairList = xs => { const out = []; xs.forEach((a, i) => xs.forEach((b, j) => { if (i < j) out.push([a, b]); })); return out; };
const range = n => Array.from({ length: n }, (_, i) => i);
module.exports = {
  sumDiff: v => { for (let s = 0; s <= v.S; s++) if (v.S - s - s === v.D) return [v.S - s, s]; },
  ageDiff: v => { let a = v.F, b = v.k; for (let y = 0; y < v.N; y++) { a += v.later ? 1 : -1; b += v.later ? 1 : -1; } return a - b; },
  combo: v => { let n = 0; for (let i = 0; i < v.a; i++) for (let j = 0; j < v.b; j++) n++; return n; },
  assume: v => { let legs = 0; for (let i = 0; i < v.N; i++) legs += v.all === '雞' ? 2 : 4; return Math.abs(legs - v.L); },
  sumDiff2: v => { for (let s = 0; s <= v.S; s++) if (v.S - s - s === v.D) return v.big ? v.S - s : s; },
  ageTimes: v => { for (let y = 0; y <= 60; y++) if (v.M + y === v.k * (v.g + y)) return y; },
  cage: v => { for (let x = 0; x <= v.N; x++) if (x * v.a + (v.N - x) * v.b === v.L) return [x, v.N - x]; },
  listAll: v => v.kind === 0 ? perms(v.ds, 3).map(p => p.join(''))
    : v.kind === 1 ? pairList(v.ps).filter(p => p.includes(v.who)).map(p => p[0] + '和' + p[1])
    : v.tops.flatMap(t => v.pants.map(p => t + '上衣配' + p + '褲子')),
  pairs: v => v.t === 1 ? perms(range(v.N), v.N).length : pairList(range(v.N)).length,
  ageSum: v => {
    if (v.kind === 1) { let t = v.S, y = 0; while (t < v.T) { t += 2; y++; } return y; }
    for (let s = 0; s <= v.S; s++) if (s + s + v.D === v.S) return s + v.N;
  },
  score: v => {
    if (v.kind === 0) { for (let x = 0; x <= v.Q; x++) if (v.a * x - v.b * (v.Q - x) === v.P) return x; }
    else for (let z = 0; z <= v.n; z++) if (v.a * (v.n - z) + v.b * z === v.M) return z;
  },
  comboHard: v => v.t === 0 ? new Set(perms(v.ds, 3).filter(p => p[0] !== 0).map(p => p.join(''))).size
    : v.t === 1 ? perms(range(v.N), v.N).filter(p => p[0] === 0).length
    : (() => { for (let n = 2; n <= 100; n++) if (pairList(range(n)).length === v.T) return n; })(),
  sdPick: v => { for (let s = 0; s <= v.S; s++) if (v.S - s - s === v.D) return { a: v.S - s, b: s }; },
  scoreMc: v => { for (let x = 0; x <= v.Q; x++) if (v.a * x - v.b * (v.Q - x) === v.P) return { x: x, w: v.Q - x }; }
};
