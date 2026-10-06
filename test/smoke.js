/* 煙霧測試：node test/smoke.js */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
['words', 'phrases', 'roots', 'grammar', 'patterns'].forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctx, { filename: n + '.js' }));
const W = ctx.window.DATA_WORDS, PH = ctx.window.DATA_PHRASES, R = ctx.window.DATA_ROOTS, G = ctx.window.DATA_GRAMMAR, P = ctx.window.DATA_PATTERNS;
const KE = require(path.join(root, 'engine.js'));
let checks = 0; const ok = (c, m) => { checks++; assert.ok(c, m); };

// ---- 資料格式 ----
ok(W.length >= 200, 'words count ' + W.length);
const seenW = new Set(), seenZh = new Set();
W.forEach(w => {
  ['w', 'ipa', 'pos', 'zh', 'ex', 'exZh', 'src'].forEach(k => ok(typeof w[k] === 'string' && w[k].length, `${w.w}.${k}`));
  ok(/^\/.+\/$/.test(w.ipa), 'ipa ' + w.w);
  ok([1, 2].includes(w.lv), 'lv ' + w.w);
  ok(Array.isArray(w.tags) && w.tags.length && w.tags.every(t => KE.TAGS[t]), 'tags ' + w.w);
  ok(!seenW.has(w.w.toLowerCase()), 'duplicate word ' + w.w); seenW.add(w.w.toLowerCase());
  ok(!seenZh.has(w.zh), 'duplicate zh ' + w.zh); seenZh.add(w.zh);
});
const seenM = new Set();
R.forEach(r => {
  ok(r.p && r.m && ['prefix', 'suffix', 'root'].includes(r.t), 'root ' + r.p);
  ok(!seenM.has(r.m), 'duplicate root meaning ' + r.m); seenM.add(r.m);
  ok(r.words.length >= 2 && r.words.length <= 4, 'root words ' + r.p);
  r.words.forEach(w => ok(w.zh && w.parts.join('') === w.w, 'parts ' + w.w));
});
ok(G.length === 12, 'grammar topics');
G.forEach(g => {
  ok(g.id && g.title && g.rules.length && g.ex.length >= 2, 'grammar ' + g.id);
  ok(g.q.length === 13, 'grammar q count ' + g.id);
  ok(Array.isArray(g.typed) && g.typed.length === 2 && g.typed.every(t => t.zh && t.en), 'grammar typed ' + g.id);
  g.q.forEach(q => {
    ok(q.why, 'why ' + g.id);
    if (q.type === 'fill') { ok(q.s.includes('___'), 'blank ' + q.s); ok(q.opts.length === 4 && new Set(q.opts).size === 4, 'opts ' + q.s); ok(q.opts.includes(q.a), 'answer in opts: ' + q.s); }
    else { ok(q.type === 'fix' && q.wrong && q.right && q.wrong !== q.right, 'fix ' + q.right); }
  });
});
ok(P.length === 48 && P.every(p => p.id && p.pattern && p.zh && p.ex.length === 5 && p.ex.every(e => e.en && e.zh)), 'patterns: 48 with 5 examples each');
ok(new Set(P.map(p => p.id)).size === 48, 'pattern ids unique');
ok(P.filter(p => p.lv === 1).length === 24 && P.filter(p => p.lv === 2).length === 12 && P.filter(p => p.lv === 3).length === 12, 'pattern levels 24/12/12');
['there-is', 'want-to', 'like-ing', 'time-to', 'how-many', 'can-you', 'lets', 'have-to', 'it-is-to', 'what-do', 'i-think', 'dont'].forEach(id => ok(P.find(p => p.id === id && p.lv === 2), 'original pattern kept as 基本: ' + id));
P.forEach(p => { const all = p.ex.concat(p.extra).map(e => e.en); ok(new Set(all).size === all.length, 'no duplicate sentences in ' + p.id); });
P.forEach(p => p.typed.forEach(t => (t.alts || []).forEach(a => ok(a !== t.en && /^[A-Z]/.test(a), 'alt ok ' + a))));
P.forEach(p => ok(p.extra.length === 3 && p.extra.every(e => e.en && e.zh) && p.typed.length === 2 && p.typed.every(t => t.zh && t.en), 'pattern extra/typed ' + p.id));

