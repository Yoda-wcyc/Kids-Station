/* geo/history.js — 世界史漫畫《時光搖搖車》42 話 → 發生地點（geo/places.js 的 id）。全站只有這一份（2026-11-08）。
   用的地方：geo/history.html（🗺️ 歷史地圖）、geo/unit.html（世界篇重點頁最後「這一洲的歷史故事」）、test/geo.test.js、test/geo-browser.js。
   標題、年代、冊名都看 comics/catalog.js（不在這裡抄一份）。地點＝各話地圖的主要城市（main）；catalog 的 where 寫好幾個地方的，取主要那一個：
   v2e5「長安到西域」→ 長安、v3e4「英格蘭與法國」→ 倫敦、v4e1「南京到印度洋」→ 南京、v4e4「大西洋到加勒比海」→ 瓜納哈尼島、
   v6e3「柏林與非洲」→ 柏林（故事講非洲，所以 ALSO 也算進非洲）、v6e6「世界各地」→ 臺北、v7e3「月球」→ 甘迺迪太空中心、v7e6「全世界」→ 臺灣。 */
(function (root) {
  'use strict';
  var EP = {
    v1e1: 'babylon', v1e2: 'giza', v1e3: 'mohenjoDaro', v1e4: 'yinxu', v1e5: 'tyre', v1e6: 'susa',
    v2e1: 'athens', v2e2: 'pataliputra', v2e3: 'alexandria', v2e4: 'xianyang', v2e5: 'changan', v2e6: 'rome',
    v3e1: 'changan', v3e2: 'baghdad', v3e3: 'kaifeng', v3e4: 'london', v3e5: 'karakorum', v3e6: 'timbuktu',
    v4e1: 'nanjing', v4e2: 'mainz', v4e3: 'cusco', v4e4: 'guanahani', v4e5: 'florence', v4e6: 'anping',
    v5e1: 'padua', v5e2: 'paris', v5e3: 'philadelphia', v5e4: 'paris', v5e5: 'gonaives', v5e6: 'manchester',
    v6e1: 'guangzhou', v6e2: 'tokyo', v6e3: 'berlin', v6e4: 'ypres', v6e5: 'dandi', v6e6: 'taipei',
    v7e1: 'berlin', v7e2: 'washingtonDC', v7e3: 'kennedySC', v7e4: 'hsinchuSciPark', v7e5: 'geneva', v7e6: 'taiwan'
  };
  var ALSO = { v6e3: ['af'] };   // 地點不在這一洲、但故事講這一洲的
  // 落在某一洲的話（依 catalog 的順序）；P＝places、CAT＝COMIC_CATALOG
  function byCo(co, P, CAT) {
    var out = [];
    CAT.vols.forEach(function (v) { v.eps.forEach(function (e, i) {
      var p = P[EP[e.id]];
      if (p && (p.co === co || (ALSO[e.id] || []).indexOf(co) >= 0)) out.push({ id: e.id, vol: v.no, volT: v.t, ep: i + 1, t: e.t, when: e.when, where: e.where, ready: e.ready, place: EP[e.id] });
    }); });
    return out;
  }
  var H = { EP: EP, ALSO: ALSO, byCo: byCo };
  if (typeof module === 'object' && module.exports) module.exports = H;
  root.GeoHistory = H;
})(typeof window !== 'undefined' ? window : globalThis);
