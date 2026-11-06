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
    case 'simplify': { const t = simp(c.n, c.d); ok(p[0].n === t[0] && p[0].d === t[1] && Q.text.includes(c.n + '/' + c.d), m); ok(gcd(c.n, c.d) > 1, m + ' 真的要約'); break; }
    case 'isSimple': ok(p[0].opts[p[0].ans] === (gcd(c.n, c.d) === 1 ? '是' : '不是'), m); break;
    case 'common': {
      const L = lcm(c.a[1], c.b[1]), x = p[0]; ok(x.den === L && same(x.ans, [[c.a[0] * L / c.a[1], L], [c.b[0] * L / c.b[1], L]]), m + ' L=' + L);
      ok(x.ans.every((f, i) => f[0] * [c.a, c.b][i][1] === [c.a, c.b][i][0] * f[1]), m + ' 大小不變'); break;
    }
    case 'fcmp': {
      const v = t => t[0] * t[2] + t[1], l = v(c.a) * c.b[2], r = v(c.b) * c.a[2], want = l > r ? 0 : l < r ? 1 : 2;   // 交叉相乘，不走浮點
      ok(want < 2, m + ' 不相等');
      if (c.winner) { const x = p[0], f = p[1], w = want === 0 ? c.a : c.b; ok(x.ans === want && f.n === w[1] && f.d === w[2], m + ' winner'); break; }
      const ch = p[p.length - 1]; ok(ch.ans === want && ch.opts[want] === (want ? '＜' : '＞'), m + ' cmp');
      if (c.simp) { const s1 = simp(c.a[1], c.a[2]), s2 = simp(c.b[1], c.b[2]); ok(p[0].n === s1[0] && p[0].d === s1[1] && p[1].n === s2[0] && p[1].d === s2[1], m + ' simp'); ok(lcm(c.a[2], c.b[2]) >= 4 * lcm(s1[1], s2[1]), m + ' 先約分明顯省事'); }
      else { const x = p[0]; ok(same(x.a, [c.a[1], c.a[2]]) && same(x.b, [c.b[1], c.b[2]]) && (x.w || 0) === c.a[0] && c.a[0] === c.b[0], m + ' common 對到題目'); }
      break;
    }
    case 'order': { const idx = c.fr.map((_, i) => i).sort((i, j) => c.fr[i][0] * c.fr[j][1] - c.fr[j][0] * c.fr[i][1]); ok(same(p[0].ans, idx), m + ' ' + idx); c.fr.forEach((f, i) => ok(p[0].opts[i] === '[[' + f[0] + '/' + f[1] + ']]', m + ' opts')); break; }
    case 'judge': {
      const j = p[0], a = p[1], v = parseInt(a.opts[a.ans], 10), vals = c.opts;
      ok(j.opts[j.ans] === (c.kind === 'gcd' ? '公因數' : '公倍數'), m + ' judge');
      const fits = vals.filter(x => c.kind === 'gcd' ? (c.a % x === 0 && c.b % x === 0) : (x % c.a === 0 && x % c.b === 0));
      if (c.max) ok(v === Math.max(...fits) && v === gcd(c.a, c.b), m + ' max'); else if (c.min) ok(v === Math.min(...fits) && v === lcm(c.a, c.b) && fits.length > 1, m + ' min'); else ok(fits.length === 1 && fits[0] === v, m + ' 選項只有一個對 ' + fits);
      ok(same(a.opts.map(s => parseInt(s, 10)), vals), m + ' opts'); break;
    }
    case 'zeros': { const a = p[0]; ok(same(a.opts.filter(zeroMustStay), a.ans), m); a.opts.forEach(s => ok(!(zeroMustStay(s) && zeroAnyGoes(s)), m + ' 不准有一部分能去、一部分不能去的數：' + s)); break; }
    // ---- 期中錯題＋期中類題（2026-11-06）----
    case 'atleast2': { const bad1 = []; for (let n = 1; n <= 100; n++) if (divs(n).length < 2) bad1.push(n); ok(same(bad1, [1]) && p[0].opts[p[0].ans] === '不對', m); break; }
    case 'onefac': { const v = p[0].opts.map(Number); ok(same(v, c.opts), m + ' opts'); const fits = v.filter(n => divs(n).length === 1); ok(fits.length === 1 && fits[0] === v[p[0].ans], m); break; }
    case 'tri3': { const v = p[0].opts.map(s => parseInt(s, 10)); ok(same(v, c.opts), m + ' opts'); const fits = v.filter(x => triOK([c.a, c.b, x]) === (c.want === 'can')); ok(fits.length === 1 && fits[0] === v[p[0].ans], m + ' ' + fits); ok(Q.text.includes(c.a + ' 公分') && Q.text.includes(c.b + ' 公分'), m + ' text'); break; }
    case 'div': {
      const s = simp(c.a, c.b), x = p[0];
      if (x.t === 'frac') ok(x.n === s[0] && x.d === s[1], m);
      else { const val = o => { const r = /\[\[(\d+)\/(\d+)\]\]/.exec(o); return r ? [+r[1], +r[2]] : null; }, eq = o => { const f = val(o); return f && f[0] * c.b === f[1] * c.a; }; ok(eq(x.opts[x.ans]) && x.opts.filter(eq).length === 1, m); }
      ok(Q.text.includes(String(c.a)) && Q.text.includes(String(c.b)), m + ' text'); break;
    }
    case 'chain': {
      const works = c.nums.filter(r => { const rest = c.nums.filter(n => n !== r); return rest.every((a, i) => rest.every((b, j) => i >= j || Math.max(a, b) % Math.min(a, b) === 0)); });
      ok(works.length === 1 && String(works[0]) === p[0].opts[p[0].ans] && same(p[0].opts.map(Number), c.nums), m + ' ' + works); break;
    }
    case 'iso': { const third = [c.a, c.b].filter(x => triOK([c.a, c.b, x])); ok(third.length === 1 && p[0].ans === third[0], m + ' ' + third); if (c.per) ok(p[1].ans === c.a + c.b + third[0], m + ' 周長'); break; }
    case 'dorder': { const idx = c.xs.map((_, i) => i).sort((i, j) => (milli(c.xs[i]) < milli(c.xs[j]) ? -1 : 1)); ok(same(p[0].ans, idx) && same(p[0].opts, c.xs), m + ' ' + idx); ok(/由小到大/.test(Q.text), m + ' 由小到大'); break; }
    case 'digits': {
      const got = []; for (let s = 0; s <= 9; s++) for (let b = 0; b <= 9; b++) { const n = +c.tpl.replace('★', s).replace('□', b); if (s + b === c.sum && n % c.m === 0) got.push(n); }
      ok(got.length >= 2 && p[0].ans === Math.min(...got) && p[1].ans === Math.max(...got) && p[0].label === '最小' && p[1].label === '最大', m + ' ' + got);
      ok(Q.text.includes(c.tpl) && Q.text.includes(c.m + ' 的倍數') && Q.text.includes('數字和是 ' + c.sum), m + ' text'); break;
    }
    case 'range': { const want = mults(c.a, c.lo, c.hi); ok(want.length >= 2 && p[0].ans === want[0] && p[1].ans === want[want.length - 1], m + ' ' + want); ok(c.lo % c.a && c.hi % c.a, m + ' 範圍兩端不是倍數'); ok(Q.text.includes(c.lo + '～' + c.hi) && Q.text.includes(String(c.a)), m + ' text'); break; }
    case 'fsum': { const l = c.k * c.a[0] * c.b[1], r = c.b[0] * c.a[1], want = l > r ? '＞' : l < r ? '＜' : '＝'; ok(p[0].opts[p[0].ans] === want, m); break; }   // k 個 a/b 相加，交叉相乘比
    // ---- 扇形小考錯題（2026-11-06）----
    case 'secopt': {   // 圓心角（或對摺 fold 次）→ 幾分之幾圓：選項裡剛好一個等於 deg/360
      const deg = c.deg || 360 / 2 ** c.fold, x = p[0], val = o => { const r = /\[\[(\d+)\/(\d+)\]\]/.exec(o); return [+r[1], +r[2]]; }, eq = o => { const f = val(o); return f[0] * 360 === f[1] * deg; };
      ok(eq(x.opts[x.ans]) && x.opts.filter(eq).length === 1, m + ' ' + deg); ok(Q.text.includes(c.deg ? c.deg + '°' : '對摺 ' + c.fold + ' 次'), m + ' text'); break;
    }
    case 'secfact': {   // 定義題：答案照原卷正解（照片核對過）；是非題另外用反例驗
      const want = { sc1: '對', sc2: '不對', sc3: '不對', sc4: '扇形的頂點是圓心', sc6: '圓周' }[Q.id]; ok(want && p[0].opts[p[0].ans] === want, m + ' ' + want);
      if (Q.id === 'sc1') ok([1, 5, 30].every(r => 90 / 360 === (Math.PI * r * r * 90 / 360) / (Math.PI * r * r)), m + ' 比例跟半徑無關');
      if (Q.id === 'sc2') { const deg = []; for (let d = 1; d < 360; d++) if (d * 2 === 360) deg.push(d); ok(same(deg, [180]), m + ' 只有 180 度可以'); }
      break;
    }
    default: ok(false, 'unknown calc ' + c.f);
  }
}
P.PAPER.forEach(verify); P.VARIANTS.forEach(verify); P.FRACTIONS.forEach(verify); P.MIDTERM.forEach(verify); P.EXAM.forEach(verify); P.SECTOR.forEach(verify); P.EXAM1517.forEach(verify);

