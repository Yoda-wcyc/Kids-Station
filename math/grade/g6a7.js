/* 六上 單元七 圓面積與扇形面積（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a7.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, PI = H.fromDec('3.14'), INK = H.INK, FILL = '#ffd8a8';
  var D = function (x) { return H.fmt(x, 'dec'); };
  var P = function (n) { return n.toFixed(1); };
  var E = function (ans, list) { return list.filter(function (e) { return !H.eq(e[0], ans); }); };
  var circleA = function (rr) { return H.mul(PI, rr * rr); };
  var two = function (x) { return H.mul(x, 100)[1] === 1; };   // 最多兩位小數
  function circ(lab) {
    var R = 70, cx = 100, cy = 90;
    return H.svg(200, 180, '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' +
      '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + R) + '" y2="' + cy + '" stroke="#d9480f" stroke-width="3"/>' + H.txt(cx + R / 2, cy - 8, lab, { fs: 15, c: '#d9480f' }), '圓');
  }
  function sec(deg, lab) {
    var R = 80, cx = 110, cy = 100, a0 = -Math.PI / 2, a1 = a0 + deg * Math.PI / 180, am = (a0 + a1) / 2;
    var b = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#9aa9b8" stroke-width="1.5" stroke-dasharray="5 5"/>' +
      '<path d="M' + cx + ',' + cy + ' L' + P(cx + R * Math.cos(a0)) + ',' + P(cy + R * Math.sin(a0)) + ' A' + R + ',' + R + ' 0 ' + (deg > 180 ? 1 : 0) + ' 1 ' + P(cx + R * Math.cos(a1)) + ',' + P(cy + R * Math.sin(a1)) + ' Z" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2.5"/>' +
      H.txt(cx - 6, cy - R / 2, lab, { a: 'end', fs: 15 }) + H.txt(P(cx + 30 * Math.cos(am)), P(cy + 30 * Math.sin(am) + 5), deg + '°', { fs: 14, c: '#d9480f' });
    return H.svg(250, 200, b, '圓心角 ' + deg + ' 度的扇形');
  }
  // 小扇形排成近似長方形（上下交錯的鋸齒）
  function strip() {
    var n = 8, w = 30, h = 70, x0 = 20, y0 = 20, b = '';
    for (var i = 0; i < n; i++) {
      var x = x0 + i * w;
      b += '<path d="M' + x + ',' + (y0 + h) + ' L' + (x + w / 2) + ',' + y0 + ' L' + (x + w) + ',' + (y0 + h) + ' Q' + (x + w / 2) + ',' + (y0 + h + 8) + ' ' + x + ',' + (y0 + h) + ' Z" fill="' + FILL + '" stroke="' + INK + '" stroke-width="1.5"/>';
      if (i < n - 1) b += '<path d="M' + (x + w / 2) + ',' + y0 + ' L' + (x + w) + ',' + (y0 + h) + ' L' + (x + w * 1.5) + ',' + y0 + ' Q' + (x + w) + ',' + (y0 - 8) + ' ' + (x + w / 2) + ',' + y0 + ' Z" fill="#d6ecff" stroke="' + INK + '" stroke-width="1.5"/>';
    }
    b += H.txt(x0 + n * w / 2, y0 + h + 30, '長≒圓周長的一半＝半徑×3.14', { fs: 14 }) + H.txt(x0 + n * w + 8, y0 + h / 2 + 5, '寬＝半徑', { fs: 14, a: 'start' });
    return H.svg(360, 130, b, '小扇形排成近似長方形');
  }
  // 複合圖形：a＝正方形挖掉四分之一圓、b＝正方形挖掉內切圓、c＝拱門（長方形＋半圓）
  function comp(kind, labs) {
    var b = '', x = 30, y = 20, s = 140;
    if (kind === 'a') b = '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' +
      '<path d="M' + x + ',' + (y + s) + ' L' + x + ',' + y + ' A' + s + ',' + s + ' 0 0 1 ' + (x + s) + ',' + (y + s) + ' Z" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' + H.txt(x + s / 2, y + s + 22, labs[0]);
    if (kind === 'b') b = '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' +
      '<circle cx="' + (x + s / 2) + '" cy="' + (y + s / 2) + '" r="' + s / 2 + '" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<line x1="' + (x + s / 2) + '" y1="' + (y + s / 2) + '" x2="' + (x + s) + '" y2="' + (y + s / 2) + '" stroke="#d9480f" stroke-width="2"/>' + H.txt(x + s * 0.75, y + s / 2 - 6, labs[0], { fs: 14, c: '#d9480f' });
    if (kind === 'c') { var hh = 90, r0 = s / 2; y = 20 + r0;
      b = '<path d="M' + x + ',' + (y + hh) + ' L' + x + ',' + y + ' A' + r0 + ',' + r0 + ' 0 0 1 ' + (x + s) + ',' + y + ' L' + (x + s) + ',' + (y + hh) + ' Z" fill="' + FILL + '" stroke="' + INK + '" stroke-width="2"/>' +
        '<line x1="' + x + '" y1="' + y + '" x2="' + (x + s) + '" y2="' + y + '" stroke="#9aa9b8" stroke-dasharray="5 5"/>' + H.txt(x + s / 2, y + hh + 22, labs[0]) + H.txt(x + s + 8, y + hh / 2 + 5, labs[1], { a: 'start' });
      return H.svg(s + 140, y + hh + 34, b, '拱門形'); }
    return H.svg(s + 80, s + 50, b, kind === 'a' ? '正方形挖掉四分之一圓' : '正方形挖掉圓');
  }
  var SH = { r: '半徑 # 公分的圓', d: '直徑 # 公分的圓', semi: '半徑 # 公分的半圓', sq: '邊長 # 公分的正方形' };
  var showS = function (o) { return SH[o.k].replace('#', o.x); };
  var areaS = function (o) { return o.k === 'r' ? circleA(o.x) : o.k === 'd' ? H.mul(PI, H.mul(H.R(o.x, 2), H.R(o.x, 2))) : o.k === 'semi' ? H.div(circleA(o.x), 2) : H.R(o.x * o.x); };
  var GOAT = [[360, '一大片空地正中間的木樁上', '一整個圓'], [180, '一面很長的直牆邊的木樁上（牆擋住一半）', '半個圓'], [270, '一間很大的方形房子牆角外面的木樁上', '[[3/4]] 個圓'], [90, '方形圍牆裡面牆角的木樁上', '[[1/4]] 個圓']];

  MG.unit({
    id: 'g6a7', pending: '待課本核對',
    cards: [
      { t: '圓面積＝半徑×半徑×3.14。',
        ex: '半徑 5 公分的圓：5×5×3.14＝25×3.14＝<b>78.5 平方公分</b>。',
        why: '面積的單位是「平方」公分，所以半徑要乘兩次；3.14 是圓周率。', svg: circ('5 cm') },
      { t: '為什麼？把圓切成很多小扇形，上下交錯排，會變成差不多是長方形。',
        ex: '半徑 10 公分的圓：長≒圓周長的一半＝10×2×3.14÷2＝31.4，寬＝半徑 10。<br>長方形面積＝31.4×10＝<b>314 平方公分</b>＝10×10×3.14。',
        why: '切得越細，排出來越像長方形。長是半個圓周（半徑×3.14），寬是半徑，相乘就是半徑×半徑×3.14。', svg: strip() },
      { t: '只給直徑？先÷2 變成半徑，再算。',
        ex: '直徑 12 公分的圓：半徑＝12÷2＝6，6×6×3.14＝<b>113.04 平方公分</b>。',
        why: '直接拿直徑乘直徑，會算成 4 倍大，這是最常見的錯。' },
      { t: '扇形面積＝圓面積×[[圓心角/360]]。',
        ex: '半徑 6 公分、圓心角 120 度：6×6×3.14＝113.04；120 度是 [[120/360]]＝[[1/3]] 個圓，113.04÷3＝<b>37.68 平方公分</b>。',
        why: '一整圈 360 度，圓心角占整圈的幾分之幾，扇形面積就是圓面積的幾分之幾。', svg: sec(120, '6 cm') },
      { t: '複合圖形：大的減掉挖掉的，或拆成幾塊再加起來。',
        ex: '邊長 10 公分的正方形，挖掉半徑 10 公分的四分之一圓：<br>100－10×10×3.14÷4＝100－78.5＝<b>21.5 平方公分</b>。',
        why: '面積可以加、可以減：先看出圖形是由哪些「會算的形狀」組成。', svg: comp('a', ['10 cm']) }
    ],
    gens: [
      // d1 半徑 → 圓面積
      { k: 'ar', d: 1, n: 7, f: function (r) {
        var rr = H.ri(r, 1, 20), a = circleA(rr);
        return H.Q('半徑 ' + rr + ' 公分的圓，面積是幾平方公分？（圓周率用 3.14）',
          '半徑×半徑×3.14＝' + rr + '×' + rr + '×3.14＝' + rr * rr + '×3.14＝' + D(a) + '（平方公分）。',
          H.num(a, { suf: '平方公分', err: E(a, [[H.mul(PI, 2 * rr), '這是圓周長；面積是半徑×半徑×3.14。'], [H.mul(PI, rr), '半徑要乘兩次：半徑×半徑×3.14。']]) }), { r: rr });
      } },
      // d1 直徑 → 圓面積
      { k: 'ad', d: 1, n: 5, f: function (r) {
        var d = 2 * H.ri(r, 2, 20), a = circleA(d / 2);
        return H.Q('直徑 ' + d + ' 公分的圓，面積是幾平方公分？（圓周率用 3.14）',
          '半徑＝' + d + '÷2＝' + d / 2 + '；' + d / 2 + '×' + d / 2 + '×3.14＝' + D(a) + '（平方公分）。',
          H.num(a, { suf: '平方公分', err: E(a, [[H.mul(PI, d * d), '直徑要先÷2 變成半徑，再半徑×半徑×3.14。'], [H.mul(PI, d), '這是圓周長，不是面積。']]) }), { d: d });
      } },
      // d1 切成小扇形排成近似長方形：長、寬
      { k: 'rect', d: 1, n: 4, f: function (r) {
        var rr = H.ri(r, 2, 20), L = H.mul(PI, rr);
        return H.Q('把半徑 ' + rr + ' 公分的圓切成很多很小的扇形，上下交錯排成一個近似長方形。這個長方形的長大約幾公分、寬是幾公分？（圓周率用 3.14）',
          '長是圓周長的一半：' + rr + '×2×3.14÷2＝' + D(L) + '；寬就是半徑 ' + rr + '。長×寬＝' + D(H.mul(L, rr)) + '，正好是圓面積。',
          H.nums([L, rr], ['公分（長）', '公分（寬）'], { err: [[H.mul(PI, 2 * rr), '這是整個圓周長；上下各用掉一半，長是圓周長的一半。']] }), { r: rr }, { svg: strip() });
      } },
      // d2 已知圓面積求半徑／直徑
      { k: 'inv', d: 2, n: 4, f: function (r, _, i) {
        var rr = H.ri(r, 2, 20), a = circleA(rr), askD = i % 2 === 1;
        return H.Q('一個圓的面積是 ' + D(a) + ' 平方公分，它的' + (askD ? '直徑' : '半徑') + '是幾公分？（圓周率用 3.14）',
          D(a) + '÷3.14＝' + rr * rr + '，' + rr * rr + '＝' + rr + '×' + rr + '，所以半徑是 ' + rr + (askD ? '，直徑＝' + rr + '×2＝' + 2 * rr : '') + '（公分）。',
          H.num(askD ? 2 * rr : rr, { suf: '公分', err: askD ? [[rr, '這是半徑，直徑還要×2。']] : [[rr * rr, '半徑×半徑＝' + rr * rr + '，還要想「哪個數自己乘自己是 ' + rr * rr + '」。']] }), { a: a, askD: askD });
      } },
      // d2 扇形面積
      { k: 'sec', d: 2, n: 6, f: function (r) {
        var deg = H.pick(r, [30, 45, 60, 120, 135, 150, 180, 240, 270, 300]), ok = [];
        for (var x = 2; x <= 20; x++) if (two(H.mul(circleA(x), H.R(deg, 360)))) ok.push(x);   // 答案最多兩位小數的半徑
        if (!ok.length) return null;
        var rr = H.pick(r, ok), full = circleA(rr), a = H.mul(full, H.R(deg, 360));
        return H.Q('一個扇形的半徑是 ' + rr + ' 公分、圓心角 ' + deg + ' 度，面積是幾平方公分？（圓周率用 3.14）',
          '整個圓：' + rr + '×' + rr + '×3.14＝' + D(full) + '；' + deg + ' 度是 ' + H.fr(deg, 360) + '＝' + H.fmt(H.R(deg, 360)) + ' 個圓：' + D(full) + '×' + H.fmt(H.R(deg, 360)) + '＝' + D(a) + '（平方公分）。',
          H.num(a, { suf: '平方公分', err: E(a, [[full, '這是整個圓，還要乘 ' + H.fmt(H.R(deg, 360)) + '。']]) }), { r: rr, deg: deg }, { svg: sec(deg, rr + ' cm') });
      } },
      // d2 哪一個圖形面積最大／最小（選擇）
      { k: 'big', d: 2, n: 4, f: function (r, _, i) {
        var os = H.shuffle(['r', 'd', 'semi', 'sq'], r).map(function (k) { return { k: k, x: k === 'd' ? 2 * H.ri(r, 3, 10) : H.ri(r, 3, 12) }; });
        for (var a = 0; a < 4; a++) for (var b = a + 1; b < 4; b++) if (H.eq(areaS(os[a]), areaS(os[b]))) return null;
        var big = i % 2 === 0, sorted = os.slice().sort(function (x, y) { return H.cmp(areaS(y), areaS(x)) * (big ? 1 : -1); });
        return H.Q('下面哪一個圖形的面積' + (big ? '最大' : '最小') + '？（圓周率用 3.14）',
          os.map(function (o) { return showS(o) + '：' + D(areaS(o)); }).join('；') + '（平方公分）。',
          H.mc(sorted[0], sorted.slice(1), showS), { os: os, big: big });
      } },
      // d2 列出全部：哪些扇形面積超過 T
      { k: 'over', d: 2, n: 4, f: function (r) {
        var rr = H.pick(r, [6, 12]), degs = H.shuffle([30, 45, 60, 90, 120, 150, 180, 240, 270], r).slice(0, 5);
        var s = degs.slice().sort(function (a, b) { return a - b; }), area = function (g) { return H.mul(circleA(rr), H.R(g, 360)); };
        if (!degs.every(function (g) { return two(area(g)); })) return null;
        var j = H.ri(r, 1, 2), lo = area(s[j]), T = Math.floor(lo[0] / lo[1]) + 1;
        if (H.cmp(T, area(s[j + 1])) >= 0) return null;
        return H.Q('從半徑 ' + rr + ' 公分的圓切出下面這些扇形（圓周率用 3.14）。哪些扇形的面積大於 ' + T + ' 平方公分？<b>全部選出來。</b>',
          '整個圓是 ' + D(circleA(rr)) + '。' + s.map(function (g) { return g + ' 度：' + D(area(g)); }).join('；') + '。比 ' + T + ' 大的才選。',
          H.set(degs, function (g) { return H.cmp(area(g), T) > 0; }, function (g) { return '圓心角 ' + g + ' 度'; }), { r: rr, T: T, degs: degs });
      } },
      // d3 複合圖形
      { k: 'cut', d: 3, n: 6, f: function (r, _, i) {
        var kind = ['a', 'b', 'c'][i % 3];
        if (kind === 'a') {
          var a = 2 * H.ri(r, 2, 10), q = H.div(circleA(a), 4), ans = H.sub(a * a, q);
          return H.Q('邊長 ' + a + ' 公分的正方形，以一個角為圓心、' + a + ' 公分為半徑畫四分之一圓，把它挖掉。剩下（塗色）的面積是幾平方公分？（圓周率用 3.14）',
            '正方形 ' + a + '×' + a + '＝' + a * a + '；四分之一圓 ' + a + '×' + a + '×3.14÷4＝' + D(q) + '；' + a * a + '－' + D(q) + '＝' + D(ans) + '（平方公分）。',
            H.num(ans, { suf: '平方公分', err: [[q, '這是挖掉的四分之一圓，題目問剩下的。']] }), { kind: kind, a: a }, { svg: comp('a', [a + ' cm']) });
        }
        if (kind === 'b') {
          var rr = H.ri(r, 2, 15), c = circleA(rr), ans2 = H.sub(4 * rr * rr, c);
          return H.Q('邊長 ' + 2 * rr + ' 公分的正方形裡，剛好放進一個最大的圓（半徑 ' + rr + ' 公分）。圓外面、正方形裡面（塗色）四個角加起來是幾平方公分？（圓周率用 3.14）',
            '正方形 ' + 2 * rr + '×' + 2 * rr + '＝' + 4 * rr * rr + '；圓 ' + rr + '×' + rr + '×3.14＝' + D(c) + '；' + 4 * rr * rr + '－' + D(c) + '＝' + D(ans2) + '（平方公分）。',
            H.num(ans2, { suf: '平方公分', err: E(ans2, [[c, '這是圓，題目問圓外面的四個角。']]) }), { kind: kind, r: rr }, { svg: comp('b', [rr + ' cm']) });
        }
        var r3 = H.ri(r, 2, 10), h = H.ri(r, 3, 15), semi = H.div(circleA(r3), 2), ans3 = H.add(2 * r3 * h, semi);
        return H.Q('一個拱門形的圖形：下面是長 ' + 2 * r3 + ' 公分、高 ' + h + ' 公分的長方形，上面接一個直徑 ' + 2 * r3 + ' 公分的半圓。整個圖形的面積是幾平方公分？（圓周率用 3.14）',
          '長方形 ' + 2 * r3 + '×' + h + '＝' + 2 * r3 * h + '；半圓 ' + r3 + '×' + r3 + '×3.14÷2＝' + D(semi) + '；合起來 ' + D(ans3) + '（平方公分）。',
          H.num(ans3, { suf: '平方公分', err: [[H.add(2 * r3 * h, H.div(H.mul(PI, 4 * r3 * r3), 2)), '半圓的半徑是直徑÷2＝' + r3 + '。'], [H.add(2 * r3 * h, circleA(r3)), '上面只有半個圓，要÷2。']] }), { kind: kind, r: r3, h: h }, { svg: comp('c', [2 * r3 + ' cm', h + ' cm']) });
      } },
      // d3 圓環（水池外的步道）
      { k: 'ring', d: 3, n: 4, f: function (r) {
        var R0 = H.ri(r, 5, 20), r0 = H.ri(r, 2, R0 - 2), ans = H.sub(circleA(R0), circleA(r0));
        return H.Q('圓形水池的半徑是 ' + r0 + ' 公尺，水池外面圍了一圈步道，連步道一起是半徑 ' + R0 + ' 公尺的大圓。步道的面積是幾平方公尺？（圓周率用 3.14）',
          '大圓 ' + R0 + '×' + R0 + '×3.14＝' + D(circleA(R0)) + '；水池 ' + r0 + '×' + r0 + '×3.14＝' + D(circleA(r0)) + '；相減＝' + D(ans) + '（平方公尺）。',
          H.num(ans, { suf: '平方公尺', err: E(ans, [[circleA(R0 - r0), '不能先把半徑相減；要大圓面積減水池面積。']]) }), { R: R0, r: r0 });
      } },
      // d3 綁羊：能吃到幾分之幾個圓
      { k: 'goat', d: 3, n: 4, f: function (r) {
        var g = H.pick(r, GOAT), L = H.ri(r, 2, 10), ans = H.mul(circleA(L), H.R(g[0], 360));
        if (!two(ans)) return null;
        return H.Q('用 ' + L + ' 公尺長的繩子，把小羊綁在' + g[1] + '。小羊吃得到草的範圍，面積最大是幾平方公尺？（圓周率用 3.14）',
          '繩長就是半徑 ' + L + '，能走到的是' + g[2] + '：' + L + '×' + L + '×3.14×' + H.fmt(H.R(g[0], 360)) + '＝' + D(ans) + '（平方公尺）。',
          H.num(ans, { suf: '平方公尺', err: E(ans, [[circleA(L), '有東西擋住，羊走不到整個圓。'], [H.mul(PI, 2 * L), '這是圓周長，不是面積。']]) }), { deg: g[0], L: L });
      } },
      // d1 選算式（選擇）
      { k: 'fml', d: 1, n: 4, f: function (r, _, i) {
        var m = H.ri(r, 3, 15), byD = i % 2 === 1, d = 2 * m;
        var ans = m + '×' + m + '×3.14', wrong = byD ? [d + '×' + d + '×3.14', d + '×3.14', m + '×2×3.14'] : [m + '×2×3.14', m + '×' + m, d + '×' + d + '×3.14'];
        return H.Q((byD ? '直徑 ' + d : '半徑 ' + m) + ' 公分的圓，面積要怎麼算？',
          (byD ? '直徑 ' + d + ' 先÷2，半徑是 ' + m + '；' : '') + '圓面積＝半徑×半徑×3.14＝' + ans + '。',
          H.mc(ans, wrong), { m: m });
      } },
      // d3 列出全部：正方形用不同挖法，剩下的面積哪些一樣
      { k: 'same', d: 3, n: 4, f: function (r, _, i) {
        var a = 2 * (2 + 2 * i + H.ri(r, 0, 1)), h = a / 2,   // 每題邊長不同，題目不重複
 Y = H.sub(a * a, H.mul(PI, h * h)), cand = H.shuffle([{ k: 'q', x: a }, { k: 'in', x: h }, { k: 'q4', x: h }, { k: 'semi', x: a }, { k: 'q1', x: h }], r);
        var cut = function (c) { return c.k === 'q' ? H.div(circleA(c.x), 4) : c.k === 'in' || c.k === 'q4' ? circleA(c.x) : c.k === 'semi' ? H.div(circleA(c.x / 2), 2) : H.div(circleA(c.x), 4); };
        var show = function (c) { return { q: '挖掉一個半徑 # 公分的四分之一圓（圓心在一個角）', 'in': '挖掉一個最大的圓（半徑 # 公分）', q4: '四個角各挖掉半徑 # 公分的四分之一圓', semi: '挖掉一個直徑 # 公分的半圓', q1: '只在一個角挖掉半徑 # 公分的四分之一圓' }[c.k].replace('#', c.x); };
        return H.Q('邊長 ' + a + ' 公分的正方形紙，用下面不同的方法挖掉圓形部分。哪些挖法剩下的面積剛好是 ' + D(Y) + ' 平方公分？（圓周率用 3.14）<b>全部選出來。</b>',
          '正方形 ' + a * a + '。' + cand.map(function (c) { return show(c) + '：挖掉 ' + D(cut(c)) + '，剩 ' + D(H.sub(a * a, cut(c))); }).join('；') + '。半徑 ' + a + ' 的四分之一圓、半徑 ' + h + ' 的整個圓，面積一樣大。',
          H.set(cand, function (c) { return H.eq(H.sub(a * a, cut(c)), Y); }, show), { a: a, Y: Y, cand: cand });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
