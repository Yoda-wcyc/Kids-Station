/* subjects.js — 科目切換列（國語／數學／社會／自然／英文）。英文＝原本的 app.js；其他科目由這支畫在 #subject。 */
(function () {
  'use strict';
  const SUBJ = [{ k: 'chinese', n: '國語', i: '📝' }, { k: 'math', n: '數學', i: '🔢' }, { k: 'social', n: '社會', i: '🌏' }, { k: 'science', n: '自然', i: '🔬' }, { k: 'english', n: '英文', i: '🔤' }];
  const MATH = [{ id: 'balance', title: '天平解方程式', desc: '用天平學加減方程式，可以自己出題，也有括號題', icon: '⚖️', src: 'math/balance.html' }];
  const bar = document.getElementById('subjects'), box = document.getElementById('subject'), app = document.getElementById('app');
  if (!bar || !box || !app) return;
  const loadS = () => { try { return JSON.parse(localStorage.getItem('ke_settings')) || {}; } catch (e) { return {}; } };
  const saveSubj = k => { try { const s = loadS(); if (s.subject === k) return; s.subject = k; localStorage.setItem('ke_settings', JSON.stringify(s)); } catch (e) { /* 私密模式 */ } };
  const parse = () => { const m = (location.hash || '').match(/^#s\/([a-z]+)(?:\/([a-z0-9-]+))?/); return m ? { k: m[1], sub: m[2] || '' } : { k: 'english', sub: '' }; };

  document.body.classList.add('has-subjects');
  bar.innerHTML = `<div class="subj-in"><b class="brand">小朋友學習站</b><div class="stabs" role="tablist">${SUBJ.map(s => `<a class="stab" role="tab" data-k="${s.k}" href="${s.k === 'english' ? '#home' : '#s/' + s.k}"><span>${s.i}</span><b>${s.n}</b></a>`).join('')}</div></div>`;
  const setH = () => document.documentElement.style.setProperty('--subj-h', bar.offsetHeight + 'px');
  window.addEventListener('resize', setH); setH();

  function route() {
    const { k, sub } = parse();
    bar.querySelectorAll('.stab').forEach(a => { const on = a.dataset.k === k; a.classList.toggle('on', on); a.setAttribute('aria-selected', on ? 'true' : 'false'); });
    const frame = k === 'math' && MATH.some(a => a.id === sub);
    document.documentElement.classList.toggle('frame-mode', frame);
    saveSubj(k);
    if (k === 'english') { box.hidden = true; box.innerHTML = ''; app.hidden = false; return; }
    app.hidden = true; box.hidden = false;
    if (k === 'math') {
      const a = MATH.find(x => x.id === sub);
      box.innerHTML = a
        ? `<div class="frame-top"><a class="btn" href="#s/math">← 回數學</a><b>${a.icon} ${a.title}</b></div><div class="frame-wrap"><iframe src="${a.src}" title="${a.title}" allow="clipboard-write; web-share"></iframe></div>`
        : `<header class="top"><h1>🔢 數學</h1></header><div class="tiles">${MATH.map(x => `<a class="tile c2" href="#s/math/${x.id}"><span class="ti">${x.icon}</span><b>${x.title}</b><small>${x.desc}</small></a>`).join('')}</div>`;
    } else {
      const s = SUBJ.find(x => x.k === k);
      if (!s) { location.replace('#home'); return; }
      box.innerHTML = `<header class="top"><h1>${s.i} ${s.n}</h1></header><div class="card center soon"><div class="soon-i">${s.i}</div><h2>${s.n}準備中，敬請期待！</h2><p class="muted">先去其他科目玩玩看吧 😊</p></div>`;
    }
    window.scrollTo(0, 0); setH();
  }
  // 打開網站時沒有指定頁面 → 回到上次的科目
  const last = loadS().subject;
  if ((!location.hash || location.hash === '#') && last && last !== 'english' && SUBJ.some(s => s.k === last)) history.replaceState(null, '', '#s/' + last);
  window.addEventListener('hashchange', route);
  route();
})();
