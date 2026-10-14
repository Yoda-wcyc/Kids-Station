// node test/gcd-word.test.js — 短除法「📝 應用題」模板（math/gcd-word.js）單元測試
'use strict';
const path = require('path');
const SD = require(path.join(__dirname, '..', 'math', 'short-division.js'));
const GW = require(path.join(__dirname, '..', 'math', 'gcd-word.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('FAIL', m); } };
const J = JSON.stringify;
// 跟被測程式分開寫的歐幾里得
const eu = (a, b) => (b === 0 ? a : eu(b, a % b));
const euL = (a, b) => a / eu(a, b) * b;
const isPos = n => Number.isInteger(n) && n > 0;
function lcg(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// 每個模板「自己算一次」的正確答案（不用被測模組的函式）：{kind, keys, ans|time, follow:[...]}
const EXPECT = {
  share: v => { const g = eu(v[0], v[1]); return { kind: 'gcd', keys: [v[0], v[1]], ans: g, follow: [v[0] / g, v[1] / g] }; },
  paper: v => { const g = eu(v[0], v[1]); return { kind: 'gcd', keys: [v[0], v[1]], ans: g, follow: [(v[0] / g) * (v[1] / g)] }; },
  tile: v => { const g = eu(v[0], v[1]); return { kind: 'gcd', keys: [v[0], v[1]], ans: g, follow: [(v[0] / g) * (v[1] / g)] }; },
  flag: v => { const g = eu(v[0], v[1]); return { kind: 'gcd', keys: [v[0], v[1]], ans: g, follow: [(v[0] + v[1]) * 2 / g] }; },
  ribbon: v => { const g = eu(v[0], v[1]); return { kind: 'gcd', keys: [v[0], v[1]], ans: g, follow: [v[0] / g + v[1] / g] }; },
  bus: v => { const L = euL(v[0], v[1]), t = v[2] * 60 + v[3] + L; return { kind: 'lcm', keys: [v[0], v[1]], time: { h: Math.floor(t / 60), m: t % 60 }, follow: [] }; },
  brick: v => { const L = euL(v[0], v[1]); return { kind: 'lcm', keys: [v[0], v[1]], ans: L, follow: [(L / v[0]) * (L / v[1])] }; },
  light: v => { const L = euL(v[0], v[1]); return { kind: 'lcm', keys: [v[0], v[1]], ans: L, follow: [] }; },
  run: v => { const L = euL(v[0], v[1]); return { kind: 'lcm', keys: [v[1], v[0]], ans: L, follow: [L / v[1], L / v[0]] }; },
  gear: v => { const L = euL(v[0], v[1]); return { kind: 'lcm', keys: [v[0], v[1]], ans: L, follow: [L / v[0], L / v[1]] }; },
  rem: v => { const L = euL(v[0], v[1]); return { kind: 'lcm', keys: [v[0], v[1]], ans: L + v[2], follow: [L / v[0]] }; },
  fruit3: v => { const g = eu(eu(v[0], v[1]), v[2]); return { kind: 'gcd', keys: [v[0], v[1], v[2]], ans: g, follow: [(v[0] + v[1] + v[2]) / g] }; },
  meet3: v => { const L = euL(euL(v[0], v[1]), v[2]); return { kind: 'lcm', keys: [v[0], v[1], v[2]], ans: L, follow: [L / v[0]] }; }
};
const CAT = { share: 'gcd', paper: 'gcd', tile: 'gcd', flag: 'gcd', ribbon: 'gcd', bus: 'lcm', brick: 'lcm', light: 'lcm', run: 'lcm', gear: 'lcm', rem: 'adv', fruit3: 'adv', meet3: 'adv' };

// ---- 模板清單：每種題型都有 ----
{
  ok(J(GW.T.map(t => t.id).sort()) === J(Object.keys(EXPECT).sort()), '模板清單跟測試的答案表一致: ' + GW.T.map(t => t.id));
  ok(GW.T.filter(t => t.cat === 'gcd').length === 5 && GW.T.filter(t => t.cat === 'lcm').length === 5 && GW.T.filter(t => t.cat === 'adv').length === 3, '最大公因數 5、最小公倍數 5、進階 3');
  GW.T.forEach(t => ok(CAT[t.id] === t.cat, t.id + ' 的分類'));
}

// ---- 每個模板 × 兩種難度 × 500 次 ----
{
  const rnd = lcg(20261014);
  GW.T.forEach(t => ['basic', 'adv'].forEach(lv => {
    let bad = 0, maxAns = 0, ids = new Set();
    for (let i = 0; i < 500; i++) {
      const p = GW.make(t.id, lv, rnd), why = [];
      if (!p) { bad++; console.log('  null', t.id, lv); continue; }
      const E = EXPECT[t.id](p.v);
      ids.add(p.id);
      // 判斷題：正解類型
      if (p.kind !== E.kind || p.kind !== t.kind) why.push('kind');
      if ((t.cat === 'gcd' && p.kind !== 'gcd') || (t.cat === 'lcm' && p.kind !== 'lcm')) why.push('cat-kind');
      // 要短除的數
      if (J(p.keys) !== J(E.keys)) why.push('keys ' + J(p.keys));
      if (p.keys.some(k => !isPos(k) || k < 2) || new Set(p.keys).size !== p.keys.length) why.push('keys-range');
      // 跟短除法函式交叉驗證：core＝keys 的 GCD／LCM（SD.plan 與歐幾里得都一樣）
      const P = SD.plan(p.keys, p.keys.length === 3 ? p.kind : 'both');
      const euCore = p.keys.reduce((a, b) => p.kind === 'gcd' ? eu(a, b) : euL(a, b));
      const sdCore = p.kind === 'gcd' ? P.gcd : P.lcm;
      if (p.core !== euCore || sdCore !== euCore) why.push('core ' + p.core + '/' + sdCore + '/' + euCore);
      if (p.kind === 'gcd' && p.core < 2) why.push('gcd<2');
      if (p.kind === 'lcm' && p.keys.some(k => k === p.core)) why.push('lcm 就是其中一個數');
      // 主答案
      if (t.time) {
        if (!p.ask.time || J(p.ask.time) !== J(E.time) || p.ask.time.h >= 12 || p.ask.time.m < 0 || p.ask.time.m > 59 || !isPos(p.ask.time.h)) why.push('time ' + J(p.ask.time));
        if (p.ask.ans != null || p.ask.unit) why.push('time-no-unit');
      } else {
        if (!isPos(p.ask.ans) || p.ask.ans !== E.ans) why.push('ans ' + p.ask.ans + '≠' + E.ans);
        if (!p.ask.units.includes(p.ask.unit) || new Set(p.ask.units).size !== p.ask.units.length || p.ask.units.length < 3) why.push('units');
        maxAns = Math.max(maxAns, p.ask.ans);
      }
      // 追問
      if (p.follow.length !== E.follow.length) why.push('follow-len');
      p.follow.forEach((f, k) => {
        if (!isPos(f.ans) || f.ans !== E.follow[k]) why.push('follow' + k + ' ' + f.ans + '≠' + E.follow[k]);
        if (!f.units.includes(f.unit) || new Set(f.units).size !== f.units.length) why.push('follow-units' + k);
        if (!f.q || !f.hint) why.push('follow-text' + k);
      });
      // 題目文字：每個 {i} 都有對應的數字、每個數字都出現在文字裡；干擾數字跟要短除的數不一樣
      const segs = GW.segs(p.text), used = new Set(segs.filter(s => s.i != null).map(s => s.i));
      if (segs.some(s => s.i != null && !p.toks[s.i]) || p.toks.some((x, i) => !used.has(i))) why.push('segs');
      if (/\{\d+\}/.test(segs.filter(s => s.t).map(s => s.t).join(''))) why.push('placeholder');
      if (p.toks.some(x => !isPos(x.n))) why.push('tok-int');
      p.toks.filter(x => x.role === 'dist').forEach(x => { if (p.keys.includes(x.n) || !x.why) why.push('dist ' + x.n); });
      // 選數字的判斷
      if (!GW.checkKeys(p, p.keys.slice().reverse()).ok) why.push('checkKeys-ok');
      const d = p.toks.find(x => x.role === 'dist');
      if (d) { const c = GW.checkKeys(p, [p.keys[0], d.n].concat(p.keys.slice(2))); if (c.ok || c.why !== 'dist' || c.tok.n !== d.n) why.push('checkKeys-dist ' + J(c)); }
      if (GW.checkKeys(p, p.keys.slice(1)).why !== 'missing') why.push('checkKeys-missing');
      // 原題重做：同一組 (tid, v) 做出同一題
      const q = GW.build(p.tid, p.v);
      if (!q || q.id !== p.id || q.text !== p.text || J(q.ask) !== J(p.ask) || J(q.follow) !== J(p.follow)) why.push('rebuild');
      if (p.id !== 'gcdword:' + t.id + ':' + p.v.join(',') || p.id.length > 200) why.push('id');
      if (why.length) { bad++; if (bad < 4) console.log('  bad', t.id, lv, J(p.v), why.join('; ')); }
    }
    ok(bad === 0, `${t.id}（${lv}）500 次：答案正整數、追問正確、跟 GCD/LCM 函式交叉驗證、題目文字與干擾數字、原題重做（錯 ${bad}；最大答案 ${maxAns}；不同題 ${ids.size}）`);
    ok(ids.size >= 20, `${t.id}（${lv}）數字有變化（${ids.size} 種）`);
  }));
}

// ---- 難度：基本的數字比進階小 ----
{
  const rnd = lcg(7);
  const maxKey = (tid, lv) => { let m = 0; for (let i = 0; i < 300; i++) m = Math.max(m, ...GW.make(tid, lv, rnd).keys); return m; };
  const maxCore = (tid, lv) => { let m = 0; for (let i = 0; i < 300; i++) m = Math.max(m, GW.make(tid, lv, rnd).core); return m; };
  ['share', 'paper', 'tile', 'flag', 'ribbon', 'fruit3'].forEach(t => ok(maxKey(t, 'basic') < maxKey(t, 'adv'), t + '：基本的數字範圍比進階小'));
  ['bus', 'brick', 'light', 'run', 'gear', 'rem', 'meet3'].forEach(t => { const b = maxCore(t, 'basic'); ok(b <= GW.BY[t].capB && b < maxCore(t, 'adv'), t + '：基本的最小公倍數 ≤ ' + GW.BY[t].capB + '（' + b + '），比進階小'); });
  ok(maxKey('share', 'basic') <= 108 && maxKey('flag', 'basic') <= 90, '基本題數字不會太大');
}

// ---- 時間題：跨小時進位 ----
{
  ok(J(GW.addMin(7, 40, 30)) === '{"h":8,"m":10}', '7:40 再過 30 分＝8:10');
  ok(J(GW.addMin(8, 55, 15)) === '{"h":9,"m":10}', '8:55 再過 15 分＝9:10');
  ok(J(GW.addMin(6, 45, 75)) === '{"h":8,"m":0}', '6:45 再過 75 分＝8:00');
  ok(J(GW.addMin(9, 5, 120)) === '{"h":11,"m":5}', '9:05 再過 120 分＝11:05');
  ok(J(GW.addMin(7, 20, 20)) === '{"h":7,"m":40}', '沒跨小時：7:20＋20＝7:40');
  const p = GW.build('bus', [12, 8, 7, 40]);
  ok(p && p.core === 24 && J(p.ask.time) === '{"h":8,"m":4}', '公車 12、8 分一班，7:40 同時開 → 24 分後 8:04: ' + J(p && p.ask));
  const q = GW.build('bus', [15, 10, 9, 45]);
  ok(q && J(q.ask.time) === '{"h":10,"m":15}', '15、10 分一班，9:45 → 30 分後 10:15');
  const rnd = lcg(99); let cross = 0, n = 0;
  for (let i = 0; i < 500; i++) { const b = GW.make('bus', i % 2 ? 'adv' : 'basic', rnd); n++; if (b.ask.time.h > b.v[2]) cross++; const t = b.v[2] * 60 + b.v[3] + b.core; if (b.ask.time.h * 60 + b.ask.time.m !== t) cross = -9999; }
  ok(cross > n * 0.5, '隨機公車題大部分會跨小時（' + cross + '/' + n + '），而且換算都對');
  ok(GW.build('bus', [12, 8, 11, 40]) === null, '過了中午（11:40＋24 分）的題目不出');
}

// ---- 判斷題：正解類型 ----
{
  const want = { share: 'gcd', paper: 'gcd', tile: 'gcd', flag: 'gcd', ribbon: 'gcd', bus: 'lcm', brick: 'lcm', light: 'lcm', run: 'lcm', gear: 'lcm', rem: 'lcm', fruit3: 'gcd', meet3: 'lcm' };
  Object.keys(want).forEach(t => ok(GW.make(t, 'basic').kind === want[t], t + ' 要用' + (want[t] === 'gcd' ? '最大公因數' : '最小公倍數')));
  ok(GW.DECIDE_HINT === '平分、剪成最大、間隔最大 → 越分越小 → 最大公因數；再一次同時、拼成最小、相遇 → 越加越大 → 最小公倍數', '判斷提示的文字');
}

// ---- 固定例題 ----
{
  const s = GW.build('share', [36, 48, 8]);
  ok(s.ask.ans === 12 && J(s.follow.map(f => f.ans)) === '[3,4]' && s.id === 'gcdword:share:36,48,8', '鉛筆 36、橡皮擦 48 → 12 人，每人 3 枝、4 個');
  const f = GW.build('flag', [60, 36, 5]);
  ok(f.ask.ans === 12 && f.follow[0].ans === 16, '花圃 60×36 → 間隔 12 公尺、(60+36)×2÷12＝16 支');
  const r = GW.build('rem', [6, 4, 1]);
  ok(r && r.ask.ans === 13 && r.follow[0].ans === 2, '每 6 顆、每 4 顆都剩 1 → 12＋1＝13 顆、6 顆一包 2 包: ' + J(r && r.ask));
  ok(GW.build('rem', [6, 4, 4]) === null && GW.build('rem', [6, 4, 5]) === null, '剩下的要比每包的顆數少');
  const r2 = GW.build('rem', [9, 6, 2]);
  ok(r2 && r2.ask.ans === 20 && r2.follow[0].ans === 2, '每 9 顆、每 6 顆都剩 2 → 18＋2＝20 顆、9 顆一包 2 包');
  const m = GW.build('meet3', [4, 6, 10]);
  ok(m && m.ask.ans === 60 && m.follow[0].ans === 15 && m.keys.length === 3, '4、6、10 天 → 60 天，小明 15 次');
  const g3 = GW.build('fruit3', [24, 36, 60, 120]);
  ok(g3 && g3.ask.ans === 12 && g3.follow[0].ans === 10, '24、36、60 → 12 人、每人 2＋3＋5＝10 顆');
}

// ---- 不合理的 v 一律 null ----
{
  ok(GW.build('nope', [1, 2]) === null && GW.build('share', 'x') === null && GW.build('share', []) === null, '不認得的模板／格式');
  ok(GW.build('share', [36, 49, 8]) === null, '36、49 互質 → 不能平分給 2 人以上');
  ok(GW.build('share', [36, 48, 36]) === null, '干擾數字跟要短除的數一樣 → 不出');
  ok(GW.build('share', [36.5, 48, 8]) === null && GW.build('share', [-36, 48, 8]) === null, '小數、負數');
  ok(GW.build('light', [12, 6, 100]) === null, '12 是 6 的倍數：最小公倍數就是 12 → 不出');
  ok(GW.build('paper', [20, 40, 3]) === null, '長要比寬大');
  ok(GW.build('meet3', [4, 4, 6]) === null, '三個數要不一樣');
}

// ---- 一輪的模板 ----
{
  const rnd = lcg(3);
  for (let i = 0; i < 50; i++) {
    const m = GW.roundTids('mix', 5, rnd), cat = c => m.filter(t => GW.BY[t].cat === c).length;
    if (!(m.length === 5 && new Set(m).size === 5 && cat('gcd') === 2 && cat('lcm') === 2 && cat('adv') === 1)) { ok(false, 'mix ' + m); break; }
  }
  ok(true, '混合：最大公因數 2＋最小公倍數 2＋挑戰 1，不重複');
  ['gcd', 'lcm', 'adv'].forEach(c => { const r = GW.roundTids(c, 5, rnd); ok(r.length === 5 && r.every(t => GW.BY[t].cat === c), c + ' 一輪 5 題都是該類: ' + r); });
}

console.log(`gcd-word: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
