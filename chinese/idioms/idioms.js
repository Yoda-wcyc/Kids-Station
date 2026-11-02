/* chinese/idioms/idioms.js — 國語〈成語故事 100〉頁面（chinese/idioms/idioms.html）。規則 idiom-core.js（window.ZhIdiom），沿用 ../reading-core.js（判分、解鎖、字數）與 ../../quizkit.js（題目元件）；樣式沿用 ../reading.css。
   畫面（網址參數）：
   - 列表（無參數）：L1～L4 成語（前一級完成 min(5, 已上架數) 個才開下一級）＋10 個單元（素養閱讀、單元測驗）＋總測驗。免登入可看。
   - ?i=cy001 一個成語：讀故事（🔊 朗讀）→ 閱讀題 → 閱讀題做完才出現「成語解說」和練習題。完成＝自動判分題答對 ≥ 70%＋開放題都寫（同國語閱讀）。
   - ?r=cyr01 成語素養閱讀：同國語閱讀頁（文章＋6 題）。
   - ?u=1～10 單元測驗（20 題，照 d 由易到難）；?u=all 總測驗（隨機 30 題，照 d 排）。答對 ≥ 70% 算通過。
   - &preview=1：作者／校對預覽，不管鎖定直接開。
   本機紀錄：localStorage kids_zh_idioms＝{id:{best, n, at, done, open:{題id:內容}}}（id＝cy001／cyr01／cyu01／cyall）。
   接線（2026-11-01 上線，WIRE=true）：錯題庫 'chinese'（分類「成語」，首頁 📕 國語錯題庫的「只練錯題」由 ../reading.js 一起出題）、學習幣 'chinese:idioms'／'chinese:idioms-test'、kids_done.cy；清單見 kids-member/docs/CHINESE_IDIOM_SPEC.md §8。 */
