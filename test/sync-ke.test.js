// sync-ke.test.js — 英文 agg／learned 上傳時壓縮（2026-11-23，syncmerge.js 的 ke／packDoc）＋英文錯題墓碑上限
//   壓縮與還原、合併語意（次數取大、聯集、墓碑新的勝）、學過 2 次判斷不變、新舊版雙向（舊版＝test/fixtures/syncmerge-old-1121.js，
//   2026-11-21 線上 0a517c9 那一版原檔，凍結不改）、三台輪流 syncOnce（兩台新版＋一台舊版快取頁）不丟資料、不會一直來回 PUT。
//   最壞情況大小在 smoke（「英文全部學會的最壞情況」）。
// 用法：node test/sync-ke.test.js
'use strict';
const path = require('path'), root = path.join(__dirname, '..');
const OLD = require(path.join(__dirname, 'fixtures', 'syncmerge-old-1121.js'));
const NEW = require(path.join(root, 'syncmerge.js'));
const KD = require(path.join(root, 'kids-daily.js'))._core;
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL sync-ke:', m); } };
const C = NEW.canon, same = (a, b) => C(a) === C(b), J = x => JSON.parse(JSON.stringify(x));
const T = Date.UTC(2026, 10, 20), DAY = 864e5, iso = t => new Date(t).toISOString();
const st = g => Math.min(2, Math.max(+(g && g.k) || 0, g && g.fc != null ? 1 : 0));   // 文件裡留的狀態
const states = agg => { const o = {}; Object.keys(agg).forEach(q => { o[q] = st(agg[q]); }); return o; };
const oldSet = (log, agg) => [...KD.okCounts(log, agg)].filter(x => !KD.isNew(x[1])).map(x => x[0]).sort().join();
let seed = 7; const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };

