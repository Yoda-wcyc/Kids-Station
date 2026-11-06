/* math/grade.js — 五下／六上／六下數學（康軒，2026-11-06）的題目引擎。純函式：瀏覽器（window.MG）與 Node（require）共用，不碰 DOM／localStorage。
   單元清單（BOOKS）依 115 學年度屏東縣國小公開的康軒數學領域教學計畫（見 README）；全部「待課本核對」，重點與題目都是原創。
   資料：math/grade/<單元id>.js 呼叫 MG.unit({id, cards, gens})：
     cards：[{t:一句白話重點, ex:例題＋完整算法, why:公式為什麼, svg?:圖}]（字串可用 [[n/d]] 畫上下排分數、w[[n/d]] 帶分數）
     gens ：[{k:代號, d:1|2|3, n:題數, f:function (r, H) → 題目}]；r＝固定種子亂數（單元id＋k＋第幾題），同一題每次都一樣（錯題 id 不會變）
   題目：{q:題目, t:'num'|'nums'|'mc'|'set', why:解說, v:驗算用參數, svg?, ...}
     num ：a＝有理數 [分子,分母]；form 'f'＝分數格（整數＋分子／分母），否則一格（可打 12、0.5、3/4、1又3/4）；suf＝格子後面的單位；
           simp＝要最簡分數（一樣大但沒約分→提醒、不算對錯）；mixed＝要帶分數；err＝[[常見錯答, 說明]]
     nums：a＝[有理數…]、labels＝每格後面的字（例 ['時','分']）
     mc  ：opts＝選項（第 0 個不一定是答案，a＝正解索引）、ov＝選項的值（驗算用）；畫面依題目 id 固定打散
     set ：opts、a＝[正解索引…]、ov；全部選對才算對，漏選（選的都對）只提醒、不算對錯
   判分照分數頁（math/paper.js）：等值都算對（0.5＝[[1/2]]、沒約分的分數），題目要最簡分數時「一樣大了，但還可以再約分」只提醒。
   驗算：test/math-grade.test.js 用 test/mg-verify/<單元id>.js 的另一種算法逐題比對答案。 */