// ---------- 期中第 15、17 題類題 5 題（pc:，2026-11-06）----------
{
  const C = P.EXAM1517, byId = id => C.find(q => q.id === id);
  ok(C.length === 5 && same(C.map(q => q.calc.f), ['judge', 'chain', 'judge', 'chain', 'chain']), '1517：5 題，公倍 2、去掉一數 3');
  C.forEach(q => { const o = q.parts[q.parts.length - 1].opts; ok(new Set(o).size === o.length, '1517 選項不重複 ' + q.id); ok(q.why && q.why.length <= 140 && P.ansText(q), '1517 why／ansText ' + q.id); });
  // 暴力：1～1000 裡最小的公倍數＝正解，而且正解在選項裡只有一個
  C.filter(q => q.calc.f === 'judge').forEach(q => { const c = q.calc; let n = 1; while (n % c.a || n % c.b) n++; ok(parseInt(q.parts[1].opts[q.parts[1].ans], 10) === n, '1517 暴力最小公倍數 ' + q.id + ' ' + n); });
  // 孩子常見錯：直接相乘（96、216）、選公因數（4、6）、題型判成公因數 → 都判錯
  const c1 = byId('c1'), c3 = byId('c3');
  ok(P.checkQ(c1, [1, 2]).ok && !P.checkQ(c1, [1, 3]).ok && !P.checkQ(c1, [1, 0]).ok && !P.checkQ(c1, [0, 2]).ok, 'c1：96（8×12）、4 判錯');
  ok(P.checkQ(c3, [1, 2]).ok && !P.checkQ(c3, [1, 3]).ok && !P.checkQ(c3, [1, 0]).ok && !P.checkQ(c3, [0, 2]).ok, 'c3：216（12×18）、6 判錯');
  ok(['c2', 'c4', 'c5'].every(id => { const q = byId(id); return P.checkQ(q, [q.parts[0].ans]).ok && q.parts[0].opts.every((_, j) => j === q.parts[0].ans || !P.checkQ(q, [j]).ok); }), '去掉一數：只有正解判對');
  // 單元、動畫：1、3 → 單元三＋B 段；2、4、5 → 跟期中第 6 題（mt5 去掉一數）同單元、沒動畫
  const mt5u = P.unitOf(P.MIDTERM.find(q => q.id === 'mt5'));
  ok(P.unitOf(c1) === 'g5a3' && P.unitOf(c3) === 'g5a3' && ['c2', 'c4', 'c5'].every(id => P.unitOf(byId(id)) === mt5u) && mt5u === 'g5a2', '1517 單元');
  ok(P.animOf(c1) === 'B' && P.animOf(c3) === 'B' && ['c2', 'c4', 'c5'].every(id => P.animOf(byId(id)) === ''), '1517 動畫');
  const ec = P.mkEntry(c3, 'c'); ok(ec.id === 'pc:c3' && ec.p.set === 'c' && P.fromMistake(ec.p) === c3 && P.unitOfMistake(ec.p) === 'g5a3' && P.animOfMistake(ec.p) === 'B' && JSON.stringify(ec.p).length < 400, 'mkEntry c');
}

