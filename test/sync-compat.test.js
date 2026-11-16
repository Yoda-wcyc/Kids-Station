// sync-compat.test.js — 同步文件瘦身（2026-11-17）的新舊版相容：舊版＝test/fixtures/syncmerge-old-v9.js（瘦身前、線上 4cabaaa 那一版，凍結不改）
//   新版讀舊格式、舊版讀新格式、新舊混著合併、兩台（一台舊版快取頁、一台新版）輪流 syncOnce：都不能丟資料、不能報錯，舊版不能把新資料蓋掉或刪掉。
// 用法：node test/sync-compat.test.js
'use strict';
const path = require('path'), root = path.join(__dirname, '..');
const OLD = require(path.join(__dirname, 'fixtures', 'syncmerge-old-v9.js'));
const NEW = require(path.join(root, 'syncmerge.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL sync-compat:', m); } };
const C = NEW.canon, same = (a, b) => C(a) === C(b), J = x => JSON.parse(JSON.stringify(x));
const T = 1.79e12, rec = (ok_, wrong, streak, last, lastShown) => ({ ok: ok_, wrong, streak, last, lastShown });

// 本機的樣子（sync.js readLocal：kids_mm_blanks 是完整物件、節點 id 是完整的）
const local0 = () => ({
  log: [{ t: T, id: 'w:apple:listen', m: 'words', k: 'words:fruit', y: 'listen-choose', ok: 1, a: 'apple' }],
  mm: { 'social:u1': { unlocked: 3, best: { 1: 100, 2: 80 }, passedAt: { 1: T, 2: T + 1 }, lastPassAt: T + 1, reviewStep: 1 } },
  mmBlanks: {
    'social:u1': { sess: 12, w: { '臺南': rec(4, 1, 2, 'ok', 11) }, a: { 'u1-l1': rec(3, 1, 1, 'ok', 10), 'u1-l1-c': rec(0, 2, 0, 'wrong', 9), 'rel:u1-l1': rec(5, 0, 5, 'ok', 3), odd: rec(1, 0, 1, 'ok', 2) }, q: { h1: 1, h2: 1 } },
    'science:n10': { sess: 4, w: {}, a: { 'n10-a1': rec(9, 0, 4, 'ok', 4), 'n10-a2b': rec(1, 1, 0, 'wrong', 3) } }
  },
  eq: { at: T, items: [{ q: 'x+1=5', own: true, t: T }], del: Object.fromEntries(Array.from({ length: 90 }, (_, i) => ['(x+' + i + ')=' + (i + 9), T - 1e6 + i])) },
  done: { bal: { b1: T }, n: { m: '2' } },
  mk: { social: { q1: { c: 0, w: 1, t: T, u: T, p: { u: 'u1' } } } },
  dg: { 261101: '60,30,1,0' }
});

// ---------- 1. 格式：新版短寫 a、墓碑 50；舊版不認得的 key 也不丟 ----------
const L = local0(), nd = NEW.normalize(L), od = OLD.normalize(L);
ok(same(Object.keys(nd.mmBlanks['social:u1'].a), ['-l1', '-l1-c', 'odd']) && same(Object.keys(nd.mmBlanks['science:n10'].a), ['-a1', '-a2b']), 'new: node ids written without the unit name: ' + C(nd.mmBlanks));
ok(Object.keys(nd.eq.del).length === 50 && Object.keys(od.eq.del).length === 90, 'new keeps 50 newest tombstones, old kept up to 100');
ok(NEW.bytes(nd) < NEW.bytes(od), 'new doc is smaller: ' + NEW.bytes(nd) + ' < ' + NEW.bytes(od));

// ---------- 2. 新版讀舊格式：跟直接讀本機一樣；expandBl 還原成本機的完整 id ----------
ok(same(NEW.normalize(od), nd), 'new reads an old-format doc = same as reading local');
const back = NEW.expandBl(nd.mmBlanks, {});
ok(same(Object.keys(back['social:u1'].a).sort(), ['odd', 'u1-l1', 'u1-l1-c']) && same(back['science:n10'].a['n10-a1'], { ok: 9, wrong: 0, streak: 3, last: 'ok', lastShown: 4 }), 'expandBl restores full node ids for the local store: ' + C(back));
ok(same(NEW.normalize({ mmBlanks: NEW.expandBl(nd.mmBlanks, L.mmBlanks) }).mmBlanks, nd.mmBlanks), 'local → doc → local → doc is stable (no re-upload loop)');

// ---------- 3. 舊版讀新格式：不報錯、一筆都不丟（舊版整理後新版再讀＝原文件） ----------
let oRead = null, err = null; try { oRead = OLD.normalize(J(nd)); } catch (e) { err = e; }
ok(!err && same(NEW.normalize(oRead), nd), 'old reads a new-format doc: no error, nothing dropped (new → old → new is lossless) ' + (err && err.message));
ok(oRead && oRead.mmBlanks['social:u1'].a['-l1'] === nd.mmBlanks['social:u1'].a['-l1'], 'old keeps the short node keys as-is');
let oX = null; try { oX = OLD.expandBl(oRead.mmBlanks, {}); } catch (e) { err = e; }
ok(!err && oX['social:u1'].a['-l1'] && oX['social:u1'].a['-l1'].ok === 3, 'old expandBl writes them to its local store without error (harmless extra keys)');

