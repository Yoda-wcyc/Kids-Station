// chinese-reading.test.js — 國語〈閱讀素養 100 篇〉資料與規則檢查（2026-11-01）
// 用法：node test/chinese-reading.test.js（smoke.js 也會跑）
// - 目錄（chinese/data/catalog.js）：100 篇、每級 25 篇、id 唯一、作者分檔對得上
// - 每一篇（chinese/data/set0～set5.js）：資料格式、字數、四個 PIRLS 層次都有、題數、篇內 d 由小到大、單選只有一個正解、
//   選項長度不洩答、開放題有參考答案＋評分要點、篇／題 id 唯一、寫在目錄指定的檔案裡（規格：kids-member/docs/CHINESE_READING_SPEC.md）
// - 規則：解鎖門檻、完成條件（自動判分 ≥ 70%＋開放題都寫）、錯題 id
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ZR = require(path.join(root, 'chinese', 'reading-core.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL chinese-reading:', m); } };

// 目錄
const CAT = require(path.join(root, 'chinese', 'data', 'catalog.js'));
ok(CAT.length === 100, 'catalog has 100 slots: ' + CAT.length);
[1, 2, 3, 4].forEach(lv => ok(CAT.filter(c => c.lv === lv).length === 25, 'catalog L' + lv + ' = 25'));
ok(new Set(CAT.map(c => c.id)).size === 100, 'catalog ids unique');
ok(CAT.every(c => /^zh[1-4]-\d\d$/.test(c.id) && ZR.GENRES.includes(c.genre) && c.domain.length && c.domain.every(d => ZR.DOMAINS.includes(d)) && c.topic && c.set >= 0 && c.set <= 5), 'catalog rows well-formed');
ok(new Set(CAT.map(c => c.topic.replace(/（.*?）/g, ''))).size === 100, 'catalog topics distinct');
const perSet = [0, 1, 2, 3, 4, 5].map(s => CAT.filter(c => c.set === s).length);
ok(perSet[0] === 5 && perSet.slice(1).every(n => n === 19), 'set0 = 5 samples, set1–5 = 19 each: ' + perSet);
[1, 2, 3, 4, 5].forEach(s => ok([1, 2, 3, 4].every(lv => CAT.some(c => c.set === s && c.lv === lv)), 'author set' + s + ' covers all four levels'));
ok(CAT.filter(c => c.lv === 4).every(c => c.genre !== '說明文'), 'L4 rows are comparison/argument genres');

// 每個資料檔各自載入：篇要寫在目錄指定的檔案裡
const all = [];
for (let s = 0; s <= 5; s++) {
  const f = path.join(root, 'chinese', 'data', 'set' + s + '.js');
  ok(fs.existsSync(f), 'data file exists: set' + s + '.js');
  if (!fs.existsSync(f)) continue;
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: 'set' + s + '.js' });
  const arts = ctx.window.DATA_ZH || [];
  arts.forEach(a => { const c = CAT.find(x => x.id === a.id); ok(c && c.set === s, a.id + ' belongs in set' + (c ? c.set : '?') + '.js, found in set' + s + '.js'); });
  all.push(...arts);
}
const errs = ZR.validateAll(CAT, all);
errs.forEach(e => ok(false, e));
ok(!errs.length, 'all articles valid (' + all.length + ' articles)');
// 樣本 5 篇：L1、L2 各 1、L3 2（含表格或圖）、L4 1（多文本）
const S = all.filter(a => CAT.find(c => c.id === a.id).set === 0);
ok(S.length === 5 && [1, 2, 3, 3, 4].join() === S.map(a => a.lv).sort().join(), 'samples: L1, L2, L3×2, L4');
ok(S.some(a => a.lv === 3 && a.body.some(b => b.table) && a.body.some(b => b.svg)), 'a sample L3 has a table and a chart');
// 篇內題 id 唯一，錯題庫 id（篇:題）全站唯一
const mk = all.flatMap(a => a.qs.map(q => ZR.mkId(a, q)));
ok(new Set(mk).size === mk.length && mk.every(id => id.length <= 200), 'mistake ids unique and ≤ 200 chars');
// 字數範圍（樣本實際字數印出來）
console.log('chinese samples word count: ' + S.map(a => a.id + ' ' + ZR.wordCount(a) + '字/' + a.qs.length + '題').join('、'));

