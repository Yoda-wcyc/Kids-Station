/* english-reading/reading-core.js — 英文閱讀測驗的規則（純函式：不碰 DOM／localStorage；瀏覽器 window.EnReading 與 Node 共用）。
   規格 english-reading/SPEC.md、寫題契約 english-reading/CONTRACT.md、檢查工具 english-reading/check.js。
   - LV：三級（易 e／中 m／難 h）的字數、題數、句長；KINDS：題型；GENRES：文體。
   - units(art)：把 body 攤平成「句子／標題／表格列」（朗讀、答案依據 ev 都用這個編號）。
   - order(arts)：出題順序＝級別 → 字數 → id（易到難自動排，畫面上沒有等級選單）。next(arts, st)：第一篇還沒完成的。
   - grade(items)：答對 ≥ 60%＝完成這篇。finish(st, art, g, now)：記一輪（純函式，回傳新的 st 與 fresh＝第一次完成）。
   - bumpOk(st, key)：這題答對過幾次（封頂 2，學過 2 次不算每日清單）；mkId／mkP：錯題庫（kids-mistakes 'gept' 那一本、p.u＝'r'）。
   本機紀錄 kids_en_reading＝{a:{篇id:{t:做了幾輪, n:完成幾次, best:最佳 %, at:最近一次, done:第一次完成}}, ok:{'篇id:題id':0～2}, p:照順序完成到第幾篇}
   （只有 p 跟著同步：syncmerge.js pg 的 v 群組 'R'；a、ok 只在這台，見 SPEC §6）。 */
