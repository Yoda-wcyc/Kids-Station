// test/symmetry-browser.js — 五上單元七〈線對稱圖形〉headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連）。改自 test/fracadd-browser.js。
// 用法：node test/symmetry-browser.js；環境變數 SYM_SHOTS＝截圖資料夾、SYM_PS／SYM_PD 換 port
// 820 寬（iPad 直放）：看重點（5 張卡、圖）→ 練習一題答錯 → 解說（哪兩條邊一樣長＋算式）、收進錯題庫 mg:g5a7-…
//   → 學過 2 次的題答對不算今天的數學題（記 r）、有一行小提示 → 紙本兩題（paper.js MG_ROWS）首頁載入補進錯題庫、歸「五上 → 單元七 線對稱圖形」
//   → math/grade.html?mistakes=1 原題重出（孩子的錯答 3 判錯、正解 4 判對）→ 做過 2 次鎖住（kids-lock）→ 375 寬不左右捲；全程 JS 例外、console.error 要 0。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(__dirname, '..'), OUT = process.env.SYM_SHOTS || '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.SYM_PS || 8889, PD = +process.env.SYM_PD || 9429;
const ORIGIN = `http://127.0.0.1:${PS}`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
const srv = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, ORIGIN).pathname); if (p.endsWith('/')) p += 'index.html';
  if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
  const f = path.join(SITE, p); if (!f.startsWith(SITE)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
});
let ws, seq = 0; const pend = new Map(), errors = [], log = [];
function cdp(method, params = {}) { const id = ++seq; ws.send(JSON.stringify({ id, method, params })); return new Promise((ok, no) => pend.set(id, { ok, no, method })); }
async function ev(expr) { const r = await cdp('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 400)); return r.result.value; }
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(400); for (let i = 0; i < 50 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(200); }
async function width(w) { await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: w >= 768 ? 1180 : 812, deviceScaleFactor: 1, mobile: w < 768 }); await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }); await sleep(150); }
async function shot(name, sel) {
  if (!OUT) return;
  let clip; if (sel) { const r = await ev(`const e = document.querySelector(${JSON.stringify(sel)}); e.scrollIntoView({ block: 'start' }); const b = e.getBoundingClientRect(); return [b.left + scrollX, b.top + scrollY, b.width, b.height]`); clip = { x: Math.max(0, r[0] - 8), y: Math.max(0, r[1] - 8), width: r[2] + 16, height: r[3] + 16, scale: 1 }; }
  const r = await cdp('Page.captureScreenshot', Object.assign({ format: 'png', captureBeyondViewport: true }, clip ? { clip } : {}));
  fs.writeFileSync(path.join(OUT, name), Buffer.from(r.data, 'base64')); log.push('  shot ' + path.join(OUT, name));
}
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
async function tap(x, y) { for (const type of ['mousePressed', 'mouseReleased']) await cdp('Input.dispatchMouseEvent', { type, x: Math.round(x), y: Math.round(y), button: 'left', clickCount: 1 }); await sleep(60); }
async function press(sel) {
  const c = await ev(`const b = document.querySelector(${JSON.stringify(sel)}); b.scrollIntoView({ block: 'center' }); const r = b.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]`);
  await tap(c[0], c[1]);
}
// 假登入（每日清單要「有登入」才記）、攔學習幣
const HOOK = `KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true;
  window.__coin = []; const a = KidsCoins.answer; KidsCoins.answer = function (ok, k) { __coin.push(k); return a.apply(this, arguments); }; return 1`;
const DAILY = `const D = KESyncMerge.ddSum(JSON.parse(localStorage.getItem('kids_daily') || '{}'))[KESyncMerge.ddDay(Date.now())] || {}; return { m: (D.m || [0])[0], r: (D.r || [0])[0] }`;
const BOOK = `return (JSON.parse(localStorage.getItem('kids_mistakes') || '{}').math) || {}`;
// 這一題照「錯」作答：數字填 999、選擇題選第一個不是正解的
const WRONG = `const Q = MGPage.P().items[MGPage.P().idx], c = document.getElementById('p-card');
  if (Q.t === 'mc') { const b = [...c.querySelectorAll('[data-o]')].find(b => +b.dataset.o !== Q.a); b.click(); } else { c.querySelector('input').value = '999'; }
  return { id: Q.id, t: Q.t, k: Q.k }`;
