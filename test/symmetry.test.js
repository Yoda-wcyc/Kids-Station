// node test/symmetry.test.js — 五上單元七〈線對稱圖形〉（2026-11-24，math/grade/g5a7.js）
// 六種題型：用題目文字自己再算一次答案（第三種算法：字母轉回頂點號 i，對稱點＝7－i）、照正解作答判對、常見錯答判錯；
// 第 13 回紙本兩題原題（正解 4、4；孩子寫 3、60 要判錯）；paper.js MG_ROWS → kids-mistakes seed 補進錯題庫的規則；完成判定、做過 2 次就鎖、同步大小。
'use strict';
const path = require('path'), root = path.join(__dirname, '..');
const MG = require(path.join(root, 'math', 'grade.js')); require(path.join(root, 'math', 'grade', 'g5a7.js'));
const V = require('./mg-verify/g5a7.js'), KM = require(path.join(root, 'kids-mistakes.js'))._core, P = require(path.join(root, 'math', 'paper.js'));
const KC = require(path.join(root, 'completion.js')), KL = require(path.join(root, 'kids-lock.js')), SM = require(path.join(root, 'syncmerge.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL symmetry:', m); } };
const H = MG.H, U = MG.UNITS.g5a7, qs = MG.bank('g5a7'), by = k => qs.filter(q => q.k === k), txt = q => MG.plain(q.q);
const ABC = 'ABCDEFGH', mirL = (s, ch) => ABC[((7 - ((ABC.indexOf(ch) - s + 8) % 8)) + s) % 8];   // 字母 → 頂點號 → 對稱點的字母
const answer = q => (q.t === 'num' ? (H.toDec(q.a) || q.a[0] + '/' + q.a[1]) : q.a);
const right = q => MG.check(q, answer(q)).ok;

// ---------- 題庫結構 ----------
const D = { mid: 1, pair: 1, ang: 1, angmc: 2, half: 2, kite: 2, peri: 3, kite2: 3 };
ok(Object.keys(D).every(k => by(k).length >= 4 && by(k).every(q => q.d === D[k])) && qs.length === Object.keys(D).reduce((n, k) => n + by(k).length, 0),
  'eight generators (6 kinds of question) with fixed difficulty: ' + Object.keys(D).map(k => k + ' ' + by(k).length).join('、'));