// ---------- 扇形小考錯題 7 題 ----------
{
  const S = P.SECTOR, srcs = S.map(q => q.src);
  ok(S.length === 7 && S.every(q => q.tag === 'x') && same(srcs, ['扇形 是非 4', '扇形 是非 5', '扇形 是非 15', '扇形 選擇 8', '扇形 選擇 11', '扇形 選擇 17', '扇形 選擇 27']), 'sector 7 題、來源照原卷題號');
  ok(S.every(q => P.unitOf(q) === 'g5a5') && P.unitOfMistake(P.mkEntry(S[0], 's').p) === 'g5a5', 'sector 全在單元五');
  S.forEach(q => { ok(q.why && q.why.length <= 140, 'why 要短：' + q.id + ' ' + q.why.length); ok(P.ansText(q), 'ansText ' + q.id); ok(!q.fig, 'sector 沒有圖 ' + q.id); });
  ok(!/座號|班級|姓名|國民小學|國小|50\d/.test(JSON.stringify(S)), 'sector 沒有姓名班級座號');
  // 他原本的答案判錯（是非 4 答 ✗、5 答 ○、15 答 ○；選擇 8 選④、11 選②、17 選④、27 選②），正解判對
  const kid = { sc1: 1, sc2: 0, sc3: 0, sc4: 3, sc5: 1, sc6: 3, sc7: 1 };
  S.forEach(q => { ok(!P.checkQ(q, [kid[q.id]]).ok && P.checkQ(q, [q.parts[0].ans]).ok, 'sector 判分 ' + q.id); });
  const es = P.mkEntry(S[4], 's'); ok(es.id === 'ps:sc5' && es.p.set === 's' && es.p.src === '扇形 選擇 11' && P.fromMistake(es.p) === S[4] && JSON.stringify(es.p).length < 400, 'mkEntry s');
  const all = [P.PAPER, P.MIDTERM, S].flat().map(q => q.id); ok(new Set(all).size === all.length, '?add= 加的三組 id 不重複');
}

