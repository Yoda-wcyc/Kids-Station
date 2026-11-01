/* mindmap.js — 社會科／自然科心智圖引擎（兩科共用；2026-10-09 由 demo 定版）
 * 頁面：mindmap/social.html、mindmap/science.html（<body data-subj="social|science">），?u=<單元id> 只開那一個單元。
 * 四模式：📖 看重點（免登入）／🧠 背架構／✏️ 考考自己／📝 練習題（後三者開始時 KidsAuth.requireLogin＋startActivity(科)）。
 * 🧩 素養題組（2026-11-01）：每單元 5 組「資料＋4 題」（data/<科>/lit*.js 的 <資料>.lit[單元id]），題目元件 ../quizkit.js、區塊畫面與判分 ../chinese/reading-core.js；不算單元完成。
 * 📄 單元測驗／📝 段考模擬（2026-11-01）：組卷與判分 exam.js（MMExam），新題在 data/<科>/exam1-4.js；段考頁＝?mock=1（首頁社會、自然各一張卡）；不算單元完成。
 * 🃏 閃卡（2026-11-01）：每單元約 20～40 張名詞卡（data/<科>/cards.js 的 <資料>.cards[單元id]），一輪 15 張：沒看過 → 記不得的 → 到期該複習的；「再想想」收進錯題庫（k 'F'）。
 * 🗺️ 互動圖題（社會）／🧪 實驗模擬（自然）（2026-11-02，mode 'ia'）：題目元件 interactive.js（MMInteractive），資料 data/<科>/interactive.js 的 <資料>.ia[單元id]；
 *   一輪 10 題（沒做過的 → 錯題庫裡的 → 其他，照 d 由易到難），走練習題的畫面（QZ.ia）；錯題 '<單元>|I|<題id>'（重做時從題目的 init 重現同一張圖）；不算單元完成。
 * 🔁 今天要複習（2026-11-01，?review=1；首頁社會、自然的「今天要複習 N 題」）：錯題庫裡到期的題＋閃卡混成一輪，隔 1 → 3 → 7 天（規則在 ../kids-mistakes.js）。
 * 學習幣：每次作答 KidsCoins.answer(ok, 科)（閃卡是自己判斷記不記得，不算學習幣）；一輪結束 KidsCoins.report({type:'practice_round', item:'<科>:<arch|cloze|quiz>', correct, total})。
 * 紀錄：localStorage kids_mm_progress／kids_mm_blanks（key＝'<科>:<單元id>'）、kids_mm_ui（key＝科）；舊的 kids_social_* 會自動搬過來。
 * 抽題規則與資料格式見 data/FORMAT.md。 */
