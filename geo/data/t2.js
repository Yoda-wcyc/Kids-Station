/* 🌍 地理・臺灣篇 2〈地形〉（2026-11-08）。格式見 geo/CONTRACT.md。
   內容（國小五上社會「臺灣的地形」的程度）：五種地形（山地 又高又陡、丘陵 較低起伏和緩、臺地 頂平邊陡、盆地 四周高中間低、平原 低而平坦）；
   臺灣山地面積最大、山脈大多南北走向；五大山脈（由東到西：海岸、中央、雪山、玉山、阿里山山脈；中央山脈最長、是全島主幹，海岸山脈最矮）；
   玉山約 3952 公尺（臺灣最高、東亞第一高峰）、雪山約 3886 公尺（第二高）；平原、盆地、臺地多在西部（嘉南平原最大、屏東平原、臺北盆地、臺中盆地、
   林口臺地、大肚臺地），東北部蘭陽平原、東部花東縱谷（中央山脈和海岸山脈之間）；地形和生活（平地好耕種、交通方便，山地交通不便）。
   不教：板塊名稱、地形成因細節、海岸地形分類（不確定是否在翰林五上的範圍，先不出）。
   查核（2026-11-08，都是實際打開看過的頁面）：
   - 五大山脈（由東到西）、中央山脈是全島主幹（北起蘇澳南至鵝鑾鼻）、玉山 3,952 公尺東亞第一高峰、山地面積最大、西部由北到南臺北盆地、桃竹苗臺地、
     臺中盆地、嘉南平原、屏東平原、河川多東西向是因為山脈南北走向：行政院國情簡介〈地文〉https://www.ey.gov.tw/state/4447F4A951A1EC45/52515c49-bcc0-45f5-bd5f-78c22c9d3f45
   - 玉山主峰：公視新聞網 https://news.pts.org.tw/article/399503（內政部國土測繪中心 2017 年測得 3952.430 公尺，玉管處官方標高維持 3952 公尺）
   - 雪山 3,886 公尺、臺灣第二高峰、雪山山脈最高點：交通部觀光署臺灣觀光資訊網 https://www.taiwan.net.tw/m1.aspx?id=3268&sNo=0001016
   - 中央山脈是臺灣最長的山脈、別稱「臺灣屋脊」：維基百科〈中央山脈〉；海岸山脈在本島東緣、北起花蓮溪口南到卑南溪口、五大山脈最矮：維基百科〈海岸山脈〉；
     花東縱谷夾在中央山脈和海岸山脈之間：維基百科〈花東縱谷〉；嘉南平原是本島最大的平原：維基百科〈嘉南平原〉；蘭陽平原在宜蘭縣、蘭陽溪沖積：維基百科〈蘭陽平原〉；
     臺北盆地西側是林口臺地：維基百科〈臺北盆地〉；林口、桃園、大肚臺地：維基百科〈臺灣地理〉。
   - 五種地形的說法（山地 1000 公尺以上起伏大、丘陵起伏小、臺地頂平邊陡、盆地四周高中間低、平原低而平坦）：國小社會教案的通用定義；題目只考形狀，不考公尺分界。
   地圖：TW＝本島放大（box 119.75～122.25、21.85～25.35，離島不在圖上）；山脈、平原、盆地、臺地都是 places.js 的「標字點」（地圖沒有地形高度，不在地圖上畫地形）。
   示意圖 SC（自己畫，圖上寫「示意圖」）：五種地形的側面（左邊是海）：平原、臺地、丘陵、山地、盆地。 */