// ---------- 4. 舊版合併新資料：不能蓋掉、不能刪掉 ----------
// 新版那台在 u1-l1 答了 30 次（文件裡是 '-l1'）；舊版那台本機只有 4 次的舊紀錄 → 舊版合併後 PUT，新版再讀，答 30 次的那份還在
const newer = NEW.normalize(Object.assign(local0(), { mmBlanks: { 'social:u1': { sess: 40, w: {}, a: { 'u1-l1': rec(20, 10, 0, 'wrong', 39), 'u1-l9': rec(2, 0, 2, 'ok', 38) } } } }));
const oldLocal = local0();
const viaOld = OLD.merge(oldLocal, J(newer)), direct = NEW.merge(oldLocal, newer);
ok(same(NEW.normalize(viaOld), direct), 'old merges new doc + its local → new reads it = new merging directly (nothing lost or overwritten)');
const l1 = NEW.normalize(viaOld).mmBlanks['social:u1'].a['-l1'];
ok(l1 === '20,10,0,39', 'the newer device\'s 30-answer record survives the old device\'s merge+PUT: ' + l1);
ok(NEW.normalize(viaOld).mmBlanks['social:u1'].a['-l9'] === '2,0,2,38' && NEW.normalize(viaOld).mmBlanks['social:u1'].a['-l1-c'] === '0,2,0,9', 'records only on one side are kept from both');
// 舊版拿到新文件、沒有自己的資料就直接 PUT 回去（只整理）：也一樣
ok(same(NEW.normalize(OLD.merge({}, J(newer))), newer), 'old device with no local data passes the new doc through unchanged');
// 結合、交換：新舊格式混著合併，順序不影響結果
const a = od, b = NEW.normalize(newer), c = OLD.normalize(J(newer));
ok(same(NEW.merge(a, b), NEW.merge(b, a)) && same(NEW.merge(NEW.merge(a, b), c), NEW.merge(a, NEW.merge(b, c))) && same(NEW.merge(NEW.merge(a, b), b), NEW.merge(a, b)), 'mixed-format merges are commutative, associative, idempotent');

// ---------- 5. 兩台輪流 syncOnce：舊版快取頁的 iPad ＋ 新版電腦 ----------
(async () => {
  const server = { doc: { v: 9, log: [] }, etag: 0 };
  // 本機：kids_mm_blanks 存完整物件（sync.js writeLocal：Object.assign(本機, expandBl(文件, 本機))），其他欄位存文件的樣子
  const dev = (SM, local) => ({ SM, local, io: {
    get: async () => ({ doc: J(server.doc), etag: server.etag }),
    put: async (code, d, e) => { if (e !== server.etag) return { conflict: true }; server.doc = J(d); server.etag++; return {}; },
    readLocal: function () { return J(this.self.local); },
    writeLocal: function (d) { const me = this.self, mb = Object.assign({}, me.local.mmBlanks, SM.expandBl(d.mmBlanks, me.local.mmBlanks)); me.local = Object.assign(J(d), { mmBlanks: mb }); }
  } });
  const mk = (SM, local) => { const d = dev(SM, local); d.io.self = d; return d; };
  const N = mk(NEW, Object.assign(local0(), { mmBlanks: { 'social:u1': { sess: 40, w: { '荷蘭': rec(7, 0, 3, 'ok', 40) }, a: { 'u1-l1': rec(20, 10, 0, 'wrong', 39), 'u1-l9': rec(2, 0, 2, 'ok', 38) }, q: { h9: 1 } } } }));
  const O = mk(OLD, local0());
  let e2 = null;
  try { for (let i = 0; i < 3; i++) { await NEW.syncOnce(N.io, 'K'); await OLD.syncOnce(O.io, 'K'); } await NEW.syncOnce(N.io, 'K'); } catch (e) { e2 = e; }
  ok(!e2, 'alternating new / old syncOnce: no error ' + (e2 && e2.stack));
  const want = NEW.merge(local0(), N.local), sv = NEW.normalize(server.doc);
  ok(same(sv.mmBlanks, want.mmBlanks) && same(sv.done, want.done) && same(sv.mk, want.mk) && sv.log.length === want.log.length, 'server ends with everything from both devices (as if both were new): ' + C(sv.mmBlanks['social:u1']));
  ok(sv.mmBlanks['social:u1'].a['-l1'] === '20,10,0,39' && sv.mmBlanks['social:u1'].w['荷蘭'] === 'm7,40' && sv.mmBlanks['social:u1'].q.split(' ').length === 3, 'new device\'s records not overwritten by the old device');
  const nl = N.local.mmBlanks['social:u1'];
  ok(nl.a['u1-l1'].ok === 20 && nl.a['u1-l1-c'] && !Object.keys(nl.a).some(k => k.charAt(0) === '-'), 'new device local: full node ids, old device\'s record pulled in, no short keys left: ' + C(Object.keys(nl.a)));
  const ol = O.local.mmBlanks['social:u1'];
  ok(ol.a['u1-l1'].ok === 3 && ol.a['u1-l1-c'].wrong === 2 && ol.w['荷蘭'].ok === 7, 'old device local keeps its own records (and gets the new device\'s words)');
  ok(Object.keys(NEW.normalize(server.doc).eq.del).length === 50, 'tombstones back to 50 after the new device syncs');
  // 舊版留下的短寫垃圾 key：新版下次同步寫本機時清掉、內容已經在完整 id 那筆
  const junk = { 'social:u1': { sess: 1, w: {}, a: { '-l1': rec(1, 0, 1, 'ok', 1), 'u1-l1': rec(1, 0, 1, 'ok', 1) } } };
  const jx = NEW.expandBl(NEW.normalize({ mmBlanks: junk }).mmBlanks, junk)['social:u1'].a;
  ok(same(Object.keys(jx), ['u1-l1']), 'short keys an old device left in local storage are cleaned up by the new expandBl: ' + C(jx));
  console.log(`sync-compat: ${pass} passed, ${fail} failed`);
  if (fail) process.exitCode = 1;
})().catch(e => { console.error(e); process.exit(1); });
