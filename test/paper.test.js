// paper.test.js — 紙本錯題 23 題＋類題 30 題 math/paper.js（2026-11-03）
// 用法：node test/paper.test.js（smoke.js 也會跑）
// - 每題 calc 用這裡另外寫的暴力法重算（不用 paper.js 的函式），答案要一樣
// - 配比、由易到難、圖的比例（量每個角對標示）、判分（漏答、重複、順序不同、單位、最簡分數）
'use strict';
const path = require('path');
const P = require(path.join(__dirname, '..', 'math', 'paper.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL paper:', m); } };
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ---------- 暴力法 ----------
const divs = n => { const o = []; for (let i = 1; i <= n; i++) if (n % i === 0) o.push(i); return o; };
const common = (a, b) => divs(a).filter(x => b % x === 0);
const gcd = (a, b) => Math.max(...common(a, b));
const lcm = (a, b) => { for (let i = Math.max(a, b); ; i++) if (i % a === 0 && i % b === 0) return i; };
const mults = (a, lo, hi) => { const o = []; for (let i = lo; i <= hi; i++) if (i % a === 0) o.push(i); return o; };
const triOK = s => { const t = s.slice().sort((x, y) => x - y); return t[0] + t[1] > t[2]; };
const choose3 = a => { const o = []; for (let i = 0; i < a.length; i++) for (let j = i + 1; j < a.length; j++) for (let k = j + 1; k < a.length; k++) o.push([a[i], a[j], a[k]]); return o; };
const simp = (n, d) => { const g = gcd(n, d); return [n / g, d / g]; };
const milli = s => { const [w, f = ''] = s.split('.'); return BigInt(w + f.padEnd(8, '0')); };   // 比大小不走浮點
const roundStr = (x, dp) => {   // 四捨五入（字串逐位，不走浮點）
  const [w, f] = x.split('.'), keep = BigInt(w + f.slice(0, dp)) + (+f[dp] >= 5 ? 1n : 0n), s = keep.toString().padStart(dp + 1, '0');
  return s.slice(0, -dp) + '.' + s.slice(-dp);
};
const zeroMustStay = s => { for (let i = 0; i < s.length; i++) if (s[i] === '0' && +(s.slice(0, i) + s.slice(i + 1)) !== +s) return true; return false; };
const zeroAnyGoes = s => { for (let i = 0; i < s.length; i++) if (s[i] === '0' && +(s.slice(0, i) + s.slice(i + 1)) === +s) return true; return false; };

function verify(Q) {
  const c = Q.calc, p = Q.parts, m = 'calc ' + Q.id;
  ok(c, 'has calc ' + Q.id);
  switch (c.f) {
    case 'gcd': ok(p[0].ans === gcd(c.a, c.b), m); break;
    case 'lcm': ok(p[0].ans === lcm(c.a, c.b), m); break;
    case 'mult': { const want = mults(c.a, c.lo, c.hi); ok(same(p[0].ans, want), m + ' ' + want); ok(c.lo % c.a && c.hi % c.a, m + ' 範圍兩端不是倍數（不會有含不含端點的爭議）'); ok(Q.text.includes(c.lo + '～' + c.hi) && Q.text.includes(String(c.a)), m + ' text'); break; }
    case 'factors': ok(same(p[0].ans, divs(c.n)), m); break;
    case 'cf': ok(same(p[0].ans, common(c.a, c.b)) && p[1].ans === gcd(c.a, c.b), m); break;
    case 'sec2frac': { const s = simp(c.deg, 360); ok(p[0].n === s[0] && p[0].d === s[1], m); break; }
    case 'frac2deg': { const deg = 360 * c.n / c.d, x = p.find(y => y.t === 'num'); ok(x.ans === deg, m); const f = p.find(y => y.t === 'frac'); if (f) ok(f.n === c.n && f.d === c.d, m); break; }
    case 'tri-ang': ok(p[0].ans === 180 - c.known[0] - c.known[1], m); break;
    case 'quad': { const r = 360 - c.known.reduce((a, b) => a + b, 0); ok(p[0].ans === (c.flat ? 180 - r : r), m + ' ' + r); break; }
    case 'tri': ok(p[0].opts[p[0].ans] === (triOK(c.s) ? '可以' : '不可以'), m); break;
    case 'combo': { const want = choose3(c.sticks).filter(s => (c.want === 'can') === triOK(s)); ok(same(p[0].ans, want), m + ' ' + JSON.stringify(want)); break; }
    case 'reduce': { const want = common(c.n, c.d).filter(x => x > 1).map(x => [c.n / x, c.d / x]); ok(same(p[0].ans.slice().sort((a, b) => b[1] - a[1]), want), m + ' ' + JSON.stringify(want)); ok(p[0].w === c.w, m + ' w'); break; }
    case 'place': { const s = c.items.reduce((t, [n, e]) => t + n * 10 ** (3 - e), 0), w = Math.floor(s / 1000), f = String(s % 1000).padStart(3, '0'); ok(p[0].ans === w + '.' + f, m + ' ' + w + '.' + f); break; }
    case 'cmp': { const a = milli(c.a), b = milli(c.b), want = a > b ? '＞' : a < b ? '＜' : '＝'; ok(p[0].opts[p[0].ans] === want, m); break; }
    case 'round': ok(p[0].ans === roundStr(c.x, c.dp), m + ' ' + roundStr(c.x, c.dp)); break;
    case 'judge': {
      const j = p[0], a = p[1], v = parseInt(a.opts[a.ans], 10), vals = c.opts;
      ok(j.opts[j.ans] === (c.kind === 'gcd' ? '公因數' : '公倍數'), m + ' judge');
      const fits = vals.filter(x => c.kind === 'gcd' ? (c.a % x === 0 && c.b % x === 0) : (x % c.a === 0 && x % c.b === 0));
      if (c.max) ok(v === Math.max(...fits) && v === gcd(c.a, c.b), m + ' max'); else ok(fits.length === 1 && fits[0] === v, m + ' 選項只有一個對 ' + fits);
      ok(same(a.opts.map(s => parseInt(s, 10)), vals), m + ' opts'); break;
    }
    case 'zeros': { const a = p[0]; ok(same(a.opts.filter(zeroMustStay), a.ans), m); a.opts.forEach(s => ok(!(zeroMustStay(s) && zeroAnyGoes(s)), m + ' 不准有一部分能去、一部分不能去的數：' + s)); break; }
    default: ok(false, 'unknown calc ' + c.f);
  }
}
P.PAPER.forEach(verify); P.VARIANTS.forEach(verify);

