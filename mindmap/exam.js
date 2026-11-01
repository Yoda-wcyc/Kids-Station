/* exam.js — 心智圖〈📄 單元測驗／📝 段考模擬〉組卷與判分（2026-11-01）。純函式：不碰 DOM／localStorage，瀏覽器（window.MMExam）與 Node 共用（node test/mindmap-exam.test.js）。
   資料：<資料>.exam[單元id] = {qs:[新題], grp:{題組}}（data/<科>/exam1-4.js）＋單元的練習題庫 unit.quiz。
   單元測驗 25 題／100 分（每題 4 分）：新題全部（選擇 7、是非 2、配對或排序 1、題組 3）＋題庫挑 12 題（選擇 8、是非 3、配對或排序 1）。
   段考模擬 30 題／100 分（前 20 題 3 分、後 10 題 4 分）：兩個單元各 15 題＝新題（選擇 4、是非 1）＋題庫（選擇 4、是非 2、配對或排序 1）＋該單元的題組 3 題。
   三個單元一份（2026-11-02，社會五下 u7～u9）：各 10 題＝新題（選擇 2）＋題庫（選擇 2、是非 2、配對或排序 1）＋題組 3 題。
   難度：整份目標 d1 40%、d2 40%、d3 20%（新題的 d 先算，缺的從題庫補，題庫不夠就就近補）。
   排序：一般題照 d 由小到大（同 d：是非 → 選擇 → 配對／排序），題組放最後、組內也照 d。
   避開最近做過的題：recent(key) 為真的題排到最後才用（key：題庫 'q:'+題目雜湊、新題 'x:'+題 id；mindmap.js 把最近 7 天作答過的記在 kids_mm_exam._seen）。 */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.MMExam = factory();
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var UNIT_Q = { bank: { mc: 8, tf: 3, om: 1 } };
  var MOCK_Q = { fresh: { mc: 4, tf: 1 }, bank: { mc: 4, tf: 2, om: 1 } };
  var MOCK3_Q = { fresh: { mc: 2 }, bank: { mc: 2, tf: 2, om: 1 } };   // 三個單元一份：每單元 10 題
  var MIX = [0.4, 0.4, 0.2], TRANK = { tf: 0, mc: 1, order: 2, match: 2 };
  var SEEN_DAYS = 7, DAY = 864e5;
  function kids(d) { return d.lessons || d.topics || d.children || []; }
  function dOf(q) { return +q.d || 1; }
  function tOf(q) { return q.type === 'order' || q.type === 'match' ? 'om' : q.type; }
  function shuffle(a, rand) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // 每種難度要幾題（總題數 n → d1、d2 各四成，其餘 d3）
  function target(n) { var a = Math.round(n * MIX[0]), b = Math.round(n * MIX[1]); return { 1: a, 2: b, 3: n - a - b }; }
  function minus(need, list) { list.forEach(function (it) { var d = dOf(it.q); need[d] = (need[d] || 0) - 1; }); return need; }
  /* 從 pool（[{q, key, …}]）照 quotas（{mc:4, tf:1, om:1}）挑題：沒做過的先、缺的難度先（need 會被扣），同條件隨機。
     配對／排序先挑（難度選擇最少）、選擇題最後（四種難度都有，拿來補齊）。 */
  function pick(pool, quotas, need, recent, rand) {
    var used = {}, out = [];
    pool = shuffle(pool, rand);
    ['om', 'tf', 'mc'].forEach(function (t) {
      for (var c = 0; c < (quotas[t] || 0); c++) {
        var best = null, bk = null;
        pool.forEach(function (it, i) {
          if (used[i] || tOf(it.q) !== t) return;
          var d = dOf(it.q), k = [recent(it.key) ? 1 : 0, need[d] > 0 ? 0 : 1, -(need[d] || 0), i];
          if (!bk || cmp(k, bk) < 0) { best = i; bk = k; }
        });
        if (best == null) break;
        used[best] = 1; out.push(pool[best]); need[dOf(pool[best].q)]--;
      }
    });
    return out;
  }
  function cmp(a, b) { for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; }
  // 題目 → 一份卷子裡的一題：key（避開最近做過）、mk（錯題庫 id）、src（'x' 新題／'q' 題庫）
  function bankItem(u, q, hash) { var h = hash(q.q); return { q: q, u: u.id, src: 'q', key: 'q:' + h, mk: u.id + '|q|' + h }; }
  function freshItem(u, q, grp) { return { q: q, u: u.id, src: 'x', key: 'x:' + q.id, mk: u.id + '|X|' + q.id, grp: grp || null }; }
  function bankOf(u, hash) { var seen = {}; return (u.quiz || []).filter(function (q) { var h = hash(q.q); if (seen[h]) return false; seen[h] = 1; return true; }).map(function (q) { return bankItem(u, q, hash); }); }
  function grpItems(u, E) { return E && E.grp ? E.grp.qs.slice().sort(function (a, b) { return dOf(a) - dOf(b); }).map(function (q) { return freshItem(u, q, E.grp); }) : []; }
  // 一般題照 d（同 d 照題型）排、題組接在最後；配分讓總分剛好 100（題數除不盡時，後面的難題多 1 分）
  function finish(plain, groups) {
    var items = plain.map(function (it, i) { return { it: it, k: [dOf(it.q), TRANK[it.q.type] || 0, i] }; }).sort(function (a, b) { return cmp(a.k, b.k); }).map(function (x) { return x.it; });
    groups.forEach(function (g) { items = items.concat(g); });
    var n = items.length, base = Math.floor(100 / n), extra = 100 - base * n;
    items.forEach(function (it, i) { it.pts = base + (i >= n - extra ? 1 : 0); });
    return items;
  }
  function opts0(o) { o = o || {}; return { hash: o.hash || String, recent: o.recent || function () { return false; }, rand: o.rand || Math.random }; }
  // 📄 單元測驗
  function unitPaper(D, uid, o) {
    o = opts0(o);
    var u = (D.units || []).filter(function (x) { return x.id === uid; })[0], E = D.exam && D.exam[uid]; if (!u || !E) return null;
    var fresh = E.qs.map(function (q) { return freshItem(u, q); }), gi = grpItems(u, E);
    var need = minus(target(fresh.length + gi.length + 12), fresh.concat(gi));
    var bank = pick(bankOf(u, o.hash), UNIT_Q.bank, need, o.recent, o.rand);
    return { kind: 'unit', id: uid, units: [uid], items: finish(fresh.concat(bank), [gi]) };
  }
  // 📝 段考模擬（兩個或三個單元）
  function mockPaper(D, uids, o) {
    o = opts0(o);
    var plain = [], groups = [], Q = uids.length === 3 ? MOCK3_Q : MOCK_Q, per = 30 / uids.length;
    for (var k = 0; k < uids.length; k++) {
      var u = (D.units || []).filter(function (x) { return x.id === uids[k]; })[0], E = D.exam && D.exam[uids[k]]; if (!u || !E) return null;
      var gi = grpItems(u, E), need = minus(target(per), gi);
      var fresh = pick(E.qs.map(function (q) { return freshItem(u, q); }), Q.fresh, need, o.recent, o.rand);
      var bank = pick(bankOf(u, o.hash), Q.bank, need, o.recent, o.rand);
      plain = plain.concat(fresh, bank); groups.push(gi);
    }
    return { kind: 'mock', id: 'mock-' + uids.join('-'), units: uids.slice(), items: finish(plain, groups) };
  }
  // 判分：st＝quizkit 作答狀態（mc/tf 用 pick；order 用 placed；match 用 map）
  function isRight(q, st) {
    if (!st) return false;
    if (q.type === 'mc' || q.type === 'tf') return st.pick === q.a;
    if (q.type === 'order') return !!st.placed && st.placed.length === q.items.length && st.placed.every(function (v, i) { return v === i; });
    if (q.type === 'match') return !!st.map && q.pairs.every(function (_, l) { return st.map[l] === l; });
    return false;
  }
  function answered(q, st) {
    if (!st) return false;
    if (q.type === 'mc' || q.type === 'tf') return st.pick != null;
    if (q.type === 'order') return !!st.placed && st.placed.length === q.items.length;
    if (q.type === 'match') return !!st.map && Object.keys(st.map).length === q.pairs.length;
    return false;
  }
  function score(items, oks) { var s = 0, r = 0; items.forEach(function (it, i) { if (oks[i]) { s += it.pts; r++; } }); return { score: s, right: r, total: items.length }; }

  // ---------- 交卷後「建議複習」：錯的題 → 對到哪個重點節點 ----------
  // 新題寫了 n；題庫題用字比對：題目＋答案＋解析裡出現最多（越長的詞分數越高）該節點的標題、keys、重點候選詞，就算那個節點（第 2 層）
  function walk(u) { var out = []; (function w(d, depth, anc) { out.push({ d: d, depth: depth, anc: anc }); kids(d).forEach(function (c) { w(c, depth + 1, anc.concat([d])); }); })(u, 0, []); return out; }
  function words(d) {
    var w = [d.title].concat(d.keys || []), add = function (p) { (typeof p === 'string' ? (p.match(/【(.+?)】|〔(.+?)〕/g) || []).map(function (x) { return x.slice(1, -1); }) : (p.cands || []).map(function (c) { return c.w; })).forEach(function (x) { w.push(x); }); };
    (function r(n) { w.push(n.title); (n.keys || []).forEach(function (k) { w.push(k); }); if (n.cands) add(n); (n.points || []).forEach(add); kids(n).forEach(r); })(d);
    return Array.from(new Set(w.filter(function (x) { return x && String(x).length >= 2; })));
  }
  function ansText(q) { return q.type === 'mc' ? q.opts[q.a] : q.type === 'order' ? q.items.join('') : q.type === 'match' ? q.pairs.map(function (p) { return p.join(''); }).join('') : ''; }
  function nodeOf(u, q) {
    var text = String(q.q) + ansText(q) + String(q.why || ''), best = null, bs = 0;
    walk(u).filter(function (x) { return x.depth === 2 || (x.depth === 1 && !kids(x.d).length); }).forEach(function (x) {
      if (!x.vocab) x.vocab = words(x.d);
      var s = 0; x.vocab.forEach(function (w) { if (text.indexOf(w) >= 0) s += w.length; });
      if (s > bs) { bs = s; best = x.d.id; }
    });
    return best;
  }
  // 節點 id → 第 2 層以上的祖先（太深的節點往上收，建議比較好懂）＋路徑標題
  function nodeInfo(u, id) {
    var hit = walk(u).filter(function (x) { return x.d.id === id; })[0]; if (!hit) return null;
    var chain = hit.anc.slice(1).concat([hit.d]).slice(0, 2), top = chain[chain.length - 1];
    return { id: top.id, path: chain.map(function (d) { return d.title; }) };
  }
  // wrong：答錯的題（item）；回傳 [{u, id, path, n}]（錯越多越前面，最多 max 個）
  function suggest(D, wrong, max) {
    var by = {}, list = [];
    wrong.forEach(function (it) {
      var u = (D.units || []).filter(function (x) { return x.id === it.u; })[0]; if (!u) return;
      var nid = it.q.n || (it.grp && it.grp.n) || nodeOf(u, it.q), info = nid ? nodeInfo(u, nid) : null;
      var k = it.u + '|' + (info ? info.id : '');
      if (!by[k]) list.push(by[k] = { u: it.u, id: info ? info.id : '', path: info ? info.path : [u.title], n: 0 });
      by[k].n++;
    });
    return list.sort(function (a, b) { return b.n - a.n; }).slice(0, max || 3);
  }
  // 最近做過的題：seen＝{key: 時間}；fresh(seen, now) → 回傳判斷函式；prune 只留 7 天內的
  function recentFn(seen, now) { seen = seen || {}; return function (k) { return seen[k] > now - SEEN_DAYS * DAY; }; }
  function prune(seen, now) { var o = {}; Object.keys(seen || {}).forEach(function (k) { if (seen[k] > now - SEEN_DAYS * DAY) o[k] = seen[k]; }); return o; }
  return { unitPaper: unitPaper, mockPaper: mockPaper, pick: pick, target: target, isRight: isRight, answered: answered, score: score, nodeOf: nodeOf, nodeInfo: nodeInfo, suggest: suggest, recentFn: recentFn, prune: prune, tOf: tOf, SEEN_DAYS: SEEN_DAYS };
});
