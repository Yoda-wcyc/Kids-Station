/* kids-daily.js — 家長頁「📅 每日學習紀錄」：每天各科幾題、答對率（2026-11-02）。要先載 syncmerge.js（格式、合併規則在那邊的 dd 區）。
   記錄：每個作答入口在「一題有結果」時呼叫 KidsDaily.rec(科, 對錯)，開放題（寫完算一題、不計答對率）傳 null。沒登入不記錄。
     一題只記一次：多步驟、答錯可重試的題（數學、挖空、背架構）記在「第一次答錯」或「一路沒錯做完」那一刻（跟錯題庫同一個判定點），不是每次按確定。
     閃卡自己判斷記不記得，不算題目。遊戲裡的題算英文。新的作答入口要接上：test/daily-stats.test.js 會擋。
   儲存：localStorage kids_daily（格式同同步文件的 dd）；裝置 id 共用 ke_sync_ctr.dev。跟著既有同步走，不新增任何對外傳送。
   舊紀錄：kids_daily 不回填。英文顯示時才從 ke_log（已同步、依 r 去重）算上線日以前的每一天；上線當天取 ke_log 和計數較大的，之後只看計數 → 不會重複算。
     其他科上線前沒有逐日題數，只從帶時間的紀錄看得出「那天有練」，顯示「有練習（題數未記錄）」，不編數字。
   每日進度清單（2026-11-03）：英文 60、數學 30、閱讀 1 篇（kids_daily_goal 可改，有生效日，過去的判定不變）。題數來自上面的每日統計（跨裝置加總）；
     數學的乘法快算記在代碼 x（KidsDaily.rec('mathx', …)），3 題折 1 題：m＋⌊x/3⌋（各裝置先加總再折算）。閱讀不另外計數：kids_done 的 zh、cy 裡的 cyr*，第一次完成的時間落在當天才算（已同步、取最早，重讀、兩台都做都不會多算）。 */
