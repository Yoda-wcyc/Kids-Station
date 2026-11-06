/* 五下 單元十 生活中的大單位（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b10.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma;
  var D = function (n, d) { return H.toDec(H.R(n, d)); };
  var sh = function (x) { x = H.R(x); return x[1] === 1 ? C(x[0]) : H.toDec(x); };     // 有理數 → 12,000 或 2.5
  var AU = ['平方公尺', '公畝', '公頃', '平方公里'], AF = [1, 100, 10000, 1000000];
  // 比大小／列舉用的三類單位（[單位, 換成最小單位要乘幾]）
  var KIND = [
    { u: [['公里', 1000], ['公尺', 1]], ask: ['最長', '最短'], same: '長' },
    { u: [['公噸', 1000], ['公斤', 1]], ask: ['最重', '最輕'], same: '重' },
    { u: [['公頃', 10000], ['公畝', 100], ['平方公尺', 1]], ask: ['最大', '最小'], same: '大' }
  ];
  // 選單位題：[句子（＿是空格）, 正解, 解說]
  var GROUPS = [['公里', '公尺', '公分'], ['公噸', '公斤', '公克'], ['平方公里', '公頃', '公畝', '平方公尺']];
  var USE = [
    ['一輛大卡車連同貨物大約重 15 ＿', '公噸', '卡車很重，1 公噸＝1000 公斤，用公噸比較合適。'],
    ['從臺北開車到臺中大約 170 ＿', '公里', '城市和城市之間的距離很長，用公里。'],
    ['一間國小的校園面積大約 2 ＿', '公頃', '1 公頃是邊長 100 公尺的正方形，學校大約這麼大。'],
    ['一間教室的地板面積大約 80 ＿', '平方公尺', '教室長、寬大約 8～10 公尺，面積用平方公尺。'],
    ['臺灣本島的面積大約 36,000 ＿', '平方公里', '整個島非常大，用平方公里。'],
    ['一包米重 5 ＿', '公斤', '一包米拿得動，用公斤。'],
    ['學校操場跑一圈大約 200 ＿', '公尺', '操場一圈幾百步就走完，用公尺。'],
    ['阿公的菜園大約 3 ＿', '公畝', '1 公畝是邊長 10 公尺的正方形，3 公畝＝300 平方公尺，像一塊菜園。']
  ];
  // 選項值：{f:'dec',s,u}（大單位小數）、{f:'int',x,u}、{f:'mix',a,u,b,u2}
  var show = function (o) { return o.f === 'dec' ? o.s + ' ' + o.u : o.f === 'int' ? C(o.x) + ' ' + o.u : o.a + ' ' + o.u + ' ' + o.b + ' ' + o.u2; };
  function forms(K, v) {
    var U = K.u, out = [], F0 = U[0][1], F1 = U[1][1];
    if (v % F0) out.push({ f: 'dec', s: D(v, F0), u: U[0][0] });
    for (var i = 1; i < U.length; i++) if (v % U[i][1] === 0) out.push({ f: 'int', x: v / U[i][1], u: U[i][0] });
    if (v >= F0 && v % F0 && v % F1 === 0) out.push({ f: 'mix', a: Math.floor(v / F0), u: U[0][0], b: v % F0 / F1, u2: U[1][0] });
    return out;
  }
  function rect(L, W, l, w) {
    var bw = 260, bh = Math.max(50, Math.min(160, Math.round(260 * W / L)));
    return H.svg(380, bh + 60, '<rect x="60" y="14" width="' + bw + '" height="' + bh + '" fill="#d6ecff" stroke="' + H.INK + '" stroke-width="2"/>' +
      H.txt(190, bh + 40, l) + H.txt(52, 14 + bh / 2 + 6, w, { a: 'end' }), '長方形土地');
  }
  function gridCard() {
    var b = '<rect x="60" y="20" width="200" height="200" fill="#eef6ff" stroke="' + H.INK + '" stroke-width="2"/><rect x="60" y="20" width="20" height="20" fill="#ffb74d"/>';
    for (var i = 1; i < 10; i++) b += '<line x1="' + (60 + i * 20) + '" y1="20" x2="' + (60 + i * 20) + '" y2="220" stroke="' + H.INK + '" stroke-width="0.6"/><line x1="60" y1="' + (20 + i * 20) + '" x2="260" y2="' + (20 + i * 20) + '" stroke="' + H.INK + '" stroke-width="0.6"/>';
    b += H.txt(160, 244, '100 公尺') + H.txt(52, 126, '100 公尺', { a: 'end' }) + H.txt(280, 36, '橘色一小格：10 公尺×10 公尺＝1 公畝', { a: 'start', fs: 14 }) + H.txt(280, 126, '整塊：100 格＝100 公畝', { a: 'start', fs: 14 }) + H.txt(280, 150, '＝1 公頃＝10,000 平方公尺', { a: 'start', fs: 14 });
    return H.svg(560, 256, b, '1 公頃是 100 個 1 公畝');
  }
  // 公里↔公尺、公噸↔公斤共用：kind 0 小數大單位 → 小單位；1 幾大幾小 → 小單位；2 小單位 → 大單位小數
  function bigSmall(k, big, small, n) {
    return { k: k, d: 1, n: n, f: function (r, _, i) {
      var kind = i % 3, a = H.ri(r, 1, 9), b = r() < 0.5 ? H.ri(r, 1, 99) : H.ri(r, 100, 999), M = a * 1000 + b;
      if (kind === 0) {
        var s = D(M, 1000);
        return H.Q(s + ' ' + big + '＝幾' + small + '？', '1 ' + big + '＝1000 ' + small + '：' + s + '×1000＝' + C(M) + '（' + small + '）。',
          H.num(M, { suf: small, err: [[H.R(M, 10), '1 ' + big + '＝1000 ' + small + '，要乘 1000，不是乘 100。']] }), { kind: 0, s: s });
      }
      if (kind === 1) {
        var err = b < 100 ? [[+(String(a) + String(b)), '是 ' + a + '×1000＋' + b + '，不能把數字直接接起來。']] : [];
        return H.Q(a + ' ' + big + ' ' + b + ' ' + small + '＝幾' + small + '？', a + ' ' + big + '＝' + C(a * 1000) + ' ' + small + '，再加 ' + b + '：' + C(a * 1000) + '＋' + b + '＝' + C(M) + '（' + small + '）。',
          H.num(M, { suf: small, err: err }), { kind: 1, a: a, b: b });
      }
      return H.Q(C(M) + ' ' + small + '＝幾' + big + '？（用小數表示）', '1000 ' + small + '＝1 ' + big + '：' + C(M) + '÷1000＝' + D(M, 1000) + '（' + big + '）。',
        H.num(H.R(M, 1000), { suf: big, err: [[H.R(M, 100), '要除以 1000（1 ' + big + '＝1000 ' + small + '），不是除以 100。']] }), { kind: 2, M: M });
    } };
  }
  MG.unit({
    id: 'g5b10', pending: '待課本核對',
    cards: [
      { t: '1 公里＝1000 公尺。公里換公尺乘 1000，公尺換公里除以 1000。',
        ex: '2.35 公里＝2.35×1000＝<b>2350 公尺</b>；3 公里 40 公尺＝3000＋40＝<b>3040 公尺</b>；1250 公尺＝<b>1.25 公里</b>。',
        why: '1 公尺是 1 公里的 [[1/1000]]，所以公里的小數第三位就是「幾公尺」：2.035 公里＝2 公里 35 公尺。' },
      { t: '1 公噸＝1000 公斤。很重的東西（卡車、貨櫃、大象）用公噸。',
        ex: '4.5 公噸＝<b>4500 公斤</b>；800 公斤＝<b>0.8 公噸</b>；2 公噸 60 公斤＝<b>2060 公斤</b>。',
        why: '跟公里、公尺一樣差 1000 倍，換算的方法也一樣。' },
      { t: '1 公畝＝邊長 10 公尺的正方形＝100 平方公尺；1 公頃＝邊長 100 公尺的正方形＝100 公畝＝10,000 平方公尺。',
        ex: '3 公頃＝300 公畝＝<b>30,000 平方公尺</b>；2500 平方公尺＝<b>25 公畝</b>。',
        why: '邊長變成 10 倍，面積就變成 10×10＝100 倍，所以面積單位每差一級就差 100 倍。', svg: gridCard() },
      { t: '1 平方公里＝邊長 1 公里的正方形＝100 公頃＝1,000,000 平方公尺。',
        ex: '1 公里＝1000 公尺，1 平方公里＝1000×1000＝1,000,000 平方公尺＝<b>100 公頃</b>。縣市、湖泊這麼大的面積就用平方公里。',
        why: '平方公里 → 公頃 → 公畝 → 平方公尺，每往下一級乘 100；往上一級除以 100。' },
      { t: '單位不一樣不能直接加減，先換成同一個單位再算。',
        ex: '1.2 公里＋450 公尺：450 公尺＝0.45 公里，1.2＋0.45＝<b>1.65 公里</b>（或 1200＋450＝1650 公尺＝1.65 公里）。',
        why: '1.2 和 450 單位不同，直接相加的 451.2 沒有意義；換成一樣的單位才能加。' }
    ],
    gens: [
      bigSmall('km', '公里', '公尺', 6),
      bigSmall('ton', '公噸', '公斤', 5),
      // d1 面積單位換算
      { k: 'area', d: 1, n: 6, f: function (r) {
        var a = H.ri(r, 0, 3), b = H.ri(r, 0, 3), x, ans;
        if (a === b || Math.abs(a - b) > 2) return null;
        var big = Math.max(a, b), small = Math.min(a, b), ratio = AF[big] / AF[small], dec = r() < 0.3;
        if (a > b) { x = dec ? H.R(H.ri(r, 11, 99), 10) : H.R(H.ri(r, 2, 40)); ans = H.mul(x, ratio); }
        else { ans = dec ? H.R(H.ri(r, 11, 99), 10) : H.R(H.ri(r, 2, 40)); x = H.mul(ans, ratio); }
        var tenX = Math.pow(10, big - small);
        return H.Q(sh(x) + ' ' + AU[a] + '＝幾' + AU[b] + '？',
          '1 ' + AU[big] + '＝' + C(ratio) + ' ' + AU[small] + '。' + (a > b ? '大單位換小單位用乘：' + sh(x) + '×' + C(ratio) : '小單位換大單位用除：' + sh(x) + '÷' + C(ratio)) + '＝' + sh(ans) + '（' + AU[b] + '）。',
          H.num(ans, { suf: AU[b], err: a > b ? [[H.mul(x, tenX), '面積單位每差一級是 100 倍，不是 10 倍。'], [H.div(x, ratio), '大單位換小單位，數字會變大，要用乘的。']] : [[H.div(x, tenX), '面積單位每差一級是 100 倍，不是 10 倍。'], [H.mul(x, ratio), '小單位換大單位，數字會變小，要用除的。']] }),
          { x: x, a: a, b: b });
      } },
      // d2 公里、公尺混著加減
      { k: 'mix', d: 2, n: 5, f: function (r, _, i) {
        if (i % 2 === 0) {
          var A = H.ri(r, 6, 40) * 50, B = H.ri(r, 3, 19) * 50, p = H.pick(r, [['家', '學校', '圖書館'], ['捷運站', '公園', '夜市'], ['學校', '體育館', '游泳池']]);
          return H.Q('從' + p[0] + '到' + p[1] + ' ' + D(A, 1000) + ' 公里，從' + p[1] + '到' + p[2] + ' ' + B + ' 公尺。從' + p[0] + '經過' + p[1] + '走到' + p[2] + '，一共走幾公里？',
            B + ' 公尺＝' + D(B, 1000) + ' 公里；' + D(A, 1000) + '＋' + D(B, 1000) + '＝' + D(A + B, 1000) + '（公里）。',
            H.num(H.R(A + B, 1000), { suf: '公里', err: [[H.add(H.R(A, 1000), B), '單位不一樣不能直接加：先把 ' + B + ' 公尺換成 ' + D(B, 1000) + ' 公里。'], [A + B, '這是公尺，題目問公里，要再除以 1000。']] }),
            { kind: 0, A: D(A, 1000), B: B });
        }
        var A2 = H.ri(r, 20, 60) * 100, B2 = H.ri(r, 80, A2 / 10 - 10) * 10;
        return H.Q('哥哥跑了 ' + D(A2, 1000) + ' 公里，弟弟跑了 ' + C(B2) + ' 公尺。哥哥比弟弟多跑幾公尺？',
          D(A2, 1000) + ' 公里＝' + C(A2) + ' 公尺；' + C(A2) + '－' + C(B2) + '＝' + C(A2 - B2) + '（公尺）。',
          H.num(A2 - B2, { suf: '公尺' }), { kind: 1, A: D(A2, 1000), B: B2 });
      } },
      // d2 公噸、公斤：裝箱、合計
      { k: 'load', d: 2, n: 5, f: function (r, _, i) {
        if (i % 2 === 0) {
          var w = H.pick(r, [20, 25, 40, 50]), X = H.ri(r, 8, 30) * 200;
          return H.Q('一輛小貨車最多可以載 ' + D(X, 1000) + ' 公噸的貨，每箱貨重 ' + w + ' 公斤。最多可以載幾箱？',
            D(X, 1000) + ' 公噸＝' + C(X) + ' 公斤；' + C(X) + '÷' + w + '＝' + X / w + '（箱）。',
            H.num(X / w, { suf: '箱', err: [[H.R(X, 10 * w), '1 公噸＝1000 公斤，不是 100 公斤。']] }), { kind: 0, X: D(X, 1000), w: w });
        }
        var w2 = H.pick(r, [20, 25, 30, 50]), n = H.ri(r, 12, 90), t = w2 * n, what = H.pick(r, [['米店進了', '袋米'], ['農會運來', '包肥料'], ['工地叫了', '包水泥']]);
        return H.Q(what[0] + ' ' + n + ' ' + what[1] + '，每' + what[1].charAt(0) + ' ' + w2 + ' 公斤，一共幾公噸？',
          w2 + '×' + n + '＝' + C(t) + ' 公斤；' + C(t) + '÷1000＝' + D(t, 1000) + '（公噸）。',
          H.num(H.R(t, 1000), { suf: '公噸', err: [[t, '這是公斤，換成公噸要除以 1000。']] }), { kind: 1, w: w2, n: n });
      } },
      // d2 長方形土地幾公畝／幾公頃
      { k: 'land', d: 2, n: 4, f: function (r, _, i) {
        var ha = i % 2 === 1, a, b;
        if (ha) { a = H.ri(r, 2, 8) * 50; b = H.ri(r, 2, 10) * 100; } else { a = H.ri(r, 3, 20) * 10; b = H.ri(r, 2, 15) * 10; }
        if (a < b) { var t = a; a = b; b = t; }
        var unit = ha ? '公頃' : '公畝', F = ha ? 10000 : 100, ans = H.R(a * b, F), place = H.pick(r, ['菜園', '停車場', '社區公園', '果園', '操場']);
        return H.Q('一塊長方形的' + place + '長 ' + a + ' 公尺、寬 ' + b + ' 公尺。面積是幾' + unit + '？',
          a + '×' + b + '＝' + C(a * b) + ' 平方公尺；1 ' + unit + '＝' + C(F) + ' 平方公尺，' + C(a * b) + '÷' + C(F) + '＝' + sh(ans) + '（' + unit + '）。',
          H.num(ans, { suf: unit, err: [[a * b, '這是平方公尺，還要換成' + unit + '（除以 ' + C(F) + '）。']] }), { a: a, b: b, unit: unit },
          { svg: rect(a, b, a + ' 公尺', b + ' 公尺') });
      } },
      // d2 哪一個最長／最重／最大
      { k: 'cmpU', d: 2, n: 4, f: function (r, _, i) {
        var K = KIND[i % 3], big = i < 3, area = K.u.length === 3, base = H.ri(r, 2, 6) * K.u[0][1];
        var offs = area ? [0, 300, 3000, 3300, 100, 1000, 1100, 2500] : [0, 30, 300, 330, 3, 303, 33, 250, 25];
        var its = H.shuffle(offs, r).slice(0, 6).map(function (o) { var v = base + o; return { v: v, o: H.pick(r, forms(K, v)) }; });
        its.sort(function (x, y) { return big ? y.v - x.v : x.v - y.v; });
        var ask = K.ask[big ? 0 : 1], last = K.u[K.u.length - 1][0];
        return H.Q('下面哪一個' + ask + '？',
          '都換成' + last + '再比：' + its.map(function (x) { return show(x.o) + '＝' + C(x.v) + ' ' + last; }).join('；') + '。' + ask + '的是 ' + show(its[0].o) + '。',
          H.mc(its[0].o, its.slice(1).map(function (x) { return x.o; }), show), { big: big });
      } },
      // d2 列出全部：一樣長／重／大的
      { k: 'same', d: 2, n: 4, f: function (r, _, i) {
        var K = KIND[i % 3], F0 = K.u[0][1], a = H.ri(r, 1, 9), v, wrong;
        // 錯答都是常見錯法：小數位看錯（2.05→2 公里 500 公尺）、只乘 100、小數點移錯
        if (K.u.length === 3) { var c = H.ri(r, 1, 99); v = a * F0 + c * 100; wrong = [v * 10, a * F0 + c * 10, (a + 1) * F0 + c * 100].concat(c < 10 ? [a * F0 + c * 1000] : []); }
        else { var b = H.ri(r, 1, 99); v = a * F0 + b; wrong = [a * F0 + b * 10, a * 100 + b, v * 10, (a + 1) * F0 + b]; }
        var target = { f: 'dec', s: D(v, F0), u: K.u[0][0] }, good = forms(K, v).filter(function (o) { return o.f !== 'dec'; });
        var seen = {}; seen[v] = 1;
        var badO = H.shuffle(wrong, r).filter(function (w) { if (seen[w]) return false; seen[w] = 1; return true; }).map(function (w) { return H.pick(r, forms(K, w)); });
        var g = H.shuffle(good, r).slice(0, H.ri(r, 2, good.length)), cand = H.shuffle(g.concat(badO.slice(0, 5 - g.length)), r);
        return H.Q('下面哪些和 ' + show(target) + ' 一樣' + K.same + '？<b>全部選出來。</b>',
          show(target) + '＝' + good.map(show).join('＝') + '。其他的都不一樣' + K.same + '。',
          H.set(cand, function (o) { return good.some(function (x) { return JSON.stringify(x) === JSON.stringify(o); }); }, show), { target: target });
      } },
      // d3 公里×公尺的長方形土地
      { k: 'field', d: 3, n: 4, f: function (r, _, i) {
        var L = H.ri(r, 2, 15) * 100, W = H.ri(r, 2, 9) * 50, ha = i % 2 === 0, unit = ha ? '公頃' : '公畝', F = ha ? 10000 : 100, ans = H.R(L * W, F);
        var place = H.pick(r, ['農地', '茶園', '公園預定地', '太陽能板場']);
        return H.Q('一塊長方形' + place + '長 ' + D(L, 1000) + ' 公里、寬 ' + W + ' 公尺。面積是幾' + unit + '？',
          D(L, 1000) + ' 公里＝' + C(L) + ' 公尺；' + C(L) + '×' + W + '＝' + C(L * W) + ' 平方公尺＝' + sh(ans) + ' ' + unit + '（1 ' + unit + '＝' + C(F) + ' 平方公尺）。',
          H.num(ans, { suf: unit, err: [[H.div(H.mul(H.R(L, 1000), W), F), '公里要先換成公尺（1 公里＝1000 公尺），才能和公尺相乘。'], [L * W, '這是平方公尺，還要換成' + unit + '。']] }),
          { L: D(L, 1000), W: W, unit: unit }, { svg: rect(L, W, D(L, 1000) + ' 公里', W + ' 公尺') });
      } },
      // d3 至少要載幾趟（有餘數要多 1 趟）
      { k: 'truck', d: 3, n: 3, f: function (r) {
        var X = H.ri(r, 50, 200) * 100, w = H.pick(r, [2500, 3000, 3500, 4000, 4500]), q = Math.floor(X / w), rem = X % w, trips = rem ? q + 1 : q;
        return H.Q('工地有 ' + D(X, 1000) + ' 公噸的沙，每台卡車一次最多載 ' + C(w) + ' 公斤。至少要載幾趟才能全部運完？',
          D(X, 1000) + ' 公噸＝' + C(X) + ' 公斤；' + C(X) + '÷' + C(w) + '＝' + q + (rem ? ' 餘 ' + C(rem) + '，剩下的 ' + C(rem) + ' 公斤也要再載一趟，所以是 ' + trips + ' 趟。' : '，剛好 ' + q + ' 趟。'),
          H.num(trips, { suf: '趟', err: rem ? [[q, '還剩 ' + C(rem) + ' 公斤沒載，要再多跑 1 趟。']] : [] }), { X: D(X, 1000), w: w });
      } },
      // d3 路跑還剩幾公尺／繞操場共幾公里
      { k: 'run', d: 3, n: 3, f: function (r, _, i) {
        if (i % 2 === 0) {
          var L = H.pick(r, [3000, 4200, 5000, 7500, 10000, 12000]), done = H.ri(r, 100, L / 10 - 20) * 10, a = Math.floor(done / 1000), b = done % 1000;
          return H.Q('社區路跑全程 ' + D(L, 1000) + ' 公里，阿哲已經跑了 ' + a + ' 公里' + (b ? ' ' + b + ' 公尺' : '') + '。還剩幾公尺？',
            D(L, 1000) + ' 公里＝' + C(L) + ' 公尺，已經跑了 ' + C(done) + ' 公尺；' + C(L) + '－' + C(done) + '＝' + C(L - done) + '（公尺）。',
            H.num(L - done, { suf: '公尺' }), { kind: 0, L: D(L, 1000), a: a, b: b });
        }
        var lap = H.pick(r, [200, 250, 300, 400]), n = H.ri(r, 3, 12), m = H.ri(r, 1, 19) * 10, tot = lap * n + m;
        return H.Q('學校操場一圈 ' + lap + ' 公尺。姐姐跑了 ' + n + ' 圈，又走了 ' + m + ' 公尺，一共移動了幾公里？',
          lap + '×' + n + '＋' + m + '＝' + C(tot) + ' 公尺；' + C(tot) + '÷1000＝' + D(tot, 1000) + '（公里）。',
          H.num(H.R(tot, 1000), { suf: '公里', err: [[tot, '這是公尺，題目問公里，要除以 1000。']] }), { kind: 1, lap: lap, n: n, m: m });
      } },
      // d1（選擇）生活中該用哪個單位
      { k: 'unitMc', d: 1, n: 4, f: function (r) {
        var it = H.pick(r, USE), g = GROUPS.filter(function (x) { return x.indexOf(it[1]) >= 0; })[0], other = GROUPS.filter(function (x) { return x !== g; });
        var wrong = g.filter(function (u) { return u !== it[1]; }).concat(H.shuffle([].concat.apply([], other), r));
        return H.Q(it[0].replace('＿', '（　　）') + '。括號裡最適合填哪個單位？',
          it[2], H.mc(it[1], wrong, function (u) { return u; }), { thing: it[0] });
      } },
      // d3（列舉）面積幾公頃的長方形，長和寬可能是多少
      { k: 'sideSet', d: 3, n: 4, f: function (r) {
        var ha = H.ri(r, 1, 6), A = ha * 10000;
        var pairs = function (S) { var out = []; for (var w = 20; w * w <= S; w += 10) if (S % w === 0 && (S / w) % 10 === 0 && S / w <= 2000) out.push([S / w, w]); return out; };
        var good = H.shuffle(pairs(A), r).slice(0, H.ri(r, 2, 3)), bad = H.shuffle(pairs(A / 10).concat(pairs(A * 10)), r).slice(0, 5 - good.length);
        if (good.length < 2 || bad.length < 5 - good.length) return null;
        var cand = H.shuffle(good.concat(bad), r).map(function (p) { return p[0] % 100 === 0 && r() < 0.4 ? { l: D(p[0], 1000), lu: '公里', w: p[1] } : { l: String(p[0]), lu: '公尺', w: p[1] }; });
        var showP = function (o) { return '長 ' + o.l + ' ' + o.lu + '、寬 ' + o.w + ' 公尺'; };
        var ok = function (o) { return good.some(function (p) { return (o.lu === '公里' ? H.mul(H.fromDec(o.l), 1000)[0] : +o.l) === p[0] && o.w === p[1]; }); };
        return H.Q('一塊長方形土地的面積是 ' + ha + ' 公頃。它的長和寬可能是下面哪些？<b>全部選出來。</b>',
          ha + ' 公頃＝' + C(A) + ' 平方公尺，長×寬要等於 ' + C(A) + '（公里先換成公尺）：' + cand.map(function (o) { var L = o.lu === '公里' ? H.mul(H.fromDec(o.l), 1000)[0] : +o.l; return L + '×' + o.w + '＝' + C(L * o.w); }).join('；') + '。',
          H.set(cand, ok, showP), { ha: ha });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
