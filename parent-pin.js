/* parent-pin.js — 全站共用的家長密碼（家長頁 #parent 與 game/hero-island 都讀寫同一個鍵）。
   localStorage 'ks_parent_pin' = {v:1, salt, hash}；hash = SHA-256(salt + '|' + PIN)，不存明碼。
   試玩／本機版：小朋友清掉瀏覽器資料就會不見；正式版要放到會員後端（每個小朋友一份）。
   Node 也能 require（測試用）；store 參數可傳入 {getItem,setItem} 取代 localStorage。 */
(function (root) {
  'use strict';
  const KEY = 'ks_parent_pin';

  // 純 JS SHA-256（file:// 或非安全環境沒有 crypto.subtle 也能用）
  function sha256(msg) {
    const rr = (v, n) => (v >>> n) | (v << (32 - n));
    const H = [], K = []; let p = 2, n = 0;
    const isP = c => { for (let d = 2; d * d <= c; d++) if (c % d === 0) return false; return true; };
    while (n < 64) { if (isP(p)) { if (n < 8) H[n] = (Math.pow(p, 1 / 2) * 4294967296) | 0; K[n] = (Math.pow(p, 1 / 3) * 4294967296) | 0; n++; } p++; }
    const bytes = Array.from(new TextEncoder().encode(String(msg))), bits = bytes.length * 8;
    bytes.push(0x80); while (bytes.length % 64 !== 56) bytes.push(0);
    for (let i = 7; i >= 0; i--) bytes.push(i >= 4 ? 0 : (bits >>> (i * 8)) & 255);
    let h = H.slice(); const w = new Array(64);
    for (let j = 0; j < bytes.length; j += 64) {
      for (let i = 0; i < 16; i++) w[i] = (bytes[j + 4 * i] << 24) | (bytes[j + 4 * i + 1] << 16) | (bytes[j + 4 * i + 2] << 8) | bytes[j + 4 * i + 3];
      for (let i = 16; i < 64; i++) { const s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3), s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10); w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0; }
      let [a, b, c, d, e, f, g, hh] = h;
      for (let i = 0; i < 64; i++) {
        const t1 = (hh + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0;
        const t2 = ((rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      h = [a, b, c, d, e, f, g, hh].map((v, i) => (v + h[i]) | 0);
    }
    return h.map(v => (v >>> 0).toString(16).padStart(8, '0')).join('');
  }
  const valid = pin => /^\d{4,6}$/.test(String(pin == null ? '' : pin));
  function makeSalt() {
    const a = new Uint8Array(8);
    try { (root.crypto || globalThis.crypto).getRandomValues(a); } catch (e) { for (let i = 0; i < 8; i++) a[i] = Math.floor(Math.random() * 256); }
    return Array.from(a, x => x.toString(16).padStart(2, '0')).join('');
  }
  const hashWith = (salt, pin) => sha256(salt + '|' + pin);
  const st = store => store || root.localStorage;
  function read(store) { try { const v = st(store).getItem(KEY); const r = v ? JSON.parse(v) : null; return r && r.hash ? r : null; } catch (e) { return null; } }

  const API = {
    KEY, sha256, valid, read,
    isSet: store => !!read(store),
    verify(pin, store) { const r = read(store); return !!(r && valid(pin) && hashWith(r.salt || '', String(pin)) === r.hash); },
    set(pin1, pin2, store) {
      if (!valid(pin1)) return { ok: false, reason: '密碼要 4–6 位數字' };
      if (String(pin1) !== String(pin2)) return { ok: false, reason: '兩次輸入不一樣' };
      const salt = makeSalt();
      try { st(store).setItem(KEY, JSON.stringify({ v: 1, salt, hash: hashWith(salt, String(pin1)), at: new Date().toISOString() })); }
      catch (e) { return { ok: false, reason: '這台裝置不能儲存（私密瀏覽？）' }; }
      return { ok: true };
    },
    change(oldPin, pin1, pin2, store) { return API.verify(oldPin, store) ? API.set(pin1, pin2, store) : { ok: false, reason: '舊密碼不對' }; },

    // ---- 家長頁卡片（app.js 只要放 cardHtml() 與 bindCard(render)） ----
    cardHtml() {
      const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
      const on = API.isSet(), get = k => { try { return JSON.parse(root.localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
      const T = get('hi_timer'), log = ((get('hi_parent') || {}).log || []).slice(-10).reverse();
      const mm = s => `${Math.floor(s / 60)} 分 ${Math.floor(s % 60)} 秒`;
      const pin = n => `<input type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" class="code-in" id="${n[0]}" placeholder="${n[1]}" aria-label="${n[1]}">`;
      const at = iso => { try { return new Date(iso).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false }); } catch (e) { return iso; } };
      return `<section class="card pin-card"><h2>🔒 家長密碼</h2>
        <p>狀態：<b>${on ? '已設定' : '未設定'}</b>（4–6 位數字；勇者島遊戲時間到了，要輸入這組密碼才能延長）</p>
        <div class="row wrap">${(on ? [['pinold', '舊密碼']] : []).concat([['pin1', '新密碼'], ['pin2', '再輸入一次']]).map(pin).join('')}<button class="btn primary" id="pinsave">${on ? '修改密碼' : '設定密碼'}</button></div>
        <p class="muted">只存加密後的雜湊，不存密碼本身；只存在這台裝置。</p>
        <h3>勇者島 遊戲時間</h3>
        ${T ? `<p>${esc(T.day)}：${T.plan === 'paid' ? '付費會員（每天 60 分）' : '未付費（每天 10 分）'}，今天已玩 ${mm(T.used || 0)}${T.inf ? '，今日無限' : T.ext ? `，已延長 ${Math.round(T.ext / 60)} 分` : ''}</p>` : '<p class="muted">還沒玩過勇者島。</p>'}
        ${log.length ? `<ul>${log.map(x => `<li>${esc(x.date)}：${x.minutes === 'inf' ? '今日無限' : '+' + esc(x.minutes) + ' 分'}（${esc(at(x.at))}）</li>`).join('')}</ul>` : '<p class="muted">沒有延長紀錄。</p>'}</section>`;
    },
    bindCard(rerender) {
      const b = document.getElementById('pinsave'); if (!b) return;
      b.onclick = () => {
        const v = id => { const e = document.getElementById(id); return e ? e.value.trim() : ''; };
        const r = API.isSet() ? API.change(v('pinold'), v('pin1'), v('pin2')) : API.set(v('pin1'), v('pin2'));
        alert(r.ok ? '家長密碼已儲存' : r.reason);
        if (r.ok && rerender) rerender();
      };
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  root.KSParentPin = API;
})(typeof window !== 'undefined' ? window : globalThis);
