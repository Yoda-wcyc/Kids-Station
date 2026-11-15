// test/gept-browser.js — 全民英檢準備區 headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連）。改自 test/fracadd-browser.js。
// 用法：node test/gept-browser.js；環境變數 GP_PS／GP_PD 換 port、GP_SHOTS＝截圖資料夾
// 820 寬（iPad 直放）＋觸控模擬：首頁三級分頁 → 初級「問答」一組（真的點選項，第 1 題故意答錯）→ 錯題庫收進 'e-L2-01-01'（p 只有 u/pt/s）、學習幣算英文、每日清單英文總數＋10
//   → 段落填空一組（題組畫面）→ 錯題重練 3 輪畢業（墓碑）→ 初級模擬考整份跑完（聽力自動播、閱讀計時）到計分（模擬換算、達標判斷、成績存 kids_gept）
//   → 寫作單句（家長評分 0～2）、口說回答問題（計時跑完到自評）；375 寬不左右捲；全程 JS 例外、console.error 要 0。
// 語音：window.__GEPT_FAST 讓 TTS 立刻念完、倒數縮短（只在測試注入；正式頁面沒有）。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(__dirname, '..'), OUT = process.env.GP_SHOTS || '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.GP_PS || 8893, PD = +process.env.GP_PD || 9433;
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
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(400); for (let i = 0; i < 50 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(250); }
async function width(w) { await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: w >= 768 ? 1180 : 812, deviceScaleFactor: 1, mobile: w < 768 }); await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }); await sleep(150); }
async function shot(name) { if (!OUT) return; const r = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true }); fs.writeFileSync(path.join(OUT, name), Buffer.from(r.data, 'base64')); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
// 真的點畫面上的東西（觸控 tap）：先捲進畫面，再點中心
async function tap(x, y) { await cdp('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: Math.round(x), y: Math.round(y) }] }); await cdp('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await sleep(60); }
async function press(sel) {
  const c = await ev(`const b = document.querySelector(${JSON.stringify(sel)}); if (!b) return null; b.scrollIntoView({ block: 'center' }); const r = b.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]`);
  if (!c) throw new Error('not found: ' + sel); await tap(c[0], c[1]);
}
const HOOK = `KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true;
  window.__coin = []; const a = KidsCoins.answer; KidsCoins.answer = function (ok, k) { __coin.push(k); return a.apply(this, arguments); }; return 1`;
const DAILY_E = `const D = KESyncMerge.ddSum(JSON.parse(localStorage.getItem('kids_daily') || '{}'))[KESyncMerge.ddDay(Date.now())] || {}; return (D.e || [0])[0]`;
const BOOK = `return (JSON.parse(localStorage.getItem('kids_mistakes') || '{}').gept) || {}`;
// 練習頁：把目前畫面的每一題點掉（wrong＝要答錯的題 id）；回傳這個畫面的題 id
async function answerScreen(R, wrong) {
  const qs = await ev(`const R = ${R}; const S = R.sc[R.i]; return S.qs.map(Q => ({ id: Q.id, a: Q.q.a, ans: Q.q.ans || null, n: (Q.q.opts || Q.q.pics || []).length || 3 }))`);
  for (const q of qs) {
    if (q.ans) { await ev(`document.querySelector('[data-in="${q.id}"]').value = ${JSON.stringify(wrong.includes(q.id) ? 'zzz' : q.ans[0])}; return 1`); await press(`[data-qok="${q.id}"]`); }
    else await press(`[data-q="${q.id}"][data-v="${wrong.includes(q.id) ? (q.a + 1) % q.n : q.a}"]`);
  }
  return qs.map(q => q.id);
}
async function practiceRun(url, wrong) {
  await go(url); await ev(HOOK); await press('#gp-go');
  for (let k = 0; k < 40; k++) {
    if (!(await ev(`return !!GeptPractice.R()`))) break;
    await answerScreen('GeptPractice.R()', wrong);
    await press('#gp-next');
  }
  return ev(`return document.getElementById('gp-res') && document.getElementById('gp-res').textContent`);
}

async function run() {
  await cdp('Page.addScriptToEvaluateOnNewDocument', { source: 'window.__GEPT_FAST = { wait: 350, read: 600000 };' });
  await width(820);
  await go('/gept/index.html'); await ev(`['kids_mistakes', 'kids_daily', 'kids_gept', 'kids_gept_ui'].forEach(k => localStorage.removeItem(k)); return 1`);
  // 1. 首頁
  await go('/gept/index.html?lv=e');
  assert(await ev(`return document.querySelectorAll('[data-lv]').length === 3 && /初級是什麼/.test(document.body.textContent) && !!document.querySelector('a[href="practice.html?set=e-L1-01"]') && !!document.querySelector('a[href="mock.html?set=e-M-01"]') && !!document.querySelector('a[href="task.html?set=e-W1-01"]') && !!document.querySelector('a[href="../index.html#learn/words/moe800"]')`), 'home (初級): parts, mock, writing, vocab links');
  await press('[data-lv="i"]');
  assert(await ev(`return /進階挑戰/.test(document.querySelector('.gp-warn').textContent) && !!document.querySelector('a[href="mock.html?set=i-M-01"]')`), 'home: 中級 tab shows the 進階挑戰 warning and its mock');
  await press('[data-lv="a"]');
  assert(await ev(`return /超級挑戰/.test(document.querySelector('.gp-warn').textContent) && !!document.querySelector('a[href="practice.html?set=a-R1-01"]')`), 'home: 高級 tab shows 超級挑戰');
  await press('[data-lv="e"]'); await shot('gp-home-820.png');
  assert(await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`), '820: home no horizontal scroll');
  // 2. 初級問答一組：第 1 題答錯
  const res = await practiceRun('/gept/practice.html?set=e-L2-01', ['e-L2-01-01']);
  assert(res === '9 / 10', 'e-L2-01 practice: 9 / 10 with real taps');
  const bk = await ev(BOOK);
  assert(bk['e-L2-01-01'] && bk['e-L2-01-01'].c === 0 && JSON.stringify(Object.keys(bk['e-L2-01-01'].p)) === '["u","pt","s"]' && bk['e-L2-01-01'].p.u === 'e' && Object.keys(bk).length === 1, 'wrong answer stored in kids_mistakes.gept (p = u, pt, s only)');
  assert(await ev(DAILY_E) === 10 && (await ev(`return __coin.length === 10 && __coin.every(k => k === 'english')`)), 'daily english +10, coins counted as english');
  assert((await ev(`return JSON.parse(localStorage.getItem('kids_gept')).best['e-L2-01'].p`)) === 90, 'best score saved (90%)');
  // 3. 段落填空（題組畫面，題號連續）
  assert(await practiceRun('/gept/practice.html?set=e-R2-01', []) === '8 / 8', 'e-R2-01 cloze groups: 8 / 8');
  await go('/gept/practice.html?set=e-R3-01'); await ev(HOOK); await press('#gp-go');
  assert(await ev(`return document.querySelectorAll('.gp-text').length >= 1 && document.querySelectorAll('.gp-num').length === 3`), 'e-R3-01 reading group renders texts + 3 questions');
  // 4. 錯題重練 3 輪 → 畢業
  for (let k = 0; k < 3; k++) {
    await go('/gept/practice.html?mistakes=1&lv=e'); await ev(HOOK); await press('#gp-go');
    await answerScreen('GeptPractice.R()', []); await press('#gp-next');
    assert(await ev(`return document.getElementById('gp-res').textContent`) === '1 / 1', 'mistakes replay round ' + (k + 1) + ': 1 / 1');
  }
  assert((await ev(BOOK))['e-L2-01-01'].d === 1, 'after 3 right in a row the mistake graduates (tombstone d:1)');
  await go('/gept/practice.html?mistakes=1&lv=e');
  assert(await ev(`return !!document.getElementById('gp-mk-empty')`), 'mistakes page: empty after graduation');
  // 5. 初級模擬考整份
  await go('/gept/mock.html?set=e-M-01'); await ev(HOOK); await press('#gp-go');
  let guard = 0, wrongId = 'e-M-01-L1-01';
  while (guard++ < 400) {
    const st = await ev(`const R = GeptMock.R(); if (R.result) return { done: 1 }; if (document.getElementById('gp-lp')) return { lp: 1 }; if (document.getElementById('gp-rb')) return { rb: 1 }; const s = document.getElementById('gp-ls'); return { q0: s && s.getAttribute('data-q0') }`);
    if (st.done) break;
    if (st.lp) { await press('#gp-lp'); continue; }
    if (st.rb) {
      const qs = await ev(`return GeptMock.R().rq.map(Q => ({ id: Q.id, a: Q.q.a, ans: Q.q.ans || null }))`);
      for (const q of qs) { if (q.ans) { await ev(`const i = document.querySelector('[data-in="${q.id}"]'); i.value = ${JSON.stringify(q.ans[0])}; i.dispatchEvent(new Event('input', { bubbles: true })); return 1`); } else await press(`[data-q="${q.id}"][data-v="${q.a}"]`); }
      assert(await ev(`return /已答 (\\d+) \\/ \\1/.test(document.getElementById('gp-rc').textContent)`), 'mock reading: every question answered (' + qs.length + ')');
      await press('#gp-sub'); continue;
    }
    if (st.q0) {
      const qs = await ev(`const R = GeptMock.R(); const S = R.sc[R.si]; return S.qs.map(Q => ({ id: Q.id, a: Q.q.a, n: (Q.q.opts || Q.q.pics || []).length || 3 }))`);
      for (const q of qs) { const done = await ev(`return GeptMock.R().ans['${q.id}'] != null`); if (!done && await ev(`return !!document.querySelector('[data-q="${q.id}"]')`)) await press(`[data-q="${q.id}"][data-v="${q.id === wrongId ? (q.a + 1) % q.n : q.a}"]`); }
      for (let i = 0; i < 40 && (await ev(`const s = document.getElementById('gp-ls'); return s && s.getAttribute('data-q0')`)) === st.q0; i++) await sleep(100);
    }
  }
  const mr = await ev(`return GeptMock.R().result`);
  assert(mr && mr.lc === 29 && mr.rc === 30 && mr.L === 116 && mr.R === 120 && mr.pass === true, 'mock e-M-01 scored: listening 29/30 → 116, reading 30/30 → 120, pass');
  assert(await ev(`return /模擬換算，非官方成績/.test(document.body.textContent) && document.getElementById('gp-pass').textContent.includes('達到通過標準')`), 'mock result shows 模擬換算，非官方成績 and the pass line');
  assert(await ev(`const m = JSON.parse(localStorage.getItem('kids_gept')).mock; return m.length === 1 && m[0].id === 'e-M-01' && m[0].L === 116`), 'mock history saved in kids_gept');
  assert((await ev(BOOK))[wrongId] && (await ev(BOOK))[wrongId].c === 0, 'mock wrong answer went into the mistakes book');
  await shot('gp-mock-result-820.png');
  await width(375); assert(await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`), '375: mock result no horizontal scroll'); await width(820);
  // 6. 寫作：單句寫作家長評分
  await go('/gept/task.html?set=e-W1-01'); await ev(HOOK);
  await ev(`const s = GeptCore; return 1`);
  const ans0 = await ev(`return window.GEPT_SETS.find(s => s.id === 'e-W1-01').items[0].ans[0]`);
  await ev(`const i = document.querySelector('[data-w="0"]'); i.value = ${JSON.stringify(ans0)}; return 1`);
  await press('#gp-wdone'); await sleep(900);   // 對答案區是平滑捲動過去的，等捲完再點
  assert(await ev(`return document.querySelector('[data-band="s0"][data-v="2"]').getAttribute('aria-pressed') === 'true'`), 'W1: exact answer pre-selected as 2 points');
  for (let i = 1; i < 15; i++) await press(`[data-band="s${i}"][data-v="1"]`);
  const tot = await ev(`return document.getElementById('gp-tot').textContent + ' ' + JSON.stringify(GeptTask.s)`); assert(tot.startsWith('16 / 30 '), 'W1: parent scores add up (2 + 14×1 = 16 / 30) ' + tot);
  // 7. 口說：回答問題（語音＋倒數），跑完到自評
  await go('/gept/task.html?set=e-S3-01'); await ev(HOOK); await press('#gp-go');
  for (let i = 0; i < 80 && !(await ev(`return !document.getElementById('gp-check').hidden`)); i++) await sleep(150);
  assert(await ev(`return !document.getElementById('gp-check').hidden && document.querySelectorAll('#gp-check .gp-ri').length === 7`), 'S3: 7 questions spoken + timed → sample answers shown');
  await press('[data-band="b1"][data-v="4"]'); await press('[data-band="b2"][data-v="4"]');
  assert(/80 分/.test(await ev(`return document.getElementById('gp-sl').textContent`)), 'S3: self-score (4+4)×10 = 80');
  // 7b. 其他題型畫面畫得出來（看圖、整合聽讀表格、略讀標題、長篇聽力短答）
  for (const [s, sel] of [['e-L1-01', '.gp-pic'], ['e-L4-01', '.gp-pics'], ['i-L3-01', '.gp-num'], ['a-R1-01', '.gp-heads'], ['a-L2-01', '.gp-sub']]) {
    await go('/gept/practice.html?set=' + s); await ev(HOOK); await press('#gp-go');
    assert(await ev(`return !!document.querySelector('${sel}') && document.querySelectorAll('[data-q]').length > 0`), s + ' first screen renders (' + sel + ')');
    await shot('gp-' + s + '.png');
  }
  // 8. 375 寬
  await width(375);
  for (const u of ['/gept/index.html?lv=a', '/gept/practice.html?set=a-R1-01', '/gept/task.html?set=a-W2-01']) { await go(u); assert(await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`), '375: no horizontal scroll ' + u); }
  await shot('gp-a-w2-375.png');
  await go('/gept/index.html'); await ev(`['kids_mistakes', 'kids_daily', 'kids_gept', 'kids_gept_ui'].forEach(k => localStorage.removeItem(k)); return 1`);
}

(async () => {
  if (OUT) fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'gp-chrome-'));
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
    console.log(log.join('\n') + '\nPASS gept-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
