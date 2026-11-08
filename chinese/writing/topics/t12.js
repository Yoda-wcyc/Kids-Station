/* topics/t12.js — 〈大掃除〉（記事，難度 1）。製作中：第二階段照 CONTRACT 補完（拿掉 wip，加 seg、keys、scope、cards、off、paras、check）。 */
(function (G) {
  'use strict';
  var T = { id: 't12', title: '大掃除', genre: 'event', d: 1, wip: true };
  (G.WR_DATA = G.WR_DATA || { T: {}, L: {} }).T[T.id] = T;
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
})(typeof window !== 'undefined' ? window : globalThis);
