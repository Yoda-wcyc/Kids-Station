/* 🎤 口語對話考試（data/oral.js，每兩課一份 100 題）檢查：node test/oral.test.js
   每一份題庫：
   1. 100 題：難度 40／40／20、照難度排序、題目不重複、難度 1 沒提示、2／3 有提示且提示不寫英文（人名 Amy、Ben 除外）
   2. 用字範圍：題目、參考答案、關鍵字的每個英文字都在「這兩課收錄的內容」＋基礎字裡；超出的要列在 OK_EXTRA（逐一確認過、寫理由）
   3. 判分：每個參考答案判對（___ 開放欄：類別關鍵字＝填同類的字才對，其他＝原樣、填什麼都對）；「banana」判錯；各份抽查的錯答判錯
   4. E.tbOral：一次 20 題、難度 1×8 → 2×8 → 3×4 由易到難、題目不重複、每題 5 分、每次不一樣 */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
['words', 'words-2', 'words-3', 'words-4', 'words-5', 'words-6', 'words-7', 'phrases', 'phrases-2', 'roots', 'grammar', 'patterns', 'patterns-2', 'textbook', 'oral']
  .forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctx, { filename: n + '.js' }));
const Wd = ctx.window, KE = require(path.join(root, 'engine.js'));
const E = new KE.Engine({ words: Wd.DATA_WORDS, phrases: Wd.DATA_PHRASES, roots: Wd.DATA_ROOTS, grammar: Wd.DATA_GRAMMAR, patterns: Wd.DATA_PATTERNS, textbook: Wd.DATA_TEXTBOOK });
let checks = 0; const ok = (c, m) => { checks++; assert.ok(c, m); };
const BANKS = Wd.DATA_ORALS;
// 基礎字：代名詞、指示詞、be／do 動詞、冠詞、連接詞、介系詞、疑問詞、yes／no、too、課本人物名 Amy／Ben（五年級前就會的）
const BASIC = 'i you he she it we they me my your his her a an the this that these those and or not no yes too is are am do does have on in at to of what when who where how can let s please amy ben'.split(' ');
// 課本例句以外、逐一確認過可以用的字（理由）。has 在五上 U2 文法重點「不能用 has」裡、算範圍內；
// 出自本課單字例句的字（favorite、like、bye…）跑的時候會列出備查
const OK_EXTRA = {};
const toks = s => KE.expandContr(String(s)).toLowerCase().replace(/_+/g, ' ').split(/[^a-z]+/).filter(Boolean);
const ok20 = {};

