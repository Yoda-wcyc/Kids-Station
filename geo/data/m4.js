/* 🌍 地理・地圖技能 4〈等高線與地形圖〉（2026-11-08）。格式見 geo/CONTRACT.md。
   國小範圍：等高線＝高度相同的點連成的線、同一條線一樣高、最裡面那圈是山頂、越密越陡越疏越緩、讀高度（每條差幾公尺）、
   分層設色（地形圖用顏色表示高低：綠低、黃中、褐高、藍是水）、從側面看山的樣子（陡的那一邊比較直）。
   不教山谷、山脊、鞍部、剖面圖繪製（國中地理）。
   示意圖：一座「西邊緩、東邊陡」的山（等高線西疏東密，N＝5 圈，最外圈 100 公尺、每圈多 100 公尺、山頂在最裡圈）；三座小山（圈數＝高度）。
   座標寬 500、高 360（側面圖那題高 420），北＝上。 */
(function () {
  'use strict';
  var CX = 300, CY = 180, N = 5;
  function t(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '" font-size="' + (o.fs || 14) + '" font-weight="800" fill="' + (o.c || '#263445') + '" stroke="#fff" stroke-width="4" paint-order="stroke">' + s + '</text>'; }
  // 第 i 圈（1＝最裡面）在角度 a（弧度，東＝0、北＝π/2）的半徑：西邊每圈 44、東邊每圈 16、南北 30
  function R(i, a) { return i * (30 + 14 * Math.cos(a - Math.PI)) * (1 + 0.05 * Math.sin(3 * a)); }
  function pt(i, a) { var r = R(i, a); return [Math.round(CX + r * Math.cos(a)), Math.round(CY - r * Math.sin(a))]; }
  function ring(i) { var p = []; for (var k = 0; k < 72; k++) { var q = pt(i, k * Math.PI / 36); p.push(q[0] + ' ' + q[1]); } return 'M' + p.join('L') + 'Z'; }
  var height = function (i, step) { return (N + 1 - i) * (step || 100); };
  var BAND = function (h) { return h < 200 ? '#bfe3a5' : h < 400 ? '#f4d79b' : '#d9a066'; };
  // 一座山：labels＝在西邊寫每圈的高度；color＝分層設色＋圖例；step＝每圈差幾公尺
  function hill(o) {
    o = o || {}; var out = ['<rect width="500" height="360" fill="' + (o.color ? '#e6f4d8' : '#fbfaf3') + '"/>'];
    for (var i = N; i >= 1; i--) out.push('<path d="' + ring(i) + '" fill="' + (o.color ? BAND(height(i)) : 'none') + '" stroke="#8a5a2b" stroke-width="2"/>');
    out.push('<text x="' + CX + '" y="' + (CY + 6) + '" text-anchor="middle" font-size="18">▲</text>');
    if (o.labels) for (var j = 1; j <= N; j++) { var p = pt(j, Math.PI); out.push(t(p[0], p[1] - 4, height(j, o.step), { fs: 12, c: '#8a5a2b' })); }
    if (o.color) out.push('<rect x="404" y="250" width="90" height="102" rx="8" fill="#fff" stroke="#c9b48a"/>' + [['#d9a066', '400 以上'], ['#f4d79b', '200～400'], ['#bfe3a5', '200 以下']].map(function (c, k) { return '<rect x="412" y="' + (258 + k * 30) + '" width="20" height="20" fill="' + c[0] + '" stroke="#8a5a2b"/>' + t(462, 273 + k * 30, c[1], { fs: 12 }); }).join(''));
    out.push('<g transform="translate(40,44)"><circle r="20" fill="#fff" stroke="#888" stroke-width="2"/><path d="M0 -15 L6 5 L0 1 L-6 5Z" fill="#e5484d"/>' + t(0, -24, '北') + '</g>');
    if (o.unit !== false) out.push(t(250, 352, o.note || '每條等高線差 ' + (o.step || 100) + ' 公尺', { fs: 13, c: '#6b5a3a' }));
    return { svg: out.join(''), w: 500, h: 360, alt: '等高線地圖' };
  }
  function P(id, n, i, a) { var p = pt(i, a); return { id: id, n: n, x: p[0], y: p[1] }; }
  var PEAK = { id: 'peak', n: '山頂', x: CX, y: CY }, WEST = P('w', '西邊的山坡', 3, Math.PI), EAST = P('e', '東邊的山坡', 5, 0), NORTH = P('nn', '北邊的山腳', 5, Math.PI / 2);
  var BAND_P = [P('low', '綠色的地方', 4.6, -Math.PI / 2), P('mid', '黃色的地方', 3, Math.PI), P('high', '褐色的地方', 1.2, Math.PI / 2)];
  // 三座小山：甲（3 圈）、乙（5 圈，最高）、丙（2 圈，最矮），每圈差 100 公尺
  var HILLS = [['a', '甲', 110, 210, 3, 1.25, 0.9, 0.5], ['b', '乙', 270, 140, 5, 1, 1, 1.7], ['c', '丙', 420, 260, 2, 1, 1.2, 2.9]];
  function hring(h, i) { var p = []; for (var k = 0; k < 48; k++) { var a = k * Math.PI / 24, r = i * 18 * (1 + 0.12 * Math.sin(2 * a + h[7])); p.push(Math.round(h[2] + r * h[5] * Math.cos(a)) + ' ' + Math.round(h[3] - r * h[6] * Math.sin(a))); } return 'M' + p.join('L') + 'Z'; }
  function hills(names) {
    var out = ['<rect width="500" height="360" fill="#fbfaf3"/>'];
    HILLS.forEach(function (h) { for (var i = h[4]; i >= 1; i--) out.push('<path d="' + hring(h, i) + '" fill="none" stroke="#8a5a2b" stroke-width="2"/>'); if (names !== false) out.push(t(h[2], h[3] + h[4] * 18 * h[6] + 22, h[1] + '山', { fs: 15 })); });
    out.push(t(250, 350, '每條等高線差 100 公尺', { fs: 13, c: '#6b5a3a' }));
    return { svg: out.join(''), w: 500, h: 360, alt: '三座山的等高線' };
  }
  var hillPins = HILLS.map(function (h) { return { id: h[0], n: h[1] + '山', x: h[2], y: h[3] }; });
  function flag(x, y) { return 'M' + (x - 2) + ' ' + (y - 26) + 'L' + (x + 2) + ' ' + (y - 26) + 'L' + (x + 2) + ' ' + (y - 18) + 'L' + (x + 22) + ' ' + (y - 12) + 'L' + (x + 2) + ' ' + (y - 6) + 'L' + (x + 2) + ' ' + (y + 4) + 'L' + (x - 2) + ' ' + (y + 4) + 'Z'; }
  // 側面：一座山的剖面輪廓（steep＝陡的那一邊 'r'／'l'／'='）
  function prof(x0, y0, w, h, steep) { var px = x0 + w * (steep === 'r' ? 0.72 : steep === 'l' ? 0.28 : 0.5); return 'M' + x0 + ' ' + y0 + 'Q' + (steep === 'r' ? x0 + w * 0.45 : x0 + w * 0.2) + ' ' + (y0 - h * 0.25) + ' ' + px + ' ' + (y0 - h) + 'Q' + (steep === 'l' ? x0 + w * 0.55 : x0 + w * 0.8) + ' ' + (y0 - h * 0.25) + ' ' + (x0 + w) + ' ' + y0 + 'Z'; }
  var side = (function () {
    var out = ['<rect width="500" height="420" fill="#fbfaf3"/>', '<g transform="translate(70,-30) scale(0.55)">'];
    for (var i = N; i >= 1; i--) out.push('<path d="' + ring(i) + '" fill="none" stroke="#8a5a2b" stroke-width="3.5"/>');
    out.push('</g>', t(250, 214, '↑ 從南邊往北看這座山（北在上）', { fs: 13, c: '#6b5a3a' }));
    [['A', 90, 'r'], ['B', 250, 'l'], ['C', 410, '=']].forEach(function (p) { out.push('<rect x="' + (p[1] - 72) + '" y="232" width="144" height="110" rx="10" fill="#fff" stroke="#c9b48a"/><path d="' + prof(p[1] - 62, 326, 124, 76, p[2]) + '" fill="#d9a066" stroke="#8a5a2b" stroke-width="2"/>' + t(p[1] - 56, 252, p[0], { fs: 15 }) + t(p[1] - 52, 340, '西', { fs: 11 }) + t(p[1] + 52, 340, '東', { fs: 11 })); });
    return { svg: out.join(''), w: 500, h: 420, alt: '等高線和三種側面' };
  })();
  var sidePins = [{ id: 'A', n: 'A', x: 90, y: 384 }, { id: 'B', n: 'B', x: 250, y: 384 }, { id: 'C', n: 'C', x: 410, y: 384 }];
  // 一座大的側面（西緩東陡），標陡坡、緩坡、山頂
  var big = { svg: '<rect width="500" height="360" fill="#eaf5ff"/><path d="' + prof(30, 320, 440, 250, 'r') + '" fill="#d9a066" stroke="#8a5a2b" stroke-width="3"/>' + t(40, 345, '西', { fs: 14 }) + t(460, 345, '東', { fs: 14 }), w: 500, h: 360, alt: '山的側面' };
  var bigPins = [{ id: 'top', n: '山頂', x: 347, y: 58 }, { id: 'gentle', n: '西邊的山坡', x: 150, y: 250 }, { id: 'steep', n: '東邊的山坡', x: 430, y: 230 }];
  // 圖例：三種顏色（拖「低、中、高」）
  var legend = { svg: '<rect width="500" height="360" fill="#fbfaf3"/>' + [['#d9a066', 70], ['#f4d79b', 180], ['#bfe3a5', 290]].map(function (c) { return '<rect x="150" y="' + (c[1] - 28) + '" width="200" height="56" rx="10" fill="' + c[0] + '" stroke="#8a5a2b" stroke-width="2"/>'; }).join('') + t(250, 22, '地形圖的圖例（顏色代表高度）', { fs: 15 }), w: 500, h: 360, alt: '分層設色圖例' };
  var legPins = [{ id: 'hi', n: '褐色', x: 400, y: 70 }, { id: 'md', n: '黃色', x: 400, y: 180 }, { id: 'lo', n: '綠色', x: 400, y: 290 }];
  // 兩座山：左邊等高線疏、右邊密
  function twoHills() {
    var out = ['<rect width="500" height="360" fill="#fbfaf3"/>'];
    for (var i = 4; i >= 1; i--) { out.push('<ellipse cx="130" cy="170" rx="' + (i * 26) + '" ry="' + (i * 32) + '" fill="none" stroke="#8a5a2b" stroke-width="2"/>'); out.push('<ellipse cx="370" cy="170" rx="' + (i * 13) + '" ry="' + (i * 16) + '" fill="none" stroke="#8a5a2b" stroke-width="2"/>'); }
    return { svg: out.join('') + t(130, 330, '甲山', { fs: 15 }) + t(370, 330, '乙山', { fs: 15 }) + t(250, 352, '兩座山一樣高（都是 4 圈）', { fs: 13, c: '#6b5a3a' }), w: 500, h: 360, alt: '兩座山' };
  }
  var twoPins = [{ id: 'a', n: '甲山', x: 130, y: 170 }, { id: 'b', n: '乙山', x: 370, y: 170 }];

  Geo.add({
    id: 'm4',
    learn: [
      { t: '等高線', p: '把高度一樣的地點連起來畫成的線，叫等高線。同一條線上每一點都一樣高。一圈一圈越往裡面越高，最裡面那一圈的中間就是山頂。', fig: hill({ labels: true }) },
      { t: '疏密和陡緩', p: '等高線越密（擠在一起），表示走一小段就高很多，坡度陡；等高線越疏（離得遠），坡度就平緩。這座山東邊密、西邊疏，所以東邊陡、西邊緩。' },
      { t: '地形圖的顏色', p: '地形圖常用顏色表示高低，叫分層設色：綠色比較低、黃色中間、褐色比較高，藍色是海、湖或河。看圖例就知道每種顏色是多高。', fig: hill({ color: true, unit: false }) },
      { t: '從側面看山', p: '從側面看一座山，等高線密的那一邊比較陡、像牆壁；等高線疏的那一邊比較緩、像溜滑梯。', fig: big }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 'm4-p01', type: 'mc', q: '等高線是把什麼連起來的線？', opts: ['高度相同的地點', '距離相同的地點', '溫度相同的地點', '人口相同的地點'], a: 0, why: '等高線連的是一樣高的地點，同一條線上高度都一樣。' },
      { id: 'm4-p02', type: 'tap', q: '一圈一圈的等高線。點出這座山的山頂。', fig: hill(), pins: [PEAK, WEST, EAST, NORTH], a: 'peak', why: '越往裡面越高，最裡面那一圈的中間就是山頂（▲）。' },
      { id: 'm4-p03', type: 'mc', q: '最外圈是 100 公尺、每圈多 100 公尺。甲點在第幾公尺的線上？', fig: (function () { var f = hill(); f.svg += '<circle cx="' + pt(3, Math.PI / 2)[0] + '" cy="' + pt(3, Math.PI / 2)[1] + '" r="15" fill="#8350d6" stroke="#fff" stroke-width="3"/>' + t(pt(3, Math.PI / 2)[0], pt(3, Math.PI / 2)[1] + 6, '甲', { fs: 15, c: '#fff' }).replace('stroke="#fff" stroke-width="4"', 'stroke="none"'); return f; })(), opts: ['300 公尺', '100 公尺', '500 公尺', '0 公尺'], a: 0, why: '從最外圈往裡數：100、200、300…甲在第 3 圈，是 300 公尺。' },
      { id: 'm4-p04', type: 'drag', q: '最外圈 100 公尺、每圈多 100 公尺。把高度拖到對的等高線上。', fig: hill(), pins: [P('h100', '最外圈', 5, Math.PI), P('h300', '第 3 圈', 3, Math.PI + 0.45), P('h500', '最裡圈', 1, Math.PI)], items: [{ t: '100 公尺', to: 'h100' }, { t: '300 公尺', to: 'h300' }, { t: '500 公尺', to: 'h500' }], why: '越外面越低、越裡面越高：最外圈 100、中間 300、最裡圈 500 公尺。' },
      { id: 'm4-p05', type: 'mc', q: '等高線越密的地方，坡度怎麼樣？', opts: ['比較陡', '比較平緩', '一樣平', '沒有關係'], a: 0, why: '線越密，走一小段就高很多，所以比較陡。' },
      { id: 'm4-p06', type: 'tap', q: '這座山哪一邊的山坡比較陡？點那一邊的圓圈。', fig: hill(), pins: [WEST, EAST], a: 'e', why: '東邊的等高線擠在一起（密），坡度比較陡；西邊比較疏、比較緩。' },
      { id: 'm4-p07', type: 'puzzle', q: '山頂在最裡面那一圈。把三座山的山頂（最小的一圈）拼回去。', fig: hills(), pieces: HILLS.map(function (h) { return { id: h[0], t: h[1] + '山山頂', shape: { d: hring(h, 1) } }; }), why: '每座山最裡面、最小的那一圈就是山頂的位置。' },
      { id: 'm4-p08', type: 'mc', q: '地形圖上的顏色，通常代表什麼？', opts: ['地面的高低', '那裡的天氣', '住了多少人', '種了什麼作物'], a: 0, why: '地形圖用顏色表示高低（分層設色），看圖例就知道多高。' },
      { id: 'm4-p09', type: 'tap', q: '看右下角的圖例，點出最低（綠色）的地方。', fig: hill({ color: true, unit: false }), pins: BAND_P, a: 'low', why: '綠色代表 200 公尺以下，是最低的地方，在山的外圍。' },
      { id: 'm4-p10', type: 'mc', q: '同一條等高線上的每一點，高度怎麼樣？', opts: ['都一樣高', '越往北越高', '越往東越低', '都不一樣'], a: 0, why: '等高線就是把一樣高的點連起來，所以同一條線上都一樣高。' },
      // ---- 第 2 組 ----
      { id: 'm4-p11', type: 'tap', q: '每一圈差 100 公尺。哪一座山最高？點它的山頂。', fig: hills(), pins: hillPins, a: 'b', why: '乙山有 5 圈、甲山 3 圈、丙山 2 圈，圈數越多越高，乙山最高。' },
      { id: 'm4-p12', type: 'mc', q: '最外圈 100 公尺、每圈多 100 公尺、一共 5 圈。山頂大約多高？', fig: hill(), opts: ['超過 500 公尺', '剛好 100 公尺', '不到 300 公尺', '超過 1000 公尺'], a: 0, why: '第 5 圈（最裡圈）是 500 公尺，山頂在它裡面，所以比 500 公尺高一點。' },
      { id: 'm4-p13', type: 'drag', q: '把「山頂」「緩坡」「陡坡」拖到地圖上對的地方。', fig: hill(), pins: [PEAK, WEST, EAST], items: [{ t: '山頂', to: 'peak' }, { t: '緩坡', to: 'w' }, { t: '陡坡', to: 'e' }], why: '最裡面是山頂；西邊等高線疏是緩坡；東邊等高線密是陡坡。' },
      { id: 'm4-p14', type: 'mc', q: '想從山腳爬到山頂，走哪一邊比較不累（比較不陡）？', fig: hill(), opts: ['從西邊（等高線疏）上山', '從東邊（等高線密）上山', '兩邊一樣陡'], a: 0, why: '等高線疏的地方坡度緩，比較好爬；西邊比較疏。' },
      { id: 'm4-p15', type: 'tap', q: '看圖例，點出黃色（200～400 公尺）的地方。', fig: hill({ color: true, unit: false }), pins: BAND_P, a: 'mid', why: '黃色代表 200～400 公尺，在山的半山腰。' },
      { id: 'm4-p16', type: 'mc', q: '等高線越稀疏（離得越遠）的地方，表示什麼？', opts: ['坡度比較平緩', '坡度比較陡峭', '那裡一定是海'], a: 0, why: '線離得遠，要走很遠才高一點，坡度平緩。' },
      { id: 'm4-p17', type: 'puzzle', outline: false, q: '每圈差 100 公尺。把「最高的山」「中間的山」「最矮的山」旗子插到山頂。', fig: hills(), pieces: [{ id: 'hi', t: '最高的山', shape: { d: flag(HILLS[1][2], HILLS[1][3]) } }, { id: 'md', t: '中間的山', shape: { d: flag(HILLS[0][2], HILLS[0][3]) } }, { id: 'lo', t: '最矮的山', shape: { d: flag(HILLS[2][2], HILLS[2][3]) } }], why: '圈數越多越高：乙山 5 圈最高、甲山 3 圈中間、丙山 2 圈最矮。' },
      { id: 'm4-p18', type: 'tap', q: '兩座山一樣高。哪一座山的山坡比較陡？點那座山。', fig: twoHills(), pins: twoPins, a: 'b', why: '一樣多圈，乙山的圈圈擠在一起（密），山坡比較陡。' },
      { id: 'm4-p19', type: 'mc', q: '地形圖上，藍色通常代表什麼？', opts: ['海洋或湖泊', '高高的山地', '平坦的平原', '人很多的城市'], a: 0, why: '地形圖上藍色表示水：海洋、湖泊、河流。' },
      { id: 'm4-p20', type: 'drag', q: '地形圖用顏色表示高低。把「低」「中」「高」拖到每種顏色旁邊。', fig: legend, pins: legPins, items: [{ t: '高', to: 'hi' }, { t: '中', to: 'md' }, { t: '低', to: 'lo' }], why: '一般地形圖：褐色最高、黃色中間、綠色最低。' },
      // ---- 第 3 組 ----
      { id: 'm4-p21', type: 'tap', q: '這座山東邊陡、西邊緩。從南邊往北看，它的側面是 A、B、C 哪一個？', fig: side, pins: sidePins, a: 'A', why: '面向北時東在右手邊。東邊陡，所以側面是右邊陡、左邊緩的 A。' },
      { id: 'm4-p22', type: 'mc', q: '每條等高線差 100 公尺。甲在 200 公尺的線上、乙在 400 公尺的線上，乙比甲高多少？', opts: ['200 公尺', '400 公尺', '600 公尺', '100 公尺'], a: 0, why: '400－200＝200 公尺。' },
      { id: 'm4-p23', type: 'drag', q: '這次每圈只差 50 公尺，最外圈是 50 公尺。把高度拖到對的線上。', fig: hill({ step: 50 }), pins: [P('h50', '最外圈', 5, Math.PI), P('h150', '第 3 圈', 3, Math.PI + 0.45), P('h250', '最裡圈', 1, Math.PI)], items: [{ t: '50 公尺', to: 'h50' }, { t: '150 公尺', to: 'h150' }, { t: '250 公尺', to: 'h250' }], why: '從外往裡每圈多 50：50、100、150、200、250 公尺。' },
      { id: 'm4-p24', type: 'mc', q: '想在山上找比較平的地方蓋房子，要找等高線怎樣的地方？', opts: ['等高線比較稀疏的地方', '等高線比較密集的地方', '等高線最裡面那一圈'], a: 0, why: '等高線稀疏表示坡度平緩，比較適合蓋房子。' },
      { id: 'm4-p25', type: 'tap', q: '每圈差 100 公尺。哪一座山最矮？點它的山頂。', fig: hills(), pins: hillPins, a: 'c', why: '丙山只有 2 圈，是三座山裡最矮的。' },
      { id: 'm4-p26', type: 'mc', q: '爬山時沿著同一條等高線一直走，會怎麼樣？', opts: ['高度不會改變', '一直往上爬', '一直往下走', '一定會走到山頂'], a: 0, why: '同一條等高線上都一樣高，沿著它走，高度不變。' },
      { id: 'm4-p27', type: 'puzzle', q: '把三座山的山頂（最小的一圈）拼回去，看形狀和位置。', fig: hills(false), names: false, pieces: HILLS.map(function (h) { return { id: h[0], t: h[1] + '山山頂', shape: { d: hring(h, 1) } }; }), why: '每座山最裡面那一圈都有自己的形狀，照形狀放回去。' },
      { id: 'm4-p28', type: 'tap', q: '看圖例，點出高度超過 400 公尺的地方。', fig: hill({ color: true, unit: false }), pins: BAND_P, a: 'high', why: '褐色代表 400 公尺以上，在靠近山頂的地方。' },
      { id: 'm4-p29', type: 'drag', q: '這是一座山的側面。把「山頂」「緩坡」「陡坡」放到對的地方。', fig: big, pins: bigPins, items: [{ t: '山頂', to: 'top' }, { t: '緩坡', to: 'gentle' }, { t: '陡坡', to: 'steep' }], why: '最高的尖端是山頂；西邊斜斜的是緩坡；東邊很直的是陡坡。' },
      { id: 'm4-p30', type: 'mc', q: '一圈一圈、越往裡面越小的等高線，最中間通常是什麼？', opts: ['山頂', '山腳', '海邊', '平原'], a: 0, why: '越裡面越高，最中間就是山頂。' }
    ],
    test: [
      { id: 'm4-t01', type: 'mc', q: '等高線越密，坡度會怎樣？', opts: ['越陡', '越平緩', '不一定', '跟密不密無關'], a: 0, why: '線越密，坡度越陡。' },
      { id: 'm4-t02', type: 'tap', q: '點出這座山的山頂。', fig: hill(), pins: [NORTH, EAST, PEAK, WEST], a: 'peak', why: '最裡面那一圈的中間是山頂。' },
      { id: 'm4-t03', type: 'drag', q: '最外圈 200 公尺、每圈多 200 公尺。把高度拖到對的線上。', fig: hill({ step: 200 }), pins: [P('h200', '最外圈', 5, Math.PI), P('h600', '第 3 圈', 3, Math.PI + 0.45), P('h1000', '最裡圈', 1, Math.PI)], items: [{ t: '200 公尺', to: 'h200' }, { t: '600 公尺', to: 'h600' }, { t: '1000 公尺', to: 'h1000' }], why: '從外往裡每圈多 200：200、400、600、800、1000 公尺。' },
      { id: 'm4-t04', type: 'tap', q: '這座山哪一邊的山坡比較平緩？點那一邊的圓圈。', fig: hill(), pins: [EAST, WEST], a: 'w', why: '西邊的等高線比較疏，坡度平緩。' },
      { id: 'm4-t05', type: 'mc', q: '每條等高線差 100 公尺。甲在 100 公尺的線上、乙在 500 公尺的線上，乙比甲高多少？', opts: ['400 公尺', '500 公尺', '600 公尺', '100 公尺'], a: 0, why: '500－100＝400 公尺。' },
      { id: 'm4-t06', type: 'puzzle', outline: false, q: '每圈差 100 公尺。把「最高的山」「中間的山」「最矮的山」旗子插到山頂。', fig: hills(), pieces: [{ id: 'hi', t: '最高的山', shape: { d: flag(HILLS[1][2], HILLS[1][3]) } }, { id: 'md', t: '中間的山', shape: { d: flag(HILLS[0][2], HILLS[0][3]) } }, { id: 'lo', t: '最矮的山', shape: { d: flag(HILLS[2][2], HILLS[2][3]) } }], why: '乙山 5 圈最高、甲山 3 圈、丙山 2 圈最矮。' },
      { id: 'm4-t07', type: 'tap', q: '每一圈差 100 公尺。哪一座山最高？點它的山頂。', fig: hills(), pins: hillPins, a: 'b', why: '乙山的圈數最多（5 圈），最高。' },
      { id: 'm4-t08', type: 'mc', q: '地形圖上的綠色，通常代表什麼？', opts: ['比較低的地方', '很高的地方', '水很深的地方', '下雨的地方'], a: 0, why: '分層設色裡，綠色通常表示地勢比較低的地方。' },
      { id: 'm4-t09', type: 'drag', q: '把「山頂」「緩坡」「陡坡」拖到地圖上對的地方。', fig: hill(), pins: [PEAK, WEST, EAST], items: [{ t: '山頂', to: 'peak' }, { t: '緩坡', to: 'w' }, { t: '陡坡', to: 'e' }], why: '最裡面是山頂；等高線疏是緩坡、密是陡坡。' },
      { id: 'm4-t10', type: 'tap', q: '看圖例，點出綠色（200 公尺以下）的地方。', fig: hill({ color: true, unit: false }), pins: BAND_P, a: 'low', why: '綠色是最低的一層，在山的外圍。' }
    ]
  });
})();
