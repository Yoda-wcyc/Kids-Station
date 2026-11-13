// test/nocopy-browser.js — 全站禁止複製貼上（nocopy.js，2026-11-13）headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連）。改自 test/fracadd-browser.js。
// 用法：node test/nocopy-browser.js [網站資料夾，預設＝正本]；環境變數 NC_BASE＝改測線上（例如 https://yoda-wcyc.github.io/Kids-Station，只跑抽樣頁＋題目頁）
// 820 寬（iPad 直放）＋觸控模擬：
//   1. 每一頁都載到 nocopy.js：整頁不能選字、輸入框可以選字（iOS 輸入框才打得了字）、0 JS 錯誤
//   2. 英文句型一回：題目文字 copy 事件被擋、右鍵選單被擋、Ctrl+C 複製不到剪貼簿；字卡重組題用「觸控點字卡」答對；
//      打字題真的一個鍵一個鍵打得進去、Ctrl+V 貼不進去、paste／beforeinput(insertFromPaste、insertFromDrop)／drop 都被擋，答對
//   3. 例外照常：navigator.clipboard.writeText（複製同步碼按鈕）可用；data-copy-ok 的暫存 textarea execCommand('copy') 複製得到（分享網址）；
//      天平「貼上題目代碼」（data-paste-ok）Ctrl+V 貼得進去
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.NC_PS || 8891, PD = +process.env.NC_PD || 9431;
const LIVE = (process.env.NC_BASE || '').replace(/\/$/, ''), ORIGIN = LIVE ? new URL(LIVE).origin : `http://127.0.0.1:${PS}`, BASE = LIVE || ORIGIN;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.wasm': 'application/wasm' };
const srv = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, ORIGIN).pathname); if (p.endsWith('/')) p += 'index.html';
  if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
  const f = path.join(SITE, p); if (!f.startsWith(SITE)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
});
let ws, seq = 0; const pend = new Map(), errors = [], log = [];
function cdp(method, params = {}) { const id = ++seq; ws.send(JSON.stringify({ id, method, params })); return new Promise((ok, no) => pend.set(id, { ok, no, method })); }
async function ev(expr) { const r = await cdp('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 400)); return r.result.value; }
async function go(url) { await cdp('Page.navigate', { url: BASE + url }); await sleep(LIVE ? 900 : 400); for (let i = 0; i < 80 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(250); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
async function touchTap(x, y) { const pt = [{ x: Math.round(x), y: Math.round(y) }]; await cdp('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt }); await sleep(30); await cdp('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await sleep(120); }
async function center(sel, k = 0) { return ev(`const b = document.querySelectorAll(${JSON.stringify(sel)})[${k}]; b.scrollIntoView({ block: 'center' }); const r = b.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]`); }
async function key(k, mods = 0, commands) { // mods：2＝Ctrl、4＝⌘；commands＝Chrome 編輯指令（快捷鍵真的會做的事）
  const code = /^[a-z]$/i.test(k) ? 'Key' + k.toUpperCase() : k, base = { key: k, code, modifiers: mods, windowsVirtualKeyCode: /^[a-z]$/i.test(k) ? k.toUpperCase().charCodeAt(0) : 0 };
  await cdp('Input.dispatchKeyEvent', Object.assign({ type: 'rawKeyDown' }, base, commands ? { commands } : {}));
  await cdp('Input.dispatchKeyEvent', Object.assign({ type: 'keyUp' }, base)); await sleep(60);
}
async function typeText(s) { for (const ch of s) { await cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: ch, text: ch, unmodifiedText: ch }); await cdp('Input.dispatchKeyEvent', { type: 'keyUp', key: ch }); } await sleep(60); }
// 在 nocopy.js 之後掛的 window 捕獲監聽：記下每個事件有沒有被擋（defaultPrevented）
const PROBE = `window.__ev = []; if (window.__probe) return 1; window.__probe = 1; ['copy', 'cut', 'paste', 'drop', 'dragstart', 'contextmenu', 'beforeinput', 'keydown'].forEach(t => window.addEventListener(t, e => __ev.push(t + (e.inputType ? '/' + e.inputType : '') + ':' + (e.defaultPrevented ? 'blocked' : 'open')), true)); return 1`;
const CLIP = s => ev(`await navigator.clipboard.writeText(${JSON.stringify(s)}); return 1`), READ = () => ev('return await navigator.clipboard.readText()');
const HOOK = `KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true; return 1`;
const synth = (sel, mk) => ev(`const el = document.querySelector(${JSON.stringify(sel)}); return !el.dispatchEvent(${mk})`);   // true＝被擋
const SY_PASTE = `(() => { const dt = new DataTransfer(); dt.setData('text/plain', 'PASTED'); return new ClipboardEvent('paste', { bubbles: true, cancelable: true, clipboardData: dt }); })()`;

function pages() {
  const out = [], walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const f = path.join(d, e.name), rel = path.relative(SITE, f).split(path.sep);
    if (rel[0] === 'game' && rel[1] === 'scratch-td' && rel.length >= 3 && rel[2] !== 'web') return;
    if (e.isDirectory()) { if (!/^(\.git|node_modules|__pycache__|考卷|scratchpad|test|_demo)$/.test(e.name) && rel.join('/') !== 'game/hero-world/src') walk(f); }
    else if (/\.html$/i.test(e.name)) out.push('/' + rel.join('/'));
  }); walk(SITE); return out.sort();
}

async function run() {
  await cdp('Emulation.setDeviceMetricsOverride', { width: 820, height: 1180, deviceScaleFactor: 1, mobile: false });
  await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  await cdp('Emulation.setFocusEmulationEnabled', { enabled: true });
  await cdp('Browser.grantPermissions', { origin: ORIGIN, permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'] });
  // 1. 每一頁
  const list = LIVE ? ['/index.html', '/geo/unit.html', '/math/balance.html', '/comics/v1e1.html', '/chinese/writing/writing.html', '/account.html', '/game/hero-island/index.html'] : pages();
  const perPage = [];
  for (const p of list) {
    const e0 = errors.length; await go(p);
    const r = await ev(`const st = [...document.querySelectorAll('script[src]')].some(s => /(^|\\/)nocopy\\.js(\\?|$)/.test(s.getAttribute('src'))), b = getComputedStyle(document.body).userSelect,
      i = document.querySelector('input:not([type=hidden]),textarea'); return { st, b, i: i ? getComputedStyle(i).userSelect : 'none-on-page' }`);
    if (!r.st || r.b !== 'none' || !/^(text|none-on-page)$/.test(r.i)) throw new Error(p + ': ' + JSON.stringify(r));
    if (errors.length > e0) perPage.push(p + ' → ' + errors.slice(e0).join(' | '));
  }
  assert(!perPage.length, `${list.length} pages: nocopy.js loaded, body user-select none, inputs user-select text, 0 JS errors` + (perPage.length ? '\n  ' + perPage.join('\n  ') : ''));

  // 2. 英文句型一回（題目文字、字卡重組觸控、打字題）
  await go('/index.html#learn/patterns'); await ev(HOOK); await ev(PROBE);
  await ev(`document.getElementById('pgo').click(); return 1`);
  let chipsDone = false, typedDone = false, copyDone = false;
  for (let k = 0; k < 25 && !(chipsDone && typedDone); k++) {
    for (let w = 0; w < 40 && !(await ev(`return location.hash === '#result' || !!document.querySelector('.qcard') && !!(document.querySelector('.opt:not([disabled])') || document.querySelector('#ans:not([disabled])') || document.querySelector('.pool .chip:not([disabled])'))`)); w++) await sleep(100);
    if (await ev(`return location.hash === '#result'`)) { await go('/index.html#learn/patterns'); await ev(HOOK); await ev(PROBE); await ev(`document.getElementById('pgo').click(); return 1`); continue; }
    const q = await ev(`const TE = window.__TE || (window.__TE = new KE.Engine({ words: DATA_WORDS, phrases: DATA_PHRASES, roots: window.DATA_ROOTS || [], grammar: window.DATA_GRAMMAR || [], patterns: DATA_PATTERNS, textbook: window.DATA_TEXTBOOK || [] }));
      const q = TE.get(document.querySelector('.qcard').dataset.qid); return { a: q.answer, input: q.input, opts: q.options || [] }`);
    if (!copyDone) {   // 題目文字：選起來 → Ctrl+C／execCommand('copy') 都複製不到；copy、cut 事件被擋；右鍵選單被擋；計算樣式不能選字
      await CLIP('SENTINEL'); await ev(PROBE);
      await ev(`const el = document.querySelector('.qcard'); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); return 1`);
      await key('c', 2, ['copy']); await ev(`document.execCommand('copy'); document.execCommand('cut'); return 1`);
      const c = await center('.qcard'); await cdp('Input.dispatchMouseEvent', { type: 'mousePressed', x: c[0], y: c[1], button: 'right', clickCount: 1 }); await cdp('Input.dispatchMouseEvent', { type: 'mouseReleased', x: c[0], y: c[1], button: 'right', clickCount: 1 }); await sleep(80);
      const evs = await ev('return __ev'), clip = await READ(), us = await ev(`return getComputedStyle(document.querySelector('.qcard')).userSelect`);
      assert(clip === 'SENTINEL' && evs.includes('keydown:blocked') && evs.includes('copy:blocked') && evs.includes('cut:blocked') && evs.includes('contextmenu:blocked') && !evs.some(x => /:open$/.test(x) && /^(copy|cut|contextmenu)/.test(x)) && us === 'none',
        'question text: Ctrl+C / execCommand copy+cut copy nothing (clipboard still SENTINEL), copy/cut/contextmenu blocked, user-select none: ' + evs.join(','));
      assert(await synth('.qcard', `new ClipboardEvent('copy', { bubbles: true, cancelable: true })`) && await synth('.qcard', `new DragEvent('dragstart', { bubbles: true, cancelable: true })`), 'question text: copy / dragstart events cancelled');
      await ev('getSelection().removeAllRanges(); return 1'); copyDone = true;
    }
    if (q.input === 'chips' && !chipsDone) {   // 字卡重組：真的用觸控點字卡（iPad）
      const words = q.a.trim().split(/\s+/), used = new Set();
      for (const wd of words) { const i = await ev(`const pool = [...document.querySelectorAll('.pool .chip')]; return pool.findIndex((x, k) => !${JSON.stringify([...used])}.includes(k) && x.textContent === ${JSON.stringify(wd)})`); used.add(i); const c = await center('.pool .chip', i); await touchTap(c[0], c[1]); }
      const c = await center('#ok'); await touchTap(c[0], c[1]);
      assert(await ev(`return /答對了/.test(document.getElementById('fb').textContent)`), `reorder (chips) answered by touch taps: "${q.a}"`);
      chipsDone = true;
    } else if (q.input === 'type' && !typedDone) {   // 打字題：一個鍵一個鍵打得進去；Ctrl+V、paste、beforeinput、drop 都被擋
      const c = await center('#ans'); await touchTap(c[0], c[1]); await ev(`document.getElementById('ans').focus(); return 1`);
      await typeText(q.a);
      assert(await ev(`return document.getElementById('ans').value`) === q.a && await ev(`return getComputedStyle(document.getElementById('ans')).userSelect`) === 'text', `typed answer key by key into #ans: "${q.a}"`);
      await CLIP(' PASTED'); await ev(PROBE); await key('v', 2, ['paste']); await key('v', 4, ['paste']);
      const v = await ev(`return document.getElementById('ans').value`), evs = await ev('return __ev');
      assert(v === q.a && evs.filter(x => x === 'keydown:blocked').length === 2, 'Ctrl+V / ⌘+V into #ans pastes nothing: ' + evs.join(','));
      assert(await synth('#ans', SY_PASTE) && await synth('#ans', `new InputEvent('beforeinput', { bubbles: true, cancelable: true, inputType: 'insertFromPaste', data: 'x' })`) && await synth('#ans', `new InputEvent('beforeinput', { bubbles: true, cancelable: true, inputType: 'insertFromDrop', data: 'x' })`) && await synth('#ans', `new DragEvent('drop', { bubbles: true, cancelable: true })`),
        '#ans: paste / beforeinput insertFromPaste / insertFromDrop / drop cancelled');
      assert(!(await synth('#ans', `new InputEvent('beforeinput', { bubbles: true, cancelable: true, inputType: 'insertText', data: 'x' })`)), '#ans: normal typing (beforeinput insertText) not cancelled');
      await ev(`document.getElementById('ok').click(); return 1`);
      assert(await ev(`return /答對了/.test(document.getElementById('fb').textContent)`), 'typed question answered right');
      typedDone = true;
    } else {
      await ev(`const a = ${JSON.stringify(q.a)}, D = document, ans = D.getElementById('ans'); if (ans) { ans.value = a; D.getElementById('ok').click(); return 1 }
        const pool = [...D.querySelectorAll('.pool .chip')]; if (pool.length) { const u = new Set(); a.trim().split(/\\s+/).forEach(w => { const i = pool.findIndex((x, k) => !u.has(k) && x.textContent === w); u.add(i); pool[i].click(); }); D.getElementById('ok').click(); return 1 }
        const o = [...D.querySelectorAll('.opt')].find(x => x.dataset.v === a); if (o) o.click(); else { const s = D.getElementById('skip'); if (s) s.click(); } return 1`);
    }
    for (let w = 0; w < 30 && !(await ev(`return !!document.getElementById('next')`)); w++) await sleep(100);
    await ev(`const n = document.getElementById('next'); if (n) n.click(); return 1`);
  }
  assert(chipsDone && typedDone && copyDone, 'pattern round covered question text, a reorder question and a typed question');

  // 3. 例外：clipboard API、data-copy-ok 暫存 textarea、天平匯入題目代碼（data-paste-ok）
  await go('/math/balance.html'); await ev(PROBE);
  await CLIP('x+5=12');
  assert(await READ() === 'x+5=12', 'navigator.clipboard.writeText still works (複製同步碼／題目代碼按鈕)');
  await ev(`const ta = document.createElement('textarea'); ta.value = 'https://yoda-wcyc.github.io/Kids-Station/'; ta.setAttribute('readonly', ''); ta.setAttribute('data-copy-ok', ''); document.body.appendChild(ta); ta.select(); window.__ok = document.execCommand('copy'); ta.remove(); return 1`);
  assert(await READ() === 'https://yoda-wcyc.github.io/Kids-Station/', "share fallback: execCommand('copy') from a data-copy-ok textarea copies the URL");
  await CLIP('(x+3)-2=10'); await ev(`const t = document.getElementById('code-in'); t.closest('details') && (t.closest('details').open = true); t.value = ''; return 1`);
  const ci = await center('#code-in'); await touchTap(ci[0], ci[1]); await ev(`document.getElementById('code-in').focus(); return 1`);
  await key('v', 2, ['paste']);
  assert(await ev(`return document.getElementById('code-in').value`) === '(x+3)-2=10', 'balance 貼上題目代碼 (data-paste-ok): Ctrl+V pastes');
  const other = await ev(`const i = [...document.querySelectorAll('input[type=text]:not([readonly]):not([hidden]),input:not([type]):not([readonly]):not([hidden])')].find(x => x.offsetParent); return i ? i.id : ''`);
  if (other) {
    await ev(`const i = document.getElementById(${JSON.stringify(other)}); i.value = ''; i.focus(); return 1`); await key('v', 2, ['paste']);
    assert(await ev(`return document.getElementById(${JSON.stringify(other)}).value`) === '', `balance #${other} (no data-paste-ok): Ctrl+V pastes nothing`);
  }
}

(async () => {
  if (!LIVE) await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'nc-chrome-'));
  const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PD}`, `--user-data-dir=${prof}`, '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--mute-audio', 'about:blank'], { stdio: 'ignore' });
  let code = 0;
  try {
    let tgt; for (let i = 0; i < 60 && !tgt; i++) { try { tgt = (await (await fetch(`http://127.0.0.1:${PD}/json/list`)).json()).find(t => t.type === 'page'); } catch (e) { } if (!tgt) await sleep(250); }
    const ver = await (await fetch(`http://127.0.0.1:${PD}/json/version`)).json();
    ws = new WebSocket(tgt.webSocketDebuggerUrl); await new Promise(r => ws.addEventListener('open', r));
    const bws = new WebSocket(ver.webSocketDebuggerUrl); await new Promise(r => bws.addEventListener('open', r));   // Browser.grantPermissions 要走瀏覽器層級的連線
    const cdpPage = cdp; cdp = (method, params = {}) => { if (!method.startsWith('Browser.')) return cdpPage(method, params); const id = ++seq; bws.send(JSON.stringify({ id, method, params })); return new Promise((ok, no) => pend.set(id, { ok, no, method })); };
    const onMsg = m => {
      const d = JSON.parse(m.data);
      if (d.id && pend.has(d.id)) { const p = pend.get(d.id); pend.delete(d.id); d.error ? p.no(new Error(p.method + ': ' + d.error.message)) : p.ok(d.result); }
      else if (d.method === 'Runtime.exceptionThrown') errors.push('exception: ' + JSON.stringify(d.params.exceptionDetails).slice(0, 400));
      else if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errors.push('console.error: ' + JSON.stringify(d.params.args).slice(0, 300));
      else if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error' && !/BLOCKED_BY_CLIENT/.test(d.params.entry.text)) errors.push('log: ' + d.params.entry.text + ' ' + (d.params.entry.url || ''));
      else if (d.method === 'Page.javascriptDialogOpening') cdp('Page.handleJavaScriptDialog', { accept: true }).catch(() => { });
      else if (d.method === 'Fetch.requestPaused') { const u = d.params.request.url; if (u.startsWith(ORIGIN) || /^(data|blob):|^https:\/\/cdn\.jsdelivr\.net\/npm\/scratchblocks@/.test(u)) cdp('Fetch.continueRequest', { requestId: d.params.requestId }).catch(() => { }); else cdp('Fetch.failRequest', { requestId: d.params.requestId, errorReason: 'BlockedByClient' }).catch(() => { }); }
    };
    ws.addEventListener('message', onMsg); bws.addEventListener('message', onMsg);
    await cdp('Runtime.enable'); await cdp('Page.enable'); await cdp('Log.enable');
    await cdp('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
    await run();
    assert(errors.length === 0, 'JS errors: ' + errors.length);
    console.log(log.join('\n') + '\nPASS nocopy-browser' + (LIVE ? ' (live ' + LIVE + ')' : ''));
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); if (!LIVE) srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
