// test/geo-browser.js — 🌍 地理 headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連）。改自國語〈作文〉的 writing-browser.js。
// 用法：node test/geo-browser.js [單元 id…]（預設＝geo/data 裡全部）；環境變數 GEO_PS／GEO_PD 換 port（平行跑時每個人用不同的）、GEO_SHOTS＝截圖資料夾
// 每個單元：820 寬（iPad 直放）重點／練習 3 組／測驗每一題都畫得出來、拖拉題的卡片不用捲就看得到；第一題 drag、第一題 puzzle 用「模擬觸控」拖拉作答到答對；
//           375 寬（手機）重點、各題型都不能左右捲動；全程 JS 例外、console.error 要 0。
// 第一個單元另外：整組 10 題答對 → kids_done.geo.<u>p1＝100；測驗 10 題答對 → <u>t＝100、頁首橫幅顯示；首頁地理分頁 9 個科目分頁、三區可收合、18 張單元卡＋🗺️ 歷史地圖。
// 2026-11-08 世界篇（w1～w7）另外：🎬 開場短漫畫一格一格翻完、每一格的地點在旁邊地圖亮起來、版面不疊、看完記 kids_done.geo.<u>o、重點頁「這一洲的歷史故事」；
//           🗺️ 歷史地圖（geo/history.html，全部單元一起跑或加 --history）42 話每一點都放大得到、點得到（44px、不跟別的點疊）、卡片連到對的漫畫；漫畫地圖頁的「🌍 在地圖上看這一站」連得過來。
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(__dirname, '..'), OUT = process.env.GEO_SHOTS || '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.GEO_PS || 8885, PD = +process.env.GEO_PD || 9425;
const ORIGIN = `http://127.0.0.1:${PS}`;
const ARGS = process.argv.slice(2), ONLY_U = ARGS.filter(a => a !== '--history'), UNITS = ONLY_U.length ? ONLY_U : ARGS.length ? [] : fs.readdirSync(path.join(SITE, 'geo/data')).filter(f => /^[a-z]\d\.js$/.test(f)).map(f => f.slice(0, -3)).sort();
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

// 開場短漫畫（iframe 裡）：這一格的泡泡／旁白／字卡不出格、不互相疊、不蓋臉
const INTRO_CHECK = `const W = document.querySelector('.gi-frame').contentWindow, D = W.document, A = W.ComicArt, st = W.__comic.steps[W.__comic.cur], out = [];
  const sec = D.querySelector('#cm-book .cm-panel[data-ci="' + st.i + '"]'), p = st.p, Wd = sec.offsetWidth, H = sec.offsetHeight;
  const bx = [...sec.querySelectorAll('.cm-b,.cm-cap,.cm-card')].map(b => ({ t: b.textContent, x: b.offsetLeft, y: b.offsetTop, w: b.offsetWidth, h: b.offsetHeight }));
  bx.forEach(b => { if (b.y + b.h > H + 2 || b.x + b.w > Wd + 2) out.push('字跑出格子：' + b.t.slice(0, 12)); });
  bx.forEach((a, i) => bx.slice(i + 1).forEach(b => { if (a.x < b.x + b.w - 2 && b.x < a.x + a.w - 2 && a.y < b.y + b.h - 2 && b.y < a.y + a.h - 2) out.push('字疊在一起：' + a.t.slice(0, 8) + '／' + b.t.slice(0, 8)); }));
  (p.actors || []).forEach(a => { const hd = A.headOf(a); bx.forEach(b => { if (hd.x > b.x + hd.r * .3 && hd.x < b.x + b.w - hd.r * .3 && hd.y > b.y + hd.r * .3 && hd.y < b.y + b.h - hd.r * .3) out.push('字蓋到 ' + a.c + ' 的臉：' + b.t.slice(0, 10)); }); });
  return out;`;
