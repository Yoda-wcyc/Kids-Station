/* 🌍 地理・世界篇 6〈大洋洲〉（2026-11-08）。格式見 geo/CONTRACT.md；樣本 t1.js。五大洋裡的「太平洋」併在這一課。
   內容（國小五、六年級）：大洋洲＝澳洲大陸、紐西蘭、新幾內亞島和太平洋上的許多島嶼，大部分在南半球，是陸地面積最小的一洲；
   太平洋最大、最深（最深處馬里亞納海溝超過 1 萬公尺）；澳洲（首都坎培拉、最大城市雪梨、中部乾燥多沙漠、人多住在東部沿海、南回歸線通過、
   大堡礁、烏魯魯、無尾熊和袋鼠、鴨嘴獸會下蛋）；紐西蘭（北島、南島、首都威靈頓、最大城市奧克蘭、毛利人、奇異鳥）；新幾內亞島是世界第二大島；
   夏威夷、斐濟等太平洋島嶼；臺灣原住民的語言和太平洋島嶼的語言同屬南島語系；南半球的季節和臺灣相反（聖誕節在夏天）。
   不出：美拉尼西亞、密克羅尼西亞、玻里尼西亞三大群島的名稱（國中範圍）、換日線與時差、洋流、各國邦交。
   查核（2026-11-08，下列頁面都打開看過）：
   - 陸地面積最小的一洲、約 900 萬平方公里、最大國家澳洲、最大城市雪梨：維基百科 Oceania（en.wikipedia.org/wiki/Oceania）
   - 太平洋是五大洋裡最大、最深，比全世界陸地加起來還大、約占地表 32%：維基百科 Pacific Ocean；面積約 1.55 億平方公里、「by far the largest」：NOAA（oceanservice.noaa.gov/facts/pacific.html）
   - 最深處挑戰者深淵在馬里亞納海溝南端、約 10,935 公尺：NOAA（oceanservice.noaa.gov/facts/oceandepth.html）、維基百科 Challenger Deep（座標 11.37N 142.59E）
   - 澳洲面積 7,688,287 平方公里：澳洲地球科學局 Geoscience Australia（ga.gov.au，Areas of Australia）；首都坎培拉（為了在雪梨和墨爾本之間折衷而建）：維基百科 Canberra；
     人口集中在東部沿海（eastern seaboard）：維基百科 Australia；除了南極洲以外最乾的一洲、80% 的地方年雨量不到 600 公釐：澳洲統計局 ABS Year Book Australia 2012
   - 南回歸線（南緯約 23.44 度）通過澳洲（西澳、北領地、昆士蘭）：維基百科 Tropic of Capricorn；聖誕節在南半球的夏天：維基百科 Christmas in Australia
   - 大堡礁是世界最大的珊瑚礁群、在昆士蘭外海的珊瑚海、長 2,300 公里以上、1981 年列入世界遺產：維基百科 Great Barrier Reef
   - 烏魯魯是澳洲中部（北領地）的巨大砂岩、高約 348 公尺、原住民阿南古人的聖地：維基百科 Uluru、烏魯魯－卡塔丘塔國家公園網站（uluru.gov.au）
   - 無尾熊是有育兒袋的有袋類、吃尤加利樹葉；鴨嘴獸只有澳洲有、會下蛋：澳洲博物館（australian.museum 的 Koala、Platypus 頁）
   - 紐西蘭：北島、南島，首都威靈頓、最大城市奧克蘭，毛利語是官方語言，在澳洲東邊隔著塔斯曼海：維基百科 New Zealand；奇異鳥不會飛、是國家的象徵：紐西蘭保育部（doc.govt.nz，Kiwi）
   - 新幾內亞島是世界第二大島，東半部是巴布亞紐幾內亞、西半部屬於印尼：維基百科 New Guinea；夏威夷是美國的一州、太平洋中部的火山群島：維基百科 Hawaii
   - 臺灣原住民的語言（臺灣南島語）屬於南島語系，南島語系分布在太平洋各島：維基百科 Austronesian languages
   地點經緯度見 places.js（w6 分區）。印度洋（w3 的範圍）只當誘答位置，用題目裡的臨時點，不另外出題。
   地圖：OC＝大洋洲全圖、AU＝澳洲、SEAU＝澳洲東南部（雪梨、坎培拉太近，要放大才分得開）、NZ＝紐西蘭、PAC＝太平洋（看得到臺灣、夏威夷、馬里亞納海溝）。
   地圖限制：world.js 是 1:110m，斐濟、萬那杜這類小島國只有幾個小點，薩摩亞、東加、吐瓦魯等沒有輪廓 → 不出這些國家的輪廓題。
   跨換日線的圖（PAC 東邊到東經 215 度）：夏威夷、太平洋這些西經的地點，引擎會自動換到換日線東邊，直接寫 places.js 的 id。

   🎬 開場漫畫草稿（geo/comics/w6.js 之後由負責引擎的人做；主角阿凱、小禾，時光搖搖車「換地方」模式，去現代的大洋洲）：
   1. 十二月，臺北冷到發抖。阿凱把十元硬幣丟進搖搖車：「我要去溫暖的地方！」小禾抱著筆記本：「哥，你要轉的是『地方』，不是『年代』！」
   2. 搖搖車：「嗶——本站：澳洲雪梨。今天氣溫：夏天。」兩人穿著羽絨外套站在雪梨歌劇院前，旁邊的人穿短袖、戴聖誕帽在海邊烤肉。阿凱：「聖誕老公公穿短褲？！」
   3. 小禾翻地圖：「我們從北半球跑到南半球了——季節剛好相反！」搖搖車畫出路線：一路往南、飛過一大片藍色：「本車剛剛經過全世界最大的太平洋。」
   4. 搖搖車咻地載他們看大堡礁的珊瑚、袋鼠跳過紅色沙漠、紐西蘭的北島和南島；毛利阿嬤對小禾說了一個字，小禾發現跟阿美族的外婆講的「眼睛」好像（南島語系）。
   5. 收尾：小禾在筆記本寫下「大洋洲大部分在南半球：季節和臺灣相反」。阿凱脫下外套：「那我們回臺灣，換我過夏天——」搖搖車：「嗶——回程請再投十元。」
   （要孩子記住的一件事：大洋洲在太平洋西南、大部分在南半球，季節和臺灣相反。草稿第 4 格的南島語「眼睛」mata 見維基百科 Austronesian languages；阿美族的說法要給漫畫的人再查。
   2026-11-08 已做成 geo/comics/w6.js：阿美語 mata＝眼睛（原住民族語言線上辭典）、毛利語 mata＝臉、眼睛（Te Aka Māori Dictionary），查得到，保留。） */
