// sync-progress.test.js — 跨裝置「進度」一致（2026-11-19；家長：兩台 iPad 主畫面 App＋電腦，三台都按「立刻上傳並同步」還是不一樣）
//   1. pg 欄位（syncmerge.js）：壓縮格式、合併交換／結合／冪等、壞資料不報錯、本機 ↔ 文件來回不會一直重寫
//   2. 舊版（test/fixtures/syncmerge-old-v9.js，沒有 pg）丟掉 pg → 新版下次同步從本機補回；新版讀舊文件不報錯
//   3. A 做進度 → B 強制同步 → 畫面上每一處進度（照各頁原始碼讀本機）都跟 A 一樣
//   4. sync.js：bfcache 回來要推＋重畫、藏起來時接著送且帶 keepalive、⚠️ 沒同步的原因、綁定失敗會退避重試、漫畫頁（沒 kids-auth）不解除綁定
// 全部在記憶體裡的假 kids-sync，不連任何外站。用法：node test/sync-progress.test.js
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path'), root = path.join(__dirname, '..');
const R = f => require(path.join(root, f));
const SM = R('syncmerge.js'), OLD = require(path.join(__dirname, 'fixtures', 'syncmerge-old-v9.js'));
const KC = R('completion.js'), KL = R('kids-lock.js'), KD = R('kids-daily.js')._core, IS = R('island.js'), WL = R('math/word-level.js');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL sync-progress:', m); } };
const C = SM.canon, same = (a, b) => C(a) === C(b), J = x => JSON.parse(JSON.stringify(x)), obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
const sleep = ms => new Promise(r => setTimeout(r, ms));
const T = 1.795e12;