(function (G) {
  'use strict';
  const SMx = () => G.KESyncMerge || (typeof require === 'function' ? require('./syncmerge.js') : null);
  const K = 'kids_daily', START = '261103', SHOW = 14, DAY = 864e5;   // START＝上線日（台北時間 YYMMDD）
  const SUBJ = [['english', 'e', '英文'], ['math', 'm', '數學'], ['chinese', 'c', '國語'], ['social', 's', '社會'], ['science', 'n', '自然'], ['history', 'h', '歷史'], ['geo', 'g', '地理'], ['ai', 'a', 'AI']];   // geo＝🌍 地理（2026-11-08，geo/geo.js）
  const OPEN = 'o', MX = 'x', CODE = { mathx: MX }, NAME = {};   // o＝國語開放題：加進國語題數，不進答對率分母；x＝乘法快算：加進數學題數，清單 3 題折 1 題
  SUBJ.forEach(s => { CODE[s[0]] = s[1]; NAME[s[0]] = s[2]; });
  const GOAL_DEF = [60, 30, 1], MX_RATE = 3, K_GOAL = 'kids_daily_goal', K_PARTY = 'kids_daily_party';
  const HREF = { english: '#en', math: '#s/math', reading: '#s/chinese/reading' };

  // ---------- 純函式 ----------
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  const toMs = d => Date.UTC(2000 + +d.slice(0, 2), +d.slice(2, 4) - 1, +d.slice(4, 6));
  const shift = (d, n) => new Date(toMs(d) + n * DAY).toISOString().slice(2, 10).replace(/-/g, '');
  const fmtD = d => d.slice(2, 4) + '/' + d.slice(4, 6);
  const fmtW = d => fmtD(d) + '（' + '日一二三四五六'[new Date(toMs(d)).getUTCDay()] + '）';

  // 「那天有練」的證據：kids_coin_seen（這台）、kids_mm_exam、kids_zh_*（這台），錯題、過關、完成紀錄（有同步）。src 缺什麼都可以
  function evidence(src, dayOf) {
    const out = {}, s = obj(src), add = (k, d) => { (out[d] = out[d] || {})[k] = 1; }, mark = (k, t) => { if (+t > 0) add(k, dayOf(+t)); };
    Object.keys(obj(s.seen)).forEach(k => (obj(s.seen[k]).d || []).forEach(d => { if (typeof d === 'string') add(k, d.slice(2).replace(/-/g, '')); }));
    Object.keys(obj(s.mk)).forEach(k => Object.values(obj(s.mk[k])).forEach(e => { mark(k, obj(e).t); mark(k, obj(e).u); }));
    Object.values(obj(s.keMk)).forEach(e => { mark('english', obj(e).t); mark('english', obj(e).u); });
    Object.keys(obj(s.mm)).forEach(key => { if (key.charAt(0) === '_') return; const k = key.split(':')[0], p = obj(s.mm[key]); mark(k, p.lastPassAt); Object.values(obj(p.passedAt)).forEach(t => mark(k, t)); });
    const dn = obj(s.done); [['zh', 'chinese'], ['cy', 'chinese'], ['bal', 'math'], ['ai', 'ai']].forEach(x => Object.values(obj(dn[x[0]])).forEach(t => mark(x[1], t)));
    const ex = obj(s.exam); Object.keys(ex).forEach(key => { if (key === '_seen') Object.keys(obj(ex._seen)).forEach(k => Object.values(obj(ex._seen[k])).forEach(t => mark(k, t))); else mark(key.split(':')[0], obj(ex[key]).at); });
    [s.zhRead, s.zhIdiom].forEach(z => Object.values(obj(z)).forEach(e => mark('chinese', obj(e).at)));
    return out;
  }

  // ---------- 每日進度清單 ----------
  // 這一天的目標：生效日 ≤ 這一天的最新一筆；都沒有＝預設
  function goalOn(dg, day) { const d = obj(dg), k = Object.keys(d).filter(x => x <= day).sort().pop(); if (!k) return GOAL_DEF.slice(); return String(d[k]).split(',').slice(0, 3).map(Number); }
  function setGoal(dg, day, g) { const d = Object.assign({}, obj(dg)), seq = d[day] ? (+String(d[day]).split(',')[3] || 0) + 1 : 0; d[day] = [g[0], g[1], g[2], Math.min(seq, 99)].join(','); return d; }
  // 每天第一次完成幾篇閱讀（國語素養閱讀 zh、成語素養閱讀 cyr）
  function readDays(done, dayOf) {
    const out = {}, d = obj(done), add = t => { if (+t > 0) { const k = dayOf(+t); out[k] = (out[k] || 0) + 1; } };
    Object.values(obj(d.zh)).forEach(add);
    Object.keys(obj(d.cy)).forEach(id => { if (/^cyr\d+$/.test(id)) add(d.cy[id]); });
    return out;
  }
  // 一天的清單：D＝那天各科 {代碼:[n,ok]}（各裝置已加總），reads＝那天完成幾篇，goal＝那天的目標
  function checkDay(D, reads, goal) {
    D = obj(D);
    const e = (D.e || [0])[0], m = (D.m || [0])[0], x = (D[MX] || [0])[0];
    const row = (key, k, name, n, g, unit, extra) => Object.assign({ key, k, name, n, goal: g, unit, left: Math.max(0, g - n), done: n >= g, over: n > g, href: HREF[key === 'r' ? 'reading' : k] }, extra);
    const rows = [row('e', 'english', '英文', e, goal[0], '題'), row('m', 'math', '數學', m + Math.floor(x / MX_RATE), goal[1], '題', { raw: m + x, mx: x }), row('r', 'chinese', '閱讀', +reads || 0, goal[2], '篇')];
    const doneN = rows.filter(r => r.done).length;
    return { rows, doneN, total: rows.length, allDone: doneN === rows.length };
  }
  // 家長頁一行：✓ 全部完成，或「英文 45/60、數學 ✓、閱讀 未完成」
  function checkText(c) {
    if (c.allDone) return '✓ 全部完成';
    return c.rows.map(r => r.name + ' ' + (r.done ? '✓' : r.key === 'r' && !r.n ? '未完成' : r.n + '/' + r.goal)).join('、');
  }
  // 慶祝一天只跳一次（這台）：stored＝上次跳的那天
  const partyDue = (stored, day, allDone) => !!allDone && stored !== day;

  // 畫面資料：rows 由新到舊，{day, n, ok, den, pct, subj:[{name,n,pct}], noted:[科名]} 或 {gap:1, from, to, pre}（pre＝上線日以前沒紀錄，不敢說沒練）
  function view(o) {
    const SM = SMx(), today = o.today, start = o.start || START, low = shift(today, 1 - SM.DD_DAYS), days = {}, ev = o.ev || {}, dayOf = o.dayOf || SM.ddDay;
    const sum = SM.ddSum(o.dd), reads = readDays(o.done, dayOf);
    Object.keys(sum).forEach(d => { if (d >= low && d <= today) days[d] = sum[d]; });
    const lg = {};
    (Array.isArray(o.log) ? o.log : []).forEach(e => { if (!e || !isFinite(+e.t)) return; const d = dayOf(+e.t); if (d < low || d > start || d > today) return; const g = lg[d] || (lg[d] = [0, 0]); g[0]++; if (e.ok) g[1]++; });
    Object.keys(lg).forEach(d => { const D = days[d] = days[d] || {}, cur = D.e || [0, 0]; if (d < start || lg[d][0] > cur[0]) D.e = lg[d]; });
    const seenDays = Object.keys(ev).filter(d => d >= low && d <= today && d <= start), all = Object.keys(days).concat(seenDays).sort();
    const rows = [];
    if (!all.length) return { rows };
    for (let d = today; d >= all[0]; d = shift(d, -1)) {
      const D = days[d] || {}, subj = [], noted = [], E = d <= start ? obj(ev[d]) : {};
      let n = 0, ok = 0, den = 0;
      SUBJ.forEach(s => {
        const c0 = D[s[1]] || [0, 0], mx = s[1] === 'm' && D[MX] ? D[MX] : [0, 0], c = [c0[0] + mx[0], c0[1] + mx[1]], op = s[1] === 'c' && D[OPEN] ? D[OPEN][0] : 0, t = c[0] + op;
        if (t > 0) { subj.push({ k: s[0], name: s[2], n: t, pct: c[0] ? Math.round(c[1] / c[0] * 100) : null }); n += t; ok += c[1]; den += c[0]; }
        else if (E[s[0]]) noted.push(s[2]);
      });
      if (n || noted.length) { rows.push({ day: d, n, ok, den, pct: den ? Math.round(ok / den * 100) : null, subj, noted, check: d >= start ? checkText(checkDay(D, reads[d], goalOn(o.dg, d))) : '' }); continue; }
      const pre = d < start ? 1 : 0, last = rows[rows.length - 1];
      if (last && last.gap && last.pre === pre) last.from = d; else rows.push({ gap: 1, from: d, to: d, pre });
    }
    return { rows };
  }
  function rowHtml(r, today) {
    if (r.gap) {
      const when = r.from === r.to ? fmtD(r.to) : fmtD(r.from) + '～' + fmtD(r.to);
      return `<div class="dl-gap">${when} ${r.pre ? '沒有紀錄' : r.from === today ? '今天還沒練習' : '沒有練習'}</div>`;
    }
    const items = r.subj.map(s => `<span>${s.name} ${s.n} 題${s.pct == null ? '' : ` <small>${s.pct}%</small>`}</span>`).join(' ・ ');
    return `<div class="dl-day" data-day="${r.day}"><div class="dl-h"><b>${fmtW(r.day)}</b>${r.n ? `<span>共 ${r.n} 題</span>` : ''}${r.pct == null ? '' : `<span>答對 ${r.pct}%</span>`}</div>`
      + (items ? `<div class="dl-s">${items}</div>` : '')
      + (r.noted.length ? `<div class="dl-s dl-note">${r.noted.join('、')} 有練習（題數未記錄）</div>` : '')
      + (r.check ? `<div class="dl-check${r.check.charAt(0) === '✓' ? ' ok' : ''}">今日清單：${r.check}</div>` : '') + '</div>';
  }
  // openMore＝使用者展開過（重畫時留著）
  function cardHtml(v, today, openMore, goal) {
    const cut = shift(today, 1 - SHOW), newest = r => r.gap ? r.to : r.day, recent = v.rows.filter(r => newest(r) >= cut), older = v.rows.filter(r => newest(r) < cut);
    const list = rs => rs.map(r => rowHtml(r, today)).join('');
    return `<section class="card" id="dailyCard"><h2>📅 每日學習紀錄</h2>`
      + (v.rows.length ? list(recent) : '<p class="muted">還沒有紀錄。登入後開始作答，這裡就會出現每天各科的題數。</p>')
      + (older.length ? `<details id="dlMore"${openMore ? ' open' : ''}><summary>展開全部（最多保留 90 天）</summary>${list(older)}</details>` : '')
      + `<p class="muted dl-foot">英文可以回算到舊紀錄；其他科從 ${fmtD(START)} 開始統計，更早只看得出有沒有練習。遊戲裡的英文題算英文；閃卡不算題目；國語「想一想」算題數、不算答對率。日期是台北時間。</p>`
      + (goal ? goalForm(goal) : '') + '</section>';
  }

  function goalForm(g) {
    const f = (id, name, v, unit, max) => `<label class="dg-f">${name}<input id="${id}" type="number" inputmode="numeric" min="1" max="${max}" value="${v}">${unit}</label>`;
    return `<details class="dg" id="dgBox"><summary>🎯 改每日目標（現在：英文 ${g[0]} 題、數學 ${g[1]} 題、閱讀 ${g[2]} 篇）</summary>`
      + `<div class="dg-row">${f('dgE', '英文', g[0], '題', 999)}${f('dgM', '數學', g[1], '題', 999)}${f('dgR', '閱讀', g[2], '篇', 20)}<button type="button" class="btn primary" id="dgSave">儲存</button></div>`
      + `<p class="muted dl-foot" id="dgMsg">從今天起生效，以前的判定不會變；會同步到其他裝置。假日和平日相同。乘法快算 3 題算 1 題。</p></details>`;
  }
  function validGoal(a) { const g = a.map(x => Math.floor(+x)); return g[0] >= 1 && g[0] <= 999 && g[1] >= 1 && g[1] <= 999 && g[2] >= 1 && g[2] <= 20 ? g : null; }

  const core = { evidence, view, cardHtml, shift, START, GOAL_DEF, goalOn, setGoal, readDays, checkDay, checkText, partyDue, validGoal };
  if (typeof module !== 'undefined' && module.exports) module.exports = { _core: core };
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // ---------- 瀏覽器 ----------
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  // 遊戲、漫畫頁沒載 kids-auth.js：照它的規則看票有沒有過期（只讀不驗簽）
  function loggedIn() {
    const A = window.KidsAuth;
    if (A) return !!(A.configured() && A.isLoggedIn());
    const t = localStorage.getItem('kids_jwt'); if (!t) return false;
    let e = +obj(ld('kids_member', null)).exp;
    if (!e) try { let p = t.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'); while (p.length % 4) p += '='; e = +JSON.parse(atob(p)).exp || 0; } catch (x) { e = 0; }
    return !e || e > Date.now() / 1000;
  }
  // 裝置 id 跟星星計數同一個（sync.js ctrMeta）
  function devId() {
    const m = ld('ke_sync_ctr', null);
    if (m && typeof m.dev === 'string' && m.dev) return m.dev;
    const dev = 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    localStorage.setItem('ke_sync_ctr', JSON.stringify(Object.assign(obj(m), { dev, ctr: obj(obj(m).ctr) })));
    return dev;
  }
  function rec(subj, ok) {
    try {
      const SM = window.KESyncMerge, code = ok == null ? OPEN : CODE[subj];
      if (!SM || !code || !loggedIn()) return;
      localStorage.setItem(K, JSON.stringify(SM.ddAdd(ld(K, {}), devId(), Date.now(), code, ok !== false)));
      if (window.KESync && KESync.touch) KESync.touch();
    } catch (e) { /* 統計壞掉也不能讓練習頁壞掉 */ }
  }
  let openMore = false;
  function html() {
    try {
      const SM = window.KESyncMerge, now = Date.now(), today = SM.ddDay(now);
      const ev = evidence({ seen: ld('kids_coin_seen', {}), mk: ld('kids_mistakes', {}), keMk: ld('ke_mistakes', {}), mm: ld('kids_mm_progress', {}), done: ld('kids_done', {}), exam: ld('kids_mm_exam', {}), zhRead: ld('kids_zh_reading', {}), zhIdiom: ld('kids_zh_idioms', {}) }, SM.ddDay);
      const dg = ld(K_GOAL, {});
      return cardHtml(view({ dd: ld(K, {}), log: ld('ke_log', []), ev, today, dg, done: ld('kids_done', {}) }), today, openMore, goalOn(dg, today));
    } catch (e) { return ''; }
  }
  function bind(root, redraw) {
    if (!root) return;
    const d = root.querySelector('#dlMore'); if (d) d.ontoggle = () => { openMore = d.open; };
    const b = root.querySelector('#dgSave');
    if (b) b.onclick = () => {
      const g = validGoal(['dgE', 'dgM', 'dgR'].map(id => root.querySelector('#' + id).value)), m = root.querySelector('#dgMsg');
      if (!g) { m.textContent = '英文、數學要 1～999，閱讀要 1～20。'; return; }
      saveGoal(g); if (redraw) redraw();
    };
  }
  function saveGoal(g) {
    const SM = window.KESyncMerge;
    try { localStorage.setItem(K_GOAL, JSON.stringify(SM.normDg(setGoal(ld(K_GOAL, {}), SM.ddDay(Date.now()), g)))); if (window.KESync && KESync.touch) KESync.touch(); } catch (e) { }
  }
  // 今天的清單（首頁、小助理用）：rows、幾項完成、今天做了哪些、各科題數
  function today() {
    const SM = window.KESyncMerge, now = Date.now(), day = SM.ddDay(now), done = ld('kids_done', {}), dg = ld(K_GOAL, {});
    const log = day <= START ? ld('ke_log', []) : [];   // 上線當天英文取 ke_log 和計數較大的；之後只看計數
    const row = view({ dd: ld(K, {}), log, ev: {}, today: day, done, dg }).rows.find(r => r.day === day) || { n: 0, subj: [], pct: null };
    const D = obj(SM.ddSum(ld(K, {}))[day]);
    if (log.length) { let n = 0, ok = 0; log.forEach(e => { if (e && SM.ddDay(+e.t) === day) { n++; if (e.ok) ok++; } }); if (n > (D.e || [0])[0]) D.e = [n, ok]; }
    const c = checkDay(D, readDays(done, SM.ddDay)[day], goalOn(dg, day));
    return Object.assign(c, { day, label: fmtD(day) + ' 週' + '日一二三四五六'[new Date(toMs(day)).getUTCDay()], next: c.rows.find(r => !r.done) || null, made: row.subj, n: row.n, pct: row.pct });
  }
  // 全部完成時：今天這台還沒跳過就回 true（只回一次）
  function party(day, allDone) { let s = null; try { s = localStorage.getItem(K_PARTY); } catch (e) { } if (!partyDue(s, day, allDone)) return false; try { localStorage.setItem(K_PARTY, day); } catch (e) { } return true; }
  G.KidsDaily = { rec, html, bind, today, party, saveGoal, _core: core };
})(typeof window !== 'undefined' ? window : globalThis);
