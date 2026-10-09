/* kids-coins.js — 小朋友學習站 學習幣 🪙（全站共用；要先載 kids-auth.js）
   規則：給幾枚只由後端決定，前端只回報「發生了什麼」{event_id, type, item, correct, total}。介面見 kids-member/docs/COINS_CONTRACT.md。
   - 只用 localStorage 的 kids_coin_*；未登入（或會員後端未上線）時什麼都不送、不計時。
   - 頂層頁面擁有「分鐘時鐘」、離線佇列、頁角餘額徽章與「+N 🪙」動畫；同源 iframe 裡的頁面把呼叫轉給 window.top.KidsCoins。
   - ES5 寫法、全部 try/catch：學習幣壞掉也絕不讓練習頁壞掉。
   - _core 是純函式（不碰 DOM），Node 可以直接 require 來測。 */
(function (G) {
  'use strict';

  // ================= _core：純函式 =================
  var TPE_MS = 8 * 3600 * 1000;            // 台北時間 = UTC+8（1979 年後沒有日光節約）
  var WEEK_MS = 7 * 86400 * 1000;
  var BATCH_MAX = 50, QUEUE_MAX = 500;
  var MODES = ['practice', 'words', 'roots', 'grammar', 'patterns', 'mistakes', 'bank', 'redo', 'drill', 'speak'];
  var TEST_PREFIX = { test_word: 'word', test_phrase: 'phrase', test_root: 'root', test_grammar: 'grammar', test_pattern: 'pattern' };
  var SUBJECTS = ['english', 'math', 'ai'];
  var TICK_RE = /^tick:(\d{4}-\d{2}-\d{2}):(\d{4})$/;

  function pad(n, w) { n = String(n); while (n.length < w) n = '0' + n; return n; }
  function tpeParts(ms) {
    var d = new Date(+ms + TPE_MS);
    return { date: d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1, 2) + '-' + pad(d.getUTCDate(), 2), minute: d.getUTCHours() * 60 + d.getUTCMinutes() };
  }
  function tpeDate(ms) { return tpeParts(ms).date; }
  // tick 的 event_id：tick:YYYY-MM-DD:mmmm（台北時間，mmmm = 當日第幾分鐘 0–1439）
  function minuteId(ms) { var p = tpeParts(ms); return 'tick:' + p.date + ':' + pad(p.minute, 4); }
  function tickDate(id) { var m = TICK_RE.exec(String(id || '')); return m && +m[2] <= 1439 ? m[1] : null; }

  function itemOk(type, item) {
    if (typeof item !== 'string' || !item || item.length > 200) return false;
    switch (type) {
      case 'practice_round': return item.indexOf('english:') === 0 && MODES.indexOf(item.slice(8)) >= 0;
      case 'math_level': return /^balance:b[1-8]$/.test(item) || /^balance:own:.+$/.test(item);
      case 'ai_page_done': return /^ai:(hallucinate|ask-well|secrets)$/.test(item);
      case 'scratch_lesson_done': return /^scratch-td:L[1-7]$/.test(item);
      case 'tick': return SUBJECTS.indexOf(item) >= 0;
      default:
        var p = TEST_PREFIX[type];
        return !!p && item.indexOf(p + ':') === 0 && item.length > p.length + 1;
    }
  }
  function isInt(n) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n; }
  // 合約 §1 的事件格式（只看前端送出的五個欄位）
  function validEvent(e) {
    if (!e || typeof e.event_id !== 'string' || !e.event_id || e.event_id.length > 120) return false;
    if (!itemOk(e.type, e.item)) return false;
    if (!isInt(e.correct) || !isInt(e.total) || e.total < 1 || e.correct < 0 || e.correct > e.total) return false;
    if (e.type === 'tick') return !!tickDate(e.event_id);
    return e.event_id.indexOf('tick:') !== 0;
  }
  function newEventId(now, rnd) {
    try { if (!rnd && G.crypto && typeof G.crypto.randomUUID === 'function') return 'e-' + G.crypto.randomUUID(); } catch (e) { }
    var r = ''; rnd = rnd || Math.random;
    for (var i = 0; i < 6; i++) r += Math.floor(rnd() * 36).toString(36);
    return 'e-' + (+now || Date.now()).toString(36) + '-' + r;
  }
  function jwtSub(t) {
    try {
      var p = String(t || '').split('.')[1]; if (!p) return '';
      p = p.replace(/-/g, '+').replace(/_/g, '/'); while (p.length % 4) p += '=';
      var raw = typeof atob === 'function' ? atob(p) : Buffer.from(p, 'base64').toString('binary');
      var o = JSON.parse(decodeURIComponent(escape(raw)));
      return o && o.sub != null ? String(o.sub) : '';
    } catch (e) { return ''; }
  }
  // 送出前只留合約的五個欄位（剝掉 ts、mid）
  function toWire(e) { return { event_id: e.event_id, type: e.type, item: e.item, correct: e.correct, total: e.total }; }
  // 佇列合併：event_id 去重（先來的留著）；超過上限先丟最舊的 tick，沒有 tick 才丟最舊的事件
  function mergeQueue(q, add, max) {
    max = max || QUEUE_MAX;
    var seen = {}, out = [];
    (q || []).concat(add || []).forEach(function (e) { if (e && e.event_id && !seen[e.event_id]) { seen[e.event_id] = 1; out.push(e); } });
    while (out.length > max) {
      var k = -1; for (var i = 0; i < out.length; i++) if (out[i].type === 'tick') { k = i; break; }
      out.splice(k < 0 ? 0 : k, 1);
    }
    return out;
  }
  // 只留「現在登入者」的事件；7 天沒送出的、不是今天（台北）的 tick 丟掉（後端只收當天的 tick）
  function pruneQueue(q, mid, now) {
    var keep = [], dropped = [], today = tpeDate(now);
    (q || []).forEach(function (e) {
      var ok = e && mid && e.mid === mid && !(now - (+e.ts || 0) > WEEK_MS) && (e.type !== 'tick' || tickDate(e.event_id) === today);
      (ok ? keep : dropped).push(e);
    });
    return { keep: keep, dropped: dropped };
  }
  function pickBatch(q, mid, max) {
    var out = []; max = max || BATCH_MAX;
    for (var i = 0; i < (q || []).length && out.length < max; i++) if (q[i] && q[i].mid === mid) out.push(q[i]);
    return out;
  }
  function removeIds(q, ids) {
    var gone = {}; (ids || []).forEach(function (id) { gone[id] = 1; });
    return (q || []).filter(function (e) { return e && !gone[e.event_id]; });
  }
  // 一批回應合併成一個「+N 🪙」；daily_cap／daily_limit 要溫和提示
  // tick 的 daily_limit（每日採計分鐘上限、分鐘數超過伺服器實際經過時間）不是「學習幣拿滿了」→ 不提示
  // （daily_goal 發放時，結果列掛在觸發它的那個 tick 的 event_id 上，granted 照樣加總）
  function summarize(results) {
    var s = { granted: 0, cap: false };
    (results || []).forEach(function (r) {
      if (!r) return;
      if (+r.granted > 0) s.granted += +r.granted;
      var isTick = String(r.event_id || '').indexOf('tick:') === 0;
      if (r.reason === 'daily_cap' || (r.reason === 'daily_limit' && !isTick)) s.cap = true;
    });
    return s;
  }
  // 這一分鐘作答最多的科（同票照 english → math → ai）
  function bucketItem(counts) {
    var best = 'english', n = -1;
    SUBJECTS.forEach(function (k) { var c = (counts && counts[k]) || 0; if (c > n) { n = c; best = k; } });
    return best;
  }
  function tickEvent(b) { return { event_id: b.id, type: 'tick', item: bucketItem(b.s), correct: b.c, total: b.n }; }

  var core = {
    BATCH_MAX: BATCH_MAX, QUEUE_MAX: QUEUE_MAX, MODES: MODES,
    tpeParts: tpeParts, tpeDate: tpeDate, minuteId: minuteId, tickDate: tickDate,
    itemOk: itemOk, validEvent: validEvent, newEventId: newEventId, jwtSub: jwtSub, toWire: toWire,
    mergeQueue: mergeQueue, pruneQueue: pruneQueue, pickBatch: pickBatch, removeIds: removeIds,
    summarize: summarize, bucketItem: bucketItem, tickEvent: tickEvent
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = { _core: core };
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // ================= 瀏覽器執行期 =================
  var W = window;
  var K_Q = 'kids_coin_queue', K_BAL = 'kids_coin_balance', K_CAP = 'kids_coin_capnote', K_MIN = 'kids_coin_min';
  var CAP_TEXT = '今天的學習幣拿滿了，明天再來！';
  var CLOCK_MS = 5000, THROTTLE_MS = 1500, RETRY_MS = 20000, RATE_MS = 60000, IDLE_FLUSH_MS = 180000, WAIT_MS = 20000;

  function A() { return W.KidsAuth; }
  function lsGet(k) { try { return W.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { W.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsJSON(k, d) { try { var v = JSON.parse(lsGet(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } }
  function warn(m) { try { console.warn('[kids-coins] ' + m); } catch (e) { } }
  function enabled() { var a = A(); try { return !!(a && a.configured() && a.isLoggedIn()); } catch (e) { return false; } }
  function curMid() {
    var a = A(); if (!a) return '';
    try {
      var s = jwtSub(a.token()); if (s) return s;
      var m = a.member(); return m ? String(m.member_id || m.pub_id || m.email || '') : '';
    } catch (e) { return ''; }
  }
  function inFrame() { try { return W.top !== W; } catch (e) { return true; } }
  // iframe 裡：有同源的頂層 KidsCoins 就全部轉給它（時鐘、佇列、徽章只有一份）
  function topHost() {
    try { if (W.top !== W && W.top.location.origin === location.origin && W.top.KidsCoins && W.top.KidsCoins._host && W.top.KidsCoins !== API) return W.top.KidsCoins; } catch (e) { }
    return null;
  }
  function reducedMotion() { try { return W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }

  // ---------- 佇列 ----------
  function readQ() { var q = lsJSON(K_Q, []); return Array.isArray(q) ? q : []; }
  function writeQ(q) { lsSet(K_Q, JSON.stringify(q || [])); }
  function enqueue(list) {
    var mid = curMid(), now = Date.now();
    writeQ(mergeQueue(readQ(), list.map(function (e) { var o = toWire(e); o.ts = now; o.mid = mid; return o; }), QUEUE_MAX));
  }

  // ---------- 等回應的 report() ----------
  var waiters = {};
  function addWaiter(id, fn) {
    (waiters[id] = waiters[id] || []).push(fn);
    setTimeout(function () { settle(id, null); }, WAIT_MS);
  }
  function settle(id, val) { var w = waiters[id]; if (!w) return; delete waiters[id]; w.forEach(function (f) { try { f(val); } catch (e) { } }); }

  // ---------- 餘額 ----------
  var bal = { mid: '', v: null }, listeners = [], lastToday = null, lastResp = null;
  function setBalance(v, mc) {
    if (typeof v !== 'number' || !isFinite(v)) return;
    var mid = curMid(), old = lsJSON(K_BAL, {}) || {};
    bal = { mid: mid, v: v };
    lsSet(K_BAL, JSON.stringify({ mid: mid, v: v, mc: mc !== undefined ? mc : (old.mid === mid ? old.mc : undefined), at: Date.now() }));
    drawBadge();
    listeners.forEach(function (cb) { try { cb(v, lastResp); } catch (e) { } });
  }
  // 初值：member.coins（登入／續期／個人資料回來的最新值）；member.coins 沒變過才用本機快取（期間領到的學習幣）
  function initBalance() {
    var mid = curMid(), c = lsJSON(K_BAL, {}) || {}, m = null;
    try { m = A() && A().member(); } catch (e) { }
    var mc = m && typeof m.coins === 'number' ? m.coins : undefined;
    if (c.mid === mid && typeof c.v === 'number' && (mc === undefined || c.mc === mc)) bal = { mid: mid, v: c.v };
    else if (mc !== undefined) { bal = { mid: mid, v: mc }; lsSet(K_BAL, JSON.stringify({ mid: mid, v: mc, mc: mc, at: 0 })); }
    else bal = { mid: mid, v: null };
    return c.mid === mid ? (+c.at || 0) : 0;
  }
  function balance() { return bal.mid && bal.mid === curMid() ? bal.v : null; }

  // ---------- 送出 ----------
  var inflight = null, again = false, backoffUntil = 0, retryTimer = null, lastFlush = 0, pendingTicks = 0;
  function scheduleRetry(ms) { if (retryTimer) return; retryTimer = setTimeout(function () { retryTimer = null; flush(); }, ms); }
  function flushHost() {
    if (!enabled()) return Promise.resolve(false);
    if (inflight) { again = true; return inflight; }
    var now = Date.now();
    if (now < backoffUntil) { scheduleRetry(backoffUntil - now + 50); return Promise.resolve(false); }
    var mid = curMid(), all = readQ(), pr = pruneQueue(all, mid, now);
    if (pr.dropped.length) { writeQ(pr.keep); pr.dropped.forEach(function (e) { if (e) settle(e.event_id, null); }); }
    var batch = pickBatch(pr.keep, mid, BATCH_MAX);
    if (!batch.length) return Promise.resolve(true);
    lastFlush = now; pendingTicks = 0;
    var ids = batch.map(function (e) { return e.event_id; });
    inflight = A().api('awardCoins', { token: A().token(), events: batch.map(toWire) }).then(function (r) {
      writeQ(removeIds(readQ(), ids)); // 後端處理過這一批（含 duplicate／bad_event）→ 移出佇列
      onResponse(r || {}, ids);
      return true;
    }, function (x) {
      var code = x && x.code;
      if (code === 'expired' || code === 'revoked') { try { A().logout(); } catch (e) { } } // 交給 KidsAuth 登出；事件留著，同一人再登入會補送
      else if (code === 'rate_limited') backoffUntil = Date.now() + RATE_MS;
      else if (code === 'bad_request') writeQ(removeIds(readQ(), ids)); // 整批格式被拒：丟掉，免得一直重送
      else backoffUntil = Date.now() + RETRY_MS; // network／server_error：留在佇列，稍後或上線時再送
      ids.forEach(function (id) { settle(id, null); });
      if (code !== 'expired' && code !== 'revoked' && code !== 'bad_request') scheduleRetry(Math.max(0, backoffUntil - Date.now()) + 50);
      return false;
    }).then(function (ok) {
      inflight = null;
      var more = ok && (again || pickBatch(pruneQueue(readQ(), curMid(), Date.now()).keep, curMid(), 1).length > 0);
      again = false;
      if (more) setTimeout(flush, THROTTLE_MS); // 節流：一次只送一批，批與批之間隔一下
      return ok;
    });
    return inflight;
  }
  function onResponse(r, ids) {
    lastResp = r;
    if (r.today) lastToday = r.today;
    var res = r.results || [], seen = {};
    res.forEach(function (x) { if (x && x.event_id) { seen[x.event_id] = 1; settle(x.event_id, { granted: +x.granted || 0, balance: r.balance, reason: x.reason, rule_id: x.rule_id }); } });
    ids.forEach(function (id) { if (!seen[id]) settle(id, null); });
    var s = summarize(res);
    if (typeof r.balance === 'number') setBalance(r.balance);
    if (s.granted > 0) toastHost('+' + s.granted + ' 🪙', 'gain');
    if (s.cap) capNotice();
  }
  function capNotice() {
    var key = curMid() + '|' + tpeDate(Date.now());
    if (lsGet(K_CAP) === key) return; // 每天最多提示一次
    lsSet(K_CAP, key);
    toastHost(CAP_TEXT, 'note');
  }

  // ---------- 分鐘時鐘（只在頂層，或沒有頂層 KidsCoins 的單獨頁） ----------
  var bucket = null, lastAct = 0, clock = null;
  function visible() { try { return document.visibilityState !== 'hidden'; } catch (e) { return true; } }
  function countMinute(id) { // 本機估算「今天送了幾分鐘」，滿 15 分那一刻立刻送
    var mid = curMid(), d = tickDate(id), c = lsJSON(K_MIN, {}) || {};
    if (c.mid !== mid || c.date !== d) c = { mid: mid, date: d, n: 0 };
    c.n++; lsSet(K_MIN, JSON.stringify(c)); return c.n;
  }
  function closeBucket() {
    var b = bucket; bucket = null;
    if (!b || b.n < 1 || !enabled() || b.mid !== curMid()) return;
    if (tickDate(b.id) !== tpeDate(Date.now())) return; // 跨日：上一天沒結的桶丟掉
    enqueue([tickEvent(b)]);
    pendingTicks++;
    var n = countMinute(b.id);
    // 每 3 分鐘或滿 15 分鐘那一刻才送一批；當天第 1 分鐘立刻送：後端從「當天第一筆 tick 到達的伺服器時間」起算
    // 實際經過時間，採計分鐘數不得超過經過時間＋2。若第一批 3 分鐘後才送，第 3 個 tick 會被拒（daily_limit），滿 15 分卻只算 14。
    if (pendingTicks >= 3 || n === 1 || n === 15) flush();
  }
  function clockTick() {
    try {
      var now = Date.now();
      if (bucket && minuteId(now) !== bucket.id) closeBucket();
      if (enabled() && now - lastFlush > IDLE_FLUSH_MS && readQ().length) flush();
    } catch (e) { }
  }
  function startClock() { if (!clock) clock = setInterval(clockTick, CLOCK_MS); }

  // ---------- 樣式、徽章、動畫 ----------
  var cssDone = false;
  function css() {
    if (cssDone) return; cssDone = true;
    var s = document.createElement('style');
    s.textContent = '.kc-badge{display:inline-flex;align-items:center;gap:4px;min-height:44px;padding:6px 14px;border-radius:999px;border:2px solid #f0e2c8;background:#fff8ec;color:#263445;font:700 1rem/1.2 -apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;text-decoration:none;white-space:nowrap;box-shadow:0 2px 0 #f0e2c8;touch-action:manipulation;font-variant-numeric:tabular-nums}'
      + '#subjects .kc-badge{order:1;flex:0 0 auto}'
      + '.kc-badge.kc-float{position:fixed;top:calc(60px + env(safe-area-inset-top));right:calc(8px + env(safe-area-inset-right));z-index:2147482000}'
      + '.kc-badge.kc-bump{animation:kc-bump .5s ease-out}'
      + '@keyframes kc-bump{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}'
      + '.kc-toast{position:fixed;z-index:2147482500;pointer-events:none;padding:6px 14px;border-radius:999px;background:#ffd166;color:#263445;font:800 1.2rem/1.2 -apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;box-shadow:0 4px 14px rgba(38,52,69,.25);white-space:nowrap}'
      + '.kc-toast.kc-gain{animation:kc-float 1.2s ease-out forwards}'
      + '.kc-toast.kc-note{background:#fff;border:2px solid #f0e2c8;font-size:1rem;font-weight:700;white-space:normal;max-width:min(320px,90vw);text-align:center}'
      + '@keyframes kc-float{0%{opacity:0;transform:translateY(8px) scale(.9)}15%{opacity:1;transform:translateY(0) scale(1.08)}70%{opacity:1;transform:translateY(-18px)}100%{opacity:0;transform:translateY(-34px)}}'
      + '@media (prefers-reduced-motion:reduce){.kc-toast.kc-gain{animation:none}.kc-badge.kc-bump{animation:none}}';
    (document.head || document.documentElement).appendChild(s);
  }
  var badge = null;
  function badgeAllowed() { return !inFrame() && document.body && document.body.getAttribute('data-kids-widget') !== 'off'; }
  function drawBadge() {
    try {
      if (topHost() || !document.body) return;
      if (!badgeAllowed() || !enabled()) { if (badge) { badge.remove(); badge = null; } return; }
      css();
      if (!badge || !badge.isConnected) {
        badge = document.createElement('a'); badge.className = 'kc-badge';
        var chip = document.querySelector('#subjects .ka-chip') || document.querySelector('[data-kids-auth-slot] .ka-chip');
        var bar = document.querySelector('#subjects .subj-in');
        if (chip && chip.parentNode && !chip.classList.contains('ka-float')) chip.parentNode.insertBefore(badge, chip.nextSibling);
        else if (bar) bar.appendChild(badge);
        else { badge.classList.add('kc-float'); document.body.appendChild(badge); }
      }
      var v = balance();
      badge.textContent = '🪙 ' + (v == null ? '…' : v);
      badge.href = (A().base || '') + 'account.html';
      badge.setAttribute('aria-label', '我的學習幣：' + (v == null ? '讀取中' : v + ' 枚') + '（看明細）');
      try { W.dispatchEvent(new Event('resize')); } catch (e) { } // 科目列高度可能變了
    } catch (e) { }
  }
  var lastToast = '', toastSeq = 0;
  function toastHost(text, kind) {
    try {
      lastToast = text; toastSeq++;
      kind = kind || 'gain';
      if (kind === 'gain' && reducedMotion()) { if (badge) badge.setAttribute('data-last', text); return; } // 動作減量：只換數字
      css();
      var t = document.createElement('div');
      t.className = 'kc-toast kc-' + kind; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite');
      t.textContent = text;
      var r = badge && badge.isConnected ? badge.getBoundingClientRect() : null;
      if (r && r.width) { t.style.top = Math.round(r.bottom + 6) + 'px'; t.style.right = Math.max(8, Math.round(W.innerWidth - r.right)) + 'px'; }
      else { t.style.top = 'calc(12px + env(safe-area-inset-top))'; t.style.right = 'calc(12px + env(safe-area-inset-right))'; }
      document.body.appendChild(t);
      if (badge && kind === 'gain') { badge.classList.remove('kc-bump'); void badge.offsetWidth; badge.classList.add('kc-bump'); badge.setAttribute('data-last', text); }
      setTimeout(function () { try { t.remove(); } catch (e) { } }, kind === 'note' ? 3600 : 1300);
    } catch (e) { }
  }

  // ---------- 公開 API ----------
  function answer(ok, subj) {
    var h = topHost(); if (h) { try { h.answer(ok, subj); } catch (e) { } return; }
    try {
      if (!enabled() || !visible()) return;
      var now = Date.now(), id = minuteId(now), mid = curMid();
      if (bucket && (bucket.id !== id || bucket.mid !== mid)) closeBucket();
      if (!bucket) bucket = { id: id, mid: mid, n: 0, c: 0, s: {} };
      subj = SUBJECTS.indexOf(subj) >= 0 ? subj : 'english';
      bucket.n++; if (ok) bucket.c++; bucket.s[subj] = (bucket.s[subj] || 0) + 1;
      lastAct = now; startClock();
    } catch (e) { }
  }
  function activity(subj) {
    var h = topHost(); if (h) { try { h.activity(subj); } catch (e) { } return; }
    if (enabled()) lastAct = Date.now(); // 非作答互動：不算有效分鐘
  }
  function report(ev) {
    var h = topHost(); if (h) { try { return h.report(ev); } catch (e) { return Promise.resolve(null); } }
    try {
      if (!enabled() || !ev) return Promise.resolve(null);
      var e = { event_id: newEventId(), type: ev.type, item: ev.item, correct: Math.round(+ev.correct || 0), total: Math.round(+ev.total || 0) };
      if (!validEvent(e)) { warn('事件格式不對，不送：' + JSON.stringify(e)); return Promise.resolve(null); }
      enqueue([e]);
      var p = new Promise(function (res) { addWaiter(e.event_id, res); });
      flush(); // 一回練習結束立刻送，讓「+N 🪙」及時出現
      return p;
    } catch (x) { return Promise.resolve(null); }
  }
  function flush() {
    var h = topHost(); if (h) { try { return h.flush(); } catch (e) { return Promise.resolve(false); } }
    try { return flushHost(); } catch (e) { return Promise.resolve(false); }
  }
  function toast(text) { var h = topHost(); if (h) { try { h.toast(text); } catch (e) { } return; } toastHost(String(text), /🪙$/.test(String(text)) ? 'gain' : 'note'); }
  function onChange(cb) { var h = topHost(); if (h) { try { h.onChange(cb); } catch (e) { } return; } if (typeof cb === 'function') listeners.push(cb); }
  function getBalance() { var h = topHost(); if (h) { try { return h.balance(); } catch (e) { return null; } } return balance(); }
  // 背景向後端拿最新餘額（account.html 會自己拿完整明細）
  function refresh(limit) {
    var h = topHost(); if (h) { try { return h.refresh(limit); } catch (e) { return Promise.resolve(null); } }
    if (!enabled()) return Promise.resolve(null);
    return A().api('getCoins', { token: A().token(), limit: limit || 1 }).then(function (r) {
      if (r && r.today) lastToday = r.today;
      if (r && typeof r.balance === 'number') setBalance(r.balance);
      return r;
    }, function (x) {
      if (x && (x.code === 'expired' || x.code === 'revoked')) { try { A().logout(); } catch (e) { } }
      return null;
    });
  }

  var API = {
    report: report, answer: answer, activity: activity, flush: flush, balance: getBalance, onChange: onChange, toast: toast, refresh: refresh,
    mid: function () { return curMid(); },
    enabled: function () { return enabled(); },
    today: function () { var h = topHost(); return h ? h.today() : lastToday; },
    _core: core,
    _host: true,
    _clock: function () { var h = topHost(); if (h) return h._clock(); clockTick(); },
    _state: function () { var h = topHost(); if (h) return h._state(); return { bucket: bucket ? JSON.parse(JSON.stringify(bucket)) : null, queue: readQ().length, lastToast: lastToast, toastSeq: toastSeq, balance: balance(), lastAct: lastAct, backoffUntil: backoffUntil, inflight: !!inflight }; }
  };
  W.KidsCoins = API;

  // ---------- 啟動與事件 ----------
  var lastMid = '';
  function onAuthChange() {
    var mid = enabled() ? curMid() : '';
    if (mid !== lastMid) { bucket = null; lastMid = mid; if (mid) { initBalance(); refreshIfStale(0); } }
    drawBadge();
    if (mid) flush();
  }
  function refreshIfStale(cacheAt) { if (Date.now() - (cacheAt || 0) > 5 * 60 * 1000) refresh(1); }
  function boot() {
    if (topHost()) return; // iframe：全部轉給頂層，自己不開時鐘
    lastMid = enabled() ? curMid() : '';
    if (lastMid) { var at = initBalance(); drawBadge(); refreshIfStale(at); startClock(); flush(); }
    else drawBadge();
  }
  document.addEventListener('visibilitychange', function () {
    if (topHost()) return;
    if (document.visibilityState === 'hidden') { closeBucket(); flush(); }
    else { if (bucket && tickDate(bucket.id) !== tpeDate(Date.now())) bucket = null; flush(); }
  });
  W.addEventListener('pagehide', function () { if (!topHost()) { closeBucket(); flush(); } });
  W.addEventListener('online', function () { if (!topHost()) { backoffUntil = 0; flush(); } });
  W.addEventListener('storage', function (e) { if (!topHost() && (e.key === 'kids_jwt' || e.key === 'kids_member' || e.key === null)) onAuthChange(); });
  // 同一頁登出／登入（kids-auth 會重畫自己的小元件）：每 5 秒的時鐘順便看帳號有沒有換
  setInterval(function () { try { if (!topHost() && (enabled() ? curMid() : '') !== lastMid) onAuthChange(); } catch (e) { } }, CLOCK_MS);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
