/* 🌍 地理・臺灣篇 3〈氣候〉（2026-11-08）。格式見 geo/CONTRACT.md。
   內容（國小五上社會「臺灣的氣候」的程度）：北回歸線以北屬副熱帶、以南屬熱帶；季風（冬天東北季風約 10 月到隔年 4 月，從北方的大陸吹來，
   北部、東北部常陰雨、中南部乾燥；夏天西南季風約 6 月中到 9 月中，從南邊海上吹來，溫暖潮濕，強的時候西南部易下豪大雨）；
   梅雨（5～6 月，東北季風轉西南季風的時候；西半部豪雨比東半部多）、颱風（7～9 月是颱風季，平均每年約 3～4 個，帶來強風豪雨，也補充水庫的水）；
   平地一年平均雨量約 2,200 公釐；各地不一樣（玉山年均溫約 4 度、恆春約 25 度；基隆一年約 190 多天下雨、雨量約 3,600 多公釐；澎湖雨量不到 1,000 公釐）；
   寒流（冬天冷空氣南下，平地可能低於 10 度，高山偶爾下雪）。
   不教（國中）：氣候圖判讀（雨量柱狀＋溫度折線）、洋流、氣溫垂直遞減率、柯本氣候分類代號。
   查核（2026-11-08，都是實際打開看過的頁面）：
   - 各站氣候值（1991～2020）＝氣象署〈2025 年臺灣氣候分析〉https://www.cwa.gov.tw/Data/climate/Watch/twn/twn-monitor_2025-0.pdf 表 1、表 2 的「實測值－距平值」：
     11 個平地站平均年雨量 2161.1 毫米、年均溫 23.88 度；玉山年均溫約 4.4 度、恆春約 25.4 度（22 個署屬站最高）；基隆年雨量約 3661 毫米、年雨日約 194 天；
     澎湖年雨量約 950 毫米、年雨日約 81 天；蘭嶼年雨日約 210 天（所以題目只說「這幾個地方裡」基隆最常下雨）。
   - 全年平均降雨量約 2,200 毫米、平地各月均溫約 15～30 度、冬季偶有寒流南下可低於 10 度、高山偶見降雪、春雨梅雨颱風是主要降雨：行政院國情簡介〈地文〉
     https://www.ey.gov.tw/state/4447F4A951A1EC45/52515c49-bcc0-45f5-bd5f-78c22c9d3f45
   - 東北季風約 10 月至次年 4 月（12～2 月最盛），風由中國內陸吹向海洋、北部及東北部陰雨、中南部進入乾季；西南季風約 6 月中至 9 月中，
     來自南海、溫暖潮濕，強的時候西南部豪大雨：氣象署數位科普網〈隨季節變換的風—季風〉https://pweb.cwa.gov.tw/PopularScience/wt/wt_3.html
   - 梅雨季 5～6 月、是季風轉換期的鋒面降雨、西半部豪雨頻率約東半部的 2～4 倍：氣象署氣候服務入口網〈季節氣候—梅雨〉https://climate.cwa.gov.tw/SeasonalClimate?subpage=PlumRain
   - 颱風氣候平均值每年約 3.6 個侵臺、7～9 月是颱風季：中央社 2018-06-29 報導氣象局颱風季展望 https://www.cna.com.tw/news/firstnews/201806290073.aspx
   - 颱風雨讓水庫蓄滿（泰利颱風、石門水庫）：中央社 2017-09-13 https://www.cna.com.tw/news/ahel/201709130112.aspx
   - 北部亞熱帶（副熱帶）、南部熱帶季風氣候，以北回歸線為界：維基百科〈臺灣地理〉；國小課本寫法「北回歸線以北副熱帶、以南熱帶」。
   地圖：TW＝臺灣預設範圍（含澎湖）；TWL＝加北回歸線；TWZ＝本島放大（北部的基隆、宜蘭才分得開）。季風方向用臨時的經緯度點（東北方的海上…），不建在 places.js。
   示意圖：一年 12 個月的圓盤（1 月在最上面、順時針）；季風箭頭（疊在臺灣地圖上，圖上寫「示意」，不是真的風場資料）。 */
