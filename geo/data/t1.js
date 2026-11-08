/* 🌍 地理・臺灣篇 1〈位置與範圍〉（2026-11-08）——臺灣篇的樣本單元，之後的 t2～t6 照這個寫。格式見 geo/CONTRACT.md。
   內容（國小五上社會第一單元的程度）：臺灣在亞洲大陸東南方、太平洋西側；四周的海（北 東海、東 太平洋、南 巴士海峽、西 臺灣海峽）；
   鄰居（西 中國大陸、東北 琉球群島與日本、南 菲律賓）；本島四極（北 富貴角、南 鵝鑾鼻、東 三貂角、西 外傘頂洲）；
   本島南北長約 394 公里、東西最寬約 144 公里；經緯度大約北緯 22～25 度、東經 120～122 度，北回歸線通過（嘉義縣、花蓮縣有標誌）；
   離島與管轄範圍（澎湖、金門、馬祖＝連江縣、綠島與蘭嶼＝臺東縣、小琉球＝屏東縣、龜山島＝宜蘭縣、東沙群島與太平島＝高雄市）。
   查核（2026-11-08）：四極、長寬、離島所屬縣市照內政部與各縣市政府網站的介紹；臺灣海峽最窄處約 130 公里（新竹—福建平潭）；地點經緯度見 places.js。
   地圖：TW＝臺灣（預設範圍）、TWB＝往南多一點（看得到巴士海峽）、RB＝東亞（看得到東沙、太平島和鄰國）。 */
