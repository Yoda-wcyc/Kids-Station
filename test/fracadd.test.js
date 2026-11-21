// fracadd.test.js — 異分母分數加減（math/fracadd.js）：node test/fracadd.test.js
'use strict';
const path = require('path'), fs = require('fs');
const root = path.join(__dirname, '..');
const FA = require(path.join(root, 'math', 'fracadd.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL', m); } };
let s = 11; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);

// 大量出題：分母 2～12、不一樣、題目最簡、減法大減小不出 0、答案最簡
let reduce = 0, total = 0, mixedAns = 0;
for (let r = 0; r < 300; r++) {
  const qs = FA.round(10, rnd);
  ok(qs.length === 10 && new Set(qs.map(q => q.id)).size === 10, 'round of 10, no repeats');
  ok(FA.KINDS.every(k => qs.some(q => q.kind === k)), 'all four kinds in a round');
  qs.forEach(q => {
    total++; if (q.ans.reduce) reduce++; if (q.ans.w && q.ans.n) mixedAns++;
    ok(q.a.d >= 2 && q.a.d <= 12 && q.b.d >= 2 && q.b.d <= 12 && q.a.d !== q.b.d, 'denominators 2..12, different ' + q.id);
    ok(q.a.n >= 1 && q.a.n < q.a.d && q.b.n >= 1 && q.b.n < q.b.d && FA.gcd(q.a.n, q.a.d) === 1 && FA.gcd(q.b.n, q.b.d) === 1, 'operands are proper/simplest ' + q.id);
    const va = FA.imp(q.a) / q.a.d, vb = FA.imp(q.b) / q.b.d, v = q.op === '+' ? va + vb : va - vb, a = q.ans;
    ok(v > 0 && Math.abs(a.w + a.n / a.d - v) < 1e-9, 'answer value ' + q.id);
    ok(a.n === 0 ? a.d === 1 || true : a.n < a.d && FA.gcd(a.n, a.d) === 1, 'answer simplest ' + q.id);
    ok(FA.grade(q, { w: a.w || '', n: a.n || '', d: a.n ? a.d : '' }).st === 'ok', 'own answer graded ok ' + q.id);
  });
}
ok(reduce / total > 0.35 && reduce / total < 0.65, 'about half need reducing: ' + reduce + '/' + total);
ok(mixedAns > 0, 'some answers are mixed numbers');

// 判分
const q = { kind: 'add', op: '+', a: { w: 0, n: 1, d: 2 }, b: { w: 0, n: 1, d: 4 } }; q.ans = FA.answer(q);   // 1/2+1/4 = 3/4
ok(FA.grade(q, { n: 3, d: 4 }).st === 'ok' && FA.grade(q, { n: 6, d: 8 }).st === 'fix' && FA.grade(q, { n: 1, d: 4 }).st === 'wrong', '3/4 ok, 6/8 fix (reduce), 1/4 wrong');
// 收尾檢查（2026-11-21）：寫法沒整理好的先提醒一次（值錯也一樣、不說對錯）；同一題提醒過又這樣送（again）→ 照原規則：值錯 wrong、值對照舊提醒
{ const g1 = FA.grade(q, { n: 2, d: 4 }), g2 = FA.grade(q, { n: 2, d: 4 }, true), g3 = FA.grade(q, { n: 6, d: 8 }, true);
  ok(g1.st === 'fix' && /再檢查一下/.test(g1.msg) && /約分/.test(g1.msg) && !/一樣大|錯/.test(g1.msg) && g2.st === 'wrong' && g3.st === 'fix' && /答案一樣大/.test(g3.msg), '2/4 (wrong value, unreduced): 1st → gentle 約分 reminder, again → wrong; 6/8 again → existing fix');
  const c = FA.fromId('fa:12_15+3.4_5'), p1 = FA.grade(c, { w: 3, n: 8, d: 5 }), p2 = FA.grade(c, { w: 3, n: 9, d: 5 }), p3 = FA.grade(c, { w: 3, n: 9, d: 5 }, true), p4 = FA.grade(c, { n: 11, d: 2 }), p5 = FA.grade(c, { w: 3, n: 5, d: 5 });
  ok(/分數部分比 1 大/.test(p1.msg) && /進位/.test(p1.msg) && /帶分數/.test(p1.msg) && p2.st === 'fix' && /進位/.test(p2.msg) && p3.st === 'wrong' && p4.st === 'fix' && /分子比分母大/.test(p4.msg) && p5.st === 'fix' && /剛好是 1/.test(p5.msg), '3又8/5、3又9/5（值錯）→ 要進位提醒；第 2 次 3又9/5 → wrong；11/2 → 化成帶分數；3又5/5 → 剛好是 1');
  ok(FA.grade(c, { w: 4, n: 0, d: 5 }).st === 'fix' && FA.grade(c, { w: 4, n: 0, d: 5 }, true).st === 'wrong' && FA.grade(c, { w: 4, n: 3, d: 5 }, true).st === 'ok' && FA.grade(c, { w: 5 }).st === 'wrong' && FA.grade(c, { w: 4, n: 2, d: 5 }).st === 'wrong', 'tidy answers are graded at once (ok / wrong), again does not change a tidy answer'); }
