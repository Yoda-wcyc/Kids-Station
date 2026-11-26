/* english-reading/reading.js — 英文閱讀測驗頁（english-reading/index.html）。規則在 reading-core.js（window.EnReading），選擇題元件 ../quizkit.js，朗讀 ../gept/gept-tts.js。
   三個畫面：
   - 首頁（index.html）：只有「下一篇」一張大卡（易 → 中 → 難自動排，沒有等級選單）、完成幾篇、錯題重練、讀過的文章。
   - 閱讀＋作答（?a=<篇id>）：文章釘在上面（iPad 直放最多占半個畫面，可收起），題目一題一題在下面；🔊 全文朗讀、點一句念一句。
     答完一題立刻對錯＋中文解說＋文章裡標出答案依據那一句。全部答完：答對 ≥ 60%＝完成這篇。按順序：還沒輪到的篇（ahead）、做完 2 次的篇（locked）不給做。
   - 錯題重練（?mistakes=1）：錯題庫裡的閱讀題（最多 30 題），每題可以展開原文；連續答對 3 次畢業。
   沿用的機制：
   - 學習幣：每題 KidsCoins.answer(ok,'english')；一篇做完一輪送 practice_round english:reading（GAS kids-2026-11-24-a）。
   - 每日統計：每題 KidsDaily.rec('english', ok, null, prev)（prev＝這題答對過幾次，本機 kids_en_reading.ok；≥ 2 不算）；
     第一次完成一篇 KidsDaily.finish('er', true) → dd 代碼 b＝每日清單「英文閱讀 1 篇」（不算英文 30 題）。
   - 錯題庫：KidsMistakes.record('gept', 'er:<篇id>:<題id>', ok, {u:'r', s:題目})（英檢那一本、u＝'r'，英檢頁看不到）。
   - 進度：本機 kids_en_reading；只有 p（照順序完成到第幾篇）跟著同步（syncmerge.js pg 'R'），✓1／✓2、🔒 只在這台。 */