// ---------- 1. LZW：還原一字不差；壞掉的字串＝空的、不報錯 ----------
{
  const AB = '-0123456789:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ=,.+*~/';
  let bad = 0;
  for (let i = 0; i < 400; i++) {
    const sub = AB.slice(0, 1 + Math.floor(rnd() * AB.length)); let s = '';
    for (let n = Math.floor(rnd() * (i < 100 ? 12 : 4000)); n > 0; n--) s += sub[Math.floor(rnd() * sub.length)];
    if (i % 5 === 0) s = s.repeat(1 + Math.floor(rnd() * 9));
    const z = NEW.zip(s); if (NEW.unzip(z) !== s || (s && !/^[0-9a-z]+\.[0-9a-zA-Z_-]+$/.test(z))) bad++;
  }
  ok(!bad, 'zip → unzip is exact for 400 random strings (incl. long repeats); output is JSON-safe [0-9a-zA-Z_-]: ' + bad + ' bad');
  ok(['a', 'aa', 'aaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'abababababababab'].every(s => NEW.unzip(NEW.zip(s)) === s), 'zip: KwKwK cases');
  const z = NEW.zip('w:apple=A*B*C*,1cat=A+'), cut = z.slice(0, -3);
  ok([null, 7, '', 'x', '5.!!', '0.abc', 'zzzzzz.a', cut, z.replace(/^\w+/, '9999'), z + 'zz'].every(x => NEW.unzip(x) === ''), 'unzip: garbage / truncated / wrong length → "" (no throw)');
}

// ---------- 2. 壓縮與還原 ----------
const aggX = {
  'w:apple:listen': { n: 9, k: 5, fc: T - 9e6 }, 'w:apple:zh2en': { n: 3, k: 0 }, 'w:apple:gap1': { n: 2, k: 0, fc: T - 8e6 }, 'w:apple:spell': { n: 4, k: 1, fc: T - 7e6 },
  'tb:hanlin-5-u3:ans:go:he:bank': { n: 1, k: 1, fc: T - 6e6 }, 'tb:hanlin-5-u3:ans:go:he:bank:type': { n: 3, k: 3, fc: T - 6e6 }, 'g:be:0': { n: 1, k: 1, fc: T - 5e6 }, 'p:this-is:x3:reorder': { n: 7, k: 2, fc: T - 4e6 },
  'Bad Id': { n: 1, k: 1, fc: T - 3e6 }, 'w:Apple:type': { n: 2, k: 2, fc: T - 3e6 }
};
const learnedX = {
  'word:apple': { at: iso(T - 5e6 + 123), score: '4/5' }, 'word:cat': { removedAt: iso(T - 4e6 + 7) }, 'phrase:get-up': { at: iso(T - 3e6) }, 'tb:hanlin-5-u3': { at: iso(T - 2e6), score: '12/15' },
  'root:un': { at: '2026-10-05T01:00:00Z' }, 'grammar:be': { at: iso(T), score: '4/5', note: 'x' }, 'Word:Big': { at: iso(T) }, 'pattern:this-is': { at: iso(T), score: 'great' }
};
const localX = () => ({ cut: T, log: [{ t: T + 10, id: 'w:apple:zh2en', ok: 1, a: 'apple' }], agg: J(aggX), learned: J(learnedX), mistakes: { 'w:apple:zh2en': { c: 1, w: 2, t: T, u: T + 1 } } });
{
  const n = NEW.normalize(localX()), wire = NEW.packDoc(n, null, T);
  ok(same(Object.keys(wire.agg).sort(), ['Bad Id', 'w:Apple:type']) && same(Object.keys(wire.learned).sort(), ['Word:Big', 'grammar:be', 'pattern:this-is', 'root:un']), 'wire: only entries that cannot round-trip stay in the old agg / learned objects: ' + C(Object.keys(wire.learned)));
  ok(typeof wire.ke.a === 'string' && typeof wire.ke.l === 'string' && !('o' in wire.ke) && !/\\/.test(JSON.stringify(wire.ke)), 'wire: ke.a / ke.l are plain strings, no ke.o without an old device');
  const back = NEW.normalize(J(wire));
  ok(same(back.learned, n.learned), 'learned: exact round-trip (ms times, scores, removedAt tombstones, leftovers)');
  ok(same(states(back.agg), states(n.agg)) && same(Object.keys(back.agg).sort(), Object.keys(n.agg).sort()), 'agg: every question keeps its state (answered / right once / right ≥2): ' + C(states(back.agg)));
  ok(back.agg['w:apple:zh2en'].fc == null && back.agg['w:apple:listen'].k === 2 && back.agg['w:apple:gap1'].k === 1 && back.agg['Bad Id'].k === 1, 'agg: never-right stays without fc, k capped at 2, fc-only counts as 1, leftovers exact');
  ok(same([...NEW.correctIds(back)].sort(), [...NEW.correctIds(n)].sort()), 'correctIds (set unlock) unchanged after round-trip');
  ok(same(NEW.packDoc(NEW.normalize(J(wire)), null, T), wire), 'packDoc ∘ normalize is stable (no re-upload loop)');
  ok(NEW.bytes(wire) < NEW.bytes(n), 'wire doc is smaller: ' + NEW.bytes(wire) + ' < ' + NEW.bytes(n));
  // 本機準確的數字＋文件裡封頂的：合併後本機的不會變小
  const m = NEW.merge(n, back);
  ok(same(m.agg['w:apple:listen'], aggX['w:apple:listen']) && m.agg['w:apple:zh2en'].n === 3 && m.agg['p:this-is:x3:reorder'].n === 7, 'local exact n/k/fc survive merging with the capped copy from the doc');
  // 學過 2 次就不算：判斷一樣
  const log = [{ t: T + 1, id: 'w:apple:spell', ok: 1 }, { t: T + 2, id: 'w:apple:zh2en', ok: 1 }, { t: T + 3, id: 'g:be:0', ok: 0 }];
  ok(oldSet(log, n.agg) === oldSet(log, back.agg) && oldSet(log, back.agg).split(',').includes('w:apple:spell') && !oldSet(log, back.agg).split(',').includes('w:apple:zh2en'), '學過 2 次判斷不變（agg k=1 ＋ log 答對 1 次＝2 次）: ' + oldSet(log, back.agg));
}

// ---------- 3. 合併語意：次數取大、聯集、學會／取消新的勝 ----------
{
  const A = { cut: T, agg: { 'w:a:type': { n: 1, k: 0 }, 'w:b:type': { n: 2, k: 2, fc: T - 1 } }, learned: { 'word:a': { at: iso(T - 100) }, 'word:b': { at: iso(T - 50), score: '5/5' } } };
  const B = { cut: T, agg: { 'w:a:type': { n: 1, k: 1, fc: T - 2 }, 'w:c:type': { n: 1, k: 0 } }, learned: { 'word:a': { removedAt: iso(T - 10) }, 'word:b': { removedAt: iso(T - 60) }, 'word:c': { at: iso(T - 5) } } };
  const Cc = { cut: T + 5, agg: { 'w:c:type': { n: 9, k: 4, fc: T - 3 } }, learned: { 'word:a': { at: iso(T - 1) } } };
  const w = x => NEW.packDoc(NEW.normalize(x), null, T);
  const ab = NEW.merge(w(A), w(B));
  ok(same(states(ab.agg), { 'w:a:type': 1, 'w:b:type': 2, 'w:c:type': 0 }), 'agg states: max per question, union of questions: ' + C(states(ab.agg)));
  ok(ab.learned['word:a'].removedAt && ab.learned['word:b'].at && ab.learned['word:c'].at, 'learned: newest event wins (removedAt newer → removed; older removedAt loses to a newer learn)');
  ok(NEW.merge(ab, w(Cc)).learned['word:a'].at === iso(T - 1), 'learned: re-learned after the tombstone (newer) wins');
  const pw = x => C(NEW.packDoc(x, null, T));
  ok(pw(NEW.merge(w(A), w(B))) === pw(NEW.merge(w(B), w(A))), 'packed merges: commutative');
  ok(pw(NEW.merge(NEW.merge(w(A), w(B)), w(Cc))) === pw(NEW.merge(w(A), NEW.merge(w(B), w(Cc)))), 'packed merges: associative');
  ok(pw(NEW.merge(ab, w(A))) === pw(ab) && pw(NEW.merge(ab, ab)) === pw(ab), 'packed merges: idempotent');
  ok(pw(NEW.merge(A, w(B))) === pw(NEW.merge(A, B)), 'old-format doc + packed doc = merging both old-format');
}

// ---------- 4. 英文錯題墓碑：最多 300 筆最新的（沒畢業的不動）----------
{
  const m = {}; for (let i = 0; i < 350; i++) m['w:q' + i + ':type'] = { d: 1, w: 1, t: i, u: 1000 + i };
  for (let i = 0; i < 40; i++) m['w:live' + i + ':type'] = { c: 0, w: 2, t: 5, u: 5 };
  const n = NEW.normalize({ mistakes: m }).mistakes, dead = Object.keys(n).filter(k => n[k].d);
  ok(dead.length === NEW.MK_DEL && NEW.MK_DEL === 300 && n['w:q349:type'] && !n['w:q49:type'] && n['w:q50:type'] && Object.keys(n).length === 340, 'english tombstones capped at 300 newest, live mistakes kept');
  const o = OLD.normalize({ mistakes: m }).mistakes;
  ok(Object.keys(o).length === 390 && same(NEW.normalize(OLD.merge({ mistakes: m }, J(NEW.normalize({ mistakes: m })))).mistakes, n), 'old version keeps all 350 (no cap); new caps again after merging, no live mistake lost');
}

// ---------- 5. 新舊版雙向（直接合併）----------
{
  // 舊 → 新：舊版寫的文件（完整物件）新版讀＝跟讀本機一樣
  const L = localX(), od = OLD.normalize(J(L));
  ok(same(NEW.normalize(od), NEW.normalize(L)), 'new reads an old-format doc = same as reading local (nothing lost)');
  // 新 → 舊：舊版讀新文件不報錯、丟掉 ke（只看得到原樣留著的那幾筆）
  const wire = NEW.packDoc(NEW.normalize(L), null, T);
  let oRead = null, err = null; try { oRead = OLD.normalize(J(wire)); OLD.correctIds(oRead); } catch (e) { err = e; }
  ok(!err && !('ke' in oRead) && same(Object.keys(oRead.learned).sort(), Object.keys(wire.learned).sort()), 'old reads a packed doc: no error, ke dropped (old device just does not see those) ' + (err && err.message));
  // 新 → 舊 → 新：舊版合併自己的本機後 PUT（少了 ke），新版再跟本機合併 → 一筆都沒少，舊版那台的新東西也進來
  const oldLocal = { cut: T, log: [{ t: T + 20, id: 'w:dog:type', ok: 1, a: 'dog' }], agg: { 'w:dog:listen': { n: 2, k: 2, fc: T - 1 } }, learned: { 'word:dog': { at: iso(T + 30), score: '3/3' }, 'word:apple': { at: iso(T - 9e6) } }, mistakes: { 'w:dog:spell': { c: 0, w: 1, t: T, u: T } } };
  const viaOld = OLD.merge(oldLocal, J(wire)), back = NEW.merge(L, viaOld), want = NEW.merge(L, oldLocal);
  ok(same(back, want), 'new → old (merge + PUT without ke) → new: same as merging directly, nothing lost');
  // 14 天內看過舊版、但兩份加起來超過 MAX_BYTES：只寫壓縮的（不會因為相容讓文件超過上限）
  const huge = { cut: T, agg: {} }; for (let i = 0; i < 16000; i++) huge.agg['w:word' + i + ':listen'] = { n: 99, k: 99, fc: T - i };
  const hw = NEW.packDoc(NEW.normalize(huge), oldLocal, T), sw = NEW.packDoc(NEW.normalize(localX()), oldLocal, T);
  ok(same(hw.agg, {}) && hw.ke.o === T && NEW.bytes(hw) < NEW.MAX_BYTES && NEW.bytes(Object.assign({}, hw, { agg: NEW.normalize(huge).agg })) > NEW.MAX_BYTES, 'old device seen but both copies would exceed MAX_BYTES → only the packed copy: ' + NEW.bytes(hw) + ' B');
  ok(sw.ke.o === T && same(sw.agg, NEW.normalize(localX()).agg) && same(sw.learned, NEW.normalize(localX()).learned), 'old device seen and it fits → old-format copy written in full');
  ok(back.learned['word:apple'].score === '4/5' && back.learned['word:dog'].at && states(back.agg)['w:apple:listen'] === 2 && back.agg['w:dog:listen'].k === 2 && back.mistakes['w:dog:spell'], 'new device keeps its newer learn (old device\'s older copy loses), gets the old device\'s word, answers and mistakes');
}

// ---------- 6. 三台輪流 syncOnce：新版 N1、N2 ＋ 舊版快取頁 O ----------
(async () => {
  const server = { doc: null, etag: 0, puts: 0 };
  const mk = (SM, local) => { const d = { SM, local }; d.io = {
    get: async () => ({ doc: J(server.doc), etag: server.etag }),
    put: async (c, doc, e) => { if (e !== server.etag) return { conflict: true }; server.doc = J(doc); server.etag++; server.puts++; return {}; },
    readLocal: () => J(d.local), writeLocal: x => { d.local = J(x); } }; return d; };
  let now = T + DAY;
  const sync = (d) => (d.SM === NEW ? NEW.syncOnce(d.io, 'K', { now }) : OLD.syncOnce(d.io, 'K'));
  const ans = (d, id, okk, dt) => { d.local.log = (d.local.log || []).concat([{ t: now + (dt || 0), id, ok: okk ? 1 : 0, a: id }]); };
  // 升版前：伺服器上是舊寫法的文件（裡面有以前三台的進度）
  const pre = OLD.normalize({ cut: T, agg: { 'w:old:type': { n: 3, k: 2, fc: T - 5 }, 'w:old:spell': { n: 1, k: 1, fc: T - 5 } }, learned: { 'word:old': { at: iso(T - 7e6), score: '5/5' }, 'word:gone': { at: iso(T - 7e6) } }, log: [] });
  server.doc = J(pre);
  const N1 = mk(NEW, J(pre)), N2 = mk(NEW, {}), O = mk(OLD, J(pre));
  let e2 = null;
  try {
    // 新版那台：學會 cat、取消 gone、答題；舊版那台：學會 dog、答題、錯題
    ans(N1, 'w:cat:type', 1); ans(N1, 'w:cat:type', 1, 1); N1.local.learned = Object.assign({}, N1.local.learned, { 'word:cat': { at: iso(now + 5), score: '5/5' }, 'word:gone': { removedAt: iso(now + 6) } });
    await sync(N1);
    ok(server.doc.ke && server.doc.ke.o === now && server.doc.learned['word:old'] && server.doc.learned['word:cat'], 'new device on an old-format doc: writes ke, marks ke.o, and (within 14 days) also writes the old-format copy');
    ans(O, 'w:dog:type', 1, 10); ans(O, 'w:old:type', 1, 11); O.local.learned = Object.assign({}, O.local.learned, { 'word:dog': { at: iso(now + 12), score: '3/3' } });
    O.local.mistakes = { 'w:dog:spell': { c: 0, w: 1, t: now, u: now + 13 } };
    await sync(O); await sync(N2); await sync(N1); await sync(O); await sync(N2); await sync(N1);
  } catch (e) { e2 = e; }
  ok(!e2, 'alternating syncOnce new / old / new: no error ' + (e2 && e2.stack));
  const L1 = NEW.normalize(N1.local), L2 = NEW.normalize(N2.local), LO = O.local;
  ok(same(L1.learned, L2.learned) && same(states(L1.agg), states(L2.agg)) && same(L1.mistakes, L2.mistakes) && L1.log.length === L2.log.length, 'two new devices converge (learned, question states, mistakes, log)');
  ok(L1.learned['word:dog'].at && L1.learned['word:gone'].removedAt && L1.learned['word:cat'] && L1.learned['word:old'] && L1.mistakes['w:dog:spell'], 'new devices have the old device\'s learn + mistake, and keep their own learn / unlearn');
  ok(LO.learned['word:cat'] && LO.learned['word:gone'].removedAt && LO.learned['word:dog'] && LO.mistakes['w:dog:spell'], 'old device (within 14 days) sees the new device\'s learn and unlearn too');
  ok(oldSet(L1.log, L1.agg) === oldSet(L2.log, L2.agg) && oldSet(LO.log, LO.agg) === oldSet(L1.log, L1.agg) && oldSet(L1.log, L1.agg).split(',').includes('w:cat:type') && oldSet(L1.log, L1.agg).split(',').includes('w:old:type'), '學過 2 次不算：三台一致: ' + oldSet(L1.log, L1.agg));
  // 都同步過、沒有新東西：再輪幾次一個 PUT 都沒有（不會來回蓋）
  let p0 = server.puts; for (let i = 0; i < 3; i++) { await sync(N1); await sync(O); await sync(N2); }
  ok(server.puts === p0, 'nothing new → no PUT from any device (no ping-pong): ' + (server.puts - p0));
  // 新版那台再改一次（文件換成新版寫的、ke.o＝最後看到舊版的時間）；15 天後（這段時間舊版都沒寫過）新版下次 PUT 就不再寫舊寫法
  ans(N1, 'w:cat:spell', 1, 20); await sync(N1);
  ok(server.doc.ke && server.doc.ke.o > 0 && server.doc.ke.o <= now, 'new device writes over the old device\'s doc: ke back, ke.o kept');
  now += 15 * DAY; ans(N2, 'w:fish:type', 1); await sync(N2);
  ok(server.doc.ke && !('o' in server.doc.ke) && same(server.doc.agg, {}) && same(Object.keys(server.doc.learned), []), '15 days without an old device: old-format copy dropped, ke.o cleared');
  ok(same(NEW.normalize(server.doc).learned, L1.learned), '… and nothing is lost from the doc');
  // 舊版那台這時又出現（本機有舊寫法的全部）：它 PUT 一次（丟掉 ke），新版補回、重新開始寫舊寫法，之後就停了
  p0 = server.puts; await sync(O);
  ok(server.puts === p0 + 1 && !server.doc.ke, 'old device comes back: one PUT without ke');
  N1.local.learned = Object.assign({}, N1.local.learned, { 'word:bird': { at: iso(now + 1), score: '5/5' } }); await sync(N1);
  const R = NEW.normalize(server.doc);
  ok(server.doc.ke && server.doc.ke.o === now && server.doc.learned['word:bird'] && R.log.some(e => e.id === 'w:fish:type') && R.learned['word:cat'] && R.learned['word:gone'].removedAt, 'new device writes ke again (tombstone kept), marks the old device, writes the old-format copy again');
  p0 = server.puts; for (let i = 0; i < 3; i++) { await sync(O); await sync(N1); await sync(N2); }
  ok(server.puts === p0, 'then it settles: no more PUTs: ' + (server.puts - p0));
  const F1 = NEW.normalize(N1.local), F2 = NEW.normalize(N2.local);
  ok(same(F1.learned, F2.learned) && same(states(F1.agg), states(F2.agg)) && oldSet(F1.log, F1.agg).split(',').includes('w:dog:type') === oldSet(F2.log, F2.agg).split(',').includes('w:dog:type'), 'new devices still agree after the old device came back');
  ok(same(O.local.learned, OLD.normalize(server.doc).learned), 'old device sees the same learned list as the server');
  console.log(`sync-ke: ${pass} passed, ${fail} failed`);
  if (fail) process.exitCode = 1;
})().catch(e => { console.error(e); process.exit(1); });
