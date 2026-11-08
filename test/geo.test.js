// test/geo.test.js — 🌍 地理（2026-11-08）：單元清單一致、資料格式（Geo.validate）、判分、同步、學習幣、每日紀錄的接線。
// 用法：node test/geo.test.js（正本或部署夾都可以跑；瀏覽器實測另外跑 geo-browser.js，見 geo/CONTRACT.md）
'use strict';
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('FAIL', m); } };
const read = f => fs.readFileSync(path.join(root, f), 'utf8');

// ---- 載入引擎、地點、地圖、全部單元資料（跟瀏覽器一樣掛在 globalThis）----
globalThis.GeoPlaces = require(path.join(root, 'geo/places.js'));
const Geo = globalThis.Geo = require(path.join(root, 'geo/geo.js'));
for (const f of ['geo/maps/tw.js', 'geo/maps/world.js']) { globalThis.window = globalThis; new Function(read(f))(); }
const dataDir = path.join(root, 'geo/data'), files = fs.existsSync(dataDir) ? fs.readdirSync(dataDir).filter(f => /^[a-z]\d\.js$/.test(f)).sort() : [];
files.forEach(f => new Function(read('geo/data/' + f))());
const U = Geo.units();

// ---- 單元清單：completion.js、subjects.js 兩份一樣；資料檔名＝單元 id ----
const KC = require(path.join(root, 'completion.js'));
const sj = read('subjects.js'), m = /const GEO_UNITS = (\[[\s\S]*?\]\]);/.exec(sj);
ok(m && JSON.stringify(eval(m[1])) === JSON.stringify(KC.GEO_UNITS), 'subjects.js GEO_UNITS === completion.js GEO_UNITS');
ok(KC.GEO_UNITS.length === 18 && KC.GEO_UNITS.every(x => Geo.UNIT_RE.test(x[0])), '18 units, ids m1–m5 t1–t6 w1–w7');
ok(files.length >= 6, 'data files: ' + files.join(' '));
files.forEach(f => ok(U[f.replace('.js', '')], 'data file registers its unit: ' + f));

// ---- 每個單元的資料（validate：題數、題型、字數、圓圈不重疊、正解不是唯一最長 ≤ 25%…）----
Object.keys(U).sort().forEach(id => { const e = Geo.validate(U[id]); ok(!e.length, id + ' validate:\n  ' + e.join('\n  ')); });
// 題目 id 全站不重複
const ids = [].concat(...Object.values(U).map(u => u.practice.concat(u.test).map(q => q.id)));
ok(new Set(ids).size === ids.length, 'question ids unique across units');

// ---- 判分：每一題用正解作答 → 對；換一個答案 → 錯（drag／puzzle 交換兩個）----
Object.values(U).forEach(u => u.practice.concat(u.test).forEach(q => {
  const st = Geo.initState(q);
  if (q.type === 'tap' || q.type === 'mc') st.pick = q.a;
  if (q.type === 'drag') st.at = q.items.map(it => it.to);
  if (q.type === 'puzzle') st.at = q.pieces.map(p => p.id);
  ok(Geo.ready(q, st) && Geo.check(q, st), q.id + ' right answer passes');
  const w = JSON.parse(JSON.stringify(st));
  if (q.type === 'tap') w.pick = (q.pins.map(p => typeof p === 'string' ? p : p.id).find(id => id !== q.a));
  if (q.type === 'mc') w.pick = (q.a + 1) % q.opts.length;
  if (q.type === 'drag' || q.type === 'puzzle') { const t = w.at[0]; w.at[0] = w.at[1]; w.at[1] = t; }
  ok(!Geo.check(q, w), q.id + ' wrong answer fails');
  // tap：點圓圈中心＝那個圓圈；圓圈外很遠＝不判分
  if (q.type === 'tap') { const V = Geo.view(q.fig), sp = Geo.pinsOf(q, V); ok(sp.every(s => Geo.hitAt(sp, s.x, s.y) === s.id) && Geo.hitAt(sp, -999, -999) === null, q.id + ' hitAt'); }
  // 畫得出來（node 裡也能產生 SVG 字串，沒有 undefined／NaN）
  const svg = q.fig ? Geo.figSVG(q, st, true) : '';
  ok(!/undefined|NaN/.test(svg), q.id + ' figure renders without undefined/NaN');
}));

