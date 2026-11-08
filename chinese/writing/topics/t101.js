/* topics/t101.js — 〈我的房間〉（寫景，難度 1）。製作中：第三階段照 CONTRACT §5（W1～W5） 補完（拿掉 wip，加 seg、keys、scope、cards、off、paras、check）。 */
(function (G) {
  'use strict';
  var T = { id: 't101', title: '我的房間', genre: 'scene', d: 1, wip: true };
  (G.WR_DATA = G.WR_DATA || { T: {}, L: {} }).T[T.id] = T;
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
})(typeof window !== 'undefined' ? window : globalThis);