(function(){
'use strict';
var SUBJ = (document.body && document.body.getAttribute('data-subj')) || 'social';
var CFGS = {
  social:  {name:'社會', icon:'🌏', data:'DATA_SOCIAL',  lesson:'課',   l4Kid:'主題', l4Title:'的標題（問句）', l4Ph:'例如：……如何……？'},
  science: {name:'自然', icon:'🔬', data:'DATA_SCIENCE', lesson:null,   l4Kid:'小分支', l4Title:'', l4Ph:'寫出這個大分支的名稱'}
};
var CFG = CFGS[SUBJ] || CFGS.social;
var D = window[CFG.data] || {units:[], alts:{}};
D.alts = D.alts || {};
var ALL_UNITS = D.units.slice();
var ONLY = (function(){ var m = /[?&]u=([a-z0-9-]+)/i.exec(location.search); return m ? m[1] : ''; })();
if(ONLY && ALL_UNITS.some(function(u){ return u.id === ONLY; })) D.units = ALL_UNITS.filter(function(u){ return u.id === ONLY; });
var DEMO = /[?&]demo=1/.test(location.search);
var IN_FRAME = (function(){ try{ return window.top !== window; }catch(e){ return true; } })();
var SB = window.SocialBlanks;
var SEED = (function(){ var m = /[?&]seed=(\d+)/.exec(location.search); return m ? +m[1] : (Date.now() % 2147483647); })();
var R = SB.rng(SEED);
var NUM = ['零','一','二','三','四','五','六','七','八','九','十','十一','十二'];
var LCOL = [
  {bg:'#ffd166',ln:'#e09a00',bd:'#f0b429'},
  {bg:'#8ad3ff',ln:'#2b8fd6',bd:'#5bb8f0'},
  {bg:'#ffadad',ln:'#e05656',bd:'#f08a8a'},
  {bg:'#b8e986',ln:'#4f9e22',bd:'#8fd05a'},
  {bg:'#d5b8ff',ln:'#8350d6',bd:'#b391f0'}];
var PAIRC = ['#ff8a3d','#2b8fd6','#2fb36d','#8350d6','#e05656','#c08a00'];
var SMIN = 0.2, SMAX = 2.6, DAY = 86400000;
function $(s){ return document.querySelector(s); }
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
function lsGet(k, d){ try{ var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } }
function lsSet(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
function shuffle(a){ return SB.shuffle(a, R); }
function norm(s){ return String(s||'').replace(/[\s　、，,。．.·・\-－—~～（）()「」『』:：;；!！?？"'“”‘’\/【】\[\]]/g,'').replace(/臺/g,'台').replace(/溼/g,'濕').toLowerCase(); }
function matchAns(input, ans, more){ var n = norm(input); if(!n) return false; return [ans].concat(D.alts[ans]||[], more||[]).some(function(a){ return norm(a) === n; }); }
function matchKeys(input, keys){ var n = norm(input); if(!n) return false; return keys.every(function(k){ return n.indexOf(norm(k)) >= 0; }); }
function kidsData(d){ return d.lessons || d.topics || d.children || []; }
function unitLabel(u){ return u.label || ('單元' + (NUM[u.no] || u.no)); }
/* 第 1 層的稱呼：社會「第一課」；自然沒有課，叫「第一個大分支」（節點上不顯示小標） */
function lessonLabel(d, i){ return d.label || (CFG.lesson ? '第' + NUM[i+1] + CFG.lesson : '第' + NUM[i+1] + '個大分支'); }
function lessonLab(d, i){ return d.label || (CFG.lesson ? lessonLabel(d, i) : ''); }

/* ---------- 舊紀錄搬家（demo 用的 kids_social_* → kids_mm_*，只搬一次） ---------- */
var PKEY = 'kids_mm_progress', BKEY = 'kids_mm_blanks', UKEY = 'kids_mm_ui';
function pk(uid){ return SUBJ + ':' + uid; }
function migrateOld(){
  try{
    var moved = false;
    [['kids_social_progress', PKEY], ['kids_social_blanks', BKEY]].forEach(function(x){
      var raw = localStorage.getItem(x[0]); if(raw == null) return;
      var old = JSON.parse(raw) || {}, cur = lsGet(x[1], {});
      Object.keys(old).forEach(function(k){
        if(k === '_clockDays'){ if(cur._clockDays == null) cur._clockDays = old[k]; return; }
        if(cur['social:' + k] == null) cur['social:' + k] = old[k];
      });
      localStorage.setItem(x[1], JSON.stringify(cur)); localStorage.removeItem(x[0]); moved = true;
    });
    var oui = localStorage.getItem('kids_social_ui');
    if(oui != null){ var cu = lsGet(UKEY, {}); if(!cu.social) cu.social = JSON.parse(oui) || {}; localStorage.setItem(UKEY, JSON.stringify(cu)); localStorage.removeItem('kids_social_ui'); moved = true; }
    return moved;
  }catch(e){ return false; }
}
migrateOld();

/* ---------- 登入與學習幣（沿用全站規則；kids-auth.js／kids-coins.js 沒載入時一律放行、不計） ---------- */
var WHY = {ia:SUBJ === 'science' ? '做實驗模擬' : '做互動圖題', arch:'背架構', cloze:'考考自己', quiz:'做練習題', lit:'做素養題組', exam:'做單元測驗', mock:'做段考模擬', card:'翻閃卡'};
function loggedOK(){ var A = window.KidsAuth; try{ return !A || !A.configured() || A.isLoggedIn(); }catch(e){ return true; } }
/* 開始一輪：先登入、再問練習額度（目前免費額度關閉＝照常放行）；retry＝額度閘門先擋、後端說可以時重來一次 */
function gate(mode, retry){
  var A = window.KidsAuth; if(!A) return true;
  try{
    if(!A.requireLogin(WHY[mode] || '開始練習')) return false;
    if(A.startActivity && !A.startActivity(SUBJ, retry)) return false;
  }catch(e){}
  return true;
}
function coinAnswer(ok){ try{ if(window.KidsCoins) window.KidsCoins.answer(!!ok, SUBJ); }catch(e){} }
function coinRound(mode, correct, total){ try{ if(window.KidsCoins && total > 0) window.KidsCoins.report({type:'practice_round', item:SUBJ + ':' + mode, correct:correct, total:total}); }catch(e){} }

/* ---------- 錯題庫（../kids-mistakes.js；沒載入就不記）----------
   考考自己答錯的詞（連同那句重點）、背架構答錯的節點（連同上層位置）、練習題答錯的題目 → kids_mistakes[科]；
   社會、自然的錯題走 🔁 隔天複習：隔 1、3、7 天各到期答對一次才畢業（2026-11-01，規則在 kids-mistakes.js）。id／p 的格式見 kids-mistakes.js 檔頭。 */
function KMx(){ return window.KidsMistakes || null; }
function mkRec(id, ok, p){ try{ var K = KMx(); return K ? K.record(SUBJ, id, ok, ok ? null : p) : null; }catch(e){ return null; } }
/* 背架構節點的上層位置：「單元二 › 第一課 › ___」；第 1 層本身＝「單元二 › ___（第一課）」 */
function archPath(u, id){
  var by = {}; SB.archNodes(u).forEach(function(x){ by[x.d.id] = x; });
  var x = by[id]; if(!x) return null;
  var chain = []; for(var y = x; y; y = by[y.parent.id]) chain.unshift(y);
  var parts = [unitLabel(u)];
  chain.slice(0, -1).forEach(function(y){ parts.push(y.depth === 1 ? lessonLabel(y.d, y.li) : y.d.title); });
  parts.push(x.depth === 1 ? '___（' + lessonLabel(x.d, x.li) + '）' : '___');
  return {path:parts.join(' › '), title:x.d.title, x:x};
}
function mkArch(id, ok){ if(!KMx() || MKMODE) return; var u = unit(), s = archPath(u, id); if(!s || s.x.nq) return; mkRec(u.id + '|a|' + id, ok, {u:u.id, k:'a', s:s.path, a:s.title}); }
function mkBlank(b, ok){ if(!KMx() || MKMODE) return; var u = unit(), np = npByPid(b.node, b.pi); mkRec(u.id + '|w|' + b.pid + '|' + b.cand.w, ok, {u:u.id, k:'w', pid:b.pid, ci:b.ci, a:b.cand.w, s:np ? np.text : ''}); }
function quizAns(q){
  if(q.type === 'mc') return q.opts[q.a];
  if(q.type === 'tf') return q.a ? '對' : '錯';
  if(q.type === 'order') return q.items.join(' → ');
  if(q.type === 'match') return q.pairs.map(function(p){ return p[0] + '↔' + p[1]; }).join('、');
  return '';
}
function mkQuiz(q, ok){ if(!KMx() || MKMODE) return; var u = unit(); mkRec(u.id + '|q|' + KMx().hash(q.q), ok, {u:u.id, k:'q', s:q.q, a:quizAns(q)}); }
var RVMODE = /[?&]review=1/.test(location.search);   // 🔁 今天要複習：只出到期的（錯題＋閃卡）；其他跟只練錯題一樣
var MKMODE = RVMODE || /[?&]mistakes=1/.test(location.search);

/* ---------- 狀態 ---------- */
var UI = Object.assign({unit:0, layout:'tree', mode:'read'}, lsGet(UKEY, {})[SUBJ] || {});
if(!D.units[UI.unit]) UI.unit = 0;
var expanded = new Set();
var view = {x:0, y:0, s:1};
var STAGE = {w:100, h:100};
var NODES = {};
var cloze = {};          // unitId -> {blankKey:{st:'ok'|'shown', tries}}
var arch = null;         // 背架構 session
var QZ = null;           // 練習題 session
function unit(){ return D.units[UI.unit]; }
function saveUI(){ var all = lsGet(UKEY, {}), prev = all[SUBJ] || {}; all[SUBJ] = {unit:ONLY ? (prev.unit || 0) : UI.unit, layout:UI.layout, mode:UI.mode}; lsSet(UKEY, all); }
function archMap(){ return UI.mode === 'arch' && arch && arch.level <= 3; }

/* ---------- 進度（kids_mm_progress，key＝'<科>:<單元id>'） ---------- */
var REVIEW = [1,3,7], PASS = {1:100, 2:80, 3:80, 4:80};
function prog(){ return lsGet(PKEY, {}); }
function uprog(p, uid){ var k = pk(uid); if(!p[k]) p[k] = {unlocked:1, best:{}, passedAt:{}, lastPassAt:0, reviewStep:0}; return p[k]; }
function now(){ var p = prog(); return Date.now() + (DEMO ? (p._clockDays || 0) * DAY : 0); }
function reviewDue(uid){ var u = prog()[pk(uid)]; if(!u || !u.lastPassAt || (u.reviewStep||0) >= REVIEW.length) return 0; var days = (now() - u.lastPassAt) / DAY; return days >= REVIEW[u.reviewStep||0] ? REVIEW[u.reviewStep||0] : 0; }
function recordResult(uid, level, pct, isReview){
  var p = prog(), u = uprog(p, uid), t = now();
  u.best[level] = Math.max(u.best[level] || 0, pct);
  var pass = pct >= PASS[level];
  if(pass){ u.passedAt[level] = t; u.lastPassAt = t; u.unlocked = Math.max(u.unlocked, Math.min(level + 1, 5)); if(isReview) u.reviewStep = (u.reviewStep || 0) + 1; }
  lsSet(PKEY, p); syncTouch(true); try{ if(window.KidsDone) window.KidsDone.refresh(); }catch(e){} return pass;
}
/* 單元完成（../completion.js 判定、../kids-done.js 補存＋頁首橫幅）：考考自己、練習題一輪的答對率（跟結果畫面上的 % 一樣）存進 kids_done */
function doneRec(sec, pct){ try{ if(window.KidsDone && !MKMODE) window.KidsDone.record(sec, pk(unit().id), pct); }catch(e){} }
function paintDone(){ try{ var el = $('#kdone'); if(!el || !window.KidsDone) return; if(MKMODE || MOCK || !unit()){ el.hidden = true; return; } var u = unit(); window.KidsDone.mount(el, 'mm:' + pk(u.id), {compact:true, title:D.units.length > 1 ? unitLabel(u) + '・' + u.title : ''}); }catch(e){} }
/* 帳號同步（sync.js；在首頁 iframe 裡借用首頁的 KESync）：一關結束馬上同步，挖空紀錄 3 秒後 */
function syncTouch(now){ try{ var K = window.KESync; if(K) (now ? K.now : K.touch)(); }catch(e){} }
/* 別台的紀錄合併進來（storage／kesync-data）：停在關卡首頁才重畫，正在玩的不打斷 */
function onSynced(){ try{ if(UI.mode === 'arch' && !arch && !$('#panel').hidden) renderArchHome(); updateChrome(); }catch(e){} }
function fmtT(t){ if(!t) return '—'; var d = new Date(t); return (d.getMonth()+1) + '/' + d.getDate() + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0'); }

/* ---------- 樹 ---------- */
function buildTree(){
  var u = unit();
  function mk(d, depth, parent, idx, li){
    var type = depth === 0 ? 'root' : depth === 1 ? 'lesson' : depth === 2 ? 'topic' : 'sub';
    var n = {id:d.id, type:type, d:depth, idx:idx, li:(depth === 1 ? idx : li), data:d, parent:parent, kids:[], rel:d.rel || ''};
    kidsOrd(d).forEach(function(x){ n.kids.push(mk(x.c, depth + 1, n, x.i, n.li)); });
    if(d.points && d.points.length) n.card = {id:d.id + '-c', type:'card', d:depth + 1, li:n.li, data:d, parent:n, kids:[], rel:''};
    return n;
  }
  return mk(u, 0, null, 0, 0);
}
/* 子節點的畫面順序：背架構時兄弟可以互換位置（順序不計，子格跟著節點走）；i＝原本的序號（課名「第一課」跟著節點） */
function kidsOrd(d){
  var ks = kidsData(d).map(function(c, i){ return {c:c, i:i}; });
  if(!(archMap() && arch.B)) return ks;
  var by = {}; ks.forEach(function(x){ by[x.c.id] = x; });
  var o = arch.B.order(d.id).map(function(id){ return by[id]; }).filter(Boolean);
  return o.length === ks.length ? o : ks;
}
function visibleTree(){
  var root = buildTree(), am = archMap();
  (function prune(n){
    if(am){ n.vk = n.kids.slice(); }
    else if(n.type !== 'root' && n.type !== 'card' && !expanded.has(n.id)){ n.vk = []; return; }
    else { n.vk = n.kids.slice(); if(n.card) n.vk.push(n.card); }
    n.vk.forEach(prune);
  })(root);
  return root;
}
function allDataNodes(u){ var out = []; (function w(d, depth){ if(depth) out.push({d:d, depth:depth}); kidsData(d).forEach(function(c){ w(c, depth + 1); }); })(u, 0); return out; }

/* ---------- 挖空 ---------- */
/* 每條重點的候選詞（cands）→ 每次練習隨機抽 1～2 個挖空，紀錄存 kids_mm_blanks
 * 重點有兩種：卡片上的 points（社會科），以及「句子節點」——節點自己帶 cands，標題就是那一句（自然科）。
 * 句子節點在 npOf 裡排第 0 條、pid＝節點id-s；points 照原本 節點id-p<i>。 */
function bstore(uid){ var all = lsGet(BKEY, {}); return all[pk(uid)] || {sess:0, w:{}, a:{}}; }
function bsave(uid, st){ var all = lsGet(BKEY, {}); all[pk(uid)] = st; lsSet(BKEY, all); syncTouch(false); }
function titleNp(d){ if(!d.cands) return null; if(!d._tnp) d._tnp = SB.normPoint({t:d.title, cands:d.cands}); return d._tnp; }
function npOf(d){ if(!d._np) d._np = (d.points || []).map(SB.normPoint); return d._np; }
function pointsOf(d){ var out = [], t = titleNp(d); if(t) out.push({pid:d.id + '-s', np:t, node:d, pi:-1}); npOf(d).forEach(function(np, pi){ out.push({pid:d.id + '-p' + pi, np:np, node:d, pi:pi}); }); return out; }
function unitPoints(u){ var out = []; (function w(d){ out.push.apply(out, pointsOf(d)); kidsData(d).forEach(w); })(u); return out; }
function npByPid(node, pi){ return pi < 0 ? titleNp(node) : npOf(node)[pi]; }
function newDraw(){
  var u = unit(), st = bstore(u.id), pts = unitPoints(u);
  var dr = SB.drawCloze(pts, st, R); SB.commitSession(st, dr); bsave(u.id, st);
  cloze[u.id] = {draw:dr, ans:{}, miss:{}};
}
var BL = {}, BL_BY = {};   // key -> blank；nodeId -> [keys]（含子孫）
function indexBlanks(){
  BL = {}; BL_BY = {};
  var u = unit(), dr = cloze[u.id] && cloze[u.id].draw;
  (function w(d, anc){
    var mine = [];
    if(dr) pointsOf(d).forEach(function(P){ (dr.picks[P.pid] || []).forEach(function(ci){ var key = P.pid + ':' + ci; BL[key] = {key:key, pid:P.pid, ci:ci, cand:P.np.cands[ci], node:d, pi:P.pi}; mine.push(key); }); });
    var chain = anc.concat([d.id]);
    chain.forEach(function(id){ (BL_BY[id] = BL_BY[id] || []).push.apply(BL_BY[id], mine); });
    kidsData(d).forEach(function(c){ w(c, chain); });
  })(u, []);
}
function cz(){ var id = unit().id; if(!cloze[id]) newDraw(); return cloze[id].ans; }
/* 這一組裡「第一次沒答對」的格子（答錯過、看答案、按再答一次）：記在這一組上，不跟著 BL 重建歸零；單元完成只算第一次就答對（Yoda 2026-10-20） */
function czMiss(key){ cz(); var c = cloze[unit().id]; if(!c.miss) c.miss = {}; if(key) c.miss[key] = 1; return c.miss; }
function firstOkOf(keys){ var s = cz(), m = czMiss(); return keys.filter(function(k){ return s[k] && s[k].st === 'ok' && s[k].first && !m[k]; }).length; }
function scoreOf(keys){ var s = cz(), ok = 0, done = 0; keys.forEach(function(k){ if(s[k]){ done++; if(s[k].st === 'ok') ok++; } }); return {ok:ok, done:done, n:keys.length}; }
function hiddenSet(pid){ var dr = cloze[unit().id] && cloze[unit().id].draw; return new Set(UI.mode === 'cloze' && dr ? (dr.picks[pid] || []) : []); }
function logBlank(b, ok){ var uid = unit().id, st = bstore(uid); SB.recordAnswer(st, b.cand.w, ok, 'w'); bsave(uid, st); mkBlank(b, ok); }

/* ---------- 節點外觀 ---------- */
/* 一句重點畫成 HTML：看重點＝關鍵詞上色；考考自己＝被抽中的詞變成空格按鈕 */
function pointHTML(np, pid, ver){
  var hid = hiddenSet(pid);
  return SB.segments(np, hid).map(function(s){
    if(s.t != null) return esc(s.t);
    var w = s.c.w;
    if(!s.hidden){
      if(UI.mode === 'cloze') return esc(w);
      var vf = (ver === true || (ver.indexOf && ver.indexOf(w) >= 0) || s.c.verify) ? '<sup class="vf">?待確認</sup>' : '';
      return (s.c.core ? '<b class="kw">' + esc(w) + '</b>' : '<span class="kw2">' + esc(w) + '</span>') + vf;
    }
    var key = pid + ':' + s.ci, st = cz()[key];
    if(st && st.st === 'ok') return '<button class="blank ok" data-blank="' + key + '">' + esc(w) + ' ✓</button>';
    if(st && st.st === 'shown') return '<button class="blank shown" data-blank="' + key + '">👀 ' + esc(w) + '</button>';
    var mw = Math.max(2.6, w.length * 1.05 + 0.8);
    return '<button class="blank" data-blank="' + key + '" style="min-width:' + mw + 'em" aria-label="空格，點一下作答">？</button>';
  }).join('');
}
function cardHTML(d){
  var ver = d.verify || [];
  return '<ul class="pts">' + npOf(d).map(function(np, pi){ return '<li>' + pointHTML(np, d.id + '-p' + pi, ver) + '</li>'; }).join('') + '</ul>';
}
/* 節點標題：句子節點（有 cands）走 pointHTML；verify:true 的節點整句標「?待確認」 */
function titleHTML(d){
  var t = titleNp(d);
  var vf = UI.mode !== 'cloze' && d.verify === true && !t ? '<sup class="vf">?待確認</sup>' : '';
  return (t ? pointHTML(t, d.id + '-s', d.verify || []) : esc(d.title)) + vf;
}
function badgeHTML(n){
  var keys = BL_BY[n.id] || []; if(!keys.length) return '';
  var s = scoreOf(keys);
  return ' <span class="sc' + (s.ok === s.n ? ' full' : '') + '">答對 ' + s.ok + '/' + s.n + '</span>';
}
function nodeView(n){
  var c = LCOL[n.li % LCOL.length];
  if(n.type === 'root') return {cls:'root', html:'<span class="lab">' + esc(unitLabel(n.data)) + '</span>' + esc(n.data.title)};
  if(n.type === 'card') return {cls:'card', style:'border-color:' + c.bd, html:cardHTML(n.data)};
  var sent = isSent(n.data) ? ' sent' : '';
  if(archMap()) return slotView(n.id, n.type + sent, n.type === 'lesson' ? lessonLab(n.data, n.idx) : '', c);
  var canT = n.kids.length || n.card;
  var tg = canT ? '<span class="tg" style="border-color:' + c.ln + ';color:' + c.ln + '">' + (expanded.has(n.id) ? '−' : '+') + '</span>' : '';
  var badge = UI.mode === 'cloze' ? badgeHTML(n) : '';
  var lab = n.type === 'lesson' ? lessonLab(n.data, n.idx) : '';
  if(n.type === 'lesson') return {cls:'lesson' + sent, style:'background:' + c.bg, html:(lab ? '<span class="lab">' + esc(lab) + '</span>' : '') + titleHTML(n.data) + badge + tg};
  return {cls:n.type + sent, style:'border-color:' + c.bd, html:titleHTML(n.data) + badge + tg};
}
function isSent(d){ return String(d.title || '').length > 12; }
function slotView(id, type, lab, c){
  var f = arch.filled[id], it = curItem(), cur = arch.level >= 2 && it && it.id === id;
  var style = /^lesson/.test(type) ? 'background:' + c.bg : 'border-color:' + c.bd;
  var body = f ? ('<span class="ft">' + esc(f.title) + '</span>' + (f.st === 'bad' ? '<span class="fx">訂正</span>' : f.st === 'hint' ? '<span class="fh">提示</span>' : '<span class="fk">✓</span>'))
               : '<span class="st">' + (cur ? '✍️' : '？') + '</span>';
  return {cls:type + ' slot' + (f ? ' f-' + f.st : '') + (cur ? ' cur' : ''), style:style, html:(lab ? '<span class="lab">' + esc(lab) + '</span>' : '') + body};
}

/* ---------- 畫圖 ---------- */
var vp, stage, nodesBox, linesSvg;
function render(anchorId){
  if(UI.mode === 'cloze' && !cloze[unit().id]) newDraw();
  indexBlanks();
  var prev = anchorId && NODES[anchorId] ? {x:NODES[anchorId].x, y:NODES[anchorId].y} : null;
  var root = visibleTree(), list = [], rels = [];
  (function walk(n){ list.push(n); n.vk.forEach(function(k){ if(k.rel) rels.push({id:'rel:' + k.id, text:k.rel, p:n, k:k}); walk(k); }); })(root);
  nodesBox.innerHTML = '';
  function mkEl(id, type, v){ var el = document.createElement('div'); el.className = 'n ' + v.cls; el.dataset.id = id; el.dataset.type = type; if(v.style) el.style.cssText = v.style; el.innerHTML = v.html; nodesBox.appendChild(el); return el; }
  list.forEach(function(n){ n.el = mkEl(n.id, n.type, nodeView(n)); });
  // 跨連結（多父節點）：unit.links = [{from,to,rel}]
  var vis = {}; list.forEach(function(n){ vis[n.id] = n; });
  var links = (unit().links || []).map(function(L, i){ return {i:i, L:L, a:vis[L.from], b:vis[L.to]}; }).filter(function(x){ return x.a && x.b; });
  links.forEach(function(x){ if(x.L.rel) rels.push({id:'rel:link' + x.i, text:x.L.rel, link:x}); });
  rels.forEach(function(r){
    var c = LCOL[((r.k || r.link.b).li) % LCOL.length];
    var v = {cls:'rl', html:esc(r.text)};   // 關係詞在每個模式都直接顯示（背架構也不挖空）
    r.el = mkEl(r.id, 'rl', v); r.w = r.el.offsetWidth; r.h = r.el.offsetHeight;
  });
  list.forEach(function(n){ n.w = n.el.offsetWidth; n.h = n.el.offsetHeight; });
  var relW = []; rels.forEach(function(r){ if(r.k) relW[r.k.d] = Math.max(relW[r.k.d] || 0, r.w); });
  if(UI.layout === 'radial') layoutRadial(root, list, relW); else layoutTree(root, list, relW);
  var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  list.forEach(function(n){ minX = Math.min(minX, n.x); minY = Math.min(minY, n.y); maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h); });
  var P = 50, dx = P - minX, dy = P - minY;
  list.forEach(function(n){ n.x += dx; n.y += dy; n.el.style.left = n.x + 'px'; n.el.style.top = n.y + 'px'; });
  STAGE = {w:maxX - minX + 2 * P, h:maxY - minY + 2 * P};
  stage.style.width = STAGE.w + 'px'; stage.style.height = STAGE.h + 'px';
  // 線
  var svg = '<defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" fill="#a08660"/></marker></defs>';
  var relPos = {};
  list.forEach(function(n){ n.vk.forEach(function(k){
    var col = LCOL[k.li % LCOL.length].ln, sw = n.d === 0 ? 6 : n.d === 1 ? 4.5 : 3.5, path, mx, my;
    if(UI.layout === 'tree'){
      var x1 = n.x + n.w + (n.type === 'root' ? 0 : 17), y1 = n.y + n.h / 2, x2 = k.x, y2 = k.y + k.h / 2, xm = (x1 + x2) / 2;
      path = 'M' + x1 + ' ' + y1 + 'C' + xm + ' ' + y1 + ',' + xm + ' ' + y2 + ',' + x2 + ' ' + y2; mx = xm; my = (y1 + y2) / 2;
    } else {
      var a = edgePt(n, k.x + k.w / 2, k.y + k.h / 2), b = edgePt(k, n.x + n.w / 2, n.y + n.h / 2);
      path = 'M' + a[0] + ' ' + a[1] + 'L' + b[0] + ' ' + b[1]; mx = (a[0] + b[0]) / 2; my = (a[1] + b[1]) / 2;
    }
    svg += '<path d="' + path + '" fill="none" stroke="' + col + '" stroke-width="' + sw + '" stroke-linecap="round"' + (k.type === 'card' ? ' stroke-dasharray="2 7" opacity=".7"' : '') + '/>';
    if(k.rel) relPos['rel:' + k.id] = [mx, my];
  }); });
  links.forEach(function(x){
    var a = edgePt(x.a, x.b.x + x.b.w / 2, x.b.y + x.b.h / 2), b = edgePt(x.b, x.a.x + x.a.w / 2, x.a.y + x.a.h / 2);
    svg += '<path d="M' + a[0] + ' ' + a[1] + 'L' + b[0] + ' ' + b[1] + '" fill="none" stroke="#a08660" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#arr)"/>';
    relPos['rel:link' + x.i] = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  });
  linesSvg.setAttribute('width', STAGE.w); linesSvg.setAttribute('height', STAGE.h);
  linesSvg.innerHTML = svg;
  rels.forEach(function(r){ var p = relPos[r.id]; if(!p){ r.el.remove(); return; } r.el.style.left = (p[0] - r.w / 2) + 'px'; r.el.style.top = (p[1] - r.h / 2) + 'px'; });
  NODES = {}; list.forEach(function(n){ NODES[n.id] = n; }); rels.forEach(function(r){ if(relPos[r.id]) NODES[r.id] = {x:relPos[r.id][0] - r.w / 2, y:relPos[r.id][1] - r.h / 2, w:r.w, h:r.h}; });
  if(prev && NODES[anchorId]){ view.x += (prev.x - NODES[anchorId].x) * view.s; view.y += (prev.y - NODES[anchorId].y) * view.s; applyView(); }
  updateScore();
}
function edgePt(n, tx, ty){ var cx = n.x + n.w / 2, cy = n.y + n.h / 2, dx = tx - cx, dy = ty - cy; if(!dx && !dy) return [cx, cy]; var t = Math.min(dx ? (n.w / 2) / Math.abs(dx) : Infinity, dy ? (n.h / 2) / Math.abs(dy) : Infinity); return [cx + dx * t, cy + dy * t]; }
function layoutTree(root, list, relW){
  var maxW = []; list.forEach(function(n){ maxW[n.d] = Math.max(maxW[n.d] || 0, n.w); });
  var colX = [0]; for(var d = 1; d < maxW.length; d++) colX[d] = colX[d - 1] + maxW[d - 1] + (d === 1 ? 60 : 64) + (relW[d] ? relW[d] + 20 : 0);
  function gap(d){ return d === 1 ? 36 : d === 2 ? 18 : 12; }
  (function meas(n){ n.vk.forEach(meas); var kh = n.vk.reduce(function(s, k){ return s + k.sh; }, 0) + Math.max(0, n.vk.length - 1) * gap(n.d + 1); n.kh = kh; n.sh = Math.max(n.h, kh); })(root);
  (function place(n, top){ n.x = colX[n.d]; n.y = top + (n.sh - n.h) / 2; var y = top + (n.sh - n.kh) / 2; n.vk.forEach(function(k){ place(k, y); y += k.sh + gap(n.d + 1); }); })(root, 0);
  // 父節點對齊第一個與最後一個子節點的中線
  (function fix(n){ n.vk.forEach(fix); if(n.vk.length){ var a = n.vk[0], b = n.vk[n.vk.length - 1]; n.y = ((a.y + a.h / 2) + (b.y + b.h / 2)) / 2 - n.h / 2; } })(root);
}
function layoutRadial(root, list, relW){
  function ext(n){ return Math.hypot(n.w, n.h) + 22; }
  (function wt(n){ n.vk.forEach(wt); var s = n.vk.reduce(function(a, k){ return a + k.wt; }, 0); n.wt = Math.max(ext(n), s); })(root);
  function assign(n, a0, a1){ n.ang = (a0 + a1) / 2; n.span = a1 - a0; var tot = n.vk.reduce(function(a, k){ return a + k.wt; }, 0), a = a0;
    n.vk.forEach(function(k){ var sp = (a1 - a0) * k.wt / tot; assign(k, a, a + sp); a += sp; }); }
  // 第一層：每課最多佔 0.8π，避免子節點繞到中心另一側；剩下的角度平均當間隔
  root.ang = 0; root.span = 2 * Math.PI;
  var tot0 = root.vk.reduce(function(a, k){ return a + k.wt; }, 0) || 1;
  var sps = root.vk.map(function(k){ return Math.min(2 * Math.PI * k.wt / tot0, 0.8 * Math.PI); });
  var gap0 = root.vk.length ? (2 * Math.PI - sps.reduce(function(a, b){ return a + b; }, 0)) / root.vk.length : 0;
  var a0 = -Math.PI / 2 - (sps[0] || 0) / 2;
  root.vk.forEach(function(k, i){ assign(k, a0, a0 + sps[i]); a0 += sps[i] + gap0; });
  var byD = []; list.forEach(function(n){ (byD[n.d] = byD[n.d] || []).push(n); });
  function half(n){ if(n.d === 0) return Math.max(n.w, n.h) / 2; return Math.abs(Math.cos(n.ang)) * n.w / 2 + Math.abs(Math.sin(n.ang)) * n.h / 2; }
  var r = [0];
  for(var d = 1; d < byD.length; d++){
    var need = r[d - 1] + Math.max.apply(null, byD[d - 1].map(half)) + Math.max.apply(null, byD[d].map(half)) + 64 + (relW[d] ? relW[d] : 0);
    byD[d].forEach(function(n){ var sp = Math.min(n.span, Math.PI); need = Math.max(need, ext(n) / (2 * Math.sin(sp / 2))); });
    r[d] = need;
  }
  list.forEach(function(n){ var R = r[n.d] || 0, cx = n.d ? R * Math.cos(n.ang) : 0, cy = n.d ? R * Math.sin(n.ang) : 0; n.x = cx - n.w / 2; n.y = cy - n.h / 2; });
}

/* ---------- 平移／縮放 ---------- */
function applyView(anim){ stage.classList.toggle('anim', !!anim); stage.style.transform = 'translate(' + view.x + 'px,' + view.y + 'px) scale(' + view.s + ')'; }
/* minS：自動置中時的最小縮放（字太小孩子看不清楚，寧可需要拖曳）；按 ⤢ 看全部時不設下限 */
function fit(anim, minS){
  var W = vp.clientWidth, H = vp.clientHeight; if(!W || !H) return;
  var fs = Math.min((W - 30) / STAGE.w, (H - 30) / STAGE.h), s = clamp(Math.max(fs, minS || 0), SMIN, 1.15);
  view.s = s; view.x = (W - STAGE.w * s) / 2; view.y = (H - STAGE.h * s) / 2;
  if(s > fs + 1e-6){
    var root = NODES[unit().id];
    if(UI.layout === 'tree'){ view.x = Math.min(view.x, 12 - 30 * s); }
    else if(root){ view.x = W / 2 - (root.x + root.w / 2) * s; }
    if(root && STAGE.h * s > H){ view.y = clamp(H / 2 - (root.y + root.h / 2) * s, H - STAGE.h * s - 10, 10); }
  }
  applyView(anim);
}
var AUTO_MIN = 0.72;
/* 展開後把該節點與它的子孫盡量拉進畫面 */
function ensureVisible(id){
  var n = NODES[id]; if(!n) return;
  var b = {x1:n.x, y1:n.y, x2:n.x + n.w, y2:n.y + n.h};
  (function w(m){ (m.vk || []).forEach(function(k){ b.x1 = Math.min(b.x1, k.x); b.y1 = Math.min(b.y1, k.y); b.x2 = Math.max(b.x2, k.x + k.w); b.y2 = Math.max(b.y2, k.y + k.h); w(k); }); })(n);
  var W = vp.clientWidth, H = vp.clientHeight, M = 14, s = view.s;
  var sx1 = b.x1 * s + view.x, sx2 = b.x2 * s + view.x, sy1 = b.y1 * s + view.y, sy2 = b.y2 * s + view.y, dx = 0, dy = 0;
  if(sx2 > W - 70) dx = (W - 70) - sx2;
  if(sx1 + dx < M) dx = M - sx1;
  if(sy2 > H - M) dy = (H - M) - sy2;
  if(sy1 + dy < 64) dy = 64 - sy1;
  if(dx || dy){ view.x += dx; view.y += dy; applyView(true); }
}
function zoomAt(f, cx, cy, anim){ var s2 = clamp(view.s * f, SMIN, SMAX), k = s2 / view.s; view.x = cx - (cx - view.x) * k; view.y = cy - (cy - view.y) * k; view.s = s2; applyView(anim); }
function focusNode(id, minS){ var n = NODES[id]; if(!n) return; var W = vp.clientWidth, H = vp.clientHeight; view.s = Math.max(view.s, minS || 0.8); view.x = W / 2 - (n.x + n.w / 2) * view.s; view.y = H / 2 - (n.y + n.h / 2) * view.s; applyView(true); }
function initPanZoom(){
  var pts = new Map(), drag = null, pinch = null, suppress = false;
  vp.addEventListener('pointerdown', function(e){
    if(e.target.closest('.mm-zoom,.mm-tools')) return;
    if(e.pointerType === 'mouse' && e.button !== 0) return;
    suppress = false; stage.classList.remove('anim');
    pts.set(e.pointerId, {x:e.clientX, y:e.clientY});
    if(pts.size === 1) drag = {sx:e.clientX, sy:e.clientY, x0:view.x, y0:view.y, moved:false};
    else if(pts.size === 2){ var v = Array.from(pts.values()), r = vp.getBoundingClientRect(); pinch = {d0:Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y) || 1, mx:(v[0].x + v[1].x) / 2 - r.left, my:(v[0].y + v[1].y) / 2 - r.top, s0:view.s, x0:view.x, y0:view.y}; if(drag) drag.moved = true; }
  });
  window.addEventListener('pointermove', function(e){
    if(!pts.has(e.pointerId)) return; pts.set(e.pointerId, {x:e.clientX, y:e.clientY});
    if(pts.size >= 2 && pinch){ var v = Array.from(pts.values()), r = vp.getBoundingClientRect(), d = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y), mx = (v[0].x + v[1].x) / 2 - r.left, my = (v[0].y + v[1].y) / 2 - r.top, s = clamp(pinch.s0 * d / pinch.d0, SMIN, SMAX);
      view.x = mx - (pinch.mx - pinch.x0) * (s / pinch.s0); view.y = my - (pinch.my - pinch.y0) * (s / pinch.s0); view.s = s; applyView(); }
    else if(drag){ var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy; if(!drag.moved && Math.hypot(dx, dy) > 8) drag.moved = true; if(drag.moved){ view.x = drag.x0 + dx; view.y = drag.y0 + dy; applyView(); } }
  });
  function up(e){ if(!pts.has(e.pointerId)) return; pts.delete(e.pointerId); if(pts.size < 2) pinch = null;
    if(pts.size === 1){ var p = Array.from(pts.values())[0]; drag = {sx:p.x, sy:p.y, x0:view.x, y0:view.y, moved:true}; }
    if(pts.size === 0){ if(drag && drag.moved) suppress = true; drag = null; } }
  window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
  vp.addEventListener('click', function(e){ if(suppress){ suppress = false; e.stopPropagation(); e.preventDefault(); } }, true);
  vp.addEventListener('wheel', function(e){ e.preventDefault(); var r = vp.getBoundingClientRect(); zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015)), e.clientX - r.left, e.clientY - r.top); }, {passive:false});
  document.addEventListener('gesturestart', function(e){ e.preventDefault(); });
}

/* ---------- 節點點擊 ---------- */
function onNodeClick(e){
  var b = e.target.closest('[data-blank]'); if(b){ openBlank(b.dataset.blank); return; }
  var el = e.target.closest('.n'); if(!el) return;
  var id = el.dataset.id, type = el.dataset.type;
  if(archMap()){ archSlotClick(id, el); return; }
  if(type === 'lesson' || type === 'topic' || type === 'sub'){
    if(!el.querySelector('.tg')) return;
    var opening = !expanded.has(id);
    if(opening) expanded.add(id); else expanded.delete(id);
    render(id);
    if(opening) ensureVisible(id);
  }
}

/* ---------- 考考自己：作答視窗 ---------- */
var popKey = null;
function openBlank(key){
  var b = BL[key]; if(!b) return; popKey = key;
  var st = cz()[key], np = npByPid(b.node, b.pi);
  var ctx = SB.segments(np, hiddenSet(b.pid)).map(function(s){
    if(s.t != null) return esc(s.t);
    if(!s.hidden) return esc(s.c.w);
    if(s.ci === b.ci) return '<span class="tgt">' + (st ? esc(s.c.w) : '？？') + '</span>';
    var o = cz()[b.pid + ':' + s.ci]; return o ? '<b>' + esc(s.c.w) + '</b>' : '＿＿';
  }).join('');
  var html = '<div class="ctx">' + ctx + '</div>';
  if(st){
    html += '<div class="msg">' + (st.st === 'ok' ? '✅ 你答對了：' : '👀 答案是：') + esc(b.cand.w) + '</div>' +
      '<div class="btns"><button class="mm-b" data-act="blankRetry">🔁 再答一次</button><button class="mm-b primary on" data-act="popClose">好</button></div>';
  } else {
    html += '<div class="l3row"><input id="popIn" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="在這裡寫答案" enterkeyhint="done"></div>' +
      '<div class="msg" id="popMsg"></div>' +
      '<div class="btns"><button class="mm-b on" data-act="blankOk">✅ 確定</button><button class="mm-b" data-act="blankShow">👀 看答案</button><button class="mm-b" data-act="popClose">關閉</button></div>';
  }
  $('#pop').innerHTML = html; $('#pop').hidden = false; $('#back').hidden = false;
  var inp = $('#popIn'); if(inp){ inp.focus(); inp.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); blankSubmit(); } }); }
}
function closePop(){ $('#pop').hidden = true; if($('#modal').hidden) $('#back').hidden = true; popKey = null; }
function blankSubmit(){
  var b = BL[popKey], inp = $('#popIn'); if(!b || !inp) return;
  var s = cz();
  if(!inp.value.trim()){ $('#popMsg').textContent = '先寫寫看喔！'; return; }
  if(matchAns(inp.value, b.cand.w, b.cand.alts)){ s[popKey] = {st:'ok', first:!b.tries && !b.logged && !czMiss()[popKey]}; coinAnswer(true); if(!b.logged){ b.logged = true; logBlank(b, !b.tries); } var nid = b.node.id; closePop(); toast('答對了！🎉'); render(nid); checkClozeDone(); }
  else { b.tries = (b.tries || 0) + 1; czMiss(popKey); coinAnswer(false);
    var m = $('#popMsg'); m.className = 'msg no'; m.textContent = b.tries >= 2 ? '還不對喔～可以按「看答案」' : '不對喔，再想想看！'; var pp = $('#pop'); pp.classList.remove('shake'); void pp.offsetWidth; pp.classList.add('shake'); inp.select(); }
}
function blankShow(){ var b = BL[popKey]; if(!b) return; czMiss(popKey); cz()[popKey] = {st:'shown'}; coinAnswer(false); if(!b.logged){ b.logged = true; logBlank(b, false); } var nid = b.node.id; closePop(); render(nid); checkClozeDone(); }
function blankRetry(){ var k = popKey; czMiss(k); delete cz()[k]; closePop(); var b = BL[k]; render(b && b.node.id); if(BL[k]){ BL[k].logged = true; BL[k].tries = 1; } openBlank(k); }
function updateScore(){
  var el = $('#score');
  if(UI.mode !== 'cloze'){ el.hidden = true; return; }
  var keys = Object.keys(BL), s = scoreOf(keys);
  el.hidden = false; el.textContent = '✏️ 答對 ' + s.ok + ' / ' + s.n + '　已作答 ' + s.done;
}
function checkClozeDone(){
  var keys = Object.keys(BL), s = scoreOf(keys); if(s.done < s.n) return;
  var pct = Math.round(s.ok / s.n * 100), first = firstOkOf(keys);
  doneRec('czFirst', Math.round(first / s.n * 100));   /* 單元完成：存「第一次作答就答對」的比率；結果畫面的答對率（含再答一次）照舊給小孩看 */
  /* 學習幣：這一組空格全部作答完＝一輪（同一組只報一次；按「再答一次」改對不重報） */
  var c = cloze[unit().id];
  if(c && !c.reported){ c.reported = true; coinRound('cloze', first, s.n); }
  showModal('<div class="big">' + (pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '💪') + '</div><h2>全部空格都完成了！</h2><div class="pct">' + s.ok + ' / ' + s.n + '</div><p>答對率 ' + pct + '%（看答案 ' + (s.n - s.ok) + ' 格）</p>' +
    '<div class="btns"><button class="mm-b on" data-act="reshuffle">🔀 換一組再練</button><button class="mm-b" data-act="modalClose">好</button></div>');
}

