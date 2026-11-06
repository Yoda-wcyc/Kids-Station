/* anim/B.js — 🎬 B 拼大找公倍、切小找公因（期中：38×19 磚拼正方形最短邊 38；48×32 紙剪最大正方形 16；24、36 的公倍數 72、144、216）。介面見 math/anim.js 檔頭。 */
(function (G) {
  'use strict';
  const T = [38, 19], P = [48, 32], SQ = 16, CM = [72, 144, 216];
  const LS = 5, LX = 60, LY = 40, RS = 4, RX = 380, RY = 60;   // 左：1 單位＝5px；右：1 單位＝4px
  const NX = n => 40 + n * 2.6, R1 = 100, R2 = 190;              // 第二場景：0～216 的數線
  const S = {
    id: 'B', title: '拼大找公倍、切小找公因', icon: '🧱', H: 326,
    key: { tile: T, side: 38, paper: P, sq: SQ, cuts: 3, pieces: 6, a: 24, b: 36, cm: CM },   // 動畫裡標的數字（test 用暴力法對）
    v0: { L: 0, b2: 0, R: 0, cut: 0, motto: 0, sc: 0, k24: 0, k36: 0, hit: 0 },
    steps: [
      { t: '一塊 38×19 的長方形磚，要拼成正方形。邊長最短是多少？', v: { L: 1 } },
      { t: '邊長要同時是 38 和 19 的倍數。再拼一塊，38×38 就是正方形！', v: { b2: 1 }, ms: 1200 },
      { t: '一張 48×32 的紙，要剪成一樣大的正方形、不剩紙。邊長最大是多少？', v: { R: 1 } },
      { t: '邊長要能整除 48，也要能整除 32。一刀刀切，切成 16×16 最大！', v: { cut: 3 }, ms: 2400, lin: ['cut'] },
      { t: '記住口訣：拼成大的找公倍，切成小的找公因。', v: { motto: 1 } },
      { t: '換 24 和 36。兩排倍數一起往上數，兩排都有的就是公倍數。', v: { sc: 1, k24: 9, k36: 6 }, ms: 2800, lin: ['k24', 'k36'] },
      { t: '72、144、216 都是公倍數。用 24×36 的磚拼正方形，最短邊長就是 72！', v: { hit: 1 } }
    ],
    draw(v, h) {
      const C = h.C, cl = h.clamp01, w = T[0] * LS, ht = T[1] * LS, pw = P[0] * RS, ph = P[1] * RS, q = SQ * RS;
      // ── 場景一 左：一塊塊拼到 38×38
      let L = h.text(155, 26, '拼成正方形', { size: 18, fill: C.mute });
      L += h.rect(LX, LY + ht, w, ht, { fill: C.blueL, c: C.blue, w: 2.5, rx: 4 }) + h.text(LX + w / 2, LY + ht * 1.5 + 6, '38×19', { size: 18, fill: C.blue });
      L += h.text(LX - 16, LY + ht * 1.5 + 6, '19', { size: 17, fill: C.mute });
      const y2 = LY - 40 * (1 - v.b2);   // 第二塊從上面滑下來
      L += h.g(v.b2, h.rect(LX, y2, w, ht, { fill: C.purL, c: C.pur, w: 2.5, rx: 4 }) + h.text(LX + w / 2, y2 + ht / 2 + 6, '38×19', { size: 18, fill: C.pur }) + h.text(LX - 16, y2 + ht / 2 + 6, '19', { size: 17, fill: C.mute }));
      L += h.text(LX + w / 2, LY + 2 * ht + 24, '38', { size: 18 });
      L += h.g(v.b2, h.text(LX + w + 22, LY + ht + 6, '38', { size: 20, fill: C.ok }) + h.text(LX + w / 2, 284, '最短邊長＝38', { size: 20, fill: C.ok }));
      // ── 場景一 右：一刀刀切成 16×16（框先畫、切線後畫）
      let R = h.text(476, 26, '剪成正方形', { size: 18, fill: C.mute });
      R += h.rect(RX, RY, pw, ph, { fill: C.okL, c: C.ok, w: 2.5 });
      R += h.text(RX + pw / 2, RY - 10, '48', { size: 18 }) + h.text(RX - 16, RY + ph / 2 + 6, '32', { size: 18 });
      const lo = cl((v.cut - 2.6) / 0.4);
      let lab = '';
      for (let c = 0; c < 3; c++) for (let r = 0; r < 2; r++) lab += h.text(RX + q / 2 + q * c, RY + q / 2 + 6 + q * r, '16×16', { size: 15, fill: C.ok });
      for (let c = 0; c < 3; c++) lab += h.text(RX + q / 2 + q * c, RY + ph + 22, '16', { size: 16, fill: C.no });
      for (let r = 0; r < 2; r++) lab += h.text(RX + pw + 18, RY + q / 2 + 6 + q * r, '16', { size: 16, fill: C.no });
      R += h.g(lo, lab + h.text(476, 284, '最大邊長＝16', { size: 20, fill: C.ok }));
      [[RX + q, RY, RX + q, RY + ph], [RX + 2 * q, RY, RX + 2 * q, RY + ph], [RX, RY + q, RX + pw, RY + q]].forEach((c, j) => {
        const f = cl(v.cut - j);
        if (f <= 0) return;
        const x2 = h.lerp(c[0], c[2], f), y3 = h.lerp(c[1], c[3], f);
        R += h.line(c[0], c[1], x2, y3, { c: C.no, w: 3, dash: '9 6' });
        if (f < 0.98) R += h.text(x2 + (j < 2 ? 0 : 8), y3 + (j < 2 ? 14 : 8), '✂', { size: 22, fill: C.no });
      });
      const s1 = cl(1 - 3 * v.sc);   // 舊場景先快速淡出，避免兩張圖疊太久
      let s = h.g(v.L * s1, L) + h.g(v.R * s1, R) + h.g(v.motto * s1, h.rect(110, 294, 420, 30, { fill: C.priL, rx: 15 }) + h.text(320, 316, '拼成大的找公倍，切成小的找公因', { size: 20, fill: C.pri }));
      // ── 場景二：24、36 的倍數排在同一條數線上，公倍數上下對齊
      let M = '';
      CM.forEach(c => { M += h.line(NX(c), R1, NX(c), R2, { c: C.ok, w: 3, dash: '6 5', op: v.hit }); });
      [R1, R2].forEach(y => { M += h.line(30, y, 620, y, { w: 2.5 }) + h.path(`M630 ${y}l-10 -6v12z`, { fill: C.ink }); });
      M += h.text(40, 60, '24 的倍數', { size: 18, fill: C.blue, anchor: 'start' }) + h.text(40, 250, '36 的倍數', { size: 18, fill: C.pur, anchor: 'start' });
      const row = (step, k, y, ty, col) => {
        const n = Math.floor(k + 1e-6), fr = k - n;
        let o = '';
        for (let j = 1; j <= n + 1; j++) {
          const val = step * j, op = j <= n ? 1 : fr, cm = CM.indexOf(val) >= 0 && v.hit > 0.5;
          if (op <= 0.01 || val > 216) continue;
          o += h.circ(NX(val), y, cm ? 9 : 6, { fill: cm ? C.ok : col, op }) + h.text(NX(val), ty, val, { size: 16, fill: cm ? C.ok : C.ink, op });
        }
        return o;
      };
      M += row(24, v.k24, R1, R1 - 14, C.blue) + row(36, v.k36, R2, R2 + 28, C.pur);
      M += h.g(v.hit, h.text(NX(72), 62, '最小', { size: 17, fill: C.ok }) + h.text(320, 296, '公倍數：72、144、216……　最小是 72', { size: 20, fill: C.ok }));
      return s + h.g(v.sc, M);
    },
    prac: [
      { q: '用長 14 公分、寬 10 公分的長方形磚拼成正方形，正方形的邊長最短是幾公分？', calc: { f: 'lcm', a: 14, b: 10 }, fields: [{ lab: '最短邊長', suf: '公分' }], ans: [70],
        why: '拼成大的找公倍：邊長要同時是 14 和 10 的倍數。14 的倍數 14、28、42、56、70，70 也是 10 的倍數 → 70 公分。' },
      { q: '一張長 42 公分、寬 30 公分的紙，剪成一樣大的正方形，沒有剩下。正方形的邊長最大是幾公分？', calc: { f: 'gcd', a: 42, b: 30 }, fields: [{ lab: '最大邊長', suf: '公分' }], ans: [6],
        why: '切成小的找公因：邊長要能整除 42 也能整除 30。公因數有 1、2、3、6，最大是 6 公分。' },
      { q: '18 和 30 的公倍數中，最小的三個是多少？（由小到大）', calc: { f: 'cm', a: 18, b: 30, n: 3 }, fields: [{ lab: '第 1 個' }, { lab: '第 2 個' }, { lab: '第 3 個' }], ans: [90, 180, 270],
        why: '18 的倍數：18、36、54、72、90……；30 的倍數：30、60、90……。兩排都有的第一個是 90，再來是 180、270。' }
    ]
  };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.B = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