// ---- 引擎 ----
// ---- 片語資料 ----
const PH_TAGS = ['動詞片語', '介系詞片語', '時間', '地點', '日常用語', '形容詞片語'];
ok(PH.length >= 190 && PH.length <= 210, 'phrases ~200: ' + PH.length);
ok(new Set(PH.map(p => p.id)).size === PH.length, 'phrase ids unique');
ok(new Set(PH.map(p => p.p.toLowerCase())).size === PH.length, 'phrases unique');
ok(new Set(PH.map(p => p.zh)).size === PH.length, 'phrase zh unique (en2zh options never ambiguous)');
PH.forEach(p => {
  ok(p.p && p.zh && p.ex && p.exZh && [1, 2, 3].includes(p.lv) && PH_TAGS.includes(p.tag), 'phrase fields ' + p.id);
  ok(p.ex.toLowerCase().includes((p.form || p.p).toLowerCase()), `example contains phrase/form: ${p.id} → ${p.ex}`);
  if (p.form) ok(p.form !== p.p, 'form differs from base ' + p.id);
});
const E = new KE.Engine({ words: W, phrases: PH, roots: R, grammar: G, patterns: P });
ok(new Set(E.meta.map(m => m.id)).size === E.meta.length, 'unique ids');
const counts = {};
Object.keys(KE.TYPES).forEach(type => {
  const pool = E.list({ types: [type], allowSpeak: true }).length;
  ok(pool > 0, 'pool ' + type);
  const qs = E.buildQuiz({ types: [type], count: 30, allowSpeak: true });
  ok(qs.length === Math.min(30, pool), `build ${type}: ${qs.length}/${pool}`);
  counts[type] = pool;
  qs.forEach(q => {
    ok(q.id && q.module && q.topic && q.type === type && q.prompt && q.answer, 'shape ' + q.id);
    ok(E.get(q.id).id === q.id, 'get ' + q.id);
    if (q.input === 'chips') ok(q.options.slice().sort().join('|') === q.answer.trim().split(/\s+/).sort().join('|'), 'chips ' + q.id);
    else if (q.options) {
      ok(q.options.includes(q.answer), 'answer in options ' + q.id);
      ok(new Set(q.options).size === q.options.length, 'dup options ' + q.id + ' ' + q.options);
      ok(q.options.length >= 2, 'option count ' + q.id);
    }
    ok(E.check(q, q.answer).ok, 'check self ' + q.id);
  });
});
// 判分細節
const sp = E.get('w:apple:spell'); ok(E.check(sp, '  APPLE ').ok && !E.check(sp, 'aple').ok, 'spell case/trim');
const sk = E.list({ types: ['speak'], allowSpeak: true })[0].make();
ok(!E.check(sk, 'hello').ok, 'speak mismatch');
ok(E.list({ types: ['speak'] }).length === 0, 'speak hidden without allowSpeak');
// 錯題混入
const mids = E.list({ modules: ['words'] }).slice(0, 5).map(m => m.id);
const only = E.buildQuiz({ count: 10, mistakeRatio: 1, mistakes: mids });
ok(only.length === 5 && only.every(q => mids.includes(q.id)), 'only mistakes');
const mixed = E.buildQuiz({ modules: ['words'], count: 10, mistakeRatio: 0.3, mistakes: mids });
ok(mixed.length === 10 && mixed.filter(q => mids.includes(q.id)).length >= 3, 'mix 30% (at least 3 mistakes; random fill may add more)');
ok(E.buildQuiz({ modules: ['words'], src: 'textbook-x', count: 10 }).length === 0, 'src filter');

