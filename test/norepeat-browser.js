// test/norepeat-browser.js — 每日清單「學過 2 次就不算」（2026-11-21）headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連、不碰線上同步）。改自 test/kids-lock-browser.js。
// 用法：node test/norepeat-browser.js [網站資料夾，預設＝正本] [截圖資料夾，預設不存]；環境變數 NR_PS／NR_PD 換 port
// iPad 820×1180：
//   1. 英文：一個單字題答錯進錯題庫 →「只練錯題」真的作答 3 輪都答對 → 第 1、2 次每日英文 +1，第 3 次不加、答題區出現小提示、結果頁一行小字（錯題照樣畢業）
//   2. 英文：已按「學會了」的字（作答前就已學會）→ 答對也不算今天的題數、有提示（2026-11-26；原本的例題庫測試隨例題庫刪掉）
//   3. 地理：同一組（m1 第 1 組）全對做 3 次 → 第 1、2 次算「地理 1 組」，第 3 次不算、結果頁有提示和去新題的連結；每日清單地理連結指到下一組
//   4. 全部學會：地理 720 題、歷史 42 話都學過 2 次 → 首頁清單那兩項 ✅「🎉 這裡全部學會了」、家長頁「完成 x/5」照新規則算
//   全程 0 個 JS 錯誤
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(process.argv[2] || path.join(__dirname, '..')), SHOTS = process.argv[3] ? path.resolve(process.argv[3]) : '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.NR_PS || 8931, PD = +process.env.NR_PD || 9461;
const ORIGIN = `http://127.0.0.1:${PS}`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
const srv = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, ORIGIN).pathname); if (p.endsWith('/')) p += 'index.html';
  if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
  const f = path.join(SITE, p); if (!f.startsWith(SITE)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
});
let ws, seq = 0; const pend = new Map(), errors = [], log = [];
function cdp(method, params = {}) { const id = ++seq; ws.send(JSON.stringify({ id, method, params })); return new Promise((ok, no) => pend.set(id, { ok, no, method })); }
async function ev(expr) { const r = await cdp('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 600)); return r.result.value; }
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(450); for (let i = 0; i < 80 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(350); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
async function shot(name) { if (!SHOTS) return; const r = await cdp('Page.captureScreenshot', { format: 'png' }); fs.mkdirSync(SHOTS, { recursive: true }); fs.writeFileSync(path.join(SHOTS, name + '.png'), Buffer.from(r.data, 'base64')); log.push('📸 ' + name + '.png'); }
// 登入、練習額度用假的；kids_jwt 給 kids-daily.js 在沒有 kids-auth 的頁面判斷登入；不同步（沒有同步碼，sync.js 不連線）
const HOOK = `if (window.KidsAuth) { KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true; } return 1`;
const DAYC = `const D = (KESyncMerge.ddSum(JSON.parse(localStorage.getItem('kids_daily') || '{}'))[KESyncMerge.ddDay(Date.now())]) || {}; `;
// 英文作答：照題號用同一份題庫查答案（答對）；bad＝隨便答
const ANSWER = bad => `const card = document.querySelector('.qcard'); if (!card) return null; const id = card.dataset.qid;
  window.__E = window.__E || new KE.Engine({ words: DATA_WORDS, phrases: DATA_PHRASES, roots: DATA_ROOTS, grammar: DATA_GRAMMAR, patterns: DATA_PATTERNS, textbook: DATA_TEXTBOOK });
  const q = __E.get(id), ans = ${bad ? "'zzz'" : 'q.answer'};
  const inp = document.getElementById('ans'), opts = [...document.querySelectorAll('.opt')], chips = [...document.querySelectorAll('.pool .chip')], gaps = [...document.querySelectorAll('.gap-in')];
  if (inp) { inp.value = ans; document.getElementById('ok').click(); }
  else if (gaps.length) { gaps.forEach(g => { g.value = ${bad ? "'z'" : 'ans.charAt(+g.dataset.p)'}; }); document.getElementById('ok').click(); }
  else if (chips.length) { const used = new Set(); (${bad ? 'chips.map(c => c.textContent)' : 'KE.tokens ? null : null'} || q.answer.split(/\\s+/)).forEach(w => { const c = chips.find((x, i) => !used.has(i) && x.textContent === w) || chips.find((x, i) => !used.has(i)); if (c) { used.add(chips.indexOf(c)); c.click(); } }); document.getElementById('ok').click(); }
  else if (opts.length) { (opts.find(o => o.dataset.v === ans) || opts[0]).click(); }
  else if (document.getElementById('skip')) document.getElementById('skip').click();
  return id;`;
const NEXT = `const n = document.getElementById('next'); if (n) n.click(); return !!n`;

async function run() {
  await cdp('Emulation.setDeviceMetricsOverride', { width: 820, height: 1180, deviceScaleFactor: 1, mobile: false });
  await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });

  // ---- 1. 英文：同一題答對 3 次（錯題庫重練 3 輪）→ 第 3 次不算、有提示 ----
  await go('/index.html');
  const qid = await ev(`localStorage.clear(); localStorage.setItem('kids_jwt', 'x'); const w = DATA_WORDS.find(x => /^[a-z]{4,6}$/.test(x.w)), id = 'w:' + KE.wordKey(w) + ':zh2en', t = Date.now() - 864e5;
    const e = { t, id, m: 'words', k: 'words:x', y: 'zh2en', ok: 0, a: 'zzz' }; e.r = KESyncMerge.rid(e);
    localStorage.setItem('ke_log', JSON.stringify([e])); localStorage.setItem('ke_mistakes', JSON.stringify({ [id]: { c: 0, w: 1, t, u: t } })); return id`);
  await go('/map.html');   // 換一頁再回來＝重新載入（app.js 開頁時才讀紀錄）
  const seenE = [];
  for (let round = 1; round <= 3; round++) {
    await go('/index.html#mistakes'); await ev(HOOK); await sleep(200);
    await ev(`document.getElementById('onlym').click(); return 1`); await sleep(300);
    for (let k = 0; k < 12; k++) {
      const before = await ev(DAYC + `return [(D.e || [0])[0], (D.r || [0])[0]]`);
      const id = await ev(ANSWER(false)); if (!id) break; await sleep(150);
      const after = await ev(DAYC + `const fb = document.getElementById('fb'); return [(D.e || [0])[0], (D.r || [0])[0], fb ? fb.innerHTML : '', !!(fb && fb.querySelector('.kd-old a'))]`);
      if (id === qid) seenE.push({ round, de: after[0] - before[0], dr: after[1] - before[1], note: /這題你已經會了（學過 2 次）/.test(after[2]), link: after[3], ok: /答對了/.test(after[2]) });
      if (id === qid && round === 3) { await ev(`document.getElementById('fb').scrollIntoView({ block: 'center' }); return 1`); await sleep(200); await shot('1-english-3rd-time-not-counted'); }
      if (!(await ev(NEXT))) break; await sleep(200);
      if (await ev(`return location.hash === '#result'`)) break;
    }
    if (round === 3) { await sleep(300); await shot('2-english-result-old-line'); }
  }
  assert(seenE.length === 3 && seenE.every(x => x.ok), 'the same word question came up and was answered right in all 3 rounds ' + JSON.stringify(seenE));
  assert(seenE[0].de === 1 && seenE[1].de === 1 && !seenE[0].note && !seenE[1].note, '1st and 2nd right answer: 每日英文 +1, no hint');
  assert(seenE[2].de === 0 && seenE[2].dr === 1 && seenE[2].note && seenE[2].link, '3rd right answer: 每日英文 not increased (old question r +1), gentle hint with a link next to the answer');
  const res = await ev(`return { old: (document.querySelector('.result .kd-old') || {}).textContent || '', mk: JSON.parse(localStorage.getItem('ke_mistakes'))[${JSON.stringify(qid)}] }`);
  assert(/題你已經會了（學過 2 次或按過學會了）/.test(res.old) && res.mk && res.mk.d === 1, 'result page: one small line; the mistake still graduates (3 in a row) ' + JSON.stringify(res));

  // ---- 2. 英文：已按「學會了」的字（ke_learned），作答前就是已學會 → 答對也不算今天的題數、有提示（2026-11-26 Yoda：已學會的都不計入）----
  await go('/index.html');
  const q2 = await ev(`localStorage.clear(); localStorage.setItem('kids_jwt', 'x'); const w = DATA_WORDS.filter(x => /^[a-z]{4,6}$/.test(x.w))[3], id = 'w:' + KE.wordKey(w) + ':zh2en', t = Date.now() - 864e5;
    const e = { t, id, m: 'words', k: 'words:x', y: 'zh2en', ok: 0, a: 'zzz' }; e.r = KESyncMerge.rid(e);
    localStorage.setItem('ke_log', JSON.stringify([e])); localStorage.setItem('ke_mistakes', JSON.stringify({ [id]: { c: 0, w: 1, t, u: t } }));
    localStorage.setItem('ke_learned', JSON.stringify({ ['word:' + KE.wordKey(w)]: { at: new Date(t).toISOString(), score: '3/3' } })); return id`);
  await go('/map.html'); await go('/index.html#mistakes'); await ev(HOOK); await sleep(200);
  await ev(`document.getElementById('onlym').click(); return 1`); await sleep(300);
  let seen2 = null;
  for (let k = 0; k < 12; k++) {
    const before = await ev(DAYC + `return [(D.e || [0])[0], (D.r || [0])[0], (D.d || [0])[0]]`);
    const id = await ev(ANSWER(false)); if (!id) break; await sleep(150);
    const after = await ev(DAYC + `const fb = document.getElementById('fb'); return [(D.e || [0])[0], (D.r || [0])[0], (D.d || [0])[0], fb ? fb.innerHTML : '']`);
    if (id === q2) { seen2 = { de: after[0] - before[0], dr: after[1] - before[1], dd: after[2] - before[2], note: /這題你已經會了（已學會），不算今天的題數/.test(after[3]), ok: /答對了/.test(after[3]) }; await shot('3-english-learned-word-not-counted'); }
    if (!(await ev(NEXT))) break; await sleep(200);
    if (await ev(`return location.hash === '#result'`)) break;
  }
  assert(seen2 && seen2.ok && seen2.de === 0 && seen2.dd === 0 && seen2.dr === 1 && seen2.note, 'learned word (👍 學會了, answered right 0 times before): right answer not counted (英文 +0、單字 +0、舊題 +1), gentle hint ' + JSON.stringify(seen2));
  const left2 = await ev(`return JSON.parse(localStorage.getItem('kids_daily_left') || 'null')`);
  assert(left2 === null || left2.e > 0, 'kids_daily_left still has new questions (one learned word does not empty a category) ' + JSON.stringify(left2));

  // ---- 3. 地理：同一組全對做 3 次 → 第 3 次不算 1 組 ----
  await go('/geo/unit.html?u=m1&tab=prac'); await ev(`localStorage.clear(); localStorage.setItem('kids_jwt', 'x'); return 1`);
  await go('/geo/unit.html?u=m1&tab=prac'); await ev(HOOK);
  const answerAll = `const R = GeoPage.run(); while (GeoPage.run() && GeoPage.run() === R) { const q = R.qs[R.i], m = R.m; if (q.type === 'mc') m.act('opt', q.a); else { if (q.type === 'tap') m.act('pin', q.a); else (q.type === 'drag' ? q.items.map(x => x.to) : q.pieces.map(x => x.id)).forEach((s, k) => { m.act('card', k); m.act('slot', s); }); m.act('ok'); } document.getElementById('g-next').click(); } return 1`;
  const geoRuns = [];
  for (let i = 1; i <= 3; i++) {
    await ev(`GeoPage.setTab('prac'); GeoPage.start('prac', 1); return 1`);
    if (i === 3) { await ev(`const R = GeoPage.run(), q = R.qs[0], m = R.m; if (q.type === 'mc') m.act('opt', q.a); else { if (q.type === 'tap') m.act('pin', q.a); else (q.type === 'drag' ? q.items.map(x => x.to) : q.pieces.map(x => x.id)).forEach((s, k) => { m.act('card', k); m.act('slot', s); }); m.act('ok'); } return 1`); await sleep(200);
      geoRuns.q1 = await ev(`return (document.getElementById('g-fb') || {}).textContent || ''`); await ev(`document.getElementById('g-fb').scrollIntoView({ block: 'center' }); return 1`); await shot('4-geo-3rd-round-question-hint'); await ev(`document.getElementById('g-next').click(); return 1`); }
    await ev(answerAll); await sleep(200);
    geoRuns.push(await ev(DAYC + `const n = document.querySelector('#prac .kd-old'); return { w: (D.w || [0])[0], score: document.getElementById('g-score').textContent, note: n ? n.textContent : '', href: n && n.querySelector('a') ? n.querySelector('a').getAttribute('href') : '' }`));
  }
  await shot('5-geo-3rd-round-not-counted');
  assert(geoRuns[0].w === 1 && geoRuns[1].w === 2 && geoRuns[0].score === '10 / 10' && !geoRuns[0].note && !geoRuns[1].note, '地理第 1 組全對：第 1、2 次各算 1 組 ' + JSON.stringify(geoRuns.slice(0, 2)));
  assert(geoRuns[2].w === 2 && /這一組的題你都已經學過 2 次了/.test(geoRuns[2].note) && /unit\.html\?u=m1&tab=prac$/.test(geoRuns[2].href) && /學過 2 次/.test(geoRuns.q1), '第 3 次：不算 1 組（還是 2）、每題有小提示、結果頁提示＋連結到還有新題的組 ' + JSON.stringify(geoRuns[2]));
  const gq = await ev(`return [Object.keys(KidsDaily.geoQ()).length, KidsDaily.geoQ()['m1-p01']]`);
  assert(gq[0] === 10 && gq[1] === 2, 'kids_geo_q: the 10 questions of set 1 learned twice (capped) ' + JSON.stringify(gq));

  // ---- 4. 全部學會：地理、歷史 → 首頁清單 🎉、家長頁 ----
  await go('/index.html');
  await ev(`const g = {}; KidsCompletion.GEO_UNITS.forEach(([u]) => { for (let i = 1; i <= 30; i++) g[u + '-p' + String(i).padStart(2, '0')] = 2; for (let i = 1; i <= 10; i++) g[u + '-t' + String(i).padStart(2, '0')] = 2; });
    localStorage.setItem('kids_geo_q', JSON.stringify(g)); let d = JSON.parse(localStorage.getItem('kids_done') || '{}'); for (let v = 1; v <= 7; v++) for (let e = 1; e <= 6; e++) d = KidsLock.setV(d, 'v' + v + 'e' + e, 2);
    localStorage.setItem('kids_done', JSON.stringify(d)); const s = {}; for (let v = 1; v <= 7; v++) for (let e = 1; e <= 6; e++) s['v' + v + 'e' + e] = 1; localStorage.setItem('kids_comic', JSON.stringify({ seen: s, next: '' })); return 1`);
  await go('/index.html'); await ev(HOOK); await sleep(300);
  const T = await ev(`const T = KidsDaily.today(); return T.rows.map(r => ({ k: r.key, done: r.done, full: !!r.full, href: r.href }))`);
  const g = T.find(r => r.k === 'g'), h = T.find(r => r.k === 'h');
  assert(g.done && g.full && h.done && h.full && !T.find(r => r.k === 'e').full, 'today(): 地理、歷史 all learned → done + full; 英文 not ' + JSON.stringify(T));
  if (await ev(`return !!window.KidsAssistantUI || !!document.getElementById('td')`)) {}
  const ui = await ev(`await new Promise(r => setTimeout(r, 300)); const rows = [...document.querySelectorAll('#td .td-r')].map(a => ({ k: a.dataset.key, t: a.textContent, done: a.classList.contains('done') })); return rows`);
  const ug = ui.find(r => r.k === 'g'), uh = ui.find(r => r.k === 'h');
  assert(ug && /🎉 這裡全部學會了/.test(ug.t) && ug.done && uh && /🎉 這裡全部學會了/.test(uh.t), '首頁今日清單：地理、歷史 ✅「🎉 這裡全部學會了」 ' + JSON.stringify(ui.map(r => r.k + ':' + r.t.replace(/\s+/g, ' '))));
  await ev(`const t = document.getElementById('td'); if (t) t.scrollIntoView({ block: 'start' }); return 1`); await sleep(200); await shot('6-home-all-learned');
  await go('/index.html#parent'); await sleep(400);
  const pc = await ev(`const c = document.querySelector('#dailyCard .dl-check'); return c ? c.textContent : (document.getElementById('dailyCard') || {}).textContent || ''`);
  assert(/歷史 🎉 全部學會了/.test(pc) && /地理 🎉 全部學會了/.test(pc) && /完成 2\/6/.test(pc) && /、英文閱讀 0\/1$/.test(pc), '家長頁今天：完成 2/6 項（歷史、地理 🎉 全部學會了；11/24 起多英文閱讀） ' + pc);
  await ev(`document.getElementById('dailyCard').scrollIntoView({ block: 'start' }); return 1`); await sleep(200); await shot('7-parent-daily-card');
  const wide = await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`);
  assert(wide, 'iPad 820px: no horizontal scroll on the parent page');

  // ---- 5. 家長頁「🎯 改每日目標」英文閱讀（2026-11-26）：改成 0 → 清單不列這一項、不擋完成；存在 dg 第 12 欄 ----
  const f5 = await ev(`const b = document.getElementById('dgB'); if (!b) return null; const v0 = b.value; b.value = '0'; document.getElementById('dgSave').click(); await new Promise(r => setTimeout(r, 300));
    const c = document.querySelector('#dailyCard .dl-check'), dg = JSON.parse(localStorage.getItem('kids_daily_goal') || '{}'), k = Object.keys(dg).sort().pop();
    return { v0, check: c ? c.textContent : '', sum: (document.querySelector('#dgBox summary') || {}).textContent || '', dg: dg[k], rows: KidsDaily.today().rows.map(r => r.key) }`);
  assert(f5 && f5.v0 === '1' && f5.dg.split(',').length === 12 && /,0$/.test(f5.dg) && /完成 2\/5/.test(f5.check) && !/英文閱讀/.test(f5.check) && /英文閱讀 0 篇）/.test(f5.sum) && !f5.rows.includes('b'), '家長改英文閱讀 0 篇 → dg 12 欄、清單不列英文閱讀（完成 2/5）' + JSON.stringify(f5));
  await shot('8-parent-goal-english-reading-0');
}

(async () => {
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'nr-chrome-'));
  const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PD}`, `--user-data-dir=${prof}`, '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--mute-audio', 'about:blank'], { stdio: 'ignore' });
  let code = 0;
  try {
    let tgt; for (let i = 0; i < 60 && !tgt; i++) { try { tgt = (await (await fetch(`http://127.0.0.1:${PD}/json/list`)).json()).find(t => t.type === 'page'); } catch (e) { } if (!tgt) await sleep(250); }
    ws = new WebSocket(tgt.webSocketDebuggerUrl); await new Promise(r => ws.addEventListener('open', r));
    ws.addEventListener('message', m => {
      const d = JSON.parse(m.data);
      if (d.id && pend.has(d.id)) { const p = pend.get(d.id); pend.delete(d.id); d.error ? p.no(new Error(p.method + ': ' + d.error.message)) : p.ok(d.result); }
      else if (d.method === 'Runtime.exceptionThrown') errors.push('exception: ' + JSON.stringify(d.params.exceptionDetails).slice(0, 400));
      else if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errors.push('console.error: ' + JSON.stringify(d.params.args).slice(0, 300));
      else if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error' && !/BLOCKED_BY_CLIENT/.test(d.params.entry.text) && !/\/favicon\.ico$/.test(d.params.entry.url || '')) errors.push('log: ' + d.params.entry.text + ' ' + (d.params.entry.url || ''));
      else if (d.method === 'Page.javascriptDialogOpening') cdp('Page.handleJavaScriptDialog', { accept: true }).catch(() => { });
      else if (d.method === 'Fetch.requestPaused') { const u = d.params.request.url; if (u.startsWith(ORIGIN) || /^(data|blob):/.test(u)) cdp('Fetch.continueRequest', { requestId: d.params.requestId }).catch(() => { }); else cdp('Fetch.failRequest', { requestId: d.params.requestId, errorReason: 'BlockedByClient' }).catch(() => { }); }
    });
    await cdp('Runtime.enable'); await cdp('Page.enable'); await cdp('Log.enable');
    await cdp('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
    await run();
    assert(errors.length === 0, 'JS errors: ' + errors.length);
    console.log(log.join('\n') + '\nPASS norepeat-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
