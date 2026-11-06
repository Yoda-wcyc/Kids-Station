// node test/math-grade.test.js — 五下／六上／六下數學（math/grade.js＋math/grade/<單元>.js）
// 每一題的答案都用 test/mg-verify/<單元>.js 的另一種算法（暴力數、換單位、逐步迴圈…）重算比對；題庫結構、抽題、判分、錯題 id 也在這裡檢查。
'use strict';
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const MG = require(path.join(root, 'math', 'grade.js')), H = MG.H;
let fails = 0, n = 0;
const ok = (c, m) => { n++; if (!c) { fails++; console.error('FAIL ' + m); } };

const dir = path.join(root, 'math', 'grade');
// MG_ONLY=g5b2,g5b3：只檢查這幾個單元（寫題庫時用；不檢查整冊上線）
const ONLY = (process.env.MG_ONLY || '').split(',').filter(Boolean);
const have = (fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => /^g[56][ab]\d+\.js$/.test(f)).map(f => f.replace(/\.js$/, '')) : []).filter(u => !ONLY.length || ONLY.includes(u));
have.forEach(u => require(path.join(dir, u + '.js')));
const all = MG.BOOKS.flatMap(b => b.units.map(x => x[0]));
ok(have.every(u => all.includes(u)), 'data files are known units: ' + have);
// 上線的冊：整冊每個單元都要有（grade.html 只載入上線的冊）
const html = fs.readFileSync(path.join(root, 'math', 'grade.html'), 'utf8');
const live = ONLY.length ? [] : MG.BOOKS.filter(b => b.units.some(x => html.includes('grade/' + x[0] + '.js')));
live.forEach(b => {
  ok(MG.ready(b.id), b.name + ' all units have data');
  b.units.forEach(x => ok(new RegExp('<script src="grade/' + x[0] + '\\.js(\\?v=[0-9a-f]+)?"></script>').test(html), 'grade.html loads ' + x[0]));
});

