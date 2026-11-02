/* comics/comic.js — 世界史漫畫閱讀器。資料（data/*.js 的 COMIC_DATA）和畫面分開；每一話照同一個格式，換資料就能用。
   流程：封面 → 一格一格（滑動／按鈕／點螢幕）→ 重點整理 → 時間軸＋地圖 → 小測驗（quizkit.js 元件、reading-core.js 判分）。
   直向：整頁看、翻一格多顯示一格；橫向：一次放大看一格（一頁放不下的字才不會太小）。
   還沒接學習幣、完成標示、錯題庫（Yoda 看過第 1 話才做）：作答結果只留在這一頁；要接的時候接在 onDone。 */
(function () {
  'use strict';
  const A = window.ComicArt, QK = window.QuizKit, ZR = window.ZhReading, esc = QK.esc;
  const el = id => document.getElementById(id);

  function mount(ep, opts) {
    opts = opts || {};
    // 全部步驟攤平：cover → 每一格 → recap → where → quiz
    const steps = [{ kind: 'cover', page: -1 }];
    ep.pages.forEach((pg, pi) => pg.panels.forEach((p, i) => steps.push({ kind: 'panel', page: pi, i, p, slot: A.LAYOUTS[pg.layout][i] })));
    steps.push({ kind: 'recap' }, { kind: 'where' }, { kind: 'quiz' });
    const nPanels = steps.filter(s => s.kind === 'panel').length;
    let cur = 0, builtPage = null;
    const quiz = { items: [], i: 0 };
    const stage = el('cm-stage'), sheet = el('cm-sheet'), book = el('cm-book');

    // ---------- 一格 ----------
    function bubbleHTML(b, idx) {
      const kind = b.kind || 'say', fs = b.fs ? `font-size:${b.fs}px;` : '';
      return `<div class="cm-b cm-${kind}" data-b="${idx}" data-say-text="${esc(b.t)}" style="left:${b.x}px;top:${b.y}px;width:${b.w}px;${fs}"><span>${esc(b.t).replace(/\n/g, '<br>')}</span></div>`;
    }
    function panelHTML(p, slot, ci) {
      const svg = A.panelSvg(p, slot.w, slot.h);
      const cards = (p.cards || []).map(c => `<div class="cm-card" style="top:${c.y}px;left:${c.x || 14}px;width:${c.w || slot.w - 28}px" data-say-text="${esc(c.t)}"><div class="cm-ci">${A.icon(c.icon)}</div><p>${esc(c.t)}</p></div>`).join('');
      const say = (p.bubbles || []).map(bubbleHTML).join('');
      const caps = (p.caption || []).map(c => `<div class="cm-cap${c.dark === false ? ' lt' : ''}" data-say-text="${esc(c.say || c.t)}" style="left:${c.x}px;top:${c.y}px;${c.w ? `width:${c.w}px;` : ''}">${c.en ? `<small>${esc(c.en)}</small>` : ''}${esc(c.t)}</div>`).join('');
      const sfx = (p.sfx || []).map(f => `<div class="cm-sfx" style="left:${f.x}px;top:${f.y}px;font-size:${f.fs || 54}px;transform:rotate(${f.rot || 0}deg);color:${f.c || 'var(--red)'}">${esc(f.t)}</div>`).join('');
      const tag = p.tag ? `<div class="cm-tag" style="${p.tag.left != null ? `left:${p.tag.left}px` : 'right:10px'};${p.tag.top != null ? `top:${p.tag.top}px` : 'bottom:8px'}">${esc(p.tag.t)}</div>` : '';
      return `<section class="cm-panel" data-ci="${ci}" style="left:${slot.x}px;top:${slot.y}px;width:${slot.w}px;height:${slot.h}px">${svg}<svg class="cm-tails" viewBox="0 0 ${slot.w} ${slot.h}" aria-hidden="true"></svg>${cards}${caps}${say}${sfx}${tag}</section>`;
    }
    // 泡泡的尾巴：等文字排好（知道高度）才畫，尖端指向 b.tail（面板座標）
    function drawTails(sec, p) {
      const tails = sec.querySelector('.cm-tails'); let s = '';
      (p.bubbles || []).forEach((b, i) => {
        if (!b.tail) return;
        const box = sec.querySelector(`[data-b="${i}"]`), H = box.offsetHeight, W = box.offsetWidth, x = b.x, y = b.y, tx = b.tail[0], ty = b.tail[1];
        const fill = b.kind === 'shout' ? '#151714' : b.kind === 'car' ? '#2F5A40' : '#FFFDF4';
        const cx = Math.max(x + 22, Math.min(x + W - 22, tx)), cy = Math.max(y + 22, Math.min(y + H - 22, ty));
        if (b.kind === 'think') { const bx = ty > y + H ? cx : x, by = ty > y + H ? y + H : cy; for (let k = 1; k <= 2; k++) s += `<circle cx="${bx + (tx - bx) * k / 3}" cy="${by + (ty - by) * k / 3}" r="${10 - k * 3}" fill="${fill}"/>`; return; }
        let pts;
        if (ty >= y + H - 4) pts = `${cx - 14},${y + H - 3} ${cx + 14},${y + H - 3} ${tx},${ty}`;
        else if (ty <= y + 4) pts = `${cx - 14},${y + 3} ${cx + 14},${y + 3} ${tx},${ty}`;
        else if (tx >= x + W) pts = `${x + W - 3},${cy - 14} ${x + W - 3},${cy + 14} ${tx},${ty}`;
        else pts = `${x + 3},${cy - 14} ${x + 3},${cy + 14} ${tx},${ty}`;
        s += `<polygon points="${pts}" fill="${fill}"/>`;
      });
      tails.innerHTML = s;
    }
    function buildPage(pi) {
      if (builtPage === pi) return;
      builtPage = pi;
      if (pi < 0) {
        book.innerHTML = `<section class="cm-panel cm-cover" data-ci="0" style="left:10px;top:10px;width:780px;height:1040px">${A.panelSvg(ep.cover, 780, 1040)}
          <div class="cm-title"><small>${esc(ep.series.en)}</small><h1>${esc(ep.series.zh)}</h1><p class="cm-vol">${esc(ep.vol)}・第 ${ep.ep} 話</p><h2>${esc(ep.title)}</h2></div>
          <button type="button" class="cm-start" data-go="next">開始看 ▶</button></section>`;
        return;
      }
      const pg = ep.pages[pi], slots = A.LAYOUTS[pg.layout];
      book.innerHTML = pg.panels.map((p, i) => panelHTML(p, slots[i], i)).join('');
      pg.panels.forEach((p, i) => drawTails(book.querySelector(`[data-ci="${i}"]`), p));
    }
    // 直向整頁，橫向放大目前這一格
    function fit() {
      const SW = stage.clientWidth, SH = stage.clientHeight, st = steps[cur];
      if (!SW || !SH) return;
      const landscape = SW / SH > 1.12, P = A.PAGE;
      let s, tx, ty;
      const slot = st.kind === 'panel' ? st.slot : { x: 10, y: 10, w: 780, h: 1040 };
      if (landscape) { s = Math.min((SW - 16) / slot.w, (SH - 12) / slot.h); tx = SW / 2 - (slot.x + slot.w / 2) * s; ty = SH / 2 - (slot.y + slot.h / 2) * s; }
      else { s = Math.min(SW / P.w, SH / P.h); tx = (SW - P.w * s) / 2; ty = (SH - P.h * s) / 2; }
      book.style.transform = `translate(${tx}px,${ty}px) scale(${s})`;
      book.dataset.mode = landscape ? 'focus' : 'page';
      book.querySelectorAll('.cm-panel').forEach(sec => {
        const ci = +sec.dataset.ci, ni = st.kind === 'panel' ? st.i : 0;
        sec.classList.toggle('on', ci === ni);
        sec.classList.toggle('off', landscape ? ci !== ni : ci > ni);
      });
    }

    // ---------- 看完以後的三頁 ----------
    function recapHTML() {
      return `<div class="cm-sh"><p class="cm-eyebrow">SUMMARY</p><h2 data-say>小禾的筆記：這一話的重點</h2><ol class="cm-recap">${ep.recap.map(r => `<li data-say><b>${esc(r.h)}</b><span>${esc(r.t)}</span></li>`).join('')}</ol>
        <p class="cm-note">${esc(ep.note)}</p></div>`;
    }
    function whereHTML() {
      return `<div class="cm-sh"><p class="cm-eyebrow">WHERE &amp; WHEN</p><h2>在哪裡？什麼時候？</h2>
        <figure class="cm-fig">${A.mapMeso(ep.map)}<figcaption>${esc(ep.map.cap)}</figcaption></figure>
        <figure class="cm-fig">${A.timeline(ep.timeline.items)}<figcaption>${esc(ep.timeline.cap)}</figcaption></figure>
        <p class="cm-src"><b>資料查證：</b>${ep.sources.map(esc).join('；')}</p></div>`;
    }
    function quizStart() { quiz.items = ep.quiz.map(q => QK.prep(q)); quiz.i = 0; }
    function quizHTML() {
      if (!quiz.items.length) quizStart();
      if (quiz.i >= quiz.items.length) {
        const g = ZR.grade(quiz.items);
        if (opts.onDone) opts.onDone(ep, g, quiz.items);
        const wrong = quiz.items.filter(s => !s.right).map(s => `<li>${esc(s.q.q)}<br><small>✓ ${esc(QK.answerText(s.q))}</small></li>`).join('');
        return `<div class="cm-sh"><p class="cm-eyebrow">RESULT</p><h2>答對 ${g.ok} / ${g.n} 題 ${g.ok === g.n ? '🎉' : g.pct >= ZR.PASS ? '👍' : '💪'}</h2>${wrong ? `<p>再看一次這幾題：</p><ul class="cm-wrong">${wrong}</ul>` : '<p>全對！阿凱說要請你吃布丁（但他沒寫下來）。</p>'}
          <div class="qk-row"><button type="button" class="btn primary big" data-c="retry">↻ 再測一次</button><button type="button" class="btn big" data-c="again">📖 從頭再看一次</button></div>
          <p class="cm-next">下一話〈${esc(ep.next)}〉還在製作中。</p></div>`;
      }
      const st = quiz.items[quiz.i], q = st.q;
      const fb = st.done ? `<div class="fb ${st.right ? 'ok' : 'no'}"><div class="fbh">${st.right ? '答對了！🎉' : '再看一次 👀'}</div><div>${esc(q.why)}${QK.extra(st)}</div></div><div class="qk-row"><button type="button" class="btn primary big wide" data-c="nextq">${quiz.i + 1 < quiz.items.length ? '下一題 ▶' : '看結果 ▶'}</button></div>` : '';
      return `<div class="cm-sh"><p class="cm-eyebrow">QUIZ ${quiz.i + 1} / ${quiz.items.length}</p><div class="cm-dots">${quiz.items.map((s, i) => `<i class="${s.done ? (s.right ? 'r' : 'w') : i === quiz.i ? 'c' : ''}"></i>`).join('')}</div><h2 class="cm-q">${esc(q.q)}</h2><p class="cm-qt">${QK.TYPES[q.type]}</p>${QK.body(st)}<div id="cm-msg" class="muted"></div>${fb}</div>`;
    }
    sheet.addEventListener('click', e => {
      const t = e.target.closest('[data-qk],[data-c]'); if (!t) return;
      if (t.dataset.c === 'nextq') { quiz.i++; renderSheet(); return; }
      if (t.dataset.c === 'retry') { quizStart(); renderSheet(); return; }
      if (t.dataset.c === 'again') { quiz.items = []; go(0); return; }
      const r = QK.act(quiz.items[quiz.i], t.dataset.qk, t.dataset.v) || {};
      if (r.result != null && window.KidsDaily) KidsDaily.rec('history', r.result);   // 家長頁每日學習紀錄
      if (r.msg) { const m = el('cm-msg'); if (m) m.textContent = r.msg; }
      if (r.render || r.result != null) renderSheet(false);
    });
    function renderSheet(top) {
      const st = steps[cur];
      sheet.innerHTML = st.kind === 'recap' ? recapHTML() : st.kind === 'where' ? whereHTML() : quizHTML();
      if (top !== false) sheet.scrollTop = 0;
    }

    // ---------- 翻格 ----------
    function go(n) {
      n = Math.max(0, Math.min(steps.length - 1, n));
      const changed = n !== cur; cur = n; const st = steps[cur];
      sayStop(changed && sayOn);
      const isSheet = st.kind === 'recap' || st.kind === 'where' || st.kind === 'quiz';
      stage.hidden = isSheet; sheet.hidden = !isSheet;
      el('cm-chrome').classList.toggle('sheet', isSheet);
      if (isSheet) renderSheet(); else { buildPage(st.page); fit(); }
      const pn = st.kind === 'panel' ? steps.slice(0, cur + 1).filter(s => s.kind === 'panel').length : 0;
      el('cm-count').textContent = st.kind === 'cover' ? '封面' : st.kind === 'panel' ? `第 ${pn} / ${nPanels} 格` : st.kind === 'recap' ? '重點整理' : st.kind === 'where' ? '地圖與時間軸' : '小測驗';
      el('cm-bar').style.width = (cur / (steps.length - 1) * 100) + '%';
      el('cm-prev').disabled = cur === 0;
      el('cm-next').hidden = cur === steps.length - 1;
      el('cm-next').textContent = st.kind === 'cover' ? '開始 ▶' : steps[cur + 1] && steps[cur + 1].kind === 'recap' ? '看重點 ▶' : '下一格 ▶';
      if (st.kind === 'recap') el('cm-next').textContent = '地圖 ▶';
      if (st.kind === 'where') el('cm-next').textContent = '小測驗 ▶';
      el('cm-tts').hidden = st.kind === 'quiz' || st.kind === 'where' || st.kind === 'cover';
      if (sayOn && !el('cm-tts').hidden) sayNow();
    }
    el('cm-prev').addEventListener('click', () => go(cur - 1));
    el('cm-next').addEventListener('click', () => go(cur + 1));
    window.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); });
    window.addEventListener('resize', fit);
    if (window.visualViewport) window.visualViewport.addEventListener('resize', fit);
    // 點螢幕：右邊 6 成下一格、左邊 4 成上一格；左右滑動翻格
    let tx0 = null, ty0 = null, swiped = false;
    stage.addEventListener('touchstart', e => { const t = e.changedTouches[0]; tx0 = t.clientX; ty0 = t.clientY; swiped = false; }, { passive: true });
    stage.addEventListener('touchend', e => { if (tx0 == null) return; const t = e.changedTouches[0], dx = t.clientX - tx0, dy = t.clientY - ty0; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) { swiped = true; go(cur + (dx < 0 ? 1 : -1)); } tx0 = null; }, { passive: true });
    stage.addEventListener('click', e => {
      if (swiped) { swiped = false; return; }
      if (e.target.closest('[data-go]')) { go(cur + 1); return; }
      const r = stage.getBoundingClientRect();
      go(cur + (e.clientX - r.left > r.width * .4 ? 1 : -1));
    });

    // ---------- 朗讀（同國語閱讀：瀏覽器內建 zh-TW，一句一句念、念到哪句就標亮；預設關，按了才念） ----------
    const synth = window.speechSynthesis || null; let sayOn = false, sayGen = 0;
    function zhVoice() { try { const v = synth.getVoices(); return v.filter(x => /^zh[-_]TW/i.test(x.lang))[0] || v.filter(x => /^zh[-_](HK|Hant)/i.test(x.lang))[0] || v.filter(x => /^zh/i.test(x.lang))[0] || null; } catch (e) { return null; } }
    function clearMarks() { document.querySelectorAll('.saying').forEach(n => n.classList.remove('saying')); }
    function sayStop(keep) { sayGen++; try { if (synth) synth.cancel(); } catch (e) { /* */ } clearMarks(); if (!keep) { sayOn = false; el('cm-tts').textContent = '🔊 朗讀'; el('cm-tts').classList.remove('on'); } }
    function sayNow() {
      if (!synth) return;
      const st = steps[cur]; let nodes;
      if (st.kind === 'panel') { const sec = book.querySelector(`[data-ci="${st.i}"]`); nodes = sec ? [...sec.querySelectorAll('.cm-cap,.cm-card,.cm-b')] : []; }
      else nodes = [...sheet.querySelectorAll('[data-say]')];
      const gen = ++sayGen, v = zhVoice(); let i = 0;
      (function next() {
        clearMarks();
        if (gen !== sayGen || i >= nodes.length) return;
        const n = nodes[i++], u = new SpeechSynthesisUtterance((n.getAttribute('data-say-text') || n.textContent).replace(/\n/g, ''));
        n.classList.add('saying'); u.lang = 'zh-TW'; if (v) u.voice = v; u.rate = .9;
        u.onend = u.onerror = () => { if (gen === sayGen) next(); };
        synth.speak(u);
      })();
    }
    el('cm-tts').addEventListener('click', () => { if (sayOn) { sayStop(); return; } sayOn = true; el('cm-tts').textContent = '⏹ 停止'; el('cm-tts').classList.add('on'); sayNow(); });
    if (!synth) el('cm-tts').disabled = true;
    window.addEventListener('pagehide', () => sayStop());

    document.body.insertAdjacentHTML('afterbegin', A.defs());
    el('cm-ep').textContent = `第 ${ep.ep} 話　${ep.title}`;
    // 測試用：直接跳到第幾步（?p=）
    const q = /[?&]p=(\d+)/.exec(location.search);
    if (window.__comicTest) window.__comic = { go, steps, get cur() { return cur; }, quiz, nPanels };
    go(q ? +q[1] : 0);
    return { go, steps };
  }
  window.KidsComic = { mount };
})();
