// test/wordcards-browser.js — 單字卡改版（2026-11-23）headless Chrome 實測（CDP；本機靜態伺服器、擋掉所有外連、不碰線上同步）。改自 test/norepeat-browser.js。
// 用法：node test/wordcards-browser.js [網站資料夾，預設＝正本] [截圖資料夾，預設不存]；環境變數 WC_PS／WC_PD 換 port
// iPad 820×1180：
//   1. 單字卡頁沒有等級、來源選單、卡片沒有等級標籤；第一張卡是等級 2；「x/路徑字數 已學會」；首頁沒先載音節資料，進單字卡才載
//   2. 音節底線：ability＝a／bi／li／ty 四段、相鄰顏色不同、線之間有空隙；cat 一段
//   3. 片語卡、課本單字卡、字根例字、gept/words.html 都有底線
//   4. 拼字題（聽寫拼字）題目上沒有底線
//   5. 練習設定沒有等級、來源；家長頁可以指定範圍，單字卡跟著變
//   全程 0 個 JS 錯誤、不左右捲
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), { spawn } = require('child_process');
const SITE = path.resolve(process.argv[2] || path.join(__dirname, '..')), SHOTS = process.argv[3] ? path.resolve(process.argv[3]) : '';
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', PS = +process.env.WC_PS || 8977, PD = +process.env.WC_PD || 9477;
const ORIGIN = `http://127.0.0.1:${PS}`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
const reqs = [];
const srv = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, ORIGIN).pathname); if (p.endsWith('/')) p += 'index.html';
  reqs.push(p);
  if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
  const f = path.join(SITE, p); if (!f.startsWith(SITE)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end('404'); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(b); });
});
let ws, seq = 0; const pend = new Map(), errors = [], log = [];
function cdp(method, params = {}) { const id = ++seq; ws.send(JSON.stringify({ id, method, params })); return new Promise((ok, no) => pend.set(id, { ok, no, method })); }
async function ev(expr) { const r = await cdp('Runtime.evaluate', { expression: `(async()=>{${expr}})()`, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails).slice(0, 600)); return r.result.value; }
async function go(url) { await cdp('Page.navigate', { url: ORIGIN + url }); await sleep(450); for (let i = 0; i < 80 && (await ev('return document.readyState')) !== 'complete'; i++) await sleep(100); await sleep(350); }
const assert = (c, m) => { if (!c) throw new Error(m); log.push('ok ' + m); };
async function shot(name, sel) {
  if (!SHOTS) return;
  let clip;
  if (sel) { const r = await ev(`const e = document.querySelector(${JSON.stringify(sel)}); e.scrollIntoView({ block: 'center' }); const b = e.getBoundingClientRect(); return { x: b.left + scrollX - 8, y: b.top + scrollY - 8, width: b.width + 16, height: b.height + 16 }`); await sleep(150); clip = Object.assign(r, { scale: 3 }); }
  const r = await cdp('Page.captureScreenshot', Object.assign({ format: 'png' }, clip ? { clip, captureBeyondViewport: true } : {}));
  fs.mkdirSync(SHOTS, { recursive: true }); fs.writeFileSync(path.join(SHOTS, name + '.png'), Buffer.from(r.data, 'base64')); log.push('📸 ' + name + '.png');
}
const HOOK = `if (window.KidsAuth) { KidsAuth.requireLogin = () => true; KidsAuth.startActivity = () => true; KidsAuth.configured = () => true; KidsAuth.isLoggedIn = () => true; } return 1`;
const painted = `for (let i = 0; i < 50 && !document.querySelector('.syl[data-syl] .sy'); i++) await new Promise(r => setTimeout(r, 100)); return !!document.querySelector('.syl[data-syl] .sy')`;
const syls = sel => `const e = document.querySelector(${JSON.stringify(sel)}); return e ? [...e.querySelectorAll('.sy')].map(s => ({ t: s.textContent, c: s.className, w: s.getBoundingClientRect().width, l: s.getBoundingClientRect().left, bs: getComputedStyle(s).backgroundSize, bi: getComputedStyle(s).backgroundImage })) : null`;

