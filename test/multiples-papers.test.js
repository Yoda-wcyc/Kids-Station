// multiples-papers.test.js — 〈倍數與公倍數〉紙本練習卷線上考試 math/multiples-papers.js 單元測試（2026-10-21）
// 用法：node test/multiples-papers.test.js（smoke.js 也會跑）
// - 正解逐題對紙本答案：KEY 的值抄自各回的驗算腳本（_verify*.py，用暴力搜尋重算過、而且對過答案卷）
// - 配分：每回六大題 9／9／16／20／36／10＝100；全對 100、全空 0；故意錯一題扣的分數要剛好
// - 錯題庫：原卷題目（文字、單位、步驟要點）重做
'use strict';
const path = require('path');
const root = path.join(__dirname, '..');
const M = require(path.join(root, 'math', 'multiples.js'));
const P = require(path.join(root, 'math', 'multiples-papers.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL multiples-papers:', m); } };
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ---------- 紙本正解（值抄自驗算腳本）----------
// 第一回：考卷\倍數與公倍數_20261021\_verify_20261021.py
const KEY = {
  p1: {
    '1-1': [84, 132, 156], '1-2': [48, 96, 144], '1-3': [104, 143, 182],
    '2-1': [215, 3060, 7005, 1500, 640], '2-2': [3060, 1500, 640], '2-3': [3060, 1500, 640],
    '3-1': [203, 210, 217, 224], '3-2': [4078, 4070], '3-3': [2965, 2060], '3-4': { 2: [0, 2, 4, 6, 8], 5: [0, 5], 10: [0] },
    '4-1': [30, [30, 60, 90]], '4-2': [24, [24, 48, 72]], '4-3': [63, [63, 126, 189]], '4-4': [54, [54, 108, 162]], '4-5': [96, [96, 192, 288]],
    '5-1': [[888], ['枝']], '5-2': [[252], ['人']], '5-3': [[608], ['張']], '5-4': [[72], ['個']], '5-5': [[80], ['個']], '5-6': [[12, 540], ['包', '朵']],
    '6-1': [[140, 294], ['人', '人']], '6-2': [[144], ['公分']]
  },
  // 第二回：考卷\倍數與公倍數_第二回_20261021\_verify.py
  p2: {
    '1-1': [154, 176, 242], '1-2': [119, 187, 238], '1-3': [116, 145, 261],
    '2-1': [375, 4050, 8015, 2700, 930], '2-2': [4050, 2700, 930], '2-3': [4050, 2700, 930],
    '3-1': [310, 341, 372], '3-2': [5198, 5190], '3-3': [4905, 4000], '3-4': { 2: [0, 2, 4, 6, 8], 5: [0, 5], 10: [0] },
    '4-1': [165, [165, 330, 495]], '4-2': [57, [57, 114, 171]], '4-3': [92, [92, 184, 276]], '4-4': [280, [280, 560, 840]], '4-5': [186, [186, 372, 558]],
    '5-1': [[987], ['顆']], '5-2': [[342], ['人']], '5-3': [[792], ['本']], '5-4': [[138], ['顆']], '5-5': [[306], ['張']], '5-6': [[17, 918], ['箱', '瓶']],
    '6-1': [[185, 407], ['人', '人']], '6-2': [[320], ['公分']]
  }
};
// 驗算腳本 exam_strings：題目數字真的照紙本
const TEXT = {
  p1: { '1-1': ['12 的倍數'], '1-2': ['16 的倍數'], '1-3': ['13 的倍數'], '3-1': ['200～230'], '3-4': ['708●'],
    '5-1': ['每 24 枝', '不超過 900'], '5-2': ['230 人～260 人', '每 36 人'], '5-3': ['每 16 張', '600 張多'], '5-4': ['每 24 個', '每 36 個'], '5-5': ['每 16 個', '每 20 個'],
    '5-6': ['每包有 45 朵', '500 朵'], '6-1': ['130 人～300 人', '每 14 人'], '6-2': ['長 48 公分', '寬 36 公分'] },
  p2: { '1-1': ['22 的倍數'], '1-2': ['17 的倍數'], '1-3': ['29 的倍數'], '3-1': ['305～390', '31 的倍數'], '3-4': ['649●'],
    '5-1': ['每 47 顆', '不超過 1000'], '5-2': ['335 人～370 人', '每 38 人'], '5-3': ['每 44 本', '750 本多'], '5-4': ['每 46 顆', '每 69 顆'], '5-5': ['每 34 張', '每 51 張', '290 張～350 張'],
    '5-6': ['每箱有 54 瓶', '918 瓶'], '6-1': ['160 人～420 人', '每 37 人'], '6-2': ['長 80 公分', '寬 64 公分'] }
};

