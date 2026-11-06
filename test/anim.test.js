// anim.test.js — 🎬 動畫教學 math/anim.js＋math/anim/<段>.js 的共用檢查（2026-11-06）
// 用法：node test/anim.test.js（smoke.js 也會跑）。每段自己的數字驗算在 test/anim-<段>.test.js，這支會一個一個跑（也可單獨跑）
// - 每段（不是 wip 的）：4～7 步、每步一兩句、練習 2～3 題、答案自己判得對、每一步和補間中途畫得出來（沒有 NaN／undefined）
// - 標題跟 subjects.js 的 ANIM_SEGS 一致；anim.html 載入 7 段；錯題庫對應（paper.js ANIM_F）
'use strict';
const path = require('path'), fs = require('fs'), root = path.join(__dirname, '..');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL anim:', m); } };
const A = require(path.join(root, 'math', 'anim.js'));
A.ORDER.forEach(k => require(path.join(root, 'math', 'anim', k + '.js')));

const sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8'), m = /const ANIM_SEGS = (\[.*\]);/.exec(sj);
const segs = m ? JSON.parse(m[1].replace(/'/g, '"')) : [];
ok(segs.map(x => x[0]).join() === A.ORDER.join(), 'subjects.js ANIM_SEGS = A～G');
segs.forEach(([k, t]) => ok(A.segs[k] && A.segs[k].title === t && A.segs[k].id === k, 'title matches subjects.js: ' + k));
const html = fs.readFileSync(path.join(root, 'math', 'anim.html'), 'utf8').replace(/\?v=[0-9a-f]+"/g, '"');   // 部署版有 ?v=雜湊
ok(html.indexOf('src="anim.js"') >= 0 && A.ORDER.every(k => html.indexOf(`src="anim/${k}.js"`) > html.indexOf('src="anim.js"')), 'anim.html loads anim.js then every segment');
ok(/hidden: true/.test(sj) && sj.includes("src: `math/anim.html?id=${c}`") && sj.includes("src: 'math/anim.html'"), 'subjects.js: 🎬 card + anim-a～g routes');

const BAN = /座號|國小|班級|[一二三四五六]年[一二三四五六七八九十\d]+班/;
A.ORDER.forEach(k => {
  const S = A.segs[k], tag = 'seg ' + k;
  if (S.wip) { ok(Array.isArray(S.steps) && Array.isArray(S.prac), tag + ' placeholder shape'); return; }
  ok(S.steps.length >= 4 && S.steps.length <= 7, tag + ' 4～7 steps: ' + S.steps.length);
  ok(S.prac.length >= 2 && S.prac.length <= 3, tag + ' 2～3 practice: ' + S.prac.length);
  ok(typeof S.H === 'number' && S.H >= 160 && S.H <= 420, tag + ' H');
  S.steps.forEach((st, i) => {
    const sent = A.plain(st.t).split(/[。！？]/).filter(x => x.trim()).length;
    ok(st.t && sent <= 2 && A.plain(st.t).length <= 64, `${tag} step ${i + 1} short (1～2 句、≤64 字): ${st.t}`);
    ok(!BAN.test(st.t), `${tag} step ${i + 1} no school/class info`);
    Object.keys(st.v || {}).forEach(v => ok(v in S.v0, `${tag} step ${i + 1} var ${v} declared in v0`));
  });
  // 每一步、以及每一步補間的中途都畫得出來
  for (let i = -1; i < S.steps.length; i++) {
    const a = A.stateAt(S, i - 1), b = A.stateAt(S, i);
    [0, 0.37, 0.5, 0.81, 1].forEach(t => {
      const v = {}; Object.keys(b).forEach(x => { v[x] = typeof a[x] === 'number' && typeof b[x] === 'number' ? a[x] + (b[x] - a[x]) * t : b[x]; });
      let s = ''; try { s = S.draw(v, A.h); } catch (e) { s = 'ERR ' + e.message; }
      ok(typeof s === 'string' && !/NaN|undefined|ERR /.test(s) && (i < 0 || t < 1 || s.length > 50), `${tag} draw step ${i + 1} t=${t}`);
    });
  }
  S.prac.forEach((P, j) => {
    const t2 = `${tag} prac ${j + 1}`;
    ok(P.q && P.why && P.calc && P.calc.f, t2 + ' has q/why/calc');
    ok(!BAN.test(P.q), t2 + ' no school/class info');
    if (P.opts) { ok(P.opts.length >= 2 && new Set(P.opts).size === P.opts.length && P.ans >= 0 && P.ans < P.opts.length, t2 + ' opts'); ok(A.check(P, String(P.ans)).ok && !A.check(P, String((P.ans + 1) % P.opts.length)).ok && A.check(P, null).soft, t2 + ' check'); }
    else {
      ok(Array.isArray(P.fields) && P.fields.length === P.ans.length, t2 + ' fields = ans');
      ok(A.check(P, P.ans.map(String)).ok && A.check(P, P.ans.map(() => '')).soft, t2 + ' check right / empty');
      ok(!A.check(P, P.ans.map((x, i) => P.fields[i].t === 'dec' ? x + '1' : String(+x + 1))).ok, t2 + ' check wrong');
    }
  });
  ok(new Set(S.prac.map(P => P.q)).size === S.prac.length, tag + ' practice distinct');
});

// 錯題庫「🎬 看動畫」：期中錯題的對應（任務指定的）
const P = require(path.join(root, 'math', 'paper.js'));
const want = { mt10: 'A', mt8: 'A', mt3: 'B', mt2: 'D', mt6: 'D', mt4: 'F', mt9: 'F', mt7: 'G', mt1: '', mt5: '' };
Object.keys(want).forEach(id => ok(P.animOf(P.MIDTERM.find(q => q.id === id)) === want[id], 'paper animOf ' + id + ' → ' + (want[id] || '（不放）')));
ok(P.SECTOR.every(q => P.animOf(q) === '') && P.FRACTIONS.every(q => P.animOf(q) === ''), '扇形、約分通分不放動畫');
ok(P.animOfMistake(P.mkEntry(P.MIDTERM[9], 'm').p) === 'A', 'animOfMistake via mistake entry');
const km = fs.readFileSync(path.join(root, 'kids-mistakes.js'), 'utf8');
ok(km.includes('animOfMistake(e.p)') && km.includes("href=\"#s/math/anim-'"), 'kids-mistakes paperBox: 🎬 看動畫 button');

// 每段自己的驗算
fs.readdirSync(__dirname).filter(f => /^anim-[A-G]\.test\.js$/.test(f)).sort().forEach(f => {
  const r = require('child_process').spawnSync(process.execPath, [path.join(__dirname, f)], { encoding: 'utf8' });
  ok(r.status === 0, f + ' passes: ' + (r.stdout || '').trim().slice(-200) + (r.stderr || '').slice(-1500));
});
A.ORDER.filter(k => !A.segs[k].wip).forEach(k => ok(fs.existsSync(path.join(__dirname, `anim-${k}.test.js`)), `test/anim-${k}.test.js exists`));

console.log(`anim: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
