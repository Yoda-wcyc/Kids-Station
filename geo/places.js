/* geo/places.js — 🌍 地理的地點資料表（2026-11-08）：地名、經緯度、所屬洲與國家。
   用途：地理單元的地圖題（點地圖、拖地名、看圖選答的「甲乙丙」標記）都用這裡的 id；之後「歷史漫畫的地點在地圖上亮起來」也查這張表（還沒串）。
   欄位：n 名稱（臺灣用語）、lon 經度（東經正、西經負）、lat 緯度（北緯正、南緯負）、co 洲代碼（as 亞 eu 歐 af 非 na 北美 sa 南美 oc 大洋 an 南極；海洋＝所在或最靠近的洲，
         oce 表示大洋本身）、cn 國家或地區（ISO 3166-1 二碼，臺灣＝TW；海、海峽、大洋＝''）、k 種類（island 島、islands 群島、cape 岬角、city 城市、sea 海、strait 海峽、
         ocean 洋、land 陸塊、country 國家標示點、sandbar 沙洲、airport 機場、port 港口）、area 1＝畫大圈（一片區域，不是一個點）、islet 1＝臺灣地圖上畫成小島點（Natural Earth 1:10m 沒有這個島的輪廓）。
   經緯度查核：取到小數第 2 位（約 1 公里），以政府或維基百科條目的座標為準；海、海峽、國家是「地圖上標字的位置」不是精確中心（note 註明）。
   新增地點只加不改 id（題目、錯題紀錄都用 id）；同一個地方不要重複建。 */
