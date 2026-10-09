/* syncmerge.js — 裝置同步的合併規則（純函式，不碰 DOM／網路以外的東西；瀏覽器與 Node 共用）
   文件格式 v3（2026-10-09 起；v2 欄位完全不變，只多下面五個欄位，舊文件少了它們就當空的）：
   {v:3, cut, log:[{r,t,id,m,k,y,ok,a}], agg:{qid:{fc,n,k}}, learned:{id:{at,score}|{removedAt}}, mistakes:{qid:{c,w,t,u,d?}},
    mm:{'<科>:<單元>':{unlocked,best:{關:%},passedAt:{關:ms},lastPassAt,reviewStep}},      ← kids_mm_progress（社會／自然心智圖）
    mmBlanks:{'<科>:<單元>':{sess,w:{詞:{ok,wrong,streak,last?,lastShown?}},a:{節點:{…}}}},  ← kids_mm_blanks（挖空／背架構加權）
    eq:{at,items:[{q,own,t}],del:{q:ms}},                                                  ← tianping-eq-list-v2（數學天平題目清單）
    scratch:{'<會員>|<堂>':iso},                                                            ← kids_scratch_done（Scratch 我完成了）
    ctr:{<裝置id>:{stars,quizzes}}}                                                         ← ke_progress（英文星星、完成回數）
   - log：每筆有固定 id（r），合併＝依 r 聯集；沒有 r 的舊紀錄用 雜湊(時間|題號|答案) 補，兩台算出來一樣
   - agg＋cut：太大時把最舊的紀錄壓成每題一筆（fc＝第一次答對的時間），t ≤ cut 的紀錄只留在 agg
   - learned：每個項目「最新的事件」勝（學會 at／取消 removedAt 墓碑），取消會傳到別台、不會被救回
   - mistakes：每題 u（更新時間）最新的勝；畢業用 d:1 墓碑
   - mm：每單元 unlocked／best／passedAt 各關取最大（＝過關聯集＋最佳成績＋最新過關時間）；複習：lastPassAt 取最新，
     reviewStep 跟著 lastPassAt 較新的那份走（一樣新取大的）。'_' 開頭的 key（示範時鐘）不同步。
   - mmBlanks：sess 取大；每個詞／節點取「答題次數（ok+wrong）較多」的那份（一樣多取 lastShown 大的）。
     不用加總：同一份紀錄每次同步都會再碰到，加總會一直重複累加（不冪等）；取較多的那份每次結果都一樣。
   - eq：依題目字串聯集＋刪除墓碑（del 比 t 新＝刪掉），順序跟 at（最後在哪台改清單）較新的那份，最多 30 題、墓碑最多 100 筆。
   - scratch：聯集，同一堂留最早的完成時間。
   - ctr：每台裝置各記自己的星星／回數（各欄取大），本機總數＝全部裝置加總，所以兩台不會互相蓋掉也不會重複算。 */
