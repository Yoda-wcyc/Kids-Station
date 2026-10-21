/* syncmerge.js — 裝置同步的合併規則（純函式，不碰 DOM／網路以外的東西；瀏覽器與 Node 共用）
   文件格式 v6（2026-10-21 起；v5 欄位完全不變，只在 done 裡多 mp、mx 兩節，舊文件少了它們就當空的）：
    done.mp:{circle,both,fill,lcm,word,lit:最佳 %, test:考試最高分}                       ← 數學〈倍數與公倍數〉各題型練習一輪最佳 %＋考試最高分
    done.mx:{nn,d21,d22t,d22,d31:{acc:最佳 %, sp:最快平均秒數×10, ok:第一次達標的時間}}   ← 數學〈乘法快算〉挑戰（一輪 ≥90% 且平均每題 ≤10 秒＝ok；判定在 completion.js）
   - mp：各項取大。mx：acc 取大、sp 取小、ok 取最早（聯集）。舊版（v5）裝置的 normDone 會丟掉 mp／mx → 新版下次同步從本機補回來（跟 v4→v5 的 done 一樣）。
   文件格式 v5（2026-10-20 起；v4 欄位完全不變，只多一個 done 欄位，舊文件少了它就當空的）：
    done:{tb:{'<課本單元>':{best,last,at}}, mm:{'<科>:<單元>':{cz,qz}}, bal:{b1…b8:ms}, sd:{l20,l100,l3d,tri:%}, gw:{basic,adv:%}, ai:{'<頁>':ms}}
                                                                                          ← kids_done（單元完成用的補存紀錄；判定在 completion.js）
   - done：英文課本考試 best 取大、last 跟著 at 較新的那次（一樣新取大的）；心智圖考考自己 cz／練習題 qz、短除法 sd、應用題 gw 的最佳 % 取大；
     天平內建題算對過 bal、AI 玩完 ai：聯集，留最早的時間。舊版（v4）裝置 PUT 回去的文件少了 done → 新版下次同步從本機補回來。
   文件格式 v4（2026-10-11 起；v3 欄位完全不變，只多一個 mk 欄位，舊文件少了它就當空的）：
    mk:{'<科>':{題目id:{c,w,t,u,p}|{d:1,w,t,u}}}   ← kids_mistakes（社會／自然／數學／AI 錯題庫；科＝social、science、math、ai）
   - mk：每科依題目 id 聯集；同一題 u（更新時間）最新的勝——畢業（移出錯題庫）用 d:1 墓碑，別台舊的那份不會把它救回來；
     答錯次數 w 取兩邊較大；墓碑每科最多留 300 筆（最新的）。英文錯題（mistakes）照舊。
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
  const MAX_BYTES = 500 * 1024, VERSION = 6, MAX_EQ = 30, MAX_EQ_DEL = 100;

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

  // ---- mk：各科錯題庫（kids_mistakes；格式見 kids-mistakes.js 檔頭；這裡的整理規則要跟 kids-mistakes.js _core 一致，smoke 會對）----
  const MK_SUBJ = ['social', 'science', 'math', 'ai'], MK_GRAD = 3, MK_DEL = 300, MK_ID = 200, MK_P = 4000;
  const nat = x => { x = +x; return isFinite(x) && x > 0 ? Math.floor(x) : 0; };
  function normMkP(p) { if (!p || typeof p !== 'object' || Array.isArray(p)) return {}; try { const s = JSON.stringify(p); return s.length <= MK_P ? JSON.parse(s) : {}; } catch (e) { return {}; } }
  function normMkEntry(e) {
    if (!e || typeof e !== 'object' || Array.isArray(e)) return null;
    const t = nat(e.t), u = Math.max(nat(e.u), t);
    if (e.d) return { d: 1, w: nat(e.w), t, u };
    return { c: Math.min(nat(e.c), MK_GRAD - 1), w: Math.max(1, nat(e.w)), t, u, p: normMkP(e.p) };
  }
  function normMkBook(b) {
    const o = {}, x = obj(b), dead = [];
    Object.keys(x).sort().forEach(k => { if (!k || k.length > MK_ID || k.charAt(0) === '_') return; const e = normMkEntry(x[k]); if (!e) return; o[k] = e; if (e.d) dead.push(k); });
    if (dead.length > MK_DEL) dead.sort((a, c) => (o[c].u - o[a].u) || (a < c ? -1 : 1)).slice(MK_DEL).forEach(k => { delete o[k]; });
    return o;
  }
  function normMk(x) { const o = {}, d = obj(x); MK_SUBJ.forEach(s => { const b = normMkBook(d[s]); if (Object.keys(b).length) o[s] = b; }); return o; }
  // 同一題：u 新的勝（墓碑＝已畢業也是，別台舊的那份不會把它救回來）；一樣新比內容（不含 w）；答錯次數 w 取較大
  const noW = e => { const o = Object.assign({}, e); delete o.w; return canon(o); };
  function pickMk(a, b) {
    if (!a) return b; if (!b) return a;
    const x = a.u !== b.u ? (a.u > b.u ? a : b) : (noW(a) >= noW(b) ? a : b), w = Math.max(a.w, b.w);
    return x.w === w ? x : Object.assign({}, x, { w });
  }
  function mergeMk(a, b) {
    a = normMk(a); b = normMk(b); const o = {};
    MK_SUBJ.forEach(s => { if (!a[s] && !b[s]) return; const x = a[s] || {}, y = b[s] || {}, m = {}; Object.keys(Object.assign({}, x, y)).sort().forEach(k => { m[k] = pickMk(x[k], y[k]); }); o[s] = m; });
    return normMk(o);
  }

  // ---- done：單元完成用的補存紀錄（kids_done；completion.js 讀）----
  const pct = x => { const v = num(x, null); return v == null ? null : Math.max(0, Math.min(100, Math.round(v))); };
  const ms = x => { const v = num(x, 0); return v > 0 ? Math.floor(v) : 0; };
  const DONE_KEY = /^[a-z0-9][a-z0-9:_-]{0,79}$/i, SD_K = ['l20', 'l100', 'l3d', 'tri'], GW_K = ['basic', 'adv'];
  // 每一節：依 key 排序、整理、丟掉不合格的；keys＝只收這幾個 key
  function dsec(x, one, keys) { const o = {}, d = obj(x); Object.keys(d).sort().forEach(k => { if (!DONE_KEY.test(k) || (keys && keys.indexOf(k) < 0)) return; const v = one(d[k]); if (v != null) o[k] = v; }); return o; }
  function normTb(e) { if (!e || typeof e !== 'object') return null; const b = pct(e.best), l = pct(e.last), at = ms(e.at); if (b == null && l == null) return null; const last = l == null ? b : l; return { best: Math.max(b == null ? 0 : b, last), last, at }; }
  // mm：cz＝考考自己一輪答對率（含「再答一次」才答對的格子，2026-10-20 第一版存的；判定已不採用）、czFirst＝考考自己一輪「第一次作答就答對」的格數／總格數（判定用）、
  //     qz＝練習題一輪答對率（每題只答一次，本來就是第一次答對率）。三個都取最佳（大）。
  const MM_F = ['cz', 'czFirst', 'qz'];
  // mp：倍數與公倍數（各題型練習最佳 %、考試最高分）；mx：乘法快算挑戰（acc 最佳 %、sp 最快平均秒數×10、ok 第一次達標時間）
  const MP_K = ['circle', 'both', 'fill', 'lcm', 'word', 'lit', 'test'], MX_K = ['nn', 'd21', 'd22t', 'd22', 'd31'];
  function normMx(e) {
    if (!e || typeof e !== 'object') return null; const acc = pct(e.acc); if (acc == null) return null;
    const o = { acc }, sp = num(e.sp, null), ok = ms(e.ok);
    if (sp != null && sp > 0) o.sp = Math.min(36000, Math.max(1, Math.round(sp)));
    if (ok) o.ok = ok;
    return o;
  }
  function normMmD(e) { if (!e || typeof e !== 'object') return null; const o = {}; MM_F.forEach(k => { const v = pct(e[k]); if (v != null) o[k] = v; }); return Object.keys(o).length ? o : null; }
  function normDone(x) {
    const d = obj(x), once = v => ms(v) || null;
    return { tb: dsec(d.tb, normTb), mm: dsec(d.mm, normMmD), bal: dsec(d.bal, once), sd: dsec(d.sd, pct, SD_K), gw: dsec(d.gw, pct, GW_K), ai: dsec(d.ai, once), mp: dsec(d.mp, pct, MP_K), mx: dsec(d.mx, normMx, MX_K) };
  }
  const maxOf = (a, b) => Math.max(a == null ? -Infinity : a, b == null ? -Infinity : b);
  function mergeDone(a, b) {
    a = normDone(a); b = normDone(b);
    const tb = mergeSection(a.tb, b.tb, (x, y) => { const n = x.at !== y.at ? (x.at > y.at ? x : y) : (x.last >= y.last ? x : y); return { best: Math.max(x.best, y.best), last: n.last, at: n.at }; });
    const mm = mergeSection(a.mm, b.mm, (x, y) => { const o = {}; MM_F.forEach(k => { if (x[k] != null || y[k] != null) o[k] = maxOf(x[k], y[k]); }); return o; });
    // 數字節（0 分也要留著：做過一輪＝有進度），兩邊都有才用 fn
    const nums = (x, y, fn) => { const o = {}; Object.keys(Object.assign({}, x, y)).sort().forEach(k => { o[k] = x[k] != null && y[k] != null ? fn(x[k], y[k]) : (x[k] != null ? x[k] : y[k]); }); return o; };
    const first = (x, y) => Math.min(x, y), best = (x, y) => Math.max(x, y);
    const lo = (x, y) => (x == null ? y : y == null ? x : Math.min(x, y));
    const mx = mergeSection(a.mx, b.mx, (x, y) => { const o = { acc: Math.max(x.acc, y.acc) }, sp = lo(x.sp, y.sp), ok = lo(x.ok, y.ok); if (sp != null) o.sp = sp; if (ok != null) o.ok = ok; return o; });
    return normDone({ tb, mm, bal: nums(a.bal, b.bal, first), sd: nums(a.sd, b.sd, best), gw: nums(a.gw, b.gw, best), ai: nums(a.ai, b.ai, first), mp: nums(a.mp, b.mp, best), mx });
  }

  // 整理成 v6：補 r、去重、排序；t ≤ cut 的舊紀錄只保留「答對過」到 agg；新欄位缺了就是空的（讀舊文件不會壞）
  function normalize(doc) {
    const d = obj(doc), cut = +d.cut || 0, agg = mergeAgg(obj(d.agg), {}), seen = new Map();
    (Array.isArray(d.log) ? d.log : []).forEach(e0 => {
      if (!e0 || !e0.id || !isFinite(+e0.t)) return;
      const e = e0.r ? e0 : Object.assign({}, e0, { r: rid(e0) });
      if (e.t <= cut) { addFc(agg, e); return; }
      const p = seen.get(e.r); if (!p || canon(e) > canon(p)) seen.set(e.r, e);
    });
    return { v: VERSION, cut, log: [...seen.values()].sort(cmpLog), agg, learned: mergeMap(obj(d.learned), {}, evL), mistakes: mergeMap(obj(d.mistakes), {}, evM),
      mm: section(d.mm, normProg), mmBlanks: section(d.mmBlanks, normBl), eq: normEq(d.eq), scratch: normScr(d.scratch), ctr: normCtr(d.ctr), mk: normMk(d.mk), done: normDone(d.done) };
  }
  function merge(a, b) {
    a = normalize(a); b = normalize(b);
    const cut = Math.max(a.cut, b.cut);
    return normalize({ cut, log: a.log.concat(b.log), agg: mergeAgg(a.agg, b.agg), learned: mergeMap(a.learned, b.learned, evL), mistakes: mergeMap(a.mistakes, b.mistakes, evM),
      mm: mergeSection(a.mm, b.mm, mergeProg), mmBlanks: mergeSection(a.mmBlanks, b.mmBlanks, mergeBl), eq: mergeEq(a.eq, b.eq),
      scratch: mergeSection(a.scratch, b.scratch, earliest), ctr: mergeSection(a.ctr, b.ctr, mergeCtr), mk: mergeMk(a.mk, b.mk), done: mergeDone(a.done, b.done) });
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
  // io = {get(code) → {doc,etag,notModified?}|null, put(code,doc,etag) → {conflict?}, readLocal() → doc, writeLocal(doc)}
  // opts（2026-10-19 自動同步）：
  //   tries：最多試幾次（預設 4＝第一次＋衝突後最多重試 3 次）
  //   lazy：第一次 GET 回「伺服器沒變」（notModified）就直接結束，不合併（輪詢用；本機沒有待上傳的變動才可以用）
  //   cached：{doc,etag} 上次跟伺服器對到的版本。第一次不 GET，直接拿它合併後 PUT（If-Match 它的 etag）；被別台改過（412）才 GET 重來
  async function syncOnce(io, code, opts) {
    opts = opts || {};
    const tries = opts.tries || 4; let puts = 0, changedLocal = false, pre = opts.cached && opts.cached.doc ? opts.cached : null;
    for (let i = 0; i < tries; i++) {
      const remote = pre || await io.get(code); pre = null;
      if (!remote) return { ok: false, notFound: true, puts, changedLocal };
      if (opts.lazy && i === 0 && remote.notModified) return { ok: true, notModified: true, puts, changedLocal };
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

  const SM = { MAX_BYTES, VERSION, MAX_EQ, MK_DEL, rid, canon, bytes, normalize, merge, compact, correctIds, syncOnce, normCode, normEq, eqFromLocal, ctrSum, normMk, mergeMk, normDone, mergeDone, MP_K, MX_K };
  if (typeof module !== 'undefined' && module.exports) module.exports = SM;
  root.KESyncMerge = SM;
})(typeof window !== 'undefined' ? window : globalThis);
