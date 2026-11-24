// test/english-reading-browser.js — 英文閱讀測驗 headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連）。改自 test/gept-browser.js。
// 用法：node test/english-reading-browser.js；環境變數 ER_SHOTS＝截圖資料夾、ER_PS／ER_PD 換 port
// 820 寬（iPad 直放）＋觸控：首頁下一篇＝順序第一篇 → 開始作答、第 1 題故意答錯（解說＋答案依據那句變綠）→ 完成 → 下一篇是順序第二篇
//   → 學習幣 3 題英文、每日統計英文 +3、錯題庫 'gept' 本子收進 er:<篇>:q1（u＝r）→ 錯題重練 3 輪畢業（墓碑）
//   → 做滿 2 次上鎖、跳到後面的篇擋住、preview 不擋 → 全文朗讀／點一句念一句／收起文章 → 375 寬不左右捲、1180 寬兩欄；全程 JS 例外、console.error 要 0。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(__dirname, '..'), OUT = process.env.ER_SHOTS || '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.ER_PS || 8897, PD = +process.env.ER_PD || 9437;
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
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(400); for (let i = 0; i < 50 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(250); await ev(HOOK); }
async function width(w, h) { await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: h || (w >= 768 ? 1180 : 812), deviceScaleFactor: 1, mobile: w < 768 }); await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }); await sleep(150); }
async function shot(name, full) { if (!OUT) return; const r = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: !!full }); fs.writeFileSync(path.join(OUT, name), Buffer.from(r.data, 'base64')); log.push('shot ' + name); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
async function tap(x, y) { await cdp('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: Math.round(x), y: Math.round(y) }] }); await cdp('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await sleep(80); }
async function press(sel) {
  const c = await ev(`const b = document.querySelector(${JSON.stringify(sel)}); if (!b) return null; b.scrollIntoView({ block: 'center' }); const r = b.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]`);
  if (!c) throw new Error('not found: ' + sel); await tap(c[0], c[1]);
}
// 登入、練習額度假裝通過；記下學習幣
const HOOK = `if (window.KidsAuth) { KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true; }
  if (window.KidsCoins && !window.__coin) { window.__coin = []; const a = KidsCoins.answer; KidsCoins.answer = function (ok, k) { __coin.push(k); return a.apply(this, arguments); }; window.__rep = []; const rp = KidsCoins.report; KidsCoins.report = function (e) { __rep.push(e); return rp.apply(this, arguments); }; } return 1`;
const DAILY = `const D = KESyncMerge.ddSum(JSON.parse(localStorage.getItem('kids_daily') || '{}'))[KESyncMerge.ddDay(Date.now())] || {}; return D`;
const BOOK = `return (JSON.parse(localStorage.getItem('kids_mistakes') || '{}').gept) || {}`;
const STORE = `return JSON.parse(localStorage.getItem('kids_en_reading') || '{}')`;
// 作答畫面目前這一題：right＝要不要答對
async function answerCur(right) {
  const q = await ev(`const R = ERPage.state(); const it = R.items[R.i]; return { i: R.i, a: it.q.a }`);
  await press(`#erq${q.i} [data-qk="mc"][data-v="${right ? q.a : (q.a + 1) % 4}"]`);
  return q;
}

async function run() {
  await cdp('Page.addScriptToEvaluateOnNewDocument', { source: 'window.__GEPT_FAST = { wait: 50 };' });
  await width(820);
  await go('/english-reading/index.html'); await ev(`['kids_en_reading', 'kids_mistakes', 'kids_daily'].forEach(k => localStorage.removeItem(k)); return 1`);
  await go('/english-reading/index.html');
  const order = await ev(`return ERPage.order.map(a => a.id)`), lvs = await ev(`return ERPage.order.map(a => a.lv).join('')`);
  assert(order.length >= 10 && /^1+2+3+$/.test(lvs), 'order: 易 → 中 → 難 (' + order.length + ' 篇)');
  assert(await ev(`return document.getElementById('er-go').getAttribute('href') === 'index.html?a=${order[0]}' && !document.querySelector('select')`), 'home: next = first in order, no level menu');
  await shot('01-home-820.png');

  // 第一篇：答錯第 1 題、其他答對
  await press('#er-go'); for (let i = 0; i < 50 && (await ev('return location.search')) === ''; i++) await sleep(100); for (let i = 0; i < 50 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(250); await ev(HOOK);
  assert(await ev(`return location.search === '?a=${order[0]}' && !!document.getElementById('er-art')`), 'article page opened from the big card');
  assert(await ev(`const p = document.getElementById('er-art'); return getComputedStyle(p).position === 'sticky' && p.getBoundingClientRect().height <= innerHeight * 0.5`), 'article panel is sticky and ≤ half the screen');
  await press('#er-start');
  await answerCur(false);
  assert(await ev(`const c = document.getElementById('erq0'); return c.querySelector('.fb.no') && /答案在這句/.test(c.textContent) && c.querySelector('.fb').textContent.length > 20`), 'wrong answer: shows 中文解說 + evidence quote');
  assert(await ev(`return document.querySelectorAll('#er-art .er-ev').length >= 1`), 'wrong answer: evidence sentence highlighted in the article');
  await shot('02-question-wrong-820.png');
  await press('#er-nx');
  const n = await ev(`return ERPage.state().items.length`);
  for (let i = 1; i < n; i++) { await answerCur(true); assert(await ev(`return !!document.querySelector('#erq${i} .fb.ok')`), 'q' + (i + 1) + ' right'); await press('#er-nx'); }
  assert(await ev(`const r = document.getElementById('er-result'); return r && r.getAttribute('data-pass') === '1'`), 'result: passed with ' + (n - 1) + '/' + n);
  await shot('03-result-820.png');
  assert(await ev(`return __coin.length === ${n} && __coin.every(k => k === 'english')`), 'coins: ' + n + ' english answers');
  assert((await ev(DAILY)).e[0] === n, 'daily stats: english +' + n);
  const bk = await ev(BOOK), mkId = 'er:' + order[0] + ':q1';
  assert(bk[mkId] && !bk[mkId].d && bk[mkId].p.u === 'r' && Object.keys(bk).length === 1, 'mistakes: q1 in gept book with u=r');
  const st = await ev(STORE);
  assert(st.a[order[0]].done && st.a[order[0]].n === 1 && st.ok[order[0] + ':q2'] === 1 && !st.ok[order[0] + ':q1'], 'store: done + per-question ok counts');
  assert((await ev(DAILY)).b[0] === 1, 'daily list: first pass of an article → dd code b = 1 (英文閱讀 1 篇)');
  assert(await ev(`return __rep.length === 1 && __rep[0].type === 'practice_round' && __rep[0].item === 'english:reading' && __rep[0].correct === ${n} - 1 && __rep[0].total === ${n}`), 'coins: one practice_round english:reading per finished article');
  assert(st.p === 1, 'store: p (in-order progress, synced) = 1');
  assert(await ev(`return document.getElementById('er-next').getAttribute('href') === 'index.html?a=${order[1]}'`), 'next button → second article');

  // 首頁：今天 1 篇、錯題 1 題、讀過的文章 ✓1
  await go('/english-reading/index.html');
  assert(await ev(`return /今天已經讀完 1 篇/.test(document.getElementById('er-today').textContent) && /錯題重練（1 題）/.test(document.getElementById('er-mk').textContent) && /已完成 1 \\//.test(document.getElementById('er-cnt').textContent) && /✓1/.test(document.querySelector('.er-done').textContent)`), 'home: today 1, mistakes 1, ✓1');
  assert(await ev(`return document.getElementById('er-go').getAttribute('href') === 'index.html?a=${order[1]}'`), 'home: next = second article');

  // 錯題重練 3 輪 → 畢業
  for (let k = 0; k < 3; k++) {
    await go('/english-reading/index.html?mistakes=1'); if (await ev(`return !!document.querySelector('[data-er="mkLogin"]')`)) await press('[data-er="mkLogin"]');   // 沒登入先看到登入卡（HOOK 在頁面畫好之後才裝）
   
    assert(await ev(`return document.querySelectorAll('.er-q').length === 1`), 'mistakes round ' + (k + 1) + ': 1 card');
    const a = await ev(`return ERPage.state().items[0].q.a`);
    await press(`#erq0 [data-qk="mc"][data-v="${a}"]`);
    if (!k) { assert(await ev(`const c = document.getElementById('erq0'); return c.querySelector('details').open && c.querySelectorAll('.er-ev').length >= 1`), 'mistakes: article opens with evidence highlighted'); await shot('04-mistakes-820.png'); }
  }
  assert((await ev(BOOK))[mkId].d === 1 && await ev(`return /畢業/.test(document.getElementById('er-mkresult').textContent)`), 'mistakes: graduated after 3 correct');
  await go('/english-reading/index.html?mistakes=1'); if (await ev(`return !!document.querySelector('[data-er="mkLogin"]')`)) await press('[data-er="mkLogin"]');   // 沒登入先看到登入卡（HOOK 在頁面畫好之後才裝）
    assert(await ev(`return !!document.getElementById('er-mkempty')`), 'mistakes: empty after graduation');

  // 跨裝置：別台同步來的 p＝3 → 前 3 篇補成完成、下一篇是第 4 篇；本機鎖不動
  await ev(`const s = JSON.parse(localStorage.getItem('kids_en_reading')); s.p = 3; localStorage.setItem('kids_en_reading', JSON.stringify(s)); return 1`);
  await go('/english-reading/index.html');
  assert(await ev(`const s = JSON.parse(localStorage.getItem('kids_en_reading')); return s.p === 3 && !!s.a['${order[1]}'].done && s.a['${order[2]}'].n === 1 && document.getElementById('er-go').getAttribute('href') === 'index.html?a=${order[3]}' && /已完成 3 \\//.test(document.getElementById('er-cnt').textContent) && /今天已經讀完 1 篇/.test(document.getElementById('er-today').textContent)`), 'sync: remote p=3 fills the first 3 articles (not counted as today), next = 4th');

  // 鎖、順序、preview
  await ev(`const s = JSON.parse(localStorage.getItem('kids_en_reading')); s.a['${order[0]}'].n = 2; localStorage.setItem('kids_en_reading', JSON.stringify(s)); return 1`);
  await go('/english-reading/index.html?a=' + order[0]);
  assert(await ev(`return !!document.getElementById('er-locked') && document.getElementById('er-gonext').getAttribute('href') === 'index.html?a=${order[3]}'`), 'lock: passed twice → locked card, go to next');
  const last = order[order.length - 1];
  await go('/english-reading/index.html?a=' + last); assert(await ev(`return !!document.getElementById('er-ahead')`), 'order: jumping ahead is blocked');
  await go('/english-reading/index.html?a=' + last + '&preview=1'); assert(await ev(`return !!document.getElementById('er-art')`), 'preview=1 opens any article (authors)');
  await go('/english-reading/index.html'); assert(await ev(`return /✓2 🔒/.test(document.querySelector('.er-done').textContent) && !!document.querySelector('.er-done a.er-off')`), 'home: ✓2 🔒 greyed');

  // 朗讀：全文、點一句、收起文章
  await go('/english-reading/index.html?a=h003&preview=1');
  await press('[data-er="tts"]'); assert(await ev(`return document.querySelector('[data-er="tts"]').textContent.indexOf('停止') >= 0`), 'tts: full text playing');
  for (let i = 0; i < 40 && await ev(`return document.querySelector('[data-er="tts"]').textContent.indexOf('停止') >= 0`); i++) await sleep(100);
  assert(await ev(`return document.querySelector('[data-er="tts"]').textContent === '🔊 全文朗讀'`), 'tts: finishes and resets');
  await press('#er-art .er-s[data-u="1"]'); await sleep(50);
  await press('[data-er="fold"]'); assert(await ev(`return document.getElementById('er-art').classList.contains('fold')`), 'fold: article collapses');
  await press('[data-er="fold"]');
  await press('#er-start'); await shot('05-hard-table-820.png');

  // 手機寬、iPad 橫放
  await width(375);
  for (const u of ['/english-reading/index.html', '/english-reading/index.html?a=h003&preview=1', '/english-reading/index.html?a=m002&preview=1']) { await go(u); assert(await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`), '375: no horizontal scroll ' + u); }
  await shot('06-phone-375.png');
  await width(1180, 820); await go('/english-reading/index.html?a=m002&preview=1'); await press('#er-start');
  assert(await ev(`return getComputedStyle(document.querySelector('.er-read')).display === 'grid'`), '1180: two columns');
  await shot('07-landscape-1180.png');
}

(async () => {
  if (OUT) fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'er-chrome-'));
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
    console.log(log.join('\n') + '\nPASS english-reading-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