// ---- 學會紀錄 ----
ok(KE.fmtTaipei('2026-10-05T12:31:09Z') === '10/05 20:31' && KE.fmtTaipei('2026-10-05T16:05:00Z', true) === '2026-10-06 00:05:00', 'taipei time');
ok(KE.fmtTaipei('') === '' && KE.fmtTaipei('bad') === '', 'taipei time empty/bad');
const allItems = W.map(KE.wordItemId).concat(PH.map(KE.phraseItemId), R.map(KE.rootItemId), G.map(KE.grammarItemId), P.map(KE.patternItemId));
// 片語：題組 5 題、打字最後；填空題干擾選項不等於答案、空格只有一個；小測驗＝看中文選＋填空＋打字，3/3
PH.forEach(p => {
  const id = KE.phraseItemId(p), ids = E.itemSet(id), t = ids.map(q => E.byId[q].type);
  ok(ids.length === 5 && t.join() === 'listen-choose,zh2en,en2zh,phrase-fill,zh2en-type', 'phrase set ' + p.id);
  for (let k = 0; k < 3; k++) {
    const f = E.get(`ph:${p.id}:fill`);
    ok((f.prompt.match(/___/g) || []).length === 1 && f.options.length === 4 && f.options.includes(f.answer) && new Set(f.options).size === 4 && f.options.filter(o => o === f.answer).length === 1, 'phrase fill options ' + p.id + ' ' + f.options);
  }
  const ty = E.get(`ph:${p.id}:type`);
  ok(E.check(ty, p.p).ok && (!p.form || E.check(ty, p.form).ok) && E.check(ty, p.p.toUpperCase() + '.').ok, 'phrase typed accepts base/form ' + p.id);
  const g = E.gate(id, new Set(ids));
  ok(g && g.need === 3 && g.qs.map(q => q.type).join() === 'zh2en,phrase-fill,zh2en-type', 'phrase mini quiz ' + p.id);
  ok(E.gate(id, new Set()) === null, 'locked phrase cannot open mini quiz ' + p.id);
});
{ // 片語也走同一套同步：作答與學會紀錄合併後，題組解鎖狀態一致
  const SMp = require(path.join(root, 'syncmerge.js')), ids = E.itemSet('phrase:get-up');
  const a = { log: ids.slice(0, 3).map((id, i) => ({ t: 1e12 + i, id, ok: 1, a: 'x' })) }, b = { log: ids.slice(3).map((id, i) => ({ t: 1e12 + 9 + i, id, ok: 1, a: 'y' })), learned: { 'phrase:get-up': { at: '2026-10-06T00:00:00Z', score: '3/3' } } };
  const m = SMp.merge(a, b);
  ok(E.progress('phrase:get-up', SMp.correctIds(m)).complete && m.learned['phrase:get-up'].score === '3/3' && SMp.canon(m) === SMp.canon(SMp.merge(b, a)), 'phrases sync like every other module');
}
ok(E.itemInfo('phrase:get-up').type === '片語' && E.topicLabel('phrases:1|動詞片語') === '必會・動詞片語', 'phrase itemInfo/topicLabel');
ok(E.topics('phrases').every(t => t.group) && E.topics('phrases')[0].group === '必會', 'phrase topics grouped by level');
ok(new Set(allItems).size === allItems.length, 'unique learned item ids');
ok(allItems.every(id => E.itemInfo(id).type), 'itemInfo for every item');
ok(E.itemInfo('word:apple').item === 'apple' && E.itemInfo('word:apple').type === '單字', 'itemInfo word');
ok(E.itemInfo('root:un').type === '字根' && E.itemInfo('grammar:be').type === '文法' && E.itemInfo('pattern:lets').type === '句型', 'itemInfo types');
const L0 = {};
const L1 = KE.setLearned(L0, 'word:apple', '2026-10-05T01:00:00Z');
const L2 = KE.setLearned(L1, 'grammar:be', '2026-10-05T03:00:00Z');
const L3 = KE.setLearned(L2, 'root:un', '2026-10-05T02:00:00Z');
ok(Object.keys(L0).length === 0 && Object.keys(L1).length === 1, 'setLearned does not mutate');
ok(L3['word:apple'].at === '2026-10-05T01:00:00Z', 'setLearned stores at');
ok(E.learnedRows(L3).map(r => r.itemId).join() === 'grammar:be,root:un,word:apple', 'learnedRows newest first');
const L4 = KE.unsetLearned(L3, 'root:un');
ok(!L4['root:un'] && L3['root:un'] && Object.keys(L4).length === 2, 'unsetLearned removes without mutating');
ok(KE.unsetLearned(L4, 'nope') !== L4 && Object.keys(KE.unsetLearned(L4, 'nope')).length === 2, 'unset missing id is harmless');
const L5 = KE.unsetLearned(L3, 'root:un', '2026-10-06T00:00:00Z');
ok(L5['root:un'].removedAt && !L5['root:un'].at && E.learnedRows(L5).length === 2, 'cancel with time leaves tombstone, not counted as learned');
ok(E.learnedRows({ 'word:apple': {} }).length === 0, 'rows skip records without time');

