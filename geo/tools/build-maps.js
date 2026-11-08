/* geo/tools/build-maps.js — 產生 geo/maps/tw.js、geo/maps/world.js（地圖輪廓的唯一來源；不要手改產出檔）。
   來源：Natural Earth 4.1.0（公有領域）經 npm 套件 world-atlas 2.0.2（ISC，https://github.com/topojson/world-atlas）。
   用法：node geo/tools/build-maps.js <world-atlas 套件資料夾（裡面有 countries-10m.json、countries-110m.json）>
         取得套件：在一個空資料夾 `npm pack world-atlas@2.0.2` → 解壓 → 傳 package 資料夾。不准用其他網站的地圖檔。
   - tw.js：臺灣（含澎湖、金門、綠島、蘭嶼、外傘頂洲；Natural Earth 1:10m 沒有馬祖、小琉球、龜山島等小島 → 畫成 places.js 的 islet 點）
           ＋框內的中國大陸沿岸（ctx，金門、馬祖旁邊那一段）。座標 ×100 取整（0.01 度 ≈ 1 公里）。
   - world.js：各國（1:110m）＋洲代碼 c（af 非洲、as 亞洲、eu 歐洲、na 北美洲、sa 南美洲、oc 大洋洲、an 南極洲）。座標 ×10 取整。
     跨洲的國家拆成好幾筆（同一個 id、不同 c）：俄羅斯以東經 60 度（約烏拉山）切成歐、亞；法屬圭亞那歸南美洲；
     印尼的新幾內亞島西半部歸大洋洲；美國的夏威夷歸大洋洲。土耳其、哈薩克、埃及照主要部分（亞、亞、非）。 */
'use strict';
const fs = require('fs'), path = require('path'), T = require('./topo.js');
const SRC = process.argv[2];
if (!SRC || !fs.existsSync(path.join(SRC, 'countries-10m.json'))) { console.error('用法：node geo/tools/build-maps.js <world-atlas 套件資料夾>'); process.exit(1); }
const OUT = path.join(__dirname, '..', 'maps');
const HEAD = '/* 自動產生：node geo/tools/build-maps.js（不要手改）。\n   地圖資料出處：Natural Earth（https://www.naturalearthdata.com/，公有領域 public domain）4.1.0，\n   經 npm 套件 world-atlas 2.0.2（ISC 授權，https://github.com/topojson/world-atlas）轉成 TopoJSON；本站再簡化、取整。\n';
const flat = (r, q) => { const o = []; r.forEach(([x, y]) => { const a = Math.round(x * q), b = Math.round(y * q), n = o.length; if (n && o[n - 2] === a && o[n - 1] === b) return; o.push(a, b); }); return o; };
const ok = r => r.length >= 8;   // 至少 4 個點

