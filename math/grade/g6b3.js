/* 六下 單元三 柱體體積與表面積（待課本核對）。重點與題目全部原創；答案由程式算（圓周率 3.14 用有理數 157/50），驗算在 test/mg-verify/g6b3.js。
   圖只示意形狀，長度看題目的數字（不照比例）。 */
(function (MG) {
  'use strict';
  var H = MG.H, PI = H.fromDec('3.14'), I = H.INK;
  var V = function (x) { return H.fmt(x, 'dec'); };
  var P = function (pts) { return pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' '); };
  var ln = function (a, b, dash) { return '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" stroke="' + I + '" stroke-width="2"' + (dash ? ' stroke-dasharray="6 4"' : '') + '/>'; };
  // 柱體（底面朝前、往右上推出去）：只畫看得到的側面＋前面的底面；labs＝[[x, y, 字, 對齊]]，dash＝虛線（例：三角形的高）
  function prism(front, dx, dy, labs, dash, name) {
    var n = front.length, area = 0, b = '', i, p, q, mx = 0, my = 0;
    for (i = 0; i < n; i++) { p = front[i]; q = front[(i + 1) % n]; area += p[0] * q[1] - q[0] * p[1]; }
    for (i = 0; i < n; i++) {
      p = front[i]; q = front[(i + 1) % n];
      if (((q[1] - p[1]) * dx + (q[0] - p[0]) * dy) * (area > 0 ? 1 : -1) > 0)   // 這條邊往外的方向朝右上 → 側面看得到
        b += '<polygon points="' + P([p, q, [q[0] + dx, q[1] - dy], [p[0] + dx, p[1] - dy]]) + '" fill="#bcdcf7" stroke="' + I + '" stroke-width="2" stroke-linejoin="round"/>';
    }
    b += '<polygon points="' + P(front) + '" fill="#d6ecff" stroke="' + I + '" stroke-width="2" stroke-linejoin="round"/>';
    (dash || []).forEach(function (s) { b += ln(s[0], s[1], true); });
    (labs || []).forEach(function (l) { b += H.txt(l[0], l[1], l[2], { a: l[3] || 'middle', fs: 15 }); });
    front.forEach(function (p) { mx = Math.max(mx, p[0] + dx); my = Math.max(my, p[1]); });
    return H.svg(mx + 130, my + 34, b, name);
  }
  var cm = function (x) { return x + ' 公分'; };
  function triSvg(a, b, h) { return prism([[30, 170], [190, 170], [100, 70]], 110, 60, [[110, 194, '底 ' + cm(a)], [106, 140, '高 ' + cm(b), 'start'], [252, 156, '柱高 ' + cm(h), 'start']], [[[100, 70], [100, 170]]], '三角柱'); }
  function trapSvg(u, w, t, h) { return prism([[30, 170], [210, 170], [160, 80], [80, 80]], 100, 55, [[120, 104, '上底 ' + cm(u)], [120, 194, '下底 ' + cm(w)], [86, 145, '高 ' + cm(t), 'start'], [268, 158, '柱高 ' + cm(h), 'start']], [[[80, 80], [80, 170]]], '梯形底面的四角柱'); }
  function paraSvg(p, t, h) { return prism([[30, 170], [170, 170], [220, 80], [80, 80]], 100, 55, [[100, 194, '底 ' + cm(p)], [86, 145, '高 ' + cm(t), 'start'], [228, 158, '柱高 ' + cm(h), 'start']], [[[80, 80], [80, 170]]], '平行四邊形底面的四角柱'); }
  function houseSvg(w, a, t, L) { return prism([[100, 195], [240, 195], [240, 125], [170, 65], [100, 125]], 110, 55, [[170, 219, '寬 ' + cm(w)], [108, 167, '高 ' + cm(a), 'start'], [100, 95, '高 ' + cm(t), 'end'], [304, 183, '長 ' + cm(L), 'start']], [[[100, 125], [240, 125]], [[170, 65], [170, 125]]], '長方體加三角柱'); }
  function rightSvg(a, b, c, h) { return prism([[30, 170], [170, 170], [30, 70]], 110, 55, [[100, 194, cm(a)], [36, 145, cm(b), 'start'], [106, 114, cm(c), 'start'], [234, 158, '柱高 ' + cm(h), 'start']], [], '直角三角形底面的三角柱'); }
  // 圓柱：top＝上面標的字（半徑或直徑），side＝高；o.dia 畫直徑、o.hole＝洞的大小比例、o.inner＝洞的字
  function cyl(top, side, o) {
    o = o || {}; var cx = 110, rx = 80, ry = 22, yt = 56, yb = 186, b = '';
    b += '<path d="M' + (cx - rx) + ' ' + yt + ' L' + (cx - rx) + ' ' + yb + ' A' + rx + ' ' + ry + ' 0 0 0 ' + (cx + rx) + ' ' + yb + ' L' + (cx + rx) + ' ' + yt + ' Z" fill="#d6ecff" stroke="' + I + '" stroke-width="2"/>';
    b += '<path d="M' + (cx - rx) + ' ' + yb + ' A' + rx + ' ' + ry + ' 0 0 1 ' + (cx + rx) + ' ' + yb + '" fill="none" stroke="' + I + '" stroke-width="1.5" stroke-dasharray="6 4"/>';
    b += '<ellipse cx="' + cx + '" cy="' + yt + '" rx="' + rx + '" ry="' + ry + '" fill="#eef6ff" stroke="' + I + '" stroke-width="2"/>';
    if (o.hole) {
      var hx = Math.round(rx * o.hole), hy = Math.round(ry * o.hole);
      b += '<ellipse cx="' + cx + '" cy="' + yt + '" rx="' + hx + '" ry="' + hy + '" fill="#ffffff" stroke="' + I + '" stroke-width="2"/>' + ln([cx - hx, yt], [cx - hx, yb], true) + ln([cx + hx, yt], [cx + hx, yb], true) +
        ln([cx, yt], [cx - hx, yt]) + H.txt(cx + rx + 8, (yt + yb) / 2 + 30, o.inner, { fs: 14, a: 'start' });
    }
    b += o.dia ? ln([cx - rx, yt], [cx + rx, yt]) : ln([cx, yt], [cx + rx, yt]) + '<circle cx="' + cx + '" cy="' + yt + '" r="3" fill="' + I + '"/>';
    b += H.txt(o.dia ? cx : cx + rx / 2, yt - ry - 8, top, { fs: 15 }) + H.txt(cx + rx + 8, (yt + yb) / 2 + 6, side, { fs: 15, a: 'start' });
    return H.svg(cx + rx + 130, yb + ry + 12, b, o.label || '圓柱');
  }
  // 圓柱展開圖：上下兩個圓＋中間的長方形（側面）
  function netSvg(top, side) {
    var x0 = 30, r = 40, y0 = 2 * r + 12, W = 250, Ht = 100, cx = x0 + 70, b = '';
    b += '<circle cx="' + cx + '" cy="' + (y0 - r) + '" r="' + r + '" fill="#eef6ff" stroke="' + I + '" stroke-width="2"/>' + ln([cx, y0 - r], [cx + r, y0 - r]) + H.txt(cx + r + 8, y0 - r + 6, top, { fs: 14, a: 'start' });
    b += '<rect x="' + x0 + '" y="' + y0 + '" width="' + W + '" height="' + Ht + '" fill="#d6ecff" stroke="' + I + '" stroke-width="2"/>';
    b += '<circle cx="' + cx + '" cy="' + (y0 + Ht + r) + '" r="' + r + '" fill="#eef6ff" stroke="' + I + '" stroke-width="2"/>';
    b += H.txt(x0 + W / 2, y0 + Ht / 2 - 4, '長＝底面周長', { fs: 15 }) + H.txt(x0 + W / 2, y0 + Ht / 2 + 18, '（直徑×3.14）', { fs: 13 }) + H.txt(x0 + W + 8, y0 + Ht / 2 + 6, side, { fs: 14, a: 'start' });
    return H.svg(x0 + W + 130, y0 + Ht + 2 * r + 10, b, '圓柱展開圖');
  }
  var TRI = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]];
  var vol = function (s) { return s.k === 'cyl' ? H.mul(PI, s.r * s.r * s.h) : s.k === 'tri' ? H.R(s.a * s.b * s.h, 2) : H.R(s.l * s.w * s.h); };
  var desc = function (s) { return s.k === 'cyl' ? '圓柱：底面半徑 ' + s.r + ' 公分、高 ' + s.h + ' 公分' : s.k === 'tri' ? '三角柱：底面三角形底 ' + s.a + '、高 ' + s.b + ' 公分，柱高 ' + s.h + ' 公分' : '四角柱：底面長 ' + s.l + '、寬 ' + s.w + ' 公分，高 ' + s.h + ' 公分'; };
  var PIQ = '（圓周率用 3.14）';

  MG.unit({
    id: 'g6b3', pending: '待課本核對',
    cards: [
      { t: '柱體的體積＝底面積×高。三角柱、四角柱、圓柱都一樣。',
        ex: '三角柱的底面是三角形，底 6 公分、高 4 公分，柱高 10 公分：<br>底面積 6×4÷2＝12（平方公分），體積 12×10＝<b>120 立方公分</b>。',
        why: '柱體就像同一片底面一層一層往上疊，高幾公分就疊幾層，所以是底面積×高。', svg: triSvg(6, 4, 10) },
      { t: '圓柱的體積＝圓面積×高＝半徑×半徑×3.14×高（圓周率用 3.14）。',
        ex: '底面半徑 3 公分、高 10 公分的圓柱：<br>底面積 3×3×3.14＝28.26（平方公分），體積 28.26×10＝<b>282.6 立方公分</b>。',
        why: '圓柱一樣是「底面積×高」，只是底面是圓。題目給直徑，要先 ÷2 變成半徑。', svg: cyl('半徑 3 公分', '高 10 公分') },
      { t: '複合形體：拆成幾個柱體加起來，或用大的減掉挖空的。',
        ex: '圓柱挖空：外半徑 5、洞的半徑 2、高 10 公分：5×5×3.14×10－2×2×3.14×10＝785－125.6＝<b>659.4 立方公分</b>。<br>小房子形：底面＝長方形 8×5＋三角形 8×3÷2＝40＋12＝52，長 10 公分 → <b>520 立方公分</b>。',
        why: '體積可以拆開再相加；挖掉的部分要減掉。注意不能先把兩個半徑相減再算。', svg: cyl('外半徑 5 公分', '高 10 公分', { hole: 0.4, inner: '洞半徑 2 公分', label: '挖空的圓柱' }) },
      { t: '柱體的表面積＝2 個底面＋側面。側面攤開是一個長方形：長＝底面周長，寬＝柱高。',
        ex: '三角柱的底面是直角三角形（3、4、5 公分），柱高 10 公分：<br>2 個底面 3×4÷2×2＝12；側面 (3＋4＋5)×10＝120；表面積 12＋120＝<b>132 平方公分</b>。',
        why: '每個側面的寬都是柱高，把它們排成一排，就是長「底面周長」、寬「柱高」的大長方形。', svg: rightSvg(4, 3, 5, 10) },
      { t: '圓柱的側面攤開也是長方形：長＝底面圓周長（直徑×3.14），寬＝高。',
        ex: '底面半徑 2 公分、高 5 公分的圓柱：<br>側面 4×3.14×5＝62.8；2 個底面 2×2×3.14×2＝25.12；表面積 62.8＋25.12＝<b>87.92 平方公分</b>。',
        why: '側面是包住圓的一圈，攤平後那條邊剛好繞底面一圈，所以長就是圓周長。', svg: netSvg('半徑 2 公分', '高 5 公分') }
    ],
    gens: [
      // d1 三角柱體積
      { k: 'tri', d: 1, n: 5, f: function (r) {
        var a = H.ri(r, 3, 12), b = H.ri(r, 2, 10), h = H.ri(r, 4, 20), A = H.R(a * b, 2), v = H.mul(A, h);
        return H.Q('一個三角柱的底面是三角形，三角形的底 ' + a + ' 公分、高 ' + b + ' 公分；三角柱的高是 ' + h + ' 公分。體積是多少立方公分？',
          '底面積＝' + a + '×' + b + '÷2＝' + V(A) + '（平方公分），體積＝底面積×高＝' + V(A) + '×' + h + '＝' + V(v) + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: [[a * b * h, '三角形面積要 ÷2。'], [A, '這是底面積，還要乘三角柱的高。']] }), { a: a, b: b, h: h }, { svg: triSvg(a, b, h) });
      } },
      // d1 四角柱體積（底面是梯形或平行四邊形）
      { k: 'quad', d: 1, n: 5, f: function (r, _, i) {
        var t = H.ri(r, 2, 9), h = H.ri(r, 4, 15), A, v;
        if (i % 2 === 0) {
          var u = H.ri(r, 2, 8), w = H.ri(r, u + 2, 15); A = H.R((u + w) * t, 2); v = H.mul(A, h);
          return H.Q('一個四角柱的底面是梯形，上底 ' + u + ' 公分、下底 ' + w + ' 公分、高 ' + t + ' 公分；四角柱的高是 ' + h + ' 公分。體積是多少立方公分？',
            '底面積＝(' + u + '＋' + w + ')×' + t + '÷2＝' + V(A) + '（平方公分），體積＝' + V(A) + '×' + h + '＝' + V(v) + '（立方公分）。',
            H.num(v, { suf: '立方公分', err: [[(u + w) * t * h, '梯形面積是 (上底＋下底)×高÷2，別忘了 ÷2。'], [A, '這是底面積，還要乘四角柱的高。']] }), { kind: 'trap', u: u, w: w, t: t, h: h }, { svg: trapSvg(u, w, t, h) });
        }
        var p = H.ri(r, 3, 14); A = p * t; v = A * h;
        return H.Q('一個四角柱的底面是平行四邊形，底 ' + p + ' 公分、高 ' + t + ' 公分；四角柱的高是 ' + h + ' 公分。體積是多少立方公分？',
          '底面積＝' + p + '×' + t + '＝' + A + '（平方公分），體積＝' + A + '×' + h + '＝' + v + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: [[H.R(v, 2), '平行四邊形面積是底×高，不用 ÷2。'], [A, '這是底面積，還要乘四角柱的高。']] }), { kind: 'para', p: p, t: t, h: h }, { svg: paraSvg(p, t, h) });
      } },
      // d1 圓柱體積（給半徑或直徑）
      { k: 'cyl', d: 1, n: 6, f: function (r, _, i) {
        var rr = H.ri(r, 2, 10), h = H.ri(r, 3, 20), dia = i % 2 === 1, A = H.mul(PI, rr * rr), v = H.mul(A, h);
        var err = [[H.mul(PI, 2 * rr * h), '底面積是半徑×半徑×3.14，不是直徑×3.14。'], [A, '這是底面積，還要乘高。']];
        if (dia) err.push([H.mul(PI, 4 * rr * rr * h), '題目給的是直徑，要先 ÷2 變成半徑。']);
        return H.Q('一個圓柱的底面' + (dia ? '直徑 ' + 2 * rr : '半徑 ' + rr) + ' 公分、高 ' + h + ' 公分。體積是多少立方公分？' + PIQ,
          (dia ? '半徑＝' + 2 * rr + '÷2＝' + rr + '。' : '') + '底面積＝' + rr + '×' + rr + '×3.14＝' + V(A) + '（平方公分），體積＝' + V(A) + '×' + h + '＝' + V(v) + '（立方公分）。',
          H.num(v, { suf: '立方公分', err: err }), { r: rr, h: h }, { svg: cyl(dia ? '直徑 ' + 2 * rr + ' 公分' : '半徑 ' + rr + ' 公分', '高 ' + h + ' 公分', { dia: dia }) });
      } },
      // d1 已知底面積
      { k: 'base', d: 1, n: 4, f: function (r, _, i) {
        var S = i % 2 ? H.R(H.ri(r, 25, 199), 10) : H.R(H.ri(r, 12, 80)), h = H.ri(r, 3, 15), v = H.mul(S, h), thing = H.pick(r, ['三角柱', '四角柱', '五角柱', '六角柱', '圓柱']);
        return H.Q('一個' + thing + '的底面積是 ' + V(S) + ' 平方公分，高是 ' + h + ' 公分。體積是多少立方公分？',
          '柱體的體積＝底面積×高＝' + V(S) + '×' + h + '＝' + V(v) + '（立方公分）。不管底面是什麼形狀都一樣。',
          H.num(v, { suf: '立方公分', err: [[H.add(S, h), '體積是底面積×高，要用乘的。']] }), { S: S, h: h });
      } },
      // d2 已知體積求高
      { k: 'back', d: 2, n: 4, f: function (r, _, i) {
        var h = H.ri(r, 3, 20);
        if (i % 2 === 0) {
          var rr = H.ri(r, 2, 10), A = H.mul(PI, rr * rr), Vv = H.mul(A, h);
          return H.Q('一個圓柱的體積是 ' + V(Vv) + ' 立方公分，底面半徑 ' + rr + ' 公分。它的高是幾公分？' + PIQ,
            '底面積＝' + rr + '×' + rr + '×3.14＝' + V(A) + '（平方公分）；高＝體積÷底面積＝' + V(Vv) + '÷' + V(A) + '＝' + h + '（公分）。',
            H.num(h, { suf: '公分', err: [[H.div(Vv, H.mul(PI, rr)), '底面積是半徑×半徑×3.14，兩個半徑都要乘。']] }), { kind: 'cyl', r: rr, V: Vv });
        }
        var a = H.ri(r, 3, 12), b = H.ri(r, 2, 10), A2 = H.R(a * b, 2), V2 = H.mul(A2, h);
        return H.Q('一個三角柱的體積是 ' + V(V2) + ' 立方公分，底面三角形的底 ' + a + ' 公分、高 ' + b + ' 公分。三角柱的高是幾公分？',
          '底面積＝' + a + '×' + b + '÷2＝' + V(A2) + '（平方公分）；高＝體積÷底面積＝' + V(V2) + '÷' + V(A2) + '＝' + h + '（公分）。',
          H.num(h, { suf: '公分', err: [[H.div(V2, a * b), '三角形底面積要 ÷2：' + a + '×' + b + '÷2。']] }), { kind: 'tri', a: a, b: b, V: V2 });
      } },
      // d2 圓柱挖空
      { k: 'hollow', d: 2, n: 4, f: function (r, _, i) {
        var R = H.ri(r, 4, 10), rr = H.ri(r, 1, R - 2), h = H.ri(r, 5, 20), big = H.mul(PI, R * R * h), small = H.mul(PI, rr * rr * h), ans = H.sub(big, small), thing = i % 2 ? '水泥管' : '木頭';
        return H.Q('一個圓柱形的' + thing + '，底面半徑 ' + R + ' 公分、高 ' + h + ' 公分，中間挖空一個底面半徑 ' + rr + ' 公分、一樣高的圓柱（上下打通）。剩下的體積是多少立方公分？' + PIQ,
          '大圓柱 ' + R + '×' + R + '×3.14×' + h + '＝' + V(big) + '，挖掉的小圓柱 ' + rr + '×' + rr + '×3.14×' + h + '＝' + V(small) + '，剩下 ' + V(big) + '－' + V(small) + '＝' + V(ans) + '（立方公分）。',
          H.num(ans, { suf: '立方公分', err: [[H.mul(PI, (R - rr) * (R - rr) * h), '不能先把兩個半徑相減；要用大圓柱減小圓柱。'], [big, '還要扣掉挖空的部分。']] }), { R: R, r: rr, h: h },
          { svg: cyl('外半徑 ' + R + ' 公分', '高 ' + h + ' 公分', { hole: Math.max(0.25, Math.min(0.7, rr / R)), inner: '洞半徑 ' + rr + ' 公分', label: '挖空的圓柱' }) });
      } },
      // d2 長方體＋三角柱（小房子）
      { k: 'combo', d: 2, n: 4, f: function (r) {
        var w = H.ri(r, 4, 12), a = H.ri(r, 3, 10), t = H.ri(r, 2, 6), L = H.ri(r, 5, 20), A = H.add(w * a, H.R(w * t, 2)), v = H.mul(A, L);
        return H.Q('一個像小房子的木塊（如圖）：前面是長方形（寬 ' + w + ' 公分、高 ' + a + ' 公分），上面接一個三角形（底 ' + w + ' 公分、高 ' + t + ' 公分），從前到後長 ' + L + ' 公分。體積是多少立方公分？',
          '前面那片是底面：長方形 ' + w + '×' + a + '＝' + w * a + '，三角形 ' + w + '×' + t + '÷2＝' + V(H.R(w * t, 2)) + '，底面積 ' + V(A) + '；體積＝' + V(A) + '×' + L + '＝' + V(v) + '（立方公分）。也可以看成長方體＋三角柱。',
          H.num(v, { suf: '立方公分', err: [[(w * a + w * t) * L, '三角形面積要 ÷2。'], [w * a * L, '上面的三角柱也要算進去。']] }), { w: w, a: a, t: t, L: L }, { svg: houseSvg(w, a, t, L) });
      } },
      // d2 選擇：哪一個柱體體積最大／最小
      { k: 'big', d: 2, n: 4, f: function (r, _, i) {
        var ss = [], seen = {};
        for (var k = 0; k < 4; k++) {
          var kind = H.pick(r, ['cyl', 'tri', 'box']), s = kind === 'cyl' ? { k: 'cyl', r: H.ri(r, 2, 6), h: H.ri(r, 3, 12) } : kind === 'tri' ? { k: 'tri', a: H.ri(r, 4, 12), b: H.ri(r, 3, 10), h: H.ri(r, 4, 15) } : { k: 'box', l: H.ri(r, 3, 10), w: H.ri(r, 2, 8), h: H.ri(r, 3, 12) };
          var key = V(vol(s)); if (seen[key]) return null; seen[key] = 1; ss.push(s);
        }
        var big = i % 2 === 0, sorted = ss.slice().sort(function (x, y) { return H.cmp(vol(y), vol(x)) * (big ? 1 : -1); });
        return H.Q('下面哪一個柱體的體積' + (big ? '最大' : '最小') + '？' + PIQ,
          ss.map(function (s) { return desc(s) + '：' + V(vol(s)); }).join('；') + '（立方公分）。' + (big ? '最大' : '最小') + '的是 ' + V(vol(sorted[0])) + '。',
          H.mc(sorted[0], sorted.slice(1), desc), { shapes: ss, big: big });
      } },
      // d2 列出全部：哪些柱體的體積是 V
      { k: 'which', d: 2, n: 4, f: function (r) {
        var Vt = H.pick(r, [48, 60, 72, 84, 90, 96, 120]), ok = [], no = [];
        for (var a = 2; a <= 12; a++) for (var b = 2; b <= 10; b++) for (var h = 2; h <= 15; h++) {
          [{ k: 'tri', a: a, b: b, h: h }, { k: 'box', l: a, w: b, h: h }].forEach(function (s) { var v = vol(s); if (H.eq(v, Vt)) ok.push(s); else if (H.cmp(v, Vt - 12) >= 0 && H.cmp(v, Vt + 12) <= 0) no.push(s); });
        }
        var good = H.shuffle(ok, r).slice(0, H.ri(r, 2, 3)), cand = H.shuffle(good.concat(H.shuffle(no, r).slice(0, 5 - good.length)), r);
        return H.Q('下面這些柱體，哪些的體積是 ' + Vt + ' 立方公分？<b>全部選出來。</b>',
          cand.map(function (s) { return desc(s) + '：' + V(vol(s)); }).join('；') + '（立方公分）。三角柱記得底面積要 ÷2。',
          H.set(cand, function (s) { return H.eq(vol(s), Vt); }, desc), { Vt: Vt, cand: cand });
      } },
      // d2 三角柱表面積
      { k: 'prsa', d: 2, n: 4, f: function (r) {
        var tr = H.pick(r, TRI), a = tr[0], b = tr[1], c = tr[2], h = H.ri(r, 4, 20), base = a * b / 2, side = (a + b + c) * h, sa = 2 * base + side;
        return H.Q('一個三角柱的底面是直角三角形，三邊長 ' + a + '、' + b + '、' + c + ' 公分（' + a + ' 公分和 ' + b + ' 公分的兩邊互相垂直）；三角柱的高是 ' + h + ' 公分。它的表面積是多少平方公分？',
          '2 個底面：' + a + '×' + b + '÷2×2＝' + 2 * base + '；側面攤開是長方形，長＝底面周長 ' + a + '＋' + b + '＋' + c + '＝' + (a + b + c) + '，寬＝高 ' + h + '：' + (a + b + c) + '×' + h + '＝' + side + '；表面積 ' + 2 * base + '＋' + side + '＝' + sa + '（平方公分）。',
          H.num(sa, { suf: '平方公分', err: [[side, '這只有側面，還要加上 2 個底面。'], [base + side, '底面有上下 2 個。'], [base * h, '這是體積，表面積是所有面的面積加起來。']] }), { a: a, b: b, c: c, h: h }, { svg: rightSvg(a, b, c, h) });
      } },
      // d3 圓柱表面積
      { k: 'cylsa', d: 3, n: 4, f: function (r, _, i) {
        var rr = H.ri(r, 2, 10), h = H.ri(r, 3, 15), dia = i % 2 === 1, base = H.mul(PI, rr * rr), C = H.mul(PI, 2 * rr), side = H.mul(C, h), sa = H.add(H.mul(base, 2), side);
        return H.Q('一個圓柱的底面' + (dia ? '直徑 ' + 2 * rr : '半徑 ' + rr) + ' 公分、高 ' + h + ' 公分。它的表面積是多少平方公分？' + PIQ,
          '2 個底面：' + rr + '×' + rr + '×3.14×2＝' + V(H.mul(base, 2)) + '；側面：底面周長 ' + 2 * rr + '×3.14＝' + V(C) + '，乘高 ' + h + '＝' + V(side) + '；表面積 ' + V(H.mul(base, 2)) + '＋' + V(side) + '＝' + V(sa) + '（平方公分）。',
          H.num(sa, { suf: '平方公分', err: [[side, '這只有側面，還要加上 2 個底面。'], [H.add(base, side), '底面有上下 2 個。'], [H.mul(base, h), '這是體積。']] }), { r: rr, h: h },
          { svg: cyl(dia ? '直徑 ' + 2 * rr + ' 公分' : '半徑 ' + rr + ' 公分', '高 ' + h + ' 公分', { dia: dia }) });
      } },
      // d3 圓柱側面展開
      { k: 'side', d: 3, n: 5, f: function (r, _, i) {
        var k = i % 3, h = H.ri(r, 5, 20);
        if (k === 0) {
          var rr = H.ri(r, 2, 10), C = H.mul(PI, 2 * rr);
          return H.Q('一個圓柱的底面半徑 ' + rr + ' 公分、高 ' + h + ' 公分。把它的側面剪開攤平，是一個長方形。這個長方形的長是幾公分？' + PIQ,
            '長方形的長＝底面周長＝直徑×3.14＝' + 2 * rr + '×3.14＝' + V(C) + '（公分）；寬才是高 ' + h + ' 公分。',
            H.num(C, { suf: '公分', err: [[H.mul(PI, rr), '圓周長是直徑×3.14，直徑＝半徑×2。'], [h, '寬才是高；長是底面周長。']] }), { k: 0, r: rr, h: h }, { svg: netSvg('半徑 ' + rr + ' 公分', '高 ' + h + ' 公分') });
        }
        if (k === 1) {
          var r2 = H.ri(r, 2, 8), L = H.mul(PI, 2 * r2);
          return H.Q('把一張長 ' + V(L) + ' 公分、寬 ' + h + ' 公分的長方形紙，沿著長邊捲成圓柱的側面（長邊剛好圍成底面一圈）。這個圓柱的底面半徑是幾公分？' + PIQ,
            '長邊＝底面周長＝直徑×3.14，所以直徑＝' + V(L) + '÷3.14＝' + 2 * r2 + '（公分），半徑＝' + 2 * r2 + '÷2＝' + r2 + '（公分）。',
            H.num(r2, { suf: '公分', err: [[2 * r2, '這是直徑，題目問半徑，要再 ÷2。']] }), { k: 1, L: L }, { svg: netSvg('半徑？', '寬 ' + h + ' 公分') });
        }
        var d = H.ri(r, 4, 20), S = H.mul(PI, d * h);
        return H.Q('一個圓柱的底面直徑 ' + d + ' 公分、高 ' + h + ' 公分。它的側面積是多少平方公分？' + PIQ,
          '側面攤開是長方形：長＝底面周長 ' + d + '×3.14＝' + V(H.mul(PI, d)) + '，寬＝高 ' + h + '，面積 ' + V(H.mul(PI, d)) + '×' + h + '＝' + V(S) + '（平方公分）。',
          H.num(S, { suf: '平方公分', err: [[d * h, '長方形的長是底面周長（直徑×3.14），不是直徑。']] }), { k: 2, d: d, h: h }, { svg: netSvg('直徑 ' + d + ' 公分', '高 ' + h + ' 公分') });
      } },
      // d3 生活：沒蓋的桶子、抹奶油的蛋糕、罐頭標籤
      { k: 'can', d: 3, n: 4, f: function (r, _, i) {
        var k = i % 3;
        if (k === 2) {
          var d = H.ri(r, 6, 12), h0 = H.ri(r, 8, 15), S = H.mul(PI, d * h0);
          return H.Q('一個圓柱形罐頭的底面直徑 ' + d + ' 公分、高 ' + h0 + ' 公分，側面剛好貼滿一圈標籤紙（不重疊）。標籤紙的面積是多少平方公分？' + PIQ,
            '標籤紙只貼側面：長＝底面周長 ' + d + '×3.14＝' + V(H.mul(PI, d)) + '，寬＝高 ' + h0 + '，' + V(H.mul(PI, d)) + '×' + h0 + '＝' + V(S) + '（平方公分）。',
            H.num(S, { suf: '平方公分', err: [[H.add(S, H.mul(PI, H.R(d * d, 2))), '標籤只貼側面，上下兩個圓不用算。']] }), { k: 'label', d: d, h: h0 }, { svg: cyl('直徑 ' + d + ' 公分', '高 ' + h0 + ' 公分', { dia: true }) });
        }
        var rr = H.ri(r, 5, 15), h = H.ri(r, 6, 30), base = H.mul(PI, rr * rr), side = H.mul(PI, 2 * rr * h), ans = H.add(base, side);
        var q = k === 0 ? '做一個沒有蓋子的圓柱形鐵桶，底面半徑 ' + rr + ' 公分、高 ' + h + ' 公分。至少要用多少平方公分的鐵皮？'
          : '一個圓柱形蛋糕，底面半徑 ' + rr + ' 公分、高 ' + h + ' 公分。除了貼著盤子的底面，其他表面都抹上奶油。抹奶油的面積是多少平方公分？';
        return H.Q(q + PIQ, '只有 1 個底面：' + rr + '×' + rr + '×3.14＝' + V(base) + '；側面：' + 2 * rr + '×3.14×' + h + '＝' + V(side) + '；合起來 ' + V(ans) + '（平方公分）。',
          H.num(ans, { suf: '平方公分', err: [[H.add(H.mul(base, 2), side), k === 0 ? '沒有蓋子，只有 1 個底面。' : '貼著盤子的底面不抹，只算 1 個底面。'], [side, '底面還是要算 1 個。']] }), { k: 'one', r: rr, h: h },
          { svg: cyl('半徑 ' + rr + ' 公分', '高 ' + h + ' 公分') });
      } },
      // d1 選擇：底面積
      { k: 'area', d: 1, n: 4, f: function (r, _, i) {
        if (i % 2 === 0) {
          var rr = H.ri(r, 3, 10), A = H.mul(PI, rr * rr);
          return H.Q('一個圓柱的底面半徑 ' + rr + ' 公分，它的底面積是多少平方公分？' + PIQ, '圓面積＝半徑×半徑×3.14＝' + rr + '×' + rr + '×3.14＝' + V(A) + '（平方公分）。',
            H.mc(A, [H.mul(PI, 2 * rr), H.mul(PI, 4 * rr * rr), H.mul(PI, rr), H.mul(PI, 2 * rr * rr)], V), { kind: 'cyl', r: rr });
        }
        var a = H.ri(r, 3, 12), b = H.ri(r, 3, 10), h = H.ri(r, 4, 15), A2 = H.R(a * b, 2);
        return H.Q('一個三角柱的底面是三角形，三角形的底 ' + a + ' 公分、高 ' + b + ' 公分；三角柱的高是 ' + h + ' 公分。它的底面積是多少平方公分？',
          '底面是三角形：' + a + '×' + b + '÷2＝' + V(A2) + '（平方公分）。柱高 ' + h + ' 公分是算體積才用到。',
          H.mc(A2, [a * b, H.R(a * b * h, 2), a * h, H.R(a + b, 2), b * h], V), { kind: 'tri', a: a, b: b });
      } },
      // d3 列出全部：圓柱的說法哪些對
      { k: 'facts', d: 3, n: 4, f: function (r) {
        var rr = H.ri(r, 2, 9), h = H.ri(r, 3, 15); if (rr === h) return null;
        var Lr = H.mul(PI, 2 * rr), base = H.mul(PI, rr * rr), side = H.mul(Lr, h), sa = H.add(H.mul(base, 2), side);
        var T = [{ k: 'len', n: Lr }, { k: 'wid', n: H.R(h) }, { k: 'base', n: base }, { k: 'side', n: side }, { k: 'sa', n: sa }];
        var Fs = [{ k: 'len', n: H.mul(PI, rr) }, { k: 'wid', n: H.R(rr) }, { k: 'base', n: H.mul(PI, 4 * rr * rr) }, { k: 'side', n: H.mul(PI, rr * h) }, { k: 'sa', n: H.add(base, side) }];
        var good = H.shuffle(T, r).slice(0, H.ri(r, 2, 3)), cand = H.shuffle(good.concat(H.shuffle(Fs, r).slice(0, 5 - good.length)), r);
        var show = function (x) { return { len: '側面攤開的長方形，長是 ', wid: '側面攤開的長方形，寬是 ', base: '一個底面的面積是 ', side: '側面積是 ', sa: '表面積是 ' }[x.k] + V(x.n) + (x.k === 'len' || x.k === 'wid' ? ' 公分' : ' 平方公分'); };
        return H.Q('一個圓柱的底面半徑 ' + rr + ' 公分、高 ' + h + ' 公分。下面哪些說法是對的？<b>全部選出來。</b>' + PIQ,
          '側面攤開：長＝底面周長 ' + 2 * rr + '×3.14＝' + V(Lr) + '，寬＝高 ' + h + '；底面積 ' + rr + '×' + rr + '×3.14＝' + V(base) + '；側面積 ' + V(Lr) + '×' + h + '＝' + V(side) + '；表面積 ' + V(base) + '×2＋' + V(side) + '＝' + V(sa) + '。',
          H.set(cand, function (x) { return good.indexOf(x) >= 0; }, show), { r: rr, h: h, cand: cand }, { svg: cyl('半徑 ' + rr + ' 公分', '高 ' + h + ' 公分') });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
