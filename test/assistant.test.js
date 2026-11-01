// assistant.test.js — 🦉 學習小助理（assistant-core.js）單元測試：假資料快照 → 今日任務、弱點解法、還沒開始的、進步、鼓勵語
// 用法：node test/assistant.test.js
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL assistant:', m); } };
const KC = require(path.join(root, 'completion.js'));
const KE = require(path.join(root, 'engine.js'));
const KA = require(path.join(root, 'assistant-core.js'));
const coins = require(path.join(root, 'kids-coins.js'))._core;
const ctxD = { window: {} }; vm.createContext(ctxD);
['words', 'words-2', 'words-3', 'words-4', 'words-5', 'words-6', 'words-7', 'phrases', 'phrases-2', 'roots', 'grammar', 'patterns', 'patterns-2', 'textbook'].forEach(n => vm.runInContext(fs.readFileSync(path.join(root, 'data', n + '.js'), 'utf8'), ctxD, { filename: n + '.js' }));
const W = ctxD.window;
const DATA = { textbook: W.DATA_TEXTBOOK, words: W.DATA_WORDS, phrases: W.DATA_PHRASES, roots: W.DATA_ROOTS, grammar: W.DATA_GRAMMAR, patterns: W.DATA_PATTERNS, KE, zhCatalog: require(path.join(root, 'chinese', 'data', 'catalog.js')) };
const DAY = 864e5, NOW = Date.parse('2026-11-01T04:00:00Z');   // 台北 12:00
const snap = o => Object.assign({ now: NOW, data: DATA, ctx: {}, mk: {}, keMk: {}, seen: {}, goal: { min: 0, met: false }, rand: () => 0.5 }, o || {});
const uniq = xs => new Set(xs).size === xs.length;
const mkE = (t, p) => ({ c: 0, w: 1, t, u: t, p: p || {} });