// ---------- 期中錯題 10 題＋期中類題 20 題 ----------
{
  const M = P.MIDTERM, E = P.EXAM, f = (a, x) => a.filter(q => q.calc.f === x).length;
  ok(M.length === 10 && M.every(q => q.tag === 'x' && /^期中 /.test(q.src)), 'midterm 10 題、都有來源');
  // 原卷數字（照片核對過）：這幾題的數字不准改
  const mid = id => M.find(q => q.id === id).calc;
  ok(same(mid('mt2').opts, [5, 6, 11, 12]) && mid('mt3').a === 38 && mid('mt4').a === 7 && mid('mt4').b === 27 && same(mid('mt5').nums, [10, 15, 20, 40]) && mid('mt6').b === 14 && mid('mt8').sum === 13 && mid('mt10').lo === 380 && mid('mt10').hi === 520, 'midterm 數字照原卷');
  ok(E.length === 20 && E.every((q, i) => [1, 2, 3].includes(q.d) && (!i || E[i - 1].d <= q.d)), 'exam 20 題由易到難');
  ok(f(E, 'range') === 3 && f(E, 'judge') === 3 && f(E, 'tri3') + f(E, 'iso') === 4 && f(E, 'div') === 3 && f(E, 'dorder') === 2 && f(E, 'digits') === 2 && f(E, 'onefac') === 1 && f(E, 'chain') === 1 && f(E, 'fsum') === 1, '配比：範圍倍數 3、公因公倍 3、三角形 4、整數相除 3、由小到大 2、最小最大 2、其他 3');
  ok(E.filter(q => q.calc.f === 'judge').some(q => q.calc.kind === 'gcd') && E.filter(q => q.calc.f === 'judge' && q.calc.kind === 'lcm').length >= 2, '公因公倍：拼大（公倍）多、剪小（公因）也有');
  ok(E.some(q => q.calc.f === 'div' && q.parts[0].t === 'frac') && E.some(q => q.calc.f === 'tri3' && q.calc.want === 'cannot'), '整數相除有自己填分數、三角形有「不能」');
  M.concat(E).forEach(q => { ok(q.why && q.why.length <= 140, 'why 要短：' + q.id + ' ' + q.why.length); ok(P.ansText(q), 'ansText ' + q.id); });
  ok(!/座號|班級|國民小學|國小|[一二三四五六七八九]年[一二三四五六七八九]?班/.test(JSON.stringify([M, E])), '沒有學校班級座號');
  // 判分
  const m8 = M.find(q => q.id === 'mt8'); ok(P.checkQ(m8, [{ v: '7558' }, { v: '7594' }]).ok && !P.checkQ(m8, [{ v: '7549' }, { v: '7594' }]).ok, 'mt8：他原本的 7549 判錯');
  const m7 = M.find(q => q.id === 'mt7').parts[0]; ok(P.check(m7, ['1', '3', '0', '2']).ok && /由小到大/.test(P.check(m7, ['2', '0', '3', '1']).msg), 'mt7：他寫成由大到小，提醒看清題目');
  const m10 = M.find(q => q.id === 'mt10'); ok(!P.checkQ(m10, [{ v: '368' }, { v: '512' }]).ok && P.checkQ(m10, [{ v: '384' }, { v: '512' }]).ok, 'mt10：368 判錯');
  const e11 = E.find(q => q.id === 'e11').parts[0]; ok(P.check(e11, { n: '7', d: '4' }).ok && !P.check(e11, { n: '4', d: '7' }).ok, 'e11：寫反判錯');
  // 錯題庫
  const em = P.mkEntry(M[0], 'm'), ee = P.mkEntry(E[0], 'e');
  ok(em.id === 'pm:mt1' && em.p.src === '期中 是非 3' && P.fromMistake(em.p) === M[0] && ee.id === 'pe:e1' && ee.p.src === '期中類題' && P.fromMistake(ee.p) === E[0], 'mkEntry m／e');
  ok(M.concat(E).every(q => JSON.stringify(P.mkEntry(q, 'm').p).length < 400), 'p 夠小');
}

