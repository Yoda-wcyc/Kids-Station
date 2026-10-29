/* 社會科／自然科心智圖：挖空抽題引擎（純函式，可在瀏覽器與 node 測試共用）
 * - rng(seed)：可重現的亂數（mulberry32）
 * - normPoint(p)：重點 → {text, cands:[{w, core, i, alts}]}（i＝在 text 中的位置，-1＝找不到）
 * - drawCloze(points, store, rand, opts)：每條重點抽 1～2 個候選詞挖空，整份約 35～50%
 * - archNodes(unit)：背架構要考的節點（第 1 層以下的節點；連線上的關係詞 rel 不在裡面，只當提示顯示）
 * - drawArch(items, store, rand, ratio)：背架構第 2／3 關，隨機挖約 60% 的節點（rel 一律不挖）
 * - RELS：合法關係詞清單（只畫在連線上當提示；不挖空、不當 cands、不當練習題答案）
 * - GENERIC／isNoQuiz(w)：不考詞＝關係詞＋泛用標籤（應用、方法、種類…，單看這個詞學不到知識）。
 *   節點標題或候選詞（去掉標點與空白後）等於不考詞 → 只顯示、不挖空、不計分（Yoda 2026-10-11）。
 *   候選詞標 real:true 可豁免（例：「開花→結果→結種子」的「結果」＝結出果實，是實際知識）
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

  /* 合法關係詞（自然科概念圖連線上的字）。Yoda 2026-10-11：關係詞一律不挖空；「要」「可」整個刪除，不在清單內 */
  var RELS = ['觀察', '推論', '使用', '發現', '驗證', '了解', '應用', '包含', '功能', '例如', '利用', '操作', '影響', '位置表示', '升落情形', '操作實驗'];
  function isRel(w) { return RELS.indexOf(w) >= 0; }

  /* 泛用標籤：單看這個詞學不到任何知識。有實際內容的詞（中性、花、繁殖、經濟植物、折射、冬至…）不要放進來 */
  var GENERIC = ['應用', '方法', '種類', '特性', '現象', '原因', '結果', '影響', '例子', '其他',
    '特色', '用途', '作用', '類型', '分類', '說明', '介紹', '比較', '變化', '過程', '步驟', '優點', '缺點', '重點', '內容', '名稱', '關係', '條件', '意義'];
  function normW(w) { return String(w == null ? '' : w).replace(/[\s　、，,。．.·・\-－—~～（）()「」『』:：;；!！?？"'“”‘’\/【】\[\]→]/g, ''); }
  function isNoQuiz(w) { var n = normW(w); return !!n && (RELS.indexOf(n) >= 0 || GENERIC.indexOf(n) >= 0 || n === '要' || n === '可'); }
  /* 候選詞能不能挖空：不考詞不挖，除非資料標 real:true */
  function candOk(c) { return !isNoQuiz(c.w) || !!c.real; }

  function kidsOf(d) { return d.lessons || d.topics || d.children || []; }

  /* 背架構節點：依序列出第 1 層以下每個節點 { d, depth, i（在父節點中的序號）, li（第幾個第 1 層）, parent, nq }。
   * rel 不在裡面（關係詞只畫在連線上當提示，不是作答格）；nq＝標題是不考詞（例「應用」）→ 只顯示當提示、不挖空、不計分 */
  function archNodes(u) {
    var out = [];
    kidsOf(u).forEach(function (L, li) {
      (function w(d, depth, i, parent) {
        out.push({ d: d, depth: depth, i: i, li: li, parent: parent, nq: isNoQuiz(d.title) });
        kidsOf(d).forEach(function (c, ci) { w(c, depth + 1, ci, d); });
      })(L, 1, li, u);
    });
    return out;
  }

  function shuffle(arr, rand) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* 練習題一輪抽 n 題（2026-10-29）：先出還沒答對過的（okSet 沒有）→ 錯題庫裡的（mkSet 有）→ 其他；同一層內隨機，
   * 同一題（題目文字雜湊一樣）一輪只出一次；抽完再整輪打亂。題數不到 n 就全出。hashOf＝題目文字 → 雜湊。 */
  function pickQuiz(qs, n, hashOf, okSet, mkSet, rand) {
    var tiers = [[], [], []], seen = {};
    (qs || []).forEach(function (q) {
      var h = hashOf(q.q); if (seen[h]) return; seen[h] = 1;
      tiers[!okSet[h] ? 0 : mkSet[h] ? 1 : 2].push(q);
    });
    return shuffle(tiers.reduce(function (a, t) { return a.concat(shuffle(t, rand)); }, []).slice(0, n), rand);
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
      var o = { w: c.w, core: !!c.core, i: i, alts: c.alts || null };
      if (c.real) o.real = true;
      cands.push(o);
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
        if (c.i < 0 || !candOk(c)) return;   // 關係詞、泛用詞不挖空（資料端 data.test 也擋）
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

  /* 背架構：items＝[{id}]（課、主題、子節點），store.a 以 id 記錄；回傳要挖空的 id 陣列（保持原順序）
   * 關係詞（id 以 rel: 開頭或 kind:'rel'）、不考詞節點（nq:true 或 title 是不考詞）一律不挖，也不算進分母 */
  function drawArch(items, store, rand, ratio) {
    var A = (store && store.a) || {};
    items = items.filter(function (it) { return it.kind !== 'rel' && String(it.id).indexOf('rel:') !== 0 && !it.nq && !(it.title != null && isNoQuiz(it.title)); });
    if (!items.length) return [];
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

  /* ---------- 背架構判分：放在正確的上層底下就算對，同一上層的兄弟順序不計（Yoda 2026-10-11） ----------
   * archBoard(nodes)：nodes＝[{id, parent, title}]（全部節點，parent＝上層 id；第 1 層的 parent＝單元 id），依原本順序。
   *   order(p)        目前畫面上 p 底下的子節點順序（兄弟互換後會變；子格跟著節點走＝子孫不動）
   *   place(card, slot)  第 1 關：卡片放進空格。card 就是 slot、或兩個是兄弟（同一上層）→ 對；兄弟時兩者互換位置（各自的子格跟著走）。
   *                      同名（例：兩個「中性」）也算對、不互換。回 {ok, target：該標成已填的節點, swapped}
   *   answer(slot, open, test)  第 2／3 關：在 slot 這格作答；open＝還沒填的作答格 id 清單；test(id)＝這個節點的答案對不對。
   *                      先看 slot 自己，再看同一上層、還沒填的兄弟；對到兄弟就互換位置。回 對到的節點 id 或 null（已填過的兄弟不能重複得分）
   *   cands(slot, open)  同一上層、還沒填的兄弟（含 slot 自己、排第一）
   *   fill(id)／filled[id]  標成已填（提示格、不考詞節點一開始就填）
   */
  function archBoard(nodes) {
    var B = { par: {}, title: {}, kids: {}, ord: {}, filled: {} };
    (nodes || []).forEach(function (n) { B.par[n.id] = n.parent; B.title[n.id] = n.title; (B.kids[n.parent] = B.kids[n.parent] || []).push(n.id); });
    B.order = function (p) { return (B.ord[p] || B.kids[p] || []).slice(); };
    B.swap = function (a, b) {
      if (a === b || B.par[a] !== B.par[b]) return false;
      var p = B.par[a], o = B.order(p), i = o.indexOf(a), j = o.indexOf(b); if (i < 0 || j < 0) return false;
      o[i] = b; o[j] = a; B.ord[p] = o; return true;
    };
    B.fill = function (id) { B.filled[id] = 1; };
    B.place = function (card, slot) {
      if (B.filled[slot] || !(card in B.par) || !(slot in B.par)) return { ok: false };
      if (card === slot) { B.fill(card); return { ok: true, target: card }; }
      if (B.par[card] === B.par[slot] && !B.filled[card]) { B.swap(card, slot); B.fill(card); return { ok: true, target: card, swapped: true }; }
      if (B.title[card] != null && B.title[card] === B.title[slot]) { B.fill(slot); return { ok: true, target: slot }; }
      return { ok: false };
    };
    B.cands = function (slot, open) {
      var set = {}; (open || []).forEach(function (id) { set[id] = 1; });
      var out = B.filled[slot] ? [] : [slot];
      B.order(B.par[slot]).forEach(function (id) { if (id !== slot && set[id] && !B.filled[id]) out.push(id); });
      return out;
    };
    B.answer = function (slot, open, test) {
      var c = B.cands(slot, open), hit = null;
      for (var i = 0; i < c.length; i++) if (test(c[i])) { hit = c[i]; break; }
      if (hit == null) return null;
      if (hit !== slot) B.swap(slot, hit);
      B.fill(hit);
      return hit;
    };
    return B;
  }

  /* 第 4 關：課（大分支）的順序不計 → 把小朋友寫的每一塊配到最像的那一課。
   * pairBlocks(nBlocks, nGroups, score)：score(b, g) ≥ 0（越大越像）；依分數由高到低貪婪配對，沒配到的再照順序補。回 [每塊配到的 g] */
  function pairBlocks(nB, nG, score) {
    var all = [], out = [], usedG = {}, b, g;
    for (b = 0; b < nB; b++) { out.push(-1); for (g = 0; g < nG; g++) all.push({ b: b, g: g, s: score(b, g) }); }
    all.sort(function (x, y) { return (y.s - x.s) || (Math.abs(x.b - x.g) - Math.abs(y.b - y.g)) || (x.b - y.b) || (x.g - y.g); });
    all.forEach(function (x) { if (x.s > 0 && out[x.b] < 0 && !usedG[x.g]) { out[x.b] = x.g; usedG[x.g] = 1; } });
    for (b = 0; b < nB; b++) if (out[b] < 0) { for (g = 0; g < nG; g++) if (!usedG[g]) { out[b] = g; usedG[g] = 1; break; } }
    return out;
  }

  return { RELS: RELS, GENERIC: GENERIC, isRel: isRel, isNoQuiz: isNoQuiz, candOk: candOk, normW: normW, archNodes: archNodes, rng: rng, shuffle: shuffle, pickQuiz: pickQuiz, normPoint: normPoint, segments: segments, weight: weight, wsample: wsample,
    drawCloze: drawCloze, drawArch: drawArch, commitSession: commitSession, recordAnswer: recordAnswer, archBoard: archBoard, pairBlocks: pairBlocks };
});
