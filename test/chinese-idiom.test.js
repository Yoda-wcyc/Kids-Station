// chinese-idiom.test.js — 國語〈成語故事 100〉資料與規則檢查（2026-11-01）
// 用法：node test/chinese-idiom.test.js（接線後由 smoke.js 一起跑）
// - 目錄（chinese/idioms/data/catalog.js）：100 個成語、每級 25、id 唯一、每個都有出處、作者分配平均且四級都有、素養閱讀 10 篇
// - 每個成語（set0～set3.js）：資料格式、故事字數、注音、題數、d 遞增、單選只有一個正解、選項不洩答、開放題有參考答案＋要點、
//   情境題比例、考題沒有跟練習題／例句同一句、寫在目錄指定的檔案（規格：kids-member/docs/CHINESE_IDIOM_SPEC.md）
// - 素養閱讀：共用 reading-core 的檢查＋字數 400～800、6 題、用到的成語在同一單元
// - 規則：解鎖、完成條件、單元測驗 20 題（情境 ≥ 10）、總測驗 30 題 d 遞增、錯題 id
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const CY = require(path.join(root, 'chinese', 'idioms', 'idiom-core.js'));
const ZR = require(path.join(root, 'chinese', 'reading-core.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL chinese-idiom:', m); } };

// ---------- 目錄 ----------
const CAT = require(path.join(root, 'chinese', 'idioms', 'data', 'catalog.js')), CI = CAT.idioms, CR = CAT.readings;
ok(CI.length === 100, 'catalog has 100 idioms: ' + CI.length);
[1, 2, 3, 4].forEach(lv => ok(CI.filter(c => c.lv === lv).length === 25, 'catalog L' + lv + ' = 25'));
ok(CI.every((c, i) => c.n === i + 1 && c.id === CY.idOf(i + 1)), 'catalog numbered 1..100 in order');
ok(new Set(CI.map(c => c.id)).size === 100 && new Set(CI.map(c => c.word)).size === 100, 'catalog ids and idioms unique');
ok(CI.every(c => /^[㐀-鿿]{4,8}$/.test(c.word) && /《.+》|〈.+〉/.test(c.src)), 'every idiom has a source (書名／篇名)');
ok(CI.every((c, i) => i === 0 || c.lv >= CI[i - 1].lv), 'levels in order L1→L4');
const perSet = [0, 1, 2, 3].map(s => CI.filter(c => c.set === s).length);
ok(perSet[0] === 10 && perSet.slice(1).every(n => n === 30), 'set0 = 10 samples, set1–3 = 30 each: ' + perSet);
[1, 2, 3].forEach(s => ok([1, 2, 3, 4].every(lv => CI.some(c => c.set === s && c.lv === lv)), 'author set' + s + ' covers all four levels'));
ok([[1, 3], [2, 3], [3, 2], [4, 2]].every(([lv, n]) => CI.filter(c => c.set === 0 && c.lv === lv).length === n), 'samples: L1×3, L2×3, L3×2, L4×2');
ok(CR.length === 10 && CR.every((r, i) => r.id === 'cyr' + String(i + 1).padStart(2, '0') && r.unit === i + 1 && ZR.GENRES.includes(r.genre) && r.domain.every(d => ZR.DOMAINS.includes(d))), 'readings: 10, one per unit, genre/domain from reading-core');
ok(CR.every((r, i) => i === 0 || r.lv >= CR[i - 1].lv) && [1, 2, 3, 4].every(lv => CR.some(r => r.lv === lv)), 'readings ordered by level, all four levels');
ok(CR.filter(r => r.set === 0).length === 1 && [1, 2, 3].every(s => CR.filter(r => r.set === s).length === 3), 'readings: 1 sample + 3 per author');

