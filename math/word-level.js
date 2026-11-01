/* word-level.js — 數學應用題「循序漸進」的共用小工具（2026-11-01；瀏覽器 window.WL、Node module.exports 共用）。
   每個應用題模板有難度 d：1＝一步驟、數字小；2＝兩步驟或數字較大；3＝要先判斷（最小公倍數／最大公因數）或情境較複雜。
   練習時：難度 1（或更難）第一次就答對累積 NEED（3）題 → 開始混入難度 2；難度 2（或 3）再答對 NEED 題 → 混入難度 3。答錯不扣、不會鎖回去。一輪裡照難度由小到大排。
   進度存在這台的 localStorage kids_word_lv＝{<單元>:{1:題數, 2:題數, 3:題數}}（只是決定出題順序，不同步、不影響單元完成）。
   單元：gw 短除法應用題、mul 倍數與公倍數（應用題＋素養題）、frc 分數 ⑥ 應用題、mx 乘法應用題、bal 天平應用題。 */
(function (G) {
  'use strict';
  var KEY = 'kids_word_lv', NEED = 3;
  // 答對「這個難度或更難」的都算數：倍數「素養題」最簡單就是難度 2，只算 c[1] 會永遠卡在 1、難度 3 出不來
  function ge(c, d) { c = c || {}; var n = 0; for (var k = d; k <= 3; k++) n += +c[k] || 0; return n; }
  function maxD(c) { return ge(c, 1) < NEED ? 1 : ge(c, 2) < NEED ? 2 : 3; }
  function all() { try { var o = JSON.parse(G.localStorage.getItem(KEY)); return o && typeof o === 'object' ? o : {}; } catch (e) { return {}; } }
  function load(u) { var c = all()[u]; return c && typeof c === 'object' ? c : {}; }
  function level(u) { return maxD(load(u)); }
  // 第一次就答對才算（錯題練習不要呼叫）
  function add(u, d, ok) {
    if (!ok || !(d >= 1 && d <= 3)) return;
    try { var o = all(), c = o[u] && typeof o[u] === 'object' ? o[u] : (o[u] = {}); c[d] = (+c[d] || 0) + 1; G.localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { }
  }
  // 照難度由小到大（同難度保持原來的亂數順序）
  function byD(xs, dOf) { return xs.map(function (x, i) { return [dOf(x), i, x]; }).sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; }).map(function (z) { return z[2]; }); }
  function note(u) {
    var c = load(u), m = maxD(c), star = ['', '★☆☆', '★★☆', '★★★'][m];
    return '目前難度 ' + star + (m < 3 ? '：第一次就答對 ' + NEED + ' 題' + (m === 1 ? '★' : '★★') + '（或更難）的題目（還差 ' + Math.max(0, NEED - ge(c, m)) + ' 題），就會加入更難的題目。' : '：三種難度都會出。');
  }
  var WL = { KEY: KEY, NEED: NEED, maxD: maxD, load: load, level: level, add: add, byD: byD, note: note };
  if (typeof module !== 'undefined' && module.exports) module.exports = WL;
  else G.WL = WL;
})(typeof window !== 'undefined' ? window : globalThis);