// ---- 純函式 ----
ok(JSON.stringify(Geo.perm('x', 4)) === JSON.stringify(Geo.perm('x', 4)) && Geo.perm('abc', 4, true).some((v, i) => v !== i), 'perm is deterministic and avoids identity');
{ const V = Geo.view({ map: 'world' }); const a = V.P(-180, 90), b = V.P(180, -90); ok(a[0] === 0 && a[1] === 0 && b[0] === 500 && b[1] === 250, 'world view: plate carrée 500×250'); }
{ const V = Geo.view({ map: 'tw' }), p = Geo.pinXY('taipei', V), q = Geo.pinXY('kaohsiung', V); ok(p.y < q.y && p.x > q.x, 'tw view: 臺北 is north-east of 高雄 on screen'); }
{ const V = Geo.view({ map: 'world', proj: 'polar', edge: -60 }), c = V.P(0, -90); ok(c[0] === 250 && c[1] === 250, 'polar view: south pole at centre'); }
ok(Geo.shapePath({ tw: 'penghu' }, Geo.view({ map: 'tw' })).split('M').length - 1 === 3, 'tw.land.penghu has 3 rings');
ok(Geo.shapePath({ c: 'af' }, Geo.view({ map: 'world' })).length > 1000 && Geo.shapePath({ w: '158' }, Geo.view({ map: 'world' })).length > 20, 'world shapes: continent, country by ISO id');
// 換日線：太平洋置中的圖（東邊 > 180），西經的地點自己換到右邊；names 也一樣
{ const V = Geo.view({ map: 'world', box: [105, -50, 215, 30] }), h = Geo.pinXY('hawaii', V), f = Geo.pinXY('fiji', V);
  ok(h.x > f.x && h.x > 400 && h.x <= 500, 'antimeridian: hawaii (west lon) lands east of fiji on a Pacific map: ' + h.x);
  ok(/>夏威夷</.test(Geo.figSVG({ type: 'mc', fig: { map: 'world', box: [105, -50, 215, 30], names: ['hawaii'] } }, {}, false)), 'antimeridian: names drawn'); }
// 示意圖也畫 marks、names；names 靠邊的字不超出圖
{ const s = Geo.figSVG({ type: 'mc', fig: { svg: '<rect width="500" height="300"/>', w: 500, h: 300, marks: [{ p: { id: 'a', x: 100, y: 100 }, t: '甲' }], names: [{ n: '很長的參考標字', x: 495, y: 5 }] } }, {}, false);
  const m = /<text x="([\d.]+)" y="([\d.]+)"[^>]*>很長的參考標字</.exec(s);
  ok(/>甲</.test(s) && m && +m[1] + 7 * 15 / 2 <= 500 && +m[2] - 15 >= 0, 'schematic: marks + names drawn, edge label kept inside: ' + (m && m.slice(1))); }
// 指北針：右下角有圓圈時換到別的角
{ const q = { id: 'x', type: 'tap', fig: { map: 'world', box: [0, 0, 50, 40] }, pins: [{ id: 'a', n: 'a', lon: 48, lat: 2 }, { id: 'b', n: 'b', lon: 10, lat: 30 }], a: 'a' }, V = Geo.view(q.fig);
  const t = /class="geo-compass" transform="translate\(([\d.]+),([\d.]+)\)"/.exec(Geo.figSVG(q, Geo.initState(q), false));
  ok(t && !(+t[1] === V.w - 34 && +t[2] === V.h - 40), 'compass moves away from a bottom-right pin: ' + (t && t.slice(1))); }
