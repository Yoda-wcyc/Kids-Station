/* kids-lock.js — 單元「做過幾次」＋做滿 2 次就鎖住、帶去更難的下一個（2026-11-16 家長指令：「全部科目，做過的單元要標示，超過兩次就不給再度練習，強迫去練習更難的」）。
   上半部是純函式（Node 測試 test/kids-lock.test.js 共用）；下半部是瀏覽器：標示、鎖住的卡、家長頁解鎖。

   做 1 次（判定照 completion.js）：
   - 第 1 次＝這個單元第一次「已完成」（completion.js 的 done；國語一篇／一個成語＝完成那一篇；漫畫一話＝看完做完測驗；英檢一組＝做完一組 ≥80%、模擬考＝考完一份、寫作口說＝做完一題）。
   - 之後每再做完一次單元的「收尾」且達標 +1：英文課本＝考試 ≥80、社會自然＝練習題一輪 ≥80%、天平＝第 8 題內建題、短除法＝「三個數」一輪 ≥80%、應用題＝「進階」一輪 ≥80%、
     倍數＝任一份考卷 ≥80、分數＝考試 ≥80、五下起＝單元測驗（總複習）≥80、地理＝單元測驗 ≥80、AI＝玩完一次；
     乘法快算各題型＝挑戰一輪達標（completion.js mxPass）；句型／片語「隨機練 10 題」各等級＝一回答對 ≥80%。只打開不算。
   - 舊紀錄：數不出次數（kids_done 只存最佳分數），已完成的一律算 1 次（地板），不會第一天就鎖住任何東西。
   鎖：同一條學習路徑（PATHS：課程地圖的單元順序、篇目順序、難度階）上 ≥2 次而且「不是最後一個」才鎖；最後一個、每日清單指定的那一階（EXEMPT）永遠不鎖。
   下一個更難的＝同一條路徑往後第一個沒鎖的（最後一個不會鎖，所以一定找得到）。
   不鎖：錯題庫重練、🔁 今天要複習、段考模擬、遊戲分頁、英文單字卡（各自有自己的規則）、異分母加減（隨機出題沒有難度階）。
   存法：kids_done.n（跟著同步；格式、合併在 syncmerge.js normN／mergeN）。一格一個字 v＝3×解鎖次數＋這一輪次數(0～2)；家長解鎖＝跳到下一輪的 1。 */
