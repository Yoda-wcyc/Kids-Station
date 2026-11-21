// sync-clock.test.js — 裝置時鐘不一致（2026-11-21）：合併時用「裝置自己的時間」比新舊的欄位，寫入端改用 SM.stamp（比同一筆上一次的時間晚 1 毫秒）。
//   盤點（syncmerge.js 裡用時間決勝的地方 → 誰寫的 → 這次怎麼處理）：
//     learned at／removedAt（取消學會、重新學會）      app.js learnIso                → stamp
//     ke_mistakes u（英文錯題、畢業墓碑）               app.js record                  → u 用 stamp、t（最近答錯）照舊真時間
//     mk u（各科錯題庫、畢業墓碑）                      kids-mistakes.js mark／cap／seed → 本來就 max(now, u+1)，不動
//     eq item t／del／at（天平新增、刪除、換順序）        syncmerge.js eqFromLocal       → stamp
//     done.tb at（課本考試「最近一次」）                 completion.js record           → stamp
//     mm lastPassAt → reviewStep（心智圖複習進度）       mindmap.js recordResult        → stamp；passedAt 照舊真時間
//     pg e 小時（單元測驗「最近一次」）                  mindmap.js 交卷 r.at           → stamp（同一小時照舊取大）
//     其他：dd（每台各記、用真日期）、dg（修改序號）、kids-lock n（次數只增）、mmBlanks（次數）、scratch／bal／ai／zh／cy／mx.ok（留最早＝聯集）、
//           mm best／passedAt／unlocked（取大）、ctr（每台各記）、log（依 id 聯集）→ 不是「誰新誰勝」，時鐘錯也不會丟資料，不動。
//   這裡測：stamp 本身、T6／T6b（快的那台不再蓋掉慢的那台後來的操作）、每個寫入端用的是真的原始碼、舊版 ↔ 新版雙向合併、
//          時鐘快 1 年的防爆、每日日期不受影響、三台輪流操作後收斂。
// 用法：node test/sync-clock.test.js（smoke 會跑）
'use strict';
const fs = require('fs'), path = require('path'), root = path.join(__dirname, '..');
const OLD = require(path.join(__dirname, 'fixtures', 'syncmerge-old-v9.js')), SM = require(path.join(root, 'syncmerge.js'));
globalThis.KESyncMerge = SM;   // 舊版 fixture 載入時會把它換成舊版；completion.js 用的要是新版（smoke 裡 require 有快取，所以明寫）
const KC = require(path.join(root, 'completion.js')), KM = require(path.join(root, 'kids-mistakes.js'))._core;
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL sync-clock:', m); } };
const C = SM.canon, same = (a, b) => C(a) === C(b), J = x => JSON.parse(JSON.stringify(x));
const MIN = 60e3, DAY = 864e5, R0 = Date.parse('2026-11-21T03:00:00Z');   // 台北 11:00
const OFF = { A: 10 * MIN, B: -5 * MIN, C: 0 };   // A 時鐘快 10 分鐘、B 慢 5 分鐘、C 準
const src = f => fs.readFileSync(path.join(root, f), 'utf8');