ok(MG.label('g5a7') === '五上 單元七' && MG.bookOf('g5a7').title === '線對稱圖形' && !MG.ready('g5a') && MG.bookUnits('g5a').length === 0, '五上 單元七 label; not a whole book (no 總複習)');
ok(qs.every(q => q.svg && /stroke-dasharray/.test(q.svg) && /<svg class="mg-svg"/.test(q.svg)), 'every question has a figure with a dashed symmetry axis');
ok(qs.filter(q => q.k !== 'kite' && q.k !== 'kite2').every(q => ABC.split('').concat(['M', 'N', '甲']).every(ch => q.svg.includes('>' + ch + '</text>'))), 'octagon figures: 8 vertex letters, M, N (axis meets the edges) and 甲');
ok(by('kite').concat(by('kite2')).every(q => 'ABCD'.split('').every(ch => q.svg.includes('>' + ch + '</text>'))), 'kite figures: A B C D');
ok(qs.every(q => /一樣長|一樣大|一樣遠/.test(MG.plain(q.why)) && (q.t !== 'num' || /＝/.test(q.why))), 'every explanation says which two are equal (一樣長／一樣大); number answers also write the 算式');
ok(qs.every(q => !/undefined|NaN|\[object/.test(q.q + q.why + JSON.stringify(q.opts || []))), 'no broken text');

// ---------- ① 對稱軸通過邊的中點 ----------
by('mid').forEach(q => {
  const m = /^下圖以甲線為對稱軸，甲線通過 ([A-H]{2}) 的中點 ([MN])。([A-H][A-H]?[MN]?)＝(\d+) 公分，([A-H][A-H]?[MN]?) 是幾公分？$/.exec(txt(q));
  const exp = m && (m[5].length === 2 && /[MN]/.test(m[5]) ? +m[4] / 2 : +m[4] * 2);
  ok(m && H.eq(q.a, exp) && right(q) && !MG.check(q, String(m[4])).ok && MG.check(q, String(m[4])).msg !== '答案不對。', 'mid ' + txt(q) + ' → ' + exp + '; the given number itself gets a hint');
});
// ② 已知周長和幾條邊，求一條邊：被甲線平分的邊算一次、其他的邊連對稱邊算兩次
by('peri').forEach(q => {
  const m = /^下圖以甲線為對稱軸，周長是 (\d+) 公分，(.+)，([A-H]{2}) 是幾公分？$/.exec(txt(q)), s = q.v.s;
  const giv = m ? m[2].split('、').map(x => /^([A-H]{2})＝(\d+) 公分$/.exec(x)) : [];
  const sum = giv.reduce((n, g) => n + (g && mirL(s, g[1][0]) === g[1][1] ? 1 : 2) * +g[2], 0), exp = m && (+m[1] - sum) / 2;
  ok(m && giv.length === 4 && giv.every(Boolean) && H.eq(q.a, exp) && right(q) && H.eq(V.peri(q.v, q), q.a), 'peri ' + txt(q) + ' → ' + exp);
  ok(!MG.check(q, String(+m[1] - sum)).ok && /除以 2/.test(MG.check(q, String(+m[1] - sum)).msg), 'peri: forgetting to halve → wrong with a hint');
});
// ③ 已知一半的邊，求周長
by('half').forEach(q => {
  const m = /^下圖以甲線為對稱軸，(.+)。這個八邊形的周長是幾公分？$/.exec(txt(q)), xs = m ? m[1].split('、').map(x => +(/＝(\d+) 公分$/.exec(x) || [])[1]) : [];
  const S = xs.reduce((a, b) => a + b, 0);
  ok(xs.length === 5 && H.eq(q.a, 2 * S) && right(q) && /要再乘 2/.test(MG.check(q, String(S)).msg), 'half ' + txt(q) + ' → ' + 2 * S + '; half perimeter gets a hint');
});
// ④ 對稱邊／對稱點（選擇）
by('pair').forEach(q => {
  const e = /邊 ([A-H]{2}) 的對稱邊/.exec(txt(q)), p = /點 ([A-H]) 的對稱點/.exec(txt(q)), s = q.v.s;
  const exp = e ? [mirL(s, e[1][0]), mirL(s, e[1][1])].sort().join('') : p && mirL(s, p[1]);
  ok((e || p) && q.t === 'mc' && q.opts[q.a] === exp && right(q) && q.opts.every((o, i) => i === q.a || !MG.check(q, i).ok) && new Set(q.opts).size === q.opts.length && q.opts.length >= 3, 'pair ' + txt(q) + ' → ' + exp);
});
// ⑤ 對稱角
by('ang').forEach(q => {
  const m = /∠([A-H])＝(\d+)°，∠([A-H]) 是幾度/.exec(txt(q));
  ok(m && mirL(q.v.s, m[1]) === m[3] && H.eq(q.a, +m[2]) && right(q) && /不用拿 180 去減/.test(MG.check(q, String(180 - m[2])).msg), 'ang ' + txt(q) + ' → ' + (m && m[2]));
});
by('angmc').forEach(q => {
  const m = /∠([A-H])＝(\d+)°。下面哪一句是對的/.exec(txt(q)), exp = m && '∠' + mirL(q.v.s, m[1]) + '＝' + m[2] + '°';
  ok(m && q.opts[q.a] === exp && right(q), 'angmc ' + txt(q) + ' → ' + exp);
});
// ⑥ 箏形：(360－a－b)÷2；選擇題：360－a－2×旁邊的角
by('kite').forEach(q => {
  const m = /直線 ([A-D])([A-D]) 是它的對稱軸。∠([A-D])＝(\d+)°、∠([A-D])＝(\d+)°，∠([A-D]) 是幾度/.exec(txt(q));
  const exp = m && (360 - m[4] - m[6]) / 2;
  ok(m && m[3] === m[1] && m[5] === m[2] && m[7] !== m[1] && m[7] !== m[2] && H.eq(q.a, exp) && right(q) && /要再除以 2/.test(MG.check(q, String(360 - m[4] - m[6])).msg) && /\(360－\d+－\d+\)÷2/.test(q.why), 'kite ' + txt(q) + ' → (360－' + (m && m[4]) + '－' + (m && m[6]) + ')÷2 = ' + exp);
});
by('kite2').forEach(q => {
  const m = /∠([A-D])＝(\d+)°、∠([A-D])＝(\d+)°，∠([A-D]) 是幾度/.exec(txt(q)), exp = m && 360 - m[2] - 2 * m[4];
  ok(m && q.opts[q.a] === exp + '°' && right(q) && exp > 0 && exp < 180, 'kite2 ' + txt(q) + ' → ' + exp + '°');
});

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

// ---------- 同步大小（上限一個都沒放寬）：這個單元多的只有 done.mg 2 格＋done.n 一組 ----------
const mgB = SM.bytes(SM.normDone({ mg: { g5a7q: 100, g5a7t: 100 } }).mg) - 2 + 1, nB = SM.bytes(SM.normDone(KL.setV({}, 'mg:g5a7', 61)).n) - 2 + 1;
ok(mgB + nB <= 60, 'sync cost of the new unit at its worst: done.mg ' + mgB + ' B + done.n ' + nB + ' B = ' + (mgB + nB) + ' B (per-question counts stay local, mistakes ride the existing mk sync)');
console.log('symmetry: bank ' + qs.length + ' (d ' + [1, 2, 3].map(k => qs.filter(q => q.d === k).length).join('/') + ')、紙本原題 2、同步多 ' + (mgB + nB) + ' B');
console.log('symmetry: ' + pass + ' passed, ' + fail + ' failed');
process.exitCode = fail ? 1 : 0;
