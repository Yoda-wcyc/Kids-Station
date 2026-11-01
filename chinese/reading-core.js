/* chinese/reading-core.js — 國語〈閱讀素養 100 篇〉的規則（純函式：不碰 DOM／localStorage；瀏覽器 window.ZhReading 與 Node 共用）。
   規格正本：G:\Yoda x Claude\_deploy\kids-member\docs\CHINESE_READING_SPEC.md（資料格式、四級、PIRLS 四層次、內容鐵則）。
   - LV：四級的字數範圍與題數規定；GENRES／DOMAINS：文體、領域（只能用這些字）；PIRLS：題目層次 p 1–4。
   - wordCount(art)：字數＝中文字＋英數字元（標點、空白、SVG 圖不算）。
   - validate(art, cat)：一篇的資料檢查（測試用；回傳錯誤字串陣列）。
   - unlocked(lv, arts, isDone)：第 lv 級開了沒（前一級完成 min(5, 前一級篇數) 篇）。
   - grade(states)：一輪的結果（自動判分題答對率 ≥ 70% 而且開放題都寫了＝完成這篇）。
   - mkId／mkP：錯題庫的題目 id（'<篇id>:<題id>'，不用題目文字雜湊）與顯示資料。 */
(function (root) {
  'use strict';
  var QK = root.QuizKit || (typeof require === 'function' ? require('../quizkit.js') : null);

  // 四級（字數＝wordCount；題數 n＝總題數；auto＝自動判分題至少幾題；open＝開放題幾題）
  var LV = {
    1: { name: '讀懂字面', short: 'L1', min: 300, max: 500, n: [6, 8], open: [1, 2] },
    2: { name: '推論理解', short: 'L2', min: 600, max: 900, n: [6, 8], open: [1, 2] },
    3: { name: '長文＋跨領域', short: 'L3', min: 1000, max: 1500, n: [7, 8], open: [2, 3] },
    4: { name: '多文本與深度思考', short: 'L4', min: 900, max: 1800, n: [7, 8], open: [2, 3] }
  };
  var AUTO_MIN = 5;            // 自動判分題至少 5 題（後端 practice_round 少於 5 題不給學習幣）
  var PASS = 70;               // 完成這篇：自動判分題答對率 ≥ 70%，而且開放題都有作答
  var UNLOCK = 5;              // 前一級完成 5 篇（前一級還不到 5 篇時＝全部）就開下一級
  var OPEN_MIN = 5;            // 開放題至少寫 5 個字才算有作答
  var GENRES = ['記敘文', '說明文', '議論文', '童詩', '寓言', '新聞', '訪談', '書信', '應用文', '圖表資料', '科普', '傳記', '多文本'];
  var DOMAINS = ['生活', '語文', '自然', '社會', '數學', '健康', '藝術', '科技', '環境'];
  var PIRLS = { 1: '直接提取', 2: '推論', 3: '詮釋整合', 4: '比較評估' };

  function str(x) { return typeof x === 'string' && x.trim().length > 0; }
  function countText(s) { var m = String(s == null ? '' : s).match(/[\u3400-\u9fff\uf900-\ufaffA-Za-z0-9０-９]/g); return m ? m.length : 0; }
  // 一個區塊裡給小孩讀的文字（SVG 只算說明文字 cap）
  function blockText(b) {
    if (typeof b === 'string') return b;
    if (!b || typeof b !== 'object') return '';
    if (b.h) return b.h;
    if (b.doc) return b.doc + (b.from ? b.from : '');
    if (b.poem) return b.poem.join('');
    if (b.box) return (b.title || '') + b.box.join('');
    if (b.table) return (b.table.cap || '') + (b.table.head || []).join('') + (b.table.rows || []).map(function (r) { return r.join(''); }).join('');
    if (b.timeline) return (b.timeline.cap || '') + (b.timeline.items || []).map(function (r) { return r.join(''); }).join('');
    if (b.svg) return b.cap || '';
    return '';
  }
  function wordCount(art) { return (art.body || []).reduce(function (n, b) { return n + countText(blockText(b)); }, 0); }
  var isOpen = function (q) { return q && q.type === 'open'; };
  var autoQs = function (art) { return (art.qs || []).filter(function (q) { return !isOpen(q); }); };

  // SVG：只准畫圖（不能有 script、事件、外部連結）
  function svgErr(s) {
    if (!/^<svg[\s>]/.test(s) || !/<\/svg>\s*$/.test(s)) return 'svg 要是一整個 <svg>…</svg>';
    if (!/viewBox="/.test(s)) return 'svg 要有 viewBox（才會跟著畫面縮放）';
    if (/<script|\son\w+\s*=|href\s*=\s*"(?!#)|<foreignObject|<image/i.test(s)) return 'svg 不能有 script、事件、外部連結或圖片';
    return '';
  }
  function blockErr(b) {
    if (typeof b === 'string') return str(b) ? '' : '空白段落';
    if (!b || typeof b !== 'object') return '不認得的區塊';
    var keys = Object.keys(b);
    if (b.h != null) return str(b.h) ? '' : '小標題 h 空白';
    if (b.doc != null) return str(b.doc) ? '' : '文本標題 doc 空白';
    if (b.poem != null) return Array.isArray(b.poem) && b.poem.length >= 2 && b.poem.every(function (x) { return typeof x === 'string'; }) ? '' : 'poem 要是字串陣列（空字串＝換段）';
    if (b.box != null) return Array.isArray(b.box) && b.box.length && b.box.every(str) ? '' : 'box 要是字串陣列';
    if (b.table != null) {
      var t = b.table; if (!t || !Array.isArray(t.head) || !Array.isArray(t.rows) || !t.rows.length || !str(t.cap)) return 'table 要有 cap、head、rows';
      return t.rows.every(function (r) { return Array.isArray(r) && r.length === t.head.length && r.every(function (c) { return typeof c === 'string' || typeof c === 'number'; }); }) ? '' : 'table 每列格數要跟 head 一樣';
    }
    if (b.timeline != null) {
      var tl = b.timeline; return tl && str(tl.cap) && Array.isArray(tl.items) && tl.items.length >= 3 && tl.items.every(function (r) { return Array.isArray(r) && r.length === 2 && str(r[0]) && str(r[1]); }) ? '' : 'timeline 要有 cap、items（至少 3 個 [時間, 事件]）';
    }
    if (b.svg != null) return !str(b.cap) ? 'svg 要有 cap（圖說）' : !str(b.alt) ? 'svg 要有 alt（給朗讀與看不到圖的人）' : svgErr(b.svg);
    return '不認得的區塊：' + keys.join(',');
  }
  function openErr(q) {
    var e = [];
    if (!str(q.q)) e.push('沒有題目 q');
    if (!str(q.ref)) e.push('開放題要有參考答案 ref');
    if (!Array.isArray(q.rubric) || q.rubric.length < 2 || q.rubric.length > 4 || !q.rubric.every(str)) e.push('開放題要有 2～4 條評分要點 rubric');
    return e;
  }

  // 一篇的資料檢查；cat＝目錄裡這一篇（chinese/data/catalog.js），有給就比對級別、文體、領域
  function validate(art, cat) {
    var E = [], add = function (m) { E.push(art && art.id ? art.id + '：' + m : m); };
    if (!art || typeof art !== 'object') return ['不是物件'];
    if (!/^zh[1-4]-\d\d$/.test(art.id || '')) add('id 格式要像 zh1-01');
    var L = LV[art.lv]; if (!L) { add('lv 要是 1–4'); return E; }
    if (art.id && +art.id.charAt(2) !== art.lv) add('id 的級別數字跟 lv 不一樣');
    if (GENRES.indexOf(art.genre) < 0) add('genre 只能用：' + GENRES.join('、'));
    if (!Array.isArray(art.domain) || !art.domain.length || art.domain.length > 3 || !art.domain.every(function (d) { return DOMAINS.indexOf(d) >= 0; })) add('domain 要 1～3 個，只能用：' + DOMAINS.join('、'));
    if (!str(art.title)) add('沒有標題');
    if (!Array.isArray(art.facts)) add('facts 要是陣列（事實＋出處類型；純虛構的寫 []）');
    else if ((art.genre === '科普' || art.genre === '傳記') && !art.facts.length) add('科普、傳記一定要列 facts（事實｜出處類型）');
    else art.facts.forEach(function (f) { if (!/^.+｜.+$/.test(f)) add('facts 每一條寫成「事實｜出處類型」：' + f); });
    if (!Array.isArray(art.body) || !art.body.length) { add('body 是空的'); return E; }
    art.body.forEach(function (b, i) { var m = blockErr(b); if (m) add('body[' + i + '] ' + m); });
    var wc = wordCount(art); if (wc < L.min || wc > L.max) add('字數 ' + wc + '，L' + art.lv + ' 要 ' + L.min + '～' + L.max);
    var docs = art.body.filter(function (b) { return b && b.doc; }).length;
    if (art.lv === 4 && (docs < 2 || docs > 3)) add('L4 要 2～3 個文本（{doc:"文本一：…"}），現在 ' + docs + ' 個');
    if (art.lv === 3 && !art.body.some(function (b) { return b && (b.table || b.svg || b.timeline); })) add('L3 要有表格、圖（SVG）或時間軸其中一種');
    // 題目
    var qs = art.qs; if (!Array.isArray(qs)) { add('沒有 qs'); return E; }
    var ids = {}, open = qs.filter(isOpen).length, auto = qs.length - open, cnt = { 1: 0, 2: 0, 3: 0, 4: 0 };
    if (qs.length < L.n[0] || qs.length > L.n[1]) add('題數 ' + qs.length + '，L' + art.lv + ' 要 ' + L.n[0] + '～' + L.n[1] + ' 題');
    if (open < L.open[0] || open > L.open[1]) add('開放題 ' + open + ' 題，L' + art.lv + ' 要 ' + L.open[0] + '～' + L.open[1] + ' 題');
    if (auto < AUTO_MIN) add('自動判分題 ' + auto + ' 題，至少 ' + AUTO_MIN + ' 題');
    qs.forEach(function (q, i) {
      var w = 'qs[' + i + '] ';
      if (!/^q\d{1,2}$/.test(q.id || '')) add(w + 'id 要像 q1');
      else if (ids[q.id]) add(w + 'id 重複 ' + q.id); else ids[q.id] = 1;
      if (!PIRLS[q.p]) add(w + 'p（PIRLS 層次）要是 1–4'); else cnt[q.p]++;
      if ([1, 2, 3].indexOf(q.d) < 0) add(w + 'd 要是 1|2|3');
      if (i && q.d < qs[i - 1].d) add(w + '難度 d 要由小到大排');
      (isOpen(q) ? openErr(q) : QK.validate(q)).forEach(function (m) { add(w + m); });
    });
    [1, 2, 3, 4].forEach(function (p) { if (!cnt[p]) add('沒有「' + PIRLS[p] + '」題（四個層次都要有）'); });
    var n = qs.length || 1, hi = (cnt[3] + cnt[4]) / n;
    if (art.lv === 1 && cnt[1] / n < 0.4) add('L1 直接提取題要占 40% 以上');
    if (art.lv === 2 && cnt[2] < 2) add('L2 推論題至少 2 題');
    if (art.lv === 3 && hi < 0.4) add('L3 詮釋整合＋比較評估要占 40% 以上');
    if (art.lv === 4 && (hi < 0.5 || cnt[4] < 2)) add('L4 詮釋整合＋比較評估要占 50% 以上，比較評估至少 2 題');
    if (cat) {
      if (cat.lv !== art.lv) add('級別跟目錄不一樣');
      if (cat.genre !== art.genre) add('文體跟目錄不一樣（目錄：' + cat.genre + '）');
      if ((cat.domain || []).join() !== (art.domain || []).join()) add('領域跟目錄不一樣（目錄：' + (cat.domain || []).join('、') + '）');
    }
    return E;
  }
  // 全部：id 唯一、每篇都在目錄裡、檢查每一篇
  function validateAll(catalog, arts) {
    var E = [], seen = {}, byId = {};
    (catalog || []).forEach(function (c) { if (byId[c.id]) E.push('目錄 id 重複：' + c.id); byId[c.id] = c; });
    (arts || []).forEach(function (a) {
      if (seen[a.id]) E.push('篇 id 重複：' + a.id); seen[a.id] = 1;
      if (!byId[a.id]) E.push(a.id + '：不在目錄裡（chinese/data/catalog.js）');
      E.push.apply(E, validate(a, byId[a.id]));
    });
    return E;
  }

  // ---------- 進度 ----------
  var byLv = function (arts, lv) { return (arts || []).filter(function (a) { return a.lv === lv; }); };
  function need(lv, arts) { return lv <= 1 ? 0 : Math.min(UNLOCK, byLv(arts, lv - 1).length); }
  function doneIn(lv, arts, isDone) { return byLv(arts, lv).filter(function (a) { return isDone(a.id); }).length; }
  function unlocked(lv, arts, isDone) { return lv <= 1 || doneIn(lv - 1, arts, isDone) >= need(lv, arts); }
  // states：[{q, done, right, text}]（開放題 text＝寫的內容）
  function grade(states) {
    var auto = states.filter(function (s) { return !isOpen(s.q); }), open = states.filter(function (s) { return isOpen(s.q); });
    var ok = auto.filter(function (s) { return s.done && s.right; }).length, n = auto.length;
    var pct = n ? Math.round(ok / n * 100) : 0, openDone = open.every(function (s) { return s.done && countText(s.text) >= OPEN_MIN; });
    var all = states.every(function (s) { return s.done; });
    return { ok: ok, n: n, pct: pct, openDone: openDone, all: all, pass: all && openDone && pct >= PASS };
  }
  // 錯題庫（kids-mistakes.js 的 'chinese' 科）：id 用篇 id＋題 id（上線後題目文字可以校對修字，不影響錯題庫）
  function mkId(art, q) { return art.id + ':' + q.id; }
  function plain(s, n) { s = String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
  function mkP(art, q) { return { a: art.id, q: q.id, t: plain(art.title, 30), s: plain(q.q, 120), ans: plain(QK.answerText(q), 120) }; }
  function find(arts, id) { for (var i = 0; i < (arts || []).length; i++) if (arts[i].id === id) return arts[i]; return null; }
  function qOf(art, qid) { return art && (art.qs || []).filter(function (q) { return q.id === qid; })[0] || null; }

  var ZR = { LV: LV, AUTO_MIN: AUTO_MIN, PASS: PASS, UNLOCK: UNLOCK, OPEN_MIN: OPEN_MIN, GENRES: GENRES, DOMAINS: DOMAINS, PIRLS: PIRLS,
    countText: countText, wordCount: wordCount, validate: validate, validateAll: validateAll, need: need, doneIn: doneIn, unlocked: unlocked, grade: grade,
    isOpen: isOpen, autoQs: autoQs, mkId: mkId, mkP: mkP, find: find, qOf: qOf };
  if (typeof module !== 'undefined' && module.exports) module.exports = ZR;
  root.ZhReading = ZR;
})(typeof window !== 'undefined' ? window : globalThis);