const q2 = { kind: 'add', op: '+', a: { w: 0, n: 5, d: 6 }, b: { w: 0, n: 3, d: 4 } }; q2.ans = FA.answer(q2);   // 5/6+3/4 = 19/12 = 1 7/12
ok(q2.ans.w === 1 && q2.ans.n === 7 && q2.ans.d === 12, '5/6+3/4 = 1 7/12');
ok(FA.grade(q2, { w: 1, n: 7, d: 12 }).st === 'ok' && FA.grade(q2, { n: 19, d: 12 }).st === 'fix' && FA.grade(q2, { w: 1, n: 14, d: 24 }).st === 'fix', 'improper / unreduced mixed → fix');
const q3 = { kind: 'msub', op: '-', a: { w: 2, n: 1, d: 3 }, b: { w: 1, n: 1, d: 3 } }; q3.ans = FA.answer(q3);   // 整數答案 1
ok(FA.grade(q3, { w: 1 }).st === 'ok' && FA.grade(q3, { w: 1, n: 0, d: 3 }).st === 'fix' && FA.grade(q3, { n: 3, d: 3 }).st === 'fix', 'integer answer: write the integer');
ok(FA.grade(q, { n: 3 }).st === 'bad' && FA.grade(q, { n: 3, d: 0 }).st === 'bad' && FA.grade(q, {}).st === 'bad' && FA.grade(q, { n: 'x', d: 4 }).st === 'bad', 'bad input');
ok(FA.steps(q2).join('|').includes('最小公倍數是 12') && FA.steps(q2).some(x => /帶分數/.test(x)), 'steps');

// 📕 錯題庫（2026-11-09）：id＝題目本身（'fa:1_3+3_4'、帶分數 'fa:2.1_3-1_4'），fromId 還原同一題、同一個答案
const KM = require(path.join(root, 'kids-mistakes.js'))._core, SM = require(path.join(root, 'syncmerge.js'));
let rt = 0;
for (let r = 0; r < 200; r++) FA.round(10, rnd).forEach(q => {
  const e = FA.mkEntry(q), back = FA.fromId(e.id);
  ok(/^fa:(\d\.)?\d{1,2}_\d{1,2}[+-](\d\.)?\d{1,2}_\d{1,2}$/.test(e.id) && e.id === q.id && e.id.length <= 18,'id compact: ' + e.id);
  ok(back && back.kind === q.kind && back.op === q.op && JSON.stringify([back.a, back.b]) === JSON.stringify([q.a, q.b]) && JSON.stringify(back.ans) === JSON.stringify(q.ans), 'fromId round-trips ' + e.id);
  ok(e.p.type === 'fracadd' && e.p.v.join() === [q.a.w, q.a.n, q.a.d, q.b.w, q.b.n, q.b.d].join() && e.p.op === q.op && JSON.stringify(e.p).length < 120, 'p small: ' + JSON.stringify(e.p));
  rt++;
});
ok(rt === 2000, 'round-tripped 2000 random questions');
ok(FA.mkId({ op: '+', a: { w: 0, n: 1, d: 3 }, b: { w: 0, n: 3, d: 4 } }) === 'fa:1_3+3_4' && FA.mkId({ op: '-', a: { w: 2, n: 1, d: 3 }, b: { w: 0, n: 1, d: 4 } }) === 'fa:2.1_3-1_4', 'id format examples');
const m1 = FA.fromId('fa:2.1_3-1_4');
ok(m1 && m1.kind === 'msub' && m1.a.w === 2 && m1.b.w === 0 && FA.txt(m1.ans) === '2 又 1/12', 'mixed minus proper restores: ' + (m1 && FA.txt(m1.ans)));
ok(['fa:1_3+3_4x', 'fa:1_3*3_4', 'fa:0_3+1_4', 'fa:2.3_3+1_4', 'fa:1.5_4+1_4', 'fa:1_1+1_4', 'fa:1_0+1_4', 'fa:1_100+1_4', 'fa:1_4-3_4', 'fa:1_4-1_4', 'fa:12.1_2+1_3', 'frc:1_3+3_4', 'fa:', '', null].every(x => FA.fromId(x) === null), 'bad ids rejected (format, 0 numerator, improper part of a mixed number, denominator < 2 or 3 digits, negative/zero difference)');
// 紙本錯題用的寬格式（2026-11-19）：分母到 99、沒約分的分數、沒有整數的假分數
{ const x = FA.fromId('fa:33_14-5_3'), y = FA.fromId('fa:3.15_27-11_18');
  ok(x && x.kind === 'fsub' && FA.KIND_NAME[x.kind] === '分數相減' && FA.txt(x.ans) === '29/42' && y && y.kind === 'msub' && FA.txt(y.ans) === '2 又 17/18' && y.ans.reduce, 'wide ids: improper 33/14, unreduced 15/27, denominators 14/27');
  ok(FA.grade(y, { w: 2, n: 51, d: 54 }).st === 'fix' && FA.grade(y, { w: 2, n: 17, d: 18 }).st === 'ok' && FA.grade(y, { n: 53, d: 18 }).st === 'fix', '2又51/54 → 約分提醒、2又17/18 ok、53/18 → 化帶分數提醒');
  ok(FA.steps(x).join('|').includes('最小公倍數是 42') && FA.steps(x).join('|').includes('99/42') && !FA.steps(x).some(s => /帶分數先化成假分數/.test(s)), 'steps for an improper operand');
  ok(FA.fromId('fa:1_3+3_4').kind === 'add' && FA.fromId('fa:2.1_3-1_4').kind === 'msub', 'old ids keep their kind'); }
