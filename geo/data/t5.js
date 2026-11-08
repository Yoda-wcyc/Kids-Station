/* 🌍 地理・臺灣篇 5〈縣市與區域〉（2026-11-08）。格式見 geo/CONTRACT.md。
   內容（國小五年級社會的程度）：22 個直轄市、縣、市（6 直轄市＝六都、3 市、13 縣）；各縣市政府所在地（特別是跟縣名不一樣的：新竹縣→竹北、雲林縣→斗六、
   嘉義縣→太保、新北市→板橋、澎湖縣→馬公、金門縣→金城、連江縣→南竿）；同名的縣和市（新竹、嘉義）；北、中、南、東四區；整個在離島的縣。
   地圖沒有縣市界（geo/CONTRACT.md §7）：只用 places.js 的「縣市政府所在地」點出題，不畫邊界；放大的區域圖（北部、中部、南部）只是把範圍放大，沒有畫界線。
   區域：照國家發展委員會《都市及區域發展統計彙編》（2024）的分法——北部 臺北、新北、基隆、新竹市、桃園、新竹縣、宜蘭；中部 臺中、苗栗、彰化、南投、雲林；
         南部 高雄、臺南、嘉義市、嘉義縣、屏東、澎湖；東部 花蓮、臺東；金門、連江另列。宜蘭縣在國小課本有的歸北部、有的歸東部，澎湖有的歸離島，所以這兩個縣不考「屬於哪一區」。
   查核（2026-11-08）：
   - 22 個＝6 直轄市（臺北、新北、桃園、臺中、臺南、高雄）＋3 市（基隆、新竹、嘉義）＋13 縣（含福建省的金門、連江）（英文維基百科 List of administrative divisions of Taiwan；中文維基百科「臺灣行政區劃」）。
   - 縣市政府所在地：中文維基百科「臺灣行政區劃」表（新北 板橋區、桃園 桃園區、臺中 西屯區、臺南 安平區、高雄 苓雅區、新竹縣 竹北市、苗栗縣 苗栗市、彰化縣 彰化市、
     南投縣 南投市、雲林縣 斗六市、嘉義縣 太保市、屏東縣 屏東市、宜蘭縣 宜蘭市、花蓮縣 花蓮市、臺東縣 臺東市、澎湖縣 馬公市）；英文維基百科同表（金門縣 金城鎮、連江縣 南竿鄉）；
     各縣市政府條目（嘉義縣政府在太保市祥和新村、雲林縣政府在斗六市、新竹縣政府在竹北市、臺東縣政府在臺東市、屏東縣政府在屏東市、宜蘭縣政府在宜蘭市）。
   - 臺北縣 2010 年改制為新北市、高雄縣 2010 年與高雄市合併（中文維基百科「臺灣行政區劃」）。 */
