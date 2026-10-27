// fraction.test.js — 〈分數比較大小〉math/fraction.js 單元測試（2026-10-27）
// 用法：node test/fraction.test.js（smoke.js 也會跑）
// - 每種題型隨機出 3000 題：答案跟這裡另外寫的「交叉相乘」（整數，不用浮點數）逐題比對，＞＜＝ 三個按鈕只有一個判對
// - 先填的格子（通分／約分／化帶分數）：正解判對、其他寫法（不是最小公倍數、還能約、整數少 1）判錯 → 答案唯一
// - 錯題庫原題重做、固定考卷 100 分
'use strict';
const path = require('path');
const F = require(path.join(__dirname, '..', 'math', 'fraction.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL fraction:', m); } };
const S = s => JSON.stringify(s);

// 獨立的比法：全部化成假分數分子，交叉相乘（整數）
const brute = (A, B) => { const x = (A[0] * A[2] + A[1]) * B[2], y = (B[0] * B[2] + B[1]) * A[2]; return x > y ? '>' : x < y ? '<' : '='; };
const g = (a, b) => (b ? g(b, a % b) : a);
let seed = 20261027; const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);

const KINDS = Object.keys(F.GROUP_OF), N = 3000, seenAns = {};
KINDS.forEach(k => {
  let good = 0, bad = [];
  for (let i = 0; i < N; i++) {
    const Q = F.make(k, rnd);
    if (!Q) { bad.push('make null'); continue; }
    const A = Q.A, B = Q.B, want = brute(A, B), hits = F.SIGNS.filter(s => F.checkCmp(Q, s).ok);
    (seenAns[k] = seenAns[k] || {})[want] = 1;
    // 各題型名實相符（獨立再檢查一次）
    const w = X => X[0] + Math.floor(X[1] / X[2]), r = X => X[1] % X[2], imp = X => X[0] === 0 && X[1] >= X[2];
    const shape = {
      sd: A[2] === B[2] && A[1] < A[2] && B[1] < B[2] && A[0] === 0 && B[0] === 0,
      sn: A[1] === B[1] && A[2] !== B[2] && !A[0] && !B[0],
      one: (A[2] - A[1] === 1 && B[2] - B[1] === 1) || (A[1] - A[2] === 1 && B[1] - B[2] === 1),
      half: (2 * A[1] - A[2]) * (2 * B[1] - B[2]) < 0,
      lcd: A[0] === B[0] && g(A[1], A[2]) === 1 && g(B[1], B[2]) === 1 && A[2] !== B[2],
      red: g(A[1], A[2]) > 1 && g(B[1], B[2]) > 1,
      mixw: (imp(A) || imp(B)) && w(A) !== w(B),
      mixs: (imp(A) || imp(B)) && w(A) === w(B) && r(A) > 0 && r(B) > 0,
      mixm: (imp(A) && r(A) === 0) || (imp(B) && r(B) === 0)
    }[k];
    // 先填的格子
    let fillOk = true;
    if (Q.fill) {
      const fa = F.fillAnswer(Q);
      fillOk = F.checkFill(Q, fa).ok;
      if (Q.fill.t === 'lcd') {
        const L = A[2] / g(A[2], B[2]) * B[2];
        fillOk = fillOk && fa.ad === L && fa.bd === L && fa.an * A[2] === A[1] * L && fa.bn * B[2] === B[1] * L;   // 真的通分了、分母是最小公倍數
        fillOk = fillOk && !F.checkFill(Q, { an: fa.an * 2, ad: L * 2, bn: fa.bn * 2, bd: L * 2 }).ok;             // 2 倍的公倍數也通分了，但不收（答案唯一）
      } else if (Q.fill.t === 'red') {
        fillOk = fillOk && g(fa.an, fa.ad) === 1 && g(fa.bn, fa.bd) === 1 && fa.an * A[2] === A[1] * fa.ad && fa.bn * B[2] === B[1] * fa.bd;
        fillOk = fillOk && !F.checkFill(Q, { an: A[1], ad: A[2], bn: fa.bn, bd: fa.bd }).ok;                       // 沒約（還能約）不收
      } else {
        [['a', A], ['b', B]].forEach(([s, X]) => {
          if (!imp(X)) { fillOk = fillOk && fa[s + 'w'] === undefined; return; }
          fillOk = fillOk && fa[s + 'w'] * X[2] + (fa[s + 'r'] || 0) === X[1] && (fa[s + 'r'] || 0) < X[2];
          if (fa[s + 'w'] > 0) { const alt = Object.assign({}, fa); alt[s + 'w'] = fa[s + 'w'] - 1; alt[s + 'r'] = (fa[s + 'r'] || 0) + X[2]; fillOk = fillOk && !F.checkFill(Q, alt).ok; }
        });
        fillOk = fillOk && (imp(A) || imp(B));
      }
      fillOk = fillOk && !F.checkFill(Q, {}).ok;
    }
    const R = F.build(k, Q.v);
    if (Q.ans === want && hits.length === 1 && hits[0] === want && shape && fillOk && R && R.id === Q.id && F.steps(Q).length >= 2 && Q.text.indexOf('/') > 0) good++;
    else bad.push(S({ k, v: Q.v, ans: Q.ans, want, hits, shape, fillOk }));
  }
  ok(good === N, `${k}: ${good}/${N} correct + unique` + (bad.length ? ' e.g. ' + bad.slice(0, 2).join(' ') : ''));
});
// 會出到各種答案（不是永遠同一個符號）
ok(['sd', 'sn', 'one', 'half', 'lcd', 'mixw', 'mixs'].every(k => seenAns[k]['>'] && seenAns[k]['<']) && seenAns.red['='] && seenAns.mixm['='], 'answers vary: ' + S(seenAns));
// 有 fill 的題型
ok(['lcd', 'red', 'mixw', 'mixs', 'mixm'].every(k => F.make(k, rnd).fill) && ['sd', 'sn', 'one', 'half'].every(k => !F.make(k, rnd).fill), 'fill only on lcd／red／mix*');