// ---------- 單元（錯題庫分組）：每一題都推得出五上單元，而且推得對 ----------
{
  const U = ['g5a1', 'g5a2', 'g5a3', 'g5a4', 'g5a5'], all = [['p', P.PAPER], ['v', P.VARIANTS], ['f', P.FRACTIONS], ['m', P.MIDTERM], ['e', P.EXAM], ['s', P.SECTOR], ['c', P.EXAM1517]];
  all.forEach(([s, a]) => a.forEach(q => { const u = P.unitOfMistake(P.mkEntry(q, s).p); ok(U.includes(u), 'unit ' + s + ':' + q.id + ' → ' + u); }));
  const u = (s, id) => P.unitOfMistake({ type: 'paper', set: s, pid: id });
  ok(u('m', 'mt1') === 'g5a2' && u('m', 'mt2') === 'g5a5' && u('m', 'mt3') === 'g5a3' && u('m', 'mt4') === 'g5a4' && u('m', 'mt7') === 'g5a1' && u('m', 'mt10') === 'g5a3' && u('p', 'C') === 'g5a2' && u('p', 'N') === 'g5a3' && u('f', 'y1') === 'g5a4', 'unit 抽查');
  ok(P.FRACTIONS.every(q => P.unitOf(q) === 'g5a4') && u('x', 'nope') === '' && P.unitOfMistake(null) === '', 'unit：約分通分全在單元四；查不到回空字串');
  // kids-mistakes.js 的 unitOf（錯題庫分組）：各種數學錯題都推得到單元；應用題模板的公倍數清單要跟 gcd-word.js 一致
  const fs = require('fs'), KM = require(path.join(__dirname, '..', 'kids-mistakes.js'))._core, src = fs.readFileSync(path.join(__dirname, '..', 'math', 'gcd-word.js'), 'utf8');
  const lcmT = [...src.matchAll(/\{ id: '(\w+)'[^\n]*?kind: '(gcd|lcm)'/g)].filter(m => m[2] === 'lcm').map(m => m[1]);
  ok(lcmT.length > 5 && same(lcmT.slice().sort(), KM.LCM_T.slice().sort()), 'LCM_T 跟 gcd-word.js 一致 ' + lcmT);
  globalThis.PAPER = P;
  const mu = (id, p) => KM.unitOf('math', id, p);
  ok(mu('pm:mt3', P.mkEntry(P.MIDTERM[2], 'm').p) === 'g5a3' && mu('mg:g6a2-x3', { type: 'grade' }) === 'g6a2' && mu('gcd:12,18:lcm', { type: 'gcd', mode: 'lcm' }) === 'g5a3' && mu('gcd:12,18', { type: 'gcd', mode: 'both' }) === 'g5a2' &&
    mu('gcdword:bus:1', { type: 'gcdword', t: 'bus' }) === 'g5a3' && mu('gcdword:share:1', { type: 'gcdword', t: 'share' }) === 'g5a2' && mu('mul:x', { type: 'multiples' }) === 'g5a3' && mu('frc:x', { type: 'fraction' }) === 'g5a4' &&
    mu('eq:x+1=2', { q: 'x+1=2' }) === '' && mu('mx:3x4', { type: 'multiply' }) === '' && KM.unitOf('social', 'u2|q|abc', { u: 'u2' }) === 'u2' && KM.unitOf('ai', 'a|1', {}) === '', 'kids-mistakes unitOf');
  delete globalThis.PAPER;
}

// ---------- 題數、配比 ----------
ok(P.PAPER.length === 23 && P.PAPER.filter(q => q.tag === 'x').length === 10 && P.PAPER.filter(q => q.tag === 'r').length === 13, 'paper: 23 題＝打叉 10＋紅筆圈到 13');
ok(P.VARIANTS.length === 30, 'variants 30');
const ids = P.PAPER.concat(P.VARIANTS, P.FRACTIONS).map(q => q.id); ok(new Set(ids).size === ids.length, 'ids unique');
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

// ---------- 約分通分 15 題 ----------
{
  const F = P.FRACTIONS, n = f => F.filter(q => q.calc.f === f).length;
  ok(F.length === 15 && F.every((q, i) => [1, 2, 3].includes(q.d) && (!i || F[i - 1].d <= q.d)), '15 題由易到難');
  ok(n('simplify') === 3 && n('isSimple') === 1 && n('reduce') === 2 && F.filter(q => q.calc.f === 'reduce' && q.calc.w > 0).length === 1, '約分 6：最簡 3、判斷 1、全部列出 2（帶分數 1）');
  const com = F.filter(q => q.calc.f === 'common').map(q => q.calc), cmpQ = F.filter(q => q.calc.f === 'fcmp' && !q.calc.winner && !q.calc.simp);
  ok(com.length === 3 && cmpQ.length === 3 && cmpQ.filter(q => q.calc.a[0] > 0).length === 1, '通分 6：通分 3、比大小 3（帶分數 1）');
  ok(com.some(c => gcd(c.a[1], c.b[1]) === 1) && com.some(c => c.b[1] % c.a[1] === 0) && com.some(c => gcd(c.a[1], c.b[1]) > 1 && c.b[1] % c.a[1] && c.a[1] % c.b[1]), '通分：互質、倍數、有公因數但不是倍數都有');
  ok(n('order') === 1 && F.filter(q => q.calc.winner).length === 1 && F.filter(q => q.calc.simp).length === 1, '綜合 3：排列、情境、先約分再通分');
  ok(!F.some(q => /加起來|合起來|相差|差多少|還剩|一共/.test(q.text)), '沒有異分母加減');
  F.forEach(q => { ok(q.why.length <= 140, 'why 要短 ' + q.id + ' ' + q.why.length); ok(P.ansText(q), 'ansText ' + q.id); });
  ok(/\[\[2\/3\]\]/.test(P.ansText(F[0])), '答案用上下排的分數');
  // 情境題要先通分：不是同分母、也不是倍數
  { const c = F.find(q => q.calc.winner).calc; ok(c.a[2] !== c.b[2] && c.a[2] % c.b[2] && c.b[2] % c.a[2], '情境題要先通分才比得出來'); ok(F.find(q => q.calc.winner).parts[1].units[0] === '公升', '情境題單位'); }
  const by2 = id => F.find(q => q.id === id), c1 = by2('c1').parts[0];
  ok(P.check(c1, { n1: '10', d1: '15', n2: '9', d2: '15' }).ok, 'common 對');
  ok(P.check(c1, { n1: '20', d1: '30', n2: '18', d2: '30' }).soft && /最小公倍數/.test(P.check(c1, { n1: '20', d1: '30', n2: '18', d2: '30' }).msg), 'common：公分母不是最小，提醒、不算錯');
  ok(/一樣/.test(P.check(c1, { n1: '2', d1: '3', n2: '3', d2: '5' }).msg) && !P.check(c1, { n1: '2', d1: '15', n2: '3', d2: '15' }).ok && P.check(c1, { n1: '10', d1: '15' }).soft, 'common：分母不同、分子沒跟著乘、沒填完');
  ok(P.check(by2('c4').parts[0], { n1: '42', d1: '70', n2: '40', d2: '70' }).ok, 'anyDen：比大小時公分母不限');
  const yy = by2('y6').parts[0], r6 = a => a.map(x => ({ n: String(x[0]), d: String(x[1]) }));
  ok(P.check(yy, r6(yy.ans)).ok && /還有別的/.test(P.check(yy, r6(yy.ans.slice(0, 4))).msg) && yy.rows === 6, '全部列出：全對才算、漏答提示、格子數不洩漏答案數');
  ok(P.check(by2('y2').parts[0], { n: '18', d: '30' }).soft && P.check(by2('y2').parts[0], { n: '3', d: '5' }).ok, '要求最簡：沒約完提醒');
  const z2 = by2('z2'); ok(P.checkQ(z2, [0, { n: '5', d: '6', u: '公升' }]).ok && /單位/.test(P.checkQ(z2, [0, { n: '5', d: '6', u: '公斤' }]).msg) && P.checkQ(z2, [0, { n: '5', d: '6' }]).soft && !P.checkQ(z2, [1, { n: '5', d: '6', u: '公升' }]).ok, 'z2：瓶、分數、單位');
  const z1 = by2('z1').parts[0]; ok(P.check(z1, ['2', '1', '0']).ok && /順序/.test(P.check(z1, ['0', '1', '2']).msg) && P.check(z1, ['2', '2', '0']).soft && P.check(z1, ['2', '']).soft, 'order');
  const ef = P.mkEntry(by2('y6'), 'f'); ok(ef.id === 'pf:y6' && ef.p.src === '約分通分' && P.fromMistake(ef.p) === by2('y6'), 'mkEntry f');
}

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
