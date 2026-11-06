/* 六上 單元一 最大公因數與最小公倍數（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a1.js。 */
(function (MG) {
  'use strict';
  var H = MG.H;
  function isPrime(n) { if (n < 2) return false; for (var i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }
  function pf(n) { var out = [], p = 2; while (n > 1) { while (n % p === 0) { out.push(p); n /= p; } p++; } return out; }
  function nextPrime(p) { do p++; while (!isPrime(p)); return p; }
  function factors(n) { var out = []; for (var i = 1; i <= n; i++) if (n % i === 0) out.push(i); return out; }
  // 短除法：一直用 a、b 共同的質因數去除 → {ps: 除過的質數, a, b: 最後剩下的}
  function sdiv(a, b) { var ps = [], p = 2; while (p <= Math.min(a, b)) { if (a % p === 0 && b % p === 0) { ps.push(p); a /= p; b /= p; } else p++; } return { ps: ps, a: a, b: b }; }
  function sdivWhy(a, b) {
    var s = sdiv(a, b), g = H.gcd(a, b);
    return '短除法：' + a + ' 和 ' + b + ' 一直用共同的質因數 ' + s.ps.join('、') + ' 去除，最後剩 ' + s.a + ' 和 ' + s.b + '（沒有共同因數了）。' +
      '最大公因數＝' + (s.ps.length > 1 ? s.ps.join('×') + '＝' : '') + g + '；最小公倍數＝' + s.ps.concat([s.a, s.b]).join('×') + '＝' + H.lcm(a, b) + '。';
  }
  // 兩個互質的數 x<y（2～max）
  function coprime(r, lo, max) { var x = H.ri(r, lo, max - 1), y = H.ri(r, x + 1, max); return H.gcd(x, y) === 1 ? [x, y] : null; }
  var FACT_N = [12, 18, 20, 24, 28, 30, 36, 40, 42, 44, 45, 48, 50, 52, 54, 56, 60, 63, 66, 70, 72, 75, 78, 80, 84, 90, 96, 98, 100];
  var PF_N = [12, 18, 20, 24, 28, 30, 36, 40, 42, 44, 45, 50, 52, 54, 56, 60, 63, 66, 70, 72, 75, 78, 84, 90, 98];

  MG.unit({
    id: 'g6a1', pending: '待課本核對',
    cards: [
      { t: '只有 1 和自己兩個因數的數叫質數；因數超過兩個的叫合數；1 只有一個因數，不是質數也不是合數。',
        ex: '20 以內的質數：2、3、5、7、11、13、17、19（共 8 個）。<br>9 的因數有 1、3、9 三個 → 9 是<b>合數</b>。',
        why: '2 是唯一的偶數質數，因為其他偶數都還能被 2 整除，因數一定超過兩個。' },
      { t: '一個數的因數如果是質數，就叫質因數。把一個數寫成幾個質數相乘，叫質因數分解。',
        ex: '用短除法一直除質數：60÷2＝30，30÷2＝15，15÷3＝5，5 是質數就停。<br>60＝<b>2×2×3×5</b>；60 的質因數是 2、3、5。',
        why: '每次只除質數，除到剩下的也是質數為止，乘回去一定等於原來的數；寫成 4×15 不算，因為 4、15 不是質數。' },
      { t: '最大公因數：兩個數共同的因數裡最大的。用短除法一直除共同的質因數，把左邊的質數乘起來。',
        ex: '18 和 24：一起除以 2 → 9 和 12，一起除以 3 → 3 和 4，沒有共同因數了。<br>最大公因數＝2×3＝<b>6</b>。',
        why: '左邊除掉的質數，兩個數都有；把它們全部乘起來，就是兩個數「共同擁有」的最大那一份。' },
      { t: '最小公倍數：兩個數共同的倍數裡最小的。短除法做完，把左邊和最下面的數全部乘起來。',
        ex: '12 和 18：除以 2 → 6 和 9，除以 3 → 2 和 3。<br>最小公倍數＝2×3×2×3＝<b>36</b>。',
        why: '共同的部分算一次（左邊），各自多出來的（下面）也要乘進去，才會同時是兩個數的倍數，而且最小。' },
      { t: '應用題先想：要「分得最大、剛好分完」用最大公因數；要「同時發生、拼成最小」用最小公倍數。',
        ex: '長 24、寬 18 公分的紙剪成最大的正方形不剩 → 邊長＝最大公因數 <b>6 公分</b>。<br>公車每 12 分、每 18 分一班，同時開出後 → 再過最小公倍數 <b>36 分鐘</b>再同時開。',
        why: '正方形的邊長要同時整除長和寬（公因數）；再一次同時發車的時間要同時是兩個間隔的倍數（公倍數）。' }
    ],
    gens: [
      // d1 選出所有質數（20 以內）
      { k: 'prime', d: 1, n: 5, f: function (r) {
        var c = H.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], r).slice(0, 6).sort(function (a, b) { return a - b; });
        var np = c.filter(isPrime).length; if (np < 2 || np > 4) return null;
        return H.Q('下面哪些數是質數？<b>全部選出來。</b>',
          '質數只有 1 和自己兩個因數。' + c.map(function (x) { return x + (x === 1 ? '：1 不是質數也不是合數' : isPrime(x) ? '：質數' : '：合數（' + pf(x)[0] + ' 也能整除）'); }).join('；') + '。',
          H.set(c, isPrime), { cand: c });
      } },
      // d1 哪一個是質數／合數（選擇）
      { k: 'pc', d: 1, n: 4, f: function (r, _, i) {
        var nums = H.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], r), ask = i % 2 ? 'comp' : 'prime';
        var good = ask === 'prime' ? isPrime : function (x) { return x > 1 && !isPrime(x); };
        var ans = nums.filter(good)[0], wrong = nums.filter(function (x) { return !good(x); });
        if (ask === 'comp') wrong = wrong.filter(function (x) { return x > 1; }).concat([1]);
        return H.Q('下面哪一個數是' + (ask === 'prime' ? '質數' : '合數') + '？',
          ask === 'prime' ? ans + ' 只有 1 和 ' + ans + ' 兩個因數，是質數；其他的數因數都超過兩個，或是 1（不是質數也不是合數）。'
            : ans + ' 除了 1 和 ' + ans + '，還能被 ' + pf(ans)[0] + ' 整除，因數超過兩個，是合數；其他是質數或 1。',
          H.mc(ans, wrong), { ask: ask });
      } },
      // d1 選出 N 的所有質因數
      { k: 'pf', d: 1, n: 4, f: function (r) {
        var N = H.pick(r, PF_N), ps = pf(N).filter(function (p, j, a) { return a.indexOf(p) === j; });
        var comp = factors(N).filter(function (x) { return x > 1 && x < N && !isPrime(x); }), other = [2, 3, 5, 7, 11, 13].filter(function (p) { return N % p; });
        var bad = H.shuffle(comp, r).slice(0, 2).concat(H.shuffle(other, r).slice(0, 1));
        var c = ps.concat(bad).sort(function (a, b) { return a - b; });
        return H.Q(N + ' 的質因數有哪些？<b>全部選出來。</b>',
          '質因數＝是 ' + N + ' 的因數、又是質數。' + N + '＝' + pf(N).join('×') + '，所以質因數是 ' + ps.join('、') + '。' +
            bad.map(function (x) { return x + (N % x ? ' 不是 ' + N + ' 的因數' : ' 是因數但不是質數'); }).join('，') + '。',
          H.set(c, function (x) { return ps.indexOf(x) >= 0; }), { N: N, cand: c });
      } },
      // d1 質因數分解（選擇）
      { k: 'fact', d: 1, n: 4, f: function (r) {
        var N = H.pick(r, FACT_N), p = pf(N), J = function (xs) { return xs.join('×'); };
        var w = [J([p[0] * p[1]].concat(p.slice(2))), J([2].concat(p)), J(p.slice(0, -1).concat([nextPrime(p[p.length - 1])])), J(p.slice(0, -1)), J([2, N / 2])];
        return H.Q('把 ' + N + ' 做質因數分解，哪一個寫法是對的？',
          '用短除法一直除質數：' + N + '＝' + J(p) + '。每一個乘數都要是質數，而且乘起來要剛好是 ' + N + '。',
          H.mc(J(p), w.filter(function (s) { return s !== J(p); })), { N: N });
      } },
      // d1 最大公因數
      { k: 'gcd', d: 1, n: 4, f: function (r) {
        var g = H.ri(r, 2, 12), c = coprime(r, 1, 9); if (!c) return null;
        var a = g * c[0], b = g * c[1], l = H.lcm(a, b);
        return H.Q(a + ' 和 ' + b + ' 的最大公因數是多少？', sdivWhy(a, b).replace(/；最小公倍數.*$/, '。'),
          H.num(g, { err: [[l, '這是最小公倍數；最大公因數是兩個數都能整除的最大數。'], [1, '1 是公因數沒錯，但還有更大的。']] }), { a: a, b: b });
      } },
      // d1 最小公倍數
      { k: 'lcm', d: 1, n: 4, f: function (r) {
        var g = H.ri(r, 2, 8), c = coprime(r, 1, 8); if (!c) return null;
        var a = g * c[0], b = g * c[1], l = H.lcm(a, b), err = [[g, '這是最大公因數；最小公倍數要把左邊和下面的數全部乘起來。']];
        if (a * b !== l) err.push([a * b, '直接相乘是公倍數，但不是最小的；共同的質因數只要乘一次。']);
        return H.Q(a + ' 和 ' + b + ' 的最小公倍數是多少？', sdivWhy(a, b), H.num(l, { err: err }), { a: a, b: b });
      } },
      // d2 最大公因數和最小公倍數一起
      { k: 'both', d: 2, n: 4, f: function (r) {
        var g = H.ri(r, 2, 9), c = coprime(r, 2, 9); if (!c) return null;
        var a = g * c[0], b = g * c[1];
        return H.Q('用短除法算出 ' + a + ' 和 ' + b + ' 的最大公因數和最小公倍數。', sdivWhy(a, b),
          H.nums([g, H.lcm(a, b)], ['（最大公因數）', '（最小公倍數）'], { err: [[a * b, '直接相乘不是最小公倍數，共同的質因數只要乘一次。']] }), { a: a, b: b });
      } },
      // d2 選出所有公因數
      { k: 'cf', d: 2, n: 4, f: function (r) {
        var g = H.pick(r, [4, 6, 8, 9, 10, 12]), c = coprime(r, 2, 7); if (!c) return null;
        var a = g * c[0], b = g * c[1]; if (b > 84) return null;
        var common = factors(g), onlyOne = factors(a).concat(factors(b)).filter(function (x) { return g % x; });
        var good = H.shuffle(common, r).slice(0, Math.min(common.length, H.ri(r, 2, 4))), bad = H.shuffle(onlyOne.filter(function (x, j, s) { return s.indexOf(x) === j; }), r).slice(0, 6 - good.length);
        if (bad.length < 1) return null;
        var cand = good.concat(bad).sort(function (x, y) { return x - y; });
        return H.Q(a + ' 和 ' + b + ' 的公因數有哪些？<b>全部選出來。</b>',
          a + ' 和 ' + b + ' 的最大公因數是 ' + g + '，公因數就是 ' + g + ' 的因數：' + common.join('、') + '。其他的數只能整除其中一個。',
          H.set(cand, function (x) { return g % x === 0; }), { a: a, b: b, cand: cand });
      } },
      // d2 平分兩種東西給最多人
      { k: 'share', d: 2, n: 3, f: function (r) {
        var T = H.pick(r, [['顆糖果', '塊餅乾'], ['枝鉛筆', '塊橡皮擦'], ['顆蘋果', '顆橘子'], ['張貼紙', '張卡片']]);
        var g = H.ri(r, 3, 12), c = coprime(r, 2, 8); if (!c) return null;
        var a = g * c[0], b = g * c[1];
        return H.Q('老師有 ' + a + ' ' + T[0] + '和 ' + b + ' ' + T[1] + '，要平分給一些小朋友，兩種都剛好分完、沒有剩。最多可以分給幾個小朋友？',
          '人數要同時整除 ' + a + ' 和 ' + b + '，又要最多 → 求最大公因數：' + g + ' 人（每人 ' + c[0] + ' ' + T[0] + '、' + c[1] + ' ' + T[1] + '）。',
          H.num(g, { suf: '人', err: [[H.lcm(a, b), '這是最小公倍數；平分給最多人要用最大公因數。']] }), { a: a, b: b });
      } },
      // d3 同時發生（最小公倍數）
      { k: 'meet', d: 3, n: 4, f: function (r) {
        var T = H.pick(r, [
          ['捷運藍線每 {a} 分鐘開一班、綠線每 {b} 分鐘開一班。早上 6 點兩條線同時發車，至少再過幾分鐘會再同時發車？', '分鐘'],
          ['操場邊有兩盞燈，紅燈每 {a} 秒閃一次，綠燈每 {b} 秒閃一次。剛剛兩盞燈同時閃，至少再過幾秒會再同時閃？', '秒'],
          ['小明每 {a} 天去一次圖書館，阿哲每 {b} 天去一次。今天兩人在圖書館遇到，至少再過幾天兩人會再同一天去？', '天'],
          ['夜市的兩台機器，一台每 {a} 分鐘響一次鈴，另一台每 {b} 分鐘響一次。剛剛同時響，至少再過幾分鐘會再同時響？', '分鐘']
        ]);
        var xs = H.shuffle([4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20], r), a = Math.min(xs[0], xs[1]), b = Math.max(xs[0], xs[1]), l = H.lcm(a, b);
        if (l === b || l > 180) return null;
        var err = [[H.gcd(a, b), '這是最大公因數；同時發生要找兩個數都能整除的時間（公倍數）。']];
        if (a * b !== l) err.push([a * b, '相乘是公倍數，但不是最小的，題目問「至少」。']);
        return H.Q(T[0].replace('{a}', a).replace('{b}', b),
          '再一次同時發生的時間，要同時是 ' + a + ' 和 ' + b + ' 的倍數，又要最早 → 求最小公倍數：' + l + ' ' + T[1] + '。',
          H.num(l, { suf: T[1], err: err }), { a: a, b: b });
      } },
      // d3 剪成最大正方形（最大公因數）
      { k: 'cutsq', d: 3, n: 4, f: function (r, _, i) {
        var g = H.ri(r, 3, 12), c = coprime(r, 2, 7); if (!c) return null;
        var L = g * c[1], W = g * c[0], cnt = c[0] * c[1], thing = H.pick(r, ['色紙', '布', '木板', '海報紙']);
        var head = '一張長 ' + L + ' 公分、寬 ' + W + ' 公分的長方形' + thing + '，要剪成大小一樣的正方形，而且剛好沒有剩。';
        var why = '邊長要同時整除 ' + L + ' 和 ' + W + '，又要最大 → 最大公因數 ' + g + ' 公分。';
        if (i % 2) return H.Q(head + '正方形的邊長最大，可以剪成幾個？', why + '長可以剪 ' + L + '÷' + g + '＝' + c[1] + ' 個，寬可以剪 ' + W + '÷' + g + '＝' + c[0] + ' 個，共 ' + c[1] + '×' + c[0] + '＝' + cnt + ' 個。',
          H.num(cnt, { suf: '個', err: [[c[0] + c[1], '長、寬能剪的個數要相乘，不是相加。']] }), { L: L, W: W, ask: 'cnt' });
        return H.Q(head + '正方形的邊長最大是幾公分？', why,
          H.num(g, { suf: '公分', err: [[H.lcm(L, W), '這是最小公倍數；剪開來的正方形要比紙小，用最大公因數。']] }), { L: L, W: W, ask: 'side' });
      } },
      // d3 拼成最小正方形（最小公倍數）
      { k: 'tilesq', d: 3, n: 4, f: function (r, _, i) {
        var xs = H.shuffle([4, 6, 8, 9, 10, 12, 15, 16, 18, 20], r), a = Math.max(xs[0], xs[1]), b = Math.min(xs[0], xs[1]), l = H.lcm(a, b);
        if (l === a || l > 120) return null;
        var head = '用很多張長 ' + a + ' 公分、寬 ' + b + ' 公分的長方形紙卡，同一個方向排，拼成一個正方形（不重疊、沒有空隙）。';
        var why = '正方形的邊長要同時是 ' + a + ' 和 ' + b + ' 的倍數，又要最小 → 最小公倍數 ' + l + ' 公分。';
        if (i % 2) return H.Q(head + '拼成最小的正方形，要用幾張紙卡？', why + '一排 ' + l + '÷' + a + '＝' + l / a + ' 張，排 ' + l + '÷' + b + '＝' + l / b + ' 排，共 ' + l / a + '×' + l / b + '＝' + (l / a) * (l / b) + ' 張。',
          H.num((l / a) * (l / b), { suf: '張' }), { a: a, b: b, ask: 'cnt' });
        return H.Q(head + '最小的正方形邊長是幾公分？', why,
          H.num(l, { suf: '公分', err: [[H.gcd(a, b), '這是最大公因數；拼出來的正方形比紙卡大，要用最小公倍數。']].concat(a * b !== l ? [[a * b, '相乘是公倍數，但不是最小的。']] : []) }), { a: a, b: b, ask: 'side' });
      } },
      // d2 選出所有公倍數
      { k: 'cm', d: 2, n: 4, f: function (r) {
        var xs = H.shuffle([2, 3, 4, 5, 6, 8, 9, 10, 12], r), a = Math.min(xs[0], xs[1]), b = Math.max(xs[0], xs[1]), l = H.lcm(a, b);
        if (l === b || l > 40) return null;
        var good = [], bad = [];
        for (var m = b; m <= 100; m++) { if (m % l === 0) good.push(m); else if (m % a === 0 || m % b === 0) bad.push(m); }
        var g = H.shuffle(good, r).slice(0, H.ri(r, 2, 3)), c = g.concat(H.shuffle(bad, r).slice(0, 6 - g.length)).sort(function (x, y) { return x - y; });
        return H.Q(a + ' 和 ' + b + ' 的公倍數有哪些？<b>全部選出來。</b>',
          a + ' 和 ' + b + ' 的最小公倍數是 ' + l + '，公倍數就是 ' + l + ' 的倍數：' + good.join('、') + '…。其他的數只是其中一個數的倍數。',
          H.set(c, function (x) { return x % l === 0; }), { a: a, b: b, cand: c });
      } },
      // d3 應用題：選出正確答案（要判斷用最大公因數還是最小公倍數）
      { k: 'apply', d: 3, n: 5, f: function (r, _, i) {
        var g = H.ri(r, 2, 8), c = coprime(r, 2, 7); if (!c) return null;
        var a = g * c[0], b = g * c[1], l = H.lcm(a, b), kind = ['share', 'meet', 'cut', 'tile'][i % 4], T, ans;
        if (kind === 'share') { T = '有 ' + a + ' 朵玫瑰和 ' + b + ' 朵百合，要綁成一樣的花束，兩種花都剛好用完。最多可以綁成幾束？'; ans = g; }
        else if (kind === 'meet') { T = '學校的兩個鬧鐘，一個每 ' + a + ' 分鐘響一次，另一個每 ' + b + ' 分鐘響一次。剛剛同時響，至少再過幾分鐘會再同時響？'; ans = l; }
        else if (kind === 'cut') { T = '一塊長 ' + b + ' 公分、寬 ' + a + ' 公分的長方形餅乾板，要切成一樣大的正方形，剛好沒有剩。正方形的邊長最大是幾公分？'; ans = g; }
        else { T = '用長 ' + b + ' 公分、寬 ' + a + ' 公分的長方形磁磚，同一個方向排成一個正方形。最小的正方形邊長是幾公分？'; ans = l; }
        var useG = ans === g;
        return H.Q(T, (useG ? '要「最多、最大，又剛好分完」→ 最大公因數' : '要「同時、最小的整個」→ 最小公倍數') + '。' + a + ' 和 ' + b + ' 的最大公因數是 ' + g + '，最小公倍數是 ' + l + '，所以答案是 ' + ans + '。',
          H.mc(ans, [useG ? l : g, a * b, a + b, b - a, useG ? a : b]), { a: a, b: b, kind: kind });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
