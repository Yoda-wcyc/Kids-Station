/* 🌍 地理・地圖技能 5〈圖例與地圖種類〉（2026-11-08）。格式見 geo/CONTRACT.md。
   內容：地圖的要素（圖名、方位、比例尺、圖例）；看圖例找符號（每張圖的圖例可能不同，這裡的符號是本單元自己定的，題目都附圖例）；
   一般地圖（什麼都畫）和主題地圖（只畫一個主題：人口分布、雨量分布、交通路線、觀光導覽、地形、行政區域）；依用途選地圖；電子地圖可以放大縮小、找路。
   臺灣的機場、港口位置見 places.js（桃園、高雄國際機場；基隆、臺中、花蓮港）。示意的主題地圖（人口點、雨量深淺、地形顏色）只表示「這種圖長什麼樣子」，不是真實資料。 */
(function () {
  'use strict';
  function t(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '" font-size="' + (o.fs || 14) + '" font-weight="800" fill="' + (o.c || '#263445') + '" stroke="#fff" stroke-width="4" paint-order="stroke">' + s + '</text>'; }
  // ---- 符號（小鎮地圖和圖例共用）----
  var SYM = {
    school: function (x, y) { return '<path d="M' + (x - 9) + ' ' + (y + 12) + 'V' + (y - 14) + 'h20l-6 6l6 6h-20" fill="#e5484d" stroke="#7a1d1d" stroke-width="2"/>'; },
    hosp: function (x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="13" fill="#fff" stroke="#e5484d" stroke-width="2.5"/><path d="M' + (x - 3) + ' ' + (y - 8) + 'h6v5h5v6h-5v5h-6v-5h-5v-6h5Z" fill="#e5484d"/>'; },
    park: function (x, y) { return '<circle cx="' + x + '" cy="' + (y - 4) + '" r="11" fill="#5d9e4a"/><rect x="' + (x - 2) + '" y="' + (y + 5) + '" width="4" height="9" fill="#7a4d24"/>'; },
    stn: function (x, y) { return '<rect x="' + (x - 13) + '" y="' + (y - 9) + '" width="26" height="18" fill="#263445"/><rect x="' + (x - 9) + '" y="' + (y - 5) + '" width="18" height="6" fill="#fff"/>'; },
    mt: function (x, y) { return '<path d="M' + (x - 13) + ' ' + (y + 10) + 'L' + x + ' ' + (y - 12) + 'L' + (x + 13) + ' ' + (y + 10) + 'Z" fill="#8a5a2b"/>'; },
    river: function (x, y) { return '<path d="M' + (x - 16) + ' ' + y + 'q8 -8 16 0t16 0" fill="none" stroke="#3b8fd9" stroke-width="4"/>'; },
    rail: function (x, y) { return '<line x1="' + (x - 16) + '" y1="' + y + '" x2="' + (x + 16) + '" y2="' + y + '" stroke="#263445" stroke-width="6"/><line x1="' + (x - 16) + '" y1="' + y + '" x2="' + (x + 16) + '" y2="' + y + '" stroke="#fff" stroke-width="3" stroke-dasharray="5 5"/>'; },
    road: function (x, y) { return '<line x1="' + (x - 16) + '" y1="' + y + '" x2="' + (x + 16) + '" y2="' + y + '" stroke="#bdb5a3" stroke-width="7"/>'; }
  };
  var NAME = { school: '學校', hosp: '醫院', park: '公園', stn: '火車站', mt: '山峰', river: '河流', rail: '鐵路', road: '道路' };
  // 小鎮（左邊 0～360）：地物位置
  var AT = { school: [70, 80], hosp: [260, 70], park: [80, 270], stn: [270, 230], mt: [170, 160] };
  // legend：圖例要列的符號；blank＝圖例只畫符號不寫名稱
  function town(legend, blank) {
    var o = ['<rect width="500" height="360" fill="#f6faf1"/>'];
    o.push('<path d="M140 0 Q120 90 210 130 T200 360" fill="none" stroke="#3b8fd9" stroke-width="7"/>');
    o.push('<line x1="0" y1="200" x2="360" y2="200" stroke="#bdb5a3" stroke-width="10"/><line x1="40" y1="0" x2="40" y2="360" stroke="#bdb5a3" stroke-width="10"/>');
    o.push('<line x1="0" y1="250" x2="360" y2="250" stroke="#263445" stroke-width="7"/><line x1="0" y1="250" x2="360" y2="250" stroke="#fff" stroke-width="3.5" stroke-dasharray="7 7"/>');
    Object.keys(AT).forEach(function (k) { o.push(SYM[k](AT[k][0], AT[k][1])); });
    var n = legend.length, gap = n > 4 ? 46 : 75;
    o.push('<rect x="368" y="6" width="128" height="' + (gap * n + 22) + '" rx="10" fill="#fff" stroke="#c9b48a" stroke-width="2"/>' + t(432, 24, '圖例', { fs: 13 }));
    legend.forEach(function (k, i) { var y = 48 + i * gap; o.push(SYM[k](392, y) + (blank ? '' : t(452, y + 5, NAME[k], { fs: 13 }))); });
    return { svg: o.join(''), w: 500, h: 360, alt: '有圖例的小鎮地圖' };
  }
  var L6 = ['school', 'hosp', 'park', 'stn', 'mt', 'river'], tAll = town(L6);
  function tp(k) { return { id: k, n: NAME[k], x: AT[k][0], y: AT[k][1] }; }
  function legPins(keys) { return keys.map(function (k, i) { return { id: k, n: '圖例第 ' + (i + 1) + ' 個', x: 452, y: 48 + i * 75 }; }); }
  // ---- 地圖的要素（拼圖：圖名、指北針、比例尺、圖例放回版面）----
  function rect(x, y, w, h) { return 'M' + x + ' ' + y + 'L' + (x + w) + ' ' + y + 'L' + (x + w) + ' ' + (y + h) + 'L' + x + ' ' + (y + h) + 'Z'; }
  function oct(x, y, r) { var p = []; for (var k = 0; k < 8; k++) { var a = (k + 0.5) * Math.PI / 4; p.push(Math.round(x + r * Math.cos(a)) + ' ' + Math.round(y + r * Math.sin(a))); } return 'M' + p.join('L') + 'Z'; }
  function layout(v) {   // v＝0／1 兩種版面
    var E = v ? { title: rect(150, 300, 200, 44), north: oct(60, 60, 30), scale: rect(320, 40, 150, 22), legend: rect(30, 150, 90, 130) } : { title: rect(150, 14, 200, 44), north: oct(440, 60, 30), scale: rect(30, 310, 150, 22), legend: rect(390, 180, 90, 150) };
    var o = '<rect width="500" height="360" fill="#fbfaf3"/><path d="' + Geo.shapePath({ tw: 'main' }, Geo.view({ map: 'tw' })) + '" transform="translate(' + (v ? 150 : 110) + ',70) scale(0.42)" fill="#d8ecc0" stroke="#5d8a3a" stroke-width="3"/>';
    return { fig: { svg: o, w: 500, h: 360, alt: '地圖版面' }, pieces: [{ id: 'title', t: '圖名', shape: { d: E.title } }, { id: 'north', t: '指北針', shape: { d: E.north } }, { id: 'scale', t: '比例尺', shape: { d: E.scale } }, { id: 'legend', t: '圖例', shape: { d: E.legend } }] };
  }
  var LAY0 = layout(0), LAY1 = layout(1);
  // ---- 符號放到對的地方（outline:false）----
  var place3 = { svg: '<rect width="500" height="360" fill="#f6faf1"/><path d="M380 0 Q350 180 400 360 L500 360 L500 0Z" fill="#cfe9fb"/>' + t(450, 200, '海', { fs: 16, c: '#24527a' }) +
      '<line x1="0" y1="90" x2="380" y2="90" stroke="#263445" stroke-width="7"/><line x1="0" y1="90" x2="380" y2="90" stroke="#fff" stroke-width="3.5" stroke-dasharray="7 7"/>' + t(60, 76, '鐵路', { fs: 13 }) +
      [3, 2, 1].map(function (i) { return '<ellipse cx="140" cy="250" rx="' + i * 34 + '" ry="' + i * 24 + '" fill="none" stroke="#8a5a2b" stroke-width="2"/>'; }).join('') + t(140, 345, '等高線（山）', { fs: 13 }), w: 500, h: 360, alt: '鐵路、山、海' };
  function anchor(x, y) { return 'M' + (x - 3) + ' ' + (y - 16) + 'L' + (x + 3) + ' ' + (y - 16) + 'L' + (x + 3) + ' ' + (y + 6) + 'L' + (x + 12) + ' ' + (y - 2) + 'L' + (x + 14) + ' ' + (y + 4) + 'L' + x + ' ' + (y + 16) + 'L' + (x - 14) + ' ' + (y + 4) + 'L' + (x - 12) + ' ' + (y - 2) + 'L' + (x - 3) + ' ' + (y + 6) + 'Z'; }
  var P3 = [{ id: 'stn', t: '火車站', shape: { d: rect(235, 78, 30, 24) } }, { id: 'mt', t: '山峰', shape: { d: 'M126 262L140 238L154 262Z' } }, { id: 'port', t: '港口', shape: { d: anchor(445, 300) } }];
  // ---- 臺灣地圖上的機場、港口符號＋圖例 ----
  var twV = Geo.view({ map: 'tw' }), P = GeoPlaces;
  function at(id) { return twV.P(P[id].lon, P[id].lat); }
  var twSym = (function () {
    var o = '';
    ['tpeAirport', 'khhAirport'].forEach(function (id) { var p = at(id); o += '<text x="' + p[0] + '" y="' + (p[1] + 8) + '" text-anchor="middle" font-size="22" fill="#263445" stroke="#fff" stroke-width="3" paint-order="stroke">✈</text>'; });
    ['keelungPort', 'taichungPort', 'hualienPort'].forEach(function (id) { var p = at(id); o += '<text x="' + p[0] + '" y="' + (p[1] + 8) + '" text-anchor="middle" font-size="22" fill="#24527a" stroke="#fff" stroke-width="3" paint-order="stroke">⚓</text>'; });
    var y = twV.h - 90;
    return o + '<rect x="10" y="' + y + '" width="120" height="74" rx="10" fill="#fff" stroke="#c9b48a" stroke-width="2"/>' + t(70, y + 18, '圖例', { fs: 13 }) + '<text x="28" y="' + (y + 44) + '" font-size="18">✈</text>' + t(80, y + 42, '機場', { fs: 13 }) + '<text x="28" y="' + (y + 66) + '" font-size="18">⚓</text>' + t(80, y + 64, '港口', { fs: 13 });
  })();
  var twMap = { map: 'tw', svg: twSym };
  // ---- 各種主題地圖（小圖，示意）----
  var main = Geo.shapePath({ tw: 'main' }, twV);
  function isle(x, y, inner, id) {   // 在 (x,y) 畫一個縮小的臺灣本島；inner＝裁在島裡面的東西
    return '<defs><clipPath id="' + id + '"><path d="' + main + '"/></clipPath></defs><g transform="translate(' + x + ',' + y + ') scale(0.3)"><path d="' + main + '" fill="#f4f1e8" stroke="#5d8a3a" stroke-width="5"/><g clip-path="url(#' + id + ')">' + inner + '</g><path d="' + main + '" fill="none" stroke="#5d8a3a" stroke-width="5"/></g>';
  }
  function dots() { var o = '', P2 = [[at('taipei'), 34], [at('taichung'), 22], [at('kaohsiung'), 26], [at('chiayi'), 12], [at('hualien'), 6]]; P2.forEach(function (c) { for (var k = 0; k < c[1]; k++) { var a = k * 2.4, r = 6 + (k % 7) * 7; o += '<circle cx="' + Math.round(c[0][0] + r * Math.cos(a)) + '" cy="' + Math.round(c[0][1] + r * Math.sin(a)) + '" r="6" fill="#c2410c"/>'; } }); return o; }
  var TH = {
    traffic: ['交通路線圖', function (id) { var a = at('taipei'), b = at('taichung'), c = at('kaohsiung'), d = at('hualien'); return isle(0, 0, '', id) + '<g transform="scale(0.3)"><polyline points="' + [a, b, c].map(function (p) { return p.join(','); }).join(' ') + '" fill="none" stroke="#e5484d" stroke-width="12"/><polyline points="' + [a, d].map(function (p) { return p.join(','); }).join(' ') + '" fill="none" stroke="#2b8fd6" stroke-width="12"/>' + [a, b, c, d].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="16" fill="#fff" stroke="#263445" stroke-width="6"/>'; }).join('') + '</g>'; }],
    pop: ['人口分布圖', function (id) { return isle(0, 0, dots(), id); }],
    terrain: ['地形圖', function (id) { return isle(0, 0, '<rect width="600" height="700" fill="#bfe3a5"/><ellipse cx="' + at('taichung')[0] + '" cy="' + at('chiayi')[1] + '" rx="70" ry="260" transform="rotate(18 ' + at('taichung')[0] + ' ' + at('chiayi')[1] + ')" fill="#f4d79b"/><ellipse cx="' + (at('taichung')[0] + 30) + '" cy="' + at('chiayi')[1] + '" rx="36" ry="200" transform="rotate(18 ' + (at('taichung')[0] + 30) + ' ' + at('chiayi')[1] + ')" fill="#d9a066"/>', id); }],
    rain: ['雨量分布圖', function (id) { return isle(0, 0, '<rect width="600" height="700" fill="#d6ebfb"/><circle cx="' + at('taipei')[0] + '" cy="' + at('taipei')[1] + '" r="90" fill="#5f9de8"/><circle cx="' + (at('taichung')[0] + 50) + '" cy="' + at('chiayi')[1] + '" r="80" fill="#8fbdf0"/>', id); }],
    admin: ['行政區域圖', function (id) { return isle(0, 0, ['#f6c3d9', '#c9b8e8', '#a8d5a2', '#f4d79b', '#9fd3d9'].map(function (c, k) { return '<rect x="0" y="' + (k * 130 - 20) + '" width="600" height="130" fill="' + c + '"/>'; }).join(''), id); }],
    tour: ['觀光導覽圖', function (id) { return isle(0, 0, '', id) + ['🎡', '🏯', '⛰️', '🏖️'].map(function (e, k) { var p = [at('taipei'), at('taichung'), at('hualien'), at('kaohsiung')][k]; return '<text x="' + Math.round(p[0] * 0.3) + '" y="' + Math.round(p[1] * 0.3 + 6) + '" text-anchor="middle" font-size="18">' + e + '</text>'; }).join(''); }]
  };
  var NTH = 0;
  function three(keys, names) {
    var o = ['<rect width="500" height="360" fill="#fbfaf6"/>'];
    keys.forEach(function (k, i) { var x = 15 + i * 160; NTH++; o.push('<rect x="' + x + '" y="10" width="150" height="250" rx="12" fill="#e9f5ff" stroke="#c9b48a" stroke-width="2"/><g transform="translate(' + (x - 5) + ',12)">' + TH[k][1]('th' + NTH) + '</g>' + (names ? t(x + 75, 284, TH[k][0], { fs: 14 }) : '')); });
    return { svg: o.join(''), w: 500, h: 360, alt: '三種主題地圖' };
  }
  function thPins(keys) { return keys.map(function (k, i) { return { id: k, n: ['左邊', '中間', '右邊'][i] + '的地圖', x: 90 + i * 160, y: 318 }; }); }

  Geo.add({
    id: 'm5',
    learn: [
      { t: '地圖的要素', p: '一張完整的地圖要有：圖名（這是什麼地圖）、方位（指北針）、比例尺（縮小了多少）和圖例（符號、顏色代表什麼）。', fig: LAY0.fig },
      { t: '看懂圖例', p: '地圖用簡單的符號和顏色代表真實的東西，像醫院、鐵路、河流。每張地圖的圖例可能不一樣，看地圖之前，先看圖例！', fig: tAll },
      { t: '一般地圖和主題地圖', p: '一般地圖把地形、河流、道路、城市都畫上去；主題地圖只畫一個主題，例如人口分布圖、雨量分布圖、交通路線圖、觀光導覽圖、地形圖、行政區域圖。', fig: three(['pop', 'traffic', 'terrain'], true) },
      { t: '選對地圖', p: '要搭車轉車看交通路線圖；想知道哪裡人多看人口分布圖；出去玩看觀光導覽圖。手機的電子地圖可以放大縮小、幫你找路，但一樣要會看方位和圖例。' }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 'm5-p01', type: 'mc', q: '地圖上說明「每個符號、顏色代表什麼」的地方叫什麼？', opts: ['圖例', '圖名', '比例尺', '指北針'], a: 0, why: '圖例告訴我們地圖上的符號和顏色代表什麼。' },
      { id: 'm5-p02', type: 'tap', q: '看右邊的圖例，點出地圖上的醫院。', fig: tAll, pins: [tp('school'), tp('hosp'), tp('park'), tp('stn')], a: 'hosp', why: '圖例裡白底紅十字是醫院，在地圖的上方中間。' },
      { id: 'm5-p03', type: 'drag', q: '圖例只畫了符號。把名稱拖到每個符號旁邊。', fig: town(['school', 'hosp', 'rail', 'river'], true), pins: legPins(['school', 'hosp', 'rail', 'river']), items: [{ t: '學校', to: 'school' }, { t: '醫院', to: 'hosp' }, { t: '鐵路', to: 'rail' }, { t: '河流', to: 'river' }], why: '紅旗是學校、紅十字是醫院、黑白相間的線是鐵路、藍色彎線是河流。' },
      { id: 'm5-p04', type: 'mc', q: '一張完整的地圖，通常要有哪四樣？', opts: ['圖名、方位、比例尺、圖例', '圖名、作者、出版社、價錢', '方位、天氣、人口、溫度計'], a: 0, why: '地圖的要素是圖名、方位、比例尺、圖例。' },
      { id: 'm5-p05', type: 'tap', q: '看圖例，點出地圖上的火車站。', fig: tAll, pins: [tp('school'), tp('hosp'), tp('park'), tp('stn')], a: 'stn', why: '黑色長方形是火車站，就在鐵路旁邊（右下方）。' },
      { id: 'm5-p06', type: 'mc', q: '想知道搭捷運要在哪裡轉車，最適合看哪一種地圖？', opts: ['交通路線圖', '人口分布圖', '雨量分布圖', '地形圖'], a: 0, why: '交通路線圖畫出路線和車站，看得出在哪裡轉車。' },
      { id: 'm5-p07', type: 'puzzle', q: '把地圖的四個要素放回版面上：圖名、指北針、比例尺、圖例。', fig: LAY0.fig, pieces: LAY0.pieces, why: '圖名寫在最上面、指北針在角落、比例尺是一條長條、圖例是一個框。' },
      { id: 'm5-p08', type: 'mc', q: '每一張地圖的圖例都一樣嗎？', opts: ['不一定，要先看那張圖的圖例', '全部一樣，背起來就好不用看', '只有世界地圖才有，別的沒有'], a: 0, why: '不同地圖可能用不同的符號，所以看地圖前要先看它的圖例。' },
      { id: 'm5-p09', type: 'drag', q: '這三張是不同的主題地圖。把地圖的名稱拖到每張圖下面。', fig: three(['traffic', 'pop', 'terrain']), pins: thPins(['traffic', 'pop', 'terrain']), items: [{ t: '交通路線圖', to: 'traffic' }, { t: '人口分布圖', to: 'pop' }, { t: '地形圖', to: 'terrain' }], why: '有路線和車站的是交通路線圖；點點代表人的是人口分布圖；用顏色表示高低的是地形圖。' },
      { id: 'm5-p10', type: 'tap', q: '看左下角的圖例，點出一個機場。', fig: twMap, pins: ['khhAirport', 'keelungPort', 'taichungPort', 'hualienPort'], a: 'khhAirport', why: '✈ 是機場。高雄國際機場在臺灣南部；⚓ 是港口。' },
      // ---- 第 2 組 ----
      { id: 'm5-p11', type: 'mc', q: '人口分布圖上，點點越密的地方表示什麼？', opts: ['住的人比較多', '住的人比較少', '那裡比較高', '那裡比較冷'], a: 0, why: '人口分布圖用點代表人，點越密，住的人越多。' },
      { id: 'm5-p12', type: 'tap', q: '哪一張是人口分布圖？點那張圖下面的圓圈。', fig: three(['rain', 'pop', 'admin']), pins: thPins(['rain', 'pop', 'admin']), a: 'pop', why: '用一顆一顆的點表示人住在哪裡的，是人口分布圖（中間那張）。' },
      { id: 'm5-p13', type: 'drag', q: '看右邊的圖例，把名稱拖到地圖上對的地方。', fig: tAll, pins: [tp('school'), tp('park'), tp('stn')], items: [{ t: '學校', to: 'school' }, { t: '公園', to: 'park' }, { t: '火車站', to: 'stn' }], why: '紅旗是學校（左上）、綠色的樹是公園（左下）、黑色長方形是火車站（右下）。' },
      { id: 'm5-p14', type: 'mc', q: '一般地圖和主題地圖，哪一句說得對？', opts: ['主題地圖只畫一種主題，像雨量', '一般地圖只畫一種主題，像雨量', '兩種地圖完全一樣'], a: 0, why: '主題地圖只表現一個主題；一般地圖把地形、道路、城市等都畫上去。' },
      { id: 'm5-p15', type: 'tap', q: '看圖例，點出地圖上的山峰。', fig: tAll, pins: [tp('mt'), tp('hosp'), tp('park'), tp('stn')], a: 'mt', why: '褐色三角形是山峰，在地圖中間、河流旁邊。' },
      { id: 'm5-p16', type: 'mc', q: '去遊樂區玩，想知道裡面有哪些設施，看哪一種地圖最方便？', opts: ['觀光導覽圖', '行政區域圖', '地形圖', '雨量分布圖'], a: 0, why: '觀光導覽圖會畫出景點、設施和步道。' },
      { id: 'm5-p17', type: 'puzzle', outline: false, q: '把符號放到最合理的地方：火車站在鐵路上、山峰在等高線中間、港口在海邊。', fig: place3, pieces: P3, why: '火車站要蓋在鐵路上，山峰在一圈圈等高線的中間，港口在海邊。' },
      { id: 'm5-p18', type: 'tap', q: '看圖例，點出在臺灣東部的港口。', fig: twMap, pins: ['hualienPort', 'taichungPort', 'keelungPort', 'khhAirport'], a: 'hualienPort', why: '⚓ 是港口。花蓮港在臺灣東部；臺中港在西部、基隆港在北部。' },
      { id: 'm5-p19', type: 'mc', q: '手機上的電子地圖，有什麼比紙本地圖方便的地方？', opts: ['可以放大縮小、幫你找路', '不會沒電、不用網路也能用', '不需要圖例和方位'], a: 0, why: '電子地圖可以放大縮小、搜尋、導航；但要有電，也一樣要看懂方位和圖例。' },
      { id: 'm5-p20', type: 'drag', q: '把地圖的名稱拖到每張圖下面。', fig: three(['rain', 'admin', 'tour']), pins: thPins(['rain', 'admin', 'tour']), items: [{ t: '雨量分布圖', to: 'rain' }, { t: '行政區域圖', to: 'admin' }, { t: '觀光導覽圖', to: 'tour' }], why: '藍色深淺表示雨量；不同顏色分成一塊一塊是行政區域；有景點圖示的是觀光導覽圖。' },
      // ---- 第 3 組 ----
      { id: 'm5-p21', type: 'tap', q: '哪一張是地形圖？點那張圖下面的圓圈。', fig: three(['rain', 'terrain', 'admin']), pins: thPins(['rain', 'terrain', 'admin']), a: 'terrain', why: '用綠、黃、褐色表示地勢高低的是地形圖：中間褐色是高山。' },
      { id: 'm5-p22', type: 'mc', q: '照這張地圖的圖例，彎彎的藍色線代表什麼？', fig: tAll, opts: ['河流', '鐵路', '道路', '山峰'], a: 0, why: '圖例裡藍色彎線是河流；黑白相間的線才是鐵路。' },
      { id: 'm5-p23', type: 'drag', q: '圖例只畫了符號。把名稱拖到每個符號旁邊。', fig: town(['park', 'mt', 'stn', 'road'], true), pins: legPins(['park', 'mt', 'stn', 'road']), items: [{ t: '公園', to: 'park' }, { t: '山峰', to: 'mt' }, { t: '火車站', to: 'stn' }, { t: '道路', to: 'road' }], why: '綠色的樹是公園、褐色三角形是山峰、黑色長方形是火車站、灰色粗線是道路。' },
      { id: 'm5-p24', type: 'mc', q: '一張地圖沒有比例尺，會有什麼問題？', opts: ['算不出實際距離有多遠', '找不到哪一邊是北方', '看不懂每個符號的意思'], a: 0, why: '比例尺用來換算實際距離；方位看指北針、符號看圖例。' },
      { id: 'm5-p25', type: 'tap', q: '看圖例，點出地圖上的公園。', fig: tAll, pins: [tp('school'), tp('mt'), tp('park'), tp('stn')], a: 'park', why: '綠色的樹是公園，在地圖左下方。' },
      { id: 'm5-p26', type: 'mc', q: '要把各地下雨多少畫在地圖上，應該畫成哪一種地圖？', opts: ['雨量分布圖', '人口分布圖', '交通路線圖', '觀光導覽圖'], a: 0, why: '雨量分布圖用顏色深淺表示各地雨量多少。' },
      { id: 'm5-p27', type: 'puzzle', q: '這張版面不一樣。把圖名、指北針、比例尺、圖例放回去。', fig: LAY1.fig, pieces: LAY1.pieces, why: '要素的位置不一定固定，看形狀：長方形大框是圖名、圓的是指北針、細長條是比例尺、高高的框是圖例。' },
      { id: 'm5-p28', type: 'tap', q: '看圖例，點出在臺灣北部的港口。', fig: twMap, pins: ['keelungPort', 'taichungPort', 'hualienPort', 'khhAirport'], a: 'keelungPort', why: '⚓ 是港口。基隆港在臺灣北部。' },
      { id: 'm5-p29', type: 'drag', q: '把地圖的名稱拖到每張圖下面。', fig: three(['terrain', 'traffic', 'pop']), pins: thPins(['terrain', 'traffic', 'pop']), items: [{ t: '地形圖', to: 'terrain' }, { t: '交通路線圖', to: 'traffic' }, { t: '人口分布圖', to: 'pop' }], why: '顏色表示高低是地形圖；路線和車站是交通路線圖；點點是人口分布圖。' },
      { id: 'm5-p30', type: 'mc', q: '一張地圖的圖名是「臺灣人口分布圖」，它主要告訴我們什麼？', opts: ['各地住的人多不多', '各地的山有多高', '火車要怎麼轉乘', '哪裡雨下得比較多'], a: 0, why: '先看圖名就知道這張地圖的主題：人口分布圖告訴我們哪裡人多、哪裡人少。' }
    ],
    test: [
      { id: 'm5-t01', type: 'mc', q: '地圖上的「圖例」是做什麼用的？', opts: ['說明每個符號的意思', '告訴你這張圖的名字', '告訴你哪邊是北方', '告訴你縮小了多少'], a: 0, why: '圖例說明符號和顏色；圖名是名字、指北針是方位、比例尺是縮小多少。' },
      { id: 'm5-t02', type: 'tap', q: '看圖例，點出地圖上的學校。', fig: tAll, pins: [tp('school'), tp('hosp'), tp('park'), tp('stn')], a: 'school', why: '紅旗是學校，在地圖左上方。' },
      { id: 'm5-t03', type: 'drag', q: '圖例只畫了符號。把名稱拖到每個符號旁邊。', fig: town(['school', 'hosp', 'rail', 'river'], true), pins: legPins(['school', 'hosp', 'rail', 'river']), items: [{ t: '學校', to: 'school' }, { t: '醫院', to: 'hosp' }, { t: '鐵路', to: 'rail' }, { t: '河流', to: 'river' }], why: '紅旗學校、紅十字醫院、黑白線鐵路、藍色彎線河流。' },
      { id: 'm5-t04', type: 'mc', q: '想知道臺灣哪裡住的人比較多，看哪一種地圖？', opts: ['人口分布圖', '交通路線圖', '地形圖', '觀光導覽圖'], a: 0, why: '人口分布圖表示各地人口多少。' },
      { id: 'm5-t05', type: 'tap', q: '哪一張是交通路線圖？點那張圖下面的圓圈。', fig: three(['pop', 'tour', 'traffic']), pins: thPins(['pop', 'tour', 'traffic']), a: 'traffic', why: '有路線、車站圓圈的是交通路線圖（右邊那張）。' },
      { id: 'm5-t06', type: 'puzzle', q: '把圖名、指北針、比例尺、圖例放回地圖版面。', fig: LAY0.fig, pieces: LAY0.pieces, why: '地圖的四個要素：圖名、方位（指北針）、比例尺、圖例。' },
      { id: 'm5-t07', type: 'drag', q: '把地圖的名稱拖到每張圖下面。', fig: three(['admin', 'rain', 'terrain']), pins: thPins(['admin', 'rain', 'terrain']), items: [{ t: '行政區域圖', to: 'admin' }, { t: '雨量分布圖', to: 'rain' }, { t: '地形圖', to: 'terrain' }], why: '分成一塊一塊的是行政區域圖；藍色深淺是雨量；綠黃褐是地形。' },
      { id: 'm5-t08', type: 'tap', q: '看左下角的圖例，點出一個港口。', fig: twMap, pins: ['taichungPort', 'khhAirport', 'tpeAirport'], a: 'taichungPort', why: '⚓ 是港口：臺中港。✈ 是機場。' },
      { id: 'm5-t09', type: 'mc', q: '地形圖、雨量分布圖、人口分布圖這些只畫一種主題的地圖，叫做什麼？', opts: ['主題地圖', '一般地圖', '電子地圖', '手繪地圖'], a: 0, why: '只表現一個主題的叫主題地圖。' },
      { id: 'm5-t10', type: 'tap', q: '看圖例，點出地圖上的山峰。', fig: tAll, pins: [tp('stn'), tp('park'), tp('mt'), tp('school')], a: 'mt', why: '褐色三角形是山峰。' }
    ]
  });
})();
