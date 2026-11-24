/* 五上 單元七 線對稱圖形（2026-11-24，待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5a7.js（另一種算法：把頂點座標對摺找對稱點）。
   圖：八邊形以甲線（虛線）為對稱軸，M、N＝甲線和上下（或左右）兩條邊的交點（中點）；箏形以一條對角線為對稱軸。數字隨機，圖不照比例。
   八邊形頂點 0～7 照圖繞一圈（0＝左上），頂點 i 的對稱點＝7－i；邊 j＝頂點 j 到 j+1，邊 3、邊 7 被甲線平分，其他邊 j 的對稱邊＝(14－j)%8。字母可以整圈轉（s），圖可以橫放（h）。
   fixed＝第 13 回紙本上錯的兩題原題（id g5a7-pp1、g5a7-pp2，不進練習題庫；math/paper.js MG_ROWS 補進錯題庫）。 */
(function (MG) {
  'use strict';
  var H = MG.H, INK = H.INK, RED = '#d6336c', BLUE = '#1864ab', PUR = '#5f3dc4';
  var PV = [[-40, -90], [-100, -40], [-100, 35], [-50, 90], [50, 90], [100, 35], [100, -40], [40, -90]];
  var ABC = 'ABCDEFGH';
  function Lof(s) { return function (i) { return ABC.charAt((((i + s) % 8) + 8) % 8); }; }   // 第 i 個頂點的字母
  function en(L, j) { var a = L(j), b = L(j + 1); return a < b ? a + b : b + a; }   // 邊 j 的名字（字母照 ABC 順序）
  function mir(j) { return (14 - j) % 8; }   // 邊 j 的對稱邊
  // 錯答提示：去掉跟正解一樣、不是整數、重複的
  function E(ans, list) { var seen = {}; return list.filter(function (e) { var x = e[0]; if (typeof x !== 'number' || Math.floor(x) !== x || x <= 0 || x === ans || seen[x]) return false; seen[x] = 1; return true; }); }
  function tx(p, s, o) { o = o || {}; return '<text x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" font-size="' + (o.fs || 16) + '" text-anchor="middle" dominant-baseline="central" font-weight="700" fill="' + (o.c || INK) + '"' + (o.halo ? ' stroke="#fff" stroke-width="4" paint-order="stroke"' : '') + '>' + s + '</text>'; }
  function line(a, b, st) { return '<line x1="' + a[0].toFixed(1) + '" y1="' + a[1].toFixed(1) + '" x2="' + b[0].toFixed(1) + '" y2="' + b[1].toFixed(1) + '" ' + st + '/>'; }
  var out = function (p, k) { var n = Math.sqrt(p[0] * p[0] + p[1] * p[1]) || 1; return [p[0] * (1 + k / n), p[1] * (1 + k / n)]; };
  var mid = function (a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; };

  // 八邊形：o＝{s:字母轉幾格, h:橫放, hl:要畫粗的邊, e:[[點, 點, 字]]（點 8＝M、9＝N）, g:{頂點: 字}}
  function oct(o) {
    o = o || {};
    var L = Lof(o.s || 0), P = PV.map(function (p) { return o.h ? [p[1], p[0]] : p; });
    P.push(mid(P[7], P[0]), mid(P[3], P[4]));
    var C = function (p) { return [150 + p[0], 140 + p[1]]; };
    var b = '<polygon points="' + P.slice(0, 8).map(function (p) { var q = C(p); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ') + '" fill="#eaf5ff" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>';
    if (o.hl != null) b += line(C(P[o.hl]), C(P[(o.hl + 1) % 8]), 'stroke="#f08c00" stroke-width="7" stroke-linecap="round"');
    var M = P[8], N = P[9], dl = Math.sqrt(Math.pow(N[0] - M[0], 2) + Math.pow(N[1] - M[1], 2)), u = [(N[0] - M[0]) / dl, (N[1] - M[1]) / dl], pp = [-u[1], u[0]];
    b += line(C([M[0] - u[0] * 24, M[1] - u[1] * 24]), C([N[0] + u[0] * 24, N[1] + u[1] * 24]), 'stroke="' + RED + '" stroke-width="2.5" stroke-dasharray="8 6"');
    b += tx(C([N[0] + u[0] * 37, N[1] + u[1] * 37]), '甲', { c: RED });
    [[M, 'M'], [N, 'N']].forEach(function (x, k) { var q = C(x[0]); b += '<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="3.5" fill="' + RED + '"/>' + tx(C([x[0][0] + u[0] * (k ? -15 : 15) + pp[0] * 13, x[0][1] + u[1] * (k ? -15 : 15) + pp[1] * 13]), x[1], { fs: 14, c: RED }); });
    for (var i = 0; i < 8; i++) b += tx(C(out(P[i], 17)), L(i));
    (o.e || []).forEach(function (x) { b += tx(C(out(mid(P[x[0]], P[x[1]]), 15)), x[2], { c: x[2] === '?' ? RED : BLUE, halo: 1 }); });
    Object.keys(o.g || {}).forEach(function (i) { b += tx(C(out(P[+i], -27)), o.g[i], { fs: 13, c: o.g[i] === '?' ? RED : PUR }); });
    return H.svg(300, 280, b, '以甲線為對稱軸的八邊形');
  }
  // 箏形（對稱軸直放）：a＝上面的角、c＝下面的角（都在對稱軸上），照角度畫；Lt＝[上, 左, 下, 右] 的字母；g＝[上, 左, 下, 右] 要標的字
  function kite(a, c, Lt, g) {
    var w = 70, rad = Math.PI / 360, yt = -w / Math.tan(a * rad), yb = w / Math.tan(c * rad), k = Math.min(1, 200 / (yb - yt));
    var P = [[0, yt * k], [-w * k, 0], [0, yb * k], [w * k, 0]], W = Math.ceil(2 * w * k + 110), Ht = Math.ceil((yb - yt) * k + 90);
    var C = function (p) { return [W / 2 + p[0], 45 - yt * k + p[1]]; };
    var b = '<polygon points="' + P.map(function (p) { var q = C(p); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ') + '" fill="#fff4e6" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>';
    b += line(C([0, P[0][1] - 22]), C([0, P[2][1] + 22]), 'stroke="' + RED + '" stroke-width="2.5" stroke-dasharray="8 6"');
    var LO = [[0, -17], [-17, 0], [0, 17], [17, 0]], GI = [[0, 24], [26, 0], [0, -22], [-26, 0]];
    P.forEach(function (p, i) { b += tx(C([p[0] + LO[i][0] + (i % 2 ? 0 : 14), p[1] + LO[i][1]]), Lt[i]); if (g && g[i]) b += tx(C([p[0] + GI[i][0], p[1] + GI[i][1]]), g[i], { fs: 13, c: g[i] === '?' ? RED : PUR, halo: 1 }); });
    return H.svg(W, Ht, b, '箏形');
  }

  // ---- 題目（gens 和 fixed 共用） ----
  // 甲線通過邊的中點：o＝{h, s, top:上面那條（否則下面）, end:問哪一半, n:已知整條（求一半）| m:已知一半（求整條）}
  function midQ(o) {
    var L = Lof(o.s), j = o.top ? 7 : 3, P = o.top ? 'M' : 'N', vi = o.top ? (o.end ? 7 : 0) : (o.end ? 4 : 3), oi = 7 - vi;
    var e = en(L, j), hn = L(vi) + P, on = L(oi) + P, head = '下圖以甲線為對稱軸，甲線通過 ' + e + ' 的中點 ' + P + '。';
    if (o.n) return H.Q(head + e + '＝' + o.n + ' 公分，' + hn + ' 是幾公分？',
      '沿著甲線對摺，' + hn + ' 會疊到 ' + on + '，所以 <b>' + hn + ' 和 ' + on + ' 一樣長</b>，各是 ' + e + ' 的一半。<br>' + hn + '＝' + o.n + '÷2＝' + o.n / 2 + '（公分）',
      H.num(o.n / 2, { suf: '公分', err: E(o.n / 2, [[o.n, '這是整條 ' + e + ' 的長，' + P + ' 是中點，要除以 2。'], [o.n * 2, '要的是一半，不是兩倍喔。']]) }),
      { whole: o.n }, { svg: oct({ h: o.h, s: o.s, e: [[j, (j + 1) % 8, String(o.n)]] }) });
    return H.Q(head + hn + '＝' + o.m + ' 公分，' + e + ' 是幾公分？',
      '沿著甲線對摺，' + hn + ' 會疊到 ' + on + '，所以 <b>' + hn + ' 和 ' + on + ' 一樣長</b>。<br>' + e + '＝' + hn + '＋' + on + '＝' + o.m + '×2＝' + o.m * 2 + '（公分）',
      H.num(o.m * 2, { suf: '公分', err: E(o.m * 2, [[o.m, '這只是 ' + hn + '，' + e + ' 還要加上一樣長的 ' + on + '。']]) }),
      { half: o.m }, { svg: oct({ h: o.h, s: o.s, e: [[vi, o.top ? 8 : 9, String(o.m)]] }) });
  }
  // 已知周長和幾條邊，求一條邊：o＝{h, s, P:周長, giv:[[邊, 長, 寫法?]]（上下那兩條＋其他對稱邊各給一邊）, ask:要問的邊}
  function periQ(o) {
    var L = Lof(o.s), nm = function (g) { return g[2] || en(L, g[0]); }, self = function (j) { return j === 3 || j === 7; };
    var side = o.giv.filter(function (g) { return !self(g[0]); }), terms = [], K1 = 0;
    o.giv.forEach(function (g) { K1 += g[1]; terms.push(g[1]); if (!self(g[0])) terms.push(g[1]); });
    var K = terms.reduce(function (s, x) { return s + x; }, 0), D = o.P - K, an = en(L, o.ask), mn = en(L, mir(o.ask));
    return H.Q('下圖以甲線為對稱軸，周長是 ' + o.P + ' 公分，' + o.giv.map(function (g) { return nm(g) + '＝' + g[1] + ' 公分'; }).join('、') + '，' + an + ' 是幾公分？',
      '先找一樣長的邊（對稱邊）：<b>' + side.map(function (g) { return nm(g) + '＝' + en(L, mir(g[0])) + '＝' + g[1]; }).join('、') + '</b>；<b>' + an + '＝' + mn + '</b>，兩條都還不知道。<br>' +
      '周長＝八條邊加起來，先把知道的加起來：' + terms.join('＋') + '＝' + K + '（公分）<br>' +
      '剩下 ' + an + '＋' + mn + '＝' + o.P + '－' + K + '＝' + D + '（公分）<br>兩條一樣長：' + an + '＝' + D + '÷2＝' + D / 2 + '（公分）',
      H.num(D / 2, { suf: '公分', err: E(D / 2, [[D, an + '＋' + mn + ' 才是 ' + D + '，兩條一樣長，要再除以 2。'], [o.P - K1, '別忘了對稱邊也一樣長：' + side.map(function (g) { return en(L, mir(g[0])); }).join('、') + ' 沒寫出來，也要算進周長。'], [(o.P - K1) / 2, '別忘了對稱邊也一樣長：' + side.map(function (g) { return en(L, mir(g[0])); }).join('、') + ' 沒寫出來，也要算進周長。']]) }),
      { h: !!o.h, s: o.s, P: o.P, giv: o.giv.map(function (g) { return [nm(g), g[1]]; }), ask: an },
      { svg: oct({ h: o.h, s: o.s, e: o.giv.map(function (g) { return [g[0], (g[0] + 1) % 8, String(g[1])]; }).concat([[o.ask, (o.ask + 1) % 8, '?']]) }) });
  }
  // 箏形兩個軸上的角：a、c 是 10 的倍數、不一樣大、合起來 120～200（圖才畫得開）
  function kiteAC(r) { for (var t = 0; t < 40; t++) { var a = 10 * H.ri(r, 6, 13), c = 10 * H.ri(r, 6, 13); if (a !== c && a + c >= 120 && a + c <= 200) return [a, c]; } return null; }
  var deg = function (x) { return x + '°'; };

  MG.unit({
    id: 'g5a7', pending: '待課本核對',
    cards: [
      { t: '線對稱圖形：沿著一條直線對摺，兩邊會完全疊在一起；這條直線叫做「對稱軸」。',
        ex: '下圖的八邊形沿著甲線對摺，左右兩邊完全疊在一起，所以它是線對稱圖形，甲線是對稱軸。<br>對摺後疊在一起的點、邊、角，叫做<b>對稱點、對稱邊、對稱角</b>：A 和 H、B 和 G 是對稱點；AB 和 GH 是對稱邊。',
        why: '對摺會完全疊在一起，所以疊在一起的東西一定一樣：對稱邊一樣長、對稱角一樣大。', svg: oct({ s: 0, hl: 0 }) },
      { t: '對稱邊一樣長、對稱角一樣大。',
        ex: '甲線是對稱軸：AB＝GH、BC＝FG、CD＝EF；∠B＝∠G、∠C＝∠F。<br>BC＝5 公分 → FG 也是 <b>5 公分</b>；∠B＝130° → ∠G 也是 <b>130°</b>。',
        why: '先想「對摺後疊到哪裡」：B 疊到 G、C 疊到 F，所以邊 BC 疊到邊 FG，∠B 疊到 ∠G。',
        svg: oct({ s: 0, e: [[1, 2, '5'], [5, 6, '5']], g: { 1: '130°', 6: '130°' } }) },
      { t: '對稱軸穿過一條邊時，會從那條邊的正中間（中點）切開。',
        ex: '甲線通過 AH 的中點 M：AM＝HM。<br>AH＝10 公分 → AM＝10÷2＝<b>5 公分</b>。',
        why: 'A 疊到 H，M 在對稱軸上不會動，所以 AM 疊到 HM，兩段一樣長，各是一半。', svg: oct({ s: 0, e: [[7, 0, '10']] }) },
      { t: '求周長或不知道的邊：先寫出「哪兩條邊一樣長」，再列式。',
        ex: '周長 50 公分，AH＝10、DE＝6、GF＝5、EF＝4，AB＝？<br>① 一樣長的邊：BC＝GF＝5、CD＝EF＝4、AB＝GH。<br>② 知道的加起來：10＋6＋5＋5＋4＋4＝34。<br>③ AB＋GH＝50－34＝16，AB＝16÷2＝<b>8 公分</b>。<br>只知道一半的邊：一半的周長×2＝周長。',
        why: '周長是八條邊全部加起來；對稱邊雖然沒寫出來，也一樣長，要記得算進去。',
        svg: oct({ s: 0, e: [[7, 0, '10'], [3, 4, '6'], [5, 6, '5'], [4, 5, '4'], [0, 1, '?']] }) },
      { t: '箏形有一條對稱軸；不在對稱軸上的兩個角一樣大。',
        ex: '箏形 ABCD，AC 是對稱軸，∠A＝70°、∠C＝110°：<br>∠B＝∠D＝(360－70－110)÷2＝180÷2＝<b>90°</b>。',
        why: '四邊形四個角加起來是 360°；扣掉對稱軸上的兩個角，剩下的平分給兩個一樣大的角。',
        svg: kite(70, 110, ['A', 'B', 'C', 'D'], ['70°', '?', '110°', '?']) }
    ],
    gens: [
      // d1 ① 甲線通過邊的中點：整條求一半（也有一半求整條）
      { k: 'mid', d: 1, n: 6, f: function (r, _, i) {
        var o = { s: H.ri(r, 0, 7), h: r() < 0.5, top: i % 2 === 0, end: r() < 0.5 };
        if (i % 3 === 2) o.m = H.ri(r, 2, 9); else o.n = 2 * H.ri(r, 2, 9);
        return midQ(o); } },
      // d1 ④ 對稱邊是哪一條（也有對稱點）
      { k: 'pair', d: 1, n: 8, f: function (r, _, i) {
        var s = H.ri(r, 0, 7), h = r() < 0.5, L = Lof(s);
        if (i % 2 === 0) {
          var j = H.pick(r, [0, 1, 2, 4, 5, 6]), m = mir(j), ans = en(L, m);
          return H.Q('下圖以甲線為對稱軸，邊 ' + en(L, j) + ' 的對稱邊是哪一條？',
            '沿著甲線對摺，點 ' + L(j) + ' 疊到點 ' + L(7 - j) + '、點 ' + L(j + 1) + ' 疊到點 ' + L(6 - j) + '，所以邊 ' + en(L, j) + ' 疊到邊 ' + ans + '：<b>' + en(L, j) + ' 和 ' + ans + ' 是對稱邊，一樣長</b>。',
            H.mc(ans, H.shuffle([0, 1, 2, 3, 4, 5, 6, 7].filter(function (x) { return x !== j && x !== m; }).map(function (x) { return en(L, x); }), r)), { h: h, s: s, e: j }, { svg: oct({ h: h, s: s, hl: j }) });
        }
        var p = H.ri(r, 0, 7), a = L(7 - p);
        return H.Q('下圖以甲線為對稱軸，點 ' + L(p) + ' 的對稱點是哪一個？',
          '沿著甲線對摺，點 ' + L(p) + ' 會疊到點 ' + a + '：<b>' + L(p) + ' 和 ' + a + ' 是對稱點</b>，到甲線一樣遠。',
          H.mc(a, H.shuffle(ABC.split('').filter(function (x) { return x !== a && x !== L(p); }), r)), { h: h, s: s, p: p }, { svg: oct({ h: h, s: s }) }); } },
      // d1 ⑤ 對稱角的度數
      { k: 'ang', d: 1, n: 5, f: function (r) {
        var s = H.ri(r, 0, 7), h = r() < 0.5, L = Lof(s), i = H.ri(r, 0, 7), m = 7 - i, x = 5 * H.ri(r, 20, 32), g = {}; g[i] = deg(x); g[m] = '?';
        return H.Q('下圖以甲線為對稱軸，∠' + L(i) + '＝' + x + '°，∠' + L(m) + ' 是幾度？',
          '沿著甲線對摺，點 ' + L(i) + ' 疊到點 ' + L(m) + '，∠' + L(i) + ' 和 ∠' + L(m) + ' 完全疊在一起：<b>對稱角一樣大</b>。<br>∠' + L(m) + '＝∠' + L(i) + '＝' + x + '°',
          H.num(x, { suf: '度', err: E(x, [[180 - x, '對稱角一樣大，不用拿 180 去減。']]) }), { h: h, s: s, i: i, x: x }, { svg: oct({ h: h, s: s, g: g }) }); } },
      // d2 ⑤ 對稱角（選哪一句對）
      { k: 'angmc', d: 2, n: 5, f: function (r) {
        var s = H.ri(r, 0, 7), h = r() < 0.5, L = Lof(s), i = H.ri(r, 0, 7), m = 7 - i, x = 5 * H.ri(r, 20, 32), g = {}; g[i] = deg(x);
        var say = function (v, y) { return '∠' + L(v) + '＝' + y + '°'; };
        return H.Q('下圖以甲線為對稱軸，∠' + L(i) + '＝' + x + '°。下面哪一句是對的？',
          '沿著甲線對摺，點 ' + L(i) + ' 疊到點 ' + L(m) + '，所以 <b>∠' + L(m) + ' 和 ∠' + L(i) + ' 一樣大</b>，也是 ' + x + '°。旁邊的角不一定一樣大。',
          H.mc(say(m, x), H.shuffle([say(i + 1, x), say(i - 1, x), say(m, 180 - x), say(m + 1, x), say(m - 1, x)], r)), { h: h, s: s, i: i, x: x }, { svg: oct({ h: h, s: s, g: g }) }); } },
      // d2 ③ 已知一半的邊，求周長
      { k: 'half', d: 2, n: 6, f: function (r, _, i) {
        var s = H.ri(r, 0, 7), h = r() < 0.5, L = Lof(s), vs = i % 2 === 0 ? [0, 1, 2, 3] : [7, 6, 5, 4];
        var nm = function (a, b) { return a > 7 ? L(b) + 'M' : b > 7 ? L(a) + 'N' : en(L, Math.min(a, b)); };
        var segs = [[8, vs[0]], [vs[0], vs[1]], [vs[1], vs[2]], [vs[2], vs[3]], [vs[3], 9]], lens = segs.map(function (x, k) { return k === 0 || k === 4 ? H.ri(r, 2, 7) : H.ri(r, 3, 9); });
        var names = segs.map(function (x) { return nm(x[0], x[1]); }), others = segs.map(function (x) { return nm(x[0] > 7 ? 8 : 7 - x[0], x[1] > 7 ? 9 : 7 - x[1]); });
        var S = lens.reduce(function (a, b) { return a + b; }, 0);
        return H.Q('下圖以甲線為對稱軸，' + names.map(function (n, k) { return n + '＝' + lens[k] + ' 公分'; }).join('、') + '。這個八邊形的周長是幾公分？',
          '甲線把八邊形分成完全一樣的兩半：另一半的 ' + others.join('、') + ' 和這一半的 ' + names.join('、') + ' <b>一樣長</b>。<br>一半的周長＝' + lens.join('＋') + '＝' + S + '（公分）<br>周長＝' + S + '×2＝' + S * 2 + '（公分）',
          H.num(S * 2, { suf: '公分', err: E(S * 2, [[S, '這只是一半的周長，另一半一樣長，要再乘 2。']]) }), { h: h, s: s, segs: names.map(function (n, k) { return [n, lens[k]]; }) },
          { svg: oct({ h: h, s: s, e: segs.map(function (x, k) { return [x[0], x[1], String(lens[k])]; }) }) }); } },
      // d2 ⑥ 箏形：已知對稱軸上的兩個角，求另外兩個（一樣大）的角＝(360－a－b)÷2
      { k: 'kite', d: 2, n: 6, f: function (r, _, i) {
        var ac = kiteAC(r); if (!ac) return null;
        var a = ac[0], c = ac[1], x = 180 - (a + c) / 2, Lt = i % 2 ? ['B', 'C', 'D', 'A'] : ['A', 'B', 'C', 'D'], sd = i % 3 === 2 ? 3 : 1, g = [deg(a), '', deg(c), '']; g[sd] = '?';
        return H.Q('下圖是一個箏形，直線 ' + Lt[0] + Lt[2] + ' 是它的對稱軸。∠' + Lt[0] + '＝' + a + '°、∠' + Lt[2] + '＝' + c + '°，∠' + Lt[sd] + ' 是幾度？',
          '沿著對稱軸 ' + Lt[0] + Lt[2] + ' 對摺，點 ' + Lt[1] + ' 會疊到點 ' + Lt[3] + '，所以 <b>∠' + Lt[1] + '＝∠' + Lt[3] + '</b>（兩個角一樣大）。<br>四邊形的四個角合起來是 360°：∠' + Lt[1] + '＋∠' + Lt[3] + '＝360－' + a + '－' + c + '＝' + (360 - a - c) + '（度）<br>' +
          '∠' + Lt[sd] + '＝' + (360 - a - c) + '÷2＝' + x + '（度）<br>一次列式：(360－' + a + '－' + c + ')÷2＝' + x,
          H.num(x, { suf: '度', err: E(x, [[360 - a - c, '這是 ∠' + Lt[1] + '＋∠' + Lt[3] + ' 兩個角合起來，要再除以 2。']]) }), { a: a, c: c },
          { svg: kite(a, c, Lt, g) }); } },
      // d3 ② 已知周長和幾條邊，求一條邊（列對稱邊相等再回推）
      { k: 'peri', d: 3, n: 6, f: function (r, _, i) {
        var t = 2 * H.ri(r, 2, 6), bo = 2 * H.ri(r, 2, 6), len = [H.ri(r, 2, 9), H.ri(r, 2, 9), H.ri(r, 2, 9)], u = i % 3, giv = [[7, t], [3, bo]];
        for (var k = 0; k < 3; k++) if (k !== u) giv.push([r() < 0.5 ? k : mir(k), len[k]]);
        return periQ({ h: r() < 0.5, s: H.ri(r, 0, 7), P: t + bo + 2 * (len[0] + len[1] + len[2]), giv: giv, ask: r() < 0.5 ? u : mir(u) }); } },
      // d3 ⑥ 箏形：已知對稱軸上一個角和旁邊一個角，求對稱軸上另一個角（選擇）
      { k: 'kite2', d: 3, n: 4, f: function (r, _, i) {
        var ac = kiteAC(r); if (!ac) return null;
        var a = ac[0], c = ac[1], x = 180 - (a + c) / 2, Lt = i % 2 ? ['B', 'C', 'D', 'A'] : ['A', 'B', 'C', 'D'];
        return H.Q('下圖是一個箏形，直線 ' + Lt[0] + Lt[2] + ' 是它的對稱軸。∠' + Lt[0] + '＝' + a + '°、∠' + Lt[1] + '＝' + x + '°，∠' + Lt[2] + ' 是幾度？',
          '沿著對稱軸對摺，點 ' + Lt[1] + ' 會疊到點 ' + Lt[3] + '，兩個角一樣大：<b>∠' + Lt[3] + '＝∠' + Lt[1] + '＝' + x + '°</b>。<br>四個角合起來是 360°：∠' + Lt[2] + '＝360－' + a + '－' + x + '－' + x + '＝' + c + '（度）',
          H.mc(c, [360 - a - x, x, a, 180 - x], deg), { a: a, x: x }, { svg: kite(a, c, Lt, [deg(a), deg(x), '?', '']) }); } }
    ],
    // 第 13 回紙本（線對稱圖形）八邊形 ABCDEFGH、甲線＝MN（直放，A、H 在上）：錯的兩題原題
    fixed: [
      Object.assign(midQ({ s: 0, h: false, top: true, end: 0, n: 8 }), { k: 'pp1', src: '第 13 回紙本' }),
      Object.assign(periQ({ s: 0, h: false, P: 40, giv: [[7, 8, 'AH'], [5, 4, 'GF'], [4, 4, 'EF'], [3, 8, 'DE']], ask: 0 }), { k: 'pp2', d: 3, src: '第 13 回紙本' })
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
