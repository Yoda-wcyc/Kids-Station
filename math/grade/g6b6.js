/* 六下 單元六 圓形圖（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6b6.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma, CN = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var D = function (n, d) { return H.toDec(H.R(n, d)); };
  var COL = ['#ffb74d', '#90caf9', '#a5d6a7', '#f48fb1', '#ce93d8'];
  // 圓形圖：names、vals（加起來＝tot）、shows（每塊第二行字）。從 12 點鐘方向順時針畫；座標只用來畫圖，答案不從這裡算
  function pie(names, vals, tot, shows, label) {
    var cx = 150, cy = 140, R = 120, a = 0, b = '', lab = '';
    names.forEach(function (nm, i) {
      var a1 = a + vals[i] / tot * 2 * Math.PI, m = (a + a1) / 2, f = function (x) { return x.toFixed(1); };
      b += '<path d="M' + cx + ',' + cy + ' L' + f(cx + R * Math.sin(a)) + ',' + f(cy - R * Math.cos(a)) + ' A' + R + ',' + R + ' 0 ' + (a1 - a > Math.PI ? 1 : 0) + ' 1 ' + f(cx + R * Math.sin(a1)) + ',' + f(cy - R * Math.cos(a1)) + ' Z" fill="' + COL[i % COL.length] + '" stroke="' + H.INK + '" stroke-width="2"/>';
      var lx = f(cx + R * 0.6 * Math.sin(m)), ly = cy - R * 0.6 * Math.cos(m);
      lab += H.txt(lx, f(ly - 3), nm, { fs: 14 }) + H.txt(lx, f(ly + 15), shows[i], { fs: 14 });
      a = a1;
    });
    return H.svg(300, 282, b + '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="' + H.INK + '"/>' + lab, label);
  }
  var TH = [
    ['最喜歡的運動', ['籃球', '躲避球', '羽球', '跑步', '桌球']],
    ['早餐吃什麼', ['飯糰', '三明治', '蛋餅', '麵包', '饅頭']],
    ['上學的方式', ['走路', '腳踏車', '公車', '家長接送']],
    ['最喜歡的水果', ['芭樂', '香蕉', '西瓜', '鳳梨', '芒果']],
    ['假日最常做的事', ['看書', '打球', '逛夜市', '看電影', '畫畫']]
  ];
  // 一份調查：4 項，每項是 5% 的 u 倍（至少 15%），合起來 20 份＝100%
  function survey(r) {
    var th = H.pick(r, TH), names = H.shuffle(th[1], r).slice(0, 4), u = [3, 3, 3, 3], left = 8;
    while (left-- > 0) u[H.ri(r, 0, 3)]++;
    return { th: th[0], names: names, u: u };
  }
  var pctPie = function (s, hide) { return pie(s.names, s.u, 20, s.u.map(function (x, i) { return i === hide ? '？' : x * 5 + '%'; }), s.th + '圓形百分圖'); };
  var degPie = function (s, hide) { return pie(s.names, s.u, 20, s.u.map(function (x, i) { return i === hide ? '？' : x * 18 + '°'; }), s.th + '圓形圖'); };
  var cls = function (r) { return '六年' + CN[H.ri(r, 1, 9)] + '班'; };
  var grp = function (r, N) { return N <= 40 ? cls(r) + '全班 ' + N + ' 人' : H.pick(r, ['全校六年級', '全校高年級', '暑假兒童營']) + '共 ' + N + ' 人'; };
  // 可能性
  var SURE = '一定會發生', MAY = '可能會發生', NO = '不可能發生';
  function judge(outs, e) {   // 出題端：看最大、最小、有沒有
    if (e.t === 'col') { var k = outs.filter(function (x) { return e.cs.indexOf(x) >= 0; }).length; return k === outs.length ? SURE : k ? MAY : NO; }
    var mn = Math.min.apply(null, outs), mx = Math.max.apply(null, outs);
    if (e.t === 'lt') return mx < e.n ? SURE : mn >= e.n ? NO : MAY;
    if (e.t === 'gt') return mn > e.n ? SURE : mx <= e.n ? NO : MAY;
    if (e.t === 'eq') return outs.indexOf(e.n) < 0 ? NO : mn === mx ? SURE : MAY;
    var ev = outs.filter(function (x) { return x % 2 === 0; }).length, want = e.t === 'even' ? ev : outs.length - ev;
    return want === outs.length ? SURE : want ? MAY : NO;
  }
  var evTxt = function (e) { return e.t === 'lt' ? '小於 ' + e.n : e.t === 'gt' ? '大於 ' + e.n : e.t === 'eq' ? '是 ' + e.n : e.t === 'even' ? '是偶數' : '是奇數'; };
  var SPIN = [[2, 4, 6, 8], [1, 3, 5, 7], [1, 2, 3, 4], [5, 10, 15, 20], [3, 6, 9, 12], [10, 20, 30, 40]];
  function numScene(r, dice) {
    var outs = dice ? [1, 2, 3, 4, 5, 6] : H.pick(r, SPIN);
    return { outs: outs, desc: dice ? '擲一顆骰子（點數 1～6）' : '轉盤平分成 4 格，分別寫著 ' + outs.join('、') + '，轉一次', noun: dice ? '擲出的點數' : '轉到的數' };
  }
  function numEv(r, outs) {
    var t = H.pick(r, ['lt', 'gt', 'eq', 'even', 'odd', 'lt', 'gt']), mn = outs[0], mx = outs[outs.length - 1];
    if (t === 'even' || t === 'odd') return { t: t };
    var n = H.pick(r, outs.concat([Math.max(1, mn - 1), mx + 1, mx + 2]));
    return { t: t, n: n };
  }
  MG.unit({
    id: 'g6b6', pending: '待課本核對',
    cards: [
      { t: '圓形百分圖：整個圓是 100%，每一塊是「這一項占全部的百分之幾」，全部加起來是 100%。',
        ex: '最喜歡的運動：籃球 35%、躲避球 25%、羽球 20%，跑步占 100%－35%－25%－20%＝<b>20%</b>。',
        why: '把全部的人當作 1 個圓，每一項分到的大小就看它的百分率；百分率越大，那一塊越大。',
        svg: pie(['籃球', '躲避球', '羽球', '跑步'], [7, 5, 4, 4], 20, ['35%', '25%', '20%', '20%'], '最喜歡的運動圓形百分圖') },
      { t: '從圓形百分圖算人數：這一項的人數＝全部人數×百分率。',
        ex: '全班 40 人，喜歡籃球的占 35%：40×0.35＝<b>14 人</b>。',
        why: '全部人數是基準量，百分率是比率，比較量＝基準量×比率。' },
      { t: '圓形圖用圓心角表示：整個圓 360 度，圓心角＝百分率×360。',
        ex: '籃球 35%：360×0.35＝<b>126 度</b>；躲避球 25%：360×0.25＝<b>90 度</b>。反過來，72 度÷360＝0.2＝20%。',
        why: '100% 對應整圈 360 度，所以 1% 就是 3.6 度。',
        svg: pie(['籃球', '躲避球', '羽球', '跑步'], [7, 5, 4, 4], 20, ['126°', '90°', '72°', '72°'], '最喜歡的運動圓形圖') },
      { t: '自己畫圓形圖：先算百分率（這一項÷全部），再算圓心角（×360），用量角器從圓心畫出來。',
        ex: '調查 40 人，喜歡羽球 8 人：8÷40＝0.2＝<b>20%</b>，圓心角 360×0.2＝<b>72 度</b>。<br>檢查：各項百分率加起來要是 100%，圓心角加起來要是 360 度。',
        why: '百分率和圓心角都是在說「占全部的多少」，只是一個用 100 份、一個用 360 度來分。' },
      { t: '可能性：事情分成「一定會」、「可能會」、「不可能」發生。',
        ex: '擲一顆骰子：點數小於 7 → <b>一定會</b>；點數是偶數 → <b>可能會</b>（2、4、6 會，1、3、5 不會）；擲出 8 點 → <b>不可能</b>。',
        why: '把所有可能的結果都列出來：每一個都符合是「一定會」，有些符合是「可能會」，一個都不符合是「不可能」。' }
    ],
    gens: [
      // d1 報讀圓形百分圖：缺的那一項
      { k: 'readPct', d: 1, n: 5, f: function (r) {
        var s = survey(r), j = H.ri(r, 0, 3), others = s.u.filter(function (x, i) { return i !== j; }).map(function (x) { return x * 5; }), ans = s.u[j] * 5, sum = others.reduce(function (a, b) { return a + b; }, 0);
        return H.Q(cls(r) + '調查全班「' + s.th + '」，畫成下面的圓形百分圖。選「' + s.names[j] + '」的占全班的百分之幾？',
          '整個圓是 100%：100－' + others.join('－') + '＝' + ans + '，所以是 ' + ans + '%。',
          H.num(ans, { suf: '%', err: [[sum, '這是其他項目加起來的，要用 100% 減掉。']] }), { others: others }, { svg: pctPie(s, j) });
      } },
      // d1 百分率 → 圓心角
      { k: 'p2deg', d: 1, n: 5, f: function (r) {
        var s = survey(r), p = 5 * H.ri(r, 1, 19), nm = H.pick(r, s.names);
        return H.Q('「' + s.th + '」的圓形百分圖中，選「' + nm + '」的占 ' + p + '%。改畫成圓形圖時，這一塊的圓心角是幾度？',
          '整個圓 360 度＝100%：360×' + D(p, 100) + '＝' + p * 36 / 10 + '（度）。',
          H.num(p * 36 / 10, { suf: '度', err: [[p, '百分率不是度數：要用 360×百分率。'], [H.R(p * 100, 360), '要用 360×百分率，不是除。']] }), { p: p });
      } },
      // d1 圓心角 → 百分率
      { k: 'deg2p', d: 1, n: 4, f: function (r) {
        var s = survey(r), deg = 18 * H.ri(r, 1, 19), nm = H.pick(r, s.names), p = deg * 10 / 36;
        return H.Q('「' + s.th + '」的圓形圖中，「' + nm + '」那一塊的圓心角是 ' + deg + ' 度。它占全部的百分之幾？',
          '整圈 360 度是全部：' + deg + '÷360＝' + D(deg, 360) + '＝' + p + '%。',
          H.num(p, { suf: '%', err: [[deg, '這是度數，要先÷360 才是占全部的多少。'], [H.R(360, deg), '除反了：要用圓心角÷360。']] }), { deg: deg });
      } },
      // d1 可能性
      { k: 'maybe', d: 1, n: 5, f: function (r) {
        var kind = H.ri(r, 0, 2), sc, e, ev, outs;
        if (kind < 2) { sc = numScene(r, kind === 0); outs = sc.outs; e = numEv(r, outs); ev = sc.noun + evTxt(e); }
        else {
          var cs = H.shuffle(['紅', '白', '藍', '黃', '綠'], r), two = r() < 0.7, a = H.ri(r, 1, 5), b = H.ri(r, 1, 5);
          outs = []; for (var i = 0; i < a; i++) outs.push(cs[0]); if (two) for (i = 0; i < b; i++) outs.push(cs[1]);
          var pick = H.pick(r, two ? [[cs[0]], [cs[1]], [cs[2]], [cs[0], cs[1]]] : [[cs[0]], [cs[2]]]);
          e = { t: 'col', cs: pick }; ev = '摸到' + pick.join('球或') + '球';
          sc = { desc: '袋子裡有 ' + a + ' 顆' + cs[0] + '球' + (two ? '和 ' + b + ' 顆' + cs[1] + '球' : '') + '，不看袋子隨便摸一顆' };
        }
        var ans = judge(outs, e);
        return H.Q(sc.desc + '，「' + ev + '」。這件事是一定會發生、可能會發生，還是不可能發生？',
          (e.t === 'col' ? '袋子裡只有' + outs.filter(function (x, i) { return outs.indexOf(x) === i; }).join('球和') + '球' : '所有可能的結果：' + outs.join('、')) + '。' +
          (ans === SURE ? '每一個結果都符合，所以一定會發生。' : ans === NO ? '沒有一個結果符合，所以不可能發生。' : '有的結果符合、有的不符合，所以可能會發生。'),
          H.mc(ans, [SURE, MAY, NO]), { outs: outs, e: e });
      } },
      // d2 從圓形百分圖算人數
      { k: 'count', d: 2, n: 5, f: function (r) {
        var s = survey(r), N = H.pick(r, [40, 120, 160, 200, 240, 280, 300, 400]), j = H.ri(r, 0, 3), p = s.u[j] * 5, c = N * p / 100;
        return H.Q(grp(r, N) + '調查「' + s.th + '」，結果畫成下面的圓形百分圖。選「' + s.names[j] + '」的有幾人？',
          '人數＝全部×百分率：' + N + '×' + D(p, 100) + '＝' + c + '（人）。',
          H.num(c, { suf: '人', err: [[p, '這是百分率，還要乘全部的 ' + N + ' 人。']] }), { N: N, p: p }, { svg: pctPie(s, -1) });
      } },
      // d2 從圓形圖（圓心角）算人數
      { k: 'degCount', d: 2, n: 4, f: function (r) {
        var s = survey(r), N = H.pick(r, [40, 120, 180, 200, 240, 360, 400]), j = H.ri(r, 0, 3), deg = s.u[j] * 18, c = N * deg / 360;
        return H.Q(grp(r, N) + '調查「' + s.th + '」，結果畫成下面的圓形圖（標的是圓心角）。選「' + s.names[j] + '」的有幾人？',
          deg + ' 度占整圈的 ' + deg + '÷360＝' + D(deg, 360) + '，人數＝' + N + '×' + D(deg, 360) + '＝' + c + '（人）。',
          H.num(c, { suf: '人', err: [[deg, '這是圓心角的度數，要先換成占全部的多少，再乘人數。']] }), { N: N, deg: deg }, { svg: degPie(s, -1) });
      } },
      // d2 由資料算百分率和圓心角
      { k: 'make', d: 2, n: 5, f: function (r) {
        var s = survey(r), N = H.pick(r, [20, 40, 60, 80, 100, 200]), cs = s.u.map(function (x) { return N * x / 20; }), j = H.ri(r, 0, 3), p = s.u[j] * 5;
        return H.Q('阿哲調查了 ' + N + ' 位同學「' + s.th + '」：' + s.names.map(function (n, i) { return n + ' ' + cs[i] + ' 人'; }).join('、') + '。要畫成圓形圖，「' + s.names[j] + '」的百分率和圓心角各是多少？',
          '百分率＝' + cs[j] + '÷' + N + '＝' + D(cs[j], N) + '＝' + p + '%；圓心角＝360×' + D(p, 100) + '＝' + p * 36 / 10 + ' 度。',
          H.nums([p, p * 36 / 10], ['%', '度'], { err: [[cs[j], '這是人數，要先除以全部的 ' + N + ' 人。']] }), { N: N, c: cs[j] });
      } },
      // d2 列出全部：哪些一定會／可能會／不可能
      { k: 'maybeSet', d: 2, n: 4, f: function (r) {
        var sc = numScene(r, r() < 0.5), want = H.pick(r, [SURE, MAY, NO]);
        for (var t = 0; t < 60; t++) {
          var evs = [], seen = {};
          while (evs.length < 5) { var e = numEv(r, sc.outs), k = evTxt(e); if (!seen[k]) { seen[k] = 1; evs.push(e); } }
          var hit = evs.filter(function (e) { return judge(sc.outs, e) === want; }).length;
          if (hit >= 2 && hit <= 4) break;
        }
        if (hit < 2 || hit > 4) return null;
        return H.Q(sc.desc + '。下面哪些事情是「' + want + '」？<b>全部選出來。</b>',
          '所有可能的結果：' + sc.outs.join('、') + '。' + evs.map(function (e) { return evTxt(e) + ' → ' + judge(sc.outs, e).slice(0, 3); }).join('；') + '。',
          H.set(evs, function (e) { return judge(sc.outs, e) === want; }, function (e) { return sc.noun + evTxt(e); }), { outs: sc.outs, want: want });
      } },
      // d3 兩項相差幾人
      { k: 'diff', d: 3, n: 4, f: function (r) {
        var s = survey(r), N = H.pick(r, [40, 120, 160, 200, 240, 280, 300, 400]), ij = H.shuffle([0, 1, 2, 3], r), a = ij[0], b = ij[1];
        if (s.u[a] === s.u[b]) return null;
        if (s.u[a] < s.u[b]) { var t = a; a = b; b = t; }
        var pa = s.u[a] * 5, pb = s.u[b] * 5, ans = N * (pa - pb) / 100;
        return H.Q(grp(r, N) + '調查「' + s.th + '」，結果畫成下面的圓形百分圖。選「' + s.names[a] + '」的比選「' + s.names[b] + '」的多幾人？',
          '相差 ' + pa + '%－' + pb + '%＝' + (pa - pb) + '%，' + N + '×' + D(pa - pb, 100) + '＝' + ans + '（人）。也可以分別算：' + N * pa / 100 + '－' + N * pb / 100 + '＝' + ans + '。',
          H.num(ans, { suf: '人', err: [[pa - pb, '這是百分率的差，還要乘全部的 ' + N + ' 人。']] }), { N: N, pa: pa, pb: pb }, { svg: pctPie(s, -1) });
      } },
      // d3 已知一項人數，求全部或另一項
      { k: 'rev', d: 3, n: 4, f: function (r, _, i) {
        var s = survey(r), N = H.pick(r, [40, 120, 160, 200, 240, 280, 300, 400]), ij = H.shuffle([0, 1, 2, 3], r), a = ij[0], b = ij[1], pa = s.u[a] * 5, pb = s.u[b] * 5, ca = N * pa / 100, cb = N * pb / 100;
        var head = '調查「' + s.th + '」的結果畫成下面的圓形百分圖，選「' + s.names[a] + '」的有 ' + ca + ' 人。';
        if (i % 2 === 0) return H.Q(head + '一共調查了幾人？',
          '全部是基準量：全部＝' + ca + '÷' + D(pa, 100) + '＝' + N + '（人）。',
          H.num(N, { suf: '人', err: [[H.R(ca * pa, 100), '全部不知道，要用人數÷百分率，不是乘。']] }), { kind: 0, ca: ca, pa: pa }, { svg: pctPie(s, -1) });
        return H.Q(head + '選「' + s.names[b] + '」的有幾人？',
          '先求全部：' + ca + '÷' + D(pa, 100) + '＝' + N + '（人）；再算：' + N + '×' + D(pb, 100) + '＝' + cb + '（人）。',
          H.num(cb, { suf: '人', err: [[N, '這是全部的人數，還要乘「' + s.names[b] + '」的 ' + pb + '%。']] }), { kind: 1, ca: ca, pa: pa, pb: pb }, { svg: pctPie(s, -1) });
      } },
      // d3 圓形圖缺一塊的圓心角，再算人數
      { k: 'degMiss', d: 3, n: 3, f: function (r) {
        var s = survey(r), N = H.pick(r, [40, 120, 180, 200, 240, 360, 400]), j = H.ri(r, 0, 3), others = s.u.filter(function (x, i) { return i !== j; }).map(function (x) { return x * 18; }), deg = s.u[j] * 18, c = N * deg / 360;
        return H.Q(grp(r, N) + '調查「' + s.th + '」，畫成下面的圓形圖（標的是圓心角）。選「' + s.names[j] + '」的有幾人？',
          '先求缺的圓心角：360－' + others.join('－') + '＝' + deg + ' 度；再算人數：' + N + '×' + deg + '÷360＝' + c + '（人）。',
          H.num(c, { suf: '人', err: [[deg, '這是圓心角的度數，還要換算成人數。']] }), { N: N, others: others }, { svg: degPie(s, j) });
      } },
      // d3 列出全部：看圓形百分圖，哪些說法對（人數、圓心角）
      { k: 'pieSet', d: 3, n: 4, f: function (r) {
        var s = survey(r), N = H.pick(r, [40, 120, 160, 200, 240, 280, 300, 400]), ps = s.u.map(function (x) { return x * 5; }), sts = [], seen = {};
        var right = function (ty, i) { return ty === 'c' ? N * ps[i] / 100 : ps[i] * 36 / 10; };
        for (var t = 0; t < 60 && sts.length < 5; t++) {
          var i = H.ri(r, 0, 3), ty = H.pick(r, ['c', 'd']), good = sts.length < 2 ? true : sts.length === 2 ? false : r() < 0.5, val = right(ty, i);
          if (!good) val = ty === 'c' ? H.pick(r, [ps[i], val + N / 20, val * 2]) : H.pick(r, [ps[i], val + 18, val * 2]);
          if (seen[ty + i] || (!good && val === right(ty, i))) continue;
          seen[ty + i] = 1; sts.push({ t: ty, i: i, v: val });
        }
        if (sts.length < 5) return null;
        return H.Q(grp(r, N) + '調查「' + s.th + '」，結果畫成下面的圓形百分圖。下面哪些說法是對的？<b>全部選出來。</b>',
          s.names.map(function (n, i) { return n + '：' + N + '×' + D(ps[i], 100) + '＝' + right('c', i) + ' 人，圓心角 360×' + D(ps[i], 100) + '＝' + right('d', i) + ' 度'; }).join('；') + '。',
          H.set(H.shuffle(sts, r), function (o) { return o.v === right(o.t, o.i); }, function (o) { return o.t === 'c' ? '選「' + s.names[o.i] + '」的有 ' + o.v + ' 人' : '「' + s.names[o.i] + '」的圓心角是 ' + o.v + ' 度'; }),
          { N: N, ps: ps }, { svg: pctPie(s, -1) });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
