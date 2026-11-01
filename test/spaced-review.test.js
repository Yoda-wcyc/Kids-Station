// spaced-review.test.js — 🔁 隔天複習（間隔重複）：kids-mistakes.js _core 的 mark(…, spaced)、dueList、同步合併（syncmerge mk.due）
// 用法：node test/spaced-review.test.js（假時間；日子一律用台北時間算）
'use strict';
const path = require('path');
const root = path.join(__dirname, '..');
const K = require(path.join(root, 'kids-mistakes.js'))._core, SM = require(path.join(root, 'syncmerge.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL spaced:', m); } };
const C = SM.canon, same = (a, b) => C(a) === C(b);
const TW = s => Date.parse(s + '+08:00');   // 台北時間 → 毫秒
const D0 = TW('2026-11-01T20:00:00'), day = n => D0 + n * 864e5;
const ID = 'u1|w|u1-l1-t1-p1|福爾摩沙', P = { u: 'u1', k: 'w', s: '叫它福爾摩沙', a: '福爾摩沙' };

ok(same(K.SPACED, ['social', 'science']) && same(K.IV, [1, 3, 7]) && K.GRAD === 3, 'only social/science are spaced; intervals 1 → 3 → 7; 3 passes');

// ---- 1→3→7 天的進度 ----
{
  const b = {}, d0 = K.dayIdx(D0);
  ok(K.mark(b, ID, false, P, D0, true) === 'added' && b[ID].c === 0 && b[ID].due === d0 + 1, 'wrong → in the book, due tomorrow: ' + C(b[ID]));
  ok(!K.isDue(b[ID], D0) && K.dueList(b, D0).length === 0, 'not due on the same day');
  ok(K.mark(b, ID, true, null, day(0) + 3600e3, true) === null && b[ID].c === 0 && b[ID].due === d0 + 1, 'correct before due → ignored (no progress)');
  ok(K.isDue(b[ID], day(1)) && K.dueList(b, day(1)).map(e => e.id).join() === ID, 'due next day, listed');
  ok(K.mark(b, ID, true, null, day(1), true) === 'counted' && b[ID].c === 1 && b[ID].due === d0 + 1 + 3, 'day 1 correct → stage 1, next in 3 days: ' + C(b[ID]));
  ok(K.mark(b, ID, true, null, day(1) + 60e3, true) === null && b[ID].c === 1, 'second correct the same day → ignored');
  ok(!K.isDue(b[ID], day(3)) && K.isDue(b[ID], day(4)), 'stage 1 due on day 4 (not day 3)');
  ok(K.mark(b, ID, true, null, day(4), true) === 'counted' && b[ID].c === 2 && b[ID].due === d0 + 4 + 7, 'day 4 correct → stage 2, next in 7 days');
  ok(!K.isDue(b[ID], day(10)) && K.isDue(b[ID], day(11)), 'stage 2 due on day 11');
  ok(K.mark(b, ID, true, null, day(11), true) === 'graduated' && same(b[ID], { d: 1, w: 1, t: D0, u: day(11) }), '7-day review correct → graduated tombstone: ' + C(b[ID]));
  ok(K.liveList(b).length === 0 && K.dueList(b, day(30)).length === 0 && K.mark(b, ID, true, null, day(30), true) === null, 'graduated: not listed, not due, correct ignored');
  ok(K.mark(b, ID, false, P, day(40), true) === 'added' && b[ID].w === 2 && b[ID].c === 0 && b[ID].due === d0 + 41, 'wrong after graduating → back in, due tomorrow, w keeps counting');
}
// ---- 到期答錯 → 回到 1 天；逾期也算到期 ----
{
  const b = {}, d0 = K.dayIdx(D0);
  K.mark(b, ID, false, P, D0, true); K.mark(b, ID, true, null, day(1), true); K.mark(b, ID, true, null, day(4), true);
  ok(b[ID].c === 2 && b[ID].due === d0 + 11, 'setup: stage 2');
  ok(K.mark(b, ID, false, null, day(11), true) === 'added' && b[ID].c === 0 && b[ID].due === d0 + 12 && b[ID].w === 2 && b[ID].p.a === '福爾摩沙', 'wrong at the 7-day review → back to 1 day, keeps p: ' + C(b[ID]));
  ok(K.isDue(b[ID], day(25)) && K.mark(b, ID, true, null, day(25), true) === 'counted' && b[ID].due === d0 + 25 + 3, 'overdue counts as due; next interval counted from the day answered');
  ok(K.mark(b, ID, false, null, day(26), true) === 'added' && b[ID].c === 0 && b[ID].due === d0 + 27, 'wrong before due → also back to 1 day');
}
// ---- 畢業條件：要三次「到期答對」，中間不能錯 ----
{
  const b = {}; let t = D0, r;
  K.mark(b, ID, false, P, t, true);
  for (let i = 0; i < 20; i++) { r = K.mark(b, ID, true, null, t + i * 60e3, true); }
  ok(r === null && b[ID].c === 0, 'many corrects on the same day never graduate');
  const seq = [[1, 'counted'], [4, 'counted'], [11, 'graduated']].map(([n, want]) => K.mark(b, ID, true, null, day(n), true) === want);
  ok(seq.every(Boolean) && b[ID].d === 1, 'exactly 3 due passes (1, 3, 7 days) → graduate');
}
// ---- 舊錯題（沒有 due）＝今天到期；舊的 c 照用 ----
{
  const old = { 'u2|q|abc': { c: 0, w: 2, t: D0 - 30 * 864e5, u: D0 - 30 * 864e5, p: { u: 'u2', k: 'q', s: 'Q', a: 'A' } }, 'u2|a|x': { c: 2, w: 1, t: 5e11 + 1e12, u: 5e11 + 1e12, p: { u: 'u2', k: 'a', s: 'S', a: 'T' } }, 'u2|w|gone': { d: 1, w: 1, t: 1.7e12, u: 1.7e12 } };
  const b = K.normBook(JSON.parse(JSON.stringify(old)));
  ok(same(K.normBook(old), b) && !('due' in b['u2|q|abc']) && b['u2|q|abc'].w === 2 && b['u2|w|gone'].d === 1, 'old entries survive normalization unchanged (nothing lost)');
  ok(K.dueList(b, D0).map(e => e.id).sort().join() === 'u2|a|x,u2|q|abc', 'old entries without due are due today; tombstone not');
  ok(K.mark(b, 'u2|q|abc', true, null, D0, true) === 'counted' && b['u2|q|abc'].c === 1 && b['u2|q|abc'].due === K.dayIdx(D0) + 3, 'old c=0 answered today → stage 1, +3 days');
  ok(K.mark(b, 'u2|a|x', true, null, D0, true) === 'graduated', 'old c=2 (2 corrects under the old rule) answered today → graduates');
}
// ---- 時區：用台北時間的日子 ----
{
  const b = {}, late = TW('2026-11-01T23:30:00'), justAfter = TW('2026-11-02T00:05:00'), stillSame = TW('2026-11-01T23:59:00');
  K.mark(b, ID, false, P, late, true);
  ok(new Date(justAfter).toISOString().slice(0, 10) === '2026-11-01', 'sanity: 00:05 Taipei is still Nov 1 in UTC');
  ok(!K.isDue(b[ID], stillSame) && K.isDue(b[ID], justAfter), 'wrong at 23:30 Taipei → due at 00:05 Taipei the next day (not by UTC date)');
  const morning = TW('2026-11-02T07:00:00'), b2 = {};
  K.mark(b2, ID, false, P, morning, true);
  ok(K.dayIdx(morning) === K.dayIdx(TW('2026-11-02T00:00:00')) && b2[ID].due === K.dayIdx(TW('2026-11-03T00:00:00')), '07:00 Taipei (= previous UTC day 23:00) still counts as Nov 2');
}
// ---- 國語、數學、AI 不受影響：照舊連對 3 次 ----
{
  const b = {};
  K.mark(b, 'eq:x+5=12', false, { q: 'x+5=12' }, D0);
  ok(!('due' in b['eq:x+5=12']), 'non-spaced: no due field');
  ok(['counted', 'counted', 'graduated'].every((r, i) => K.mark(b, 'eq:x+5=12', true, null, D0 + i) === r), 'non-spaced: 3 corrects in a row still graduate the same day');
}
// ---- 閃卡「再想想」：同一本錯題庫、同一套排程 ----
{
  const b = {}, id = 'n1|F|n1-16';
  ok(K.mark(b, id, false, { u: 'n1', k: 'F', s: '光在不同介質…', a: '折射' }, D0, true) === 'added' && b[id].due === K.dayIdx(D0) + 1 && b[id].p.k === 'F', 'flashcard 再想想 → book entry k F, due tomorrow');
  ok(K.mark(b, id, true, null, day(1), true) === 'counted' && b[id].due === K.dayIdx(D0) + 4, 'flashcard 我記得 when due → next interval');
}
// ---- 同步：due 會帶著走；一樣新時 墓碑 ＞ 有 due ＞ 沒 due；合併規則照舊（交換、冪等、結合）；跟 kids-mistakes _core 一致 ----
{
  const e = (c, u, due) => Object.assign({ c, w: 1, t: 100, u, p: { u: 'u1', k: 'w', s: 'S', a: 'A' } }, due ? { due } : {});
  const A = { mk: { social: { q1: e(1, 500, 20400), q2: e(0, 300, 20395) } } }, B = { mk: { social: { q1: e(0, 400, 20390), q2: e(0, 300) } } }, Cc = { mk: { science: { q3: e(2, 900, 20410) }, social: { q2: { d: 1, w: 1, t: 100, u: 800 } } } };
  const AB = SM.merge(A, B).mk.social;
  ok(AB.q1.due === 20400 && AB.q1.c === 1, 'newer entry wins with its due');
  ok(AB.q2.due === 20395, 'same u: the copy with due wins (an old device that dropped due cannot erase the schedule)');
  ok(same(SM.merge(A, B), SM.merge(B, A)) && same(SM.merge(SM.merge(A, B), Cc), SM.merge(A, SM.merge(B, Cc))) && same(SM.merge(SM.merge(A, B), A), SM.merge(A, B)), 'merge: commutative, associative, idempotent with due');
  ok(same(SM.normMk(A.mk), K.normAll(A.mk)) && same(SM.mergeMk(A.mk, B.mk), K.mergeAll(A.mk, B.mk)) && same(SM.mergeMk(B.mk, Cc.mk), K.mergeAll(B.mk, Cc.mk)), 'syncmerge === kids-mistakes _core (due kept the same way)');
  ok(SM.normalize({ mk: { social: { q: e(0, 1, 'x') } } }).mk.social.q.due === undefined && SM.normalize({ mk: { social: { q: e(0, 1, -5) } } }).mk.social.q.due === undefined, 'garbage due dropped');
  ok(SM.VERSION === 8, 'sync doc version: due is additive (like done.fr); v7、v8 (2026-11-02) only change mmBlanks');
}
// ---- 同步邊界：一台畢業、另一台還有排程 → 不復活也不消失 ----
{
  const live = (u, due) => Object.assign({ c: 2, w: 1, t: 100, u, p: { u: 'u1', k: 'F', s: 'S', a: 'A' } }, due ? { due } : {});
  const tomb = u => ({ d: 1, w: 1, t: 100, u });
  const M = (a, b) => SM.mergeMk({ social: { q: a } }, { social: { q: b } }).social.q;
  const both = (a, b, f, m) => { ok(f(M(a, b)) && f(M(b, a)), m + ' (syncmerge, both orders)'); ok(f(K.mergeAll({ social: { q: a } }, { social: { q: b } }).social.q) && f(K.mergeAll({ social: { q: b } }, { social: { q: a } }).social.q), m + ' (kids-mistakes _core)'); };
  both(tomb(900), live(800, 20400), e => e.d === 1, 'A graduated later, B still scheduled → stays graduated (no resurrection)');
  both(tomb(800), live(900, 20401), e => !e.d && e.due === 20401, 'B got it wrong again after A graduated → back in the book with its due (no disappearance)');
  both(tomb(800), live(800, 20400), e => e.d === 1, 'same u: tombstone beats a copy with due (no resurrection)');
  both(live(800), live(800, 20400), e => e.due === 20400, 'same u, both live: the copy with due wins');
  // 三種一樣新（墓碑／有 due／沒 due）：任何順序合併結果都一樣（全序 → 交換、結合）
  const X = { mk: { social: { q: tomb(800) } } }, Y = { mk: { social: { q: live(800, 20400) } } }, Z = { mk: { social: { q: Object.assign(live(800), { c: 0 }) } } };
  const r = [[X, Y, Z], [Y, Z, X], [Z, X, Y], [Z, Y, X]].map(([a, b, c]) => SM.merge(SM.merge(a, b), c).mk.social.q);
  ok(r.every(e => same(e, r[0])) && r[0].d === 1 && same(SM.merge(X, SM.merge(Y, Z)), SM.merge(SM.merge(X, Y), Z)), 'tombstone / due / no-due at the same u: order-independent, tombstone wins');
}
console.log(`spaced-review: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
