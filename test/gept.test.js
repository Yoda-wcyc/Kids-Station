// test/gept.test.js — 全民英檢準備區（gept/）：規則單元測試＋全部題目過檢查工具＋錯題庫／同步大小＋頁面接線。node test/gept.test.js
'use strict';
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..'), G = path.join(root, 'gept');
const C = require(path.join(G, 'gept-core.js')), CK = require(path.join(G, 'tools', 'check.js')), V = CK.V;
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('✗ ' + m); } };

// ---- 規格常數（對 SPEC.md）----
const n = (lv, ps) => ps.reduce((a, p) => a + C.PARTS[lv][p].n, 0);
ok(n('e', ['L1', 'L2', 'L3', 'L4']) === 30 && n('e', ['R1', 'R2', 'R3']) === 30 && C.PARTS.e.L1.o === 3 && C.PARTS.e.R1.o === 4 && C.MOCK.e.R[0].min === 35, 'e: listening 30 (3 options), reading 30, 35 min');
ok(n('i', ['L1', 'L2', 'L3', 'L4']) === 35 && n('i', ['R1', 'R2', 'R3']) === 35 && C.PARTS.i.L1.o === 4 && C.MOCK.i.R[0].min === 45, 'i: listening 35, reading 35, 45 min');
ok(n('a', ['L1', 'L2', 'L3']) === 40 && n('a', ['R1', 'R2']) === 40 && C.MOCK.a.R.map(r => r.min).join() === '20,50', 'a: listening 40, reading 40 (20 + 50 min)');
ok(n('u', ['L1', 'L2', 'L3']) === 40 && n('u', ['R1', 'R2', 'R3']) === 40 && C.PARTS.u.L1.o === 4 && C.MOCK.u.R[0].min === 50 && C.MOCK.u.lmin === 35 && C.PARTS.u.L2.kind === 'grp' && C.PARTS.u.S1.n === 8 && C.PARTS.u.S1.play === 1 && C.PARTS.u.S3.prep === 90 && C.PARTS.u.S3.sec === 90, 'u: listening 40 (問答 10＋對話 15＋談話 15), reading 40, 50 min; speaking 8 questions played once, 申述 90 s + 90 s');
ok(C.passLR('u', 78, 82) && !C.passLR('u', 94, 70) && C.writeScore('u', 4.5, 4) === 84 && C.speakScore('u', 4) === 80, 'u: pass 160 & 72; writing / speaking formulas same as the official 中高級 examples');
ok(C.PARTS.e.S1.play === 2 && C.PARTS.e.S3.sec === 15 && C.PARTS.i.S2.play === 2 && C.PARTS.e.L1.play === 1 && C.PARTS.i.L4.play === 1, 'playback counts: listening once, speaking prompts twice');
// 計分（官方說明頁的例子）
ok(C.passLR('e', 78, 82) && !C.passLR('e', 94, 70) && C.passLR('i', 78, 82) && C.passLR('a', 72, 78) && !C.passLR('a', 90, 63), 'pass rules: e/i 160 & 72, a 150 & 64 (official examples)');
ok(C.scale(30, 30) === 120 && C.scale(0, 30) === 0 && C.scale(20, 30) === 80, 'scale: correct / total × 120');
ok(C.writeScore('e', 26, 4) === 83 && C.writeScore('i', 4.5, 4) === 84 && C.speakScore('e', 4, 3) === 70 && C.speakScore('i', 4) === 80, 'writing / speaking formulas match the official examples');
// ---- 詞表與變化形 ----
const lex = { e: C.lexOf('e', V), i: C.lexOf('i', V), a: C.lexOf('a', V) };
const inL = (w, lv) => C.tokens(w).every(t => C.stems(t.k, lv).some(s => lex[lv][s]));
ok(Object.keys(lex.e).length > 1900 && Object.keys(lex.i).length > Object.keys(lex.e).length && Object.keys(lex.a).length > Object.keys(lex.i).length, 'lexicons grow e < i < a');
ok(['went', 'children', 'stopped', 'running', 'bigger', 'happier', 'carries', 'knives', "didn't", "I'm", "Tom's", 'better', 'babysitter', 'slowly', 'cannot', 'fourth', 'oh'].every(w => inL(w, 'e') || /^[A-Z]/.test(w)), 'e: irregular / regular forms, contractions, -ly, cannot, ordinals pass');
ok(!inL('grandparents', 'e') && !inL('announcement', 'e') && inL('community', 'a') && !inL('community', 'i'), 'e blocks off-list words; i (B1) blocks community, a (B2) allows it');
ok(['hometown', 'photographer', 'online', 'prefer', 'tour'].every(w => inL(w, 'e')) && !inL('passport', 'e') && !inL('election', 'e') && V.eextra.length <= 150, 'e: 初級補充字 (e-extra) allowed; passport (LTTC 中級), election not');
lex.u = C.lexOf('u', V);
const c1only = V.c1.map(w => String(w).toLowerCase()).filter(w => /^[a-z]+$/.test(w) && !inL(w, 'u') && inL(w, 'a'));
ok(Object.keys(lex.u).length > Object.keys(lex.i).length && Object.keys(lex.u).length < Object.keys(lex.a).length && inL('community', 'u') && c1only.length > 500, 'u lexicon = i + CEFR-J B2 (community ok), no Octanove C1 (' + c1only.length + ' C1-only words blocked, e.g. ' + c1only[0] + ')');
ok(!C.IRR.data && inL('data', 'a') && C.stems('data', 'a').indexOf('datum') < 0, 'data is a normal word (CEFR-J B2), not the plural of datum');
const sq = (ans, v) => C.gradeQ({ q: { ans } }, v);
ok(sq(['2/3', 'two thirds'], 'Two-Thirds') && sq(['2/3'], '2 / 3') && sq(['the hospital'], 'Hospital.') && sq(['hospital'], 'a hospital') && !sq(['hospital'], 'school'), 'short answers: case, punctuation, hyphen, leading article ignored');
ok(C.tokens('at 7:30 a.m. in the 1990s, NT$500, Room B').map(t => t.k).join(' ') === 'at am in the nt room', 'tokens skip numbers, decades, single letters');
// ---- 檢查工具會擋的錯 ----
const base = { id: 'e-L2-99', items: Array.from({ length: 10 }, (_, i) => ({ id: 'e-L2-99-' + String(i + 1).padStart(2, '0'), spk: 'F', say: 'Where is your bag?', opts: ['It is here.', 'Yes, I am.', 'At six.'], a: i % 3 })) };
ok(!C.validateSet(base, V).errors.length, 'a valid e-L2 set passes');
const bad = (f, re, m) => { const s = JSON.parse(JSON.stringify(base)); f(s); const e = C.validateSet(s, V).errors.join('\n'); ok(re.test(e), m + ' → ' + (e.split('\n')[0] || 'no error')); };
bad(s => { s.items[0].opts.push('No.'); }, /剛好 3 個/, 'wrong option count blocked');
bad(s => { s.items.forEach(x => { x.a = 0; }); }, /太集中|連續 4 題/, 'answer concentration blocked');
bad(s => { s.items[1].say = 'Where is your grandparents?'; }, /表外字「grandparents」/, 'off-list word blocked');
bad(s => { s.items[2].id = 'e-L2-99-07'; }, /id 要是 e-L2-99-03/, 'id order blocked');
bad(s => { s.items.pop(); }, /要 10 題/, 'item count blocked');
bad(s => { s.extra = ['grandparents']; }, /初級不可以用 extra/, 'extra not allowed at elementary');
bad(s => { s.items[3].say = 'I think that my best friend and I will go to the big park near the school after class today.'; }, /太長/, 'sentence length limit');
// 中高級對話題組（grp）
const o4 = ['It was delayed by an hour.', 'She will call the client.', 'They need a bigger room.', 'He forgot the report.'];
const grpSet = () => { let k = 0; const s = { id: 'u-L2-99', items: [2, 2, 2, 2, 2, 2, 1, 1, 1].map((nq, gi) => ({ id: 'u-L2-99-g' + (gi + 1), lines: [['F', 'Did the supplier confirm the delivery date for the new printers?'], ['M', 'Not yet. I will check with them again this afternoon.']], qs: Array.from({ length: nq }, () => ({ id: 'u-L2-99-' + String(++k).padStart(2, '0'), q: 'What will the man do this afternoon?', opts: o4, a: k % 4 })) })) }; return s; };
ok(!C.validateSet(grpSet(), V).errors.length && C.questions(grpSet()).length === 15 && C.questions(grpSet())[0].group.id === 'u-L2-99-g1', 'a valid u-L2 set (9 dialogues, 15 questions) passes; questions belong to their dialogue group');
const gbad = (f, re, m) => { const s = grpSet(); f(s); const e = C.validateSet(s, V).errors.join('\n'); ok(re.test(e), m + ' → ' + (e.split('\n')[0] || 'no error')); };
gbad(s => { s.items[0].lines.forEach(l => { l[0] = 'F'; }); }, /男女對話/, 'u-L2: a dialogue must have a man and a woman');
gbad(s => { s.items[0].qs.push(Object.assign({}, s.items[0].qs[0], { id: 'x' })); }, /1～2 題/, 'u-L2: 1–2 questions per dialogue');
gbad(s => { s.items[1].id = 'u-L2-99-g9'; }, /題組 id 要是 u-L2-99-g2/, 'u-L2: group id = <set>-g<n>');
gbad(s => { s.items[2].lines[0][1] = 'The committee reached an unprecedented consensus.'; }, /表外字/, 'u: C1 / off-list words blocked');
// 撞題偵測
const mk = (id, s) => { const items = [{ id: id + '-01', s, opts: ['a', 'b', 'c', 'd'], a: 0 }]; return /-M-/.test(id) ? { id, parts: { R1: { items: items.map(x => Object.assign({}, x, { id: id + '-R1-01' })) } } } : { id, items }; };
ok(CK.dups([mk('e-R1-98', 'You look ___. Did you sleep well last night?'), mk('e-M-98', 'You look ___. Did you sleep well last night?')]).length === 1, 'dups: same sentence across practice / mock flagged');
ok(CK.dups([mk('e-R1-98', 'My little sister is afraid of big dogs at the park.'), mk('e-R1-97', 'We went to the zoo and saw a baby elephant.')]).length === 0 && CK.dups([mk('e-R1-98', 'Ben is ___ because his dog is sick today.'), mk('i-R1-98', 'Ben is ___ because his dog is sick today.')]).length === 0, 'dups: different sentences / different levels not flagged');
ok(CK.dups([mk('i-R1-98', 'Ben is ___ because his dog is sick today.'), mk('u-R1-98', 'Ben is ___ because his dog is sick today.')]).length === 1, 'dups: 中高級 (u) is also compared with the other levels');
// ---- 全部題目 ----
const r = CK.run([]);
ok(!r.errors.length, 'gept/tools/check.js: every set passes (' + r.sets.length + ' sets)\n  ' + r.errors.slice(0, 8).join('\n  '));
const have = {}; r.sets.forEach(s => { const m = C.ID_RE.exec(s.id); have[m[1] + m[2]] = 1; });
['e', 'i', 'u', 'a'].forEach(lv => { Object.keys(C.PARTS[lv]).concat(['M']).forEach(p => ok(have[lv + p], `sample set exists: ${lv}-${p}`)); });
// ---- 錯題庫＋同步大小 ----
const KMc = require(path.join(root, 'kids-mistakes.js'))._core, SM = require(path.join(root, 'syncmerge.js'));
ok(KMc.SUBJ.includes('gept') && /MK_SUBJ = \[[^\]]*'gept'/.test(read('syncmerge.js')) && KMc.MAX_GEPT === 100 && !KMc.SPACED.includes('gept'), 'gept is a mistakes subject (kids-mistakes + syncmerge), 3-in-a-row, max 100 live');
const allQ = r.sets.flatMap(s => C.questions(s)).filter(C.auto), q0 = allQ[0], b = {};
ok(KMc.mark(b, q0.id, false, C.mkP(q0), 1000) === 'added' && ['counted', 'counted', 'graduated'].every((x, i) => KMc.mark(b, q0.id, true, C.mkP(q0), 2000 + i) === x) && b[q0.id].d === 1, 'gept mistakes: wrong → added; 3 right → graduated (tombstone)');
ok(allQ.every(Q => { const p = C.mkP(Q); return /^[eiua]$/.test(p.u) && C.PARTS[p.u][p.pt] && p.s.length <= 60 && C.setIdOf(Q.id) && JSON.stringify(p).length < 200; }), 'every question has a small p {u, pt, s ≤ 60} and a set id in its id');
// 最壞情況：100 題未畢業（最長 id、最長短句）＋ 300 墓碑 ≤ MAX_BYTES/4（同步上限不放寬）
const longId = 'a-M-99-L3-99', bk = {};
for (let i = 0; i < 100; i++) bk[longId.slice(0, -2) + String(i).padStart(2, '0') + 'x'.repeat(0)] = { c: 2, w: 99, t: 1.8e12, u: 1.8e12, p: { u: 'a', pt: 'L3', s: '中'.repeat(59) + '…' } };
for (let i = 0; i < 300; i++) bk['i-R3-' + String(i).padStart(3, '0') + '-15'] = { d: 1, w: 99, t: 1.8e12, u: 1.8e12 };
const gb = SM.bytes(SM.normMk({ gept: bk }));
ok(Object.keys(SM.normMk({ gept: bk }).gept).length === 400 && gb <= SM.MAX_BYTES / 4, 'mk.gept worst case (100 live + 300 tombstones) ' + gb + ' B ≤ MAX_BYTES/4 = ' + SM.MAX_BYTES / 4);
const capB = {}; for (let i = 0; i < 101; i++) KMc.mark(capB, 'e-L2-01-' + i, false, { u: 'e', pt: 'L2', s: 'x' }, 1000 + i);
KMc.cap(capB, '', KMc.MAX_GEPT, 5000);
ok(KMc.liveList(capB).length === 100 && capB['e-L2-01-0'].d === 1, 'cap: the 101st mistake pushes out the oldest (tombstone)');
// ---- 頁面接線 ----
const gj = read('gept/gept.js');
ok(gj.includes("KidsCoins.answer(!!ok, 'english')") && gj.includes("KidsDaily.rec('english', !!ok, null, prev)") && gj.includes("KidsMistakes.record('gept', Q.id, !!ok, G.mkP(Q))") && gj.includes("KidsDaily.rec('english', null, null, prev)"), 'gept.js records coins (english), daily (english total only), mistakes; open tasks count as null');
const gjc = gj.replace(/\/\*[\s\S]*?\*\//g, '');
ok((gjc.match(/practice_round/g) || []).length === 1 && gjc.includes("item: 'english:gept'") && (gjc.match(/coinRound\(/g) || []).length === 3 && !/KidsDaily\.rec\('english', [^)]*, '/.test(gj), 'practice_round only english:gept (one set / one mock); no sentence/phrase sub-goal kind');
ok(/MODES = \[[^\]]*'gept'/.test(read('kids-coins.js')), 'kids-coins MODES allows english:gept');
['index', 'practice', 'mock', 'task', 'words'].forEach(p => {
  const h = read('gept/' + p + '.html'), at = s => h.search(new RegExp(s.replace(/[.]/g, '\\.') + '(\\?v=[0-9a-f]+)?"'));
  ok(at('../nocopy.js') > 0 && at('../nocopy.js') < h.indexOf('</head>') && (p === 'words' || at('../kids-mistakes.js') > 0) && at('gept-core.js') < at('gept.js') && (p === 'words' ? at('vocab/cefrj.js') < at('gept.js') && at('vocab/e-extra.js') > 0 : at('data/catalog.js') < at('gept.js')) && at('../syncmerge.js') < at('../kids-daily.js') && at('../sync.js') > 0, p + '.html loads nocopy (head), mistakes, core → catalog → page, syncmerge → daily, sync');
});
ok(/id="tile-gept" href="gept\/index\.html"/.test(read('app.js')) && read('app.js').includes('pWords(sub2)'), 'English page has the 全民英檢 tile; #learn/words/<src> opens a source');
ok(['gept/SPEC.md', 'gept/CONTRACT.md'].every(f => fs.existsSync(path.join(root, f))) && /未確認/.test(read('gept/SPEC.md')) && /https:\/\/www\.gept\.org\.tw/.test(read('gept/SPEC.md')), 'SPEC.md (with sources and 未確認 items) and CONTRACT.md exist');
ok(!fs.readdirSync(path.join(G, 'vocab')).some(f => /lttc|gept_/i.test(f)), 'no LTTC word list in gept/vocab (local only)');

console.log(`gept: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
