/* interactive.js — 🗺️ 互動圖題（社會）／🧪 實驗模擬（自然）的題目元件（2026-11-02）
 * 資料：data/<科>/interactive.js → <資料>.ia[單元id] = [題]；社會另有 <資料>.iaMap（臺灣簡圖：海岸線、地點經緯度）。格式見 data/FORMAT.md 第 8 節。
 * 題目 kind：map（地圖）／time（時間軸排序）／sim（實驗模擬：shadow 影子、litmus 石蕊試紙、spring 彈簧、friction 摩擦力；五下 star 星座盤、fire 燃燒三要素、rust 鐵生鏽；六上 heat 熱的傳導、quake 規模和震度、emag 電磁鐵）；
 *   作答 mode：tap（點地圖上的圓圈，再按確定）／mc（選項）／order（把卡片拖到時間軸，或點卡片再點位置）／set（把模擬調到指定狀態，再按確定）。
 * 重現：選項順序、卡片順序都由題目 id 決定（不隨機），模擬從題目的 init 開始 → 錯題重做時畫面跟第一次一模一樣。
 * 判分只在這支：tap 只認圓圈＋寬限（slop）範圍內，沒點到圓圈不判分；資料測試保證同一題的圓圈不重疊，所以答案唯一。
 * 純函式（proj、shadowLen、springLen、frictionPull、paper、spots、hitAt、check、ansText…）node 也能跑：test/interactive.test.js。
 * mount(box, q, st, {map, done, onAnswer}) 畫題目；st 是呼叫端保存的狀態物件（重畫時沿用），作答後 onAnswer(對錯)。 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MMInteractive = factory();
})(this, function () {
  'use strict';
  var SLOP = 6;                         // 圓圈外再寬限幾個單位（地圖 viewBox 單位；畫面上約 1 單位＝1px）
  var R_PIN = 25, R_AREA = 34;          // 點的熱區半徑、區域的熱區半徑（直徑 50／68，iPad 上 ≥ 44px）
  var MAP_W = 490, MAP_H = 610;
  var KLAB = { map: '🗺️ 地圖點選', time: '🕰️ 時間軸排序', sim: '🧪 實驗模擬' };

  /* ---------- 小工具 ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function hash(s) { var h = 2166136261; s = String(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
  // 由 key 決定的打散（同一題每次都一樣）；avoidId＝不要剛好是原順序
  function perm(key, n, avoidId) {
    var a = [], s = hash(key) || 1, i;
    for (i = 0; i < n; i++) a.push(i);
    for (i = n - 1; i > 0; i--) { s = (Math.imul(s, 1103515245) + 12345) >>> 0; var j = s % (i + 1), t = a[i]; a[i] = a[j]; a[j] = t; }
    if (avoidId && n > 1 && a.every(function (v, k) { return v === k; })) a.push(a.shift());
    return a;
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function fmt(v) { return (Math.round(v * 10) / 10).toString(); }

  /* ---------- 地圖 ---------- */
  // 經緯度 → 簡圖座標（等距圓柱投影，緯度 23.7° 的經線縮放；北上、東右）
  function proj(lon, lat) { return [Math.round((lon - 118.9) * 146.6 * 10) / 10, Math.round((25.55 - lat) * 160 * 10) / 10]; }
  function placeXY(map, id) { var p = map.places[id]; if (!p) return null; var xy = p.xy || proj(p.lon, p.lat); return { id: id, x: xy[0], y: xy[1], r: p.area ? R_AREA : R_PIN, name: p.name }; }
  function spots(q, map) { return (q.pins || []).map(function (id) { return placeXY(map, id); }); }
  // 點到哪一個圓圈（含寬限）；都沒點到回 null（不判分）
  function hitAt(sp, x, y) {
    var hit = null;
    sp.forEach(function (s) { if (Math.hypot(x - s.x, y - s.y) <= s.r + SLOP && !hit) hit = s.id; });
    return hit;
  }
  // 同一題的圓圈（含寬限）兩兩不重疊 → 任何一點最多只落在一個圓圈裡
  function noOverlap(sp) {
    for (var i = 0; i < sp.length; i++) for (var j = i + 1; j < sp.length; j++)
      if (Math.hypot(sp[i].x - sp[j].x, sp[i].y - sp[j].y) < sp[i].r + sp[j].r + 2 * SLOP) return false;
    return true;
  }

  /* ---------- 模擬：數學關係（講義原理；數據是示範用） ---------- */
  // ① 太陽高度角與影子：1 公尺（100 公分）竹竿；高度角愈大影子愈短；影子在太陽的反方向
  function shadowLen(ang) { return ang >= 90 ? 0 : Math.round(100 / Math.tan(ang * Math.PI / 180)); }
  var SIDE = { E: { sun: '東', sh: '西', t: '上午', R: '東', L: '西' }, S: { sun: '南', sh: '北', t: '中午', R: '南', L: '北' }, W: { sun: '西', sh: '東', t: '下午', R: '東', L: '西' } };
  // ② 石蕊試紙：酸性 藍→紅；鹼性 紅→藍；中性 都不變
  var SOLS = { vinegar: { n: '醋', k: 'acid' }, citric: { n: '檸檬酸水', k: 'acid' }, water: { n: '純水', k: 'neutral' }, sugar: { n: '糖水', k: 'neutral' }, salt: { n: '食鹽水', k: 'neutral' }, soap: { n: '肥皂水', k: 'base' }, soda: { n: '小蘇打水', k: 'base' } };
  var SOL_ORDER = ['vinegar', 'citric', 'water', 'sugar', 'salt', 'soap', 'soda'];
  var KIND_ZH = { acid: '酸性', neutral: '中性', base: '鹼性' };
  function paper(sol, color) { var k = SOLS[sol].k; if (color === 'blue' && k === 'acid') return 'red'; if (color === 'red' && k === 'base') return 'blue'; return color; }
  // ③ 彈簧：長度＝原長＋每個砝碼的伸長量×個數（在彈性限度內，等量增加）
  var SPRING_MAX = 5;
  function springLen(sp, n) { return Math.round((sp.L0 + sp.k * n) * 10) / 10; }
  // ④ 摩擦力：盒子 100 公克重＋每個砝碼 50 公克重；剛開始移動時的拉力＝接觸面係數×重量（塗油 ＜ 光滑 ＜ 砂紙）
  var SURF = { oil: { n: '塗了油的桌面', mu: 0.2 }, smooth: { n: '光滑的桌面', mu: 0.5 }, sand: { n: '鋪砂紙的桌面', mu: 1.2 } };
  var SURF_ORDER = ['oil', 'smooth', 'sand'], FW_MAX = 3, PULL_MAX = 400;
  function frictionPull(surf, w) { return Math.round(SURF[surf].mu * (100 + 50 * w)); }
  // ⑤ 星座盤（五下 n5）：mon＝X 月中旬、hr 18～28（24 以後＝隔天凌晨）。示範用的近似：同一時刻的星空每月提早約 2 小時、每小時轉 15 度，
  //    恆星時 ≈ hr＋2×mon＋5.6；星群的時角（離正南方幾小時，負＝還在東邊）＝恆星時－赤經。|時角| ≤ 6 算在地平線上，≤ 2 算在南方高空。
  var SKY = [{ n: '獵戶座', ra: 5.6 }, { n: '冬季大三角', ra: 6.9 }, { n: '春季大曲線', ra: 13.9 }, { n: '天蠍座', ra: 16.9 }, { n: '夏季大三角', ra: 19.7 }, { n: '秋季四邊形', ra: 23.7 }];
  var HR_MIN = 18, HR_MAX = 28;
  function skyHA(mon, hr, name) { var o = SKY.filter(function (x) { return x.n === name; })[0], h = ((hr + 2 * mon + 5.6 - o.ra) % 24 + 36) % 24 - 12; return Math.round(h * 10) / 10; }
  function skySee(mon, hr, name) { return Math.abs(skyHA(mon, hr, name)) <= 6; }
  function skyTop(mon, hr) { var best = '', bd = 2.0001; SKY.forEach(function (x) { var d = Math.abs(skyHA(mon, hr, x.n)); if (d < bd) { bd = d; best = x.n; } }); return best; }
  function hrText(h) { return h < 19 ? '傍晚 6 點' : h < 24 ? '晚上 ' + (h - 12) + ' 點' : h === 24 ? '半夜 12 點' : '凌晨 ' + (h - 24) + ' 點'; }
  // ⑥ 燃燒三要素（五下 n6）：可燃物（木柴）、助燃物（空氣中的氧氣）、溫度達到燃點，三個都有才會燃燒；少一個火就熄滅
  var FIRE_WAY = { fuel: '移走可燃物', air: '隔絕空氣', heat: '降低溫度' };
  function fireBurn(st) { return st.fuel && st.air && st.heat ? 1 : 0; }
  // ⑦ 鐵生鏽（五下 n7 甲乙丙丁四組）：同時有水和空氣才生鏽，鹽分讓它更快。程度 0～4 是示範用的
  var RUST_G = { A: { n: '甲', d: '放乾燥劑的密封瓶', w: 0, a: 1, s: 0 }, B: { n: '乙', d: '煮沸過的水＋一層油', w: 1, a: 0, s: 0 }, C: { n: '丙', d: '沾濕放在空氣中', w: 1, a: 1, s: 0 }, D: { n: '丁', d: '沾食鹽水放在空氣中', w: 1, a: 1, s: 1 } };
  var RUST_LV = ['沒有生鏽', '一點點', '有些', '很多', '非常多'], DAY_MAX = 7;
  function rustLv(g, day) { var G = RUST_G[g]; return G.w && G.a ? Math.min(4, Math.ceil(day * (G.s ? 2 : 1) / 2)) : 0; }
  // ⑧ 熱的傳導（六上 n9）：尺的一端放進熱水，尺上 5 片用奶油黏的珍珠板（第 1 片最靠近熱水）。熱由近到遠傳過去，近的先掉；
  //    金屬傳熱快（銅比鐵快）、木頭和塑膠傳熱慢。第 i 片掉下來的分鐘＝i×k 是示範用的；木尺、塑膠尺 10 分鐘內都沒掉
  var HEAT_M = { cu: { n: '銅尺', k: 1, metal: 1 }, fe: { n: '鐵尺', k: 2, metal: 1 }, wood: { n: '木尺', k: 0, metal: 0 }, pl: { n: '塑膠尺', k: 0, metal: 0 } };
  var HEAT_ORDER = ['cu', 'fe', 'wood', 'pl'], HEAT_N = 5, HEAT_T = 10;
  function heatAt(m, i) { var k = HEAT_M[m].k; return k ? i * k : Infinity; }
  function heatFall(m, t) { var n = 0; for (var i = 1; i <= HEAT_N; i++) if (heatAt(m, i) <= t) n++; return n; }
  // ⑨ 電磁鐵（六上 n12）：吸起迴紋針的數量代表磁力。鐵釘當鐵芯：每 20 圈、每個串聯的電池約吸 3 根（示範用）；
  //    木棒、鋁棒、不放東西都只吸很少（差不多一樣）；斷電就吸不起來；電流方向反過來，N、S 極對調（接法一：甲端是 N 極）
  var EM_CORE = { fe: { n: '鐵釘' }, wood: { n: '木棒' }, al: { n: '鋁棒' }, none: { n: '不放東西' } };
  var EM_CORE_ORDER = ['fe', 'wood', 'al', 'none'], EM_TURNS = [20, 40, 60, 80], EM_B = 3;
  function emClips(s) { if (!s.on) return 0; var u = s.n / 20 * s.b; return s.core === 'fe' ? 3 * u : Math.floor(u / 3); }
  function emPole(rev, end) { return (end === 'A') !== !!rev ? 'N' : 'S'; }
  // ⑩ 規模和震度（六上 n11）：一次地震只有一個規模；震度是各地搖晃的程度（0～7 級，5、6 級分弱、強，共 10 級），
  //    規模越大震度越大、離震央越遠通常越小。換算 floor(1.5×規模 − 3×log10(距離公里)) 是示範用的，不是氣象署的算法
  var QT = [{ id: 'A', n: '甲鎮', d: 10 }, { id: 'B', n: '乙鎮', d: 30 }, { id: 'C', n: '丙鎮', d: 60 }, { id: 'D', n: '丁鎮', d: 100 }, { id: 'E', n: '戊鎮', d: 150 }];
  var QLV = ['0 級', '1 級', '2 級', '3 級', '4 級', '5 弱', '5 強', '6 弱', '6 強', '7 級'], QM_MIN = 4, QM_MAX = 7.5;
  function quakeLv(m, d) { return clamp(Math.floor(1.5 * m - 3 * Math.log10(d) + 1e-9), 0, QLV.length - 1); }
  function quakeTown(m, id) { return quakeLv(m, QT.filter(function (x) { return x.id === id; })[0].d); }

  /* ---------- 狀態、判分 ---------- */
  function initState(q) {
    var st = JSON.parse(JSON.stringify(q.init || {}));
    if (q.kind === 'time') { st.slots = q.items.map(function () { return -1; }); st.sel = null; }
    if (q.kind === 'map') st.pick = null;
    if (q.sim === 'litmus') { st.red = 'red'; st.blue = 'blue'; st.tried = {}; }
    if (q.sim === 'spring') { st.n = st.n || 0; st.rec = {}; st.rec[st.n] = 1; }
    if (q.sim === 'friction') { st.w = st.w || 0; st.pull = 0; st.moved = false; st.rec = {}; }
    if (q.sim === 'shadow') { st.ang = st.ang || 45; st.side = st.side || 'E'; }
    if (q.sim === 'star') { st.mon = st.mon || 1; st.hr = st.hr || 21; }
    if (q.sim === 'fire') ['fuel', 'air', 'heat'].forEach(function (k) { st[k] = st[k] == null ? 1 : +!!st[k]; });
    if (q.sim === 'rust') { st.g = st.g || 'C'; st.day = st.day || 0; st.rec = {}; st.rec[st.day] = 1; }
    if (q.sim === 'heat') { st.m = st.m || 'fe'; st.t = st.t || 0; }
    if (q.sim === 'emag') { st.n = st.n || 20; st.b = st.b || 1; st.core = st.core || 'fe'; st.on = +!!st.on; st.rev = +!!st.rev; st.rec = {}; if (st.on) st.rec[st.n + ':' + st.b + ':' + st.core] = emClips(st); }
    if (q.sim === 'quake') { st.m = st.m || 5; }
    return st;
  }
  function simVals(q, st) {
    var v = {};
    Object.keys(st).forEach(function (k) { if (typeof st[k] !== 'object') v[k] = st[k]; });
    if (q.sim === 'shadow') v.len = shadowLen(st.ang);
    if (q.sim === 'spring') v.len = springLen(q.spring, st.n);
    if (q.sim === 'star') v.top = skyTop(st.mon, st.hr);
    if (q.sim === 'fire') v.burn = fireBurn(st);
    if (q.sim === 'rust') v.lv = rustLv(st.g, st.day);
    if (q.sim === 'heat') v.fall = heatFall(st.m, st.t);
    if (q.sim === 'emag') { v.clips = emClips(st); v.poleA = emPole(st.rev, 'A'); }
    if (q.sim === 'quake') QT.forEach(function (x) { v[x.id] = quakeLv(st.m, x.d); });
    return v;
  }
  // set 題的目標：{鍵: 值} 或 {鍵: [最小, 最大]}；全部符合才算對
  function meets(goal, v) { return Object.keys(goal).every(function (k) { var g = goal[k]; return Array.isArray(g) ? v[k] >= g[0] && v[k] <= g[1] : v[k] === g; }); }
  function check(q, st) {
    if (q.mode === 'mc') return st.pick === q.a;
    if (q.mode === 'tap') return st.pick === q.a;
    if (q.mode === 'order') return st.slots.every(function (v, i) { return v === i; });
    if (q.mode === 'set') return meets(q.goal, simVals(q, st));
    return false;
  }
  function ansText(q, map) {
    if (q.mode === 'mc') return q.opts[q.a];
    if (q.mode === 'tap') { var p = map && map.places[q.a]; return p ? p.name : q.a; }
    if (q.mode === 'order') return q.items.join(' → ');
    return q.ans || '';
  }
  function label(q) { return KLAB[q.kind] || '互動題'; }

  /* ---------- 畫面：CSS（只注入一次） ---------- */
  var CSS = '.ia{display:grid;gap:12px}.ia-fig{background:#fff;border:2px solid var(--line,#e6dccb);border-radius:18px;padding:8px;text-align:center}' +
    '.ia-fig svg{display:block;margin:0 auto;max-width:100%;height:auto;touch-action:manipulation;-webkit-user-select:none;user-select:none}' +
    '.ia-map svg{width:min(100%,500px);min-width:460px;max-height:max(360px,calc(100vh - 250px))}.ia-fig.ia-map{overflow-x:auto}' +   // 橫向 iPad（1180×820）整張地圖一個畫面放得下：250＝心智圖頁首＋面板上邊距；圖照比例縮，圓圈＋寬限仍 ≥ 44px
    '.ia-ctl{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center}.ia-ctl .lab{font-weight:800;color:var(--muted,#6b6b6b)}' +
    '.ia-b{min-height:48px;min-width:48px;padding:4px 14px;border:2px solid var(--line,#e6dccb);border-radius:14px;background:#fff;font:inherit;font-weight:800;color:inherit;cursor:pointer;touch-action:manipulation;box-shadow:0 3px 0 var(--line,#e6dccb)}' +
    '.ia-b.on{background:var(--pri,#ff8a3d);border-color:var(--pri,#ff8a3d);color:#fff;box-shadow:0 3px 0 #d96a22}.ia-b.go{background:var(--ok,#22a565);border-color:var(--ok,#22a565);color:#fff;box-shadow:0 3px 0 #16784a}' +
    '.ia-b:disabled{opacity:.45;cursor:not-allowed}.ia-b.r-ok{background:#e3f7ea;border-color:#22a565}.ia-b.r-no{background:#fde8e8;border-color:#e5484d}' +
    '.ia input[type=range]{width:min(420px,70vw);height:44px;touch-action:none}' +
    '.ia-read{font-weight:800;font-size:1.05rem;text-align:center;min-height:1.6em}.ia-read b{color:#c2410c}' +
    '.ia-opts{display:grid;gap:10px}.ia-opt{min-height:56px;text-align:left;padding:10px 16px;border:2px solid var(--line,#e6dccb);border-radius:16px;background:#fff;font:inherit;font-size:1.05rem;font-weight:700;cursor:pointer;touch-action:manipulation;color:inherit}' +
    '.ia-opt.right{background:#e3f7ea;border-color:#22a565}.ia-opt.wrong{background:#fde8e8;border-color:#e5484d}' +
    '.ia-tbl{border-collapse:collapse;margin:0 auto;font-weight:700}.ia-tbl th,.ia-tbl td{border:2px solid var(--line,#e6dccb);padding:6px 12px;background:#fff}.ia-tbl th{background:#fff7ec}' +
    '.ia-line{position:relative;display:grid;gap:8px;padding:28px 6px 8px;border-radius:16px;background:#fff7ec;border:2px dashed #f0b479}' +
    '.ia-line:before{content:"先";position:absolute;left:10px;top:4px;font-weight:800;color:#c2410c}.ia-line:after{content:"後 →";position:absolute;right:10px;top:4px;font-weight:800;color:#c2410c}' +
    '.ia-slot{min-height:76px;border:3px dashed #f0b479;border-radius:14px;background:#fff;display:flex;flex-direction:column;align-items:stretch;justify-content:center;padding:4px;cursor:pointer}' +
    '.ia-slot>small{color:#c2410c;font-weight:800;text-align:center}.ia-slot.hot{border-color:var(--pri,#ff8a3d);background:#fff1e3}.ia-slot.ok{border-style:solid;border-color:#22a565}.ia-slot.no{border-style:solid;border-color:#e5484d}' +
    '.ia-pool{display:flex;flex-wrap:wrap;gap:8px;min-height:72px;padding:8px;border-radius:16px;background:#f6f3ee;justify-content:center}' +
    '.ia-card{min-height:56px;min-width:120px;max-width:220px;padding:6px 12px;border:2px solid #8ab4e8;border-radius:14px;background:#eef5ff;font:inherit;font-weight:800;font-size:.98rem;color:inherit;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none;box-shadow:0 3px 0 #b7cff0}' +
    '.ia-card.sel{outline:4px solid var(--pri,#ff8a3d);outline-offset:2px}.ia-card.ghost{position:fixed;z-index:999;pointer-events:none;opacity:.9;transform:rotate(-2deg);box-shadow:0 8px 20px rgba(0,0,0,.25)}' +
    '.ia-card.lift{opacity:.35}.ia-hint{color:var(--muted,#6b6b6b);text-align:center;margin:0}' +
    '@media(min-width:1000px){.ia.wide{grid-template-columns:minmax(0,520px) minmax(0,1fr);align-items:start}}';
  function css() { if (typeof document === 'undefined' || document.getElementById('ia-css')) return; var s = document.createElement('style'); s.id = 'ia-css'; s.textContent = CSS; document.head.appendChild(s); }

  /* ---------- 畫面：各種圖 ---------- */
  function path(pts) { return pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0] + ' ' + p[1]; }).join('') + 'Z'; }
  // 一段海岸線的點（起點索引比終點大＝繞過 coast 的頭尾，例如北部海岸）
  function segPts(map, k) { var c = map.coast.map(function (x) { return proj(x[0], x[1]); }), g = map.segs[k]; return g[0] <= g[1] ? c.slice(g[0], g[1] + 1) : c.slice(g[0]).concat(c.slice(0, g[1] + 1)); }
  function mapSVG(q, map, st, done) {
    var coast = map.coast.map(function (c) { return proj(c[0], c[1]); }), out = [];
    out.push('<rect width="' + MAP_W + '" height="' + MAP_H + '" fill="#cfe9fb"/>');
    out.push('<path d="' + path(map.mainland) + '" fill="#efe3c6" stroke="#b9a77d" stroke-width="2"/>');
    out.push('<path d="' + path(coast) + '" fill="#d8ecc0" stroke="#5d8a3a" stroke-width="2.5" stroke-linejoin="round"/>');
    (map.rivers || []).forEach(function (r) { out.push('<polyline points="' + r.map(function (c) { return proj(c[0], c[1]).join(','); }).join(' ') + '" fill="none" stroke="#3b8fd9" stroke-width="3" stroke-linecap="round"/>'); });
    if (q.hl) { out.push('<polyline points="' + segPts(map, q.hl).map(function (p) { return p.join(','); }).join(' ') + '" fill="none" stroke="#ff8a3d" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>'); }
    // 指北針
    out.push('<g transform="translate(44,470)"><circle r="22" fill="#fff" stroke="#888" stroke-width="2"/><path d="M0 -17 L7 6 L0 1 L-7 6Z" fill="#e5484d"/><text y="-26" text-anchor="middle" font-size="16" font-weight="800" fill="#333">北</text></g>');
    (q.marks || []).forEach(function (m) { var s = placeXY(map, m.p); out.push('<g><circle cx="' + s.x + '" cy="' + s.y + '" r="17" fill="#8350d6" stroke="#fff" stroke-width="3"/><text x="' + s.x + '" y="' + (s.y + 6) + '" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">' + esc(m.t) + '</text></g>'); });
    spots(q, map).forEach(function (s, i) {
      var p = map.places[s.id], arrow = p.wind ? '<path d="M' + s.x + ' ' + s.y + ' L' + (s.x + (245 - s.x) * 0.28) + ' ' + (s.y + (300 - s.y) * 0.28) + '" stroke="#5b6b7b" stroke-width="5" marker-end="url(#iaArr)"/>' : '';
      var col = '#2b8fd6', fill = 'rgba(43,143,214,.18)';
      if (done && s.id === q.a) { col = '#22a565'; fill = 'rgba(34,165,101,.35)'; }
      else if (done && s.id === st.pick) { col = '#e5484d'; fill = 'rgba(229,72,77,.3)'; }
      else if (s.id === st.pick) { col = '#ff8a3d'; fill = 'rgba(255,138,61,.35)'; }
      out.push(arrow + '<g data-spot="' + s.id + '"><circle cx="' + s.x + '" cy="' + s.y + '" r="' + s.r + '" fill="' + fill + '" stroke="' + col + '" stroke-width="' + (s.id === st.pick || (done && s.id === q.a) ? 5 : 3) + '" stroke-dasharray="' + (p.area ? '7 5' : '') + '"/>' +
        '<circle cx="' + s.x + '" cy="' + s.y + '" r="13" fill="' + col + '"/><text x="' + s.x + '" y="' + (s.y + 6) + '" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">' + (i + 1) + '</text></g>');
    });
    return '<svg class="ia-svg" viewBox="0 0 ' + MAP_W + ' ' + MAP_H + '" role="img" aria-label="臺灣簡圖"><defs><marker id="iaArr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#5b6b7b"/></marker></defs>' + out.join('') + '</svg>';
  }
  function shadowSVG(st) {
    var S = SIDE[st.side], a = st.ang * Math.PI / 180, dir = st.side === 'W' ? -1 : 1;   // 右邊＝東（上午、中午的「南」也放右邊），太陽在 dir 那一側
    var sx = 400 + dir * 270 * Math.cos(a), sy = 330 - 270 * Math.sin(a), L = shadowLen(st.ang), tip = 400 - dir * L;
    var o = '<rect width="800" height="420" fill="#e8f4ff"/><rect y="330" width="800" height="90" fill="#cfe3b0"/>' +
      '<path d="M130 330 A270 270 0 0 1 670 330" fill="none" stroke="#f0c36d" stroke-width="2" stroke-dasharray="6 6"/>' +
      '<text x="20" y="372" font-size="22" font-weight="800" fill="#4a6b2a">' + S.L + '</text><text x="780" y="372" text-anchor="end" font-size="22" font-weight="800" fill="#4a6b2a">' + S.R + '</text>' +
      '<line x1="' + sx + '" y1="' + sy + '" x2="' + tip + '" y2="330" stroke="#f5a524" stroke-width="2.5" stroke-dasharray="8 6"/>' +
      (L > 0 ? '<line x1="400" y1="331" x2="' + tip + '" y2="331" stroke="#3a3a3a" stroke-width="12" stroke-linecap="round" opacity=".75"/>' : '') +
      '<rect x="394" y="230" width="12" height="100" rx="3" fill="#8b5a2b"/>' +
      '<circle cx="' + sx + '" cy="' + sy + '" r="26" fill="#ffd23f" stroke="#f5a524" stroke-width="4"/>';
    if (L > 0) { var ar = Math.min(60, L * 0.6), ex = tip + dir * ar, ang2 = dir > 0 ? -a : -(Math.PI - a), ax = tip + ar * Math.cos(ang2), ay = 330 + ar * Math.sin(ang2);
      o += '<path d="M' + ex + ' 330 A' + ar + ' ' + ar + ' 0 0 ' + (dir > 0 ? 0 : 1) + ' ' + ax + ' ' + ay + '" fill="none" stroke="#c2410c" stroke-width="3"/>'; }
    return '<svg viewBox="0 0 800 420" role="img" aria-label="太陽、竹竿和影子">' + o + '</svg>';
  }
  var PCOL = { red: '#ef6f7f', blue: '#5f9de8' };
  function litmusSVG(q, st) {
    var hide = q.init && q.init.hide, name = hide ? '神祕溶液' : SOLS[st.sol].n, liquid = { vinegar: '#f3e2b8', citric: '#fbf3c4', water: '#e4f3ff', sugar: '#f2f6ff', salt: '#eef7ff', soap: '#e9f7ef', soda: '#f4f8f8' }[st.sol];
    function strip(x, base, now, tried) { return '<rect x="' + x + '" y="40" width="70" height="220" rx="8" fill="' + PCOL[base] + '" stroke="#9a8f80" stroke-width="2"/>' + (tried ? '<circle cx="' + (x + 35) + '" cy="150" r="30" fill="' + PCOL[now] + '" stroke="#555" stroke-width="2" stroke-dasharray="4 3"/>' : '') +
      '<text x="' + (x + 35) + '" y="285" text-anchor="middle" font-size="18" font-weight="800">' + (base === 'red' ? '紅色試紙' : '藍色試紙') + '</text>'; }
    return '<svg viewBox="0 0 600 300" role="img" aria-label="燒杯和石蕊試紙"><rect width="600" height="300" fill="#fbfaf6"/>' +
      '<path d="M60 70 L60 250 Q60 268 78 268 L202 268 Q220 268 220 250 L220 70" fill="none" stroke="#7b8a99" stroke-width="5"/><rect x="63" y="140" width="154" height="125" rx="10" fill="' + liquid + '" stroke="none"/>' +
      '<text x="140" y="120" text-anchor="middle" font-size="22" font-weight="800">' + esc(name) + '</text>' +
      strip(330, 'red', st.red, st.tried.red) + strip(460, 'blue', st.blue, st.tried.blue) + '</svg>';
  }
  function springSVG(q, st) {
    var P = 16, top = 50, L = springLen(q.spring, st.n), bot = top + L * P, coils = 12, zz = [], i;
    for (i = 0; i <= coils; i++) zz.push((i === 0 || i === coils ? 300 : (i % 2 ? 278 : 322)) + ',' + (top + 10 + (bot - top - 20) * i / coils));
    var ruler = '<rect x="150" y="' + top + '" width="54" height="' + (25 * P + 10) + '" fill="#fff8dc" stroke="#b49a58" stroke-width="2"/>';
    for (i = 0; i <= 25; i++) ruler += '<line x1="150" y1="' + (top + i * P) + '" x2="' + (i % 5 ? 166 : 178) + '" y2="' + (top + i * P) + '" stroke="#6b5a2a" stroke-width="2"/>' + (i % 5 ? '' : '<text x="182" y="' + (top + i * P + 6) + '" font-size="15" font-weight="700">' + i + '</text>');
    var w = ''; for (i = 0; i < st.n; i++) w += '<rect x="282" y="' + (bot + 8 + i * 26) + '" width="36" height="22" rx="5" fill="#7a7f87" stroke="#40444a" stroke-width="2"/>';
    return '<svg viewBox="0 0 600 ' + (top + 25 * P + 150) + '" role="img" aria-label="彈簧、尺和砝碼"><rect width="600" height="' + (top + 25 * P + 150) + '" fill="#fbfaf6"/><rect x="120" y="' + (top - 14) + '" width="300" height="12" fill="#5d6670"/>' + ruler +
      '<polyline points="300,' + top + ' ' + zz.join(' ') + ' 300,' + bot + '" fill="none" stroke="#2b8fd6" stroke-width="4"/><line x1="208" y1="' + bot + '" x2="300" y2="' + bot + '" stroke="#e5484d" stroke-width="2" stroke-dasharray="5 4"/>' + w + '</svg>';
  }
  function frictionSVG(st) {
    var F = frictionPull(st.surf, st.w), bx = st.moved ? 300 : 170, tex = '';
    if (st.surf === 'sand') for (var i = 0; i < 60; i++) tex += '<circle cx="' + (40 + (i * 37) % 620) + '" cy="' + (176 + (i * 13) % 22) + '" r="2" fill="#8a6a3a"/>';
    if (st.surf === 'oil') tex = '<rect x="30" y="172" width="640" height="10" fill="#9ad0ff" opacity=".6"/><ellipse cx="250" cy="185" rx="40" ry="5" fill="#bfe3ff"/><ellipse cx="480" cy="186" rx="55" ry="5" fill="#bfe3ff"/>';
    var top = { oil: '#e9d2a8', smooth: '#e9d2a8', sand: '#cfab73' }[st.surf], wts = '';
    for (var j = 0; j < st.w; j++) wts += '<rect x="' + (bx + 14 + j * 30) + '" y="122" width="24" height="18" rx="4" fill="#7a7f87" stroke="#40444a" stroke-width="2"/>';
    var gx = bx + 140, pos = clamp(st.pull, 0, PULL_MAX) / PULL_MAX;
    return '<svg viewBox="0 0 700 260" role="img" aria-label="盒子、桌面和彈簧秤"><rect width="700" height="260" fill="#fbfaf6"/><rect x="30" y="170" width="640" height="30" fill="' + top + '" stroke="#8a6a3a" stroke-width="2"/>' + tex +
      '<g><rect x="' + bx + '" y="110" width="110" height="60" rx="6" fill="#f5a524" stroke="#b46e0c" stroke-width="3"/>' + wts +
      '<line x1="' + (bx + 110) + '" y1="140" x2="' + gx + '" y2="140" stroke="#555" stroke-width="3"/><rect x="' + gx + '" y="122" width="170" height="36" rx="8" fill="#fff" stroke="#2b8fd6" stroke-width="3"/>' +
      '<rect x="' + (gx + 10) + '" y="134" width="150" height="12" fill="#e4f1fc"/><rect x="' + (gx + 10) + '" y="134" width="' + Math.round(150 * pos) + '" height="12" fill="#2b8fd6"/>' +
      '<text x="' + (gx + 85) + '" y="112" text-anchor="middle" font-size="16" font-weight="800">彈簧秤 ' + st.pull + ' 公克重</text>' +
      '<path d="M' + (gx + 172) + ' 140 l30 0" stroke="#c2410c" stroke-width="5" marker-end="url(#iaArr2)"/></g>' +
      '<defs><marker id="iaArr2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#c2410c"/></marker></defs>' +
      (st.moved ? '<text x="350" y="236" text-anchor="middle" font-size="18" font-weight="800" fill="#16784a">盒子開始移動了！剛開始移動時的拉力約 ' + F + ' 公克重</text>' : '') + '</svg>';
  }

  function starSVG(st) {
    var o = '<rect width="900" height="330" rx="16" fill="#14213d"/>', cx = 160, cy = 165, i, a, rot = (st.hr - 24) * 15 - (st.mon - 1) * 30;
    // 星座盤：外圈（固定）是時刻、內圈（轉動）是日期；選的日期轉到對準選的時刻（橘線）
    o += '<circle cx="' + cx + '" cy="' + cy + '" r="145" fill="#e9eef8" stroke="#8aa0c8" stroke-width="3"/><circle cx="' + cx + '" cy="' + cy + '" r="108" fill="#26365e" stroke="#c9d6f0" stroke-width="3"/>';
    for (i = HR_MIN; i <= HR_MAX; i++) { a = (i - 24) * 15 * Math.PI / 180; o += '<text x="' + (cx + 127 * Math.sin(a)) + '" y="' + (cy + 127 * Math.cos(a) + 6) + '" text-anchor="middle" font-size="15" font-weight="800" fill="' + (i === st.hr ? '#c2410c' : '#33415c') + '">' + (i % 24) + '</text>'; }
    for (i = 1; i <= 12; i++) { a = ((i - 1) * 30 + rot) * Math.PI / 180; o += '<text x="' + (cx + 90 * Math.sin(a)) + '" y="' + (cy + 90 * Math.cos(a) + 6) + '" text-anchor="middle" font-size="15" font-weight="800" fill="' + (i === st.mon ? '#ffb36b' : '#dfe7fb') + '">' + i + '月</text>'; }
    a = (st.hr - 24) * 15 * Math.PI / 180; o += '<line x1="' + (cx + 70 * Math.sin(a)) + '" y1="' + (cy + 70 * Math.cos(a)) + '" x2="' + (cx + 142 * Math.sin(a)) + '" y2="' + (cy + 142 * Math.cos(a)) + '" stroke="#ff8a3d" stroke-width="4" opacity=".85"/>';
    o += '<text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">星座盤</text>';
    // 面向南方的星空：左東、右西，愈靠中間愈高
    o += '<path d="M335 300 Q612 290 890 300 L890 330 L335 330Z" fill="#2f4a2c"/><line x1="335" y1="300" x2="890" y2="300" stroke="#7fa36b" stroke-width="2"/>';
    o += '<text x="345" y="322" font-size="18" font-weight="800" fill="#cfe3b0">東</text><text x="612" y="322" text-anchor="middle" font-size="18" font-weight="800" fill="#cfe3b0">南</text><text x="880" y="322" text-anchor="end" font-size="18" font-weight="800" fill="#cfe3b0">西</text>';
    SKY.forEach(function (x) { var h = skyHA(st.mon, st.hr, x.n); if (Math.abs(h) > 6) return; var px = 612 + h * 44, py = 295 - 250 * Math.cos(h * 15 * Math.PI / 180);
      o += '<circle cx="' + px + '" cy="' + py + '" r="6" fill="#fff6c8"/><circle cx="' + (px - 14) + '" cy="' + (py + 12) + '" r="3.5" fill="#fff6c8"/><circle cx="' + (px + 13) + '" cy="' + (py + 10) + '" r="3.5" fill="#fff6c8"/>' +
        '<text x="' + px + '" y="' + (py - 12) + '" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">' + esc(x.n) + '</text>'; });
    return '<svg viewBox="0 0 900 330" role="img" aria-label="星座盤和南方的星空">' + o + '</svg>';
  }
  function fireSVG(st) {
    var b = fireBurn(st), o = '<rect width="600" height="300" fill="' + (st.heat ? '#fff4e6' : '#eaf4ff') + '"/><rect y="240" width="600" height="60" fill="#d9c7a4"/><rect x="200" y="226" width="200" height="16" rx="6" fill="#8d8d8d"/>';
    if (st.fuel) o += '<rect x="225" y="200" width="150" height="22" rx="10" fill="#8b5a2b" transform="rotate(-8 300 211)"/><rect x="225" y="200" width="150" height="22" rx="10" fill="#a0692f" transform="rotate(8 300 211)"/>';
    else o += '<rect x="470" y="222" width="110" height="18" rx="8" fill="#8b5a2b"/><text x="525" y="214" text-anchor="middle" font-size="15" font-weight="800" fill="#6b4a2a">木柴移到旁邊</text>';
    if (b) o += '<path d="M300 90 C340 140 355 170 330 205 L270 205 C245 170 260 140 300 90Z" fill="#ff8a3d"/><path d="M300 130 C320 160 325 180 312 205 L288 205 C275 180 282 160 300 130Z" fill="#ffd23f"/>';
    else if (st.fuel) o += '<path d="M285 196 q8 -20 0 -40 M305 196 q8 -22 0 -46" fill="none" stroke="#9aa0a6" stroke-width="5" stroke-linecap="round" opacity=".7"/>';
    if (!st.heat) for (var i = 0; i < 7; i++) o += '<path d="M' + (230 + i * 23) + ' ' + (60 + (i % 3) * 22) + ' q-7 12 0 16 q7 -4 0 -16Z" fill="#5f9de8"/>';
    if (!st.air) o += '<path d="M190 236 L190 110 Q190 60 300 60 Q410 60 410 110 L410 236" fill="rgba(200,225,255,.35)" stroke="#7b8a99" stroke-width="6"/><rect x="290" y="44" width="20" height="18" rx="4" fill="#7b8a99"/>';
    o += '<text x="300" y="285" text-anchor="middle" font-size="20" font-weight="800" fill="' + (b ? '#c2410c' : '#33415c') + '">' + (b ? '正在燃燒' : '火熄滅了') + '</text>';
    return '<svg viewBox="0 0 600 300" role="img" aria-label="木柴、蓋子和火">' + o + '</svg>';
  }
  var RCOL = ['#9aa0a6', '#a98a72', '#a5683f', '#8f4a22', '#6e2f10'];
  function rustSVG(st) {
    var o = '<rect width="760" height="300" fill="#fbfaf6"/>';
    ['A', 'B', 'C', 'D'].forEach(function (g, i) {
      var G = RUST_G[g], x = 20 + i * 185, lv = rustLv(g, st.day), on = st.g === g;
      o += '<rect x="' + x + '" y="10" width="170" height="250" rx="14" fill="' + (on ? '#fff1e3' : '#fff') + '" stroke="' + (on ? '#ff8a3d' : '#e6dccb') + '" stroke-width="' + (on ? 5 : 2) + '"/>';
      o += '<path d="M' + (x + 40) + ' 60 L' + (x + 40) + ' 200 Q' + (x + 40) + ' 215 ' + (x + 55) + ' 215 L' + (x + 115) + ' 215 Q' + (x + 130) + ' 215 ' + (x + 130) + ' 200 L' + (x + 130) + ' 60" fill="none" stroke="#7b8a99" stroke-width="4"/>';
      if (G.w) o += '<rect x="' + (x + 43) + '" y="' + (G.a ? 185 : 120) + '" width="84" height="' + (G.a ? 28 : 93) + '" fill="' + (G.s ? '#e6f2e8' : '#dcefff') + '"/>';
      if (!G.a) o += '<rect x="' + (x + 43) + '" y="108" width="84" height="12" fill="#f6d365"/><text x="' + (x + 85) + '" y="102" text-anchor="middle" font-size="13" font-weight="700" fill="#8a6a1a">油</text>';
      if (!G.w) o += '<rect x="' + (x + 36) + '" y="48" width="98" height="12" rx="4" fill="#7b8a99"/><rect x="' + (x + 50) + '" y="190" width="30" height="20" rx="4" fill="#fff" stroke="#9aa0a6"/><text x="' + (x + 65) + '" y="205" text-anchor="middle" font-size="11">乾燥劑</text>';
      o += '<circle cx="' + (x + 90) + '" cy="' + (G.a ? 165 : 160) + '" r="24" fill="' + RCOL[lv] + '" stroke="#555" stroke-width="2" stroke-dasharray="3 3"/>';
      o += '<text x="' + (x + 85) + '" y="40" text-anchor="middle" font-size="22" font-weight="800">' + G.n + '</text><text x="' + (x + 85) + '" y="245" text-anchor="middle" font-size="15" font-weight="800" fill="' + (lv ? '#8f4a22' : '#33415c') + '">' + RUST_LV[lv] + '</text>';
    });
    return '<svg viewBox="0 0 760 300" role="img" aria-label="鐵生鏽實驗的甲乙丙丁四組">' + o + '</svg>';
  }
  var HCOL = { cu: '#c8742f', fe: '#8a96a3', wood: '#c9a36b', pl: '#7cc4e8' };
  function heatSVG(st) {
    var o = '<rect width="760" height="260" fill="#fbfaf6"/><rect y="236" width="760" height="24" fill="#e8dfcf"/>';
    o += '<path d="M30 110 L30 230 Q30 236 36 236 L164 236 Q170 236 170 230 L170 110" fill="none" stroke="#7b8a99" stroke-width="4"/><rect x="33" y="140" width="134" height="93" fill="#ffd9c7"/>';
    o += '<path d="M60 128 q8 -14 0 -28 M100 128 q8 -14 0 -28 M140 128 q8 -14 0 -28" fill="none" stroke="#e58a6a" stroke-width="3" stroke-linecap="round"/><text x="100" y="200" text-anchor="middle" font-size="16" font-weight="800" fill="#a33">熱水</text>';
    // 尺的左端斜斜的浸在熱水裡（水面 y＝140）
    o += '<rect x="70" y="175" width="660" height="22" rx="4" fill="' + HCOL[st.m] + '" stroke="#555" stroke-width="1.5" transform="rotate(-6 70 186)"/>';
    for (var i = 1; i <= HEAT_N; i++) {
      var x = 230 + (i - 1) * 110, y = 186 - (x - 70) * Math.tan(6 * Math.PI / 180) + 12, down = heatAt(st.m, i) <= st.t;
      o += down ? '<rect x="' + (x - 18) + '" y="226" width="36" height="10" rx="2" fill="#fff" stroke="#9aa0a6" stroke-width="2"/>'
        : '<circle cx="' + x + '" cy="' + (y + 3) + '" r="7" fill="#f6d365"/><rect x="' + (x - 10) + '" y="' + (y + 8) + '" width="20" height="34" rx="2" fill="#fff" stroke="#9aa0a6" stroke-width="2"/>';
      o += '<text x="' + x + '" y="' + (y - 16) + '" text-anchor="middle" font-size="15" font-weight="800" fill="#33415c">' + i + '</text>';
    }
    o += '<text x="740" y="40" text-anchor="end" font-size="20" font-weight="800" fill="#33415c">' + HEAT_M[st.m].n + '・第 ' + st.t + ' 分鐘</text>';
    return '<svg viewBox="0 0 760 260" role="img" aria-label="尺的一端放進熱水，尺上黏著五片珍珠板">' + o + '</svg>';
  }
  function emagSVG(st) {
    var c = emClips(st), o = '<rect width="760" height="300" fill="#fbfaf6"/>', on = st.on, i;
    // 電池（串聯）與電線
    for (i = 0; i < st.b; i++) o += '<rect x="' + (300 + i * 56) + '" y="258" width="52" height="26" rx="5" fill="#3b4a5a"/><rect x="' + (352 + i * 56) + '" y="265" width="4" height="12" fill="#c9a227"/>';
    o += '<path d="M300 271 L230 271 L230 120 L255 120 M' + (356 + (st.b - 1) * 56) + ' 271 L530 271 L530 120 L505 120" fill="none" stroke="' + (on ? '#d9480f' : '#9aa0a6') + '" stroke-width="3"/>';
    o += '<text x="' + (330 + (st.b - 1) * 28) + '" y="250" text-anchor="middle" font-size="14" font-weight="800" fill="#33415c">' + st.b + ' 個電池串聯' + (st.rev ? '（反接）' : '') + '</text>';
    // 鐵芯和線圈
    if (st.core !== 'none') o += '<rect x="255" y="106" width="250" height="28" rx="6" fill="' + { fe: '#7b8794', wood: '#c9a36b', al: '#d5dbe1' }[st.core] + '" stroke="#555" stroke-width="1.5"/>';
    else o += '<rect x="255" y="106" width="250" height="28" rx="6" fill="#fff" stroke="#bbb" stroke-dasharray="5 4"/>';
    var loops = st.n / 5;
    for (i = 0; i < loops; i++) { var lx = 262 + i * 236 / loops; o += '<ellipse cx="' + lx + '" cy="120" rx="4" ry="20" fill="none" stroke="#b5651d" stroke-width="2.5"/>'; }
    o += '<text x="245" y="96" text-anchor="end" font-size="22" font-weight="800">甲</text><text x="515" y="96" font-size="22" font-weight="800">乙</text>';
    if (on) o += '<text x="245" y="160" text-anchor="end" font-size="18" font-weight="800" fill="#c2410c">' + emPole(st.rev, 'A') + '</text><text x="515" y="160" font-size="18" font-weight="800" fill="#c2410c">' + emPole(st.rev, 'B') + '</text>';
    // 指北針：沒通電指北（向上）；通電時 N 端被吸向 S 極
    [['A', 140], ['B', 620]].forEach(function (e) {
      var x = e[1], ang = 0;
      if (on) { var toward = emPole(st.rev, e[0]) === 'S'; ang = (e[0] === 'A') === toward ? 90 : -90; }
      o += '<circle cx="' + x + '" cy="120" r="40" fill="#fff" stroke="#888" stroke-width="3"/><g transform="rotate(' + ang + ' ' + x + ' 120)"><path d="M' + x + ' 86 L' + (x + 8) + ' 120 L' + (x - 8) + ' 120Z" fill="#e5484d"/><path d="M' + x + ' 154 L' + (x + 8) + ' 120 L' + (x - 8) + ' 120Z" fill="#9aa0a6"/></g>';
    });
    // 迴紋針
    for (i = 0; i < c; i++) { var px = 268 + (i % 12) * 19, py = 142 + Math.floor(i / 12) * 30; o += '<rect x="' + px + '" y="' + py + '" width="10" height="24" rx="5" fill="none" stroke="#5f6b7a" stroke-width="2.5"/>'; }
    o += '<text x="380" y="40" text-anchor="middle" font-size="20" font-weight="800" fill="' + (on ? '#c2410c' : '#33415c') + '">' + (on ? '通電中：吸起 ' + c + ' 根迴紋針' : '沒有通電') + '</text>';
    return '<svg viewBox="0 0 760 300" role="img" aria-label="電磁鐵、電池、兩端的指北針和迴紋針">' + o + '</svg>';
  }
  var QCOL = ['#e6f4ea', '#cdebd6', '#b7e3c3', '#fff1b8', '#ffd58a', '#ffb066', '#ff8a4c', '#f25f3a', '#d93a2b', '#a61e1e'];
  function quakeSVG(st) {
    var o = '<rect width="760" height="300" fill="#f3f7fb"/>', ex = 50, cy = 150;
    [10, 30, 60, 100, 150].forEach(function (d) { o += '<circle cx="' + ex + '" cy="' + cy + '" r="' + d * 4.4 + '" fill="none" stroke="#c7d3e0" stroke-width="2" stroke-dasharray="6 6"/>'; });
    o += '<path d="M' + ex + ' ' + (cy - 16) + ' L' + (ex + 5) + ' ' + (cy - 5) + ' L' + (ex + 16) + ' ' + (cy - 5) + ' L' + (ex + 7) + ' ' + (cy + 3) + ' L' + (ex + 10) + ' ' + (cy + 15) + ' L' + ex + ' ' + (cy + 8) + ' L' + (ex - 10) + ' ' + (cy + 15) + ' L' + (ex - 7) + ' ' + (cy + 3) + ' L' + (ex - 16) + ' ' + (cy - 5) + ' L' + (ex - 5) + ' ' + (cy - 5) + 'Z" fill="#e5484d"/><text x="' + ex + '" y="' + (cy + 38) + '" text-anchor="middle" font-size="15" font-weight="800" fill="#a33">震央</text>';
    QT.forEach(function (t, i) {
      var x = ex + t.d * 4.4, y = cy + (i % 2 ? 60 : -60), lv = quakeLv(st.m, t.d);
      o += '<line x1="' + x + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" stroke="#9aa0a6" stroke-width="2"/><circle cx="' + x + '" cy="' + cy + '" r="5" fill="#33415c"/>';
      o += '<rect x="' + (x - 42) + '" y="' + (y - 30) + '" width="84" height="60" rx="12" fill="' + QCOL[lv] + '" stroke="#555" stroke-width="1.5"/><text x="' + x + '" y="' + (y - 8) + '" text-anchor="middle" font-size="15" font-weight="800" fill="#222">' + t.n + '</text><text x="' + x + '" y="' + (y + 18) + '" text-anchor="middle" font-size="18" font-weight="800" fill="#222">' + QLV[lv] + '</text>';
    });
    o += '<text x="740" y="32" text-anchor="end" font-size="20" font-weight="800" fill="#33415c">這次地震：規模 ' + st.m.toFixed(1) + '</text>';
    return '<svg viewBox="0 0 760 300" role="img" aria-label="震央和五個鄉鎮的震度">' + o + '</svg>';
  }

  /* ---------- 畫面：組合 ---------- */
  function bt(attr, txt, cls, dis) { return '<button type="button" class="ia-b' + (cls ? ' ' + cls : '') + '" ' + attr + (dis ? ' disabled' : '') + '>' + txt + '</button>'; }
  function simPart(q, st, done) {
    var d = done, h = '';
    if (q.sim === 'shadow') {
      var L = shadowLen(st.ang), S = SIDE[st.side];
      h = '<div class="ia-fig">' + shadowSVG(st) + '</div><p class="ia-read">太陽在<b>' + S.sun + '</b>邊（' + S.t + '）　高度角 <b>' + st.ang + '</b> 度　影子' + (L ? '在竹竿的<b>' + S.sh + '</b>邊，長 <b>' + L + '</b> 公分' : '<b>幾乎看不到</b>（在竹竿正下方）') + '</p>' +
        '<div class="ia-ctl"><span class="lab">太陽在</span>' + ['E', 'S', 'W'].map(function (k) { return bt('data-ia="side" data-v="' + k + '"', SIDE[k].sun + '邊（' + SIDE[k].t + '）', st.side === k ? 'on' : '', d); }).join('') + '</div>' +
        '<div class="ia-ctl"><span class="lab">高度角</span>' + bt('data-ia="ang" data-v="-1"', '－', '', d || st.ang <= 15) + '<input type="range" min="15" max="90" step="1" value="' + st.ang + '" data-ia="angR" aria-label="太陽高度角"' + (d ? ' disabled' : '') + '>' + bt('data-ia="ang" data-v="1"', '＋', '', d || st.ang >= 90) + '</div>';
    } else if (q.sim === 'litmus') {
      var lock = q.init && (q.init.hide || q.init.lock);
      h = '<div class="ia-fig">' + litmusSVG(q, st) + '</div><p class="ia-read">' + (st.tried.red ? '紅色試紙：<b>' + (st.red === 'red' ? '沒有變色' : '變成藍色') + '</b>　' : '') + (st.tried.blue ? '藍色試紙：<b>' + (st.blue === 'blue' ? '沒有變色' : '變成紅色') + '</b>' : '') + (st.tried.red || st.tried.blue ? '' : '用滴管滴一滴，看看試紙會不會變色') + '</p>' +
        (lock ? '' : '<div class="ia-ctl"><span class="lab">換溶液</span>' + SOL_ORDER.map(function (k) { return bt('data-ia="sol" data-v="' + k + '"', SOLS[k].n, st.sol === k ? 'on' : '', d); }).join('') + '</div>') +
        '<div class="ia-ctl">' + bt('data-ia="drop" data-v="red"', '💧 滴在紅色試紙', '', d) + bt('data-ia="drop" data-v="blue"', '💧 滴在藍色試紙', '', d) + bt('data-ia="fresh"', '🔄 換新試紙', '', d) + '</div>';
    } else if (q.sim === 'spring') {
      var sp = q.spring, rows = Object.keys(st.rec).map(Number).sort(function (a, b) { return a - b; });
      h = '<div class="ia-fig">' + springSVG(q, st) + '</div><p class="ia-read">掛 <b>' + st.n + '</b> 個砝碼　彈簧長度 <b>' + fmt(springLen(sp, st.n)) + '</b> 公分</p>' +
        '<div class="ia-ctl">' + bt('data-ia="wt" data-v="-1"', '➖ 拿下 1 個', '', d || st.n <= 0) + '<input type="range" min="0" max="' + SPRING_MAX + '" step="1" value="' + st.n + '" data-ia="wtR" aria-label="砝碼個數"' + (d ? ' disabled' : '') + '>' + bt('data-ia="wt" data-v="1"', '➕ 加 1 個', '', d || st.n >= SPRING_MAX) + '</div>' +
        '<p class="ia-hint">這個模擬最多掛 ' + SPRING_MAX + ' 個（都在彈性限度內，拿下後會回到原來的長度）</p>' +
        '<table class="ia-tbl"><thead><tr><th>砝碼個數</th><th>彈簧長度</th><th>伸長量</th></tr></thead><tbody>' + rows.map(function (n) { return '<tr><td>' + n + ' 個</td><td>' + fmt(springLen(sp, n)) + ' 公分</td><td>' + fmt(springLen(sp, n) - sp.L0) + ' 公分</td></tr>'; }).join('') + '</tbody></table>';
    } else if (q.sim === 'friction') {
      var keys = Object.keys(st.rec);
      h = '<div class="ia-fig">' + frictionSVG(st) + '</div><p class="ia-read">' + esc(SURF[st.surf].n) + '・盒子裡 ' + st.w + ' 個砝碼　拉力 <b>' + st.pull + '</b> 公克重　' + (st.moved ? '<b>盒子在移動</b>' : '盒子還沒動') + '</p>' +
        '<div class="ia-ctl"><span class="lab">桌面</span>' + SURF_ORDER.map(function (k) { return bt('data-ia="surf" data-v="' + k + '"', SURF[k].n, st.surf === k ? 'on' : '', d); }).join('') + '</div>' +
        '<div class="ia-ctl"><span class="lab">盒子裡的砝碼</span>' + bt('data-ia="fw" data-v="-1"', '➖', '', d || st.w <= 0) + '<b>' + st.w + ' 個</b>' + bt('data-ia="fw" data-v="1"', '➕', '', d || st.w >= FW_MAX) + '</div>' +
        '<div class="ia-ctl"><span class="lab">拉力</span>' + bt('data-ia="pull" data-v="-10"', '－10', '', d || st.pull <= 0) + '<input type="range" min="0" max="' + PULL_MAX + '" step="5" value="' + st.pull + '" data-ia="pullR" aria-label="拉力（公克重）"' + (d ? ' disabled' : '') + '>' + bt('data-ia="pull" data-v="10"', '＋10', '', d || st.pull >= PULL_MAX) + bt('data-ia="slow"', '🐢 慢慢拉', '', d || st.moved) + bt('data-ia="reset"', '↩ 放回原位', '', d) + '</div>' +
        '<table class="ia-tbl"><thead><tr><th>桌面</th><th>盒子裡的砝碼</th><th>剛開始移動時的拉力</th></tr></thead><tbody>' + (keys.length ? keys.map(function (k) { var a = k.split(':'); return '<tr><td>' + esc(SURF[a[0]].n) + '</td><td>' + a[1] + ' 個</td><td>' + st.rec[k] + ' 公克重</td></tr>'; }).join('') : '<tr><td colspan="3">拉到盒子開始移動，就會記在這裡</td></tr>') + '</tbody></table>';
    }
    else if (q.sim === 'star') {
      var top = skyTop(st.mon, st.hr);
      h = '<div class="ia-fig">' + starSVG(st) + '</div><p class="ia-read">星座盤對準 <b>' + st.mon + ' 月中旬、' + hrText(st.hr) + '</b>　' + (top ? '南方高空：<b>' + esc(top) + '</b>' : '南方高空沒有這裡列的星群') + '</p>' +
        '<div class="ia-ctl"><span class="lab">日期</span>' + bt('data-ia="mon" data-v="-1"', '◀ 前一個月', '', d) + '<b>' + st.mon + ' 月</b>' + bt('data-ia="mon" data-v="1"', '後一個月 ▶', '', d) + '</div>' +
        '<div class="ia-ctl"><span class="lab">時刻</span>' + bt('data-ia="hr" data-v="-1"', '◀ 早 1 小時', '', d || st.hr <= HR_MIN) + '<input type="range" min="' + HR_MIN + '" max="' + HR_MAX + '" step="1" value="' + st.hr + '" data-ia="hrR" aria-label="觀測時刻"' + (d ? ' disabled' : '') + '>' + bt('data-ia="hr" data-v="1"', '晚 1 小時 ▶', '', d || st.hr >= HR_MAX) + '</div>' +
        '<p class="ia-hint">示範用的簡化星空：面向南方，左邊是東、右邊是西；星空大約每小時轉 15 度。晚上觀星一定要有大人陪同。</p>';
    } else if (q.sim === 'fire') {
      var miss = ['fuel', 'air', 'heat'].filter(function (k) { return !st[k]; }).map(function (k) { return { fuel: '可燃物', air: '助燃物（空氣）', heat: '溫度（到達燃點）' }[k]; });
      h = '<div class="ia-fig">' + fireSVG(st) + '</div><p class="ia-read">' + (fireBurn(st) ? '可燃物、助燃物、溫度三個都有：<b>正在燃燒</b>' : '火熄滅了，少了：<b>' + miss.join('、') + '</b>') + '</p>' +
        '<div class="ia-ctl"><span class="lab">可燃物</span>' + bt('data-ia="fire" data-v="fuel"', st.fuel ? '🪵 移走木柴' : '🪵 放回木柴', '', d) + '</div>' +
        '<div class="ia-ctl"><span class="lab">空氣</span>' + bt('data-ia="fire" data-v="air"', st.air ? '🫙 蓋上蓋子（隔絕空氣）' : '打開蓋子', '', d) + '</div>' +
        '<div class="ia-ctl"><span class="lab">溫度</span>' + bt('data-ia="fire" data-v="heat"', st.heat ? '💧 灑水降溫' : '🔥 加熱（大人操作）', '', d) + '</div>' +
        '<p class="ia-hint">這是模擬。真的用火、做燃燒實驗，一定要有老師或大人在旁邊。</p>';
    } else if (q.sim === 'rust') {
      var G = RUST_G[st.g], days = Object.keys(st.rec).map(Number).sort(function (a, b) { return a - b; });
      h = '<div class="ia-fig">' + rustSVG(st) + '</div><p class="ia-read">示範第 <b>' + st.day + '</b> 天　' + G.n + '組（' + G.d + '）：<b>' + RUST_LV[rustLv(st.g, st.day)] + '</b></p>' +
        '<div class="ia-ctl"><span class="lab">看哪一組</span>' + ['A', 'B', 'C', 'D'].map(function (g) { return bt('data-ia="rg" data-v="' + g + '"', RUST_G[g].n + '：' + RUST_G[g].d, st.g === g ? 'on' : '', d); }).join('') + '</div>' +
        '<div class="ia-ctl"><span class="lab">天數</span>' + bt('data-ia="day" data-v="-1"', '－', '', d || st.day <= 0) + '<input type="range" min="0" max="' + DAY_MAX + '" step="1" value="' + st.day + '" data-ia="dayR" aria-label="放置天數"' + (d ? ' disabled' : '') + '>' + bt('data-ia="day" data-v="1"', '＋', '', d || st.day >= DAY_MAX) + '</div>' +
        '<p class="ia-hint">四組的鋼絲絨一樣、放在同一個地方（控制變因）；天數和生鏽程度是示範用的。拿鋼絲絨要戴手套。</p>' +
        '<table class="ia-tbl"><thead><tr><th>天數</th>' + ['A', 'B', 'C', 'D'].map(function (g) { return '<th>' + RUST_G[g].n + '</th>'; }).join('') + '</tr></thead><tbody>' + days.map(function (n) { return '<tr><td>第 ' + n + ' 天</td>' + ['A', 'B', 'C', 'D'].map(function (g) { return '<td>' + RUST_LV[rustLv(g, n)] + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
    } else if (q.sim === 'heat') {
      h = '<div class="ia-fig">' + heatSVG(st) + '</div><p class="ia-read">' + HEAT_M[st.m].n + '・第 <b>' + st.t + '</b> 分鐘：珍珠板掉了 <b>' + heatFall(st.m, st.t) + '</b> 片</p>' +
        '<div class="ia-ctl"><span class="lab">尺的材質</span>' + HEAT_ORDER.map(function (k) { return bt('data-ia="hm" data-v="' + k + '"', HEAT_M[k].n, st.m === k ? 'on' : '', d); }).join('') + '</div>' +
        '<div class="ia-ctl"><span class="lab">時間</span>' + bt('data-ia="ht" data-v="-1"', '－', '', d || st.t <= 0) + '<input type="range" min="0" max="' + HEAT_T + '" step="1" value="' + st.t + '" data-ia="htR" aria-label="放進熱水後幾分鐘"' + (d ? ' disabled' : '') + '>' + bt('data-ia="ht" data-v="1"', '＋', '', d || st.t >= HEAT_T) + '</div>' +
        '<p class="ia-hint">四把尺一樣長、奶油一樣多、黏的位置一樣、熱水一樣熱（控制變因）；時間是示範用的。真的做時，熱水由大人倒，戴隔熱手套、桌上墊隔熱墊。</p>';
    } else if (q.sim === 'emag') {
      var ek = Object.keys(st.rec);
      h = '<div class="ia-fig">' + emagSVG(st) + '</div><p class="ia-read">' + st.n + ' 圈・' + st.b + ' 個電池串聯・' + EM_CORE[st.core].n + '：' + (st.on ? '吸起 <b>' + emClips(st) + '</b> 根迴紋針　甲端 <b>' + emPole(st.rev, 'A') + '</b> 極、乙端 <b>' + emPole(st.rev, 'B') + '</b> 極' : '<b>沒有通電</b>') + '</p>' +
        '<div class="ia-ctl"><span class="lab">線圈圈數</span>' + EM_TURNS.map(function (n) { return bt('data-ia="en" data-v="' + n + '"', n + ' 圈', st.n === n ? 'on' : '', d); }).join('') + '</div>' +
        '<div class="ia-ctl"><span class="lab">串聯電池</span>' + bt('data-ia="eb" data-v="-1"', '➖', '', d || st.b <= 1) + '<b>' + st.b + ' 個</b>' + bt('data-ia="eb" data-v="1"', '➕', '', d || st.b >= EM_B) + bt('data-ia="er"', '🔄 正負極反過來接', '', d) + '</div>' +
        '<div class="ia-ctl"><span class="lab">線圈中間</span>' + EM_CORE_ORDER.map(function (k) { return bt('data-ia="ec" data-v="' + k + '"', EM_CORE[k].n, st.core === k ? 'on' : '', d); }).join('') + '</div>' +
        '<div class="ia-ctl">' + bt('data-ia="eo"', st.on ? '⏹ 切斷電流' : '🔌 通電', st.on ? 'on' : '', d) + '</div>' +
        '<p class="ia-hint">迴紋針數量是示範用的。真的做時通電時間要短（電池和電線會發燙），電池正負極不可以直接用電線接在一起（短路），絕對不能用家裡的插座做實驗。</p>' +
        '<table class="ia-tbl"><thead><tr><th>圈數</th><th>電池</th><th>線圈中間</th><th>吸起迴紋針</th></tr></thead><tbody>' + (ek.length ? ek.map(function (k) { var a = k.split(':'); return '<tr><td>' + a[0] + ' 圈</td><td>' + a[1] + ' 個</td><td>' + EM_CORE[a[2]].n + '</td><td>' + st.rec[k] + ' 根</td></tr>'; }).join('') : '<tr><td colspan="4">通電後吸起幾根，就會記在這裡</td></tr>') + '</tbody></table>';
    } else if (q.sim === 'quake') {
      h = '<div class="ia-fig">' + quakeSVG(st) + '</div><p class="ia-read">這次地震的規模 <b>' + st.m.toFixed(1) + '</b>（一次地震只有一個規模）；各地的震度不一樣</p>' +
        '<div class="ia-ctl"><span class="lab">規模</span>' + bt('data-ia="qm" data-v="-0.5"', '－', '', d || st.m <= QM_MIN) + '<input type="range" min="' + QM_MIN + '" max="' + QM_MAX + '" step="0.5" value="' + st.m + '" data-ia="qmR" aria-label="地震規模"' + (d ? ' disabled' : '') + '>' + bt('data-ia="qm" data-v="0.5"', '＋', '', d || st.m >= QM_MAX) + '</div>' +
        '<p class="ia-hint">震度的換算是示範用的。地震時：趴下、掩護、穩住，搖晃停了再依指示到空曠的地方，不要搭電梯。</p>' +
        '<table class="ia-tbl"><thead><tr><th>地點</th><th>離震央</th><th>震度</th></tr></thead><tbody>' + QT.map(function (x) { return '<tr><td>' + x.n + '</td><td>' + x.d + ' 公里</td><td>' + QLV[quakeLv(st.m, x.d)] + '</td></tr>'; }).join('') + '</tbody></table>';
    }
    return h;
  }
  function optsPart(q, st, done) {
    var ord = perm('opt:' + q.id, q.opts.length);
    return '<div class="ia-opts">' + ord.map(function (i) { var c = done ? (i === q.a ? ' right' : i === st.pick ? ' wrong' : '') : ''; return '<button type="button" class="ia-opt' + c + '" data-ia="opt" data-v="' + i + '"' + (done ? ' disabled' : '') + '>' + esc(q.opts[i]) + '</button>'; }).join('') + '</div>';
  }
  function timePart(q, st, done) {
    var n = q.items.length, pool = perm('ord:' + q.id, n, true), used = {};
    st.slots.forEach(function (v) { if (v >= 0) used[v] = 1; });
    function card(i) { return '<button type="button" class="ia-card' + (st.sel === i ? ' sel' : '') + '" data-ia="card" data-v="' + i + '"' + (done ? ' disabled' : '') + '>' + esc(q.items[i]) + '</button>'; }
    return '<div class="ia-line" style="grid-template-columns:repeat(' + n + ',minmax(0,1fr))">' + st.slots.map(function (v, j) {
      return '<div class="ia-slot' + (done ? (v === j ? ' ok' : ' no') : '') + '" data-ia="slot" data-v="' + j + '" role="button" tabindex="' + (done ? -1 : 0) + '" aria-label="第 ' + (j + 1) + ' 個位置"><small>第 ' + (j + 1) + '</small>' + (v >= 0 ? card(v) : '') + '</div>'; }).join('') + '</div>' +
      (done ? '' : '<div class="ia-pool" data-ia="pool">' + (pool.filter(function (i) { return !used[i]; }).map(card).join('') || '<span class="ia-hint">卡片都放好了，按「確定」</span>') + '</div><p class="ia-hint">把卡片拖到時間軸上；或先點一張卡片，再點要放的位置。點已放好的卡片可以換位置。</p>');
  }
  function html(q, st, o) {
    var done = !!o.done, map = o.map, h = '', act = '';
    if (q.kind === 'map') {
      h = '<div class="ia-fig ia-map">' + mapSVG(q, map, st, done) + '</div>';
      if (q.mode === 'tap') {
        var sp = spots(q, map);
        act = '<div class="ia-ctl"><span class="lab">也可以按號碼：</span>' + sp.map(function (s, i) { var c = done ? (s.id === q.a ? 'r-ok' : s.id === st.pick ? 'r-no' : '') : st.pick === s.id ? 'on' : ''; return bt('data-ia="pin" data-v="' + s.id + '" aria-label="' + (i + 1) + ' 號圓圈"', (i + 1) + ' 號', c, done); }).join('') + '</div>' +
          (done ? '' : '<div class="ia-ctl">' + bt('data-ia="ok"', '✅ 確定', 'go', !st.pick) + '</div>');
      }
    } else if (q.kind === 'time') {
      h = timePart(q, st, done);
      if (!done) act = '<div class="ia-ctl">' + bt('data-ia="clear"', '↩ 全部拿回來', '') + bt('data-ia="ok"', '✅ 確定', 'go', st.slots.some(function (v) { return v < 0; })) + '</div>';
    } else if (q.kind === 'sim') {
      h = simPart(q, st, done);
      if (q.mode === 'set' && !done) act = '<div class="ia-ctl">' + bt('data-ia="ok"', '✅ 就是這樣', 'go') + '</div>';
    }
    if (q.mode === 'mc') act = optsPart(q, st, done);
    return '<div class="ia' + (q.kind === 'map' ? ' wide' : '') + '"><div>' + h + '</div><div class="ia">' + act + '</div></div>';
  }

  /* ---------- 互動 ---------- */
  function mount(box, q, st, o) {
    o = o || {}; css();
    if (!st._init) { Object.assign(st, initState(q)); st._init = 1; }
    var timer = 0, drag = null, skipClick = false;
    function paint() { box.innerHTML = html(q, st, o); }
    function answer() { if (o.done || st._ans) return; st._ans = 1; var ok = check(q, st); if (o.onAnswer) o.onAnswer(ok); }
    function frRec() { if (st.pull >= frictionPull(st.surf, st.w)) { st.moved = true; st.rec[st.surf + ':' + st.w] = frictionPull(st.surf, st.w); } }
    function frReset() { clearInterval(timer); timer = 0; st.pull = 0; st.moved = false; }
    function place(card, slot) {   // card＝題目卡片索引；slot＝位置（-1＝放回卡片區）
      var from = st.slots.indexOf(card);
      if (slot < 0) { if (from >= 0) st.slots[from] = -1; }
      else { if (from >= 0) st.slots[from] = st.slots[slot]; st.slots[slot] = card; }   // 從別格拖來＝兩格互換；從卡片區拿來＝原本那張回卡片區
      st.sel = null;
    }
    function act(k, v) {
      if (o.done) return;
      if (k === 'opt') { st.pick = +v; answer(); return; }
      if (k === 'ok') { if (q.mode === 'tap' && !st.pick) return; answer(); return; }
      if (k === 'pin') st.pick = v;
      else if (k === 'side') st.side = v;
      else if (k === 'ang') st.ang = clamp(st.ang + (+v), 15, 90);
      else if (k === 'sol') { st.sol = v; st.red = 'red'; st.blue = 'blue'; st.tried = {}; }
      else if (k === 'drop') { st[v] = paper(st.sol, v); st.tried[v] = 1; }
      else if (k === 'fresh') { st.red = 'red'; st.blue = 'blue'; st.tried = {}; }
      else if (k === 'wt') { st.n = clamp(st.n + (+v), 0, SPRING_MAX); st.rec[st.n] = 1; }
      else if (k === 'surf') { st.surf = v; frReset(); }
      else if (k === 'fw') { st.w = clamp(st.w + (+v), 0, FW_MAX); frReset(); }
      else if (k === 'pull') { st.pull = clamp(st.pull + (+v), 0, PULL_MAX); frRec(); }
      else if (k === 'reset') frReset();
      else if (k === 'mon') st.mon = (st.mon + (+v) + 11) % 12 + 1;
      else if (k === 'hr') st.hr = clamp(st.hr + (+v), HR_MIN, HR_MAX);
      else if (k === 'fire') st[v] = st[v] ? 0 : 1;
      else if (k === 'rg') st.g = v;
      else if (k === 'day') { st.day = clamp(st.day + (+v), 0, DAY_MAX); st.rec[st.day] = 1; }
      else if (k === 'hm') st.m = v;
      else if (k === 'ht') st.t = clamp(st.t + (+v), 0, HEAT_T);
      else if (k === 'en' || k === 'eb' || k === 'ec' || k === 'eo' || k === 'er') {
        if (k === 'en') st.n = +v; else if (k === 'eb') st.b = clamp(st.b + (+v), 1, EM_B); else if (k === 'ec') st.core = v; else if (k === 'eo') st.on = st.on ? 0 : 1; else st.rev = st.rev ? 0 : 1;
        if (st.on) st.rec[st.n + ':' + st.b + ':' + st.core] = emClips(st);
      }
      else if (k === 'qm') st.m = clamp(st.m + (+v), QM_MIN, QM_MAX);
      else if (k === 'slow') { if (timer || st.moved) return; timer = setInterval(function () { if (!box.isConnected) { clearInterval(timer); return; } st.pull = clamp(st.pull + 5, 0, PULL_MAX); frRec(); if (st.moved || st.pull >= PULL_MAX) { clearInterval(timer); timer = 0; } paint(); }, 60); }
      else if (k === 'card') { var i = +v; if (st.sel === null || st.sel === i) st.sel = st.sel === i ? null : i; else if (st.slots.indexOf(i) >= 0 && st.sel !== null) place(st.sel, st.slots.indexOf(i)); else st.sel = i; }
      else if (k === 'slot') { if (st.sel !== null) place(st.sel, +v); }
      else if (k === 'pool') { if (st.sel !== null) place(st.sel, -1); }
      else if (k === 'clear') { st.slots = st.slots.map(function () { return -1; }); st.sel = null; }
      paint();
    }
    box.onclick = function (e) {
      if (skipClick && e.target.closest('.ia-card, .ia-slot, .ia-pool')) { skipClick = false; return; }   // 拖完放開時滑鼠會補一個 click，不要再當成「點一下」
      var el = e.target.closest('[data-ia]');
      if (q.kind === 'map' && q.mode === 'tap' && !o.done && e.target.closest('svg.ia-svg')) {   // 點地圖：換成 viewBox 座標，看落在哪個圓圈
        var svg = box.querySelector('svg.ia-svg'), pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        var p = pt.matrixTransform(svg.getScreenCTM().inverse()), hit = hitAt(spots(q, o.map), p.x, p.y);
        if (hit) act('pin', hit); else if (o.toast) o.toast('沒點到圓圈，再點一次（也可以按下面的號碼）');
        return;
      }
      if (!el || el.disabled || el.tagName === 'INPUT') return;
      var k = el.getAttribute('data-ia');
      if (k === 'card') e.stopPropagation();
      act(k, el.getAttribute('data-v'));
    };
    box.oninput = function (e) {
      var t = e.target, k = t.getAttribute && t.getAttribute('data-ia'); if (!k || o.done) return;
      if (k === 'angR') st.ang = +t.value; else if (k === 'wtR') { st.n = +t.value; st.rec[st.n] = 1; } else if (k === 'pullR') { st.pull = +t.value; frRec(); } else if (k === 'hrR') st.hr = +t.value; else if (k === 'dayR') { st.day = +t.value; st.rec[st.day] = 1; } else if (k === 'htR') st.t = +t.value; else if (k === 'qmR') st.m = +t.value; else return;
      soft();
    };
    // 拉桿拖動中不能整個重畫（iPad 上會把正在拖的拉桿換掉、拖不動）：只換圖、讀數、表格和按鈕的可按狀態
    function soft() {
      var t = document.createElement('div'); t.innerHTML = html(q, st, o);
      ['.ia-fig', '.ia-read', '.ia-tbl'].forEach(function (sel) { var a = box.querySelectorAll(sel), b = t.querySelectorAll(sel); a.forEach(function (x, i) { if (b[i]) x.innerHTML = b[i].innerHTML; }); });
      var a = box.querySelectorAll('.ia-b'), b = t.querySelectorAll('.ia-b'); a.forEach(function (x, i) { if (b[i]) x.disabled = b[i].disabled; });
    }
    box.onkeydown = function (e) { var el = e.target; if ((e.key === 'Enter' || e.key === ' ') && el.getAttribute && el.getAttribute('data-ia') === 'slot') { e.preventDefault(); act('slot', el.getAttribute('data-v')); } };
    // 時間軸：拖拉（觸控、滑鼠都走 pointer events）；移動超過 8px 才算拖，不然當成點一下
    box.onpointerdown = function (e) {
      var c = e.target.closest && e.target.closest('.ia-card'); if (!c || o.done || q.kind !== 'time' || c.classList.contains('ghost')) return;
      drag = { i: +c.getAttribute('data-v'), x: e.clientX, y: e.clientY, el: c, g: null, id: e.pointerId };
      try { c.setPointerCapture(e.pointerId); } catch (x) { }
    };
    box.onpointermove = function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      if (!drag.g) { if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 8) return; var r = drag.el.getBoundingClientRect(); drag.g = drag.el.cloneNode(true); drag.g.classList.add('ghost'); drag.g.style.width = r.width + 'px'; drag.dx = drag.x - r.left; drag.dy = drag.y - r.top; document.body.appendChild(drag.g); drag.el.classList.add('lift'); }
      e.preventDefault();
      drag.g.style.left = (e.clientX - drag.dx) + 'px'; drag.g.style.top = (e.clientY - drag.dy) + 'px';
      var s = slotAt(e.clientX, e.clientY); box.querySelectorAll('.ia-slot').forEach(function (x) { x.classList.toggle('hot', x === s); });
    };
    function slotAt(x, y) {   // 放開的點落在哪一格：格子外擴 24px 都算；再不行就找 80px 內最近的格子
      var best = null, bd = 1e9;
      box.querySelectorAll('.ia-slot').forEach(function (s) { var r = s.getBoundingClientRect(), dx = Math.max(r.left - x, 0, x - r.right), dy = Math.max(r.top - y, 0, y - r.bottom), d = Math.hypot(dx, dy); if (d < bd) { bd = d; best = s; } });
      return bd <= 24 || (best && bd <= 80) ? best : null;
    }
    function endDrag(e, cancel) {
      if (!drag || (e && e.pointerId !== drag.id)) return;
      var d = drag; drag = null;
      if (!d.g) return;   // 沒有拖＝點一下（交給 click）
      d.g.remove(); skipClick = true; setTimeout(function () { skipClick = false; }, 400);
      if (cancel) { paint(); return; }
      var s = slotAt(e.clientX, e.clientY), pool = box.querySelector('.ia-pool'), pr = pool && pool.getBoundingClientRect();
      if (s) place(d.i, +s.getAttribute('data-v'));
      else if (pr && e.clientY >= pr.top - 24 && e.clientY <= pr.bottom + 24) place(d.i, -1);
      paint();
    }
    box.onpointerup = function (e) { endDrag(e, false); };
    box.onpointercancel = function (e) { endDrag(e, true); };
    paint();
    return { state: function () { return st; }, act: act };
  }

  return { SLOP: SLOP, R_PIN: R_PIN, R_AREA: R_AREA, SOLS: SOLS, SURF: SURF, KIND_ZH: KIND_ZH, SPRING_MAX: SPRING_MAX, FW_MAX: FW_MAX,
    SKY: SKY, HR_MIN: HR_MIN, HR_MAX: HR_MAX, skyHA: skyHA, skySee: skySee, skyTop: skyTop, FIRE_WAY: FIRE_WAY, fireBurn: fireBurn, RUST_G: RUST_G, RUST_LV: RUST_LV, DAY_MAX: DAY_MAX, rustLv: rustLv,
    HEAT_M: HEAT_M, HEAT_N: HEAT_N, HEAT_T: HEAT_T, heatAt: heatAt, heatFall: heatFall, EM_CORE: EM_CORE, EM_TURNS: EM_TURNS, EM_B: EM_B, emClips: emClips, emPole: emPole,
    QT: QT, QLV: QLV, QM_MIN: QM_MIN, QM_MAX: QM_MAX, quakeLv: quakeLv, quakeTown: quakeTown,
    proj: proj, segPts: segPts, placeXY: placeXY, spots: spots, hitAt: hitAt, noOverlap: noOverlap, perm: perm, hash: hash,
    shadowLen: shadowLen, paper: paper, springLen: springLen, frictionPull: frictionPull,
    initState: initState, simVals: simVals, meets: meets, check: check, ansText: ansText, label: label, html: html, mount: mount, css: css };
});
