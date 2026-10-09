/* sync.js — 裝置同步（iPad ↔ 電腦）：後端轉接 + 何時同步。合併規則在 syncmerge.js。
   後端要換，只改下面 backend 的 create/get/put 三個函式。
   帳號自動同步（2026-10-09）：登入狀態下，同步碼跟著帳號走（會員後端 getSyncCode／setSyncCode，碼本身不顯示）。
   - 帳號有碼 A：裝置沒碼 → 改用 A；裝置是別的碼 B → 先把 B 的資料拉進本機，再改用 A。之後拉 A、跟本機合併、推回 A。
   - 帳號沒碼：裝置有碼 B → setSyncCode(B)；裝置沒碼 → 向 kids-sync 產生新碼、推本機全部紀錄，再 setSyncCode。
     （setSyncCode 帳號優先：別台先綁好了就回那一組，這台照上面「帳號有碼」改用它）
   - 合併一律用 syncmerge.js（聯集、不互蓋）；不碰學習幣（上傳舊紀錄不補發）。登出時 kids-auth.js 清掉 ke_sync。
   同步範圍（2026-10-09 擴充，文件 v3）：英文 ke_log／ke_agg／ke_learned／ke_mistakes／ke_progress（星星、回數）、
   社會／自然 kids_mm_progress／kids_mm_blanks、數學天平 tianping-eq-list-v2、Scratch kids_scratch_done。
   不同步：登入（kids_jwt、kids_member、kids_quota、kids_vchk）、學習幣（kids_coin_*）、設定（ke_settings、kids_mm_ui、ks_parent_pin）、
   流量（kids_vid、kids_hit）、遊戲存檔（hi_*、hw_*）、推算出來的 ke_correct（從 log＋agg 重算）。
   心智圖／天平是 iframe 開在首頁裡：同網域的子框直接借用首頁的 KESync（同一個分頁只跑一份同步）；寫回本機後發 'kesync-data' 事件。 */
