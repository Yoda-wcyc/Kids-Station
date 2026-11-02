/* assistant-ui.js — 🦉 學習小助理的畫面（2026-11-01）。算法全在 assistant-core.js（KidsAssistant.analyze），這支只讀本機紀錄、畫畫面：
   - 首頁：index.html 的 #assist（登入後才顯示）。① 今天的清單 ② 一顆接著做 ③ 今天做了＋一句鼓勵 ④ 其他任務（收合）；⑤ 全部科目在 app.js pHome。開頁先讓首頁畫完，閒下來才算。
     英文入口頁、各科卡片頁只顯示一行今天進度；進到單元（iframe）就收起來。
   - 完整頁：assistant.html 的 #kas-page（KidsAssistantUI.page(el)）。
   - 家長頁「本週學習摘要」：app.js #parent 呼叫 KidsAssistantUI.parentHtml()。
   只讀學習紀錄；唯一會寫的是 localStorage kids_assist_ui（上一句鼓勵語，讓鼓勵語不連續重複；不是學習紀錄、不同步）。
   需要先載入 syncmerge.js、completion.js、kids-done.js、assistant-core.js（英文課本單元還要 engine.js＋data/*.js）。 */
(function () {
  'use strict';
  const KA = window.KidsAssistant;
  if (!KA) return;
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const UIK = 'kids_assist_ui';
  const onIndex = () => !!document.getElementById('subjects');
  // 首頁上直接換 hash（不重新載入）；其他頁照原本的 index.html#…
  const link = h => (onIndex() ? String(h).replace(/^index\.html(?=#)/, '') : h);
  const loggedIn = () => { try { const A = window.KidsAuth; return !!(A && A.configured() && A.isLoggedIn()); } catch (e) { return false; } };

  // ---------- 快照 ----------
  function daily() { try { return window.KidsDaily ? KidsDaily.today() : null; } catch (e) { return null; } }
  function nick() { try { const m = window.KidsAuth && KidsAuth.member(); return m && m.child_nickname ? String(m.child_nickname).slice(0, 12) : ''; } catch (e) { return ''; } }
  let lastCheer = null;   // 這一頁已經挑過的鼓勵語（同一情境就沿用，畫面重畫不會一直換句子）
  function snapshot() {
    const KD = window.KidsDone, ui = ld(UIK, {}) || {};
    return { now: Date.now(), data: KD ? KD.data() : {}, ctx: KD ? KD.ctx() : {}, mk: ld('kids_mistakes', {}), keMk: ld('ke_mistakes', {}), seen: ld('kids_coin_seen', {}),
      zhLocal: ld('kids_zh_reading', {}), exam: ld('kids_mm_exam', {}), wordLv: ld('kids_word_lv', {}), daily: daily(), nick: nick(), prevCheer: ui.cheer || '' };
  }
  function analyze() {
    const s = snapshot(), r = KA.analyze(s);
    if (lastCheer && lastCheer.sit === r.cheer.sit) r.cheer = lastCheer;
    else { lastCheer = r.cheer; try { localStorage.setItem(UIK, JSON.stringify({ cheer: r.cheer.id })); } catch (e) { } }
    return r;
  }

  // ---------- 樣式（大按鈕、820px 不橫向捲動；狀態不用紅色） ----------
  const todayCss = '.td-h{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-size:1.2rem;margin:0 0 8px}#td-count{color:var(--muted);font-weight:700;font-size:1rem;white-space:nowrap}'
    + '.td-r{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;min-height:60px;padding:6px 12px;margin:0 0 8px;border:2px solid var(--line);border-radius:16px;background:#fff;color:var(--ink);text-decoration:none}'
    + '.td-r.cur{border-color:var(--pri);border-width:3px;background:#fff8ec}.td-r.done{background:transparent;border-color:transparent;color:var(--muted);min-height:44px;padding:2px 12px;margin-bottom:4px}'
    + '.td-i{width:30px;text-align:center;font-size:1.2rem}.td-r.cur .td-i{color:var(--pri)}.td-n{font-size:1.25rem;width:72px}.td-v{font-size:1.25rem;font-weight:800;font-variant-numeric:tabular-nums}.td-r.done .td-n,.td-r.done .td-v{font-size:1.05rem;font-weight:600}'
    + '.td-side{margin-left:auto;display:flex;align-items:center;gap:12px}.td-note{font-size:.95rem;color:var(--muted);white-space:nowrap}.td-go{min-height:44px;padding:4px 18px;box-shadow:none;font-size:1rem}.td-hint{flex-basis:100%;order:9;color:var(--muted);font-size:.82rem;padding-left:42px}'
    + 'a.td-main{display:flex;width:100%;min-height:72px;font-size:1.35rem;font-weight:800;margin:6px 0 10px;border-radius:20px;white-space:normal;text-align:center}'
    + '.td-party{margin:6px 0 10px;padding:16px;text-align:center;font-size:1.35rem;font-weight:800;background:var(--ok-bg,#e6f8ee);color:#145c38;border-radius:20px}.td-party.pop{animation:td-pop .9s ease-out}'
    + '@keyframes td-pop{0%{transform:scale(.8);opacity:0}45%{transform:scale(1.07);opacity:1}70%{transform:scale(.98)}100%{transform:scale(1)}}@media (prefers-reduced-motion:reduce){.td-party.pop{animation:none}}'
    + '.td-made{margin:0 0 2px;font-size:.95rem;color:#56616f;line-height:1.5}.td-cheer{margin:2px 0 0;font-size:1rem;line-height:1.5;display:flex;align-items:center;gap:10px}.td-cheer>span:first-child{flex:1;min-width:0}.td-cheer .kas-hi{display:inline;font-size:1rem}.td-cheer .kas-cheer{margin:0}.td-all{min-height:44px;padding:4px 14px;font-size:.95rem;box-shadow:none;white-space:nowrap;flex:none}'
    + '.td-more{margin-top:10px;border-top:2px dashed var(--line);padding-top:4px}.td-more>summary{cursor:pointer;min-height:48px;display:flex;align-items:center;font-weight:700;color:#56616f}.td-more>summary::after{content:"▾";margin-left:8px}.td-more[open]>summary::after{content:"▴"}.td-more>summary::-webkit-details-marker{display:none}'
    + '.td-strip{display:flex;flex-wrap:wrap;align-items:center;gap:4px 14px;min-height:48px;padding:6px 14px;background:#fff;border:2px solid var(--line);border-radius:14px;color:var(--ink);text-decoration:none;font-size:.95rem}.td-strip .ok{color:var(--muted)}.td-home{margin-left:auto;color:var(--muted);white-space:nowrap}';
  let cssDone = false;
  function css() {
    if (cssDone) return; cssDone = true;
    const s = document.createElement('style');
    s.textContent = '#assist{max-width:980px;margin:0 auto;padding:12px 16px 0;box-sizing:border-box}#assist[hidden]{display:none}html.frame-mode #assist{display:none}'
      + 'a.btn{text-decoration:none}.kas-card{background:#fff;border:2px solid var(--line);border-radius:22px;padding:14px 16px;box-sizing:border-box;max-width:100%}'
      + '.kas-head{display:flex;gap:12px;align-items:flex-start}.kas-owl{font-size:2.4rem;line-height:1}.kas-hi{display:block;font-size:1.15rem}.kas-cheer{margin:2px 0 0;line-height:1.5}'
      + todayCss + '.kas-h{font-size:1.1rem;margin:12px 0 8px}.kas-tasks{list-style:none;margin:0;padding:0;display:grid;gap:10px}'
      + '.kas-task{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:6px 12px;align-items:center;background:#fff;border:2px solid var(--line,#eadfca);border-radius:16px;padding:10px 12px}'
      + '.kas-ti{font-size:1.7rem}.kas-tx b{display:block;font-size:1.02rem;line-height:1.35}.kas-tx small{display:block;color:#56616f;font-size:.88rem;line-height:1.4;margin-top:2px}'
      + '.kas-act{display:flex;flex-direction:column;align-items:flex-end;gap:4px}.kas-min{font-size:.82rem;color:#56616f;white-space:nowrap}.kas-go{min-height:52px;white-space:nowrap}'
      + '.kas-foot{display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;align-items:center;margin-top:10px}.kas-done{margin:0;padding:12px;text-align:center;background:#e9f9ef;border-radius:14px}'
      + '@media (max-width:600px){.kas-task{grid-template-columns:auto minmax(0,1fr)}.kas-act{grid-column:1 / -1;flex-direction:row;justify-content:space-between;align-items:center}}'
      // 完整頁
      + '.kas-sec{margin:0 0 16px}.kas-sec>h2{font-size:1.25rem;margin:0 0 10px}'
      + '.kas-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:12px}'
      + '.kas-sub{display:flex;flex-direction:column;gap:6px;padding:12px 14px;border-radius:18px;border:3px solid;background:#fff;color:var(--ink,#263445);text-decoration:none;box-sizing:border-box}'
      + '.kas-sub-h{display:flex;justify-content:space-between;align-items:center;gap:8px;font-weight:800;font-size:1.15rem}'
      + '.kas-pill{border-radius:999px;padding:2px 10px;font-size:.85rem;font-weight:800;white-space:nowrap}'
      + '.st-great{border-color:#2fb36d}.st-great .kas-pill{background:#d3f2e1;color:#145c38}.st-steady{border-color:#5aa9e6}.st-steady .kas-pill{background:#dcefff;color:#1b4f7a}'
      + '.st-push{border-color:#f0b429}.st-push .kas-pill{background:#fff1c7;color:#5c4300}.st-fresh{border-color:#b9c3d0;border-style:dashed}.st-fresh .kas-pill{background:#eef1f5;color:#344150}'
      + '.kas-bar{display:block;height:14px;border-radius:999px;background:#f3e6cf;overflow:hidden;border:2px solid var(--line,#eadfca)}.kas-bar i{display:block;height:100%;background:linear-gradient(90deg,#8ad3ff,#2b8fd6)}'
      + '.kas-dl{display:grid;grid-template-columns:auto 1fr;gap:2px 10px;margin:0;font-size:.92rem}.kas-dl dt{color:#56616f}.kas-dl dd{margin:0;font-weight:700}'
      + '.kas-weak{list-style:none;margin:0;padding:0;display:grid;gap:12px}.kas-w{background:#fff;border:2px solid var(--line,#eadfca);border-radius:18px;padding:12px 14px}'
      + '.kas-w h3{margin:0;font-size:1.1rem}.kas-w .kas-x{color:#56616f;font-size:.9rem;margin:2px 0 6px}.kas-w ol{margin:6px 0 10px;padding-left:1.4em;line-height:1.55}.kas-btns{display:flex;flex-wrap:wrap;gap:8px}'
      + '.kas-next{list-style:none;margin:0;padding:0;display:grid;gap:8px}.kas-next li{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;justify-content:space-between;background:#fff;border:2px dashed #c3c9d2;border-radius:16px;padding:10px 12px}'
      + '.kas-prog{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,200px),1fr));gap:10px}.kas-stat{background:#fff;border:2px solid var(--line,#eadfca);border-radius:16px;padding:10px 12px}'
      + '.kas-stat b{display:block;font-size:1.6rem}.kas-stat small{color:#56616f}.kas-up{color:#145c38;font-weight:800}'
      + '.kas-tbl{width:100%;border-collapse:collapse;font-size:.95rem}.kas-tbl th,.kas-tbl td{border-bottom:1px solid var(--line,#eadfca);padding:6px 8px;text-align:left}.kas-tbl td.n{text-align:right;font-variant-numeric:tabular-nums}';
    (document.head || document.documentElement).appendChild(s);
  }

  // ---------- 共用片段 ----------
  const taskLi = t => `<li class="kas-task" data-kind="${esc(t.kind)}" data-k="${esc(t.k)}"><span class="kas-ti" aria-hidden="true">${t.icon}</span>`
    + `<div class="kas-tx"><b>${esc(t.title)}</b><small>為什麼：${esc(t.why)}</small></div>`
    + `<div class="kas-act"><span class="kas-min">⏱️ 約 ${t.min} 分鐘</span><a class="btn primary kas-go" href="${esc(link(t.href))}">去做 ▶</a></div></li>`;
  const head = r => `<div class="kas-head"><span class="kas-owl" aria-hidden="true">🦉</span><div><b class="kas-hi">${esc(r.hi)}</b><p class="kas-cheer" data-cheer="${esc(r.cheer.id)}">${esc(r.cheer.text)}</p></div></div>`;
  const tasksHtml = r => r.tasks.length ? `<ol class="kas-tasks" id="kas-tasks">${r.tasks.map(taskLi).join('')}</ol>`
    : '<p class="kas-done">🎉 今天的任務都完成了！可以到課程地圖看看你走了多遠。</p>';
  // ---------- 今天的清單 ----------
  const num = r => `${r.n} / ${r.goal}${r.key === 'r' ? ' 篇' : ''}`;
  function rowHtml(r, cur) {
    const side = r.done ? (r.over ? '<span class="td-note">今天超標了 🎉</span>' : '') : `<span class="td-note">${cur && r.left ? `還差 ${r.left} ${r.unit}` : ''}</span><span class="btn td-go">${r.n ? '繼續' : '開始'}</span>`;
    const hint = r.key === 'm' && r.mx ? '<small class="td-hint">⚡ 快算 3 題算 1 題</small>' : '';
    return `<a class="td-r ${r.done ? 'done' : cur ? 'cur' : ''}" data-key="${r.key}" href="${esc(link(r.href))}"><span class="td-i" aria-hidden="true">${r.done ? '✅' : cur ? '▶' : '○'}</span><b class="td-n">${esc(r.name)}</b><span class="td-v">${num(r)}</span>${hint}<span class="td-side">${side}</span></a>`;
  }
  function listHtml(T) {
    return `<section class="td" id="td" aria-label="今天的清單"><div class="td-h"><b>今天（${esc(T.label)}）</b><span id="td-count">${T.doneN} / ${T.total} 完成</span></div>${T.rows.map(r => rowHtml(r, T.next && r.key === T.next.key)).join('')}</section>`;
  }
  // 主按鈕：英文、數學優先用小助理挑的那一項（錯題、複習也算題數）；閱讀一定要讀一篇，到閱讀列表
  const nextHref = (T, r) => { const c = T.next.key === 'r' ? null : r.tasks.find(t => t.k === T.next.k); return c ? c.href : T.next.href; };
  let partyDay = '';
  function mainHtml(T, r) {
    if (T.next) return `<a class="btn primary td-main" id="td-next" href="${esc(link(nextHref(T, r)))}">接著做：${esc(T.next.name)}（還差 ${T.next.left} ${T.next.unit}）</a>`;
    if (window.KidsDaily && KidsDaily.party(T.day, T.allDone)) partyDay = T.day;
    return `<p class="td-party${partyDay === T.day ? ' pop' : ''}" id="td-party">🎉 今天的清單全部完成了！</p>`;
  }
  const madeHtml = T => `<p class="td-made" id="td-made">${T.made.length ? `今天做了：${T.made.map(s => `${esc(s.name)} ${s.n} 題`).join('・')}${T.pct == null ? '' : `　答對 ${T.pct}%`}` : '今天還沒開始，從上面第一項開始吧！'}</p>`;
  const oneLine = (r, more) => `<p class="td-cheer"><span>🦉 <b class="kas-hi">${esc(r.hi)}</b> <span class="kas-cheer" data-cheer="${esc(r.cheer.id)}">${esc(r.cheer.text)}</span></span>${more ? '<a class="btn td-all kas-all" id="kas-all" href="assistant.html">看全部</a>' : ''}</p>`;
  let moreOpen = false;
  // 其他任務：主按鈕已經指到的那一項不重複列
  function moreHtml(T, r) {
    const main = T.next ? nextHref(T, r) : '', others = r.tasks.filter(t => t.href !== main);
    return `<details class="td-more" id="td-more"${moreOpen ? ' open' : ''}><summary>其他任務（${others.length}）</summary>${others.length ? `<ol class="kas-tasks" id="kas-tasks">${others.map(taskLi).join('')}</ol>` : '<p class="kas-done">今天沒有其他任務了。</p>'}</details>`;
  }
  const cardHtml = (r, T) => `<section class="kas-card" aria-label="今天要做的事">${listHtml(T)}${mainHtml(T, r)}${madeHtml(T)}${oneLine(r, true)}${moreHtml(T, r)}</section>`;
  // 英文入口頁、各科卡片頁：一行就好
  const stripHtml = T => `<a class="td-strip" id="td-strip" href="${esc(link('index.html#home'))}"><b>今天</b>${T.rows.map(x => `<span${x.done ? ' class="ok"' : ''}>${esc(x.name)} ${x.done ? '✓' : x.n + '/' + x.goal}</span>`).join('')}<span class="td-home">🏠 回首頁</span></a>`;
  const dayText = s => (s.days == null ? '還沒練過' : s.days === 0 ? '今天' : s.days === 1 ? '昨天' : `${s.days} 天前`);

  // ---------- 首頁卡片 ----------
  let timer = null;
  const isHome = () => { const h = location.hash || ''; return h === '' || h === '#' || h === '#home'; };
  function homeRoute() { const h = location.hash || ''; return isHome() || h === '#en' || /^#s\/[a-z]+$/.test(h); }
  function renderHome() {
    const box = document.getElementById('assist'); if (!box) return;
    if (!loggedIn() || !homeRoute()) { box.hidden = true; return; }
    css();
    let r, T; try { r = analyze(); T = r.daily || KidsDaily.today(); } catch (e) { box.hidden = true; return; }
    const h = isHome() ? cardHtml(r, T) : stripHtml(T);
    if (box.__h !== h) { box.innerHTML = h; box.__h = h; const d = box.querySelector('#td-more'); if (d) d.ontoggle = () => { moreOpen = d.open; }; }
    box.hidden = false; box.dataset.tasks = r.tasks.length;
  }
  // 閒下來才算：首頁先畫完，不因為算紀錄卡住
  function later(ms) { clearTimeout(timer); timer = setTimeout(() => { if (window.requestIdleCallback) requestIdleCallback(renderHome, { timeout: 800 }); else renderHome(); }, ms); }
  if (document.getElementById('assist')) {
    window.addEventListener('hashchange', () => { const b = document.getElementById('assist'); if (b && !homeRoute()) b.hidden = true; later(30); });
    ['kids-sync-updated', 'kids-done-changed'].forEach(ev => window.addEventListener(ev, () => later(300)));
    window.addEventListener('storage', e => { if (!e.key || /^(kids_jwt|kids_member|kids_mistakes|ke_mistakes|kids_coin_seen|kids_daily|kids_daily_goal|kids_done)$/.test(e.key)) later(300); });
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') later(100); });
    window.addEventListener('pageshow', e => { if (e.persisted) later(50); });
    if (document.readyState === 'complete') later(60); else window.addEventListener('load', () => later(60));
  }

  // ---------- 完整頁（assistant.html） ----------
  function subjCard(s) {
    return `<a class="kas-sub st-${s.status}" href="${esc(link(s.href))}" data-k="${s.k}" data-status="${s.status}"><span class="kas-sub-h"><span>${s.icon} ${esc(s.name)}</span><span class="kas-pill">${esc(s.statusText)}</span></span>`
      + `<span class="kas-bar" role="presentation"><i style="width:${Math.max(0, Math.min(100, s.pct))}%"></i></span>`
      + `<dl class="kas-dl"><dt>完成度</dt><dd>${s.pct}%（${s.unitsDone}/${s.unitsTotal} 個單元）</dd><dt>錯題庫</dt><dd>${s.mistakes} 題</dd><dt>最後練習</dt><dd>${dayText(s)}</dd></dl></a>`;
  }
  function weakLi(w) {
    return `<li class="kas-w" data-sol="${esc(w.sol)}" data-k="${esc(w.k)}"><h3>${w.icon} ${esc(w.title)}：${esc(w.text)}</h3>${w.extra ? `<p class="kas-x">${esc(w.extra)}</p>` : ''}`
      + `<ol>${w.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol><div class="kas-btns"><a class="btn primary" href="${esc(link(w.href))}">${esc(w.btn)}</a>${w.href2 ? `<a class="btn" href="${esc(link(w.href2))}">${esc(w.btn2)}</a>` : ''}</div></li>`;
  }
  const cmp = (a, b, unit, lessIsBetter) => {
    const better = lessIsBetter ? a < b : a > b;
    return `<small>上週 ${b} ${unit}${better ? ` <span class="kas-up">${lessIsBetter ? '⬇ 少了 ' + (b - a) : '⬆ 多了 ' + (a - b)}</span>` : ''}</small>`;
  };
  function progHtml(p) {
    return `<div class="kas-prog" id="kas-prog">`
      + `<div class="kas-stat"><span>🔥 連續天數</span><b>${p.streak} 天</b><small>${p.streak ? '每天一點點，累積起來很驚人' : '今天練一題就開始累積'}</small></div>`
      + `<div class="kas-stat"><span>📅 這 7 天練習</span><b>${p.days} 天</b>${cmp(p.days, p.daysLast, '天')}</div>`
      + `<div class="kas-stat"><span>🏅 完成的關卡</span><b>${p.goals} 個</b>${cmp(p.goals, p.goalsLast, '個')}${p.goalItems.length ? `<small><br>${esc(p.goalItems.join('、'))}</small>` : ''}</div>`
      + `<div class="kas-stat"><span>✏️ 答錯的題目</span><b>${p.wrong} 題</b>${p.wrongLast || p.wrong ? cmp(p.wrong, p.wrongLast, '題', true) : '<small>還沒有紀錄</small>'}</div>`
      + `<div class="kas-stat"><span>🎓 錯題畢業</span><b>${p.grad} 題</b><small>社會、自然：隔 1、3、7 天各答對一次就畢業；其他科：同一題連續答對 3 次</small></div>`
      + `<div class="kas-stat"><span>✅ 已完成單元</span><b>${p.unitsDone} 個</b><small><a href="map.html">看課程地圖</a></small></div></div>`;
  }
  function page(el) {
    if (!el) return;
    css();
    if (!loggedIn()) {
      const A = window.KidsAuth;
      el.innerHTML = `<section class="card center" id="kas-out"><p>🦉 登入後，學習小助理就會幫你整理今天的任務。</p>${A && A.configured() ? `<a class="btn primary big" href="${esc(A.loginUrl(A.base + 'assistant.html'))}">🔑 去登入</a>` : ''}</section>`;
      return;
    }
    const r = analyze(), T = r.daily || KidsDaily.today();
    el.innerHTML = `<section class="kas-card" aria-label="學習小助理">${head(r)}${listHtml(T)}<h2 class="kas-h">📋 其他任務</h2>${tasksHtml(r)}</section>`
      + `<section class="kas-sec card" id="kas-subjects"><h2>📚 各科進度</h2><div class="kas-grid">${r.subjects.map(subjCard).join('')}</div></section>`
      + `<section class="kas-sec card" id="kas-weak-sec"><h2>💡 比較弱的地方</h2>${r.weak.length ? `<ol class="kas-weak" id="kas-weak">${r.weak.map(weakLi).join('')}</ol>` : '<p class="muted">目前沒有特別弱的地方 👍 錯題多起來時，這裡會告訴你怎麼練。</p>'}</section>`
      + `<section class="kas-sec card" id="kas-next-sec"><h2>🧭 還沒開始的（下一步）</h2>${r.next.length ? `<ul class="kas-next" id="kas-next">${r.next.map(n => `<li data-k="${n.k}"><span>${n.icon} <b>${esc(n.subj)}</b>：${esc(n.title)}</span><a class="btn" href="${esc(link(n.href))}">${n.first ? '從這裡開始' : '下一個'} ▶</a></li>`).join('')}</ul>` : '<p class="muted">每一科都開始了，很棒！</p>'}</section>`
      + `<section class="kas-sec card" id="kas-prog-sec"><h2>📈 我的進步（這 7 天和前 7 天比）</h2>${progHtml(r.progress)}</section>`;
    document.body.setAttribute('data-rendered', String(Date.now()));
  }

  // ---------- 家長頁：本週學習摘要（簡單版） ----------
  function parentHtml() {
    try {
      const r = KA.analyze(Object.assign(snapshot(), { nick: '' })), P = KA.parentSummary(r);
      css();
      return `<section class="card" id="kas-parent"><h2>📋 本週學習摘要（最近 7 天）</h2>`
        + `<p>練習 <b>${P.days}</b> 天（前 7 天 ${P.daysLast} 天）・連續 <b>${P.streak}</b> 天・完成關卡 <b>${P.goals}</b> 個（前 7 天 ${P.goalsLast} 個）・答錯 <b>${P.wrong}</b> 題（前 7 天 ${P.wrongLast} 題）</p>`
        + `<div class="tblwrap"><table class="kas-tbl"><thead><tr><th>科目</th><th>練習天數</th><th>完成關卡</th><th>錯題庫</th><th>狀態</th></tr></thead><tbody>`
        + P.rows.map(x => `<tr data-k="${x.k}"><td>${x.icon} ${esc(x.name)}</td><td class="n">${x.days}</td><td class="n">${x.goals}</td><td class="n">${x.mistakes}</td><td>${esc(x.status)}</td></tr>`).join('') + '</tbody></table></div>'
        + `<h3>弱點前 3 名</h3>${P.weak.length ? `<ol>${P.weak.map(w => `<li>${esc(w.title)}（${esc(w.text)}）— 建議：${esc(w.step)}</li>`).join('')}</ol>` : '<p class="muted">目前沒有錯題特別多的地方。</p>'}`
        + `<h3>建議今天做</h3>${P.advice.length ? `<ol>${P.advice.map(a => `<li>${esc(a)}</li>`).join('')}</ol>` : '<p class="muted">今天的任務都完成了。</p>'}`
        + `<p class="muted"><a href="assistant.html">🦉 打開學習小助理完整頁</a>（各科進度、弱點解法、進步比較）</p></section>`;
    } catch (e) { return ''; }
  }

  window.KidsAssistantUI = { renderHome, page, parentHtml, snapshot, analyze };
})();