/* ---------- 背架構 ---------- */
function archSeq(uu){
  /* 連線上的關係詞（rel：包含、例如、功能…）只當提示顯示，不是作答格（Yoda 2026-10-11）；節點清單由 SB.archNodes 產生
   * nq＝標題是不考詞（應用、方法…泛用標籤）：四關都只當提示露出、不挖空、不計分
   * par＝上層 id（判分用：放在正確的上層底下就算對，兄弟順序不計）；i＝原本在兄弟中的序號 */
  var u = uu || unit(), Ls = kidsData(u);
  return SB.archNodes(u).map(function(x){
    var d = x.d, li = x.li, base = {id:d.id, nq:x.nq, title:d.title, keys:d.keys || [d.title], li:li, i:x.i, depth:x.depth, par:x.parent.id, ptitle:x.parent.title};
    if(x.depth === 1) return Object.assign(base, {kind:'lesson', prompt:lessonLabel(d, li) + (CFG.lesson ? '的標題是？' : '是？')});
    return Object.assign(base, {kind:x.depth === 2 ? 'topic' : 'sub', prompt:x.depth === 2 ? (lessonLabel(Ls[li], li) + '・第' + NUM[x.i + 1] + '個' + CFG.l4Kid + '是？') : ('「' + x.parent.title + '」下面第' + NUM[x.i + 1] + '個是？')});
  });
}
/* 作答格的提示句：照「現在畫面上的位置」算第幾個（兄弟互換後位置會變） */
function promptOf(it){
  if(!arch || !arch.B || it.kind === 'lesson') return it.prompt;
  var pos = arch.B.order(it.par).indexOf(it.id); if(pos < 0) pos = it.i;
  var Ls = kidsData(unit());
  return it.depth === 2 ? (lessonLabel(Ls[it.li], it.li) + '・第' + NUM[pos + 1] + '個' + CFG.l4Kid + '是？') : ('「' + it.ptitle + '」下面第' + NUM[pos + 1] + '個是？');
}
function curItem(){ return arch && arch.seq ? arch.seq[arch.idx] : null; }
function itemOk(it, v){ return matchKeys(v, it.keys); }
function openIds(){ return arch.seq.map(function(s){ return s.id; }); }
/* 第 2／3 關對到同一上層的另一個兄弟：作答順序裡兩個互換（目前這格換成答到的那個，原本的留到後面再問） */
function seqSwap(a, b){ var i = -1, j = -1; arch.seq.forEach(function(s, k){ if(s.id === a) i = k; if(s.id === b) j = k; }); if(i < 0 || j < 0) return; var t = arch.seq[i]; arch.seq[i] = arch.seq[j]; arch.seq[j] = t; }
function startArch(level, review){
  var p = prog(), u = uprog(p, unit().id);
  if(!review && level > u.unlocked){ toast('先通過第 ' + (level - 1) + ' 關才能玩喔'); return; }
  var full = archSeq(), quizable = full.filter(function(s){ return !s.nq; });
  arch = {level:level, review:!!review, all:full, seq:quizable, idx:0, filled:{}, used:{}, correct:0, miss:{}, sel:null, lock:false, reported:false, byId:{}};
  full.forEach(function(s){ arch.byId[s.id] = s; });
  arch.B = SB.archBoard(full.map(function(s){ return {id:s.id, parent:s.par, title:s.title}; }));
  full.forEach(function(s){ if(s.nq){ arch.filled[s.id] = {title:s.title, st:'hint'}; arch.B.fill(s.id); } });   // 不考詞節點直接露出
  if(level === 2 || level === 3){   // 隨機挖約 60%，其餘露出當提示（答錯過的節點較常被挖）
    var hid = new Set(SB.drawArch(quizable, bstore(unit().id), R, 0.6));
    arch.seq = quizable.filter(function(s){ return hid.has(s.id); });
    quizable.forEach(function(s){ if(!hid.has(s.id)){ arch.filled[s.id] = {title:s.title, st:'hint'}; arch.B.fill(s.id); } });
  }
  if(level === 1) arch.cards = shuffle(arch.seq.map(function(s){ return s.id; }));
  if(level === 2) makeOpts();
  if(level === 4){ arch.l4 = kidsData(unit()).map(function(){ return {title:'', n:0, topics:[]}; }); showPanel(); renderL4(); return; }
  showMap(); render(); fit(false, AUTO_MIN); renderTray();
  if(level >= 2) setTimeout(function(){ var it = arch && curItem(); if(it) focusNode(it.id); }, 30);   // 30ms 內這一關已經結束／換關：不聚焦
}
function makeOpts(){
  var it = curItem(); if(!it) return;
  /* 同一上層、還沒填的兄弟也是正確答案 → 不能拿來當干擾項（不然選了會被判錯） */
  var sib = {}; arch.B.cands(it.id, openIds()).forEach(function(id){ sib[arch.byId[id].title] = 1; });
  var pool = arch.all.filter(function(s){ return !s.nq && s.kind === it.kind && s.title !== it.title && !sib[s.title]; }).map(function(s){ return s.title; });
  // 已經露出（提示或答過）的標題放後面，干擾項才不會一眼就能刪掉
  var shown = {}; Object.keys(arch.filled).forEach(function(id){ shown[arch.filled[id].title] = 1; });
  pool = Array.from(new Set(pool));
  pool = shuffle(pool.filter(function(t){ return !shown[t]; })).concat(shuffle(pool.filter(function(t){ return shown[t]; })));
  if(pool.length < 3) pool = pool.concat(shuffle(arch.all.filter(function(s){ return !s.nq && s.kind !== it.kind && !sib[s.title]; }).map(function(s){ return s.title; })));
  arch.opts = shuffle([it.title].concat(pool.slice(0, 3)));
}
var LVNAME = {1:'排排看', 2:'選選看', 3:'默寫', 4:'全默寫'};
function trayHead(extra){ return '<div class="tr-head"><span class="t">第 ' + arch.level + ' 關・' + LVNAME[arch.level] + (arch.review ? '（複習）' : '') + '</span><span class="p">' + extra + '</span><button class="mm-b sm" data-act="archHome">⬅ 回關卡</button></div>'; }
function renderTray(){
  var top = $('#trayTop'), bot = $('#trayBot');
  top.hidden = true; bot.hidden = true;
  if(!archMap()) return;
  var lv = arch.level, total = arch.seq.length;
  if(lv >= 2 && !curItem()) return;
  if(lv === 1){
    var left = arch.cards.filter(function(id){ return !arch.used[id]; });
    var byId = {}; arch.seq.forEach(function(s){ byId[s.id] = s; });
    bot.innerHTML = trayHead('已放好 ' + (total - left.length) + ' / ' + total) +
      '<div class="tr-q">先點一張卡片，再點上面的空格：放在對的上層底下就算對（同一層的順序不計），放錯會彈回來！</div>' +
      '<div class="ac-pool">' + left.map(function(id){ var s = byId[id]; return '<button class="ac' + (arch.sel === id ? ' sel' : '') + '" data-act="pickCard" data-v="' + esc(id) + '">' + esc(s.title) + '</button>'; }).join('') + '</div>';
    bot.hidden = false;
  } else if(lv === 2){
    var it = curItem();
    bot.innerHTML = trayHead('第 ' + (arch.idx + 1) + ' / ' + total + ' 格　答對 ' + arch.correct) +
      '<div class="tr-q">' + esc(promptOf(it)) + '</div>' +
      '<div class="l2opts">' + arch.opts.map(function(o, i){ return '<button class="opt" data-act="pickOpt" data-v="' + i + '">' + esc(o) + '</button>'; }).join('') + '</div>';
    bot.hidden = false;
  } else if(lv === 3){
    if(!top.querySelector('#l3in')){
      top.innerHTML = '<div id="l3head"></div><div class="tr-q" id="l3q"></div>' +
        '<div class="l3row"><input id="l3in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="寫出標題（關鍵詞寫對就算對）" enterkeyhint="done">' +
        '<button class="mm-b on" data-act="l3ok">✅ 確定</button><button class="mm-b" data-act="l3skip">👀 不會</button><button class="mm-b ok" data-act="l3next" id="l3next" hidden>下一格 ▶</button></div>' +
        '<div class="l3fb" id="l3fb"></div>';
      top.querySelector('#l3in').addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); if(arch.lock) l3next(); else l3submit(); } });
    }
    var it3 = curItem();
    $('#l3head').innerHTML = trayHead('第 ' + (arch.idx + 1) + ' / ' + total + ' 格　答對 ' + arch.correct);
    $('#l3q').textContent = promptOf(it3);
    top.hidden = false;
  }
}
function archSlotClick(id, el){
  if(arch.level !== 1){ return; }
  if(arch.filled[id]) return;
  if(!arch.sel){ toast('先點下面的一張卡片'); shakeEl(el); return; }
  var it = arch.byId[arch.sel];
  /* 放在正確的上層底下就算對（同一上層的兄弟順序不計）：放進兄弟的格子 → 兩個互換位置，各自的子格跟著走；
     同名的格子（例如自然科兩個「中性」）放哪一格都算對；放錯上層才彈回（Yoda 2026-10-11） */
  var r = arch.B.place(arch.sel, id);
  if(r.ok){ arch.filled[r.target] = {title:it.title, st:'good'}; arch.used[arch.sel] = 1; coinAnswer(true); if(!arch.miss[arch.sel]) mkArch(arch.sel, true); arch.sel = null; render(); renderTray(); if(arch.seq.every(function(s){ return arch.filled[s.id]; })) archFinish(); }
  else { coinAnswer(false); if(!arch.miss[arch.sel]) mkArch(arch.sel, false); arch.miss[arch.sel] = true; shakeEl(el); var c = document.querySelector('.ac.sel'); if(c) shakeEl(c); toast('放錯了，卡片彈回去囉！'); arch.sel = null; setTimeout(renderTray, 380); }
}
function shakeEl(el){ el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
function advance(){
  arch.idx++; arch.lock = false;
  if(arch.idx >= arch.seq.length){ render(); renderTray(); archFinish(); return; }
  if(arch.level === 2) makeOpts();
  render(); renderTray(); focusNode(curItem().id);
}
function l3submit(){
  var inp = $('#l3in'), it = curItem(); if(!it || arch.lock) return;
  if(!inp.value.trim()){ toast('先寫寫看喔！'); return; }
  var fb = $('#l3fb');
  /* 同一上層底下的空格：寫出任何一個還沒填的兄弟都算對（先看這格自己）；已經寫過的兄弟不能重複得分 */
  var hit = arch.B.answer(it.id, openIds(), function(id){ return itemOk(arch.byId[id], inp.value); });
  if(hit != null){ if(hit !== it.id) seqSwap(it.id, hit); var h = arch.byId[hit]; arch.correct++; logArch(hit, true); coinAnswer(true); arch.filled[hit] = {title:h.title, st:'good'}; fb.className = 'l3fb ok'; fb.textContent = '✅ 答對！' + (hit !== it.id ? '（' + h.title + '）' : ''); arch.lock = true; inp.value = ''; setTimeout(function(){ fb.textContent = ''; advance(); }, 650); }
  else l3wrong(inp.value);
}
function logArch(id, ok){ var uid = unit().id, st = bstore(uid); SB.recordAnswer(st, id, ok, 'a'); bsave(uid, st); mkArch(id, ok); }
function l3wrong(v){ var it = curItem(); logArch(it.id, false); coinAnswer(false); arch.filled[it.id] = {title:it.title, st:'bad'}; arch.B.fill(it.id); arch.lock = true; var fb = $('#l3fb'); fb.className = 'l3fb no'; fb.innerHTML = (v ? '你寫「' + esc(v) + '」。' : '') + '正確是：<b>' + esc(it.title) + '</b>'; $('#l3next').hidden = false; render(); }
function l3next(){ $('#l3next').hidden = true; $('#l3fb').textContent = ''; $('#l3in').value = ''; advance(); }
function archFinish(){
  var total = arch.seq.length, ok;
  if(arch.level === 1) ok = arch.seq.filter(function(s){ return !arch.miss[s.id]; }).length; else ok = arch.correct;
  showArchResult(ok, total);
}
function showArchResult(ok, total){
  var pct = Math.round(ok / total * 100), lv = arch.level, pass = recordResult(unit().id, lv, pct, arch.review);
  if(!arch.reported){ arch.reported = true; coinRound('arch', ok, total); }
  var next = pass && lv < 4 ? '<button class="mm-b ok" data-act="archGo" data-v="' + (lv + 1) + '">下一關 ▶</button>' : '';
  showModal('<div class="big">' + (pass ? '🏅' : '💪') + '</div><h2>第 ' + lv + ' 關・' + LVNAME[lv] + '</h2><div class="pct">' + pct + '%</div><p>' + ok + ' / ' + total + ' 格一次就對</p>' +
    '<p><b>' + (pass ? (lv < 4 ? '過關！第 ' + (lv + 1) + ' 關解鎖了 🔓' : '全部過關！架構你都背起來了 🎓') : '過關門檻是 ' + PASS[lv] + '%，再試一次！') + '</b></p>' +
    '<div class="btns"><button class="mm-b" data-act="archGo" data-v="' + lv + '">🔁 再玩一次</button><button class="mm-b" data-act="archHome">回關卡</button>' + next + '</div>');
}
function renderArchHome(){
  arch = null;
  var u = unit(), p = prog(), up = p[pk(u.id)] || {unlocked:1, best:{}, passedAt:{}}, due = reviewDue(u.id);
  var icons = {1:'🧩', 2:'🔘', 3:'✍️', 4:'🧠'}, desc = {1:'空白的架構圖，把打散的標題卡片放回去。', 2:'一格一格選出正確的標題（3～4 選 1）。', 3:'一格一格自己寫出標題。', 4:CFG.lesson ? '只給單元名稱和課數，整張架構全部寫出來。' : '只給單元名稱和大分支的數量，兩層主分支全部寫出來（關係詞和「應用」這類泛用詞不考）。'};
  var html = '<div class="mm-wrap">';
  html += '<h2>🧠 背架構</h2><div class="home-units"' + (D.units.length < 2 ? ' hidden' : '') + '>' + D.units.map(function(x, i){ var dd = reviewDue(x.id), pu = p[pk(x.id)]; var passed = pu ? Object.keys(pu.passedAt || {}).length : 0;
    return '<button class="hu' + (i === UI.unit ? ' on' : '') + '" data-act="unit" data-v="' + i + '"><small>' + esc(unitLabel(x)) + '　過了 ' + passed + '/4 關</small><b>' + esc(x.title) + '</b>' + (dd ? '<br><span class="due2">⏰ 該複習架構囉</span>' : '') + '</button>'; }).join('') + '</div>';
  if(due) html += '<div class="rv">⏰ 上次過關已經 ' + due + ' 天了，該複習架構囉！<button class="mm-b on" data-act="archReview">開始複習（第 4 關）</button></div>';
  html += '<div class="lv-grid">';
  [1,2,3,4].forEach(function(lv){
    var locked = lv > (up.unlocked || 1), passed = up.passedAt && up.passedAt[lv], best = up.best && up.best[lv];
    html += '<div class="lv' + (locked ? ' locked' : '') + (passed ? ' passed' : '') + '"><span class="lv-i">' + (locked ? '🔒' : icons[lv]) + '</span><b>第 ' + lv + ' 關・' + LVNAME[lv] + '</b><small>' + desc[lv] + '</small>' +
      '<span class="lv-s">過關門檻 ' + PASS[lv] + '%　最佳 ' + (best != null ? best + '%' : '—') + '</span>' +
      (passed ? '<small>✅ 最後過關：' + fmtT(passed) + '</small>' : '') +
      '<button class="mm-b' + (locked ? '' : ' on') + '" data-act="archGo" data-v="' + lv + '"' + (locked ? ' disabled' : '') + '>' + (locked ? '先過第 ' + (lv - 1) + ' 關' : passed ? '再玩一次' : '開始 ▶') + '</button></div>';
  });
  html += '</div>';
  var nextRv = up.lastPassAt && (up.reviewStep || 0) < REVIEW.length ? '下次提醒：最後過關後第 ' + REVIEW[up.reviewStep || 0] + ' 天' : (up.lastPassAt ? '1／3／7 天複習都完成了' : '還沒有過關紀錄');
  if(DEMO) html += '<div class="demo-box"><b>🕒 示範工具（給家長看效果用）</b><div class="muted">示範時間：' + fmtT(now()) + '　最後過關：' + fmtT(up.lastPassAt) + '　' + nextRv + '</div>' +
    '<div class="row2"><button class="mm-b sm" data-act="clock" data-v="1">⏩ 快轉 1 天</button><button class="mm-b sm" data-act="clock" data-v="3">⏩ 快轉 3 天</button><button class="mm-b sm" data-act="clock" data-v="7">⏩ 快轉 7 天</button><button class="mm-b sm" data-act="clock" data-v="0">回到今天</button>' +
    '<button class="mm-b sm" data-act="unlockAll">🔓 全部解鎖</button><button class="mm-b sm danger" data-act="resetProg">🗑 清除本單元進度</button></div></div>';
  html += '</div>';
  $('#panel').innerHTML = html;
}
function renderL4(){
  var u = unit(), Ls = kidsData(u);
  var html = '<div class="mm-wrap"><div class="tr-head"><span class="t">第 4 關・全默寫' + (arch.review ? '（複習）' : '') + '</span><button class="mm-b sm" data-act="archHome">⬅ 回關卡</button></div>' +
    '<div class="l4u">' + esc(unitLabel(u)) + '：' + esc(u.title) + '<br><span class="muted">' + (CFG.lesson ? '這個單元有 <b>' + Ls.length + '</b> 課。寫出每一課的標題、有幾個主題、主題名稱（順序不計，主題寫在對的那一課底下就算對）。' : '這個單元有 <b>' + Ls.length + '</b> 個大分支。寫出每個大分支、它下面有幾個小分支、小分支的名稱（順序不計，寫在對的大分支底下就算對；關係詞和「應用」這類泛用詞不考）。') + '</span></div>';
  Ls.forEach(function(L, i){
    var a = arch.l4[i], c = LCOL[i % LCOL.length], given = kidsData(L).filter(l4nq).map(function(T){ return T.title; });
    html += '<div class="l4l" style="border-color:' + c.bd + '"><label>' + esc(lessonLabel(L, i)) + esc(CFG.l4Title) + '</label>' +
      (l4nq(L) ? '<div class="muted"><b>' + esc(L.title) + '</b>（不考，已給）</div>' : '<input class="l4in" data-l="' + i + '" data-f="title" value="' + esc(a.title) + '" autocomplete="off" placeholder="' + esc(CFG.l4Ph) + '">') +
      (given.length ? '<div class="muted">已給（不考）：' + given.map(esc).join('、') + '</div>' : '') +
      '<div class="l4n">' + (CFG.lesson ? '這課有幾個主題？' : '下面有幾個小分支？') + (given.length ? '（已給的不算）' : '') + '<button class="mm-b sm" data-act="l4n" data-l="' + i + '" data-v="-1" aria-label="少一個">－</button><b>' + a.n + '</b><button class="mm-b sm" data-act="l4n" data-l="' + i + '" data-v="1" aria-label="多一個">＋</button></div>' +
      '<div class="l4t">' + Array.from({length:a.n}, function(_, j){ return a.topics[j] || ''; }).map(function(t, j){ return '<input class="l4in" data-l="' + i + '" data-f="t" data-j="' + j + '" value="' + esc(t) + '" autocomplete="off" placeholder="' + CFG.l4Kid + ' ' + (j + 1) + '">'; }).join('') + '</div></div>';
  });
  html += '<button class="mm-b big on" style="width:100%;min-height:60px" data-act="l4submit">📮 交卷，看看對不對</button></div>';
  $('#panel').innerHTML = html;
}
/* 第 4 關：標題是不考詞的節點（例「應用」）已給、不計分；小分支數也不算它（Yoda 2026-10-11） */
function l4nq(d){ return SB.isNoQuiz(d.title); }
function l4input(e){ var t = e.target; if(!t.classList.contains('l4in') || !arch || arch.level !== 4) return; var a = arch.l4[+t.dataset.l]; if(t.dataset.f === 'title') a.title = t.value; else a.topics[+t.dataset.j] = t.value; }
/* 第 4 關判分：各層之內的順序不計，只比對「上層對、內容對」（Yoda 2026-10-11）
   - 課（大分支）的順序不計：小朋友寫的每一塊（不考的課除外）配到最像的那一課（標題對 100 分＋底下寫對幾個），再逐塊比對
   - 同一課底下的主題（小分支）順序不計：每個正確主題找一個還沒用過、寫對的格子 */
function l4mine(a){ return Array.from({length:a.n}, function(_, j){ return a.topics[j] || ''; }); }
function l4topicHits(mine, Ts){ var used = {}, n = 0; Ts.forEach(function(T){ var j = -1; mine.forEach(function(v, k){ if(j < 0 && !used[k] && matchKeys(v, T.keys || [T.title])) j = k; }); if(j >= 0){ used[j] = 1; n++; } }); return n; }
function l4pairs(Ls){
  var q = []; Ls.forEach(function(L, i){ if(!l4nq(L)) q.push(i); });
  var p = SB.pairBlocks(q.length, q.length, function(b, g){ var a = arch.l4[q[b]], L = Ls[q[g]], Ts = kidsData(L).filter(function(T){ return !l4nq(T); });
    return (matchKeys(a.title, L.keys || [L.title]) ? 100 : 0) + l4topicHits(l4mine(a), Ts); });
  var out = {}; Ls.forEach(function(L, i){ out[i] = i; }); q.forEach(function(i, b){ out[i] = q[p[b]]; });
  return out;   // 第 i 塊 → 配到的課序號
}
function l4grade(){
  var u = unit(), Ls = kidsData(u), ok = 0, total = 0, rows = '', pair = l4pairs(Ls);
  Ls.forEach(function(L0, i){
    var L = Ls[pair[i]], li = pair[i];
    var a = arch.l4[i], Ts = kidsData(L).filter(function(T){ return !l4nq(T); }), mine = l4mine(a);
    if(l4nq(L)) rows += '<tr class="lh"><td><span class="ind">' + esc(lessonLabel(L, li)) + '</span>（不考，已給）</td><td><span class="ind">' + esc(lessonLabel(L, li)) + '</span>' + esc(L.title) + '</td></tr>';
    else { var lok = matchKeys(a.title, L.keys || [L.title]); total++; if(lok) ok++; mkArch(L.id, lok);
      rows += '<tr class="lh ' + (lok ? 'ok' : 'no') + '"><td><span class="ind">' + esc(lessonLabel(L0, i)) + '</span>' + (esc(a.title) || '（空白）') + '</td><td><span class="ind">' + esc(lessonLabel(L, li)) + '</span>' + esc(L.title) + '</td></tr>'; }
    var nok = a.n === Ts.length; total++; if(nok) ok++;
    rows += '<tr class="' + (nok ? 'ok' : 'no') + '"><td>' + CFG.l4Kid + '數：' + a.n + '</td><td>' + CFG.l4Kid + '數：' + Ts.length + '</td></tr>';
    var used = {}, match = Ts.map(function(T){ var j = -1; mine.forEach(function(v, k){ if(j < 0 && !used[k] && matchKeys(v, T.keys || [T.title])) j = k; }); if(j >= 0){ used[j] = 1; ok++; } mkArch(T.id, j >= 0); total++; return j; });
    var rest = mine.map(function(v, k){ return used[k] ? null : v; }).filter(function(v){ return v != null; });
    Ts.forEach(function(T, t){ var j = match[t], yours = j >= 0 ? mine[j] : (rest.length ? rest.shift() : '');
      rows += '<tr class="tp ' + (j >= 0 ? 'ok' : 'no') + '"><td>' + (j >= 0 ? '✓ ' : '✗ ') + (esc(yours) || '（沒寫）') + '</td><td>' + esc(T.title) + '</td></tr>'; });
    kidsData(L).filter(l4nq).forEach(function(T){ rows += '<tr class="tp"><td>（不考，已給）</td><td>' + esc(T.title) + '</td></tr>'; });
    rest.forEach(function(v){ if(norm(v) && !SB.isNoQuiz(v)) rows += '<tr class="tp no"><td>✗ ' + esc(v) + '（多寫的）</td><td>—</td></tr>'; });
  });
  var pct = Math.round(ok / total * 100);
  coinAnswer(pct >= PASS[4]);
  $('#panel').innerHTML = '<div class="mm-wrap"><div class="tr-head"><span class="t">第 4 關・全默寫：對答案</span><button class="mm-b sm" data-act="archHome">⬅ 回關卡</button></div>' +
    '<table class="cmp"><tr><th>你的架構</th><th>正確架構</th></tr>' + rows + '</table></div>';
  $('#panel').scrollTop = 0;
  showArchResult(ok, total);
}

/* ---------- 練習題 ---------- */
var QTYPE = {mc:'選擇題', tf:'是非題', order:'排順序', match:'配對題'};
/* 一輪抽 QN 題（SB.pickQuiz）：還沒答對過 → 錯題庫裡的 → 其他；各層內難度 d 由小到大，出題順序也照 d。答對過的題存在 kids_mm_blanks[單元].q（題目雜湊 → 1，會同步） */
var QN = 15;
function qHash(s){ var K = KMx(); return K ? K.hash(s) : String(s); }
function startQuiz(){ var u = unit(), K = KMx(), mk = {};
  if(K) try{ K.list(SUBJ, u.id).forEach(function(e){ var h = e.id.split('|q|')[1]; if(h) mk[h] = 1; }); }catch(e){}
  QZ = {i:0, ok:0, items:SB.pickQuiz(u.quiz || [], QN, qHash, bstore(u.id).q || {}, mk, R).map(prepQ)}; renderQuiz(); }
function qzOk(q){ var uid = unit().id, st = bstore(uid), h = qHash(q.q); if((st.q || {})[h]) return; (st.q = st.q || {})[h] = 1; bsave(uid, st); }
function prepQ(q){ var o = {q:q, done:false, right:false};
  if(q.type === 'mc') o.ord = shuffle(q.opts.map(function(_, i){ return i; }));
  if(q.type === 'order'){ o.pool = shuffle(q.items.map(function(_, i){ return i; })); o.placed = []; if(o.pool.every(function(v, i){ return v === i; })) o.pool.reverse(); }
  if(q.type === 'match'){ o.rord = shuffle(q.pairs.map(function(_, i){ return i; })); o.map = {}; o.sel = null; }
  return o; }
function renderQuiz(){
  var P = $('#panel'), u = unit();
  if(!QZ.items.length){ P.innerHTML = QZ.mk ? '<div class="mm-wrap"><p class="mk-empty" id="mkEmpty">' + (RVMODE ? '今天都複習完了 🎉' : '目前沒有錯題 🎉') + '</p><p><a class="mm-b on" target="_top" href="' + mkBack() + '">' + mkBackLab() + '</a></p></div>' : '<div class="mm-wrap"><p>這個單元還沒有練習題。</p></div>'; return; }
  if(QZ.i >= QZ.items.length && QZ.mk){
    var mn = QZ.items.length;
    P.innerHTML = '<div class="mm-wrap"><div class="card result center" id="mkResult"><div class="party">' + (QZ.ok === mn ? '🏆' : '💪') + '</div><div class="score">' + QZ.ok + ' / ' + mn + '</div>' +
      (QZ.grad ? '<p>🎓 有 ' + QZ.grad + ' 題錯題畢業了！</p>' : '') + '<p>到期答對的題，會隔 3 天、7 天再考一次；第 3 次到期也答對就畢業。答錯的明天再複習。</p>' +
      '<div class="share-row">' + (RVMODE ? '' : '<button class="mm-b on" data-act="mkAgain">🔁 再練一次</button>') + '<a class="mm-b' + (RVMODE ? ' on' : '') + '" target="_top" href="' + mkBack() + '">' + mkBackLab() + '</a></div></div></div>';
    return;
  }
  if(QZ.i >= QZ.items.length){
    var n = QZ.items.length, pct = Math.round(QZ.ok / n * 100);
    P.innerHTML = '<div class="mm-wrap"><div class="card result center"><div class="party">' + (pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '💪') + '</div><div class="score">' + QZ.ok + ' / ' + n + '</div><p>答對率 ' + pct + '%</p>' +
      '<div class="share-row">' + (QZ.ia ? '<button class="mm-b on" data-act="iaAgain">🔁 再來 ' + IA_N + ' 題</button><button class="mm-b" data-act="mode" data-v="read">📖 回去看重點</button>' : '<button class="mm-b on" data-act="quizAgain">🔁 再做一次</button><button class="mm-b" data-act="mode" data-v="arch">🧠 去背架構</button>') + '</div></div></div>';
    return;
  }
  var it = QZ.items[QZ.i], q = it.q, body = '';
  if(q.type === 'ia') body = '<div id="iaBox"></div>';
  else if(q.type === 'fill'){
    body = it.done ? '' : '<div class="l3row"><input id="mkIn" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="空格裡是什麼？" enterkeyhint="done"></div>' +
      '<div class="share-row"><button class="mm-b on" data-act="qfill">✅ 確定</button><button class="mm-b" data-act="qfillSkip">👀 不會</button></div>';
  } else if(q.type === 'card'){
    body = '<div class="fc-stage">' + fcFace(q.f, q.b, it.flip || it.done, 'qcFlip') + '</div>' + (it.done ? '' : it.flip ? '<div class="fc-row fc-ans"><button class="mm-b no" data-act="qcAns" data-v="0">再想想 ✗</button><button class="mm-b ok" data-act="qcAns" data-v="1">我記得 ✓</button></div>' :
      '<div class="fc-row"><button class="mm-b" data-act="qcSay">🔊 朗讀</button></div><p class="muted center">先想一想，再點卡片翻面</p>');
  } else if(q.type === 'mc'){
    body = '<div class="opts">' + it.ord.map(function(oi){ var cls = ''; if(it.done){ if(oi === q.a) cls = ' right'; else if(oi === it.pick) cls = ' wrong'; } return '<button class="opt' + cls + '" data-act="qmc" data-v="' + oi + '"' + (it.done ? ' disabled' : '') + '>' + esc(q.opts[oi]) + '</button>'; }).join('') + '</div>';
  } else if(q.type === 'tf'){
    body = '<div class="opts">' + [true, false].map(function(v){ var cls = ''; if(it.done){ if(v === q.a) cls = ' right'; else if(v === it.pick) cls = ' wrong'; } return '<button class="opt' + cls + '" data-act="qtf" data-v="' + v + '"' + (it.done ? ' disabled' : '') + '>' + (v ? '⭕ 對' : '❌ 錯') + '</button>'; }).join('') + '</div>';
  } else if(q.type === 'order'){
    body = '<div class="placed">' + (it.placed.length ? it.placed.map(function(ii, k){ return '<button class="chip on" data-act="qoBack" data-v="' + k + '"' + (it.done ? ' disabled' : '') + '>' + (k + 1) + '. ' + esc(q.items[ii]) + '</button>'; }).join('') : '<span class="muted">依序點下面的卡片 👇（點上面的可以拿回來）</span>') + '</div>' +
      '<div class="pool">' + it.pool.map(function(ii){ var used = it.placed.indexOf(ii) >= 0; return '<button class="chip' + (used ? ' used' : '') + '" data-act="qoPick" data-v="' + ii + '"' + (it.done ? ' disabled' : '') + '>' + esc(q.items[ii]) + '</button>'; }).join('') + '</div>' +
      (it.done ? '' : '<div class="share-row"><button class="mm-b" data-act="qoReset">↩ 重來</button><button class="mm-b on" data-act="qoCheck"' + (it.placed.length < q.items.length ? ' disabled' : '') + '>✅ 確定</button></div>');
  } else if(q.type === 'match'){
    var rIdx = {}; Object.keys(it.map).forEach(function(l){ rIdx[it.map[l]] = +l; });
    body = '<div class="mt-grid"><div class="mt-col">' + q.pairs.map(function(pr, l){ var m = it.map[l], pn = m != null ? '<span class="pn" style="background:' + PAIRC[l % PAIRC.length] + '">' + (l + 1) + '</span>' : '<span class="pn" style="background:#c9bfae">' + (l + 1) + '</span>';
        var cls = it.done ? (m === l ? ' r-ok' : ' r-no') : (it.sel === l ? ' sel' : ''); return '<button class="mt' + cls + '" data-act="qmL" data-v="' + l + '"' + (it.done ? ' disabled' : '') + '>' + pn + esc(pr[0]) + '</button>'; }).join('') + '</div>' +
      '<div class="mt-col">' + it.rord.map(function(r){ var l = rIdx[r], pn = l != null ? '<span class="pn" style="background:' + PAIRC[l % PAIRC.length] + '">' + (l + 1) + '</span>' : ''; return '<button class="mt" data-act="qmR" data-v="' + r + '"' + (it.done ? ' disabled' : '') + '>' + pn + esc(q.pairs[r][1]) + '</button>'; }).join('') + '</div></div>' +
      (it.done ? '' : '<p class="muted">先點左邊，再點右邊配成一對；點左邊已配好的可以重配。</p><div class="share-row"><button class="mm-b on" data-act="qmCheck"' + (Object.keys(it.map).length < q.pairs.length ? ' disabled' : '') + '>✅ 確定</button></div>');
  }
  var fb = '';
  if(it.done){
    var extra = q.type === 'order' && !it.right ? '<ol class="ord-list">' + q.items.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>' : q.type === 'match' && !it.right ? '<ul class="ord-list">' + q.pairs.map(function(pr){ return '<li>' + esc(pr[0]) + ' ↔ ' + esc(pr[1]) + '</li>'; }).join('') + '</ul>' : '';
    fb = '<div class="fb ' + (it.right ? 'ok' : 'no') + '"><div class="fbh">' + (q.type === 'card' ? (it.right ? '記得 👍' : '沒關係，明天再看一次 💪') : it.right ? '答對了！🎉' : '再看一次 👀') + '</div><div class="why">' + esc(q.why || '') + extra + '</div></div>' +
      '<button class="mm-b big on" style="width:100%;margin-top:12px" data-act="qNext">' + (QZ.i + 1 < QZ.items.length ? '下一題 ▶' : '看結果 🏁') + '</button>';
  }
  var mu = QZ.mk ? ALL_UNITS.filter(function(x){ return x.id === it.mu; })[0] : null;
  var headL = QZ.mk ? (RVMODE ? '🔁 今天要複習' : '📕 錯題練習') + (mu ? '・' + esc(unitLabel(mu)) : '') : (QZ.ia ? IA_LAB : '📝 練習題') + '・' + esc(unitLabel(u));
  if(QZ.mk && it.done && !it.right && q.type === 'fill' && it.input) fb = fb.replace('<div class="why">', '<div class="why">你寫「' + esc(it.input) + '」。');
  P.innerHTML = '<div class="mm-wrap"><div class="qz-head"><span>' + headL + '</span><span>第 ' + (QZ.i + 1) + ' / ' + QZ.items.length + ' 題　答對 ' + QZ.ok + '</span></div>' +
    '<div class="bar"><i style="width:' + Math.round(QZ.i / QZ.items.length * 100) + '%"></i></div>' +
    (q.ctx ? '<details class="lit-ctx" open><summary>📖 看資料〈' + esc(q.ctx.title) + '〉</summary>' + litArt(q.ctx) + '</details>' : '') +
    '<div class="card qcard" style="margin-top:12px;text-align:left"><span class="qtype">' + (q.tl || QTYPE[q.type]) + '</span><div class="qz-q">' + (q.type === 'fill' ? mkFillHTML(it) : q.type === 'card' ? '' : esc(q.q)) + '</div>' + body + '</div>' + fb + '</div>';
  var ibx = $('#iaBox'); if(ibx) IAx().mount(ibx, q, it.st || (it.st = {}), {map:D.iaMap, done:it.done, toast:toast, onAnswer:function(ok){ quizDone(ok); }});
  var mi = $('#mkIn'); if(mi){ try{ mi.focus(); }catch(e){} mi.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); ACT.qfill(); } }); }
}
function quizDone(right){ var it = QZ.items[QZ.i], card = it.q.type === 'card'; it.done = true; it.right = right; if(right) QZ.ok++; if(!card) coinAnswer(right);   // 閃卡自己判斷，不算學習幣
  if(QZ.mk){ try{ if(KMx().record(SUBJ, it.mk, right) === 'graduated') QZ.grad++; }catch(e){} }
  else if(QZ.ia) iaRec(it.q, right);
  else { mkQuiz(it.q, right); if(right) qzOk(it.q); exMarkSeen(['q:' + qHash(it.q.q)]); }   // 單元測驗抽題時避開最近 7 天做過的
  if(QZ.items.every(function(x){ return x.done; }) && !QZ.reported){ QZ.reported = true; var qs = QZ.items.filter(function(x){ return x.q.type !== 'card'; }); coinRound(QZ.mk ? 'mistakes' : 'quiz', qs.filter(function(x){ return x.right; }).length, qs.length); if(!QZ.mk && !QZ.ia) doneRec('qz', Math.round(QZ.ok / QZ.items.length * 100)); }
  renderQuiz(); }

