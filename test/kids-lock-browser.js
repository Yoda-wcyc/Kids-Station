// test/kids-lock-browser.js — 單元做過幾次＋做滿 2 次上鎖（kids-lock.js，2026-11-16）headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連、不碰線上同步）。
// 用法：node test/kids-lock-browser.js [網站資料夾，預設＝正本] [截圖資料夾，預設不存]
// iPad 820×1180：
//   1. 在單元頁真的記 2 次（KidsDone.record：練習＋測驗 → 1 次、再考一次 → 2 次）→ 數學科卡片 ✓2 🔒＋變灰、課程地圖、學習島說明卡也標
//   2. 點卡片 → iframe 裡是「這個你已經練 2 次了，去挑戰 → 下一個」卡，連結到下一個單元；直接打網址也被擋；1 次的單元照常進得去
//   3. 家長頁「已上鎖單元」解鎖 → 卡片恢復、單元頁進得去（再做 1 次又會鎖）
//   4. 每日清單 5 項（英文句型／片語、乘法二位×二位＋異分母、閱讀、歷史、地理）在「能鎖的全部都鎖」時都還做得到；乘法二位×二位不鎖
//   5. 其他頁的進頁檢查：課本單元、國語一篇、漫畫一話、英檢一組、乘法題型、句型等級；錯題庫／今天要複習不擋；0 JS 錯誤
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(process.argv[2] || path.join(__dirname, '..')), SHOTS = process.argv[3] ? path.resolve(process.argv[3]) : '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.KL_PS || 8897, PD = +process.env.KL_PD || 9437;
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
async function ev(expr) { const r = await cdp('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 500)); return r.result.value; }
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(450); for (let i = 0; i < 80 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(350); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
async function shot(name) { if (!SHOTS) return; const r = await cdp('Page.captureScreenshot', { format: 'png' }); fs.mkdirSync(SHOTS, { recursive: true }); fs.writeFileSync(path.join(SHOTS, name + '.png'), Buffer.from(r.data, 'base64')); log.push('📸 ' + name + '.png'); }
// 登入、練習額度用假的（只測上鎖）；不同步：沒有同步碼（ke_sync），sync.js 不會連線
const HOOK = `if (window.KidsAuth) { KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true; } return 1`;
const RESET = `localStorage.clear(); return 1`;
// iframe 裡的狀態
const FR = `const f = document.querySelector('#subject iframe'); const d = f && f.contentDocument; `;

async function run() {
  await cdp('Emulation.setDeviceMetricsOverride', { width: 820, height: 1180, deviceScaleFactor: 1, mobile: false });
  await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });

  // ---- 1. 在單元頁真的記次數：五下單元一 練習＋測驗 → 1 次；再考一次 → 2 次 ----
  await go('/index.html'); await ev(RESET);
  await go('/math/grade.html?u=g5b1'); await ev(HOOK);
  const c1 = await ev(`KidsDone.record('mg', 'g5b1q', 90); KidsDone.record('mg', 'g5b1t', 85); return KidsLock.state('mg:g5b1')`);
  assert(c1.n === 1 && !c1.locked, '練習 90%＋單元測驗 85 → 做過 1 次、不鎖');
  const c2 = await ev(`KidsDone.record('mg', 'g5b1q', 95); const a = KidsLock.state('mg:g5b1').n; KidsDone.record('mg', 'g5b1t', 92); return [a, KidsLock.state('mg:g5b1'), JSON.parse(localStorage.getItem('kids_done')).n]`);
  assert(c2[0] === 1 && c2[1].n === 2 && c2[1].locked && c2[1].next.key === 'mg:g5b2' && c2[2].g5b === '02', '完成後再練習不加；再考一次單元測驗 → 2 次、鎖住、下一個＝五下單元二 ' + JSON.stringify(c2));
  await ev(`KidsDone.record('mg', 'g5b2q', 90); KidsDone.record('mg', 'g5b2t', 90); return 1`);   // 單元二做 1 次（不鎖）

  // ---- 1b. 數學科卡片：✓2 🔒＋變灰；單元二 ✓1 ----
  await go('/index.html#s/math'); await ev(HOOK); await sleep(300);
  const t = await ev(`const q = h => [...document.querySelectorAll('#subject a.tile')].find(a => a.getAttribute('href') === h); const a = q('#s/math/g5b1'), b = q('#s/math/g5b2'), c = q('#s/math/g5b3');
    a.closest('details').open = true; a.scrollIntoView({ block: 'center' }); return { a: a.textContent, aOff: a.classList.contains('kl-off'), b: b.textContent, bOff: b.classList.contains('kl-off'), c: c.textContent, f: getComputedStyle(a).filter }`);
  assert(/✓2 🔒/.test(t.a) && t.aOff && /grayscale/.test(t.f) && /✓1/.test(t.b) && !/🔒/.test(t.b) && !t.bOff && !/✓/.test(t.c), '數學科卡片：單元一 ✓2 🔒（灰）、單元二 ✓1、單元三沒標 ' + JSON.stringify(t));
  await sleep(200); await shot('1-math-tiles-locked');

  // ---- 2. 點鎖住的卡片 → iframe 裡是「去挑戰」卡，連結到單元二 ----
  await ev(`[...document.querySelectorAll('#subject a.tile')].find(a => a.getAttribute('href') === '#s/math/g5b1').click(); return 1`); await sleep(1500);
  const g = await ev(FR + `const k = d && d.getElementById('kl-gate'), a = k && k.querySelector('.kl-go'); return k ? { h: k.querySelector('h2').textContent, go: a.textContent, href: a.getAttribute('href'), tgt: a.getAttribute('target'), what: k.querySelector('.kl-what').textContent } : null`);
  assert(g && g.h === '這個你已經練 2 次了' && /去挑戰 → 五下 單元二/.test(g.go) && /\/index\.html#s\/math\/g5b2$/.test(g.href) && g.tgt === '_top' && /✓2 🔒/.test(g.what), '點鎖住的卡片：iframe 裡是「這個你已經練 2 次了・去挑戰 → 五下 單元二」，連結回首頁開單元二 ' + JSON.stringify(g));
  await shot('2-locked-card-in-frame');
  await ev(FR + `d.querySelector('#kl-gate .kl-go').click(); return 1`); await sleep(1500);
  assert(await ev(`return location.hash === '#s/math/g5b2' && /grade\\.html\\?u=g5b2/.test(document.querySelector('#subject iframe').getAttribute('src'))`) && await ev(FR + `return !d.getElementById('kl-gate')`), '按「去挑戰」→ 開到五下單元二（沒鎖、照常練）');

  // ---- 2b. 直接打網址也擋 ----
  await go('/math/grade.html?u=g5b1');
  const direct = await ev(`const k = document.getElementById('kl-gate'); return k ? { go: k.querySelector('.kl-go').getAttribute('href'), cover: (() => { const r = k.getBoundingClientRect(); return r.width >= innerWidth && r.height >= innerHeight; })(), top: document.elementFromPoint(410, 1000).closest('#kl-gate') !== null } : null`);
  assert(direct && /#s\/math\/g5b2$/.test(direct.go) && direct.cover && direct.top, '直接打網址 math/grade.html?u=g5b1：整頁蓋上去鎖住的卡（下面的練習點不到）');
  await shot('3-direct-url-blocked');
  await go('/math/grade.html?mistakes=1'); assert(await ev(`return !document.getElementById('kl-gate')`), '數學錯題重練不擋');

  // ---- 1c. 課程地圖、學習島說明卡也標 ----
  await go('/map.html'); await sleep(300);
  const m = await ev(`const a = document.querySelector('[data-key="mg:g5b1"]'), b = document.querySelector('[data-key="mg:g5b2"]'); return { a: a.textContent, off: a.classList.contains('kl-off'), b: b.textContent }`);
  assert(/✓2 🔒/.test(m.a) && m.off && /✓1/.test(m.b), '課程地圖：五下單元一 ✓2 🔒（灰）、單元二 ✓1');
  await ev(`document.querySelector('[data-key="mg:g5b1"]').scrollIntoView({ block: 'center' }); return 1`); await sleep(200); await shot('4-map');
  await go('/index.html'); await ev(HOOK); await sleep(300);
  const isl = await ev(`const lb = document.querySelector('.isl-lb[data-k="math"]'); lb.dispatchEvent(new MouseEvent('click', { bubbles: true })); await new Promise(r => setTimeout(r, 700));
    const c = document.getElementById('isl-card'), li = [...c.querySelectorAll('.isl-acts a')].find(a => /#s\\/math\\/g5b1$/.test(a.getAttribute('href'))); return c.hidden ? 'hidden' : li ? { t: li.textContent, off: li.classList.contains('kl-off') } : 'no-li'`);
  assert(isl && /✓2 🔒/.test(isl.t) && isl.off, '學習島數字塔說明卡：五下單元一 ✓2 🔒（灰） ' + JSON.stringify(isl));
  await shot('5-island-card');

  // ---- 3. 家長頁解鎖 ----
  await go('/index.html#parent'); await sleep(400);
  const p1 = await ev(`const s = document.getElementById('kl-parent'); return s ? { h: s.querySelector('h2').textContent, items: [...s.querySelectorAll('li')].map(l => l.textContent) } : null`);
  assert(p1 && /已上鎖單元（1）/.test(p1.h) && p1.items.length === 1 && /單元一/.test(p1.items[0]), '家長頁：已上鎖單元（1）＝五下單元一 ' + JSON.stringify(p1));
  await ev(`document.getElementById('kl-parent').scrollIntoView({ block: 'center' }); return 1`); await sleep(150); await shot('6-parent-before-unlock');
  await ev(`document.querySelector('[data-kl-unlock="mg:g5b1"]').click(); return 1`); await sleep(400);
  const p2 = await ev(`return { none: !!document.getElementById('kl-none'), st: KidsLock.state('mg:g5b1'), n: JSON.parse(localStorage.getItem('kids_done')).n.g5b }`);
  assert(p2.none && p2.st.n === 1 && !p2.st.locked && p2.n === '041', '按解鎖 → 清單空了、算做過 1 次（下一輪）、不鎖 ' + JSON.stringify(p2.n));
  await ev(`document.getElementById('kl-parent').scrollIntoView({ block: 'center' }); return 1`); await sleep(150); await shot('7-parent-after-unlock');
  await go('/math/grade.html?u=g5b1'); await ev(HOOK);
  assert(await ev(`return !document.getElementById('kl-gate') && !document.getElementById('tabs').hidden`), '解鎖後單元頁進得去');
  const re = await ev(`KidsDone.record('mg', 'g5b1t', 88); return KidsLock.state('mg:g5b1')`);
  assert(re.n === 2 && re.locked, '解鎖後再做 1 次 → 又鎖住');

  // ---- 5. 其他頁的進頁檢查 ----
  const lockAll = `const KL = KidsLock, keys = ${'%KEYS%'}; let d = JSON.parse(localStorage.getItem('kids_done') || '{}'); keys.forEach(k => { d = KL.setV(d, k, 2); }); localStorage.setItem('kids_done', JSON.stringify(d)); return keys.length`;
  const L = k => lockAll.replace('%KEYS%', JSON.stringify(k));
  // 課本（index.html#tb）
  await go('/index.html'); await ev(L(['tb:hanlin-5-u1'])); await go('/index.html#tb/hanlin-5-u1/practice'); await ev(HOOK); await sleep(200);
  const tb = await ev(`const c = document.querySelector('#app .kl-card'); return c ? { go: c.querySelector('.kl-go').getAttribute('href'), body: !!document.getElementById('tbbody') } : null`);
  assert(tb && tb.go === '#tb/hanlin-5-u2/learn' && !tb.body, '英文課本單元（#tb/…/practice 直接打網址）：鎖住的卡、去挑戰下一課');
  await go('/index.html#tb'); const tbt = await ev(`const b = document.querySelector('[data-go="#tb/hanlin-5-u1/learn"]'); return { t: b.textContent, off: b.classList.contains('kl-off') }`);
  assert(/✓2 🔒/.test(tbt.t) && tbt.off, '課本進度卡片 ✓2 🔒（灰）');
  // 國語一篇
  await go('/index.html'); await ev(L(['zh1-01'])); await go('/chinese/reading.html?a=zh1-01');
  assert(/reading\.html\?a=zh1-02$/.test(await ev(`const k = document.getElementById('kl-gate'); return k ? k.querySelector('.kl-go').getAttribute('href') : ''`)), '國語閱讀 zh1-01 鎖住 → 去挑戰 zh1-02');
  await go('/chinese/reading.html'); await sleep(300);
  assert(await ev(`const a = document.querySelector('.zr-card[data-id="zh1-01"]'); return /✓2 🔒/.test(a.textContent) && a.classList.contains('kl-off')`), '國語篇目清單：zh1-01 ✓2 🔒（灰）');
  await shot('8-reading-list');
  // 漫畫一話
  await go('/index.html'); await ev(L(['v1e1'])); await go('/comics/v1e1.html');
  assert(/comics\/v1e2\.html$/.test(await ev(`const k = document.getElementById('kl-gate'); return k ? k.querySelector('.kl-go').getAttribute('href') : ''`)), '漫畫第 1 話鎖住 → 去挑戰第 2 話');
  await go('/comics/index.html'); assert(await ev(`const a = document.querySelector('a.cm-ep-card[href="v1e1.html"]'); return /✓2 🔒/.test(a.textContent) && a.classList.contains('kl-off')`), '漫畫目錄：第 1 話 ✓2 🔒（灰）');
  // 漫畫看完一話真的記次數（不經 kids-done.js）
  const cm = await ev(`localStorage.removeItem('kids_comic'); KidsLock.bump('v1e3'); const a = KidsLock.state('v1e3').n; KidsLock.bump('v1e3'); return [a, KidsLock.state('v1e3').n]`);
  assert(cm[0] === 1 && cm[1] === 2, '漫畫 bump：1 次 → 2 次');
  // 英檢一組
  await go('/index.html'); await ev(L(['e-L1-01'])); await go('/gept/practice.html?set=e-L1-01'); await sleep(300);
  const gpg = await ev(`const k = document.getElementById('kl-gate'); return k ? k.querySelector('.kl-go').getAttribute('href') : JSON.stringify([!!window.KidsLock, window.KidsLock && KidsLock.state('e-L1-01'), localStorage.getItem('kids_done')])`);
  assert(/practice\.html\?set=e-L1-02$/.test(gpg), '英檢初級看圖辨義第 1 組鎖住 → 去挑戰第 2 組 ' + gpg);
  await go('/gept/index.html'); assert(await ev(`const a = document.querySelector('a[href="practice.html?set=e-L1-01"]'); return /✓2 🔒/.test(a.textContent) && a.classList.contains('kl-off')`), '英檢準備區：第 1 組 ✓2 🔒（灰）');
  await go('/gept/practice.html?mistakes=1&lv=e'); assert(await ev(`return !document.getElementById('kl-gate')`), '英檢錯題不擋');
  // 社會：單元頁擋、🔁 今天要複習／錯題不擋
  await go('/index.html'); await ev(L(['mm:social:u1'])); await go('/mindmap/social.html?u=u1'); await sleep(300);
  assert(/#s\/social\/u2$/.test(await ev(`const k = document.getElementById('kl-gate'); return k ? k.querySelector('.kl-go').getAttribute('href') : ''`)), '社會單元一鎖住 → 去挑戰單元二');
  await go('/mindmap/social.html?review=1'); assert(await ev(`return !document.getElementById('kl-gate')`), '社會 🔁 今天要複習不擋');
  await go('/mindmap/social.html?mistakes=1&u=u1'); assert(await ev(`return !document.getElementById('kl-gate')`), '社會單元一的錯題庫重練不擋');

  // ---- 4. 每日清單 5 項：能鎖的全部做 2 次之後，還是做得到 ----
  await go('/index.html');
  const every = await ev(`const S = KidsLock._snap(); return S.ps.flatMap(p => p.items.map(u => u.key))`);
  const zhAll = Array.from({ length: 4 }, (_, l) => Array.from({ length: 25 }, (_, i) => 'zh' + (l + 1) + '-' + String(i + 1).padStart(2, '0'))).flat();
  const comicAll = Array.from({ length: 7 }, (_, v) => Array.from({ length: 6 }, (_, e) => 'v' + (v + 1) + 'e' + (e + 1))).flat();
  const geoAll = ['m1', 'm2', 'm3', 'm4', 'm5', 't1', 't2', 't3', 't4', 't5', 't6', 'w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'].map(x => 'geo:' + x);
  const cyAll = Array.from({ length: 100 }, (_, i) => 'cy' + String(i + 1).padStart(3, '0'));
  await ev(L(every.concat(zhAll, comicAll, geoAll, cyAll, ['mx:d22t'])));
  await go('/math/multiply.html'); await ev(HOOK); await sleep(300);
  const mx = await ev(`const b = k => document.querySelector('#lv [data-lv="' + k + '"]'); return { d21: [b('d21').textContent, b('d21').classList.contains('kl-off')], d22: [b('d22').textContent, b('d22').classList.contains('kl-off')], d22t: b('d22t').classList.contains('kl-off'), lv: MXPage.S.lv }`);
  assert(/✓2 🔒/.test(mx.d21[0]) && mx.d21[1] && /✓2/.test(mx.d22[0]) && !/🔒/.test(mx.d22[0]) && !mx.d22[1] && !mx.d22t && mx.lv === 'd22', '乘法快算：二位×一位 ✓2 🔒（灰）；二位×二位、二位×整十 ✓2 不鎖，預設就是二位×二位 ' + JSON.stringify(mx));
  await ev(`document.querySelector('#lv [data-lv="d21"]').click(); return 1`); await sleep(200);
  const mxg = await ev(`const k = document.getElementById('kl-gate'); return k ? k.querySelector('.kl-go').textContent : ''`);
  assert(/去挑戰 → 乘法快算：二位數×二位數/.test(mxg), '點二位×一位 → 「去挑戰 → 二位數×二位數」' + mxg);
  await shot('9-multiply-tier-locked');
  await ev(`document.querySelector('#kl-gate .kl-go').click(); return 1`); await sleep(200);
  assert(await ev(`return !document.getElementById('kl-gate') && MXPage.S.lv === 'd22' && document.querySelector('#lv [data-lv="d22"]').getAttribute('aria-pressed') === 'true'`), '按「去挑戰」→ 選到二位×二位');
  await ev(`document.getElementById('go').click(); return 1`); await sleep(300);
  assert(await ev(`return !document.getElementById('kl-gate') && !!MXPage.R() && MXPage.R().lv === 'd22'`), '每日清單：數學乘法二位×二位照常開始一輪');
  await go('/math/fracadd.html'); assert(await ev(`return !document.getElementById('kl-gate')`), '每日清單：異分母加減不鎖');
  // 英文句型／片語：全部等級不鎖；進階不鎖；簡單鎖住 → 去挑戰基本
  await go('/index.html#learn/patterns'); await ev(HOOK); await sleep(200);
  const pl = await ev(`return [...document.querySelectorAll('input[name="plv"]')].map(i => i.parentNode.textContent)`);
  assert(/簡單 ✓2 🔒/.test(pl[1]) && /基本 ✓2 🔒/.test(pl[2]) && /進階 ✓2$/.test(pl[3]), '句型等級標示：簡單、基本 ✓2 🔒，進階 ✓2（不鎖） ' + pl);
  await ev(`document.querySelector('input[name="plv"][value="1"]').click(); return 1`); await sleep(100); await ev(`document.getElementById('pgo').click(); return 1`); await sleep(300);
  const pc = await ev(`const c = document.querySelector('#app .kl-card'); return c ? c.querySelector('.kl-go').textContent : ''`);
  assert(/去挑戰 → 句型隨機 10 題：進階/.test(pc), '句型「簡單」鎖住 → 去挑戰進階（基本也鎖了，跳過）' + pc);
  await shot('10-patterns-tier-locked');
  await ev(`document.querySelector('#app .kl-card .kl-go').click(); return 1`); await sleep(300);
  assert(await ev(`return location.hash === '#learn/patterns' && document.querySelector('input[name="plv"][value="3"]').checked`), '按「去挑戰」→ 句型頁選到進階');
  await ev(`document.getElementById('pgo').click(); return 1`); await sleep(300);
  assert(await ev(`return location.hash === '#quiz' && !document.querySelector('.kl-card')`), '每日清單：句型（進階）照常開始一回');
  await go('/index.html#learn/patterns'); await ev(HOOK); await sleep(200); await ev(`document.querySelector('input[name="plv"][value=""]').click(); return 1`); await sleep(100); await ev(`document.getElementById('pgo').click(); return 1`); await sleep(300);
  assert(await ev(`return location.hash === '#quiz'`), '每日清單：句型「全部等級」不鎖');
  await go('/index.html#learn/phrases'); await ev(HOOK); await sleep(200); await ev(`document.getElementById('phgo').click(); return 1`); await sleep(300);
  assert(await ev(`return location.hash === '#quiz'`), '每日清單：片語（全部等級）照常開始一回');
  // 閱讀、歷史、地理：最後一個永遠不鎖
  await go('/chinese/reading.html?a=zh4-25'); assert(await ev(`return !document.getElementById('kl-gate')`), '每日清單：閱讀——國語最後一篇（zh4-25）不鎖（國語全部做 2 次也有得讀）');
  await go('/comics/v7e6.html'); assert(await ev(`return !document.getElementById('kl-gate')`), '每日清單：歷史——最後一話（v7e6）不鎖');
  await go('/geo/unit.html?u=w7'); assert(await ev(`return !document.getElementById('kl-gate')`), '每日清單：地理——最後一個單元（南極洲 w7）不鎖');
  await go('/geo/unit.html?u=m1'); const gg = await ev(`const k = document.getElementById('kl-gate'); return k ? k.querySelector('.kl-go').getAttribute('href') : JSON.stringify([!!window.KidsLock, window.KidsLock && KidsLock.state('geo:m1'), location.pathname])`);
  assert(/#s\/geo\/w7$/.test(gg), '地理全部做 2 次：m1 鎖住 → 去挑戰唯一沒鎖的最後一個（南極洲 w7） ' + gg);
  await go('/index.html'); await ev(HOOK); await sleep(300);
  const T = await ev(`const T = KidsDaily.today(); return T.rows.map(r => r.key + ':' + r.href)`);
  assert(T.length === 5, '每日清單 5 項都在：' + T.join(' '));
  await go('/index.html#parent'); await sleep(300);
  const many = await ev(`return document.querySelectorAll('#kl-parent li').length`);
  assert(many > 100, '全部鎖住時家長頁列出 ' + many + ' 個上鎖單元');
}

(async () => {
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'kl-chrome-'));
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
    console.log(log.join('\n') + '\nPASS kids-lock-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
