/* subjects.js — 科目切換列（國語／數學／社會／自然／英文／AI／遊戲）。英文＝原本的 app.js；其他科目由這支畫在 #subject。 */
(function () {
  'use strict';
  const SUBJ = [{ k: 'chinese', n: '國語', i: '📝' }, { k: 'math', n: '數學', i: '🔢' }, { k: 'social', n: '社會', i: '🌏' }, { k: 'science', n: '自然', i: '🔬' }, { k: 'english', n: '英文', i: '🔤' }, { k: 'ai', n: 'AI', i: '🤖' }, { k: 'game', n: '遊戲', i: '🎮' }];
  // 有活動卡片的科目：點卡片 → iframe 開正本頁面（有 href 的卡片改成整頁開，例如勇者島；icon 可放小 SVG）
  const ACTS = {
    math: [{ id: 'balance', title: '天平解方程式', desc: '用天平學加減方程式，可以自己出題，也有括號題', icon: '⚖️', src: 'math/balance.html' }],
    ai: [
      { id: 'hallucinate', title: 'AI 會唬爛', desc: 'AI 有時會很有自信地說錯。學會三招不被騙：自己查、問大人、多找一個地方對答案。', icon: '🤥', src: 'ai/hallucinate.html' },
      { id: 'ask-well', title: '怎麼問得好', desc: '同一件事，問法不同答案就差很多。練習講清楚、給背景、說形式，讓 AI 真的幫得上忙。', icon: '💬', src: 'ai/ask-well.html' },
      { id: 'secrets', title: '秘密不能說', desc: '分清楚哪些話可以跟 AI 或網路上的人說，哪些能找到你本人的資料要收好。', icon: '🔒', src: 'ai/secrets.html' }
    ],
    game: [{ id: 'scratch-td', title: 'Scratch 塔防（7 堂課）', desc: '用 iPad 上的 Scratch，一堂一堂做出自己的塔防遊戲：分身、變數、廣播、自己做的積木都會用到。每堂都能直接下載起始檔。', icon: '🏰', src: 'game/scratch-td/web/index.html' },
      { id: 'hero-island', title: '勇者島（試玩）', desc: '答題打怪、蓋自己的島、挑戰全站影子對手', icon: '<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" style="display:block;border-radius:12px"><rect width="64" height="64" fill="#EFEBDD"/><polygon points="20,12 24,12 52,64 0,64" fill="#5E8C6A" opacity=".45"/><polygon points="0,54 64,30 64,42 0,64" fill="#26302A"/><rect x="14" y="8" width="4" height="44" fill="#151714"/><polygon points="14,8 30,9 30,12 18,11" fill="#151714"/><circle cx="46" cy="49" r="4" fill="#E0352B"/></svg>', href: 'game/hero-island/' }]
  };
  const COLORS = ['c2', 'c4', 'c1', 'c5', 'c3'];
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
    const { k, sub } = parse(), s = SUBJ.find(x => x.k === k);
    if (!s) { location.replace('#home'); return; }
    bar.querySelectorAll('.stab').forEach(a => { const on = a.dataset.k === k; a.classList.toggle('on', on); a.setAttribute('aria-selected', on ? 'true' : 'false'); });
    const acts = ACTS[k], a = acts && acts.find(x => x.id === sub && !x.href);
    document.documentElement.classList.toggle('frame-mode', !!a);
    saveSubj(k);
    if (k === 'english') { box.hidden = true; box.innerHTML = ''; app.hidden = false; return; }
    app.hidden = true; box.hidden = false;
    if (a) box.innerHTML = `<div class="frame-top"><a class="btn" href="#s/${k}">← 回${s.n}</a><b>${a.icon} ${a.title}</b></div><div class="frame-wrap"><iframe src="${a.src}" title="${a.title}" allow="clipboard-write; web-share"></iframe></div>`;
    else if (acts) box.innerHTML = `<header class="top"><h1>${s.i} ${s.n}</h1></header><div class="tiles">${acts.map((x, i) => `<a class="tile ${COLORS[i % COLORS.length]}" href="${x.href || `#s/${k}/${x.id}`}"><span class="ti">${x.icon}</span><b>${x.title}</b><small>${x.desc}</small></a>`).join('')}</div>`;
    else box.innerHTML = `<header class="top"><h1>${s.i} ${s.n}</h1></header><div class="card center soon"><div class="soon-i">${s.i}</div><h2>${s.n}準備中，敬請期待！</h2><p class="muted">先去其他科目玩玩看吧 😊</p></div>`;
    window.scrollTo(0, 0); setH();
  }
  // 打開網站時沒有指定頁面 → 回到上次的科目
  const last = loadS().subject;
  if ((!location.hash || location.hash === '#') && last && last !== 'english' && SUBJ.some(s => s.k === last)) history.replaceState(null, '', '#s/' + last);
  window.addEventListener('hashchange', route);
  route();
})();
