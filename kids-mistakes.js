/* kids-mistakes.js — 錯題庫（社會、自然、數學天平、AI；英文另有 app.js 的 ke_mistakes，不動）
   規則（比照英文 app.js record()）：
   - 答錯 → 收進錯題庫（c 歸零、w＋1、t＝現在）；畢業後又答錯 → 重新收進（w 接著累加）。
   - 在錯題庫裡的題：連續答對 3 次（GRAD）就畢業移出，留墓碑 {d:1}，同步到別台才不會被救回來。
   - 「只練錯題」＝把還在錯題庫裡的題混成一輪作答（每科最多 30 題）；一輪結束送 practice_round '<科>:mistakes'。
   localStorage kids_mistakes = { social:{id:entry}, science:{…}, math:{…}, ai:{…} }
     entry＝{c, w, t, u, p}；墓碑＝{d:1, w, t, u}
     c＝在錯題庫裡連續答對幾次、w＝累計答錯次數、t＝最近一次答錯、u＝最後更新、p＝顯示／重練用的資料（各科不同，見下）
     社會／自然 id＝'<單元>|w|<重點pid>|<詞>'（考考自己）、'<單元>|a|<節點id>'（背架構）、'<單元>|q|<題目雜湊>'（練習題）、'<單元>|L|<題組id>:<題id>'（素養題組，2026-11-01）
       p＝{u:單元, k:'w'|'a'|'q'|'L', s:那句重點／上層位置／題目, a:正確答案, pid?, ci?}
     數學 id＝'eq:<方程式>'，p＝{q:方程式}（天平）；'gcd:<數字>[:gcd|lcm]'，p＝{type:'gcd', nums:[數字], mode:'both'|'gcd'|'lcm', q:顯示文字}（短除法）；
       'gcdword:<模板>:<數字>'，p＝{type:'gcdword', t:模板 id, v:[數字], q:顯示文字}（短除法應用題，math/gcd-word.js 用 t＋v 原題重做）；
       'mul:<題型>:<數字>'，p＝{type:'multiples', k:題型, v:[數字], q:顯示文字}（倍數與公倍數，math/multiples.js 用 k＋v 原題重做，2026-10-21）；
       'mx:<a>x<b>'，p＝{type:'multiply', a, b, lv, q:'a×b'}（乘法快算，2026-10-21）；
       'frc:<題型>:<數字>'，p＝{type:'fraction', k:題型, v:[aw,an,ad,bw,bn,bd], q:顯示文字}（分數比較大小，math/fraction.js 用 k＋v 原題重做；清單用 v 畫上下排的分數，2026-10-27）
       'mg:<題目id>'，p＝{type:'grade', qid, b:'五下 單元一', q:題目純文字}（五下～六下 math/grade.js 用 qid 找回原題，2026-11-06）；
       'pp:<題>'（紙本錯題 math/paper.js，家長用連結加入）、'pv:<題>'（類題答錯）、'pf:<題>'（約分通分 15 題答錯，2026-11-05），p＝{type:'paper', set:'p'|'v'|'f', pid, src:來源, tag:'x'|'r'|'', q:顯示文字}（2026-11-03）
     AI id＝'<頁>|<第幾關>'，p＝{pg, tag, q:題目, opts:[選項], c:正解索引, why:說明}（全部是純文字，畫面一律跳脫）
   🔁 隔天複習（間隔重複，2026-11-01，只開在社會、自然＝SPACED；國語、數學、AI 照舊「連對 3 次」）：
     答錯 → c＝0、due＝明天；到期（台北時間的日子 ≥ due）答對 → c＋1，due＝今天＋[1,3,7][c]（1 天 → 3 天 → 7 天）；7 天那次也答對（c 已經是 2）→ 畢業留墓碑。
     還沒到期答對：不動（不算數）。舊錯題沒有 due → 當作今天到期。c 照舊 0～2（＝過了幾次間隔），錯題庫的 ●○○ 也照用。
     互動圖題／實驗模擬（2026-11-02）：id＝'<單元>|I|<題id>'，p＝{u, k:'I', s:題目, a:正確答案}（mindmap/data/<科>/interactive.js，重做時照題目 init 重現）。
     閃卡按「再想想」也收進來：id＝'<單元>|F|<卡id>'，p＝{u, k:'F', s:背面說明, a:正面名詞}（mindmap/data/<科>/cards.js）。
   同步（syncmerge v4 的 mk 欄位）：各科依題目 id 聯集；同一題 u 較新的勝（墓碑也是；一樣新時 墓碑 ＞ 有 due ＞ 沒 due），答錯次數 w 取較大；墓碑每科最多留 300 筆（最新的）。
   _core 是純函式（不碰 DOM），Node 可以直接 require 來測；畫面（錯題清單、AI 重答）由首頁 subjects.js 呼叫 page()／aiPlay()。 */
