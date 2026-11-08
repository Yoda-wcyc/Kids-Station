/* chinese/writing/writing-core.js — 國語〈作文〉的規則（純函式：不碰 DOM／localStorage；瀏覽器 window.ZhWriting 與 Node 共用）。
   規格正本：G:\Yoda x Claude\_deploy\kids-member\docs\CHINESE_WRITING_SPEC.md。題目元件 ../../quizkit.js。
   流程：題目 → ①審題 → ②發想 → ③選材 → ④架構 → ⑤心智圖（可列印）→ ⑥紙上寫 → ⑦修辭（課程）→ ⑧自我檢查清單（可列印）。網站做 ①～⑤，⑧ 給列印清單。
   - 每題一支 topics/tNN.js、每課一支 lessons/LNN.js，登記到 WR_DATA.T／WR_DATA.L（見各檔檔頭）；目錄 data/catalog.js（WR_CAT）＝題名、文體、難度、課名的唯一正本。
   - validateTopic／validateLesson／validateAll：資料檢查（test/chinese-writing.test.js 用）。
   - checkKeys／genreQ／checkPick／checkPlan：①～④ 每一步的判斷；mapSVG：⑤ 心智圖（A4 直式）。
   - normState：本機紀錄 kids_writing 的大小上限（不同步）。 */
