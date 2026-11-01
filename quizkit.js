/* quizkit.js — 自動判分題元件（選擇 mc／是非 tf／排順序 order／配對 match），全站共用（2026-11-01 由 mindmap/mindmap.js 的練習題抽出）。
   資料格式與 mindmap/data/FORMAT.md 第 5 節相同：
     mc    {q, opts:[…], a:正解索引, why}
     tf    {q, a:true|false, why}
     order {q, items:[照正確順序], why}
     match {q, pairs:[[左, 右], …照正確配對], why}
   畫面與 class 名稱跟心智圖練習題一樣（.opts/.opt、.placed/.pool/.chip、.mt-grid/.mt、.fb、.ord-list；.opt/.chip/.fb 在 style.css，.mt 系列這支自己補）。
   用法：st = QuizKit.prep(q, rand)；html = QuizKit.body(st)；點擊 [data-qk] → r = QuizKit.act(st, el.dataset.qk, el.dataset.v)：
     r.render＝重畫這題；r.result＝true/false 作答完成（st.done、st.right 已設好）；r.msg＝提示字。
   國語〈閱讀素養〉先用；心智圖之後可改成呼叫這支（目前 mindmap.js 仍用自己的同款程式，畫面一致）。
   validate(q)：資料檢查（測試用），回傳錯誤字串陣列。純函式部分 Node 可 require。 */