const plainLen = s => MG.plain(s).length;
const isRv = x => H.isR(x);
const same = (a, b) => H.same(a, b);
const bad = s => /undefined|NaN|Infinity|\[object/.test(s);
const stats = {};
have.forEach(uid => {
  const U = MG.UNITS[uid], V = require(path.join(__dirname, 'mg-verify', uid + '.js')), qs = MG.bank(uid), tag = MG.label(uid) + ' ' + uid;
  ok(U.pending === '待課本核對', tag + ': 標「待課本核對」');
  ok(U.cards.length >= 3 && U.cards.length <= 6 && U.cards.every(c => c.t && c.ex && c.why && !bad(c.t + c.ex + c.why)), tag + ': 3～6 張重點卡（重點、例題、為什麼）');
  ok(qs.length >= 40, tag + ': 至少 40 題 (' + qs.length + ')');
  const d = [1, 2, 3].map(k => qs.filter(q => q.d === k).length);
  ok(d[0] / qs.length >= 0.3 && d[1] > 0 && d[2] > 0, tag + ': d1 ≥ 30%、三種難度都有 ' + d);
  const types = new Set(qs.map(q => q.t));
  ok(types.size >= 2, tag + ': 至少 2 種題型 ' + [...types]);
  // 一輪照難度由小到大抽（第一輪幾乎都是 d1）→ 每一種難度都要混排：有數字填答，也有選擇或列舉
  [1, 2, 3].forEach(k => { const t = new Set(qs.filter(q => q.d === k).map(q => q.t)); ok((t.has('num') || t.has('nums')) && (t.has('mc') || t.has('set')), tag + ': d' + k + ' 混排（填答＋選擇／列舉）' + [...t]); });
  stats[uid] = { n: qs.length, d, types: [...types] };
  ok(new Set(qs.map(q => q.id)).size === qs.length, tag + ': id 唯一');
  ok(U.gens.every(g => typeof V[g.k] === 'function'), tag + ': 每個題型都有驗算 ' + U.gens.filter(g => typeof V[g.k] !== 'function').map(g => g.k));
  qs.forEach(q => {
    const t = tag + ' ' + q.id + ' ' + MG.plain(q.q).slice(0, 40);
    ok(q.q && q.why && !bad(q.q) && !bad(q.why) && !bad(JSON.stringify(q.opts || [])), t + ': 題目、解說完整');
    if (/π|圓周率/.test(MG.plain(q.q))) ok(/3\.14/.test(MG.plain(q.q)), t + ': 用到圓周率要寫明 3.14');
    if (typeof V[q.k] !== 'function') return;
    let exp; try { exp = V[q.k](q.v, q); } catch (e) { ok(false, t + ': verifier threw ' + e.message); return; }
    if (q.t === 'num') ok(exp != null && isRv(exp) && H.eq(exp, q.a), t + ': 答案 ' + JSON.stringify(q.a) + ' 驗算 ' + JSON.stringify(exp));
    else if (q.t === 'nums') ok(Array.isArray(exp) && exp.length === q.a.length && exp.every((x, i) => H.eq(x, q.a[i])), t + ': 答案 ' + JSON.stringify(q.a) + ' 驗算 ' + JSON.stringify(exp));
    else if (q.t === 'mc' || q.t === 'set') {
      ok(q.opts.length >= 3 && new Set(q.opts.map(MG.plain)).size === q.opts.length && q.ov && q.ov.length === q.opts.length, t + ': 選項 ≥3、不重複');
      if (q.t === 'mc') {
        const hit = q.ov.map((x, i) => (same(x, exp) ? i : -1)).filter(i => i >= 0);
        ok(hit.length === 1 && hit[0] === q.a, t + ': 只有一個正解而且是它 ' + JSON.stringify(hit) + ' a=' + q.a);
        const L = q.opts.map(plainLen), al = L[q.a];
        ok(L.some((x, i) => i !== q.a && x >= al), t + ': 正解不是唯一最長的選項');
      } else {
        const want = q.ov.map((x, i) => (exp.some(e => same(e, x)) ? i : -1)).filter(i => i >= 0);
        ok(want.join() === q.a.slice().sort((a, b) => a - b).join() && q.a.length >= 2 && q.a.length < q.opts.length, t + ': 列舉的正解 ' + q.a + ' 驗算 ' + want);
      }
    } else ok(false, t + ': 不認得的題型 ' + q.t);
    // 照畫面的輸入方式填正解，判分要是對的
    let input;
    if (q.t === 'num') input = q.form === 'f' ? (r => { const R = H.R(r); if (q.mixed && R[0] > R[1]) { const w = Math.floor(R[0] / R[1]); return { w: String(w), n: String(R[0] - w * R[1]), d: String(R[1]) }; } return R[1] === 1 ? { w: String(R[0]) } : { n: String(R[0]), d: String(R[1]) }; })(q.a) : (H.toDec(q.a) || q.a[0] + '/' + q.a[1]);
    else if (q.t === 'nums') input = q.a.map(x => H.toDec(x) || x[0] + '/' + x[1]);
    else input = q.a;
    ok(MG.check(q, input).ok, t + ': 照正解作答會判對 ' + JSON.stringify(input) + ' ' + JSON.stringify(MG.check(q, input)));
    ok(MG.fromMistake(MG.mkEntry(q).p) === q && MG.mkEntry(q).id.length <= 200, t + ': 錯題 id 找得回原題');
  });
  // 抽題：一輪 15 題、測驗 20 題不重複
  const r = MG.rng(1), round = MG.pickRound(qs, MG.ROUND, {}, {}, r), ex = MG.exam(qs, MG.TEST_N, r);
  ok(round.length === 15 && new Set(round.map(q => q.id)).size === 15 && round.every((q, i) => !i || round[i - 1].d <= q.d), tag + ': 練習一輪 15 題由易到難');
  ok(ex.length === 20 && new Set(ex.map(q => q.id)).size === 20 && ex.every((q, i) => !i || ex[i - 1].d <= q.d), tag + ': 單元測驗 20 題不重複');
  // 抽題順序：答對過的排最後、錯題庫的排在答對過的前面
  const okSet = Object.fromEntries(qs.slice(0, qs.length - 5).map(q => [q.id, 1])), mkSet = { [qs[0].id]: 1 };
  const r2 = MG.pickRound(qs, 15, okSet, mkSet, MG.rng(2)).map(q => q.id);
  ok(qs.slice(qs.length - 5).every(q => r2.includes(q.id)) && r2.includes(qs[0].id), tag + ': 沒答對過 → 錯題 → 其他');
});
live.forEach(b => {
  const rv = MG.review(b.id, MG.REVIEW_N, MG.rng(3)), us = new Set(rv.map(q => q.u));
  ok(rv.length === 30 && new Set(rv.map(q => q.id)).size === 30 && us.size === b.units.length, b.name + ' 總複習 30 題、不重複、每個單元都有 (' + us.size + ')');
  const tot = b.units.reduce((s, x) => s + MG.bank(x[0]).length, 0), d1 = b.units.reduce((s, x) => s + MG.bank(x[0]).filter(q => q.d === 1).length, 0);
  console.log(b.name + '：' + b.units.length + ' 單元、練習題庫 ' + tot + ' 題（d1 ' + Math.round(d1 / tot * 100) + '%）');
  b.units.forEach(x => console.log('  ' + x[0] + ' ' + x[1] + '：' + JSON.stringify(stats[x[0]])));
});

// 判分規則
{
  const q = { t: 'num', a: H.R(1, 2), form: 'f', simp: true };
  ok(MG.check(q, { n: '1', d: '2' }).ok && MG.check(q, { n: '2', d: '4' }).soft && !MG.check(q, { n: '2', d: '3' }).ok && !MG.check(q, { n: '2', d: '3' }).soft, '分數格：最簡對、沒約分只提醒、錯的算錯');
  const q2 = { t: 'num', a: H.R(1, 2) };
  ok(['0.5', '1/2', '2/4', '０.５', ' 0.50 '].every(s => MG.check(q2, s).ok) && !MG.check(q2, '0.25').ok && MG.check(q2, '').soft, '一格：0.5＝1/2＝2/4 都對');
  const q3 = { t: 'num', a: H.R(7, 4), form: 'f', mixed: true };
  ok(MG.check(q3, { w: '1', n: '3', d: '4' }).ok && MG.check(q3, { n: '7', d: '4' }).soft, '要帶分數時：假分數只提醒');
  ok(H.eq(MG.parseNum('1又3/4'), H.R(7, 4)) && H.eq(MG.parseNum('2 1/2'), H.R(5, 2)) && H.eq(MG.parseNum('1,200'), 1200) && MG.parseNum('abc') === null, 'parseNum');
  const s = { t: 'set', opts: ['a', 'b', 'c', 'd'], a: [0, 2] };
  ok(MG.check(s, [0, 2]).ok && MG.check(s, [0]).soft && !MG.check(s, [0, 1]).ok && !MG.check(s, [0, 1]).soft, '列舉：漏選提醒、選錯算錯');
  ok(H.toDec(H.R(1, 8)) === '0.125' && H.toDec(H.R(1, 3)) === null && H.eq(H.fromDec('3.14'), H.R(157, 50)), '小數換算');
}
// 上線清單一致：grade.html 載入的冊＝subjects.js、completion.js 的 MG_BOOKS（標題照 MG.BOOKS）
if (!ONLY.length) {
  const KC = require(path.join(root, 'completion.js')), SM = require(path.join(root, 'syncmerge.js'));
  const want = JSON.stringify(live.map(b => [b.id, b.name, b.units.map(x => x[1])]));
  ok(JSON.stringify(KC.MG_BOOKS) === want, 'completion.js MG_BOOKS = 上線的冊 ' + JSON.stringify(KC.MG_BOOKS));
  const sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8'), m = /const MG_BOOKS = (\[.*\]);/.exec(sj);
  ok(m && JSON.stringify(JSON.parse(m[1].replace(/'/g, '"'))) === want, 'subjects.js MG_BOOKS = 上線的冊');
  ok(live.length >= 1 && live[0].id === 'g5b' && live.every((b, i) => b.id === MG.BOOKS[i].id), '照冊別順序上線（五下 → 六上 → 六下）');
  // 完成判定、補存紀錄、同步合併
  let d = {}; d = KC.record(d, 'mg', 'g5b1q', 87, 1); d = KC.record(d, 'mg', 'g5b1q', 60, 2); d = KC.record(d, 'mg', 'g5b1t', 75, 3);
  ok(d.mg.g5b1q === 87 && KC.evaluate('mg:g5b1', {}, { done: d }).status === 'doing', 'mg 單元：練習取最佳、測驗沒到 80 → 進行中');
  d = KC.record(d, 'mg', 'g5b1t', 90, 4);
  ok(KC.evaluate('mg:g5b1', {}, { done: d }).status === 'done' && KC.evaluate('mg:g5b2', {}, { done: d }).status === 'todo', 'mg 單元：練習 ≥80%＋測驗 ≥80 → 完成');
  ok(KC.evaluate('mg:g5bR', {}, { done: KC.record({}, 'mg', 'g5bR', 80, 1) }).status === 'done' && KC.evaluate('mg:g5bR', {}, { done: {} }).status === 'todo', 'mg 總複習 ≥80 → 完成');
  const a = { mg: { g5b1q: 70, g5bR: 50, 'bad!': 1, g7a1q: 9 } }, b = { mg: { g5b1q: 90, g5b2t: 40 } }, mm = SM.mergeDone(a, b).mg;
  ok(JSON.stringify(mm) === JSON.stringify({ g5b1q: 90, g5b2t: 40, g5bR: 50 }) && JSON.stringify(SM.mergeDone(b, a).mg) === JSON.stringify(mm), 'done.mg 同步：取大、丟不合格 key、可交換');
  const cat = KC.catalog({}).find(s => s.k === 'math');
  ok(live.every(bk => bk.units.every(x => cat.units.some(u => u.key === 'mg:' + x[0] && u.group === bk.name))) && cat.units.filter(u => u.group === '五上').length === 6, '課程地圖：五上 6 格＋上線的冊');
  // 頁面：每題記每日題數、學習幣、錯題；完成紀錄
  ok(html.includes("function mkRec(Q, ok) { if (window.KidsDaily) KidsDaily.rec('math', ok)") && html.includes("KidsCoins.answer(!!ok, 'math')") && html.includes("KidsDone.record('mg', key, v)") && html.includes("KidsAuth.startActivity('math'"), 'grade.html：每日紀錄、學習幣、完成、登入');
  const KM = fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8');
  ok(KM.includes("t === 'grade' ? t : 'eq'") && KM.includes("['grade', '五下～六下', 'grade.html?mistakes=1']") && sj.includes("'math/grade.html?mistakes=1'"), '錯題庫：grade 類型路由');
}
if (ONLY.length) console.log(JSON.stringify(stats));
console.log(fails ? fails + ' / ' + n + ' FAILED' : 'math-grade OK (' + n + ' checks)');
process.exitCode = fails ? 1 : 0;
