/* 五下 單元四 小數的乘法（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b4.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma;
  var D = function (r) { return H.fmt(r, 'dec'); };
  var dec = function (n, k) { return H.R(n, Math.pow(10, k)); };                    // n÷10^k
  var places = function (r) { var s = H.toDec(r), i = s.indexOf('.'); return i < 0 ? 0 : s.length - i - 1; };
  // k 位小數（最後一位不是 0）：整數部分 0～w
  function rd(r, k, w) { var n; do { n = H.ri(r, 1, (w + 1) * Math.pow(10, k) - 1); } while (n % 10 === 0); return dec(n, k); }
  var X = function (a, b) { return D(a) + '×' + D(b); };
  // 整數 n 點 k 位小數；末尾有 0 時補上「＝化簡後」
  function pt(n, k) { var s = String(n); while (s.length <= k) s = '0' + s; s = k ? s.slice(0, s.length - k) + '.' + s.slice(s.length - k) : s; var t = D(dec(n, k)); return s === t ? s : s + '＝' + t; }
  function rect(lt, wt) {
    var body = '<rect x="20" y="16" width="240" height="110" fill="#d6ecff" stroke="' + H.INK + '" stroke-width="2"/>' + H.txt(140, 150, lt) + H.txt(270, 76, wt, { a: 'start' });
    return H.svg(400, 162, body, '長方形');
  }

  MG.unit({
    id: 'g5b4', pending: '待課本核對',
    cards: [
      { t: '小數×整數：先當整數乘，再把小數點點回去（被乘數有幾位小數，積就有幾位）。',
        ex: '2.375×4：先算 2375×4＝9500，2.375 有 3 位小數，積也點 3 位 → 9.500＝<b>9.5</b>。',
        why: '2.375 是 2375 個 0.001，乘 4 就是 9500 個 0.001，也就是 9.5。' },
      { t: '整數×小數：一樣先當整數乘，乘數有幾位小數，積就有幾位。',
        ex: '36×0.7：36×7＝252，0.7 有 1 位小數 → <b>25.2</b>。',
        why: '0.7 是 7 個 0.1，36×7 個 0.1＝252 個 0.1＝25.2。' },
      { t: '小數×小數：積的小數位數＝兩個數的小數位數加起來。',
        ex: '1.2×0.35：12×35＝420；1 位＋2 位＝3 位 → 0.420＝<b>0.42</b>。',
        why: '0.1×0.01＝0.001：十分之一再分成一百份，就是千分之一，所以位數會相加。',
        svg: (function () { var b = '', S = 18; for (var i = 0; i < 10; i++) for (var j = 0; j < 10; j++) b += '<rect x="' + (20 + i * S) + '" y="' + (10 + j * S) + '" width="' + S + '" height="' + S + '" fill="' + (i < 3 && j < 4 ? '#7fb8f0' : '#fff') + '" stroke="' + H.INK + '" stroke-width="1"/>'; return H.svg(240, 220, b + H.txt(110, 214, '0.3×0.4＝12 格＝0.12', { fs: 14 }), '0.3×0.4 的面積圖'); })() },
      { t: '乘數比 1 大，積比被乘數大；乘數等於 1，積一樣；乘數比 1 小，積比被乘數小。',
        ex: '8×1.5＝12（變大）<br>8×1＝8（一樣）<br>8×0.5＝4（變小）',
        why: '乘 0.5 是「拿 8 的一半」，只拿一部分當然變少；乘 1.5 是一整份再多半份。' },
      { t: '應用題：先想「幾個幾」，再列乘法；單位要寫對。',
        ex: '每公斤 60 元的番茄，買 2.4 公斤：60×2.4＝<b>144 元</b>。',
        why: '2.4 公斤就是「2.4 個 1 公斤」，所以是 60 元的 2.4 倍。' }
    ],
    gens: [
      // d1 三位小數×整數
      { k: 'd3int', d: 1, n: 7, f: function (r) {
        var a = rd(r, 3, 9), k = H.ri(r, 2, 9), ans = H.mul(a, k), n = a[0] * 1000 / a[1];
        return H.Q(D(a) + '×' + k + '＝？',
          '先算 ' + n + '×' + k + '＝' + n * k + '；' + D(a) + ' 有 3 位小數，積也點 3 位 → ' + pt(n * k, 3) + '。',
          H.num(ans, { err: [[H.mul(ans, 10), '小數點要點 3 位，你少點了一位。'], [H.div(ans, 10), '小數點點太多位了，' + D(a) + ' 只有 3 位小數。']] }), { a: D(a), k: k });
      } },
      // d1 整數×小數
      { k: 'intdec', d: 1, n: 7, f: function (r) {
        var n = H.ri(r, 12, 250), k = H.ri(r, 1, 2), b = rd(r, k, 3), ans = H.mul(n, b), m = b[0] * Math.pow(10, k) / b[1];
        return H.Q(n + '×' + D(b) + '＝？',
          '先算 ' + n + '×' + m + '＝' + n * m + '；' + D(b) + ' 有 ' + k + ' 位小數，積也點 ' + k + ' 位 → ' + pt(n * m, k) + '。',
          H.num(ans, { err: [[H.mul(ans, 10), '小數點要點 ' + k + ' 位，你少點了一位。'], [n * m, '別忘了點小數點。']] }), { n: n, b: D(b) });
      } },
      // d1 小數×小數
      { k: 'decdec', d: 1, n: 7, f: function (r) {
        var p = H.ri(r, 1, 2), q = H.ri(r, 1, 2), a = rd(r, p, 9), b = rd(r, q, p + q > 3 ? 2 : 5), ans = H.mul(a, b);
        var ai = a[0] * Math.pow(10, p) / a[1], bi = b[0] * Math.pow(10, q) / b[1];
        return H.Q(X(a, b) + '＝？',
          '先算 ' + ai + '×' + bi + '＝' + ai * bi + '；小數位數 ' + p + '＋' + q + '＝' + (p + q) + ' 位 → ' + pt(ai * bi, p + q) + '。',
          H.num(ans, { err: [[H.mul(ans, 10), '積的小數位數要把兩個數的位數加起來（' + p + '＋' + q + '＝' + (p + q) + ' 位）。'], [H.mul(ans, 100), '小數點點太少位了，要點 ' + (p + q) + ' 位。']] }), { a: D(a), b: D(b) });
      } },
      // d2 已知整數的積，點小數點
      { k: 'point', d: 2, n: 5, f: function (r) {
        var a = H.ri(r, 12, 99) * (r() < 0.5 ? 1 : 10) + H.ri(r, 0, 9) % 10, b = H.ri(r, 11, 99), p = H.ri(r, 0, 2), q = H.ri(r, 1, 2);
        if (a % 10 === 0 || b % 10 === 0) return null;
        var x = dec(a, p), y = dec(b, q), ans = H.mul(x, y);
        return H.Q('已知 ' + a + '×' + b + '＝' + C(a * b) + '，那麼 ' + X(x, y) + '＝？',
          D(x) + ' 有 ' + p + ' 位小數、' + D(y) + ' 有 ' + q + ' 位，積要有 ' + (p + q) + ' 位：' + C(a * b) + ' 點 ' + (p + q) + ' 位 → ' + pt(a * b, p + q) + '。',
          H.num(ans, { err: [[H.R(a * b, Math.pow(10, Math.max(p, q))), '小數位數要「相加」，不是取比較多的那個。'], [H.mul(ans, 10), '點的位數少了一位。']] }), { a: a, b: b, p: p, q: q });
      } },
      // d2 積有幾位小數（選擇）
      { k: 'places', d: 2, n: 4, f: function (r) {
        var p = H.ri(r, 1, 3), q = H.ri(r, 1, 2), a = rd(r, p, 9), b = rd(r, q, 9);
        var ai = a[0] * Math.pow(10, p) / a[1], bi = b[0] * Math.pow(10, q) / b[1];
        if ((ai * bi) % 10 === 0) return null;   // 積的最後一位是 0 會被省略，避開
        return H.Q(X(a, b) + ' 的積有幾位小數？（不用算出答案）',
          D(a) + ' 有 ' + p + ' 位小數、' + D(b) + ' 有 ' + q + ' 位，積的小數位數＝' + p + '＋' + q + '＝' + (p + q) + ' 位。',
          H.mc(p + q, [p * q, Math.max(p, q), p + q + 1, p + q - 1, 1, 5], function (x) { return x + ' 位'; }), { a: D(a), b: D(b) });
      } },
      // d2 積比被乘數大還是小（選擇）
      { k: 'rel', d: 2, n: 5, f: function (r, _, i) {
        var A = i % 2 ? rd(r, 1, 30) : H.R(H.ri(r, 15, 90)), up = i % 3 !== 1;
        var less = [rd(r, 1, 0), rd(r, 2, 0), rd(r, 2, 0), H.R(H.ri(r, 90, 99), 100)], more = [H.add(1, rd(r, 2, 0)), H.add(1, rd(r, 1, 0)), H.add(2, rd(r, 2, 0)), H.R(H.ri(r, 101, 109), 100)];
        var ans = up ? more[0] : less[0], wrong = [H.R(1)].concat(up ? less : more).filter(function (m) { return !H.eq(m, ans); });
        var show = function (m) { return D(A) + '×' + D(m); };
        return H.Q('下面哪一個算式的積比 ' + D(A) + ' ' + (up ? '大' : '小') + '？（不用算出來）',
          '看乘數：比 1 大，積就變大；比 1 小，積就變小；等於 1 不變。' + show(ans) + ' 的乘數 ' + D(ans) + (up ? ' 比 1 大' : ' 比 1 小') + '。',
          H.mc(ans, wrong, show), { A: D(A), up: up });
      } },
      // d2 列出全部
      { k: 'relset', d: 2, n: 5, f: function (r, _, i) {
        var A = rd(r, i % 2 ? 2 : 1, 20), small = i % 2 === 0, cand = [H.R(1)], seen = { '1': 1 };
        var addU = function (m) { var s = D(m); if (seen[s]) return false; seen[s] = 1; cand.push(m); return true; };
        for (var t = 0; t < 2; t++) while (!addU(rd(r, H.ri(r, 1, 2), 0)));
        for (t = 0; t < 2; t++) while (!addU(H.add(H.ri(r, 1, 3), rd(r, H.ri(r, 1, 2), 0))));
        cand = H.shuffle(cand, r);
        var show = function (m) { return D(A) + '×' + D(m); };
        return H.Q('下面哪些算式的積比 ' + D(A) + ' ' + (small ? '小' : '大') + '？<b>全部選出來。</b>（不用算出來）',
          '只要看乘數：乘數' + (small ? '比 1 小' : '比 1 大') + '的，積就比 ' + D(A) + (small ? ' 小' : ' 大') + '；乘 1 一樣大，不算。',
          H.set(cand, function (m) { return H.cmp(m, 1) === (small ? -1 : 1); }, show), { A: D(A), small: small });
      } },
      // d2 買東西（每公斤幾元×小數公斤）
      { k: 'price', d: 2, n: 5, f: function (r) {
        var it = H.pick(r, [['番茄', 40, 90], ['芭樂', 40, 80], ['蓮霧', 80, 150], ['香蕉', 30, 60], ['豬肉', 150, 280]]), p = H.ri(r, it[1] / 10, it[2] / 10) * 10, w = rd(r, 1, 4), ans = H.mul(p, w);
        return H.Q('每公斤 ' + p + ' 元的' + it[0] + '，買 ' + D(w) + ' 公斤要幾元？',
          D(w) + ' 公斤是 1 公斤的 ' + D(w) + ' 倍：' + p + '×' + D(w) + '＝' + D(ans) + '（元）。',
          H.num(ans, { suf: '元', err: [[p * w[0] * 10 / w[1], '別忘了點小數點（' + D(w) + ' 有 1 位小數）。']] }), { p: p, w: D(w) });
      } },
      // d2 好幾瓶、好幾包加起來
      { k: 'many', d: 2, n: 4, f: function (r) {
        var it = H.pick(r, [['一瓶礦泉水', '0.6', '公升', '瓶'], ['一罐汽水', '0.33', '公升', '罐'], ['一瓶鮮奶', '0.936', '公升', '瓶'], ['一包麵粉', '1.25', '公斤', '包'], ['一盒雞蛋', '0.875', '公斤', '盒']]);
        var a = H.fromDec(it[1]), k = H.ri(r, 6, 24), ans = H.mul(a, k);
        return H.Q(it[0] + '是 ' + it[1] + ' ' + it[2] + '，' + H.pick(r, ['班長', '老師', '爸爸']) + '買了 ' + k + ' ' + it[3] + '，一共是幾' + it[2] + '？',
          k + ' 個 ' + it[1] + '：' + it[1] + '×' + k + '＝' + D(ans) + '（' + it[2] + '）。',
          H.num(ans, { suf: it[2], err: [[H.mul(ans, 10), '小數點的位置點錯了。']] }), { a: it[1], k: k });
      } },
      // d3 長方形面積
      { k: 'area', d: 3, n: 5, f: function (r) {
        var l = rd(r, 1, 12), w = rd(r, 2, 5), ans = H.mul(l, w);
        if (H.cmp(w, l) >= 0 || H.cmp(w, 1) < 0) return null;
        return H.Q('長方形菜園長 ' + D(l) + ' 公尺、寬 ' + D(w) + ' 公尺，面積是幾平方公尺？',
          '長×寬＝' + X(l, w) + '＝' + D(ans) + '（平方公尺）；1＋2＝3 位小數。',
          H.num(ans, { suf: '平方公尺', err: [[H.mul(H.add(l, w), 2), '這是周長，題目問面積（長×寬）。'], [H.mul(ans, 10), '小數位數要 1＋2＝3 位。']] }), { l: D(l), w: D(w) },
          { svg: rect('長 ' + D(l) + ' 公尺', '寬 ' + D(w) + ' 公尺') });
      } },
      // d3 兩樣東西一起買
      { k: 'two', d: 3, n: 5, f: function (r) {
        var fs = H.shuffle([['芭樂', 50, 80], ['香蕉', 30, 60], ['番茄', 40, 90], ['蓮霧', 80, 150], ['葡萄', 90, 160]], r), f1 = fs[0], f2 = fs[1];
        var p1 = H.ri(r, f1[1] / 10, f1[2] / 10) * 10, p2 = H.ri(r, f2[1] / 10, f2[2] / 10) * 10, w1 = rd(r, 1, 3), w2 = rd(r, 1, 3), c1 = H.mul(p1, w1), c2 = H.mul(p2, w2), ans = H.add(c1, c2);
        return H.Q('夜市水果攤：' + f1[0] + '每公斤 ' + p1 + ' 元、' + f2[0] + '每公斤 ' + p2 + ' 元。媽媽買了 ' + f1[0] + ' ' + D(w1) + ' 公斤、' + f2[0] + ' ' + D(w2) + ' 公斤，一共要付幾元？',
          f1[0] + '：' + p1 + '×' + D(w1) + '＝' + D(c1) + '；' + f2[0] + '：' + p2 + '×' + D(w2) + '＝' + D(c2) + '；合起來 ' + D(c1) + '＋' + D(c2) + '＝' + D(ans) + '（元）。',
          H.num(ans, { suf: '元', err: [[c1, '這只是' + f1[0] + '的錢，還要加上' + f2[0] + '。'], [c2, '這只是' + f2[0] + '的錢，還要加上' + f1[0] + '。']] }), { p1: p1, w1: D(w1), p2: p2, w2: D(w2) });
      } },
      // d3 幾倍以後再比較
      { k: 'times', d: 3, n: 4, f: function (r, _, i) {
        if (i % 2) {
          var a = H.R(H.ri(r, 125, 150), 100), m = H.R(H.ri(r, 11, 13) * 10 + H.pick(r, [0, 5]), 100), dad = H.mul(a, m);
          if (H.cmp(dad, H.R(19, 10)) > 0) return null;
          return H.Q('小明身高 ' + D(a) + ' 公尺，爸爸的身高是小明的 ' + D(m) + ' 倍。爸爸比小明高幾公尺？',
            '爸爸：' + X(a, m) + '＝' + D(dad) + ' 公尺；比小明高 ' + D(dad) + '－' + D(a) + '＝' + D(H.sub(dad, a)) + '（公尺）。',
            H.num(H.sub(dad, a), { suf: '公尺', err: [[dad, '這是爸爸的身高，題目問「高多少」，還要減掉小明的。']] }), { a: D(a), m: D(m), t: 'h' });
        }
        var L = rd(r, 1, 9), cut = H.R(H.ri(r, 1, 9), 10), used = H.mul(L, cut);
        if (H.cmp(L, 2) < 0) return null;
        return H.Q('一條緞帶長 ' + D(L) + ' 公尺，包禮物用掉了全長的 ' + D(cut) + ' 倍。還剩幾公尺？',
          '用掉 ' + X(L, cut) + '＝' + D(used) + ' 公尺；剩下 ' + D(L) + '－' + D(used) + '＝' + D(H.sub(L, used)) + '（公尺）。',
          H.num(H.sub(L, used), { suf: '公尺', err: [[used, '這是用掉的，題目問還剩多少。']] }), { a: D(L), m: D(cut), t: 'cut' });
      } },
      // d1 小數點點在哪（選擇）
      { k: 'pick', d: 1, n: 4, f: function (r, _, i) {
        var p = i % 2 ? 3 : H.ri(r, 1, 2), q = i % 2 ? 0 : H.ri(r, 1, 2), a = rd(r, p, 9), b = q ? rd(r, q, 5) : H.R(H.ri(r, 2, 9)), ans = H.mul(a, b);
        return H.Q('下面哪一個是 ' + X(a, b) + ' 的積？',
          '小數位數 ' + p + '＋' + q + '＝' + (p + q) + ' 位，先當整數乘再點 ' + (p + q) + ' 位：' + X(a, b) + '＝' + D(ans) + '。',
          H.mc(ans, [H.mul(ans, 10), H.div(ans, 10), H.mul(ans, 100), H.div(ans, 100)], D), { a: D(a), b: D(b) });
      } },
      // d3 列出全部：哪些算式的積比 T 大（要真的算）
      { k: 'overT', d: 3, n: 4, f: function (r) {
        var T = H.pick(r, [5, 6, 8, 10, 12]), cand = [], seen = {};
        for (var t = 0; t < 60 && cand.length < 5; t++) {
          var e = { a: rd(r, 1, 6), b: rd(r, H.ri(r, 1, 2), 3) }, key = D(e.a) + 'x' + D(e.b), p = H.mul(e.a, e.b);
          if (seen[key] || H.eq(p, T) || H.cmp(p, T * 2) > 0 || H.cmp(p, H.R(T, 2)) < 0) continue; seen[key] = 1; cand.push(e);
        }
        var big = function (e) { return H.cmp(H.mul(e.a, e.b), T) > 0; }, yes = cand.filter(big).length;
        if (cand.length < 5 || yes < 2 || yes > 4) return null;
        var show = function (e) { return X(e.a, e.b); };
        return H.Q('下面哪些算式的積比 ' + T + ' 大？<b>全部選出來。</b>',
          cand.map(function (e) { return show(e) + '＝' + D(H.mul(e.a, e.b)); }).join('；') + '。比 ' + T + ' 大的才選。',
          H.set(cand, big, show), { T: T });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