async function run() {
  await cdp('Emulation.setDeviceMetricsOverride', { width: 820, height: 1180, deviceScaleFactor: 1, mobile: false });
  await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });

  // ---- 1. 首頁不載音節；單字卡頁 ----
  await go('/index.html'); await ev(`localStorage.clear(); return 1`); reqs.length = 0;
  await go('/index.html'); await sleep(300);
  assert(!reqs.some(p => /syllables/.test(p)) && await ev(`return !window.DATA_SYLLABLES && !!window.KSyl`), 'home page: syllable data not loaded');
  await go('/index.html#learn/words'); await ev(HOOK);
  assert(await ev(painted), 'word cards: syllable lines painted after lazy load');
  assert(reqs.some(p => p === '/data/syllables.js') && !reqs.some(p => /syllables-gept/.test(p)), 'word cards loaded data/syllables.js only (not syllables-gept.js)');
  const W = await ev(`const first = document.querySelector('#wl .card .w').textContent, w = DATA_WORDS.find(x => x.w === first); const path = DATA_WORDS.filter(x => x.lv !== 1).length;
    return { flv: !!document.getElementById('flv'), fsrc: !!document.getElementById('fsrc'), lvb: document.querySelectorAll('#wl .lvb').length, first, lv: w && w.lv, prog: document.getElementById('prog').textContent, path, ftag: !!document.getElementById('ftag'), new8: DATA_WORDS.filter(x => x.src === 'cefrj-a2').length }`);
  assert(!W.flv && !W.fsrc && W.lvb === 0, 'word cards: no level / source select, no level badge on cards ' + JSON.stringify(W));
  assert(W.lv === 2, 'first card is level 2: ' + W.first + ' lv' + W.lv);
  assert(W.prog === `單字 0/${W.path} 已學會` && W.path === 2382 && W.new8 === 519, 'progress denominator = words in the path (no lv1, with words-8): ' + W.prog);
  await shot('1-word-cards');

  // ---- 2. ability、cat ----
  await ev(`const q = document.getElementById('fq'); q.value = 'ability'; q.dispatchEvent(new Event('input')); return 1`); await sleep(500); await ev(painted);
  const ab = await ev(syls('#wl .card .w'));
  assert(ab && ab.map(s => s.t).join('/') === 'a/bi/li/ty', 'ability → a/bi/li/ty ' + JSON.stringify(ab && ab.map(s => s.t)));
  assert(ab.every((s, i) => i === 0 || s.c !== ab[i - 1].c) && ab.every(s => /100% - 3px/.test(s.bs) && / 3px$/.test(s.bs)) && ab[0].bi !== ab[1].bi, 'ability: adjacent colours differ, each line 3px shorter than its syllable (gap) ' + JSON.stringify(ab.map(s => [s.c, s.bs])));
  await shot('2-ability-closeup', '#wl .card');
  await shot('2b-ability-word-zoom', '#wl .card .w');
  await ev(`const q = document.getElementById('fq'); q.value = 'cat'; q.dispatchEvent(new Event('input')); return 1`); await sleep(500); await ev(painted);
  const cat = await ev(`const c = [...document.querySelectorAll('#wl .card .w')].find(e => e.textContent === 'cat'); return c ? [...c.querySelectorAll('.sy')].map(s => s.textContent) : 'no cat card'`);
  assert(JSON.stringify(cat) === '["cat"]' || cat === 'no cat card', 'cat: one segment (or cat is level 1 and off the cards) ' + JSON.stringify(cat));
  // cat 是等級 1（已下架、不在卡片上）：改找路徑裡第一個單音節字（例如 giraffe 之後的 bear 這類），一整條線
  const one = await ev(`return DATA_WORDS.find(x => x.lv !== 1 && /^[a-z]{3,5}$/.test(x.w) && DATA_SYLLABLES[x.w] === x.w).w`);
  await ev(`const q = document.getElementById('fq'); q.value = ${JSON.stringify(one)}; q.dispatchEvent(new Event('input')); return 1`); await sleep(500); await ev(painted);
  const cat2 = await ev(`const c = [...document.querySelectorAll('#wl .card .w')].find(e => e.textContent === ${JSON.stringify(one)}); return c ? [c.textContent, [...c.querySelectorAll('.sy')].map(s => s.textContent)] : null`);
  assert(cat2 && cat2[1].length === 1 && cat2[1][0] === one, 'one-syllable word on the cards: one whole line ' + JSON.stringify(cat2));
  await shot('2c-one-syllable-' + one, '#wl .card .w');
  await ev(`const q = document.getElementById('fq'); q.value = 'seventy'; q.dispatchEvent(new Event('input')); return 1`); await sleep(500); await ev(painted);
  const sev = await ev(syls('#wl .card .w'));
  assert(sev && sev.map(s => s.t).join('/') === 'sev/en/ty', 'seventy → sev/en/ty (same split as seven) ' + JSON.stringify(sev && sev.map(s => s.t)));

  // ---- 4. 拼字題：題目上沒有底線（解答畫面可以有） ----
  await ev(`const q = document.getElementById('fq'); q.value = 'ability'; q.dispatchEvent(new Event('input')); return 1`); await sleep(500);
  await ev(`document.getElementById('pw').click(); return 1`); await sleep(400);
  let spellSeen = false;
  for (let k = 0; k < 12 && !spellSeen; k++) {
    const st = await ev(`const c = document.querySelector('.qcard'); if (!c) return null; return { type: c.querySelector('.qtype').textContent, sy: document.querySelectorAll('#app .sy, #app .syl').length, txt: c.textContent }`);
    if (!st) break;
    if (/聽寫拼字/.test(st.type)) { spellSeen = true; await sleep(300); assert(st.sy === 0 && (await ev(`return document.querySelectorAll('#app .sy, #app .syl').length`)) === 0, 'spell question: no syllable lines on the prompt ' + JSON.stringify(st)); await shot('4-spell-no-lines'); break; }
    await ev(`const o = document.querySelector('.opt'); if (o) o.click(); else { const i = document.getElementById('ans'); if (i) { i.value = 'zzz'; document.getElementById('ok').click(); } else { const g = document.querySelectorAll('.gap-in'); g.forEach(x => x.value = 'z'); const b = document.getElementById('ok'); if (b) b.click(); } } return 1`); await sleep(150);
    await ev(`const n = document.getElementById('next'); if (n) n.click(); return 1`); await sleep(250);
  }
  assert(spellSeen, 'a spell (聽寫拼字) question came up in the ability round');

  // ---- 3. 片語卡、課本單字卡、字根例字、英檢單字頁 ----
  await go('/index.html#learn/phrases'); assert(await ev(painted), 'phrase cards painted');
  const ph = await ev(`const e = document.querySelector('#phl .card .w'); return [e.textContent, [...e.querySelectorAll('.sy')].map(s => s.textContent)]`);
  assert(ph[1].join('').replace(/\s/g, '') === ph[0].replace(/[\s\-]/g, '').replace(/[^A-Za-z'.]/g, '') || ph[1].length > 0, 'phrase card: ' + JSON.stringify(ph));
  await shot('3a-phrase-cards');
  const tb = await ev(`return DATA_TEXTBOOK[0].id`);
  await go('/index.html#tb/' + tb + '/learn'); assert(await ev(painted), 'textbook word cards painted');
  const tbw = await ev(`return [...document.querySelectorAll('.tbw .w')].slice(0, 4).map(e => [e.textContent, e.querySelectorAll('.sy').length])`);
  assert(tbw.length && tbw.every(x => x[1] >= 1), 'textbook cards: every word underlined ' + JSON.stringify(tbw));
  await shot('3b-textbook-cards', '.tb-words');
  await go('/index.html#learn/roots'); assert(await ev(painted), 'root example words painted');
  const rt = await ev(`const b = document.querySelector('#rl b.syl'); return [b.textContent, b.querySelectorAll('.sy').length]`);
  assert(rt[1] >= 1, 'root example word underlined ' + JSON.stringify(rt));
  await go('/gept/words.html?lv=i'); reqs.length = 0; await go('/gept/words.html?lv=i');
  assert(await ev(painted), 'gept/words.html painted');
  const gw = await ev(`const b = [...document.querySelectorAll('.gp-w')].slice(0, 30); return { n: b.length, lined: b.filter(x => x.querySelector('.sy')).length, multi: b.filter(x => x.querySelectorAll('.sy').length > 1).length, sample: b.slice(0, 5).map(x => [...x.querySelectorAll('.sy')].map(s => s.textContent).join('/')) }`);
  assert(gw.n === 30 && gw.lined === 30 && gw.multi > 5 && reqs.includes('/data/syllables-gept.js') && reqs.includes('/data/syllables.js'), 'gept words page: every word underlined, both syllable files loaded ' + JSON.stringify(gw));
  await shot('3c-gept-words', '#gp-wl');
  // 英檢聽寫題：題目畫面沒有底線
  await ev(HOOK); await ev(`if (window.KidsAuth) KidsAuth.startActivity = () => true; document.getElementById('gp-wgo').click(); return 1`); await sleep(400);
  const gd = await ev(`return { inp: !!document.getElementById('gp-wi'), sy: document.querySelectorAll('#gp .sy, #gp .syl').length }`);
  assert(!gd.inp || gd.sy === 0, 'gept dictation question: no syllable lines ' + JSON.stringify(gd));

  // ---- 5. 練習設定、家長範圍 ----
  await go('/index.html#practice'); await ev(HOOK);
  const pr = await ev(`return { lv: document.querySelectorAll('input[name="lv"]').length, src: document.querySelectorAll('input[name="src"]').length, auto: (document.getElementById('wauto') || {}).textContent || '' }`);
  assert(pr.lv === 0 && pr.src === 0 && /自動由易到難/.test(pr.auto), 'practice page: no level / source choice, says automatic ' + JSON.stringify(pr));
  await go('/index.html#parent'); await sleep(300);
  const opts = await ev(`const s = document.getElementById('wsc'); return s ? [...s.options].map(o => o.value + '=' + o.textContent) : null`);
  assert(opts && opts[0].startsWith('=自動') && opts.some(o => o.startsWith('tb=')) && opts.some(o => o.startsWith('src:gept1=')) && opts.some(o => o.startsWith('src:cefrj-a2=')), 'parent page: word scope select ' + JSON.stringify(opts));
  await ev(`document.getElementById('wscope').scrollIntoView({ block: 'center' }); return 1`); await sleep(150); await shot('5a-parent-scope', '#wscope');
  await ev(`const s = document.getElementById('wsc'); s.value = 'src:gept1'; s.dispatchEvent(new Event('change')); return 1`);
  await go('/index.html#learn/words'); await sleep(300);
  const sc = await ev(`const cards = [...document.querySelectorAll('#wl .card .w')].map(e => DATA_WORDS.find(x => x.w === e.textContent)); const n = DATA_WORDS.filter(x => x.src === 'gept1' && x.lv !== 1).length;
    return { all: cards.every(w => w && w.src === 'gept1' && w.lv !== 1), lv: cards[0] && cards[0].lv, prog: document.getElementById('prog').textContent, n, note: (document.getElementById('wscope-note') || {}).textContent || '' }`);
  assert(sc.all && sc.lv === 2 && sc.prog === `單字 0/${sc.n} 已學會` && /爸爸媽媽設定的範圍/.test(sc.note), 'scope src:gept1 → only gept1 cards, lv2 first, denominator follows ' + JSON.stringify(sc));
  await shot('5b-word-cards-parent-scope');
  await go('/index.html#learn/words/moe800'); await sleep(300);
  const u = await ev(`const cards = [...document.querySelectorAll('#wl .card .w')].map(e => DATA_WORDS.find(x => x.w === e.textContent)); return { all: cards.length && cards.every(w => w && w.src === 'moe800'), note: (document.getElementById('wscope-note') || {}).textContent || '' }`);
  assert(u.all && /只看/.test(u.note), '#learn/words/moe800 (gept links) still opens that source ' + JSON.stringify(u));
  await go('/index.html#parent'); await sleep(300); await ev(`const s = document.getElementById('wsc'); s.value = ''; s.dispatchEvent(new Event('change')); return 1`);
  const wide = await ev(`return document.documentElement.scrollWidth <= innerWidth + 1`);
  assert(wide, 'iPad 820px: no horizontal scroll');
}

(async () => {
  await new Promise(r => srv.listen(PS, '127.0.0.1', r));
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'wc-chrome-'));
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
    console.log(log.join('\n') + '\nPASS wordcards-browser');
  } catch (e) {
    code = 1; console.log(log.join('\n')); console.error('FAIL', e.message, '\n', errors.join('\n'));
  } finally {
    try { ws && ws.close(); } catch (e) { } chrome.kill(); srv.close();
    await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) { }
    process.exit(code);
  }
})();
