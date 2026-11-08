/* topics/t08.js — 〈我最懷念的人〉（記人，難度 3）。製作中：第二階段照 CONTRACT 補完（拿掉 wip，加 seg、keys、scope、cards、off、paras、check）。 */
(function (G) {
  'use strict';
  var T = { id: 't08', title: '我最懷念的人', genre: 'person', d: 3, wip: true };
  (G.WR_DATA = G.WR_DATA || { T: {}, L: {} }).T[T.id] = T;
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
})(typeof window !== 'undefined' ? window : globalThis);