(function () {
  'use strict';
  var WIRE = true;   // false＝不寫錯題庫、不報學習幣、不寫 kids_done（作者預覽用）
  var CY = window.ZhIdiom, ZR = window.ZhReading, QK = window.QuizKit, CAT = window.DATA_CY_CATALOG || { idioms: [], readings: [] };
  var byId = function (a, b) { return a.id < b.id ? -1 : 1; };
  var IDS = (window.DATA_CY || []).slice().sort(byId), READS = (window.DATA_CY_READ || []).slice().sort(byId);
  var K = 'kids_zh_idioms', box = document.getElementById('cy');
  var P = new URLSearchParams(location.search), IID = P.get('i'), RID = P.get('r'), UID = P.get('u'), PREVIEW = P.get('preview') === '1';
  var IN_FRAME = (function () { try { return window.top !== window; } catch (e) { return true; } })();
  if (IN_FRAME) document.documentElement.classList.add('in-frame');
  QK.css();
  var esc = QK.esc, R = null;

  // ---------- 紀錄 ----------
  function ld(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function store() { var s = ld(K, {}); return s && typeof s === 'object' && !Array.isArray(s) ? s : {}; }
  function save(s) { try { localStorage.setItem(K, JSON.stringify(s)); } catch (e) { /* 私密模式／空間不足 */ } }
  function prog(id) { return store()[id] || {}; }
  function syncedDone() { var d = ld('kids_done', {}); return (d && d.cy) || {}; }
  function isDone(id) { return !!(prog(id).done || syncedDone()[id]); }

  // ---------- 全站機制（沿用國語閱讀的接法；沒載入就跳過）----------
  function gate(retry) {
    var A = window.KidsAuth; if (!A) return true;
    try { if (!A.requireLogin('做成語練習')) return false; if (A.startActivity && !A.startActivity('chinese', retry)) return false; } catch (e) { }
    return true;
  }
  function coinAnswer(ok) { if (!WIRE) return; try { if (window.KidsCoins) KidsCoins.answer(!!ok, 'chinese'); } catch (e) { } if (window.KidsDaily) KidsDaily.rec('chinese', !!ok); }
  function coinRound(item, c, n) { if (!WIRE) return; try { if (window.KidsCoins && n > 0) KidsCoins.report({ type: 'practice_round', item: item, correct: c, total: n }); } catch (e) { } }
  function mkRec(id, ok, p) { if (!WIRE) return null; try { return window.KidsMistakes ? KidsMistakes.record('chinese', id, ok, p) : null; } catch (e) { return null; } }
  function doneRec(id, pct) { if (!WIRE) return; try { if (window.KidsDone) KidsDone.record('cy', id, pct); } catch (e) { } }

  // ---------- 小元件 ----------
  var stars = function (d) { return '★★★'.slice(0, d) + '☆☆☆'.slice(0, 3 - d); };
  var lvName = function (lv) { return 'L' + lv + ' ' + CY.LV[lv].name; };
  var find = CY.find;
  function statusOf(id) {
    var p = prog(id);
    if (isDone(id)) return { c: 'done', t: '✅ 已完成' + (p.best != null ? '（最佳 ' + p.best + '%）' : '') };
    if (p.n) return { c: 'tried', t: '🟡 做過 ' + p.n + ' 次，最佳 ' + (p.best || 0) + '%' };
    return { c: '', t: '⚪ 還沒做' };
  }
  function top(title, back) {
    var b = back || (IN_FRAME ? '' : '<a class="btn" href="../../index.html#s/chinese">← 回國語</a>');
    return '<header class="zr-top">' + b + '<h1>' + title + '</h1></header>';
  }
  var BACK = '<a class="btn" href="idioms.html">← 成語列表</a>';
  function q2(k, v) { return 'idioms.html?' + k + '=' + v + (PREVIEW ? '&preview=1' : ''); }

  // ---------- 列表 ----------
  function card(href, open, inner, cls) {
    return open ? '<a class="zr-card ' + (cls || '') + '" href="' + href + '">' + inner + '</a>' : '<div class="zr-card locked" aria-disabled="true">' + inner + '</div>';
  }
  function listView() {
    document.title = '成語故事 100｜小朋友學習站';
    var h = top('🐉 成語故事 100') + '<p class="zr-intro">讀故事、認識成語，再用生活裡的情境練習怎麼用。每一級完成 ' + ZR.UNLOCK + ' 個成語，就會打開下一級；每學完一個單元（10 個成語），就能讀素養閱讀、做單元測驗。</p>';
    [1, 2, 3, 4].forEach(function (lv) {
      var rows = CAT.idioms.filter(function (c) { return c.lv === lv; }), mine = IDS.filter(function (it) { return it.lv === lv; });
      var open = PREVIEW || CY.unlocked(lv, IDS, isDone), done = mine.filter(function (it) { return isDone(it.id); }).length;
      h += '<section class="zr-lv" id="lv' + lv + '"><h2>' + (open ? '' : '🔒 ') + lvName(lv) + '<small>已完成 ' + done + ' / ' + rows.length + ' 個</small></h2>';
      if (!open) h += '<p class="zr-lock">再完成 ' + (ZR.need(lv, IDS) - ZR.doneIn(lv - 1, IDS, isDone)) + ' 個 L' + (lv - 1) + ' 成語，這一級就會打開喔！</p>';
      h += '<div class="zr-grid cy-grid">' + rows.map(function (c) {
        var it = find(IDS, c.id), s = statusOf(c.id), inner = '<b>' + c.n + '．' + esc(c.word) + '</b><span class="zr-tags"><span class="zr-tag d">' + esc(c.src) + '</span></span><span class="zr-st">' + (!it ? '✍️ 準備中' : open ? s.t : '🔒 還沒打開') + '</span>';
        return card(q2('i', c.id), open && it, inner, s.c);
      }).join('') + '</div></section>';
    });
    h += '<section class="zr-lv" id="units"><h2>📝 單元：素養閱讀＋單元測驗<small>每 10 個成語一個單元</small></h2><div class="zr-grid cy-grid">';
    for (var k = 1; k <= 10; k++) {
      var rc = CAT.readings[k - 1], art = rc && find(READS, rc.id), L = CY.unitIdioms(k, CAT, IDS), uOpen = PREVIEW || CY.unitOpen(k, CAT, IDS, isDone), rOpen = art && (PREVIEW || CY.readingOpen(art, IDS, isDone));
      var uid = 'cyu' + ('0' + k).slice(-2), us = statusOf(uid), rs = art ? statusOf(art.id) : null;
      h += '<div class="zr-card cy-unit"><b>第 ' + k + ' 單元</b><span class="zr-tags"><span class="zr-tag">成語 ' + ((k - 1) * 10 + 1) + '～' + k * 10 + '</span></span>' +
        (art ? '<a class="btn' + (rOpen ? '' : ' disabled') + '"' + (rOpen ? ' href="' + q2('r', art.id) + '"' : ' aria-disabled="true"') + '>📖 ' + esc(art.title) + '</a><small>' + (rOpen ? rs.t : '🔒 先學完文中的成語') + '</small>' : '<small>📖 素養閱讀準備中</small>') +
        (L.length ? '<a class="btn' + (uOpen ? '' : ' disabled') + '"' + (uOpen ? ' href="' + q2('u', k) + '"' : ' aria-disabled="true"') + '>📝 單元測驗（' + L.length * CY.XQ + ' 題）</a><small>' + (uOpen ? us.t : '🔒 先學完這個單元的成語') + '</small>' : '<small>📝 單元測驗準備中</small>') + '</div>';
    }
    var anyUnit = PREVIEW || Object.keys(store()).concat(Object.keys(syncedDone())).some(function (id) { return /^cyu/.test(id) && isDone(id); });
    h += '</div></section><section class="zr-lv"><h2>🏆 總測驗<small>從全部考題隨機抽 ' + CY.FINAL + ' 題，由易到難</small></h2>' +
      (anyUnit ? '<p><a class="btn primary" href="' + q2('u', 'all') + '">開始總測驗</a>　<span class="zr-st">' + statusOf('cyall').t + '</span></p>' : '<p class="zr-lock">通過任何一份單元測驗，就能挑戰總測驗！</p>') + '</section>';
    box.innerHTML = '<div class="zr-wrap">' + h + '<p class="center"><a class="btn" href="../../map.html" target="_top">🗺️ 課程地圖</a></p></div>';
  }

  // ---------- 文章區塊（同國語閱讀 reading.js 的 blockHTML；svg 已過 reading-core 檢查）----------
  function blockHTML(b) {
    if (typeof b === 'string') return '<p data-say>' + esc(b) + '</p>';
    if (b.h) return '<h3 data-say>' + esc(b.h) + '</h3>';
    if (b.doc) return '<div class="zr-doc" data-say><b>' + esc(b.doc) + '</b>' + (b.from ? '<small>' + esc(b.from) + '</small>' : '') + '</div>';
    if (b.poem) return '<div class="zr-poem" data-say>' + b.poem.map(esc).join('<br>') + '</div>';
    if (b.box) return '<div class="zr-box" data-say>' + (b.title ? '<b>' + esc(b.title) + '</b>' : '') + b.box.map(function (l) { return '<p>' + esc(l) + '</p>'; }).join('') + '</div>';
    if (b.table) {
      var t = b.table, say = t.cap + '。' + t.rows.map(function (r) { return r.map(function (c, i) { return t.head[i] + '：' + c; }).join('，'); }).join('。');
      return '<figure class="zr-fig" data-say="' + esc(say) + '"><figcaption>' + esc(t.cap) + '</figcaption><div class="zr-tw"><table><thead><tr>' + t.head.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        t.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div></figure>';
    }
    if (b.timeline) { var tl = b.timeline; return '<figure class="zr-fig" data-say="' + esc(tl.cap + '。' + tl.items.map(function (r) { return r[0] + '，' + r[1]; }).join('。')) + '"><figcaption>' + esc(tl.cap) + '</figcaption><ol class="zr-tl">' + tl.items.map(function (r) { return '<li><b>' + esc(r[0]) + '</b>' + esc(r[1]) + '</li>'; }).join('') + '</ol></figure>'; }
    if (b.svg) return '<figure class="zr-fig" data-say="' + esc(b.cap + '。' + b.alt) + '"><div class="zr-svg" role="img" aria-label="' + esc(b.alt) + '">' + b.svg + '</div><figcaption>' + esc(b.cap) + '</figcaption></figure>';
    return '';
  }
  function idiomArt(it) {
    return '<h2 class="cy-word" data-say>' + esc(it.word) + '</h2><p class="cy-zy">' + esc(it.zhuyin) + '</p><p class="cy-src">出處：' + esc(it.src) + '</p>' + it.story.map(blockHTML).join('') +
      (it.quote ? '<div class="zr-box cy-quote"><b>📜 古書原文摘一句</b><p>「' + esc(it.quote) + '」——' + esc(it.quoteFrom || it.src) + '</p></div>' : '');
  }
  function readArt(a) { return '<h2 data-say>' + esc(a.title) + '</h2>' + a.body.map(blockHTML).join(''); }
  function explainHTML(it) {
    var li = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; };
    var rel = function (a) { return a.length ? a.map(function (w) { return '<span class="zr-tag d">' + esc(w) + '</span>'; }).join(' ') : '<span class="muted">（沒有常用的）</span>'; };
    return '<div class="card cy-ex" id="cy-ex"><h2>💡 成語解說：' + esc(it.word) + '</h2><dl class="cy-dl"><dt>意思</dt><dd>' + esc(it.mean) + '</dd><dt>怎麼用</dt><dd>' + li(it.usage) + '</dd>' +
      (it.misuse.length ? '<dt>⚠️ 常見誤用</dt><dd>' + li(it.misuse) + '</dd>' : '') + '<dt>例句</dt><dd>' + li(it.eg) + '</dd><dt>近義</dt><dd>' + rel(it.syn) + '</dd><dt>反義</dt><dd>' + rel(it.ant) + '</dd></dl></div>';
  }

  // ---------- 朗讀（同國語閱讀：zh-TW，一段一段念、標亮）----------
  var synth = window.speechSynthesis || null, saying = false;
  function zhVoice() { try { var v = synth.getVoices(); return v.filter(function (x) { return /^zh[-_]TW/i.test(x.lang); })[0] || v.filter(function (x) { return /^zh/i.test(x.lang); })[0] || null; } catch (e) { return null; } }
  function sayStop() { saying = false; try { if (synth) synth.cancel(); } catch (e) { } Array.prototype.forEach.call(document.querySelectorAll('.zr-saying'), function (el) { el.classList.remove('zr-saying'); }); var b = document.getElementById('zr-tts'); if (b) b.textContent = '🔊 朗讀'; }
  function sayAll() {
    if (!synth) return; if (saying) { sayStop(); return; }
    var els = Array.prototype.slice.call(document.querySelectorAll('#art [data-say]')), i = 0, v = zhVoice();
    saying = true; document.getElementById('zr-tts').textContent = '⏹ 停止朗讀';
    (function next() {
      Array.prototype.forEach.call(document.querySelectorAll('.zr-saying'), function (el) { el.classList.remove('zr-saying'); });
      if (!saying || i >= els.length) { sayStop(); return; }
      var el = els[i++], u = new SpeechSynthesisUtterance(el.getAttribute('data-say') || el.textContent);
      el.classList.add('zr-saying'); try { el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { }
      u.lang = 'zh-TW'; if (v) u.voice = v; u.rate = 0.9; u.onend = u.onerror = function () { if (saying) next(); };
      synth.speak(u);
    })();
  }
  window.addEventListener('pagehide', sayStop);

  // ---------- 題目卡（同國語閱讀＋情境段落 ctx、題型標籤）----------
  function newItem(q, owner) { var it = CY.isOpen(q) ? { q: q, done: false, right: false, text: '' } : QK.prep(q); it.owner = owner; return it; }
  function openHTML(it) {
    var q = it.q;
    if (!it.done) return '<div class="zr-open"><textarea data-z="draft" aria-label="我的回答" placeholder="把你的想法寫下來（至少 ' + ZR.OPEN_MIN + ' 個字）…">' + esc(it.text) + '</textarea><div class="row"><button type="button" class="btn primary" data-z="open">✅ 寫好了，看參考答案</button></div></div>';
    return '<div class="zr-open"><p><b>我的回答：</b>' + esc(it.text) + '</p></div><div class="zr-ref"><b>💡 參考答案</b><p>' + esc(q.ref) + '</p><b>✅ 評分要點：對照看看，你寫到了哪幾點？</b><ul>' +
      q.rubric.map(function (r) { return '<li><label><input type="checkbox"><span>' + esc(r) + '</span></label></li>'; }).join('') + '</ul><small class="muted">「想一想」不計分，寫完就算完成這一題；可以照要點再改得更好。</small></div>';
  }
  function cardHTML(it, i) {
    var q = it.q, open = CY.isOpen(q), cls = it.done ? (open || it.right ? ' ok' : ' no') : '';
    var tag = q.k ? CY.KINDS[q.k] : ZR.PIRLS[q.p];
    var fb = !open && it.done ? '<div class="fb ' + (it.right ? 'ok' : 'no') + '"><div class="fbh">' + (it.right ? '答對了！🎉' : '再看一次 👀') + '</div><div>' + esc(q.why) + QK.extra(it) + '</div></div>' : '';
    return '<div class="zr-q' + cls + '" id="zq' + i + '" data-i="' + i + '"><div class="zr-qh"><span>第 ' + (i + 1) + ' 題</span><span>' + esc(tag) + '</span><span aria-label="難度 ' + q.d + '">' + stars(q.d) + '</span><span class="qtype" style="margin:0">' + (open ? '✍️ 想一想' : QK.TYPES[q.type]) + '</span></div>' +
      (q.ctx ? '<div class="cy-ctx">' + esc(q.ctx) + '</div>' : '') + '<p class="zr-qt">' + esc(q.q) + '</p>' + (open ? openHTML(it) : QK.body(it)) + fb + '<p class="zr-msg" data-msg aria-live="polite"></p></div>';
  }
  function paintCard(i) { var el = document.getElementById('zq' + i); if (el) el.outerHTML = cardHTML(R.items[i], i); }
  function setMsg(i, m) { var el = document.querySelector('#zq' + i + ' [data-msg]'); if (el) el.textContent = m || ''; }
  var allDone = function (a) { return a.every(function (x) { return x.done; }); };

  // ---------- 一個成語／一篇素養閱讀 ----------
  // R：{kind:'idiom'|'read'|'test', id, owner, items, nR（閱讀題數，成語頁用）, started, reported}
  function pageShell(title, metaHTML, artHTML) {
    box.innerHTML = '<div class="zr-wrap">' + top(title, BACK + (synth ? '<button type="button" class="btn" id="zr-tts" data-z="tts">🔊 朗讀</button>' : '')) +
      '<div class="zr-meta">' + metaHTML + '<span class="zr-st" id="zr-st">' + statusOf(R.id).t + '</span></div>' +
      '<div class="zr-read"><article class="zr-art" id="art">' + artHTML + '</article><section class="zr-qs" id="qs" aria-label="題目"></section></div>' +
      '<nav class="zr-jump" id="jump" hidden aria-label="跳到"><button type="button" class="btn" data-z="toArt">📖 看故事</button><button type="button" class="btn primary" data-z="toQs">✏️ 回到題目</button></nav></div>';
    paintQs();
  }
  function locked(title, msg) { box.innerHTML = '<div class="zr-wrap">' + top('🔒 ' + title, BACK) + '<p class="zr-lock">' + msg + '</p></div>'; }
  function idiomView(it) {
    if (!it) { locked('找不到這個成語', '可能還在準備中。'); return; }
    document.title = it.word + '｜成語故事｜小朋友學習站';
    if (!PREVIEW && !CY.unlocked(it.lv, IDS, isDone)) { locked(lvName(it.lv) + ' 還沒打開', '先完成 ' + ZR.need(it.lv, IDS) + ' 個 L' + (it.lv - 1) + ' 成語，這一級就會打開喔！'); return; }
    R = { kind: 'idiom', id: it.id, owner: it, items: [], nR: it.rq.length, started: false };
    pageShell(lvName(it.lv), '<span class="zr-tag">' + esc(it.word) + '</span><span class="zr-tag d">' + esc(it.src) + '</span><span class="zr-tag d">故事 ' + ZR.wordCount({ body: it.story }) + ' 字</span>', idiomArt(it));
  }
  function readView(a) {
    if (!a) { locked('找不到這篇文章', '可能還在準備中。'); return; }
    document.title = a.title + '｜成語素養閱讀｜小朋友學習站';
    if (!PREVIEW && !CY.readingOpen(a, IDS, isDone)) { locked('〈' + esc(a.title) + '〉還沒打開', '先學完文章裡用到的成語：' + a.uses.map(function (id) { var c = find(CAT.idioms, id); return c ? c.word : id; }).join('、') + '。'); return; }
    R = { kind: 'read', id: a.id, owner: a, items: [], started: false };
    pageShell('📖 成語素養閱讀', '<span class="zr-tag">' + esc(a.genre) + '</span>' + a.domain.map(function (d) { return '<span class="zr-tag d">' + esc(d) + '</span>'; }).join('') + '<span class="zr-tag d">' + ZR.wordCount(a) + ' 字</span>', readArt(a));
  }
  function qsOf() { return R.kind === 'test' ? R.list.map(function (x) { return x.q; }) : R.kind === 'idiom' ? R.owner.rq.concat(R.owner.pq) : R.owner.qs; }
  function startRound(again) {
    if (!gate(function () { startRound(again); })) return;
    var old = prog(R.id).open || {};
    R.items = qsOf().map(function (q) { var it = newItem(q, R.owner); if (CY.isOpen(q) && old[q.id]) it.text = old[q.id]; return it; });
    R.started = true; R.reported = false; R.last = 0;
    paintQs(); var j = document.getElementById('jump'); if (j) j.hidden = false;
    if (again) document.getElementById('qs').scrollIntoView({ block: 'start' });
  }
  function paintQs() {
    var Q = document.getElementById('qs'); if (!Q) return;
    var qs = qsOf(), n = qs.length, open = qs.filter(CY.isOpen).length;
    if (!R.started) {
      Q.innerHTML = '<h2>✏️ 讀完了嗎？來作答</h2><div class="card center"><p>' + (R.kind === 'idiom' ? '先做 <b>' + R.nR + '</b> 題閱讀題，做完會出現「成語解說」，再做 <b>' + (n - R.nR) + '</b> 題練習題。' : '這篇有 <b>' + n + '</b> 題。') +
        '<br>自動判分 ' + (n - open) + ' 題＋想一想 ' + open + ' 題：答對 ' + ZR.PASS + '% 以上、想一想都寫了，就完成！</p><button type="button" class="btn primary big" data-z="start" id="zr-start">✏️ 開始作答</button><p class="muted">作答時可以隨時回頭看故事。</p></div>';
      return;
    }
    var h = '';
    if (R.kind === 'idiom') {
      var rItems = R.items.slice(0, R.nR), rDone = allDone(rItems);
      h = '<h2>📖 閱讀題（' + rItems.filter(function (x) { return x.done; }).length + ' / ' + R.nR + '）</h2>' + rItems.map(cardHTML).join('');
      if (rDone) h += explainHTML(R.owner) + '<h2>✏️ 練習題：用在生活裡</h2>' + R.items.slice(R.nR).map(function (it, k) { return cardHTML(it, R.nR + k); }).join('');
      else h += '<p class="cy-next muted">🔒 閱讀題都做完，就會出現「成語解說」和練習題。</p>';
    } else h = '<h2>✏️ 作答（' + R.items.filter(function (x) { return x.done; }).length + ' / ' + n + '）</h2>' + R.items.map(cardHTML).join('');
    Q.innerHTML = h + '<div id="zr-res"></div>';
    paintResult();
  }
  function paintResult() {
    var el = document.getElementById('zr-res'); if (!el) return;
    if (!R.items.length || !allDone(R.items)) { el.innerHTML = ''; return; }
    var g = R.grade || CY.grade(R.items), test = R.kind === 'test';
    el.innerHTML = '<div class="card zr-res result" id="zr-result" data-pass="' + (g.pass ? 1 : 0) + '"><div class="party">' + (g.pass ? '🎉' : '💪') + '</div><div class="score">' + g.ok + ' / ' + g.n + '</div>' +
      '<p>自動判分題答對 ' + g.pct + '%' + (test ? '' : '・想一想 ' + (g.openDone ? '都寫了 ✅' : '還沒寫完')) + '</p>' +
      (g.pass ? '<p><b>' + (test ? '通過測驗了！' : '完成了！') + '</b></p>' : '<p>差一點點：答對 ' + ZR.PASS + '% 以上' + (test ? '' : '、想一想都寫了') + '，才算' + (test ? '通過' : '完成') + '。再試試看！</p>') +
      '<div class="btns"><button type="button" class="btn" data-z="again">🔁 再做一次</button><a class="btn" href="idioms.html">🐉 成語列表</a>' + nextBtn(g) + '</div></div>';
  }
  function nextBtn(g) {
    if (!g.pass || R.kind !== 'idiom') return '';
    var nx = IDS.filter(function (it) { return it.id > R.id && !isDone(it.id) && CY.unlocked(it.lv, IDS, isDone); })[0];
    return nx ? '<a class="btn primary" href="' + q2('i', nx.id) + '">下一個：' + esc(nx.word) + ' ▶</a>' : '';
  }
  function finishIfDone() {
    if (R.reported || !allDone(R.items)) return;
    R.reported = true;
    var g = CY.grade(R.items), s = store(), p = s[R.id] || {}, now = Date.now();
    R.grade = g;
    p.best = Math.max(p.best || 0, g.pct); p.n = (p.n || 0) + 1; p.at = now; if (g.pass && !p.done) p.done = now;
    if (R.kind !== 'test') { p.open = {}; R.items.forEach(function (it) { if (CY.isOpen(it.q)) p.open[it.q.id] = String(it.text).slice(0, 2000); }); }
    s[R.id] = p; save(s);
    coinRound(R.kind === 'test' ? 'chinese:idioms-test' : 'chinese:idioms', g.ok, g.n);
    if (g.pass) doneRec(R.id, g.pct);
    var st = document.getElementById('zr-st'); if (st) st.textContent = statusOf(R.id).t;
    paintResult();
  }
  function onAnswer(i, ok) {
    var it = R.items[i]; R.last = i; coinAnswer(ok);
    mkRec(CY.mkId(it.owner, it.q), ok, ok ? null : CY.mkP(it.owner, it.q));
    var before = R.kind === 'idiom' && i < R.nR;
    if (before && allDone(R.items.slice(0, R.nR))) { paintQs(); var ex = document.getElementById('cy-ex'); if (ex) ex.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    else { paintCard(i); var h = document.querySelector('#qs h2'); if (h && R.kind !== 'idiom') h.textContent = '✏️ 作答（' + R.items.filter(function (x) { return x.done; }).length + ' / ' + R.items.length + '）'; }
    finishIfDone();
  }

  // ---------- 單元測驗／總測驗 ----------
  function testView(u) {
    var all = u === 'all', k = +u;
    if (!all && !(k >= 1 && k <= 10)) { locked('找不到這份測驗', '單元是 1～10。'); return; }
    var title = all ? '🏆 成語總測驗' : '📝 第 ' + k + ' 單元測驗';
    document.title = title.replace(/^\S+ /, '') + '｜小朋友學習站';
    var id = all ? 'cyall' : 'cyu' + ('0' + k).slice(-2);
    if (!PREVIEW && !all && !CY.unitOpen(k, CAT, IDS, isDone)) { locked(title.replace(/^\S+ /, '') + '還沒打開', '先學完這個單元已經上架的成語：' + CY.unitIdioms(k, CAT, IDS).map(function (it) { return it.word; }).join('、') + '。'); return; }
    var list = all ? CY.finalTest(IDS, CY.FINAL) : CY.unitTest(k, CAT, IDS);
    if (!list.length) { locked(title.replace(/^\S+ /, ''), '題目準備中。'); return; }
    R = { kind: 'test', id: id, items: [], started: false };
    box.innerHTML = '<div class="zr-wrap">' + top(title, BACK) + '<div class="zr-meta"><span class="zr-tag">' + list.length + ' 題</span><span class="zr-tag d">由易到難</span><span class="zr-st" id="zr-st">' + statusOf(id).t + '</span></div>' +
      (!all && list.length < 2 * CY.UNIT ? '<p class="zr-lock">這個單元還有成語在準備中，目前先考已上架的 ' + list.length + ' 題。</p>' : '') + '<section class="zr-qs cy-test" id="qs"></section></div>';
    R.list = list;
    var Q = document.getElementById('qs');
    Q.innerHTML = '<div class="card center"><p>答對 ' + ZR.PASS + '% 以上就通過！題目裡有很多生活情境，先把情境讀完再作答。</p><button type="button" class="btn primary big" data-z="tstart" id="zr-start">📝 開始測驗</button></div>';
  }
  function startTest(again) {
    if (!gate(function () { startTest(again); })) return;
    if (R.id === 'cyall' && again) R.list = CY.finalTest(IDS, CY.FINAL);
    R.items = R.list.map(function (x) { return newItem(x.q, x.it); }); R.started = true; R.reported = false; R.grade = null;
    paintQs(); if (again) window.scrollTo(0, 0);
  }

  // ---------- 事件 ----------
  document.addEventListener('click', function (e) {
    var t = e.target, k = t.closest && t.closest('[data-qk]'), z = t.closest && t.closest('[data-z]');
    if (k && !k.disabled && R && R.items) {
      var c = k.closest('.zr-q'), i = +c.getAttribute('data-i'), it = R.items[i], r = QK.act(it, k.getAttribute('data-qk'), k.getAttribute('data-v'));
      if (r.result != null) onAnswer(i, r.result); else if (r.render) paintCard(i); else if (r.msg) setMsg(i, r.msg);
      return;
    }
    if (!z || z.disabled) return;
    var a = z.getAttribute('data-z');
    if (a === 'tts') sayAll();
    else if (a === 'start') startRound(false);
    else if (a === 'tstart') startTest(false);
    else if (a === 'again') { if (R.kind === 'test') startTest(true); else startRound(true); }
    else if (a === 'toArt') { var art = document.getElementById('art'); if (art) art.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    else if (a === 'toQs') { var j = R && R.items ? R.items.findIndex(function (x) { return !x.done; }) : -1, el = document.getElementById('zq' + (j < 0 ? (R.last || 0) : j)) || document.getElementById('qs'); if (el) el.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    else if (a === 'open') {
      var cc = z.closest('.zr-q'), n = +cc.getAttribute('data-i'), item = R.items[n], ta = cc.querySelector('textarea');
      item.text = ta ? ta.value : item.text;
      if (ZR.countText(item.text) < ZR.OPEN_MIN) { setMsg(n, '再多寫一點：至少 ' + ZR.OPEN_MIN + ' 個字，說出你的想法和理由。'); return; }
      item.done = true; if (WIRE && window.KidsDaily) KidsDaily.rec('chinese', null); onAnswerOpen(n);   // 開放題：算一題、不計答對率
    }
  });
  function onAnswerOpen(n) {
    R.last = n;
    if (R.kind === 'idiom' && n < R.nR && allDone(R.items.slice(0, R.nR))) paintQs(); else paintCard(n);
    finishIfDone();
  }
  document.addEventListener('input', function (e) { var t = e.target; if (t && t.getAttribute && t.getAttribute('data-z') === 'draft' && R) { var c = t.closest('.zr-q'); R.items[+c.getAttribute('data-i')].text = t.value; } });
  function onSynced() { if (!IID && !RID && !UID) listView(); }
  window.addEventListener('kids-sync-updated', onSynced);
  window.addEventListener('storage', function (e) { if (e.key === 'kids_done' || e.key === K || e.key === null) onSynced(); });

  window.CYPage = { state: function () { return R; }, idioms: IDS, reads: READS };
  if (IID) idiomView(find(IDS, IID)); else if (RID) readView(find(READS, RID)); else if (UID) testView(UID); else listView();
})();
