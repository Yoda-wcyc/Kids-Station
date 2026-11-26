// sync-blanks.test.js — 心智圖挖空紀錄 mmBlanks 瘦身（2026-11-26）：q、lastShown 不同步，只留本機
//   新舊雙向：舊版＝test/fixtures/syncmerge-old-1121.js（11-21 線上版）、test/fixtures/syncmerge-old-1126.js（c6b7a9d，11-26 瘦身前的線上版），都凍結不改。
//   舊→新、新→舊、新→新：紀錄一筆不掉、計數不變；新版本機的 q／lastShown 在各種合併下都不會被清掉；兩台輪流 syncOnce 會收斂（不會一直 PUT）。
// 用法：node test/sync-blanks.test.js
'use strict';
const path = require('path'), root = path.join(__dirname, '..');
const NEW = require(path.join(root, 'syncmerge.js'));
const OLDS = { 'old-1121': require(path.join(__dirname, 'fixtures', 'syncmerge-old-1121.js')), 'old-1126': require(path.join(__dirname, 'fixtures', 'syncmerge-old-1126.js')) };
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL sync-blanks:', m); } };
const C = NEW.canon, same = (a, b) => C(a) === C(b), J = x => JSON.parse(JSON.stringify(x));
const rec = (o, w, s, last, ls) => { const r = { ok: o, wrong: w, streak: s, last }; if (ls != null) r.lastShown = ls; return r; };
// 只看計數（答對、答錯、streak≥3 與否、最後對錯）：同步要保住的就是這些
const cnt = r => { if (typeof r === 'string') r = NEW.expandBl({ x: { sess: 0, w: { k: r }, a: {} } }).x.w.k; return [Math.min(r.ok, 99), Math.min(r.wrong, 99), Math.min(r.streak, 3) >= 3 ? 3 : Math.min(r.streak, 3), r.streak > 0 ? 'o' : 'w'].join(); };
const cnts = bl => { const o = {}; Object.keys(bl).sort().forEach(u => ['w', 'a'].forEach(s => Object.keys(bl[u][s] || {}).sort().forEach(k => { o[u + '|' + s + '|' + k] = cnt(bl[u][s][k]); }))); return o; };

// 兩台的本機（kids_mm_blanks 是完整物件，跟 blanks.js 寫的一樣）
const localN = () => ({ log: [], mmBlanks: {
  'social:u1': { sess: 30, w: { '臺南': rec(4, 1, 2, 'ok', 29), '荷蘭': rec(7, 0, 3, 'ok', 28), '鄭成功': rec(0, 0, 0, undefined, 30) }, a: { 'u1-l1': rec(20, 10, 0, 'wrong', 27), 'u1-l2': rec(1, 0, 1, 'ok', 26) }, q: { h1: 1, h2: 1 } },
  'science:n3': { sess: 5, w: { '光合作用': rec(2, 2, 0, 'wrong', 5) }, a: {}, q: { h7: 1 } } } });
const localO = () => ({ log: [], mmBlanks: {
  'social:u1': { sess: 41, w: { '臺南': rec(40, 9, 5, 'ok', 41), '荷蘭': rec(3, 1, 1, 'ok', 40), '原住民': rec(1, 1, 0, 'wrong', 39) }, a: { 'u1-l1': rec(2, 0, 2, 'ok', 38), 'u1-l3': rec(0, 3, 0, 'wrong', 37) }, q: { h3: 1 } },
  'social:u2': { sess: 2, w: { '清朝': rec(1, 0, 1, 'ok', 2) }, a: {}, q: { h9: 1 } } } });

// ---------- 1. 新版的寫法：沒有 q、沒有 lastShown；尾巴逗號留著 ----------
const nN = NEW.normalize(localN()).mmBlanks;
ok(same(nN['social:u1'], { sess: 30, w: { '臺南': '4,1,2,', '荷蘭': 'm7,' }, a: { '-l1': '20,10,0,', '-l2': '1,0,1,' } }) && !('q' in nN['science:n3']), 'new format: "ok,wrong,streak," / "m<n>,", no q, unanswered not synced: ' + C(nN));
ok(same(NEW.normalize({ mmBlanks: nN }).mmBlanks, nN), 'new format: normalize idempotent');

