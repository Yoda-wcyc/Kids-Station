// sync-pk.test.js — 心智圖（mm、mmBlanks）、天平 eq、Scratch、數學年級 done.mg、地理 done.geo 上傳時壓縮進 pk（2026-11-26，格式見 syncmerge.js 檔頭）
//   1. 每種資料「壓縮 → JSON → 展開」逐值相同（含空值、極端值、中文 key、分隔字元退回原寫法）；真實題庫隨機資料跑一次（最壞情況在 smoke）
//   2. 新舊版：舊版＝test/fixtures/syncmerge-old-1121.js、syncmerge-old-1126.js（凍結）。舊版看不懂 pk → 新版 14 天內原寫法也寫一份（放得進 MAX_BYTES 才寫）、
//      之後只寫壓縮的；兩台輪流 syncOnce：一筆不掉、會收斂。
// 用法：node test/sync-pk.test.js
'use strict';
const fs = require('fs'), vm = require('vm'), path = require('path'), root = path.join(__dirname, '..');
const SM = require(path.join(root, 'syncmerge.js'));
const OLDS = { 'old-1121': require(path.join(__dirname, 'fixtures', 'syncmerge-old-1121.js')), 'old-1126': require(path.join(__dirname, 'fixtures', 'syncmerge-old-1126.js')) };
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL sync-pk:', m); } };
const C = SM.canon, same = (a, b) => C(a) === C(b), J = x => JSON.parse(JSON.stringify(x)), DAY = 864e5, NOW = 1.8e12;
const wire = (d, remote, now) => J(SM.packDoc(SM.normalize(d), remote || null, now || 0));
const rt = d => SM.normalize(wire(d));
const PK = ['mm', 'mmBlanks', 'eq', 'scratch', 'done'], part = d => { const n = SM.normalize(d), o = {}; PK.forEach(k => { o[k] = n[k]; }); return o; };

