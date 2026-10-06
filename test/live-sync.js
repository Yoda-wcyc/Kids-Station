// 線上同步測試（要網路）：node test/live-sync.js [API]
// 用兩台「假裝置」（各自的本機資料）對真的 kids-sync API 跑同一套 syncOnce，確認兩邊收斂。
'use strict';
const path = require('path');
const SM = require(path.join(__dirname, '..', 'syncmerge.js'));
const API = process.argv[2] || 'https://kids-sync.vercel.app/api/sync';
let n = 0; const ok = (c, m) => { n++; if (!c) { console.error('FAIL', m); process.exit(1); } console.log('ok ', m); };
const counters = { get: 0, put: 0 };
const backend = {
  async create() { const r = await fetch(API, { method: 'POST' }); return (await r.json()).code; },
  async get(code) { counters.get++; const r = await fetch(API + '?code=' + code); if (r.status === 404) return null; if (!r.ok) throw new Error('GET ' + r.status); return { doc: await r.json(), etag: r.headers.get('ETag') }; },
  async put(code, doc, etag) { counters.put++; const h = { 'Content-Type': 'application/json' }; if (etag) h['If-Match'] = etag; const r = await fetch(API + '?code=' + code, { method: 'PUT', headers: h, body: JSON.stringify(doc) }); if (r.status === 412) return { conflict: true }; if (!r.ok) throw new Error('PUT ' + r.status); return {}; }
};
function device(name, data) {
  let local = data;
  return { name, io: { get: backend.get, put: backend.put, readLocal: () => local, writeLocal: d => { local = d; } }, get: () => local, set: f => { local = f(SM.normalize(local)); } };
}
const t0 = Date.now();
const e = (i, id, ok, a) => ({ t: t0 + i, id, m: 'words', k: 'words:food', y: 'zh2en', ok, a });
(async () => {
  const iPad = device('iPad', { log: [e(1, 'w:apple:zh2en', 1, 'apple'), e(2, 'w:cat:spell', 0, 'cta')], learned: { 'word:apple': { at: new Date(t0).toISOString(), score: '3/3' } }, mistakes: { 'w:cat:spell': { c: 0, w: 1, t: t0, u: t0 } } });
  const pc = device('PC', { log: [e(10, 'g:be:0', 1, 'am'), { t: t0 - 99999, id: 'w:dog:listen', ok: 1, a: 'dog' }], learned: { 'word:dog': { at: new Date(t0).toISOString(), score: '3/3' } }, mistakes: {} });
  const code = await backend.create(); ok(/^[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(code), 'iPad generated code ' + code);
  let r = await SM.syncOnce(iPad.io, code); ok(r.ok && r.puts === 1, 'iPad first sync pushes its data');
  r = await SM.syncOnce(pc.io, code); ok(r.ok && r.puts === 1 && r.changedLocal, 'PC pairs: pulls iPad data and pushes its own');
  r = await SM.syncOnce(iPad.io, code); ok(r.ok && r.puts === 0 && r.changedLocal, 'iPad pulls PC data, nothing to push');
  ok(SM.canon(SM.normalize(iPad.get())) === SM.canon(SM.normalize(pc.get())), 'both devices converged (same doc)');
  ok(iPad.get().log.length === 4 && iPad.get().learned['word:dog'].at, 'iPad has PC log + learned');
  // 兩邊同時改：PC 取消 dog、iPad 答對 cat 並學會 cat
  pc.set(d => Object.assign(d, { learned: Object.assign({}, d.learned, { 'word:dog': { removedAt: new Date(t0 + 50).toISOString() } }) }));
  iPad.set(d => Object.assign(d, { log: d.log.concat([e(20, 'w:cat:spell', 1, 'cat')]), learned: Object.assign({}, d.learned, { 'word:cat': { at: new Date(t0 + 60).toISOString(), score: '3/3' } }), mistakes: Object.assign({}, d.mistakes, { 'w:cat:spell': { c: 1, w: 1, t: t0, u: t0 + 20 } }) }));
  await SM.syncOnce(pc.io, code); await SM.syncOnce(iPad.io, code); await SM.syncOnce(pc.io, code);
  ok(SM.canon(SM.normalize(iPad.get())) === SM.canon(SM.normalize(pc.get())), 'converged again after concurrent edits');
  ok(!iPad.get().learned['word:dog'].at && iPad.get().learned['word:dog'].removedAt, 'cancel on PC propagated to iPad (tombstone)');
  ok(pc.get().learned['word:cat'].at && pc.get().log.some(x => x.a === 'cat' && x.ok), 'iPad progress reached PC');
  ok(pc.get().mistakes['w:cat:spell'].c === 1, 'mistakes newest wins across devices');
  // 沒有變動：再同步不應該 PUT
  const before = counters.put;
  r = await SM.syncOnce(iPad.io, code); const r2 = await SM.syncOnce(pc.io, code);
  ok(r.ok && r2.ok && r.puts === 0 && r2.puts === 0 && counters.put === before && !r.changedLocal && !r2.changedLocal, 'no changes → no PUT, no local write');
  // 衝突：用舊 ETag 寫會被擋，syncOnce 會重新合併再寫
  const stale = await backend.get(code);
  pc.set(d => Object.assign(d, { log: d.log.concat([e(30, 'g:be:1', 1, 'is')]) }));
  await SM.syncOnce(pc.io, code);
  const res = await backend.put(code, SM.normalize(stale.doc), stale.etag); ok(res.conflict, 'stale write is rejected (412), no lost update');
  r = await SM.syncOnce(iPad.io, code); ok(r.ok && iPad.get().log.some(x => x.id === 'g:be:1'), 'iPad picks up the newer PC answer');
  console.log(`\nALL OK (${n} checks)  GET ${counters.get} / PUT ${counters.put}  code ${code}`);
})().catch(err => { console.error(err); process.exit(1); });
