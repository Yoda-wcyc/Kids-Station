// test/fracadd-browser.js — ➕ 異分母分數加減的 📕 錯題庫 headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連）。改自 test/geo-browser.js。
// 用法：node test/fracadd-browser.js；環境變數 FA_PS／FA_PD 換 port、FA_SHOTS＝截圖資料夾
// 820 寬（iPad 直放）：一般一輪用畫面數字鍵答錯一題 → 錯題庫收進 'fa:…'（p 只有 type/v/op/q）→ 首頁數學錯題庫歸「五上 → 單元六 異分母分數的加減」、畫上下排分數
//   → 只練錯題開 iframe math/fracadd.html?mistakes=1 → 原題重出，真的點數字鍵答對 3 輪 → 畢業移出（墓碑 d:1）；每輪學習幣算數學、每日清單「異分母加減」(f) 加 1、送 math:mistakes。
// 另外：未畢業最多 50 題（第 51 題擠掉最舊的）；375 寬不左右捲；全程 JS 例外、console.error 要 0。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(__dirname, '..'), OUT = process.env.FA_SHOTS || '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.FA_PS || 8887, PD = +process.env.FA_PD || 9427;
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
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(400); for (let i = 0; i < 50 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(150); }
async function width(w) { await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: w >= 768 ? 1180 : 812, deviceScaleFactor: 1, mobile: w < 768 }); await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }); await sleep(150); }
async function shot(name) { if (!OUT) return; const r = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true }); fs.writeFileSync(path.join(OUT, name), Buffer.from(r.data, 'base64')); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
async function tap(x, y) { for (const type of ['mousePressed', 'mouseReleased']) await cdp('Input.dispatchMouseEvent', { type, x: Math.round(x), y: Math.round(y), button: 'left', clickCount: 1 }); await sleep(60); }
// 真的點畫面上的按鈕（選擇器）：先捲進畫面，再點中心
async function press(sel) {
  const c = await ev(`const b = document.querySelector(${JSON.stringify(sel)}); b.scrollIntoView({ block: 'center' }); const r = b.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]`);
  await tap(c[0], c[1]);
}
// 用數字鍵填答案 {w, n, d}（空的格子不填），按確定
async function answer(v) {
  for (const f of ['w', 'n', 'd']) { if (!v[f]) continue; await press(`.box[data-f="${f}"]`); for (const ch of String(v[f])) await press(`.keys [data-k="${ch}"]`); }
  await press('#ok');
}
// 假登入（kids-auth.js 載入後蓋掉；每日清單要「有登入」才記）、攔學習幣
const HOOK = `KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true;
  window.__coin = []; window.__rep = []; const a = KidsCoins.answer, r = KidsCoins.report; KidsCoins.answer = function (ok, k) { __coin.push(k); return a.apply(this, arguments); }; KidsCoins.report = function (e) { __rep.push(e.item); try { return r.apply(this, arguments); } catch (x) { } }; return 1`;
const DAILY_F = `const D = KESyncMerge.ddSum(JSON.parse(localStorage.getItem('kids_daily') || '{}'))[KESyncMerge.ddDay(Date.now())] || {}; return (D.f || [0])[0]`;
const BOOK = `return (JSON.parse(localStorage.getItem('kids_mistakes') || '{}').math) || {}`;

