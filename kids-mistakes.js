/* kids-mistakes.js — 錯題庫（社會、自然、數學天平、AI；英文另有 app.js 的 ke_mistakes，不動）
   規則（比照英文 app.js record()）：
   - 答錯 → 收進錯題庫（c 歸零、w＋1、t＝現在）；畢業後又答錯 → 重新收進（w 接著累加）。
   - 在錯題庫裡的題：連續答對 3 次（GRAD）就畢業移出，留墓碑 {d:1}，同步到別台才不會被救回來。
   - 「只練錯題」＝把還在錯題庫裡的題混成一輪作答（每科最多 30 題）；一輪結束送 practice_round '<科>:mistakes'。
   localStorage kids_mistakes = { social:{id:entry}, science:{…}, math:{…}, ai:{…} }
     entry＝{c, w, t, u, p}；墓碑＝{d:1, w, t, u}
     c＝在錯題庫裡連續答對幾次、w＝累計答錯次數、t＝最近一次答錯、u＝最後更新、p＝顯示／重練用的資料（各科不同，見下）
     社會／自然 id＝'<單元>|w|<重點pid>|<詞>'（考考自己）、'<單元>|a|<節點id>'（背架構）、'<單元>|q|<題目雜湊>'（練習題）
       p＝{u:單元, k:'w'|'a'|'q', s:那句重點／上層位置／題目, a:正確答案, pid?, ci?}
     數學 id＝'eq:<方程式>'，p＝{q:方程式}（天平）；'gcd:<數字>[:gcd|lcm]'，p＝{type:'gcd', nums:[數字], mode:'both'|'gcd'|'lcm', q:顯示文字}（短除法）
     AI id＝'<頁>|<第幾關>'，p＝{pg, tag, q:題目, opts:[選項], c:正解索引, why:說明}（全部是純文字，畫面一律跳脫）
   同步（syncmerge v4 的 mk 欄位）：各科依題目 id 聯集；同一題 u 較新的勝（墓碑也是），答錯次數 w 取較大；墓碑每科最多留 300 筆（最新的）。
   _core 是純函式（不碰 DOM），Node 可以直接 require 來測；畫面（錯題清單、AI 重答）由首頁 subjects.js 呼叫 page()／aiPlay()。 */
