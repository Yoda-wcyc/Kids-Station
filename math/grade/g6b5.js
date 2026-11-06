/* 六下 單元五 怎樣解題（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6b5.js。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma, BLUE = '#bcdcf7', ORANGE = '#ffb74d';
  var rect = function (x, y, w, h, c) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" stroke="' + H.INK + '" stroke-width="2"/>'; };
  var line = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + H.INK + '" stroke-width="2"/>'; };
  // 和差線段圖
  function sdBar() {
    var b = rect(110, 14, 220, 30, BLUE) + rect(330, 14, 90, 30, ORANGE) + H.txt(100, 35, '大數', { a: 'end' }) + H.txt(375, 35, '差') +
      rect(110, 62, 220, 30, BLUE) + H.txt(100, 83, '小數', { a: 'end' }) +
      '<line x1="440" y1="14" x2="440" y2="92" stroke="' + H.INK + '" stroke-width="2"/>' + H.txt(450, 59, '和', { a: 'start' }) +
      H.txt(265, 122, '小數補上「差」就和大數一樣長 → 和＋差＝2 個大數', { fs: 14 });
    return H.svg(520, 134, b, '和差問題的線段圖');
  }
  // 上衣、褲子的樹狀圖
  function tree() {
    var b = '', tops = ['紅上衣', '白上衣'], pants = ['黑褲', '藍褲', '灰褲'];
    tops.forEach(function (t, i) {
      var ty = 70 + i * 130;
      b += line(40, 135, 110, ty) + H.txt(150, ty + 6, t, { fs: 15 });
      pants.forEach(function (p, j) {
        var py = ty - 40 + j * 40;
        b += line(190, ty, 250, py) + H.txt(280, py + 6, p, { fs: 15 }) + H.txt(320, py + 6, '→ ' + t.charAt(0) + '＋' + p.charAt(0), { a: 'start', fs: 15 });
      });
    });
    b += '<circle cx="34" cy="135" r="6" fill="' + H.INK + '"/>' + H.txt(215, 262, '2 件上衣 × 3 件褲子＝6 種', { fs: 15 });
    return H.svg(430, 274, b, '上衣和褲子搭配的樹狀圖');
  }
  var TWO = [
    ['雞', '兔', 2, 4, '隻', '隻腳', '籠子裡有雞和兔共 {N} 隻，數一數共有 {L} 隻腳。'],
    ['腳踏車', '三輪車', 2, 3, '輛', '個輪子', '租車處有腳踏車和三輪車共 {N} 輛，共有 {L} 個輪子。'],
    ['機車', '汽車', 2, 4, '輛', '個輪子', '停車場有機車和汽車共 {N} 輛，共有 {L} 個輪子。'],
    ['三腳椅', '四腳椅', 3, 4, '張', '隻椅腳', '教室裡有三腳椅和四腳椅共 {N} 張，共有 {L} 隻椅腳。']
  ];
  var PPL = ['甲', '乙', '丙', '丁', '戊'];
  var fact = function (n) { return n <= 1 ? 1 : n * fact(n - 1); };
  MG.unit({
    id: 'g6b5', pending: '待課本核對',
    cards: [
      { t: '和差問題：知道兩個數的「和」與「差」，大數＝(和＋差)÷2，小數＝和－大數。',
        ex: '兩數的和是 50、差是 12：大數＝(50＋12)÷2＝<b>31</b>，小數＝50－31＝<b>19</b>。<br>驗算：31＋19＝50，31－19＝12 ✔',
        why: '把小數補上「差」，就和大數一樣大，這時總和變成「和＋差」，剛好是 2 個大數。', svg: sdBar() },
      { t: '年齡問題：兩個人的年齡差永遠不會變。',
        ex: '媽媽 36 歲、女兒 8 歲，差 28 歲。幾年後媽媽是女兒的 3 倍？<br>那時差 28 歲＝女兒年齡的 3－1＝2 倍 → 女兒 28÷2＝14 歲 → 14－8＝<b>6 年後</b>。',
        why: '每過一年，兩個人都長 1 歲，所以相差的歲數不變；倍數會變，差不會變。' },
      { t: '雞兔問題：先假設全部是雞，再看腳少了幾隻，一隻雞換成兔就多 2 隻腳。',
        ex: '雞兔共 10 隻、28 隻腳。全部當雞：10×2＝20 隻腳，少了 28－20＝8 隻；<br>每換一隻兔多 2 隻腳：8÷2＝<b>4 隻兔</b>，雞＝10－4＝<b>6 隻</b>。驗算：6×2＋4×4＝28 ✔',
        why: '也可以畫表格一隻一隻試（兔 0、1、2…隻），看哪一格的腳數剛好對；假設法是把試的過程一次算完。' },
      { t: '組合問題：用樹狀圖或列表把可能一個一個列出來；兩樣各選一個就用乘的。',
        ex: '2 件上衣、3 件褲子，各選一件：2×3＝<b>6 種</b>穿法。',
        why: '每一件上衣都可以配 3 件褲子，所以是 3＋3＝2×3 種。樹狀圖每條路線就是一種搭配。', svg: tree() },
      { t: '從幾個裡選 2 個（握手、比賽）：順序換了算同一種，列舉時不要重複數；排隊則順序不同就不同。',
        ex: '甲乙丙丁 4 人每兩人握一次手：甲乙、甲丙、甲丁、乙丙、乙丁、丙丁＝<b>6 次</b>（＝4×3÷2）。<br>3 人排成一列：3×2×1＝<b>6 種</b>排法。',
        why: '甲和乙握手、乙和甲握手是同一次，所以 4×3 要再除以 2；排隊時「甲乙」和「乙甲」站法不同，不用除。' }
    ],
    gens: [
      // d1 和差：求大數、小數
      { k: 'sumDiff', d: 1, n: 5, f: function (r) {
        var big = H.ri(r, 20, 300), small = H.ri(r, 5, big - 1), S = big + small, D = big - small;
        return H.Q('兩個數的和是 ' + S + '，差是 ' + D + '。大數和小數各是多少？（依序填大數、小數）',
          '大數＝(和＋差)÷2＝(' + S + '＋' + D + ')÷2＝' + big + '；小數＝和－大數＝' + S + '－' + big + '＝' + small + '。',
          H.nums([big, small], ['（大數）', '（小數）'], { err: [[S + D, '和＋差是 2 個大數，還要÷2。'], [S - D, '和－差是 2 個小數，還要÷2。']] }), { S: S, D: D });
      } },
      // d1 年齡差不變
      { k: 'ageDiff', d: 1, n: 4, f: function (r) {
        var P = H.pick(r, [['爸爸', '小明', 26, 36, 6, 14], ['媽媽', '姐姐', 24, 34, 8, 16], ['奶奶', '爸爸', 24, 30, 35, 45], ['哥哥', '弟弟', 2, 6, 5, 12]]), k = H.ri(r, P[4], P[5]), F = k + H.ri(r, P[2], P[3]), later = r() < 0.6, N = later ? H.ri(r, 2, 20) : H.ri(r, 1, k - 1);
        return H.Q(P[0] + '今年 ' + F + ' 歲，' + P[1] + '今年 ' + k + ' 歲。' + N + ' 年' + (later ? '後' : '前') + '，' + P[0] + '比' + P[1] + '大幾歲？',
          '每過一年兩個人都' + (later ? '長' : '少') + ' 1 歲，年齡差不會變：' + F + '－' + k + '＝' + (F - k) + '（歲）。',
          H.num(F - k, { suf: '歲', err: [[F - k + N, '兩個人都會' + (later ? '多' : '少') + ' ' + N + ' 歲，相差不變。'], [F - k - N, '兩個人都會' + (later ? '多' : '少') + ' ' + N + ' 歲，相差不變。']] }),
          { F: F, k: k, N: N, later: later });
      } },
      // d1 兩樣各選一個：乘法
      { k: 'combo', d: 1, n: 5, f: function (r) {
        var a = H.ri(r, 2, 6), b = H.ri(r, 2, 5), s = H.pick(r, [
          ['小明有 ' + a + ' 件上衣、' + b + ' 件褲子，上衣和褲子各選一件搭配，共有幾種穿法？', '種', '件上衣', '件褲子'],
          ['早餐店有 ' + a + ' 種主食、' + b + ' 種飲料，主食和飲料各點一種，共有幾種點法？', '種', '種主食', '種飲料'],
          ['從家到學校有 ' + a + ' 條路，從學校到圖書館有 ' + b + ' 條路。從家經過學校到圖書館，共有幾種走法？', '種', '條路', '條路'],
          ['便當有 ' + a + ' 種主菜、' + b + ' 種湯，主菜和湯各選一種，共有幾種配法？', '種', '種主菜', '種湯']
        ]);
        return H.Q(s[0], '每一個前面的選擇都可以配 ' + b + ' 種，所以是 ' + a + '×' + b + '＝' + a * b + '（種）。畫樹狀圖數一數也一樣。',
          H.num(a * b, { suf: s[1], err: a + b !== a * b ? [[a + b, '每一個都要和另一邊的每一個配，要用乘的，不是加。']] : [] }), { a: a, b: b });
      } },
      // d1 雞兔：假設全部是雞（或兔）
      { k: 'assume', d: 1, n: 4, f: function (r) {
        var x = H.ri(r, 3, 20), y = H.ri(r, 3, 20), N = x + y, L = 2 * x + 4 * y, all = r() < 0.6 ? '雞' : '兔';
        if (all === '雞') return H.Q('雞和兔共 ' + N + ' 隻，共有 ' + L + ' 隻腳。如果把牠們全部當作雞，腳會比實際少幾隻？',
          '全部當作雞：' + N + '×2＝' + 2 * N + '（隻腳），比實際少 ' + L + '－' + 2 * N + '＝' + (L - 2 * N) + '（隻）。',
          H.num(L - 2 * N, { suf: '隻', err: [[2 * N, '這是全部當雞的腳數，還要和實際的 ' + L + ' 隻相減。']] }), { N: N, L: L, all: all });
        return H.Q('雞和兔共 ' + N + ' 隻，共有 ' + L + ' 隻腳。如果把牠們全部當作兔，腳會比實際多幾隻？',
          '全部當作兔：' + N + '×4＝' + 4 * N + '（隻腳），比實際多 ' + 4 * N + '－' + L + '＝' + (4 * N - L) + '（隻）。',
          H.num(4 * N - L, { suf: '隻', err: [[4 * N, '這是全部當兔的腳數，還要和實際的 ' + L + ' 隻相減。']] }), { N: N, L: L, all: all });
      } },
      // d2 和差應用
      { k: 'sumDiff2', d: 2, n: 4, f: function (r, _, i) {
        var t = i % 4, big, small, askBig = r() < 0.5, s;
        if (t === 0) { small = 10 * H.ri(r, 10, 60); big = small + 10 * H.ri(r, 2, 40); s = ['姐姐和妹妹共有 ' + (big + small) + ' 元，姐姐比妹妹多 ' + (big - small) + ' 元。' + (askBig ? '姐姐' : '妹妹') + '有幾元？', '元']; }
        else if (t === 1) { small = H.ri(r, 20, 60); big = small + H.ri(r, 4, 40); s = ['一條緞帶剪成長短兩段，兩段共長 ' + (big + small) + ' 公分，長的比短的長 ' + (big - small) + ' 公分。' + (askBig ? '長' : '短') + '的一段長幾公分？', '公分']; }
        else if (t === 2) { small = H.ri(r, 24, 30); big = small + H.ri(r, 1, 4); s = ['六年一班和六年二班共 ' + (big + small) + ' 人，一班比二班多 ' + (big - small) + ' 人。' + (askBig ? '一' : '二') + '班有幾人？', '人']; }
        else { small = H.ri(r, 5, 30); big = small + H.ri(r, 2, 20); s = ['長方形的周長是 ' + 2 * (big + small) + ' 公分，長比寬多 ' + (big - small) + ' 公分。' + (askBig ? '長' : '寬') + '是幾公分？', '公分']; }
        var S = big + small, D = big - small, ans = askBig ? big : small;
        return H.Q(s[0], (t === 3 ? '長＋寬＝周長÷2＝' + S + '。' : '') + '大的＝(和＋差)÷2＝(' + S + '＋' + D + ')÷2＝' + big + '，小的＝' + S + '－' + big + '＝' + small + '。所以答案是 ' + ans + ' ' + s[1] + '。',
          H.num(ans, { suf: s[1], err: [[askBig ? small : big, '這是另一個；題目問的是' + (askBig ? '大' : '小') + '的那個。'], [S + D, '和＋差是 2 個大的，還要÷2。']] }), { S: S, D: D, big: askBig });
      } },
      // d2 年齡倍數
      { k: 'ageTimes', d: 2, n: 4, f: function (r) {
        var P = H.pick(r, [['媽媽', '女兒'], ['爸爸', '兒子'], ['阿姨', '表妹']]), g, dd, ks, k, c, t = 0;
        do {
          g = H.ri(r, 3, 15); dd = H.ri(r, 22, 36); ks = [2, 3, 4, 5].filter(function (x) { var cc = dd / (x - 1); return dd % (x - 1) === 0 && cc > g && cc - g <= 15; });
        } while (!ks.length && ++t < 80);
        if (!ks.length) return null;
        k = H.pick(r, ks); c = dd / (k - 1);
        var M = g + dd, n = c - g;
        return H.Q(P[0] + '今年 ' + M + ' 歲，' + P[1] + '今年 ' + g + ' 歲。幾年後，' + P[0] + '的年齡會是' + P[1] + '的 ' + k + ' 倍？',
          '年齡差 ' + M + '－' + g + '＝' + dd + ' 歲不變。' + k + ' 倍的時候，差 ' + dd + ' 歲就是' + P[1] + '年齡的 ' + k + '－1＝' + (k - 1) + ' 倍，所以那時' + P[1] + ' ' + dd + '÷' + (k - 1) + '＝' + c + ' 歲，' + c + '－' + g + '＝' + n + '（年後）。',
          H.num(n, { suf: '年後', err: n !== c ? [[c, '這是那時候' + P[1] + '的年齡，還要減掉今年的 ' + g + ' 歲。']] : [] }), { M: M, g: g, k: k });
      } },
      // d2 雞兔：各有幾個
      { k: 'cage', d: 2, n: 4, f: function (r) {
        var T = H.pick(r, TWO), x = H.ri(r, 2, 16), y = H.ri(r, 2, 16), N = x + y, L = T[2] * x + T[3] * y, base = N * T[2], gap = T[3] - T[2];
        return H.Q(T[6].replace('{N}', N).replace('{L}', L) + T[0] + '和' + T[1] + '各有幾' + T[4] + '？（依序填' + T[0] + '、' + T[1] + '）',
          '假設全部是' + T[0] + '：' + N + '×' + T[2] + '＝' + base + '，比實際少 ' + L + '－' + base + '＝' + (L - base) + '。每把一' + T[4] + T[0] + '換成' + T[1] + '多 ' + gap + '，所以' + T[1] + '＝' + (L - base) + '÷' + gap + '＝' + y + '，' + T[0] + '＝' + N + '－' + y + '＝' + x + '。',
          H.nums([x, y], [T[4] + T[0], T[4] + T[1]]), { N: N, L: L, a: T[2], b: T[3] });
      } },
      // d2 列出全部
      { k: 'listAll', d: 2, n: 4, f: function (r, _, i) {
        var kind = i % 3, good, bad, q, why, v;
        if (kind === 0) {
          var ds = H.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9], r), d3 = ds.slice(0, 3), x = ds[3], all = [];
          [0, 1, 2].forEach(function (a) { [0, 1, 2].forEach(function (b) { [0, 1, 2].forEach(function (c) { if (a !== b && b !== c && a !== c) all.push('' + d3[a] + d3[b] + d3[c]); }); }); });
          good = H.shuffle(all, r).slice(0, H.ri(r, 3, 4));
          bad = H.shuffle(['' + d3[0] + d3[0] + d3[1], '' + d3[1] + d3[2] + d3[2], '' + d3[0] + x + d3[2], '' + x + d3[1] + d3[0]], r).slice(0, 6 - good.length);
          q = '用 ' + d3.join('、') + ' 三張數字卡排成三位數（每張都要用、只能用一次）。下面哪些排得出來？<b>全部選出來。</b>';
          why = '三張卡各用一次，排得出的有：' + all.join('、') + '，共 6 個。重複用同一張、或用到沒有的數字都不行。';
          v = { kind: 0, ds: d3 };
        } else if (kind === 1) {
          var m = H.ri(r, 4, 5), ps = PPL.slice(0, m), who = H.pick(r, ps), pairs = [];
          for (var a = 0; a < m; a++) for (var b = a + 1; b < m; b++) pairs.push(ps[a] + '和' + ps[b]);
          var hasW = pairs.filter(function (s) { return s.indexOf(who) >= 0; }), noW = pairs.filter(function (s) { return s.indexOf(who) < 0; });
          good = H.shuffle(hasW, r).slice(0, H.ri(r, 2, Math.min(4, hasW.length)));
          bad = H.shuffle(noW, r).slice(0, 6 - good.length);
          q = ps.join('、') + ' ' + m + ' 人要選 2 人去參加比賽。下面哪些選法裡<b>有' + who + '</b>？<b>全部選出來。</b>';
          why = '有' + who + '的選法：' + hasW.join('、') + '，共 ' + hasW.length + ' 種（' + who + '配另外 ' + (m - 1) + ' 人各一次）。';
          v = { kind: 1, ps: ps, who: who };
        } else {
          var tops = H.shuffle(['紅', '白', '黃', '綠'], r), pants = H.shuffle(['黑', '灰', '藍'], r), T = tops.slice(0, 2), Pn = pants.slice(0, 2), ok = [];
          T.forEach(function (t) { Pn.forEach(function (p) { ok.push(t + '上衣配' + p + '褲子'); }); });
          good = H.shuffle(ok, r).slice(0, H.ri(r, 2, 4));
          bad = H.shuffle([tops[2] + '上衣配' + Pn[0] + '褲子', T[0] + '上衣配' + pants[2] + '褲子', tops[3] + '上衣配' + Pn[1] + '褲子', T[1] + '上衣配' + pants[2] + '褲子'], r).slice(0, 6 - good.length);
          q = '小明有' + T.join('色、') + '色上衣，' + Pn.join('色、') + '色褲子，上衣和褲子各選一件。下面哪些是他穿得出來的搭配？<b>全部選出來。</b>';
          why = '畫樹狀圖：' + ok.join('、') + '，共 2×2＝4 種。用到他沒有的顏色就穿不出來。';
          v = { kind: 2, tops: T, pants: Pn };
        }
        var gs = {}; good.forEach(function (s) { gs[s] = 1; });
        return H.Q(q, why, H.set(H.shuffle(good.concat(bad), r), function (s) { return !!gs[s]; }), v);
      } },
      // d2 握手、比賽、排隊、選兩種
      { k: 'pairs', d: 2, n: 4, f: function (r, _, i) {
        var t = i % 4, N, ans, q, why, err = [];
        if (t === 1) {
          N = H.ri(r, 3, 4); ans = fact(N);
          q = H.pick(r, ['小明、阿哲', '姐姐、妹妹']) + (N === 3 ? '和弟弟 3 人' : '、弟弟和哥哥 4 人') + '排成一列照相，共有幾種排法？';
          why = '第 1 個位置有 ' + N + ' 種選法，第 2 個剩 ' + (N - 1) + ' 種……：' + (N === 3 ? '3×2×1' : '4×3×2×1') + '＝' + ans + '（種）。';
          err.push([N * N, '排過的人不能再排，每往下一個位置選擇就少 1 個。']);
        } else {
          N = H.ri(r, 4, 9); ans = N * (N - 1) / 2;
          q = t === 0 ? N + ' 位同學見面，每兩人都要握一次手，一共要握幾次手？'
            : t === 2 ? '籃球比賽有 ' + N + ' 隊，每兩隊都要比賽一場，一共要比幾場？'
            : '冰店有 ' + N + ' 種口味，要選 2 種不同口味放在同一碗，共有幾種選法？';
          why = '每一個都和其他 ' + (N - 1) + ' 個配一次：' + N + '×' + (N - 1) + '＝' + N * (N - 1) + '，但「甲配乙」和「乙配甲」是同一種，要÷2：' + N * (N - 1) + '÷2＝' + ans + '。';
          err.push([N * (N - 1), '兩個配在一起，順序換了算同一種，要再÷2。']);
        }
        return H.Q(q, why, H.num(ans, { suf: ['次', '種', '場', '種'][t], err: err }), { t: t, N: N });
      } },
      // d3 和差＋年齡
      { k: 'ageSum', d: 3, n: 3, f: function (r, _, i) {
        var D = H.ri(r, 24, 34), s = H.ri(r, 4, 14), F = s + D, S = F + s, N = H.ri(r, 2, 12), P = H.pick(r, [['爸爸', '兒子'], ['媽媽', '女兒']]);
        if (i % 2 === 0) return H.Q(P[0] + '和' + P[1] + '今年的年齡和是 ' + S + ' 歲，' + P[0] + '比' + P[1] + '大 ' + D + ' 歲。' + N + ' 年後' + P[1] + '幾歲？',
          '今年' + P[1] + '＝(' + S + '－' + D + ')÷2＝' + s + ' 歲，' + N + ' 年後是 ' + s + '＋' + N + '＝' + (s + N) + '（歲）。',
          H.num(s + N, { suf: '歲', err: [[s, '這是今年的年齡，還要加 ' + N + ' 年。'], [F + N, '這是' + P[0] + '的年齡。']] }), { S: S, D: D, N: N, kind: 0 });
        var T = S + 2 * N;
        return H.Q(P[0] + '和' + P[1] + '今年的年齡和是 ' + S + ' 歲。幾年後，兩人的年齡和是 ' + T + ' 歲？',
          '每過一年，兩人一共多 2 歲：(' + T + '－' + S + ')÷2＝' + N + '（年後）。',
          H.num(N, { suf: '年後', err: [[T - S, '每過一年兩個人各長 1 歲，和會多 2 歲，要再÷2。']] }), { S: S, T: T, kind: 1 });
      } },
      // d3 雞兔變形：答對答錯得分、郵票
      { k: 'score', d: 3, n: 4, f: function (r, _, i) {
        if (i % 2 === 0) {
          var Qn = H.pick(r, [20, 25]), a = H.pick(r, [4, 5]), b = H.pick(r, [1, 2]), x = H.ri(r, Math.ceil(Qn / 2), Qn - 1), P = a * x - b * (Qn - x);
          return H.Q('數學競賽共 ' + Qn + ' 題，答對一題得 ' + a + ' 分，答錯或沒答一題扣 ' + b + ' 分。阿哲得了 ' + P + ' 分，他答對幾題？',
            '假設全部答對：' + Qn + '×' + a + '＝' + Qn * a + ' 分，比實際多 ' + (Qn * a - P) + ' 分。每把一題「對」換成「錯」少 ' + a + '＋' + b + '＝' + (a + b) + ' 分，所以答錯 ' + (Qn * a - P) + '÷' + (a + b) + '＝' + (Qn - x) + ' 題，答對 ' + Qn + '－' + (Qn - x) + '＝' + x + '（題）。',
            H.num(x, { suf: '題', err: [[Qn - x, '這是答錯的題數，題目問答對幾題。']] }), { kind: 0, Q: Qn, a: a, b: b, P: P });
        }
        var c = H.pick(r, [[5, 10], [8, 12], [5, 15], [10, 20]]), y = H.ri(r, 3, 15), z = H.ri(r, 3, 15), M = c[0] * y + c[1] * z;
        return H.Q('姐姐在郵局買了 ' + c[0] + ' 元和 ' + c[1] + ' 元的郵票共 ' + (y + z) + ' 張，一共付了 ' + M + ' 元。' + c[1] + ' 元的郵票有幾張？',
          '假設全部是 ' + c[0] + ' 元：' + (y + z) + '×' + c[0] + '＝' + (y + z) * c[0] + ' 元，比實際少 ' + (M - (y + z) * c[0]) + ' 元。每換一張 ' + c[1] + ' 元多 ' + (c[1] - c[0]) + ' 元，所以 ' + c[1] + ' 元郵票＝' + (M - (y + z) * c[0]) + '÷' + (c[1] - c[0]) + '＝' + z + '（張）。',
          H.num(z, { suf: '張', err: y !== z ? [[y, '這是 ' + c[0] + ' 元郵票的張數。']] : [] }), { kind: 1, a: c[0], b: c[1], n: y + z, M: M });
      } },
      // d3 組合進階
      { k: 'comboHard', d: 3, n: 3, f: function (r, _, i) {
        var t = i % 3;
        if (t === 0) {
          var zero = r() < 0.6, k = H.ri(r, 3, 4), ds = H.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9], r).slice(0, zero ? k - 1 : k);
          if (zero) ds.unshift(0);
          var n = (zero ? k - 1 : k) * (k - 1) * (k - 2);
          return H.Q('用 ' + ds.join('、') + ' 這 ' + k + ' 張數字卡，取 3 張排成三位數（每張只能用一次）。可以排出幾個不同的三位數？',
            (zero ? '百位不能是 0，有 ' + (k - 1) + ' 種；' : '百位有 ' + k + ' 種；') + '十位從剩下的選，有 ' + (k - 1) + ' 種；個位有 ' + (k - 2) + ' 種：' + (zero ? k - 1 : k) + '×' + (k - 1) + '×' + (k - 2) + '＝' + n + '（個）。',
            H.num(n, { suf: '個', err: zero ? [[k * (k - 1) * (k - 2), '0 不能放在百位，要扣掉 0 開頭的。']] : [] }), { t: 0, ds: ds });
        }
        if (t === 1) {
          var N = H.ri(r, 3, 5), a2 = fact(N - 1), who = H.pick(r, ['小明', '阿哲', '姐姐']);
          return H.Q(who + '和朋友共 ' + N + ' 人排成一列，' + who + '一定要排第一個。共有幾種排法？',
            '第一個固定是' + who + '，剩下 ' + (N - 1) + ' 人排後面：' + (N - 1) + '×…×1＝' + a2 + '（種）。',
            H.num(a2, { suf: '種', err: [[fact(N), '第一個已經固定是' + who + '，只要排剩下的 ' + (N - 1) + ' 人。']] }), { t: 1, N: N });
        }
        var M2 = H.ri(r, 4, 10), T = M2 * (M2 - 1) / 2;
        return H.Q('一群人見面，每兩人都握一次手，一共握了 ' + T + ' 次。這群人有幾人？',
          '一個一個加人試：2 人 1 次、3 人 3 次、4 人 6 次……每多 1 人就多握「原來人數」次。加到 ' + T + ' 次時是 ' + M2 + ' 人（' + M2 + '×' + (M2 - 1) + '÷2＝' + T + '）。',
          H.num(M2, { suf: '人', err: [[T * 2, '握手次數不是人數，用「人數×(人數－1)÷2」往回試。']] }), { t: 2, T: T });
      } },
      // d1 和差：選出正確的一組
      { k: 'sdPick', d: 1, n: 4, f: function (r) {
        var big = H.ri(r, 15, 120), small = H.ri(r, 3, big - 2), S = big + small, Dd = big - small;
        return H.Q('兩個數的和是 ' + S + '，差是 ' + Dd + '。這兩個數是下面哪一組？',
          '大數＝(' + S + '＋' + Dd + ')÷2＝' + big + '，小數＝' + S + '－' + big + '＝' + small + '。驗算：' + big + '＋' + small + '＝' + S + '，' + big + '－' + small + '＝' + Dd + '。',
          H.mc({ a: big, b: small }, [{ a: S + Dd, b: S - Dd }, { a: big + 1, b: small - 1 }, { a: big - 1, b: small + 1 }, { a: S, b: Dd }], function (o) { return o.a + ' 和 ' + o.b; }), { S: S, D: Dd });
      } },
      // d3 雞兔變形：選出答對、答錯各幾題
      { k: 'scoreMc', d: 3, n: 4, f: function (r) {
        var Qn = H.pick(r, [10, 12, 15, 20]), a = H.pick(r, [3, 4, 5]), b = H.pick(r, [1, 2]), x = H.ri(r, Math.ceil(Qn / 2), Qn - 2), P = a * x - b * (Qn - x);
        var w = [{ x: x + 1, w: Qn - x - 1 }, { x: x - 1, w: Qn - x + 1 }, { x: x + 2, w: Qn - x - 2 }];
        if (Qn - x !== x) w.push({ x: Qn - x, w: x });
        return H.Q('闖關遊戲共 ' + Qn + ' 關，過一關得 ' + a + ' 分，沒過一關扣 ' + b + ' 分。姐姐最後得了 ' + P + ' 分，她過關、沒過各幾關？',
          '假設全部過關：' + Qn + '×' + a + '＝' + Qn * a + ' 分，多了 ' + (Qn * a - P) + ' 分；每有一關沒過少 ' + a + '＋' + b + '＝' + (a + b) + ' 分，所以沒過 ' + (Qn * a - P) + '÷' + (a + b) + '＝' + (Qn - x) + ' 關，過關 ' + x + ' 關。',
          H.mc({ x: x, w: Qn - x }, w, function (o) { return '過關 ' + o.x + ' 關、沒過 ' + o.w + ' 關'; }), { Q: Qn, a: a, b: b, P: P });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
