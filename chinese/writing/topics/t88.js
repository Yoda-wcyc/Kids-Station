/* topics/t88.js — 〈我最喜歡的遊戲〉（記物，難度 1）。製作中：第三階段照 CONTRACT §5（W1～W5） 補完（拿掉 wip，加 seg、keys、scope、cards、off、paras、check）。 */
(function (G) {
  'use strict';
  var T = { id: 't88', title: '我最喜歡的遊戲', genre: 'object', d: 1, wip: true };
  (G.WR_DATA = G.WR_DATA || { T: {}, L: {} }).T[T.id] = T;
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
})(typeof window !== 'undefined' ? window : globalThis);