// ---------- 資料檔：各自載入，寫在目錄指定的檔案 ----------
const idioms = [], reads = [];
for (let s = 0; s <= 3; s++) {
  const f = path.join(root, 'chinese', 'idioms', 'data', 'set' + s + '.js');
  ok(fs.existsSync(f), 'data file exists: set' + s + '.js');
  if (!fs.existsSync(f)) continue;
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: 'set' + s + '.js' });
  (ctx.window.DATA_CY || []).forEach(it => { const c = CI.find(x => x.id === it.id); ok(c && c.set === s, it.id + ' belongs in set' + (c ? c.set : '?') + '.js, found in set' + s + '.js'); idioms.push(it); });
  (ctx.window.DATA_CY_READ || []).forEach(a => { const c = CR.find(x => x.id === a.id); ok(c && c.set === s, a.id + ' belongs in set' + (c ? c.set : '?') + '.js, found in set' + s + '.js'); reads.push(a); });
}
ok(idioms.every((it, i) => i === 0 || it.id > idioms[i - 1].id || CI.find(c => c.id === it.id).set !== CI.find(c => c.id === idioms[i - 1].id).set), 'idioms written in id order within each file');
const errs = CY.validateAll(CAT, idioms, reads);
errs.forEach(e => ok(false, e));
ok(!errs.length, 'all idioms and readings valid (' + idioms.length + ' idioms, ' + reads.length + ' readings)');

// 每則：題數、出處、d 遞增、單選唯一正解（validateAll 已逐條檢查；這裡把規格的硬數字再對一次）
idioms.forEach(it => {
  ok(it.rq.length >= 4 && it.rq.length <= 5 && it.pq.length >= 4 && it.pq.length <= 6 && it.xq.length === 2, it.id + ' question counts rq 4–5 / pq 4–6 / xq 2');
  ok(it.src && it.facts.some(f => /成語典/.test(f)), it.id + ' source checked against 成語典 (facts)');
  ['rq', 'pq', 'xq'].forEach(k => ok(it[k].every((q, i) => i === 0 || q.d >= it[k][i - 1].d), it.id + ' ' + k + ' d ascending'));
  ok(it.rq.concat(it.pq, it.xq).filter(q => q.type === 'mc').every(q => Number.isInteger(q.a) && new Set(q.opts).size === q.opts.length), it.id + ' mc: one answer index, distinct options');
  ok(it.rq.concat(it.pq).filter(CY.isOpen).every(q => q.ref && q.rubric.length >= 2), it.id + ' open questions have ref + rubric');
});
// id 唯一（錯題庫 id：成語或篇 id + 題 id）
const mk = idioms.flatMap(it => it.rq.concat(it.pq, it.xq).map(q => CY.mkId(it, q))).concat(reads.flatMap(a => a.qs.map(q => CY.mkId(a, q))));
ok(new Set(mk).size === mk.length && mk.every(id => id.length <= 200), 'question ids unique site-wide (' + mk.length + ')');
const S = idioms.filter(it => CI.find(c => c.id === it.id).set === 0);
console.log('idiom samples: ' + S.map(it => it.word + ' ' + ZR.wordCount({ body: it.story }) + '字/' + (it.rq.length + it.pq.length + it.xq.length) + '題').join('、'));
console.log('reading samples: ' + reads.map(a => a.id + ' ' + ZR.wordCount(a) + '字/' + a.qs.length + '題').join('、'));

