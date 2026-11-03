/* paper.js — 紙本錯題（2026-11-03）：考卷上打叉、紅筆圈到的題目 PAPER＋類題 30 題 VARIANTS，加判分（純函式；瀏覽器 window.PAPER，Node require）。
   題目數字與題意照紙本、敘述改寫；不放姓名、班級、照片。文字裡 [[n/d]] ＝上下排的分數。
   每題 {id, text, parts:[…], why, calc?}；類題多 d:1|2|3（照 d 排）、紙本多 src（來源）、tag:'x'（打叉）|'r'（紅筆圈到）。
   part：num {ans, units?|suf?}｜multi {ans:[…], n:格數, suf}｜frac {n, d}（要最簡）｜fracs {w, ans:[[n,d],…], rows}（約分：全部列出）｜
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
  function frac(n, d, label) { return { t: 'frac', n: n, d: d, label: label }; }
  function fracs(w, ans) { return { t: 'fracs', w: w, ans: ans, rows: 5 }; }
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

  // ================= 文字 =================
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // [[n/d]] → 上下排的分數
  function fmt(s) { return esc(s).replace(/\[\[(\d+)\/(\d+)\]\]/g, '<span class="frc"><span>$1</span><span>$2</span></span>'); }
  function plain(s) { return String(s).replace(/(\d)\[\[(\d+)\/(\d+)\]\]/g, '$1 又 $2/$3').replace(/\[\[(\d+)\/(\d+)\]\]/g, '$1/$2'); }
  function partAns(p) {
    switch (p.t) {
      case 'num': return p.ans + (p.units ? p.units[0] : p.suf || '');
      case 'multi': return p.ans.join('、') + (p.suf ? ' ' + p.suf : '');
      case 'frac': return p.n + '/' + p.d + ' 圓';
      case 'fracs': return p.ans.map(function (a) { return (p.w ? p.w + ' 又 ' : '') + a[0] + '/' + a[1]; }).join('、');
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
  // 紙本 23 題用 pp:<id>、類題答錯用 pv:<id>；p 只存顯示用的字，題目本身用 pid 查回來
  function mkEntry(Q, set) { return { id: (set === 'v' ? 'pv:' : 'pp:') + Q.id, p: { type: 'paper', set: set, pid: Q.id, src: Q.src || '類題', tag: Q.tag || '', q: plain(Q.text) } }; }
  function fromMistake(p) {
    if (!p || p.type !== 'paper') return null;
    var a = p.set === 'v' ? VARIANTS : PAPER;
    return a.filter(function (q) { return q.id === p.pid; })[0] || null;
  }

  var API = { PAPER: PAPER, VARIANTS: VARIANTS, FIGS: FIGS, FIG_PTS: FIG_PTS, fmt: fmt, plain: plain, esc: esc, partAns: partAns, ansText: ansText, check: check, checkQ: checkQ, mkEntry: mkEntry, fromMistake: fromMistake,
    ADD_HASH: 'uwj3ic' };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else G.PAPER = API;
})(typeof window !== 'undefined' ? window : globalThis);
