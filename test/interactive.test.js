// interactive.test.js — 🗺️ 互動圖題（社會）／🧪 實驗模擬（自然）資料與判分檢查（mindmap/interactive.js、mindmap/data/<科>/interactive.js）
// 用法：node test/interactive.test.js
// 1. 資料格式：kind／mode／d 1～3、id 全站唯一、單元存在、題數（社會 地圖 40＋時間軸 20、自然 4 種模擬各 10）、每個有題的單元 ≥ 10 題
// 2. 地圖：答案在圓圈裡、同一題的圓圈（含寬限）兩兩不重疊（＝答案唯一）、熱區直徑 ≥ 44；地名只用講義（unit*.js）有的
// 3. 時間軸：正解順序就是 items 的順序、出題順序不會剛好是正解；有年份的照年份遞增
// 4. 模擬：影長隨高度角增大而變短、彈簧伸長量和砝碼數成正比、摩擦力 塗油 ＜ 光滑 ＜ 砂紙、石蕊試紙變色規則；chk 題用模擬算出答案對照 opts[a]；set 題起始狀態不符合、但做得到
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), MM = path.join(root, 'mindmap');
const IA = require(path.join(MM, 'interactive.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL interactive:', m); } };
const ctx = { window: {} }; vm.createContext(ctx);
['social/unit1-2', 'social/unit3-4', 'social/interactive', 'science/unit1-2', 'science/unit3-4', 'science/interactive']
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
        ok(['shadow', 'litmus', 'spring', 'friction'].includes(q.sim), tag + ': sim name');
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
Object.keys(M.places).forEach(id => { if (NAMED[id]) NAMED[id].forEach(n => ok(handout.social.includes(n), 'place name in 講義: ' + n)); else ok(!/[臺台]|遺址|港|城|社/.test(M.places[id].name) || /北部|南部|東部|西部/.test(M.places[id].name), 'generic area, no proper name: ' + M.places[id].name); });
// 數學題同時用到的條件也要對得上（n4-s20：砂紙 1 個砝碼 180 公克重）
ok(IA.frictionPull('sand', 1) === 180, 'n4-s20 premise: sand + 1 weight = 180');
// 題數
const want = { 'social:map': 40, 'social:time': 20, 'science:shadow': 10, 'science:litmus': 10, 'science:spring': 10, 'science:friction': 10 };
Object.keys(want).forEach(x => ok(cnt[x] === want[x], `count ${x}: ${cnt[x]} (want ${want[x]})`));
ok(!SUBJ.science.ia.n2, 'science n2 (植物) has no simulation');
// 頁面接線
['social', 'science'].forEach(k => { const h = fs.readFileSync(path.join(MM, k + '.html'), 'utf8');
  ok(h.includes(`<script src="data/${k}/interactive.js`) && h.indexOf('<script src="interactive.js') < h.indexOf('<script src="mindmap.js'), `mindmap/${k}.html loads interactive data + component before mindmap.js`); });
const mmJs = fs.readFileSync(path.join(MM, 'mindmap.js'), 'utf8');
ok(mmJs.includes("u.id + '|I|' + q.id") && mmJs.includes("p.k === 'I'") && mmJs.includes("if(!QZ.mk && !QZ.ia) doneRec("), 'mindmap.js: mistakes id |I|, redo, not counted for unit completion');
console.log('items: ' + Object.keys(cnt).map(x => x + ' ' + cnt[x]).join('、'));
console.log(`interactive: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
