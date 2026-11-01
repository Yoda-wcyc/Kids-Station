/* assistant-ui.js — 🦉 學習小助理的畫面（2026-11-01）。算法全在 assistant-core.js（KidsAssistant.analyze），這支只讀本機紀錄、畫畫面：
   - 首頁卡片：index.html 的 #assist（登入後才顯示；#home、各科卡片頁最上方）。開頁先讓首頁畫完，閒下來才算。
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
  function goal() {
    const C = window.KidsCoins; if (!C) return null;
    try {
      const mid = C.mid(), c = ld('kids_coin_min', {}) || {}, t = C.today && C.today(), d = C._core.tpeDate(Date.now());
      const local = c.mid === mid && c.date === d ? +c.n || 0 : 0, srv = t && typeof t.minutes === 'number' ? t.minutes : 0;
      return { min: Math.max(local, srv), met: !!(t && t.goal_met) };
    } catch (e) { return null; }
  }
  function nick() { try { const m = window.KidsAuth && KidsAuth.member(); return m && m.child_nickname ? String(m.child_nickname).slice(0, 12) : ''; } catch (e) { return ''; } }
  let lastCheer = null;   // 這一頁已經挑過的鼓勵語（同一情境就沿用，畫面重畫不會一直換句子）
  function snapshot() {
    const KD = window.KidsDone, ui = ld(UIK, {}) || {};
    return { now: Date.now(), data: KD ? KD.data() : {}, ctx: KD ? KD.ctx() : {}, mk: ld('kids_mistakes', {}), keMk: ld('ke_mistakes', {}), seen: ld('kids_coin_seen', {}),
      zhLocal: ld('kids_zh_reading', {}), wordLv: ld('kids_word_lv', {}), goal: goal(), nick: nick(), prevCheer: ui.cheer || '' };
  }
  function analyze() {
    const s = snapshot(), r = KA.analyze(s);
    if (lastCheer && lastCheer.sit === r.cheer.sit) r.cheer = lastCheer;
    else { lastCheer = r.cheer; try { localStorage.setItem(UIK, JSON.stringify({ cheer: r.cheer.id })); } catch (e) { } }
    return r;
  }

  // ---------- 樣式（大按鈕、820px 不橫向捲動；狀態不用紅色） ----------
  let cssDone = false;
  function css() {
    if (cssDone) return; cssDone = true;
    const s = document.createElement('style');
    s.textContent = '#assist{max-width:980px;margin:0 auto;padding:12px 16px 0;box-sizing:border-box}#assist[hidden]{display:none}html.frame-mode #assist{display:none}'
      + 'a.btn{text-decoration:none}.kas-card{background:linear-gradient(180deg,#fffdf6,#fff);border:3px solid #ffd166;border-radius:22px;padding:14px 16px;box-shadow:0 4px 0 rgba(240,180,41,.25);box-sizing:border-box;max-width:100%}'
      + '.kas-head{display:flex;gap:12px;align-items:flex-start}.kas-owl{font-size:2.4rem;line-height:1}.kas-hi{display:block;font-size:1.15rem}.kas-cheer{margin:2px 0 0;line-height:1.5}'
      + '.kas-h{font-size:1.1rem;margin:12px 0 8px}.kas-tasks{list-style:none;margin:0;padding:0;display:grid;gap:10px}'
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
  const cardHtml = (r, more) => `<section class="kas-card" aria-label="學習小助理">${head(r)}<h2 class="kas-h">📋 今日任務</h2>${tasksHtml(r)}`
    + (more ? `<div class="kas-foot"><small class="muted">每天最多 3 項，各科輪流</small><a class="btn kas-all" id="kas-all" href="assistant.html">看全部 ▶</a></div>` : '') + '</section>';
  const dayText = s => (s.days == null ? '還沒練過' : s.days === 0 ? '今天' : s.days === 1 ? '昨天' : `${s.days} 天前`);

  // ---------- 首頁卡片 ----------
  let timer = null;
  function homeRoute() { const h = location.hash || ''; return h === '' || h === '#' || h === '#home' || /^#s\/[a-z]+$/.test(h); }
  function renderHome() {
    const box = document.getElementById('assist'); if (!box) return;
    if (!loggedIn() || !homeRoute()) { box.hidden = true; return; }
    css();
    let r; try { r = analyze(); } catch (e) { box.hidden = true; return; }
    const h = cardHtml(r, true);
    if (box.__h !== h) { box.innerHTML = h; box.__h = h; }
    box.hidden = false; box.dataset.tasks = r.tasks.length;
  }
  // 閒下來才算：首頁先畫完，不因為算紀錄卡住
  function later(ms) { clearTimeout(timer); timer = setTimeout(() => { if (window.requestIdleCallback) requestIdleCallback(renderHome, { timeout: 800 }); else renderHome(); }, ms); }
  if (document.getElementById('assist')) {
    window.addEventListener('hashchange', () => { const b = document.getElementById('assist'); if (b && !homeRoute()) b.hidden = true; later(30); });
    ['kids-sync-updated', 'kids-done-changed'].forEach(ev => window.addEventListener(ev, () => later(300)));
    window.addEventListener('storage', e => { if (!e.key || /^(kids_jwt|kids_member|kids_mistakes|ke_mistakes|kids_coin_seen|kids_coin_min)$/.test(e.key)) later(300); });
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
      + `<div class="kas-stat"><span>🎓 錯題畢業</span><b>${p.grad} 題</b><small>同一題連續答對 3 次就畢業</small></div>`
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
    const r = analyze();
    el.innerHTML = cardHtml(r, false)
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