// 三個數連算（2026-11-21）：id 後面多接一個運算符＋一個數；由左到右、每一步都要比 0 大；兩個數的舊 id 不受影響
{ const a = FA.fromId('fa:2.1_2+1.4_5-3.2_3'), b = FA.fromId('fa:8_9+3.7_15+8_9');
  ok(a && a.kind === 'mix3' && FA.KIND_NAME.mix3 && a.c.w === 3 && a.op2 === '-' && FA.txt(a.ans) === '19/30' && a.id === 'fa:2.1_2+1.4_5-3.2_3', '2又1/2＋1又4/5－3又2/3 = 19/30');
  ok(b && b.kind === 'mix3' && FA.txt(b.ans) === '5 又 11/45' && b.ans.P.join() === '40,196,236', '8/9＋3又7/15＋8/9 = 5又11/45 (left to right 40 → 196 → 236)');
  const ea = FA.mkEntry(a), eb = FA.mkEntry(b);
  ok(ea.id === a.id && ea.p.v.join() === '2,1,2,1,4,5,3,2,3' && ea.p.op === '+-' && ea.p.q === '2 又 1/2 ＋ 1 又 4/5 － 3 又 2/3' && eb.p.op === '++' && JSON.stringify(Object.keys(ea.p)) === '["type","v","op","q"]' && JSON.stringify(ea.p).length < 160, 'three-number mkEntry: v 9, op 2 chars, text');
  ok(FA.fromId(ea.id).id === ea.id && JSON.stringify(FA.fromId(eb.id).ans) === JSON.stringify(b.ans), 'three-number round trip');
  const sa = FA.steps(a).join('|'), sb = FA.steps(b).join('|');
  ok(sa.includes('2、5 和 3 的最小公倍數是 30') && sa.includes('75 ＋ 54 ＝ 129，129 － 110 ＝ 19') && sa.includes('兩步都要算完') && sb.includes('236 ÷ 45 ＝ 5 餘 11') && sb.includes('9 和 15 的最小公倍數是 45'), 'three-number steps: both steps shown, carry shown');
  ok(FA.grade(b, { w: 5, n: 11, d: 45 }).st === 'ok' && FA.grade(b, { w: 4, n: 56, d: 45 }).st === 'fix' && FA.grade(b, { w: 4, n: 16, d: 45 }).st === 'wrong' && FA.grade(b, { w: 2, n: 11, d: 45 }).st === 'wrong' && FA.grade(a, { n: 19, d: 30 }).st === 'ok', 'three-number grading: 5又11/45 ok, 4又56/45 fix, 只做一步 4又16/45 wrong, 忘了加回整數 2又11/45 wrong');
  ok(['fa:1_4+1_4-1_2', 'fa:1_2-3_4+5_6', 'fa:1_2+1_3+1_1','fa:1_2+1_3*1_4', 'fa:1_2+1_3-', 'fa:1_2+1_3-1_4-1_5', 'fa:1_2+1_3+2.3_3', 'fa:1_2+1_3+0_4'].every(x => FA.fromId(x) === null), 'bad three-number ids: zero/negative at any step, bad operator, 4 numbers, improper part of a mixed number, 0 numerator');
  ok(FA.fromId('fa:5_6-1_2+1_4') && FA.txt(FA.fromId('fa:5_6-1_2+1_4').ans) === '7/12', '5/6－1/2＋1/4 = 7/12'); }
