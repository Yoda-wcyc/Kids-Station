/* anim/A.js — 🎬 A 範圍裡的倍數（期中 應用 (2)：水梨 380～520 個、16 個一盒，最少 384、最多 512）。介面見 math/anim.js 檔頭。 */
(function (G) {
  'use strict';
  const LO = 380, HI = 520, PER = 16, V0 = 340, V1 = 550, X0 = 30, X1 = 610;
  const X = v => X0 + (v - V0) * (X1 - X0) / (V1 - V0), Y = 150, FIRST = 352;   // 數線從 16×22＝352 開始畫
  const S = {
    id: 'A', title: '範圍裡的倍數', icon: '🍐', H: 240,
    key: { per: PER, lo: LO, hi: HI, out: [368, 528], min: 384, max: 512 },   // 動畫裡標的數字（test 用暴力法對）
    v0: { line: 0, box: 0, k: 0, m368: 0, m384: 0, m512: 0, m528: 0, tip: 0 },
    steps: [
      { t: '一箱水梨大約 380～520 個，每 16 個裝一盒剛好裝完。最少、最多各幾個？', v: { line: 1 } },
      { t: '先在數線上把 380～520 框起來。答案一定要在框裡。', v: { box: 1 } },
      { t: '水梨一定是 16 的倍數，每次跳 16。跳到 16×23＝368，還沒到 380，在框外 ✗', v: { k: 2, m368: 1 }, ms: 1300, lin: ['k'] },
      { t: '再跳一次：16×24＝384，第一個跳進框裡 → 最少 384 個 ✓', v: { k: 3, m384: 1 } },
      { t: '一直跳……16×32＝512，還在框裡 → 最多 512 個 ✓', v: { k: 11, m512: 1 }, ms: 2600, lin: ['k'] },
      { t: '再跳一次是 16×33＝528，超過 520，跳出框外 ✗', v: { k: 12, m528: 1 } },
      { t: '答案要落在框裡！先算 380÷16＝23…12：23 盒不夠，要從 24 盒開始。', v: { tip: 1 } }
    ],
    draw(v, h) {
      const C = h.C, n = Math.floor(v.k + 1e-6), fr = v.k - n, inBox = x => x >= LO && x <= HI;
      // 框（380～520）先畫，數線疊在上面才看得到
      let s = h.g(v.box, h.rect(X(LO), 70, X(HI) - X(LO), 110, { fill: C.priL, c: C.pri, w: 2 + 3 * v.tip, dash: '8 5', rx: 10 }) +
        h.text(X(LO), 60, '380', { fill: C.pri, size: 18 }) + h.text(X(HI), 60, '520', { fill: C.pri, size: 18 }));
      s += h.g(v.line, h.line(X0 - 10, Y, X1 + 14, Y, { w: 3 }) + h.path(`M${X1 + 14} ${Y}l-10 -6v12z`, { fill: C.ink }) + h.text(X0 - 4, Y + 30, '…', { size: 20, fill: C.mute }));
      // 一跳一跳（弧線＋點＋數字）
      for (let j = 0; j < n + 1; j++) {
        const a = FIRST + PER * j, op = j < n ? 1 : fr;
        if (j > 0 && op > 0) s += h.path(`M${X(a - PER)} ${Y}Q${(X(a - PER) + X(a)) / 2} ${Y - 34} ${X(a)} ${Y}`, { c: C.blue, w: 2.5, op });
        if (j < n || fr > 0.95) {
          s += h.circ(X(a), Y, 6, { fill: v.box > 0.5 && inBox(a) ? C.ok : C.mute });
          s += h.text(X(a), Y + (j % 2 ? 46 : 28), a, { size: 15, fill: inBox(a) ? C.ink : C.mute, weight: 600 });
        }
      }
      // ✗／✓ 標記
      // ✓ 在框裡、標籤寫在 ✓ 旁邊（往框中間），不壓到框線
      const mark = (val, op, good, tag, dx) => h.g(op, h.text(X(val), Y - 34, good ? '✓' : '✗', { size: 26, fill: good ? C.ok : C.no }) + (tag ? h.text(X(val) + dx, Y - 37, tag, { size: 17, fill: C.ok }) : ''));
      s += mark(368, v.m368, false) + mark(384, v.m384, true, '最少', 34) + mark(512, v.m512, true, '最多', -34) + mark(528, v.m528, false);
      s += h.g(v.tip, h.text(320, 228, '答案要落在框裡', { size: 20, fill: C.pri }));
      return s;
    },
    prac: [
      { q: '一箱蘋果大約 250～330 顆，每 18 顆裝一盒，剛好裝完。最少有幾顆？最多有幾顆？', calc: { f: 'range', a: 18, lo: 250, hi: 330 }, fields: [{ lab: '最少', suf: '顆' }, { lab: '最多', suf: '顆' }], ans: [252, 324],
        why: '250÷18＝13…16，18×13＝234 不到 250，要 14 盒：18×14＝252。330÷18＝18…6，18×18＝324。' },
      { q: '一批鉛筆大約 400～480 枝，每 14 枝裝一盒，剛好裝完。最少有幾枝？最多有幾枝？', calc: { f: 'range', a: 14, lo: 400, hi: 480 }, fields: [{ lab: '最少', suf: '枝' }, { lab: '最多', suf: '枝' }], ans: [406, 476],
        why: '400÷14＝28…8，14×28＝392 不到 400，要 29 盒：14×29＝406。480÷14＝34…4，14×34＝476。' },
      { q: '一袋彈珠大約 610～700 顆，每 24 顆裝一包，剛好裝完。最少有幾顆？最多有幾顆？', calc: { f: 'range', a: 24, lo: 610, hi: 700 }, fields: [{ lab: '最少', suf: '顆' }, { lab: '最多', suf: '顆' }], ans: [624, 696],
        why: '610÷24＝25…10，24×25＝600 不到 610，要 26 包：24×26＝624。700÷24＝29…4，24×29＝696。' }
    ]
  };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.A = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
