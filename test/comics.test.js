/* test/comics.test.js — 世界史漫畫《時光搖搖車》全系列檢查（規格：comics/CONTRACT.md）。
   用法：
     node test/comics.test.js                 資料檢查：目錄 42 話、每一話的 data 結構、元件都存在、畫得出來（不會有 NaN）、測驗、連結
     node test/comics.test.js v1e3            只檢查這一話（平行做的人用）
     node test/comics.test.js --browser [id] [--out 截圖夾]   再用無頭 Chrome 開每一話：0 JS 錯誤、泡泡不出格／不疊／不蓋臉、
                                              直向一格一格翻完、測驗做完、橫向、375 寬不左右捲動、目錄頁連結都通（PORT 用環境變數 CM_PS／CM_PD 換）
   會檢查的話：catalog.js 標 ready 的＋comics/data 底下有檔的（還沒上架但做好了也會被檢查）。 */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), CM = path.join(root, 'comics');
const argv = process.argv.slice(2), BROWSER = argv.includes('--browser'), OUTI = argv.indexOf('--out');
const ONLY = argv.filter((a, i) => /^v\d+e\d+$/.test(a) && argv[i - 1] !== '--out');
const QK = require(path.join(root, 'quizkit.js')), A = require(path.join(CM, 'art.js')), CAT = require(path.join(CM, 'catalog.js'));
let pass = 0, fail = 0; const warns = [];
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('✗ ' + m); } return !!c; };
const str = x => typeof x === 'string' && x.trim().length > 0;
const len = s => String(s).replace(/\s/g, '').length;

// ---------- 目錄 ----------
const ALL = CAT.vols.flatMap(v => v.eps.map((e, i) => Object.assign({ vol: v.no, ep: i + 1, volT: v.t }, e)));
ok(CAT.vols.length === 7 && CAT.vols.every((v, i) => v.no === i + 1 && v.eps.length === 6 && str(v.t) && str(v.span)), '目錄：7 冊 × 6 話');
ok(ALL.every(e => e.id === `v${e.vol}e${e.ep}` && str(e.t) && str(e.when) && str(e.where)), '目錄：id＝v{冊}e{話}，每話有標題、時間、地點');
ok(new Set(ALL.map(e => e.t)).size === ALL.length, '目錄：標題不重複');
const has = id => fs.existsSync(path.join(CM, 'data', id + '.js'));
ALL.forEach(e => {
  const files = has(e.id) && fs.existsSync(path.join(CM, e.id + '.html'));
  if (e.ready) ok(files, `目錄：${e.id} 標了 ready，但 ${e.id}.html 或 data/${e.id}.js 不存在（壞連結）`);
  else if (files) warns.push(`${e.id} 檔案做好了但目錄還沒標 ready（整合的人上架時改 catalog.js）`);
});
// 目錄頁、首頁入口
{
  const ix = fs.readFileSync(path.join(CM, 'index.html'), 'utf8').replace(/\?v=[0-9a-f]+"/g, '"'), sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8');
  ok(ix.includes('src="catalog.js"') && ix.includes('href="../index.html#s/history"') && /e\.ready \?/.test(ix), '目錄頁：載入 catalog.js、回歷史、只有 ready 的給連結');
  ok(sj.includes("href: 'comics/index.html'"), '首頁歷史分頁：一張卡進目錄頁');
}