// 🔁 進位挑戰（2026-11-21）：每題都是帶分數（＋帶分數或真分數）、分數部分加起來比 1 大 → 答案一定是帶分數、整數比兩個整數加起來多；分母 2～12、題目最簡、一輪不重複
{ let red = 0, tot = 0, withProper = 0;
  for (let r = 0; r < 300; r++) {
    const qs = FA.round(10, rnd, ['carry']);
    ok(qs.length === 10 && new Set(qs.map(q => q.id)).size === 10 && qs.every(q => q.kind === 'carry' && FA.KIND_NAME[q.kind] === '進位挑戰'), 'carry round of 10, no repeats');
    qs.forEach(q => {
      tot++; if (q.ans.reduce) red++; if (!q.b.w) withProper++;
      ok(q.op === '+' && q.a.w >= 1 && q.a.w <= 3 && q.b.w >= 0 && q.b.w <= 3 && q.a.d >= 2 && q.a.d <= 12 && q.b.d >= 2 && q.b.d <= 12 && q.a.d !== q.b.d && FA.gcd(q.a.n, q.a.d) === 1 && FA.gcd(q.b.n, q.b.d) === 1 && q.a.n < q.a.d && q.b.n < q.b.d, 'carry operands in range ' + q.id);
      ok(q.a.n / q.a.d + q.b.n / q.b.d > 1 && q.ans.w === q.a.w + q.b.w + 1 && q.ans.n > 0, 'carry: fraction parts sum > 1, answer carries one whole ' + q.id);
      ok(FA.grade(q, { w: q.ans.w, n: q.ans.n, d: q.ans.d }).st === 'ok' && FA.grade(q, { w: q.ans.w - 1, n: q.ans.n + q.ans.d, d: q.ans.d }).st === 'fix', 'carry: simplest ok, not-carried → reminder ' + q.id);
      const back = FA.fromId(q.id); ok(back && back.kind === 'madd' && JSON.stringify(back.ans) === JSON.stringify(q.ans), 'carry id replays as 帶分數相加 ' + q.id);
    });
  }
  ok(red / tot > 0.35 && red / tot < 0.65 && withProper > 0, 'carry: about half need reducing ' + red + '/' + tot + ', some 帶分數＋真分數 ' + withProper); }