// ---------- 2. 新→舊：舊版讀新文件，一筆不掉、計數一樣；舊版整理後新版再讀＝原文件 ----------
Object.keys(OLDS).forEach(name => {
  const OLD = OLDS[name], doc = NEW.normalize(localN());
  let o = null, err = null; try { o = OLD.normalize(J(doc)); } catch (e) { err = e; }
  ok(!err && same(cnts(o.mmBlanks), cnts(doc.mmBlanks)), name + ' reads new doc: every record kept with the same counts ' + (err ? err.message : ''));
  ok(same(NEW.normalize(o).mmBlanks, doc.mmBlanks), name + ' → new: lossless round trip');
  let ox = null; try { ox = OLD.expandBl(o.mmBlanks, {}); } catch (e) { err = e; }
  ok(!err && ox['social:u1'].w['荷蘭'].streak === 3 && ox['social:u1'].w['荷蘭'].ok === 7 && !('lastShown' in ox['social:u1'].w['荷蘭']), name + ' expands new records into its local store without error');
});

// ---------- 3. 舊→新：新版讀舊版寫的文件（有 q、有 lastShown），紀錄一筆不掉，q／lastShown 丟掉 ----------
Object.keys(OLDS).forEach(name => {
  const OLD = OLDS[name], od = OLD.normalize(localO()), n = NEW.normalize(J(od));
  ok(typeof od.mmBlanks['social:u1'].q === 'string' && /,\d+$/.test(od.mmBlanks['social:u1'].w['原住民']), name + ' doc carries q and lastShown (precondition)');
  ok(same(cnts(n.mmBlanks), cnts(od.mmBlanks)) && !('q' in n.mmBlanks['social:u1']) && Object.values(n.mmBlanks['social:u1'].w).every(r => /,$/.test(r)), 'new reads ' + name + ' doc: every record kept, q / lastShown dropped: ' + C(n.mmBlanks['social:u1']));
  // 新版本機寫回：本機的 q、lastShown 都留著；別台答得多的詞換成別台的計數，但 lastShown 照本機的
  const L = localN(), m = NEW.merge(L, od), back = NEW.expandBl(m.mmBlanks, L.mmBlanks)['social:u1'];
  ok(same(back.q, { h1: 1, h2: 1 }) && back.w['臺南'].ok + back.w['臺南'].wrong === 49 && back.w['臺南'].lastShown === 29 && same(back.w['荷蘭'], L.mmBlanks['social:u1'].w['荷蘭']) && same(back.w['鄭成功'], L.mmBlanks['social:u1'].w['鄭成功']) && back.a['u1-l1'].ok === 20 && back.a['u1-l3'].wrong === 3 && !('lastShown' in back.a['u1-l3']),
    'new device writing back after merging ' + name + ' doc: local q kept, other device\'s winning counts with local lastShown, local-only kept: ' + C(back));
});

// ---------- 4. 新→新：q、lastShown 都不經文件；兩台的 q 各自留著 ----------
{
  const A = localN(), B = localO(), m = NEW.merge(A, B);
  ok(Object.keys(m.mmBlanks).every(u => !('q' in m.mmBlanks[u])) && same(cnts(m.mmBlanks), cnts(NEW.merge(NEW.normalize(A), NEW.normalize(B)).mmBlanks)), 'new + new: merged doc has no q');
  const bA = NEW.expandBl(m.mmBlanks, A.mmBlanks), bB = NEW.expandBl(m.mmBlanks, B.mmBlanks);
  ok(same(bA['social:u1'].q, A.mmBlanks['social:u1'].q) && same(bB['social:u1'].q, B.mmBlanks['social:u1'].q) && same(bA['science:n3'].q, { h7: 1 }) && !('q' in bA['social:u2']), 'new + new: each device keeps its own q (none copied, none cleared)');
  ok(bB['social:u1'].a['u1-l1'].ok === 20 && bB['social:u1'].a['u1-l1'].lastShown === 38 && bA['social:u1'].w['臺南'].lastShown === 29 && bB['social:u1'].w['臺南'].lastShown === 41, 'new + new: lastShown always the device\'s own');
  // 本機只有 q、沒作答的單元（只做過練習題）：文件裡有這個單元時 q 也留著
  const qOnly = { 'science:n3': { sess: 0, w: {}, a: {}, q: { h5: 1 } } };
  ok(same(NEW.expandBl(m.mmBlanks, qOnly)['science:n3'].q, { h5: 1 }), 'expandBl keeps local q even when the local unit had nothing else');
}

