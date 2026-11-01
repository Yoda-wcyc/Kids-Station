// mindmap-exam.test.js — 社會、自然〈📄 單元測驗／📝 段考模擬〉資料、組卷與接線檢查（2026-11-01）
// 用法：node test/mindmap-exam.test.js
// - 新題（mindmap/data/<科>/exam1-4.js → <資料>.exam[單元id]）：每單元 選擇 7、是非 2、配對或排序 1、題組 1 組（3 題，d 1→3）；
//   QuizKit.validate（單選只有一個正解、選項不重複、長度不洩答）、id 全站唯一、n 指到真的節點、題組資料格式（ZhReading.blockErr）
// - 新題不能和練習題庫、素養題組重複：去標點後一樣、或字的二元組相似度 ≥ 0.6 都算重複
// - 組卷（mindmap/exam.js）：8 份單元測驗各 25 題、4 份段考各 30 題；配分總和 100；題型比例；難度約 4:4:2；一般題 d 不遞減、題組在最後且組內 d 不遞減；
//   單元測驗新題約一半；抽題會避開最近做過的題（recent）；同一份卷子沒有重複題
// - 接線：兩科頁面載入 exam.js 與資料；mindmap.js 交卷不寫單元完成（doneRec）、錯題 id 用 '|X|'、首頁有段考模擬卡
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const QK = require(path.join(root, 'quizkit.js'));
const ZR = require(path.join(root, 'chinese', 'reading-core.js'));
const EX = require(path.join(root, 'mindmap', 'exam.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL mindmap-exam:', m); } };