(function (root) {
  'use strict';
  var BOOKS = [
    { id: 'g5b', name: '五下', units: [['g5b1', '體積'], ['g5b2', '分數的計算'], ['g5b3', '容積'], ['g5b4', '小數的乘法'], ['g5b5', '大數與折線圖'], ['g5b6', '整數、小數除以整數'], ['g5b7', '表面積'], ['g5b8', '比率與百分率'], ['g5b9', '時間的乘除'], ['g5b10', '生活中的大單位']] },
    { id: 'g6a', name: '六上', units: [['g6a1', '最大公因數與最小公倍數'], ['g6a2', '分數除法'], ['g6a3', '數量關係'], ['g6a4', '小數除法'], ['g6a5', '比與比值'], ['g6a6', '圓周長與扇形周長'], ['g6a7', '圓面積與扇形面積'], ['g6a8', '認識速率'], ['g6a9', '放大圖、縮圖與比例尺']] },
    { id: 'g6b', name: '六下', units: [['g6b1', '小數與分數的計算'], ['g6b2', '速率的應用'], ['g6b3', '柱體體積與表面積'], ['g6b4', '基準量與比較量'], ['g6b5', '怎樣解題'], ['g6b6', '圓形圖']] }
  ];
  var ROUND = 15, TEST_N = 20, REVIEW_N = 30, PASS = 80;
  var NUMS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

  // ================= 有理數（整數分子分母，不走浮點）=================
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function lcm(a, b) { return a / gcd(a, b) * b; }
  function R(n, d) {
    if (Array.isArray(n)) return R(n[0], n[1]);
    d = d == null ? 1 : d;
    if (!d || !isFinite(n) || !isFinite(d) || Math.floor(n) !== n || Math.floor(d) !== d) throw new Error('bad rational ' + n + '/' + d);
    if (d < 0) { n = -n; d = -d; }
    var g = gcd(n, d) || 1; return [n / g, d / g];
  }
  var add = function (a, b) { a = R(a); b = R(b); return R(a[0] * b[1] + b[0] * a[1], a[1] * b[1]); };
  var sub = function (a, b) { a = R(a); b = R(b); return R(a[0] * b[1] - b[0] * a[1], a[1] * b[1]); };
  var mul = function (a, b) { a = R(a); b = R(b); return R(a[0] * b[0], a[1] * b[1]); };
  var div = function (a, b) { a = R(a); b = R(b); if (!b[0]) throw new Error('÷0'); return R(a[0] * b[1], a[1] * b[0]); };
  var eq = function (a, b) { a = R(a); b = R(b); return a[0] === b[0] && a[1] === b[1]; };
  var cmp = function (a, b) { a = R(a); b = R(b); var x = a[0] * b[1] - b[0] * a[1]; return x > 0 ? 1 : x < 0 ? -1 : 0; };
  // 小數字串 → 有理數（'3.14' → [157,50]）；不是小數回 null
  function fromDec(s) {
    s = String(s).trim(); var m = /^(-?)(\d*)(?:\.(\d+))?$/.exec(s); if (!m || (!m[2] && !m[3])) return null;
    var f = m[3] || '', p = Math.pow(10, f.length); return R((m[1] ? -1 : 1) * (parseInt(m[2] || '0', 10) * p + parseInt(f || '0', 10)), p);
  }
  // 有理數 → 小數字串（有限小數才有；不然 null）
  function toDec(r) {
    r = R(r); var d = r[1], k = 0; while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; if (d !== 1) return null;
    var den = r[1], neg = r[0] < 0, n = Math.abs(r[0]), ip = Math.floor(n / den), rem = n % den, s = '';
    while (rem && k < 20) { rem *= 10; s += Math.floor(rem / den); rem %= den; k++; }
    return (neg ? '-' : '') + ip + (s ? '.' + s : '');
  }
  // 顯示：整數 → '12'；其他 → '[[3/4]]'（mixed → '1[[3/4]]'）；dec → 小數
  function fmt(r, how) {
    r = R(r); if (r[1] === 1) return String(r[0]);
    if (how === 'dec') { var s = toDec(r); if (s) return s; }
    if (how === 'mixed' && Math.abs(r[0]) > r[1]) { var w = Math.floor(r[0] / r[1]); return w + '[[' + (r[0] - w * r[1]) + '/' + r[1] + ']]'; }
    return '[[' + r[0] + '/' + r[1] + ']]';
  }
  var fr = function (n, d) { return '[[' + n + '/' + d + ']]'; };
  function comma(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  // ================= 亂數（同一題每次一樣）=================
  function hash(s) { var h = 2166136261; s = String(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var a = (typeof seed === 'number' ? seed : hash(seed)) >>> 0 || 1; return function () { a = (a + 0x6D2B79F5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(a, rnd) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // ================= 出題小工具（H，給資料檔用）=================
  // ri(r,a,b)：a～b 的整數；pick(r,陣列)；mc(正解, 錯答[], 顯示)：自動去重、湊 4 個選項、正解不會剛好是唯一最長的
  function ri(r, a, b) { return a + Math.floor(r() * (b - a + 1)); }
  function pick(r, xs) { return xs[Math.floor(r() * xs.length)]; }
  // 值比較：數字／[分子,分母] 用有理數比；其他（字串、物件）比 JSON
  function isR(x) { return typeof x === 'number' || (Array.isArray(x) && x.length === 2 && x.every(function (y) { return typeof y === 'number' && Math.floor(y) === y; }) && x[1] !== 0); }
  function same(a, b) { return isR(a) && isR(b) ? eq(a, b) : JSON.stringify(a) === JSON.stringify(b); }
  // 選擇題：ans＝正解的值，wrong＝錯答候選（值），show＝值 → 顯示字（預設 fmt）。回 {t:'mc', opts, ov, a}
  function mc(ans, wrong, show, n) {
    show = show || function (x) { return isR(x) ? fmt(x) : String(x); }; n = n || 4;
    var ov = [ans], seen = {}; seen[show(ans)] = 1;
    wrong.forEach(function (w) { var s = show(w); if (!seen[s] && !same(w, ans) && ov.length < 32) { seen[s] = 1; ov.push(w); } });
    var len = function (x) { return plain(show(x)).length; }, al = len(ans), rest = ov.slice(1);
    // 正解不能是唯一最長：先留一個不比正解短的錯答
    var longIdx = -1; rest.forEach(function (w, i) { if (longIdx < 0 && len(w) >= al) longIdx = i; });
    if (longIdx < 0) return null;   // 湊不出：Q() 回 null，bank 換種子重抽
    var chosen = [rest[longIdx]].concat(rest.filter(function (w, i) { return i !== longIdx; }));
    ov = [ans].concat(chosen.slice(0, n - 1));
    return { t: 'mc', opts: ov.map(show), ov: ov, a: 0 };
  }
  // 列出全部：cands＝候選值，ok(x)→ 是不是答案
  function set(cands, ok, show) {
    show = show || function (x) { return isR(x) ? fmt(x) : String(x); };
    var a = []; cands.forEach(function (x, i) { if (ok(x)) a.push(i); });
    return { t: 'set', opts: cands.map(show), ov: cands.slice(), a: a };
  }
  function num(a, o) { var q = { t: 'num', a: R(a) }; if (o) Object.keys(o).forEach(function (k) { q[k] = o[k]; }); return q; }
  function nums(a, labels, o) { var q = { t: 'nums', a: a.map(function (x) { return R(x); }), labels: labels }; if (o) Object.keys(o).forEach(function (k) { q[k] = o[k]; }); return q; }
  // q(題目, 解說, 答案物件, 驗算參數, 其他)：組一題
  function Q(q, why, ans, v, extra) { if (!ans) return null; var o = { q: q, why: why, v: v || {} }; Object.keys(ans).forEach(function (k) { o[k] = ans[k]; }); if (extra) Object.keys(extra).forEach(function (k) { o[k] = extra[k]; }); return o; }

  // ---- SVG 小圖（全部只用固定字與數字）----
  var INK = '#263445';
  function svgWrap(w, h, body, label) { return '<svg class="mg-svg" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" role="img" aria-label="' + String(label || '').replace(/"/g, '') + '">' + body + '</svg>'; }
  function txt(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" font-size="' + (o.fs || 16) + '" text-anchor="' + (o.a || 'middle') + '" font-weight="700" fill="' + (o.c || INK) + '">' + s + '</text>'; }
  // 長方體（斜投影）：l 長、w 寬、h 高（畫面比例），labels＝[長字, 寬字, 高字]
  function box(l, w, h, labels, o) {
    o = o || {}; var S = o.scale || 1, L = l * S, W = w * S * 0.5, H = h * S, x0 = 30, y0 = 20 + W + H, fill = o.fill || '#d6ecff';
    var P = function (x, y) { return x.toFixed(1) + ',' + y.toFixed(1); };
    var A = [x0, y0], B = [x0 + L, y0], C = [x0 + L, y0 - H], D = [x0, y0 - H], E = [x0 + W, y0 - H - W], F = [x0 + L + W, y0 - H - W], G = [x0 + L + W, y0 - W];
    var body = '<polygon points="' + [A, B, C, D].map(function (p) { return P(p[0], p[1]); }).join(' ') + '" fill="' + fill + '" stroke="' + INK + '" stroke-width="2"/>' +
      '<polygon points="' + [D, C, F, E].map(function (p) { return P(p[0], p[1]); }).join(' ') + '" fill="#eef6ff" stroke="' + INK + '" stroke-width="2"/>' +
      '<polygon points="' + [B, G, F, C].map(function (p) { return P(p[0], p[1]); }).join(' ') + '" fill="#bcdcf7" stroke="' + INK + '" stroke-width="2"/>';
    labels = labels || [];
    if (labels[0]) body += txt(x0 + L / 2, y0 + 22, labels[0]);
    if (labels[1]) body += txt(x0 + L + W / 2 + 18, y0 - W / 2 + 6, labels[1], { a: 'start' });
    if (labels[2]) body += txt(x0 - 6, y0 - H / 2 + 6, labels[2], { a: 'end' });
    return svgWrap(Math.ceil(x0 + L + W + 90), Math.ceil(y0 + 34), body, o.label || '長方體');
  }

  // ================= 單元資料 =================
  var UNITS = {}, BANK = {};
  function bookOf(uid) { for (var i = 0; i < BOOKS.length; i++) for (var j = 0; j < BOOKS[i].units.length; j++) if (BOOKS[i].units[j][0] === uid) return { book: BOOKS[i], no: j + 1, title: BOOKS[i].units[j][1] }; return null; }
  function label(uid) { var b = bookOf(uid); return b ? b.book.name + ' 單元' + NUMS[b.no - 1] : uid; }
  function unit(u) { if (!u || !bookOf(u.id)) throw new Error('unknown unit ' + (u && u.id)); UNITS[u.id] = u; delete BANK[u.id]; return u; }
  // 一個單元的題庫（照 gens 順序；同一單元題目文字重複、或出題回 null（例：選擇題湊不出合格選項）就換種子重抽，最多 30 次）
  function bank(uid) {
    if (BANK[uid]) return BANK[uid];
    var u = UNITS[uid]; if (!u) return [];
    var out = [], seen = {};
    u.gens.forEach(function (g) {
      for (var i = 0; i < g.n; i++) {
        var q = null;
        for (var t = 0; t < 30; t++) {
          var x = g.f(rng(uid + '|' + g.k + '|' + i + (t ? '|' + t : '')), H, i);
          var key = x && plain(x.q) + '|' + (x.opts || []).join('|');
          if (x && !seen[key]) { seen[key] = 1; q = x; break; }
        }
        if (!q) throw new Error('cannot make distinct question ' + uid + ' ' + g.k + ' ' + i);
        q.id = uid + '-' + g.k + i; q.u = uid; q.k = g.k; q.d = g.d;
        out.push(q);
      }
    });
    return (BANK[uid] = out);
  }
  function byId(qid) { var m = /^(g[56][ab]\d+)-/.exec(String(qid || '')); if (!m) return null; var b = bank(m[1]); for (var i = 0; i < b.length; i++) if (b[i].id === qid) return b[i]; return null; }
  function bookUnits(bid) { var b = BOOKS.filter(function (x) { return x.id === bid; })[0]; return b ? b.units.map(function (x) { return x[0]; }) : []; }
  function ready(bid) { var us = bookUnits(bid); return us.length > 0 && us.every(function (u) { return !!UNITS[u]; }); }

  // ================= 抽題 =================
  // 練習一輪（照心智圖 pickQuiz）：沒答對過 → 錯題庫裡的 → 其他；同一層照 d 由小到大（同 d 錯題先、其餘隨機）；抽出的一輪也照 d 排
  function pickRound(qs, n, okSet, mkSet, rand) {
    var dOf = function (q) { return +q.d || 1; };
    var all = qs.map(function (q) { var h = q.id; return { q: q, k: [!okSet[h] ? 0 : mkSet[h] ? 1 : 2, dOf(q), mkSet[h] ? 0 : 1, rand()] }; });
    var c = function (a, b) { for (var i = 0; i < a.k.length; i++) if (a.k[i] !== b.k[i]) return a.k[i] - b.k[i]; return 0; };
    var pk = all.sort(c).slice(0, n).map(function (x) { return { q: x.q, k: [dOf(x.q), rand()] }; });
    return pk.sort(c).map(function (x) { return x.q; });
  }
  // 測驗：從題庫抽 n 題、不重複；難度 4:4:2（不夠就從別的難度補），盡量每種題型（gen）都出到；照 d 排
  function exam(qs, n, rand) {
    var want = { 1: Math.round(n * 0.4), 2: Math.round(n * 0.4) }; want[3] = n - want[1] - want[2];
    var by = { 1: [], 2: [], 3: [] }; shuffle(qs, rand).forEach(function (q) { (by[q.d] || by[1]).push(q); });
    var out = [], used = {};
    [1, 2, 3].forEach(function (d) {
      var gens = {}, first = [], rest = [];
      by[d].forEach(function (q) { var g = q.u + q.k; if (!gens[g]) { gens[g] = 1; first.push(q); } else rest.push(q); });
      first.concat(rest).slice(0, want[d]).forEach(function (q) { out.push(q); used[q.id] = 1; });
    });
    shuffle(qs, rand).forEach(function (q) { if (out.length < n && !used[q.id]) { out.push(q); used[q.id] = 1; } });
    return out.sort(function (a, b) { return a.d - b.d; });
  }
  // 總複習：整冊每個單元輪流抽，共 n 題（難度 4:4:2），照 d 排
  function review(bid, n, rand) {
    var us = bookUnits(bid), per = {}, out = [];
    us.forEach(function (u) { per[u] = exam(bank(u), Math.ceil(n / us.length) + 2, rand); });
    var want = { 1: Math.round(n * 0.4), 2: Math.round(n * 0.4) }; want[3] = n - want[1] - want[2];
    var got = { 1: 0, 2: 0, 3: 0 }, used = {}, i = 0;
    for (var round = 0; round < 50 && out.length < n; round++) {
      us.forEach(function (u) {
        if (out.length >= n) return;
        var q = per[u].filter(function (x) { return !used[x.id] && got[x.d] < want[x.d]; })[0];
        if (q) { used[q.id] = 1; got[q.d]++; out.push(q); }
      });
      i++;
    }
    us.forEach(function (u) { per[u].forEach(function (q) { if (out.length < n && !used[q.id]) { used[q.id] = 1; out.push(q); } }); });
    return out.sort(function (a, b) { return a.d - b.d; });
  }
  // 選項的顯示順序（依題目 id 固定）：回 [原始索引…]
  function optOrder(Q) { return shuffle(Q.opts.map(function (x, i) { return i; }), rng('opt|' + Q.id)); }

  // ================= 判分 =================
  function z2h(s) { return String(s == null ? '' : s).replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); }).replace(/[．。]/g, '.').replace(/[／]/g, '/').replace(/，|,/g, '').trim(); }
  // 一格數字：12、0.5、3/4、1又3/4、1 3/4 → 有理數；不是數字回 null
  function parseNum(s) {
    s = z2h(s); if (!s) return null;
    var m;
    if ((m = /^(\d+)\s*(?:又|\s)\s*(\d+)\s*\/\s*(\d+)$/.exec(s))) return +m[3] ? add(+m[1], R(+m[2], +m[3])) : null;
    if ((m = /^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/.exec(s))) { var a = fromDec(m[1]), b = fromDec(m[2]); return a && b && b[0] ? div(a, b) : null; }
    return fromDec(s);
  }
  // 分數格：{w, n, d}（整數可空）；只填整數也行
  function parseFrac(v) {
    v = v || {}; var w = z2h(v.w), n = z2h(v.n), d = z2h(v.d);
    if (!w && !n && !d) return null;
    if (!n && !d) return /^\d+$/.test(w) ? { r: R(+w), n: 0, d: 1, w: +w } : null;
    if (!/^\d+$/.test(n) || !/^\d+$/.test(d) || !+d || (w && !/^\d+$/.test(w))) return null;
    return { r: add(+(w || 0), R(+n, +d)), n: +n, d: +d, w: +(w || 0), hasW: !!w };
  }
  var OK = { ok: true, msg: '' };
  function bad(msg) { return { ok: false, msg: msg }; }
  function soft(msg) { return { ok: false, soft: true, msg: msg }; }
  function errMsg(Q, r) { var e = (Q.err || []).filter(function (x) { return eq(x[0], r); })[0]; return e ? e[1] : ''; }
  // check(Q, 作答) → {ok, soft?, msg}；soft＝還不算作答（沒填、分數沒約到最簡、列舉漏選）
  function check(Q, v) {
    var i, r;
    switch (Q.t) {
      case 'num': {
        if (Q.form === 'f') {
          var f = parseFrac(v); if (!f) return soft('先把答案填好（分子、分母都要填）。');
          if (!eq(f.r, Q.a)) return bad(errMsg(Q, f.r) || '答案不對。');
          if (Q.simp && f.n && gcd(f.n, f.d) !== 1) return soft('一樣大了，但還可以再約分，約到最簡。');
          if (Q.mixed && f.n >= f.d && f.n) return soft('一樣大了，但要寫成帶分數（分子比分母小）。');
          return OK;
        }
        r = parseNum(v); if (!r) return soft('先填數字（可以寫 12、0.5 或 3/4）。');
        if (!eq(r, Q.a)) return bad(errMsg(Q, r) || '答案不對。');
        if (Q.simp && /\//.test(String(v))) { var mm = /(\d+)\s*\/\s*(\d+)\s*$/.exec(z2h(v)); if (mm && gcd(+mm[1], +mm[2]) !== 1) return soft('一樣大了，但還可以再約分，約到最簡。'); }
        return OK;
      }
      case 'nums': {
        var xs = (v || []).map(parseNum); if (xs.length < Q.a.length || xs.some(function (x) { return !x; })) return soft('每一格都要填數字。');
        for (i = 0; i < Q.a.length; i++) if (!eq(xs[i], Q.a[i])) return bad(errMsg(Q, xs[i]) || '有一格不對。');
        return OK;
      }
      case 'mc': return v == null || v === '' ? soft('先選一個答案。') : +v === Q.a ? OK : bad('選錯了。');
      case 'set': {
        var ch = (v || []).map(Number); if (!ch.length) return soft('先選答案（可以選好幾個）。');
        var wrong = ch.filter(function (x) { return Q.a.indexOf(x) < 0; });
        if (wrong.length) return bad('有 ' + wrong.length + ' 個選錯了：' + wrong.map(function (x) { return plain(Q.opts[x]); }).join('、') + '。');
        if (ch.length < Q.a.length) return soft('選的都對，但還少 ' + (Q.a.length - ch.length) + ' 個，再找找看！');
        return OK;
      }
    }
    return bad('');
  }
  // 測驗交卷：soft 也算錯（說明照給）
  function grade(Q, v) { var r = check(Q, v); return r.ok ? r : { ok: false, msg: r.msg || '答案不對。', blank: !!(r.soft && /^先/.test(r.msg)) }; }
  function ansText(Q) {
    if (Q.as) return Q.as;
    switch (Q.t) {
      case 'num': return fmt(Q.a, Q.mixed ? 'mixed' : Q.form === 'f' ? '' : 'dec') + (Q.suf ? ' ' + Q.suf : '');
      case 'nums': return Q.a.map(function (x, i) { return fmt(x, 'dec') + (Q.labels && Q.labels[i] ? ' ' + Q.labels[i] : ''); }).join(' ');
      case 'mc': return Q.opts[Q.a];
      case 'set': return Q.a.map(function (i) { return Q.opts[i]; }).join('、');
    }
    return '';
  }

  // ================= 顯示 =================
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // [[n/d]] → 上下排分數（資料檔是我們自己寫的固定字，可以有 <b>、<br>）
  function html(s) { return String(s == null ? '' : s).replace(/\[\[(\d+)\/(\d+)\]\]/g, '<span class="fr"><span class="fr-n">$1</span><span class="fr-d">$2</span></span>'); }
  function plain(s) { return String(s == null ? '' : s).replace(/\[\[(\d+)\/(\d+)\]\]/g, ' $1/$2 ').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim(); }

  // ================= 錯題庫（kids-mistakes.js 數學 type 'grade'）=================
  // id 'mg:<題目id>'，p＝{type:'grade', qid, b:冊別 單元X, q:題目純文字（清單顯示）}；重做用 qid 找回原題
  function mkEntry(Q) { return { id: 'mg:' + Q.id, p: { type: 'grade', qid: Q.id, b: label(Q.u), q: plain(Q.q).slice(0, 160) } }; }
  function fromMistake(p) { return p && p.type === 'grade' ? byId(p.qid) : null; }

  var H = { isR: isR, same: same, R: R, add: add, sub: sub, mul: mul, div: div, eq: eq, cmp: cmp, gcd: gcd, lcm: lcm, fromDec: fromDec, toDec: toDec, fmt: fmt, fr: fr, comma: comma, ri: ri, pick: pick, shuffle: shuffle, mc: mc, set: set, num: num, nums: nums, Q: Q, svg: svgWrap, txt: txt, box: box, INK: INK };
  var MG = { BOOKS: BOOKS, ROUND: ROUND, TEST_N: TEST_N, REVIEW_N: REVIEW_N, PASS: PASS, H: H, UNITS: UNITS, unit: unit, bank: bank, byId: byId, bookOf: bookOf, bookUnits: bookUnits, label: label, ready: ready,
    rng: rng, hash: hash, shuffle: shuffle, pickRound: pickRound, exam: exam, review: review, optOrder: optOrder, parseNum: parseNum, parseFrac: parseFrac, check: check, grade: grade, ansText: ansText, html: html, plain: plain, esc: esc, mkEntry: mkEntry, fromMistake: fromMistake };
  if (typeof module !== 'undefined' && module.exports) module.exports = MG;
  root.MG = MG;
})(typeof window !== 'undefined' ? window : globalThis);
