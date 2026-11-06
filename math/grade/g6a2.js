/* 六上 單元二 分數除法（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a2.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, F = function (x) { return H.fmt(x, 'mixed'); }, S = '（用最簡分數表示）';
  // 隨機的最簡真分數 n/d（d：lo～hi）
  function prop(r, lo, hi) { var d = H.ri(r, lo, hi), n = H.ri(r, 1, d - 1); return H.gcd(n, d) === 1 ? H.R(n, d) : null; }
  // 比 1 大的最簡假分數（分子 ≤9，選項長度才不會差太多）
  function imp(r) { var d = H.ri(r, 2, 8), n = H.ri(r, d + 1, 9); return H.gcd(n, d) === 1 ? H.R(n, d) : null; }
  function divWhy(a, b) {
    var rb = H.R(b), inv = H.R(rb[1], rb[0]);
    return F(a) + '÷' + F(b) + '＝' + H.fmt(a) + '×' + H.fmt(inv) + '＝' + F(H.div(a, b)) + (rb[1] === 1 ? '（除以 ' + rb[0] + ' 等於乘以 ' + H.fr(1, rb[0]) + '）。' : '（除以一個分數，等於乘以它的倒數）。');
  }
  var DIVERR = function (a, b) { var e = [[H.mul(a, b), '÷ 要改成「乘以倒數」，不是直接相乘。']]; if (!H.eq(H.div(b, a), H.div(a, b))) e.push([H.div(b, a), '被除數和除數放反了。']); return e; };

  MG.unit({
    id: 'g6a2', pending: '待課本核對',
    cards: [
      { t: '分子和分母除了 1 以外沒有其他公因數，就是最簡分數。用最大公因數一次約到最簡。',
        ex: '[[18/24]]：18 和 24 的最大公因數是 6，分子分母同除以 6 → <b>[[3/4]]</b>。',
        why: '分子分母同除以一個數，分數大小不變；除以「最大」公因數，一次就約到不能再約。' },
      { t: '同分母的分數相除：分母一樣，就直接看分子相除。',
        ex: '[[6/7]]÷[[2/7]]：6 個 [[1/7]] 裡有幾個 2 個 [[1/7]]？→ 6÷2＝<b>3</b>。<br>[[5/9]]÷[[2/9]]＝5÷2＝<b>[[5/2]]</b>。',
        why: '單位一樣（都是幾個 [[1/7]]），就像 6 顆÷2 顆一樣，只要算個數。' },
      { t: '分母不一樣：先通分變成同分母再除；或直接「除以一個分數＝乘以它的倒數」。',
        ex: '[[3/4]]÷[[2/5]]：通分 [[15/20]]÷[[8/20]]＝15÷8＝[[15/8]]。<br>乘倒數：[[3/4]]×[[5/2]]＝<b>[[15/8]]</b>，一樣。',
        why: '通分後是 (3×5)÷(4×2)，剛好就是 [[3/4]]×[[5/2]] 的算法，所以除以 [[2/5]] 就等於乘以倒數 [[5/2]]。' },
      { t: '應用題：「每份多少，可以分成幾份」和「幾份共多少，求 1 份」都用除法。',
        ex: '包含除：[[9/2]] 公升果汁每杯 [[3/4]] 公升 → [[9/2]]÷[[3/4]]＝<b>6 杯</b>。<br>等分除：[[3/4]] 公尺的鐵條重 [[3/5]] 公斤，1 公尺重 [[3/5]]÷[[3/4]]＝<b>[[4/5]] 公斤</b>。',
        why: '求 1 公尺多重：總重量÷總長度。長度不是整數也一樣用除法。' },
      { t: '除數比 1 大，商比被除數小；除數比 1 小，商比被除數大。',
        ex: '6÷[[3/2]]＝4（比 6 小）；6÷[[2/3]]＝9（比 6 大）。',
        why: '除以比 1 小的數，等於問「裡面有幾個小份量」，份量越小，裝得下的份數就越多。' }
    ],
    gens: [
      // d1 約成最簡分數
      { k: 'simp', d: 1, n: 4, f: function (r) {
        var x = prop(r, 3, 12); if (!x) return null;
        var k = H.ri(r, 2, 9), n = x[0] * k, d = x[1] * k;
        return H.Q('把 ' + H.fr(n, d) + ' 約成最簡分數。' + S,
          n + ' 和 ' + d + ' 的最大公因數是 ' + k + '，分子分母同除以 ' + k + '：' + H.fr(n, d) + '＝' + H.fmt(x) + '。',
          H.num(x, { form: 'f', simp: true }), { n: n, d: d });
      } },
      // d1 選出最簡分數（值用 'n/d' 字串，沒約分的不會跟約分後的混在一起）
      { k: 'isimp', d: 1, n: 4, f: function (r) {
        var c = [], seen = {};
        for (var t = 0; t < 60 && c.length < 6; t++) {
          var d = H.ri(r, 4, 20), n = H.ri(r, 2, d - 1), s = n + '/' + d, v = H.R(n, d).join();
          if (!seen[s] && !seen[v]) { seen[s] = seen[v] = 1; c.push(s); }
        }
        var good = c.filter(function (s) { var p = s.split('/'); return H.gcd(+p[0], +p[1]) === 1; }).length;
        if (c.length < 6 || good < 2 || good > 4) return null;
        var show = function (s) { var p = s.split('/'); return H.fr(p[0], p[1]); };
        return H.Q('下面哪些是最簡分數？<b>全部選出來。</b>',
          c.map(function (s) { var p = s.split('/'), g = H.gcd(+p[0], +p[1]); return show(s) + (g > 1 ? '：分子分母都能被 ' + g + ' 整除，還能約' : '：最簡'); }).join('；') + '。',
          H.set(c, function (s) { var p = s.split('/'); return H.gcd(+p[0], +p[1]) === 1; }, show), { cand: c });
      } },
      // d1 同分母相除
      { k: 'same', d: 1, n: 5, f: function (r) {
        var d = H.ri(r, 3, 13), a = H.ri(r, 1, 2 * d), b = H.ri(r, 1, d - 1);
        if (a === b || a % d === 0 || H.gcd(a, d) !== 1 || H.gcd(b, d) !== 1) return null;
        var A = H.R(a, d), B = H.R(b, d), q = H.R(a, b);
        return H.Q(F(A) + '÷' + H.fmt(B) + '＝？' + S,
          (a > d ? F(A) + '＝' + H.fr(a, d) + '。' : '') + '分母一樣，直接用分子相除：' + a + '÷' + b + '＝' + H.fmt(q) + '。',
          H.num(q, { form: 'f', simp: true, err: [[H.mul(A, B), '÷ 不是 ×；同分母相除，看分子相除就好。'], [H.R(b, a), '被除數和除數放反了。']] }), { a: a, b: b, d: d });
      } },
      // d1 異分母、整數÷分數、帶分數÷分數
      { k: 'diff', d: 1, n: 6, f: function (r, _, i) {
        var a, b = prop(r, 2, 9); if (!b) return null;
        if (i % 3 === 0) { a = prop(r, 2, 9); if (!a || a[1] === b[1]) return null; }
        else if (i % 3 === 1) a = H.R(H.ri(r, 2, 12));
        else { var p = prop(r, 2, 6); if (!p) return null; a = H.add(H.ri(r, 1, 3), p); }
        if (H.eq(a, b)) return null;
        return H.Q(F(a) + '÷' + H.fmt(b) + '＝？' + S, (i % 3 === 2 ? '帶分數先化成假分數：' + F(a) + '＝' + H.fmt(a) + '。' : '') + divWhy(a, b),
          H.num(H.div(a, b), { form: 'f', simp: true, err: DIVERR(a, b) }), { a: a, b: b });
      } },
      // d2 除以分數＝乘以倒數（選擇）
      { k: 'recip', d: 2, n: 4, f: function (r) {
        var a = prop(r, 2, 9), c = prop(r, 2, 9); if (!a || !c || H.eq(a, c)) return null;
        var show = function (o) { return H.fr(o[0], o[1]) + '×' + H.fr(o[2], o[3]); };
        return H.Q(H.fmt(a) + '÷' + H.fmt(c) + ' 的答案和下面哪一個算式一樣？',
          '除以 ' + H.fmt(c) + ' 等於乘以它的倒數 ' + H.fr(c[1], c[0]) + '；被除數 ' + H.fmt(a) + ' 不用倒過來。',
          H.mc([a[0], a[1], c[1], c[0]], [[a[0], a[1], c[0], c[1]], [a[1], a[0], c[1], c[0]], [a[1], a[0], c[0], c[1]]], show), { a: a, c: c });
      } },
      // d2 包含除：可以分成幾份
      { k: 'inclu', d: 2, n: 5, f: function (r) {
        var T = H.pick(r, [['一條長 {X} 公尺的緞帶，每 {p} 公尺剪成一段，可以剪成幾段？', '段'], ['一壺 {X} 公升的紅茶，每杯倒 {p} 公升，可以倒滿幾杯？', '杯'],
          ['{X} 公斤的麵粉，每 {p} 公斤裝成一袋，可以裝成幾袋？', '袋'], ['運動會要用 {X} 公尺長的彩帶做裝飾，每 {p} 公尺綁一個結，可以綁幾個結？', '個']]);
        var p = prop(r, 3, 10), k = H.ri(r, 3, 20); if (!p) return null;
        var X = H.mul(p, k);
        return H.Q(T[0].replace('{X}', F(X)).replace('{p}', H.fmt(p)),
          '問「裡面有幾個 ' + H.fmt(p) + '」用除法：' + F(X) + '÷' + H.fmt(p) + '＝' + H.fmt(X) + '×' + H.fr(p[1], p[0]) + '＝' + k + '（' + T[1] + '）。',
          H.num(k, { suf: T[1], err: [[H.mul(X, p), '問可以分成幾份要用除法，不是乘法。']] }), { X: X, p: p });
      } },
      // d2 等分除：求 1 單位
      { k: 'equal', d: 2, n: 5, f: function (r) {
        var T = H.pick(r, [['一段 {a} 公尺長的鐵條重 {c} 公斤，1 公尺重幾公斤？', '公斤'], ['阿哲 {a} 小時走了 {c} 公里，照這樣的速度，1 小時走幾公里？', '公里'],
          ['用 {a} 公升的油漆可以漆 {c} 平方公尺的牆，1 公升可以漆幾平方公尺？', '平方公尺'], ['{a} 盒的布丁一共重 {c} 公斤，1 盒重幾公斤？', '公斤']]);
        var a = prop(r, 2, 9), c = prop(r, 2, 9); if (!a || !c || H.eq(a, c)) return null;
        if (T[0].indexOf('盒') >= 0) a = H.R(H.ri(r, 2, 9));
        var q = H.div(c, a);
        return H.Q(T[0].replace('{a}', F(a)).replace('{c}', F(c)) + S,
          '求 1 份的量：總量÷份數。' + divWhy(c, a),
          H.num(q, { form: 'f', simp: true, err: [[H.div(a, c), '被除數和除數放反了：要用總量（' + T[1] + '）÷ 份數。'], [H.mul(a, c), '求 1 份的量要用除法，不是乘法。']] }), { a: a, c: c });
      } },
      // d2 商比被除數大／小（選擇）
      { k: 'bigger', d: 2, n: 4, f: function (r, _, i) {
        var A = prop(r, 2, 9), up = i % 2 === 0; if (!A) return null;
        var ds = [], seen = {};
        for (var t = 0; t < 60 && ds.length < 5; t++) {
          var lt = ds.length === 0 ? up : !up, d = lt ? prop(r, 2, 9) : imp(r);
          if (!d || seen[d.join()]) continue; seen[d.join()] = 1; ds.push(d);
        }
        var show = function (d) { return H.fmt(A) + '÷' + H.fmt(d); };
        return H.Q('下面哪一個算式的商比 ' + H.fmt(A) + (up ? ' 大' : ' 小') + '？（不用算出答案）',
          '除數比 1 小，商就比被除數大；除數比 1 大，商就比被除數小。' + (up ? '除數 ' + H.fmt(ds[0]) + ' 比 1 小' : '除數 ' + H.fmt(ds[0]) + ' 比 1 大') + '，所以選 ' + show(ds[0]) + '。',
          H.mc(ds[0], ds.slice(1), show), { A: A, up: up });
      } },
      // d3 哪些算式的商比被除數大（列舉）
      { k: 'qset', d: 3, n: 3, f: function (r) {
        var c = [], g = H.ri(r, 2, 3);
        for (var t = 0; t < 40 && c.length < 5; t++) {
          var A = prop(r, 2, 9), D = c.length < g ? prop(r, 2, 9) : imp(r); if (!A || !D) continue;
          var s = A.join() + ':' + D.join(); if (c.some(function (o) { return o.s === s; })) continue;
          c.push({ s: s, A: A, D: D });
        }
        if (c.length < 5) return null;
        c = H.shuffle(c, r).map(function (o) { return { A: o.A, D: o.D }; });
        var show = function (o) { return H.fmt(o.A) + '÷' + H.fmt(o.D); };
        return H.Q('下面哪些算式的商比被除數大？<b>全部選出來。</b>（不用算出答案）',
          '看除數：除數比 1 小，商就比被除數大。' + c.map(function (o) { return show(o) + '：除數' + (H.cmp(o.D, 1) < 0 ? '比 1 小 → 商變大' : '比 1 大 → 商變小'); }).join('；') + '。',
          H.set(c, function (o) { return H.cmp(o.D, 1) < 0; }, show), { cand: c });
      } },
      // d3 先減再包含除
      { k: 'multi', d: 3, n: 4, f: function (r) {
        var T = H.pick(r, [['一桶 {X} 公升的果汁，先喝掉 {Y} 公升，剩下的每 {p} 公升裝一瓶，可以裝滿幾瓶？', '瓶'],
          ['一條 {X} 公尺的繩子，先剪下 {Y} 公尺綁東西，剩下的每 {p} 公尺剪一段，可以剪成幾段？', '段'],
          ['一包 {X} 公斤的米，煮掉 {Y} 公斤後，剩下的每 {p} 公斤裝一盒，可以裝成幾盒？', '盒']]);
        var p = prop(r, 3, 8), Y = prop(r, 2, 6), k = H.ri(r, 3, 12); if (!p || !Y) return null;
        var rest = H.mul(p, k), X = H.add(rest, Y);
        return H.Q(T[0].replace('{X}', F(X)).replace('{Y}', H.fmt(Y)).replace('{p}', H.fmt(p)),
          '先算剩下：' + F(X) + '－' + H.fmt(Y) + '＝' + F(rest) + '；再算有幾個 ' + H.fmt(p) + '：' + F(rest) + '÷' + H.fmt(p) + '＝' + k + '（' + T[1] + '）。',
          H.num(k, { suf: T[1], err: [[H.div(X, p), '忘了先減掉用掉的 ' + H.fmt(Y) + '。']] }), { X: X, Y: Y, p: p });
      } },
      // d3 面積求邊長
      { k: 'area', d: 3, n: 3, f: function (r, _, i) {
        var w = prop(r, 2, 9), l = H.add(H.ri(r, 1, 3), prop(r, 2, 5) || H.R(1, 2)); if (!w) return null;
        var A = H.mul(l, w), sh = i % 2 ? ['平行四邊形', '高', '底'] : ['長方形', '寬', '長'];
        return H.Q(sh[0] + '的面積是 ' + F(A) + ' 平方公尺，' + sh[1] + '是 ' + H.fmt(w) + ' 公尺，' + sh[2] + '是幾公尺？' + S,
          '面積＝' + sh[2] + '×' + sh[1] + '，所以' + sh[2] + '＝面積÷' + sh[1] + '＝' + F(A) + '÷' + H.fmt(w) + '＝' + H.fmt(A) + '×' + H.fr(w[1], w[0]) + '＝' + F(l) + '（公尺）。',
          H.num(l, { form: 'f', simp: true, err: [[H.mul(A, w), '已知面積求邊長要用除法。']] }), { A: A, w: w });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
