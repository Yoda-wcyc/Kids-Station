/* kids-daily.js — 家長頁「📅 每日學習紀錄」：每天各科幾題、答對率（2026-11-02）。要先載 syncmerge.js（格式、合併規則在那邊的 dd 區）。
   記錄：每個作答入口在「一題有結果」時呼叫 KidsDaily.rec(科, 對錯)，開放題（寫完算一題、不計答對率）傳 null。沒登入不記錄。
     一題只記一次：多步驟、答錯可重試的題（數學、挖空、背架構）記在「第一次答錯」或「一路沒錯做完」那一刻（跟錯題庫同一個判定點），不是每次按確定。
     閃卡自己判斷記不記得，不算題目。遊戲裡的題算英文。新的作答入口要接上：test/daily-stats.test.js 會擋。
   儲存：localStorage kids_daily（格式同同步文件的 dd）；裝置 id 共用 ke_sync_ctr.dev。跟著既有同步走，不新增任何對外傳送。
   舊紀錄：kids_daily 不回填。英文顯示時才從 ke_log（已同步、依 r 去重）算上線日以前的每一天；上線當天取 ke_log 和計數較大的，之後只看計數 → 不會重複算。
     其他科上線前沒有逐日題數，只從帶時間的紀錄看得出「那天有練」，顯示「有練習（題數未記錄）」，不編數字。
   每日進度清單（2026-11-03）：英文 60、數學 30、閱讀 1 篇（kids_daily_goal 可改，有生效日，過去的判定不變）。題數來自上面的每日統計（跨裝置加總）；
     數學的乘法快算記在代碼 x（KidsDaily.rec('mathx', …)），3 題折 1 題：m＋⌊x/3⌋（各裝置先加總再折算）。閱讀不另外計數：kids_done 的 zh、cy 裡的 cyr*，第一次完成的時間落在當天才算（已同步、取最早，重讀、兩台都做都不會多算）。
   2026-11-09 起（GOAL_V2，家長定）：五項——英文 100（其中句型 ≥30、片語 ≥10）、數學 30（＝乘法快算 ≥20 題＋異分母分數加減 ≥10 題）、
     閱讀 2 篇（成語故事 cy001～cy100 讀完也算一篇）、歷史 1 話（世界史漫畫做完該話測驗）、地理 1 組（地理單元練習一組或一次測驗；錯題重練、開場漫畫不算）。
     子目標：rec(科, ok, kind) 除了科目代碼再多記一個小分類代碼（只記題數不記答錯，省位元組）：英文 'sentence'→j、'phrase'→p（分類規則 engine.js KE.dailyKind）；
       數學 'mul'→u（math/multiply.html，兩位數×兩位數以上才記，MX.daily）、'fracadd'→f（math/fracadd.html）。
     話／組：finish('comic')→v（comics/comic.js 測驗做完）、finish('geo')→w（geo/geo.js 一組／一次測驗做完）。
     英文：總題數看 e（句型、片語題也算）；數學：有設子目標時清單只認 u＋f（單元練習、錯題、紙本、年級題照樣記 m、給學習幣，但不算清單）；子目標都設 0＝照舊看全部數學題。
     列要 done：總數到了＋每個子目標都到。目標 0 的項目不列（歷史、地理可以關掉）。乘法快算的舊代碼 x（3 題折 1）11/09 起不再記，舊日子照舊算。
     目標 dg 新格式「英文,數學,閱讀,序號,句型,片語,乘法,異分母,歷史,地理」（子目標 0～99、歷史地理 0～9）；11/09 前存的舊格式（4 欄）從 11/09 起：
       英文還是 60、閱讀還是 1（＝舊預設、家長沒改過）就換新預設，改過的保留；子目標用預設（不超過該科目標）；歷史、地理 1。過去的日子用當天生效的目標判，改目標不追溯。 */