// ---------- 臺灣 ----------
{
  const o = T.decode(JSON.parse(fs.readFileSync(path.join(SRC, 'countries-10m.json'))));
  const BOX = [117.4, 20.6, 122.6, 26.7], Q = 100, TOL = 0.012;
  const tw = o.countries.find(c => c.name === 'Taiwan');
  // 每一塊陸地照位置取名（拼圖、標示用）：main 臺灣本島、penghu 澎湖群島、kinmen 金門、ludao 綠島、lanyu 蘭嶼、waisan 外傘頂洲
  const nameOf = b => { const x = (b[0] + b[2]) / 2, y = (b[1] + b[3]) / 2;
    return x < 118.7 ? 'kinmen' : x < 119.9 ? 'penghu' : x < 120.2 && y > 23.3 && y < 23.7 ? 'waisan' : x > 121.3 && y < 22.2 ? 'lanyu' : x > 121.3 && y < 22.8 ? 'ludao' : 'main'; };
  const land = {};
  tw.polys.forEach(p => { const r = flat(T.dp(p[0], TOL), Q); if (!ok(r)) return; const k = nameOf(T.bbox(p[0])); (land[k] = land[k] || []).push(r); });
  if (!land.main || land.main.length !== 1 || !land.penghu || !land.kinmen || !land.lanyu || !land.ludao) { console.error('臺灣的陸地分類跟預期不同：', Object.keys(land).map(k => k + ':' + land[k].length)); process.exit(1); }
  const ctx = [];
  o.countries.filter(c => c.name !== 'Taiwan').forEach(c => c.polys.forEach(p => {
    const b = T.bbox(p[0]); if (b[2] < BOX[0] || b[0] > BOX[2] || b[3] < BOX[1] || b[1] > BOX[3]) return;
    const r = T.clip(T.dp(p[0], TOL), BOX); if (r.length >= 4 && Math.abs(T.area(r)) > 0.0005) ctx.push(flat(r, Q));
  }));
  const js = HEAD + '   臺灣：Admin 0 Taiwan（1:10m），Douglas–Peucker 0.012 度；land＝依位置取名的陸地（main 本島、penghu 澎湖、kinmen 金門、ludao 綠島、lanyu 蘭嶼、waisan 外傘頂洲）；\n   ctx＝框內其他國家的陸地（裁到框邊，box 外沒有資料）。馬祖、小琉球、龜山島等 1:10m 沒有的小島畫成 places.js 的 islet 點。*/\n' +
    'window.GeoMaps = window.GeoMaps || {};\nGeoMaps.tw = ' + JSON.stringify({ q: Q, box: BOX, land, ctx }) + ';\n';
  fs.writeFileSync(path.join(OUT, 'tw.js'), js);
  console.log('tw.js', js.length, 'bytes; land', Object.keys(land).map(k => k + ':' + land[k].map(r => r.length / 2).join('+')).join(' '), '; ctx rings', ctx.length);
}