/* ---------- 🧩 素養題組（2026-11-01）----------
   每單元 5 組：一段資料（表格／SVG 圖／時間軸／短文）＋4 題，由易到難（d 1→3：讀出資料 → 比較找規律 → 推論預測 → 應用評估）。
   題目元件＝../quizkit.js（mc／tf／order／match）；開放題 type 'open'＝寫完（≥ ZR.OPEN_MIN 字）看參考答案＋評分要點自己對照；判分 ZR.grade（同國語閱讀）。
   學習幣：每題 KidsCoins.answer(ok, 科)；一組只有 3～4 題自動判分（後端一輪要 ≥ 5 題），所以不送 practice_round。
   錯題庫 id＝'<單元>|L|<題組id>:<題id>'（p.k 'L'），只練錯題時連同資料原題重做（mkQ）。不算進單元完成（不呼叫 doneRec）。
   本機紀錄（不同步）：localStorage kids_mm_lit＝{'<科>:<題組id>':{best:最佳 %, n:做了幾輪, at, open:{題id:開放題寫的內容}}}。 */
var LKEY = 'kids_mm_lit', LT = null;
var LSTEP = ['讀出資料', '比較・找規律', '推論・預測', '應用・評估'];
function ZRx(){ return window.ZhReading; }
function QKx(){ return window.QuizKit; }
function litSets(u){ u = u || unit(); return (u && D.lit && D.lit[u.id]) || []; }
function litOn(){ return !!(ZRx() && QKx() && litSets().length); }
function litArt(st){ var Z = ZRx(); return '<article class="zr-art lit-art"><h2>' + esc(st.title) + '</h2>' + (Z ? st.body.map(Z.blockHTML).join('') : '') + '</article>'; }
function litKind(st){ var k = []; st.body.forEach(function(b){ var t = b.table ? '表格' : b.svg ? '圖' : b.timeline ? '時間軸' : ''; if(t && k.indexOf(t) < 0) k.push(t); }); return k.length ? k : ['短文']; }
function litProg(id){ return lsGet(LKEY, {})[SUBJ + ':' + id] || {}; }
function renderLitHome(){
  LT = null; var u = unit(), sets = litSets(u);
  $('#panel').innerHTML = '<div class="mm-wrap"><h2>🧩 素養題組・' + esc(unitLabel(u)) + '</h2><p class="muted">讀一段資料（表格、圖、紀錄或短文），回答 4 題：讀出資料 → 比較 → 推論 → 應用。答錯的題會進錯題庫；這裡不算進單元完成，想練就練！</p>' +
    (sets.length ? '<div class="lit-grid">' + sets.map(function(st, i){ var pr = litProg(st.id);
      return '<button class="lit-card' + (pr.n ? (pr.best === 100 ? ' done' : ' tried') : '') + '" data-act="litGo" data-v="' + i + '"><small>第 ' + (i + 1) + ' 組・' + litKind(st).join('＋') + '</small><b>' + esc(st.title) + '</b><span>' + (pr.n ? (pr.best === 100 ? '✅ 全對過' : '🟡 最佳 ' + pr.best + '%') : '⚪ 還沒做') + '</span></button>'; }).join('') + '</div>'
      : '<p>這個單元還沒有素養題組。</p>') + '</div>';
}
function startLit(i){
  var st = litSets()[i]; if(!st){ renderLitHome(); return; }
  var Z = ZRx(), Q = QKx(), old = litProg(st.id).open || {}; Q.css();
  LT = {i:i, st:st, reported:false, items:st.qs.map(function(q){ return Z.isOpen(q) ? {q:q, done:false, right:false, text:old[q.id] || ''} : Q.prep(q, R); })};
  renderLit(); $('#panel').scrollTop = 0;
}
function litCard(it, i){
  var Z = ZRx(), Q = QKx(), q = it.q, open = Z.isOpen(q), cls = it.done ? (open || it.right ? ' ok' : ' no') : '', body;
  if(open) body = !it.done ? '<div class="zr-open"><textarea class="lit-draft" aria-label="我的回答" placeholder="把你的想法寫下來（至少 ' + Z.OPEN_MIN + ' 個字）…">' + esc(it.text) + '</textarea><div class="row"><button type="button" class="btn primary" data-act="litOpen" data-v="' + i + '">✅ 寫好了，看參考答案</button></div></div>'
    : '<div class="zr-open"><p><b>我的回答：</b>' + esc(it.text) + '</p></div><div class="zr-ref"><b>💡 參考答案</b><p>' + esc(q.ref) + '</p><b>✅ 評分要點：對照看看，你寫到了哪幾點？</b><ul>' +
      q.rubric.map(function(r){ return '<li><label><input type="checkbox"><span>' + esc(r) + '</span></label></li>'; }).join('') + '</ul><small class="muted">「想一想」不計分，寫完就算完成這一題。</small></div>';
  else body = Q.body(it) + (it.done ? '<div class="fb ' + (it.right ? 'ok' : 'no') + '"><div class="fbh">' + (it.right ? '答對了！🎉' : '再看一次 👀') + '</div><div>' + esc(q.why) + Q.extra(it) + '</div></div>' : '');
  return '<div class="zr-q' + cls + '" id="lq' + i + '" data-i="' + i + '"><div class="zr-qh"><span>第 ' + (i + 1) + ' 題</span><span>' + LSTEP[i] + '</span><span aria-label="難度 ' + q.d + '">' + '★★★'.slice(0, q.d) + '☆☆☆'.slice(0, 3 - q.d) + '</span><span class="qtype" style="margin:0">' + (open ? '✍️ 想一想' : Q.TYPES[q.type]) + '</span></div>' +
    '<p class="zr-qt">' + esc(q.q) + '</p>' + body + '<p class="zr-msg" data-msg aria-live="polite"></p></div>';
}
function renderLit(){
  $('#panel').innerHTML = '<div class="mm-wrap"><div class="tr-head"><span class="t">🧩 第 ' + (LT.i + 1) + ' / ' + litSets().length + ' 組</span><button class="mm-b sm" data-act="litHome">⬅ 回題組</button></div>' +
    litArt(LT.st) + '<section class="zr-qs lit-qs" aria-label="題目">' + LT.items.map(litCard).join('') + '</section><div id="litRes">' + litResHTML() + '</div></div>';
}
function litPaint(i){ var el = $('#lq' + i); if(el) el.outerHTML = litCard(LT.items[i], i); var r = $('#litRes'); if(r) r.innerHTML = litResHTML(); }
function litResHTML(){
  if(!LT || !LT.items.every(function(x){ return x.done; })) return '';
  var g = ZRx().grade(LT.items), nx = LT.i + 1 < litSets().length;
  return '<div class="card result center" id="litResult"><div class="party">' + (g.ok === g.n ? '🏆' : '💪') + '</div><div class="score">' + g.ok + ' / ' + g.n + '</div><p>自動判分題答對 ' + g.pct + '%' + (g.n < LT.items.length ? '・想一想寫好了 ✅' : '') + '</p>' +
    '<div class="share-row"><button class="mm-b" data-act="litAgain">🔁 再做一次</button><button class="mm-b" data-act="litHome">🧩 回題組</button>' + (nx ? '<button class="mm-b on" data-act="litGo" data-v="' + (LT.i + 1) + '">下一組 ▶</button>' : '') + '</div></div>';
}
function litAnswer(i, ok){
  var q = LT.items[i].q, u = unit(); coinAnswer(ok);
  mkRec(u.id + '|L|' + LT.st.id + ':' + q.id, ok, {u:u.id, k:'L', s:String(q.q).slice(0, 120), a:String(QKx().answerText(q)).slice(0, 120)});
  litPaint(i); litFinish();
}
function litFinish(){
  if(LT.reported || !LT.items.every(function(x){ return x.done; })) return;
  LT.reported = true;
  var g = ZRx().grade(LT.items), all = lsGet(LKEY, {}), k = SUBJ + ':' + LT.st.id, p = all[k] || {};
  p.best = Math.max(p.best || 0, g.pct); p.n = (p.n || 0) + 1; p.at = Date.now(); p.open = {};
  LT.items.forEach(function(x){ if(ZRx().isOpen(x.q)) p.open[x.q.id] = String(x.text).slice(0, 2000); });
  all[k] = p; lsSet(LKEY, all);
}
document.addEventListener('click', function(e){   // quizkit 的作答按鈕（data-qk）
  var k = e.target.closest && e.target.closest('[data-qk]'); if(!k || k.disabled || !LT || UI.mode !== 'lit') return;
  var i = +k.closest('.zr-q').getAttribute('data-i'), r = QKx().act(LT.items[i], k.getAttribute('data-qk'), k.getAttribute('data-v'));
  if(r.result != null) litAnswer(i, r.result); else if(r.render) litPaint(i); else if(r.msg) toast(r.msg);
});
document.addEventListener('input', function(e){ var t = e.target; if(LT && t.classList && t.classList.contains('lit-draft')) LT.items[+t.closest('.zr-q').getAttribute('data-i')].text = t.value; });

