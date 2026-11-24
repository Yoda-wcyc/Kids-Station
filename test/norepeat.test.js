// norepeat.test.js — 每日清單「學過 2 次就不算」（2026-11-21 家長：「已經學習過兩次的，不能計入，強迫他去學新的」）
// 計入／不計入、答錯不算學過、錯題重練、優先出新題、全部學會、跨裝置（同步後一樣不算）、舊日期不重算、目錄數字、還能撐幾天
// 用法：node test/norepeat.test.js
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL norepeat:', m); } };
const SM = require(path.join(root, 'syncmerge.js')), KD = require(path.join(root, 'kids-daily.js'))._core, KE = require(path.join(root, 'engine.js'));
const MX = require(path.join(root, 'math', 'multiply.js')), KC = require(path.join(root, 'completion.js')), KL = require(path.join(root, 'kids-lock.js')), KM = require(path.join(root, 'kids-mistakes.js'))._core;
const GU = KC.GEO_UNITS, G = KD.GOAL_DEF, DAY = 864e5, NOW = Date.UTC(2026, 10, 21, 4), TODAY = SM.ddDay(NOW);

// ---------- 瀏覽器的 rec／finish（假的 window：localStorage、已登入）----------
function browser(store) {
  const ls = { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } };
  const w = { document: {}, localStorage: ls, KESyncMerge: SM, KidsAuth: { configured: () => true, isLoggedIn: () => true }, Date };
  w.window = w; vm.createContext(w);
  vm.runInContext(fs.readFileSync(path.join(root, 'kids-daily.js'), 'utf8'), w);
  return w.KidsDaily;
}
const sumToday = store => SM.ddSum(JSON.parse(store.kids_daily || '{}'))[SM.ddDay(Date.now())] || {};

// ---------- 1. 計入與不計入 ----------
{
  const st = {}, K = browser(st);
  ok(K.rec('english', true, 'sentence', 0) === true && K.rec('english', true, 'sentence', 1) === true, 'prev 0, 1 → counted');
  ok(K.rec('english', true, 'sentence', 2) === false && K.rec('english', false, 'sentence', 5) === false, 'prev ≥ 2 → not counted (right or wrong)');
  const D = sumToday(st);
  ok(D.e[0] === 2 && D.j[0] === 2 && D.r[0] === 2 && D.r[1] === 1, 'english 2 / 句型 2; old questions go to r (2, one wrong): ' + JSON.stringify(D));
  ok(K.rec('english', true) === true && sumToday(st).e[0] === 3, 'no prev (games, random questions) → counted as before');
  ok(K.rec('english', null, null, 2) === false && sumToday(st).r[0] === 3 && !(sumToday(st).o), 'open task done twice → old, not 國語/英文');
  const c = KD.checkDay(sumToday(st), 0, KD.GOAL_V2D);
  ok(c.rows[0].n === 3 && c.rows[0].subs[0].n === 2, 'checklist ignores r: english 3, 句型 2');
  // 2026-11-24 單字（d）：一樣學過 2 次就不算、不記 d
  const sw = {}, KW = browser(sw);
  ok(KW.rec('english', true, 'word', 0) === true && KW.rec('english', false, 'word', 1) === true && KW.rec('english', true, 'word', 2) === false && KW.rec('english', true, 'word') === true, '單字: prev 0/1/none counted, 2 → old');
  ok(sumToday(sw).e[0] === 3 && sumToday(sw).d[0] === 3 && sumToday(sw).r[0] === 1 && KD.checkDay(sumToday(sw), 0, G).rows[0].subs[0].name === '單字' && KD.checkDay(sumToday(sw), 0, G).rows[0].subs[0].n === 3, '單字 3 counted (d3), old one only in r: ' + JSON.stringify(sumToday(sw)));
  ok(K.finish('geo', false) === false && !sumToday(st).w && K.finish('geo', true) === true && sumToday(st).w[0] === 1 && K.finish('comic') === true, 'finish: isNew false → not recorded; true / omitted → recorded');
  const v = KD.view({ dd: JSON.parse(st.kids_daily), ev: {}, today: SM.ddDay(Date.now()), start: '261103', dg: {}, done: {} });
  const h = KD.cardHtml(v, SM.ddDay(Date.now()));
  ok(v.rows[0].old === 3 && h.includes('另外重做了 3 題已經學過 2 次的舊題') && v.rows[0].n === 3, 'parent card: old questions listed separately, not in the total');
  const note = K.oldNote('#practice');
  ok(/這題你已經會了（學過 2 次），不算今天的題數，去學新的吧/.test(note) && /href="#practice"/.test(note) && /^<span /.test(note) && !/<p/.test(note), 'hint: one gentle line + link, inline (fits inside <p>)');
}