BANKS.forEach(B => {
  const QS = B.qs, UNITS = B.units, tag = ` [${B.key}]`;
  ok(B.units.length === 2 && B.labels.length === 2 && B.title && B.file && B.scope && B.note, 'bank meta' + tag);
  // ---- 1. 題目 ----
  ok(QS.length === 100 && QS.every((o, i) => o.n === i + 1), '100 questions numbered 1..100' + tag);
  const cnt = [1, 2, 3].map(l => QS.filter(o => o.lv === l).length);
  ok(cnt.join() === '40,40,20', 'difficulty 40/40/20: ' + cnt + tag);
  ok(QS.every((o, i) => !i || o.lv >= QS[i - 1].lv), 'sorted easy → hard' + tag);
  const sig = QS.map(o => o.q + '｜' + (o.zh || ''));
  ok(new Set(sig).size === 100, 'no duplicate question (examiner line + hint): ' + sig.filter((s, i) => sig.indexOf(s) !== i) + tag);
  ok(QS.every(o => o.lv === 1 ? !o.zh : o.zh && /[一-鿿]/.test(o.zh)), 'lv1 no hint; lv2/3 Chinese hint' + tag);
  ok(QS.every(o => !o.zh || !/[A-Za-z]/.test(o.zh.replace(/\b(Amy|Ben)\b/g, ''))), 'hints never contain English (except the names Amy, Ben)' + tag);
  ok(QS.every(o => o.a.length && o.k.length && o.k.every(k => k && !k.includes('___')) && [1, 2, 12].includes(o.u) && UNITS.includes(o.tb)), 'answers / keys / unit shape' + tag);
  ok(QS.filter(o => o.lv === 1).every(o => o.a.some(a => /___/.test(a)) || o.a.length >= 2), 'lv1: fixed pattern with open blank, choices or yes/no pair' + tag);
  ok(QS.filter(o => o.lv === 3).every(o => o.k.length >= 2), 'lv3: at least two key points (two parts / own question)' + tag);
  ok(QS.filter(o => o.f).every(o => o.lv === 3), 'examiner follow-up lines only in lv3' + tag);
  const byQ = {}; QS.forEach(o => { byQ[o.q] = (byQ[o.q] || 0) + 1; });
  ok(Object.values(byQ).every(n => n <= 4), 'same examiner line at most 4 times (different situations): ' + JSON.stringify(Object.entries(byQ).filter(([, n]) => n > 2)) + tag);
  ok(QS.every(o => o.a.every(a => !/n't|\b(It|What|He|She|There|Where)'s|I'm|'re\b/.test(a) || o.a.includes(a.replace(/\b(\w+)n't\b/g, '$1 not').replace(/\b(It|What|He|She|There|Where)'s\b/g, '$1 is').replace(/\bI'm\b/g, 'I am').replace(/\b(We|They|You)'re\b/g, '$1 are')))), 'every contracted answer also listed expanded' + tag);

  // ---- 2. 用字範圍 ----
  const core = new Set(), ex = new Set();
  const addC = s => toks(s).forEach(t => core.add(t)), addE = s => toks(s).forEach(t => ex.add(t));
  const has = x => (x.tb || []).some(t => UNITS.includes(t));
  Wd.DATA_WORDS.filter(has).forEach(w => { addC(w.w); addE(w.ex); });
  Wd.DATA_PHRASES.filter(has).forEach(p => { addC(p.p); addE(p.ex); });
  Wd.DATA_PATTERNS.filter(has).forEach(p => p.ex.concat(p.extra || [], p.typed || []).forEach(e => [e.en].concat(e.alts || []).forEach(addC)));
  Wd.DATA_GRAMMAR.filter(has).forEach(g => { g.rules.forEach(addC); g.ex.forEach(e => addC(e.en)); });
  Wd.DATA_TEXTBOOK.filter(u => UNITS.includes(u.id)).forEach(u => {
    (u.sents || []).forEach(x => [x.en].concat(x.alts || []).forEach(addC));
    (u.replies || []).forEach(r => [r.q, r.en].concat(r.alts || []).forEach(addC));
    (u.qa || []).forEach(x => { addC(x.q); addC(x.a); });
    (u.grammar || []).forEach(id => { const g = Wd.DATA_GRAMMAR.find(x => x.id === id); if (g && (g.tb || []).length) g.q.forEach(q => addC(q.s || q.right || '')); });
    if (u.dialog) { u.dialog.lines.forEach(l => { addC(l.who); addC(l.en); }); (u.dialog.choose || []).forEach(c => c.options.concat(c.prompt).filter(s => !/[一-鿿]/.test(s)).forEach(addC)); }
  });
  const used = new Map();
  QS.forEach(o => [o.q, o.f || ''].concat(o.a, o.k.flatMap(k => k.split('|'))).forEach(s => toks(s).forEach(t => { if (!used.has(t)) used.set(t, new Set()); used.get(t).add(o.n); })));
  const outside = [...used.keys()].filter(t => !core.has(t) && !BASIC.includes(t));
  const fromEx = outside.filter(t => ex.has(t)), none = outside.filter(t => !ex.has(t));
  const show = ts => ts.map(t => `${t}（第 ${[...used.get(t)].join('、')} 題）`).join('；');
  console.log(`${B.title}：用到的英文字 ${used.size} 個；本課單字／片語例句裡的字（範圍內，列出備查）：${show(fromEx) || '無'}`);
  console.log(`${B.title}：完全超出兩課範圍：${show(none) || '無'}`);
  ok(none.every(t => OK_EXTRA[t]), 'words outside the two units must be confirmed in OK_EXTRA: ' + none.filter(t => !OK_EXTRA[t]) + tag);

  // ---- 3. 判分 ----
  const qOf = o => E.get(`tb:${o.tb}:oral:${o.n}`);
  QS.forEach(o => {
    const q = qOf(o);
    ok(q && q.type === 'speak' && q.input === 'mic' && q.oral && q.speakText === o.q && q.speakMode === 'keys' && E.byId[q.id].setOnly && E.byId[q.id].module === 'textbook', 'registered as 🎤 set-only ' + o.n + tag);
    // ___ 開放欄：類別關鍵字（kz 換成「任一個…」的）要填同類的字才對（用類別的第一個字來填）；其他題 ___ 原樣、填什麼都對
    const cls = o.k.filter((k, i) => o.kz[i] !== k), fills = cls.length ? cls.map(k => k.split('|')[0]) : ['Monday', 'art'];
    o.a.forEach(a => {
      const f = a.includes('___') ? fills.filter(w => E.check(q, a.replace(/___/g, w)).ok) : fills;
      ok(cls.length ? f.length >= 1 && E.check(q, a).ok === !a.includes('___') : E.check(q, a).ok && f.length === fills.length, `answer passes (blank open): #${o.n} ${a} → ${f}` + tag);
      const a1 = a.replace(/___/g, f[0]);
      ok(E.check(q, a1.replace(/[.,!?]/g, '').toLowerCase()).ok, `recognizer style (no punctuation, lower case): #${o.n}` + tag);
      ok(E.check(q, ['banana', a1]).ok && E.check(q, ['banana', a1]).at === 1, `alternatives: second one matches #${o.n}` + tag);
    });
    ok(!E.check(q, 'banana').ok && !E.check(q, ['banana', 'bananas', '']).ok && !E.check(q, '').ok, 'unrelated answer fails #' + o.n + tag);
  });
  const N = n => qOf(QS[n - 1]), NO = (n, a) => ok(!E.check(N(n), a).ok, `wrong answer fails: #${n} ${a}` + tag), YES = (n, a) => ok(E.check(N(n), a).ok, `answer passes: #${n} ${a}` + tag);
  if (B.key === '5-u12') {
    [[11, 'Yes, he does.'], [15, 'Yes, she does.'], [15, 'Yes, he do.'], [3, 'Yes, it does.'], [41, "It's Tuesday."], [45, 'No, it isn\'t.'], [46, "No, it isn't. It's Thursday."],
      [57, 'Yes, I do.'], [87, 'Do he have art class on Tuesday?'], [87, 'Does he have art class on Monday?'], [83, 'No, I don\'t.'], [90, 'Sure, follow me.'], [100, 'Have a good time!'], [94, 'I have art class.'],
      [25, 'On.'], [25, 'I have English class.'], [41, 'Thursday.'], [67, 'Monday.'], [32, 'Art.'], [70, 'Music.']].forEach(([n, a]) => NO(n, a));
    ['Do you have P.E. class today?', 'do you have pe today'].forEach(a => YES(98, a));
    ['Monday.', 'monday', 'On Monday.', 'I have English class on Monday.'].forEach(a => YES(25, a)); // When…? 只說星期／on＋星期／完整句（難度 1 開放，哪一天都可以）
    ['Wednesday.', "It's Wednesday."].forEach(a => YES(41, a)); ['Tuesday.', 'On Tuesday.'].forEach(a => YES(67, a)); // 難度 2 短答要是對的那一天
    ['Art.', 'art class', 'I have music class.'].forEach(a => YES(29, a)); YES(32, 'Math.'); YES(70, 'Science.');
    [[11, 'No, I do not.'], [1, 'It is Friday.'], [1, "it's friday"], [92, 'My favorite day is Friday. What is your favorite day?'], [13, "no I don't"]].forEach(([n, a]) => YES(n, a));
  }
  if (B.key === '5-u34') {
    [[1, 'Monday.'], [6, 'On Monday.'], [10, 'Yes, I do.'], [11, 'Yes, he is.'], [20, 'Lions.'], [25, 'Yes, it is.'], [30, 'Yes, he do.'], [30, 'Yes, she does.'], [41, 'To the bank.'], [46, 'On Blue Street.'],
      [56, 'There are four lions.'], [57, 'Two.'], [66, 'No, she does not. She likes horses.'], [66, 'No, she doesn\'t. She likes zebra.'], [72, 'I like lions.'], [87, 'Where is he going?'], [91, 'Does he like horses?']].forEach(([n, a]) => NO(n, a));
    [[1, 'To the library.'], [1, "I'm going to the museum."], [6, 'Blue Street.'], [6, 'It is on Red Street.'], [10, "No, I'm not."], [20, 'There are 3 lions.'], [20, 'Nine.'], [41, 'The library.'],
      [46, 'It is on Green Street.'], [56, '3.'], [57, "There's one koala."], [66, 'No, she does not. She likes zebras.'], [72, 'Tigers.'], [99, 'Cheese! 1, 2, 3!']].forEach(([n, a]) => YES(n, a));
  }

  // ---- 4. 線上一次 20 題（兩個單元都有入口、抽同一份題庫）----
  const seen = new Set();
  for (let k = 0; k < 200; k++) UNITS.forEach(U => {
    const ex20 = E.tbOral(U), lv = ex20.map(q => E.byId[q.id].lv), ns = ex20.map(q => E.byId[q.id].n);
    ok(ex20.length === 20 && lv.join('') === '11111111222222223333' && ns.every((n, i) => !i || lv[i] !== lv[i - 1] || n > ns[i - 1]), 'tbOral 8/8/4 easy → hard ' + lv.join('') + tag);
    ok(new Set(ex20.map(q => q.id)).size === 20 && ex20.every(q => q.type === 'speak' && q.oral && q.pts === 5 && q.sec && E.byId[q.id].topic === q.id.split(':')[1] && UNITS.includes(E.byId[q.id].topic)), 'tbOral unique / speak / 5 pts / own units' + tag);
    seen.add(ns.join());
  });
  ok(seen.size > 300, 'tbOral random each time: ' + seen.size + tag);
  ok20[B.key] = cnt.join('/');
});
const withBank = new Set(BANKS.flatMap(b => b.units));
ok(Wd.DATA_TEXTBOOK.every(u => withBank.has(u.id) ? u.oral && u.oral.units.includes(u.id) : !u.oral && E.tbOral(u.id).length === 0), 'units without an oral bank → none');
ok(new Set(BANKS.map(b => b.key)).size === BANKS.length && withBank.size === BANKS.length * 2, 'each unit in at most one bank');
console.log(`oral OK  ${checks} checks | ${Object.entries(ok20).map(([k, v]) => k + ' ' + v).join(' | ')} | 線上一次 20 題 = 8/8/4`);
