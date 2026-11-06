/* 六上 單元九 放大圖、縮圖與比例尺（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a9.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma, INK = H.INK;
  var D = function (x) { return H.fmt(x, 'dec'); };
  var E = function (ans, list) { return list.filter(function (e) { return !H.eq(e[0], ans); }); };
  // 方格紙上的長方形：rects＝[[x格, y格, 寬, 高, 顏色]…]，cols×rows 格
  function grid(cols, rows, rects, label) {
    var S = 20, x0 = 10, y0 = 10, b = '';
    rects.forEach(function (q) { b += '<rect x="' + (x0 + q[0] * S) + '" y="' + (y0 + q[1] * S) + '" width="' + q[2] * S + '" height="' + q[3] * S + '" fill="' + (q[4] || '#ffd8a8') + '" stroke="' + INK + '" stroke-width="2.5"/>'; });
    for (var i = 0; i <= cols; i++) b += '<line x1="' + (x0 + i * S) + '" y1="' + y0 + '" x2="' + (x0 + i * S) + '" y2="' + (y0 + rows * S) + '" stroke="#9aa9b8" stroke-width="0.8"/>';
    for (var j = 0; j <= rows; j++) b += '<line x1="' + x0 + '" y1="' + (y0 + j * S) + '" x2="' + (x0 + cols * S) + '" y2="' + (y0 + j * S) + '" stroke="#9aa9b8" stroke-width="0.8"/>';
    return H.svg(cols * S + 20, rows * S + 20, b, label);
  }
  // 原圖三角形和 2 倍放大圖
  function tri() {
    var t = function (x, y, k, f) { return '<polygon points="' + x + ',' + y + ' ' + (x + 60 * k) + ',' + y + ' ' + x + ',' + (y - 40 * k) + '" fill="' + f + '" stroke="' + INK + '" stroke-width="2"/>'; };
    return H.svg(330, 130, t(20, 110, 1, '#d6ecff') + t(130, 110, 2, '#ffd8a8') +
      H.txt(50, 126, '3 cm', { fs: 13 }) + H.txt(14, 92, '2 cm', { fs: 13, a: 'end' }) + H.txt(190, 126, '6 cm', { fs: 13 }) + H.txt(124, 72, '4 cm', { fs: 13, a: 'end' }) +
      H.txt(60, 20, '原圖', { fs: 14 }) + H.txt(260, 20, '2 倍放大圖', { fs: 14 }), '原圖和 2 倍放大圖');
  }
  // 數線比例尺：每段 1 公分代表 u（unit）
  function ruler(u, unit) {
    var S = 60, x0 = 20, y = 40, b = '';
    for (var i = 0; i < 4; i++) b += '<rect x="' + (x0 + i * S) + '" y="' + y + '" width="' + S + '" height="10" fill="' + (i % 2 ? '#fff' : INK) + '" stroke="' + INK + '" stroke-width="1.5"/>';
    for (var j = 0; j <= 4; j++) b += H.txt(x0 + j * S, y - 8, String(u * j), { fs: 14 });
    b += H.txt(x0 + 4 * S + 12, y + 10, unit, { fs: 14, a: 'start' }) + H.txt(x0 + S / 2, y + 30, '← 1 公分 →', { fs: 12 });
    return H.svg(x0 + 4 * S + 70, 82, b, '數線比例尺');
  }
  var NS = [100, 200, 500, 1000, 2000, 5000];
  var SHAPE = ['三角形', '平行四邊形', '梯形', '五邊形'];

  MG.unit({
    id: 'g6a9', pending: '待課本核對',
    cards: [
      { t: '放大圖、縮圖：形狀一樣，所有對應邊都變成同樣的倍數，對應角的度數不變。',
        ex: '直角三角形兩邊 3 公分、2 公分，畫成 2 倍放大圖 → 6 公分、4 公分；直角還是 90 度。',
        why: '只要有一條邊放大的倍數不一樣，形狀就會變「胖」或「瘦」，就不是放大圖了。', svg: tri() },
      { t: '放大（縮小）幾倍＝新圖的邊÷原圖的對應邊。',
        ex: '原圖邊長 4 公分，新圖對應邊 10 公分：10÷4＝<b>2.5 倍</b>。<br>原圖 6 公分，新圖 2 公分：2÷6＝[[1/3]]，是 <b>[[1/3]] 的縮圖</b>。',
        why: '放大圖的倍數大於 1；縮圖的倍數小於 1，常寫成分數。' },
      { t: '邊長變成 k 倍，面積變成 k×k 倍。',
        ex: '長 2 格、寬 1 格的長方形（面積 2 格），畫成 2 倍放大圖 → 長 4 格、寬 2 格，面積 8 格＝原來的 <b>4 倍</b>。',
        why: '長變 2 倍、寬也變 2 倍，面積＝長×寬就變成 2×2＝4 倍，不是 2 倍。',
        svg: grid(12, 4, [[1, 1, 2, 1, '#d6ecff'], [5, 1, 4, 2]], '2 倍放大圖面積變 4 倍') },
      { t: '比例尺 1：1000 表示圖上 1 公分＝實際 1000 公分＝10 公尺。',
        ex: '比例尺 1：1000 的地圖上量到 6 公分：6×1000＝6000 公分＝<b>60 公尺</b>。',
        why: '比例尺的兩邊單位一樣（都是公分），算完再換成公尺或公里：100 公分＝1 公尺，100,000 公分＝1 公里。' },
      { t: '數線比例尺：看「1 公分代表多遠」，量幾公分就乘幾。',
        ex: '圖上每 1 公分代表 2 公里，兩地相距 3.5 公分：3.5×2＝<b>7 公里</b>。<br>寫成 1：□：2 公里＝200,000 公分 → 1：200,000。',
        why: '數線比例尺不怕地圖被放大縮小：圖變大，尺也跟著變大。', svg: ruler(2, '公里') }
    ],
    gens: [
      // d1 放大、縮小後的長和寬
      { k: 'side', d: 1, n: 5, f: function (r, _, i) {
        var k = H.ri(r, 2, 4);
        if (i % 2 === 0) { var a = H.ri(r, 2, 9), b = H.ri(r, 2, 9);
          return H.Q('把長 ' + a + ' 公分、寬 ' + b + ' 公分的長方形畫成 ' + k + ' 倍的放大圖，放大圖的長和寬各是幾公分？',
            '每條邊都乘 ' + k + '：長 ' + a + '×' + k + '＝' + a * k + '，寬 ' + b + '×' + k + '＝' + b * k + '（公分）。',
            H.nums([a * k, b * k], ['公分（長）', '公分（寬）'], { err: [[a + k, '放大是乘倍數，不是加。']] }), { a: a, b: b, k: [k, 1] }); }
        var x = H.ri(r, 2, 6), y = H.ri(r, 2, 6);
        return H.Q('把長 ' + x * k + ' 公分、寬 ' + y * k + ' 公分的長方形畫成 ' + H.fr(1, k) + ' 的縮圖，縮圖的長和寬各是幾公分？',
          '每條邊都乘 ' + H.fr(1, k) + '（也就是÷' + k + '）：長 ' + x * k + '÷' + k + '＝' + x + '，寬 ' + y * k + '÷' + k + '＝' + y + '（公分）。',
          H.nums([x, y], ['公分（長）', '公分（寬）'], { err: [[x * k - k, '縮圖是÷' + k + '，不是減。']] }), { a: x * k, b: y * k, k: [1, k] });
      } },
      // d1 對應角不變（選擇）
      { k: 'ang', d: 1, n: 4, f: function (r, _, i) {
        var x = 5 * H.ri(r, 7, 26), k = H.ri(r, 2, 4), sh = H.pick(r, SHAPE), big = i % 2 === 0;
        return H.Q('把一個' + sh + '畫成' + (big ? ' ' + k + ' 倍的放大圖' : ' ' + H.fr(1, k) + ' 的縮圖') + '，原來 ' + x + ' 度的角，在新圖上是幾度？',
          '放大圖、縮圖只改變邊長，對應角的度數不變，還是 ' + x + ' 度。',
          H.mc(x, [x * k, x + k * 10, 180 - x, x / k === Math.floor(x / k) ? x / k : x * 2 + 5], function (v) { return v + ' 度'; }), { x: x });
      } },
      // d1 方格紙：放大後面積幾格／是原來的幾倍
      { k: 'grid', d: 1, n: 4, f: function (r, _, i) {
        var w = H.ri(r, 1, 4), h = H.ri(r, 1, 3), k = H.ri(r, 2, 3), byCell = i % 2 === 0;
        return H.Q('方格紙上有一個長 ' + w + ' 格、寬 ' + h + ' 格的長方形。畫成 ' + k + ' 倍的放大圖後，' + (byCell ? '面積是幾格？' : '面積是原來的幾倍？'),
          '長變 ' + w * k + ' 格、寬變 ' + h * k + ' 格，面積 ' + w * k + '×' + h * k + '＝' + w * h * k * k + ' 格；原來 ' + w * h + ' 格，是 ' + k + '×' + k + '＝' + k * k + ' 倍。',
          H.num(byCell ? w * h * k * k : k * k, { suf: byCell ? '格' : '倍', err: E(byCell ? w * h * k * k : k * k, [[byCell ? w * h * k : k, '長和寬都變 ' + k + ' 倍，面積是 ' + k + '×' + k + ' 倍。']]) }),
          { w: w, h: h, k: k, byCell: byCell }, { svg: grid(w * k + 2, h * k + 2, [[1, 1, w, h, '#d6ecff']], '方格紙上的長方形') });
      } },
      // d1 比例尺：圖上距離 → 實際（公尺）
      { k: 'map', d: 1, n: 5, f: function (r) {
        var N = H.pick(r, NS), x = H.ri(r, 2, 15), m = H.R(x * N, 100);
        return H.Q('比例尺 1：' + C(N) + ' 的地圖上，量到兩地相距 ' + x + ' 公分，實際距離是幾公尺？',
          '實際＝' + x + '×' + C(N) + '＝' + C(x * N) + ' 公分；÷100＝' + D(m) + '（公尺）。',
          H.num(m, { suf: '公尺', err: [[x * N, '這是公分，要÷100 換成公尺。']] }), { N: N, x: x });
      } },
      // d2 列出全部：哪些是放大圖或縮圖
      { k: 'which', d: 2, n: 4, f: function (r) {
        var a = H.ri(r, 3, 7), b = H.ri(r, 2, 6); if (a <= b) return null;
        var good = [{ w: a * 2, h: b * 2 }, { w: a * 3, h: b * 3 }], bad = H.shuffle([{ w: a + 2, h: b + 2 }, { w: a * 2, h: b * 3 }, { w: a * 3, h: b + 3 }, { w: a + 1, h: b * 2 }], r);
        if (a % 2 === 0 && b % 2 === 0) good.push({ w: a / 2, h: b / 2 }); else if (r() < 0.5) good.push({ w: a * 4, h: b * 4 });
        var cand = H.shuffle(good.concat(bad.slice(0, 6 - good.length)), r);
        if (cand.some(function (c, j) { return cand.some(function (d, l) { return l !== j && c.w === d.w && c.h === d.h; }); })) return null;
        return H.Q('方格紙上有一個長 ' + a + ' 格、寬 ' + b + ' 格的長方形。下面哪些長方形（長×寬，單位：格）是它的放大圖或縮圖？<b>全部選出來。</b>',
          '長和寬要乘同一個倍數：' + cand.map(function (c) { return c.w + '×' + c.h + '（長 ' + D(H.R(c.w, a)) + ' 倍、寬 ' + D(H.R(c.h, b)) + ' 倍）'; }).join('；') + '。兩個倍數一樣的才是。',
          H.set(cand, function (c) { return c.w * b === c.h * a; }, function (c) { return c.w + '×' + c.h; }), { a: a, b: b, cand: cand });
      } },
      // d2 一邊知道倍數，求另一邊
      { k: 'other', d: 2, n: 4, f: function (r) {
        var k = H.pick(r, [[2, 1], [3, 1], [3, 2], [5, 2], [1, 2], [1, 3], [2, 3]]), m = k[1];
        var a = m * H.ri(r, 2, 6), c = m * H.ri(r, 2, 8); if (a === c) return null;
        var b = a * k[0] / m, ans = c * k[0] / m;
        return H.Q('一個三角形的兩邊是 ' + a + ' 公分和 ' + c + ' 公分。畫成' + (k[0] > m ? '放大圖' : '縮圖') + '後，' + a + ' 公分那邊變成 ' + b + ' 公分，' + c + ' 公分那邊變成幾公分？',
          '倍數＝' + b + '÷' + a + '＝' + H.fmt(H.R(b, a), 'dec') + '；另一邊也乘這個倍數：' + c + '×' + H.fmt(H.R(b, a), 'dec') + '＝' + D(H.R(ans)) + '（公分）。',
          H.num(ans, { suf: '公分', err: E(ans, [[c + b - a, '放大縮小是乘同一個倍數，不是每邊加減一樣多。']]) }), { a: a, b: b, c: c });
      } },
      // d2 面積變幾倍
      { k: 'area', d: 2, n: 4, f: function (r, _, i) {
        var k = H.ri(r, 2, 4);
        if (i % 2 === 0) { var A = H.ri(r, 3, 30);
          return H.Q('一個圖形的面積是 ' + A + ' 平方公分，畫成 ' + k + ' 倍的放大圖後，面積是幾平方公分？',
            '邊長變 ' + k + ' 倍，面積變 ' + k + '×' + k + '＝' + k * k + ' 倍：' + A + '×' + k * k + '＝' + A * k * k + '（平方公分）。',
            H.num(A * k * k, { suf: '平方公分', err: [[A * k, '面積不是變 ' + k + ' 倍，是 ' + k + '×' + k + ' 倍。']] }), { A: A, k: [k, 1] }); }
        var m = H.ri(r, 2, 12), A2 = m * k * k;
        return H.Q('一個圖形的面積是 ' + A2 + ' 平方公分，畫成 ' + H.fr(1, k) + ' 的縮圖後，面積是幾平方公分？',
          '邊長變 ' + H.fr(1, k) + '，面積變 ' + H.fr(1, k) + '×' + H.fr(1, k) + '＝' + H.fr(1, k * k) + '：' + A2 + '÷' + k * k + '＝' + m + '（平方公分）。',
          H.num(m, { suf: '平方公分', err: [[m * k, '面積不是變 ' + H.fr(1, k) + '，是 ' + H.fr(1, k * k) + '。']] }), { A: A2, k: [1, k] });
      } },
      // d2 實際距離 → 圖上距離
      { k: 'rev', d: 2, n: 4, f: function (r, _, i) {
        var km = i % 2 === 1, N = km ? H.pick(r, [10000, 20000, 50000, 100000]) : H.pick(r, [500, 1000, 2000, 5000]), x = H.R(H.ri(r, 4, 30), 2), cm = H.mul(x, N);
        var real = km ? H.div(cm, 100000) : H.div(cm, 100), u = km ? '公里' : '公尺';
        return H.Q('比例尺 1：' + C(N) + ' 的地圖上，實際相距 ' + D(real) + ' ' + u + '的兩地，地圖上相距幾公分？',
          D(real) + ' ' + u + '＝' + C(D(cm)) + ' 公分；' + C(D(cm)) + '÷' + C(N) + '＝' + D(x) + '（公分）。',
          H.num(x, { suf: '公分', err: E(x, [[H.div(real, N), '要先把' + u + '換成公分，再除。']]) }), { N: N, real: real, km: km });
      } },
      // d2 數線比例尺 → 實際距離
      { k: 'ruler', d: 2, n: 4, f: function (r, _, i) {
        var km = i % 2 === 0, u = km ? H.pick(r, [1, 2, 5, 10]) : H.pick(r, [50, 100, 200, 500]), x = H.R(H.ri(r, 3, 16), 2), unit = km ? '公里' : '公尺', ans = H.mul(x, u);
        return H.Q('地圖上的比例尺如圖（每一小段長 1 公分）。地圖上兩地相距 ' + D(x) + ' 公分，實際相距幾' + unit + '？',
          '1 公分代表 ' + u + ' ' + unit + '，' + D(x) + ' 公分就是 ' + D(x) + '×' + u + '＝' + D(ans) + '（' + unit + '）。',
          H.num(ans, { suf: unit, err: E(ans, [[H.mul(x, 4 * u), '一小段才是 1 公分，不是整把尺。']]) }), { u: u, x: x }, { svg: ruler(u, unit) });
      } },
      // d3 數線比例尺寫成 1：□
      { k: 'toN', d: 3, n: 4, f: function (r, _, i) {
        var km = i % 2 === 0, u = km ? H.pick(r, [1, 2, 3, 5, 10, 20]) : H.pick(r, [10, 20, 50, 100, 200, 500]), unit = km ? '公里' : '公尺', N = u * (km ? 100000 : 100);
        return H.Q('數線比例尺上，每 1 公分代表 ' + u + ' ' + unit + '（如圖）。寫成「1：□」的比例尺，□ 是多少？',
          u + ' ' + unit + '＝' + C(N) + ' 公分，圖上 1 公分代表實際 ' + C(N) + ' 公分，所以是 1：' + C(N) + '。',
          H.num(N, { err: km ? [[u * 1000, '1 公里＝100,000 公分，不是 1,000。'], [u, '要先把公里換成公分。']] : [[u, '要先把公尺換成公分（×100）。']] }), { u: u, km: km }, { svg: ruler(u, unit) });
      } },
      // d3 圖上 x 公分代表實際 y，求比例尺
      { k: 'findN', d: 3, n: 4, f: function (r) {
        var N = H.pick(r, [10000, 20000, 25000, 50000, 100000, 200000]), x = H.ri(r, 2, 10), y = H.R(x * N, 100000);
        return H.Q('地圖上 ' + x + ' 公分代表實際 ' + D(y) + ' 公里，這張地圖的比例尺是 1：□，□ 是多少？',
          D(y) + ' 公里＝' + C(x * N) + ' 公分；' + C(x * N) + '÷' + x + '＝' + C(N) + '，所以是 1：' + C(N) + '。',
          H.num(N, { err: [[x * N, '還要÷' + x + '，比例尺是「圖上 1 公分」代表多少。']] }), { x: x, y: y });
      } },
      // d3 比例尺＋速率
      { k: 'trip', d: 3, n: 4, f: function (r) {
        var N = H.pick(r, [5000, 10000, 20000]), s = H.pick(r, [50, 60, 75, 80]), t = H.ri(r, 5, 30), m = s * t, x = H.R(m * 100, N);
        if (H.mul(x, 10)[1] !== 1) return null;   // 圖上距離最多一位小數
        return H.Q('比例尺 1：' + C(N) + ' 的地圖上，家到學校相距 ' + D(x) + ' 公分。小明走路的分速是 ' + s + ' 公尺，從家走到學校要幾分鐘？',
          '實際距離＝' + D(x) + '×' + C(N) + '＝' + C(m * 100) + ' 公分＝' + C(m) + ' 公尺；' + m + '÷' + s + '＝' + t + '（分鐘）。',
          H.num(t, { suf: '分鐘', err: E(t, [[m * 100 / s, '距離是公分，要先換成公尺再÷分速。']]) }), { N: N, x: x, s: s });
      } },
      // d3 同一段實際距離，畫在哪一張地圖上最長／最短（選擇）
      { k: 'long', d: 3, n: 4, f: function (r, _, i) {
        var km = H.ri(r, 2, 12), ms = H.shuffle([50, 100, 200, 250, 500, 1000, 2000], r), os = [], seen = {};
        for (var j = 0; j < 4; j++) {
          var o = j % 2 ? { k: 'u', m: ms[j] } : { k: 'N', N: ms[j] * 100 };   // u：1 公分代表 m 公尺；N：1：N
          if (seen[ms[j]]) return null; seen[ms[j]] = 1; os.push(o);
        }
        var cm = function (o) { return H.div(km * 100000, o.k === 'N' ? o.N : o.m * 100); }, long = i % 2 === 0;
        var sorted = os.slice().sort(function (a, b) { return H.cmp(cm(b), cm(a)) * (long ? 1 : -1); });
        var show = function (o) { return o.k === 'N' ? '比例尺 1：' + C(o.N) + ' 的地圖' : '每 1 公分代表 ' + C(o.m) + ' 公尺的地圖'; };
        return H.Q('實際相距 ' + km + ' 公里的兩地，畫在下面哪一張地圖上，圖上的距離' + (long ? '最長' : '最短') + '？',
          '都換成「圖上 1 公分代表幾公分」：' + os.map(function (o) { return show(o) + '→1：' + C(o.k === 'N' ? o.N : o.m * 100) + '，圖上 ' + D(cm(o)) + ' 公分'; }).join('；') + '。□ 越小，畫得越長。',
          H.mc(sorted[0], sorted.slice(1), show), { km: km, os: os, long: long });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
