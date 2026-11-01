// node test/word-bank.test.js — 數學各單元「應用題」情境模板（2026-11-01 補題）：每個模板隨機 3000 次，用另一套算法驗證答案。
// 涵蓋：倍數與公倍數（multiples.js 的 CTX 每一個故事）、分數比較大小（fraction.js WCTX）、乘法快算（multiply.js WCTX）、天平（balance-word.js）。
// 短除法應用題（gcd-word.js）每個模板 3000 次在 test/gcd-word.test.js。
'use strict';
const path = require('path');
const M = require(path.join(__dirname, '..', 'math', 'multiples.js'));
const F = require(path.join(__dirname, '..', 'math', 'fraction.js'));
const X = require(path.join(__dirname, '..', 'math', 'multiply.js'));
const BW = require(path.join(__dirname, '..', 'math', 'balance-word.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('FAIL', m); } };
const N = 3000, J = JSON.stringify;
function lcg(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
const rnd = lcg(20261101);
const pos = n => Number.isInteger(n) && n > 0;
// 獨立算法：一個一個數過去（不用 gcd／lcm）
const firstUp = (from, f) => { for (let x = from; x < from + 1e6; x++) if (f(x)) return x; return NaN; };
const lastDown = (from, f) => { for (let x = from; x > 0; x--) if (f(x)) return x; return NaN; };
const between = (A, B, f) => { const o = []; for (let x = A + 1; x < B; x++) if (f(x)) o.push(x); return o; };

// ================= 倍數與公倍數：每一個故事（CTX[kind][c]）× 3000 =================
{
  const kinds = Object.keys(M.CTX);
  let stories = 0;
  kinds.forEach(kind => M.CTX[kind].forEach((ctx, c) => {
    stories++;
    let bad = 0, first = '';
    for (let i = 0; i < N; i++) {
      const v = M.gen(kind, rnd); v[0] = c;
      const Q = M.build(kind, v), why = [];
      if (!Q) { bad++; first = first || 'null ' + J(v); continue; }
      let want;
      switch (kind) {
        case 'wfloor': want = [lastDown(Q.N, x => x % Q.d === 0)]; break;
        case 'wover': want = [firstUp(Q.N + 1, x => x % Q.d === 0)]; break;
        case 'wceil': { const k = firstUp(1, k => k * Q.d >= Q.N); want = [k, k * Q.d]; break; }
        case 'wrange': { const xs = between(Q.A, Q.B, x => x % Q.d === 0); if (xs.length !== 1) why.push('not unique ' + xs); want = xs.slice(0, 1); break; }
        case 'wlcm': want = [firstUp(1, x => x % Q.a === 0 && x % Q.b === 0)]; break;
        case 'wlcmr': { const xs = between(Q.A, Q.B, x => x % Q.a === 0 && x % Q.b === 0); if (xs.length !== 1) why.push('not unique ' + xs); want = xs.slice(0, 1); break; }
        case 'lminmax': { const xs = between(Q.A, Q.B, x => x % Q.d === 0); want = [xs[0], xs[xs.length - 1]]; break; }
        case 'lsquare': want = [firstUp(1, x => x % Q.L === 0 && x % Q.W === 0)]; break;
      }
      if (J(Q.ans) !== J(want)) why.push('ans ' + J(Q.ans) + '≠' + J(want));
      if (!Q.ans.every(pos)) why.push('not positive int');
      if (/\{|NaN|undefined/.test(Q.text)) why.push('text');
      const units = Q.units || [Q.unit];
      if (units.some(u => M.UNITS.indexOf(u) < 0)) why.push('unit ' + units);
      const a = kind === 'lminmax' ? { min: Q.ans[0], max: Q.ans[1] } : kind === 'lsquare' ? { n: Q.ans[0] } : { nums: Q.ans, units: Q.units };
      if (!M.check(Q, a).ok) why.push('check(correct) not ok');
      const e = M.mkEntry(Q), R = M.fromMistake(JSON.parse(J(e.p)));
      if (!R || R.id !== Q.id || R.text !== Q.text) why.push('mistake round-trip');
      if (why.length) { bad++; first = first || J(v) + ' ' + why.join('; '); }
    }
    ok(!bad, `multiples ${kind}#${c}「${ctx[0].slice(0, 16)}…」${N} 次：答案＝逐一數過去的結果、單位在選單裡、錯題重做` + (bad ? ` — 錯 ${bad}，例 ${first}` : ''));
  }));
  ok(stories >= 30, 'multiples: 應用題＋素養題故事 ' + stories + ' 個（≥ 30）');
}

// ================= 分數比較大小：⑥ 應用題 WCTX × 3000 =================
{
  const val = Fr => [Fr[0] * Fr[2] + Fr[1], Fr[2]];   // 假分數 [分子, 分母]
  const lcmBrute = (a, b) => firstUp(Math.max(a, b), x => x % a === 0 && x % b === 0);
  ok(F.WCTX.length >= 15 && F.GROUPS.length === 5 && !F.GROUPS.some(g => g[0] === 'word'), 'fraction: ' + F.WCTX.length + ' 個情境；GROUPS 還是 5 組（應用題不列入完成）');
  F.WCTX.forEach((C, c) => {
    let bad = 0, first = '', kinds = new Set(), signs = new Set();
    for (let i = 0; i < N; i++) {
      const Q = F.makeWord(c, rnd), why = [];
      if (!Q) { bad++; first = first || 'null'; continue; }
      kinds.add(Q.kind); signs.add(Q.ans);
      // 通分到「一個一個數出來的」公分母再比分子（跟 fraction.js 的交叉相乘不同）
      const [an, ad] = val(Q.A), [bn, bd] = val(Q.B), L = lcmBrute(ad, bd), x = an * (L / ad), y = bn * (L / bd);
      const want = x > y ? '>' : x < y ? '<' : '=';
      if (Q.ans !== want) why.push('ans ' + Q.ans + '≠' + want);
      if (![an, ad, bn, bd].every(pos)) why.push('not positive');
      if (C.part && !(an < ad && bn < bd)) why.push('part 要真分數');
      if (Math.max(ad, bd) > (F.W_MAXD[Q.kind] || 12)) why.push('分母太大');
      if ((C.part ? F.W_PART : F.W_QTY).indexOf(Q.kind) < 0) why.push('kind ' + Q.kind);
      // 結論：問「大」的，大的那個人贏；問「小」的，小的贏；一樣大＝same
      const aWin = C.ask === 'big' ? want === '>' : want === '<';
      const concl = want === '=' ? C.same : (aWin ? C.a : C.b) + C[C.ask];
      if (F.wordConcl(Q) !== concl || F.steps(Q).slice(-1)[0] !== '答：' + concl) why.push('concl');
      if (/\{|NaN|undefined/.test(Q.story + Q.text) || /\d\/\d/.test(Q.story)) why.push('story text（不可以有斜線分數）');
      if (!F.checkCmp(Q, want).ok || F.checkCmp(Q, want === '>' ? '<' : '>').ok) why.push('checkCmp');
      if (Q.fill && !F.checkFill(Q, F.fillAnswer(Q)).ok) why.push('fill');
      const e = F.mkEntry(Q), R = F.fromMistake(JSON.parse(J(e.p)));
      if (!R || R.id !== Q.id || R.ans !== Q.ans || R.story !== Q.story || e.p.c !== c || Q.group !== 'word') why.push('mistake round-trip');
      if (why.length) { bad++; first = first || J(Q.v) + ' ' + why.join('; '); }
    }
    ok(!bad, `fraction 應用題#${c}「${C.t.slice(0, 14)}…」${N} 次：比大小＝獨立通分、結論對、真分數／分母範圍、錯題重做（題型 ${[...kinds].join(',')}；答案 ${[...signs].join('')}）` + (bad ? ` — 錯 ${bad}，例 ${first}` : ''));
    ok(kinds.size >= (C.part ? 6 : 8), `fraction 應用題#${c} 題型有變化（${kinds.size} 種）`);
  });
  const r = F.wordRound(5, rnd);
  ok(r.length === 5 && new Set(r.map(Q => Q.c)).size === 5 && r.every(Q => Q.group === 'word'), 'fraction wordRound: 5 題、情境不重複');
  ok(F.buildWord(0, 'lcd', [2, 1, 3, 2, 1, 4]) === null && F.buildWord(0, 'mixw', [0, 7, 3, 0, 8, 3]) === null && F.buildWord(99, 'sd', [0, 1, 5, 0, 2, 5]) === null && F.fromMistake({ type: 'fraction', k: 'sd', v: [0, 1, 5, 0, 2, 5], c: 99 }) === null, 'fraction buildWord: 披薩題不出帶分數、壞資料回 null');
}

// ================= 乘法快算：應用題 WCTX × 3000 =================
{
  // 獨立：直式乘法逐位
  const longMul = (a, b) => { const da = String(a).split('').reverse().map(Number), db = String(b).split('').reverse().map(Number), r = new Array(da.length + db.length).fill(0); for (let i = 0; i < da.length; i++) for (let j = 0; j < db.length; j++) r[i + j] += da[i] * db[j]; for (let k = 0; k < r.length - 1; k++) { r[k + 1] += Math.floor(r[k] / 10); r[k] %= 10; } return +r.reverse().join(''); };
  ok(X.WCTX.length >= 15 && X.LV.indexOf('word') < 0, 'multiply: ' + X.WCTX.length + ' 個故事；應用題不在 LV（不算完成）');
  X.WCTX.forEach((C, c) => {
    let bad = 0, first = '', seen = new Set();
    for (let i = 0; i < N; i++) {
      const q = X.genWord(rnd, c), why = [], P = longMul(q.a, q.b), t = X.wordText(q);
      seen.add(q.a + 'x' + q.b);
      if (!(q.c === c && q.lv === 'word' && X.validWord(c, q.a, q.b))) why.push('valid');
      if (!(q.a >= 11 && q.a <= 99 && q.a % 10 !== 0 && q.b >= 2 && q.b <= 99 && !(q.b >= 10 && q.b % 10 === 0))) why.push('range 二位×一位／二位');
      if (q.a * q.b !== P || !pos(P) || !new RegExp('＝ ' + P + '$').test(X.full(q.a, q.b))) why.push('product');
      if (/\{|NaN|undefined/.test(t) || t.indexOf(String(q.a)) < 0 || t.indexOf(String(q.b)) < 0 || !X.wordUnit(q)) why.push('text');
      if (why.length) { bad++; first = first || J(q) + ' ' + why.join('; '); }
    }
    ok(!bad && seen.size >= 15, `multiply 應用題#${c}「${C[0].slice(0, 14)}…」${N} 次：範圍、乘積＝直式逐位、文字（${seen.size} 種）` + (bad ? ` — 錯 ${bad}，例 ${first}` : ''));
  });
  const r = X.wordRound(10, rnd);
  ok(r.length === 10 && new Set(r.map(q => q.c)).size === 10, 'multiply wordRound: 10 題、故事不重複');
  ok(!X.validWord(0, 10, 3) && !X.validWord(0, 61, 3) && !X.validWord(99, 20, 3) && !X.validWord(1, 21, 20), 'multiply validWord: 擋壞資料');
}

// ================= 天平：應用題 balance-word.js × 3000 =================
{
  // 獨立：把 x 代進算式字串，自己寫的遞迴下降算（只有 + − 括號）；中間結果不能是負的
  function evalSide(s, x) {
    let i = 0, neg = false;
    const num = () => { if (s[i] === '(') { i++; const v = expr(); i++; return v; } if (s[i] === 'x') { i++; return x; } let j = i; while (/[0-9]/.test(s[i])) i++; return +s.slice(j, i); };
    const expr = () => { let v = num(); while (s[i] === '+' || s[i] === '-') { const o = s[i++], r = num(); v = o === '+' ? v + r : v - r; if (v < 0) neg = true; } return v; };
    const v = expr(); return i === s.length && !neg ? v : NaN;
  }
  const holds = (eq, x) => { const [l, r] = eq.replace(/−/g, '-').split('='); return evalSide(l, x) === evalSide(r, x); };
  ok(BW.T.length >= 15, 'balance: ' + BW.T.length + ' 個故事');
  BW.T.forEach((t, c) => {
    let bad = 0, first = '', seen = new Set();
    for (let i = 0; i < N; i++) {
      const Q = BW.make(c, rnd), why = [];
      if (!Q) { bad++; first = first || 'null'; continue; }
      seen.add(Q.id);
      const nums = (Q.eq.match(/\d+/g) || []).map(Number);
      if (!pos(Q.x) || Q.x < 2) why.push('x');
      if (!holds(Q.eq, Q.x)) why.push('eq 代回不成立');
      if ([Q.x - 1, Q.x + 1, Q.x * 2].some(y => holds(Q.eq, y))) why.push('答案不唯一');
      if (!nums.every(n => n >= 1 && n <= 999) || (Q.eq.match(/x/g) || []).length !== 1 || /[−-]\(?x/.test(Q.eq) || !/^[^=]*x[^=]*=\d+$/.test(Q.eq)) why.push('天平頁不支援的式子 ' + Q.eq);
      if (Q.opts.length !== 3 || new Set(Q.opts).size !== 3 || Q.opts.filter(o => o === Q.eq).length !== 1) why.push('opts');
      if (Q.opts.some(o => o !== Q.eq && /x/.test(o.split('=')[0]) && holds(o, Q.x))) why.push('錯的選項也成立 ' + Q.opts);
      if (/\{|NaN|undefined/.test(Q.text) || !Q.unit || !Q.ask) why.push('text');
      const e = BW.mkEntry(Q), R = BW.fromMistake(JSON.parse(J(e.p)));
      if (!R || R.id !== Q.id || R.eq !== Q.eq || J(R.opts) !== J(Q.opts) || e.p.type !== undefined || e.p.q !== Q.eq) why.push('mistake round-trip');
      if (why.length) { bad++; first = first || J(Q.v) + ' ' + Q.eq + ' ' + why.join('; '); }
    }
    ok(!bad && seen.size >= 15, `balance 應用題#${c}「${t.t.slice(0, 14)}…」${N} 次：x 代回成立且唯一、式子在天平頁範圍、三個選項只有一個對、錯題重做（${seen.size} 種）` + (bad ? ` — 錯 ${bad}，例 ${first}` : ''));
  });
  ok(BW.build(0, [5, 5, 0]) === null && BW.build(1, [5, 8, 0]) === null && BW.build(0, [5, 3, 7]) === null && BW.build(99, [5, 3, 0]) === null && BW.fromMistake({ q: 'x+5=12' }) === null, 'balance build: 擋重複數字、會變負的、壞資料');
  const r = BW.round(5, rnd); ok(r.length === 5 && new Set(r.map(Q => Q.c)).size === 5, 'balance round: 5 題、故事不重複');
}

// ================= 循序漸進（2026-11-01）：難度 1／2／3、新手先出難度 1 =================
{
  const GW = require(path.join(__dirname, '..', 'math', 'gcd-word.js'));
  const WL = require(path.join(__dirname, '..', 'math', 'word-level.js'));
  ok(WL.maxD({}) === 1 && WL.maxD({ 1: 2 }) === 1 && WL.maxD({ 1: 3 }) === 2 && WL.maxD({ 1: 9, 2: 2 }) === 2 && WL.maxD({ 1: 3, 2: 3 }) === 3 && WL.maxD(null) === 1, 'word-level: 難度 1 答對 3 題 → 2；難度 2 再答對 3 題 → 3');
  ok(WL.maxD({ 2: 3 }) === 3 && WL.maxD({ 1: 1, 2: 2 }) === 2 && WL.maxD({ 2: 2 }) === 1, 'word-level: 答對更難的也算（素養題只有難度 2、3，不會永遠卡在 1）');
  // 每個單元：每個模板都有難度、1／2／3 都有
  const has123 = ds => [1, 2, 3].every(d => ds.includes(d)) && ds.every(d => [1, 2, 3].includes(d));
  ok(has123(GW.T.map(t => t.d)), 'gcd-word: 每個模板都有難度，1／2／3 都有');
  ok(has123(Object.values(M.DIFF)) && [].concat(M.GROUP_KINDS.word, M.GROUP_KINDS.lit).every(k => M.DIFF[k]), 'multiples: 應用題＋素養題每種都有難度，1／2／3 都有');
  ok(has123(Object.values(F.W_DIFF)) && F.W_QTY.every(k => F.W_DIFF[k]), 'fraction 應用題: 每種題型都有難度，1／2／3 都有');
  ok(has123(X.WCTX.map((c, i) => X.ctxD(i))), 'multiply 應用題: 每個故事都有難度，1／2／3 都有');
  ok(has123(BW.T.map(t => t.d)), 'balance 應用題: 每個故事都有難度，1／2／3 都有');
  // 新手（沒有紀錄 → maxD 1）的第一回合：每個單元重複抽 500 次，都不會出現難度 3（而且只有難度 1，挑戰題類別例外見下）；一輪照難度由小到大
  const sorted = ds => ds.every((d, i) => !i || ds[i - 1] <= d);
  const L1 = WL.maxD({});
  let bad = [];
  for (let i = 0; i < 500; i++) {
    ['mix', 'gcd', 'lcm', 'adv'].forEach(cat => { const ds = GW.roundTids(cat, 5, rnd, L1).map(t => GW.BY[t].d); if (ds.length !== 5 || ds.some(d => d > 1) || !sorted(ds)) bad.push('gw ' + cat + ' ' + ds); });
    ['word', 'lit'].forEach(g => { const ds = M.round(g, 5, rnd, '', L1).map(Q => Q.diff); if (ds.length !== 5 || ds.some(d => d === 3) || (g === 'word' && ds.some(d => d > 1)) || !sorted(ds)) bad.push('mul ' + g + ' ' + ds); });
    { const ds = F.wordRound(5, rnd, L1).map(Q => Q.d); if (ds.length !== 5 || ds.some(d => d > 1)) bad.push('frc ' + ds); }
    { const ds = X.wordRound(10, rnd, L1).map(q => q.d); if (ds.length !== 10 || ds.some(d => d > 1)) bad.push('mx ' + ds); }
    { const ds = BW.round(5, rnd, L1).map(Q => Q.d); if (ds.length !== 5 || ds.some(d => d > 1)) bad.push('bal ' + ds); }
  }
  ok(!bad.length, '新手第一回合（maxD 1）：短除法應用題（綜合／最大公因數／最小公倍數／挑戰題）、倍數應用題、分數 ⑥、乘法應用題、天平應用題都只有難度 1，沒有難度 3（素養題最簡單的是難度 2）' + (bad.length ? ' — ' + bad.slice(0, 3).join('｜') : ''));
  // 開到難度 2：混入 2、還是沒有 3；開到 3：三種都會出；一輪由小到大
  bad = []; const seen3 = { gw: 0, mul: 0, frc: 0, mx: 0, bal: 0 };
  for (let i = 0; i < 500; i++) {
    const g2 = GW.roundTids('mix', 5, rnd, 2).map(t => GW.BY[t].d), m2 = M.round('word', 5, rnd, '', 2).map(Q => Q.diff), f2 = F.wordRound(5, rnd, 2).map(Q => Q.d), x2 = X.wordRound(10, rnd, 2).map(q => q.d), b2 = BW.round(5, rnd, 2).map(Q => Q.d);
    [g2, m2, f2, x2, b2].forEach((ds, j) => { if (ds.some(d => d > 2) || !sorted(ds)) bad.push(j + ':' + ds); });
    const g3 = GW.roundTids('mix', 5, rnd, 3).map(t => GW.BY[t].d), m3 = M.round('word', 5, rnd, '', 3).map(Q => Q.diff), f3 = F.wordRound(5, rnd, 3).map(Q => Q.d), x3 = X.wordRound(10, rnd, 3).map(q => q.d), b3 = BW.round(5, rnd, 3).map(Q => Q.d);
    [g3, m3, f3, x3, b3].forEach((ds, j) => { if (!sorted(ds)) bad.push('3-' + j + ':' + ds); });
    seen3.gw += g3.includes(3); seen3.mul += m3.includes(3); seen3.frc += f3.includes(3); seen3.mx += x3.includes(3); seen3.bal += b3.includes(3);
  }
  ok(!bad.length && Object.values(seen3).every(n => n > 0), '開到難度 2 不會出 3；開到 3 每個單元都會出難度 3；一輪都照難度由小到大 ' + JSON.stringify(seen3) + (bad.length ? ' — ' + bad.slice(0, 3).join('｜') : ''));
  // 預設（不傳 maxD）＝3：舊的出題方式不變（短除法綜合題 2＋2＋1）
  const mixDef = GW.roundTids('mix', 5, rnd), cat = c => mixDef.filter(t => GW.BY[t].cat === c).length;
  ok(cat('gcd') === 2 && cat('lcm') === 2 && cat('adv') === 1, 'gcd-word: 不傳 maxD 時綜合題還是 2＋2＋1');
}

console.log(`word-bank: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;   // smoke require 進來時一樣讓整體失敗
