/* anim/G.js — 🎬 G 小數位值和排大小（期中 填充 (6)：1.0894、0.0523、1.521、0.1 由小到大；另含位值合成 27.83245、8.9971 取到第二位＝9.00）。介面見 math/anim.js 檔頭。 */
(function (G) {
  'use strict';
  const SUM = '27.83245', XS = ['1.0894', '0.0523', '1.521', '0.1'], SORTED = XS.slice().sort((a, b) => a - b);   // 畫面排序用（四個數都夠短，浮點比大小沒問題；test 用整數驗）
  const COLS = ['十位', '個位', '0.1', '0.01', '0.001', '0.0001', '0.00001'], DIG = SUM.replace('.', '').split('');
  const CX = i => (i < 2 ? 40 + i * 76 : 212 + (i - 2) * 76), CHIPS = [['27 個 1', 25, 110], ['8 個 0.1', 155, 120], ['32 個 0.001', 295, 140], ['45 個 0.00001', 455, 160]];
  const NX = x => 50 + x * 270, LBL = [44, 120, 344, 461];   // 數線 0～2；四張卡依大小排的落點
  const RD = [['8', 190, '9'], ['.', 232, '.'], ['9', 270, '0'], ['9', 330, '0'], ['7', 390, ''], ['1', 450, '']];   // 8.9971 → 9.00（[原本, x, 進位後]）
  const E = t => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }, seg = (p, a, b) => E((p - a) / (b - a));
  const scOp = (sc, k) => (sc <= k ? seg(sc, k - 0.75, k - 0.55) : 1 - seg(sc, k + 0.1, k + 0.25));   // 場景 k 的不透明度：sc 線性走 1→2→3，舊場景先淡出、新場景再淡入（不重疊）
  const S = {
    id: 'G', title: '小數位值和排大小', icon: '🔢', H: 320,
    key: { items: [[27, 0], [8, 1], [32, 3], [45, 5]], sum: SUM, xs: XS, sorted: SORTED, round: { x: '8.9971', dp: 2, r: '9.00' } },   // test 用整數暴力法對
    v0: { sc: 1, d1: 0, p2: 0, p3: 0, m: 0, o: 0, r1: 0, cr: 0 },
    steps: [
      { t: '27 個 1、8 個 0.1、32 個 0.001、45 個 0.00001 合起來是多少？先放 27 和 0.8。', v: { d1: 1 }, ms: 1000 },
      { t: '32 個 0.001：每 10 個換 1 個 0.01，變成 0.032。', v: { p2: 1 }, ms: 3200, lin: ['p2'] },
      { t: '45 個 0.00001 也一樣換，變成 0.00045。合起來是 27.83245！', v: { p3: 1 }, ms: 3600, lin: ['p3'] },
      { t: '把 1.0894、0.0523、1.521、0.1 放上數線。由小到大＝從左到右！', v: { sc: 2, m: 1 }, ms: 3600, lin: ['sc', 'm'] },
      { t: '先比整數，再比十分位。0.0523＜0.1＜1.0894＜1.521。', v: { o: 1 }, ms: 1000 },
      { t: '8.9971 取到小數第二位：看第三位是 7，五以上要進位。', v: { sc: 3, r1: 1 }, ms: 1800, lin: ['sc', 'r1'] },
      { t: '第二位 9 加 1 變 10，一路進位到個位。答案是 9.00，兩個 0 要寫！', v: { cr: 3 }, ms: 3200, lin: ['cr'] }
    ],
    draw(v, h) {
      const C = h.C;
      let s = '';
      // ── 場景 1：位值表＋積木（10 個小積木換 1 條，往左一格）
      let a = '';
      CHIPS.forEach(([t, x, w]) => { a += h.rect(x, 12, w, 32, { fill: C.priL, c: C.pri, rx: 16 }) + h.text(x + w / 2, 34, t, { size: 15 }); });
      a += h.rect(40, 62, 552, 28, { fill: C.blueL }) + h.rect(40, 62, 552, 92, { c: C.blue, w: 2, rx: 6 });
      for (let i = 1; i < 7; i++) a += h.line(CX(i), 62, CX(i), 154, { c: C.blue, w: 1.5 });
      a += h.line(192, 62, 192, 154, { c: C.blue, w: 1.5 }) + h.circ(202, 132, 5, { fill: C.ink });   // 小數點
      COLS.forEach((t, i) => { a += h.text(CX(i) + 38, 82, t, { size: 15, fill: C.blue }); });
      const dop = i => (i < 3 ? v.d1 : i < 5 ? seg(v.p2, 0.7, 0.85) : seg(v.p3, 0.7, 0.85));
      DIG.forEach((d, i) => { const op = dop(i); a += h.text(CX(i) + 38, 140 - 22 * (1 - op), d, { size: 36, fill: i < 3 ? C.ink : C.pur, op }); });
      const blk = (col, n, p, fadeNote) => {
        const ap = seg(p, 0, 0.25), sl = seg(p, 0.3, 0.65), f = 1 - seg(p, 0.7, 0.85), R = Math.floor(n / 10);
        let o = '';
        for (let r = 0; r <= R; r++) {
          const y = 162 + r * 9, cnt = r < R ? 10 : n % 10, mg = r < R ? Math.min(1, sl * 4) : 0;
          for (let c = 0; c < cnt; c++) o += h.rect(CX(col) + 3 + c * 7, y, 6, 6, { fill: C.pur, op: ap * f * (1 - mg) });
          if (r < R) o += h.rect(CX(col) + 3 - 76 * sl, y, 69, 6, { fill: C.pur, rx: 2, op: ap * f * mg });
        }
        return o + h.text(320, 232, `10 個 ${COLS[col]} 換 1 個 ${COLS[col - 1]}`, { size: 16, fill: C.pur, op: seg(p, 0.3, 0.4) * fadeNote });
      };
      a += blk(4, 32, v.p2, 1 - seg(v.p3, 0, 0.2)) + blk(6, 45, v.p3, 1);
      a += h.text(320, 285, '合起來是 ' + SUM, { size: 30, fill: C.pri, op: seg(v.p3, 0.85, 1) });
      s += h.g(scOp(v.sc, 1), a);

      // ── 場景 2：四個數放上數線
      let b = h.line(36, 200, 612, 200, { w: 3 }) + h.path('M614 200l-10 -6v12z', { fill: C.ink });
      for (let i = 0; i <= 20; i++) b += h.line(NX(i / 10), 200 - (i % 10 ? 5 : 11), NX(i / 10), 200 + (i % 10 ? 5 : 11), { w: i % 10 ? 1.5 : 2.5 });
      [0, 1, 2].forEach(n => { b += h.text(NX(n), 230, n, { size: 17, fill: C.mute }); });
      const o = E(v.o);
      XS.forEach((x, i) => {
        const t = seg(v.m, 0.42 + i * 0.09, 0.73 + i * 0.09), rk = SORTED.indexOf(x), cx = h.lerp(110 + i * 140, LBL[rk], t), cy = h.lerp(60, 162, t), w = x.length * 10 + 14;
        b += h.line(LBL[rk], 178, NX(+x), 200, { c: C.pri, w: 2, op: t }) + h.circ(NX(+x), 200, 6, { fill: C.pri, op: t });
        b += h.rect(cx - w / 2, cy - 16, w, 32, { fill: C.paper, c: C.pri, w: 2, rx: 8 }) + h.rect(cx - w / 2, cy - 16, w, 32, { fill: +x < 1 ? C.blueL : C.purL, c: C.pri, w: 2, rx: 8, op: o });
        b += h.text(cx, cy + 6, x, { size: 17 });
      });
      b += h.g(seg(v.m, 0.88, 1), h.text(320, 98, '由小到大＝從左到右', { size: 19, fill: C.pri }) + h.line(160, 118, 470, 118, { c: C.pri, w: 3 }) + h.path('M482 118l-13 -7v14z', { fill: C.pri }) +
        h.text(144, 124, '小', { size: 17, fill: C.pri }) + h.text(498, 124, '大', { size: 17, fill: C.pri }));
      b += h.g(o, h.text(NX(0.5), 254, '整數是 0', { size: 15, fill: C.blue }) + h.text(NX(1.5), 254, '整數是 1', { size: 15, fill: C.pur }) +
        h.text(320, 298, SORTED.join(' ＜ '), { size: 24, fill: C.pri }));
      s += h.g(scOp(v.sc, 2), b);

      // ── 場景 3：8.9971 取到第二位，進位一路連鎖
      const r1 = seg(v.r1, 0.5, 0.9), st = [seg(v.cr, 0, 1), seg(v.cr, 1, 2), seg(v.cr, 2, 3)];
      let d = h.circ(390, 132, 34, { fill: C.priL, op: r1 * (1 - st[0]) }) + h.line(360, 96, 360, 200, { c: C.no, w: 2.5, dash: '6 5', op: r1 });
      [['個位', 190], ['第一位', 270], ['第二位', 330], ['第三位', 390], ['第四位', 450]].forEach(([t, x]) => { d += h.text(x, 192, t, { size: 15, fill: C.mute }); });
      // 哪一位在哪個階段翻：第二位＝st0、第一位＝st1、個位＝st2；第三、四位在 st0 淡掉
      const when = { 0: 2, 2: 1, 3: 0 };
      RD.forEach(([o0, x, o1], i) => {
        if (i >= 4) { d += h.text(x, 150, o0, { size: 54, fill: i === 4 ? C.no : C.ink, op: 1 - st[0] }); return; }
        if (!(i in when)) { d += h.text(x, 150, o0, { size: 54 }); return; }
        const t = st[when[i]];
        d += h.text(x, 150 - 40 * t, o0, { size: 54, op: 1 - t }) + h.text(x, 150 + 40 * (1 - t), o1, { size: 54, fill: C.pri, op: t });
      });
      [[390, 330], [330, 270], [270, 190]].forEach(([x1, x2], i) => {
        const op = Math.min(1, st[i] * 3);
        d += h.path(`M${x1} 98Q${(x1 + x2) / 2} 58 ${x2 + 6} 96`, { c: C.pri, w: 2.5, op }) + h.path(`M${x2 + 6} 96l-2 -12l10 6z`, { fill: C.pri, op }) + h.text((x1 + x2) / 2, 62, '+1', { size: 16, fill: C.pri, op });
      });
      d += h.text(320, 238, '第三位是 7，五以上要進位', { size: 18, fill: C.no, op: r1 * (1 - st[0]) });
      d += h.g(seg(v.cr, 2.5, 3), h.text(320, 262, '8.9971 → 約 9.00', { size: 28, fill: C.pri }) + h.text(320, 298, '取到第二位，9.00 的兩個 0 都要寫', { size: 16, fill: C.mute }));
      s += h.g(scOp(v.sc, 3), d);
      return s;
    },
    prac: [
      { q: '15 個 1、6 個 0.1、24 個 0.001 和 37 個 0.00001 合起來是多少？', calc: { f: 'place', items: [[15, 0], [6, 1], [24, 3], [37, 5]] }, fields: [{ t: 'dec' }], ans: ['15.62437'],
        why: '15＋0.6＋0.024＋0.00037：24 個 0.001＝0.024，37 個 0.00001＝0.00037。每一位放好，合起來是 15.62437。' },
      { q: '把 2.4、0.38、2.067、0.0912 由小到大排，哪一個對？', calc: { f: 'dorder', xs: ['2.4', '0.38', '2.067', '0.0912'] },
        opts: ['0.38＜0.0912＜2.4＜2.067', '0.0912＜0.38＜2.067＜2.4', '2.4＜2.067＜0.38＜0.0912'], ans: 1,
        why: '先比整數：0.38、0.0912 是 0，比較小。再比十分位：0.0912 的十分位是 0，0.38 是 3；2.067 的十分位是 0，2.4 是 4。' },
      { q: '4.7953 用四捨五入法取到小數第二位是多少？', calc: { f: 'round', x: '4.7953', dp: 2 }, fields: [{ t: 'dec' }], ans: ['4.80'],
        why: '看第三位是 5，五以上要進位：第二位 9 加 1 變 10，再進給第一位，7 變 8。答案是 4.80，第二位的 0 要寫。' }
    ]
  };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.G = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
