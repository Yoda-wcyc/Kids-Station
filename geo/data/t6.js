/* 🌍 地理・臺灣篇 6〈人口與產業分布〉（2026-11-08）。格式見 geo/CONTRACT.md。
   內容（國小五年級社會的程度）：臺灣人口約 2,300 萬、分布不平均（西部平原與都市多、高山與東部少）；人口最多 新北市、最密 臺北市、最少 連江縣；
   人口往都市移動；少子化、高齡化（2025 年成為超高齡社會）；一級（農林漁牧）、二級（工業）、三級（服務業）產業，服務業的人最多、農業約 4%；
   產業分布：新竹（第一座）、臺中、臺南科學園區（半導體等高科技）、雲林麥寮石化工業區（六輕）、嘉南平原（稻米、「穀倉」）、屏東東港（黑鮪魚）、臺東池上（池上米、花東縱谷）。
   不出人口金字塔（國中內容）。人口分布用示意圖（圖上寫「示意圖，不是真實統計」）。
   查核（2026-11-08）：
   - 總人口 23,213,251 人（115 年 9 月底）、65 歲以上占 20.70%（內政部戶政司 115-10-08 新聞〈115 年 9 月底人口統計〉）。
   - 2025 年 12 月 65 歲以上 467 萬 3,155 人、占 20.06%，依 WHO 標準（7% 高齡化、14% 高齡、20% 超高齡）進入超高齡社會（台灣英文新聞 2026-01-09，引內政部戶口統計）。
   - 人口最多 新北市：主計總處〈115 年 1 月 1 日常住人口統計結果〉（新北市 436.2 萬人最多、臺中市次之）；戶籍人口也超過 400 萬（英文維基百科 List of administrative divisions of Taiwan，2020 年 3 月 4,023,620 人）。
   - 人口密度最高 臺北市、人口最少 連江縣（12,716 人）、密度最低 臺東縣：英文維基百科 List of administrative divisions of Taiwan（2020 年 3 月資料）。
   - 就業者 114 年平均：農林漁牧業 4.18%、工業 34.81%、服務業 61.01%（勞動部統計資料庫轉載主計總處人力資源調查，表「就業者按行業分」）。
   - 新竹科學園區 1980 年完成、臺灣第一座科學園區、積體電路約占七成（中文維基百科「新竹科學園區」）；中科臺中園區在西屯區、大雅區交界（「中部科學園區」）；南科臺南園區在新市、善化、安定區（「南部科學園區」）。
   - 六輕在雲林縣麥寮鄉，填海造地，煉油、石化（中文維基百科「六輕」）；嘉南平原是本島最大的平原、稻米產地、「穀倉」（「嘉南平原」）；
     東港漁港是臺灣最大的黑鮪魚產區（「東港鎮 (台灣)」）；池上鄉在花東縱谷，出產池上米（「池上鄉」）。 */
