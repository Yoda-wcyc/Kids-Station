/* sync.js — 裝置同步（iPad ↔ 電腦）：後端轉接 + 何時同步。合併規則在 syncmerge.js，計時零件在 syncauto.js。
   後端要換，只改下面 backend 的 create/get/put 三個函式。
   帳號自動同步（2026-10-09）：登入狀態下，同步碼跟著帳號走（會員後端 getSyncCode／setSyncCode，碼本身不顯示）。
   - 帳號有碼 A：裝置沒碼 → 改用 A；裝置是別的碼 B → 先把 B 的資料拉進本機，再改用 A。之後拉 A、跟本機合併、推回 A。
   - 帳號沒碼：裝置有碼 B → setSyncCode(B)；裝置沒碼 → 向 kids-sync 產生新碼、推本機全部紀錄，再 setSyncCode。
     （setSyncCode 帳號優先：別台先綁好了就回那一組，這台照上面「帳號有碼」改用它）
   - 合併一律用 syncmerge.js（聯集、不互蓋）；不碰學習幣（上傳舊紀錄不補發）。登出時 kids-auth.js 清掉 ke_sync。
   同步範圍（2026-10-09 擴充，文件 v3）：英文 ke_log／ke_agg／ke_learned／ke_mistakes／ke_progress（星星、回數）、
   社會／自然 kids_mm_progress／kids_mm_blanks、數學天平 tianping-eq-list-v2、Scratch kids_scratch_done。
   2026-10-11（文件 v4）：加各科錯題庫 kids_mistakes（社會、自然、數學、AI；kids-mistakes.js）。
   不同步：登入（kids_jwt、kids_member、kids_quota、kids_vchk）、學習幣（kids_coin_*）、設定（ke_settings、kids_mm_ui、ks_parent_pin）、
   流量（kids_vid、kids_hit）、遊戲存檔（hi_*、hw_*）、推算出來的 ke_correct（從 log＋agg 重算）。
   心智圖／天平是 iframe 開在首頁裡：同網域的子框直接借用首頁的 KESync（同一個分頁只跑一份同步）。
   自動即時同步（2026-10-19）：
   - 上傳：任何紀錄變動（touch；別的分頁／子框寫進同步範圍的 localStorage 也算）→ 1.5 秒內沒有新變動就送、最晚 3 秒一定送。
     上傳先用「上次跟伺服器對到的版本」合併後直接 PUT（If-Match）；被別台先改過（412）才 GET、合併再 PUT，最多重試 3 次。
     頁面藏起來／關掉（visibilitychange hidden、pagehide）立刻送一次；PUT 用 fetch keepalive（iOS Safari 切走 App 也送得出去，64KB 以內）。
   - 下載：有同步碼、頁面看得到時每 20 秒問一次（GET ?since=<ETag>，伺服器沒變回 204、不合併）；回到前景、focus、重新連上網路立刻問。
     頁面藏起來就停；連續失敗 40 秒、80 秒、最多 2 分鐘再試。
   - 合併到新資料：馬上重讀資料（KEApp.reloadData、'kesync-data' 事件），畫面重畫的 'kids-sync-updated' 事件（首頁＋同網域子框）
     作答中先不發（KESync.hold／release；英文作答頁由 app.js 掛），這一輪結束才發。
   - 頁角（登入小元件旁）小雲朵：☁️ 已同步・剛剛／x 分鐘前、⏳ 上傳中、📴 離線（恢復後自動補傳）；點一下看最後同步時間。 */
