/* anim/F.js — 🎬 F 分數是平分（期中 選擇 5：7 個蛋糕 27 人平分＝[[7/27]]；比大小 (4)：[[2/3]]＋[[2/3]] 比 [[4/6]] 大）。介面見 math/anim.js 檔頭。 */
(function (G) {
  'use strict';
  const CAKES = 7, PPL = 27, X0 = 70, W = 540, PW = W / PPL, RY = r => 40 + r * 30, PX = 200, PY = 262;   // 場景 1：7 條蛋糕、下面一盤「每人分到」
  const U = 270, L = 60;   // 場景 3：1 整條＝270
  const E = t => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }, seg = (p, a, b) => E((p - a) / (b - a));
  const scOp = (sc, k) => (sc <= k ? seg(sc, k - 0.75, k - 0.55) : 1 - seg(sc, k + 0.1, k + 0.25));   // 場景 k 的不透明度：sc 線性走 1→2→3，舊場景先淡出、新場景再淡入（不重疊）
  const S = {
    id: 'F', title: '分數是平分', icon: '🍰', H: 320,
    key: { cakes: CAKES, people: PPL, share: [7, 27], half: [1, 2], eq: [2, 4], add: [2, 3], sum: [4, 3], wrong: [4, 6] },   // test 用暴力法對
    v0: { k: 0, p2: 0, p3: 0, sc: 1, cut: 0, j: 0, q: 0 },
    steps: [
      { t: '7 個蛋糕平分給 27 人，每人分到幾個蛋糕？', v: { k: 7 }, ms: 1400, lin: ['k'] },
      { t: '先看 1 個蛋糕：平分成 27 份，每人拿 1 份，就是 [[1/27]] 個。', v: { p2: 1 }, ms: 2600, lin: ['p2'] },
      { t: '7 個蛋糕都這樣切，每人每個拿 1 份。一共 7 份，就是 [[7/27]] 個！', v: { p3: 1 }, ms: 2400, lin: ['p3'] },
      { t: '分數就是平分。長條平分 2 份、塗 1 份，是 [[1/2]]。', v: { sc: 2 }, ms: 1200, lin: ['sc'] },
      { t: '每份再切一刀，變成 4 份、塗 2 份。塗色一樣大，所以 [[1/2]]＝[[2/4]]。', v: { cut: 1 }, ms: 1300 },
      { t: '[[2/3]]＋[[2/3]]：把兩條的塗色接起來，超過 1 了，是 [[4/3]]。', v: { sc: 3, j: 1 }, ms: 3400, lin: ['sc', 'j'] },
      { t: '分子分母都加會變 [[4/6]]，可是 [[4/6]] 比 1 小。所以 [[4/3]] 比 [[4/6]] 大！', v: { q: 1 }, ms: 1200 }
    ],
    draw(v, h) {
      const C = h.C;
      let s = '';
      // ── 場景 1：7 個蛋糕，每個切 27 份，每人每個拿 1 份
      const cut0 = Math.min(1, v.p2 / 0.6) * (PPL - 1), take1 = seg(v.p2, 0.65, 1), cutAll = seg(v.p3, 0, 0.4), take7 = seg(v.p3, 0.5, 1);
      let a = h.text(320, 26, '7 個蛋糕，27 人平分', { size: 17, fill: C.mute });
      for (let r = 0; r < CAKES; r++) {
        const y = RY(r), op = h.clamp01(v.k - r);
        let row = h.rect(X0, y, W, 22, { fill: C.priL, c: C.pri, w: 2, rx: 4 }) + h.text(X0 - 18, y + 17, r + 1, { size: 15, fill: C.mute });
        row += h.rect(X0 + 1, y + 1, PW - 1, 20, { fill: C.paper, op: r ? take7 : take1 });   // 拿走的那一份留白
        for (let j = 1; j < PPL; j++) {
          const lop = r ? cutAll : h.clamp01(cut0 - j + 1);
          row += h.line(X0 + PW * j, y + 2, X0 + PW * j, y + 20, { c: C.pri, w: 1.2, op: lop });
        }
        a += h.g(op, row);
      }
      // 每人拿的那一份飛到下面的盤子
      for (let r = 0; r < CAKES; r++) {
        const op = r ? seg(v.p3, 0.4, 0.5) : seg(v.p2, 0.6, 0.66), t = r ? take7 : take1;
        a += h.rect(h.lerp(X0, PX + r * PW, t), h.lerp(RY(r), PY, t), PW, 22, { fill: C.pri, c: C.paper, w: 1.5, op });
      }
      a += h.text(PX - 10, PY + 17, '每人分到', { size: 17, anchor: 'end', op: take1 });
      const ex = PX + h.lerp(1, CAKES, take7) * PW;   // 「＝ 幾分之幾 個」跟在盤子後面
      a += h.text(ex + 18, PY + 18, '＝', { size: 20, op: take1 });
      a += h.frac(ex + 52, PY + 11, 1, PPL, { size: 18, fill: C.pri, op: take1 * (1 - take7) });
      a += h.frac(ex + 52, PY + 11, CAKES, PPL, { size: 18, fill: C.pri, op: take7 });
      a += h.text(ex + 84, PY + 18, '個', { size: 18, op: take1 });
      s += h.g(scOp(v.sc, 1), a);

      // ── 場景 2：½ 再切一刀＝2/4
      const B0 = 100, BW = 440, BY = 50, BH = 64, c = E(v.cut);
      let b = h.rect(B0, BY, BW / 2, BH, { fill: C.pri }) + h.rect(B0, BY, BW, BH, { c: C.ink, w: 3, rx: 2 }) + h.line(B0 + BW / 2, BY, B0 + BW / 2, BY + BH, { w: 3 });
      [1, 3].forEach(n => { b += h.line(B0 + BW * n / 4, BY, B0 + BW * n / 4, BY + BH * c, { w: 3, dash: '7 4', op: c > 0.02 ? 1 : 0 }); });
      b += h.g(c, h.line(B0, BY + BH + 14, B0 + BW / 2, BY + BH + 14, { c: C.pri, w: 3 }) + h.line(B0, BY + BH + 6, B0, BY + BH + 22, { c: C.pri, w: 3 }) +
        h.line(B0 + BW / 2, BY + BH + 6, B0 + BW / 2, BY + BH + 22, { c: C.pri, w: 3 }) + h.text(B0 + BW / 4, BY + BH + 42, '塗色一樣大', { size: 17, fill: C.pri }));
      b += h.text(320, 200, '平分 2 份，塗 1 份', { size: 18, op: 1 - c }) + h.text(320, 200, '平分 4 份，塗 2 份', { size: 18, op: c });
      b += h.frac(h.lerp(320, 270, c), 258, 1, 2, { size: 26, fill: C.pri }) + h.text(320, 268, '＝', { size: 26, op: c }) + h.frac(370, 258, 2, 4, { size: 26, fill: C.pri, op: c });
      s += h.g(scOp(v.sc, 2), b);

      // ── 場景 3：2/3＋2/3 接起來超過 1；4/6 比 1 小
      const jj = seg(v.j, 0.62, 1), q = E(v.q);
      const bar = (y, n, k, fill, op) => {   // 1 整條（L～L+U）平分 n 份、塗 k 份；塗色先畫、框線後畫
        let o = h.rect(L, y, U * k / n, 44, { fill }) + h.rect(L, y, U, 44, { c: C.ink, w: 3 });
        for (let i = 1; i < n; i++) o += h.line(L + U * i / n, y, L + U * i / n, y + 44, { w: 2 });
        return h.g(op, o);
      };
      let d = bar(40, 3, 2, C.pri, 1) + bar(110, 3, 0, C.pri, 1 - jj) + bar(110, 6, 4, C.blue, q);
      for (let i = 0; i < 2; i++) d += h.rect(h.lerp(L + i * U / 3, L + (2 + i) * U / 3, jj), h.lerp(110, 40, jj), U / 3, 44, { fill: C.pri, c: C.ink, w: 2 });
      d += h.line(L + U, 26, L + U, 212, { c: C.no, w: 3, dash: '6 5' });   // 「1」的線最後畫，壓在塗色上才看得到
      d += h.frac(30, 60, 2, 3, { size: 18, op: 1 - jj }) + h.frac(30, 130, 2, 3, { size: 18, op: 1 - jj }) + h.frac(30, 60, 4, 3, { size: 18, fill: C.pri, op: jj });
      d += h.text(500, 69, '超過 1！', { size: 19, fill: C.no, op: jj });
      d += h.frac(30, 130, 4, 6, { size: 18, fill: C.blue, op: q }) + h.text(400, 139, '比 1 小', { size: 19, fill: C.blue, op: q });
      // 尺：0、1
      d += h.line(L, 222, L + U * 1.65, 222, { w: 2 });
      [0, 1, 2, 3, 4].forEach(i => { d += h.line(L + U * i / 3, 222 - (i % 3 ? 5 : 10), L + U * i / 3, 222 + (i % 3 ? 5 : 10), { w: 2 }); });
      d += h.text(L, 252, '0', { size: 17, fill: C.mute }) + h.text(L + U, 252, '1', { size: 17, fill: C.no });
      d += h.g(q, h.frac(255, 290, 4, 3, { size: 22, fill: C.pri }) + h.text(320, 300, '＞', { size: 28 }) + h.frac(385, 290, 4, 6, { size: 22, fill: C.blue }));
      s += h.g(scOp(v.sc, 3), d);
      return s;
    },
    prac: [
      { q: '5 個披薩平分給 12 個人，每人分到幾個披薩？', calc: { f: 'div', a: 5, b: 12 }, opts: ['[[12/5]] 個', '[[1/12]] 個', '[[5/12]] 個', '[[1/5]] 個'], ans: 2,
        why: '1 個披薩切 12 份，每人拿 1 份是 [[1/12]] 個；5 個都切，每人拿 5 份，就是 [[5/12]] 個。' },
      { q: '[[1/3]] 的長條，每一份再切成 2 份。塗色的部分是幾分之幾？', calc: { f: 'eqv', n: 1, d: 3, k: 2 }, opts: ['[[1/6]]', '[[2/6]]', '[[2/3]]'], ans: 1,
        why: '一共變成 3×2＝6 份，塗色的 1 份變成 2 份，所以是 [[2/6]]。份數變多，塗色一樣大：[[1/3]]＝[[2/6]]。' },
      { q: '比大小：[[3/5]]＋[[3/5]] ○ [[6/10]]', calc: { f: 'fsum', a: [3, 5], k: 2, b: [6, 10] }, opts: ['＞', '＜', '＝'], ans: 0,
        why: '[[3/5]]＋[[3/5]]＝[[6/5]]，比 1 大；[[6/10]] 比 1 小。所以 [[6/5]] 比 [[6/10]] 大，選「＞」。' }
    ]
  };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.F = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