function answerOf(Q) {
  switch (Q.kind) {
    case 'circle': case 'both': return Q.ans.map(i => Q.nums[i]);
    case 'range': return Q.ans;
    case 'board': return [Q.max, Q.min];
    case 'last': return Q.ans;
    case 'lcm': return [Q.l, Q.ans];
    default: return [P.ansOf(Q), P.unitsOf(Q)];
  }
}
const items = E => { const o = []; E.secs.forEach(s => s.items.forEach(Q => o.push(Q))); return o; };
const fullAns = E => { const a = {}; items(E).forEach(Q => { a[Q.id] = P.perfect(Q); }); return a; };
const scoreWith = (E, id, A) => { const a = fullAns(E); a[id] = A; return P.score(E.secs, a).total; };
const byN = (E, n) => items(E).find(Q => Q.pn === n);
const clone = x => JSON.parse(JSON.stringify(x));

const ready = P.list().filter(p => p.ready).map(p => p.id);
ok(ready.includes('p1'), 'paper p1 is ready');
ready.forEach(pid => {
  const E = P.exam(pid), qs = items(E), key = KEY[pid];
  ok(!!key, pid + ': has KEY from the verify script');
  if (!key) return;
  // 題目齊、正解逐題一致
  ok(same(qs.map(Q => Q.pn), Object.keys(key)), pid + ': 題號照紙本 ' + qs.map(Q => Q.pn).join(','));
  qs.forEach(Q => ok(same(answerOf(Q), key[Q.pn]), `${pid} ${Q.pn}: 正解 ${JSON.stringify(answerOf(Q))} ＝ 紙本 ${JSON.stringify(key[Q.pn])}`));
  Object.keys(TEXT[pid] || {}).forEach(n => { const Q = byN(E, n); ok(Q && TEXT[pid][n].every(s => Q.text.includes(s)), `${pid} ${n}: 題目含「${TEXT[pid][n].join('」「')}」`); });
  ok(qs.every(Q => Q.keySteps.length > 0 && Q.id === 'mul:' + pid + ':' + Q.pn), pid + ': 每題都有答案卷的步驟要點、id mul:<回>:<題號>');
  // 配分
  ok(same(E.secs.map(s => s.max), [9, 9, 16, 20, 36, 10]) && E.secs.reduce((n, s) => n + s.max, 0) === 100, pid + ': 配分 9/9/16/20/36/10 = 100: ' + E.secs.map(s => s.max).join('/'));
  ok(same(E.secs.map(s => s.items.length), [3, 3, 4, 5, 6, 2]), pid + ': 題數 3/3/4/5/6/2');
  ok(qs.every(Q => P.check(Q, P.perfect(Q)).max === M.PTS[Q.kind]), pid + ': 分步題的部分分加起來＝該題滿分');
  ok(E.secs.every(s => s.rule && s.tip), pid + ': 每大題都有配分細則和常見錯誤提醒');
  // 全對 100、全空 0
  const full = P.score(E.secs, fullAns(E)), zero = P.score(E.secs, {});
  ok(full.total === 100 && full.max === 100 && full.secs.every(s => s.items.every(x => x.r.ok)), pid + ': 全對 100: ' + full.total);
  ok(zero.total === 0 && zero.max === 100, pid + ': 全空 0');
  // 錯題庫：原卷題目重做（文字、單位、步驟一樣）；沒有 MULP 時 MUL.fromMistake 也能照題型＋數字重做
  qs.forEach(Q => {
    const e = M.mkEntry(Q), p = clone(e.p), R = P.fromMistake(p), R2 = M.fromMistake(p);
    ok(e.id === Q.id && p.paper === pid && p.pn === Q.pn && R && R.id === Q.id && R.text === Q.text && same(R.ans, Q.ans) && same(P.unitsOf(R), P.unitsOf(Q)) && same(R.keySteps, Q.keySteps) && R2 && same(R2.ans, Q.ans) && JSON.stringify(p).length < 4000, `${pid} ${Q.pn}: 錯題原題重做`);
  });
});