// 檢查器本身會擋下錯的資料
const base = JSON.parse(JSON.stringify(S.find(a => a.lv === 1)));
const bad = (fn, re, m) => { const a = JSON.parse(JSON.stringify(base)); fn(a); const e = ZR.validate(a); ok(e.some(x => re.test(x)), 'validator catches: ' + m + ' → ' + e.join(' / ')); };
bad(a => { a.qs[0].a = 7; }, /正解索引/, 'mc answer out of range');
bad(a => { a.qs[0].opts[1] = a.qs[0].opts[0]; }, /選項重複/, 'duplicate options');
bad(a => { a.qs[0].opts[0] = '仁愛國小站就在我們家的門口旁邊'; }, /洩答/, 'correct option much longer');
bad(a => { a.qs = a.qs.filter(q => q.p !== 3); }, /詮釋整合/, 'missing PIRLS level');
bad(a => { a.qs.reverse(); }, /由小到大/, 'd not ascending');
bad(a => { delete a.qs[6].rubric; }, /評分要點/, 'open without rubric');
bad(a => { delete a.qs[6].ref; }, /參考答案/, 'open without reference answer');
bad(a => { a.qs[1].id = 'q1'; }, /id 重複/, 'duplicate question id');
bad(a => { a.body = a.body.slice(0, 2); }, /字數/, 'too short');
bad(a => { a.qs = a.qs.slice(0, 4).concat(a.qs.slice(6)); }, /題數|自動判分/, 'too few questions');
bad(a => { a.body.push({ svg: '<svg viewBox="0 0 1 1"><script>x()</script></svg>', cap: 'x', alt: 'x' }); }, /script/, 'svg with script');
bad(a => { a.genre = '記敘文 '; }, /genre/, 'genre not in list');
ok(ZR.validateAll(CAT, [base, base]).some(e => /重複/.test(e)), 'validator catches duplicate article id');

// 規則：解鎖（前一級完成 min(5, 篇數)）、完成（自動判分 ≥ 70%＋開放題都寫 ≥ 5 字）
const arts = [1, 1, 1, 1, 1, 1, 2, 2, 3].map((lv, i) => ({ id: 'zh' + lv + '-0' + i, lv }));
const doneSet = s => id => s.includes(id);
ok(ZR.unlocked(1, arts, doneSet([])) && !ZR.unlocked(2, arts, doneSet([])), 'L1 open, L2 locked at start');
ok(!ZR.unlocked(2, arts, doneSet(['zh1-00', 'zh1-01', 'zh1-02', 'zh1-03'])) && ZR.unlocked(2, arts, doneSet(['zh1-00', 'zh1-01', 'zh1-02', 'zh1-03', 'zh1-04'])), 'L2 opens after 5 L1 done');
ok(!ZR.unlocked(3, arts, doneSet(['zh2-06'])) && ZR.unlocked(3, arts, doneSet(['zh2-06', 'zh2-07'])), 'only 2 L2 articles → need both');
ok(ZR.unlocked(2, [{ id: 'zh1-01', lv: 1 }], doneSet(['zh1-01'])), 'one L1 article (phase 1) → doing it opens L2');
const st = (type, done, right, text) => ({ q: { type }, done, right, text });
const g1 = ZR.grade([st('mc', 1, 1), st('mc', 1, 1), st('tf', 1, 1), st('mc', 1, 1), st('mc', 1, 0), st('mc', 1, 0), st('open', 1, 0, '我覺得要注意螢幕')]);
ok(!g1.pass && g1.pct === 67, '4/6 = 67% → not done: ' + JSON.stringify(g1));
const g2 = ZR.grade([st('mc', 1, 1), st('mc', 1, 1), st('tf', 1, 1), st('mc', 1, 1), st('mc', 1, 1), st('mc', 1, 0), st('open', 1, 0, '我覺得要注意螢幕')]);
ok(g2.pass && g2.pct === 83 && g2.n === 6 && g2.ok === 5, '5/6 + open written → done');
ok(!ZR.grade([st('mc', 1, 1), st('mc', 1, 1), st('tf', 1, 1), st('mc', 1, 1), st('mc', 1, 1), st('open', 1, 0, '不知道')]).pass, 'open answer shorter than 5 chars → not done');
ok(!ZR.grade([st('mc', 1, 1), st('mc', 1, 1), st('tf', 1, 1), st('mc', 1, 1), st('mc', 0, 0), st('open', 1, 0, '我覺得要注意螢幕')]).pass, 'unanswered question → not done');
const a1 = S.find(a => a.lv === 1), p = ZR.mkP(a1, a1.qs[0]);
ok(ZR.mkId(a1, a1.qs[0]) === 'zh1-01:q1' && p.a === 'zh1-01' && p.q === 'q1' && p.ans === '仁愛國小' && JSON.stringify(p).length < 600, 'mistake entry: id = 篇:題, small p');

console.log(`chinese-reading: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