// ---------- 檢查器本身會擋下錯的資料 ----------
const base = JSON.parse(JSON.stringify(S.find(it => it.id === 'cy001')));
const bad = (fn, re, m) => { const it = JSON.parse(JSON.stringify(base)); fn(it); const e = CY.validateIdiom(it, CI[0]); ok(e.some(x => re.test(x)), 'validator catches: ' + m + ' → ' + e.join(' / ')); };
bad(it => { it.pq[0].a = 9; }, /正解索引/, 'mc answer out of range');
bad(it => { it.xq[0].opts[1] = it.xq[0].opts[0]; }, /選項重複/, 'duplicate options');
bad(it => { it.pq.reverse(); }, /由小到大/, 'd not ascending');
bad(it => { delete it.rq[3].ref; }, /參考答案/, 'open without ref');
bad(it => { it.pq = it.pq.filter(q => q.k !== 'xfer'); }, /xfer/, 'missing transfer question');
bad(it => { it.pq.forEach(q => { if (q.k === 'sit' || q.k === 'use') q.k = 'mean'; }); }, /情境|sit/, 'too few situational questions');
bad(it => { it.pq[1].ctx = '太短的情境。'; }, /80～150/, 'situation too short');
bad(it => { it.xq[0].opts[0] = '畫龍點睛'; it.xq[0].opts[1] = '守株待兔'; }, /正解要是/, 'fill answer is not this idiom');
bad(it => { it.src = '韓非子'; }, /出處/, 'source without 書名號');
bad(it => { it.zhuyin = 'ㄕㄡˇ ㄓㄨ'; }, /zhuyin/, 'zhuyin count mismatch');
bad(it => { it.story = it.story.slice(0, 2); }, /故事字數/, 'story too short');
bad(it => { it.rq = it.rq.filter(q => q.p !== 3); }, /詮釋整合/, 'missing PIRLS level');
bad(it => { it.xq[1] = JSON.parse(JSON.stringify(it.pq[4])); it.xq[1].id = 'x2'; }, /考題不能是開放題/, 'open question in exam');
bad(it => { it.quote = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一'; }, /30 字/, 'quote over 30 chars');
// 考題跟練習題同一句
{ const it = JSON.parse(JSON.stringify(base)); it.xq[1].ctx = it.pq[1].ctx; ok(CY.validateAll(CAT, [it], []).some(e => /同一句/.test(e)), 'validator catches exam sentence copied from practice'); }
{ const it = JSON.parse(JSON.stringify(base)); it.xq[0].q = it.eg[0].replace('守株待兔', '＿＿＿＿'); ok(CY.validateAll(CAT, [it], []).some(e => /同一句/.test(e)), 'validator catches exam sentence copied from an example sentence'); }
// 素養閱讀
const rb = JSON.parse(JSON.stringify(reads[0]));
const badR = (fn, re, m) => { const a = JSON.parse(JSON.stringify(rb)); fn(a); const e = CY.validateReading(a, CR[0], CI); ok(e.some(x => re.test(x)), 'reading validator catches: ' + m + ' → ' + e.join(' / ')); };
badR(a => { a.uses.push('cy055'); }, /不是第 1 單元/, 'idiom from another unit');
badR(a => { a.uses[0] = 'cy004'; }, /文中沒有用到/, 'listed idiom not in text');
badR(a => { a.qs.pop(); }, /6 題/, '5 questions only');
badR(a => { a.qs[0].opts[1] = a.qs[0].opts[0]; }, /選項重複/, 'shared reading-core check: duplicate options');
badR(a => { a.body = a.body.slice(0, 4); }, /字數/, 'too short');
badR(a => { a.body.push({ svg: '<svg viewBox="0 0 1 1"><script>x()</script></svg>', cap: 'x', alt: 'x' }); }, /script/, 'shared reading-core check: svg with script');

// ---------- 規則 ----------
// 解鎖（沿用國語閱讀：前一級完成 min(5, 已上架數)）
const done = s => id => s.includes(id);
ok(CY.unlocked(1, idioms, done([])) && !CY.unlocked(2, idioms, done([])), 'L1 open, L2 locked at start');
{ const L1 = idioms.filter(it => it.lv === 1).map(it => it.id), need = Math.min(5, L1.length);   // 照規則算：前一級完成 min(5, 已上架數)
  ok(!CY.unlocked(2, idioms, done(L1.slice(0, need - 1))) && CY.unlocked(2, idioms, done(L1.slice(0, need))), 'L2 opens after min(5, ' + L1.length + ' L1) = ' + need + ' L1 done'); }
const fake = Array.from({ length: 8 }, (_, i) => ({ id: 'cy00' + i, lv: 1 })).concat([{ id: 'cy030', lv: 2 }]);
ok(!CY.unlocked(2, fake, done(['cy000', 'cy001', 'cy002', 'cy003'])) && CY.unlocked(2, fake, done(['cy000', 'cy001', 'cy002', 'cy003', 'cy004'])), 'L2 opens after 5 L1 done');
// 單元測驗：已上架的本單元成語都完成才開
{ const U1 = CY.unitIdioms(1, CAT, idioms).map(it => it.id);   // 本單元已上架的成語都完成才開
  ok(U1.length > 0 && !CY.unitOpen(1, CAT, idioms, done(U1.slice(0, -1))) && CY.unitOpen(1, CAT, idioms, done(U1)), 'unit 1 test opens when its ' + U1.length + ' idioms are done'); }
ok(!CY.unitOpen(2, CAT, idioms, done([])) && !CY.unitOpen(2, CAT, [], done([])), 'unit not open with nothing done, or with no idioms yet (準備中)');
{ const R1 = reads[0].uses.filter(id => CY.find(idioms, id));   // 文中用到、已上架的成語都完成才開
  ok(R1.length > 0 && CY.readingOpen(reads[0], idioms, done(R1)) && !CY.readingOpen(reads[0], idioms, done(R1.slice(0, -1))), 'reading opens when its listed idioms (already written) are done'); }
// 單元測驗組卷：每個成語 2 題、照 d 排；滿 10 個成語＝20 題且情境 ≥ 10
const u1 = CY.unitTest(1, CAT, idioms);
ok(u1.length === 2 * CY.unitIdioms(1, CAT, idioms).length && u1.every((x, i) => i === 0 || x.q.d >= u1[i - 1].q.d), 'unit test: 2 per idiom, d ascending');
for (let k = 1; k <= 10; k++) {
  const L = CY.unitIdioms(k, CAT, idioms), T = CY.unitTest(k, CAT, idioms);
  if (L.length === 10) { ok(T.length === 20, 'unit ' + k + ' test = 20'); ok(T.filter(x => x.q.k === 'sit' || x.q.k === 'use').length >= 10, 'unit ' + k + ' test situational ≥ 10'); }
  ok(T.filter(x => x.q.k === 'sit' || x.q.k === 'use').length * 2 >= T.length, 'unit ' + k + ' test: at least half situational (' + T.length + ' so far)');
}
// 總測驗：最多 30 題、d 由易到難、不重複
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const F = CY.finalTest(idioms, 30, rnd), allX = idioms.reduce((n, it) => n + it.xq.length, 0);
ok(F.length === Math.min(30, allX) && F.every((x, i) => i === 0 || x.q.d >= F[i - 1].q.d) && new Set(F.map(x => CY.mkId(x.it, x.q))).size === F.length, 'final test: min(30, pool) questions, d ascending, no repeats');
// 完成條件＝國語閱讀（自動判分 ≥ 70%＋開放題都寫 ≥ 5 字）
const st = (type, d, r, text) => ({ q: { type }, done: d, right: r, text });
ok(CY.grade === ZR.grade && CY.grade([st('mc', 1, 1), st('mc', 1, 1), st('mc', 1, 1), st('tf', 1, 0), st('open', 1, 0, '我會主動去練習')]).pass, 'grade = reading-core grade (3/4 + open → done)');
// 錯題庫 p：分類「成語」、帶成語名、短
const p = CY.mkP(base, base.pq[1]);
ok(CY.mkId(base, base.pq[1]) === 'cy001:p2' && p.t === '成語' && p.a === 'cy001' && /^〔守株待兔〕/.test(p.s) && p.ans === '守株待兔' && JSON.stringify(p).length < 700, 'mistake entry: id = 成語:題, t = 成語');

console.log(`chinese-idiom: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
