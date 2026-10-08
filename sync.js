/* sync.js — 裝置同步（iPad ↔ 電腦）：後端轉接 + 何時同步。合併規則在 syncmerge.js。
   後端要換，只改下面 backend 的 create/get/put 三個函式。 */
(function () {
  'use strict';
  const SM = window.KESyncMerge;
  const API = 'https://kids-sync.vercel.app/api/sync';
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

  // ---------- 本機資料（同步：作答紀錄、學會、錯題；設定不同步）----------
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 空間不足 */ } };
  const readLocal = () => { const a = ld('ke_agg', {}) || {}; return { log: ld('ke_log', []), cut: a.cut || 0, agg: a.agg || {}, learned: ld('ke_learned', {}), mistakes: ld('ke_mistakes', {}) }; };
  function writeLocal(d) {
    sv('ke_log', d.log); sv('ke_agg', { cut: d.cut, agg: d.agg }); sv('ke_learned', d.learned); sv('ke_mistakes', d.mistakes);
    const c = new Set(ld('ke_correct', [])); SM.correctIds(d).forEach(id => c.add(id)); sv('ke_correct', [...c]);
  }

  // ---------- 狀態 ----------
  let st = ld('ke_sync', {}) || {}, busy = false, again = false, timer = null, status = '';
  const fmt = iso => (window.KE && KE.fmtTaipei ? KE.fmtTaipei(iso) : iso);
  function setStatus(s) { status = s; document.querySelectorAll('.sync-status').forEach(e => { e.textContent = s; }); }
  function statusText() { if (!st.code) return '尚未開啟同步'; if (status) return status; return st.lastAt ? '已同步 ' + fmt(st.lastAt) : '尚未同步'; }
  const saveSt = () => sv('ke_sync', st);
  const app = () => window.KEApp || {};

  async function syncNow() {
    if (!st.code) return;
    if (busy) { again = true; return; }
    busy = true; setStatus('同步中…');
    try {
      const r = await SM.syncOnce({ get: backend.get, put: backend.put, readLocal, writeLocal }, st.code);
      if (r.changedLocal && app().reload) app().reload();
      if (r.notFound) { setStatus('找不到這個同步碼，請重新配對'); return; }
      if (!r.ok) { st.pending = true; saveSt(); setStatus('同步衝突，稍後再試'); return; }
      st.lastAt = new Date().toISOString(); st.pending = false; saveSt();
      setStatus('已同步 ' + fmt(st.lastAt));
    } catch (e) {
      st.pending = true; saveSt();
      setStatus(navigator.onLine === false || !e.status ? '離線，稍後再同步' : '同步失敗，稍後再試');
    } finally {
      busy = false;
      if (again) { again = false; setTimeout(syncNow, 300); }
    }
  }
  // 有變動：3 秒後同步（連續變動只同步一次）；結束一回合／學會了：馬上同步
  function touch() { if (!st.code) return; st.pending = true; saveSt(); clearTimeout(timer); timer = setTimeout(syncNow, 3000); }
  function now() { if (!st.code) return; clearTimeout(timer); timer = setTimeout(syncNow, 200); }

  // ---------- 配對 ----------
  const link = code => 'https://yoda-wcyc.github.io/Kids-Station/#sync=' + code;
  async function generate() { const code = await backend.create(); st = { code }; saveSt(); await syncNow(); return code; }
  async function check(code) {
    const c = SM.normCode(code); if (!c) throw new Error('同步碼格式不對：要 8 個英文字母或數字（像 ABCD-EFGH）');
    const r = await backend.get(c); if (!r) throw new Error('找不到這個同步碼，請再確認一次');
    return c;
  }
  async function pair(code) { const c = await check(code); st = { code: c }; saveSt(); await syncNow(); return c; }
  function unpair() { st = {}; saveSt(); setStatus(''); }

  window.KESync = { code: () => st.code || null, link, statusText, generate, check, pair, unpair, touch, now, syncNow, backend };

  // 開網站、回到這個分頁、重新連上網路 → 同步
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') now(); });
  window.addEventListener('online', () => { if (st.pending) now(); });
  // 同步連結：#sync=ABCD-EFGH
  const m = (location.hash || '').match(/^#sync=([A-Za-z0-9-]+)/);
  if (m) {
    const go = h => { location.replace(h); if (app().render) app().render(); };
    const c = SM.normCode(decodeURIComponent(m[1]));
    if (!c) { alert('這個同步連結的同步碼不正確'); go('#home'); }
    else if (st.code === c) go('#parent');
    else if (confirm(`要把這台裝置跟同步碼 ${c} 連在一起嗎？\n兩台的作答紀錄、學會紀錄和錯題會合併在一起（不會刪掉這台的紀錄）。`)) {
      go('#parent');
      pair(c).then(() => app().render && app().render(), e => { alert(e.message || '連線失敗，請稍後再試'); });
    } else go('#home');
  } else if (st.code) now();
})();