// 拼圖 names:false：放上去的片作答時不寫名字，揭曉後才寫
{ const q = { id: 'x', type: 'puzzle', names: false, fig: { map: 'world', box: [110, -50, 180, 0] }, pieces: [{ id: 'au', t: '澳洲', shape: { w: '036' } }, { id: 'nz', t: '紐西蘭', shape: { w: '554' } }] }, st = { at: ['au', 'nz'], sel: null };
  ok(!/>澳洲</.test(Geo.figSVG(q, st, false)) && />澳洲</.test(Geo.figSVG(q, st, true)), 'puzzle names:false hides placed names until reveal'); }
// world.js：除了經過極點的封口，沒有經度跳超過 90 度的線段（2026-11-08 南極洲那條橫切的直線）
{ const bad = []; GeoMaps.world.countries.forEach(c => c.r.forEach(r => { r = r.h || r; for (let i = 2; i + 1 < r.length; i += 2) { const a = r[i - 2] / 10, b = r[i] / 10; if (Math.abs(a - b) > 90 && !(Math.abs(r[i - 1]) === 900 && Math.abs(r[i + 1]) === 900)) bad.push(c.n + ' ' + a + '→' + b); } }));
  ok(!bad.length, 'world.js: no long jumps across a ring ' + bad.join(', ')); }
{ const d = Geo.shapePath({ c: 'an' }, Geo.view({ map: 'world', proj: 'polar' })); ok(d && !/250 250/.test(d), 'polar: Antarctica drawn without a seam to the pole'); }
// validate 抓得到錯
{ const bad = { id: 'm1', learn: [], practice: [{ id: 'x', type: 'tap', q: '?', fig: { map: 'tw' }, pins: ['taipei', 'taipei'], a: 'nowhere', why: '' }], test: [] }, e = Geo.validate(bad).join('\n');
  ok(/learn 要 3/.test(e) && /practice 要剛好 30/.test(e) && /id 要是 m1-p01/.test(e) && /why 要有/.test(e) && /重疊/.test(e) && /a 要是 pins/.test(e), 'validate catches errors'); }

