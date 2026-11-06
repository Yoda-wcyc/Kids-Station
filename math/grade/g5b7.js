/* 五下 單元七 表面積（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b7.js。 */
(function (MG) {
  'use strict';
  var H = MG.H;
  var sq = function (x) { return x + ' 平方公分'; };
  function sa(l, w, h) { return 2 * (l * w + l * h + w * h); }
  function boxSvg(l, w, h, u) {
    var k = Math.max(8, Math.min(16, Math.floor(200 / Math.max(l, w, h)))); u = u || '公分';
    return l === w && w === h ? H.box(l * k, w * k, h * k, [l + ' ' + u, '', ''], { label: '正方體' }) : H.box(l * k, w * k, h * k, ['長 ' + l + ' ' + u, '寬 ' + w + ' ' + u, '高 ' + h + ' ' + u]);
  }
  // 長方體展開圖：中間一直排（上、前、下、後），前面那格左右各接一個側面；每公分 k px
  function net(l, w, h, k) {
    var X = 74 + w * k, Y = 28, rs = [[X, Y, l, w], [X, Y + w * k, l, h], [X, Y + (w + h) * k, l, w], [X, Y + (2 * w + h) * k, l, h], [X - w * k, Y + w * k, w, h], [X + l * k, Y + w * k, w, h]];
    var fill = ['#eef6ff', '#d6ecff', '#eef6ff', '#d6ecff', '#bcdcf7', '#bcdcf7'];
    var b = rs.map(function (q, i) { return '<rect x="' + q[0] + '" y="' + q[1] + '" width="' + q[2] * k + '" height="' + q[3] * k + '" fill="' + fill[i] + '" stroke="' + H.INK + '" stroke-width="2"/>'; }).join('');
    b += H.txt(X + l * k / 2, Y - 8, l + ' 公分') + H.txt(X + l * k + 6, Y + w * k / 2 + 6, w + ' 公分', { a: 'start' }) + H.txt(X - w * k - 6, Y + w * k + h * k / 2 + 6, h + ' 公分', { a: 'end' });
    return H.svg(X + (l + w) * k + 74, Y + (2 * w + 2 * h) * k + 12, b, '長方體展開圖');
  }
  function netK(l, w, h) { return Math.max(5, Math.min(16, Math.floor(400 / (2 * w + 2 * h)), Math.floor(380 / (l + 2 * w)))); }
  // 兩個正方體黏成一排（在長方體圖中間畫一條接縫）
  var TWO = H.box(160, 80, 80, ['', '', ''], { label: '兩個正方體黏在一起' }).replace('</svg>', '<line x1="110" y1="140" x2="110" y2="60" stroke="#d9480f" stroke-width="3" stroke-dasharray="6 4"/><line x1="110" y1="60" x2="150" y2="20" stroke="#d9480f" stroke-width="3" stroke-dasharray="6 4"/></svg>');

  MG.unit({
    id: 'g5b7', pending: '待課本核對',
    cards: [
      { t: '表面積＝立體外面所有面的面積加起來。正方體有 6 個一樣大的正方形，表面積＝邊長×邊長×6。',
        ex: '邊長 5 公分的正方體：一個面 5×5＝25 平方公分，6 個面 25×6＝<b>150 平方公分</b>。',
        why: '正方體 6 個面都是一樣大的正方形，算一個面再乘 6 就好。', svg: boxSvg(5, 5, 5) },
      { t: '長方體有 3 組「對面」，每組兩個一樣大：表面積＝(長×寬＋長×高＋寬×高)×2。',
        ex: '長 8、寬 5、高 3 公分：8×5＝40，8×3＝24，5×3＝15，(40＋24＋15)×2＝79×2＝<b>158 平方公分</b>。',
        why: '上下、前後、左右各是一組一樣大的面，三種面各算一次加起來，再乘 2。', svg: boxSvg(8, 5, 3) },
      { t: '展開圖：把盒子沿著邊剪開攤平，6 個長方形的面積加起來就是表面積。',
        ex: '下面的展開圖是長 6、寬 4、高 3 公分的盒子：6×4×2＋6×3×2＋4×3×2＝48＋36＋24＝<b>108 平方公分</b>。',
        why: '攤平不會讓面變大變小，所以展開圖的總面積＝盒子的表面積。', svg: net(6, 4, 3, 16) },
      { t: '黏在一起：黏住的那兩個面藏到裡面去了，表面積要扣掉 2 個面。',
        ex: '兩個邊長 4 公分的正方體黏成一排：分開時 16×6×2＝192，黏住少 2 個面 16×2＝32，192－32＝<b>160 平方公分</b>。',
        why: '黏住的面兩個正方體各有一個，都看不到了，所以一次少 2 個面。', svg: TWO },
      { t: '從角落挖掉一個小正方體，表面積不變；從面的中間挖一個洞，表面積會變多。',
        ex: '角落挖掉：少了 3 個小面，又露出 3 個一樣大的新面 → 不變。<br>面中間挖洞（沒挖穿）：洞口少 1 個小面，洞裡多了 4 個側面＋1 個底 → 多 4 個小面。',
        why: '看「拿掉了哪些面、又多露出哪些面」，一加一減就知道表面積怎麼變。' }
    ],
    gens: [
      // d1 正方體表面積
      { k: 'cube', d: 1, n: 6, f: function (r) {
        var s = H.ri(r, 2, 15), u = H.pick(r, ['公分', '公分', '公尺']), a = 6 * s * s;
        return H.Q('邊長 ' + s + ' ' + u + '的正方體，表面積是多少平方' + u + '？',
          '一個面是 ' + s + '×' + s + '＝' + s * s + '，正方體有 6 個面：' + s * s + '×6＝' + a + '（平方' + u + '）。',
          H.num(a, { suf: '平方' + u, err: [[s * s * s, '這是體積（邊長×邊長×邊長），表面積是 6 個面加起來。'], [s * s, '這只是一個面，正方體有 6 個面。'], [4 * s * s, '正方體有 6 個面，不是 4 個。']] }), { s: s }, { svg: boxSvg(s, s, s, u) });
      } },
      // d1 長方體表面積
      { k: 'box', d: 1, n: 6, f: function (r) {
        var l = H.ri(r, 4, 15), w = H.ri(r, 2, Math.min(10, l)), h = H.ri(r, 2, 12), a = sa(l, w, h), t = l * w + l * h + w * h;
        return H.Q('長方體的長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分，表面積是多少平方公分？',
          '三種面：' + l + '×' + w + '＝' + l * w + '，' + l + '×' + h + '＝' + l * h + '，' + w + '×' + h + '＝' + w * h + '。加起來 ' + t + '，每種有 2 個：' + t + '×2＝' + a + '（平方公分）。',
          H.num(a, { suf: '平方公分', err: [[t, '這只算了 3 個面，對面還有一樣大的，要再乘 2。'], [l * w * h, '這是體積，表面積是 6 個面的面積加起來。']] }), { l: l, w: w, h: h }, { svg: boxSvg(l, w, h) });
      } },
      // d1 哪些是某一個面的面積（列舉）
      { k: 'faces', d: 1, n: 4, f: function (r) {
        var l = H.ri(r, 5, 12), w = H.ri(r, 3, l - 1), h = H.ri(r, 2, w - 1);
        if (h >= w) return null;
        var fs = [l * w, l * h, w * h], good = H.shuffle(fs, r).slice(0, H.ri(r, 2, 3)), bad = [];
        H.shuffle([l * l, w * w, h * h, l * w * h, 2 * l * w, (l + w) * 2, l * (w + h), w * h * 2], r).forEach(function (x) { if (fs.indexOf(x) < 0 && bad.indexOf(x) < 0 && bad.length + good.length < 5) bad.push(x); });
        if (good.length + bad.length < 5) return null;
        var cand = H.shuffle(good.concat(bad), r);
        return H.Q('一個長方體的長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分。下面哪些是它其中一個面的面積？<b>全部選出來。</b>',
          '長方體的面只有三種：長×寬＝' + l * w + '、長×高＝' + l * h + '、寬×高＝' + w * h + '（平方公分），其他的都不是。',
          H.set(cand, function (x) { return fs.indexOf(x) >= 0; }, sq), { l: l, w: w, h: h, cand: cand });
      } },
      // d2 正方體：由表面積反推
      { k: 'cubeS', d: 2, n: 4, f: function (r, _, i) {
        var s = H.ri(r, 2, 12), S = 6 * s * s;
        if (i % 2) {
          return H.Q('一個正方體的表面積是 ' + S + ' 平方公分，它一個面的面積是多少平方公分？',
            '正方體 6 個面一樣大：' + S + '÷6＝' + s * s + '（平方公分）。',
            H.num(s * s, { suf: '平方公分', err: [[S / 4, '正方體有 6 個面，要除以 6。']] }), { S: S, ask: 'face' });
        }
        return H.Q('一個正方體的表面積是 ' + S + ' 平方公分，它的邊長是幾公分？',
          '先算一個面：' + S + '÷6＝' + s * s + '；哪個數自己乘自己是 ' + s * s + '？' + s + '×' + s + '＝' + s * s + '，所以邊長 ' + s + ' 公分。',
          H.num(s, { suf: '公分', err: [[s * s, '這是一個面的面積，還要想「幾乘幾」等於它。']] }), { S: S, ask: 'side' });
      } },
      // d2 從展開圖算表面積
      { k: 'net', d: 2, n: 5, f: function (r) {
        var l = H.ri(r, 4, 12), w = H.ri(r, 2, Math.min(8, l)), h = H.ri(r, 2, 8), k = netK(l, w, h), a = sa(l, w, h);
        var thing = H.pick(r, ['面紙盒', '餅乾盒', '鞋盒', '禮物盒', '牛奶箱', '文具盒', '蛋糕盒', '拼圖盒']);
        return H.Q('阿哲把一個' + thing + '沿著邊剪開攤平，得到下面的展開圖。這個' + thing + '的表面積是多少平方公分？',
          '展開圖有 6 個長方形：' + l + '×' + w + ' 兩個、' + l + '×' + h + ' 兩個、' + w + '×' + h + ' 兩個。' + (l * w * 2) + '＋' + (l * h * 2) + '＋' + (w * h * 2) + '＝' + a + '（平方公分）。',
          H.num(a, { suf: '平方公分', err: [[a / 2, '只算了 3 個長方形，展開圖有 6 個。']] }), { k: k }, { svg: net(l, w, h, k) });
      } },
      // d2 沒有蓋子
      { k: 'open', d: 2, n: 5, f: function (r, _, i) {
        var l = H.ri(r, 5, 15), w = H.ri(r, 3, 10), h = H.ri(r, 3, 10), a = l * w + 2 * l * h + 2 * w * h;
        var q = i % 2 ? '魚缸是沒有蓋子的長方體玻璃缸，長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分。做這個魚缸一共要用多少平方公分的玻璃？'
          : '一個沒有蓋子的長方體紙盒，長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分。做這個紙盒要用多少平方公分的紙板？';
        return H.Q(q, '沒有蓋子，只有 5 個面：底面 ' + l + '×' + w + '＝' + l * w + '，前後 ' + l + '×' + h + '×2＝' + l * h * 2 + '，左右 ' + w + '×' + h + '×2＝' + w * h * 2 + '，合起來 ' + a + '（平方公分）。',
          H.num(a, { suf: '平方公分', err: [[sa(l, w, h), '沒有蓋子，上面那一面不用算。'], [2 * l * h + 2 * w * h, '底面還是要算，只有上面沒有。']] }), { l: l, w: w, h: h }, { svg: boxSvg(l, w, h) });
      } },
      // d2 哪一個表面積最大／最小（選擇）
      { k: 'cmp', d: 2, n: 4, f: function (r, _, i) {
        var bs = [], seen = {};
        for (var t = 0; t < 40 && bs.length < 4; t++) { var L = H.ri(r, 4, 12), b = { l: L, w: H.ri(r, 2, Math.min(9, L - 1)), h: H.ri(r, 2, 8) }, v = sa(b.l, b.w, b.h); if (!seen[v]) { seen[v] = 1; bs.push(b); } }
        if (bs.length < 4) return null;
        var big = i % 2 === 0, S = function (b) { return sa(b.l, b.w, b.h); }, sorted = bs.slice().sort(function (x, y) { return big ? S(y) - S(x) : S(x) - S(y); });
        var show = function (b) { return '長 ' + b.l + '、寬 ' + b.w + '、高 ' + b.h + ' 公分'; };
        return H.Q('下面哪一個長方體的表面積' + (big ? '最大' : '最小') + '？',
          bs.map(function (b) { return show(b) + '：' + S(b); }).join('；') + '（平方公分）。' + (big ? '最大' : '最小') + '的是 ' + S(sorted[0]) + '。',
          H.mc(sorted[0], sorted.slice(1), show), { boxes: bs, big: big });
      } },
      // d3 黏在一起
      { k: 'glue', d: 3, n: 5, f: function (r, _, i) {
        if (i % 2 === 0) {
          var n = H.ri(r, 2, 5), s = H.ri(r, 2, 9), a = (4 * n + 2) * s * s;
          return H.Q(n + ' 個邊長 ' + s + ' 公分的正方體排成一排黏在一起，變成一個長方體。它的表面積是多少平方公分？',
            '黏成長 ' + n * s + '、寬 ' + s + '、高 ' + s + ' 的長方體。也可以想：分開時 ' + n + '×6＝' + 6 * n + ' 個面，黏了 ' + (n - 1) + ' 處、每處少 2 個面，剩 ' + (4 * n + 2) + ' 個面：' + s * s + '×' + (4 * n + 2) + '＝' + a + '（平方公分）。',
            H.num(a, { suf: '平方公分', err: [[6 * n * s * s, '黏住的面藏到裡面了，每黏一處要扣 2 個面。']] }), { L: n, W: 1, H: 1, s: s });
        }
        var l = H.ri(r, 3, 10), w = H.ri(r, 2, 8), h = H.ri(r, 2, 6), b = 2 * sa(l, w, h) - 2 * l * w;
        return H.Q('兩個長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分的長方體，上下疊起來黏在一起（長 ' + l + '、寬 ' + w + ' 的面黏住）。合起來的表面積是多少平方公分？',
          '一個是 ' + sa(l, w, h) + '，兩個 ' + 2 * sa(l, w, h) + '；黏住的兩個面各是 ' + l + '×' + w + '＝' + l * w + '，要扣掉 ' + 2 * l * w + '：' + b + '（平方公分）。',
          H.num(b, { suf: '平方公分', err: [[2 * sa(l, w, h), '黏住的兩個面看不到了，要扣掉。'], [2 * sa(l, w, h) - l * w, '黏住的面兩個長方體各有一個，要扣 2 個面。']] }), { L: l, W: w, H: 2 * h, s: 1 });
      } },
      // d3 挖掉一塊
      { k: 'hole', d: 3, n: 5, f: function (r, _, i) {
        var S = H.ri(r, 4, 10), t = H.ri(r, 1, S - 2), A = 6 * S * S;
        if (i % 2 === 0) {
          return H.Q('一個邊長 ' + S + ' 公分的正方體木塊，從一個角挖掉一個邊長 ' + t + ' 公分的小正方體。剩下木塊的表面積是多少平方公分？',
            '挖掉角落時少了 3 個小面，但又露出 3 個一樣大的新面，所以表面積不變：' + S + '×' + S + '×6＝' + A + '（平方公分）。',
            H.num(A, { suf: '平方公分', err: [[A - 3 * t * t, '少了 3 個小面，但也多露出 3 個新面，一減一加剛好不變。'], [A - 6 * t * t, '不是扣掉小正方體的表面積；露出的新面要算進去。']] }), { S: S, t: t, mode: 'corner' });
        }
        var B = A + 4 * t * t;
        return H.Q('一個邊長 ' + S + ' 公分的正方體木塊，從一個面的正中間往下挖一個邊長 ' + t + ' 公分的正方體洞（沒有挖穿）。剩下木塊的表面積是多少平方公分？',
          '洞口少了 1 個小面，洞裡多了 4 個側面和 1 個底，一共多 4 個小面：' + A + '＋' + t * t + '×4＝' + B + '（平方公分）。',
          H.num(B, { suf: '平方公分', err: [[A - t * t, '洞口少了一個面，可是洞裡面又多出 5 個面。'], [A + 5 * t * t, '洞口那個面要扣掉，所以是多 4 個面不是 5 個。'], [A, '挖洞以後裡面多出新的面，表面積會變多。']] }), { S: S, t: t, mode: 'middle' });
      } },
      // d3 切一刀
      { k: 'cut', d: 3, n: 4, f: function (r, _, i) {
        var l = H.ri(r, 6, 15), w = H.ri(r, 3, 10), h = H.ri(r, 2, 8), ax = H.ri(r, 0, 2);
        var face = [[w, h, '寬', '高'], [l, h, '長', '高'], [l, w, '長', '寬']][ax], fa = face[0] * face[1], thing = H.pick(r, ['豆腐', '蛋糕', '黏土', '木塊']);
        var q = '一塊長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分的長方體' + thing + '，沿著和「' + face[2] + ' ' + face[0] + ' 公分、' + face[3] + ' ' + face[1] + ' 公分」那個面平行的方向切一刀，分成兩塊。';
        if (i % 2 === 0) {
          return H.Q(q + '兩塊的表面積合起來，比原來多了多少平方公分？',
            '切一刀多出 2 個切面（兩塊各一個），每個切面 ' + face[0] + '×' + face[1] + '＝' + fa + '：' + fa + '×2＝' + 2 * fa + '（平方公分）。',
            H.num(2 * fa, { suf: '平方公分', err: [[fa, '切開後兩塊各有一個新切面，要乘 2。']] }), { l: l, w: w, h: h, ax: ax, ask: 'more' });
        }
        return H.Q(q + '兩塊的表面積合起來是多少平方公分？',
          '原來的表面積 ' + sa(l, w, h) + '，切一刀多 2 個切面 ' + fa + '×2＝' + 2 * fa + '：' + sa(l, w, h) + '＋' + 2 * fa + '＝' + (sa(l, w, h) + 2 * fa) + '（平方公分）。',
          H.num(sa(l, w, h) + 2 * fa, { suf: '平方公分', err: [[sa(l, w, h), '切開後多出兩個切面，表面積會變多。'], [sa(l, w, h) + fa, '兩塊各有一個新切面，要加 2 個。']] }), { l: l, w: w, h: h, ax: ax, ask: 'total' });
      } },
      // d3 表面積怎麼變（選擇）：值＝變化量（正＝變多、負＝變少、0＝不變）
      { k: 'chg', d: 3, n: 4, f: function (r, _, i) {
        var S = H.ri(r, 4, 10), t = H.ri(r, 1, S - 2), m = i % 3, q, why, a, f = t * t;
        var show = function (x) { return x > 0 ? '多了 ' + x + ' 平方公分' : x < 0 ? '少了 ' + (-x) + ' 平方公分' : '不變'; };
        if (m === 0) {
          q = '一個邊長 ' + S + ' 公分的正方體木塊，從一個角挖掉一個邊長 ' + t + ' 公分的小正方體。和挖之前比，表面積有什麼變化？';
          a = 0; why = '角落少了 3 個 ' + t + '×' + t + ' 的小面，又露出 3 個一樣大的新面，一減一加，表面積不變。';
        } else if (m === 1) {
          q = '一個邊長 ' + S + ' 公分的正方體木塊，從一個面的正中間往下挖一個邊長 ' + t + ' 公分的正方體洞（沒有挖穿）。和挖之前比，表面積有什麼變化？';
          a = 4 * f; why = '洞口少 1 個小面，洞裡多 4 個側面和 1 個底，一共多 4 個小面：' + f + '×4＝' + a + '（平方公分）。';
        } else {
          f = S * S; q = '兩個邊長 ' + S + ' 公分的正方體，原本分開放，後來黏成一排。黏起來以後的表面積，和兩個分開時合起來比，有什麼變化？';
          a = -2 * f; why = '黏住的兩個面（各 ' + S + '×' + S + '＝' + f + '）藏到裡面了，少了 2 個面：' + f + '×2＝' + (2 * f) + '（平方公分）。';
        }
        return H.Q(q, why, H.mc(a, [-a, 0, 3 * f, -3 * f, 5 * f, -f, f], show), { S: S, t: t, mode: ['corner', 'middle', 'glue'][m] });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
