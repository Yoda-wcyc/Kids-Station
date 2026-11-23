/* gept/gept.js — 全民英檢準備區的畫面（首頁、題型練習、模擬考、寫作口說）。規則與計分在 gept-core.js（GeptCore），語音在 gept-tts.js（GeptTTS）。
   每頁最後呼叫 GeptPage.home()／practice()／mock()／task()。要登入才能作答（requireLogin＋startActivity('english')，同英文其他練習）。
   紀錄（CONTRACT.md §7）：
   - 每題（聽、讀自動判分）KidsCoins.answer(ok,'english')＋KidsDaily.rec('english', ok)（只算英文總數，不算句型、片語子目標）；
     答錯進錯題庫 KidsMistakes.record('gept', 題目id, ok, {u:級, pt:部分, s:短句})，在錯題庫裡連對 3 次畢業（kids-mistakes.js 未畢業最多 100 題）。
   - 寫作、口說（不自動給分）：每完成一題 KidsDaily.rec('english', null)＋KidsCoins.activity('english')。
   - 一組題型練習（聽、讀）或一份模擬考做完：送 practice_round 'english:gept'（correct／total＝自動判分題；錯題練習不送）。後端白名單 kids-2026-11-16-a 加的。
   - shortcut: 中高級 u（2026-11-21）只存本機：syncmerge.js pg 和 kids-lock.js done.n 只認 e|i|a（u 最壞約多 200 B，同步預算只剩 799 B／要留 700 B），所以 u 的最佳成績、模擬考不跨裝置，也還不記做過幾次（KidsLock.bump 對 u 不動作、不鎖）；每題「學過 2 次」照樣用本機 kids_gept.ok。同步有空間時再把 u 加進那兩支的 regex。
   - 成績存本機 kids_gept＝{best:{組id:{p,c,n,t}}, mock:[{id,t,lc,ln,rc,rn,L,R,pass}], task:{組id:{t,sc,b}}}（2026-11-19 起 best 的 %、task 做過、最新 8 筆 mock 跟著同步：sync.js／syncmerge.js pg）。 */