// ---------- 5. 兩台輪流 syncOnce：舊版快取頁 × 新版（11-21 版、線上 c6b7a9d 版各一次），再加新版 × 新版 ----------
const dev = (SM, local) => { const me = { SM, local };
  me.io = { readLocal: () => J(me.local),
    writeLocal: d => { const mb = Object.assign({}, me.local.mmBlanks, SM.expandBl(d.mmBlanks, me.local.mmBlanks)); me.local = Object.assign(J(d), { mmBlanks: mb }); } };
  return me; };
const pair = async (label, SMa, la, SMb, lb) => {
  const server = { doc: { v: 9, log: [] }, etag: 0 }, io = d => Object.assign({}, d.io, {
    get: async () => ({ doc: J(server.doc), etag: server.etag }),
    put: async (c, doc, e) => { if (e !== server.etag) return { conflict: true }; server.doc = J(doc); server.etag++; return {}; } });
  const A = dev(SMa, la), B = dev(SMb, lb), want = cnts(NEW.merge(la, lb).mmBlanks);
  let err = null, last = -1;
  try { for (let i = 0; i < 4; i++) { await SMa.syncOnce(io(A), 'K'); await SMb.syncOnce(io(B), 'K'); } last = (await SMa.syncOnce(io(A), 'K')).puts + (await SMb.syncOnce(io(B), 'K')).puts; } catch (e) { err = e; }
  ok(!err, label + ': no error ' + (err && err.stack));
  ok(last === 0, label + ': converges (no more PUTs after a few rounds): ' + last);
  ok(same(cnts(NEW.normalize(server.doc).mmBlanks), want), label + ': server has every record from both devices: ' + C(NEW.normalize(server.doc).mmBlanks['social:u1']));
  ok(same(cnts(NEW.normalize(A.local).mmBlanks), want) && same(cnts(NEW.normalize(B.local).mmBlanks), want), label + ': both devices end with every record (same counts)');
  return { A: A.local.mmBlanks, B: B.local.mmBlanks };
};
(async () => {
  for (const name of Object.keys(OLDS)) {
    const r = await pair('new × ' + name, NEW, localN(), OLDS[name], localO()), N = r.A['social:u1'];
    ok(same(N.q, { h1: 1, h2: 1 }) && same(r.A['science:n3'].q, { h7: 1 }) && N.w['臺南'].lastShown === 29 && N.w['臺南'].ok + N.w['臺南'].wrong === 49 && N.w['鄭成功'].lastShown === 30 && N.a['u1-l2'].lastShown === 26, 'new × ' + name + ': new device\'s q and lastShown never cleared: ' + C(N));
    ok(same(r.B['social:u1'].q, { h3: 1 }) || Object.keys(r.B['social:u1'].q || {}).includes('h3'), 'new × ' + name + ': old device keeps its own q');
    const r2 = await pair(name + ' × new', OLDS[name], localO(), NEW, localN());
    ok(same(r2.B['social:u1'].q, { h1: 1, h2: 1 }) && r2.B['social:u1'].w['臺南'].lastShown === 29, name + ' × new (old syncs first): new device\'s q / lastShown kept');
  }
  const r3 = await pair('new × new', NEW, localN(), NEW, localO());
  ok(same(r3.A['social:u1'].q, { h1: 1, h2: 1 }) && same(r3.B['social:u1'].q, { h3: 1 }) && r3.B['social:u1'].a['u1-l1'].lastShown === 38, 'new × new: q / lastShown stay per device');
  console.log(`sync-blanks: ${pass} passed, ${fail} failed`);
  if (fail) process.exitCode = 1;
})().catch(e => { console.error(e); process.exit(1); });