// ---------- 題數、配比 ----------
ok(P.PAPER.length === 23 && P.PAPER.filter(q => q.tag === 'x').length === 10 && P.PAPER.filter(q => q.tag === 'r').length === 13, 'paper: 23 題＝打叉 10＋紅筆圈到 13');
ok(P.VARIANTS.length === 30, 'variants 30');
const ids = P.PAPER.concat(P.VARIANTS).map(q => q.id); ok(new Set(ids).size === ids.length, 'ids unique');
const V = P.VARIANTS, by = pre => V.filter(q => q.id[0] === pre);
ok(by('m').length === 4 && by('g').length === 5 && by('f').length === 4 && by('s').length === 3 && by('a').length === 3 && by('t').length === 3 && by('r').length === 2 && by('d').length === 6, '配比 4・5・4・3・3・3・2・6');
ok(by('g').filter(q => /最少/.test(q.text)).length >= 2, '公因公倍應用：至少 2 題「最少幾…」');
const judges = by('g').filter(q => q.parts.length === 2 && q.parts[0].opts.join() === '公因數,公倍數'); ok(judges.length >= 1 && judges.length <= 2, '先判斷公因或公倍：1～2 題');
ok(by('t').some(q => q.parts[0].t === 'combos') && by('t').some(q => q.calc.f === 'tri' && (s => { const t = s.slice().sort((a, b) => a - b); return t[0] + t[1] === t[2]; })(q.calc.s)), '三邊：有列組合、有剛好等於的陷阱');
ok(by('r').some(q => q.parts[0].w > 0), '約分：有帶分數');
ok(by('m').some(q => q.parts[0].ans.length === 1) && by('m').some(q => q.parts[0].ans.length === 3), '範圍內倍數：答案 1～3 個');
ok(V.every(q => [1, 2, 3].includes(q.d)) && V.every((q, i) => !i || V[i - 1].d <= q.d), '照 d 由易到難');
const dcalc = f => by('d').filter(q => q.calc.f === f).length; ok(dcalc('place') === 1 && dcalc('zeros') === 1 && dcalc('cmp') === 2 && dcalc('round') === 2, '小數 6 題：位值 1、0 不能去 1、比大小 2、概數 2');
ok(by('d').some(q => q.calc.f === 'zeros' && q.parts[0].ans.some(s => /^\d+$/.test(s))), '0 不能去的題有整數');
ok(by('d').some(q => q.calc.f === 'cmp' && /[一二三四五六七八九十]/.test(q.text)) && by('d').some(q => q.calc.f === 'cmp' && q.calc.a.length !== q.calc.b.length), '比大小：含國字讀法、位數不同');
const rs = by('d').filter(q => q.calc.f === 'round').map(q => +q.calc.x.split('.')[1][q.calc.dp]); ok(rs.some(n => n < 5) && rs.some(n => n >= 5), '概數：含捨去與進位');
V.concat(P.PAPER).forEach(q => { ok(q.why && q.why.length <= 140, 'why 要短：' + q.id); ok(P.ansText(q), 'ansText ' + q.id); });
// 不放個資：題目裡不寫人名以外的班級座號
ok(!/座號|班級|[一二三四五六七八九]年[一二三四五六七八九]?班/.test(JSON.stringify([P.PAPER, V])), '沒有班級座號');

