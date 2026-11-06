/* 五下 單元一 體積（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g5b1.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma;
  MG.unit({
    id: 'g5b1', pending: '待課本核對',
    cards: [
      { t: '體積＝東西佔了多少空間。用「邊長 1 公分的小正方體」來數，一個就是 1 立方公分。',
        ex: '用 1 立方公分的積木排成長 4 個、寬 3 個、高 2 層：<br>一層有 4×3＝12 個，疊 2 層 → 12×2＝24 個 → 體積 <b>24 立方公分</b>。',
        why: '立方公分寫成 cm³，右上角的 3 表示「長、寬、高三個方向」。', svg: H.box(120, 60, 50, ['4 個', '3 個', '2 層']) },
      { t: '長方體的體積＝長×寬×高。',
        ex: '長 8 公分、寬 5 公分、高 3 公分的長方體：8×5×3＝<b>120 立方公分</b>。',
        why: '底面一層可以排「長×寬」個 1 立方公分，高有幾公分就疊幾層，所以再乘高。', svg: H.box(140, 80, 50, ['長 8 cm', '寬 5 cm', '高 3 cm']) },
      { t: '正方體的體積＝邊長×邊長×邊長。',
        ex: '邊長 6 公分的正方體：6×6×6＝36×6＝<b>216 立方公分</b>。',
        why: '正方體的長、寬、高一樣長，所以就是三個邊長相乘。' },
      { t: '1 立方公尺＝邊長 1 公尺的正方體＝1,000,000 立方公分。',
        ex: '1 公尺＝100 公分，所以 1 立方公尺＝100×100×100＝1,000,000 立方公分。<br>2.5 立方公尺＝2.5×1,000,000＝<b>2,500,000 立方公分</b>。',
        why: '長、寬、高各變成 100 倍，體積就是 100×100×100＝100 萬倍，不是 100 倍。' },
      { t: '形狀不是長方體？切成幾個長方體相加，或補成大長方體再減掉多的。',
        ex: 'L 形：把它切成「10×4×5」和「4×4×5」兩塊：200＋80＝<b>280 立方公分</b>。<br>也可以補成 10×8×5＝400，再減掉缺的 6×4×5＝120：400－120＝280，一樣。',
        why: '體積可以拆開再加起來，怎麼切答案都一樣，所以可以用另一種切法驗算。' }
    ],
    gens: [
      // d1 數積木：一層 a×b 個，疊 c 層
      { k: 'cube', d: 1, n: 4, f: function (r) {
        var a = H.ri(r, 2, 6), b = H.ri(r, 2, 5), c = H.ri(r, 2, 4), v = a * b * c;
        return H.Q('用 1 立方公分的小積木排成長 ' + a + ' 個、寬 ' + b + ' 個、高 ' + c + ' 層的長方體。體積是幾立方公分？',
          '一層有 ' + a + '×' + b + '＝' + a * b + ' 個，疊 ' + c + ' 層：' + a * b + '×' + c + '＝' + v + '，所以是 ' + v + ' 立方公分。',
          H.num(v, { suf: '立方公分', err: [[a * b, '這只是一層的個數，還要乘層數。'], [a + b + c, '體積要用乘的，不是加。']] }), { a: a, b: b, c: c },
          { svg: H.box(a * 22, b * 22, c * 22, [a + ' 個', b + ' 個', c + ' 層']) });
      } },
      // d1 長方體
      { k: 'box', d: 1, n: 6, f: function (r) {
        var l = H.ri(r, 4, 15), w = H.ri(r, 2, 9), h = H.ri(r, 2, 10), v = l * w * h;
        return H.Q('長方體的長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分，體積是幾立方公分？',
          '長×寬×高＝' + l + '×' + w + '×' + h + '＝' + v + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: [[l + w + h, '長、寬、高要相乘，不是相加。'], [l * w, '這是底面積，還要乘高。']] }), { l: l, w: w, h: h });
      } },
      // d1 正方體
      { k: 'cubic', d: 1, n: 5, f: function (r) {
        var s = H.ri(r, 3, 12), v = s * s * s;
        return H.Q('邊長 ' + s + ' 公分的正方體，體積是幾立方公分？',
          '邊長×邊長×邊長＝' + s + '×' + s + '×' + s + '＝' + s * s + '×' + s + '＝' + v + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: [[s * s, '這是一個面的面積，還要再乘一次邊長。'], [s * 3, '不是乘 3，是三個邊長相乘。']] }), { s: s });
      } },
      // d2 已知體積求高
      { k: 'high', d: 2, n: 5, f: function (r) {
        var l = H.ri(r, 4, 12), w = H.ri(r, 3, 8), h = H.ri(r, 2, 9), v = l * w * h;
        return H.Q('長方體的體積是 ' + v + ' 立方公分，長 ' + l + ' 公分、寬 ' + w + ' 公分，高是幾公分？',
          '長×寬×高＝體積，所以高＝體積÷(長×寬)＝' + v + '÷' + l * w + '＝' + h + '（公分）。',
          H.num(h, { suf: '公分', err: [[v / l, '只除以長還不夠，要除以「長×寬」。']] }), { v: v, l: l, w: w });
      } },
      // d2 立方公尺 ↔ 立方公分
      { k: 'm3', d: 2, n: 5, f: function (r, _, i) {
        var t = H.ri(r, 1, 45), a = H.R(t, 10);   // 0.1～4.5 立方公尺
        if (i % 2) {
          var cm = t * 100000;
          return H.Q(C(cm) + ' 立方公分＝幾立方公尺？', '1 立方公尺＝1,000,000 立方公分，所以 ' + C(cm) + '÷1,000,000＝' + H.fmt(a, 'dec') + '（立方公尺）。',
            H.num(a, { suf: '立方公尺', err: [[H.R(cm, 100), '100 是公尺換公分；立方公尺要除以 1,000,000。']] }), { cm: cm, dir: 'toM' });
        }
        return H.Q(H.fmt(a, 'dec') + ' 立方公尺＝幾立方公分？', '1 立方公尺＝1,000,000 立方公分，所以 ' + H.fmt(a, 'dec') + '×1,000,000＝' + C(t * 100000) + '（立方公分）。',
          H.num(t * 100000, { suf: '立方公分', err: [[t * 10, '只乘 100 不夠：立方公尺換立方公分要乘 100×100×100。'], [t * 10000, '少乘了一個 100，要乘 1,000,000。']] }), { m: t, dir: 'toCm' });
      } },
      // d2 哪一個體積最大（選擇）
      { k: 'big', d: 2, n: 5, f: function (r) {
        var bs = [], vs = {};
        while (bs.length < 4) { var b = { l: H.ri(r, 3, 12), w: H.ri(r, 2, 9), h: H.ri(r, 2, 8) }, v = b.l * b.w * b.h; if (!vs[v]) { vs[v] = 1; bs.push(b); } }
        var vol = function (b) { return b.l * b.w * b.h; }, sorted = bs.slice().sort(function (x, y) { return vol(y) - vol(x); });
        var show = function (b) { return '長 ' + b.l + '、寬 ' + b.w + '、高 ' + b.h + ' 公分'; };
        return H.Q('下面哪一個長方體的體積最大？', sorted.map(function (b) { return show(b) + '：' + vol(b); }).join('；') + '（立方公分）。最大的是 ' + vol(sorted[0]) + '。',
          H.mc(sorted[0], sorted.slice(1), show), { boxes: bs });
      } },
      // d2 列出全部：體積是 V 的長方體
      { k: 'all', d: 2, n: 5, f: function (r) {
        var V = H.pick(r, [24, 36, 48, 60, 72, 90]), ok = [], no = [];
        for (var l = 1; l <= 12; l++) for (var w = 1; w <= l; w++) for (var h = 1; h <= w; h++) {
          var b = { l: l, w: w, h: h }; if (l * w * h === V) ok.push(b); else if (Math.abs(l * w * h - V) <= 12 && l * w * h > 0) no.push(b);
        }
        var good = H.shuffle(ok, r).slice(0, H.ri(r, 2, 3)), badB = H.shuffle(no, r).slice(0, 5 - good.length), cand = H.shuffle(good.concat(badB), r);
        var show = function (b) { return b.l + '×' + b.w + '×' + b.h; };
        return H.Q('下面這些長方體（長×寬×高，單位公分），哪些的體積是 ' + V + ' 立方公分？<b>全部選出來。</b>',
          cand.map(function (b) { return show(b) + '＝' + b.l * b.w * b.h; }).join('；') + '。等於 ' + V + ' 的才選。',
          H.set(cand, function (b) { return b.l * b.w * b.h === V; }, show), { V: V, cand: cand });
      } },
      // d3 挖掉一角
      { k: 'cut', d: 3, n: 5, f: function (r) {
        var L = H.ri(r, 8, 15), W = H.ri(r, 5, 10), Hh = H.ri(r, 6, 12), a = H.ri(r, 2, L - 4), c = H.ri(r, 2, Hh - 3), all = L * W * Hh, cut = a * W * c;
        return H.Q('一塊長 ' + L + ' 公分、寬 ' + W + ' 公分、高 ' + Hh + ' 公分的長方體木塊，從上面一角整條切掉長 ' + a + ' 公分、寬 ' + W + ' 公分、高 ' + c + ' 公分的一塊。剩下的體積是幾立方公分？',
          '先算整塊：' + L + '×' + W + '×' + Hh + '＝' + all + '；切掉的：' + a + '×' + W + '×' + c + '＝' + cut + '；剩下 ' + all + '－' + cut + '＝' + (all - cut) + '（立方公分）。',
          H.num(all - cut, { suf: '立方公分', err: [[all, '這是還沒切的體積，要減掉切掉的那塊。'], [cut, '這是切掉的那塊，題目問剩下的。']] }), { L: L, W: W, H: Hh, a: a, c: c });
      } },
      // d3 生活情境：公尺、公分混著
      { k: 'life', d: 3, n: 5, f: function (r) {
        var lm = H.ri(r, 2, 5), wcm = H.pick(r, [50, 80, 120, 150]), hcm = H.pick(r, [40, 60, 90]);
        var thing = H.pick(r, ['魚缸', '花台', '儲物箱', '沙坑']), v = lm * 100 * wcm * hcm;
        return H.Q('學校的長方體' + thing + '長 ' + lm + ' 公尺、寬 ' + wcm + ' 公分、高 ' + hcm + ' 公分。體積是幾立方公分？',
          '單位要一樣：' + lm + ' 公尺＝' + lm * 100 + ' 公分。' + lm * 100 + '×' + wcm + '×' + hcm + '＝' + C(v) + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: [[lm * wcm * hcm, '公尺沒有先換成公分（1 公尺＝100 公分）。']] }), { lm: lm, wcm: wcm, hcm: hcm });
      } },
      // d3 複合形體：兩個長方體疊在一起（台階）
      { k: 'step', d: 3, n: 4, f: function (r) {
        var w = H.ri(r, 3, 8), l1 = H.ri(r, 8, 14), h1 = H.ri(r, 2, 5), l2 = H.ri(r, 3, l1 - 3), h2 = H.ri(r, 2, 6), v = l1 * w * h1 + l2 * w * h2;
        return H.Q('用兩個長方體疊成台階：下面那塊長 ' + l1 + '、寬 ' + w + '、高 ' + h1 + ' 公分；上面那塊長 ' + l2 + '、寬 ' + w + '、高 ' + h2 + ' 公分。整個台階的體積是幾立方公分？',
          '分開算再相加：' + l1 + '×' + w + '×' + h1 + '＝' + l1 * w * h1 + '，' + l2 + '×' + w + '×' + h2 + '＝' + l2 * w * h2 + '，合起來 ' + v + '（立方公分）。',
          H.num(v, { suf: '立方公分' }), { w: w, l1: l1, h1: h1, l2: l2, h2: h2 });
      } },
      // d1 選擇：體積的算式
      { k: 'how', d: 1, n: 4, f: function (r) {
        var l = H.ri(r, 5, 12), w = H.ri(r, 2, 4), h = H.ri(r, 2, 6);
        var ok = l + '×' + w + '×' + h, bad = [l + '＋' + w + '＋' + h, l + '×' + w, '(' + l + '＋' + w + ')×2×' + h, l + '×' + w + '×' + h + '×2'];
        return H.Q('長 ' + l + ' 公分、寬 ' + w + ' 公分、高 ' + h + ' 公分的長方體，體積要用哪一個算式？', '長方體體積＝長×寬×高，所以是 ' + ok + '＝' + l * w * h + '（立方公分）。',
          H.mc(ok, bad), { l: l, w: w, h: h });
      } },
      // d3 列舉：積木全部用完、高固定，長和寬有哪些可能
      { k: 'fit', d: 3, n: 4, f: function (r) {
        var h = H.ri(r, 2, 4), base = H.pick(r, [12, 18, 20, 24, 30]), V = base * h, ok = [], no = [];
        for (var l = 1; l <= 30; l++) for (var w = 1; w <= l; w++) { var p = { l: l, w: w }; if (l * w === base && w > 1) ok.push(p); else if (Math.abs(l * w - base) <= 4 && w > 1 && l <= 12) no.push(p); }
        var cand = H.shuffle(H.shuffle(ok, r).slice(0, 3).concat(H.shuffle(no, r).slice(0, 3)), r);
        if (cand.filter(function (p) { return p.l * p.w === base; }).length < 2) return null;
        var show = function (p) { return '長 ' + p.l + '、寬 ' + p.w; };
        return H.Q('用 ' + V + ' 個 1 立方公分的小積木，全部用完，排成高 ' + h + ' 公分的長方體。長和寬（公分）可能是哪些？<b>全部選出來。</b>',
          '高 ' + h + ' 公分，所以每一層要 ' + V + '÷' + h + '＝' + base + ' 個；長×寬＝' + base + ' 的才可以。',
          H.set(cand, function (p) { return p.l * p.w === base; }, show), { V: V, h: h, cand: cand });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