// cmp 只用整數：大數字也不會出錯（浮點數會在這裡分不出來）
ok(F.cmp([0, 999999, 1000000], [0, 999998, 999999]) === '>' && F.cmp([0, 2, 4], [0, 3, 6]) === '=' && F.cmp([2, 1, 3], [0, 7, 3]) === '=', 'cmp integer cross-multiply');

// build 擋壞資料（錯題庫可能被改壞）
ok([['sd', [0, 3, 5, 0, 3, 5]], ['sd', [0, 3, 5, 0, 2, 7]], ['sn', [0, 2, 5, 0, 3, 5]], ['one', [0, 3, 5, 0, 4, 5]], ['half', [0, 1, 2, 0, 1, 3]], ['lcd', [0, 2, 4, 0, 1, 3]],
  ['red', [0, 1, 3, 0, 2, 4]], ['mixw', [0, 7, 3, 0, 8, 3]], ['mixs', [0, 7, 3, 0, 13, 4]], ['mixm', [0, 7, 3, 0, 5, 2]], ['sd', [0, 1, 0, 0, 2, 0]], ['sd', ['x', 1, 5, 0, 2, 5]], ['nope', [0, 1, 5, 0, 2, 5]], ['sd', [0, 1, 5]]]
  .every(([k, v]) => F.build(k, v) === null), 'build rejects wrong-shaped / garbage v');

// 練習一輪
F.GROUPS.forEach(([gid]) => { const R = F.round(gid, 5, rnd); ok(R.length === 5 && new Set(R.map(q => q.id)).size === 5 && R.every(q => q.group === gid), 'round ' + gid + ': 5 distinct'); });

// 錯題庫
{
  let good = 0;
  KINDS.forEach(k => { for (let i = 0; i < 30; i++) { const Q = F.make(k, rnd), e = F.mkEntry(Q), R = F.fromMistake(JSON.parse(S(e.p))); if (e.id === Q.id && e.p.type === 'fraction' && R && R.id === Q.id && R.ans === Q.ans && e.id.length <= 200) good++; } });
  ok(good === KINDS.length * 30, 'mistakes round-trip: ' + good);
  ok(F.fromMistake({ type: 'fraction', k: 'nope', v: [0, 1, 5, 0, 2, 5] }) === null && F.fromMistake({ type: 'multiples', k: 'sd', v: [0, 1, 5, 0, 2, 5] }) === null && F.fromMistake({ type: 'fraction', k: 'sd', v: 'x' }) === null, 'mistakes: bad entries → null');
}

