/* kids-done.js — 單元完成（瀏覽器用）：讀寫本機紀錄＋每個單元頁最上方的「學完了沒」橫幅（2026-10-20）
   判定規則全部在 completion.js（KidsCompletion.evaluate），這支只負責：
   - KidsDone.record(sec, key, val)：補存一筆紀錄到 kids_done（課本考試分數、心智圖考考自己／練習題 %、天平內建題、短除法／應用題 %、AI 玩完），
     有變就排一次同步（KESync.touch；子框借用首頁的 KESync；沒載入 sync.js 的頁面靠首頁的 storage 事件）。不改任何練習的計分方式。
   - KidsDone.mount(el, unitKey, {title, compact})：在 el 畫橫幅；本機紀錄變動（這頁 record、別的分頁／子框 storage 事件）、
     自動同步合併到別台的紀錄（kids-sync-updated、kesync-data）時自己重畫。unitKey 見 completion.js（tb:<單元>、mm:<科>:<單元>、math:balance…）。
   - KidsDone.ctx()／data()／result(key)：地圖頁（map.html）也用。
   需要先載入 syncmerge.js、completion.js（英文課本單元還要 engine.js＋data/*.js）。 */
(function () {
  'use strict';
  const KC = window.KidsCompletion, SM = window.KESyncMerge;
  if (!KC || !SM) return;
  const K = 'kids_done';
  const WATCH = [K, 'ke_learned', 'ke_log', 'ke_agg', 'kids_mm_progress', 'kids_mm_blanks', 'kids_scratch_done'];
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function ctx() {
    const a = ld('ke_agg', {}) || {};
    return { learned: ld('ke_learned', {}), log: ld('ke_log', []), agg: (a && a.agg) || {}, done: ld(K, {}), mm: ld('kids_mm_progress', {}), mmBlanks: ld('kids_mm_blanks', {}), scratch: ld('kids_scratch_done', {}) };
  }
  function data() {
    const W = window;
    return { textbook: W.DATA_TEXTBOOK || [], words: W.DATA_WORDS || [], phrases: W.DATA_PHRASES || [], roots: W.DATA_ROOTS || [], grammar: W.DATA_GRAMMAR || [], patterns: W.DATA_PATTERNS || [], KE: W.KE || null };
  }
  const result = key => KC.evaluate(key, data(), ctx());
  function titleOf(key) { const D = data(); for (const s of KC.catalog(D)) { const u = s.units.find(x => x.key === key); if (u) return u.title; } return ''; }

  // ---------- 補存紀錄 ----------
  function record(sec, key, val) {
    let changed = false;
    try {
      const cur = ld(K, {}), next = KC.record(cur, sec, key, val, Date.now());
      if (SM.canon(next) !== SM.canon(SM.normDone(cur))) { localStorage.setItem(K, JSON.stringify(next)); changed = true; }
    } catch (e) { /* 私密模式／空間不足：照樣顯示，只是記不住 */ }
    if (changed) { try { const S = window.KESync; if (S && S.touch) S.touch(); } catch (e) { } }
    refreshSoon();
    return changed;
  }

  // ---------- 頁首橫幅 ----------
  let cssDone = false;
  function css() {
    if (cssDone) return; cssDone = true;
    const s = document.createElement('style');
    s.textContent = '.kd-banner{display:block;box-sizing:border-box;margin:0 0 14px;padding:12px 16px;border-radius:18px;border:3px solid;line-height:1.45;text-align:left;font-size:1rem}'
      + '.kd-banner[hidden]{display:none}'
      + '.kd-done{background:#e6f8ee;border-color:#2fb36d;color:#145c38}.kd-doing{background:#fff6dc;border-color:#f0b429;color:#4d3800}.kd-todo{background:#f4f5f7;border-color:#c3c9d2;color:#344150}'
      + '.kd-h{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px}'
      + '.kd-badge{font-size:1.2rem;font-weight:800;white-space:nowrap}.kd-name{font-weight:600;font-size:.95rem;opacity:.85}'
      + '.kd-list{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:6px;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))}'
      + '.kd-list li{display:flex;gap:8px;align-items:flex-start;background:rgba(255,255,255,.75);border-radius:12px;padding:6px 10px;font-size:.95rem;color:#263445}'
      + '.kd-mk{flex:none;font-weight:800;white-space:nowrap;border-radius:999px;padding:0 8px;font-size:.85rem;line-height:1.7}'
      + '.kd-ok .kd-mk{background:#d3f2e1;color:#145c38}.kd-no .kd-mk{background:#fde2e2;color:#9a2226}'
      + '.kd-list b{font-weight:700}.kd-list small{display:block;color:#56616f;font-size:.85rem;margin-top:1px}'
      + '.kd-banner details{margin-top:4px}.kd-banner summary{cursor:pointer;min-height:44px;display:flex;align-items:center;font-weight:700;font-size:.95rem}'
      + '.kd-compact{padding:6px 12px;margin:6px 0 0;border-width:2px;border-radius:14px}.kd-compact .kd-badge{font-size:1.05rem}.kd-compact .kd-list{margin-top:6px}'
      + '.kd-compact .kd-list li{padding:4px 8px;font-size:.88rem}.kd-compact .kd-list small{font-size:.8rem}';
    (document.head || document.documentElement).appendChild(s);
  }
  // 一項：✔ 已達成／✘ 還差（不只靠顏色：有符號＋文字）
  const item = c => `<li class="${c.ok ? 'kd-ok' : 'kd-no'}"><span class="kd-mk">${c.ok ? '✔ 已達成' : '✘ 還差'}</span><span><b>${esc(c.label)}</b>${c.detail ? `<small>${esc(c.detail)}</small>` : ''}</span></li>`;
  function html(r, title) {
    const list = `<ul class="kd-list">${r.checklist.map(item).join('')}</ul>`;
    const head = `<div class="kd-h"><b class="kd-badge">${esc(KC.statusText(r))}</b>${title ? `<span class="kd-name">${esc(title)}</span>` : ''}</div>`;
    if (r.status === 'doing') return head + list;   // 進行中：清單直接攤開，看得到還差什麼
    return head + `<details><summary>${r.status === 'done' ? '看完成條件' : '怎樣算學完這個單元？'}</summary>${list}</details>`;
  }
  const mounts = [];
  function paint(el) {
    const m = el.__kd; if (!m) return;
    let r = null; try { r = m.key ? result(m.key) : null; } catch (e) { r = null; }
    if (!r) { el.hidden = true; el.removeAttribute('data-status'); return; }
    css();
    const open = !!(el.querySelector('details') && el.querySelector('details').open);
    el.hidden = false;
    el.className = 'kd-banner kd-' + r.status + (m.opts.compact ? ' kd-compact' : '');
    el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite');
    el.dataset.status = r.status; el.dataset.pct = r.pct; el.dataset.unit = m.key;
    const h = html(r, m.opts.title != null ? m.opts.title : titleOf(m.key));
    if (el.__kdHtml !== h) { el.innerHTML = h; el.__kdHtml = h; const d = el.querySelector('details'); if (d && open) d.open = true; }
  }
  function mount(el, key, opts) {
    if (!el) return null;
    el.__kd = { key, opts: opts || {} }; el.__kdHtml = null;
    if (mounts.indexOf(el) < 0) mounts.push(el);
    paint(el);
    return el;
  }
  function refreshAll() {
    for (let i = mounts.length - 1; i >= 0; i--) { const el = mounts[i]; if (!el.isConnected) { mounts.splice(i, 1); continue; } paint(el); }
    try { window.dispatchEvent(new CustomEvent('kids-done-changed')); } catch (e) { }
  }
  let soon = null;
  function refreshSoon() { clearTimeout(soon); soon = setTimeout(refreshAll, 30); }
  window.addEventListener('kids-sync-updated', refreshSoon);
  window.addEventListener('kesync-data', refreshSoon);
  window.addEventListener('storage', e => { if (e.key === null || WATCH.indexOf(e.key) >= 0) refreshSoon(); });

  window.KidsDone = { record, mount, refresh: refreshAll, result, ctx, data, titleOf, html, KEY: K };
})();
