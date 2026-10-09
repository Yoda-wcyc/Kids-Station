/* 煙霧測試：node test/smoke.js */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
['words', 'words-2', 'words-3', 'words-4', 'phrases', 'roots', 'grammar', 'patterns'].forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctx, { filename: n + '.js' }));
const W = ctx.window.DATA_WORDS, PH = ctx.window.DATA_PHRASES, R = ctx.window.DATA_ROOTS, G = ctx.window.DATA_GRAMMAR, P = ctx.window.DATA_PATTERNS;
const KE = require(path.join(root, 'engine.js'));
let checks = 0; const ok = (c, m) => { checks++; assert.ok(c, m); };

// ---- 資料格式 ----
ok(W.length >= 1200 && W.length <= 1230, 'words ≈ 1200: ' + W.length);
const seenW = new Set();
W.forEach(w => {
  ['w', 'ipa', 'pos', 'zh', 'ex', 'exZh', 'src'].forEach(k => ok(typeof w[k] === 'string' && w[k].length, `${w.w}.${k}`));
  ok(/^\/.+\/$/.test(w.ipa), 'ipa ' + w.w);
  ok([1, 2, 3].includes(w.lv), 'lv ' + w.w);
  ok(KE.POS[w.pos], 'pos ' + w.w + ' ' + w.pos);
  ok(['moe1200', 'extra'].includes(w.src), 'src ' + w.w + ' ' + w.src);
  ok(Array.isArray(w.tags) && w.tags.length && w.tags.every(t => KE.TAGS[t]), 'tags ' + w.w);
  ok(w.ex.toLowerCase().includes((w.form || w.w).toLowerCase()), `example contains word/form: ${w.w} → ${w.ex}`);
  const key = KE.wordKey(w); ok(!seenW.has(key), 'duplicate word key ' + key); seenW.add(key);
});
ok(W.filter(w => w.src === 'extra').map(w => w.w).sort().join() === 'dumpling,giraffe,kangaroo,panda', 'only 4 words outside the official 1200 list (marked extra)');
const lvCount = [1, 2, 3].map(l => W.filter(w => w.lv === l).length);
ok(lvCount.every(n => n >= 350 && n <= 450), 'levels ≈ 400 each: ' + lvCount);
['cat', 'apple', 'happy', 'Monday', 'noodles'].forEach(w => ok(W.find(x => x.w === w && x.src === 'moe1200'), 'original word kept: ' + w));
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
const tBuild0 = process.hrtime.bigint();
const E = new KE.Engine({ words: W, phrases: PH, roots: R, grammar: G, patterns: P });
const tBuild1 = process.hrtime.bigint();
const allQs = E.meta.map(m => m.make()); // 整個例題庫每一題都產生一次（含干擾選項）
const tBuild2 = process.hrtime.bigint();
const msEngine = Number(tBuild1 - tBuild0) / 1e6, msBank = Number(tBuild2 - tBuild1) / 1e6;
ok(msEngine < 1000 && msBank < 15000, `bank build time engine ${msEngine.toFixed(0)} ms, all questions ${msBank.toFixed(0)} ms`);
// 單字選擇題：選項不重複、看中文選英文的干擾字中文意思不能一樣
allQs.filter(q => q.module === 'words' && q.options).forEach(q => {
  ok(new Set(q.options).size === q.options.length && q.options.includes(q.answer), 'word options ' + q.id);
  if (q.type === 'zh2en') { const zhOf = new Map(W.map(w => [w.w, w.zh])); ok(q.options.filter(o => o !== q.answer).every(o => zhOf.get(o) !== q.prompt), 'zh2en distractor has same zh: ' + q.id); }
});
ok(new Set(E.meta.map(m => m.id)).size === E.meta.length, 'unique ids');
const counts = {};
Object.keys(KE.TYPES).forEach(type => {
  // withSetOnly：只在題組出的題型（填空拼字、文法打字版）一般練習不出，這裡要一起檢查
  const pool = E.list({ types: [type], allowSpeak: true, withSetOnly: true }).length;
  ok(pool > 0, 'pool ' + type);
  const qs = E.buildQuiz({ types: [type], count: 30, allowSpeak: true, withSetOnly: true });
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
// 🎤 說說看：單字題＝任一 alternative 等於目標或含有目標（獨立的字）；片語／句子＝整句一樣（忽略大小寫、標點）
const swd = E.get('w:apple:speak'), sph = E.get('ph:get-up:speak'), sst = E.list({ modules: ['patterns'], types: ['speak'], allowSpeak: true })[0].make();
ok(swd && swd.input === 'mic' && swd.speakMode === 'word' && sph.speakMode === 'sentence' && sst.speakMode === 'sentence', 'speak questions for words/phrases/patterns');
ok(E.check(swd, ['Apple.']).ok && E.check(swd, ['and', 'an apple please']).ok && E.check(swd, ['pineapple', 'apples', 'Apple']).at === 2, 'speak word: equal / contains as a word / any alternative');
ok(!E.check(swd, ['pineapple', 'apples', 'happy all']).ok && E.check(swd, ['pineapple']).heard === 'pineapple', 'speak word: not part of another word; heard = first alternative');
ok(E.check(sst, [sst.answer.toUpperCase().replace(/[.!?]$/, '') + '!']).ok && !E.check(sst, ['Well ' + sst.answer]).ok && !E.check(sst, [sst.answer.split(' ').slice(0, -1).join(' ')]).ok, 'speak sentence: whole sentence only, case/punct ignored');
ok(KE.speakNorm("I'm  2 cats, OK?") === 'im two cats ok' && KE.speakNorm('Let’s go!') === KE.speakNorm("let's go"), 'speak normalize: apostrophes, digits → words');
ok(E.check(sph, ['Get up']).ok && !E.check(sph, ['get']).ok && !E.check(swd, []).ok && !E.check(swd, ['']).ok, 'speak phrase / empty');
ok(E.list({ types: ['speak'], allowSpeak: true }).filter(m => m.module === 'words').length === W.length && E.list({ types: ['speak'], allowSpeak: true }).filter(m => m.module === 'phrases').length === PH.length, 'every word and phrase has a speak question');
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
// 單字題組（2026-10-09 起）：選、選、填空拼字（約 1/3）、填空拼字（約 1/2）、看中文打字；只有 1 個字母的字（a、I）沒有填空 → 3 題
W.forEach(w => {
  const ids = E.itemSet(KE.wordItemId(w)), t = typesOfIds(ids), one = w.w.replace(/[^A-Za-z]/g, '').length < 2;
  ok(unique(ids) && t.join() === (one ? 'listen-choose,zh2en,zh2en-type' : 'listen-choose,zh2en,word-gap,word-gap,zh2en-type'), 'word set ' + w.w + ' ' + t);
  ok(E.get(ids[ids.length - 1]).answer === w.w && E.get(ids[ids.length - 1]).input === 'type', 'word typed answer ' + w.w);
  ok(ids.filter(id => /:gap[12]$/.test(id)).every(id => { const q = E.get(id); return q.input === 'gap' && q.answer === w.w && q.play && E.check(q, w.w).ok && E.check(q, w.w.toUpperCase()).ok; }), 'word gap self-check ' + w.w);
});
ok(W.filter(w => w.w.replace(/[^A-Za-z]/g, '').length < 2).map(w => w.w).sort().join() === 'I,a', 'only a / I have no gap questions');
ok(E.list({ types: ['word-gap', 'grammar-fill-type', 'grammar-fix-type'] }).length === 0 && E.list({ modules: ['patterns'] }).every(m => !/:x\d+:type$/.test(m.id)), 'set-only questions stay out of normal practice / bank');
ok(E.buildQuiz({ modules: ['words'], count: 30 }).every(q => ['listen-choose', 'zh2en', 'en2zh', 'spell', 'zh2en-type'].includes(q.type)), 'normal word rounds keep old types');
// ---- 填空拼字：決定性、邊界、判分 ----
const G1 = KE.wordGaps('apple'), G1b = KE.wordGaps('apple');
ok(JSON.stringify(G1) === JSON.stringify(G1b) && JSON.stringify(E.get('w:apple:gap1').gaps) === JSON.stringify(G1.g1), 'gaps deterministic (seeded by the word)');
ok(G1.g1.length === 2 && G1.g2.length === 3 && !G1.g1.includes(0) && G1.g1.join() !== G1.g2.join(), 'apple: 1/3 → 2, 1/2 → 3, first letter kept: ' + JSON.stringify(G1));
const gapsOk = w => {
  const g = KE.wordGaps(w), L = w.split('').map((c, i) => (/[A-Za-z]/.test(c) ? i : -1)).filter(i => i >= 0), n = L.length;
  if (n < 2) return g === null;
  const inL = a => a.every(p => L.includes(p)), k1 = n <= 3 ? 1 : Math.max(1, Math.round(n / 3)), k2 = n === 2 ? 1 : n <= 3 ? 2 : Math.max(2, Math.round(n / 2));
  return inL(g.g1) && inL(g.g2) && !g.g1.includes(L[0]) && g.g1.length === k1 && g.g2.length === Math.min(k2, n - 1) && g.g2.length < n && g.g1.join() !== g.g2.join() && new Set(g.g1).size === g.g1.length && new Set(g.g2).size === g.g2.length;
};
ok(W.every(w => gapsOk(w.w)), 'gap rules hold for every word: ' + W.filter(w => !gapsOk(w.w)).map(w => w.w).join());
ok(JSON.stringify(KE.wordGaps('go')) === '{"g1":[1],"g2":[0]}' && KE.wordGaps('cat').g1.length === 1 && KE.wordGaps('cat').g2.join() === '1,2' && KE.wordGaps('a') === null, '2–3 letter edges');
const lg = KE.wordGaps('senior high school'); ok(lg.g1.length === 5 && lg.g2.length === 8 && ![6, 11].some(p => lg.g1.includes(p) || lg.g2.includes(p)), 'long phrase: spaces never hidden');
const qg = E.get('w:apple:gap1'), fill = (q, f) => q.answer.split('').map((c, i) => (q.gaps.includes(i) ? f(c, i) : c)).join('');
ok(E.check(qg, fill(qg, c => c.toUpperCase())).ok && !E.check(qg, fill(qg, (c, i) => (i === qg.gaps[0] ? 'z' : c))).ok && !E.check(qg, fill(qg, () => '_')).ok && !E.check(qg, 'appl').ok, 'gap grade: case-insensitive, every box must be right');
ok(E.check(qg, qg.gaps.map(p => qg.answer[p])).ok && E.check(qg, fill(qg, (c, i) => (i === qg.gaps[0] ? 'z' : c))).wrong.join() === '0', 'gap grade: array input / wrong boxes');
R.forEach(r => {
  const ids = E.itemSet(KE.rootItemId(r)), n = r.words.length, t = typesOfIds(ids);
  ok(ids.length === 1 + 2 * n && unique(ids) && t[0] === 'root-meaning' && t.slice(1, 1 + n).every(x => x === 'root-word') && t.slice(-n).every(x => x === 'root-type'), 'root set ' + r.p);
  ok(ids.slice(-n).map(id => E.get(id).answer).join() === r.words.map(x => x.w).join(), 'root typed answers ' + r.p);
  ids.slice(-n).forEach((id, i) => { const q = E.get(id); ok(q.prompt.includes('___') && q.prompt.includes(r.words[i].zh), 'root-type hint ' + id); });
});
// 文法／句型題組（2026-10-09 起）：10 題非打字＋5 題打字，打字題排最後（E.sets＝基本組成；練習這組再從裡面換 2 題成口說）
G.forEach(gr => {
  const ids = E.sets[KE.grammarItemId(gr)], t = typesOfIds(ids);
  ok(ids.length === 15 && unique(ids) && t.slice(0, 10).every(x => ['grammar-fill', 'grammar-fix'].includes(x)) && t.slice(-5).every(x => ['zh2en-type', 'grammar-fill-type', 'grammar-fix-type'].includes(x)), 'grammar set ' + gr.id + ' ' + t);
  ok(t.slice(-5).filter(x => x === 'zh2en-type').length === Math.min(5, gr.typed.length) && t.filter(x => x === 'grammar-fill-type').length === Math.min(5 - gr.typed.length, gr.q.filter(q => q.type === 'fill').length), 'grammar typed mix: existing typed first, then fill→type ' + gr.id);
  ids.slice(-5).forEach(id => { const q = E.get(id); ok(q.prompt && q.answer && q.input === 'type' && !q.play && KE.isTyped(q), 'grammar typed ' + id); });
  // 舊題號不改意思：選擇題仍是 g:<id>:<i>，打字版另起 :type；換成打字的那幾題，選擇版仍在題庫、只是不在題組
  ids.slice(0, 10).forEach(id => ok(/^g:[^:]+:\d+$/.test(id), 'grammar choice id kept ' + id));
  ids.filter(id => /:type$/.test(id)).forEach(id => { const base = id.replace(/:type$/, ''); ok(E.byId[base] && !ids.includes(base) && E.get(id).answer === (gr.q[+base.split(':')[2]].a || gr.q[+base.split(':')[2]].right), 'grammar fill→type answer ' + id); });
});
P.forEach(p => {
  const ids = E.sets[KE.patternItemId(p)], t = typesOfIds(ids);
  ok(ids.length === 15 && unique(ids) && t.slice(0, 5).every(x => x === 'reorder') && t.slice(5, 10).every(x => x === 'pattern-choose') && t.slice(-5).every(x => x === 'zh2en-type'), 'pattern set ' + p.id + ' ' + t);
  ok(ids.slice(-5).map(id => E.get(id).answer).join('|') === p.typed.map(x => x.en).concat(p.extra.map(x => x.en)).slice(0, 5).join('|'), 'pattern typed = typed then extra ' + p.id);
});
// 不足 15 題的項目：照 2:1、打字題排最後
ok(KE.composeSet(['a', 'b', 'c', 'd'], ['x', 'y']).join() === 'a,b,c,d,x,y' && KE.composeSet('abcdefghijkl'.split(''), ['x']).join('') === 'abcdefghijklx', 'composeSet short');
ok(KE.composeSet('abcdefghijkl'.split(''), ['x', 'y', 'z', 'u', 'v', 'w']).join('') === 'abcdefghijxyzuv', 'composeSet 10+5');
ok(KE.composeSet(['a', 'b', 'c', 'd', 'e', 'f'], ['x', 'y', 'z']).join() === 'a,b,c,d,e,f,x,y,z', 'composeSet keeps typed last');
ok(allItems.every(id => E.itemSet(id).every(q => E.byId[q] && E.byId[q].type !== 'speak')), 'unlock sets have no speak when speak is off (device has no speech recognition)');
// ---- 🎤 練習這組一律有口說題（2026-10-09 起不看家長同意、不看裝置支援）；解鎖只在裝置支援時算口說 ----
ok(allItems.filter(id => !/^root:/.test(id)).every(id => E.drill(id, new Set()).some(q => q.type === 'speak')) && allItems.filter(id => /^root:/.test(id)).every(id => E.drill(id, new Set()).every(q => q.type !== 'speak')), 'drill always has speak (speak off too); roots never');
ok(allItems.every(id => E.drillIds(id).join() === E.drillIds(id, { speak: true }).join() && E.itemSet(id).join() === E.drillIds(id).filter(q => E.byId[q].type !== 'speak').join() && E.itemSet(id, { speak: true }).join() === E.drillIds(id).join()), 'unlock set = drill set (speak on) / drill set minus speak (speak off)');
const wOff = E.drill('word:apple', new Set()).map(q => q.type).join(); ok(wOff === 'listen-choose,zh2en,speak,word-gap,word-gap,zh2en-type', 'word drill speak off: 6 with speak 3rd ' + wOff);
const wOk5 = new Set(E.drillIds('word:apple').filter(q => !/:speak$/.test(q))); ok(E.progress('word:apple', wOk5).complete && E.drill('word:apple', wOk5).map(q => q.id).join() === 'w:apple:speak' && !E.progress('word:apple', wOk5, { speak: true }).complete, 'speak off: other 5 right → unlocked; drill still offers speak');
const wv1 = { waive: new Set(['w:apple:speak']) }; ok(E.drill('word:apple', new Set(), wv1).length === 5 && E.progress('word:apple', wOk5, Object.assign({ speak: true }, wv1)).complete, 'waived speak: not re-offered this round, not counted');
const gOff = E.drill('grammar:be', new Set()).map(q => q.type); ok(gOff.length === 15 && gOff.slice(0, 10).filter(x => x === 'speak').length === 2 && E.itemSet('grammar:be').length === 13, 'grammar drill speak off: 15 with 2 speak; unlock 13');
const SON = { speak: true }, tOf = (id, o) => E.itemSet(id, o).map(q => E.byId[q].type);
W.forEach(w => { const one = w.w.replace(/[^A-Za-z]/g, '').length < 2, id = KE.wordItemId(w);
  ok(tOf(id, SON).join() === (one ? 'listen-choose,zh2en,speak,zh2en-type' : 'listen-choose,zh2en,speak,word-gap,word-gap,zh2en-type'), 'word speak set ' + w.w);
  ok(E.drill(id, new Set(), SON).map(q => q.type).join() === tOf(id, SON).join(), 'word speak drill fixed order ' + w.w); });
PH.forEach(p => { const id = KE.phraseItemId(p);
  ok(tOf(id, SON).join() === 'listen-choose,zh2en,en2zh,phrase-fill,speak,zh2en-type', 'phrase speak set ' + p.id);
  const d = E.drill(id, new Set(), SON).map(q => q.type); ok(d[4] === 'speak' && d[5] === 'zh2en-type', 'phrase drill: speak last of non-typed ' + p.id); });
G.forEach(gr => { const id = KE.grammarItemId(gr), s = E.itemSet(id, SON), t = tOf(id, SON);
  ok(s.length === 15 && t.slice(0, 10).filter(x => x === 'speak').length === 2 && t.slice(0, 10).every(x => !KE.TYPED_TYPES.includes(x)) && t.slice(-5).join() === tOf(id).slice(-5).join(), 'grammar speak set 10(+2 speak)+5 ' + gr.id);
  s.filter(q => E.byId[q].type === 'speak').forEach(q => { const k = +q.split(':')[2], gq = gr.q[k], sen = gq.type === 'fill' ? KE.fillBlank(gq.s, gq.a) : gq.right, x = E.get(q);
    ok(x.prompt === sen && !x.prompt.includes('___') && x.input === 'mic' && x.play && E.check(x, [sen.toLowerCase().replace(/[.!?,]/g, '')]).ok && !E.check(x, ['well ' + sen]).ok, 'grammar speak says the full correct sentence ' + q); });
  const d = E.drill(id, new Set(), SON).map(q => q.type); ok(d.slice(8, 10).join() === 'speak,speak' && d.slice(10).every(x => KE.TYPED_TYPES.includes(x)), 'grammar drill: speak after choices, typed last ' + gr.id); });
P.forEach(p => { const id = KE.patternItemId(p), s = E.itemSet(id, SON), t = tOf(id, SON), sp2 = s.filter(q => E.byId[q].type === 'speak');
  ok(s.length === 15 && sp2.length === 2 && new Set(sp2.map(q => E.get(q).answer)).size === 2 && t.slice(0, 10).every(x => !KE.TYPED_TYPES.includes(x)) && t.slice(-5).every(x => x === 'zh2en-type'), 'pattern speak set (2 different sentences) ' + p.id); });
R.forEach(r => ok(E.itemSet(KE.rootItemId(r), SON).join() === E.itemSet(KE.rootItemId(r)).join(), 'roots unchanged with speak ' + r.p));
// 解鎖：口說沒開 → 不算口說題；開了 → 口說要答對過；舊進度（沒口說時全對）只差口說題；裝置問題先跳過（waive）→ 這次不算
const baseAll = new Set(E.itemSet('word:apple'));
ok(E.progress('word:apple', baseAll).complete && !E.progress('word:apple', baseAll, SON).complete && E.progress('word:apple', baseAll, SON).missing.join() === 'w:apple:speak', 'unlock: speak required only when on');
ok(E.progress('word:apple', baseAll, { speak: true, waive: new Set(['w:apple:speak']) }).complete && E.gate('word:apple', baseAll, { speak: true, waive: new Set(['w:apple:speak']) }), 'unlock: waived speak (device trouble) not counted this time');
const gAll = new Set(E.itemSet('grammar:be')); ok(E.progress('grammar:be', gAll, SON).missing.every(q => /:speak$/.test(q)) && E.progress('grammar:be', gAll, SON).missing.length === 2, 'unlock: grammar old progress → only the 2 speak missing');
E.speakOn = true; ok(E.itemSet('word:apple').length === 6 && E.gate('word:apple', baseAll) === null, 'speakOn default applies to itemSet / gate'); E.speakOn = false;
ok(E.itemSet('word:apple').length === 5 && E.gate('word:apple', baseAll) !== null, 'speakOn off again');
ok(E.list({ modules: ['grammar'], types: ['speak'], allowSpeak: true }).every(m => /:ex\d+:speak$/.test(m.id)), 'grammar set-only speak stays out of normal practice');
ok(KE.typedRank({ type: 'reorder' }) === 0 && KE.typedRank({ type: 'speak' }) === 1 && KE.typedRank({ type: 'word-gap' }) === 2 && KE.typedRank({ type: 'zh2en-type' }) === 3, 'rank: choice < speak < gap < typing');
P.forEach(p => E.itemSet(KE.patternItemId(p)).map(id => E.get(id)).filter(q => q.type === 'reorder').forEach(q => ok(q.options.slice().sort().join('|') === q.answer.split(/\s+/).sort().join('|') && E.check(q, q.answer).ok, 'chips rebuild ' + q.id)));
ok(E.itemSet('word:nope').length === 0 && !E.progress('word:nope', new Set()).complete, 'unknown item');
// 解鎖：9/10 鎖住、全部答對過才解鎖；先錯後對算數；從作答紀錄追溯
const gset = E.itemSet('grammar:be', SON);
const C14 = new Set(gset.slice(0, 14)); ok(E.progress('grammar:be', C14, SON).done === 14 && !E.progress('grammar:be', C14, SON).complete, 'grammar 14/15 locked');
ok(E.progress('grammar:be', new Set(gset), SON).complete, 'grammar 15/15 unlocked');
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
ok(drill.length === 15 && drill.slice(-5).every(KE.isTyped) && drill.slice(0, 10).every(q => !KE.isTyped(q)), 'drill: 10 non-typed then 5 typed (grammar)');
const pdr = E.drill('pattern:lets', new Set()); ok(pdr.length === 15 && pdr.slice(-5).every(q => q.type === 'zh2en-type') && pdr.slice(0, 10).every(q => !KE.isTyped(q)), 'drill: 10 non-typed then 5 typed (pattern)');
ok(E.drill('word:apple', new Set()).map(q => q.id.split(':')[2]).join() === 'listen,zh2en,speak,gap1,gap2,type', 'drill: word set in fixed order (word, with speak)');
const WV = { waive: new Set(['w:apple:speak']) }; // 以下重排測試用不含口說的 5 題
const wd = E.drill('word:apple', new Set(), WV); ok(wd.map(q => q.type).join() === 'listen-choose,zh2en,word-gap,word-gap,zh2en-type' && wd.map(q => q.id.split(':')[2]).join() === 'listen,zh2en,gap1,gap2,type', 'drill: word set in fixed order (speak waived)');
ok(E.drill('word:apple', new Set(['w:apple:zh2en'])).map(q => q.id.split(':')[2]).join() === 'listen,speak,gap1,gap2,type', 'drill: word fixed order keeps order when some answered');
// 答錯重排：選擇題插在填空拼字前、填空拼字插在完整打字前、打字放最後
const wq = KE.requeue(wd, 0, wd[0]); ok(wq.map(q => q.id.split(':')[2]).join() === 'listen,zh2en,listen,gap1,gap2,type', 'word requeue choice before gaps');
const wg = KE.requeue(wd, 2, wd[2]); ok(wg.map(q => q.id.split(':')[2]).join() === 'listen,zh2en,gap1,gap2,gap1,type', 'word requeue gap before final typing');
const wt = KE.requeue(wd, 4, wd[4]); ok(wt.map(q => q.id.split(':')[2]).join() === 'listen,zh2en,gap1,gap2,type,type', 'word requeue typing at end');
// 舊進度：以前的 5 題（listen、zh2en、en2zh、spell、type）→ 新組合裡仍算 3 題；學會標記不受影響
const oldW = new Set(['listen', 'zh2en', 'en2zh', 'spell', 'type'].map(s => 'w:apple:' + s));
ok(E.progress('word:apple', oldW).done === 3 && E.progress('word:apple', oldW).missing.join() === 'w:apple:gap1,w:apple:gap2', 'old word progress kept 3/5, gaps to redo');
const rq = KE.requeue(drill, 0, drill[0]);
ok(rq.length === 16 && rq.slice(-5).every(KE.isTyped) && rq[drill.findIndex(q => KE.typedRank(q) > 0)].id === drill[0].id, 'requeue choice before speak/typed');
// 舊進度：以前答對過的 15 題（13 題選擇＋2 題中翻英打字）換新題組後，仍算的有 12 題（不歸零）；換進來的 3 題打字題要再答對
const oldGrammar = new Set(gr0Old('be'));
function gr0Old(id) { const g = G.find(x => x.id === id); return g.q.map((q, i) => `g:${id}:${i}`).concat(g.typed.map((t, k) => `g:${id}:t${k}`)); }
ok(E.sets['grammar:be'].filter(id => oldGrammar.has(id)).length === 12 && E.progress('grammar:be', oldGrammar).done === 10 && E.progress('grammar:be', oldGrammar).total === 13 && !E.progress('grammar:be', oldGrammar).complete, 'old grammar progress kept 12/15 of base set (10/13 with 2 swapped for speak, speak off)');
const oldPat = new Set(P.find(p => p.id === 'lets').ex.flatMap((e, j) => [`p:lets:${j}:reorder`, `p:lets:${j}:choose`]).concat([0, 1, 2].map(k => `p:lets:x${k}:reorder`), [0, 1].map(k => `p:lets:t${k}`)));
ok(E.sets['pattern:lets'].filter(id => oldPat.has(id)).length === 12 && E.progress('pattern:lets', oldPat).done === 10, 'old pattern progress kept 12/15 of base set (10/13 speak off)');
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

// ---- 裝置同步 v3：各科練習紀錄（社會／自然心智圖、數學天平題目、Scratch、英文星星）----
{
  const C = SM.canon, same = (a, b) => C(a) === C(b);
  const props = (a, b, c, name) => {   // 交換律、冪等、結合律
    ok(same(SM.merge(a, b), SM.merge(b, a)), name + ': commutative');
    const ab = SM.merge(a, b); ok(same(SM.merge(ab, a), ab) && same(SM.merge(ab, b), ab) && same(SM.merge(ab, ab), ab), name + ': idempotent');
    if (c) ok(same(SM.merge(SM.merge(a, b), c), SM.merge(a, SM.merge(b, c))), name + ': associative');
  };
  // 相容：舊文件（v1 伺服器新建、v2 只有英文）讀進來不會壞，新欄位都是空的
  const v1 = SM.normalize({ v: 1, created: '2026-10-09T00:00:00Z', log: [], learned: {}, mistakes: {} }), v2 = SM.normalize(devA);
  ok(v1.v === 3 && SM.VERSION === 3 && same(v1.mm, {}) && same(v1.mmBlanks, {}) && same(v1.scratch, {}) && same(v1.ctr, {}) && v1.eq.items.length === 0 && same(v1.eq.del, {}), 'v1 doc → v3 with empty sections');
  ok(v2.log.length === 3 && same(SM.normalize(undefined).mm, {}) && same(SM.normalize({ mm: 5, mmBlanks: [1], eq: 'x', scratch: null, ctr: 7 }).eq, SM.normEq(null)), 'v2 / garbage sections do not throw');
  ok(same(SM.merge(v2, v1).log, SM.merge(devA, {}).log), 'v2 English fields unchanged by v3');
  // 社會／自然過關（kids_mm_progress）：過關聯集＋最佳成績＋最新過關時間；複習跟著最新那次
  const mA = { mm: { 'social:u1': { unlocked: 3, best: { 1: 100, 2: 85 }, passedAt: { 1: 1000, 2: 2000 }, lastPassAt: 2000, reviewStep: 0 }, _clockDays: 3 } };
  const mB = { mm: { 'social:u1': { unlocked: 2, best: { 1: 90 }, passedAt: { 1: 5000 }, lastPassAt: 5000, reviewStep: 1 }, 'science:n2': { unlocked: 2, best: { 1: 100 }, passedAt: { 1: 300 }, lastPassAt: 300, reviewStep: 0 } } };
  const mC = { mm: { 'social:u1': { unlocked: 1, best: { 1: 60 }, passedAt: {}, lastPassAt: 0, reviewStep: 0 } } };
  const mAB = SM.merge(mA, mB).mm;
  ok(same(mAB['social:u1'], { unlocked: 3, best: { 1: 100, 2: 85 }, passedAt: { 1: 5000, 2: 2000 }, lastPassAt: 5000, reviewStep: 1 }), 'mm: union of passed levels, best score, newest pass time, review follows newest: ' + C(mAB['social:u1']));
  ok(mAB['science:n2'] && !('_clockDays' in mAB), 'mm: other units kept, _ keys (demo clock) not synced');
  ok(SM.merge({ mm: { x: { unlocked: 2, lastPassAt: 7, reviewStep: 1 } } }, { mm: { x: { unlocked: 2, lastPassAt: 7, reviewStep: 2 } } }).mm.x.reviewStep === 2, 'mm: same pass time → larger reviewStep');
  props(mA, mB, mC, 'mm');
  // 挖空加權（kids_mm_blanks）：同一個詞取答題次數多的那份（不加總）
  const bA = { mmBlanks: { 'social:u1': { sess: 5, w: { '臺南': { ok: 4, wrong: 1, streak: 2, last: 'ok', lastShown: 5 }, '1624': { ok: 0, wrong: 1, streak: 0, last: 'wrong', lastShown: 2 } }, a: { 'l1': { ok: 1, wrong: 0, streak: 1, last: 'ok' } } } } };
  const bB = { mmBlanks: { 'social:u1': { sess: 2, w: { '臺南': { ok: 1, wrong: 0, streak: 1, last: 'ok', lastShown: 2 }, '荷蘭': { ok: 2, wrong: 0, streak: 2, last: 'ok', lastShown: 2 } }, a: { 'l1': { ok: 0, wrong: 3, streak: 0, last: 'wrong' } } } } };
  const bC = { mmBlanks: { 'social:u1': { sess: 9, w: { '荷蘭': { ok: 1, wrong: 1, streak: 0, last: 'wrong', lastShown: 9 } }, a: {} } } };
  const bAB = SM.merge(bA, bB).mmBlanks['social:u1'];
  ok(bAB.sess === 5 && bAB.w['臺南'].ok === 4 && bAB.w['1624'].wrong === 1 && bAB.w['荷蘭'].ok === 2 && bAB.a.l1.wrong === 3, 'mmBlanks: per word the record with more answers wins, sess max');
  ok(SM.merge(SM.merge(bAB && bA, bB), bB).mmBlanks['social:u1'].w['臺南'].ok === 4, 'mmBlanks: syncing again does not add up counts');
  ok(SM.merge(bB, bC).mmBlanks['social:u1'].w['荷蘭'].lastShown === 9, 'mmBlanks: tie on answers → newer lastShown');
  props(bA, bB, bC, 'mmBlanks');
  // 數學天平題目清單（tianping-eq-list-v2）：依題目聯集、刪除墓碑、順序跟較新的那台、最多 30 題
  const B8 = ['x+5=12', 'x−3=9', '12+x=20', 'x+8−2=15', '(x+3)−2=10', '(x−5)+4=12', 'x−(6−2)=7', 'x+(10−4)=15'].map(q => ({ q, own: false }));
  const eA = SM.eqFromLocal(B8.concat([{ q: 'x+7=20', own: true }]), null, 100);
  ok(eA.at === 100 && eA.items.length === 9 && eA.items.every(it => it.t === 100), 'eqFromLocal: first time → all items t=now');
  ok(same(SM.eqFromLocal(eA.items, eA, 999), eA), 'eqFromLocal: unchanged list → unchanged (stable within a sync)');
  const eB = SM.eqFromLocal(B8.concat([{ q: 'x+9=30', own: true }]), null, 200);
  const eAB = SM.merge({ eq: eA }, { eq: eB }).eq;
  ok(eAB.items.map(it => it.q).join(';') === B8.map(it => it.q).concat(['x+9=30', 'x+7=20']).join(';') && eAB.at === 200, 'eq: union by question, newer device order first: ' + eAB.items.map(it => it.q).join(';'));
  // A 刪掉 x+9=30（A 先同步拿到合併結果）→ 墓碑傳到 B；B 舊的那份不會把它救回來
  const eA2 = SM.eqFromLocal(eAB.items.filter(it => it.q !== 'x+9=30'), eAB, 300);
  ok(eA2.del['x+9=30'] === 300 && eA2.at === 300, 'eqFromLocal: removed item → tombstone, at=now');
  const eDel = SM.merge({ eq: eA2 }, { eq: eB }).eq;
  ok(!eDel.items.some(it => it.q === 'x+9=30') && eDel.del['x+9=30'] === 300 && eDel.items.some(it => it.q === 'x+7=20'), 'eq: delete propagates, not resurrected by the old copy');
  const eRe = SM.eqFromLocal(eB.items.filter(it => it.q !== 'x+9=30').concat([{ q: 'x+9=30', own: true }]), SM.normEq({ at: 250, items: eB.items.filter(it => it.q !== 'x+9=30'), del: { 'x+9=30': 300 } }), 400);
  ok(SM.merge({ eq: eDel }, { eq: eRe }).eq.items.some(it => it.q === 'x+9=30'), 'eq: adding it again later wins over the tombstone');
  const many = n => Array.from({ length: n }, (_, i) => ({ q: 'x+' + (i + 1) + '=' + (i + 50), own: true }));
  const eBig = SM.merge({ eq: SM.eqFromLocal(many(25), null, 10) }, { eq: SM.eqFromLocal(many(40).slice(20), null, 20) }).eq;
  ok(eBig.items.length === SM.MAX_EQ && eBig.items[0].q === 'x+21=70', 'eq: capped at 30, newer order first');
  const eC = SM.eqFromLocal(B8.slice(2), null, 150);
  props({ eq: eA }, { eq: eB }, { eq: eC }, 'eq');
  props({ eq: eA2 }, { eq: eB }, { eq: eRe }, 'eq with tombstones');
  // Scratch「我完成了」：聯集，留最早的
  const sA = { scratch: { 'K1|lesson1': '2026-10-05T01:00:00.000Z', 'K1|lesson2': '2026-10-07T01:00:00.000Z' } }, sB = { scratch: { 'K1|lesson1': '2026-10-08T01:00:00.000Z', 'K1|lesson3': '2026-10-09T01:00:00.000Z' } }, sC = { scratch: { 'K2|lesson1': 'x' } };
  const sAB = SM.merge(sA, sB).scratch;
  ok(Object.keys(sAB).length === 3 && sAB['K1|lesson1'] === '2026-10-05T01:00:00.000Z', 'scratch: union, earliest done time');
  props(sA, sB, sC, 'scratch');
  // 英文星星／回數：每台各記自己的，總數＝加總，同步幾次都不會重複算
  const cA = { ctr: { dA: { stars: 30, quizzes: 3 } } }, cB = { ctr: { dB: { stars: 12, quizzes: 1 }, dA: { stars: 20, quizzes: 2 } } }, cC = { ctr: { dC: { stars: 1, quizzes: 1 } } };
  let cAB = SM.merge(cA, cB); for (let i = 0; i < 3; i++) cAB = SM.merge(SM.merge(cAB, cB), cA);
  ok(same(SM.ctrSum(cAB.ctr), { stars: 42, quizzes: 4 }), 'ctr: sum over devices, no double count after repeated syncs: ' + C(SM.ctrSum(cAB.ctr)));
  props(cA, cB, cC, 'ctr');
  // 舊版裝置（只認 v2 欄位）PUT 回去的文件少了新欄位 → 新版裝置下次同步從本機補回來
  const full = SM.merge(SM.merge(SM.merge(mA, bA), SM.merge({ eq: eA }, sA)), SM.merge(cA, devA));
  const strip = d => { const n = SM.normalize(d); return { v: 2, cut: n.cut, log: n.log, agg: n.agg, learned: n.learned, mistakes: n.mistakes }; };
  ok(same(SM.merge(full, strip(full)), full), 'old v2 device strips new sections → newer device merge restores them from local');
  // 兩台輪流 syncOnce：會收斂、不會互相蓋掉、不會一直 PUT（順序不會打架）
  (async () => {
    const remote = { doc: { v: 1, log: [], learned: {}, mistakes: {} }, etag: 0 };
    const io = dev => ({ get: async () => ({ doc: JSON.parse(JSON.stringify(remote.doc)), etag: remote.etag }), put: async (c, d, e) => { if (e !== remote.etag) return { conflict: true }; remote.doc = JSON.parse(JSON.stringify(d)); remote.etag++; return {}; },
      readLocal: () => dev.local, writeLocal: d => { dev.local = d; } });
    const A = { local: SM.merge(SM.merge(mA, bA), SM.merge({ eq: eA }, SM.merge(sA, cA))) }, B = { local: SM.merge(SM.merge(mB, bB), SM.merge({ eq: eB }, SM.merge(sB, cB))) };
    let puts = 0; for (let i = 0; i < 4; i++) { puts += (await SM.syncOnce(io(A), 'X')).puts; puts += (await SM.syncOnce(io(B), 'X')).puts; }
    const last = (await SM.syncOnce(io(A), 'X')).puts + (await SM.syncOnce(io(B), 'X')).puts;
    ok(same(A.local, B.local) && same(A.local, SM.normalize(remote.doc)) && last === 0 && puts <= 2, 'syncOnce: two devices converge, no ping-pong (puts ' + puts + ')');
    ok(A.local.mm['social:u1'].passedAt[2] === 2000 && A.local.mm['science:n2'] && A.local.eq.items.length === 10 && Object.keys(A.local.scratch).length === 3, 'syncOnce: B sees A\'s social level 2 pass, union of everything');
  })().catch(e => { console.error(e); process.exit(1); });
  // 文件大小：英文作答壓縮到 500KB 以內時，新欄位照留；新欄位全部塞滿也只有幾十 KB
  const mmData = { window: {} }; vm.createContext(mmData);
  ['social/unit1-2.js', 'social/unit3-4.js', 'science/unit1-2.js', 'science/unit3-4.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, 'mindmap', 'data', f), 'utf8'), mmData));
  const SBk = require(path.join(root, 'mindmap', 'blanks.js')), kidsOf = d => d.lessons || d.topics || d.children || [];
  const maxDoc = { mm: {}, mmBlanks: {}, scratch: {}, ctr: {} };
  [['social', 'DATA_SOCIAL'], ['science', 'DATA_SCIENCE']].forEach(([s, g]) => mmData.window[g].units.forEach(u => {
    const st = { sess: 9999, w: {}, a: {} };
    (function walk(d) {
      (d.points || []).map(SBk.normPoint).concat(d.cands ? [SBk.normPoint({ t: d.title, cands: d.cands })] : []).forEach(np => np.cands.forEach(c => { st.w[c.w] = { ok: 999, wrong: 999, streak: 999, last: 'wrong', lastShown: 9999 }; }));
      if (d !== u) { st.a[d.id] = { ok: 999, wrong: 999, streak: 999, last: 'wrong', lastShown: 9999 }; if (d.rel) st.a['rel:' + d.id] = { ok: 999, wrong: 999, streak: 999, last: 'ok' }; }
      kidsOf(d).forEach(walk);
    })(u);
    maxDoc.mmBlanks[s + ':' + u.id] = st;
    maxDoc.mm[s + ':' + u.id] = { unlocked: 5, best: { 1: 100, 2: 100, 3: 100, 4: 100 }, passedAt: { 1: 1.8e12, 2: 1.8e12, 3: 1.8e12, 4: 1.8e12 }, lastPassAt: 1.8e12, reviewStep: 3 };
  }));
  for (let m = 0; m < 3; m++) for (let l = 1; l <= 7; l++) maxDoc.scratch['K10' + m + '|scratch-td:lesson' + l] = '2026-10-09T01:00:00.000Z';
  for (let d = 0; d < 5; d++) maxDoc.ctr['d' + d + 'mgk2x9abc'] = { stars: 99999, quizzes: 9999 };
  maxDoc.eq = { at: 1.8e12, items: many(30).map(it => Object.assign({ t: 1.8e12 }, it)), del: Object.fromEntries(Array.from({ length: 150 }, (_, i) => ['(x+' + i + ')−(' + i + '−2)=' + (i + 100), 1.7e12])) };
  const sec = SM.normalize(maxDoc), secBytes = SM.bytes(sec);
  ok(secBytes < 64 * 1024 && Object.keys(sec.eq.del).length === 100, 'v3 sections at maximum stay small: ' + secBytes + ' bytes');
  const bigAll = SM.compact(Object.assign({}, maxDoc, { log: big.log.concat(big.log.map(e => Object.assign({}, e, { t: e.t + 1e7, a: e.a + '-again' }))) }));
  ok(SM.bytes(bigAll) <= SM.MAX_BYTES && same(bigAll.mm, sec.mm) && same(bigAll.mmBlanks, sec.mmBlanks) && same(bigAll.eq, sec.eq), 'compact keeps doc ≤ 500KB (≪ 1MB server limit) by folding old English answers, v3 sections untouched: ' + SM.bytes(bigAll));
  console.log('sync v3 doc size: sections max ' + secBytes + ' B; 18000 answers + sections after compact ' + SM.bytes(bigAll) + ' B');
}

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
ok(bal.includes("url:'https://yoda-wcyc.github.io/Kids-Station/#s/math'"), 'balance share url -> Kids-Station #s/math');
ok(fs.readFileSync(path.join(root, 'app.js'), 'utf8').includes("url: 'https://yoda-wcyc.github.io/Kids-Station/'"), 'english share url -> Kids-Station root');
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
// 寫死 src 的活動卡（數學 1、AI 3、Scratch 1）維持 5 張；社會、自然的單元卡由 MM_UNITS 產生（src 是樣板字串，不算在這 5 張裡），下面另外檢查
const srcs = [...sj.matchAll(/src: '([^']+)'/g)].map(m => m[1]);
ok(srcs.length === 5, 'activity cards: ' + srcs.length);
srcs.forEach(s => ok(nonEmpty(s), 'activity src exists: ' + s));

// ---- 社會、自然：心智圖（mindmap/），每單元一張卡，src＝mindmap/<科>.html?u=<單元id> ----
ok(sj.includes('src: `mindmap/${k}.html?u=${id}`'), 'mindmap unit card src template');
['mindmap/social.html', 'mindmap/science.html', 'mindmap/mindmap.js', 'mindmap/mindmap.css', 'mindmap/blanks.js',
  'mindmap/data/social/unit1-2.js', 'mindmap/data/social/unit3-4.js', 'mindmap/data/science/unit1-2.js', 'mindmap/data/science/unit3-4.js']
  .forEach(rel => ok(nonEmpty(rel), rel + ' exists and is non-empty'));
const mmUnits = {};
['social', 'science'].forEach(k => { const m = new RegExp(k + ': \\[(.*?)\\]\\]', 's').exec(sj); mmUnits[k] = m ? [...m[1].matchAll(/\['([a-z0-9-]+)', '[^']+'/g)].map(x => x[1]) : []; });
ok(mmUnits.social.join() === 'u1,u2,u3,u4' && mmUnits.science.join() === 'n1,n2,n3,n4', 'mindmap unit cards: ' + JSON.stringify(mmUnits));
['social', 'science'].forEach(k => {
  const h = fs.readFileSync(path.join(root, 'mindmap', k + '.html'), 'utf8');
  ok(h.includes(`data-subj="${k}"`) && h.includes('../kids-auth.js') && h.includes('../kids-coins.js') && h.includes('mindmap.js'), `mindmap/${k}.html loads auth/coins/engine`);
  [...h.matchAll(/src="([^"]+)"/g)].map(m => m[1]).forEach(s => ok(nonEmpty(path.join('mindmap', s)), `mindmap/${k}.html script exists: ${s}`));
  const dataSrc = [...h.matchAll(/src="(data\/[^"]+)"/g)].map(m => fs.readFileSync(path.join(root, 'mindmap', m[1]), 'utf8')).join('\n');
  mmUnits[k].forEach(id => ok(dataSrc.includes(`id: "${id}", no:`), `mindmap/${k}.html has unit ${id}`));
});
const mmJs = fs.readFileSync(path.join(root, 'mindmap', 'mindmap.js'), 'utf8');
['requireLogin', 'startActivity(SUBJ', "KidsCoins.answer(!!ok, SUBJ)", "type:'practice_round', item:SUBJ + ':' + mode", 'kids_mm_progress', 'kids_social_progress'].forEach(t => ok(mmJs.includes(t), 'mindmap.js has ' + t));
ok(!fs.existsSync(path.join(root, 'social')) || fs.readdirSync(path.join(root, 'social'), { recursive: true }).every(f => fs.statSync(path.join(root, 'social', f)).isDirectory()), 'old social/ folder has no files (moved to mindmap/)');
// 部署排除：demo、測試、.md 不上線
{
  const dc = fs.readFileSync(path.join(root, 'deploy_copy.py'), 'utf8');
  ok(/parts\[0\] == "mindmap"/.test(dc) && dc.includes('"_demo"') && dc.includes('"test"'), 'deploy_copy skips mindmap/test, mindmap/_demo, .md');
}
// 講義互連與下載鈕：連到的檔案都在 web/，不再指向退場的 kids-ai
const WEB = 'https://yoda-wcyc.github.io/Kids-Station/game/scratch-td/web/';
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

ok(E.itemSet('word:may-month').length === 5 && E.itemSet('word:may').length === 5 && E.get('w:may-month:zh2en').answer === 'May' && E.get('w:may:zh2en').answer === 'may', 'May / may keep separate ids');
console.log(`bank build: engine ${msEngine.toFixed(0)} ms, all ${allQs.length} questions ${msBank.toFixed(0)} ms`);
console.log(`OK  ${checks} checks | words ${W.length} (lv ${lvCount.join('/')}) | phrases ${PH.length} (${[1, 2, 3].map(l => PH.filter(p => p.lv === l).length).join('/')}) | roots ${R.length} | grammar ${G.length} (${G.reduce((s, g) => s + g.q.length, 0)} q) | patterns ${P.length} | questions ${E.meta.length}`);
console.log('pool per type:', JSON.stringify(counts));