(function (root) {
  'use strict';
  const MAX_BYTES = 500 * 1024, VERSION = 3, MAX_EQ = 30, MAX_EQ_DEL = 100;

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
  const num = (x, d) => (x !== null && x !== '' && isFinite(+x) ? +x : d);
  const int0 = x => Math.max(0, Math.floor(num(x, 0)));
  // 物件型欄位：依 key 排序、逐筆整理（回 null 的丟掉）；'_' 開頭的 key 不同步
  function section(x, one) { const o = {}; Object.keys(obj(x)).sort().forEach(k => { if (!k || k.charAt(0) === '_') return; const v = one(x[k]); if (v) o[k] = v; }); return o; }
  function mergeSection(a, b, fn) { const o = {}; Object.keys(Object.assign({}, a, b)).sort().forEach(k => { const v = a[k] && b[k] ? fn(a[k], b[k]) : (a[k] || b[k]); if (v) o[k] = v; }); return o; }
  const maxMap = (a, b) => { const o = {}; Object.keys(Object.assign({}, a, b)).sort().forEach(k => { o[k] = Math.max(a[k] == null ? -Infinity : a[k], b[k] == null ? -Infinity : b[k]); }); return o; };

  // ---- mm：社會／自然心智圖過關（kids_mm_progress 的一個單元）----
  function normProg(p) {
    if (!p || typeof p !== 'object' || Array.isArray(p)) return null;
    const lv = m => { const o = {}; Object.keys(obj(m)).sort().forEach(k => { const v = num(m[k], null); if (/^[1-9]$/.test(k) && v != null) o[k] = v; }); return o; };
    return { unlocked: Math.max(1, Math.min(5, Math.floor(num(p.unlocked, 1)) || 1)), best: lv(p.best), passedAt: lv(p.passedAt), lastPassAt: Math.max(0, num(p.lastPassAt, 0)), reviewStep: int0(p.reviewStep) };
  }
  function mergeProg(a, b) {
    const o = { unlocked: Math.max(a.unlocked, b.unlocked), best: maxMap(a.best, b.best), passedAt: maxMap(a.passedAt, b.passedAt), lastPassAt: Math.max(a.lastPassAt, b.lastPassAt) };
    o.reviewStep = a.lastPassAt !== b.lastPassAt ? (a.lastPassAt > b.lastPassAt ? a : b).reviewStep : Math.max(a.reviewStep, b.reviewStep);
    return o;
  }
  // ---- mmBlanks：挖空／背架構加權（kids_mm_blanks 的一個單元）----
  function normRec(r) {
    if (!r || typeof r !== 'object') return null;
    const o = { ok: int0(r.ok), wrong: int0(r.wrong), streak: int0(r.streak) };
    if (r.last === 'ok' || r.last === 'wrong') o.last = r.last;
    if (num(r.lastShown, null) != null) o.lastShown = +r.lastShown;
    return o;
  }
  function pickRec(a, b) {
    const na = a.ok + a.wrong, nb = b.ok + b.wrong; if (na !== nb) return na > nb ? a : b;
    const la = a.lastShown || 0, lb = b.lastShown || 0; if (la !== lb) return la > lb ? a : b;
    return canon(a) >= canon(b) ? a : b;
  }
  function normBl(s) { if (!s || typeof s !== 'object' || Array.isArray(s)) return null; return { sess: int0(s.sess), w: section(s.w, normRec), a: section(s.a, normRec) }; }
  const mergeBl = (a, b) => ({ sess: Math.max(a.sess, b.sess), w: mergeSection(a.w, b.w, pickRec), a: mergeSection(a.a, b.a, pickRec) });
  // ---- eq：數學天平題目清單（聯集＋刪除墓碑）----
  function finishEq(at, items, del) {
    const alive = items.filter(it => !(it.q in del) || it.t > del[it.q]).slice(0, MAX_EQ), live = new Set(alive.map(it => it.q)), d2 = {};
    Object.keys(del).filter(q => !live.has(q)).sort((x, y) => (del[y] - del[x]) || (x < y ? -1 : 1)).slice(0, MAX_EQ_DEL).sort().forEach(q => { d2[q] = del[q]; });
    return { at, items: alive, del: d2 };
  }
  function normEq(e) {
    const d = obj(e), del = Object.create(null), items = [], seen = new Set();
    Object.keys(obj(d.del)).forEach(q => { const t = num(d.del[q], 0); if (q && t > 0) del[q] = t; });
    (Array.isArray(d.items) ? d.items : []).forEach(it => {
      if (!it || typeof it.q !== 'string' || !it.q || seen.has(it.q)) return;
      seen.add(it.q); items.push({ q: it.q, own: !!it.own, t: Math.max(0, num(it.t, 0)) });
    });
    return finishEq(Math.max(0, num(d.at, 0)), items, del);
  }
  function mergeEq(a, b) {
    a = normEq(a); b = normEq(b);
    const first = a.at !== b.at ? (a.at > b.at ? a : b) : (canon(a) >= canon(b) ? a : b), second = first === a ? b : a;
    const m = new Map();
    [first, second].forEach(s => s.items.forEach(it => { const p = m.get(it.q); if (!p) m.set(it.q, { q: it.q, own: it.own, t: it.t }); else { p.t = Math.max(p.t, it.t); p.own = p.own || it.own; } }));
    const del = Object.create(null); [a.del, b.del].forEach(x => Object.keys(x).forEach(q => { del[q] = Math.max(del[q] || 0, x[q]); }));
    return finishEq(Math.max(a.at, b.at), [...m.values()], del);
  }
  // 本機清單（[{q,own}]，沒有＝null）＋上次同步後的清單狀態 prev → 這台的 eq：新出現的題 t＝now、不見的題記墓碑、順序變了 at＝now
  function eqFromLocal(list, prev, now) {
    const p = normEq(prev);
    if (!Array.isArray(list)) return p;
    const pm = new Map(p.items.map(it => [it.q, it])), del = Object.assign(Object.create(null), p.del), items = [], seen = new Set();
    list.forEach(it => {
      if (!it || typeof it.q !== 'string' || !it.q || seen.has(it.q)) return;
      seen.add(it.q); const o = pm.get(it.q); items.push({ q: it.q, own: !!it.own, t: o ? o.t : now });
    });
    pm.forEach((it, q) => { if (!seen.has(q)) del[q] = now; });
    const same = items.length === p.items.length && items.every((it, i) => it.q === p.items[i].q && it.own === p.items[i].own);
    return finishEq(same ? p.at : now, items, del);
  }
  // ---- scratch：Scratch「我完成了」（聯集，留最早的時間）----
  const normScr = x => section(x, v => (typeof v === 'string' && v ? v : null));
  const earliest = (a, b) => { const ta = Date.parse(a), tb = Date.parse(b); if (ta !== tb && !(isNaN(ta) && isNaN(tb))) return isNaN(tb) || ta < tb ? a : b; return a <= b ? a : b; };
  // ---- ctr：每台裝置的星星／回數 ----
  const normCtr = x => section(x, c => (c && typeof c === 'object' ? { stars: int0(c.stars), quizzes: int0(c.quizzes) } : null));
  const mergeCtr = (a, b) => ({ stars: Math.max(a.stars, b.stars), quizzes: Math.max(a.quizzes, b.quizzes) });
  const ctrSum = c => { const s = { stars: 0, quizzes: 0 }; Object.keys(obj(c)).forEach(d => { s.stars += int0(c[d] && c[d].stars); s.quizzes += int0(c[d] && c[d].quizzes); }); return s; };

  // 整理成 v3：補 r、去重、排序；t ≤ cut 的舊紀錄只保留「答對過」到 agg；新欄位缺了就是空的（讀舊文件不會壞）
  function normalize(doc) {
    const d = obj(doc), cut = +d.cut || 0, agg = mergeAgg(obj(d.agg), {}), seen = new Map();
    (Array.isArray(d.log) ? d.log : []).forEach(e0 => {
      if (!e0 || !e0.id || !isFinite(+e0.t)) return;
      const e = e0.r ? e0 : Object.assign({}, e0, { r: rid(e0) });
      if (e.t <= cut) { addFc(agg, e); return; }
      const p = seen.get(e.r); if (!p || canon(e) > canon(p)) seen.set(e.r, e);
    });
    return { v: VERSION, cut, log: [...seen.values()].sort(cmpLog), agg, learned: mergeMap(obj(d.learned), {}, evL), mistakes: mergeMap(obj(d.mistakes), {}, evM),
      mm: section(d.mm, normProg), mmBlanks: section(d.mmBlanks, normBl), eq: normEq(d.eq), scratch: normScr(d.scratch), ctr: normCtr(d.ctr) };
  }
  function merge(a, b) {
    a = normalize(a); b = normalize(b);
    const cut = Math.max(a.cut, b.cut);
    return normalize({ cut, log: a.log.concat(b.log), agg: mergeAgg(a.agg, b.agg), learned: mergeMap(a.learned, b.learned, evL), mistakes: mergeMap(a.mistakes, b.mistakes, evM),
      mm: mergeSection(a.mm, b.mm, mergeProg), mmBlanks: mergeSection(a.mmBlanks, b.mmBlanks, mergeBl), eq: mergeEq(a.eq, b.eq),
      scratch: mergeSection(a.scratch, b.scratch, earliest), ctr: mergeSection(a.ctr, b.ctr, mergeCtr) });
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

  const SM = { MAX_BYTES, VERSION, MAX_EQ, rid, canon, bytes, normalize, merge, compact, correctIds, syncOnce, normCode, normEq, eqFromLocal, ctrSum };
  if (typeof module !== 'undefined' && module.exports) module.exports = SM;
  root.KESyncMerge = SM;
})(typeof window !== 'undefined' ? window : globalThis);
