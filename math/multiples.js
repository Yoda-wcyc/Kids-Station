/* multiples.js — 〈倍數與公倍數〉（國小五上單元三）的出題、解答、判分純函式（2026-10-21）；不碰 DOM，瀏覽器（window.MUL）與 Node 共用。
   需要 multiply.js（window.MX）的乘法拆解提示（例：「15×57 再算一次：15×50=750、15×7=105」）。

   題型 kind（括號＝練習分組 group）：
     circle（圈圈看）       v=[N, x1..x5]            點選哪些是 N 的倍數
     both（想一想）         v=[a, b, n1..n6]          b＝0：a 的倍數；否則同時是 a 和 b 的倍數（2 和 5、5 和 10…）
     range（填填看）        v=[N, A, B]               A～B 中 N 的倍數有哪些（A、B 本身不是 N 的倍數）
     board（填填看）        v=[m, d千, d百, d十, d個]  定位板，-1＝要填的格（個位一定要填；百位或十位可能也要填），是 m 的倍數，最大／最小
     last（填填看）         v=[d1, d2, d3]            「d1d2d3●」是 2／5／10 的倍數時，●可能是哪些
     lcm（最小公倍數）      v=[a, b]                  最小公倍數＋從它開始的 3 個公倍數
     wfloor（應用題）       v=[c, d, N]  每 d 個一份、剛好分完，不超過 N 且最接近 N        → d×⌊N/d⌋
     wrange（應用題）       v=[c, d, A, B] 在 A～B 之間、每 d 個一份剛好分完（範圍裡只有一個）  → 那個倍數
     wover（應用題）        v=[c, d, N]  比 N 多且最接近 N（剛好整除也要 +1：等於 N 不算比它多） → d×(⌊N/d⌋+1)
     wceil（應用題）        v=[c, d, N]  每包 d 個、需要 N 個，最少買幾包、幾個（無條件進位；整除不 +1）→ [⌈N/d⌉, d×⌈N/d⌉]
     wlcm（應用題）         v=[c, a, b]  每 a 個或每 b 個都剛好，最少幾個                     → lcm(a,b)
     wlcmr（應用題）        v=[c, a, b, A, B] 在 A～B 之間、每 a 個或每 b 個都剛好（範圍裡只有一個）→ 那個公倍數
     lminmax（素養題）      v=[c, d, A, B] 在 A～B 之間、每 d 個剛好，最少／最多                → [第一個, 最後一個]
     lsquare（素養題）      v=[c, L, W]  長方形同方向拼正方形，邊長最短                          → lcm(L,W)
   c＝故事情境編號（同一題型換說法）。build(kind, v) 只靠 v 就能重建同一題（錯題庫原題重做）。
   check(Q, ans) → {ok, parts:[{k, ok, hint}], got, max}；got/max＝考試配分（circle、both 3 分；range 2、board 4、last 6；lcm 4；應用題 6；素養題 5）。
   應用題分步（練習）：method（除法看商／找公倍數）→ div（被除數 ÷ 除數 ＝ 商 … 餘）→ plus（商要不要 +1）→ mul（乘法）→ ans（答案＋單位）；
     wlcm：method → lcm → ans；wlcmr：method → lcm → mul（最小公倍數 × 幾倍）→ ans。 */