// ---------- 每一話 ----------
const IDS = ALL.filter(e => (e.ready || has(e.id)) && (!ONLY.length || ONLY.includes(e.id))).map(e => e.id);
ok(IDS.length > 0, '至少有一話可以檢查' + (ONLY.length ? '：' + ONLY.join(',') : ''));
const ctx = { ComicArt: A }; vm.createContext(ctx);   // 所有話放同一個 context：extend 的名字撞到就會丟錯
let longestAll = 0, mcAll = 0;
const SCRIPTS = ['../syncmerge.js', '../kids-daily.js', '../quizkit.js', '../chinese/reading-core.js', 'art.js', 'comic.js', 'catalog.js'];
IDS.forEach(id => {
  const W = m => id + '：' + m, meta = ALL.find(e => e.id === id), idx = ALL.indexOf(meta);
  try { vm.runInContext(fs.readFileSync(path.join(CM, 'data', id + '.js'), 'utf8'), ctx, { filename: id + '.js' }); } catch (e) { ok(false, W('data 檔跑不起來：' + e.message)); return; }
  const ep = ctx.COMIC_DATA && ctx.COMIC_DATA[id];
  if (!ok(ep && ep.id === id, W('COMIC_DATA.' + id + ' 不存在'))) return;
  // 基本欄位、跟目錄對得上
  ['title', 'vol', 'next', 'note', 'curriculum'].forEach(k => ok(str(ep[k]), W('沒有 ' + k)));
  ok(ep.title === meta.t, W(`title「${ep.title}」跟目錄「${meta.t}」不一樣`));
  ok(ep.volNo === meta.vol && ep.ep === meta.ep && ep.vol === `第 ${meta.vol} 冊 ${meta.volT}`, W(`volNo／ep／vol 要是 ${meta.vol}／${meta.ep}／「第 ${meta.vol} 冊 ${meta.volT}」`));
  const nx = ALL[idx + 1]; ok(nx ? ep.next === nx.t : str(ep.next), W(`next 要是下一話的標題「${nx ? nx.t : ''}」`));
  ok(ep.series && ep.series.zh === '時光搖搖車' && str(ep.series.en), W('series'));
  ok(!ep.perfect || str(ep.perfect), W('perfect 要是字串'));
  // 分鏡
  const panels = ep.pages.flatMap(pg => pg.panels);
  ok(panels.length >= 9 && panels.length <= 13, W('格數要 9～13，現在 ' + panels.length));
  ok(new Set(ep.pages.map(pg => pg.layout)).size >= 3, W('版面至少 3 種'));
  let words = 0;
  const cover = Object.assign({ shot: '封面' }, ep.cover);
  [{ layout: '_cover', panels: [cover] }].concat(ep.pages).forEach((pg, pi) => {
    const L = pg.layout === '_cover' ? [{ x: 10, y: 10, w: 780, h: 1040 }] : A.LAYOUTS[pg.layout];
    if (!ok(L, W(`第 ${pi} 頁版面 ${pg.layout} 不存在`))) return;
    ok(L.length === pg.panels.length, W(`第 ${pi} 頁 ${pg.layout} 要 ${L.length} 格，資料 ${pg.panels.length} 格`));
    pg.panels.forEach((p, i) => {
      const w = (pi ? `第 ${pi} 頁第 ${i + 1} 格 ` : '封面 '), s = L[i]; if (!s) return;
      ok(A.SCENES[p.scene], W(w + '場景不存在 ' + p.scene));
      ok(str(p.shot), W(w + '沒有分鏡說明 shot'));
      (p.actors || []).forEach(a => { ok(A.CAST[a.c], W(w + '角色不存在 ' + a.c)); ok(!a.pose || A.POSES[a.pose], W(w + '姿勢不存在 ' + a.pose)); ok(!a.expr || A.EXPR[a.expr], W(w + '表情不存在 ' + a.expr)); [].concat(a.hold || []).forEach(h => ok(['notebook', 'tablet', 'tabletBlank', 'cup', 'spoon', 'sack', 'reed'].includes(h) || A.HOLDS[h], W(w + '手上的東西不存在 ' + h))); });
      (p.back || []).concat(p.props || []).forEach(x => ok(A.PROPS[x.k], W(w + '道具不存在 ' + x.k)));
      (p.bubbles || []).forEach(b => {
        ok(str(b.t), W(w + '泡泡沒字')); words += len(b.t);
        ok(len(b.t) <= 36, W(w + '泡泡字太多（≤36）：' + b.t));
        ok(b.x >= 0 && b.y >= 0 && b.w >= 100 && b.x + b.w <= s.w, W(w + '泡泡超出格子左右或太窄：' + b.t));
        ok(!b.kind || ['say', 'shout', 'think', 'car'].includes(b.kind), W(w + '泡泡 kind 只能 say/shout/think/car'));
        ok(!/血|屍|砍頭|斬首|殺死/.test(b.t), W(w + '漫畫格裡不寫血腥字眼：' + b.t));
      });
      (p.caption || []).forEach(c => { ok(str(c.t) && c.x >= 0 && (!c.w || c.x + c.w <= s.w), W(w + '旁白：' + c.t)); words += len(c.t); ok(!/血|屍|砍頭|斬首/.test(c.t), W(w + '旁白不寫血腥字眼')); });
      (p.cards || []).forEach(c => { ok(A.ICONS[c.icon] && str(c.t), W(w + '字卡圖示或文字')); words += len(c.t); });
      if (pi) ok((p.bubbles || []).length + (p.caption || []).length + (p.cards || []).length > 0, W(w + '這格沒有字'));
      // 真實人物說話要標「改編」
      if ((p.actors || []).some(a => A.CAST[a.c] && A.CAST[a.c].real) && (p.bubbles || []).length) ok(p.tag && /改編|想像/.test(p.tag.t), W(w + '有真實人物、又有對話的格子，tag 要寫「改編自…」'));
      // 畫得出來
      let svg = ''; try { svg = A.panelSvg(p, s.w, s.h); } catch (e) { ok(false, W(w + '畫不出來：' + e.message)); }
      ok(svg && !/NaN|undefined/.test(svg), W(w + '畫出來有 NaN／undefined（座標或參數漏寫）'));
    });
  });
  ok(words >= 300 && words <= 1000, W('漫畫部分總字數要 300～1000（第 1 話約 650），現在 ' + words));
  ok(panels.slice(-1)[0].caption && panels.slice(-1)[0].caption.some(c => c.t.includes('下一話')), W('最後一格要有「下一話：…」旁白'));
  // 看完以後
  ok(Array.isArray(ep.recap) && ep.recap.length >= 3 && ep.recap.length <= 5 && ep.recap.every(r => str(r.h) && str(r.t)), W('重點要 3～5 點'));
  const m = ep.map || {};
  ok(m.cities && m.cities.some(c => c.main) && str(m.cap) && str(m.alt), W('地圖要有 cap、alt、一個 main 城市'));
  if (m.bounds) {
    ok(m.bounds.lon[0] < m.bounds.lon[1] && m.bounds.lat[0] < m.bounds.lat[1], W('地圖 bounds 要 [小, 大]'));
    (m.cities || []).forEach(c => ok(c.lat > m.bounds.lat[0] && c.lat < m.bounds.lat[1] && c.lon > m.bounds.lon[0] && c.lon < m.bounds.lon[1], W('城市在地圖範圍外：' + c.n)));
    (m.rivers || []).forEach(r => ok(typeof r === 'string' ? A.GEO.rivers[r] : (r.pts || A.GEO.rivers[r.k]), W('河流不存在：' + JSON.stringify(r).slice(0, 40))));
  } else ok(id === 'v1e1', W('地圖要寫 bounds（只有第 1 話用兩河流域專用圖）'));
  let ms = ''; try { ms = A.map(m); } catch (e) { ok(false, W('地圖畫不出來：' + e.message)); }
  ok(ms && !/NaN|undefined/.test(ms), W('地圖有 NaN／undefined'));
  const tl = (ep.timeline || {}).items || [];
  ok(tl.length >= 3 && tl.every((t, i, a) => Number.isFinite(t.y) && str(t.when) && str(t.t) && (!i || t.y > a[i - 1].y)) && tl.filter(t => t.main).length === 1 && str(ep.timeline.cap), W('時間軸：至少 3 個、照年代排、剛好一個 main、有 cap'));
  ok(!/NaN|undefined/.test(A.timeline(tl)), W('時間軸畫不出來'));
  ok(Array.isArray(ep.sources) && ep.sources.length >= 2 && ep.sources.every(str), W('資料來源至少 2 筆'));
  // 測驗
  ok(ep.quiz.length === 5, W('測驗要 5 題'));
  let longest = 0, mc = 0;
  ep.quiz.forEach((q, i) => {
    const w = W(`第 ${i + 1} 題 `);
    QK.validate(q).forEach(e => ok(false, w + e));
    ok([1, 2, 3].includes(q.d), w + 'd 要 1|2|3'); if (i) ok(q.d >= ep.quiz[i - 1].d, w + 'd 要由小到大');
    ok(q.id === 'q' + (i + 1), w + 'id 要 q1～q5');
    if (q.type === 'mc') { mc++; const L = q.opts.map(len), mx = Math.max(...L); if (L[q.a] === mx && L.filter(x => x === mx).length === 1) longest++; }
  });
  ok(ep.quiz[0].d < ep.quiz[4].d, W('要由易到難'));
  ok(ep.quiz.some(q => q.type !== 'mc'), W('至少 1 題不是單選（order／match／tf）'));
  ok(!mc || longest / mc <= .25, W(`「正解是唯一最長的選項」${longest}/${mc} 題，要 ≤25%`));
  longestAll += longest; mcAll += mc;
  // 頁面：該載的都載、檔案都在（沒有壞連結）
  const hp = path.join(CM, id + '.html');
  if (ok(fs.existsSync(hp), W(id + '.html 不存在'))) {
    const h = fs.readFileSync(hp, 'utf8').replace(/\?v=[0-9a-f]+"/g, '"'), srcs = [...h.matchAll(/(?:src|href)="([^"#?]+)/g)].map(x => x[1]).filter(u => !/^(https?:|mailto:)/.test(u));
    srcs.forEach(u => ok(fs.existsSync(path.join(CM, u)), W('頁面連到不存在的檔：' + u)));
    const order = SCRIPTS.concat(`data/${id}.js`).map(f => h.indexOf(`src="${f}"`));
    ok(order.every((v, i) => v >= 0 && (!i || v > order[i - 1])), W('頁面要照順序載入：' + SCRIPTS.concat(`data/${id}.js`).join(' → ')));
    ok(h.includes(`KidsComic.mount(COMIC_DATA.${id})`) && h.includes('href="index.html"') && h.includes(`<title>時光搖搖車 第 ${meta.vol} 冊第 ${meta.ep} 話 ${ep.title}</title>`), W(`頁面要 mount 這一話、← 目錄連回 index.html、<title>時光搖搖車 第 ${meta.vol} 冊第 ${meta.ep} 話 ${ep.title}</title>`));
  }
});
ok(!mcAll || longestAll / mcAll <= .25, `全系列「正解是唯一最長的選項」${longestAll}/${mcAll}，要 ≤25%`);
warns.forEach(w => console.log('⚠ ' + w));
console.log(`comics.test: ${IDS.length} 話（${IDS.join(' ')}）｜正解唯一最長 ${longestAll}/${mcAll}｜${pass} passed, ${fail} failed`);
if (fail || !BROWSER) process.exit(fail ? 1 : 0);

// =====================================================================================================
// 無頭 Chrome（--browser）
// =====================================================================================================
const http = require('http'), os = require('os'), { spawn } = require('child_process');
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.CM_PS || 8891, PD = +process.env.CM_PD || 9431, ORIGIN = `http://127.0.0.1:${PS}`;
const OUT = OUTI > 0 ? path.resolve(argv[OUTI + 1]) : null;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
const srv = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, ORIGIN).pathname); if (p.endsWith('/')) p += 'index.html';
  const f = path.join(root, p); if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
});
let ws, seq = 0; const pend = new Map(), errors = [];
const cdp = (method, params = {}) => { const id = ++seq; ws.send(JSON.stringify({ id, method, params })); return new Promise((y, n) => pend.set(id, { y, n, method })); };
async function ev(expr) { const r = await cdp('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 300)); return r.result.value; }
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(500); for (let i = 0; i < 50 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(200); }
async function size(w, h) { await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 768 }); await sleep(250); }
async function shot(name) { if (!OUT) return; const r = await cdp('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(path.join(OUT, name), Buffer.from(r.data, 'base64')); }
const noH = 'return document.documentElement.scrollWidth <= window.innerWidth + 1';
// 這一頁所有格子：泡泡／旁白／字卡不出格、泡泡不互相疊、泡泡不蓋到臉（頭心）
const LAYOUT_CHECK = `const out = [], A = ComicArt, ep = window.__ep, st = __comic.steps[__comic.cur]; if (st.kind !== 'panel') return out;
  document.querySelectorAll('#cm-book .cm-panel').forEach(sec => {
    const ci = +sec.dataset.ci, p = ep.pages[st.page].panels[ci], W = sec.offsetWidth, H = sec.offsetHeight, tag = '第 ' + (st.page + 1) + ' 頁第 ' + (ci + 1) + ' 格';
    const boxes = [...sec.querySelectorAll('.cm-b')].map(b => ({ t: b.textContent, x: b.offsetLeft, y: b.offsetTop, w: b.offsetWidth, h: b.offsetHeight }));
    sec.querySelectorAll('.cm-b,.cm-cap,.cm-card,.cm-tag').forEach(b => { if (b.offsetTop + b.offsetHeight > H + 2 || b.offsetLeft + b.offsetWidth > W + 2) out.push(tag + ' 字跑出格子：' + b.textContent.slice(0, 16)); });
    boxes.forEach((a, i) => boxes.slice(i + 1).forEach(b => { if (a.x < b.x + b.w - 2 && b.x < a.x + a.w - 2 && a.y < b.y + b.h - 2 && b.y < a.y + a.h - 2) out.push(tag + ' 泡泡疊在一起：' + a.t.slice(0, 8) + '／' + b.t.slice(0, 8)); }));
    (p.actors || []).forEach(a => { const hd = A.headOf(a); boxes.forEach(b => { if (hd.x > b.x + hd.r * .3 && hd.x < b.x + b.w - hd.r * .3 && hd.y > b.y + hd.r * .3 && hd.y < b.y + b.h - hd.r * .3) out.push(tag + ' 泡泡蓋到 ' + a.c + ' 的臉：' + b.t.slice(0, 10)); }); });
  }); return out;`;

(async () => {
  if (OUT) fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'cm-chrome-'));
  const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PD}`, `--user-data-dir=${prof}`, '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--mute-audio', 'about:blank'], { stdio: 'ignore' });
  let code = 0, bpass = 0; const bad = [];
  const bok = (c, m) => { if (c) bpass++; else bad.push(m); };
  try {
    let tgt; for (let i = 0; i < 60 && !tgt; i++) { try { tgt = (await (await fetch(`http://127.0.0.1:${PD}/json/list`)).json()).find(t => t.type === 'page'); } catch (e) { } if (!tgt) await sleep(250); }
    ws = new WebSocket(tgt.webSocketDebuggerUrl); await new Promise(r => ws.addEventListener('open', r));
    ws.addEventListener('message', m => {
      const d = JSON.parse(m.data);
      if (d.id && pend.has(d.id)) { const p = pend.get(d.id); pend.delete(d.id); d.error ? p.n(new Error(p.method + ': ' + d.error.message)) : p.y(d.result); }
      else if (d.method === 'Runtime.exceptionThrown') errors.push('exception: ' + JSON.stringify(d.params.exceptionDetails).slice(0, 300));
      else if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errors.push('console.error: ' + JSON.stringify(d.params.args).slice(0, 300));
      else if (d.method === 'Fetch.requestPaused') { const u = d.params.request.url; if (u.startsWith(ORIGIN) || u.startsWith('data:')) cdp('Fetch.continueRequest', { requestId: d.params.requestId }).catch(() => { }); else cdp('Fetch.failRequest', { requestId: d.params.requestId, errorReason: 'BlockedByClient' }).catch(() => { }); }
    });
    await cdp('Runtime.enable'); await cdp('Page.enable'); await cdp('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
    await cdp('Page.addScriptToEvaluateOnNewDocument', { source: 'window.__comicTest = 1; window.speechSynthesis && (window.speechSynthesis.speak = function(){});' });
    for (const id of IDS) {
      const e0 = errors.length, page = `/comics/${id}.html`;
      // 直向 iPad：一格一格翻、每頁拍一張、版面檢查
      await size(820, 1180); await go(page);
      await ev(`window.__ep = COMIC_DATA['${id}']; return 1`);
      const n = await ev('return __comic.steps.length'); let lastPage = -2;
      for (let i = 0; i < n; i++) {
        await ev(`__comic.go(${i}); return 1`); await sleep(60);
        const st = await ev(`const s = __comic.steps[${i}]; return { kind: s.kind, page: s.page, last: !__comic.steps[${i + 1}] || __comic.steps[${i + 1}].page !== s.page }`);
        if (st.kind === 'panel') { (await ev(LAYOUT_CHECK)).forEach(x => bok(false, id + ' ' + x)); if (st.last) await shot(`${id}-p${String(st.page + 1).padStart(2, '0')}.png`); lastPage = st.page; }
        if (st.kind === 'cover') await shot(`${id}-p00-cover.png`);
        if (st.kind === 'recap' || st.kind === 'where') { bok(await ev(`return document.querySelector('#cm-sheet h2') && !document.getElementById('cm-sheet').hidden`), id + ' ' + st.kind + ' 頁'); await shot(`${id}-${st.kind}.png`); }
      }
      // 測驗：第 1 題故意答錯（要出現解析），其他照正解用點的作答，最後看結果頁
      for (let q = 0; q < 5; q++) {
        await ev(`const c = (s, v) => { const b = document.querySelector('#cm-sheet [data-qk="' + s + '"]' + (v != null ? '[data-v="' + v + '"]' : '')); if (b) b.click(); };
          const Q = __comic.quiz.items[__comic.quiz.i].q, wrong = ${q === 0};
          if (Q.type === 'mc') c('mc', wrong ? (Q.a + 1) % Q.opts.length : Q.a);
          if (Q.type === 'tf') c('tf', String(wrong ? !Q.a : Q.a));
          if (Q.type === 'order') { const n = Q.items.length; for (let i = 0; i < n; i++) c('oPick', wrong ? n - 1 - i : i); c('oCheck'); }
          if (Q.type === 'match') { const n = Q.pairs.length; for (let i = 0; i < n; i++) { c('mL', i); c('mR', wrong ? (i + 1) % n : i); } c('mCheck'); }
          return 1`);
        bok(await ev(`return !!document.querySelector('#cm-sheet .fb.${q === 0 ? 'no' : 'ok'}')`), `${id} 第 ${q + 1} 題${q === 0 ? '答錯有解析' : '答對'}`);
        await ev(`const b = document.querySelector('[data-c="nextq"]'); if (b) b.click(); return 1`);
      }
      const res = await ev(`const s = document.getElementById('cm-sheet'); return { h: (s.querySelector('h2') || {}).textContent || '', next: !!s.querySelector('.cm-next a.btn'), cat: !!s.querySelector('a[href="index.html"]') }`);
      const meta = ALL.find(e => e.id === id), nx = ALL[ALL.indexOf(meta) + 1];
      bok(/答對 4 \/ 5 題/.test(res.h) && res.cat && res.next === !!(nx && nx.ready), `${id} 結果頁（${res.h}；下一話連結 ${res.next}，目錄說 ${!!(nx && nx.ready)}）`);
      await shot(`${id}-result.png`);
      // 橫向 iPad：一次放大一格
      await size(1180, 820); await go(page + '?p=3'); bok(await ev(`return document.getElementById('cm-book').dataset.mode === 'focus'`), id + ' 橫向放大一格'); await shot(`${id}-landscape.png`);
      // 375 寬：封面、每一頁、重點、地圖、測驗都不左右捲動
      await size(375, 812); await go(page);
      for (let i = 0; i < n; i++) { await ev(`__comic.go(${i}); return 1`); bok(await ev(noH), `${id} 375 寬第 ${i} 步左右捲動`); }
      await shot(`${id}-375-quiz.png`);
      bok(errors.length === e0, `${id} JS 錯誤 ${errors.length - e0}：${errors.slice(e0).join(' | ')}`);
      console.log(`  ${id}：${n} 步翻完、測驗做完、橫向／375 寬看過`);
    }
    // 目錄頁
    for (const [w, h] of [[820, 1180], [375, 812]]) {
      await size(w, h); await go('/comics/index.html');
      const c = await ev(`return { vols: document.querySelectorAll('details.cm-vol-box').length, links: [...document.querySelectorAll('a.cm-ep-card')].map(a => a.getAttribute('href')), wip: document.querySelectorAll('.cm-ep-card.wip').length }`);
      const ready = ALL.filter(e => e.ready).length;
      bok(c.vols === 7 && c.links.length === ready && c.links.length + c.wip === 42, `目錄頁 ${w} 寬：7 冊、${ready} 個連結＋${42 - ready} 個製作中（${JSON.stringify({ v: c.vols, l: c.links.length, w: c.wip })}）`);
      for (const u of c.links) bok((await fetch(ORIGIN + '/comics/' + u)).status === 200, '目錄頁連結壞了：' + u);
      bok(await ev(noH), `目錄頁 ${w} 寬左右捲動`); await shot(`catalog-${w}.png`);
    }
    await go('/index.html#s/history'); await sleep(500);
    bok(await ev(`return [...document.querySelectorAll('a.tile')].some(a => a.getAttribute('href') === 'comics/index.html')`), '首頁歷史分頁有漫畫目錄卡');
    bok(errors.length === 0, 'JS 錯誤：' + errors.join(' | '));
  } catch (e) { code = 1; console.log('FAIL', e.stack || e.message); }
  finally {
    bad.forEach(m => console.log('✗ ' + m));
    console.log(`comics.test --browser：${bpass} passed, ${bad.length} failed${OUT ? '｜截圖：' + OUT : ''}`);
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close(); await sleep(400); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code || bad.length ? 1 : 0);
  }
})();