(function (W) {
  'use strict';
  var G = W.GeptCore, TTS = W.GeptTTS, D = document, AB = 'ABCDEFGHIJK';
  function $(id) { return D.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function arg(k) { var m = new RegExp('[?&]' + k + '=([^&#]*)').exec(location.search); return m ? decodeURIComponent(m[1]) : ''; }
  function fastMs(ms) { var f = W.__GEPT_FAST; return f ? Math.min(ms, f.wait || 300) : ms; }
  function lvOf(id) { return String(id || '').charAt(0); }
  function partOf(id) { var m = G.ID_RE.exec(id || ''); return m ? m[2] : ''; }

  // ---------- 本機紀錄 ----------
  var KEY = 'kids_gept';
  function ld() { try { var x = JSON.parse(localStorage.getItem(KEY) || '{}'); return x && typeof x === 'object' ? x : {}; } catch (e) { return {}; } }
  function sv(x) { try { localStorage.setItem(KEY, JSON.stringify(x)); } catch (e) { } }
  function saveBest(id, c, n) { var x = ld(), p = n ? Math.round(c / n * 100) : 0; x.best = x.best || {}; if (!x.best[id] || p >= x.best[id].p) x.best[id] = { p: p, c: c, n: n, t: Date.now() }; sv(x); }
  function saveMock(r) { var x = ld(); x.mock = (x.mock || []).concat([r]).slice(-60); sv(x); }
  // 寫作、口說：家長每按一次分數就存一次 → 做過幾次只在這一頁第一次存的時候記（../kids-lock.js；要在寫 task 之前記）
  var TASK_N = {};
  function saveTask(id, o) { if (!TASK_N[id]) { TASK_N[id] = 1; try { if (W.KidsLock) KidsLock.bump(id); } catch (e) { } } var x = ld(); x.task = x.task || {}; x.task[id] = Object.assign({ t: Date.now() }, o); sv(x); }
  function uiLv(v) { try { if (v) localStorage.setItem('kids_gept_ui', v); return localStorage.getItem('kids_gept_ui') || 'e'; } catch (e) { return v || 'e'; } }

  // ---------- 登入、紀錄 ----------
  function authOK() { try { return !W.KidsAuth || KidsAuth.requireLogin('english'); } catch (e) { return true; } }
  function startAct(retry) { try { return !(W.KidsAuth && KidsAuth.startActivity) || KidsAuth.startActivity('english', retry); } catch (e) { return true; } }
  // 2026-11-21 學過 2 次就不算（每日清單）：每題答對過幾次記在 kids_gept.ok（{題目 id: 0～2}；聽寫的字是 'w:<字>'）；那一組（或模擬考卷）做滿 2 次（done.n，已同步）＝組裡每題都當學過 2 次。
  // shortcut: 每題的次數只在本機判斷，換裝置可繞過（只擋得住「整組做滿 2 次」那一層）；之後要擋就把 ok 壓成位元圖放進 syncmerge.js pg（2,292 題約 900 B，等同步預算有空間）
  function setOf(id) { var m = /^([eiua]-(?:[LRSW]\d|M)-\d\d)/.exec(id || ''); return m ? m[1] : ''; }
  function lockN(setId) { try { return setId && W.KidsLock ? KidsLock.getV(JSON.parse(localStorage.getItem('kids_done') || '{}'), setId) : 0; } catch (e) { return 0; } }
  function okN(id) { var n = +((ld().ok || {})[id]) || 0; return lockN(setOf(id)) >= 2 ? Math.max(n, 2) : n; }
  function okBump(id) { var x = ld(); x.ok = x.ok || {}; var n = +x.ok[id] || 0; if (n < 2) { x.ok[id] = n + 1; sv(x); } }
  var lastOld = false;   // 最近一題是不是學過 2 次的舊題（rec 之後看，畫面上給小提示）
  function dailyRec(id, ok) { var prev = okN(id); if (ok) okBump(id); var c = W.KidsDaily ? KidsDaily.rec('english', !!ok, null, prev) : null; lastOld = c === false; return lastOld; }
  function oldNote(text) { return W.KidsDaily && KidsDaily.oldNote ? KidsDaily.oldNote('index.html?lv=' + lvOf(arg('set')) , text, '去挑一組還沒做過的 →') : ''; }
  function rec(Q, ok) {
    try { if (W.KidsCoins) KidsCoins.answer(!!ok, 'english'); } catch (e) { }
    dailyRec(Q.id, ok);
    try { return W.KidsMistakes ? KidsMistakes.record('gept', Q.id, !!ok, G.mkP(Q)) : null; } catch (e) { return null; }
  }
  function coinRound(c, n) { try { if (W.KidsCoins && n) KidsCoins.report({ type: 'practice_round', item: 'english:gept', correct: c, total: n }); } catch (e) { } }
  // 寫作、口說：一組做過幾次＝done.n（kids-lock，已同步）；第一次評分前沒有紀錄＝看 kids_gept.task 有沒有這組。prev 在進頁時算好（評分會 +1）
  function taskPrev(setId) { var v = lockN(setId); return v >= 2 ? 2 : Math.max(v, (ld().task || {})[setId] ? 1 : 0); }
  function recOpen(prev) { try { if (W.KidsCoins) KidsCoins.activity('english'); } catch (e) { } var c = W.KidsDaily ? KidsDaily.rec('english', null, null, prev) : null; lastOld = c === false; }

  // ---------- 載入題目 ----------
  function catEntry(id) { var c = W.GEPT_CATALOG || {}, m = G.ID_RE.exec(id || ''); return m && ((c[m[1]] || {})[m[2]] || []).filter(function (x) { return x.id === id; })[0]; }
  function loadScript(src) { return new Promise(function (res, rej) { var s = D.createElement('script'); s.src = src; s.onload = res; s.onerror = function () { rej(new Error('載入失敗 ' + src)); }; D.head.appendChild(s); }); }
  function findSet(id) { return (W.GEPT_SETS || []).filter(function (s) { return s.id === id; })[0]; }
  function loadSet(id) {
    if (findSet(id)) return Promise.resolve(findSet(id));
    var e = catEntry(id); if (!G.fileOf(id)) return Promise.reject(new Error('沒有這組題目：' + id));
    return loadScript(G.fileOf(id) + (e && e.h ? '?v=' + e.h : '')).then(function () { return findSet(id) || Promise.reject(new Error('沒有這組題目：' + id)); });
  }

  // ---------- 畫面零件 ----------
  function picHTML(p) { return p ? '<span class="e" aria-hidden="true">' + esc(p.e) + '</span>' + (p.t ? '<span class="t en">' + esc(p.t) + '</span>' : '') : ''; }
  function tableHTML(c) {
    if (!c) return '';
    return '<div class="gp-wrap">' + (c.cap ? '<b class="en">' + esc(c.cap) + '</b>' : '') + '<table class="gp-t en"><tr>' + c.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr>' +
      c.rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + esc(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div>';
  }
  function paras(s) { return String(s || '').split(/\n+/).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join(''); }
  function textHTML(x, label) {
    var hd = [x.from ? 'From: ' + x.from : '', x.to ? 'To: ' + x.to : ''].filter(Boolean).join('　');
    return '<div class="gp-text en">' + (label ? '<b>' + esc(label) + '</b> ' : '') + (x.title ? '<h4>' + esc(x.title) + '</h4>' : '') + (hd ? '<p class="hd">' + esc(hd) + '</p>' : '') + paras(x.body) + tableHTML(x.table) + '</div>';
  }
  function scriptHTML(q, spokenQs) {   // 文字稿（聽力作答後才看）；spokenQs＝中高級對話／談話：問題是播出來的，也列進文字稿
    var o = [];
    if (q.intro) o.push('<i>' + esc(q.intro) + '</i>');
    (q.lines || []).forEach(function (l) { o.push('<b>' + (l[0] === 'M' ? '男' : l[0] === 'F' ? '女' : '') + '：</b>' + esc(l[1])); });
    if (q.say) o.push(esc(q.say));
    if (q.q && !q.qs) o.push('<b>Q：</b>' + esc(q.q));
    if (spokenQs) q.qs.forEach(function (x) { o.push('<b>Q：</b>' + esc(x.q)); });
    if (q.opts && q.pic) q.opts.forEach(function (t, i) { o.push('(' + AB[i] + ') ' + esc(t)); });
    return '<div class="gp-script en">' + o.join('<br>') + '</div>';
  }
  function optHTML(Q, i, txt) { return '<button type="button" class="opt gp-o" data-q="' + esc(Q.id) + '" data-v="' + i + '"><b>' + AB[i] + '</b><span class="en">' + esc(txt) + '</span></button>'; }
  function optsHTML(Q) {
    var q = Q.q, P = G.PARTS[lvOf(Q.id)][Q.part];
    if (Q.kind === 'pic' || Q.kind === 'skim') {
      var n = Q.kind === 'pic' ? P.o : Q.group.type === 'match' ? 3 : Q.group.heads.length;
      var b = []; for (var i = 0; i < n; i++) b.push('<button type="button" class="opt" data-q="' + esc(Q.id) + '" data-v="' + i + '">' + AB[i] + '</button>');
      return '<div class="opts gp-abc">' + b.join('') + '</div>';
    }
    if (q.pics) return '<div class="gp-pics">' + q.pics.map(function (p, i) { return '<button type="button" class="opt" data-q="' + esc(Q.id) + '" data-v="' + i + '" aria-label="圖 ' + AB[i] + '"><b>' + AB[i] + '</b>' + picHTML(p) + '</button>'; }).join('') + '</div>';
    if (q.ans) return '<div class="gp-row" style="justify-content:flex-start"><input class="gp-in" data-in="' + esc(Q.id) + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="寫一個字、片語或短句" style="flex:1 1 220px"><button type="button" class="btn primary" data-qok="' + esc(Q.id) + '">確定</button></div>';
    return '<div class="opts one">' + q.opts.map(function (t, i) { return optHTML(Q, i, t); }).join('') + '</div>';
  }
  // 一個畫面：聽力一題、詞彙一題、或一個題組（題組裡只出 qs 列出的小題）
  function screenHTML(S, num) {
    var Q0 = S.qs[0], g = S.group, k = Q0.kind, h = '';
    function n(Q) { return '<span class="gp-num">' + num(Q) + '</span>'; }
    if (!g) {
      var q = Q0.q;
      if (k === 'pic') h += '<div class="gp-pic">' + picHTML(q.pic) + '</div><p class="gp-q">' + n(Q0) + '請聽題目和選項，選出最符合圖的句子</p>';
      else if (k === 'vocab') h += '<p class="gp-q en">' + n(Q0) + esc(q.s).replace(/_{3,}/, '<span class="gp-blank">&nbsp;</span>') + '</p>';
      else h += '<p class="gp-q">' + n(Q0) + (k === 'resp' ? '請聽一句話，選出最適合的回答' : q.pics ? '請聽短文和問題，選出最適合的圖' : '請聽' + (q.lines ? '對話' : '內容') + '和問題，選出最適合的答案') + '</p>' + tableHTML(q.chart);
      return h + optsHTML(Q0);
    }
    var sub = S.qs.map(function (Q) { return Q.id; });
    if (k === 'cloze') {
      var map = {}; g.qs.forEach(function (q, i) { map[i + 1] = q; });
      h += (g.title ? '<h3 class="en">' + esc(g.title) + '</h3>' : '') + '<div class="gp-text en"><p>' + esc(g.text).replace(/\[(\d+)\]/g, function (_, d) { var q = map[+d], Q = q && S.all[q.id]; return '<span class="gp-blank">(' + (Q ? num(Q) : '?') + ')</span>'; }).replace(/\n+/g, '</p><p>') + '</p></div>';
      S.qs.forEach(function (Q) { h += '<div class="gp-sub">' + n(Q) + optsHTML(Q) + '</div>'; });
      return h;
    }
    if (k === 'read') { (g.texts || []).forEach(function (x) { h += textHTML(x); }); S.qs.forEach(function (Q) { h += '<div class="gp-sub"><p class="gp-q en">' + n(Q) + esc(Q.q.q) + '</p>' + optsHTML(Q) + '</div>'; }); return h; }
    if (k === 'skim' && g.type === 'head') {
      h += '<h3 class="en">' + esc(g.title || '') + '</h3><ol class="gp-heads en">' + g.heads.map(function (x, i) { return '<li><b>' + AB[i] + '</b>　' + esc(x) + '</li>'; }).join('') + '</ol>';
      g.paras.forEach(function (p, pi) {
        var Q = S.qs.filter(function (Q) { return Q.q.p === pi; })[0], qd = g.qs.filter(function (q) { return q.p === pi; })[0];
        var lab = pi === g.ex.p ? '範例：' + AB[g.ex.h] : Q ? n(Q) + '這一段的標題？' : qd && num({ id: qd.id }) ? '（第 ' + num({ id: qd.id }) + ' 題）' : '';
        h += '<div class="gp-text en"><p class="hd">' + lab + '</p><p>' + esc(p) + '</p>' + (Q ? optsHTML(Q) : '') + '</div>';
      });
      return h;
    }
    if (k === 'skim') { g.texts.forEach(function (x, i) { h += textHTML(x, AB[i]); }); S.qs.forEach(function (Q) { h += '<div class="gp-sub"><p class="gp-q en">' + n(Q) + esc(Q.q.q) + '</p>' + optsHTML(Q) + '</div>'; }); return h; }
    if (k === 'grp') { h += '<p class="gp-q">請聽' + (g.lines ? '對話' : '談話') + '和 ' + S.qs.length + ' 個問題（問題不印出來），選出最適合的答案</p>' + tableHTML(g.chart); S.qs.forEach(function (Q) { h += '<div class="gp-sub">' + n(Q) + optsHTML(Q) + '</div>'; }); return h; }
    if (k === 'long') { h += '<p class="gp-q en"><i>' + esc(g.intro) + '</i></p>'; S.qs.forEach(function (Q) { h += '<div class="gp-sub"><p class="gp-q en">' + n(Q) + esc(Q.q.q) + '</p>' + optsHTML(Q) + '</div>'; }); return h; }
    return h + sub.join(',');
  }
  // 題目 → 畫面：同一個題組的連續小題併成一個畫面
  function screens(list) {
    var out = [], all = {};
    list.forEach(function (Q) { all[Q.id] = Q; var last = out[out.length - 1]; if (Q.group && last && last.group === Q.group) last.qs.push(Q); else out.push({ qs: [Q], group: Q.group }); });
    out.forEach(function (S) { S.all = all; S.L = G.PARTS[lvOf(S.qs[0].id)][S.qs[0].part].s === 'L'; });
    return out;
  }
  function audioOf(S, num, numf) {   // 一個畫面的語音 parts；中高級對話／談話（grp）念完一段再念問題（numf＝題號函式）
    var Q = S.qs[0];
    if (S.group && Q.kind === 'grp') { var g = TTS.partsOf(S.group); S.qs.forEach(function (x, i) { g.push({ t: 'Question ' + ((numf && numf(x)) || i + 1) + '. ' + x.q.q, spk: 'N' }); }); return g; }
    if (S.group) return TTS.partsOf(S.group);
    var p = TTS.partsOf(Q.q, num);
    if (Q.kind === 'pic') Q.q.opts.forEach(function (t, i) { p.push({ t: AB[i] + '. ' + t, spk: 'N' }); });
    return p;
  }
  function rateOf(lv) { TTS.setRate(lv === 'e' ? 0.9 : 1); }
  function answerText(Q, v) { var q = Q.q; if (v == null || v === '') return '（沒作答）'; if (q.ans) return String(v); if (Q.kind === 'skim' && Q.group.type === 'head') return AB[v] + ' ' + Q.group.heads[v]; if (Q.kind === 'skim') return AB[v] + '（' + (Q.group.texts[v] || {}).title + '）'; return AB[v] + (q.opts ? ' ' + q.opts[v] : ''); }
  function rightText(Q) { var q = Q.q; if (q.ans) return q.ans.join(' ／ '); return answerText(Q, q.a); }
  function timerTxt(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }
  function errBox(el, e) { el.innerHTML = '<section class="card"><p>😵 ' + esc(e && e.message || e) + '</p><p><a class="btn" href="index.html">回準備區</a></p></section>'; }
  function head(title, back) { return '<header class="gp-top"><a class="btn icon" href="' + (back || 'index.html') + '" aria-label="回上一頁">⬅️</a><h1>' + title + '</h1></header>'; }

  // =====================================================================
  // 首頁 index.html
  // =====================================================================
  function home() {
    var root = $('gp'), lv = /^[eiua]$/.test(arg('lv')) ? uiLv(arg('lv')) : uiLv(), C = W.GEPT_CATALOG || {}, rec0 = ld();
    function draw() {
      var L = G.LV[lv], P = G.PARTS[lv], cat = C[lv] || {}, M = G.MOCK[lv];
      var ln = M.L.reduce(function (a, p) { return a + P[p].n; }, 0), rn = M.R.reduce(function (a, r) { return a + r.parts.reduce(function (b, p) { return b + P[p].n; }, 0); }, 0), rmin = M.R.reduce(function (a, r) { return a + r.min; }, 0);
      var h = head('🏅 全民英檢準備區', '../index.html#en');
      h += '<nav class="gp-lv" role="tablist">' + ['e', 'i', 'u', 'a'].map(function (k) { var x = G.LV[k]; return '<button type="button" class="btn" role="tab" data-lv="' + k + '" aria-selected="' + (k === lv) + '">' + x.n + '<small>' + (x.tag ? '⭐ ' + x.tag : '推薦目標') + '・' + x.cefr + '</small></button>'; }).join('') + '</nav>';
      h += '<section class="card"><h2>' + L.n + '是什麼？</h2><p>' + L.n + '＝' + L.who + '（CEFR ' + L.cefr + '）。先考初試：聽力 ' + ln + ' 題約 ' + M.lmin + ' 分鐘＋閱讀 ' + rn + ' 題 ' + rmin + ' 分鐘，各 120 分，' +
        '兩項合計 ' + L.pass.sum + ' 分以上、而且每一項都有 ' + L.pass.min + ' 分才通過；通過才可以考複試（寫作＋口說）。</p>' +
        (lv === 'i' ? '<p class="gp-warn">⭐ 進階挑戰：中級是高中畢業程度，文章長、要推論，比五年級的課本難很多。先把初級練熟再來挑戰！</p>' : '') +
        (lv === 'u' ? '<p class="gp-warn">🧗 高階挑戰：中高級是工作、時事用的英文（簡報、會議、報導、150～180 字作文），問題用聽的、要推論。這裡給家長看考試長什麼樣子，或好奇時體驗一下，不用現在就會。</p>' : '') +
        (lv === 'a' ? '<p class="gp-warn">🚀 超級挑戰：高級是大學英文系以上的程度（學術文章、250 字論說文、多人面談）。這裡給家長看考試長什麼樣子，或好奇時體驗一下，不用現在就會。</p>' : '') + '</section>';
      // 初試題型練習
      h += '<section class="card"><h2>🎧📖 初試題型練習</h2><p class="gp-note">每次練一組（題數＝官方那一部分的題數），作答方式照官方：聽力只播官方規定的次數，答完才看得到文字稿。</p><div class="gp-grid">';
      Object.keys(P).filter(function (k) { return P[k].s === 'L' || P[k].s === 'R'; }).forEach(function (k) { h += partCard(k, P[k], cat[k], 'practice.html?set='); });
      h += '</div></section>';
      // 模擬考
      var mocks = cat.M || [], hist = (rec0.mock || []).filter(function (r) { return lvOf(r.id) === lv; }).slice(-8).reverse();
      h += '<section class="card"><h2>📝 模擬考（完整初試）</h2><p class="gp-note">題數、順序、時間照官方；聽力自動播放、不能重播；交卷後換算 120 分制，標出有沒有達到通過標準（模擬換算，非官方成績）。</p><div class="gp-sets">' +
        (mocks.length ? mocks.map(function (m) { return '<a class="btn primary' + lockOff(m.id) + '" href="mock.html?set=' + m.id + '">' + esc(m.t || m.id) + '（' + m.n + ' 題）' + lockTag(m.id) + '</a>'; }).join('') : '<span class="muted">準備中</span>') + '</div>';
      if (hist.length) h += '<div class="gp-wrap"><table class="gp-t"><tr><th>日期</th><th>模擬考</th><th>聽力</th><th>閱讀</th><th>結果</th></tr>' + hist.map(function (r) { return '<tr><td>' + new Date(r.t).toLocaleDateString('zh-TW') + '</td><td>' + esc(r.id) + '</td><td>' + r.L + '（' + r.lc + '/' + r.ln + '）</td><td>' + r.R + '（' + r.rc + '/' + r.rn + '）</td><td>' + (r.pass ? '<span class="gp-tag ok">達標</span>' : '<span class="gp-tag no">未達</span>') + '</td></tr>'; }).join('') + '</table></div>';
      h += '</section>';
      // 複試
      h += '<section class="card"><h2>✍️🎤 複試：寫作、口說</h2><p class="gp-note">初試通過才能考。網站不自動給分：寫作看範文、家長照評分要點打級分；口說用語音出題、計時，聽完看範例回答自評。</p><div class="gp-grid">';
      Object.keys(P).filter(function (k) { return P[k].s === 'W' || P[k].s === 'S'; }).forEach(function (k) { h += partCard(k, P[k], cat[k], 'task.html?set='); });
      h += '</div></section>';
      // 單字
      h += '<section class="card"><h2>🔤 單字</h2>' + (lv === 'e' ? '<p>初級的出題範圍＝教育部國中小基本 2000 字（1,200 基本字＋800 國中進階字）。用英文區的單字卡練（可以篩選來源）：</p><div class="gp-sets">' +
        '<a class="btn" href="../index.html#learn/words/moe1200">教育部 1200 字</a><a class="btn" href="../index.html#learn/words/moe800">教育部 800 字（國中進階）</a><a class="btn" href="../index.html#learn/words/gept1">全民英檢初級補充字</a></div>' :
        '<p>' + L.n + '的單字範圍＝教育部 2000 字＋' + (lv === 'i' ? 'CEFR-J A1～B1（約 4,600 字）' : lv === 'u' ? 'CEFR-J A1～B2（約 6,900 字）' : 'CEFR-J A1～B2＋Octanove C1（約 7,900 字）') + '。教育部 2000 字用英文區單字卡（有中文）；再往上的字在這裡聽發音、練聽寫：</p><div class="gp-sets">' +
        '<a class="btn" href="../index.html#learn/words/moe1200">教育部 1200 字</a><a class="btn" href="../index.html#learn/words/moe800">教育部 800 字（國中進階）</a>' + (lv === 'u' || lv === 'a' ? '<a class="btn" href="words.html?lv=i">中級單字</a>' : '') + (lv === 'a' ? '<a class="btn" href="words.html?lv=u">中高級單字</a>' : '') + '<a class="btn primary" id="gp-wlink" href="words.html?lv=' + lv + '">' + L.n + '單字</a></div>') + '</section>';
      // 錯題、紀錄
      var mk = []; try { mk = W.KidsMistakes ? KidsMistakes.list('gept', lv) : []; } catch (e) { }
      h += '<section class="card"><h2>📕 ' + L.n + '錯題（' + mk.length + ' 題）</h2>' + (mk.length ? '<p class="gp-note">聽力、閱讀答錯的題會收進來；同一題連續答對 3 次就畢業 🎓</p><ul class="gp-mk">' + mk.slice(0, 10).map(function (e) { return '<li><span class="gp-tag">' + esc((P[e.p.pt] || {}).n0 || e.p.pt) + '</span> <span class="en">' + esc(e.p.s) + '</span>' + (e.c ? '（已連對 ' + e.c + ' 次）' : '') + '</li>'; }).join('') + '</ul>' +
        (mk.length > 10 ? '<p class="gp-note">…還有 ' + (mk.length - 10) + ' 題</p>' : '') + '<div class="gp-row"><a class="btn primary big" id="gp-mk" href="practice.html?mistakes=1&lv=' + lv + '">📕 只練錯題</a></div>' : '<p class="muted">目前沒有錯題 🎉</p>') + '</section>';
      root.innerHTML = h;
    }
    function partCard(k, p, sets, href) {
      sets = sets || [];
      var best = rec0.best || {}, task = rec0.task || {};
      return '<div class="gp-part"><h3>' + esc(p.n0) + '<span class="gp-tag">' + p.n + ' 題</span></h3><p>' + esc(p.how) + '</p><div class="gp-sets">' +
        (sets.length ? sets.map(function (s, i) { var b = best[s.id], t = task[s.id]; return '<a class="btn' + lockOff(s.id) + '" href="' + href + s.id + '">第 ' + (i + 1) + ' 組' + (b ? ' <span class="gp-tag ' + (b.p >= 80 ? 'ok' : '') + '">' + b.p + '%</span>' : t ? ' <span class="gp-tag ok">✓</span>' : '') + lockTag(s.id) + '</a>'; }).join('') : '<span class="muted">準備中</span>') + '</div></div>';
    }
    // 做過幾次（../kids-lock.js）：✓1／✓2 🔒（鎖住的變灰，點進去會帶去下一組）
    function lockTag(id) { try { return W.KidsLock ? KidsLock.badge(id) : ''; } catch (e) { return ''; } }
    function lockOff(id) { try { return W.KidsLock ? KidsLock.offCls(id) : ''; } catch (e) { return ''; } }
    root.addEventListener('click', function (e) { var t = e.target.closest('[data-lv]'); if (!t) return; lv = uiLv(t.getAttribute('data-lv')); try { history.replaceState(null, '', '?lv=' + lv); } catch (x) { } draw(); });
    // 別台的成績同步進來（2026-11-19 起 kids_gept 跟著同步）：重讀、重畫
    W.addEventListener('kids-sync-updated', function () { rec0 = ld(); draw(); });
    draw();
  }

  // =====================================================================
  // 題型練習 practice.html（?set=… 或 ?mistakes=1&lv=…）
  // =====================================================================
  function practice() {
    var root = $('gp'), MK = arg('mistakes') === '1', lv = MK ? (/^[eiua]$/.test(arg('lv')) ? arg('lv') : 'e') : lvOf(arg('set')), R = null;
    W.GeptPractice = { R: function () { return R; } };   // 測試用
    function begin(list, title, back, setId) {
      R = { sc: screens(list), i: 0, ok: 0, n: list.length, done: {}, title: title, back: back, setId: setId, grad: 0, wrong: [] };
      var nums = {}; list.forEach(function (Q, i) { nums[Q.id] = i + 1; }); R.num = function (Q) { return nums[Q.id] || ''; };
      show();
    }
    function show() {
      TTS.stop(); var S = R.sc[R.i], P = G.PARTS[lvOf(S.qs[0].id)][S.qs[0].part];
      root.innerHTML = head(esc(R.title), R.back) + '<section class="card"><div class="gp-prog"><span>' + esc(P.n0) + '</span><span class="muted">第 ' + (R.i + 1) + ' / ' + R.sc.length + (S.group ? ' 組' : ' 題') + '・答對 ' + R.ok + ' / ' + R.n + '</span></div>' +
        (S.L ? '<div class="gp-row" style="justify-content:flex-start"><button type="button" class="btn" id="gp-play" disabled>🔊 播放中…</button><span class="gp-note" id="gp-pn">' + (P.play > 1 ? '播 ' + P.play + ' 次' : '只播一次，仔細聽') + '</span></div>' : '') +
        '<div id="gp-scr">' + screenHTML(S, R.num) + '</div><div id="gp-after"></div></section>';
      if (S.L) {
        if (S.group && S.qs[0].kind === 'long') { $('gp-play').disabled = false; $('gp-play').textContent = '▶ 看完題目了，開始播放'; $('gp-pn').textContent = '先看題目（官方有 30～45 秒），準備好再按；只播一次，可以邊聽邊記'; }
        else playNow();
      }
    }
    function playNow() {
      var S = R.sc[R.i], P = G.PARTS[lvOf(S.qs[0].id)][S.qs[0].part], b = $('gp-play'); rateOf(lv);
      if (b) { b.disabled = true; b.textContent = '🔊 播放中…'; }
      TTS.play(audioOf(S, null, R.num), S.group ? 1 : P.play).then(function (fin) { if (fin && b && b.isConnected) { b.textContent = '🔊 播完了'; R.played = true; } });
    }
    function answer(qid, v) {
      var S = R.sc[R.i], Q = S.all[qid]; if (!Q || R.done[qid] != null) return;
      var ok = G.gradeQ(Q, v); R.done[qid] = v; if (ok) R.ok++; else R.wrong.push(Q);
      if (rec(Q, ok) === 'graduated') R.grad++;
      D.querySelectorAll('[data-q="' + qid + '"]').forEach(function (b) { b.disabled = true; var x = +b.getAttribute('data-v'); if (x === Q.q.a) b.classList.add('right'); else if (x === v) b.classList.add('wrong'); });
      var inp = D.querySelector('[data-in="' + qid + '"]'); if (inp) { inp.disabled = true; var okb = D.querySelector('[data-qok="' + qid + '"]'); if (okb) okb.disabled = true; }
      var fb = D.createElement('div'); fb.className = 'gp-fb ' + (ok ? 'ok' : 'no'); fb.setAttribute('data-fb', qid);
      fb.innerHTML = (ok ? '✓ 答對了！' : '✗ 正確答案：<b class="en">' + esc(rightText(Q)) + '</b>') + (lastOld ? oldNote() : '');
      var at = (inp || D.querySelector('[data-q="' + qid + '"]')); at = at && at.closest('.opts,.gp-pics,.gp-row'); if (at) at.insertAdjacentElement('afterend', fb); else $('gp-scr').appendChild(fb);
      if (S.qs.every(function (x) { return R.done[x.id] != null; })) after(S);
    }
    function after(S) {
      var last = R.i + 1 >= R.sc.length;
      $('gp-after').innerHTML = (S.L ? '<details class="gp-d" open><summary>📄 文字稿</summary>' + scriptHTML(S.group || S.qs[0].q, S.qs[0].kind === 'grp') + '<button type="button" class="btn" id="gp-re">🔁 再聽一次</button></details>' : '') +
        '<div class="gp-row"><button type="button" class="btn primary big" id="gp-next">' + (last ? '看結果 🏁' : '下一' + (R.sc[R.i + 1].group ? '組' : '題') + ' ▶') + '</button></div>';
    }
    function end() {
      TTS.stop();
      // 做過幾次（../kids-lock.js）：一組答對 ≥80% 算做完 1 次；要在 saveBest 之前記（才分得出第一次）
      if (R.setId) { if (R.n && R.ok / R.n >= 0.8 && W.KidsLock) KidsLock.bump(R.setId); saveBest(R.setId, R.ok, R.n); coinRound(R.ok, R.n); }
      var p = R.n ? Math.round(R.ok / R.n * 100) : 0;
      root.innerHTML = head(esc(R.title), R.back) + '<section class="card center"><p class="gp-big">' + (p >= 80 ? '🏆' : '💪') + '</p><p class="gp-big" id="gp-res">' + R.ok + ' / ' + R.n + '</p>' +
        (MK ? '<p>' + (R.grad ? '🎓 有 ' + R.grad + ' 題錯題畢業了！' : '同一題連續答對 3 次就會畢業喔！') + '</p>' : '<p>' + (p >= 80 ? '很棒！' : '再練一次會更好！') + (R.wrong.length ? '答錯的題收進 📕 錯題了。' : '') + '</p>') +
        '<div class="gp-row">' + (R.setId ? '<a class="btn primary" href="practice.html?set=' + R.setId + '">再練一次</a>' : '') + '<a class="btn" href="index.html?lv=' + lv + '">回準備區</a>' + (R.wrong.length && !MK ? '<a class="btn" href="practice.html?mistakes=1&lv=' + lv + '">📕 練錯題</a>' : '') + '</div></section>';
      R = null;
    }
    root.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t || !R) return;
      if (t.id === 'gp-next') { R.i++; if (R.i >= R.sc.length) end(); else show(); return; }
      if (t.id === 'gp-play') return playNow();
      if (t.id === 'gp-re') { rateOf(lv); var S = R.sc[R.i]; TTS.stop(); TTS.play(audioOf(S, null, R.num), 1); return; }
      if (t.hasAttribute('data-qok')) { var id = t.getAttribute('data-qok'), inp = D.querySelector('[data-in="' + id + '"]'); if (inp && inp.value.trim()) answer(id, inp.value); return; }
      if (t.hasAttribute('data-q')) answer(t.getAttribute('data-q'), +t.getAttribute('data-v'));
    });
    function intro(set) {
      var part = partOf(set.id), P = G.PARTS[lv][part], list = G.questions(set);
      root.innerHTML = head(esc(G.LV[lv].n + '・' + P.n0), 'index.html?lv=' + lv) + '<section class="card"><h2>' + esc(set.title || set.id) + '（' + list.length + ' 題）</h2><p>' + esc(P.how) + '</p>' +
        (P.s === 'L' ? '<p class="gp-note">🔊 請把聲音打開。作答時看不到文字稿；答完這題才可以看文字稿、再聽一次。</p>' : '') + '<div class="gp-row"><button type="button" class="btn primary big" id="gp-go">開始 ▶</button></div></section>';
      $('gp-go').onclick = function go() { if (!authOK() || !startAct(go)) return; begin(list, G.LV[lv].n + '・' + P.n0, 'index.html?lv=' + lv, set.id); };
    }
    if (MK) {
      var mk = []; try { mk = KidsMistakes.list('gept', lv).slice(0, 30); } catch (e) { }
      if (!mk.length) { root.innerHTML = head('📕 錯題練習', 'index.html?lv=' + lv) + '<section class="card"><p id="gp-mk-empty">目前沒有' + G.LV[lv].n + '錯題 🎉</p></section>'; return; }
      var ids = {}; mk.forEach(function (e) { var s = G.setIdOf(e.id); if (s) ids[s] = 1; });
      Promise.all(Object.keys(ids).map(function (s) { return loadSet(s).catch(function () { return null; }); })).then(function (sets) {
        var want = {}; mk.forEach(function (e) { want[e.id] = 1; });
        var list = []; sets.forEach(function (s) { if (s) G.questions(s).forEach(function (Q) { if (want[Q.id]) list.push(Q); }); });
        root.innerHTML = head('📕 ' + G.LV[lv].n + '錯題練習', 'index.html?lv=' + lv) + '<section class="card"><p>答錯過的 ' + list.length + ' 題再做一次（同一題連續答對 3 次就畢業 🎓）。聽力題一樣只播官方規定的次數。</p><div class="gp-row"><button type="button" class="btn primary big" id="gp-go">開始 ▶</button></div></section>';
        $('gp-go').onclick = function go() { if (!authOK() || !startAct(go)) return; begin(list, G.LV[lv].n + '錯題練習', 'index.html?lv=' + lv, ''); };
      }, function (e) { errBox(root, e); });
      return;
    }
    loadSet(arg('set')).then(intro, function (e) { errBox(root, e); });
  }

  // =====================================================================
  // 模擬考 mock.html?set=e-M-01
  // =====================================================================
  function mock() {
    var root = $('gp'), id = arg('set'), lv = lvOf(id), M = G.MOCK[lv], R = null;
    W.GeptMock = { R: function () { return R; } };   // 測試用
    function partQs(set, p) { return G.questions(set).filter(function (Q) { return Q.part === p; }); }
    function intro(set) {
      var P = G.PARTS[lv], all = G.questions(set), L = G.LV[lv];
      var rows = M.L.map(function (p) { return '<tr><td>聽力</td><td>' + P[p].n0 + '</td><td>' + P[p].n + '</td></tr>'; }).concat(M.R.map(function (r) { return r.parts.map(function (p) { return '<tr><td>閱讀（' + r.min + ' 分鐘）</td><td>' + P[p].n0 + '</td><td>' + P[p].n + '</td></tr>'; }).join(''); })).join('');
      root.innerHTML = head('📝 ' + L.n + '模擬考', 'index.html?lv=' + lv) + '<section class="card"><h2>' + esc(set.title || set.id) + '（' + all.length + ' 題）</h2><div class="gp-wrap"><table class="gp-t"><tr><th>項目</th><th>部分</th><th>題數</th></tr>' + rows + '</table></div>' +
        '<ul><li>聽力約 ' + M.lmin + ' 分鐘，<b>自動播放、每題只播' + (lv === 'a' || lv === 'u' ? '一次' : '官方規定的次數') + '、不能暫停或重播</b>，每題播完有幾秒作答。</li><li>閱讀計時，時間到自動交卷。</li><li>交卷後換算 120 分制：兩項合計 ' + L.pass.sum + ' 分、每項 ' + L.pass.min + ' 分以上算達標（<b>模擬換算，非官方成績</b>）。</li></ul>' +
        '<p class="gp-note">🔊 請把聲音打開、找安靜的地方，中途離開這一頁就要重新考。</p><div class="gp-row"><button type="button" class="btn primary big" id="gp-go">開始考試 ▶</button></div></section>';
      $('gp-go').onclick = function go() {
        if (!authOK() || !startAct(go)) return;
        var lqs = [], n = 0, nums = {};
        M.L.forEach(function (p) { partQs(set, p).forEach(function (Q) { nums[Q.id] = ++n; }); });
        var rn = 0; M.R.forEach(function (r) { r.parts.forEach(function (p) { partQs(set, p).forEach(function (Q) { nums[Q.id] = ++rn; }); }); });
        R = { set: set, ans: {}, nums: nums, pi: 0, phase: 'L', t0: Date.now() };
        R.num = function (Q) { return nums[Q.id] || ''; };
        lpart();
      };
    }
    // ---- 聽力：一部分一部分，自動播 ----
    function lpart() {
      if (R.pi >= M.L.length) { R.phase = 'R'; R.bi = 0; return rblock(); }
      var p = M.L[R.pi], P = G.PARTS[lv][p], qs = partQs(R.set, p);
      R.sc = screens(qs); R.si = 0;
      root.innerHTML = head('📝 聽力 第 ' + (R.pi + 1) + ' 部分', '') + '<section class="card"><h2>' + esc(P.n0) + '（' + qs.length + ' 題）</h2><p>' + esc(P.how) + '</p><div class="gp-row"><button type="button" class="btn primary big" id="gp-lp">開始這一部分 ▶</button></div></section>';
      D.querySelector('.gp-top a').removeAttribute('href');
    }
    function lscreen() {
      var S = R.sc[R.si], P = G.PARTS[lv][S.qs[0].part], my = R.tok = (R.tok || 0) + 1; rateOf(lv);
      root.innerHTML = '<section class="card" id="gp-ls" data-q0="' + esc(S.qs[0].id) + '"><div class="gp-prog"><span>聽力・' + esc(P.n0) + '</span><span class="muted">第 ' + R.num(S.qs[0]) + (S.qs.length > 1 ? '～' + R.num(S.qs[S.qs.length - 1]) : '') + ' 題</span><span class="gp-timer" id="gp-st">🔊</span></div><div class="gp-bar"><i id="gp-bi"></i></div><div id="gp-scr">' + screenHTML(S, R.num) + '</div><div class="gp-row" id="gp-skip"></div></section>';
      mark();
      function go(fn) { return function () { if (R && R.tok === my) fn(); }; }
      var nextS = go(function () { R.si++; if (R.si >= R.sc.length) { R.pi++; lpart(); } else lscreen(); });
      if (S.group && S.qs[0].kind === 'grp') TTS.play(audioOf(S, null, R.num), 1).then(go(function () { count(fastMs(P.wait * 1000 * S.qs.length), '作答', nextS); }));   // 中高級：一段＋問題播一次，每題 12 秒
      else if (S.group) {   // 長篇：先看題目 → 播一次 → 作答時間
        count(fastMs(P.preview * 1000), '先看題目', go(function () {
          $('gp-st').textContent = '🔊 播放中';
          TTS.play(audioOf(S), 1).then(go(function () { $('gp-skip').innerHTML = '<button type="button" class="btn" id="gp-done">我答完了 ▶</button>'; count(fastMs(P.after * 1000), '作答', nextS); }));
        }));
      } else TTS.play(audioOf(S, R.num(S.qs[0])), P.play).then(go(function () { count(fastMs(P.wait * 1000), '作答', nextS); }));
      R.next = nextS;
    }
    function count(ms, label, done) {
      var t0 = Date.now(), my = R.tok, bi = $('gp-bi'), st = $('gp-st');
      (function tick() {
        if (!R || R.tok !== my) return;
        var left = ms - (Date.now() - t0); if (st) st.textContent = label + ' ' + timerTxt(left / 1000); if (bi) bi.style.width = Math.min(100, (Date.now() - t0) / ms * 100) + '%';
        if (left <= 0) return done(); setTimeout(tick, Math.min(250, Math.max(20, left)));
      })();
    }
    function mark() { Object.keys(R.ans).forEach(function (qid) { D.querySelectorAll('[data-q="' + qid + '"]').forEach(function (b) { b.classList.toggle('right', +b.getAttribute('data-v') === R.ans[qid]); }); var inp = D.querySelector('[data-in="' + qid + '"]'); if (inp && inp.value !== R.ans[qid]) inp.value = R.ans[qid]; }); }
    // ---- 閱讀：一個計時段一頁 ----
    function rblock() {
      if (R.bi >= M.R.length) return finish();
      var B = M.R[R.bi], qs = []; B.parts.forEach(function (p) { qs = qs.concat(partQs(R.set, p)); });
      var sc = screens(qs), my = R.tok = (R.tok || 0) + 1, h = '';
      B.parts.forEach(function (p) { var P = G.PARTS[lv][p]; h += '<h2>' + esc(P.n0) + '</h2><p class="gp-note">' + esc(P.how) + '</p>'; sc.filter(function (S) { return S.qs[0].part === p; }).forEach(function (S) { h += '<div class="gp-sub">' + screenHTML(S, R.num) + '</div>'; }); });
      root.innerHTML = '<section class="card" id="gp-rb"><div class="gp-prog" style="position:sticky;top:0;background:#fff;z-index:2;padding:6px 0"><span>閱讀' + (M.R.length > 1 ? ' 第 ' + (R.bi + 1) + ' 段' : '') + '</span><span class="muted" id="gp-rc"></span><span class="gp-timer" id="gp-st"></span></div>' + h +
        '<div class="gp-row"><button type="button" class="btn primary big" id="gp-sub">' + (R.bi + 1 < M.R.length ? '交出這一段 ▶' : '交卷 🏁') + '</button></div></section>';
      R.rq = qs; mark(); rcount();
      var t0 = Date.now(), ms = W.__GEPT_FAST && W.__GEPT_FAST.read ? W.__GEPT_FAST.read : fastMs(B.min * 60000), st = $('gp-st');
      (function tick() { if (!R || R.tok !== my) return; var left = ms - (Date.now() - t0); st.textContent = '⏱ ' + timerTxt(left / 1000); st.classList.toggle('low', left < 120000); if (left <= 0) { R.bi++; return rblock(); } setTimeout(tick, 500); })();
    }
    function rcount() { var c = $('gp-rc'); if (c && R.rq) c.textContent = '已答 ' + R.rq.filter(function (Q) { return R.ans[Q.id] != null && R.ans[Q.id] !== ''; }).length + ' / ' + R.rq.length; }
    // ---- 計分 ----
    function finish() {
      TTS.stop(); R.tok++;
      var all = G.questions(R.set).filter(G.auto), lq = all.filter(function (Q) { return M.L.indexOf(Q.part) >= 0; }), rq = all.filter(function (Q) { return M.L.indexOf(Q.part) < 0; });
      var res = {}, nOld = 0; all.forEach(function (Q) { res[Q.id] = G.gradeQ(Q, R.ans[Q.id]); rec(Q, res[Q.id]); if (lastOld) nOld++; });
      var lc = lq.filter(function (Q) { return res[Q.id]; }).length, rc = rq.filter(function (Q) { return res[Q.id]; }).length, Ls = G.scale(lc, lq.length), Rs = G.scale(rc, rq.length), pass = G.passLR(lv, Ls, Rs), L = G.LV[lv];
      if (W.KidsLock) KidsLock.bump(R.set.id); saveMock({ id: R.set.id, t: Date.now(), lc: lc, ln: lq.length, rc: rc, rn: rq.length, L: Ls, R: Rs, pass: pass }); coinRound(lc + rc, all.length);
      var parts = M.L.concat.apply(M.L, M.R.map(function (r) { return r.parts; }));
      var rev = parts.map(function (p) {
        var qs = all.filter(function (Q) { return Q.part === p; }), c = qs.filter(function (Q) { return res[Q.id]; }).length, isL = M.L.indexOf(p) >= 0;
        return '<details class="gp-d"><summary>' + (isL ? '聽力' : '閱讀') + '・' + esc(G.PARTS[lv][p].n0) + '　' + c + ' / ' + qs.length + '</summary>' + qs.map(function (Q) {
          var ok = res[Q.id];
          return '<div class="gp-ri ' + (ok ? 'ok' : 'no') + '"><span class="mk">' + (ok ? '✓' : '✗') + ' ' + R.num(Q) + '.</span>' + (Q.q.q && Q.kind !== 'pic' ? '<span class="en">' + esc(Q.q.q) + '</span><br>' : '') + '你的答案：<span class="en">' + esc(answerText(Q, R.ans[Q.id])) + '</span>' + (ok ? '' : '　正確：<b class="en">' + esc(rightText(Q)) + '</b>') +
            (isL && (!Q.group || Q.group.qs[0].id === Q.id) ? scriptHTML(Q.group || Q.q, Q.kind === 'grp') : '') + '</div>';
        }).join('') + '</details>';
      }).join('');
      root.innerHTML = head('📝 ' + L.n + '模擬考結果', 'index.html?lv=' + lv) + '<section class="card center"><p class="gp-big" id="gp-pass">' + (pass ? '🎉 達到通過標準' : '💪 還沒達到通過標準') + '</p>' +
        '<div class="gp-score"><div>聽力<b id="gp-L">' + Ls + '</b>' + lc + ' / ' + lq.length + ' 題</div><div>閱讀<b id="gp-R">' + Rs + '</b>' + rc + ' / ' + rq.length + ' 題</div><div>合計<b>' + (Ls + Rs) + '</b>通過要 ' + L.pass.sum + '、各 ' + L.pass.min + '</div></div>' +
        '<p class="gp-note">模擬換算，非官方成績：分數＝答對題數 ÷ 總題數 × 120。官方是量尺分數（換算方式不公開），實際分數可能不同。答錯的題收進 📕 錯題了。</p>' + (nOld ? oldNote('這份考卷有 ' + nOld + ' 題你已經會了（學過 2 次），不算今天的題數，去做新的一份吧') : '') + '</section><section class="card"><h2>逐題檢討</h2>' + rev +
        '<div class="gp-row"><a class="btn primary" href="index.html?lv=' + lv + '">回準備區</a><a class="btn" href="practice.html?mistakes=1&lv=' + lv + '">📕 練錯題</a></div></section>';
      R.result = { lc: lc, rc: rc, L: Ls, R: Rs, pass: pass };
    }
    root.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t || !R) return;
      if (t.id === 'gp-lp') return lscreen();
      if (t.id === 'gp-done') { if (R.next) R.next(); return; }
      if (t.id === 'gp-sub') {
        var left = R.rq.filter(function (Q) { return R.ans[Q.id] == null || R.ans[Q.id] === ''; }).length;
        if (left && !W.__GEPT_FAST && !confirm('還有 ' + left + ' 題沒作答，確定要交嗎？')) return;
        R.tok++; R.bi++; return rblock();
      }
      if (t.hasAttribute('data-qok')) { var qid = t.getAttribute('data-qok'), inp = D.querySelector('[data-in="' + qid + '"]'); if (inp) { R.ans[qid] = inp.value.trim(); t.textContent = '✓ 已記下'; rcount(); } return; }
      if (t.hasAttribute('data-q')) { R.ans[t.getAttribute('data-q')] = +t.getAttribute('data-v'); mark(); rcount(); }
    });
    root.addEventListener('input', function (e) { var t = e.target; if (R && t.hasAttribute && t.hasAttribute('data-in')) { R.ans[t.getAttribute('data-in')] = t.value.trim(); rcount(); } });
    W.addEventListener('beforeunload', function (e) { if (R && !R.result) { e.preventDefault(); e.returnValue = ''; } });
    if (!/^[eiua]-M-\d\d$/.test(id)) return errBox(root, '沒有這份模擬考');
    loadSet(id).then(intro, function (e) { errBox(root, e); });
  }

  // =====================================================================
  // 寫作、口說 task.html?set=e-W1-01
  // =====================================================================
  function task() {
    var root = $('gp'), id = arg('set'), lv = lvOf(id), part = partOf(id), P = (G.PARTS[lv] || {})[part];
    W.GeptTask = {};
    if (!P || (P.s !== 'W' && P.s !== 'S')) return errBox(root, '沒有這組題目');
    var back = 'index.html?lv=' + lv, L = G.LV[lv], tPrev = taskPrev(id);   // 這組這次之前做過幾次（≥ 2＝不算每日清單）
    function bandHTML(name, max, label) { var b = []; for (var i = 0; i <= max; i++) b.push('<button type="button" class="btn" data-band="' + name + '" data-v="' + i + '" aria-pressed="false">' + i + '</button>'); return '<p><b>' + label + '</b></p><div class="gp-band">' + b.join('') + '</div>'; }
    function pickBand(t) { var n = t.getAttribute('data-band'); D.querySelectorAll('[data-band="' + n + '"]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); }); return +t.getAttribute('data-v'); }
    function otherPart(p) { var x = (ld().task || {}), k = Object.keys(x).filter(function (s) { return lvOf(s) === lv && partOf(s) === p; }).sort(function (a, b) { return x[b].t - x[a].t; })[0]; return k ? x[k] : null; }
    function scoreLine() {   // 兩部分都評過才換算官方公式
      if (P.s === 'W') {
        var w1 = part === 'W1' ? (ld().task || {})[id] : otherPart('W1'), w2 = part === 'W2' ? (ld().task || {})[id] : otherPart('W2');
        if (lv === 'a') return '高級寫作每一部分 0～5 級分，3 級＝通過。';
        if (!w1 || !w2) return '兩部分都評完分，這裡會照官方公式換算寫作分數（通過 ' + L.wpass + ' 分）。';
        var s = G.writeScore(lv, lv === 'e' ? w1.sc : w1.b, w2.b);
        return '寫作換算（最近一次第一、二部分）：<b>' + s + ' 分</b>（通過 ' + L.wpass + '）' + (s >= L.wpass ? ' 🎉' : '') + '　<span class="gp-note">' + (lv === 'e' ? '{(第一部分 ÷ 30)＋(第二部分級分 ÷ 5)} × 50' : '第一部分級分×20×40%＋第二部分級分×20×60%') + '</span>';
      }
      return '';
    }
    loadSet(id).then(function (set) {
      var items = set.items, h = head((P.s === 'W' ? '✍️ ' : '🎤 ') + esc(L.n + '・' + P.n0), back) + '<section class="card"><h2>' + esc(set.title || set.id) + '</h2><p>' + esc(P.how) + '</p>';
      if (P.s === 'W') h += writeHTML(items) + '</section><section class="card" id="gp-check" hidden></section>';
      else h += '<p class="gp-note">🔊 題目用語音念' + (P.play > 1 ? '（播 ' + P.play + ' 次）' : '') + '，倒數計時內開口說。網站不錄音、不打分數：說完看範例回答，自己或家長照評分要點打級分。</p><div class="gp-row"><button type="button" class="btn primary big" id="gp-go">開始 ▶</button></div></section><section class="card" id="gp-sp" hidden></section><section class="card" id="gp-check" hidden></section>';
      root.innerHTML = h;
      if (P.s === 'W') bindWrite(set); else bindSpeak(set);
    }, function (e) { errBox(root, e); });

    // ---------- 寫作 ----------
    function writeHTML(items) {
      if (P.kind === 'wsent') {
        var T = { rewrite: 'A. 句子改寫：依照第二句的提示，改寫第一句。', combine: 'B. 句子合併：依照提示，把兩句合成一句。', order: 'C. 重組：用上所有提示的字詞，組成一個有意義的句子（不能增減）。' }, last = '';
        return items.map(function (q, i) {
          var hd = q.type !== last ? '<h3>' + T[q.type] + '</h3>' : ''; last = q.type;
          var body = q.type === 'order' ? '<p class="en">' + esc(q.frame || '') + '</p><p class="en">' + q.parts.map(function (p) { return '<span class="gp-tag">' + esc(p) + '</span>'; }).join(' ') + '</p>' : '<p class="en">' + esc(q.s1) + (q.s2 ? '<br>' + esc(q.s2) : '') + '</p>' + (q.frame ? '<p class="en">' + esc(q.frame) + '</p>' : '');
          return hd + '<div class="gp-sub"><span class="gp-num">' + (i + 1) + '</span>' + body + '<input class="gp-in en" data-w="' + i + '" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" placeholder="寫出完整的句子"></div>';
        }).join('') + '<div class="gp-row"><button type="button" class="btn primary big" id="gp-wdone">寫完了，對答案 ▶</button></div>';
      }
      var q = items[0], x = '<div class="gp-text">' + esc(q.prompt) + '</div>';
      if (q.zh) x += '<div class="gp-text">' + paras(q.zh) + '</div>';
      if (q.pics) x += '<div class="gp-pics">' + q.pics.map(function (p, i) { return '<div class="gp-pic"><b>' + (i + 1) + '</b>' + picHTML(p) + '</div>'; }).join('') + '</div>';
      (q.sources || []).forEach(function (s) { x += '<div class="gp-text en"><h4>' + esc(s.title) + '</h4>' + (s.author ? '<p class="hd">' + esc(s.author) + '</p>' : '') + paras(s.body) + '</div>'; });
      (q.charts || []).forEach(function (c) { x += tableHTML(c); });
      return x + '<p class="gp-note">可以寫在紙上，也可以打在下面（' + (P.wtxt ? P.wtxt + '；' : P.words ? '約 ' + P.words + ' 字；' : '') + (P.min ? '官方 ' + P.min + ' 分鐘' : '寫作共 ' + (L.wmin || 40) + ' 分鐘') + '）。</p><textarea class="gp-in en" id="gp-ta" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Write here…"></textarea><p class="gp-note" id="gp-wc">0 字</p>' +
        '<div class="gp-row"><button type="button" class="btn primary big" id="gp-wdone">寫完了，看範文 ▶</button></div>';
    }
    function bindWrite(set) {
      var items = set.items, ta = $('gp-ta');
      if (ta) ta.addEventListener('input', function () { $('gp-wc').textContent = G.words(ta.value) + ' 字'; });
      root.addEventListener('click', function (e) {
        var t = e.target.closest('button'); if (!t) return;
        if (t.id === 'gp-wdone') { if (!authOK()) return; t.disabled = true; items.forEach(function () { recOpen(tPrev); }); checkW(set); if (lastOld && $('gp-check')) $('gp-check').insertAdjacentHTML('afterbegin', oldNote('這一組你已經做過 2 次了，不算今天的題數，去做新的一組吧')); return; }
        if (t.hasAttribute('data-band')) {
          var v = pickBand(t), n = t.getAttribute('data-band');
          if (P.kind === 'wsent') { W.GeptTask.s = W.GeptTask.s || {}; W.GeptTask.s[n] = v; var tot = 0, k = 0; items.forEach(function (_, i) { var x = W.GeptTask.s['s' + i]; if (x != null) { tot += x; k++; } }); $('gp-tot').textContent = tot + ' / 30' + (k < items.length ? '（還有 ' + (items.length - k) + ' 題沒評）' : ''); if (k === items.length) { saveTask(id, { sc: tot }); $('gp-sl').innerHTML = scoreLine(); } }
          else { saveTask(id, { b: v }); $('gp-sl').innerHTML = scoreLine(); }
        }
      });
    }
    function checkW(set) {
      var items = set.items, box = $('gp-check'), h = '<h2>對答案・家長評分</h2>';
      if (P.kind === 'wsent') {
        h += '<p class="gp-note">每題 2 分＝正確、1 分＝有錯但重點結構對、0 分＝錯太多或沒寫（評分重點：內容、文法、用字、標點、大小寫）。跟參考答案一模一樣的已經先選 2 分，家長可以改。</p>';
        items.forEach(function (q, i) {
          var mine = (D.querySelector('[data-w="' + i + '"]') || {}).value || '', same = q.ans.some(function (a) { return G.norm(a) === G.norm(mine) && /^[A-Z]/.test(mine.trim()) && /[.?!]$/.test(mine.trim()); });
          h += '<div class="gp-ri ' + (same ? 'ok' : 'no') + '"><span class="mk">' + (i + 1) + '.</span>你寫的：<span class="en">' + esc(mine || '（沒寫）') + '</span><br>參考答案：<b class="en">' + esc(q.ans[0]) + '</b>' + (q.ans.length > 1 ? '<br><span class="gp-note">也可以：' + esc(q.ans.slice(1).join(' ／ ')) + '</span>' : '') +
            '<div class="gp-band">' + [2, 1, 0].map(function (v) { return '<button type="button" class="btn" data-band="s' + i + '" data-v="' + v + '" aria-pressed="false">' + v + ' 分</button>'; }).join('') + '</div></div>';
        });
        h += '<p class="gp-big" id="gp-tot">— / 30</p><p id="gp-sl"></p>';
        box.innerHTML = h; box.hidden = false;
        items.forEach(function (q, i) { var mine = (D.querySelector('[data-w="' + i + '"]') || {}).value || ''; if (q.ans.some(function (a) { return G.norm(a) === G.norm(mine) && /^[A-Z]/.test(mine.trim()) && /[.?!]$/.test(mine.trim()); })) box.querySelector('[data-band="s' + i + '"][data-v="2"]').click(); });
      } else {
        var q = items[0];
        h += '<h3>範文</h3><div class="gp-text en">' + paras(q.model) + '</div><h3>評分要點</h3><ul>' + q.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + (lv === 'u' ? '<li>詞表外的字（例如 app、viral、reservoir）只要用對就不扣分</li>' : '') + '</ul>' +
          bandHTML('b', 5, '整體級分（0～5；' + (lv === 'a' ? '3 級＝通過' : '5 最好') + '）') + '<p id="gp-sl">' + scoreLine() + '</p>';
        box.innerHTML = h; box.hidden = false;
      }
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ---------- 口說 ----------
    function bindSpeak(set) {
      var items = set.items, sp = $('gp-sp'), my = 0, q0 = items[0];
      function stage(html) { sp.hidden = false; sp.innerHTML = html; }
      function cd(sec, label, done) {
        var t0 = Date.now(), ms = fastMs(sec * 1000), me = my;
        stage((sp.querySelector('#gp-keep') ? sp.querySelector('#gp-keep').outerHTML : '') + '<div class="gp-prog"><span>' + label + '</span><span class="gp-timer" id="gp-st"></span></div><div class="gp-bar"><i id="gp-bi"></i></div><div class="gp-row"><button type="button" class="btn" id="gp-skipc">提早結束 ▶</button></div>');
        (function tick() { if (me !== my) return; var left = ms - (Date.now() - t0), st = $('gp-st'), bi = $('gp-bi'); if (st) st.textContent = timerTxt(left / 1000); if (bi) bi.style.width = Math.min(100, (Date.now() - t0) / ms * 100) + '%'; if (left <= 0) { my++; return done(); } setTimeout(tick, 200); })();
        $('gp-skipc').onclick = function () { my++; done(); };
      }
      function keep(html) { return '<div id="gp-keep">' + html + '</div>'; }
      var steps = [], si = 0;
      function next() { if (si < steps.length) steps[si++](); else finishS(); }
      rateOf(lv);
      if (P.kind === 'srepeat' || P.kind === 'sanswer') items.forEach(function (q, i) {
        steps.push(function () { stage(keep('<p class="gp-q"><span class="gp-num">' + (i + 1) + '</span>' + (P.kind === 'srepeat' ? '仔細聽，聽完馬上跟著唸' : '仔細聽問題') + '</p>') + '<p class="gp-note">🔊 播放中…</p>'); TTS.play([{ t: q.say, spk: 'F' }], P.play).then(function () { cd(q.sec || P.sec, P.kind === 'srepeat' ? '換你唸！' : '換你回答！', function () { recOpen(); next(); }); }); });
      });
      else if (P.kind === 'sread') {
        var txt = keep((q0.sents ? '<ol class="en">' + q0.sents.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' : '') + '<div class="gp-text en">' + paras(q0.passage) + '</div>');
        steps.push(function () { stage(txt); cd(P.prep, '先默讀（不出聲）', next); }, function () { stage(txt); cd(P.sec, '開始朗讀！', function () { recOpen(tPrev); next(); }); });
      } else if (P.kind === 'spic') {
        var pv = keep('<div class="gp-pic">' + picHTML(q0.pic) + '</div><ol class="en">' + q0.qs.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>');
        steps.push(function () { stage(pv); cd(P.prep, '看圖和問題', next); }, function () { stage(pv); cd(P.sec, '開始回答（不用唸題號）', function () { recOpen(tPrev); next(); }); });
      } else if (P.kind === 'sint') {
        var pr = keep('<div class="gp-text">' + esc(q0.prompt) + '</div>');
        if (P.prep) steps.push(function () { stage(pr); cd(P.prep, '準備', next); });
        (q0.say && q0.say.length ? q0.say : ['']).forEach(function (s, i) {
          steps.push(function () { stage(pr + (s ? '<p class="gp-note">🔊 考官問題 ' + (i + 1) + '</p>' : '')); (s ? TTS.play([{ t: s, spk: 'M' }], 1) : Promise.resolve()).then(function () { cd(P.sec, '換你說！', next); }); });
        });
        steps.push(function () { recOpen(tPrev); next(); });
      }
      function finishS() {
        TTS.stop(); var box = $('gp-check'), h = '<h2>看範例・自評</h2>';
        if (P.kind === 'srepeat') h += '<ol class="en">' + items.map(function (q) { return '<li>' + esc(q.say) + '</li>'; }).join('') + '</ol>';
        else if (P.kind === 'sanswer') h += items.map(function (q, i) { return '<div class="gp-ri"><span class="mk">' + (i + 1) + '.</span><span class="en">' + esc(q.say) + '</span><br>範例：<span class="en">' + esc(q.sample) + '</span>（' + q.sec + ' 秒）</div>'; }).join('');
        else { if (q0.sample) h += '<h3>範例回答</h3><div class="gp-text en">' + paras(q0.sample) + '</div>'; if (q0.say) h += '<p class="gp-note en">' + q0.say.map(esc).join('<br>') + '</p>'; if (q0.points) h += '<h3>評分要點</h3><ul>' + q0.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>'; }
        if (lv === 'e') h += '<p class="gp-note">初級口說：項目一（發音、語調、流利度，看全部三部分）＋項目二（文法、字彙，只看回答問題），各 0～5 級，(項目一＋項目二)×10，通過 80。</p>' + bandHTML('b1', 5, '項目一 發音語調流利度') + (part === 'S3' ? bandHTML('b2', 5, '項目二 文法字彙') : '');
        else h += bandHTML('b1', 5, lv === 'i' || lv === 'u' ? '整體級分（0～5，×20＝分數，通過 80＝4 級）' : '整體級分（0～5，3 級＝通過）');
        h += '<p id="gp-sl"></p><div class="gp-row"><a class="btn primary" href="' + back + '">回準備區</a><a class="btn" href="task.html?set=' + id + '">再做一次</a></div>';
        box.innerHTML = h; box.hidden = false; sp.hidden = true;
        var b = {};
        box.onclick = function (e) {
          var t = e.target.closest('[data-band]'); if (!t) return; b[t.getAttribute('data-band')] = pickBand(t); saveTask(id, { b: b.b1, b2: b.b2 });
          $('gp-sl').innerHTML = lv === 'e' ? (b.b1 != null && b.b2 != null ? '換算：(' + b.b1 + '＋' + b.b2 + ')×10＝<b>' + G.speakScore('e', b.b1, b.b2) + ' 分</b>（通過 80）' : '') : lv === 'i' || lv === 'u' ? '換算：<b>' + G.speakScore(lv, b.b1) + ' 分</b>（通過 80）' : (b.b1 >= 3 ? '3 級以上＝通過標準 🎉' : '要 3 級才通過');
        };
      }
      $('gp-go').onclick = function go() { if (!authOK() || !startAct(go)) return; $('gp-go').disabled = true; si = 0; next(); };
      W.GeptTask.skip = function () { var b = $('gp-skipc'); if (b) b.click(); };
    }
  }

  // =====================================================================
  // 中級、高級單字 words.html?lv=i|a（初級用英文區單字卡：#learn/words/moe1200、moe800、gept1）
  // 詞表只有英文（CEFR-J、Octanove 沒有中文、詞性），所以這頁做「點字聽發音＋聽寫拼字」；只列教育部 2000 字＋初級補充字以外的字。
  // =====================================================================
  function wordList(lv) {
    var V = W.GEPT_VOCAB || {}, cj = V.cefrj || {}, base = G.lexOf('e', V), seen = {}, out = [];
    var lvls = lv === 'a' ? ['B2', 'C1'] : lv === 'u' ? ['B2'] : ['A1', 'A2', 'B1'];
    if (lv === 'a' || lv === 'u') { ['A1', 'A2', 'B1'].forEach(function (k) { (cj[k] || []).forEach(function (w) { seen[w.toLowerCase()] = 1; }); }); }   // 高級頁不重列中級的字
    lvls.forEach(function (k) {
      (k === 'C1' ? V.c1 || [] : cj[k] || []).forEach(function (raw) {
        var w = String(raw).split('/')[0].trim(), key = String(raw).toLowerCase();
        if (!/^[A-Za-z]/.test(w) || seen[key]) return; seen[key] = 1;
        if (G.tokens(w).every(function (t) { return G.stems(t.k, 'e').some(function (s) { return base[s]; }); })) return;   // 初級已有
        out.push({ w: w, c: k });
      });
    });
    return out;
  }
  function words() {
    var root = $('gp'), lv = /^[ua]$/.test(arg('lv')) ? arg('lv') : 'i', L = G.LV[lv], all = wordList(lv), lvls = lv === 'a' ? ['B2', 'C1'] : lv === 'u' ? ['B2'] : ['A1', 'A2', 'B1'];
    var F = { c: '', q: '', page: 0 }, PAGE = 80, Z = null;
    W.GeptWords = { all: function () { return all; }, Z: function () { return Z; } };   // 測試用
    function pick() { var q = F.q.trim().toLowerCase(); return all.filter(function (x) { return (!F.c || x.c === F.c) && (!q || x.w.toLowerCase().indexOf(q) >= 0); }); }
    function say(w) { TTS.stop(); rateOf(lv); TTS.speak(w, 'N'); }
    function draw() {
      var list = pick(), pages = Math.max(1, Math.ceil(list.length / PAGE)); F.page = Math.min(F.page, pages - 1);
      var show = list.slice(F.page * PAGE, F.page * PAGE + PAGE);
      $('gp-wn').textContent = '這裡有 ' + list.length + ' 個字' + (pages > 1 ? '（第 ' + (F.page + 1) + '／' + pages + ' 頁）' : '') + '，點字就會唸';
      $('gp-wl').innerHTML = show.map(function (x) { return '<button type="button" class="btn gp-w en" data-say="' + esc(x.w) + '"><span class="syl">' + esc(x.w) + '</span><small>' + x.c + '</small></button>'; }).join('');
      $('gp-wp').innerHTML = pages > 1 ? '<button type="button" class="btn" data-pg="-1"' + (F.page ? '' : ' disabled') + '>⬅️ 上一頁</button><span>' + (F.page + 1) + ' / ' + pages + '</span><button type="button" class="btn" data-pg="1"' + (F.page < pages - 1 ? '' : ' disabled') + '>下一頁 ➡️</button>' : '';
    }
    function list0() {
      Z = null; TTS.stop();
      root.innerHTML = head('🔤 ' + L.n + '單字', 'index.html?lv=' + lv) + '<section class="card"><p>' + L.n + '的單字範圍＝教育部 2000 字＋' + (lv === 'a' ? 'CEFR-J A1～B2＋Octanove C1' : lv === 'u' ? 'CEFR-J A1～B2' : 'CEFR-J A1～B1') + '。教育部 2000 字在英文區單字卡（有中文）；這裡列' + (lv === 'a' ? '中級單字頁以外、B2 和 C1' : lv === 'u' ? '中級單字頁以外的 B2' : '教育部 2000 字以外') + '的 ' + all.length + ' 個字。</p>' +
        '<p class="gp-note">這份詞表只有英文（沒有中文意思和詞性），所以這裡練「聽發音＋聽寫拼字」；不知道意思的字可以查字典或問爸媽。</p>' +
        '<div class="gp-row" style="justify-content:flex-start"><input id="gp-wq" class="gp-in en" style="max-width:260px" type="search" placeholder="🔍 搜尋" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="搜尋單字">' +
        '<div class="gp-sets" role="group" aria-label="程度">' + [''].concat(lvls).map(function (k) { return '<button type="button" class="btn" data-c="' + k + '" aria-pressed="' + (F.c === k) + '">' + (k || '全部') + '</button>'; }).join('') + '</div>' +
        '<button type="button" class="btn primary" id="gp-wgo">🎧 聽寫 10 個字</button></div><p class="muted" id="gp-wn"></p><div class="gp-wl" id="gp-wl"></div><div class="gp-row" id="gp-wp"></div>' +
        '<p class="gp-note">字表來源：CEFR-J Vocabulary Profile 1.5（Tono Laboratory, TUFS）' + (lv === 'a' ? '；Octanove Vocabulary Profile C1（Octanove Labs，CC BY-SA 4.0）' : '') + '。</p></section>';
      var q = $('gp-wq'); q.value = F.q; q.oninput = function () { F.q = q.value; F.page = 0; draw(); };
      draw();
    }
    // 聽寫：從目前篩選的字（單一字、3 個字母以上）隨機 10 個
    function quiz() {
      if (!authOK() || !startAct(quiz)) return;
      var all = pick().filter(function (x) { return /^[A-Za-z]{3,}$/.test(x.w); }), qs = [], isOld = function (x) { return okN('w:' + x.w.toLowerCase()) >= 2; };
      // 先抽學過不到 2 次的字，不夠 10 個才用學過的（2026-11-21）
      [all.filter(function (x) { return !isOld(x); }), all.filter(isOld)].forEach(function (pool) { while (pool.length && qs.length < 10) qs.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]); });
      if (!qs.length) return;
      Z = { qs: qs, i: 0, ok: 0 }; one();
    }
    function one() {
      var x = Z.qs[Z.i];
      root.innerHTML = head('🎧 ' + L.n + '單字聽寫', 'words.html?lv=' + lv) + '<section class="card"><div class="gp-prog"><span>聽寫拼字</span><span class="muted">第 ' + (Z.i + 1) + ' / ' + Z.qs.length + ' 題・答對 ' + Z.ok + '</span></div>' +
        '<div class="gp-row"><button type="button" class="btn big" id="gp-ws">🔊 再聽一次</button></div><div class="gp-row"><input id="gp-wi" class="gp-in en" style="max-width:360px" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="聽到什麼字？" aria-label="拼出聽到的字"><button type="button" class="btn primary" id="gp-wok">確定</button></div><div id="gp-wf"></div></section>';
      say(x.w);
      var inp = $('gp-wi'); inp.onkeydown = function (e) { if (e.key === 'Enter') $('gp-wok').click(); };
    }
    function check() {
      var x = Z.qs[Z.i], inp = $('gp-wi'); if (!inp || inp.disabled || !inp.value.trim()) return;
      var ok = inp.value.trim().toLowerCase() === x.w.toLowerCase(); inp.disabled = true; $('gp-wok').disabled = true; if (ok) Z.ok++;
      try { if (W.KidsCoins) KidsCoins.answer(ok, 'english'); } catch (e) { } dailyRec('w:' + x.w.toLowerCase(), ok);
      var last = Z.i + 1 >= Z.qs.length;
      $('gp-wf').innerHTML = '<div class="gp-fb ' + (ok ? 'ok' : 'no') + '" id="gp-wr">' + (ok ? '✓ 答對了！' : '✗ 正確拼法：') + '<b class="en syl">' + esc(x.w) + '</b>（' + x.c + '）' + (lastOld ? oldNote() : '') + '</div><div class="gp-row"><button type="button" class="btn primary big" id="gp-wnx">' + (last ? '看結果 🏁' : '下一題 ▶') + '</button></div>';
    }
    root.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.hasAttribute('data-say')) return say(t.getAttribute('data-say'));
      if (t.hasAttribute('data-c')) { F.c = t.getAttribute('data-c'); F.page = 0; D.querySelectorAll('[data-c]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); }); return draw(); }
      if (t.hasAttribute('data-pg')) { F.page += +t.getAttribute('data-pg'); draw(); return W.scrollTo(0, 0); }
      if (t.id === 'gp-wgo') return quiz();
      if (!Z) return;
      if (t.id === 'gp-ws') return say(Z.qs[Z.i].w);
      if (t.id === 'gp-wok') return check();
      if (t.id === 'gp-wnx') { Z.i++; if (Z.i < Z.qs.length) return one(); TTS.stop(); root.innerHTML = head('🎧 ' + L.n + '單字聽寫', 'words.html?lv=' + lv) + '<section class="card center"><p class="gp-big" id="gp-wres">' + Z.ok + ' / ' + Z.qs.length + '</p><div class="gp-row"><button type="button" class="btn primary" id="gp-wback">回單字表</button></div></section>'; return; }
      if (t.id === 'gp-wback') return list0();
    });
    list0();
  }

  W.GeptPage = { home: home, practice: practice, mock: mock, task: task, words: words, _: { screens: screens, screenHTML: screenHTML, ld: ld, wordList: wordList } };
})(window);
