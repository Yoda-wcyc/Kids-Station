// 五下 單元七 表面積：驗算（跟出題用不同算法：疊 1 公分小方塊，一個一個數露在外面的小正方形；展開圖從 SVG 的長方形量回面積）
const D6 = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
// cells：[[x,y,z,塊號]]；數每個小方塊旁邊不是同一塊的面；skip(x,y,z,dx,dy,dz) → 這面不算
function faces(cells, skip) {
  const m = new Map(cells.map(([x, y, z, p = 0]) => [x + ',' + y + ',' + z, p])); let n = 0;
  for (const [k, p] of m) {
    const [x, y, z] = k.split(',').map(Number);
    for (const [dx, dy, dz] of D6) if (m.get((x + dx) + ',' + (y + dy) + ',' + (z + dz)) !== p && !(skip && skip(x, y, z, dx, dy, dz))) n++;
  }
  return n;
}
function block(L, W, H, keep = () => true, piece = () => 0) {
  const c = []; for (let x = 0; x < L; x++) for (let y = 0; y < W; y++) for (let z = 0; z < H; z++) if (keep(x, y, z)) c.push([x, y, z, piece(x, y, z)]); return c;
}
const area = (a, b) => { let n = 0; for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) n++; return n; };
module.exports = {
  cube: v => faces(block(v.s, v.s, v.s)),
  box: v => faces(block(v.l, v.w, v.h)),
  faces: v => { const fs = [area(v.l, v.w), area(v.l, v.h), area(v.w, v.h)]; return v.cand.filter(x => fs.includes(x)); },
  cubeS: v => { for (let s = 1; s < 100; s++) if (faces(block(s, s, s)) === v.S) return v.ask === 'side' ? s : area(s, s); },
  net: (v, q) => [...q.svg.matchAll(/<rect [^>]*width="(\d+)" height="(\d+)"/g)].reduce((t, m) => t + (+m[1] / v.k) * (+m[2] / v.k), 0),
  open: v => faces(block(v.l, v.w, v.h), (x, y, z, dx, dy, dz) => dz === 1 && z === v.h - 1),
  cmp: v => v.boxes.reduce((m, b) => ((faces(block(b.l, b.w, b.h)) > faces(block(m.l, m.w, m.h))) === v.big ? b : m)),
  glue: v => faces(block(v.L, v.W, v.H)) * v.s * v.s,
  hole: v => {
    const { S, t } = v;
    const keep = v.mode === 'corner' ? (x, y, z) => !(x < t && y < t && z < t) : (x, y, z) => !(x >= 1 && x <= t && y >= 1 && y <= t && z >= S - t);
    return faces(block(S, S, S, keep));
  },
  cut: v => {
    const d = [v.l, v.w, v.h], mid = Math.floor(d[v.ax] / 2), tot = faces(block(v.l, v.w, v.h, undefined, (x, y, z) => ([x, y, z][v.ax] < mid ? 1 : 2)));
    return v.ask === 'more' ? tot - faces(block(v.l, v.w, v.h)) : tot;
  },
  // 變化量＝之後數到的小面 − 之前數到的小面
  chg: v => {
    const { S, t } = v;
    if (v.mode === 'glue') return (faces(block(2, 1, 1)) - 2 * faces(block(1, 1, 1))) * S * S;
    return module.exports.hole(Object.assign({}, v, { mode: v.mode })) - faces(block(S, S, S));
  }
};