(function (G) {
  'use strict';

  // ================= _core：純函式 =================
  var SUBJ = ['social', 'science', 'math', 'ai'];
  var GRAD = 3, MAX_DEL = 300, MAX_ID = 200, MAX_P = 4000, ROUND = 30;
  function obj(x) { return x && typeof x === 'object' && !Array.isArray(x) ? x : null; }
  function nat(x) { x = +x; return isFinite(x) && x > 0 ? Math.floor(x) : 0; }
  function canon(x) {
    if (Array.isArray(x)) return '[' + x.map(canon).join(',') + ']';
    if (x && typeof x === 'object') return '{' + Object.keys(x).sort().filter(function (k) { return x[k] !== undefined; }).map(function (k) { return JSON.stringify(k) + ':' + canon(x[k]); }).join(',') + '}';
    return JSON.stringify(x === undefined ? null : x);
  }
  // p：只收純 JSON、太大的丟掉（同步文件不要被灌爆）
  function normP(p) {
    if (!obj(p)) return {};
    try { var s = JSON.stringify(p); return s.length <= MAX_P ? JSON.parse(s) : {}; } catch (e) { return {}; }
  }
  function normEntry(e) {
    if (!obj(e)) return null;
    var t = nat(e.t), u = Math.max(nat(e.u), t);
    if (e.d) return { d: 1, w: nat(e.w), t: t, u: u };
    return { c: Math.min(nat(e.c), GRAD - 1), w: Math.max(1, nat(e.w)), t: t, u: u, p: normP(e.p) };
  }
  function okId(k) { return typeof k === 'string' && k.length > 0 && k.length <= MAX_ID && k.charAt(0) !== '_'; }
  // 一科的錯題本：整理每筆、墓碑只留最新的 MAX_DEL 筆
  function normBook(b) {
    var o = {}, x = obj(b) || {}, dead = [];
    Object.keys(x).sort().forEach(function (k) { if (!okId(k)) return; var e = normEntry(x[k]); if (!e) return; o[k] = e; if (e.d) dead.push(k); });
    if (dead.length > MAX_DEL) {
      dead.sort(function (a, c) { return (o[c].u - o[a].u) || (a < c ? -1 : 1); }).slice(MAX_DEL).forEach(function (k) { delete o[k]; });
    }
    return o;
  }
  function normAll(x) {
    var o = {}, d = obj(x) || {};
    SUBJ.forEach(function (s) { var b = normBook(d[s]); if (Object.keys(b).length) o[s] = b; });
    return o;
  }
  // 兩筆取哪一筆：u 新的勝；一樣新比內容（不含 w，順序才跟 w 無關＝結合律成立）；w 一律取較大
  function noW(e) { var o = {}; Object.keys(e).forEach(function (k) { if (k !== 'w') o[k] = e[k]; }); return canon(o); }
  function pick(a, b) {
    if (!a) return b; if (!b) return a;
    var x = a.u !== b.u ? (a.u > b.u ? a : b) : (noW(a) >= noW(b) ? a : b), w = Math.max(a.w, b.w);
    if (x.w === w) return x;
    var o = {}; Object.keys(x).forEach(function (k) { o[k] = x[k]; }); o.w = w; return o;
  }
  function mergeBook(a, b) {
    a = normBook(a); b = normBook(b);
    var o = {}; Object.keys(a).concat(Object.keys(b)).sort().forEach(function (k) { if (!(k in o)) o[k] = pick(a[k], b[k]); });
    return normBook(o);
  }
  function mergeAll(a, b) {
    a = normAll(a); b = normAll(b);
    var o = {}; SUBJ.forEach(function (s) { if (a[s] || b[s]) { var m = mergeBook(a[s] || {}, b[s] || {}); if (Object.keys(m).length) o[s] = m; } });
    return o;
  }
  // 記一次作答（改 book）：回 'added'｜'counted'｜'graduated'｜null（答對、但不在錯題庫）
  function mark(book, id, ok, p, now) {
    var cur = book[id], live = cur && !cur.d ? cur : null, t = Math.max(nat(now), cur ? cur.u + 1 : 0);
    if (!ok) { book[id] = { c: 0, w: ((cur && cur.w) || 0) + 1, t: t, u: t, p: obj(p) ? normP(p) : ((live && live.p) || {}) }; return 'added'; }
    if (!live) return null;
    live.c++; live.u = t; if (obj(p)) live.p = normP(p);
    if (live.c >= GRAD) { book[id] = { d: 1, w: live.w, t: live.t, u: t }; return 'graduated'; }
    return 'counted';
  }
  // 還在錯題庫裡的題（最近答錯的在前）；unit＝只看某單元（p.u）
  function liveList(book, unit) {
    var b = obj(book) || {};
    return Object.keys(b).filter(function (k) { var e = b[k]; return e && !e.d && (!unit || (e.p && e.p.u === unit)); })
      .sort(function (x, y) { return (b[y].t - b[x].t) || (x < y ? -1 : 1); })
      .map(function (k) { var e = b[k]; return { id: k, c: e.c, w: e.w, t: e.t, u: e.u, p: e.p || {} }; });
  }
  // 小雜湊（練習題沒有 id，用題目文字算）
  function hash(s) { var h = 5381; s = String(s == null ? '' : s); for (var i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0; return h.toString(36); }
  function plain(s) { return String(s == null ? '' : s).replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim(); }

  var core = { SUBJ: SUBJ, GRAD: GRAD, MAX_DEL: MAX_DEL, ROUND: ROUND, canon: canon, normBook: normBook, normAll: normAll, mergeBook: mergeBook, mergeAll: mergeAll, mark: mark, liveList: liveList, hash: hash, plain: plain };
  if (typeof module !== 'undefined' && module.exports) { module.exports = { _core: core }; return; }

  // ================= 瀏覽器：存取 =================
  var KEY = 'kids_mistakes';
  function loadAll() { try { return normAll(JSON.parse(localStorage.getItem(KEY) || 'null')); } catch (e) { return {}; } }
  function topWin() { try { var t = window.top; return t !== window && t.location.origin === location.origin ? t : null; } catch (e) { return null; } }
  function syncTouch() { try { var K = window.KESync || ((topWin() || {}).KESync); if (K) K.touch(); } catch (e) { } }
  function saveAll(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) { /* 空間不足或私密模式 */ } syncTouch(); }
  function record(subj, id, ok, p) {
    if (SUBJ.indexOf(subj) < 0 || !okId(String(id || ''))) return null;
    var a = loadAll(), b = a[subj] || (a[subj] = {}), r = mark(b, String(id), !!ok, p, Date.now());
    if (r) saveAll(a);
    return r;
  }
  function list(subj, unit) { return liveList(loadAll()[subj], unit); }
  function count(subj, unit) { return list(subj, unit).length; }

  // ================= 瀏覽器：畫面（首頁 #s/<科>/mistakes） =================
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var KLABEL = { w: '考考自己', a: '背架構', q: '練習題' };
  function badgeOf(subj, p) { if (subj === 'math') return p.type === 'gcd' ? '短除法' : '換你算'; if (subj === 'ai') return p.tag ? plain(p.tag).split('·')[0].trim() || 'AI 挑戰' : 'AI 挑戰'; return KLABEL[p.k] || '題目'; }
  function textOf(subj, p) {
    if (subj === 'math') return p.q || '';
    if (subj === 'ai') return (p.q || '') + (p.opts && p.opts[p.c] != null ? '　→ ' + p.opts[p.c] : '');
    if (p.k === 'w') return p.s && p.a ? p.s.split(p.a).join('＿＿') + '（' + p.a + '）' : (p.s || p.a || '');
    if (p.k === 'a') return (p.s || '') + (p.a ? '（' + p.a + '）' : '');
    return (p.s || '') + (p.a ? '　→ ' + p.a : '');
  }
  function dots(c) { var s = ''; for (var i = 0; i < GRAD; i++) s += i < c ? '●' : '○'; return s; }
  function authOK(why) { try { return !window.KidsAuth || KidsAuth.requireLogin(why); } catch (e) { return true; } }
  function quotaOK(kind, retry) { try { return !window.KidsAuth || !KidsAuth.startActivity || KidsAuth.startActivity(kind, retry); } catch (e) { return true; } }

  /* page(box, {k, n, i, units:[[id,標題]], unit, back}) — 錯題清單（免登入）；按「只練錯題」才要登入＋練習額度，通過就 location.hash＝'#s/<k>/mistakes-go[-<單元>]' */
  function page(box, o) {
    var k = o.k, unit = o.unit || '', all = list(k), items = unit ? all.filter(function (e) { return e.p.u === unit; }) : all;
    var nums = ['一', '二', '三', '四', '五', '六', '七', '八'], ulab = {};
    (o.units || []).forEach(function (x, i) { ulab[x[0]] = '單元' + nums[i]; });
    var filt = (o.units && o.units.length) ? '<div class="seg mk-units" role="group" aria-label="依單元篩選">' +
      ['<a class="btn sm' + (unit ? '' : ' primary') + '" href="#s/' + k + '/mistakes">全部（' + all.length + '）</a>'].concat(o.units.map(function (x) {
        var n = all.filter(function (e) { return e.p.u === x[0]; }).length;
        return '<a class="btn sm' + (unit === x[0] ? ' primary' : '') + '" href="#s/' + k + '/mistakes-' + x[0] + '" title="' + esc(x[1]) + '">' + ulab[x[0]] + '（' + n + '）</a>';
      })).join('') + '</div>' : '';
    var lis = items.map(function (e) {
      var u = e.p.u && ulab[e.p.u] ? '<small class="muted">' + ulab[e.p.u] + '</small> ' : '';
      return '<li data-id="' + esc(e.id) + '"><span class="badge">' + esc(badgeOf(k, e.p)) + '</span> ' + u + '<span>' + esc(textOf(k, e.p)) + '</span> <span class="dots">' + dots(e.c) + '</span> <small class="muted">錯 ' + e.w + ' 次</small></li>';
    }).join('');
    box.innerHTML = '<header class="top"><a class="btn" href="#s/' + k + '">← 回' + esc(o.n) + '</a><h1>📕 ' + esc(o.n) + '錯題庫</h1></header>' +
      '<div class="card"><p>答錯的題目會來這裡。同一題<b>連續答對 3 次</b>就會畢業離開 🎓</p>' + filt +
      '<button class="btn primary big" id="mk-go" type="button"' + (items.length ? '' : ' disabled') + '>只練錯題（' + Math.min(items.length, ROUND) + ' 題）</button>' +
      (items.length > ROUND ? '<p class="muted">一輪最多 ' + ROUND + ' 題，先練最近答錯的。</p>' : '') + '</div>' +
      (items.length ? '<ul class="list card" id="mk-list">' + lis + '</ul>' : '<p class="center muted" id="mk-empty">目前沒有錯題 🎉</p>');
    var go = box.querySelector('#mk-go');
    if (go) go.onclick = function start() {
      if (!authOK('練錯題')) return;
      if (!quotaOK(k, start)) return;
      location.hash = '#s/' + k + '/mistakes-go' + (unit ? '-' + unit : '');
    };
  }

  /* aiPlay(box, {back}) — AI 錯題重答（在首頁畫，題目來自錯題本的 p，純文字） */
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function aiPlay(box) {
    if (!authOK('練錯題')) { location.replace('#s/ai/mistakes'); return; }
    var items = list('ai').slice(0, ROUND).filter(function (e) { return e.p && Array.isArray(e.p.opts) && e.p.opts.length && e.p.opts[e.p.c] != null; });
    var R = { i: 0, ok: 0, grad: 0, items: shuffle(items), done: false, picked: null, reported: false };
    G.KidsMistakes._ai = R;   // 測試用
    function head() { return '<header class="top"><a class="btn" href="#s/ai/mistakes">← 回錯題庫</a><h1>📕 AI 錯題練習</h1></header>'; }
    function draw() {
      if (!R.items.length) { box.innerHTML = head() + '<p class="center muted">目前沒有錯題 🎉</p>'; return; }
      if (R.i >= R.items.length) {
        var n = R.items.length;
        if (!R.reported) { R.reported = true; try { if (window.KidsCoins) KidsCoins.report({ type: 'practice_round', item: 'ai:mistakes', correct: R.ok, total: n }); } catch (e) { } }
        box.innerHTML = head() + '<div class="card center result" id="mk-result"><div class="party">' + (R.ok === n ? '🏆' : '💪') + '</div><div class="score">' + R.ok + ' / ' + n + '</div>' +
          (R.grad ? '<p>🎓 有 ' + R.grad + ' 題錯題畢業了！</p>' : '<p>同一題連續答對 3 次就會畢業喔！</p>') +
          '<a class="btn primary" href="#s/ai/mistakes">📕 回錯題庫</a></div>';
        return;
      }
      var e = R.items[R.i], p = e.p, ans = R.picked != null;
      var opts = p.opts.map(function (o, j) {
        var cls = ans ? (j === p.c ? ' right' : j === R.picked ? ' wrong' : '') : '';
        return '<button type="button" class="opt' + cls + '" data-i="' + j + '"' + (ans ? ' disabled' : '') + ' style="display:block;width:100%;margin:8px 0;text-align:left;font-size:1.1rem">' + (ans && j === p.c ? '✓ ' : ans && j === R.picked ? '✗ ' : '') + esc(o) + '</button>';
      }).join('');
      var ok = ans && R.picked === p.c;
      box.innerHTML = head() + '<div class="card"><p class="muted">第 ' + (R.i + 1) + ' / ' + R.items.length + ' 題　答對 ' + R.ok + (p.tag ? '　｜' + esc(p.tag) : '') + '</p>' +
        '<p style="font-size:1.15rem;font-weight:700;line-height:1.6">' + esc(p.q) + '</p>' + opts +
        (ans ? '<div class="fb ' + (ok ? 'ok' : 'no') + '" id="mk-fb"><div class="fbh"><b>' + (ok ? '答對了！🎉' : '再看一次 👀') + '</b></div><div>' + esc(p.why || ('正確答案：' + p.opts[p.c])) + '</div></div>' +
          '<button type="button" class="btn primary big wide" id="mk-next">' + (R.i + 1 < R.items.length ? '下一題 ▶' : '看結果 🏁') + '</button>' : '') + '</div>';
      Array.prototype.forEach.call(box.querySelectorAll('.opt[data-i]'), function (b) {
        b.onclick = function () {
          if (R.picked != null) return;
          R.picked = +b.getAttribute('data-i'); var right = R.picked === p.c; if (right) R.ok++;
          try { if (window.KidsCoins) KidsCoins.answer(right, 'ai'); } catch (x) { }
          if (record('ai', e.id, right) === 'graduated') R.grad++;
          draw();
        };
      });
      var nx = box.querySelector('#mk-next'); if (nx) nx.onclick = function () { R.i++; R.picked = null; draw(); window.scrollTo(0, 0); };
    }
    draw();
  }

  G.KidsMistakes = { _core: core, KEY: KEY, SUBJ: SUBJ, GRAD: GRAD, ROUND: ROUND, record: record, list: list, count: count, loadAll: loadAll, page: page, aiPlay: aiPlay, hash: hash, plain: plain };
})(typeof window !== 'undefined' ? window : globalThis);