// 分組：五上單元六（異分母分數的加減）
ok(KM.unitOf('math', 'fa:1_3+3_4', { type: 'fracadd' }) === 'g5a6', 'unitOf → g5a6');
// 未畢業最多 50 題：第 51 題進來 → 最舊答錯的蓋墓碑；畢業規則照舊（連對 3 次）
{
  const bk = {}; let t = 1e12;
  for (let i = 0; i < 60; i++) { const q = FA.gen(FA.KINDS[i % 4], rnd), e = FA.mkEntry(q); t += 1000; if (KM.mark(bk, e.id, false, e.p, t) === 'added') KM.cap(bk, 'fa:', KM.MAX_FA, t); }
  const live = Object.keys(bk).filter(k => !bk[k].d), dead = Object.keys(bk).filter(k => bk[k].d);
  ok(KM.MAX_FA === 50 && live.length === 50 && dead.length === Object.keys(bk).length - 50, 'cap: 50 live fa: entries, rest tombstoned: ' + live.length + '/' + dead.length);
  ok(Math.min(...live.map(k => bk[k].t)) > Math.max(...dead.map(k => bk[k].t)), 'cap: the oldest wrong answers are the ones squeezed out');
  bk['eq:x+1=2'] = { c: 0, w: 1, t: 1, u: 1, p: { q: 'x+1=2' } };
  ok(KM.cap(bk, 'fa:', KM.MAX_FA, t) === 0 && !bk['eq:x+1=2'].d, 'cap: other math mistakes untouched (even very old ones)');
  const id = live[0]; let r = [];
  for (let k = 0; k < 3; k++) r.push(KM.mark(bk, id, true, null, t + 10 + k));
  ok(r.join() === 'counted,counted,graduated' && bk[id].d === 1, 'graduates after 3 correct in a row: ' + r);
  // 同步：墓碑傳到別台，舊的那份救不回來；大小 50 題＋300 墓碑遠小於 MAX_BYTES/4
  const old = JSON.parse(JSON.stringify(bk)); dead.forEach(k => { old[k] = { c: 0, w: 1, t: bk[k].t, u: bk[k].t, p: {} }; });
  const merged = SM.mergeMk({ math: bk }, { math: old }).math;
  ok(dead.every(k => merged[k].d === 1), 'cap tombstones beat stale live copies on another device');
  const big = {}; for (let i = 0; i < 50; i++) { const e = FA.mkEntry(FA.gen('madd', rnd)); big[e.id + i] = { c: 2, w: 99, t: 1.8e12, u: 1.8e12, p: e.p }; } for (let i = 0; i < 300; i++) big['fa:' + i + '_1+1_2'] = { d: 1, w: 99, t: 1.8e12, u: 1.8e12 };
  const n = SM.bytes(SM.normMk({ math: big }));
  ok(n < 30 * 1024 && n <= SM.MAX_BYTES / 4, 'mk.math with 50 fa + 300 tombstones = ' + n + ' B (≤ MAX_BYTES/4, 上限不放寬)');
}
// 📝 家長登錄的紙本錯題（math/paper.js FA_ROWS → kids-mistakes seed，2026-11-19）
{
  const P = require(path.join(root, 'math', 'paper.js')), DAY = 864e5;
  // 每一行：id 是 fracadd 標準格式、fromId 還原得出來、答案＝家長批改的正解（這裡手寫，跟 fracadd 的算法互相對）、src 只有講義回數頁題號
  const WANT = { 'fa:3.5_7+5.11_12': '9 又 53/84', 'fa:3.15_27-11_18': '2 又 17/18', 'fa:33_14-5_3': '29/42', 'fa:3.2_3+1.4_5': '5 又 7/15',
    'fa:2.1_2+1.4_5-3.2_3': '19/30', 'fa:8_9+3.7_15+8_9': '5 又 11/45',   // 2026-11-21 三個數改收原題（以前收 'fa:4.3_10-3.2_3'、'fa:4.16_45+8_9'，答案一樣）
    'fa:8_27+7_18': '37/54', 'fa:12_15+3.4_5': '4 又 3/5', 'fa:5.1_12-3.4_6': '1 又 5/12', 'fa:3.4_9+1.5_12': '4 又 31/36' };   // 2026-11-21 講義第 12 回
  const WAS = { 'fa:2.1_2+1.4_5-3.2_3': 'fa:4.3_10-3.2_3', 'fa:8_9+3.7_15+8_9': 'fa:4.16_45+8_9' };
  ok(P.FA_ROWS.length === 10 && P.FA_ROWS.map(r => r.id).join() === Object.keys(WANT).join(), 'FA_ROWS: the 10 registered questions: ' + P.FA_ROWS.map(r => r.id).join(' '));
  ok(P.FA_ROWS.filter(r => r.was).map(r => r.id + '<' + r.was).join() === Object.keys(WAS).map(k => k + '<' + WAS[k]).join() && Object.keys(WAS).every(k => FA.txt(FA.fromId(WAS[k]).ans) === WANT[k]), 'was: old ids of the two three-number questions, same answer');
  ok(P.FA_ROWS.find(r => r.id === 'fa:8_27+7_18').d === '2026-11-21' && P.FA_ROWS.find(r => r.id === 'fa:8_27+7_18').src === '講義第 12 回 算算看 第 (1) 題', '第 12 回 算算看 (1) 8/27＋7/18 registered 2026-11-21');
  P.FA_ROWS.forEach(r => {
    const q = FA.fromId(r.id), e = q && FA.mkEntry(q);
    ok(q && e.id === r.id && FA.txt(q.ans) === WANT[r.id], 'row ' + r.id + ' → ' + (q && FA.txt(q.ans)));
    ok(q && FA.grade(q, { w: q.ans.w || '', n: q.ans.n || '', d: q.ans.n ? q.ans.d : '' }).st === 'ok', 'row ' + r.id + ' : simplest answer graded ok');
    ok(/^\d{4}-\d\d-\d\d$/.test(r.d) && !isNaN(Date.parse(r.d + 'T00:00:00+08:00')) && /^講義第 \d+ 回 (p\.\d+|算算看|看圖) 第 \(\d+\) 題( [①-⑨])?$/.test(r.src) && r.id.length <= 27 && Object.keys(r).sort().join() === (r.was ? 'd,id,src,was' : 'd,id,src'), 'row ' + r.id + ' : date + source only (no child info)');
    ok(KM.unitOf('math', e.id, e.p) === 'g5a6', 'row ' + r.id + ' : 五上單元六');
  });
  // 4又22/15（帶分數裡還是假分數）：照 fracadd 既有規則只提醒要化成帶分數，不算對
  ok(FA.grade(FA.fromId('fa:3.2_3+1.4_5'), { w: 4, n: 22, d: 15 }).st === 'fix', '4又22/15 → fix (not accepted as correct)');
  // 第 12 回：沒約分的 12/15、4/6 照原卷收；孩子的錯答 3又8/5（沒進位）只提醒、1又23/36（誤用 3又4/9）判錯
  { const a = FA.fromId('fa:12_15+3.4_5'), b = FA.fromId('fa:5.1_12-3.4_6'), c = FA.fromId('fa:3.4_9+1.5_12');
    ok(a.kind === 'madd' && a.a.n === 12 && a.a.d === 15 && b.kind === 'msub' && b.b.n === 4 && b.b.d === 6 && c.kind === 'madd', '第 12 回: unreduced 12/15、3又4/6 kept as written');
    ok(FA.grade(a, { w: 3, n: 8, d: 5 }).st === 'fix' && FA.grade(a, { n: 23, d: 5 }).st === 'fix' && FA.grade(a, { w: 4, n: 3, d: 5 }).st === 'ok', '3又8/5 → fix (要進位), 4又3/5 ok');
    ok(FA.grade(b, { w: 1, n: 23, d: 36 }).st === 'wrong' && FA.grade(b, { w: 1, n: 10, d: 24 }).st === 'fix' && FA.grade(b, { w: 1, n: 5, d: 12 }).st === 'ok', '1又23/36 (用錯 3又4/9) → wrong, 1又10/24 → fix, 1又5/12 ok');
    ok(FA.grade(c, { w: 4, n: 31, d: 36 }).st === 'ok' && FA.grade(c, { w: 4, n: 62, d: 72 }).st === 'fix', '4又31/36 ok'); }
  const T = Date.parse('2026-11-19T00:00:00+08:00'), NOW = T + 3600e3;
  const RT = {}; P.FA_ROWS.forEach(r => { RT[r.id] = Date.parse(r.d + 'T00:00:00+08:00'); });
  const TL = Math.max(...Object.values(RT));   // 最晚的登錄日
  const rows = () => P.FA_ROWS.map(r => { const e = FA.mkEntry(FA.fromId(r.id)); return { id: e.id, t: Date.parse(r.d + 'T00:00:00+08:00'), p: e.p, was: r.was }; });
  const PP = { 'pp:A': { d: 1, w: 1, t: 5, u: 5 } };   // 加過紙本錯題的帳號（墓碑也算）
  // 會併入：空的（只有 pp: 標記）→ 5 題，c=0、w=1、t=u=登錄日、p 跟 fracadd 自己記的一樣
  const b1 = JSON.parse(JSON.stringify(PP));
  const N = P.FA_ROWS.length;
  ok(KM.seed(b1, rows(), NOW) === N && Object.keys(WANT).every(id => b1[id] && b1[id].c === 0 && b1[id].w === 1 && b1[id].t === RT[id] && b1[id].u === RT[id] && b1[id].p.type === 'fracadd'), 'seed: all ' + N + ' added with t=u=registration day');
  const fl = KM.liveList(b1).filter(e => e.p.type === 'fracadd');
  ok(fl.length === N && fl.every(e => KM.unitOf('math', e.id, e.p) === 'g5a6'), 'seed: listed as live fracadd mistakes under 五上單元六');
  // 不會重複加：再跑一次 0 題；已經在練（c=2）的不被重設
  b1['fa:33_14-5_3'].c = 2; b1['fa:33_14-5_3'].u = NOW + 5;
  ok(KM.seed(b1, rows(), NOW + 10) === 0 && b1['fa:33_14-5_3'].c === 2 && Object.keys(b1).length === N + 1, 'seed: second run adds nothing, progress kept');
  // 能重練、照舊連對 3 次畢業：用 fracadd 的 record 路徑（mark）
  const id = 'fa:3.15_27-11_18', p = FA.mkEntry(FA.fromId(id)).p, rr = [];
  for (let k = 0; k < 3; k++) rr.push(KM.mark(b1, id, true, p, NOW + 100 + k));
  ok(rr.join() === 'counted,counted,graduated' && b1[id].d === 1, 'seeded item graduates after 3 correct in a row: ' + rr);
  // 有墓碑就不加（畢業了不會被加回來）
  ok(KM.seed(b1, rows(), NOW + 200) === 0 && b1[id].d === 1, 'seed: tombstone → not re-added');
  // 別台還沒收到墓碑就先補：補的 u＝登錄日 → 同步時墓碑勝
  const other = JSON.parse(JSON.stringify(PP)); KM.seed(other, rows(), NOW + 300);
  ok(SM.mergeMk({ math: b1 }, { math: other }).math[id].d === 1 && SM.mergeMk({ math: other }, { math: b1 }).math[id].d === 1, 'seed on a stale device cannot resurrect a graduated item via sync');
  // 沒加過紙本錯題的帳號（其他會員）不補；登錄超過 14 天不補
  ok(KM.seed({}, rows(), NOW) === 0 && KM.seed({ 'fa:1_3+3_4': { c: 0, w: 1, t: 1, u: 1, p: {} } }, rows(), NOW) === 0 && !KM.hasPaper({ 'pa:x': {} }), 'seed: accounts without pp: get nothing');
  const N21 = P.FA_ROWS.filter(r => RT[r.id] > T).length;   // 每題各自算 14 天：11-19 的過期了、11-21 的還在
  ok(N21 === 4 &&KM.seed(JSON.parse(JSON.stringify(PP)), rows(), TL + KM.SEED_DAYS * DAY + 1) === 0 && KM.seed(JSON.parse(JSON.stringify(PP)), rows(), T + KM.SEED_DAYS * DAY + 1) === N21 && KM.seed(JSON.parse(JSON.stringify(PP)), rows(), T + KM.SEED_DAYS * DAY - 1) === N, 'seed: only within ' + KM.SEED_DAYS + ' days of each row\'s registration');
  ok(KM.seed(JSON.parse(JSON.stringify(PP)), [null, { id: '', t: T }, { id: 'fa:1_3+3_4' }, { id: '_x', t: T, p: {} }], NOW) === 0, 'seed: bad rows ignored');
  // 換 id（2026-11-21，三個數改收原題；FA_ROWS 的 was＝舊 id）
  { const NEW1 = 'fa:2.1_2+1.4_5-3.2_3', OLD1 = 'fa:4.3_10-3.2_3', NEW2 = 'fa:8_9+3.7_15+8_9', OLD2 = 'fa:4.16_45+8_9', oldP = id => FA.mkEntry(FA.fromId(id)).p;
    // ① 舊 id 已經畢業（墓碑）→ 新 id 不補；另一題舊 id 還在練（c=1、錯 2 次）→ 補新 id 接著 c、w，舊 id 蓋墓碑
    const b = Object.assign(JSON.parse(JSON.stringify(PP)), { [OLD1]: { d: 1, w: 1, t: RT[NEW1], u: NOW - 50 }, [OLD2]: { c: 1, w: 2, t: RT[NEW2], u: NOW - 40, p: oldP(OLD2) } });
    const n = KM.seed(b, rows(), NOW);
    ok(!b[NEW1] && b[OLD1].d === 1, 'was graduated → new id not added (same question)');
    ok(b[NEW2] && !b[NEW2].d && b[NEW2].c === 1 && b[NEW2].w === 2 && b[NEW2].t === RT[NEW2] && b[NEW2].u === RT[NEW2] && b[NEW2].p.op === '++' && b[OLD2].d === 1 && b[OLD2].w === 2 && b[OLD2].u === NOW, 'was live → new id added with its progress (c=1, w=2), old id tombstoned');
    ok(n === N - 1 + 1, 'seed count: ' + (N - 1) + ' added + 1 old id retired = ' + n);
    const fl = KM.liveList(b).filter(e => e.p.type === 'fracadd').map(e => e.id);
    ok(fl.length === N - 1 && fl.indexOf(OLD1) < 0 && fl.indexOf(OLD2) < 0 && fl.indexOf(NEW1) < 0 && fl.indexOf(NEW2) >= 0, 'list: each paper question once (' + fl.length + ')');
    ok(KM.seed(b, rows(), NOW + 5) === 0 && !b[NEW1], 'second run: nothing changes');
    // 換過的新 id 照舊連對 3 次畢業：已經有 c=1，再對 2 次就畢業（同一題不重算）
    const rr = [KM.mark(b, NEW2, true, null, NOW + 10), KM.mark(b, NEW2, true, null, NOW + 11)];
    ok(rr.join() === 'counted,graduated' && b[NEW2].d === 1, 'migrated item keeps progress: graduates after 2 more: ' + rr);
    // ② 別台（還沒換）同步過來：舊 id 還活著的舊副本被墓碑蓋掉、新 id 進來；舊版頁面不會把畢業的舊題補回來（有墓碑就不補）
    const stale = Object.assign(JSON.parse(JSON.stringify(PP)), { [OLD2]: { c: 1, w: 2, t: RT[NEW2], u: NOW - 40, p: oldP(OLD2) } });
    const m = SM.mergeMk({ math: b }, { math: stale }).math, m2 = SM.mergeMk({ math: stale }, { math: b }).math;
    ok(m[OLD2].d === 1 && m2[OLD2].d === 1 && m[NEW2].d === 1, 'sync: retired old id stays retired on the other device; graduated new id stays graduated');
    // ③ 新舊都活著（別台換了、這台的舊題又被練到）→ 舊的收掉，新的不動
    const both = Object.assign(JSON.parse(JSON.stringify(PP)), { [OLD2]: { c: 2, w: 1, t: 1, u: NOW + 90, p: oldP(OLD2) }, [NEW2]: { c: 1, w: 1, t: RT[NEW2], u: NOW + 80, p: FA.mkEntry(FA.fromId(NEW2)).p } });
    ok(KM.seed(both, rows(), NOW + 100) >= 1 && both[OLD2].d === 1 && both[NEW2].c === 1 && !both[NEW2].d, 'old and new both live → old retired, new untouched');
    // 登錄超過 14 天：新 id 不補，但已經有新 id 的舊題照樣收掉（不會兩題都在）
    const late = Object.assign(JSON.parse(JSON.stringify(PP)), { [OLD2]: { c: 0, w: 1, t: 1, u: 2, p: oldP(OLD2) } });
    ok(KM.seed(late, rows(), TL + KM.SEED_DAYS * DAY + 1) === 0 && !late[NEW2] && !late[OLD2].d, 'after 14 days: old id left as is, new id not added (still only once)');
    // 新版清單畫得出三個數、舊版 frItem（只認 6 個數）退回文字也不會壞：p.q 是完整的三個數
    ok(FA.mkEntry(FA.fromId(NEW1)).p.q === '2 又 1/2 ＋ 1 又 4/5 － 3 又 2/3', 'p.q has all three numbers (old cached pages fall back to text)'); }
  // 大小（同步上限不放寬）：寬格式最長的 id／p 50 題未畢業＋300 墓碑仍 ≤ MAX_BYTES/4、跟舊格式同一個量級
  const big = {}; for (let i = 0; i < 50; i++) { const q = FA.fromId('fa:9.' + (49 + i) + '_99+9.98_99'), e = FA.mkEntry(q); big[e.id] = { c: 2, w: 99, t: 1.8e12, u: 1.8e12, p: e.p }; }
  for (let i = 0; i < 300; i++) big['fa:9.' + (10 + i % 89) + '_99-' + (1 + (i >> 4)) + '_' + (60 + (i % 16)) ] = { d: 1, w: 99, t: 1.8e12 + i, u: 1.8e12 + i };
  const nb = SM.bytes(SM.normMk({ math: big }));
  ok(Object.keys(big).filter(k => !big[k].d).length === 50 && Object.keys(big).every(k => k.length <= 18) && nb < 30 * 1024 && nb <= SM.MAX_BYTES / 4, 'wide-format worst case 50 live + 300 tombstones = ' + nb + ' B (≤ MAX_BYTES/4, id ≤ 18 chars)');
  // 三個數（2026-11-21）：就算 50 題未畢業全是最長的三個數 id、300 墓碑也是 → 仍 ≤ MAX_BYTES/4（實際只有紙本登錄的幾題，隨機出題不出三個數）
  const b3 = {}; for (let i = 0; i < 50; i++) { const e = FA.mkEntry(FA.fromId('fa:9.' + (49 + i) + '_99+9.98_99-9.97_99')); b3[e.id] = { c: 2, w: 99, t: 1.8e12, u: 1.8e12, p: e.p }; }
  for (let i = 0; i < 300; i++) b3['fa:9.' + (10 + i % 89) + '_99-' + (1 + (i >> 4)) + '_' + (60 + (i % 16)) + '+9.97_99'] = { d: 1, w: 99, t: 1.8e12 + i, u: 1.8e12 + i };
  const n3 = SM.bytes(SM.normMk({ math: b3 }));
  ok(Object.keys(b3).filter(k => !b3[k].d).length === 50 && Object.keys(b3).every(k => k.length <= 27) && n3 <= SM.MAX_BYTES / 4, 'three-number worst case 50 live + 300 tombstones = ' + n3 + ' B (≤ MAX_BYTES/4 = ' + SM.MAX_BYTES / 4 + ')');
}
// 頁面接線：?mistakes=1 重練、每題進錯題庫、做完送 math:mistakes；錯題庫的路由／徽章／接著練
{
  const h = fs.readFileSync(path.join(root, 'math', 'fracadd.html'), 'utf8'), kmj = fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8'), sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
  ok(/<script src="\.\.\/kids-mistakes\.js(\?v=[0-9a-f]+)?"><\/script>/.test(h) && h.indexOf('kids-mistakes.js') < h.indexOf('window.FAPage'), 'fracadd.html loads kids-mistakes.js before the page script');
  ok(h.includes("KidsMistakes.record('math', m.id, ok, m.p)") && h.includes('FA.fromId(e.id)') && h.includes("coinReport('math:mistakes'") && h.includes("e.p.type !== 'fracadd'"), 'fracadd.html: record + replay by id + math:mistakes');
  ok(sj.includes("'math/fracadd.html?mistakes=1'") && kmj.includes("['fracadd', '異分母加減', 'fracadd.html?mistakes=1']") && kmj.includes("p.type === 'fracadd' ? '異分母加減'") && kmj.includes("t === 'fracadd'"), 'route + badge + 接著練 + mathType');
  const CK = require(path.join(root, 'kids-coins.js'))._core;
  const KA = require(path.join(root, 'assistant-core.js'));
  ok(KA._.mathKind('fa:1_3+3_4', { type: 'fracadd' }) === 'fracadd' && /fracadd$/.test(KA.MATH_KIND.fracadd[1]), '學習小助理：異分母錯題自成一類（不算成天平）');
  ok(CK.validEvent({ event_id: 'e-1', type: 'practice_round', item: 'math:mistakes', correct: 1, total: 2 }), 'math:mistakes already whitelisted (no new category)');
}

