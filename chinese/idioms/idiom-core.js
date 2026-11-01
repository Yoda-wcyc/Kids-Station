/* chinese/idioms/idiom-core.js — 國語〈成語故事 100〉的規則（純函式：不碰 DOM／localStorage；瀏覽器 window.ZhIdiom 與 Node 共用）。
   規格正本：G:\Yoda x Claude\_deploy\kids-member\docs\CHINESE_IDIOM_SPEC.md。
   沿用 ../reading-core.js（ZhReading）：判分 grade、解鎖 unlocked、字數 countText／wordCount、文章與題目檢查 validate；題目元件 ../../quizkit.js。
   - validateIdiom(it, cat)：一個成語（故事、解說、閱讀題 rq、練習題 pq、考題 xq）的資料檢查。
   - validateReading(art, cat, catalog)：成語素養閱讀一篇（共用 ZhReading.validate，只換掉字數／題數這幾條）。
   - validateAll(catalog, idioms, readings)：全部＋id 唯一＋考題不跟練習題／例句同一句。
   - unitTest(k, catalog, idioms)／finalTest(idioms, n, rand)：單元測驗（第 k 單元 10 個成語的考題 20 題）、總測驗（隨機 30 題），都照 d 由易到難。
   - mkId／mkP：錯題庫的題目 id（'<成語或篇 id>:<題 id>'）與顯示資料（分類標「成語」）。 */