// ---------- 2. 答錯不算學過（英文：ke_log＋agg）----------
{
  const t = NOW - 5 * DAY, e = (id, ok, k) => ({ t: t + k * 1000, id, ok: ok ? 1 : 0, a: String(k) });
  const log = [e('w:cat:zh2en', 0, 1), e('w:cat:zh2en', 0, 2), e('w:cat:zh2en', 1, 3), e('w:cat:zh2en', 0, 4), e('w:dog:zh2en', 1, 5), e('w:dog:zh2en', 1, 6)];
  const m = KD.okCounts(log, {});
  ok(m.get('w:cat:zh2en') === 1 && KD.isNew(m.get('w:cat:zh2en')) && m.get('w:dog:zh2en') === 2 && !KD.isNew(m.get('w:dog:zh2en')), 'wrong answers do not count as learned: cat 1 (3 wrong) is new, dog 2 is old');
  const agg = { 'w:cat:zh2en': { n: 9, k: 1, fc: t }, 'w:old:zh2en': { n: 1, k: 0, fc: t } };
  ok(KD.okCounts(log, agg).get('w:cat:zh2en') === 2 && KD.okCounts([], agg).get('w:old:zh2en') === 1, 'compacted answers (agg.k, or fc only = at least 1) count too');
  const big = SM.compact({ log: Array.from({ length: 400 }, (_, i) => ({ t: t + i, id: 'w:q' + (i % 50) + ':zh2en', ok: 1, a: 'x'.repeat(1200) })) }, 60000);
  const cnt = KD.okCounts(big.log, big.agg);
  ok(big.cut > 0 && [...cnt.values()].every(v => v === 8), 'after compaction (ke_log > limit) every question still has its full count: ' + [...new Set(cnt.values())]);
}

// ---------- 3. 錯題重練 ----------
{
  // 英文：錯題庫的題跟一般題同一個 id → 進錯題庫之前答對過的也算
  const t = NOW - DAY, log = [{ t, id: 'ph:a:type', ok: 1 }, { t: t + 1, id: 'ph:a:type', ok: 0 }, { t: t + 2, id: 'ph:a:type', ok: 1 }];
  ok(!KD.isNew(KD.okCounts(log).get('ph:a:type')), 'english mistake redo: 1 right before + 1 right in redo = learned twice → 3rd not counted');
  // 異分母錯題（隨機題，進錯題庫前是答錯的）：看錯題庫的連對次數 c；畢業規則不變（連對 3 次）
  const book = {}, id = 'fa:1/2+1/3';
  KM.mark(book, id, false, {}, NOW);   // 一般一輪答錯 → 進錯題庫（c＝0）
  const step = okk => { const e = book[id], prev = e && !e.d ? e.c || 0 : 0; return { prev, counted: KD.isNew(prev), res: KM.mark(book, id, okk, {}, NOW) }; };
  const a = step(true), b = step(true), c = step(true);
  ok(a.counted && b.counted && !c.counted && c.res === 'graduated' && book[id].d === 1, 'fracadd redo: 1st, 2nd right counted; 3rd right graduates (tombstone) but not counted ' + JSON.stringify([a, b, c]));
}