// 頁面接線：每題學習幣＋每日清單（數學「異分母加減」），要登入；首頁數學卡片有入口
const html = fs.readFileSync(path.join(root, 'math', 'fracadd.html'), 'utf8');
ok(html.includes("KidsDaily.rec('math', ok, 'fracadd')") && html.includes("KidsCoins.answer(!!ok, 'math')") && html.includes("KidsAuth.startActivity('math'"), 'page records daily + coins + login');
// 2026-11-21：🔁 進位挑戰（同一頁、同一個 rec＝每日清單「異分母加減」f、隨機題不看學過 2 次）、收尾檢查（提醒過一次再送＝again）、三個數畫三個數
ok(html.includes('id="go-carry"') && html.includes("FA.round(10, null, carry ? ['carry'] : null)") && html.includes('FA.grade(q, R.v, R.tidy > 0)') && html.includes('R.tidy++') && html.includes('FA.nums(q)') && !/kids-lock\.js/.test(html), 'fracadd.html: carry mode button, tidy-check retry flag, three numbers drawn, no kids-lock');
{ const KLk = require(path.join(root, 'kids-lock.js')); ok(KLk.keyFromUrl('math/fracadd.html', '') == null && KLk.keyFromUrl('math/fracadd.html', '?mistakes=1') == null, 'kids-lock: fracadd page (both modes) not locked'); }
ok(/id: 'fracadd'[^\n]*src: 'math\/fracadd\.html'/.test(fs.readFileSync(path.join(root, 'subjects.js'), 'utf8')), 'math card');

console.log(`fracadd: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