async function run() {
  await width(820);
  await go('/math/fracadd.html'); await ev(`localStorage.removeItem('kids_mistakes'); localStorage.removeItem('kids_daily'); return 1`);
  await go('/math/fracadd.html'); await ev(HOOK);
  // 一般一輪：第 1 題用數字鍵答錯（整數 9：任何一題的答案都 < 8）
  await press('#go');
  const q0 = await ev(`const q = FAPage.R().qs[0]; return { id: q.id, ans: { w: q.ans.w, n: q.ans.n, d: q.ans.d } }`);
  await answer({ w: 9 });
  assert(await ev(`return /差一點/.test(document.getElementById('msg').textContent) && !!document.querySelector('.steps')`), 'round: 9 → wrong, shows the steps');
  const bk0 = await ev(BOOK);
  assert(bk0[q0.id] && bk0[q0.id].c === 0 && bk0[q0.id].w === 1 && bk0[q0.id].p.type === 'fracadd' && JSON.stringify(Object.keys(bk0[q0.id].p)) === '["type","v","op","q"]' && /^fa:/.test(q0.id), 'wrong answer stored in kids_mistakes.math as ' + q0.id + ' ' + JSON.stringify(bk0[q0.id].p));
  // 第 2 題答對（不在錯題庫 → 不收）
  await press('#next');
  const q1 = await ev(`const q = FAPage.R().qs[1]; return { id: q.id, w: q.ans.w, n: q.ans.n, d: q.ans.n ? q.ans.d : '' }`);
  await answer(q1);
  assert(await ev(`return /答對了/.test(document.getElementById('msg').textContent)`), 'round: 2nd answered right with the keypad');
  assert(Object.keys(await ev(BOOK)).length === 1, 'right answer not added to the book');
  assert(await ev(DAILY_F) === 2, 'daily 異分母加減 (f) = 2 after 2 questions');
  // 首頁數學錯題庫：五上 → 單元六 異分母分數的加減
  await go('/index.html#s/math/mistakes'); await sleep(400);
  const L = await ev(`return { books: [...document.querySelectorAll('#mk-list .mk-book summary')].map(s => s.textContent), units: [...document.querySelectorAll('#mk-list .mk-uh')].map(h => h.textContent), ids: [...document.querySelectorAll('#mk-list li[data-id]')].map(li => li.dataset.id), badge: (document.querySelector('#mk-list .badge') || {}).textContent, stacked: document.querySelectorAll('#mk-list li span[style*="flex-direction:column"]').length, txt: (document.querySelector('#mk-list li') || {}).textContent, noH: document.documentElement.scrollWidth <= innerWidth + 1 }`);
  assert(L.books.length === 1 && /五上/.test(L.books[0]) && L.units.length === 1 && /單元六/.test(L.units[0]) && /異分母分數的加減/.test(L.units[0]) && L.ids.join() === q0.id && L.badge === '異分母加減' && L.stacked === 2 && /＝ ？/.test(L.txt) && L.noH, 'mk list: 五上 → 單元六 異分母分數的加減, badge, stacked fractions: ' + JSON.stringify(L));
  await shot('fa-mk-list.png');
  await ev(`KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; document.getElementById('mk-go').click(); return 1`); await sleep(800);
  assert(await ev(`const f = document.querySelector('.frame-wrap iframe'); return location.hash === '#s/math/mistakes-go' && !!f && /math\\/fracadd\\.html\\?mistakes=1/.test(f.src) && !!(f.contentWindow.FAPage && f.contentWindow.FAPage.R())`), '只練錯題 → iframe math/fracadd.html?mistakes=1 running');
  // 重練 3 輪（直接開頁面）：同一題、真的點數字鍵、要最簡
  for (let k = 1; k <= 3; k++) {
    await go('/math/fracadd.html?mistakes=1'); await ev(HOOK);
    const f0 = await ev(DAILY_F);
    const R = await ev(`const R = FAPage.R(); return { n: R.qs.length, id: R.qs[0].id, mk: R.mk, h1: document.querySelector('.fa h1').textContent, keys: !document.getElementById('keys').hidden }`);
    assert(R.n === 1 && R.id === q0.id && R.mk && /錯題練習/.test(R.h1) && R.keys, `replay ${k}: same question ${R.id}, keypad shown`);
    if (k === 1 && q0.ans.n) {   // 第 1 輪先送一個沒約分的（值對）：只提醒、不算對錯
      const g = await ev(`const a = FAPage.R().qs[0].ans; return { w: a.w, n: a.n * 2, d: a.d * 2 }`);
      await answer(g);
      assert(await ev(`return /約分/.test(document.getElementById('msg').textContent) && !FAPage.R().done`), 'replay: unreduced → reminder only, not graded');
      await ev(`const R = FAPage.R(); R.v = { w: '', n: '', d: '' }; return 1`);
    }
    await answer({ w: q0.ans.w || '', n: q0.ans.n || '', d: q0.ans.n ? q0.ans.d : '' });
    assert(await ev(`return /答對了/.test(document.getElementById('msg').textContent)`), `replay ${k}: answered right`);
    if (k === 1) await shot('fa-mk-replay.png');
    await press('#next');
    const r = await ev(`return { score: document.getElementById('fa-score').textContent, grad: document.getElementById('fa-grad').textContent, back: document.getElementById('mk-back').getAttribute('href'), coin: __coin, rep: __rep, bk: JSON.parse(localStorage.getItem('kids_mistakes')).math['${q0.id}'] }`);
    const f1 = await ev(DAILY_F);
    assert(r.score === '1 / 1' && r.coin.join() === 'math' && r.rep.join() === 'math:mistakes' && f1 === f0 + 1 && r.back === '../index.html#s/math/mistakes', `replay ${k}: 1/1, coin math, practice_round math:mistakes, daily 異分母加減 ${f0} → ${f1}`);
    if (k < 3) assert(r.bk.c === k && !r.bk.d && /連續答對 3 次/.test(r.grad), `replay ${k}: still in the book (c=${r.bk.c})`);
    else assert(r.bk.d === 1 && /有 1 題錯題畢業了/.test(r.grad), 'replay 3: graduated (tombstone d:1)');
  }
  await go('/index.html#s/math/mistakes'); await sleep(400);
  assert(await ev(`return !!document.getElementById('mk-empty') && !document.querySelector('#mk-list li')`), '錯題庫 empty after graduating');
  await go('/math/fracadd.html?mistakes=1');
  assert(await ev(`return !!document.getElementById('mk-empty') && !!document.getElementById('mk-back')`), 'replay page with no mistakes says so + back link');
  // 上限：55 題不同的題答錯 → 留最新 50 題，最舊的 5 題變墓碑
  const capR = await ev(`const ids = []; for (let i = 0; ids.length < 55; i++) { const q = FA.gen(FA.KINDS[i % 4]); if (ids.indexOf(q.id) >= 0) continue; ids.push(q.id); const m = FA.mkEntry(q); KidsMistakes.record('math', m.id, false, m.p); await new Promise(r => setTimeout(r, 2)); }
    const b = KidsMistakes.loadAll().math; return { live: ids.filter(id => b[id] && !b[id].d), dead: ids.filter(id => b[id] && b[id].d), first5: ids.slice(0, 5), n: KidsMistakes.list('math').length }`);
  assert(capR.live.length === 50 && capR.n === 50 && capR.dead.join() === capR.first5.join(), 'cap: 55 wrong → 50 live, oldest 5 tombstoned');
  await go('/math/fracadd.html?mistakes=1');
  assert(await ev(`return FAPage.R().qs.length`) === 30, 'replay round takes 30 of the 50');
  await width(375); await go('/math/fracadd.html?mistakes=1');
  assert(await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`), '375: replay page no horizontal scroll');
  await shot('fa-mk-375.png');
  await ev(`localStorage.removeItem('kids_mistakes'); localStorage.removeItem('kids_daily'); return 1`);
}

(async () => {
  if (OUT) fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'fa-chrome-'));
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
    console.log(log.join('\n') + '\nPASS fracadd-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
