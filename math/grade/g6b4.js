/* 六下 單元四 基準量與比較量（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6b4.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma, CN = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var D = function (n, d) { return H.toDec(H.R(n, d)); };
  var cheng = function (p) { return CN[Math.floor(p / 10)] + '成' + (p % 10 ? CN[p % 10] : ''); };   // 30 → 三成
  var zhe = function (z) { return CN[Math.floor(z / 10)] + (z % 10 ? CN[z % 10] : ''); };              // 85 → 八五（折）
  var FR = [[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [3, 8], [5, 8], [3, 10], [7, 10], [9, 10]];
  // 比率：{r:有理數, f:'pct'|'dec'|'frac'|'cheng'}
  function rate(r, forms) {
    var f = H.pick(r, forms || ['pct', 'pct', 'dec', 'frac', 'cheng']), rr;
    if (f === 'frac') rr = H.R(H.pick(r, FR));
    else if (f === 'cheng') rr = H.R(10 * H.ri(r, 1, 9), 100);
    else { var p = 5 * H.ri(r, 1, 30); if (p === 100) p = 125; rr = H.R(p, 100); }
    return { r: rr, f: f };
  }
  var pctOf = function (o) { return H.mul(o.r, 100)[0]; };
  var rt = function (o) { return o.f === 'pct' ? pctOf(o) + '%' : o.f === 'dec' ? H.toDec(o.r) + ' 倍' : o.f === 'frac' ? H.fmt(o.r) : cheng(pctOf(o)); };
  var rm = function (o) { return o.f === 'frac' ? H.fmt(o.r) : H.toDec(o.r); };          // 算式裡乘、除的那個數
  var sp = function (o) { return o.f === 'cheng' ? '' : ' '; };
  var mulOf = function (den) { return H.lcm(den, 10); };
  // 線段圖：rows＝[[左字, 長度(基準量＝1), 顏色, 右字]]
  function seg(rows, label) {
    var W = 280, x0 = 130, b = '', mx = 0;
    rows.forEach(function (r, i) {
      var y = 14 + i * 52, w = W * r[1]; if (r[1] > mx) mx = r[1];
      b += '<rect x="' + x0 + '" y="' + y + '" width="' + w + '" height="30" fill="' + r[2] + '" stroke="' + H.INK + '" stroke-width="2"/>' +
        H.txt(x0 - 8, y + 21, r[0], { a: 'end', fs: 15 }) + H.txt(x0 + w + 8, y + 21, r[3], { a: 'start', fs: 15 });
    });
    b += '<line x1="' + (x0 + W) + '" y1="6" x2="' + (x0 + W) + '" y2="' + (rows.length * 52 + 8) + '" stroke="' + H.INK + '" stroke-width="1.5" stroke-dasharray="5 4"/>';
    return H.svg(Math.ceil(x0 + W * mx + 150), rows.length * 52 + 14, b, label);
  }
  var BLUE = '#bcdcf7', ORANGE = '#ffb74d';
  // 誰是基準量：句子裡「是…的」或「比…多／少／貴」
  var WHO = [
    ['男生人數是女生人數的 ', '女生人數', '男生人數', 0],
    ['弟弟的身高是哥哥身高的 ', '哥哥身高', '弟弟的身高', 0],
    ['外套的售價是原價的 ', '原價', '外套的售價', 0],
    ['紅球的個數是全部球數的 ', '全部球數', '紅球的個數', 0],
    ['爸爸的體重是小明體重的 ', '小明體重', '爸爸的體重', 2],
    ['今天賣出的便當比昨天賣出的便當多 ', '昨天賣出的便當', '今天賣出的便當', 1],
    ['妹妹的存款比姐姐的存款少 ', '姐姐的存款', '妹妹的存款', 1],
    ['捷運票價比公車票價貴 ', '公車票價', '捷運票價', 1],
    ['今年參加的人數比去年參加的人數多 ', '去年參加的人數', '今年參加的人數', 1]
  ];
  var MORE = [
    ['去年運動會有 {B} 人參加，今年比去年{x}。今年有幾人參加？', '人', '去年', '今年'],
    ['便當店上週賣出 {B} 個便當，這週比上週{x}。這週賣出幾個？', '個', '上週', '這週'],
    ['捷運站昨天有 {B} 人進站，今天比昨天{x}。今天有幾人進站？', '人', '昨天', '今天'],
    ['哥哥這學期存了 {B} 元，姐姐存的比哥哥{x}。姐姐存了幾元？', '元', '哥哥', '姐姐']
  ];
  var LESS = [
    ['這週便當店賣出 {c} 個便當，比上週{x}。上週賣出幾個？', '個', '上週', '這週'],
    ['今年園遊會來了 {c} 人，比去年{x}。去年來了幾人？', '人', '去年', '今年'],
    ['妹妹存了 {c} 元，比姐姐{x}。姐姐存了幾元？', '元', '姐姐', '妹妹'],
    ['這個月圖書館借出 {c} 本書，比上個月{x}。上個月借出幾本？', '本', '上個月', '這個月']
  ];
  var xTxt = function (r, up, x) { return (up ? '多' : '少') + (x % 10 === 0 && r() < 0.5 ? cheng(x) : ' ' + x + '%'); };
  MG.unit({
    id: 'g6b4', pending: '待課本核對',
    cards: [
      { t: '先找基準量：「的」前面的、「比」後面的那個量，就是基準量（當作 1，也就是 100%）。',
        ex: '「男生人數是<b>女生人數</b>的 80%」→ 基準量是女生人數，男生人數是比較量。<br>「今年比<b>去年</b>多 2 成」→ 基準量是去年。',
        why: '比率一定是「拿某一個量當標準來比」，被拿來當標準的就是基準量，另一個是比較量。',
        svg: seg([['女生（基準量）', 1, BLUE, '100%'], ['男生（比較量）', 0.8, ORANGE, '80%']], '女生是基準量，男生是女生的 80%') },
      { t: '比較量＝基準量×比率。',
        ex: '300 的 40% 是多少？300 是基準量：300×0.4＝<b>120</b>。<br>480 的 [[3/4]]：480×[[3/4]]＝<b>360</b>。',
        why: '比率說的是「比較量是基準量的幾倍」，所以基準量乘比率就得到比較量。' },
      { t: '基準量＝比較量÷比率。',
        ex: '某數的 25% 是 60，某數是多少？某數是基準量：60÷0.25＝<b>240</b>。<br>驗算：240×0.25＝60 ✔',
        why: '基準量×比率＝比較量；基準量不知道，就反過來用比較量除以比率。' },
      { t: '比率＝比較量÷基準量（要百分率就再乘 100）。',
        ex: '45 是 180 的百分之幾？180 是基準量：45÷180＝0.25＝<b>25%</b>。',
        why: '把基準量當作 1，看比較量是它的幾分之幾，就是比率。' },
      { t: '「比…多幾成／少百分之幾」：先把比率算好（1＋幾成、1－百分之幾），再乘基準量。',
        ex: '去年 500 人，今年比去年多 2 成：500×(1＋0.2)＝500×1.2＝<b>600 人</b>。<br>也可以分兩步：500×0.2＝100，500＋100＝600。',
        why: '「比去年」的去年是基準量（100%），多 2 成就是 100%＋20%＝120%。',
        svg: seg([['去年（基準量）', 1, BLUE, '500 人＝100%'], ['今年', 1.2, ORANGE, '多 2 成＝120%']], '今年比去年多 2 成') }
    ],
    gens: [
      // d1 比較量＝基準量×比率
      { k: 'cmpQ', d: 1, n: 5, f: function (r) {
        var o = rate(r), m = mulOf(o.r[1]), X = m * H.ri(r, Math.max(2, Math.ceil(40 / m)), Math.floor(900 / m)), c = H.mul(X, o.r);
        var err = [[H.div(X, o.r), '比較量要用乘的：基準量×比率，不是除。']];
        if (o.f === 'pct') err.push([X * pctOf(o), '百分率要先換成小數（÷100）再乘。']);
        return H.Q(X + ' 的' + sp(o) + rt(o) + sp(o) + '是多少？',
          X + ' 是基準量，比較量＝基準量×比率：' + X + '×' + rm(o) + '＝' + H.fmt(c) + '。',
          H.num(c, { err: err }), { X: X, n: o.r[0], d: o.r[1] });
      } },
      // d1 基準量＝比較量÷比率
      { k: 'baseQ', d: 1, n: 5, f: function (r) {
        var o = rate(r), m = mulOf(o.r[1]), B = m * H.ri(r, Math.max(2, Math.ceil(40 / m)), Math.floor(900 / m)), c = H.mul(B, o.r)[0];
        var who = H.pick(r, ['某數', '一個數']);
        return H.Q(who + '的' + sp(o) + rt(o) + sp(o) + '是 ' + c + '，' + who + '是多少？',
          '「的」前面的' + who + '是基準量，基準量＝比較量÷比率：' + c + '÷' + rm(o) + '＝' + B + '。驗算：' + B + '×' + rm(o) + '＝' + c + '。',
          H.num(B, { err: [[H.mul(c, o.r), '基準量不知道，要用比較量÷比率，不是乘。']] }), { c: c, n: o.r[0], d: o.r[1] });
      } },
      // d1 比率＝比較量÷基準量
      { k: 'rateQ', d: 1, n: 5, f: function (r, _, i) {
        var B, p, t = 0;
        do { B = H.pick(r, [40, 50, 60, 80, 120, 160, 200, 240, 250, 300, 400, 500, 600, 800]); p = 5 * H.ri(r, 1, 30); } while ((p === 100 || (B * p) % 100) && ++t < 50);
        if (p === 100 || (B * p) % 100) return null;
        var c = B * p / 100;
        return H.Q(i % 2 ? B + ' 的百分之幾是 ' + c + '？' : c + ' 是 ' + B + ' 的百分之幾？',
          '「的」前面的 ' + B + ' 是基準量：比率＝比較量÷基準量＝' + c + '÷' + B + '＝' + D(c, B) + '＝' + p + '%。',
          H.num(p, { suf: '%', err: [[H.R(B * 100, c), '除反了：要用比較量÷基準量（「的」前面的 ' + B + '）。'], [H.R(c, B), '這是小數的比率，百分率要再乘 100。']] }), { c: c, B: B });
      } },
      // d1 誰是基準量／比較量
      { k: 'who', d: 1, n: 4, f: function (r) {
        var w = H.pick(r, WHO), ask = r() < 0.7 ? 'base' : 'cmp', rr;
        if (w[3] === 2) rr = H.pick(r, ['1.5 倍', '2 倍', '2.5 倍', '3 倍']);
        else if (w[3] === 1) { var x = 5 * H.ri(r, 1, 8); rr = x % 10 === 0 && r() < 0.5 ? cheng(x) : x + '%'; }
        else rr = 5 * H.ri(r, 4, 19) + '%';
        var s = w[0] + rr, ans = ask === 'base' ? w[1] : w[2], other = ask === 'base' ? w[2] : w[1];
        return H.Q('「' + s + '」這句話裡，<b>' + (ask === 'base' ? '基準量' : '比較量') + '</b>是哪一個？',
          (w[3] === 1 ? '「比」後面的「' + w[1] + '」' : '「的 ' + rr + '」前面的「' + w[1] + '」') + '是基準量（當作 1），「' + w[2] + '」是拿來和它比的比較量。',
          H.mc(ans, [other, '兩個加起來的總量', rr.replace(/ /g, ''), '兩個相差的量']), { s: s, ask: ask });
      } },
      // d2 比…多（少）幾成、百分之幾：求比較量
      { k: 'more', d: 2, n: 4, f: function (r) {
        var t = H.pick(r, MORE), B = 20 * H.ri(r, 5, 50), up = r() < 0.6, x = 5 * H.ri(r, 1, up ? 10 : 8), A = B * (100 + (up ? x : -x)) / 100, xt = xTxt(r, up, x);
        return H.Q(t[0].replace('{B}', C(B)).replace('{x}', xt),
          '「比」後面的' + t[2] + '是基準量（100%），' + t[3] + '是 100%' + (up ? '＋' : '－') + x + '%＝' + (100 + (up ? x : -x)) + '%：' + C(B) + '×' + D(100 + (up ? x : -x), 100) + '＝' + C(A) + '（' + t[1] + '）。',
          H.num(A, { suf: t[1], err: [[B * x / 100, '這只是' + (up ? '多' : '少') + '的部分，還要和' + t[2] + '的 ' + C(B) + ' ' + (up ? '相加' : '相減') + '。'], [B * (100 + (up ? -x : x)) / 100, '方向弄反了：題目說「' + (up ? '多' : '少') + '」。']] }),
          { B: B, x: x, up: up });
      } },
      // d2 班上人數比例
      { k: 'cls', d: 2, n: 4, f: function (r, _, i) {
        var T, rr, t = 0, frac = r() < 0.4;
        do { T = H.pick(r, [20, 24, 25, 28, 30, 32, 35, 36, 40]); rr = frac ? H.R(H.pick(r, FR)) : H.R(5 * H.ri(r, 4, 16), 100); } while ((T * rr[0]) % rr[1] && ++t < 80);
        if ((T * rr[0]) % rr[1]) return null;
        var part = T * rr[0] / rr[1], show = frac ? H.fmt(rr) : rr[0] * 100 / rr[1] + '%', g = H.pick(r, [['女生', '男生'], ['戴眼鏡的', '沒戴眼鏡的'], ['走路上學的', '不是走路上學的']]);
        if (i % 2 === 0) {
          return H.Q('全班有 ' + T + ' 人，' + g[0] + '占全班的 ' + show + '。' + g[1] + '有幾人？',
            '全班是基準量：' + g[0] + '＝' + T + '×' + (frac ? show : D(rr[0] * 100 / rr[1], 100)) + '＝' + part + '（人），' + g[1] + '＝' + T + '－' + part + '＝' + (T - part) + '（人）。',
            H.num(T - part, { suf: '人', err: [[part, '這是' + g[0] + '的人數，題目問的是' + g[1] + '。']] }), { kind: 0, T: T, n: rr[0], d: rr[1] });
        }
        return H.Q('班上' + g[0] + '有 ' + part + ' 人，占全班的 ' + show + '。全班有幾人？',
          '「全班」是基準量，基準量＝比較量÷比率：' + part + '÷' + (frac ? show : D(rr[0] * 100 / rr[1], 100)) + '＝' + T + '（人）。',
          H.num(T, { suf: '人', err: [[H.mul(part, rr), '全班是基準量，要用除的。']] }), { kind: 1, c: part, n: rr[0], d: rr[1] });
      } },
      // d2 存錢：已知比較量和比率，求基準量
      { k: 'save', d: 2, n: 4, f: function (r) {
        var o = rate(r, ['pct', 'dec', 'frac']), m = mulOf(o.r[1]), B = m * H.ri(r, Math.max(2, Math.ceil(100 / m)), Math.floor(1500 / m)), c = H.mul(B, o.r)[0];
        if (!c) return null;
        var p = H.pick(r, [['小明', '姐姐'], ['妹妹', '哥哥'], ['弟弟', '表姐'], ['阿哲', '小明']]);
        return H.Q(p[0] + '的撲滿裡存了 ' + C(c) + ' 元，是' + p[1] + '存款的 ' + rt(o) + '。' + p[1] + '存了幾元？',
          '「的」前面的「' + p[1] + '存款」是基準量：' + C(c) + '÷' + rm(o) + '＝' + C(B) + '（元）。驗算：' + C(B) + '×' + rm(o) + '＝' + C(c) + '。',
          H.num(B, { suf: '元', err: [[H.mul(c, o.r), p[1] + '是基準量，不知道要用除的，不是乘。']] }), { c: c, n: o.r[0], d: o.r[1] });
      } },
      // d2 列出全部：哪些說法對
      { k: 'trueSet', d: 2, n: 4, f: function (r) {
        var B = H.pick(r, [120, 160, 200, 240, 300, 400, 500, 600, 800]), ps = H.shuffle([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 75, 80, 90], r).slice(0, 5);
        var nOk = H.ri(r, 2, 4), opts = ps.map(function (p, j) {
          var c = B * p / 100;
          if (j < nOk) return { p: p, c: c };
          var w = H.pick(r, [c + B / 20, c - B / 20, c + B / 10, B * p / 10, c * 2]);
          if (w <= 0 || w === c) w = c + B / 20;
          return { p: p, c: w };
        }).filter(function (o) { return Math.floor(o.c) === o.c; });
        if (opts.length < 5) return null;
        return H.Q('關於 ' + B + '，下面哪些說法是對的？<b>全部選出來。</b>',
          B + ' 是基準量，比較量＝' + B + '×比率：' + opts.map(function (o) { return B + '×' + D(o.p, 100) + '＝' + B * o.p / 100; }).join('；') + '。',
          H.set(H.shuffle(opts, r), function (o) { return o.c * 100 === B * o.p; }, function (o) { return B + ' 的 ' + o.p + '% 是 ' + o.c; }), { B: B });
      } },
      // d3 已知比較量和「比…多／少」，求基準量
      { k: 'less', d: 3, n: 4, f: function (r) {
        var t = H.pick(r, LESS), B = 20 * H.ri(r, 10, 60), up = r() < 0.5, x = 5 * H.ri(r, 1, up ? 10 : 8), k = 100 + (up ? x : -x), c = B * k / 100;
        return H.Q(t[0].replace('{c}', C(c)).replace('{x}', xTxt(r, up, x)),
          '「比」後面的' + t[2] + '是基準量（100%），' + t[3] + '是 ' + k + '%＝' + D(k, 100) + '。基準量＝比較量÷比率：' + C(c) + '÷' + D(k, 100) + '＝' + C(B) + '（' + t[1] + '）。',
          H.num(B, { suf: t[1], err: [[H.R(c * k, 100), '基準量（' + t[2] + '）不知道，要用除的，不是乘。'], [H.R(c * (200 - k), 100), '不能拿' + t[3] + '當 100% 去加減，要以「比」後面的' + t[2] + '當基準量。']] }),
          { c: c, x: x, up: up });
      } },
      // d3 A 比 B 多（少）百分之幾
      { k: 'diffPct', d: 3, n: 3, f: function (r) {
        var P = H.pick(r, [['小明', '阿哲', '張卡片'], ['姐姐', '妹妹', '元'], ['哥哥', '弟弟', '顆彈珠'], ['甲班', '乙班', '個回收的寶特瓶']]), up = r() < 0.5, Bv, p, t = 0;
        do { Bv = H.pick(r, [40, 50, 80, 120, 160, 200, 250, 300, 400, 500]); p = 5 * H.ri(r, 1, up ? 20 : 16); } while ((Bv * p) % 100 && ++t < 50);
        if ((Bv * p) % 100) return null;
        var dd = Bv * p / 100, x1 = up ? Bv + dd : Bv, x2 = up ? Bv : Bv - dd, base = up ? P[1] : P[0], other = up ? x1 : x2;
        return H.Q(P[0] + '有 ' + x1 + ' ' + P[2] + '，' + P[1] + '有 ' + x2 + ' ' + P[2] + '。' + (up ? P[0] + '比' + P[1] + '多' : P[1] + '比' + P[0] + '少') + '百分之幾？',
          '「比」後面的' + base + '是基準量（' + Bv + '）。相差 ' + dd + '，' + dd + '÷' + Bv + '＝' + D(dd, Bv) + '＝' + p + '%。',
          H.num(p, { suf: '%', err: [[H.R(dd * 100, other), '要除以「比」後面的' + base + '（' + Bv + '），不是另一個。'], [dd, '這是相差的數量，還要除以基準量再乘 100。']] }),
          { x1: x1, x2: x2, up: up });
      } },
      // d3 兩步驟：加價再打折／存錢連比
      { k: 'chain', d: 3, n: 3, f: function (r, _, i) {
        var t = 0, X, p, z, q;
        if (i % 2 === 0) {
          do { X = 100 * H.ri(r, 2, 12); p = H.ri(r, 2, 5); z = H.pick(r, [95, 90, 85, 80, 75, 70]); } while ((X * (10 + p) * z) % 1000 && ++t < 50);
          if ((X * (10 + p) * z) % 1000) return null;
          var list = X * (10 + p) / 10, sale = list * z / 100, it = H.pick(r, ['個書包', '雙球鞋', '件外套', '盒桌遊', '台電風扇']);
          return H.Q('老闆用 ' + C(X) + ' 元買進一' + it + '，加價' + cheng(p * 10) + '當作定價；週年慶時再打' + zhe(z) + '折賣出。售價是幾元？',
            '先以進價為基準量：定價＝' + C(X) + '×' + D(10 + p, 10) + '＝' + C(list) + '；再以定價為基準量：售價＝' + C(list) + '×' + D(z, 100) + '＝' + C(sale) + '（元）。',
            H.num(sale, { suf: '元', err: [[list, '這是定價，還要再打' + zhe(z) + '折。'], [H.R(X * (100 + p * 10 - (100 - z)), 100), '兩次的基準量不一樣，不能直接把成數加減，要一步一步乘。']] }),
            { kind: 0, X: X, p: p, z: z });
        }
        do { X = 20 * H.ri(r, 10, 50); p = 5 * H.ri(r, 1, 10); q = 5 * H.ri(r, 10, 18); } while ((X * (100 + p) * q) % 10000 && ++t < 80);
        if ((X * (100 + p) * q) % 10000) return null;
        var s2 = X * (100 + p) / 100, s3 = s2 * q / 100;
        return H.Q('哥哥存了 ' + C(X) + ' 元，姐姐存的比哥哥多 ' + p + '%，妹妹存的是姐姐的 ' + q + '%。妹妹存了幾元？',
          '先以哥哥為基準量：姐姐＝' + C(X) + '×' + D(100 + p, 100) + '＝' + C(s2) + '；再以姐姐為基準量：妹妹＝' + C(s2) + '×' + D(q, 100) + '＝' + C(s3) + '（元）。',
          H.num(s3, { suf: '元', err: [[s2, '這是姐姐存的錢，還要再算妹妹的。'], [H.R(X * q, 100), '妹妹是和姐姐比，不是和哥哥比：要先算出姐姐存的錢。']] }),
          { kind: 1, X: X, p: p, q: q });
      } },
      // d3 選算式：已知比較量和「比…多／少」，哪個算式算得出基準量
      { k: 'formula', d: 3, n: 4, f: function (r) {
        var t = H.pick(r, LESS), B = 20 * H.ri(r, 10, 60), up = r() < 0.5, x = 5 * H.ri(r, 1, up ? 10 : 8), c = B * (100 + (up ? x : -x)) / 100, xd = D(x, 100), sg = up ? '＋' : '－', og = up ? '－' : '＋';
        var show = function (o) { return C(c) + o.op + '(1' + o.sg + xd + ')'; };
        return H.Q(t[0].replace('{c}', C(c)).replace('{x}', xTxt(r, up, x)) + '下面哪一個算式算得出答案？',
          '「比」後面的' + t[2] + '是基準量（當作 1），' + t[3] + '是 1' + sg + xd + '。基準量＝比較量÷比率，所以是 ' + C(c) + '÷(1' + sg + xd + ')＝' + C(B) + '。',
          H.mc({ op: '÷', sg: sg }, [{ op: '×', sg: sg }, { op: '÷', sg: og }, { op: '×', sg: og }], show), { c: c, x: x, up: up });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