// 資料檔＝頁面實際載入的（mindmap/<科>.html 的 data/<科>/*.js，照頁面順序），加單元不用改測試
const pageData = (k, re) => [...fs.readFileSync(path.join(root, 'mindmap', k + '.html'), 'utf8').matchAll(/src="data\/(\w+\/[\w-]+)\.js/g)].map(m => m[1]).filter(f => !re || re.test(f));
// UNITS＝有單元測驗資料的單元；PAIRS＝段考的兩兩一組（同 mindmap.js mockPairs：全部單元照順序兩個一組、兩個都有測驗才算）
// 新單元還沒有測驗資料 → 頁面的 📄 按鈕藏起來、段考不出那一組
const UNITS = {}, PAIRS = {};
const VAR = { social: 'DATA_SOCIAL', science: 'DATA_SCIENCE' };
const DATA = {};
['social', 'science'].forEach(k => {
  const ctx = { window: {} };
  pageData(k, /\/(unit|lit|exam)/).forEach(f => vm.runInNewContext(fs.readFileSync(path.join(root, 'mindmap', 'data', f + '.js'), 'utf8'), ctx));
  const D = DATA[k] = ctx.window[VAR[k]], us = D.units.map(u => u.id);
  UNITS[k] = us.filter(id => D.exam && D.exam[id]);
  PAIRS[k] = []; for (let i = 0; i + 1 < us.length; i += 2) if (D.exam[us[i]] && D.exam[us[i + 1]]) PAIRS[k].push([us[i], us[i + 1]]);
  ok(UNITS[k].length >= 4 && PAIRS[k].length >= 2 && Object.keys(D.exam).every(id => us.includes(id)), k + ' exam units exist: ' + UNITS[k] + '｜pairs ' + JSON.stringify(PAIRS[k]));
});
const kids = d => d.lessons || d.topics || d.children || [];
const allIds = u => { const s = new Set(); (function w(d) { s.add(d.id); kids(d).forEach(w); })(u); return s; };
const norm = s => String(s || '').replace(/[\s　、，,。．.·・\-－—~～（）()「」『』:：;；!！?？"'“”‘’\/【】\[\]]/g, '').replace(/臺/g, '台');
const bigr = s => { s = norm(s); const o = new Set(); for (let i = 0; i < s.length - 1; i++) o.add(s.slice(i, i + 2)); return o; };
const dice = (a, b) => { const A = bigr(a), B = bigr(b); if (!A.size || !B.size) return 0; let n = 0; A.forEach(x => { if (B.has(x)) n++; }); return 2 * n / (A.size + B.size); };
const qText = q => q.q + '｜' + (q.type === 'mc' ? q.opts[q.a] : q.type === 'tf' ? String(q.a) : q.type === 'order' ? q.items.join('') : q.pairs.map(p => p.join('')).join(''));
const hash = s => { let h = 5381; s = String(s); for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
const rng = seed => () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };

// ---------- 1. 新題資料 ----------
const seenIds = new Set();
Object.keys(UNITS).forEach(k => {
  const D = DATA[k];
  ok(D.exam && typeof D.exam === 'object', k + ' 有 exam');
  UNITS[k].forEach(uid => {
    const E = D.exam[uid], u = D.units.find(x => x.id === uid), nodes = allIds(u), tag = k + ':' + uid;
    ok(E && Array.isArray(E.qs) && E.grp, tag + ' 有新題和題組');
    const cnt = { mc: 0, tf: 0, om: 0 };
    E.qs.forEach(q => {
      const w = tag + ' ' + q.id + ' ';
      ok(typeof q.id === 'string' && q.id.indexOf(uid + '-x') === 0 && !seenIds.has(q.id), w + 'id 要唯一、開頭 ' + uid + '-x'); seenIds.add(q.id);
      ok([1, 2, 3].includes(q.d), w + 'd 要是 1|2|3');
      ok(nodes.has(q.n), w + 'n 要指到這單元的節點：' + q.n);
      QK.validate(q).forEach(m => ok(false, w + m));
      if (q.type === 'mc') ok(q.opts.filter((_, i) => i === q.a).length === 1, w + '單選一個正解');
      cnt[EX.tOf(q)]++;
    });
    ok(cnt.mc === 7 && cnt.tf === 2 && cnt.om === 1, tag + ' 新題題型要 選擇 7、是非 2、配對或排序 1：' + JSON.stringify(cnt));
    const g = E.grp;
    ok(g.id === uid + '-xG' && !seenIds.has(g.id) && nodes.has(g.n), tag + ' 題組 id／n'); seenIds.add(g.id);
    ok(typeof g.title === 'string' && g.title && Array.isArray(g.body) && g.body.length, tag + ' 題組有標題和資料');
    g.body.forEach((b, i) => { const m = ZR.blockErr(b); ok(!m, tag + ' 題組 body[' + i + '] ' + m); });
    ok(g.qs.length === 3 && g.qs.map(q => q.d).join() === '1,2,3', tag + ' 題組 3 題、d 1→3');
    g.qs.forEach((q, i) => { ok(q.id === g.id + (i + 1) && !seenIds.has(q.id), tag + ' 題組題 id ' + q.id); seenIds.add(q.id); QK.validate(q).forEach(m => ok(false, tag + ' ' + q.id + ' ' + m)); });
    // 不和練習題、素養題組重複（也不能只是換個說法：二元組相似度 < 0.6）
    const others = (u.quiz || []).map(q => ({ src: '練習題', q })).concat(((D.lit || {})[uid] || []).flatMap(s => s.qs.filter(q => q.type !== 'open').map(q => ({ src: '素養 ' + s.id, q }))));
    E.qs.concat(g.qs).forEach(q => {
      others.forEach(o => {
        ok(norm(o.q.q) !== norm(q.q), tag + ' ' + q.id + ' 題目和' + o.src + '一樣：' + q.q);
        const s = dice(qText(q), qText(o.q));
        ok(s < 0.6, tag + ' ' + q.id + ' 和' + o.src + '太像（' + s.toFixed(2) + '）：' + q.q + ' ／ ' + o.q.q);
      });
    });
  });
});

// ---------- 2. 組卷 ----------
const typeCount = items => { const c = { mc: 0, tf: 0, om: 0, g: 0 }; items.forEach(it => { if (it.grp) c.g++; else c[EX.tOf(it.q)]++; }); return c; };
function checkPaper(P, n, tag) {
  ok(P && P.items.length === n, tag + ' 題數 ' + (P && P.items.length) + ' 要 ' + n);
  if (!P) return;
  ok(P.items.reduce((s, it) => s + it.pts, 0) === 100, tag + ' 配分總和 100');
  ok(new Set(P.items.map(it => it.key)).size === n, tag + ' 同一份不重複');
  const plain = P.items.filter(it => !it.grp), grp = P.items.filter(it => it.grp);
  ok(P.items.slice(plain.length).every(it => it.grp), tag + ' 題組在最後');
  ok(plain.every((it, i) => !i || (+it.q.d || 1) >= (+plain[i - 1].q.d || 1)), tag + ' 一般題 d 不遞減：' + plain.map(it => it.q.d || 1).join(''));
  const gs = {}; grp.forEach(it => (gs[it.grp.id] = gs[it.grp.id] || []).push(it.q.d));
  Object.keys(gs).forEach(id => ok(gs[id].every((d, i) => !i || d >= gs[id][i - 1]), tag + ' 題組 ' + id + ' d 不遞減'));
  const dc = { 1: 0, 2: 0, 3: 0 }; P.items.forEach(it => dc[+it.q.d || 1]++);
  ok(dc[1] / n >= 0.3 && dc[1] / n <= 0.5 && dc[2] / n >= 0.3 && dc[2] / n <= 0.5 && dc[3] / n >= 0.1 && dc[3] / n <= 0.3, tag + ' 難度約 4:4:2：' + JSON.stringify(dc));
  P.items.forEach(it => ok(it.mk === it.u + (it.src === 'x' ? '|X|' + it.q.id : '|q|' + hash(it.q.q)) && it.mk.length <= 200, tag + ' 錯題 id ' + it.mk));
  return { plain, grp, dc };
}
Object.keys(UNITS).forEach(k => {
  const D = DATA[k];
  for (let seed = 1; seed <= 20; seed++) {
    UNITS[k].forEach(uid => {
      const tag = k + ':' + uid + ' 單元測驗 seed ' + seed, P = EX.unitPaper(D, uid, { hash, rand: rng(seed) });
      checkPaper(P, 25, tag);
      const c = typeCount(P.items);
      ok(c.mc === 15 && c.tf === 5 && c.om === 2 && c.g === 3, tag + ' 題型 選擇15 是非5 配對排序2 題組3：' + JSON.stringify(c));
      ok(P.items.every(it => it.pts === 4), tag + ' 每題 4 分');
      const nx = P.items.filter(it => it.src === 'x').length;
      ok(nx >= 11 && nx <= 14, tag + ' 新題約一半：' + nx);
    });
    PAIRS[k].forEach(ids => {
      const tag = k + ':' + ids.join('-') + ' 段考 seed ' + seed, P = EX.mockPaper(D, ids, { hash, rand: rng(seed) });
      const r = checkPaper(P, 30, tag);
      ok(P.items.filter(it => it.pts === 3).length === 20 && P.items.slice(20).every(it => it.pts === 4), tag + ' 前 20 題 3 分、後 10 題 4 分');
      ids.forEach(id => ok(P.items.filter(it => it.u === id).length === 15, tag + ' ' + id + ' 各 15 題'));
      const nx = P.items.filter(it => it.src === 'x').length;
      ok(nx >= 13 && nx <= 17, tag + ' 新題約一半：' + nx);
      ok(r.grp.length === 6, tag + ' 兩個題組');
    });
  }
});

// ---------- 3. 避開最近做過的題 ----------
Object.keys(UNITS).forEach(k => {
  const D = DATA[k];
  UNITS[k].forEach(uid => {
    const u = D.units.find(x => x.id === uid);
    for (let seed = 1; seed <= 10; seed++) {
      // 第一次考：記下用到的題庫題 → 第二次考（這些算最近做過）不能再出現（題庫夠多時）
      const P1 = EX.unitPaper(D, uid, { hash, rand: rng(seed) }), seen = {}, now = Date.now();
      P1.items.forEach(it => { seen[it.key] = now - 3600e3; });
      const P2 = EX.unitPaper(D, uid, { hash, rand: rng(seed + 100), recent: EX.recentFn(seen, now) });
      const again = P2.items.filter(it => it.src === 'q' && seen[it.key]);
      ok(!again.length, k + ':' + uid + ' seed ' + seed + ' 第二次考不重出最近做過的題庫題：' + again.map(it => it.q.q).join('／'));
    }
    // 練習題做過一大半（只留下每種題型、每種難度至少 1 題沒做過）→ 抽到的題庫題優先是沒做過的
    const seen = {}, now = Date.now(), keep = {};
    (u.quiz || []).forEach(q => { const t = EX.tOf(q) + (q.d || 1); if (!keep[t]) { keep[t] = 1; return; } seen['q:' + hash(q.q)] = now - 2 * 864e5; });
    const P = EX.unitPaper(D, uid, { hash, rand: rng(7), recent: EX.recentFn(seen, now) }), QUOTA = { mc: 8, tf: 3, om: 1 };
    Object.keys(QUOTA).forEach(t => {
      const avail = (u.quiz || []).filter(q => EX.tOf(q) === t && !seen['q:' + hash(q.q)]).length;
      const got = P.items.filter(it => it.src === 'q' && EX.tOf(it.q) === t && !seen[it.key]).length;
      ok(got === Math.min(avail, QUOTA[t]), k + ':' + uid + ' ' + t + ' 沒做過的題庫題先用：' + got + '（可用 ' + avail + '）');
    });
    // 超過 7 天的不算最近
    const old = {}; (u.quiz || []).forEach(q => { old['q:' + hash(q.q)] = now - 8 * 864e5; });
    ok(!EX.recentFn(old, now)('q:' + hash(u.quiz[0].q)) && Object.keys(EX.prune(old, now)).length === 0, k + ':' + uid + ' 7 天前的不算最近、prune 會清掉');
  });
});
// 段考也避開：新題最近做過 → 改抽題庫的同型題（新題數變少）
{
  const D = DATA.social, seen = {}, now = Date.now();
  ['u1', 'u2'].forEach(uid => D.exam[uid].qs.forEach(q => { seen['x:' + q.id] = now; }));
  const P = EX.mockPaper(D, ['u1', 'u2'], { hash, rand: rng(3), recent: EX.recentFn(seen, now) });
  ok(P.items.length === 30, '段考：新題都做過時照樣 30 題');
}

// ---------- 4. 判分與建議複習 ----------
{
  const D = DATA.social, P = EX.unitPaper(D, 'u1', { hash, rand: rng(1) });
  const st = P.items.map(it => { const s = QK.prep(it.q, rng(2)); if (it.q.type === 'mc' || it.q.type === 'tf') s.pick = it.q.a; if (it.q.type === 'order') s.placed = it.q.items.map((_, i) => i); if (it.q.type === 'match') { s.map = {}; it.q.pairs.forEach((_, i) => { s.map[i] = i; }); } return s; });
  ok(P.items.every((it, i) => EX.answered(it.q, st[i]) && EX.isRight(it.q, st[i])), '全部照正解作答＝全對');
  const wrong = [0, 1, 2];
  wrong.forEach(i => { const q = P.items[i].q; if (q.type === 'mc') st[i].pick = (q.a + 1) % q.opts.length; else if (q.type === 'tf') st[i].pick = !q.a; else if (q.type === 'order') st[i].placed = st[i].placed.slice().reverse(); else { st[i].map = { 0: 1, 1: 0 }; } });
  const oks = P.items.map((it, i) => EX.isRight(it.q, st[i])), s = EX.score(P.items, oks);
  ok(s.score === 88 && s.right === 22, '錯 3 題 → 88 分：' + JSON.stringify(s));
  const sg = EX.suggest(D, P.items.filter((_, i) => !oks[i]), 3);
  ok(sg.length >= 1 && sg.every(x => x.u === 'u1' && x.id && x.path.length >= 1), '建議複習有節點：' + JSON.stringify(sg));
  // 題庫題都對得到某個節點（第 2 層）
  Object.keys(UNITS).forEach(k => DATA[k].units.forEach(u => {
    const miss = (u.quiz || []).filter(q => !EX.nodeOf(u, q));
    ok(miss.length <= Math.ceil(u.quiz.length * 0.1), k + ':' + u.id + ' 題庫題對到節點（對不到 ' + miss.length + ' 題）');
  }));
}

// ---------- 5. 接線 ----------
['social', 'science'].forEach(k => {
  const h = fs.readFileSync(path.join(root, 'mindmap', k + '.html'), 'utf8');
  ok(h.includes('src="exam.js') && h.includes('src="data/' + k + '/exam1-4.js'), k + '.html 載入 exam.js 和 exam1-4.js');
  ok(h.indexOf('src="exam.js') < h.indexOf('src="mindmap.js'), k + '.html exam.js 在 mindmap.js 之前');
});
const mm = fs.readFileSync(path.join(root, 'mindmap', 'mindmap.js'), 'utf8');
const exSec = mm.slice(mm.indexOf('/* ---------- 📄 單元測驗'), mm.indexOf('/* ---------- 共用 UI'));
ok(exSec.length > 500, 'mindmap.js 有單元測驗區塊');
ok(!/doneRec\(/.test(exSec), '單元測驗／段考不寫單元完成（不呼叫 doneRec）');
ok(exSec.includes("'|X|'") || exSec.includes('it.mk'), '錯題 id 用 exam.js 的 mk（新題 |X|）');
ok(mm.includes("p.k === 'X'"), '只練錯題認得單元測驗新題（p.k X）');
ok(mm.includes("data-v=\"exam\""), '單元頁有 📄 單元測驗');
ok(mm.includes('xb.hidden = !exOn(unit())') && mm.includes("if(UI.mode === 'exam' && !exOn(unit())) UI.mode = 'read';") && mm.includes('D.exam[ALL_UNITS[i].id] && D.exam[ALL_UNITS[i + 1].id]'), '沒有測驗資料的單元：📄 按鈕藏起來、段考不出那一組');
ok(fs.readFileSync(path.join(root, 'subjects.js'), 'utf8').includes('html?mock=1'), '首頁社會、自然有 📝 段考模擬卡');

console.log(`mindmap-exam: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