// ---------- 1. 來回逐值相同 ----------
const T = 1798765432109, iso = t => new Date(t).toISOString();
const R = (o, w, s, last, ls) => ({ ok: o, wrong: w, streak: s, last, lastShown: ls });
const cases = {
  'empty doc': {},
  'empty sections': { mm: {}, mmBlanks: {}, eq: { at: 0, items: [], del: {} }, scratch: {}, done: { mg: {}, geo: {} } },
  'mmBlanks extremes + Chinese keys': { mmBlanks: {
    'social:u1': { sess: 0, w: { '臺南': R(99, 99, 0, 'wrong'), '荷蘭東印度公司': R(1, 0, 1, 'ok'), '1624': R(0, 1, 0, 'wrong'), 'Ａ，、': R(98, 0, 2, 'ok'), '熟': R(150, 60, 9, 'ok') }, a: { 'u1-l1': R(1, 0, 1, 'ok'), 'u1-l1-c': R(0, 99, 0, 'wrong'), 'u1-l10-c2': R(99, 1, 3, 'ok'), '-l2': R(5, 5, 2, 'ok'), odd: R(1, 1, 0, 'wrong') } },
    'science:n15': { sess: 9007199254740991, w: {}, a: {} }, 'science:n1': { sess: 3, w: { 'x': R(1, 0, 3, 'ok') }, a: {} } } },
  'mm extremes': { mm: { 'social:u1': { unlocked: 5, best: { 1: 100, 2: 0, 9: 55 }, passedAt: { 1: T, 2: 0, 9: 9007199254740991 }, lastPassAt: T, reviewStep: 3 }, 'science:n2': { unlocked: 1, best: {}, passedAt: {}, lastPassAt: 0, reviewStep: 0 } } },
  'eq': { eq: { at: T, items: [{ q: 'x+5=12', own: false, t: 0 }, { q: '(x−5)+4=12', own: true, t: T + 1 }, { q: '12+x=20,x', own: true, t: 5 }], del: { 'x+7=20': T - 9, '(x+3)−2=10': 1 } } },
  'scratch': { scratch: { 'K100|scratch-td:lesson1': iso(T), 'K100|scratch-td:lesson2': iso(T + 1), 'K101|scratch-td:lesson10': '2026-10-09T01:00:00.000Z', 'x': iso(1) } },
  'done mg / geo + other done sections untouched': { done: { mg: { g5b1q: 0, g5b1t: 100, g5bR: 55, g6b6q: 1 }, geo: { m1p1: 100, m1t: 0, w7o: 100 }, tb: { 'hanlin-5-u1': { best: 100, last: 90, at: T } }, n: { m: '2' } } }
};
Object.keys(cases).forEach(name => { const d = cases[name], w = wire(d); ok(same(SM.normalize(w), SM.normalize(d)), 'round trip ' + name + ': ' + C(w.pk)); });
{ const w = wire(cases['mmBlanks extremes + Chinese keys']).pk.bl['social:u1'];
  ok(/^0\|/.test(w) && w.includes('臺南=') && w.includes('熟=+') && !/[^\u0000-￿]/.test(w), 'mmBlanks unit string: sess|w|a, Chinese keys literal, mastered flag "+n": ' + w); }
{ const w = wire({ mm: cases['mm extremes'].mm }); ok(w.pk.mm['social:u1'] === '5|12s,20,91j|1' + T.toString(36) + ',20,9' + (9007199254740991).toString(36) + '|' + T.toString(36) + '|3' && !Object.keys(w.mm).length, 'mm unit string: ' + w.pk.mm['social:u1']); }
// 分隔字元、不是非負整數、不是標準 ISO 時間 → 那一筆（mmBlanks／mm 是整個單元、eq 是整份）照原寫法放在原欄位，其他照樣壓縮
const odd = {
  mmBlanks: { 'social:u1': { sess: 1, w: { 'a=b': R(1, 0, 1, 'ok') }, a: {} }, 'social:u2': { sess: 1, w: { 'a;b': R(1, 0, 1, 'ok') }, a: {} }, 'social:u3': { sess: 1, w: {}, a: { 'u3-x|y': R(1, 0, 1, 'ok') } }, 'social:u4': { sess: 1, w: { 'ok,~': R(2, 0, 2, 'ok') }, a: {} } },
  mm: { 'social:u1': { unlocked: 2, best: { 1: 87.5 }, passedAt: {}, lastPassAt: 0, reviewStep: 0 }, 'social:u2': { unlocked: 2, best: { 1: -1 }, passedAt: {}, lastPassAt: 1.5, reviewStep: 0 }, 'social:u3': { unlocked: 2, best: { 1: 80 }, passedAt: { 1: T }, lastPassAt: T, reviewStep: 1 } },
  eq: { at: T, items: [{ q: 'x|1=2', own: true, t: T }], del: {} },
  scratch: { 'K1|a;b': iso(T), 'K1|a=b': iso(T), 'K1|day': '2026-10-09', 'K1|ok': iso(T) },
  done: { mg: { g5b1q: 50 } }
};
{ const w = wire(odd), back = SM.normalize(w);
  ok(same(back.mmBlanks, SM.normalize(odd).mmBlanks) && same(Object.keys(w.mmBlanks), ['social:u1', 'social:u2', 'social:u3']) && same(Object.keys(w.pk.bl), ['social:u4']), 'mmBlanks key with = ; | → that unit stays in the old field; others packed: ' + C(Object.keys(w.mmBlanks)));
  ok(same(back.mm, SM.normalize(odd).mm) && same(Object.keys(w.mm), ['social:u1', 'social:u2']) && same(Object.keys(w.pk.mm), ['social:u3']), 'mm non-integer / negative numbers → that unit stays in the old field');
  ok(same(back.eq, SM.normalize(odd).eq) && w.eq && !w.pk.eq, 'eq question with | → whole eq stays in the old field');
  ok(same(back.scratch, SM.normalize(odd).scratch) && same(Object.keys(w.scratch).sort(), ['K1|a;b', 'K1|a=b', 'K1|day']) && /ok=/.test(w.pk.sc), 'scratch key with ; = or non-ISO time → that entry stays in the old field');
  ok(same(back, SM.normalize(odd)), 'separator / odd-value fallback: whole doc round trip'); }
