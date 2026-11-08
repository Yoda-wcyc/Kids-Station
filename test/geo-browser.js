// test/geo-browser.js — 🌍 地理 headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連）。改自國語〈作文〉的 writing-browser.js。
// 用法：node test/geo-browser.js [單元 id…]（預設＝geo/data 裡全部）；環境變數 GEO_PS／GEO_PD 換 port（平行跑時每個人用不同的）、GEO_SHOTS＝截圖資料夾
// 每個單元：820 寬（iPad 直放）重點／練習 3 組／測驗每一題都畫得出來；第一題 drag、第一題 puzzle 用「模擬觸控」拖拉作答到答對；
//           375 寬（手機）重點、各題型都不能左右捲動；全程 JS 例外、console.error 要 0。
// 第一個單元另外：整組 10 題答對 → kids_done.geo.<u>p1＝100；測驗 10 題答對 → <u>t＝100、頁首橫幅顯示；首頁地理分頁 9 個科目分頁、三區可收合、18 張卡。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(__dirname, '..'), OUT = process.env.GEO_SHOTS || '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.GEO_PS || 8885, PD = +process.env.GEO_PD || 9425;
const ORIGIN = `http://127.0.0.1:${PS}`;
const UNITS = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(path.join(SITE, 'geo/data')).filter(f => /^[a-z]\d\.js$/.test(f)).map(f => f.slice(0, -3)).sort();
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const srv = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, ORIGIN).pathname); if (p.endsWith('/')) p += 'index.html';
  if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
  const f = path.join(SITE, p); if (!f.startsWith(SITE)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
});
let ws, seq = 0; const pend = new Map(), errors = [], log = [];
function cdp(method, params = {}) { const id = ++seq; ws.send(JSON.stringify({ id, method, params })); return new Promise((ok, no) => pend.set(id, { ok, no, method })); }
async function ev(expr) { const r = await cdp('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 400)); return r.result.value; }
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(500); for (let i = 0; i < 50 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(150); }
async function width(w) { await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: w >= 768 ? 1180 : 812, deviceScaleFactor: 1, mobile: w < 768 }); await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }); await sleep(150); }
async function shot(name) { if (!OUT) return; const r = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true }); fs.writeFileSync(path.join(OUT, name), Buffer.from(r.data, 'base64')); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
const noH = 'return document.documentElement.scrollWidth <= window.innerWidth + 1';
// 模擬觸控拖拉：從 (x0,y0) 拖到 (x1,y1)
async function touchDrag(x0, y0, x1, y1) {
  const pt = (x, y) => [{ x, y, id: 1, radiusX: 4, radiusY: 4, force: 1 }];
  await cdp('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(x0, y0) });
  for (let k = 1; k <= 8; k++) { await cdp('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt(x0 + (x1 - x0) * k / 8, y0 + (y1 - y0) * k / 8) }); await sleep(16); }
  await cdp('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await sleep(120);
}
// 頁面裡：卡片 i 的中心、目標（圓圈或拼圖位置）在螢幕上的座標
const COORDS = `const R = GeoPage.run(), q = R.qs[R.i], V = Geo.view(q.fig), svg = document.querySelector('#g-q svg.geo-svg'), m = svg.getScreenCTM();
  const tg = q.type === 'drag' ? q.items.map(it => Geo.pinsOf(q, V).find(s => s.id === it.to)) : Geo.slotsOf(q, V);
  const scr = s => { const p = svg.createSVGPoint(); p.x = s.x; p.y = s.y; const r = p.matrixTransform(m); return [Math.round(r.x), Math.round(r.y)]; };`;

async function unitRun(u, first) {
  await width(820);
  await go('/geo/unit.html?u=' + u);
  await ev(`window.KidsAuth = window.KidsAuth || {}; KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; return 1`);   // 測試不登入
  const info = await ev(`const U = Geo.unit('${u}'); return { title: document.getElementById('title').textContent, learn: document.querySelectorAll('#learn .lc').length, nl: U.learn.length, p: U.practice.length, t: U.test.length }`);
  assert(info.learn === info.nl && info.p === 30 && info.t === 10 && /🌍/.test(info.title), `${u}: page ${info.title}, ${info.learn} learn cards`);
  await shot(`${u}-learn.png`);
  // 練習 3 組、每一題都畫得出來
  let dragDone = false, puzzleDone = false;
  for (const g of [1, 2, 3]) {
    await ev(`GeoPage.setTab('prac'); GeoPage.start('prac', ${g}); return 1`);
    for (let i = 0; i < 10; i++) {
      await ev(`GeoPage.goto(${i}); return 1`);
      const q = await ev(`const R = GeoPage.run(), q = R.qs[R.i]; return { id: q.id, type: q.type, card: !!document.getElementById('g-card'), svg: !!document.querySelector('#g-q svg.geo-svg') === !!q.fig, n: (q.items || q.pieces || []).length }`);
      assert(q.card && q.svg, `${q.id} (${q.type}) renders`);
      if ((q.type === 'drag' && !dragDone) || (q.type === 'puzzle' && !puzzleDone)) {
        for (let k = 0; k < q.n; k++) {
          const c = await ev(`${COORDS} const card = document.querySelector('.geo-card[data-v="${k}"]').getBoundingClientRect(); return { from: [Math.round(card.left + card.width / 2), Math.round(card.top + card.height / 2)], to: scr(tg[${k}]) }`);
          await touchDrag(c.from[0], c.from[1], c.to[0], c.to[1]);
        }
        const st = await ev(`const R = GeoPage.run(), q = R.qs[R.i]; return { at: R.m.state().at, want: q.type === 'drag' ? q.items.map(x => x.to) : q.pieces.map(x => x.id), ok: !document.querySelector('[data-g="ok"]').disabled }`);
        assert(JSON.stringify(st.at) === JSON.stringify(st.want) && st.ok, `${q.id}: touch drag placed all ${q.n} (${st.at.join(',')})`);
        await shot(`${q.id}-touch-placed.png`);
        await ev(`document.querySelector('[data-g="ok"]').click(); return 1`); await sleep(80);
        assert(await ev(`return !!document.querySelector('#g-fb .fb.ok')`), `${q.id}: 確定 → 答對了`);
        if (q.type === 'drag') dragDone = true; else puzzleDone = true;
      }
    }
  }
  assert(dragDone && puzzleDone, `${u}: touch-tested a drag and a puzzle question`);
  // 測驗 10 題都畫得出來
  await ev(`GeoPage.setTab('exam'); GeoPage.start('test'); return 1`);
  for (let i = 0; i < 10; i++) { await ev(`GeoPage.goto(${i}); return 1`); assert(await ev(`return !!document.getElementById('g-card')`), `${u} test q${i + 1} renders`); }
  if (first) {
    // 第 1 組全對 → kids_done、卡片；測驗全對 → 100 分、橫幅
    const answerAll = `const R = GeoPage.run(); while (GeoPage.run() && GeoPage.run() === R) { const q = R.qs[R.i], m = R.m; if (q.type === 'mc') m.act('opt', q.a); else { if (q.type === 'tap') m.act('pin', q.a); else (q.type === 'drag' ? q.items.map(x => x.to) : q.pieces.map(x => x.id)).forEach((s, k) => { m.act('card', k); m.act('slot', s); }); m.act('ok'); } document.getElementById('g-next').click(); } return 1`;
    await ev(`localStorage.removeItem('kids_done'); GeoPage.setTab('prac'); GeoPage.start('prac', 1); return 1`);
    await ev(answerAll);
    const r1 = await ev(`return { score: document.getElementById('g-score').textContent, done: JSON.parse(localStorage.getItem('kids_done')).geo }`);
    assert(r1.score === '10 / 10' && r1.done[u + 'p1'] === 100, `${u}: group 1 all right → ${r1.score}, kids_done.geo.${u}p1 = ${r1.done[u + 'p1']}`);
    await ev(`GeoPage.setTab('exam'); GeoPage.start('test'); return 1`);
    await ev(answerAll);
    const r2 = await ev(`return { score: document.getElementById('g-score').textContent, done: JSON.parse(localStorage.getItem('kids_done')).geo, list: document.querySelectorAll('#exam .ri').length }`);
    assert(r2.score === '100 分' && r2.done[u + 't'] === 100 && r2.list === 10, `${u}: test all right → ${r2.score}, kids_done.geo.${u}t = 100, 10 review rows`);
    await go('/geo/unit.html?u=' + u); await sleep(300);
    assert(await ev(`const b = document.getElementById('kdone'); return !b.hidden && b.dataset.status === 'doing'`), `${u}: banner shows 進行中 (p1 + test done, p2/p3 not yet)`);
    await shot(`${u}-banner.png`);
  }
  // 375 寬：重點、四種題型都不能左右捲動
  await width(375);
  await go('/geo/unit.html?u=' + u);
  await ev(`window.KidsAuth = window.KidsAuth || {}; KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; return 1`);
  assert(await ev(noH), `${u} 375: learn no horizontal scroll`);
  const seen = {};
  for (const g of [1, 2, 3]) {
    await ev(`GeoPage.setTab('prac'); GeoPage.start('prac', ${g}); return 1`);
    for (let i = 0; i < 10; i++) {
      const t = await ev(`GeoPage.goto(${i}); return GeoPage.run().qs[${i}].type`);
      if (seen[t]) continue; seen[t] = 1;
      assert(await ev(noH), `${u} 375: ${t} no horizontal scroll`);
      await shot(`${u}-375-${t}.png`);
    }
  }
}

(async () => {
  if (OUT) fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'geo-chrome-'));
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
    for (let k = 0; k < UNITS.length; k++) await unitRun(UNITS[k], k === 0);
    // 首頁：地理分頁
    for (const w of [820, 375]) {
      await width(w);
      await go('/index.html#s/geo'); await sleep(400);
      const H = await ev(`const tabs = [...document.querySelectorAll('#subjects .stab')]; return { tabs: tabs.length, minW: Math.min(...tabs.map(t => t.getBoundingClientRect().width)), oneRow: new Set(tabs.map(t => Math.round(t.getBoundingClientRect().top))).size, books: [...document.querySelectorAll('#subject details.book')].map(d => d.dataset.g), tiles: document.querySelectorAll('#subject .tile').length, noH: document.documentElement.scrollWidth <= innerWidth + 1, desc: (document.querySelector('#subject .tile small') || {}).textContent }`);
      assert(H.tabs === 9 && H.oneRow === 1 && H.minW >= 34 && H.books.join() === '地圖技能,臺灣篇,世界篇' && H.noH, `home ${w}: 9 tabs in one row (min width ${Math.round(H.minW)}px), 3 collapsible parts, no h-scroll`);
      await ev(`document.querySelectorAll('#subject details.book').forEach(d => d.open = true); return 1`); await sleep(100);
      assert(await ev(`return document.querySelectorAll('#subject .tile').length`) === 18 && await ev(noH), `home ${w}: 18 unit tiles, no h-scroll when all open`);
      await shot(`home-geo-${w}.png`);
    }
    await ev(`location.hash = '#s/geo/t1'; return 1`); await sleep(600);
    assert(await ev(`const f = document.querySelector('.frame-wrap iframe'); return !!f && /geo\\/unit\\.html\\?u=t1/.test(f.src)`), 'tile t1 opens geo/unit.html?u=t1 in the frame');
    await width(820);
    assert(errors.length === 0, 'JS errors: ' + errors.length);
    console.log(log.join('\n') + '\nPASS geo-browser ' + UNITS.join(' '));
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
