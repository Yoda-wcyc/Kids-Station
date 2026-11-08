/* topics/t52.js — 〈我的好鄰居〉（記人，難度 1）。製作中：第三階段照 CONTRACT §5（W1～W5） 補完（拿掉 wip，加 seg、keys、scope、cards、off、paras、check）。 */
(function (G) {
  'use strict';
  var T = { id: 't52', title: '我的好鄰居', genre: 'person', d: 1, wip: true };
  (G.WR_DATA = G.WR_DATA || { T: {}, L: {} }).T[T.id] = T;
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
})(typeof window !== 'undefined' ? window : globalThis);
