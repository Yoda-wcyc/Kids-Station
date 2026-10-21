/* subjects.js — 科目切換列（國語／數學／社會／自然／英文／AI／遊戲）。英文＝原本的 app.js；其他科目由這支畫在 #subject。
   社會、自然＝心智圖（mindmap/），每單元一張卡（MM_UNITS）。 */
(function () {
  'use strict';
  const SUBJ = [{ k: 'chinese', n: '國語', i: '📝' }, { k: 'math', n: '數學', i: '🔢' }, { k: 'social', n: '社會', i: '🌏' }, { k: 'science', n: '自然', i: '🔬' }, { k: 'english', n: '英文', i: '🔤' }, { k: 'ai', n: 'AI', i: '🤖' }, { k: 'game', n: '遊戲', i: '🎮' }];
  // 有活動卡片的科目：點卡片 → iframe 開正本頁面（有 href 的卡片改成整頁開，例如勇者島；icon 可放小 SVG）
  const ACTS = {
    math: [{ id: 'balance', title: '天平解方程式', desc: '用天平學加減方程式，可以自己出題，也有括號題', icon: '⚖️', src: 'math/balance.html', dk: 'math:balance' },
      { id: 'short-division', title: '短除法：最大公因數・最小公倍數', desc: '看短除法一步一步畫，再換你算：公因數、商、互質了停！兩個數、三個數都有，還有生活應用題', icon: '🧮', src: 'math/short-division.html', dk: 'math:sd' },
      // 課程地圖「短除法：應用題」直接開到 📝 應用題分頁（不另外列卡片）
      { id: 'short-division-word', title: '短除法：應用題', icon: '🧮', src: 'math/short-division.html?tab=word', hidden: true },
      // 2026-10-21：五上單元三〈倍數與公倍數〉（教學／練習／考試）＋〈乘法快算〉（考卷上算錯最多的乘法）
      { id: 'multiples', title: '倍數與公倍數', desc: '五上單元三：倍數判斷、範圍內的倍數、最小公倍數、四種應用題判斷（不超過／比它多／剛好／最少幾包），考試可選隨機考卷或紙本練習卷第一回、第二回（照原卷配分）', icon: '✖️', src: 'math/multiples.html', dk: 'math:mul' },
      { id: 'multiply', title: '乘法快算', desc: '九九、二位數×一位數、二位數×二位數、三位數×一位數：練習有拆解提示和直式格子，挑戰一輪 20 題計時', icon: '⚡', src: 'math/multiply.html', dk: 'math:mx' }],
    ai: [
      { id: 'hallucinate', title: 'AI 會唬爛', desc: 'AI 有時會很有自信地說錯。學會三招不被騙：自己查、問大人、多找一個地方對答案。', icon: '🤥', src: 'ai/hallucinate.html', dk: 'ai:hallucinate' },
      { id: 'ask-well', title: '怎麼問得好', desc: '同一件事，問法不同答案就差很多。練習講清楚、給背景、說形式，讓 AI 真的幫得上忙。', icon: '💬', src: 'ai/ask-well.html', dk: 'ai:ask-well' },
      { id: 'secrets', title: '秘密不能說', desc: '分清楚哪些話可以跟 AI 或網路上的人說，哪些能找到你本人的資料要收好。', icon: '🔒', src: 'ai/secrets.html', dk: 'ai:secrets' }
    ],
    game: [{ id: 'scratch-td', title: 'Scratch 塔防（7 堂課）', desc: '用 iPad 上的 Scratch，一堂一堂做出自己的塔防遊戲：分身、變數、廣播、自己做的積木都會用到。每堂都能直接下載起始檔。', icon: '🏰', src: 'game/scratch-td/web/index.html' },
      { id: 'hero-island', title: '勇者島（試玩）', desc: '答題打怪、蓋自己的島、挑戰全站影子對手', icon: '<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" style="display:block;border-radius:12px"><rect width="64" height="64" fill="#EFEBDD"/><polygon points="20,12 24,12 52,64 0,64" fill="#5E8C6A" opacity=".45"/><polygon points="0,54 64,30 64,42 0,64" fill="#26302A"/><rect x="14" y="8" width="4" height="44" fill="#151714"/><polygon points="14,8 30,9 30,12 18,11" fill="#151714"/><circle cx="46" cy="49" r="4" fill="#E0352B"/></svg>', href: 'game/hero-island/' },
    { id: 'hero-world', title: '勇者島 · 方塊世界', desc: '挖礦、合成、蓋房子，用練習賺來的幣買藍圖', icon: '<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" style="display:block;border-radius:12px"><rect width="64" height="64" fill="#EFEBDD"/><polygon points="32,10 54,21 32,32 10,21" fill="#3E6B3A"/><polygon points="10,21 32,32 32,56 10,45" fill="#8A6A48"/><polygon points="54,21 32,32 32,56 54,45" fill="#63492F"/><polygon points="10,21 32,32 32,36 10,25" fill="#3E6B3A"/><polygon points="54,21 32,32 32,36 54,25" fill="#2F5A34"/><circle cx="51" cy="11" r="4" fill="#E0352B"/></svg>', href: 'game/hero-world/' }]
  };
  // 社會、自然：心智圖，每個單元一張卡 → iframe 開 mindmap/<科>.html?u=<單元id>（引擎與資料在 mindmap/；標題要跟 mindmap/data 一致，smoke 會對）
  const MM_UNITS = {
    social: [['u1', '臺灣的位置與先民足跡'], ['u2', '臺灣登上國際舞臺'], ['u3', '成為清帝國的領土'], ['u4', '土地的利用與變遷']],
    science: [['n1', '太陽與光'], ['n2', '植物世界'], ['n3', '水溶液'], ['n4', '力與運動']]
  };
  const NUMS = ['一', '二', '三', '四', '五', '六', '七', '八'];
  // 卡片小字：背架構過了幾關＋複習提醒（kids_mm_progress，key＝'<科>:<單元id>'；最後過關後第 1、3、7 天）
  const mmDesc = (k, id) => {
    let u = null; try { u = (JSON.parse(localStorage.getItem('kids_mm_progress')) || {})[k + ':' + id]; } catch (e) { /* 私密模式 */ }
    const passed = u ? Object.keys(u.passedAt || {}).length : 0, R = [1, 3, 7], st = (u && u.reviewStep) || 0;
    const due = u && u.lastPassAt && st < R.length && (Date.now() - u.lastPassAt) / 864e5 >= R[st];
    return '📖 看重點・🧠 背架構・✏️ 考考自己・📝 練習題' + (passed ? `｜架構過了 ${passed}/4 關` : '') + (due ? '｜⏰ 該複習架構囉' : '');
  };
  Object.keys(MM_UNITS).forEach(k => {
    ACTS[k] = MM_UNITS[k].map(([id, t], i) => ({ id, title: `單元${NUMS[i]}　${t}`, desc: () => mmDesc(k, id), icon: '🗺️', src: `mindmap/${k}.html?u=${id}`, dk: `mm:${k}:${id}` }));
  });
  // 📕 錯題庫（kids-mistakes.js）：有題目的科目各一張卡 → #s/<科>/mistakes（清單免登入）；「只練錯題」→ #s/<科>/mistakes-go[-<單元>]
  //   社會／自然 → iframe mindmap/<科>.html?mistakes=1[&u=單元]；數學 → iframe math/balance.html?mistakes=1（錯題全是短除法 p.type 'gcd'／應用題 'gcdword' 時改開
  //   math/short-division.html?mistakes=1（只有應用題時 ?mistakes=word）；都有時天平做完有「接著練短除法錯題」，短除法做完有「接著練應用題錯題」）；AI → 在這頁重答（KidsMistakes.aiPlay）
  //   2026-10-21：倍數（p.type 'multiples'）→ math/multiples.html?mistakes=1、乘法（'multiply'）→ math/multiply.html?mistakes=1；順序＝天平 → 短除法 → 應用題 → 倍數 → 乘法，
  //   每一頁做完都有「接著練…錯題」（KidsMistakes.mathMore）
  const MK_SUBJ = ['social', 'science', 'math', 'ai'];
  const KM = () => window.KidsMistakes;
  const mathMkSrc = () => {
    let l = []; try { l = KM().list('math'); } catch (e) { }
    const n = t => l.filter(e => e.p && e.p.type === t).length, g = n('gcd'), w = n('gcdword'), m = n('multiples'), x = n('multiply');
    return !l.length || g + w + m + x < l.length ? 'math/balance.html?mistakes=1' : g ? 'math/short-division.html?mistakes=1' : w ? 'math/short-division.html?mistakes=word' : m ? 'math/multiples.html?mistakes=1' : 'math/multiply.html?mistakes=1';
  };
  const mkDesc = k => { let n = 0; try { n = KM() ? KM().count(k) : 0; } catch (e) { } return n ? `有 ${n} 題等你復仇` : '目前沒有錯題 🎉'; };
  MK_SUBJ.forEach(k => { if (ACTS[k]) ACTS[k].push({ id: 'mistakes', title: '錯題庫', desc: () => mkDesc(k), icon: '📕', href: `#s/${k}/mistakes` }); });
  // 單元卡上的完成狀態（kids-done.js／completion.js；沒載入就不顯示）
  const doneTag = dk => { try { const r = dk && window.KidsDone && KidsDone.result(dk); return r ? `<small class="tb-st tb-st-${r.status}">${KidsCompletion.statusText(r)}</small>` : ''; } catch (e) { return ''; } };
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
    const mk = MK_SUBJ.includes(k) && KM() && /^mistakes(-go)?(?:-([a-z0-9]+))?$/.exec(sub);
    if (mk) {
      const unit = mk[2] && (MM_UNITS[k] || []).some(x => x[0] === mk[2]) ? mk[2] : '', back = `#s/${k}/mistakes${unit ? '-' + unit : ''}`;
      if (!mk[1] || k === 'ai') {
        document.documentElement.classList.remove('frame-mode');
        if (mk[1]) KM().aiPlay(box); else KM().page(box, { k, n: s.n, units: MM_UNITS[k], unit });
      } else {
        document.documentElement.classList.add('frame-mode');
        const src = k === 'math' ? mathMkSrc() : `mindmap/${k}.html?mistakes=1${unit ? '&u=' + unit : ''}`;
        box.innerHTML = `<div class="frame-top"><a class="btn" href="${back}">← 回錯題庫</a><b>📕 ${s.n}錯題練習</b></div><div class="frame-wrap"><iframe src="${src}" title="${s.n}錯題練習" allow="clipboard-write; web-share"></iframe></div>`;
      }
      window.scrollTo(0, 0); setH(); return;
    }
    if (a) box.innerHTML = `<div class="frame-top"><a class="btn" href="#s/${k}">← 回${s.n}</a><b>${a.icon} ${a.title}</b></div><div class="frame-wrap"><iframe src="${a.src}" title="${a.title}" allow="clipboard-write; web-share"></iframe></div>`;
    else if (acts) box.innerHTML = `<header class="top"><h1>${s.i} ${s.n}</h1></header><div class="tiles">${acts.filter(x => !x.hidden).map((x, i) => `<a class="tile ${COLORS[i % COLORS.length]}" href="${x.href || `#s/${k}/${x.id}`}"><span class="ti">${x.icon}</span><b>${x.title}</b><small>${typeof x.desc === 'function' ? x.desc() : x.desc}</small>${doneTag(x.dk)}</a>`).join('')}</div><p class="center"><a class="btn" href="map.html">🗺️ 課程地圖：看哪些單元學完了</a></p>`;
    else box.innerHTML = `<header class="top"><h1>${s.i} ${s.n}</h1></header><div class="card center soon"><div class="soon-i">${s.i}</div><h2>${s.n}準備中，敬請期待！</h2><p class="muted">先去其他科目玩玩看吧 😊</p></div>`;
    window.scrollTo(0, 0); setH();
  }
  // 打開網站時沒有指定頁面 → 回到上次的科目
  const last = loadS().subject;
  if ((!location.hash || location.hash === '#') && last && last !== 'english' && SUBJ.some(s => s.k === last)) history.replaceState(null, '', '#s/' + last);
  window.addEventListener('hashchange', route);
  // 帳號同步把別台的心智圖過關紀錄合併進來：正在看單元卡（不是開著 iframe）就重畫，卡片上的「過了幾關」才會是新的
  // （AI 錯題正在重答時不重畫，免得打斷）
  // 2026-10-19：改聽 'kids-sync-updated'（自動同步輪詢合併到新資料時發；作答中 sync.js 會先扣著）；錯題庫清單頁也會跟著更新題數
  const redrawTiles = () => { if (!box.hidden && !box.querySelector('iframe') && !/\/mistakes-go/.test(location.hash)) route(); };
  window.addEventListener('kids-sync-updated', redrawTiles);
  // 單元完成狀態：kids-done.js 比這支晚載入，載完再畫一次；本機紀錄變了（子框寫進來的 storage 事件）也重畫卡片
  window.addEventListener('kids-done-changed', redrawTiles);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', redrawTiles);
  route();
})();