// ---------- 圖的比例：量出來的角要跟標示的一樣（±1.5°）----------
const ang = (v, a, b) => { const x = [a[0] - v[0], a[1] - v[1]], y = [b[0] - v[0], b[1] - v[1]]; return Math.acos((x[0] * y[0] + x[1] * y[1]) / Math.hypot(...x) / Math.hypot(...y)) * 180 / Math.PI; };
const near = (x, want, m) => ok(Math.abs(x - want) <= 1.5, m + ' 量到 ' + x.toFixed(1) + '，應為 ' + want);
{ const F = P.FIG_PTS, a = F.A, b = F.A3;
  near(ang(a.P, a.Q, a.U), 50, 'A P'); near(ang(a.Q, a.P, a.T), 126, 'A Q'); near(ang(a.T, a.R, a.U), 43, 'A T'); near(ang(a.R, a.T, a.S), 97, 'A R'); near(ang(a.U, a.T, a.S), 133, 'A ★');
  near(ang(b.P, b.Q, b.U), 60, 'A3 P'); near(ang(b.Q, b.P, b.T), 115, 'A3 Q'); near(ang(b.T, b.R, b.U), 38, 'A3 T'); near(ang(b.R, b.T, b.S), 102, 'A3 R'); near(ang(b.U, b.T, b.S), 137, 'A3 ★');
  const t = F.A1; near(ang(t.P, t.Q, t.R), 48, 'A1 P'); near(ang(t.Q, t.P, t.R), 67, 'A1 Q'); near(ang(t.R, t.P, t.Q), 65, 'A1 ★');
  const q = F.A2; near(ang(q.P, q.Q, q.S), 95, 'A2 P'); near(ang(q.Q, q.P, q.R), 110, 'A2 Q'); near(ang(q.R, q.Q, q.S), 72, 'A2 R'); near(ang(q.S, q.R, q.P), 83, 'A2 ★');
  Object.keys(P.FIGS).forEach(k => ok(/^<svg[\s\S]*<\/svg>$/.test(P.FIGS[k]()), 'fig svg ' + k));
  P.PAPER.concat(V).forEach(q2 => { if (q2.fig) ok(P.FIGS[q2.fig], 'fig exists ' + q2.id); });
}

