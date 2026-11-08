/* topics/t24.js — 〈我最喜歡的植物〉（記物，難度 2）。製作中：第二階段照 CONTRACT 補完（拿掉 wip，加 seg、keys、scope、cards、off、paras、check）。 */
(function (G) {
  'use strict';
  var T = { id: 't24', title: '我最喜歡的植物', genre: 'object', d: 2, wip: true };
  (G.WR_DATA = G.WR_DATA || { T: {}, L: {} }).T[T.id] = T;
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
})(typeof window !== 'undefined' ? window : globalThis);
