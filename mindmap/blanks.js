/* 社會科／自然科心智圖：挖空抽題引擎（純函式，可在瀏覽器與 node 測試共用）
 * - rng(seed)：可重現的亂數（mulberry32）
 * - normPoint(p)：重點 → {text, cands:[{w, core, i, alts}]}（i＝在 text 中的位置，-1＝找不到）
 * - drawCloze(points, store, rand, opts)：每條重點抽 1～2 個候選詞挖空，整份約 35～50%
 * - drawArch(items, store, rand, ratio)：背架構第 2／3 關，隨機挖約 60% 的節點（含 rel）
 * - recordAnswer / commitSession：寫回以「詞」為單位的答題紀錄（localStorage kids_mm_blanks，由 mindmap.js 存取）
 * 抽題規則見 mindmap/data/FORMAT.md。全域名稱沿用 SocialBlanks（兩科共用）。
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.SocialBlanks = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function rng(seed) {
    var a = (seed >>> 0) || 1;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(arr, rand) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* 重點可以是：
   *   物件（正式格式）：{ t: "整句", cands: [{ w: "臺南", core: true }, { w: "1624" }] }
   *   字串（簡寫）    ："……【核心詞】……〔補充詞〕……"   【】＝core、〔〕＝非 core 候選
   * 同一個詞在句中出現多次時，取第一個「不跟其他候選重疊」的位置；core 先放。 */
  function normPoint(p) {
    var text = '', cands = [];
    if (typeof p === 'string') {
      var re = /【(.+?)】|〔(.+?)〕/g, last = 0, m;
      while ((m = re.exec(p))) {
        text += p.slice(last, m.index);
        var w = m[1] || m[2];
        cands.push({ w: w, core: !!m[1], i: text.length });
        text += w; last = re.lastIndex;
      }
      text += p.slice(last);
      return { text: text, cands: cands };
    }
    text = p.t || '';
    var used = [];
    var list = (p.cands || []).slice().sort(function (a, b) { return (b.core ? 1 : 0) - (a.core ? 1 : 0); });
    list.forEach(function (c) {
      var from = 0, i = -1;
      while ((i = text.indexOf(c.w, from)) >= 0) {
        var hit = used.some(function (u) { return i < u[1] && i + c.w.length > u[0]; });
        if (!hit) break;
        from = i + 1;
      }
      if (i >= 0) used.push([i, i + c.w.length]);
      cands.push({ w: c.w, core: !!c.core, i: i, alts: c.alts || null });
    });
    cands.sort(function (a, b) { return a.i - b.i; });
    return { text: text, cands: cands };
  }

  /* 把一條重點切成段落；hidden＝要挖空的候選索引集合 */
  function segments(np, hidden) {
    var out = [], pos = 0;
    np.cands.forEach(function (c, ci) {
      if (c.i < 0) return;
      if (c.i > pos) out.push({ t: np.text.slice(pos, c.i) });
      out.push({ c: c, ci: ci, hidden: !!(hidden && hidden.has(ci)) });
      pos = c.i + c.w.length;
    });
    if (pos < np.text.length) out.push({ t: np.text.slice(pos) });
    return out;
  }

  /* 權重：答錯過加權、最近一次答錯再加權；連續答對 3 次降權；core 稍微優先，越久沒出現越優先 */
  function weight(st, core, sess) {
    var w = core ? 1.5 : 1;
    if (!st) return w * (core ? 1.4 : 1.1);
    if (st.last === 'wrong') w *= 3;
    else if ((st.wrong || 0) > 0) w *= 1.6;
    if ((st.streak || 0) >= 3) w *= 0.25;
    if (core && sess) w *= 1 + 0.5 * Math.max(0, sess - (st.lastShown || 0) - 1);
    return w;
  }

  /* 依權重抽 k 個、不重複（Efraimidis–Spirakis） */
  function wsample(items, k, rand) {
    return items.map(function (x) { return { x: x, key: Math.pow(rand(), 1 / Math.max(x.weight, 1e-6)) }; })
      .sort(function (a, b) { return b.key - a.key; })
      .slice(0, k).map(function (o) { return o.x; });
  }

  /* points: [{ pid, np }]；store: { sess, w: { 詞: {ok, wrong, streak, last, lastShown} } }
   * 回傳 { sess, picks: { pid: [ci, ...] }, words: [被挖空的詞] }（尚未寫回 store，要再呼叫 commitSession） */
  function drawCloze(points, store, rand, opts) {
    opts = opts || {};
    store = store || {};
    var W = store.w || {};
    var sess = (store.sess || 0) + 1;
    var ratio = opts.ratio != null ? opts.ratio : 0.35 + rand() * 0.15;
    var all = [];
    points.forEach(function (P, pi) {
      P.np.cands.forEach(function (c, ci) {
        if (c.i < 0) return;
        all.push({ pi: pi, ci: ci, c: c, weight: weight(W[c.w], c.core, sess) });
      });
    });
    var chosen = points.map(function () { return []; });
    function has(o) { return chosen[o.pi].indexOf(o.ci) >= 0; }
    function add(o) { if (!has(o) && chosen[o.pi].length < 2) chosen[o.pi].push(o.ci); }
    // 1) core 規則：前兩次練習都沒出現的 core 詞，這次一定出（每條重點最多 2 個，最久沒出現的先）
    var forced = all.filter(function (o) { return o.c.core && sess - ((W[o.c.w] || {}).lastShown || 0) >= 3; });
    forced.sort(function (a, b) { return ((W[a.c.w] || {}).lastShown || 0) - ((W[b.c.w] || {}).lastShown || 0); });
    forced.forEach(add);
    // 2) 每條有候選的重點至少挖 1 個
    points.forEach(function (P, pi) {
      if (chosen[pi].length) return;
      var opt = all.filter(function (o) { return o.pi === pi; });
      if (opt.length) add(wsample(opt, 1, rand)[0]);
    });
    // 3) 補到目標比例（每條最多 2 個）
    var target = Math.round(all.length * ratio);
    var n = chosen.reduce(function (s, a) { return s + a.length; }, 0);
    if (n < target) {
      var rest = all.filter(function (o) { return !has(o) && chosen[o.pi].length < 2; });
      wsample(rest, rest.length, rand).forEach(function (o) {
        if (n >= target || chosen[o.pi].length >= 2) return;
        add(o); n++;
      });
    }
    var picks = {}, words = [];
    points.forEach(function (P, pi) {
      chosen[pi].sort(function (a, b) { return a - b; });
      picks[P.pid] = chosen[pi];
      chosen[pi].forEach(function (ci) { words.push(P.np.cands[ci].w); });
    });
    return { sess: sess, picks: picks, words: words, total: all.length };
  }

  /* 背架構：items＝[{id}]（課、主題、rel…），store.a 以 id 記錄；回傳要挖空的 id 陣列（保持原順序） */
  function drawArch(items, store, rand, ratio) {
    var A = (store && store.a) || {};
    var k = Math.max(1, Math.round(items.length * (ratio == null ? 0.6 : ratio)));
    var pool = items.map(function (it) { return { id: it.id, weight: weight(A[it.id], false, 0) }; });
    var pick = {};
    wsample(pool, k, rand).forEach(function (o) { pick[o.id] = 1; });
    return items.filter(function (it) { return pick[it.id]; }).map(function (it) { return it.id; });
  }

  function commitSession(store, draw) {
    store.sess = draw.sess;
    store.w = store.w || {};
    draw.words.forEach(function (w) { var st = store.w[w] || (store.w[w] = { ok: 0, wrong: 0, streak: 0 }); st.lastShown = draw.sess; });
    return store;
  }

  /* bucket：'w'（重點詞）或 'a'（背架構節點 id） */
  function recordAnswer(store, key, ok, bucket) {
    var b = bucket || 'w';
    store[b] = store[b] || {};
    var st = store[b][key] || (store[b][key] = { ok: 0, wrong: 0, streak: 0 });
    if (ok) { st.ok++; st.streak = (st.streak || 0) + 1; st.last = 'ok'; }
    else { st.wrong++; st.streak = 0; st.last = 'wrong'; }
    return st;
  }

  return { rng: rng, shuffle: shuffle, normPoint: normPoint, segments: segments, weight: weight, wsample: wsample,
    drawCloze: drawCloze, drawArch: drawArch, commitSession: commitSession, recordAnswer: recordAnswer };
});