(function () {
  'use strict';
  var OC = { map: 'world', box: [105, -50, 195, 12] };
  var OCL = { map: 'world', box: [105, -50, 195, 12], lines: [{ lat: 0, t: '赤道', c: '#c2410c' }, { lat: -23.44, t: '南回歸線' }] };
  var AU = { map: 'world', box: [110, -45, 157, -8] };
  var SEAU = { map: 'world', box: [139, -40, 155, -30] };
  var NZ = { map: 'world', box: [158, -48, 180, -33] };
  var PAC = { map: 'world', box: [105, -50, 215, 30] };
  var IO = { id: 'ioWest', n: '印度洋', lon: 112, lat: -38, area: 1 };   // 只當誘答位置（印度洋在 w3 出題）
  var sh = function (id, t, w) { return { id: id, t: t, shape: { w: w } }; };
  var AUS = sh('au', '澳洲', '036'), NZL = sh('nz', '紐西蘭', '554'), PNG = sh('pg', '巴布亞紐幾內亞', '598'), FJI = sh('fj', '斐濟', '242');

  Geo.add({
    id: 'w6',
    learn: [
      { t: '大洋洲在哪裡', p: '大洋洲在太平洋的西南部，由澳洲大陸、紐西蘭、新幾內亞島和太平洋上許多島嶼組成。它是陸地面積最小的一洲，大部分在赤道以南的南半球，所以季節和臺灣相反。', fig: { map: 'world', box: [105, -50, 195, 12], lines: [{ lat: 0, t: '赤道', c: '#c2410c' }], names: ['australia', 'newZealand', 'papuaNewGuinea', 'fiji'] } },
      { t: '最大最深的太平洋', p: '太平洋是五大洋裡最大、最深的，比全世界的陸地加起來還大，最深的馬里亞納海溝超過 1 萬公尺。海上有夏威夷、斐濟等許多島嶼；臺灣原住民的語言和這些島上的語言，都屬於「南島語系」。', fig: { map: 'world', box: [105, -50, 215, 30], names: ['taiwan', 'marianaTrench', 'fiji', 'hawaii', { n: '太平洋', lon: -170, lat: 0, fs: 22 }] } },
      { t: '澳洲：一國一大陸', p: '澳洲一個國家就占了整個澳洲大陸。首都是坎培拉，最大的城市是雪梨。中部大多是乾燥的沙漠，大部分的人住在東部、東南部沿海。南回歸線從澳洲中間通過。', fig: { map: 'world', box: [110, -45, 157, -8], lines: [{ lat: -23.44, t: '南回歸線' }], names: ['sydney', 'perth', 'uluru'] } },
      { t: '澳洲的景點和動物', p: '東北外海的大堡礁是世界最大的珊瑚礁群；中部沙漠裡的巨石烏魯魯，是原住民的聖地。無尾熊、袋鼠把寶寶放在育兒袋裡養大；鴨嘴獸是會下蛋的哺乳動物，只有澳洲有。', fig: { map: 'world', box: [110, -45, 157, -8], names: ['greatBarrierReef', 'uluru'] } },
      { t: '紐西蘭', p: '紐西蘭在澳洲的東南方，中間隔著塔斯曼海，主要由北島和南島組成。首都是北島南端的威靈頓，最大的城市是奧克蘭。原住民是毛利人；不會飛的奇異鳥是紐西蘭的象徵。', fig: { map: 'world', box: [158, -48, 180, -33], names: ['northIsland', 'southIsland', 'wellington', 'auckland', 'tasmanSea'] } }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 'w6-p01', type: 'tap', q: '點出大洋洲裡面積最大的國家：澳洲。', fig: OC, pins: ['australia', 'newZealand', 'papuaNewGuinea'], a: 'australia', why: '澳洲一個國家就占了整個澳洲大陸，是大洋洲最大的國家；紐西蘭在東南方，巴布亞紐幾內亞在北方。' },
      { id: 'w6-p02', type: 'mc', q: '看地圖上的赤道。大洋洲大部分在哪一個半球？', fig: OCL, opts: ['南半球', '北半球', '一半一半'], a: 0, why: '赤道以南是南半球。澳洲、紐西蘭都在赤道南邊，所以大洋洲大部分在南半球。' },
      { id: 'w6-p03', type: 'drag', q: '把「澳洲」「紐西蘭」「巴布亞紐幾內亞」拖到地圖上對的位置。', fig: OC, pins: ['australia', 'newZealand', 'papuaNewGuinea'], items: [{ t: '澳洲', to: 'australia' }, { t: '紐西蘭', to: 'newZealand' }, { t: '巴布亞紐幾內亞', to: 'papuaNewGuinea' }], why: '最大的一塊是澳洲；東南方的兩個大島是紐西蘭；北邊新幾內亞島的東半部是巴布亞紐幾內亞。' },
      { id: 'w6-p04', type: 'mc', q: '世界上最大、也最深的大洋是哪一個？', opts: ['太平洋', '大西洋', '印度洋', '北冰洋'], a: 0, why: '太平洋比全世界的陸地加起來還大，最深的馬里亞納海溝也在太平洋。臺灣的東邊就是太平洋。' },
      { id: 'w6-p05', type: 'tap', q: '點出在澳洲東南方、隔著塔斯曼海的紐西蘭。', fig: OC, pins: ['fiji', 'newZealand', 'australia', 'papuaNewGuinea'], a: 'newZealand', why: '紐西蘭在澳洲的東南方，中間隔著塔斯曼海，主要是北島和南島兩個大島。' },
      { id: 'w6-p06', type: 'puzzle', q: '把澳洲、紐西蘭、巴布亞紐幾內亞拼回地圖上。', fig: OC, pieces: [AUS, NZL, PNG], why: '澳洲最大，在中間；紐西蘭是東南方兩個長長的島；巴布亞紐幾內亞在澳洲北方。' },
      { id: 'w6-p07', type: 'mc', q: '澳洲的首都是哪一個城市？', opts: ['坎培拉', '雪梨', '墨爾本', '伯斯'], a: 0, why: '雪梨是澳洲最大的城市，但首都是坎培拉。坎培拉是為了在雪梨和墨爾本之間折衷，特別蓋的首都。' },
      { id: 'w6-p08', type: 'tap', q: '點出澳洲東北方外海的大堡礁。', fig: AU, pins: ['greatBarrierReef', 'uluru', 'perth', 'tasmania'], a: 'greatBarrierReef', why: '大堡礁在澳洲東北方的珊瑚海裡，長 2,300 多公里，是世界最大的珊瑚礁群。' },
      { id: 'w6-p09', type: 'mc', q: '下面哪一種動物，是澳洲有名的動物？', opts: ['無尾熊', '北極熊', '大貓熊', '長頸鹿'], a: 0, why: '無尾熊住在澳洲東部的尤加利樹林，吃尤加利樹葉。北極熊住在北極，大貓熊在中國大陸，長頸鹿在非洲。' },
      { id: 'w6-p10', type: 'drag', q: '這是澳洲東南部。把「雪梨」「坎培拉」「墨爾本」拖到對的位置。', fig: SEAU, pins: ['sydney', 'canberra', 'melbourne'], items: [{ t: '雪梨', to: 'sydney' }, { t: '坎培拉', to: 'canberra' }, { t: '墨爾本', to: 'melbourne' }], why: '雪梨在東邊海岸；坎培拉在雪梨西南方的內陸；墨爾本在更南邊的海岸。' },
      // ---- 第 2 組 ----
      { id: 'w6-p11', type: 'mc', q: '地圖上的甲是臺灣、乙是澳洲。澳洲在臺灣的哪一方？', fig: { map: 'world', box: [105, -50, 215, 30], marks: [{ p: 'taiwan', t: '甲' }, { p: 'australia', t: '乙' }] }, opts: ['南方', '北方', '東方', '西方'], a: 0, why: '澳洲在臺灣的南方，中間隔著赤道。臺灣在北半球、澳洲在南半球。' },
      { id: 'w6-p12', type: 'tap', q: '點出澳洲中部沙漠裡的巨大石頭：烏魯魯。', fig: AU, pins: ['uluru', 'greatBarrierReef', 'perth', 'sydney'], a: 'uluru', why: '烏魯魯（又叫艾爾斯岩）在澳洲中部的沙漠，高約 348 公尺，是原住民的聖地。' },
      { id: 'w6-p13', type: 'drag', q: '把「北島」「南島」「塔斯曼海」拖到紐西蘭地圖上對的位置。', fig: NZ, pins: ['northIsland', 'southIsland', 'tasmanSea'], items: [{ t: '北島', to: 'northIsland' }, { t: '南島', to: 'southIsland' }, { t: '塔斯曼海', to: 'tasmanSea' }], why: '紐西蘭北邊的大島叫北島、南邊的叫南島；西邊的塔斯曼海隔開了紐西蘭和澳洲。' },
      { id: 'w6-p14', type: 'mc', q: '紐西蘭的原住民是哪一族？', opts: ['毛利人', '印地安人', '因紐特人', '阿美族'], a: 0, why: '紐西蘭的原住民是毛利人，毛利語是紐西蘭的官方語言。阿美族是臺灣的原住民，因紐特人住在北極一帶。' },
      { id: 'w6-p15', type: 'tap', q: '點出太平洋中間、屬於美國的夏威夷。', fig: PAC, pins: ['hawaii', 'fiji', 'newZealand', 'marianaTrench'], a: 'hawaii', why: '夏威夷是太平洋中部的火山群島，是美國的一州；斐濟在南太平洋，馬里亞納海溝在西北邊。' },
      { id: 'w6-p16', type: 'puzzle', q: '把澳洲、紐西蘭、巴布亞紐幾內亞、斐濟拼回地圖上。', fig: OC, pieces: [AUS, NZL, PNG, FJI], why: '澳洲最大；紐西蘭在東南方；巴布亞紐幾內亞在北方；斐濟是東邊太平洋上的小島。' },
      { id: 'w6-p17', type: 'tap', q: '點出太平洋最深的地方：馬里亞納海溝。', fig: PAC, pins: ['marianaTrench', 'hawaii', 'fiji', 'greatBarrierReef'], a: 'marianaTrench', why: '馬里亞納海溝在太平洋西北部，最深的地方超過 1 萬公尺，是全世界海洋最深的地方。' },
      { id: 'w6-p18', type: 'tap', q: '點出澳洲最大的城市：雪梨。', fig: SEAU, pins: ['canberra', 'sydney', 'melbourne'], a: 'sydney', why: '雪梨在東南部海岸，是澳洲最大的城市，有有名的雪梨歌劇院；首都坎培拉在它的西南方。' },
      { id: 'w6-p19', type: 'mc', q: '澳洲中部大多是什麼樣的地方？', opts: ['乾燥的沙漠', '冰雪覆蓋的高原', '茂密的熱帶雨林', '寒冷的針葉森林'], a: 0, why: '除了南極洲，澳洲是最乾的一洲。中部很少下雨，大多是沙漠，所以人多住在東部、東南部沿海。' },
      { id: 'w6-p20', type: 'drag', q: '把「大堡礁」「烏魯魯」「雪梨」拖到澳洲地圖上對的位置。', fig: AU, pins: ['greatBarrierReef', 'uluru', 'sydney'], items: [{ t: '大堡礁', to: 'greatBarrierReef' }, { t: '烏魯魯', to: 'uluru' }, { t: '雪梨', to: 'sydney' }], why: '大堡礁在東北外海；烏魯魯在中部沙漠；雪梨在東南部海岸。' },
      // ---- 第 3 組 ----
      { id: 'w6-p21', type: 'tap', q: '點出世界第二大島：新幾內亞島。', fig: OC, pins: ['tasmania', 'newGuinea', 'southIsland'], a: 'newGuinea', why: '新幾內亞島在澳洲北方，是世界第二大島；東半部是巴布亞紐幾內亞，西半部屬於印尼。' },
      { id: 'w6-p22', type: 'mc', q: '臺灣原住民的語言，和太平洋很多島上的語言，同屬哪一個語系？', opts: ['南島語系', '漢藏語系', '印歐語系'], a: 0, why: '臺灣原住民的語言屬於南島語系，夏威夷、紐西蘭毛利人等太平洋各島的語言也是。很多學者認為臺灣是南島語系的發源地。' },
      { id: 'w6-p23', type: 'drag', q: '把「太平洋」「珊瑚海」「塔斯曼海」拖到地圖上對的位置。', fig: OC, pins: ['pacificOcean', 'coralSea', 'tasmanSea', IO], items: [{ t: '太平洋', to: 'pacificOcean' }, { t: '珊瑚海', to: 'coralSea' }, { t: '塔斯曼海', to: 'tasmanSea' }], why: '珊瑚海在澳洲東北方（大堡礁在這裡）；塔斯曼海在澳洲和紐西蘭之間；更東邊一大片是太平洋。澳洲西邊是印度洋。' },
      { id: 'w6-p24', type: 'mc', q: '臺灣 12 月是冬天。同一個時候，澳洲是什麼季節？', opts: ['夏天', '冬天', '春天', '秋天'], a: 0, why: '臺灣在北半球、澳洲在南半球，季節剛好相反。所以澳洲人的聖誕節是在夏天過的。' },
      { id: 'w6-p25', type: 'puzzle', names: false, q: '這次拼圖片沒有名字。看形狀，把澳洲、紐西蘭、巴布亞紐幾內亞放回去。', fig: OC, pieces: [AUS, NZL, PNG], why: '最大、方方的是澳洲；兩個長長的島是紐西蘭；像一隻鳥的尾巴、在北邊的是巴布亞紐幾內亞。' },
      { id: 'w6-p26', type: 'tap', q: '點出紐西蘭的首都：在北島南端的威靈頓。', fig: NZ, pins: ['auckland', 'wellington', 'christchurch'], a: 'wellington', why: '威靈頓在北島最南端，是紐西蘭的首都；奧克蘭在北島北部，是最大的城市；基督城在南島。' },
      { id: 'w6-p27', type: 'mc', q: '為什麼大部分的澳洲人住在東部、東南部沿海，很少住在中部？', opts: ['中部大多是乾燥的沙漠', '中部太冷，一年到頭都在下大雪', '中部全是很高的大山', '中部被大湖淹沒'], a: 0, why: '澳洲中部很少下雨，大多是沙漠，不好種田、缺水；東部、東南部沿海雨水比較多，大城市都在那裡。' },
      { id: 'w6-p28', type: 'drag', q: '把「斐濟」「夏威夷」「紐西蘭」拖到太平洋地圖上對的位置。', fig: PAC, pins: ['fiji', 'hawaii', 'newZealand', 'marianaTrench'], items: [{ t: '斐濟', to: 'fiji' }, { t: '夏威夷', to: 'hawaii' }, { t: '紐西蘭', to: 'newZealand' }], why: '夏威夷在北邊的太平洋中部；斐濟在南太平洋、赤道以南；紐西蘭在最南邊、澳洲的東南方。' },
      { id: 'w6-p29', type: 'puzzle', outline: false, q: '地圖上只剩虛線圓圈。想想四個國家在哪裡，把拼圖片放回去。', fig: OC, pieces: [AUS, NZL, PNG, FJI], why: '澳洲在中間最大；紐西蘭在東南方；巴布亞紐幾內亞在澳洲北方；斐濟在最東邊的南太平洋上。' },
      { id: 'w6-p30', type: 'mc', q: '比一比七大洲的陸地面積，大洋洲是哪一種？', opts: ['最小的一洲', '最大的一洲', '第二大的一洲'], a: 0, why: '大洋洲的陸地面積約 900 萬平方公里，是七大洲裡最小的；最大的是亞洲。' }
    ],
    test: [
      { id: 'w6-t01', type: 'tap', q: '大洋洲最大的國家占了一整塊大陸。點出這個國家。', fig: OC, pins: ['papuaNewGuinea', 'australia', 'fiji'], a: 'australia', why: '澳洲一個國家就占了整個澳洲大陸，是大洋洲最大的國家。' },
      { id: 'w6-t02', type: 'mc', q: '大洋洲大部分的國家和島嶼，四周是哪一個大洋？', opts: ['太平洋', '大西洋', '北冰洋'], a: 0, why: '大洋洲在太平洋的西南部，澳洲東邊、紐西蘭和許多島嶼四周都是太平洋。' },
      { id: 'w6-t03', type: 'drag', q: '把「大堡礁」「烏魯魯」「伯斯」拖到澳洲地圖上對的位置。', fig: AU, pins: ['greatBarrierReef', 'uluru', 'perth', 'tasmania'], items: [{ t: '大堡礁', to: 'greatBarrierReef' }, { t: '烏魯魯', to: 'uluru' }, { t: '伯斯', to: 'perth' }], why: '大堡礁在東北外海、烏魯魯在中部沙漠、伯斯在西邊海岸。' },
      { id: 'w6-t04', type: 'puzzle', q: '把澳洲、紐西蘭、夏威夷拼回太平洋地圖上。', fig: PAC, pieces: [AUS, NZL, { id: 'hi', t: '夏威夷', shape: { w: '840', c: 'oc' } }], why: '澳洲在西南邊最大；紐西蘭在澳洲東南方；夏威夷在北邊的太平洋中部。' },
      { id: 'w6-t05', type: 'mc', q: '紐西蘭的首都是哪裡？', opts: ['威靈頓', '奧克蘭', '雪梨', '坎培拉'], a: 0, why: '紐西蘭的首都是北島南端的威靈頓；奧克蘭是紐西蘭最大的城市；雪梨、坎培拉在澳洲。' },
      { id: 'w6-t06', type: 'tap', q: '點出紐西蘭北邊的那一個大島：北島。', fig: NZ, pins: ['southIsland', 'tasmanSea', 'northIsland'], a: 'northIsland', why: '紐西蘭主要由北島、南島組成，首都威靈頓、最大城市奧克蘭都在北島。' },
      { id: 'w6-t07', type: 'mc', q: '澳洲人過聖誕節（12 月 25 日）的時候，是什麼季節？', opts: ['夏天', '冬天', '秋天'], a: 0, why: '澳洲在南半球，季節和北半球的臺灣相反：12 月是夏天。' },
      { id: 'w6-t08', type: 'drag', q: '把「澳洲」「紐西蘭」「夏威夷」拖到太平洋地圖上對的位置。', fig: PAC, pins: ['australia', 'newZealand', 'hawaii', 'fiji'], items: [{ t: '澳洲', to: 'australia' }, { t: '紐西蘭', to: 'newZealand' }, { t: '夏威夷', to: 'hawaii' }], why: '澳洲在西南邊；紐西蘭在澳洲東南方；夏威夷在北半球的太平洋中部。' },
      { id: 'w6-t09', type: 'mc', q: '下面關於太平洋的說法，哪一個正確？', opts: ['是最大的大洋', '是最小的大洋', '只在北半球', '比亞洲還小'], a: 0, why: '太平洋是五大洋裡最大、最深的，比全世界的陸地加起來還大，橫跨南、北半球。' },
      { id: 'w6-t10', type: 'tap', q: '點出世界最大的珊瑚礁群：大堡礁。', fig: AU, pins: ['perth', 'tasmania', 'uluru', 'greatBarrierReef'], a: 'greatBarrierReef', why: '大堡礁在澳洲東北方的珊瑚海，從太空都看得到，1981 年列入世界遺產。' }
    ]
  });
})();