(function (root) {
  'use strict';
  var ZR = root.ZhReading || (typeof require === 'function' ? require('../reading-core.js') : null);
  var QK = root.QuizKit || (typeof require === 'function' ? require('../../quizkit.js') : null);

  var LV = { 1: { name: '常用寓言' }, 2: { name: '歷史故事' }, 3: { name: '寓意加深' }, 4: { name: '分辨用法' } };
  var STORY = { 1: [300, 600], 2: [300, 600], 3: [300, 600], 4: [300, 800] };   // 故事字數（countText：中文字＋英數字）
  var KINDS = { mean: '意思選擇', fill: '選成語填空', judge: '用得對不對', pair: '近義反義', sit: '情境題', use: '用得恰當嗎', xfer: '生活遷移' };
  var SITU = ['sit', 'use', 'xfer'];   // 生活情境題（素養題）
  var UNIT = 10, XQ = 2, FINAL = 30;   // 每單元 10 個成語；每個成語 2 題考題 → 單元測驗 20 題；總測驗 30 題
  var BLANK = /＿{2,}/;
  var str = function (x) { return typeof x === 'string' && x.trim().length > 0; };
  var cnt = function (s) { return ZR.countText(s); };
  var isOpen = ZR.isOpen;
  var pad3 = function (n) { return ('00' + n).slice(-3); };

  // 一組題目（rq／pq／xq）共用的檢查：id、d 遞增、題型元件檢查、開放題、情境段落
  function qsErr(list, name, prefix, it) {
    var E = [], ids = {};
    if (!Array.isArray(list)) return [name + ' 要是陣列'];
    list.forEach(function (q, i) {
      var w = name + '[' + i + '] ';
      if (!new RegExp('^' + prefix + '\\d$').test(q.id || '')) E.push(w + 'id 要像 ' + prefix + '1');
      else if (ids[q.id]) E.push(w + 'id 重複 ' + q.id); else ids[q.id] = 1;
      if ([1, 2, 3].indexOf(q.d) < 0) E.push(w + 'd 要是 1|2|3');
      if (i && q.d < list[i - 1].d) E.push(w + '難度 d 要由小到大排');
      if (isOpen(q)) {
        if (!str(q.q)) E.push(w + '沒有題目 q');
        if (!str(q.ref)) E.push(w + '開放題要有參考答案 ref');
        if (!Array.isArray(q.rubric) || q.rubric.length < 2 || q.rubric.length > 4 || !q.rubric.every(str)) E.push(w + '開放題要有 2～4 條評分要點 rubric');
      } else QK.validate(q).forEach(function (m) { E.push(w + m); });
      if (q.ctx != null && !str(q.ctx)) E.push(w + 'ctx 空白');
      if (prefix !== 'r') {
        if (!KINDS[q.k]) E.push(w + 'k（題型）只能用：' + Object.keys(KINDS).join('、'));
        if (q.k === 'xfer' && !isOpen(q)) E.push(w + 'xfer（生活遷移）要用開放題');
        if (q.k !== 'xfer' && isOpen(q)) E.push(w + '只有 xfer 可以是開放題');
        if (q.k === 'sit' && (!str(q.ctx) || cnt(q.ctx) < 80 || cnt(q.ctx) > 150)) E.push(w + 'sit（情境題）要有 80～150 字的生活情境 ctx（現在 ' + cnt(q.ctx || '') + ' 字）');
        if (q.k === 'use' && (!str(q.ctx) || cnt(q.ctx) < 30 || cnt(q.ctx) > 150 || q.ctx.indexOf(it.word) < 0)) E.push(w + 'use（用得恰當嗎）要有 30～150 字、用到「' + it.word + '」的短文或對話 ctx');
        if (q.k === 'fill') {
          if (q.type !== 'mc' || !BLANK.test((q.ctx || '') + q.q)) E.push(w + 'fill（填空）要是選擇題，句子裡用 ＿＿＿＿ 標空格');
          else if (q.opts[q.a] !== it.word || !q.opts.every(function (o) { return cnt(o) >= 4; })) E.push(w + 'fill 的正解要是「' + it.word + '」，其他選項也要是成語');
        }
        if (q.k === 'judge' && (q.type !== 'tf' || q.q.indexOf(it.word) < 0)) E.push(w + 'judge（用得對不對）要是是非題，句子裡要用到「' + it.word + '」');
      }
      if (prefix === 'x' && isOpen(q)) E.push(w + '考題不能是開放題（要自動判分）');
    });
    return E;
  }
  // 一個成語；cat＝目錄這一列（data/catalog.js）
  function validateIdiom(it, cat) {
    var E = [], add = function (m) { E.push((it && it.id ? it.id + '（' + (it.word || '?') + '）：' : '') + m); };
    if (!it || typeof it !== 'object') return ['不是物件'];
    if (!/^cy\d{3}$/.test(it.id || '')) add('id 格式要像 cy001');
    if (!LV[it.lv]) { add('lv 要是 1–4'); return E; }
    if (!str(it.word) || !/^[\u3400-\u9fff]{4,8}$/.test(it.word)) add('word 要是 4～8 個中文字');
    var zy = String(it.zhuyin || '').trim().split(/\s+/);
    if (!/^[\u3105-\u3129\u02ca\u02c7\u02cb\u02d9 ]+$/.test(it.zhuyin || '') || zy.length !== String(it.word || '').length) add('zhuyin 要用注音符號，一個字一組、用空白隔開（' + String(it.word || '').length + ' 組）');
    if (!/《.+》|〈.+〉/.test(it.src || '')) add('src（出處）要寫書名和篇名，例如《韓非子．五蠹》');
    if (!Array.isArray(it.facts) || !it.facts.length || !it.facts.every(function (f) { return /^.+｜.+$/.test(f); })) add('facts 至少一條「事實｜出處」（出處、人物、朝代都要查證）');
    if (it.quote != null && (!str(it.quote) || cnt(it.quote) > 30)) add('quote（原文短引）最多 30 字');
    if (it.quoteFrom != null && !/《.+》|〈.+〉/.test(it.quoteFrom)) add('quoteFrom 要寫書名篇名');
    if (!Array.isArray(it.story) || !it.story.length || !it.story.every(function (b) { return str(b) || (b && str(b.h)); })) add('story 要是段落字串陣列（可放 {h:小標}）');
    else { var wc = ZR.wordCount({ body: it.story }), R = STORY[it.lv]; if (wc < R[0] || wc > R[1]) add('故事字數 ' + wc + '，L' + it.lv + ' 要 ' + R[0] + '～' + R[1]); }
    if (!str(it.mean)) add('沒有 mean（意思）');
    if (!Array.isArray(it.usage) || it.usage.length < 2 || it.usage.length > 4 || !it.usage.every(str)) add('usage（用法：適用／不適用）要 2～4 條');
    if (!Array.isArray(it.misuse) || !it.misuse.every(str) || it.misuse.length > 3) add('misuse（常見誤用）要是陣列，最多 3 條');
    else if (it.lv === 4 && !it.misuse.length) add('L4 至少要寫 1 條常見誤用');
    if (!Array.isArray(it.eg) || it.eg.length < 2 || it.eg.length > 3 || !it.eg.every(function (s) { return str(s) && s.indexOf(it.word) >= 0; })) add('eg（例句）要 2～3 句，每句都要用到「' + it.word + '」');
    ['syn', 'ant'].forEach(function (k) { if (!Array.isArray(it[k]) || !it[k].every(function (w) { return str(w) && w !== it.word; })) add(k + ' 要是成語陣列（沒有就寫 []）'); });
    // 閱讀題 rq：4～5 題、四層次都有、至少 1 題開放
    var rq = it.rq || [], open = rq.filter(isOpen).length, P = {};
    if (rq.length < 4 || rq.length > 5) add('閱讀題 rq 要 4～5 題（現在 ' + rq.length + '）');
    if (open < 1 || open > 2) add('閱讀題 rq 開放題要 1～2 題');
    rq.forEach(function (q) { if (!ZR.PIRLS[q.p]) add('rq ' + q.id + ' p（PIRLS 層次）要是 1–4'); else P[q.p] = 1; });
    [1, 2, 3, 4].forEach(function (p) { if (!P[p]) add('閱讀題沒有「' + ZR.PIRLS[p] + '」題（四個層次都要有）'); });
    qsErr(rq, 'rq', 'r', it).forEach(add);
    // 練習題 pq：4～6 題、xfer 剛好 1 題、情境題（sit／use／xfer）至少一半、sit 和 use 都要有、至少 1 題字面題
    var pq = it.pq || [], k = function (x) { return pq.filter(function (q) { return q.k === x; }).length; };
    if (pq.length < 4 || pq.length > 6) add('練習題 pq 要 4～6 題（現在 ' + pq.length + '）');
    if (k('xfer') !== 1) add('練習題要剛好 1 題 xfer（生活遷移，開放題）');
    if (!k('sit') || !k('use')) add('練習題 sit（情境選成語）和 use（用得恰當嗎）都要有');
    var situ = pq.filter(function (q) { return SITU.indexOf(q.k) >= 0; }).length;
    if (situ * 2 < pq.length) add('練習題的情境題（sit／use／xfer）要占一半以上（現在 ' + situ + '/' + pq.length + '）');
    if (situ === pq.length) add('練習題至少要有 1 題 mean／fill／judge／pair');
    qsErr(pq, 'pq', 'p', it).forEach(add);
    // 考題 xq：剛好 2 題、自動判分、至少 1 題情境
    var xq = it.xq || [];
    if (xq.length !== XQ) add('考題 xq 要剛好 ' + XQ + ' 題');
    if (!xq.some(function (q) { return q.k === 'sit' || q.k === 'use'; })) add('考題至少 1 題是情境題（sit 或 use）');
    qsErr(xq, 'xq', 'x', it).forEach(add);
    if (cat) {
      if (cat.id !== it.id) add('id 跟目錄不一樣');
      if (cat.word !== it.word) add('成語跟目錄不一樣（目錄：' + cat.word + '）');
      if (cat.lv !== it.lv) add('級別跟目錄不一樣');
      if (cat.src !== it.src) add('出處跟目錄不一樣（目錄：' + cat.src + '）');
    }
    return E;
  }
  // 成語素養閱讀一篇：共用 ZhReading.validate（區塊、SVG、表格、題目、四層次、d 遞增），只換掉國語閱讀的字數／題數／比例規定
  var ZR_SKIP = /id 格式|字數 \d|題數 \d|開放題 \d+ 題|直接提取題要占|推論題至少|詮釋整合＋比較評估要占|L4 要 2～3 個文本|L3 要有表格/;   // shortcut: 用訊息文字過濾 reading-core 的級別規定；reading-core 改訊息時要一起改
  function validateReading(art, cat, catalog) {
    var E = [], add = function (m) { E.push((art && art.id ? art.id : '?') + '：' + m); };
    if (!art || typeof art !== 'object') return ['不是物件'];
    if (!/^cyr\d\d$/.test(art.id || '')) add('id 格式要像 cyr01');
    var clone = JSON.parse(JSON.stringify(art)); clone.id = 'zh' + art.lv + '-01';
    ZR.validate(clone).forEach(function (m) { m = m.replace(/^zh\d-01：/, ''); if (!ZR_SKIP.test(m)) add(m); });
    var wc = ZR.wordCount(art); if (wc < 400 || wc > 800) add('字數 ' + wc + '，成語素養閱讀要 400～800');
    var qs = art.qs || [], open = qs.filter(isOpen).length;
    if (qs.length !== 6 || open !== 1) add('要 6 題：5 題自動判分＋1 題開放（現在 ' + qs.length + ' 題、開放 ' + open + ' 題）');
    var unit = cat ? cat.unit : 0, mine = (catalog || []).filter(function (c) { return c.unit === unit; }), text = (art.body || []).map(function (b) { return typeof b === 'string' ? b : JSON.stringify(b); }).join('');
    if (!Array.isArray(art.uses) || art.uses.length < 3 || art.uses.length > 5) add('uses 要列 3～5 個用到的成語 id');
    else art.uses.forEach(function (id) {
      var c = mine.filter(function (x) { return x.id === id; })[0];
      if (!c) add(id + ' 不是第 ' + unit + ' 單元的成語');
      else if (text.indexOf(c.word) < 0) add('文中沒有用到「' + c.word + '」');
    });
    if (cat) { if (cat.lv !== art.lv) add('級別跟目錄不一樣'); if (cat.genre !== art.genre) add('文體跟目錄不一樣（目錄：' + cat.genre + '）'); }
    return E;
  }
  // 句子（≥ 8 字）：檢查考題沒有跟練習題／例句同一句
  function sentences(s) { return String(s || '').split(/[。！？；\n「」]/).map(function (x) { return x.replace(/[\s，、：＿]/g, ''); }).filter(function (x) { return cnt(x) >= 8; }); }
  function qText(q) { return (q.ctx || '') + '。' + (q.q || ''); }
  function validateAll(catalog, idioms, readings) {
    var E = [], seen = {}, byId = {}, rById = {}, used = {};
    (catalog.idioms || []).forEach(function (c) { if (byId[c.id]) E.push('目錄 id 重複：' + c.id); byId[c.id] = c; });
    (catalog.readings || []).forEach(function (c) { if (rById[c.id]) E.push('目錄 id 重複：' + c.id); rById[c.id] = c; });
    (idioms || []).forEach(function (it) {
      if (seen[it.id]) E.push('成語 id 重複：' + it.id); seen[it.id] = 1;
      if (!byId[it.id]) E.push(it.id + '：不在目錄裡');
      E.push.apply(E, validateIdiom(it, byId[it.id]));
      (it.pq || []).forEach(function (q) { sentences(qText(q)).forEach(function (s) { used[s] = it.id + ':' + q.id; }); });
      (it.eg || []).forEach(function (e) { sentences(e).forEach(function (s) { used[s] = it.id + ' 例句'; }); });
    });
    (idioms || []).forEach(function (it) { (it.xq || []).forEach(function (q) { sentences(qText(q).replace(/＿{2,}/g, it.word)).forEach(function (s) { if (used[s]) E.push(it.id + ':' + q.id + ' 考題跟 ' + used[s] + ' 同一句：「' + s + '」'); }); }); });
    (readings || []).forEach(function (a) {
      if (seen[a.id]) E.push('篇 id 重複：' + a.id); seen[a.id] = 1;
      if (!rById[a.id]) E.push(a.id + '：不在目錄裡');
      E.push.apply(E, validateReading(a, rById[a.id], catalog.idioms));
    });
    return E;
  }

  // ---------- 題庫組合 ----------
  function find(list, id) { for (var i = 0; i < (list || []).length; i++) if (list[i].id === id) return list[i]; return null; }
  function unitIdioms(k, catalog, idioms) { return (catalog.idioms || []).filter(function (c) { return c.unit === k; }).map(function (c) { return find(idioms, c.id); }).filter(Boolean); }
  var byD = function (a, b) { return a.q.d - b.q.d || a.i - b.i; };   // d 由小到大，同 d 照成語順序（穩定）
  function unitTest(k, catalog, idioms) {
    var out = [], i = 0;
    unitIdioms(k, catalog, idioms).forEach(function (it) { (it.xq || []).forEach(function (q) { out.push({ it: it, q: q, i: i++ }); }); });
    return out.sort(byD);
  }
  function finalTest(idioms, n, rand) {
    var all = [], i = 0;
    (idioms || []).forEach(function (it) { (it.xq || []).forEach(function (q) { all.push({ it: it, q: q, i: i++ }); }); });
    return QK.shuffle(all, rand).slice(0, n || FINAL).sort(byD);
  }
  // ---------- 進度 ----------
  // 第 lv 級：沿用國語閱讀（前一級完成 min(5, 前一級已上架數)）
  function unlocked(lv, idioms, isDone) { return ZR.unlocked(lv, idioms, isDone); }
  // 單元測驗：這一單元已上架的成語都完成才開（還沒上架任何一個＝準備中）
  function unitOpen(k, catalog, idioms, isDone) { var L = unitIdioms(k, catalog, idioms); return L.length > 0 && L.every(function (it) { return isDone(it.id); }); }
  // 素養閱讀：文中用到、已上架的成語都完成才開
  function readingOpen(art, idioms, isDone) { return (art.uses || []).every(function (id) { return !find(idioms, id) || isDone(id); }); }
  // 錯題庫（kids-mistakes.js 的 'chinese' 科；分類 t 固定「成語」）
  function mkId(owner, q) { return owner.id + ':' + q.id; }
  function plain(s, n) { s = String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
  function mkP(owner, q) { return { a: owner.id, q: q.id, t: '成語', s: plain((owner.word ? '〔' + owner.word + '〕' : '〔' + owner.title + '〕') + (q.ctx ? q.ctx + ' ' : '') + q.q, 120), ans: plain(QK.answerText(q), 120) }; }
  function idOf(n) { return 'cy' + pad3(n); }

  var CY = { LV: LV, STORY: STORY, KINDS: KINDS, SITU: SITU, UNIT: UNIT, XQ: XQ, FINAL: FINAL,
    validateIdiom: validateIdiom, validateReading: validateReading, validateAll: validateAll, sentences: sentences,
    find: find, unitIdioms: unitIdioms, unitTest: unitTest, finalTest: finalTest, unlocked: unlocked, unitOpen: unitOpen, readingOpen: readingOpen,
    grade: ZR.grade, isOpen: isOpen, mkId: mkId, mkP: mkP, idOf: idOf };
  if (typeof module !== 'undefined' && module.exports) module.exports = CY;
  root.ZhIdiom = CY;
})(typeof window !== 'undefined' ? window : globalThis);