(function () {
  'use strict';
  var TW = { map: 'tw', box: [119.75, 21.85, 122.25, 25.35] };   // 只看本島（放大，圓圈才不會擠）
  function t(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + (o.fs || 14) + '" font-weight="800" fill="' + (o.c || '#263445') + '" stroke="#fff" stroke-width="4" paint-order="stroke">' + s + '</text>'; }
  // ---- 示意圖：五種地形的側面（寬 500、高 360）----
  var LF = {   // 名稱、形狀（只用 M L Z）、顏色、標旗子的位置（地形最上面）、拖地名的圓圈位置
    plain: ['平原', 'M34 330L34 300L128 300L128 330Z', '#bfe3a5', [81, 298], [81, 296]],
    table: ['臺地', 'M132 330L132 300L144 232L196 232L208 300L208 330Z', '#e8cf8f', [170, 230], [170, 262]],
    hills: ['丘陵', 'M212 330L212 300L226 268L240 286L256 252L272 280L286 262L300 300L300 330Z', '#cfe3a0', [256, 250], [256, 300]],
    mount: ['山地', 'M304 330L304 300L326 196L338 214L362 70L380 150L392 128L408 300L408 330Z', '#d9a066', [362, 68], [356, 200]],
    basin: ['盆地', 'M412 330L412 300L424 196L440 290L474 290L488 200L500 300L500 330Z', '#f4d79b', [457, 288], [457, 312]]
  };
  // fill＝畫出地形；labels＝下面寫名字
  function scene(fill, labels) {
    var o = ['<rect width="500" height="360" fill="#eaf5ff"/><rect x="0" y="300" width="34" height="60" fill="#9cc9ee"/>' + t(17, 322, '海', { fs: 13, c: '#24527a' }),
      '<rect x="34" y="330" width="466" height="30" fill="#c9b48a"/>', t(250, 22, '示意圖（側面，高度沒有照比例）', { fs: 14, c: '#6b5a3a' })];
    Object.keys(LF).forEach(function (k) {
      var f = LF[k];
      if (fill) o.push('<path d="' + f[1] + '" fill="' + f[2] + '" stroke="#8a5a2b" stroke-width="2"/>');
      if (labels) o.push(t(pathMid(f[1]), 350, f[0], { fs: 14 }));
    });
    return { svg: o.join(''), w: 500, h: 360, alt: '五種地形的示意圖' };
  }
  function pathMid(d) { var n = d.match(/\d+/g).map(Number), xs = n.filter(function (v, i) { return i % 2 === 0; }); return Math.round((Math.min.apply(null, xs) + Math.max.apply(null, xs)) / 2); }
  var SC = scene(true, false), SC_L = scene(true, true), SC_E = scene(false, false);
  function pieces(keys) { return keys.map(function (k) { return { id: k, t: LF[k][0], shape: { d: LF[k][1] } }; }); }
  function flag(x, y) { return 'M' + (x - 2) + ' ' + (y - 26) + 'L' + (x + 2) + ' ' + (y - 26) + 'L' + (x + 2) + ' ' + (y - 18) + 'L' + (x + 22) + ' ' + (y - 12) + 'L' + (x + 2) + ' ' + (y - 6) + 'L' + (x + 2) + ' ' + (y + 4) + 'L' + (x - 2) + ' ' + (y + 4) + 'Z'; }
  function flags(keys) { return keys.map(function (k) { return { id: k, t: LF[k][0], shape: { d: flag(LF[k][3][0], LF[k][3][1]) } }; }); }
  function sp(k, n) { return { id: k, n: n || LF[k][0], x: LF[k][4][0], y: LF[k][4][1] }; }
  // 示意圖上標「甲」（引擎的 marks 示意圖也能用，座標＝示意圖座標）
  function mk(k) { return { svg: SC.svg, w: 500, h: 360, alt: '示意圖上標了甲', marks: [{ p: { id: k, x: LF[k][4][0], y: LF[k][4][1] - 20 }, t: '甲' }] }; }
  var TWR = { map: 'tw', box: TW.box, names: ['xueshanRange', 'centralRange', 'alishanRange', 'coastalRange', 'yushan'] };

  Geo.add({
    id: 't2',
    learn: [
      { t: '五種地形', p: '地表高高低低的樣子叫地形。山地又高又陡；丘陵比較低、起伏和緩；臺地頂部平平、邊緣是陡坡，像桌子；盆地四周高、中間低平，像臉盆；平原又低又平坦。', fig: SC_L },
      { t: '山多平地少', p: '臺灣的地形裡，山地占的面積最大。山脈大多是南北走向，由東到西是海岸山脈、中央山脈、雪山山脈、玉山山脈、阿里山山脈。中央山脈最長，是全島的主幹，被叫做「臺灣屋脊」。', fig: TWR },
      { t: '最高的山', p: '玉山主峰約 3952 公尺，是臺灣最高峰，也是東亞第一高峰，屬於玉山山脈。雪山約 3886 公尺，是臺灣第二高峰，屬於雪山山脈。海岸山脈在東部海邊，是五大山脈裡最矮的。', fig: { map: 'tw', box: TW.box, names: ['yushan', 'xueshan', 'coastalRange'] } },
      { t: '平原、盆地和臺地', p: '平原、盆地、臺地大多在西部：北部有臺北盆地、林口臺地，中部有臺中盆地、大肚臺地，南部有最大的嘉南平原和屏東平原。東北部有蘭陽平原；東部的花東縱谷夾在中央山脈和海岸山脈中間。', fig: { map: 'tw', box: TW.box, names: ['taipeiBasin', 'taichungBasin', 'chiananPlain', 'pingtungPlain', 'lanyang', 'huadongValley'] } },
      { t: '地形和生活', p: '平原地勢平坦，方便種田、蓋房子和修路，城市和人口比較多。山地又高又陡，交通不方便，住的人比較少，但有森林和美麗的風景。因為山脈南北走向，臺灣的河川大多往東、往西流。' }
    ],
    practice: [
      // ---- 第 1 組 ----
      { id: 't2-p01', type: 'mc', q: '「四周高、中間低平，像一個臉盆」的地形叫什麼？', opts: ['盆地', '平原', '臺地', '山地'], a: 0, why: '盆地四周被山或高地圍住、中間低平，形狀像臉盆。' },
      { id: 't2-p02', type: 'tap', q: '點出臺灣最高的山：玉山。', fig: TW, pins: ['yushan', 'xueshan', 'chiananPlain'], a: 'yushan', why: '玉山主峰約 3952 公尺，是臺灣最高峰，在南投、嘉義、高雄的交界。' },
      { id: 't2-p03', type: 'puzzle', q: '這是地形的示意圖。看形狀，把山地、平原、盆地拼回去。', fig: SC_E, pieces: pieces(['plain', 'mount', 'basin']), why: '又低又平的長條是平原；又高又尖的是山地；兩邊高、中間低平的是盆地。' },
      { id: 't2-p04', type: 'mc', q: '臺灣的地形裡，哪一種占的面積最大？', opts: ['山地', '平原', '盆地', '臺地'], a: 0, why: '臺灣山多平地少，山地占的面積最大；平原、盆地大多在西部。' },
      { id: 't2-p05', type: 'tap', q: '點出臺灣本島最大的平原：嘉南平原。', fig: TW, pins: ['chiananPlain', 'pingtungPlain', 'lanyang', 'taipeiBasin'], a: 'chiananPlain', why: '嘉南平原在西南部（雲林、嘉義、臺南一帶），是本島最大的平原。' },
      { id: 't2-p06', type: 'drag', q: '把「山地」「臺地」「平原」拖到示意圖上對的地形。', fig: SC, pins: [sp('plain'), sp('table'), sp('mount')], items: [{ t: '山地', to: 'mount' }, { t: '臺地', to: 'table' }, { t: '平原', to: 'plain' }], why: '最高最尖的是山地；頂部平平、邊緣陡的是臺地；靠海又低又平的是平原。' },
      { id: 't2-p07', type: 'mc', q: '臺灣的山脈大多是什麼走向？', opts: ['南北走向', '東西走向', '圍成一個圓圈', '沒有一定方向'], a: 0, why: '臺灣的山脈大多從北往南排，是南北走向；所以河川大多往東、往西流。' },
      { id: 't2-p08', type: 'tap', q: '點出在臺灣北部的臺北盆地。', fig: TW, pins: ['taipeiBasin', 'taichungBasin', 'chiananPlain'], a: 'taipeiBasin', why: '臺北盆地在北部，臺北市和新北市的很多地方都在裡面；臺中盆地在中部。' },
      { id: 't2-p09', type: 'drag', q: '把「臺地」「丘陵」「盆地」拖到示意圖上對的地形。', fig: SC, pins: [sp('table'), sp('hills'), sp('basin')], items: [{ t: '臺地', to: 'table' }, { t: '丘陵', to: 'hills' }, { t: '盆地', to: 'basin' }], why: '頂部平平、邊緣陡的是臺地；一個個小起伏的是丘陵；兩邊高、中間低平的是盆地。' },
      { id: 't2-p10', type: 'tap', q: '點出臺灣第二高的山：雪山。', fig: TW, pins: ['xueshan', 'yushan', 'lanyang'], a: 'xueshan', why: '雪山約 3886 公尺，是第二高峰，屬於雪山山脈；玉山比它高。' },
      // ---- 第 2 組 ----
      { id: 't2-p11', type: 'drag', q: '把「玉山」「雪山」「嘉南平原」拖到地圖上對的位置。', fig: TW, pins: ['yushan', 'xueshan', 'chiananPlain'], items: [{ t: '玉山', to: 'yushan' }, { t: '雪山', to: 'xueshan' }, { t: '嘉南平原', to: 'chiananPlain' }], why: '雪山在比較北邊（臺中、苗栗交界），玉山在中部偏南，嘉南平原在西南部靠海。' },
      { id: 't2-p12', type: 'mc', q: '玉山主峰大約多高？', opts: ['約 3952 公尺', '約 395 公尺', '約 39520 公尺', '約 1000 公尺'], a: 0, why: '玉山主峰約 3952 公尺，是臺灣最高、也是東亞第一高峰。' },
      { id: 't2-p13', type: 'tap', q: '點出臺灣最長的山脈：中央山脈。', fig: TW, pins: ['centralRange', 'coastalRange', 'alishanRange'], a: 'centralRange', why: '中央山脈從宜蘭蘇澳一直到南端的鵝鑾鼻，是最長的山脈，在本島的正中間。' },
      { id: 't2-p14', type: 'mc', q: '中央山脈為什麼被叫做「臺灣屋脊」？', opts: ['縱貫南北，是全島的主幹', '在海邊，是最矮的山脈', '只在北部，靠近臺北', '東西走向，橫在中間'], a: 0, why: '中央山脈又長又高，從北到南貫穿全島，像房子最高的屋脊。' },
      { id: 't2-p15', type: 'puzzle', q: '看形狀，把五種地形拼回示意圖上。', fig: SC_E, pieces: pieces(['plain', 'table', 'hills', 'mount', 'basin']), why: '從海邊往內：平原最低最平、臺地頂平邊陡、丘陵小小起伏、山地又高又尖、盆地兩邊高中間低。' },
      { id: 't2-p16', type: 'tap', q: '點出在宜蘭縣、臺灣東北部的蘭陽平原。', fig: TW, pins: ['lanyang', 'chiananPlain', 'pingtungPlain', 'taichungBasin'], a: 'lanyang', why: '蘭陽平原在東北部的宜蘭縣，是蘭陽溪沖積成的平原。' },
      { id: 't2-p17', type: 'mc', q: '花東縱谷夾在哪兩條山脈中間？', opts: ['中央山脈和海岸山脈', '雪山山脈和玉山山脈', '阿里山山脈和玉山山脈'], a: 0, why: '花東縱谷在花蓮、臺東，西邊是中央山脈、東邊是海岸山脈。' },
      { id: 't2-p18', type: 'drag', q: '把「臺北盆地」「臺中盆地」「屏東平原」拖到地圖上。', fig: TW, pins: ['taipeiBasin', 'taichungBasin', 'pingtungPlain', 'chiananPlain'], items: [{ t: '臺北盆地', to: 'taipeiBasin' }, { t: '臺中盆地', to: 'taichungBasin' }, { t: '屏東平原', to: 'pingtungPlain' }], why: '臺北盆地在北部、臺中盆地在中部、屏東平原在南部；多出來的那個圈是嘉南平原。' },
      { id: 't2-p19', type: 'mc', q: '示意圖上甲是哪一種地形？', fig: mk('hills'), opts: ['丘陵', '臺地', '盆地', '平原'], a: 0, why: '甲比山地低很多，一個個小小的起伏，坡度和緩，是丘陵。' },
      { id: 't2-p20', type: 'tap', q: '點出在東部海邊、五大山脈裡最矮的海岸山脈。', fig: TW, pins: ['coastalRange', 'centralRange', 'alishanRange'], a: 'coastalRange', why: '海岸山脈在花蓮、臺東的海邊，是五大山脈中最矮的；西邊隔著花東縱谷就是中央山脈。' },
      // ---- 第 3 組 ----
      { id: 't2-p21', type: 'drag', q: '把三條山脈的名字拖到地圖上。多一個圈是別的山脈。', fig: TW, pins: ['centralRange', 'xueshanRange', 'coastalRange', 'alishanRange'], items: [{ t: '中央山脈', to: 'centralRange' }, { t: '雪山山脈', to: 'xueshanRange' }, { t: '海岸山脈', to: 'coastalRange' }], why: '雪山山脈在北邊、中央山脈在正中間、海岸山脈在東部海邊；西邊那個是阿里山山脈。' },
      { id: 't2-p22', type: 'mc', q: '臺灣的五大山脈，最東邊的是哪一條？', opts: ['海岸山脈', '阿里山山脈', '雪山山脈', '中央山脈'], a: 0, why: '由東到西是海岸山脈、中央山脈、雪山山脈、玉山山脈、阿里山山脈。' },
      { id: 't2-p23', type: 'puzzle', outline: false, q: '旗子上寫著地形的名字，把每一面旗子插到對的地形上。', fig: SC, pieces: flags(['plain', 'table', 'hills', 'mount', 'basin']), why: '最低最平的是平原、像桌子的是臺地、小小起伏的是丘陵、最高的是山地、兩邊高中間低的是盆地。' },
      { id: 't2-p24', type: 'mc', q: '臺灣的城市為什麼大多蓋在西部的平原上？', opts: ['地勢平坦，方便耕種和交通', '山很多，適合蓋很高的樓', '離海最遠，不會颳大風'], a: 0, why: '平原平坦，好種田、好蓋房子、好修路，城市和人口就比較多。' },
      { id: 't2-p25', type: 'tap', q: '點出五大山脈裡最西邊的阿里山山脈。', fig: TW, pins: ['alishanRange', 'centralRange', 'coastalRange'], a: 'alishanRange', why: '阿里山山脈在玉山山脈的西邊，再往西就是嘉南平原。' },
      { id: 't2-p26', type: 'tap', q: '點出在臺中市、臺中盆地西邊的大肚臺地。', fig: TW, pins: ['dadu', 'linkou', 'chiananPlain', 'lanyang'], a: 'dadu', why: '大肚臺地在中部的臺中市；林口臺地在北部。臺地比平原高、頂部平坦、邊緣陡。' },
      { id: 't2-p27', type: 'tap', q: '點出在臺北盆地西邊的林口臺地。', fig: TW, pins: ['linkou', 'lanyang', 'taichungBasin', 'chiananPlain'], a: 'linkou', why: '林口臺地在臺北盆地的西邊（新北、桃園交界）；臺中盆地西邊的是大肚臺地。' },
      { id: 't2-p28', type: 'mc', q: '玉山約 3952 公尺、雪山約 3886 公尺。哪一座高？高多少？', opts: ['玉山，高約 66 公尺', '雪山，高約 66 公尺', '玉山，高約 166 公尺', '兩座一樣高'], a: 0, why: '3952－3886＝66，所以玉山比雪山高約 66 公尺。' },
      { id: 't2-p29', type: 'drag', q: '把「蘭陽平原」「花東縱谷」「嘉南平原」拖到地圖上。', fig: TW, pins: ['lanyang', 'huadongValley', 'chiananPlain', 'pingtungPlain'], items: [{ t: '蘭陽平原', to: 'lanyang' }, { t: '花東縱谷', to: 'huadongValley' }, { t: '嘉南平原', to: 'chiananPlain' }], why: '蘭陽平原在東北部宜蘭、花東縱谷在東部花蓮臺東、嘉南平原在西南部；多的那個是屏東平原。' },
      { id: 't2-p30', type: 'mc', q: '山地為什麼住的人比較少？', opts: ['又高又陡，交通不方便', '太平坦了，不好住人', '四周都是海，船到不了'], a: 0, why: '山地坡度陡、道路難修，交通不方便，住的人比平原少。' }
    ],
    test: [
      { id: 't2-t01', type: 'tap', q: '點出臺灣的最高峰：玉山。', fig: TW, pins: ['lanyang', 'yushan', 'xueshan', 'pingtungPlain'], a: 'yushan', why: '玉山約 3952 公尺，是臺灣最高峰；雪山約 3886 公尺，第二高。' },
      { id: 't2-t02', type: 'mc', q: '「地勢又低又平坦」的地形是哪一種？', opts: ['平原', '山地', '丘陵', '盆地'], a: 0, why: '平原又低又平；盆地雖然中間平，但四周被高地圍住。' },
      { id: 't2-t03', type: 'drag', q: '把「嘉南平原」「屏東平原」「蘭陽平原」拖到地圖上。', fig: TW, pins: ['chiananPlain', 'pingtungPlain', 'lanyang'], items: [{ t: '嘉南平原', to: 'chiananPlain' }, { t: '屏東平原', to: 'pingtungPlain' }, { t: '蘭陽平原', to: 'lanyang' }], why: '嘉南平原在西南部、屏東平原在南部、蘭陽平原在東北部的宜蘭。' },
      { id: 't2-t04', type: 'puzzle', outline: false, q: '把寫著「山地」「臺地」「盆地」「平原」的旗子插到對的地形上。', fig: SC, pieces: flags(['plain', 'table', 'mount', 'basin']), why: '最高的是山地、頂平邊陡的是臺地、兩邊高中間低的是盆地、靠海又低又平的是平原。' },
      { id: 't2-t05', type: 'mc', q: '臺灣最長、被叫做「臺灣屋脊」的山脈是哪一條？', opts: ['中央山脈', '海岸山脈', '雪山山脈', '阿里山山脈'], a: 0, why: '中央山脈從蘇澳到鵝鑾鼻，貫穿全島，是最長的山脈。' },
      { id: 't2-t06', type: 'tap', q: '點出夾在中央山脈和海岸山脈中間的花東縱谷。', fig: TW, pins: ['huadongValley', 'chiananPlain', 'lanyang', 'taipeiBasin'], a: 'huadongValley', why: '花東縱谷在東部的花蓮、臺東，西邊中央山脈、東邊海岸山脈。' },
      { id: 't2-t07', type: 'mc', q: '看示意圖，標著甲的地方是什麼地形？', fig: mk('basin'), opts: ['盆地', '平原', '臺地', '丘陵'], a: 0, why: '甲的兩邊高、中間低平，是盆地。' },
      { id: 't2-t08', type: 'drag', q: '把「中央山脈」「海岸山脈」「阿里山山脈」拖到地圖上。', fig: TW, pins: ['centralRange', 'coastalRange', 'alishanRange'], items: [{ t: '中央山脈', to: 'centralRange' }, { t: '海岸山脈', to: 'coastalRange' }, { t: '阿里山山脈', to: 'alishanRange' }], why: '中央山脈在正中間、海岸山脈在東部海邊、阿里山山脈在最西邊。' },
      { id: 't2-t09', type: 'mc', q: '臺灣的山脈大多南北走向，所以河川大多往哪裡流？', opts: ['往東或往西', '往南或往北', '都流進同一個湖', '繞著島轉一圈'], a: 0, why: '山脈從北到南排在中間，雨水從山上往兩邊流，河川大多往東、往西流進海。' },
      { id: 't2-t10', type: 'tap', q: '點出在臺灣中部的臺中盆地。', fig: TW, pins: ['taipeiBasin', 'taichungBasin', 'pingtungPlain'], a: 'taichungBasin', why: '臺中盆地在中部；臺北盆地在北部、屏東平原在南部。' }
    ]
  });
})();
