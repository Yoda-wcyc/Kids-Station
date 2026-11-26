// node test/symmetry.test.js — 五上單元七〈線對稱圖形〉（2026-11-24，math/grade/g5a7.js）；smoke 會跑
// 只測 smoke／math-grade.test.js 沒測的：第 13 回紙本兩題原題（正解 4、4；孩子寫 3、60 要判錯）；paper.js MG_ROWS → kids-mistakes seed 補進錯題庫的規則；
// 完成判定、做過 2 次就鎖；每題答對 2 次的跨裝置同步（pg 'Ms2'，新舊版互收）。
// 每題答案驗算在 math-grade.test.js（test/mg-verify/g5a7.js），同步最壞大小在 smoke.js（整份文件量）。
'use strict';
const path = require('path'), root = path.join(__dirname, '..');
const MG = require(path.join(root, 'math', 'grade.js')); require(path.join(root, 'math', 'grade', 'g5a7.js'));
const V = require('./mg-verify/g5a7.js'), KM = require(path.join(root, 'kids-mistakes.js'))._core, P = require(path.join(root, 'math', 'paper.js'));
const KC = require(path.join(root, 'completion.js')), KL = require(path.join(root, 'kids-lock.js')), SM = require(path.join(root, 'syncmerge.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL symmetry:', m); } };
const H = MG.H, U = MG.UNITS.g5a7, qs = MG.bank('g5a7'), txt = q => MG.plain(q.q);

// ---------- 第 13 回紙本兩題原題（fixed，不進題庫） ----------
const [p1, p2] = U.fixed;
ok(p1.id === 'g5a7-pp1' && p2.id === 'g5a7-pp2' && MG.byId('g5a7-pp1') === p1 && MG.byId('g5a7-pp2') === p2 && !qs.includes(p1) && !qs.includes(p2), 'paper questions: stable ids g5a7-pp1/pp2, found by byId, not in the practice bank');
ok(txt(p1) === '下圖以甲線為對稱軸，甲線通過 AH 的中點 M。AH＝8 公分，AM 是幾公分？' && H.eq(p1.a, 4) && MG.check(p1, '4').ok && !MG.check(p1, '3').ok && H.eq(V.mid(p1.v), 4), 'paper (1) AH＝8 → AM＝4; the child\'s 3 is wrong');
ok(txt(p2) === '下圖以甲線為對稱軸，周長是 40 公分，AH＝8 公分、GF＝4 公分、EF＝4 公分、DE＝8 公分，AB 是幾公分？' && H.eq(p2.a, 4) && MG.check(p2, '4').ok && !MG.check(p2, '60').ok && H.eq(V.peri(p2.v, p2), 4), 'paper (2) perimeter 40 → AB＝4; the child\'s 60 is wrong');
ok(/AB＝GH/.test(p2.why) && /GF＝BC＝4/.test(p2.why) && /40－32＝8/.test(p2.why) && /8÷2＝4/.test(p2.why) && /AM 和 HM 一樣長/.test(p1.why), 'paper explanations: which edges are equal, then the 算式');
ok(/>AH|>8</.test(p1.svg) && ['8', '4', '?'].every(x => p2.svg.includes('>' + x + '</text>')), 'paper figures carry the given lengths');