(function (root) {
  'use strict';
  var QK = root.QuizKit || (typeof require === 'function' ? require('../../quizkit.js') : null);

  var P4 = ['開頭', '經過', '高潮', '結尾'];
  // 文體：s＝等長短名（① 文體題選項，免得長名洩答）、n＝完整名稱、四段的段落名、每段的提示（④ 架構、⑧ 段落提示都用）、③ 選材的提醒
  var GENRES = {
    person: { s: '記人', n: '記人', paras: P4, ph: ['介紹他是誰、跟我是什麼關係', '他的樣子、個性和習慣', '一件最能看出他是怎樣的人的事', '我對他的感覺、想對他說的話'], pick: '只寫一個人。挑最能看出他個性的事，其他人的事先不寫。' },
    event: { s: '記事', n: '記事', paras: P4, ph: ['什麼時候、在哪裡、要做什麼', '事情一步一步怎麼發生', '最緊張、最開心或最難忘的那一刻', '結果怎樣、我有什麼感想'], pick: '只寫一件事。跟這件事沒關係的，就算很好玩也先不寫，才不會變成流水帳。' },
    object: { s: '記物', n: '記物', paras: P4, ph: ['它是什麼、怎麼來到我身邊', '它的樣子：顏色、形狀、摸起來', '跟它有關、最難忘的一件事', '它對我有什麼意義'], pick: '只寫一樣東西。別的東西再好，也先不寫。' },
    scene: { s: '寫景', n: '寫景', paras: P4, ph: ['在哪裡、什麼時候看到這個景', '照順序寫看到、聽到的景物', '最美、最特別的那個畫面', '這個景給我的感受'], pick: '只寫這一個地方。跟景色沒關係的事，先不寫。' },
    imagine: { s: '想像', n: '想像', paras: P4, ph: ['想像從哪裡開始', '想像的世界裡發生什麼事', '最神奇或最驚險的一段', '回到現實，我想到什麼'], pick: '想像可以很大膽，但要跟著題目走。離題的點子先不寫。' },
    feel: { s: '抒情', n: '抒情／心得', paras: ['開頭', '事情', '感受', '結尾'], ph: ['我想說的心情或主題', '讓我有這個心情的一件事', '我的感受和想法', '我學到什麼、以後想怎麼做'], pick: '挑一件最能說出心情的事來寫，其他的先不寫。' },
    explain: { s: '說明', n: '說明／生活議題', paras: ['開頭', '重點一', '重點二', '結尾'], ph: ['要說明什麼、為什麼重要', '第一個重點，加一個例子', '第二個重點，加一個例子', '整理重點，說出我的建議'], pick: '每個重點都要跟題目有關。不相關的例子先不寫。' }
  };
  // ① 文體題的解說
  var GQ = { person: '主角是一個人，寫他的樣子、個性和一件事。', event: '主角是一件事，寫它怎麼開始、經過和結果。', object: '主角是一樣東西或一部作品，寫它的特色和跟我的故事。', scene: '主角是一個地方的景色，寫看到、聽到的景物。', imagine: '寫想像出來的事，不是真的發生過。', feel: '重點是心情和想法，用一件事帶出感受。', explain: '要把一件事說清楚，說出重點和理由。' };
  var ORDER = ['person', 'event', 'object', 'scene', 'imagine', 'feel', 'explain'];
  var KINDS = { w: '5W1H', sense: '五感', time: '時間順序', feel: '心情' };
  var STAGES = { 1: '審題＋發想', 2: '選材＋架構＋心智圖', 3: '段落', 4: '修辭' };
  // ⑧ 自我檢查清單（每題共用；題目檔 check 再加 2～4 條）
  var CHECK = ['題目的關鍵字都寫到了', '只寫一件事（一個人、一樣東西），沒有變成流水帳', '分成四段，每段開頭空兩格', '每段第一句就是那段的主旨', '至少用了一種五感：看、聽、聞、嚐、摸', '寫出自己的心情或想法', '結尾有回到題目', '寫完念一遍，圈出錯字和標點再改'];
  var IDEA_MAX = 12, IDEAS_MAX = 30, MAIN_MAX = 40, KEEP_MIN = 3, KEEP_MAX = 12, IDEA_MIN = 4;
  // 不放個資（學校、班級、聯絡方式）。「電話」本身是一般詞（打電話、電話亭），只擋號碼：「電話號碼」「電話：」、09 手機／0 開頭市話數字串
  var BAN = /座號|國小|國民小學|班級|[一二三四五六1-6]年[一二三四五六七八九十\d]+班|(?:電話|手機)號碼|(?:電話|手機)\s*[:：]|0\d[\d\s-]{6,}\d|地址|身分證|@/;

  var str = function (x) { return typeof x === 'string' && x.trim().length > 0; };
  var len = function (s) { return Array.from(String(s == null ? '' : s).replace(/\s/g, '')).length; };
  var short = function (x, n) { return str(x) && len(x) <= n; };
  var esc = QK.esc;

  // ---------- 資料檢查 ----------
  function validateTopic(t, cat) {
    var E = [], add = function (m) { E.push((t && t.id ? t.id + '（' + (t.title || '?') + '）：' : '') + m); };
    if (!t || typeof t !== 'object') return ['不是物件'];
    if (!/^t\d{2,3}$/.test(t.id || '')) add('id 要像 t01（t100 以後三位數）');
    if (!GENRES[t.genre]) add('genre 只能用：' + ORDER.join('、'));
    if ([1, 2, 3].indexOf(t.d) < 0) add('d（難度）要是 1|2|3');
    if (cat) { ['title', 'genre', 'd'].forEach(function (k) { if (cat[k] !== t[k]) add(k + ' 跟目錄不一樣（目錄：' + cat[k] + '）'); }); }
    if (BAN.test(JSON.stringify(t))) add('有個資或學校、班級資訊');
    if (t.wip) { Object.keys(t).forEach(function (k) { if (['id', 'title', 'genre', 'd', 'wip'].indexOf(k) < 0) add('製作中的檔只放 id、title、genre、d、wip（多了 ' + k + '）'); }); return E; }
    if (!GENRES[t.genre]) return E;
    // ① 審題
    if (!Array.isArray(t.seg) || !t.seg.every(str) || t.seg.join('') !== t.title) add('seg 要把題目切成詞，接起來剛好是題目');
    var keys = t.keys || [];
    if (!Array.isArray(keys) || keys.length < 1 || keys.length > 3) add('keys（關鍵字）要 1～3 個');
    else keys.forEach(function (k, i) {
      if (!k || !str(k.w) || String(t.title).indexOf(k.w) < 0 || (t.seg || []).indexOf(k.w) < 0) add('keys[' + i + '] 的 w 要是 seg 裡的一個詞（也就在題目裡）');
      if (!short(k && k.why, 30)) add('keys[' + i + '] 要有 why（30 字內，說這個字要你寫什麼）');
    });
    if (keys.length && new Set(keys.map(function (k) { return k.w; })).size !== keys.length) add('keys 重複');
    if (keys.length && keys.length === (t.seg || []).length && keys.length > 2) add('題名 3 個詞以上時，不能每個詞都是關鍵字（要留幾個不是重點的詞）');   // 1～2 個詞可以全是關鍵字，隱含的範圍寫在 tip
    // nk（選填）：圈錯「不是關鍵字的詞」時的提示
    Object.keys(t.nk || {}).forEach(function (w) { if ((t.seg || []).indexOf(w) < 0 || keys.some(function (k) { return k.w === w; })) add('nk 的「' + w + '」要是 seg 裡、不是關鍵字的詞'); if (!short(t.nk[w], 30)) add('nk「' + w + '」的提示要 30 字內'); });
    if (!t.scope || t.scope.type !== 'mc') add('scope（範圍題）要是選擇題 type:"mc"');
    else QK.validate(t.scope).forEach(function (m) { add('scope：' + m); });
    // ② 發想
    var cards = t.cards || [], all = {};
    if (!Array.isArray(cards) || cards.length < 4 || cards.length > 6) add('cards（問題卡）要 4～6 張');
    else {
      cards.forEach(function (c, i) {
        var w = 'cards[' + i + '] ';
        if (!KINDS[c.k]) add(w + 'k 只能用：' + Object.keys(KINDS).join('、'));
        if (!short(c.q, 30)) add(w + 'q（問題）要 30 字內');
        if ([0, 1, 2, 3].indexOf(c.p) < 0) add(w + 'p（點選的想法預設放第幾段）要是 0～3');
        if (!Array.isArray(c.eg) || c.eg.length < 4 || c.eg.length > 8) add(w + 'eg（想法小卡）要 4～8 個');
        else c.eg.forEach(function (e) { if (!short(e, IDEA_MAX)) add(w + '想法小卡「' + e + '」要 ' + IDEA_MAX + ' 字內'); else if (all[e]) add(w + '想法小卡重複：' + e); else all[e] = 1; });
      });
      var kinds = new Set(cards.map(function (c) { return c.k; }));
      if (kinds.size < 3) add('問題卡至少要有 3 種（5W1H、五感、時間順序、心情）');
      [1, 2].forEach(function (p) { if (!cards.some(function (c) { return c.p === p; })) add('第 ' + (p + 1) + ' 段（' + GENRES[t.genre].paras[p] + '）要有問題卡預設放進去'); });
    }
    // ③ 選材：不相關的干擾小卡
    var off = t.off || [];
    if (!Array.isArray(off) || off.length < 2 || off.length > 4) add('off（不相關的小卡）要 2～4 張');
    else off.forEach(function (o, i) {
      if (!o || !short(o.t, IDEA_MAX)) add('off[' + i + '] t 要 ' + IDEA_MAX + ' 字內');
      else if (all[o.t]) add('off[' + i + '] 跟想法小卡重複：' + o.t);
      if (!short(o && o.why, 30)) add('off[' + i + '] 要有 why（30 字內，說為什麼不寫）');
    });
    // ④ 架構
    var paras = t.paras || [];
    if (!Array.isArray(paras) || paras.length !== 4) add('paras 要剛好 4 段');
    else paras.forEach(function (p, i) {
      if (!p || !Array.isArray(p.eg) || p.eg.length < 2 || p.eg.length > 3 || !p.eg.every(function (s) { return short(s, MAIN_MAX - 10); })) add('paras[' + i + '] eg（範例主旨）要 2～3 句、每句 ' + (MAIN_MAX - 10) + ' 字內');
      if (p && p.hint != null && !short(p.hint, 30)) add('paras[' + i + '] hint 要 30 字內');
    });
    if (!Array.isArray(t.check) || t.check.length < 2 || t.check.length > 4 || !t.check.every(function (s) { return short(s, 30); })) add('check（這題的檢查清單）要 2～4 條、每條 30 字內');
    if (t.tip != null && !short(t.tip, 40)) add('tip 要 40 字內');
    return E;
  }
  function validateLesson(L, cat) {
    var E = [], add = function (m) { E.push((L && L.id ? L.id + '（' + (L.title || '?') + '）：' : '') + m); };
    if (!L || typeof L !== 'object') return ['不是物件'];
    if (!/^L\d\d$/.test(L.id || '')) add('id 要像 L01');
    if (!STAGES[L.stage]) add('stage 要是 1～4');
    if (cat) { ['title', 'stage'].forEach(function (k) { if (cat[k] !== L[k]) add(k + ' 跟目錄不一樣（目錄：' + cat[k] + '）'); }); }
    if (BAN.test(JSON.stringify(L))) add('有個資或學校、班級資訊');
    if (L.wip) { Object.keys(L).forEach(function (k) { if (['id', 'title', 'stage', 'wip'].indexOf(k) < 0) add('製作中的檔只放 id、title、stage、wip（多了 ' + k + '）'); }); return E; }
    var cards = L.cards || [];
    if (!Array.isArray(cards) || cards.length < 3 || cards.length > 5) add('cards（重點卡）要 3～5 張');
    else cards.forEach(function (c, i) {
      if (!c || !short(c.h, 16)) add('cards[' + i + '] h（標題）要 16 字內');
      if (!c || !Array.isArray(c.p) || c.p.length < 1 || c.p.length > 4 || !c.p.every(function (s) { return short(s, 40); })) add('cards[' + i + '] p 要 1～4 句、每句 40 字內');
    });
    var cmp = L.compare || [];
    if (!Array.isArray(cmp) || cmp.length < 1 || cmp.length > 3) add('compare（好壞對照）要 1～3 組');
    else cmp.forEach(function (c, i) {
      if (!c || !short(c.bad, 80) || !short(c.good, 120) || c.bad === c.good) add('compare[' + i + '] 要有 bad（80 字內）和 good（120 字內），兩句不一樣');
      if (!c || !short(c.why, 40)) add('compare[' + i + '] why 要 40 字內');
    });
    var qs = L.quiz || [], ids = {};
    if (!Array.isArray(qs) || qs.length < 5 || qs.length > 8) add('quiz（小練習）要 5～8 題');
    else qs.forEach(function (q, i) {
      var w = 'quiz[' + i + '] ';
      if (!/^q\d$/.test(q.id || '')) add(w + 'id 要像 q1'); else if (ids[q.id]) add(w + 'id 重複'); else ids[q.id] = 1;
      if (['mc', 'tf'].indexOf(q.type) < 0) add(w + 'type 只能是 mc 或 tf（自動判分、只有一個正解）');
      else QK.validate(q).forEach(function (m) { add(w + m); });
      if (!short(q.why, 60)) add(w + 'why 要 60 字內');
    });
    return E;
  }
  // 全部：目錄 150 題 22 課、id 唯一、每個目錄項都有檔、檔跟目錄一致
  function validateAll(cat, T, L) {
    var E = [];
    T = T || {}; L = L || {};
    var tIds = (cat.topics || []).map(function (c) { return c.id; }), lIds = (cat.lessons || []).map(function (c) { return c.id; });
    if (new Set(tIds).size !== tIds.length) E.push('目錄題目 id 重複');
    if (new Set(lIds).size !== lIds.length) E.push('目錄課程 id 重複');
    if (new Set((cat.topics || []).map(function (c) { return c.title; })).size !== tIds.length) E.push('目錄題名重複');
    (cat.topics || []).forEach(function (c) { if (!T[c.id]) E.push(c.id + '：沒有題目檔 topics/' + c.id + '.js'); else E.push.apply(E, validateTopic(T[c.id], c)); });
    (cat.lessons || []).forEach(function (c) { if (!L[c.id]) E.push(c.id + '：沒有課程檔 lessons/' + c.id + '.js'); else E.push.apply(E, validateLesson(L[c.id], c)); });
    Object.keys(T).forEach(function (id) { if (tIds.indexOf(id) < 0) E.push(id + '：不在目錄裡'); });
    Object.keys(L).forEach(function (id) { if (lIds.indexOf(id) < 0) E.push(id + '：不在目錄裡'); });
    return E;
  }

  // ---------- ① 審題 ----------
  // sel＝點了 seg 的第幾個詞（索引陣列）；關鍵字要全部圈到、不能多圈
  function checkKeys(t, sel) {
    var keyW = t.keys.map(function (k) { return k.w; }), on = {};
    (sel || []).forEach(function (i) { if (t.seg[i] != null) on[i] = 1; });
    var miss = t.keys.filter(function (k) { return !t.seg.some(function (s, i) { return s === k.w && on[i]; }); });
    var extra = Object.keys(on).map(Number).filter(function (i) { return keyW.indexOf(t.seg[i]) < 0; }).map(function (i) { return t.seg[i]; });
    return { ok: !miss.length && !extra.length, miss: miss, extra: extra };
  }
  // 文體題：選項一律用 2 字短名（防洩答），完整名稱放在解說；正解＋照順序的下 3 種（選項順序在頁面打散）
  function genreQ(t) {
    var i = ORDER.indexOf(t.genre), opts = [0, 1, 2, 3].map(function (k) { return GENRES[ORDER[(i + k * 2) % ORDER.length]].s; });
    return { type: 'mc', q: '「' + t.title + '」是哪一種文章？', opts: opts, a: 0, why: '這題是' + GENRES[t.genre].n + '：' + GQ[t.genre] };
  }
  // ---------- ③ 選材 ----------
  // pool＝[{t, c}]（c：問題卡索引、-1＝不相關的干擾卡）；keep＝{文字: true|false}
  function pool(t, ideas) {
    var out = (ideas || []).slice(), offs = (t.off || []).map(function (o) { return { t: o.t, c: -1 }; });
    offs.forEach(function (o, k) { var at = Math.min(out.length, 1 + k * 3); if (!out.some(function (x) { return x.t === o.t; })) out.splice(at, 0, o); });
    return out;
  }
  function checkPick(t, ideas, keep) {
    var P = pool(t, ideas), und = P.filter(function (x) { return keep[x.t] == null; });
    var offKept = (t.off || []).filter(function (o) { return keep[o.t] === true; });
    var n = P.filter(function (x) { return keep[x.t] === true; }).length;
    var msg = und.length ? '還有 ' + und.length + ' 張沒決定要不要寫。' : offKept.length ? '有 ' + offKept.length + ' 張跟題目沒關係，再想想。' : n < KEEP_MIN ? '「要寫」至少留 ' + KEEP_MIN + ' 張，文章才有內容。' : n > KEEP_MAX ? '「要寫」太多了（' + n + ' 張），只留最重要的 ' + KEEP_MAX + ' 張以內。' : '';
    return { ok: !msg, msg: msg, offKept: offKept, n: n, undecided: und.length };
  }
  // ---------- ④ 架構 ----------
  // items＝要寫的小卡 [{t, p}]；main＝四段主旨。四段都要有主旨，中間兩段至少各一張小卡
  function checkPlan(t, items, main) {
    var names = GENRES[t.genre].paras, E = [];
    names.forEach(function (n, i) { if (len((main || [])[i]) < 2) E.push('「' + n + '」還沒寫主旨'); });
    [1, 2].forEach(function (i) { if (!(items || []).some(function (x) { return x.p === i; })) E.push('「' + names[i] + '」還沒有放小卡'); });
    return { ok: !E.length, msg: E.join('；') };
  }
  // ---------- 本機紀錄（kids_writing，不同步）----------
  function cut(s, n) { var a = Array.from(String(s == null ? '' : s).replace(/[\r\n\t]/g, ' ')); return a.length > n ? a.slice(0, n).join('') : a.join(''); }
  function normState(s) {
    s = s && typeof s === 'object' ? s : {};
    var o = { st: [1, 2, 3, 4, 5].indexOf(s.st) >= 0 ? s.st : 1, reach: Math.min(5, Math.max(1, +s.reach || 1)), sel: Array.isArray(s.sel) ? s.sel.filter(function (i) { return Number.isInteger(i) && i >= 0 && i < 20; }).slice(0, 20) : [] };
    var seen = {};
    o.ideas = (Array.isArray(s.ideas) ? s.ideas : []).map(function (x) { return x && { t: cut(x.t, IDEA_MAX).trim(), c: Number.isInteger(x.c) ? x.c : -1 }; }).filter(function (x) { if (!x || !x.t || seen[x.t]) return false; seen[x.t] = 1; return true; }).slice(0, IDEAS_MAX);
    o.keep = {}; o.para = {};
    Object.keys(s.keep || {}).slice(0, IDEAS_MAX + 4).forEach(function (k) { if (typeof s.keep[k] === 'boolean') o.keep[cut(k, IDEA_MAX)] = s.keep[k]; });
    Object.keys(s.para || {}).slice(0, IDEAS_MAX + 4).forEach(function (k) { var p = s.para[k]; if ([0, 1, 2, 3].indexOf(p) >= 0) o.para[cut(k, IDEA_MAX)] = p; });
    o.main = [0, 1, 2, 3].map(function (i) { return cut((s.main || [])[i], MAIN_MAX); });
    if (s.k1) o.k1 = 1;
    if (typeof s.done === 'number') o.done = s.done;
    return o;
  }

  // ---------- ⑤ 心智圖（SVG，A4 直式 800×1100）----------
  var COL = [{ bg: '#ffd166', ln: '#e09a00', bd: '#f0b429' }, { bg: '#8ad3ff', ln: '#2b8fd6', bd: '#5bb8f0' }, { bg: '#ffadad', ln: '#e05656', bd: '#f08a8a' }, { bg: '#b8e986', ln: '#4f9e22', bd: '#8fd05a' }];   // 同 mindmap.js LCOL
  var W = 800, H = 1100, LEAF_MAX = 6, NUM = ['①', '②', '③', '④'];
  function wrap(s, n, lines) {
    var a = Array.from(String(s || '')), out = [];
    for (var i = 0; i < a.length && out.length < lines; i += n) out.push(a.slice(i, i + n).join(''));
    if (a.length > n * lines) out[lines - 1] = out[lines - 1].slice(0, n - 1) + '…';
    return out;
  }
  // st＝{items:[{t,p}], main:[4 句]}
  function mapSVG(t, st) {
    var g = GENRES[t.genre], items = (st && st.items) || [], main = (st && st.main) || [];
    var o = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" class="wr-svg" role="img" aria-label="' + esc('心智圖：' + t.title) + '" font-family="PingFang TC, Noto Sans TC, Microsoft JhengHei, sans-serif">';
    o += '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#fff"/>';
    o += '<text x="24" y="40" font-size="22" font-weight="700" fill="#6b7785">✏️ 我的作文心智圖（' + esc(g.n) + '）</text>';
    var cx = 400, cy = 550;
    // 四個主枝：左上 開頭 → 右上 → 右下 → 左下（順時針讀）
    var Q = [{ x: 60, y: 360, left: true, up: true }, { x: 440, y: 360, left: false, up: true }, { x: 440, y: 622, left: false, up: false }, { x: 60, y: 622, left: true, up: false }];
    var BW = 300, BH = 118, lines = '', boxes = '';
    Q.forEach(function (q, i) {
      var c = COL[i], ex = q.left ? q.x + BW - 60 : q.x + 60, ey = q.up ? q.y + BH : q.y;
      lines += '<path d="M' + cx + ' ' + cy + ' Q' + ex + ' ' + cy + ' ' + ex + ' ' + ey + '" fill="none" stroke="' + c.ln + '" stroke-width="7" stroke-linecap="round"/>';
      boxes += '<rect x="' + q.x + '" y="' + q.y + '" width="' + BW + '" height="' + BH + '" rx="18" fill="' + c.bg + '" stroke="' + c.ln + '" stroke-width="3"/>';
      boxes += '<text x="' + (q.x + 16) + '" y="' + (q.y + 34) + '" font-size="25" font-weight="800" fill="#263445">' + NUM[i] + ' ' + esc(g.paras[i]) + '</text>';
      var ml = main[i] ? wrap(main[i], 14, 3) : ['（主旨還沒寫）'];
      ml.forEach(function (l, k) { boxes += '<text x="' + (q.x + 16) + '" y="' + (q.y + 64 + k * 24) + '" font-size="19" font-weight="600" fill="#263445">' + esc(l) + '</text>'; });
      // 細枝：主枝外側一條直線，小卡一張一張掛上去
      var mine = items.filter(function (x) { return x.p === i; }), shown = mine.slice(0, mine.length > LEAF_MAX ? LEAF_MAX - 1 : LEAF_MAX);
      if (mine.length > shown.length) shown.push({ t: '…還有 ' + (mine.length - shown.length) + ' 張', more: true });
      if (!shown.length) return;
      var sx = q.left ? 40 : 760, lx = q.left ? 60 : 460, ys = shown.map(function (_, k) { return q.up ? 320 - k * 48 : 780 + k * 48; });
      var my = q.y + BH / 2, far = ys[ys.length - 1];
      lines += '<path d="M' + (q.left ? q.x : q.x + BW) + ' ' + my + ' H' + sx + ' V' + far + '" fill="none" stroke="' + c.ln + '" stroke-width="4" stroke-linecap="round"/>';
      shown.forEach(function (x, k) {
        var y = ys[k];
        lines += '<path d="M' + sx + ' ' + y + ' H' + lx + '" stroke="' + c.ln + '" stroke-width="4"/>';
        boxes += '<rect x="' + lx + '" y="' + (y - 20) + '" width="280" height="40" rx="12" fill="#fff" stroke="' + c.bd + '" stroke-width="3"' + (x.more ? ' stroke-dasharray="6 5"' : '') + '/>';
        boxes += '<text x="' + (lx + 14) + '" y="' + (y + 7) + '" font-size="20" font-weight="600" fill="#263445">' + esc(cut(x.t, 13)) + '</text>';
      });
    });
    var tl = Array.from(t.title).length, fs = Math.min(32, Math.floor(230 / Math.max(1, tl)));
    o += lines + boxes;
    o += '<rect x="270" y="510" width="260" height="80" rx="40" fill="#ff8a3d" stroke="#d96a22" stroke-width="3"/>';
    o += '<text x="400" y="' + (550 + fs * 0.36) + '" font-size="' + fs + '" font-weight="800" fill="#fff" text-anchor="middle">' + esc(t.title) + '</text>';
    o += '<text x="400" y="1080" font-size="18" fill="#6b7785" text-anchor="middle">照著心智圖，在稿紙上寫四段：一個主枝寫一段，細枝就是那段要寫的細節。</text>';
    return o + '</svg>';
  }
  function checklist(t) { return CHECK.concat(t.check || []); }

  var WR = { GENRES: GENRES, ORDER: ORDER, KINDS: KINDS, STAGES: STAGES, CHECK: CHECK, IDEA_MAX: IDEA_MAX, IDEAS_MAX: IDEAS_MAX, MAIN_MAX: MAIN_MAX, KEEP_MIN: KEEP_MIN, KEEP_MAX: KEEP_MAX, IDEA_MIN: IDEA_MIN, BAN: BAN,
    validateTopic: validateTopic, validateLesson: validateLesson, validateAll: validateAll,
    checkKeys: checkKeys, genreQ: genreQ, pool: pool, checkPick: checkPick, checkPlan: checkPlan, normState: normState, mapSVG: mapSVG, checklist: checklist, len: len, cut: cut };
  if (typeof module !== 'undefined' && module.exports) module.exports = WR;
  root.ZhWriting = WR;
})(typeof window !== 'undefined' ? window : globalThis);
