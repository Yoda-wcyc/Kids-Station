/* geo/geo.js — 🌍 地理單元頁的引擎（2026-11-08）：地圖、四種題型、練習／測驗流程、完成紀錄、學習幣、每日紀錄。
   規格與資料格式：geo/CONTRACT.md（寫單元前先讀）。資料：geo/data/<單元>.js 呼叫 Geo.add({...})；地圖：geo/maps/tw.js、world.js；地點：geo/places.js。
   題型 type：tap 點地圖選地方／drag 拖地名到地圖／mc 看圖選答（選擇題配地圖）／puzzle 地圖拼圖（把形狀拖回原位）。
   - 拖拉（drag、puzzle）：觸控、滑鼠都走 pointer events；移動超過 8px 才算拖，不然當成點一下（先點地名／拼圖片，再點地圖上的位置也可以）。
   - 判分只在 check()：tap 只認圓圈＋寬限 SLOP，沒點到圓圈不判分；validate() 保證同一題的圓圈、拼圖位置不重疊，所以答案唯一。
   - 重現：選項、地名卡、拼圖片的順序都由題目 id 決定（perm），錯了再做畫面一樣。
   流程：📖 重點（免登入）／✏️ 練習（30 題分 3 組，每組 10 題、一題一題、答完馬上看解說）／📝 單元測驗（10 題，答完全部才看分數和解說）。
   完成（completion.js geo:<單元>）：練習 3 組各有一輪 ≥ 80%＋測驗 ≥ 80 分；紀錄 KidsDone.record('geo', '<單元>p1'～'p3' 最佳 %、'<單元>t' 最高分)，跟著 kids_done 同步。
   學習幣：每題 KidsCoins.answer(ok, 'social')（地理算社會科的分鐘數，後端 tick 白名單不用改）；一組／一次測驗結束送 practice_round 'geo:practice'／'geo:test'
   （後端 Code.gs 白名單要加，家長部署前送了會被當 bad_event 丟掉，不影響練習）。每日紀錄：KidsDaily.rec('geo', ok)（家長頁「地理」一列）。
   純函式（view、pinXY、hitAt、check、validate、perm…）node 也能跑：test/geo.test.js。 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Geo = factory();
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var W = 500, R_PIN = 26, R_AREA = 34, SLOP = 8, PASS = 80, GROUP = 10, N_PRAC = 30, N_TEST = 10;
  var TYPES = ['tap', 'drag', 'mc', 'puzzle'];
  var LAB = { tap: '📍 點地圖', drag: '🏷️ 拖地名', mc: '🗺️ 看圖選答', puzzle: '🧩 地圖拼圖' };
  var TW_VIEW = [117.9, 21.6, 122.3, 26.5];   // 臺灣地圖預設範圍（含金門、馬祖、澎湖、綠島、蘭嶼）
  var LIM = { q: 70, opt: 24, why: 90, label: 10, learnT: 16, learnP: 140 };   // 字數上限（validate 擋；CONTRACT.md 有寫）
  var UNIT_RE = /^(m[1-5]|t[1-6]|w[1-7])$/;
  var units = {};

  /* ---------- 小工具 ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function hash(s) { var h = 2166136261; s = String(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
  // 由 key 決定的打散（同一題每次都一樣）；avoidId＝不要剛好是原順序
  function perm(key, n, avoidId) {
    var a = [], s = hash(key) || 1, i;
    for (i = 0; i < n; i++) a.push(i);
    for (i = n - 1; i > 0; i--) { s = (Math.imul(s, 1103515245) + 12345) >>> 0; var j = s % (i + 1), t = a[i]; a[i] = a[j]; a[j] = t; }
    if (avoidId && n > 1 && a.every(function (v, k) { return v === k; })) a.push(a.shift());
    return a;
  }
  function r1(v) { return Math.round(v * 10) / 10; }
  function len(s) { return Array.from(String(s || '')).length; }
  function G() { return typeof window !== 'undefined' ? window : globalThis; }
  function maps() { return G().GeoMaps || {}; }
  function places() { return G().GeoPlaces || {}; }

  /* ---------- 投影：經緯度 → 圖上座標（寬 W） ---------- */
  // fig.map 'tw'（預設範圍 TW_VIEW）或 'world'（預設全世界）；fig.box＝[西, 南, 東, 北] 經緯度；fig.proj 'polar'＝南極為中心的方位等距（fig.edge＝最外圈緯度，例 -55）
  // 等距圓柱：範圍南北不到 60 度時，經度乘 cos(中間緯度)（形狀比較不扁）；整個世界（≥ 60 度）不乘，經緯線是正方形格子（教經緯度用）
  function view(fig) {
    fig = fig || {};
    if (fig.svg != null && !fig.map) return { w: fig.w || W, h: fig.h || W, P: function (x, y) { return [x, y]; }, schem: true };
    if (fig.proj === 'polar') {
      var e = fig.edge == null ? -55 : fig.edge, c = W / 2, rr = (W / 2 - 14) / (e + 90);
      return { w: W, h: W, polar: true, edge: e, box: [-180, -90, 180, e], P: function (lon, lat) { var r = (lat + 90) * rr, a = lon * Math.PI / 180; return [r1(c + r * Math.sin(a)), r1(c - r * Math.cos(a))]; } };
    }
    var b = fig.box || (fig.map === 'tw' ? TW_VIEW : [-180, -90, 180, 90]), k = fig.k != null ? fig.k : (b[3] - b[1] < 60 ? Math.cos((b[1] + b[3]) / 2 * Math.PI / 180) : 1);
    var s = W / ((b[2] - b[0]) * k), h = Math.round((b[3] - b[1]) * s);
    return { w: W, h: h, box: b, k: k, P: function (lon, lat) { return [r1((lon - b[0]) * k * s), r1((b[3] - lat) * s)]; } };
  }
  function inView(V, x, y) { return x >= -2 && y >= -2 && x <= V.w + 2 && y <= V.h + 2; }

  /* ---------- 地點、圓圈 ---------- */
  // pin：places.js 的 id，或 {id, n, lon, lat}（經緯度），或 {id, n, x, y}（示意圖座標）；area 1＝大圈
  // 範圍跨換日線（box 東邊 > 180 或西邊 < −180）時，框外的點換到另一邊的經度（例 太平洋置中的圖上，夏威夷 −157 → 203）
  function wrapLon(V, lon) {
    if (!V.box || V.polar) return lon;
    if (lon < V.box[0] && lon + 360 <= V.box[2]) return lon + 360;
    if (lon > V.box[2] && lon - 360 >= V.box[0]) return lon - 360;
    return lon;
  }
  function pinXY(pin, V) {
    var p = typeof pin === 'string' ? places()[pin] : pin; if (!p) return null;
    var id = typeof pin === 'string' ? pin : p.id, xy = p.x != null ? [p.x, p.y] : V.P(wrapLon(V, p.lon), p.lat);
    return { id: id, x: xy[0], y: xy[1], r: p.area ? R_AREA : R_PIN, n: p.n || id };
  }
  function pinsOf(q, V) { return (q.pins || []).map(function (p) { return pinXY(p, V); }); }
  function pinName(q, id) { var p = (q.pins || []).map(function (x) { return typeof x === 'string' ? (places()[x] ? { id: x, n: places()[x].n } : null) : x; }).filter(function (x) { return x && x.id === id; })[0]; return p ? (p.n || id) : id; }
  // 點到哪一個圓圈（含寬限）；都沒點到回 null（不判分）
  function hitAt(sp, x, y) { var hit = null, bd = 1e9; sp.forEach(function (s) { var d = Math.hypot(x - s.x, y - s.y); if (d <= s.r + SLOP && d < bd) { bd = d; hit = s.id; } }); return hit; }
  function noOverlap(sp) {
    for (var i = 0; i < sp.length; i++) for (var j = i + 1; j < sp.length; j++)
      if (Math.hypot(sp[i].x - sp[j].x, sp[i].y - sp[j].y) < sp[i].r + sp[j].r + 2 * SLOP) return false;
    return true;
  }

  /* ---------- 形狀（拼圖片、亮起來的區域） ---------- */
  // shape：{tw:'penghu'}（臺灣地圖的一塊：main 本島、penghu 澎湖、kinmen 金門、ludao 綠島、lanyu 蘭嶼、waisan 外傘頂洲）／
  //        {w:'392'}（世界地圖的國家，ISO 數字代碼；加 c:'as' 只取那一洲的部分）／{c:'as'}（一整洲）／{d:'M…Z'}（示意圖座標的 path）
  function ringPts(r, q, V) { var o = []; for (var i = 0; i + 1 < r.length; i += 2) o.push(V.P(r[i] / q, r[i + 1] / q)); return o; }
  function ringsOf(shape) {
    var M = maps();
    if (shape.tw) { var t = M.tw; return t && t.land[shape.tw] ? { q: t.q, rings: t.land[shape.tw] } : null; }
    if (shape.w || shape.c) {
      var w = M.world; if (!w) return null;
      var rs = []; w.countries.forEach(function (c) { if ((!shape.w || c.id === shape.w) && (!shape.c || c.c === shape.c)) c.r.forEach(function (r) { rs.push(r.h || r); }); });
      return rs.length ? { q: w.q, rings: rs } : null;
    }
    return null;
  }
  // 經度跨 ±180 的範圍（例 太平洋置中）：整個環都在框的西邊就 +360、東邊就 −360
  function wrapShift(r, q, V) {
    if (!V.box || V.polar) return 0;
    var mn = 1e9, mx = -1e9; for (var i = 0; i < r.length; i += 2) { mn = Math.min(mn, r[i]); mx = Math.max(mx, r[i]); }
    if (V.box[2] > 180 && mx / q < V.box[0]) return 360;
    if (V.box[0] < -180 && mn / q > V.box[2]) return -360;
    return 0;
  }
  function pathOf(rings, q, V) {
    var d = '';
    rings.forEach(function (r) {
      if (V.polar) { var mn = 90; for (var j = 1; j < r.length; j += 2) mn = Math.min(mn, r[j] / q); if (mn > V.edge) return; }   // 南極圖：碰不到圓圈裡的環不畫
      var sh = wrapShift(r, q, V), o = [];
      for (var i = 0; i + 1 < r.length; i += 2) {
        var lon = r[i] / q + sh, lat = r[i + 1] / q;
        if (V.polar && lat < -89.9) continue;   // 繞著南極點的環（南極洲）用 −90 封口；南極圖上那兩點都是圓心，略過才不會畫出接縫線
        if (V.polar && lat > V.edge + 1) lat = V.edge + 1;
        o.push(V.P(lon, lat));
      }
      d += 'M' + o.map(function (p) { return p[0] + ' ' + p[1]; }).join('L') + 'Z';
    });
    return d;
  }
  function shapePath(shape, V) {
    if (shape.d) return shape.d;
    var g = ringsOf(shape); return g ? pathOf(g.rings, g.q, V) : '';
  }
  // 形狀的外接框（圖上座標）
  function pathBox(d) {
    var n = String(d).match(/-?\d+(\.\d+)?/g) || [], x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (var i = 0; i + 1 < n.length; i += 2) { var x = +n[i], y = +n[i + 1]; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    return { x0: x0, y0: y0, x1: x1, y1: y1, cx: r1((x0 + x1) / 2), cy: r1((y0 + y1) / 2), w: x1 - x0, h: y1 - y0 };
  }
  // 最大的那一塊（一條 path 裡好幾個 M）的外接框：亞洲有跨過 180 度的楚科奇、大洋洲有夏威夷，用最大塊定中心才不會跑掉
  function mainBox(d) { var best = null; String(d).split(/(?=M)/).forEach(function (s) { var b = pathBox(s); if (b.w >= 0 && (!best || b.w * b.h > best.w * best.h)) best = b; }); return best || pathBox(d); }
  // 拼圖：每片的原位（slot）＝最大那一塊的外接框中心；吸附半徑至少 40
  function slotsOf(q, V) {
    return (q.pieces || []).map(function (p) { var d = shapePath(p.shape, V), b = mainBox(d); return { id: p.id, d: d, b: b, x: b.cx, y: b.cy, r: Math.max(40, Math.min(90, Math.max(b.w, b.h) * 0.6)) }; });
  }
  function nearSlot(sl, x, y) { var best = null, bd = 1e9; sl.forEach(function (s) { var d = Math.hypot(x - s.x, y - s.y); if (d <= s.r && d < bd) { bd = d; best = s.id; } }); return best; }

  /* ---------- 判分 ---------- */
  function initState(q) {
    if (q.type === 'drag') return { at: q.items.map(function () { return null; }), sel: null };
    if (q.type === 'puzzle') return { at: q.pieces.map(function () { return null; }), sel: null };
    return { pick: null };
  }
  function ready(q, st) { return q.type === 'drag' || q.type === 'puzzle' ? st.at.every(function (v) { return v != null; }) : st.pick != null; }
  function check(q, st) {
    if (q.type === 'tap' || q.type === 'mc') return st.pick === q.a;
    if (q.type === 'drag') return q.items.every(function (it, i) { return st.at[i] === it.to; });
    if (q.type === 'puzzle') return q.pieces.every(function (p, i) { return st.at[i] === p.id; });
    return false;
  }
  function ansText(q) {
    if (q.type === 'mc') return q.opts[q.a];
    if (q.type === 'tap') return pinName(q, q.a);
    if (q.type === 'drag') return q.items.map(function (it) { return it.t; }).join('、') + ' 放到地圖上標的位置';
    if (q.type === 'puzzle') return '每一片放回自己原來的位置（看看形狀）';
    return '';
  }

  /* ---------- 資料檢查（test/geo.test.js 會跑；寫單元時用來自己檢查）---------- */
  function validate(u) {
    var errs = [], P = places(), err = function (m) { errs.push(u.id + ' ' + m); };
    if (!UNIT_RE.test(u.id || '')) { err('單元 id 要是 m1～m5、t1～t6、w1～w7'); return errs; }
    if (!Array.isArray(u.learn) || u.learn.length < 3 || u.learn.length > 5) err('learn 要 3～5 張');
    (u.learn || []).forEach(function (c, i) { if (!c.t || len(c.t) > LIM.learnT) err('learn[' + i + '].t 要有、≤ ' + LIM.learnT + ' 字'); if (!c.p || len(c.p) > LIM.learnP) err('learn[' + i + '].p 要有、≤ ' + LIM.learnP + ' 字');
      if (c.fig) { var LV = view(c.fig); (c.fig.names || []).concat((c.fig.marks || []).map(function (m) { return m.p; })).forEach(function (n) { var s = pinXY(n, LV); if (!s || !inView(LV, s.x, s.y)) err('learn[' + i + '] names／marks 找不到或在圖外 ' + JSON.stringify(n)); }); } });
    if (!Array.isArray(u.practice) || u.practice.length !== N_PRAC) err('practice 要剛好 ' + N_PRAC + ' 題');
    if (!Array.isArray(u.test) || u.test.length !== N_TEST) err('test 要剛好 ' + N_TEST + ' 題');
    var seen = {}, all = (u.practice || []).concat(u.test || []), mcN = 0, longN = 0;
    all.forEach(function (q, i) {
      var isT = i >= (u.practice || []).length, want = u.id + '-' + (isT ? 't' : 'p') + String(isT ? i - u.practice.length + 1 : i + 1).padStart(2, '0'), tag = q.id || want;
      if (q.id !== want) err(tag + ' id 要是 ' + want);
      if (seen[q.id]) err(tag + ' id 重複'); seen[q.id] = 1;
      if (TYPES.indexOf(q.type) < 0) { err(tag + ' type 不對'); return; }
      if (!q.q || len(q.q) > LIM.q) err(tag + ' q 要有、≤ ' + LIM.q + ' 字（現在 ' + len(q.q) + '）');
      if (!q.why || len(q.why) > LIM.why) err(tag + ' why 要有、≤ ' + LIM.why + ' 字（現在 ' + len(q.why) + '）');
      if (q.type !== 'mc' && !q.fig) err(tag + ' 這種題型要有 fig');
      var V = view(q.fig);
      if (q.fig && q.fig.map && ['tw', 'world'].indexOf(q.fig.map) < 0) err(tag + ' fig.map 只能是 tw、world');
      if (q.fig && q.fig.map && !q.fig.box && q.fig.map === 'world' && !q.fig.proj && (q.type === 'tap' || q.type === 'drag')) { /* 全世界也可以，只是圈圈會很擠 */ }
      if (q.fig && q.fig.marks) q.fig.marks.forEach(function (m) { var s = pinXY(m.p, V); if (!s) err(tag + ' marks 找不到地點 ' + JSON.stringify(m.p)); else if (!inView(V, s.x, s.y)) err(tag + ' marks 在圖外 ' + JSON.stringify(m.p)); });
      if (q.fig && q.fig.names) q.fig.names.forEach(function (n) { var s = pinXY(n, V); if (!s) err(tag + ' names 找不到地點 ' + JSON.stringify(n)); else if (!inView(V, s.x, s.y)) err(tag + ' names 在圖外 ' + JSON.stringify(n)); });
      if (q.type === 'tap' || q.type === 'drag') {
        var sp = pinsOf(q, V);
        if (sp.length < 2 || sp.length > 6) err(tag + ' pins 要 2～6 個');
        sp.forEach(function (s, k) { if (!s) err(tag + ' pins[' + k + '] 找不到（places.js 沒有這個 id？）'); else if (!inView(V, s.x, s.y)) err(tag + ' pins ' + s.id + ' 在圖外'); });
        if (sp.every(Boolean)) { if (!noOverlap(sp)) err(tag + ' 圓圈太近會重疊（換地點或放大範圍 fig.box）'); var ids = sp.map(function (s) { return s.id; }); if (new Set(ids).size !== ids.length) err(tag + ' pins id 重複'); }
        if (q.type === 'tap' && !sp.some(function (s) { return s && s.id === q.a; })) err(tag + ' a 要是 pins 裡的一個');
      }
      if (q.type === 'drag') {
        if (!Array.isArray(q.items) || q.items.length < 2 || q.items.length > 4) err(tag + ' items 要 2～4 個');
        else {
          var to = q.items.map(function (it) { return it.to; });
          if (new Set(to).size !== to.length) err(tag + ' items 的 to 不能重複');
          q.items.forEach(function (it) { if (!it.t || len(it.t) > LIM.label) err(tag + ' 地名卡 ≤ ' + LIM.label + ' 字：' + it.t); if (!pinsOf(q, V).some(function (s) { return s && s.id === it.to; })) err(tag + ' items.to 要是 pins 裡的一個：' + it.to); });
        }
      }
      if (q.type === 'mc') {
        mcN++;
        if (!Array.isArray(q.opts) || q.opts.length < 3 || q.opts.length > 4) err(tag + ' opts 要 3～4 個');
        else {
          if (!(q.a >= 0 && q.a < q.opts.length)) err(tag + ' a 要是 opts 的索引');
          if (new Set(q.opts).size !== q.opts.length) err(tag + ' opts 重複');
          q.opts.forEach(function (o) { if (!o || len(o) > LIM.opt) err(tag + ' 選項 ≤ ' + LIM.opt + ' 字：' + o); });
          var L = q.opts.map(len), mx = Math.max.apply(null, L);
          if (L[q.a] === mx && L.filter(function (x) { return x === mx; }).length === 1) longN++;
        }
      }
      if (q.type === 'puzzle') {
        if (!Array.isArray(q.pieces) || q.pieces.length < 2 || q.pieces.length > 5) err(tag + ' pieces 要 2～5 片');
        else {
          var sl = slotsOf(q, V);
          q.pieces.forEach(function (p) { if (p.shape && p.shape.d && !/^[MLZ0-9.\s,-]+$/.test(p.shape.d)) err(tag + ' 拼圖片 ' + p.id + ' 的 d 只能用絕對座標的 M、L、Z'); });
          sl.forEach(function (s, k) { var p = q.pieces[k]; if (!p.id || !p.t || len(p.t) > LIM.label) err(tag + ' 拼圖片要有 id、t（≤ ' + LIM.label + ' 字）'); if (!s.d) err(tag + ' 拼圖片 ' + p.id + ' 的 shape 畫不出來'); else if (!inView(V, s.x, s.y)) err(tag + ' 拼圖片 ' + p.id + ' 在圖外'); });
          for (var a = 0; a < sl.length; a++) for (var b = a + 1; b < sl.length; b++) if (Math.hypot(sl[a].x - sl[b].x, sl[a].y - sl[b].y) < 40) err(tag + ' 拼圖片 ' + sl[a].id + '、' + sl[b].id + ' 的位置太近（< 40）');
        }
      }
    });
    if (mcN && longN / mcN > 0.25) err('選擇題的正解是「唯一最長的選項」太多：' + longN + '/' + mcN + '（要 ≤ 25%）');
    var cnt = function (xs, t) { return xs.filter(function (q) { return q.type === t; }).length; };
    TYPES.forEach(function (t) { if (cnt(u.practice || [], t) < 2) err('練習的「' + LAB[t] + '」至少 2 題（現在 ' + cnt(u.practice || [], t) + '）'); });
    if (TYPES.filter(function (t) { return cnt(u.test || [], t) > 0; }).length < 3) err('測驗至少用 3 種題型');
    return errs;
  }

  /* ---------- 畫面：地圖／示意圖 ---------- */
  var C = { sea: '#cfe9fb', land: '#efe3c6', landS: '#b9a77d', tw: '#d8ecc0', twS: '#5d8a3a', hl: '#ffb36b', pin: '#2b8fd6', ok: '#22a565', no: '#e5484d', sel: '#ff8a3d', mark: '#8350d6' };
  var CONT = { as: '#f4d79b', eu: '#c9b8e8', af: '#f2b8a2', na: '#a8d5a2', sa: '#9fd3d9', oc: '#f6c3d9', an: '#e6eef3' };
  function bbOverlap(a, b) { return a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1]; }
  // 字的寬度（粗體）：中文一個字＝字級，英數約 0.6 個字級
  function textW(t, fs) { return Array.from(String(t)).reduce(function (a, c) { return a + (c.charCodeAt(0) > 255 ? fs : fs * 0.6); }, 0); }
  // names：地點旁寫名字（不建圓圈、不算答案）。可以是 places.js 的 id，或 {n, lon, lat}／{n, x, y}（參考標字，例 海洋中間的「太平洋」），fs＝字級
  // 字靠圖邊時往內推，太靠上就改寫在點的下面，不會被切掉。回傳 {svg, box:[外框…]}（指北針要避開）
  function namesSVG(fig, V) {
    var o = [], box = [];
    (fig.names || []).forEach(function (id) {
      var s = pinXY(id, V); if (!s) return;
      var fs = (typeof id === 'object' && id.fs) || 15, w = textW(s.n, fs), x = r1(Math.max(w / 2 + 3, Math.min(V.w - w / 2 - 3, s.x))), y = s.y - 8;
      if (y - fs < 2) y = s.y + fs + 6;
      y = Math.min(y, V.h - 4);
      o.push('<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + fs + '" font-weight="800" fill="#263445" stroke="#fff" stroke-width="4" paint-order="stroke">' + esc(s.n) + '</text>');
      box.push({ x0: x - w / 2, y0: y - fs, x1: x + w / 2, y1: y + 4, r: 0 });
    });
    return { svg: o.join(''), box: box };
  }
  function marksSVG(fig, V) {
    return (fig.marks || []).map(function (m) { var s = pinXY(m.p, V); return s ? '<g><circle cx="' + s.x + '" cy="' + s.y + '" r="16" fill="' + C.mark + '" stroke="#fff" stroke-width="3"/><text x="' + s.x + '" y="' + (s.y + 6) + '" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">' + esc(m.t) + '</text></g>' : ''; }).join('');
  }
  // 指北針：右下、右上、左下、左上，挑第一個不會壓到圓圈、標記、地名、拼圖位置、線的名字的角；都會壓到就挑最空的那個
  function compassSVG(fig, V, obs) {
    if (fig.compass === false || V.polar || V.schem) return '';
    var lx = fig.grid && fig.grid.lab !== false ? 90 : 34;   // 有經緯度數字時，左邊的位置讓開緯度數字
    var R = 27, cand = [[V.w - 34, V.h - 40], [V.w - 34, 50], [lx, V.h - 40], [lx, 50]], best = null, bc = -1e9;
    for (var i = 0; i < cand.length; i++) {
      var cx = cand[i][0], cy = cand[i][1] - 5, c = 1e9;   // 圓＋上面的「北」字，圓心往上 5
      obs.forEach(function (b) { var dx = Math.max(b.x0 - cx, 0, cx - b.x1), dy = Math.max(b.y0 - cy, 0, cy - b.y1); c = Math.min(c, Math.hypot(dx, dy) - b.r - R); });
      if (c >= 0) { best = cand[i]; break; }
      if (c > bc) { bc = c; best = cand[i]; }
    }
    return '<g class="geo-compass" transform="translate(' + best[0] + ',' + best[1] + ')"><circle r="20" fill="#fff" stroke="#888" stroke-width="2"/><path d="M0 -15 L6 5 L0 1 L-6 5Z" fill="' + C.no + '"/><text y="-23" text-anchor="middle" font-size="14" font-weight="800" fill="#333" stroke="#fff" stroke-width="3" paint-order="stroke">北</text></g>';
  }
  function circ(x, y, r) { return { x0: x, y0: y, x1: x, y1: y, r: r }; }
  function baseSVG(fig, V) {
    var o = [], M = maps(), hl = fig.hl || [];
    if (V.schem) return fig.svg + namesSVG(fig, V).svg + marksSVG(fig, V);   // 示意圖也能寫 names、標 marks
    o.push(V.polar ? '<rect width="' + V.w + '" height="' + V.h + '" fill="#fff"/><circle cx="' + W / 2 + '" cy="' + W / 2 + '" r="' + (W / 2 - 14) + '" fill="' + C.sea + '"/>' : '<rect width="' + V.w + '" height="' + V.h + '" fill="' + C.sea + '"/>');
    // 區域圖（東西不到 60 度）跟臺灣重疊時，臺灣改畫 1:10m 的詳細輪廓（＋小島點）；整個世界的圖照 1:110m
    var showTw = fig.map === 'tw' || (V.box && !V.polar && M.tw && V.box[2] - V.box[0] <= 60 && bbOverlap(V.box, M.tw.box) && fig.tw !== false);
    if (fig.map === 'world' && M.world) {
      var by = {};   // 同一國同一洲的環併成一條 path
      M.world.countries.forEach(function (c) {
        if (showTw && c.n === 'Taiwan') return;
        var fill = fig.cont ? (CONT[c.c] || C.land) : C.land;
        o.push('<path d="' + pathOf(c.r.map(function (r) { return r.h || r; }), M.world.q, V) + '" fill="' + fill + '" stroke="' + C.landS + '" stroke-width=".6" fill-rule="evenodd"/>');
        by[c.id] = 1;
      });
    }
    if (showTw && M.tw) {
      if (fig.map === 'tw') o.push('<path d="' + pathOf(M.tw.ctx, M.tw.q, V) + '" fill="' + C.land + '" stroke="' + C.landS + '" stroke-width="1"/>');   // 世界圖上已經有中國大陸，不再疊（框邊會多出直線）
      Object.keys(M.tw.land).forEach(function (k) { o.push('<path d="' + pathOf(M.tw.land[k], M.tw.q, V) + '" fill="' + C.tw + '" stroke="' + C.twS + '" stroke-width="' + (fig.map === 'tw' ? 2 : 1) + '" stroke-linejoin="round"/>'); });
      var P = places(); Object.keys(P).forEach(function (id) { var p = P[id]; if (!p.islet) return; var xy = V.P(p.lon, p.lat); if (inView(V, xy[0], xy[1])) o.push('<circle cx="' + xy[0] + '" cy="' + xy[1] + '" r="' + (fig.map === 'tw' ? 4 : 3) + '" fill="' + C.tw + '" stroke="' + C.twS + '" stroke-width="1.5"/>'); });
    }
    hl.forEach(function (s) { var d = shapePath(s, V); if (d) o.push('<path d="' + d + '" fill="' + C.hl + '" stroke="#c2410c" stroke-width="2" fill-rule="evenodd" opacity=".95"/>'); });
    if (fig.grid) o.push(gridSVG(fig.grid, V));
    (fig.lines || []).forEach(function (l) { o.push(lineSVG(l, V)); });
    if (fig.svg) o.push(fig.svg);   // 地圖上再疊一層示意（座標＝圖上座標）
    o.push(namesSVG(fig, V).svg, marksSVG(fig, V));
    return o.join('');
  }
  // 指北針要避開的東西（圖上座標的框，r＝再往外留的距離）
  function figObstacles(q, V) {
    var fig = q.fig || {}, obs = namesSVG(fig, V).box.slice();
    (fig.marks || []).forEach(function (m) { var s = pinXY(m.p, V); if (s) obs.push(circ(s.x, s.y, 18)); });
    if (q.type === 'tap' || q.type === 'drag') pinsOf(q, V).forEach(function (s) { if (s) obs.push(circ(s.x, s.y, s.r + 14)); });   // 號碼小圓凸出圓圈，再留一點空
    if (q.type === 'puzzle') slotsOf(q, V).forEach(function (s) { obs.push(q.outline === false ? circ(s.x, s.y, 30) : { x0: s.b.x0, y0: s.b.y0, x1: s.b.x1, y1: s.b.y1, r: 0 }); });
    (fig.lines || []).forEach(function (l) {   // 線的名字：緯線寫在右端、經線寫在上面
      var w = textW(l.t || '', 14);
      if (l.lat != null) { var a = V.P(V.box ? V.box[2] : 180, l.lat); obs.push({ x0: a[0] - 6 - w, y0: a[1] - 19, x1: a[0], y1: a[1] - 2, r: 0 }); }
      else { var b = V.P(l.lon, 0); obs.push({ x0: b[0] + 5, y0: 2, x1: b[0] + 5 + w, y1: 20, r: 0 }); }
    });
    return obs;
  }
  function degTxt(v, pos, neg) { return v === 0 ? '0°' : (v > 0 ? pos : neg) + Math.abs(v) + '°'; }
  // 經緯線：step 度一條，標在左邊（緯度）和下面（經度）
  // step：數字（度）或 {s: 度, lab: false}（不標度數，考「這條是幾度」用）
  function gridSVG(step, V) {
    var o = [], s = typeof step === 'number' ? step : (step.s || 30), showLab = step.lab !== false;
    if (V.polar) {
      for (var la = -80; la <= V.edge; la += 10) { var p = V.P(0, la); o.push('<circle cx="' + W / 2 + '" cy="' + W / 2 + '" r="' + r1(W / 2 - p[1]) + '" fill="none" stroke="#5b8db8" stroke-width=".8" opacity=".7"/>'); }
      for (var lo = -180; lo < 180; lo += s) { var q1 = V.P(lo, V.edge); o.push('<line x1="' + W / 2 + '" y1="' + W / 2 + '" x2="' + q1[0] + '" y2="' + q1[1] + '" stroke="#5b8db8" stroke-width=".8" opacity=".7"/>'); }
      return o.join('');
    }
    var b = V.box, px = V.P(b[0] + s, b[3])[0] - V.P(b[0], b[3])[0], every = Math.max(1, Math.ceil(66 / px));   // 經度的字至少隔 66：太密就隔幾條才標
    var lab = function (x, y, t, anchor) { if (!showLab) return ''; return '<text x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + ' font-size="12" font-weight="700" fill="#24527a" stroke="#fff" stroke-width="3" paint-order="stroke">' + t + '</text>'; };
    for (var y = Math.ceil(b[1] / s) * s; y <= b[3]; y += s) { var a = V.P(b[0], y), c = V.P(b[2], y); o.push('<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + c[0] + '" y2="' + c[1] + '" stroke="#5b8db8" stroke-width="' + (y === 0 ? 2 : .8) + '" opacity=".75"/>' + (a[1] > 14 && a[1] < V.h - 18 ? lab(4, a[1] - 3, degTxt(y, '北緯', '南緯')) : '')); }
    for (var x = Math.ceil(b[0] / s) * s, n = 0; x <= b[2]; x += s, n++) { var d = V.P(x, b[3]), e = V.P(x, b[1]), lon = ((x + 540) % 360) - 180; o.push('<line x1="' + d[0] + '" y1="' + d[1] + '" x2="' + e[0] + '" y2="' + e[1] + '" stroke="#5b8db8" stroke-width="' + (x === 0 ? 2 : .8) + '" opacity=".75"/>' + ((lon % (s * every) === 0) && d[0] > 20 && d[0] < V.w - 66 ? lab(d[0], V.h - 4, degTxt(lon === -180 ? 180 : lon, '東經', '西經'), 'middle') : '')); }
    return o.join('');
  }
  // 特別的線：{lat: 23.44, t: '北回歸線'} 或 {lon: 121, t: '東經121°'}；c＝顏色
  function lineSVG(l, V) {
    var col = l.c || C.no, a, b, tx;
    if (l.lat != null) { a = V.P(V.box ? V.box[0] : -180, l.lat); b = V.P(V.box ? V.box[2] : 180, l.lat); tx = '<text x="' + (b[0] - 6) + '" y="' + (a[1] - 5) + '" text-anchor="end" font-size="14" font-weight="800" fill="' + col + '" stroke="#fff" stroke-width="3" paint-order="stroke">' + esc(l.t || '') + '</text>'; }
    else { a = V.P(l.lon, V.box ? V.box[3] : 90); b = V.P(l.lon, V.box ? V.box[1] : -90); tx = '<text x="' + (a[0] + 5) + '" y="16" font-size="14" font-weight="800" fill="' + col + '" stroke="#fff" stroke-width="3" paint-order="stroke">' + esc(l.t || '') + '</text>'; }
    return '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" stroke="' + col + '" stroke-width="2.5" stroke-dasharray="8 6"/>' + tx;
  }
  // 題目要的那一層：圓圈（tap、drag）、拼圖位置
  function figSVG(q, st, done) {
    var fig = q.fig || {}, V = view(fig), o = [baseSVG(fig, V), compassSVG(fig, V, figObstacles(q, V))];
    if (q.type === 'tap') pinsOf(q, V).forEach(function (s, i) {
      var col = C.pin, fill = 'rgba(43,143,214,.12)', w = 3, bx = r1(s.x + s.r * 0.72), by = r1(s.y + s.r * 0.72);   // 號碼放在圓圈右下角，圓圈中間的東西（符號、圖示）才看得到
      if (done && s.id === q.a) { col = C.ok; fill = 'rgba(34,165,101,.35)'; w = 5; } else if (done && s.id === st.pick) { col = C.no; fill = 'rgba(229,72,77,.3)'; w = 5; } else if (s.id === st.pick) { col = C.sel; fill = 'rgba(255,138,61,.35)'; w = 5; }
      o.push('<g data-spot="' + esc(s.id) + '"><circle cx="' + s.x + '" cy="' + s.y + '" r="' + s.r + '" fill="' + fill + '" stroke="' + col + '" stroke-width="' + w + '" stroke-dasharray="' + (s.r === R_AREA ? '7 5' : '') + '"/><circle cx="' + bx + '" cy="' + by + '" r="11" fill="' + col + '" stroke="#fff" stroke-width="2"/><text x="' + bx + '" y="' + (by + 5) + '" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">' + (i + 1) + '</text></g>');
    });
    if (q.type === 'drag') {
      var sp = pinsOf(q, V);
      sp.forEach(function (s) {
        var k = st.at.indexOf(s.id), col = k >= 0 ? (done ? (q.items[k].to === s.id ? C.ok : C.no) : C.sel) : (st.sel != null ? C.sel : C.pin);
        o.push('<g data-spot="' + esc(s.id) + '"><circle cx="' + s.x + '" cy="' + s.y + '" r="' + s.r + '" fill="rgba(255,255,255,.35)" stroke="' + col + '" stroke-width="4" stroke-dasharray="7 5"/><circle cx="' + s.x + '" cy="' + s.y + '" r="6" fill="' + col + '"/></g>');
      });
      sp.forEach(function (s) {   // 地名標籤畫在最上面（不被別的圓圈蓋住）
        var k = st.at.indexOf(s.id); if (k < 0) return;
        var t = q.items[k].t, wd = len(t) * 15 + 16, col = done ? (q.items[k].to === s.id ? C.ok : C.no) : C.sel, y = s.y - 16, lx = r1(Math.max(2, Math.min(V.w - wd - 2, s.x - wd / 2)));   // 標籤不超出圖邊
        o.push('<g data-placed="' + k + '"><rect x="' + lx + '" y="' + (y - 18) + '" width="' + wd + '" height="30" rx="10" fill="#fff" stroke="' + col + '" stroke-width="3"/><text x="' + r1(lx + wd / 2) + '" y="' + (y + 3) + '" text-anchor="middle" font-size="17" font-weight="800" fill="#263445">' + esc(t) + '</text></g>');
        if (done && q.items[k].to !== s.id) { var right = q.items.filter(function (it) { return it.to === s.id; })[0]; o.push('<text x="' + s.x + '" y="' + (s.y + s.r + 18) + '" text-anchor="middle" font-size="15" font-weight="800" fill="' + C.ok + '" stroke="#fff" stroke-width="4" paint-order="stroke">正解：' + esc(right ? right.t : '（空著）') + '</text>'); }
      });
    }
    if (q.type === 'puzzle') {
      var sl = slotsOf(q, V);
      // 位置框：預設畫每片的虛線輪廓（看形狀拼）；q.outline === false 只畫虛線圓（要靠題目的提示判斷哪片放哪）
      sl.forEach(function (s) { o.push(q.outline === false ? '<circle cx="' + s.x + '" cy="' + s.y + '" r="30" fill="rgba(255,255,255,.55)" stroke="#7a6a50" stroke-width="2.5" stroke-dasharray="6 4"/>' : '<path d="' + s.d + '" fill="rgba(255,255,255,.55)" stroke="#7a6a50" stroke-width="2" stroke-dasharray="6 4" fill-rule="evenodd"/>'); });
      q.pieces.forEach(function (p, i) {
        var at = st.at[i]; if (at == null) return;
        var home = sl[i], to = sl.filter(function (s) { return s.id === at; })[0], dx = r1(to.x - home.x), dy = r1(to.y - home.y), col = done ? (at === p.id ? C.ok : C.no) : '#f08c3a';
        o.push('<g data-placed="' + i + '" transform="translate(' + dx + ',' + dy + ')"><path d="' + home.d + '" fill="' + col + '" fill-opacity=".85" stroke="#7a3d0c" stroke-width="1.5" fill-rule="evenodd"/>' + (q.names === false && !done ? '' : '<text x="' + home.x + '" y="' + (home.y + 6) + '" text-anchor="middle" font-size="15" font-weight="800" fill="#263445" stroke="#fff" stroke-width="4" paint-order="stroke">' + esc(p.t) + '</text>') + '</g>');   // names:false 作答時不露名字
      });
      if (done) q.pieces.forEach(function (p, i) { if (st.at[i] !== p.id) o.push('<text x="' + sl[i].x + '" y="' + (sl[i].y + sl[i].b.h / 2 + 18) + '" text-anchor="middle" font-size="15" font-weight="800" fill="' + C.ok + '" stroke="#fff" stroke-width="4" paint-order="stroke">這裡是 ' + esc(p.t) + '</text>'); });
    }
    return '<svg class="geo-svg" viewBox="0 0 ' + V.w + ' ' + V.h + '" role="img" aria-label="' + esc(fig.alt || '地圖') + '">' + o.join('') + '</svg>';
  }
  // 拼圖片的小圖（卡片區）：形狀放大到 72×56 裡
  function thumb(p, V) {
    var d = shapePath(p.shape, V), b = mainBox(d), pad = Math.max(b.w, b.h) * 0.12 + 1;
    return '<svg viewBox="' + r1(b.x0 - pad) + ' ' + r1(b.y0 - pad) + ' ' + r1(b.w + 2 * pad) + ' ' + r1(b.h + 2 * pad) + '" width="72" height="56" aria-hidden="true"><path d="' + d + '" fill="#f08c3a" stroke="#7a3d0c" stroke-width="' + r1(Math.max(b.w, b.h) / 40 + .3) + '" fill-rule="evenodd"/></svg>';
  }

  /* ---------- 畫面：一題 ---------- */
  var CSS = '.geo-q{display:grid;gap:10px}.geo-fig{background:#fff;border:2px solid var(--line,#e6dccb);border-radius:18px;padding:6px;text-align:center}' +
    '.geo-fig svg{display:block;margin:0 auto;width:100%;max-width:560px;height:auto;max-height:calc(100vh - 230px);touch-action:manipulation;-webkit-user-select:none;user-select:none}' +
    '.geo-ctl{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center}.geo-ctl .lab{font-weight:800;color:var(--muted,#6b6b6b)}' +
    '.geo-b{min-height:48px;min-width:48px;padding:4px 14px;border:2px solid var(--line,#e6dccb);border-radius:14px;background:#fff;font:inherit;font-weight:800;color:inherit;cursor:pointer;touch-action:manipulation;box-shadow:0 3px 0 var(--line,#e6dccb)}' +
    '.geo-b.on{background:var(--pri,#ff8a3d);border-color:var(--pri,#ff8a3d);color:#fff;box-shadow:0 3px 0 #d96a22}.geo-b.go{background:var(--ok,#22a565);border-color:var(--ok,#22a565);color:#fff;box-shadow:0 3px 0 #16784a}' +
    '.geo-b:disabled{opacity:.45;cursor:not-allowed}.geo-b.r-ok{background:#e3f7ea;border-color:#22a565}.geo-b.r-no{background:#fde8e8;border-color:#e5484d}' +
    '.geo-opts{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))}.geo-opt{min-height:56px;text-align:left;padding:10px 16px;border:2px solid var(--line,#e6dccb);border-radius:16px;background:#fff;font:inherit;font-size:1.05rem;font-weight:700;cursor:pointer;touch-action:manipulation;color:inherit}' +
    '.geo-opt.right{background:#e3f7ea;border-color:#22a565}.geo-opt.wrong{background:#fde8e8;border-color:#e5484d}.geo-opt.on{border-color:var(--pri,#ff8a3d);background:#fff1e3}' +
    '.geo-pool{display:flex;flex-wrap:wrap;gap:8px;min-height:64px;padding:8px;border-radius:16px;background:#f6f3ee;justify-content:center;align-items:center}' +
    '.geo-card{min-height:52px;min-width:88px;padding:4px 12px;border:2px solid #8ab4e8;border-radius:14px;background:#eef5ff;font:inherit;font-weight:800;font-size:1.02rem;color:inherit;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none;box-shadow:0 3px 0 #b7cff0;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}' +
    '.geo-card svg{display:block;pointer-events:none}.geo-card small{font-size:.85rem}' +
    '.geo-card.sel{outline:4px solid var(--pri,#ff8a3d);outline-offset:2px}.geo-card.ghost{position:fixed;z-index:999;pointer-events:none;opacity:.92;transform:rotate(-2deg);box-shadow:0 8px 20px rgba(0,0,0,.25)}' +
    '.geo-card.lift{opacity:.35}.geo-hint{color:var(--muted,#6b6b6b);text-align:center;margin:0;font-size:.95rem}' +
    '.geo-q.dnd .geo-fig svg{max-height:max(240px,calc(100vh - 480px))}' +   // 拖拉題：地圖在上、卡片在下（窄畫面），高的圖要讓出位置，卡片才看得到、拖得到
    '@media(min-width:1000px){.geo-q.wide{grid-template-columns:minmax(0,560px) minmax(0,1fr);align-items:start}.geo-q.dnd .geo-fig svg{max-height:calc(100vh - 230px)}}';
  function css() { if (typeof document === 'undefined' || document.getElementById('geo-css')) return; var s = document.createElement('style'); s.id = 'geo-css'; s.textContent = CSS; document.head.appendChild(s); }
  function bt(attrs, text, cls, dis) { return '<button type="button" class="geo-b' + (cls ? ' ' + cls : '') + '" ' + attrs + (dis ? ' disabled' : '') + '>' + text + '</button>'; }
  function qHTML(q, st, o) {
    var done = !!o.done, fig = q.fig ? '<div class="geo-fig">' + figSVG(q, st, o.reveal) + '</div>' : '', act = '';
    if (q.type === 'tap') {
      var V = view(q.fig), sp = pinsOf(q, V);
      act = '<div class="geo-ctl"><span class="lab">點地圖上的圓圈，或按號碼：</span>' + sp.map(function (s, i) { var c = o.reveal ? (s.id === q.a ? 'r-ok' : s.id === st.pick ? 'r-no' : '') : st.pick === s.id ? 'on' : ''; return bt('data-g="pin" data-v="' + esc(s.id) + '" aria-label="' + (i + 1) + ' 號圓圈"', (i + 1) + ' 號', c, done); }).join('') + '</div>';
    } else if (q.type === 'mc') {
      act = '<div class="geo-opts">' + perm('opt:' + q.id, q.opts.length).map(function (i) { var c = o.reveal ? (i === q.a ? ' right' : i === st.pick ? ' wrong' : '') : st.pick === i ? ' on' : ''; return '<button type="button" class="geo-opt' + c + '" data-g="opt" data-v="' + i + '"' + (done ? ' disabled' : '') + '>' + esc(q.opts[i]) + '</button>'; }).join('') + '</div>';
    } else {
      var items = q.type === 'drag' ? q.items : q.pieces, V2 = view(q.fig), left = perm('pool:' + q.id, items.length, true).filter(function (i) { return st.at[i] == null; });
      if (!done) act = '<div class="geo-pool" data-g="pool">' + (left.map(function (i) {
        var inner = q.type === 'drag' ? esc(items[i].t) : thumb(items[i], V2) + (q.names === false ? '' : '<small>' + esc(items[i].t) + '</small>');
        return '<button type="button" class="geo-card' + (st.sel === i ? ' sel' : '') + '" data-g="card" data-v="' + i + '" aria-label="' + esc(items[i].t) + '">' + inner + '</button>';
      }).join('') || '<span class="geo-hint">都放好了，按「確定」</span>') + '</div><p class="geo-hint">' + (q.type === 'drag' ? '把地名拖到地圖上的圓圈；或先點地名，再點圓圈。點地圖上的地名可以拿回來。' : '把拼圖片拖回地圖上原來的位置；或先點一片，再點地圖上的虛線框。點已經放好的片可以拿回來。') + '</p>';
    }
    if (!done && q.type !== 'mc') act += '<div class="geo-ctl">' + (q.type === 'drag' || q.type === 'puzzle' ? bt('data-g="clear"', '↩ 全部拿回來', '') : '') + bt('data-g="ok"', '✅ 確定', 'go', !ready(q, st)) + '</div>';
    return '<div class="geo-q' + (q.fig ? ' wide' : '') + (q.type === 'drag' || q.type === 'puzzle' ? ' dnd' : '') + '"><div>' + fig + '</div><div class="geo-q">' + act + '</div></div>';
  }

  /* ---------- 互動：一題（mount 回傳 {state, act}；o.onAnswer(對錯)） ---------- */
  function mount(box, q, o) {
    o = o || {}; css();
    var st = initState(q), drag = null, skipClick = false, answered = false;
    function paint() { box.innerHTML = qHTML(q, st, o); }
    function answer() { if (answered || !ready(q, st)) return; answered = true; o.done = true; o.reveal = !!o.feedback; var ok = check(q, st); paint(); if (o.onAnswer) o.onAnswer(ok, st); }
    function place(i, slot) {   // i＝地名卡／拼圖片索引；slot＝圓圈或拼圖位置 id（null＝放回卡片區）；那一格原本的放回卡片區
      var j = slot == null ? -1 : st.at.indexOf(slot);
      if (j >= 0 && j !== i) st.at[j] = null;
      st.at[i] = slot; st.sel = null;
    }
    function svgPt(x, y) { var svg = box.querySelector('svg.geo-svg'); if (!svg || !svg.getScreenCTM()) return null; var pt = svg.createSVGPoint(); pt.x = x; pt.y = y; return pt.matrixTransform(svg.getScreenCTM().inverse()); }
    function slotAt(x, y) {
      var p = svgPt(x, y); if (!p) return null;
      var V = view(q.fig);
      return q.type === 'drag' ? hitAt(pinsOf(q, V).map(function (s) { return { id: s.id, x: s.x, y: s.y, r: s.r + 10 }; }), p.x, p.y) : nearSlot(slotsOf(q, V), p.x, p.y);
    }
    function act(k, v) {
      if (o.done) return;
      if (k === 'opt') { st.pick = +v; answer(); return; }
      if (k === 'ok') { answer(); return; }
      if (k === 'pin') st.pick = v;
      else if (k === 'card') { var i = +v; st.sel = st.sel === i ? null : i; }
      else if (k === 'slot') { if (st.sel != null) place(st.sel, v); }
      else if (k === 'unplace') { st.at[+v] = null; st.sel = null; }
      else if (k === 'pool') { st.sel = null; }
      else if (k === 'clear') { st.at = st.at.map(function () { return null; }); st.sel = null; }
      paint();
    }
    box.onclick = function (e) {
      if (skipClick && e.target.closest('.geo-card, .geo-pool, svg.geo-svg')) { skipClick = false; return; }   // 拖完放開時滑鼠會補一個 click，不要再當成「點一下」（按鈕不擋）
      if (o.done) return;
      var el = e.target.closest('[data-g]'), inSvg = e.target.closest('svg.geo-svg');
      if (inSvg && (q.type === 'tap' || q.type === 'drag' || q.type === 'puzzle')) {
        var pl = e.target.closest('[data-placed]');
        if (pl && st.sel == null) { act('unplace', pl.getAttribute('data-placed')); return; }
        if (q.type === 'tap') { var p = svgPt(e.clientX, e.clientY), hit = p && hitAt(pinsOf(q, view(q.fig)), p.x, p.y); if (hit) act('pin', hit); else if (o.toast) o.toast('沒點到圓圈，再點一次（也可以按下面的號碼）'); return; }
        if (st.sel == null) { if (o.toast) o.toast(q.type === 'drag' ? '先點下面的地名，再點地圖上的圓圈' : '先點下面的拼圖片，再點地圖上的位置'); return; }
        var s = slotAt(e.clientX, e.clientY); if (s) act('slot', s); else if (o.toast) o.toast('放的位置離圓圈太遠，再點一次');
        return;
      }
      if (!el || el.disabled) return;
      act(el.getAttribute('data-g'), el.getAttribute('data-v'));
    };
    // 拖拉（地名卡、拼圖片）：觸控、滑鼠都走 pointer events
    box.onpointerdown = function (e) {
      var c = e.target.closest && e.target.closest('.geo-card'); if (!c || o.done || c.classList.contains('ghost')) return;
      drag = { i: +c.getAttribute('data-v'), x: e.clientX, y: e.clientY, el: c, g: null, id: e.pointerId };
      try { c.setPointerCapture(e.pointerId); } catch (x) { }
    };
    box.onpointermove = function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      if (!drag.g) { if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 8) return; var r = drag.el.getBoundingClientRect(); drag.g = drag.el.cloneNode(true); drag.g.classList.add('ghost'); drag.g.style.width = r.width + 'px'; drag.dx = drag.x - r.left; drag.dy = drag.y - r.top; document.body.appendChild(drag.g); drag.el.classList.add('lift'); }
      e.preventDefault();
      drag.g.style.left = (e.clientX - drag.dx) + 'px'; drag.g.style.top = (e.clientY - drag.dy) + 'px';
    };
    function endDrag(e, cancel) {
      if (!drag || (e && e.pointerId !== drag.id)) return;
      var d = drag; drag = null;
      if (!d.g) return;   // 沒拖＝點一下（交給 click）
      d.g.remove(); skipClick = true; setTimeout(function () { skipClick = false; }, 400);
      if (cancel) { paint(); return; }
      var s = slotAt(e.clientX, e.clientY);
      if (s) place(d.i, s); else if (o.toast) o.toast('放的位置離圓圈太遠，地名回到下面了');
      paint();
    }
    box.onpointerup = function (e) { endDrag(e, false); };
    box.onpointercancel = function (e) { endDrag(e, true); };
    paint();
    return { state: function () { return st; }, act: act, slotAt: slotAt };
  }

  /* ---------- 單元頁（瀏覽器）：📖 重點／✏️ 練習／📝 測驗 ---------- */
  function add(u) { if (u && u.id) units[u.id] = u; return u; }
  function unit(id) { return units[id] || null; }
  function groupOf(u, g) { return u.practice.slice((g - 1) * GROUP, g * GROUP); }
  function doneVal(key) { try { var d = JSON.parse(localStorage.getItem('kids_done') || 'null'), v = d && d.geo && d.geo[key]; return typeof v === 'number' ? v : null; } catch (e) { return null; } }
  function safe(f) { try { return f(); } catch (e) { return null; } }
  function page(doc, uid, meta) {
    var $ = function (id) { return doc.getElementById(id); }, U = unit(uid), run = null;
    var title = meta ? meta.title : uid, grp = meta ? meta.group : '';
    doc.title = '地理｜' + title;
    $('title').textContent = '🌍 ' + (grp ? grp + '　' : '') + title;
    if (!U) { $('lede').innerHTML = '這個單元準備中，敬請期待！<br><a class="btn" target="_top" href="../index.html#s/geo">← 回地理</a>'; return null; }
    $('lede').textContent = '先看重點，再做練習（3 組、每組 10 題），最後考單元測驗 10 題。';
    $('tabs').hidden = false;
    function toast(t) { safe(function () { if (window.KidsCoins && KidsCoins.toast) KidsCoins.toast(t); else { var m = $('g-msg'); if (m) m.textContent = t; } }); }
    function rec(ok) { safe(function () { if (window.KidsCoins) KidsCoins.answer(!!ok, 'social'); }); safe(function () { if (window.KidsDaily) KidsDaily.rec('geo', !!ok); }); }
    function report(item, c, n) { safe(function () { if (window.KidsCoins && n) KidsCoins.report({ type: 'practice_round', item: item, correct: c, total: n }); }); }
    function doneRec(key, v) { safe(function () { if (window.KidsDone) KidsDone.record('geo', key, v); }); }
    function authOK() { var r = safe(function () { return !window.KidsAuth || KidsAuth.requireLogin('social'); }); return r !== false; }
    function startAct(retry) { var r = safe(function () { return !(window.KidsAuth && KidsAuth.startActivity) || KidsAuth.startActivity('social', retry); }); return r !== false; }
    // 📖 重點
    $('learn').innerHTML = U.learn.map(function (c, i) {
      var f = c.fig ? '<div class="geo-fig">' + figSVG({ type: 'mc', fig: c.fig }, {}, false) + '</div>' : '';
      return '<div class="card lc"><h2>' + (i + 1) + '. ' + esc(c.t) + '</h2>' + f + '<p>' + esc(c.p) + '</p></div>';
    }).join('') + '<p class="center"><button type="button" class="btn primary big" id="go-prac">✏️ 去練習 ▶</button></p>';
    // ✏️ 練習：首頁（三組＋最佳 %）
    function pHome() {
      run = null;
      $('prac').innerHTML = '<div class="card"><h2>✏️ 練習</h2><p>30 題分成 3 組，每組 10 題，由簡單到難。答完馬上看解說；每一組答對 ' + PASS + '% 以上就過關。</p><div class="geo-groups">' + [1, 2, 3].map(function (g) {
        var b = doneVal(uid + 'p' + g), types = {}; groupOf(U, g).forEach(function (q) { types[LAB[q.type]] = 1; });
        return '<div class="geo-grp' + (b != null && b >= PASS ? ' ok' : '') + '"><b>第 ' + g + ' 組</b><small>' + Object.keys(types).join('、') + '</small><span>' + (b == null ? '還沒做過' : '最佳 ' + b + '%' + (b >= PASS ? ' ✅' : '')) + '</span><button type="button" class="btn primary" data-go="' + g + '">開始 ▶</button></div>';
      }).join('') + '</div></div>';
    }
    function start(mode, g) {
      if (!authOK() || !startAct(function () { start(mode, g); })) return;
      (mode === 'test' ? $('prac') : $('exam')).innerHTML = '';   // 另一個分頁清空：同一時間只有一輪，元素 id（g-card、g-q…）才不會重複
      run = { mode: mode, g: g, qs: mode === 'test' ? U.test : groupOf(U, g), i: 0, ok: 0, res: [] };
      one();
    }
    function sec() { return run.mode === 'test' ? $('exam') : $('prac'); }
    function one() {
      var q = run.qs[run.i], host = sec();
      host.innerHTML = '<div class="prog"><span>' + (run.mode === 'test' ? '📝 單元測驗' : '✏️ 第 ' + run.g + ' 組') + '　第 ' + (run.i + 1) + ' / ' + run.qs.length + ' 題</span>' + (run.mode === 'test' ? '' : '<span class="muted">答對 ' + run.ok + ' 題</span>') + '<span class="geo-kind">' + LAB[q.type] + '</span></div>' +
        '<div class="card" id="g-card"><p class="q-text">' + esc(q.q) + '</p><div id="g-q"></div><p class="msg" id="g-msg" role="status" aria-live="polite"></p><div id="g-fb"></div></div>';
      run.m = mount($('g-q'), q, { feedback: run.mode !== 'test', toast: function (t) { var m = $('g-msg'); if (m) m.textContent = t; }, onAnswer: function (ok, st) { after(q, ok, st); } });
      window.scrollTo(0, Math.max(0, host.getBoundingClientRect().top + window.pageYOffset - 6));   // 捲到這一題（頁首、分頁按鈕捲上去），拖拉題的地圖和卡片才放得進同一個畫面
    }
    function after(q, ok, st) {
      rec(ok); if (ok) run.ok++; run.res.push({ q: q, ok: ok, st: JSON.parse(JSON.stringify(st)) });
      var more = run.i + 1 < run.qs.length, fb = $('g-fb'); $('g-msg').textContent = '';
      fb.innerHTML = (run.mode === 'test' ? '' : '<div class="fb ' + (ok ? 'ok' : 'no') + '">' + (ok ? '🎉 答對了！' : '✘ 再看一次：正確答案是 <b>' + esc(ansText(q)) + '</b>') + '<br>💡 ' + esc(q.why) + '</div>') +
        '<div class="row"><button type="button" class="btn primary big" id="g-next">' + (more ? '下一題 ▶' : '看結果 🏁') + '</button></div>';
      safe(function () { $('g-next').focus({ preventScroll: true }); });
    }
    function end() {
      var n = run.qs.length, pct = Math.round(run.ok / n * 100), host = sec();
      if (run.mode === 'test') { doneRec(uid + 't', pct); report('geo:test', run.ok, n); }
      else { doneRec(uid + 'p' + run.g, pct); report('geo:practice', run.ok, n); }
      var pass = pct >= PASS, list = run.mode === 'test' ? '<div class="card">' + run.res.map(function (x, i) {
        return '<div class="ri ' + (x.ok ? 'ok' : 'no') + '" data-ok="' + x.ok + '"><span class="mk">' + (x.ok ? '✔' : '✘') + '</span><b>(' + (i + 1) + ')</b> ' + esc(x.q.q) + (x.ok ? '' : '<br><span class="right">正解：' + esc(ansText(x.q)) + '</span><br>💡 ' + esc(x.q.why)) + '</div>';
      }).join('') + '</div>' : '';
      host.innerHTML = '<div class="card center"><p style="font-size:3rem;margin:0">' + (pass ? '🏆' : '💪') + '</p><p class="res-tot" id="g-score">' + (run.mode === 'test' ? pct + ' 分' : run.ok + ' / ' + n) + '</p><p>' +
        (run.mode === 'test' ? (pass ? '🎉 ' + PASS + ' 分以上，過關！' : '💪 再練一下，' + PASS + ' 分就過關') + '　答對 ' + run.ok + ' / ' + n + ' 題' : '答對 ' + pct + '%' + (pass ? '，這一組過關！' : '，' + PASS + '% 就過關，再試一次')) + '</p><div class="row">' +
        (run.mode === 'test' ? '<button type="button" class="btn primary big" data-redo="t">再考一次 ▶</button>' : '<button type="button" class="btn primary big" data-redo="' + run.g + '">再做一次 ▶</button>' + (run.g < 3 ? '<button type="button" class="btn" data-go="' + (run.g + 1) + '">第 ' + (run.g + 1) + ' 組 ▶</button>' : '<button type="button" class="btn" id="go-exam">📝 去單元測驗</button>') + '<button type="button" class="btn" id="g-home">回練習首頁</button>') +
        '</div></div>' + list;
      run = null; window.scrollTo(0, 0);
    }
    function eHome() {
      run = null; var b = doneVal(uid + 't');
      $('exam').innerHTML = '<div class="card center"><h2>📝 單元測驗</h2>' + (b != null ? '<p><b>最高 ' + b + ' 分</b>' + (b >= PASS ? ' ✅' : '') + '</p>' : '') + '<p>10 題，一題一題作答，全部答完才看分數和解說。<b>' + PASS + ' 分以上就過關。</b></p><button type="button" class="btn primary big" data-redo="t">開始 ▶</button></div>';
    }
    function onClick(e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.id === 'g-next') { run.i++; if (run.i >= run.qs.length) end(); else one(); return; }
      if (t.getAttribute('data-go')) return start('prac', +t.getAttribute('data-go'));
      var r = t.getAttribute('data-redo'); if (r) return r === 't' ? start('test') : start('prac', +r);
      if (t.id === 'go-exam') return setTab('exam');
      if (t.id === 'g-home') return pHome();
      if (t.id === 'go-prac') return setTab('prac');
    }
    $('prac').addEventListener('click', onClick); $('exam').addEventListener('click', onClick); $('learn').addEventListener('click', onClick);
    function setTab(k) {
      ['intro', 'learn', 'prac', 'exam'].forEach(function (x) { if (!$('tab-' + x) || !$(x)) return; $('tab-' + x).setAttribute('aria-selected', String(x === k)); $(x).hidden = x !== k; });   // intro＝🎬 開場（世界篇；unit.html 有放才有）
      if (k === 'prac' && !(run && run.mode === 'prac')) pHome();
      if (k === 'exam' && !(run && run.mode === 'test')) eHome();
      window.scrollTo(0, 0);
    }
    $('tab-learn').onclick = function () { setTab('learn'); };
    $('tab-prac').onclick = function () { setTab('prac'); };
    $('tab-exam').onclick = function () { setTab('exam'); };
    var tab = /[?&]tab=(prac|exam)/.exec(location.search); setTab(tab ? tab[1] : 'learn');
    // goto：測試用（跳到這一輪的第 i 題）
    return { unit: U, run: function () { return run; }, start: start, setTab: setTab, goto: function (i) { if (run) { run.i = i; one(); } } };
  }

  return { W: W, R_PIN: R_PIN, R_AREA: R_AREA, SLOP: SLOP, PASS: PASS, GROUP: GROUP, N_PRAC: N_PRAC, N_TEST: N_TEST, TYPES: TYPES, LAB: LAB, LIM: LIM, TW_VIEW: TW_VIEW, UNIT_RE: UNIT_RE,
    esc: esc, hash: hash, perm: perm, view: view, pinXY: pinXY, pinsOf: pinsOf, hitAt: hitAt, noOverlap: noOverlap, shapePath: shapePath, pathBox: pathBox, slotsOf: slotsOf, nearSlot: nearSlot,
    initState: initState, ready: ready, check: check, ansText: ansText, validate: validate, figSVG: figSVG, qHTML: qHTML, mount: mount, css: css,
    add: add, unit: unit, units: function () { return units; }, groupOf: groupOf, page: page };
});
