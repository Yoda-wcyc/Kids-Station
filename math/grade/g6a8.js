/* 六上 單元八 認識速率（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6a8.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma;
  var D = function (x) { return H.fmt(x, 'dec'); };
  var E = function (ans, list) { return list.filter(function (e) { return !H.eq(e[0], ans); }); };
  var PAIRS = [['小明', '阿哲'], ['姐姐', '哥哥'], ['小美', '小華'], ['阿凱', '小芸']];
  // 情境：誰、做什麼、速率名稱、時間單位、距離單位、速率範圍、時間範圍
  var KIND = [
    { who: '小明走路', v: '走', sp: '分速', tu: '分鐘', du: '公尺', s: [50, 90], t: [5, 25] },
    { who: '阿哲騎腳踏車', v: '騎', sp: '分速', tu: '分鐘', du: '公尺', s: [150, 300], t: [5, 30], step: 10 },
    { who: '爸爸開車', v: '開', sp: '時速', tu: '小時', du: '公里', s: [40, 90], t: [2, 5] },
    { who: '姐姐跑步', v: '跑', sp: '秒速', tu: '秒', du: '公尺', s: [3, 8], t: [10, 60] },
    { who: '高鐵列車', v: '行駛', sp: '時速', tu: '小時', du: '公里', s: [240, 300], t: [1, 2], step: 6 }
  ];
  var spd = function (r, k) { var st = k.step || 1; return st * H.ri(r, Math.ceil(k.s[0] / st), Math.floor(k.s[1] / st)); };
  // 速率換成「公尺／時」比大小
  var U = { h: { name: '時速', du: '公里', m: 1000 * 1 }, m: { name: '分速', du: '公尺', m: 60 }, s: { name: '秒速', du: '公尺', m: 3600 } };
  var perH = function (o) { return H.mul(o.x, U[o.u].m); };
  var VEH = ['公車', '機車', '捷運', '小貨車', '火車', '客運'];

  MG.unit({
    id: 'g6a8', pending: '待課本核對',
    cards: [
      { t: '比快慢：時間一樣，走得越遠越快；距離一樣，花的時間越少越快。',
        ex: '5 分鐘內，小明走 350 公尺、阿哲走 400 公尺 → 阿哲比較快。<br>都跑 100 公尺，姐姐 16 秒、哥哥 14 秒 → 哥哥比較快。',
        why: '要比較，就先讓其中一樣（時間或距離）相同，再比另一樣。' },
      { t: '速率＝距離÷時間，就是「每 1 單位時間走多遠」。',
        ex: '腳踏車 8 分鐘騎 1,600 公尺：1600÷8＝200，<b>分速 200 公尺</b>（每分鐘 200 公尺）。<br>每小時走多遠叫時速、每分鐘叫分速、每秒叫秒速。',
        why: '時間和距離都不一樣時，算出「每 1 分鐘走多遠」，就能直接比快慢。' },
      { t: '距離＝速率×時間；時間＝距離÷速率。',
        ex: '時速 60 公里開 3 小時：60×3＝<b>180 公里</b>。<br>分速 75 公尺走 1,500 公尺：1500÷75＝<b>20 分鐘</b>。',
        why: '三個數知道兩個，就能求第三個：速率×時間＝距離，倒過來就是除法。' },
      { t: '速率換單位：時速÷60＝分速，分速÷60＝秒速；公里×1000＝公尺。',
        ex: '時速 72 公里＝每小時 72,000 公尺；÷60 → <b>分速 1,200 公尺</b>；再÷60 → <b>秒速 20 公尺</b>。',
        why: '1 小時＝60 分，1 分＝60 秒。每小時走的，平均分給 60 分鐘，就是每分鐘走的。' },
      { t: '時間單位要和速率一致，分鐘先換成小時。',
        ex: '高鐵時速 300 公里，開 20 分鐘：20 分＝[[20/60]]＝[[1/3]] 小時，300×[[1/3]]＝<b>100 公里</b>。',
        why: '時速是「每小時」，所以時間要用小時算；直接 300×20 會差 60 倍。' }
    ],
    gens: [
      // d1 比快慢
      { k: 'cmp', d: 1, n: 4, f: function (r, _, i) {
        var p = H.pick(r, PAIRS), a, b, q, why, win;
        if (i % 2 === 0) {
          var t = H.ri(r, 3, 10), s1 = H.ri(r, 50, 90), s2 = H.ri(r, 50, 90); if (s1 === s2) return null;
          a = { t: t, d: s1 * t }; b = { t: t, d: s2 * t }; win = s1 > s2 ? p[0] : p[1];
          q = p[0] + '和' + p[1] + '都走了 ' + t + ' 分鐘，' + p[0] + '走 ' + C(a.d) + ' 公尺，' + p[1] + '走 ' + C(b.d) + ' 公尺。誰走得比較快？';
          why = '時間一樣，走得比較遠的比較快：' + win + '。';
        } else {
          var dd = 100 * H.ri(r, 6, 15), t1 = H.ri(r, 8, 20), t2 = H.ri(r, 8, 20); if (t1 === t2) return null;
          a = { t: t1, d: dd }; b = { t: t2, d: dd }; win = t1 < t2 ? p[0] : p[1];
          q = '運動會上，' + p[0] + '和' + p[1] + '都走完 ' + C(dd) + ' 公尺，' + p[0] + '花 ' + t1 + ' 分鐘，' + p[1] + '花 ' + t2 + ' 分鐘。誰走得比較快？';
          why = '距離一樣，花的時間比較少的比較快：' + win + '。';
        }
        return H.Q(q, why, H.mc(win, [p[0], p[1], '一樣快']), { names: p, a: a, b: b });
      } },
      // d1 求速率
      { k: 'spd', d: 1, n: 5, f: function (r, _, i) {
        var k = KIND[i % KIND.length], s = spd(r, k), t = H.ri(r, k.t[0], k.t[1]), d = s * t;
        return H.Q(k.who + ' ' + t + ' ' + k.tu + k.v + '了 ' + C(d) + ' ' + k.du + '，' + k.sp + '是多少' + k.du + '？',
          '速率＝距離÷時間＝' + d + '÷' + t + '＝' + s + '，' + k.sp + ' ' + s + ' ' + k.du + '。',
          H.num(s, { suf: k.du, err: [[d * t, '速率是距離÷時間，不是相乘。']] }), { d: d, t: t });
      } },
      // d1 求距離
      { k: 'dist', d: 1, n: 4, f: function (r, _, i) {
        var k = KIND[(i + 1) % KIND.length], s = spd(r, k), t = H.ri(r, k.t[0], k.t[1]), d = s * t;
        return H.Q(k.who + '的' + k.sp + '是 ' + s + ' ' + k.du + '，' + t + ' ' + k.tu + '可以' + k.v + '多少' + k.du + '？',
          '距離＝速率×時間＝' + s + '×' + t + '＝' + C(d) + '（' + k.du + '）。',
          H.num(d, { suf: k.du, err: [[s + t, '要用乘的：每 1 ' + k.tu + '走 ' + s + '，' + t + ' ' + k.tu + '就是 ' + t + ' 個 ' + s + '。']] }), { s: s, t: t });
      } },
      // d1 求時間
      { k: 'time', d: 1, n: 4, f: function (r, _, i) {
        var k = KIND[(i + 2) % KIND.length], s = spd(r, k), t = H.ri(r, k.t[0], k.t[1]), d = s * t;
        return H.Q(k.who + '的' + k.sp + '是 ' + s + ' ' + k.du + '，要' + k.v + ' ' + C(d) + ' ' + k.du + '，需要幾' + k.tu + '？',
          '時間＝距離÷速率＝' + d + '÷' + s + '＝' + t + '（' + k.tu + '）。',
          H.num(t, { suf: k.tu }), { s: s, d: d });
      } },
      // d1 一步換算：秒速↔分速、分速↔時速（距離單位不變）
      { k: 'c1', d: 1, n: 5, f: function (r, _, i) {
        var kind = i % 3;
        if (kind === 0) { var s = H.ri(r, 2, 25);
          return H.Q('秒速 ' + s + ' 公尺＝分速多少公尺？', '1 分鐘＝60 秒，每秒 ' + s + ' 公尺，60 秒就是 ' + s + '×60＝' + s * 60 + '（公尺）。',
            H.num(s * 60, { suf: '公尺', err: [[H.R(s, 60), '分鐘比秒長，1 分鐘走得比較多，要×60。']] }), { x: s, from: 's', to: 'm' }); }
        if (kind === 1) { var m = 30 * H.ri(r, 2, 40), sv = H.R(m, 60);
          return H.Q('分速 ' + m + ' 公尺＝秒速多少公尺？', '1 分鐘＝60 秒，每秒走 ' + m + '÷60＝' + D(sv) + '（公尺）。',
            H.num(sv, { suf: '公尺', err: [[m * 60, '秒比分鐘短，1 秒走得比較少，要÷60。']] }), { x: m, from: 'm', to: 's' }); }
        var km = H.ri(r, 1, 5);
        return H.Q('分速 ' + km + ' 公里＝時速多少公里？', '1 小時＝60 分，每分 ' + km + ' 公里，60 分就是 ' + km + '×60＝' + km * 60 + '（公里）。',
          H.num(km * 60, { suf: '公里' }), { x: km * 1000, from: 'm', to: 'h' });
      } },
      // d2 兩步換算：時速（公里）↔ 分速／秒速（公尺）
      { k: 'c2', d: 2, n: 5, f: function (r, _, i) {
        var kind = i % 4;
        if (kind === 0) { var h = 3 * H.ri(r, 4, 30), m = H.R(h * 1000, 60);
          return H.Q('時速 ' + h + ' 公里＝分速多少公尺？', h + ' 公里＝' + C(h * 1000) + ' 公尺；÷60＝' + D(m) + '（公尺）。',
            H.num(m, { suf: '公尺', err: [[H.R(h, 60), '還要把公里換成公尺（×1000）。']] }), { x: h, from: 'h', to: 'm' }); }
        if (kind === 1) { var mm = 50 * H.ri(r, 1, 30), hh = H.R(mm * 60, 1000);
          return H.Q('分速 ' + C(mm) + ' 公尺＝時速多少公里？', mm + '×60＝' + C(mm * 60) + ' 公尺；換成公里÷1000＝' + D(hh) + '（公里）。',
            H.num(hh, { suf: '公里', err: [[mm * 60, '這是公尺，要÷1000 換成公里。']] }), { x: mm, from: 'm', to: 'h' }); }
        if (kind === 2) { var h2 = 18 * H.ri(r, 1, 12), s2 = H.R(h2 * 1000, 3600);
          return H.Q('時速 ' + h2 + ' 公里＝秒速多少公尺？', h2 + ' 公里＝' + C(h2 * 1000) + ' 公尺；1 小時＝3600 秒，' + C(h2 * 1000) + '÷3600＝' + D(s2) + '（公尺）。',
            H.num(s2, { suf: '公尺', err: [[H.R(h2 * 1000, 60), '÷60 只換到分速，要再÷60 才是秒速。']] }), { x: h2, from: 'h', to: 's' }); }
        var s3 = H.ri(r, 5, 30), h3 = H.R(s3 * 3600, 1000);
        return H.Q('秒速 ' + s3 + ' 公尺＝時速多少公里？', s3 + '×3600＝' + C(s3 * 3600) + ' 公尺（1 小時）；÷1000＝' + D(h3) + '（公里）。',
          H.num(h3, { suf: '公里', err: [[s3 * 60, '這是分速（公尺）；還要×60 再換成公里。']] }), { x: s3, from: 's', to: 'h' });
      } },
      // d2 時間單位不一致
      { k: 'mix', d: 2, n: 5, f: function (r, _, i) {
        var kind = i % 3;
        if (kind === 0) { var v = 6 * H.ri(r, 5, 15), t = 10 * H.ri(r, 1, 5), d = H.R(v * t, 60);
          return H.Q('機車以時速 ' + v + ' 公里騎了 ' + t + ' 分鐘，騎了多少公里？', t + ' 分＝' + H.fr(t, 60) + ' 小時；' + v + '×' + H.fr(t, 60) + '＝' + D(d) + '（公里）。',
            H.num(d, { suf: '公里', err: [[v * t, '時間是分鐘，要先換成小時（÷60）。']] }), { kind: 0, v: v, t: t }); }
        if (kind === 1) { var s = H.ri(r, 50, 80), hr = H.ri(r, 1, 2), mn = H.pick(r, [10, 15, 20, 30, 45]), tt = hr * 60 + mn;
          return H.Q('小明健走的分速是 ' + s + ' 公尺，走了 ' + hr + ' 小時 ' + mn + ' 分，一共走了多少公尺？', hr + ' 小時 ' + mn + ' 分＝' + tt + ' 分；' + s + '×' + tt + '＝' + C(s * tt) + '（公尺）。',
            H.num(s * tt, { suf: '公尺', err: [[s * (hr + mn), '小時要先換成分鐘（×60）再加。']] }), { kind: 1, s: s, hr: hr, mn: mn }); }
        var v2 = H.pick(r, [40, 60, 80, 90, 120]), mins = H.pick(r, [15, 30, 45, 90, 150]), d2 = v2 * mins / 60;
        if (d2 !== Math.floor(d2)) return null;
        return H.Q('客運以時速 ' + v2 + ' 公里行駛 ' + d2 + ' 公里，要花幾分鐘？', '時間＝' + d2 + '÷' + v2 + '＝' + D(H.R(d2, v2)) + ' 小時＝' + D(H.R(d2, v2)) + '×60＝' + mins + '（分）。',
          H.num(mins, { suf: '分鐘', err: [[H.R(d2, v2), '這是小時，題目問分鐘，要×60。']] }), { kind: 2, v: v2, d: d2 });
      } },
      // d2 列出全部：分速是 S 的人
      { k: 'all', d: 2, n: 4, f: function (r) {
        var S = H.ri(r, 45, 90), ts = H.shuffle([2, 3, 4, 5, 6, 8, 10, 12, 15], r), good = [], bad = [];
        good.push({ t: ts[0], d: S * ts[0] }, { t: ts[1], d: S * ts[1] }); if (r() < 0.5) good.push({ t: ts[2], d: S * ts[2] });
        bad.push({ t: ts[3], d: S * ts[3] + H.pick(r, [10, 20, 30]) }, { t: ts[4], d: S * (ts[4] + 1) }, { t: ts[5], d: (S + 5) * ts[5] });
        var cand = H.shuffle(good.concat(bad.slice(0, 6 - good.length)), r);
        return H.Q('下面是幾位同學走路的紀錄，哪些人的分速剛好是 ' + S + ' 公尺？<b>全部選出來。</b>',
          '分速＝距離÷分鐘數：' + cand.map(function (c) { return C(c.d) + '÷' + c.t + '＝' + D(H.R(c.d, c.t)); }).join('；') + '。',
          H.set(cand, function (c) { return c.d === S * c.t; }, function (c) { return c.t + ' 分鐘走 ' + C(c.d) + ' 公尺'; }), { S: S, cand: cand });
      } },
      // d3 誰最快（不同單位）
      { k: 'fast', d: 3, n: 4, f: function (r, _, i) {
        var names = H.shuffle(VEH, r), os = [], seen = {};
        for (var j = 0; j < 4; j++) {
          var u = j < 3 ? ['h', 'm', 's'][j] : H.pick(r, ['h', 'm', 's']), x = u === 'h' ? H.ri(r, 18, 90) : u === 'm' ? 10 * H.ri(r, 30, 150) : H.ri(r, 5, 25);
          var o = { n: names[j], u: u, x: x }, key = H.fmt(perH(o)); if (seen[key]) return null; seen[key] = 1; os.push(o);
        }
        var fast = i % 2 === 0, sorted = os.slice().sort(function (a, b) { return H.cmp(perH(b), perH(a)) * (fast ? 1 : -1); });
        var show = function (o) { return o.n + '：' + U[o.u].name + ' ' + C(o.x) + ' ' + U[o.u].du; };
        return H.Q('下面哪一個' + (fast ? '最快' : '最慢') + '？',
          '都換成「每小時走幾公尺」再比：' + os.map(function (o) { return o.n + ' ' + C(H.fmt(perH(o))) + ' 公尺'; }).join('；') + '。',
          H.mc(sorted[0], sorted.slice(1), show), { os: os, fast: fast });
      } },
      // d3 高鐵、捷運
      { k: 'trip', d: 3, n: 5, f: function (r, _, i) {
        if (i % 2 === 0) { var v = H.pick(r, [240, 252, 270, 288, 300]), t = H.pick(r, [10, 15, 20, 30, 40, 45, 50]), d = H.R(v * t, 60);
          return H.Q('高鐵列車以時速 ' + v + ' 公里行駛了 ' + t + ' 分鐘，行駛了多少公里？', t + ' 分＝' + H.fr(t, 60) + ' 小時；' + v + '×' + H.fr(t, 60) + '＝' + D(d) + '（公里）。',
            H.num(d, { suf: '公里', err: [[v * t, '時間是分鐘，要先換成小時（÷60）。']] }), { kind: 0, v: v, t: t }); }
        var sp = H.ri(r, 8, 20), s = H.ri(r, 60, 150), D0 = sp * s, h = H.R(sp * 3600, 1000);
        return H.Q('捷運列車在兩站之間行駛 ' + C(D0) + ' 公尺，花了 ' + s + ' 秒。平均速率是時速多少公里？',
          '秒速＝' + C(D0) + '÷' + s + '＝' + sp + ' 公尺；1 小時＝3600 秒，' + sp + '×3600＝' + C(sp * 3600) + ' 公尺＝' + D(h) + ' 公里，時速 ' + D(h) + ' 公里。',
          H.num(h, { suf: '公里', err: [[sp, '這是秒速（公尺），還要換成時速（公里）。'], [sp * 60, '這是分速（公尺），還要×60 再換成公里。']] }), { kind: 1, D: D0, s: s });
      } },
      // d3 同一段路換交通工具
      { k: 'walk', d: 3, n: 4, f: function (r) {
        var a = H.ri(r, 50, 80), t = H.ri(r, 10, 30), D0 = a * t, bs = [120, 150, 160, 180, 200, 240, 250, 300].filter(function (b) { return D0 % b === 0 && D0 / b >= 2; });
        if (!bs.length) return null;
        var b = H.pick(r, bs), t2 = D0 / b;
        return H.Q('小明從家裡走路到學校，分速 ' + a + ' 公尺，要走 ' + t + ' 分鐘。如果改騎腳踏車，分速 ' + b + ' 公尺，要幾分鐘？',
          '先算路程：' + a + '×' + t + '＝' + C(D0) + ' 公尺；再算時間：' + D0 + '÷' + b + '＝' + t2 + '（分鐘）。',
          H.num(t2, { suf: '分鐘', err: E(t2, [[D0, '這是路程，還要÷腳踏車的分速。']]) }), { a: a, t: t, b: b });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
