/* chinese/reading.js — 國語〈閱讀素養 100 篇〉頁面（chinese/reading.html）。規則在 reading-core.js（window.ZhReading），題目元件 ../quizkit.js。
   三個畫面：
   - 文章列表（reading.html）：L1～L4 分區；每篇標題、文體、領域、字數、完成狀態；前一級完成 min(5, 篇數) 篇才開下一級。免登入可看。
   - 閱讀＋作答（?a=<篇id>）：文章免登入可讀、可朗讀（speechSynthesis zh-TW）；按「開始作答」才要登入＋練習額度（KidsAuth.requireLogin、startActivity('chinese')）。
     自動判分題作答完立刻對錯＋解析；開放題寫好（≥5 字）後顯示參考答案＋評分要點（自己對照，不計分）。
     全部作答完：自動判分題答對率 ≥ 70% 而且開放題都寫了＝完成這篇。
   - 只練錯題（?mistakes=1；首頁 📕 國語錯題庫按「只練錯題」開這頁）：錯題庫裡的題混成一輪（最多 30 題），每題可以展開原文。
   沿用的機制：
   - 學習幣：每題自動判分題 KidsCoins.answer(ok,'chinese')；一篇做完 report practice_round 'chinese:reading'（correct／total＝自動判分題，開放題不算）；
     錯題一輪 'chinese:mistakes'。
   - 錯題庫：KidsMistakes.record('chinese', '<篇id>:<題id>', ok, p)（開放題不收）；p＝{a:篇id, q:題id, t:篇名, s:題目, ans:正解文字}。
   - 完成：KidsDone.record('zh', 篇id, %)（kids_done.zh＝第一次完成的時間，跟著同步；課程地圖 zh:L1～L4 讀它）。
   - 本機細節（不同步）：localStorage kids_zh_reading＝{篇id:{best:最佳 %, n:做了幾輪, at:最近一次, done:第一次完成的時間, open:{題id:開放題寫的內容}}}。 */