(function () {
  'use strict';
  var ER = window.EnReading, QK = window.QuizKit, TTS = window.GeptTTS || null;
  var ARTS = window.DATA_ER || [], ORDER = ER.order(ARTS);
  var box = document.getElementById('er');
  var P = new URLSearchParams(location.search), AID = P.get('a') || '', MK = P.get('mistakes') === '1', PREVIEW = P.get('preview') === '1';
  QK.css();
  var esc = QK.esc, R = null;
  var $ = function (id) { return document.getElementById(id); };
  function prep(q) { return QK.prep(Object.assign({ type: 'mc' }, q)); }   // 資料不寫 type（全部是四選一）

  // ---------- 紀錄（本機）----------
  function ld0() { try { var v = JSON.parse(localStorage.getItem(ER.KEY)); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; } catch (e) { return {}; } }
  function sv(s) { try { localStorage.setItem(ER.KEY, JSON.stringify(s)); } catch (e) { /* 私密模式／空間不足 */ } }
  // 跨裝置進度只同步 p（照順序完成到第幾篇）：讀的時候補齊別台完成的前 p 篇、本機多了就把 p 往上推並通知同步
  function ld() { var v = ld0(), s = ER.syncIn(ARTS, v); if (!s) return v; sv(s); if (s.p > (+v.p || 0)) try { if (window.KESync && KESync.touch) KESync.touch(); } catch (e) { } return s; }

  // ---------- 全站機制（沒載入就跳過，絕不讓閱讀壞掉）----------
  function gate(retry) {
    var A = window.KidsAuth; if (!A) return true;
    try { if (!A.requireLogin('english')) return false; if (A.startActivity && !A.startActivity('english', retry)) return false; } catch (e) { }
    return true;
  }
  function loggedOK() { var A = window.KidsAuth; try { return !A || !A.configured() || A.isLoggedIn(); } catch (e) { return true; } }
  // 一題有結果：本機答對次數、學習幣、每日統計（學過 2 次的舊題回 false → 顯示小提示）
  function recAnswer(key, ok) {
    var s = ld(), prev = ER.bumpOk(s, key, ok); sv(s);
    try { if (window.KidsCoins) KidsCoins.answer(!!ok, 'english'); } catch (e) { }
    var c = null; try { c = window.KidsDaily ? KidsDaily.rec('english', !!ok, null, prev) : null; } catch (e) { }
    return c === false;
  }
  function mkRec(id, ok, p) { try { return window.KidsMistakes ? KidsMistakes.record(ER.MK_SUBJ, id, !!ok, p) : null; } catch (e) { return null; } }
  function mkList() { try { return window.KidsMistakes ? KidsMistakes.list(ER.MK_SUBJ, ER.MK_U) : []; } catch (e) { return []; } }
  // 每日清單「英文閱讀 1 篇」：第一次完成一篇 → dd 代碼 b（kids-daily.js FIN.er）
  function finishDaily(fresh) { try { if (window.KidsDaily && KidsDaily.finish) KidsDaily.finish('er', fresh); } catch (e) { } }

  // ---------- 小元件 ----------
  function lvTag(a) { return '<span class="er-lv l' + a.lv + '">' + ER.LV[a.lv].name + '</span>'; }
  function badge(s, id) { var n = ER.passes(s, id); return n >= ER.LOCK ? '<span class="er-b lk" title="做過 ' + n + ' 次，鎖住了：去挑戰下一篇">✓' + n + ' 🔒</span>' : n ? '<span class="er-b">✓' + n + '</span>' : ''; }
  function need(a) { return Math.ceil(a.qs.length * ER.PASS / 100); }
  function top(title) { return '<header class="er-top"><a class="btn" href="../index.html#en">← 回英文</a>' + (AID || MK ? '<a class="btn" href="index.html">📰 閱讀首頁</a>' : '') + '<h1>' + title + '</h1></header>'; }
  function wrap(h) { box.innerHTML = '<div class="er-wrap">' + h + '</div>'; }

  // ---------- 文章 ----------
  function glossHTML(text, gl) {
    var h = esc(text);
    Object.keys(gl || {}).forEach(function (k) { h = h.replace(new RegExp('(^|[^A-Za-z&#])(' + k + '(?:e?s)?)(?=[^A-Za-z]|$)', 'gi'), '$1<span class="er-gl" title="' + esc(gl[k]) + '">$2</span>'); });
    return h;
  }
  function bodyHTML(a) {
    var us = ER.units(a), out = '';
    a.body.forEach(function (b, bi) {
      var mine = []; us.forEach(function (u, i) { if (u.b === bi) mine.push([u, i]); });
      var sp = function (x) { return '<span class="er-s" data-u="' + x[1] + '">' + glossHTML(x[0].t, a.gloss) + '</span>'; };
      if (Array.isArray(b)) out += '<p>' + mine.map(sp).join(' ') + '</p>';
      else if (b.who) out += '<p class="er-who"><b>' + esc(b.who) + ':</b> ' + mine.map(sp).join(' ') + '</p>';
      else if (b.h) out += '<h3>' + mine.map(sp).join('') + '</h3>';
      else if (b.table) out += '<div class="er-tw"><table>' + mine.map(function (x) { var tg = x[0].k === 'head' ? 'th' : 'td'; return '<tr class="er-s" data-u="' + x[1] + '">' + x[0].cells.map(function (c) { return '<' + tg + '>' + glossHTML(String(c), a.gloss) + '</' + tg + '>'; }).join('') + '</tr>'; }).join('') + '</table></div>';
    });
    return out;
  }
  function glossBox(a) { var k = Object.keys(a.gloss || {}); return k.length ? '<p class="er-glbox">📌 生字：' + k.map(function (w) { return '<b>' + esc(w) + '</b> ' + esc(a.gloss[w]); }).join('　') + '</p>' : ''; }
  // sticky＝作答畫面上方那一塊；錯題重練的每一題用不釘住的
  function artPanel(a, sticky) {
    return '<section class="er-art g-' + a.genre + (sticky ? ' sticky' : '') + '"' + (sticky ? ' id="er-art"' : '') + ' data-a="' + a.id + '"><div class="er-arth"><b class="er-title">' + esc(a.title) + '</b><small>' + esc(a.zh) + '</small>' + lvTag(a) +
      (TTS ? '<button type="button" class="btn er-tts" data-er="tts">🔊 全文朗讀</button>' : '') + (sticky ? '<button type="button" class="btn er-fold" data-er="fold" aria-expanded="true">🔼 收起文章</button>' : '') + '</div>' +
      '<article>' + bodyHTML(a) + '</article>' + glossBox(a) + (TTS ? '<p class="er-hint">👆 點一句英文，就會念那一句</p>' : '') + '</section>';
  }

  // ---------- 朗讀（../gept/gept-tts.js，en-US；對話第一個人女聲、第二個人男聲）----------
  var saying = false;
  function spkOf(a, u) { if (!u.who) return 'N'; var ns = []; a.body.forEach(function (b) { if (b && b.who && ns.indexOf(b.who) < 0) ns.push(b.who); }); return ns.indexOf(u.who) % 2 ? 'M' : 'F'; }
  function clearCls(cls) { Array.prototype.forEach.call(document.querySelectorAll('.' + cls), function (el) { el.classList.remove(cls); }); }
  function sayStop() { saying = false; try { if (TTS) TTS.stop(); } catch (e) { } clearCls('er-saying'); Array.prototype.forEach.call(document.querySelectorAll('[data-er="tts"]'), function (b) { b.textContent = '🔊 全文朗讀'; }); }
  function sayUnits(panel, a, list, btn) {
    if (!TTS) return; sayStop(); saying = true; if (btn) btn.textContent = '⏹ 停止';
    var us = ER.units(a), k = 0;
    (function nx() {
      clearCls('er-saying');
      if (!saying || k >= list.length) { sayStop(); return; }
      var i = list[k++], el = panel.querySelector('[data-u="' + i + '"]');
      if (el) { el.classList.add('er-saying'); try { el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { } }
      TTS.speak(us[i].cells ? us[i].cells.join(', ') : us[i].t, spkOf(a, us[i])).then(function () { if (saying) nx(); });   // 第一句在點擊裡送出（iOS 要使用者手勢）
    })();
  }
  window.addEventListener('pagehide', sayStop);
  function artOf(el) { var p = el && el.closest('[data-a]'); return p ? ER.find(ARTS, p.getAttribute('data-a')) : null; }

  // ---------- 答案依據 ----------
  function evQuote(a, q) { var us = ER.units(a); return ER.evUnits(a, q).filter(function (i) { return i >= 0; }).map(function (i) { return '「' + esc(us[i].t) + '」'; }).join(' '); }
  function showEv(panel, a, q) {
    if (!panel) return;
    Array.prototype.forEach.call(panel.querySelectorAll('.er-ev'), function (el) { el.classList.remove('er-ev'); });
    var first = null;
    ER.evUnits(a, q).forEach(function (i) { var el = panel.querySelector('[data-u="' + i + '"]'); if (el) { el.classList.add('er-ev'); first = first || el; } });
    if (panel.classList.contains('fold')) toggleFold(panel, false);
    if (first) try { first.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { }
  }
  function toggleFold(panel, fold) {
    panel.classList.toggle('fold', fold); var b = panel.querySelector('[data-er="fold"]');
    if (b) { b.textContent = fold ? '🔽 打開文章' : '🔼 收起文章'; b.setAttribute('aria-expanded', fold ? 'false' : 'true'); }
  }

  // ---------- 題目卡 ----------
  function qCard(it, i, n) {
    var q = it.q, a = it.art || R.art, d = it.done;
    var fb = d ? '<div class="fb ' + (it.right ? 'ok' : 'no') + '"><div class="fbh">' + (it.right ? '答對了！🎉' : '再看一次 👀 正確答案：' + esc(q.opts[q.a])) + '</div><div>' + esc(q.why) + '</div>' +
      '<div class="er-evq">📍 答案在這句：' + evQuote(a, q) + '</div>' + (it.old && window.KidsDaily && KidsDaily.oldNote ? KidsDaily.oldNote('index.html', '這題你已經會了（學過 2 次），不算今天的題數', '去讀新的一篇 →') : '') + '</div>' : '';
    var ctx = R.mk ? '<details class="er-mkart"><summary>📖 看文章〈' + esc(a.title) + '〉</summary>' + artPanel(a, false) + '</details>' : '';
    var nx = d && !R.mk ? '<div class="er-row"><button type="button" class="btn primary big" id="er-nx" data-er="next">' + (i + 1 >= n ? '看結果 🏁' : '下一題 ▶') + '</button></div>' : '';
    return '<div class="er-q' + (d ? (it.right ? ' ok' : ' no') : '') + '" id="erq' + i + '" data-i="' + i + '">' + ctx + '<div class="er-qh"><span>第 ' + (i + 1) + ' / ' + n + ' 題</span><span class="er-k">' + ER.KINDS[q.k] + '</span>' +
      (TTS ? '<button type="button" class="er-sayq" data-er="sayq" aria-label="念題目">🔊</button>' : '') + '</div><p class="er-qt">' + esc(q.q) + '</p>' + QK.body(it) + fb + nx + '</div>';
  }
  function paintCard(i) {
    var el = $('erq' + i); if (!el) return;
    var open = el.querySelector('details[open]') ? 1 : 0;
    el.outerHTML = qCard(R.items[i], i, R.items.length);
    if (open) { var d = $('erq' + i).querySelector('details'); if (d) d.open = true; }
  }

  // ---------- 首頁 ----------
  function home() {
    document.title = '英文閱讀測驗｜小朋友學習站';
    var s = ld(), nx = ER.next(ARTS, s), done = ER.doneCount(s, ARTS), today = ER.todayCount(s, Date.now()), mk = mkList().length;
    var h = top('📰 英文閱讀測驗') + '<p class="er-intro">一次讀一篇短短的英文，答 3～4 題。從簡單的開始，讀完會自動換下一篇，越來越難一點點。</p>';
    if (today) h += '<p class="er-today" id="er-today">✅ 今天已經讀完 ' + today + ' 篇了！</p>';
    if (nx) h += '<a class="er-next" id="er-go" href="index.html?a=' + nx.id + '"><small>下一篇</small><b>' + esc(nx.title) + '</b><span class="er-zh">' + esc(nx.zh) + '</span><span class="er-meta">' + lvTag(nx) + ' ' + ER.wordCount(nx) + ' 個字・' + nx.qs.length + ' 題</span><span class="btn primary big">開始讀 ▶</span></a>';
    else h += '<div class="card center" id="er-all"><p>🎉 全部 ' + ARTS.length + ' 篇都讀完了！好厲害！</p></div>';
    h += '<div class="er-sum"><progress max="' + (ARTS.length || 1) + '" value="' + done + '"></progress><span id="er-cnt">已完成 ' + done + ' / ' + ARTS.length + ' 篇</span></div>';
    if (mk) h += '<p><a class="btn" id="er-mk" href="index.html?mistakes=1">🩹 錯題重練（' + mk + ' 題）</a></p>';
    var rd = ORDER.filter(function (a) { return ER.isDone(s, a.id); });
    if (rd.length) h += '<details class="er-done"><summary>📚 讀過的文章（' + rd.length + ' 篇）</summary><ul>' + rd.map(function (a) { return '<li><a href="index.html?a=' + a.id + '"' + (ER.locked(s, a.id) ? ' class="er-off"' : '') + '>' + esc(a.title) + '</a>' + badge(s, a.id) + '</li>'; }).join('') + '</ul></details>';
    wrap(h);
  }

  // ---------- 閱讀＋作答 ----------
  function artView(a) {
    if (!a) { wrap(top('找不到這篇文章') + '<p><a class="btn primary" href="index.html">📰 回閱讀首頁</a></p>'); return; }
    document.title = a.title + '｜英文閱讀測驗｜小朋友學習站';
    var s = ld(), st = PREVIEW ? 'ok' : ER.canOpen(ARTS, s, a.id), nx = ER.next(ARTS, s);
    var go = nx ? '<a class="btn primary big" id="er-gonext" href="index.html?a=' + nx.id + '">去讀〈' + esc(nx.title) + '〉▶</a>' : '<a class="btn primary" href="index.html">📰 回閱讀首頁</a>';
    if (st === 'locked') { wrap(top('📰 英文閱讀測驗') + '<div class="card center er-lock" id="er-locked"><p>🔒 這篇你已經練 ' + ER.passes(s, a.id) + ' 次了，去挑戰下一篇吧！</p>' + go + '</div>'); return; }
    if (st === 'ahead') { wrap(top('📰 英文閱讀測驗') + '<div class="card center er-lock" id="er-ahead"><p>照順序來：先讀這一篇，讀完就會輪到後面的喔！</p>' + go + '</div>'); return; }
    wrap(top('📰 英文閱讀測驗') + '<div class="er-read">' + artPanel(a, true) + '<section class="er-qs" id="er-qs" aria-label="題目"></section></div>');
    R = { art: a, items: a.qs.map(function (q) { return prep(q); }), i: 0, started: false, reported: false };
    paintQs();
  }
  function paintQs() {
    var Q = $('er-qs'), a = R.art; if (!Q) return;
    if (!R.started) { Q.innerHTML = '<div class="card center er-start"><p>讀完了嗎？這篇有 <b>' + a.qs.length + '</b> 題，答對 <b>' + need(a) + '</b> 題以上就完成這篇！</p><button type="button" class="btn primary big" id="er-start" data-er="start">✏️ 開始作答</button><p class="muted">作答時文章一直在上面，可以隨時回頭看。</p></div>'; return; }
    if (R.g) { paintResult(); return; }
    Q.innerHTML = qCard(R.items[R.i], R.i, R.items.length);
  }
  function startRound() {
    if (!gate(startRound)) return;
    R = { art: R.art, items: R.art.qs.map(function (q) { return prep(q); }), i: 0, started: true, reported: false };
    Array.prototype.forEach.call(document.querySelectorAll('.er-ev'), function (el) { el.classList.remove('er-ev'); });
    paintQs();
  }
  function finishRound() {
    if (R.reported) return; R.reported = true;
    var a = R.art, g = ER.grade(R.items), r = ER.finish(ld(), a, g, Date.now());
    sv(r.st); ld(); R.g = g; R.fresh = r.fresh;   // ld()：p 往上推（第一次完成時）
    if (r.pass) finishDaily(r.fresh);   // 第一次完成才算今天的「英文閱讀 1 篇」；做過、答對過的篇 fresh＝false 不記
    // 學習幣一輪：GAS 白名單 english:reading（kids-2026-11-24-a）；家長部署 GAS 前後端回 bad_event，kids-coins 移出佇列、頁面照常
    try { if (window.KidsCoins && KidsCoins.report) KidsCoins.report({ type: 'practice_round', item: 'english:reading', correct: g.ok, total: g.n }); } catch (e) { }
    paintResult();
  }
  function paintResult() {
    var Q = $('er-qs'), g = R.g, a = R.art, nx = ER.next(ARTS, ld());
    Q.innerHTML = '<div class="card center result er-res" id="er-result" data-pass="' + (g.pass ? 1 : 0) + '"><div class="party">' + (g.pass ? '🎉' : '💪') + '</div><div class="score">' + g.ok + ' / ' + g.n + '</div>' +
      (g.pass ? '<p><b>完成這篇了！</b>' + (R.fresh ? '' : '（這篇之前就完成過，不重複計算）') + '</p>' : '<p>差一點點！答對 ' + need(a) + ' 題以上才算完成。看看文章裡綠色標起來的句子，再試一次！</p>') +
      '<div class="btns">' + (g.pass ? (nx ? '<a class="btn primary big" id="er-next" href="index.html?a=' + nx.id + '">下一篇 ▶</a>' : '<p>🎉 全部讀完了！</p>') : '<button type="button" class="btn primary big" id="er-again" data-er="again">🔁 再做一次</button>') +
      '<a class="btn" href="index.html">📰 閱讀首頁</a></div></div>';
    try { Q.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) { }
  }

  // ---------- 錯題重練 ----------
  function mkView() {
    document.title = '英文閱讀錯題｜小朋友學習站';
    if (window.KidsAuth && !loggedOK()) { wrap(top('🩹 閱讀錯題重練') + '<div class="card center"><p>要先登入，才可以練錯題喔！</p><button type="button" class="btn primary" data-er="mkLogin">🔑 登入後開始</button></div>'); return; }
    var items = [];
    mkList().forEach(function (e) {
      if (items.length >= 30) return;
      var p = ER.parseMk(e.id), a = p && ER.find(ARTS, p.a), q = a && ER.qOf(a, p.q); if (!q) return;
      var it = prep(q); it.art = a; it.mk = e.id; items.push(it);
    });
    R = { mk: true, items: items, ok: 0, grad: 0, reported: false };
    wrap(top('🩹 閱讀錯題重練') + '<section class="er-qs" id="er-qs">' + (items.length ? '<p class="muted">答錯的題目會來這裡；同一題連續答對 3 次就畢業。忘了文章，可以點「📖 看文章」。</p>' + items.map(function (it, i) { return qCard(it, i, items.length); }).join('') + '<div id="er-mkres"></div>' : '<p class="center muted" id="er-mkempty">目前沒有錯題 🎉</p>') + '</section>');
  }
  function mkResult() {
    if (R.reported || !R.items.every(function (x) { return x.done; })) return; R.reported = true;
    $('er-mkres').innerHTML = '<div class="card center result" id="er-mkresult"><div class="score">' + R.ok + ' / ' + R.items.length + '</div>' + (R.grad ? '<p>🎓 有 ' + R.grad + ' 題錯題畢業了！</p>' : '<p>同一題連續答對 3 次就會畢業喔！</p>') + '<div class="btns"><a class="btn primary" href="index.html">📰 閱讀首頁</a></div></div>';
  }

  // ---------- 作答 ----------
  function onAnswer(i, ok) {
    var it = R.items[i], a = it.art || R.art, q = it.q;
    it.old = recAnswer(ER.qKey(a, q), ok);
    if (R.mk) { if (ok) R.ok++; if (mkRec(it.mk, ok) === 'graduated') R.grad++; }
    else mkRec(ER.mkId(a, q), ok, ok ? null : ER.mkP(a, q));
    paintCard(i);
    var card = $('erq' + i);
    if (R.mk) { var d = card && card.querySelector('details'); if (d) { d.open = true; showEv(d.querySelector('.er-art'), a, q); } mkResult(); }
    else showEv($('er-art'), a, q);
  }

  // ---------- 事件 ----------
  document.addEventListener('click', function (e) {
    var t = e.target, k = t.closest && t.closest('[data-qk]'), z = t.closest && t.closest('[data-er]'), s = t.closest && t.closest('.er-s');
    if (k && !k.disabled && R && R.items) {
      var card = k.closest('.er-q'), i = +card.getAttribute('data-i'), it = R.items[i], r = QK.act(it, k.getAttribute('data-qk'), k.getAttribute('data-v'));
      if (r.result != null) onAnswer(i, r.result); else if (r.render) paintCard(i);
      return;
    }
    if (z && !z.disabled) {
      var act = z.getAttribute('data-er');
      if (act === 'start' || act === 'again') startRound();
      else if (act === 'next') { sayStop(); if (R.i + 1 >= R.items.length) finishRound(); else { R.i++; paintQs(); } }
      else if (act === 'fold') { var pn = z.closest('.er-art'); toggleFold(pn, !pn.classList.contains('fold')); }
      else if (act === 'tts') { var pa = z.closest('.er-art'), aa = artOf(pa); if (saying) sayStop(); else if (aa) sayUnits(pa, aa, ER.units(aa).map(function (u, j) { return j; }), z); }
      else if (act === 'sayq') { var c = z.closest('.er-q'), q = R.items[+c.getAttribute('data-i')].q; sayStop(); if (TTS) TTS.speak(q.q, 'N'); }
      else if (act === 'mkLogin') { if (gate(mkView)) mkView(); }
      return;
    }
    if (s && TTS) { var pnl = s.closest('.er-art'), ar = artOf(pnl); if (ar) sayUnits(pnl, ar, [+s.getAttribute('data-u')], null); }
  });
  // 別台同步來的錯題：首頁重畫（作答中不動）
  function onSynced() { if (!AID && !MK) home(); }
  window.addEventListener('kids-sync-updated', onSynced);
  window.addEventListener('storage', function (e) { if (e.key === ER.KEY || e.key === 'kids_mistakes' || e.key === null) onSynced(); });

  window.ERPage = { state: function () { return R; }, arts: ARTS, order: ORDER, home: home, ld: ld };
  if (MK) mkView(); else if (AID) artView(ER.find(ARTS, AID)); else home();
})();