(function (root) {
  'use strict';
  var P = {
    // ---- 臺灣本島四極（康軒、南一五上社會：北 富貴角、南 鵝鑾鼻、東 三貂角、西 外傘頂洲）----
    fuguei: { n: '富貴角', lon: 121.54, lat: 25.30, co: 'as', cn: 'TW', k: 'cape', note: '新北市石門區，臺灣本島最北端' },
    eluanbi: { n: '鵝鑾鼻', lon: 120.85, lat: 21.90, co: 'as', cn: 'TW', k: 'cape', note: '屏東縣恆春鎮，臺灣本島最南端' },
    sandiao: { n: '三貂角', lon: 122.00, lat: 25.01, co: 'as', cn: 'TW', k: 'cape', note: '新北市貢寮區，臺灣本島最東端' },
    waisan: { n: '外傘頂洲', lon: 120.07, lat: 23.49, co: 'as', cn: 'TW', k: 'sandbar', note: '雲林縣外海的沙洲，臺灣本島最西端（沙洲會移動，座標是 Natural Earth 輪廓中心）' },
    // ---- 臺灣本島、城市 ----
    taiwan: { n: '臺灣本島', lon: 120.95, lat: 23.75, co: 'as', cn: 'TW', k: 'island', area: 1 },
    taipei: { n: '臺北', lon: 121.56, lat: 25.04, co: 'as', cn: 'TW', k: 'city' },
    kaohsiung: { n: '高雄', lon: 120.30, lat: 22.62, co: 'as', cn: 'TW', k: 'city' },
    taichung: { n: '臺中', lon: 120.68, lat: 24.14, co: 'as', cn: 'TW', k: 'city' },
    hualien: { n: '花蓮', lon: 121.60, lat: 23.98, co: 'as', cn: 'TW', k: 'city' },
    chiayi: { n: '嘉義', lon: 120.45, lat: 23.48, co: 'as', cn: 'TW', k: 'city', note: '嘉義市；北回歸線經過嘉義縣水上鄉' },
    // ---- 機場、港口（地圖技能〈圖例〉用）----
    tpeAirport: { n: '桃園國際機場', lon: 121.23, lat: 25.08, co: 'as', cn: 'TW', k: 'airport', note: '桃園市大園區' },
    khhAirport: { n: '高雄國際機場', lon: 120.35, lat: 22.58, co: 'as', cn: 'TW', k: 'airport', note: '高雄市小港區' },
    keelungPort: { n: '基隆港', lon: 121.74, lat: 25.14, co: 'as', cn: 'TW', k: 'port', note: '基隆市' },
    taichungPort: { n: '臺中港', lon: 120.51, lat: 24.29, co: 'as', cn: 'TW', k: 'port', note: '臺中市梧棲區' },
    hualienPort: { n: '花蓮港', lon: 121.63, lat: 23.98, co: 'as', cn: 'TW', k: 'port', note: '花蓮縣花蓮市' },
    // ---- 離島（所屬縣市寫在 note）----
    penghu: { n: '澎湖群島', lon: 119.57, lat: 23.57, co: 'as', cn: 'TW', k: 'islands', area: 1, note: '澎湖縣，在臺灣海峽中' },
    kinmen: { n: '金門', lon: 118.38, lat: 24.45, co: 'as', cn: 'TW', k: 'islands', area: 1, note: '金門縣，靠近中國大陸福建省廈門' },
    matsu: { n: '馬祖', lon: 119.95, lat: 26.16, co: 'as', cn: 'TW', k: 'islands', area: 1, note: '連江縣（南竿、北竿、莒光、東引），靠近福建省閩江口；標示點在南竿' },
    nangan: { n: '南竿', lon: 119.93, lat: 26.15, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '連江縣' },
    beigan: { n: '北竿', lon: 120.00, lat: 26.22, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '連江縣' },
    juguang: { n: '莒光', lon: 119.95, lat: 25.97, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '連江縣' },
    dongyin: { n: '東引', lon: 120.49, lat: 26.37, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '連江縣，我國實際管轄最北的地方之一' },
    ludao: { n: '綠島', lon: 121.49, lat: 22.66, co: 'as', cn: 'TW', k: 'island', note: '臺東縣，在臺灣本島東南方的太平洋上' },
    lanyu: { n: '蘭嶼', lon: 121.55, lat: 22.05, co: 'as', cn: 'TW', k: 'island', note: '臺東縣，達悟族（雅美族）的家鄉' },
    liuqiu: { n: '小琉球', lon: 120.37, lat: 22.34, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '屏東縣琉球鄉，珊瑚礁島' },
    guishan: { n: '龜山島', lon: 121.95, lat: 24.84, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '宜蘭縣頭城鎮外海的火山島' },
    pengjia: { n: '彭佳嶼', lon: 122.08, lat: 25.63, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '基隆市，臺灣本島東北方' },
    dongsha: { n: '東沙群島', lon: 116.72, lat: 20.70, co: 'as', cn: 'TW', k: 'islands', islet: 1, note: '南海北部，高雄市代管；標示點在東沙島' },
    taiping: { n: '太平島', lon: 114.37, lat: 10.38, co: 'as', cn: 'TW', k: 'island', islet: 1, note: '南沙群島中最大的自然島，高雄市旗津區管轄' },
    // ---- 臺灣四周的海 ----
    twStrait: { n: '臺灣海峽', lon: 119.85, lat: 24.55, co: 'as', cn: '', k: 'strait', area: 1, note: '臺灣和中國大陸之間；標字位置' },
    bashi: { n: '巴士海峽', lon: 121.05, lat: 21.30, co: 'as', cn: '', k: 'strait', area: 1, note: '臺灣和菲律賓之間；標字位置' },
    eastChinaSea: { n: '東海', lon: 122.10, lat: 26.10, co: 'as', cn: '', k: 'sea', area: 1, note: '臺灣北方；標字位置' },
    southChinaSea: { n: '南海', lon: 115.50, lat: 16.50, co: 'as', cn: '', k: 'sea', area: 1, note: '臺灣西南方的大片海域；標字位置在南海中間（東亞圖用，臺灣圖的範圍裡看不到）' },
    twPacific: { n: '太平洋', lon: 122.20, lat: 23.10, co: 'oce', cn: '', k: 'ocean', area: 1, note: '臺灣東方的太平洋；只用在臺灣地圖上的標字位置（世界地圖另建）' },
    asiaMain: { n: '亞洲大陸', lon: 118.40, lat: 25.75, co: 'as', cn: 'CN', k: 'land', area: 1, note: '臺灣地圖左上角的中國大陸（福建）一帶；標字位置' },
    // ---- 臺灣的鄰居（國家標示點，不是首都）----
    china: { n: '中國大陸', lon: 113.00, lat: 28.50, co: 'as', cn: 'CN', k: 'country', area: 1, note: '東亞地圖上標字的位置（華中）' },
    japan: { n: '日本', lon: 131.50, lat: 32.50, co: 'as', cn: 'JP', k: 'country', area: 1, note: '東亞地圖上標字的位置（九州）' },
    okinawa: { n: '琉球群島（沖繩）', lon: 127.80, lat: 26.50, co: 'as', cn: 'JP', k: 'islands', note: '日本沖繩縣；在臺灣東北方' },
    korea: { n: '韓國', lon: 127.80, lat: 36.30, co: 'as', cn: 'KR', k: 'country', area: 1 },
    philippines: { n: '菲律賓', lon: 121.20, lat: 16.30, co: 'as', cn: 'PH', k: 'country', area: 1, note: '東亞地圖上標字的位置（呂宋島）' },
    vietnam: { n: '越南', lon: 106.00, lat: 16.00, co: 'as', cn: 'VN', k: 'country', area: 1 },
    // ---- 之後的單元（每一筆後面都加逗號）：在這下面用「// ---- <單元> <標題> ----」開自己的分區，只加不改（規則見 geo/CONTRACT.md 第 6 節）----
  };
  if (typeof module === 'object' && module.exports) module.exports = P;
  root.GeoPlaces = P;
})(typeof window !== 'undefined' ? window : globalThis);