// ---- 每個項目的固定題組 ----
const typesOfIds = ids => ids.map(id => E.byId[id].type);
const unique = a => new Set(a).size === a.length;
W.forEach(w => {
  const ids = E.itemSet(KE.wordItemId(w)), t = typesOfIds(ids);
  ok(ids.length === 5 && unique(ids) && t.join() === 'listen-choose,zh2en,en2zh,spell,zh2en-type', 'word set ' + w.w);
  ok(ids.slice(-2).every(id => E.get(id).answer === w.w && E.get(id).input === 'type'), 'word typed answers ' + w.w);
});
R.forEach(r => {
  const ids = E.itemSet(KE.rootItemId(r)), n = r.words.length, t = typesOfIds(ids);
  ok(ids.length === 1 + 2 * n && unique(ids) && t[0] === 'root-meaning' && t.slice(1, 1 + n).every(x => x === 'root-word') && t.slice(-n).every(x => x === 'root-type'), 'root set ' + r.p);
  ok(ids.slice(-n).map(id => E.get(id).answer).join() === r.words.map(x => x.w).join(), 'root typed answers ' + r.p);
  ids.slice(-n).forEach((id, i) => { const q = E.get(id); ok(q.prompt.includes('___') && q.prompt.includes(r.words[i].zh), 'root-type hint ' + id); });
});
G.forEach(gr => {
  const ids = E.itemSet(KE.grammarItemId(gr)), t = typesOfIds(ids);
  ok(ids.length === 15 && unique(ids) && t.slice(0, 13).every(x => ['grammar-fill', 'grammar-fix'].includes(x)) && t.slice(-2).every(x => x === 'zh2en-type'), 'grammar set ' + gr.id);
  ids.slice(-2).forEach(id => { const q = E.get(id); ok(q.prompt && q.answer && q.input === 'type' && !q.play, 'grammar typed ' + id); });
});
P.forEach(p => {
  const ids = E.itemSet(KE.patternItemId(p)), t = typesOfIds(ids);
  ok(ids.length === 15 && unique(ids) && t.slice(0, 5).every(x => x === 'reorder') && t.slice(5, 10).every(x => x === 'pattern-choose') && t.slice(10, 13).every(x => x === 'reorder') && t.slice(-2).every(x => x === 'zh2en-type'), 'pattern set ' + p.id);
});
ok(allItems.every(id => E.itemSet(id).every(q => E.byId[q] && E.byId[q].type !== 'speak')), 'sets never use speak');
P.forEach(p => E.itemSet(KE.patternItemId(p)).map(id => E.get(id)).filter(q => q.type === 'reorder').forEach(q => ok(q.options.slice().sort().join('|') === q.answer.split(/\s+/).sort().join('|') && E.check(q, q.answer).ok, 'chips rebuild ' + q.id)));
ok(E.itemSet('word:nope').length === 0 && !E.progress('word:nope', new Set()).complete, 'unknown item');
// 解鎖：9/10 鎖住、全部答對過才解鎖；先錯後對算數；從作答紀錄追溯
const gset = E.itemSet('grammar:be');
const C14 = new Set(gset.slice(0, 14)); ok(E.progress('grammar:be', C14).done === 14 && !E.progress('grammar:be', C14).complete, 'grammar 14/15 locked');
ok(E.progress('grammar:be', new Set(gset)).complete, 'grammar 15/15 unlocked');
const wset = E.itemSet('word:apple'), now = Date.now();
const log1 = wset.map((id, i) => ({ t: now + i, id, ok: i === 4 ? 0 : 1 }));
ok(E.progress('word:apple', KE.correctIds(log1)).done === 4 && !E.progress('word:apple', KE.correctIds(log1)).complete, 'word 4/5 locked');
const log2 = log1.concat([{ t: now + 9, id: wset[4], ok: 1 }]);
ok(E.progress('word:apple', KE.correctIds(log2)).complete, 'wrong-then-right counts');
ok(E.progress('word:apple', KE.correctIds([{ id: wset[0], ok: 0 }])).done === 0, 'wrong only does not count');
const oldPractice = E.buildQuiz({ modules: ['patterns'], topics: ['patterns:lets'], count: 50 }).map((q, i) => ({ t: i, id: q.id, ok: 1 }));
ok(E.progress('pattern:lets', KE.correctIds(oldPractice)).done === E.itemSet('pattern:lets').filter(id => oldPractice.some(l => l.id === id)).length, 'retroactive: earlier practice answers count');
// 打字題排序：練一組時打字題排最後；答錯重排不會插到打字題後面
const drill = E.drill('grammar:be', new Set());
ok(drill.length === 15 && drill.slice(-2).every(q => q.type === 'zh2en-type') && drill.slice(0, 13).every(q => !KE.isTyped(q)), 'drill: typed last (grammar)');
const wd = E.drill('word:apple', new Set()); ok(wd.slice(-2).every(KE.isTyped) && wd.slice(0, 3).every(q => !KE.isTyped(q)), 'drill: typed last (word)');
const rq = KE.requeue(drill, 0, drill[0]);
ok(rq.length === 16 && rq.slice(-2).every(q => q.type === 'zh2en-type') && rq[13].id === drill[0].id, 'requeue non-typed before typed');
const rq2 = KE.requeue(rq, 14, rq[14]); ok(rq2[rq2.length - 1].id === rq[14].id, 'requeue typed at end');
// 打字判分
const tg = (a, alts, s) => KE.typeGrade(a, alts, s).ok;
ok(tg('I am a student.', [], 'i am a student') && tg('I am a student.', [], '  I  AM a student!  ') && !tg('I am a student.', [], 'I am student'), 'type grader: case/space/punct');
ok(tg('I am a student.', ["I'm a student."], 'I’m a student') && tg("Let's go!", [], 'Let’s go') && !tg("Let's go!", [], 'Lets go'), 'type grader: alts/curly apostrophe');
ok(!tg('Hello.', [], '') && KE.typeGrade('I am a student.', [], 'I is a student').diffAt === 1 && KE.typeGrade('I am a student.', [], 'I am a').diffAt === 3, 'type grader: empty/diff word');
// ---- 「學會了」小測驗（981d094 的門檻與題型，題組完成後才開得了）----
const typesOf = g => g.qs.map(q => q.type).sort().join(',');
const fullSet = id => new Set(E.itemSet(id));
W.forEach(w => { const g = E.gate(KE.wordItemId(w), fullSet(KE.wordItemId(w))); ok(g && g.total === 3 && g.need === 3 && typesOf(g) === 'listen-choose,spell,zh2en', 'gate word ' + w.w); });
R.forEach(r => {
  const g = E.gate(KE.rootItemId(r), fullSet(KE.rootItemId(r)));
  ok(g && g.total === 3 && g.need === 3 && typesOf(g) === 'root-meaning,root-word,root-word', 'gate root ' + r.p);
  const wids = g.qs.filter(q => q.type === 'root-word').map(q => q.id);
  ok(new Set(wids).size === 2 && wids.every(id => r.words.some(x => id === `r:${KE.slug(x.w)}:word`)), 'gate root words belong to ' + r.p);
});
G.forEach(gr => { const g = E.gate(KE.grammarItemId(gr), fullSet(KE.grammarItemId(gr))); ok(g && g.total === 5 && g.need === 4 && new Set(g.ids).size === 5 && g.qs.every(q => ['grammar-fill', 'grammar-fix'].includes(q.type) && q.topic === gr.id), 'gate grammar ' + gr.id); });
P.forEach(p => { const g = E.gate(KE.patternItemId(p), fullSet(KE.patternItemId(p))); ok(g && g.total === 3 && g.need === 3 && new Set(g.ids).size === 3 && typesOf(g) === 'pattern-choose,reorder,reorder' && g.qs.every(q => q.topic === p.id), 'gate pattern ' + p.id); });
ok(allItems.every(id => E.gate(id, fullSet(id)).qs.every(q => q.type !== 'speak')), 'gate never uses speak');
ok(E.gate('word:nope') === null, 'gate unknown item');
// 鎖住的項目（題組沒全部答對過）開不了小測驗
ok(E.gate('word:apple', new Set()) === null && E.gate('grammar:be', new Set(gset.slice(0, 14))) === null, 'locked item cannot open gate');
ok(E.gate('grammar:be', new Set(gset)) !== null, 'complete item opens gate');
const gw = E.gate('word:apple', fullSet('word:apple')), gg = E.gate('grammar:be', fullSet('grammar:be'));
ok(!KE.gatePassed(gw, 2) && KE.gatePassed(gw, 3), 'gate 2/3 fail, 3/3 pass');
ok(KE.gatePassed(gg, 4) && KE.gatePassed(gg, 5) && !KE.gatePassed(gg, 3), 'gate 4/5 pass, 5/5 pass, 3/5 fail');
ok(!KE.gatePassed(null, 3), 'gatePassed null');
// 小測驗答錯不會讓題組重新上鎖（進度只增不減）
const logG = E.itemSet('word:apple').map(id => ({ id, ok: 1 })).concat([{ id: 'w:apple:listen', ok: 0 }]);
ok(E.progress('word:apple', KE.correctIds(logG)).complete, 'wrong gate answer does not re-lock');
// ---- 裝置同步：合併規則（syncmerge.js）----
const SM = require(path.join(root, 'syncmerge.js'));
const T0 = Date.parse('2026-10-06T00:00:00Z');
const ent = (i, id, ok, a) => ({ t: T0 + i * 1000, id, m: 'words', k: 'words:food', y: 'zh2en', ok, a: a || '' });
const devA = { log: [ent(1, 'w:apple:zh2en', 1, 'apple'), ent(2, 'w:cat:spell', 0, 'cta'), ent(3, 'w:cat:spell', 1, 'cat')],
  learned: { 'word:apple': { at: '2026-10-06T01:00:00Z', score: '3/3' }, 'word:dog': { at: '2026-10-06T01:00:00Z', score: '3/3' } },
  mistakes: { 'w:cat:spell': { c: 1, w: 1, t: T0, u: T0 + 3000 } } };
