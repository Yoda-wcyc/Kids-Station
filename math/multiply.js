/* multiply.js — 乘法快算的純函式（2026-10-21）；不碰 DOM，瀏覽器（window.MX）與 Node（module.exports）共用。
   題型 lv：
     nn   九九乘法（2～9 × 2～9）
     d21  二位數 × 一位數（個位不是 0，例：78×3）
     d22t 二位數 × 整十（例：15×50）
     d22  二位數 × 二位數（三成是整十、七成是一般題，例：15×57）
     d31  三位數 × 一位數（例：345×6）
   hint(a,b)：答錯時的拆解提示（不直接給答案，例：「15×57 再算一次：15×50=750、15×7=105，加起來是多少？」）
   full(a,b)：完整拆解（看結果、考卷正解用，例：「15×57 ＝ 15×50 ＋ 15×7 ＝ 750 ＋ 105 ＝ 855」）
   vertical(a,b)：直式格子（每一列＝部分積或加起來；逐位比對，抓出哪一位、哪個進位算錯）
   colSteps／addSteps：直式某一列每一位怎麼算（含進位），答錯那一位就說那一位。 */
(function (G) {
  'use strict';
  var LV = ['nn', 'd21', 'd22t', 'd22', 'd31'];
  var LV_NAME = { nn: '九九乘法', d21: '二位數×一位數', d22t: '二位數×整十', d22: '二位數×二位數', d31: '三位數×一位數' };
  var LV_EG = { nn: '8×4', d21: '78×3', d22t: '15×50', d22: '15×57', d31: '345×6' };
  function ri(rnd, a, b) { return a + Math.floor(rnd() * (b - a + 1)); }
  function isInt(n) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n; }

  // ---------- 出題 ----------
  function gen(lv, rnd) {
    rnd = rnd || Math.random;
    var a, b;
    if (lv === 'nn') { a = ri(rnd, 2, 9); b = ri(rnd, 2, 9); }
    else if (lv === 'd21') { do { a = ri(rnd, 12, 99); } while (a % 10 === 0); b = ri(rnd, 2, 9); }
    else if (lv === 'd22t') { do { a = ri(rnd, 11, 99); } while (a % 10 === 0); b = ri(rnd, 2, 9) * 10; }
    else if (lv === 'd22') {
      if (rnd() < 0.3) { var t = gen('d22t', rnd); return { a: t.a, b: t.b, lv: 'd22' }; }
      do { a = ri(rnd, 11, 99); } while (a % 10 === 0);
      do { b = ri(rnd, 11, 99); } while (b % 10 === 0);
    }
    else if (lv === 'd31') { do { a = ri(rnd, 101, 999); } while (a % 100 === 0); b = ri(rnd, 2, 9); }
    else return null;
    return { a: a, b: b, lv: lv };
  }
  // 一輪 n 題（同一輪不重複）
  function round(lv, n, rnd) {
    rnd = rnd || Math.random;
    var out = [], seen = {}, guard = 0;
    while (out.length < n && guard++ < 2000) {
      var q = gen(lv, rnd); if (!q) return [];
      var k = q.a + 'x' + q.b;
      if (seen[k] && guard < 1500) continue;
      seen[k] = 1; out.push(q);
    }
    return out;
  }
  // 錯題庫重做：檢查數字合理
  function valid(a, b) { return isInt(a) && isInt(b) && a >= 1 && b >= 1 && a <= 9999 && b <= 999; }

  // ---------- 拆解提示 ----------
  // 依位值拆：345 → [300, 40, 5]（0 的位不算）
  function split(n) {
    var s = String(n), out = [];
    for (var i = 0; i < s.length; i++) { var d = +s.charAt(i); if (d) out.push(d * Math.pow(10, s.length - 1 - i)); }
    return out;
  }
  // 拆成幾個部分積：[[算式, 值]]。照題目的順序：a×b 的 b 是兩位數就拆 b（15×57 → 15×50、15×7），b 是一位數就拆 a（78×3 → 70×3、8×3）
  // 九九（兩個都是一位數）：小的那個 ≤5 → null（用連加）；否則大的 ×5 ＋ ×(n−5)
  function parts(a, b) {
    if (a < 10 && b < 10) {
      var big = Math.max(a, b), small = Math.min(a, b);
      if (small <= 5) return null;
      return [[big + '×5', big * 5], [big + '×' + (small - 5), big * (small - 5)]];
    }
    if (b < 10) return split(a).map(function (p) { return [p + '×' + b, p * b]; });
    if (b % 10 === 0 && b < 100) return [[a + '×' + (b / 10), a * b / 10]];   // 整十：先算 a×幾，再補 0
    return split(b).map(function (p) { return [a + '×' + p, a * p]; });
  }
  var tens = function (a, b) { return b >= 10 && b < 100 && b % 10 === 0; };
  function hint(a, b) {
    var ps = parts(a, b);
    if (!ps) {
      var big = Math.max(a, b), small = Math.min(a, b), seq = [];
      for (var i = 1; i <= small; i++) seq.push(i < small ? big * i : '？');
      return a + '×' + b + ' 再算一次：' + small + ' 個 ' + big + ' 連加 → ' + seq.join('、') + '（每次加 ' + big + '）';
    }
    if (tens(a, b)) return a + '×' + b + ' 再算一次：先算 ' + ps[0][0] + '=' + ps[0][1] + '，後面再補一個 0 是多少？';
    if (ps.length === 1) return a + '×' + b + ' 再算一次：' + ps[0][0] + '，一位一位乘，記得進位';
    return a + '×' + b + ' 再算一次：' + ps.map(function (p) { return p[0] + '=' + p[1]; }).join('、') + '，加起來是多少？';
  }
  function full(a, b) {
    var ps = parts(a, b), P = a * b;
    if (!ps) { var big = Math.max(a, b), small = Math.min(a, b), seq = []; for (var i = 1; i <= small; i++) seq.push(big * i); return a + '×' + b + ' ＝ ' + seq.join('、') + '（' + small + ' 個 ' + big + '）＝ ' + P; }
    if (tens(a, b)) return a + '×' + b + ' ＝ ' + ps[0][0] + '×10 ＝ ' + ps[0][1] + '×10 ＝ ' + P;
    if (ps.length === 1) return a + '×' + b + ' ＝ ' + P;
    return a + '×' + b + ' ＝ ' + ps.map(function (p) { return p[0]; }).join(' ＋ ') + ' ＝ ' + ps.map(function (p) { return p[1]; }).join(' ＋ ') + ' ＝ ' + P;
  }

  // ---------- 直式 ----------
  // 每一列：{k:'p'|'p1'|'p2'|'sum', val, shift, label, mul?:[被乘數, 一位乘數]}；shift＝往左移幾位（十位的部分積移 1 位、個位那格空著）
  function vertical(a, b) {
    var swap = a < 10 && b >= 10, top = swap ? b : a, bot = swap ? a : b, P = a * b, rows = [];   // 照題目順序：上面寫 a、下面寫 b（4×78 才換）
    if (bot < 10) rows.push({ k: 'p', val: P, shift: 0, label: top + '×' + bot, mul: [top, bot] });
    else {
      var o = bot % 10, t = Math.floor(bot / 10) % 10, h = Math.floor(bot / 100);
      if (h) return null;   // 只支援兩位數的乘數
      if (!o) rows.push({ k: 'p', val: P, shift: 0, label: top + '×' + bot, mul: [top, t], tens: true });   // 整十：個位補 0，再算 top×t
      else rows.push({ k: 'p1', val: top * o, shift: 0, label: top + '×' + o, mul: [top, o] });
      if (o) {
        rows.push({ k: 'p2', val: top * t, shift: 1, label: top + '×' + t + '0', mul: [top, t] });
        rows.push({ k: 'sum', val: P, shift: 0, label: '加起來' });
      }
    }
    var width = Math.max(String(P).length, String(top).length, String(bot).length + 1);
    rows.forEach(function (r) { width = Math.max(width, String(r.val).length + r.shift); });
    return { top: top, bot: bot, P: P, rows: rows, width: width };
  }
  // 某一列在 width 格裡每一格該寫的數字（右對齊；shift 的格子是 ''）
  function rowDigits(val, shift, width) {
    var s = String(val), out = [];
    for (var i = 0; i < width; i++) out.push('');
    for (var j = 0; j < s.length; j++) out[width - shift - s.length + j] = s.charAt(j);
    return out;
  }
  // 乘一位數的每一位（從個位開始）：[{col:第幾位(0＝個位), d:被乘數那一位, prod, cin, sum, write, cout}]
  function colSteps(top, d) {
    var s = String(top), out = [], c = 0;
    for (var i = s.length - 1, col = 0; i >= 0; i--, col++) {
      var x = +s.charAt(i), p = x * d, sum = p + c, last = i === 0;
      out.push({ col: col, d: x, prod: p, cin: c, sum: sum, write: last ? String(sum) : String(sum % 10), cout: last ? 0 : Math.floor(sum / 10) });
      c = last ? 0 : Math.floor(sum / 10);
    }
    return out;
  }
  // 兩個數相加（直式）的每一位
  function addSteps(x, y) {
    var out = [], c = 0, col = 0;
    while (x > 0 || y > 0 || c > 0) {
      var a = x % 10, b = y % 10, sum = a + b + c;
      out.push({ col: col, a: a, b: b, cin: c, sum: sum, write: String(sum % 10), cout: Math.floor(sum / 10) });
      c = Math.floor(sum / 10); x = Math.floor(x / 10); y = Math.floor(y / 10); col++;
    }
    return out;
  }
  var PLACE = ['個位', '十位', '百位', '千位', '萬位'];
  // 直式某一列答錯：說第一個錯的位（從個位往左看）怎麼算
  // typed＝這一列每一格小孩寫的（跟 rowDigits 一樣長，左到右）；回 {ok, bad:[格子索引], text}
  function checkRow(V, ri, typed) {
    var r = V.rows[ri], want = rowDigits(r.val, r.shift, V.width), bad = [];
    for (var i = 0; i < V.width; i++) { var t = String(typed[i] == null ? '' : typed[i]).trim(), w = want[i]; if (t !== w && !(w === '' && (t === '' || t === '0' && i >= V.width - r.shift))) bad.push(i); }
    if (!bad.length) return { ok: true, bad: [], text: '' };
    var col = V.width - 1 - bad[bad.length - 1], text = '';   // 最右邊（最低位）那一格先說
    if (r.mul) {
      var cs = colSteps(r.mul[0], r.mul[1]), k = col - (r.tens ? 1 : r.shift);
      if (k < 0) text = r.tens ? '乘整十：個位先補一個 0，再算 ' + r.mul[0] + '×' + r.mul[1] : '這一列是 ' + r.label + '，' + PLACE[col] + '空著（往左移一位）';
      else if (k >= cs.length) text = r.label + '：最左邊一位多寫了，再檢查一下';
      else {
        var s = cs[k], last = k === cs.length - 1;
        text = r.mul[0] + '×' + r.mul[1] + (r.tens || r.shift ? '（從十位開始寫）' : '') + ' 的' + PLACE[k] + '：' + s.d + '×' + r.mul[1] + '=' + s.prod + (s.cin ? '，加進位 ' + s.cin + ' ＝ ' + s.sum : '') +
          (last ? '，寫 ' + s.write : '，寫 ' + s.write + (s.cout ? '，進 ' + s.cout : '（不用進位）'));
      }
    } else {
      var p = V.rows.filter(function (x) { return x.k === 'p1' || x.k === 'p2'; }), as = addSteps(p[0].val, p[1].val * 10), st = as[col];
      text = st ? '加起來的' + PLACE[col] + '：' + st.a + '＋' + st.b + (st.cin ? '＋進位 ' + st.cin : '') + ' ＝ ' + st.sum + '，寫 ' + st.write + (st.cout ? '，進 ' + st.cout : '') : '加起來：再檢查最左邊';
    }
    return { ok: false, bad: bad, text: text };
  }

  // ---------- 判讀 ----------
  function parseNum(s) {
    var v = String(s == null ? '' : s).replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); }).replace(/[,，\s]/g, '');
    return /^[0-9]{1,7}$/.test(v) ? Number(v) : null;
  }
  // 挑戰一輪的統計：secs＝每題花的秒數（小數可）、oks＝每題對錯
  function summarize(secs, oks) {
    var n = oks.length, ok = oks.filter(Boolean).length, tot = secs.reduce(function (s, x) { return s + (+x || 0); }, 0);
    return { n: n, ok: ok, acc: n ? Math.round(ok / n * 100) : 0, total: Math.round(tot * 10) / 10, avg: n ? Math.round(tot / n * 10) / 10 : 0 };
  }

  var MX = { LV: LV, LV_NAME: LV_NAME, LV_EG: LV_EG, gen: gen, round: round, valid: valid, split: split, parts: parts, hint: hint, full: full,
    vertical: vertical, rowDigits: rowDigits, colSteps: colSteps, addSteps: addSteps, checkRow: checkRow, parseNum: parseNum, summarize: summarize };
  if (typeof module !== 'undefined' && module.exports) module.exports = MX;
  G.MX = MX;
})(typeof window !== 'undefined' ? window : globalThis);