(function (G) {
  'use strict';
  const SMx = () => G.KESyncMerge || (typeof require === 'function' ? require('./syncmerge.js') : null);
  const K = 'kids_daily', START = '261103', SHOW = 14, DAY = 864e5;   // START＝上線日（台北時間 YYMMDD）
  const SUBJ = [['english', 'e', '英文'], ['math', 'm', '數學'], ['chinese', 'c', '國語'], ['social', 's', '社會'], ['science', 'n', '自然'], ['history', 'h', '歷史'], ['geo', 'g', '地理'], ['ai', 'a', 'AI']];   // geo＝🌍 地理（2026-11-08，geo/geo.js）
  const OPEN = 'o', MX = 'x', CODE = { mathx: MX }, NAME = {};   // o＝國語開放題：加進國語題數，不進答對率分母；x＝舊的乘法快算（11/08 以前）：加進數學題數，清單 3 題折 1 題
  SUBJ.forEach(s => { CODE[s[0]] = s[1]; NAME[s[0]] = s[2]; });
  // 目標 [英文,數學,閱讀,句型,片語,乘法,異分母加減,歷史話,地理組]
  const GOAL_DEF = [100, 30, 2, 30, 10, 20, 10, 1, 1], GOAL_OLD = [60, 30, 1, 0, 0, 0, 0, 0, 0], GOAL_V2 = '261109', MX_RATE = 3, K_GOAL = 'kids_daily_goal', K_PARTY = 'kids_daily_party';
  const HREF = { english: 'index.html#en', math: 'index.html#s/math', reading: 'index.html#s/chinese/reading', idioms: 'index.html#s/chinese/idioms', sentence: 'index.html#learn/patterns', phrase: 'index.html#learn/phrases', mul: 'index.html#s/math/multiply', fracadd: 'index.html#s/math/fracadd', history: 'comics/index.html', geo: 'index.html#s/geo' };   // 首頁上 assistant-ui link() 會拿掉 index.html；小助理全頁也點得到
  const SUBK = { sentence: 'j', phrase: 'p', mul: 'u', fracadd: 'f' }, SUBN = { sentence: '句型', phrase: '片語', mul: '乘法', fracadd: '異分母加減' }, SUBOF = { english: ['sentence', 'phrase'], math: ['mul', 'fracadd'] };
  const FIN = { comic: 'v', geo: 'w' };   // finish(kind) 記的代碼：歷史一話、地理一組

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
  // 這一天的目標（GOAL_DEF 的順序）：生效日 ≤ 這一天的最新一筆；都沒有＝預設（GOAL_V2 以前是舊預設，過去的判定不變）
  const subDef = (tot, a, b) => [Math.min(a, tot), Math.min(b, Math.max(0, tot - a))];   // 子目標預設，加起來不超過該科目標
  function goalOn(dg, day) {
    const d = obj(dg), k = Object.keys(d).filter(x => x <= day).sort().pop();
    if (!k) return (day < GOAL_V2 ? GOAL_OLD : GOAL_DEF).slice();
    const a = String(d[k]).split(',').map(Number);
    if (a.length >= 10) return [a[0], a[1], a[2]].concat(a.slice(4, 10));
    if (day < GOAL_V2) return [a[0], a[1], a[2], 0, 0, 0, 0, 0, 0];
    const e = a[0] === GOAL_OLD[0] ? GOAL_DEF[0] : a[0], m = a[1];   // 舊格式：還是舊預設＝家長沒改過 → 新預設（數學新舊預設都是 30）
    return [e, m, a[2] === GOAL_OLD[2] ? GOAL_DEF[2] : a[2]].concat(subDef(e, GOAL_DEF[3], GOAL_DEF[4]), subDef(m, GOAL_DEF[5], GOAL_DEF[6]), GOAL_DEF.slice(7));
  }
  function setGoal(dg, day, g) { const d = Object.assign({}, obj(dg)), seq = d[day] ? (+String(d[day]).split(',')[3] || 0) + 1 : 0; d[day] = [g[0], g[1], g[2], Math.min(seq, 99)].concat([3, 4, 5, 6, 7, 8].map(i => g[i] || 0)).join(','); return d; }
  // 每天第一次完成幾篇閱讀（國語素養閱讀 zh、成語故事 cy001～、成語素養閱讀 cyr；單元測驗 cyu、總測驗不算）
  function readDays(done, dayOf) {
    const out = {}, d = obj(done), add = t => { if (+t > 0) { const k = dayOf(+t); out[k] = (out[k] || 0) + 1; } };
    Object.values(obj(d.zh)).forEach(add);
    Object.keys(obj(d.cy)).forEach(id => { if (/^cy(r\d+|\d{3})$/.test(id)) add(d.cy[id]); });
    return out;
  }
  // 地理「下一組」：照單元順序，第一個還沒做過的練習組（p1～p3）或測驗；都做過就第一個沒過關（< 80）的；全過＝地理首頁
  function nextGeo(geo, units) {
    const g = obj(geo), sets = [];
    (units || []).forEach(u => { [1, 2, 3].forEach(i => sets.push([u[0], 'p' + i, 'prac'])); sets.push([u[0], 't', 'exam']); });
    const s = sets.find(x => g[x[0] + x[1]] == null) || sets.find(x => +g[x[0] + x[1]] < 80);
    return s ? `geo/unit.html?u=${s[0]}&tab=${s[2]}` : HREF.geo;
  }
  // 歷史「下一話」：comic.js 存的 kids_comic.next；沒看過任何一話＝第一話；全部看過（next 是空的）＝漫畫目錄
  const nextComic = c => { c = obj(c); return c.next ? `comics/${c.next}.html` : Object.keys(obj(c.seen)).length ? HREF.history : 'comics/v1e1.html'; };
  // 一天的清單：D＝那天各科 {代碼:[n,ok]}（各裝置已加總），reads＝那天完成幾篇，goal＝那天的目標
  function checkDay(D, reads, goal) {
    D = obj(D);
    const c = k => (D[k] || [0])[0], e = c('e'), m = c('m'), x = c(MX);
    const row = (key, k, name, n, g, unit, extra) => Object.assign({ key, k, name, n, goal: g, unit, left: Math.max(0, g - n), done: n >= g, over: n > g, href: HREF[key === 'r' ? 'reading' : k] }, extra);
    // 子目標（目標 0＝不設）：每個都到、總數也到才算這一列完成；沒到的那項當這一列的入口
    const withSubs = (r, gs) => {
      const subs = SUBOF[r.k].map((s, i) => ({ key: s, name: SUBN[s], n: c(SUBK[s]), goal: gs[i] || 0, href: HREF[s] })).filter(s => s.goal > 0)
        .map(s => Object.assign(s, { left: Math.max(0, s.goal - s.n), done: s.n >= s.goal }));
      const subLeft = subs.reduce((t, s) => t + s.left, 0), miss = subs.find(s => !s.done);
      return Object.assign(r, { subs }, miss ? { done: false, left: Math.max(r.left, subLeft), subLeft, href: miss.href } : {});
    };
    const en = withSubs(row('e', 'english', '英文', e, goal[0], '題'), [goal[3], goal[4]]);
    const msub = goal[5] > 0 || goal[6] > 0;   // 有數學子目標：清單只認乘法快算（兩位×兩位）＋異分母加減
    const ma = msub ? withSubs(row('m', 'math', '數學', c('u') + c('f'), goal[1], '題'), [goal[5], goal[6]]) : row('m', 'math', '數學', m + Math.floor(x / MX_RATE), goal[1], '題', { raw: m + x, mx: x });
    if (msub && !ma.done && !ma.subLeft && ma.subs.length) ma.href = ma.subs[0].href;   // 子目標都到了、總數還不夠：一樣只能去那兩頁
    const rows = [en, ma, row('r', 'chinese', '閱讀', +reads || 0, goal[2], '篇', { alt: HREF.idioms }), row('h', 'history', '歷史', c(FIN.comic), goal[7] || 0, '話'), row('g', 'geo', '地理', c(FIN.geo), goal[8] || 0, '組')].filter(r => r.goal > 0);
    const doneN = rows.filter(r => r.done).length;
    return { rows, doneN, total: rows.length, allDone: doneN === rows.length };
  }
  // 家長頁一行：✓ 全部完成 5/5，或「完成 2/5 項：英文 72/100（句型 25/30、片語 10/10 ✓）、數學 ✓、閱讀 未完成、歷史 0/1、地理 —」（— ＝那天的清單沒有這一項）
  const ALL = [['e', '英文'], ['m', '數學'], ['r', '閱讀'], ['h', '歷史'], ['g', '地理']];
  function checkText(c) {
    const sub = r => (r.subs || []).map(s => s.name + ' ' + s.n + '/' + s.goal + (s.done ? ' ✓' : '')).join('、');
    const item = r => r.name + ' ' + (r.done ? '✓' : r.key === 'r' && !r.n ? '未完成' : r.n + '/' + r.goal) + (!r.done && sub(r) ? '（' + sub(r) + '）' : '');
    const by = {}; c.rows.forEach(r => { by[r.key] = r; });
    const head = c.allDone ? '✓ 全部完成 ' + c.doneN + '/' + c.total : '完成 ' + c.doneN + '/' + c.total + ' 項';
    return head + '：' + ALL.map(a => by[a[0]] ? item(by[a[0]]) : a[1] + ' —').join('、');
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
    const f = (id, name, v, unit, min, max) => `<label class="dg-f">${name}<input id="${id}" type="number" inputmode="numeric" min="${min}" max="${max}" value="${v}">${unit}</label>`;
    return `<details class="dg" id="dgBox"><summary>🎯 改每日目標（現在：英文 ${g[0]} 題（句型 ${g[3]}、片語 ${g[4]}）、數學 ${g[1]} 題（乘法 ${g[5]}、異分母加減 ${g[6]}）、閱讀 ${g[2]} 篇、歷史 ${g[7]} 話、地理 ${g[8]} 組）</summary>`
      + `<div class="dg-row">${f('dgE', '英文', g[0], '題', 1, 999)}${f('dgJ', '其中句型', g[3], '題', 0, 99)}${f('dgP', '其中片語', g[4], '題', 0, 99)}</div>`
      + `<div class="dg-row">${f('dgM', '數學', g[1], '題', 1, 999)}${f('dgU', '其中乘法', g[5], '題', 0, 99)}${f('dgF', '其中異分母加減', g[6], '題', 0, 99)}</div>`
      + `<div class="dg-row">${f('dgR', '閱讀', g[2], '篇', 1, 20)}${f('dgH', '歷史漫畫', g[7], '話', 0, 9)}${f('dgG', '地理', g[8], '組', 0, 9)}<button type="button" class="btn primary" id="dgSave">儲存</button></div>`
      + `<p class="muted dl-foot" id="dgMsg">從今天起生效，以前的判定不會變；會同步到其他裝置。假日和平日相同。「其中…」的題也算進那一科的題數（填 0＝不設）。數學有設「其中」時，清單只算乘法快算（兩位數×兩位數以上，1 題算 1 題）和異分母分數加減，別的數學題照樣練、照樣記在上面的紀錄，但不算清單。閱讀文章、成語故事讀完一篇都算 1 篇；歷史＝看完一話漫畫並做完測驗；地理＝做完一組練習或一次測驗。歷史、地理填 0＝清單不列。</p></details>`;
  }
  // GOAL_DEF 的順序；「其中」加起來不能超過那一科
  const GOAL_IDS = ['dgE', 'dgM', 'dgR', 'dgJ', 'dgP', 'dgU', 'dgF', 'dgH', 'dgG'];
  function validGoal(a) {
    const g = a.map(x => Math.floor(+x)), inR = (v, lo, hi) => v >= lo && v <= hi;
    return a.length === 9 && inR(g[0], 1, 999) && inR(g[1], 1, 999) && inR(g[2], 1, 20) && [3, 4, 5, 6].every(i => inR(g[i], 0, 99)) && inR(g[7], 0, 9) && inR(g[8], 0, 9) && g[3] + g[4] <= g[0] && g[5] + g[6] <= g[1] ? g : null;
  }

  const core = { evidence, view, cardHtml, shift, START, GOAL_DEF, GOAL_V2, goalOn, setGoal, readDays, checkDay, checkText, partyDue, validGoal, nextGeo, nextComic };
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
  // kind：英文 'sentence'（句型）／'phrase'（片語）、數學 'mul'（乘法快算兩位×兩位）／'fracadd'（異分母加減），其他不傳
  function rec(subj, ok, kind) {
    try {
      const SM = window.KESyncMerge, code = ok == null ? OPEN : CODE[subj], sub = (SUBOF[subj] || []).indexOf(kind) >= 0 && SUBK[kind];
      if (!SM || !code || !loggedIn()) return;
      const dev = devId(), t = Date.now(), d = SM.ddAdd(ld(K, {}), dev, t, code, ok !== false);
      localStorage.setItem(K, JSON.stringify(sub ? SM.ddAdd(d, dev, t, sub, true) : d));
      if (window.KESync && KESync.touch) KESync.touch();
    } catch (e) { /* 統計壞掉也不能讓練習頁壞掉 */ }
  }
  // 做完一個單位（不是一題）：'comic'＝歷史漫畫一話（測驗做完）、'geo'＝地理一組練習／一次測驗
  function finish(kind) {
    try {
      const SM = window.KESyncMerge, code = FIN[kind];
      if (!SM || !code || !loggedIn()) return;
      localStorage.setItem(K, JSON.stringify(SM.ddAdd(ld(K, {}), devId(), Date.now(), code, true)));
      if (window.KESync && KESync.touch) KESync.touch();
    } catch (e) { }
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
      const g = validGoal(GOAL_IDS.map(id => root.querySelector('#' + id).value)), m = root.querySelector('#dgMsg');
      if (!g) { m.textContent = '英文、數學要 1～999，閱讀要 1～20；「其中」要 0～99，加起來不能超過那一科；歷史、地理要 0～9。'; return; }
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
    // 歷史、地理的入口：下一話沒看過的漫畫、地理目前進度的下一組
    c.rows.forEach(r => {
      if (r.key === 'h') r.href = nextComic(ld('kids_comic', {}));
      if (r.key === 'g') { const KC = window.KidsCompletion; r.href = nextGeo(obj(done).geo, KC && KC.GEO_UNITS); }
    });
    return Object.assign(c, { day, label: fmtD(day) + ' 週' + '日一二三四五六'[new Date(toMs(day)).getUTCDay()], next: c.rows.find(r => !r.done) || null, made: row.subj, n: row.n, pct: row.pct });
  }
  // 全部完成時：今天這台還沒跳過就回 true（只回一次）
  function party(day, allDone) { let s = null; try { s = localStorage.getItem(K_PARTY); } catch (e) { } if (!partyDue(s, day, allDone)) return false; try { localStorage.setItem(K_PARTY, day); } catch (e) { } return true; }
  G.KidsDaily = { rec, finish, html, bind, today, party, saveGoal, _core: core };
})(typeof window !== 'undefined' ? window : globalThis);
