/* anim/B.js — 🎬 B 拼大找公倍、切小找公因（佔位：製作中）。介面見 math/anim.js 檔頭與 CONTRACT.md；做好後拿掉 wip、補 steps／draw／prac，並新增 test/anim-B.test.js。 */
(function (G) {
  'use strict';
  const S = { id: 'B', title: '拼大找公倍、切小找公因', icon: '🧱', wip: true, H: 300, v0: {}, steps: [], draw() { return ''; }, prac: [] };
  (G.ANIM = G.ANIM || { segs: {} }).segs = G.ANIM.segs || {};
  G.ANIM.segs.B = S;
  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof window !== 'undefined' ? window : globalThis);
