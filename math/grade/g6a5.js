/* 六上 單元五 比與比值（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a5.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, S = '（用最簡分數表示）';
  var dec = function (x) { return H.fmt(x, 'dec'); };
  function cp(r, lo, hi) { var x = H.ri(r, lo, hi), y = H.ri(r, lo, hi); return x !== y && H.gcd(x, y) === 1 ? [x, y] : null; }
  var rs = function (a, b) { return a + '：' + b; };
  // 按比例分配的長條圖：a 份、b 份
  function bar(a, b, la, lb) {
    var u = Math.floor(440 / (a + b)), x0 = 20, body = '';
    for (var i = 0; i < a + b; i++) body += '<rect x="' + (x0 + i * u) + '" y="30" width="' + u + '" height="36" fill="' + (i < a ? '#ffd27a' : '#9fd3ff') + '" stroke="' + H.INK + '" stroke-width="2"/>';
    body += H.txt(x0 + a * u / 2, 22, la + ' ' + a + ' 份') + H.txt(x0 + a * u + b * u / 2, 22, lb + ' ' + b + ' 份');
    return H.svg(x0 * 2 + (a + b) * u, 76, body, '按比例分配長條圖');
  }

  MG.unit({
    id: 'g6a5', pending: '待課本核對',
    cards: [
      { t: 'a：b 讀作「a 比 b」，a 是前項、b 是後項。比值＝前項÷後項＝a÷b。',
        ex: '紅茶 3 杯、牛奶 4 杯 → 紅茶和牛奶的比是 3：4，比值＝3÷4＝<b>[[3/4]]</b>（或 0.75）。',
        why: '比值告訴我們「前項是後項的幾倍」；3：4 的比值是 [[3/4]]，表示紅茶是牛奶的 [[3/4]] 倍。' },
      { t: '比的前項和後項同乘或同除以一個不是 0 的數，比值不變，這兩個比就相等。',
        ex: '2：3＝4：6＝10：15（都乘一個數）；12：18＝2：3（都除以 6）。<br>它們的比值都是 [[2/3]]。',
        why: '比值就是分數 [[前項/後項]]，分子分母同乘同除，分數大小不變。注意：前後項「同加」一個數就不相等了。' },
      { t: '最簡整數比：前項、後項都是整數，而且除了 1 沒有其他公因數。小數、分數的比先變成整數。',
        ex: '24：36 → 同除以最大公因數 12 → <b>2：3</b>。<br>0.6：1.5 → 都乘 10 → 6：15 → 都除以 3 → <b>2：5</b>。<br>[[2/3]]：[[3/4]] → 都乘 12 → <b>8：9</b>。',
        why: '分數的比乘分母的最小公倍數，分母就約掉了；小數的比乘 10、100，小數點就不見了。' },
      { t: '已知比和其中一個數，先看「乘了幾倍」，另一項也乘一樣的倍數。',
        ex: '果汁和水 2：5，果汁 300 毫升：300÷2＝150 → 一份 150 毫升 → 水 5×150＝<b>750 毫升</b>。',
        why: '2：5＝300：□，前項從 2 變成 300 乘了 150，後項也要乘 150。' },
      { t: '按比例分配：先算一共幾份，總數÷總份數＝1 份，再乘各自的份數。',
        ex: '姐姐和弟弟按 3：2 分 250 元：一共 3＋2＝5 份，1 份＝250÷5＝50 元 → 姐姐 3×50＝<b>150 元</b>，弟弟 <b>100 元</b>。',
        why: '比 3：2 不是說姐姐拿 3 元，是把錢切成一樣大的 5 份，姐姐拿其中 3 份。', svg: bar(3, 2, '姐姐', '弟弟') }
    ],
    gens: [
      // d1 比值
      { k: 'val', d: 1, n: 6, f: function (r) {
        var a = H.ri(r, 1, 24), b = H.ri(r, 2, 24); if (a === b) return null;
        var x = H.R(a, b), g = H.gcd(a, b);
        return H.Q(rs(a, b) + ' 的比值是多少？' + S,
          '比值＝前項÷後項＝' + a + '÷' + b + '＝' + H.fr(a, b) + (g > 1 ? '＝' + H.fmt(x) + '（約分）' : '') + '。',
          H.num(x, { form: 'f', simp: true, err: [[H.R(b, a), '比值是前項÷後項，不是後項÷前項。']] }), { a: a, b: b });
      } },
      // d1 和 a：b 相等的比（列舉）
      { k: 'eqset', d: 1, n: 4, f: function (r) {
        var c = cp(r, 1, 9); if (!c) return null;
        var x = c[0], y = c[1], ks = H.shuffle([2, 3, 4, 5, 6, 7, 8], r), ng = H.ri(r, 2, 3), good = [], bad = [];
        for (var i = 0; i < ng; i++) good.push(rs(x * ks[i], y * ks[i]));
        var k = ks[ng]; bad.push(rs(x + k, y + k), rs(y * k, x * k), rs(x * k, y * k + 1), rs(x * k + k, y * k));
        var cand = H.shuffle(good.concat(H.shuffle(bad, r).slice(0, 5 - ng)), r);
        return H.Q('下面哪些比和 ' + rs(x, y) + ' 相等？<b>全部選出來。</b>',
          '前項、後項同乘一個數才相等：' + good.join('、') + ' 都是 ' + rs(x, y) + ' 同乘一個數。前後項同加一個數、或前後項對調，都不相等。',
          H.set(cand, function (s) { var p = s.split('：'); return +p[0] * y === +p[1] * x; }), { x: x, y: y, cand: cand });
      } },
      // d1 化成最簡整數比（整數）
      { k: 'simp', d: 1, n: 5, f: function (r) {
        var c = cp(r, 1, 9), k = H.ri(r, 2, 12); if (!c) return null;
        var a = c[0] * k, b = c[1] * k;
        return H.Q('把 ' + rs(a, b) + ' 化成最簡整數比。',
          a + ' 和 ' + b + ' 的最大公因數是 ' + k + '，前項、後項同除以 ' + k + '：' + rs(a, b) + '＝' + rs(c[0], c[1]) + '。',
          H.nums(c, ['：', '']), { a: a, b: b });
      } },
      // d2 小數、分數的比化成最簡整數比
      { k: 'simpd', d: 2, n: 5, f: function (r, _, i) {
        var c = cp(r, 1, 9); if (!c) return null;
        if (i % 2 === 0) {
          var k = H.ri(r, 1, 9), A = H.R(c[0] * k, 10), B = H.R(c[1] * k, 10); if (A[1] === 1 && B[1] === 1) return null;
          return H.Q('把 ' + rs(dec(A), dec(B)) + ' 化成最簡整數比。',
            '先都乘 10 變成整數：' + rs(c[0] * k, c[1] * k) + '，再同除以 ' + k + '：' + rs(c[0], c[1]) + '。',
            H.nums(c, ['：', ''], { err: [[c[0] * k, '乘 10 以後還要約分，約到最簡。']] }), { A: dec(A), B: dec(B), mode: 'dec' });
        }
        var p = H.ri(r, 1, 5), q = H.ri(r, p + 1, 9), s = H.ri(r, 1, 5), t = H.ri(r, s + 1, 9); if (H.gcd(p, q) !== 1 || H.gcd(s, t) !== 1 || p * t === q * s) return null;
        var L = H.lcm(q, t), a = p * L / q, b = s * L / t, g = H.gcd(a, b);
        return H.Q('把 ' + H.fr(p, q) + '：' + H.fr(s, t) + ' 化成最簡整數比。',
          '前後項都乘分母的最小公倍數 ' + L + '：' + rs(a, b) + (g > 1 ? '，再同除以 ' + g + '：' + rs(a / g, b / g) : '') + '。',
          H.nums([a / g, b / g], ['：', '']), { f: [p, q, s, t], mode: 'frac' });
      } },
      // d2 填相等的比
      { k: 'miss', d: 2, n: 5, f: function (r, _, i) {
        var c = cp(r, 1, 12), k = H.ri(r, 2, 15); if (!c) return null;
        var x = c[0], y = c[1], X = x * k, Y = y * k, pos = i % 4, q, ans, why;
        if (pos === 0) { q = rs(x, y) + '＝' + rs(X, '□'); ans = Y; why = '前項 ' + x + ' 乘 ' + k + ' 變 ' + X + '，後項也乘 ' + k + '：' + y + '×' + k + '＝' + Y + '。'; }
        else if (pos === 1) { q = rs(x, y) + '＝' + rs('□', Y); ans = X; why = '後項 ' + y + ' 乘 ' + k + ' 變 ' + Y + '，前項也乘 ' + k + '：' + x + '×' + k + '＝' + X + '。'; }
        else if (pos === 2) { q = rs(X, Y) + '＝' + rs(x, '□'); ans = y; why = '前項 ' + X + ' 除以 ' + k + ' 變 ' + x + '，後項也除以 ' + k + '：' + Y + '÷' + k + '＝' + y + '。'; }
        else { q = rs(X, Y) + '＝' + rs('□', y); ans = x; why = '後項 ' + Y + ' 除以 ' + k + ' 變 ' + y + '，前項也除以 ' + k + '：' + X + '÷' + k + '＝' + x + '。'; }
        return H.Q(q + '，□ 是多少？', why, H.num(ans), { s: q });
      } },
      // d2 比值是多少的比（選擇）
      { k: 'valmc', d: 2, n: 4, f: function (r) {
        var c = cp(r, 1, 9), k = H.ri(r, 2, 8); if (!c) return null;
        var p = c[0], q = c[1], ok = rs(p * k, q * k), w = [rs(q * k, p * k), rs(p + k, q + k), rs(p * k, q * k + 1), rs(p * k + 1, q * k), rs(p * k, q + k)];
        return H.Q('下面哪一個比的比值是 ' + H.fmt(H.R(p, q)) + '？',
          '比值＝前項÷後項。' + ok + ' 的比值＝' + p * k + '÷' + q * k + '＝' + H.fmt(H.R(p, q)) + '。前後項對調、或同加一個數，比值都會變。',
          H.mc(ok, w.filter(function (s) { var z = s.split('：'); return +z[0] * q !== +z[1] * p; })), { p: p, q: q });
      } },
      // d2 已知比和一項
      { k: 'word', d: 2, n: 4, f: function (r) {
        var T = H.pick(r, [['調一杯飲料，紅茶和牛奶的量是 {a}：{b}。紅茶用了 {X} 毫升，牛奶要用幾毫升？', '毫升', 10],
          ['班上男生和女生人數的比是 {a}：{b}。男生有 {X} 人，女生有幾人？', '人', 1],
          ['一張海報的長和寬的比是 {a}：{b}。長是 {X} 公分，寬是幾公分？', '公分', 1],
          ['做蛋糕時，麵粉和糖的重量比是 {a}：{b}。用了 {X} 公克的麵粉，糖要用幾公克？', '公克', 5]]);
        var c = cp(r, 2, 9), k = H.ri(r, 2, 12) * T[2]; if (!c) return null;
        if (T[1] === '人' && (c[0] + c[1]) * k > 36) return null;
        var a = c[0], b = c[1], X = a * k, Y = b * k;
        return H.Q(T[0].replace('{a}', a).replace('{b}', b).replace('{X}', X),
          rs(a, b) + '＝' + rs(X, '□')  + '：前項 ' + a + ' 乘 ' + k + ' 變 ' + X + '，後項也乘 ' + k + '：' + b + '×' + k + '＝' + Y + '（' + T[1] + '）。',
          H.num(Y, { suf: T[1], err: [[H.R(X * a, b), '前項和後項對調了。'], [X + b - a, '比不能用加減，要用乘的。']] }), { a: a, b: b, X: X });
      } },
      // d3 按比例分配
      { k: 'share', d: 3, n: 5, f: function (r, _, i) {
        var T = H.pick(r, [['姐姐和弟弟按 {a}：{b} 分 {T} 元的紅包', '元', 10, ['姐姐', '弟弟'], '分到'], ['把 {T} 公分長的緞帶，按 {a}：{b} 剪成兩段', '公分', 3, ['長的那段', '短的那段'], '長'],
          ['阿哲和小明合買一盒 {T} 顆的巧克力，按出錢的比 {a}：{b} 分', '顆', 1, ['阿哲', '小明'], '分到']]);
        var c = cp(r, 1, 9), k = H.ri(r, 2, 15) * T[2]; if (!c) return null;
        var a = Math.max(c[0], c[1]), b = Math.min(c[0], c[1]), tot = (a + b) * k, who = i % 2;
        if (T[1] === '顆' && tot > 60) return null;
        var ans = (who ? b : a) * k;
        return H.Q(T[0].replace('{a}', a).replace('{b}', b).replace('{T}', tot) + '，' + T[3][who] + T[4] + '幾' + T[1] + '？',
          '一共 ' + a + '＋' + b + '＝' + (a + b) + ' 份，1 份＝' + tot + '÷' + (a + b) + '＝' + k + '，' + T[3][who] + '是 ' + (who ? b : a) + ' 份：' + (who ? b : a) + '×' + k + '＝' + ans + '（' + T[1] + '）。',
          H.num(ans, { suf: T[1], err: [[H.R(tot * (who ? b : a), who ? a : b), '要先算一共幾份（' + a + '＋' + b + '），不是用 ' + (who ? a : b) + ' 去除。']] }), { a: a, b: b, tot: tot, who: who });
      } },
      // d3 已知相差求全部
      { k: 'gap', d: 3, n: 3, f: function (r) {
        var c = cp(r, 2, 9), k = H.ri(r, 2, 6); if (!c) return null;
        var a = Math.max(c[0], c[1]), b = Math.min(c[0], c[1]), D = (a - b) * k, tot = (a + b) * k; if (tot > 40) return null;
        return H.Q('班上男生和女生人數的比是 ' + rs(a, b) + '，男生比女生多 ' + D + ' 人。全班有幾人？',
          '男生比女生多 ' + a + '－' + b + '＝' + (a - b) + ' 份，這 ' + (a - b) + ' 份是 ' + D + ' 人，1 份＝' + D + '÷' + (a - b) + '＝' + k + ' 人。全班 ' + (a + b) + ' 份：' + (a + b) + '×' + k + '＝' + tot + '（人）。',
          H.num(tot, { suf: '人', err: [[a * k, '這是男生的人數，題目問全班。']] }), { a: a, b: b, D: D });
      } },
      // d3 周長和比求面積
      { k: 'rect', d: 3, n: 4, f: function (r) {
        var c = cp(r, 1, 7), k = H.ri(r, 2, 6); if (!c) return null;
        var l = Math.max(c[0], c[1]) * k, w = Math.min(c[0], c[1]) * k, P = 2 * (l + w);
        return H.Q('一個長方形的長和寬的比是 ' + rs(l / k, w / k) + '，周長是 ' + P + ' 公分。這個長方形的面積是幾平方公分？',
          '長＋寬＝' + P + '÷2＝' + (l + w) + '，一共 ' + (l + w) / k + ' 份，1 份＝' + k + ' 公分。長＝' + l + '、寬＝' + w + '，面積＝' + l + '×' + w + '＝' + l * w + '（平方公分）。',
          H.num(l * w, { suf: '平方公分', err: [[(l / k) * (w / k), '比的數字只是份數，要先算出 1 份是幾公分。'], [l * w * 4, '周長要先除以 2，才是長＋寬。']] }), { P: P, x: l / k, y: w / k });
      } },
      // d3 按比例分配：選出兩人各分到多少
      { k: 'sharemc', d: 3, n: 4, f: function (r) {
        var T = H.pick(r, [['姐姐和妹妹', '姐姐', '妹妹', '元', 10, '分 {T} 元的零用錢'], ['小明和阿哲', '小明', '阿哲', '張', 1, '分 {T} 張貼紙'], ['哥哥和弟弟', '哥哥', '弟弟', '元', 5, '分 {T} 元的獎金']]);
        var c = cp(r, 1, 9), k = H.ri(r, 2, 12) * T[4]; if (!c) return null;
        var a = Math.max(c[0], c[1]), b = Math.min(c[0], c[1]), tot = (a + b) * k; if (T[3] === '張' && tot > 90) return null;
        var show = function (o) { return T[1] + ' ' + o.x + ' ' + T[3] + '、' + T[2] + ' ' + o.y + ' ' + T[3]; };
        var w = [{ x: b * k, y: a * k }, { x: a * (k + T[4]), y: b * (k + T[4]) }, { x: a * k + b, y: b * k - b }];
        if (tot % 2 === 0) w.push({ x: tot / 2, y: tot / 2 });
        return H.Q(T[0] + '按 ' + rs(a, b) + ' ' + T[5].replace('{T}', tot) + '，兩人各分到多少？',
          '一共 ' + (a + b) + ' 份，1 份＝' + tot + '÷' + (a + b) + '＝' + k + '。' + T[1] + ' ' + a + ' 份＝' + a * k + '，' + T[2] + ' ' + b + ' 份＝' + b * k + '；合起來剛好 ' + tot + '。',
          H.mc({ x: a * k, y: b * k }, w.filter(function (o) { return o.y > 0; }), show), { a: a, b: b, tot: tot });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
