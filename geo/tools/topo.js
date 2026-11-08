/* geo/tools/topo.js — 只給 build-maps.js 用：讀 TopoJSON（world-atlas 套件）、Douglas–Peucker 簡化、裁切。不在網頁裡載。 */
'use strict';
// TopoJSON → 每個 geometry 一組多邊形 [[[lon,lat],…] 外環, 內環…]
function decode(topo) {
  const [sx, sy] = topo.transform.scale, [tx, ty] = topo.transform.translate;
  const arcs = topo.arcs.map(a => { let x = 0, y = 0; return a.map(([dx, dy]) => { x += dx; y += dy; return [x * sx + tx, y * sy + ty]; }); });
  const arc = i => (i < 0 ? arcs[~i].slice().reverse() : arcs[i]);
  const ring = ids => { const out = []; ids.forEach((i, k) => { const a = arc(i); out.push(...(k ? a.slice(1) : a)); }); return out; };
  const geom = g => (g.type === 'Polygon' ? [g.arcs.map(ring)] : g.type === 'MultiPolygon' ? g.arcs.map(p => p.map(ring)) : []);
  const objs = {};
  Object.keys(topo.objects).forEach(k => { const o = topo.objects[k]; objs[k] = (o.geometries || [o]).map(g => ({ id: g.id, name: (g.properties || {}).name, polys: geom(g) })); });
  return objs;
}
// Douglas–Peucker（tol 單位＝度）；環的頭尾一定留
function dp(pts, tol) {
  if (pts.length < 4) return pts.slice();
  const f = pts[0], l = pts[pts.length - 1];
  if (f[0] === l[0] && f[1] === l[1]) {   // 封閉的環：頭尾是同一點，從離起點最遠的點切成兩半各自簡化
    let mi = 1, md = -1; pts.forEach((p, i) => { const d = Math.hypot(p[0] - f[0], p[1] - f[1]); if (d > md) { md = d; mi = i; } });
    return dpOpen(pts.slice(0, mi + 1), tol).concat(dpOpen(pts.slice(mi), tol).slice(1));
  }
  return dpOpen(pts, tol);
}
function dpOpen(pts, tol) {
  if (pts.length < 3) return pts.slice();
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const st = [[0, pts.length - 1]];
  while (st.length) {
    const [a, b] = st.pop(); let md = 0, mi = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1e-12;
    for (let i = a + 1; i < b; i++) { const d = Math.abs(dy * (pts[i][0] - ax) - dx * (pts[i][1] - ay)) / L; if (d > md) { md = d; mi = i; } }
    if (md > tol && mi > 0) { keep[mi] = 1; st.push([a, mi], [mi, b]); }
  }
  return pts.filter((p, i) => keep[i]);
}
// 環的外接框
function bbox(r) { let w = 180, s = 90, e = -180, n = -90; r.forEach(([x, y]) => { w = Math.min(w, x); e = Math.max(e, x); s = Math.min(s, y); n = Math.max(n, y); }); return [w, s, e, n]; }
// Sutherland–Hodgman：環裁到框裡（框外的部分壓到框邊；畫成填色地塊用，沿框邊的線不畫外框就看不出來）
function clip(r, [w, s, e, n]) {
  const edges = [[p => p[0] >= w, (a, b) => { const t = (w - a[0]) / (b[0] - a[0]); return [w, a[1] + t * (b[1] - a[1])]; }],
    [p => p[0] <= e, (a, b) => { const t = (e - a[0]) / (b[0] - a[0]); return [e, a[1] + t * (b[1] - a[1])]; }],
    [p => p[1] >= s, (a, b) => { const t = (s - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), s]; }],
    [p => p[1] <= n, (a, b) => { const t = (n - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), n]; }]];
  let out = r;
  edges.forEach(([inside, cut]) => {
    const src = out; out = [];
    for (let i = 0; i < src.length; i++) {
      const cur = src[i], prev = src[(i + src.length - 1) % src.length];
      if (inside(cur)) { if (!inside(prev)) out.push(cut(prev, cur)); out.push(cur); } else if (inside(prev)) out.push(cut(prev, cur));
    }
  });
  return out;
}
// 環面積（度²，正負看方向）
function area(r) { let a = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] - r[i][0]) * (r[j][1] + r[i][1]); return a / 2; }
module.exports = { decode, dp, bbox, clip, area };
