/* gcd-word.js — 短除法「📝 應用題」的題目模板（純函式；不碰 DOM，瀏覽器 window.GW、Node module.exports 共用；要先載 short-division.js）。
   每個模板：數字每次隨機（基本／進階兩種範圍），答案一定是合理的正整數。
   題目物件 build(tid, v)：
     tid＝模板 id、v＝這題的數字陣列（整數）；同一組 (tid, v) 一定做出同一題 → 錯題庫只存 {t:tid, v} 就能原題重做。
     {tid, v, id:'gcdword:<tid>:<v>', kind:'gcd'|'lcm', cat, name,
      text:'…{0}…{1}…'（{i}＝第 i 個數字）, toks:[{n, role:'key'|'dist', why}]（key＝要短除的數；dist＝干擾數字＋它是什麼）,
      keys:[要短除的數], core:keys 的最大公因數或最小公倍數,
      ask:{q, ans, unit, units, hint}（時間題 ask.time＝{h, m}，沒有 ans／unit）, follow:[{q, ans, unit, units, hint}]（追問）, sol:解答說明}
   無效的 tid／v 回 null。 */
(function (G) {
  'use strict';
  var SD = G.SD || (typeof require === 'function' ? require('./short-division.js') : null);
  var gcd = SD.gcd, lcm = SD.lcm;

  function ri(rnd, a, b) { return a + Math.floor(rnd() * (b - a + 1)); }
  function pick(rnd, xs) { return xs[Math.floor(rnd() * xs.length)]; }
  function isInt(n) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n; }
  // 兩個不一樣、互質、都在 [lo, hi] 的數（大的在前）
  function cop(rnd, lo, hi) {
    for (var i = 0; i < 500; i++) { var x = ri(rnd, lo, hi), y = ri(rnd, lo, hi); if (x !== y && gcd(x, y) === 1) return x > y ? [x, y] : [y, x]; }
    return [3, 2];
  }
  // 兩個不一樣、誰也不是誰的倍數（最小公倍數才不會就是大的那個）
  function nonDiv(a, b) { return a !== b && a % b !== 0 && b % a !== 0; }
  function addMin(h, m, L) { var t = h * 60 + m + L; return { h: Math.floor(t / 60), m: t % 60 }; }
  function lcm3(a, b, c) { return lcm(lcm(a, b), c); }
  function gcd3(a, b, c) { return gcd(gcd(a, b), c); }
  function distinct(xs) { for (var i = 0; i < xs.length; i++) for (var j = i + 1; j < xs.length; j++) if (xs[i] === xs[j]) return false; return true; }
  function noneIn(x, xs) { return xs.indexOf(x) < 0; }
  var K = function (n) { return { n: n, role: 'key' }; };
  var X = function (n, why) { return { n: n, role: 'dist', why: why }; };

  /* 模板：draw(lv, rnd)＝依難度抽一組 v；capB＝基本難度的最小公倍數上限；ok(v)＝檢查 v 合不合理（重做錯題時也用）；make(v)＝做出題目
     cat：gcd／lcm／adv（進階：同餘、三個數） */
  var T = [
    // ================= 最大公因數 =================
    { id: 'share', cat: 'gcd', kind: 'gcd', name: '平分鉛筆和橡皮擦',
      draw: function (lv, rnd) { var g = lv === 'adv' ? ri(rnd, 4, 24) : ri(rnd, 2, 12), p = lv === 'adv' ? cop(rnd, 2, 15) : cop(rnd, 2, 9); return [g * p[1], g * p[0], ri(rnd, 5, 30)]; },
      ok: function (v) { var A = v[0], B = v[1], g = gcd(A, B); return A !== B && g >= 2 && A <= 400 && B <= 400 && A / g <= 15 && B / g <= 15 && v[2] >= 2 && v[2] <= 99 && noneIn(v[2], [A, B]); },
      make: function (v) {
        var A = v[0], B = v[1], g = gcd(A, B);
        return { text: '老師買了 {0} 枝鉛筆和 {1} 個橡皮擦，鉛筆一枝 {2} 元。老師要把鉛筆和橡皮擦都平分給一些小朋友，兩種都要剛好分完、不能有剩下。',
          toks: [K(A), K(B), X(v[2], '鉛筆的價錢')],
          ask: { q: '最多可以分給幾位小朋友？', ans: g, unit: '人', units: ['人', '枝', '個', '元'], hint: '最多分給幾人＝兩種東西數量的最大公因數。' },
          follow: [{ q: '每位小朋友可以拿到幾枝鉛筆？', ans: A / g, unit: '枝', units: ['枝', '個', '人'], hint: A + ' 枝鉛筆平分給 ' + g + ' 位小朋友，用除法算算看。' },
            { q: '每位小朋友可以拿到幾個橡皮擦？', ans: B / g, unit: '個', units: ['個', '枝', '人'], hint: B + ' 個橡皮擦平分給 ' + g + ' 位小朋友，用除法算算看。' }],
          sol: A + ' 和 ' + B + ' 的最大公因數是 ' + g + '，所以最多分給 ' + g + ' 位小朋友；每人拿 ' + A + '÷' + g + '＝' + (A / g) + ' 枝鉛筆、' + B + '÷' + g + '＝' + (B / g) + ' 個橡皮擦。' };
      } },
    { id: 'paper', cat: 'gcd', kind: 'gcd', name: '色紙剪成最大正方形',
      draw: function (lv, rnd) { var g = lv === 'adv' ? ri(rnd, 3, 15) : ri(rnd, 2, 10), p = lv === 'adv' ? cop(rnd, 2, 12) : cop(rnd, 2, 8); return [g * p[0], g * p[1], ri(rnd, 2, 15)]; },
      ok: function (v) { var A = v[0], B = v[1], g = gcd(A, B); return A > B && g >= 2 && A <= 200 && (A / g) * (B / g) <= 144 && v[2] >= 1 && v[2] <= 30 && noneIn(v[2], [A, B]); },
      make: function (v) {
        var A = v[0], B = v[1], g = gcd(A, B), x = A / g, y = B / g;
        return { text: '一張長方形色紙長 {0} 公分、寬 {1} 公分，一張 {2} 元。要把它剪成大小一樣的正方形，而且紙不能有剩下。',
          toks: [K(A), K(B), X(v[2], '色紙的價錢')],
          ask: { q: '正方形的邊長最長是幾公分？', ans: g, unit: '公分', units: ['公分', '平方公分', '張'], hint: '正方形的邊長要能把長和寬都剛好分完，最長＝長和寬的最大公因數。' },
          follow: [{ q: '這樣可以剪成幾張正方形？', ans: x * y, unit: '張', units: ['張', '公分', '平方公分'], hint: '長那一邊可以排幾個？寬那一邊可以排幾個？兩個再相乘。' }],
          sol: A + ' 和 ' + B + ' 的最大公因數是 ' + g + '，正方形邊長最長 ' + g + ' 公分；長邊排 ' + A + '÷' + g + '＝' + x + ' 個、寬邊排 ' + B + '÷' + g + '＝' + y + ' 個，共 ' + x + '×' + y + '＝' + (x * y) + ' 張。' };
      } },
    { id: 'tile', cat: 'gcd', kind: 'gcd', name: '地面鋪最大正方形地磚',
      draw: function (lv, rnd) { var g = lv === 'adv' ? ri(rnd, 6, 60) : pick(rnd, [10, 12, 15, 20, 25, 30, 40, 50]), p = lv === 'adv' ? cop(rnd, 2, 11) : cop(rnd, 2, 7); return [g * p[0], g * p[1], ri(rnd, 20, 90)]; },
      ok: function (v) { var A = v[0], B = v[1], g = gcd(A, B); return A > B && g >= 2 && A <= 700 && (A / g) * (B / g) <= 121 && v[2] >= 1 && v[2] <= 999 && noneIn(v[2], [A, B]); },
      make: function (v) {
        var A = v[0], B = v[1], g = gcd(A, B), x = A / g, y = B / g;
        return { text: '教室後面有一塊長方形的地面，長 {0} 公分、寬 {1} 公分。要鋪上大小一樣的正方形地磚，地磚不能切開，要剛好鋪滿。地磚一塊 {2} 元。',
          toks: [K(A), K(B), X(v[2], '地磚的價錢')],
          ask: { q: '地磚的邊長最大是幾公分？', ans: g, unit: '公分', units: ['公分', '塊', '平方公分'], hint: '地磚邊長要能把長和寬都剛好排滿，最大＝長和寬的最大公因數。' },
          follow: [{ q: '這樣一共要鋪幾塊地磚？', ans: x * y, unit: '塊', units: ['塊', '公分', '元'], hint: '長那一邊排幾塊？寬那一邊排幾塊？兩個再相乘。' }],
          sol: A + ' 和 ' + B + ' 的最大公因數是 ' + g + '，地磚邊長最大 ' + g + ' 公分；長邊排 ' + x + ' 塊、寬邊排 ' + y + ' 塊，共 ' + x + '×' + y + '＝' + (x * y) + ' 塊。' };
      } },
    { id: 'flag', cat: 'gcd', kind: 'gcd', name: '花圃四周等距插旗',
      draw: function (lv, rnd) { var g = lv === 'adv' ? ri(rnd, 3, 20) : ri(rnd, 2, 10), p = lv === 'adv' ? cop(rnd, 2, 12) : cop(rnd, 2, 9); return [g * p[0], g * p[1], ri(rnd, 3, 12)]; },
      ok: function (v) { var A = v[0], B = v[1], g = gcd(A, B); return A > B && g >= 2 && A <= 300 && 2 * (A + B) / g <= 60 && v[2] >= 2 && v[2] <= 40 && noneIn(v[2], [A, B]); },
      make: function (v) {
        var A = v[0], B = v[1], g = gcd(A, B), n = 2 * (A + B) / g;
        return { text: '學校有一個長方形花圃，長 {0} 公尺、寬 {1} 公尺。{2} 位同學要沿著花圃的四周插旗子，每兩支旗子之間的距離都一樣，而且四個角都要插一支。',
          toks: [K(A), K(B), X(v[2], '幫忙的人數')],
          ask: { q: '每兩支旗子之間的距離最長是幾公尺？', ans: g, unit: '公尺', units: ['公尺', '支', '位'], hint: '四個角都要插，間隔要能把長和寬都剛好分完，最長＝長和寬的最大公因數。' },
          follow: [{ q: '這樣一共要插幾支旗子？', ans: n, unit: '支', units: ['支', '公尺', '位'], hint: '先算花圃一圈有多長，再看一圈裡有幾個間隔；圍成一圈時，旗子的支數＝間隔的個數。' }],
          sol: A + ' 和 ' + B + ' 的最大公因數是 ' + g + '，間隔最長 ' + g + ' 公尺；一圈長 (' + A + '＋' + B + ')×2＝' + (2 * (A + B)) + ' 公尺，' + (2 * (A + B)) + '÷' + g + '＝' + n + '，共 ' + n + ' 支旗子。' };
      } },
    { id: 'ribbon', cat: 'gcd', kind: 'gcd', name: '緞帶剪成一樣長',
      draw: function (lv, rnd) { var g = lv === 'adv' ? ri(rnd, 4, 30) : ri(rnd, 3, 15), p = lv === 'adv' ? cop(rnd, 2, 13) : cop(rnd, 2, 9); return [g * p[0], g * p[1], ri(rnd, 30, 150)]; },
      ok: function (v) { var A = v[0], B = v[1], g = gcd(A, B); return A !== B && g >= 2 && A <= 400 && B <= 400 && (A + B) / g <= 30 && v[2] >= 1 && v[2] <= 999 && noneIn(v[2], [A, B]); },
      make: function (v) {
        var A = v[0], B = v[1], g = gcd(A, B), n = (A + B) / g;
        return { text: '媽媽買了一條紅緞帶長 {0} 公分、一條藍緞帶長 {1} 公分，一共花了 {2} 元。要把兩條緞帶都剪成一樣長的小段，不能有剩下，而且每一段越長越好。',
          toks: [K(A), K(B), X(v[2], '花的錢')],
          ask: { q: '每一小段是幾公分？', ans: g, unit: '公分', units: ['公分', '段', '元'], hint: '每段的長度要能把兩條緞帶都剛好剪完，越長越好＝最大公因數。' },
          follow: [{ q: '兩條緞帶一共可以剪成幾段？', ans: n, unit: '段', units: ['段', '公分', '元'], hint: '紅緞帶剪成幾段？藍緞帶剪成幾段？兩個加起來。' }],
          sol: A + ' 和 ' + B + ' 的最大公因數是 ' + g + '，每段 ' + g + ' 公分；紅的剪 ' + (A / g) + ' 段、藍的剪 ' + (B / g) + ' 段，共 ' + n + ' 段。' };
      } },

    // ================= 最小公倍數 =================
    { id: 'bus', capB: 90, cat: 'lcm', kind: 'lcm', name: '兩路公車同時發車', time: true,
      draw: function (lv, rnd) {
        var a = lv === 'adv' ? ri(rnd, 6, 40) : ri(rnd, 4, 20), b = lv === 'adv' ? ri(rnd, 6, 40) : ri(rnd, 4, 20);
        if (a < b) { var t = a; a = b; b = t; }
        return [a, b, ri(rnd, 6, 9), 5 * ri(rnd, 1, 11)];
      },
      ok: function (v) {
        var a = v[0], b = v[1], h = v[2], m = v[3], L = lcm(a, b);
        return a > b && b >= 3 && nonDiv(a, b) && L <= 240 && h >= 6 && h <= 10 && m >= 1 && m <= 59 && noneIn(h, [a, b]) && noneIn(m, [a, b]) && addMin(h, m, L).h < 12;
      },
      make: function (v) {
        var a = v[0], b = v[1], h = v[2], m = v[3], L = lcm(a, b), e = addMin(h, m, L);
        return { text: '公車總站有兩路公車：紅線公車每 {0} 分鐘開出一班，藍線公車每 {1} 分鐘開出一班。早上 {2} 點 {3} 分，兩路公車同時開出。',
          toks: [K(a), K(b), X(h, '出發的時間（幾點）'), X(m, '出發的時間（幾分）')],
          ask: { q: '下一次兩路公車同時開出，是早上幾點幾分？', time: e, hint: '先算再過幾分鐘會同時開出（最小公倍數），再從 ' + h + ' 點 ' + m + ' 分往後加；分鐘滿 60 就進 1 小時。' },
          follow: [],
          sol: a + ' 和 ' + b + ' 的最小公倍數是 ' + L + '，再過 ' + L + ' 分鐘會同時開出；' + h + ' 點 ' + m + ' 分再過 ' + L + ' 分鐘是 ' + e.h + ' 點 ' + e.m + ' 分。' };
      } },
    { id: 'brick', capB: 60, cat: 'lcm', kind: 'lcm', name: '長方形磁磚拼成最小正方形',
      draw: function (lv, rnd) { return lv === 'adv' ? [ri(rnd, 6, 30), ri(rnd, 4, 24), ri(rnd, 10, 60)] : [ri(rnd, 3, 12), ri(rnd, 2, 10), ri(rnd, 5, 30)]; },
      ok: function (v) { var a = v[0], b = v[1], L = lcm(a, b); return a > b && b >= 2 && nonDiv(a, b) && L <= 180 && (L / a) * (L / b) <= 150 && v[2] >= 1 && v[2] <= 99 && noneIn(v[2], [a, b]); },
      make: function (v) {
        var a = v[0], b = v[1], L = lcm(a, b), n = (L / a) * (L / b);
        return { text: '有很多塊長 {0} 公分、寬 {1} 公分的長方形磁磚，一塊 {2} 元。把磁磚朝同一個方向緊密的排好，拼成一個正方形（磁磚不能切開）。',
          toks: [K(a), K(b), X(v[2], '磁磚的價錢')],
          ask: { q: '拼成的正方形，邊長最小是幾公分？', ans: L, unit: '公分', units: ['公分', '塊', '平方公分'], hint: '正方形的邊長要是 ' + a + ' 的倍數，也要是 ' + b + ' 的倍數，最小＝最小公倍數。' },
          follow: [{ q: '這樣最少要用幾塊磁磚？', ans: n, unit: '塊', units: ['塊', '公分', '元'], hint: '一邊排幾塊（邊長 ÷ 磁磚的長）？另一邊排幾塊（邊長 ÷ 磁磚的寬）？兩個再相乘。' }],
          sol: a + ' 和 ' + b + ' 的最小公倍數是 ' + L + '，正方形邊長最小 ' + L + ' 公分；一邊排 ' + L + '÷' + a + '＝' + (L / a) + ' 塊、另一邊排 ' + L + '÷' + b + '＝' + (L / b) + ' 塊，共 ' + n + ' 塊。' };
      } },
    { id: 'light', capB: 90, cat: 'lcm', kind: 'lcm', name: '兩盞燈再一起閃',
      draw: function (lv, rnd) { return lv === 'adv' ? [ri(rnd, 6, 30), ri(rnd, 4, 24), ri(rnd, 100, 500)] : [ri(rnd, 3, 15), ri(rnd, 2, 12), ri(rnd, 100, 300)]; },
      ok: function (v) { var a = v[0], b = v[1], L = lcm(a, b); return a > b && b >= 2 && nonDiv(a, b) && L <= 300 && v[2] >= 1 && v[2] <= 999 && noneIn(v[2], [a, b, L]); },
      make: function (v) {
        var a = v[0], b = v[1], L = lcm(a, b);
        return { text: '聖誕樹上有一盞紅燈和一盞綠燈，這組燈 {2} 元。紅燈每 {0} 秒閃一次，綠燈每 {1} 秒閃一次。剛剛兩盞燈同時閃了一下。',
          toks: [K(a), K(b), X(v[2], '燈的價錢')],
          ask: { q: '最少再過幾秒，兩盞燈會再一起閃？', ans: L, unit: '秒', units: ['秒', '分', '次'], hint: '要等到的秒數，是 ' + a + ' 的倍數、也是 ' + b + ' 的倍數，最少＝最小公倍數。' },
          follow: [],
          sol: a + ' 和 ' + b + ' 的最小公倍數是 ' + L + '，最少再過 ' + L + ' 秒會再一起閃。' };
      } },
    { id: 'run', capB: 40, cat: 'lcm', kind: 'lcm', name: '繞操場在起點相遇',
      draw: function (lv, rnd) { return lv === 'adv' ? [ri(rnd, 4, 15), ri(rnd, 3, 12), pick(rnd, [200, 250, 300, 400])] : [ri(rnd, 3, 10), ri(rnd, 2, 8), pick(rnd, [200, 250, 300, 400])]; },
      ok: function (v) { var a = v[0], b = v[1], L = lcm(a, b); return a > b && b >= 2 && nonDiv(a, b) && L <= 120 && L / b <= 30 && v[2] >= 1 && v[2] <= 999 && noneIn(v[2], [a, b]); },
      make: function (v) {
        var a = v[0], b = v[1], L = lcm(a, b);
        return { text: '學校的操場一圈 {0} 公尺。哥哥跑一圈要 {1} 分鐘，弟弟跑一圈要 {2} 分鐘。兩人同時從起點出發，朝同一個方向一直跑。',
          toks: [X(v[2], '操場一圈的長度'), K(b), K(a)],
          ask: { q: '最少幾分鐘後，兩人會第一次同時回到起點？', ans: L, unit: '分鐘', units: ['分鐘', '圈', '公尺'], hint: '回到起點的時間，要是兩人跑一圈時間的倍數，最少＝最小公倍數。' },
          follow: [{ q: '到那時候，哥哥跑了幾圈？', ans: L / b, unit: '圈', units: ['圈', '分鐘', '公尺'], hint: '相遇的時間 ÷ 哥哥跑一圈的時間。' },
            { q: '弟弟跑了幾圈？', ans: L / a, unit: '圈', units: ['圈', '分鐘', '公尺'], hint: '相遇的時間 ÷ 弟弟跑一圈的時間。' }],
          sol: b + ' 和 ' + a + ' 的最小公倍數是 ' + L + '，' + L + ' 分鐘後在起點相遇；哥哥跑 ' + L + '÷' + b + '＝' + (L / b) + ' 圈，弟弟跑 ' + L + '÷' + a + '＝' + (L / a) + ' 圈。' };
      } },
    { id: 'gear', capB: 240, cat: 'lcm', kind: 'lcm', name: '齒輪轉回原位',
      draw: function (lv, rnd) { return lv === 'adv' ? [ri(rnd, 16, 72), ri(rnd, 10, 48), ri(rnd, 5, 15)] : [ri(rnd, 12, 40), ri(rnd, 8, 30), ri(rnd, 4, 12)]; },
      ok: function (v) { var A = v[0], B = v[1], L = lcm(A, B); return A > B && B >= 6 && nonDiv(A, B) && L <= 600 && L / B <= 20 && v[2] >= 1 && v[2] <= 99 && noneIn(v[2], [A, B]); },
      make: function (v) {
        var A = v[0], B = v[1], L = lcm(A, B);
        return { text: '大齒輪有 {0} 個齒，小齒輪有 {1} 個齒，兩個齒輪咬在一起轉動，大齒輪的直徑是 {2} 公分。一開始，在兩個齒輪咬在一起的地方各畫一個記號。',
          toks: [K(A), K(B), X(v[2], '齒輪的大小（直徑）')],
          ask: { q: '兩個齒輪最少要轉過幾個齒，兩個記號才會第一次同時回到原來的位置？', ans: L, unit: '齒', units: ['齒', '圈', '公分'], hint: '轉過的齒數要是 ' + A + ' 的倍數（大齒輪轉整圈），也要是 ' + B + ' 的倍數（小齒輪轉整圈），最少＝最小公倍數。' },
          follow: [{ q: '到那時候，大齒輪轉了幾圈？', ans: L / A, unit: '圈', units: ['圈', '齒', '公分'], hint: '轉過的齒數 ÷ 大齒輪的齒數。' },
            { q: '小齒輪轉了幾圈？', ans: L / B, unit: '圈', units: ['圈', '齒', '公分'], hint: '轉過的齒數 ÷ 小齒輪的齒數。' }],
          sol: A + ' 和 ' + B + ' 的最小公倍數是 ' + L + '，最少轉過 ' + L + ' 個齒；大齒輪轉 ' + L + '÷' + A + '＝' + (L / A) + ' 圈，小齒輪轉 ' + L + '÷' + B + '＝' + (L / B) + ' 圈。' };
      } },

    // ================= 進階：同餘、三個數 =================
    { id: 'rem', capB: 60, cat: 'adv', kind: 'lcm', name: '裝包都剩一樣多（同餘）',
      draw: function (lv, rnd) { var a = lv === 'adv' ? ri(rnd, 5, 20) : ri(rnd, 4, 12), b = lv === 'adv' ? ri(rnd, 4, 18) : ri(rnd, 3, 10); return [Math.max(a, b), Math.min(a, b), ri(rnd, 1, Math.min(a, b) - 1)]; },
      ok: function (v) { var a = v[0], b = v[1], r = v[2], L = lcm(a, b); return a > b && b >= 3 && nonDiv(a, b) && L <= 200 && r >= 1 && r < b && noneIn(r, [a, b]); },
      make: function (v) {
        var a = v[0], b = v[1], r = v[2], L = lcm(a, b);
        return { text: '一盒巧克力，如果每 {0} 顆裝一包，會剩下 {2} 顆；如果每 {1} 顆裝一包，也會剩下 {2} 顆。（兩種裝法都至少能裝滿一包）',
          toks: [K(a), K(b), X(r, '剩下的顆數（最後再加上去）')],
          ask: { q: '這盒巧克力最少有幾顆？', ans: L + r, unit: '顆', units: ['顆', '包', '盒'], hint: '先拿掉剩下的 ' + r + ' 顆，剩下的剛好能每 ' + a + ' 顆、每 ' + b + ' 顆裝完（最小公倍數）；最後別忘了把 ' + r + ' 顆加回去。' },
          follow: [{ q: '如果每 ' + a + ' 顆裝一包，可以裝滿幾包？', ans: L / a, unit: '包', units: ['包', '顆', '盒'], hint: '拿掉剩下的 ' + r + ' 顆，再除以 ' + a + '。' }],
          sol: a + ' 和 ' + b + ' 的最小公倍數是 ' + L + '，' + L + '＋' + r + '＝' + (L + r) + '，最少有 ' + (L + r) + ' 顆；每 ' + a + ' 顆一包可以裝滿 ' + L + '÷' + a + '＝' + (L / a) + ' 包、剩 ' + r + ' 顆。' };
      } },
    { id: 'fruit3', cat: 'adv', kind: 'gcd', name: '三種水果平分（三個數）',
      draw: function (lv, rnd) {
        var g = lv === 'adv' ? ri(rnd, 3, 15) : ri(rnd, 2, 8), hi = lv === 'adv' ? 12 : 9, x, y, z, k = 0;
        do { x = ri(rnd, 2, hi); y = ri(rnd, 2, hi); z = ri(rnd, 2, hi); } while ((!distinct([x, y, z]) || gcd3(x, y, z) !== 1) && k++ < 500);
        return [g * x, g * y, g * z, ri(rnd, 50, 300)];
      },
      ok: function (v) { var A = v[0], B = v[1], C = v[2], g = gcd3(A, B, C); return distinct([A, B, C]) && g >= 2 && Math.max(A, B, C) <= 200 && (A + B + C) / g <= 36 && v[3] >= 1 && v[3] <= 999 && noneIn(v[3], [A, B, C]); },
      make: function (v) {
        var A = v[0], B = v[1], C = v[2], g = gcd3(A, B, C), n = (A + B + C) / g;
        return { text: '水果店送來 {0} 顆蘋果、{1} 顆橘子和 {2} 顆芭樂，一共 {3} 元。要把三種水果都平分給一些小朋友，每一種都要剛好分完、不能有剩下。',
          toks: [K(A), K(B), K(C), X(v[3], '水果的價錢')],
          ask: { q: '最多可以分給幾位小朋友？', ans: g, unit: '人', units: ['人', '顆', '元'], hint: '最多分給幾人＝三種水果數量的最大公因數（三個數都要能整除）。' },
          follow: [{ q: '每位小朋友一共可以拿到幾顆水果？', ans: n, unit: '顆', units: ['顆', '人', '元'], hint: '每人拿幾顆蘋果、幾顆橘子、幾顆芭樂？三個加起來。' }],
          sol: A + '、' + B + '、' + C + ' 的最大公因數是 ' + g + '，最多分給 ' + g + ' 位；每人拿 ' + (A / g) + '＋' + (B / g) + '＋' + (C / g) + '＝' + n + ' 顆水果。' };
      } },
    { id: 'meet3', capB: 120, cat: 'adv', kind: 'lcm', name: '三人再一次在圖書館遇到（三個數）',
      draw: function (lv, rnd) { var hi = lv === 'adv' ? 15 : 10, lo = lv === 'adv' ? 3 : 2; return [ri(rnd, lo, hi), ri(rnd, lo, hi), ri(rnd, lo, hi)]; },
      ok: function (v) { var a = v[0], b = v[1], c = v[2], L = lcm3(a, b, c); return distinct(v) && Math.min(a, b, c) >= 2 && L <= 360 && noneIn(L, v) && L / Math.min(a, b, c) <= 40; },
      make: function (v) {
        var a = v[0], b = v[1], c = v[2], L = lcm3(a, b, c);
        return { text: '小明每 {0} 天去一次圖書館，小華每 {1} 天去一次，小美每 {2} 天去一次。今天三個人剛好在圖書館遇到了。',
          toks: [K(a), K(b), K(c)],
          ask: { q: '最少再過幾天，三個人會再一次在圖書館遇到？', ans: L, unit: '天', units: ['天', '次', '週'], hint: '要等的天數要同時是 ' + a + '、' + b + '、' + c + ' 的倍數，最少＝三個數的最小公倍數。' },
          follow: [{ q: '從今天到下次遇到（不算今天、算那一天），小明去了幾次圖書館？', ans: L / a, unit: '次', units: ['次', '天', '週'], hint: '要等的天數 ÷ 小明幾天去一次。' }],
          sol: a + '、' + b + '、' + c + ' 的最小公倍數是 ' + L + '，最少再過 ' + L + ' 天；小明去了 ' + L + '÷' + a + '＝' + (L / a) + ' 次。' };
      } }
  ];
  var BY = {}; T.forEach(function (t) { BY[t.id] = t; });
  var CATS = { gcd: '最大公因數', lcm: '最小公倍數', adv: '挑戰題' };

  // 做出一題：無效回 null
  function build(tid, v) {
    var t = BY[tid];
    if (!t || !Array.isArray(v) || !v.length || v.length > 6 || !v.every(function (x) { return isInt(x) && x >= 1 && x <= 9999; })) return null;
    var ok = false; try { ok = !!t.ok(v); } catch (e) { ok = false; }
    if (!ok) return null;
    var p = t.make(v);
    p.tid = tid; p.v = v.slice(); p.kind = t.kind; p.cat = t.cat; p.name = t.name; p.time = !!t.time;
    p.id = 'gcdword:' + tid + ':' + v.join(',');
    p.keys = p.toks.filter(function (x) { return x.role === 'key'; }).map(function (x) { return x.n; });
    p.core = t.kind === 'gcd' ? SD.gcdAll(p.keys) : SD.lcmAll(p.keys);
    return p;
  }
  // 抽一題：lv＝'basic'｜'adv'
  function make(tid, lv, rnd) {
    var t = BY[tid]; if (!t) return null; rnd = rnd || Math.random;
    for (var i = 0; i < 4000; i++) { var p = build(tid, t.draw(lv === 'adv' ? 'adv' : 'basic', rnd)); if (p && !(lv !== 'adv' && t.capB && p.core > t.capB)) return p; }
    return null;
  }
  function shuffle(a, rnd) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // 一輪的模板：cat＝'mix'（最大公因數 2 題＋最小公倍數 2 題＋挑戰 1 題）｜'gcd'｜'lcm'｜'adv'；n 題；同一輪模板盡量不重複
  function roundTids(cat, n, rnd) {
    rnd = rnd || Math.random; n = n || 5;
    var ids = function (c) { return T.filter(function (t) { return t.cat === c; }).map(function (t) { return t.id; }); };
    var out;
    if (cat === 'mix') out = shuffle(ids('gcd'), rnd).slice(0, 2).concat(shuffle(ids('lcm'), rnd).slice(0, 2), shuffle(ids('adv'), rnd).slice(0, 1));
    else { var pool = ids(CATS[cat] ? cat : 'gcd'); out = shuffle(pool, rnd).slice(0, n); while (out.length < n) out.push(pool[Math.floor(rnd() * pool.length)]); }
    out = shuffle(out, rnd);
    while (out.length < n) out.push(T[Math.floor(rnd() * T.length)].id);
    return out.slice(0, n);
  }
  // 題目文字切成片段：[{t:文字}｜{i:第幾個數字}]
  function segs(text) {
    var out = [], re = /\{(\d+)\}/g, m, last = 0;
    while ((m = re.exec(text))) { if (m.index > last) out.push({ t: text.slice(last, m.index) }); out.push({ i: +m[1] }); last = re.lastIndex; }
    if (last < text.length) out.push({ t: text.slice(last) });
    return out;
  }
  // 選出要短除的數對不對：nums＝小朋友選／填的數；回 {ok, why:'dist'|'missing'|'extra'|'wrong', tok}
  function checkKeys(p, nums) {
    var want = p.keys.slice().sort(function (a, b) { return a - b; }).join(','), got = nums.slice().sort(function (a, b) { return a - b; }).join(',');
    if (want === got) return { ok: true };
    for (var i = 0; i < nums.length; i++) {
      var d = p.toks.filter(function (t) { return t.role === 'dist' && t.n === nums[i]; })[0];
      if (d && p.keys.indexOf(nums[i]) < 0) return { ok: false, why: 'dist', tok: d };
    }
    if (nums.length < p.keys.length) return { ok: false, why: 'missing' };
    if (nums.length > p.keys.length) return { ok: false, why: 'extra' };
    return { ok: false, why: 'wrong' };
  }
  var DECIDE_HINT = '平分、剪成最大、間隔最大 → 越分越小 → 最大公因數；再一次同時、拼成最小、相遇 → 越加越大 → 最小公倍數';

  var GW = { T: T, BY: BY, CATS: CATS, build: build, make: make, roundTids: roundTids, segs: segs, checkKeys: checkKeys, addMin: addMin, DECIDE_HINT: DECIDE_HINT };
  if (typeof module !== 'undefined' && module.exports) module.exports = GW;
  else G.GW = GW;
})(typeof window !== 'undefined' ? window : globalThis);