(function () {
  'use strict';
  // 子框（首頁裡的心智圖、天平）：首頁已經有 KESync 就借用它，不再自己跑一份
  try { const t = window.top; if (t !== window && t.location.origin === location.origin && t.KESync) { window.KESync = t.KESync; return; } } catch (e) { }
  const SM = window.KESyncMerge, SA = window.KESyncAuto;
  // 測試專用：只有在本機（localhost／127.0.0.1）開網頁時，才接受測試程式注入的 window.__KIDS_TEST_SYNC_URL；正式站一律忽略
  const API = (function () {
    try {
      const h = location.hostname, t = window.__KIDS_TEST_SYNC_URL;
      if ((h === 'localhost' || h === '127.0.0.1') && typeof t === 'string' && /^http:\/\/(127\.0\.0\.1|localhost):\d+\//.test(t)) return t;
    } catch (e) { }
    return 'https://kids-sync.vercel.app/api/sync';
  })();
  const httpErr = r => Object.assign(new Error('HTTP ' + r.status), { status: r.status });
  const tagOf = r => r.headers.get('X-Sync-Etag') || r.headers.get('ETag');
  const byteLen = s => { try { return new TextEncoder().encode(s).length; } catch (e) { return s.length * 3; } };
  const KEEPALIVE_MAX = 60000;   // fetch keepalive 的內文上限是 64KB（同時送出中的全部加起來）

  // ---------- 後端轉接（kids-sync：Vercel 函式＋專用 Blob store）----------
  const backend = {
    async create() { const r = await fetch(API, { method: 'POST' }); if (!r.ok) throw httpErr(r); return (await r.json()).code; },
    // since＝手上那份的 ETag：伺服器沒變回 204（舊版回 304 也認）→ {notModified}；不是自訂標頭，瀏覽器不用先送預檢
    async get(code, since) {
      const r = await fetch(API + '?code=' + encodeURIComponent(code) + (since ? '&since=' + encodeURIComponent(since) : ''), { cache: 'no-store' });
      if (r.status === 404) return null;
      if (since && (r.status === 204 || r.status === 304)) return { notModified: true, etag: tagOf(r) || since };
      if (!r.ok) throw httpErr(r);
      // 瀏覽器拿到的 ETag 會被邊緣壓縮改成弱 ETag（W/…），優先用原樣的 X-Sync-Etag
      return { doc: await r.json(), etag: tagOf(r) };
    },
    async put(code, doc, etag, keepalive) {
      const h = { 'Content-Type': 'application/json' }; if (etag) h['If-Match'] = etag;
      const body = JSON.stringify(doc), o = { method: 'PUT', headers: h, body };
      if (keepalive && byteLen(body) < KEEPALIVE_MAX) o.keepalive = true;
      const r = await fetch(API + '?code=' + encodeURIComponent(code), o);
      if (r.status === 412) return { conflict: true }; if (!r.ok) throw httpErr(r);
      return { etag: tagOf(r) };
    }
  };

  // ---------- 本機資料（同步：各科練習紀錄；設定、登入、學習幣不同步）----------
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 空間不足 */ } };
  const has = k => { try { return localStorage.getItem(k) != null; } catch (e) { return false; } };
  // 內容一樣就不寫（避免別的分頁／子框收到沒意義的 storage 事件）
  const svIf = (k, v) => { try { const s = JSON.stringify(v); if (localStorage.getItem(k) !== s) localStorage.setItem(k, s); } catch (e) { } };
  const K_MM = 'kids_mm_progress', K_MMB = 'kids_mm_blanks', K_EQ = 'tianping-eq-list-v2', K_EQS = 'ke_sync_eq', K_SCR = 'kids_scratch_done', K_PROG = 'ke_progress', K_CTR = 'ke_sync_ctr', K_MK = 'kids_mistakes';
  // 同步範圍裡的 localStorage：別的分頁／子框（Scratch 講義、心智圖、天平）寫進來 → 也算變動，排一次上傳
  const WATCH = ['ke_log', 'ke_agg', 'ke_learned', 'ke_mistakes', K_PROG, K_MM, K_MMB, K_EQ, K_SCR, K_MK];
  const isObj = x => !!x && typeof x === 'object' && !Array.isArray(x);
  // 英文星星／回數：每台裝置一個 id，ke_sync_ctr＝{dev, ctr:上次同步後全部裝置的數字}；這台自己的＝本機總數－別台的
  function ctrMeta() { let m = ld(K_CTR, null); if (!isObj(m) || typeof m.dev !== 'string' || !m.dev) { m = { dev: 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8), ctr: {} }; sv(K_CTR, m); } if (!isObj(m.ctr)) m.ctr = {}; return m; }
  function localCtr() {
    const m = ctrMeta(), P = ld(K_PROG, {}) || {}, o = {};
    Object.keys(m.ctr).forEach(d => { if (d !== m.dev) o[d] = m.ctr[d]; });
    const s = SM.ctrSum(o); o[m.dev] = { stars: Math.max(0, (+P.stars || 0) - s.stars), quizzes: Math.max(0, (+P.quizzes || 0) - s.quizzes) };
    return o;
  }
  // 天平題目清單：本機清單＋ke_sync_eq（上次的清單狀態）→ eq；有變（新增／刪除／換順序）就先記下來，同一次同步裡讀幾次都一樣
  function localEq() {
    const v = ld(K_EQ, null), prev = ld(K_EQS, null), e = SM.eqFromLocal(v && Array.isArray(v.items) ? v.items : null, prev, Date.now());
    if (SM.canon(e) !== SM.canon(SM.normEq(prev))) sv(K_EQS, e);
    return e;
  }
  const readLocal = () => {
    const a = ld('ke_agg', {}) || {};
    return { log: ld('ke_log', []), cut: a.cut || 0, agg: a.agg || {}, learned: ld('ke_learned', {}), mistakes: ld('ke_mistakes', {}),
      mm: ld(K_MM, {}), mmBlanks: ld(K_MMB, {}), eq: localEq(), scratch: ld(K_SCR, {}), ctr: localCtr(), mk: ld(K_MK, {}) };
  };
  function writeLocal(d) {
    sv('ke_log', d.log); sv('ke_agg', { cut: d.cut, agg: d.agg }); sv('ke_learned', d.learned); sv('ke_mistakes', d.mistakes);
    const c = new Set(ld('ke_correct', [])); SM.correctIds(d).forEach(id => c.add(id)); sv('ke_correct', [...c]);
    // 社會／自然：同步到的單元整個換成合併結果；'_' 開頭的（示範時鐘）留著
    if (Object.keys(d.mm || {}).length) { const p = ld(K_MM, {}); svIf(K_MM, Object.assign(isObj(p) ? p : {}, d.mm)); }
    if (Object.keys(d.mmBlanks || {}).length) { const b = ld(K_MMB, {}); svIf(K_MMB, Object.assign(isObj(b) ? b : {}, d.mmBlanks)); }
    // 天平：清單＝合併後還活著的題（照合併後的順序）；本機本來沒有清單、合併後也是空的就不建
    const eq = d.eq || SM.normEq(null);
    sv(K_EQS, eq);
    if (eq.items.length || has(K_EQ)) {
      const want = eq.items.map(it => ({ q: it.q, own: !!it.own })), cur = ld(K_EQ, null);
      if (!(cur && Array.isArray(cur.items) && JSON.stringify(cur.items.map(it => ({ q: it && it.q, own: !!(it && it.own) }))) === JSON.stringify(want))) svIf(K_EQ, { v: 2, items: want });
    }
    if (Object.keys(d.scratch || {}).length) { const s = ld(K_SCR, {}); svIf(K_SCR, Object.assign(isObj(s) ? s : {}, d.scratch)); }
    // 錯題庫（社會／自然／數學／AI）：合併結果已含本機全部（聯集＋墓碑），整份換掉；本機沒有、合併後也是空的就不建
    if (Object.keys(d.mk || {}).length || has(K_MK)) svIf(K_MK, d.mk || {});
    // 星星／回數：本機總數＝全部裝置加總
    const m = ctrMeta(); m.ctr = d.ctr || {}; sv(K_CTR, m);
    const tot = SM.ctrSum(m.ctr), P0 = ld(K_PROG, null), P = isObj(P0) ? P0 : {};
    if (P0 || tot.stars || tot.quizzes) { P.stars = tot.stars; P.quizzes = tot.quizzes; svIf(K_PROG, P); }
  }
  // 本機紀錄數量（帳號頁顯示）：學會了幾項、作答幾筆（含壓縮過的舊紀錄）、錯題幾題、社會／自然背架構過了幾關
  function counts() {
    const L = ld('ke_learned', {}) || {}, M = ld('ke_mistakes', {}) || {}, log = ld('ke_log', []), a = (ld('ke_agg', {}) || {}).agg || {}, P = ld(K_MM, {}) || {};
    let answered = Array.isArray(log) ? log.length : 0; Object.keys(a).forEach(q => { answered += +(a[q] && a[q].n) || 0; });
    const passed = s => Object.keys(P).filter(k => k.indexOf(s + ':') === 0).reduce((n, k) => n + Object.keys((P[k] && P[k].passedAt) || {}).length, 0);
    return { learned: Object.keys(L).filter(k => L[k] && L[k].at).length, answered, mistakes: Object.keys(M).filter(k => M[k] && !M[k].d).length,
      social: passed('social'), science: passed('science') };
  }

  // ---------- 帳號（kids-auth.js）----------
  const KA = () => window.KidsAuth;
  function tokenSub(t) { try { let p = String(t || '').split('.')[1].replace(/-/g, '+').replace(/_/g, '/'); while (p.length % 4) p += '='; return String(JSON.parse(atob(p)).sub || ''); } catch (e) { return ''; } }
  // 現在登入的帳號（票的 sub）；沒登入或會員後端沒上線＝''
  function acctId() { const a = KA(); try { return a && a.configured() && a.isLoggedIn() ? tokenSub(a.token()) || 'me' : ''; } catch (e) { return ''; } }

  // ---------- 狀態 ----------
  let st = ld('ke_sync', {}) || {}, running = false, status = '', chain = Promise.resolve(), binding = null;
  let cache = null;          // {code, etag, doc}：上次跟伺服器對到的版本（只放記憶體；輪詢的 since、上傳的 If-Match 都靠它）
  let want = null;           // 同步進行中又被叫：做完再跑一次（取最強的那種）
  let touchGen = 0;          // 變動計數：同步途中又有新變動，就不清「待上傳」
  let fails = 0, netDown = false, lastOk = 0, lastCheck = 0, pollT = null, nowT = null, keepNext = false;
  const RANK = { poll: 1, push: 2, full: 3 };
  const fmt = iso => {
    if (window.KE && KE.fmtTaipei) return KE.fmtTaipei(iso);
    try { return new Date(iso).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }); } catch (e) { return iso; }
  };
  const lastMs = () => Math.max(lastOk, Date.parse(st.lastAt) || 0);
  const lastIso = () => (lastMs() ? new Date(lastMs()).toISOString() : null);
  function setStatus(s) {
    status = s; document.querySelectorAll('.sync-status').forEach(e => { e.textContent = s; });
    try { window.dispatchEvent(new CustomEvent('kesync', { detail: { status: s } })); } catch (e) { }
    paintCloud();
  }
  function statusText() { if (!st.code) return binding ? '同步中…' : '尚未開啟同步'; if (status) return status; return lastMs() ? '已同步 ' + fmt(lastIso()) : '尚未同步'; }
  const saveSt = () => sv('ke_sync', st);
  const app = () => window.KEApp || {};
  const bound = () => { const m = acctId(); return !!(m && st.code && st.acct === m); };
  const visible = () => document.visibilityState !== 'hidden';
  // 同一時間只跑一件同步工作（一般同步、帳號綁定排隊進行）
  function exclusive(fn) { const p = chain.then(fn, fn); chain = p.catch(() => { }); return p; }

  // ---------- 畫面更新（作答中先不發，這一輪結束才發）----------
  function announce() {
    const fire = w => { try { w.dispatchEvent(new w.CustomEvent('kids-sync-updated', { detail: { at: Date.now() } })); } catch (e) { } };
    fire(window);
    try { for (let i = 0; i < window.frames.length; i++) { try { const f = window.frames[i]; if (f.location.origin === location.origin) fire(f); } catch (e) { } } } catch (e) { }
  }
  const gate = SA.gate({ deliver: () => setTimeout(announce, 0) });
  function dataChanged() {
    try { const A = app(); if (A.reloadData) A.reloadData(); else if (A.reload) A.reload(); } catch (e) { }   // 資料層馬上重讀（作答中寫回本機才不會蓋掉別台的）
    try { window.dispatchEvent(new CustomEvent('kesync-data')); } catch (e) { }
    gate.offer();
  }

  // 跟 code 同步一次（拉 → 合併 → 寫本機 → 推）；code 是目前這台的碼才更新狀態
  // mode：full＝GET（since 手上的版本）＋合併＋需要才 PUT；push＝先拿手上的版本合併直接 PUT（412 再 GET）；poll＝伺服器沒變就結束
  async function syncCore(code, mode, gen) {
    const io = {
      get: async c => {
        const k = cache && cache.code === c && cache.etag ? cache : null;
        let r = await backend.get(c, k && k.etag);
        if (r && r.notModified) { if (k) return { doc: k.doc, etag: k.etag, notModified: true }; r = await backend.get(c); }
        if (!r) { if (cache && cache.code === c) cache = null; return null; }
        cache = r.etag ? { code: c, etag: r.etag, doc: r.doc } : null;
        return r;
      },
      put: async (c, d, et) => {
        const r = await backend.put(c, d, et, keepNext);
        if (r && !r.conflict) cache = r.etag ? { code: c, etag: r.etag, doc: d } : null;
        return r;
      },
      readLocal, writeLocal
    };
    const k = cache && cache.code === code && cache.etag ? cache : null;
    const opts = mode === 'push' && k ? { cached: { doc: k.doc, etag: k.etag } } : mode === 'poll' ? { lazy: true } : {};
    const r = await SM.syncOnce(io, code, opts);
    if (r.changedLocal) dataChanged();
    if (code === st.code) {
      if (r.notFound) { cache = null; setStatus('找不到這個同步碼，請重新配對'); }
      else if (!r.ok) { st.pending = true; saveSt(); setStatus('同步衝突，稍後再試'); }
      else {
        lastOk = Date.now();
        const clear = gen == null || gen === touchGen;   // 同步途中又有新變動：還是「待上傳」
        if (!r.notModified || (clear && st.pending) || !st.lastAt) { st.lastAt = new Date().toISOString(); if (clear) st.pending = false; saveSt(); }
        setStatus('已同步 ' + fmt(lastIso()));
      }
    }
    return r;
  }
  const isNet = e => navigator.onLine === false || !e || !e.status;
  const failText = e => (isNet(e) ? '離線，稍後再同步' : '同步失敗，稍後再試');

  async function syncNow(mode) {
    mode = RANK[mode] ? mode : 'full';
    if (acctId() && (st.acct !== acctId() || !st.code)) return bindAccount();
    if (!st.code) return;
    if (running) { if (!want || RANK[mode] > RANK[want]) want = mode; return; }
    running = true; pusher.cancel(); clearTimeout(pollT); pollT = null; lastCheck = Date.now();
    const code = st.code, gen = touchGen;
    if (mode !== 'poll') setStatus('同步中…'); else paintCloud();
    try {
      const r = await exclusive(() => syncCore(code, mode, gen));
      if (r && !r.ok && !r.notFound) fails++; else { fails = 0; netDown = false; }
    } catch (e) {
      fails++; netDown = isNet(e);
      if (mode !== 'poll' || st.pending) { st.pending = true; saveSt(); }
      setStatus(failText(e));
    } finally {
      running = false; keepNext = false;
      if (want) { const m = want; want = null; setTimeout(() => syncNow(m), 300); } else schedule();
      paintCloud();
    }
  }
  // 下一次輪詢：頁面看得到才排；連續失敗就退避（40 秒、80 秒、最多 2 分鐘）
  function schedule() {
    clearTimeout(pollT); pollT = null;
    if (!st.code || !visible()) return;
    pollT = setTimeout(() => { pollT = null; check('poll'); }, fails ? SA.backoff(fails, SA.POLL_MS, SA.BACKOFF_MAX) : SA.POLL_MS);
  }
  // 輪詢／回到前景／focus／重新連上網路：有待上傳的就完整同步一次，沒有就只問伺服器有沒有變
  function check(why) {
    if (!st.code) { if (acctId() && why !== 'poll') syncNow('full'); return; }
    if (why !== 'poll' && (running || Date.now() - lastCheck < 1500)) return;   // visibilitychange＋focus 會連發
    if (navigator.onLine === false) { netDown = true; paintCloud(); schedule(); return; }
    return syncNow(st.pending ? 'full' : 'poll');
  }
  // 有變動：1.5 秒內沒有新變動就上傳，最晚 3 秒；結束一回合／學會了：馬上上傳
  const pusher = SA.debouncer(() => syncNow('push'), { wait: SA.PUSH_WAIT, maxWait: SA.PUSH_MAX });
  function touch() { if (!st.code) return; touchGen++; if (!st.pending) { st.pending = true; saveSt(); } pusher.trigger(); paintCloud(); }
  function now() { if (!st.code && !acctId()) return; pusher.cancel(); clearTimeout(nowT); nowT = setTimeout(() => syncNow('push'), 200); }
  // 頁面藏起來／關掉：有沒送出的就立刻送（PUT 用 keepalive）
  function flush() {
    if (!st.code) return;
    const had = pusher.pending(); pusher.cancel();
    if (!had && !st.pending) return;
    keepNext = true; syncNow('push');
  }

  // ---------- 帳號自動同步 ----------
  async function bindCore(mid) {
    const a = KA(), tok = a.token(), still = () => a.token() === tok && acctId() === mid;
    const g = await a.api('getSyncCode', { token: tok });   // 票失效：kids-auth 會自動登出並提示
    if (!still()) return { ok: false, changed: true };
    let acct = SM.normCode(g.sync_code);
    const dev = st.code || null, done = new Set();
    if (!acct) {
      let code = dev;
      if (!code) code = await backend.create();               // 這台沒有碼：產生新碼
      let r = await syncCore(code);                           // 推本機全部紀錄
      if (r.notFound) { code = await backend.create(); r = await syncCore(code); }   // 舊碼在伺服器上不見了：換一組新的
      if (!r.ok) throw Object.assign(new Error('sync'), { status: 409 });
      done.add(code);
      if (!still()) return { ok: false, changed: true };
      const s = await a.api('setSyncCode', { token: tok, sync_code: code });
      acct = SM.normCode(s.sync_code) || code;                // 帳號優先：別台先綁好了就用那一組
    }
    if (dev && dev !== acct && !done.has(dev)) await syncCore(dev);   // 先確保本機已含舊碼 B 的資料
    if (!still()) return { ok: false, changed: true };
    st = { code: acct, acct: mid }; saveSt();
    const r = await syncCore(acct);                           // 拉帳號的碼、合併本機、推回
    return { ok: !!r.ok, notFound: !!r.notFound };
  }
  function bindAccount() {
    const mid = acctId(); if (!mid) return Promise.resolve(null);
    if (binding) return binding;
    pusher.cancel(); setStatus('同步中…');
    binding = exclusive(() => bindCore(mid)).catch(e => {
      fails++; netDown = !!(e && e.code === 'network') || (!(e && e.code) && isNet(e));
      if (e && e.code) setStatus(e.code === 'network' ? '離線，稍後再同步' : '同步失敗，稍後再試');   // 會員後端的錯誤（kids-auth api）
      else setStatus(failText(e));
      return { ok: false, error: (e && (e.code || e.message)) || 'error' };
    }).then(r => { binding = null; if (r && r.ok) { fails = 0; netDown = false; } schedule(); paintCloud(); return r; });
    paintCloud();
    return binding;
  }
  // 帳號頁「立刻上傳並同步」（備用）：重新走一次完整的帳號綁定（冪等），沒登入就照一般同步
  function uploadNow() { return acctId() ? bindAccount() : syncNow('full'); }

  // ---------- 配對（手動同步碼；沒登入時用）----------
  const link = code => 'https://yoda-wcyc.github.io/Kids-Station/#sync=' + code;
  async function generate() { const code = await backend.create(); st = { code }; saveSt(); await syncNow('full'); return code; }
  async function check1(code) {
    const c = SM.normCode(code); if (!c) throw new Error('同步碼格式不對：要 8 個英文字母或數字（像 ABCD-EFGH）');
    const r = await backend.get(c); if (!r) throw new Error('找不到這個同步碼，請再確認一次');
    return c;
  }
  async function pair(code) { const c = await check1(code); st = { code: c }; saveSt(); await syncNow('full'); return c; }
  function unpair() { pusher.cancel(); clearTimeout(pollT); pollT = null; cache = null; st = {}; saveSt(); setStatus(''); }
  function info() { return { on: !!st.code, bound: bound(), lastAt: lastIso(), pending: !!st.pending, busy: running || !!binding, offline: netDown, fails, polling: !!pollT }; }

  // ---------- 頁角小雲朵（登入小元件旁）：☁️ 已同步・剛剛／⏳ 上傳中／📴 離線；點一下看最後同步時間 ----------
  let cloud = null, bubble = null, bubbleT = null, cssDone = false;
  function cloudCss() {
    if (cssDone) return; cssDone = true;
    const s = document.createElement('style');
    s.textContent = '.ks-cloud{display:inline-flex;align-items:center;gap:4px;min-height:44px;padding:4px 12px;margin-left:6px;border-radius:999px;border:2px solid #f0e2c8;background:#fff;color:#263445;font:600 .9rem/1.2 -apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;white-space:nowrap;cursor:pointer;box-shadow:0 2px 0 #f0e2c8;touch-action:manipulation;-webkit-tap-highlight-color:transparent}'
      + '.ks-cloud .ks-t{font-size:.8rem;font-weight:600;color:#6b7785}.ks-cloud.ks-busy .ks-t{color:#d96a22}.ks-cloud.ks-off{background:#f3f4f6}'
      + '.ks-cloud.ks-float{position:fixed;top:calc(8px + env(safe-area-inset-top));z-index:2147482000;margin:0}'
      + '#subjects .ks-cloud{order:1;flex:0 0 auto}'
      + '.ks-bub{position:fixed;z-index:2147482001;max-width:min(280px,calc(100vw - 16px));padding:8px 12px;border-radius:12px;background:#263445;color:#fff;font:500 .9rem/1.45 -apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;box-shadow:0 6px 18px rgba(38,52,69,.25)}'
      + '@media (max-width:600px){.ks-cloud .ks-t{display:none}.ks-cloud{padding:4px 10px}}';
    (document.head || document.documentElement).appendChild(s);
  }
  function cloudState() {
    if (netDown || navigator.onLine === false) return { i: '📴', t: '離線', cls: 'ks-off', long: '離線中' + (st.pending ? '：有紀錄還沒上傳，網路恢復後會自動補傳' : '：網路恢復後會自動同步') };
    if (binding || st.pending || pusher.pending() || (running && status === '同步中…')) return { i: '⏳', t: '上傳中', cls: 'ks-busy', long: '正在上傳學習紀錄…' };
    const ms = lastMs();
    return { i: '☁️', t: ms ? SA.ago(ms) : '同步', cls: '', long: ms ? '已同步・' + SA.ago(ms) : '還沒有同步過' };
  }
  function paintCloud() {
    if (!document.body) return;
    const chip = document.querySelector('.ka-chip');
    if (!st.code || !chip) { if (cloud) { cloud.remove(); cloud = null; } hideBubble(); return; }   // 沒開同步、或這頁沒有登入小元件：不放
    cloudCss();
    if (!cloud) { cloud = document.createElement('button'); cloud.type = 'button'; cloud.className = 'ks-cloud'; cloud.addEventListener('click', toggleBubble); }
    if (chip.classList.contains('ka-float')) {
      if (cloud.parentNode !== document.body) document.body.appendChild(cloud);
      cloud.classList.add('ks-float'); cloud.style.right = `calc(${chip.offsetWidth + 16}px + env(safe-area-inset-right))`;
    } else {
      if (cloud.previousElementSibling !== chip) chip.insertAdjacentElement('afterend', cloud);
      cloud.classList.remove('ks-float'); cloud.style.right = '';
    }
    const s = cloudState();
    cloud.className = 'ks-cloud' + (cloud.classList.contains('ks-float') ? ' ks-float' : '') + (s.cls ? ' ' + s.cls : '');
    const html = `${s.i}<span class="ks-t">${s.t}</span>`;
    if (cloud.innerHTML !== html) cloud.innerHTML = html;
    cloud.setAttribute('aria-label', '學習紀錄同步：' + s.long); cloud.title = s.long;
    if (bubble) fillBubble();
  }
  function fillBubble() {
    const s = cloudState(), last = lastIso();
    bubble.textContent = s.long + '\n最後同步：' + (last ? fmt(last) : '還沒有');
    bubble.style.whiteSpace = 'pre-line';
  }
  function hideBubble() { clearTimeout(bubbleT); if (bubble) { bubble.remove(); bubble = null; } }
  function toggleBubble(e) {
    if (e) e.preventDefault();
    if (bubble) { hideBubble(); return; }
    bubble = document.createElement('div'); bubble.className = 'ks-bub'; bubble.setAttribute('role', 'status'); fillBubble();
    document.body.appendChild(bubble);
    const r = cloud.getBoundingClientRect(), w = bubble.offsetWidth;
    bubble.style.top = Math.round(r.bottom + 6) + 'px';
    bubble.style.left = Math.round(Math.max(8, Math.min(window.innerWidth - w - 8, r.right - w))) + 'px';
    bubble.addEventListener('click', hideBubble);
    bubbleT = setTimeout(hideBubble, 4000);
  }

  window.KESync = { code: () => st.code || null, link, statusText, generate, check: check1, pair, unpair, touch, now, syncNow, backend,
    bindAccount, uploadNow, accountBound: bound, info, counts,
    hold: tag => gate.hold(tag), release: tag => gate.release(tag), held: () => gate.held(), _check: check };

  // 回到這個分頁 → 馬上問；藏起來 → 停輪詢、沒送出的立刻送
  document.addEventListener('visibilitychange', () => { if (visible()) { check('visible'); if (!pollT && !running) schedule(); } else { clearTimeout(pollT); pollT = null; flush(); } });
  window.addEventListener('pagehide', flush);
  window.addEventListener('focus', () => check('focus'));
  window.addEventListener('online', () => { netDown = false; fails = 0; paintCloud(); check('online'); });
  window.addEventListener('offline', () => { netDown = true; paintCloud(); });
  // 別的分頁登入／登出／改了同步設定；別的分頁或子框（Scratch 講義、心智圖、天平）改了學習紀錄 → 排一次上傳
  window.addEventListener('storage', e => {
    if (e.key === 'ke_sync' || e.key === null) { const o = st.code; st = ld('ke_sync', {}) || {}; if (st.code !== o) cache = null; setStatus(''); if (!st.code) { clearTimeout(pollT); pollT = null; } else if (!pollT && !running) schedule(); }
    if (e.key === 'kids_jwt' || e.key === null) { if (!acctId() && st.acct) unpair(); else if (acctId()) now(); }
    if (e.key && WATCH.indexOf(e.key) >= 0 && e.newValue !== e.oldValue) touch();
  });
  // 雲朵：登入小元件晚一點才畫出來、「x 分鐘前」要跟著走；hold 過期也在這裡補發
  const tick = () => { paintCloud(); gate.tick(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick); else setTimeout(tick, 0);
  window.addEventListener('load', tick);
  setInterval(() => { if (visible()) tick(); }, 15000);
  // 帳號綁定的碼，卻已經沒登入（例如票過期被別處登出）：清掉，不跟別人的帳號合併
  if (st.acct && !acctId()) unpair();
  // 同步連結：#sync=ABCD-EFGH
  const m = (location.hash || '').match(/^#sync=([A-Za-z0-9-]+)/);
  if (m) {
    const go = h => { location.replace(h); if (app().render) app().render(); };
    const c = SM.normCode(decodeURIComponent(m[1]));
    if (!c) { alert('這個同步連結的同步碼不正確'); go('#home'); }
    else if (acctId()) { alert('已改用帳號自動同步：同一個帳號登入的 iPad、電腦，紀錄會自動合併，不需要同步連結。'); go('#parent'); setTimeout(() => syncNow('full'), 200); }
    else if (st.code === c) { go('#parent'); setTimeout(() => syncNow('full'), 200); }
    else if (confirm(`要把這台裝置跟同步碼 ${c} 連在一起嗎？\n兩台的作答紀錄、學會紀錄和錯題會合併在一起（不會刪掉這台的紀錄）。`)) {
      go('#parent');
      pair(c).then(() => app().render && app().render(), e => { alert(e.message || '連線失敗，請稍後再試'); });
    } else go('#home');
  } else if (st.code || acctId()) setTimeout(() => syncNow('full'), 200);   // 開網站：完整同步一次，之後每 20 秒輪詢
})();
