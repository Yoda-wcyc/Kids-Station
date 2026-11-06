/* 五下 單元三 容積（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b3.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma, D = function (r) { return H.fmt(r, 'dec'); };
  // 剖面圖：容器（外框＋內部），t＝厚度字，lid＝有蓋子
  function wall(lid) {
    var I = H.INK, body = '<rect x="40" y="20" width="240" height="140" fill="#9aa9b8" stroke="' + I + '" stroke-width="2"/>' +
      '<rect x="56" y="' + (lid ? 36 : 20) + '" width="208" height="' + (lid ? 108 : 124) + '" fill="#ffffff" stroke="' + I + '" stroke-width="1.5"/>' +
      H.txt(160, 96, '裡面才是能裝東西的地方', { fs: 14 }) + H.txt(300, 156, '← 厚度', { fs: 14, a: 'start' }) + H.txt(160, 186, '內部的長＝外部的長－厚度×2', { fs: 14 });
    return H.svg(400, 196, body, '容器剖面');
  }
  // 排水法側面圖：水位 a → b
  function tank(a, b) {
    var I = H.INK, y0 = 170, k = 10, ya = y0 - a * k, yb = y0 - b * k;
    var body = '<rect x="40" y="' + yb + '" width="200" height="' + (y0 - yb) + '" fill="#bfe3ff"/>' +
      '<line x1="40" y1="' + ya + '" x2="240" y2="' + ya + '" stroke="' + I + '" stroke-dasharray="6 4"/>' +
      '<circle cx="140" cy="150" r="18" fill="#8a7a6a"/>' +
      '<polyline points="40,20 40,170 240,170 240,20" fill="none" stroke="' + I + '" stroke-width="3"/>' +
      H.txt(250, ya + 5, '放之前', { fs: 13, a: 'start' }) + H.txt(250, yb + 5, '放之後', { fs: 13, a: 'start' });
    return H.svg(320, 186, body, '排水法');
  }

  MG.unit({
    id: 'g5b3', pending: '待課本核對',
    cards: [
      { t: '容積＝容器裡面能裝多少。用「內部」的長×寬×高來算。',
        ex: '水箱內部長 30 公分、寬 20 公分、高 15 公分：30×20×15＝<b>9,000 立方公分</b>。',
        why: '容器的壁有厚度，壁本身佔的地方裝不了水，所以只看裡面的空間。', svg: H.box(150, 90, 70, ['內部長 30 cm', '內部寬 20 cm', '內部高 15 cm']) },
      { t: '有厚度時：長、寬各要扣掉「兩邊」的厚度；沒有蓋子的，高只扣底部一層。',
        ex: '沒有蓋子的盒子外部長 22、寬 12、高 10 公分，厚 1 公分：<br>內部長 22－2＝20、寬 12－2＝10、高 10－1＝9 → 20×10×9＝<b>1,800 立方公分</b>。',
        why: '左右兩邊都有一片壁，所以長要減 2 個厚度；上面沒有蓋子，高度只有底下那片要減。', svg: wall(false) },
      { t: '1 公升＝1,000 立方公分，1 毫升＝1 立方公分。',
        ex: '2.5 公升＝2.5×1,000＝<b>2,500 立方公分</b>；350 毫升＝<b>350 立方公分</b>；1,800 立方公分＝<b>1.8 公升</b>。',
        why: '內部邊長 10 公分的正方體容器剛好裝 1 公升水，10×10×10＝1,000 立方公分。1 公升又是 1,000 毫升，所以 1 毫升＝1 立方公分。' },
      { t: '形狀不規則的東西：放進水裡，水位上升的那一塊體積，就是它的體積。',
        ex: '水缸內部長 20、寬 15 公分，放進石頭後水位從 8 公分升到 11 公分：<br>20×15×(11－8)＝300×3＝<b>900 立方公分</b>。',
        why: '石頭沉進水裡會「擠走」跟自己一樣大的水，水只好往上跑。上升的那一層水是長方體，算得出來。', svg: tank(8, 11) },
      { t: '生活中的容量：先把單位換成一樣，再算。',
        ex: '水壺裝 1.2 公升水，倒出 3 杯、每杯 250 毫升：1.2 公升＝1,200 毫升，1,200－250×3＝<b>450 毫升</b>。',
        why: '公升和毫升混在一起不能直接加減，換成同一個單位才不會出錯。' }
    ],
    gens: [
      // d1 內部長寬高 → 容積
      { k: 'inner', d: 1, n: 7, f: function (r) {
        var l = H.ri(r, 8, 40), w = H.ri(r, 5, Math.min(25, l)), h = H.ri(r, 4, 20), v = l * w * h;
        return H.Q('一個長方體容器，內部長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分。它的容積是幾立方公分？',
          '容積＝內部的長×寬×高＝' + l + '×' + w + '×' + h + '＝' + C(v) + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: [[l + w + h, '要相乘，不是相加。'], [l * w, '這只是底面積，還要乘高。']] }), { l: l, w: w, h: h });
      } },
      // d1 單位換算
      { k: 'unit', d: 1, n: 7, f: function (r, _, i) {
        var t = i % 4, x;
        if (t === 0) {
          x = H.R(H.ri(r, 2, 95), 10);
          return H.Q(D(x) + ' 公升＝幾立方公分？', '1 公升＝1,000 立方公分，' + D(x) + '×1,000＝' + C(H.mul(x, 1000)[0]) + '（立方公分）。',
            H.num(H.mul(x, 1000), { suf: '立方公分', err: [[H.mul(x, 100), '1 公升是 1,000 立方公分，不是 100。'], [x, '單位不一樣，要乘 1,000。']] }), { t: t, x: x });
        }
        if (t === 1) {
          x = H.ri(r, 3, 95) * 100;
          return H.Q(C(x) + ' 立方公分＝幾公升？', '1,000 立方公分＝1 公升，' + C(x) + '÷1,000＝' + D(H.R(x, 1000)) + '（公升）。',
            H.num(H.R(x, 1000), { suf: '公升', err: [[H.R(x, 100), '要除以 1,000，不是 100。']] }), { t: t, x: x });
        }
        if (t === 2) {
          x = H.ri(r, 5, 95) * 10;
          return H.Q(x + ' 毫升＝幾立方公分？', '1 毫升＝1 立方公分，所以 ' + x + ' 毫升＝' + x + ' 立方公分。',
            H.num(x, { suf: '立方公分', err: [[x * 1000, '1 毫升就是 1 立方公分，不用乘 1,000。']] }), { t: t, x: x });
        }
        x = H.ri(r, 1, 9) * 1000 + H.ri(r, 1, 99) * 10;
        return H.Q(C(x) + ' 立方公分＝幾公升幾毫升？', '1,000 立方公分＝1 公升、1 立方公分＝1 毫升：' + C(x) + '＝' + Math.floor(x / 1000) + ' 個 1,000，再多 ' + x % 1000 + '，所以是 ' + Math.floor(x / 1000) + ' 公升 ' + x % 1000 + ' 毫升。',
          H.nums([Math.floor(x / 1000), x % 1000], ['公升', '毫升']), { t: t, x: x });
      } },
      // d1 容積換成公升
      { k: 'toL', d: 1, n: 5, f: function (r) {
        var S = [10, 12, 15, 20, 25, 30, 40, 50], l = H.pick(r, S), w = H.pick(r, S), h = H.pick(r, [10, 20, 30, 40]), v = l * w * h;
        if (w > l) return null;
        return H.Q('魚缸內部長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分，裝滿水是幾公升？',
          '容積 ' + l + '×' + w + '×' + h + '＝' + C(v) + ' 立方公分；1,000 立方公分＝1 公升，' + C(v) + '÷1,000＝' + D(H.R(v, 1000)) + '（公升）。',
          H.num(H.R(v, 1000), { suf: '公升', err: [[v, '這是立方公分，還要換成公升（÷1,000）。'], [H.R(v, 100), '要除以 1,000，不是 100。']] }), { l: l, w: w, h: h });
      } },
      // d2 扣厚度（沒有蓋子）
      { k: 'thick', d: 2, n: 6, f: function (r) {
        var t = H.ri(r, 1, 2), l = H.ri(r, 8, 30), w = H.ri(r, 6, Math.min(20, l)), h = H.ri(r, 5, 18), L = l + 2 * t, W = w + 2 * t, Hh = h + t, v = l * w * h;
        return H.Q('一個沒有蓋子的長方體木盒，外部長 ' + L + ' 公分、寬 ' + W + ' 公分、高 ' + Hh + ' 公分，木板厚 ' + t + ' 公分。它的容積是幾立方公分？',
          '內部長 ' + L + '－' + t + '×2＝' + l + '、寬 ' + W + '－' + t + '×2＝' + w + '、高 ' + Hh + '－' + t + '＝' + h + '（沒蓋子，只扣底）。' + l + '×' + w + '×' + h + '＝' + C(v) + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: [[L * W * Hh, '這是外部的體積，要先扣掉木板的厚度。'], [(L - t) * (W - t) * (Hh - t), '長和寬兩邊都有木板，要扣 2 個厚度。'], [l * w * (Hh - 2 * t), '沒有蓋子，高只要扣底部那一片。']] }),
          { L: L, W: W, H: Hh, t: t }, { svg: H.box(Math.min(L, 30) * 5, Math.min(W, 20) * 5, Math.min(Hh, 18) * 5, ['外長 ' + L + ' cm', '外寬 ' + W + ' cm', '外高 ' + Hh + ' cm']) });
      } },
      // d2 排水法
      { k: 'water', d: 2, n: 5, f: function (r) {
        var l = H.pick(r, [10, 12, 15, 20, 24, 25, 30]), w = H.pick(r, [8, 10, 12, 15, 20]), a = H.ri(r, 5, 12), rise = H.R(H.ri(r, 2, 10), 2), b = H.add(a, rise), v = H.mul(l * w, rise);
        if (w > l) return null;
        var thing = H.pick(r, ['一顆石頭', '一個鐵球', '一塊玩具積木（會沉下去）', '一個陶瓷小狗']);
        return H.Q('長方體水缸內部長 ' + l + ' 公分、寬 ' + w + ' 公分，水深 ' + a + ' 公分。放進' + thing + '完全沉到水裡後，水深變成 ' + D(b) + ' 公分。它的體積是幾立方公分？',
          '水位上升 ' + D(b) + '－' + a + '＝' + D(rise) + ' 公分；上升的水＝' + l + '×' + w + '×' + D(rise) + '＝' + D(v) + '（立方公分），就是它的體積。',
          H.num(v, { suf: '立方公分', err: [[H.mul(l * w, b), '要用「上升的高度」，不是後來的水深。'], [H.mul(l * w, a), '這是原來水的體積。']] }), { l: l, w: w, a: a, b: b }, { svg: tank(a, b) });
      } },
      // d2 水有幾公升／毫升
      { k: 'fill', d: 2, n: 4, f: function (r, _, i) {
        var l = H.pick(r, [20, 25, 30, 40, 50]), w = H.pick(r, [10, 15, 20, 30]), h = H.pick(r, [20, 25, 30]), x = H.ri(r, 4, h - 2), v = l * w * x, ml = i % 2;
        if (w > l) return null;
        return H.Q('長方體水箱內部長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分，現在水深 ' + x + ' 公分。水有幾' + (ml ? '毫升' : '公升') + '？',
          '水的體積看水深，不是看容器高：' + l + '×' + w + '×' + x + '＝' + C(v) + ' 立方公分' + (ml ? '＝' + C(v) + ' 毫升。' : '＝' + D(H.R(v, 1000)) + ' 公升。'),
          H.num(ml ? v : H.R(v, 1000), { suf: ml ? '毫升' : '公升', err: [[ml ? l * w * h : H.R(l * w * h, 1000), '題目問現在的水，要用水深 ' + x + ' 公分，不是容器的高。']] }), { l: l, w: w, x: x, ml: ml });
      } },
      // d2 單位比較（選擇）
      { k: 'same', d: 2, n: 5, f: function (r, _, i) {
        if (i % 2) {
          var c = H.ri(r, 12, 95) * 100, ans = H.R(c, 1000);
          return H.Q(C(c) + ' 立方公分和下面哪一個一樣多？', '1,000 立方公分＝1 公升，' + C(c) + '÷1,000＝' + D(ans) + '，所以是 ' + D(ans) + ' 公升。',
            H.mc(ans, [H.R(c, 100), H.R(c, 10), H.R(c, 10000), H.R(c, 1)], function (x) { return D(x) + ' 公升'; }), { c: c });
        }
        var x = H.R(H.ri(r, 12, 95), 10), cm = H.mul(x, 1000);
        return H.Q(D(x) + ' 公升和下面哪一個一樣多？', '1 公升＝1,000 立方公分，' + D(x) + '×1,000＝' + C(cm[0]) + '（立方公分）。',
          H.mc(cm, [H.mul(x, 100), H.mul(x, 10), H.mul(x, 10000), H.mul(x, 1000000)], function (y) { return C(D(y)) + ' 立方公分'; }), { x: x });
      } },
      // d3 扣厚度再換公升（有蓋或沒蓋）
      { k: 'thickL', d: 3, n: 4, f: function (r, _, i) {
        var lid = i % 2 === 1, t = H.ri(r, 1, 2), l = H.pick(r, [20, 25, 30, 40]), w = H.pick(r, [10, 15, 20, 25]), h = H.pick(r, [10, 20, 30]);
        var L = l + 2 * t, W = w + 2 * t, Hh = h + (lid ? 2 : 1) * t, v = l * w * h;
        if (w > l) return null;
        return H.Q('一個' + (lid ? '有蓋子' : '沒有蓋子') + '的長方體保麗龍箱，外部長 ' + L + ' 公分、寬 ' + W + ' 公分、高 ' + Hh + ' 公分，每一面都厚 ' + t + ' 公分。裡面最多可以裝幾公升的冰塊？',
          '內部長 ' + l + '、寬 ' + w + '、高 ' + Hh + '－' + t + (lid ? '×2' : '') + '＝' + h + '（' + (lid ? '上下都有板子' : '沒蓋子只扣底') + '）。' + l + '×' + w + '×' + h + '＝' + C(v) + ' 立方公分＝' + D(H.R(v, 1000)) + ' 公升。',
          H.num(H.R(v, 1000), { suf: '公升', err: [[H.R(L * W * Hh, 1000), '這是外部的體積，要先扣掉厚度。'], [v, '這是立方公分，還要換成公升。']] }), { L: L, W: W, H: Hh, t: t, lid: lid });
      } },
      // d3 好幾顆一樣的球
      { k: 'balls', d: 3, n: 4, f: function (r) {
        var l = H.pick(r, [20, 24, 25, 30, 40]), w = H.pick(r, [15, 20, 25]), rise = H.ri(r, 1, 3), tot = l * w * rise;
        var k = H.pick(r, [2, 3, 4, 5, 6].filter(function (x) { return tot % x === 0; })), each = tot / k;
        return H.Q('水缸內部長 ' + l + ' 公分、寬 ' + w + ' 公分。放進 ' + k + ' 顆一樣大的鐵球（都沉到水裡，水沒有溢出來），水位上升了 ' + rise + ' 公分。一顆球的體積是幾立方公分？',
          k + ' 顆一共是 ' + l + '×' + w + '×' + rise + '＝' + C(tot) + ' 立方公分；一顆是 ' + C(tot) + '÷' + k + '＝' + each + '（立方公分）。',
          H.num(each, { suf: '立方公分', err: [[tot, '這是 ' + k + ' 顆加起來的，還要 ÷' + k + '。']] }), { l: l, w: w, k: k, rise: rise });
      } },
      // d3 放進鐵塊，水深變多少
      { k: 'rise', d: 3, n: 4, f: function (r) {
        var l = H.pick(r, [20, 25, 30, 40]), w = H.pick(r, [10, 20, 25]), h = H.pick(r, [25, 30, 35]), a = H.ri(r, 8, 15), up = H.R(H.ri(r, 1, 8), 2), V = H.mul(l * w, up)[0], b = H.add(a, up);
        return H.Q('長方體水箱內部長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分，水深 ' + a + ' 公分。放進一塊 ' + C(V) + ' 立方公分的鐵塊（完全沉到水裡）後，水深變成幾公分？',
          '上升的高度＝鐵塊體積÷底面積＝' + C(V) + '÷(' + l + '×' + w + ')＝' + D(up) + ' 公分；水深 ' + a + '＋' + D(up) + '＝' + D(b) + '（公分）。',
          H.num(b, { suf: '公分', err: [[up, '這是上升了多少，還要加上原來的水深。']] }), { l: l, w: w, a: a, V: V });
      } },
      // d3 哪些容器裝得下（列出全部）
      { k: 'fit', d: 3, n: 5, f: function (r) {
        var X = H.pick(r, [3, 4, 5, 6, 8, 9, 12]), S = [10, 15, 20, 25, 30, 40], yes = [], no = [], seen = {};
        for (var t = 0; t < 60; t++) {
          var b = { l: H.pick(r, S), w: H.pick(r, S), h: H.pick(r, S) }, key = b.l + 'x' + b.w + 'x' + b.h, v = b.l * b.w * b.h;
          if (seen[key] || v > X * 2500 || v < X * 400) continue; seen[key] = 1;
          (v >= X * 1000 ? yes : no).push(b);
        }
        if (yes.length < 2 || no.length < 2) return null;
        var cand = H.shuffle(yes.slice(0, H.ri(r, 2, 3)).concat(no.slice(0, 2)), r), show = function (b) { return b.l + '×' + b.w + '×' + b.h; };
        return H.Q('要裝 ' + X + ' 公升的水。下面這些長方體容器（內部長×寬×高，單位公分），哪些<b>裝得下</b>？<b>全部選出來。</b>',
          X + ' 公升＝' + C(X * 1000) + ' 立方公分。' + cand.map(function (b) { return show(b) + '＝' + C(b.l * b.w * b.h); }).join('；') + '。不少於 ' + C(X * 1000) + ' 的才裝得下。',
          H.set(cand, function (b) { return b.l * b.w * b.h >= X * 1000; }, show), { X: X });
      } },
      // d3 裝滿再倒出
      { k: 'pour', d: 3, n: 4, f: function (r) {
        var l = H.pick(r, [20, 25, 30]), w = H.pick(r, [10, 15, 20]), h = H.pick(r, [10, 12, 15, 20]), cup = H.pick(r, [150, 180, 200, 250, 300]), v = l * w * h, k = H.ri(r, 2, Math.min(9, Math.floor(v / cup) - 1));
        if (k < 2) return null;
        var left = v - k * cup;
        return H.Q('班上的長方體水箱內部長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分，裝滿水。倒出 ' + k + ' 杯、每杯 ' + cup + ' 毫升，水箱還剩幾毫升？',
          '裝滿是 ' + l + '×' + w + '×' + h + '＝' + C(v) + ' 立方公分＝' + C(v) + ' 毫升；倒出 ' + cup + '×' + k + '＝' + C(k * cup) + ' 毫升；剩下 ' + C(v) + '－' + C(k * cup) + '＝' + C(left) + '（毫升）。',
          H.num(left, { suf: '毫升', err: [[k * cup, '這是倒出去的，題目問剩下的。'], [v, '還沒扣掉倒出去的水。']] }), { l: l, w: w, h: h, cup: cup, k: k });
      } },
      // d1 毫升和立方公分（選擇）
      { k: 'mlmc', d: 1, n: 4, f: function (r) {
        var ml = H.ri(r, 12, 95) * 10;
        return H.Q('一瓶飲料 ' + ml + ' 毫升，和下面哪一個一樣多？', '1 毫升＝1 立方公分，所以 ' + ml + ' 毫升＝' + ml + ' 立方公分。',
          H.mc(ml, [ml * 10, ml * 1000, ml * 100, H.R(ml, 10)], function (x) { return C(D(x)) + ' 立方公分'; }), { ml: ml });
      } },
      // d1 容積要用哪一組數（選擇）
      { k: 'whichmc', d: 1, n: 4, f: function (r) {
        var t = 1, l = H.ri(r, 10, 30), w = H.ri(r, 8, Math.min(20, l)), h = H.ri(r, 6, 15), ans = l * w * h;
        return H.Q('一個沒有蓋子的盒子，內部長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分；外部長 ' + (l + 2 * t) + ' 公分、寬 ' + (w + 2 * t) + ' 公分、高 ' + (h + t) + ' 公分。它的容積是多少？',
          '容積看「內部」：' + l + '×' + w + '×' + h + '＝' + C(ans) + '（立方公分）。外部的數字算出來是整個盒子佔的體積。',
          H.mc(ans, [(l + 2) * (w + 2) * (h + 1), l + w + h, l * w, (l + 2) * (w + 2) * h], function (x) { return C(x) + ' 立方公分'; }), { l: l, w: w, h: h });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