// ---------- paper.js MG_ROWS → 錯題庫（kids-mistakes seed：只補有 pp: 的帳號、14 天內、有墓碑不補） ----------
const R = P.MG_ROWS, DAY = 864e5;
ok(R.length === 2 && R.map(r => r.id).join() === 'mg:g5a7-pp1,mg:g5a7-pp2' && R.every(r => Object.keys(r).sort().join() === 'd,id,p,src' && r.d === '2026-11-24' && /^第 13 回 線對稱圖形 八邊形 第 \d 題$/.test(r.src)), 'MG_ROWS: 2 rows, date + source only (no child info)');
R.forEach(r => { const e = MG.mkEntry(MG.byId(r.p.qid)); ok(e.id === r.id && KM.canon(e.p) === KM.canon(r.p) && KM.unitOf('math', r.id, r.p) === 'g5a7', 'row ' + r.id + ': p is exactly what grade.html records (' + r.p.b + '), listed under 五上 單元七'); });
const rows = () => R.map(r => ({ id: r.id, t: Date.parse(r.d + 'T00:00:00+08:00'), p: r.p, was: r.was }));   // 同 kids-mistakes.js seedPaper
const T0 = Date.parse('2026-11-24T00:00:00+08:00'), NOW = T0 + 9 * 3600e3, PP = () => ({ 'pp:A': { d: 1, w: 1, t: 5, u: 5 } });
const b1 = PP();
ok(KM.seed(b1, rows(), NOW) === 2 && R.every(r => b1[r.id] && b1[r.id].c === 0 && b1[r.id].w === 1 && b1[r.id].t === T0 && b1[r.id].u === T0 && b1[r.id].p.type === 'grade'), 'seed: account with pp: gets both, c=0 w=1 t=u=registration day');
ok(KM.liveList(b1).filter(e => e.p.type === 'grade').map(e => e.id).sort().join() === 'mg:g5a7-pp1,mg:g5a7-pp2' && KM.liveList(b1).every(e => e.p.type !== 'grade' || KM.unitOf('math', e.id, e.p) === 'g5a7'), 'seed: both live in the math book under 五上 單元七');
ok(KM.seed(b1, rows(), NOW + 10) === 0, 'seed: second run adds nothing');
ok(KM.seed({}, rows(), NOW) === 0 && KM.seed({ 'fa:1_3+3_4': { c: 0, w: 1, t: 1, u: 1, p: {} } }, rows(), NOW) === 0, 'seed: accounts without pp: get nothing');
ok(KM.seed(PP(), rows(), T0 + KM.SEED_DAYS * DAY + 1) === 0 && KM.seed(PP(), rows(), T0 + KM.SEED_DAYS * DAY - 1) === 2, 'seed: only within ' + KM.SEED_DAYS + ' days of registration');
const rr = [1, 2, 3].map(k => KM.mark(b1, 'mg:g5a7-pp2', true, MG.mkEntry(p2).p, NOW + 100 + k));
ok(rr.join() === 'counted,counted,graduated' && b1['mg:g5a7-pp2'].d === 1 && KM.seed(b1, rows(), NOW + 200) === 0 && b1['mg:g5a7-pp2'].d === 1, 'seeded question graduates after 3 right in a row; tombstone → not re-added');
const stale = PP(); KM.seed(stale, rows(), NOW + 300);
ok(SM.mergeMk({ math: b1 }, { math: stale }).math['mg:g5a7-pp2'].d === 1 && SM.mergeMk({ math: stale }, { math: b1 }).math['mg:g5a7-pp2'].d === 1, 'stale device seeding later cannot resurrect the graduated one via sync');
ok(KM.mark(PP(), 'mg:g5a7-pp1', false, MG.mkEntry(p1).p, NOW) === 'added' && SM.normMk({ math: b1 }).math['mg:g5a7-pp1'].p.qid === 'g5a7-pp1', 'grade entries go through the existing math mistake sync (mk.math)');
const KMs = require('fs').readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8');
ok(/\.concat\(\(P\.MG_ROWS \|\| \[\]\)\.map/.test(KMs), 'seedPaper also reads paper.js MG_ROWS');

// ---------- 完成、做過 2 次就鎖、課程地圖 ----------
let d = KC.record({}, 'mg', 'g5a7q', 87, 1);
ok(KC.evaluate('mg:g5a7', {}, { done: d }).status === 'doing', 'completion: practice only → doing');
d = KC.record(d, 'mg', 'g5a7t', 85, 2);
ok(KC.evaluate('mg:g5a7', {}, { done: d }).status === 'done', 'completion: practice ≥80% + unit test ≥80 → done');
const cat = KC.catalog({}).find(s => s.k === 'math'), iu = cat.units.findIndex(u => u.key === 'mg:g5a7');
ok(iu > 0 && cat.units[iu].group === '五上' && cat.units[iu].href === 'index.html#s/math/g5a7' && iu < cat.units.length - 1, 'course map: 五上 單元七 in the math path, not the last one (so it can lock)');
ok(String(KL.slot('mg:g5a7')) === 'g5a,7' && KL.keyFromUrl('math/grade.html', '?u=g5a7') === 'mg:g5a7' && KL.keyFromUrl('math/grade.html', '?mistakes=1') === null, 'kids-lock: slot g5a#7, page URL → mg:g5a7, mistakes page never locked');
const two = KL.setV(d, 'mg:g5a7', 2), st = KL.lookup({}, { done: two }).state('mg:g5a7'), st1 = KL.lookup({}, { done: KL.setV(d, 'mg:g5a7', 1) }).state('mg:g5a7');
ok(st.locked && st.next && st.next.key !== 'mg:g5a7' && !st1.locked && KL.badgeText(st) === '✓2 🔒' && KL.badgeText(st1) === '✓1', 'kids-lock: done twice → locked, points to the next unit (' + (st.next && st.next.key) + '); once → ✓1');
let n1 = KL.onRecord(d, KC.record(d, 'mg', 'g5a7t', 90, 3), 'mg', 'g5a7t', 90, {}, {});
ok(KL.getV(n1, 'mg:g5a7') % 3 === 2, 'kids-lock: another unit test ≥80 after done → 2 times');

// ---------- 答對 2 次的題跨裝置同步：pg f 旗標 'Ms2'（2026-11-26 拿掉 'Ms1'：答對 1 次只影響抽題順序，用本機的）----------
const OLD = require(path.join(__dirname, 'fixtures', 'syncmerge-old-1121.js'));   // 凍結的舊版（線上 11-21；不認得 Ms 群組）
const allC = Object.fromEntries(qs.map((q, i) => [q.id, i % 3]));   // 0／1／2 輪流
const two2 = c => Object.fromEntries(Object.entries(c).filter(([, v]) => v >= 2));
{ const pg = SM.pgFromLocal({ mg: { c: allC } }), back = SM.pgApply(pg, {}).mg.c;
  ok(SM.canon(back) === SM.canon(two2(allC)), 'encode → decode: only the ids answered right twice come back (1 stays local) ' + JSON.stringify(pg));
  ok(/^Ms2=[0-9a-v]+$/.test(pg.f) && !pg.v, 'only one f group Ms2 (no Ms1) ' + pg.f); }
{ const pg = SM.pgFromLocal({ mg: { c: { 'g5a7-mid8': 2, 'g5a7-pp1': 2, 'g5a7-kite29': 1, 'g5a7-mid10': 1, 'g6b6-x0': 2, 'g5a7-x': 2, 'g5a7-kite23': 9, 'g5a7-kite2': 1 } } });
  ok(SM.canon(SM.pgApply(pg, {}).mg.c) === SM.canon({ 'g5a7-kite23': 2 }), 'bad / other-unit / paper ids are not synced; count above 2 → 2; 1 not synced ' + JSON.stringify(SM.pgApply(pg, {}).mg)); }
{ const A = { 'g5a7-mid0': 1, 'g5a7-pair3': 2, 'g5a7-kite20': 1 }, B = { 'g5a7-mid0': 2, 'g5a7-ang1': 1, 'g5a7-kite20': 1 }, pa = SM.pgFromLocal({ mg: { c: A } }), pb = SM.pgFromLocal({ mg: { c: B } });
  const m = SM.mergePg(pa, pb), onA = SM.pgApply(m, { mg: { c: A, x: 1 } }).mg;
  ok(SM.canon(onA.c) === SM.canon({ 'g5a7-mid0': 2, 'g5a7-pair3': 2, 'g5a7-kite20': 1 }) && onA.x === 1, 'merge: B\'s 2 lifts A\'s 1; B\'s 1 (ang1) stays on B; other fields of kids_mg kept ' + JSON.stringify(onA));
  ok(SM.canon(SM.mergePg(pa, pb)) === SM.canon(SM.mergePg(pb, pa)) && SM.canon(SM.mergePg(m, m)) === SM.canon(m), 'merge is commutative and idempotent');
  ok(SM.pgApply(m, { mg: { c: Object.assign({}, A, B, { 'g5a7-mid0': 2 }) } }).mg === undefined, 'nothing new → kids_mg not rewritten');
  const L2 = { mg: { c: { 'g5a7-mid0': 2, 'g6b6-q3': 2 } } }, d2 = SM.pgApply(SM.pgFromLocal({ mg: { c: { 'g5a7-mid0': 1, 'g5a7-ang1': 2 } } }), L2).mg.c;
  ok(d2['g5a7-mid0'] === 2 && d2['g5a7-ang1'] === 2 && d2['g6b6-q3'] === 2, 'applying never lowers a local count and keeps other units (local only) ' + JSON.stringify(d2));
  ok(!SM.pgApply({ f: 'Qm1=1' }, { mg: { c: A } }).mg && !SM.pgApply({}, {}).mg, 'doc without Ms groups (old doc) → kids_mg untouched, no empty key created'); }
// 11-24 版裝置（線上現行）還會送 'Ms1'：新版收到就丟（不還原成 1 次、合併結果不留），Ms2 照收
{ const c = { 'g5a7-mid0': 2, 'g5a7-kite23': 1, 'g5a7-ang1': 1 }, ms2 = SM.pgFromLocal({ mg: { c: { 'g5a7-mid0': 2, 'g5a7-kite23': 2, 'g5a7-ang1': 2 } } }).f.replace('Ms2', 'Ms1');   // 同樣的位元圖寫法
  const doc1124 = { f: [ms2, SM.pgFromLocal({ mg: { c } }).f, 'Qm1=1'].sort().join(',') };
  ok(/Ms1=/.test(doc1124.f) && !/Ms1=/.test(SM.normPg(doc1124).f) && !/Ms1=/.test(SM.mergePg(doc1124, SM.pgFromLocal({ geoQ: { 't3-p05': 2 } })).f) && !/Ms1=/.test(SM.mergePg({}, doc1124).f), '11-24 doc with Ms1 → normPg / mergePg drop it: ' + SM.normPg(doc1124).f);
  ok(SM.canon(SM.pgApply(doc1124, {}).mg.c) === SM.canon({ 'g5a7-mid0': 2 }) && SM.pgApply(doc1124, {}).geoQ['m1-p01'] === 1, '11-24 doc: Ms2 restored, Ms1 ignored, other groups untouched');
  const whole = SM.normalize(SM.merge(SM.normalize({ v: 9, pg: doc1124 }), SM.normalize({ v: 9, pg: SM.pgFromLocal({ mg: { c: { 'g5a7-pair3': 2 } } }) })));
  ok(!/Ms1=/.test(whole.pg.f) && SM.canon(SM.pgApply(whole.pg, {}).mg.c) === SM.canon({ 'g5a7-mid0': 2, 'g5a7-pair3': 2 }), 'whole-doc merge with an 11-24 device: Ms1 gone from the result, Ms2 union kept ' + whole.pg.f); }
// 新舊互收（11-21 凍結舊版）：舊版不認得 Ms2，但 pg 的 f 群組照收、合併照聯集 → 不會壞、不會丟；新版收到舊版合併過的文件照樣還原
{ const pgN = SM.pgFromLocal({ mg: { c: { 'g5a7-mid0': 2, 'g5a7-kite23': 1 } }, geoQ: { 'm1-p01': 1 } }), pgOldLocal = OLD.pgFromLocal({ geoQ: { 't3-p05': 2 } });
  const viaOld = OLD.mergePg(OLD.normPg(pgN), pgOldLocal), oldApply = OLD.pgApply(viaOld, { geoQ: { 't3-p05': 2 } });
  ok(!/Ms1=/.test(viaOld.f) && /Ms2=/.test(viaOld.f) && SM.canon(SM.normPg(viaOld)) === SM.canon(SM.mergePg(pgN, pgOldLocal)), 'new → old device: normPg / mergePg keep Ms2 as-is ' + viaOld.f);
  ok(!('mg' in oldApply) && oldApply.geoQ['m1-p01'] === 1, 'old device: pgApply ignores Ms groups (no error, nothing written for them)');
  const docOld = OLD.merge(OLD.normalize({ v: 9, pg: pgN }), OLD.normalize({ v: 9, pg: pgOldLocal }));
  ok(SM.canon(SM.pgApply(SM.normalize(docOld).pg, {}).mg.c) === SM.canon({ 'g5a7-mid0': 2 }), 'old → new: whole doc merged by the old version → new device still gets the 2s back');
  ok(SM.canon(SM.normalize(SM.merge(SM.normalize({ v: 9, pg: pgOldLocal }), SM.normalize({ v: 9, pg: pgN }))).pg) === SM.canon(SM.mergePg(pgOldLocal, pgN)), 'new device merging an old doc: union, nothing lost'); }
console.log('symmetry: 紙本原題 2、錯題補題、鎖、Ms2 同步');
console.log('symmetry: ' + pass + ' passed, ' + fail + ' failed');
process.exitCode = fail ? 1 : 0;
