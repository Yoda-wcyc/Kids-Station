/* 六上 單元六 圓周長與扇形周長（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a6.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, PI = H.fromDec('3.14');
  var D = function (x) { return H.fmt(x, 'dec'); };
  var P = function (n) { return n.toFixed(1); };
  // 常見錯答：跟正解一樣大的不放
  var E = function (ans, list) { return list.filter(function (e) { return !H.eq(e[0], ans); }); };
  // 圓（畫直徑或半徑）
  function circ(lab, o) {
    o = o || {}; var R = 70, cx = 100, cy = 90;
    var b = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#d6ecff" stroke="' + H.INK + '" stroke-width="2"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="' + H.INK + '"/>' +
      '<line x1="' + (o.r ? cx : cx - R) + '" y1="' + cy + '" x2="' + (cx + R) + '" y2="' + cy + '" stroke="#d9480f" stroke-width="3"/>' +
      H.txt(o.r ? cx + R / 2 : cx, cy - 8, lab, { fs: 15, c: '#d9480f' });
    return H.svg(200, 180, b, '圓');
  }
  // 扇形：圓心角 deg 度、半徑標 lab（從正上方順時針畫）
  function sec(deg, lab) {
    var R = 80, cx = 110, cy = 100, a0 = -Math.PI / 2, a1 = a0 + deg * Math.PI / 180;
    var x1 = cx + R * Math.cos(a0), y1 = cy + R * Math.sin(a0), x2 = cx + R * Math.cos(a1), y2 = cy + R * Math.sin(a1), am = (a0 + a1) / 2;
    var b = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#9aa9b8" stroke-width="1.5" stroke-dasharray="5 5"/>' +
      '<path d="M' + cx + ',' + cy + ' L' + P(x1) + ',' + P(y1) + ' A' + R + ',' + R + ' 0 ' + (deg > 180 ? 1 : 0) + ' 1 ' + P(x2) + ',' + P(y2) + ' Z" fill="#ffd8a8" stroke="' + H.INK + '" stroke-width="2.5"/>' +
      H.txt(cx - 6, cy - R / 2, lab, { a: 'end', fs: 15 }) + H.txt(P(cx + 30 * Math.cos(am)), P(cy + 30 * Math.sin(am) + 5), deg + '°', { fs: 14, c: '#d9480f' });
    return H.svg(250, 200, b, '圓心角 ' + deg + ' 度的扇形');
  }
  var FR = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 8], [1, 12], [2, 3], [3, 4], [3, 8], [5, 6], [5, 12]];
  var DEG = [30, 36, 40, 45, 60, 72, 90, 120, 135, 150, 180, 240, 270];
  var showC = function (c) { return (c.k === 'r' ? '半徑 ' : '直徑 ') + c.x + (c.k === 'mm' ? ' 公釐' : ' 公分') + (c.ring ? '的圓' : ''); };
  var dia = function (c) { return c.k === 'r' ? H.R(2 * c.x) : c.k === 'mm' ? H.R(c.x, 10) : H.R(c.x); };

  MG.unit({
    id: 'g6a6', pending: '待課本核對',
    cards: [
      { t: '不管圓多大，圓周長÷直徑都差不多是 3.14，這個數叫「圓周率」。',
        ex: '直徑 10 公分的鐵罐，用繩子繞一圈量到約 31.4 公分：31.4÷10＝3.14。<br>直徑 20 公分的盤子，量到約 62.8 公分：62.8÷20＝3.14，一樣。',
        why: '圓變大幾倍，周長也跟著變大幾倍，所以「周長是直徑的幾倍」永遠一樣。真正的圓周率是 3.14159…算不完，國小都用 3.14。',
        svg: circ('直徑') },
      { t: '圓周長＝直徑×3.14＝半徑×2×3.14。',
        ex: '直徑 8 公分：8×3.14＝<b>25.12 公分</b>。<br>半徑 5 公分：5×2＝10（直徑），10×3.14＝<b>31.4 公分</b>。',
        why: '圓周長是直徑的 3.14 倍；半徑×2 就是直徑，所以只給半徑時要先乘 2。', svg: circ('半徑', { r: 1 }) },
      { t: '知道圓周長，要找直徑就÷3.14；要找半徑再÷2。',
        ex: '圓周長 47.1 公分：直徑＝47.1÷3.14＝<b>15 公分</b>。<br>圓周長 62.8 公分：直徑＝62.8÷3.14＝20，半徑＝20÷2＝<b>10 公分</b>。',
        why: '「直徑×3.14＝圓周長」倒過來想，就是「圓周長÷3.14＝直徑」。' },
      { t: '扇形周長＝弧長＋2 個半徑；弧長＝圓周長×[[圓心角/360]]。',
        ex: '半徑 6 公分、圓心角 90 度：弧長＝6×2×3.14×[[90/360]]＝37.68÷4＝9.42；周長＝9.42＋6＋6＝<b>21.42 公分</b>。',
        why: '一整圈是 360 度。90 度占 [[90/360]]＝[[1/4]] 圈，弧長就是圓周長的 [[1/4]]。扇形還有兩條直直的半徑，別忘了加。', svg: sec(90, '6 cm') },
      { t: '半圓的周長＝圓周長的一半＋直徑。',
        ex: '半徑 5 公分的半圓：弧長＝5×2×3.14÷2＝15.7；直的邊是直徑 10；周長＝15.7＋10＝<b>25.7 公分</b>。',
        why: '半圓的圓心角是 180 度，弧長是半圈；兩個半徑接在一起剛好是一條直徑。', svg: sec(180, '5 cm') }
    ],
    gens: [
      // d1 認識圓周率：量到的周長÷直徑
      { k: 'pi', d: 1, n: 4, f: function (r) {
        var obj = H.pick(r, ['碗口', '鐵罐的罐口', '呼拉圈', '圓形時鐘', '圓形桌面', '杯墊']), d = H.ri(r, 6, 80), c = H.mul(PI, d);
        return H.Q('小明用繩子沿著' + obj + '繞一圈，量到圓周長大約 ' + D(c) + ' 公分；它的直徑是 ' + d + ' 公分。圓周長÷直徑大約是多少？',
          D(c) + '÷' + d + '＝3.14。不管圓多大，圓周長÷直徑都差不多是 3.14（圓周率）。',
          H.num(PI, { err: [[H.R(157, 100), '要除以直徑，不是除以 2 個直徑。']] }), { c: c, d: d });
      } },
      // d1 直徑 → 圓周長
      { k: 'cd', d: 1, n: 5, f: function (r) {
        var d = H.ri(r, 2, 40), c = H.mul(PI, d);
        return H.Q('一個圓的直徑是 ' + d + ' 公分，圓周長是幾公分？（圓周率用 3.14）',
          '圓周長＝直徑×3.14＝' + d + '×3.14＝' + D(c) + '（公分）。',
          H.num(c, { suf: '公分', err: E(c, [[H.mul(c, 2), '直徑已經是 2 個半徑了，不用再乘 2。'], [H.div(c, 2), '直徑×3.14 就好，不用再除以 2。']]) }), { d: d });
      } },
      // d1 半徑 → 圓周長
      { k: 'cr', d: 1, n: 5, f: function (r) {
        var rr = H.ri(r, 1, 25), c = H.mul(PI, 2 * rr);
        return H.Q('一個圓的半徑是 ' + rr + ' 公分，圓周長是幾公分？（圓周率用 3.14）',
          '半徑×2＝直徑：' + rr + '×2＝' + 2 * rr + '；' + 2 * rr + '×3.14＝' + D(c) + '（公分）。',
          H.num(c, { suf: '公分', err: E(c, [[H.mul(PI, rr), '半徑要先乘 2 變成直徑，再乘 3.14。'], [H.mul(PI, rr * rr), '半徑×半徑×3.14 是圓面積；周長是半徑×2×3.14。']]) }), { r: rr });
      } },
      // d1 圓心角 ↔ 弧長占圓周長的幾分之幾
      { k: 'ang', d: 1, n: 4, f: function (r, _, i) {
        if (i % 2 === 0) {
          var deg = H.pick(r, DEG), f = H.R(deg, 360);
          return H.Q('一個扇形的圓心角是 ' + deg + ' 度，它的弧長是整個圓周長的幾分之幾？（用最簡分數表示）',
            '一整圈是 360 度，' + deg + ' 度是 ' + H.fr(deg, 360) + '＝' + H.fmt(f) + ' 圈，所以弧長是圓周長的 ' + H.fmt(f) + '。',
            H.num(f, { form: 'f', simp: true }), { deg: deg }, { svg: sec(deg, '') });
        }
        var p = H.pick(r, FR), dd = 360 * p[0] / p[1];
        return H.Q('一個扇形的弧長是整個圓周長的 ' + H.fr(p[0], p[1]) + '，它的圓心角是幾度？',
          '一整圈是 360 度：360×' + H.fr(p[0], p[1]) + '＝' + dd + '（度）。',
          H.num(dd, { suf: '度' }), { n: p[0], m: p[1] });
      } },
      // d2 已知圓周長，求直徑／半徑
      { k: 'inv', d: 2, n: 5, f: function (r, _, i) {
        if (i % 2 === 0) {
          var d = H.ri(r, 5, 60), c = H.mul(PI, d);
          return H.Q('一個圓的圓周長是 ' + D(c) + ' 公分，直徑是幾公分？（圓周率用 3.14）',
            '直徑×3.14＝圓周長，所以直徑＝' + D(c) + '÷3.14＝' + d + '（公分）。',
            H.num(d, { suf: '公分', err: E(d, [[H.R(d, 2), '這是半徑；求直徑只要÷3.14。']]) }), { c: c, ask: 'd' });
        }
        var rr = H.ri(r, 3, 30), c2 = H.mul(PI, 2 * rr);
        return H.Q('一個圓形花圃的圓周長是 ' + D(c2) + ' 公尺，半徑是幾公尺？（圓周率用 3.14）',
          '直徑＝' + D(c2) + '÷3.14＝' + 2 * rr + '；半徑＝' + 2 * rr + '÷2＝' + rr + '（公尺）。',
          H.num(rr, { suf: '公尺', err: [[2 * rr, '這是直徑，半徑還要再÷2。']] }), { c: c2, ask: 'r' });
      } },
      // d2 半圓、四分之一圓的周長
      { k: 'semi', d: 2, n: 5, f: function (r, _, i) {
        var rr = H.ri(r, 2, 30), deg = i % 2 ? 90 : 180, arc = H.mul(H.mul(PI, 2 * rr), H.R(deg, 360)), per = H.add(arc, 2 * rr);
        var name = deg === 180 ? '半圓形' : '四分之一圓（扇形）';
        return H.Q('一個' + name + '的半徑是 ' + rr + ' 公分，它的周長是幾公分？（圓周率用 3.14）',
          '弧長＝' + rr + '×2×3.14' + (deg === 180 ? '÷2' : '÷4') + '＝' + D(arc) + '；再加 2 個半徑 ' + 2 * rr + '：' + D(arc) + '＋' + 2 * rr + '＝' + D(per) + '（公分）。',
          H.num(per, { suf: '公分', err: E(per, [[arc, '只算了彎彎的弧長，還要加上直的邊（2 個半徑）。'], [H.add(arc, rr), '直的邊有 2 個半徑，要加兩次。']]) }),
          { r: rr, deg: deg }, { svg: sec(deg, rr + ' cm') });
      } },
      // d2 哪一個圓的圓周長最長／最短（選擇）
      { k: 'big', d: 2, n: 5, f: function (r, _, i) {
        var cs = [], seen = {};
        while (cs.length < 4) { var c = H.pick(r, ['r', 'd']) === 'r' ? { k: 'r', x: H.ri(r, 3, 20) } : { k: 'd', x: H.ri(r, 5, 40) }, dk = dia(c)[0]; if (!seen[dk]) { seen[dk] = 1; c.ring = 1; cs.push(c); } }
        var long = i % 2 === 0, sorted = cs.slice().sort(function (a, b) { return H.cmp(dia(b), dia(a)) * (long ? 1 : -1); });
        return H.Q('下面哪一個圓的圓周長' + (long ? '最長' : '最短') + '？',
          '直徑越' + (long ? '長' : '短') + '，圓周長就越' + (long ? '長' : '短') + '。先都換成直徑：' + cs.map(function (c) { return showC(c) + '→直徑 ' + H.fmt(dia(c)); }).join('；') + '。',
          H.mc(sorted[0], sorted.slice(1), showC), { cs: cs, long: long });
      } },
      // d2 列出全部：圓周長是 C 的圓
      { k: 'all', d: 2, n: 5, f: function (r) {
        var m = H.ri(r, 3, 20), d = 2 * m, c = H.mul(PI, d);
        var good = [{ k: 'd', x: d }, { k: 'r', x: m }], badC = H.shuffle([{ k: 'r', x: d }, { k: 'd', x: m }, { k: 'd', x: d + 2 }, { k: 'r', x: m + 1 }, { k: 'mm', x: d }], r);
        if (r() < 0.5) good.push({ k: 'mm', x: d * 10 });
        var cand = H.shuffle(good.concat(badC.slice(0, 5 - good.length + 1)), r);
        return H.Q('一個圓的圓周長是 ' + D(c) + ' 公分（圓周率用 3.14）。下面哪些可能是這個圓？<b>全部選出來。</b>',
          '直徑＝' + D(c) + '÷3.14＝' + d + ' 公分＝半徑 ' + m + ' 公分＝直徑 ' + d * 10 + ' 公釐。符合的才選。',
          H.set(cand, function (x) { return H.eq(dia(x), d); }, showC), { c: c, cand: cand });
      } },
      // d3 扇形周長（圓心角幾度）
      { k: 'sec', d: 3, n: 5, f: function (r) {
        var deg = H.pick(r, [30, 45, 60, 72, 120, 135, 150, 240, 270, 300]), rr = H.ri(r, 2, 20), arc = H.mul(H.mul(PI, 2 * rr), H.R(deg, 360));
        if (H.mul(arc, 100)[1] !== 1) return null;   // 答案最多兩位小數
        var per = H.add(arc, 2 * rr), f = H.R(deg, 360);
        return H.Q('一個扇形的圓心角是 ' + deg + ' 度、半徑 ' + rr + ' 公分，它的周長是幾公分？（圓周率用 3.14）',
          '弧長＝' + rr + '×2×3.14×' + H.fr(deg, 360) + '＝' + D(H.mul(PI, 2 * rr)) + '×' + H.fmt(f) + '＝' + D(arc) + '；周長＝' + D(arc) + '＋' + rr + '＋' + rr + '＝' + D(per) + '（公分）。',
          H.num(per, { suf: '公分', err: E(per, [[arc, '只算了弧長，扇形周長還要加 2 個半徑。'], [H.add(arc, rr), '扇形有 2 條半徑，要加兩次。']]) }),
          { r: rr, deg: deg }, { svg: sec(deg, rr + ' cm') });
      } },
      // d3 生活：輪子轉幾圈、繞水池走幾圈
      { k: 'life', d: 3, n: 6, f: function (r, _, i) {
        var kind = i % 3;
        if (kind === 0) {
          var d = H.pick(r, [50, 56, 60, 64, 70]), n = H.ri(r, 10, 60), m = H.div(H.mul(H.mul(PI, d), n), 100);
          return H.Q('腳踏車輪子的直徑是 ' + d + ' 公分，輪子轉了 ' + n + ' 圈，腳踏車前進了幾公尺？（圓周率用 3.14）',
            '轉一圈前進一個圓周長：' + d + '×3.14＝' + D(H.mul(PI, d)) + ' 公分；' + n + ' 圈＝' + D(H.mul(H.mul(PI, d), n)) + ' 公分＝' + D(m) + ' 公尺。',
            H.num(m, { suf: '公尺', err: [[H.mul(H.mul(PI, d), n), '這是公分，要÷100 換成公尺。']] }), { kind: 0, d: d, n: n });
        }
        if (kind === 1) {
          var rr = H.ri(r, 3, 15), k = H.ri(r, 2, 6), t = H.mul(H.mul(PI, 2 * rr), k);
          return H.Q('阿哲沿著半徑 ' + rr + ' 公尺的圓形水池邊走了 ' + k + ' 圈，一共走了幾公尺？（圓周率用 3.14）',
            '一圈＝' + rr + '×2×3.14＝' + D(H.mul(PI, 2 * rr)) + ' 公尺；' + k + ' 圈＝' + D(t) + ' 公尺。',
            H.num(t, { suf: '公尺', err: E(t, [[H.mul(H.mul(PI, rr), k), '半徑要先乘 2 變成直徑。']]) }), { kind: 1, r: rr, k: k });
        }
        var d2 = H.pick(r, [50, 100]), n2 = H.ri(r, 10, 50), dist = H.div(H.mul(H.mul(PI, d2), n2), 100);
        return H.Q('一個直徑 ' + d2 + ' 公分的輪子在地上滾了 ' + D(dist) + ' 公尺，輪子轉了幾圈？（圓周率用 3.14）',
          '轉一圈前進 ' + d2 + '×3.14＝' + D(H.mul(PI, d2)) + ' 公分；' + D(dist) + ' 公尺＝' + D(H.mul(dist, 100)) + ' 公分，' + D(H.mul(dist, 100)) + '÷' + D(H.mul(PI, d2)) + '＝' + n2 + '（圈）。',
          H.num(n2, { suf: '圈' }), { kind: 2, d: d2, m: dist });
      } },
      // d1 選算式（選擇）
      { k: 'fml', d: 1, n: 4, f: function (r, _, i) {
        var x = H.ri(r, 3, 20), byR = i % 2 === 0;
        var ans = byR ? x + '×2×3.14' : x + '×3.14', wrong = byR ? [x + '×3.14', x + '×' + x + '×3.14', x + '×2×2×3.14'] : [x + '×2×3.14', x + '×' + x + '×3.14', x + '×' + x];
        return H.Q((byR ? '半徑' : '直徑') + ' ' + x + ' 公分的圓，圓周長要怎麼算？',
          byR ? '圓周長＝半徑×2×3.14：半徑先乘 2 變直徑，再乘 3.14，所以是 ' + ans + '。' : '圓周長＝直徑×3.14，所以是 ' + ans + '。',
          H.mc(ans, wrong), { x: x, byR: byR });
      } },
      // d3 列出全部：哪些扇形周長超過 T
      { k: 'over', d: 3, n: 4, f: function (r) {
        var per = function (s) { return H.add(H.mul(H.mul(PI, 2 * s.r), H.R(s.deg, 360)), 2 * s.r); }, cs = [], seen = {};
        while (cs.length < 5) { var s = { r: 3 * H.ri(r, 1, 5), deg: H.pick(r, [30, 60, 90, 120, 180]) }, kk = s.r + '|' + s.deg; if (!seen[kk]) { seen[kk] = 1; cs.push(s); } }
        var sorted = cs.slice().sort(function (a, b) { return H.cmp(per(a), per(b)); }), j = H.ri(r, 1, 2), lo = per(sorted[j]), T = Math.floor(lo[0] / lo[1]) + 1;
        if (H.cmp(T, per(sorted[j + 1])) >= 0) return null;
        return H.Q('下面這些扇形（圓周率用 3.14），哪些的周長超過 ' + T + ' 公分？<b>全部選出來。</b>',
          '周長＝弧長＋2 個半徑：' + cs.map(function (s) { return '半徑 ' + s.r + '、' + s.deg + ' 度 → ' + D(per(s)); }).join('；') + '（公分）。',
          H.set(cs, function (s) { return H.cmp(per(s), T) > 0; }, function (s) { return '半徑 ' + s.r + ' 公分的 ' + s.deg + ' 度扇形'; }), { cs: cs, T: T });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