(function (root) {
  'use strict';
  var LV = {
    1: { key: 'e', name: '易', cefr: 'A1', min: 40, max: 70, q: [3, 3], sl: 12, n: 80 },
    2: { key: 'm', name: '中', cefr: 'A1+', min: 60, max: 100, q: [3, 4], sl: 15, n: 70 },
    3: { key: 'h', name: '難', cefr: 'A2', min: 90, max: 140, q: [4, 4], sl: 20, n: 50 }
  };
  var KINDS = { main: '主旨', detail: '細節', infer: '推論', vocab: '字義', ref: '指代' };
  var GENRES = { story: '故事', diary: '日記', letter: '信件', notice: '告示', dialogue: '對話', schedule: '時刻表', info: '說明', howto: '步驟' };
  var PASS = 60, LOCK = 2, LEARN_MAX = 2, KEY = 'kids_en_reading', MK_SUBJ = 'gept', MK_U = 'r', DAY = 864e5, TPE = 8 * 3600e3;
  var ID_RE = /^([emh])(\d{3})$/;

  function obj(x) { return x && typeof x === 'object' && !Array.isArray(x) ? x : {}; }
  function lvOf(id) { var m = ID_RE.exec(id || ''); return m ? 'emh'.indexOf(m[1]) + 1 : 0; }
  // body 區塊：['句子', …]＝一段；{who:'Amy', s:[…]}＝對話一句（可多句）；{h:'標題'}；{table:[[表頭…], [列…], …]}
  function units(art) {
    var out = [];
    (art && art.body || []).forEach(function (b, bi) {
      if (Array.isArray(b)) b.forEach(function (s, si) { out.push({ t: String(s), b: bi, i: si, k: 's' }); });
      else if (b && b.who) (b.s || []).forEach(function (s, si) { out.push({ t: String(s), b: bi, i: si, k: 's', who: b.who }); });
      else if (b && b.h) out.push({ t: String(b.h), b: bi, i: 0, k: 'h' });
      else if (b && b.table) b.table.forEach(function (r, ri) { out.push({ t: r.join(' | '), b: bi, i: ri, k: ri ? 'row' : 'head', cells: r }); });
    });
    return out;
  }
  function wordsOf(s) { return (String(s == null ? '' : s).match(/[A-Za-z0-9]+(?:['’.,:-][A-Za-z0-9]+)*/g) || []).length; }   // 同 gept-core words()
  function wordCount(art) { return units(art).reduce(function (n, u) { return n + wordsOf(u.t); }, 0); }
  // 答案依據：ev 每一段文字落在哪一個 unit（找不到或不只一個＝-1，check.js 會擋）
  function evUnits(art, q) {
    var us = units(art);
    return (q && q.ev || []).map(function (e) { var hit = us.map(function (u, i) { return u.t.indexOf(e) >= 0 ? i : -1; }).filter(function (i) { return i >= 0; }); return hit.length === 1 ? hit[0] : -1; });
  }

  // ---------- 順序與進度 ----------
  function order(arts) {
    return (arts || []).slice().sort(function (a, b) { return (a.lv - b.lv) || (wordCount(a) - wordCount(b)) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0); });
  }
  function rec(st, id) { return obj(obj(obj(st).a)[id]); }
  function isDone(st, id) { return !!rec(st, id).done; }
  function passes(st, id) { return +rec(st, id).n || 0; }
  function locked(st, id) { return passes(st, id) >= LOCK; }
  function next(arts, st) { var o = order(arts); for (var i = 0; i < o.length; i++) if (!isDone(st, o[i].id)) return o[i]; return null; }
  // 能不能打開這篇：做完 2 次＝locked；比「下一篇」還後面、也還沒完成＝ahead（照順序來）；其他 ok
  function canOpen(arts, st, id) {
    if (locked(st, id)) return 'locked';
    if (isDone(st, id)) return 'ok';
    var o = order(arts), nx = next(arts, st), i = o.map(function (a) { return a.id; }).indexOf(id);
    if (i < 0) return 'missing';
    return nx && o.indexOf(nx) < i ? 'ahead' : 'ok';
  }
  function dayOf(t) { return Math.floor((+t + TPE) / DAY); }
  function todayCount(st, now) { var a = obj(obj(st).a), d = dayOf(now); return Object.keys(a).filter(function (k) { return a[k] && a[k].done && dayOf(a[k].done) === d; }).length; }
  function doneCount(st, arts) { var ids = arts ? arts.map(function (a) { return a.id; }) : Object.keys(obj(obj(st).a)); return ids.filter(function (id) { return isDone(st, id); }).length; }

  // ---------- 判分與紀錄 ----------
  // items：[{done, right}]
  function grade(items) {
    var n = items.length, ok = items.filter(function (x) { return x.done && x.right; }).length, pct = n ? Math.round(ok / n * 100) : 0;
    return { ok: ok, n: n, pct: pct, all: items.every(function (x) { return x.done; }), pass: n > 0 && items.every(function (x) { return x.done; }) && pct >= PASS };
  }
  function clone(st) { var s = obj(st), o = { a: Object.assign({}, obj(s.a)), ok: Object.assign({}, obj(s.ok)) }; if (+s.p > 0) o.p = Math.floor(+s.p); return o; }

  // ---------- 跨裝置進度（2026-11-24）----------
  // 不准跳篇 → 完成的篇一定是 order 的前幾篇，所以只同步一個整數 p＝照順序完成到第幾篇（syncmerge.js pg 的 v 群組 'R'，合併取大，約 5 B）。
  // shortcut: 每篇 ✓1／✓2 次數和 🔒 只在本機（別台來的篇只補成「完成 1 次」、done＝1 不算今天）；要跨裝置鎖，等同步有空間再把每篇次數放進 pg
  // shortcut: 以後改文章字數會讓 order 換位，p 照新順序補前 p 篇；上線後改字數前先確認不會跨篇換位
  function upTo(arts, st) { var o = order(arts), i = 0; while (i < o.length && isDone(st, o[i].id)) i++; return i; }
  // 本機紀錄進來時：別台同步來的 p 比本機多 → 補上前 p 篇；本機比 p 多 → p 跟上。回傳新的 st（沒變＝null）
  function syncIn(arts, st) {
    var o = order(arts), p = Math.min(Math.floor(+obj(st).p || 0), o.length), s = null;
    for (var i = 0; i < p; i++) if (!isDone(st, o[i].id)) { s = s || clone(st); var r = Object.assign({}, rec(s, o[i].id)); r.done = 1; r.n = Math.max(+r.n || 0, 1); s.a[o[i].id] = r; }
    var u = upTo(arts, s || st); if (u > Math.max(0, +obj(st).p || 0)) { s = s || clone(st); s.p = u; }
    return s;
  }
  // 一輪做完：fresh＝這次是第一次完成（每日清單「閱讀 1 篇」只算這種；做過、答對的篇不重複計算）
  function finish(st, art, g, now) {
    var s = clone(st), p = Object.assign({}, rec(s, art.id)), was = !!p.done;
    p.t = (+p.t || 0) + 1; p.best = Math.max(+p.best || 0, g.pct); p.at = now;
    if (g.pass) { p.n = (+p.n || 0) + 1; if (!p.done) p.done = now; }
    s.a[art.id] = p;
    return { st: s, fresh: !!g.pass && !was, pass: !!g.pass };
  }
  function qKey(art, q) { return art.id + ':' + q.id; }
  // 回傳這次之前答對過幾次（給 KidsDaily.rec 的 prev）；答對 +1、封頂 LEARN_MAX
  function bumpOk(st, key, ok) { var prev = +obj(obj(st).ok)[key] || 0; if (ok && prev < LEARN_MAX) { st.ok = obj(st.ok); st.ok[key] = prev + 1; } return prev; }
  // 錯題庫：放在 kids-mistakes 的 'gept' 本子（已在同步範圍、未畢業最多 100 題的上限也共用 → 同步文件最壞情況不變），p.u＝'r' 讓英檢頁（list('gept', e|i|a|u)）看不到
  function mkId(art, q) { return 'er:' + art.id + ':' + q.id; }
  function parseMk(id) { var m = /^er:([emh]\d{3}):(q\d)$/.exec(id || ''); return m ? { a: m[1], q: m[2] } : null; }
  function plain(s, n) { s = String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
  function mkP(art, q) { return { u: MK_U, s: plain(q.q, 60) }; }
  function find(arts, id) { for (var i = 0; i < (arts || []).length; i++) if (arts[i].id === id) return arts[i]; return null; }
  function qOf(art, qid) { return (art && art.qs || []).filter(function (q) { return q.id === qid; })[0] || null; }

  var ER = { LV: LV, KINDS: KINDS, GENRES: GENRES, PASS: PASS, LOCK: LOCK, LEARN_MAX: LEARN_MAX, KEY: KEY, MK_SUBJ: MK_SUBJ, MK_U: MK_U, ID_RE: ID_RE,
    lvOf: lvOf, units: units, wordsOf: wordsOf, wordCount: wordCount, evUnits: evUnits, order: order, next: next, isDone: isDone, passes: passes, locked: locked, canOpen: canOpen,
    dayOf: dayOf, todayCount: todayCount, doneCount: doneCount, grade: grade, finish: finish, upTo: upTo, syncIn: syncIn, qKey: qKey, bumpOk: bumpOk, mkId: mkId, parseMk: parseMk, mkP: mkP, find: find, qOf: qOf, plain: plain };
  if (typeof module !== 'undefined' && module.exports) module.exports = ER;
  root.EnReading = ER;
})(typeof window !== 'undefined' ? window : globalThis);