(function (G) {
  'use strict';

  // ================= _core：純函式 =================
  var SUBJ = ['chinese', 'social', 'science', 'math', 'ai'];   // chinese（2026-11-01）：id＝'<篇id>:<題id>'，p＝{a:篇id, q:題id, t:篇名, s:題目, ans:正解文字}（chinese/reading.js）
  var GRAD = 3, MAX_DEL = 300, MAX_ID = 200, MAX_P = 4000, ROUND = 30;
  var SPACED = ['social', 'science'], IV = [1, 3, 7], DAY = 864e5, TPE = 8 * 3600e3;
  function dayIdx(t) { return Math.floor((+t + TPE) / DAY); }   // 台北時間的第幾天
  function isDue(e, now) { return !!e && !e.d && !(e.due > dayIdx(now)); }
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
    var o = { c: Math.min(nat(e.c), GRAD - 1), w: Math.max(1, nat(e.w)), t: t, u: u, p: normP(e.p) };
    if (nat(e.due)) o.due = nat(e.due);
    return o;
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
  // 一樣新時：墓碑 ＞ 有 due ＞ 沒 due（墓碑先勝＝不讓畢業的題復活；有 due 勝＝舊版裝置丟掉 due 也蓋不掉排程；三級全序，合併才能交換、結合）
  function rk(e) { return e.d ? 2 : e.due ? 1 : 0; }
  function pick(a, b) {
    if (!a) return b; if (!b) return a;
    var x = a.u !== b.u ? (a.u > b.u ? a : b) : rk(a) !== rk(b) ? (rk(a) > rk(b) ? a : b) : (noW(a) >= noW(b) ? a : b), w = Math.max(a.w, b.w);
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
  // 記一次作答（改 book）：回 'added'｜'counted'｜'graduated'｜null（答對、但不在錯題庫；spaced 時還沒到期也是 null）
  // spaced＝間隔制（社會、自然）：答錯 due＝明天；到期答對才 c＋1、排下一個間隔，第 3 次（7 天）到期答對畢業
  function mark(book, id, ok, p, now, spaced) {
    var cur = book[id], live = cur && !cur.d ? cur : null, t = Math.max(nat(now), cur ? cur.u + 1 : 0);
    if (!ok) { book[id] = { c: 0, w: ((cur && cur.w) || 0) + 1, t: t, u: t, p: obj(p) ? normP(p) : ((live && live.p) || {}) }; if (spaced) book[id].due = dayIdx(now) + IV[0]; return 'added'; }
    if (!live) return null;
    if (spaced && !isDue(live, now)) return null;
    live.c++; live.u = t; if (obj(p)) live.p = normP(p);
    if (live.c >= GRAD) { book[id] = { d: 1, w: live.w, t: live.t, u: t }; return 'graduated'; }
    if (spaced) live.due = dayIdx(now) + IV[live.c];
    return 'counted';
  }
  // 到期該複習的（社會／自然；沒有 due 的舊錯題＝今天到期）
  function dueList(book, now, unit) { var b = obj(book) || {}; return liveList(b, unit).filter(function (e) { return isDue(b[e.id], now); }); }
  // 還在錯題庫裡的題（最近答錯的在前）；unit＝只看某單元（p.u）
  function liveList(book, unit) {
    var b = obj(book) || {};
    return Object.keys(b).filter(function (k) { var e = b[k]; return e && !e.d && (!unit || (e.p && e.p.u === unit)); })
      .sort(function (x, y) { return (b[y].t - b[x].t) || (x < y ? -1 : 1); })
      .map(function (k) { var e = b[k]; return { id: k, c: e.c, w: e.w, t: e.t, u: e.u, due: e.due, p: e.p || {} }; });
  }
  // 小雜湊（練習題沒有 id，用題目文字算）
  function hash(s) { var h = 5381; s = String(s == null ? '' : s); for (var i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0; return h.toString(36); }
  function plain(s) { return String(s == null ? '' : s).replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim(); }

  /* 單元（錯題庫按「冊 → 單元」分組，2026-11-06）：從題目 id／p 推，不另外存。社會／自然＝p.u；數學單元碼 g5a1～（五上，康軒 115 學年度課程計畫）、g5b1～／g6a1～／g6b1～（math/grade.js）：
     grade＝id 'mg:<單元>-…'；紙本＝paper.js 的 PAPER.unitOfMistake（首頁有載 math/paper.js）；短除法看 mode、應用題看模板（LCM_T＝math/gcd-word.js kind 'lcm' 的，test 會對）；
     倍數→單元三、分數比大小→單元四；天平、乘法快算不在課本單元裡 → ''（畫面放「其他」） */
  var LCM_T = ['bus', 'brick', 'light', 'run', 'gear', 'stack', 'duty', 'zongzi', 'rem', 'meet3', 'pack3'];
  function unitOf(k, id, p) {
    p = p || {};
    if (k !== 'math') return p.u || '';
    switch (p.type) {
      case 'grade': return (/^mg:(g[56][ab]\d+)-/.exec(id) || [])[1] || '';
      case 'paper': try { return G.PAPER && G.PAPER.unitOfMistake ? G.PAPER.unitOfMistake(p) : ''; } catch (e) { return ''; }
      case 'gcd': return p.mode === 'lcm' ? 'g5a3' : 'g5a2';
      case 'gcdword': return LCM_T.indexOf(p.t) >= 0 ? 'g5a3' : 'g5a2';
      case 'multiples': return 'g5a3';
      case 'fraction': return 'g5a4';
    }
    return '';
  }

  var core = { SUBJ: SUBJ, GRAD: GRAD, MAX_DEL: MAX_DEL, ROUND: ROUND, SPACED: SPACED, IV: IV, canon: canon, normBook: normBook, normAll: normAll, mergeBook: mergeBook, mergeAll: mergeAll, mark: mark, liveList: liveList, dueList: dueList, isDue: isDue, dayIdx: dayIdx, hash: hash, plain: plain, unitOf: unitOf, LCM_T: LCM_T };
  if (typeof module !== 'undefined' && module.exports) { module.exports = { _core: core }; return; }

  // ================= 瀏覽器：存取 =================
  var KEY = 'kids_mistakes';
  function loadAll() { try { return normAll(JSON.parse(localStorage.getItem(KEY) || 'null')); } catch (e) { return {}; } }
  function topWin() { try { var t = window.top; return t !== window && t.location.origin === location.origin ? t : null; } catch (e) { return null; } }
  function syncTouch() { try { var K = window.KESync || ((topWin() || {}).KESync); if (K) K.touch(); } catch (e) { } }
  function saveAll(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) { /* 空間不足或私密模式 */ } syncTouch(); }
  // 現在時間；測試可以用 window.__KIDS_TEST_DAYS（首頁或本頁）把日子往後推，模擬「隔天」（同 __KIDS_TEST_GAS_URL，正式站不會有）
  function now() { var d = 0; try { d = +(G.__KIDS_TEST_DAYS || (topWin() || {}).__KIDS_TEST_DAYS) || 0; } catch (e) { } return Date.now() + d * DAY; }
  function spaced(subj) { return SPACED.indexOf(subj) >= 0; }
  function record(subj, id, ok, p) {
    if (SUBJ.indexOf(subj) < 0 || !okId(String(id || ''))) return null;
    var a = loadAll(), b = a[subj] || (a[subj] = {}), r = mark(b, String(id), !!ok, p, now(), spaced(subj));
    if (r) saveAll(a);
    return r;
  }
  function list(subj, unit) { return liveList(loadAll()[subj], unit); }
  function count(subj, unit) { return list(subj, unit).length; }
  function due(subj, unit) { return spaced(subj) ? dueList(loadAll()[subj], now(), unit) : []; }   // 🔁 今天要複習（社會、自然）

  // ================= 瀏覽器：畫面（首頁 #s/<科>/mistakes） =================
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var KLABEL = { w: '考考自己', a: '背架構', q: '練習題', L: '素養題組', X: '單元測驗', F: '閃卡', I: '互動題' };
  function badgeOf(subj, p) { if (subj === 'chinese') return p.t || '閱讀'; if (subj === 'math') return p.type === 'paper' ? (p.src || '紙本') : p.type === 'gcd' ? '短除法' : p.type === 'gcdword' ? '應用題' : p.type === 'multiples' ? '倍數' : p.type === 'multiply' ? '乘法' : p.type === 'fraction' ? '分數' : p.type === 'grade' ? (p.b || '數學') : '換你算'; if (subj === 'ai') return p.tag ? plain(p.tag).split('·')[0].trim() || 'AI 挑戰' : 'AI 挑戰'; return KLABEL[p.k] || '題目'; }
  function textOf(subj, p) {
    if (subj === 'math') return p.q || '';
    if (subj === 'ai') return (p.q || '') + (p.opts && p.opts[p.c] != null ? '　→ ' + p.opts[p.c] : '');
    if (subj === 'chinese') return (p.s || '') + (p.ans ? '　→ ' + p.ans : '');
    if (p.k === 'w') return p.s && p.a ? p.s.split(p.a).join('＿＿') + '（' + p.a + '）' : (p.s || p.a || '');
    if (p.k === 'a') return (p.s || '') + (p.a ? '（' + p.a + '）' : '');
    return (p.s || '') + (p.a ? '　→ ' + p.a : '');
  }
  // 分數題（type 'fraction'）：v 是 6 個整數 → 畫成上下排（分子／分母疊起來），不寫斜線；v 不對就退回純文字
  function frItem(v) {
    if (!Array.isArray(v) || v.length !== 6 || !v.every(function (x) { return typeof x === 'number' && isFinite(x) && x >= 0 && Math.floor(x) === x; })) return '';
    var f = function (w, n, d) { return (w ? '<b>' + w + '</b>' : '') + '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.1;margin:0 .15em;font-weight:700"><span style="border-bottom:2px solid currentColor;padding:0 .2em">' + n + '</span><span style="padding:0 .2em">' + d + '</span></span>'; };
    return f(v[0], v[1], v[2]) + ' ○ ' + f(v[3], v[4], v[5]) + '　比大小';
  }
  function dots(c) { var s = ''; for (var i = 0; i < GRAD; i++) s += i < c ? '●' : '○'; return s; }
  function authOK(why) { try { return !window.KidsAuth || KidsAuth.requireLogin(why); } catch (e) { return true; } }
  function quotaOK(kind, retry) { try { return !window.KidsAuth || !KidsAuth.startActivity || KidsAuth.startActivity(kind, retry); } catch (e) { return true; } }

  /* 📝 紙本錯題區（2026-11-03）：只有這個帳號加過紙本錯題（錯題本有 pp: 開頭的題，墓碑也算，跟著同步走）才出現；別的帳號看不到 */
  function paperOf(k) {
    if (k !== 'math') return null;
    var b = loadAll().math || {};
    if (!Object.keys(b).some(function (id) { return id.indexOf('pp:') === 0; })) return null;
    return list('math').filter(function (e) { return e.p.type === 'paper'; });
  }
  function paperBox(items, ulist) {
    if (!items) return '';
    var TAG = { x: '打叉', r: '紅筆圈到' };
    var li = function (e) {
      return '<li data-id="' + esc(e.id) + '"><span class="badge">' + esc(badgeOf('math', e.p)) + '</span>' + (TAG[e.p.tag] ? ' <small class="muted">' + TAG[e.p.tag] + '</small>' : '') + ' <span>' + esc(e.p.q) + '</span> <span class="dots">' + dots(e.c) + '</span></li>';
    };
    return '<div class="card" id="mk-paper"><h2 style="margin:0 0 6px">📝 紙本錯題（' + items.length + ' 題）</h2><p>考卷上打叉或紅筆圈到的題目，還有類題、約分通分答錯的。同一題<b>連續答對 3 次</b>就會畢業 🎓</p>' +
      '<p style="display:flex;flex-wrap:wrap;gap:10px"><button class="btn primary" id="mk-paper-go" type="button"' + (items.length ? '' : ' disabled') + '>練紙本錯題（' + Math.min(items.length, ROUND) + ' 題）</button>' +
      '<button class="btn primary" id="mk-paper-30" type="button">🎯 類題 30 題</button>' +
      '<button class="btn primary" id="mk-paper-15" type="button">🧮 約分通分 15 題</button>' +
      '<button class="btn primary" id="mk-paper-20" type="button">📋 期中類題 20 題</button></p>' +
      (items.length ? '<div id="mk-paper-list">' + groups('math', items, ulist, li, '') + '</div>' : '<p class="muted">紙本錯題都畢業了 🎉</p>') + '</div>';
  }
  /* 分組清單：冊（<details class="book">，跟科目首頁的分冊收合同一套樣式）→ 單元（小標＋清單）；推不出單元的放最後的「其他」。
     ulist＝[[單元碼, 單元名, '五下 單元一'?], …]（第 3 欄沒有＝五上，照順序叫單元一、二…）；ulCls＝每個單元清單 <ul> 多加的 class */
  function groups(k, items, ulist, li, ulCls) {
    var nums = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'], meta = {}, by = {};
    (ulist || []).forEach(function (x, i) { var lab = (x[2] || '五上 單元' + nums[i]).split(' '); meta[x[0]] = { i: i, bk: lab[0], lab: lab[1] + '　' + x[1] }; });
    items.forEach(function (e) { var u = unitOf(k, e.id, e.p); u = meta[u] ? u : ''; (by[u] = by[u] || []).push(e); });
    var books = [];
    Object.keys(by).sort(function (a, b) { return (a ? meta[a].i : 1e9) - (b ? meta[b].i : 1e9); }).forEach(function (u) {
      var bk = u ? meta[u].bk : '其他', last = books[books.length - 1];
      if (!last || last.bk !== bk) books.push(last = { bk: bk, us: [], n: 0 });
      last.us.push(u); last.n += by[u].length;
    });
    return books.map(function (b) {
      return '<details class="book mk-book" open><summary class="tiles-h">' + (b.bk === '其他' ? '📦 ' : '📗 ') + esc(b.bk) + '（' + b.n + ' 題）</summary>' + b.us.map(function (u) {
        return (u ? '<h3 class="mk-uh">' + esc(meta[u].lab) + '（' + by[u].length + '）</h3>' : '') + '<ul class="list ' + ulCls + '" data-u="' + esc(u || 'other') + '">' + by[u].map(li).join('') + '</ul>';
      }).join('') + '</details>';
    }).join('');
  }

  /* page(box, {k, n, i, units:[[id,標題]], unit, ulist, back}) — 錯題清單（免登入）；按「只練錯題」才要登入＋練習額度，通過就 location.hash＝'#s/<k>/mistakes-go[-<單元>]'
     units＝上方的單元篩選鈕（社會、自然）；清單依「冊 → 單元」分組（ulist，沒給就用 units；數學由 subjects.js 給 MATH_UNITS） */
  function page(box, o) {
    var k = o.k, unit = o.unit || '', paper = paperOf(k), all = list(k).filter(function (e) { return e.p.type !== 'paper'; }), items = unit ? all.filter(function (e) { return e.p.u === unit; }) : all;
    var nums = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'], ulab = {};
    (o.units || []).forEach(function (x, i) { ulab[x[0]] = x[2] || '單元' + nums[i]; });   // x[2]＝資料的 label（五下「五下 單元一」、六上「六上 單元一」）
    var filt = (o.units && o.units.length) ? '<div class="seg mk-units" role="group" aria-label="依單元篩選">' +
      ['<a class="btn sm' + (unit ? '' : ' primary') + '" href="#s/' + k + '/mistakes">全部（' + all.length + '）</a>'].concat(o.units.map(function (x, i) {
        var n = all.filter(function (e) { return e.p.u === x[0]; }).length, bk = x[2] ? x[2].split(' ')[0] : '五上', prev = o.units[i - 1];
        // 冊別分區（五上／五下／六上）：每一冊第一顆按鈕前面換行、標冊別
        var head = !prev || (prev[2] ? prev[2].split(' ')[0] : '五上') !== bk ? '<b class="mk-bk">📗 ' + bk + '</b>' : '';
        return head + '<a class="btn sm' + (unit === x[0] ? ' primary' : '') + '" href="#s/' + k + '/mistakes-' + x[0] + '" title="' + esc(x[1]) + '">' + ulab[x[0]] + '（' + n + '）</a>';
      })).join('') + '</div>' : '';
    var sp = spaced(k), today = dayIdx(now());
    function dueText(e) { var d = (e.due || today) - today; return d <= 0 ? '🔁 今天複習' : d === 1 ? '明天複習' : d + ' 天後複習'; }
    var li = function (e) {
      var u = e.p.u && ulab[e.p.u] ? '<small class="muted">' + ulab[e.p.u] + '</small> ' : '';
      return '<li data-id="' + esc(e.id) + '"><span class="badge">' + esc(badgeOf(k, e.p)) + '</span> ' + u + '<span>' + ((k === 'math' && e.p.type === 'fraction' && frItem(e.p.v)) || esc(textOf(k, e.p))) + '</span> <span class="dots">' + dots(e.c) + '</span> <small class="muted">錯 ' + e.w + ' 次' + (sp ? '・' + dueText(e) : '') + '</small></li>';
    }, ulist = o.ulist || o.units;
    box.innerHTML = '<header class="top"><a class="btn" href="#s/' + k + '">← 回' + esc(o.n) + '</a><h1>📕 ' + esc(o.n) + '錯題庫</h1></header>' +
      '<div class="card"><p>' + (sp ? '答錯的題目（還有閃卡按「再想想」的）會來這裡，隔 <b>1 天、3 天、7 天</b>各複習一次；到期都答對就畢業離開 🎓' : '答錯的題目會來這裡。同一題<b>連續答對 3 次</b>就會畢業離開 🎓') + '</p>' + filt +
      '<button class="btn primary big" id="mk-go" type="button"' + (items.length ? '' : ' disabled') + '>只練錯題（' + Math.min(items.length, ROUND) + ' 題）</button>' +
      (items.length > ROUND ? '<p class="muted">一輪最多 ' + ROUND + ' 題，先練最近答錯的。</p>' : '') + '</div>' +
      paperBox(paper, ulist) + (items.length ? '<div id="mk-list">' + groups(k, items, ulist, li, 'card') + '</div>' : '<p class="center muted" id="mk-empty">目前沒有錯題 🎉</p>');
    var go = box.querySelector('#mk-go');
    if (go) go.onclick = function start() {
      if (!authOK('練錯題')) return;
      if (!quotaOK(k, start)) return;
      location.hash = '#s/' + k + '/mistakes-go' + (unit ? '-' + unit : '');
    };
    [['mk-paper-go', 'paper-mk'], ['mk-paper-30', 'paper-30'], ['mk-paper-15', 'paper-15'], ['mk-paper-20', 'paper-20']].forEach(function (b) {
      var el = box.querySelector('#' + b[0]); if (!el) return;
      el.onclick = function start() { if (!authOK('練紙本錯題')) return; if (!quotaOK(k, start)) return; location.hash = '#s/math/' + b[1]; };
    });
  }

  /* 數學錯題分頁（2026-10-21）：type → 在哪一頁練。mathMore(types)＝「接著練…錯題」按鈕（math/ 底下的頁面用，href 相對於 math/）；eq＝天平（其他沒標 type 的） */
  var MATH_MK = [['eq', '天平', 'balance.html?mistakes=1'], ['gcd', '短除法', 'short-division.html?mistakes=1'], ['gcdword', '應用題', 'short-division.html?mistakes=word'],
    ['multiples', '倍數', 'multiples.html?mistakes=1'], ['multiply', '乘法', 'multiply.html?mistakes=1'], ['fraction', '分數', 'fraction.html?mistakes=1'], ['grade', '五下～六下', 'grade.html?mistakes=1']];
  function mathType(p) { var t = p && p.type; return t === 'paper' || t === 'gcd' || t === 'gcdword' || t === 'multiples' || t === 'multiply' || t === 'fraction' || t === 'grade' ? t : 'eq'; }
  function mathCount(type) { return list('math').filter(function (e) { return mathType(e.p) === type; }).length; }
  // grade（五下～六下，math/grade.html，2026-11-06）：五上各頁沒列它，一律接在最後；grade 頁自己傳 self＝true 不列自己
  function mathMore(types, self) {
    if (!self && types.indexOf('grade') < 0) types = types.concat(['grade']);
    return MATH_MK.filter(function (m) { return types.indexOf(m[0]) >= 0; }).map(function (m) {
      var n = mathCount(m[0]); return n ? '<a class="btn" data-mk-more="' + m[0] + '" href="' + m[2] + '">接著練' + m[1] + '錯題（' + n + ' 題）▶</a>' : '';
    }).join('');
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
          if (window.KidsDaily) KidsDaily.rec('ai', right);
          if (record('ai', e.id, right) === 'graduated') R.grad++;
          draw();
        };
      });
      var nx = box.querySelector('#mk-next'); if (nx) nx.onclick = function () { R.i++; R.picked = null; draw(); window.scrollTo(0, 0); };
    }
    draw();
  }

  G.KidsMistakes = { _core: core, KEY: KEY, SUBJ: SUBJ, GRAD: GRAD, ROUND: ROUND, SPACED: SPACED, now: now, record: record, list: list, count: count, due: due, loadAll: loadAll, page: page, aiPlay: aiPlay, hash: hash, plain: plain, mathType: mathType, mathCount: mathCount, mathMore: mathMore };
})(typeof window !== 'undefined' ? window : globalThis);