// 壞掉、被截斷的 pk：不報錯，解不開的略過（原欄位照收）
{ let err = null, n = null; try { n = SM.normalize({ mm: { 'social:u9': { unlocked: 2 } }, pk: { bl: { 'social:u1': 'zz', 'social:u2': '1|x=;=3|', 'social:u3': 7 }, mm: { 'social:u1': '9|||' }, eq: 'a|b', sc: '0x=@@;;=', mg: 5, geo: '0m1p1=zzzzzzzzzzzz' } }); } catch (e) { err = e; }
  ok(!err && n.mm['social:u9'] && SM.canon(SM.normalize(n)) === SM.canon(n), 'broken pk: no error, normalize stable ' + (err && err.message)); }

// 真實題庫：社會／自然全部單元的挖空詞、背架構節點、Scratch、數學年級、地理 key，隨機（固定種子）答題紀錄
{
  let seed = 20261126; const rnd = n => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return Math.floor(seed / 0x7fffffff * n); };
  const W = { window: {} }; vm.createContext(W);
  ['social', 'science'].forEach(k => [...fs.readFileSync(path.join(root, 'mindmap', k + '.html'), 'utf8').matchAll(/src="data\/(\w+\/unit[\w-]*\.js)/g)].forEach(m => vm.runInContext(fs.readFileSync(path.join(root, 'mindmap', 'data', m[1]), 'utf8'), W)));
  const SB = require(path.join(root, 'mindmap', 'blanks.js')), kids = d => d.lessons || d.topics || d.children || [], d = { mm: {}, mmBlanks: {}, scratch: {}, done: { mg: {}, geo: {} } };
  let words = 0;
  [['social', 'DATA_SOCIAL'], ['science', 'DATA_SCIENCE']].forEach(([s, g]) => W.window[g].units.forEach(u => {
    const st = { sess: rnd(500), w: {}, a: {} }, rec = () => R(rnd(120), rnd(120), rnd(6), rnd(2) ? 'ok' : 'wrong', rnd(500));
    (function walk(x) { (x.points || []).map(SB.normPoint).forEach(np => np.cands.forEach(c => { if (rnd(3)) { st.w[c.w] = rec(); words++; } })); if (x !== u && rnd(2)) st.a[x.id] = rec(); kids(x).forEach(walk); })(u);
    d.mmBlanks[s + ':' + u.id] = st;
    d.mm[s + ':' + u.id] = { unlocked: 1 + rnd(5), best: { 1: rnd(101), 2: rnd(101) }, passedAt: { 1: T - rnd(1e9) }, lastPassAt: T - rnd(1e9), reviewStep: rnd(4) };
  }));
  for (let m = 0; m < 3; m++) for (let l = 1; l <= 7; l++) d.scratch['K10' + m + '|scratch-td:lesson' + l] = iso(T - rnd(1e10));
  require(path.join(root, 'math', 'grade.js')).BOOKS.forEach(b => b.units.forEach(x => { d.done.mg[x[0] + 'q'] = rnd(101); d.done.mg[x[0] + 't'] = rnd(101); }));
  require(path.join(root, 'completion.js')).GEO_UNITS.forEach(([id]) => ['p1', 'p2', 'p3', 't'].forEach(k => { d.done.geo[id + k] = rnd(101); }));
  d.eq = { at: T, items: ['x+5=12', 'x−3=9', '(x+3)−2=10', 'x+(10−4)=15'].map((q, i) => ({ q, own: !!(i % 2), t: T - i })), del: { 'x+7=20': T - 50 } };
  const n = SM.normalize(d), w = wire(d);
  ok(words > 1000 && same(SM.normalize(w), n), 'real question bank (' + Object.keys(n.mmBlanks).length + ' units, ' + words + ' words): round trip identical');
  ok(!Object.keys(w.mmBlanks).length && !Object.keys(w.mm).length && !('eq' in w) && !Object.keys(w.scratch).length && !Object.keys(w.done.mg).length && !Object.keys(w.done.geo).length, 'real data: nothing falls back to the old fields');
  const plainB = SM.bytes(part(d)), wireB = SM.bytes(PK.reduce((o, k) => { o[k] = w[k]; return o; }, { pk: w.pk }));
  ok(wireB < plainB * 0.7, 'real data: packed ' + wireB + ' B < 70% of ' + plainB + ' B');
  console.log('sync-pk real data: ' + plainB + ' → ' + wireB + ' B');
}

// ---------- 2. 新舊版 ----------
const N0 = () => ({ log: [], mm: { 'social:u1': { unlocked: 3, best: { 1: 100, 2: 80 }, passedAt: { 1: T, 2: T + 1 }, lastPassAt: T + 1, reviewStep: 1 } },
  mmBlanks: { 'social:u1': { sess: 12, w: { '臺南': R(4, 1, 2, 'ok', 11) }, a: { 'u1-l1': R(3, 1, 1, 'ok', 10) } } },
  eq: { at: T, items: [{ q: 'x+1=5', own: true, t: T }], del: { 'x+2=9': T - 5 } }, scratch: { 'K1|scratch-td:lesson1': iso(T) }, done: { mg: { g5b1q: 80 }, geo: { m1p1: 70 } } });
const O0 = () => ({ log: [], mm: { 'science:n2': { unlocked: 2, best: { 1: 90 }, passedAt: { 1: T + 7 }, lastPassAt: T + 7, reviewStep: 0 }, 'social:u1': { unlocked: 2, best: { 1: 70 }, passedAt: { 1: T - 9 }, lastPassAt: T - 9, reviewStep: 0 } },
  mmBlanks: { 'social:u1': { sess: 40, w: { '臺南': R(40, 2, 0, 'wrong', 39), '荷蘭': R(1, 0, 1, 'ok', 38) }, a: {} } },
  eq: { at: T + 50, items: [{ q: 'x+3=8', own: true, t: T + 50 }], del: {} }, scratch: { 'K1|scratch-td:lesson2': iso(T + 3) }, done: { mg: { g5b1q: 95, g5b2t: 60 }, geo: { w1o: 100 } } });
const want = part(SM.merge(N0(), O0()));
Object.keys(OLDS).forEach(name => {
  const OLD = OLDS[name];
  // 新版沒看過舊版：只寫壓縮的；舊版讀到看不懂 pk、不報錯，只看得到自己的（本機照舊）
  const w0 = wire(N0(), { v: 9, log: [] }, NOW);
  ok(!w0.pk.o && !Object.keys(w0.mm).length && !('eq' in w0), name + ': new device, no old device seen → packed only');
  let e = null, o = null; try { o = OLD.merge(O0(), J(w0)); } catch (x) { e = x; }
  ok(!e && same(part(o), part(O0())), name + ' reads a packed-only doc: no error, keeps its own (cannot see the new device\'s yet) ' + (e && e.message));
  // 舊版 PUT（丟掉 pk）→ 新版讀：從原欄位看到舊版寫過 → 這次起兩種都寫（pk.o＝現在）
  const oldPut = J(o), w1 = wire(SM.merge(N0(), oldPut), oldPut, NOW);
  ok(w1.pk.o === NOW && Object.keys(w1.mm).length === 2 && w1.eq && Object.keys(w1.done.mg).length === 2, name + ' wrote → new device writes both forms: ' + C(Object.keys(w1)));
  ok(same(part(SM.normalize(w1)), want) && same(part(OLD.normalize(J(w1))), part(OLD.merge(N0(), O0()))), name + ': both-forms doc reads the same on new and old (old sees everything)');
  // 視窗：舊版最後一次寫過 13 天內照寫兩種；14 天沒再看到舊版就只寫壓縮的
  ok(wire(SM.normalize(w1), w1, NOW + 13 * DAY).pk.o === NOW && Object.keys(wire(SM.normalize(w1), w1, NOW + 13 * DAY).mm).length === 2, name + ': within 14 days → still both forms');
  const w14 = wire(SM.normalize(w1), w1, NOW + 14 * DAY);
  ok(!Object.keys(w14.mm).length && !('eq' in w14) && same(part(SM.normalize(w14)), want), name + ': 14 days without the old device → packed only, nothing lost');
  // 放不下 MAX_BYTES 就只寫壓縮的
  const big = SM.merge(N0(), O0()), bigMb = {}; for (let i = 0; i < 1200; i++) bigMb['w' + i + '字'] = R(50, 50, 0, 'wrong'); big.mmBlanks['social:u5'] = { sess: 1, w: bigMb, a: {} };
  const plainB = SM.bytes(part(big)); big.log = [];   // 英文作答塞到「壓縮的放得下、兩種加起來放不下」
  while (SM.bytes(SM.packDoc(SM.normalize(big), null, NOW)) < SM.MAX_BYTES - plainB / 2) for (let i = 0; i < 50; i++) big.log.push({ t: T + big.log.length, id: 'w:x' + big.log.length + ':type', m: 'words', k: 'words:x', y: 'type', ok: 1, a: 'y'.repeat(120) });
  const packedOnly = SM.packDoc(SM.normalize(big), null, NOW), tryBoth = SM.packDoc(SM.normalize(big), oldPut, NOW);
  ok(SM.bytes(packedOnly) <= SM.MAX_BYTES && SM.bytes(Object.assign({}, packedOnly, { mmBlanks: SM.normalize(big).mmBlanks, mm: SM.normalize(big).mm })) > SM.MAX_BYTES && same(tryBoth, Object.assign({}, packedOnly, { pk: Object.assign({}, packedOnly.pk, { o: NOW }) })),
    name + ': both forms would exceed MAX_BYTES → packed only (pk.o still set): ' + SM.bytes(packedOnly) + ' B');
});

// 兩台輪流 syncOnce（新版 × 舊版）：一筆不掉、會收斂；新版 × 新版只寫壓縮的
const dev = (S, local) => { const me = { local };
  me.io = { readLocal: () => J(me.local), writeLocal: d => { const mb = Object.assign({}, me.local.mmBlanks, S.expandBl(d.mmBlanks, me.local.mmBlanks)); me.local = Object.assign(J(d), { mmBlanks: mb }); } };
  return me; };
const pair = async (label, Sa, la, Sb, lb, check) => {
  const server = { doc: { v: 9, log: [] }, etag: 0, puts: [] }, io = (dv, tag) => Object.assign({}, dv.io, {
    get: async () => ({ doc: J(server.doc), etag: server.etag }),
    put: async (c, doc, e) => { if (e !== server.etag) return { conflict: true }; server.doc = J(doc); server.etag++; server.puts.push(tag); return {}; } });
  const A = dev(Sa, la), B = dev(Sb, lb); let err = null, last = -1;
  try { for (let i = 0; i < 4; i++) { await Sa.syncOnce(io(A, 'A'), 'K', { now: NOW }); await Sb.syncOnce(io(B, 'B'), 'K', { now: NOW }); } last = (await Sa.syncOnce(io(A, 'A'), 'K', { now: NOW })).puts + (await Sb.syncOnce(io(B, 'B'), 'K', { now: NOW })).puts; } catch (e) { err = e; }
  ok(!err, label + ': no error ' + (err && err.stack));
  ok(last === 0, label + ': converges (PUTs ' + server.puts.join('') + ')');
  ok(same(part(server.doc), want) && same(part(A.local), want) && same(part(B.local), want), label + ': server and both devices have everything: ' + C(part(server.doc).mm));
  if (check) check(server.doc);
};
(async () => {
  for (const name of Object.keys(OLDS)) {
    await pair('new × ' + name, SM, N0(), OLDS[name], O0(), doc => ok(doc.pk ? doc.pk.o === NOW : Object.keys(doc.mm).length === 2, 'new × ' + name + ': server doc readable by the old device (both forms or the old device\'s own write)'));
    await pair(name + ' × new', OLDS[name], O0(), SM, N0());
  }
  await pair('new × new', SM, N0(), SM, O0(), doc => ok(doc.pk && !doc.pk.o && !Object.keys(doc.mm).length && !('eq' in doc), 'new × new: server doc packed only'));
  console.log(`sync-pk: ${pass} passed, ${fail} failed`);
  if (fail) process.exitCode = 1;
})().catch(e => { console.error(e); process.exit(1); });