(function () {
  'use strict';
  var ZR = window.ZhReading, QK = window.QuizKit;
  var ARTS = (window.DATA_ZH || []).slice().sort(function (a, b) { return a.id < b.id ? -1 : 1; });
  var K = 'kids_zh_reading';
  var box = document.getElementById('zr');
  var qs = new URLSearchParams(location.search), AID = qs.get('a') || '', MK = qs.get('mistakes') === '1', PREVIEW = qs.get('preview') === '1';   // preview＝作者／校對預覽：不管鎖定直接開
  var IN_FRAME = (function () { try { return window.top !== window; } catch (e) { return true; } })();
  if (IN_FRAME) document.documentElement.classList.add('in-frame');
  QK.css();
  var esc = QK.esc, R = null;

  // ---------- 紀錄 ----------
  function ld(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function store() { var s = ld(K, {}); return s && typeof s === 'object' && !Array.isArray(s) ? s : {}; }
  function save(s) { try { localStorage.setItem(K, JSON.stringify(s)); } catch (e) { /* 私密模式／空間不足 */ } }
  function prog(id) { return store()[id] || {}; }
  function syncedDone() { var d = ld('kids_done', {}); return (d && d.zh) || {}; }
  function isDone(id) { return !!(prog(id).done || syncedDone()[id]); }
  function unlocked(lv) { return ZR.unlocked(lv, ARTS, isDone); }

  // ---------- 全站機制（沒載入就跳過，絕不讓閱讀壞掉）----------
  function gate(retry) {
    var A = window.KidsAuth; if (!A) return true;
    try { if (!A.requireLogin('做閱讀題')) return false; if (A.startActivity && !A.startActivity('chinese', retry)) return false; } catch (e) { }
    return true;
  }
  function loggedOK() { var A = window.KidsAuth; try { return !A || !A.configured() || A.isLoggedIn(); } catch (e) { return true; } }
  function coinAnswer(ok) { try { if (window.KidsCoins) KidsCoins.answer(!!ok, 'chinese'); } catch (e) { } }
  function coinRound(item, c, n) { try { if (window.KidsCoins && n > 0) KidsCoins.report({ type: 'practice_round', item: item, correct: c, total: n }); } catch (e) { } }
  function mkRec(id, ok, p) { try { return window.KidsMistakes ? KidsMistakes.record('chinese', id, ok, p) : null; } catch (e) { return null; } }
  function doneRec(id, pct) { try { if (window.KidsDone) KidsDone.record('zh', id, pct); } catch (e) { } }

  // ---------- 小元件 ----------
  var stars = function (d) { return '★★★'.slice(0, d) + '☆☆☆'.slice(0, 3 - d); };
  var lvName = function (lv) { return 'L' + lv + ' ' + ZR.LV[lv].name; };
  function tags(a) { return '<span class="zr-tag">' + esc(a.genre) + '</span>' + a.domain.map(function (d) { return '<span class="zr-tag d">' + esc(d) + '</span>'; }).join('') + '<span class="zr-tag d">' + ZR.wordCount(a) + ' 字</span>'; }
  function statusOf(a) {
    var p = prog(a.id);
    if (isDone(a.id)) return { c: 'done', t: '✅ 已完成' + (p.best != null ? '（最佳 ' + p.best + '%）' : '') };
    if (p.n) return { c: 'tried', t: '🟡 做過 ' + p.n + ' 次，最佳 ' + (p.best || 0) + '%' };
    return { c: '', t: '⚪ 還沒讀' };
  }
  function top(title, back) {
    var b = back || (IN_FRAME ? '' : '<a class="btn" href="../index.html#s/chinese">← 回國語</a>');
    return '<header class="zr-top">' + b + '<h1>' + title + '</h1></header>';
  }

  // ---------- 文章列表 ----------
  function listView() {
    document.title = '閱讀素養 100 篇｜小朋友學習站';
    var h = top('📚 閱讀素養 100 篇') + '<p class="zr-intro">從讀懂字面開始，一級一級往上：推論、長文和圖表、多篇比較與思考。每一級完成 ' + ZR.UNLOCK + ' 篇，就會打開下一級。</p>';
    [1, 2, 3, 4].forEach(function (lv) {
      var L = ZR.LV[lv], arts = ARTS.filter(function (a) { return a.lv === lv; }), open = unlocked(lv), done = ZR.doneIn(lv, ARTS, isDone);
      h += '<section class="zr-lv" id="lv' + lv + '" data-open="' + (open ? 1 : 0) + '"><h2>' + (open ? '' : '🔒 ') + lvName(lv) + '<small>' + L.min + '～' + L.max + ' 字・已完成 ' + done + ' / ' + arts.length + ' 篇</small></h2>';
      if (!open) { var n = ZR.need(lv, ARTS) - ZR.doneIn(lv - 1, ARTS, isDone); h += '<p class="zr-lock">再完成 ' + n + ' 篇 L' + (lv - 1) + '，這一級就會打開喔！</p>'; }
      if (!arts.length) h += '<p class="zr-empty">✍️ 文章準備中</p>';
      else h += '<div class="zr-grid">' + arts.map(function (a) {
        var s = statusOf(a), inner = '<b>' + esc(a.title) + '</b><span class="zr-tags">' + tags(a) + '</span><span class="zr-st">' + (open ? s.t : '🔒 還沒打開') + '</span>';
        return open ? '<a class="zr-card ' + s.c + '" href="reading.html?a=' + a.id + '" data-id="' + a.id + '">' + inner + '</a>'
          : '<div class="zr-card locked" aria-disabled="true" data-id="' + a.id + '">' + inner + '</div>';
      }).join('') + '</div>';
      h += '</section>';
    });
    box.innerHTML = '<div class="zr-wrap">' + h + '<p class="center"><a class="btn" href="../map.html" target="_top">🗺️ 課程地圖</a></p></div>';
  }

  // ---------- 文章內容 ----------
  var blockHTML = ZR.blockHTML;   // 區塊畫面在 reading-core.js（心智圖〈素養題組〉共用）
  function articleHTML(a) { return '<h2 data-say>' + esc(a.title) + '</h2>' + a.body.map(blockHTML).join(''); }

  // ---------- 朗讀（瀏覽器內建語音 zh-TW；一段一段念、念到哪一段就標亮）----------
  var synth = window.speechSynthesis || null, saying = false;
  function zhVoice() {
    try { var v = synth.getVoices(); return v.filter(function (x) { return /^zh[-_]TW/i.test(x.lang); })[0] || v.filter(function (x) { return /^zh[-_](HK|Hant)/i.test(x.lang); })[0] || v.filter(function (x) { return /^zh/i.test(x.lang); })[0] || null; } catch (e) { return null; }
  }
  function sayStop() { saying = false; try { if (synth) synth.cancel(); } catch (e) { } Array.prototype.forEach.call(document.querySelectorAll('.zr-saying'), function (el) { el.classList.remove('zr-saying'); }); var b = document.getElementById('zr-tts'); if (b) b.textContent = '🔊 朗讀'; }
  function sayAll() {
    if (!synth) return;
    if (saying) { sayStop(); return; }
    var els = Array.prototype.slice.call(document.querySelectorAll('#art [data-say]')), i = 0, v = zhVoice();
    saying = true; document.getElementById('zr-tts').textContent = '⏹ 停止朗讀';
    (function next() {
      Array.prototype.forEach.call(document.querySelectorAll('.zr-saying'), function (el) { el.classList.remove('zr-saying'); });
      if (!saying || i >= els.length) { sayStop(); return; }
      var el = els[i++], u = new SpeechSynthesisUtterance(el.getAttribute('data-say') || el.textContent);
      el.classList.add('zr-saying'); try { el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { }
      u.lang = 'zh-TW'; if (v) u.voice = v; u.rate = 0.9;
      u.onend = u.onerror = function () { if (saying) next(); };
      synth.speak(u);
    })();
  }
  window.addEventListener('pagehide', sayStop);

  // ---------- 題目卡 ----------
  function newItem(q, mk) { var it = ZR.isOpen(q) ? { q: q, done: false, right: false, text: '' } : QK.prep(q); if (mk) it.mk = mk; return it; }
  function openHTML(it) {
    var q = it.q;
    if (!it.done) return '<div class="zr-open"><textarea data-z="draft" aria-label="我的回答" placeholder="把你的想法寫下來（至少 ' + ZR.OPEN_MIN + ' 個字）…">' + esc(it.text) + '</textarea><div class="row"><button type="button" class="btn primary" data-z="open">✅ 寫好了，看參考答案</button></div></div>';
    return '<div class="zr-open"><p><b>我的回答：</b>' + esc(it.text) + '</p></div><div class="zr-ref"><b>💡 參考答案</b><p>' + esc(q.ref) + '</p><b>✅ 評分要點：對照看看，你寫到了哪幾點？</b><ul>' +
      q.rubric.map(function (r) { return '<li><label><input type="checkbox"><span>' + esc(r) + '</span></label></li>'; }).join('') + '</ul><small class="muted">「想一想」不計分，寫完就算完成這一題；可以照要點再改得更好。</small></div>';
  }
  function cardHTML(it, i) {
    var q = it.q, open = ZR.isOpen(q), cls = it.done ? (open || it.right ? ' ok' : ' no') : '';
    var ctx = it.art ? '<details class="zr-mk-art"><summary>📖 看文章〈' + esc(it.art.title) + '〉</summary><div class="zr-art">' + articleHTML(it.art) + '</div></details>' : '';
    var fb = !open && it.done ? '<div class="fb ' + (it.right ? 'ok' : 'no') + '"><div class="fbh">' + (it.right ? '答對了！🎉' : '再看一次 👀') + '</div><div>' + esc(q.why) + QK.extra(it) + '</div></div>' : '';
    return '<div class="zr-q' + cls + '" id="zq' + i + '" data-i="' + i + '"><div class="zr-qh"><span>第 ' + (i + 1) + ' 題</span><span>' + ZR.PIRLS[q.p] + '</span><span aria-label="難度 ' + q.d + '">' + stars(q.d) + '</span><span class="qtype" style="margin:0">' + (open ? '✍️ 想一想' : QK.TYPES[q.type]) + '</span></div>' +
      ctx + '<p class="zr-qt">' + esc(q.q) + '</p>' + (open ? openHTML(it) : QK.body(it)) + fb + '<p class="zr-msg" data-msg aria-live="polite"></p></div>';
  }
  function paintCard(i) { var el = document.getElementById('zq' + i); if (el) el.outerHTML = cardHTML(R.items[i], i); }
  function setMsg(i, m) { var el = document.querySelector('#zq' + i + ' [data-msg]'); if (el) el.textContent = m || ''; }

  // ---------- 閱讀＋作答 ----------
  function artView(a) {
    if (!a) { box.innerHTML = '<div class="zr-wrap">' + top('找不到這篇文章') + '<p><a class="btn primary" href="reading.html">📚 回文章列表</a></p></div>'; return; }
    document.title = a.title + '｜閱讀素養｜小朋友學習站';
    var back = '<a class="btn" href="reading.html">← 文章列表</a>';
    if (!PREVIEW && !unlocked(a.lv)) { box.innerHTML = '<div class="zr-wrap">' + top('🔒 ' + lvName(a.lv) + ' 還沒打開', back) + '<p class="zr-lock">先完成 ' + ZR.need(a.lv, ARTS) + ' 篇 L' + (a.lv - 1) + '，這一級就會打開喔！</p></div>'; return; }
    var s = statusOf(a);
    box.innerHTML = '<div class="zr-wrap">' + top(lvName(a.lv), back + (synth ? '<button type="button" class="btn" id="zr-tts" data-z="tts">🔊 朗讀</button>' : '')) +
      '<div class="zr-meta">' + tags(a) + '<span class="zr-st" id="zr-st">' + s.t + '</span></div>' +
      '<div class="zr-read"><article class="zr-art" id="art">' + articleHTML(a) + '</article><section class="zr-qs" id="qs" aria-label="題目"></section></div>' +
      '<nav class="zr-jump" id="jump" hidden aria-label="跳到"><button type="button" class="btn" data-z="toArt">📖 看文章</button><button type="button" class="btn primary" data-z="toQs">✏️ 回到題目</button></nav></div>';
    R = { art: a, items: a.qs.map(function (q) { return newItem(q); }), started: false, reported: false, last: 0 };
    paintQs();
  }
  function startRound(again) {
    if (!gate(function () { startRound(again); })) return;
    var a = R.art, old = prog(a.id).open || {};
    R = { art: a, items: a.qs.map(function (q) { var it = newItem(q); if (ZR.isOpen(q) && old[q.id]) it.text = old[q.id]; return it; }), started: true, reported: false, last: 0 };
    paintQs(); document.getElementById('jump').hidden = false;
    if (again) document.getElementById('qs').scrollIntoView({ block: 'start' });
  }
  function paintQs() {
    var Q = document.getElementById('qs'); if (!Q) return;
    var a = R.art, n = a.qs.length, open = a.qs.filter(ZR.isOpen).length;
    if (!R.started) {
      Q.innerHTML = '<h2>✏️ 讀完了嗎？來作答</h2><div class="card center"><p>這篇有 <b>' + n + '</b> 題：自動判分 ' + (n - open) + ' 題＋想一想 ' + open + ' 題。<br>答對 ' + ZR.PASS + '% 以上、想一想都寫了，就完成這篇！</p>' +
        '<button type="button" class="btn primary big" data-z="start" id="zr-start">✏️ 開始作答</button><p class="muted">作答時可以隨時回頭看文章。</p></div>';
      return;
    }
    Q.innerHTML = '<h2>✏️ 作答（' + R.items.filter(function (x) { return x.done; }).length + ' / ' + n + '）</h2>' + R.items.map(cardHTML).join('') + '<div id="zr-res"></div>';
    paintResult();
  }
  function paintHead() { var h = document.querySelector('#qs h2'); if (h && R.started && !MK) h.textContent = '✏️ 作答（' + R.items.filter(function (x) { return x.done; }).length + ' / ' + R.items.length + '）'; }
  function nextArt(cur) {
    var c = ARTS.filter(function (a) { return a.id !== cur && unlocked(a.lv) && !isDone(a.id); });
    return c.filter(function (a) { return a.id > cur; })[0] || c[0] || null;
  }
  function paintResult() {
    var el = document.getElementById('zr-res'); if (!el) return;
    if (!R.items.every(function (x) { return x.done; })) { el.innerHTML = ''; return; }
    if (MK) {
      var n = R.items.length;
      el.innerHTML = '<div class="card zr-res result" id="mkResult"><div class="score">' + R.ok + ' / ' + n + '</div>' + (R.grad ? '<p>🎓 有 ' + R.grad + ' 題錯題畢業了！</p>' : '<p>同一題連續答對 3 次就會畢業喔！</p>') +
        '<div class="btns"><a class="btn primary" href="../index.html#s/chinese/mistakes" target="_top">📕 回錯題庫</a></div></div>';
      return;
    }
    var g = R.grade, nx = nextArt(R.art.id);
    el.innerHTML = '<div class="card zr-res result" id="zr-result" data-pass="' + (g.pass ? 1 : 0) + '"><div class="party">' + (g.pass ? '🎉' : '💪') + '</div><div class="score">' + g.ok + ' / ' + g.n + '</div>' +
      '<p>自動判分題答對 ' + g.pct + '%・想一想 ' + (g.openDone ? '都寫了 ✅' : '還沒寫完') + '</p>' +
      (g.pass ? '<p><b>完成這篇了！</b></p>' : '<p>差一點點：自動判分題答對 ' + ZR.PASS + '% 以上、想一想都寫了，才算完成這篇。回去再讀一次文章，再試試看！</p>') +
      '<div class="btns"><button type="button" class="btn" data-z="again">🔁 再做一次</button><a class="btn" href="reading.html">📚 文章列表</a>' + (g.pass && nx ? '<a class="btn primary" href="reading.html?a=' + nx.id + '">下一篇 ▶</a>' : '') + '</div></div>';
  }
  function finishIfDone() {
    paintHead();
    if (R.reported || !R.items.every(function (x) { return x.done; })) return;
    R.reported = true;
    if (MK) { coinRound('chinese:mistakes', R.ok, R.items.length); paintResult(); return; }
    var a = R.art, g = ZR.grade(R.items), s = store(), p = s[a.id] || {}, now = Date.now();
    R.grade = g;
    p.best = Math.max(p.best || 0, g.pct); p.n = (p.n || 0) + 1; p.at = now; if (g.pass && !p.done) p.done = now;
    p.open = {}; R.items.forEach(function (it) { if (ZR.isOpen(it.q)) p.open[it.q.id] = String(it.text).slice(0, 2000); });
    s[a.id] = p; save(s);
    coinRound('chinese:reading', g.ok, g.n);
    if (g.pass) doneRec(a.id, g.pct);
    var st = document.getElementById('zr-st'); if (st) st.textContent = statusOf(a).t;
    paintResult();
  }
  function onAnswer(i, ok) {
    var it = R.items[i]; R.last = i; coinAnswer(ok);
    if (MK) { if (ok) R.ok++; if (mkRec(it.mk, ok) === 'graduated') R.grad++; }
    else mkRec(ZR.mkId(R.art, it.q), ok, ok ? null : ZR.mkP(R.art, it.q));
    paintCard(i); finishIfDone();
  }

  // ---------- 只練錯題 ----------
  function mkView() {
    document.title = '國語錯題練習｜小朋友學習站';
    var back = '<a class="btn" href="../index.html#s/chinese/mistakes" target="_top">← 回錯題庫</a>';
    if (window.KidsAuth && !loggedOK()) {
      box.innerHTML = '<div class="zr-wrap">' + top('📕 國語錯題練習', back) + '<div class="card center"><p>要先登入，才可以練錯題喔！</p><button type="button" class="btn primary" data-z="mkLogin">🔑 登入後開始</button></div></div>';
      return;
    }
    var L = []; try { L = KidsMistakes.list('chinese'); } catch (e) { }
    var items = [];
    L.forEach(function (e) {
      if (items.length >= 30 || !e.p) return;
      var a = ZR.find(ARTS, e.p.a), q = ZR.qOf(a, e.p.q); if (!q || ZR.isOpen(q)) return;
      var it = newItem(q, e.id); it.art = a; items.push(it);
    });
    R = { mk: true, items: items, started: true, reported: false, ok: 0, grad: 0, last: 0 };
    box.innerHTML = '<div class="zr-wrap">' + top('📕 國語錯題練習', back) + '<section class="zr-qs" id="qs">' +
      (items.length ? '<p class="muted">答錯的題目會來這裡；同一題連續答對 3 次就畢業。忘了文章內容，可以點「📖 看文章」。</p>' + items.map(cardHTML).join('') + '<div id="zr-res"></div>' : '<p class="center muted" id="mk-empty">目前沒有錯題 🎉</p>') + '</section></div>';
  }

  // ---------- 事件 ----------
  document.addEventListener('click', function (e) {
    var t = e.target, k = t.closest && t.closest('[data-qk]'), z = t.closest && t.closest('[data-z]');
    if (k && !k.disabled && R) {
      var card = k.closest('.zr-q'), i = +card.getAttribute('data-i'), it = R.items[i], r = QK.act(it, k.getAttribute('data-qk'), k.getAttribute('data-v'));
      if (r.result != null) onAnswer(i, r.result); else if (r.render) paintCard(i); else if (r.msg) setMsg(i, r.msg);
      return;
    }
    if (!z || z.disabled) return;
    var a = z.getAttribute('data-z');
    if (a === 'tts') sayAll();
    else if (a === 'start') startRound(false);
    else if (a === 'again') startRound(true);
    else if (a === 'mkLogin') { if (gate(function () { mkView(); })) mkView(); }
    else if (a === 'toArt') { var art = document.getElementById('art'); if (art) art.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    else if (a === 'toQs') {
      var j = R && R.items ? R.items.findIndex(function (x) { return !x.done; }) : -1, el = document.getElementById('zq' + (j < 0 ? (R ? R.last : 0) : j)) || document.getElementById('qs');
      if (el) el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } else if (a === 'open') {
      var c = z.closest('.zr-q'), n = +c.getAttribute('data-i'), item = R.items[n], ta = c.querySelector('textarea');
      item.text = ta ? ta.value : item.text;
      if (ZR.countText(item.text) < ZR.OPEN_MIN) { setMsg(n, '再多寫一點：至少 ' + ZR.OPEN_MIN + ' 個字，說出你的想法和理由。'); return; }
      item.done = true; R.last = n; paintCard(n); finishIfDone();
    }
  });
  document.addEventListener('input', function (e) { var t = e.target; if (t && t.getAttribute && t.getAttribute('data-z') === 'draft' && R) { var c = t.closest('.zr-q'); R.items[+c.getAttribute('data-i')].text = t.value; } });
  // 別台同步來的完成紀錄：列表重畫（作答中不動）
  function onSynced() { if (!AID && !MK) listView(); }
  window.addEventListener('kids-sync-updated', onSynced);
  window.addEventListener('storage', function (e) { if (e.key === 'kids_done' || e.key === K || e.key === null) onSynced(); });

  window.ZRPage = { state: function () { return R; }, list: listView, arts: ARTS };
  if (MK) mkView(); else if (AID) artView(ZR.find(ARTS, AID)); else listView();
})();