// ---------- 目錄資料（課程地圖、kids-lock 路徑）----------
const Wd = { window: {} }; vm.createContext(Wd);
['data/textbook.js', 'comics/catalog.js', 'gept/data/catalog.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), Wd));
const DATA = { textbook: Wd.window.DATA_TEXTBOOK, zhCatalog: R('chinese/data/catalog.js'), cyCatalog: R('chinese/idioms/data/catalog.js'), comics: Wd.window.COMIC_CATALOG, gept: Wd.window.GEPT_CATALOG };

// ================= 1. pg 格式 =================
const LOCAL = () => ({
  comic: { seen: { v1e1: T, v2e3: T }, next: 'v1e2' }, anim: { seen: { A: T, G: T }, rot: { A: 2 } },
  writing: { t: { t01: { st: 5, main: ['我家', '', '', ''], done: T }, t150: { done: T }, t02: { st: 2 } }, l: { L01: { best: 80, n: 2, done: T }, L22: { best: 30, n: 1 } }, g: { 記敘: 0 } },
  gept: { best: { 'e-L1-01': { p: 80, c: 4, n: 5, t: T }, 'a-R2-02': { p: 100, c: 5, n: 5, t: T } }, task: { 'e-W1-01': { t: T, sc: 3, b: 1 } }, mock: [{ id: 'e-M-01', t: T + 123, lc: 20, ln: 25, rc: 30, rn: 35, L: 96, R: 103, pass: true }] },
  exam: { 'social:u1': { best: 92, last: 64, n: 2, at: T }, 'science:mock-n1-n2': { best: 70, last: 70, n: 1, at: T - 9e6 }, _seen: { social: { 'q:abc': T } } },
  lit: { 'social:u1-L1': { best: 100, n: 1, at: T, open: { q3: '我覺得' } } }, cards: { 'science:n10-33': T, 'social:u1-01': T },
  wordLv: { gw: { 1: 3, 2: 150 } }, zhRead: { 'zh4-25': { best: 90, n: 15, at: T, done: T, open: { q: 'x' } } }, zhIdiom: { cy100: { best: 70, n: 1, at: T }, cyall: { best: 60, n: 2, at: T }, cyr10: { best: 5, n: 1, at: T } }
});
{
  const L = LOCAL(), p = SM.pgFromLocal(L), back = SM.pgApply(p, {});
  ok(p.f && p.v && p.e && p.m && Object.keys(p).every(k => typeof p[k] === 'string'), 'pg 是 4 個字串（f 旗標、v 數值、e 測驗、m 模擬考）: ' + C(p));
  ok(same(SM.pgFromLocal(back), p), '只有 pg 的新裝置寫回本機後再讀＝同一份 pg（不會一直重寫、一直上傳）');
  ok(same(SM.pgApply(p, L), {}), '自己的 pg 套回自己的本機：一個 key 都不改');
  ok(same(SM.pgApply(p, back), {}), '套兩次跟套一次一樣');
  ok(back.comic.seen.v1e1 && back.comic.seen.v2e3 && back.comic.next === 'v1e2' && back.anim.seen.A && back.anim.seen.G && !back.anim.seen.B, '漫畫看過的話、下一話、動畫看過哪幾段');
  ok(back.writing.t.t01.done && back.writing.t.t150.done && !back.writing.t.t02 && back.writing.l.L01.done && back.writing.l.L01.best === 80 && back.writing.l.L01.n === 2 && back.writing.l.L22.best === 30 && !back.writing.l.L22.done, '作文完成哪幾題、修辭課完成／最佳 %／次數（沒完成的題不帶）');
  ok(back.gept.best['e-L1-01'].p === 80 && back.gept.best['a-R2-02'].p === 100 && back.gept.task['e-W1-01'] && back.gept.mock.length === 1 && back.gept.mock[0].L === 96 && back.gept.mock[0].pass === true, '英檢：各組最佳 %、寫作口說做過、模擬考紀錄');
  ok(back.exam['social:u1'].best === 92 && back.exam['social:u1'].last === 64 && back.exam['science:mock-n1-n2'].best === 70 && !back.exam._seen, '社會／自然單元測驗、段考模擬：最高、最近（_seen 不同步）');
  ok(back.lit['social:u1-L1'].best === 100 && !back.lit['social:u1-L1'].open && back.cards['science:n10-33'] === 1 && back.cards['social:u1-01'] === 1, '素養題組最佳 %（開放題內容不帶）、閃卡看過（時間記 1）');
  ok(back.wordLv.gw[1] === 3 && back.wordLv.gw[2] === 99 && back.zhRead['zh4-25'].best === 90 && back.zhRead['zh4-25'].n === 11 && !back.zhRead['zh4-25'].open && back.zhIdiom.cy100.best === 70 && back.zhIdiom.cyall.n === 2 && back.zhIdiom.cyr10.best === 5, '應用題分級（封頂 99）、閱讀／成語最佳 % 與次數（次數封頂 11）');
  // 只往上補、不刪本機細節
  const mine = LOCAL(); mine.gept.best['e-L1-01'].p = 100; mine.exam['social:u1'] = { best: 95, last: 95, n: 4, at: T + 7200e3 };
  const pa = SM.pgApply(p, mine);
  ok(!pa.gept || pa.gept.best['e-L1-01'].p === 100, '本機分數比較高：不會被別台較低的蓋掉');
  ok(!pa.exam || (pa.exam['social:u1'].last === 95 && pa.exam['social:u1'].best === 95), '「最近一次」跟著時間較新的那台');
  const older = LOCAL(); older.exam['social:u1'] = { best: 50, last: 50, n: 1, at: T - 7200e3 };
  const po = SM.pgApply(p, older).exam['social:u1'];
  ok(po.best === 92 && po.last === 64 && po.n === 1, '本機的考試比較舊：最高取大、最近換成較新的 64: ' + C(po));
  // 合併：交換、結合、冪等
  const a = SM.pgFromLocal(LOCAL()), b = SM.pgFromLocal({ comic: { seen: { v7e6: T } }, gept: { best: { 'e-L1-01': { p: 40 } }, mock: [{ id: 'i-M-02', t: T + 5e3, lc: 1, ln: 2, rc: 3, rn: 4, L: 5, R: 6 }] }, exam: { 'social:u1': { best: 70, last: 70, n: 1, at: T + 3600e3 } }, zhRead: { 'zh4-25': { best: 30, n: 20 } } }), c = SM.pgFromLocal({ cards: { 'social:u1-02': T }, wordLv: { gw: { 3: 7 } } });
  const m = SM.mergePg;
  ok(same(m(a, b), m(b, a)) && same(m(m(a, b), c), m(a, m(b, c))) && same(m(m(a, b), b), m(a, b)) && same(m(a, {}), SM.normPg(a)), 'mergePg 交換、結合、冪等');
  const ab = SM.pgApply(m(a, b), {});
  ok(ab.gept.best['e-L1-01'].p === 80 && ab.gept.mock.length === 2 && ab.exam['social:u1'].best === 92 && ab.exam['social:u1'].last === 70 && ab.zhRead['zh4-25'].best === 90 && ab.zhRead['zh4-25'].n === 11 && ab.comic.seen.v7e6, '合併：% 取大、模擬考聯集、最近跟較新的、次數各自取大: ' + C(ab.exam));
  // 壞資料
  let err = null, bad;
  try { bad = SM.normalize({ pg: { f: 'C=zz!!,=1,%%=3,A=' + 'v'.repeat(500), v: 'G=zzzz,Z1=0z0z,Vgw=-1', e: 'u1.999.-5.zz;bad;mock-u1-u2.10.20.30;../x.1.1.1', m: 'e01.0.1.2.3.4.5.6.1;e01.top2v4.9999.1.1.1.1.1.1;x.1' } }); SM.pgApply(bad.pg, { comic: 'x', gept: [], exam: null }); SM.mergePg({ f: 5 }, { v: {} }); } catch (e) { err = e; }
  ok(!err && bad.pg && bad.pg.f.indexOf('!') < 0 && SM.bytes(bad.pg.f) < 120, '壞資料不報錯、會被截斷整理 ' + (err && err.stack) + ' ' + C(bad && bad.pg));
  ok(!SM.normalize({ v: 9 }).pg && !('pg' in SM.normalize({ pg: {} })), '沒有 pg 的文件形狀不變（舊測試、舊文件）');
  const pk = SM.normPg({ f: 'Fu1=1,Fu3=3,Fn10=v', v: 'Lu2=2t,Lu1=1s' });
  ok(pk.f === 'Fn=.........v,Fu=1..3' && pk.v === 'Lu=1s.2t' && same(SM.normPg(pk), pk), '閃卡、素養題組：同一科的單元收成一組、單元之間用 . 隔開（一個單元一組的寫法也吃）: ' + C(pk));
  ok(SM.COMIC_EPS === DATA.comics.vols.reduce((n, v) => n + v.eps.length, 0) && DATA.comics.vols.every((v, i) => v.eps.every((e, j) => e.id === 'v' + (i + 1) + 'e' + (j + 1))), 'COMIC_EPS＝漫畫目錄 7 冊 × 6 話、id 照順序（沒載目錄的頁面找「下一話」用）');
  const nx = SM.pgApply(SM.pgFromLocal({ comic: { seen: { v1e1: 1, v1e2: 1 } } }), { comic: { seen: { v1e1: T }, next: 'v1e2' } }).comic;
  ok(nx.next === 'v1e3', '別台看掉了本機的「下一話」→ 往後找沒看過的: ' + nx.next);
  ok(SM.pgApply(SM.pgFromLocal({ comic: { seen: Object.fromEntries(DATA.comics.vols.flatMap(v => v.eps.map(e => [e.id, 1]))) } }), {}).comic.next === '', '42 話全看過：下一話＝空（首頁按鈕去目錄）');
}

// ================= 2. 舊版 ↔ 新版 =================
(async () => {
  {
    const nd = SM.normalize({ log: [], pg: SM.pgFromLocal(LOCAL()) });
    let od = null, e1 = null; try { od = OLD.normalize(J(nd)); } catch (e) { e1 = e; }
    ok(!e1 && od && !od.pg, '舊版讀新文件不報錯（pg 被丟掉）');
    ok(same(SM.normalize(OLD.normalize({ log: [] })), SM.normalize({ log: [] })), '新版讀舊文件＝沒有 pg');
    // 兩台輪流：新版 N 有本機進度、舊版 O 沒有；O PUT 回去的文件少了 pg → N 下次同步從本機補回
    const server = { doc: { v: 9, log: [] }, etag: 0 };
    const io = (S, me) => ({ get: async () => ({ doc: J(server.doc), etag: server.etag }), put: async (c, d, e) => { if (e !== server.etag) return { conflict: true }; server.doc = J(d); server.etag++; return {}; },
      readLocal: () => J(me.local), writeLocal: d => { me.local = J(d); } });
    const N = { local: { log: [], pg: SM.pgFromLocal(LOCAL()) } }, O = { local: { log: [{ t: T, id: 'w:old', m: 'w', k: 'w', y: 'mc', ok: 1, a: 'x' }] } };   // 舊版那台有新作答 → 會 PUT
    await SM.syncOnce(io(SM, N), 'K'); ok(server.doc.pg, '新版推上去有 pg');
    await OLD.syncOnce(io(OLD, O), 'K'); ok(!server.doc.pg, '舊版合併後 PUT 回去：pg 不見了（舊版不認得）');
    await SM.syncOnce(io(SM, N), 'K'); ok(same(server.doc.pg, SM.pgFromLocal(LOCAL())), '新版下次同步從本機補回 pg（一筆都沒少）');
  }

  // ================= 3. A 做進度 → B 強制同步 → 每一處進度都一樣 =================
  const H = harness();
  {
    H.server.docs.set('ABCDEFGH', { text: JSON.stringify({ v: 9, log: [] }), etag: '"v0"' });
    const A = H.device('A'), B = H.device('B');
    await sleep(400);
    actOnA(A);
    await A.K.syncNow('full'); await B.K.syncNow('full'); await sleep(50);
    const pa = probes(A), pb = probes(B), diff = Object.keys(pa).filter(k => !same(pa[k], pb[k]));
    ok(!diff.length, 'B 強制同步後 ' + Object.keys(pa).length + ' 處進度都跟 A 一樣；不一樣：' + diff.map(k => k + ' A=' + pa[k] + ' B=' + pb[k]).join(' ｜ '));
    ok(pa['首頁「下一話」'] === 'comics/v1e2.html' && /✓1/.test(pa['英檢 ✓1']) && pa['社會 單元測驗卡 u1'] === '🏅 最高 92 分・最近 64 分', '（確認 A 那邊真的有這些進度）');
    // A 再同步一次：沒有新東西 → 不 PUT
    const puts0 = H.server.puts; await A.K.syncNow('full'); await B.K.syncNow('full');
    ok(H.server.puts === puts0, '兩台都已一致：再強制同步不會再 PUT');
    const sd = JSON.parse(H.server.docs.get('ABCDEFGH').text);
    ok(sd.pg && SM.bytes(sd.pg) < 1500, '伺服器文件 pg ' + SM.bytes(sd.pg) + ' B');
    A.close(); B.close();
  }

  // ================= 4. sync.js 行為 =================
  // 4a. bfcache：漫畫頁（整頁）寫了本機，首頁從 bfcache 還原 → pageshow：要推上去、要發 kids-sync-updated 讓畫面重畫
  {
    H.reset();
    const A = H.device('A'); await sleep(400);
    const ev0 = A.fired('kids-sync-updated'), before = H.server.puts;
    A.set('kids_comic', { seen: { v1e1: T }, next: 'v1e2' });   // 漫畫頁寫的（首頁凍結中，收不到 storage 事件）
    A.pageshow(true); await sleep(300);
    const sd = H.doc();
    ok(H.server.puts > before && sd.pg && /C=/.test(sd.pg.f), 'pageshow（bfcache 還原）→ 完整同步，把漫畫頁寫的推上去');
    ok(A.fired('kids-sync-updated') > ev0, '別頁改過本機 → 回來時發 kids-sync-updated（首頁、學習島、科目卡重畫）');
    // 回前景（visibilitychange）也一樣
    A.set('kids_anim', { seen: { B: T } }); const p1 = H.server.puts; A.hide(); await sleep(50); A.show(); await sleep(300);
    ok(H.server.puts > p1 && /A=2/.test(H.doc().pg.f), '藏起來（偵測到本機有變就送）／回前景都推得上去: ' + H.doc().pg.f);
    // 輪詢：本機沒變只問 → GET 204；別頁寫了 → 完整同步
    const g0 = H.server.calls.length; await A.K._check('poll'); await sleep(50);
    ok(H.server.calls.slice(g0).every(c => c.method === 'GET'), '輪詢、本機沒變：只 GET（伺服器沒變回 204）');
    A.set('kids_word_lv', { gw: { 1: 3 } }); const p2 = H.server.puts; await A.K._check('poll'); await sleep(50);
    ok(H.server.puts > p2, '輪詢、本機被別頁改了：改完整同步、推上去');
    A.close();
  }
  // 4b. 藏起來時剛好有一次在送：送完不等 300ms 馬上接著送，也帶 keepalive
  {
    H.reset();
    const A = H.device('A'); await sleep(400);
    H.server.delay = 300;
    A.answer('q1'); A.K.touch(); await sleep(1650);   // 1.5 秒 debounce 到了，PUT 在路上
    const t0 = H.server.calls.length;
    A.answer('q2'); A.K.touch(); A.hide();
    await sleep(900); H.server.delay = 0;
    const puts = H.server.calls.slice(t0).filter(c => c.method === 'PUT'), first = H.server.calls.filter(c => c.method === 'PUT').slice(-2)[0];
    ok(puts.length >= 1 && puts[puts.length - 1].keepalive, '藏起來時排著的那次 PUT 帶 keepalive: ' + C(puts));
    ok(H.has('q2'), '含 q2 的那次送到了');
    const gap = puts.length && first ? puts[puts.length - 1].at - (first.at + 300) : 999;
    ok(gap < 150, '前一次送完就接著送（沒有多等 300ms）：' + gap + ' ms');
    A.show(); await sleep(100); A.close();
  }
  // 4c. ⚠️ 沒同步（附原因）／📴 離線／成功後恢復 ☁️
  {
    H.reset();
    const A = H.device('A'); await sleep(400);
    const cases = [[{ status: 500 }, /伺服器出錯（500）/], [{ status: 413 }, /太大.*413/], [{ always412: true }, /撞在一起/]];
    for (const [f, re] of cases) {
      H.server.fail = f; A.answer('e' + Math.random()); A.K.touch(); await sleep(1700);
      const cl = A.cloud();
      ok(cl && /⚠️/.test(cl.innerHTML) && re.test(cl.attrs['aria-label']) && re.test(A.K.info().err) && A.K.info().pending, '雲朵 ⚠️ 沒同步＋原因 ' + C(f) + ': ' + (cl && cl.attrs['aria-label']));
    }
    H.server.fail = { net: true }; await A.K.syncNow('full');
    ok(/📴/.test(A.cloud().innerHTML), '斷網：📴 離線');
    H.server.fail = null; A.online(); await sleep(400);
    ok(/☁️/.test(A.cloud().innerHTML) && !A.K.info().err && !A.K.info().pending, '恢復後補傳成功：☁️、沒有原因、沒有待上傳');
    H.server.docs.delete('ABCDEFGH'); await A.K.syncNow('full');
    ok(/⚠️/.test(A.cloud().innerHTML) && /找不到/.test(A.K.info().err), '找不到同步碼：⚠️＋原因');
    const i = A.K.info();
    ok(i.tail === 'GH' && i.lastUp && i.lastDown && i.app === 'browser' && Array.isArray(i.localOnly), '帳號頁要的欄位：同步碼後兩碼、上次上傳／下載成功、主畫面 App 或瀏覽器、只在這台的資料 ' + C(i));
    A.close();
  }
  // 4d. 帳號綁定：開頁失敗 → 有排重試（40 秒起倍增，最多 10 分鐘）；重試成功綁上；綁定時保留「待上傳」
  {
    H.reset();
    const tok = 'x.' + Buffer.from(JSON.stringify({ sub: 'K001', exp: Math.floor(Date.now() / 1000) + 864e4 })).toString('base64').replace(/=+$/, '') + '.y';
    let failN = 3, calls = 0;
    const auth = { configured: () => true, isLoggedIn: () => true, token: () => tok,
      api: async (a, p) => { calls++; if (a === 'getSyncCode') { if (failN-- > 0) throw Object.assign(new Error('busy'), { code: 'server_error' }); return { ok: true, sync_code: 'ABCD-EFGH' }; } return { ok: true, sync_code: p.sync_code }; } };
    const E = H.device('E', { store: new Map(), auth }); await sleep(400);
    ok(!E.get('ke_sync').code && /綁定失敗/.test(E.K.info().err), '開頁綁定失敗：還沒有碼、原因＝帳號綁定失敗');
    const d1 = E.lastLong(); ok(d1 && d1.ms === 40000, '有排重試：40 秒後 ' + C(d1 && d1.ms));
    await E.fireLong(); await sleep(100); const d2 = E.lastLong();
    ok(calls === 2 && d2 && d2.ms === 80000, '第 2 次也失敗：再退避到 80 秒 ' + C(d2 && d2.ms));
    await E.fireLong(); await sleep(100); const d3 = E.lastLong();
    ok(calls === 3 && d3.ms === 160000, '第 3 次：160 秒');
    await E.fireLong(); await sleep(300);
    ok(E.get('ke_sync').code === 'ABCD-EFGH' && E.get('ke_sync').acct === 'K001' && !E.K.info().err, '重試成功：綁上帳號的碼、⚠️ 消失');
    ok(SM_backoffMax(), '退避上限 10 分鐘（不會一直打 GAS）');
    // 綁定時「待上傳」不能被清掉
    E.set('ke_sync', Object.assign(E.get('ke_sync'), { pending: true, acct: 'OTHER' }));
    H.server.fail = { status: 500, methods: ['PUT'] }; E.answer('pp'); E.reload();   // 換帳號（acct 對不上）→ 重新綁定，但上傳失敗
    const E2 = H.device('E2', { store: E.store, auth }); await sleep(500); H.server.fail = null;
    ok(E2.get('ke_sync').pending === true, '綁定後上傳失敗：待上傳還在（以前會被清掉，要等下一次變動才補傳）');
    E.close(); E2.close();
  }
  // 4e. 漫畫頁沒有 kids-auth.js：讀本機的票確認同一個帳號 → 不解除綁定、照樣推；票沒了（登出）才解除
  {
    H.reset();
    const tok = 'x.' + Buffer.from(JSON.stringify({ sub: 'K001', exp: Math.floor(Date.now() / 1000) + 864e4 })).toString('base64').replace(/=+$/, '') + '.y';
    const store = new Map([['ke_sync', JSON.stringify({ code: 'ABCD-EFGH', acct: 'K001' })], ['kids_jwt', tok]]);
    const P = H.device('comic', { store, noAuth: true }); await sleep(400);
    ok(P.get('ke_sync').code === 'ABCD-EFGH', '漫畫頁載 sync.js（沒 kids-auth）：沒有解除綁定');
    P.set('kids_comic', { seen: { v3e4: T }, next: 'v3e5' }); P.set('kids_daily', SM.ddAdd({}, 'dX', Date.now(), 'v', true)); P.K.touch(); await sleep(1700);
    ok(/C=/.test((H.doc().pg || {}).f || '') && Object.keys(H.doc().dd || {}).length, '漫畫頁自己就推上去（看完一話、每日清單歷史 1 話）');
    P.close();
    const s2 = new Map([['ke_sync', JSON.stringify({ code: 'ABCD-EFGH', acct: 'K001' })]]);
    const Q = H.device('comic2', { store: s2, noAuth: true }); await sleep(300);
    ok(!Q.get('ke_sync').code, '票不見了（登出）：跟 kids-auth 一樣解除綁定');
    Q.close();
  }
  console.log(`sync-progress: ${pass} passed, ${fail} failed`);
  if (fail) process.exitCode = 1;
  process.exit();
})().catch(e => { console.error(e); process.exit(1); });

function SM_backoffMax() { const SA = R('syncauto.js'); return SA.backoff(20, SA.POLL_MS, 10 * 60 * 1000) === 600000; }

// ---------- 假伺服器＋假裝置（每台一個 vm context）----------
function harness() {
  const server = { docs: new Map(), ver: 0, calls: [], puts: 0, fail: null, delay: 0 };
  async function fakeFetch(url, o) {
    o = o || {}; const u = new URL(url), method = o.method || 'GET', code = (u.searchParams.get('code') || '').replace('-', '');
    const call = { method, keepalive: !!o.keepalive, at: Date.now(), bytes: o.body ? Buffer.byteLength(o.body) : 0 }; server.calls.push(call);
    if (server.delay) await sleep(server.delay);
    const resp = (status, json, h) => ({ status, ok: status >= 200 && status < 300, headers: { get: k => (h || {})[k] || null }, json: async () => json });
    const f = server.fail && (server.fail.methods || ['GET', 'PUT', 'POST']).includes(method) ? server.fail : null;
    if (f && f.net) throw new TypeError('Failed to fetch');
    if (f && f.status) return resp(f.status, { ok: false });
    if (method === 'POST') { server.docs.set('ABCDEFGH', { text: JSON.stringify({ v: 9, log: [] }), etag: '"v' + (++server.ver) + '"' }); return resp(201, { ok: true, code: 'ABCD-EFGH' }); }
    const d = server.docs.get(code);
    if (method === 'GET') { if (!d) return resp(404); if (u.searchParams.get('since') === d.etag) return resp(204, null, { 'X-Sync-Etag': d.etag }); return resp(200, JSON.parse(d.text), { 'X-Sync-Etag': d.etag }); }
    if (method === 'PUT') {
      if (!d) return resp(404);
      if (f && f.always412) return resp(412);
      const im = o.headers && o.headers['If-Match']; if (im && im !== d.etag) return resp(412);
      const etag = '"v' + (++server.ver) + '"'; server.docs.set(code, { text: o.body, etag }); server.puts++; return resp(200, {}, { 'X-Sync-Etag': etag });
    }
    return resp(405);
  }
  // SYNC_JS＝拿別版 sync.js 來跑（例：線上舊版，確認這些測試抓得到舊問題）
  const FILES = ['syncmerge.js', 'syncauto.js', 'sync.js'].map(f => [f, fs.readFileSync(f === 'sync.js' && process.env.SYNC_JS ? process.env.SYNC_JS : path.join(root, f), 'utf8')]);
  const live = [];
  function fakeEl() {
    const e = { className: '', style: {}, attrs: {}, innerHTML: '', offsetWidth: 60, parentNode: null, previousElementSibling: null, setAttribute(k, v) { this.attrs[k] = v; }, addEventListener() { }, remove() { this.parentNode = null; }, appendChild(c) { c.parentNode = this; }, getBoundingClientRect: () => ({}), insertAdjacentElement(p, c) { c.previousElementSibling = this; c.parentNode = this; this._next = c; } };
    e.classList = { contains: c => (' ' + e.className + ' ').includes(' ' + c + ' '), add: c => { if (!e.classList.contains(c)) e.className += ' ' + c; }, remove: c => { e.className = (' ' + e.className + ' ').replace(' ' + c + ' ', ' ').trim(); } };
    return e;
  }
  function device(name, opts) {
    opts = opts || {};
    const store = opts.store || new Map([['ke_sync', JSON.stringify({ code: 'ABCD-EFGH' })]]), L = {}, DL = {}, longs = [], timers = new Set();
    const on = (M, k, f) => { (M[k] = M[k] || []).push(f); }, fire = (M, k, ev) => (M[k] || []).forEach(f => f(ev));
    const chip = fakeEl(); chip.className = 'ka-chip';
    const doc = { visibilityState: 'visible', readyState: 'complete', head: fakeEl(), body: fakeEl(), documentElement: fakeEl(), querySelector: s => (s === '.ka-chip' ? chip : null), querySelectorAll: () => [], createElement: fakeEl, addEventListener: (k, f) => on(DL, k, f) };
    let closed = false; const counts = {};
    // 長的計時器（輪詢 20 秒、退避、重試綁定）不真的等：記下來，測試自己觸發
    const st = (f, ms) => { if (closed) return 0; if (ms > 5000) { const t = { f, ms, id: Symbol() }; longs.push(t); return t.id; } const id = setTimeout(() => { timers.delete(id); if (!closed) f(); }, ms); timers.add(id); return id; };
    const ct = id => { const i = longs.findIndex(t => t.id === id); if (i >= 0) longs.splice(i, 1); else { clearTimeout(id); timers.delete(id); } };
    const ls = { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k), key: i => [...store.keys()][i] || null, get length() { return store.size; } };
    const ctx = { console, localStorage: ls, document: doc, navigator: { onLine: true }, location: { hostname: 'localhost', origin: 'http://localhost:8', hash: '', replace() { } }, fetch: fakeFetch, TextEncoder,
      atob: s => Buffer.from(s, 'base64').toString('binary'), setTimeout: st, clearTimeout: ct, setInterval: () => 0, Date, URL, JSON, Math, Promise, matchMedia: () => ({ matches: false }),
      CustomEvent: class { constructor(t, o) { this.type = t; this.detail = o && o.detail; } }, Event: class { constructor(t) { this.type = t; } }, __KIDS_TEST_SYNC_URL: 'http://127.0.0.1:9/api/sync', frames: { length: 0 }, innerWidth: 820 };
    if (!opts.noAuth) ctx.KidsAuth = opts.auth || undefined;
    ctx.window = ctx; ctx.top = ctx; ctx.globalThis = ctx;
    ctx.addEventListener = (k, f) => on(L, k, f); ctx.dispatchEvent = ev => { counts[ev.type] = (counts[ev.type] || 0) + 1; fire(L, ev.type, ev); };
    vm.createContext(ctx); FILES.forEach(([f, s]) => vm.runInContext(s, ctx, { filename: f }));
    const get = (k, d) => { const v = store.get(k); try { return v == null ? (d === undefined ? {} : d) : JSON.parse(v); } catch (e) { return d; } };
    const D = { name, store, K: ctx.KESync, get, set: (k, v) => store.set(k, JSON.stringify(v)), fired: t => counts[t] || 0,
      hide() { doc.visibilityState = 'hidden'; fire(DL, 'visibilitychange', {}); fire(L, 'pagehide', { persisted: true }); },
      show() { doc.visibilityState = 'visible'; fire(DL, 'visibilitychange', {}); },
      pageshow(p) { doc.visibilityState = 'visible'; fire(L, 'pageshow', { persisted: p }); },
      online() { fire(L, 'online', {}); },
      cloud: () => chip._next || null,
      answer(id) { const Lg = get('ke_log', []), e = { t: Date.now(), id, m: 'w', k: 'w', y: 'mc', ok: 1, a: 'a-' + id }; e.r = SM.rid(e); Lg.push(e); store.set('ke_log', JSON.stringify(Lg)); },
      lastLong: () => longs[longs.length - 1] || null,
      fireLong: async () => { const t = longs.pop(); if (t) await t.f(); },
      reload() { closed = true; }, close() { closed = true; timers.forEach(clearTimeout); }
    };
    live.push(D); return D;
  }
  return { server, device, doc: () => JSON.parse(server.docs.get('ABCDEFGH').text), has: id => (JSON.parse(server.docs.get('ABCDEFGH').text).log || []).some(e => e.id === id),
    reset() { live.forEach(d => d.close()); server.docs.clear(); server.calls.length = 0; server.fail = null; server.delay = 0; server.docs.set('ABCDEFGH', { text: JSON.stringify({ v: 9, log: [] }), etag: '"v' + (++server.ver) + '"' }); } };
}

