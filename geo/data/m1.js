/* 🌍 地理・地圖技能 1〈方位〉（2026-11-08）。格式見 geo/CONTRACT.md。
   內容：八方位、地圖上北下南左西右東、指北針轉向時怎麼找方位、用太陽（東升西落、影子在太陽的反方向）、相對位置、左右轉。
   示意圖（小鎮九宮格、方位盤、小島）都是這支自己畫的：座標寬 500、高 360，北＝上（除非題目轉了指北針）。
   查核：方位換算都用「把標準地圖（上北右東）整張轉過去」推，題目裡每一題的答案在檔案裡算過一次（north 參數）。
   臺灣的題：澎湖在本島西方、蘭嶼在本島東南方海上、彭佳嶼在本島東北方（地點經緯度見 geo/places.js）。 */
(function () {
  'use strict';
  var H = 360, CX = 250, CY = 180;
  // 小鎮九宮格：位置代碼 → 座標（北在上的時候）
  var XY = { nw: [130, 70], n: [250, 70], ne: [370, 70], w: [130, 180], c: [250, 180], e: [370, 180], sw: [130, 290], s: [250, 290], se: [370, 290] };
  var B = { c: ['🏫', '學校'], n: ['🌳', '公園'], ne: ['🛒', '超市'], e: ['🚉', '車站'], se: ['🏥', '醫院'], s: ['📮', '郵局'], sw: ['🥬', '市場'], w: ['📚', '圖書館'], nw: ['🚒', '消防局'] };
  function t(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '" font-size="' + (o.fs || 15) + '" font-weight="800" fill="' + (o.c || '#263445') + '" stroke="#fff" stroke-width="4" paint-order="stroke">' + s + '</text>'; }
  // 指北針：dir＝箭頭朝 up／right／down／left
  function arrow(dir, x, y) {
    var a = { up: 0, right: 90, down: 180, left: 270 }[dir || 'up'];
    return '<g transform="translate(' + (x || 446) + ',' + (y || 54) + ') rotate(' + a + ')"><circle r="24" fill="#fff" stroke="#888" stroke-width="2"/><path d="M0 -18 L7 6 L0 1 L-7 6Z" fill="#e5484d"/><text y="-28" text-anchor="middle" font-size="15" font-weight="800" fill="#333" transform="rotate(' + (-a) + ' 0 -34)">北</text></g>';
  }
  // 小鎮：show＝要畫的位置（預設全部）、noName＝只畫空地不寫名字的位置、north＝指北針方向
  function town(o) {
    o = o || {}; var show = o.show || Object.keys(XY), out = ['<rect width="500" height="' + H + '" fill="#f3f7ee"/>'];
    [70, 180, 290].forEach(function (y) { out.push('<line x1="40" y1="' + y + '" x2="460" y2="' + y + '" stroke="#d6d0c2" stroke-width="16" stroke-linecap="round"/>'); });
    [130, 250, 370].forEach(function (x) { out.push('<line x1="' + x + '" y1="30" x2="' + x + '" y2="330" stroke="#d6d0c2" stroke-width="16" stroke-linecap="round"/>'); });
    show.forEach(function (k) {
      var p = XY[k], b = B[k], empty = (o.noName || []).indexOf(k) >= 0;
      out.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="22" fill="' + (empty ? '#fff' : '#fffaf0') + '" stroke="#c9b48a" stroke-width="2"' + (empty ? ' stroke-dasharray="4 3"' : '') + '/>');
      if (!empty) out.push('<text x="' + p[0] + '" y="' + (p[1] + 9) + '" text-anchor="middle" font-size="24">' + b[0] + '</text>' + t(p[0], p[1] + 44, b[1]));
    });
    out.push(arrow(o.north));
    return { svg: out.join(''), w: 500, h: H, alt: '小鎮地圖' };
  }
  function pin(k, n) { return { id: k, n: n || B[k][1], x: XY[k][0], y: XY[k][1] }; }
  // 方位盤：8 個方向的尖端
  var DIR = { n: [0, -1, '北'], ne: [0.707, -0.707, '東北'], e: [1, 0, '東'], se: [0.707, 0.707, '東南'], s: [0, 1, '南'], sw: [-0.707, 0.707, '西南'], w: [-1, 0, '西'], nw: [-0.707, -0.707, '西北'] };
  function tip(k, L) { var d = DIR[k]; return [Math.round(CX + d[0] * L), Math.round(CY + d[1] * L)]; }
  function rose(o) {
    o = o || {}; var out = ['<rect width="500" height="' + H + '" fill="#fbfaf6"/>'];
    Object.keys(DIR).forEach(function (k) {
      var main = k.length === 1, L = main ? 112 : 84, p = tip(k, L), q = tip(k, main ? 140 : 118);
      out.push('<line x1="' + CX + '" y1="' + CY + '" x2="' + p[0] + '" y2="' + p[1] + '" stroke="' + (main ? '#c2410c' : '#8a7a5a') + '" stroke-width="' + (main ? 7 : 4) + '" stroke-linecap="round"/>');
      if ((o.blank || []).indexOf(k) < 0) out.push(t(q[0], q[1] + 6, o.mark === k ? '？' : DIR[k][2], { fs: 18 }));
    });
    out.push('<circle cx="' + CX + '" cy="' + CY + '" r="10" fill="#c2410c"/>');
    return { svg: out.join(''), w: 500, h: H, alt: '方位盤' };
  }
  function rosePin(k) { var p = tip(k, k.length === 1 ? 140 : 118); return { id: k, n: DIR[k][2] + '方', x: p[0], y: p[1] }; }
  // 拼圖片：方位盤上斜的箭頭（風箏形）
  function kite(k) { var d = DIR[k], px = -d[1], py = d[0], f = function (a, b) { return Math.round(CX + d[0] * a + px * b) + ' ' + Math.round(CY + d[1] * a + py * b); }; return 'M' + f(28, 16) + 'L' + f(118, 0) + 'L' + f(28, -16) + 'L' + f(44, 0) + 'Z'; }
  // 小島切成北、東、南、西四塊（形狀不規則，每塊不一樣）
  function rad(a) { return 118 + 16 * Math.sin(3 * a + 0.6) + 11 * Math.cos(5 * a); }
  function wedge(c) {   // c＝方向中心角（度，東＝0、北＝90）
    var pts = []; for (var a = c - 45; a <= c + 45.01; a += 5) { var r = a * Math.PI / 180, R = rad(r); pts.push(Math.round(CX + R * Math.cos(r)) + ' ' + Math.round(CY - R * Math.sin(r) * 0.82)); }
    return 'M' + CX + ' ' + CY + 'L' + pts.join('L') + 'Z';
  }
  var isle = { svg: '<rect width="500" height="' + H + '" fill="#cfe9fb"/>' + arrow('up'), w: 500, h: H, alt: '小島' };
  // 小圖示（拼圖片，outline:false 的題目用）
  // 只用絕對座標的 M／L／Z（引擎從數字算外接框，CONTRACT.md 有寫）
  function poly(x, y, pts) { var o = ''; for (var i = 0; i < pts.length; i += 2) o += (i ? 'L' : 'M') + (x + pts[i]) + ' ' + (y + pts[i + 1]); return o + 'Z'; }
  var ICON = {
    hosp: function (x, y) { return poly(x, y, [-8, -22, 8, -22, 8, -8, 22, -8, 22, 8, 8, 8, 8, 22, -8, 22, -8, 8, -22, 8, -22, -8, -8, -8]); },
    tree: function (x, y) { return poly(x, y, [0, -24, 20, 6, 5, 6, 5, 22, -5, 22, -5, 6, -20, 6]); },
    train: function (x, y) { return poly(x, y, [-22, -16, 22, -16, 22, 10, 14, 10, 14, 18, 8, 18, 8, 10, -8, 10, -8, 18, -14, 18, -14, 10, -22, 10]); }
  };
  function icon(k, pos) { var p = XY[pos]; return { d: ICON[k](p[0], p[1]) }; }

  Geo.add({
    id: 'm1',
    learn: [
      { t: '八個方位', p: '東、西、南、北是四個基本方位。兩個方位的中間還有東北、東南、西南、西北，合起來就是八方位。說東北時，「東」或「北」先說都可以，但我們習慣先說南北、再說東西。', fig: rose() },
      { t: '地圖的方向', p: '一般地圖是「上北、下南、左西、右東」。地圖上如果有指北針，就要照指北針的箭頭找北方：箭頭指哪裡，哪裡就是北。', fig: town() },
      { t: '用太陽找方位', p: '太陽從東方升起、從西方落下。早上面對太陽站好：前面是東、背後是西、左手邊是北、右手邊是南。影子會在太陽的反方向。' },
      { t: '誰在誰的哪一方', p: '說「甲在乙的哪一方」，要站在乙的位置看甲。公園在學校的北方，反過來，學校就在公園的南方。' }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 'm1-p01', type: 'tap', q: '這張圖的指北針朝上。學校的北方是哪裡？點出來。', fig: town(), pins: [pin('n'), pin('e'), pin('s'), pin('w')], a: 'n', why: '指北針朝上，圖的上方就是北方，學校上面的公園在學校的北方。' },
      { id: 'm1-p02', type: 'tap', q: '學校的東方是哪裡？點出來。', fig: town(), pins: [pin('n'), pin('e'), pin('s'), pin('w')], a: 'e', why: '上北下南左西右東：學校右邊的車站在學校的東方。' },
      { id: 'm1-p03', type: 'mc', q: '方位盤上，北和東中間的「？」是什麼方位？', fig: rose({ mark: 'ne' }), opts: ['東北', '西北', '東南', '西南'], a: 0, why: '北和東的中間是東北；北和西的中間是西北。' },
      { id: 'm1-p04', type: 'drag', q: '把「北、東、南、西」拖到方位盤上對的位置（上方是北）。', fig: rose({ blank: ['n', 'e', 's', 'w'] }), pins: [rosePin('n'), rosePin('e'), rosePin('s'), rosePin('w')], items: [{ t: '北', to: 'n' }, { t: '東', to: 'e' }, { t: '南', to: 's' }, { t: '西', to: 'w' }], why: '上北、下南、左西、右東。' },
      { id: 'm1-p05', type: 'tap', q: '學校的西南方是哪裡？點出來。', fig: town(), pins: [pin('ne'), pin('sw'), pin('se'), pin('nw')], a: 'sw', why: '西南方在西和南的中間，也就是學校的左下方：市場。' },
      { id: 'm1-p06', type: 'mc', q: '地圖上沒有畫指北針時，地圖的上方通常是哪個方位？', opts: ['北方', '南方', '東方', '西方'], a: 0, why: '一般地圖是上北、下南、左西、右東。' },
      { id: 'm1-p07', type: 'puzzle', q: '把四支斜斜的箭頭放回方位盤，每支箭頭要指向它的方位。', fig: rose({ blank: ['ne', 'se', 'sw', 'nw'] }), pieces: [{ id: 'ne', t: '東北', shape: { d: kite('ne') } }, { id: 'se', t: '東南', shape: { d: kite('se') } }, { id: 'sw', t: '西南', shape: { d: kite('sw') } }, { id: 'nw', t: '西北', shape: { d: kite('nw') } }], why: '東北在右上、東南在右下、西南在左下、西北在左上。' },
      { id: 'm1-p08', type: 'mc', q: '早上面對太陽站好，你的左手邊是哪個方位？', opts: ['北方', '南方', '東方', '西方'], a: 0, why: '早上太陽在東方。面向東方時，左手邊是北方、右手邊是南方、背後是西方。' },
      { id: 'm1-p09', type: 'tap', q: '從車站出發一直往西走，經過學校以後會走到哪裡？', fig: town(), pins: [pin('w'), pin('n'), pin('s'), pin('ne')], a: 'w', why: '車站在學校東邊，往西走會經過學校，再走就到學校西邊的圖書館。' },
      { id: 'm1-p10', type: 'drag', q: '公園在學校北方、車站在東方、郵局在南方、圖書館在西方。把地名放好。', fig: town({ noName: ['n', 'e', 's', 'w'] }), pins: [pin('n'), pin('e'), pin('s'), pin('w')], items: [{ t: '公園', to: 'n' }, { t: '車站', to: 'e' }, { t: '郵局', to: 's' }, { t: '圖書館', to: 'w' }], why: '指北針朝上：學校的上面是北、右邊是東、下面是南、左邊是西。' },
      // ---- 第 2 組 ----
      { id: 'm1-p11', type: 'tap', q: '這張圖的指北針朝下。學校的北方是哪裡？點出來。', fig: town({ north: 'down' }), pins: [pin('n'), pin('e'), pin('s'), pin('w')], a: 's', why: '指北針朝下，表示圖的下方是北方，所以學校下面的郵局在學校的北方。' },
      { id: 'm1-p12', type: 'mc', q: '一張地圖的指北針箭頭朝右邊，地圖的上方是哪個方位？', fig: town({ north: 'right', show: ['c'] }), opts: ['西方', '東方', '南方', '北方'], a: 0, why: '把一般地圖向右轉，原來在上面的北跑到右邊，原來在左邊的西就轉到上面了。' },
      { id: 'm1-p13', type: 'tap', q: '從學校出發往東南方走，會到哪裡？', fig: town(), pins: [pin('se'), pin('ne'), pin('sw'), pin('nw')], a: 'se', why: '東南方在東和南的中間，是學校的右下方：醫院。' },
      { id: 'm1-p14', type: 'drag', q: '把「東北、東南、西南、西北」拖到方位盤上對的位置。', fig: rose({ blank: ['ne', 'se', 'sw', 'nw'] }), pins: [rosePin('ne'), rosePin('se'), rosePin('sw'), rosePin('nw')], items: [{ t: '東北', to: 'ne' }, { t: '東南', to: 'se' }, { t: '西南', to: 'sw' }, { t: '西北', to: 'nw' }], why: '右上是東北、右下是東南、左下是西南、左上是西北。' },
      { id: 'm1-p15', type: 'mc', q: '看小鎮地圖：超市在消防局的哪一方？', fig: town(), opts: ['東方', '西方', '北方', '南方'], a: 0, why: '超市和消防局都在最上面那一排，超市在右邊，所以超市在消防局的東方。' },
      { id: 'm1-p16', type: 'tap', q: '點出在臺灣本島西方海上的群島。', fig: { map: 'tw' }, pins: ['penghu', 'ludao', 'pengjia'], a: 'penghu', why: '澎湖群島在臺灣本島的西方，就在臺灣海峽中間。' },
      { id: 'm1-p17', type: 'mc', q: '早上，小明的影子在他的西邊。太陽在他的哪一邊？', opts: ['東邊', '西邊', '南邊', '北邊'], a: 0, why: '影子在太陽的反方向。影子在西邊，太陽就在東邊（早上太陽在東方）。' },
      { id: 'm1-p18', type: 'puzzle', q: '小島切成了四塊。照名字把北部、東部、南部、西部拼回去。', fig: isle, pieces: [{ id: 'n', t: '北部', shape: { d: wedge(90) } }, { id: 'e', t: '東部', shape: { d: wedge(0) } }, { id: 's', t: '南部', shape: { d: wedge(270) } }, { id: 'w', t: '西部', shape: { d: wedge(180) } }], why: '指北針朝上：北部在上、南部在下、西部在左、東部在右。' },
      { id: 'm1-p19', type: 'tap', q: '郵局在學校的南方。郵局的東方是哪裡？點出來。', fig: town(), pins: [pin('se'), pin('sw'), pin('c'), pin('e')], a: 'se', why: '站在郵局往右（東）看，同一排右邊的是醫院。' },
      { id: 'm1-p20', type: 'mc', q: '甲在乙的北方，那麼乙在甲的哪一方？', opts: ['南方', '北方', '東方', '西方'], a: 0, why: '方位是相反的：甲在乙的北方，乙就在甲的南方。' },
      // ---- 第 3 組 ----
      { id: 'm1-p21', type: 'tap', q: '這張圖的指北針朝右。學校的北方是哪裡？點出來。', fig: town({ north: 'right' }), pins: [pin('n'), pin('e'), pin('s'), pin('w')], a: 'e', why: '指北針朝右，圖的右邊就是北方，所以學校右邊的車站在學校的北方。' },
      { id: 'm1-p22', type: 'tap', q: '這張圖的指北針朝左。學校的東方是哪裡？點出來。', fig: town({ north: 'left' }), pins: [pin('n'), pin('e'), pin('s'), pin('w')], a: 'n', why: '北在左邊時，整張圖是往左轉：東跑到上面。學校上面的公園在學校的東方。' },
      { id: 'm1-p23', type: 'drag', q: '這張圖的指北針朝下。把「北、東、南、西」放到學校四周對的位置。', fig: town({ north: 'down', show: ['c'] }), pins: [pin('n', '上'), pin('e', '右'), pin('s', '下'), pin('w', '左')], items: [{ t: '北', to: 's' }, { t: '南', to: 'n' }, { t: '東', to: 'w' }, { t: '西', to: 'e' }], why: '指北針朝下＝整張圖轉了半圈：北在下、南在上、東在左、西在右。' },
      { id: 'm1-p24', type: 'mc', q: '小華面向北方，向右轉一次，他會面向哪裡？', opts: ['東方', '西方', '南方', '北方'], a: 0, why: '面向北方時右手邊是東方，向右轉就面向東方。' },
      { id: 'm1-p25', type: 'mc', q: '小華面向西方，向後轉，他會面向哪裡？', opts: ['東方', '西方', '南方', '北方'], a: 0, why: '向後轉就是轉半圈，面向原來的反方向：西的反方向是東。' },
      { id: 'm1-p26', type: 'puzzle', outline: false, q: '醫院在學校東北方，公園在學校西方，車站在學校南方。把圖示放好。', fig: town({ show: ['c', 'ne', 'w', 's'], noName: ['ne', 'w', 's'] }), pieces: [{ id: 'hosp', t: '醫院', shape: icon('hosp', 'ne') }, { id: 'park', t: '公園', shape: icon('tree', 'w') }, { id: 'stn', t: '車站', shape: icon('train', 's') }], why: '東北是右上、西是左邊、南是下面（指北針朝上）。' },
      { id: 'm1-p27', type: 'tap', q: '點出在臺灣本島東南方海上的蘭嶼。', fig: { map: 'tw' }, pins: ['lanyu', 'penghu', 'kinmen', 'pengjia'], a: 'lanyu', why: '蘭嶼在臺灣本島的東南方、太平洋上，屬於臺東縣。' },
      { id: 'm1-p28', type: 'mc', q: '地圖上的甲是金門。金門在臺灣本島的哪一方？', fig: { map: 'tw', marks: [{ p: 'kinmen', t: '甲' }] }, opts: ['西方', '東方', '南方', '北方'], a: 0, why: '金門在臺灣海峽的另一邊、靠近中國大陸，在臺灣本島的西方。' },
      { id: 'm1-p29', type: 'drag', q: '指北針朝右。把「東北、東南、西南、西北」放到學校四個角落對的位置。', fig: town({ north: 'right', show: ['c'] }), pins: [pin('ne', '右上'), pin('se', '右下'), pin('sw', '左下'), pin('nw', '左上')], items: [{ t: '東北', to: 'se' }, { t: '西北', to: 'ne' }, { t: '西南', to: 'nw' }, { t: '東南', to: 'sw' }], why: '北在右、東在下、南在左、西在上：右下是東北、右上是西北、左上是西南、左下是東南。' },
      { id: 'm1-p30', type: 'mc', q: '傍晚面對快下山的太陽，你的右手邊是哪個方位？', opts: ['北方', '南方', '東方', '西方'], a: 0, why: '太陽在西方落下。面向西方時，右手邊是北方、左手邊是南方。' }
    ],
    test: [
      { id: 'm1-t01', type: 'tap', q: '指北針朝上。學校的南方是哪裡？點出來。', fig: town(), pins: [pin('n'), pin('e'), pin('s'), pin('w')], a: 's', why: '下方是南方：學校下面的郵局在學校的南方。' },
      { id: 'm1-t02', type: 'tap', q: '學校的西北方是哪裡？點出來。', fig: town(), pins: [pin('ne'), pin('se'), pin('sw'), pin('nw')], a: 'nw', why: '西北方在西和北的中間，是左上方：消防局。' },
      { id: 'm1-t03', type: 'mc', q: '地圖上沒有指北針時，地圖的右邊通常是哪個方位？', opts: ['東方', '西方', '南方', '北方'], a: 0, why: '上北、下南、左西、右東。' },
      { id: 'm1-t04', type: 'mc', q: '早上面對太陽站好，你的背後是哪個方位？', opts: ['西方', '東方', '南方', '北方'], a: 0, why: '早上太陽在東方，面向東方時背後就是西方。' },
      { id: 'm1-t05', type: 'drag', q: '把「北、東、南、西」拖到方位盤上對的位置。', fig: rose({ blank: ['n', 'e', 's', 'w'] }), pins: [rosePin('n'), rosePin('e'), rosePin('s'), rosePin('w')], items: [{ t: '北', to: 'n' }, { t: '東', to: 'e' }, { t: '南', to: 's' }, { t: '西', to: 'w' }], why: '上北、下南、左西、右東。' },
      { id: 'm1-t06', type: 'drag', q: '指北針朝左。把「北、東、南、西」放到學校四周對的位置。', fig: town({ north: 'left', show: ['c'] }), pins: [pin('n', '上'), pin('e', '右'), pin('s', '下'), pin('w', '左')], items: [{ t: '北', to: 'w' }, { t: '東', to: 'n' }, { t: '南', to: 'e' }, { t: '西', to: 's' }], why: '北在左邊時，東在上、南在右、西在下。' },
      { id: 'm1-t07', type: 'tap', q: '這張圖的指北針朝下。學校的東方是哪裡？點出來。', fig: town({ north: 'down' }), pins: [pin('n'), pin('e'), pin('s'), pin('w')], a: 'w', why: '指北針朝下＝轉了半圈，東跑到左邊：學校左邊的圖書館在學校的東方。' },
      { id: 'm1-t08', type: 'puzzle', outline: false, q: '醫院在學校西南方，公園在學校北方，車站在學校東方。把圖示放好。', fig: town({ show: ['c', 'sw', 'n', 'e'], noName: ['sw', 'n', 'e'] }), pieces: [{ id: 'hosp', t: '醫院', shape: icon('hosp', 'sw') }, { id: 'park', t: '公園', shape: icon('tree', 'n') }, { id: 'stn', t: '車站', shape: icon('train', 'e') }], why: '西南是左下、北是上面、東是右邊。' },
      { id: 'm1-t09', type: 'mc', q: '小美面向南方，向左轉，她會面向哪裡？', opts: ['東方', '西方', '南方', '北方'], a: 0, why: '面向南方時，左手邊是東方，所以向左轉就面向東方。' },
      { id: 'm1-t10', type: 'tap', q: '點出在臺灣本島東北方海上的島。', fig: { map: 'tw' }, pins: ['pengjia', 'penghu', 'lanyu', 'kinmen'], a: 'pengjia', why: '彭佳嶼在臺灣本島的東北方海上，屬於基隆市。' }
    ]
  });
})();
