// 六上 單元一 最大公因數與最小公倍數：驗算（跟出題用不同算法：數因數個數、由大往小試公因數、由小往大試公倍數、用面積算張數）
const nd = n => { let c = 0; for (let i = 1; i <= n; i++) if (n % i === 0) c++; return c; };   // 因數個數
const prime = n => nd(n) === 2;
const gcdB = (a, b) => { for (let d = Math.min(a, b); d >= 1; d--) if (a % d === 0 && b % d === 0) return d; };
const lcmB = (a, b) => { for (let m = Math.max(a, b); ; m++) if (m % a === 0 && m % b === 0) return m; };
module.exports = {
  prime: v => v.cand.filter(prime),
  pc: (v, q) => q.ov.find(x => (v.ask === 'prime' ? prime(x) : nd(x) > 2)),
  pf: v => v.cand.filter(x => v.N % x === 0 && prime(x)),
  fact: (v, q) => q.ov.find(s => { const p = s.split('×').map(Number); return p.every(prime) && p.reduce((a, b) => a * b, 1) === v.N; }),
  gcd: v => gcdB(v.a, v.b),
  lcm: v => lcmB(v.a, v.b),
  both: v => [gcdB(v.a, v.b), lcmB(v.a, v.b)],
  cf: v => v.cand.filter(x => v.a % x === 0 && v.b % x === 0),
  share: v => gcdB(v.a, v.b),
  meet: v => lcmB(v.a, v.b),
  cutsq: v => { const s = gcdB(v.L, v.W); return v.ask === 'side' ? s : v.L * v.W / (s * s); },   // 張數＝紙的面積÷一個正方形面積
  tilesq: v => { const s = lcmB(v.a, v.b); return v.ask === 'side' ? s : s * s / (v.a * v.b); },
  cm: v => v.cand.filter(x => x % v.a === 0 && x % v.b === 0),
  apply: v => (v.kind === 'share' || v.kind === 'cut' ? gcdB(v.a, v.b) : lcmB(v.a, v.b))
};
