// interactive.test.js — 🗺️ 互動圖題（社會）／🧪 實驗模擬（自然）資料與判分檢查（mindmap/interactive.js、mindmap/data/<科>/interactive.js）
// 用法：node test/interactive.test.js
// 1. 資料格式：kind／mode／d 1～3、id 全站唯一、單元存在、題數（社會 地圖 40＋時間軸 20、自然 4 種模擬各 10）、每個有題的單元 ≥ 10 題
// 2. 地圖：答案在圓圈裡、同一題的圓圈（含寬限）兩兩不重疊（＝答案唯一）、熱區直徑 ≥ 44；地名只用講義（unit*.js）有的
// 1b. 五下（2026-11-02）：模擬多 star 星座盤、fire 燃燒三要素、rust 鐵生鏽；專有地名的地點寫 h
// 1c. 六上（2026-11-02）：模擬多 heat 熱的傳導、quake 規模和震度、emag 電磁鐵（原理規則見 4a 最後）
// 1d. 六下（2026-11-02）：模擬多 lever 槓桿尺、pulley 滑輪、strg 弦的音調（原理規則見 4a 最後）
// 3. 時間軸：正解順序就是 items 的順序、出題順序不會剛好是正解；有年份的照年份遞增
// 4. 模擬：影長隨高度角增大而變短、彈簧伸長量和砝碼數成正比、摩擦力 塗油 ＜ 光滑 ＜ 砂紙、石蕊試紙變色規則；chk 題用模擬算出答案對照 opts[a]；set 題起始狀態不符合、但做得到
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), MM = path.join(root, 'mindmap');
const IA = require(path.join(MM, 'interactive.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL interactive:', m); } };
const ctx = { window: {} }; vm.createContext(ctx);
// 資料檔＝頁面實際載入的（mindmap/<科>.html 的 data/<科>/*.js，照頁面順序），加單元不用改測試
const pageData = (k, re) => [...fs.readFileSync(path.join(MM, k + '.html'), 'utf8').matchAll(/src="data\/(\w+\/[\w-]+)\.js/g)].map(m => m[1]).filter(f => !re || re.test(f));
['social', 'science'].flatMap(k => pageData(k, /\/(unit|interactive)/))
  .forEach(f => vm.runInContext(fs.readFileSync(path.join(MM, 'data', f + '.js'), 'utf8'), ctx, { filename: f }));
const SUBJ = { social: ctx.window.DATA_SOCIAL, science: ctx.window.DATA_SCIENCE };
const ids = new Set(), cnt = {};
const num = s => parseFloat(String(s).replace(/[^\d.]/g, ''));

// ---- 4a. 模擬的數學關係 ----
for (let a = 15; a < 90; a++) ok(IA.shadowLen(a + 1) <= IA.shadowLen(a) && IA.shadowLen(a) > 0, 'shadow shorter when angle grows: ' + a);
ok(IA.shadowLen(90) === 0 && IA.shadowLen(45) === 100 && IA.shadowLen(58) === 62 && IA.shadowLen(53) === 75, 'shadow lengths 90→0, 45→100, 58→62, 53→75');
[{ L0: 10, k: 2 }, { L0: 6, k: 1.5 }, { L0: 8, k: 0.5 }, { L0: 5, k: 3 }].forEach(sp => {
  for (let n = 0; n <= 8; n++) ok(Math.abs((IA.springLen(sp, n) - sp.L0) - sp.k * n) < 1e-9, `spring extension ∝ weights: ${JSON.stringify(sp)} n=${n}`);
});
for (let w = 0; w <= IA.FW_MAX; w++) {
  ok(IA.frictionPull('oil', w) < IA.frictionPull('smooth', w) && IA.frictionPull('smooth', w) < IA.frictionPull('sand', w), 'friction oil < smooth < sand, w=' + w);
  if (w) ok(IA.frictionPull('smooth', w) > IA.frictionPull('smooth', w - 1), 'friction grows with weight, w=' + w);
}
Object.keys(IA.SOLS).forEach(s => { const k = IA.SOLS[s].k;
  ok(IA.paper(s, 'blue') === (k === 'acid' ? 'red' : 'blue') && IA.paper(s, 'red') === (k === 'base' ? 'blue' : 'red'), 'litmus rule ' + s); });
ok(IA.SOLS.vinegar.k === 'acid' && IA.SOLS.citric.k === 'acid' && ['water', 'sugar', 'salt'].every(s => IA.SOLS[s].k === 'neutral') && IA.SOLS.soap.k === 'base' && IA.SOLS.soda.k === 'base', 'solutions classified as in 講義');
// 五下：燃燒三要素（三個都有才燒）、生鏽（甲乙不鏽、丁不比丙慢、天數愈多不會變少）、星空（每月提早約 2 小時、季節星群在晚上 9 點的南方高空）
[0, 1].forEach(f => [0, 1].forEach(a => [0, 1].forEach(h => ok(IA.fireBurn({ fuel: f, air: a, heat: h }) === (f && a && h ? 1 : 0), 'fire needs all three: ' + [f, a, h]))));
for (let d = 0; d <= IA.DAY_MAX; d++) {
  ok(IA.rustLv('A', d) === 0 && IA.rustLv('B', d) === 0 && IA.rustLv('D', d) >= IA.rustLv('C', d), 'rust: 甲乙 never, 丁 ≥ 丙, day ' + d);
  if (d) ok(['C', 'D'].every(g => IA.rustLv(g, d) >= IA.rustLv(g, d - 1) && IA.rustLv(g, d) > 0), 'rust grows with days, day ' + d);
}
ok(IA.rustLv('C', 0) === 0 && IA.rustLv('D', 4) === 4 && IA.rustLv('C', 7) === 4, 'rust day 0 none, 丁 day4 / 丙 day7 = 非常多');
ok(IA.skyTop(1, 21) === '獵戶座' && IA.skyTop(5, 21) === '春季大曲線' && IA.skyTop(7, 21) === '天蠍座' && IA.skyTop(8, 21) === '夏季大三角' && IA.skyTop(11, 21) === '秋季四邊形' && IA.skyTop(2, 21) === '冬季大三角', 'sky: seasonal groups high in the south at 9 pm');
IA.SKY.forEach(x => { for (let m = 1; m <= 12; m++) ok(Math.abs(IA.skyHA(m, 23, x.n) - IA.skyHA(m === 12 ? 1 : m + 1, 21, x.n)) < 1e-9 || Math.abs(Math.abs(IA.skyHA(m, 23, x.n) - IA.skyHA(m === 12 ? 1 : m + 1, 21, x.n)) - 24) < 1e-9, 'sky: next month 2 hours earlier ' + x.n + ' ' + m); });
// 六上：熱的傳導（近的先掉、時間越久掉越多、銅 ≥ 鐵 ＞ 木頭＝塑膠＝0）、規模和震度（規模越大震度不變小、越遠不變大、最近＞最遠）、電磁鐵（圈數、電池越多越強；鐵芯最強；斷電 0；反接 N S 對調）
for (let i = 1; i < IA.HEAT_N; i++) ['cu', 'fe'].forEach(m => ok(IA.heatAt(m, i) < IA.heatAt(m, i + 1), 'heat: nearer piece falls first ' + m + ' ' + i));
for (let t = 0; t <= IA.HEAT_T; t++) {
  ok(IA.heatFall('cu', t) >= IA.heatFall('fe', t) && IA.heatFall('fe', t) >= IA.heatFall('wood', t) && IA.heatFall('wood', t) === 0 && IA.heatFall('pl', t) === 0, 'heat: metal faster than wood/plastic, copper ≥ iron, t=' + t);
  if (t) ['cu', 'fe'].forEach(m => ok(IA.heatFall(m, t) >= IA.heatFall(m, t - 1), 'heat: more pieces fall as time goes on ' + m + ' t=' + t));
}
ok(IA.heatFall('cu', IA.HEAT_T) === IA.HEAT_N && IA.heatFall('fe', IA.HEAT_T) === IA.HEAT_N && IA.heatFall('cu', 4) > IA.heatFall('fe', 4) && Object.keys(IA.HEAT_M).every(m => !!IA.HEAT_M[m].metal === (IA.HEAT_M[m].k > 0)), 'heat: both metals finish within 10 min, copper clearly faster at 4 min');
for (let m = IA.QM_MIN; m <= IA.QM_MAX; m += 0.5) {
  IA.QT.forEach((x, i) => { if (i) ok(IA.quakeLv(m, x.d) <= IA.quakeLv(m, IA.QT[i - 1].d), 'quake: farther → not stronger, m=' + m + ' ' + x.n);
    if (m > IA.QM_MIN) ok(IA.quakeLv(m, x.d) >= IA.quakeLv(m - 0.5, x.d), 'quake: bigger magnitude → not weaker, m=' + m + ' ' + x.n); });
  ok(IA.quakeLv(m, IA.QT[0].d) > IA.quakeLv(m, IA.QT[IA.QT.length - 1].d), 'quake: nearest town shakes more than farthest, m=' + m);
}
ok(IA.QLV.length === 10 && IA.QLV.join() === '0 級,1 級,2 級,3 級,4 級,5 弱,5 強,6 弱,6 強,7 級', 'quake: 10 intensity levels 0～7 with 5/6 弱強');
ok(IA.QLV[IA.quakeTown(6, 'A')] === '5 強' && IA.QLV[IA.quakeTown(6, 'E')] === '2 級', 'n11-s09 premise: 規模 6.0 甲鎮 5 強、戊鎮 2 級');
const EMS = []; IA.EM_TURNS.forEach(n => { for (let b = 1; b <= IA.EM_B; b++) Object.keys(IA.EM_CORE).forEach(core => EMS.push({ n, b, core })); });
EMS.forEach(s => {
  const on = Object.assign({ on: 1 }, s), tag = JSON.stringify(s);
  ok(IA.emClips(Object.assign({ on: 0 }, s)) === 0, 'emag: no current → no clips ' + tag);
  if (s.core !== 'fe') ok(IA.emClips(on) < IA.emClips(Object.assign({}, on, { core: 'fe' })) && IA.emClips(on) === IA.emClips(Object.assign({}, on, { core: 'none' })), 'emag: iron core strongest, wood/aluminium ≈ nothing ' + tag);
  const i = IA.EM_TURNS.indexOf(s.n);
  if (i) ok(IA.emClips(on) >= IA.emClips(Object.assign({}, on, { n: IA.EM_TURNS[i - 1] })) && (s.core !== 'fe' || IA.emClips(on) > IA.emClips(Object.assign({}, on, { n: IA.EM_TURNS[i - 1] }))), 'emag: more turns → stronger ' + tag);
  if (s.b > 1) ok(IA.emClips(on) >= IA.emClips(Object.assign({}, on, { b: s.b - 1 })) && (s.core !== 'fe' || IA.emClips(on) > IA.emClips(Object.assign({}, on, { b: s.b - 1 }))), 'emag: more batteries in series → stronger ' + tag);
});
ok(IA.emClips({ on: 1, n: 20, b: 1, core: 'fe' }) === 3 && IA.emClips({ on: 1, n: 40, b: 1, core: 'fe' }) === 6 && IA.emClips({ on: 1, n: 60, b: 1, core: 'fe' }) === 9, 'emag: matches practice question 20/40/60 圈 → 3/6/9 根');
ok(IA.emPole(0, 'A') !== IA.emPole(0, 'B') && IA.emPole(1, 'A') === IA.emPole(0, 'B') && IA.emPole(1, 'B') === IA.emPole(0, 'A'), 'emag: two ends opposite poles; reversing current swaps N and S');
// 六下：槓桿尺（鉤碼數×格數 相等才平衡、乘積大的那邊往下；離支點越遠需要越少）、滑輪（定＝重量、往下拉；動＝比一半多一點、往上拉、繩長兩倍；滑輪組＝省力＋往下拉）、
//       弦（越短、越細、越緊 振動越快；用力撥只改音量）
const LVS = []; for (let lw = 1; lw <= IA.LV_W; lw++) for (let lp = 1; lp <= IA.LV_P; lp++) for (let rw = 0; rw <= IA.LV_W; rw++) for (let rp = 1; rp <= IA.LV_P; rp++) LVS.push({ lw, lp, rw, rp });
LVS.forEach(s => { const t = IA.leverTilt(s), a = s.lw * s.lp, b = s.rw * s.rp; ok(t === (a === b ? 0 : a > b ? -1 : 1), 'lever: torque rule ' + JSON.stringify(s));
  if (s.rw && s.rp < IA.LV_P && t === 0) ok(IA.leverTilt(Object.assign({}, s, { rp: s.rp + 1 })) === 1, 'lever: same weights farther → that side goes down ' + JSON.stringify(s)); });
ok(IA.leverTilt({ lw: 3, lp: 2, rw: 2, rp: 3 }) === 0, 'lever: matches 重點句 example 左 2 格 3 個＝右 3 格 2 個');
IA.PL_W.forEach(w => { ok(IA.pullF('hand', w) === w && IA.pullF('fixed', w) === w && IA.pullF('move', w) > w / 2 && IA.pullF('move', w) < w * 0.65 && IA.pullF('combo', w) === IA.pullF('move', w), 'pulley: fixed = weight, movable a bit over half, combo same as movable ' + w); });
ok(IA.pullDir('fixed') === '下' && IA.pullDir('combo') === '下' && IA.pullDir('move') === '上' && IA.pullDir('hand') === '上', 'pulley: fixed/combo change direction, movable does not');
for (let r = 0; r <= IA.PL_RMAX; r += 5) ok(IA.pullLift('fixed', r) === r && IA.pullLift('move', r) * 2 === r && IA.pullLift('combo', r) * 2 === r, 'pulley: movable rope = 2 × lift ' + r);
const STS = []; IA.ST_L.forEach(L => Object.keys(IA.ST_D).forEach(d => Object.keys(IA.ST_T).forEach(t => [1, 2].forEach(p => STS.push({ L, d, t, p })))));
STS.forEach(s => { const f = IA.strF(s), tag = JSON.stringify(s);
  const i = IA.ST_L.indexOf(s.L); if (i) ok(f < IA.strF(Object.assign({}, s, { L: IA.ST_L[i - 1] })), 'strg: shorter → higher ' + tag);
  if (s.d === 'thick') ok(f < IA.strF(Object.assign({}, s, { d: 'thin' })), 'strg: thinner → higher ' + tag);
  if (s.t === 'loose') ok(f < IA.strF(Object.assign({}, s, { t: 'tight' })), 'strg: tighter → higher ' + tag);
  ok(f === IA.strF(Object.assign({}, s, { p: 3 - s.p })) && IA.strVol(s) === (s.p > 1 ? '大' : '小'), 'strg: plucking harder changes volume only ' + tag); });
// tap 判分：圓圈外寬限以外不算、圓圈裡算
const sp0 = [{ id: 'a', x: 100, y: 100, r: 25 }, { id: 'b', x: 200, y: 100, r: 25 }];
ok(IA.hitAt(sp0, 100, 100) === 'a' && IA.hitAt(sp0, 100 + 25 + IA.SLOP, 100) === 'a' && IA.hitAt(sp0, 150, 100) === null && IA.hitAt(sp0, 190, 110) === 'b', 'hitAt: inside/slop counts, outside does not');
ok(IA.R_PIN * 2 >= 48 && IA.R_AREA * 2 >= 48, 'hot zones ≥ 48 viewBox units (≥ 44px at ≥ 0.92 scale)');
// 橫向 iPad 地圖照可視高度縮小（最小約 0.71 倍，mindmap/interactive.js 的 .ia-map svg max-height）：圓圈＋寬限仍要 ≥ 44px
ok((IA.R_PIN + IA.SLOP) * 2 * (435 / 610) >= 44, 'pin + slop ≥ 44px when the map is scaled to fit 1180×820');

// 講義文字（地名只能用這裡面有的）
const handout = {};
Object.keys(SUBJ).forEach(k => { let t = ''; SUBJ[k].units.forEach(u => (function w(d) { t += d.title + '\n'; (d.points || []).forEach(p => { t += (typeof p === 'string' ? p : p.t) + '\n'; }); (d.lessons || d.topics || d.children || []).forEach(w); })(u)); handout[k] = t; });

// set 題：列出模擬可以到的所有狀態
function states(q) {
  const out = [];
  if (q.sim === 'shadow') ['E', 'S', 'W'].forEach(side => { for (let ang = 15; ang <= 90; ang++) out.push({ side, ang }); });
  if (q.sim === 'spring') for (let n = 0; n <= IA.SPRING_MAX; n++) out.push({ n });
  if (q.sim === 'friction') Object.keys(IA.SURF).forEach(surf => { for (let w = 0; w <= IA.FW_MAX; w++) [false, true].forEach(moved => out.push({ surf, w, moved })); });
  if (q.sim === 'star') for (let mon = 1; mon <= 12; mon++) for (let hr = IA.HR_MIN; hr <= IA.HR_MAX; hr++) out.push({ mon, hr });
  if (q.sim === 'fire') [0, 1].forEach(fuel => [0, 1].forEach(air => [0, 1].forEach(heat => out.push({ fuel, air, heat }))));
  if (q.sim === 'rust') Object.keys(IA.RUST_G).forEach(g => { for (let day = 0; day <= IA.DAY_MAX; day++) out.push({ g, day }); });
  if (q.sim === 'heat') Object.keys(IA.HEAT_M).forEach(m => { for (let t = 0; t <= IA.HEAT_T; t++) out.push({ m, t }); });
  if (q.sim === 'quake') for (let m = IA.QM_MIN; m <= IA.QM_MAX; m += 0.5) out.push({ m });
  if (q.sim === 'emag') EMS.forEach(s => [0, 1].forEach(on => [0, 1].forEach(rev => out.push(Object.assign({ on, rev }, s)))));
  if (q.sim === 'lever') LVS.filter(s => !q.init.lockL || (s.lw === q.init.lw && s.lp === q.init.lp)).forEach(s => out.push(s));   // lockL：左邊不能動
  if (q.sim === 'pulley') Object.keys(IA.PL_M).forEach(m => IA.PL_W.forEach(w => { for (let r = 0; r <= IA.PL_RMAX; r += 5) out.push({ m, w, r }); }));
  if (q.sim === 'strg') STS.forEach(s => out.push(s));
  return out;
}

Object.keys(SUBJ).forEach(k => {
  const D = SUBJ[k], units = new Set(D.units.map(u => u.id));
  ok(D.ia && typeof D.ia === 'object', k + ': ia loaded');
  Object.keys(D.ia).forEach(uid => {
    const L = D.ia[uid];
    ok(units.has(uid), `${k}: unit ${uid} exists`);
    ok(L.length >= 10, `${k}/${uid}: ≥ 10 items (one round): ${L.length}`);
    L.forEach(q => {
      const tag = `${k}/${q.id}`;
      ok(typeof q.id === 'string' && q.id.indexOf(uid + '-') === 0 && !ids.has(q.id), tag + ': id unique, starts with unit'); ids.add(q.id);
      ok([1, 2, 3].includes(q.d), tag + ': d 1～3');
      ok(typeof q.q === 'string' && q.q.length >= 6 && typeof q.why === 'string' && q.why.length >= 6, tag + ': q and why');
      const key = k + ':' + (q.kind === 'sim' ? q.sim : q.kind); cnt[key] = (cnt[key] || 0) + 1;
      ok({ map: ['tap', 'mc'], time: ['order'], sim: ['mc', 'set'] }[q.kind].includes(q.mode), tag + ': kind/mode ' + q.kind + '/' + q.mode);
      if (q.mode === 'mc') {
        ok(Array.isArray(q.opts) && q.opts.length >= 3 && Number.isInteger(q.a) && q.a >= 0 && q.a < q.opts.length, tag + ': mc opts/a');
        ok(new Set(q.opts).size === q.opts.length, tag + ': mc options distinct');
        ok(IA.check(q, { pick: q.a }) && q.opts.every((_, i) => i === q.a || !IA.check(q, { pick: i })), tag + ': exactly one right option');
      }
      const st0 = IA.initState(q);
      if (q.kind === 'map') {
        const M = D.iaMap;
        ok(M && M.places, tag + ': map data');
        (q.marks || []).forEach(m => ok(M.places[m.p], tag + ': mark place ' + m.p));
        if (q.hl) ok(M.segs[q.hl] && IA.segPts(M, q.hl).length >= 6, tag + ': highlight segment has points ' + q.hl);
        if (q.mode === 'tap') {
          ok(q.pins.length >= 3 && new Set(q.pins).size === q.pins.length && q.pins.every(p => M.places[p]), tag + ': ≥ 3 distinct known pins');
          ok(q.pins.includes(q.a), tag + ': answer is a pin');
          const sp = IA.spots(q, M);
          ok(IA.noOverlap(sp), tag + ': hot zones do not overlap → one answer: ' + q.pins.join(','));
          ok(sp.every(s => s.x - s.r >= 0 && s.x + s.r <= 490 && s.y - s.r >= 0 && s.y + s.r <= 610), tag + ': hot zones inside the map');
          const ans = sp.find(s => s.id === q.a);
          ok(IA.hitAt(sp, ans.x, ans.y) === q.a && IA.check(q, { pick: q.a }) && !IA.check(q, { pick: q.pins.find(p => p !== q.a) }), tag + ': tap judging');
        }
      }
      if (q.kind === 'time') {
        ok(Array.isArray(q.items) && q.items.length >= 3 && q.items.length <= 5 && new Set(q.items).size === q.items.length, tag + ': 3～5 distinct cards');
        const P = IA.perm('ord:' + q.id, q.items.length, true);
        ok(!P.every((v, i) => v === i), tag + ': shown order is not already the answer');
        ok(IA.check(q, { slots: q.items.map((_, i) => i) }) && !IA.check(q, { slots: q.items.map((_, i) => i).reverse() }), tag + ': order judging');
        const yrs = q.items.map(s => { const m = /(\d{4})/.exec(s); return m ? +m[1] : /十六世紀/.test(s) ? 1500 : null; }).filter(x => x != null);
        ok(yrs.every((y, i) => !i || y > yrs[i - 1]), tag + ': years ascend in answer order: ' + yrs);
        ok(st0.slots.every(v => v === -1), tag + ': starts with empty timeline');
      }
      if (q.kind === 'sim') {
        ok(['shadow', 'litmus', 'spring', 'friction', 'star', 'fire', 'rust', 'heat', 'quake', 'emag', 'lever', 'pulley', 'strg'].includes(q.sim), tag + ': sim name');
        if (q.sim === 'lever') ok(['lw', 'lp', 'rp'].every(x => q.init[x] >= 1) && q.init.lw <= IA.LV_W && q.init.rw >= 0 && q.init.rw <= IA.LV_W && q.init.lp <= IA.LV_P && q.init.rp <= IA.LV_P, tag + ': lever init');
        if (q.sim === 'pulley') ok(IA.PL_M[q.init.m] && IA.PL_W.includes(q.init.w), tag + ': pulley init');
        if (q.sim === 'strg') ok(IA.ST_L.includes(q.init.L) && IA.ST_D[q.init.d] && IA.ST_T[q.init.t] && [1, 2, undefined].includes(q.init.p), tag + ': strg init');
        if (q.sim === 'heat') ok(IA.HEAT_M[q.init.m] && q.init.t >= 0 && q.init.t <= IA.HEAT_T, tag + ': heat init');
        if (q.sim === 'quake') ok(q.init.m >= IA.QM_MIN && q.init.m <= IA.QM_MAX && (q.init.m * 2) % 1 === 0, tag + ': quake init');
        if (q.sim === 'emag') ok(IA.EM_TURNS.includes(q.init.n) && q.init.b >= 1 && q.init.b <= IA.EM_B && IA.EM_CORE[q.init.core] && [0, 1].includes(q.init.on) && [0, 1, undefined].includes(q.init.rev), tag + ': emag init');
        if (q.sim === 'star') ok(q.init.mon >= 1 && q.init.mon <= 12 && q.init.hr >= IA.HR_MIN && q.init.hr <= IA.HR_MAX, tag + ': star init');
        if (q.sim === 'fire') ok(['fuel', 'air', 'heat'].every(k => q.init[k] === 0 || q.init[k] === 1), tag + ': fire init');
        if (q.sim === 'rust') ok(IA.RUST_G[q.init.g] && q.init.day >= 0 && q.init.day <= IA.DAY_MAX, tag + ': rust init');
        if (q.sim === 'spring') ok(q.spring && q.spring.L0 > 0 && q.spring.k > 0 && q.init.n >= 0 && q.init.n <= IA.SPRING_MAX, tag + ': spring params');
        if (q.sim === 'friction') ok(IA.SURF[q.init.surf] && q.init.w >= 0 && q.init.w <= IA.FW_MAX, tag + ': friction init');
        if (q.sim === 'litmus') ok(IA.SOLS[q.init.sol], tag + ': litmus solution');
        if (q.sim === 'shadow') ok(q.init.ang >= 15 && q.init.ang <= 90 && ['E', 'S', 'W'].includes(q.init.side), tag + ': shadow init');
        if (q.mode === 'set') {
          ok(q.goal && typeof q.ans === 'string', tag + ': set has goal and ans');
          ok(!IA.check(q, st0), tag + ': start state is not already the answer');
          ok(states(q).some(s => IA.check(q, Object.assign({}, st0, s))), tag + ': goal reachable in the sim');
        }
        const c = q.chk, A = q.opts && q.opts[q.a];
        if (c) {
          const SIDE = { E: ['東', '西', '上午'], S: ['南', '北', '中午'], W: ['西', '東', '下午'] }[c.side || q.init.side];   // c.side：題目問的情境和模擬起始畫面不同（n1-s08 起始畫面不能直接露出答案）
          if (c.fn === 'side') ok(A === SIDE[1] + '邊', tag + ': shadow opposite the sun');
          if (c.fn === 'sun') ok(A.indexOf(SIDE[0] + '邊') === 0 && A.includes(SIDE[2]), tag + ': sun side from shadow');
          if (c.fn === 'zero') ok(IA.shadowLen(c.ang) === 0 && /看不到/.test(A), tag + ': 90° no shadow');
          if (c.fn === 'shadow') ok(num(A) === IA.shadowLen(c.ang), tag + ': shadow length ' + IA.shadowLen(c.ang));
          if (c.fn === 'longer') ok(IA.shadowLen(c.a) > IA.shadowLen(c.b) && (A === q.opts[q.a]), tag + ': shadow at ' + c.a + '° longer than at ' + c.b + '°');
          if (c.fn === 'len') ok(num(A) === IA.springLen(q.spring, c.n), tag + ': spring length n=' + c.n + ' → ' + IA.springLen(q.spring, c.n));
          if (c.fn === 'ext') ok(num(A) === IA.springLen(q.spring, c.n) - q.spring.L0, tag + ': spring extension n=' + c.n);
          if (c.fn === 'step') ok(num(A) === q.spring.k, tag + ': spring step ' + q.spring.k);
          if (c.fn === 'pull') ok(num(A) === IA.frictionPull(c.surf, c.w), tag + ': pull ' + IA.frictionPull(c.surf, c.w));
          if (c.fn === 'max' || c.fn === 'min') { const s = Object.keys(IA.SURF).sort((x, y) => IA.SURF[x].mu - IA.SURF[y].mu); ok(A.indexOf(IA.SURF[c.fn === 'max' ? s[2] : s[0]].n.replace('的桌面', '')) === 0, tag + ': ' + c.fn + ' friction surface'); }
          if (c.fn === 'paper') { const after = IA.paper(q.init.sol, c.color); ok(A.includes(after === 'red' ? '紅' : '藍') && (after !== c.color) === !/沒有變/.test(A), tag + ': paper colour ' + after); }
          if (c.fn === 'top') ok(IA.skyTop(c.mon, c.hr) && A === IA.skyTop(c.mon, c.hr), tag + ': sky top ' + IA.skyTop(c.mon, c.hr));
          if (c.fn === 'see') ok(A === (IA.skySee(c.mon, c.hr, c.name) ? '看得到' : '看不到'), tag + ': sky see ' + c.name);
          if (c.fn === 'turn') ok(num(A) === 15 * c.h, tag + ': sky turns 15° per hour');
          if (c.fn === 'way') ok(A.includes(IA.FIRE_WAY[c.off]) && q.opts.filter(o => o.includes(IA.FIRE_WAY[c.off])).length === 1, tag + ': fire way ' + IA.FIRE_WAY[c.off]);
          if (c.fn === 'burn') ok(A === (IA.fireBurn(c.s) ? '會燃燒' : '不會燃燒'), tag + ': burn ' + JSON.stringify(c.s));
          if (c.fn === 'lv') ok(A === IA.RUST_LV[IA.rustLv(c.g, c.day)], tag + ': rust level');
          if (c.fn === 'most') { const lv = Object.keys(IA.RUST_G).map(g => IA.rustLv(g, c.day)), mx = Math.max(...lv); ok(lv.filter(v => v === mx).length === 1 && A.includes(IA.RUST_G[Object.keys(IA.RUST_G)[lv.indexOf(mx)]].n) && q.opts.filter(o => o.includes('丁')).length === 1, tag + ': rust most'); }
          if (c.fn === 'none') ok(A.includes('甲') && A.includes('乙') && Object.keys(IA.RUST_G).filter(g => IA.rustLv(g, IA.DAY_MAX) === 0).map(g => IA.RUST_G[g].n).join() === '甲,乙', tag + ': rust none');
          if (c.fn === 'first') ok(/第 1 片/.test(A) && [2, 3, 4, 5].every(i => IA.heatAt(c.m, 1) < IA.heatAt(c.m, i)), tag + ': heat nearest piece first');
          if (c.fn === 'fall') ok(num(A) === IA.heatFall(c.m, c.t), tag + ': heat fallen ' + IA.heatFall(c.m, c.t));
          if (c.fn === 'at') ok(num(A) === IA.heatAt(c.m, c.i), tag + ': heat piece ' + c.i + ' at ' + IA.heatAt(c.m, c.i));
          if (c.fn === 'fastest') { const f = Object.keys(IA.HEAT_M).map(m => IA.heatFall(m, c.t)), mx = Math.max(...f); ok(f.filter(v => v === mx).length === 1 && A === IA.HEAT_M[Object.keys(IA.HEAT_M)[f.indexOf(mx)]].n, tag + ': heat fastest'); }
          if (c.fn === 'hnone') { const z = Object.keys(IA.HEAT_M).filter(m => IA.heatFall(m, c.t) === 0).map(m => IA.HEAT_M[m].n); ok(z.length === 2 && z.every(n => A.includes(n)) && q.opts.filter(o => z.every(n => o.includes(n))).length === 1, tag + ': heat none fell: ' + z); }
          if (c.fn === 'qlv') ok(A === IA.QLV[IA.quakeTown(c.m, c.t)], tag + ': quake level ' + IA.QLV[IA.quakeTown(c.m, c.t)]);
          if (c.fn === 'qmax') { const L = IA.QT.map(x => IA.quakeLv(c.m, x.d)), mx = Math.max(...L); ok(L.filter(v => v === mx).length === 1 && A.indexOf(IA.QT[L.indexOf(mx)].n) === 0, tag + ': quake strongest town'); }
          if (c.fn === 'qcmp') { const x = IA.quakeTown(c.m, c.x), y = IA.quakeTown(c.m, c.y), nm = id => IA.QT.find(t => t.id === id).n; ok(A === (x > y ? nm(c.x) + '比較大' : y > x ? nm(c.y) + '比較大' : '兩鎮一樣大'), tag + ': quake compare ' + x + '/' + y); }
          if (c.fn === 'qup') { const a = IA.quakeTown(c.a, c.t), b = IA.quakeTown(c.b, c.t); ok(A === (b > a ? '變大' : b < a ? '變小' : '不變'), tag + ': quake change ' + a + '→' + b); }
          if (c.fn === 'clips') ok(num(A) === IA.emClips({ on: 1, n: c.n, b: c.b, core: c.core }), tag + ': emag clips ' + IA.emClips({ on: 1, n: c.n, b: c.b, core: c.core }));
          if (c.fn === 'off') ok(IA.emClips(Object.assign({}, q.init, { on: 0 })) === 0 && IA.emClips(Object.assign({}, q.init, { on: 1 })) > 0 && /掉下來/.test(A), tag + ': emag off drops clips');
          if (c.fn === 'cmp') { const x = IA.emClips(c.x), y = IA.emClips(c.y), w = x < y ? '少' : x > y ? '多' : '一樣'; ok(A.includes(w) && q.opts.filter(o => o.includes(w)).length === 1, tag + ': emag compare ' + x + '/' + y); }
          // 六下：槓桿尺、滑輪、弦
          const need = (lw, lp, rp) => (lw * lp) % rp ? null : lw * lp / rp, dirW = (x, y) => y > x ? '高' : y < x ? '低' : '不變';
          if (c.fn === 'need') { const n = need(c.lw, c.lp, c.rp); ok(n && n <= IA.LV_W && IA.leverTilt({ lw: c.lw, lp: c.lp, rw: n, rp: c.rp }) === 0 && (c.more ? n > c.lw && /多/.test(A) : num(A) === n), tag + ': lever need ' + n); }
          if (c.fn === 'tilt') { const t = IA.leverTilt(c.s); ok(A === (t < 0 ? '左邊往下傾斜' : t > 0 ? '右邊往下傾斜' : '保持平衡不動'), tag + ': lever tilt ' + t); }
          if (c.fn === 'least') { const ns = c.ps.map(p => need(c.lw, c.lp, p)); ok(ns.every(n => n) && ns.filter(n => n === Math.min(...ns)).length === 1 && num(A) === c.ps[ns.indexOf(Math.min(...ns))] && q.opts.every((o, i) => num(o) === c.ps[i]), tag + ': lever least ' + ns); }
          if (c.fn === 'farLess') { const a = need(c.lw, c.lp, c.a), b = need(c.lw, c.lp, c.b); ok(a && b && b < a && A === '變少', tag + ': lever farther needs fewer ' + a + '→' + b); }
          if (c.fn === 'balOpt') { const r = c.os.map(([rw, rp]) => IA.leverTilt({ lw: c.lw, lp: c.lp, rw, rp }) === 0); ok(r.filter(Boolean).length === 1 && r[q.a] && q.opts.every((o, i) => o === '第 ' + c.os[i][1] + ' 格掛 ' + c.os[i][0] + ' 個'), tag + ': lever exactly one balancing option'); }
          if (c.fn === 'pf') ok(num(A) === IA.pullF(c.m, c.w) || (c.v === IA.pullF(c.m, c.w) && c.v > c.w / 2), tag + ': pulley reading ' + IA.pullF(c.m, c.w));
          if (c.fn === 'pdir') ok(A.includes('往' + IA.pullDir(c.m)) || (IA.pullDir(c.m) === '下' && A.includes('往下拉')), tag + ': pulley direction ' + IA.pullDir(c.m));
          if (c.fn === 'pmin') { const F = c.ms.map(m => IA.pullF(m, c.w)); ok(F.filter(f => f === Math.min(...F)).length === 1 && F.indexOf(Math.min(...F)) === q.a && q.opts.every((o, i) => o.includes(IA.PL_M[c.ms[i]].n)), tag + ': pulley least force ' + F); }
          if (c.fn === 'rope') ok(IA.pullLift(c.m, num(A)) === c.h && q.opts.every((o, i) => i === q.a || IA.pullLift(c.m, num(o)) !== c.h), tag + ': pulley rope length');
          if (c.fn === 'scmp') { const x = IA.strF(Object.assign({ p: 1 }, c.x)), y = IA.strF(Object.assign({ p: 1 }, c.y)), w = dirW(x, y); ok(x !== y && (c.w ? A === c.w : w === '高' ? /高/.test(A) && !/低/.test(A) : /低/.test(A) && !/高/.test(A)) && q.opts.filter(o => (w === '高' ? /變高|高$/ : /變低/).test(o)).length <= 1, tag + ': strg compare ' + x + '→' + y); }
          if (c.fn === 'vol') ok(IA.strF(Object.assign({}, q.init, { p: 1 })) === IA.strF(Object.assign({}, q.init, { p: 2 })) && IA.strVol({ p: 2 }) === '大' && A === '音量', tag + ': strg harder → louder only');
          if (c.fn === 'smax') { const F = c.os.map(o => IA.strF(Object.assign({ p: 1 }, o))); ok(F.filter(f => f === Math.max(...F)).length === 1 && F.indexOf(Math.max(...F)) === q.a, tag + ': strg highest ' + F); }
          if (c.fn === 'pole') ok(A === IA.emPole(c.rev, c.end) + ' 極', tag + ': emag pole ' + IA.emPole(c.rev, c.end));
          if (c.fn === 'kind') ok(IA.SOLS[q.init.sol].k === c.k && IA.paper(q.init.sol, 'red') === 'red' && IA.paper(q.init.sol, 'blue') === 'blue', tag + ': neutral → no change');
          if (c.fn === 'mystery') ok(A === IA.KIND_ZH[IA.SOLS[q.init.sol].k], tag + ': mystery solution kind');
          if (c.fn === 'pick') { const byName = {}; Object.keys(IA.SOLS).forEach(s => { byName[IA.SOLS[s].n] = IA.SOLS[s].k; });
            ok(q.opts.every(o => byName[o]) && q.opts.filter(o => byName[o] === c.k).length === 1 && byName[A] === c.k && (!q.init.hide || IA.SOLS[q.init.sol].k === c.k), tag + ': exactly one option is ' + c.k); }
        }
      }
    });
  });
});

// 地名只用講義有的
const M = SUBJ.social.iaMap, NAMED = { keelung: ['雞籠', '基隆'], tamsui: ['淡水'], keelungTamsui: ['基隆', '淡水'], shisanhang: ['十三行遺址'], tainan: ['臺南'], anping: ['安平'], dagou: ['打狗'], hengchun: ['恆春城'], mudan: ['牡丹社'], beinan: ['卑南遺址'], changbin: ['長濱遺址'], mainland: ['亞洲大陸'], pacific: ['太平洋'] };
// 五下起：專有地名的地點寫 h:[講義裡的詞]（例 { name:'高雄港', h:['高雄港'] }），這裡檢查每個詞都在講義裡
Object.keys(M.places).forEach(id => { const nm = NAMED[id] || M.places[id].h; if (nm) { ok(Array.isArray(nm) && nm.length, 'place h list: ' + id); nm.forEach(n => ok(handout.social.includes(n), 'place name in 講義: ' + n)); } else ok(!/[臺台]|遺址|港|城|社/.test(M.places[id].name) || /北部|南部|東部|西部/.test(M.places[id].name), 'generic area, no proper name: ' + M.places[id].name); });
// 數學題同時用到的條件也要對得上（n4-s20：砂紙 1 個砝碼 180 公克重）
ok(IA.frictionPull('sand', 1) === 180, 'n4-s20 premise: sand + 1 weight = 180');
// 題數
// 2026-11-02 五下：社會 地圖 29＋時間軸 15（u5、u6、u8、u9；u7 米食／音樂沒有適合的地點與年份，不做）、自然 star／fire／rust 各 10（n8 動物不做模擬）
// 2026-11-02 六上：社會 地圖 20＋時間軸 12（u12、u13、u14；u10 科技、u11 消費理財沒有適合的地點與年份，不做）、自然 heat（n9）、quake（n11）、emag（n12）各 10（n10 天氣不做模擬）
// 2026-11-02 六下：社會 地圖 2＋時間軸 19（u16、u17；u15 經濟沒有臺灣地點、有年份的事件太少，不做）、自然 lever、pulley（n13）、strg（n14）各 10（n15 不做模擬）
const want = { 'social:map': 91, 'social:time': 66, 'science:shadow': 10, 'science:litmus': 10, 'science:spring': 10, 'science:friction': 10, 'science:star': 10, 'science:fire': 10, 'science:rust': 10, 'science:heat': 10, 'science:quake': 10, 'science:emag': 10, 'science:lever': 10, 'science:pulley': 10, 'science:strg': 10 };
Object.keys(want).forEach(x => ok(cnt[x] === want[x], `count ${x}: ${cnt[x]} (want ${want[x]})`));
ok(!SUBJ.science.ia.n2 && !SUBJ.science.ia.n8 && !SUBJ.science.ia.n10 && !SUBJ.science.ia.n15, 'science n2 (植物)、n8 (動物)、n10 (天氣)、n15 (永續) have no simulation');
// 頁面接線
['social', 'science'].forEach(k => { const h = fs.readFileSync(path.join(MM, k + '.html'), 'utf8');
  ok(h.includes(`<script src="data/${k}/interactive.js`) && h.indexOf('<script src="interactive.js') < h.indexOf('<script src="mindmap.js'), `mindmap/${k}.html loads interactive data + component before mindmap.js`); });
const mmJs = fs.readFileSync(path.join(MM, 'mindmap.js'), 'utf8');
ok(mmJs.includes("u.id + '|I|' + q.id") && mmJs.includes("p.k === 'I'") && mmJs.includes("if(!QZ.mk && !QZ.ia) doneRec("), 'mindmap.js: mistakes id |I|, redo, not counted for unit completion');
console.log('items: ' + Object.keys(cnt).map(x => x + ' ' + cnt[x]).join('、'));
console.log(`interactive: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
