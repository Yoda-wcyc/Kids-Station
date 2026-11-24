// test/english-reading.test.js — 英文閱讀測驗：檢查工具、判分、出題順序、紀錄、錯題入庫（純函式，不開瀏覽器）。用法：node test/english-reading.test.js
'use strict';
const path = require('path'), fs = require('fs');
const root = path.resolve(__dirname, '..');
const ER = require(path.join(root, 'english-reading', 'reading-core.js'));
const CK = require(path.join(root, 'english-reading', 'check.js'));
const MKc = require(path.join(root, 'kids-mistakes.js'))._core;
const SM = require(path.join(root, 'syncmerge.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('✗ ' + m); } };
const clone = x => JSON.parse(JSON.stringify(x));

// 1. 檢查工具：樣本 10 篇全過；每一級篇數
const r = CK.run([]);
ok(r.errors.length === 0, 'check.js: samples pass (' + r.errors.join(' / ') + ')');
const S0 = CK.loadFile(path.join(root, 'english-reading', 'data', 's0.js'));
ok(S0.length === 10 && [1, 2, 3].map(lv => S0.filter(a => a.lv === lv).length).join() === '4,3,3', 'samples: 易 4、中 3、難 3');
// 檔案 UTF-8 無 BOM
fs.readdirSync(path.join(root, 'english-reading')).concat(fs.readdirSync(path.join(root, 'english-reading', 'data')).map(f => 'data/' + f)).filter(f => /\.(js|html|css|md)$/.test(f)).forEach(f => ok(fs.readFileSync(path.join(root, 'english-reading', f))[0] !== 0xef, 'no BOM: ' + f));

// 2. 檢查工具會擋：每一種錯都要抓得到
const base = S0.find(a => a.id === 'e001');
const bad = (label, mut, want, own) => { const a = clone(base); mut(a); const e = CK.checkArt(a, own || 's0').E.join(' | '); ok(want.test(e), 'check catches ' + label + ' → ' + (e || '（沒抓到）')); };
bad('word count', a => { a.body = [['Ben is in the classroom.']]; a.qs.forEach(q => { q.ev = ['Ben is in the classroom.']; }); }, /字數/);
bad('off-list word', a => { a.body[0][0] = 'Ben is in the laboratory.'; }, /字表外/);
bad('> 3 off-list words', a => { a.gloss = { laboratory: '實驗室', microscope: '顯微鏡', scientist: '科學家', telescope: '望遠鏡' }; a.body[0] = ['Ben sees a laboratory, a microscope, a scientist, and a telescope.']; }, /最多 3 個/);
bad('answer index', a => { a.qs[0].a = 4; }, /正解/);
bad('duplicate options', a => { a.qs[0].opts[1] = a.qs[0].opts[0]; }, /選項不能重複/);
bad('three options', a => { a.qs[0].opts.pop(); }, /4 個選項/);
bad('missing why', a => { delete a.qs[1].why; }, /why/);
bad('english why', a => { a.qs[1].why = 'It is the eraser.'; }, /why/);
bad('evidence not found', a => { a.qs[0].ev = ['The eraser is in his bag.']; }, /ev/);
bad('ref without quoted pronoun', a => { a.qs[1].q = 'What is not there?'; }, /指代題/);
bad('too many of one kind', a => { a.qs.forEach(q => { q.k = 'detail'; }); }, /同一種題型/);
bad('no detail question', a => { a.qs[0].k = 'main'; }, /細節題/);
bad('long sentence', a => { a.body[0][0] = 'Ben is in the big and clean classroom with his good friends today.'; }, /句子太長/);
bad('two sentences in one string', a => { a.body[0][0] = 'Ben is in the classroom. He is happy.'; }, /只能放一句/);
bad('id out of author range', a => { a.id = 'e030'; }, /篇號/, 'a1');
bad('topic of another author', a => { a.id = 'e005'; a.topic = 'animal'; }, /不是作者 1 ?的主題/, 'a1');
ok(CK.similar([base, Object.assign(clone(base), { id: 'e005', title: 'Another Title' })]).some(x => /撞文/.test(x)), 'check catches copied article');
ok(CK.similar([base, Object.assign(clone(base), { id: 'e005' })]).some(x => /標題一樣/.test(x)), 'check catches same title');
ok(CK.mixErr('x', Array.from({ length: 12 }, () => Object.assign(clone(base), { qs: base.qs.map(q => Object.assign({}, q, { k: 'detail' })) }))).some(x => /題型配比/.test(x)), 'check catches kind mix');
// 難的字表到 A2 為止：B1 的字算表外
ok(Object.keys(CK.vocabOf(Object.assign(clone(S0.find(a => a.id === 'h001')), { gloss: {} }), 'They did an experiment.').unglossed).includes('experiment'), 'level 難 lexicon stops at A2 (experiment is off-list)');
ok(!Object.keys(CK.vocabOf(Object.assign(clone(S0.find(a => a.id === 'h001')), { gloss: {} }), 'They visited the museum yesterday.').unglossed).some(w => /museum|visit|yesterday/.test(w)), 'level 難 accepts 國中 2000 words (museum, visited)');

// 3. 判分
const it = (...xs) => xs.map(x => ({ done: true, right: !!x }));
ok(ER.grade(it(1, 1, 0)).pass && ER.grade(it(1, 1, 0)).pct === 67, 'grade: 2/3 pass');
ok(!ER.grade(it(1, 0, 0)).pass, 'grade: 1/3 fail');
ok(ER.grade(it(1, 1, 1, 0)).pass && !ER.grade(it(1, 1, 0, 0)).pass, 'grade: 4 題要對 3 題');
ok(!ER.grade([{ done: true, right: true }, { done: false, right: false }, { done: true, right: true }]).pass, 'grade: 沒答完不算');

// 4. 出題順序：易 → 中 → 難，同級照字數；完成才往下；沒過關不往下；全部完成＝null
const O = ER.order(S0);
ok(O.map(a => a.lv).join('') === '1111222333', 'order: 易 → 中 → 難');
ok(O.every((a, i) => !i || a.lv !== O[i - 1].lv || ER.wordCount(a) >= ER.wordCount(O[i - 1])), 'order: same level by word count');
let st = {}; const t0 = Date.UTC(2026, 10, 24, 2);   // 台北 11/24 上午 10 點
ok(ER.next(S0, st).id === O[0].id, 'next: first article');
let f = ER.finish(st, O[0], ER.grade(it(1, 0, 0)), t0); st = f.st;
ok(!f.pass && !f.fresh && ER.next(S0, st).id === O[0].id, 'next: failed round does not advance');
f = ER.finish(st, O[0], ER.grade(it(1, 1, 0)), t0 + 1000); st = f.st;
ok(f.pass && f.fresh && ER.next(S0, st).id === O[1].id && ER.todayCount(st, t0) === 1, 'next: pass advances, counts as today\'s fresh article');
f = ER.finish(st, O[0], ER.grade(it(1, 1, 1)), t0 + 2000); st = f.st;
ok(f.pass && !f.fresh && ER.todayCount(st, t0) === 1, 'norepeat: an article already passed is not counted again');
ok(ER.locked(st, O[0].id) && ER.canOpen(S0, st, O[0].id) === 'locked', 'lock: passed twice → locked');
ok(ER.canOpen(S0, st, O[1].id) === 'ok' && ER.canOpen(S0, st, O[5].id) === 'ahead', 'canOpen: next ok, later ones ahead');
ok(ER.todayCount(st, t0 + 864e5) === 0, 'todayCount: next day 0 (Taipei day)');
let all = {}; O.forEach((a, i) => { all = ER.finish(all, a, ER.grade(it(1, 1, 1, 1)), t0 + i).st; });
ok(ER.next(S0, all) === null && ER.doneCount(all, S0) === 10, 'next: all done → null');
ok(st.a[O[0].id].t === 3 && st.a[O[0].id].n === 2 && st.a[O[0].id].best === 100, 'finish: tries / passes / best');
// 4b. 跨裝置進度 p（照順序完成到第幾篇）：本機多 → p 跟上；別台的 p 多 → 補前 p 篇（完成 1 次、done＝1 不算今天）；本機 n、鎖不動
ok(ER.upTo(S0, {}) === 0 && ER.upTo(S0, st) === 1 && ER.upTo(S0, all) === 10, 'upTo: in-order prefix');
ok(ER.syncIn(S0, {}) === null && ER.syncIn(S0, { a: {}, ok: {}, p: 0 }) === null, 'syncIn: nothing to do → null');
const up1 = ER.syncIn(S0, st); ok(up1 && up1.p === 1 && ER.syncIn(S0, up1) === null && ER.finish(up1, O[1], ER.grade(it(1, 1, 1)), t0).st.p === 1, 'syncIn: local progress pushes p up; finish keeps p');
const far = ER.syncIn(S0, { a: { [O[0].id]: { t: 2, n: 2, done: t0 } }, ok: { x: 1 }, p: 3 });
ok(far && far.p === 3 && ER.next(S0, far).id === O[3].id && far.a[O[0].id].n === 2 && far.a[O[1].id].n === 1 && far.a[O[2].id].done === 1 && ER.todayCount(far, t0) === 1 && far.ok.x === 1 && !ER.locked(far, O[1].id), 'syncIn: remote p=3 fills first 3 (n≥1, not today, local lock kept)');
ok(ER.next(S0, ER.syncIn(S0, { p: 999 })) === null && ER.syncIn(S0, { p: 'x' }) === null && ER.syncIn(S0, { p: -3 }) === null, 'syncIn: p is clamped / junk ignored');

// 5. 每題答對次數（學過 2 次不算）
const s2 = {}; ok(ER.bumpOk(s2, 'e001:q1', true) === 0 && ER.bumpOk(s2, 'e001:q1', false) === 1 && ER.bumpOk(s2, 'e001:q1', true) === 1 && ER.bumpOk(s2, 'e001:q1', true) === 2 && s2.ok['e001:q1'] === 2, 'bumpOk: prev counts, caps at 2');

// 6. 錯題入庫：放 'gept' 那一本、u＝'r'；英檢頁 list('gept', e) 看不到；連對 3 次畢業；同步 normMk 留得住
const a1 = S0[0], q1 = a1.qs[0], id = ER.mkId(a1, q1);
ok(id === 'er:' + a1.id + ':q1' && ER.parseMk(id).a === a1.id && ER.parseMk(id).q === 'q1', 'mkId / parseMk');
ok(MKc.SUBJ.indexOf(ER.MK_SUBJ) >= 0, 'mistakes subject exists in kids-mistakes.js');
const book = {}; let now = t0;
ok(MKc.mark(book, id, false, ER.mkP(a1, q1), now) === 'added', 'mistake: wrong → added');
ok(MKc.liveList(book, 'r').length === 1 && MKc.liveList(book, 'e').length === 0, 'mistake: shows under u=r only (not in GEPT levels)');
ok(JSON.stringify(ER.mkP(a1, q1)).length <= 80, 'mistake p is small (' + JSON.stringify(ER.mkP(a1, q1)).length + ' chars)');
ok(MKc.mark(book, id, true, null, ++now) === 'counted' && MKc.mark(book, id, true, null, ++now) === 'counted' && MKc.mark(book, id, true, null, ++now) === 'graduated' && book[id].d === 1, 'mistake: 3 correct in a row → graduated (tombstone)');
const synced = SM.normMk({ gept: { [id]: { c: 0, w: 1, t: now, u: now, p: ER.mkP(a1, q1) } } });
ok(synced.gept && synced.gept[id] && synced.gept[id].p.u === 'r', 'sync: reading mistakes survive normMk (already in sync scope, no new field)');
// 為什麼不用 kids_done：同步只認得列好的區段，新區段會被丟掉（整合人要先改 syncmerge.js 才能用）
ok(!SM.normDone({ er: { e001: t0 } }).er, 'sync: kids_done.er would be dropped by normDone (so progress stays in kids_en_reading)');
// 跨裝置進度 p：pg v 群組 R 一格（合併取大），約 5 B；本機 a、ok 不上傳；回寫只補 p（本機大的不動）
const pgA = SM.pgFromLocal({ er: { p: 7, a: { e001: { n: 2, done: t0 } }, ok: { 'e001:q1': 2 } } }), pgB = SM.pgFromLocal({ er: { p: 12 } });
ok(pgA.v === 'R=08' && JSON.stringify(pgA).length <= 20 && !/e001/.test(JSON.stringify(pgA)), 'pg: only p goes up (R=08), ' + JSON.stringify(pgA).length + ' chars');
const pgM = SM.mergePg(pgA, pgB); ok(SM.pgApply(pgM, { er: { p: 3, a: { x: 1 } } }).er.p === 12 && SM.pgApply(pgM, { er: { p: 20 } }).er === undefined && SM.pgApply(SM.mergePg(pgA, {}), {}).er.p === 7, 'pg: merge keeps the larger p; apply only raises p');
ok(SM.normPg({ v: 'R=5l,Zz=00' }).v.indexOf('R=5l') === 0 && JSON.stringify(SM.pgApply({ v: 'R=5l' }, { er: 'junk' })) === '{"er":{"p":200}}', 'pg: R survives normPg (old devices keep it via generic v), junk local is replaced safely');
// 每日清單接點：dd 代碼只要是一個小寫字母就收（整合人在 kids-daily.js FIN 加 er 就好），dd 有上限 DD_MAX → 最壞情況不變
const dd = SM.ddAdd({}, 'dTEST', t0, 'b', true);
ok((SM.ddSum(dd)[SM.ddDay(t0)] || {}).b[0] === 1, 'dd accepts a new one-letter code (b) without changing syncmerge.js');

// 7. 接線：頁面載入順序、入口卡片
const html = fs.readFileSync(path.join(root, 'english-reading', 'index.html'), 'utf8');
const pos = s => html.indexOf(s);
ok(pos('nocopy.js') > 0 && pos('nocopy.js') < pos('</head>'), 'page: nocopy.js in <head>');
ok(pos('syncmerge.js') > 0 && pos('kids-daily.js') > pos('syncmerge.js') && pos('reading.js"') > pos('data/a5.js') && pos('data/s0.js') > pos('reading-core.js'), 'page: script order');
['s0', 'a1', 'a2', 'a3', 'a4', 'a5'].forEach(k => ok(html.includes('data/' + k + '.js'), 'page loads data/' + k + '.js'));
const js = fs.readFileSync(path.join(root, 'english-reading', 'reading.js'), 'utf8');
ok(js.includes("KidsCoins.answer(!!ok, 'english')") && js.includes("KidsDaily.rec('english', !!ok, null, prev)") && js.includes("KidsDaily.finish('er', fresh)") && js.includes('KidsMistakes.record(ER.MK_SUBJ'), 'page: coins / daily / mistakes hooks');
ok(/id: 'reading', title: '英文閱讀測驗'[^\n]*href: 'english-reading\/index.html'/.test(fs.readFileSync(path.join(root, 'subjects.js'), 'utf8')), 'subjects.js: english harbour card');
ok(fs.readFileSync(path.join(root, 'app.js'), 'utf8').includes('id="tile-reading" href="english-reading/index.html"'), 'app.js: #en tile');

console.log(`english-reading: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
