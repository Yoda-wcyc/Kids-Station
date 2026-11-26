// test/sync-mm-browser.js — 心智圖（mm、mmBlanks）、天平（eq）同步壓縮（2026-11-26：q／lastShown 不同步、pk）的新舊版兩台：headless Chrome（CDP），一個 browser context＝一台 iPad
// 用法：node test/sync-mm-browser.js [網站資料夾，預設＝正本]
// 舊版＝/old/ 底下（整站照正本，只有 syncmerge.js 換成凍結的線上版 test/fixtures/syncmerge-old-1126.js、syncmerge-old-1121.js，兩版各跑一次）；新版＝根目錄。
//   1. 新版 A 先（伺服器上是升版前舊寫法的文件）：A 過背架構兩關、挖空有紀錄（含本機 q、lastShown）、天平自己出一題 → 舊版 B 開頁同步看得到；
//      B 再過一關、同一個詞答得比較多、天平出一題 → A 收到，A 本機的 q、lastShown 沒被清掉；收斂（0 PUT）
//   4. 接著 14 天視窗（A 的時鐘往前撥）：舊版最後出現後 13 天 A 照寫兩種、B 看得到；14 天後只寫 pk；B 再寫一次 → A 又寫兩種、B 看得到 A 在 pk-only 那段的進度
//   2. 反向：舊版 B 先有資料、新版 A 後加入
//   3. 新版 × 新版：文件只有 pk（沒有 pk.o、沒有原欄位），兩台一樣，最後一輪 0 PUT
//   畫面：心智圖背架構關卡首頁（🔒／✅、最佳 %）、天平「題目清單」自己出的題；全程 0 個 JS 錯誤。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), vm = require('vm'), { spawn } = require('child_process');
const SITE = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const OLDS = { 'old-1126': path.join(__dirname, 'fixtures', 'syncmerge-old-1126.js'), 'old-1121': path.join(__dirname, 'fixtures', 'syncmerge-old-1121.js') };
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.SM_PS || 8987, PD = +process.env.SM_PD || 9519;
const ORIGIN = `http://127.0.0.1:${PS}`, DAY = 864e5;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
const SM = require(path.join(SITE, 'syncmerge.js'));
// 真的單元 id、背架構節點 id（第一個單元）
const W = { window: {} }; vm.createContext(W);
['social', 'science'].forEach(k => [...fs.readFileSync(path.join(SITE, 'mindmap', k + '.html'), 'utf8').matchAll(/src="data\/(\w+\/unit[\w-]*\.js)/g)].forEach(m => vm.runInContext(fs.readFileSync(path.join(SITE, 'mindmap', 'data', m[1]), 'utf8'), W)));
const kids = d => d.lessons || d.topics || d.children || [];
const U0 = W.window.DATA_SOCIAL.units[0], SOC = 'social:' + U0.id, SCI = 'science:' + W.window.DATA_SCIENCE.units[0].id, NODE = kids(U0)[0].id;
let OLD_SM = OLDS['old-1126'];
const SYNC = { doc: null, ver: 0, puts: 0, by: [] };
const reset = doc => { SYNC.doc = { text: JSON.stringify(doc), etag: '"v0"' }; SYNC.ver = 0; SYNC.puts = 0; SYNC.by = []; };
function syncApi(req, res, body) {
  const u = new URL(req.url, ORIGIN), code = (u.searchParams.get('code') || '').replace('-', ''), d = code === 'ABCDEFGH' ? SYNC.doc : null;
  const send = (st, obj, h) => { res.writeHead(st, Object.assign({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }, h)); res.end(obj == null ? '' : JSON.stringify(obj)); };
  if (req.method === 'POST') return send(201, { ok: true, code: 'ABCD-EFGH' });
  if (!d) return send(404, { ok: false });
  if (req.method === 'GET') { if (u.searchParams.get('since') === d.etag) return send(204, null, { 'X-Sync-Etag': d.etag }); res.writeHead(200, { 'Content-Type': 'application/json', 'X-Sync-Etag': d.etag, 'Cache-Control': 'no-store' }); return res.end(d.text); }
  if (req.method === 'PUT') {
    if (req.headers['if-match'] && req.headers['if-match'] !== d.etag) return send(412, { ok: false });
    if (Buffer.byteLength(body) > 1000 * 1000) return send(413, { ok: false });
    const etag = '"v' + (++SYNC.ver) + '"'; SYNC.doc = { text: body, etag }; SYNC.puts++; SYNC.by.push(/"pk":/.test(body) ? 'N' : 'O'); return send(200, { ok: true }, { 'X-Sync-Etag': etag });
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
const tok = 'eyJhbGciOiJub25lIn0.' + Buffer.from(JSON.stringify({ sub: 'K001', exp: Math.floor(Date.now() / 1000) + 90 * 864e2 })).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_') + '.x';
const LOGIN = dv => `localStorage.clear(); localStorage.setItem('kids_jwt', ${JSON.stringify(tok)}); localStorage.setItem('kids_member', JSON.stringify({ child_nickname: '小測', pub_id: 'K001', exp: ${Math.floor(Date.now() / 1000) + 90 * 864e2} }));
  localStorage.setItem('ke_sync', JSON.stringify({ code: 'ABCD-EFGH', acct: 'K001' })); localStorage.setItem('ke_sync_ctr', JSON.stringify({ dev: '${dv}', ctr: {} })); localStorage.setItem('kids_island_ui', JSON.stringify({ tour: 1 }));
  localStorage.setItem('kids_mm_ui', JSON.stringify({ social: { unit: 0, mode: 'arch' }, science: { unit: 0, mode: 'arch' } })); return 1`;
async function device(name, base, dv) {
  const { browserContextId } = await cdp('Target.createBrowserContext');
  const { targetId } = await cdp('Target.createTarget', { url: 'about:blank', browserContextId });
  const { sessionId } = await cdp('Target.attachToTarget', { targetId, flatten: true });
  const D = dev[sessionId] = { name, sessionId, errors: [], ctx: browserContextId, off: 0 };
  const c = (m, p) => cdp(m, p, sessionId);
  await c('Runtime.enable'); await c('Page.enable'); await c('Log.enable'); await c('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
  await c('Page.addScriptToEvaluateOnNewDocument', { source: INJECT });
  await c('Emulation.setDeviceMetricsOverride', { width: 820, height: 1180, deviceScaleFactor: 1, mobile: false });
  D.ev = async expr => { const r = await c('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error(name + ' eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 500)); return r.result.value; };
  D.wait = async () => { for (let i = 0; i < 80; i++) { try { if ((await D.ev('return document.readyState')) === 'complete') break; } catch (e) { } await sleep(100); } await sleep(400); };
  // 時鐘往前撥（只動這台、只動 Date.now；換頁要重設）
  D.clock = off => { D.off = off; return D.ev(`if (!Date.__n) Date.__n = Date.now; Date.now = () => Date.__n() + ${off}; return 1`); };
  D.go = async url => { await c('Page.navigate', { url: ORIGIN + base + url }); await sleep(300); await D.wait(); if (D.off) await D.clock(D.off); };
  D.full = () => D.ev(`await KESync.syncNow('full'); return 1`);
  await D.go('/index.html'); await D.ev(LOGIN(dv)); await D.go('/index.html'); await sleep(800);
  return D;
}
const drop = async (...Ds) => { for (const D of Ds) await cdp('Target.disposeBrowserContext', { browserContextId: D.ctx }).catch(() => { }); };
const docNow = () => JSON.parse(SYNC.doc.text);

// ---- 跟 mindmap.js recordResult、blanks.js 一樣寫本機 ----
const PASS = { 1: 100, 2: 80, 3: 80, 4: 80 };
const REC = (key, lv, pct) => `const p = JSON.parse(localStorage.getItem('kids_mm_progress') || '{}'), u = p['${key}'] || (p['${key}'] = { unlocked: 1, best: {}, passedAt: {}, lastPassAt: 0, reviewStep: 0 }), t = Date.now();
  u.best[${lv}] = Math.max(u.best[${lv}] || 0, ${pct}); if (${pct >= PASS[lv]}) { u.passedAt[${lv}] = t; u.lastPassAt = KESyncMerge.stamp(u.lastPassAt, t); u.unlocked = Math.max(u.unlocked, Math.min(${lv} + 1, 5)); }
  localStorage.setItem('kids_mm_progress', JSON.stringify(p)); KESync.touch(); return 1`;
// st：{sess, w:{詞:紀錄}, a:{節點:紀錄}, q:{雜湊:1}}，逐筆蓋上去
const BL = (key, st) => `const all = JSON.parse(localStorage.getItem('kids_mm_blanks') || '{}'), s = all['${key}'] || (all['${key}'] = { sess: 0, w: {}, a: {} }), x = ${JSON.stringify(st)};
  s.sess = Math.max(s.sess || 0, x.sess || 0); Object.assign(s.w, x.w || {}); Object.assign(s.a, x.a || {}); if (x.q) s.q = Object.assign(s.q || {}, x.q);
  localStorage.setItem('kids_mm_blanks', JSON.stringify(all)); KESync.touch(); return 1`;
const R = (ok, wrong, streak, lastShown) => ({ ok, wrong, streak, last: streak > 0 ? 'ok' : 'wrong', lastShown });
// 畫面：背架構關卡首頁（第一個單元）
const ARCH = `for (let i = 0; i < 30 && !document.querySelector('.lv-grid .lv'); i++) { if (window.MM && i === 5) MM.act('mode', { v: 'arch' }); await new Promise(r => setTimeout(r, 100)); }
  return [...document.querySelectorAll('.lv-grid .lv')].map((e, i) => (i + 1) + (e.classList.contains('locked') ? '🔒' : e.classList.contains('passed') ? '✅' : '▶') + (e.querySelector('.lv-s').textContent.match(/最佳 (\\S+)/) || [])[1]).join(' ')`;
const arch = async D => { await D.go('/mindmap/social.html'); return D.ev(ARCH); };
// 天平：自己出題（真的輸入框＋「加進清單」），畫面讀題目清單
const EQADD = q => `const i = document.getElementById('q-input'); i.value = ${JSON.stringify(q)}; i.dispatchEvent(new Event('input', { bubbles: true })); document.getElementById('btn-add').click(); return 1`;
const EQVIEW = `return [...document.querySelectorAll('#manage-list .mrow')].map(r => r.querySelector('.mtag').textContent + ':' + r.querySelector('.meq').textContent.replace(/\\s+/g, '')).filter(t => /自己出的/.test(t)).join(' | ')`;
const eqAdd = async (D, q) => { await D.go('/math/balance.html'); await D.ev(EQADD(q)); };
const eqView = async D => { await D.go('/math/balance.html'); return D.ev(EQVIEW); };
const LOC = `const b = JSON.parse(localStorage.getItem('kids_mm_blanks') || '{}'), p = JSON.parse(localStorage.getItem('kids_mm_progress') || '{}'); return { b, p }`;
const rounds = async (a, b, n) => { for (let i = 0; i < n; i++) { await a.full(); await b.full(); } };
const converged = async (a, b, label) => { await rounds(a, b, 2); const p0 = SYNC.puts, by0 = SYNC.by.length; await rounds(a, b, 3); assert(SYNC.puts === p0, label + '：都同步過、沒有新東西 → 兩台都不再 PUT: ' + (SYNC.puts - p0) + ' 次 ' + SYNC.by.slice(by0).join('')); };
const blOf = (doc, key) => SM.normalize(doc).mmBlanks[key] || { w: {}, a: {} };

// 1 ＋ 4：新版先、舊版後；接著 14 天視窗
async function newFirst(oname) {
  reset(SM.normalize({ log: [], mm: { [SCI]: { unlocked: 2, best: { 1: 100 }, passedAt: { 1: Date.now() - 30 * DAY }, lastPassAt: Date.now() - 30 * DAY, reviewStep: 0 } }, mmBlanks: { [SCI]: { sess: 3, w: { '光合作用': R(2, 0, 2, 3) }, a: {} } } }));
  const A = await device('A(新版)', '', 'dA');
  // A：社會第一單元過第 1、2 關；挖空三個詞（一個只抽出沒作答）、背架構一個節點、練習題答對兩題（q）；天平自己出一題
  await A.go('/mindmap/social.html');
  await A.ev(REC(SOC, 1, 100)); await A.ev(REC(SOC, 2, 85));
  await A.ev(BL(SOC, { sess: 5, w: { '臺南': R(2, 1, 1, 5), '荷蘭': R(3, 0, 3, 4), '鄭成功': { ok: 0, wrong: 0, streak: 0, lastShown: 4 } }, a: { [NODE]: R(1, 0, 1, 2) }, q: { qa1: 1, qa2: 1 } }));
  await eqAdd(A, 'x+9=17'); await A.full();
  const d1 = docNow(), w1 = d1.mmBlanks && d1.mmBlanks[SOC];
  assert(d1.pk && d1.pk.o > 0 && d1.pk.mm[SOC] && d1.pk.bl[SOC] && d1.mm[SOC] && w1 && d1.eq && /^N+$/.test(SYNC.by.join('')), '[' + oname + '] A 上傳：有 pk（伺服器上是舊寫法的文件 → pk.o），14 天內原欄位也寫一份: ' + Object.keys(d1).join() + ' PUT ' + SYNC.by.join(''));
  assert(!('q' in w1) && w1.w['臺南'] === '2,1,1,' && !('鄭成功' in w1.w), '[' + oname + '] 原欄位的挖空紀錄沒有 q、lastShown（尾巴逗號）、沒作答的不傳: ' + JSON.stringify(w1));
  // B（舊版）開頁同步：看得到 A 的關卡、挖空、天平；升版前的自然也還在
  const B = await device('B(舊版 ' + oname + ')', '/old', 'dB');
  const smSrc = `const s = [...document.scripts].find(x => /syncmerge\\.js/.test(x.src)); return (await fetch(s.src)).text()`;
  assert(await B.ev(smSrc) === fs.readFileSync(OLD_SM, 'utf8') && await A.ev(smSrc) === fs.readFileSync(path.join(SITE, 'syncmerge.js'), 'utf8'), '[' + oname + '] B 跑凍結的舊版 syncmerge.js、A 是新版');
  await B.go('/mindmap/social.html'); await B.full();
  const vB = await arch(B), lB = await B.ev(LOC), eB = await eqView(B);
  assert(vB === '1✅100% 2✅85% 3▶— 4🔒—', '[' + oname + '] B 畫面：背架構第 1、2 關 ✅（最佳 100%、85%）、第 3 關解鎖、第 4 關 🔒: ' + vB);
  assert(lB.b[SOC] && lB.b[SOC].w['臺南'].ok === 2 && lB.b[SOC].w['荷蘭'].ok === 3 && lB.b[SOC].a[NODE] && lB.b[SOC].a[NODE].ok === 1 && lB.p[SCI] && lB.p[SCI].best[1] === 100, '[' + oname + '] B 本機有 A 的挖空紀錄（詞、背架構節點）、升版前的自然進度: ' + JSON.stringify(lB.b[SOC]));
  assert(/自己出的:x\+9=17/.test(eB), '[' + oname + '] B 畫面：天平題目清單有 A 出的 x+9=17: ' + eB);
  // B：過第 3 關、臺南答得比 A 多（B 自己的 lastShown 9、q qb1）、天平出一題
  await B.go('/mindmap/social.html');
  await B.ev(REC(SOC, 3, 90)); await B.ev(BL(SOC, { sess: 9, w: { '臺南': R(6, 1, 2, 9) }, q: { qb1: 1 } }));
  await eqAdd(B, 'x+4=11'); await B.full();
  assert(SYNC.by[SYNC.by.length - 1] === 'O' && !docNow().pk, '[' + oname + '] B 上傳（舊版）：文件沒有 pk（舊版丟掉）');
  await A.full();
  const lA = await A.ev(LOC), sA = lA.b[SOC];
  assert(sA.w['臺南'].ok === 6 && sA.w['臺南'].lastShown === 5 && sA.w['鄭成功'] && sA.w['鄭成功'].lastShown === 4 && sA.w['荷蘭'].lastShown === 4 && sA.a[NODE].lastShown === 2,
    '[' + oname + '] A 收到 B 的臺南（6 次），lastShown 照 A 本機的（5、沒作答的鄭成功 4、荷蘭 4、節點 2）: ' + JSON.stringify(sA.w));
  assert(JSON.stringify(sA.q) === JSON.stringify({ qa1: 1, qa2: 1 }), '[' + oname + '] A 本機的 q 沒被清掉、也沒收進 B 的 q: ' + JSON.stringify(sA.q));
  assert(docNow().mm[SOC] && (docNow().pk || SYNC.by[SYNC.by.length - 1] === 'O') && SM.normalize(docNow()).mm[SOC].best[3] === 90, '[' + oname + '] 伺服器上的文件舊版看得懂（原欄位有東西；A 沒新東西就不 PUT）: ' + SYNC.by.join(''));
  const vA = await arch(A), eA = await eqView(A);
  assert(vA === '1✅100% 2✅85% 3✅90% 4▶—', '[' + oname + '] A 畫面：B 過的第 3 關 ✅ 90%、第 4 關解鎖: ' + vA);
  assert(/x\+9=17/.test(eA) && /x\+4=11/.test(eA), '[' + oname + '] A 畫面：天平清單兩台出的題都在: ' + eA);
  await converged(A, B, '[' + oname + '] 新版 × 舊版');
  assert(await arch(B) === vA && await eqView(B) === eA, '[' + oname + '] 兩台畫面一樣（背架構、天平清單）');
  assert((await A.ev(LOC)).b[SOC].w['臺南'].lastShown === 5 && JSON.stringify((await A.ev(LOC)).b[SOC].q) === JSON.stringify({ qa1: 1, qa2: 1 }), '[' + oname + '] 來回幾輪後 A 的 q、lastShown 還在');

  // ---- 4. 14 天視窗（兩台時鐘一起往前撥＝真的過了幾天）----
  // 文件最後是舊版寫的 → A 下一次 PUT 時記下 pk.o＝那時候（視窗從這裡算）
  await A.go('/mindmap/social.html'); await A.ev(REC(SOC, 4, 70)); await A.full();
  const o0 = docNow().pk && docNow().pk.o;
  assert(o0 > Date.now() - 60e3 && docNow().mm[SOC].best[4] === 70 && SYNC.by[SYNC.by.length - 1] === 'N', '[' + oname + '] A 第 4 關 70%（沒過）上傳：舊版寫過 → pk.o＝現在、兩種都寫');
  // pk.o＋13 天：A 照寫兩種（pk.o 不變）
  const off13 = o0 + 13 * DAY - Date.now();
  await A.clock(off13); await A.ev(REC(SOC, 4, 90)); await A.full();
  const d13 = docNow();
  assert(d13.pk.o === o0 && d13.mm[SOC] && d13.mm[SOC].best[4] === 90 && d13.mmBlanks[SOC] && d13.eq && SYNC.by[SYNC.by.length - 1] === 'N', '[' + oname + '] +13 天：A 上傳仍寫兩種（pk.o 不變、原欄位有第 4 關）');
  // 舊版 B（也 +13 天）同步：看得到第 4 關。B 本機有自己的 q、lastShown（新版寫的文件裡沒有）→ PUT 一次舊寫法＝「舊版又出現」
  await B.clock(off13); await B.full();
  assert(await arch(B) === '1✅100% 2✅85% 3✅90% 4✅90%' && SYNC.by[SYNC.by.length - 1] === 'O', '[' + oname + '] +13 天：B 畫面看得到 A 剛過的第 4 關 ✅（B 把自己的 q、lastShown 補回去、PUT 一次）');
  // A 下一次 PUT：pk.o 換成這時候（o1）
  await A.ev(REC(SCI, 2, 60)); await A.full();
  const o1 = docNow().pk && docNow().pk.o;
  assert(o1 >= o0 + 13 * DAY && docNow().mm[SOC] && SYNC.by[SYNC.by.length - 1] === 'N', '[' + oname + '] A 看到舊版又寫過 → pk.o 換成 +13 天那時候、照寫兩種');
  // o1＋14 天（多 1 分鐘），中間舊版沒再寫 → 只寫 pk
  const off14 = o1 + 14 * DAY + 60e3 - Date.now();
  await A.clock(off14); await A.ev(REC(SCI, 2, 95)); await A.full();
  const d14 = docNow(), n14 = SM.normalize(d14);
  assert(d14.pk && !d14.pk.o && !Object.keys(d14.mm || {}).length && !Object.keys(d14.mmBlanks || {}).length && !('eq' in d14) && n14.mm[SCI].best[2] === 95 && n14.mm[SOC].best[4] === 90 && n14.eq.items.some(x => x.q === 'x+4=11'),
    '[' + oname + '] 舊版 14 天沒出現：A 只寫 pk（沒有 pk.o、原欄位空的），壓縮的裡面全部都在: ' + Object.keys(d14).join());
  // 舊版 B 再同步：看不懂 pk、自己的進度不會掉，PUT 回舊寫法 → A 看到舊版又出現 → 兩種都寫 → B 看得到 A 在只寫 pk 那段的自然第 2 關
  await B.clock(off14); await B.full();
  assert(SYNC.by[SYNC.by.length - 1] === 'O' && await arch(B) === '1✅100% 2✅85% 3✅90% 4✅90%', '[' + oname + '] 之後 B 同步：本機進度沒掉、PUT 回舊寫法');
  await A.full();
  assert(docNow().pk.o > o1 + 14 * DAY && docNow().mm[SCI] && SYNC.by[SYNC.by.length - 1] === 'N', '[' + oname + '] A 看到舊版又寫過 → pk.o 更新、又寫兩種');
  await B.full();
  assert((await B.ev(LOC)).p[SCI].best[2] === 95, '[' + oname + '] B 收到 A 在只寫 pk 那段過的自然第 2 關（95%）');
  await converged(A, B, '[' + oname + '] 視窗之後');
  log.push('[' + oname + '] PUT 順序：' + SYNC.by.join(' '));
  await drop(A, B);
}

// 2：舊版先有資料、新版後加入
async function oldFirst(oname) {
  reset({ v: 9, log: [] });
  const B = await device('B(舊版 ' + oname + ')', '/old', 'dB2');
  await B.go('/mindmap/social.html'); await B.ev(REC(SOC, 1, 100)); await B.ev(REC(SOC, 2, 80));
  await B.ev(BL(SOC, { sess: 4, w: { '臺南': R(3, 0, 2, 4), '荷蘭': R(1, 1, 0, 3) }, a: { [NODE]: R(2, 0, 2, 4) }, q: { qb1: 1 } }));
  await eqAdd(B, 'x+6=15'); await B.full();
  assert(/^O+$/.test(SYNC.by.join('')) && docNow().mm[SOC] && !docNow().pk, '[' + oname + ' 先] B（舊版）上傳舊寫法: ' + SYNC.by.join(''));
  const A = await device('A(新版，後加入)', '', 'dA2');
  await A.full();
  const vA = await arch(A), lA = await A.ev(LOC);
  assert(vA === '1✅100% 2✅80% 3▶— 4🔒—' && lA.b[SOC].w['臺南'].ok === 3 && lA.b[SOC].a[NODE].ok === 2 && /x\+6=15/.test(await eqView(A)), '[' + oname + ' 先] A 加入：畫面看得到 B 的背架構、天平，本機有 B 的挖空紀錄: ' + vA);
  assert(!lA.b[SOC].q, '[' + oname + ' 先] 舊版寫進文件的 q 新版收到就丟: ' + JSON.stringify(lA.b[SOC].q));
  // A：過第 3 關、荷蘭答比較多（A 的 lastShown 7、q qa9）、天平出一題
  await A.go('/mindmap/social.html'); await A.ev(REC(SOC, 3, 100)); await A.ev(BL(SOC, { sess: 7, w: { '荷蘭': R(4, 1, 1, 7), '鄭成功': R(1, 0, 1, 6) }, q: { qa9: 1 } }));
  await eqAdd(A, 'x+8=13'); await A.full();
  assert(docNow().pk && docNow().pk.o > 0 && docNow().mm[SOC] && docNow().eq && SYNC.by[SYNC.by.length - 1] === 'N', '[' + oname + ' 先] A 上傳：pk（pk.o）＋原欄位兩種');
  await B.full();
  const vB = await arch(B), lB = await B.ev(LOC), eB = await eqView(B);
  assert(vB === '1✅100% 2✅80% 3✅100% 4▶—' && lB.b[SOC].w['荷蘭'].ok === 4 && lB.b[SOC].w['鄭成功'].ok === 1 && /x\+8=13/.test(eB) && /x\+6=15/.test(eB), '[' + oname + ' 先] B 畫面看得到 A 過的第 3 關、天平清單兩題都在，本機有 A 的挖空: ' + vB + ' / ' + eB);
  await converged(A, B, '[' + oname + ' 先] 舊版 × 新版');
  const sA = (await A.ev(LOC)).b[SOC];
  assert(sA.w['荷蘭'].lastShown === 7 && sA.w['臺南'].ok === 3 && JSON.stringify(sA.q) === JSON.stringify({ qa9: 1 }), '[' + oname + ' 先] A 的 q、lastShown 還在: ' + JSON.stringify(sA));
  assert(await arch(A) === vB && await eqView(A) === eB, '[' + oname + ' 先] 兩台畫面一樣');
  log.push('[' + oname + ' 先] PUT 順序：' + SYNC.by.join(' '));
  await drop(A, B);
}

// 3：新版 × 新版
async function newNew() {
  reset({ v: 9, log: [] });
  const A = await device('A(新版)', '', 'dA3'), C = await device('C(新版)', '', 'dC3');
  await A.go('/mindmap/social.html'); await A.ev(REC(SOC, 1, 100)); await A.ev(REC(SOC, 2, 90));
  await A.ev(BL(SOC, { sess: 5, w: { '臺南': R(2, 0, 2, 5) }, a: { [NODE]: R(1, 0, 1, 5) }, q: { qa1: 1 } }));
  await eqAdd(A, 'x+9=17'); await A.full();
  await C.full();
  assert(await arch(C) === '1✅100% 2✅90% 3▶— 4🔒—' && /x\+9=17/.test(await eqView(C)), '[新×新] C 畫面看得到 A 的背架構、天平');
  await C.go('/mindmap/social.html'); await C.ev(REC(SOC, 3, 80)); await C.ev(BL(SOC, { sess: 8, w: { '臺南': R(5, 2, 0, 8) }, q: { qc1: 1 } }));
  await eqAdd(C, 'x+2=10'); await C.full(); await A.full();
  const sA = (await A.ev(LOC)).b[SOC];
  assert(sA.w['臺南'].ok === 5 && sA.w['臺南'].lastShown === 5 && JSON.stringify(sA.q) === JSON.stringify({ qa1: 1 }), '[新×新] A 收到 C 的臺南（5 次），A 的 lastShown、q 照舊: ' + JSON.stringify(sA));
  await rounds(A, C, 2);
  const d = docNow();
  assert(d.pk && !d.pk.o && !Object.keys(d.mm || {}).length && !Object.keys(d.mmBlanks || {}).length && !('eq' in d) && SYNC.by.every(x => x === 'N'), '[新×新] 文件只有 pk（沒有 pk.o、原欄位空的）: ' + Object.keys(d).join());
  const vA = await arch(A), vC = await arch(C), eA = await eqView(A), eC = await eqView(C);
  assert(vA === vC && vA === '1✅100% 2✅90% 3✅80% 4▶—' && eA === eC && /x\+2=10/.test(eA), '[新×新] 兩台畫面一樣: ' + vA + ' / ' + eA);
  const bl = blOf(d, SOC);
  assert(JSON.stringify(SM.normalize({ mmBlanks: (await A.ev(LOC)).b }).mmBlanks) === JSON.stringify(SM.normalize({ mmBlanks: (await C.ev(LOC)).b }).mmBlanks) && bl.w['臺南'] === '5,2,0,', '[新×新] 兩台挖空紀錄（同步的部分）一樣、跟伺服器一致');
  const p0 = SYNC.puts; await rounds(A, C, 2);
  assert(SYNC.puts === p0, '[新×新] 最後一輪 0 PUT（收斂）');
  log.push('[新×新] PUT 順序：' + SYNC.by.join(' '));
  await drop(A, C);
}

async function run() {
  for (const oname of Object.keys(OLDS)) { OLD_SM = OLDS[oname]; await newFirst(oname); await oldFirst(oname); }
  await newNew();
}

(async () => {
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'sm-chrome-'));
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
    console.log(log.join('\n') + '\nPASS sync-mm-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', Object.values(dev).flatMap(D => D.errors.map(x => D.name + ' ' + x)).join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