// ---------- 路由檢查：只准指到站上真的有的頁面 ----------
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8'), subJs = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
const PAGES = new Set((/const pages = \{([^}]+)\}/.exec(appJs)[1].match(/(\w+):/g) || []).map(x => x.slice(0, -1)));
const LEARN = new Set(['words', 'phrases', 'roots', 'grammar', 'patterns'].filter(x => appJs.includes(`sub === '${x}'`) || x === 'phrases'));
const SUBJ_K = new Set([...subJs.matchAll(/\{ k: '([a-z]+)', n:/g)].map(x => x[1]));
const actIds = k => { const m = new RegExp(`\\n    ${k}: \\[([\\s\\S]*?)\\n    (?:[a-z]+: \\[|\\})|\\n    ${k}: \\[([\\s\\S]*?)\\]\\n  \\};`).exec(subJs); return m ? [...(m[1] || m[2]).matchAll(/id: '([a-z0-9-]+)'/g)].map(x => x[1]) : []; };
const ACT = { chinese: actIds('chinese'), math: actIds('math'), ai: actIds('ai'), social: KC.MM_UNITS.social.map(x => x[0]), science: KC.MM_UNITS.science.map(x => x[0]) };
const MK_SUBJ = (/const MK_SUBJ = \[([^\]]+)\]/.exec(subJs)[1].match(/'([a-z]+)'/g) || []).map(x => x.slice(1, -1));
const TB = new Set(W.DATA_TEXTBOOK.map(u => u.id));
function routeOk(href) {
  if (typeof href !== 'string' || !href) return false;
  if (/^[a-z-]+\.html$/.test(href)) return fs.existsSync(path.join(root, href));
  const m = /^index\.html(#.*)$/.exec(href); if (!m) return false;
  const h = m[1];
  let x;
  if ((x = /^#s\/([a-z]+)$/.exec(h))) return SUBJ_K.has(x[1]);
  if ((x = /^#s\/([a-z]+)\/mistakes(?:-([a-z0-9]+))?$/.exec(h))) return MK_SUBJ.includes(x[1]) && (!x[2] || (ACT[x[1]] || []).includes(x[2]));
  if ((x = /^#s\/([a-z]+)\/([a-z0-9-]+)$/.exec(h))) return (ACT[x[1]] || []).includes(x[2]);
  if ((x = /^#tb\/([^/]+)\/learn$/.exec(h))) return TB.has(x[1]);
  if ((x = /^#learn\/([a-z]+)$/.exec(h))) return LEARN.has(x[1]);
  if ((x = /^#([a-z]+)$/.exec(h))) return PAGES.has(x[1]);
  return false;
}
ok(PAGES.has('home') && PAGES.has('mistakes') && PAGES.has('tb') && ACT.math.includes('fraction') && ACT.chinese.includes('reading') && ACT.ai.includes('secrets') && MK_SUBJ.includes('science'), 'route tables parsed: ' + [...PAGES] + ' | ' + JSON.stringify(ACT) + ' | ' + MK_SUBJ);
ok(!routeOk('index.html#s/chinese/idioms') && !routeOk('index.html#s/math/nope') && routeOk('index.html#s/science/mistakes-n3') && routeOk('assistant.html'), 'routeOk sanity');
const allLinks = r => [].concat(r.tasks.map(t => t.href), r.weak.flatMap(w => [w.href, w.href2].filter(Boolean)), r.next.map(n => n.href), r.subjects.map(s => s.href), r.subjects.map(s => s.mkHref));

// ---------- 1. 新帳號：歡迎語、從各科第一單元開始、不出錯 ----------
{
  const r = KA.analyze(snap());
  ok(r.isNew && r.cheer.sit === 'welcome' && r.tasks.length === 3 && r.tasks.every(t => t.kind === 'start' && /^從〈.+〉開始$/.test(t.title) && t.min > 0) && uniq(r.tasks.map(t => t.k)), 'new: 3 start tasks, welcome: ' + JSON.stringify(r.tasks.map(t => t.title)) + ' ' + r.cheer.sit);
  ok(!r.weak.length && r.next.length === KA.RULES.NEXT_MAX && r.next.every(n => n.first), 'new: no weak, next = first units: ' + JSON.stringify(r.next));
  ok(r.subjects.length === 6 && r.subjects.map(s => s.name).join() === '國語,數學,社會,自然,英文,AI' && r.subjects.every(s => s.status === 'fresh' && s.pct === 0 && s.mistakes === 0 && s.days === null), 'new: 6 subjects fresh');
  ok(allLinks(r).every(routeOk), 'new: all links valid ' + allLinks(r).filter(h => !routeOk(h)));
  const sci = r.next.concat(r.tasks).find(x => x.k === 'science'), en = KA.analyze(snap({ now: NOW + 4 * DAY })).tasks.concat(r.tasks).find(t => t.k === 'english');
  ok(!sci || sci.href === 'index.html#s/science/n1', 'new: science starts at n1 ' + (sci && sci.href));
  ok(!en || en.href === 'index.html#tb/hanlin-5-u1/learn', 'new: english starts at 五上 U1 ' + (en && en.href));
  // 完全空的快照（沒有 data、ctx）也不能壞
  const e = KA.analyze({ now: NOW });
  ok(e.isNew && Array.isArray(e.tasks) && e.tasks.length === 3 && e.tasks.every(t => routeOk(t.href)), 'empty snapshot ok: ' + JSON.stringify(e.tasks.map(t => t.href)));
  ok(KA.analyze({}).tasks.length >= 1, 'no-arg snapshot ok');
}

// ---------- 2. 錯題多：只練錯題、弱點解法 ----------
const T1 = NOW - 3600e3;
const MANY = snap({
  mk: {
    science: Object.fromEntries([1, 2, 3, 4, 5, 6].map(i => [`n3|w|p${i}|詞${i}`, mkE(T1, { u: 'n3', k: 'w', s: '重點', a: '詞' })])),
    math: Object.fromEntries([1, 2, 3, 4, 5].map(i => [`gcdword:t${i}:12-18`, mkE(T1, { type: 'gcdword', t: 't' + i, v: [12, 18] })])),
    ai: { 'secrets|1': { d: 1, w: 2, t: T1, u: T1 } }
  },
  keMk: { 'w:apple:spell': mkE(T1), 'w:banana:gap1': mkE(T1), 'ph:watch-tv:dict': mkE(T1), 'w:cat:type': mkE(T1), 'g:modal:11:speak': mkE(T1) },
  ctx: { mmBlanks: { 'science:n3': { sess: 3, w: { 溶解: { ok: 0, wrong: 3, last: 'wrong' }, 酸性: { ok: 1, wrong: 2, last: 'wrong' }, 鹼性: { ok: 3, wrong: 1, last: 'ok' } } } } },
  wordLv: { gw: { 1: 1 } }, goal: null
});
{
  const r = KA.analyze(MANY);
  const sciT = r.tasks.find(t => t.k === 'science'), mathT = r.tasks.find(t => t.k === 'math');
  ok(sciT && sciT.kind === 'mistakes' && sciT.href === 'index.html#s/science/mistakes-n3' && /水溶液/.test(sciT.title) && /6 題/.test(sciT.title), 'many: science unit mistakes task ' + JSON.stringify(sciT));
  ok(mathT && mathT.kind === 'mistakes' && mathT.href === 'index.html#s/math/mistakes' && /5 題/.test(mathT.title), 'many: math mistakes task ' + JSON.stringify(mathT));
  ok(r.tasks.length === 3 && uniq(r.tasks.map(t => t.k)) && r.tasks.every(t => t.kind === 'mistakes'), 'many: 3 mistakes tasks, one per subject: ' + r.tasks.map(t => t.k + ':' + t.kind));
  const w0 = r.weak[0];
  ok(w0 && w0.title === '自然・水溶液' && w0.text === '錯題 6 題' && w0.sol === 'mm' && w0.href === 'index.html#s/science/n3' && w0.href2 === 'index.html#s/science/mistakes-n3' && /溶解/.test(w0.extra) && /酸性/.test(w0.extra) && !/鹼性/.test(w0.extra), 'many: weak[0] science n3 ' + JSON.stringify(w0));
  ok(w0.steps.length === 3 && /看重點/.test(w0.steps[0]) && /背架構.*第 1 關/.test(w0.steps[1]) && /只練錯題/.test(w0.steps[2]), 'many: mm solution steps ' + w0.steps);
  const mw = r.weak.find(w => w.k === 'math');
  ok(mw && mw.sol === 'mathWord' && /圈起來/.test(mw.steps[0]) && /畫/.test(mw.steps[1]) && /★/.test(mw.extra) && mw.href2 === 'index.html#s/math/short-division-word', 'many: math word solution ' + JSON.stringify(mw));
  const es = r.weak.find(w => w.sol === 'enSpell');
  ok(es && es.n === 4 && /聽發音/.test(es.steps[0]) && /拆音節/.test(es.steps[1]) && /3 次/.test(es.steps[2]) && /apple/.test(es.extra), 'many: english spelling solution ' + JSON.stringify(es));
  ok(!r.weak.some(w => w.sol === 'enSpeak') && !r.weak.some(w => w.k === 'ai'), 'many: 1 speak mistake / AI tombstone are not weak');
  ok(r.weak.length <= KA.RULES.MAX_WEAK && allLinks(r).every(routeOk), 'many: links valid ' + allLinks(r).filter(h => !routeOk(h)));
  const sci = r.subjects.find(s => s.k === 'science');
  ok(sci.mistakes === 6 && sci.status === 'push' && sci.statusText === '💪 加油中' && sci.days === 0, 'many: science status 加油中 ' + JSON.stringify(sci));
  ok(r.progress.grad === 1, 'many: graduated mistake counted this week: ' + r.progress.grad);
}
// 分數應用題 → 分數條；口說錯多 → 🐢 慢速；國語閱讀 → 證據句；計算題 → 回該頁
{
  const r = KA.analyze(snap({
    mk: { math: Object.fromEntries([1, 2, 3].map(i => [`frc:w${i}:basic:0-1-3-0-1-4`, mkE(T1, { type: 'fraction', k: 'basic', v: [0, 1, 3, 0, 1, 4], c: i })]).concat([1, 2, 3].map(i => [`mx:1${i}x7`, mkE(T1, { type: 'multiply', a: 10 + i, b: 7, lv: 'd21' })]))),
      chinese: Object.fromEntries([1, 2, 3].map(i => [`zh1-0${i}:q2`, mkE(T1, { a: 'zh1-0' + i, q: 'q2', t: '篇', s: '題', ans: '答' })])) },
    keMk: Object.fromEntries(['w:a:speak', 'ph:b-c:speak', 'tb:hanlin-5-u1:oral:3'].map(id => [id, mkE(T1)]))
  }));
  const f = r.weak.find(w => w.sol === 'mathFraction'), c = r.weak.find(w => w.sol === 'mathCalc'), sp = r.weak.find(w => w.sol === 'enSpeak'), zh = r.weak.find(w => w.sol === 'zhRead');
  ok(f && /分數條/.test(f.steps[0]) && f.href === 'index.html#s/math/fraction', 'fraction word → 分數條 ' + JSON.stringify(f));
  ok(c && c.title === '數學・乘法' && /拆解提示/.test(c.steps[0]) && c.href2 === 'index.html#s/math/multiply', 'multiply calc → 拆解提示 ' + JSON.stringify(c));
  ok(sp && /🐢/.test(sp.steps[0]) && /跟著唸/.test(sp.steps[1]) && sp.href === 'index.html#mistakes', 'speaking → 🐢 slow ' + JSON.stringify(sp));
  ok(zh && /證據句/.test(zh.steps[0]) && zh.href === 'index.html#s/chinese/mistakes', 'reading → 證據句 ' + JSON.stringify(zh));
  ok(!r.weak.some(w => w.sol === 'zhIdiom') && allLinks(r).every(routeOk), 'no idiom data → no idiom weakness; links ok');
  // 成語模組接線後才會有 cy 開頭的國語錯題 → 成語解法（連到國語錯題庫）
  const r2 = KA.analyze(snap({ mk: { chinese: Object.fromEntries([1, 2, 3].map(i => [`cy00${i}:q1`, mkE(T1, {})])) } }));
  const cy = r2.weak.find(w => w.sol === 'zhIdiom');
  ok(cy && /成語故事/.test(cy.steps[0]) && /常見誤用/.test(cy.steps[1]) && routeOk(cy.href), 'idiom mistakes → idiom solution ' + JSON.stringify(cy));
}

// ---------- 3. 很久沒練 → 複習一輪 ----------
{
  const t10 = NOW - 10 * DAY, log = [1, 2, 3].map(i => ({ t: t10 + i * 1000, id: 'w:apple:listen', m: 'words', k: 'words:fruit', y: 'listen-choose', ok: 1, a: 'apple' }));
  const r = KA.analyze(snap({ ctx: { log, done: { tb: { 'hanlin-5-u1': { best: 60, last: 60, at: t10 } } } }, seen: { social: { t: NOW - 9 * DAY, d: ['2026-10-23'] } } }));
  const en = r.tasks.find(t => t.k === 'english'), so = r.tasks.find(t => t.k === 'social');
  ok(en && en.kind === 'stale' && /10 天前/.test(en.why) && en.href === 'index.html#tb/hanlin-5-u1/learn', 'stale: english review ' + JSON.stringify(en));
  ok(so && so.kind === 'stale' && /9 天前/.test(so.why) && so.href === 'index.html#s/social', 'stale: social (seen only) review ' + JSON.stringify(so));
  ok(r.tasks[0].kind === 'goal' && r.tasks.slice(1).every(t => t.kind === 'stale'), 'stale: goal first, then stale reviews: ' + r.tasks.map(t => t.kind));
  const S = r.subjects.find(s => s.k === 'english');
  ok(S.days === 10 && S.status === 'push' && r.cheer.sit === 'comeback' && /9 天/.test(r.cheer.text) === /\{days\}/.test(KA.CHEERS.comeback[+r.cheer.id.split(':')[1]]), 'stale: english 10 天前, comeback cheer: ' + r.cheer.text);
  ok(!r.isNew && allLinks(r).every(routeOk), 'stale: links ok');
}

// ---------- 3b. 小朋友鎮（ke_log m:'town'）的答題算英文練習；只算答題紀錄 ----------
{
  const t10 = NOW - 10 * DAY, base = [{ t: t10, id: 'w:apple:listen', m: 'words', k: 'words:fruit', y: 'listen-choose', ok: 1, a: 'apple' }];
  const town = { t: NOW - 2 * 3600e3, id: 'town:bakery:3', m: 'town', k: 'town:bakery', y: 'town-dialogue', ok: 1, a: 'I want bread.' };
  const r = KA.analyze(snap({ ctx: { log: base.concat(town) }, goal: null })), en = r.subjects.find(s => s.k === 'english');
  ok(en.days === 0 && en.today && !r.tasks.some(t => t.k === 'english' && t.kind === 'stale') && r.progress.bySubj.find(x => x.k === 'english').days === 1 && r.progress.streak === 1, 'town answer counts as english practice today: ' + JSON.stringify({ days: en.days, tasks: r.tasks.map(t => t.k + ':' + t.kind) }));
  // 沒有答題紀錄（只有遊玩）→ 英文照樣是 10 天前、要複習
  const r2 = KA.analyze(snap({ ctx: { log: base }, goal: null }));
  ok(r2.subjects.find(s => s.k === 'english').days === 10 && r2.tasks.some(t => t.k === 'english' && t.kind === 'stale'), 'without town answers english stays stale');
  // 小鎮答錯也算英文的錯題次數
  const r3 = KA.analyze(snap({ ctx: { log: [Object.assign({}, town, { ok: 0 })] }, goal: null }));
  ok(r3.progress.bySubj.find(x => x.k === 'english').wrong === 1, 'town wrong answer counted for english');
}

// ---------- 4. 每日目標 ----------
{
  const log = [{ t: NOW - 600e3, id: 'w:apple:listen', m: 'words', k: 'words:fruit', y: 'listen-choose', ok: 1, a: 'apple' }];
  const a = KA.analyze(snap({ ctx: { log }, goal: { min: 6, met: false } }));
  ok(a.tasks.length === 3 && a.tasks[0].kind === 'goal' && a.tasks[0].title === '每日目標還差 9 分鐘' && /6 分鐘/.test(a.tasks[0].why) && a.tasks[0].min === 9 && routeOk(a.tasks[0].href), 'goal not met: first task ' + JSON.stringify(a.tasks[0]));
  ok(a.tasks.slice(1).every(t => t.href !== a.tasks[0].href), 'goal task links to a subject not otherwise listed');
  const b = KA.analyze(snap({ ctx: { log }, goal: { min: 17, met: true } }));
  ok(!b.tasks.some(t => t.kind === 'goal') && b.cheer.sit === 'goalMet' && /17 分鐘/.test(b.cheer.text) === /\{min\}/.test(KA.CHEERS.goalMet[+b.cheer.id.split(':')[1]]), 'goal met: no goal task, goalMet cheer: ' + b.cheer.text);
  const c = KA.analyze(snap({ ctx: { log }, goal: null }));
  ok(!c.tasks.some(t => t.kind === 'goal'), 'goal unknown: no goal task');
}

// ---------- 5. 各科輪流＋同一科一天最多 1 項 ----------
{
  const firsts = new Set();
  for (let d = 0; d < 6; d++) { const r = KA.analyze(snap({ now: NOW + d * DAY })); firsts.add(r.tasks[0].k); ok(uniq(r.tasks.map(t => t.k)), 'rotation day ' + d + ' unique subjects'); }
  ok(firsts.size >= 4, 'rotation: different first subject on different days: ' + [...firsts]);
  // 數學今天已經練過（錯題 5 題的優先順序被往後排），社會很久沒練 → 社會在數學前面
  const r = KA.analyze(snap({ mk: { math: Object.fromEntries([1, 2, 3, 4, 5].map(i => [`mx:1${i}x7`, mkE(NOW - 60e3, { type: 'multiply' })])) }, seen: { social: { t: NOW - 9 * DAY, d: [] } }, goal: null }));
  const iS = r.tasks.findIndex(t => t.k === 'social'), iM = r.tasks.findIndex(t => t.k === 'math');
  ok(iS === 0 && iM > 0, 'rotation: subject practiced today goes after a long-unpracticed one: ' + r.tasks.map(t => t.k + ':' + t.kind));
  // 每一個情境：任務最多 3 項、科目不重複
  [MANY, snap(), snap({ goal: { min: 3 } })].forEach((s, i) => { const x = KA.analyze(s); ok(x.tasks.length <= 3 && uniq(x.tasks.filter(t => t.k).map(t => t.k)), 'max 1 task per subject #' + i); });
  // 候選裡一科只有一項（就算同時有錯題、很久沒練、進行中）
  const y = KA.analyze(snap({ mk: { math: Object.fromEntries([1, 2, 3, 4, 5, 6].map(i => [`mx:1${i}x7`, mkE(NOW - 20 * DAY, { type: 'multiply' })])) }, ctx: { done: { sd: { l20: 60 } } } }));
  ok(y._.cand.filter(t => t.k === 'math').length === 1 && y._.cand.find(t => t.k === 'math').kind === 'mistakes', 'one candidate per subject, highest priority wins: ' + JSON.stringify(y._.cand.filter(t => t.k === 'math')));
}

// ---------- 6. 進行到一半 → 把它完成；還沒開始只列下一步 ----------
{
  const r = KA.analyze(snap({ ctx: { done: { sd: { l20: 100, l100: 90 } }, mm: { 'science:n1': { passedAt: { 1: NOW - 2 * DAY, 2: NOW - 2 * DAY }, lastPassAt: NOW - 2 * DAY } } }, goal: null }));
  const m = r._.cand.find(t => t.k === 'math'), s = r._.cand.find(t => t.k === 'science');
  ok(m.kind === 'finish' && /短除法：換你算/.test(m.title) && /還差/.test(m.why) && m.href === 'index.html#s/math/short-division', 'finish: math sd ' + JSON.stringify(m));
  ok(s.kind === 'finish' && /太陽與光/.test(s.title) && s.href === 'index.html#s/science/n1', 'finish: science n1 ' + JSON.stringify(s));
  const nx = r.next.find(n => n.k === 'science');
  ok(!nx || (nx.title.includes('植物世界') && !nx.first), 'next: science next unit is n2 ' + JSON.stringify(nx));
  ok(r.next.length <= KA.RULES.NEXT_MAX && uniq(r.next.map(n => n.k)), 'next: at most one per subject');
  ok(r.progress.goals === 2 && r.progress.goalItems.join() === '背架構過了 2 關', 'progress: 2 levels passed this week: ' + JSON.stringify(r.progress.goalItems));
}

// ---------- 7. 進步：錯題變少、連續天數 ----------
{
  const lastW = NOW - 9 * DAY, thisW = NOW - 2 * DAY;
  const sci = Object.fromEntries([1, 2, 3, 4, 5, 6].map(i => [`n2|w|a${i}|x`, mkE(lastW + i, { u: 'n2', k: 'w' })]).concat([[`n2|w|b1|x`, mkE(thisW, { u: 'n2', k: 'w' })], [`n2|w|b2|x`, mkE(thisW, { u: 'n2', k: 'w' })]]));
  const days = [0, 1, 2, 3].map(d => new Date(NOW - d * DAY + 8 * 3600e3).toISOString().slice(0, 10)).reverse();
  const r = KA.analyze(snap({ mk: { science: sci }, seen: { science: { t: NOW - 3600e3, d: days } }, goal: null }));
  const b = r.progress.bySubj.find(x => x.k === 'science');
  ok(b.wrong === 2 && b.wrongLast === 6 && b.days === 4, 'progress: science wrong 6 → 2, 4 days: ' + JSON.stringify(b));
  ok(r.progress.streak === 4 && r.progress.days >= 4, 'progress: streak 4: ' + r.progress.streak);
  ok(r.cheer.sit === 'fewer' && /6/.test(r.cheer.text) && /2/.test(r.cheer.text) && /自然/.test(r.cheer.text), 'cheer fewer mistakes: ' + r.cheer.text);
  // 這週沒練 → 不能說錯題變少
  const r2 = KA.analyze(snap({ mk: { science: Object.fromEntries(Object.entries(sci).slice(0, 6)) }, goal: null }));
  ok(r2.cheer.sit !== 'fewer', 'no practice this week → no "fewer" cheer: ' + r2.cheer.sit);
  // 今天答錯很多 → 安慰＋鼓勵
  const r3 = KA.analyze(snap({ ctx: { log: [...Array(9)].map((_, i) => ({ t: NOW - 60e3 + i, id: `w:x${i}:spell`, m: 'words', k: 'words:x', y: 'spell', ok: 0, a: 'q' })) }, seen: { english: { t: NOW, d: days } }, goal: null }));
  ok(r3.cheer.sit === 'manyWrong', 'many wrong today → manyWrong cheer: ' + r3.cheer.sit);
  // 第一次做某科
  const r4 = KA.analyze(snap({ seen: { ai: { t: NOW - 60e3, d: [days[3]] }, english: { t: NOW - 3 * DAY, d: [days[0]] } }, goal: null }));
  ok(r4.cheer.sit === 'first' && /AI/.test(r4.cheer.text), 'first time a subject → first cheer: ' + r4.cheer.text);
}

// ---------- 8. 鼓勵語：每種情境至少 5 句、不連續重複、數字都填上 ----------
{
  ok(['welcome', 'comeback', 'manyWrong', 'goalMet', 'fewer', 'first', 'unitDone', 'streak'].every(s => (KA.CHEERS[s] || []).length >= 5), 'every situation ≥ 5 lines');
  let prev = '', rep = 0, seen = new Set(); const R = (() => { let a = 7; return () => { a = (a * 9301 + 49297) % 233280; return a / 233280; }; })();
  for (let i = 0; i < 400; i++) { const sit = KA.CHEER_ORDER[i % 3 === 0 ? 0 : 8]; const c = KA.pickCheer('streak', { n: 3 }, prev, R); if (c.id === prev) rep++; prev = c.id; seen.add(c.id); if (/\{\w+\}/.test(c.text)) rep += 100; void sit; }
  ok(rep === 0 && seen.size === KA.CHEERS.streak.length, 'pickCheer never repeats consecutively, uses every line, fills vars: rep=' + rep + ' used=' + seen.size);
  // 連在一起分析（上一句傳回去）也不會連續重複
  let p = '', bad = 0; for (let i = 0; i < 50; i++) { const r = KA.analyze(snap({ prevCheer: p, rand: Math.random })); if (r.cheer.id === p) bad++; p = r.cheer.id; }
  ok(bad === 0, 'analyze with prevCheer never repeats');
}

// ---------- 9. 沒有負面字詞（鼓勵語、解法、狀態、任務文字） ----------
{
  const BAN = ['笨', '很爛', '爛透', '差勁', '糟糕', '丟臉', '失敗', '不及格', '退步', '最差', '很差', '不行', '懶', '沒用', '怎麼又', '比別人', '輸給', '聰明', '天才', '可惜', '太慢', '落後', '罵', '羞'];
  const texts = [].concat(...Object.values(KA.CHEERS), ...Object.values(KA.SOLUTIONS).flatMap(s => s.steps.concat([s.btn, s.btn2 || ''])), Object.values(KA.STATUS), Object.values(KA.MATH_KIND).map(x => x[2]));
  [snap(), MANY, snap({ goal: { min: 4 } })].forEach(s => { const r = KA.analyze(s); texts.push(r.hi, r.cheer.text, ...r.tasks.flatMap(t => [t.title, t.why]), ...r.weak.flatMap(w => [w.title, w.text, w.extra, ...w.steps]), ...r.next.map(n => n.title)); });
  const hits = texts.filter(t => BAN.some(b => String(t).includes(b)));
  ok(!hits.length, 'no negative words: ' + hits.join(' | '));
  ok(!Object.values(KA.STATUS).some(t => /🔴|❌|紅/.test(t)), 'status words have no red');
}

// ---------- 10. kids-coins.js 補記的最後練習時間（kids_coin_seen） ----------
{
  let s = coins.seenAdd({}, 'math', NOW);
  s = coins.seenAdd(s, 'math', NOW + 1000);
  ok(s.math.t === NOW + 1000 && s.math.d.length === 1 && s.math.d[0] === '2026-11-01', 'seenAdd: same day once ' + JSON.stringify(s));
  for (let i = 1; i <= 30; i++) s = coins.seenAdd(s, 'math', NOW + i * DAY);
  ok(s.math.d.length === 21 && s.math.d[20] === '2026-12-01', 'seenAdd: keeps last 21 days');
  ok(coins.seenAdd('bad', 'ai', NOW).ai.t === NOW && coins.seenAdd(null, 'ai', NOW).ai.d.length === 1, 'seenAdd: bad store ok');
}

// ---------- 11. 家長摘要＋效能 ----------
{
  const r = KA.analyze(MANY), P = KA.parentSummary(r);
  ok(P.rows.length === 6 && P.weak.length === 3 && P.weak[0].title === '自然・水溶液' && P.advice.length === r.tasks.length && P.rows.every(x => typeof x.days === 'number'), 'parent summary ' + JSON.stringify(P).slice(0, 200));
  const log = []; for (let i = 0; i < 6000; i++) log.push({ t: NOW - (i % 30) * DAY - i, id: 'w:apple:listen', m: 'words', k: 'words:fruit', y: 'listen-choose', ok: i % 4 ? 1 : 0, a: 'apple' });
  const t0 = Date.now(); const big = KA.analyze(Object.assign({}, MANY, { ctx: Object.assign({}, MANY.ctx, { log }) })); const ms = Date.now() - t0;
  ok(big.tasks.length === 3 && ms < 400, 'performance: 6000 answers analyzed in ' + ms + ' ms');
}

console.log(`assistant: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
