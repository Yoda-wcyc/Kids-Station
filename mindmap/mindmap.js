/* mindmap.js — 社會科／自然科心智圖引擎（兩科共用；2026-10-09 由 demo 定版）
 * 頁面：mindmap/social.html、mindmap/science.html（<body data-subj="social|science">），?u=<單元id> 只開那一個單元。
 * 四模式：📖 看重點（免登入）／🧠 背架構／✏️ 考考自己／📝 練習題（後三者開始時 KidsAuth.requireLogin＋startActivity(科)）。
 * 學習幣：每次作答 KidsCoins.answer(ok, 科)；一輪結束 KidsCoins.report({type:'practice_round', item:'<科>:<arch|cloze|quiz>', correct, total})。
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
var DEFAULT_RELS = ['觀察','推論','使用','發現','驗證','了解','應用','包含','功能','例如','利用','操作','可','要','影響','操作實驗'];
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
var WHY = {arch:'背架構', cloze:'考考自己', quiz:'做練習題'};
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
  lsSet(PKEY, p); syncTouch(true); return pass;
}
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
    kidsData(d).forEach(function(c, i){ n.kids.push(mk(c, depth + 1, n, i, n.li)); });
    if(d.points && d.points.length) n.card = {id:d.id + '-c', type:'card', d:depth + 1, li:n.li, data:d, parent:n, kids:[], rel:''};
    return n;
  }
  return mk(u, 0, null, 0, 0);
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
  cloze[u.id] = {draw:dr, ans:{}};
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
function scoreOf(keys){ var s = cz(), ok = 0, done = 0; keys.forEach(function(k){ if(s[k]){ done++; if(s[k].st === 'ok') ok++; } }); return {ok:ok, done:done, n:keys.length}; }
function hiddenSet(pid){ var dr = cloze[unit().id] && cloze[unit().id].draw; return new Set(UI.mode === 'cloze' && dr ? (dr.picks[pid] || []) : []); }
function logBlank(b, ok){ var uid = unit().id, st = bstore(uid); SB.recordAnswer(st, b.cand.w, ok, 'w'); bsave(uid, st); }

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
  var style = /^lesson/.test(type) ? 'background:' + c.bg : type === 'rl' ? '' : 'border-color:' + c.bd;
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
    var v = archMap() ? slotView(r.id, 'rl', '', c) : {cls:'rl', html:esc(r.text)};
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
  if(matchAns(inp.value, b.cand.w, b.cand.alts)){ s[popKey] = {st:'ok', first:!b.tries && !b.logged}; coinAnswer(true); if(!b.logged){ b.logged = true; logBlank(b, !b.tries); } var nid = b.node.id; closePop(); toast('答對了！🎉'); render(nid); checkClozeDone(); }
  else { b.tries = (b.tries || 0) + 1; coinAnswer(false);
    var m = $('#popMsg'); m.className = 'msg no'; m.textContent = b.tries >= 2 ? '還不對喔～可以按「看答案」' : '不對喔，再想想看！'; var pp = $('#pop'); pp.classList.remove('shake'); void pp.offsetWidth; pp.classList.add('shake'); inp.select(); }
}
function blankShow(){ var b = BL[popKey]; if(!b) return; cz()[popKey] = {st:'shown'}; coinAnswer(false); if(!b.logged){ b.logged = true; logBlank(b, false); } var nid = b.node.id; closePop(); render(nid); checkClozeDone(); }
function blankRetry(){ var k = popKey; delete cz()[k]; closePop(); var b = BL[k]; render(b && b.node.id); if(BL[k]){ BL[k].logged = true; BL[k].tries = 1; } openBlank(k); }
function updateScore(){
  var el = $('#score');
  if(UI.mode !== 'cloze'){ el.hidden = true; return; }
  var keys = Object.keys(BL), s = scoreOf(keys);
  el.hidden = false; el.textContent = '✏️ 答對 ' + s.ok + ' / ' + s.n + '　已作答 ' + s.done;
}
function checkClozeDone(){
  var keys = Object.keys(BL), s = scoreOf(keys); if(s.done < s.n) return;
  var pct = Math.round(s.ok / s.n * 100);
  /* 學習幣：這一組空格全部作答完＝一輪（同一組只報一次；按「再答一次」改對不重報） */
  var c = cloze[unit().id];
  if(c && !c.reported){ c.reported = true; var first = keys.filter(function(k){ return c.ans[k] && c.ans[k].first; }).length; coinRound('cloze', first, s.n); }
  showModal('<div class="big">' + (pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '💪') + '</div><h2>全部空格都完成了！</h2><div class="pct">' + s.ok + ' / ' + s.n + '</div><p>答對率 ' + pct + '%（看答案 ' + (s.n - s.ok) + ' 格）</p>' +
    '<div class="btns"><button class="mm-b on" data-act="reshuffle">🔀 換一組再練</button><button class="mm-b" data-act="modalClose">好</button></div>');
}

