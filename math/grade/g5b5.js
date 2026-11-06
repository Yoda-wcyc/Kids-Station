/* 五下 單元五 大數與折線圖（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b5.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma;
  var DG = '零一二三四五六七八九', U4 = ['千', '百', '十', ''], GU = ['', '萬', '億', '兆'];
  var PL = ['個', '十', '百', '千', '萬', '十萬', '百萬', '千萬', '億', '十億', '百億', '千億', '兆'];
  var METH = ['四捨五入法', '無條件捨去法', '無條件進入法'];
  function p10(k) { var x = 1; while (k-- > 0) x *= 10; return x; }
  // 一節（0～9999）的讀法；lead＝整個數的第一節（開頭 10～19 讀「十…」不讀「一十…」）
  function grp(g, lead) {
    var ds = [Math.floor(g / 1000), Math.floor(g / 100) % 10, Math.floor(g / 10) % 10, g % 10], s = '', z = false;
    ds.forEach(function (d, i) {
      if (!d) { if (s) z = true; return; }
      if (z) s += '零'; z = false;
      s += (d === 1 && i === 2 && lead && !s ? '' : DG[d]) + U4[i];
    });
    return s;
  }
  // 國字讀法：每 4 位一節；前面有讀過、這節不滿 1000 或中間整節是 0 → 補一個「零」
  function cn(n) {
    var gs = [], s = '', gap = false;
    while (n > 0) { gs.push(n % 10000); n = Math.floor(n / 10000); }
    for (var i = gs.length - 1; i >= 0; i--) {
      if (!gs[i]) { if (s) gap = true; continue; }
      if (s && (gap || gs[i] < 1000)) s += '零';
      s += grp(gs[i], !s) + GU[i]; gap = false;
    }
    return s || '零';
  }
  // lo～hi 位的整數，每一位有 z 的機率是 0（最高位不是 0）
  function bigN(r, lo, hi, z) {
    var len = H.ri(r, lo, hi), n = H.ri(r, 1, 9);
    for (var i = 1; i < len; i++) n = n * 10 + (r() < z ? 0 : H.ri(r, 1, 9));
    return n;
  }
  function dAt(n, p) { return Math.floor(n / p10(p)) % 10; }
  // 取概數到 u：how 0 四捨五入、1 無條件捨去、2 無條件進入
  function rnd(n, u, how) { var q = Math.floor(n / u), rem = n - q * u; return (how === 0 ? (rem * 2 >= u ? q + 1 : q) : how === 1 ? q : (rem ? q + 1 : q)) * u; }
  function cut4(n) { var s = String(n), out = []; while (s.length > 4) { out.unshift(s.slice(-4)); s = s.slice(0, -4); } out.unshift(s); return out.join('｜'); }

  // ---- 折線圖（每格 20px，點都在格線上）----
  var TOP = [
    ['小明家每個月的用電度數', '度', [10, 20, 50]],
    ['學校圖書館每個月借出的書', '本', [10, 20, 50]],
    ['夜市雞排攤每個月賣出的雞排', '片', [50, 100]],
    ['阿哲每個月存下的零用錢', '元', [10, 20, 50]],
    ['姐姐每個月讀完的書', '本', [1, 2]],
    ['社區超商每個月賣出的茶葉蛋', '顆', [50, 100]],
    ['學校每個月回收的寶特瓶', '公斤', [5, 10]],
    ['捷運站旁停車場每個月的腳踏車停車次數', '次', [100, 200]]
  ];
  var CT = 34, CB = CT + 200;
  function series(r) {
    var t = H.pick(r, TOP), step = H.pick(r, t[2]), m0 = H.ri(r, 1, 7), ks = [];
    while (ks.length < 6) { var k = H.ri(r, 1, 10); if (k !== ks[ks.length - 1]) ks.push(k); }
    return { name: t[0], u: t[1], step: step, xs: ks.map(function (_, i) { return (m0 + i) + '月'; }), vals: ks.map(function (k) { return k * step; }) };
  }
  function chart(s) {
    var n = s.xs.length, L = 70, PW = 56 * n, b = '';
    for (var k = 0; k <= 10; k++) { var y = CB - k * 20; b += '<line x1="' + L + '" y1="' + y + '" x2="' + (L + PW) + '" y2="' + y + '" stroke="#c9d6e3"/>' + H.txt(L - 8, y + 5, k * s.step, { fs: 13, a: 'end' }); }
    b += '<line x1="' + L + '" y1="' + (CT - 10) + '" x2="' + L + '" y2="' + CB + '" stroke="' + H.INK + '" stroke-width="2"/><line x1="' + L + '" y1="' + CB + '" x2="' + (L + PW + 10) + '" y2="' + CB + '" stroke="' + H.INK + '" stroke-width="2"/>';
    var pts = s.vals.map(function (v, i) { return [L + 28 + 56 * i, CB - v / s.step * 20]; });
    b += '<polyline points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '" fill="none" stroke="#d9480f" stroke-width="3"/>';
    pts.forEach(function (p, i) { b += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#d9480f"/>' + H.txt(p[0], CB + 22, s.xs[i], { fs: 14 }); });
    b += H.txt(6, 18, '（' + s.u + '）', { fs: 13, a: 'start' });
    return H.svg(L + PW + 20, CB + 34, b, s.name + '折線圖');
  }
  function span(s) { return s.xs[0] + '～' + s.xs[s.xs.length - 1]; }
  function lab(s, i) { return s.xs[i] + '到' + s.xs[i + 1]; }
  function diffs(s) { return s.vals.slice(1).map(function (v, i) { return v - s.vals[i]; }); }
  function lineQ(r, need) { for (var t = 0; t < 60; t++) { var s = series(r); if (need(s, diffs(s))) return s; } return null; }
  function steps(s) { return diffs(s).map(function (x, i) { return lab(s, i) + (x > 0 ? '增加 ' : '減少 ') + Math.abs(x); }).join('；'); }
  var head = function (s) { return '下圖是' + s.name + '（' + span(s) + '）。'; };
  var CARD = { name: '小樹的高度', u: '公分', step: 5, xs: ['1月', '2月', '3月', '4月', '5月', '6月'], vals: [10, 20, 40, 45, 35, 40] };

  MG.unit({
    id: 'g5b5', pending: '待課本核對',
    cards: [
      { t: '一萬個一萬是一億，一萬個一億是一兆。從右邊往左：個、十、百、千、萬、十萬、百萬、千萬、億、十億、百億、千億、兆。',
        ex: '3,060,000,000,000 從右邊每 4 位切一節：3｜0600｜0000｜0000 → 讀作 <b>三兆零六百億</b>。',
        why: '每 4 位換一個新名字（萬、億、兆），所以讀大數時從右邊每 4 位切一節，一節一節讀。' },
      { t: '讀大數：切節以後由左往右讀，中間有 0 讀一個「零」，每節後面的 0 不讀。',
        ex: '305,200,000 → 3｜0520｜0000 → <b>三億零五百二十萬</b>。<br>反過來寫：七億零三十萬 → 7｜0030｜0000 → <b>700,300,000</b>（空的位要補 0）。',
        why: '每一節都佔 4 個位子，讀的時候沒讀到的位一定是 0，所以寫回數字要把 0 補滿。' },
      { t: '每一位都是右邊那一位的 10 倍。',
        ex: '1 億＝10 個千萬＝100 個百萬＝10,000 個萬。<br>2,345,670,000＝<b>23 個億＋4,567 個萬</b>。',
        why: '十進位：滿 10 就往左進一位，所以往左一位就變 10 倍，往左兩位變 100 倍。' },
      { t: '取概數：四捨五入看「要取的那一位的右邊一位」，5 以上進 1，比 5 小捨去。',
        ex: '4,738,200,000 四捨五入到億位：看千萬位是 3，比 5 小 → 捨去 → 4,700,000,000，大約 <b>47 億</b>。<br>無條件進入到億位：後面不是全 0 → 進 1 → 48 億。',
        why: '概數是「大約多少」：看下一位離哪個整數比較近，5 以上就比較靠近上面那個。' },
      { t: '折線圖看「變化」：線往上是增加、往下是減少，線越陡變化越大。',
        ex: '小樹 2 月到 3 月從 20 公分長到 40 公分，增加 20 公分，線最陡，是長最多的一段；4 月到 5 月線往下，少了 10 公分。',
        why: '每一段線的高低差就是兩個月的差，所以不用算也能先看出哪段變化最大，再用減法算出差多少。', svg: chart(CARD) }
    ],
    gens: [
      // d1 某一位上的數字
      { k: 'digit', d: 1, n: 4, f: function (r) {
        var n = bigN(r, 10, 13, 0.15), len = String(n).length, p = H.ri(r, 4, len - 1), a = dAt(n, p), err = [];
        if (p + 1 < len) err.push([dAt(n, p + 1), '數錯一位了，從個位開始往左一位一位數。']);
        err.push([dAt(n, p - 1), '數錯一位了，從個位開始往左一位一位數。']);
        return H.Q('在 ' + C(n) + ' 裡，' + PL[p] + '位上的數字是幾？',
          '從右邊每 4 位切一節：' + cut4(n) + '。' + PL[p] + '位是從個位往左數第 ' + (p + 1) + ' 位，數字是 ' + a + '。',
          H.num(a, { err: err }), { n: n, p: PL[p] });
      } },
      // d1 國字寫成數字
      { k: 'write', d: 1, n: 4, f: function (r) {
        var n = bigN(r, 9, 13, 0.4), s = cn(n), gs = cut4(n).split('｜'), squeeze = +gs.map(function (x) { return String(+x || ''); }).join('');
        return H.Q('「' + s + '」寫成數字是多少？',
          '從右邊每 4 位一節（兆｜億｜萬｜個），沒讀到的位補 0：' + cut4(n) + ' → ' + C(n) + '。',
          H.num(n, { err: squeeze && squeeze !== n ? [[squeeze, '每一節都要湊滿 4 位，空的位要補 0。']] : [] }), { s: s });
      } },
      // d1 數字怎麼讀（選擇）
      { k: 'read', d: 1, n: 4, f: function (r) {
        var n = 0, s = '';
        for (var t = 0; t < 20 && !/零/.test(s); t++) { n = bigN(r, 9, 12, 0.4); s = cn(n); }
        var wrong = [s.replace(/零/g, ''), cn(n * 10), cn(Math.floor(n / 10)), s.replace(/([億萬])(?!零|$)/, '$1零')];
        return H.Q(C(n) + ' 怎麼讀？',
          '從右邊每 4 位切一節：' + cut4(n) + '，由左往右讀：<b>' + s + '</b>。中間的 0 讀一個「零」，每節後面的 0 不讀。',
          H.mc(s, wrong), { n: n });
      } },
      // d1 比大小（選擇）
      { k: 'cmp', d: 1, n: 3, f: function (r, _, i) {
        var base = String(bigN(r, 10, 12, 0.1)), ns = [];
        for (var t = 0; t < 40 && ns.length < 4; t++) {
          var ds = base.split(''), p = H.ri(r, 0, ds.length - 1), x = H.ri(r, p ? 0 : 1, 9);
          ds[p] = String(x); var v = +ds.join(''); if (ns.indexOf(v) < 0) ns.push(v);
        }
        if (ns.length < 4) return null;
        var big = i % 2 === 0, sorted = ns.slice().sort(function (a, b) { return big ? b - a : a - b; });
        return H.Q('下面哪一個數' + (big ? '最大' : '最小') + '？',
          '位數一樣，從最左邊一位一位比，第一個不一樣的位，數字' + (big ? '大' : '小') + '的就' + (big ? '大' : '小') + '。' + (big ? '最大' : '最小') + '的是 ' + C(sorted[0]) + '。',
          H.mc(sorted[0], sorted.slice(1), C), { ns: ns, big: big });
      } },
      // d1 折線圖讀某一點
      { k: 'lread', d: 1, n: 4, f: function (r) {
        var s = series(r), i = H.ri(r, 0, 5), v = s.vals[i], err = [];
        if (i) err.push([s.vals[i - 1], '看錯月份了，先在下面找到' + s.xs[i] + '，再往上找點。']);
        if (i < 5) err.push([s.vals[i + 1], '看錯月份了，先在下面找到' + s.xs[i] + '，再往上找點。']);
        return H.Q(head(s) + s.xs[i] + '是多少' + s.u + '？',
          '在下面找到' + s.xs[i] + '，往上找到那一點，再往左對刻度：' + v + ' ' + s.u + '。',
          H.num(v, { suf: s.u, err: err }), { xs: s.xs, step: s.step }, { svg: chart(s) });
      } },
      // d2 幾倍（十進位）
      { k: 'ten', d: 2, n: 3, f: function (r) {
        var q = H.ri(r, 0, 8), p = q + H.ri(r, 1, Math.min(8, 12 - q)), a = p10(p - q);
        return H.Q(PL[p] + '位上的 1 是' + PL[q] + '位上的 1 的幾倍？',
          '每往左一位就是 10 倍。' + PL[p] + '位在' + PL[q] + '位左邊 ' + (p - q) + ' 位，所以是 ' + (p - q) + ' 個 10 相乘：' + C(a) + ' 倍。',
          H.num(a, { suf: '倍', err: p - q > 1 ? [[p - q, '不是差幾位就幾倍，每差一位就要再乘 10。'], [10 * (p - q), '不是 10 乘位數，是差幾位就乘幾個 10。']] : [] }), { p: PL[p], q: PL[q] });
      } },
      // d2 幾個億、幾個萬、幾個一
      { k: 'parts', d: 2, n: 4, f: function (r, _, i) {
        var a = H.ri(r, 1, 999), b = r() < 0.25 ? H.ri(r, 1, 99) : H.ri(r, 100, 9999), c = r() < 0.5 ? 0 : H.ri(r, 1, 9999), n = a * 100000000 + b * 10000 + c;
        if (i % 2 === 0) {
          return H.Q(C(n) + ' 是幾個億、幾個萬和幾個一合起來的？',
            '從右邊每 4 位切一節：' + cut4(n) + '。億的那節是 ' + a + '、萬的那節是 ' + b + '、最後一節是 ' + c + '。',
            H.nums([a, b, c], ['個億', '個萬', '個一']), { n: n });
        }
        var glue = +(String(a) + String(b) + String(c || ''));
        return H.Q(a + ' 個億、' + b + ' 個萬和 ' + c + ' 個一合起來是多少？（寫成數字）',
          '萬和一那兩節都要佔滿 4 位，不夠的補 0：' + a + '｜' + String(b + 10000).slice(1) + '｜' + String(c + 10000).slice(1) + ' → ' + C(n) + '。',
          H.num(n, { err: glue !== n ? [[glue, '萬和一的那節要湊滿 4 位，不夠的前面補 0。']] : [] }), { a: a, b: b, c: c });
      } },
      // d2 取概數
      { k: 'round', d: 2, n: 5, f: function (r, _, i) {
        var p = H.ri(r, 4, 9), n = bigN(r, p + 2, p < 8 ? 9 : 12, 0.2);
        var how = i === 2 ? 1 : i === 4 ? 2 : 0, u = p10(p), a = rnd(n, u, how), uw = p >= 8 ? 100000000 : 10000, un = p >= 8 ? '億' : '萬', nx = dAt(n, p - 1);
        var why = how === 0 ? '看' + PL[p - 1] + '位是 ' + nx + '，' + (nx >= 5 ? '5 以上要進 1' : '比 5 小就捨去') + '：'
          : how === 1 ? PL[p] + '位右邊全部捨去變成 0：' : PL[p] + '位右邊只要不是全部 0，就往' + PL[p] + '位進 1：';
        var err = [0, 1, 2].filter(function (o) { return o !== how && rnd(n, u, o) !== a; }).map(function (o) { return [rnd(n, u, o) / uw, '這是用' + METH[o] + '算的，題目要用' + METH[how] + '。']; });
        return H.Q('把 ' + C(n) + ' 用' + METH[how] + '取概數到' + PL[p] + '位，大約是幾' + un + '？',
          why + C(n) + ' → ' + C(a) + '，就是 ' + C(a / uw) + ' ' + un + '。',
          H.num(a / uw, { suf: un, err: err }), { n: n, p: PL[p], how: how, un: un });
      } },
      // d2 折線圖：兩個月相差多少
      { k: 'ldiff', d: 2, n: 4, f: function (r, _, n) {
        var s = series(r), vs = s.vals, hi = Math.max.apply(null, vs), lo = Math.min.apply(null, vs);
        if (n % 2) {
          return H.Q(head(s) + '這段期間裡，最多的一個月比最少的一個月多多少' + s.u + '？',
            '最高的點是 ' + hi + '，最低的點是 ' + lo + '：' + hi + '－' + lo + '＝' + (hi - lo) + '（' + s.u + '）。',
            H.num(hi - lo, { suf: s.u, err: [[hi + lo, '相差要用減的，不是加。']] }), { xs: s.xs, step: s.step, mode: 'range' }, { svg: chart(s) });
        }
        var i = H.ri(r, 0, 5), j = H.ri(r, 0, 5);
        if (i === j || vs[i] === vs[j]) return null;
        var big = Math.max(vs[i], vs[j]), sm = Math.min(vs[i], vs[j]);
        return H.Q(head(s) + s.xs[i] + '和' + s.xs[j] + '相差多少' + s.u + '？',
          s.xs[i] + '是 ' + vs[i] + '，' + s.xs[j] + '是 ' + vs[j] + '，大減小：' + big + '－' + sm + '＝' + (big - sm) + '（' + s.u + '）。',
          H.num(big - sm, { suf: s.u, err: [[big + sm, '相差要用減的，不是加。']] }), { xs: s.xs, step: s.step, i: i, j: j }, { svg: chart(s) });
      } },
      // d2 折線圖：哪一段增加最多（選擇）
      { k: 'lup', d: 2, n: 4, f: function (r) {
        var s = lineQ(r, function (s, d) { var m = Math.max.apply(null, d); return m > 0 && d.filter(function (x) { return x === m; }).length === 1; });
        if (!s) return null;
        var d = diffs(s), bi = d.indexOf(Math.max.apply(null, d)), labs = d.map(function (_, i) { return lab(s, i); });
        return H.Q(head(s) + '哪兩個月之間增加最多？',
          '一段一段算：' + steps(s) + '。增加最多的是' + labs[bi] + '，那段線往上最陡。',
          H.mc(labs[bi], labs.filter(function (_, i) { return i !== bi; })), { xs: s.xs, step: s.step }, { svg: chart(s) });
      } },
      // d3 取概數：哪些數會變成 X 億（列舉）
      { k: 'rset', d: 3, n: 3, f: function (r) {
        var X = H.ri(r, 3, 99), ks = [], g = H.ri(r, 2, 3);
        while (ks.length < g) { var k = H.pick(r, [-5000, H.ri(r, -4999, -1), H.ri(r, 1, 4999)]); if (ks.indexOf(k) < 0) ks.push(k); }
        while (ks.length < 5) { var o = H.pick(r, [5000, H.ri(r, 5001, 9999), H.ri(r, -9999, -5001), -5001]); if (ks.indexOf(o) < 0) ks.push(o); }
        var cand = H.shuffle(ks, r).map(function (k) { return X * 100000000 + k * 10000; });
        return H.Q('下面哪些數用四捨五入法取概數到億位，會是 ' + X + ' 億？<b>全部選出來。</b>',
          '看千萬位：5 以上進 1、比 5 小捨去。' + cand.map(function (n) { return C(n) + ' → ' + rnd(n, 100000000, 0) / 100000000 + ' 億'; }).join('；') + '。',
          H.set(cand, function (n) { return rnd(n, 100000000, 0) === X * 100000000; }, C), { cand: cand, X: X });
      } },
      // d3 折線圖：哪些時段減少（列舉）
      { k: 'ltrend', d: 3, n: 3, f: function (r) {
        var s = lineQ(r, function (s, d) { var dn = d.filter(function (x) { return x < 0; }).length; return dn >= 2 && dn <= 4; });
        if (!s) return null;
        var d = diffs(s), labs = d.map(function (_, i) { return lab(s, i); });
        return H.Q(head(s) + '哪些時段是減少的？<b>全部選出來。</b>',
          '線往下的那幾段就是減少：' + steps(s) + '。',
          H.set(labs, function (x) { return d[labs.indexOf(x)] < 0; }), { xs: s.xs, step: s.step }, { svg: chart(s) });
      } },
      // d3 折線圖：變化最大的一段
      { k: 'lbig', d: 3, n: 3, f: function (r) {
        var s = lineQ(r, function (s, d) { var a = d.map(Math.abs), m = Math.max.apply(null, a); return a.filter(function (x) { return x === m; }).length === 1; });
        if (!s) return null;
        var d = diffs(s), m = Math.max.apply(null, d.map(Math.abs)), up = Math.max.apply(null, d), dn = -Math.min.apply(null, d), down = d.indexOf(-m) >= 0;
        return H.Q(head(s) + '哪一段的變化最大（增加或減少都算）？那一段變化了多少' + s.u + '？',
          '一段一段算：' + steps(s) + '。變化最大的是' + (down ? '減少 ' : '增加 ') + m + ' 的那段，線' + (down ? '往下' : '往上') + '最陡。',
          H.num(m, { suf: s.u, err: down ? (up > 0 ? [[up, '只看了增加的；減少的那段也要比。']] : []) : (dn > 0 ? [[dn, '只看了減少的；增加的那段也要比。']] : []) }), { xs: s.xs, step: s.step }, { svg: chart(s) });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
