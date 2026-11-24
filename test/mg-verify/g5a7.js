// 五上 單元七 線對稱圖形：驗算（跟出題用不同算法：八邊形照座標沿著對稱軸對摺，找出每個點、每條邊疊到哪裡，再一條一條加；箏形用三角形內角和）
// 題目文字裡的字母要跟圖一致：對不上就回 null（math-grade.test.js 會判失敗）
const { R, sub, div, mul } = require('../../math/grade.js').H;
const PV = [[-40, -90], [-100, -40], [-100, 35], [-50, 90], [50, 90], [100, 35], [100, -40], [40, -90]];
const ABC = 'ABCDEFGH';
// 一張圖：點的座標（含 M、N）、字母 → 點、對摺（直放鏡射 x、橫放鏡射 y）
function fig(v) {
  const P = PV.map(p => (v.h ? [p[1], p[0]] : p.slice()));
  const pts = {};
  P.forEach((p, i) => { pts[ABC[(i + v.s) % 8]] = p; });
  pts.M = [(P[7][0] + P[0][0]) / 2, (P[7][1] + P[0][1]) / 2]; pts.N = [(P[3][0] + P[4][0]) / 2, (P[3][1] + P[4][1]) / 2];
  const flip = p => (v.h ? [p[0], -p[1]] : [-p[0], p[1]]);
  const at = p => Object.keys(pts).find(k => Math.abs(pts[k][0] - p[0]) < 1e-9 && Math.abs(pts[k][1] - p[1]) < 1e-9);
  // 外框一圈 10 段（M、N 把上下兩條邊切成兩半）
  const ring = []; for (let i = 0; i < 8; i++) ring.push(ABC[(i + v.s) % 8]);
  ring.splice(8, 0, 'M'); ring.splice(4, 0, 'N');   // A? … D N E … H M
  const segs = ring.map((a, i) => [a, ring[(i + 1) % ring.length]]);
  const key = (a, b) => [a, b].sort().join('');
  return { pts, mirror: k => at(flip(pts[k])), segs, key };
}
const segOf = (F, name) => F.segs.find(s => F.key(s[0], s[1]) === F.key(name[0], name[1]));
module.exports = {
  mid: v => (v.whole ? div(v.whole, 2) : mul(v.half, 2)),
  pair: (v, q) => {
    const F = fig(v);
    if (v.p != null) { const k = ABC[(v.p + v.s) % 8]; return q.q.includes('點 ' + k + ' ') ? F.mirror(k) : null; }
    const a = ABC[(v.e + v.s) % 8], b = ABC[(v.e + 1 + v.s) % 8];
    return q.q.includes('邊 ' + F.key(a, b) + ' ') ? F.key(F.mirror(a), F.mirror(b)) : null;
  },
  ang: (v, q) => { const F = fig(v), k = ABC[(v.i + v.s) % 8]; return q.q.includes('∠' + k + '＝' + v.x) && q.q.includes('∠' + F.mirror(k) + ' 是幾度') ? R(v.x) : null; },
  angmc: (v, q) => { const F = fig(v), k = ABC[(v.i + v.s) % 8]; return q.q.includes('∠' + k + '＝' + v.x) ? '∠' + F.mirror(k) + '＝' + v.x + '°' : null; },
  // 一半的邊：每一段和它對摺後的那一段都一樣長，10 段全部有長度才加
  half: v => {
    const F = fig(v), len = {};
    v.segs.forEach(([n, x]) => { const s = segOf(F, n); if (!s) return; len[F.key(s[0], s[1])] = x; len[F.key(F.mirror(s[0]), F.mirror(s[1]))] = x; });
    if (F.segs.some(s => len[F.key(s[0], s[1])] == null)) return null;
    let t = 0; F.segs.forEach(s => { t += len[F.key(s[0], s[1])]; }); return R(t);
  },
  // 周長回推：知道的邊和它的對稱邊填上去（上下兩條整條＝M、N 兩半），剩下的兩段要剛好是問的邊和它的對稱邊
  peri: v => {
    const F = fig(v), len = {}, put = (k, x) => { len[k] = x; };
    v.giv.forEach(([n, x]) => {
      const a = n[0], b = n[1];
      if (F.mirror(a) === b) { const c = ['M', 'N'].find(z => segOf(F, a + z)); put(F.key(a, c), x / 2); put(F.key(b, c), x / 2); return; }   // 被甲線平分的邊：兩半各一半
      put(F.key(a, b), x); put(F.key(F.mirror(a), F.mirror(b)), x);
    });
    const left = F.segs.filter(s => len[F.key(s[0], s[1])] == null).map(s => F.key(s[0], s[1])).sort();
    const want = [F.key(v.ask[0], v.ask[1]), F.key(F.mirror(v.ask[0]), F.mirror(v.ask[1]))].sort();
    if (left.join() !== want.join()) return null;
    let k = 0; Object.keys(len).forEach(s => { k += len[s]; });
    return div(sub(v.P, R(k * 2, 2)), 2);
  },
  // 箏形：沿對稱軸切成兩個三角形，一個三角形 180°：旁邊的角＝180－a/2－c/2
  kite: v => sub(sub(180, R(v.a, 2)), R(v.c, 2)),
  kite2: v => mul(2, sub(sub(180, v.x), R(v.a, 2)))
};
