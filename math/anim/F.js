/* anim/F.js — 🎬 F 分數是平分（佔位：製作中）。介面見 math/anim.js 檔頭與 CONTRACT.md；做好後拿掉 wip、補 steps／draw／prac，並新增 test/anim-F.test.js。 */
(function (G) {
  'use strict';
  const S = { id: 'F', title: '分數是平分', icon: '🍰', wip: true, H: 300, v0: {}, steps: [], draw() { return ''; }, prac: [] };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.F = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
