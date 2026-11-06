/* 六上 單元四 小數除法（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a4.js。 */
(function (MG) {
  'use strict';
  var H = MG.H;
  var PLACE = ['整數', '小數第一位', '小數第二位', '小數第三位'];
  function p10(k) { var x = 1; while (k-- > 0) x *= 10; return x; }
  var dec = function (x) { return H.fmt(x, 'dec'); };
  var D = H.fromDec;
  function places(x) { var s = H.toDec(x); return s && s.indexOf('.') >= 0 ? s.split('.')[1].length : 0; }
  function decStr(t, k) { if (!k) return String(t); var s = String(t); while (s.length <= k) s = '0' + s; return s.slice(0, -k) + '.' + s.slice(-k); }
  // 除數變整數的說明：a÷b，b 有 k 位小數 → 兩個都乘 10^k
  function shiftWhy(a, b) {
    var k = places(b), P = p10(k), A = H.mul(a, P), B = H.mul(b, P);
    return '除數 ' + dec(b) + ' 有 ' + k + ' 位小數，被除數和除數都乘 ' + P + '（小數點一起往右移 ' + k + ' 位），商不變：' + dec(a) + '÷' + dec(b) + '＝' + dec(A) + '÷' + dec(B) + '＝' + dec(H.div(a, b)) + '。';
  }
  function shiftErr(a, b) { var P = p10(places(b)); return [[H.div(a, H.mul(b, P)), '除數放大了 ' + P + ' 倍，被除數也要跟著放大 ' + P + ' 倍。'], [H.mul(a, b), '÷ 不是 ×。']]; }
  // 四捨五入到第 k 位
  function roundR(x, k) {
    x = H.R(x); var P = p10(k), q = Math.floor(x[0] * P / x[1]), rem = x[0] * P - q * x[1], t = Math.floor(x[0] * P * 10 / x[1]);
    return { ans: H.R(rem * 2 >= x[1] ? q + 1 : q, P), low: H.R(q, P), cut: decStr(t, k + 1), nx: t % 10 };
  }
  // 一位或兩位小數（不是整數、最後一位不是 0）
  function rdec(r, k, lo, hi) { var t = H.ri(r, lo, hi); return t % 10 ? H.R(t, p10(k)) : null; }

  MG.unit({
    id: 'g6a4', pending: '待課本核對',
    cards: [
      { t: '整數÷小數：被除數和除數同乘 10、100…，把除數變成整數再除，商不變。',
        ex: '12÷0.4：兩個都乘 10 → 120÷4＝<b>30</b>。<br>驗算：30×0.4＝12。',
        why: '被除數和除數同乘一個數，商不變（就像 6÷2＝60÷20＝3）。把除數變整數，就能用學過的除法。' },
      { t: '小數÷小數：除數有幾位小數，兩個數的小數點就一起往右移幾位。',
        ex: '2.88÷0.12：除數兩位小數，都往右移 2 位 → 288÷12＝<b>24</b>。<br>7.2÷0.15：都乘 100 → 720÷15＝<b>48</b>（7.2 後面補 0）。',
        why: '只看除數決定要移幾位；被除數跟著移，位數不夠就補 0。除數變整數後商的小數點對齊被除數新的小數點。' },
      { t: '有餘數時：商算到整數，餘數的小數點要對齊「原來」被除數的小數點。',
        ex: '12.5 公升果汁，每瓶裝 0.6 公升：125÷6＝20 餘 5 → 可以裝滿 <b>20 瓶，剩 0.5 公升</b>。<br>驗算：0.6×20＋0.5＝12.5。',
        why: '移位只是方便算，剩下的果汁還是原來的單位；125 是 125 個 0.1 公升，餘數 5 就是 5 個 0.1 公升＝0.5 公升。' },
      { t: '除不盡時，商用四捨五入取概數：多除一位再看那一位。',
        ex: '5÷0.7 取到小數第一位：50÷7＝7.14…，第二位是 4 → 捨去 → 約 <b>7.1</b>。',
        why: '答案只留到第一位，第二位用來決定進不進位，所以要多除一位。' },
      { t: '除數比 1 大，商比被除數小；除數比 1 小，商比被除數大。',
        ex: '6÷1.5＝4（比 6 小）；6÷0.5＝12（比 6 大）。',
        why: '0.5 比 1 小，6 裡面裝得下很多個 0.5，所以商變大。' }
    ],
    gens: [
      // d1 整數÷小數
      { k: 'intdec', d: 1, n: 6, f: function (r) {
        var b = D(H.pick(r, ['0.2', '0.4', '0.5', '0.8', '0.25', '0.75', '1.2', '1.5', '2.5', '0.6', '0.3', '0.05', '0.04', '1.6'])), a = H.R(H.ri(r, 2, 60)), q = H.div(a, b);
        if (!H.toDec(q) || places(q) > 1) return null;
        return H.Q(a[0] + '÷' + dec(b) + '＝？', shiftWhy(a, b), H.num(q, { err: shiftErr(a, b) }), { a: dec(a), b: dec(b) });
      } },
      // d1 小數÷小數
      { k: 'decdec', d: 1, n: 5, f: function (r, _, i) {
        var b = i % 2 ? rdec(r, 2, 11, 99) : rdec(r, 1, 11, 99), q = i % 3 === 2 ? rdec(r, 1, 11, 99) : H.R(H.ri(r, 2, 40)); if (!b || !q) return null;
        var a = H.mul(b, q); if (!places(a) || places(a) > 3) return null;
        return H.Q(dec(a) + '÷' + dec(b) + '＝？', shiftWhy(a, b), H.num(q, { err: shiftErr(a, b) }), { a: dec(a), b: dec(b) });
      } },
      // d1 哪一個算式的商一樣（選擇）
      { k: 'shift', d: 1, n: 4, f: function (r) {
        var b = rdec(r, H.ri(r, 1, 2), 11, 99), q = H.R(H.ri(r, 3, 40)); if (!b) return null;
        var a = H.mul(b, q), k = places(b); if (!places(a)) return null;
        var opt = function (i, j) { return dec(H.mul(a, p10(i))) + '÷' + dec(H.mul(b, p10(j))); }, w = [];
        for (var i = 0; i <= 3; i++) for (var j = 0; j <= 3; j++) if (i !== j && (i === k || j === k)) w.push(opt(i, j));
        return H.Q(dec(a) + '÷' + dec(b) + ' 的商和下面哪一個算式的商一樣？',
          '被除數和除數要「一起」乘一樣的數，商才不變。除數 ' + dec(b) + ' 乘 ' + p10(k) + ' 變成整數，被除數也要乘 ' + p10(k) + '：' + opt(k, k) + '。',
          H.mc(opt(k, k), H.shuffle(w, r)), { a: dec(a), b: dec(b) });
      } },
      // d2 有餘數（裝幾瓶、剩多少）
      { k: 'rem', d: 2, n: 5, f: function (r) {
        var T = H.pick(r, [['{X} 公升的果汁，每 {b} 公升裝一瓶，可以裝滿幾瓶？還剩幾公升？', ['瓶，剩', '公升']],
          ['一條 {X} 公尺的緞帶，每 {b} 公尺剪一段，可以剪成幾段？還剩幾公尺？', ['段，剩', '公尺']],
          ['{X} 公斤的白米，每 {b} 公斤裝一袋，可以裝滿幾袋？還剩幾公斤？', ['袋，剩', '公斤']]]);
        var bt = H.ri(r, 3, 25), q = H.ri(r, 3, 30), rt = H.ri(r, 1, bt - 1); if (bt % 10 === 0) return null;
        var b = H.R(bt, 10), X = H.R(q * bt + rt, 10), rem = H.R(rt, 10);
        return H.Q(T[0].replace('{X}', dec(X)).replace('{b}', dec(b)),
          '都乘 10：' + (q * bt + rt) + '÷' + bt + '＝' + q + ' 餘 ' + rt + '。餘數要對齊原來的小數點：' + rt + ' 個 0.1 是 ' + dec(rem) + '。驗算：' + dec(b) + '×' + q + '＋' + dec(rem) + '＝' + dec(X) + '。',
          H.nums([q, rem], T[1], { err: [[rt, '餘數的小數點要對齊原來被除數的小數點：' + rt + ' 個 0.1 是 ' + dec(rem) + '。']] }), { X: dec(X), b: dec(b) });
      } },
      // d2 商四捨五入
      { k: 'round', d: 2, n: 4, f: function (r, _, i) {
        var k = i % 3, a = rdec(r, 1, 11, 199), b = rdec(r, 1, 3, 29); if (!a || !b) return null;
        var x = H.div(a, b); if (H.toDec(x) && places(x) <= k + 1) return null;
        var o = roundR(x, k);
        return H.Q(dec(a) + '÷' + dec(b) + '，商用四捨五入法取到' + PLACE[k] + '，是多少？',
          '都乘 10：' + dec(H.mul(a, 10)) + '÷' + dec(H.mul(b, 10)) + '。多除一位，除到' + PLACE[k + 1] + '：' + o.cut + '…，' + PLACE[k + 1] + '是 ' + o.nx + '，' + (o.nx >= 5 ? '5 以上進 1' : '比 5 小捨去') + '，約 ' + decStr(H.mul(o.ans, p10(k))[0], k) + '。',
          H.num(o.ans, { err: H.eq(o.low, o.ans) ? [] : [[o.low, '只算到要的那一位就停了；要多除一位，看下一位決定要不要進 1。']] }), { a: dec(a), b: dec(b), k: k });
      } },
      // d2 生活中的除法（除得盡）
      { k: 'life', d: 2, n: 5, f: function (r, _, i) {
        var b, X, q, t, u;
        if (i % 4 === 0) { b = rdec(r, 1, 3, 25); q = H.R(H.ri(r, 4, 30)); u = '段'; if (b) { X = H.mul(b, q); t = '一條 ' + dec(X) + ' 公尺的繩子，每 ' + dec(b) + ' 公尺剪一段，剛好剪完，可以剪成幾段？'; } }
        else if (i % 4 === 1) { b = rdec(r, 1, 12, 35); q = H.R(H.ri(r, 4, 30) * 5); u = '元'; if (b) { X = H.mul(b, q); t = '夜市的芭樂 ' + dec(b) + ' 公斤賣 ' + dec(X) + ' 元，1 公斤賣幾元？'; } }
        else if (i % 4 === 2) { b = rdec(r, 1, 15, 60); q = rdec(r, 1, 81, 199); u = '公里'; if (b && q) { X = H.mul(b, q); t = '一輛機車用 ' + dec(b) + ' 公升汽油跑了 ' + dec(X) + ' 公里，1 公升汽油可以跑幾公里？'; } }
        else { b = rdec(r, 1, 21, 89); q = rdec(r, 1, 31, 129); u = '公尺'; if (b && q) { X = H.mul(b, q); t = '一塊長方形花圃的面積是 ' + dec(X) + ' 平方公尺，寬 ' + dec(b) + ' 公尺，長是幾公尺？'; } }
        if (!t || !H.toDec(X) || places(X) > 2 || (u !== '元' && u !== '段' && !places(X))) return null;
        if (u === '元' && X[1] !== 1) return null;
        return H.Q(t, '用除法：' + shiftWhy(X, b).replace(/。$/, '') + '（' + u + '）。', H.num(q, { suf: u, err: shiftErr(X, b) }), { X: dec(X), b: dec(b) });
      } },
      // d2 商比被除數大／小（選擇）
      { k: 'cmp', d: 2, n: 4, f: function (r, _, i) {
        var A = H.pick(r, ['24', '36', '4.8', '7.2', '15', '0.9', '12.6']), up = i % 2 === 0, ds = [], seen = {};
        for (var t = 0; t < 60 && ds.length < 5; t++) {
          var lt = ds.length === 0 ? up : !up, d = lt ? H.pick(r, ['0.2', '0.5', '0.8', '0.25', '0.9', '0.04', '0.6', '0.75', '0.35']) : H.pick(r, ['1.2', '2.5', '1.5', '3.6', '1.05', '4.8', '2.4', '1.25', '2.75']);
          if (!seen[d]) { seen[d] = 1; ds.push(d); }
        }
        var show = function (d) { return A + '÷' + d; };
        return H.Q('下面哪一個算式的商比 ' + A + (up ? ' 大' : ' 小') + '？（不用算出答案）',
          '除數比 1 小，商就比被除數大；除數比 1 大，商就比被除數小。除數 ' + ds[0] + (up ? ' 比 1 小' : ' 比 1 大') + '，所以選 ' + show(ds[0]) + '。',
          H.mc(ds[0], ds.slice(1), show), { A: A, up: up });
      } },
      // d3 哪些商比被除數大（列舉）
      { k: 'qset', d: 3, n: 3, f: function (r) {
        var g = H.ri(r, 2, 3), c = [], seen = {};
        for (var t = 0; t < 60 && c.length < 5; t++) {
          var a = H.pick(r, ['3.6', '18', '0.72', '5.4', '42', '9.6', '2.5']), d = c.length < g ? H.pick(r, ['0.3', '0.8', '0.45', '0.9', '0.06']) : H.pick(r, ['1.2', '2.4', '1.8', '6.5', '1.01']);
          if (seen[a] || seen[d]) continue; seen[a] = seen[d] = 1; c.push({ a: a, d: d });
        }
        if (c.length < 5) return null;
        c = H.shuffle(c, r);
        var show = function (o) { return o.a + '÷' + o.d; };
        return H.Q('下面哪些算式的商比被除數大？<b>全部選出來。</b>（不用算出答案）',
          '看除數：比 1 小，商就比被除數大。' + c.map(function (o) { return show(o) + '：除數' + (H.cmp(D(o.d), 1) < 0 ? '比 1 小 → 商變大' : '比 1 大 → 商變小'); }).join('；') + '。',
          H.set(c, function (o) { return H.cmp(D(o.d), 1) < 0; }, show), { cand: c });
      } },
      // d3 最多、至少（有餘數怎麼處理）
      { k: 'ceil', d: 3, n: 5, f: function (r, _, i) {
        var bt = H.ri(r, 12, 75), Xt = H.ri(r, 20, 150) * 10; if (bt % 10 === 0 || Xt % bt === 0) return null;
        var b = H.R(bt, 100), X = H.R(Xt, 100), fl = Math.floor(Xt / bt);
        if (i % 2 === 0) return H.Q('做一個蝴蝶結要用 ' + dec(b) + ' 公尺的緞帶，' + dec(X) + ' 公尺的緞帶最多可以做幾個蝴蝶結？',
          '都乘 100：' + Xt + '÷' + bt + '＝' + fl + ' 餘 ' + (Xt - fl * bt) + '。剩下的緞帶不夠再做一個，捨去，最多 ' + fl + ' 個。',
          H.num(fl, { suf: '個', err: [[fl + 1, '剩下的緞帶不夠做一個，不能進位。']] }), { X: dec(X), b: dec(b), up: false });
        return H.Q('每個水壺最多裝 ' + dec(b) + ' 公升，要把 ' + dec(X) + ' 公升的開水全部裝完，至少要幾個水壺？',
          '都乘 100：' + Xt + '÷' + bt + '＝' + fl + ' 餘 ' + (Xt - fl * bt) + '。剩下的水也要裝，再多 1 個，至少 ' + (fl + 1) + ' 個。',
          H.num(fl + 1, { suf: '個', err: [[fl, '還有剩下的水沒裝，要再多 1 個水壺。']] }), { X: dec(X), b: dec(b), up: true });
      } },
      // d3 多步驟
      { k: 'multi', d: 3, n: 4, f: function (r, _, i) {
        if (i % 2 === 0) {
          var b = rdec(r, 2, 15, 85), k = H.ri(r, 4, 20), Y = rdec(r, 1, 3, 25); if (!b || !Y) return null;
          var rest = H.mul(b, k), X = H.add(rest, Y); if (places(X) > 2) return null;
          return H.Q('一包 ' + dec(X) + ' 公斤的米，煮掉 ' + dec(Y) + ' 公斤後，剩下的每 ' + dec(b) + ' 公斤裝成一盒，剛好裝完，可以裝成幾盒？',
            '先算剩下：' + dec(X) + '－' + dec(Y) + '＝' + dec(rest) + '（公斤）；再除：' + dec(rest) + '÷' + dec(b) + '＝' + k + '（盒）。',
            H.num(k, { suf: '盒', err: [[H.div(X, b), '忘了先減掉煮掉的 ' + dec(Y) + ' 公斤。']] }), { X: dec(X), Y: dec(Y), b: dec(b), mode: 'rest' });
        }
        var p = H.ri(r, 12, 30) * 5, a = rdec(r, 1, 12, 45), c = rdec(r, 1, 12, 45); if (!a || !c || H.eq(a, c)) return null;
        var X2 = H.mul(a, p), ans = H.mul(c, p); if (X2[1] !== 1 || ans[1] !== 1) return null;
        return H.Q('媽媽在超市買了 ' + dec(a) + ' 公斤的蘋果，付了 ' + X2[0] + ' 元。同樣的蘋果買 ' + dec(c) + ' 公斤要幾元？',
          '先算 1 公斤：' + X2[0] + '÷' + dec(a) + '＝' + p + '（元）；再算 ' + dec(c) + ' 公斤：' + p + '×' + dec(c) + '＝' + ans[0] + '（元）。',
          H.num(ans, { suf: '元', err: [[p, '這是 1 公斤的價錢，還要乘 ' + dec(c) + '。']] }), { X: String(X2[0]), a: dec(a), c: dec(c), mode: 'price' });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
