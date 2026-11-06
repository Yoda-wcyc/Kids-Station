/* 六下 單元一 小數與分數的計算（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6b1.js。
   算式先寫成 ASCII（* 乘、: 除、3/4 是分數），題目用 show() 轉成 ×÷＋－ 和上下排分數；驗算檔用另寫的解析器從同一個字串重算。 */
(function (MG) {
  'use strict';
  var H = MG.H;
  var D = function (x) { return H.fmt(x, 'dec'); };            // 有限小數 → 小數字
  var F = function (x) { return H.fmt(x); };                   // 分數字
  var V = function (x) { return H.toDec(x) ? D(x) : F(x); };   // 能寫小數就寫小數
  var fT = function (x) { x = H.R(x); return x[1] === 1 ? String(x[0]) : x[0] + '/' + x[1]; };
  function show(e) { return e.replace(/(\d+)\/(\d+)/g, '[[$1/$2]]').replace(/\*/g, '×').replace(/:/g, '÷').replace(/\+/g, '＋').replace(/-/g, '－'); }
  function dc(r, lo, hi, p) { return H.R(H.ri(r, lo, hi), Math.pow(10, p)); }
  function dn(r, lo, hi) { var n = H.ri(r, lo, hi); if (n % 10 === 0) n++; return H.R(n, 10); }   // 一位小數（不是整數）
  function pf(r, qs) { var q = H.pick(r, qs || [2, 3, 4, 5, 6, 8, 10]); return H.R(H.ri(r, 1, q - 1), q); }
  var pos = function (x) { return H.cmp(x, 0) > 0; };
  var calc = function (e) { return '計算：' + show(e) + '＝？'; };
  var PAIR = [['2.5', 4], ['1.25', 8], ['0.25', 4], ['0.2', 5], ['12.5', 8], ['0.125', 8]];

  MG.unit({
    id: 'g6b1', pending: '待課本核對',
    cards: [
      { t: '小數的四則計算：先乘除、後加減；有括號的先算括號。',
        ex: '3.6＋1.5×4：先算 1.5×4＝6，再算 3.6＋6＝<b>9.6</b>。<br>(3.6＋1.5)×4：先算括號 3.6＋1.5＝5.1，再算 5.1×4＝<b>20.4</b>。',
        why: '同一串算式，大家要算出一樣的答案，所以約好先後順序；括號就是「這裡先算」的記號。' },
      { t: '分數的四則計算，順序規則一樣：先乘除後加減，括號先算；最後記得約分。',
        ex: '[[1/2]]＋[[2/3]]×[[3/4]]：先乘 [[2/3]]×[[3/4]]＝[[6/12]]＝[[1/2]]，再加 [[1/2]]＋[[1/2]]＝<b>1</b>。<br>[[5/6]]÷[[1/3]]－[[1/2]]：先除 [[5/6]]×3＝[[5/2]]，再減 [[5/2]]－[[1/2]]＝<b>2</b>。',
        why: '除以一個分數＝乘它的倒數，所以除法和乘法一樣要先算。' },
      { t: '小數和分數混在一起：把小數化成分數再算最保險；分母只有 2、4、5、8、10 這類的分數，也可以化成小數來算。',
        ex: '0.6＋[[3/4]]：0.6＝[[3/5]]，[[3/5]]＋[[3/4]]＝[[12/20]]＋[[15/20]]＝[[27/20]]＝<b>1.35</b>。<br>也可以 [[3/4]]＝0.75，0.6＋0.75＝1.35，一樣。<br>0.5＋[[1/3]]：[[1/3]] 化不成剛好的小數，只能把 0.5 化成 [[1/2]]：[[1/2]]＋[[1/3]]＝<b>[[5/6]]</b>。',
        why: '[[1/3]]＝0.333… 一直除不完，寫成小數會不準；化成分數算才剛好。' },
      { t: '簡化計算：用交換律、結合律、分配律，先湊出整十、整百或整數，算起來又快又不容易錯。',
        ex: '2.5×37×4＝2.5×4×37＝10×37＝<b>370</b>（交換、結合）。<br>[[3/7]]×13＋[[3/7]]×8＝[[3/7]]×(13＋8)＝[[3/7]]×21＝<b>9</b>（分配律）。',
        why: '幾個數相乘，換順序、換先後都不影響答案；「13 個 [[3/7]] 加 8 個 [[3/7]]」就是 21 個 [[3/7]]。' }
    ],
    gens: [
      // d1 小數四則：先乘除後加減、括號先算
      { k: 'dec', d: 1, n: 6, f: function (r, _, i) {
        var a, b, c, e, ans, why, err, t;
        if (i % 3 === 0) {
          a = dc(r, 11, 99, 1); b = dc(r, 11, 59, 1); c = H.ri(r, 2, 9); t = H.mul(b, c); ans = H.add(a, t); e = D(a) + '+' + D(b) + '*' + c;
          why = '先乘除後加減：先算 ' + D(b) + '×' + c + '＝' + D(t) + '，再算 ' + D(a) + '＋' + D(t) + '＝' + D(ans) + '。';
          err = [[H.mul(H.add(a, b), c), '要先乘後加：先算 ' + D(b) + '×' + c + '，不是從左邊一路算過去。']];
        } else if (i % 3 === 1) {
          a = dn(r, 12, 48); c = H.ri(r, 2, 6); var d = H.ri(r, 2, 5), s = H.ri(r, 2, 9), ac = H.mul(a, c), q = H.R(s, 10); b = H.R(d * s, 10);
          ans = H.sub(ac, q); if (!pos(ans)) return null; e = D(a) + '*' + c + '-' + D(b) + ':' + d;
          why = '乘和除都要先算：' + D(a) + '×' + c + '＝' + D(ac) + '，' + D(b) + '÷' + d + '＝' + D(q) + '，最後相減：' + D(ac) + '－' + D(q) + '＝' + D(ans) + '。';
          err = [[H.div(H.sub(ac, b), d), '除法也要先算，不能先減再除。']];
        } else {
          a = dn(r, 11, 49); b = dn(r, 11, 49); c = H.R(H.pick(r, [5, 12, 15, 25, 35, 20, 30, 40]), 10); t = H.add(a, b); ans = H.mul(t, c); e = '(' + D(a) + '+' + D(b) + ')*' + D(c);
          why = '括號先算：' + D(a) + '＋' + D(b) + '＝' + D(t) + '，再乘：' + D(t) + '×' + D(c) + '＝' + D(ans) + '。';
          err = [[H.add(a, H.mul(b, c)), '括號裡的要先算。']];
        }
        return H.Q(calc(e), why, H.num(ans, { err: err }), { e: e });
      } },
      // d1 分數四則
      { k: 'frac', d: 1, n: 6, f: function (r, _, i) {
        var x = pf(r), y = pf(r), z = pf(r), e, ans, why, err = [], t;
        if (i % 3 === 0) {
          t = H.mul(y, z); ans = H.add(x, t); e = fT(x) + '+' + fT(y) + '*' + fT(z);
          why = '先乘後加：' + F(y) + '×' + F(z) + '＝' + F(t) + '，再算 ' + F(x) + '＋' + F(t) + '＝' + F(ans) + '。';
          err.push([H.mul(H.add(x, y), z), '要先乘後加，不能從左邊一路算過去。']);
        } else if (i % 3 === 1) {
          t = H.div(x, y); ans = H.sub(t, z); if (!pos(ans)) return null; e = fT(x) + ':' + fT(y) + '-' + fT(z);
          why = '先除後減：' + F(x) + '÷' + F(y) + '＝' + F(x) + '×' + F(H.div(1, y)) + '＝' + F(t) + '，再算 ' + F(t) + '－' + F(z) + '＝' + F(ans) + '。';
          if (H.cmp(y, z) > 0) err.push([H.div(x, H.sub(y, z)), '要先除後減，不能先算 ' + F(y) + '－' + F(z) + '。']);
        } else {
          t = H.add(x, y); ans = H.mul(t, z); e = '(' + fT(x) + '+' + fT(y) + ')*' + fT(z);
          why = '括號先算：' + F(x) + '＋' + F(y) + '＝' + F(t) + '，再乘 ' + F(z) + '：' + F(ans) + '。';
          err.push([H.add(x, H.mul(y, z)), '括號裡的要先算。']);
        }
        return H.Q(calc(e) + '（用最簡分數表示）', why, H.num(ans, { form: 'f', simp: true, err: err }), { e: e });
      } },
      // d1 小數 ↔ 分數
      { k: 'conv', d: 1, n: 6, f: function (r, _, i) {
        var w = H.ri(r, 0, 2);
        if (i % 2 === 0) {
          var kind = H.ri(r, 0, 2), p;
          if (kind === 0) p = H.R(H.ri(r, 1, 9), 10);
          else if (kind === 1) { var h = H.ri(r, 1, 99); if (h % 10 === 0) return null; p = H.R(h, 100); }
          else p = H.R(H.pick(r, [1, 3, 5, 7]), 8);
          var x = H.add(w, p), s = D(x), n = s.split('.')[1].length, big = Math.pow(10, n), raw = H.mul(x, big)[0];
          return H.Q(s + ' 化成分數是多少？（用最簡分數表示）',
            s + ' 有 ' + n + ' 位小數，就是 ' + H.fr(raw, big) + '，約分後是 ' + F(x) + (w ? '（也就是 ' + H.fmt(x, 'mixed') + '）' : '') + '。',
            H.num(x, { form: 'f', simp: true }), { s: s });
        }
        var q = H.pick(r, [2, 4, 5, 8, 20, 25]), a = H.R(H.ri(r, 1, q - 1), q), y = H.add(w, a);
        var err = w ? [] : [[H.fromDec(a[0] + '.' + a[1]), '不是把分子、分母接起來；分數就是分子÷分母。']];
        return H.Q((w || '') + H.fr(a[0], a[1]) + ' 化成小數是多少？',
          '分數就是分子÷分母：' + a[0] + '÷' + a[1] + '＝' + D(a) + (w ? '，再加上整數 ' + w + '：' + D(y) : '') + '。',
          H.num(y, { err: err }), { w: w, n: a[0], d: a[1] });
      } },
      // d2 小數和分數混合
      { k: 'mix', d: 2, n: 6, f: function (r, _, i) {
        var q = H.pick(r, [2, 3, 4, 5, 6, 8]), f = H.R(H.ri(r, 1, q - 1), q), d = H.ri(r, 0, 1) || q % 3 === 0 ? dn(r, 11, 49) : dc(r, 105, 395, 2), k = i % 3;
        if (d[1] === 1) return null;
        var op = ['+', '*', ':'][k], e = D(d) + op + fT(f), ans = [H.add, H.mul, H.div][k](d, f), nice = !!H.toDec(f);
        var why = '把 ' + D(d) + ' 化成分數 ' + F(d) + '：' + show(fT(d) + op + fT(f)) + '＝' + F(ans) + (H.toDec(ans) && ans[1] !== 1 ? '＝' + D(ans) : '') + '。' +
          (nice ? '也可以把 ' + F(f) + ' 化成 ' + D(f) + ' 來算，答案一樣。' : F(f) + ' 化不成剛好的小數，所以要把小數化成分數來算。');
        var err = k === 2 ? [[H.mul(d, f), '除以分數要乘它的倒數，不是直接乘。']] : [];
        if (H.toDec(ans)) return H.Q(calc(e) + '（可以寫小數或分數）', why, H.num(ans, { err: err }), { e: e });
        return H.Q(calc(e) + '（用最簡分數表示）', why, H.num(ans, { form: 'f', simp: true, err: err }), { e: e });
      } },
      // d2 簡化計算
      { k: 'law', d: 2, n: 5, f: function (r, _, i) {
        var e, ans, why, k = i % 4;
        if (k === 0) {
          var pr = H.pick(r, PAIR), a = H.fromDec(pr[0]), c = pr[1], b = H.ri(r, 13, 99), ac = H.mul(a, c);
          ans = H.mul(ac, b); e = pr[0] + '*' + b + '*' + c;
          why = '交換律＋結合律：先把 ' + pr[0] + '×' + c + '＝' + D(ac) + ' 湊在一起，再乘 ' + b + '：' + D(ac) + '×' + b + '＝' + D(ans) + '。';
        } else if (k === 1) {
          var q = H.pick(r, [3, 5, 7, 9, 11]), f = H.R(H.ri(r, 1, q - 1), q); if (f[1] !== q) return null; var m0 = Math.ceil(6 / q), s = q * H.ri(r, m0, m0 + 3), bb = H.ri(r, 2, s - 2), cc = s - bb;
          ans = H.mul(f, s); e = fT(f) + '*' + bb + '+' + fT(f) + '*' + cc;
          why = '分配律：' + show(e) + '＝' + F(f) + '×(' + bb + '＋' + cc + ')＝' + F(f) + '×' + s + '＝' + V(ans) + '。';
        } else if (k === 2) {
          var d = dn(r, 12, 98), bn = H.ri(r, 11, 89); if (bn % 10 === 0) bn++;
          var b2 = H.R(bn, 10), c2 = H.R(100 - bn, 10); ans = H.mul(d, 10); e = D(d) + '*' + D(b2) + '+' + D(d) + '*' + D(c2);
          why = '分配律：' + D(d) + '×(' + D(b2) + '＋' + D(c2) + ')＝' + D(d) + '×10＝' + D(ans) + '。';
        } else {
          var X = H.ri(r, 101, 899); if (X % 100 === 0) return null;
          var Y = 100 * H.ri(r, 1, 4) - X % 100, x = H.R(X, 100), y = H.R(Y, 100), z = dn(r, 11, 99), xy = H.add(x, y);
          ans = H.add(xy, z); e = D(x) + '+' + D(z) + '+' + D(y);
          why = '交換律、結合律：先把 ' + D(x) + '＋' + D(y) + '＝' + D(xy) + ' 湊成整數，再加 ' + D(z) + '＝' + D(ans) + '。';
        }
        return H.Q('用簡化計算：' + show(e) + '＝？', why, H.num(ans), { e: e });
      } },
      // d2 選擇：算出答案（錯答是「沒照順序算」的結果）
      { k: 'pick', d: 2, n: 5, f: function (r, _, i) {
        var q = H.pick(r, [2, 4, 5, 8]), f = H.R(H.ri(r, 1, q - 1), q), d = dn(r, 12, 48), k = i % 3, n, e, ans, w, why;
        if (k === 0) {
          n = H.ri(r, 2, 6); e = '(' + D(d) + '+' + fT(f) + ')*' + n; ans = H.mul(H.add(d, f), n); w = [H.add(d, H.mul(f, n)), H.add(H.mul(d, n), f)];
          why = '括號先算：' + D(d) + '＋' + F(f) + '＝' + V(H.add(d, f)) + '，再乘 ' + n + '＝' + V(ans) + '。';
        } else if (k === 1) {
          n = H.ri(r, 2, 6); e = D(d) + '-' + fT(f) + '*' + n; ans = H.sub(d, H.mul(f, n)); if (!pos(ans)) return null; w = [H.mul(H.sub(d, f), n), H.sub(H.mul(d, n), f)];
          why = '先乘後減：' + F(f) + '×' + n + '＝' + V(H.mul(f, n)) + '，' + D(d) + '－' + V(H.mul(f, n)) + '＝' + V(ans) + '。';
        } else {
          if (q === 8) return null; n = H.pick(r, [2, 5]); e = D(d) + '+' + fT(f) + ':' + n; ans = H.add(d, H.div(f, n)); w = [H.div(H.add(d, f), n), H.add(d, H.mul(f, n))];
          why = '先除後加：' + F(f) + '÷' + n + '＝' + F(H.div(f, n)) + '＝' + V(H.div(f, n)) + '，' + D(d) + '＋' + V(H.div(f, n)) + '＝' + V(ans) + '。';
        }
        w = w.concat([H.add(ans, H.R(1, 2)), H.add(ans, 1), H.mul(ans, 2), H.sub(ans, H.R(1, 2)), H.add(ans, H.R(1, 10))]).filter(pos);
        return H.Q(show(e) + ' 的答案是多少？', why, H.mc(ans, w, V), { e: e });
      } },
      // d2 列出全部：哪些算式和它一樣大（運算律）
      { k: 'set', d: 2, n: 5, f: function (r, _, i) {
        var a, A, b, c, base, good, bad, t, why;
        if (i % 2 === 0) {
          var s;
          if (H.ri(r, 0, 1)) { var q = H.pick(r, [3, 5, 7, 9]); A = H.R(H.ri(r, 1, q - 1), q); s = q * H.ri(r, 2, 4); } else { A = dn(r, 12, 98); s = 10; }
          a = fT(A); if (A[1] === 10) a = D(A);
          b = H.ri(r, 2, s - 2); c = s - b; if (b === c) return null;
          t = H.mul(A, s); base = a + '*' + b + '+' + a + '*' + c;
          good = [a + '*(' + b + '+' + c + ')', '(' + b + '+' + c + ')*' + a, b + '*' + a + '+' + c + '*' + a, a + '*' + c + '+' + a + '*' + b];
          bad = [[a + '*' + b + '+' + c, H.add(H.mul(A, b), c)], [a + '*' + b + '*' + c, H.mul(H.mul(A, b), c)], [a + '+' + b + '*' + c, H.add(A, b * c)],
            ['(' + a + '+' + a + ')*(' + b + '+' + c + ')', H.mul(H.mul(A, 2), s)], [a + '*' + b + '+' + a + '+' + c, H.add(H.add(H.mul(A, b), A), c)]];
          why = '分配律：' + show(base) + '＝' + show(good[0]) + '＝' + V(t) + '。交換加或乘的順序也一樣大；把乘號換成加號、或少乘一次就不一樣了。';
        } else {
          var pr = H.pick(r, PAIR); a = pr[0]; A = H.fromDec(a); c = pr[1]; b = H.ri(r, 13, 99);
          t = H.mul(H.mul(A, b), c); base = a + '*' + b + '*' + c;
          good = [a + '*' + c + '*' + b, b + '*(' + a + '*' + c + ')', '(' + a + '*' + c + ')*' + b, c + '*' + b + '*' + a];
          bad = [[a + '*' + c + '+' + b, H.add(H.mul(A, c), b)], ['(' + a + '+' + c + ')*' + b, H.mul(H.add(A, c), b)], [a + '*' + b + '+' + c, H.add(H.mul(A, b), c)], [a + '+' + b + '*' + c, H.add(A, b * c)]];
          why = '交換律、結合律：幾個數相乘，順序怎麼換、先算哪兩個，答案都一樣（' + V(t) + '）。把乘號換成加號就不一樣了。';
        }
        var nG = H.ri(r, 2, 3), gs = H.shuffle(good, r).slice(0, nG), bs = H.shuffle(bad.filter(function (x) { return !H.eq(x[1], t); }), r).slice(0, 5 - nG).map(function (x) { return x[0]; });
        if (bs.length < 5 - nG) return null;
        var cand = H.shuffle(gs.concat(bs), r);
        return H.Q('下面哪些算式的答案和 ' + show(base) + ' 一樣？<b>全部選出來。</b>', why,
          H.set(cand, function (x) { return gs.indexOf(x) >= 0; }, show), { base: base, cand: cand });
      } },
      // d3 生活情境：小數和分數混合
      { k: 'life', d: 3, n: 6, f: function (r, _, i) {
        var k = i % 3, e, ans, q, why, err, suf, f;
        if (k === 0) {
          var L = H.R(H.pick(r, [12, 15, 16, 18, 20, 24, 25, 30]), 10), left; f = pf(r, [3, 4, 5]);
          left = H.sub(1, f); ans = H.mul(L, left); if (!H.toDec(ans)) return null; e = D(L) + '*(1-' + fT(f) + ')'; suf = '公升';
          q = '一瓶 ' + D(L) + ' 公升的果汁，姐姐喝了這瓶的 ' + F(f) + '。剩下幾公升？';
          why = '剩下這瓶的 1－' + F(f) + '＝' + F(left) + '：' + D(L) + '×' + F(left) + '＝' + V(ans) + '（公升）。';
          err = [[H.mul(L, f), '這是喝掉的量，題目問剩下的。'], [H.sub(L, f), F(f) + ' 是「這瓶的幾分之幾」，要用乘的，不能直接減。']];
        } else if (k === 1) {
          f = pf(r, [2, 4, 5, 8]); var kk = H.ri(r, 3, 8), kf = H.mul(f, kk), L2 = H.R(Math.ceil(kf[0] * 10 / kf[1]) + H.ri(r, 1, 15), 10);
          ans = H.sub(L2, kf); e = D(L2) + '-' + fT(f) + '*' + kk; suf = '公尺';
          q = '一捲緞帶長 ' + D(L2) + ' 公尺，每個蝴蝶結要用 ' + F(f) + ' 公尺。做了 ' + kk + ' 個蝴蝶結後，還剩下幾公尺？';
          why = '先算用掉多少：' + F(f) + '×' + kk + '＝' + V(kf) + '（公尺），再從全長減掉：' + D(L2) + '－' + V(kf) + '＝' + V(ans) + '（公尺）。';
          err = [[H.mul(H.sub(L2, f), kk), '要先算 ' + kk + ' 個用掉多少（乘），再從全長減掉。'], [H.sub(L2, f), '做了 ' + kk + ' 個，用掉的是 ' + F(f) + '×' + kk + '。']];
        } else {
          var m = H.R(5 * H.ri(r, 5, 39), 100), n = H.ri(r, 3, 6), day; f = pf(r, [2, 4, 5]); day = H.add(m, f);
          ans = H.mul(day, n); e = '(' + D(m) + '+' + fT(f) + ')*' + n; suf = '公里';
          q = '阿哲每天早上走 ' + D(m) + ' 公里上學，傍晚再走 ' + F(f) + ' 公里去公園。照這樣走 ' + n + ' 天，一共走了幾公里？';
          why = '一天走 ' + D(m) + '＋' + F(f) + '＝' + V(day) + '（公里），' + n + ' 天：' + V(day) + '×' + n + '＝' + V(ans) + '（公里）。';
          err = [[H.add(m, H.mul(f, n)), '一天走的是早上＋傍晚，要先加起來（加括號）再乘天數。']];
        }
        return H.Q(q, why, H.num(ans, { suf: suf, err: err }), { e: e });
      } },
      // d3 簡化計算（拆數、湊整）
      { k: 'law3', d: 3, n: 5, f: function (r, _, i) {
        var k = i % 4, e, ans, why, err = [], d;
        if (k === 0) {
          var q = H.pick(r, [4, 5, 7, 8, 9]), f = H.R(H.ri(r, 1, q - 1), q); if (f[1] !== q) return null; var c = H.ri(r, 5, 40), b = c + q * H.ri(r, 1, 5);
          e = fT(f) + '*' + b + '-' + fT(f) + '*' + c; ans = H.mul(f, b - c);
          why = '分配律（減法也可以）：' + F(f) + '×(' + b + '－' + c + ')＝' + F(f) + '×' + (b - c) + '＝' + V(ans) + '。';
        } else if (k === 1) {
          d = dn(r, 12, 98); e = D(d) + '*99+' + D(d); ans = H.mul(d, 100);
          why = '後面的 ' + D(d) + ' 就是 ' + D(d) + '×1：' + D(d) + '×(99＋1)＝' + D(d) + '×100＝' + D(ans) + '。';
          err = [[H.mul(d, 99), '後面還有一個 ' + D(d) + '，合起來是 100 個 ' + D(d) + '。']];
        } else if (k === 2) {
          var pr = H.pick(r, PAIR.slice(0, 5)), m = H.ri(r, 3, 25), n = pr[1] * m, pa = H.mul(H.fromDec(pr[0]), pr[1]);
          e = pr[0] + '*' + n; ans = H.mul(H.fromDec(pr[0]), n);
          why = n + ' 可以拆成 ' + pr[1] + '×' + m + '：' + pr[0] + '×' + pr[1] + '×' + m + '＝' + D(pa) + '×' + m + '＝' + D(ans) + '。';
        } else {
          d = H.ri(r, 0, 1) ? dn(r, 12, 98) : dc(r, 101, 999, 2); if (d[1] === 1) return null;
          e = D(d) + '*101'; ans = H.mul(d, 101);
          why = '101＝100＋1：' + D(d) + '×100＋' + D(d) + '×1＝' + D(H.mul(d, 100)) + '＋' + D(d) + '＝' + D(ans) + '。';
          err = [[H.mul(d, 100), '101 是 100＋1，還要再加一個 ' + D(d) + '。']];
        }
        return H.Q('用簡化計算：' + show(e) + '＝？', why, H.num(ans, { err: err }), { e: e });
      } },
      // d1 選擇：先算哪一步
      { k: 'first', d: 1, n: 4, f: function (r, _, i) {
        var a = D(dn(r, 11, 99)), b = D(dn(r, 11, 59)), c = String(H.ri(r, 2, 9)), k = i % 4, e, ans, w, why;
        if (k === 0) { e = a + '+' + b + '*' + c; ans = b + '*' + c; w = [a + '+' + b, a + '*' + c, a + '+' + c]; why = '先乘除後加減：先算 ' + show(ans) + '。'; }
        else if (k === 1) { e = a + '-' + b + ':' + c; ans = b + ':' + c; w = [a + '-' + b, a + ':' + c, a + '-' + c]; why = '先乘除後加減：先算 ' + show(ans) + '。'; }
        else if (k === 2) { e = '(' + a + '+' + b + ')*' + c; ans = a + '+' + b; w = [b + '*' + c, a + '*' + c, a + '*' + b]; why = '有括號先算括號：先算 ' + show(ans) + '。'; }
        else { var b2 = D(dn(r, 51, 99)), c2 = String(H.ri(r, 2, 4)); e = a + '*(' + b2 + '-' + c2 + ')'; ans = b2 + '-' + c2; w = [a + '*' + b2, a + '*' + c2, a + '-' + c2]; why = '有括號先算括號：先算 ' + show(ans) + '。'; }
        return H.Q('計算 ' + show(e) + ' 時，第一步要先算哪一個？', why, H.mc(ans, w, show), { e: e });
      } },
      // d3 選擇：哪一個算式可以算出答案
      { k: 'how', d: 3, n: 4, f: function (r, _, i) {
        var f, cands, q, ans, t, why, v;
        if (i % 2 === 0) {
          var m = H.R(5 * H.ri(r, 5, 39), 100), n = H.ri(r, 3, 6), M; f = pf(r, [2, 4, 5]); M = D(m); var Fq = fT(f);
          t = H.mul(H.add(m, f), n); ans = '(' + M + '+' + Fq + ')*' + n;
          cands = [[M + '+' + Fq + '*' + n, H.add(m, H.mul(f, n))], [M + '*' + n + '+' + Fq, H.add(H.mul(m, n), f)], ['(' + M + '+' + Fq + '):' + n, H.div(H.add(m, f), n)], [M + '+' + Fq + '+' + n, H.add(H.add(m, f), n)]];
          q = '弟弟每天早上跑步 ' + M + ' 公里，傍晚再跑 ' + F(f) + ' 公里。照這樣跑 ' + n + ' 天，一共跑幾公里？下面哪一個算式可以算出答案？';
          why = '一天跑「早上＋傍晚」，要先加起來（加括號）再乘 ' + n + ' 天：' + show(ans) + '＝' + V(t) + '（公里）。';
          v = { k: 0, m: M, f: Fq, n: n };
        } else {
          var L = H.R(H.pick(r, [12, 15, 16, 18, 20, 24, 25, 30]), 10), Ls = D(L), Fq2; f = pf(r, [3, 4, 5]); Fq2 = fT(f);
          t = H.mul(L, H.sub(1, f)); ans = Ls + '*(1-' + Fq2 + ')';
          cands = [[Ls + '-' + Fq2, H.sub(L, f)], [Ls + '*' + Fq2, H.mul(L, f)], [Ls + ':(1-' + Fq2 + ')', H.div(L, H.sub(1, f))], ['(' + Ls + '-' + Fq2 + ')*' + Fq2, H.mul(H.sub(L, f), f)]];
          q = '一壺 ' + Ls + ' 公升的麥茶，喝掉了這壺的 ' + F(f) + '。剩下幾公升？下面哪一個算式可以算出答案？';
          why = '剩下的是這壺的 (1－' + F(f) + ')，要用乘的：' + show(ans) + '＝' + V(t) + '（公升）。直接減 ' + F(f) + '，是把「這壺的幾分之幾」當成「幾公升」了。';
          v = { k: 1, L: Ls, f: Fq2 };
        }
        var w = cands.filter(function (x) { return !H.eq(x[1], t); }).map(function (x) { return x[0]; });
        return H.Q(q, why, H.mc(ans, w, show), v);
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