(function () {
  'use strict';
  // 子框（首頁裡的心智圖、天平）：首頁已經有 KESync 就借用它，不再自己跑一份
  try { const t = window.top; if (t !== window && t.location.origin === location.origin && t.KESync) { window.KESync = t.KESync; return; } } catch (e) { }
  const SM = window.KESyncMerge;
  // 測試專用：只有在本機（localhost／127.0.0.1）開網頁時，才接受測試程式注入的 window.__KIDS_TEST_SYNC_URL；正式站一律忽略
  const API = (function () {
    try {
      const h = location.hostname, t = window.__KIDS_TEST_SYNC_URL;
      if ((h === 'localhost' || h === '127.0.0.1') && typeof t === 'string' && /^http:\/\/(127\.0\.0\.1|localhost):\d+\//.test(t)) return t;
    } catch (e) { }
    return 'https://kids-sync.vercel.app/api/sync';
  })();
  const httpErr = r => Object.assign(new Error('HTTP ' + r.status), { status: r.status });

  // ---------- 後端轉接（kids-sync：Vercel 函式＋專用 Blob store）----------
  const backend = {
    async create() { const r = await fetch(API, { method: 'POST' }); if (!r.ok) throw httpErr(r); return (await r.json()).code; },
    async get(code) {
      const r = await fetch(API + '?code=' + encodeURIComponent(code), { cache: 'no-store' });
      if (r.status === 404) return null; if (!r.ok) throw httpErr(r);
      // 瀏覽器拿到的 ETag 會被邊緣壓縮改成弱 ETag（W/…），優先用原樣的 X-Sync-Etag
      return { doc: await r.json(), etag: r.headers.get('X-Sync-Etag') || r.headers.get('ETag') };
    },
    async put(code, doc, etag) {
      const h = { 'Content-Type': 'application/json' }; if (etag) h['If-Match'] = etag;
      const r = await fetch(API + '?code=' + encodeURIComponent(code), { method: 'PUT', headers: h, body: JSON.stringify(doc) });
      if (r.status === 412) return { conflict: true }; if (!r.ok) throw httpErr(r);
      return { etag: r.headers.get('X-Sync-Etag') || r.headers.get('ETag') };
    }
  };

  // ---------- 本機資料（同步：各科練習紀錄；設定、登入、學習幣不同步）----------
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 空間不足 */ } };
  const has = k => { try { return localStorage.getItem(k) != null; } catch (e) { return false; } };
  // 內容一樣就不寫（避免別的分頁／子框收到沒意義的 storage 事件）
  const svIf = (k, v) => { try { const s = JSON.stringify(v); if (localStorage.getItem(k) !== s) localStorage.setItem(k, s); } catch (e) { } };
  const K_MM = 'kids_mm_progress', K_MMB = 'kids_mm_blanks', K_EQ = 'tianping-eq-list-v2', K_EQS = 'ke_sync_eq', K_SCR = 'kids_scratch_done', K_PROG = 'ke_progress', K_CTR = 'ke_sync_ctr';
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
      mm: ld(K_MM, {}), mmBlanks: ld(K_MMB, {}), eq: localEq(), scratch: ld(K_SCR, {}), ctr: localCtr() };
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
  let st = ld('ke_sync', {}) || {}, running = false, again = false, timer = null, status = '', chain = Promise.resolve(), binding = null;
  const fmt = iso => {
    if (window.KE && KE.fmtTaipei) return KE.fmtTaipei(iso);
    try { return new Date(iso).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }); } catch (e) { return iso; }
  };
  function setStatus(s) {
    status = s; document.querySelectorAll('.sync-status').forEach(e => { e.textContent = s; });
    try { window.dispatchEvent(new CustomEvent('kesync', { detail: { status: s } })); } catch (e) { }
  }
  function statusText() { if (!st.code) return binding ? '同步中…' : '尚未開啟同步'; if (status) return status; return st.lastAt ? '已同步 ' + fmt(st.lastAt) : '尚未同步'; }
  const saveSt = () => sv('ke_sync', st);
  const app = () => window.KEApp || {};
  const bound = () => { const m = acctId(); return !!(m && st.code && st.acct === m); };
  // 同一時間只跑一件同步工作（一般同步、帳號綁定排隊進行）
  function exclusive(fn) { const p = chain.then(fn, fn); chain = p.catch(() => { }); return p; }

  // 跟 code 同步一次（拉 → 合併 → 寫本機 → 推）；code 是目前這台的碼才更新狀態
  async function syncCore(code) {
    const r = await SM.syncOnce({ get: backend.get, put: backend.put, readLocal, writeLocal }, code);
    if (r.changedLocal) {
      if (app().reload) app().reload();
      try { window.dispatchEvent(new CustomEvent('kesync-data')); } catch (e) { }   // 心智圖／天平／科目卡重畫（子框收 storage 事件）
    }
    if (code === st.code) {
      if (r.notFound) setStatus('找不到這個同步碼，請重新配對');
      else if (!r.ok) { st.pending = true; saveSt(); setStatus('同步衝突，稍後再試'); }
      else { st.lastAt = new Date().toISOString(); st.pending = false; saveSt(); setStatus('已同步 ' + fmt(st.lastAt)); }
    }
    return r;
  }
  const failText = e => (navigator.onLine === false || !e || !e.status ? '離線，稍後再同步' : '同步失敗，稍後再試');

  async function syncNow() {
    if (acctId() && (st.acct !== acctId() || !st.code)) return bindAccount();
    if (!st.code) return;
    if (running) { again = true; return; }
    running = true; setStatus('同步中…');
    try { await exclusive(() => syncCore(st.code)); }
    catch (e) { st.pending = true; saveSt(); setStatus(failText(e)); }
    finally {
      running = false;
      if (again) { again = false; setTimeout(syncNow, 300); }
    }
  }
  // 有變動：3 秒後同步（連續變動只同步一次）；結束一回合／學會了：馬上同步
  function touch() { if (!st.code) return; st.pending = true; saveSt(); clearTimeout(timer); timer = setTimeout(syncNow, 3000); }
  function now() { if (!st.code && !acctId()) return; clearTimeout(timer); timer = setTimeout(syncNow, 200); }

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
    clearTimeout(timer); setStatus('同步中…');
    binding = exclusive(() => bindCore(mid)).catch(e => {
      if (e && e.code) setStatus(e.code === 'network' ? '離線，稍後再同步' : '同步失敗，稍後再試');   // 會員後端的錯誤（kids-auth api）
      else setStatus(failText(e));
      return { ok: false, error: (e && (e.code || e.message)) || 'error' };
    }).then(r => { binding = null; return r; });
    return binding;
  }
  // 帳號頁「立刻上傳並同步」：重新走一次完整的帳號綁定（冪等），沒登入就照一般同步
  function uploadNow() { return acctId() ? bindAccount() : syncNow(); }

  // ---------- 配對（手動同步碼；沒登入時用）----------
  const link = code => 'https://yoda-wcyc.github.io/Kids-Station/#sync=' + code;
  async function generate() { const code = await backend.create(); st = { code }; saveSt(); await syncNow(); return code; }
  async function check(code) {
    const c = SM.normCode(code); if (!c) throw new Error('同步碼格式不對：要 8 個英文字母或數字（像 ABCD-EFGH）');
    const r = await backend.get(c); if (!r) throw new Error('找不到這個同步碼，請再確認一次');
    return c;
  }
  async function pair(code) { const c = await check(code); st = { code: c }; saveSt(); await syncNow(); return c; }
  function unpair() { clearTimeout(timer); st = {}; saveSt(); setStatus(''); }
  function info() { return { on: !!st.code, bound: bound(), lastAt: st.lastAt || null, pending: !!st.pending, busy: running || !!binding }; }

  window.KESync = { code: () => st.code || null, link, statusText, generate, check, pair, unpair, touch, now, syncNow, backend,
    bindAccount, uploadNow, accountBound: bound, info, counts };

  // 開網站、回到這個分頁、重新連上網路 → 同步
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') now(); });
  window.addEventListener('online', () => { if (st.pending || acctId()) now(); });
  // 別的分頁登入／登出／改了同步設定
  window.addEventListener('storage', e => {
    if (e.key === 'ke_sync' || e.key === null) { st = ld('ke_sync', {}) || {}; setStatus(''); }
    if (e.key === 'kids_jwt' || e.key === null) { if (!acctId() && st.acct) unpair(); else if (acctId()) now(); }
  });
  // 帳號綁定的碼，卻已經沒登入（例如票過期被別處登出）：清掉，不跟別人的帳號合併
  if (st.acct && !acctId()) unpair();
  // 同步連結：#sync=ABCD-EFGH
  const m = (location.hash || '').match(/^#sync=([A-Za-z0-9-]+)/);
  if (m) {
    const go = h => { location.replace(h); if (app().render) app().render(); };
    const c = SM.normCode(decodeURIComponent(m[1]));
    if (!c) { alert('這個同步連結的同步碼不正確'); go('#home'); }
    else if (acctId()) { alert('已改用帳號自動同步：同一個帳號登入的 iPad、電腦，紀錄會自動合併，不需要同步連結。'); go('#parent'); now(); }
    else if (st.code === c) go('#parent');
    else if (confirm(`要把這台裝置跟同步碼 ${c} 連在一起嗎？\n兩台的作答紀錄、學會紀錄和錯題會合併在一起（不會刪掉這台的紀錄）。`)) {
      go('#parent');
      pair(c).then(() => app().render && app().render(), e => { alert(e.message || '連線失敗，請稍後再試'); });
    } else go('#home');
  } else if (st.code || acctId()) now();
})();
