/* syncmerge.js — 裝置同步的合併規則（純函式，不碰 DOM／網路以外的東西；瀏覽器與 Node 共用）
   文件格式 v2：{v:2, cut, log:[{r,t,id,m,k,y,ok,a}], agg:{qid:{fc,n,k}}, learned:{id:{at,score}|{removedAt}}, mistakes:{qid:{c,w,t,u,d?}}}
   - log：每筆有固定 id（r），合併＝依 r 聯集；沒有 r 的舊紀錄用 雜湊(時間|題號|答案) 補，兩台算出來一樣
   - agg＋cut：太大時把最舊的紀錄壓成每題一筆（fc＝第一次答對的時間），t ≤ cut 的紀錄只留在 agg
   - learned：每個項目「最新的事件」勝（學會 at／取消 removedAt 墓碑），取消會傳到別台、不會被救回
   - mistakes：每題 u（更新時間）最新的勝；畢業用 d:1 墓碑 */
(function (root) {
  'use strict';
  const MAX_BYTES = 500 * 1024;

  function h53(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }
  const rid = e => 'r' + h53(`${e.t}|${e.id}|${e.a == null ? '' : e.a}`).toString(36);
  // 依 key 排序的 JSON：用來比對「內容一樣嗎」與決定平手時的順序
  function canon(x) {
    if (Array.isArray(x)) return '[' + x.map(canon).join(',') + ']';
    if (x && typeof x === 'object') return '{' + Object.keys(x).sort().filter(k => x[k] !== undefined).map(k => JSON.stringify(k) + ':' + canon(x[k])).join(',') + '}';
    return JSON.stringify(x === undefined ? null : x);
  }
  const bytes = d => (typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(JSON.stringify(d)).length : JSON.stringify(d).length);
  const cmpLog = (a, b) => (a.t - b.t) || (a.r < b.r ? -1 : a.r > b.r ? 1 : 0);
  const evL = x => Math.max(Date.parse(x && x.at) || 0, Date.parse(x && x.removedAt) || 0);
  const evM = x => (x && (x.u || x.t)) || 0;
  // 兩筆取「事件較新」的；一樣新就取 canon 字串較大的（兩邊結果一致）
  function newest(a, b, ev) { if (!a) return b; if (!b) return a; const ea = ev(a), eb = ev(b); if (ea !== eb) return ea > eb ? a : b; return canon(a) >= canon(b) ? a : b; }
  function mergeMap(a, b, ev) { const o = {}; Object.keys(Object.assign({}, a, b)).sort().forEach(k => { const v = newest(a[k], b[k], ev); if (v) o[k] = v; }); return o; }
  function addFc(agg, e) { if (!e.ok) return; const g = agg[e.id] || (agg[e.id] = { n: 0, k: 0 }); if (g.fc == null || e.t < g.fc) g.fc = e.t; }
  function mergeAgg(a, b) {
    const o = {};
    Object.keys(Object.assign({}, a, b)).sort().forEach(q => {
      const x = a[q] || {}, y = b[q] || {}, g = { n: Math.max(x.n || 0, y.n || 0), k: Math.max(x.k || 0, y.k || 0) };
      const fc = [x.fc, y.fc].filter(v => v != null); if (fc.length) g.fc = Math.min.apply(null, fc);
      o[q] = g;
    });
    return o;
  }
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  // 整理成 v2：補 r、去重、排序；t ≤ cut 的舊紀錄只保留「答對過」到 agg
  function normalize(doc) {
    const d = obj(doc), cut = +d.cut || 0, agg = mergeAgg(obj(d.agg), {}), seen = new Map();
    (Array.isArray(d.log) ? d.log : []).forEach(e0 => {
      if (!e0 || !e0.id || !isFinite(+e0.t)) return;
      const e = e0.r ? e0 : Object.assign({}, e0, { r: rid(e0) });
      if (e.t <= cut) { addFc(agg, e); return; }
      const p = seen.get(e.r); if (!p || canon(e) > canon(p)) seen.set(e.r, e);
    });
    return { v: 2, cut, log: [...seen.values()].sort(cmpLog), agg, learned: mergeMap(obj(d.learned), {}, evL), mistakes: mergeMap(obj(d.mistakes), {}, evM) };
  }
  function merge(a, b) {
    a = normalize(a); b = normalize(b);
    const cut = Math.max(a.cut, b.cut);
    return normalize({ cut, log: a.log.concat(b.log), agg: mergeAgg(a.agg, b.agg), learned: mergeMap(a.learned, b.learned, evL), mistakes: mergeMap(a.mistakes, b.mistakes, evM) });
  }
  // 太大就把最舊的 1/4 壓進 agg（保留每題第一次答對的時間），重複到夠小
  function compact(doc, maxBytes) {
    let d = normalize(doc); const lim = maxBytes || MAX_BYTES;
    while (bytes(d) > lim && d.log.length > 50) {
      const cutT = d.log[Math.ceil(d.log.length / 4) - 1].t, agg = JSON.parse(JSON.stringify(d.agg));
      d.log.forEach(e => { if (e.t > cutT) return; const g = agg[e.id] || (agg[e.id] = { n: 0, k: 0 }); g.n++; if (e.ok) { g.k++; if (g.fc == null || e.t < g.fc) g.fc = e.t; } });
      d = normalize(Object.assign({}, d, { cut: Math.max(d.cut, cutT), agg }));
    }
    return d;
  }
  // 答對過的題號：紀錄裡 ok 的＋agg 有 fc 的（解鎖狀態從這裡算）
  function correctIds(doc) { const d = normalize(doc), s = new Set(); d.log.forEach(e => { if (e.ok) s.add(e.id); }); Object.keys(d.agg).forEach(q => { if (d.agg[q].fc != null) s.add(q); }); return s; }

  // 同步一次：GET → 合併 → 本機有變就寫回 → 跟遠端不同才 PUT（If-Match；被別台搶先就重來）
  // io = {get(code) → {doc,etag}|null, put(code,doc,etag) → {conflict?}, readLocal() → doc, writeLocal(doc)}
  async function syncOnce(io, code, opts) {
    const tries = (opts && opts.tries) || 3; let puts = 0, changedLocal = false;
    for (let i = 0; i < tries; i++) {
      const remote = await io.get(code);
      if (!remote) return { ok: false, notFound: true, puts, changedLocal };
      const rdoc = normalize(remote.doc), merged = compact(merge(io.readLocal(), rdoc));
      // 寫回本機前再跟「現在的本機」合一次，期間新增的作答不會被蓋掉
      const fresh = compact(merge(io.readLocal(), merged));
      if (canon(fresh) !== canon(normalize(io.readLocal()))) { io.writeLocal(fresh); changedLocal = true; }
      if (canon(merged) === canon(rdoc)) return { ok: true, puts, changedLocal };
      const r = await io.put(code, merged, remote.etag);
      if (r && r.conflict) continue;
      puts++;
      return { ok: true, puts, changedLocal };
    }
    return { ok: false, conflict: true, puts, changedLocal };
  }

  const ALPHA = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  function normCode(s) { const c = String(s || '').toUpperCase().replace(/[\s-]/g, ''); return c.length === 8 && [...c].every(ch => ALPHA.includes(ch)) ? c.slice(0, 4) + '-' + c.slice(4) : null; }

  const SM = { MAX_BYTES, rid, canon, bytes, normalize, merge, compact, correctIds, syncOnce, normCode };
  if (typeof module !== 'undefined' && module.exports) module.exports = SM;
  root.KESyncMerge = SM;
})(typeof window !== 'undefined' ? window : globalThis);