(function () {
  'use strict';
  var TW = { map: 'tw' }, P = GeoPlaces, twV = Geo.view(TW);
  var NB = { map: 'tw', box: [120.8, 24.4, 122.1, 25.4], alt: '臺灣北部（放大）' };     // 北部放大
  var CB = { map: 'tw', box: [119.9, 23.35, 121.3, 24.65], alt: '臺灣中部（放大）' };   // 中部放大
  var SB = { map: 'tw', box: [119.6, 22.3, 121.0, 23.7], alt: '臺灣南部（放大）' };     // 南部放大
  function rect(x, y, w, h) { return 'M' + x + ' ' + y + 'L' + (x + w) + ' ' + y + 'L' + (x + w) + ' ' + (y + h) + 'L' + x + ' ' + (y + h) + 'Z'; }
  // 拼圖（outline:false）：牌子的位置＝縣市政府所在地
  function sign(list) { return list.map(function (a) { var p = twV.P(P[a[0]].lon, P[a[0]].lat); return { id: a[0], t: a[1], shape: { d: rect(Math.round(p[0] - 9), Math.round(p[1] - 9), 18, 18) } }; }); }
  // 重點卡用的地名（靠左對齊，畫在點的右邊，避免金門那種在圖邊的字被切掉；靠右邊的點改畫在左邊）
  function lab(list) { return list.map(function (a) { var p = twV.P(P[a[0]].lon, P[a[0]].lat), r = p[0] > 380; return '<text x="' + (r ? p[0] - 10 : p[0] + 10) + '" y="' + (p[1] + 5) + '" text-anchor="' + (r ? 'end' : 'start') + '" font-size="15" font-weight="800" fill="#263445" stroke="#fff" stroke-width="4" paint-order="stroke">' + a[1] + '</text>'; }).join(''); }
  function isl(list) { return list.map(function (a) { return { id: a[0], t: a[1], shape: { tw: a[0] } }; }); }

  Geo.add({
    id: 't5',
    learn: [
      { t: '22 個縣市', p: '我國的地方分成 22 個縣市：6 個直轄市（臺北、新北、桃園、臺中、臺南、高雄，也叫「六都」）、3 個市（基隆、新竹、嘉義），還有 13 個縣。', fig: { map: 'tw', names: ['taipei', 'taichung', 'kaohsiung'] } },
      { t: '縣市政府在哪裡', p: '每個縣市都有縣市政府。有些縣政府不在跟縣同名的地方：新竹縣政府在竹北、雲林縣政府在斗六、嘉義縣政府在太保，新北市政府在板橋。', fig: { map: 'tw', names: ['zhubei', 'taibao'] } },
      { t: '北、中、南、東', p: '本島常分成四區。北部：臺北、新北、基隆、桃園、新竹；中部：苗栗、臺中、彰化、南投、雲林；南部：嘉義、臺南、高雄、屏東；東部：花蓮、臺東。宜蘭有的書歸北部、有的歸東部。' },
      { t: '整個在離島的縣', p: '澎湖縣（縣政府在馬公）、金門縣（在金城）、連江縣（就是馬祖，縣政府在南竿）整個縣都在離島上。綠島、蘭嶼屬於臺東縣，小琉球屬於屏東縣。', fig: { map: 'tw', svg: lab([['magong', '澎湖縣'], ['jincheng', '金門縣'], ['nangan', '連江縣（馬祖）'], ['ludao', '綠島（臺東縣）'], ['lanyu', '蘭嶼（臺東縣）']]) } },
      { t: '縣和市同名', p: '新竹縣和新竹市、嘉義縣和嘉義市，都是兩個不同的縣市，各有自己的政府。以前的臺北縣在 2010 年改制成新北市，高雄縣也在 2010 年和高雄市合併。' }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 't5-p01', type: 'mc', q: '我國現在一共有幾個直轄市、縣、市？', opts: ['22 個', '16 個', '25 個', '30 個'], a: 0, why: '6 個直轄市＋3 個市＋13 個縣，一共 22 個。' },
      { id: 't5-p02', type: 'tap', q: '點出臺北市政府。', fig: TW, pins: ['taipei', 'taichung', 'kaohsiung', 'hualien'], a: 'taipei', why: '臺北市在臺灣北部，四周被新北市圍起來。' },
      { id: 't5-p03', type: 'mc', q: '下面哪一個是「直轄市」？', opts: ['桃園市', '基隆市', '新竹市', '嘉義市'], a: 0, why: '六都是臺北、新北、桃園、臺中、臺南、高雄；基隆、新竹、嘉義是「市」，不是直轄市。' },
      { id: 't5-p04', type: 'drag', q: '把「臺北市」「臺中市」「高雄市」拖到市政府的位置。', fig: TW, pins: ['taipei', 'taichung', 'kaohsiung', 'hualien'], items: [{ t: '臺北市', to: 'taipei' }, { t: '臺中市', to: 'taichung' }, { t: '高雄市', to: 'kaohsiung' }], why: '臺北市在北部、臺中市在中部、高雄市在南部，都在西半邊；東邊那個圈是花蓮。' },
      { id: 't5-p05', type: 'tap', q: '點出東部的花蓮縣政府。', fig: TW, pins: ['hualien', 'taichung', 'yilan', 'taitung'], a: 'hualien', why: '花蓮縣政府在花蓮市，位在東部中段；北邊是宜蘭、南邊是臺東。' },
      { id: 't5-p06', type: 'mc', q: '花蓮縣和臺東縣屬於哪一區？', opts: ['東部', '北部', '中部', '南部'], a: 0, why: '花蓮縣和臺東縣在中央山脈東邊，屬於東部。' },
      { id: 't5-p07', type: 'puzzle', outline: false, q: '把縣市政府的牌子放回地圖：臺北市、臺中市、高雄市、花蓮縣。', fig: TW, pieces: sign([['taipei', '臺北市'], ['taichung', '臺中市'], ['kaohsiung', '高雄市'], ['hualien', '花蓮縣']]), why: '臺北在北、臺中在中、高雄在南，都在西部；花蓮在東部。' },
      { id: 't5-p08', type: 'mc', q: '臺中市屬於哪一區？', opts: ['中部', '北部', '南部', '東部'], a: 0, why: '臺中市在臺灣西部的中間，屬於中部。' },
      { id: 't5-p09', type: 'tap', q: '澎湖縣政府在馬公市。點出馬公。', fig: TW, pins: ['magong', 'jincheng', 'nangan', 'taichung'], a: 'magong', why: '馬公在臺灣海峽中的澎湖群島上，是澎湖縣政府所在地。' },
      { id: 't5-p10', type: 'drag', q: '把「澎湖縣」「金門縣」「連江縣」拖到縣政府的位置。', fig: TW, pins: ['magong', 'jincheng', 'nangan'], items: [{ t: '澎湖縣', to: 'magong' }, { t: '金門縣', to: 'jincheng' }, { t: '連江縣', to: 'nangan' }], why: '澎湖縣在海峽中間（馬公）、金門縣在最西邊（金城）、連江縣就是馬祖，在最北邊（南竿）。' },
      // ---- 第 2 組 ----
      { id: 't5-p11', type: 'mc', q: '新竹縣政府在哪裡？', opts: ['竹北市', '新竹市', '苗栗市', '桃園市'], a: 0, why: '新竹縣政府在竹北市；新竹市是另一個縣市，有自己的市政府。' },
      { id: 't5-p12', type: 'tap', q: '北部放大圖：點出基隆市政府。', fig: NB, pins: ['keelung', 'taoyuan', 'yilan', 'hsinchuCity'], a: 'keelung', why: '基隆市在臺灣北端靠海的地方，有基隆港。' },
      { id: 't5-p13', type: 'drag', q: '北部放大圖：把「基隆市」「桃園市」「新竹市」「宜蘭縣」拖到縣市政府的位置。', fig: NB, pins: ['keelung', 'taoyuan', 'hsinchuCity', 'yilan', 'taipei'], items: [{ t: '基隆市', to: 'keelung' }, { t: '桃園市', to: 'taoyuan' }, { t: '新竹市', to: 'hsinchuCity' }, { t: '宜蘭縣', to: 'yilan' }], why: '基隆在北端海邊；桃園、新竹在臺北的西南方（新竹更南）；宜蘭在東邊。中間那個圈是臺北。' },
      { id: 't5-p14', type: 'mc', q: '雲林縣政府在哪個城市？', opts: ['斗六市', '虎尾鎮', '嘉義市', '彰化市'], a: 0, why: '雲林縣政府在斗六市；嘉義市、彰化市是別的縣市。' },
      { id: 't5-p15', type: 'tap', q: '中部放大圖：點出雲林縣政府（斗六市）。', fig: CB, pins: ['douliu', 'taichung', 'nantou', 'miaoli'], a: 'douliu', why: '雲林縣在中部最南邊，斗六在南投的西南方；再往南就是嘉義。' },
      { id: 't5-p16', type: 'mc', q: '地圖上的甲，是哪一個縣的縣政府？', fig: { map: 'tw', marks: [{ p: 'taitung', t: '甲' }] }, opts: ['臺東縣', '花蓮縣', '屏東縣', '宜蘭縣'], a: 0, why: '甲在臺灣東南部的海邊，是臺東縣政府（臺東市）。花蓮在它北邊、屏東在中央山脈西邊。' },
      { id: 't5-p17', type: 'puzzle', outline: false, q: '把縣政府的牌子放回地圖：北部的新竹縣、中部的雲林縣、東部的臺東縣。', fig: TW, pieces: sign([['zhubei', '新竹縣'], ['douliu', '雲林縣'], ['taitung', '臺東縣']]), why: '新竹縣政府（竹北）在北部、雲林縣政府（斗六）在中部西邊、臺東縣政府（臺東市）在東南部。' },
      { id: 't5-p18', type: 'tap', q: '南部放大圖：點出屏東縣政府。', fig: SB, pins: ['pingtung', 'tainan', 'chiayi', 'kaohsiung'], a: 'pingtung', why: '屏東縣在臺灣最南邊；屏東市在高雄市的東邊，中間隔著高屏溪。' },
      { id: 't5-p19', type: 'mc', q: '哪一組是「名字一樣、卻是兩個不同的縣市」？', opts: ['新竹縣和新竹市', '臺北縣和臺北市', '高雄縣和高雄市'], a: 0, why: '新竹縣、新竹市是兩個縣市；臺北縣 2010 年改成新北市，高雄縣 2010 年併進高雄市。' },
      { id: 't5-p20', type: 'drag', q: '中部放大圖：把「苗栗縣」「臺中市」「南投縣」「雲林縣」拖到縣市政府的位置。', fig: CB, pins: ['miaoli', 'taichung', 'nantou', 'douliu'], items: [{ t: '苗栗縣', to: 'miaoli' }, { t: '臺中市', to: 'taichung' }, { t: '南投縣', to: 'nantou' }, { t: '雲林縣', to: 'douliu' }], why: '由北到南：苗栗、臺中、南投、雲林（斗六）。南投是唯一不靠海的縣。' },
      // ---- 第 3 組 ----
      { id: 't5-p21', type: 'tap', q: '南部放大圖：六都裡最南邊的是高雄市。點出高雄市政府。', fig: SB, pins: ['kaohsiung', 'tainan', 'pingtung', 'chiayi'], a: 'kaohsiung', why: '高雄市政府在高雄港旁邊；北邊是臺南、東邊是屏東。' },
      { id: 't5-p22', type: 'mc', q: '地圖上的甲、乙、丙，哪一個在南部？', fig: { map: 'tw', marks: [{ p: 'taipei', t: '甲' }, { p: 'hualien', t: '乙' }, { p: 'kaohsiung', t: '丙' }] }, opts: ['丙', '甲', '乙'], a: 0, why: '丙是高雄（南部）；甲是臺北（北部）、乙是花蓮（東部）。' },
      { id: 't5-p23', type: 'drag', q: '圓圈是新竹市、南投縣、屏東縣、臺東縣的縣市政府。把各自的區域拖上去。', fig: TW, pins: ['hsinchuCity', 'nantou', 'pingtung', 'taitung'], items: [{ t: '北部', to: 'hsinchuCity' }, { t: '中部', to: 'nantou' }, { t: '南部', to: 'pingtung' }, { t: '東部', to: 'taitung' }], why: '新竹市在北部、南投縣在中部、屏東縣在南部、臺東縣在東部。' },
      { id: 't5-p24', type: 'mc', q: '嘉義縣政府在哪裡？', opts: ['太保市', '嘉義市', '朴子市', '民雄鄉'], a: 0, why: '嘉義縣政府在太保市；嘉義市是另一個縣市，被嘉義縣包圍。' },
      { id: 't5-p25', type: 'tap', q: '中部放大圖：點出彰化縣政府。', fig: CB, pins: ['changhua', 'nantou', 'miaoli', 'douliu'], a: 'changhua', why: '彰化縣在臺中市南邊、靠海；南投縣在它東邊、不靠海。' },
      { id: 't5-p26', type: 'mc', q: '臺灣有幾個直轄市？', opts: ['6 個', '3 個', '13 個', '22 個'], a: 0, why: '直轄市有 6 個（六都）；市有 3 個、縣有 13 個，合起來 22 個。' },
      { id: 't5-p27', type: 'puzzle', q: '牌子寫的是島屬於哪個縣。把四個島放回地圖。', fig: TW, pieces: isl([['penghu', '澎湖縣'], ['kinmen', '金門縣'], ['ludao', '綠島（臺東縣）'], ['lanyu', '蘭嶼（臺東縣）']]), why: '澎湖群島是澎湖縣、金門是金門縣；綠島和蘭嶼在臺東外海，屬於臺東縣（蘭嶼比較南）。' },
      { id: 't5-p28', type: 'tap', q: '點出屬於「南部」的縣市政府。', fig: TW, pins: ['taibao', 'miaoli', 'yilan', 'hualien'], a: 'taibao', why: '太保是嘉義縣政府所在地，嘉義縣屬於南部；苗栗在中部、花蓮在東部。' },
      { id: 't5-p29', type: 'drag', q: '南部放大圖：把「嘉義市」「臺南市」「高雄市」「屏東縣」拖到縣市政府的位置。', fig: SB, pins: ['chiayi', 'tainan', 'kaohsiung', 'pingtung'], items: [{ t: '嘉義市', to: 'chiayi' }, { t: '臺南市', to: 'tainan' }, { t: '高雄市', to: 'kaohsiung' }, { t: '屏東縣', to: 'pingtung' }], why: '由北到南：嘉義市、臺南市、高雄市；屏東縣在高雄市的東邊。' },
      { id: 't5-p30', type: 'mc', q: '下面哪一個縣，整個都在離島上？', opts: ['澎湖縣', '屏東縣', '臺東縣', '宜蘭縣'], a: 0, why: '澎湖縣全在澎湖群島上；屏東縣、臺東縣、宜蘭縣有離島，但大部分在本島。' }
    ],
    test: [
      { id: 't5-t01', type: 'mc', q: '「六都」指的是哪一種行政區？', opts: ['直轄市', '縣轄市', '鄉鎮市'], a: 0, why: '六都是 6 個直轄市：臺北、新北、桃園、臺中、臺南、高雄。' },
      { id: 't5-t02', type: 'tap', q: '點出高雄市政府。', fig: TW, pins: ['kaohsiung', 'taitung', 'taichung'], a: 'kaohsiung', why: '高雄市在臺灣西南部；臺東在東部、臺中在中部。' },
      { id: 't5-t03', type: 'drag', q: '把「臺北市」「臺中市」「花蓮縣」拖到縣市政府的位置。', fig: TW, pins: ['taipei', 'taichung', 'hualien', 'kaohsiung'], items: [{ t: '臺北市', to: 'taipei' }, { t: '臺中市', to: 'taichung' }, { t: '花蓮縣', to: 'hualien' }], why: '臺北在北部、臺中在中部西邊、花蓮在東部；最南那個圈是高雄。' },
      { id: 't5-t04', type: 'mc', q: '雲林縣屬於哪一區？', opts: ['中部', '北部', '南部', '東部'], a: 0, why: '雲林縣在彰化縣南邊、嘉義縣北邊，屬於中部。' },
      { id: 't5-t05', type: 'puzzle', q: '牌子寫的是島屬於哪個縣。把三個島放回地圖。', fig: TW, pieces: isl([['penghu', '澎湖縣'], ['kinmen', '金門縣'], ['lanyu', '蘭嶼（臺東縣）']]), why: '澎湖在臺灣海峽中間、金門在最西邊；蘭嶼在東南方海上，屬於臺東縣。' },
      { id: 't5-t06', type: 'tap', q: '北部放大圖：點出桃園市政府。', fig: NB, pins: ['taoyuan', 'keelung', 'yilan', 'hsinchuCity'], a: 'taoyuan', why: '桃園在臺北的西南方；再往西南是新竹，基隆在北端、宜蘭在東邊。' },
      { id: 't5-t07', type: 'mc', q: '嘉義市和嘉義縣是什麼關係？', opts: ['兩個不同的縣市', '同一個縣市', '嘉義市屬於嘉義縣'], a: 0, why: '嘉義市和嘉義縣是兩個不同的縣市，各有自己的政府；嘉義縣政府在太保市。' },
      { id: 't5-t08', type: 'drag', q: '圓圈是基隆市、彰化縣、臺南市、花蓮縣的縣市政府。把各自的區域拖上去。', fig: TW, pins: ['keelung', 'changhua', 'tainan', 'hualien'], items: [{ t: '北部', to: 'keelung' }, { t: '中部', to: 'changhua' }, { t: '南部', to: 'tainan' }, { t: '東部', to: 'hualien' }], why: '基隆在北部、彰化在中部、臺南在南部、花蓮在東部。' },
      { id: 't5-t09', type: 'mc', q: '下面哪一個縣政府，不在臺灣本島上？', opts: ['連江縣政府', '花蓮縣政府', '屏東縣政府', '宜蘭縣政府'], a: 0, why: '連江縣就是馬祖，縣政府在南竿島上；其他三個都在本島。' },
      { id: 't5-t10', type: 'tap', q: '中部放大圖：點出南投縣政府。', fig: CB, pins: ['nantou', 'changhua', 'douliu', 'miaoli'], a: 'nantou', why: '南投縣在臺灣正中間、不靠海；南投市在彰化的東南方。' }
    ]
  });
})();