(function (G) {
  'use strict';
  var MX = G.MX || (typeof require === 'function' ? require('./multiply.js') : null);

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function lcm(a, b) { return a && b ? a / gcd(a, b) * b : 0; }
  function isInt(n) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n; }
  function ri(rnd, a, b) { return a + Math.floor(rnd() * (b - a + 1)); }
  function pick(rnd, xs) { return xs[Math.floor(rnd() * xs.length)]; }
  function shuffle(rnd, xs) { xs = xs.slice(); for (var i = xs.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = xs[i]; xs[i] = xs[j]; xs[j] = t; } return xs; }
  function uniq(xs) { var o = []; xs.forEach(function (x) { if (o.indexOf(x) < 0) o.push(x); }); return o; }
  function sameSet(a, b) { a = uniq(a).sort(function (x, y) { return x - y; }); b = uniq(b).sort(function (x, y) { return x - y; }); return a.length === b.length && a.every(function (x, i) { return x === b[i]; }); }
  function mhint(a, b) { return MX ? MX.hint(a, b) : a + '×' + b + ' 再算一次'; }

  var GROUPS = [['circle', '圈圈看'], ['both', '想一想'], ['fill', '填填看'], ['lcm', '最小公倍數'], ['word', '應用題'], ['lit', '素養題']];
  var GROUP_OF = { circle: 'circle', both: 'both', range: 'fill', board: 'fill', last: 'fill', lcm: 'lcm', wfloor: 'word', wrange: 'word', wover: 'word', wceil: 'word', wlcm: 'word', wlcmr: 'word', lminmax: 'lit', lsquare: 'lit' };
  var GROUP_KINDS = { circle: ['circle'], both: ['both'], fill: ['range', 'board', 'last'], lcm: ['lcm'], word: ['wfloor', 'wrange', 'wover', 'wceil', 'wlcm', 'wlcmr'], lit: ['lminmax', 'lsquare'] };
  var WORD_NAME = { wfloor: '不超過且最接近', wrange: '範圍內剛好分完', wover: '比它多且最接近', wceil: '最少要幾包', wlcm: '最少（公倍數）', wlcmr: '範圍內的公倍數' };
  var DIV_KINDS = ['wfloor', 'wrange', 'wover', 'wceil'];
  var UNITS = ['顆', '人', '張', '包', '塊', '個', '本', '片', '盒', '枝', '組', '公分'];

  // ---------- 故事（{d}{N}{A}{B}{a}{b}{L}{W} 會換成數字；u＝答案單位）----------
  var CTX = {
    wfloor: [['水果行裡的柳丁每 {d} 顆裝成一袋，剛好可以裝完。如果柳丁的數量不超過 {N} 顆，且最接近 {N} 顆，這些柳丁有多少顆？', '顆'],
      ['圖書館把書每 {d} 本放一層，剛好放完。如果書不超過 {N} 本，而且最接近 {N} 本，圖書館有多少本書？', '本'],
      ['麵包店把餅乾每 {d} 片裝成一盒，剛好裝完。如果餅乾不超過 {N} 片，且最接近 {N} 片，餅乾有多少片？', '片']],
    wrange: [['五年級的學生人數在 {A} 人～{B} 人之間，每 {d} 人分成一班，剛好可以分完，五年級學生共有多少人？', '人'],
      ['一箱蘋果在 {A} 顆～{B} 顆之間，每 {d} 顆裝成一盒，剛好可以裝完，這箱蘋果有多少顆？', '顆']],
    wover: [['老師將全部色紙每 {d} 張裝成一包，剛好可以裝完。如果色紙數量最接近 {N} 張，且比 {N} 張多，老師有多少張色紙？', '張'],
      ['農場把雞蛋每 {d} 顆裝成一盒，剛好可以裝完。如果雞蛋比 {N} 顆多，而且最接近 {N} 顆，農場有多少顆雞蛋？', '顆']],
    wceil: [['工藝店販售珠子，每包珠子有 {d} 顆。老師需要 {N} 顆，最少要買幾包？也就是幾顆珠子？', '包', '顆'],
      ['文具店的鉛筆每盒有 {d} 枝。班上需要 {N} 枝，最少要買幾盒？也就是幾枝鉛筆？', '盒', '枝']],
    wlcm: [['奶奶做了一些餅乾，每 {a} 塊裝成一盒，或每 {b} 塊裝成一盒，都可以剛好裝完，奶奶最少做了幾塊餅乾？', '塊'],
      ['弟弟有一些骨牌，每 {a} 個排成一排，剛好可以排完；改成每 {b} 個排成一排，也剛好可以排完，骨牌最少有幾個？', '個']],
    wlcmr: [['一盒彈珠在 {A} 顆～{B} 顆之間，每 {a} 顆裝一包或每 {b} 顆裝一包，都剛好可以分完，這盒彈珠有幾顆？', '顆'],
      ['班遊的人數在 {A} 人～{B} 人之間，每 {a} 人一組或每 {b} 人一組，都剛好可以分完，班遊有幾人？', '人']],
    lminmax: [['快樂國小全校學生人數在 {A} 人～{B} 人之間，每 {d} 人分成一組，剛好可以分完，全校學生最少有多少人？最多有多少人？', '人'],
      ['一批貼紙在 {A} 張～{B} 張之間，每 {d} 張裝成一袋，剛好可以裝完，貼紙最少有多少張？最多有多少張？', '張']],
    lsquare: [['老師準備了長方形壁報紙，每張長 {L} 公分、寬 {W} 公分。學生把壁報紙以同方向接成正方形，排成的正方形邊長最短是幾公分？', '公分'],
      ['用長 {L} 公分、寬 {W} 公分的長方形磁磚，同方向排成一個正方形，正方形的邊長最短是幾公分？', '公分']]
  };
  function fill(t, o) { return t.replace(/\{([a-zA-Z])\}/g, function (m, k) { return o[k] != null ? String(o[k]) : m; }); }

  // ---------- 出題（回 v）----------
  function factorsOf(n) { var o = []; for (var f = 2; f < n; f++) if (n % f === 0) o.push(f); return o; }
  function genCircle(rnd) {
    var N = pick(rnd, [3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18]), m = ri(rnd, 2, 3), xs = [], kmax = Math.min(25, Math.floor(400 / N)), guard = 0;
    while (xs.length < m && guard++ < 200) { var x = N * ri(rnd, 2, kmax); if (xs.indexOf(x) < 0) xs.push(x); }
    var fs = factorsOf(N);
    while (xs.length < 5 && guard++ < 400) {
      var y;
      if (fs.length && rnd() < 0.45) { var f = pick(rnd, fs); y = f * ri(rnd, 2, Math.floor(400 / f)); }   // 因數的倍數（7、35 不是 14 的倍數）
      else y = N * ri(rnd, 1, kmax) + ri(rnd, 1, N - 1);                                                  // 差一點點的數
      if (y >= 10 && y <= 400 && y % N !== 0 && xs.indexOf(y) < 0) xs.push(y);
    }
    return [N].concat(xs.sort(function (a, b) { return a - b; }));
  }
  // 六個數：兩個個位 0、一個個位 5、一到兩個雙數（個位不是 0）、其他單數
  function sixNums(rnd) {
    var out = [], guard = 0, ends = shuffle(rnd, [0, 0, 5, pick(rnd, [2, 4, 6, 8]), pick(rnd, [2, 4, 6, 8, 1, 3, 7, 9]), pick(rnd, [1, 3, 7, 9, 5, 0])]);
    while (out.length < 6 && guard++ < 300) {
      var e = ends[out.length], x = (rnd() < 0.5 ? ri(rnd, 10, 99) : ri(rnd, 100, 999)) * 10 + e;
      if (out.indexOf(x) < 0) out.push(x);
    }
    return out;
  }
  var BOTH_ASK = [[5, 0], [2, 0], [10, 0], [2, 5], [5, 10]];
  function genBoth(rnd, ask) { ask = ask || pick(rnd, BOTH_ASK); return [ask[0], ask[1]].concat(sixNums(rnd)); }
  function genRange(rnd) {
    for (var g = 0; g < 200; g++) {
      var N = ri(rnd, 6, 15), A = ri(rnd, 4, 30) * 10 + pick(rnd, [0, 0, 5]), B = A + pick(rnd, [10, 15, 20, 25, 30]);
      if (A % N === 0 || B % N === 0) continue;
      var c = Math.floor(B / N) - Math.floor(A / N);
      if (c >= 2 && c <= 4) return [N, A, B];
    }
    return [9, 100, 120];
  }
  function genBoard(rnd, two) {
    var m = pick(rnd, [2, 5]), d = [ri(rnd, 1, 9), ri(rnd, 0, 9), ri(rnd, 0, 9), -1];
    if (two == null ? rnd() < 0.5 : two) d[pick(rnd, [1, 2])] = -1;
    return [m].concat(d);
  }
  function genLast(rnd) { return [ri(rnd, 1, 9), ri(rnd, 0, 9), ri(rnd, 0, 9)]; }
  // 兩個數：最大公因數 g × 互質的 m、n（有時一個是另一個的倍數，例：5、15）
  function genPair(rnd, maxL, minA, maxA) {
    for (var t = 0; t < 400; t++) {
      var g = ri(rnd, 2, 14), m = ri(rnd, 1, 6), n = ri(rnd, 2, 7);
      if (m === n || gcd(m, n) !== 1) continue;
      var a = g * m, b = g * n, L = lcm(a, b);
      if (a < (minA || 4) || b < (minA || 4) || a > (maxA || 60) || b > (maxA || 60) || L > (maxL || 240)) continue;
      return rnd() < 0.5 ? [a, b] : [b, a];
    }
    return [6, 8];
  }
  // 範圍：包住 M、只包住一個 step 的倍數，A、B 本身不是 step 的倍數；能湊整十就湊整十
  function windowAround(rnd, M, step) {
    var lo = [], hi = [];
    for (var x = M - step + 1; x < M; x++) if (x > 0 && x % step !== 0) lo.push(x);
    for (var y = M + 1; y < M + step; y++) if (y % step !== 0) hi.push(y);
    var lo10 = lo.filter(function (x) { return x % 10 === 0; }), hi10 = hi.filter(function (y) { return y % 10 === 0; });
    var A = lo10.length ? pick(rnd, lo10) : pick(rnd, lo), B = hi10.length ? pick(rnd, hi10) : pick(rnd, hi);
    return [A, B];
  }
  function gen(kind, rnd, opt) {
    rnd = rnd || Math.random; opt = opt || {};
    var c = function () { return ri(rnd, 0, CTX[kind].length - 1); }, d, N, k, ab, M, w;
    switch (kind) {
      case 'circle': return genCircle(rnd);
      case 'both': return genBoth(rnd, opt.ask);
      case 'range': return genRange(rnd);
      case 'board': return genBoard(rnd, opt.two);
      case 'last': return genLast(rnd);
      case 'lcm': return genPair(rnd, 240, 4, 60);
      case 'wfloor': case 'wover':
        d = ri(rnd, 12, 35); N = rnd() < 0.2 ? d * ri(rnd, Math.ceil(200 / d), Math.floor(999 / d)) : ri(rnd, 20, 99) * 10;
        return [c(), d, N];
      case 'wceil':
        d = ri(rnd, 12, 48); N = rnd() < 0.2 ? d * ri(rnd, 2, Math.floor(400 / d)) : ri(rnd, Math.max(6, Math.ceil((d + 1) / 10)), 40) * 10;
        if (N <= d) N = d * 2 + 5;
        return [c(), d, N];
      case 'wrange':
        d = ri(rnd, 12, 35); k = ri(rnd, Math.ceil(100 / d), Math.floor(600 / d)); M = d * k; w = windowAround(rnd, M, d);
        return [c(), d, w[0], w[1]];
      case 'wlcm': ab = genPair(rnd, 300, 6, 60); return [c(), ab[0], ab[1]];
      case 'wlcmr':
        ab = genPair(rnd, 120, 4, 40); M = lcm(ab[0], ab[1]) * ri(rnd, 2, 4); w = windowAround(rnd, M, lcm(ab[0], ab[1]));
        return [c(), ab[0], ab[1], w[0], w[1]];
      case 'lminmax':
        for (var t = 0; t < 200; t++) {
          d = ri(rnd, 8, 25); var A = ri(rnd, 10, 30) * 10, B = A + ri(rnd, 8, 25) * 10;
          if (A % d && B % d && Math.floor(B / d) - Math.floor(A / d) >= 2) return [c(), d, A, B];
        }
        return [0, 12, 110, 270];
      case 'lsquare':
        for (var u = 0; u < 200; u++) {
          var g = pick(rnd, [5, 10, 10, 20]), m = ri(rnd, 2, 7), n = ri(rnd, 2, 7);
          if (m <= n || gcd(m, n) !== 1) continue;
          return [c(), g * m, g * n];
        }
        return [0, 100, 60];
    }
    return null;
  }

  // ---------- 建題（v → Q；v 不合格回 null）----------
  var okN = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  function build(kind, v) {
    if (!GROUP_OF[kind] || !Array.isArray(v)) return null;
    v = v.map(Number);
    var Q = { kind: kind, group: GROUP_OF[kind], v: v.slice(), id: 'mul:' + kind + ':' + v.join(',') }, d, N, A, B, a, b, L, q, ctx;
    switch (kind) {
      case 'circle':
        N = v[0]; var xs = v.slice(1);
        if (!okN(N, 2, 99) || xs.length !== 5 || !xs.every(function (x) { return okN(x, 1, 9999); }) || uniq(xs).length !== 5) return null;
        Q.N = N; Q.nums = xs; Q.ans = xs.map(function (x, i) { return x % N === 0 ? i : -1; }).filter(function (i) { return i >= 0; });
        if (!Q.ans.length || Q.ans.length === 5) return null;
        Q.text = '下面哪些數是 ' + N + ' 的倍數？點出來。'; Q.short = '圈出 ' + N + ' 的倍數：' + xs.join('、');
        return Q;
      case 'both':
        a = v[0]; b = v[1]; var ns = v.slice(2);
        if ([2, 3, 5, 10].indexOf(a) < 0 || [0, 5, 10].indexOf(b) < 0 || b === a || ns.length !== 6 || !ns.every(function (x) { return okN(x, 1, 99999); }) || uniq(ns).length !== 6) return null;
        Q.a = a; Q.b = b; Q.nums = ns; Q.m = b ? lcm(a, b) : a;
        Q.ans = ns.map(function (x, i) { return x % Q.m === 0 ? i : -1; }).filter(function (i) { return i >= 0; });
        Q.text = b ? '哪些數是 ' + a + ' 的倍數，也是 ' + b + ' 的倍數？點出來。' : '哪些數是 ' + a + ' 的倍數？點出來。';
        Q.short = (b ? '同時是 ' + a + ' 和 ' + b + ' 的倍數' : a + ' 的倍數') + '：' + ns.join('、');
        return Q;
      case 'range':
        N = v[0]; A = v[1]; B = v[2];
        if (!okN(N, 2, 99) || !okN(A, 1, 9999) || !okN(B, A + 1, 9999) || A % N === 0 || B % N === 0) return null;
        Q.N = N; Q.A = A; Q.B = B; Q.ans = [];
        for (var x = (Math.floor(A / N) + 1) * N; x < B; x += N) Q.ans.push(x);
        if (!Q.ans.length || Q.ans.length > 8) return null;
        Q.text = '在 ' + A + '～' + B + ' 中，' + N + ' 的倍數有哪些？'; Q.short = A + '～' + B + ' 中 ' + N + ' 的倍數';
        return Q;
      case 'board':
        var m = v[0], ds = v.slice(1);
        if ([2, 5].indexOf(m) < 0 || ds.length !== 4 || ds[3] !== -1 || !okN(ds[0], 1, 9)) return null;
        var unk = ds.map(function (x, i) { return x === -1 ? i : -1; }).filter(function (i) { return i >= 0; });
        if (unk.length < 1 || unk.length > 2 || !ds.every(function (x) { return x === -1 || okN(x, 0, 9); })) return null;
        var mk = function (mid, one) { return ds.reduce(function (s, x, i) { return s * 10 + (x === -1 ? (i === 3 ? one : mid) : x); }, 0); };
        Q.m = m; Q.digits = ds; Q.unk = unk; Q.max = mk(9, m === 2 ? 8 : 5); Q.min = mk(0, 0); Q.ans = [Q.max, Q.min];
        Q.sym = ds.map(function (x, i) { return x !== -1 ? String(x) : i === 3 ? (unk.length === 2 ? '★' : '▲') : '■'; });
        Q.text = '左邊定位板上的數是 ' + m + ' 的倍數，這個數最大和最小分別是多少？'; Q.short = '定位板 ' + Q.sym.join('') + ' 是 ' + m + ' 的倍數，最大／最小';
        return Q;
      case 'last':
        if (v.length !== 3 || !okN(v[0], 1, 9) || !okN(v[1], 0, 9) || !okN(v[2], 0, 9)) return null;
        Q.head = v.join(''); Q.ans = { 2: [0, 2, 4, 6, 8], 5: [0, 5], 10: [0] };
        Q.text = Q.head + '● 是一個四位數。如果它是 2 的倍數，● 可能是哪些？如果是 5 的倍數呢？10 的倍數呢？'; Q.short = Q.head + '● 是 2／5／10 的倍數，● 可能是？';
        return Q;
      case 'lcm':
        a = v[0]; b = v[1];
        if (!okN(a, 2, 999) || !okN(b, 2, 999) || a === b) return null;
        L = lcm(a, b); Q.a = a; Q.b = b; Q.l = L; Q.ans = [L, 2 * L, 3 * L];
        Q.text = '找出 ' + a + '、' + b + ' 的最小公倍數，並從最小公倍數開始，依序寫出 3 個公倍數。'; Q.short = a + '、' + b + ' 的最小公倍數＋3 個公倍數';
        return Q;
      case 'wfloor': case 'wover': case 'wceil':
        ctx = CTX[kind][v[0]]; d = v[1]; N = v[2];
        if (!ctx || v.length !== 3 || !okN(d, 2, 999) || !okN(N, d + 1, 99999)) return null;
        q = Math.floor(N / d); var r = N % d;
        Q.d = d; Q.N = N; Q.q = q; Q.r = r;
        Q.plus = kind === 'wover' ? true : kind === 'wceil' ? r > 0 : false;
        Q.k = q + (Q.plus ? 1 : 0); Q.prod = d * Q.k;
        Q.ans = kind === 'wceil' ? [Q.k, Q.prod] : [Q.prod]; Q.units = kind === 'wceil' ? [ctx[1], ctx[2]] : [ctx[1]];
        Q.text = fill(ctx[0], { d: d, N: N }); Q.short = WORD_NAME[kind] + '：' + Q.text.slice(0, 26) + '…';
        Q.steps = ['method', 'div', 'plus', 'mul', 'ans']; Q.dividends = [N];
        return Q;
      case 'wrange':
        ctx = CTX[kind][v[0]]; d = v[1]; A = v[2]; B = v[3];
        if (!ctx || v.length !== 4 || !okN(d, 2, 999) || !okN(A, 1, 99999) || !okN(B, A + 1, 99999) || A % d === 0 || B % d === 0 || Math.floor(B / d) - Math.floor(A / d) !== 1) return null;
        Q.d = d; Q.A = A; Q.B = B; Q.k = Math.floor(B / d); Q.prod = d * Q.k; Q.ans = [Q.prod]; Q.units = [ctx[1]];
        Q.text = fill(ctx[0], { d: d, A: A, B: B }); Q.short = WORD_NAME[kind] + '：' + Q.text.slice(0, 26) + '…';
        Q.steps = ['method', 'div', 'plus', 'mul', 'ans']; Q.dividends = [A, B];
        return Q;
      case 'wlcm':
        ctx = CTX[kind][v[0]]; a = v[1]; b = v[2];
        if (!ctx || v.length !== 3 || !okN(a, 2, 999) || !okN(b, 2, 999) || a === b) return null;
        Q.a = a; Q.b = b; Q.l = lcm(a, b); Q.ans = [Q.l]; Q.units = [ctx[1]];
        Q.text = fill(ctx[0], { a: a, b: b }); Q.short = WORD_NAME[kind] + '：' + Q.text.slice(0, 26) + '…';
        Q.steps = ['method', 'lcm', 'ans'];
        return Q;
      case 'wlcmr':
        ctx = CTX[kind][v[0]]; a = v[1]; b = v[2]; A = v[3]; B = v[4];
        if (!ctx || v.length !== 5 || !okN(a, 2, 999) || !okN(b, 2, 999) || a === b || !okN(A, 1, 99999) || !okN(B, A + 1, 99999)) return null;
        L = lcm(a, b); if (A % L === 0 || B % L === 0 || Math.floor(B / L) - Math.floor(A / L) !== 1) return null;
        Q.a = a; Q.b = b; Q.A = A; Q.B = B; Q.l = L; Q.k = Math.floor(B / L); Q.prod = L * Q.k; Q.ans = [Q.prod]; Q.units = [ctx[1]];
        Q.text = fill(ctx[0], { a: a, b: b, A: A, B: B }); Q.short = WORD_NAME[kind] + '：' + Q.text.slice(0, 26) + '…';
        Q.steps = ['method', 'lcm', 'mul', 'ans'];
        return Q;
      case 'lminmax':
        ctx = CTX[kind][v[0]]; d = v[1]; A = v[2]; B = v[3];
        if (!ctx || v.length !== 4 || !okN(d, 2, 999) || !okN(A, 1, 99999) || !okN(B, A + 1, 99999) || A % d === 0 || B % d === 0) return null;
        Q.d = d; Q.A = A; Q.B = B; Q.min = (Math.floor(A / d) + 1) * d; Q.max = Math.floor(B / d) * d;
        if (Q.min > Q.max) return null;
        Q.ans = [Q.min, Q.max]; Q.unit = ctx[1];
        Q.text = fill(ctx[0], { d: d, A: A, B: B }); Q.short = '最少／最多：' + Q.text.slice(0, 24) + '…';
        return Q;
      case 'lsquare':
        ctx = CTX[kind][v[0]]; var Lh = v[1], W = v[2];
        if (!ctx || v.length !== 3 || !okN(Lh, 2, 9999) || !okN(W, 2, 9999) || Lh === W) return null;
        Q.L = Lh; Q.W = W; Q.l = lcm(Lh, W); Q.ans = [Q.l]; Q.unit = ctx[1];
        Q.text = fill(ctx[0], { L: Lh, W: W }); Q.short = '拼正方形：長 ' + Lh + '、寬 ' + W + '，邊長最短';
        return Q;
    }
    return null;
  }
  function make(kind, rnd, opt) { for (var t = 0; t < 30; t++) { var Q = build(kind, gen(kind, rnd, opt)); if (Q) return Q; } return null; }
  // 練習一輪：group 的題型輪流出（word 可指定 only＝某一個模板）
  function round(group, n, rnd, only) {
    rnd = rnd || Math.random;
    var ks = only && GROUP_OF[only] === group ? [only] : GROUP_KINDS[group];
    if (!ks) return [];
    var out = [], seen = {}, order = shuffle(rnd, ks), guard = 0;
    while (out.length < n && guard++ < 200) {
      var Q = make(order[out.length % order.length], rnd);
      if (Q && !seen[Q.id]) { seen[Q.id] = 1; out.push(Q); }
    }
    return out;
  }

  // ---------- 判分 ----------
  function num(x) { if (typeof x === 'number') return isInt(x) ? x : null; var s = String(x == null ? '' : x).replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); }).replace(/[,，\s]/g, ''); return /^[0-9]{1,7}$/.test(s) ? Number(s) : null; }
  function nums(s) { if (Array.isArray(s)) return s.map(num).filter(function (x) { return x != null; }); return String(s == null ? '' : s).replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); }).split(/[^0-9]+/).filter(Boolean).map(Number); }
  var RULE = { 2: '2 的倍數：個位是 0、2、4、6、8', 5: '5 的倍數：個位是 0 或 5', 10: '10 的倍數：個位是 0', 3: '3 的倍數：每一位加起來是 3 的倍數' };
  function divText(x, d) { var q = Math.floor(x / d), r = x % d; return x + ' ÷ ' + d + ' ＝ ' + q + (r ? ' … ' + r : ''); }
  // 選數字題（circle、both）：第一個錯的說清楚
  function selHint(Q, sel) {
    var m = Q.kind === 'circle' ? Q.N : Q.m, wrong = sel.filter(function (i) { return Q.ans.indexOf(i) < 0; }), miss = Q.ans.filter(function (i) { return sel.indexOf(i) < 0; });
    if (Q.kind === 'both') {
      var rule = Q.b ? RULE[Q.a] + '；' + RULE[Q.b] + '。兩個都要符合 → 個位是 0' : RULE[Q.a];
      if (wrong.length) { var x = Q.nums[wrong[0]]; return x + ' 的個位是 ' + (x % 10) + '，不符合喔。' + rule; }
      return '還有 ' + miss.length + ' 個沒點到。' + rule;
    }
    if (wrong.length) { var y = Q.nums[wrong[0]], g = gcd(y, m); return divText(y, m) + '，有餘數，不是 ' + m + ' 的倍數' + (g > 1 ? '（' + y + ' 是 ' + g + ' 的倍數，可是不是 ' + m + ' 的倍數）' : ''); }
    return '還有 ' + miss.length + ' 個沒點到：用 ' + m + ' 去除每一個數，整除（沒有餘數）的就是 ' + m + ' 的倍數';
  }
  var PTS = { circle: 3, both: 3, range: 2, board: 4, last: 6, lcm: 4, wfloor: 6, wrange: 6, wover: 6, wceil: 6, wlcm: 6, wlcmr: 6, lminmax: 5, lsquare: 5 };
  function check(Q, ans) {
    ans = ans || {};
    var parts = [], max = PTS[Q.kind] || 0, got = 0, p, x;
    switch (Q.kind) {
      case 'circle': case 'both':
        var sel = uniq((ans.sel || []).map(Number).filter(function (i) { return i >= 0 && i < Q.nums.length; }));
        p = sameSet(sel, Q.ans); parts.push({ k: 'sel', ok: p, hint: p ? '' : selHint(Q, sel) }); got = p ? max : 0; break;
      case 'range':
        var ys = nums(ans.list), extra = ys.filter(function (y) { return Q.ans.indexOf(y) < 0; }), miss = Q.ans.filter(function (y) { return ys.indexOf(y) < 0; });
        p = !extra.length && !miss.length;
        var q0 = Math.floor(Q.A / Q.N);
        parts.push({ k: 'list', ok: p, hint: p ? '' : (extra.length ? (extra[0] < Q.A || extra[0] > Q.B ? extra[0] + ' 不在 ' + Q.A + '～' + Q.B + ' 裡面喔。' : divText(extra[0], Q.N) + '，' + extra[0] + ' 不是 ' + Q.N + ' 的倍數。') : '') +
          '先除：' + divText(Q.A, Q.N) + '，所以第一個倍數是 ' + Q.N + '×' + (q0 + 1) + '；之後每次加 ' + Q.N + '，不能超過 ' + Q.B + '。' + (miss.length && !extra.length ? '還少 ' + miss.length + ' 個。' : '') });
        got = p ? max : 0; break;
      case 'board':
        var mx = num(ans.max), mn = num(ans.min), one = Q.m === 2 ? 8 : 5;
        parts.push({ k: 'max', ok: mx === Q.max, hint: mx === Q.max ? '' : '最大：' + (Q.unk.length === 2 ? '■ 填最大的 9；' : '') + '個位要是 ' + Q.m + ' 的倍數，最大只能填 ' + one + '（' + RULE[Q.m] + '）' });
        parts.push({ k: 'min', ok: mn === Q.min, hint: mn === Q.min ? '' : '最小：' + (Q.unk.length === 2 ? '■ 填最小的 0；' : '') + '個位最小填 0（0 也是 ' + Q.m + ' 的倍數的個位）' });
        got = (mx === Q.max ? 2 : 0) + (mn === Q.min ? 2 : 0); break;
      case 'last':
        [2, 5, 10].forEach(function (m) {
          var s = nums(ans['s' + m]).filter(function (y) { return y <= 9; }), ok = sameSet(s, Q.ans[m]);
          parts.push({ k: 's' + m, ok: ok, hint: ok ? '' : RULE[m] + '，所以 ● 可能是 ' + (m === 10 ? '…只有一個' : '哪幾個？') });
          if (ok) got += 2;
        });
        break;
      case 'lcm':
        var l = num(ans.l), ms = (ans.ms || []).map(num), okL = l === Q.l, okM = ms.length === 3 && ms.every(function (y, i) { return y === Q.ans[i]; }), hl = '', hm = '';
        if (!okL) {
          if (l != null && l % Q.a === 0 && l % Q.b === 0) hl = l + ' 也是公倍數，可是還有更小的！把兩排倍數列出來，第一個一樣的才是最小公倍數。';
          else if (l != null && l % Q.a !== 0) hl = l + ' 不是 ' + Q.a + ' 的倍數（' + divText(l, Q.a) + '）。列出 ' + Q.a + '、' + (Q.a * 2) + '、' + (Q.a * 3) + '…和 ' + Q.b + '、' + (Q.b * 2) + '…，找第一個一樣的。';
          else if (l != null) hl = l + ' 不是 ' + Q.b + ' 的倍數（' + divText(l, Q.b) + '）。列出兩排倍數，找第一個一樣的。';
          else hl = '把 ' + Q.a + ' 和 ' + Q.b + ' 的倍數各列一排，第一個一樣的就是最小公倍數。';
        }
        if (!okM) {
          var i0 = -1; for (var i = 0; i < 3; i++) if (ms[i] !== Q.ans[i]) { i0 = i; break; }
          var y = ms[i0];
          if (y == null) hm = '公倍數要寫 3 個：最小公倍數的 1 倍、2 倍、3 倍。';
          else if (i0 === 0) hm = '第 1 個公倍數就是最小公倍數 ' + Q.l + '（從最小的開始寫）。';
          else if (y % Q.l === 0) hm = '要照順序：' + Q.l + '×1、' + Q.l + '×2、' + Q.l + '×3，第 ' + (i0 + 1) + ' 個應該是 ' + Q.l + '×' + (i0 + 1) + '。';
          else hm = '第 ' + (i0 + 1) + ' 個公倍數是 ' + Q.l + '×' + (i0 + 1) + '。' + mhint(Q.l, i0 + 1);
        }
        parts.push({ k: 'l', ok: okL, hint: hl }); parts.push({ k: 'ms', ok: okM, hint: hm });
        got = (okL ? 2 : 0) + (okM ? 2 : 0); break;
      case 'wfloor': case 'wrange': case 'wover': case 'wceil': case 'wlcm': case 'wlcmr':
        var an = (ans.nums || []).map(num), au = ans.units || [], okN2 = Q.ans.every(function (y, j) { return an[j] === y; }), okU = Q.units.every(function (u, j) { return au[j] === u; });
        parts.push({ k: 'nums', ok: okN2, hint: okN2 ? '' : ansHint(Q, an) });
        parts.push({ k: 'units', ok: okU, hint: okU ? '' : '單位要寫對：' + Q.units.join('、') });
        if (Q.kind === 'wceil') { got = (an[0] === Q.ans[0] ? 3 : 0) + (an[1] === Q.ans[1] ? 3 : 0); if (got && !okU) got -= 1; }
        else got = okN2 ? (okU ? 6 : 5) : 0;
        break;
      case 'lminmax':
        var a1 = num(ans.min), a2 = num(ans.max), o1 = a1 === Q.min, o2 = a2 === Q.max;
        parts.push({ k: 'min', ok: o1, hint: o1 ? '' : '最少：' + divText(Q.A, Q.d) + '，有餘數，商要 +1 → ' + Q.d + '×' + (Math.floor(Q.A / Q.d) + 1) });
        parts.push({ k: 'max', ok: o2, hint: o2 ? '' : '最多：' + divText(Q.B, Q.d) + '，不能超過 ' + Q.B + '，商不用 +1 → ' + Q.d + '×' + Math.floor(Q.B / Q.d) });
        if (!o1 && a1 != null && a1 % Q.d === 0 && a1 > Q.A) parts[0].hint += '（' + a1 + ' 也在範圍裡，可是還有更少的）';
        if (!o1 && a1 != null && a1 % Q.d === 0 && a1 < Q.A) parts[0].hint += '（' + a1 + ' 比 ' + Q.A + ' 少，不在範圍裡）';
        if (!o1 && a1 != null && a1 % Q.d !== 0) parts[0].hint = mulCheck(Q.d, Math.floor(Q.A / Q.d) + 1, a1) || parts[0].hint;
        if (!o2 && a2 != null && a2 % Q.d !== 0) parts[1].hint = mulCheck(Q.d, Math.floor(Q.B / Q.d), a2) || parts[1].hint;
        got = o1 && o2 ? max : 0; break;
      case 'lsquare':
        x = num(ans.n); p = x === Q.l;
        parts.push({ k: 'n', ok: p, hint: p ? '' : (x != null && x % Q.L === 0 && x % Q.W === 0 ? x + ' 可以排成正方形，可是還有更小的。' : '') + '正方形的邊長要同時是 ' + Q.L + ' 和 ' + Q.W + ' 的倍數 → 找最小公倍數：' + Q.L + '、' + (Q.L * 2) + '、' + (Q.L * 3) + '…和 ' + Q.W + '、' + (Q.W * 2) + '、' + (Q.W * 3) + '…' });
        got = p ? max : 0; break;
    }
    return { ok: parts.every(function (z) { return z.ok; }), parts: parts, got: Math.max(0, got), max: max, hint: parts.filter(function (z) { return !z.ok && z.hint; }).map(function (z) { return z.hint; }).join('　') };
  }
  // 乘法算錯了嗎：x 接近 a×b（不是 a 的倍數）→ 給拆解提示
  function mulCheck(a, b, x) { return x != null && x !== a * b ? mhint(a, b) : ''; }
  function ansHint(Q, an) {
    var y = an[0];
    if (Q.kind === 'wlcm') return y != null && y % Q.a === 0 && y % Q.b === 0 ? y + ' 也可以剛好裝完，可是還有更少的：找最小公倍數。' : '每 ' + Q.a + ' 個或每 ' + Q.b + ' 個都剛好 → 要同時是 ' + Q.a + ' 和 ' + Q.b + ' 的倍數 → 最小公倍數。';
    if (Q.kind === 'wlcmr') return '先找 ' + Q.a + ' 和 ' + Q.b + ' 的最小公倍數 ' + Q.l + '，再找它在 ' + Q.A + '～' + Q.B + ' 裡的倍數。' + (y != null && y % Q.l !== 0 ? '' : '');
    if (Q.kind === 'wceil') {
      var h = [];
      if (an[0] !== Q.k) h.push(divText(Q.N, Q.d) + (Q.r ? '，還差 ' + Q.r + ' 個也要買一包 → 商 +1' : '，剛好分完，不用多買'));
      if (an[1] !== Q.prod) h.push(an[1] != null && an[0] === Q.k ? mhint(Q.d, Q.k) : '幾顆＝每包 ' + Q.d + ' × 包數');
      return h.join('；');
    }
    if (y != null && y % Q.d !== 0 && Math.abs(y - Q.prod) < Q.d) return mhint(Q.d, Q.k);   // 乘法算錯（15×57 寫成 845）
    if (Q.kind === 'wfloor') return y != null && y > Q.N ? y + ' 超過 ' + Q.N + ' 了！「不超過」商不用 +1。' : divText(Q.N, Q.d) + '，不超過 ' + Q.N + ' → 商不用 +1 → ' + Q.d + '×' + Q.k;
    if (Q.kind === 'wover') return y != null && y <= Q.N ? y + (y === Q.N ? ' 跟 ' + Q.N + ' 一樣多，不算「比它多」' : ' 比 ' + Q.N + ' 少') + '！要比 ' + Q.N + ' 多 → 商要 +1。' : divText(Q.N, Q.d) + '，要比 ' + Q.N + ' 多 → 商 +1 → ' + Q.d + '×' + Q.k;
    return '在 ' + Q.A + '～' + Q.B + ' 之間：' + divText(Q.A, Q.d) + '，商 +1 → ' + Q.d + '×' + Q.k + '（也可以用 ' + divText(Q.B, Q.d) + '，商不用 +1）';
  }

  // ---------- 應用題分步（練習）----------
  var METHOD = [['div', '用除法：÷ 每一份的數量，看商和餘數'], ['lcm', '找公倍數：列舉或短除法']];
  function needMethod(Q) { return DIV_KINDS.indexOf(Q.kind) >= 0 ? 'div' : 'lcm'; }
  function stepMethod(Q, m) {
    var want = needMethod(Q), ok = m === want;
    return { ok: ok, hint: ok ? '' : want === 'div' ? '題目只有「每 ' + Q.d + ' 個一份」一種分法，要看 ' + (Q.kind === 'wrange' ? '範圍' : Q.N) + ' 裡面有幾份 → 用除法。' : '題目有兩種分法（每 ' + Q.a + ' 個、每 ' + Q.b + ' 個）都要剛好 → 要同時是兩個數的倍數 → 找公倍數。' };
  }
  // 除法：x ÷ y ＝ q … r
  function stepDiv(Q, x, y, q, r) {
    x = num(x); y = num(y); q = num(q); r = num(r);
    var bad = [];
    if (Q.dividends.indexOf(x) < 0) bad.push('x');
    if (y !== Q.d) bad.push('y');
    if (bad.length) return { ok: false, bad: bad, hint: bad.indexOf('y') >= 0 && bad.indexOf('x') < 0 ? '除數是「每一份的數量」' + Q.d + '。' : Q.kind === 'wrange' ? '用範圍的數去除：' + Q.A + ' ÷ ' + Q.d + '（或 ' + Q.B + ' ÷ ' + Q.d + '）。' : '用 ' + Q.N + ' 去除以每一份的 ' + Q.d + '：' + Q.N + ' ÷ ' + Q.d + '。' };
    var Q0 = Math.floor(x / y), R0 = x % y;
    if (q === Q0 && r === R0) return { ok: true, x: x, bad: [] };
    var h;
    if (q == null || r == null) h = '商和餘數都要寫（整除就寫餘數 0）。';
    else if (r >= y) h = '餘數 ' + r + ' 比除數 ' + y + ' 還大（或一樣），商還可以再大一點。';
    else if (q * y > x) h = '商太大了：' + y + '×' + q + ' ＝ ' + (q * y) + '，已經超過 ' + x + '。';
    else if (q * y + r !== x) h = '驗算：' + y + '×' + q + ' ＋ ' + r + ' 要等於 ' + x + '。' + (q === Q0 ? '餘數再算一次：' + x + ' − ' + y + '×' + q + '。' : mhint(y, q));
    else h = '再算一次 ' + x + ' ÷ ' + y + '。';
    return { ok: false, bad: q !== Q0 ? ['q'] : ['r'], hint: h };
  }
  // 商要不要 +1（x＝剛剛用的被除數）
  function needPlus(Q, x) { if (Q.kind === 'wrange') return x === Q.A; return Q.plus; }
  function plusWhy(Q, x) {
    var r = x % Q.d, q = Math.floor(x / Q.d);
    switch (Q.kind) {
      case 'wfloor': return '「不超過 ' + Q.N + '」：' + Q.d + '×' + q + '＝' + (Q.d * q) + ' 沒有超過，再多一份就超過了 → 商不用 +1。';
      case 'wover': return r ? '「比 ' + Q.N + ' 多」：' + Q.d + '×' + q + '＝' + (Q.d * q) + ' 比 ' + Q.N + ' 少 → 商要 +1。' : '剛好整除：' + Q.d + '×' + q + ' ＝ ' + Q.N + '，一樣多不算「比它多」→ 商還是要 +1。';
      case 'wceil': return r ? '「最少要幾包」：' + q + ' 包只有 ' + (Q.d * q) + ' 個，還差 ' + r + ' 個，也要再買一包 → 商 +1（無條件進位）。' : '剛好整除：' + q + ' 包剛好 ' + Q.N + ' 個 → 不用多買，商不用 +1。';
      case 'wrange': return x === Q.A ? Q.A + ' ÷ ' + Q.d + ' 的商 ' + q + '：' + Q.d + '×' + q + ' ＝ ' + (Q.d * q) + ' 比 ' + Q.A + ' 少，還不在範圍裡 → 商要 +1。' : Q.B + ' ÷ ' + Q.d + ' 的商 ' + q + '：' + Q.d + '×' + q + ' ＝ ' + (Q.d * q) + ' 沒有超過 ' + Q.B + ' → 商不用 +1。';
    }
    return '';
  }
  function stepPlus(Q, x, plus) { var ok = !!plus === needPlus(Q, x); return { ok: ok, k: Math.floor(x / Q.d) + (needPlus(Q, x) ? 1 : 0), hint: ok ? '' : plusWhy(Q, x) }; }
  function stepMul(Q, k, prod) {
    k = num(k); prod = num(prod);
    var base = Q.kind === 'wlcmr' ? Q.l : Q.d;
    if (Q.kind === 'wlcmr' && k !== Q.k) return { ok: false, bad: ['k'], hint: '範圍 ' + Q.A + '～' + Q.B + '：' + divText(Q.A, Q.l) + '，所以是 ' + Q.l + ' 的 ' + Q.k + ' 倍（' + Q.l + '×' + (Q.k - 1) + ' 太少、' + Q.l + '×' + (Q.k + 1) + ' 太多）。' };
    if (prod === base * Q.k) return { ok: true, bad: [] };
    return { ok: false, bad: ['p'], hint: mhint(base, Q.k) };
  }
  function stepLcm(Q, l) {
    l = num(l); if (l === Q.l) return { ok: true };
    var r = check(build('lcm', [Q.a, Q.b]), { l: l, ms: [] });
    return { ok: false, hint: r.parts[0].hint };
  }
  // 考卷正解的關鍵步驟
  function keySteps(Q) {
    var s = [];
    if (DIV_KINDS.indexOf(Q.kind) >= 0) {
      var x = Q.kind === 'wrange' ? Q.A : Q.N, q = Math.floor(x / Q.d);
      s.push('用除法：' + divText(x, Q.d));
      s.push(needPlus(Q, x) ? '商 +1：' + q + '＋1＝' + (q + 1) : '商不用 +1');
      s.push(Q.d + ' × ' + Q.k + ' ＝ ' + Q.prod + (MX ? '（' + MX.full(Q.d, Q.k) + '）' : ''));
      s.push('答：' + (Q.kind === 'wceil' ? Q.k + ' ' + Q.units[0] + '，' + Q.prod + ' ' + Q.units[1] : Q.prod + ' ' + Q.units[0]));
    } else if (Q.kind === 'wlcm' || Q.kind === 'wlcmr' || Q.kind === 'lsquare' || Q.kind === 'lcm') {
      var a = Q.a || Q.L, b = Q.b || Q.W, ra = [], rb = [];
      for (var i = 1; i * a <= Q.l; i++) ra.push(a * i);
      for (var j = 1; j * b <= Q.l; j++) rb.push(b * j);
      s.push('列舉：' + a + ' → ' + ra.join('、') + '…；' + b + ' → ' + rb.join('、') + '…；最小公倍數 ' + Q.l);
      if (Q.kind === 'wlcmr') s.push('範圍 ' + Q.A + '～' + Q.B + '：' + Q.l + ' × ' + Q.k + ' ＝ ' + Q.prod);
      if (Q.kind === 'lcm') s.push('3 個公倍數：' + Q.l + '×1、' + Q.l + '×2、' + Q.l + '×3 ＝ ' + Q.ans.join('、'));
      else s.push('答：' + Q.ans[0] + ' ' + (Q.units ? Q.units[0] : Q.unit));
    } else if (Q.kind === 'lminmax') {
      s.push('最少：' + divText(Q.A, Q.d) + '，商 +1 → ' + Q.d + '×' + (Math.floor(Q.A / Q.d) + 1) + ' ＝ ' + Q.min);
      s.push('最多：' + divText(Q.B, Q.d) + '，商不用 +1 → ' + Q.d + '×' + Math.floor(Q.B / Q.d) + ' ＝ ' + Q.max);
    } else if (Q.kind === 'range') s.push(divText(Q.A, Q.N) + ' → 從 ' + Q.N + '×' + (Math.floor(Q.A / Q.N) + 1) + ' 開始：' + Q.ans.join('、'));
    else if (Q.kind === 'board') s.push('最大 ' + Q.max + '、最小 ' + Q.min + '（' + RULE[Q.m] + '）');
    else if (Q.kind === 'last') s.push('2 的倍數：0、2、4、6、8；5 的倍數：0、5；10 的倍數：0');
    else if (Q.kind === 'circle') s.push(Q.N + ' 的倍數：' + Q.ans.map(function (i) { return Q.nums[i]; }).join('、'));
    else if (Q.kind === 'both') s.push((Q.b ? '同時是 ' + Q.a + ' 和 ' + Q.b + ' 的倍數' : Q.a + ' 的倍數') + '：' + (Q.ans.map(function (i) { return Q.nums[i]; }).join('、') || '（沒有）'));
    return s;
  }
  // 正解（文字）
  function answerText(Q) {
    switch (Q.kind) {
      case 'circle': case 'both': return Q.ans.map(function (i) { return Q.nums[i]; }).join('、') || '（沒有）';
      case 'range': return Q.ans.join('、');
      case 'board': return '最大 ' + Q.max + '，最小 ' + Q.min;
      case 'last': return '2 的倍數：0、2、4、6、8；5 的倍數：0、5；10 的倍數：0';
      case 'lcm': return '最小公倍數 ' + Q.l + '；3 個公倍數 ' + Q.ans.join('、');
      case 'wceil': return Q.k + ' ' + Q.units[0] + '，' + Q.prod + ' ' + Q.units[1];
      case 'lminmax': return '最少 ' + Q.min + ' ' + Q.unit + '，最多 ' + Q.max + ' ' + Q.unit;
      case 'lsquare': return Q.l + ' ' + Q.unit;
      default: return Q.ans[0] + ' ' + Q.units[0];
    }
  }

  // ---------- 考試：照原卷六大題（9／9／16／20／36／10）；紙本練習卷第一回、第二回（固定題目）在 multiples-papers.js ----------
  var EXAM = [{ no: 1, title: '圈圈看', note: '每題 3 分，共 9 分' }, { no: 2, title: '想一想，再回答問題', note: '每題 3 分，共 9 分' }, { no: 3, title: '填填看', note: '每格 2 分，共 16 分' },
    { no: 4, title: '找出最小公倍數，並從最小公倍數開始依序寫出 3 個公倍數', note: '每題 4 分（最小公倍數 2 分、3 個公倍數 2 分），共 20 分' },
    { no: 5, title: '把做法和答案記下來', note: '每題 6 分（數字對、單位錯扣 1 分），共 36 分' }, { no: 6, title: '素養題', note: '每題 5 分，共 10 分' }];
  function exam(rnd) {
    rnd = rnd || Math.random;
    var secs = EXAM.map(function (s) { return { no: s.no, title: s.title, note: s.note, items: [] }; }), used = {};
    var add = function (si, Q) { if (Q) secs[si].items.push(Q); };
    var Ns = shuffle(rnd, [4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18]).slice(0, 3);
    Ns.forEach(function (N) { var Q = null; for (var t = 0; t < 50 && !Q; t++) Q = build('circle', [N].concat(regenFor(rnd, N))); add(0, Q); });
    var six = sixNums(rnd);
    [[pick(rnd, [5, 2]), 0], [2, 5], [5, 10]].forEach(function (ak) { add(1, build('both', ak.concat(six))); });
    if (secs[1].items.some(function (Q) { return !Q || !Q.ans.length; })) { secs[1].items = []; six = [105, 1040, 4008, 2000, 825, 5160]; [[5, 0], [2, 5], [5, 10]].forEach(function (ak) { add(1, build('both', ak.concat(six))); }); }
    add(2, make('range', rnd)); add(2, make('board', rnd, { two: false })); add(2, make('board', rnd, { two: true })); add(2, make('last', rnd));
    while (secs[3].items.length < 5) { var Q4 = make('lcm', rnd); if (Q4 && !used[Q4.id]) { used[Q4.id] = 1; add(3, Q4); } }
    GROUP_KINDS.word.forEach(function (k) { add(4, make(k, rnd)); });
    add(5, make('lminmax', rnd)); add(5, make('lsquare', rnd));
    secs.forEach(function (s) { s.max = s.items.reduce(function (n, Q) { return n + PTS[Q.kind]; }, 0); });
    return secs;
  }
  // 圈圈看（考試）：指定 N 出 5 個數
  function regenFor(rnd, N) {
    for (var t = 0; t < 100; t++) {
      var xs = [], m = ri(rnd, 2, 3), kmax = Math.min(25, Math.floor(400 / N)), g = 0, fs = factorsOf(N);
      while (xs.length < m && g++ < 200) { var x = N * ri(rnd, 2, kmax); if (xs.indexOf(x) < 0) xs.push(x); }
      while (xs.length < 5 && g++ < 600) {
        var y = fs.length && rnd() < 0.45 ? (function (f) { return f * ri(rnd, 2, Math.floor(400 / f)); })(pick(rnd, fs)) : N * ri(rnd, 1, kmax) + ri(rnd, 1, N - 1);
        if (y >= 7 && y <= 400 && y % N !== 0 && xs.indexOf(y) < 0) xs.push(y);
      }
      if (xs.length === 5) return xs.sort(function (a, b) { return a - b; });
    }
    return [N, N * 2 + 1, N * 3, N * 5 + 1, N * 7].sort(function (a, b) { return a - b; });
  }
  function examScore(secs, answers) {
    var total = 0, max = 0, res = secs.map(function (s) {
      var items = s.items.map(function (Q) { var r = check(Q, answers[Q.id] || {}); total += r.got; max += r.max; return { Q: Q, r: r }; });
      return { no: s.no, title: s.title, got: items.reduce(function (n, x) { return n + x.r.got; }, 0), max: s.max, items: items };
    });
    return { total: total, max: max, secs: res };
  }

  // 錯題庫：p＝{type:'multiples', k, v, q}；用 build(k, v) 原題重做。練習卷（multiples-papers.js）的題多帶 paper、pn（MULP.fromMistake 用原卷題目重做）
  function mkEntry(Q) { var p = { type: 'multiples', k: Q.kind, v: Q.v.slice(), q: Q.short || Q.text }; if (Q.paper) { p.paper = Q.paper; p.pn = Q.pn; } return { id: Q.id, p: p }; }
  function fromMistake(p) { return p && p.type === 'multiples' && GROUP_OF[p.k] && Array.isArray(p.v) ? build(p.k, p.v) : null; }

  var MUL = { GROUPS: GROUPS, GROUP_OF: GROUP_OF, GROUP_KINDS: GROUP_KINDS, WORD_NAME: WORD_NAME, DIV_KINDS: DIV_KINDS, UNITS: UNITS, CTX: CTX, RULE: RULE, METHOD: METHOD, PTS: PTS, EXAM: EXAM,
    gcd: gcd, lcm: lcm, gen: gen, build: build, make: make, round: round, check: check, num: num, nums: nums, divText: divText,
    needMethod: needMethod, stepMethod: stepMethod, stepDiv: stepDiv, needPlus: needPlus, plusWhy: plusWhy, stepPlus: stepPlus, stepMul: stepMul, stepLcm: stepLcm,
    keySteps: keySteps, answerText: answerText, exam: exam, examScore: examScore, mkEntry: mkEntry, fromMistake: fromMistake };
  if (typeof module !== 'undefined' && module.exports) module.exports = MUL;
  G.MUL = MUL;
})(typeof window !== 'undefined' ? window : globalThis);