// ---------- 世界 ----------
{
  const o = T.decode(JSON.parse(fs.readFileSync(path.join(SRC, 'countries-110m.json'))));
  const Q = 10, TOL = 0.3;
  const C = {
    af: 'Tanzania|W. Sahara|Dem. Rep. Congo|Somalia|Kenya|Sudan|Chad|South Africa|Lesotho|Zimbabwe|Botswana|Namibia|Senegal|Mali|Mauritania|Benin|Niger|Nigeria|Cameroon|Togo|Ghana|Côte d\'Ivoire|Guinea|Guinea-Bissau|Liberia|Sierra Leone|Burkina Faso|Central African Rep.|Congo|Gabon|Eq. Guinea|Zambia|Malawi|Mozambique|eSwatini|Angola|Burundi|Madagascar|Gambia|Tunisia|Algeria|Eritrea|Morocco|Egypt|Libya|Ethiopia|Djibouti|Somaliland|Uganda|Rwanda|S. Sudan',
    as: 'Kazakhstan|Uzbekistan|Indonesia|Timor-Leste|Israel|Lebanon|Palestine|Jordan|United Arab Emirates|Qatar|Kuwait|Iraq|Oman|Cambodia|Thailand|Laos|Myanmar|Vietnam|North Korea|South Korea|Mongolia|India|Bangladesh|Bhutan|Nepal|Pakistan|Afghanistan|Tajikistan|Kyrgyzstan|Turkmenistan|Iran|Syria|Armenia|Turkey|Sri Lanka|China|Taiwan|Azerbaijan|Georgia|Philippines|Malaysia|Brunei|Japan|Yemen|Saudi Arabia|N. Cyprus|Cyprus',
    eu: 'Russia|Norway|France|Sweden|Belarus|Ukraine|Poland|Austria|Hungary|Moldova|Romania|Lithuania|Latvia|Estonia|Germany|Bulgaria|Greece|Albania|Croatia|Switzerland|Luxembourg|Belgium|Netherlands|Portugal|Spain|Ireland|Italy|Denmark|United Kingdom|Iceland|Slovenia|Finland|Slovakia|Czechia|Bosnia and Herz.|Macedonia|Serbia|Montenegro|Kosovo',
    na: 'Canada|United States of America|Haiti|Dominican Rep.|Bahamas|Greenland|Mexico|Panama|Costa Rica|Nicaragua|Honduras|El Salvador|Guatemala|Belize|Puerto Rico|Jamaica|Cuba|Trinidad and Tobago',
    sa: 'Argentina|Chile|Falkland Is.|Uruguay|Brazil|Bolivia|Peru|Colombia|Venezuela|Guyana|Suriname|Ecuador|Paraguay',
    oc: 'Fiji|Papua New Guinea|Vanuatu|New Caledonia|Solomon Is.|New Zealand|Australia',
    an: 'Antarctica|Fr. S. Antarctic Lands'
  };
  const cont = {}; Object.keys(C).forEach(k => C[k].split('|').forEach(n => { cont[n] = k; }));
  const miss = o.countries.filter(c => !cont[c.name]).map(c => c.name);
  if (miss.length) { console.error('沒有洲代碼：', miss); process.exit(1); }
  // world-atlas 的環沒有在 ±180 度切開（d3 畫的時候才切）：跨過的環（斐濟、俄羅斯楚科奇、南極洲）先把西經 +360 接成連續的，再切成 180 度以西、以東兩塊
  function cutAnti(p) {
    const r = p[0]; if (!r.some((q, i) => i && Math.abs(q[0] - r[i - 1][0]) > 180)) return [p];
    const u = r.map(([x, y]) => [x < 0 ? x + 360 : x, y]), out = [];
    const a = T.clip(u, [-180, -90, 180, 90]), b = T.clip(u, [180, -90, 540, 90]).map(([x, y]) => [x - 360, y]);
    if (a.length >= 4) out.push([a]); if (b.length >= 4) out.push([b]);
    return out;   // 跨 180 度的環只有外環；內環（湖）在這幾國沒有
  }
  // 每個多邊形（外環＋內環）歸哪一洲；俄羅斯整塊用東經 60 度切
  function parts(c) {
    const out = [];
    [].concat(...c.polys.map(cutAnti)).forEach(p => {
      const b = T.bbox(p[0]), cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;
      let k = cont[c.name];
      if (c.name === 'France' && cx < -30) k = 'sa';
      if (c.name === 'Indonesia' && cx > 130) k = 'oc';
      if (c.name === 'United States of America' && cx < -150 && cy < 30) k = 'oc';
      if (c.name === 'Russia' && b[0] < 60 && b[2] > 60) {
        out.push({ k: 'eu', rings: [T.clip(p[0], [-180, -90, 60, 90])] }, { k: 'as', rings: [T.clip(p[0], [60, -90, 180, 90])] });
        return;
      }
      if (c.name === 'Russia' && b[0] >= 60) k = 'as';
      if (c.name === 'Russia' && b[2] <= -160) k = 'as';   // 楚科奇半島跨過 180 度的那一小塊
      out.push({ k, rings: p });
    });
    return out;
  }
  const countries = [];
  o.countries.forEach(c => {
    const by = {};
    parts(c).forEach(({ k, rings }) => { const rs = rings.map(r => flat(T.dp(r, TOL), Q)).filter(ok); if (rs.length) (by[k] = by[k] || []).push(...rs.map((r, i) => (i ? { h: r } : r))); });
    Object.keys(by).forEach(k => {
      // 一個多邊形的內環（湖、賴索托）標成 {h:[…]}，畫的時候跟前一個外環同一條 path（evenodd 挖洞）
      countries.push({ id: c.id || c.name, n: c.name, c: k, r: by[k] });
    });
  });
  const js = HEAD + '   世界：Admin 0 countries（1:110m），Douglas–Peucker 0.3 度，座標 ×10 取整。r＝環的陣列，{h:[…]}＝上一個外環的洞。\n   c＝洲代碼（同一國跨洲時拆成幾筆，規則見 geo/tools/build-maps.js 檔頭）。*/\n' +
    'window.GeoMaps = window.GeoMaps || {};\nGeoMaps.world = ' + JSON.stringify({ q: Q, countries }) + ';\n';
  fs.writeFileSync(path.join(OUT, 'world.js'), js);
  console.log('world.js', js.length, 'bytes;', countries.length, 'entries');
}