async function waitFor(expr, ms) { for (let i = 0; i < (ms || 6000) / 100; i++) { if (await ev(expr)) return true; await sleep(100); } return false; }
async function tap(x, y) { for (const type of ['mousePressed', 'mouseReleased']) await cdp('Input.dispatchMouseEvent', { type, x: Math.round(x), y: Math.round(y), button: 'left', clickCount: 1 }); await sleep(150); }
const FRAME_OK = `const f = document.querySelector('.gi-frame'); return !!(f && f.contentWindow.__comic)`;
async function introRun(u) {
  await width(820);
  await go('/geo/unit.html?u=' + u); await ev(`localStorage.removeItem('kids_done'); return 1`); await go('/geo/unit.html?u=' + u);
  assert(await waitFor(FRAME_OK), `${u} intro: iframe loaded`);
  const info = await ev(`const W = document.querySelector('.gi-frame').contentWindow; return { sel: document.getElementById('tab-intro').getAttribute('aria-selected'), first: [...document.querySelectorAll('#tabs .btn')].filter(b => !b.hidden)[0].id, n: W.__comic.steps.length, kinds: [...new Set(W.__comic.steps.map(s => s.kind))].join() }`);
  assert(info.sel === 'true' && info.first === 'tab-intro' && info.n >= 4 && info.n <= 6 && info.kinds === 'panel', `${u} intro: first tab, opens by default, ${info.n} panels only (${JSON.stringify(info)})`);
  for (let i = 0; i < info.n; i++) {
    if (i) await ev(`document.querySelector('.gi-frame').contentWindow.document.getElementById('cm-next').click(); return 1`);
    await sleep(150);
    const st = await ev(`const W = document.querySelector('.gi-frame').contentWindow, p = W.__comic.steps[W.__comic.cur].p; return { cur: W.__comic.cur, want: p.places, lit: [...document.querySelectorAll('#gi-map .gi-on')].map(g => g.dataset.p), cap: document.getElementById('gi-cap').textContent, btn: W.document.getElementById('cm-next').textContent, svg: document.querySelector('#gi-map svg').innerHTML.length }`);
    assert(st.cur === i && JSON.stringify(st.lit) === JSON.stringify(st.want) && st.svg > 1000 && /📍/.test(st.cap), `${u} intro panel ${i + 1}: map lights ${st.want.join(',')} (${st.lit.join(',')})`);
    const bad = await ev(INTRO_CHECK); assert(!bad.length, `${u} intro panel ${i + 1} layout: ${bad.join(' | ')}`);
    if (i === info.n - 1) assert(st.btn === '看完了 ✓', `${u} intro: last panel button 看完了 ✓`);
    await shot(`${u}-intro-${i + 1}.png`);
  }
  await ev(`document.querySelector('.gi-frame').contentWindow.document.getElementById('cm-next').click(); return 1`); await sleep(200);
  const end = await ev(`return { learn: document.getElementById('tab-learn').getAttribute('aria-selected'), seen: (JSON.parse(localStorage.getItem('kids_done') || '{}').geo || {})['${u}o'], tab: document.getElementById('tab-intro').textContent }`);
  assert(end.learn === 'true' && end.seen === 100 && /✓/.test(end.tab), `${u} intro: 看完了 → 📖 重點, kids_done.geo.${u}o = ${end.seen}, tab ${end.tab}`);
  // 看過了：下次進來直接是重點；重點頁最後一張卡＝這一洲的歷史故事
  await go('/geo/unit.html?u=' + u);
  const L = await ev(`const want = GeoHistory.byCo({ w1: 'as', w2: 'eu', w3: 'af', w4: 'na', w5: 'sa', w6: 'oc', w7: 'an' }['${u}'], GeoPlaces, COMIC_CATALOG).filter(e => e.ready).map(e => '../comics/' + e.id + '.html'); const cards = document.querySelectorAll('#learn > .card'); return { learn: document.getElementById('tab-learn').getAttribute('aria-selected'), frame: !!document.querySelector('.gi-frame'), want, got: [...document.querySelectorAll('#geo-history a[href^="../comics/"]')].map(a => a.getAttribute('href')), map: !!document.querySelector('#geo-history a[href="history.html"]'), last: cards[cards.length - 1].id }`);
  assert(L.learn === 'true' && !L.frame && JSON.stringify(L.got) === JSON.stringify(L.want) && L.map && L.last === 'geo-history', `${u}: seen → opens on 重點; 這一洲的歷史故事 ${L.got.length} 話 + 歷史地圖 link (${JSON.stringify(L)})`);
  for (const h of L.got.slice(0, 2)) assert((await fetch(ORIGIN + '/geo/' + h)).status === 200, `${u}: story link ${h} 200`);
  // 橫向 iPad：漫畫一次放大一格、地圖在右邊；375 寬不左右捲動
  await cdp('Emulation.setDeviceMetricsOverride', { width: 1180, height: 820, deviceScaleFactor: 1, mobile: false }); await go('/geo/unit.html?u=' + u + '&tab=prac');
  await ev(`GeoPage.intro.show(); return 1`); assert(await waitFor(FRAME_OK), `${u} landscape: iframe`); await sleep(300);
  const ls = await ev(`const f = document.querySelector('.gi-frame').getBoundingClientRect(), m = document.querySelector('#gi-map svg').getBoundingClientRect(); return { mode: document.querySelector('.gi-frame').contentWindow.document.getElementById('cm-book').dataset.mode, side: m.left >= f.right - 2 && m.top < f.bottom, noH: document.documentElement.scrollWidth <= innerWidth + 1 }`);
  assert(ls.mode === 'focus' && ls.side && ls.noH, `${u} landscape: one panel at a time, map on the side (${JSON.stringify(ls)})`);
  await shot(`${u}-intro-landscape.png`);
  await width(375); await go('/geo/unit.html?u=' + u + '&tab=prac'); await ev(`GeoPage.intro.show(); return 1`); assert(await waitFor(FRAME_OK), `${u} 375: iframe`); await sleep(300);
  assert(await ev(noH), `${u} 375: intro no horizontal scroll`); await shot(`${u}-intro-375.png`);
}
// 🗺️ 歷史地圖：每一話都能放大到「自己一個點」、點得到、卡片對、連結對
async function historyRun() {
  const CAT = require(path.join(SITE, 'comics/catalog.js')), T = {}; CAT.vols.forEach(v => v.eps.forEach(e => { T[e.id] = e.t; }));
  await width(820); await go('/geo/history.html');
  const ids = await ev(`return GeoHistoryPage.eps.map(e => e.id)`);
  assert(ids.length === 42 && ids.every(id => T[id]), 'history: 42 catalog episodes on the map');
  await shot('history-world-820.png');
  // 真的點一下「N 話」大圓圈 → 放大
  const cl = await ev(`const g = document.querySelector('#gh-map [data-cl]'), r = g.querySelector('circle').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, box: JSON.stringify(__gh.box) }`);
  await tap(cl.x, cl.y); assert(await ev(`return JSON.stringify(__gh.box)`) !== cl.box && !(await ev(`return document.getElementById('gh-back').hidden`)), 'history: tapping a cluster zooms in');
  for (const id of ids) {
    await ev(`GeoHistoryPage.home(); GeoHistoryPage.reveal('${id}'); GeoHistoryPage.select(null); return 1`);
    const d = await ev(`const all = [...document.querySelectorAll('#gh-map [data-ep] circle.gh-c, #gh-map [data-cl] > circle:first-child')].map(c => { const r = c.getBoundingClientRect(); return { ep: c.parentNode.dataset.ep, x: r.left + r.width / 2, y: r.top + r.height / 2, r: r.width / 2 }; });
      const me = all.find(a => a.ep === '${id}'); if (!me) return null; me.min = Math.min(...all.filter(a => a !== me).map(a => Math.hypot(a.x - me.x, a.y - me.y) - a.r)); me.inView = me.y > 0 && me.y < innerHeight; return me;`);
    assert(d && d.r >= 20 && d.min >= d.r - 2 && d.inView, `history ${id}: own dot r ${d && Math.round(d.r)}px, nearest other ${d && Math.round(d.min)}px away`);
    await tap(d.x, d.y);
    const c = await ev(`return { t: (document.getElementById('gh-title') || {}).textContent, href: (document.getElementById('gh-open') || { getAttribute() { } }).getAttribute('href') }`);
    assert(c.t === T[id] && c.href === '../comics/' + id + '.html', `history ${id}: tap → card 「${c.t}」 → ${c.href}`);
  }
  for (const id of ids) assert((await fetch(ORIGIN + '/comics/' + id + '.html')).status === 200, 'history: comic page 200 ' + id);
  for (const [id, name] of [['v5e4', 'europe'], ['v1e1', 'mideast'], ['v4e6', 'taiwan'], ['v2e5', 'xian']]) { await go('/geo/history.html?ep=' + id); assert(await ev(`return document.getElementById('gh-title').textContent`) === T[id], `history ?ep=${id} opens its card`); await shot(`history-crowded-${name}.png`); }
  await cdp('Emulation.setDeviceMetricsOverride', { width: 1180, height: 820, deviceScaleFactor: 1, mobile: false }); await go('/geo/history.html?ep=v3e2'); assert(await ev(noH), 'history landscape no h-scroll'); await shot('history-landscape.png');
  await width(375); await go('/geo/history.html'); assert(await ev(noH), 'history 375 no h-scroll'); await shot('history-375.png');
  const bad375 = await ev(`const bad = []; for (const id of GeoHistoryPage.eps.map(e => e.id)) { GeoHistoryPage.home(); GeoHistoryPage.reveal(id);
      const all = [...document.querySelectorAll('#gh-map [data-ep] circle.gh-c, #gh-map [data-cl] > circle:first-child')].map(c => { const r = c.getBoundingClientRect(); return { ep: c.parentNode.dataset.ep, x: r.left + r.width / 2, y: r.top + r.height / 2, r: r.width / 2 }; });
      const me = all.find(a => a.ep === id); if (!me) { bad.push(id + ' missing'); continue; } const mn = Math.min(...all.filter(a => a !== me).map(a => Math.hypot(a.x - me.x, a.y - me.y) - a.r)); if (mn < me.r - 2 || me.r < 20) bad.push(id + ' ' + Math.round(mn)); } return bad;`);
  assert(!bad375.length, 'history 375: every episode reachable as its own 44px dot: ' + bad375.join(' '));
  await go('/geo/history.html?ep=v6e4'); assert(await ev(noH) && await ev(`return document.getElementById('gh-title').textContent`) === T.v6e4, 'history 375 ?ep= works'); await shot('history-375-ep.png');
  // 漫畫的地圖頁 → 歷史地圖，亮起那一話
  await width(820); await go('/comics/v3e2.html');
  const lk = await ev(`const i = __comic.steps.findIndex(s => s.kind === 'where'); __comic.go(i); const a = document.getElementById('cm-geo'); return a && a.getAttribute('href')`);
  assert(lk === '../geo/history.html?ep=v3e2', 'comic where page: 🌍 在地圖上看這一站 → ' + lk);
  await ev(`document.getElementById('cm-geo').click(); return 1`); await sleep(800);
  for (let i = 0; i < 30 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100);
  assert(await ev(`return location.pathname === '/geo/history.html' && document.getElementById('gh-title').textContent === '${T.v3e2}' && !!document.querySelector('#gh-map [data-ep="v3e2"] animate')`), 'comic map link lands on the history map with v3e2 lit');
}

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
      if (q.type === 'drag' || q.type === 'puzzle') {   // 高的圖不能把卡片擠出畫面（820×1180；換題時引擎捲到題目，地圖頂端也要看得到）
        const b = await ev(`const cs = [...document.querySelectorAll('#g-q .geo-card')].map(c => c.getBoundingClientRect()), s = document.querySelector('#g-q svg.geo-svg').getBoundingClientRect(); return { top: Math.round(s.top), bottom: Math.round(Math.max(...cs.map(c => c.bottom))), h: innerHeight }`);
        assert(b.top >= 0 && b.bottom <= b.h, `${q.id}: map top ${b.top} and all drag cards (bottom ${b.bottom}) on one screen`);
      }
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
    await cdp('Page.addScriptToEvaluateOnNewDocument', { source: 'window.__comicTest = 1; window.speechSynthesis && (window.speechSynthesis.speak = function(){});' });   // 漫畫引擎的測試掛勾（iframe 裡也有）
    for (let k = 0; k < UNITS.length; k++) { await unitRun(UNITS[k], k === 0); if (/^w\d$/.test(UNITS[k])) await introRun(UNITS[k]); }
    if (!ARGS.length || ARGS.includes('--history')) await historyRun();
    // 首頁：地理分頁
    for (const w of [820, 375]) {
      await width(w);
      await go('/index.html#s/geo'); await sleep(400);
      const H = await ev(`const tabs = [...document.querySelectorAll('#subjects .stab')]; return { tabs: tabs.length, minW: Math.min(...tabs.map(t => t.getBoundingClientRect().width)), oneRow: new Set(tabs.map(t => Math.round(t.getBoundingClientRect().top))).size, books: [...document.querySelectorAll('#subject details.book')].map(d => d.dataset.g), tiles: document.querySelectorAll('#subject .tile').length, noH: document.documentElement.scrollWidth <= innerWidth + 1, desc: (document.querySelector('#subject .tile small') || {}).textContent }`);
      assert(H.tabs === 9 && H.oneRow === 1 && H.minW >= 34 && H.books.join() === '地圖技能,臺灣篇,世界篇' && H.noH, `home ${w}: 9 tabs in one row (min width ${Math.round(H.minW)}px), 3 collapsible parts, no h-scroll`);
      await ev(`document.querySelectorAll('#subject details.book').forEach(d => d.open = true); return 1`); await sleep(100);
      assert(await ev(`return document.querySelectorAll('#subject .tile').length`) === 19 && await ev(noH), `home ${w}: 18 unit tiles + 🗺️ 歷史地圖, no h-scroll when all open`);
      await shot(`home-geo-${w}.png`);
    }
    await ev(`location.hash = '#s/geo/t1'; return 1`); await sleep(600);
    assert(await ev(`const f = document.querySelector('.frame-wrap iframe'); return !!f && /geo\\/unit\\.html\\?u=t1/.test(f.src)`), 'tile t1 opens geo/unit.html?u=t1 in the frame');
    await ev(`location.hash = '#s/geo/history'; return 1`); await sleep(600);
    assert(await ev(`const f = document.querySelector('.frame-wrap iframe'); return !!f && /geo\\/history\\.html/.test(f.src)`), 'tile 🗺️ 歷史地圖 opens geo/history.html in the frame');
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