// ---------- 4. 優先出新題 ----------
{
  const ctx = { window: {} }; vm.createContext(ctx);
  ['words', 'words-2', 'words-3', 'words-4', 'words-5', 'words-6', 'words-7', 'words-8', 'phrases', 'phrases-2', 'roots', 'grammar', 'patterns', 'patterns-2', 'textbook', 'oral'].forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctx));
  const w = ctx.window, E = new KE.Engine({ words: w.DATA_WORDS, phrases: w.DATA_PHRASES, roots: w.DATA_ROOTS, grammar: w.DATA_GRAMMAR, patterns: w.DATA_PATTERNS, textbook: w.DATA_TEXTBOOK });
  const pat = E.list({ modules: ['patterns'] }), half = pat.slice(0, pat.length - 15);
  E.old = new Set(half.map(m => m.id));
  let allNew = true; for (let i = 0; i < 20; i++) { const qs = E.buildQuiz({ modules: ['patterns'], count: 10 }); if (qs.some(q => E.old.has(q.id))) allNew = false; }
  ok(allNew, 'random practice: only unlearned questions while there are enough (' + (pat.length - half.length) + ' new of ' + pat.length + ')');
  const qs = E.buildQuiz({ modules: ['patterns'], count: 25 });
  ok(qs.filter(q => !E.old.has(q.id)).length === 15 && qs.length === 25, 'not enough new → all new first, then old to fill the round');
  const ids = pat.slice(0, 40).map(m => m.id); E.old = new Set(ids.slice(0, 30));
  const rd = E.round({ ids, count: 10 });
  ok(rd.filter(q => !E.old.has(q.id)).length >= 10 || rd.every(q => !E.old.has(q.id) || q.type === 'zh2en-type'), 'question bank / chosen ids: new ids first');
  const tb = E.D.textbook[0].id, fam = E.tbq[tb].ro; E.old = new Set(fam.slice(1));
  let tbNew = true; for (let i = 0; i < 10; i++) { const p = E.tbPick(tb, 'ro', 1, new Set()); if (p[0] !== fam[0]) tbNew = false; }
  ok(tbNew, 'textbook practice picks the unlearned sentence first');
  // 乘法快算：同一組數字（a×b＝b×a）學過 2 次的先不出
  const seen = {}; for (let a = 11; a <= 99; a++) if (a % 10) for (let b = 20; b <= 90; b += 10) seen[MX.pairKey(a, b)] = a < 90 ? 2 : 0;
  const rnd = MX.round('d22t', 9, null, q => seen[MX.pairKey(q.a, q.b)] >= 2);
  ok(rnd.length === 9 && rnd.every(q => q.a > 90), 'multiply: only the not-yet-learned pairs (a ≥ 91) while they last ' + rnd.map(q => q.a + 'x' + q.b));
  ok(MX.pairKey(15, 57) === MX.pairKey(57, 15) && MX.round('d22t', 30, null, () => true).length === 30, 'a×b = b×a; everything learned → still gives a full round');
  // 地理：下一組＝第一個還有新題的組
  const gq = {}; KD.geoIds('m1', 'p1').concat(KD.geoIds('m1', 'p2')).forEach(id => { gq[id] = 2; }); gq['m1-p15'] = 1;
  ok(KD.nextGeo({}, GU, gq) === 'geo/unit.html?u=m1&tab=prac' && (delete gq['m1-p15'], gq['m1-p15'] = 2, KD.nextGeo({}, GU, gq)) === 'geo/unit.html?u=m1&tab=prac', 'geo next: set 2 has one question learned once → still prac; all p1/p2 learned → p3');
  KD.geoIds('m1', 'p3').forEach(id => { gq[id] = 2; });
  ok(KD.nextGeo({}, GU, gq) === 'geo/unit.html?u=m1&tab=exam', 'geo next: practice all learned → the unit test');
  ok(KD.nextComic({ seen: { v1e1: 1, v1e2: 1 }, next: '' }, { n: { v1: '2' } }) === 'comics/v1e2.html', 'history next: everything seen → first episode not done twice');
}