const devB = { log: [ent(1, 'w:apple:zh2en', 1, 'apple'), ent(5, 'g:be:0', 1, 'am')],
  learned: { 'word:dog': { removedAt: '2026-10-06T02:00:00Z' }, 'grammar:be': { at: '2026-10-06T03:00:00Z', score: '4/5' } },
  mistakes: { 'w:cat:spell': { d: 1, w: 1, t: T0, u: T0 + 9000 }, 'g:be:3': { c: 0, w: 2, t: T0, u: T0 + 1 } } };
const AB = SM.merge(devA, devB), BA = SM.merge(devB, devA);
ok(SM.canon(AB) === SM.canon(BA), 'merge is commutative');
ok(SM.canon(SM.merge(devA, AB)) === SM.canon(AB) && SM.canon(SM.merge(AB, AB)) === SM.canon(AB) && SM.canon(SM.merge(AB, devB)) === SM.canon(AB), 'merge is idempotent');
ok(AB.log.length === 4, 'log union by id (shared entry not duplicated): ' + AB.log.length);
ok(SM.rid(ent(1, 'w:apple:zh2en', 1, 'apple')) === SM.rid({ t: T0 + 1000, id: 'w:apple:zh2en', a: 'apple' }) && /^r[0-9a-z]+$/.test(AB.log[0].r), 'backfilled id is deterministic');
ok(SM.rid(ent(1, 'w:apple:zh2en', 1, 'apple')) !== SM.rid(ent(1, 'w:apple:zh2en', 1, 'aple')), 'different answer → different id');
ok(!AB.learned['word:dog'].at && AB.learned['word:dog'].removedAt, 'cancel tombstone propagates');
ok(SM.merge(AB, devA).learned['word:dog'].removedAt, 'tombstone is not resurrected by the old device');
const relearn = SM.merge(AB, { learned: { 'word:dog': { at: '2026-10-06T05:00:00Z', score: '3/3' } } });
ok(relearn.learned['word:dog'].at, 'learning again after cancel wins (newer event)');
ok(AB.learned['grammar:be'].score === '4/5' && AB.learned['word:apple'].at, 'learned union');
ok(AB.mistakes['w:cat:spell'].d === 1 && AB.mistakes['g:be:3'].w === 2, 'mistakes newest updatedAt wins (graduation tombstone)');
ok(SM.merge({ mistakes: { x: { c: 0, w: 1, u: 10 } } }, { mistakes: { x: { c: 2, w: 1, u: 5 } } }).mistakes.x.u === 10, 'mistakes newest wins');
const engineAB = new Set(SM.correctIds(AB));
ok(['w:apple:zh2en', 'w:cat:spell', 'g:be:0'].every(id => engineAB.has(id)), 'merged correct set (drives set unlock)');
ok(SM.normCode(' abcd efgh ') === 'ABCD-EFGH' && SM.normCode('ABCD-EFG0') === null && SM.normCode('ABCDEFG') === null, 'sync code normalize/validate');
// 壓縮：變小、解鎖狀態（答對過）不變、再合併仍冪等
const big = { log: [] };
for (let i = 0; i < 9000; i++) big.log.push({ t: T0 + i, id: E.meta[i % 600].id, m: 'x', k: 'words:food', y: 'zh2en', ok: i % 3 ? 1 : 0, a: 'answer-' + (i % 50) });
const before = SM.correctIds(big), small = SM.compact(big, 120 * 1024);
ok(SM.bytes(small) <= 120 * 1024 && small.cut > 0 && Object.keys(small.agg).length > 0, 'compaction shrinks the doc: ' + SM.bytes(small));
const after = SM.correctIds(small);
ok(before.size === after.size && [...before].every(id => after.has(id)), 'compaction preserves "answered correctly at least once"');
ok(SM.canon(SM.merge(small, big)) === SM.canon(SM.merge(small, small)), 'merge after compaction is idempotent (old entries fold into agg)');
ok(E.progress('word:apple', SM.correctIds(SM.merge({ log: E.itemSet('word:apple').map((id, i) => ({ t: T0 + i, id, ok: 1 })) }, {}))).complete, 'unlock state derived from merged log');
const LS1 = KE.setLearned({}, 'word:apple', '2026-10-05T01:00:00Z', '3/3');
ok(LS1['word:apple'].score === '3/3' && E.learnedRows(LS1)[0].score === '3/3', 'learned score stored');
ok(E.learnedRows({ 'word:cat': { at: '2026-10-05T01:00:00Z' } })[0].score === '—', 'old entry score shows —');