(function () {
  'use strict';
  var TW = { map: 'tw' }, TWB = { map: 'tw', box: [117.9, 20.9, 122.9, 26.5] }, RB = { map: 'world', box: [104, 8, 134, 36] }, SEA = { map: 'world', box: [112, 15, 126, 28] };
  var isl = function (ids, names) { return ids.map(function (id) { return { id: id, t: names[id], shape: { tw: id } }; }); };
  var N = { main: '臺灣本島', penghu: '澎湖', kinmen: '金門', ludao: '綠島', lanyu: '蘭嶼' };

  Geo.add({
    id: 't1',
    learn: [
      { t: '臺灣在哪裡', p: '臺灣在亞洲大陸的東南方、太平洋的西邊。東北方有琉球群島和日本，南邊隔著巴士海峽是菲律賓，西邊隔著臺灣海峽是中國大陸。', fig: { map: 'world', box: [104, 8, 134, 36], names: ['china', 'japan', 'philippines', 'okinawa'] } },
      { t: '四周的海', p: '臺灣北邊是東海、東邊是太平洋、南邊是巴士海峽、西邊是臺灣海峽。臺灣海峽最窄的地方大約 130 公里。', fig: { map: 'tw', box: [117.9, 20.9, 122.9, 26.5], names: ['eastChinaSea', 'twPacific', 'bashi', 'twStrait'] } },
      { t: '本島的大小和四極', p: '本島南北長約 394 公里、東西最寬約 144 公里。最北富貴角、最南鵝鑾鼻、最東三貂角、最西外傘頂洲。大約在北緯 22～25 度、東經 120～122 度，北回歸線從中間通過。', fig: { map: 'tw', names: ['fuguei', 'eluanbi', 'sandiao', 'waisan'], lines: [{ lat: 23.44, t: '北回歸線' }] } },
      { t: '離島和管轄範圍', p: '除了臺灣本島，我國還管轄澎湖群島、金門、馬祖、綠島、蘭嶼、小琉球、龜山島等島嶼，還有南海的東沙群島和太平島。', fig: { map: 'tw', names: ['penghu', 'kinmen', 'matsu', 'ludao', 'lanyu'] } }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 't1-p01', type: 'tap', q: '臺灣西邊、隔著臺灣海峽的是哪裡？點出來。', fig: RB, pins: ['china', 'philippines', 'japan'], a: 'china', why: '臺灣的西邊隔著臺灣海峽是中國大陸。' },
      { id: 't1-p02', type: 'mc', q: '臺灣位在亞洲大陸的哪一方？', fig: RB, opts: ['東南方', '西北方', '東北方', '西南方'], a: 0, why: '臺灣在亞洲大陸的東南方、太平洋的西邊。' },
      { id: 't1-p03', type: 'drag', q: '把四個海的名字拖到臺灣四周對的位置。', fig: TWB, pins: ['eastChinaSea', 'twPacific', 'bashi', 'twStrait'], items: [{ t: '東海', to: 'eastChinaSea' }, { t: '太平洋', to: 'twPacific' }, { t: '巴士海峽', to: 'bashi' }, { t: '臺灣海峽', to: 'twStrait' }], why: '北邊東海、東邊太平洋、南邊巴士海峽、西邊臺灣海峽。' },
      { id: 't1-p04', type: 'tap', q: '點出臺灣本島最北端的富貴角。', fig: TW, pins: ['fuguei', 'eluanbi', 'waisan'], a: 'fuguei', why: '富貴角在新北市石門區，是臺灣本島最北端。' },
      { id: 't1-p05', type: 'mc', q: '臺灣東邊是哪一個大洋？', opts: ['太平洋', '印度洋', '大西洋', '北冰洋'], a: 0, why: '臺灣在太平洋的西邊，東邊就是太平洋。' },
      { id: 't1-p06', type: 'tap', q: '點出在臺灣海峽中間的澎湖群島。', fig: TW, pins: ['penghu', 'kinmen', 'ludao', 'matsu'], a: 'penghu', why: '澎湖群島在臺灣本島西邊的臺灣海峽中，屬於澎湖縣。' },
      { id: 't1-p07', type: 'puzzle', q: '把臺灣本島和四個島拼回地圖上。', fig: TW, pieces: isl(['main', 'penghu', 'kinmen', 'ludao', 'lanyu'], N), why: '澎湖在臺灣海峽、金門靠近中國大陸、綠島和蘭嶼在東南方海上（蘭嶼比較南）。' },
      { id: 't1-p08', type: 'mc', q: '臺灣本島大約在北緯幾度到幾度之間？', opts: ['北緯 22～25 度', '北緯 10～15 度', '北緯 30～35 度', '南緯 22～25 度'], a: 0, why: '臺灣本島大約在北緯 22 度到 25 度之間，北回歸線（約 23.5 度）從中間通過。' },
      { id: 't1-p09', type: 'tap', q: '點出屬於臺東縣、在臺灣東南方海上的綠島。', fig: TW, pins: ['ludao', 'liuqiu', 'guishan', 'penghu'], a: 'ludao', why: '綠島在臺東外海，屬於臺東縣；小琉球屬於屏東縣、龜山島屬於宜蘭縣。' },
      { id: 't1-p10', type: 'drag', q: '把「金門」「馬祖」「澎湖」拖到地圖上對的位置。', fig: TW, pins: ['kinmen', 'matsu', 'penghu'], items: [{ t: '金門', to: 'kinmen' }, { t: '馬祖', to: 'matsu' }, { t: '澎湖', to: 'penghu' }], why: '金門在最西邊（靠近廈門）、馬祖在最北邊（靠近閩江口）、澎湖在臺灣海峽中間。' },
      // ---- 第 2 組 ----
      { id: 't1-p11', type: 'tap', q: '臺灣南邊隔著巴士海峽的國家是哪一個？點出來。', fig: RB, pins: ['philippines', 'china', 'japan', 'vietnam'], a: 'philippines', why: '臺灣南邊隔著巴士海峽就是菲律賓。' },
      { id: 't1-p12', type: 'mc', q: '臺灣和中國大陸之間的海叫什麼？', opts: ['臺灣海峽', '巴士海峽', '太平洋', '東海'], a: 0, why: '臺灣和中國大陸之間是臺灣海峽；臺灣和菲律賓之間是巴士海峽。' },
      { id: 't1-p13', type: 'drag', q: '本島最北是富貴角、最南是鵝鑾鼻、最西是外傘頂洲。把地名放好。', fig: TW, pins: ['fuguei', 'eluanbi', 'waisan'], items: [{ t: '富貴角', to: 'fuguei' }, { t: '鵝鑾鼻', to: 'eluanbi' }, { t: '外傘頂洲', to: 'waisan' }], why: '富貴角在北端（新北市）、鵝鑾鼻在南端（屏東縣）、外傘頂洲在西邊海上（雲林縣外海）。' },
      { id: 't1-p14', type: 'mc', q: '臺灣本島從北到南，大約長多少公里？', opts: ['約 394 公里', '約 144 公里', '約 39 公里', '約 1000 公里'], a: 0, why: '本島南北長約 394 公里，東西最寬約 144 公里。' },
      { id: 't1-p15', type: 'tap', q: '點出在臺灣東北方的琉球群島（沖繩）。', fig: RB, pins: ['okinawa', 'philippines', 'china', 'dongsha'], a: 'okinawa', why: '琉球群島在臺灣的東北方，屬於日本的沖繩縣。' },
      { id: 't1-p16', type: 'mc', q: '北回歸線經過臺灣的哪兩個縣？（那裡有北回歸線標誌）', fig: { map: 'tw', lines: [{ lat: 23.44, t: '北回歸線' }] }, opts: ['嘉義縣和花蓮縣', '臺北市和基隆市', '高雄市和屏東縣', '宜蘭縣和桃園市'], a: 0, why: '北回歸線從臺灣中間通過，嘉義縣水上鄉和花蓮縣都有北回歸線標誌。' },
      { id: 't1-p17', type: 'puzzle', q: '把澎湖、金門、綠島、蘭嶼放回地圖上。', fig: TW, pieces: isl(['penghu', 'kinmen', 'ludao', 'lanyu'], N), why: '澎湖在海峽中間、金門在最西邊、綠島在臺東外海、蘭嶼在綠島南邊。' },
      { id: 't1-p18', type: 'tap', q: '點出南海北邊、屬於我國的東沙群島。', fig: RB, pins: ['dongsha', 'taiping', 'okinawa', 'philippines'], a: 'dongsha', why: '東沙群島在南海北部、臺灣西南方，由高雄市管轄。' },
      { id: 't1-p19', type: 'mc', q: '金門比較靠近哪裡？', fig: TW, opts: ['中國大陸', '日本本州', '菲律賓群島', '韓國本土'], a: 0, why: '金門在臺灣海峽西邊，離中國大陸福建省的廈門很近。' },
      { id: 't1-p20', type: 'drag', q: '把臺灣的鄰居拖到地圖上對的位置。', fig: RB, pins: ['china', 'japan', 'philippines'], items: [{ t: '中國大陸', to: 'china' }, { t: '日本', to: 'japan' }, { t: '菲律賓', to: 'philippines' }], why: '西邊是中國大陸、東北方是日本、南邊是菲律賓。' },
      // ---- 第 3 組 ----
      { id: 't1-p21', type: 'tap', q: '點出南沙群島裡最大的自然島：太平島。', fig: RB, pins: ['taiping', 'dongsha', 'philippines', 'vietnam'], a: 'taiping', why: '太平島在南海南邊的南沙群島，是那裡最大的自然島，由高雄市管轄。' },
      { id: 't1-p22', type: 'mc', q: '我國實際管轄的範圍，除了臺灣本島，還包括哪些？', opts: ['澎湖、金門、馬祖', '琉球群島、呂宋島', '海南島、香港', '濟州島、沖繩'], a: 0, why: '我國管轄臺灣、澎湖、金門、馬祖，以及東沙、太平島等島嶼。' },
      { id: 't1-p23', type: 'drag', q: '把四個小島的名字拖到地圖上對的位置。', fig: TW, pins: ['ludao', 'lanyu', 'liuqiu', 'guishan'], items: [{ t: '綠島', to: 'ludao' }, { t: '蘭嶼', to: 'lanyu' }, { t: '小琉球', to: 'liuqiu' }, { t: '龜山島', to: 'guishan' }], why: '綠島、蘭嶼在東南方（蘭嶼較南）；小琉球在屏東外海；龜山島在宜蘭外海（東北部）。' },
      { id: 't1-p24', type: 'mc', q: '臺灣在海上、位在東亞島嶼的中間，這個位置有什麼好處？', opts: ['船隻往來方便', '四周都是陸地，不靠海', '離所有的國家都很遠'], a: 0, why: '臺灣四面環海、在東亞航線的中間，海上交通方便，是船隻往來的要道。' },
      { id: 't1-p25', type: 'tap', q: '點出臺灣本島最東端的三貂角。', fig: TW, pins: ['sandiao', 'eluanbi', 'waisan'], a: 'sandiao', why: '三貂角在新北市貢寮區，是臺灣本島最東端。' },
      { id: 't1-p26', type: 'mc', q: '「連江縣」指的是哪一群島嶼？', opts: ['馬祖', '金門', '澎湖', '綠島'], a: 0, why: '馬祖列島屬於連江縣；金門是金門縣、澎湖是澎湖縣、綠島屬於臺東縣。' },
      { id: 't1-p27', type: 'puzzle', names: false, q: '這次拼圖片沒有名字。看形狀和大小，把三塊陸地放回去。', fig: TW, pieces: isl(['main', 'penghu', 'kinmen'], N), why: '最大的是臺灣本島；好幾小塊的是澎湖；靠近中國大陸那一塊是金門。' },
      { id: 't1-p28', type: 'tap', q: '點出在臺灣東北部外海、屬於宜蘭縣的火山島：龜山島。', fig: TW, pins: ['guishan', 'liuqiu', 'penghu'], a: 'guishan', why: '龜山島在宜蘭縣外海，是一座火山島；小琉球在西南邊的屏東外海。' },
      { id: 't1-p29', type: 'drag', q: '把「臺灣海峽」「巴士海峽」「南海」拖到對的位置。', fig: SEA, pins: ['twStrait', 'bashi', 'southChinaSea'], items: [{ t: '臺灣海峽', to: 'twStrait' }, { t: '巴士海峽', to: 'bashi' }, { t: '南海', to: 'southChinaSea' }], why: '臺灣海峽在臺灣西邊、巴士海峽在臺灣南邊、南海在西南方的一大片海。' },
      { id: 't1-p30', type: 'mc', q: '臺灣本島東西最寬的地方，大約多少公里？', opts: ['約 144 公里', '約 394 公里', '約 14 公里', '約 1440 公里'], a: 0, why: '本島東西最寬約 144 公里，南北長約 394 公里。' }
    ],
    test: [
      { id: 't1-t01', type: 'tap', q: '點出臺灣南方、隔著巴士海峽的菲律賓。', fig: RB, pins: ['vietnam', 'philippines', 'okinawa'], a: 'philippines', why: '菲律賓在臺灣南方，中間隔著巴士海峽。' },
      { id: 't1-t02', type: 'mc', q: '臺灣西邊隔著臺灣海峽的是哪裡？', opts: ['中國大陸', '日本本州', '菲律賓群島', '韓國本土'], a: 0, why: '臺灣海峽在臺灣和中國大陸之間。' },
      { id: 't1-t03', type: 'drag', q: '把四個海的名字拖到臺灣四周對的位置。', fig: TWB, pins: ['eastChinaSea', 'twPacific', 'bashi', 'twStrait'], items: [{ t: '東海', to: 'eastChinaSea' }, { t: '太平洋', to: 'twPacific' }, { t: '巴士海峽', to: 'bashi' }, { t: '臺灣海峽', to: 'twStrait' }], why: '北東海、東太平洋、南巴士海峽、西臺灣海峽。' },
      { id: 't1-t04', type: 'tap', q: '點出靠近中國大陸福建省的金門。', fig: TW, pins: ['kinmen', 'matsu', 'penghu', 'ludao'], a: 'kinmen', why: '金門在最西邊，靠近福建省的廈門。' },
      { id: 't1-t05', type: 'puzzle', q: '把臺灣本島、澎湖、金門、蘭嶼拼回地圖上。', fig: TW, pieces: isl(['main', 'penghu', 'kinmen', 'lanyu'], N), why: '本島最大；澎湖在海峽中間；金門在西邊；蘭嶼在東南方海上。' },
      { id: 't1-t06', type: 'mc', q: '臺灣本島最南端是哪裡？', opts: ['鵝鑾鼻', '富貴角', '三貂角', '外傘頂洲'], a: 0, why: '最南鵝鑾鼻、最北富貴角、最東三貂角、最西外傘頂洲。' },
      { id: 't1-t07', type: 'drag', q: '把「綠島」「蘭嶼」「澎湖」拖到地圖上對的位置。', fig: TW, pins: ['ludao', 'lanyu', 'penghu'], items: [{ t: '綠島', to: 'ludao' }, { t: '蘭嶼', to: 'lanyu' }, { t: '澎湖', to: 'penghu' }], why: '綠島、蘭嶼在東南方的太平洋上（蘭嶼較南），澎湖在西邊的臺灣海峽。' },
      { id: 't1-t08', type: 'tap', q: '點出南海北邊、屬於我國的東沙群島。', fig: RB, pins: ['taiping', 'dongsha', 'philippines'], a: 'dongsha', why: '東沙群島在南海北部、臺灣西南方；太平島在更南邊。' },
      { id: 't1-t09', type: 'mc', q: '臺灣本島大約在東經幾度到幾度之間？', opts: ['東經 120～122 度', '東經 100～102 度', '西經 120～122 度', '東經 140～142 度'], a: 0, why: '臺灣本島大約在東經 120～122 度、北緯 22～25 度。' },
      { id: 't1-t10', type: 'tap', q: '點出臺灣本島最北端的富貴角。', fig: TW, pins: ['waisan', 'fuguei', 'eluanbi'], a: 'fuguei', why: '富貴角在新北市石門區，是本島最北端。' }
    ]
  });
})();