(function () {
  'use strict';
  var TW = { map: 'tw' }, TWL = { map: 'tw', lines: [{ lat: 23.44, t: '北回歸線' }] }, TWZ = { map: 'tw', box: [119.75, 21.85, 122.25, 25.35] };
  function t(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + (o.fs || 14) + '" font-weight="800" fill="' + (o.c || '#263445') + '" stroke="#fff" stroke-width="4" paint-order="stroke">' + s + '</text>'; }
  // ---- 示意圖：一年 12 個月的圓盤（中心 250,192；外圈 150、內圈 62；角度＝從正上方順時針）----
  var CX = 250, CY = 192, RO = 150, RI = 62;
  function at(r, deg) { var a = deg * Math.PI / 180; return [Math.round(CX + r * Math.sin(a)), Math.round(CY - r * Math.cos(a))]; }
  function wedge(a0, a1) { var p = [], d; for (d = a0; d <= a1; d += 5) p.push(at(RO, d)); for (d = a1; d >= a0; d -= 5) p.push(at(RI, d)); return 'M' + p.map(function (q) { return q.join(' '); }).join('L') + 'Z'; }
  var BAND = {   // 名稱、開始角度、結束角度（月份 m 從 (m−1)×30 度到 m×30 度）、顏色
    ne: ['東北季風', 270, 480, '#9cc9ee'],   // 10 月～隔年 4 月
    mei: ['梅雨', 120, 180, '#a8d5a2'],      // 5～6 月
    ty: ['颱風', 180, 270, '#f4b183']        // 7～9 月
  };
  function wheel(filled) {
    var o = ['<rect width="500" height="360" fill="#fbfaf3"/>', t(250, 22, '一年 12 個月（示意圖）', { fs: 14, c: '#6b5a3a' })];
    for (var m = 1; m <= 12; m++) o.push('<path d="' + wedge((m - 1) * 30, m * 30) + '" fill="#fff" stroke="#c9b48a" stroke-width="1.5"/>');
    if (filled) Object.keys(BAND).forEach(function (k) { var b = BAND[k]; o.push('<path d="' + wedge(b[1], b[2]) + '" fill="' + b[3] + '" fill-opacity=".75" stroke="#7a6a50" stroke-width="2"/>'); });
    for (m = 1; m <= 12; m++) { var p = at(84, (m - 0.5) * 30); o.push(t(p[0], p[1] + 5, m + '月', { fs: 13 })); }
    if (filled) Object.keys(BAND).forEach(function (k) { var b = BAND[k], p = at(124, (b[1] + b[2]) / 2); o.push(t(p[0], p[1] + 5, b[0], { fs: 14 })); });
    return { svg: o.join(''), w: 500, h: 360, alt: '一年 12 個月的示意圖' };
  }
  var WH = wheel(false), WH_F = wheel(true);
  function bands(keys) { return keys.map(function (k) { return { id: k, t: BAND[k][0], shape: { d: wedge(BAND[k][1], BAND[k][2]) } }; }); }
  function mp(id, n, month) { var p = at(124, (month - 0.5) * 30); return { id: id, n: n, x: p[0], y: p[1] }; }   // 圓盤上某個月的位置
  // ---- 季風箭頭（疊在臺灣預設地圖上）：從 (lon,lat) 出發、朝 deg 方向（0＝北、順時針）----
  var V = Geo.view(TW);
  function arrow(lon, lat, deg, len) {
    var s = V.P(lon, lat), a = deg * Math.PI / 180, ux = Math.sin(a), uy = -Math.cos(a), nx = -uy, ny = ux, w = 9, hw = 22, hl = 30;
    var pts = [[0, -w], [len - hl, -w], [len - hl, -hw], [len, 0], [len - hl, hw], [len - hl, w], [0, w]].map(function (q) { return [Math.round(s[0] + ux * q[0] + nx * q[1]), Math.round(s[1] + uy * q[0] + ny * q[1])]; });
    return 'M' + pts.map(function (q) { return q.join(' '); }).join('L') + 'Z';
  }
  function amid(lon, lat, deg, len) { var s = V.P(lon, lat), a = deg * Math.PI / 180; return [Math.round(s[0] + Math.sin(a) * len / 2), Math.round(s[1] - Math.cos(a) * len / 2)]; }
  var AW = { ne: [122.15, 26.25, 225, 110], sw: [118.25, 21.85, 45, 110] };
  var AR = { ne: ['東北季風', arrow.apply(null, AW.ne)], sw: ['西南季風', arrow.apply(null, AW.sw)] };
  // seasons＝箭頭旁寫（冬）（夏）；false＝只寫名字（考「哪個季節」用）
  function wind(seasons) {
    return { map: 'tw', svg: Object.keys(AR).map(function (k) { return '<path d="' + AR[k][1] + '" fill="' + (k === 'ne' ? '#5f9de8' : '#f08c3a') + '" stroke="#fff" stroke-width="2"/>'; }).join('') +
      t(372, 46, '東北季風' + (seasons ? '（冬）' : ''), { fs: 14, c: '#24527a' }) + t(110, 590, '西南季風' + (seasons ? '（夏）' : ''), { fs: 14, c: '#a04b0c' }) + t(80, 22, '風向示意', { fs: 13, c: '#6b5a3a' }) };
  }
  var WIND = wind(true);
  var AP = Object.keys(AW).map(function (k) { var m = amid.apply(null, AW[k]); return { id: k, n: AR[k][0] + '的箭頭', x: m[0], y: m[1] }; });
  // 季風從哪裡吹來：臨時的方向點
  var DIR = { ne: { id: 'ne', n: '東北方的海上', lon: 122.0, lat: 26.15 }, sw: { id: 'sw', n: '西南方的海上', lon: 118.6, lat: 22.2 }, se: { id: 'se', n: '東南方的海上', lon: 122.0, lat: 22.7 }, nw: { id: 'nw', n: '西北方', lon: 118.6, lat: 26.0 } };
  var NS = [{ id: 'n', n: '北回歸線以北', lon: 121.0, lat: 24.4 }, { id: 's', n: '北回歸線以南', lon: 120.75, lat: 22.85 }];

  Geo.add({
    id: 't3',
    learn: [
      { t: '熱帶和副熱帶', p: '北回歸線從臺灣中間通過。北回歸線以南屬於熱帶，一年四季都很溫暖；以北屬於副熱帶，夏天熱、冬天比較涼，四季變化比較明顯。', fig: { map: 'tw', lines: [{ lat: 23.44, t: '北回歸線' }], names: ['taipei', 'kaohsiung'] } },
      { t: '季風', p: '季風是隨著季節改變方向的風。冬天吹東北季風（約 10 月到隔年 4 月），從北方的大陸吹來，北部、東北部常常陰雨，中南部比較乾。夏天吹西南季風（約 6 月中到 9 月中），從南邊海上吹來，溫暖潮濕。', fig: WIND },
      { t: '梅雨和颱風', p: '臺灣雨量多，平地一年平均約 2,200 公釐。5～6 月是梅雨季；7～9 月是颱風季，平均每年約有 3～4 個颱風侵襲臺灣，帶來強風豪雨，也讓水庫補滿水。', fig: WH_F },
      { t: '各地不一樣', p: '高山比平地冷：玉山一年平均氣溫只有約 4 度，恆春約 25 度。基隆冬天常下雨，一年大約 190 多天下雨；澎湖雨很少，一年雨量不到 1,000 公釐。冬天寒流來時，平地可能低於 10 度，高山偶爾下雪。', fig: { map: 'tw', names: ['keelung', 'penghu', 'yushan', 'hengchun'] } }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 't3-p01', type: 'mc', q: '北回歸線以南的臺灣南部，屬於哪一種氣候？', fig: TWL, opts: ['熱帶', '副熱帶', '溫帶', '寒帶'], a: 0, why: '北回歸線以南屬於熱帶，一年四季都溫暖；以北屬於副熱帶。' },
      { id: 't3-p02', type: 'tap', q: '冬天吹東北季風時，哪裡最容易陰雨綿綿？點出來。', fig: TW, pins: ['keelung', 'kaohsiung', 'taichung'], a: 'keelung', why: '東北季風帶著水氣先吹到北部、東北部，基隆常常下雨；中南部被山擋住，比較乾。' },
      { id: 't3-p03', type: 'puzzle', q: '這是一年 12 個月的圓盤。看形狀，把東北季風、梅雨、颱風拼回去。', fig: WH, pieces: bands(['ne', 'mei', 'ty']), why: '東北季風最長（10 月到隔年 4 月），梅雨在 5～6 月，颱風季在 7～9 月。' },
      { id: 't3-p04', type: 'drag', q: '兩支箭頭是兩種季風。把「冬天」「夏天」拖到對的箭頭上。', fig: wind(false), pins: AP, items: [{ t: '冬天', to: 'ne' }, { t: '夏天', to: 'sw' }], why: '冬天吹東北季風（從東北方來），夏天吹西南季風（從西南方的海上來）。' },
      { id: 't3-p05', type: 'tap', q: '看北回歸線，點出在熱帶的城市。', fig: TWL, pins: ['kaohsiung', 'taipei', 'hualien'], a: 'kaohsiung', why: '高雄在北回歸線以南，屬於熱帶；臺北、花蓮在北回歸線以北，屬於副熱帶。' },
      { id: 't3-p06', type: 'drag', q: '把「熱帶」「副熱帶」拖到北回歸線的兩邊。', fig: TWL, pins: NS, items: [{ t: '熱帶', to: 's' }, { t: '副熱帶', to: 'n' }], why: '北回歸線以南（比較靠近赤道）是熱帶，以北是副熱帶。' },
      { id: 't3-p07', type: 'mc', q: '臺灣的梅雨季大約在幾月？', opts: ['5～6 月', '7～9 月', '12～2 月', '10～11 月'], a: 0, why: '每年 5、6 月是梅雨季，鋒面停在臺灣附近，常常下雨。' },
      { id: 't3-p08', type: 'tap', q: '冬天的東北季風是從哪一邊吹過來的？點出來。', fig: TW, pins: [DIR.ne, DIR.sw, DIR.se], a: 'ne', why: '「東北季風」就是從東北方吹來的風，吹過東北方的海上到臺灣。' },
      { id: 't3-p09', type: 'mc', q: '颱風最常侵襲臺灣的是哪幾個月？', opts: ['7～9 月', '12～2 月', '3～4 月', '5～6 月'], a: 0, why: '每年 7～9 月是臺灣的颱風季，平均每年約有 3～4 個颱風侵襲。' },
      { id: 't3-p10', type: 'tap', q: '高山比平地冷。點出一年平均氣溫最低的地方。', fig: TW, pins: ['yushan', 'hengchun', 'taipei'], a: 'yushan', why: '玉山很高，一年平均氣溫只有約 4 度；恆春約 25 度、臺北約 23 度。' },
      // ---- 第 2 組 ----
      { id: 't3-p11', type: 'drag', q: '把「東北季風」「西南季風」拖到它們吹來的方向。', fig: TW, pins: [DIR.ne, DIR.sw, DIR.se, DIR.nw], items: [{ t: '東北季風', to: 'ne' }, { t: '西南季風', to: 'sw' }], why: '季風的名字就是它吹來的方向：東北季風從東北方來、西南季風從西南方來。' },
      { id: 't3-p12', type: 'tap', q: '夏天溫暖潮濕的西南季風，是從哪一邊吹過來的？點出來。', fig: TW, pins: [DIR.nw, DIR.sw, DIR.ne], a: 'sw', why: '西南季風約 6 月中到 9 月中，從西南方的海上（南海）吹向臺灣，又暖又濕。' },
      { id: 't3-p13', type: 'tap', q: '點出一年雨量不到 1,000 公釐、雨很少的地方。', fig: TW, pins: ['penghu', 'keelung', 'hualien'], a: 'penghu', why: '澎湖一年雨量約 950 公釐；基隆約 3,600 多公釐、花蓮約 1,900 多公釐。' },
      { id: 't3-p14', type: 'puzzle', outline: false, q: '把「東北季風」「西南季風」兩支箭頭放到地圖上，箭頭要指向臺灣。', fig: TW, pieces: Object.keys(AR).map(function (k) { return { id: k, t: AR[k][0], shape: { d: AR[k][1] } }; }), why: '東北季風從東北方的海上吹向臺灣；西南季風從西南方的海上吹向臺灣。' },
      { id: 't3-p15', type: 'mc', q: '臺灣平地一年平均的雨量大約多少？', opts: ['約 2,200 公釐', '約 220 公釐', '約 22,000 公釐', '約 22 公釐'], a: 0, why: '臺灣平地一年平均雨量約 2,200 公釐，是雨量很多的地方。' },
      { id: 't3-p16', type: 'tap', q: '冬天吹東北季風時，哪裡比較乾、比較少下雨？', fig: TWZ, pins: ['kaohsiung', 'keelung', 'yilan'], a: 'kaohsiung', why: '東北季風被中央山脈擋住，高雄在山的西南邊，冬天是乾季；基隆、宜蘭常下雨。' },
      { id: 't3-p17', type: 'mc', q: '颱風來的時候，通常會帶來什麼？', opts: ['強風和豪雨', '下雪和結冰', '很久都不下雨', '一直出大太陽'], a: 0, why: '颱風會帶來很強的風和很大的雨，可能造成淹水、土石流。' },
      { id: 't3-p18', type: 'drag', q: '把「寒流」「梅雨」「颱風」拖到它們最常出現的月份。', fig: WH, pins: [mp('cold', '1 月', 1), mp('mei', '5～6 月', 5.5), mp('ty', '7～9 月', 8)], items: [{ t: '寒流', to: 'cold' }, { t: '梅雨', to: 'mei' }, { t: '颱風', to: 'ty' }], why: '寒流在冬天，梅雨在 5～6 月，颱風季在 7～9 月。' },
      { id: 't3-p19', type: 'mc', q: '玉山上比平地冷很多，主要是因為什麼？', opts: ['地勢越高，氣溫越低', '玉山在北回歸線以北', '玉山離海比較近'], a: 0, why: '越往高處氣溫越低，所以高山比平地冷，冬天偶爾還會下雪。' },
      { id: 't3-p20', type: 'tap', q: '這三個地方裡，哪裡一年下雨的天數最多（約 190 多天）？', fig: TW, pins: ['keelung', 'kaohsiung', 'penghu'], a: 'keelung', why: '基隆冬天受東北季風影響，常常下雨，一年約 190 多天有下雨；澎湖只有約 80 天。' },
      // ---- 第 3 組 ----
      { id: 't3-p21', type: 'drag', q: '把「雨最多」「雨最少」拖到地圖上。多的圈不用放。', fig: TW, pins: ['keelung', 'penghu', 'taichung', 'hualien'], items: [{ t: '雨最多', to: 'keelung' }, { t: '雨最少', to: 'penghu' }], why: '基隆一年雨量約 3,600 多公釐，澎湖只有約 950 公釐；臺中、花蓮在中間。' },
      { id: 't3-p22', type: 'mc', q: '冬天吹東北季風時，臺灣中南部的天氣通常怎樣？', opts: ['比較乾燥、少雨', '天天陰雨綿綿', '常常下大雪', '颱風一個接一個'], a: 0, why: '東北季風被中央山脈擋住，中南部冬天下雨的機會少，進入乾季。' },
      { id: 't3-p23', type: 'puzzle', outline: false, q: '圓盤上只有圓圈。想想月份，把東北季風、梅雨、颱風放回去。', fig: WH, pieces: bands(['ne', 'mei', 'ty']), why: '東北季風約 10 月到隔年 4 月（在最上面），梅雨 5～6 月（右下），颱風 7～9 月（左下）。' },
      { id: 't3-p24', type: 'mc', q: '玉山一年平均約 4 度、恆春約 25 度，大約差幾度？', opts: ['約 21 度', '約 29 度', '約 4 度', '約 25 度'], a: 0, why: '25－4＝21，玉山比恆春冷了約 21 度，因為玉山很高。' },
      { id: 't3-p25', type: 'tap', q: '夏天西南季風很強的時候，哪一邊最容易下豪大雨？', fig: TW, pins: ['kaohsiung', 'keelung', 'hualien'], a: 'kaohsiung', why: '西南季風從南海吹來，臺灣西南部（像高雄）最先迎著風，容易下豪大雨。' },
      { id: 't3-p26', type: 'mc', q: '颱風會造成災害，但對臺灣也有什麼幫助？', opts: ['帶來雨水，補充水庫', '讓天氣變得更乾燥', '讓冬天變得更冷', '讓梅雨季提早結束'], a: 0, why: '颱風帶來大量雨水，常常一場颱風就讓水庫蓄滿，補充用水。' },
      { id: 't3-p27', type: 'tap', q: '梅雨季時，嘉義和花蓮哪一個比較常下豪雨？點出來。', fig: TW, pins: ['chiayi', 'hualien'], a: 'chiayi', why: '梅雨的豪雨多在西半部（臺南到阿里山一帶最多），次數大約是東半部的 2～4 倍。嘉義在西半部。' },
      { id: 't3-p28', type: 'mc', q: '冬天的東北季風和寒流，是從哪裡吹來的冷空氣？', opts: ['北方的大陸', '南邊的海洋', '東邊的太平洋', '赤道附近'], a: 0, why: '冬天北方的大陸很冷，冷空氣往海上吹，就變成吹到臺灣的東北季風。' },
      { id: 't3-p29', type: 'drag', q: '在這幾個地方裡，把「最溫暖」「最冷」「最常下雨」拖到地圖上。', fig: TW, pins: ['hengchun', 'yushan', 'keelung', 'taichung'], items: [{ t: '最溫暖', to: 'hengchun' }, { t: '最冷', to: 'yushan' }, { t: '最常下雨', to: 'keelung' }], why: '恆春在最南邊的熱帶，最溫暖；玉山最高，最冷；基隆冬天常下雨。臺中不是答案。' },
      { id: 't3-p30', type: 'mc', q: '梅雨季是哪兩種季風交換的時候？', opts: ['東北季風換成西南季風', '西南季風換成東北季風', '颱風換成寒流'], a: 0, why: '春末東北季風變弱、西南季風變強，鋒面停在臺灣附近，就是 5～6 月的梅雨。' }
    ],
    test: [
      { id: 't3-t01', type: 'tap', q: '冬天東北季風吹來時，點出常常下雨的地方。', fig: TW, pins: ['kaohsiung', 'keelung', 'penghu'], a: 'keelung', why: '基隆在北部，最先迎著東北季風，冬天常常下雨。' },
      { id: 't3-t02', type: 'mc', q: '臺北在北回歸線以北，屬於哪一種氣候？', fig: TWL, opts: ['副熱帶', '熱帶', '寒帶', '沙漠'], a: 0, why: '北回歸線以北屬於副熱帶，以南屬於熱帶。' },
      { id: 't3-t03', type: 'drag', q: '季風的名字就是它吹來的方向。把兩種季風拖到對的方向。', fig: TW, pins: [DIR.nw, DIR.se, DIR.ne, DIR.sw], items: [{ t: '西南季風', to: 'sw' }, { t: '東北季風', to: 'ne' }], why: '東北季風從東北方來（冬天）、西南季風從西南方來（夏天）。' },
      { id: 't3-t04', type: 'puzzle', q: '把東北季風、梅雨、颱風拼回一年 12 個月的圓盤。', fig: WH, pieces: bands(['ty', 'mei', 'ne']), why: '東北季風 10 月到隔年 4 月、梅雨 5～6 月、颱風 7～9 月。' },
      { id: 't3-t05', type: 'mc', q: '臺灣的颱風季大約是幾月？', opts: ['7～9 月', '1～3 月', '4～5 月', '11～12 月'], a: 0, why: '颱風最常在 7～9 月侵襲臺灣。' },
      { id: 't3-t06', type: 'tap', q: '點出一年平均氣溫最低的地方。', fig: TW, pins: ['hengchun', 'taipei', 'yushan', 'penghu'], a: 'yushan', why: '玉山海拔很高，一年平均只有約 4 度，是最冷的。' },
      { id: 't3-t07', type: 'mc', q: '每年 5～6 月常常下雨的季節叫什麼？', opts: ['梅雨季', '颱風季', '乾季'], a: 0, why: '5～6 月是梅雨季；7～9 月才是颱風季。' },
      { id: 't3-t08', type: 'drag', q: '北回歸線把臺灣分成兩種氣候。把氣候的名字拖到線的南、北兩邊。', fig: TWL, pins: NS, items: [{ t: '副熱帶', to: 'n' }, { t: '熱帶', to: 's' }], why: '北回歸線以南是熱帶，以北是副熱帶。' },
      { id: 't3-t09', type: 'mc', q: '冬天寒流來的時候，可能會怎樣？', opts: ['平地低於 10 度，高山下雪', '天氣變得非常炎熱', '颱風一個接一個來'], a: 0, why: '寒流是冬天南下的冷空氣，平地可能低於 10 度，高山偶爾下雪。' },
      { id: 't3-t10', type: 'tap', q: '點出雨很少、一年雨量不到 1,000 公釐的澎湖。', fig: TW, pins: ['hengchun', 'keelung', 'penghu'], a: 'penghu', why: '澎湖一年雨量約 950 公釐，比臺灣本島大部分地方少很多。' }
    ]
  });
})();
