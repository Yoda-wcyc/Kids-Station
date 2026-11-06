/* 五下 單元八 比率與百分率（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b8.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma, CN = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var D = function (n, d) { return H.toDec(H.R(n, d)); };                                            // 有限小數字串
  var zhe = function (p) { return CN[Math.floor(p / 10)] + (p % 10 ? CN[p % 10] : ''); };            // 75 → 七五（折）
  var cheng = function (p) { return CN[Math.floor(p / 10)] + '成' + (p % 10 ? CN[p % 10] : ''); };    // 35 → 三成五
  var ZHE = [95, 90, 85, 80, 75, 70, 65, 60, 50];
  var ITEMS = [['故事書', 10, 25], ['水壺', 15, 30], ['書包', 30, 60], ['球鞋', 60, 110], ['外套', 40, 90], ['桌遊', 20, 50]];
  // 選項值：{f:'dec',s} {f:'pct',p} {f:'frac',n,d} {f:'cheng',s}
  var show = function (o) { return o.f === 'dec' ? o.s : o.f === 'pct' ? o.p + '%' : o.f === 'frac' ? H.fr(o.n, o.d) : o.s; };
  function asObj(k, f) {
    var q = H.R(k, 100);
    if (f === 'frac' && q[1] > 25) f = 'dec';
    if (f === 'cheng' && k % 5) f = 'pct';
    return f === 'dec' ? { f: 'dec', s: D(k, 100) } : f === 'pct' ? { f: 'pct', p: k } : f === 'frac' ? { f: 'frac', n: q[0], d: q[1] } : { f: 'cheng', s: cheng(k) };
  }
  function grid(p) {
    var b = '';
    for (var i = 0; i < 100; i++) b += '<rect x="' + (10 + (i % 10) * 22) + '" y="' + (10 + Math.floor(i / 10) * 22) + '" width="20" height="20" fill="' + (i < p ? '#ffb74d' : '#eef6ff') + '" stroke="' + H.INK + '" stroke-width="1"/>';
    return H.svg(240, 262, b + H.txt(120, 252, '100 格塗了 ' + p + ' 格＝' + p + '%'), '100 格塗了 ' + p + ' 格');
  }
  function bar(p) {
    var b = '';
    for (var i = 0; i < 10; i++) b += '<rect x="' + (20 + i * 50) + '" y="34" width="48" height="40" fill="' + (i < p / 10 ? '#ffb74d' : '#eef6ff') + '" stroke="' + H.INK + '" stroke-width="2"/>';
    return H.svg(540, 110, H.txt(270, 24, '原價分成 10 份') + b + H.txt(270, 100, '打' + zhe(p) + '折＝付其中 ' + p / 10 + ' 份＝原價×' + D(p, 100)), '打折長條圖');
  }
  var RATE = [
    { all: '全班', u: '人', who: '戴眼鏡的人', T: [20, 25] },
    { all: '一盒彩色筆', u: '枝', part: '是紅色系的', who: '紅色系的筆', T: [10, 20, 40] },
    { all: '一袋彈珠', u: '顆', part: '是藍色的', who: '藍色彈珠', T: [20, 40, 50] },
    { all: '籃球隊', u: '人', part: '是五年級', who: '五年級的人', T: [10, 20] },
    { all: '花圃裡的花', u: '朵', part: '是黃色的', who: '黃色的花', T: [8, 20, 40, 50] },
    { all: '書架上的書', u: '本', part: '是故事書', who: '故事書', T: [25, 40, 50] }
  ];
  MG.unit({
    id: 'g5b8', pending: '待課本核對',
    cards: [
      { t: '比率＝部分量÷全部量，可以用分數或小數表示。',
        ex: '全班 25 人，有 10 人戴眼鏡：10÷25＝[[10/25]]＝[[2/5]]＝<b>0.4</b>。戴眼鏡的人占全班的比率是 0.4。',
        why: '比率在說「部分占全部的多少」：把全部當作 1，部分是全部的幾分之幾。' },
      { t: '百分率：把全部當作 100 份，部分占幾份就是百分之幾，寫成 %。',
        ex: '100 格塗了 35 格 → [[35/100]]＝0.35＝<b>35%</b>（讀作「百分之三十五」）。',
        why: '1%＝[[1/100]]＝0.01。大家都換成「100 份裡的幾份」，比大小就很方便。', svg: grid(35) },
      { t: '互換：小數×100 → 百分率；百分率÷100 → 小數；分數先除成小數再換。',
        ex: '0.6＝60%；[[3/4]]＝3÷4＝0.75＝<b>75%</b>；120%＝<b>1.2</b>；8%＝<b>0.08</b>。',
        why: '乘 100 就是小數點往右移兩位，除以 100 就是往左移兩位。' },
      { t: '打幾折＝付原價的十分之幾；幾成＝百分之幾十。',
        ex: '原價 600 元打八折：600×0.8＝<b>480 元</b>。打七五折＝原價×0.75。「三成」＝30%，「三成五」＝35%。',
        why: '打八折不是便宜 80%，是要付原價的 80%（便宜 20%）。', svg: bar(80) },
      { t: '增加或減少百分之幾＝相差的量÷原來的量。',
        ex: '去年 400 人，今年 460 人：多了 60 人，60÷400＝0.15，所以<b>增加了 15%</b>。',
        why: '要拿「原來的量」當全部（基準），不是拿新的量來除。' }
    ],
    gens: [
      // d1 比率＝部分÷全部
      { k: 'rate', d: 1, n: 5, f: function (r) {
        var c = H.pick(r, RATE), T = H.pick(r, c.T), p = H.ri(r, 1, T - 1);
        var says = c.part ? '其中 ' + p + ' ' + c.u + c.part : '其中 ' + p + ' 人戴眼鏡';
        return H.Q(c.all + '共有 ' + T + ' ' + c.u + '，' + says + '。' + c.who + '占' + c.all + '的比率是多少？（用小數或分數表示）',
          '比率＝部分量÷全部量＝' + p + '÷' + T + '＝' + D(p, T) + '（也可以寫成 ' + H.fmt(H.R(p, T)) + '）。',
          H.num(H.R(p, T), { err: [[H.R(T, p), '除反了：比率是「部分量÷全部量」。']] }), { p: p, T: T });
      } },
      // d1 小數、分數 → 百分率
      { k: 'toPct', d: 1, n: 5, f: function (r, _, i) {
        if (i % 2) {
          var den = H.pick(r, [2, 4, 5, 10, 20, 25, 50]), nu = H.ri(r, 1, den - 1), p = nu * 100 / den;
          return H.Q(H.fr(nu, den) + '＝百分之幾？', H.fr(nu, den) + '＝' + nu + '÷' + den + '＝' + D(nu, den) + '，再乘 100，就是 ' + p + '%。',
            H.num(p, { suf: '%', err: [[nu, '分子不是百分率：要先換成分母是 100 的分數。']] }), { n: nu, d: den });
        }
        var k = H.ri(r, 1, 150); if (k % 100 === 0) k += 7;
        var s = D(k, 100);
        return H.Q(s + '＝百分之幾？', '小數乘 100 就是百分率：' + s + '×100＝' + k + '，所以是 ' + k + '%。',
          H.num(k, { suf: '%', err: [[H.R(k, 10), '乘 100，小數點要往右移兩位，不是一位。']] }), { s: s });
      } },
      // d1 百分率 → 小數、分數
      { k: 'fromPct', d: 1, n: 5, f: function (r, _, i) {
        if (i % 2) {
          var p = H.pick(r, [4, 5, 8, 12, 15, 20, 24, 25, 35, 40, 45, 60, 75, 80]), a = H.R(p, 100);
          return H.Q(p + '%＝幾分之幾？（用最簡分數表示）', p + '%＝' + H.fr(p, 100) + '，約分成最簡＝' + H.fmt(a) + '。',
            H.num(a, { form: 'f', simp: true }), { p: p });
        }
        var k = H.ri(r, 1, 250); if (k % 100 === 0) k += 3;
        return H.Q(k + '%＝多少？（用小數表示）', '百分率除以 100 就是小數：' + k + '÷100＝' + D(k, 100) + '。',
          H.num(H.R(k, 100), { err: [[k, '百分率要除以 100 才是小數。'], [H.R(k, 10), '除以 100，小數點往左移兩位，不是一位。']] }), { p: k });
      } },
      // d1 幾折、幾成 → 百分率
      { k: 'cheng', d: 1, n: 5, f: function (r, _, i) {
        var err = [];
        if (i % 2) {
          var p = H.pick(r, [10, 20, 30, 40, 60, 70, 80, 90, 15, 25, 35, 45, 55, 65, 85]);
          if (p % 10 === 0) err.push([p / 10, '一成是 10%，所以要乘 10。']);
          return H.Q('「' + cheng(p) + '」是百分之幾？', '一成＝[[1/10]]＝10%，所以' + cheng(p) + '＝' + D(p, 100) + '＝' + p + '%。',
            H.num(p, { suf: '%', err: err }), { s: cheng(p) });
        }
        var z = H.pick(r, ZHE);
        if (z !== 50) err.push([100 - z, '打折是「付原價的百分之幾」，不是「便宜百分之幾」。']);
        if (z % 10 === 0) err.push([z / 10, '一折是十分之一，也就是 10%，所以要乘 10。']);
        return H.Q('打' + zhe(z) + '折，就是付原價的百分之幾？', '「打幾折」就是付原價的十分之幾：打' + zhe(z) + '折＝原價×' + D(z, 100) + '＝原價的 ' + z + '%。',
          H.num(z, { suf: '%', err: err }), { s: zhe(z) });
      } },
      // d2 打折後的售價
      { k: 'price', d: 2, n: 4, f: function (r) {
        var it = H.pick(r, ITEMS), price = 20 * H.ri(r, it[1], it[2]), z = H.pick(r, ZHE), sale = price * z / 100, err = [[price - sale, '這是便宜了多少錢，題目問的是售價。']];
        if (z % 10 === 0) err.push([price * z / 10, '打' + zhe(z) + '折是乘 ' + D(z, 100) + '，不是乘 ' + z / 10 + '。']);
        return H.Q('店裡的' + it[0] + '原價 ' + C(price) + ' 元，打' + zhe(z) + '折出售。售價是幾元？',
          '打' + zhe(z) + '折＝原價×' + D(z, 100) + '：' + C(price) + '×' + D(z, 100) + '＝' + C(sale) + '（元）。',
          H.num(sale, { suf: '元', err: err }), { price: price, s: zhe(z) });
      } },
      // d2 全部的百分之幾是多少
      { k: 'pctOf', d: 2, n: 4, f: function (r) {
        var T = H.pick(r, [200, 300, 400, 500, 600, 800, 1200]), p = H.ri(r, 5, 95), a = T * p / 100;
        var s = H.pick(r, [
          ['全校 ' + T + ' 位學生中，有 ' + p + '% 會騎腳踏車。會騎腳踏車的有幾人？', '人'],
          ['果園採收了 ' + T + ' 顆芭樂，其中 ' + p + '% 是特大顆。特大顆的有幾顆？', '顆'],
          ['超商這個月賣出 ' + T + ' 杯咖啡，其中 ' + p + '% 是拿鐵。拿鐵賣出幾杯？', '杯'],
          ['圖書館進了 ' + T + ' 本新書，其中 ' + p + '% 是科普書。科普書有幾本？', '本']
        ]);
        return H.Q(s[0], T + ' 的 ' + p + '%＝' + T + '×' + D(p, 100) + '＝' + a + '（' + s[1] + '）。',
          H.num(a, { suf: s[1], err: [[T - a, '這是剩下的部分；題目問的是占 ' + p + '% 的那部分。']] }), { T: T, p: p });
      } },
      // d2 哪一個最大／最小（小數、分數、百分率、幾成混在一起）
      { k: 'cmpRate', d: 2, n: 4, f: function (r, _, i) {
        var ks = [], seen = {};
        while (ks.length < 6) { var k = H.ri(r, 5, 95); if (!seen[k]) { seen[k] = 1; ks.push(k); } }
        var big = i % 2 === 0, items = ks.map(function (k) { return { k: k, o: asObj(k, H.pick(r, ['dec', 'pct', 'frac', 'cheng'])) }; });
        items.sort(function (x, y) { return big ? y.k - x.k : x.k - y.k; });
        return H.Q('下面哪一個' + (big ? '最大' : '最小') + '？',
          '都換成百分率再比：' + items.map(function (x) { return show(x.o) + '＝' + x.k + '%'; }).join('；') + '。' + (big ? '最大' : '最小') + '的是 ' + show(items[0].o) + '。',
          H.mc(items[0].o, items.slice(1).map(function (x) { return x.o; }), show), { big: big });
      } },
      // d2 求百分率（命中率、發芽率）
      { k: 'findRate', d: 2, n: 3, f: function (r) {
        var T = H.pick(r, [20, 25, 50]), p = H.ri(r, Math.ceil(T / 2), T - 1), a = p * 100 / T;
        var s = H.pick(r, [
          '阿哲投籃 ' + T + ' 次，進了 ' + p + ' 球。投籃命中率是百分之幾？',
          '姐姐種了 ' + T + ' 顆種子，有 ' + p + ' 顆發芽。發芽率是百分之幾？',
          '哥哥的測驗共 ' + T + ' 題，答對 ' + p + ' 題。答對率是百分之幾？'
        ]);
        return H.Q(s, p + '÷' + T + '＝' + D(p, T) + '，乘 100 → ' + a + '%。',
          H.num(a, { suf: '%', err: [[p, '這是個數，還要除以全部的 ' + T + '，再乘 100。']] }), { T: T, p: p });
      } },
      // d2 列出全部：和 k% 一樣大的
      { k: 'same', d: 2, n: 4, f: function (r) {
        var k = H.pick(r, [15, 20, 25, 35, 40, 45, 60, 65, 75, 80]), q = H.R(k, 100), w = H.R(100 - k, 100);
        var good = [{ f: 'dec', s: D(k, 100) }, { f: 'frac', n: q[0], d: q[1] }, { f: 'frac', n: q[0] * 2, d: q[1] * 2 }, { f: 'cheng', s: cheng(k) }];
        var badO = [{ f: 'dec', s: D(k, 1000) }, { f: 'dec', s: D(k, 10) }, { f: 'frac', n: w[0], d: w[1] }, { f: 'cheng', s: cheng(100 - k) }, { f: 'dec', s: D(100 - k, 100) }];
        var g = H.shuffle(good, r).slice(0, H.ri(r, 2, 3)), cand = H.shuffle(g.concat(H.shuffle(badO, r).slice(0, 5 - g.length)), r);
        return H.Q('下面哪些和 ' + k + '% 一樣大？<b>全部選出來。</b>',
          k + '%＝' + D(k, 100) + '＝' + H.fmt(q) + '＝' + H.fr(q[0] * 2, q[1] * 2) + '＝' + cheng(k) + '。其他的都不一樣大。',
          H.set(cand, function (o) { return good.some(function (x) { return JSON.stringify(x) === JSON.stringify(o); }); }, show), { k: k });
      } },
      // d3 已知售價求原價
      { k: 'orig', d: 3, n: 4, f: function (r) {
        var it = H.pick(r, ITEMS), price = 20 * H.ri(r, it[1], it[2]), z = H.pick(r, ZHE), sale = price * z / 100;
        return H.Q('百貨公司週年慶，' + it[0] + '打' + zhe(z) + '折後賣 ' + C(sale) + ' 元。原價是幾元？',
          '原價×' + D(z, 100) + '＝售價，所以原價＝售價÷' + D(z, 100) + '＝' + C(sale) + '÷' + D(z, 100) + '＝' + C(price) + '（元）。',
          H.num(price, { suf: '元', err: [[H.R(sale * z, 100), '原價×' + D(z, 100) + '＝售價，要用除的，不是再乘一次。'], [H.add(sale, H.R(sale * (100 - z), 100)), '折扣是從原價算的，不能拿售價加上售價的 ' + (100 - z) + '%。']] }),
          { sale: sale, s: zhe(z) });
      } },
      // d3 增加、減少百分之幾
      { k: 'change', d: 3, n: 4, f: function (r) {
        var B = H.pick(r, [200, 300, 400, 500, 600, 800]), c = H.ri(r, 5, 40), up = r() < 0.5, N = B * (100 + (up ? c : -c)) / 100, diff = Math.abs(N - B), w = up ? '增加' : '減少';
        var s = H.pick(r, [
          ['去年運動會有 ' + B + ' 人報名趣味競賽，今年有 ' + N + ' 人。今年比去年', '人'],
          ['夜市雞排攤上週賣出 ' + B + ' 份，這週賣出 ' + N + ' 份。這週比上週', '份'],
          ['圖書館上個月借出 ' + B + ' 本書，這個月借出 ' + N + ' 本。這個月比上個月', '本']
        ]);
        return H.Q(s[0] + w + '了百分之幾？',
          '相差 ' + diff + ' ' + s[1] + '，用原來的 ' + B + ' 當基準：' + diff + '÷' + B + '＝' + D(diff, B) + '＝' + c + '%。',
          H.num(c, { suf: '%', err: [[diff, '這是相差的數量，還要除以原來的 ' + B + '，再乘 100。'], [up ? 100 + c : 100 - c, '這是新的量占原來的百分率，還要和 100% 比，才知道' + w + '多少。'], [H.R(diff * 100, N), '要除以原來的量（' + B + '），不是新的量。']] }),
          { B: B, N: N, up: up });
      } },
      // d3 兩步驟：打折再用折價券／買多件打折
      { k: 'twoStep', d: 3, n: 3, f: function (r, _, i) {
        var z = H.pick(r, ZHE), P = 20 * H.ri(r, 10, 40);
        if (i % 2 === 0) {
          var it = H.pick(r, ITEMS), sale = P * z / 100, m = H.pick(r, [20, 30, 50, 100]); if (m >= sale) m = 20;
          return H.Q(it[0] + '原價 ' + C(P) + ' 元，打' + zhe(z) + '折後，結帳時再用一張 ' + m + ' 元折價券。最後要付幾元？',
            '先打折：' + C(P) + '×' + D(z, 100) + '＝' + C(sale) + '；再減折價券：' + C(sale) + '－' + m + '＝' + C(sale - m) + '（元）。',
            H.num(sale - m, { suf: '元', err: [[sale, '別忘了再減掉 ' + m + ' 元折價券。'], [H.R((P - m) * z, 100), '題目是先打折再用折價券，順序不能換。']] }),
            { kind: 0, P: P, s: zhe(z), m: m });
        }
        var n = H.ri(r, 3, 6), P2 = 20 * H.ri(r, 10, 25), tot = P2 * n * z / 100;
        return H.Q('運動 T 恤一件 ' + C(P2) + ' 元，買 3 件以上每件打' + zhe(z) + '折。小明買了 ' + n + ' 件，一共要付幾元？',
          '一件打折後：' + C(P2) + '×' + D(z, 100) + '＝' + H.fmt(H.R(P2 * z, 100), 'dec') + '；' + n + ' 件：' + H.fmt(H.R(P2 * z, 100), 'dec') + '×' + n + '＝' + C(tot) + '（元）。',
          H.num(tot, { suf: '元', err: [[P2 * n, '還沒打折：要再乘 ' + D(z, 100) + '。'], [H.R(P2 * z, 100), '這只是一件的價錢，還要乘件數。']] }),
          { kind: 1, P: P2, s: zhe(z), n: n });
      } },
      // d1（選擇）幾折、幾成換成小數
      { k: 'zheMc', d: 1, n: 4, f: function (r, _, i) {
        var isZ = i % 2 === 0, p = isZ ? H.pick(r, [95, 90, 85, 80, 75, 70, 65, 60, 30]) : H.pick(r, [20, 30, 40, 60, 70, 80, 15, 25, 35, 45, 65]);
        var word = isZ ? zhe(p) : cheng(p), sh = function (s) { return isZ ? '原價×' + s : s; };
        return H.Q(isZ ? '打' + word + '折，售價怎麼算？' : '「' + word + '」用小數表示是多少？',
          isZ ? '打' + word + '折＝付原價的 ' + p + '%＝原價×' + D(p, 100) + '。' : '一成＝0.1，所以' + word + '＝' + D(p, 100) + '。',
          H.mc(D(p, 100), [D(100 - p, 100), D(p, 10), D(p, 1000)], sh), { s: word });
      } },
      // d3（選擇）哪一家最便宜
      { k: 'bestBuy', d: 3, n: 4, f: function (r) {
        var it = H.pick(r, ITEMS), names = ['甲店', '乙店', '丙店', '丁店'], st = [], seen = {};
        for (var t = 0; st.length < 4 && t < 50; t++) {
          var P = 20 * H.ri(r, it[1], it[2]), z = H.pick(r, ZHE), sale = P * z / 100;
          if (!seen[sale]) { seen[sale] = 1; st.push({ name: names[st.length], P: P, s: zhe(z), z: z, sale: sale }); }
        }
        if (st.length < 4) return null;
        var best = st.slice().sort(function (a, b) { return a.sale - b.sale; });
        return H.Q('同一款' + it[0] + '，' + st.map(function (x) { return x.name + '原價 ' + C(x.P) + ' 元打' + x.s + '折'; }).join('，') + '。哪一家買最便宜？',
          '各算售價：' + st.map(function (x) { return x.name + ' ' + C(x.P) + '×' + D(x.z, 100) + '＝' + C(x.sale) + ' 元'; }).join('；') + '。最便宜的是' + best[0].name + '。',
          H.mc(best[0].name, best.slice(1).map(function (x) { return x.name; })), { stores: st.map(function (x) { return { name: x.name, P: x.P, s: x.s }; }) });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