(function (root) {
  'use strict';
  const SMx = () => root.KESyncMerge || (typeof require === 'function' ? require('./syncmerge.js') : null);
  const KCx = () => root.KidsCompletion || (typeof require === 'function' ? (() => { try { return require('./completion.js'); } catch (e) { return null; } })() : null);
  const MAX = 2, PASS = 80, VMAX = 61;
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  const pad = (n, w) => String(n).padStart(w, '0');
  // 每日清單指定的那一階、本身就是每日清單的單元：永遠不鎖
  const EXEMPT = { 'math:mx': 1, 'mx:d22t': 1, 'mx:d22': 1 };
  const MATH = ['balance', 'sd', 'gw', 'mul', 'mx', 'frc'], AIS = ['hallucinate', 'ask-well', 'secrets'];
  // 乘法快算題型（要跟 math/multiply.js 的 LV、LV_NAME 一樣，test 會對）；由易到難
  const MXL = ['nn', 'd21', 'd22t', 'd22', 'd31'], MX_NAME = { nn: '九九乘法', d21: '二位數×一位數', d22t: '二位數×整十', d22: '二位數×二位數', d31: '三位數×一位數' };
  const PAT_LV = ['簡單', '基本', '進階'], PH_LV = ['必會', '基本', '進階'];   // app.js 句型／片語頁的等級（1～3）

  // ---------- 單元 id ↔ 存放位置（組, 第幾格）----------
  function alias(key) { const m = /^cy:U(\d+)$/.exec(key || ''); return m ? 'cyu' + pad(m[1], 2) : key; }   // 課程地圖的成語單元＝那一份單元測驗
  function slot(key) {
    key = alias(String(key || '')); let m;
    if ((m = /^tb:hanlin-(\d)-u(\d{1,2})$/.exec(key))) return ['t' + m[1], +m[2] - 1];
    if ((m = /^mm:social:u(\d{1,2})$/.exec(key))) return ['ms', +m[1] - 1];
    if ((m = /^mm:science:n(\d{1,2})$/.exec(key))) return ['mn', +m[1] - 1];
    if ((m = /^math:([a-z]+)$/.exec(key)) && MATH.indexOf(m[1]) >= 0) return ['m', MATH.indexOf(m[1])];
    if ((m = /^mg:(g[56][ab])(\d{1,2}|R)$/.exec(key))) return [m[1], m[2] === 'R' ? 0 : +m[2]];
    if ((m = /^geo:([mtw])(\d)$/.exec(key))) return ['g' + m[1], +m[2] - 1];
    if ((m = /^ai:([a-z-]+)$/.exec(key)) && AIS.indexOf(m[1]) >= 0) return ['ai', AIS.indexOf(m[1])];
    if ((m = /^zh([1-4])-(\d\d)$/.exec(key))) return ['z' + m[1], +m[2] - 1];
    if (key === 'cyall') return ['cy', 0];
    if ((m = /^cy(\d{3})$/.exec(key))) return ['cy', +m[1]];
    if ((m = /^cyr(\d\d)$/.exec(key))) return ['cr', +m[1] - 1];
    if ((m = /^cyu(\d\d)$/.exec(key))) return ['cu', +m[1] - 1];
    if ((m = /^v(\d)e(\d)$/.exec(key))) return ['v' + m[1], +m[2] - 1];
    if ((m = /^([eia])-([LRSW]\d|M)-(\d\d)$/.exec(key))) return [m[1] + m[2], +m[3] - 1];
    if ((m = /^mx:([a-z0-9]+)$/.exec(key)) && MXL.indexOf(m[1]) >= 0) return ['mx', MXL.indexOf(m[1])];
    if ((m = /^pat:([1-3])$/.exec(key))) return ['pt', +m[1] - 1];
    if ((m = /^ph:([1-3])$/.exec(key))) return ['ph', +m[1] - 1];
    return null;
  }
  function keyOf(g, i) {
    let m;
    if ((m = /^t(\d)$/.exec(g))) return 'tb:hanlin-' + m[1] + '-u' + (i + 1);
    if (g === 'ms') return 'mm:social:u' + (i + 1);
    if (g === 'mn') return 'mm:science:n' + (i + 1);
    if (g === 'm') return MATH[i] ? 'math:' + MATH[i] : null;
    if (/^g[56][ab]$/.test(g)) return 'mg:' + g + (i ? i : 'R');
    if ((m = /^g([mtw])$/.exec(g))) return 'geo:' + m[1] + (i + 1);
    if (g === 'ai') return AIS[i] ? 'ai:' + AIS[i] : null;
    if ((m = /^z([1-4])$/.exec(g))) return 'zh' + m[1] + '-' + pad(i + 1, 2);
    if (g === 'cy') return i ? 'cy' + pad(i, 3) : 'cyall';
    if (g === 'cr') return 'cyr' + pad(i + 1, 2);
    if (g === 'cu') return 'cyu' + pad(i + 1, 2);
    if (/^v\d$/.test(g)) return g + 'e' + (i + 1);
    if ((m = /^([eia])([LRSW]\d|M)$/.exec(g))) return m[1] + '-' + m[2] + '-' + pad(i + 1, 2);
    if (g === 'mx') return MXL[i] ? 'mx:' + MXL[i] : null;
    if (g === 'pt') return 'pat:' + (i + 1);
    if (g === 'ph') return 'ph:' + (i + 1);
    return null;
  }

  // ---------- 讀寫一格 ----------
  function getV(done, key) {
    const s = slot(key); if (!s) return 0;
    const str = obj(SMx().normDone(done).n)[s[0]] || '';
    return Math.max(0, SMx().N_ABC.indexOf(str[s[1]] || '0'));
  }
  function setV(done, key, v) {
    const s = slot(key), SM = SMx(), d = SM.normDone(done); if (!s || s[1] > 127) return d;
    const n = Object.assign({}, d.n); let str = n[s[0]] || '';
    while (str.length <= s[1]) str += '0';
    n[s[0]] = str.slice(0, s[1]) + SM.N_ABC[Math.max(0, Math.min(VMAX, v))] + str.slice(s[1] + 1);
    d.n = n; return SM.normDone(d);
  }
  // 這一輪做過幾次（0～2）；floor＝completion 判定已完成（舊紀錄回推＝至少 1 次）
  const times = (done, key, floor) => Math.max(getV(done, key) % 3, floor ? 1 : 0);

  // ---------- 一筆完成紀錄（KidsDone.record 的 sec/key/val）→ 哪個單元、是不是收尾 ----------
  // 回 null＝不算次數（沒達標、不是單元的一部分）；fin＝收尾（已完成後再做到就 +1）；self＝這件事本身就是完成（不看 completion）
  function evOf(sec, key, val) {
    const v = +val, ok = v >= PASS; let m;
    key = String(key || '');
    if (sec === 'tb') return ok ? { unit: 'tb:' + key, fin: 1 } : null;
    if (sec === 'czFirst' || sec === 'qz') return ok ? { unit: 'mm:' + key, fin: sec === 'qz' ? 1 : 0 } : null;
    if (sec === 'bal') return /^b[1-8]$/.test(key) ? { unit: 'math:balance', fin: key === 'b8' ? 1 : 0 } : null;
    if (sec === 'sd') return ok ? { unit: 'math:sd', fin: key === 'tri' ? 1 : 0 } : null;
    if (sec === 'gw') return ok ? { unit: 'math:gw', fin: key === 'adv' ? 1 : 0 } : null;
    if (sec === 'mp') return ok ? { unit: 'math:mul', fin: /^(test|p1|p2)$/.test(key) ? 1 : 0 } : null;
    if (sec === 'fr') return ok ? { unit: 'math:frc', fin: key === 'test' ? 1 : 0 } : null;
    if (sec === 'mg') { if (!ok) return null; if ((m = /^(g[56][ab])R$/.exec(key))) return { unit: 'mg:' + m[1] + 'R', fin: 1 }; if ((m = /^(g[56][ab]\d{1,2})([qt])$/.exec(key))) return { unit: 'mg:' + m[1], fin: m[2] === 't' ? 1 : 0 }; return null; }
    if (sec === 'geo') { if (!ok) return null; if ((m = /^([mtw]\d)(p[1-3]|t)$/.exec(key))) return { unit: 'geo:' + m[1], fin: m[2] === 't' ? 1 : 0 }; return null; }
    if (sec === 'mx') { const o = obj(val), KC = KCx(); return KC && MXL.indexOf(key) >= 0 && KC.mxPass(o.acc, o.sec, key) ? { unit: 'mx:' + key, fin: 1 } : null; }
    if (sec === 'ai') return { unit: 'ai:' + key, fin: 1 };
    if (sec === 'zh' || sec === 'cy') return { unit: key, fin: 1 };   // reading.js／idioms.js 只在完成時記
    if (sec === 'n') return val ? { unit: key, fin: 1, self: 1 } : null;   // 漫畫、英檢、句型／片語隨機 10 題（呼叫的地方已經判過「做完」）
    return null;
  }
  // 記一次：wasDone／isDone＝這筆紀錄之前／之後 completion 判定完成了沒
  function step(done, ev, wasDone, isDone) {
    const v = getV(done, ev.unit), k = Math.floor(v / 3); let e = Math.max(v % 3, wasDone ? 1 : 0);
    if (e === 0) { if (!isDone) return done; e = 1; }
    else if (ev.fin) e = Math.min(MAX, e + 1);
    const nv = 3 * k + e;
    return nv === v ? done : setV(done, ev.unit, nv);
  }
  // 家長解鎖：跳到下一輪、算做過 1 次（再做 1 次又會鎖；一格最多 20 輪，再多就解不開 → 回 null）
  function unlock(done, key) {
    const v = getV(done, key), nv = 3 * (Math.floor(v / 3) + 1) + 1;
    return nv > VMAX ? null : setV(done, key, nv);
  }

  // ---------- 完成了沒（地板）：completion.js 判定；國語篇目／成語、乘法題型、漫畫、英檢各自看紀錄 ----------
  function floorOf(key, data, ctx) {
    key = alias(key); ctx = ctx || {};
    const d = SMx().normDone(ctx.done); let m;
    if (/^zh\d-\d\d$/.test(key)) return !!d.zh[key];
    if (/^cy(\d{3}|r\d\d|u\d\d|all)$/.test(key)) return !!d.cy[key];
    if ((m = /^mx:(\w+)$/.exec(key))) return !!(d.mx[m[1]] && d.mx[m[1]].ok);
    if (/^v\de\d$/.test(key)) return !!obj(obj(ctx.comic).seen)[key];
    if (/^[eia]-/.test(key)) {
      const g = obj(ctx.gept);
      if (/-M-/.test(key)) return (Array.isArray(g.mock) ? g.mock : []).some(r => r && r.id === key);
      if (/-[SW]\d-/.test(key)) return !!obj(g.task)[key];
      return +obj(obj(g.best)[key]).p >= PASS;
    }
    if (/^(pat|ph):/.test(key)) return false;
    const KC = KCx(); if (!KC) return false;
    try { const r = KC.evaluate(key, data || {}, ctx); return !!(r && r.status === 'done'); } catch (e) { return false; }
  }
  // KidsDone.record 用：cur＝記之前、next＝completion.record 之後；回記好次數的 next
  function onRecord(cur, next, sec, key, val, data, ctx) {
    const ev = evOf(sec, key, val); if (!ev) return next;
    const c0 = Object.assign({}, ctx, { done: cur }), c1 = Object.assign({}, ctx, { done: next });
    return step(next, ev, floorOf(ev.unit, data, c0), ev.self || floorOf(ev.unit, data, c1));
  }

  // ---------- 學習路徑（找「下一個更難的」）----------
  const BACK = { english: ['index.html#tb', '← 回課本進度'], social: ['index.html#s/social', '← 回社會'], science: ['index.html#s/science', '← 回自然'], math: ['index.html#s/math', '← 回數學'], geo: ['index.html#s/geo', '← 回地理'], ai: ['index.html#s/ai', '← 回 AI'] };
  const back = (href, label) => ({ href, label });
  function paths(data) {
    data = data || {}; const out = [], KC = KCx();
    if (KC) KC.catalog(data).forEach(s => { const b = BACK[s.k]; if (b && s.units.length) out.push({ id: s.k, back: back(b[0], b[1]), items: s.units.map(u => ({ key: u.key, title: (/^[五六][上下]$/.test(u.group || '') && u.title.indexOf(u.group) !== 0 ? u.group + ' ' : '') + u.title, href: u.href })) }); });   // 「五下 單元二」：冊別也寫出來，小孩才知道是哪一個
    const zh = ((data.zhArts && data.zhArts.length ? data.zhArts : data.zhCatalog) || []).slice().sort((a, b) => (a.id < b.id ? -1 : 1));
    const zb = back('index.html#s/chinese', '← 回國語');
    if (zh.length) out.push({ id: 'zh', back: zb, items: zh.map(a => ({ key: a.id, title: 'L' + a.lv + '・' + (a.title || a.topic || a.id), href: 'chinese/reading.html?a=' + a.id })) });
    const cy = data.cyCatalog, ci = 'chinese/idioms/idioms.html?';
    if (cy && cy.idioms) {
      out.push({ id: 'cy', back: zb, items: cy.idioms.map(c => ({ key: c.id, title: c.n + '．' + c.word, href: ci + 'i=' + c.id })) });
      out.push({ id: 'cyr', back: zb, items: (cy.readings || []).map(r => ({ key: r.id, title: '第 ' + r.unit + ' 單元素養閱讀', href: ci + 'r=' + r.id })) });
      out.push({ id: 'cyu', back: zb, items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(k => ({ key: 'cyu' + pad(k, 2), title: '成語第 ' + k + ' 單元測驗', href: ci + 'u=' + k })) });
      out.push({ id: 'cyall', back: zb, items: [{ key: 'cyall', title: '成語總測驗', href: ci + 'u=all' }] });   // 只有一份＝最後一個，不鎖
    }
    const cm = data.comics;
    if (cm && cm.vols) out.push({ id: 'comic', back: back('comics/index.html', '📚 回漫畫目錄'), items: cm.vols.flatMap(v => v.eps.filter(e => e.ready).map(e => ({ key: e.id, title: '第 ' + v.no + ' 冊第 ' + e.id.split('e')[1] + ' 話〈' + e.t + '〉', href: 'comics/' + e.id + '.html' }))) });
    const gp = data.gept;
    // shortcut: 中高級 u（2026-11-21）不進做過幾次／鎖：done.n 會同步，u 最壞約多 120 B，同步預算只剩 799 B（要留 700 B）；有空間時 slot()／keyOf() 的 [eia] 加 u、拿掉這個 filter
    if (gp) Object.keys(gp).filter(lv => lv !== 'u').forEach(lv => Object.keys(obj(gp[lv])).forEach(pt => {
      const pg = pt === 'M' ? 'mock' : /^[SW]/.test(pt) ? 'task' : 'practice';
      out.push({ id: 'gp:' + lv + pt, back: back('gept/index.html?lv=' + lv, '← 回英檢準備區'), items: gp[lv][pt].map(s => ({ key: s.id, title: s.t || s.id, href: 'gept/' + pg + '.html?set=' + s.id })) });
    }));
    // 乘法快算的路徑：九九 → 二位×一位 → 二位×二位 → 三位×一位（「二位×整十」也是每日清單的題、永遠不鎖，不放進路徑：二位×一位鎖了直接帶去二位×二位）
    out.push({ id: 'mx', back: back('index.html#s/math', '← 回數學'), items: MXL.filter(k => k !== 'd22t').map(k => ({ key: 'mx:' + k, title: '乘法快算：' + MX_NAME[k], href: 'index.html#s/math/multiply' })) });
    out.push({ id: 'pat', back: back('index.html#learn/patterns', '← 回句型'), items: PAT_LV.map((t, i) => ({ key: 'pat:' + (i + 1), title: '句型隨機 10 題：' + t, href: 'index.html#learn/patterns' })) });
    out.push({ id: 'ph', back: back('index.html#learn/phrases', '← 回片語'), items: PH_LV.map((t, i) => ({ key: 'ph:' + (i + 1), title: '片語隨機 10 題：' + t, href: 'index.html#learn/phrases' })) });
    return out;
  }
  // 一個單元在路徑上的狀態：n＝做過幾次、locked、next＝下一個更難的（沒鎖的）
  function view(path, key, timesOf) {
    key = alias(key);
    const items = path ? path.items : [], i = items.findIndex(u => u.key === key), n = timesOf(key);
    const lockedAt = j => j >= 0 && j < items.length - 1 && !EXEMPT[items[j].key] && slot(items[j].key) != null && timesOf(items[j].key) >= MAX;
    const locked = lockedAt(i);
    let next = null;
    if (locked) for (let j = i + 1; j < items.length; j++) if (!lockedAt(j)) { next = items[j]; break; }
    return { key, n, locked, next, title: i >= 0 ? items[i].title : key, back: path ? path.back : null };
  }
  // 一份紀錄的查表：key → view(…)（不在任何路徑上回 null）。瀏覽器 snap() 和小助理（assistant-core.js）共用
  function lookup(data, ctx) {
    ctx = ctx || {}; const ps = paths(data), byKey = {}, memo = {};
    ps.forEach(p => p.items.forEach(u => { if (!byKey[u.key]) byKey[u.key] = p; }));
    const timesOf = k => (k in memo ? memo[k] : (memo[k] = times(ctx.done, k, floorOf(k, data, ctx))));
    const state = (key, path) => { key = alias(key); return view(path || byKey[key] || null, key, timesOf); };
    return { ps, byKey, timesOf, state, of: key => { key = alias(key); return slot(key) && byKey[key] ? state(key) : null; } };
  }
  // 標示文字：沒做＝空、做 1 次 ✓1、做 2 次 ✓2（鎖住的 ✓2 🔒）
  const badgeText = st => (!st || !st.n ? '' : st.locked ? '✓' + st.n + ' 🔒' : '✓' + st.n);
  // 單元頁網址 → 單元 id（直接打網址、深層連結也擋；錯題、複習、段考模擬、預覽不擋）
  function keyFromUrl(rel, search) {
    const q = new URLSearchParams(search || ''), g = k => q.get(k) || '';
    if (g('mistakes') || g('review') === '1' || g('mock') === '1' || g('preview') === '1') return null;
    rel = String(rel || '').replace(/^\/+/, ''); let m;
    if (rel === 'math/balance.html') return 'math:balance';
    if (rel === 'math/short-division.html') return g('tab') === 'word' ? 'math:gw' : 'math:sd';
    if (rel === 'math/multiples.html') return 'math:mul';
    if (rel === 'math/fraction.html') return 'math:frc';
    if (rel === 'math/grade.html') return /^g[56][ab]\d{1,2}$/.test(g('u')) ? 'mg:' + g('u') : /^g[56][ab]$/.test(g('r')) ? 'mg:' + g('r') + 'R' : null;
    if ((m = /^mindmap\/(social|science)\.html$/.exec(rel))) return /^[un]\d{1,2}$/.test(g('u')) ? 'mm:' + m[1] + ':' + g('u') : null;
    if (rel === 'geo/unit.html') return /^[mtw]\d$/.test(g('u')) ? 'geo:' + g('u') : null;
    if ((m = /^ai\/([a-z-]+)\.html$/.exec(rel)) && AIS.indexOf(m[1]) >= 0) return 'ai:' + m[1];
    if (rel === 'chinese/reading.html') return /^zh\d-\d\d$/.test(g('a')) ? g('a') : null;
    if (rel === 'chinese/idioms/idioms.html') { if (/^cy\d{3}$/.test(g('i'))) return g('i'); if (/^cyr\d\d$/.test(g('r'))) return g('r'); if (/^\d{1,2}$/.test(g('u'))) return 'cyu' + pad(g('u'), 2); if (g('u') === 'all') return 'cyall'; return null; }
    if ((m = /^comics\/(v\de\d)\.html$/.exec(rel))) return m[1];
    if (/^gept\/(practice|mock|task)\.html$/.test(rel)) return /^[eia]-([LRSW]\d|M)-\d\d$/.test(g('set')) ? g('set') : null;
    return null;
  }
  // 名字（家長頁；這一頁沒載入目錄時用）
  function nameOf(key, data) {
    key = alias(key); let m;
    for (const p of paths(data)) { const u = p.items.find(x => x.key === key); if (u) return u.title; }
    if ((m = /^zh(\d)-(\d\d)$/.exec(key))) return '國語閱讀 L' + m[1] + ' 第 ' + (+m[2]) + ' 篇';
    if ((m = /^cy(\d{3})$/.exec(key))) return '成語 第 ' + (+m[1]) + ' 個';
    if ((m = /^cyr(\d\d)$/.exec(key))) return '成語 第 ' + (+m[1]) + ' 單元素養閱讀';
    if ((m = /^cyu(\d\d)$/.exec(key))) return '成語 第 ' + (+m[1]) + ' 單元測驗';
    if (key === 'cyall') return '成語總測驗';
    if ((m = /^v(\d)e(\d)$/.exec(key))) return '世界史漫畫 第 ' + m[1] + ' 冊第 ' + m[2] + ' 話';
    if ((m = /^([eia])-([LRSW]\d|M)-(\d\d)$/.exec(key))) return '全民英檢' + ({ e: '初級', i: '中級', a: '高級' })[m[1]] + ' ' + (m[2] === 'M' ? '模擬考' : m[2]) + ' 第 ' + (+m[3]) + ' 組';
    return key;
  }

  const KL = { MAX, PASS, EXEMPT, MXL, MX_NAME, PAT_LV, PH_LV, alias, slot, keyOf, getV, setV, times, evOf, step, unlock, floorOf, onRecord, paths, view, lookup, badgeText, keyFromUrl, nameOf };
  if (typeof module !== 'undefined' && module.exports) module.exports = KL;
  root.KidsLock = KL;
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  // =====================================================================
  // 瀏覽器
  // =====================================================================
  const cs = document.currentScript, BASE = cs && cs.src ? cs.src.replace(/kids-lock\.js(\?.*)?$/, '') : new URL('.', location.href).href;
  const abs = h => { try { return new URL(h, BASE).href; } catch (e) { return h; } };
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // 同一個畫面一次畫很多格：資料只讀一次（下一輪事件迴圈就重讀）
  let snapC = null;
  const rawDone = () => { try { return localStorage.getItem('kids_done') || ''; } catch (e) { return ''; } };
  function snap() {
    if (snapC && snapC.raw === rawDone()) return snapC;   // 同一輪裡 kids_done 變了（剛記一筆）就重讀
    const W = window, KD = W.KidsDone, base = KD ? KD.data() : {};
    const data = Object.assign({}, base, { zhArts: W.DATA_ZH || null, zhCatalog: base.zhCatalog && base.zhCatalog.length ? base.zhCatalog : (W.DATA_ZH_CATALOG || []), cyCatalog: base.cyCatalog || W.DATA_CY_CATALOG || null, comics: W.COMIC_CATALOG || null, gept: W.GEPT_CATALOG || null });
    const ctx = Object.assign(KD ? KD.ctx() : { done: ld('kids_done', {}) }, { comic: ld('kids_comic', {}), gept: ld('kids_gept', {}) });
    snapC = Object.assign(lookup(data, ctx), { data, ctx, raw: rawDone() });
    setTimeout(() => { snapC = null; }, 0);
    return snapC;
  }
  const fresh = () => { snapC = null; };
  // 單元狀態；path 可以自己給（同一頁有更完整的清單時）
  function state(key, path) { return snap().state(key, path); }
  // 清單上的標示：<span class="kl-b">✓1</span>／✓2 🔒（灰）；沒做回空字串
  function badge(key, path) { try { if (!slot(key)) return ''; css(); const st = state(key, path), t = badgeText(st); return t ? `<span class="kl-b${st.locked ? ' kl-lk' : ''}" title="${st.locked ? '做過 ' + st.n + ' 次，鎖住了：去挑戰下一個' : '做過 ' + st.n + ' 次'}">${esc(t)}</span>` : ''; } catch (e) { return ''; } }
  const isLocked = (key, path) => { try { return state(key, path).locked; } catch (e) { return false; } };
  const offCls = (key, path) => (isLocked(key, path) ? ' kl-off' : '');

  let cssDone = false;
  function css() {
    if (cssDone || !document.head) return; cssDone = true;
    const s = document.createElement('style');
    s.textContent = '.kl-b{display:inline-block;margin-left:6px;padding:0 .55em;border-radius:999px;background:#d3f2e1;color:#145c38;font-weight:800;font-size:.85em;line-height:1.7;white-space:nowrap;vertical-align:middle}'
      + '.kl-b.kl-lk{background:#e3e6ea;color:#4a5563}'
      + '.kl-off{filter:grayscale(1);opacity:.6}.kl-off .kl-b{opacity:1}'
      + '.kl-gate{position:fixed;inset:0;z-index:2147483000;background:rgba(240,242,245,.98);display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;overflow:auto}'
      + '.kl-card{box-sizing:border-box;width:100%;max-width:540px;margin:0 auto;background:#fff;border:3px solid #c3c9d2;border-radius:22px;padding:22px 20px;text-align:center;color:#263445;font-size:1.1rem;line-height:1.55;box-shadow:0 8px 30px rgba(0,0,0,.12)}'
      + '.kl-ic{font-size:3rem;line-height:1.2}.kl-card h2{margin:.2em 0 .35em;font-size:1.55rem;color:#263445}.kl-card p{margin:.45em 0}'
      + '.kl-what b{font-size:1.15rem}.kl-card .kl-go{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:10px 20px;margin:8px 0;font-size:1.2rem;font-weight:800;border-radius:16px;text-decoration:none;cursor:pointer}'
      + '.kl-card .kl-back{display:inline-flex;align-items:center;min-height:44px;padding:6px 14px;margin-top:6px;text-decoration:none}'
      + '.kl-sm{font-size:.92rem;color:#56616f}.kl-inline{margin:16px auto}';
    (document.head || document.documentElement).appendChild(s);
  }
  // 鎖住的卡：「這個你已經練 2 次了，去挑戰 →〔下一個更難的〕」；opts.go(next)＝同一頁換過去（不換網址，例如乘法題型、句型等級）
  function cardHtml(st, opts) {
    opts = opts || {}; const nx = st.next, b = opts.back || st.back;
    const go = !nx ? '' : opts.go ? `<button type="button" class="btn primary big kl-go" data-kl-go="${esc(nx.key)}">去挑戰 → ${esc(nx.title)}</button>`
      : `<a class="btn primary big kl-go" href="${esc(opts.local ? nx.href.replace(/^index\.html(?=#)/, '') : abs(nx.href))}" target="_top" data-kl-go="${esc(nx.key)}">去挑戰 → ${esc(nx.title)}</a>`;
    return `<div class="kl-card" role="alertdialog" aria-labelledby="kl-h" data-kl="${esc(st.key)}"><div class="kl-ic" aria-hidden="true">🔒</div><h2 id="kl-h">這個你已經練 ${st.n} 次了</h2>`
      + `<p class="kl-what"><b>${esc(st.title)}</b> <span class="kl-b kl-lk">✓${st.n} 🔒</span></p>`
      + (nx ? `<p>去挑戰更難的下一個吧！</p>${go}` : '')
      + `<p class="kl-sm">想再練這一個（例如段考前複習）？請爸爸媽媽到「家長」頁解鎖。</p>`
      + (b && !opts.noBack ? `<a class="btn kl-back" href="${esc(opts.local ? b.href.replace(/^index\.html(?=#)/, '') : abs(b.href))}" target="_top">${esc(b.label)}</a>` : '') + '</div>';
  }
  function bindGo(el, st, opts) { const g = el.querySelector('[data-kl-go]'); if (g && opts && opts.go) g.onclick = () => { close(); opts.go(st.next); }; }
  // 進頁檢查：鎖住就蓋一張全畫面的卡（下面的練習點不到）；回 true＝鎖住了
  let gateKey = null, gateOpts = null;
  function close() { const g = document.getElementById('kl-gate'); if (g) g.remove(); gateKey = null; if (document.body) document.body.style.overflow = ''; }
  function gate(key, opts) {
    let st; try { fresh(); st = state(key, opts && opts.path); } catch (e) { return false; }
    if (!st.locked) { if (gateKey) close(); return false; }
    css(); close();
    const g = document.createElement('div'); g.className = 'kl-gate'; g.id = 'kl-gate'; g.innerHTML = cardHtml(st, opts);
    (document.body || document.documentElement).appendChild(g); if (document.body) document.body.style.overflow = 'hidden';
    bindGo(g, st, opts); gateKey = key; gateOpts = opts || null;
    try { const a = g.querySelector('.kl-go'); if (a) a.focus(); } catch (e) { }
    return true;
  }
  // 別台的家長解鎖同步進來：卡片自己拿掉（只拿掉，不會在做到一半時突然蓋上來）
  function recheck() { if (!gateKey) return; fresh(); if (!state(gateKey, gateOpts && gateOpts.path).locked) close(); }
  window.addEventListener('kids-sync-updated', () => setTimeout(recheck, 50));
  window.addEventListener('kesync-data', () => setTimeout(recheck, 50));
  window.addEventListener('storage', e => { if (e.key === null || e.key === 'kids_done') setTimeout(recheck, 50); });

  function touch() { try { const S = window.KESync; if (S && S.touch) S.touch(); } catch (e) { } }
  function write(next, cur) { const SM = SMx(); if (SM.canon(next) === SM.canon(SM.normDone(cur))) return false; try { localStorage.setItem('kids_done', JSON.stringify(next)); } catch (e) { return false; } fresh(); touch(); try { window.dispatchEvent(new CustomEvent('kids-done-changed')); } catch (e) { } return true; }
  // 沒有 kids-done.js 的頁面（漫畫、英檢）記一次：呼叫的地方在寫自己的本機紀錄「之前」叫（才分得出第一次）
  function bump(key) { try { const S = snap(), cur = ld('kids_done', {}); return write(onRecord(cur, SMx().normDone(cur), 'n', key, 1, S.data, S.ctx), cur); } catch (e) { return false; } }

  // ---------- 家長頁：已上鎖單元，逐一解鎖 ----------
  function lockedList() {
    const S = snap(), n = obj(SMx().normDone(S.ctx.done).n), out = [];
    Object.keys(n).forEach(g => [...n[g]].forEach((c, i) => {
      const key = keyOf(g, i); if (!key) return;
      const st = state(key); if (st.n < MAX || (S.byKey[key] && !st.locked) || EXEMPT[key]) return;   // 這一頁沒有那條路徑的目錄：當作鎖住（解開也不會壞）
      out.push({ key, title: S.byKey[key] ? st.title : nameOf(key, S.data), n: st.n });
    }));
    return out;
  }
  function parentHtml() {
    let L = []; try { L = lockedList(); } catch (e) { }
    return `<section class="card" id="kl-parent"><h2>🔒 已上鎖單元（${L.length}）</h2><p class="muted">同一個單元做滿 2 次就會鎖住，帶孩子去挑戰更難的下一個（最後一個、每日清單指定的乘法題型不鎖）。段考前要複習可以在這裡解鎖：解鎖後算做過 1 次，再做 1 次又會鎖住；會同步到其他裝置。錯題庫、🔁 今天要複習、遊戲都不受影響。</p>`
      + (L.length ? `<ul class="list">${L.map(x => `<li><span>${esc(x.title)}</span> <span class="kl-b kl-lk">✓${x.n} 🔒</span> <button type="button" class="btn" data-kl-unlock="${esc(x.key)}">🔓 解鎖</button></li>`).join('')}</ul>` : '<p class="muted" id="kl-none">目前沒有上鎖的單元。</p>') + '</section>';
  }
  function bindParent(el, rerender) {
    css();
    (el || document).querySelectorAll('[data-kl-unlock]').forEach(b => { b.onclick = () => {
      const key = b.getAttribute('data-kl-unlock'), cur = ld('kids_done', {}), next = unlock(cur, key);
      if (!next) { alert('這個單元解鎖太多次了，沒辦法再解鎖。'); return; }
      write(next, cur); try { const S = window.KESync; if (S && S.now) S.now(); } catch (e) { }
      if (rerender) rerender();
    }; });
  }

  // 進頁就檢查（單元頁網址）；index.html 的課本單元、句型片語等級由 app.js 自己問
  function auto() {
    try {
      const bp = decodeURIComponent(new URL(BASE).pathname), p = decodeURIComponent(location.pathname);
      const key = p.indexOf(bp) === 0 ? keyFromUrl(p.slice(bp.length), location.search) : null;
      if (key) gate(key);
    } catch (e) { }
  }
  Object.assign(KL, { state, badge, isLocked, offCls, cardHtml, bindGo, gate, close, bump, parentHtml, bindParent, lockedList, auto, css, abs, _snap: snap });
  if (document.body) auto(); else document.addEventListener('DOMContentLoaded', auto);
})(typeof window !== 'undefined' ? window : globalThis);
