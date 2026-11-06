/* 六下 單元二 速率的應用（待課本核對）。重點與題目全部原創；答案由程式算，驗算在 test/mg-verify/g6b2.js（一分鐘一分鐘模擬位置）。 */
(function (MG) {
  'use strict';
  var H = MG.H, C = H.comma;
  var V = function (x) { return H.fmt(x, 'dec'); };
  var RED = '#d9480f', BLUE = '#1971c2';
  function arrow(x1, x2, y, c) { var s = x2 > x1 ? 1 : -1; return '<line x1="' + x1 + '" y1="' + y + '" x2="' + (x2 - 8 * s) + '" y2="' + y + '" stroke="' + c + '" stroke-width="4"/><polygon points="' + x2 + ',' + y + ' ' + (x2 - 14 * s) + ',' + (y - 7) + ' ' + (x2 - 14 * s) + ',' + (y + 7) + '" fill="' + c + '"/>'; }
  // 路線圖：每個人 [位置, 方向(1 右／-1 左), 字, 字的對齊]；gap＝[x1, x2, 中間標的距離]
  function road(A, B, gap, label) {
    var y = 80, b = '<line x1="20" y1="' + y + '" x2="480" y2="' + y + '" stroke="#adb5bd" stroke-width="3"/>';
    [[A, RED], [B, BLUE]].forEach(function (p) {
      var o = p[0], c = p[1];
      b += '<circle cx="' + o[0] + '" cy="' + y + '" r="8" fill="' + c + '"/>' + arrow(o[0], o[0] + 60 * o[1], y - 20, c) + H.txt(o[0] + (o[3] === 'end' ? 10 : o[3] === 'start' ? -10 : 0), y - 36, o[2], { c: c, fs: 14, a: o[3] || 'middle' });
    });
    b += '<line x1="' + gap[0] + '" y1="' + (y + 24) + '" x2="' + gap[1] + '" y2="' + (y + 24) + '" stroke="' + H.INK + '" stroke-width="1.5"/>' +
      '<line x1="' + gap[0] + '" y1="' + (y + 16) + '" x2="' + gap[0] + '" y2="' + (y + 32) + '" stroke="' + H.INK + '" stroke-width="1.5"/>' +
      '<line x1="' + gap[1] + '" y1="' + (y + 16) + '" x2="' + gap[1] + '" y2="' + (y + 32) + '" stroke="' + H.INK + '" stroke-width="1.5"/>' + H.txt((gap[0] + gap[1]) / 2, y + 50, gap[2], { fs: 14 });
    return H.svg(500, 140, b, label);
  }
  // 情境：哥哥（a，比較快）和弟弟（b）
  var KIND = {
    meet: '面對面走向對方', away: '從同一個地方往相反方向走', chase: '哥哥在後面，兩人往同一個方向走',
    ahead: '從同一個地方往同一個方向走', bstill: '弟弟站著不動，哥哥走向他', astill: '哥哥站著不動，弟弟走離他'
  };
  // 來回平均速率用的速率組合（距離是兩個速率的公倍數、平均速率是有限小數）
  var PAIRS = [];
  for (var p = 10; p <= 30; p++) for (var s = 6; s < p; s++) if (p <= 3 * s && H.lcm(p, s) <= 60 && H.toDec(H.R(2 * p * s, p + s))) PAIRS.push([p, s]);

  MG.unit({
    id: 'g6b2', pending: '待課本核對',
    cards: [
      { t: '平均速率＝總距離÷總時間。不是把兩段的速率加起來除以 2。',
        ex: '前 2 小時每小時騎 15 公里（30 公里），後 1 小時每小時騎 12 公里（12 公里）：<br>(30＋12)÷(2＋1)＝42÷3＝<b>14</b>，平均每小時 14 公里。<br>不是 (15＋12)÷2＝13.5！',
        why: '每小時 15 公里那段騎得比較久，佔的份量比較多；直接平均兩個速率，等於假裝兩段時間一樣長。' },
      { t: '面對面走（相遇）或背對背走（相離）：兩人的距離每分鐘改變「兩人速率相加」。',
        ex: '相距 1,200 公尺，哥哥每分鐘 70 公尺、弟弟每分鐘 50 公尺，面對面走：<br>每分鐘靠近 70＋50＝120 公尺，1,200÷120＝<b>10 分鐘</b>後相遇。',
        why: '兩個人同時在縮短（或拉開）同一段距離，一分鐘的效果要加在一起。',
        svg: road([50, 1, '哥哥 每分 70 公尺', 'start'], [450, -1, '弟弟 每分 50 公尺', 'end'], [50, 450, '相距 1,200 公尺'], '相遇示意圖') },
      { t: '同方向追趕：每分鐘只拉近「速率差」。追上的時間＝相差的距離÷速率差。',
        ex: '弟弟在前面 300 公尺，哥哥每分鐘 80 公尺、弟弟每分鐘 60 公尺：<br>每分鐘拉近 80－60＝20 公尺，300÷20＝<b>15 分鐘</b>追上。',
        why: '哥哥往前走 80 公尺時，弟弟也往前走了 60 公尺，兩人只近了 20 公尺。',
        svg: road([60, 1, '哥哥 每分 80 公尺', 'start'], [260, 1, '弟弟 每分 60 公尺', 'start'], [60, 260, '相差 300 公尺'], '追趕示意圖') },
      { t: '流水問題：順水速率＝船速＋水速；逆水速率＝船速－水速。',
        ex: '船在靜水中每小時 20 公里、河水每小時流 4 公里：<br>順水每小時 24 公里，3 小時走 24×3＝<b>72 公里</b>；逆水每小時 16 公里，走 48 公里要 48÷16＝<b>3 小時</b>。',
        why: '順水時河水幫忙推船，逆水時河水把船往回推。反過來：船速＝(順水＋逆水)÷2，水速＝(順水－逆水)÷2。' }
    ],
    gens: [
      // d1 平均速率（兩段）
      { k: 'avg', d: 1, n: 6, f: function (r, _, i) {
        var bike = i % 2 === 0, t1 = bike ? H.ri(r, 1, 3) : 5 * H.ri(r, 1, 4), t2 = bike ? H.ri(r, 1, 3) : 5 * H.ri(r, 1, 4);
        var v1 = bike ? H.ri(r, 10, 20) : H.ri(r, 50, 90), v2 = bike ? H.ri(r, 8, 20) : H.ri(r, 40, 90);
        if (t1 === t2 || v1 === v2) return null;
        var d1 = v1 * t1, d2 = v2 * t2, ans = H.R(d1 + d2, t1 + t2); if (!H.toDec(ans)) return null;
        var tu = bike ? '小時' : '分鐘', du = bike ? '公里' : '公尺';
        var q = bike ? '阿哲騎腳踏車，前 ' + t1 + ' 小時每小時騎 ' + v1 + ' 公里，接著 ' + t2 + ' 小時每小時騎 ' + v2 + ' 公里。全程平均每小時騎幾公里？'
          : '姐姐在河堤健走，前 ' + t1 + ' 分鐘每分鐘走 ' + v1 + ' 公尺，接著 ' + t2 + ' 分鐘每分鐘走 ' + v2 + ' 公尺。全程平均每分鐘走幾公尺？';
        return H.Q(q, '總距離：' + v1 + '×' + t1 + '＋' + v2 + '×' + t2 + '＝' + d1 + '＋' + d2 + '＝' + (d1 + d2) + '（' + du + '）；總時間：' + t1 + '＋' + t2 + '＝' + (t1 + t2) + '（' + tu + '）。平均速率＝總距離÷總時間＝' + (d1 + d2) + '÷' + (t1 + t2) + '＝' + V(ans) + '。',
          H.num(ans, { suf: du, err: [[H.R(v1 + v2, 2), '不能把兩個速率直接平均，兩段的時間不一樣長；要用總距離÷總時間。']] }), { segs: [[v1, t1], [v2, t2]] });
      } },
      // d1 相遇（速率相加）
      { k: 'meet', d: 1, n: 6, f: function (r, _, i) {
        var car = i % 2 === 1, a = car ? H.ri(r, 60, 90) : H.ri(r, 50, 90), b = car ? H.ri(r, 50, 80) : H.ri(r, 40, 80), t = car ? H.ri(r, 2, 5) : H.ri(r, 5, 20), D = (a + b) * t, u = car ? '小時' : '分鐘';
        var q = car ? '甲、乙兩個城市相距 ' + C(D) + ' 公里。兩輛車同時從兩個城市出發，面對面開過去：一輛時速 ' + a + ' 公里，另一輛時速 ' + b + ' 公里。幾小時後兩車相遇？'
          : '哥哥在公園東門、弟弟在西門，沿著步道相距 ' + C(D) + ' 公尺。兩人同時出發，面對面走向對方：哥哥每分鐘走 ' + a + ' 公尺，弟弟每分鐘走 ' + b + ' 公尺。幾分鐘後兩人相遇？';
        var err = [[H.R(D, a), '只用了一個的速率；兩邊一起靠近，要用速率相加。']];
        if (a !== b) err.push([H.R(D, Math.abs(a - b)), '面對面是速率相加，不是相減。']);
        return H.Q(q, '面對面走，每' + u + '一共靠近 ' + a + '＋' + b + '＝' + (a + b) + '（' + (car ? '公里' : '公尺') + '），' + C(D) + '÷' + (a + b) + '＝' + t + '（' + u + '）。',
          H.num(t, { suf: u, err: err }), { D: D, a: a, b: b });
      } },
      // d1 追趕（速率相減）
      { k: 'chase', d: 1, n: 6, f: function (r, _, i) {
        var car = i % 2 === 1, b = car ? H.ri(r, 60, 80) : H.ri(r, 50, 70), g = car ? H.ri(r, 10, 30) : H.ri(r, 10, 40), a = b + g, t = car ? H.ri(r, 1, 4) : H.ri(r, 4, 15), D = g * t, u = car ? '小時' : '分鐘';
        var q = car ? '高速公路上，一輛貨車在一輛小客車前面 ' + D + ' 公里，兩車同時往同一個方向開。貨車時速 ' + b + ' 公里，小客車時速 ' + a + ' 公里。幾小時後小客車追上貨車？'
          : '弟弟在哥哥前面 ' + D + ' 公尺，兩人同時往同一個方向走。弟弟每分鐘走 ' + b + ' 公尺，哥哥每分鐘走 ' + a + ' 公尺。幾分鐘後哥哥追上弟弟？';
        return H.Q(q, '同方向追趕，每' + u + '只拉近速率差 ' + a + '－' + b + '＝' + g + '（' + (car ? '公里' : '公尺') + '），' + D + '÷' + g + '＝' + t + '（' + u + '）。',
          H.num(t, { suf: u, err: [[H.R(D, a + b), '同方向追趕是速率相減，不是相加。'], [H.R(D, a), '後面的在追的時候，前面的也在往前走，要用速率差。']] }), { D: D, a: a, b: b });
      } },
      // d2 相離：反方向（相加）或同方向（相減）
      { k: 'away', d: 2, n: 5, f: function (r, _, i) {
        var same = i % 2 === 1, a = H.ri(r, 60, 90), b = H.ri(r, 40, a - 10), t = H.ri(r, 5, 20), ans = same ? (a - b) * t : (a + b) * t;
        return H.Q('哥哥和弟弟從學校門口同時出發，往' + (same ? '同一個' : '相反的') + '方向走。哥哥每分鐘走 ' + a + ' 公尺，弟弟每分鐘走 ' + b + ' 公尺。' + t + ' 分鐘後兩人相距多少公尺？',
          same ? '同方向走，每分鐘只拉開速率差 ' + a + '－' + b + '＝' + (a - b) + '（公尺），' + t + ' 分鐘：' + (a - b) + '×' + t + '＝' + ans + '（公尺）。'
            : '反方向走，每分鐘拉開 ' + a + '＋' + b + '＝' + (a + b) + '（公尺），' + t + ' 分鐘：' + (a + b) + '×' + t + '＝' + ans + '（公尺）。',
          H.num(ans, { suf: '公尺', err: same ? [[(a + b) * t, '同方向走是速率相減，每分鐘只拉開 ' + (a - b) + ' 公尺。']] : [[(a - b) * t, '反方向走兩人都在拉開距離，速率要相加。']] }), { a: a, b: b, t: t, same: same });
      } },
      // d2 流水
      { k: 'river', d: 2, n: 6, f: function (r, _, i) {
        var v = H.ri(r, 12, 30), w = H.ri(r, 2, 6), t = H.ri(r, 2, 6), k = i % 3, head = '一艘船在靜水中每小時航行 ' + v + ' 公里，河水每小時流 ' + w + ' 公里。';
        if (k === 0) return H.Q(head + '這艘船順水航行 ' + t + ' 小時，可以走多少公里？', '順水速率＝船速＋水速＝' + v + '＋' + w + '＝' + (v + w) + '，' + (v + w) + '×' + t + '＝' + (v + w) * t + '（公里）。',
          H.num((v + w) * t, { suf: '公里', err: [[v * t, '順水時河水也在推船，速率要加上水速。'], [(v - w) * t, '船速－水速是逆水；順水要相加。']] }), { v: v, w: w, t: t, k: 0 });
        if (k === 1) { var D = (v - w) * t; return H.Q(head + '這艘船逆水航行 ' + D + ' 公里，要幾小時？', '逆水速率＝船速－水速＝' + v + '－' + w + '＝' + (v - w) + '，' + D + '÷' + (v - w) + '＝' + t + '（小時）。',
          H.num(t, { suf: '小時', err: [[H.R(D, v + w), '逆水是船速－水速，不是相加。'], [H.R(D, v), '逆水時河水把船往回推，要扣掉水速。']] }), { v: v, w: w, D: D, k: 1 }); }
        var up = i % 2 === 0, ans = up ? v - w : v + w;
        return H.Q(head + '這艘船' + (up ? '逆水而上' : '順水而下') + '，每小時前進多少公里？', (up ? '逆水速率＝船速－水速＝' + v + '－' + w : '順水速率＝船速＋水速＝' + v + '＋' + w) + '＝' + ans + '（公里）。',
          H.num(ans, { suf: '公里', err: [[up ? v + w : v - w, up ? '逆水時河水往回推，要減掉水速。' : '順水時河水幫忙推，要加上水速。']] }), { v: v, w: w, up: up, k: 2 });
      } },
      // d2 選擇：距離每分鐘怎麼變
      { k: 'rel', d: 2, n: 5, f: function (r, _, i) {
        var b = H.ri(r, 40, 70), a = b + H.ri(r, 10, 30), X = 100 * H.ri(r, 10, 20), kind = ['meet', 'away', 'chase', 'ahead'][i % 4];
        var S = { meet: '哥哥和弟弟在步道的兩端，相距 ' + C(X) + ' 公尺，同時出發面對面走。', away: '哥哥和弟弟從同一個地方同時出發，往相反方向走。',
          chase: '哥哥在弟弟後面 ' + C(X) + ' 公尺，兩人同時往同一個方向走。', ahead: '哥哥和弟弟從同一個地方同時出發，往同一個方向走。' }[kind];
        var ans = { ch: kind === 'meet' || kind === 'chase' ? '縮短' : '拉開', m: kind === 'meet' || kind === 'away' ? a + b : a - b }, wrong = [];
        ['縮短', '拉開'].forEach(function (ch) { [a + b, a - b, a, b].forEach(function (m) { wrong.push({ ch: ch, m: m }); }); });
        var show = function (x) { return '每分鐘' + x.ch + ' ' + x.m + ' 公尺'; };
        return H.Q(S + '哥哥每分鐘走 ' + a + ' 公尺，弟弟每分鐘走 ' + b + ' 公尺。' + (kind === 'meet' ? '在相遇以前，' : kind === 'chase' ? '在追上以前，' : '') + '兩人之間的距離每分鐘會怎麼變？',
          (kind === 'meet' || kind === 'away' ? '兩人往相反方向動，一分鐘的效果相加：' + a + '＋' + b + '＝' + (a + b) : '兩人往同一個方向走，只差速率差：' + a + '－' + b + '＝' + (a - b)) + '，距離每分鐘' + ans.ch + ' ' + ans.m + ' 公尺。',
          H.mc(ans, H.shuffle(wrong, r), show), { kind: kind, a: a, b: b, X: X });
      } },
      // d2 列出全部：哪些情形距離每分鐘改變 N
      { k: 'kinds', d: 2, n: 5, f: function (r, _, i) {
        var b = H.ri(r, 40, 70), a = b + H.ri(r, 10, 30), plus = i % 2 === 0, N = plus ? a + b : a - b;
        if (a === 2 * b) return null;
        var good = plus ? ['meet', 'away'] : ['chase', 'ahead'], bad = H.shuffle(Object.keys(KIND).filter(function (k) { return good.indexOf(k) < 0; }), r).slice(0, 3);
        var cand = H.shuffle(good.concat(bad), r);
        return H.Q('哥哥每分鐘走 ' + a + ' 公尺，弟弟每分鐘走 ' + b + ' 公尺。下面哪些情形，兩人之間的距離每分鐘會改變 ' + N + ' 公尺？<b>全部選出來。</b>',
          (plus ? '改變 ' + a + '＋' + b + '＝' + N + ' 的是兩人往相反方向動：面對面走、背對背走。' : '改變 ' + a + '－' + b + '＝' + N + ' 的是兩人往同一個方向走：追趕、一起出發。') + '只有一個人走時，距離每分鐘只改變那個人的速率。',
          H.set(cand, function (k) { return good.indexOf(k) >= 0; }, function (k) { return KIND[k]; }), { a: a, b: b, N: N, cand: cand });
      } },
      // d3 流水：由順水、逆水反推船速或水速
      { k: 'river3', d: 3, n: 4, f: function (r, _, i) {
        var v = H.ri(r, 10, 30), w = H.ri(r, 2, 6), t1 = H.ri(r, 2, 5), t2 = H.ri(r, 2, 5), D1 = (v + w) * t1, D2 = (v - w) * t2, boat = i % 2 === 0;
        var why = '順水每小時 ' + D1 + '÷' + t1 + '＝' + (v + w) + '（船速＋水速），逆水每小時 ' + D2 + '÷' + t2 + '＝' + (v - w) + '（船速－水速）。' +
          (boat ? '船速＝(順水＋逆水)÷2＝(' + (v + w) + '＋' + (v - w) + ')÷2＝' + v + '（公里）。' : '水速＝(順水－逆水)÷2＝(' + (v + w) + '－' + (v - w) + ')÷2＝' + w + '（公里）。');
        return H.Q('一艘船順水航行 ' + D1 + ' 公里用了 ' + t1 + ' 小時，逆水航行 ' + D2 + ' 公里用了 ' + t2 + ' 小時。' + (boat ? '這艘船在靜水中每小時航行幾公里？' : '河水每小時流幾公里？'), why,
          H.num(boat ? v : w, { suf: '公里', err: boat ? [[v + w, '這是順水的速率，裡面多了水速。'], [v - w, '這是逆水的速率，裡面少了水速。']] : [[2 * w, '順水和逆水差了 2 個水速，要再 ÷2。']] }), { D1: D1, t1: t1, D2: D2, t2: t2, boat: boat });
      } },
      // d3 先出發的追趕
      { k: 'chase3', d: 3, n: 4, f: function (r, _, i) {
        var b = H.pick(r, [50, 55, 60, 65, 70, 75, 80]), g = H.pick(r, [10, 15, 20, 25, 30, 40]), a = b + g, x = H.ri(r, 3, 12), lead = b * x;
        if (lead % g) return null; var t = lead / g; if (t > 60) return null;
        var dist = i % 2 === 1, q = '弟弟從家裡出發去圖書館，每分鐘走 ' + b + ' 公尺。弟弟走了 ' + x + ' 分鐘後，哥哥從家裡出發沿同一條路去追，每分鐘走 ' + a + ' 公尺。';
        var why = '弟弟先走了 ' + b + '×' + x + '＝' + lead + '（公尺）；哥哥每分鐘拉近 ' + a + '－' + b + '＝' + g + '（公尺），' + lead + '÷' + g + '＝' + t + '（分鐘）追上' + (dist ? '，這時離家 ' + a + '×' + t + '＝' + C(a * t) + '（公尺）。' : '。');
        return H.Q(q + (dist ? '哥哥追上弟弟時，離家多少公尺？' : '哥哥出發後幾分鐘追上弟弟？'), why,
          dist ? H.num(a * t, { suf: '公尺', err: [[lead, '這是弟弟先走的距離，還要算哥哥追了多久。']] }) : H.num(t, { suf: '分鐘', err: [[H.R(lead, a), '哥哥追的時候弟弟也在走，要用速率差 ' + a + '－' + b + '。'], [H.R(lead, a + b), '同方向追趕要用速率相減。']] }),
          { a: a, b: b, x: x, dist: dist });
      } },
      // d3 來回的平均速率
      { k: 'avg3', d: 3, n: 4, f: function (r) {
        var pr = H.pick(r, PAIRS), p = pr[0], s = pr[1], L = H.lcm(p, s), D = L * H.ri(r, 1, Math.max(1, Math.floor(60 / L))), t1 = D / p, t2 = D / s, ans = H.R(2 * D, t1 + t2);
        return H.Q('阿哲騎腳踏車去外婆家，單程 ' + D + ' 公里。去程每小時騎 ' + p + ' 公里，回程上坡比較慢，每小時騎 ' + s + ' 公里。來回的平均速率是每小時幾公里？',
          '去程 ' + D + '÷' + p + '＝' + t1 + '（小時），回程 ' + D + '÷' + s + '＝' + t2 + '（小時）。來回 ' + 2 * D + ' 公里共 ' + (t1 + t2) + ' 小時：' + 2 * D + '÷' + (t1 + t2) + '＝' + V(ans) + '（公里）。',
          H.num(ans, { suf: '公里', err: [[H.R(p + s, 2), '不能把兩個速率直接平均：回程比較慢、花的時間比較久。要用總距離÷總時間。']] }), { D: D, p: p, s: s });
      } },
      // d1 選擇：要用哪一個算式（算式用 ASCII，: 是除）
      { k: 'expr', d: 1, n: 4, f: function (r, _, i) {
        var chase = i % 2 === 1, b = H.ri(r, 40, 70), a = b + H.ri(r, 10, 30), t = H.ri(r, 4, 15), D = (chase ? a - b : a + b) * t;
        var ans = D + ':(' + a + (chase ? '-' : '+') + b + ')', w = [D + ':(' + a + (chase ? '+' : '-') + b + ')', D + ':' + a, '(' + a + '+' + b + '):' + D, D + '*(' + a + '-' + b + ')'];
        var show = function (e) { return e.replace(/\*/g, '×').replace(/:/g, '÷').replace(/\+/g, '＋').replace(/-/g, '－'); };
        var q = chase ? '弟弟在哥哥前面 ' + D + ' 公尺，兩人同時往同一個方向走：哥哥每分鐘走 ' + a + ' 公尺，弟弟每分鐘走 ' + b + ' 公尺。要算哥哥幾分鐘後追上弟弟，下面哪一個算式是對的？'
          : '哥哥和弟弟相距 ' + D + ' 公尺，同時出發面對面走：哥哥每分鐘走 ' + a + ' 公尺，弟弟每分鐘走 ' + b + ' 公尺。要算幾分鐘後兩人相遇，下面哪一個算式是對的？';
        return H.Q(q, (chase ? '同方向追趕，每分鐘拉近速率差，用 相差的距離÷(' + a + '－' + b + ')' : '面對面走，每分鐘靠近兩人速率的和，用 距離÷(' + a + '＋' + b + ')') + '＝' + t + '（分鐘）。',
          H.mc(ans, w, show), { D: D, a: a, b: b, chase: chase });
      } },
      // d3 列出全部：流水的說法哪些對
      { k: 'claim', d: 3, n: 4, f: function (r) {
        var v = H.ri(r, 12, 30), w = H.ri(r, 2, 6), t = H.ri(r, 2, 5), t2 = H.ri(r, 2, 6), D = (v - w) * t2;
        var T = [{ k: 'down', n: v + w }, { k: 'up', n: v - w }, { k: 'downD', t: t, n: (v + w) * t }, { k: 'upT', D: D, n: t2 }];
        var Fs = [{ k: 'down', n: v }, { k: 'up', n: v + w }, { k: 'downD', t: t, n: v * t }, { k: 'upT', D: D, n: t2 + 1 }, { k: 'down', n: v - w }, { k: 'downD', t: t, n: (v - w) * t }];
        var good = H.shuffle(T, r).slice(0, H.ri(r, 2, 3)), cand = H.shuffle(good.concat(H.shuffle(Fs, r).slice(0, 5 - good.length)), r);
        var show = function (x) { return x.k === 'down' ? '順水每小時前進 ' + x.n + ' 公里' : x.k === 'up' ? '逆水每小時前進 ' + x.n + ' 公里' : x.k === 'downD' ? '順水航行 ' + x.t + ' 小時，可以走 ' + x.n + ' 公里' : '逆水航行 ' + x.D + ' 公里，要 ' + x.n + ' 小時'; };
        return H.Q('一艘船在靜水中每小時航行 ' + v + ' 公里，河水每小時流 ' + w + ' 公里。下面哪些說法是對的？<b>全部選出來。</b>',
          '順水每小時 ' + v + '＋' + w + '＝' + (v + w) + ' 公里，逆水每小時 ' + v + '－' + w + '＝' + (v - w) + ' 公里；順水 ' + t + ' 小時走 ' + (v + w) * t + ' 公里，逆水 ' + D + ' 公里要 ' + D + '÷' + (v - w) + '＝' + t2 + ' 小時。',
          H.set(cand, function (x) { return good.indexOf(x) >= 0; }, show), { v: v, w: w, cand: cand });
      } }
    ]
  });
})(typeof window !== 'undefined' ? window.MG : require('../grade.js'));
