/* anim/D.js — 🎬 D 三角形邊長條件（期中 選擇 3：3、8 的第三邊在 5～11 之間；填充 (2)：7、7、14 圍不起來；竹籤 5、8、12、13 能排 3 種）。介面見 math/anim.js 檔頭。 */
(function (G) {
  'use strict';
  const A = 3, B = 8, U = 30, J = [220, 230], END = [J[0] + B * U, J[1]];   // 關節在 J，8 公分平放、3 公分繞關節轉（1 公分＝30）
  const third = th => Math.sqrt(A * A + B * B - 2 * A * B * Math.cos(th * Math.PI / 180));   // 夾角 th 時的第三邊（公分）
  const NX = c => 180 + (c - 4) * 40, NY = 52;                       // 上方小數線 4～12
  const STICKS = [5, 8, 12, 13], COMBOS = [[5, 8, 12], [5, 8, 13], [5, 12, 13], [8, 12, 13]];
  const S = {
    id: 'D', title: '三角形邊長條件', icon: '📐', H: 320,
    key: { a: A, b: B, lo: B - A, hi: A + B, iso: [7, 7, 14], sticks: STICKS, combos: COMBOS, can: 3, cannot: [[5, 8, 13]], th: [12, 165] },
    v0: { sc1: 0, th: 60, band: 0, sc2: 0, fold: 50, sc3: 0, k: 0, rule: 0 },
    steps: [
      { t: '兩根棒子 3 公分和 8 公分，用關節接在一起。第三邊可以是多長？', v: { sc1: 1 } },
      { t: '把夾角收小，第三邊接近 8－3＝5，三角形被壓扁了！', v: { th: 12 }, ms: 1600 },
      { t: '把夾角張大，第三邊接近 8＋3＝11，又快拉成一直線了！', v: { th: 165 }, ms: 2000 },
      { t: '所以第三邊要比 5 長、比 11 短，在 5～11 之間（5 和 11 都不行）。', v: { th: 75, band: 1 }, ms: 1300 },
      { t: '7、7、14 呢？兩根 7 往下倒，碰到時已經躺平了：7＋7＝14，圍不起來 ✗', v: { sc1: 0, sc2: 1, fold: 0 }, ms: 2400 },
      { t: '竹籤 5、8、12、13 挑 3 根，一組一組試：5＋8＝13 不比 13 長 ✗', v: { sc2: 0, sc3: 1, k: 4 }, ms: 3200, lin: ['k'] },
      { t: '能排 3 種，只有 5、8、13 不行。口訣：兩短邊加起來要比長邊長！', v: { rule: 1 } }
    ],
    draw(v, h) {
      const C = h.C, cl = h.clamp01;
      let s = '';
      // ---- 場景 1：3 和 8 用關節接起來 ----
      if (v.sc1 > 0.01) {
        const r = v.th * Math.PI / 180, T = [J[0] + A * U * Math.cos(r), J[1] - A * U * Math.sin(r)], d = third(v.th);
        let g = '';
        // 小數線 4～12（第三邊的長度跑到哪）
        g += h.line(NX(4) - 10, NY, NX(12) + 10, NY, { w: 2, c: C.mute });
        for (let c = 4; c <= 12; c++) g += h.line(NX(c), NY - 5, NX(c), NY + 5, { w: 2, c: C.mute }) + h.text(NX(c), NY + 24, c, { size: 15, fill: c === 5 || c === 11 ? C.no : C.mute });
        g += h.g(v.band, h.line(NX(5), NY, NX(11), NY, { w: 8, c: C.ok }) + h.circ(NX(5), NY, 7, { fill: C.paper, c: C.no, w: 3 }) + h.circ(NX(11), NY, 7, { fill: C.paper, c: C.no, w: 3 }) +
          h.text(NX(8), NY - 14, '第三邊在這裡', { size: 16, fill: C.ok }));
        g += h.circ(NX(d), NY, 6, { fill: C.pur });
        g += h.text(110, NY + 6, '第三邊', { size: 15, fill: C.pur });
        // 夾角、棒子、第三邊（虛線最後畫，疊在棒子上也看得到）
        g += h.wedge(J[0], J[1], 34, -v.th, v.th, { fill: C.priL, op: 0.9 });
        g += h.line(J[0], J[1], END[0], END[1], { w: 10, c: C.blue }) + h.text((J[0] + END[0]) / 2, J[1] + 34, '8 公分', { size: 17, fill: C.blue });
        g += h.line(J[0], J[1], T[0], T[1], { w: 10, c: C.pri });
        const mx = J[0] + 45 * Math.cos(r) - 24 * Math.sin(r), my = J[1] - 45 * Math.sin(r) - 24 * Math.cos(r);
        g += h.text(mx, my + 6, '3', { size: 18, fill: C.pri });
        g += h.line(T[0], T[1], END[0], END[1], { w: 4, c: C.pur, dash: '9 6' });
        g += h.circ(J[0], J[1], 8, { fill: C.ink }) + h.circ(J[0], J[1], 3, { fill: C.paper });
        const lx = (T[0] + END[0]) / 2 + 10, ly = Math.min(T[1], END[1]) - 18;
        g += h.text(lx, ly, '第三邊 約 ' + d.toFixed(1), { size: 17, fill: C.pur });
        g += h.text(560, 150, '壓扁了！', { size: 20, fill: C.no, op: Math.max(cl((22 - v.th) / 6), cl((v.th - 158) / 6)) });
        s += h.g(v.sc1, g);
      }
      // ---- 場景 2：7、7、14 兩根往下倒 ----
      if (v.sc2 > 0.01) {
        const L = [110, 250], R = [530, 250], r = v.fold * Math.PI / 180, len = 7 * U;
        const tl = [L[0] + len * Math.cos(r), L[1] - 9 - len * Math.sin(r)], tr = [R[0] - len * Math.cos(r), R[1] - 9 - len * Math.sin(r)];
        let g = h.line(L[0], L[1], R[0], R[1], { w: 10, c: C.blue }) + h.text(320, 288, '14 公分', { size: 17, fill: C.blue });
        g += h.line(L[0], L[1] - 9, tl[0], tl[1], { w: 8, c: C.pri }) + h.line(R[0], R[1] - 9, tr[0], tr[1], { w: 8, c: C.pri });
        g += h.text((L[0] + tl[0]) / 2 - 16, (L[1] + tl[1]) / 2 - 14, '7', { size: 18, fill: C.pri }) + h.text((R[0] + tr[0]) / 2 + 16, (R[1] + tr[1]) / 2 - 14, '7', { size: 18, fill: C.pri });
        const gap = cl(v.fold / 6);
        g += h.line(tl[0], tl[1], tr[0], tr[1], { w: 2, c: C.no, dash: '4 5', op: gap }) + h.text(320, tl[1] - 14, '碰不到', { size: 17, fill: C.no, op: gap });
        g += h.text(320, 70, '7＋7＝14，躺平了 ✗', { size: 22, fill: C.no, op: cl(1 - v.fold / 4) });
        s += h.g(v.sc2, g);
      }
      // ---- 場景 3：竹籤 5、8、12、13 一組一組試 ----
      if (v.sc3 > 0.01) {
        const W = 11, X0 = 140;
        let g = h.text(320, 34, '竹籤 5、8、12、13，挑 3 根', { size: 19 });
        COMBOS.forEach(([a, b, c], i) => {
          const op = cl(v.k - i), y = 66 + i * 54, good = a + b > c;
          if (op <= 0.01) return;
          let r = h.text(72, y + 17, a + '、' + b + '、' + c, { size: 17 });
          r += h.rect(X0, y, a * W, 11, { fill: C.pri, rx: 3 }) + h.rect(X0 + a * W, y, b * W, 11, { fill: C.blue, rx: 3 });
          r += h.rect(X0, y + 16, c * W, 11, { fill: C.pur, rx: 3 });
          r += h.text(385, y + 21, a + '＋' + b + '＝' + (a + b) + (good ? ' ＞ ' + c + ' ✓' : ' 不比 ' + c + ' 長 ✗'), { size: 17, anchor: 'start', fill: good ? C.ok : C.no });
          g += h.g(op, r);
        });
        g += h.g(v.rule, h.rect(110, 280, 420, 36, { fill: C.priL, c: C.pri, rx: 10 }) + h.text(320, 305, '能排 3 種：兩短邊加起來要比長邊長', { size: 18, fill: C.ink }));
        s += h.g(v.sc3, g);
      }
      return s;
    },
    prac: [
      { q: '三角形的兩條邊是 4 公分和 10 公分，第三邊可以是多少？', calc: { f: 'tri3', a: 4, b: 10, opts: [6, 9, 14, 15] }, opts: ['6 公分', '9 公分', '14 公分', '15 公分'], ans: 1,
        why: '第三邊要比 10－4＝6 長、比 10＋4＝14 短，只有 9 公分可以。6 和 14 剛好躺平，也不行。' },
      { q: '一個等腰三角形，其中兩條邊是 6 公分和 13 公分，第三邊是幾公分？', calc: { f: 'iso', a: 6, b: 13 }, fields: [{ lab: '第三邊', suf: '公分' }], ans: [13],
        why: '如果第三邊是 6：6＋6＝12 比 13 短，圍不起來。所以是 13：6＋13＝19 比 13 長，可以。' },
      { q: '4 根竹籤長 2、5、8、9 公分，挑 3 根圍三角形，能圍成幾種？（順序不同算同一組）', calc: { f: 'combo', sticks: [2, 5, 8, 9] }, fields: [{ lab: '能圍成', suf: '種' }], ans: [2],
        why: '2＋5＝7 比 8、9 都短，2、5、8 和 2、5、9 不行；2＋8＝10＞9 ✓、5＋8＝13＞9 ✓，共 2 種。' }
    ]
  };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.D = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