(function (root) {
  'use strict';
  var TYPES = { mc: '選擇題', tf: '是非題', order: '排順序', match: '配對題' };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a, rand) { a = a.slice(); rand = rand || Math.random; for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function idx(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }

  // 一題的作答狀態（選項／卡片順序打散；排順序一定不會一開始就是正解）
  function prep(q, rand) {
    var o = { q: q, done: false, right: false };
    if (q.type === 'mc') o.ord = shuffle(idx(q.opts.length), rand);
    if (q.type === 'order') { o.pool = shuffle(idx(q.items.length), rand); o.placed = []; if (o.pool.every(function (v, i) { return v === i; })) o.pool.reverse(); }
    if (q.type === 'match') { o.rord = shuffle(idx(q.pairs.length), rand); o.map = {}; o.sel = null; }
    return o;
  }
  var PAIRC = ['#ff8a3d', '#2b8fd6', '#2fb36d', '#8350d6', '#e05656', '#c08a00'];
  function btn(cls, act, v, dis, html) { return '<button type="button" class="' + cls + '" data-qk="' + act + '" data-v="' + v + '"' + (dis ? ' disabled' : '') + '>' + html + '</button>'; }
  // 作答區（不含題目文字）
  function body(st) {
    var q = st.q, d = st.done;
    if (q.type === 'mc') return '<div class="opts one">' + st.ord.map(function (oi) { var c = d ? (oi === q.a ? ' right' : oi === st.pick ? ' wrong' : '') : ''; return btn('opt' + c, 'mc', oi, d, (d && oi === q.a ? '✓ ' : d && oi === st.pick ? '✗ ' : '') + esc(q.opts[oi])); }).join('') + '</div>';
    if (q.type === 'tf') return '<div class="opts">' + [true, false].map(function (v) { var c = d ? (v === q.a ? ' right' : v === st.pick ? ' wrong' : '') : ''; return btn('opt' + c, 'tf', v, d, v ? '⭕ 對' : '❌ 錯'); }).join('') + '</div>';
    if (q.type === 'order') {
      return '<div class="placed">' + (st.placed.length ? st.placed.map(function (ii, k) { return btn('chip on', 'oBack', k, d, (k + 1) + '. ' + esc(q.items[ii])); }).join('') : '<span class="muted">依序點下面的卡片 👇（點上面的可以拿回來）</span>') + '</div>' +
        '<div class="pool">' + st.pool.map(function (ii) { return btn('chip' + (st.placed.indexOf(ii) >= 0 ? ' used' : ''), 'oPick', ii, d, esc(q.items[ii])); }).join('') + '</div>' +
        (d ? '' : '<div class="qk-row">' + btn('btn', 'oReset', 0, false, '↩ 重來') + btn('btn primary', 'oCheck', 0, st.placed.length < q.items.length, '✅ 確定') + '</div>');
    }
    if (q.type === 'match') {
      var rIdx = {}; Object.keys(st.map).forEach(function (l) { rIdx[st.map[l]] = +l; });
      var pn = function (l, on) { return '<span class="pn" style="background:' + (on ? PAIRC[l % PAIRC.length] : '#c9bfae') + '">' + (l + 1) + '</span>'; };
      return '<div class="mt-grid"><div class="mt-col">' + q.pairs.map(function (pr, l) {
        var m = st.map[l], c = d ? (m === l ? ' r-ok' : ' r-no') : (st.sel === l ? ' sel' : ''); return btn('mt' + c, 'mL', l, d, pn(l, m != null) + esc(pr[0]));
      }).join('') + '</div><div class="mt-col">' + st.rord.map(function (r) { var l = rIdx[r]; return btn('mt', 'mR', r, d, (l != null ? pn(l, true) : '') + esc(q.pairs[r][1])); }).join('') + '</div></div>' +
        (d ? '' : '<p class="muted">先點左邊，再點右邊配成一對；點左邊已配好的可以重配。</p><div class="qk-row">' + btn('btn primary', 'mCheck', 0, Object.keys(st.map).length < q.pairs.length, '✅ 確定') + '</div>');
    }
    return '';
  }
  // 答錯時補上正確的順序／配對
  function extra(st) {
    var q = st.q; if (!st.done || st.right) return '';
    if (q.type === 'order') return '<ol class="ord-list">' + q.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>';
    if (q.type === 'match') return '<ul class="ord-list">' + q.pairs.map(function (p) { return '<li>' + esc(p[0]) + ' ↔ ' + esc(p[1]) + '</li>'; }).join('') + '</ul>';
    return '';
  }
  function finish(st, ok) { st.done = true; st.right = !!ok; return { result: st.right }; }
  // 點擊：name＝data-qk、v＝data-v
  function act(st, name, v) {
    var q = st.q; if (st.done) return {};
    switch (name) {
      case 'mc': st.pick = +v; return finish(st, st.pick === q.a);
      case 'tf': st.pick = String(v) === 'true'; return finish(st, st.pick === q.a);
      case 'oPick': if (st.placed.indexOf(+v) < 0) st.placed.push(+v); return { render: true };
      case 'oBack': st.placed.splice(+v, 1); return { render: true };
      case 'oReset': st.placed = []; return { render: true };
      case 'oCheck': return st.placed.length < q.items.length ? {} : finish(st, st.placed.every(function (x, i) { return x === i; }));
      case 'mL': var l = +v; st.sel = st.sel === l ? null : l; if (st.map[l] != null && st.sel === l) delete st.map[l]; return { render: true };
      case 'mR': var r = +v; if (st.sel == null) return { msg: '先點左邊的一個' }; Object.keys(st.map).forEach(function (k) { if (st.map[k] === r) delete st.map[k]; }); st.map[st.sel] = r; st.sel = null; return { render: true };
      case 'mCheck': return Object.keys(st.map).length < q.pairs.length ? {} : finish(st, q.pairs.every(function (_, k) { return st.map[k] === k; }));
    }
    return {};
  }
  // 正確答案的文字（錯題庫清單用）
  function answerText(q) {
    if (q.type === 'mc') return q.opts[q.a];
    if (q.type === 'tf') return q.a ? '對' : '錯';
    if (q.type === 'order') return q.items.join(' → ');
    if (q.type === 'match') return q.pairs.map(function (p) { return p[0] + '↔' + p[1]; }).join('、');
    return '';
  }
  var len = function (s) { return String(s).replace(/\s/g, '').length; };
  // 資料檢查：單選只有一個正解、選項不重複、選項長度不洩答（正解不能比最長的干擾項長 30% 以上又多 3 字以上）
  function validate(q) {
    var e = [], str = function (x) { return typeof x === 'string' && x.trim().length > 0; };
    if (!TYPES[q.type]) return ['type 不是 mc/tf/order/match：' + q.type];
    if (!str(q.q)) e.push('沒有題目 q');
    if (!str(q.why)) e.push('沒有解析 why');
    if (q.type === 'mc') {
      if (!Array.isArray(q.opts) || q.opts.length < 3 || q.opts.length > 4 || !q.opts.every(str)) e.push('opts 要 3～4 個字串');
      else {
        if (new Set(q.opts.map(function (o) { return o.trim(); })).size !== q.opts.length) e.push('選項重複');
        if (!(Number.isInteger(q.a) && q.a >= 0 && q.a < q.opts.length)) e.push('a 要是一個正解索引（單選只有一個正解）');
        else {
          var others = q.opts.filter(function (_, i) { return i !== q.a; }).map(len), L = len(q.opts[q.a]), mx = Math.max.apply(null, others);
          if (L > mx * 1.3 && L - mx >= 3) e.push('正解比其他選項長很多（' + L + ' 字 vs ' + mx + ' 字），會洩答');
        }
        if (q.opts.some(function (o) { return /都對|都不對|以上皆|以上都/.test(o); })) e.push('不要用「以上皆是／皆非」類選項');
      }
    }
    if (q.type === 'tf' && typeof q.a !== 'boolean') e.push('是非題 a 要是 true/false');
    if (q.type === 'order') { if (!Array.isArray(q.items) || q.items.length < 3 || q.items.length > 6 || !q.items.every(str)) e.push('items 要 3～6 個'); else if (new Set(q.items).size !== q.items.length) e.push('items 重複'); }
    if (q.type === 'match') {
      if (!Array.isArray(q.pairs) || q.pairs.length < 3 || q.pairs.length > 5 || !q.pairs.every(function (p) { return Array.isArray(p) && p.length === 2 && str(p[0]) && str(p[1]); })) e.push('pairs 要 3～5 組 [左, 右]');
      else if (new Set(q.pairs.map(function (p) { return p[0]; })).size !== q.pairs.length || new Set(q.pairs.map(function (p) { return p[1]; })).size !== q.pairs.length) e.push('配對的左邊或右邊重複（會有兩個正解）');
    }
    return e;
  }
  // .mt 系列樣式（跟 mindmap.css 同一套；.opt/.chip/.fb 已在 style.css）
  var cssDone = false;
  function css() {
    if (cssDone || typeof document === 'undefined') return; cssDone = true;
    var s = document.createElement('style');
    s.textContent = '.mt-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;align-items:start}.mt-col{display:flex;flex-direction:column;gap:10px}'
      + '.mt{min-height:56px;border:3px solid var(--line);border-radius:16px;background:#fff;font:inherit;font-size:1.02rem;font-weight:700;color:var(--ink);cursor:pointer;padding:8px 10px;touch-action:manipulation;text-align:left;box-shadow:0 3px 0 var(--line)}'
      + '.mt.sel{border-color:var(--pri);box-shadow:0 0 0 3px rgba(255,138,61,.35)}'
      + '.mt .pn{display:inline-flex;width:26px;height:26px;border-radius:50%;color:#fff;font-size:.85rem;align-items:center;justify-content:center;margin-right:6px;vertical-align:middle}'
      + '.mt.r-ok{background:var(--ok-bg);border-color:var(--ok)}.mt.r-no{background:var(--no-bg);border-color:var(--no)}'
      + '.ord-list{margin:8px 0 0;padding-left:26px}.ord-list li{margin:4px 0}.qk-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}';
    (document.head || document.documentElement).appendChild(s);
  }
  var QK = { TYPES: TYPES, prep: prep, body: body, extra: extra, act: act, answerText: answerText, validate: validate, css: css, esc: esc, shuffle: shuffle };
  if (typeof module !== 'undefined' && module.exports) module.exports = QK;
  root.QuizKit = QK;
})(typeof window !== 'undefined' ? window : globalThis);
