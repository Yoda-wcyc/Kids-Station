/* 六上 單元三 數量關係（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a3.js。 */
(function (MG) {
  'use strict';
  var H = MG.H;
  // 關係：op ＋ － × ÷，c 是固定的數；□ 給了求 △
  var REL = {
    '+': { s: '□＋△＝', y: function (x, c) { return c - x; }, x: function (y, c) { return c - y; }, name: '和不變' },
    '-': { s: '□－△＝', y: function (x, c) { return x - c; }, x: function (y, c) { return y + c; }, name: '差不變' },
    '*': { s: '□×△＝', y: function (x, c) { return c / x; }, x: function (y, c) { return c / y; }, name: '積不變' },
    '/': { s: '□÷△＝', y: function (x, c) { return x / c; }, x: function (y, c) { return y * c; }, name: '商不變' }
  };
  var relStr = function (o) { return REL[o.op].s + o.c; };
  // 依關係做 3 組 (□,△)，□ 由小到大、不重複
  function pairs(r, op) {
    var c, xs = [];
    if (op === '+') { c = H.ri(r, 12, 40); xs = H.shuffle(range(1, c - 1), r).slice(0, 3); }
    else if (op === '-') { c = H.ri(r, 2, 15); xs = H.shuffle(range(c + 1, c + 30), r).slice(0, 3); }
    else if (op === '*') { c = H.pick(r, [12, 18, 20, 24, 30, 36, 40, 48, 60]); xs = H.shuffle(range(1, c).filter(function (x) { return c % x === 0; }), r).slice(0, 3); }
    else { c = H.ri(r, 2, 9); xs = H.shuffle(range(2, 12), r).slice(0, 3).map(function (y) { return y * c; }); }
    xs.sort(function (a, b) { return a - b; });
    return { op: op, c: c, ps: xs.map(function (x) { return [x, REL[op].y(x, c)]; }) };
  }
  function range(a, b) { var o = []; for (var i = a; i <= b; i++) o.push(i); return o; }
  var table = function (ps) { return '<br>□：' + ps.map(function (p) { return p[0]; }).join('、') + '<br>△：' + ps.map(function (p) { return p[1]; }).join('、'); };
  // 堆疊：first＝第 1 個，inc＝每多 1 個多幾
  var STACK = [
    { a: '一張正方形桌子四邊各坐 1 人。把桌子排成一排（桌子邊靠邊），', u: '張桌子', ask: '可以坐幾人', s: '人', first: 4, inc: 2,
      why: '1 張坐 4 人，每多接 1 張，中間靠在一起的兩邊不能坐，只多 2 人。' },
    { a: '一張長方形桌子長邊各坐 2 人、短邊各坐 1 人。把桌子的短邊接短邊排成一長排，', u: '張桌子', ask: '可以坐幾人', s: '人', first: 6, inc: 4,
      why: '1 張坐 6 人，每多接 1 張，兩個短邊靠在一起不能坐，只多長邊的 4 人。' },
    { a: '用火柴棒排正方形，一個接一個排成一排（相鄰的正方形共用一根），', u: '個正方形', ask: '要用幾根火柴棒', s: '根', first: 4, inc: 3,
      why: '第 1 個正方形用 4 根，之後每多 1 個正方形，共用 1 根，只多 3 根。' },
    { a: '用火柴棒排三角形，一個接一個排成一排（相鄰的三角形共用一根），', u: '個三角形', ask: '要用幾根火柴棒', s: '根', first: 3, inc: 2,
      why: '第 1 個三角形用 3 根，之後每多 1 個三角形，共用 1 根，只多 2 根。' }
  ];
  function cups(r) {
    var h = H.pick(r, [8, 10, 12, 15]), k = H.pick(r, [1, 2, 3]);
    return { a: '一個紙杯高 ' + h + ' 公分，杯子一個疊進一個，每多疊 1 個，高度就多 ' + k + ' 公分。', u: '個杯子', ask: '疊起來高幾公分', s: '公分', first: h, inc: k,
      why: '第 1 個杯子是 ' + h + ' 公分，後面每多 1 個只多 ' + k + ' 公分（杯子套在裡面）。' };
  }
  function stackT(r) { return r() < 0.2 ? cups(r) : H.pick(r, STACK); }
  // 堆疊的 SVG：火柴棒正方形一排
  function sticks(n) {
    var b = '', x0 = 20, y0 = 20, s = 50, L = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#c0392b" stroke-width="5" stroke-linecap="round"/>'; };
    for (var i = 0; i <= n; i++) b += L(x0 + i * s, y0, x0 + i * s, y0 + s);
    for (var j = 0; j < n; j++) b += L(x0 + j * s + 4, y0, x0 + j * s + s - 4, y0) + L(x0 + j * s + 4, y0 + s, x0 + j * s + s - 4, y0 + s);
    return H.svg(x0 * 2 + n * s, y0 + s + 34, b + H.txt(x0 + n * s / 2, y0 + s + 26, n + ' 個正方形：4＋3×' + (n - 1) + '＝' + (3 * n + 1) + ' 根'), '火柴棒排正方形');
  }

  MG.unit({
    id: 'g6a3', pending: '待課本核對',
    cards: [
      { t: '和不變：兩個數加起來一直一樣多，一個多 1，另一個就少 1。',
        ex: '姐姐和妹妹一共有 20 張貼紙：姐姐 12 張 → 妹妹 20－12＝<b>8 張</b>。<br>寫成關係式：□＋△＝20。',
        why: '總數不變，一邊拿走多少，另一邊就少多少。' },
      { t: '差不變：兩個數一起增加或一起減少，差一直一樣。年齡差就是這樣。',
        ex: '哥哥比小明大 3 歲：小明 10 歲時，哥哥 10＋3＝<b>13 歲</b>；小明 25 歲時，哥哥 28 歲。<br>關係式：□－△＝3（□ 是哥哥，△ 是小明）。',
        why: '每過一年兩個人都長 1 歲，所以相差的歲數永遠不變。' },
      { t: '商不變：一個數一直是另一個數的幾倍。積不變：兩個數相乘一直一樣。',
        ex: '一包 6 張色紙：□÷△＝6（□ 張數、△ 包數），4 包就是 <b>24 張</b>。<br>長方形面積固定 24 平方公分：長×寬＝24，長 8 公分 → 寬 24÷8＝<b>3 公分</b>。',
        why: '積不變時，一個數變成 2 倍，另一個數就要變成一半，乘起來才會一樣。' },
      { t: '找關係：先把幾組數字列成表，看看是加、減、乘、除哪一個一直不變。',
        ex: '□：2、5、8；△：18、15、12 → 每一組加起來都是 20 → <b>□＋△＝20</b>。',
        why: '用一組數字湊出來的式子不一定對，要每一組都符合才是它們的關係。' },
      { t: '堆疊問題：先看第 1 個要幾個，再看每多 1 個多幾個。第 n 個＝第 1 個＋每次多的×(n－1)。',
        ex: '火柴棒排正方形：第 1 個 4 根，之後每個多 3 根。<br>排 10 個：4＋3×9＝<b>31 根</b>（也可以想成 1＋3×10＝31）。',
        why: '相鄰的正方形共用一根火柴棒，所以不是 4×10＝40 根。', svg: sticks(4) }
    ],
    gens: [
      // d1 和不變
      { k: 'sum', d: 1, n: 4, f: function (r, _, i) {
        var S = H.ri(r, 15, 60), a = H.ri(r, 3, S - 3), T = [
          ['姐姐和妹妹一共有 {S} 張貼紙。姐姐有 {a} 張時，妹妹有幾張？', '張'],
          ['一條 {S} 公分長的緞帶剪成兩段，一段長 {a} 公分，另一段長幾公分？', '公分'],
          ['□＋△＝{S}。當 □＝{a} 時，△＝？', '']][i % 3];
        return H.Q(T[0].replace('{S}', S).replace('{a}', a), '兩個數的和固定是 ' + S + '，另一個數＝' + S + '－' + a + '＝' + (S - a) + '。',
          H.num(S - a, { suf: T[1], err: [[S + a, '和不變：另一個要用減的。']] }), { op: '+', c: S, x: a });
      } },
      // d1 差不變（年齡）
      { k: 'diff', d: 1, n: 5, f: function (r, _, i) {
        var d = H.ri(r, 2, 12), m = H.ri(r, 3, 40), mode = i % 3;
        if (mode === 0) return H.Q('哥哥比小明大 ' + d + ' 歲。小明 ' + m + ' 歲的時候，哥哥幾歲？', '兩人的年齡差一直是 ' + d + ' 歲：' + m + '＋' + d + '＝' + (m + d) + '（歲）。',
          H.num(m + d, { suf: '歲', err: [[m - d, '哥哥比較大，要用加的。']] }), { op: '-', c: d, y: m });
        if (mode === 1) return H.Q('姐姐比阿哲大 ' + d + ' 歲。姐姐 ' + (m + d) + ' 歲的時候，阿哲幾歲？', '年齡差一直是 ' + d + ' 歲：' + (m + d) + '－' + d + '＝' + m + '（歲）。',
          H.num(m, { suf: '歲', err: [[m + 2 * d, '阿哲比較小，要用減的。']] }), { op: '-', c: d, x: m + d });
        return H.Q('□－△＝' + d + '。當 △＝' + m + ' 時，□＝？', '□ 比 △ 多 ' + d + '：' + m + '＋' + d + '＝' + (m + d) + '。',
          H.num(m + d, { err: [[m - d, '□－△＝' + d + '，□ 比 △ 大，要用加的。']] }), { op: '-', c: d, y: m });
      } },
      // d1 商不變
      { k: 'quot', d: 1, n: 4, f: function (r, _, i) {
        var k = H.ri(r, 3, 12), n = H.ri(r, 2, 15);
        if (i % 2) return H.Q('一包色紙有 ' + k + ' 張，□ 表示張數、△ 表示包數，□÷△＝' + k + '。有 ' + k * n + ' 張色紙，是幾包？', '△＝□÷' + k + '＝' + k * n + '÷' + k + '＝' + n + '（包）。',
          H.num(n, { suf: '包', err: [[k * n * k, '已知張數求包數要用除的。']] }), { op: '/', c: k, x: k * n });
        return H.Q('□÷△＝' + k + '。當 △＝' + n + ' 時，□＝？', '□ 是 △ 的 ' + k + ' 倍：' + n + '×' + k + '＝' + n * k + '。',
          H.num(n * k, { err: [[n + k, '□÷△＝' + k + ' 表示 □ 是 △ 的 ' + k + ' 倍，要用乘的。']] }), { op: '/', c: k, y: n });
      } },
      // d1 積不變
      { k: 'prod', d: 1, n: 4, f: function (r, _, i) {
        var A = H.pick(r, [12, 16, 18, 20, 24, 30, 36, 40, 42, 48, 54, 60, 72, 80, 84, 90, 96]), ds = range(2, A - 1).filter(function (x) { return A % x === 0; }), a = H.pick(r, ds);
        if (a * a === A) return null;
        if (i % 2) return H.Q('□×△＝' + A + '。當 □＝' + a + ' 時，△＝？', '△＝' + A + '÷' + a + '＝' + A / a + '。',
          H.num(A / a, { err: [[A - a, '積不變要用除的，不是減。']] }), { op: '*', c: A, x: a });
        return H.Q('一個長方形的面積固定是 ' + A + ' 平方公分。長是 ' + a + ' 公分時，寬是幾公分？', '長×寬＝' + A + '，寬＝' + A + '÷' + a + '＝' + A / a + '（公分）。',
          H.num(A / a, { suf: '公分', err: [[A - a, '面積是長×寬，求寬要用除的。']] }), { op: '*', c: A, x: a });
      } },
      // d2 看表找關係式（選擇）
      { k: 'rel', d: 2, n: 5, f: function (r) {
        var o = pairs(r, H.pick(r, ['+', '-', '*', '/'])), p = o.ps[0], w = [];
        if (o.op !== '+') w.push({ op: '+', c: p[0] + p[1] });
        if (o.op !== '-' && p[0] > p[1]) w.push({ op: '-', c: p[0] - p[1] });
        if (o.op !== '*') w.push({ op: '*', c: p[0] * p[1] });
        if (o.op !== '/' && p[0] % p[1] === 0) w.push({ op: '/', c: p[0] / p[1] });
        w.push({ op: o.op, c: o.c + 1 }, { op: o.op, c: o.c + 10 });
        return H.Q('下表中 □ 和 △ 的關係，用哪一個式子表示才對？' + table(o.ps),
          '每一組都要符合才對：' + o.ps.map(function (q) { return q[0] + {'+': '＋', '-': '－', '*': '×', '/': '÷'}[o.op] + q[1] + '＝' + o.c; }).join('，') + '，都一樣，所以是 ' + relStr(o) + '（' + REL[o.op].name + '）。',
          H.mc({ op: o.op, c: o.c }, w, relStr), { ps: o.ps });
      } },
      // d2 看表填數
      { k: 'fill', d: 2, n: 4, f: function (r) {
        var o = pairs(r, H.pick(r, ['+', '-', '*', '/'])), x;
        if (o.op === '+') x = H.ri(r, 1, o.c - 1); else if (o.op === '-') x = H.ri(r, o.c + 1, o.c + 50);
        else if (o.op === '*') x = H.pick(r, range(1, o.c).filter(function (t) { return o.c % t === 0; })); else x = H.ri(r, 2, 15) * o.c;
        if (o.ps.some(function (p) { return p[0] === x; })) return null;
        var y = REL[o.op].y(x, o.c);
        return H.Q('□ 和 △ 的關係如下表。當 □＝' + x + ' 時，△ 是多少？' + table(o.ps),
          '先找關係：每一組都是 ' + relStr(o) + '（' + REL[o.op].name + '）。所以 □＝' + x + ' 時，△＝' + y + '。',
          H.num(y), { ps: o.ps, x: x });
      } },
      // d2 年齡（過去或未來）
      { k: 'age', d: 2, n: 4, f: function (r, _, i) {
        var m = H.ri(r, 8, 12), M = m + H.ri(r, 24, 36), x = i % 2 ? H.ri(r, 1, m - 1) : H.ri(r, m + 3, 30);
        return H.Q('今年媽媽 ' + M + ' 歲，小明 ' + m + ' 歲。小明 ' + x + ' 歲' + (x < m ? '那一年' : '的時候') + '，媽媽幾歲？',
          '兩人的年齡差一直是 ' + M + '－' + m + '＝' + (M - m) + ' 歲，所以媽媽是 ' + x + '＋' + (M - m) + '＝' + (x + M - m) + '（歲）。',
          H.num(x + M - m, { suf: '歲', err: [[x + M, '要先算出年齡差 ' + (M - m) + ' 歲，再加上 ' + x + '。']] }), { M: M, m: m, x: x });
      } },
      // d2 面積固定的長方形（列舉）
      { k: 'rect', d: 2, n: 4, f: function (r) {
        var A = H.pick(r, [24, 36, 40, 48, 60, 72]), good = [], bad = [];
        for (var l = 2; l < A; l++) for (var w = 1; w < l; w++) { if (l * w === A) good.push({ l: l, w: w }); else if (Math.abs(l * w - A) <= 4 || l + w === A / 2) bad.push({ l: l, w: w }); }
        var g = H.shuffle(good, r).slice(0, H.ri(r, 2, 3)), c = H.shuffle(g.concat(H.shuffle(bad, r).slice(0, 5 - g.length)), r);
        var show = function (o) { return '長 ' + o.l + '／寬 ' + o.w; };
        return H.Q('一個長方形的面積是 ' + A + ' 平方公分，下面哪些可能是它的長和寬（公分）？<b>全部選出來。</b>',
          '長×寬要等於 ' + A + '：' + c.map(function (o) { return o.l + '×' + o.w + '＝' + o.l * o.w; }).join('；') + '。',
          H.set(c, function (o) { return o.l * o.w === A; }, show), { A: A, cand: c });
      } },
      // d3 堆疊：第 n 個要幾個
      { k: 'stack', d: 3, n: 5, f: function (r) {
        var T = stackT(r), n = H.ri(r, 6, 30), v = T.first + T.inc * (n - 1);
        return H.Q(T.a + '排 ' + n + ' ' + T.u + '，' + T.ask + '？',
          T.why + '所以 ' + n + ' ' + T.u + '：' + T.first + '＋' + T.inc + '×' + (n - 1) + '＝' + v + '（' + T.s + '）。',
          H.num(v, { suf: T.s, err: [[T.first * n, '相鄰的會共用（或重疊），不是每一個都要 ' + T.first + '。'], [T.first + T.inc * n, '第 1 個已經算了，後面只多 ' + (n - 1) + ' 個，不是 ' + n + ' 個。']] }),
          { first: T.first, inc: T.inc, n: n });
      } },
      // d3 堆疊反過來：已知總數求第幾個
      { k: 'stackr', d: 3, n: 4, f: function (r) {
        var T = stackT(r), n = H.ri(r, 6, 30), v = T.first + T.inc * (n - 1), q = { '可以坐幾人': '可以坐 ' + v + ' 人', '要用幾根火柴棒': '一共用了 ' + v + ' 根火柴棒', '疊起來高幾公分': '疊起來高 ' + v + ' 公分' }[T.ask];
        return H.Q(T.a + q + '，' + (T.ask === '疊起來高幾公分' ? '一共疊了幾個杯子' : '排了幾' + T.u) + '？',
          T.why + '先扣掉第 1 個的 ' + T.first + '：' + v + '－' + T.first + '＝' + (v - T.first) + '，再看有幾個 ' + T.inc + '：' + (v - T.first) + '÷' + T.inc + '＝' + (n - 1) + '，加上第 1 個，共 ' + n + ' ' + T.u.charAt(0) + '。',
          H.num(n, { suf: T.u.charAt(0), err: [[n - 1, '別忘了加上第 1 個。']] }), { first: T.first, inc: T.inc, v: v });
      } },
      // d3 年齡：和或倍數
      { k: 'age2', d: 3, n: 4, f: function (r, _, i) {
        if (i % 2 === 0) {
          var b = H.ri(r, 5, 12), a = b + H.ri(r, 2, 6), t = H.ri(r, 2, 12), S = a + b + 2 * t;
          return H.Q('今年哥哥 ' + a + ' 歲、弟弟 ' + b + ' 歲。再過幾年，兩人的年齡加起來是 ' + S + ' 歲？',
            '今年兩人合起來 ' + (a + b) + ' 歲，每過 1 年兩人一共多 2 歲。還差 ' + S + '－' + (a + b) + '＝' + (S - a - b) + ' 歲，' + (S - a - b) + '÷2＝' + t + '（年）。',
            H.num(t, { suf: '年', err: [[S - a - b, '每過 1 年，兩個人「各」長 1 歲，合起來多 2 歲，要再除以 2。']] }), { a: a, b: b, S: S, mode: 'sum' });
        }
        var m = H.ri(r, 5, 12), D = m + H.ri(r, 3, 20), F = m + D;
        // 爸爸是小明 2 倍時：小明的年齡＝年齡差 D
        return H.Q('今年爸爸 ' + F + ' 歲，小明 ' + m + ' 歲。再過幾年，爸爸的年齡會剛好是小明的 2 倍？',
          '年齡差一直是 ' + F + '－' + m + '＝' + D + ' 歲。爸爸是小明的 2 倍時，差就等於小明的年齡，所以那時小明 ' + D + ' 歲：' + D + '－' + m + '＝' + (D - m) + '（年後）。',
          H.num(D - m, { suf: '年', err: [[D, '這是那時候小明的年齡，題目問再過幾年。']] }), { F: F, m: m, mode: 'twice' });
      } },
      // d1 哪一組數符合關係式（選擇）
      { k: 'pick', d: 1, n: 4, f: function (r) {
        var o = pairs(r, H.pick(r, ['+', '-', '*', '/'])), p = o.ps[1], x = p[0], y = p[1];
        var fit = function (q) { return REL[o.op].y(q.x, o.c) === q.y; };
        var w = [{ x: x, y: y + 1 }, { x: x, y: y - 1 }, { x: x + 1, y: y }, { x: y, y: x }, { x: x, y: x + o.c }, { x: x, y: Math.abs(x - o.c) }, { x: x, y: x * o.c }]
          .filter(function (q) { return q.y >= 0 && !fit(q); });
        var show = function (q) { return '□＝' + q.x + '、△＝' + q.y; };
        return H.Q('□ 和 △ 的關係是 ' + relStr(o) + '。下面哪一組 □、△ 符合這個關係？',
          '把數字放進式子裡算算看：' + show({ x: x, y: y }) + ' 時，' + x + { '+': '＋', '-': '－', '*': '×', '/': '÷' }[o.op] + y + '＝' + o.c + '，剛好符合。',
          H.mc({ x: x, y: y }, w, show), { op: o.op, c: o.c });
      } },
      // d3 堆疊：哪些數可能是答案（列舉）
      { k: 'stackset', d: 3, n: 4, f: function (r) {
        var T = H.pick(r, STACK), ns = H.shuffle(range(3, 25), r).slice(0, H.ri(r, 2, 3)), good = ns.map(function (n) { return T.first + T.inc * (n - 1); }), bad = [];
        for (var t = 0; t < 40 && bad.length < 6 - good.length; t++) {
          var v = T.first + T.inc * H.ri(r, 2, 24) + H.ri(r, 1, T.inc - 1);
          if (bad.indexOf(v) < 0) bad.push(v);
        }
        var c = good.concat(bad).sort(function (a, b) { return a - b; });
        if (c.some(function (x, j) { return j && c[j - 1] === x; })) return null;
        return H.Q(T.a + '排了好幾' + T.u.charAt(0) + '以後，' + { '人': '可以坐的人數', '根': '用掉的火柴棒根數' }[T.s] + '可能是下面哪些數？<b>全部選出來。</b>',
          T.why + '所以答案一定是「' + T.first + '＋' + T.inc + '×幾」：' + c.map(function (x) { return x + ((x - T.first) % T.inc ? ' 不行' : '＝' + T.first + '＋' + T.inc + '×' + (x - T.first) / T.inc); }).join('；') + '。',
          H.set(c, function (x) { return (x - T.first) % T.inc === 0; }), { first: T.first, inc: T.inc, cand: c });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
