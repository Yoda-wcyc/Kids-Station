/* subjects.js — 科目切換列（國語／數學／社會／歷史／自然／英文／AI／遊戲）。英文＝原本的 app.js；其他科目由這支畫在 #subject。
   社會、自然＝心智圖（mindmap/），每單元一張卡（MM_UNITS）。 */
(function () {
  'use strict';
  const SUBJ = [{ k: 'chinese', n: '國語', i: '📝' }, { k: 'math', n: '數學', i: '🔢' }, { k: 'social', n: '社會', i: '🌏' }, { k: 'history', n: '歷史', i: '🏛️' }, { k: 'science', n: '自然', i: '🔬' }, { k: 'english', n: '英文', i: '🔤' }, { k: 'ai', n: 'AI', i: '🤖' }, { k: 'game', n: '遊戲', i: '🎮' }];
  // 有活動卡片的科目：點卡片 → iframe 開正本頁面（有 href 的卡片改成整頁開，例如勇者島；icon 可放小 SVG）
  const ACTS = {
    // 2026-11-01：國語〈閱讀素養 100 篇〉（chinese/reading.html；L1～L4 循序解鎖，規格 kids-member/docs/CHINESE_READING_SPEC.md）
    // 2026-11-01：國語〈成語故事 100〉（chinese/idioms/idioms.html；規格 kids-member/docs/CHINESE_IDIOM_SPEC.md）
    chinese: [{ id: 'reading', title: '閱讀素養 100 篇', desc: () => zhDesc(), icon: '📚', src: 'chinese/reading.html' },
      { id: 'idioms', title: '成語故事 100', desc: () => cyDesc(), icon: '📜', src: 'chinese/idioms/idioms.html' }],
    math: [{ id: 'balance', title: '天平解方程式', desc: '用天平學加減方程式，可以自己出題，也有括號題', icon: '⚖️', src: 'math/balance.html', dk: 'math:balance' },
      { id: 'short-division', title: '短除法：最大公因數・最小公倍數', desc: '看短除法一步一步畫，再換你算：公因數、商、互質了停！兩個數、三個數都有，還有生活應用題', icon: '🧮', src: 'math/short-division.html', dk: 'math:sd' },
      // 課程地圖「短除法：應用題」直接開到 📝 應用題分頁（不另外列卡片）
      { id: 'short-division-word', title: '短除法：應用題', icon: '🧮', src: 'math/short-division.html?tab=word', hidden: true },
      // 2026-10-21：五上單元三〈倍數與公倍數〉（教學／練習／考試）＋〈乘法快算〉（考卷上算錯最多的乘法）
      { id: 'multiples', title: '倍數與公倍數', desc: '五上單元三：倍數判斷、範圍內的倍數、最小公倍數、四種應用題判斷（不超過／比它多／剛好／最少幾包），考試可選隨機考卷或紙本練習卷第一回、第二回（照原卷配分）', icon: '✖️', src: 'math/multiples.html', dk: 'math:mul' },
      { id: 'multiply', title: '乘法快算', desc: '九九、二位數×一位數、二位數×二位數、三位數×一位數：練習有拆解提示和直式格子，挑戰一輪 20 題計時', icon: '⚡', src: 'math/multiply.html', dk: 'math:mx' },
      // 2026-10-27：五上〈分數比較大小〉（教學／練習／考試）
      { id: 'fraction', title: '分數比較大小', desc: '分數條、數線看懂比大小：同分母、同分子、跟 1 跟一半比、通分、先約分、假分數化帶分數；按 ＞＜＝ 大按鈕，考試一份 100 分', icon: '🍰', src: 'math/fraction.html', dk: 'math:frc' }],
    // 2026-11-02：世界史漫畫（comics/；整頁開，閱讀不用登入；學習幣、完成標示、錯題庫、課程地圖、小助理等第 1 話看過再接）
    history: [{ id: 'comic-v1e1', title: '世界史漫畫 第 1 冊 古文明・第 1 話：寫下來，才算數！', desc: '試做｜阿凱和小禾搭時光搖搖車到 3800 年前的巴比倫：楔形文字、《漢摩拉比法典》，看完有重點、地圖和 5 題小測驗', icon: '📖', href: 'comics/v1e1.html' }],
    ai: [
      { id: 'hallucinate', title: 'AI 會唬爛', desc: 'AI 有時會很有自信地說錯。學會三招不被騙：自己查、問大人、多找一個地方對答案。', icon: '🤥', src: 'ai/hallucinate.html', dk: 'ai:hallucinate' },
      { id: 'ask-well', title: '怎麼問得好', desc: '同一件事，問法不同答案就差很多。練習講清楚、給背景、說形式，讓 AI 真的幫得上忙。', icon: '💬', src: 'ai/ask-well.html', dk: 'ai:ask-well' },
      { id: 'secrets', title: '秘密不能說', desc: '分清楚哪些話可以跟 AI 或網路上的人說，哪些能找到你本人的資料要收好。', icon: '🔒', src: 'ai/secrets.html', dk: 'ai:secrets' }
    ],
    game: [{ id: 'scratch-td', title: 'Scratch 塔防（7 堂課）', desc: '用 iPad 上的 Scratch，一堂一堂做出自己的塔防遊戲：分身、變數、廣播、自己做的積木都會用到。每堂都能直接下載起始檔。', icon: '🏰', src: 'game/scratch-td/web/index.html' },
      { id: 'hero-island', title: '勇者島（試玩）', desc: '答題打怪、蓋自己的島、挑戰全站影子對手', icon: '<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" style="display:block;border-radius:12px"><rect width="64" height="64" fill="#EFEBDD"/><polygon points="20,12 24,12 52,64 0,64" fill="#5E8C6A" opacity=".45"/><polygon points="0,54 64,30 64,42 0,64" fill="#26302A"/><rect x="14" y="8" width="4" height="44" fill="#151714"/><polygon points="14,8 30,9 30,12 18,11" fill="#151714"/><circle cx="46" cy="49" r="4" fill="#E0352B"/></svg>', href: 'game/hero-island/' },
    { id: 'hero-world', title: '勇者島 · 方塊世界', desc: '挖礦、合成、蓋房子，用練習賺來的幣買藍圖', icon: '<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" style="display:block;border-radius:12px"><rect width="64" height="64" fill="#EFEBDD"/><polygon points="32,10 54,21 32,32 10,21" fill="#3E6B3A"/><polygon points="10,21 32,32 32,56 10,45" fill="#8A6A48"/><polygon points="54,21 32,32 32,56 54,45" fill="#63492F"/><polygon points="10,21 32,32 32,36 10,25" fill="#3E6B3A"/><polygon points="54,21 32,32 32,36 54,25" fill="#2F5A34"/><circle cx="51" cy="11" r="4" fill="#E0352B"/></svg>', href: 'game/hero-world/' },
    { id: 'kids-town', title: '小朋友鎮（試玩）', desc: '在小鎮用英文生活：看醫生、點餐、買東西', icon: '<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" style="display:block;border-radius:12px"><rect width="64" height="64" fill="#EFEBDD"/><polygon points="12,30 32,14 52,30" fill="#C2443A"/><rect x="16" y="30" width="32" height="24" fill="#D9A63A"/><rect x="28" y="40" width="8" height="14" fill="#26302A"/><rect x="20" y="35" width="6" height="6" fill="#EFEBDD"/><rect x="38" y="35" width="6" height="6" fill="#EFEBDD"/></svg>', href: 'game/kids-town/' }]
  };
  // 社會、自然：心智圖，每個單元一張卡 → iframe 開 mindmap/<科>.html?u=<單元id>（引擎與資料在 mindmap/；標題要跟 mindmap/data 一致，smoke 會對）
  // 第 3 欄＝資料的 label（五下 2026-11-02 起，例「五下 單元一」；六上 11-02 起「六上 單元一」）：有就照它顯示、開頭是冊別；沒有＝五上，顯示「單元X」
  const MM_UNITS = {
    social: [['u1', '臺灣的位置與先民足跡'], ['u2', '臺灣登上國際舞臺'], ['u3', '成為清帝國的領土'], ['u4', '土地的利用與變遷'],
      ['u5', '日本統治下的臺灣', '五下 單元一'], ['u6', '走向自由民主之路', '五下 單元二'], ['u7', '多元文化共存共榮', '五下 單元三'], ['u8', '各地的發展與特色', '五下 單元四'], ['u9', '經濟的變遷與展望', '五下 單元五'],
      ['u10', '現代科技新生活', '六上 單元一'], ['u11', '聰明消費與理財', '六上 單元二'], ['u12', '生活中的各種規範', '六上 單元三'], ['u13', '共創地方新風貌', '六上 單元四'], ['u14', '世界文化在臺灣', '六上 單元五'],
      ['u15', '永續的經濟發展', '六下 單元一'], ['u16', '促進社會永續發展', '六下 單元二'], ['u17', '環境永續的地球村', '六下 單元三']],
    science: [['n1', '太陽與光'], ['n2', '植物世界'], ['n3', '水溶液'], ['n4', '力與運動'],
      ['n5', '探索星空的奧祕', '五下 單元一'], ['n6', '空氣與燃燒', '五下 單元二'], ['n7', '防止生鏽與保存食物', '五下 單元三'], ['n8', '揭祕動物的世界', '五下 單元四'],
      ['n9', '熱的影響與傳播', '六上 單元一'], ['n10', '多變的天氣', '六上 單元二'], ['n11', '發現大地的奧祕', '六上 單元三'], ['n12', '電磁與生活', '六上 單元四'],
      ['n13', '簡單機械', '六下 單元一'], ['n14', '生活中的聲音', '六下 單元二'], ['n15', '寰宇永續護地球', '六下 單元三']]
  };
  const NUMS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const mmLab = (x, i) => x[2] || '單元' + NUMS[i], mmBook = x => x[2] ? x[2].split(' ')[0] : '五上';
  // 卡片小字：背架構過了幾關＋複習提醒（kids_mm_progress，key＝'<科>:<單元id>'；最後過關後第 1、3、7 天）
  const mmDesc = (k, id) => {
    let u = null; try { u = (JSON.parse(localStorage.getItem('kids_mm_progress')) || {})[k + ':' + id]; } catch (e) { /* 私密模式 */ }
    const passed = u ? Object.keys(u.passedAt || {}).length : 0, R = [1, 3, 7], st = (u && u.reviewStep) || 0;
    const due = u && u.lastPassAt && st < R.length && (Date.now() - u.lastPassAt) / 864e5 >= R[st];
    return (passed ? `架構過了 ${passed}/4 關` : '') + (due ? (passed ? '｜' : '') + '⏰ 該複習架構囉' : '');
  };
  Object.keys(MM_UNITS).forEach(k => {
    ACTS[k] = MM_UNITS[k].map((x, i) => ({ id: x[0], title: `${mmLab(x, i)}　${x[1]}`, grp: mmBook(x), desc: () => mmDesc(k, x[0]), icon: '🗺️', src: `mindmap/${k}.html?u=${x[0]}`, dk: `mm:${k}:${x[0]}` }));
    // 📝 段考模擬（2026-11-01，mindmap/exam.js）：單元一＋二、三＋四各一份 30 題；不算單元完成（沒有 dk）
    ACTS[k].push({ id: 'mock', title: '📝 段考模擬', desc: '兩三個單元一份、30 題由易到難，可以選 40 分鐘限時', icon: '📝', src: `mindmap/${k}.html?mock=1` });
    // 🔁 今天要複習（2026-11-01）：錯題庫裡到期的題＋閃卡（間隔 1 → 3 → 7 天，規則在 kids-mistakes.js）；入口是科目首頁上方的按鈕（reviewBar），不另列卡片
    ACTS[k].push({ id: 'review', title: '今天要複習', icon: '🔁', src: `mindmap/${k}.html?review=1`, hidden: true });
  });
  const reviewBar = k => {
    if (!MM_UNITS[k] || !KM() || !KM().due) return '';
    let n = 0; try { n = KM().due(k).length; } catch (e) { }
    return n ? `<p class="center"><a class="btn primary big" id="mm-review" href="#s/${k}/review">🔁 今天要複習 ${n} 題</a></p>` : '<p class="center muted" id="mm-review">今天都複習完了 🎉</p>';
  };
  // 📕 錯題庫（kids-mistakes.js）：有題目的科目各一張卡 → #s/<科>/mistakes（清單免登入）；「只練錯題」→ #s/<科>/mistakes-go[-<單元>]
  //   社會／自然 → iframe mindmap/<科>.html?mistakes=1[&u=單元]；數學 → iframe math/balance.html?mistakes=1（錯題全是短除法 p.type 'gcd'／應用題 'gcdword' 時改開
  //   math/short-division.html?mistakes=1（只有應用題時 ?mistakes=word）；都有時天平做完有「接著練短除法錯題」，短除法做完有「接著練應用題錯題」）；AI → 在這頁重答（KidsMistakes.aiPlay）
  //   2026-10-21：倍數（p.type 'multiples'）→ math/multiples.html?mistakes=1、乘法（'multiply'）→ math/multiply.html?mistakes=1；順序＝天平 → 短除法 → 應用題 → 倍數 → 乘法，
  //   每一頁做完都有「接著練…錯題」（KidsMistakes.mathMore）；2026-10-27：分數（'fraction'）→ math/fraction.html?mistakes=1，排在乘法後面
  const MK_SUBJ = ['chinese', 'social', 'science', 'math', 'ai'];   // chinese → iframe chinese/reading.html?mistakes=1（2026-11-01；閱讀和成語的錯題都在這頁練）
  // 國語卡片小字：完成幾篇（kids_done.zh 跟著同步＋本機 kids_zh_reading）
  const zhDesc = () => { let n = 0; try { const d = (JSON.parse(localStorage.getItem('kids_done')) || {}).zh || {}, l = JSON.parse(localStorage.getItem('kids_zh_reading')) || {}; n = new Set(Object.keys(d).concat(Object.keys(l).filter(k => l[k] && l[k].done))).size; } catch (e) { } return '記敘、說明、童詩、新聞、圖表、多篇比較…從讀懂字面到深度思考，分 L1～L4 一級一級往上' + (n ? `｜已完成 ${n} 篇` : ''); };
  // 成語卡片小字：完成幾個成語（kids_done.cy 跟著同步＋本機 kids_zh_idioms；只數 cy001～cy100）
  const cyDesc = () => { let n = 0; try { const d = (JSON.parse(localStorage.getItem('kids_done')) || {}).cy || {}, l = JSON.parse(localStorage.getItem('kids_zh_idioms')) || {}; n = new Set(Object.keys(d).concat(Object.keys(l).filter(k => l[k] && l[k].done)).filter(k => /^cy\d{3}$/.test(k))).size; } catch (e) { } return '守株待兔、塞翁失馬…讀成語故事、分辨用法、用在生活情境，還有單元測驗和總測驗' + (n ? `｜已完成 ${n} 個成語` : ''); };
  const KM = () => window.KidsMistakes;
  const mathMkSrc = () => {
    let l = []; try { l = KM().list('math'); } catch (e) { }
    const n = t => l.filter(e => e.p && e.p.type === t).length, g = n('gcd'), w = n('gcdword'), m = n('multiples'), x = n('multiply'), f = n('fraction');
    return !l.length || g + w + m + x + f < l.length ? 'math/balance.html?mistakes=1' : g ? 'math/short-division.html?mistakes=1' : w ? 'math/short-division.html?mistakes=word' : m ? 'math/multiples.html?mistakes=1' : x ? 'math/multiply.html?mistakes=1' : 'math/fraction.html?mistakes=1';
  };
  const mkDesc = k => { let n = 0; try { n = KM() ? KM().count(k) : 0; } catch (e) { } return n ? `有 ${n} 題等你復仇` : '目前沒有錯題 🎉'; };
  MK_SUBJ.forEach(k => { if (ACTS[k]) ACTS[k].push({ id: 'mistakes', title: '錯題庫', desc: () => mkDesc(k), icon: '📕', href: `#s/${k}/mistakes` }); });
  // 單元卡上的完成狀態（kids-done.js／completion.js；沒載入就不顯示）
  const doneTag = dk => { try { const r = dk && window.KidsDone && KidsDone.result(dk); return r ? `<small class="tb-st tb-st-${r.status}">${KidsCompletion.statusText(r)}</small>` : ''; } catch (e) { return ''; } };
  const COLORS = ['c2', 'c4', 'c1', 'c5', 'c3'], bookOpen = {};
  const bar = document.getElementById('subjects'), box = document.getElementById('subject'), app = document.getElementById('app');
  if (!bar || !box || !app) return;
  const loadS = () => { try { return JSON.parse(localStorage.getItem('ke_settings')) || {}; } catch (e) { return {}; } };
  const saveSubj = k => { try { const s = loadS(); if (s.subject === k) return; s.subject = k; localStorage.setItem('ke_settings', JSON.stringify(s)); } catch (e) { /* 私密模式 */ } };
  const parse = () => { const m = (location.hash || '').match(/^#s\/([a-z]+)(?:\/([a-z0-9-]+))?/); return m ? { k: m[1], sub: m[2] || '' } : { k: 'english', sub: '' }; };

  window.KidsSubjects = SUBJ;   // 首頁的全部科目卡（app.js）
  document.body.classList.add('has-subjects');
  bar.innerHTML = `<div class="subj-in"><a class="brand" href="#home" aria-label="回首頁">🏠 小朋友學習站</a><div class="stabs" role="tablist">${SUBJ.map(s => `<a class="stab" role="tab" data-k="${s.k}" href="${s.k === 'english' ? '#en' : '#s/' + s.k}"><span>${s.i}</span><b>${s.n}</b></a>`).join('')}</div></div>`;
  const setH = () => document.documentElement.style.setProperty('--subj-h', bar.offsetHeight + 'px');
  window.addEventListener('resize', setH); setH();

  function route() {
    const { k, sub } = parse(), s = SUBJ.find(x => x.k === k), h0 = location.hash, isHome = !h0 || h0 === '#' || h0 === '#home';
    if (!s) { location.replace('#home'); return; }
    document.body.classList.toggle('home-page', isHome);   // 首頁有 8 張科目卡，分頁列先收起來
    bar.querySelectorAll('.stab').forEach(a => { const on = !isHome && a.dataset.k === k; a.classList.toggle('on', on); a.setAttribute('aria-selected', on ? 'true' : 'false'); });
    const acts = ACTS[k], a = acts && acts.find(x => x.id === sub && !x.href);
    document.documentElement.classList.toggle('frame-mode', !!a);
    saveSubj(k);
    if (k === 'english') { box.hidden = true; box.innerHTML = ''; app.hidden = false; setH(); return; }
    app.hidden = true; box.hidden = false;
    const mk = MK_SUBJ.includes(k) && KM() && /^mistakes(-go)?(?:-([a-z0-9]+))?$/.exec(sub);
    if (mk) {
      const unit = mk[2] && (MM_UNITS[k] || []).some(x => x[0] === mk[2]) ? mk[2] : '', back = `#s/${k}/mistakes${unit ? '-' + unit : ''}`;
      if (!mk[1] || k === 'ai') {
        document.documentElement.classList.remove('frame-mode');
        if (mk[1]) KM().aiPlay(box); else KM().page(box, { k, n: s.n, units: MM_UNITS[k], unit });
      } else {
        document.documentElement.classList.add('frame-mode');
        const src = k === 'math' ? mathMkSrc() : k === 'chinese' ? 'chinese/reading.html?mistakes=1' : `mindmap/${k}.html?mistakes=1${unit ? '&u=' + unit : ''}`;
        box.innerHTML = `<div class="frame-top"><a class="btn" href="${back}">← 回錯題庫</a><b>📕 ${s.n}錯題練習</b></div><div class="frame-wrap"><iframe src="${src}" title="${s.n}錯題練習" allow="clipboard-write; web-share"></iframe></div>`;
      }
      window.scrollTo(0, 0); setH(); return;
    }
    if (a) box.innerHTML = `<div class="frame-top"><a class="btn" href="#s/${k}">← 回${s.n}</a><b>${a.icon} ${a.title}</b></div><div class="frame-wrap"><iframe src="${a.src}" title="${a.title}" allow="clipboard-write; web-share"></iframe></div>`;
    else if (acts) {
      // 連續同一冊（grp：五上／五下）的卡片放一區、上面標冊別；沒有 grp 的（段考模擬、錯題庫）自成一區不加標題
      let ci = 0;
      const secs = acts.filter(x => !x.hidden).reduce((a, x) => { const g = x.grp || ''; if (!a.length || a[a.length - 1].g !== g) a.push({ g, xs: [] }); a[a.length - 1].xs.push(x); return a; }, []);
      const tilesOf = xs => `<div class="tiles tiles-even">${xs.map(x => { const d = typeof x.desc === 'function' ? x.desc() : x.desc; return `<a class="tile ${COLORS[ci++ % COLORS.length]}" href="${x.href || `#s/${k}/${x.id}`}"><span class="ti">${x.icon}</span><b>${x.title}</b>${d ? `<small>${d}</small>` : ''}${doneTag(x.dk)}</a>`; }).join('')}</div>`;
      // 冊別收合：預設打開第一冊還沒學完的（使用者開關過就照他的）
      const unfinished = sec => sec.xs.some(x => { try { const r = x.dk && window.KidsDone && KidsDone.result(x.dk); return !r || r.status !== 'done'; } catch (e) { return true; } });
      const firstOpen = (secs.find(sec => sec.g && unfinished(sec)) || secs.find(sec => sec.g) || {}).g;
      const isOpen = g => (bookOpen[k + ':' + g] != null ? bookOpen[k + ':' + g] : g === firstOpen);
      box.innerHTML = `<header class="top"><h1>${s.i} ${s.n}</h1></header>${reviewBar(k)}${secs.map(sec => sec.g ? `<details class="book" data-g="${sec.g}"${isOpen(sec.g) ? ' open' : ''}><summary class="tiles-h">📗 ${sec.g}</summary>${tilesOf(sec.xs)}</details>` : tilesOf(sec.xs)).join('')}<p class="center"><a class="btn" href="map.html">🗺️ 課程地圖：看哪些單元學完了</a></p>`;
    }
    else box.innerHTML = `<header class="top"><h1>${s.i} ${s.n}</h1></header><div class="card center soon"><div class="soon-i">${s.i}</div><h2>${s.n}準備中，敬請期待！</h2><p class="muted">先去其他科目玩玩看吧 😊</p></div>`;
    window.scrollTo(0, 0); setH();
  }
  // 打開網站一律到首頁（今天的清單）；冊別收合的開關記在這一頁
  box.addEventListener('toggle', e => { const d = e.target; if (d && d.classList && d.classList.contains('book')) bookOpen[parse().k + ':' + d.dataset.g] = d.open; }, true);
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