(function () {
  'use strict';
  var TW = { map: 'tw' }, P = GeoPlaces, twV = Geo.view(TW);
  function t(x, y, s, fs, c) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + (fs || 15) + '" font-weight="800" fill="' + (c || '#263445') + '" stroke="#fff" stroke-width="4" paint-order="stroke">' + s + '</text>'; }
  function rect(x, y, w, h) { return 'M' + x + ' ' + y + 'L' + (x + w) + ' ' + y + 'L' + (x + w) + ' ' + (y + h) + 'L' + x + ' ' + (y + h) + 'Z'; }
  function at(id) { return twV.P(P[id].lon, P[id].lat); }
  // ---- 人口分布示意圖（點點多寡只是示意，不是真實統計）----
  var DOTS = (function () {
    var o = '', C = [['taipei', 34], ['banqiao', 22], ['taoyuan', 18], ['hsinchuCity', 8], ['taichung', 26], ['changhua', 10], ['chiayi', 7], ['tainan', 18], ['kaohsiung', 26], ['pingtung', 7], ['yilan', 5], ['hualien', 4], ['taitung', 3]];
    C.forEach(function (c) { var p = at(c[0]); for (var k = 0; k < c[1]; k++) { var a = k * 2.4, r = 4 + (k % 6) * 4.5; o += '<circle cx="' + Math.round(p[0] + r * Math.cos(a)) + '" cy="' + Math.round(p[1] + r * Math.sin(a)) + '" r="3.5" fill="#c2410c"/>'; } });
    return o + '<rect x="8" y="560" width="238" height="40" rx="8" fill="#fff" stroke="#c9b48a" stroke-width="2"/>' + t(127, 586, '人口分布示意圖（不是真實統計）', 14, '#7a3d0c');
  })();
  var POP = { map: 'tw', svg: DOTS, alt: '人口分布示意圖' };
  var MT = { id: 'mt', n: '中央山脈山區', lon: 121.05, lat: 23.55 };   // 示意圖上「沒有點點的高山」
  // ---- 三種產業的示意圖：pic＝畫圖示、名字放下面；names＝上面寫產業名稱 ----
  var IND = { p1: ['一級產業', '農、林、漁、牧', '🌾 🐟 🐄'], p2: ['二級產業', '工業', '🏭 🔧'], p3: ['三級產業', '服務業', '🏪 🏥 🏦'] };
  function ind(keys, names) {
    var o = ['<rect width="500" height="360" fill="#fbfaf6"/>'];
    keys.forEach(function (k, i) { var x = 15 + i * 160; o.push('<rect x="' + x + '" y="10" width="150" height="250" rx="12" fill="#eef7ff" stroke="#c9b48a" stroke-width="2"/>' + (names ? t(x + 75, 110, IND[k][0], 20) + t(x + 75, 145, IND[k][1], 15, '#555') : '<text x="' + (x + 75) + '" y="150" text-anchor="middle" font-size="34">' + IND[k][2] + '</text>')); });
    o.push(t(250, 352, '（示意圖）', 12, '#666'));
    return { svg: o.join(''), w: 500, h: 360, alt: names ? '三種產業的名稱' : '三種產業的圖示' };
  }
  function indPins(keys) { return keys.map(function (k, i) { return { id: k, n: ['左邊', '中間', '右邊'][i] + '的框', x: 90 + i * 160, y: 305 }; }); }
  // 重點卡的地名：[地點, 字, dx, dy, 對齊]
  function lab(list) { return list.map(function (a) { var p = at(a[0]); return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#c2410c"/>' + '<text x="' + (p[0] + a[2]) + '" y="' + (p[1] + a[3]) + '" text-anchor="' + a[4] + '" font-size="15" font-weight="800" fill="#263445" stroke="#fff" stroke-width="4" paint-order="stroke">' + a[1] + '</text>'; }).join(''); }
  function sign(list) { return list.map(function (a) { var p = at(a[0]); return { id: a[0], t: a[1], shape: { d: rect(Math.round(p[0] - 9), Math.round(p[1] - 9), 18, 18) } }; }); }
  var SCI = sign([['hsinchuSciPark', '新竹科學園區'], ['ctspTaichung', '中部科學園區'], ['stspTainan', '南部科學園區']]);

  Geo.add({
    id: 't6',
    learn: [
      { t: '臺灣有多少人', p: '臺灣大約有 2,300 萬人（2026 年 9 月底約 2,321 萬人）。人口分布不平均：西部平原和大都市住的人多，高山和東部住的人少。', fig: POP },
      { t: '人最多、最密、最少', p: '人口最多的縣市是新北市，超過 400 萬人；人口最密（每平方公里住最多人）的是臺北市；人口最少的是連江縣（馬祖），只有一萬多人。', fig: { map: 'tw', svg: lab([['banqiao', '新北市（人最多）', -12, 22, 'end'], ['taipei', '臺北市（最密）', 0, -14, 'end'], ['nangan', '連江縣（最少）', 12, 5, 'start']]) } },
      { t: '人口的變化', p: '很多人為了工作、讀書，從鄉村搬到都市。出生的孩子越來越少（少子化），老人越來越多：2025 年 65 歲以上的人超過 20%，臺灣成為「超高齡社會」。' },
      { t: '三種產業', p: '一級產業是農、林、漁、牧，直接向大自然取得東西；二級產業是工業，在工廠製造東西；三級產業是服務業，像商店、醫院、銀行、觀光。臺灣約六成的人做服務業，農業只占約 4%。', fig: ind(['p1', 'p2', 'p3'], true) },
      { t: '產業在哪裡', p: '新竹、臺中、臺南有科學園區，做半導體等高科技；雲林麥寮有石化工業區；嘉南平原是稻米產地，被叫做「穀倉」；屏東東港以黑鮪魚出名；臺東池上出產池上米。', fig: { map: 'tw', names: ['hsinchuSciPark', 'ctspTaichung', 'stspTainan', 'mailiao', 'donggang', 'chishang'] } }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 't6-p01', type: 'mc', q: '臺灣現在大約有多少人？', opts: ['約 2,300 萬人', '約 230 萬人', '約 2 億 3,000 萬人', '約 23 萬人'], a: 0, why: '臺灣大約有 2,300 萬人；2026 年 9 月底是 2,321 萬多人，這幾年慢慢減少。' },
      { id: 't6-p02', type: 'tap', q: '人口最多的縣市是新北市。點出新北市政府（在板橋）。', fig: TW, pins: ['banqiao', 'taichung', 'kaohsiung', 'hualien'], a: 'banqiao', why: '新北市在北部、把臺北市圍起來，人口超過 400 萬，是全國最多。' },
      { id: 't6-p03', type: 'mc', q: '種稻米、捕魚、養豬，屬於哪一種產業？', opts: ['一級產業', '二級產業', '三級產業'], a: 0, why: '農、林、漁、牧直接向大自然取得東西，是一級產業。' },
      { id: 't6-p04', type: 'drag', q: '把三種工作拖到對的產業下面。', fig: ind(['p1', 'p2', 'p3'], true), pins: indPins(['p1', 'p2', 'p3']), items: [{ t: '漁夫捕魚', to: 'p1' }, { t: '工廠做汽車', to: 'p2' }, { t: '醫生看病', to: 'p3' }], why: '捕魚是漁業（一級）；工廠製造是工業（二級）；醫院看病是服務業（三級）。' },
      { id: 't6-p05', type: 'tap', q: '新竹科學園區是臺灣第一座科學園區。點出它。', fig: TW, pins: ['hsinchuSciPark', 'stspTainan', 'donggang', 'hualien'], a: 'hsinchuSciPark', why: '新竹科學園區在北部的新竹，1980 年成立，以積體電路（晶片）為主。' },
      { id: 't6-p06', type: 'mc', q: '人口分布示意圖上，甲、乙、丙哪裡住的人最多？', fig: { map: 'tw', svg: DOTS, marks: [{ p: 'taichung', t: '甲' }, { p: 'hualien', t: '乙' }, { p: MT, t: '丙' }] }, opts: ['甲', '乙', '丙'], a: 0, why: '點點越密，住的人越多。甲在西部的臺中，點點最密；丙在中央山脈的山區，幾乎沒有人住。' },
      { id: 't6-p07', type: 'puzzle', outline: false, q: '三張圖是種田捕魚、工廠、商店醫院。把產業的名字放到每張圖下面。', fig: ind(['p1', 'p2', 'p3']), pieces: [{ id: 'p1', t: '一級產業', shape: { d: rect(81, 296, 18, 18) } }, { id: 'p2', t: '二級產業', shape: { d: rect(241, 296, 18, 18) } }, { id: 'p3', t: '三級產業', shape: { d: rect(401, 296, 18, 18) } }], why: '種田、捕魚、養牛是一級產業；工廠是二級產業；商店、醫院、銀行是三級產業。' },
      { id: 't6-p08', type: 'mc', q: '在醫院、商店、銀行工作，屬於哪一種產業？', opts: ['三級產業', '一級產業', '二級產業'], a: 0, why: '醫院、商店、銀行提供服務給別人，是服務業，也就是三級產業。' },
      { id: 't6-p09', type: 'tap', q: '人口最少的縣是連江縣（馬祖）。點出它。', fig: TW, pins: ['matsu', 'kinmen', 'penghu', 'ludao'], a: 'matsu', why: '連江縣就是馬祖，在最北邊、靠近福建，只有一萬多人，是人口最少的縣。' },
      { id: 't6-p10', type: 'mc', q: '臺灣哪一種產業的工作人數最多？', opts: ['服務業', '製造工業', '農林漁牧業'], a: 0, why: '臺灣約六成的人做服務業，約三成五做工業，農林漁牧業只有約 4%。' },
      // ---- 第 2 組 ----
      { id: 't6-p11', type: 'mc', q: '人口密度最高（每平方公里住最多人）的縣市是哪一個？', opts: ['臺北市', '新北市', '臺東縣', '連江縣'], a: 0, why: '臺北市面積小、人又多，人口密度最高；新北市人最多，但面積大很多。' },
      { id: 't6-p12', type: 'drag', q: '把三個科學園區拖到地圖上對的位置。', fig: TW, pins: ['hsinchuSciPark', 'ctspTaichung', 'stspTainan', 'hualien'], items: [{ t: '新竹科學園區', to: 'hsinchuSciPark' }, { t: '中部科學園區', to: 'ctspTaichung' }, { t: '南部科學園區', to: 'stspTainan' }], why: '新竹科學園區在北部、中部科學園區在臺中、南部科學園區在臺南，都在西部；東邊那個圈是花蓮。' },
      { id: 't6-p13', type: 'mc', q: '很多年輕人從鄉村搬到都市，最主要的原因是什麼？', opts: ['找工作、上學比較方便', '都市的空氣比較新鮮', '都市的房子比鄉村便宜很多'], a: 0, why: '都市的工作機會多、學校多，所以很多人為了工作、讀書搬到都市。' },
      { id: 't6-p14', type: 'tap', q: '雲林縣麥寮鄉有填海造陸的石化工業區（六輕）。點出麥寮。', fig: TW, pins: ['mailiao', 'donggang', 'hsinchuSciPark', 'chishang'], a: 'mailiao', why: '麥寮在雲林縣的西海岸，在海邊填海造地，蓋了煉油、石化工廠。' },
      { id: 't6-p15', type: 'mc', q: '65 歲以上的人超過 20%，這樣的社會叫做什麼？', opts: ['超高齡社會', '高齡化社會', '少子化社會'], a: 0, why: '65 歲以上超過 7% 叫高齡化社會、14% 叫高齡社會、20% 叫超高齡社會；臺灣 2025 年達到。' },
      { id: 't6-p16', type: 'tap', q: '嘉南平原是重要的稻米產地，被叫做「穀倉」。點出嘉南平原。', fig: TW, pins: ['chiananPlain', 'huadongValley', 'taichung', 'taipei'], a: 'chiananPlain', why: '嘉南平原在西南部（嘉義、臺南一帶），是本島最大的平原，盛產稻米。' },
      { id: 't6-p17', type: 'puzzle', outline: false, q: '把三個科學園區的牌子放回地圖：新竹（北部）、中部（臺中）、南部（臺南）。', fig: TW, pieces: SCI, why: '新竹科學園區在北部、中部科學園區在臺中、南部科學園區在臺南，三個都在西部。' },
      { id: 't6-p18', type: 'tap', q: '屏東縣東港是「黑鮪魚的故鄉」。點出東港。', fig: TW, pins: ['donggang', 'mailiao', 'chishang', 'keelungPort'], a: 'donggang', why: '東港在屏東縣西南邊的海岸，東港漁港是臺灣最大的黑鮪魚產區。' },
      { id: 't6-p19', type: 'mc', q: '臺灣東部住的人比西部少，主要原因是什麼？', opts: ['山多、平原少', '東部沒有學校', '東部天氣太冷'], a: 0, why: '東部有中央山脈和海岸山脈，平地很少；西部有大片平原，比較好蓋房子、種田、開工廠。' },
      { id: 't6-p20', type: 'drag', q: '把「麥寮」「東港」「池上」拖到地圖上對的位置。', fig: TW, pins: ['mailiao', 'donggang', 'chishang', 'hsinchuSciPark'], items: [{ t: '麥寮', to: 'mailiao' }, { t: '東港', to: 'donggang' }, { t: '池上', to: 'chishang' }], why: '麥寮在雲林西海岸（石化）、東港在屏東海邊（黑鮪魚）、池上在臺東的花東縱谷（稻米）。' },
      // ---- 第 3 組 ----
      { id: 't6-p21', type: 'tap', q: '人口分布示意圖：點出點點最少、住的人最少的地方。', fig: POP, pins: ['taipei', 'kaohsiung', MT], a: 'mt', why: '中央山脈的山區又高又陡，住的人很少；臺北、高雄是大都市，點點很密。' },
      { id: 't6-p22', type: 'mc', q: '科學園區主要發展哪一類產業？', opts: ['半導體等高科技', '種稻米和水果', '捕魚和養殖漁業', '觀光和旅館服務'], a: 0, why: '科學園區主要是半導體（晶片）、電腦、光電等高科技產業。' },
      { id: 't6-p23', type: 'drag', q: '把「人口最多」「人口最少」兩張卡拖到對的縣市。', fig: TW, pins: ['banqiao', 'nangan', 'taitung'], items: [{ t: '人口最多', to: 'banqiao' }, { t: '人口最少', to: 'nangan' }], why: '人口最多的是北部的新北市（板橋）；最少的是連江縣（馬祖的南竿）。下面那個圈是臺東。' },
      { id: 't6-p24', type: 'mc', q: '臺灣做農林漁牧業的人，大約占全部工作人數的多少？', opts: ['約 4%', '約 40%', '約 60%', '約 90%'], a: 0, why: '2025 年平均，農林漁牧業約 4%，工業約 35%，服務業約 61%。' },
      { id: 't6-p25', type: 'tap', q: '花東縱谷在中央山脈和海岸山脈之間，也種稻米。點出花東縱谷。', fig: TW, pins: ['huadongValley', 'chiananPlain', 'taichung'], a: 'huadongValley', why: '花東縱谷在東部，從花蓮延伸到臺東，是兩座山脈中間狹長的谷地。' },
      { id: 't6-p26', type: 'mc', q: '下面哪一個是「三級產業（服務業）」？', opts: ['導遊帶團旅行', '漁船出海捕魚', '工廠製造電腦'], a: 0, why: '導遊提供觀光服務，是三級產業；捕魚是一級、工廠製造是二級。' },
      { id: 't6-p27', type: 'puzzle', outline: false, q: '把產地的牌子放回地圖：石化工業（雲林麥寮）、黑鮪魚（屏東東港）、池上米（臺東）。', fig: TW, pieces: sign([['mailiao', '石化工業'], ['donggang', '黑鮪魚'], ['chishang', '池上米']]), why: '麥寮在雲林西海岸、東港在屏東的海邊、池上在臺東的花東縱谷裡。' },
      { id: 't6-p28', type: 'tap', q: '南部科學園區在臺南。點出它。', fig: TW, pins: ['stspTainan', 'ctspTaichung', 'hsinchuSciPark', 'donggang'], a: 'stspTainan', why: '南部科學園區在臺南市的新市、善化一帶；中部在臺中、新竹在北部。' },
      { id: 't6-p29', type: 'drag', q: '把「嘉南平原」「花東縱谷」拖到地圖上對的位置。', fig: TW, pins: ['chiananPlain', 'huadongValley', 'ctspTaichung'], items: [{ t: '嘉南平原', to: 'chiananPlain' }, { t: '花東縱谷', to: 'huadongValley' }], why: '嘉南平原在西南部（嘉義、臺南）；花東縱谷在東部（花蓮、臺東）。' },
      { id: 't6-p30', type: 'mc', q: '少子化、高齡化，會讓臺灣的人口出現什麼變化？', opts: ['老人變多、小孩變少', '老人變少、小孩變多', '老人和小孩都變多'], a: 0, why: '出生的孩子變少（少子化）、活得更久的老人變多（高齡化），所以老人的比例越來越高。' }
    ],
    test: [
      { id: 't6-t01', type: 'mc', q: '人口最多的縣市是哪一個？', opts: ['新北市', '臺北市', '高雄市', '臺東縣'], a: 0, why: '新北市人口超過 400 萬，是全國最多；臺北市是人口密度最高。' },
      { id: 't6-t02', type: 'tap', q: '點出臺灣第一座科學園區：新竹科學園區。', fig: TW, pins: ['stspTainan', 'hsinchuSciPark', 'mailiao'], a: 'hsinchuSciPark', why: '新竹科學園區在北部，1980 年成立；南部科學園區在臺南、麥寮在雲林。' },
      { id: 't6-t03', type: 'drag', q: '這三種工作各屬於哪一種產業？拖到對的框下面。', fig: ind(['p1', 'p2', 'p3'], true), pins: indPins(['p1', 'p2', 'p3']), items: [{ t: '種水稻', to: 'p1' }, { t: '鋼鐵廠煉鋼', to: 'p2' }, { t: '老師教書', to: 'p3' }], why: '種田是一級（農業）；煉鋼是二級（工業）；教書提供服務，是三級（服務業）。' },
      { id: 't6-t04', type: 'mc', q: '臺灣的總人口，最接近下面哪一個數字？', opts: ['2,300 萬人', '230 萬人', '2 億 3,000 萬人', '23 萬人'], a: 0, why: '臺灣大約 2,300 萬人（2026 年 9 月底約 2,321 萬人）。' },
      { id: 't6-t05', type: 'puzzle', outline: false, q: '新竹、臺中、臺南都有科學園區。把三塊牌子放回地圖。', fig: TW, pieces: SCI, why: '由北到南：新竹科學園區、中部科學園區（臺中）、南部科學園區（臺南）。' },
      { id: 't6-t06', type: 'tap', q: '點出黑鮪魚出名的東港（屏東縣）。', fig: TW, pins: ['chishang', 'donggang', 'mailiao'], a: 'donggang', why: '東港在臺灣西南部屏東縣的海邊；池上在東部、麥寮在雲林。' },
      { id: 't6-t07', type: 'mc', q: '在工廠裡製造電腦零件，屬於哪一種產業？', opts: ['二級產業', '一級產業', '三級產業'], a: 0, why: '在工廠加工、製造東西是工業，也就是二級產業。' },
      { id: 't6-t08', type: 'drag', q: '把「麥寮」「池上」拖到地圖上對的位置。', fig: TW, pins: ['mailiao', 'chishang', 'donggang'], items: [{ t: '麥寮', to: 'mailiao' }, { t: '池上', to: 'chishang' }], why: '麥寮在雲林的西海岸，有石化工業區；池上在臺東的花東縱谷，出產池上米。' },
      { id: 't6-t09', type: 'mc', q: '「超高齡社會」是指 65 歲以上的人超過多少？', opts: ['20%', '7%', '2%', '50%'], a: 0, why: '超過 7% 是高齡化社會、14% 是高齡社會、20% 是超高齡社會。' },
      { id: 't6-t10', type: 'tap', q: '點出人口最少的縣：連江縣（馬祖）。', fig: TW, pins: ['penghu', 'matsu', 'kinmen'], a: 'matsu', why: '連江縣（馬祖）在最北邊，人口只有一萬多人；澎湖、金門的人比較多。' }
    ]
  });
})();