/* ---------- 🃏 閃卡（2026-11-01）----------
   卡片在 data/<科>/cards.js（<資料>.cards[單元id] = [{id, f:名詞, b:說明, ref}]）。一輪 FCN 張：沒看過 → 記不得的（錯題庫裡、還在第 1 天那一關）→ 到期該複習的 → 其他看過的（最久沒看的先）。
   點卡片翻面（🔊 朗讀 zh-TW），左右滑動或 ◀ ▶ 換卡；翻面後按「我記得 ✓」「再想想 ✗」→ 錯題庫 '<單元>|F|<卡id>'（社會、自然走 1 → 3 → 7 天的間隔，規則在 ../kids-mistakes.js）。
   自己判斷記不記得，所以不算學習幣、不算單元完成。本機紀錄（不同步）：localStorage kids_mm_cards＝{'<科>:<卡id>': 最後翻面時間}（＝看過了）。 */
var CKEY = 'kids_mm_cards', FCN = 15, FC = null;
var FCTAG = ['🆕 沒看過', '🤔 記不得的', '🔁 該複習了', '👀 再看一次'];
function cardsOf(u){ u = u || unit(); return (u && D.cards && D.cards[u.id]) || []; }
function cardById(uid, id){ return ((D.cards && D.cards[uid]) || []).filter(function(c){ return c.id === id; })[0] || null; }
function fcPick(){
  var u = unit(), K = KMx(), seen = lsGet(CKEY, {}), book = {}, t = K && K.now ? K.now() : Date.now(), T = [[], [], [], []];
  if(K) try{ K.list(SUBJ, u.id).forEach(function(e){ book[e.id] = e; }); }catch(e){}
  cardsOf(u).forEach(function(c, i){
    var e = book[u.id + '|F|' + c.id], sn = seen[SUBJ + ':' + c.id];
    if(!e && !sn) T[0].push({c:c, tier:0, k:i});
    else if(e && !e.c) T[1].push({c:c, tier:1, k:e.t});
    else if(e && K._core.isDue(e, t)) T[2].push({c:c, tier:2, k:e.due || 0});
    else T[3].push({c:c, tier:3, k:sn || 0});
  });
  return T.map(function(x, i){ return i ? x.sort(function(a, b){ return a.k - b.k; }) : x; }).reduce(function(a, x){ return a.concat(x); }, []).slice(0, FCN)
    .map(function(x){ return {c:x.c, tier:x.tier, ans:null}; });
}
function startCards(){ sayStop(); FC = {i:0, flip:false, items:fcPick()}; renderCards(); }
function fcFace(f, b, flip, act, tag){
  return '<button type="button" class="fc-card' + (flip ? ' flip' : '') + '" data-act="' + act + '" aria-label="' + (flip ? '翻回正面' : '點一下翻面') + '"><span class="fc-in">' +
    '<span class="fc-face fc-front">' + (tag ? '<small>' + tag + '</small>' : '') + '<b>' + esc(f) + '</b><small>👆 點一下翻面</small></span>' +
    '<span class="fc-face fc-back"><b>' + esc(f) + '</b><span>' + esc(b) + '</span></span></span></button>';
}
function renderCards(){
  var P = $('#panel'), u = unit(), n = FC.items.length;
  if(!n){ P.innerHTML = '<div class="mm-wrap"><p>這個單元還沒有閃卡。</p></div>'; return; }
  if(FC.i >= n){
    var ok = FC.items.filter(function(x){ return x.ans === true; }).length, no = FC.items.filter(function(x){ return x.ans === false; }).length;
    P.innerHTML = '<div class="mm-wrap"><div class="card result center" id="fcResult"><div class="party">🃏</div><div class="score">記得 ' + ok + ' 張・再想想 ' + no + ' 張</div>' +
      '<p>按「再想想」的卡收進錯題庫，隔 1 天、3 天、7 天會出現在「🔁 今天要複習」；到期都記得就畢業 🎓</p>' +
      '<div class="share-row"><button class="mm-b on" data-act="fcAgain">🔁 再來一輪</button><button class="mm-b" data-act="mode" data-v="read">📖 回去看重點</button></div></div></div>';
    return;
  }
  var it = FC.items[FC.i];
  P.innerHTML = '<div class="mm-wrap"><div class="qz-head"><span>🃏 閃卡・' + esc(unitLabel(u)) + '</span><span>第 ' + (FC.i + 1) + ' / ' + n + ' 張</span></div>' +
    '<div class="bar"><i style="width:' + Math.round(FC.i / n * 100) + '%"></i></div>' +
    '<div class="fc-stage" id="fcStage">' + fcFace(it.c.f, it.c.b, FC.flip, 'fcFlip', FCTAG[it.tier]) + '</div><div id="fcRows">' + fcRows() + '</div></div>';
}
function fcRows(){
  var it = FC.items[FC.i];
  var nav = '<div class="fc-row"><button class="mm-b" data-act="fcPrev" aria-label="上一張"' + (FC.i ? '' : ' disabled') + '>◀</button><button class="mm-b" data-act="fcSay">🔊 朗讀</button><button class="mm-b" data-act="fcNext" aria-label="下一張">▶</button></div>';
  if(it.ans != null) return '<p class="center fc-done">' + (it.ans ? '✓ 這張你記得' : '✗ 這張明天再複習') + '</p>' + nav;
  return (FC.flip ? '<div class="fc-row fc-ans"><button class="mm-b no" data-act="fcAns" data-v="0">再想想 ✗</button><button class="mm-b ok" data-act="fcAns" data-v="1">我記得 ✓</button></div>' : '<p class="muted center">想一想它是什麼意思，再點卡片翻面；左右滑動可以換卡</p>') + nav;
}
function fcSeen(c){ var all = lsGet(CKEY, {}); all[SUBJ + ':' + c.id] = Date.now(); lsSet(CKEY, all); }
function fcGo(d){ sayStop(); FC.i = clamp(FC.i + d, 0, FC.items.length); FC.flip = false; renderCards(); }
/* 朗讀：瀏覽器內建語音 zh-TW（同國語閱讀 chinese/reading.js） */
function zhVoice(){ try{ var v = speechSynthesis.getVoices(); return v.filter(function(x){ return /^zh[-_]TW/i.test(x.lang); })[0] || v.filter(function(x){ return /^zh[-_](HK|Hant)/i.test(x.lang); })[0] || v.filter(function(x){ return /^zh/i.test(x.lang); })[0] || null; }catch(e){ return null; } }
function say(text){ try{ if(!window.speechSynthesis) return; speechSynthesis.cancel(); var m = new SpeechSynthesisUtterance(text), v = zhVoice(); m.lang = 'zh-TW'; if(v) m.voice = v; m.rate = 0.9; speechSynthesis.speak(m); }catch(e){} }
function sayStop(){ try{ if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){} }
function sayCard(c, back){ say(back ? c.f + '。' + c.b : c.f); }
/* 左右滑動換卡（iPad）：水平移動 > 50px 且比垂直多 */
var fcTouch = null;
function fcSwipeInit(){
  var P = $('#panel');
  P.addEventListener('touchstart', function(e){ fcTouch = UI.mode === 'card' && FC && e.touches.length === 1 && e.target.closest('#fcStage') ? {x:e.touches[0].clientX, y:e.touches[0].clientY} : null; }, {passive:true});
  P.addEventListener('touchend', function(e){ if(!fcTouch) return; var t = e.changedTouches[0], dx = t.clientX - fcTouch.x, dy = t.clientY - fcTouch.y; fcTouch = null;
    if(Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)){ e.preventDefault(); fcGo(dx < 0 ? 1 : -1); } });
}