// ---- 地點表：每筆都有名稱、經緯度、洲；臺灣的在臺灣附近 ----
const P = globalThis.GeoPlaces;
Object.keys(P).forEach(k => { const p = P[k]; ok(p.n && typeof p.lon === 'number' && typeof p.lat === 'number' && Math.abs(p.lon) <= 180 && Math.abs(p.lat) <= 90 && /^(as|eu|af|na|sa|oc|an|oce)$/.test(p.co) && typeof p.cn === 'string' && p.k, 'place fields: ' + k); });
{ const KINDS = 'island islands cape peninsula sandbar land mountain rock reef iceShelf pole trench sea strait ocean lake river reservoir canal city port airport industry station country'.split(' ');
  const bad = Object.keys(P).filter(k => KINDS.indexOf(P[k].k) < 0); ok(!bad.length, 'place kinds in the CONTRACT list: ' + bad.map(k => k + ':' + P[k].k).join(' '));
  const keys = [...read('geo/places.js').matchAll(/^\s{4}([A-Za-z0-9_]+):\s*\{/gm)].map(m => m[1]), dup = keys.filter((k, i) => keys.indexOf(k) !== i);   // 物件字面值重複的 key 會被後面的蓋掉，要看原始碼
  ok(keys.length === Object.keys(P).length && !dup.length, 'places.js ids unique in source: ' + keys.length + ' ' + dup.join(' ')); }
Object.keys(P).filter(k => P[k].cn === 'TW').forEach(k => ok(P[k].lon > 114 && P[k].lon < 123 && P[k].lat > 10 && P[k].lat < 27, 'TW place in range: ' + k));

// ---- 地圖檔：出處、授權寫在檔頭；大小 ----
['geo/maps/tw.js', 'geo/maps/world.js'].forEach(f => { const s = read(f); ok(/Natural Earth/.test(s) && /公有領域|public domain/.test(s) && /world-atlas/.test(s), f + ' header names source + license'); ok(s.length < 80 * 1024, f + ' size ' + s.length + ' < 80KB'); });

// ---- 完成判定、同步 ----
const SM = require(path.join(root, 'syncmerge.js'));
{ let d = {}; d = KC.record(d, 'geo', 'm1p1', 90, 1); d = KC.record(d, 'geo', 'm1p2', 70, 2); d = KC.record(d, 'geo', 'm1p2', 60, 3); d = KC.record(d, 'geo', 'zz', 99, 4);
  ok(d.geo.m1p1 === 90 && d.geo.m1p2 === 70 && !('zz' in d.geo), 'record geo keeps best, drops bad keys');
  let r = KC.evaluate('geo:m1', {}, { done: d }); ok(r.status === 'doing' && r.checklist.length === 4 && r.checklist[0].ok && !r.checklist[1].ok, 'geo:m1 doing ' + JSON.stringify(r));
  ['m1p2', 'm1p3'].forEach(k => { d = KC.record(d, 'geo', k, 80, 5); }); d = KC.record(d, 'geo', 'm1t', 80, 6);
  r = KC.evaluate('geo:m1', {}, { done: d }); ok(r.status === 'done' && r.pct === 100, 'geo:m1 done at 80/80/80 + 80');
  ok(KC.evaluate('geo:m9', {}, { done: d }) === null && KC.evaluate('geo:t1', {}, { done: {} }).status === 'todo', 'unknown unit → null; no record → todo');
  const a = SM.normDone({ geo: { m1p1: 50, t1t: 90 } }), b = SM.normDone({ geo: { m1p1: 80, w7p3: 10 } }), mg = SM.mergeDone(a, b);
  ok(mg.geo.m1p1 === 80 && mg.geo.t1t === 90 && mg.geo.w7p3 === 10 && JSON.stringify(SM.mergeDone(b, a)) === JSON.stringify(mg), 'mergeDone geo: max, commutative');
  // 最壞情況：18 單元 × 4 個 key 全部 100
  const geo = {}; KC.GEO_UNITS.forEach(([id]) => ['p1', 'p2', 'p3', 't'].forEach(k => { geo[id + k] = 100; }));
  ok(Object.keys(SM.normDone({ geo }).geo).length === 72 && SM.bytes(SM.normDone({ geo }).geo) < 2048, 'done.geo worst case 72 keys < 2KB: ' + SM.bytes(SM.normDone({ geo }).geo));
  ok(KC.catalog({}).some(s => s.k === 'geo' && s.units.length === 18), 'catalog lists 地理 (map.html)'); }

// ---- 學習幣、每日紀錄、頁面接線 ----
const KCoins = require(path.join(root, 'kids-coins.js'));
const core = KCoins._core || KCoins;
ok(/geo:\(practice\|test\)/.test(read('kids-coins.js')), 'kids-coins MM_RE has geo:practice|test');
const g = read('geo/geo.js');
ok(g.includes("KidsCoins.answer(!!ok, 'social')") && g.includes("KidsDaily.rec('geo', !!ok)") && g.includes("item: item") && g.includes("'geo:practice'") && g.includes("'geo:test'"), 'geo.js: answer + daily + practice_round');
ok(/\['geo', 'g', '地理'\]/.test(read('kids-daily.js')), 'kids-daily has 地理 (code g)');
const html = read('geo/unit.html'), at = s => html.search(new RegExp('src="' + s.replace(/[.]/g, '\\.') + '(\\?v=[0-9a-f]+)?"'));   // 部署夾的引用有 ?v=雜湊
ok(at('../syncmerge.js') >= 0 && at('../syncmerge.js') < at('../kids-daily.js') && at('../completion.js') < at('geo.js') && at('geo.js') < html.indexOf('document.write'), 'unit.html script order');
ok(/repeat\(9,/.test(read('subjects.css')) && (sj.match(/\{ k: '[a-z]+', n: /g) || []).length === 9, '9 subject tabs');
if (core.validEvent) ok(core.validEvent({ event_id: 'e-1', type: 'practice_round', item: 'geo:practice', correct: 8, total: 10 }) && !core.validEvent({ event_id: 'e-1', type: 'practice_round', item: 'geo:zzz', correct: 8, total: 10 }), 'coin event geo:practice valid, geo:zzz not');

// ---- 2026-11-08 歷史漫畫 × 地圖：42 話都對到 places.js 的地點（geo/history.js），世界篇重點頁的「這一洲的歷史故事」每話都落在某一洲 ----
const CAT = require(path.join(root, 'comics/catalog.js')), GH = require(path.join(root, 'geo/history.js'));
const EPIDS = CAT.vols.flatMap(v => v.eps.map(e => e.id));
ok(EPIDS.length === 42 && JSON.stringify(Object.keys(GH.EP).sort()) === JSON.stringify(EPIDS.slice().sort()), 'history.js: exactly the 42 catalog episodes');
EPIDS.forEach(id => ok(P[GH.EP[id]], 'history.js: ' + id + ' → place ' + GH.EP[id] + ' exists in places.js'));
{ const cos = ['as', 'eu', 'af', 'na', 'sa', 'oc', 'an'], n = {}; cos.forEach(co => GH.byCo(co, P, CAT).forEach(e => { n[e.id] = (n[e.id] || 0) + 1; }));
  ok(EPIDS.every(id => n[id] === 1 + (GH.ALSO[id] || []).length), 'history.js: every episode lands in exactly one continent (+ALSO): ' + EPIDS.filter(id => n[id] !== 1 + (GH.ALSO[id] || []).length).join(' '));
  ok(GH.byCo('af', P, CAT).some(e => e.id === 'v6e3') && GH.byCo('eu', P, CAT).some(e => e.id === 'v6e3'), 'history.js: v6e3 (柏林與非洲) listed under Europe and Africa'); }
ok(/href="\.\.\/geo\/history\.html\?ep=\$\{esc\(ep\.id\)\}"/.test(read('comics/comic.js')) && /🌍 在地圖上看這一站/.test(read('comics/comic.js')), 'comic.js: where page links to ../geo/history.html?ep=<id>');
{ const h = read('geo/history.html'); ['places.js', 'maps/world.js', 'geo.js', '../comics/catalog.js', 'history.js'].forEach(f => ok(h.includes('src="' + f), 'history.html loads ' + f)); }

// ---- 世界篇開場短漫畫 geo/comics/w1～w7.js（comics/CONTRACT.md §3、§13）：結構、元件、地點、畫得出來 ----
{
  const vm = require('vm'), A = require(path.join(root, 'comics/art.js')), ctx = { ComicArt: A }; vm.createContext(ctx);
  const len = s => String(s).replace(/\s/g, '').length;
  ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'].forEach(u => {
    const f = 'geo/comics/' + u + '.js', W = m => f + '：' + m;
    if (!ok(fs.existsSync(path.join(root, f)), W('不存在'))) return;
    try { vm.runInContext(read(f), ctx, { filename: f }); } catch (e) { ok(false, W('跑不起來：' + e.message)); return; }
    const ep = ctx.COMIC_DATA && ctx.COMIC_DATA[u];
    if (!ok(ep && ep.id === u && ep.title && ep.series && ep.series.zh === '時光搖搖車' && Array.isArray(ep.pages), W('COMIC_DATA.' + u + ' 要有 id、title、series、pages'))) return;
    ok(ep.geoFig && !/NaN/.test(JSON.stringify(Geo.view(ep.geoFig))), W('geoFig（地圖範圍）'));
    const panels = ep.pages.flatMap(pg => pg.panels);
    ok(panels.length >= 4 && panels.length <= 6, W('4～6 格，現在 ' + panels.length));
    ep.pages.forEach((pg, pi) => {
      const L = A.LAYOUTS[pg.layout]; if (!ok(L && L.length === pg.panels.length, W(`第 ${pi + 1} 頁版面 ${pg.layout} 格數不對`))) return;
      pg.panels.forEach((p, i) => {
        const w = W(`第 ${pi + 1} 頁第 ${i + 1} 格 `), s = L[i];
        ok(A.SCENES[p.scene] && p.shot, w + '場景／分鏡說明');
        ok(Array.isArray(p.places) && p.places.length && p.places.every(id => P[id]), w + 'places 要有、而且都是 places.js 的 id：' + JSON.stringify(p.places));
        (p.actors || []).forEach(a => ok(A.CAST[a.c] && (!a.pose || A.POSES[a.pose]) && (!a.expr || A.EXPR[a.expr]) && [].concat(a.hold || []).every(h => ['notebook', 'tablet', 'tabletBlank', 'cup', 'spoon', 'sack', 'reed'].includes(h) || A.HOLDS[h]), w + '角色／姿勢／表情／手上的東西：' + a.c));
        (p.back || []).concat(p.props || []).forEach(x => ok(A.PROPS[x.k], w + '道具不存在 ' + x.k));
        (p.cards || []).forEach(c => ok(A.ICONS[c.icon], w + '字卡圖示不存在 ' + c.icon));
        (p.bubbles || []).forEach(b => ok(b.t && len(b.t) <= 36 && b.x >= 0 && b.w >= 100 && b.x + b.w <= s.w && (!b.kind || ['say', 'shout', 'think', 'car'].includes(b.kind)) && !/血|屍|砍頭|斬首|殺死/.test(b.t), w + '泡泡：' + b.t));
        ok((p.bubbles || []).length + (p.caption || []).length + (p.cards || []).length > 0, w + '這格沒有字');
        let svg = ''; try { svg = A.panelSvg(p, s.w, s.h); } catch (e) { ok(false, w + '畫不出來：' + e.message); }
        ok(svg && !/NaN|undefined/.test(svg), w + '畫出來有 NaN／undefined');
      });
    });
  });
  const uh = read('geo/unit.html'), ih = read('geo/intro.html');
  ok(/id="tab-intro"/.test(uh) && uh.indexOf('id="tab-intro"') < uh.indexOf('id="tab-learn"') && /intro\.html\?u=/.test(uh) && /KidsDone\.record\('geo', key, 100\)/.test(uh) && !/KidsCoins/.test(uh), 'unit.html: 🎬 開場 tab first, plays intro.html, records geo <u>o (no coins)');
  ok(['../quizkit.js', '../chinese/reading-core.js', '../comics/art.js', '../comics/comic.js'].every(f => ih.includes('src="' + f)) && /short: 1/.test(ih) && /onStep/.test(ih) && /onEnd/.test(ih), 'intro.html borrows the comic engine (short:1, onStep, onEnd)');
}
// 看過開場：kids_done.geo.w1o～w7o（已經會同步的 done.geo，不新增同步 key）
{ const d = SM.normDone({ geo: { w1o: 100, w7o: 100, m1o: 100, w8o: 100, t1p1: 90 } }).geo, k = Object.keys(d).sort().join();
  ok(k === 't1p1,w1o,w7o', 'done.geo keeps w1o～w7o (intro seen), drops m1o/w8o: ' + k);
  ok(KC.record({}, 'geo', 'w3o', 100, 1).geo.w3o === 100 && KC.evaluate('geo:w3', {}, { done: { geo: { w3o: 100 } } }).status === 'todo', 'intro seen is recorded but does not count toward completion'); }

console.log(`geo: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
