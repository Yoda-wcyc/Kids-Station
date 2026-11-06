/* anim/C.js — 🎬 C 公車何時再同時開（期中：每 30 分、每 45 分一班，9:20 同時開 → 過 90 分＝10:50 再同時開）。介面見 math/anim.js 檔頭。 */
(function (G) {
  'use strict';
  const PA = 30, PB = 45, T0 = 9 * 60 + 20, MEET = 90, END = 100;
  const X = m => 80 + m * 5.4, YA = 92, YB = 197;
  const hm = m => { const t = T0 + m; return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
  const S = {
    id: 'C', title: '公車何時再同時開', icon: '🚌', H: 312,
    key: { a: PA, b: PB, start: hm(0), lcm: MEET, meet: hm(MEET), A: [0, 30, 60, 90], B: [0, 45, 90] },   // 動畫裡標的數字（test 用暴力法對）
    v0: { ax: 0, t: 0, mul: 0, link: 0 },
    steps: [
      { t: '橘車每 30 分開一班，藍車每 45 分開一班。9:20 兩台同時開。', v: { ax: 1 } },
      { t: '時間往前走。9:50 橘車開，藍車還沒到。', v: { t: 30 }, ms: 1400, lin: ['t'] },
      { t: '10:05 藍車開，10:20 橘車開。還是沒碰在一起。', v: { t: 60 }, ms: 1600, lin: ['t'] },
      { t: '10:50 兩台又同時開了！從 9:20 算起，剛好 90 分鐘。', v: { t: MEET }, ms: 1800, lin: ['t'] },
      { t: '90 是 30 的倍數（30×3），也是 45 的倍數（45×2）。', v: { mul: 1 } },
      { t: '這就是 B 段學的公倍數！30 和 45 最小的公倍數是 90。', v: { link: 1 } }
    ],
    draw(v, h) {
      const C = h.C, meet = h.clamp01((v.t - MEET + 5) / 5);   // 游標走到 90 分才亮綠框
      let s = h.rect(X(MEET) - 30, 52, 60, 170, { fill: C.okL, c: C.ok, w: 2, rx: 12, op: meet }) + h.text(X(MEET), 40, '同時開！', { size: 18, fill: C.ok, op: meet });
      [[YA, C.pri, PA, '橘車：每 30 分一班', 40], [YB, C.blue, PB, '藍車：每 45 分一班', 145]].forEach(([y, col, per, lab, ty]) => {
        s += h.text(20, ty, lab, { size: 18, fill: col, anchor: 'start' });
        s += h.line(X(0) - 10, y, X(END), y, { c: C.mute, w: 3 }) + h.line(X(0), y, X(v.t), y, { c: col, w: 5 });
        for (let m = 0; m <= END; m += per) {
          const lit = v.t >= m - 0.01;
          s += lit ? h.circ(X(m), y, 9, { fill: m === MEET && meet > 0.5 ? C.ok : col }) + h.text(X(m), y - 17, hm(m), { size: 16 }) : h.circ(X(m), y, 7, { fill: C.paper, c: C.mute, w: 2 });
        }
      });
      // 時間游標
      const cx = X(v.t), m0 = Math.round(v.t);
      // 游標避開兩排的時刻文字，只畫在點下方
      s += h.line(cx, YA + 12, cx, YB - 34, { c: C.mute, w: 2, dash: '5 5' }) + h.line(cx, YB + 12, cx, 214, { c: C.mute, w: 2, dash: '5 5' }) + h.text(Math.max(110, Math.min(540, cx)), 246,`經過 ${m0} 分（${hm(m0)}）`, { size: 17, fill: C.mute });
      s += h.g(v.mul, h.text(320, 272, '30×3＝90　　45×2＝90', { size: 20, fill: C.ink }));
      s += h.g(v.link, h.text(320, 304, '公倍數！9:20＋90 分＝10:50', { size: 20, fill: C.ok }));
      return h.g(v.ax, s);
    },
    prac: [
      { q: '橘車每 20 分開一班，藍車每 25 分開一班，8:10 兩台同時開。下一次同時開是幾點幾分？', calc: { f: 'bus', a: 20, b: 25, h: 8, m: 10 }, fields: [{ suf: '點' }, { suf: '分' }], ans: [9, 50],
        why: '找 20 和 25 的公倍數：20 的倍數 20、40、60、80、100，100 也是 25 的倍數。8:10 過 100 分（1 小時 40 分）是 9:50。' },
      { q: '一路公車每 12 分開一班，另一路每 18 分開一班，7:00 同時開。下一次同時開是幾點幾分？', calc: { f: 'bus', a: 12, b: 18, h: 7, m: 0 }, fields: [{ suf: '點' }, { suf: '分' }], ans: [7, 36],
        why: '找 12 和 18 的公倍數：12 的倍數 12、24、36，36 也是 18 的倍數。7:00 過 36 分是 7:36。' },
      { q: '小火車每 40 分開一班，大火車每 60 分開一班，10:15 同時開。下一次同時開是幾點幾分？', calc: { f: 'bus', a: 40, b: 60, h: 10, m: 15 }, fields: [{ suf: '點' }, { suf: '分' }], ans: [12, 15],
        why: '找 40 和 60 的公倍數：40 的倍數 40、80、120，120 也是 60 的倍數。10:15 過 120 分（2 小時）是 12:15。' }
    ]
  };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.C = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