// ---------- 第一回：故意錯一題，扣分剛好 ----------
{
  const E = P.exam('p1'), Q = n => byN(E, n), A = n => clone(P.perfect(Q(n))), id = n => Q(n).id;
  const t = (n, f) => { const a = A(n); f(a); return scoreWith(E, id(n), a); };
  const cases = [
    ['1-1 多圈一個（98）', t('1-1', a => a.sel.push(1)), 97],
    ['2-2 漏選 640', t('2-2', a => a.sel.pop()), 97],
    ['3-1 漏寫 224', t('3-1', a => { a.list = '203、210、217'; }), 98],
    ['3-2 最小寫錯', t('3-2', a => { a.min = 4072; }), 98],
    ['3-4 10 的倍數多選 5', t('3-4', a => { a.s10 = [0, 5]; }), 98],
    ['4-2 第 3 個公倍數寫錯（72→96）', t('4-2', a => { a.ms[2] = 96; }), 98],
    ['4-3 最小公倍數寫錯、3 個也錯', t('4-3', a => { a.l = 126; a.ms = [126, 252, 378]; }), 96],
    ['5-1 答案對、單位錯（扣 1）', t('5-1', a => { a.units = ['本']; }), 99],
    ['5-1 答案數字錯（900）→ 數字 2＋單位 1', t('5-1', a => { a.nums = [900]; }), 97],
    ['5-1 只寫答案、沒寫做法 → 只拿答案 3 分', t('5-1', a => { a.m = ''; a.a = {}; }), 97],
    ['5-1 商要不要 +1 選錯', t('5-1', a => { a.a.pl = '1'; }), 99],
    ['5-1 除法餘數寫錯', t('5-1', a => { a.a.r = 2; }), 99],
    ['5-1 乘法寫錯（24×37＝878）', t('5-1', a => { a.a.mp = 878; }), 99],
    ['5-3 選錯方法（找公倍數）→ 做法 3 分全沒', t('5-3', a => { a.m = 'lcm'; }), 97],
    ['5-6 包數對、朵數錯（扣 1）', t('5-6', a => { a.nums = [12, 500]; }), 99],
    ['5-6 兩個單位對調', t('5-6', a => { a.units = ['朵', '包']; }), 99],
    ['5-4 選「用除法」但答案對 → 方法 1＋最小公倍數 2 沒分', t('5-4', a => { a.m = 'div'; }), 97],
    ['5-5 最小公倍數寫成 160、答案 160', t('5-5', a => { a.l = 160; a.nums = [160]; }), 95],
    ['6-1 最多那條商 +1 選錯', t('6-1', a => { a.b.pl = '1'; }), 99],
    ['6-1 最少答案寫 126', t('6-1', a => { a.nums = [126, 294]; }), 99],
    ['6-1 兩個答案都錯 → 單位也沒分', t('6-1', a => { a.nums = [126, 300]; }), 97],
    ['6-2 邊長寫成 1728（48×36）', t('6-2', a => { a.l = 1728; a.nums = [1728]; }), 96]
  ];
  cases.forEach(([name, got, want]) => ok(got === want, `p1 錯一題：${name} → ${got}（應為 ${want}）`));
  // 範圍題用上限去除也對；乘法兩個數順序對調也對
  ok(t('5-2', a => { a.a = { x: 260, y: 36, q: 7, r: 8, pl: '0', ma: 36, mb: 7, mp: 252 }; }) === 100, 'p1 5-2: 260 ÷ 36 ＝ 7 … 8、商不用 +1 也對');
  ok(t('5-1', a => { a.a.ma = 37; a.a.mb = 24; }) === 100, 'p1 5-1: 37 × 24 也算對');
  // 部分分明細（結果頁會顯示）
  const r = P.check(Q('5-1'), (() => { const a = A('5-1'); a.units = ['本']; return a; })());
  ok(!r.ok && r.got === 5 && r.max === 6 && same(r.parts.map(p => p.k + ':' + p.got + '/' + p.max), ['div:1/1', 'plus:1/1', 'mul:1/1', 'n0:2/2', 'units:0/1']) && /單位要寫：枝/.test(r.hint), 'p1 5-1 單位錯：明細 ' + JSON.stringify(r.parts.map(p => p.k + ':' + p.got)));
  const r2 = P.check(Q('5-3'), (() => { const a = A('5-3'); a.a.pl = '0'; return a; })());
  ok(r2.got === 5 && /比 600 少|商要 \+1/.test(r2.hint), 'p1 5-3 +1 選錯：提示「' + r2.hint + '」');
}

// ---------- 第二回：陷阱題、範圍內的公倍數 ----------
if (ready.includes('p2')) {
  const E = P.exam('p2'), Q = n => byN(E, n), A = n => clone(P.perfect(Q(n))), id = n => Q(n).id;
  const t = (n, f) => { const a = A(n); f(a); return scoreWith(E, id(n), a); };
  ok(same(P.perfect(Q('5-6')).a, { x: 918, y: 54, q: 17, r: 0, pl: '0', ma: 54, mb: 17, mp: 918 }), 'p2 5-6: 918 ÷ 54 ＝ 17 … 0，商不用 +1');
  [['5-6 陷阱：剛好整除還 +1 → 18 箱、972 瓶', t('5-6', a => { a.a.pl = '1'; a.a.mb = 18; a.a.mp = 972; a.nums = [18, 972]; }), 95],
    ['5-6 箱數對、瓶數錯', t('5-6', a => { a.nums = [17, 972]; }), 99],
    ['5-5 範圍內公倍數：倍數寫錯（102×2＝204）', t('5-5', a => { a.k = 2; a.p = 204; a.nums = [204]; }), 96],
    ['5-5 選「用除法」但答案對', t('5-5', a => { a.m = 'div'; }), 97],
    ['5-1 答案對、單位錯', t('5-1', a => { a.units = ['個']; }), 99],
    ['3-3 最小寫成 4005', t('3-3', a => { a.min = 4005; }), 98],
    ['4-2 最小公倍數寫成 19×57＝1083', t('4-2', a => { a.l = 1083; }), 98],
    ['6-2 邊長寫成 144（80＋64）', t('6-2', a => { a.l = 144; a.nums = [144]; }), 96]
  ].forEach(([name, got, want]) => ok(got === want, `p2 錯一題：${name} → ${got}（應為 ${want}）`));
}

console.log(`multiples-papers: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