// ---------- 從真的原始碼抽出寫入端（app.js、mindmap.js 是頁面程式，不能直接 require）----------
const APP = src('app.js'), MMJ = src('mindmap/mindmap.js');
const learnSrc = (/const learnIso = id => \{.*\};/.exec(APP) || [''])[0];
const mkSrc = (/(\/\/ u（同步比新舊用）[\s\S]*?save\('ke_mistakes', m\);)/.exec(APP) || ['', ''])[1];
ok(learnSrc && mkSrc, 'app.js: learnIso and the mistakes block are found');
ok((APP.match(/learnIso\(/g) || []).length === 2 && !/(setLearned|unsetLearned)\([^;]*new Date\(\)\.toISOString\(\)/.test(APP), 'app.js: 學會、取消學會都用 learnIso（不再直接用 new Date()）');
// learnIso(S, now)：S＝{learned}
const learnIso = (S, now) => new Function('S', 'SM', 'Date', learnSrc + '; return learnIso;')(S, SM, fakeDate(now));
function fakeDate(now) { class D extends Date { constructor(...a) { if (a.length) super(...a); else super(now); } static now() { return now; } } return D; }
// 英文錯題：mistake(S, qid, ok, now)
const mistake = (S, id, okk, now) => { const Q = { graduated: 0 }; new Function('S', 'SM', 'Date', 'q', 'ok', 'Q', 'save', mkSrc)(S, SM, fakeDate(now), { id }, okk, Q, () => { }); return Q; };
// 心智圖過關：recordResult 用真的原始碼（prog／lsSet 換成記憶體）
const rrSrc = (/function uprog\(p, uid\)\{.*\}/.exec(MMJ) || [''])[0] + '\n' + (/function stampAt\(prev, t\)\{.*\}\nfunction recordResult\(uid, level, pct, isReview\)\{[\s\S]*?\n\}/.exec(MMJ) || [''])[0];
ok(rrSrc, 'mindmap.js: stampAt + recordResult found');
function mmPass(P, uid, level, pct, isReview, now) {
  const store = { p: P };
  new Function('window', 'PKEY', 'pk', 'prog', 'lsSet', 'syncTouch', 'now', 'PASS', 'Date', rrSrc + '; return recordResult(' + JSON.stringify(uid) + ',' + level + ',' + pct + ',' + !!isReview + ');')(
    { KESyncMerge: SM }, 'p', u => 'social:' + u, () => store.p, (k, v) => { store.p = v; }, () => { }, () => now, { 1: 100, 2: 80, 3: 80, 4: 80 }, fakeDate(now));
  return store.p;
}
const examSrc = (/r\.at = stampAt\(r\.at, Date\.now\(\)\)/.exec(MMJ) || [''])[0];
ok(examSrc, 'mindmap.js: 單元測驗交卷的 at 用 stampAt');

// ---------- 1. stamp 本身 ----------
{
  const n = R0;
  ok(SM.stamp(n - 5 * MIN, n) === n && SM.stamp(0, n) === n && SM.stamp(undefined, n) === n && SM.stamp(NaN, n) === n && SM.stamp('abc', n) === n && SM.stamp(null, n) === n, 'stamp: 上一次比現在舊（或沒有、亂寫）→ 現在');
  ok(SM.stamp(n + 10 * MIN, n) === n + 10 * MIN + 1 && SM.stamp(n, n) === n + 1, 'stamp: 上一次比現在新（別台時鐘快）→ 上一次＋1 毫秒');
  ok(SM.stamp(n + DAY, n) === n + DAY + 1 && SM.stamp(n + DAY + 1, n) === n && SM.stamp(n + 365 * DAY, n) === n && SM.stamp(8.64e15, n) === n, 'stamp: 超過現在＋1 天就不跟（防爆）');
  ok(Math.abs(SM.stamp(0) - Date.now()) < 1000, 'stamp: 沒給 now 用 Date.now()');
}

// ---------- 2. T6／T6b：快的那台寫、慢的那台同步看過之後才改 → 慢的那台勝 ----------
{
  // T6 取消學會：A（快 10 分）學會 → 同步到 B → B（慢 5 分）一分鐘後取消
  const A = { learned: {} }, rA = R0, rB = R0 + MIN;
  A.learned = { apple: { at: learnIso(A, rA + OFF.A)('apple'), score: '3/3' } };
  const B = { learned: J(SM.merge({}, A).learned) };
  B.learned = { apple: { removedAt: learnIso(B, rB + OFF.B)('apple') } };
  const m = SM.merge(A, B).learned.apple;
  ok(m.removedAt && !m.at, 'T6 取消學會：慢的那台後來取消，合併後是取消（不再被快的那台蓋回去）: ' + C(m));
  const before = SM.merge(A, { learned: { apple: { removedAt: new Date(rB + OFF.B).toISOString() } } }).learned.apple;
  ok(before.at && !before.removedAt, 'T6 對照：修之前（直接用裝置時間）確實會被蓋回去');
  // 反過來：A 取消、B 再學會
  const A2 = { learned: { pear: { removedAt: new Date(rA + OFF.A).toISOString() } } }, B2 = { learned: J(A2.learned) };
  B2.learned = { pear: { at: learnIso(B2, rB + OFF.B)('pear'), score: '3/3' } };
  ok(SM.merge(A2, B2).learned.pear.at, 'T6 重新學會：快的那台取消、慢的那台後來再學會 → 學會');
  ok(Date.parse(B2.learned.pear.at) - Date.parse(A2.learned.pear.removedAt) === 1, '學會時間只比上一次晚 1 毫秒（顯示的時間最多差別台快的那幾分鐘）');

  // T6b 英文錯題畢業：A 答錯（u 快 10 分）→ 同步 → B 連對 3 次畢業
  const SA = { mistakes: {} }; mistake(SA, 'w:cat', 0, rA + OFF.A);
  const SB = { mistakes: J(SA.mistakes) }; let g = 0; for (let i = 0; i < 3; i++) g += mistake(SB, 'w:cat', 1, rB + OFF.B + i * 1000).graduated;
  const mm = SM.merge(SA, SB).mistakes['w:cat'];
  ok(g === 1 && mm.d === 1, 'T6b 英文錯題：慢的那台後來畢業（墓碑），合併後還是畢業: ' + C(mm));
  ok(SB.mistakes['w:cat'].t === SA.mistakes['w:cat'].t, 'T6b：墓碑保留原本的 t（最近答錯的時間）');
  const SB2 = { mistakes: J(SM.merge(SA, SB).mistakes) }; mistake(SB2, 'w:cat', 0, rB + OFF.B + 9000);
  ok(!SM.merge(SA, SB2).mistakes['w:cat'].d && SB2.mistakes['w:cat'].t === rB + OFF.B + 9000, 'T6b：畢業後再答錯 → 回到錯題庫（不會輸給墓碑）；t 是真的作答時間');
  // 各科錯題庫（kids-mistakes.js 本來就 u＋1）：同樣情境照樣對
  const bA = {}; KM.mark(bA, 'q1', false, {}, rA + OFF.A, false);
  const bB = J(KM.mergeBook(bA, {})); for (let i = 0; i < 3; i++) KM.mark(bB, 'q1', true, null, rB + OFF.B + i * 1000, false);
  ok(SM.mergeMk({ math: bA }, { math: bB }).math.q1.d === 1, 'T6b 各科錯題庫：慢的那台後來畢業 → 畢業（kids-mistakes.js 原本就對）');
  const mk1 = { math: { q1: { c: 1, w: 2, t: R0, u: R0 + 10 * MIN, p: {} } } }, mk2 = { math: { q1: { d: 1, w: 2, t: R0, u: R0 - 4 * MIN } } };
  ok(!SM.mergeMk(mk1, mk2).math.q1.d, 'T6b 對照：兩台沒同步過（同時各改各的）照舊比時間——這種沒辦法知道誰先，跟修之前一樣');

  // 天平：A 新增 → 同步 → B 刪掉；A 刪掉 → 同步 → B 再加回來；B 換順序
  const lA = [{ q: 'x+1=5', own: true }, { q: '2x=8', own: false }];
  const eA = SM.eqFromLocal(lA, null, rA + OFF.A);
  const eB = SM.eqFromLocal([lA[1]], SM.merge({}, { eq: eA }).eq, rB + OFF.B);
  ok(SM.merge({ eq: eA }, { eq: eB }).eq.items.map(i => i.q).join() === '2x=8', '天平：快的那台加的題、慢的那台後來刪掉 → 刪掉');
  const eA2 = SM.eqFromLocal([lA[1]], eA, rA + OFF.A + 1000);
  const eB2 = SM.eqFromLocal(lA, SM.merge({ eq: eA }, { eq: eA2 }).eq, rB + OFF.B);
  ok(SM.merge({ eq: eA2 }, { eq: eB2 }).eq.items.some(i => i.q === 'x+1=5'), '天平：快的那台刪掉、慢的那台後來加回來 → 還在');
  const eB3 = SM.eqFromLocal([lA[1], lA[0]], eA, rB + OFF.B), eA3 = SM.eqFromLocal(lA, eA, rA + OFF.A);
  ok(SM.merge({ eq: eA3 }, { eq: eB3 }).eq.items.map(i => i.q).join() === '2x=8,x+1=5', '天平：慢的那台後來換順序 → 用它的順序');
  const before2 = SM.merge({ eq: eA }, { eq: { at: rB + OFF.B, items: [{ q: '2x=8', own: false, t: eA.items[1].t }], del: { 'x+1=5': rB + OFF.B } } }).eq;
  ok(before2.items.length === 2, '天平對照：修之前（墓碑用裝置時間）刪不掉');

  // 課本考試「最近一次」
  const dA = KC.record({}, 'tb', 'u1', 60, rA + OFF.A), dB = KC.record(J(SM.mergeDone(dA, {})), 'tb', 'u1', 95, rB + OFF.B);
  ok(same(SM.mergeDone(dA, dB).tb.u1, { best: 95, last: 95, at: dB.tb.u1.at }) && dB.tb.u1.at === dA.tb.u1.at + 1, '課本考試：慢的那台後來考 95 → 最近一次＝95: ' + C(SM.mergeDone(dA, dB).tb.u1));
  const dB0 = KC.record({}, 'tb', 'u1', 95, rB + OFF.B + 9000);
  ok(dB0.tb.u1.at === rB + OFF.B + 9000, '課本考試：沒有上一次（或上一次比較舊）→ 用真的時間');

  // 心智圖：A 過關 → 同步 → B 做 1 天複習（reviewStep +1）
  const pA = mmPass({}, 'u1', 1, 100, false, rA + OFF.A);
  const pB = mmPass(J(SM.merge({}, { mm: pA }).mm), 'u1', 1, 100, true, rB + OFF.B + DAY);
  ok(SM.merge({ mm: pA }, { mm: pB }).mm['social:u1'].reviewStep === 1, '心智圖：慢的那台後來複習過關 → 複習進度不被蓋回去');
  ok(pB['social:u1'].passedAt[1] === rB + OFF.B + DAY && pB['social:u1'].lastPassAt === rB + OFF.B + DAY, '心智圖：上一次比現在舊 → lastPassAt、passedAt 都是真的時間');
  const pB2 = mmPass(J(pA), 'u1', 2, 90, true, rB + OFF.B);
  ok(pB2['social:u1'].lastPassAt === pA['social:u1'].lastPassAt + 1 && pB2['social:u1'].passedAt[2] === rB + OFF.B && SM.merge({ mm: pA }, { mm: pB2 }).mm['social:u1'].reviewStep === 1, '心智圖：別台的過關時間比這台的現在新 → lastPassAt 跟到它＋1（複習進度跟這次）、passedAt 照舊真的時間');

  // 單元測驗「最近一次」（pg e 以小時比）：A 10:55（快到 11:05）考 60、B 10:58（慢到 10:53）考 90
  const real = Date.parse('2026-11-21T02:55:00Z'), exA = { 'social:u1': { best: 60, last: 60, n: 1, at: real + OFF.A } };
  const pgA = SM.pgFromLocal({ exam: exA }), exB = J(SM.pgApply(pgA, {}).exam);
  const r = exB['social:u1']; r.best = Math.max(r.best, 90); r.last = 90; r.n++; r.at = SM.stamp(r.at, real + 3 * MIN + OFF.B);
  const got = SM.pgApply(SM.mergePg(pgA, SM.pgFromLocal({ exam: exB })), {}).exam['social:u1'];
  ok(got.last === 90, '單元測驗：慢的那台後來考 90 → 最近一次＝90（同一小時取大；修之前會變 60）: ' + C(got));
}

// ---------- 3. 舊版 ↔ 新版雙向合併（格式沒變：舊版照舊比時間、不報錯、不丟資料）----------
{
  const n = R0, newer = {   // 新版寫的（stamp 過的時間）
    learned: { apple: { removedAt: new Date(n + 10 * MIN + 1).toISOString() }, cat: { at: new Date(n).toISOString(), score: '3/3' } },
    mistakes: { 'w:a': { d: 1, w: 1, t: n, u: n + 10 * MIN + 1 } },
    eq: SM.eqFromLocal([{ q: 'x=1', own: true }], { at: n + 10 * MIN, items: [], del: { 'x=1': n + 10 * MIN } }, n),
    done: { tb: { u1: { best: 90, last: 90, at: n + 10 * MIN + 1 } } },
    mm: { 'social:u1': { unlocked: 2, best: { 1: 100 }, passedAt: { 1: n }, lastPassAt: n + 10 * MIN + 1, reviewStep: 1 } },
    mk: { math: { q: { d: 1, w: 1, t: n, u: n + 1 } } }
  };
  const older = {   // 舊版快取頁寫的（直接用裝置時間）
    learned: { apple: { at: new Date(n + 10 * MIN).toISOString(), score: '3/3' }, dog: { at: new Date(n - DAY).toISOString() } },
    mistakes: { 'w:a': { c: 1, w: 1, t: n, u: n + 10 * MIN }, 'w:b': { c: 0, w: 2, t: n, u: n } },
    eq: { at: n + 10 * MIN, items: [{ q: 'y=2', own: false, t: n }], del: { 'x=1': n + 10 * MIN } },
    done: { tb: { u1: { best: 70, last: 70, at: n + 10 * MIN } } },
    mm: { 'social:u1': { unlocked: 2, best: { 1: 100 }, passedAt: { 1: n + 10 * MIN }, lastPassAt: n + 10 * MIN, reviewStep: 0 } },
    mk: { math: { q: { c: 0, w: 1, t: n, u: n } } }
  };
  ok(newer.eq.items[0].t === n + 10 * MIN + 1, '新版：加回快的那台刪過的題，t 比墓碑晚');
  let e = null, vO, vN, vO2;
  try { vO = OLD.merge(J(older), J(newer)); vO2 = OLD.merge(J(newer), J(older)); vN = SM.merge(older, newer); } catch (x) { e = x; }
  ok(!e, '舊版合併新版寫的文件不報錯 ' + (e && e.message));
  ok(same(SM.normalize(vO), vN) && same(SM.normalize(vO2), vN) && same(SM.merge(newer, older), vN), '舊版、新版合併結果一樣（兩個方向、兩種順序）');
  ok(vN.learned.apple.removedAt && vN.mistakes['w:a'].d && vN.eq.items.some(i => i.q === 'x=1') && vN.done.tb.u1.last === 90 && vN.mm['social:u1'].reviewStep === 1 && vN.mk.math.q.d, '新版後來的操作在舊版合併後也還在（舊版照舊比時間，剛好比它晚 1 毫秒就勝）');
  ok(vN.learned.dog && vN.learned.cat && vN.mistakes['w:b'] && vN.eq.items.some(i => i.q === 'y=2'), '雙方各自的資料都在（沒丟）');
  // 舊版寫的時間（裝置時間）照舊互比
  ok(SM.merge({ learned: { k: { at: new Date(n).toISOString() } } }, { learned: { k: { removedAt: new Date(n + 1).toISOString() } } }).learned.k.removedAt, '舊版寫進來的時間照舊比較');
  // 新版本機讀到舊版寫的、比自己現在新的時間 → 之後的操作照樣勝
  const S = { learned: J(vN.learned) }; S.learned.dog = { removedAt: learnIso(S, n - 5 * MIN)('dog') };
  ok(OLD.merge({ learned: { dog: { at: new Date(n - DAY).toISOString() } } }, S).learned.dog.removedAt, '舊版那台再合併新版的取消 → 照樣是取消');
}

// ---------- 4. 時鐘快 1 年的防爆 ----------
{
  const n = R0, Y = 365 * DAY, S = { learned: { a: { at: new Date(n + Y).toISOString() }, b: { removedAt: '+275760-09-13T00:00:00.000Z' } } };
  let e = null, ia, ib; try { ia = learnIso(S, n)('a'); ib = learnIso(S, n)('b'); } catch (x) { e = x; }
  ok(!e && ia === new Date(n).toISOString() && ib === new Date(n).toISOString(), '快 1 年（連最大日期）的時間：不跟、不報錯，用真的時間 ' + (e && e.message));
  const M = { mistakes: { x: { c: 0, w: 1, t: n + Y, u: n + Y } } }; mistake(M, 'x', 1, n);
  ok(M.mistakes.x.u === n, '英文錯題：快 1 年的 u 不跟');
  const eq = SM.eqFromLocal([{ q: 'z', own: true }], { at: n + Y, items: [], del: { z: n + Y } }, n);
  ok(eq.at === n && Object.values(eq.del).every(t => t <= n + Y) && !eq.items.length, '天平：快 1 年的墓碑不跟（那一題照舊輸給它，跟修之前一樣；這台自己寫的時間還是現在）');
  ok(KC.record({ tb: { u: { best: 1, last: 1, at: n + Y } } }, 'tb', 'u', 50, n).tb.u.at === n, '課本考試：快 1 年的 at 不跟');
  // 被推走的只有那一筆，別的項目、之後的操作都用真的時間
  const S2 = { learned: J(S.learned) }; S2.learned.c = { at: learnIso(S2, n)('c') };
  ok(S2.learned.c.at === new Date(n).toISOString(), '別的項目不受影響（沒有「看過最大時間」這種全域狀態，不會一起被推走）');
  // 連鎖：快 1 天內的會跟，跟了以後不會越推越遠（每次最多＋1 毫秒）
  let t = n + DAY - 5, hi = 0; for (let i = 0; i < 1000; i++) { t = SM.stamp(t, n); hi = Math.max(hi, t); }
  ok(hi === n + DAY + 1, '一直跟下去也不會超過現在＋1 天（超過就回到現在）: ' + (hi - n));
}

// ---------- 5. 每日日期不受影響（顯示、日期判斷照舊用真的時間）----------
{
  const real = Date.parse('2026-11-21T15:57:00Z');   // 台北 23:57；A 快 10 分 → 它的時間已經是 11/22 00:07
  const fastU = real + 10 * MIN;
  ok(SM.ddDay(real) === '261121' && SM.ddDay(fastU) === '261122', '前提：快的那台的時間已經跨日');
  // 慢的那台（B）看過 A 的時間之後做題：每日統計用真的時間 → 還是 11/21
  const dd = SM.ddAdd({}, 'dB', real, 'e', true);
  ok(Object.keys(SM.ddSum(dd)).join() === '261121', '每日統計（dd）：記在真的那一天');
  // 各科錯題庫：隔天複習的到期日用真的時間，不是 u
  const b = { q: { c: 0, w: 1, t: fastU, u: fastU, due: KM.dayIdx(fastU) + 1, p: {} } };
  KM.mark(b, 'q', false, {}, real, true);
  ok(b.q.due === KM.dayIdx(real) + 1 && b.q.u === fastU + 1, '隔天複習：到期日照真的今天算（u 跟到別台＋1 毫秒）');
  // 英文錯題：t（最近答錯，顯示用）是真的時間
  const M = { mistakes: { x: { c: 0, w: 1, t: fastU, u: fastU } } }; mistake(M, 'x', 0, real);
  ok(M.mistakes.x.t === real && M.mistakes.x.u === fastU + 1, '英文錯題：t＝真的時間、u＝別台＋1 毫秒');
  // 心智圖：passedAt（每日證據、顯示）是真的時間
  const p = mmPass({ 'social:u1': { unlocked: 2, best: { 1: 100 }, passedAt: { 1: fastU }, lastPassAt: fastU, reviewStep: 0 } }, 'u1', 1, 100, true, real + DAY);
  ok(p['social:u1'].passedAt[1] === real + DAY, '心智圖：passedAt 是真的時間');
  // stamp 不碰 Date.now（不改全域時間）
  ok(Math.abs(Date.now() - new Date().getTime()) < 50, 'Date.now 沒被動到');
  ok(/const now = \+snap\.now \|\| Date\.now\(\)/.test(src('assistant-core.js')) && /SM\.ddDay\(Date\.now\(\)\)/.test(src('kids-daily.js')), '每日清單、小助理的「今天」照舊用 Date.now()');
}

// ---------- 6. 三台輪流操作後收斂（A 快 10 分、B 慢 5 分、C 準；每次操作前先同步）----------
{
  const devs = { A: {}, B: {}, C: {} }; let server = SM.normalize({});
  const sync = k => { server = SM.compact(SM.merge(devs[k], server)); devs[k] = J(server); };
  const steps = [];   // [真時間, 裝置, 動作]
  let r = R0;
  const act = (k, f) => { r += MIN; sync(k); const now = r + OFF[k]; f(devs[k], now); sync(k); steps.push(k); };
  // 學會／取消輪流：A 學會 → B 取消 → C 學會 → B 取消（最後是取消）
  act('A', (d, now) => { d.learned = Object.assign({}, d.learned, { apple: { at: learnIso(d, now)('apple'), score: '3/3' } }); });
  act('B', (d, now) => { d.learned.apple = { removedAt: learnIso(d, now)('apple') }; });
  act('C', (d, now) => { d.learned.apple = { at: learnIso(d, now)('apple'), score: '3/3' }; });
  act('B', (d, now) => { d.learned.apple = { removedAt: learnIso(d, now)('apple') }; });
  // 英文錯題：A 答錯 → B 對 3 次畢業 → A 又錯（最後在錯題庫）→ B 對 3 次（最後畢業）
  act('A', (d, now) => { d.mistakes = d.mistakes || {}; mistake(d, 'w:x', 0, now); });
  act('B', (d, now) => { for (let i = 0; i < 3; i++) mistake(d, 'w:x', 1, now + i); });
  act('A', (d, now) => { mistake(d, 'w:x', 0, now); });
  act('B', (d, now) => { for (let i = 0; i < 3; i++) mistake(d, 'w:x', 1, now + i); });
  // 各科錯題庫：B 答錯 → A 對 3 次畢業 → B 又錯（最後在錯題庫）
  act('B', (d, now) => { d.mk = d.mk || {}; d.mk.math = d.mk.math || {}; KM.mark(d.mk.math, 'q9', false, {}, now, false); });
  act('A', (d, now) => { for (let i = 0; i < 3; i++) KM.mark(d.mk.math, 'q9', true, null, now + i, false); });
  act('B', (d, now) => { KM.mark(d.mk.math, 'q9', false, {}, now, false); });
  // 天平：A 加兩題 → B 刪一題 → C 加回來並放第一個 → B 換回原順序
  act('A', (d, now) => { d.eq = SM.eqFromLocal([{ q: 'a', own: true }, { q: 'b', own: true }], d.eq, now); });
  act('B', (d, now) => { d.eq = SM.eqFromLocal([{ q: 'b', own: true }], d.eq, now); });
  act('C', (d, now) => { d.eq = SM.eqFromLocal([{ q: 'a', own: true }, { q: 'b', own: true }], d.eq, now); });
  act('B', (d, now) => { d.eq = SM.eqFromLocal([{ q: 'b', own: true }, { q: 'a', own: true }], d.eq, now); });
  // 課本考試：A 80 → B 60 → C 70（最近一次＝70、最高 80）
  act('A', (d, now) => { d.done = KC.record(d.done, 'tb', 'u2', 80, now); });
  act('B', (d, now) => { d.done = KC.record(d.done, 'tb', 'u2', 60, now); });
  act('C', (d, now) => { d.done = KC.record(d.done, 'tb', 'u2', 70, now); });
  // 心智圖：A 過關 → B 1 天複習 → C 3 天複習（reviewStep 2）
  act('A', (d, now) => { d.mm = mmPass(d.mm || {}, 'u3', 1, 100, false, now); });
  act('B', (d, now) => { d.mm = mmPass(d.mm, 'u3', 1, 100, true, now); });
  act('C', (d, now) => { d.mm = mmPass(d.mm, 'u3', 1, 100, true, now); });
  // 最後每台再同步兩輪
  for (let i = 0; i < 2; i++) ['A', 'B', 'C'].forEach(sync);
  const docs = ['A', 'B', 'C'].map(k => SM.normalize(devs[k]));
  ok(same(docs[0], docs[1]) && same(docs[1], docs[2]) && same(docs[0], SM.normalize(server)), '三台收斂（文件完全一樣）');
  const f = docs[0];
  ok(f.learned.apple.removedAt && !f.learned.apple.at, '三台：學會 → 取消 → 學會 → 取消，最後是取消: ' + C(f.learned.apple));
  ok(f.mistakes['w:x'].d === 1, '三台：英文錯題最後畢業: ' + C(f.mistakes['w:x']));
  ok(f.mk.math.q9 && !f.mk.math.q9.d, '三台：各科錯題最後又答錯 → 在錯題庫: ' + C(f.mk.math.q9));
  ok(f.eq.items.map(i => i.q).join() === 'b,a', '三台：天平最後是 B 換的順序（a 加回來了）: ' + C(f.eq.items));
  ok(f.done.tb.u2.last === 70 && f.done.tb.u2.best === 80, '三台：課本考試最近一次＝最後考的 70: ' + C(f.done.tb.u2));
  ok(f.mm['social:u3'].reviewStep === 2, '三台：心智圖複習進度 2: ' + C(f.mm['social:u3']));
  // 對照：一樣的劇本，寫入端直接用裝置時間（修之前）→ 至少有一項錯
  const plain = SM.merge({ learned: { apple: { at: new Date(R0 + MIN + OFF.A).toISOString() } } }, { learned: { apple: { removedAt: new Date(R0 + 4 * MIN + OFF.B).toISOString() } } });
  ok(plain.learned.apple.at, '對照：修之前 A（快）學會、3 分鐘後 B（慢）取消 → 會變回學會');
  // 寫進去的時間都沒有超過「最晚那台的時鐘＋1 毫秒×操作數」
  const maxT = Math.max(...Object.values(f.learned).map(x => Date.parse(x.at || x.removedAt)), f.mistakes['w:x'].u, f.mk.math.q9.u, f.eq.at, f.done.tb.u2.at, f.mm['social:u3'].lastPassAt);
  ok(maxT <= r + OFF.A + 100, '三台：時間沒有被越推越遠: ' + (maxT - r - OFF.A));
}

console.log(`sync-clock: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
