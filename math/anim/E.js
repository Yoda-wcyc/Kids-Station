/* anim/E.js — 🎬 E 內角和（三角形 180°；四邊形 360°：120°、90°、85° → ★＝65°；三個正三角形拼梯形是 360° 不是 540°）。介面見 math/anim.js 檔頭。 */
(function (G) {
  'use strict';
  const RAD = Math.PI / 180, cos = d => Math.cos(d * RAD), sin = d => Math.sin(d * RAD);
  // 三角形：A 50°、B 70°、C 60°（頂點座標由角度算出來，圖跟數字一致）
  const TA = [70, 250], TB = [300, 250], AC = 230 * sin(70) / sin(60), TC = [TA[0] + AC * cos(50), TA[1] - AC * sin(50)], P = [480, 250];
  // 四邊形：左下 90°、右下 85°、右上 ★65°、左上 120°（數學座標解出右上角，再縮放到畫面）
  const qx = 260, qy = 120;
  const Q3m = (() => { // 解 (0,qy)+t(cos30,sin30) ＝ (qx,0)+s(cos95,sin95)
    const a = cos(30), b = -cos(95), c = sin(30), d = -sin(95), det = a * d - b * c, ex = qx, ey = -qy;
    const t = (ex * d - b * ey) / det; return [t * cos(30), qy + t * sin(30)];
  })();
  const QM = [[0, 0], [qx, 0], Q3m, [0, qy]], QS = 0.82, QP = QM.map(p => [150 + QS * p[0], 292 - QS * p[1]]);
  const QANG = [90, 85, 65, 120];
  // 三個正三角形：下排 B0 B1 B2、上排 T0 T1
  const s3 = 150, B0 = [80, 252], B1 = [B0[0] + s3, B0[1]], B2 = [B0[0] + 2 * s3, B0[1]], T0 = [B0[0] + s3 / 2, B0[1] - s3 * sin(60)], T1 = [T0[0] + s3, T0[1]];
  // 頂點 V 的內角（P、N 是兩個鄰點）：回傳扇形起點角、掃過角、角平分線方向（SVG 角度）
  const ang = (V, Pp) => Math.atan2(Pp[1] - V[1], Pp[0] - V[0]) / RAD;
  const corner = (V, Pp, N) => { const a1 = ang(V, Pp), a2 = ang(V, N), sw = ((a2 - a1) % 360 + 360) % 360; return sw <= 180 ? { a0: a1, sw } : { a0: a2, sw: 360 - sw }; };
  const at = (V, deg, r) => [V[0] + r * cos(deg), V[1] + r * sin(deg)];
  const S = {
    id: 'E', title: '內角和', icon: '🔺', H: 320,
    key: { tri: [50, 70, 60], triPts: [TA, TB, TC], quadKnown: [120, 90, 85], star: 65, quadAng: QANG, quadPts: QP, tiles: 3, wrong: 540, right: 360, tilePts: { B0, B1, B2, T0, T1 } },
    v0: { sc1: 0, mv: 0, sc2: 0, cut: 0, star: 0, sc3: 0, join: 0, sum: 0, mid: 0, fin: 0 },
    steps: [
      { t: '三角形三個角加起來是幾度？把三個角撕下來看看。', v: { sc1: 1 } },
      { t: '三個角拼在一起，剛好排成一直線：50°＋60°＋70°＝180°。', v: { mv: 1 }, ms: 2200 },
      { t: '四邊形切一刀，變成兩個三角形：180°＋180°＝360°。', v: { sc1: 0, sc2: 1, cut: 1 }, ms: 1800 },
      { t: '已知 120°、90°、85°，★＝360°－120°－90°－85°＝65°。', v: { star: 1 } },
      { t: '三個正三角形拼成梯形。每個 180°，加起來是 540° 嗎？', v: { sc2: 0, sc3: 1, join: 1, sum: 1 }, ms: 1800 },
      { t: '不對！中間三個角拼成一直線（平角），不是梯形的角：540°－180°＝360°。', v: { mid: 1 }, ms: 1100 },
      { t: '梯形是四邊形，內角和一樣是 360°！', v: { fin: 1 } }
    ],
    draw(v, h) {
      const C = h.C;
      let s = '';
      // ---- 場景 1：撕下三角形三個角，拼成一直線 ----
      if (v.sc1 > 0.01) {
        let g = h.poly([TA, TB, TC], { fill: C.paper, c: C.ink, w: 3 });
        g += h.line(360, P[1], 600, P[1], { w: 3, op: v.mv });
        const parts = [[TA, TC, TB, 50, C.pri, -180], [TC, TA, TB, 60, C.blue, -130], [TB, TA, TC, 70, C.ok, -70]];
        parts.forEach(([V, Pp, N, deg, col, tgt]) => {
          const c0 = corner(V, Pp, N);
          let d = ((tgt - c0.a0) % 360 + 540) % 360 - 180;   // 轉最近的方向
          const a0 = c0.a0 + d * v.mv, cx = h.lerp(V[0], P[0], v.mv), cy = h.lerp(V[1], P[1], v.mv);
          if (v.mv > 0.02) g += h.wedge(V[0], V[1], 64, c0.a0, c0.sw, { fill: col, op: 0.18 });   // 撕掉的地方留淡淡的印子
          g += h.wedge(cx, cy, 64, a0, c0.sw, { fill: col, c: C.paper, w: 2, op: 0.85 });
          const L = at([cx, cy], a0 + c0.sw / 2, 42);
          g += h.text(L[0], L[1] + 6, deg + '°', { size: 18, fill: C.paper });
        });
        g += h.g(v.mv > 0.9 ? (v.mv - 0.9) * 10 : 0, h.text(P[0], 168, '一直線＝180°', { size: 20, fill: C.ink }) + h.text(P[0], 292, '50°＋60°＋70°＝180°', { size: 17, fill: C.ink }));
        s += h.g(v.sc1, g);
      }
      // ---- 場景 2：四邊形切成兩個三角形 ----
      if (v.sc2 > 0.01) {
        const [q1, q2, q3, q4] = QP;
        let g = h.poly([q1, q2, q4], { fill: C.priL, op: v.cut }) + h.poly([q2, q3, q4], { fill: C.blueL, op: v.cut });
        g += h.poly(QP, { c: C.ink, w: 3 });
        g += h.line(q4[0], q4[1], h.lerp(q4[0], q2[0], v.cut), h.lerp(q4[1], q2[1], v.cut), { w: 3, c: C.no, dash: '8 6' });
        const cen = t => [(t[0][0] + t[1][0] + t[2][0]) / 3, (t[0][1] + t[1][1] + t[2][1]) / 3];
        const c1 = cen([q1, q2, q4]), c2 = cen([q2, q3, q4]), cop = v.cut > 0.8 ? (v.cut - 0.8) * 5 : 0;
        g += h.text(c1[0] - 8, c1[1] + 14, '180°', { size: 17, fill: C.pri, op: cop }) + h.text(c2[0] + 6, c2[1] + 4, '180°', { size: 17, fill: C.blue, op: cop });
        QP.forEach((V, i) => {
          const c = corner(V, QP[(i + 3) % 4], QP[(i + 1) % 4]), L = at(V, c.a0 + c.sw / 2, i === 2 ? 46 : 40);
          g += h.wedge(V[0], V[1], 22, c.a0, c.sw, { fill: i === 2 ? C.pur : C.mute, op: 0.45 });
          g += h.text(L[0], L[1] + 6, i === 2 ? '★' : QANG[i] + '°', { size: 16, fill: i === 2 ? C.pur : C.ink });
        });
        g += h.g(cop, h.text(515, 110, '180°＋180°＝360°', { size: 18 }));
        g += h.g(v.star, h.text(515, 160, '360°－120°－90°－85°', { size: 16 }) + h.text(515, 200, '★＝65°', { size: 24, fill: C.pur }));
        s += h.g(v.sc2, g);
      }
      // ---- 場景 3：三個正三角形拼梯形 ----
      if (v.sc3 > 0.01) {
        const k = 1 - v.join, mv = (pts, dx, dy) => pts.map(p => [p[0] + dx * k, p[1] + dy * k]);
        const L = mv([B0, B1, T0], -50, 0), M = mv([T0, B1, T1], 0, -55), R = mv([B1, B2, T1], 50, 0);
        let g = h.poly(L, { fill: C.priL, c: C.pri, w: 3 }) + h.poly(M, { fill: C.blueL, c: C.blue, w: 3 }) + h.poly(R, { fill: C.okL, c: C.ok, w: 3 });
        // 中間三個角（在 B1 那一點）合成平角
        const mids = [[L[1], L[0], L[2], C.pri], [M[1], M[0], M[2], C.blue], [R[0], R[2], R[1], C.ok]];
        g += h.g(v.mid, mids.map(([V, Pp, N, col]) => { const c = corner(V, Pp, N); return h.wedge(V[0], V[1], 36, c.a0, c.sw, { fill: col, c: C.paper, w: 2 }); }).join('') +
          h.line(B0[0] - 20, B1[1] + 1, B2[0] + 20, B1[1] + 1, { w: 2, c: C.no, dash: '5 5' }) + h.text(B1[0], 288, '平角 180°，不是梯形的角', { size: 16, fill: C.no }));
        // 梯形的四個角
        const tz = [B0, B2, T1, T0];
        g += h.g(v.fin, tz.map((V, i) => { const c = corner(V, tz[(i + 3) % 4], tz[(i + 1) % 4]), Lb = at(V, c.a0 + c.sw / 2, c.sw > 90 ? 34 : 44); return h.wedge(V[0], V[1], 20, c.a0, c.sw, { fill: C.pur, op: 0.5 }) + h.text(Lb[0], Lb[1] + 6, Math.round(c.sw) + '°', { size: 15, fill: C.pur }); }).join(''));
        g += h.g(v.sum, h.text(520, 110, '3 × 180°＝540°', { size: 19, fill: v.mid > 0.5 ? C.mute : C.ink }));
        g += h.g(v.mid, h.text(520, 150, '－180°（平角）', { size: 19, fill: C.no }) + h.text(520, 195, '＝360° ✓', { size: 24, fill: C.ok }));
        g += h.g(v.fin, h.text(520, 245, '60°＋60°＋120°＋120°', { size: 15, fill: C.pur }) + h.text(520, 270, '＝360°', { size: 17, fill: C.pur }));
        s += h.g(v.sc3, g);
      }
      return s;
    },
    prac: [
      { q: '三角形的兩個角是 42° 和 75°，第三個角是幾度？', calc: { f: 'tri-ang', known: [42, 75] }, fields: [{ lab: '第三個角', suf: '度' }], ans: [63],
        why: '三角形三個角加起來是 180°：180－42－75＝63，所以是 63°。' },
      { q: '四邊形的三個角是 125°、80°、70°，第四個角是幾度？', calc: { f: 'quad', known: [125, 80, 70] }, fields: [{ lab: '第四個角', suf: '度' }], ans: [85],
        why: '四邊形可以切成兩個三角形，內角和 360°：360－125－80－70＝85，所以是 85°。' },
      { q: '四個一樣的正三角形排成一排，拼成一個平行四邊形。這個平行四邊形的內角和是幾度？', calc: { f: 'tiles', n: 4 }, opts: ['720°', '540°', '360°'], ans: 2,
        why: '4×180°＝720°，但上下各有一個點的三個角拼成平角（180°），不是平行四邊形的角：720－180－180＝360°。' }
    ]
  };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.E = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
