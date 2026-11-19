// test/sync-progress-browser.js — 兩台裝置跨裝置進度一致（2026-11-19）：headless Chrome（CDP）兩個 browser context＝兩台 iPad（820×1180）
// 用法：node test/sync-progress-browser.js [網站資料夾，預設＝正本] [截圖資料夾，預設不存]
// 本機起一個伺服器：靜態檔＋假 kids-sync（/api/sync，介面照 _deploy/kids-sync/api/sync.js）＋假會員後端（/gas）；不是 127.0.0.1 的請求一律擋掉。
//   A：完成一個單元（五下單元一）、做完今日清單一項（地理一組）、看完一話漫畫（漫畫頁）、在沒載 sync.js 的頁面改進度再 history.back 回首頁
//   B：首頁一直開著 → 回到前景（visibilitychange）→ 課程地圖、科目卡、今日清單、學習島、漫畫目錄都要跟 A 一樣；帳號頁「立刻上傳並同步」
//   失敗：雲端 500 → 雲朵 ⚠️＋原因；恢復後 ☁️。全程 0 個 JS 錯誤。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(process.argv[2] || path.join(__dirname, '..')), SHOTS = process.argv[3] ? path.resolve(process.argv[3]) : '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.SP_PS || 8971, PD = +process.env.SP_PD || 9497;
const ORIGIN = `http://127.0.0.1:${PS}`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
// ---------- 假 kids-sync ----------
const SYNC = { docs: new Map([['ABCDEFGH', { text: JSON.stringify({ v: 9, log: [] }), etag: '"v0"' }]]), ver: 0, fail: 0, puts: 0, keep: 0 };
function syncApi(req, res, body) {
  const u = new URL(req.url, ORIGIN), code = (u.searchParams.get('code') || '').replace('-', ''), d = SYNC.docs.get(code);
  const send = (st, obj, h) => { res.writeHead(st, Object.assign({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }, h)); res.end(obj == null ? '' : JSON.stringify(obj)); };
  if (req.method === 'POST') return send(201, { ok: true, code: 'ABCD-EFGH' });
  if (!d) return send(404, { ok: false });
  if (req.method === 'GET') { if (u.searchParams.get('since') === d.etag) return send(204, null, { 'X-Sync-Etag': d.etag }); res.writeHead(200, { 'Content-Type': 'application/json', 'X-Sync-Etag': d.etag, 'Cache-Control': 'no-store' }); return res.end(d.text); }
  if (req.method === 'PUT') {
    if (SYNC.fail) return send(SYNC.fail, { ok: false });
    if (req.headers['if-match'] && req.headers['if-match'] !== d.etag) return send(412, { ok: false });
    const etag = '"v' + (++SYNC.ver) + '"'; SYNC.docs.set(code, { text: body, etag }); SYNC.puts++; return send(200, { ok: true }, { 'X-Sync-Etag': etag });
  }
  send(405, {});
}
// ---------- 假會員後端（只回這個測試用得到的）----------
function gasApi(res, body) {
  let b = {}; try { b = JSON.parse(body); } catch (e) { }
  const R = { getSyncCode: { sync_code: 'ABCD-EFGH' }, setSyncCode: { sync_code: b.sync_code }, memberProfile: { member: { child_nickname: '小測', pub_id: 'K001' } }, getCoins: { balance: 0, streak_days: 0, leave_cards: 1, today: { minutes: 0 }, recent: [] }, startActivity: { allowed: true } }[b.action] || {};
  res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(Object.assign({ ok: true }, R)));
}
const srv = http.createServer((req, res) => {
  const chunks = []; req.on('data', c => chunks.push(c)); req.on('end', () => {
    const body = Buffer.concat(chunks).toString('utf8'), p0 = new URL(req.url, ORIGIN).pathname;
    if (p0 === '/api/sync') return syncApi(req, res, body);
    if (p0 === '/gas') return gasApi(res, body);
    let p = decodeURIComponent(p0); if (p.endsWith('/')) p += 'index.html';
    if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
    const f = path.join(SITE, p); if (!f.startsWith(SITE)) { res.writeHead(403); return res.end(); }
    fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
  });
});
// ---------- CDP（瀏覽器層，一個 session 一台裝置）----------
let ws, seq = 0; const pend = new Map(), log = [], dev = {};
function cdp(method, params = {}, sessionId) { const id = ++seq; ws.send(JSON.stringify(Object.assign({ id, method, params }, sessionId ? { sessionId } : {}))); return new Promise((ok, no) => pend.set(id, { ok, no, method })); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
const INJECT = `window.__KIDS_TEST_SYNC_URL = '${ORIGIN}/api/sync'; window.__KIDS_TEST_GAS_URL = '${ORIGIN}/gas';`;
async function device(name) {
  const { browserContextId } = await cdp('Target.createBrowserContext');
  const { targetId } = await cdp('Target.createTarget', { url: 'about:blank', browserContextId });
  const { sessionId } = await cdp('Target.attachToTarget', { targetId, flatten: true });
  const D = dev[sessionId] = { name, sessionId, errors: [] };
  const c = (m, p) => cdp(m, p, sessionId);
  await c('Runtime.enable'); await c('Page.enable'); await c('Log.enable'); await c('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
  await c('Page.addScriptToEvaluateOnNewDocument', { source: INJECT });
  await c('Emulation.setDeviceMetricsOverride', { width: 820, height: 1180, deviceScaleFactor: 1, mobile: false });
  await c('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  D.ev = async expr => { const r = await c('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error(name + ' eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 500)); return r.result.value; };
  D.wait = async () => { for (let i = 0; i < 80; i++) { try { if ((await D.ev('return document.readyState')) === 'complete') break; } catch (e) { } await sleep(100); } await sleep(400); };
  D.go = async url => { await c('Page.navigate', { url: ORIGIN + url }); await sleep(300); await D.wait(); };
  D.shot = async n => { if (!SHOTS) return; const r = await c('Page.captureScreenshot', { format: 'png' }); fs.mkdirSync(SHOTS, { recursive: true }); fs.writeFileSync(path.join(SHOTS, n + '.png'), Buffer.from(r.data, 'base64')); log.push('📸 ' + n + '.png'); };
  return D;
}
// 登入（假票，只在本機）＋已綁定帳號的同步碼
const tok = 'eyJhbGciOiJub25lIn0.' + Buffer.from(JSON.stringify({ sub: 'K001', exp: Math.floor(Date.now() / 1000) + 90 * 864e2 })).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_') + '.x';
const LOGIN = dv => `localStorage.clear(); localStorage.setItem('kids_jwt', ${JSON.stringify(tok)}); localStorage.setItem('kids_member', JSON.stringify({ child_nickname: '小測', pub_id: 'K001', exp: ${Math.floor(Date.now() / 1000) + 90 * 864e2} }));
  localStorage.setItem('ke_sync', JSON.stringify({ code: 'ABCD-EFGH', acct: 'K001' })); localStorage.setItem('ke_sync_ctr', JSON.stringify({ dev: '${dv}', ctr: {} })); localStorage.setItem('kids_island_ui', JSON.stringify({ tour: 1 })); return 1`;
// 畫面上看得到的進度（每頁各抓一份，A、B 比對）
const HOME = `const T = KidsDaily.today(), S = KidsIsland.state().D, items = [...document.querySelectorAll('#isl-items a')].filter(a => /✓/.test(a.textContent)).map(a => a.textContent.replace(/\\s+/g, ' ').trim()).sort();
  return { today: T.doneN + '/' + T.total + ' ' + T.rows.map(r => r.key + (r.done ? '✓' : r.n + '/' + r.goal) + (r.key === 'h' ? '→' + r.href : '')).join(' '), quests: JSON.stringify(S.Q), growth: JSON.stringify(S.g), list: items.join(' | ') }`;
const MAP = `return { sum: document.getElementById('sum-t').textContent, subj: [...document.querySelectorAll('section.subj[id^="subj-"]')].map(s => s.id + ':' + s.dataset.done + '/' + s.dataset.total).join(' '),
  cells: [...document.querySelectorAll('a.mu')].filter(a => a.dataset.status !== 'todo').map(a => a.dataset.key + '=' + a.dataset.status + ' ' + a.querySelector('.mu-t').textContent).join(' | ') }`;
const TILES = `return [...document.querySelectorAll('#subject a.tile')].filter(a => /g5b1$|anim$|m1$/.test(a.getAttribute('href'))).map(a => a.getAttribute('href') + ' ' + a.textContent.replace(/\\s+/g, ' ').trim()).join(' | ')`;
const COMICS = `return [...document.querySelectorAll('a.cm-ep-card')].filter(a => /✓/.test(a.textContent)).map(a => a.getAttribute('href') + ' ' + a.querySelector('b').textContent).join(' | ') || '—'`;
const docNow = () => JSON.parse(SYNC.docs.get('ABCDEFGH').text);

async function run() {
  const A = await device('A'), B = await device('B');
  for (const [D, dv] of [[A, 'dA'], [B, 'dB']]) { await D.go('/index.html'); await D.ev(LOGIN(dv)); }
  await B.go('/index.html'); await sleep(800);                        // B 的首頁一直開著（之後只「回到前景」）
  await A.go('/index.html'); await sleep(800);
  assert(await A.ev(`return JSON.parse(localStorage.getItem('ke_sync')).code === 'ABCD-EFGH'`), 'A 登入、綁著帳號的同步碼');

  // ---- A：完成一個單元（五下單元一：練習＋測驗）----
  await A.go('/math/grade.html?u=g5b1');
  await A.ev(`KidsDone.record('mg', 'g5b1q', 90); KidsDone.record('mg', 'g5b1t', 85); return 1`); await sleep(2200);
  // ---- A：今日清單「地理」一組 ----
  await A.go('/geo/unit.html?u=m1');
  await A.ev(`KidsDone.record('geo', 'm1p1', 90); KidsDaily.finish('geo'); return 1`); await sleep(2200);
  // ---- A：看完一話漫畫（comic.js epDone 做的三件事），再 history.back 回首頁 ----
  await A.go('/index.html'); await A.go('/comics/v1e1.html');
  await A.ev(`KidsDaily.finish('comic'); KidsLock.bump('v1e1'); localStorage.setItem('kids_comic', JSON.stringify({ seen: { v1e1: Date.now() }, next: 'v1e2' })); return 1`); await sleep(2200);
  assert(/C=1/.test((docNow().pg || {}).f || ''), '漫畫頁自己就把「看過第 1 話」推上去了（漫畫頁也載 sync.js）: ' + JSON.stringify(docNow().pg));
  await A.ev(`history.back(); return 1`); await sleep(600); await A.wait(); await sleep(1200);
  assert(await A.ev(`return location.pathname === '/index.html'`), 'A 用 history.back 回到首頁');
  // ---- A：在沒載 sync.js 的頁面（漫畫目錄）改進度，history.back 回首頁 → 首頁要推上去 ----
  await A.go('/comics/index.html');
  await A.ev(`const a = JSON.parse(localStorage.getItem('kids_anim') || '{}'); a.seen = Object.assign({}, a.seen, { D: Date.now() }); localStorage.setItem('kids_anim', JSON.stringify(a)); return 1`);
  const puts0 = SYNC.puts;
  await A.ev(`history.back(); return 1`); await sleep(600); await A.wait(); await sleep(1500);
  assert(SYNC.puts > puts0 && /A=8/.test(docNow().pg.f), '回首頁（history.back／bfcache）就把別頁改的進度推上去: ' + docNow().pg.f);
  await A.shot('A-1-home');

  // ---- B：首頁一直開著 → 回到前景 ----
  await B.ev(`Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); return 1`); await sleep(200);
  await B.ev(`Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); return 1`); await sleep(2500);
  const hA = await A.ev(HOME), hB = await B.ev(HOME);
  assert(JSON.stringify(hA) === JSON.stringify(hB), 'B 回到前景：首頁今日清單、學習島任務旗與成長、清單 ✓ 都跟 A 一樣\n   A=' + JSON.stringify(hA) + '\n   B=' + JSON.stringify(hB));
  assert(/g✓/.test(hA.today) && /h✓/.test(hA.today) && /comics\/v1e2\.html/.test(hA.today), '（今日清單：地理 ✓、歷史 ✓、下一話＝第 2 話）' + hA.today);
  await B.shot('B-1-home-after-foreground');
  // 課程地圖
  await A.go('/map.html'); await B.go('/map.html');
  const mA = await A.ev(MAP), mB = await B.ev(MAP);
  assert(JSON.stringify(mA) === JSON.stringify(mB) && /mg:g5b1=done/.test(mA.cells), '課程地圖一樣（五下單元一 ✅ ✓1、地理 m1 進行中）\n   ' + JSON.stringify(mB));
  await B.shot('B-2-map');
  // 科目卡（數學：五下單元一 ✓1、動畫教學 ✓A…；地理 m1）
  const tiles = async D => { await D.go('/index.html#s/math'); await sleep(400); const t1 = await D.ev(TILES); await D.go('/index.html#s/geo'); await sleep(400); return t1 + ' || ' + await D.ev(TILES); };
  const tA = await tiles(A), tB = await tiles(B);
  assert(tA === tB && /已完成/.test(tA) && /✓D/.test(tA), '科目卡一樣（已完成／✓1／動畫 ✓D）\n   ' + tB);
  await B.go('/index.html#s/math'); await sleep(400); await B.ev(`const a = [...document.querySelectorAll('#subject a.tile')].find(a => /g5b1$/.test(a.getAttribute('href'))); a.closest('details').open = true; a.scrollIntoView({ block: 'center' }); return 1`); await sleep(200); await B.shot('B-3-math-tiles');
  // 漫畫目錄
  await A.go('/comics/index.html'); await B.go('/comics/index.html');
  const cA = await A.ev(COMICS), cB = await B.ev(COMICS);
  assert(cA === cB && /v1e1\.html .*✓1/.test(cA), '漫畫目錄一樣（第 1 話 ✓1）: ' + cB);
  await B.shot('B-4-comics');

  // ---- B：帳號頁「立刻上傳並同步」＋家長比對欄位 ----
  await B.go('/account.html'); await sleep(600);
  await B.ev(`document.getElementById('s-now').click(); return 1`); await sleep(2000);
  const acc = await B.ev(`return ['s-status', 's-up', 's-down', 's-pend', 's-tail', 's-app', 's-local'].map(id => id + '=' + document.getElementById(id).textContent)`);
  assert(acc.some(x => x === 's-tail=…GH') && acc.some(x => x === 's-pend=沒有') && acc.some(x => /^s-down=\d/.test(x)) && acc.some(x => /^s-app=Safari/.test(x)), '帳號頁：同步碼後兩碼、沒有待送、上次下載成功時間、Safari／主畫面 App: ' + acc.join(' ; '));
  await B.ev(`document.getElementById('sync').scrollIntoView(); return 1`); await sleep(200); await B.shot('B-5-account');

  // ---- 失敗時的雲朵：雲端 500 → ⚠️＋原因；恢復 → ☁️ ----
  await B.go('/index.html'); await sleep(800);
  SYNC.fail = 500;
  await B.ev(`const w = JSON.parse(localStorage.getItem('kids_word_lv') || '{}'); w.gw = { 1: 2 }; localStorage.setItem('kids_word_lv', JSON.stringify(w)); KESync.touch(); return 1`); await sleep(2400);
  const bad = await B.ev(`const c = document.querySelector('.ks-cloud'); return c ? { t: c.textContent, a: c.getAttribute('aria-label') } : null`);
  assert(bad && /⚠️/.test(bad.t) && /500/.test(bad.a), '雲端 500：雲朵 ⚠️ 沒同步＋原因 ' + JSON.stringify(bad));
  await B.ev(`document.querySelector('.ks-cloud').click(); return 1`); await sleep(150); await B.shot('B-6-cloud-error');
  SYNC.fail = 0; await B.ev(`await KESync.syncNow('full'); return 1`); await sleep(300);
  const good = await B.ev(`const c = document.querySelector('.ks-cloud'); return c ? c.textContent : ''`);
  assert(/☁️/.test(good) && docNow().pg.v.indexOf('Vgw') >= 0, '恢復後補傳成功：☁️ ' + good);
}

(async () => {
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'sp-chrome-'));
  const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PD}`, `--user-data-dir=${prof}`, '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--mute-audio', 'about:blank'], { stdio: 'ignore' });
  let code = 0;
  try {
    let ver; for (let i = 0; i < 60 && !ver; i++) { try { ver = await (await fetch(`http://127.0.0.1:${PD}/json/version`)).json(); } catch (e) { } if (!ver) await sleep(250); }
    ws = new WebSocket(ver.webSocketDebuggerUrl); await new Promise(r => ws.addEventListener('open', r));
    ws.addEventListener('message', m => {
      const d = JSON.parse(m.data), D = d.sessionId && dev[d.sessionId], E = D ? D.errors : [];
      if (d.id && pend.has(d.id)) { const p = pend.get(d.id); pend.delete(d.id); d.error ? p.no(new Error(p.method + ': ' + d.error.message)) : p.ok(d.result); return; }
      if (d.method === 'Runtime.exceptionThrown') E.push('exception: ' + JSON.stringify(d.params.exceptionDetails).slice(0, 400));
      else if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') E.push('console.error: ' + JSON.stringify(d.params.args).slice(0, 300));
      else if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error' && !/BLOCKED_BY_CLIENT/.test(d.params.entry.text) && !/\/favicon\.ico$/.test(d.params.entry.url || '') && !/\/api\/sync\?.*(500|Internal)|status of 500/.test(d.params.entry.text + ' ' + (d.params.entry.url || ''))) E.push('log: ' + d.params.entry.text + ' ' + (d.params.entry.url || ''));
      else if (d.method === 'Page.javascriptDialogOpening') cdp('Page.handleJavaScriptDialog', { accept: true }, d.sessionId).catch(() => { });
      else if (d.method === 'Fetch.requestPaused') { const u = d.params.request.url; if (u.startsWith(ORIGIN) || /^(data|blob):/.test(u)) cdp('Fetch.continueRequest', { requestId: d.params.requestId }, d.sessionId).catch(() => { }); else cdp('Fetch.failRequest', { requestId: d.params.requestId, errorReason: 'BlockedByClient' }, d.sessionId).catch(() => { }); }
    });
    await run();
    const errs = Object.values(dev).flatMap(D => D.errors.map(e => D.name + ' ' + e));
    assert(errs.length === 0, 'JS 錯誤 0 個' + (errs.length ? '：\n' + errs.join('\n') : ''));
    console.log(log.join('\n') + '\nPASS sync-progress-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', Object.values(dev).flatMap(D => D.errors.map(x => D.name + ' ' + x)).join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
