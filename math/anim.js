/* anim.js — 🎬 動畫教學（2026-11-06）：按「下一步」一步一步播的數學動畫（SVG＋JS，無語音、不自動播）。
   每段一支 math/anim/<段>.js，登記到 ANIM.segs[段]：
     {id, title, icon, H:SVG 高, v0:{變數初值}, steps:[{t:說明文字, v:{這一步要變到的值}, ms?:毫秒, lin?:[線性變化的變數]}], draw(v, h) → SVG 內容字串, prac:[練習題 2～3 題]}
   畫面＝某一步的變數值（前面每一步的 v 疊上去），切換步時數字變數用補間動畫過渡（移動、伸長、旋轉、淡入都是變數），字串直接換。
   練習題 {q, calc, ans, why, fields:[{lab?, suf?, t:'num'|'dec'}] 或 opts:[選項]}；calc 給 test/anim.test.js 用暴力法重算。文字裡 [[n/d]]＝上下排的分數。
   「看完了」＝練習答對，記在本機 kids_anim（不同步）：{seen:{段:時間}, rot:{段:輪到第幾題}}。 */
(function (G) {
  'use strict';
  const A = G.ANIM = G.ANIM || {};
  A.ORDER = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  A.segs = A.segs || {};

  // ================= SVG 小工具（各段 draw 用）=================
  const r1 = n => Math.round(n * 10) / 10;
  const vis = op => op == null || op > 0.01;
  const opa = op => op == null || op >= 0.99 ? '' : ` opacity="${r1(Math.max(0, op) * 100) / 100}"`;
  const h = {
    C: { ink: '#263445', mute: '#9aa5b1', pri: '#ff8a3d', priL: '#ffe3cc', ok: '#2fb36d', okL: '#d7f3e3', no: '#e5484d', noL: '#fde0e0', blue: '#3f74d6', blueL: '#dbe7fb', pur: '#8a5cd6', purL: '#ece3fa', paper: '#fff' },
    line: (x1, y1, x2, y2, o = {}) => vis(o.op) ? `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="${o.c || h.C.ink}" stroke-width="${o.w || 2}" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${opa(o.op)}/>` : '',
    rect: (x, y, w, ht, o = {}) => vis(o.op) && w > 0 && ht > 0 ? `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(ht)}" rx="${o.rx || 0}" fill="${o.fill || 'none'}" stroke="${o.c || 'none'}" stroke-width="${o.w || 2}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${opa(o.op)}/>` : '',
    circ: (cx, cy, r, o = {}) => vis(o.op) ? `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(r)}" fill="${o.fill || h.C.ink}" stroke="${o.c || 'none'}" stroke-width="${o.w || 2}"${opa(o.op)}/>` : '',
    path: (d, o = {}) => vis(o.op) ? `<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.c || 'none'}" stroke-width="${o.w || 2}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${opa(o.op)}/>` : '',
    poly: (pts, o = {}) => h.path('M' + pts.map(p => r1(p[0]) + ' ' + r1(p[1])).join('L') + 'Z', o),
    text: (x, y, s, o = {}) => vis(o.op) ? `<text x="${r1(x)}" y="${r1(y)}" font-size="${o.size || 18}" font-weight="${o.weight || 700}" fill="${o.fill || h.C.ink}" text-anchor="${o.anchor || 'middle'}"${opa(o.op)}>${esc(s)}</text>` : '',
    // 上下排的分數（SVG 裡）
    frac: (x, y, n, d, o = {}) => { const s = o.size || 18; return vis(o.op) ? `<g${opa(o.op)}>${h.text(x, y - s * 0.25, n, { size: s, fill: o.fill })}${h.line(x - s * 0.55, y, x + s * 0.55, y, { c: o.fill || h.C.ink, w: 2 })}${h.text(x, y + s * 0.95, d, { size: s, fill: o.fill })}</g>` : ''; },
    g: (op, inner, tf) => vis(op) && inner ? `<g${tf ? ` transform="${tf}"` : ''}${opa(op)}>${inner}</g>` : '',
    // 扇形角（圓心 cx,cy、從 a0 度轉 sw 度，SVG 座標：0°＝右、90°＝下）
    wedge: (cx, cy, rad, a0, sw, o = {}) => {
      if (!vis(o.op)) return '';
      const p = a => [cx + rad * Math.cos(a * Math.PI / 180), cy + rad * Math.sin(a * Math.PI / 180)], s = p(a0), e = p(a0 + sw);
      return h.path(`M${r1(cx)} ${r1(cy)}L${r1(s[0])} ${r1(s[1])}A${rad} ${rad} 0 ${sw > 180 ? 1 : 0} 1 ${r1(e[0])} ${r1(e[1])}Z`, o);
    },
    lerp: (a, b, t) => a + (b - a) * t,
    clamp01: t => Math.max(0, Math.min(1, t))
  };
  A.h = h;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]); }
  // [[n/d]] → 上下排的分數（同 paper.js 的 .frc）
  function fmt(s) { return esc(s).replace(/\[\[(\d+)\/(\d+)\]\]/g, '<span class="frc"><span>$1</span><span>$2</span></span>'); }
  function plain(s) { return String(s).replace(/\[\[(\d+)\/(\d+)\]\]/g, '$1/$2'); }
  A.fmt = fmt; A.plain = plain; A.esc = esc;

  // 第 i 步的畫面變數：v0 疊上第 0～i 步的 v（i＝-1 是開場前）
  function stateAt(S, i) { const v = Object.assign({}, S.v0); for (let k = 0; k <= i && k < S.steps.length; k++) Object.assign(v, S.steps[k].v); return v; }
  A.stateAt = stateAt;

  // 判分：fields 每格都要對（num 整數、dec 照字串，位數要寫到）；opts＝選一個
  function intOf(s) { s = String(s == null ? '' : s).trim(); return /^\d+$/.test(s) ? parseInt(s, 10) : null; }
  function check(P, val) {
    if (P.opts) return val == null || val === '' ? { soft: true, msg: '先選一個。' } : { ok: +val === P.ans };
    const vs = val || [];
    for (let i = 0; i < P.fields.length; i++) {
      const f = P.fields[i], s = String(vs[i] == null ? '' : vs[i]).trim();
      if (!s) return { soft: true, msg: '每一格都要填。' };
      if (f.t === 'dec') { if (s !== String(P.ans[i])) return { ok: false, near: /^\d+(\.\d+)?$/.test(s) && +s === +P.ans[i] }; }
      else if (intOf(s) !== P.ans[i]) return { ok: false };
    }
    return { ok: true };
  }
  A.check = check;

  // 本機紀錄（不同步）
  const KEY = 'kids_anim';
  function load() { try { const o = JSON.parse(localStorage.getItem(KEY)) || {}; return { seen: o.seen || {}, rot: o.rot || {} }; } catch (e) { return { seen: {}, rot: {} }; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* 私密模式 */ } }
  A.KEY = KEY; A.load = load;

  if (typeof module !== 'undefined' && module.exports) { module.exports = A; return; }

  // ================= 頁面（math/anim.html）=================
  A.page = function () {
    const $ = id => document.getElementById(id), id = (/[?&]id=([A-G])(?:&|$)/.exec(location.search) || [])[1], S = id && A.segs[id];
    const reduce = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
    if (!S) {   // 清單
      const seen = load().seen;
      $('lede').textContent = '按「下一步」一步一步看，最後有 1 題練習，答對就打 ✓。';
      $('list').hidden = false;
      $('list').innerHTML = A.ORDER.filter(k => A.segs[k]).map(k => { const s = A.segs[k]; return `<a class="card seg${seen[k] ? ' seen' : ''}" href="anim.html?id=${k}" data-seg="${k}"><span class="seg-i">${s.icon}</span><b>${k}　${esc(s.title)}</b><small>${s.wip ? '製作中' : seen[k] ? '✓ 看完了' : s.steps.length + ' 步＋1 題練習'}</small></a>`; }).join('');
      return;
    }
    document.title = S.title;
    $('title').textContent = `🎬 ${id}　${S.title}`;
    if (S.wip) { $('lede').innerHTML = '這一段還在製作中，先看別段吧！ <a class="btn" href="anim.html">🎬 動畫清單</a>'; return; }
    $('play').hidden = false;
    const svg = $('svg');
    svg.setAttribute('viewBox', `0 0 640 ${S.H || 300}`);
    svg.setAttribute('aria-label', S.title + ' 動畫');
    let i = 0, cur = stateAt(S, -1), raf = 0, pr = null;
    const draw = v => { svg.innerHTML = S.draw(v, h); };
    function animate(to, ms, lin) {
      cancelAnimationFrame(raf);
      const from = cur, dur = reduce() ? 0 : (ms || 900), t0 = performance.now();
      const frame = now => {
        const p = dur ? Math.min(1, (now - t0) / dur) : 1, e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2, v = {};
        Object.keys(to).forEach(k => { const a = from[k], b = to[k]; v[k] = typeof a === 'number' && typeof b === 'number' ? a + (b - a) * (lin && lin.indexOf(k) >= 0 ? p : e) : b; });
        cur = v; draw(v);
        if (p < 1) raf = requestAnimationFrame(frame);
      };
      if (dur) raf = requestAnimationFrame(frame); else frame(t0);
    }
    function show(n, back) {
      i = n; const st = S.steps[i];
      $('cap').innerHTML = fmt(st.t);
      $('stepno').textContent = `第 ${i + 1} / ${S.steps.length} 步`;
      $('prev').disabled = i === 0;
      $('next').textContent = i === S.steps.length - 1 ? '練習一題 ▶' : '下一步 ▶';
      $('next').hidden = false; $('prac').hidden = true;
      animate(stateAt(S, i), back ? 700 : st.ms, back ? null : st.lin);
    }
    $('prev').onclick = () => { if (!$('prac').hidden) { show(i); return; } if (i > 0) show(i - 1, true); };
    $('next').onclick = () => { if (i < S.steps.length - 1) show(i + 1); else practice(); };
    $('again').onclick = () => { if (!$('prac').hidden) $('prac').hidden = true; cur = stateAt(S, i - 1); show(i); };

    // 練習：2～3 題輪流
    function practice() {
      const rec = load(), n = rec.rot[id] || 0;
      pr = S.prac[n % S.prac.length]; rec.rot[id] = n + 1; save(rec);
      $('next').hidden = true; $('prac').hidden = false;
      $('stepno').textContent = '練習';
      const body = pr.opts ? `<div class="row">${pr.opts.map((o, j) => `<button type="button" class="btn opt" data-v="${j}" aria-pressed="false">${fmt(o)}</button>`).join('')}</div>`
        : pr.fields.map((f, j) => `<div class="row">${f.lab ? `<b>${esc(f.lab)}</b>` : ''}<input class="num-in${f.t === 'dec' ? ' wide' : ''}" data-f="${j}" type="text" inputmode="${f.t === 'dec' ? 'decimal' : 'numeric'}" autocomplete="off" maxlength="10" aria-label="${esc(f.lab || '答案')}">${f.suf ? `<span class="suf">${esc(f.suf)}</span>` : ''}</div>`).join('');
      $('prac').innerHTML = `<h2>✏️ 練習一題</h2><p class="q-text">${fmt(pr.q)}</p>${body}<p class="msg" id="pmsg" role="status" aria-live="polite"></p><div class="row"><button type="button" class="btn primary big" id="psub">確定</button></div><div id="pfb"></div>`;
      $('prac').querySelectorAll('.opt').forEach(b => { b.onclick = () => { $('prac').querySelectorAll('.opt').forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true'); }; });
      $('psub').onclick = submit;
      $('prac').scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth', block: 'start' });
    }
    function submit() {
      const val = pr.opts ? ($('prac').querySelector('.opt[aria-pressed="true"]') || { dataset: {} }).dataset.v : Array.prototype.map.call($('prac').querySelectorAll('[data-f]'), x => x.value);
      const r = check(pr, val), m = $('pmsg');
      if (r.soft) { m.textContent = r.msg; m.className = 'msg bad'; return; }
      m.textContent = ''; m.className = 'msg';
      if (r.ok) {
        const rec = load(); rec.seen[id] = Date.now(); save(rec);
        $('prac').querySelectorAll('input,.opt').forEach(x => { x.disabled = true; });
        $('psub').hidden = true;
        const nx = A.ORDER[A.ORDER.indexOf(id) + 1];
        $('pfb').innerHTML = `<div class="fb ok" id="pdone"><div class="fbh">看完了 ✓</div><p>${fmt(pr.why)}</p></div><div class="acts"><a class="btn" href="anim.html">🎬 動畫清單</a>${nx && A.segs[nx] ? `<a class="btn primary" href="anim.html?id=${nx}">下一段：${esc(A.segs[nx].title)} ▶</a>` : ''}</div>`;
      } else {
        $('pfb').innerHTML = `<div class="fb no" id="pwrong"><div class="fbh">再想想 👀</div>${r.near ? '<p>數值一樣，但要寫到題目要的位數。</p>' : ''}<p>${fmt(pr.why)}</p><p class="muted">改好答案再按一次「確定」。</p></div>`;
      }
    }
    show(0);
    A._test = { step: () => i, prac: () => pr, cur: () => cur };   // 測試用
  };
})(typeof window !== 'undefined' ? window : globalThis);
