/* topics/t61.js — 〈我的小老師〉（記人，難度 2）。製作中：第三階段照 CONTRACT §5（W1～W5） 補完（拿掉 wip，加 seg、keys、scope、cards、off、paras、check）。 */
(function (G) {
  'use strict';
  var T = { id: 't61', title: '我的小老師', genre: 'person', d: 2, wip: true };
  (G.WR_DATA = G.WR_DATA || { T: {}, L: {} }).T[T.id] = T;
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
})(typeof window !== 'undefined' ? window : globalThis);
