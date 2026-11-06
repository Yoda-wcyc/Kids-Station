/* paper.js — 紙本錯題（2026-11-03）：考卷上打叉、紅筆圈到的題目 PAPER＋類題 30 題 VARIANTS，加判分（純函式；瀏覽器 window.PAPER，Node require）。
   題目數字與題意照紙本、敘述改寫；不放姓名、班級、照片。文字裡 [[n/d]] ＝上下排的分數。
   每題 {id, text, parts:[…], why, calc?}；類題多 d:1|2|3（照 d 排）、紙本多 src（來源）、tag:'x'（打叉）|'r'（紅筆圈到）。
   FRACTIONS＝約分通分 15 題（2026-11-05），格式同類題。MIDTERM＝期中考錯題 10 題（格式同紙本）、EXAM＝期中類題 20 題（格式同類題），2026-11-06。SECTOR＝扇形小考錯題 7 題（格式同紙本），2026-11-06。
   part：num {ans, units?|suf?}｜multi {ans:[…], n:格數, suf}｜frac {n, d, suf, units?}（要最簡）｜fracs {w, ans:[[n,d],…], rows}（約分：全部列出）｜
         common {a:[n,d], b:[n,d], w?, den, ans:[[n,den],[n,den]], anyDen?}（通分：要最小公倍數當公分母；anyDen＝公分母不限）｜order {opts:['[[n/d]]',…], ans:[索引由小到大]}｜
         choice {opts, ans:索引}｜pick {opts, ans:[…]}｜combos {sticks, want:'can'|'cannot', ans:[[a,b,c],…], rows}｜dec {ans:'字串'}
   calc＝驗算用的算式（test/paper.test.js 用獨立的暴力法重算，答案不靠手寫）。
   check(part, input) → {ok, soft?, msg}；soft＝還沒算作答（沒填完、分數沒約到最簡），不記對錯。 */