// ---------- 5. 全部學會：那一項算達成、顯示 🎉 ----------
{
  const c = KD.checkDay({ e: [40, 40], j: [5, 5], p: [10, 10], u: [20, 20], f: [10, 10] }, 0, KD.GOAL_V2D, { j: true, g: true, r: true });
  const en = c.rows[0], rd = c.rows[2], geo = c.rows[4];
  ok(en.subs[0].done && en.subs[0].full && !en.done, '句型 all learned → that sub-goal is done; english total still needs 100');
  ok(rd.done && rd.full && rd.left === 0 && geo.done && geo.full && !c.rows[3].done, 'reading / geo all learned → done (🎉); history not');
  ok(/閱讀 🎉 全部學會了/.test(KD.checkText(c)) && /地理 🎉 全部學會了/.test(KD.checkText(c)) && /句型 5\/30 🎉 全部學會了/.test(KD.checkText(c)), 'parent text shows 🎉 全部學會了: ' + KD.checkText(c));
  const allQ = {}; GU.forEach(([u]) => ['p1', 'p2', 'p3', 't'].forEach(s => KD.geoIds(u, s).forEach(id => { allQ[id] = 2; })));
  ok(KD.geoFull(allQ, GU) && !KD.geoFull(Object.assign({}, allQ, { 'w7-t10': 1 }), GU) && !KD.geoFull({}, GU) && !KD.geoFull(allQ, null), 'geo all learned only when every one of 720 questions is learned twice');
  ok(/#s\/geo$/.test(KD.nextGeo({}, GU, allQ)), 'geo all learned → link to geo home');
  let n = {}; for (let v = 1; v <= 7; v++) for (let e = 1; e <= 6; e++) n = KL.setV(n, 'v' + v + 'e' + e, 2);
  ok(KD.histFull(n, {}) && !KD.histFull(KL.setV(n, 'v7e6', 1), {}) && KD.histFull(KL.setV(n, 'v7e6', 4), {}), 'history all learned: every episode done twice (parent-unlocked = done twice too)');
  const zh = {}, cy = {}; for (let l = 1; l <= 4; l++) for (let i = 1; i <= 25; i++) zh['zh' + l + '-' + String(i).padStart(2, '0')] = NOW;
  for (let i = 1; i <= 100; i++) cy['cy' + String(i).padStart(3, '0')] = NOW; for (let i = 1; i <= 10; i++) cy['cyr' + String(i).padStart(2, '0')] = NOW;
  ok(KD.readFull({ zh, cy }) && !KD.readFull({ zh, cy: (c => { delete c.cy100; return c; })(Object.assign({}, cy)) }) && !KD.readFull({}), 'reading all read: 100 articles + 100 idiom stories + 10 idiom readings');
  const f = KD.fullOf({ left: { e: 0, j: 0, p: 5 }, done: Object.assign({}, n, { zh, cy }), geoQ: allQ, units: GU });
  ok(f.e && f.j && !f.p && f.r && f.h && f.g && !KD.fullOf({}).e && !KD.fullOf({ left: {} }).j, 'fullOf: english from the cached new-question counts, the rest from synced data ' + JSON.stringify(f));
}

// ---------- 6. 跨裝置：A 學過 2 次，B 同步後也不計入 ----------
{
  // 英文：A 的 ke_log 同步到 B
  const t = NOW - DAY, A = { log: [{ t, id: 'p:x:0:reorder', ok: 1, a: 'a' }, { t: t + 5, id: 'p:x:0:reorder', ok: 1, a: 'b' }] }, B = { log: [] };
  const docB = SM.merge(SM.normalize(B), SM.normalize(A));
  ok(!KD.isNew(KD.okCounts(docB.log, docB.agg).get('p:x:0:reorder')), 'english: learned twice on iPad A → old on iPad B after sync');
  // 地理：kids_geo_q → pg（Q 旗標兩層）→ 另一台
  const pgA = SM.pgFromLocal({ geoQ: { 'm1-p01': 2, 'm1-p02': 1, 'w7-t10': 2, 'bad-id': 2 } }), back = SM.pgApply(SM.mergePg(pgA, SM.pgFromLocal({ geoQ: { 't3-p05': 1 } })), { geoQ: { 't3-p05': 1 } }).geoQ;
  ok(back['m1-p01'] === 2 && back['m1-p02'] === 1 && back['w7-t10'] === 2 && back['t3-p05'] === 1 && !back['bad-id'] && Object.keys(back).length === 4, 'geo: per-question counts survive the round trip ' + JSON.stringify(back) + ' ' + JSON.stringify(pgA));
  ok(SM.canon(SM.mergePg(pgA, pgA)) === SM.canon(SM.normPg(pgA)) && SM.canon(SM.mergePg(pgA, { f: 'Qm1=1' })) === SM.canon(SM.mergePg({ f: 'Qm1=1' }, pgA)), 'geo flags merge: idempotent, commutative');
  ok(!SM.pgApply(SM.pgFromLocal({ geoQ: { 'm1-p01': 2 } }), { geoQ: { 'm1-p01': 2 } }).geoQ, 'nothing new → local key not rewritten');
  // 歷史：done.n（kids-lock）同步
  let a = {}; a = KL.setV(a, 'v2e3', 2);
  const merged = SM.mergeDone({}, a);
  ok(KD.epTimes(merged, {}, 'v2e3') === 2 && !KD.isNew(KD.epTimes(merged, {}, 'v2e3')) && KD.epTimes({}, { v2e3: 1 }, 'v2e3') === 1, 'history: episode done twice on A → old on B; old seen-only record = once');
}

// ---------- 7. 舊日期不重算 ----------
{
  const dd = {}, add = (t, code, n) => { let d = dd.x || ''; let o = { x: d }; for (let i = 0; i < n; i++) o = SM.ddAdd(o, 'x', t, code, true); dd.x = o.x; };
  add(NOW - 3 * DAY, 'e', 50); add(NOW, 'e', 50);
  const v = KD.view({ dd, ev: {}, today: TODAY, start: '261103', dg: {}, done: {}, full: { g: true, r: true } });
  const old = v.rows.find(r => r.day === SM.ddDay(NOW - 3 * DAY)), now = v.rows.find(r => r.day === TODAY);
  ok(/地理 0\/1/.test(old.check) && /閱讀 未完成/.test(old.check) && /地理 🎉 全部學會了/.test(now.check) && /閱讀 🎉 全部學會了/.test(now.check), 'full (all learned) only applies to today, past days keep their own result: ' + old.check + ' ／ ' + now.check);
  ok(KD.NEW_RULE === '261121' && old.n === 50, 'old days keep their counts (nothing is recounted; rule starts 11/21)');
}

// ---------- 8. 地理一組怎麼算 ----------
{
  ok(KD.geoSetNew([{ ok: true, prev: 2 }, { ok: true, prev: 1 }]) && !KD.geoSetNew([{ ok: true, prev: 2 }, { ok: false, prev: 0 }]) && !KD.geoSetNew([]), 'a geo set counts only if at least one not-yet-learned question was answered right');
  ok(KD.geoIds('t2', 'p3')[0] === 't2-p21' && KD.geoIds('t2', 'p3')[9] === 't2-p30' && KD.geoIds('w1', 't')[9] === 'w1-t10', 'set → question ids');
}

// ---------- 9. 目錄數字對得上（全部學會的判定用）----------
{
  const zhCat = require(path.join(root, 'chinese', 'data', 'catalog.js')), cyCat = require(path.join(root, 'chinese', 'idioms', 'data', 'catalog.js'));
  ok(zhCat.length === KD.READ_N.zh && cyCat.idioms.length === KD.READ_N.cy && (cyCat.readings || []).length === KD.READ_N.cyr, 'reading counts match the catalogs: ' + [zhCat.length, cyCat.idioms.length, (cyCat.readings || []).length]);
  const W = { window: {} }; vm.createContext(W); vm.runInContext(fs.readFileSync(path.join(root, 'comics', 'catalog.js'), 'utf8'), W);
  const eps = W.window.COMIC_CATALOG.vols.flatMap(v => v.eps).filter(e => e.ready).map(e => e.id);
  ok(eps.length === KD.COMIC_N && eps.every(id => /^v[1-7]e[1-6]$/.test(id)), 'comic episodes: ' + eps.length);
  // 題目 id 照檔案裡的順序（geo.js groupOf：練習前 10 題＝第 1 組…）
  const bad = GU.filter(([u]) => { const f = path.join(root, 'geo', 'data', u + '.js'); if (!fs.existsSync(f)) return true; const got = [...fs.readFileSync(f, 'utf8').matchAll(/id: '([mtw]\d-[pt]\d\d)'/g)].map(m => m[1]); return SM.canon(got) !== SM.canon(['p1', 'p2', 'p3', 't'].flatMap(s => KD.geoIds(u, s))); });
  ok(!bad.length && GU.length * KD.GEO_PER === 720, 'every geo unit has p01～p30 + t01～t10 in order (so set ↔ question ids line up): bad ' + bad.map(x => x[0]));

  // 還能撐幾天（依每日目標；每題最多算 2 次）—— 只印出來給家長看
  const ctx = { window: {} }; vm.createContext(ctx);
  ['words', 'words-2', 'words-3', 'words-4', 'words-5', 'words-6', 'words-7', 'words-8', 'phrases', 'phrases-2', 'roots', 'grammar', 'patterns', 'patterns-2', 'textbook', 'oral'].forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctx));
  const w = ctx.window, E = new KE.Engine({ words: w.DATA_WORDS, phrases: w.DATA_PHRASES, roots: w.DATA_ROOTS, grammar: w.DATA_GRAMMAR, patterns: w.DATA_PATTERNS, textbook: w.DATA_TEXTBOOK });
  const k = { e: 0, d: 0, j: 0, p: 0, speak: 0 }; E.meta.forEach(m => { k.e++; if (m.type === 'speak') k.speak++; const d = KE.dailyKind(Object.assign({ oral: /:oral:/.test(m.id) }, m)); if (d === 'word') k.d++; if (d === 'sentence') k.j++; if (d === 'phrase') k.p++; });
  const d22t = 81 * 8, d22 = 81 * 81 / 2;
  console.log('norepeat: capacity (×2 per question) → days at the default goal: english ' + k.e + ' q (' + k.speak + ' 🎤) → ' + Math.floor(k.e * 2 / G[0]) + ' d; 單字 ' + k.d + ' → ' + Math.floor(k.d * 2 / G[9]) + ' d; 句型 ' + k.j + ' → ' + Math.floor(k.j * 2 / G[3]) + ' d; 片語 ' + k.p + ' → ' + Math.floor(k.p * 2 / G[4]) + ' d; ' +
    'reading ' + (zhCat.length + cyCat.idioms.length + (cyCat.readings || []).length) + ' (first read only) → ' + Math.floor((zhCat.length + cyCat.idioms.length + (cyCat.readings || []).length) / G[2]) + ' d; history ' + KD.COMIC_N + ' eps ×2 → ' + KD.COMIC_N * 2 + ' d; geo 72 sets (≥2 counted rounds each when all right) → ' + 72 * 2 + ' d; ' +
    '乘法 二位×整十 ' + d22t + ' pairs → ' + Math.floor(d22t * 2 / G[5]) + ' d (二位×二位 ~' + Math.round(d22) + ' more pairs)');
}

console.log('norepeat: ' + pass + ' passed, ' + fail + ' failed');
if (fail) process.exitCode = 1;
