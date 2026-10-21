/* 煙霧測試：node test/smoke.js */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
['words', 'words-2', 'words-3', 'words-4', 'words-5', 'phrases', 'roots', 'grammar', 'patterns', 'textbook'].forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctx, { filename: n + '.js' }));
const W = ctx.window.DATA_WORDS, PH = ctx.window.DATA_PHRASES, R = ctx.window.DATA_ROOTS, G = ctx.window.DATA_GRAMMAR, P = ctx.window.DATA_PATTERNS, TBK = ctx.window.DATA_TEXTBOOK;
const KE = require(path.join(root, 'engine.js'));
let checks = 0; const ok = (c, m) => { checks++; assert.ok(c, m); };

// ---- 資料格式 ----
// 2026-10-18：words-5.js 加入教育部表二「其他常用 800 字」（lv 4，src moe800）
const W1200 = W.filter(w => w.lv <= 3), W800 = W.filter(w => w.lv === 4);
ok(W1200.length >= 1200 && W1200.length <= 1230, 'words lv1-3 ≈ 1200: ' + W1200.length);
ok(W800.length >= 780 && W800.length <= 800, 'words lv4 ≈ 800: ' + W800.length);
ok(W800.every(w => w.src === 'moe800'), 'lv4 → src moe800');
// 10-18 校對：dumpling、kangaroo、panda 在官方表二（800 字），來源改 moe800，但等級維持 2（不動孩子既有進度）
ok(W1200.filter(w => w.src === 'moe800').map(w => w.w + ':' + w.lv).sort().join() === 'dumpling:2,kangaroo:2,panda:2', 'lv1-3 裡標 moe800 的只有 dumpling/kangaroo/panda（lv 2）');
const seenW = new Set();
W.forEach(w => {
  ['w', 'ipa', 'pos', 'zh', 'ex', 'exZh', 'src'].forEach(k => ok(typeof w[k] === 'string' && w[k].length, `${w.w}.${k}`));
  ok(/^\/.+\/$/.test(w.ipa), 'ipa ' + w.w);
  ok([1, 2, 3, 4].includes(w.lv), 'lv ' + w.w);
  ok(KE.POS[w.pos], 'pos ' + w.w + ' ' + w.pos);
  ok(['moe1200', 'moe800', 'extra', 'textbook'].includes(w.src), 'src ' + w.w + ' ' + w.src); // textbook＝課本補充字（2026-10-18 social studies）
  ok(Array.isArray(w.tags) && w.tags.length && w.tags.every(t => KE.TAGS[t]), 'tags ' + w.w);
  ok(w.ex.toLowerCase().includes((w.form || w.w).toLowerCase()), `example contains word/form: ${w.w} → ${w.ex}`);
  const key = KE.wordKey(w); ok(!seenW.has(key), 'duplicate word key ' + key); seenW.add(key);
});
ok(W.filter(w => w.src === 'extra').map(w => w.w).sort().join() === 'giraffe', 'only giraffe is outside the official 2000 list (marked extra)');
// 10-18 校對：lv4 單字的中文不可跟同詞性的其他字一樣（看中文打字題會分不出來）
// 10-18 舊資料同類修正：擴大到全部單字（lv1-3 原有 16 對，如 store／shop、big／large）——同詞性同中文不得無區辨
W.forEach(w => ok(!W.some(x => x !== w && x.pos === w.pos && x.zh === w.zh), 'zh unique within pos (all levels): ' + w.w + ' ' + w.zh));
// 同義字 alts：指到存在、同詞性的字；看中文打字兩個都收（見下方引擎檢查）
W.filter(w => w.alts).forEach(w => w.alts.forEach(a => { const x = W.find(y => y.w === a); ok(x && x !== w && x.pos === w.pos, 'word alt is a same-pos word: ' + w.w + ' → ' + a); }));
ok(W.filter(w => w.alts).length === 29, 'words with alts: 14 對互收＋soccer→football = 29: ' + W.filter(w => w.alts).length);
ok(W.find(w => w.w === 'football').zh === '美式足球；（英國）足球', 'football zh');
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
ok(G.length === 17, 'grammar topics'); // 2026-10-18 +do-does-on（翰林五 Unit 2）
G.forEach(g => {
  ok(g.id && g.title && g.rules.length && g.ex.length >= 2, 'grammar ' + g.id);
  ok(G.indexOf(g) < 12 ? g.q.length === 13 : g.q.length >= 15, 'grammar q count ' + g.id); // 原 12 個主題 13 題；10-18 新增主題至少 15 題
  ok(Array.isArray(g.typed) && g.typed.length === 2 && g.typed.every(t => t.zh && t.en), 'grammar typed ' + g.id);
  g.q.forEach(q => {
    ok(q.why, 'why ' + g.id);
    if (q.type === 'fill') { ok(q.s.includes('___'), 'blank ' + q.s); ok(q.opts.length === 4 && new Set(q.opts).size === 4, 'opts ' + q.s); ok(q.opts.includes(q.a), 'answer in opts: ' + q.s); }
    else { ok(q.type === 'fix' && q.wrong && q.right && q.wrong !== q.right, 'fix ' + q.right); }
  });
});
ok(P.length === 105 && P.every(p => p.id && p.pattern && p.zh && p.ex.length === 5 && p.ex.every(e => e.en && e.zh)), 'patterns: 105 with 5 examples each'); // 2026-10-18 +2（翰林五上 Unit 2）＋13（翰林五上 U1/U3/U4、五下 U1–U4）
ok(new Set(P.map(p => p.id)).size === 105, 'pattern ids unique');
ok(P.filter(p => p.lv === 1).length === 50 && P.filter(p => p.lv === 2).length === 33 && P.filter(p => p.lv === 3).length === 22, 'pattern levels 50/33/22');
// 課本句型：同一個句型裡的中文不重複（看中文選句子才不會兩個都對）
P.filter(p => p.tb).forEach(p => { const z = p.ex.concat(p.extra).map(e => e.zh); ok(new Set(z).size === z.length, 'textbook pattern zh unique: ' + p.id); });
['there-is', 'want-to', 'like-ing', 'time-to', 'how-many', 'can-you', 'lets', 'have-to', 'it-is-to', 'what-do', 'i-think', 'dont'].forEach(id => ok(P.find(p => p.id === id && p.lv === 2), 'original pattern kept as 基本: ' + id));
P.forEach(p => { const all = p.ex.concat(p.extra).map(e => e.en); ok(new Set(all).size === all.length, 'no duplicate sentences in ' + p.id); });
P.forEach(p => p.typed.concat(p.extra).forEach(t => (t.alts || []).forEach(a => ok(a !== t.en && /^[A-Z]/.test(a), 'alt ok ' + a))));
G.forEach(g => (g.typed || []).forEach(t => (t.alts || []).forEach(a => ok(a !== t.en && /^[A-Z]/.test(a), 'grammar alt ok ' + a))));
// 10-18 校對：新句型的打字題（typed＋extra）有縮寫就要收展開版（反之亦然）
const EXPAND = [[/\bI'm\b/g, 'I am'], [/\bIt's\b/g, 'It is'], [/\bWhat's\b/g, 'What is'], [/\bdon't\b/g, 'do not'], [/\bdoesn't\b/g, 'does not'], [/\bdidn't\b/g, 'did not'], [/\bshouldn't\b/g, 'should not'], [/\bI'll\b/g, 'I will'], [/\b(I|We)'d like\b/g, '$1 would like']];
P.slice(48).forEach(p => p.typed.concat(p.extra).forEach(t => { const full = EXPAND.reduce((s, [r, v]) => s.replace(r, v), t.en); if (full !== t.en) ok((t.alts || []).includes(full), 'contraction alts: ' + t.en + ' → ' + full); }));
// 10-18 校對：新文法主題的題組會把最後 3 題填空改成打字（沒有選項、alts 為空）→ 答案不可是縮寫
G.slice(12).forEach(g => g.q.filter(q => q.type === 'fill').slice(-3).forEach(q => ok(!/'/.test(q.a), 'typed fill answer not a contraction: ' + g.id + ' ' + q.s)));
P.forEach(p => ok(p.extra.length === 3 && p.extra.every(e => e.en && e.zh) && p.typed.length === 2 && p.typed.every(t => t.zh && t.en), 'pattern extra/typed ' + p.id));

// ---- 引擎 ----
// ---- 片語資料 ----
const PH_TAGS = ['動詞片語', '介系詞片語', '時間', '地點', '日常用語', '形容詞片語'];
ok(PH.length >= 340 && PH.length <= 370, 'phrases ~350（+6 課本日常用語）: ' + PH.length);
ok(new Set(PH.map(p => p.id)).size === PH.length, 'phrase ids unique');
ok(new Set(PH.map(p => p.p.toLowerCase())).size === PH.length, 'phrases unique');
ok(new Set(PH.map(p => p.zh)).size === PH.length, 'phrase zh unique (en2zh options never ambiguous)');
PH.forEach(p => {
  ok(p.p && p.zh && p.ex && p.exZh && [1, 2, 3].includes(p.lv) && PH_TAGS.includes(p.tag), 'phrase fields ' + p.id);
  ok(p.ex.toLowerCase().includes((p.form || p.p).toLowerCase()), `example contains phrase/form: ${p.id} → ${p.ex}`);
  if (p.form) ok(p.form !== p.p, 'form differs from base ' + p.id);
});
const tBuild0 = process.hrtime.bigint();
const E = new KE.Engine({ words: W, phrases: PH, roots: R, grammar: G, patterns: P, textbook: TBK });
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
// How many … are there …?（照國小課本）：主答案有 there；打字／口說也收沒 there 的版本；重組題字卡含 there、只認新句
{
  const hm = P.find(p => p.id === 'how-many'), all = hm.ex.concat(hm.extra, hm.typed).map(e => e.en);
  ok(!all.some(s => /^How many \w+ (are|is) (in|on|at|under)\b/.test(s)), 'how-many: no existence sentence without there');
  const ty = E.get('p:how-many:t1'), sx = E.get('p:how-many:1:speak'), ro = E.get('p:how-many:1:reorder'), xt = E.get('p:how-many:x1:type'), sk0 = E.get('p:how-many:0:speak');
  ok(ty.answer === 'How many people are there in your family?' && E.check(ty, 'how many people are there in your family').ok && E.check(ty, 'How many people are in your family?').ok && !E.check(ty, 'How many people in your family?').ok, 'how-many typed: with / without there');
  ok(E.check(xt, 'How many students are there in your class?').ok && E.check(xt, 'How many students are in your class').ok, 'how-many extra typed: with / without there');
  ok(E.check(sx, ['how many people are there in your family']).ok && E.check(sx, ['how many people are in your family']).ok && !E.check(sx, ['how many people']).ok, 'how-many speak: alts accepted');
  ok(sk0.alts.length === 0 && E.get('g:be:ex0:speak').alts.length === 0, 'speak without alts unchanged');
  ok(ro.answer === 'How many people are there in your family?' && ro.options.some(c => /^there$/i.test(c)) && E.check(ro, ro.answer).ok && !E.check(ro, 'How many people are in your family?').ok, 'how-many reorder: chips include there');
}
ok(E.list({ types: ['speak'], allowSpeak: true }).filter(m => m.module === 'words').length === W.length && E.list({ types: ['speak'], allowSpeak: true }).filter(m => m.module === 'phrases').length === PH.length, 'every word and phrase has a speak question');
ok(E.list({ types: ['speak'] }).length === 0, 'speak hidden without allowSpeak');
// 錯題混入
const mids = E.list({ modules: ['words'] }).slice(0, 5).map(m => m.id);
const only = E.buildQuiz({ count: 10, mistakeRatio: 1, mistakes: mids });
ok(only.length === 5 && only.every(q => mids.includes(q.id)), 'only mistakes');
const mixed = E.buildQuiz({ modules: ['words'], count: 10, mistakeRatio: 0.3, mistakes: mids });
ok(mixed.length === 10 && mixed.filter(q => mids.includes(q.id)).length >= 3, 'mix 30% (at least 3 mistakes; random fill may add more)');
ok(E.buildQuiz({ modules: ['words'], src: 'textbook-x', count: 10 }).length === 0, 'src filter');
// ---- 2026-10-18 舊資料同類修正 ----
// (a) 全部等級不含 lv4：只有明確選 lv 4（或來源選 moe800）才出 lv4；例題庫（list）照舊全部列
{
  const lvOf = q => (W.find(w => KE.wordKey(w) === q.id.split(':')[1]) || {}).lv;
  for (let k = 0; k < 5; k++) ok(E.buildQuiz({ modules: ['words'], count: 300 }).every(q => lvOf(q) !== 4), 'all-levels quiz has no lv4');
  ok(E.buildQuiz({ count: 300, allowSpeak: true }).filter(q => q.module === 'words').every(q => lvOf(q) !== 4), 'all-modules all-levels quiz has no lv4');
  ok(E.buildQuiz({ modules: ['words'], lv: '', src: '', count: 200 }).every(q => lvOf(q) !== 4), 'practice page default (lv "") has no lv4');
  const q4 = E.buildQuiz({ modules: ['words'], lv: '4', count: 50 }); ok(q4.length === 50 && q4.every(q => lvOf(q) === 4), 'lv 4 chosen → only lv4');
  ok(E.buildQuiz({ modules: ['words'], src: 'moe800', count: 50 }).some(q => lvOf(q) === 4), 'src moe800 chosen → lv4 allowed');
  ok(E.list({ modules: ['words'] }).some(m => m.lv === 4), 'bank list still has lv4');
  const m4 = E.list({ modules: ['words'], lv: 4 }).slice(0, 3).map(m => m.id);
  ok(E.buildQuiz({ count: 10, mistakeRatio: 1, mistakes: m4 }).length === 0 && E.buildQuiz({ lv: '4', count: 10, mistakeRatio: 1, mistakes: m4 }).length === 3, 'only-mistakes: lv4 mistakes only when lv 4 chosen');
}
// (b) 同義字：看中文打字兩個都收；看中文選英文、看英文選中文不拿同義字當干擾
W.filter(w => w.alts).forEach(w => {
  const k = KE.wordKey(w), ty = E.get(`w:${k}:type`);
  ok(w.alts.every(a => E.check(ty, a).ok) && E.check(ty, w.w).ok && !E.check(E.get(`w:${k}:spell`), w.alts[0]).ok, 'synonym typed: ' + w.w + ' / ' + w.alts);
  for (let i = 0; i < 6; i++) {
    ok(!E.get(`w:${k}:zh2en`).options.some(o => w.alts.includes(o)), 'synonym not a zh2en distractor: ' + w.w);
    const zhs = W.filter(x => w.alts.includes(x.w)).map(x => x.zh); ok(!E.get(`w:${k}:en2zh`).options.some(o => zhs.includes(o)), 'synonym zh not an en2zh distractor: ' + w.w);
  }
});
ok(E.check(E.get('w:shop:type'), 'store').ok && E.check(E.get('w:store:type'), 'shop').ok && E.check(E.get('w:soccer:type'), 'football').ok && !E.check(E.get('w:football:type'), 'soccer').ok, 'store/shop both ways; soccer accepts football (not the reverse)');
// (c) 縮寫／展開互收：所有句子打字題（文法、句型 typed／加練句／例句、片語）答案或 alts 的「全部展開」「全部縮寫」版都要收
{
  const CONTRACT = [
    [/\bI am (?=\w)/g, "I'm "], [/\b(You|you|We|we|They|they) are (?=\w)/g, "$1're "], [/\b(He|he|She|she|It|it|That|that|What|what|Where|where|Who|who|There|there) is (?=\w)/g, "$1's "],
    [/\bdo not\b/g, "don't"], [/\bDo not\b/g, "Don't"], [/\bdoes not\b/g, "doesn't"], [/\bdid not\b/g, "didn't"], [/\bis not\b/g, "isn't"], [/\bare not\b/g, "aren't"],
    [/\bwas not\b/g, "wasn't"], [/\bwere not\b/g, "weren't"], [/\bcannot\b/g, "can't"], [/\bwill not\b/g, "won't"], [/\bshould not\b/g, "shouldn't"],
    [/\b(I|You|We|They|He|She|It) will (?=\w)/g, "$1'll "], [/\b(I|We|They|You) would like\b/g, "$1'd like"]
  ];
  const contract = x => CONTRACT.reduce((t, [r, v]) => t.replace(r, v), x);
  let n = 0;
  E.meta.filter(m => KE.isTyped(m) && ['zh2en-type', 'grammar-fill-type', 'grammar-fix-type'].includes(m.type) && m.module !== 'words').forEach(m => {
    const q = m.make();
    [q.answer].concat(q.alts || []).forEach(f => [KE.expandContr(f), contract(f)].forEach(v => { if (v.toLowerCase() !== f.toLowerCase()) { n++; ok(E.check(q, v).ok, 'contraction both ways: ' + q.id + ' ' + f + ' → ' + v); } }));
  });
  ok(n > 150, 'contraction variants checked: ' + n);
  const ty = id => E.get(id);
  ok(E.check(ty('p:i-dont-like:x0:type'), 'I do not like bugs.').ok && E.check(ty('p:time-to:x1:type'), 'It is time to go home').ok && E.check(ty('p:i-am:x0:type'), "I'm tired").ok, 'old pattern extras: don\'t / It\'s / I\'m both ways');
  ok(E.check(ty('p:because:t0'), "I'm hungry because I did not eat breakfast.").ok, 'mixed contraction + expansion accepted');
  ok(!E.check(ty('p:time-to:x1:type'), 'Its time to go home').ok && !E.check(ty('p:lets:t1'), 'Let us sing').ok, "its ≠ it's; Let's not expanded");
  const sp = E.get('p:i-am:0:speak'); ok(E.check(sp, ["I'm a student"]).ok && E.check(sp, ['I am a student']).ok && E.check(E.get('p:i-dont-like:0:speak'), ['I do not like ' + E.get('p:i-dont-like:0:speak').answer.replace(/^I don't like /, '')]).ok, 'speak: contraction both ways');
}
// (d) 文法填空改打字（看不到選項）：答案不唯一的題要有 hint（原形字或中文）或 alts；alts 不可在選項裡
{
  const UNIQUE = ['be:11', 'present:10', 'progressive:11', 'past:11', 'future:10', 'article:8', 'pronoun:10', 'pronoun:11', 'prep:8', 'prep:11', 'wh:9', 'wh:10', 'wh:11',
    'there-be:7', 'there-be:8', 'there-be:9', 'past-be:7', 'past-be:8', 'past-be:9', 'countable:7', 'countable:8', 'countable:9', 'frequency:7', 'frequency:8', 'frequency:9']; // 看句子就只有一個答案
  let nTyped = 0;
  G.forEach(g => {
    g.q.forEach((q, i) => { if (q.alts) ok(q.type === 'fill' ? q.alts.every(a => !q.opts.includes(a) && a !== q.a) : q.alts.every(a => a !== q.right), 'grammar alts not in opts: ' + g.id + ':' + i); });
    E.sets[KE.grammarItemId(g)].filter(id => /:type$/.test(id) && !/:t\d+$/.test(id)).forEach(id => {
      const i = +id.split(':')[2], q = g.q[i]; nTyped++;
      ok(UNIQUE.includes(g.id + ':' + i) || q.hint || (q.alts && q.alts.length), 'typed fill needs hint/alts (answer not unique without options): ' + g.id + ':' + i + ' ' + (q.s || q.right));
      if (q.hint) ok(E.get(id).sub.includes(q.hint), 'hint shown in typed sub: ' + id);
    });
  });
  ok(nTyped === 51, 'typed fills in grammar sets: ' + nTyped);
  const cm = E.get('g:modal:11:type'); ok(cm.prompt === '___ I use your pen?' && E.check(cm, 'Can').ok && E.check(cm, 'May').ok && E.check(cm, 'could').ok && !E.check(cm, 'Do').ok, 'Can / May / Could all correct (typed)');
  ok(E.check(E.get('g:modal:11:speak'), ['May I use your pen']).ok && E.get('g:modal:11').options.filter(o => ['Can', 'May', 'Could'].includes(o)).length === 1, 'Can/May: speak accepts May; choice version has one correct option');
  ok(E.get('g:plural:11:type').sub === '打出空格裡的字（提示：toy）' && E.get('g:pronoun:8:type').sub.includes('我們') && E.get('g:modal:10:type').sub.includes('必須'), 'hints: Many ___ are in the box (toy) / ___ are playing (我們) / ___ be quiet (必須)');
  ok(E.get('g:plural:11:speak').answer === 'Many toys are in the box.' && E.get('g:plural:11').title === 'Many toys are in the box.', 'hint does not leak into sentence / speak');
}

// ---- 📘 課本單元（2026-10-18 翰林 Here We Go! 五上／五下）----
{
  const IDS = ['hanlin-5-u1', 'hanlin-5-u2', 'hanlin-5-u3', 'hanlin-5-u4', 'hanlin-6-u1', 'hanlin-6-u2', 'hanlin-6-u3', 'hanlin-6-u4'];
  ok(TBK.map(x => x.id).join() === IDS.join() && new Set(TBK.map(x => x.id)).size === TBK.length, 'textbook units in book/unit order: ' + TBK.map(x => x.id));
  ok(TBK.every(u => u.id === 'hanlin-5-u2' ? !u.draft : u.draft === true), 'draft flag: all units except U2 (Yoda textbook) are 待課本核對');
  const SECS = ['一、聽力', '二、選擇', '三、填空', '四、重組', '五、中翻英', '六、回答問句'];
  TBK.forEach(u => {
    const U = u.id, it = E.tbItems(U), tag = ' [' + U + ']';
    ok(E.tbUnit(U) === u && /^五[上下] Unit \d /.test(u.title) && u.groups.length >= 2, 'unit title / groups' + tag);
    // 分組裡的每個字都有 tb 標記，有 tb 標記的字都在分組裡（不重複新增：一個字只有一筆）
    const wk = it.words.map(KE.wordKey).sort().join(), gw = u.groups.flatMap(g => g.words || []), gp = u.groups.flatMap(g => g.phrases || []);
    ok(gw.slice().sort().join() === wk && gp.slice().sort().join() === it.phrases.map(x => x.id).sort().join() && new Set(gw).size === gw.length, 'unit groups == tb-tagged words/phrases' + tag + ' ' + wk);
    ok(gw.concat(gp).every(k => (u.tz || {})[k]), 'every unit word has textbook zh (tz)' + tag);
    ok(u.patterns.join() === it.patterns.map(x => x.id).join() && u.patterns.length >= 1 && u.grammar.slice().sort().join() === it.grammar.map(g => g.id).sort().join(), 'unit def patterns/grammar match tb tags' + tag);
    it.patterns.forEach(pt => ok(E.sets[KE.patternItemId(pt)].length === 15, 'pattern set 15 ' + pt.id));
    // 句子與問答的資料品質
    const sk = u.sents.map(x => x.key), rk = u.replies.map(x => x.key);
    ok(new Set(sk).size === sk.length && new Set(rk).size === rk.length && u.sents.length >= 8 && u.replies.length >= 8, 'sents / replies keys unique' + tag);
    u.sents.forEach(x => { ok(x.en && x.zh && /^[A-Z]/.test(x.en) && /[.?!]$/.test(x.en), 'sent shape ' + x.key + tag); (x.blanks || []).forEach(bl => ok(bl.opts.length === 4 && new Set(bl.opts).size === 4 && bl.opts.includes(bl.w), 'blank opts ' + x.key + ' ' + bl.fam + tag)); });
    u.replies.forEach(r => ok(r.q && r.cue && r.kind && r.wrong.length === 3 && new Set(r.wrong.concat(r.en)).size === 4, 'reply wrong options distinct ' + r.key + tag));
    E.meta.filter(m => m.module === 'textbook' && m.topic === U).forEach(m => {
      const q = m.make();
      if (q.options && q.input !== 'chips') ok(q.options.length === 4 && new Set(q.options).size === 4 && q.options.includes(q.answer), 'tb options ' + q.id);
      if (m.type === 'tb-fill' || m.type === 'tb-fill-type') ok((q.prompt.match(/___/g) || []).length === 1, 'one blank ' + q.id + ' ' + q.prompt);
      ok(E.check(q, q.answer).ok && (q.alts || []).every(x => E.check(q, x).ok), 'tb self/alts ' + q.id);
      if (KE.isTyped(q)) { const full = KE.expandContr(q.answer); if (full !== q.answer.toLowerCase()) ok(E.check(q, full).ok && E.check(q, full.toUpperCase()).ok, 'tb typed accepts expansion: ' + q.id + ' → ' + full); }
      if (/^tb:[^:]+:anst?:/.test(q.id)) ok(!q.speakText.includes(q.answer), 'short-answer audio does not read the answer ' + q.id);
    });
    // 專屬題（練習）：一輪 12 題＋🎤 1 題（裝置支援才出）；選擇類在前、🎤、打字最後；同一輪同一句（card）不重複
    for (let k = 0; k < 10; k++) {
      const a = E.tbPractice(U, { speak: true }), b = E.tbPractice(U, { speak: false }), rank = a.map(KE.typedRank);
      const cards = a.map(q => E.byId[q.id].card).filter(c => c != null);
      ok(a.length === 13 && b.length === 12 && !b.some(q => q.type === 'speak') && rank.every((r, i) => !i || r >= rank[i - 1]) && (u.sents.length < 30 || new Set(cards).size === cards.length) && a.every(q => q.module === 'textbook'), 'tbPractice 13/12, typed last, cards unique' + tag);
      ok(['tb-fill', 'tb-fill-type', 'tb-answer', 'tb-answer-type', 'reorder', 'speak', 'tb-listen'].every(t => a.some(q => q.type === t)), 'tbPractice covers blanks, answers, reorder, speak, listening' + tag);
    }
    // 考試：20 題、每題 5 分、六大題照順序、不出 🎤、每次隨機；回答問句兩題的 kind 不同
    const ex1 = E.tbExam(U), ex2 = E.tbExam(U);
    for (let k = 0; k < 15; k++) {
      const ex = E.tbExam(U), secs = [...new Set(ex.map(q => q.sec))], cnt = SECS.map(s => ex.filter(q => q.sec === s).length);
      ok(ex.length === 20 && ex.reduce((s, q) => s + q.pts, 0) === 100 && secs.join() === SECS.join() && cnt.join() === '4,5,3,3,3,2' && !ex.some(q => q.type === 'speak') && new Set(ex.map(q => q.id)).size === 20, 'tbExam 20 / 100 pts / sections ' + cnt + tag);
      ok(ex.filter(q => q.sec === '一、聽力').every(q => q.auto && q.play && q.options) && ex.filter(q => q.sec !== '一、聽力').every(q => !q.play && !q.auto) && ex.filter(q => q.module === 'words').every(q => it.words.some(w => q.id.split(':')[1] === KE.wordKey(w))), 'tbExam listening auto-plays only; word questions are unit words' + tag);
      const kinds = ex.filter(q => q.sec === '六、回答問句').map(q => E.byId[q.id].kind);
      ok(kinds.length === 2 && kinds[0] !== kinds[1] && ex.every(q => E.check(q, q.answer).ok), 'tbExam answer section: 2 different kinds; self-check' + tag);
    }
    ok(ex1.map(q => q.id).join() !== ex2.map(q => q.id).join(), 'tbExam random each time' + tag);
    ok(E.topicLabel('textbook:' + U) === u.title, 'textbook topic label' + tag);
  });
  // ---- 五上 Unit 2（Yoda 提供課本內容）細項 ----
  const U = 'hanlin-5-u2', u = E.tbUnit(U), it = E.tbItems(U);
  ok(u.title === '五上 Unit 2 Do You Have PE Class on Monday?', 'U2 renamed');
  ok(it.words.map(KE.wordKey).sort().join() === 'art,chinese,class,english,follow,math,monday,music,park,pe,science,social-studies,thursday,tuesday,wednesday', 'U2 unit words (tb tags)');
  ok(it.phrases.map(p => p.id).join() === 'in-a-hurry' && it.patterns.map(p => p.id).join() === 'do-you-have-class,does-he-have-class' && it.grammar.map(g => g.id).join() === 'do-does-on', 'U2 phrase / patterns / grammar');
  ['art', 'Chinese', 'English', 'math', 'music', 'PE', 'science', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'class', 'park', 'follow'].forEach(w => ok(W.filter(x => x.w === w).length === 1 && W.find(x => x.w === w).src === 'moe1200', 'textbook word not duplicated, kept moe1200: ' + w));
  const ss = W.find(x => x.w === 'social studies'); ok(ss && ss.src === 'textbook' && ss.lv === 2 && E.itemSet('word:social-studies').length === 5, 'social studies added as textbook word');
  it.patterns.forEach(p => ok(p.ex.concat(p.extra, p.typed).every(e => !/\b(an?|the) (art|Chinese|English|math|music|PE|science|social studies) class\b/.test(e.en)) && p.ex.concat(p.extra, p.typed).every(e => !/\b(monday|tuesday|wednesday|thursday)\b/.test(e.en)), 'no article before class + days capitalised: ' + p.id));
  ok(E.sets['grammar:do-does-on'].length === 15 && E.get('g:do-does-on:13:type').sub.includes('Do 或 Does') && E.check(E.get('g:do-does-on:13:type'), 'does').ok, 'grammar do-does-on set 15 + hints');
  (u.dialog.choose || []).forEach(c => ok(c.options.includes(c.answer) && new Set(c.options).size === 4, 'dialog choose ' + c.id));
  for (let k = 0; k < 15; k++) ok(E.tbExam(U).filter(q => q.sec === '六、回答問句').map(q => q.id.slice(-1)).sort().join() === 'n,y', 'U2 exam: one ⭕ one ❌');
  const tbT = E.meta.filter(m => m.module === 'textbook' && m.topic === U && KE.isTyped(m));
  ok(tbT.length === 96 * 4 + 192 + 3, 'U2 typed questions (same ids as first release): ' + tbT.length);
  const C = id => E.get(id);
  ok(E.check(C('tb:hanlin-5-u2:anst:you:art:tuesday:n'), 'No, I do not.').ok && E.check(C('tb:hanlin-5-u2:anst:you:art:tuesday:n'), "no I don't").ok && !E.check(C('tb:hanlin-5-u2:anst:you:art:tuesday:n'), "No, I doesn't.").ok && E.check(C('tb:hanlin-5-u2:anst:she:art:tuesday:y'), 'yes she does').ok && !E.check(C('tb:hanlin-5-u2:anst:she:art:tuesday:y'), 'Yes, she do.').ok, 'short answers: contraction / comma / wrong aux');
  ok(E.check(C('tb:hanlin-5-u2:ask:he:pe:monday'), 'Does he have P.E. class on Monday?').ok && E.check(C('tb:hanlin-5-u2:zh:you:social-studies:thursday'), 'Do you have social studies on Thursday').ok && !E.check(C('tb:hanlin-5-u2:zh:you:math:monday'), 'Do you have a math class on Monday?').ok && !E.check(C('tb:hanlin-5-u2:zh:he:math:monday'), 'Does he has math class on Monday?').ok && !E.check(C('tb:hanlin-5-u2:zh:he:math:monday'), 'Do he have math class on Monday?').ok, 'ask/zh typed: P.E., drop class ok; article / has / Do he wrong');
  ok(E.check(C('tb:hanlin-5-u2:dl:2:type'), 'I am in a hurry').ok && E.check(C('tb:hanlin-5-u2:dd:she:art:monday:type'), 'does').ok && !E.check(C('tb:hanlin-5-u2:dd:she:art:monday:type'), 'do').ok && E.check(C('tb:hanlin-5-u2:on:he:art:monday:type'), 'ON').ok, "dialog I'm ↔ I am; Do/Does & on typed");
  ok(C('tb:hanlin-5-u2:dd:you:math:monday').prompt === '___ you have math class on Monday?' && C('tb:hanlin-5-u2:on:she:pe:thursday').prompt === 'Does she have PE class ___ Thursday?' && C('tb:hanlin-5-u2:ans:he:music:wednesday:y').options.slice().sort().join('|') === "No, he doesn't.|Yes, he do.|Yes, he does.|Yes, she does." && C('tb:hanlin-5-u2:ans:you:art:tuesday:n').options.slice().sort().join('|') === "No, I doesn't.|No, I don't.|No, you don't.|Yes, I do.", 'U2 question shapes (textbook style, ids unchanged)');
  // ---- 其他單元的寫法抽查 ----
  ok(E.check(C('tb:hanlin-5-u1:anst:n:monday:tuesday'), "No, it is not. It is Tuesday.").ok && !E.check(C('tb:hanlin-5-u1:anst:y:monday'), 'Yes, it does.').ok && C('tb:hanlin-5-u1:isit:q:friday').prompt === '___ it Friday today?', 'U1: Is it … today? / Yes, it is.');
  ok(C('tb:hanlin-5-u3:pl:go:she:post-office').prompt === "She's going to the ___." && E.check(C('tb:hanlin-5-u3:zh:go:i:park'), 'I am going to the park').ok && !E.check(C('tb:hanlin-5-u3:zh:go:i:park'), "I'm going to park.").ok, 'U3: going to the + place');
  ok(E.check(C('tb:hanlin-5-u4:anst:hm:3:lion'), 'There are 3 lions.').ok && E.check(C('tb:hanlin-5-u4:anst:hm:1:koala'), 'There is one koala').ok && !E.check(C('tb:hanlin-5-u4:anst:hm:3:lion'), 'There are three lion.').ok && C('tb:hanlin-5-u4:like:dl:she:zebra').prompt === 'Does she ___ zebras?', 'U4: How many … are there? / plural / like');
  ok(E.check(C('tb:hanlin-6-u1:zh:my:feet'), 'My foot hurts.').ok && !E.check(C('tb:hanlin-6-u1:anst:my:feet'), 'My feet hurts.').ok && C('tb:hanlin-6-u1:hurt:his:eyes').answer === 'hurt' && C('tb:hanlin-6-u1:hurt:my:foot').answer === 'hurts', 'U5-1 hurts / hurt');
  ok(C('tb:hanlin-6-u2:has:s:she:fever').answer === 'has' && C('tb:hanlin-6-u2:has:s:you:fever').answer === 'have' && C('tb:hanlin-6-u2:a:q:he:headache').prompt === 'Does he have ___ headache?' && W.filter(x => x.w === 'cold').map(x => KE.wordKey(x)).sort().join() === 'cold,cold-sick', 'U6-2 have/has, a, cold (sick) separate id');
  ok(E.check(C('tb:hanlin-6-u3:anst:n:bread:lunch'), 'No, thank you. I would like some chicken.').ok && E.check(C('tb:hanlin-6-u3:zh:id:soup'), 'I would like some soup').ok, "U6-3 I'd like ↔ I would like");
  ok(C("tb:hanlin-6-u4:own:it:tony-s:umbrella").answer === "Tony's" && E.check(C('tb:hanlin-6-u4:anst:pl:glasses:those:amy-s'), "They're Amy's glasses.").ok && !E.check(C('tb:hanlin-6-u4:anst:sg:cap:this:my'), 'It is me cap.').ok, "U6-4 possessives / They're");
  ok(E.list({ modules: ['textbook'] }).length === 0 && E.buildQuiz({ count: 300, allowSpeak: true }).every(q => q.module !== 'textbook') && E.list({ ids: ['tb:hanlin-5-u2:zh:you:math:monday'] }).length === 1, 'textbook questions only in textbook pages (but redo by id works)');
  { const CK = require(path.join(root, 'kids-coins.js'))._core, ev = it => ({ event_id: 'e-1', type: 'practice_round', item: it, correct: 4, total: 5 });
    ok(CK.validEvent(ev('english:textbook')) && CK.validEvent(ev('english:test')) && !CK.validEvent(ev('english:textbooks')) && !CK.validEvent(ev('math:test')), 'kids-coins: english:textbook / english:test valid'); }
  ok(['learn', 'practice', 'test'].every(k => fs.readFileSync(path.join(root, 'app.js'), 'utf8').includes(`['${k}',`)) && /<script src="data\/textbook\.js(\?v=[0-9a-f]+)?"><\/script>/.test(fs.readFileSync(path.join(root, 'index.html'), 'utf8')), 'app tabs + index loads textbook.js');
}

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
  ok(v1.v === 6 && SM.VERSION === 6 &&   /* 2026-10-21 文件 v6（done 多 mp、mx）*/ same(v1.mk, {}) && same(v1.mm, {}) && same(v1.mmBlanks, {}) && same(v1.scratch, {}) && same(v1.ctr, {}) && v1.eq.items.length === 0 && same(v1.eq.del, {}), 'v1 doc → v3 with empty sections');
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
  // ---- 自動即時同步（2026-10-19）：syncauto.js 計時零件＋syncOnce 的 lazy（伺服器沒變不合併）／cached（先 PUT、412 再 GET）----
  {
    const SA = require(path.join(root, 'syncauto.js'));
    // 假時鐘：set/clear/advance
    const clock = () => { let t = 0, id = 0; const q = new Map(); return { now: () => t, set: (f, ms) => { q.set(++id, { f, at: t + ms }); return id; }, clear: i => q.delete(i),
      go(ms) { const end = t + ms; for (;;) { let nx = null; q.forEach((v, k) => { if (v.at <= end && (!nx || v.at < nx[1].at)) nx = [k, v]; }); if (!nx) break; q.delete(nx[0]); t = nx[1].at; nx[1].f(); } t = end; } }; };
    let c = clock(), fired = [];
    let d = SA.debouncer(() => fired.push(c.now()), { wait: 1500, maxWait: 3000, timer: c });
    d.trigger(); c.go(1400); ok(!fired.length && d.pending(), 'debounce: not yet at 1.4s');
    c.go(200); ok(fired.join() === '1500', 'debounce: single change → push at 1.5s: ' + fired.join());
    fired = []; c.go(10000); const t0 = c.now(); [0, 1000, 2000, 2900].forEach(dt => { c.go(dt - (c.now() - t0)); d.trigger(); }); c.go(5000);
    ok(fired.length === 1 && fired[0] - t0 === 3000, 'debounce: 4 changes in 2.9s merge into ONE push, at most 3s after the first: +' + (fired[0] - t0));
    fired = []; d.trigger(); d.cancel(); c.go(5000); ok(!fired.length && !d.pending(), 'debounce: cancel');
    d.trigger(); ok(d.flush() === true && fired.length === 1 && !d.pending() && d.flush() === false, 'debounce: flush sends now (page hidden)');
    ok([0, 1, 2, 3, 4, 9].map(n => SA.backoff(n, SA.POLL_MS, SA.BACKOFF_MAX)).join() === '20000,40000,80000,120000,120000,120000', 'backoff: 20s → 40s → 80s → cap 2 min');
    ok(SA.POLL_MS === 20000 && SA.PUSH_MAX === 3000, 'poll every 20s, push within 3s');
    // 作答中延後套用：hold 期間 offer 不送，release 才送（只送一次）；忘了 release 的 hold 過期後 tick 補送
    let n = 0, now = 0; const g = SA.gate({ now: () => now, ttl: 60000, deliver: () => n++ });
    ok(g.offer() === true && n === 1, 'gate: not answering → deliver right away');
    g.hold('english'); ok(g.offer() === false && n === 1 && g.queued(), 'gate: answering → hold the update');
    g.offer(); g.hold('mindmap'); ok(g.release('english') === false && n === 1, 'gate: still held by another tag');
    ok(g.release('mindmap') === true && n === 2 && !g.queued(), 'gate: round over → deliver once');
    ok(g.release('mindmap') === false && n === 2, 'gate: release again → nothing');
    g.hold('x'); g.offer(); now = 59999; ok(!g.tick() && n === 2, 'gate: hold still valid'); now = 60000; ok(g.tick() === true && n === 3, 'gate: stale hold expires → tick delivers');
    ok(SA.ago(1000, 50000) === '剛剛' && SA.ago(1000, 1000 + 3 * 60000 + 5) === '3 分鐘前' && SA.ago(1, 1 + 2 * 3600000) === '2 小時前', 'ago text');
  }
  (async () => {
    const doc0 = SM.normalize({ log: [{ t: 1, id: 'a', ok: 1 }], learned: {}, mistakes: {} });
    const mk = (server, local) => { const calls = []; return { calls, io: {
      get: async () => { calls.push('GET'); return server.next ? server.next() : { doc: JSON.parse(JSON.stringify(server.doc)), etag: server.etag, notModified: !!server.nm }; },
      put: async (cd, dd, e) => { calls.push('PUT ' + e); if (e !== server.etag) return { conflict: true }; server.doc = JSON.parse(JSON.stringify(dd)); server.etag = server.etag + 1; return { etag: server.etag }; },
      readLocal: () => local.d, writeLocal: x => { calls.push('WRITE'); local.d = x; } } }; };
    // lazy＋伺服器沒變（204）→ 不合併、不寫本機、不 PUT
    let S = { doc: doc0, etag: 5, nm: true }, L = { d: SM.merge(doc0, { log: [{ t: 9, id: 'b', ok: 1 }] }) }, x = mk(S, L);
    let r = await SM.syncOnce(x.io, 'C', { lazy: true });
    ok(r.ok && r.notModified && x.calls.join() === 'GET', 'syncOnce lazy + 204/304: one GET, no merge, no PUT: ' + x.calls.join());
    // 不是 lazy（有待上傳）：304 拿手上的版本照樣合併、PUT
    x = mk(S, L); r = await SM.syncOnce(x.io, 'C', {}); ok(r.ok && r.puts === 1 && x.calls.join() === 'GET,PUT 5', 'full + 304: merge with cached doc, PUT: ' + x.calls.join());
    // cached：不先 GET，直接 PUT（If-Match 手上的 ETag）
    L.d = SM.merge(L.d, { log: [{ t: 10, id: 'c', ok: 0 }] }); S.nm = false; x = mk(S, L);
    r = await SM.syncOnce(x.io, 'C', { cached: { doc: S.doc, etag: S.etag } });
    ok(r.ok && r.puts === 1 && x.calls.join() === 'PUT 6' && S.doc.log.length === 3, 'push with cached version: PUT only, no GET: ' + x.calls.join());
    // cached 但別台先改過（412）→ GET → 合併 → PUT，別台的紀錄不會被蓋掉
    const other = SM.merge(S.doc, { log: [{ t: 11, id: 'z', ok: 1 }] }); S.doc = other; S.etag = 9; L.d = SM.merge(L.d, { log: [{ t: 12, id: 'd', ok: 1 }] }); x = mk(S, L);
    r = await SM.syncOnce(x.io, 'C', { cached: { doc: doc0, etag: 7 } });
    ok(r.ok && x.calls.join() === 'PUT 7,GET,WRITE,PUT 9' && S.doc.log.some(e => e.id === 'z') && S.doc.log.some(e => e.id === 'd') && L.d.log.some(e => e.id === 'z'), 'push conflict (412) → GET, merge, PUT; other device kept: ' + x.calls.join());
    // 一直衝突：第一次＋重試 3 次＝4 次就放棄（ok:false，等下次再試）
    let k = 0; const busy = { doc: S.doc, etag: 100, next: () => ({ doc: JSON.parse(JSON.stringify(S.doc)), etag: 'stale' + (k++) }) }; L.d = SM.merge(L.d, { log: [{ t: 13, id: 'e', ok: 1 }] }); x = mk(busy, L);
    r = await SM.syncOnce(x.io, 'C', { cached: { doc: S.doc, etag: 'old' } });
    ok(!r.ok && r.conflict && x.calls.filter(s => /^PUT/.test(s)).length === 4, 'always 412 → 1 try + 3 retries then give up: ' + x.calls.filter(s => /^PUT/.test(s)).length);
    // 沒有新東西：cached 合併後跟伺服器一樣 → 完全不連線
    x = mk(S, { d: SM.normalize(S.doc) }); r = await SM.syncOnce(x.io, 'C', { cached: { doc: S.doc, etag: S.etag } });
    ok(r.ok && !x.calls.length, 'push with nothing new → no request at all');
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

// ---- 📕 錯題庫（kids-mistakes.js；社會／自然／數學／AI）＋ 同步 v4 的 mk 欄位 ----
{
  const KMc = require(path.join(root, 'kids-mistakes.js'))._core, C = SM.canon, same = (a, b) => C(a) === C(b);
  const props = (a, b, c, name) => {   // 交換律、冪等、結合律
    ok(same(SM.merge(a, b), SM.merge(b, a)), name + ': commutative');
    const ab = SM.merge(a, b); ok(same(SM.merge(ab, a), ab) && same(SM.merge(ab, b), ab) && same(SM.merge(ab, ab), ab), name + ': idempotent');
    ok(same(SM.merge(SM.merge(a, b), c), SM.merge(a, SM.merge(b, c))), name + ': associative');
  };
  // 收錄與移出規則（比照英文 app.js record()）：答錯收進、c 歸零、w+1；在錯題庫裡連對 3 次畢業留墓碑；畢業後再錯重新收進、w 接著加
  const b = {};
  ok(KMc.mark(b, 'u1|w|u1-l1-c-p0|臺南', true, null, 100) === null && !b['u1|w|u1-l1-c-p0|臺南'], 'mk: correct answer not in the book → nothing recorded');
  ok(KMc.mark(b, 'u1|w|x|臺南', false, { u: 'u1', k: 'w', s: '荷蘭人在臺南建城', a: '臺南' }, 1000) === 'added' && same(b['u1|w|x|臺南'], { c: 0, w: 1, t: 1000, u: 1000, p: { u: 'u1', k: 'w', s: '荷蘭人在臺南建城', a: '臺南' } }), 'mk: wrong → added c=0 w=1');
  ok(KMc.mark(b, 'u1|w|x|臺南', true, null, 1100) === 'counted' && KMc.mark(b, 'u1|w|x|臺南', false, null, 1200) === 'added' && b['u1|w|x|臺南'].c === 0 && b['u1|w|x|臺南'].w === 2 && b['u1|w|x|臺南'].p.a === '臺南', 'mk: wrong again resets the streak (c=0), w=2, keeps p');
  ok(['counted', 'counted', 'graduated'].every((r, i) => KMc.mark(b, 'u1|w|x|臺南', true, null, 1300 + i) === r) && same(b['u1|w|x|臺南'], { d: 1, w: 2, t: 1200, u: 1302 }), 'mk: 3 correct in a row → graduated tombstone {d:1}: ' + C(b['u1|w|x|臺南']));
  ok(KMc.mark(b, 'u1|w|x|臺南', true, null, 1400) === null && KMc.liveList(b).length === 0, 'mk: graduated item no longer listed; correct answers ignored');
  ok(KMc.mark(b, 'u1|w|x|臺南', false, { u: 'u1', k: 'w', s: 's', a: '臺南' }, 1500) === 'added' && b['u1|w|x|臺南'].w === 3 && !b['u1|w|x|臺南'].d, 'mk: wrong after graduating → back in the book, w keeps counting');
  KMc.mark(b, 'n2|a|n2-a1', false, { u: 'n2', k: 'a', s: '單元二 › 第一個大分支 › ___', a: '花' }, 1600);
  ok(KMc.liveList(b).map(e => e.id).join(';') === 'n2|a|n2-a1;u1|w|x|臺南' && KMc.liveList(b, 'u1').length === 1 && KMc.liveList(b, 'n2')[0].p.a === '花', 'mk: liveList newest first, unit filter by p.u');
  ok(KMc.mark(b, 'n2|a|n2-a1', true, null, 10) === 'counted' && b['n2|a|n2-a1'].u === 1601, 'mk: clock behind → u still moves forward (later event wins locally)');
  // 同步合併：聯集；畢業墓碑不被別台舊的救回；同一題答錯次數取較大
  const live = (w, t, c) => ({ c: c || 0, w, t, u: t, p: { u: 'u1', k: 'q', s: 'Q', a: 'A' } });
  const A = { mk: { social: { q1: live(2, 100), q2: { d: 1, w: 3, t: 50, u: 300 } }, math: { 'eq:x+5=12': { c: 1, w: 1, t: 10, u: 20, p: { q: 'x+5=12' } } } } };
  const B = { mk: { social: { q1: live(5, 90), q2: live(1, 200), q3: live(1, 400) }, ai: { 'ask-well|1': live(1, 5) } } };
  const Cc = { mk: { social: { q3: { d: 1, w: 1, t: 400, u: 500 } }, science: { 'n1|w|p|太陽': live(1, 7) } } };
  const AB = SM.merge(A, B).mk;
  ok(Object.keys(AB).join() === 'social,science,math,ai'.split(',').filter(s => AB[s]).join() && AB.social.q1.w === 5 && AB.social.q1.t === 100 && AB.social.q3 && AB.math['eq:x+5=12'] && AB.ai['ask-well|1'], 'mk merge: union across subjects, newer entry wins, w = max: ' + C(AB.social.q1));
  ok(AB.social.q2.d === 1 && AB.social.q2.w === 3, 'mk merge: graduated tombstone (newer) beats the old live copy → not resurrected');
  ok(SM.merge(SM.merge(A, B), Cc).mk.social.q3.d === 1, 'mk merge: graduated on another device propagates');
  ok(same(SM.merge({ mk: { social: { q: live(1, 900) } } }, { mk: { social: { q: { d: 1, w: 4, t: 1, u: 800 } } } }).mk.social.q, Object.assign(live(1, 900), { w: 4 })), 'mk merge: wrong again after graduating (newer) wins, w = max(1,4)');
  props(A, B, Cc, 'mk');
  // 跟 kids-mistakes.js 的整理規則一致（本機存的 = 同步文件裡的）
  const garbage = { social: { ok: live(1, 5), _x: live(1, 5), '': live(1, 5), bad: 7, neg: { c: -3, w: 0, t: 'x' } }, chinese: { a: live(1, 1) }, math: [] };
  ok(same(SM.normMk(garbage), KMc.normAll(garbage)) && same(SM.mergeMk(A.mk, B.mk), KMc.mergeAll(A.mk, B.mk)) && !SM.normMk(garbage).chinese && SM.normMk(garbage).social.neg.w === 1, 'mk: syncmerge normMk/mergeMk === kids-mistakes _core: ' + C(SM.normMk(garbage)));
  // 墓碑每科最多 300 筆（留最新的）；新舊版相容：v3 文件沒有 mk → 空；舊版裝置 PUT 回去少了 mk → 新版從本機補回
  const tomb = {}; for (let i = 0; i < 400; i++) tomb['q' + i] = { d: 1, w: 1, t: i, u: i };
  const tn = SM.normMk({ ai: tomb }).ai;
  ok(Object.keys(tn).length === SM.MK_DEL && tn.q399 && !tn.q99 && tn.q100, 'mk: tombstones capped at 300 newest');
  ok(same(SM.normalize({ v: 3, log: [], mm: {} }).mk, {}), 'mk: v3 doc → empty mk');
  const full4 = SM.merge(A, devA), strip3 = d => { const n = SM.normalize(d), o = Object.assign({}, n, { v: 3 }); delete o.mk; return o; };
  ok(same(SM.merge(full4, strip3(full4)), full4), 'mk: old v3 device strips mk → newer device restores from local');
  // 兩台輪流 syncOnce：錯題一致（含墓碑）
  (async () => {
    const remote = { doc: { v: 1, log: [], learned: {}, mistakes: {} }, etag: 0 };
    const io = dev => ({ get: async () => ({ doc: JSON.parse(JSON.stringify(remote.doc)), etag: remote.etag }), put: async (c, d, e) => { if (e !== remote.etag) return { conflict: true }; remote.doc = JSON.parse(JSON.stringify(d)); remote.etag++; return {}; },
      readLocal: () => dev.local, writeLocal: d => { dev.local = d; } });
    const X = { local: SM.normalize(A) }, Y = { local: SM.normalize(B) };
    for (let i = 0; i < 3; i++) { await SM.syncOnce(io(X), 'K'); await SM.syncOnce(io(Y), 'K'); }
    ok(same(X.local.mk, Y.local.mk) && X.local.mk.social.q2.d === 1 && X.local.mk.social.q1.w === 5 && Object.keys(X.local.mk).length === 3, 'mk syncOnce: two devices converge, tombstone kept, w max');
  })().catch(e => { console.error(e); process.exit(1); });
  // 文件大小：四科都塞滿（每科 300 題＋300 墓碑、p 是長句）也遠小於 1MB
  const big4 = {}; KMc.SUBJ.forEach(s => { const bk = {}; for (let i = 0; i < 300; i++) { bk[s + 'L' + i] = { c: 2, w: 9, t: 1.8e12, u: 1.8e12, p: { u: 'u1', k: 'w', pid: 'u1-l1-t1-p3', ci: 2, a: '荷蘭東印度公司', s: '十七世紀荷蘭東印度公司為了和中國、日本貿易，在臺灣南部建立據點並修築熱蘭遮城' } }; bk[s + 'D' + i] = { d: 1, w: 9, t: 1.8e12, u: 1.8e12 }; } big4[s] = bk; });
  const mkBytes = SM.bytes(SM.normMk(big4));
  ok(mkBytes < 450 * 1024, 'mk at maximum stays well under the 1MB server limit: ' + mkBytes + ' B');
  // 頁面：每科頁有 📕 錯題庫卡、各頁載入 kids-mistakes.js、練錯題送 practice_round <科>:mistakes
  const sjm = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
  ok(/MK_SUBJ = \['social', 'science', 'math', 'ai'\]/.test(sjm) && sjm.includes("icon: '📕'") && sjm.includes('mistakes-go') && sjm.includes('math/balance.html?mistakes=1') && sjm.includes('?mistakes=1'), 'subjects.js: 錯題庫 tiles + routes');
  [['index.html', 'kids-mistakes.js'], ['mindmap/social.html', '../kids-mistakes.js'], ['mindmap/science.html', '../kids-mistakes.js'], ['math/balance.html', '../kids-mistakes.js'], ['math/short-division.html', '../kids-mistakes.js'], ['math/multiples.html', '../kids-mistakes.js'], ['math/multiply.html', '../kids-mistakes.js'], ['ai/ask-well.html', '../kids-mistakes.js'], ['ai/hallucinate.html', '../kids-mistakes.js'], ['ai/secrets.html', '../kids-mistakes.js']]
    .forEach(([f, s]) => ok(new RegExp('<script src="' + s.replace(/[.]/g, '\\.') + '(\\?v=[0-9a-f]+)?"></script>').test(fs.readFileSync(path.join(root, f), 'utf8')), f + ' loads kids-mistakes.js'));   // 部署夾有 ?v=<雜湊>（deploy_copy 防快取）
  const idxh = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  ok(idxh.indexOf('kids-mistakes.js') < idxh.indexOf('subjects.js'), 'index: kids-mistakes.js before subjects.js');
  const balh = fs.readFileSync(path.join(root, 'math', 'balance.html'), 'utf8');
  ok(balh.indexOf('kids-mistakes.js') < balh.indexOf('var MK = '), 'balance: kids-mistakes.js loads before the page script');
  ok(balh.includes("item:'math:mistakes'") && fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8').includes("item: 'ai:mistakes'") && fs.readFileSync(path.join(root, 'mindmap', 'mindmap.js'), 'utf8').includes("coinRound(QZ.mk ? 'mistakes' : 'quiz'"), 'practice_round <科>:mistakes sent by each practice');
  // 短除法（2026-10-14）：換你算送 practice_round math:gcd、錯題 type 'gcd'、只練錯題路由；前端白名單收 math:gcd
  const sdh = fs.readFileSync(path.join(root, 'math', 'short-division.html'), 'utf8');
  ok(sdh.includes("item: T.mk ? 'math:mistakes' : 'math:gcd'") && sdh.includes("type: 'gcd'") && sdh.includes("KidsAuth.startActivity('math'") && sdh.includes('requireLogin') && sdh.includes("KidsCoins.answer(!!ok, 'math')") && /<script src="short-division\.js(\?v=[0-9a-f]+)?"><\/script>/.test(sdh), 'short-division: coins / auth / mistakes wiring');
  ok(sjm.includes('math/short-division.html?mistakes=1') && fs.readFileSync(path.join(root, 'kids-coins.js'), 'utf8').includes('|math:gcd|math:gcdword)$/'), 'short-division mistakes route + math:gcd／math:gcdword whitelisted in kids-coins');
  // 短除法應用題（2026-10-14）：分頁、送 practice_round math:gcdword、錯題 type 'gcdword'、錯題庫路由 ?mistakes=word、前端白名單；模板正確性見 test/gcd-word.test.js
  ok(sdh.includes('id="tab-word"') && sdh.includes("item: W.mk ? 'math:mistakes' : 'math:gcdword'") && sdh.includes("type: 'gcdword'") && sdh.includes('我會了，直接填答案') && /<script src="gcd-word\.js(\?v=[0-9a-f]+)?"><\/script>/.test(sdh) && sdh.indexOf('short-division.js') < sdh.indexOf('gcd-word.js'), 'short-division: 應用題 tab wiring (gcd-word.js after short-division.js)');
  ok(sjm.includes('math/short-division.html?mistakes=word') && fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8').includes("p.type === 'gcdword' ? '應用題'") && balh.includes("e.p.type === 'gcdword'"), '應用題 mistakes: route + badge + balance「接著練」counts gcdword');
  {
    const CK = require(path.join(root, 'kids-coins.js'))._core, ev = it => ({ event_id: 'e-1', type: 'practice_round', item: it, correct: 4, total: 5 });
    ok(CK.validEvent(ev('math:gcdword')) && CK.validEvent(ev('math:gcd')) && !CK.validEvent(ev('math:gcdword:x')) && !CK.validEvent(ev('math:word')), 'kids-coins: math:gcdword valid, look-alikes not');
    const GWm = require(path.join(root, 'math', 'gcd-word.js'));
    ok(GWm.T.length === 13 && GWm.T.every(t => { const p = GWm.make(t.id, 'basic'); return p && p.keys.length >= 2 && GWm.build(p.tid, p.v).id === p.id; }), 'gcd-word: 13 templates build + rebuild');
  }
  // 倍數與公倍數＋乘法快算（2026-10-21）：送 practice_round math:multiples／math:multiples-test／math:multiply、錯題 type 'multiples'／'multiply'、錯題庫路由、前端白名單；
  // 出題正確性見 test/multiples.test.js、test/multiply.test.js
  {
    const muh = fs.readFileSync(path.join(root, 'math', 'multiples.html'), 'utf8'), mxh = fs.readFileSync(path.join(root, 'math', 'multiply.html'), 'utf8'), kmj = fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8');
    ok(muh.includes("coinReport(P.mk ? 'math:mistakes' : 'math:multiples'") && muh.includes("coinReport('math:multiples-test'") && muh.includes("KidsCoins.answer(!!ok, 'math')") && muh.includes("KidsAuth.startActivity('math'") && muh.includes('requireLogin') &&
      muh.includes("doneRec('mp', P.group") && muh.includes("doneRec('mp', 'test'") && muh.includes("KidsDone.mount(el, 'math:mul'"), 'multiples.html: coins / auth / done wiring');
    ok(/<script src="multiply\.js(\?v=[0-9a-f]+)?"><\/script>\s*<script src="multiples\.js(\?v=[0-9a-f]+)?"><\/script>/.test(muh) && /<script src="short-division\.js(\?v=[0-9a-f]+)?"><\/script>/.test(muh), 'multiples.html loads short-division.js, multiply.js → multiples.js');
    ok(mxh.includes("coinReport(R.mk ? 'math:mistakes' : 'math:multiply'") && mxh.includes("KidsCoins.answer(!!ok, 'math')") && mxh.includes("KidsAuth.startActivity('math'") && mxh.includes('requireLogin') && mxh.includes("KidsDone.record('mx', R.lv") && mxh.includes("KidsDone.mount(el, 'math:mx'") && mxh.includes("type: 'multiply'") && /<script src="multiply\.js(\?v=[0-9a-f]+)?"><\/script>/.test(mxh), 'multiply.html: coins / auth / done / mistakes wiring');
    ok(sjm.includes('math/multiples.html?mistakes=1') && sjm.includes('math/multiply.html?mistakes=1') && kmj.includes("p.type === 'multiples' ? '倍數'") && kmj.includes("p.type === 'multiply' ? '乘法'") && kmj.includes('function mathMore(') && balh.includes("KidsMistakes.mathMore(['multiples', 'multiply'])") && sdh.includes("t !== 'multiples' && t !== 'multiply'"), 'multiples／multiply mistakes: routes + badges + 接著練 links; 天平 count excludes them');
    const CK = require(path.join(root, 'kids-coins.js'))._core, ev = it => ({ event_id: 'e-1', type: 'practice_round', item: it, correct: 4, total: 5 });
    ok(['math:multiples', 'math:multiples-test', 'math:multiply'].every(it => CK.validEvent(ev(it))) && ['math:multiple', 'math:multiples-tests', 'math:multiply:x', 'math:test', 'english:multiply'].every(it => !CK.validEvent(ev(it))), 'kids-coins: math:multiples／multiples-test／multiply valid, look-alikes not');
    // 練習卷第一回、第二回線上考試（2026-10-21）：multiples-papers.js 接在 multiples.js 後面；考試選單三選一；練習卷分數記 mp.p1／p2；錯題先用原卷題目重做
    ok(/<script src="multiples\.js(\?v=[0-9a-f]+)?"><\/script>\s*<script src="multiples-papers\.js(\?v=[0-9a-f]+)?"><\/script>/.test(muh) && muh.includes("pick('e-go', '🎲', '隨機考卷（每次不同）'") &&
      muh.includes("doneRec('mp', E.mode, R.total)") && muh.includes('MULP.fromMistake(e.p)) || M.fromMistake(e.p)') && muh.includes('常見錯誤提醒'), 'multiples.html: 考試三選一（隨機／第一回／第二回）＋練習卷分數＋錯題原卷重做');
    ok(SM.MP_K.includes('p1') && SM.MP_K.includes('p2'), 'syncmerge: done.mp 收 p1、p2（練習卷各回最高分）');
    require('./multiples.test.js'); require('./multiply.test.js'); require('./multiples-papers.test.js');
  }
  ok(!/['"]ke_mistakes['"]/.test(fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8')) && fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8').includes("KEY = 'kids_mistakes'"), 'kids_ prefix key; English ke_mistakes untouched');
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
ok(idx.indexOf('syncmerge.js') < idx.indexOf('syncauto.js') && idx.indexOf('syncauto.js') < idx.indexOf('sync.js') && idx.indexOf('sync.js') < idx.indexOf('app.js'), 'syncmerge.js → syncauto.js → sync.js → app.js (sync card renders on first paint)');
['account.html', 'mindmap/social.html', 'mindmap/science.html', 'math/balance.html', 'math/short-division.html', 'math/multiples.html', 'math/multiply.html'].forEach(f => { const h = fs.readFileSync(path.join(root, f), 'utf8'), a = h.search(/src="(\.\.\/)?syncauto\.js(\?v=[0-9a-f]+)?"/), s = h.search(/src="(\.\.\/)?sync\.js(\?v=[0-9a-f]+)?"/); ok(h.search(/src="(\.\.\/)?syncmerge\.js(\?v=[0-9a-f]+)?"/) < a && a >= 0 && a < s, f + ' loads syncmerge.js → syncauto.js → sync.js'); });
const sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
['國語', '數學', '社會', '自然', '英文', "n: 'AI'", '遊戲', '#s/', 'math/balance.html', '準備中，敬請期待', '← 回'].forEach(t => ok(sj.includes(t), 'subjects.js has ' + t));
ok((sj.match(/\{ k: '[a-z]+', n: /g) || []).length === 7, '7 subject tabs');

// ---- AI 與 遊戲（Scratch 塔防）：檔案存在、非空；活動卡片的 src 都找得到 ----
const nonEmpty = rel => { const p = path.join(root, rel); return fs.existsSync(p) && fs.statSync(p).size > 0; };
['ai/hallucinate.html', 'ai/ask-well.html', 'ai/secrets.html', 'game/scratch-td/web/index.html', 'game/scratch-td/web/start.sb3']
  .concat([1, 2, 3, 4, 5, 6, 7].flatMap(i => [`game/scratch-td/web/lesson${i}.html`, `game/scratch-td/web/lesson${i}-done.sb3`]))
  .forEach(rel => ok(nonEmpty(rel), rel + ' exists and is non-empty'));
// 寫死 src 的活動卡（數學 4〔天平、短除法 2026-10-14、倍數與公倍數＋乘法快算 2026-10-21〕、AI 3、Scratch 1）共 8 張；社會、自然的單元卡由 MM_UNITS 產生（src 是樣板字串，不算在這 5 張裡），下面另外檢查
const srcs = [...sj.matchAll(/src: '([^']+)'/g)].map(m => m[1]);
// ＋1 張不列卡片的 hidden 入口（2026-10-20 課程地圖「短除法：應用題」→ math/short-division.html?tab=word）
// 2026-10-21：數學多 2 張卡（倍數與公倍數 math/multiples.html、乘法快算 math/multiply.html）→ 8 張卡＋1 個 hidden 入口＝9 個 src
ok(srcs.length === 9 && (sj.match(/hidden: true/g) || []).length === 1, 'activity cards: ' + srcs.length);
srcs.forEach(s => ok(nonEmpty(s.split('?')[0]), 'activity src exists: ' + s));

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
  [...h.matchAll(/src="([^"]+)"/g)].map(m => m[1].replace(/\?v=[0-9a-f]+$/, '')).forEach(s => ok(nonEmpty(path.join('mindmap', s)), `mindmap/${k}.html script exists: ${s}`));
  const dataSrc = [...h.matchAll(/src="(data\/[^"?]+)(\?v=[0-9a-f]+)?"/g)].map(m => fs.readFileSync(path.join(root, 'mindmap', m[1]), 'utf8')).join('\n');
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

// ---- 單元完成＋課程地圖（2026-10-20）：completion.js 判定、kids-done.js 補存＋頁首橫幅、map.html；規則細節在 test/completion.test.js ----
{
  ['completion.js', 'kids-done.js', 'map.html'].forEach(f => ok(nonEmpty(f), f + ' exists'));
  const loads = (f, pre) => { const h = fs.readFileSync(path.join(root, f), 'utf8'), at = s => h.search(new RegExp('<script src="' + (pre + s).replace(/[.]/g, '\\.') + '(\\?v=[0-9a-f]+)?"></script>'));
    return at('syncmerge.js') >= 0 && at('syncmerge.js') < at('completion.js') && at('completion.js') < at('kids-done.js'); };
  [['index.html', ''], ['map.html', ''], ['mindmap/social.html', '../'], ['mindmap/science.html', '../'], ['math/balance.html', '../'], ['math/short-division.html', '../'], ['math/multiples.html', '../'], ['math/multiply.html', '../'], ['ai/hallucinate.html', '../'], ['ai/ask-well.html', '../'], ['ai/secrets.html', '../']]
    .forEach(([f, pre]) => ok(loads(f, pre), f + ' loads syncmerge.js → completion.js → kids-done.js'));
  ['ai/hallucinate.html', 'ai/ask-well.html', 'ai/secrets.html'].forEach(f => { const h = fs.readFileSync(path.join(root, f), 'utf8'); ok(h.includes("KidsDone.record('ai'") && h.includes('KidsDone.mount(') && h.includes('id="kdone"'), f + ': records 玩完 + banner'); });
  const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8'), mmJs2 = fs.readFileSync(path.join(root, 'mindmap', 'mindmap.js'), 'utf8'), sdH = fs.readFileSync(path.join(root, 'math', 'short-division.html'), 'utf8'), balH = fs.readFileSync(path.join(root, 'math', 'balance.html'), 'utf8');
  ok(appJs.includes("KidsDone.record('tb', Q.cfg.tb") && appJs.includes("KidsDone.mount($('#kdb'), 'tb:'") && appJs.includes('href="map.html"'), 'app.js: exam score saved, textbook banner, home 課程地圖 tile');
  ok(mmJs2.includes("doneRec('czFirst', Math.round(first / s.n * 100))") && !mmJs2.includes("doneRec('cz',") && mmJs2.includes("doneRec('qz'") && mmJs2.includes("'mm:' + pk(u.id)"), 'mindmap.js: 考考自己存第一次答對率（czFirst）／練習題 best saved, banner');
  ok(/function blankRetry\(\)\{ var k = popKey; czMiss\(k\);/.test(mmJs2) && /function blankShow\(\)\{[^}]*czMiss\(popKey\)/.test(mmJs2) && mmJs2.includes('b.tries = (b.tries || 0) + 1; czMiss(popKey);'), 'mindmap.js: 再答一次／看答案／答錯 → 那格不算第一次答對');
  ok(sdH.includes("KidsDone.record('sd', T.lv") && sdH.includes("KidsDone.record('gw', W.lv") && sdH.includes("'math:gw' : 'math:sd'") && balH.includes("KidsDone.record('bal'") && balH.includes("'math:balance'"), 'math pages: records + banners');
  ok(fs.readFileSync(path.join(root, 'account.html'), 'utf8').includes('href="map.html"'), 'account.html: 課程地圖 entry');
  const syncJs = fs.readFileSync(path.join(root, 'sync.js'), 'utf8');
  ok(syncJs.includes("K_DONE = 'kids_done'") && syncJs.includes('done: ld(K_DONE, {})') && /WATCH = \[[^\]]*K_DONE\]/.test(syncJs), 'sync.js: kids_done synced (read, write, watch)');
  require('./completion.test.js');
}

ok(E.itemSet('word:may-month').length === 5 && E.itemSet('word:may').length === 5 && E.get('w:may-month:zh2en').answer === 'May' && E.get('w:may:zh2en').answer === 'may', 'May / may keep separate ids');
console.log(`bank build: engine ${msEngine.toFixed(0)} ms, all ${allQs.length} questions ${msBank.toFixed(0)} ms`);
console.log(`OK  ${checks} checks | words ${W.length} (lv ${lvCount.join('/')}/${W800.length}) | phrases ${PH.length} (${[1, 2, 3].map(l => PH.filter(p => p.lv === l).length).join('/')}) | roots ${R.length} | grammar ${G.length} (${G.reduce((s, g) => s + g.q.length, 0)} q) | patterns ${P.length} | questions ${E.meta.length}`);
console.log('pool per type:', JSON.stringify(counts));