const RIGHT = `const Q = MGPage.P().items[MGPage.P().idx], c = document.getElementById('p-card');
  if (Q.t === 'mc') c.querySelector('[data-o="' + Q.a + '"]').click(); else c.querySelector('input').value = MG.H.toDec(Q.a);
  return { id: Q.id, t: Q.t }`;

async function run() {
  const T = Date.parse('2026-11-24T10:00:00+08:00');   // 時間固定在紙本登錄日（14 天內才補），測試不會過期
  await cdp('Page.addScriptToEvaluateOnNewDocument', { source: `window.__KIDS_TEST_DAYS = (${T} - Date.now()) / 864e5;` });
  await width(820);
  await go('/math/grade.html?u=g5a7'); await ev(`['kids_mistakes', 'kids_daily', 'kids_mg', 'kids_done'].forEach(k => localStorage.removeItem(k)); return 1`);
  await go('/math/grade.html?u=g5a7'); await ev(HOOK);
  // 📖 看重點
  const L = await ev(`return { h1: document.getElementById('title').textContent, cards: document.querySelectorAll('#learn .lc').length, svgs: document.querySelectorAll('#learn .lc svg').length, axis: document.querySelectorAll('#learn line[stroke-dasharray]').length, noH: document.documentElement.scrollWidth <= innerWidth + 1 }`);
  assert(/五上 單元七/.test(L.h1) && /線對稱圖形/.test(L.h1) && L.cards === 5 && L.svgs === 5 && L.axis === 5 && L.noH, 'learn: 五上 單元七 線對稱圖形, 5 cards each with a figure and a dashed axis: ' + JSON.stringify(L));
  await shot('sym-learn.png');
  // ✏️ 練習：第 1 題答錯
  await press('#tab-prac'); await press('#p-go');
  const q0 = await ev(`const Q = MGPage.P().items[0], s = document.querySelector('#p-card svg'); return { id: Q.id, k: Q.k, letters: [...s.querySelectorAll('text')].map(t => t.textContent).join(''), dash: !!s.querySelector('line[stroke-dasharray]'), q: document.querySelector('#p-card .q-text').textContent }`);
  assert(/^g5a7-/.test(q0.id) && q0.dash && /甲/.test(q0.q + q0.letters) , 'practice: first question drawn with the dashed axis: ' + q0.id + ' ' + q0.q);
  await shot('sym-question.png', '#p-card');
  const w0 = await ev(WRONG); await press('#p-ok');
  const F = await ev(`const f = document.getElementById('p-fb'); return { cls: f.className, txt: f.textContent }`);
  assert(/no/.test(F.cls) && /正確答案/.test(F.txt) && /一樣(長|大|遠)/.test(F.txt), 'wrong answer → 正確答案 + 解說 (which two are equal): ' + F.txt.slice(0, 120));
  await shot('sym-wrong.png', '#p-card');
  const bk = await ev(BOOK);
  assert(bk['mg:' + w0.id] && bk['mg:' + w0.id].c === 0 && bk['mg:' + w0.id].p.type === 'grade' && bk['mg:' + w0.id].p.b === '五上 單元七', 'wrong answer stored in 錯題庫 as mg:' + w0.id);
  // 學過 2 次就不算：下一題先標成「已經答對 2 次」，答對 → 數學題數不變、記 r（家長頁的舊題）、有小提示
  await press('#p-next');
  const d0 = await ev(DAILY), q1 = await ev(`const Q = MGPage.P().items[1]; const s = JSON.parse(localStorage.getItem('kids_mg') || '{}'); s.c = s.c || {}; s.c[Q.id] = 2; localStorage.setItem('kids_mg', JSON.stringify(s)); return Q.id`);
  await ev(RIGHT); await press('#p-ok');
  const d1 = await ev(DAILY), n1 = await ev(`return { ok: /答對了/.test(document.getElementById('p-fb').textContent), old: !!document.querySelector('#p-fb .kd-old'), c: JSON.parse(localStorage.getItem('kids_mg')).c['${q1}'] }`);
  assert(n1.ok && n1.old && d1.m === d0.m && d1.r === d0.r + 1 && n1.c === 2, 'learned twice → not counted as today\'s math (m ' + d0.m + '→' + d1.m + ', r ' + d0.r + '→' + d1.r + '), hint shown, count capped at 2');
  await shot('sym-old-note.png', '#p-card');
  // 新的一題答對 → 算今天的數學、答對次數 +1
  await press('#p-next');
  const q2 = await ev(RIGHT); await press('#p-ok');
  const d2 = await ev(DAILY), c2 = await ev(`return JSON.parse(localStorage.getItem('kids_mg')).c['${q2.id}']`);
  assert(d2.m === d1.m + 1 && d2.r === d1.r && c2 === 1, 'new question answered right → counted (m ' + d1.m + '→' + d2.m + '), kids_mg count 1');

  // 📝 紙本兩題（paper.js MG_ROWS）：加過紙本錯題的帳號（pp: 墓碑也算）→ 首頁載入就補進錯題庫
  await go('/index.html'); await ev(`localStorage.setItem('kids_mistakes', JSON.stringify({ math: { 'pp:A': { d: 1, w: 1, t: 5, u: 5 } } })); return 1`);
  await go('/index.html?reload=1#s/math/mistakes'); await sleep(500);
  const M = await ev(`const u = [...document.querySelectorAll('#mk-list ul[data-u="g5a7"] li[data-id]')]; return { ids: u.map(li => li.dataset.id), head: [...document.querySelectorAll('#mk-list .mk-uh')].map(h => h.textContent).filter(t => /單元七/.test(t)), badge: u.map(li => li.querySelector('.badge').textContent), txt: u.map(li => li.textContent), bk: JSON.parse(localStorage.getItem('kids_mistakes')).math, noH: document.documentElement.scrollWidth <= innerWidth + 1 }`);
  assert(M.ids.join() === 'mg:g5a7-pp1,mg:g5a7-pp2' && M.head.length === 1 && /線對稱圖形/.test(M.head[0]) && M.badge.every(b => b === '五上 單元七・第 13 回紙本') && /AH＝8 公分，AM 是幾公分/.test(M.txt[0]) && /周長是 40 公分/.test(M.txt[1]) && M.noH, 'paper seed: the 2 questions in 錯題庫 → 五上 單元七 線對稱圖形: ' + JSON.stringify({ ids: M.ids, head: M.head, badge: M.badge }));
  assert(['mg:g5a7-pp1', 'mg:g5a7-pp2'].every(id => M.bk[id].c === 0 && M.bk[id].w === 1 && M.bk[id].t === Date.parse('2026-11-24T00:00:00+08:00')), 'paper seed: c=0 w=1 t=registration day');
  await shot('sym-mk-list.png', '#mk-list ul[data-u="g5a7"]');
  // 重練：math/grade.html?mistakes=1 原題重出（圖＋題目一樣）；第 1 題用孩子的錯答 3 → 判錯、看解說；第 2 題答 4 → 對
  await go('/math/grade.html?mistakes=1'); await ev(HOOK);
  const R0 = await ev(`const P = MGPage.P(); return { ids: P.items.map(q => q.id), h1: document.getElementById('title').textContent, q: document.querySelector('#p-card .q-text').textContent, svg: document.querySelector('#p-card svg').textContent }`);
  assert(R0.ids.join() === 'g5a7-pp1,g5a7-pp2' && /線對稱/.test(R0.h1) && /AH＝8 公分，AM 是幾公分/.test(R0.q) && /甲/.test(R0.svg) && /M/.test(R0.svg), 'mistakes replay: the 2 paper questions re-drawn: ' + JSON.stringify(R0));
  await shot('sym-mk-q1.png', '#p-card');
  await ev(`document.querySelector('#p-card input').value = '3'; return 1`); await press('#p-ok');
  const W1 = await ev(`return document.getElementById('p-fb').textContent`);
  assert(/正確答案：4 公分/.test(W1) && /AM 和 HM 一樣長/.test(W1) && /8÷2＝4/.test(W1), 'paper (1): child\'s 3 → wrong, explanation AM 和 HM 一樣長、8÷2＝4');
  await shot('sym-mk-q1-wrong.png', '#p-card');
  await press('#p-next');
  await shot('sym-mk-q2.png', '#p-card');
  await ev(`document.querySelector('#p-card input').value = '60'; return 1`); await press('#p-ok');
  const W2 = await ev(`return document.getElementById('p-fb').textContent`);
  assert(/正確答案：4 公分/.test(W2) && /AB＝GH/.test(W2) && /40－32＝8/.test(W2), 'paper (2): child\'s 60 → wrong, explanation lists the equal edges then 40－32＝8、8÷2＝4');
  await shot('sym-mk-q2-wrong.png', '#p-card');
  await press('#p-next');
  const E = await ev(`return { score: document.getElementById('p-score').textContent, bk: JSON.parse(localStorage.getItem('kids_mistakes')).math }`);
  assert(E.score === '0 / 2' && E.bk['mg:g5a7-pp1'].w === 2 && E.bk['mg:g5a7-pp2'].w === 2 && !E.bk['mg:g5a7-pp1'].d, 'replay end: 0 / 2, both still in 錯題庫 (w=2)');
  // 做過 2 次就鎖：課程地圖不是最後一個 → 單元頁擋住、首頁卡片 ✓2 🔒
  await ev(`localStorage.setItem('kids_done', JSON.stringify(KidsLock.setV(JSON.parse(localStorage.getItem('kids_done') || '{}'), 'mg:g5a7', 2))); return 1`);
  await go('/math/grade.html?u=g5a7'); await sleep(300);
  assert(await ev(`return !!document.getElementById('kl-gate')`), 'kids-lock: done twice → the unit page is gated');
  await shot('sym-locked.png');
  await go('/index.html?reload=2#s/math'); await sleep(500);
  const card = await ev(`const a = [...document.querySelectorAll('a,button,.tile,.card')].find(x => /線對稱圖形/.test(x.textContent) && x.textContent.length < 200); return a ? a.textContent : ''`);
  assert(/線對稱圖形/.test(card) && /✓2 🔒/.test(card), 'math home: 線對稱圖形 card shows ✓2 🔒: ' + card.slice(0, 120));
  // 375 寬：單元頁不左右捲
  await ev(`localStorage.removeItem('kids_done'); return 1`);
  await width(375); await go('/math/grade.html?u=g5a7'); await ev(HOOK);
  await press('#tab-prac'); await press('#p-go');
  assert(await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`), '375: practice page no horizontal scroll');
  await shot('sym-375.png');
  await ev(`['kids_mistakes', 'kids_daily', 'kids_mg', 'kids_done'].forEach(k => localStorage.removeItem(k)); return 1`);
}

(async () => {
  if (OUT) fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'sym-chrome-'));
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
      else if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error' && !/BLOCKED_BY_CLIENT/.test(d.params.entry.text)) errors.push('log: ' + d.params.entry.text + ' ' + (d.params.entry.url || ''));
      else if (d.method === 'Page.javascriptDialogOpening') cdp('Page.handleJavaScriptDialog', { accept: true }).catch(() => { });
      else if (d.method === 'Fetch.requestPaused') { const u = d.params.request.url; if (u.startsWith(ORIGIN) || u.startsWith('data:')) cdp('Fetch.continueRequest', { requestId: d.params.requestId }).catch(() => { }); else cdp('Fetch.failRequest', { requestId: d.params.requestId, errorReason: 'BlockedByClient' }).catch(() => { }); }
    });
    await cdp('Runtime.enable'); await cdp('Page.enable'); await cdp('Log.enable');
    await cdp('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
    await run();
    assert(errors.length === 0, 'JS errors: ' + errors.length);
    console.log(log.join('\n') + '\nPASS symmetry-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