// ---- 語速 ----
ok(KE.clampRate(0.7) === 0.7 && KE.clampRate('1') === 1 && KE.clampRate(0.84) === 0.8, 'rate keep/round');
ok(KE.clampRate(0.1) === 0.5 && KE.clampRate(2) === 1.3 && KE.clampRate(undefined) === 1 && KE.clampRate('x') === 1, 'rate clamp/default');
ok(!/name="rate"|'0\.7', '🐢 慢慢唸'/.test(fs.readFileSync(path.join(root, 'app.js'), 'utf8')), 'old 0.7/1.0 radios removed');

// ---- 多科目：math/balance.html 是天平的正本；科目列只在網站版 ----
const balancePath = path.join(root, 'math', 'balance.html');
ok(fs.existsSync(balancePath) && fs.statSync(balancePath).size > 0, 'math/balance.html exists and is non-empty');
const bal = fs.readFileSync(balancePath, 'utf8');
ok(/<title>[^<]*天平解方程式<\/title>/.test(bal), 'balance.html is the 天平 page');
ok(!fs.existsSync(path.join(root, 'sync_math.py')) && !fs.existsSync(path.join(root, 'build_single.py')), 'sync_math.py / build_single.py removed');
ok(bal.includes("url:'https://yoda-wcyc.github.io/kids-english/#s/math'"), 'balance share url -> kids-english #s/math');
ok(fs.readFileSync(path.join(root, 'app.js'), 'utf8').includes("url: 'https://yoda-wcyc.github.io/kids-english/'"), 'english share url -> kids-english root');
['app.js', 'subjects.js', 'math/balance.html', 'README.md'].forEach(f => ok(!fs.readFileSync(path.join(root, f), 'utf8').includes('github.io/game'), f + ' has no game-repo link'));
ok(!/['"]ke_/.test(bal), 'balance.html does not use ke_* storage keys');
const idx = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
ok(/<title>小朋友學習站<\/title>/.test(idx), 'site title');
ok(idx.indexOf('subjects.js') < idx.indexOf('app.js'), 'subjects.js loads before app.js');
ok(idx.indexOf('syncmerge.js') < idx.indexOf('sync.js') && idx.indexOf('sync.js') < idx.indexOf('app.js'), 'syncmerge.js → sync.js → app.js (sync card renders on first paint)');
const sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
['國語', '數學', '社會', '自然', '英文', "n: 'AI'", '遊戲', '#s/', 'math/balance.html', '準備中，敬請期待', '← 回'].forEach(t => ok(sj.includes(t), 'subjects.js has ' + t));
ok((sj.match(/\{ k: '[a-z]+', n: /g) || []).length === 7, '7 subject tabs');

// ---- AI 與 遊戲（Scratch 塔防）：檔案存在、非空；活動卡片的 src 都找得到 ----
const nonEmpty = rel => { const p = path.join(root, rel); return fs.existsSync(p) && fs.statSync(p).size > 0; };
['ai/hallucinate.html', 'ai/ask-well.html', 'ai/secrets.html', 'game/scratch-td/web/index.html', 'game/scratch-td/web/start.sb3']
  .concat([1, 2, 3, 4, 5, 6, 7].flatMap(i => [`game/scratch-td/web/lesson${i}.html`, `game/scratch-td/web/lesson${i}-done.sb3`]))
  .forEach(rel => ok(nonEmpty(rel), rel + ' exists and is non-empty'));
const srcs = [...sj.matchAll(/src: '([^']+)'/g)].map(m => m[1]);
ok(srcs.length === 5, 'activity cards: ' + srcs.length);
srcs.forEach(s => ok(nonEmpty(s), 'activity src exists: ' + s));
// 講義互連與下載鈕：連到的檔案都在 web/，不再指向退場的 kids-ai
const WEB = 'https://yoda-wcyc.github.io/kids-english/game/scratch-td/web/';
fs.readdirSync(path.join(root, 'game/scratch-td/web')).filter(f => f.endsWith('.html')).forEach(f => {
  const h = fs.readFileSync(path.join(root, 'game/scratch-td/web', f), 'utf8');
  ok(!h.includes('kids-ai') && !h.includes('小朋友學 AI'), f + ' has no kids-ai link/brand');
  [...h.matchAll(/href="([^"#]+)(#[^"]*)?"/g)].map(m => m[1]).filter(u => !/^https:\/\/cdn\./.test(u)).forEach(u => {
    const local = u.startsWith(WEB) ? u.slice(WEB.length) : u;
    ok(!/^https?:/.test(local) && nonEmpty('game/scratch-td/web/' + local), `${f} link ok: ${u}`);
  });
});
['ai/hallucinate.html', 'ai/ask-well.html', 'ai/secrets.html'].forEach(f => ok(!fs.readFileSync(path.join(root, f), 'utf8').includes('kids-ai'), f + ' has no kids-ai link'));

// ---- 已取消的功能不可殘留（手寫、上傳）----
['engine.js', 'app.js', 'README.md'].forEach(f => {
  const s = fs.readFileSync(path.join(root, f), 'utf8');
  ['inputtools', 'handwrit', '上傳網址', 'Code.gs', 'ke_upload'].forEach(bad => ok(!s.includes(bad), `${f} still contains ${bad}`));
});
ok(!fs.existsSync(path.join(root, 'gas')), 'gas folder removed');

console.log(`OK  ${checks} checks | words ${W.length} (lv1 ${W.filter(w => w.lv === 1).length}, lv2 ${W.filter(w => w.lv === 2).length}) | phrases ${PH.length} (${[1, 2, 3].map(l => PH.filter(p => p.lv === l).length).join('/')}) | roots ${R.length} | grammar ${G.length} (${G.reduce((s, g) => s + g.q.length, 0)} q) | patterns ${P.length} | questions ${E.meta.length}`);
console.log('pool per type:', JSON.stringify(counts));
