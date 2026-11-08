/* chinese/writing/writing.js — 國語〈作文〉頁面（chinese/writing/writing.html）。規則 writing-core.js（window.ZhWriting），題目元件 ../../quizkit.js，樣式 ../reading.css＋writing.css。
   畫面（網址參數）：
   - 題庫（無參數）：50 題依文體分組（可收合），做完 ①～⑤ 打 ✓；製作中的題目看得到題名、點不開。
   - ?t=t01 一題：①審題 → ②發想 → ③選材 → ④架構 → ⑤心智圖（可列印，另附「段落提示＋自我檢查清單」一頁）。
   - ?lessons=1 課程清單（4 階段 22 課）；?l=L01 一課：重點卡 → 好壞對照 → 小練習（自動判分，答對 ≥ 70% 算完成）。
   整篇作文寫在紙上、大人批改：不接任何 AI、不做線上評分、不連外。
   本機紀錄 localStorage kids_writing＝{t:{題id: normState 格式}, l:{課id:{best, n, done}}}；不同步（不在 sync.js 的 WATCH）、不報學習幣、不寫錯題庫。 */
(function () {
  'use strict';
  var W = window.ZhWriting, QK = window.QuizKit, CAT = window.WR_CAT || { topics: [], lessons: [] }, D = window.WR_DATA || { T: {}, L: {} };
  var K = 'kids_writing', box = document.getElementById('wr');
  var P = new URLSearchParams(location.search), TID = P.get('t'), LID = P.get('l'), LES = P.get('lessons') === '1';
  var IN_FRAME = (function () { try { return window.top !== window; } catch (e) { return true; } })();
  if (IN_FRAME) document.documentElement.classList.add('in-frame');
  QK.css();
  var esc = QK.esc, PASS = 70, NUM = ['①', '②', '③', '④', '⑤'], STEP = ['審題', '發想', '選材', '架構', '心智圖'];
  var COLS = ['#f0b429', '#5bb8f0', '#f08a8a', '#8fd05a'];

  // ---------- 紀錄 ----------
  function store() { try { var v = JSON.parse(localStorage.getItem(K)); if (v && typeof v === 'object' && !Array.isArray(v)) { v.t = v.t || {}; v.l = v.l || {}; return v; } } catch (e) { } return { t: {}, l: {} }; }
  function save(s) { try { localStorage.setItem(K, JSON.stringify(s)); } catch (e) { /* 私密模式／空間不足 */ } }
  function tDone(id) { var s = store().t[id]; return !!(s && s.done); }
  function lRec(id) { return store().l[id] || {}; }
  var ready = function (x) { return !!(x && !x.wip); };
  var stars = function (d) { return '★★★'.slice(0, d) + '☆☆☆'.slice(0, 3 - d); };
  function top(title, back) {
    var b = back || (IN_FRAME ? '' : '<a class="btn" href="../../index.html#s/chinese">← 回國語</a>');
    return '<header class="zr-top">' + b + '<h1>' + title + '</h1></header>';
  }
  var BACK_T = '<a class="btn" href="writing.html">← 題目列表</a>', BACK_L = '<a class="btn" href="writing.html?lessons=1">← 課程列表</a>';

  // ---------- 題庫清單 ----------
  function listView() {
    document.title = '作文｜小朋友學習站';
    var S = store(), h = top('✏️ 作文') + '<p class="zr-intro">先想清楚再動筆：圈關鍵字、想點子、挑材料、分四段，最後畫成心智圖印出來，照著在稿紙上寫。</p>' +
      '<p class="wr-flow" aria-label="作文八步">題目 → ①審題 → ②發想 → ③選材 → ④架構 → ⑤心智圖 → ⑥紙上寫 → ⑦修辭 → ⑧自我檢查</p>' +
      '<p><a class="btn primary big" href="writing.html?lessons=1">📚 作文課程（' + CAT.lessons.length + ' 課）</a></p>';
    W.ORDER.forEach(function (g) {
      var rows = CAT.topics.filter(function (c) { return c.genre === g; }), done = rows.filter(function (c) { return tDone(c.id); }).length;
      h += '<details class="wr-grp" open><summary><b>' + esc(W.GENRES[g].n) + '</b><small>完成 ' + done + ' / ' + rows.length + ' 題</small></summary><div class="zr-grid wr-grid">' + rows.map(function (c) {
        var t = D.T[c.id], ok = ready(t), s = S.t[c.id], n = +c.id.slice(1);
        var st = !ok ? '✍️ 製作中' : s && s.done ? '✓ 已完成' : s && s.reach > 1 ? '🟡 做到 ' + NUM[s.reach - 1] + STEP[s.reach - 1] : '⚪ 還沒做';
        var inner = '<b>' + n + '．' + esc(c.title) + '</b><span class="zr-tags"><span class="zr-tag d" aria-label="難度 ' + c.d + '">難度 ' + stars(c.d) + '</span></span><span class="zr-st">' + st + '</span>';
        return ok ? '<a class="zr-card' + (s && s.done ? ' done' : s && s.reach > 1 ? ' tried' : '') + '" href="writing.html?t=' + c.id + '" data-id="' + c.id + '">' + inner + '</a>' : '<div class="zr-card locked" aria-disabled="true" data-id="' + c.id + '">' + inner + '</div>';
      }).join('') + '</div></details>';
    });
    box.innerHTML = '<div class="zr-wrap">' + h + '</div>';
  }

  // ---------- 一題：①～⑤ ----------
  var T = null, S = null, UI = { msg: '', why: false, q: null };
  function saveT() { var all = store(); all.t[T.id] = S; save(all); }
  function kept() { var offs = (T.off || []).map(function (o) { return o.t; }); return W.pool(T, S.ideas).filter(function (x) { return S.keep[x.t] === true && offs.indexOf(x.t) < 0; }); }
  function planItems() { return kept().map(function (x) { var p = S.para[x.t]; return { t: x.t, p: p != null ? p : x.c >= 0 && T.cards[x.c] ? T.cards[x.c].p : 1 }; }); }
  function topicView() {
    T = D.T[TID];
    if (!ready(T)) { box.innerHTML = '<div class="zr-wrap">' + top('✍️ 製作中', BACK_T) + '<p class="zr-lock">這個題目還在準備中，先挑別的題目吧！</p></div>'; return; }
    document.title = T.title + '｜作文｜小朋友學習站';
    S = W.normState(store().t[T.id]);
    paint();
  }
  function paint() {
    var g = W.GENRES[T.genre];
    var nav = '<nav class="wr-steps" aria-label="步驟">' + STEP.map(function (n, i) { var k = i + 1; return '<button type="button" class="wr-step' + (k === S.st ? ' on' : '') + (k < S.reach || S.done ? ' ok' : '') + '" data-z="go" data-v="' + k + '"' + (k > S.reach ? ' disabled' : '') + (k === S.st ? ' aria-current="step"' : '') + '>' + NUM[i] + ' ' + n + '</button>'; }).join('') + '</nav>';
    var body = [step1, step2, step3, step4, step5][S.st - 1]();
    var foot = S.st < 5 ? '<p class="wr-msg" id="wr-msg" aria-live="polite">' + esc(UI.msg) + '</p><div class="wr-nav wr-noprint">' + (S.st > 1 ? '<button type="button" class="btn" data-z="go" data-v="' + (S.st - 1) + '">◀ 上一步</button>' : '<span></span>') + '<button type="button" class="btn primary big" data-z="next" id="wr-next">下一步：' + NUM[S.st] + ' ' + STEP[S.st] + ' ▶</button></div>' : '';
    box.innerHTML = '<div class="zr-wrap wr-topic">' + top('✏️ ' + esc(T.title), BACK_T) + '<div class="zr-meta wr-noprint"><span class="zr-tag">' + esc(g.n) + '</span><span class="zr-tag d">難度 ' + stars(T.d) + '</span>' + (T.tip ? '<span class="wr-tip">💡 ' + esc(T.tip) + '</span>' : '') + '</div>' + nav + body + foot + '</div>';
  }
  function go(k) { if (k < 1 || k > S.reach) return; S.st = k; UI.msg = ''; UI.why = false; UI.q = null; saveT(); paint(); window.scrollTo(0, 0); }
  function msg(m) { UI.msg = m; var el = document.getElementById('wr-msg'); if (el) el.textContent = m; }

  // ① 審題
  function step1() {
    var on = {}; S.sel.forEach(function (i) { on[i] = 1; });
    var h = '<section class="card"><h2>① 審題：圈出關鍵字</h2><p>題目裡哪幾個詞最重要？點一下把它圈起來（再點一次取消）。</p><div class="wr-toks">' +
      T.seg.map(function (w, i) { return '<button type="button" class="wr-tok' + (on[i] ? ' on' : '') + '" data-z="tok" data-v="' + i + '" aria-pressed="' + (on[i] ? 'true' : 'false') + '">' + esc(w) + '</button>'; }).join('') + '</div>' +
      (S.k1 ? '<ul class="wr-keys">' + T.keys.map(function (k) { return '<li><b class="wr-circle">' + esc(k.w) + '</b>' + esc(k.why) + '</li>'; }).join('') + '</ul>' : '<p><button type="button" class="btn primary" data-z="chkKeys" id="wr-chk">✅ 圈好了，檢查</button></p>') + '</section>';
    if (!S.k1) return h;
    if (!UI.q) UI.q = [W.genreQ(T), T.scope].map(function (q) { return QK.prep(q); });
    return h + '<section class="card"><h2>文體和範圍</h2>' + UI.q.map(qCard).join('') + '</section>';
  }
  function qCard(it, i) {
    var q = it.q, fb = it.done ? '<div class="fb ' + (it.right ? 'ok' : 'no') + '"><div class="fbh">' + (it.right ? '答對了！🎉' : '再看一次 👀') + '</div><div>' + esc(q.why) + '</div></div>' : '';
    return '<div class="zr-q' + (it.done ? (it.right ? ' ok' : ' no') : '') + '" id="zq' + i + '" data-i="' + i + '"><div class="zr-qh"><span>第 ' + (i + 1) + ' 題</span><span class="qtype" style="margin:0">' + QK.TYPES[q.type] + '</span></div><p class="zr-qt">' + esc(q.q) + '</p>' + QK.body(it) + fb + '</div>';
  }
  function ok1() { return S.reach > 1 || (S.k1 && UI.q && UI.q.every(function (x) { return x.done; })) ? '' : !S.k1 ? '先把關鍵字圈好，按「檢查」。' : '把兩題文體和範圍做完。'; }

  // ② 發想
  function step2() {
    var mine = {}; S.ideas.forEach(function (x) { mine[x.t] = 1; });
    return '<section class="card"><h2>② 發想：想到什麼就點下去</h2><p>每張問題卡都想一想，點下你想寫的小卡；也可以自己打幾個字新增。至少要 ' + W.IDEA_MIN + ' 張。</p><p class="wr-count" id="wr-count">我的想法：<b>' + S.ideas.length + '</b> 張</p></section>' +
      T.cards.map(function (c, ci) {
        var own = S.ideas.filter(function (x) { return x.c === ci && c.eg.indexOf(x.t) < 0; });
        return '<section class="card wr-qc"><span class="wr-kind">' + esc(W.KINDS[c.k]) + '</span><h3>' + esc(c.q) + '</h3><div class="wr-chips">' +
          c.eg.map(function (e, ei) { return '<button type="button" class="wr-chip' + (mine[e] ? ' on' : '') + '" data-z="idea" data-v="' + ci + ':' + ei + '" aria-pressed="' + (mine[e] ? 'true' : 'false') + '">' + esc(e) + '</button>'; }).join('') +
          own.map(function (x) { return '<button type="button" class="wr-chip on own" data-z="rmOwn" data-v="' + esc(x.t) + '" aria-label="拿掉 ' + esc(x.t) + '">' + esc(x.t) + ' ✕</button>'; }).join('') +
          '</div><div class="wr-add"><input type="text" maxlength="' + W.IDEA_MAX + '" data-ci="' + ci + '" aria-label="自己寫一張小卡" placeholder="自己寫（' + W.IDEA_MAX + ' 字內）" enterkeyhint="done"><button type="button" class="btn" data-z="add" data-v="' + ci + '">＋ 新增</button></div></section>';
      }).join('');
  }
  function toggleIdea(t, ci) {
    var i = S.ideas.findIndex(function (x) { return x.t === t; });
    if (i >= 0) { S.ideas.splice(i, 1); delete S.keep[t]; delete S.para[t]; }
    else if (S.ideas.length >= W.IDEAS_MAX) { msg('小卡最多 ' + W.IDEAS_MAX + ' 張，先拿掉幾張吧。'); return; }
    else S.ideas.push({ t: t, c: ci });
    saveT(); UI.msg = ''; paint();
  }
  function addOwn(ci) {
    var inp = document.querySelector('.wr-add input[data-ci="' + ci + '"]'), t = W.cut(inp ? inp.value : '', W.IDEA_MAX).trim();
    if (!t) { msg('先在格子裡打幾個字。'); return; }
    if (S.ideas.some(function (x) { return x.t === t; }) || (T.off || []).some(function (o) { return o.t === t; })) { msg('已經有這張小卡了。'); return; }
    toggleIdea(t, ci);
  }
  function ok2() { return S.ideas.length >= W.IDEA_MIN ? '' : '再多想幾張：至少要 ' + W.IDEA_MIN + ' 張小卡（現在 ' + S.ideas.length + ' 張）。'; }

  // ③ 選材
  function step3() {
    var Pl = W.pool(T, S.ideas), offWhy = {}; (T.off || []).forEach(function (o) { offWhy[o.t] = o.why; });
    return '<section class="card"><h2>③ 選材：要寫和不寫</h2><p class="wr-remind">⚠️ ' + esc(W.GENRES[T.genre].pick) + '</p><p>我們偷偷混了幾張跟題目無關的小卡進來，找找看！每一張都決定「要寫」或「不寫」。</p></section><section class="card wr-picks">' +
      Pl.map(function (x, i) {
        var k = S.keep[x.t], bad = UI.why && k === true && offWhy[x.t];
        return '<div class="wr-pick' + (k === true ? ' keep' : k === false ? ' drop' : '') + (bad ? ' bad' : '') + '"><span class="wr-pt">' + esc(x.t) + (bad ? '<small class="wr-why">✋ ' + esc(offWhy[x.t]) + '</small>' : '') + '</span><span class="wr-2">' +
          '<button type="button" class="btn' + (k === true ? ' primary' : '') + '" data-z="keep" data-v="' + i + '" aria-pressed="' + (k === true) + '">✅ 要寫</button>' +
          '<button type="button" class="btn' + (k === false ? ' wr-off' : '') + '" data-z="drop" data-v="' + i + '" aria-pressed="' + (k === false) + '">🗑️ 不寫</button></span></div>';
      }).join('') + '</section>';
  }
  function ok3() { var r = W.checkPick(T, S.ideas, S.keep); if (!r.ok && r.offKept.length) { UI.why = true; paint(); } return r.msg; }

  // ④ 架構
  function step4() {
    var g = W.GENRES[T.genre], items = planItems();
    return '<section class="card"><h2>④ 架構：分成四段</h2><p>把「要寫」的小卡放進四段裡，每段寫一句主旨（可以點範例再改成自己的話）。</p></section>' +
      g.paras.map(function (n, i) {
        var mine = items.map(function (x, k) { return [x, k]; }).filter(function (a) { return a[0].p === i; });
        return '<section class="card wr-para" style="border-left:10px solid ' + COLS[i] + '"><h3>' + NUM[i] + ' ' + esc(n) + '</h3><p class="muted">' + esc(T.paras[i].hint || g.ph[i]) + '</p>' +
          '<label class="wr-lab" for="wr-main' + i + '">這段的主旨（一句話）</label><input type="text" class="wr-main" id="wr-main' + i + '" data-z="main" data-v="' + i + '" maxlength="' + W.MAIN_MAX + '" value="' + esc(S.main[i]) + '" placeholder="例如：' + esc(T.paras[i].eg[0]) + '">' +
          '<div class="wr-chips sm"><span class="muted">範例：</span>' + T.paras[i].eg.map(function (e, k) { return '<button type="button" class="wr-chip" data-z="useMain" data-v="' + i + ':' + k + '">' + esc(e) + '</button>'; }).join('') + '</div>' +
          '<div class="wr-items">' + (mine.length ? mine.map(function (a) {
            return '<div class="wr-item"><span>' + esc(a[0].t) + '</span><select data-z="mv" data-v="' + esc(a[0].t) + '" aria-label="把「' + esc(a[0].t) + '」移到">' + g.paras.map(function (pn, pi) { return '<option value="' + pi + '"' + (pi === i ? ' selected' : '') + '>' + NUM[pi] + ' ' + esc(pn) + '</option>'; }).join('') + '</select></div>';
          }).join('') : '<p class="muted">（還沒有小卡：用其他段小卡旁邊的選單移過來）</p>') + '</div></section>';
      }).join('');
  }
  function ok4() { return W.checkPlan(T, planItems(), S.main).msg; }

  // ⑤ 心智圖＋列印
  function step5() {
    var g = W.GENRES[T.genre], items = planItems();
    if (!S.done) { S.done = Date.now(); saveT(); }
    return '<section class="card wr-noprint"><h2>⑤ 心智圖完成了！🎉</h2><p>印出來，照著它在稿紙上寫。中心是題目，四個主枝是四段，細枝是每段要寫的細節。</p>' +
      '<label class="wr-ck"><input type="checkbox" id="wr-withlist" checked> 一起印「段落提示＋自我檢查清單」</label><p><button type="button" class="btn primary big" data-z="print" id="wr-print">🖨️ 列印</button></p></section>' +
      '<section class="wr-sheet wr-map" id="wr-map">' + W.mapSVG(T, { items: items, main: S.main }) + '</section>' +
      '<section class="wr-sheet wr-list" id="wr-list"><h2>✏️〈' + esc(T.title) + '〉段落提示</h2>' + g.paras.map(function (n, i) {
        var mine = items.filter(function (x) { return x.p === i; });
        return '<div class="wr-lp"><h3>' + NUM[i] + ' ' + esc(n) + '：' + esc(S.main[i]) + '</h3><p class="muted">' + esc(T.paras[i].hint || g.ph[i]) + '</p>' + (mine.length ? '<p class="wr-lt">' + mine.map(function (x) { return '<span>・' + esc(x.t) + '</span>'; }).join('') + '</p>' : '') + '</div>';
      }).join('') + '<h2>⑧ 寫完自己檢查</h2><ul class="wr-check">' + W.checklist(T).map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></section>' +
      '<section class="card wr-noprint"><h2>接下來</h2><ol class="wr-next"><li>⑥ 拿出稿紙，一個主枝寫一段，每段開頭空兩格。</li><li>⑦ 想讓句子更生動？看「修辭」課（譬喻、擬人、誇飾…）。</li><li>⑧ 寫完用檢查清單一條一條打勾，再交給大人批改。</li></ol>' +
      '<p class="wr-nav"><button type="button" class="btn" data-z="go" data-v="4">◀ 回去改架構</button><a class="btn" href="writing.html?lessons=1">📚 作文課程</a><a class="btn primary" href="writing.html">✏️ 換一題</a></p></section>';
  }
  function next() {
    var m = [ok1, ok2, ok3, ok4][S.st - 1]();
    if (m) { msg(m); return; }
    S.st++; S.reach = Math.max(S.reach, S.st); UI.msg = ''; UI.why = false; UI.q = null; saveT(); paint(); window.scrollTo(0, 0);
  }

  // ---------- 課程 ----------
  function lessonsView() {
    document.title = '作文課程｜小朋友學習站';
    var h = top('📚 作文課程', '<a class="btn" href="writing.html">← 作文題目</a>') + '<p class="zr-intro">先學怎麼想、怎麼分段，再學讓句子更生動的修辭。每課有重點卡、好壞對照和小練習。</p>';
    [1, 2, 3, 4].forEach(function (s) {
      var rows = CAT.lessons.filter(function (c) { return c.stage === s; });
      h += '<section class="zr-lv"><h2>階段' + '一二三四'[s - 1] + '　' + esc(W.STAGES[s]) + '<small>' + rows.length + ' 課</small></h2><div class="zr-grid wr-grid">' + rows.map(function (c) {
        var L = D.L[c.id], ok = ready(L), r = lRec(c.id), n = +c.id.slice(1);
        var inner = '<b>第 ' + n + ' 課　' + esc(c.title) + '</b><small class="muted">' + esc(c.goal) + '</small><span class="zr-st">' + (!ok ? '✍️ 製作中' : r.done ? '✓ 已完成（最佳 ' + r.best + '%）' : r.n ? '🟡 做過 ' + r.n + ' 次，最佳 ' + (r.best || 0) + '%' : '⚪ 還沒做') + '</span>';
        return ok ? '<a class="zr-card' + (r.done ? ' done' : r.n ? ' tried' : '') + '" href="writing.html?l=' + c.id + '" data-id="' + c.id + '">' + inner + '</a>' : '<div class="zr-card locked" aria-disabled="true" data-id="' + c.id + '">' + inner + '</div>';
      }).join('') + '</div></section>';
    });
    box.innerHTML = '<div class="zr-wrap">' + h + '</div>';
  }
  var LR = null;   // {L, items, reported}
  function lessonView() {
    var L = D.L[LID], c = CAT.lessons.filter(function (x) { return x.id === LID; })[0];
    if (!ready(L) || !c) { box.innerHTML = '<div class="zr-wrap">' + top('✍️ 製作中', BACK_L) + '<p class="zr-lock">這一課還在準備中。</p></div>'; return; }
    document.title = L.title + '｜作文課程｜小朋友學習站';
    LR = { L: L, items: L.quiz.map(function (q) { return QK.prep(q); }), reported: false };
    box.innerHTML = '<div class="zr-wrap wr-lesson">' + top('📚 第 ' + (+L.id.slice(1)) + ' 課　' + esc(L.title), BACK_L) +
      '<div class="zr-meta"><span class="zr-tag">階段' + '一二三四'[L.stage - 1] + '　' + esc(W.STAGES[L.stage]) + '</span><span class="zr-st" id="wr-lst">' + lStatus(L.id) + '</span></div><p class="wr-goal">🎯 ' + esc(c.goal) + '</p>' +
      '<h2>💡 重點</h2><div class="wr-lcards">' + L.cards.map(function (k, i) { return '<section class="card wr-lc"><h3>' + (i + 1) + '. ' + esc(k.h) + '</h3>' + k.p.map(function (s) { return '<p>' + esc(s) + '</p>'; }).join('') + '</section>'; }).join('') + '</div>' +
      '<h2>👀 比一比</h2>' + L.compare.map(function (k) { return '<section class="card wr-cmp"><div class="wr-bad"><b>😐 普通的寫法</b><p>' + esc(k.bad) + '</p></div><div class="wr-good"><b>😀 比較好的寫法</b><p>' + esc(k.good) + '</p></div><p class="wr-cw">💡 ' + esc(k.why) + '</p></section>'; }).join('') +
      '<h2>✏️ 小練習（' + L.quiz.length + ' 題）</h2><section class="zr-qs" id="qs"></section><div id="wr-res"></div></div>';
    paintLQ();
  }
  function lStatus(id) { var r = lRec(id); return r.done ? '✓ 已完成（最佳 ' + r.best + '%）' : r.n ? '🟡 最佳 ' + (r.best || 0) + '%' : '⚪ 還沒做'; }
  function paintLQ() { document.getElementById('qs').innerHTML = LR.items.map(qCard).join(''); paintLRes(); }
  function paintLRes() {
    var el = document.getElementById('wr-res'), it = LR.items;
    if (!it.every(function (x) { return x.done; })) { el.innerHTML = ''; return; }
    var ok = it.filter(function (x) { return x.right; }).length, pct = Math.round(ok * 100 / it.length), pass = pct >= PASS;
    if (!LR.reported) {
      LR.reported = true; var all = store(), r = all.l[LR.L.id] || {};
      r.best = Math.max(r.best || 0, pct); r.n = (r.n || 0) + 1; if (pass && !r.done) r.done = Date.now();
      all.l[LR.L.id] = r; save(all); var st = document.getElementById('wr-lst'); if (st) st.textContent = lStatus(LR.L.id);
    }
    el.innerHTML = '<div class="card zr-res result" id="wr-result" data-pass="' + (pass ? 1 : 0) + '"><div class="party">' + (pass ? '🎉' : '💪') + '</div><div class="score">' + ok + ' / ' + it.length + '</div><p>' + (pass ? '<b>完成這一課了！</b>' : '答對 ' + PASS + '% 以上才算完成，再試一次！') + '</p>' +
      '<div class="btns"><button type="button" class="btn" data-z="lagain">🔁 再做一次</button><a class="btn" href="writing.html?lessons=1">📚 課程列表</a><a class="btn primary" href="writing.html">✏️ 去寫作文</a></div></div>';
  }

  // ---------- 事件 ----------
  document.addEventListener('click', function (e) {
    var t = e.target, k = t.closest && t.closest('[data-qk]'), z = t.closest && t.closest('[data-z]');
    if (k && !k.disabled) {
      var card = k.closest('.zr-q'), i = +card.getAttribute('data-i'), list = LR ? LR.items : UI.q, it = list && list[i];
      if (!it) return;
      var r = QK.act(it, k.getAttribute('data-qk'), k.getAttribute('data-v'));
      if (r.result != null || r.render) { card.outerHTML = qCard(it, i); if (LR) paintLRes(); else if (UI.q.every(function (x) { return x.done; })) msg(''); }
      return;
    }
    if (!z || z.disabled || z.tagName === 'SELECT' || z.tagName === 'INPUT') return;
    var a = z.getAttribute('data-z'), v = z.getAttribute('data-v');
    if (a === 'go') go(+v);
    else if (a === 'next') next();
    else if (a === 'tok') { var n = +v, at = S.sel.indexOf(n); if (at >= 0) S.sel.splice(at, 1); else S.sel.push(n); saveT(); UI.msg = ''; paint(); }
    else if (a === 'chkKeys') {
      var res = W.checkKeys(T, S.sel);
      if (res.ok) { S.k1 = 1; saveT(); UI.msg = ''; paint(); return; }
      msg(res.extra.length ? res.extra.map(function (w) { return (T.nk && T.nk[w]) || '「' + w + '」不是這題的重點'; }).join('；') + '。' : '還有 ' + res.miss.length + ' 個關鍵字沒圈到。提示：' + res.miss[0].why + '。');
    }
    else if (a === 'idea') { var p = v.split(':'), c = T.cards[+p[0]]; toggleIdea(c.eg[+p[1]], +p[0]); }
    else if (a === 'rmOwn') toggleIdea(v, -1);
    else if (a === 'add') addOwn(+v);
    else if (a === 'keep' || a === 'drop') { var x = W.pool(T, S.ideas)[+v]; if (x) { S.keep[x.t] = a === 'keep'; saveT(); UI.msg = ''; paint(); } }
    else if (a === 'useMain') { var q = v.split(':'); S.main[+q[0]] = T.paras[+q[0]].eg[+q[1]]; saveT(); var inp = document.getElementById('wr-main' + q[0]); if (inp) { inp.value = S.main[+q[0]]; inp.focus(); } }
    else if (a === 'print') { var w = document.getElementById('wr-withlist'); document.body.classList.toggle('wr-maponly', !!(w && !w.checked)); window.print(); }
    else if (a === 'lagain') { LR = null; lessonView(); window.scrollTo(0, document.getElementById('qs').offsetTop - 80); }
  });
  document.addEventListener('input', function (e) { var t = e.target; if (t && t.getAttribute && t.getAttribute('data-z') === 'main' && S) { S.main[+t.getAttribute('data-v')] = W.cut(t.value, W.MAIN_MAX); saveT(); } });
  document.addEventListener('change', function (e) { var t = e.target; if (t && t.getAttribute && t.getAttribute('data-z') === 'mv' && S) { S.para[t.getAttribute('data-v')] = +t.value; saveT(); paint(); } });
  document.addEventListener('keydown', function (e) { var t = e.target; if (e.key === 'Enter' && t && t.matches && t.matches('.wr-add input')) { e.preventDefault(); addOwn(+t.getAttribute('data-ci')); } });

  window.WRPage = { state: function () { return S; }, topic: function () { return T; }, lesson: function () { return LR; }, ui: UI };
  if (TID) topicView(); else if (LID) lessonView(); else if (LES) lessonsView(); else listView();
})();