/* ---------- 背架構 ---------- */
function archSeq(){
  var u = unit(), seq = [];
  kidsData(u).forEach(function(L, li){
    if(L.rel) seq.push({id:'rel:' + L.id, kind:'rel', title:L.rel, prompt:'「' + u.title + '」連到' + lessonLabel(L, li) + '的關係詞？'});
    seq.push({id:L.id, kind:'lesson', title:L.title, keys:L.keys || [L.title], prompt:lessonLabel(L, li) + (CFG.lesson ? '的標題是？' : '是？'), li:li});
    (function w(d, depth, path){
      kidsData(d).forEach(function(c, i){
        if(c.rel) seq.push({id:'rel:' + c.id, kind:'rel', title:c.rel, prompt:'「' + d.title + '」連到下一格的關係詞？', li:li});
        seq.push({id:c.id, kind:depth === 2 ? 'topic' : 'sub', title:c.title, keys:c.keys || [c.title], prompt:depth === 2 ? (lessonLabel(L, li) + '・第' + NUM[i + 1] + '個' + CFG.l4Kid + '是？') : ('「' + d.title + '」下面第' + NUM[i + 1] + '個是？'), li:li});
        w(c, depth + 1);
      });
    })(L, 2);
  });
  (u.links || []).forEach(function(L, i){ if(L.rel) seq.push({id:'rel:link' + i, kind:'rel', title:L.rel, prompt:'虛線箭頭上的關係詞？'}); });
  return seq;
}
function curItem(){ return arch && arch.seq ? arch.seq[arch.idx] : null; }
function itemOk(it, v){ return it.kind === 'rel' ? matchAns(v, it.title) : matchKeys(v, it.keys); }
function startArch(level, review){
  var p = prog(), u = uprog(p, unit().id);
  if(!review && level > u.unlocked){ toast('先通過第 ' + (level - 1) + ' 關才能玩喔'); return; }
  var full = archSeq();
  arch = {level:level, review:!!review, all:full, seq:full, idx:0, filled:{}, used:{}, correct:0, miss:{}, sel:null, lock:false, reported:false};
  if(level === 2 || level === 3){   // 隨機挖約 60%，其餘露出當提示（答錯過的節點較常被挖）
    var hid = new Set(SB.drawArch(full, bstore(unit().id), R, 0.6));
    arch.seq = full.filter(function(s){ return hid.has(s.id); });
    full.forEach(function(s){ if(!hid.has(s.id)) arch.filled[s.id] = {title:s.title, st:'hint'}; });
  }
  if(level === 1) arch.cards = shuffle(arch.seq.map(function(s){ return s.id; }));
  if(level === 2) makeOpts();
  if(level === 4){ arch.l4 = kidsData(unit()).map(function(){ return {title:'', n:0, topics:[]}; }); showPanel(); renderL4(); return; }
  showMap(); render(); fit(false, AUTO_MIN); renderTray();
  if(level >= 2) setTimeout(function(){ focusNode(curItem().id); }, 30);
}
function makeOpts(){
  var it = curItem(); if(!it) return;
  var pool = arch.all.filter(function(s){ return s.kind === it.kind && s.title !== it.title; }).map(function(s){ return s.title; });
  if(it.kind === 'rel') pool = pool.concat(DEFAULT_RELS.filter(function(r){ return r !== it.title; }));
  // 已經露出（提示或答過）的標題放後面，干擾項才不會一眼就能刪掉
  var shown = {}; Object.keys(arch.filled).forEach(function(id){ shown[arch.filled[id].title] = 1; });
  pool = Array.from(new Set(pool));
  pool = shuffle(pool.filter(function(t){ return !shown[t]; })).concat(shuffle(pool.filter(function(t){ return shown[t]; })));
  if(pool.length < 3) pool = pool.concat(shuffle(arch.all.filter(function(s){ return s.kind !== 'rel' && s.kind !== it.kind; }).map(function(s){ return s.title; })));
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
      '<div class="tr-q">先點一張卡片，再點上面對的空格。放錯會彈回來！</div>' +
      '<div class="ac-pool">' + left.map(function(id){ var s = byId[id]; return '<button class="ac' + (s.kind === 'rel' ? ' rel' : '') + (arch.sel === id ? ' sel' : '') + '" data-act="pickCard" data-v="' + esc(id) + '">' + esc(s.title) + '</button>'; }).join('') + '</div>';
    bot.hidden = false;
  } else if(lv === 2){
    var it = curItem();
    bot.innerHTML = trayHead('第 ' + (arch.idx + 1) + ' / ' + total + ' 格　答對 ' + arch.correct) +
      '<div class="tr-q">' + esc(it.prompt) + '</div>' +
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
    $('#l3q').textContent = it3.prompt;
    top.hidden = false;
  }
}
function archSlotClick(id, el){
  if(arch.level !== 1){ return; }
  if(arch.filled[id]) return;
  if(!arch.sel){ toast('先點下面的一張卡片'); shakeEl(el); return; }
  var it = arch.seq.filter(function(s){ return s.id === arch.sel; })[0];
  var slot = arch.seq.filter(function(s){ return s.id === id; })[0];
  /* 同名的格子（例如自然科兩個「中性」）放哪一格都算對 */
  if(arch.sel === id || (slot && slot.title === it.title)){ arch.filled[id] = {title:it.title, st:'good'}; arch.used[arch.sel] = 1; coinAnswer(true); arch.sel = null; render(); renderTray(); if(arch.seq.every(function(s){ return arch.filled[s.id]; })) archFinish(); }
  else { coinAnswer(false); arch.miss[arch.sel] = true; shakeEl(el); var c = document.querySelector('.ac.sel'); if(c) shakeEl(c); toast('放錯了，卡片彈回去囉！'); arch.sel = null; setTimeout(renderTray, 380); }
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
  if(itemOk(it, inp.value)){ arch.correct++; logArch(it.id, true); coinAnswer(true); arch.filled[it.id] = {title:it.title, st:'good'}; fb.className = 'l3fb ok'; fb.textContent = '✅ 答對！'; arch.lock = true; inp.value = ''; setTimeout(function(){ fb.textContent = ''; advance(); }, 650); }
  else l3wrong(inp.value);
}
function logArch(id, ok){ var uid = unit().id, st = bstore(uid); SB.recordAnswer(st, id, ok, 'a'); bsave(uid, st); }
function l3wrong(v){ var it = curItem(); logArch(it.id, false); coinAnswer(false); arch.filled[it.id] = {title:it.title, st:'bad'}; arch.lock = true; var fb = $('#l3fb'); fb.className = 'l3fb no'; fb.innerHTML = (v ? '你寫「' + esc(v) + '」。' : '') + '正確是：<b>' + esc(it.title) + '</b>'; $('#l3next').hidden = false; render(); }
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
  var icons = {1:'🧩', 2:'🔘', 3:'✍️', 4:'🧠'}, desc = {1:'空白的架構圖，把打散的標題卡片放回去。', 2:'一格一格選出正確的標題（3～4 選 1）。', 3:'一格一格自己寫出標題。', 4:CFG.lesson ? '只給單元名稱和課數，整張架構全部寫出來。' : '只給單元名稱和大分支的數量，兩層主分支全部寫出來（關係詞不考）。'};
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
    '<div class="l4u">' + esc(unitLabel(u)) + '：' + esc(u.title) + '<br><span class="muted">' + (CFG.lesson ? '這個單元有 <b>' + Ls.length + '</b> 課。依序寫出每一課的標題、有幾個主題、主題名稱。' : '這個單元有 <b>' + Ls.length + '</b> 個大分支。依序寫出每個大分支、它下面有幾個小分支、小分支的名稱（關係詞不考）。') + '</span></div>';
  Ls.forEach(function(L, i){
    var a = arch.l4[i], c = LCOL[i % LCOL.length];
    html += '<div class="l4l" style="border-color:' + c.bd + '"><label>' + esc(lessonLabel(L, i)) + esc(CFG.l4Title) + '</label>' +
      '<input class="l4in" data-l="' + i + '" data-f="title" value="' + esc(a.title) + '" autocomplete="off" placeholder="' + esc(CFG.l4Ph) + '">' +
      '<div class="l4n">' + (CFG.lesson ? '這課有幾個主題？' : '下面有幾個小分支？') + '<button class="mm-b sm" data-act="l4n" data-l="' + i + '" data-v="-1" aria-label="少一個">－</button><b>' + a.n + '</b><button class="mm-b sm" data-act="l4n" data-l="' + i + '" data-v="1" aria-label="多一個">＋</button></div>' +
      '<div class="l4t">' + Array.from({length:a.n}, function(_, j){ return a.topics[j] || ''; }).map(function(t, j){ return '<input class="l4in" data-l="' + i + '" data-f="t" data-j="' + j + '" value="' + esc(t) + '" autocomplete="off" placeholder="' + CFG.l4Kid + ' ' + (j + 1) + '">'; }).join('') + '</div></div>';
  });
  html += '<button class="mm-b big on" style="width:100%;min-height:60px" data-act="l4submit">📮 交卷，看看對不對</button></div>';
  $('#panel').innerHTML = html;
}
function l4input(e){ var t = e.target; if(!t.classList.contains('l4in') || !arch || arch.level !== 4) return; var a = arch.l4[+t.dataset.l]; if(t.dataset.f === 'title') a.title = t.value; else a.topics[+t.dataset.j] = t.value; }
function l4grade(){
  var u = unit(), Ls = kidsData(u), ok = 0, total = 0, rows = '';
  Ls.forEach(function(L, i){
    var a = arch.l4[i], Ts = kidsData(L), mine = Array.from({length:a.n}, function(_, j){ return a.topics[j] || ''; });
    var lok = matchKeys(a.title, L.keys || [L.title]); total++; if(lok) ok++;
    rows += '<tr class="lh ' + (lok ? 'ok' : 'no') + '"><td><span class="ind">' + esc(lessonLabel(L, i)) + '</span>' + (esc(a.title) || '（空白）') + '</td><td><span class="ind">' + esc(lessonLabel(L, i)) + '</span>' + esc(L.title) + '</td></tr>';
    var nok = a.n === Ts.length; total++; if(nok) ok++;
    rows += '<tr class="' + (nok ? 'ok' : 'no') + '"><td>' + CFG.l4Kid + '數：' + a.n + '</td><td>' + CFG.l4Kid + '數：' + Ts.length + '</td></tr>';
    var used = {}, match = Ts.map(function(T){ var j = -1; mine.forEach(function(v, k){ if(j < 0 && !used[k] && matchKeys(v, T.keys || [T.title])) j = k; }); if(j >= 0){ used[j] = 1; ok++; } total++; return j; });
    var rest = mine.map(function(v, k){ return used[k] ? null : v; }).filter(function(v){ return v != null; });
    Ts.forEach(function(T, t){ var j = match[t], yours = j >= 0 ? mine[j] : (rest.length ? rest.shift() : '');
      rows += '<tr class="tp ' + (j >= 0 ? 'ok' : 'no') + '"><td>' + (j >= 0 ? '✓ ' : '✗ ') + (esc(yours) || '（沒寫）') + '</td><td>' + esc(T.title) + '</td></tr>'; });
    rest.forEach(function(v){ if(norm(v)) rows += '<tr class="tp no"><td>✗ ' + esc(v) + '（多寫的）</td><td>—</td></tr>'; });
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
function startQuiz(){ var qs = unit().quiz || []; QZ = {i:0, ok:0, items:shuffle(qs).map(prepQ)}; renderQuiz(); }
function prepQ(q){ var o = {q:q, done:false, right:false};
  if(q.type === 'mc') o.ord = shuffle(q.opts.map(function(_, i){ return i; }));
  if(q.type === 'order'){ o.pool = shuffle(q.items.map(function(_, i){ return i; })); o.placed = []; if(o.pool.every(function(v, i){ return v === i; })) o.pool.reverse(); }
  if(q.type === 'match'){ o.rord = shuffle(q.pairs.map(function(_, i){ return i; })); o.map = {}; o.sel = null; }
  return o; }
function renderQuiz(){
  var P = $('#panel'), u = unit();
  if(!QZ.items.length){ P.innerHTML = '<div class="mm-wrap"><p>這個單元還沒有練習題。</p></div>'; return; }
  if(QZ.i >= QZ.items.length){
    var n = QZ.items.length, pct = Math.round(QZ.ok / n * 100);
    P.innerHTML = '<div class="mm-wrap"><div class="card result center"><div class="party">' + (pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '💪') + '</div><div class="score">' + QZ.ok + ' / ' + n + '</div><p>答對率 ' + pct + '%</p>' +
      '<div class="share-row"><button class="mm-b on" data-act="quizAgain">🔁 再做一次</button><button class="mm-b" data-act="mode" data-v="arch">🧠 去背架構</button></div></div></div>';
    return;
  }
  var it = QZ.items[QZ.i], q = it.q, body = '';
  if(q.type === 'mc'){
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
    fb = '<div class="fb ' + (it.right ? 'ok' : 'no') + '"><div class="fbh">' + (it.right ? '答對了！🎉' : '再看一次 👀') + '</div><div class="why">' + esc(q.why || '') + extra + '</div></div>' +
      '<button class="mm-b big on" style="width:100%;margin-top:12px" data-act="qNext">' + (QZ.i + 1 < QZ.items.length ? '下一題 ▶' : '看結果 🏁') + '</button>';
  }
  P.innerHTML = '<div class="mm-wrap"><div class="qz-head"><span>📝 練習題・' + esc(unitLabel(u)) + '</span><span>第 ' + (QZ.i + 1) + ' / ' + QZ.items.length + ' 題　答對 ' + QZ.ok + '</span></div>' +
    '<div class="bar"><i style="width:' + Math.round(QZ.i / QZ.items.length * 100) + '%"></i></div>' +
    '<div class="card qcard" style="margin-top:12px;text-align:left"><span class="qtype">' + QTYPE[q.type] + '</span><div class="qz-q">' + esc(q.q) + '</div>' + body + '</div>' + fb + '</div>';
}
function quizDone(right){ var it = QZ.items[QZ.i]; it.done = true; it.right = right; if(right) QZ.ok++; coinAnswer(right);
  if(QZ.items.every(function(x){ return x.done; }) && !QZ.reported){ QZ.reported = true; coinRound('quiz', QZ.ok, QZ.items.length); }
  renderQuiz(); }

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
}
function enterMode(){
  closePop(); closeModal(); arch = null;
  if(UI.mode === 'read' || UI.mode === 'cloze'){ showMap(); renderTray(); render(); fit(false, AUTO_MIN); }
  else if(UI.mode === 'arch'){ showPanel(); renderArchHome(); }
  else if(UI.mode === 'quiz'){ showPanel(); startQuiz(); }
  updateChrome();
}
var ACT = {
  layout:function(el){ UI.layout = el.dataset.v; saveUI(); updateChrome(); render(); if(archMap() && arch.level >= 2 && curItem()){ fit(false, AUTO_MIN); focusNode(curItem().id); } else fit(true, AUTO_MIN); },
  mode:function(el){ var m = el.dataset.v;
    if(m !== 'read' && m !== UI.mode && !gate(m, function(){ ACT.mode(el); })) return;   // 看重點免登入；其他三種開始時先登入
    var keep = (UI.mode === 'read' || UI.mode === 'cloze') && (m === 'read' || m === 'cloze'); UI.mode = m; saveUI();
    if(keep){ closePop(); closeModal(); updateChrome(); render(); } else enterMode(); },
  unit:function(el){ UI.unit = +el.dataset.v; if(UI.mode !== 'read' && !loggedOK()) UI.mode = 'read'; saveUI(); expanded = new Set(); enterMode(); },
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
  pickOpt:function(el){ if(arch.lock) return; arch.lock = true; var it = curItem(), v = arch.opts[+el.dataset.v], ok = v === it.title;
    document.querySelectorAll('#trayBot .opt').forEach(function(b){ var t = arch.opts[+b.dataset.v]; if(t === it.title) b.classList.add('right'); else if(b === el) b.classList.add('wrong'); b.disabled = true; });
    if(ok) arch.correct++; logArch(it.id, ok); coinAnswer(ok); arch.filled[it.id] = {title:it.title, st:ok ? 'good' : 'bad'}; render(); setTimeout(advance, ok ? 700 : 1500); },
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
  qmCheck:function(){ var it = QZ.items[QZ.i]; quizDone(it.q.pairs.every(function(_, l){ return it.map[l] === l; })); }
};

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
      '<nav class="mm-units" id="units" aria-label="單元"></nav>' +
      '<nav class="mm-modes" id="modes" aria-label="模式"><button class="mm-b" data-act="mode" data-v="read">📖 看重點</button><button class="mm-b" data-act="mode" data-v="arch">🧠 背架構</button><button class="mm-b" data-act="mode" data-v="cloze">✏️ 考考自己</button><button class="mm-b" data-act="mode" data-v="quiz">📝 練習題</button></nav></header>' +
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
  // 上次停在背架構／考考自己／練習題：沒登入就回到看重點；有登入照常進入（也算開始一輪）
  var m0 = UI.mode;
  if(m0 !== 'read'){ UI.mode = 'read'; if(loggedOK() && gate(m0, function(){ UI.mode = m0; saveUI(); enterMode(); })) UI.mode = m0; }
  enterMode();
  window.addEventListener('storage', function(e){ if(e.key === PKEY || e.key === null) onSynced(); });
  window.addEventListener('kesync-data', onSynced);
}
window.MM = { refresh:function(){ if(!D.units[UI.unit]) UI.unit = 0; enterMode(); }, state:function(){ return {UI:UI, view:view, arch:arch, QZ:QZ, cloze:cloze, NODES:NODES, STAGE:STAGE}; }, act:function(name, data){ var el = document.createElement('button'); Object.keys(data || {}).forEach(function(k){ el.dataset[k] = data[k]; }); ACT[name](el); }, archSeq:archSeq };
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