/* ---------- 🗺️ 互動圖題／🧪 實驗模擬（2026-11-02）----------
   題目元件 interactive.js（MMInteractive）：地圖點選、時間軸排序（拖拉＋點選替代）、實驗模擬（影子、石蕊試紙、彈簧、摩擦力）；資料 data/<科>/interactive.js 的 <資料>.ia[單元id]。
   一輪 IA_N 題（SB.pickQuiz，以題目 id 當 key）：沒做過的 → 錯題庫裡的 → 其他，照 d 由易到難；畫面、回饋、結果頁沿用練習題（QZ.ia）。
   學習幣：每題 KidsCoins.answer；一輪送 practice_round '<科>:quiz'（沿用練習題的事件）。錯題庫 id '<單元>|I|<題id>'（p.k 'I'）。不算單元完成（不呼叫 doneRec）。
   本機紀錄（不同步，同素養題組）：localStorage kids_mm_ia＝{'<科>:<題id>': {n:做了幾次, ok:最近一次對不對, at}}。 */
var IKEY = 'kids_mm_ia', IA_N = 10, IA_LAB = SUBJ === 'science' ? '🧪 實驗模擬' : '🗺️ 互動圖題';
function IAx(){ return window.MMInteractive; }
function iaOf(u){ u = u || unit(); return (IAx() && u && D.ia && D.ia[u.id]) || []; }
function iaById(uid, id){ return ((D.ia && D.ia[uid]) || []).filter(function(q){ return q.id === id; })[0] || null; }
function startIA(){ var u = unit(), K = KMx(), mk = {}, done = {}, rec = lsGet(IKEY, {});
  if(K) try{ K.list(SUBJ, u.id).forEach(function(e){ var h = e.id.split('|I|')[1]; if(h) mk[h] = 1; }); }catch(e){}
  iaOf(u).forEach(function(q){ if(rec[SUBJ + ':' + q.id]) done[q.id] = 1; });
  var pick = SB.pickQuiz(iaOf(u).map(function(q){ return {q:q.id, d:q.d, x:q}; }), IA_N, function(id){ return id; }, done, mk, R);
  QZ = {i:0, ok:0, ia:true, items:pick.map(function(o){ return {q:Object.assign({type:'ia', tl:IAx().label(o.x)}, o.x), done:false, right:false}; })}; renderQuiz(); }
function iaRec(q, ok){ var u = unit(), all = lsGet(IKEY, {}), k = SUBJ + ':' + q.id, r = all[k] || {}; r.n = (r.n || 0) + 1; r.ok = ok ? 1 : 0; r.at = Date.now(); all[k] = r; lsSet(IKEY, all);
  mkRec(u.id + '|I|' + q.id, ok, {u:u.id, k:'I', s:String(q.q).slice(0, 120), a:String(IAx().ansText(q, D.iaMap)).slice(0, 120)}); }

/* ---------- 📕 只練錯題（?mistakes=1；首頁錯題庫按「只練錯題」開這頁）----------
   把錯題庫裡的三種題混成一輪：考考自己的挖空詞（fill：那句重點挖掉那個詞，自己寫）、背架構的節點（選擇題：上層位置＋選標題，
   干擾項不放同一上層的兄弟）、練習題（原題）。每題作答照錯題庫規則記（答錯回到 1 天、到期答對往 3 天、7 天走，第 3 次畢業）；一輪結束送 practice_round '<科>:mistakes'。 */
function findPid(u, pid){ var hit = null; (function w(d){ if(hit) return; if(pid === d.id + '-s' || (pid.indexOf(d.id + '-p') === 0 && /^\d+$/.test(pid.slice(d.id.length + 2)))) hit = d; kidsData(d).forEach(w); })(u); return hit; }
function mkQ(e){
  var p = e.p || {}, K = KMx(), u = ALL_UNITS.filter(function(x){ return x.id === p.u; })[0]; if(!u || !K) return null;
  if(p.k === 'q'){ var h = e.id.split('|q|')[1]; return (u.quiz || []).filter(function(q){ return K.hash(q.q) === h; })[0] || null; }
  if(p.k === 'L'){ var lm = /\|L\|(.+):(q\d+)$/.exec(e.id), ls = lm && litSets(u).filter(function(x){ return x.id === lm[1]; })[0], lq = ls && ls.qs.filter(function(x){ return x.id === lm[2]; })[0];   // 素養題組：原題重做，連同資料
    return lq && lq.type !== 'open' ? Object.assign({}, lq, {tl:'🧩 素養題組', ctx:ls}) : null; }
  if(p.k === 'X'){ var xid = e.id.split('|X|')[1], E = D.exam && D.exam[u.id]; if(!E) return null;   // 單元測驗新題：原題重做（題組題連同資料）
    var xq = E.qs.filter(function(x){ return x.id === xid; })[0]; if(xq) return Object.assign({}, xq, {tl:'📄 單元測驗'});
    var gq = E.grp && E.grp.qs.filter(function(x){ return x.id === xid; })[0]; return gq ? Object.assign({}, gq, {tl:'📄 單元測驗・題組', ctx:E.grp}) : null; }
  if(p.k === 'I'){ var iq = iaById(u.id, e.id.split('|I|')[1]); return iq ? Object.assign({}, iq, {type:'ia', tl:IAx().label(iq)}) : null; }   // 互動圖題／實驗模擬：原題重做（同一張圖、同一個起始狀態）
  if(p.k === 'F'){ var cd = cardById(u.id, e.id.split('|F|')[1]) || {f:p.a, b:p.s}; return cd.f ? {type:'card', tl:'🃏 閃卡', q:cd.f, f:cd.f, b:cd.b || '', why:''} : null; }   // 閃卡：翻面、自己判斷記不記得
  if(p.k === 'a'){
    var nid = e.id.split('|a|')[1], seq = archSeq(u), it = seq.filter(function(s){ return s.id === nid; })[0]; if(!it || it.nq) return null;
    var sib = {}; seq.forEach(function(s){ if(s.par === it.par) sib[s.title] = 1; });   // 同一上層的兄弟也是對的 → 不當干擾項
    var pool = shuffle(Array.from(new Set(seq.filter(function(s){ return !s.nq && s.kind === it.kind && !sib[s.title]; }).map(function(s){ return s.title; }))));
    if(pool.length < 3) pool = pool.concat(shuffle(Array.from(new Set(seq.filter(function(s){ return !s.nq && s.kind !== it.kind && !sib[s.title]; }).map(function(s){ return s.title; })))));
    var ap = archPath(u, nid);
    return {type:'mc', tl:'背架構', q:ap ? ap.path : it.title, opts:[it.title].concat(pool.slice(0, 3)), a:0, why:'正確答案：' + it.title};
  }
  if(p.k === 'w'){
    var d = p.pid ? findPid(u, p.pid) : null, np = null, ci = -1;
    if(d){ var pi = /-s$/.test(p.pid) ? -1 : +p.pid.split('-p').pop(); np = npByPid(d, pi); }
    if(np){ ci = np.cands[p.ci] && np.cands[p.ci].w === p.a ? p.ci : np.cands.map(function(c){ return c.w; }).indexOf(p.a); }
    if(!np || ci < 0 || np.cands[ci].i < 0){ if(!p.s || !p.a || p.s.indexOf(p.a) < 0) return null; np = SB.normPoint({t:p.s, cands:[{w:p.a}]}); ci = 0; }
    var c = np.cands[ci];
    return {type:'fill', tl:'考考自己', q:'', np:np, ci:ci, w:c.w, alts:c.alts, why:'正確答案：' + c.w};
  }
  return null;
}
function startMk(){
  var K = KMx(), L = K ? (RVMODE ? K.due(SUBJ) : K.list(SUBJ)).filter(function(e){ return !ONLY || e.p.u === ONLY; }) : [], items = [];
  L.forEach(function(e){ if(items.length >= ((K && K.ROUND) || 30)) return; var q = mkQ(e); if(!q) return; var o = prepQ(q); o.mk = e.id; o.mu = e.p.u; o.input = ''; items.push(o); });
  QZ = {i:0, ok:0, grad:0, items:shuffle(items), mk:true}; showPanel(); renderQuiz();
}
function mkFillHTML(it){
  var q = it.q;
  return SB.segments(q.np, new Set([q.ci])).map(function(s){
    if(s.t != null) return esc(s.t);
    if(!s.hidden) return esc(s.c.w);
    return it.done ? '<b class="kw">' + esc(s.c.w) + '</b>' : '<span class="tgt">＿＿＿</span>';
  }).join('');
}
function mkBack(){ return '../index.html#s/' + SUBJ + (RVMODE ? '' : '/mistakes' + (ONLY ? '-' + ONLY : '')); }
function mkBackLab(){ return RVMODE ? '← 回' + CFG.name : '📕 回錯題庫'; }

