/* 五下 單元九 時間的乘除（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b9.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma;
  // 2 時 5 分、25 分、3 時（0 的那一段不寫）
  var two = function (a, b, u1, u2) { return (a ? a + ' ' + u1 : '') + (a && b ? ' ' : '') + (b || !a ? b + ' ' + u2 : ''); };
  var hm = function (h, m) { return two(h, m, '時', '分'); };
  var T = function (min) { return hm(Math.floor(min / 60), min % 60); };
  var HM = function (min) { return [Math.floor(min / 60), min % 60]; };
  var PEOPLE = ['小明', '阿哲', '姐姐', '哥哥', '妹妹'];
  // 選項值：{u:'分'|'秒', x} 或 {op:'×'|'÷', h, m, n}
  var show = function (o) { return o.u ? C(o.x) + ' ' + o.u : hm(o.h, o.m) + o.op + o.n; };
  MG.unit({
    id: 'g5b9', pending: '待課本核對',
    cards: [
      { t: '1 日＝24 時，1 時＝60 分，1 分＝60 秒。時間是「滿 60 進 1」，不是滿 100。',
        ex: '2 時 15 分＝2×60＋15＝<b>135 分</b>；200 秒：200÷60＝3 餘 20，所以是 <b>3 分 20 秒</b>。',
        why: '時、分、秒之間差 60 倍，日和時之間差 24 倍，所以換算要乘或除以 60（或 24），不能用 100。' },
      { t: '時間乘整數：時、分分開乘，分滿 60 就進 1 時。',
        ex: '1 時 35 分×3：1×3＝3 時，35×3＝105 分＝1 時 45 分 → 合起來 <b>4 時 45 分</b>。',
        why: '105 分裡面有一個 60 分，可以換成 1 時；跟加法進位一樣，只是滿 60 才進。' },
      { t: '時間除以整數：先把時換成分，再一起除。',
        ex: '5 時 20 分÷4：5 時 20 分＝300＋20＝320 分，320÷4＝80 分＝<b>1 時 20 分</b>。',
        why: '也可以先 5÷4＝1 時餘 1 時，餘的 1 時＝60 分，60＋20＝80 分，80÷4＝20 分，答案一樣是 1 時 20 分。' },
      { t: '生活應用：先算出「一段時間」，再看要乘幾次或平分成幾份。',
        ex: '每天從上午 8 時工作到下午 4 時 30 分，中午休息 1 時：一天 8 時 30 分扣掉 1 時＝7 時 30 分；做 5 天 → 7 時 30 分×5＝35 時 150 分＝<b>37 時 30 分</b>。',
        why: '下午 4 時就是 16 時，先換成 24 時制再相減比較不會錯。' }
    ],
    gens: [
      // d1 幾時幾分×整數
      { k: 'mulHM', d: 1, n: 6, f: function (r) {
        var n = H.ri(r, 2, 6), h = H.ri(r, 0, 3), m = H.ri(r, Math.ceil(60 / n), 55), t = (h * 60 + m) * n, c = Math.floor(m * n / 60);
        return H.Q(hm(h, m) + '×' + n + '＝幾時幾分？',
          '分開乘：' + (h ? h + '×' + n + '＝' + h * n + ' 時，' : '') + m + '×' + n + '＝' + m * n + ' 分＝' + hm(c, m * n % 60) + '。進位後共 ' + Math.floor(t / 60) + ' 時 ' + t % 60 + ' 分。',
          H.nums(HM(t), ['時', '分'], { err: [[m * n, '分滿 60 要進 1 時：' + m * n + ' 分＝' + hm(c, m * n % 60) + '。']] }), { h: h, m: m, n: n });
      } },
      // d1 幾分幾秒×整數
      { k: 'mulMS', d: 1, n: 4, f: function (r) {
        var n = H.ri(r, 2, 6), m = H.ri(r, 1, 8), s = H.ri(r, Math.ceil(60 / n), 55), t = (m * 60 + s) * n, c = Math.floor(s * n / 60);
        return H.Q(two(m, s, '分', '秒') + '×' + n + '＝幾分幾秒？',
          '分開乘：' + m + '×' + n + '＝' + m * n + ' 分，' + s + '×' + n + '＝' + s * n + ' 秒＝' + two(c, s * n % 60, '分', '秒') + '。進位後共 ' + Math.floor(t / 60) + ' 分 ' + t % 60 + ' 秒。',
          H.nums(HM(t), ['分', '秒'], { err: [[s * n, '秒滿 60 要進 1 分：' + s * n + ' 秒＝' + two(c, s * n % 60, '分', '秒') + '。']] }), { m: m, s: s, n: n });
      } },
      // d1 幾時幾分÷整數（整除）
      { k: 'divHM', d: 1, n: 5, f: function (r) {
        var n = H.ri(r, 2, 6), rh = H.ri(r, 1, 3), rm = H.ri(r, 5, 55), t = (rh * 60 + rm) * n, th = Math.floor(t / 60), tm = t % 60, err = [];
        if (Math.floor(th / n) !== rh) err.push([Math.floor(th / n), '時除不完的部分要換成分（1 時＝60 分），再和分一起除。']);
        return H.Q(hm(th, tm) + '÷' + n + '＝幾時幾分？',
          '先把時換成分：' + hm(th, tm) + '＝' + th + '×60' + (tm ? '＋' + tm : '') + '＝' + t + ' 分；' + t + '÷' + n + '＝' + t / n + ' 分＝' + hm(rh, rm) + '。',
          H.nums([rh, rm], ['時', '分'], { err: err }), { th: th, tm: tm, n: n });
      } },
      // d1 換算：時分↔分、日時→時、秒→分秒
      { k: 'conv', d: 1, n: 5, f: function (r, _, i) {
        var kind = i % 4, a, b, N;
        if (kind === 0) {
          a = H.ri(r, 1, 5); b = H.ri(r, 1, 59);
          return H.Q(hm(a, b) + '＝幾分？', '1 時＝60 分：' + a + '×60＋' + b + '＝' + (a * 60 + b) + '（分）。',
            H.num(a * 60 + b, { suf: '分', err: [[a * 100 + b, '1 時是 60 分，不是 100 分。']] }), { kind: kind, a: a, b: b });
        }
        if (kind === 1) {
          N = H.ri(r, 65, 400); if (N % 60 === 0) N += 7;
          return H.Q(N + ' 分＝幾時幾分？', N + '÷60＝' + Math.floor(N / 60) + ' 餘 ' + N % 60 + '，所以是 ' + Math.floor(N / 60) + ' 時 ' + N % 60 + ' 分。',
            H.nums(HM(N), ['時', '分'], { err: [[N % 100, '1 時是 60 分，要除以 60，不是看百位。']] }), { kind: kind, N: N });
        }
        if (kind === 2) {
          a = H.ri(r, 1, 4); b = H.ri(r, 1, 23);
          return H.Q(two(a, b, '日', '時') + '＝幾時？', '1 日＝24 時：' + a + '×24＋' + b + '＝' + (a * 24 + b) + '（時）。',
            H.num(a * 24 + b, { suf: '時', err: [[a * 12 + b, '1 日是 24 時，不是 12 時。'], [a * 60 + b, '1 日是 24 時；60 是時和分之間的換算。']] }), { kind: kind, a: a, b: b });
        }
        N = H.ri(r, 65, 600); if (N % 60 === 0) N += 11;
        return H.Q(N + ' 秒＝幾分幾秒？', N + '÷60＝' + Math.floor(N / 60) + ' 餘 ' + N % 60 + '，所以是 ' + Math.floor(N / 60) + ' 分 ' + N % 60 + ' 秒。',
          H.nums(HM(N), ['分', '秒']), { kind: kind, N: N });
      } },
      // d2 每天做幾分，連續幾天共幾時幾分
      { k: 'daily', d: 2, n: 5, f: function (r) {
        var who = H.pick(r, PEOPLE), act = H.pick(r, [['練琴', 20, 50], ['跳繩', 15, 30], ['閱讀', 25, 55], ['騎腳踏車', 30, 55], ['寫功課', 35, 55]]), m = H.ri(r, act[1], act[2]), days = H.pick(r, [5, 6, 7, 10, 12, 14]), t = m * days;
        return H.Q(who + '每天' + act[0] + ' ' + m + ' 分，連續 ' + days + ' 天，一共' + act[0] + '幾時幾分？',
          m + '×' + days + '＝' + t + ' 分；' + t + '÷60＝' + Math.floor(t / 60) + ' 餘 ' + t % 60 + '，所以是 ' + T(t) + '。',
          H.nums(HM(t), ['時', '分'], { err: [[t, '算出來是 ' + t + ' 分，還要換成幾時幾分（60 分＝1 時）。']] }), { m: m, days: days });
      } },
      // d2 平均做一個花幾分
      { k: 'share', d: 2, n: 5, f: function (r) {
        var who = H.pick(r, PEOPLE), it = H.pick(r, [['做了', '個黏土作品'], ['包了', '份禮物'], ['畫了', '張卡片'], ['組裝了', '台模型車']]), per = H.ri(r, 15, 50), n = H.ri(r, 4, 8), t = per * n, h = Math.floor(t / 60), m = t % 60;
        return H.Q(who + it[0] + ' ' + n + ' ' + it[1] + '，一共花了 ' + hm(h, m) + '。平均每' + it[1].charAt(0) + '花幾分？',
          '先換成分：' + hm(h, m) + '＝' + h + '×60' + (m ? '＋' + m : '') + '＝' + t + ' 分；' + t + '÷' + n + '＝' + per + '（分）。',
          H.num(per, { suf: '分', err: [[H.R(h * 100 + m, n), '1 時是 60 分，不是 100 分：要先把時換成分再除。']] }), { h: h, m: m, n: n });
      } },
      // d2 哪一個算式的時間最長／最短
      { k: 'cmpT', d: 2, n: 4, f: function (r, _, i) {
        var its = [], seen = {};
        while (its.length < 6) {
          var op = r() < 0.5 ? '×' : '÷', n = H.ri(r, 2, 5), o, val;
          if (op === '×') { o = { op: op, h: H.ri(r, 0, 2), m: H.ri(r, 5, 55), n: n }; val = (o.h * 60 + o.m) * n; }
          else { val = H.ri(r, 20, 150); o = { op: op, h: Math.floor(val * n / 60), m: val * n % 60, n: n }; }
          if (!seen[val]) { seen[val] = 1; its.push({ o: o, val: val }); }
        }
        var big = i % 2 === 0;
        its.sort(function (x, y) { return big ? y.val - x.val : x.val - y.val; });
        return H.Q('下面哪一個算式算出來的時間' + (big ? '最長' : '最短') + '？',
          '一個一個算：' + its.map(function (x) { return show(x.o) + '＝' + T(x.val); }).join('；') + '。',
          H.mc(its[0].o, its.slice(1).map(function (x) { return x.o; }), show), { big: big });
      } },
      // d2 列出全部：和 h 時 m 分一樣長的
      { k: 'same', d: 2, n: 4, f: function (r) {
        var h = H.ri(r, 1, 4), m = H.pick(r, [10, 15, 20, 30, 40, 45, 50]), t = h * 60 + m;
        var ns = [2, 3, 4, 5].filter(function (x) { return t % x === 0; }), n = H.pick(r, ns), n2 = H.ri(r, 2, 4), part = t / n;
        var good = [{ u: '分', x: t }, { u: '秒', x: t * 60 }, { op: '×', h: Math.floor(part / 60), m: part % 60, n: n }, { op: '÷', h: Math.floor(t * n2 / 60), m: t * n2 % 60, n: n2 }];
        var badO = [{ u: '分', x: h * 100 + m }, { u: '秒', x: t * 100 }, { u: '分', x: t + H.pick(r, [10, 30]) }, { op: '×', h: Math.floor(part / 60), m: part % 60, n: n + 1 }];
        var g = H.shuffle(good, r).slice(0, H.ri(r, 2, 3)), cand = H.shuffle(g.concat(H.shuffle(badO, r).slice(0, 5 - g.length)), r);
        return H.Q('下面哪些和 ' + hm(h, m) + '一樣長？<b>全部選出來。</b>',
          hm(h, m) + '＝' + t + ' 分＝' + C(t * 60) + ' 秒。算式要先算出來再比：' + good.slice(2).map(function (o) { return show(o) + '＝' + T(t); }).join('；') + '。',
          H.set(cand, function (o) { return good.some(function (x) { return JSON.stringify(x) === JSON.stringify(o); }); }, show), { h: h, m: m });
      } },
      // d3 每天工作時間×天數（扣午休）
      { k: 'work', d: 3, n: 4, f: function (r) {
        var who = H.pick(r, ['爸爸', '媽媽', '阿姨', '叔叔']), a = H.ri(r, 7, 9), b = H.ri(r, 0, 11) * 5, c = H.ri(r, 4, 6), d = H.ri(r, 0, 11) * 5, rest = H.pick(r, [30, 60, 90]), days = H.ri(r, 3, 6);
        var span = (12 + c) * 60 + d - (a * 60 + b), daily = span - rest, tot = daily * days;
        return H.Q(who + '每天從上午 ' + hm(a, b) + '上班，到下午 ' + hm(c, d) + '下班，中午休息 ' + T(rest) + '。一週上班 ' + days + ' 天，一共工作幾時幾分？',
          '下午 ' + hm(c, d) + ' 就是 ' + hm(12 + c, d) + '：一天從上班到下班 ' + T(span) + '，扣掉休息 ' + T(rest) + ' → ' + T(daily) + '；' + T(daily) + '×' + days + '＝' + T(tot) + '。',
          H.nums(HM(tot), ['時', '分'], { err: [[Math.floor(span * days / 60), '別忘了每天要扣掉中午休息的 ' + T(rest) + '。']] }), { a: a, b: b, c: c, d: d, rest: rest, days: days });
      } },
      // d3 公車每隔幾分一班，第 n 班幾時幾分
      { k: 'trip', d: 3, n: 4, f: function (r) {
        var iv = H.pick(r, [8, 10, 12, 15, 20, 25]), a = H.ri(r, 5, 6), b = H.ri(r, 0, 5) * 10, n = H.ri(r, 6, 20), start = a * 60 + b, end = start + (n - 1) * iv;
        if (end >= 12 * 60) return null;
        var car = H.pick(r, ['某條公車路線', '社區接駁車', '觀光小火車']);
        return H.Q(car + '每 ' + iv + ' 分發一班車，第 1 班在上午 ' + hm(a, b) + '發車。第 ' + n + ' 班車是上午幾時幾分發車？',
          '第 1 班到第 ' + n + ' 班，中間只隔了 ' + (n - 1) + ' 次：' + iv + '×' + (n - 1) + '＝' + (n - 1) * iv + ' 分＝' + T((n - 1) * iv) + '。上午 ' + hm(a, b) + ' 再過 ' + T((n - 1) * iv) + ' → 上午 ' + T(end) + '。',
          H.nums(HM(end), ['時', '分'], { err: [[(start + n * iv) % 60, '第 1 班就是首班車，到第 ' + n + ' 班只隔了 ' + (n - 1) + ' 次，不是 ' + n + ' 次。']] }), { a: a, b: b, iv: iv, n: n });
      } },
      // d3 幾日幾時平分成 n 段
      { k: 'days', d: 3, n: 3, f: function (r) {
        var n = H.ri(r, 4, 8), ph = H.ri(r, 6, 12), pm = H.pick(r, [0, 10, 20, 30, 40, 50]), per = ph * 60 + pm, tot = per * n;
        var dd = Math.floor(tot / 1440), hh = Math.floor(tot % 1440 / 60), mm = tot % 60, s = dd + ' 日' + (hh ? ' ' + hh + ' 時' : '') + (mm ? ' ' + mm + ' 分' : '');
        var q = H.pick(r, ['學校露營活動共 ' + s + '，由 ' + n + ' 組輪流值班，每組值班的時間一樣長。每組值班幾時幾分？', '一台機器連續運轉 ' + s + '，平均分成 ' + n + ' 個一樣長的時段。每個時段是幾時幾分？']);
        return H.Q(q, '先換成分：' + s + '＝' + dd + '×24×60' + (hh ? '＋' + hh + '×60' : '') + (mm ? '＋' + mm : '') + '＝' + C(tot) + ' 分；' + C(tot) + '÷' + n + '＝' + per + ' 分＝' + ph + ' 時 ' + pm + ' 分。',
          H.nums([ph, pm], ['時', '分']), { dd: dd, hh: hh, mm: mm, n: n });
      } },
      // d1（選擇）時分→分、分秒→秒
      { k: 'unitMc', d: 1, n: 4, f: function (r, _, i) {
        var a = H.ri(r, 1, 4), b = H.ri(r, 5, 55), sec = i % 2 === 1, u = sec ? '秒' : '分', ans = a * 60 + b;
        return H.Q((sec ? two(a, b, '分', '秒') : hm(a, b)) + '＝幾' + u + '？',
          '1 ' + (sec ? '分' : '時') + '＝60 ' + u + '：' + a + '×60＋' + b + '＝' + ans + '（' + u + '）。',
          H.mc(ans, [a * 100 + b, a * 60, a * 60 + b + 60, a + b], function (x) { return x + ' ' + u; }), { a: a, b: b });
      } },
      // d3（列舉）哪些時刻有車發車
      { k: 'schedSet', d: 3, n: 4, f: function (r) {
        var iv = H.pick(r, [8, 10, 12, 15, 20, 25]), a = H.ri(r, 6, 7), b = H.ri(r, 0, 5) * 10, start = a * 60 + b, ks = H.shuffle([2, 3, 4, 5, 6, 7, 8, 9, 10], r);
        var good = ks.slice(0, H.ri(r, 2, 3)).map(function (k) { return start + k * iv; }), bad = ks.slice(3, 6).map(function (k) { return start + k * iv + H.pick(r, [5, -5, 3]); });
        if (start + 10 * iv >= 12 * 60) return null;   // 都要在上午
        var cand = H.shuffle(good.concat(bad.slice(0, 5 - good.length)), r).map(function (t) { return { h: Math.floor(t / 60), m: t % 60 }; });
        var showT = function (o) { return '上午 ' + hm(o.h, o.m); };
        return H.Q('社區接駁車每 ' + iv + ' 分發一班車，第 1 班在上午 ' + hm(a, b) + '發車。下面哪些時刻會有車發車？<b>全部選出來。</b>',
          '從上午 ' + hm(a, b) + '開始，每次加 ' + iv + ' 分：' + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (k) { return T(start + k * iv); }).join('、') + '……其他時刻不在表上。',
          H.set(cand, function (o) { return good.indexOf(o.h * 60 + o.m) >= 0; }, showT), { a: a, b: b, iv: iv });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
