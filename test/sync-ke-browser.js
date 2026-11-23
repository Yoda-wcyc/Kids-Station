// test/sync-ke-browser.js — 英文同步壓縮（2026-11-23）的新舊版兩台：headless Chrome（CDP）兩個 browser context＝兩台 iPad
// 用法：node test/sync-ke-browser.js [網站資料夾，預設＝正本]
// O＝舊版快取頁（/old/ 底下：整站照正本，只有 syncmerge.js 換成凍結的 2026-11-21 線上版 test/fixtures/syncmerge-old-1121.js）；N＝新版。
//   伺服器上一開始是升版前（舊寫法）的文件。兩台各自學會、取消學會、答題（同一題答對 2 次）、答錯進錯題庫、N 有壓縮過的舊紀錄（ke_agg）→ 互相同步幾輪：
//   兩台的「已學會」、錯題庫、學過 2 次的題、家長頁學會紀錄筆數都一樣；N 上傳的文件有 ke；都同步過之後不會一直來回 PUT；全程 0 個 JS 錯誤。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(process.argv[2] || path.join(__dirname, '..')), OLD_SM = path.join(__dirname, 'fixtures', 'syncmerge-old-1121.js');
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.SK_PS || 8983, PD = +process.env.SK_PD || 9513;
const ORIGIN = `http://127.0.0.1:${PS}`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
const SM = require(path.join(SITE, 'syncmerge.js')), OSM = require(OLD_SM);
const T = Date.now() - 30 * 864e5, iso = t => new Date(t).toISOString();
// 升版前的文件：以前學會 cat、old，舊紀錄裡 w:old:type 答對 2 次
const PRE = OSM.normalize({ cut: T, log: [], agg: { 'w:old:type': { n: 3, k: 2, fc: T - 9 }, 'w:old:spell': { n: 1, k: 1, fc: T - 9 } }, learned: { 'word:cat': { at: iso(T - 5e6), score: '5/5' }, 'word:old': { at: iso(T - 4e6), score: '4/5' } } });
const SYNC = { docs: new Map([['ABCDEFGH', { text: JSON.stringify(PRE), etag: '"v0"' }]]), ver: 0, puts: 0, by: [] };
function syncApi(req, res, body) {
  const u = new URL(req.url, ORIGIN), code = (u.searchParams.get('code') || '').replace('-', ''), d = SYNC.docs.get(code);
  const send = (st, obj, h) => { res.writeHead(st, Object.assign({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }, h)); res.end(obj == null ? '' : JSON.stringify(obj)); };
  if (req.method === 'POST') return send(201, { ok: true, code: 'ABCD-EFGH' });
  if (!d) return send(404, { ok: false });
  if (req.method === 'GET') { if (u.searchParams.get('since') === d.etag) return send(204, null, { 'X-Sync-Etag': d.etag }); res.writeHead(200, { 'Content-Type': 'application/json', 'X-Sync-Etag': d.etag, 'Cache-Control': 'no-store' }); return res.end(d.text); }
  if (req.method === 'PUT') {
    if (req.headers['if-match'] && req.headers['if-match'] !== d.etag) return send(412, { ok: false });
    if (Buffer.byteLength(body) > 1000 * 1000) return send(413, { ok: false });
    const etag = '"v' + (++SYNC.ver) + '"'; SYNC.docs.set(code, { text: body, etag }); SYNC.puts++; SYNC.by.push(/"ke":/.test(body) ? 'N' : 'O'); return send(200, { ok: true }, { 'X-Sync-Etag': etag });
  }
  send(405, {});
}
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
    let p = decodeURIComponent(p0), old = false; if (p.indexOf('/old/') === 0) { old = true; p = p.slice(4); } if (p.endsWith('/')) p += 'index.html';
    if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
    const f = old && p === '/syncmerge.js' ? OLD_SM : path.join(SITE, p); if (f !== OLD_SM && !f.startsWith(SITE)) { res.writeHead(403); return res.end(); }
    fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
  });
});
let ws, seq = 0; const pend = new Map(), log = [], dev = {};
function cdp(method, params = {}, sessionId) { const id = ++seq; ws.send(JSON.stringify(Object.assign({ id, method, params }, sessionId ? { sessionId } : {}))); return new Promise((ok, no) => pend.set(id, { ok, no, method })); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
const INJECT = `window.__KIDS_TEST_SYNC_URL = '${ORIGIN}/api/sync'; window.__KIDS_TEST_GAS_URL = '${ORIGIN}/gas';`;
async function device(name, base) {
  const { browserContextId } = await cdp('Target.createBrowserContext');
  const { targetId } = await cdp('Target.createTarget', { url: 'about:blank', browserContextId });
  const { sessionId } = await cdp('Target.attachToTarget', { targetId, flatten: true });
  const D = dev[sessionId] = { name, sessionId, errors: [] };
  const c = (m, p) => cdp(m, p, sessionId);
  await c('Runtime.enable'); await c('Page.enable'); await c('Log.enable'); await c('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
  await c('Page.addScriptToEvaluateOnNewDocument', { source: INJECT });
  await c('Emulation.setDeviceMetricsOverride', { width: 820, height: 1180, deviceScaleFactor: 1, mobile: false });
  D.ev = async expr => { const r = await c('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error(name + ' eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 500)); return r.result.value; };
  D.wait = async () => { for (let i = 0; i < 80; i++) { try { if ((await D.ev('return document.readyState')) === 'complete') break; } catch (e) { } await sleep(100); } await sleep(400); };
  D.go = async url => { await c('Page.navigate', { url: ORIGIN + base + url }); await sleep(300); await D.wait(); };
  return D;
}
const tok = 'eyJhbGciOiJub25lIn0.' + Buffer.from(JSON.stringify({ sub: 'K001', exp: Math.floor(Date.now() / 1000) + 90 * 864e2 })).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_') + '.x';
const LOGIN = dv => `localStorage.clear(); localStorage.setItem('kids_jwt', ${JSON.stringify(tok)}); localStorage.setItem('kids_member', JSON.stringify({ child_nickname: '小測', pub_id: 'K001', exp: ${Math.floor(Date.now() / 1000) + 90 * 864e2} }));
  localStorage.setItem('ke_sync', JSON.stringify({ code: 'ABCD-EFGH', acct: 'K001' })); localStorage.setItem('ke_sync_ctr', JSON.stringify({ dev: '${dv}', ctr: {} })); localStorage.setItem('kids_island_ui', JSON.stringify({ tour: 1 })); return 1`;
// 跟 app.js 一樣寫本機（save → KESync.touch）：學會／取消、答題、錯題
const ACT = (learn, unlearn, ids, wrong) => `const ld = k => JSON.parse(localStorage.getItem(k) || 'null'), SMx = KESyncMerge, now = Date.now();
  const L = ld('ke_learned') || {}; ${JSON.stringify(learn)}.forEach(k => { L[k] = { at: new Date(SMx.stamp(0, now)).toISOString(), score: '5/5' }; });
  ${JSON.stringify(unlearn)}.forEach(k => { const r = L[k] || {}; L[k] = { removedAt: new Date(SMx.stamp(Math.max(Date.parse(r.at) || 0, Date.parse(r.removedAt) || 0), now)).toISOString() }; });
  localStorage.setItem('ke_learned', JSON.stringify(L));
  const log = ld('ke_log') || []; ${JSON.stringify(ids)}.forEach((id, i) => { const e = { t: now + i, id, m: 'words', k: 'words:x', y: 'zh2en-type', ok: 1, a: 'x' + i }; e.r = SMx.rid(e); log.push(e); });
  const m = ld('ke_mistakes') || {}; ${JSON.stringify(wrong)}.forEach((id, i) => { const e = { t: now + 50 + i, id, m: 'words', k: 'words:x', y: 'zh2en-type', ok: 0, a: 'no' }; e.r = SMx.rid(e); log.push(e); m[id] = { c: 0, w: 1, t: now, u: now + 50 + i }; });
  localStorage.setItem('ke_log', JSON.stringify(log)); localStorage.setItem('ke_mistakes', JSON.stringify(m)); KEApp.reloadData(); KESync.touch(); return 1`;
// 兩台要一樣的東西：已學會、錯題庫（沒畢業的）、學過 2 次的題、家長頁「學會紀錄（N 項」
const VIEW = `const ld = k => JSON.parse(localStorage.getItem(k) || 'null'), L = ld('ke_learned') || {}, M = ld('ke_mistakes') || {}, A = (ld('ke_agg') || {}).agg || {};
  const two = [...KidsDaily._core.okCounts(ld('ke_log') || [], A)].filter(x => x[1] >= 2).map(x => x[0]).sort();
  location.hash = '#parent'; await new Promise(r => setTimeout(r, 300)); const h2 = [...document.querySelectorAll('h2')].map(h => h.textContent).find(t => /學會紀錄/.test(t)) || '';
  return { learned: Object.keys(L).filter(k => L[k] && L[k].at).sort().join(), removed: Object.keys(L).filter(k => L[k] && L[k].removedAt).sort().join(), mistakes: Object.keys(M).filter(k => !M[k].d).sort().join(), two: two.join(), parent: h2 }`;
const docNow = () => JSON.parse(SYNC.docs.get('ABCDEFGH').text);
const full = D => D.ev(`await KESync.syncNow('full'); return 1`);

async function run() {
  const O = await device('O(舊版)', '/old'), N = await device('N(新版)', '');
  for (const [D, dv] of [[O, 'dO'], [N, 'dN']]) { await D.go('/index.html'); await D.ev(LOGIN(dv)); await D.go('/index.html'); await sleep(1200); }
  assert(await O.ev(`return typeof KESyncMerge.packDoc === 'undefined'`) && await N.ev(`return typeof KESyncMerge.packDoc === 'function'`), 'O 跑的是凍結的舊版 syncmerge.js、N 是新版');
  // N：本機有壓縮過的舊紀錄（w:big:type 答對 3 次，只在 ke_agg）
  await N.ev(`const a = JSON.parse(localStorage.getItem('ke_agg') || '{}'); a.agg = Object.assign({}, a.agg, { 'w:big:type': { n: 4, k: 3, fc: ${T} } }); a.cut = Math.max(a.cut || 0, ${T}); localStorage.setItem('ke_agg', JSON.stringify(a)); KEApp.reloadData(); return 1`);
  // N：學會 dog、取消 cat、w:dog:type 答對 2 次、w:dog:spell 答錯
  await N.ev(ACT(['word:dog'], ['word:cat'], ['w:dog:type', 'w:dog:type', 'w:dog:listen'], ['w:dog:spell'])); await sleep(2500);
  const d1 = docNow();
  assert(d1.ke && d1.ke.a && d1.ke.l && d1.ke.o > 0 && d1.learned['word:dog'] && d1.learned['word:cat'].removedAt, 'N 上傳：有 ke（壓縮的 agg、learned）＋ ke.o（看過舊版的文件），14 天內也整份寫一份舊寫法: ' + JSON.stringify(Object.keys(d1.ke)));
  // O：學會 fish、w:fish:type 答對 2 次、w:fish:spell 答錯
  await O.ev(ACT(['word:fish'], [], ['w:fish:type', 'w:fish:type'], ['w:fish:spell'])); await sleep(2500);
  assert(!docNow().ke && SYNC.by[SYNC.by.length - 1] === 'O', 'O 上傳（舊版）：文件少了 ke（舊版丟掉）');
  for (let i = 0; i < 3; i++) { await full(N); await sleep(300); await full(O); await sleep(300); }
  const vN = await N.ev(VIEW), vO = await O.ev(VIEW);
  assert(JSON.stringify(vN) === JSON.stringify(vO), '兩台一樣（已學會、取消、錯題、學過 2 次、家長頁學會紀錄）\n   N=' + JSON.stringify(vN) + '\n   O=' + JSON.stringify(vO));
  assert(vN.learned === 'word:dog,word:fish,word:old' && vN.removed === 'word:cat' && vN.mistakes === 'w:dog:spell,w:fish:spell', '已學會 dog、fish、old；cat 取消（墓碑沒被舊版救回）；錯題兩題: ' + JSON.stringify(vN));
  assert(['w:big:type', 'w:dog:type', 'w:fish:type', 'w:old:type'].every(q => vN.two.split(',').includes(q)) && !vN.two.split(',').includes('w:dog:listen'), '學過 2 次的題兩台一樣（含壓縮過的舊紀錄 w:big:type）: ' + vN.two);
  const sv = SM.normalize(docNow());
  assert(sv.learned['word:fish'] && sv.learned['word:dog'] && sv.learned['word:cat'].removedAt && sv.mistakes['w:dog:spell'] && sv.mistakes['w:fish:spell'] && sv.agg['w:big:type'] && sv.agg['w:big:type'].k >= 2, '伺服器上的文件（最後寫的是 ' + SYNC.by[SYNC.by.length - 1] + '）有兩台的東西，壓縮過的舊紀錄也在');
  // 都同步過、沒有新東西：再輪幾次，一個 PUT 都沒有
  const p0 = SYNC.puts; for (let i = 0; i < 3; i++) { await full(N); await full(O); }
  assert(SYNC.puts === p0, '沒有新東西 → 兩台都不再 PUT（不會來回蓋）: ' + (SYNC.puts - p0) + ' ' + SYNC.by.join(''));
  // N 重新整理（從同步文件＋本機重算）：還是一樣
  await N.go('/index.html'); await sleep(1500);
  assert(JSON.stringify(await N.ev(VIEW)) === JSON.stringify(vN), 'N 重開頁面後一樣');
  log.push('PUT 順序：' + SYNC.by.join(' '));
}

(async () => {
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'sk-chrome-'));
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
      else if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error' && !/BLOCKED_BY_CLIENT/.test(d.params.entry.text) && !/\/favicon\.ico$/.test(d.params.entry.url || '') && !/status of 412/.test(d.params.entry.text)) E.push('log: ' + d.params.entry.text + ' ' + (d.params.entry.url || ''));
      else if (d.method === 'Page.javascriptDialogOpening') cdp('Page.handleJavaScriptDialog', { accept: true }, d.sessionId).catch(() => { });
      else if (d.method === 'Fetch.requestPaused') { const u = d.params.request.url; if (u.startsWith(ORIGIN) || /^(data|blob):/.test(u)) cdp('Fetch.continueRequest', { requestId: d.params.requestId }, d.sessionId).catch(() => { }); else cdp('Fetch.failRequest', { requestId: d.params.requestId, errorReason: 'BlockedByClient' }, d.sessionId).catch(() => { }); }
    });
    await run();
    const errs = Object.values(dev).flatMap(D => D.errors.map(e => D.name + ' ' + e));
    assert(errs.length === 0, 'JS 錯誤 0 個' + (errs.length ? '：\n' + errs.join('\n') : ''));
    console.log(log.join('\n') + '\nPASS sync-ke-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', Object.values(dev).flatMap(D => D.errors.map(x => D.name + ' ' + x)).join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
