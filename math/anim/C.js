/* anim/C.js — 🎬 C 公車何時再同時開（佔位：製作中）。介面見 math/anim.js 檔頭與 CONTRACT.md；做好後拿掉 wip、補 steps／draw／prac，並新增 test/anim-C.test.js。 */
(function (G) {
  'use strict';
  const S = { id: 'C', title: '公車何時再同時開', icon: '🚌', wip: true, H: 300, v0: {}, steps: [], draw() { return ''; }, prac: [] };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.C = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