// ---------- A 做的事（形狀照各頁寫本機的程式）----------
function actOnA(A) {
  const now = Date.now(), dev = 'dA1';
  A.set('ke_sync_ctr', { dev, ctr: {} });
  const rec = (sec, key, val) => { const cur = A.get('kids_done', {}); let next = KC.record(cur, sec, key, val, Date.now()); next = KL.onRecord(cur, next, sec, key, val, DATA, { done: cur, comic: A.get('kids_comic', {}), gept: A.get('kids_gept', {}) }); A.set('kids_done', next); };
  rec('mg', 'g5b1q', 90); rec('mg', 'g5b1t', 85);                                            // 完成一個單元（五下單元一）
  rec('geo', 'm1p1', 90); A.set('kids_daily', SM.ddAdd(A.get('kids_daily', {}), dev, now, 'w', true));   // 今日清單「地理」一組
  A.set('kids_daily', SM.ddAdd(A.get('kids_daily', {}), dev, now, 'v', true));                // 漫畫看完一話：KidsDaily.finish('comic')
  { const cur = A.get('kids_done', {}); A.set('kids_done', KL.onRecord(cur, SM.normDone(cur), 'n', 'v1e1', 1, DATA, { done: cur, comic: {}, gept: {} })); }   // KidsLock.bump
  A.set('kids_comic', { seen: { v1e1: now }, next: 'v1e2' });
  A.set('kids_zh_reading', { 'zh1-01': { best: 90, n: 2, at: now, done: now }, 'zh1-02': { best: 50, n: 3, at: now } }); rec('zh', 'zh1-01', 90);
  A.set('kids_zh_idioms', { cy001: { best: 80, n: 1, at: now, done: now } }); rec('cy', 'cy001', 80);
  A.set('kids_anim', { seen: { A: now, C: now }, rot: { A: 1 } });
  A.set('kids_writing', { t: { t01: { st: 5, reach: 5, main: ['a', 'b', 'c', 'd'], done: now } }, l: { L01: { best: 80, n: 1, done: now }, L02: { best: 40, n: 2 } } });
  A.set('kids_gept', { best: { 'e-L1-01': { p: 80, c: 4, n: 5, t: now } }, mock: [{ id: 'e-M-01', t: now, lc: 20, ln: 25, rc: 30, rn: 35, L: 96, R: 103, pass: true }], task: { 'e-W1-01': { t: now, sc: 3, b: 1 } } });
  A.set('kids_mm_exam', { 'social:u1': { best: 92, last: 64, n: 2, at: now }, 'social:mock-u1-u2': { best: 88, last: 88, n: 1, at: now }, _seen: { social: { 'q:abc': now } } });
  A.set('kids_mm_lit', { 'social:u1-L1': { best: 100, n: 1, at: now, open: { q3: '我覺得…' } } });
  A.set('kids_mm_cards', { 'social:u1-01': now, 'social:u1-02': now });
  A.set('kids_word_lv', { gw: { 1: 3, 2: 1 } });
  A.K.touch();
}
// ---------- 畫面上的進度（照各頁原始碼讀本機）----------
function probes(D) {
  const g = (k, d) => D.get(k, d), agg = obj(g('ke_agg', {}));
  const ctx = { learned: g('ke_learned', {}), log: g('ke_log', []), agg: agg.agg || {}, done: g('kids_done', {}), mm: g('kids_mm_progress', {}), mmBlanks: g('kids_mm_blanks', {}), scratch: g('kids_scratch_done', {}) };
  const M = KC.build(DATA, ctx), today = SM.ddDay(Date.now()), dd = g('kids_daily', {}), dg = g('kids_daily_goal', {}), done = g('kids_done', {});
  const lk = KL.lookup(DATA, Object.assign({}, ctx, { comic: g('kids_comic', {}), gept: g('kids_gept', {}) })), badge = k => KL.badgeText(lk.state(k)) || '—';
  const c = KD.checkDay(obj(SM.ddSum(dd)[today]), KD.readDays(done, SM.ddDay)[today], KD.goalOn(dg, today)), st = IS.ddStats(SM.ddSum(dd), today);
  const zr = g('kids_zh_reading', {}), zi = g('kids_zh_idioms', {}), sd = SM.normDone(done);
  const zst = (p, isDone) => (isDone ? '✅ 已完成' + (p.best != null ? '（最佳 ' + p.best + '%）' : '') : p.n ? '🟡 做過 ' + p.n + ' 次，最佳 ' + (p.best || 0) + '%' : '⚪');   // chinese/reading.js、idioms.js status()
  const gp = g('kids_gept', {}), ex = g('kids_mm_exam', {}), lit = g('kids_mm_lit', {}), cards = g('kids_mm_cards', {}), wr = obj(g('kids_writing', {})), wl = g('kids_word_lv', {});
  const exCard = k => { const r = obj(ex[k]); return r.n ? '🏅 最高 ' + r.best + ' 分・最近 ' + r.last + ' 分' : '⚪ 還沒考過'; };                        // mindmap.js exCard
  const litCard = k => { const pr = obj(lit[k]); return pr.n ? (pr.best === 100 ? '✅ 全對過' : '🟡 最佳 ' + pr.best + '%') : '⚪ 還沒做'; };         // mindmap.js 素養題組
  const lSt = id => { const r = obj(obj(wr.l)[id]); return r.done ? '✓ 已完成（最佳 ' + r.best + '%）' : r.n ? '🟡 最佳 ' + (r.best || 0) + '%' : '⚪ 還沒做'; };   // writing.js lStatus
  return {
    '課程地圖 整體': M.done + '/' + M.total, '課程地圖 各科': M.subjects.map(s => s.k + s.done + '/' + s.total).join(' '),
    '課程地圖 單元狀態': M.subjects.map(s => s.units.filter(u => u.status !== 'todo').map(u => u.key + '=' + u.status + u.pct).join(',')).join('|'),
    '科目卡 動畫教學 ✓': ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(x => (obj(g('kids_anim', {}).seen)[x] ? '✓' : '・') + x).join(''),
    '科目卡 閱讀 已完成 n 篇': new Set(Object.keys(sd.zh).concat(Object.keys(zr).filter(k => zr[k] && zr[k].done))).size,
    '科目卡 成語 已完成 n 個': new Set(Object.keys(sd.cy).concat(Object.keys(zi).filter(k => zi[k] && zi[k].done)).filter(k => /^cy\d{3}$/.test(k))).size,
    '科目卡 作文 已完成 n 題': Object.keys(obj(wr.t)).filter(k => wr.t[k] && wr.t[k].done).length,
    '科目卡 ✓1／✓2': ['mg:g5b1', 'geo:m1', 'zh1-01', 'cy001'].map(k => k + badge(k)).join(' '),
    '單元頁頁首橫幅': ['mg:g5b1', 'geo:m1'].map(k => KC.statusText(KC.evaluate(k, DATA, ctx))).join(' '),
    '今日清單 x/5': c.doneN + '/' + c.total + ' ' + c.rows.map(r => r.key + (r.done ? '✓' : r.n + '/' + r.goal)).join(' '),
    '首頁「下一話」': KD.nextComic(g('kids_comic', {})),
    '學習島 成長': C(IS.growth({ pct: IS.pctOf(M.subjects), days: st.days, streak: st.streak, learned: IS.learnedN(ctx.learned) })),
    '家長頁 14 天': C(KD.view({ dd, log: ctx.log, ev: KD.evidence({ mk: g('kids_mistakes', {}), mm: ctx.mm, done, exam: ex, zhRead: zr, zhIdiom: zi }, SM.ddDay), today, dg, done }).rows.slice(0, 3)),
    '漫畫目錄 ✓1': ['v1e1', 'v1e2'].map(k => k + badge(k)).join(' '),
    '閱讀清單 zh1-01': zst(obj(zr['zh1-01']), !!(obj(zr['zh1-01']).done || sd.zh['zh1-01'])), '閱讀清單 zh1-02': zst(obj(zr['zh1-02']), !!(obj(zr['zh1-02']).done || sd.zh['zh1-02'])),
    '成語清單 cy001': zst(obj(zi.cy001), !!(obj(zi.cy001).done || sd.cy.cy001)),
    '英檢 初試第 1 組': (b => (b ? b.p + '%' : '—'))(obj(gp.best)['e-L1-01']), '英檢 模擬考紀錄': (gp.mock || []).map(r => r.id + ':' + r.L + '/' + r.R + (r.pass ? '達標' : '')).join(' ') || '—',
    '英檢 寫作第 1 組': obj(gp.task)['e-W1-01'] ? '✓' : '—', '英檢 ✓1': ['e-L1-01', 'e-M-01', 'e-W1-01'].map(k => k + badge(k)).join(' '),
    '社會 單元測驗卡 u1': exCard('social:u1'), '社會 段考模擬卡': exCard('social:mock-u1-u2'), '社會 素養題組': litCard('social:u1-L1'),
    '社會 閃卡看過': Object.keys(cards).filter(k => /^social:/.test(k)).sort().join(','),
    '應用題分級': WL.maxD(obj(wl.gw)) + '★', '作文 修辭課 L01': lSt('L01'), '作文 修辭課 L02': lSt('L02'),
    '小助理 單元測驗最近分數': String(obj(ex['social:u1']).last)
  };
}
