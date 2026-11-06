/* 五下 單元二 分數的計算（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b2.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, F = H.fmt, fr = H.fr;
  var M = function (r) { return H.fmt(r, 'mixed'); };
  // 真分數：分母 a～b（會約分）
  function pf(r, a, b) { var d = H.ri(r, a, b); return H.R(H.ri(r, 1, d - 1), d); }
  // 帶分數：整數 a～b，分數部分分母 c～e
  function mx(r, a, b, c, e) { return H.add(H.ri(r, a, b), pf(r, c, e)); }
  // 比 1 大、不是整數的假分數
  function big(r) { var d = H.ri(r, 2, 9); return H.R(H.ri(r, d + 1, 2 * d - 1), d); }
  // 分子乘分子、分母乘分母的過程字
  function prod(a, b) { a = H.R(a); b = H.R(b); var n = a[0] * b[0], d = a[1] * b[1]; return F(a) + '×' + F(b) + '＝' + fr(n, d) + (H.gcd(n, d) === 1 ? '' : '＝' + F(H.R(n, d))); }
  var SIMP = '（用最簡分數表示）';
  // 面積模型：長方形分成 c 欄 × w 列，塗 a 欄 × b 列
  function grid(a, c, b, w, label) {
    var S = 36, x0 = 20, y0 = 14, body = '';
    for (var i = 0; i < c; i++) for (var j = 0; j < w; j++) {
      var fill = i < a && j < b ? '#7fb8f0' : i < a ? '#d6ecff' : '#ffffff';
      body += '<rect x="' + (x0 + i * S) + '" y="' + (y0 + j * S) + '" width="' + S + '" height="' + S + '" fill="' + fill + '" stroke="' + H.INK + '" stroke-width="1.5"/>';
    }
    body += H.txt(x0 + c * S / 2, y0 + w * S + 24, label, { fs: 15 });
    return H.svg(x0 * 2 + c * S, y0 + w * S + 34, body, label);
  }
  // 長方形（標長、寬）
  function rect(lt, wt) {
    var body = '<rect x="20" y="16" width="220" height="110" fill="#d6ecff" stroke="' + H.INK + '" stroke-width="2"/>' + H.txt(130, 150, lt) + H.txt(250, 76, wt, { a: 'start' });
    return H.svg(380, 162, body, '長方形');
  }

  MG.unit({
    id: 'g5b2', pending: '待課本核對',
    cards: [
      { t: '整數×分數：整數去乘分子，分母不變。',
        ex: '4×[[2/7]]：分子 4×2＝8，分母還是 7 → [[8/7]]＝<b>1[[1/7]]</b>。',
        why: '4×[[2/7]] 就是 4 個 [[2/7]] 加起來：[[2/7]]＋[[2/7]]＋[[2/7]]＋[[2/7]]＝[[8/7]]，分母一直是 7。' },
      { t: '分數×分數：分子乘分子、分母乘分母，最後約到最簡。',
        ex: '[[2/3]]×[[3/4]]＝[[6/12]]＝<b>[[1/2]]</b>。也可以先約分：2 和 4 約掉 2、3 和 3 約掉 3，變成 [[1/1]]×[[1/2]]＝[[1/2]]。',
        why: '把一張紙直的切 3 份、橫的切 4 份，共 12 小格；取 [[3/4]] 的 [[2/3]]，深色的正好 6 格，就是 [[6/12]]。',
        svg: grid(2, 3, 3, 4, '深色 6 格／全部 12 格') },
      { t: '帶分數要先化成假分數，再乘。',
        ex: '1[[1/2]]×2[[2/3]]＝[[3/2]]×[[8/3]]＝[[24/6]]＝<b>4</b>。',
        why: '不能「整數乘整數、分數乘分數」再加起來（1×2＋[[1/2]]×[[2/3]]＝2[[1/3]] 是錯的），因為整數部分也要乘到分數部分。' },
      { t: '乘數比 1 大，積變大；乘數等於 1，積不變；乘數比 1 小，積變小。',
        ex: '12×[[5/4]]＝15（比 12 大）<br>12×1＝12（一樣）<br>12×[[3/4]]＝9（比 12 小）',
        why: '乘 [[3/4]] 是「拿 12 的 [[3/4]]」，只拿一部分，當然比原來少；乘 [[5/4]] 是比一整份還多 [[1/4]]。' },
      { t: '分數÷整數：等於乘上「整數分之一」。',
        ex: '[[4/5]]÷2＝[[4/5]]×[[1/2]]＝[[4/10]]＝<b>[[2/5]]</b>；[[3/5]]÷2＝[[3/5]]×[[1/2]]＝<b>[[3/10]]</b>。',
        why: '平分成 2 份，每份就是原來的一半，也就是 [[1/2]] 倍，所以分母變成 2 倍。' }
    ],
    gens: [
      // d1 整數×分數（有時寫成分數×整數）
      { k: 'intfrac', d: 1, n: 7, f: function (r, _, i) {
        var a = H.ri(r, 2, 12), f = pf(r, 3, 12), ans = H.mul(a, f), n = a * f[0];
        var expr = i % 3 === 2 ? F(f) + '×' + a : a + '×' + F(f);
        return H.Q(expr + '＝？' + SIMP,
          '整數只乘分子，分母不變：' + a + '×' + f[0] + '＝' + n + '，得 ' + fr(n, f[1]) + (H.gcd(n, f[1]) === 1 ? '' : '，約分後是 ' + F(ans)) + '。',
          H.num(ans, { form: 'f', simp: true, err: [[f, '分子和分母都乘了 ' + a + '，等於沒變；只有分子要乘。'], [H.R(a + f[0], f[1]), '是乘，不是把 ' + a + ' 加到分子上。']] }), { a: a, f: f });
      } },
      // d1 分數×分數
      { k: 'fracfrac', d: 1, n: 6, f: function (r) {
        var x = pf(r, 2, 9), y = pf(r, 2, 9), ans = H.mul(x, y);
        return H.Q(F(x) + '×' + F(y) + '＝？' + SIMP,
          '分子乘分子、分母乘分母：' + prod(x, y) + '。',
          H.num(ans, { form: 'f', simp: true, err: [[H.add(x, y), '這是兩個分數加起來，題目是乘。'], [H.R(x[0] * y[0], x[1] + y[1]), '分母也要相乘，不是相加。']] }), { x: x, y: y });
      } },
      // d1 分數÷整數
      { k: 'divint', d: 1, n: 5, f: function (r) {
        var f = pf(r, 2, 12), k = H.ri(r, 2, 9), ans = H.div(f, k);
        return H.Q(F(f) + '÷' + k + '＝？' + SIMP,
          '÷' + k + ' 就是 ×' + fr(1, k) + '：' + prod(f, H.R(1, k)) + '。',
          H.num(ans, { form: 'f', simp: true, err: [[H.mul(f, k), '÷' + k + ' 不是 ×' + k + '；平分會變小，要乘 ' + fr(1, k) + '。']] }), { f: f, k: k });
      } },
      // d2 帶分數的乘法
      { k: 'mixed', d: 2, n: 5, f: function (r, _, i) {
        var x = mx(r, 1, 3, 2, 6), y = i % 2 ? pf(r, 2, 9) : mx(r, 1, 3, 2, 6), ans = H.mul(x, y);
        if (H.cmp(ans, 1) <= 0 || ans[1] === 1) return null;   // 要是帶分數
        var wrong = [], xw = Math.floor(x[0] / x[1]), yw = Math.floor(y[0] / y[1]);
        if (yw) wrong.push([H.add(xw * yw, H.mul(H.sub(x, xw), H.sub(y, yw))), '不能整數乘整數、分數乘分數再加起來，要先化成假分數。']);
        return H.Q(M(x) + '×' + M(y) + '＝？（用最簡的帶分數表示）',
          '先把帶分數化成假分數：' + M(x) + '＝' + F(x) + (yw ? '，' + M(y) + '＝' + F(y) : '') + '。再乘：' + prod(x, y) + '＝' + M(ans) + '。',
          H.num(ans, { form: 'f', simp: true, mixed: true, err: wrong }), { x: x, y: y });
      } },
      // d2 哪一個算式的積比被乘數大／小（選擇）
      { k: 'bigger', d: 2, n: 5, f: function (r, _, i) {
        var A = H.ri(r, 12, 36), up = i % 2 === 0, useM = H.ri(r, 0, 1);
        var show = function (m) { return A + '×' + (useM ? M(m) : F(m)); };
        var less = [pf(r, 3, 12), pf(r, 3, 12), pf(r, 5, 12), pf(r, 5, 12)], more = [big(r), big(r), big(r), big(r)];
        var ans = up ? more[0] : less[0], wrong = [H.R(1)].concat(up ? less : more.slice(0)).filter(function (m) { return !H.eq(m, ans); });
        return H.Q('下面哪一個算式的積比 ' + A + ' ' + (up ? '大' : '小') + '？（不用算出來）',
          '乘數比 1 大，積就比 ' + A + ' 大；乘數比 1 小，積就比 ' + A + ' 小；乘 1 一樣大。' + show(ans) + ' 的乘數' + (up ? '比 1 大' : '比 1 小') + '。',
          H.mc(ans, wrong, show), { A: A, up: up });
      } },
      // d2 列出全部：積比被乘數小／大
      { k: 'relset', d: 2, n: 5, f: function (r, _, i) {
        var A = i % 2 ? pf(r, 3, 9) : H.R(H.ri(r, 6, 30)), small = i % 3 !== 1, cand = [H.R(1)], seen = { '1/1': 1 };
        var addU = function (m) { var s = m.join('/'); if (seen[s]) return false; seen[s] = 1; cand.push(m); return true; };
        for (var t = 0; t < 2; t++) while (!addU(pf(r, 3, 12)));
        for (t = 0; t < 2; t++) while (!addU(big(r)));
        cand = H.shuffle(cand, r);
        var show = function (m) { return F(A) + '×' + F(m); };
        return H.Q('下面哪些算式的積比 ' + F(A) + ' ' + (small ? '小' : '大') + '？<b>全部選出來。</b>（不用算出來）',
          '看乘數就好：乘數' + (small ? '比 1 小' : '比 1 大') + '的，積就比 ' + F(A) + (small ? ' 小' : ' 大') + '；乘 1 一樣大，不算。',
          H.set(cand, function (m) { return H.cmp(m, 1) === (small ? -1 : 1); }, show), { A: A, small: small });
      } },
      // d2 一步應用
      { k: 'life', d: 2, n: 6, f: function (r, _, i) {
        var t = i % 3, a, b, q, ans, why, suf, err = [];
        if (t === 0) {
          a = H.ri(r, 3, 9); b = pf(r, 3, 8); ans = H.mul(a, b); suf = '公升';
          q = '一瓶果汁有 ' + F(b) + ' 公升，' + H.pick(r, ['媽媽', '老師', '阿姨']) + '買了 ' + a + ' 瓶，一共有幾公升？';
          why = '一瓶 ' + F(b) + ' 公升，' + a + ' 瓶就是 ' + a + '×' + F(b) + '＝' + F(ans) + '（公升）。';
        } else if (t === 1) {
          a = pf(r, 3, 9); b = pf(r, 2, 6); ans = H.mul(a, b); suf = '公斤';
          q = '一盒' + H.pick(r, ['蛋糕', '鳳梨酥', '綠豆糕']) + '重 ' + F(a) + ' 公斤，小明吃了這盒的 ' + F(b) + '。小明吃了幾公斤？';
          why = '「' + F(a) + ' 公斤的 ' + F(b) + '」就是 ' + F(a) + '×' + F(b) + '：' + prod(a, b) + '（公斤）。';
          err.push([H.mul(b, 1), '這是吃掉的比例，還要乘上整盒的重量。']);
        } else {
          a = mx(r, 2, 4, 2, 5); b = pf(r, 2, 6); ans = H.mul(a, b); suf = '公里';
          q = '阿哲騎腳踏車，每小時騎 ' + M(a) + ' 公里。照這樣騎 ' + F(b) + ' 小時，可以騎幾公里？';
          why = '距離＝每小時騎的×時間：' + M(a) + '×' + F(b) + '＝' + F(a) + '×' + F(b) + '＝' + F(ans) + '（公里）。';
        }
        return H.Q(q + '（用最簡分數或帶分數表示）', why, H.num(ans, { form: 'f', simp: true, suf: suf, err: err }), { t: t, a: a, b: b });
      } },
      // d2 平分（分數÷整數，含帶分數）
      { k: 'share', d: 2, n: 5, f: function (r, _, i) {
        var tot = i % 2 ? mx(r, 1, 3, 2, 5) : pf(r, 3, 9), k = H.ri(r, 2, 6), ans = H.div(tot, k);
        var what = H.pick(r, [['公升的牛奶', '杯', '公升'], ['公尺的緞帶', '段', '公尺'], ['公斤的白米', '袋', '公斤']]);
        return H.Q(M(tot) + ' ' + what[0] + '平分成 ' + k + ' ' + what[1] + '，每' + what[1] + '是幾' + what[2] + '？' + SIMP,
          (i % 2 ? '先化成假分數 ' + M(tot) + '＝' + F(tot) + '，' : '') + '平分成 ' + k + ' 份就是 ÷' + k + '，也就是 ×' + fr(1, k) + '：' + F(tot) + '×' + fr(1, k) + '＝' + F(ans) + '（' + what[2] + '）。',
          H.num(ans, { form: 'f', simp: true, suf: what[2], err: [[H.mul(tot, k), '平分會變少，是 ÷' + k + '，不是 ×' + k + '。']] }), { tot: tot, k: k });
      } },
      // d3 用掉一部分，剩下多少（有時再平分）
      { k: 'remain', d: 3, n: 5, f: function (r, _, i) {
        var L = mx(r, 2, 5, 2, 4), f = pf(r, 3, 6), k = i % 2 ? H.ri(r, 2, 4) : 1, left = H.mul(L, H.sub(1, f)), ans = H.div(left, k);
        var q = '一條繩子長 ' + M(L) + ' 公尺，做勞作用掉了全長的 ' + F(f) + '。' + (k > 1 ? '剩下的再平分成 ' + k + ' 段，每段是幾公尺？' : '剩下幾公尺？');
        var why = '用掉 ' + F(f) + '，剩下全長的 1－' + F(f) + '＝' + F(H.sub(1, f)) + '：' + M(L) + '×' + F(H.sub(1, f)) + '＝' + F(L) + '×' + F(H.sub(1, f)) + '＝' + F(left) + '（公尺）' + (k > 1 ? '；再 ÷' + k + '＝' + F(ans) + '（公尺）' : '') + '。';
        return H.Q(q + '（用最簡分數或帶分數表示）', why,
          H.num(ans, { form: 'f', simp: true, suf: '公尺', err: [[H.div(H.mul(L, f), k), '這是用掉的，題目問剩下的。']] }), { L: L, f: f, k: k });
      } },
      // d3 長方形面積
      { k: 'area', d: 3, n: 4, f: function (r) {
        var l = mx(r, 2, 6, 2, 4), w = r() < 0.5 ? mx(r, 1, 2, 2, 5) : pf(r, 2, 5), ans = H.mul(l, w);
        return H.Q('長方形花圃長 ' + M(l) + ' 公尺、寬 ' + M(w) + ' 公尺，面積是幾平方公尺？（用最簡分數或帶分數表示）',
          '長×寬：' + M(l) + '×' + M(w) + '＝' + F(l) + '×' + F(w) + '＝' + F(ans) + '＝' + M(ans) + '（平方公尺）。',
          H.num(ans, { form: 'f', simp: true, suf: '平方公尺', err: [[H.mul(H.add(l, w), 2), '這是周長，題目問面積（長×寬）。']] }), { l: l, w: w },
          { svg: rect(M(l).replace(/\[\[(\d+)\/(\d+)\]\]/, ' $1/$2') + ' 公尺', M(w).replace(/\[\[(\d+)\/(\d+)\]\]/, ' $1/$2') + ' 公尺') });
      } },
      // d3 買東西找錢
      { k: 'cost', d: 3, n: 5, f: function (r) {
        var d = H.pick(r, [2, 4, 5]), w = H.add(H.ri(r, 1, 3), H.R(H.ri(r, 1, d - 1), d)), p = d * H.ri(r, 8, 30) * (d === 2 ? 5 : 2), pay = H.mul(w, p), give = pay[0] < 500 ? 500 : pay[0] < 1000 ? 1000 : 2000;
        var fruit = H.pick(r, ['牛肉', '豬肉', '蝦子', '雞肉', '鮭魚']);
        return H.Q('每公斤 ' + p + ' 元的' + fruit + '，媽媽買了 ' + M(w) + ' 公斤，付 ' + give + ' 元，應該找回幾元？',
          '先算要付多少：' + p + '×' + M(w) + '＝' + p + '×' + F(w) + '＝' + pay[0] + '（元）；找回 ' + give + '－' + pay[0] + '＝' + (give - pay[0]) + '（元）。',
          H.num(give - pay[0], { suf: '元', err: [[pay, '這是要付的錢，還要算找回多少。']] }), { d: d, w: w, p: p, give: give });
      } },
      // d1 選出正確的積或商（選擇）
      { k: 'pick', d: 1, n: 4, f: function (r, _, i) {
        var a = H.ri(r, 2, 9), f = pf(r, 3, 12), dv = i % 2 === 1, ans = dv ? H.div(f, a) : H.mul(a, f);
        var wrong = dv ? [H.mul(f, a), H.R(f[0], f[1] + a), H.R(f[0] * a, f[1] * a * a), H.R(f[0] + a, f[1] * a)] : [f, H.R(a + f[0], f[1]), H.R(f[0], a * f[1]), H.R(a * f[0], a * f[1] * f[1])];
        return H.Q('下面哪一個是 ' + (dv ? F(f) + '÷' + a : a + '×' + F(f)) + ' 的答案？',
          dv ? '÷' + a + ' 就是 ×' + fr(1, a) + '：' + prod(f, H.R(1, a)) + '。' : '整數只乘分子，分母不變：' + a + '×' + f[0] + '＝' + a * f[0] + '，得 ' + fr(a * f[0], f[1]) + (H.gcd(a * f[0], f[1]) === 1 ? '' : '＝' + F(ans)) + '。',
          H.mc(ans, wrong), { a: a, f: f, dv: dv });
      } },
      // d3 列出全部：哪些算式的答案比 T 大（要真的算）
      { k: 'overT', d: 3, n: 4, f: function (r) {
        var T = H.ri(r, 2, 4), cand = [], seen = {};
        for (var t = 0; t < 40 && cand.length < 5; t++) {
          var e = { x: mx(r, 1, 3, 2, 5), y: r() < 0.5 ? mx(r, 1, 2, 2, 4) : pf(r, 2, 6) }, key = M(e.x) + M(e.y), p = H.mul(e.x, e.y);
          if (seen[key] || H.eq(p, T)) continue; seen[key] = 1; cand.push(e);
        }
        var big = function (e) { return H.cmp(H.mul(e.x, e.y), T) > 0; }, yes = cand.filter(big).length;
        if (cand.length < 5 || yes < 2 || yes > 4) return null;
        var show = function (e) { return M(e.x) + '×' + M(e.y); };
        return H.Q('下面哪些算式的積比 ' + T + ' 大？<b>全部選出來。</b>',
          '先化成假分數再算：' + cand.map(function (e) { return show(e) + '＝' + M(H.mul(e.x, e.y)); }).join('；') + '。比 ' + T + ' 大的才選。',
          H.set(cand, big, show), { T: T });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
