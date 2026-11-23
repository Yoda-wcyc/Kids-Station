/* syl.js — 單字卡的音節底線（家長 2026-11-23：ability 是 a／bi／li／ty，每一節下面一條線、相鄰兩節不同顏色、線之間留空隙；單音節一整條）
   用法：要畫線的元素加 class="syl"（只放在展示／學習的卡片上；拼字、聽寫題的題目不要加，不然等於洩漏字母數和切法）。
   音節資料（data/syllables*.js，window.DATA_SYLLABLES，格式 "ability":"a-bi-li-ty"、"living room":"liv-ing room"）
   不跟首頁一起載：畫面第一次出現 .syl 才載入 <script src="syl.js" data-src="…" data-gept-src="…"> 寫的檔（部署時會加 ?v= 雜湊）。 */
(function (root) {
  'use strict';
  const own = (S, k) => Object.prototype.hasOwnProperty.call(S, k);
  // 查法：原字 → 小寫；查不到回 null（"constructor" 這種 Object 內建名字不能當成查到）
  const look = (S, w) => (!S || !w ? null : own(S, w) ? S[w] : own(S, w.toLowerCase()) ? S[w.toLowerCase()] : null);
  // 一個字照音節的字數切：parts 字數加起來要等於字的長度，否則整個字當一節
  function cut(tok, parts) {
    if (!parts || parts.reduce((n, p) => n + p.length, 0) !== tok.length) return [tok];
    let i = 0; return parts.map(p => tok.slice(i, i += p.length));
  }
  // text → [{t, k}]：k＝這個字裡的第幾節（-1＝空白、連字號、標點，不畫線）
  function split(S, text) {
    text = String(text == null ? '' : text);
    const toks = text.split(/([\s\-]+)/), words = toks.filter((t, i) => i % 2 === 0 && t);
    const whole = look(S, text.trim()), wv = whole ? whole.split(' ') : null, ok = wv && wv.length === words.length;
    const out = []; let wi = 0;
    toks.forEach((t, i) => {
      if (!t) return;
      if (i % 2) { out.push({ t, k: -1 }); return; }
      // 前後的標點（引號、括號、問號）不畫；Mr.、a.m. 的點算在字裡（資料就是這樣存的）
      const m = /^([^A-Za-z]*)(.*?)([^A-Za-z.']*)$/.exec(t), pre = m[1], core = m[2], post = m[3];
      const v = ok ? wv[wi] : look(S, core) || look(S, core.replace(/\.+$/, ''));
      wi++;
      if (pre) out.push({ t: pre, k: -1 });
      if (core) {
        const c2 = v && v.replace(/-/g, '').length !== core.length && /\.$/.test(core) ? core.replace(/\.+$/, '') : core;   // 查到的是去掉句點的字
        cut(c2, v ? v.split('-') : null).forEach((p, k) => out.push({ t: p, k }));
        if (c2 !== core) out.push({ t: core.slice(c2.length), k: -1 });
      }
      if (post) out.push({ t: post, k: -1 });
    });
    return out;
  }
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const html = (S, text) => split(S, text).map(x => (x.k < 0 ? esc(x.t) : `<span class="sy sy${x.k % 2}">${esc(x.t)}</span>`)).join('');
  const API = { look, split, html };
  if (typeof module !== 'undefined' && module.exports) { module.exports = API; return; }

  // ---- 瀏覽器：第一次看到 .syl 才載入資料，載好之後把畫面上的 .syl 都畫上線 ----
  const me = document.currentScript, urls = me ? [me.getAttribute('data-src'), me.getAttribute('data-gept-src')].filter(Boolean) : [];
  let state = 0, timer = 0;   // 0 還沒載、1 載入中、2 好了、3 載入失敗（就不畫線，字照常顯示）
  function paint() {
    timer = 0;
    const els = document.querySelectorAll('.syl:not([data-syl])');
    if (!els.length) return;
    if (state === 0) { load(); return; }
    if (state !== 2) return;
    const S = root.DATA_SYLLABLES || {};
    els.forEach(el => { el.setAttribute('data-syl', ''); if (el.children.length) return; el.innerHTML = html(S, el.textContent); });
  }
  function load() {
    state = 1;
    let left = urls.length;
    if (!left) { state = 3; return; }
    urls.forEach(u => {
      const s = document.createElement('script'); s.src = u; s.async = false;
      s.onload = () => { if (--left === 0 && state === 1) { state = 2; paint(); } };
      s.onerror = () => { state = 3; };
      document.head.appendChild(s);
    });
  }
  const soon = () => { if (!timer) timer = setTimeout(paint, 0); };
  new MutationObserver(soon).observe(document.documentElement, { childList: true, subtree: true });
  soon();
  root.KSyl = Object.assign(API, { paint: soon, state: () => state });
})(typeof window !== 'undefined' ? window : globalThis);
