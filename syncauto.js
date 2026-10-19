/* syncauto.js — 自動同步的計時規則（純函式，不碰 DOM／網路；瀏覽器與 Node 共用，smoke.js 直接測）
   2026-10-19：學習紀錄完全自動上傳＋20 秒輪詢（sync.js 用這裡的零件決定「什麼時候」同步）。
   - debouncer：有變動就排一次上傳；連續變動合併成一次（wait 毫秒內沒有新變動就送），但第一筆變動後最晚 maxWait 毫秒一定送出。
   - backoff：連續失敗幾次 → 下一次多久後再試（base × 2^次數，上限 max）。
   - gate：畫面更新的閘門。作答中（hold）先不發「資料更新了」的通知，等這一輪結束（release）才發；hold 超過 ttl 自動失效（頁面被關掉忘了 release）。
   - ago：「剛剛／x 分鐘前／x 小時前」。 */
(function (root) {
  'use strict';
  const T = () => ({ now: () => Date.now(), set: (f, ms) => setTimeout(f, ms), clear: id => clearTimeout(id) });

  function debouncer(fn, o) {
    o = o || {}; const t = Object.assign(T(), o.timer || {}), wait = o.wait == null ? 1500 : o.wait, maxWait = o.maxWait == null ? 3000 : o.maxWait;
    let id = null, first = 0;
    const fire = () => { id = null; first = 0; fn(); };
    return {
      trigger() { const n = t.now(); if (!first) first = n; if (id != null) t.clear(id); id = t.set(fire, Math.max(0, Math.min(wait, first + maxWait - n))); },
      cancel() { if (id != null) t.clear(id); id = null; first = 0; },
      pending: () => id != null,
      flush() { if (id == null) return false; t.clear(id); fire(); return true; }
    };
  }

  // 失敗 0 次＝base；1 次＝base×2；2 次＝base×4 …；不超過 max
  function backoff(fails, base, max) { const f = Math.max(0, Math.floor(+fails || 0)); return Math.min(max, base * Math.pow(2, Math.min(f, 20))); }

  function gate(o) {
    o = o || {}; const now = o.now || (() => Date.now()), ttl = o.ttl || 15 * 60 * 1000, deliver = o.deliver || (() => { });
    const holds = new Map(); let queued = false;
    const prune = () => { const n = now(); holds.forEach((exp, k) => { if (exp <= n) holds.delete(k); }); };
    const free = () => { prune(); return holds.size === 0; };
    const go = () => { if (queued && free()) { queued = false; deliver(); return true; } return false; };
    return {
      hold(tag) { holds.set(String(tag || 'x'), now() + ttl); },
      release(tag) { holds.delete(String(tag || 'x')); return go(); },
      held: () => !free(),
      queued: () => queued,
      offer() { queued = true; return go(); },   // 有新資料：沒在作答就馬上送通知，作答中就先排著
      tick: go                                   // 定時檢查（hold 過期）
    };
  }

  function ago(ms, now) {
    if (!ms) return '';
    const d = Math.max(0, (now == null ? Date.now() : now) - ms), m = Math.floor(d / 60000);
    if (m < 1) return '剛剛';
    if (m < 60) return m + ' 分鐘前';
    const h = Math.floor(m / 60); if (h < 24) return h + ' 小時前';
    return Math.floor(h / 24) + ' 天前';
  }

  const SA = { debouncer, backoff, gate, ago, POLL_MS: 20000, PUSH_WAIT: 1500, PUSH_MAX: 3000, BACKOFF_MAX: 120000 };
  if (typeof module !== 'undefined' && module.exports) module.exports = SA;
  root.KESyncAuto = SA;
})(typeof window !== 'undefined' ? window : globalThis);