/* ---------- 📄 單元測驗／📝 段考模擬（2026-11-01）----------
   組卷與判分在 exam.js（MMExam）：單元測驗 25 題、段考模擬 30 題（兩單元），配分 100；新題在 data/<科>/exam1-4.js，另一半從練習題庫挑，避開最近 7 天做過的題。
   作答時不說對錯，交卷才一起看：分數、每題解析、錯題標紅；錯題進錯題庫（題庫題 '<單元>|q|<雜湊>'，跟練習題同一筆；新題 '<單元>|X|<題id>'）；
   依答錯的題建議回去複習哪個重點（連到 ?u=<單元>&focus=<節點>）。段考可選 40 分鐘限時（預設關，時間到自動交卷）。
   學習幣：交卷時每題 KidsCoins.answer；一份送 practice_round '<科>:quiz'（沿用練習題的事件，不另開新事件）。不算單元完成（不呼叫 doneRec）。
   本機紀錄（不同步，同素養題組）：localStorage kids_mm_exam＝{'<科>:<卷id>':{best:最高分, last:最近一次, n:考了幾次, at}, _seen:{'<科>':{題key:最後作答時間}}}
   卷id＝單元id 或 'mock-<單元>-<單元>'；題key 見 exam.js（練習題作答也會記，7 天後清掉）。 */
var XKEY = 'kids_mm_exam', EXM = null, MOCK = /[?&]mock=1/.test(location.search), MOCK_MIN = 40, exTimerId = 0;
var EXTYPE = {mc:'選擇題', tf:'是非題', order:'排順序', match:'配對題'};
function MXx(){ return window.MMExam; }
function exAll(){ return lsGet(XKEY, {}); }
function exRec(id){ return exAll()[SUBJ + ':' + id] || {}; }
function exSeen(){ return (exAll()._seen || {})[SUBJ] || {}; }
function exMarkSeen(keys){ var all = exAll(), t = Date.now(), s = (all._seen || {})[SUBJ] || {}; if(MXx()) s = MXx().prune(s, t); keys.forEach(function(k){ s[k] = t; }); all._seen = all._seen || {}; all._seen[SUBJ] = s; lsSet(XKEY, all); }
function exOn(u){ return !!(MXx() && QKx() && ZRx() && D.exam && u && D.exam[u.id]); }
// 段考：每一冊（label 空格前的冊別，沒有＝五上）各自照順序兩個一組；那一冊單元數是單數時，最後一個併進最後一組（社會五下 u7＋u8＋u9、六上 u12＋u13＋u14）；整組都有測驗資料才出
function mockPairs(){ var out = [], has = function(u){ return !!(D.exam && D.exam[u.id]); }, bk = function(u){ return u.label ? u.label.split(' ')[0] : '五上'; }, books = [];
  ALL_UNITS.forEach(function(u){ var b = books[books.length - 1]; if(!b || bk(b[0]) !== bk(u)) books.push(b = []); b.push(u); });
  books.forEach(function(us){ for(var i = 0; i + 1 < us.length; i += 2) out.push([us[i], us[i + 1]]); if(us.length % 2 && us.length > 1) out[out.length - 1].push(us[us.length - 1]); });
  return out.filter(function(g){ return g.every(has); }); }
function unitById(id){ return ALL_UNITS.filter(function(x){ return x.id === id; })[0]; }
function exCard(id, small, title, v){ var r = exRec(id); return '<button class="lit-card' + (r.n ? (r.best >= 90 ? ' done' : ' tried') : '') + '" data-act="exGo" data-v="' + v + '"><small>' + esc(small) + '</small><b>' + esc(title) + '</b><span>' + (r.n ? '🏅 最高 ' + r.best + ' 分・最近 ' + r.last + ' 分' : '⚪ 還沒考過') + '</span></button>'; }
function renderExamHome(){
  EXM = null; exStopTimer();
  var html = '<div class="mm-wrap">';
  if(MOCK){
    html += '<h2>📝 ' + CFG.name + '段考模擬</h2><ul class="ex-rules"><li>兩個單元一份（社會五下、六上的單元三～五是三個單元一份），每份 30 題、滿分 100 分（前 20 題每題 3 分、後 10 題每題 4 分）。</li><li>題目由易到難，最後是題組：先讀一段資料再回答。</li><li>考試中不說對錯，全部寫完按「交卷」，才看分數和每一題的解析。</li><li>答錯的題會收進錯題庫；這裡不算進單元完成。</li></ul>' +
      '<label class="ex-timer-opt"><input type="checkbox" id="exTimed"> ⏱️ 限時 ' + MOCK_MIN + ' 分鐘（時間到自動交卷）</label>' +
      '<div class="lit-grid">' + mockPairs().map(function(p, i){ return exCard('mock-' + p.map(function(x){ return x.id; }).join('-'), p.map(unitLabel).join('＋'), p.map(function(x){ return x.title; }).join('、'), 'mock:' + i); }).join('') + '</div>';
  } else {
    var u = unit();
    html += '<h2>📄 單元測驗・' + esc(unitLabel(u)) + '</h2><ul class="ex-rules"><li>25 題、每題 4 分，滿分 100 分：選擇 15 題、是非 5 題、配對或排序 2 題、題組 1 組（3 題）。</li><li>題目由易到難；大約一半是新題，一半從練習題裡挑（最近一週做過的會先避開）。</li><li>考試中不說對錯，全部寫完按「交卷」，才看分數和每一題的解析。</li><li>答錯的題會收進錯題庫；這裡不算進單元完成。</li></ul>' +
      (exOn(u) ? '<div class="lit-grid">' + exCard(u.id, unitLabel(u), u.title, 'unit') + '</div>' : '<p>這個單元還沒有測驗卷。</p>');
  }
  $('#panel').innerHTML = html + '</div>';
}
function startExam(v, timed){
  var M = MXx(), Q = QKx(); if(!M || !Q) return; Q.css();
  var src = {units:ALL_UNITS, exam:D.exam}, o = {hash:qHash, recent:M.recentFn(exSeen(), Date.now()), rand:R}, P = null;
  timed = !!(MOCK && timed);
  if(v === 'unit') P = M.unitPaper(src, unit().id, o);
  else { var pr = mockPairs()[+String(v).split(':')[1]]; if(pr) P = M.mockPaper(src, pr.map(function(x){ return x.id; }), o); }
  if(!P){ toast('找不到這份考卷'); return; }
  EXM = {v:v, timed:timed, P:P, st:P.items.map(function(it){ return Q.prep(it.q, R); }), done:false, confirm:false, end:timed ? Date.now() + MOCK_MIN * 60000 : 0};
  renderExam(); $('#panel').scrollTop = 0; exStartTimer();
}
function exTitle(){ var P = EXM.P; return P.kind === 'mock' ? '📝 段考模擬・' + P.units.map(function(id){ var u = unitById(id); return u ? unitLabel(u) : id; }).join('＋') : '📄 單元測驗・' + unitLabel(unitById(P.id) || unit()); }
function exAnswered(){ var M = MXx(); return EXM.P.items.filter(function(it, i){ return M.answered(it.q, EXM.st[i]); }).length; }
function exStat(){
  if(!EXM || EXM.done) return '';
  var s = '已作答 ' + exAnswered() + ' / ' + EXM.P.items.length;
  if(EXM.end){ var left = Math.max(0, EXM.end - Date.now()); s += '　⏱️ 剩 ' + Math.floor(left / 60000) + ':' + String(Math.floor(left % 60000 / 1000)).padStart(2, '0'); }
  return s;
}
function exStartTimer(){ exStopTimer(); if(!EXM || !EXM.end) return; exTimerId = setInterval(function(){ if(!EXM || EXM.done){ exStopTimer(); return; } var el = $('#exStat'); if(el) el.textContent = exStat(); if(Date.now() >= EXM.end){ toast('⏰ 時間到，自動交卷'); exSubmit(true); } }, 1000); }
function exStopTimer(){ if(exTimerId){ clearInterval(exTimerId); exTimerId = 0; } }
/* 考到一半要離開（切模式、換單元、回測驗）：有作答就先問；確定離開才丟掉這份卷（計時也停） */
function exLeaveOK(){ if(!EXM || EXM.done) return true; if(exAnswered() && !window.confirm('目前的作答會不見，確定要離開嗎？')) return false; exStopTimer(); EXM = null; return true; }
/* 一題：交卷前選擇／是非自己畫（選了只標「已選」，不說對錯，可以改）；排順序／配對用 quizkit 的作答區（「確定」鈕用 CSS 藏起來，交卷時才判分） */
function exQHTML(i){
  var it = EXM.P.items[i], q = it.q, st = EXM.st[i], Q = QKx(), done = EXM.done, body;
  if(!done && (q.type === 'mc' || q.type === 'tf')){
    var opts = q.type === 'mc' ? st.ord.map(function(oi){ return [oi, esc(q.opts[oi])]; }) : [[true, '⭕ 對'], [false, '❌ 錯']];
    body = '<div class="opts' + (q.type === 'mc' ? ' one' : '') + '">' + opts.map(function(o){ return '<button type="button" class="opt' + (st.pick === o[0] ? ' sel' : '') + '" data-ex="pick" data-v="' + o[0] + '" aria-pressed="' + (st.pick === o[0]) + '">' + o[1] + '</button>'; }).join('') + '</div>';
  } else body = Q.body(st);
  var showAns = !st.right && (q.type === 'mc' || q.type === 'tf');
  var fb = done ? '<div class="fb ' + (st.right ? 'ok' : 'no') + '"><div class="fbh">' + (st.right ? '✓ 答對了' : '✗ 答錯了' + (showAns ? '・正確答案：' + esc(Q.answerText(q)) : '')) + '</div><div>' + esc(q.why || '') + Q.extra(st) + '</div></div>' : '';
  return '<div class="zr-q ex-q' + (done ? (st.right ? ' ok' : ' no') : '') + '" id="exq' + i + '" data-i="' + i + '"><div class="zr-qh"><span>第 ' + (i + 1) + ' 題</span><span class="qtype" style="margin:0">' + EXTYPE[q.type] + '</span><span>' + it.pts + ' 分</span>' + (done ? '<span>' + (st.right ? '✅' : '❌') + '</span>' : '') + '</div>' +
    '<p class="zr-qt">' + esc(q.q) + '</p>' + body + fb + '</div>';
}
function renderExam(){
  var P = EXM.P, html = '<div class="mm-wrap"><div class="tr-head"><span class="t">' + esc(exTitle()) + '</span><span class="p" id="exStat">' + exStat() + '</span><button class="mm-b sm" data-act="exHome">⬅ 回測驗</button></div>';
  if(EXM.done) html += exResultHTML();
  var lastG = null;
  P.items.forEach(function(it, i){
    if(it.grp && it.grp !== lastG){ lastG = it.grp; html += '<h3 class="ex-sec">題組：先讀資料，再回答下面 ' + it.grp.qs.length + ' 題</h3>' + litArt(it.grp); }
    html += exQHTML(i);
  });
  if(!EXM.done) html += '<div class="ex-submit"><p class="zr-msg" id="exMsg" aria-live="polite"></p><button class="mm-b big on" data-act="exSubmit" style="width:100%;min-height:60px">📮 交卷</button></div>';
  $('#panel').innerHTML = html + '</div>';
}
function exPaint(i){ var el = $('#exq' + i); if(el) el.outerHTML = exQHTML(i); var s = $('#exStat'); if(s) s.textContent = exStat(); var m = $('#exMsg'); if(m) m.textContent = ''; }
function exSubmit(force){
  if(!EXM || EXM.done) return;
  var M = MXx(), P = EXM.P, left = P.items.length - exAnswered();
  if(left && !force && !EXM.confirm){ EXM.confirm = true; var m = $('#exMsg'); if(m) m.textContent = '還有 ' + left + ' 題沒寫完。確定要交卷，就再按一次「交卷」。'; return; }
  exStopTimer(); EXM.done = true;
  var oks = P.items.map(function(it, i){ var st = EXM.st[i], r = M.isRight(it.q, st); st.done = true; st.right = r; return r; }), S = M.score(P.items, oks);
  EXM.S = S;
  P.items.forEach(function(it, i){ coinAnswer(oks[i]); mkRec(it.mk, oks[i], {u:it.u, k:it.src === 'x' ? 'X' : 'q', s:String(it.q.q).slice(0, 120), a:String(QKx().answerText(it.q)).slice(0, 120)}); });
  coinRound('quiz', S.right, S.total);
  exMarkSeen(P.items.map(function(it){ return it.key; }));
  var all = exAll(), k = SUBJ + ':' + P.id, r = all[k] || {}; r.best = Math.max(r.best || 0, S.score); r.last = S.score; r.n = (r.n || 0) + 1; r.at = Date.now(); all[k] = r; lsSet(XKEY, all);
  EXM.sg = M.suggest({units:ALL_UNITS}, P.items.filter(function(_, i){ return !oks[i]; }), 3);
  renderExam(); $('#panel').scrollTop = 0;
}
function exResultHTML(){
  var S = EXM.S, wrong = S.total - S.right, sg = EXM.sg || [];
  var rec = '<div class="ex-sg"><b>📌 建議回去複習</b>' + (sg.length ? '<ul>' + sg.map(function(x){ var u = unitById(x.u);
      return '<li><span>' + esc((u ? unitLabel(u) + ' › ' : '') + x.path.join(' › ')) + '（錯 ' + x.n + ' 題）</span> <a class="mm-b sm" href="?u=' + encodeURIComponent(x.u) + (x.id ? '&focus=' + encodeURIComponent(x.id) : '') + '">📖 去看重點</a></li>'; }).join('') + '</ul>'
    : '<p>全部答對，沒有要特別複習的地方 🎉</p>') + '</div>';
  return '<div class="card result center" id="exResult"><div class="party">' + (S.score >= 90 ? '🏆' : S.score >= 70 ? '🎉' : '💪') + '</div><div class="score">' + S.score + ' 分</div><p>答對 ' + S.right + ' / ' + S.total + ' 題' + (wrong ? '・答錯的 ' + wrong + ' 題已經收進 📕 錯題庫（下面標紅的就是）' : '') + '</p>' + rec +
    '<div class="share-row"><button class="mm-b on" data-act="exAgain">🔁 再考一次（換題）</button><button class="mm-b" data-act="exHome">回測驗</button></div></div>';
}
document.addEventListener('click', function(e){   // 作答：選擇／是非（data-ex）、排順序／配對（quizkit 的 data-qk）
  if(!EXM || EXM.done) return;
  var b = e.target.closest && e.target.closest('[data-ex],[data-qk]'), qel = b && b.closest('.ex-q'); if(!qel || b.disabled) return;
  var i = +qel.getAttribute('data-i'), it = EXM.P.items[i], st = EXM.st[i];
  if(b.hasAttribute('data-ex')){ var v = b.getAttribute('data-v'); st.pick = it.q.type === 'tf' ? v === 'true' : +v; }
  else { var name = b.getAttribute('data-qk'); if(name === 'oCheck' || name === 'mCheck') return; var r = QKx().act(st, name, b.getAttribute('data-v')); if(r.msg) toast(r.msg); }
  EXM.confirm = false; exPaint(i);
});
/* 「去看重點」連過來的 ?focus=<節點>：展開它和上層，畫面移到它 */
var FOCUS = (function(){ var m = /[?&]focus=([a-z0-9-]+)/i.exec(location.search); return m ? m[1] : ''; })();
function focusPath(id){ var u = unit(), out = null; (function w(d, anc){ if(out) return; if(d.id === id){ out = anc.concat([id]); return; } kidsData(d).forEach(function(c){ w(c, d === u ? anc : anc.concat([d.id])); }); })(u, []); return out; }