// 判分細節
{
  const Q = F.build('lcd', [0, 5, 6, 0, 7, 9]);   // 15/18、14/18
  ok(F.checkFill(Q, { an: '15', ad: '18', bn: '14', bd: '18' }).ok && F.checkFill(Q, { an: '１５', ad: '18', bn: '14', bd: '18' }).ok, 'lcd fill ok (全形數字也收)');
  const r1 = F.checkFill(Q, { an: 30, ad: 36, bn: 28, bd: 36 }); ok(!r1.ok && /最小公倍數 18/.test(r1.hint), 'lcd 36 → hint 最小公倍數: ' + r1.hint);
  const r2 = F.checkFill(Q, { an: 5, ad: 18, bn: 14, bd: 18 }); ok(!r2.ok && r2.bad.join() === 'an' && /×3/.test(r2.hint), 'lcd 分子沒乘 → hint ×3: ' + r2.hint);
  const P = F.build('red', [0, 8, 12, 0, 10, 18]);   // 2/3、5/9
  const r3 = F.checkFill(P, { an: 4, ad: 6, bn: 5, bd: 9 }); ok(!r3.ok && /還可以再約/.test(r3.hint), 'red 4/6 → 還可以再約: ' + r3.hint);
  const M = F.build('mixw', [0, 17, 5, 0, 11, 4]);   // 3 2/5、2 3/4
  ok(F.checkFill(M, { aw: 3, ar: 2, bw: 2, br: 3 }).ok && !F.checkFill(M, { aw: 3, ar: 2, bw: 2, br: 4 }).ok && M.ans === '>', 'mix fill');
  ok(F.steps(M).join(' ').includes('先比整數：3 ＞ 2'), 'mix steps: 先比整數');
  const Z = F.build('mixm', [0, 54, 18, 0, 48, 16]); ok(Z.ans === '=' && F.checkFill(Z, { aw: 3, bw: 3 }).ok && F.steps(Z).join(' ').includes('一樣大'), 'mixm 54/18 = 48/16 = 3');
  ok(F.fh([3, 2, 5]).includes('fr-w">3<') && F.fh([0, 2, 5]).includes('fr-n">2<') && !/\d\/\d/.test(F.fh([0, 2, 5])), 'fh: stacked HTML, no slash');
  ok(F.steps(Q).concat(F.cmpHint(Q), F.answerHTML(Q), F.fillHTML(Q)).every(s => !/\d\/\d/.test(s)), 'hints/steps never use slash fractions');
}

// 固定考卷
{
  const secs = F.exam(), all = secs.flatMap(s => s.items);
  ok(secs.length === 6 && all.length === 30 && all.every(Boolean) && secs.reduce((t, s) => t + s.pts * s.items.length, 0) === 100, 'exam: 6 sections, 30 items, 100 points');
  ok(secs.slice(0, 5).every(s => s.mode === 'cmp') && secs[5].mode === 'fill' && secs[5].items.every(Q => Q.fill), 'exam: ①–⑤ compare, ⑥ fill');
  ok(all.every(Q => Q.ans === brute(Q.A, Q.B)), 'exam answers = brute force');
  const ans = all.map(Q => Q.ans); ok(['>', '<', '='].every(s => ans.slice(0, 25).filter(x => x === s).length >= 2), 'exam answers spread: ' + ans.slice(0, 25).join(''));
  const perfect = {}; secs.forEach(s => s.items.forEach(Q => { perfect[Q.id] = s.mode === 'fill' ? F.fillAnswer(Q) : Q.ans; }));
  ok(F.examScore(secs, perfect).total === 100 && F.examScore(secs, {}).total === 0, 'examScore perfect 100 / empty 0');
  const one = Object.assign({}, perfect); one[secs[2].items[0].id] = '>'; one[secs[5].items[0].id] = { an: 1, ad: 1, bn: 1, bd: 1 };
  const R = F.examScore(secs, one); ok(R.total === 94 && R.secs[2].got === 16 && R.secs[5].got === 8, 'examScore: one 4-pt + one 2-pt wrong → 94');
  ok(new Set(all.map(Q => Q.id)).size === 30, 'exam ids unique');
}

console.log(`fraction: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
