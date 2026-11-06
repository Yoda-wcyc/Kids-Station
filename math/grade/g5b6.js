/* 五下 單元六 整數、小數除以整數（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b6.js。 */
(function (MG) {
  'use strict';
  var H = MG.H;
  var PLACE = ['整數', '小數第一位', '小數第二位', '小數第三位'];
  function p10(k) { var x = 1; while (k-- > 0) x *= 10; return x; }
  var dec = function (x) { return H.fmt(x, 'dec'); };
  // t／10^k 寫成剛好 k 位的小數字串（0.60 不會變 0.6）
  function decStr(t, k) { if (!k) return String(t); var s = String(t); while (s.length <= k) s = '0' + s; return s.slice(0, -k) + '.' + s.slice(-k); }
  // a÷b 四捨五入到小數第 k 位（a、b 整數）→ {ans, cut: 多除一位的字串, nx: 下一位數字}
  function roundDiv(a, b, k) {
    var P = p10(k), q = Math.floor(a * P / b), rem = a * P - q * b, t = Math.floor(a * P * 10 / b);
    return { ans: H.R(rem * 2 >= b ? q + 1 : q, P), low: H.R(q, P), cut: decStr(t, k + 1), nx: t % 10 };
  }
  function roundWhy(a, b, k, o) {
    return '先多除一位，除到' + PLACE[k + 1] + '：' + a + '÷' + b + '＝' + o.cut + '…，' + PLACE[k + 1] + '是 ' + o.nx + '，' + (o.nx >= 5 ? '5 以上要進 1' : '比 5 小就捨去') + '，約等於 ' + decStr(H.mul(o.ans, p10(k))[0], k) + '。';
  }
  var ROUNDERR = '只算到要的那一位就停了；要多除一位，看下一位決定要不要進 1。';
  var TD = [2, 4, 5, 8, 10, 16, 20, 25, 40], ND = [3, 6, 7, 9, 11, 12, 15, 30];

  MG.unit({
    id: 'g5b6', pending: '待課本核對',
    cards: [
      { t: '整數÷整數除不完時，在餘數後面補 0 繼續除，商就會出現小數。',
        ex: '7÷4：7÷4＝1 餘 3 → 寫小數點，3 補 0 變 30，30÷4＝7 餘 2 → 20÷4＝5，除盡了。<br>所以 7÷4＝<b>1.75</b>。',
        why: '7 個 1 分不完，把剩下的 3 換成 30 個 0.1 繼續分，再換成 0.01，直到分完。' },
      { t: '小數÷整數：照整數那樣除，商的小數點要和被除數的小數點對齊。',
        ex: '8.52÷6：852÷6＝142，被除數是兩位小數，商也點在同一個位置 → <b>1.42</b>。<br>驗算：1.42×6＝8.52。',
        why: '8.52 是 852 個 0.01，平分成 6 份，每份 142 個 0.01，就是 1.42。' },
      { t: '分數化成小數：分數就是「分子÷分母」。分母是 2、4、5、8、10、20、25…的，都能除得盡。',
        ex: '[[3/8]]＝3÷8＝<b>0.375</b>。<br>也可以擴分：[[7/20]]＝[[35/100]]＝<b>0.35</b>。',
        why: '分母只有 2 和 5 這些因數，就能擴分成分母 10、100、1000，所以一定能化成剛好的小數。' },
      { t: '除不盡時，用四捨五入取到指定的位數：多除一位，再看那一位。',
        ex: '2÷3 取到小數第二位：先除到第三位 2÷3＝0.666…，第三位是 6，5 以上進 1 → 約 <b>0.67</b>。',
        why: '要取到第二位，答案只留兩位，第三位用來決定進不進位，所以要多除一位。' },
      { t: '小數化成分數：一位小數分母是 10，兩位是 100，三位是 1000，再約成最簡分數。',
        ex: '0.45＝[[45/100]]＝[[9/20]]（分子分母同除以 5）。<br>2.5＝2＋[[5/10]]＝<b>2[[1/2]]</b>。',
        why: '0.45 就是 45 個 0.01，也就是 45 個 [[1/100]]，所以先寫成 [[45/100]] 再約分。' }
    ],
    gens: [
      // d1 整數÷整數，除到整除
      { k: 'intdiv', d: 1, n: 5, f: function (r) {
        var b = H.pick(r, [2, 4, 5, 8, 20, 25, 40, 50]), a = H.ri(r, 1, 99);
        if (a % b === 0) return null;
        var q = Math.floor(a / b);
        return H.Q(a + '÷' + b + '＝？（除到整除）',
          a + '÷' + b + '＝' + q + ' 餘 ' + (a - q * b) + '，在餘數後面補 0 繼續除，一直除到沒有餘數：' + a + '÷' + b + '＝' + dec(H.R(a, b)) + '。',
          H.num(H.R(a, b), { err: [[q, '只除到整數就停了，餘數補 0 還要繼續除。']] }), { a: a, b: b });
      } },
      // d1 小數÷整數
      { k: 'decdiv', d: 1, n: 5, f: function (r, _, i) {
        var k = i % 2 ? 1 : 2, t = H.ri(r, k === 1 ? 2 : 11, k === 1 ? 99 : 499), b = H.ri(r, 2, 9);
        if (t % 10 === 0) return null;
        var q = H.R(t, p10(k)), x = H.mul(q, b);
        return H.Q(dec(x) + '÷' + b + '＝？',
          '先當整數除，商的小數點和被除數的小數點對齊：' + dec(x) + '÷' + b + '＝' + dec(q) + '。驗算：' + dec(q) + '×' + b + '＝' + dec(x) + '。',
          H.num(q, { err: [[H.mul(q, 10), '小數點沒對齊，商多了一位整數。'], [H.div(q, 10), '小數點沒對齊，商的小數點點錯位置了。']] }), { x: dec(x), b: b });
      } },
      // d1 分數化小數（除得盡）
      { k: 'f2d', d: 1, n: 4, f: function (r) {
        var d = H.pick(r, [2, 4, 5, 8, 10, 20, 25, 50]), n = H.ri(r, 1, 2 * d - 1);
        if (n % d === 0) return null;
        var x = H.R(n, d), e = d === 8 ? 1000 : 100;
        return H.Q('把 ' + H.fr(n, d) + ' 化成小數是多少？',
          '分數＝分子÷分母：' + n + '÷' + d + '＝' + dec(x) + '。' + (e % d === 0 && d !== 10 ? '也可以擴分成分母 ' + e + '：' + H.fr(n, d) + '＝' + H.fr(n * e / d, e) + '＝' + dec(x) + '。' : ''),
          H.num(x, { err: [[H.R(d, n), '分子、分母弄反了，要用分子÷分母。']] }), { n: n, d: d });
      } },
      // d1 小數化最簡分數
      { k: 'd2f', d: 1, n: 4, f: function (r, _, i) {
        var k = [1, 2, 2, 3][i % 4], m = H.ri(r, 1, p10(k) - 1);
        if (m % 10 === 0) return null;
        var x = H.R(m, p10(k)), g = H.gcd(m, p10(k));
        return H.Q('把 ' + dec(x) + ' 化成分數是多少？（用最簡分數表示）',
          (k === 1 ? '一位小數' : k === 2 ? '兩位小數' : '三位小數') + '，分母用 ' + p10(k) + '：' + dec(x) + '＝' + H.fr(m, p10(k)) + (g > 1 ? '，分子分母同除以 ' + g + '＝' + H.fmt(x) : '，已經是最簡分數') + '。',
          H.num(x, { form: 'f', simp: true, err: k > 1 ? [[H.R(m, p10(k - 1)), '分母用錯了：' + k + ' 位小數分母要用 ' + p10(k) + '。']] : [] }), { s: dec(x) });
      } },
      // d2 整數÷整數除不盡，四捨五入
      { k: 'round', d: 2, n: 4, f: function (r, _, i) {
        var b = H.pick(r, [3, 6, 7, 9, 11, 12, 15]), a = H.ri(r, 1, 99), k = i % 3;
        if (H.toDec(H.R(a, b))) return null;
        var o = roundDiv(a, b, k);
        return H.Q(a + '÷' + b + '，商用四捨五入法取到' + PLACE[k] + '，是多少？',
          roundWhy(a, b, k, o), H.num(o.ans, { err: H.eq(o.low, o.ans) ? [] : [[o.low, ROUNDERR]] }), { a: a, b: b, k: k });
      } },
      // d2 分數化小數（除不盡，四捨五入）
      { k: 'f2dr', d: 2, n: 4, f: function (r, _, i) {
        var d = H.pick(r, [3, 6, 7, 9, 11, 12]), n = H.ri(r, 1, d - 1), k = i % 2 ? 1 : 2;
        if (H.gcd(n, d) !== 1) return null;
        var o = roundDiv(n, d, k);
        return H.Q('把 ' + H.fr(n, d) + ' 化成小數，用四捨五入法取到' + PLACE[k] + '，是多少？',
          H.fr(n, d) + '＝' + n + '÷' + d + '。' + roundWhy(n, d, k, o), H.num(o.ans, { err: H.eq(o.low, o.ans) ? [] : [[o.low, ROUNDERR]] }), { a: n, b: d, k: k });
      } },
      // d2 平分（整數或小數÷整數）
      { k: 'life', d: 2, n: 5, f: function (r, _, i) {
        var T = H.pick(r, [
          ['一條長 {X} 公尺的緞帶，平分剪成 {n} 段，每段長幾公尺？', '公尺'],
          ['{n} 瓶一樣的果汁一共有 {X} 公升，一瓶有幾公升？', '公升'],
          ['媽媽買了 {n} 盒草莓，一共重 {X} 公斤，平均每盒重幾公斤？', '公斤'],
          ['小明 {n} 天一共跑了 {X} 公里，平均每天跑幾公里？', '公里'],
          ['{n} 個人平分 {X} 公斤的白米，每人分到幾公斤？', '公斤']
        ]), n, X;
        if (i % 2) { n = H.pick(r, [2, 4, 5, 8]); X = H.R(H.ri(r, 1, 30), 1); if (X[0] % n === 0) return null; }
        else { n = H.ri(r, 2, 9); X = H.mul(H.R(H.ri(r, 12, 480), 100), n); if (!H.toDec(X) || H.toDec(X).length > 5) return null; }
        var q = H.div(X, n);
        return H.Q(T[0].replace('{X}', dec(X)).replace('{n}', n),
          '平分用除法：' + dec(X) + '÷' + n + '＝' + dec(q) + '（' + T[1] + '）。',
          H.num(q, { suf: T[1], err: [[H.mul(X, n), '平分要用除的，不是乘。']] }), { X: dec(X), n: n });
      } },
      // d2 分數、小數比大小（選擇）
      { k: 'cmp', d: 2, n: 4, f: function (r, _, i) {
        var items = [], seen = {};
        for (var t = 0; t < 40 && items.length < 4; t++) {
          var d = H.pick(r, [2, 4, 5, 8, 10, 20, 25]), n = H.ri(r, 1, d - 1), x = H.R(n, d);
          if (H.gcd(n, d) !== 1 || seen[x.join()]) continue;
          seen[x.join()] = 1; items.push({ n: n, d: d, dec: items.length % 2 === 1 });
        }
        if (items.length < 4) return null;
        items = H.shuffle(items, r);
        var big = i % 2 === 0, val = function (o) { return H.R(o.n, o.d); };
        var sorted = items.slice().sort(function (a, b) { return big ? H.cmp(val(b), val(a)) : H.cmp(val(a), val(b)); });
        var show = function (o) { return o.dec ? dec(val(o)) : H.fr(o.n, o.d); };
        return H.Q('下面哪一個數' + (big ? '最大' : '最小') + '？',
          '分數先化成小數再比：' + items.filter(function (o) { return !o.dec; }).map(function (o) { return show(o) + '＝' + dec(val(o)); }).join('，') + '。' + (big ? '最大' : '最小') + '的是 ' + show(sorted[0]) + '。',
          H.mc(sorted[0], sorted.slice(1), show), { items: items, big: big });
      } },
      // d2 小數化帶分數
      { k: 'd2fm', d: 2, n: 4, f: function (r, _, i) {
        var w = H.ri(r, 1, 9), k = i % 2 ? 1 : 2, m = H.ri(r, 1, p10(k) - 1);
        if (m % 10 === 0) return null;
        var x = H.add(w, H.R(m, p10(k))), f = H.R(m, p10(k));
        return H.Q('把 ' + dec(x) + ' 化成帶分數是多少？（用最簡分數表示）',
          '整數部分是 ' + w + '，小數部分 ' + dec(f) + '＝' + H.fr(m, p10(k)) + (f[1] !== p10(k) ? '＝' + H.fmt(f) : '') + '，所以是 ' + H.fmt(x, 'mixed') + '。',
          H.num(x, { form: 'f', simp: true, mixed: true, err: [[f, '整數部分 ' + w + ' 忘了寫。']] }), { s: dec(x) });
      } },
      // d3 哪些分數能化成剛好的小數（列舉）
      { k: 'fset', d: 3, n: 3, f: function (r) {
        var g = H.ri(r, 2, 3), cand = [], seen = {};
        for (var t = 0; t < 80 && cand.length < 5; t++) {
          var good = cand.length < g, d = H.pick(r, good ? TD : ND), n = H.ri(r, 1, d - 1);
          if (H.gcd(n, d) !== 1 || seen[n + '/' + d]) continue;
          seen[n + '/' + d] = 1; cand.push([n, d]);
        }
        if (cand.length < 5) return null;
        cand = H.shuffle(cand, r);
        return H.Q('下面哪些分數化成小數時可以剛好除盡？<b>全部選出來。</b>',
          '分數已經是最簡分數時，分母只有 2 和 5 這兩種因數（像 2、4、5、8、10、16、20、25、40）才除得盡；分母有 3、7、11 這些因數就會一直除不完。',
          H.set(cand, function (x) { return !!H.toDec(x); }), { cand: cand });
      } },
      // d3 多步驟：先減再平分／平分後再算剩下
      { k: 'multi', d: 3, n: 4, f: function (r, _, i) {
        var n = H.ri(r, 3, 8), q = H.R(H.ri(r, 15, 260), 100);
        if (!H.toDec(q) || H.toDec(q).length > 4) return null;
        if (i % 2 === 0) {
          var Y = H.R(H.ri(r, 5, 40), 10), rest = H.mul(q, n), X = H.add(rest, Y);
          return H.Q('一桶油有 ' + dec(X) + ' 公升，用掉 ' + dec(Y) + ' 公升後，剩下的平分裝成 ' + n + ' 瓶，每瓶有幾公升？',
            '先算剩下：' + dec(X) + '－' + dec(Y) + '＝' + dec(rest) + '（公升）；再平分：' + dec(rest) + '÷' + n + '＝' + dec(q) + '（公升）。',
            H.num(q, { suf: '公升', err: [[H.div(X, n), '忘了先減掉用掉的 ' + dec(Y) + ' 公升。'], [H.sub(H.div(X, n), Y), '要先減再平分，不是平分完才減。']] }), { X: dec(X), Y: dec(Y), n: n, mode: 'oil' });
        }
        var D = H.mul(q, n), k = H.ri(r, 1, n - 1), left = H.mul(q, n - k);
        return H.Q('一條步道長 ' + dec(D) + ' 公里，阿哲打算分 ' + n + ' 天走完，每天走一樣遠。走了 ' + k + ' 天以後，還剩幾公里？',
          '每天走 ' + dec(D) + '÷' + n + '＝' + dec(q) + '（公里），還剩 ' + (n - k) + ' 天的路：' + dec(q) + '×' + (n - k) + '＝' + dec(left) + '（公里）。',
          H.num(left, { suf: '公里', err: [[H.mul(q, k), '這是已經走的路，題目問還剩多少。'], [q, '這是一天走的路，還要乘剩下的天數。']] }), { D: dec(D), n: n, k: k, mode: 'trail' });
      } },
      // d3 生活中的四捨五入
      { k: 'rlife', d: 3, n: 4, f: function (r, _, i) {
        var n, X, k, q, unit, txt;
        if (i % 2 === 0) {
          n = H.pick(r, [3, 6, 7, 9]); X = H.ri(r, 20, 99) * 10; k = 0; unit = '元';
          txt = n + ' 個同學平分 ' + X + ' 元的披薩錢，每人大約要付幾元？（用四捨五入法取到整數）';
        } else {
          n = H.pick(r, [3, 6, 7, 9, 11]); X = H.ri(r, 1, 5); k = 2; unit = '公升';
          txt = X + ' 公升的鮮奶平分倒進 ' + n + ' 個杯子，每杯大約有幾公升？（用四捨五入法取到小數第二位）';
        }
        if (H.toDec(H.R(X, n))) return null;
        q = roundDiv(X, n, k);
        return H.Q(txt, '平分用除法：' + X + '÷' + n + '。' + roundWhy(X, n, k, q),
          H.num(q.ans, { suf: unit, err: H.eq(q.low, q.ans) ? [] : [[q.low, ROUNDERR]] }), { a: X, b: n, k: k });
      } },
      // d1 分數化小數（選擇）：常見錯法是把分子分母直接寫成「分子.分母」
      { k: 'f2dmc', d: 1, n: 4, f: function (r) {
        var d = H.pick(r, [4, 5, 8, 20, 25]), n = H.ri(r, 1, d - 1), x = H.R(n, d);
        var wrong = [H.fromDec(n + '.' + d), H.R(n, d * 10), H.R(n * 10, d), H.R(d, n)].filter(function (w) { return H.toDec(w); });
        return H.Q(H.fr(n, d) + ' 化成小數，是下面哪一個？',
          '分數＝分子÷分母：' + n + '÷' + d + '＝' + dec(x) + '。不是把分子、分母直接寫成 ' + n + '.' + d + '。',
          H.mc(x, wrong, dec), { n: n, d: d });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
