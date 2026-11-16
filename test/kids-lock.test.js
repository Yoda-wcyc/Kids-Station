// kids-lock.test.js — 單元做過幾次＋做滿 2 次上鎖（kids-lock.js）：計數、鎖、安全閥、找下一個、合併、解鎖、舊紀錄回推、網址判斷、存放大小、頁面接線
// 用法：node test/kids-lock.test.js
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL kids-lock:', m); } };
const SM = require(path.join(root, 'syncmerge.js')), KC = require(path.join(root, 'completion.js')), KL = require(path.join(root, 'kids-lock.js'));
const C = SM.canon;

// ---------- 資料（跟頁面一樣用 window 載入）----------
const W = { window: {} }; vm.createContext(W);
['data/textbook.js', 'comics/catalog.js', 'gept/data/catalog.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), W));
const zhCat = require(path.join(root, 'chinese', 'data', 'catalog.js')), cyCat = require(path.join(root, 'chinese', 'idioms', 'data', 'catalog.js'));
const comics = W.window.COMIC_CATALOG || W.COMIC_CATALOG, gept = W.window.GEPT_CATALOG;
const DATA = { textbook: W.window.DATA_TEXTBOOK, zhCatalog: zhCat, cyCatalog: cyCat, comics, gept };

// ---------- 每個單元都有自己的一格、而且算得回來 ----------
const PS = KL.paths(DATA), keys = [...new Set(PS.flatMap(p => p.items.map(u => u.key)).concat(['mx:d22t', 'cyall']))];
{
  const bad = keys.filter(k => !KL.slot(k) || KL.keyOf(...KL.slot(k)) !== k), seen = new Map(), dup = [];
  keys.forEach(k => { const s = KL.slot(k); if (!s) return; const id = s.join('#'); if (seen.has(id)) dup.push(k + '=' + seen.get(id)); seen.set(id, k); });
  ok(!bad.length && !dup.length, 'slot()／keyOf() round-trip, one cell per unit: bad ' + bad.slice(0, 5) + ' dup ' + dup.slice(0, 5));
  ok(keys.every(k => KL.slot(k)[1] < 128), 'every cell index < 128');
  const ids = p => (PS.find(x => x.id === p) || { items: [] }).items.map(u => u.key);
  ok(ids('english').length === W.window.DATA_TEXTBOOK.length && ids('social').length === KC.MM_UNITS.social.length && ids('science').length === KC.MM_UNITS.science.length && ids('geo').length === 18 && ids('ai').length === 3, 'paths: 課本／社會／自然／地理／AI 照課程地圖');
  ok(ids('math')[0] === 'math:balance' && ids('math').indexOf('mg:g5b1') > ids('math').indexOf('math:frc') && ids('math').slice(-1)[0] === 'mg:g6bR', 'paths: 數學 五上 → 五下 → 六上 → 六下（照課程地圖）');
  ok(ids('zh').length === 100 && ids('zh')[0] === 'zh1-01' && ids('zh')[99] === 'zh4-25' && ids('cy').length === 100 && ids('cyu').length === 10 && ids('comic').length === comics.vols.reduce((n, v) => n + v.eps.filter(e => e.ready).length, 0), 'paths: 國語篇目、成語、單元測驗、漫畫照目錄順序');
  ok(PS.filter(p => /^gp:/.test(p.id)).length === Object.keys(gept).reduce((n, lv) => n + Object.keys(gept[lv]).length, 0) && ids('gp:eL1')[0] === 'e-L1-01' && /gept\/mock\.html\?set=e-M-01$/.test(PS.find(p => p.id === 'gp:eM').items[0].href) && /task\.html/.test(PS.find(p => p.id === 'gp:eW1').items[0].href), 'paths: 英檢每個級別×部分一條（練習／模擬考／寫作口說各自的頁面）');
  ok(ids('mx').join() === 'mx:nn,mx:d21,mx:d22,mx:d31' && ids('pat').join() === 'pat:1,pat:2,pat:3' && ids('ph').join() === 'ph:1,ph:2,ph:3', 'paths: 乘法快算 九九 → 二位×一位 → 二位×二位 → 三位×一位；句型／片語 1 → 3');
  const MXJ = fs.readFileSync(path.join(root, 'math', 'multiply.js'), 'utf8');
  ok(MXJ.includes("var LV = ['nn', 'd21', 'd22t', 'd22', 'd31'];") && KL.MXL.every(k => MXJ.includes(k + ": '" + KL.MX_NAME[k] + "'")), 'MXL／MX_NAME 跟 math/multiply.js 的 LV／LV_NAME 一樣');
}

// ---------- 計數：第 1 次＝第一次完成；之後收尾達標 +1；沒達標、只打開不算 ----------
const rec = (done, sec, key, val, data) => KL.onRecord(done, KC.record(done, sec, key, val, 1000), sec, key, val, data || {}, { done });
const T = (done, key, data) => KL.times(done, key, KL.floorOf(key, data || {}, { done }));
{
  let d = {};
  d = rec(d, 'mg', 'g5b1q', 85); ok(T(d, 'mg:g5b1') === 0, 'mg：只做練習（還沒完成）＝0 次');
  d = rec(d, 'mg', 'g5b1t', 60); ok(T(d, 'mg:g5b1') === 0, 'mg：測驗沒到 80 ＝ 還是 0 次');
  d = rec(d, 'mg', 'g5b1t', 90); ok(T(d, 'mg:g5b1') === 1 && KL.getV(d, 'mg:g5b1') === 1, 'mg：練習＋測驗都過 → 第 1 次');
  d = rec(d, 'mg', 'g5b1q', 95); ok(T(d, 'mg:g5b1') === 1, 'mg：完成後再做練習（不是收尾）不加');
  d = rec(d, 'mg', 'g5b1t', 70); ok(T(d, 'mg:g5b1') === 1, 'mg：收尾沒達標不加');
  d = rec(d, 'mg', 'g5b1t', 88); ok(T(d, 'mg:g5b1') === 2, 'mg：再考一次單元測驗 ≥80 → 2 次');
  d = rec(d, 'mg', 'g5b1t', 99); ok(T(d, 'mg:g5b1') === 2, '這一輪最多記到 2');
  // 社會：背架構 4 關＋考考自己＋練習題；收尾＝練習題
  const mm = { 'social:u1': { passedAt: { 1: 1, 2: 1, 3: 1, 4: 1 } } };
  let e = {}; const recM = (sec, v) => { const n = KC.record(e, sec, 'social:u1', v, 1); e = KL.onRecord(e, n, sec, 'social:u1', v, {}, { done: e, mm }); };
  recM('czFirst', 85); recM('qz', 90);
  ok(KL.times(e, 'mm:social:u1', KL.floorOf('mm:social:u1', {}, { done: e, mm })) === 1, 'mm：考考自己＋練習題都過 → 1 次');
  recM('czFirst', 95); ok(KL.getV(e, 'mm:social:u1') % 3 === 1, 'mm：完成後再做考考自己不加');
  recM('qz', 85); ok(KL.getV(e, 'mm:social:u1') % 3 === 2, 'mm：再做一輪練習題 ≥80 → 2 次');
  // 單一步驟：國語一篇、AI、乘法題型
  let z = rec({}, 'zh', 'zh1-03', 90); ok(T(z, 'zh1-03') === 1, 'zh：完成一篇＝1 次'); z = rec(z, 'zh', 'zh1-03', 75); ok(T(z, 'zh1-03') === 2, 'zh：再完成一次＝2 次');
  let a = rec({}, 'ai', 'secrets'); ok(T(a, 'ai:secrets') === 1, 'ai：玩完一次＝1 次');
  let x = rec({}, 'mx', 'd21', { acc: 70, sec: 5 }); ok(T(x, 'mx:d21') === 0, 'mx：挑戰沒達標（<90%）不算');
  x = rec(x, 'mx', 'd21', { acc: 95, sec: 6 }); x = rec(x, 'mx', 'd21', { acc: 100, sec: 8 }); ok(T(x, 'mx:d21') === 2, 'mx：二位×一位挑戰達標 2 輪 → 2 次');
  ok(KL.evOf('tb', 'hanlin-5-u1', 79) === null && KL.evOf('geo', 'm1o', 100) === null && KL.evOf('cz', 'social:u1', 100) === null && KL.evOf('n', 'pat:1', 0) === null, '沒達標／開場漫畫／舊版 cz／沒做完 → 不算');
  // 天平：8 題都對過＝第 1 次；之後第 8 題再算對＝收尾
  let b = {}; for (let i = 1; i <= 8; i++) b = rec(b, 'bal', 'b' + i); ok(T(b, 'math:balance') === 1, 'balance：8 題都算對過＝1 次');
  b = rec(b, 'bal', 'b3'); ok(T(b, 'math:balance') === 1, 'balance：再算第 3 題不加'); b = rec(b, 'bal', 'b8'); ok(T(b, 'math:balance') === 2, 'balance：再做到第 8 題＝2 次');
  // 'n'：漫畫／英檢／句型（呼叫的地方判過做完）
  const recN = (done, key, ctx) => KL.onRecord(done, SM.normDone(done), 'n', key, 1, {}, Object.assign({ done }, ctx));
  let n = recN({}, 'v1e1', { comic: {} }); ok(KL.times(n, 'v1e1', false) === 1, '漫畫：第一次看完＝1 次');
  n = recN(n, 'v1e1', { comic: { seen: { v1e1: 1 } } }); ok(KL.times(n, 'v1e1', true) === 2, '漫畫：再看完一次＝2 次');
  const old = recN({}, 'v1e2', { comic: { seen: { v1e2: 1 } } }); ok(KL.times(old, 'v1e2', true) === 2, '漫畫：以前看過（本機紀錄）今天再看＝2 次');
}

// ---------- 舊紀錄回推：已完成的一律算 1 次，不會第一天就鎖 ----------
{
  const oldDone = { mg: { g5b1q: 100, g5b1t: 100, g5b2q: 90, g5b2t: 95 }, zh: { 'zh1-01': 5 }, ai: { secrets: 5 }, mx: { d21: { acc: 100, sp: 50, ok: 5 } } };
  ok(['mg:g5b1', 'mg:g5b2', 'zh1-01', 'ai:secrets', 'mx:d21'].every(k => T(oldDone, k) === 1) && T(oldDone, 'mg:g5b3') === 0, '舊紀錄：已完成＝1 次、沒完成＝0 次（kids_done 只有最佳分數，數不出更多次）');
  const mpath = PS.find(p => p.id === 'math'), tm = k => T(oldDone, k);
  ok(mpath.items.every(u => !KL.view(mpath, u.key, tm).locked), '舊紀錄：上線第一天什麼都不鎖');
  const d2 = rec(oldDone, 'mg', 'g5b1t', 85); ok(T(d2, 'mg:g5b1') === 2, '舊紀錄：已完成的單元再考一次 → 2 次');
  const F = (k, ctx) => KL.floorOf(k, {}, Object.assign({ done: {} }, ctx));
  ok(!F('e-L1-01', {}) && !F('e-L1-01', { gept: { best: { 'e-L1-01': { p: 70 } } } }) && F('e-L1-01', { gept: { best: { 'e-L1-01': { p: 85 } } } }) && F('e-M-01', { gept: { mock: [{ id: 'e-M-01' }] } }) && F('e-W1-02', { gept: { task: { 'e-W1-02': { t: 1 } } } }) && !F('e-W1-03', { gept: { task: {} } }),
    '舊紀錄（英檢，本機 kids_gept）：一組 ≥80%、考過的模擬考、做過的寫作口說＝1 次；沒紀錄／不到 80%＝0');
  ok(F('v1e1', { comic: { seen: { v1e1: 1 } } }) && !F('v1e2', { comic: { seen: { v1e1: 1 } } }) && !F('v1e2', {}) && !F('pat:1', {}), '舊紀錄（漫畫 kids_comic 看過＝1 次；句型等級沒有舊紀錄＝0）');
}

// ---------- 鎖、安全閥、找下一個 ----------
{
  const mpath = PS.find(p => p.id === 'math'), V = (done, k, p) => KL.view(p || mpath, k, kk => T(done, kk, DATA));
  let d = {}; ['mg:g5b1', 'mg:g5b2'].forEach(k => { d = KL.setV(d, k, 2); });
  const v1 = V(d, 'mg:g5b1');
  ok(v1.locked && v1.n === 2 && v1.next.key === 'mg:g5b3' && /單元三/.test(v1.next.title) && /#s\/math\/g5b3$/.test(v1.next.href), '2 次 → 鎖住，下一個更難的＝同一路徑往後第一個沒鎖的（跳過也鎖住的 g5b2）');
  ok(!V(d, 'mg:g5b3').locked && V(KL.setV({}, 'mg:g5b1', 1), 'mg:g5b1').locked === false, '1 次、0 次 → 不鎖');
  const last = KL.setV({}, 'mg:g6bR', 2); ok(!V(last, 'mg:g6bR').locked && V(last, 'mg:g6bR').n === 2, '安全閥：路徑最後一個（六下總複習）做 2 次也不鎖');
  let all = {}; mpath.items.forEach(u => { all = KL.setV(all, u.key, 2); });
  ok(mpath.items.every((u, i) => !V(all, u.key).locked === (i === mpath.items.length - 1 || u.key === 'math:mx')) && V(all, 'math:balance').next.key === 'math:mx', '全部 2 次：只剩最後一個和每日清單的乘法快算沒鎖，前面的都帶到最近的那個');
  const mx = PS.find(p => p.id === 'mx'), XV = (done, k) => KL.view(mx, k, kk => T(done, kk));
  let x = KL.setV(KL.setV({}, 'mx:d21', 2), 'mx:d22', 2);
  ok(XV(x, 'mx:d21').locked && XV(x, 'mx:d21').next.key === 'mx:d22' && !XV(x, 'mx:d22').locked, '乘法：二位×一位 2 輪 → 鎖、帶去二位×二位；二位×二位（每日清單那一階）2 輪也不鎖');
  ok(!KL.view(null, 'mx:d22t', () => 2).locked && !XV(KL.setV({}, 'mx:d31', 2), 'mx:d31').locked, '乘法：二位×整十（每日清單）、三位×一位（最高階）不鎖');
  const pat = PS.find(p => p.id === 'pat'), PV = (done, k) => KL.view(pat, k, kk => T(done, kk));
  let p = KL.setV({}, 'pat:1', 2); ok(PV(p, 'pat:1').locked && PV(p, 'pat:1').next.key === 'pat:2' && !PV(KL.setV({}, 'pat:3', 2), 'pat:3').locked, '句型隨機 10 題：簡單 2 回 → 鎖、帶去基本；進階（最高階）不鎖');
  const zp = PS.find(x => x.id === 'zh'), ZV = (done, k) => KL.view(zp, k, kk => T(done, kk));
  ok(ZV(KL.setV({}, 'zh1-01', 2), 'zh1-01').next.key === 'zh1-02' && !ZV(KL.setV({}, 'zh4-25', 2), 'zh4-25').locked && ZV(KL.setV({}, 'zh1-25', 2), 'zh1-25').next.key === 'zh2-01', '國語：下一篇；L1 最後一篇帶到 L2 第一篇；全部最後一篇不鎖');
  ok(KL.badgeText({ n: 0 }) === '' && KL.badgeText({ n: 1, locked: false }) === '✓1' && KL.badgeText({ n: 2, locked: true }) === '✓2 🔒' && KL.badgeText({ n: 2, locked: false }) === '✓2', '標示：沒做＝空、✓1、✓2 🔒（不會鎖的 ✓2）');
  ok(KL.alias('cy:U3') === 'cyu03' && KL.slot('cy:U3').join() === KL.slot('cyu03').join() && KL.slot('zh:L1') === null, '課程地圖的成語單元＝單元測驗那一格；國語 L1～L4（一級很多篇）不另外記');
}

// ---------- 合併（跨裝置）＋家長解鎖 ----------
{
  const A = KL.setV(KL.setV({}, 'mg:g5b1', 2), 'zh1-02', 1), B = KL.setV(KL.setV({}, 'mg:g5b1', 1), 'v3e4', 2), m = SM.mergeDone(A, B);
  ok(KL.getV(m, 'mg:g5b1') === 2 && KL.getV(m, 'zh1-02') === 1 && KL.getV(m, 'v3e4') === 2, 'merge：每格取大');
  ok(C(SM.mergeDone(B, A)) === C(m) && C(SM.mergeDone(m, A)) === C(m) && C(SM.mergeDone(m, m)) === C(m) && C(SM.mergeDone(SM.mergeDone(A, B), KL.setV({}, 'ai:secrets', 1))) === C(SM.mergeDone(A, SM.mergeDone(B, KL.setV({}, 'ai:secrets', 1)))), 'merge：交換、冪等、結合');
  ok(C(SM.normDone({ n: { 'bad key': '2', z1: '2!', ok: 'x'.repeat(200), m: '00' } })) === C(SM.normDone({})) && !('n' in SM.normDone({})), 'normN：丟掉壞的組名／字元／太長／全 0；沒有次數就不放 n（舊形狀不變）');
  const mpath = PS.find(p => p.id === 'math'), L = d => KL.view(mpath, 'mg:g5b1', k => T(d, k)).locked;
  const locked = KL.setV({}, 'mg:g5b1', 2), un = KL.unlock(locked, 'mg:g5b1');
  ok(L(locked) && !L(un) && T(un, 'mg:g5b1') === 1 && KL.getV(un, 'mg:g5b1') === 4, '家長解鎖 → 算做過 1 次（下一輪）、不鎖');
  const stale = SM.mergeDone(un, locked); ok(!L(stale) && KL.getV(stale, 'mg:g5b1') === 4, '解鎖壓過別台的舊紀錄（舊的 2 次合不回來）');
  const again = rec(un, 'mg', 'g5b1t', 90); ok(L(again) && KL.getV(again, 'mg:g5b1') === 5 && KL.getV(SM.mergeDone(again, locked), 'mg:g5b1') === 5, '解鎖後再做 1 次 → 又鎖住，跟舊紀錄合併也一樣');
  let u = locked; for (let i = 0; i < 19; i++) u = KL.unlock(KL.setV(u, 'mg:g5b1', KL.getV(u, 'mg:g5b1') + 1), 'mg:g5b1') || u;
  ok(KL.unlock(KL.setV({}, 'mg:g5b1', 61), 'mg:g5b1') === null && KL.getV(u, 'mg:g5b1') <= 61, '一格最多 20 輪（解不開時回 null，家長頁會提示）');
}

// ---------- 網址 → 單元（直接打網址也擋；錯題、複習、段考模擬、預覽不擋）----------
{
  const K = KL.keyFromUrl, cases = [['math/balance.html', '', 'math:balance'], ['math/balance.html', '?mistakes=1', null], ['math/short-division.html', '', 'math:sd'], ['math/short-division.html', '?tab=word', 'math:gw'], ['math/short-division.html', '?mistakes=word', null],
    ['math/multiples.html', '?tab=prac', 'math:mul'], ['math/fraction.html', '', 'math:frc'], ['math/grade.html', '?u=g5b3', 'mg:g5b3'], ['math/grade.html', '?r=g6a', 'mg:g6aR'], ['math/grade.html', '?mistakes=1', null], ['math/multiply.html', '', null], ['math/fracadd.html', '', null],
    ['mindmap/social.html', '?u=u3', 'mm:social:u3'], ['mindmap/science.html', '?u=n12', 'mm:science:n12'], ['mindmap/social.html', '?review=1', null], ['mindmap/social.html', '?mistakes=1&u=u3', null], ['mindmap/social.html', '?mock=1', null],
    ['geo/unit.html', '?u=t2&tab=prac', 'geo:t2'], ['geo/unit.html', '?mistakes=1', null], ['ai/secrets.html', '', 'ai:secrets'], ['chinese/reading.html', '?a=zh2-07', 'zh2-07'], ['chinese/reading.html', '?mistakes=1', null], ['chinese/reading.html', '?a=zh2-07&preview=1', null],
    ['chinese/idioms/idioms.html', '?i=cy012', 'cy012'], ['chinese/idioms/idioms.html', '?r=cyr03', 'cyr03'], ['chinese/idioms/idioms.html', '?u=4', 'cyu04'], ['chinese/idioms/idioms.html', '?u=all', 'cyall'], ['chinese/idioms/idioms.html', '', null],
    ['comics/v2e5.html', '', 'v2e5'], ['comics/index.html', '', null], ['gept/practice.html', '?set=e-L1-03', 'e-L1-03'], ['gept/mock.html', '?set=i-M-02', 'i-M-02'], ['gept/task.html', '?set=a-W2-01', 'a-W2-01'], ['gept/practice.html', '?mistakes=1&lv=e', null], ['index.html', '', null], ['game/hero-world/index.html', '', null]];
  const bad = cases.filter(([r, s, k]) => K(r, s) !== k);
  ok(!bad.length, 'keyFromUrl: ' + JSON.stringify(bad.map(([r, s, k]) => [r + s, k, K(r, s)])));
  ok(keys.filter(k => !/^(mx|pat|ph):|^tb:|^math:mx$/.test(k)).every(k => { const u = (PS.find(p => p.items.some(x => x.key === k)).items.find(x => x.key === k) || {}).href || ''; const m = /^(?:index\.html#s\/[a-z]+\/[a-z0-9-]+)$/.test(u); return m || K(u.split('?')[0], u.includes('?') ? '?' + u.split('?')[1] : '') === k; }), '每個單元的連結打開來都認得出是哪個單元（科目頁的 iframe 連結除外，iframe 裡的頁面自己認）');
}

// ---------- 存放大小：全部單元都做滿（每格都用最大的字）----------
{
  let worst = {}; keys.forEach(k => { worst = KL.setV(worst, k, 61); });
  const nb = SM.bytes(SM.normDone(worst).n), groups = Object.keys(SM.normDone(worst).n).length;
  ok(nb < 1500 && groups < 80, 'kids_done.n 最壞情況（' + keys.length + ' 個單元每格最大值）只有 ' + nb + ' B、' + groups + ' 組');
  ok(Object.keys(SM.normN(Object.fromEntries(Array.from({ length: 150 }, (_, i) => ['g' + i, 'Z'.repeat(128)])))).length === 100, 'normN：最多 100 組、每組 128 格（亂塞的文件也有上限）');
}

// ---------- 頁面接線 ----------
{
  const walk = d => fs.readdirSync(path.join(root, d), { withFileTypes: true }).flatMap(e => (e.isDirectory() ? (/^(game|test|scratchpad|考卷|_demo|node_modules|data)$/.test(e.name) ? [] : walk(path.join(d, e.name))) : /\.html$/.test(e.name) ? [path.join(d, e.name)] : []));
  const pages = walk('.').map(f => [f.replace(/\\/g, '/').replace(/^\.\//, ''), fs.readFileSync(path.join(root, f), 'utf8')]);
  const srcAt = (h, s) => h.search(new RegExp('<script src="(\\.\\./)*' + s.replace(/[.]/g, '\\.') + '(\\?v=[0-9a-f]+)?"></script>'));
  const miss = pages.filter(([, h]) => srcAt(h, 'kids-done.js') >= 0 && !(srcAt(h, 'kids-lock.js') > srcAt(h, 'kids-done.js'))).map(([f]) => f);
  ok(!miss.length, '每一頁有 kids-done.js 就在它後面載 kids-lock.js（次數才記得到）: ' + miss);
  const cm = pages.filter(([f]) => /^comics\/v\de\d\.html$/.test(f)), cmBad = cm.filter(([, h]) => !(srcAt(h, 'kids-lock.js') > srcAt(h, 'catalog.js') && srcAt(h, 'syncmerge.js') < srcAt(h, 'kids-lock.js')));
  ok(cm.length === 42 && !cmBad.length, '漫畫 42 話都在目錄後面載 kids-lock.js: ' + cmBad.map(x => x[0]));
  const gp = pages.filter(([f]) => /^gept\/(index|practice|mock|task)\.html$/.test(f)), gpBad = gp.filter(([, h]) => !(srcAt(h, 'syncmerge.js') < srcAt(h, 'kids-lock.js') && srcAt(h, 'kids-lock.js') < srcAt(h, 'gept.js') && srcAt(h, 'data/catalog.js') < srcAt(h, 'kids-lock.js')));
  ok(gp.length === 4 && !gpBad.length, '英檢 4 頁：syncmerge → 目錄 → kids-lock → gept.js: ' + gpBad.map(x => x[0]));
  ['chinese/reading.html', 'chinese/idioms/idioms.html'].forEach(f => { const h = pages.find(x => x[0] === f)[1]; ok(srcAt(h, 'kids-lock.js') > h.search(/<script src="(reading|idioms)\.js/), f + '：kids-lock.js 在篇目資料後面（進頁檢查才有路徑）'); });
  const kd = fs.readFileSync(path.join(root, 'kids-done.js'), 'utf8'), app = fs.readFileSync(path.join(root, 'app.js'), 'utf8'), cj = fs.readFileSync(path.join(root, 'comics', 'comic.js'), 'utf8'), gj = fs.readFileSync(path.join(root, 'gept', 'gept.js'), 'utf8');
  ok(kd.includes('KL.onRecord(cur, next, sec, key, val, data(), ctx())'), 'kids-done.js record() 記次數');
  ok(app.includes("KidsDone.record('n', Q.cfg.lk, 1)") && app.includes("lk: PLV.lv ? 'pat:' + PLV.lv : ''") && app.includes("lk: PHF.lv ? 'ph:' + PHF.lv : ''") && app.includes('KidsLock.parentHtml()') && app.includes("KidsLock.state('tb:' + u.id)"), 'app.js：句型／片語隨機 10 題記次數＋鎖、課本單元鎖、家長頁解鎖');
  ok(/KidsLock\.bump\(ep\.id\)[\s\S]{0,400}localStorage\.setItem\('kids_comic'/.test(cj), 'comic.js：看完一話先記次數再寫 kids_comic（分得出第一次）');
  ok(/KidsLock\.bump\(R\.setId\)[\s\S]{0,80}saveBest\(R\.setId/.test(gj) && /KidsLock\.bump\(R\.set\.id\)[\s\S]{0,40}saveMock\(/.test(gj) && gj.includes('KidsLock.bump(id)'), 'gept.js：練習 ≥80%、模擬考、寫作口說記次數（在存成績之前）');
  const sj = fs.readFileSync(path.join(root, 'subjects.js'), 'utf8'), ij = fs.readFileSync(path.join(root, 'island.js'), 'utf8'), mh = fs.readFileSync(path.join(root, 'map.html'), 'utf8');
  ok(sj.includes('KidsLock.badge(dk)') && ij.includes('KL.badge(a.dk)') && mh.includes('KL.badge(u.key)'), '科目卡、學習島說明卡、課程地圖都有標示');
}

console.log(`kids-lock: ${pass} passed, ${fail} failed`);
if (fail) process.exitCode = 1;