/* ---------- 共用 UI ---------- */
var toastT;
function toast(m){ var t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function(){ t.classList.remove('on'); }, 1600); }
function showModal(html){ $('#modal').innerHTML = html; $('#modal').hidden = false; $('#back').hidden = false; }
function closeModal(){ $('#modal').hidden = true; if($('#pop').hidden) $('#back').hidden = true; }
function showMap(){ $('#mapwrap').hidden = false; $('#panel').hidden = true; updateChrome(); }
function showPanel(){ $('#mapwrap').hidden = true; $('#panel').hidden = false; $('#panel').scrollTop = 0; updateChrome(); }
function updateChrome(){
  var mapOn = !$('#mapwrap').hidden;
  $('#units').hidden = D.units.length < 2;
  $('#layoutSeg').style.visibility = mapOn ? 'visible' : 'hidden';
  document.querySelectorAll('[data-act=layout]').forEach(function(b){ b.classList.toggle('on', b.dataset.v === UI.layout); });
  document.querySelectorAll('[data-act=mode]').forEach(function(b){ if(b.closest('#modes')) b.classList.toggle('on', b.dataset.v === UI.mode); });
  $('#units').innerHTML = D.units.map(function(u, i){ var due = reviewDue(u.id); return '<button class="mm-b' + (i === UI.unit ? ' on' : '') + '" data-act="unit" data-v="' + i + '" title="' + esc(u.title) + '">' + esc(unitLabel(u)) + (due ? '<span class="due">⏰ 該複習架構囉</span>' : '') + '</button>'; }).join('');
  var showTools = mapOn && (UI.mode === 'read' || UI.mode === 'cloze');
  document.querySelectorAll('#tools [data-act]').forEach(function(b){ b.hidden = !showTools || (b.id === 'btnShuffle' && UI.mode !== 'cloze'); });
  if(!mapOn){ $('#trayTop').hidden = true; $('#trayBot').hidden = true; }
  var lb = $('#modes [data-v=lit]'); if(lb) lb.hidden = !litOn();
  var xb = $('#modes [data-v=exam]'); if(xb) xb.hidden = !exOn(unit());
  var cb = $('#modes [data-v=card]'); if(cb) cb.hidden = !cardsOf().length;
  var ib = $('#modes [data-v=ia]'); if(ib) ib.hidden = !iaOf().length;
  if(MKMODE || MOCK){ $('#units').hidden = true; $('#modes').hidden = true; $('#layoutSeg').style.visibility = 'hidden'; }
  paintDone();
}
function enterMode(){
  closePop(); closeModal(); arch = null; EXM = null; exStopTimer(); FC = null; sayStop();
  if(UI.mode === 'exam' && !exOn(unit())) UI.mode = 'read';
  if(UI.mode === 'card' && !cardsOf().length) UI.mode = 'read';
  if(UI.mode === 'ia' && !iaOf().length) UI.mode = 'read';
  if(UI.mode === 'read' || UI.mode === 'cloze'){ showMap(); renderTray(); render(); fit(false, AUTO_MIN); }
  else if(UI.mode === 'arch'){ showPanel(); renderArchHome(); }
  else if(UI.mode === 'quiz'){ showPanel(); startQuiz(); }
  else if(UI.mode === 'lit'){ showPanel(); renderLitHome(); }
  else if(UI.mode === 'exam'){ showPanel(); renderExamHome(); }
  else if(UI.mode === 'card'){ showPanel(); startCards(); }
  else if(UI.mode === 'ia'){ showPanel(); startIA(); }
  updateChrome();
}
var ACT = {
  layout:function(el){ UI.layout = el.dataset.v; saveUI(); updateChrome(); render(); if(archMap() && arch.level >= 2 && curItem()){ fit(false, AUTO_MIN); focusNode(curItem().id); } else fit(true, AUTO_MIN); },
  mode:function(el){ var m = el.dataset.v;
    if(!exLeaveOK()) return;
    if(m !== 'read' && m !== UI.mode && !gate(m, function(){ ACT.mode(el); })) return;   // 看重點免登入；其他三種開始時先登入
    var keep = (UI.mode === 'read' || UI.mode === 'cloze') && (m === 'read' || m === 'cloze'); UI.mode = m; saveUI();
    if(keep){ closePop(); closeModal(); updateChrome(); render(); } else enterMode(); },
  unit:function(el){ if(!exLeaveOK()) return; UI.unit = +el.dataset.v; if(UI.mode !== 'read' && !loggedOK()) UI.mode = 'read'; saveUI(); expanded = new Set(); enterMode(); },
  expandAll:function(){ allDataNodes(unit()).forEach(function(x){ expanded.add(x.d.id); }); render(); fit(true, AUTO_MIN); },
  collapseAll:function(){ expanded = new Set(); render(); fit(true, AUTO_MIN); },
  zoomIn:function(){ zoomAt(1.25, vp.clientWidth / 2, vp.clientHeight / 2, true); },
  zoomOut:function(){ zoomAt(0.8, vp.clientWidth / 2, vp.clientHeight / 2, true); },
  fit:function(){ fit(true); },
  popClose:closePop, blankOk:blankSubmit, blankShow:blankShow, blankRetry:blankRetry,
  modalClose:closeModal,
  reshuffle:function(){ if(!gate('cloze', function(){ ACT.reshuffle(); })) return; closeModal(); newDraw(); render(); toast('🔀 換了一組新的空格'); },
  archGo:function(el){ if(!gate('arch', function(){ ACT.archGo(el); })) return; closeModal(); var lv = +el.dataset.v; if(UI.mode !== 'arch'){ UI.mode = 'arch'; saveUI(); } startArch(lv, arch && arch.review && lv === 4); updateChrome(); },
  archHome:function(){ closeModal(); showPanel(); renderArchHome(); },
  archReview:function(){ if(!gate('arch', function(){ ACT.archReview(); })) return; startArch(4, true); },
  pickCard:function(el){ arch.sel = arch.sel === el.dataset.v ? null : el.dataset.v; renderTray(); },
  /* 選選看：同一上層底下，選任何一個還沒用過的兄弟都算對（對到兄弟就互換位置） */
  pickOpt:function(el){ if(arch.lock) return; arch.lock = true; var it = curItem(), v = arch.opts[+el.dataset.v];
    var hit = arch.B.answer(it.id, openIds(), function(id){ return arch.byId[id].title === v; }), ok = hit != null, right = ok ? v : it.title;
    document.querySelectorAll('#trayBot .opt').forEach(function(b){ var t = arch.opts[+b.dataset.v]; if(t === right) b.classList.add('right'); else if(b === el) b.classList.add('wrong'); b.disabled = true; });
    if(ok){ if(hit !== it.id) seqSwap(it.id, hit); arch.correct++; logArch(hit, true); arch.filled[hit] = {title:arch.byId[hit].title, st:'good'}; }
    else { logArch(it.id, false); arch.filled[it.id] = {title:it.title, st:'bad'}; arch.B.fill(it.id); }
    coinAnswer(ok); render(); setTimeout(advance, ok ? 700 : 1500); },
  l3ok:function(){ l3submit(); }, l3skip:function(){ if(!arch.lock) l3wrong(''); }, l3next:function(){ l3next(); },
  l4n:function(el){ var a = arch.l4[+el.dataset.l]; a.n = clamp(a.n + (+el.dataset.v), 0, 9); renderL4(); },
  l4submit:function(){ l4grade(); },
  clock:function(el){ if(!DEMO) return; var p = prog(), d = +el.dataset.v; p._clockDays = d ? (p._clockDays || 0) + d : 0; lsSet(PKEY, p); renderArchHome(); updateChrome(); },
  unlockAll:function(){ if(!DEMO) return; var p = prog(); uprog(p, unit().id).unlocked = 4; lsSet(PKEY, p); renderArchHome(); toast('已全部解鎖（示範）'); },
  resetProg:function(){ if(!DEMO) return; var p = prog(); delete p[pk(unit().id)]; lsSet(PKEY, p); renderArchHome(); updateChrome(); toast('已清除本單元進度'); },
  quizAgain:function(){ if(!gate('quiz', function(){ ACT.quizAgain(); })) return; startQuiz(); },
  qNext:function(){ QZ.i++; renderQuiz(); $('#panel').scrollTop = 0; },
  qmc:function(el){ var it = QZ.items[QZ.i]; if(it.done) return; it.pick = +el.dataset.v; quizDone(it.pick === it.q.a); },
  qtf:function(el){ var it = QZ.items[QZ.i]; if(it.done) return; it.pick = el.dataset.v === 'true'; quizDone(it.pick === it.q.a); },
  qoPick:function(el){ var it = QZ.items[QZ.i], v = +el.dataset.v; if(it.placed.indexOf(v) < 0) it.placed.push(v); renderQuiz(); },
  qoBack:function(el){ var it = QZ.items[QZ.i]; it.placed.splice(+el.dataset.v, 1); renderQuiz(); },
  qoReset:function(){ QZ.items[QZ.i].placed = []; renderQuiz(); },
  qoCheck:function(){ var it = QZ.items[QZ.i]; quizDone(it.placed.every(function(v, i){ return v === i; })); },
  qmL:function(el){ var it = QZ.items[QZ.i], l = +el.dataset.v; it.sel = it.sel === l ? null : l; if(it.map[l] != null && it.sel === l) delete it.map[l]; renderQuiz(); },
  qmR:function(el){ var it = QZ.items[QZ.i], r = +el.dataset.v; if(it.sel == null){ toast('先點左邊的一個'); return; } Object.keys(it.map).forEach(function(l){ if(it.map[l] === r) delete it.map[l]; }); it.map[it.sel] = r; it.sel = null; renderQuiz(); },
  qmCheck:function(){ var it = QZ.items[QZ.i]; quizDone(it.q.pairs.every(function(_, l){ return it.map[l] === l; })); },
  qfill:function(){ var it = QZ.items[QZ.i], inp = $('#mkIn'); if(!it || it.done || !inp) return; if(!inp.value.trim()){ toast('先寫寫看喔！'); return; } it.input = inp.value; quizDone(matchAns(inp.value, it.q.w, it.q.alts)); },
  qfillSkip:function(){ var it = QZ.items[QZ.i]; if(!it || it.done) return; quizDone(false); },
  mkAgain:function(){ if(!loggedOK()){ gateMk(); return; } startMk(); },
  litGo:function(el){ if(!gate('lit', function(){ ACT.litGo(el); })) return; startLit(+el.dataset.v); },
  litAgain:function(){ if(!gate('lit', function(){ ACT.litAgain(); })) return; startLit(LT.i); },
  litHome:function(){ renderLitHome(); $('#panel').scrollTop = 0; },
  litOpen:function(el){ var i = +el.dataset.v, it = LT.items[i], ta = $('#lq' + i + ' textarea'); it.text = ta ? ta.value : it.text;
    if(ZRx().countText(it.text) < ZRx().OPEN_MIN){ var m = $('#lq' + i + ' [data-msg]'); if(m) m.textContent = '再多寫一點：至少 ' + ZRx().OPEN_MIN + ' 個字，說出你的想法和理由。'; return; }
    it.done = true; litPaint(i); litFinish(); },
  exGo:function(el){ if(!gate(MOCK ? 'mock' : 'exam', function(){ ACT.exGo(el); })) return; var tm = $('#exTimed'); startExam(el.dataset.v, tm && tm.checked); },
  exAgain:function(){ var v = EXM && EXM.v, tm = EXM && EXM.timed; if(!v) return; if(!gate(MOCK ? 'mock' : 'exam', function(){ ACT.exAgain(); })) return; startExam(v, tm); },
  exHome:function(){ if(!exLeaveOK()) return; renderExamHome(); $('#panel').scrollTop = 0; },
  exSubmit:function(){ exSubmit(false); },
  fcFlip:function(){ var it = FC && FC.items[FC.i], el = $('#fcStage .fc-card'); if(!it || !el) return; FC.flip = !FC.flip; el.classList.toggle('flip', FC.flip); el.setAttribute('aria-label', FC.flip ? '翻回正面' : '點一下翻面');
    if(FC.flip){ fcSeen(it.c); sayCard(it.c, true); } $('#fcRows').innerHTML = fcRows(); },
  fcAns:function(el){ var it = FC && FC.items[FC.i]; if(!it || it.ans != null || !FC.flip) return; var ok = el.dataset.v === '1', u = unit();
    it.ans = ok; fcSeen(it.c); mkRec(u.id + '|F|' + it.c.id, ok, {u:u.id, k:'F', s:it.c.b, a:it.c.f}); fcGo(1); },
  fcNext:function(){ fcGo(1); }, fcPrev:function(){ fcGo(-1); },
  fcSay:function(){ var it = FC && FC.items[FC.i]; if(it) sayCard(it.c, FC.flip); },
  iaAgain:function(){ if(!gate('ia', function(){ ACT.iaAgain(); })) return; startIA(); $('#panel').scrollTop = 0; },
  fcAgain:function(){ if(!gate('card', function(){ ACT.fcAgain(); })) return; startCards(); $('#panel').scrollTop = 0; },
  qcFlip:function(){ var it = QZ && QZ.items[QZ.i]; if(!it || it.done) return; it.flip = !it.flip; if(it.flip) sayCard(it.q, true); renderQuiz(); },
  qcAns:function(el){ var it = QZ && QZ.items[QZ.i]; if(!it || it.done || !it.flip) return; quizDone(el.dataset.v === '1'); },
  qcSay:function(){ var it = QZ && QZ.items[QZ.i]; if(it) sayCard(it.q, it.flip); }
};
/* 練錯題要登入（首頁錯題庫按「只練錯題」時已經問過登入與練習額度；直接開這頁沒登入就跳登入提示） */
function gateMk(){ var A = window.KidsAuth; try{ if(A && !A.requireLogin('練錯題')) return false; }catch(e){} return true; }

/* ---------- 啟動 ---------- */
function buildDOM(){
  var u1 = D.units.length === 1 ? D.units[0] : null;
  var h1 = u1 ? CFG.icon + ' ' + esc(unitLabel(u1)) + '・' + esc(u1.title) : CFG.icon + ' ' + CFG.name + '心智圖';
  var home = '../index.html#s/' + SUBJ;
  document.title = (u1 ? unitLabel(u1) + ' ' + u1.title + '｜' : '') + CFG.name + '心智圖｜小朋友學習站';
  if(IN_FRAME) document.documentElement.classList.add('in-frame');
  $('#mm').innerHTML =
    '<header class="mm-top"><div class="mm-row"><a class="mm-home" href="' + home + '">← 回' + CFG.name + '</a><h1>' + h1 + '</h1>' +
      '<div class="mm-segbox" id="layoutSeg" role="group" aria-label="排法"><button class="mm-b" data-act="layout" data-v="tree">🌳 橫向樹</button><button class="mm-b" data-act="layout" data-v="radial">🌞 放射狀</button></div>' +
      '<span class="mm-auth" data-kids-auth-slot></span></div>' +
      '<div id="kdone" hidden></div>' +
      '<nav class="mm-units" id="units" aria-label="單元"></nav>' +
      '<nav class="mm-modes" id="modes" aria-label="模式"><button class="mm-b" data-act="mode" data-v="read">📖 看重點</button><button class="mm-b" data-act="mode" data-v="arch">🧠 背架構</button><button class="mm-b" data-act="mode" data-v="cloze">✏️ 考考自己</button><button class="mm-b" data-act="mode" data-v="quiz">📝 練習題</button><button class="mm-b" data-act="mode" data-v="lit" hidden>🧩 素養題組</button><button class="mm-b" data-act="mode" data-v="exam" hidden>📄 單元測驗</button><button class="mm-b" data-act="mode" data-v="card" hidden>🃏 閃卡</button><button class="mm-b" data-act="mode" data-v="ia" hidden>' + IA_LAB + '</button></nav></header>' +
    '<main class="mm-main"><section class="mm-mapwrap" id="mapwrap"><div class="mm-tray tt" id="trayTop" hidden></div>' +
      '<div class="mm-vp" id="vp"><div class="mm-stage" id="stage"><svg id="lines" xmlns="http://www.w3.org/2000/svg"></svg><div id="nodes"></div></div>' +
        '<div class="mm-tools" id="tools"><button class="mm-b sm" data-act="expandAll">➕ 展開全部</button><button class="mm-b sm" data-act="collapseAll">➖ 收合全部</button><button class="mm-b sm" data-act="reshuffle" id="btnShuffle">🔀 換一組</button><span class="mm-score" id="score" hidden></span></div>' +
        '<div class="mm-zoom"><button class="mm-b" data-act="zoomIn" aria-label="放大">＋</button><button class="mm-b" data-act="zoomOut" aria-label="縮小">－</button><button class="mm-b" data-act="fit" aria-label="看全部" title="看全部">⤢</button></div></div>' +
      '<div class="mm-tray tb" id="trayBot" hidden></div></section><section class="mm-panel" id="panel" hidden></section></main>' +
    '<div class="mm-back" id="back" hidden></div><div class="mm-pop" id="pop" hidden></div><div class="mm-modal" id="modal" hidden></div><div class="mm-toast" id="toast"></div>';
}
function init(){
  buildDOM();
  vp = $('#vp'); stage = $('#stage'); nodesBox = $('#nodes'); linesSvg = $('#lines');
  initPanZoom();
  nodesBox.addEventListener('click', onNodeClick);
  document.addEventListener('click', function(e){ var el = e.target.closest('[data-act]'); if(!el || el.disabled) return; var f = ACT[el.dataset.act]; if(f){ e.preventDefault(); f(el); } });
  document.addEventListener('input', l4input);
  $('#back').addEventListener('click', function(){ if(!$('#pop').hidden) closePop(); });
  var lastW = window.innerWidth;
  window.addEventListener('resize', function(){ if(Math.abs(window.innerWidth - lastW) < 2) return; lastW = window.innerWidth; if(!$('#mapwrap').hidden){ fit(false, AUTO_MIN); } });
  if(!D.units.length){ $('#panel').hidden = false; $('#mapwrap').hidden = true; $('#panel').textContent = '找不到資料檔。'; return; }
  fcSwipeInit();
  window.addEventListener('pagehide', sayStop);
  if(MKMODE){   // 📕 只練錯題／🔁 今天要複習：不顯示單元列／模式列，只出錯題（複習＝只出到期的）
    var hm = $('.mm-home'); hm.href = mkBack(); hm.textContent = RVMODE ? '← 回' + CFG.name : '← 回錯題庫'; hm.target = '_top';
    $('.mm-top h1').textContent = RVMODE ? '🔁 ' + CFG.name + '今天要複習' : '📕 ' + CFG.name + '錯題練習' + (ONLY && D.units[0] ? '・' + unitLabel(D.units[0]) : '');
    document.title = CFG.name + (RVMODE ? '今天要複習' : '錯題練習') + '｜小朋友學習站';
    if(gateMk()) startMk(); else { showPanel(); $('#panel').innerHTML = '<div class="mm-wrap"><p>要先登入，才可以練錯題喔！</p><button class="mm-b on" data-act="mkAgain">🔑 登入後開始</button></div>'; }
    return;
  }
  if(MOCK){   // 📝 段考模擬（首頁社會、自然的卡片開 ?mock=1）：不顯示單元列／模式列；開始考試時才要登入
    $('.mm-top h1').textContent = '📝 ' + CFG.name + '段考模擬';
    document.title = CFG.name + '段考模擬｜小朋友學習站';
    UI.mode = 'exam'; enterMode();   // 不 saveUI：不改單元頁記住的模式
    return;
  }
  var fp = FOCUS && focusPath(FOCUS);   // 交卷後「去看重點」連過來：直接看重點、展開到那個節點
  if(fp){ UI.mode = 'read'; saveUI(); fp.forEach(function(id){ expanded.add(id); }); }
  // 上次停在背架構／考考自己／練習題：沒登入就回到看重點；有登入照常進入（也算開始一輪）
  var m0 = UI.mode;
  if(m0 !== 'read'){ UI.mode = 'read'; if(loggedOK() && gate(m0, function(){ UI.mode = m0; saveUI(); enterMode(); })) UI.mode = m0; }
  enterMode();
  if(fp) setTimeout(function(){ focusNode(FOCUS, 0.85); var el = document.querySelector('.n[data-id="' + FOCUS + '"]'); if(el) el.classList.add('focus'); }, 40);
  window.addEventListener('storage', function(e){ if(e.key === PKEY || e.key === null) onSynced(); });
  window.addEventListener('kids-sync-updated', onSynced);   // 自動同步合併到新資料（首頁會把事件轉給子框）
}
window.MM = { refresh:function(){ if(!D.units[UI.unit]) UI.unit = 0; enterMode(); }, state:function(){ return {UI:UI, view:view, arch:arch, QZ:QZ, FC:FC, cloze:cloze, NODES:NODES, STAGE:STAGE}; }, act:function(name, data){ var el = document.createElement('button'); Object.keys(data || {}).forEach(function(k){ el.dataset[k] = data[k]; }); ACT[name](el); }, archSeq:archSeq, exState:function(){ return EXM; } };
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