// ---------- 判分 ----------
const byId = id => P.PAPER.concat(V).find(q => q.id === id), part = (id, i = 0) => byId(id).parts[i];
{ // 多答案：漏答明確提示；全對才算；順序不影響；重複、錯數不算
  const p = part('E');
  ok(P.check(p, ['161', '184', '', '']).ok && P.check(p, ['184', '', '161', '']).ok, 'multi 全對（順序、空格不影響）');
  const miss = P.check(p, ['184', '', '', '']); ok(!miss.ok && !miss.soft && /還有別的可能/.test(miss.msg), 'multi 漏答：算錯、提示還有別的可能');
  ok(/不符合/.test(P.check(p, ['161', '184', '200', '']).msg), 'multi 多寫錯的');
  ok(/兩次/.test(P.check(p, ['161', '161', '', '']).msg), 'multi 重複');
  ok(P.check(p, ['', '', '', '']).soft, 'multi 沒填不算作答');
}
{ // 組合：順序不同算同一組、不可重複、不可漏、不能用題目沒有的長度
  const p = part('M');
  ok(P.check(p, [['4', '9', '18'], ['4', '12', '18']]).ok && P.check(p, [['18', '12', '4'], ['9', '18', '4'], ['', '', ''], ['', '', '']]).ok, 'combos 全對，順序不同也對');
  const dup = P.check(p, [['4', '9', '18'], ['9', '18', '4']]); ok(!dup.ok && !dup.soft && /重複/.test(dup.msg), 'combos：他原本的寫法（同一組寫兩次）判重複');
  const miss = P.check(p, [['4', '9', '18']]); ok(!miss.ok && !miss.soft && /漏/.test(miss.msg), 'combos 漏組合');
  ok(/圍得起來/.test(P.check(p, [['4', '9', '12']]).msg), 'combos 把能圍的寫進來');
  ok(P.check(p, [['4', '9', '20']]).soft && P.check(p, [['4', '4', '9']]).soft && P.check(p, [['4', '9', '']]).soft, 'combos 題目沒有的長度、同一根用兩次、沒填滿：先提醒，不算作答');
  ok(P.check(part('P'), [['6', '4', '3'], ['7', '4', '6'], ['7', '3', '6']]).ok, 'P：他的答案順序不同，判對');
}
{ // 約分
  const p = part('L');
  ok(P.check(p, [{ n: '18', d: '40' }, { n: '9', d: '20' }, { n: '27', d: '60' }]).ok, 'fracs 全對');
  ok(/還有別的/.test(P.check(p, [{ n: '18', d: '40' }, { n: '9', d: '20' }]).msg), 'fracs：他原本漏 27/60，判漏答');
  ok(/兩次/.test(P.check(p, [{ n: '9', d: '20' }, { n: '9', d: '20' }]).msg), 'fracs 重複');
  ok(/不是約分/.test(P.check(p, [{ n: '54', d: '120' }]).msg) && /不是約分/.test(P.check(p, [{ n: '36', d: '80' }]).msg), 'fracs 題目本身、一樣大但不是約分來的都不算');
}
{ // 單位、最簡、小數位數、選擇
  ok(P.check(part('C'), { v: '9', u: '束' }).ok, 'num 對'); ok(/單位/.test(P.check(part('C'), { v: '9', u: '包' }).msg), 'C：他原本寫 9 包，判單位錯');
  ok(P.check(part('C'), { v: '9' }).soft, 'num 沒選單位不算作答'); ok(!P.check(part('C'), { v: '132', u: '束' }).ok, 'num 錯');
  ok(P.check(part('G'), { n: '2', d: '9' }).ok && P.check(part('G'), { n: '8', d: '36' }).soft && !P.check(part('G'), { n: '4', d: '5' }).ok, 'frac：2/9 對、8/36 提醒約分、他原本的 4/5 錯');
  ok(P.check(part('d6'), '8.40').ok && /位數/.test(P.check(part('d6'), '8.4').msg) && !P.check(part('d6'), '8.39').ok, 'dec：8.40 對、8.4 提醒位數');
  ok(P.check(part('Q'), ['2.1608', '5.0007', '7.8002', '60']).ok && /還有別的/.test(P.check(part('Q'), ['2.1608', '5.0007', '7.8002']).msg) && /可以去掉/.test(P.check(part('Q'), ['3.620']).msg), 'pick：他原本漏 60，判漏答');
  const Q = byId('N'); ok(P.checkQ(Q, [1, 2]).ok && !P.checkQ(Q, [0, 2]).ok && !P.checkQ(Q, [1, 0]).ok && P.checkQ(Q, [1]).soft, 'judge：判斷和答案都要對');
  const K = byId('K'); ok(P.checkQ(K, [['1', '2', '4'], { v: '4' }]).ok && !P.checkQ(K, [['1', '2'], { v: '4' }]).ok, 'K：公因數列全＋最大');
}
{ // 錯題庫
  const e = P.mkEntry(byId('E'), 'p'), v = P.mkEntry(byId('m3'), 'v');
  ok(e.id === 'pp:E' && e.p.type === 'paper' && e.p.src === '評量 ②' && e.p.tag === 'x' && P.fromMistake(e.p) === byId('E'), 'mkEntry 紙本');
  ok(v.id === 'pv:m3' && v.p.src === '類題' && P.fromMistake(v.p) === byId('m3') && P.fromMistake({ type: 'multiples' }) === null, 'mkEntry 類題');
  ok(JSON.stringify(e.p).length < 400, 'p 夠小（同步文件）');
  // 同步文件整理後還在（帳號同步靠這個）；墓碑不被救回
  const KMc = require(path.join(__dirname, '..', 'kids-mistakes.js'))._core, SM = require(path.join(__dirname, '..', 'syncmerge.js'));
  const bk = {}; KMc.mark(bk, e.id, false, e.p, 1e12, false);
  ok(same(SM.normalize({ mk: { math: bk } }).mk.math[e.id].p, e.p), '紙本錯題過同步整理不變');
  const gone = { [e.id]: { d: 1, w: 1, t: 1e12, u: 2e12 } }; ok(KMc.mergeBook(bk, gone)[e.id].d === 1, '畢業墓碑不被舊資料救回');
}

console.log(`paper: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
