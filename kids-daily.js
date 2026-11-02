/* kids-daily.js — 家長頁「📅 每日學習紀錄」：每天各科幾題、答對率（2026-11-02）。要先載 syncmerge.js（格式、合併規則在那邊的 dd 區）。
   記錄：每個作答入口在「一題有結果」時呼叫 KidsDaily.rec(科, 對錯)，開放題（寫完算一題、不計答對率）傳 null。沒登入不記錄。
     一題只記一次：多步驟、答錯可重試的題（數學、挖空、背架構）記在「第一次答錯」或「一路沒錯做完」那一刻（跟錯題庫同一個判定點），不是每次按確定。
     閃卡自己判斷記不記得，不算題目。遊戲裡的題算英文。新的作答入口要接上：test/daily-stats.test.js 會擋。
   儲存：localStorage kids_daily（格式同同步文件的 dd）；裝置 id 共用 ke_sync_ctr.dev。跟著既有同步走，不新增任何對外傳送。
   舊紀錄：kids_daily 不回填。英文顯示時才從 ke_log（已同步、依 r 去重）算上線日以前的每一天；上線當天取 ke_log 和計數較大的，之後只看計數 → 不會重複算。
     其他科上線前沒有逐日題數，只從帶時間的紀錄看得出「那天有練」，顯示「有練習（題數未記錄）」，不編數字。 */
(function (G) {
  'use strict';
  const SMx = () => G.KESyncMerge || (typeof require === 'function' ? require('./syncmerge.js') : null);
  const K = 'kids_daily', START = '261103', SHOW = 14, DAY = 864e5;   // START＝上線日（台北時間 YYMMDD）
  const SUBJ = [['english', 'e', '英文'], ['math', 'm', '數學'], ['chinese', 'c', '國語'], ['social', 's', '社會'], ['science', 'n', '自然'], ['history', 'h', '歷史'], ['ai', 'a', 'AI']];
  const OPEN = 'o', CODE = {}, NAME = {};   // o＝國語開放題：加進國語題數，不進答對率分母
  SUBJ.forEach(s => { CODE[s[0]] = s[1]; NAME[s[0]] = s[2]; });

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

  // 畫面資料：rows 由新到舊，{day, n, ok, den, pct, subj:[{name,n,pct}], noted:[科名]} 或 {gap:1, from, to, pre}（pre＝上線日以前沒紀錄，不敢說沒練）
  function view(o) {
    const SM = SMx(), today = o.today, start = o.start || START, low = shift(today, 1 - SM.DD_DAYS), days = {}, ev = o.ev || {}, dayOf = o.dayOf || SM.ddDay;
    const sum = SM.ddSum(o.dd);
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
        const c = D[s[1]] || [0, 0], op = s[1] === 'c' && D[OPEN] ? D[OPEN][0] : 0, t = c[0] + op;
        if (t > 0) { subj.push({ name: s[2], n: t, pct: c[0] ? Math.round(c[1] / c[0] * 100) : null }); n += t; ok += c[1]; den += c[0]; }
        else if (E[s[0]]) noted.push(s[2]);
      });
      if (n || noted.length) { rows.push({ day: d, n, ok, den, pct: den ? Math.round(ok / den * 100) : null, subj, noted }); continue; }
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
      + (r.noted.length ? `<div class="dl-s dl-note">${r.noted.join('、')} 有練習（題數未記錄）</div>` : '') + '</div>';
  }
  // openMore＝使用者展開過（重畫時留著）
  function cardHtml(v, today, openMore) {
    const cut = shift(today, 1 - SHOW), newest = r => r.gap ? r.to : r.day, recent = v.rows.filter(r => newest(r) >= cut), older = v.rows.filter(r => newest(r) < cut);
    const list = rs => rs.map(r => rowHtml(r, today)).join('');
    return `<section class="card" id="dailyCard"><h2>📅 每日學習紀錄</h2>`
      + (v.rows.length ? list(recent) : '<p class="muted">還沒有紀錄。登入後開始作答，這裡就會出現每天各科的題數。</p>')
      + (older.length ? `<details id="dlMore"${openMore ? ' open' : ''}><summary>展開全部（最多保留 90 天）</summary>${list(older)}</details>` : '')
      + `<p class="muted dl-foot">英文可以回算到舊紀錄；其他科從 ${fmtD(START)} 開始統計，更早只看得出有沒有練習。遊戲裡的英文題算英文；閃卡不算題目；國語「想一想」算題數、不算答對率。日期是台北時間。</p></section>`;
  }

  const core = { evidence, view, cardHtml, shift, START };
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
      return cardHtml(view({ dd: ld(K, {}), log: ld('ke_log', []), ev, today }), today, openMore);
    } catch (e) { return ''; }
  }
  function bind(root) { const d = root && root.querySelector('#dlMore'); if (d) d.ontoggle = () => { openMore = d.open; }; }
  G.KidsDaily = { rec, html, bind, _core: core };
})(typeof window !== 'undefined' ? window : globalThis);
