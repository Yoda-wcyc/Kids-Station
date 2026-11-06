/* anim/D.js — 🎬 D 三角形邊長條件（佔位：製作中）。介面見 math/anim.js 檔頭與 CONTRACT.md；做好後拿掉 wip、補 steps／draw／prac，並新增 test/anim-D.test.js。 */
(function (G) {
  'use strict';
  const S = { id: 'D', title: '三角形邊長條件', icon: '📐', wip: true, H: 300, v0: {}, steps: [], draw() { return ''; }, prac: [] };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.D = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