(function (G) {
  'use strict';

  // ================= 圖（SVG 字串）=================
  function arcs(a) {
    var dx1 = a.a[0] - a.v[0], dy1 = a.a[1] - a.v[1], dx2 = a.b[0] - a.v[0], dy2 = a.b[1] - a.v[1], r = a.r || 15;
    var l1 = Math.hypot(dx1, dy1), l2 = Math.hypot(dx2, dy2), ux = dx1 / l1, uy = dy1 / l1, vx = dx2 / l2, vy = dy2 / l2;
    var sweep = ux * vy - uy * vx > 0 ? 1 : 0, bx = ux + vx, by = uy + vy, bl = Math.hypot(bx, by) || 1, L = a.l || 32;
    var f = function (n) { return +n.toFixed(1); };
    return '<path d="M' + f(a.v[0] + ux * r) + ' ' + f(a.v[1] + uy * r) + 'A' + r + ' ' + r + ' 0 0 ' + sweep + ' ' + f(a.v[0] + vx * r) + ' ' + f(a.v[1] + vy * r) + '" fill="none" stroke="#263445" stroke-width="1.4"/>' +
      '<text x="' + f(a.v[0] + bx / bl * L) + '" y="' + f(a.v[1] + by / bl * L + 5) + '" text-anchor="middle" font-size="15" font-weight="700" fill="#263445">' + a.t + '</text>';
  }
  function polyFig(w, h, poly, seg, as) {
    var pts = poly.map(function (p) { return p.join(','); }).join(' ');
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" role="img" aria-label="幾何圖" style="max-width:100%;height:auto"><polygon points="' + pts + '" fill="#fff" stroke="#263445" stroke-width="2" stroke-linejoin="round"/>' +
      (seg ? '<line x1="' + seg[0][0] + '" y1="' + seg[0][1] + '" x2="' + seg[1][0] + '" y2="' + seg[1][1] + '" stroke="#263445" stroke-width="2"/>' : '') + as.map(arcs).join('') + '</svg>';
  }
  // 座標由角度走出來（比例照實），test/paper.test.js 量每個角、對標示的度數
  var FIG_PTS = {
    A: { P: [24, 154.2], Q: [133.3, 24], T: [161.2, 26], R: [340.8, 38.5], S: [346.8, 154.2], U: [280.8, 154.2] },
    A3: { P: [24, 162.6], Q: [104, 24], T: [133.9, 26.6], R: [303.2, 41.4], S: [318.1, 162.6], U: [279.7, 162.6] },
    A1: { P: [24, 220.2], Q: [284, 220.2], R: [200.7, 24] },
    A2: { P: [37.1, 281.4], Q: [24, 131.9], R: [255.5, 24], S: [287.1, 281.4] }
  };
  function quadLine(k, lab) {
    var o = FIG_PTS[k];
    return polyFig(372, 180, [o.P, o.Q, o.R, o.S], [o.T, o.U], [
      { v: o.P, a: o.Q, b: o.U, t: lab[0], l: 38 }, { v: o.Q, a: o.P, b: o.T, t: lab[1], l: 34 },
      { v: o.T, a: o.R, b: o.U, t: lab[2], l: 44, r: 18 }, { v: o.R, a: o.T, b: o.S, t: lab[3], l: 36 },
      { v: o.U, a: o.T, b: o.S, t: lab[4], l: 32 }]);
  }
  var FIGS = {
    A: function () { return quadLine('A', ['50°', '126°', '43°', '97°', '★']); },
    A3: function () { return quadLine('A3', ['60°', '115°', '38°', '102°', '★']); },
    A1: function () { var o = FIG_PTS.A1; return polyFig(310, 244, [o.P, o.Q, o.R], null, [{ v: o.P, a: o.Q, b: o.R, t: '48°', l: 42 }, { v: o.Q, a: o.P, b: o.R, t: '67°', l: 36 }, { v: o.R, a: o.P, b: o.Q, t: '★', l: 34 }]); },
    A2: function () { var o = FIG_PTS.A2; return polyFig(312, 306, [o.P, o.Q, o.R, o.S], null, [{ v: o.P, a: o.Q, b: o.S, t: '95°', l: 36 }, { v: o.Q, a: o.P, b: o.R, t: '110°', l: 36 }, { v: o.R, a: o.Q, b: o.S, t: '72°', l: 40 }, { v: o.S, a: o.R, b: o.P, t: '★', l: 32 }]); },
    J: function () {
      var c = 90, r = 76, s = '', i, x = function (d) { return +(c + r * Math.sin(d * Math.PI / 180)).toFixed(1); }, y = function (d) { return +(c - r * Math.cos(d * Math.PI / 180)).toFixed(1); };
      s += '<path d="M' + c + ' ' + c + 'L' + x(0) + ' ' + y(0) + 'A' + r + ' ' + r + ' 0 0 1 ' + x(36) + ' ' + y(36) + 'Z" fill="#9aa5b1"/>';
      for (i = 0; i < 10; i++) s += '<line x1="' + c + '" y1="' + c + '" x2="' + x(i * 36) + '" y2="' + y(i * 36) + '" stroke="#263445" stroke-width="1.2" stroke-dasharray="4 3"/>';
      return '<svg viewBox="0 0 180 180" width="180" height="180" role="img" aria-label="圓平分成十份，塗一份" style="max-width:100%;height:auto">' + s + '<circle cx="' + c + '" cy="' + c + '" r="' + r + '" fill="none" stroke="#263445" stroke-width="2"/></svg>';
    }
  };

  // ================= 題目 =================
  var TF = ['可以', '不可以'], GL = ['公因數', '公倍數'], CMP = ['＞', '＜', '＝'];
  var ALL = '（全部列出）';
  function num(ans, units, label) { return Array.isArray(units) ? { t: 'num', ans: ans, units: units, label: label } : { t: 'num', ans: ans, suf: units || '', label: label }; }
  function multi(ans, n, suf, label) { return { t: 'multi', ans: ans, n: n || 4, suf: suf || '', label: label }; }
  function frac(n, d, label, suf, units) { return { t: 'frac', n: n, d: d, label: label, suf: suf === undefined ? '圓' : suf, units: units }; }
  function fracs(w, ans, rows) { return { t: 'fracs', w: w, ans: ans, rows: rows || 5 }; }
  function lcmOf(a, b) { return a / gcd(a, b) * b; }
  function common(a, b, label, w, anyDen) { var L = lcmOf(a[1], b[1]); return { t: 'common', a: a, b: b, w: w, den: L, anyDen: anyDen, label: label, ans: [[a[0] * L / a[1], L], [b[0] * L / b[1], L]] }; }
  function order(opts, ans, hint) { return { t: 'order', opts: opts, ans: ans, hint: hint }; }
  function choice(opts, ans, label) { return { t: 'choice', opts: opts, ans: ans, label: label }; }
  function pick(opts, ans) { return { t: 'pick', opts: opts, ans: ans }; }
  function combos(sticks, want, ans) { return { t: 'combos', sticks: sticks, want: want, ans: ans, rows: 4 }; }
  function dec(ans) { return { t: 'dec', ans: ans }; }
  function judge(kind, opts, ans) { return [choice(GL, kind === 'gcd' ? 0 : 1, '這題要找什麼？'), choice(opts, ans, '答案是')]; }

  // 紙本 23 題：打叉 10 題＋紅筆圈到 13 題
  var PAPER = [
    { id: 'A', src: '考卷 9(2)', tag: 'x', fig: 'A', text: '四邊形裡多畫了一條線，分成兩塊。圖上標了 126°、43°、97°、50°。★ 那個角是幾度？', parts: [num(133, '度')], calc: { f: 'quad', known: [126, 50, 180 - 43], flat: true },
      why: '左邊那塊四邊形：43° 旁邊的角是 180−43＝137°，四個角合起來 360°，所以 360−126−50−137＝47°。算到這裡還沒完：47° 是 ★ 旁邊的角，兩個角合成一條直線，★＝180−47＝133°。' },
    { id: 'B', src: '考卷 7(2)', tag: 'x', text: '姐姐的球員卡大約在 200～230 張之間，15 張 15 張地數，剛好數完。她可能有幾張？' + ALL, parts: [multi([210, 225], 4, '張')], calc: { f: 'mult', a: 15, lo: 200, hi: 230 },
      why: '15×14＝210、15×15＝225，都在 200～230 裡面，兩個都要寫。15×13＝195 太少，15×16＝240 太多。' },
    { id: 'C', src: '考卷 7(3)', tag: 'x', text: '18 朵康乃馨和 27 朵鬱金香混在一起分束，全部分完，每束的康乃馨一樣多、鬱金香也一樣多。最多可以分成幾束？', parts: [num(9, ['束', '包', '朵'])], calc: { f: 'gcd', a: 18, b: 27 },
      why: '束數要能同時把 18 和 27 分完，所以是公因數，最多就是最大公因數 9。題目問「幾束」，單位就寫束。' },
    { id: 'D', src: '評量 5②', tag: 'x', text: '找出 18 和 24 的最小公倍數。', parts: [num(72)], calc: { f: 'lcm', a: 18, b: 24 },
      why: '18 的倍數：18、36、54、72；24 的倍數：24、48、72。第一個一樣的是 72。看清楚題目問的是最小公倍數，不是最大公因數 6。' },
    { id: 'E', src: '評量 ②', tag: 'x', text: '糖果大約有 150～200 顆，23 顆裝一袋，剛好裝完。糖果可能有幾顆？' + ALL, parts: [multi([161, 184], 4, '顆')], calc: { f: 'mult', a: 23, lo: 150, hi: 200 },
      why: '23×7＝161、23×8＝184，都在範圍裡，算出來的都要寫上去。' },
    { id: 'F', src: '評量 ③', tag: 'x', text: '44 顆水梨和 66 顆蘋果平均裝進禮盒，每盒的水梨一樣多、蘋果也一樣多。最多需要幾個禮盒？', parts: [num(22, ['個', '顆'])], calc: { f: 'gcd', a: 44, b: 66 },
      why: '盒數要能同時把 44 和 66 分完，所以找公因數，最多是 22。公倍數 132 比水果還多，一盒分不到一顆，不合理。' },
    { id: 'G', src: '評量 ④', tag: 'x', text: '圓心角 80 度的扇形是幾分之幾圓？（約到最簡）', parts: [frac(2, 9)], calc: { f: 'sec2frac', deg: 80 },
      why: '一整圈是 360 度，80 度就是 [[80/360]] 圓，上下同除以 40，等於 [[2/9]] 圓。' },
    { id: 'L', src: '考卷（約分）', tag: 'x', text: '用約分的方法，找出和 5[[54/120]] 一樣大的帶分數。' + ALL, parts: [fracs(5, [[27, 60], [18, 40], [9, 20]])], calc: { f: 'reduce', w: 5, n: 54, d: 120 },
      why: '54 和 120 的公因數有 1、2、3、6。上下同除以 2 得 [[27/60]]、除以 3 得 [[18/40]]、除以 6 得 [[9/20]]，三個都要寫。' },
    { id: 'M', src: '考卷（竹籤）', tag: 'x', text: '4 根竹籤長 4、9、12、18 公分，挑 3 根圍三角形。寫出所有「不能」圍成三角形的組合。（順序不同算同一組）', parts: [combos([4, 9, 12, 18], 'cannot', [[4, 9, 18], [4, 12, 18]])], calc: { f: 'combo', sticks: [4, 9, 12, 18], want: 'cannot' },
      why: '4 根挑 3 根共 4 組，一組一組驗「短的兩根和有沒有大於最長的」：4＋9＜18、4＋12＜18 不行；4＋9＞12、9＋12＞18 可以。' },
    { id: 'Q', src: '活動單 1-1 (12)', tag: 'x', text: '下面哪些數的 0 不能去掉？全部選出來。', parts: [pick(['2.1608', '3.5000', '5.0007', '60', '7.8002', '3.620'], ['2.1608', '5.0007', '60', '7.8002'])], calc: { f: 'zeros' },
      why: '小數最後面的 0 可以去掉（3.5000＝3.5、3.620＝3.62）。夾在中間的 0 不能去，整數 60 的 0 也不能去，去掉就變成 6 了。' },
    { id: 'H', src: '考卷 1(5)', tag: 'r', text: '用 21 公分、42 公分、21 公分的竹籤，可以圍成一個三角形嗎？', parts: [choice(TF, 1)], calc: { f: 'tri', s: [21, 42, 21] },
      why: '短的兩根加起來 21＋21＝42，只是剛好等於第三根，會躺平成一條線。兩邊和要「大於」第三邊才圍得起來。' },
    { id: 'I', src: '考卷 5(3)', tag: 'r', text: '3 個 1、2 個 0.1、5 個 0.01 和 16 個 0.001 合起來是多少？', parts: [dec('3.266')], calc: { f: 'place', items: [[3, 0], [2, 1], [5, 2], [16, 3]] },
      why: '16 個 0.001 是 0.016，超過 10 個要進位。3＋0.2＋0.05＋0.016＝3.266。' },
    { id: 'J', src: '考卷 5(5)', tag: 'r', fig: 'J', text: '圓平分成 10 份，塗色的是 1 份。塗色部分是幾分之幾圓？圓心角是幾度？', parts: [frac(1, 10, '幾分之幾圓'), num(36, '度', '圓心角')], calc: { f: 'frac2deg', n: 1, d: 10 },
      why: '10 份裡的 1 份是 [[1/10]] 圓；一整圈 360 度，360÷10＝36 度。' },
    { id: 'K', src: '評量 5①', tag: 'r', text: '找出 28 和 32 的公因數，以及最大公因數。', parts: [multi([1, 2, 4], 6, '', '公因數'), num(4, '', '最大公因數')], calc: { f: 'cf', a: 28, b: 32 },
      why: '28 的因數是 1、2、4、7、14、28（2×14＝28，是 14 不是 18）；32 的因數是 1、2、4、8、16、32。一樣的是 1、2、4，最大是 4。' },
    { id: 'N', src: '考卷（餅乾裝包）', tag: 'r', text: '餅乾不管 6 片一包，或 15 片一包，都剛好裝完。餅乾可能有幾片？', parts: judge('lcm', ['3 片', '6 片', '30 片'], 2), calc: { f: 'judge', a: 6, b: 15, kind: 'lcm', opts: [3, 6, 30] },
      why: '片數要能被 6 和 15 整除，所以片數是公倍數。3、6、30 裡面只有 30 同時是 6 和 15 的倍數。' },
    { id: 'O', src: '考卷（餅乾分人）', tag: 'r', text: '6 片餅乾或 15 片餅乾平分給一群小朋友，都剛好分完。小朋友可能有幾人？', parts: judge('gcd', ['3 人', '6 人', '30 人'], 0), calc: { f: 'judge', a: 6, b: 15, kind: 'gcd', opts: [3, 6, 30] },
      why: '人數要能把 6 和 15 都分完，所以人數是公因數。3 同時整除 6 和 15；人數比餅乾還多就分不完。' },
    { id: 'P', src: '考卷（木棒）', tag: 'r', text: '木棒長 3、4、6、7 公分，挑 3 根圍三角形。寫出所有能圍成三角形的組合。（順序不同算同一組）', parts: [combos([3, 4, 6, 7], 'can', [[3, 4, 6], [3, 6, 7], [4, 6, 7]])], calc: { f: 'combo', sticks: [3, 4, 6, 7], want: 'can' },
      why: '4 組裡只有 3、4、7 不行（3＋4＝7 只是剛好等於）。其他 3 組短的兩根和都大於最長的。' },
    { id: 'R', src: '活動單 1-1 (9)', tag: 'r', text: '8 個 1、9 個 0.1 和 1 個 0.001 合起來是多少？', parts: [dec('8.901')], calc: { f: 'place', items: [[8, 0], [9, 1], [1, 3]] },
      why: '沒有 0.01，百分位要寫 0 占位：8＋0.9＋0.001＝8.901。' },
    { id: 'S', src: '活動單 (3)', tag: 'r', text: '比大小：1.0007 ○ 1.00007', parts: [choice(CMP, 0)], calc: { f: 'cmp', a: '1.0007', b: '1.00007' },
      why: '從左邊一位一位比：萬分位的 7 比 0 大，所以 1.0007 比較大。不是位數多就比較大。' },
    { id: 'T', src: '活動單 (5)', tag: 'r', text: '比大小：六十點零零六 ○ 60.06', parts: [choice(CMP, 1)], calc: { f: 'cmp', a: '60.006', b: '60.06' },
      why: '六十點零零六寫成 60.006。比百分位：0 比 6 小，所以 60.006 比較小。' },
    { id: 'U3', src: '活動單 1-4 (3)', tag: 'r', text: '22.846 用四捨五入法取概數到小數點後第一位是多少？', parts: [dec('22.8')], calc: { f: 'round', x: '22.846', dp: 1 },
      why: '要留到第一位，看第二位：4 比 5 小，捨去，答案只寫到第一位 22.8。' },
    { id: 'U4', src: '活動單 1-4 (4)', tag: 'r', text: '31.361 用四捨五入法取概數到小數點後第一位是多少？', parts: [dec('31.4')], calc: { f: 'round', x: '31.361', dp: 1 },
      why: '要留到第一位，看第二位：6 比 5 大，要進位，3 變 4，後面的都不留，答案 31.4。' },
    { id: 'U6', src: '活動單 1-4 (6)', tag: 'r', text: '4.324 用四捨五入法取概數到小數點後第二位是多少？', parts: [dec('4.32')], calc: { f: 'round', x: '4.324', dp: 2 },
      why: '要留到第二位，看第三位：4 比 5 小，捨去，答案 4.32。' }
  ];

  // 類題 30 題：由易到難（d 1→2→3），同難度裡公因、公倍、其他單元混排
  var VARIANTS = [
    { id: 'f1', d: 1, text: '找出 12 和 30 的最大公因數。', parts: [num(6)], calc: { f: 'gcd', a: 12, b: 30 },
      why: '12 的因數：1、2、3、4、6、12；30 的因數：1、2、3、5、6、10、15、30。一樣的裡面最大的是 6。' },
    { id: 'm1', d: 1, text: '貼紙大約有 50～70 張，16 張一疊，剛好疊完。貼紙可能有幾張？' + ALL, parts: [multi([64], 4, '張')], calc: { f: 'mult', a: 16, lo: 50, hi: 70 },
      why: '16×3＝48 太少，16×4＝64 在範圍裡，16×5＝80 太多，所以只有 64。' },
    { id: 'd5', d: 1, text: '15.432 用四捨五入法取概數到小數點後第一位是多少？', parts: [dec('15.4')], calc: { f: 'round', x: '15.432', dp: 1 },
      why: '看第二位：3 比 5 小，捨去，答案只寫到第一位 15.4。' },
    { id: 't1', d: 1, text: '用 6 公分、7 公分、13 公分的竹籤，可以圍成一個三角形嗎？', parts: [choice(TF, 1)], calc: { f: 'tri', s: [6, 7, 13] },
      why: '6＋7＝13，只是剛好等於第三根，會躺平。要「大於」才圍得起來。' },
    { id: 'g1', d: 1, text: '24 枝鉛筆和 36 塊橡皮擦分裝成禮物袋，全部裝完，每袋的鉛筆一樣多、橡皮擦也一樣多。最多可以裝成幾袋？', parts: [num(12, ['袋', '枝', '塊'])], calc: { f: 'gcd', a: 24, b: 36 },
      why: '袋數要能同時把 24 和 36 分完，是公因數，最多是最大公因數 12。題目問幾袋，單位寫袋。' },
    { id: 's1', d: 1, text: '[[1/6]] 圓的扇形，圓心角是幾度？', parts: [num(60, '度')], calc: { f: 'frac2deg', n: 1, d: 6 },
      why: '一整圈 360 度分成 6 份，360÷6＝60 度。' },
    { id: 'd3', d: 1, text: '比大小：2.35 ○ 2.305', parts: [choice(CMP, 0)], calc: { f: 'cmp', a: '2.35', b: '2.305' },
      why: '比到百分位：5 比 0 大，所以 2.35 比較大。不是位數多就比較大。' },
    { id: 'a1', d: 1, fig: 'A1', text: '三角形的兩個角是 48° 和 67°。★ 是幾度？', parts: [num(65, '度')], calc: { f: 'tri-ang', known: [48, 67] },
      why: '三角形三個角合起來 180°：180−48−67＝65。' },
    { id: 'm2', d: 1, text: '水彩筆大約有 40～70 枝，12 枝一盒，剛好裝完。水彩筆可能有幾枝？' + ALL, parts: [multi([48, 60], 4, '枝')], calc: { f: 'mult', a: 12, lo: 40, hi: 70 },
      why: '12×4＝48、12×5＝60 都在範圍裡，兩個都要寫。12×3＝36 太少，12×6＝72 太多。' },

    { id: 'g5', d: 2, text: '一盒巧克力不管 9 顆一包，或 12 顆一包，都剛好裝完。巧克力可能有幾顆？', parts: judge('lcm', ['3 顆', '9 顆', '36 顆'], 2), calc: { f: 'judge', a: 9, b: 12, kind: 'lcm', opts: [3, 9, 36] },
      why: '顆數要能被 9 和 12 整除，所以是公倍數。選項裡只有 36 同時是 9 和 12 的倍數。' },
    { id: 'f2', d: 2, text: '找出 14 和 21 的最小公倍數。', parts: [num(42)], calc: { f: 'lcm', a: 14, b: 21 },
      why: '14 的倍數：14、28、42；21 的倍數：21、42。第一個一樣的是 42。' },
    { id: 'm3', d: 2, text: '彈珠大約有 100～150 顆，14 顆一袋，剛好裝完。彈珠可能有幾顆？' + ALL, parts: [multi([112, 126, 140], 4, '顆')], calc: { f: 'mult', a: 14, lo: 100, hi: 150 },
      why: '14×8＝112、14×9＝126、14×10＝140 都在範圍裡，三個都要寫。14×7＝98 太少，14×11＝154 太多。' },
    { id: 't2', d: 2, text: '用 5 公分、9 公分、12 公分的竹籤，可以圍成一個三角形嗎？', parts: [choice(TF, 0)], calc: { f: 'tri', s: [5, 9, 12] },
      why: '只要驗短的兩根：5＋9＝14，比 12 大，圍得起來。' },
    { id: 'd4', d: 2, text: '比大小：七十點零零八 ○ 70.08', parts: [choice(CMP, 1)], calc: { f: 'cmp', a: '70.008', b: '70.08' },
      why: '七十點零零八寫成 70.008。比百分位：0 比 8 小，所以 70.008 比較小。' },
    { id: 's2', d: 2, text: '圓心角 120 度的扇形是幾分之幾圓？（約到最簡）', parts: [frac(1, 3)], calc: { f: 'sec2frac', deg: 120 },
      why: '[[120/360]] 上下同除以 120，等於 [[1/3]] 圓。' },
    { id: 'g2', d: 2, text: '甲、乙兩路公車同時從總站發車，甲路每 12 分鐘一班，乙路每 18 分鐘一班。最少再過幾分鐘，兩路又會同時發車？', parts: [num(36, ['分鐘', '班'])], calc: { f: 'lcm', a: 12, b: 18 },
      why: '時間要同時是 12 和 18 的倍數，最少就是最小公倍數 36。這次是「最少、等到一起」，不是分東西。' },
    { id: 'a2', d: 2, fig: 'A2', text: '四邊形的三個角是 95°、110°、72°。★ 是幾度？', parts: [num(83, '度')], calc: { f: 'quad', known: [95, 110, 72] },
      why: '四邊形四個角合起來 360°：360−95−110−72＝83。' },
    { id: 'r1', d: 2, text: '用約分的方法，找出和 [[18/30]] 一樣大的分數。' + ALL, parts: [fracs(0, [[9, 15], [6, 10], [3, 5]])], calc: { f: 'reduce', w: 0, n: 18, d: 30 },
      why: '18 和 30 的公因數有 1、2、3、6。同除以 2 得 [[9/15]]、除以 3 得 [[6/10]]、除以 6 得 [[3/5]]。' },
    { id: 'd1', d: 2, text: '4 個 1、3 個 0.1、12 個 0.01 和 25 個 0.001 合起來是多少？', parts: [dec('4.445')], calc: { f: 'place', items: [[4, 0], [3, 1], [12, 2], [25, 3]] },
      why: '12 個 0.01 是 0.12，25 個 0.001 是 0.025，都要進位。4＋0.3＋0.12＋0.025＝4.445。' },
    { id: 'f3', d: 2, text: '寫出 24 的所有因數。', parts: [multi([1, 2, 3, 4, 6, 8, 12, 24], 10)], calc: { f: 'factors', n: 24 },
      why: '兩兩一對找：1×24、2×12、3×8、4×6，所以有 1、2、3、4、6、8、12、24。' },
    { id: 'g3', d: 2, text: '45 朵玫瑰和 30 朵百合綁成花束，全部用完，每束的玫瑰一樣多、百合也一樣多。最多可以綁成幾束？', parts: judge('gcd', ['5 束', '15 束', '90 束'], 1), calc: { f: 'judge', a: 45, b: 30, kind: 'gcd', opts: [5, 15, 90], max: true },
      why: '束數要能同時把 45 和 30 分完，是公因數。5 也可以，但問最多，所以是 15；90 是公倍數，花不夠分。' },
    { id: 'd2', d: 2, text: '下面哪些數的 0 不能去掉？全部選出來。', parts: [pick(['6.2000', '40', '9.0105', '1.270', '10.6', '7.50'], ['40', '9.0105', '10.6'])], calc: { f: 'zeros' },
      why: '小數最後面的 0 可以去掉（6.2000、1.270、7.50）。整數 40 的 0、夾在中間的 0（9.0105、10.6）去掉就變成別的數了。' },

    { id: 'g4', d: 3, text: '長 16 公分、寬 12 公分的長方形卡片，全部朝同一個方向拼成一個正方形。正方形的邊長最少是多少？', parts: [num(48, ['公分', '張'])], calc: { f: 'lcm', a: 16, b: 12 },
      why: '邊長要同時是 16 和 12 的倍數，最少就是最小公倍數 48。卡片是拼大，不是切小，所以用公倍數。' },
    { id: 'f4', d: 3, text: '16 和 40 的公因數有哪些？最大公因數是多少？', parts: [multi([1, 2, 4, 8], 6, '', '公因數'), num(8, '', '最大公因數')], calc: { f: 'cf', a: 16, b: 40 },
      why: '16 的因數：1、2、4、8、16；40 的因數：1、2、4、5、8、10、20、40。一樣的是 1、2、4、8，最大是 8。' },
    { id: 's3', d: 3, text: '圓心角 150 度的扇形是幾分之幾圓？（約到最簡）', parts: [frac(5, 12)], calc: { f: 'sec2frac', deg: 150 },
      why: '[[150/360]] 上下同除以 30，等於 [[5/12]] 圓。' },
    { id: 'm4', d: 3, text: '橘子大約有 300～380 顆，26 顆一箱，剛好裝完。橘子可能有幾顆？' + ALL, parts: [multi([312, 338, 364], 4, '顆')], calc: { f: 'mult', a: 26, lo: 300, hi: 380 },
      why: '26×12＝312、26×13＝338、26×14＝364 都在範圍裡。26×11＝286 太少，26×15＝390 太多。' },
    { id: 't3', d: 3, text: '4 根木棒長 3、5、8、10 公分，挑 3 根圍三角形。寫出所有「不能」圍成三角形的組合。（順序不同算同一組）', parts: [combos([3, 5, 8, 10], 'cannot', [[3, 5, 8], [3, 5, 10]])], calc: { f: 'combo', sticks: [3, 5, 8, 10], want: 'cannot' },
      why: '4 組一組一組驗：3＋5＝8 只是等於、3＋5＜10，這兩組不行；3＋8＞10、5＋8＞10 可以。' },
    { id: 'a3', d: 3, fig: 'A3', text: '四邊形裡多畫了一條線，分成兩塊。圖上標了 115°、38°、102°、60°。★ 那個角是幾度？（看清楚 ★ 標的是哪個角）', parts: [num(137, '度')], calc: { f: 'quad', known: [115, 60, 180 - 38], flat: true },
      why: '左邊那塊四邊形：38° 旁邊的角是 180−38＝142°，最後一個角是 360−115−60−142＝43°。★ 和 43° 排在同一條直線上，★＝180−43＝137°。' },
    { id: 'r2', d: 3, text: '用約分的方法，找出和 3[[30/72]] 一樣大的帶分數。' + ALL, parts: [fracs(3, [[15, 36], [10, 24], [5, 12]])], calc: { f: 'reduce', w: 3, n: 30, d: 72 },
      why: '30 和 72 的公因數有 1、2、3、6。同除以 2 得 [[15/36]]、除以 3 得 [[10/24]]、除以 6 得 [[5/12]]；整數 3 不變。' },
    { id: 'd6', d: 3, text: '8.396 用四捨五入法取概數到小數點後第二位是多少？', parts: [dec('8.40')], calc: { f: 'round', x: '8.396', dp: 2 },
      why: '看第三位：6 要進位，9 進位變 10，所以是 8.40。要留到第二位，最後的 0 要寫。' }
  ];

  // 約分通分 15 題：由易到難（d 1→2→3），約分、通分、綜合混排；只有約分、通分、比大小，沒有異分母加減
  var FRACTIONS = [
    { id: 'y1', d: 1, text: '把 [[12/18]] 約成最簡分數。', parts: [frac(2, 3, '', '')], calc: { f: 'simplify', n: 12, d: 18 },
      why: '12 和 18 的最大公因數是 6，上下同除以 6，得到 [[2/3]]。也可以先除以 2 得 [[6/9]]，再除以 3。' },
    { id: 'c1', d: 1, text: '用最小公倍數當公分母，把 [[2/3]] 和 [[3/5]] 通分。', parts: [common([2, 3], [3, 5])], calc: { f: 'common', a: [2, 3], b: [3, 5] },
      why: '3 和 5 互質，公分母是 3×5＝15。[[2/3]] 上下乘 5 得 [[10/15]]，[[3/5]] 上下乘 3 得 [[9/15]]。' },
    { id: 'y4', d: 1, text: '[[21/35]] 是最簡分數嗎？', parts: [choice(['是', '不是'], 1)], calc: { f: 'isSimple', n: 21, d: 35 },
      why: '21 和 35 都能被 7 整除，除了 1 還有公因數 7，所以不是最簡分數。上下同除以 7 得 [[3/5]]。' },
    { id: 'c2', d: 1, text: '用最小公倍數當公分母，把 [[3/4]] 和 [[5/8]] 通分。', parts: [common([3, 4], [5, 8])], calc: { f: 'common', a: [3, 4], b: [5, 8] },
      why: '8 是 4 的倍數，公分母就是 8。[[3/4]] 上下乘 2 得 [[6/8]]，[[5/8]] 不用動。' },
    { id: 'y2', d: 2, text: '把 [[36/60]] 約成最簡分數。', parts: [frac(3, 5, '', '')], calc: { f: 'simplify', n: 36, d: 60 },
      why: '36 和 60 的最大公因數是 12，同除以 12 一次得 [[3/5]]。一步一步也可以：除以 2 得 [[18/30]]，除以 2 得 [[9/15]]，除以 3 得 [[3/5]]。' },
    { id: 'c4', d: 2, text: '先通分，再比大小：[[3/5]] ○ [[4/7]]', parts: [common([3, 5], [4, 7], '通分', 0, true), choice(CMP, 0, '比大小')], calc: { f: 'fcmp', a: [0, 3, 5], b: [0, 4, 7] },
      why: '公分母 35：[[3/5]]＝[[21/35]]、[[4/7]]＝[[20/35]]。21 比 20 大，所以 [[3/5]] 比較大。' },
    { id: 'y5', d: 2, text: '用約分的方法，找出和 [[16/40]] 一樣大的分數。' + ALL, parts: [fracs(0, [[8, 20], [4, 10], [2, 5]], 6)], calc: { f: 'reduce', w: 0, n: 16, d: 40 },
      why: '16 和 40 的公因數有 1、2、4、8。同除以 2 得 [[8/20]]、除以 4 得 [[4/10]]、除以 8 得 [[2/5]]，三個都要寫。' },
    { id: 'c3', d: 2, text: '用最小公倍數當公分母，把 [[5/6]] 和 [[3/8]] 通分。', parts: [common([5, 6], [3, 8])], calc: { f: 'common', a: [5, 6], b: [3, 8] },
      why: '6 和 8 的最小公倍數是 24，公分母用 24，不用 48。[[5/6]] 上下乘 4 得 [[20/24]]，[[3/8]] 上下乘 3 得 [[9/24]]。' },
    { id: 'z2', d: 2, text: '媽媽買了兩瓶果汁：蘋果汁 [[5/6]] 公升，柳橙汁 [[7/9]] 公升。哪一瓶比較多？那一瓶有多少？', parts: [choice(['蘋果汁', '柳橙汁'], 0, '哪一瓶比較多'), frac(5, 6, '那一瓶有多少', '', ['公升', '公分', '公斤'])], calc: { f: 'fcmp', a: [0, 5, 6], b: [0, 7, 9], winner: true },
      why: '公分母 18：[[5/6]]＝[[15/18]]、[[7/9]]＝[[14/18]]。15 比 14 大，蘋果汁比較多，有 [[5/6]] 公升。' },
    { id: 'c5', d: 2, text: '先通分，再比大小：[[7/10]] ○ [[11/15]]', parts: [common([7, 10], [11, 15], '通分', 0, true), choice(CMP, 1, '比大小')], calc: { f: 'fcmp', a: [0, 7, 10], b: [0, 11, 15] },
      why: '10 和 15 的最小公倍數是 30：[[7/10]]＝[[21/30]]、[[11/15]]＝[[22/30]]。21 比 22 小，所以 [[7/10]] 比較小。' },
    { id: 'y3', d: 3, text: '把 [[84/132]] 約成最簡分數。', parts: [frac(7, 11, '', '')], calc: { f: 'simplify', n: 84, d: 132 },
      why: '84 和 132 的最大公因數是 12，同除以 12 得 [[7/11]]。先除以 2、再除以 2、再除以 3 也一樣。7 和 11 只剩公因數 1，才算約完。' },
    { id: 'c6', d: 3, text: '先通分，再比大小：3[[5/8]] ○ 3[[7/12]]', parts: [common([5, 8], [7, 12], '通分', 3, true), choice(CMP, 0, '比大小')], calc: { f: 'fcmp', a: [3, 5, 8], b: [3, 7, 12] },
      why: '整數都是 3，只要比分數。8 和 12 的最小公倍數是 24：[[5/8]]＝[[15/24]]、[[7/12]]＝[[14/24]]。15 比 14 大，所以 3[[5/8]] 比較大。' },
    { id: 'y6', d: 3, text: '用約分的方法，找出和 4[[24/60]] 一樣大的帶分數。' + ALL, parts: [fracs(4, [[12, 30], [8, 20], [6, 15], [4, 10], [2, 5]], 6)], calc: { f: 'reduce', w: 4, n: 24, d: 60 },
      why: '24 和 60 的公因數有 1、2、3、4、6、12。同除以 2、3、4、6、12，得 [[12/30]]、[[8/20]]、[[6/15]]、[[4/10]]、[[2/5]]，五個都要寫；整數 4 不變。' },
    { id: 'z3', d: 3, text: '先約分，再通分比大小：[[28/48]] ○ [[45/72]]', parts: [frac(7, 12, '左邊約成最簡', ''), frac(5, 8, '右邊約成最簡', ''), choice(CMP, 1, '比大小')], calc: { f: 'fcmp', a: [0, 28, 48], b: [0, 45, 72], simp: true },
      why: '先約分：28、48 同除以 4 得 [[7/12]]；45、72 同除以 9 得 [[5/8]]。公分母 24：[[14/24]]、[[15/24]]，14 比 15 小。不先約分，公分母要用到 144。' },
    { id: 'z1', d: 3, text: '把 [[2/3]]、[[5/8]]、[[7/12]] 由小到大排列。', parts: [order(['[[2/3]]', '[[5/8]]', '[[7/12]]'], [2, 1, 0])], calc: { f: 'order', fr: [[2, 3], [5, 8], [7, 12]] },
      why: '3、8、12 的最小公倍數是 24：[[2/3]]＝[[16/24]]、[[5/8]]＝[[15/24]]、[[7/12]]＝[[14/24]]。14＜15＜16，所以 [[7/12]]＜[[5/8]]＜[[2/3]]。' }
  ];

  // 期中考錯題 10 題（2026-11-06，五上期中評量 75 分）：題目數字照原卷、敘述改寫；家長用 ?add= 連結跟紙本 23 題一起加進帳號（pm:）
  var MIDTERM = [
    { id: 'mt1', src: '期中 是非 3', tag: 'x', text: '判斷對錯：「任何大於 0 的整數，都至少有 2 個因數。」', parts: [choice(['對', '不對'], 1)], calc: { f: 'atleast2' },
      why: '1 的因數只有 1 自己，只有 1 個因數，所以「任何」不成立。只要找到一個不行的，這句話就不對。' },
    { id: 'mt2', src: '期中 選擇 3', tag: 'x', text: '三角形的兩條邊是 3 公分和 8 公分，第三邊可以是多少？', parts: [choice(['5 公分', '6 公分', '11 公分', '12 公分'], 1)], calc: { f: 'tri3', a: 3, b: 8, opts: [5, 6, 11, 12], want: 'can' },
      why: '第三邊要比兩邊的差大、比兩邊的和小：8−3＝5、8＋3＝11，要在 5 和 11 中間。5 和 11 剛好等於，會躺平；12 太長。只有 6 可以。' },
    { id: 'mt3', src: '期中 選擇 4', tag: 'x', text: '長 38 公分、寬 19 公分的長方形拼圖，全部朝同一個方向排成一片正方形。正方形的邊長最短是多少？', parts: judge('lcm', ['1 公分', '19 公分', '38 公分', '57 公分'], 2), calc: { f: 'judge', a: 38, b: 19, kind: 'lcm', opts: [1, 19, 38, 57] },
      why: '拼圖是拼大，邊長要同時是 38 和 19 的倍數＝公倍數。38 是 19 的 2 倍，所以最短 38 公分。19 是公因數，那是「剪小」才用的。' },
    { id: 'mt4', src: '期中 選擇 5', tag: 'x', text: '全班加老師一共 27 人，7 個蛋糕平分，每人可以分到幾個蛋糕？', parts: [choice(['[[1/7]] 個', '[[1/27]] 個', '[[27/7]] 個', '[[7/27]] 個'], 3)], calc: { f: 'div', a: 7, b: 27 },
      why: '7 個蛋糕分給 27 人＝7÷27＝[[7/27]] 個：被分的蛋糕當分子、人數當分母。蛋糕比人少，每人分不到 1 個，[[27/7]] 比 1 大，一定不對。' },
    { id: 'mt5', src: '期中 選擇 6', tag: 'x', text: '有 10、15、20、40 四個數，去掉哪一個數後，剩下的三個數任取兩個，較大的都能被較小的整除？', parts: [choice(['10', '15', '20', '40'], 1)], calc: { f: 'chain', nums: [10, 15, 20, 40] },
      why: '一個一個試：去掉 15，剩 10、20、40，20÷10、40÷10、40÷20 都整除。留著 15 的話，20÷15 除不盡，所以要去掉 15。' },
    { id: 'mt6', src: '期中 填充 (2)', tag: 'x', text: '一個等腰三角形，其中兩條邊是 7 公分和 14 公分，第三邊是幾公分？', parts: [num(14, '公分')], calc: { f: 'iso', a: 7, b: 14 },
      why: '等腰三角形有兩邊一樣長，第三邊只能是 7 或 14。7、7、14：7＋7＝14 只是剛好等於，圍不起來；7、14、14 可以，所以是 14 公分。' },
    { id: 'mt7', src: '期中 填充 (6)', tag: 'x', text: '把 1.0894、0.0523、1.521、0.1 由小到大排出來。', parts: [order(['1.0894', '0.0523', '1.521', '0.1'], [1, 3, 0, 2], '順序不對。先看清楚題目要「由小到大」，再一位一位比。')], calc: { f: 'dorder', xs: ['1.0894', '0.0523', '1.521', '0.1'] },
      why: '先看清楚是「由小到大」。整數部分 0 的比較小：0.0523＜0.1；1.0894 和 1.521 比十分位 0＜5。所以 0.0523＜0.1＜1.0894＜1.521。' },
    { id: 'mt8', src: '期中 填充 (8)', tag: 'x', text: '75★□ 是一個四位數，是 2 的倍數，★ 和 □ 的數字和是 13。這個四位數最小是多少？最大是多少？', parts: [num(7558, '', '最小'), num(7594, '', '最大')], calc: { f: 'digits', tpl: '75★□', m: 2, sum: 13 },
      why: '2 的倍數個位是雙數，□ 只能 4、6、8（□ 是 0、2 時 ★ 要 13、11，不行）：7594、7576、7558。最小 7558、最大 7594。7549 個位是 9，不是 2 的倍數。' },
    { id: 'mt9', src: '期中 比大小 (4)', tag: 'x', text: '比大小：[[2/3]]＋[[2/3]] ○ [[4/6]]', parts: [choice(CMP, 0)], calc: { f: 'fsum', a: [2, 3], k: 2, b: [4, 6] },
      why: '同分母相加，分母不變、分子相加：[[2/3]]＋[[2/3]]＝[[4/3]]，比 1 大。[[4/6]]＝[[2/3]] 比 1 小，所以左邊大。分母不能也加成 6。' },
    { id: 'mt10', src: '期中 應用 (2)', tag: 'x', text: '一箱水梨大約有 380～520 個，每 16 個裝成一盒，剛好裝完。一箱水梨最少有幾個？最多有幾個？', parts: [num(384, '個', '最少'), num(512, '個', '最多')], calc: { f: 'range', a: 16, lo: 380, hi: 520 },
      why: '380÷16＝23…12，16×23＝368 比 380 小，不在範圍裡，要再多一盒：16×24＝384。520÷16＝32…8，16×32＝512。' }
  ];

  // 期中類題 20 題（2026-11-06）：針對 MIDTERM 的錯，由易到難；範圍內倍數、公因或公倍、三角形邊長、整數相除、看清題目要求（由小到大／最小）多出
  var EXAM = [
    { id: 'e1', d: 1, text: '下面哪一個數只有 1 個因數？', parts: [choice(['1', '2', '11', '25'], 0)], calc: { f: 'onefac', opts: [1, 2, 11, 25] },
      why: '1 的因數只有 1。2、11 有 2 個因數（1 和自己），25 有 1、5、25 三個。所以「每個數都至少有 2 個因數」不對，1 是例外。' },
    { id: 'e2', d: 1, text: '三角形的兩條邊是 4 公分和 9 公分，第三邊可以是多少？', parts: [choice(['4 公分', '5 公分', '10 公分', '13 公分'], 2)], calc: { f: 'tri3', a: 4, b: 9, opts: [4, 5, 10, 13], want: 'can' },
      why: '9−4＝5、9＋4＝13，第三邊要比 5 大、比 13 小。5 和 13 剛好等於，圍不起來；只有 10 可以。' },
    { id: 'e3', d: 1, text: '3 個蛋糕平分給 5 個人，每人分到幾個蛋糕？', parts: [choice(['[[5/3]] 個', '[[1/3]] 個', '[[3/5]] 個', '[[1/5]] 個'], 2)], calc: { f: 'div', a: 3, b: 5 },
      why: '3÷5＝[[3/5]]：被分的蛋糕 3 當分子，人數 5 當分母。蛋糕比人少，每人一定分不到 1 個。' },
    { id: 'e4', d: 1, text: '把 2.07、2.7、0.207、2.0701 由小到大排出來。', parts: [order(['2.07', '2.7', '0.207', '2.0701'], [2, 0, 3, 1], '順序不對。先看清楚題目要「由小到大」，再一位一位比。')], calc: { f: 'dorder', xs: ['2.07', '2.7', '0.207', '2.0701'] },
      why: '整數部分 0.207 最小。其他都是 2 開頭，比十分位：2.7 最大。2.07 和 2.0701 前面一樣，2.0701 多了萬分位的 1。0.207＜2.07＜2.0701＜2.7。' },
    { id: 'e5', d: 1, text: '等腰三角形的兩條邊是 5 公分和 11 公分，第三邊是幾公分？', parts: [num(11, '公分')], calc: { f: 'iso', a: 5, b: 11 },
      why: '第三邊只能是 5 或 11。5、5、11：5＋5＝10 比 11 小，圍不起來；5、11、11 可以，所以是 11 公分。' },
    { id: 'e6', d: 1, text: '一盒彈珠大約有 200～260 顆，18 顆裝一袋，剛好裝完。最少有幾顆？最多有幾顆？', parts: [num(216, '顆', '最少'), num(252, '顆', '最多')], calc: { f: 'range', a: 18, lo: 200, hi: 260 },
      why: '200÷18＝11…2，18×11＝198 不到 200，要 12 袋：18×12＝216。260÷18＝14…8，18×14＝252。' },

    { id: 'e7', d: 2, text: '長 12 公分、寬 8 公分的長方形磁磚，全部朝同一個方向排成一個正方形。正方形的邊長最短是多少？', parts: judge('lcm', ['4 公分', '8 公分', '24 公分', '48 公分'], 2), calc: { f: 'judge', a: 12, b: 8, kind: 'lcm', opts: [4, 8, 24, 48], min: true },
      why: '磁磚是拼大，邊長要同時是 12 和 8 的倍數＝公倍數。24 和 48 都是，問最短，是最小公倍數 24。4 是公因數，剪小才用。' },
    { id: 'e8', d: 2, text: '長 30 公分、寬 18 公分的紙，剪成一樣大的正方形，剛好剪完。正方形的邊長最長是多少？', parts: judge('gcd', ['3 公分', '6 公分', '18 公分', '90 公分'], 1), calc: { f: 'judge', a: 30, b: 18, kind: 'gcd', opts: [3, 6, 18, 90], max: true },
      why: '剪小，邊長要能同時把 30 和 18 分完＝公因數。3 和 6 都可以，問最長，是最大公因數 6。18 分不完 30；90 是公倍數。' },
    { id: 'e9', d: 2, text: '一箱橘子大約有 300～400 顆，24 顆裝一盒，剛好裝完。最少有幾顆？最多有幾顆？', parts: [num(312, '顆', '最少'), num(384, '顆', '最多')], calc: { f: 'range', a: 24, lo: 300, hi: 400 },
      why: '300÷24＝12…12，24×12＝288 比 300 少，不算，要 13 盒：24×13＝312。400÷24＝16…16，24×16＝384。算完要檢查有沒有在範圍裡。' },
    { id: 'e10', d: 2, text: '64★□ 是一個四位數，是 5 的倍數，★ 和 □ 的數字和是 9。這個四位數最小是多少？最大是多少？', parts: [num(6445, '', '最小'), num(6490, '', '最大')], calc: { f: 'digits', tpl: '64★□', m: 5, sum: 9 },
      why: '5 的倍數個位是 0 或 5。□＝0 時 ★＝9：6490；□＝5 時 ★＝4：6445。最小 6445、最大 6490，看清楚哪一格填最小。' },
    { id: 'e11', d: 2, text: '7 公升果汁平分裝成 4 瓶，每瓶有幾公升？（用分數表示）', parts: [frac(7, 4, '', '公升')], calc: { f: 'div', a: 7, b: 4 },
      why: '7÷4＝[[7/4]] 公升（也就是 1[[3/4]] 公升）。果汁 7 當分子、瓶數 4 當分母，不要寫反成 [[4/7]]。' },
    { id: 'e12', d: 2, text: '三角形的兩條邊是 6 公分和 10 公分，下面哪一個「不能」當第三邊？', parts: [choice(['5 公分', '8 公分', '12 公分', '16 公分'], 3)], calc: { f: 'tri3', a: 6, b: 10, opts: [5, 8, 12, 16], want: 'cannot' },
      why: '10−6＝4、10＋6＝16，第三邊要比 4 大、比 16 小。5、8、12 都在中間；16 剛好等於兩邊的和，會躺平，不能。' },
    { id: 'e13', d: 2, text: '比大小：[[3/4]]＋[[3/4]] ○ [[6/8]]', parts: [choice(CMP, 0)], calc: { f: 'fsum', a: [3, 4], k: 2, b: [6, 8] },
      why: '同分母相加，分母不變：[[3/4]]＋[[3/4]]＝[[6/4]]，比 1 大。[[6/8]]＝[[3/4]] 比 1 小。分母不能跟著加成 8。' },
    { id: 'e14', d: 2, text: '把 0.36、0.306、3.06、0.0366 由小到大排出來。', parts: [order(['0.36', '0.306', '3.06', '0.0366'], [3, 1, 0, 2], '順序不對。先看清楚題目要「由小到大」，再一位一位比。')], calc: { f: 'dorder', xs: ['0.36', '0.306', '3.06', '0.0366'] },
      why: '3.06 整數是 3，最大。其他比十分位：0.0366 是 0，最小；0.36 和 0.306 十分位都是 3，比百分位 6＞0。0.0366＜0.306＜0.36＜3.06。' },

    { id: 'e15', d: 3, text: '有 6、9、12、24 四個數，去掉哪一個數後，剩下的三個數任取兩個，較大的都能被較小的整除？', parts: [choice(['6', '9', '12', '24'], 1)], calc: { f: 'chain', nums: [6, 9, 12, 24] },
      why: '去掉 9，剩 6、12、24：12÷6、24÷6、24÷12 都整除。留著 9 的話，12÷9 除不盡，所以要去掉 9。' },
    { id: 'e16', d: 3, text: '一批鉛筆大約有 150～210 枝，12 枝一打，剛好裝完。最少有幾枝？最多有幾枝？', parts: [num(156, '枝', '最少'), num(204, '枝', '最多')], calc: { f: 'range', a: 12, lo: 150, hi: 210 },
      why: '150÷12＝12…6，12×12＝144 不到 150，要 13 打：12×13＝156。210÷12＝17…6，12×17＝204。' },
    { id: 'e17', d: 3, text: '一批糖果不管 15 顆裝一包，或 20 顆裝一包，都剛好裝完。糖果最少有幾顆？', parts: judge('lcm', ['5 顆', '20 顆', '60 顆', '300 顆'], 2), calc: { f: 'judge', a: 15, b: 20, kind: 'lcm', opts: [5, 20, 60, 300], min: true },
      why: '顆數要同時被 15 和 20 整除＝公倍數。60 和 300 都是，問最少，是最小公倍數 60。5 是公因數；20 不是 15 的倍數。' },
    { id: 'e18', d: 3, text: '等腰三角形的兩條邊是 8 公分和 3 公分，第三邊是幾公分？周長是幾公分？', parts: [num(8, '公分', '第三邊'), num(19, '公分', '周長')], calc: { f: 'iso', a: 8, b: 3, per: true },
      why: '第三邊只能是 3 或 8。3、3、8：3＋3＝6 比 8 小，圍不起來；3、8、8 可以。周長 3＋8＋8＝19 公分。' },
    { id: 'e19', d: 3, text: '5★3□ 是一個四位數，是 2 的倍數，★ 和 □ 的數字和是 15。這個四位數最小是多少？最大是多少？', parts: [num(5738, '', '最小'), num(5936, '', '最大')], calc: { f: 'digits', tpl: '5★3□', m: 2, sum: 15 },
      why: '□ 要是雙數，★＝15−□ 不能超過 9，所以 □ 只能 6 或 8：5936、5738。最小 5738、最大 5936。□＝9 的 5639 是單數，不行。' },
    { id: 'e20', d: 3, text: '4 公尺長的緞帶，平分剪成 9 段，每段長幾公尺？', parts: [choice(['[[9/4]] 公尺', '[[4/9]] 公尺', '[[1/9]] 公尺', '[[1/4]] 公尺'], 1)], calc: { f: 'div', a: 4, b: 9 },
      why: '4÷9＝[[4/9]] 公尺：被分的長度 4 當分子、段數 9 當分母。[[1/9]] 是 1 公尺分 9 段，這裡有 4 公尺。' }
  ];

  // 扇形小考錯題 7 題（2026-11-06，五上單元五）：題目、選項照原卷、敘述改寫；跟紙本、期中錯題用同一個 ?add= 連結加進帳號（ps:）
  var YN = ['對', '不對'];
  var SECTOR = [
    { id: 'sc1', src: '扇形 是非 4', tag: 'x', text: '判斷對錯：「在大、小兩個不同的圓裡各畫一個扇形，只要圓心角都是 90 度，兩個扇形占各自圓形的比例（幾分之幾圓）就一樣。」', parts: [choice(YN, 0)], calc: { f: 'secfact' },
      why: '幾分之幾圓只看圓心角：90 度是 360 度的 [[1/4]]，大圓、小圓都是 [[1/4]] 圓。圓的大小只會讓扇形大小不同，比例不變。' },
    { id: 'sc2', src: '扇形 是非 5', tag: 'x', text: '判斷對錯：「兩個圓心角一樣大的扇形，合起來剛好是一個完整的圓。」', parts: [choice(YN, 1)], calc: { f: 'secfact' },
      why: '要剛好合成一個圓，兩個扇形都要是 180 度（半圓）。例如兩個 30 度的扇形，合起來只有 60 度，不是一個圓，所以不一定。' },
    { id: 'sc3', src: '扇形 是非 15', tag: 'x', text: '判斷對錯：「圓心角是指兩條直徑所夾的角，而且頂點一定在圓周上。」', parts: [choice(YN, 1)], calc: { f: 'secfact' },
      why: '這句錯兩處：圓心角是兩條「半徑」夾的角，不是直徑；頂點在「圓心」，不是在圓周上。' },
    { id: 'sc4', src: '扇形 選擇 8', tag: 'x', text: '關於扇形，下面哪一句是對的？', parts: [choice(['扇形的圓心角一定小於 180°', '扇形的頂點是圓心', '兩條不一樣長的直線邊和一段圓弧可以組成扇形', '扇形是由直徑和圓弧組成的'], 1)], calc: { f: 'secfact' },
      why: '扇形由兩條半徑和一段圓弧圍成，頂點就是圓心。圓心角可以大於 180°（例如 300°）；兩條直線邊都是半徑，一定一樣長；是半徑不是直徑。' },
    { id: 'sc5', src: '扇形 選擇 11', tag: 'x', text: '圓心角 315° 的扇形，是幾分之幾圓？', parts: [choice(['[[5/8]] 圓', '[[3/4]] 圓', '[[7/8]] 圓', '[[9/10]] 圓'], 2)], calc: { f: 'secopt', deg: 315 },
      why: '[[315/360]] 上下同除以 45，等於 [[7/8]] 圓。[[3/4]] 圓是 270 度。也可以想：再 45 度（[[1/8]] 圓）就滿一圈，所以是 [[7/8]] 圓。' },
    { id: 'sc6', src: '扇形 選擇 17', tag: 'x', text: '下面哪一個「不是」組成扇形的基本要素？', parts: [choice(['圓心', '半徑', '圓周', '圓弧'], 2)], calc: { f: 'secfact' },
      why: '扇形由圓心、兩條半徑和一段圓弧組成。圓弧只是圓周上的一段；整圈的圓周不是扇形的一部分。' },
    { id: 'sc7', src: '扇形 選擇 27', tag: 'x', text: '把一張圓形色紙對摺 3 次，得到的扇形是幾分之幾圓？', parts: [choice(['[[1/2]] 圓', '[[1/3]] 圓', '[[1/4]] 圓', '[[1/8]] 圓'], 3)], calc: { f: 'secopt', fold: 3 },
      why: '對摺 1 次是 [[1/2]] 圓，2 次 [[1/4]] 圓，3 次 [[1/8]] 圓：每摺一次再分一半，不是摺 3 次就變 [[1/3]]。' }
  ];

  // 單元（康軒五上，115 學年度課程計畫）：從 calc.f 推（judge 看找公因或公倍），錯題庫按單元分組用，不另外存
  var UNIT_F = { place: 'g5a1', cmp: 'g5a1', round: 'g5a1', zeros: 'g5a1', dorder: 'g5a1',
    gcd: 'g5a2', cf: 'g5a2', factors: 'g5a2', atleast2: 'g5a2', onefac: 'g5a2', chain: 'g5a2',
    lcm: 'g5a3', mult: 'g5a3', range: 'g5a3', digits: 'g5a3',
    reduce: 'g5a4', simplify: 'g5a4', isSimple: 'g5a4', common: 'g5a4', fcmp: 'g5a4', order: 'g5a4', div: 'g5a4', fsum: 'g5a4',
    tri: 'g5a5', combo: 'g5a5', tri3: 'g5a5', iso: 'g5a5', quad: 'g5a5', 'tri-ang': 'g5a5', sec2frac: 'g5a5', frac2deg: 'g5a5', secopt: 'g5a5', secfact: 'g5a5' };
  function unitOf(Q) { return !Q || !Q.calc ? '' : Q.calc.f === 'judge' ? (Q.calc.kind === 'gcd' ? 'g5a2' : 'g5a3') : UNIT_F[Q.calc.f] || ''; }

  // ================= 文字 =================
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // [[n/d]] → 上下排的分數
  function fmt(s) { return esc(s).replace(/\[\[(\d+)\/(\d+)\]\]/g, '<span class="frc"><span>$1</span><span>$2</span></span>'); }
  function plain(s) { return String(s).replace(/(\d)\[\[(\d+)\/(\d+)\]\]/g, '$1 又 $2/$3').replace(/\[\[(\d+)\/(\d+)\]\]/g, '$1/$2'); }
  function partAns(p) {
    switch (p.t) {
      case 'num': return p.ans + (p.units ? p.units[0] : p.suf || '');
      case 'multi': return p.ans.join('、') + (p.suf ? ' ' + p.suf : '');
      case 'frac': return '[[' + p.n + '/' + p.d + ']]' + (p.units ? ' ' + p.units[0] : p.suf ? ' ' + p.suf : '');
      case 'fracs': return p.ans.map(function (a) { return (p.w || '') + '[[' + a[0] + '/' + a[1] + ']]'; }).join('、');
      case 'common': return p.ans.map(function (a) { return (p.w || '') + '[[' + a[0] + '/' + a[1] + ']]'; }).join('、');
      case 'order': return p.ans.map(function (i) { return p.opts[i]; }).join(' ＜ ');
      case 'choice': return p.opts[p.ans];
      case 'pick': return p.ans.join('、');
      case 'combos': return p.ans.map(function (a) { return a.join('、'); }).join('／');
      case 'dec': return p.ans;
    }
    return '';
  }
  function ansText(Q) { return Q.parts.map(function (p) { return (p.label ? p.label.replace(/？$/, '') + '：' : '') + partAns(p); }).join('；'); }

  // ================= 判分 =================
  function intOf(s) { s = String(s == null ? '' : s).trim(); return /^\d+$/.test(s) ? parseInt(s, 10) : null; }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function bad(msg) { return { ok: false, msg: msg }; }
  function soft(msg) { return { ok: false, soft: true, msg: msg }; }
  var GOOD = { ok: true, msg: '' };
  function check(p, v) {
    var seen, i, n;
    switch (p.t) {
      case 'num': {
        n = intOf(v && v.v); if (n === null) return soft('先填數字。');
        if (p.units && !v.u) return soft('還要選單位。');
        if (n !== p.ans) return bad('數字不對，再算一次。');
        if (p.units && v.u !== p.units[0]) return bad('數字對了，但單位不對，再看一次題目問的是什麼。');
        return GOOD;
      }
      case 'multi': {
        var got = (v || []).map(function (x) { return String(x == null ? '' : x).trim(); }).filter(Boolean);
        if (!got.length) return soft('先填答案。');
        var nums = got.map(intOf); if (nums.some(function (x) { return x === null; })) return soft('每一格只填整數。');
        seen = {}; for (i = 0; i < nums.length; i++) { if (seen[nums[i]]) return bad(nums[i] + ' 寫了兩次。'); seen[nums[i]] = 1; }
        for (i = 0; i < nums.length; i++) if (p.ans.indexOf(nums[i]) < 0) return bad(nums[i] + ' 不符合題目，再檢查一次。');
        if (nums.length < p.ans.length) return bad('寫的都對，但還有別的可能，再找找看！');
        return GOOD;
      }
      case 'frac': {
        var a = intOf(v && v.n), b = intOf(v && v.d); if (a === null || b === null || !b) return soft('分子、分母都要填。');
        if (a * p.d !== b * p.n) return bad('不是這個分數，再算一次。');
        if (gcd(a, b) !== 1) return soft('一樣大了，但還可以再約分，約到最簡。');
        if (p.units) { if (!v.u) return soft('還要選單位。'); if (v.u !== p.units[0]) return bad('分數對了，但單位不對。'); }
        return GOOD;
      }
      case 'fracs': {
        var rows = (v || []).filter(function (r) { return r && (String(r.n || '').trim() || String(r.d || '').trim()); });
        if (!rows.length) return soft('先填答案。');
        seen = {};
        for (i = 0; i < rows.length; i++) {
          var x = intOf(rows[i].n), y = intOf(rows[i].d); if (x === null || y === null || !y) return soft('分子、分母都要填。');
          var key = x + '/' + y; if (seen[key]) return bad(key + ' 寫了兩次。'); seen[key] = 1;
          if (!p.ans.some(function (q) { return q[0] === x && q[1] === y; })) return bad(key + ' 不是約分得到的，再檢查一次。');
        }
        if (rows.length < p.ans.length) return bad('寫的都對，但還有別的可能，再找找看！');
        return GOOD;
      }
      case 'common': {
        var f1 = intOf(v && v.n1), g1 = intOf(v && v.d1), f2 = intOf(v && v.n2), g2 = intOf(v && v.d2);
        if (f1 === null || g1 === null || f2 === null || g2 === null || !g1 || !g2) return soft('兩個分數的分子、分母都要填。');
        if (g1 !== g2) return bad('兩個分母要一樣才算通分。');
        if (f1 * p.a[1] !== g1 * p.a[0] || f2 * p.b[1] !== g2 * p.b[0]) return bad('大小變了：分母乘多少，分子也要乘多少。');
        if (!p.anyDen && g1 !== p.den) return soft('大小對了，但公分母可以更小，用最小公倍數。');
        return GOOD;
      }
      case 'order': {
        var o = (v || []).map(function (x) { return x == null || x === '' ? null : +x; });
        if (o.length < p.ans.length || o.some(function (x) { return x === null; })) return soft('每一格都要選一個分數。');
        if (o.some(function (x, j) { return o.indexOf(x) !== j; })) return soft('每個分數只能用一次。');
        return o.join() === p.ans.join() ? GOOD : bad(p.hint || '順序不對，先通分再比比看。');
      }
      case 'choice': return v == null || v === '' ? soft('先選一個。') : +v === p.ans ? GOOD : bad('再想想看。');
      case 'pick': {
        var ch = v || []; if (!ch.length) return soft('先選答案。');
        for (i = 0; i < ch.length; i++) if (p.ans.indexOf(ch[i]) < 0) return bad(ch[i] + ' 的 0 其實可以去掉，再想想。');
        if (ch.length < p.ans.length) return bad('選的都對，但還有別的數，再找找看！');
        return GOOD;
      }
      case 'combos': {
        var rs = (v || []).map(function (r) { return (r || []).map(function (s) { return String(s == null ? '' : s).trim(); }); }).filter(function (r) { return r.some(Boolean); });
        if (!rs.length) return soft('先填答案。');
        seen = {};
        for (i = 0; i < rs.length; i++) {
          var tri = rs[i].map(intOf); if (tri.length !== 3 || tri.some(function (t) { return t === null; })) return soft('每一組都要填 3 個數。');
          tri = tri.slice().sort(function (s, t) { return s - t; });
          var pool = p.sticks.slice(); if (!tri.every(function (t) { var j = pool.indexOf(t); if (j < 0) return false; pool.splice(j, 1); return true; })) return soft('只能用題目給的長度，每根只能用一次。');
          var k = tri.join('、'); if (seen[k]) return bad(k + ' 重複了，順序不同算同一組。'); seen[k] = 1;
          if (!p.ans.some(function (a2) { return a2.join('、') === k; })) return bad(k + (p.want === 'cannot' ? ' 其實圍得起來。' : ' 其實圍不起來。'));
        }
        if (rs.length < p.ans.length) return bad('寫的都對，但還漏了別的組合，再找找看！');
        return GOOD;
      }
      case 'dec': {
        var d = String(v == null ? '' : v).trim(); if (!d) return soft('先填答案。');
        if (d === p.ans) return GOOD;
        if (/^\d+(\.\d+)?$/.test(d) && +d === +p.ans) return bad('數值一樣，但要寫到題目要的位數。');
        return bad('不對，再算一次。');
      }
    }
    return bad('');
  }
  function checkQ(Q, vals) {   // 每個 part 都要對；回第一個不對的 part
    for (var i = 0; i < Q.parts.length; i++) { var r = check(Q.parts[i], vals[i]); if (!r.ok) return r; }
    return GOOD;
  }

  // ================= 錯題庫 =================
  // 紙本 23 題用 pp:<id>、類題答錯用 pv:<id>、約分通分 pf:、期中錯題 pm:、期中類題 pe:、扇形小考錯題 ps:；p 只存顯示用的字，題目本身用 pid 查回來
  var SETS = { p: PAPER, v: VARIANTS, f: FRACTIONS, m: MIDTERM, e: EXAM, s: SECTOR }, SRC = { v: '類題', f: '約分通分', e: '期中類題' };
  function mkEntry(Q, set) { set = SETS[set] ? set : 'p'; return { id: 'p' + set + ':' + Q.id, p: { type: 'paper', set: set, pid: Q.id, src: Q.src || SRC[set] || '紙本', tag: Q.tag || '', q: plain(Q.text) } }; }
  function fromMistake(p) {
    if (!p || p.type !== 'paper') return null;
    return (SETS[p.set] || PAPER).filter(function (q) { return q.id === p.pid; })[0] || null;
  }
  function unitOfMistake(p) { return unitOf(fromMistake(p)); }

  var API = { PAPER: PAPER, VARIANTS: VARIANTS, FRACTIONS: FRACTIONS, MIDTERM: MIDTERM, EXAM: EXAM, SECTOR: SECTOR, FIGS: FIGS, FIG_PTS: FIG_PTS, fmt: fmt, plain: plain, esc: esc, partAns: partAns, ansText: ansText, check: check, checkQ: checkQ, mkEntry: mkEntry, fromMistake: fromMistake,
    unitOf: unitOf, unitOfMistake: unitOfMistake, ADD_HASH: 'uwj3ic' };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else G.PAPER = API;
})(typeof window !== 'undefined' ? window : globalThis);
