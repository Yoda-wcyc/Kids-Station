/* balance-word.js — 天平〈📝 應用題〉的故事模板（2026-11-01，純函式；瀏覽器 window.BW、Node module.exports 共用）。
   只出天平頁會算的加減方程式（x 只出現一次、在等號左邊、不在減號後面，數字 1～999）：
     f＝'p'  x＋a＝r      'm'  x−a＝r      'ap' a＋x＝r
         'pm' (x＋a)−b＝r  'pm2' x＋a−b＝r  'mp' (x−a)＋b＝r
   build(c, v)：c＝故事編號、v＝[x, a, b]（兩個數的式子 b＝0）；同一組 (c, v) 一定做出同一題 → 錯題庫只存 c、v 就能原題重做。
     回 {c, v, id:'eqw:<c>:<v>', f, text（故事）, ask（問句）, unit, x（答案）, eq（正確算式，− 用全形減號）, opts:[3 個算式]}；不合理回 null。
   答案一定是 2 以上的整數，式子裡每個數都在 1～999、互不相同；中間算出來的數不會變負的。 */
(function (G) {
  'use strict';
  function ri(rnd, a, b) { return a + Math.floor(rnd() * (b - a + 1)); }
  function isInt(n) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n; }
  var M = '−';
  // r＝等號右邊；eq＝正確算式；bad＝兩個常見的錯誤列式（只拿來當選項）
  var FORM = {
    p: { n: 2, r: function (x, a) { return x + a; }, eq: function (a, b, r) { return ['x+' + a + '=' + r, 'x' + M + a + '=' + r, 'x+' + r + '=' + a]; } },
    m: { n: 2, r: function (x, a) { return x - a; }, eq: function (a, b, r) { return ['x' + M + a + '=' + r, 'x+' + a + '=' + r, 'x+' + r + '=' + a]; } },   // 錯的選項不能用 x−r＝a（跟 x−a＝r 一樣成立）
    ap: { n: 2, r: function (x, a) { return a + x; }, eq: function (a, b, r) { return [a + '+x=' + r, 'x' + M + a + '=' + r, a + '+' + r + '=x']; } },
    pm: { n: 3, r: function (x, a, b) { return x + a - b; }, eq: function (a, b, r) { return ['(x+' + a + ')' + M + b + '=' + r, '(x' + M + a + ')+' + b + '=' + r, '(x+' + b + ')' + M + a + '=' + r]; } },
    pm2: { n: 3, r: function (x, a, b) { return x + a - b; }, eq: function (a, b, r) { return ['x+' + a + M + b + '=' + r, 'x' + M + a + '+' + b + '=' + r, 'x+' + b + M + a + '=' + r]; } },
    mp: { n: 3, r: function (x, a, b) { return x - a + b; }, eq: function (a, b, r) { return ['(x' + M + a + ')+' + b + '=' + r, '(x+' + a + ')' + M + b + '=' + r, '(x' + M + b + ')+' + a + '=' + r]; } }
  };
  // 故事：{a}{b}＝題目給的數、{r}＝最後的結果；x／a／b＝亂數範圍
  var T = [
    { f: 'p', t: '小明原本有一些彈珠，哥哥又給他 {a} 顆，現在小明有 {r} 顆彈珠。', q: '小明原本有幾顆彈珠？', u: '顆', x: [5, 40], a: [2, 20] },
    { f: 'm', t: '媽媽買了一些雞蛋，做蛋糕用掉 {a} 顆，還剩下 {r} 顆。', q: '媽媽買了幾顆雞蛋？', u: '顆', x: [10, 30], a: [2, 8] },
    { f: 'ap', t: '公車上原本有 {a} 位乘客，到了下一站又上來一些人（沒有人下車），車上變成 {r} 位乘客。', q: '上來了幾位乘客？', u: '位', x: [2, 15], a: [5, 30] },
    { f: 'm', t: '小華有一些零用錢，買文具花了 {a} 元，還剩下 {r} 元。', q: '小華原本有多少元？', u: '元', x: [50, 200], a: [15, 45] },
    { f: 'p', t: '一條緞帶再接上一段 {a} 公分的緞帶，變成 {r} 公分長。', q: '原來的緞帶長幾公分？', u: '公分', x: [20, 80], a: [10, 40] },
    { f: 'ap', t: '班級圖書角原本有 {a} 本故事書，同學又捐了一些，現在有 {r} 本。', q: '同學捐了幾本？', u: '本', x: [5, 25], a: [30, 80] },
    { f: 'pm', t: '小美原本有一些貼紙，生日時收到 {a} 張，後來送給同學 {b} 張，現在有 {r} 張。', q: '小美原本有幾張貼紙？', u: '張', x: [10, 40], a: [5, 20], b: [3, 15] },
    { f: 'mp', t: '停車場原本停了一些車，開走了 {a} 輛，又開進來 {b} 輛，現在有 {r} 輛。', q: '停車場原本有幾輛車？', u: '輛', x: [20, 60], a: [3, 15], b: [2, 12] },
    { f: 'm', t: '園遊會的攤位賣出 {a} 杯珍珠奶茶後，還剩下 {r} 杯。', q: '攤位原本準備了幾杯？', u: '杯', x: [60, 150], a: [20, 50] },
    { f: 'p', t: '弟弟今年比去年長高了 {a} 公分，現在是 {r} 公分。', q: '弟弟去年是幾公分？', u: '公分', x: [115, 140], a: [3, 9] },
    { f: 'pm2', t: '圖書館原本有一些書，買進 {a} 本新書，又被借出 {b} 本，館裡現在有 {r} 本。', q: '圖書館原本有幾本書？', u: '本', x: [100, 400], a: [20, 60], b: [10, 50] },
    { f: 'ap', t: '水桶裡原本有 {a} 公升的水，又倒進一些水，現在有 {r} 公升。', q: '倒進了幾公升的水？', u: '公升', x: [2, 12], a: [3, 15] },
    { f: 'mp', t: '小明的存錢筒原本有一些錢，他拿出 {a} 元買書，媽媽又給他 {b} 元，現在有 {r} 元。', q: '存錢筒原本有多少元？', u: '元', x: [100, 300], a: [30, 90], b: [20, 80] },
    { f: 'm', t: '一盒巧克力分給同學 {a} 顆以後，還剩下 {r} 顆。', q: '這盒巧克力原本有幾顆？', u: '顆', x: [20, 48], a: [5, 18] },
    { f: 'p', t: '校外教學的遊覽車上原本有一些人，到了學校門口又上來 {a} 人，現在車上有 {r} 人。', q: '原本車上有幾人？', u: '人', x: [10, 30], a: [5, 15] },
    { f: 'pm2', t: '果園裡的芭樂樹原本結了一些芭樂，後來又長出 {a} 顆，被鳥吃掉 {b} 顆，現在有 {r} 顆。', q: '原本結了幾顆芭樂？', u: '顆', x: [20, 60], a: [5, 25], b: [3, 15] },
    { f: 'pm', t: '班上做卡片，老師原本有一些色紙，又買來 {a} 張，發給同學 {b} 張以後，還剩 {r} 張。', q: '老師原本有幾張色紙？', u: '張', x: [15, 50], a: [20, 40], b: [25, 50] }
  ];

  // 難度（2026-11-01，循序漸進；規則在 word-level.js）：1＝一步、數字小；2＝一步、數字比較大；3＝兩步（加了又減、減了又加）
  T.forEach(function (t) { t.d = FORM[t.f].n === 3 ? 3 : (t.x[1] > 50 || t.a[1] > 50) ? 2 : 1; });
  function inR(x, r) { return isInt(x) && x >= r[0] && x <= r[1]; }
  function build(c, v) {
    var t = T[c];
    if (!t || !isInt(c) || !Array.isArray(v) || v.length !== 3 || !v.every(isInt)) return null;
    var F = FORM[t.f], x = v[0], a = v[1], b = v[2];
    if (!inR(x, t.x) || !inR(a, t.a) || (F.n === 3 ? !inR(b, t.b) : b !== 0)) return null;
    if ((t.f === 'm' || t.f === 'mp') && x <= a) return null;                 // 先減：x 要比 a 大，中間不會變負
    var r = F.r(x, a, b), all = F.n === 3 ? [x, a, b, r] : [x, a, r];
    if (!(r >= 1 && r <= 999 && x >= 2) || all.some(function (n, i) { return all.indexOf(n) !== i; })) return null;   // 數字互不相同：選項才不會一樣
    var opts = F.eq(a, b, r), eq = opts[0], k = (x + a + b) % 3, ord = [opts[(3 - k) % 3], opts[(4 - k) % 3], opts[(5 - k) % 3]];   // 選項順序跟著 v 固定（重做時一樣）
    var text = t.t.replace('{a}', a).replace('{b}', b).replace('{r}', r);
    return { c: c, v: v.slice(), id: 'eqw:' + c + ':' + v.join(','), f: t.f, d: t.d, text: text, ask: t.q, unit: t.u, x: x, eq: eq, opts: ord };
  }
  function make(c, rnd) {
    rnd = rnd || Math.random; var t = T[c]; if (!t) return null;
    for (var i = 0; i < 2000; i++) {
      var v = [ri(rnd, t.x[0], t.x[1]), ri(rnd, t.a[0], t.a[1]), t.b ? ri(rnd, t.b[0], t.b[1]) : 0], Q = build(c, v);
      if (Q) return Q;
    }
    return null;
  }
  // 一輪：故事不重複；maxD（循序漸進，預設 3）只出難度 ≤ maxD 的故事；照難度由小到大排
  function round(n, rnd, maxD) {
    rnd = rnd || Math.random; maxD = maxD || 3;
    var cs = T.map(function (x, i) { return i; }).filter(function (c) { return T[c].d <= maxD; });
    for (var i = cs.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), s = cs[i]; cs[i] = cs[j]; cs[j] = s; }
    return cs.slice(0, n).map(function (c) { return make(c, rnd); }).filter(Boolean).sort(function (a, b) { return a.d - b.d; });
  }
  function mkEntry(Q) { return { id: Q.id, p: { q: Q.eq, bw: Q.c, v: Q.v.slice(), t: Q.text + Q.ask } }; }   // 沒有 type＝天平的錯題（KidsMistakes.mathType → 'eq'）
  function fromMistake(p) { return p && isInt(p.bw) && Array.isArray(p.v) ? build(p.bw, p.v) : null; }

  var BW = { T: T, FORM: FORM, build: build, make: make, round: round, mkEntry: mkEntry, fromMistake: fromMistake };
  if (typeof module !== 'undefined' && module.exports) module.exports = BW;
  else G.BW = BW;
})(typeof window !== 'undefined' ? window : globalThis);
