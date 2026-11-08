/* assistant-core.js — 🦉 學習小助理（2026-11-01）。純函式：不碰 DOM／localStorage／網路；瀏覽器（window.KidsAssistant）與 Node 共用（node test/assistant.test.js）。
   畫面在 assistant-ui.js（首頁卡片、assistant.html、家長頁「本週學習摘要」）；這支只把「各科紀錄的快照」算成：
     subjects 各科進度、tasks 今日任務（最多 3 項）、weak 比較弱的地方（最多 5 項）、next 還沒開始的下一步、progress 本週 vs 上週、cheer 鼓勵語、town 小朋友鎮（今天／這 7 天在遊戲裡答了幾題、哪些職業和任務）。
   只讀不寫學習紀錄。單元完成的判定一律問 completion.js（KidsCompletion），這裡不另外訂規則。

   快照 snap（全部可省略；新帳號就是全部空的）：
     now           現在（毫秒）
     data, ctx     completion.js 的 build(data, ctx)（KidsDone.data()／ctx()：課本、單字…、ke_learned、ke_log、kids_done、kids_mm_progress、kids_mm_blanks）
     mk            kids_mistakes（社會／自然／數學／AI／國語錯題，entry {c,w,t,u,p,due?}，墓碑 {d:1}；社會、自然的 due＝🔁 下次到期的日子，沒有＝今天到期）
     keMk          ke_mistakes（英文錯題，key＝題號）
     seen          kids_coin_seen（kids-coins.js 每次作答補記：{科:{t:最後作答時間, d:[最近 21 天有作答的日期]}}；這台才有、不同步）
     zhLocal       kids_zh_reading（國語閱讀本機細節）
     exam          kids_mm_exam（社會／自然單元測驗分數：{'<科>:<單元>':{best,last,n,at}}；mock-*、_seen 不看）
     wordLv        kids_word_lv（數學應用題循序漸進的難度）
     daily         今日清單 KidsDaily.today()：{rows:[{k,name,left,done}], allDone}｜null（不知道就不排序）
     nick          暱稱（打招呼用）
     prevCheer     上一次用的鼓勵語 id（不連續重複）
     rand          亂數（測試可固定）
   「最後練習時間」：取各科所有帶時間的紀錄的最大值（作答紀錄、錯題 t/u、心智圖過關、完成紀錄、學會時間、kids_coin_seen），
   所以換到另一台（kids_coin_seen 不同步）也大致對得上。 */
(function (root) {
  'use strict';
  const KC = root.KidsCompletion || (typeof require === 'function' ? require('./completion.js') : null);

  // ================= 可調常數（優先順序規則） =================
  const RULES = {
    MK_SUBJ: 5,          // 一科錯題 ≥ 5 題 → 「只練錯題」
    MK_UNIT: 3,          // 社會／自然同一單元錯題 ≥ 3 題 → 只練那個單元的錯題
    STALE_DAYS: 7,       // 超過 7 天沒碰 → 複習一輪
    MAX_TASKS: 3,        // 今日任務最多 3 項（同一科最多 1 項）
    MAX_WEAK: 5,         // 比較弱的地方最多 5 項
    WEAK_MIN: 3,         // 同一類錯題 ≥ 3 題才列為「比較弱」
    WEAK_PER_SUBJ: 2,    // 比較弱的地方：同一科最多 2 項
    EXAM_WEAK: 70,       // 社會／自然單元測驗最近一次 < 70 分 → 列為比較弱
    NEXT_MAX: 4,         // 還沒開始的：最多列 4 科的下一步
    COMEBACK_DAYS: 4,    // 隔 4 天以上回來 → 「歡迎回來」
    MANY_WRONG: 8,       // 今天答錯 ≥ 8 題 → 安慰＋鼓勵
    STREAK_MIN: 2,       // 連續 2 天以上才講連續天數
    GREAT_PCT: 80,       // 完成度 ≥ 80% → 很棒
    FRESH_DAYS: 3,       // 3 天內練過、沒有錯題 → 很棒
    TODAY_PENALTY: 2     // 今天已經練過的科目，任務優先順序往後 2 級（各科輪流）
  };
  const PRI = { mistakes: 2, review: 2, stale: 3, finish: 4, start: 5 };   // 數字小＝先做；🔁 到期複習放在「錯題多」的位置
  const MINUTES = { stale: 10, finish: 10, start: 10, mkEach: 0.5, mkMin: 3, mkMax: 10 };
  const DAY = 864e5, TPE = 8 * 3600e3;
  const SPACED = ['social', 'science'];   // 🔁 隔天複習（間隔 1 → 3 → 7 天，kids-mistakes.js）只開在社會、自然

  // ================= 科目 =================
  const SUBJ = [
    { k: 'chinese', name: '國語', icon: '📝', home: 'index.html#s/chinese/reading', mk: 'index.html#s/chinese/mistakes' },
    { k: 'math', name: '數學', icon: '🔢', home: 'index.html#s/math', mk: 'index.html#s/math/mistakes' },
    { k: 'social', name: '社會', icon: '🌏', home: 'index.html#s/social', mk: 'index.html#s/social/mistakes' },
    { k: 'science', name: '自然', icon: '🔬', home: 'index.html#s/science', mk: 'index.html#s/science/mistakes' },
    { k: 'english', name: '英文', icon: '🔤', home: 'index.html#tb', mk: 'index.html#mistakes' },
    { k: 'ai', name: 'AI', icon: '🤖', home: 'index.html#s/ai', mk: 'index.html#s/ai/mistakes' }
  ];
  const SK = SUBJ.map(s => s.k), SBY = Object.fromEntries(SUBJ.map(s => [s.k, s]));
  const STATUS = { great: '🌟 很棒', steady: '👍 穩定', push: '💪 加油中', fresh: '🚀 準備出發' };
  const ZH_TOTAL = 100;   // 國語〈閱讀素養 100 篇〉（沒載入目錄時用）

  // ================= 解法庫（弱點類型 → 具體步驟；每一步都是站上真的有的功能） =================
  // {unit}＝那個單元的頁面、{mk}＝錯題庫；href／href2 是兩顆直達按鈕
  const SOLUTIONS = {
    mm: { steps: ['📖 進單元先按「看重點」，把重點讀一遍', '🧠 再做「背架構」第 1 關，把卡片放回心智圖', '📕 最後到錯題庫按「只練錯題」；之後每天按「🔁 今天要複習」，隔 1、3、7 天都答對就畢業 🎓'],
      href: '{unit}', btn: '📖 去看重點', href2: '{mk}', btn2: '📕 只練錯題' },
    mathWord: { steps: ['✏️ 讀題時先把題目裡的數字圈起來（用紙筆或手指點）', '🖍️ 在紙上畫一張小圖：誰有多少、要分成幾份、問的是什麼', '⭐ 練習會從 ★ 最簡單的題目開始，先把簡單的穩穩做對，再往上', '📕 到數學錯題庫按「只練錯題」再做一次'],
      href: '{mk}', btn: '📕 只練錯題', href2: '{unit}', btn2: '✏️ 回去練習' },
    mathFraction: { steps: ['🍰 先到「分數比較大小」的 📖 教學，用分數條把兩個分數排在一起比', '✏️ 應用題先把題目裡的分數圈起來，想一想「誰比較多」', '📕 到數學錯題庫按「只練錯題」再做一次'],
      href: 'index.html#s/math/fraction', btn: '🍰 去看分數條', href2: '{mk}', btn2: '📕 只練錯題' },
    mathCalc: { steps: ['{how}', '📕 到數學錯題庫按「只練錯題」，同一題連續答對 3 次就畢業 🎓', '🐢 算慢一點沒關係，每一步寫清楚再按答案'],
      href: '{mk}', btn: '📕 只練錯題', href2: '{unit}', btn2: '📖 回去看看' },
    enSpell: { steps: ['🔊 先聽發音：在單字卡上點一下英文，就會唸給你聽', '✂️ 拆音節：跟著唸，一段一段拍手（例如 ba-na-na）', '⌨️ 到英文錯題庫按「只練錯題」打字，同一題打對 3 次就畢業 🎓'],
      href: 'index.html#learn/words', btn: '🔊 去聽單字', href2: '{mk}', btn2: '⌨️ 只練錯題' },
    enSpeak: { steps: ['🐢 按畫面上方的 🐢，把語音速度調慢再聽一次', '🗣️ 跟著唸兩遍，嘴巴張大、慢慢說', '🎤 再到英文錯題庫按「只練錯題」，按 🎤 說說看'],
      href: '{mk}', btn: '🎤 只練錯題' },
    enChoice: { steps: ['🔊 看到英文點一下，聽發音、看中文意思', '📕 到英文錯題庫按「只練錯題」，同一題連續答對 3 次就畢業 🎓'],
      href: '{mk}', btn: '📕 只練錯題' },
    zhRead: { steps: ['🔍 回到文章找「證據句」：答案一定藏在文章裡', '📖 只練錯題時可以按「展開原文」，把證據句找出來', '✅ 找到證據句，再選答案'],
      href: '{mk}', btn: '📕 只練國語錯題' },
    zhIdiom: { steps: ['📖 先重讀一次成語故事', '💡 再看「成語解說」裡的例句和 ⚠️ 常見誤用', '📕 到國語錯題庫按「只練錯題」再做一次'],
      href: '{unit}', btn: '📜 去讀成語故事', href2: '{mk}', btn2: '📕 只練國語錯題' },
    mmExam: { steps: ['📖 進單元先按「看重點」，把重點讀一遍', '📕 到錯題庫按「只練錯題」，把考錯的題練回來', '📄 再考一次「單元測驗」（會換題），看看進步了多少'],
      href: '{unit}', btn: '📖 去看重點', href2: '{mk}', btn2: '📕 只練錯題' },
    ai: { steps: ['🤖 到 AI 錯題庫按「只練錯題」', '💬 每題答完都有說明，讀一遍再按下一題'],
      href: '{mk}', btn: '🤖 只練錯題' }
  };
  // 數學各類題的「先回去看哪裡」（都是該頁真的有的分頁或功能）
  const MATH_KIND = {
    eq: ['天平', 'index.html#s/math/balance', '⚖️ 回「天平解方程式」，想像天平兩邊一樣重，兩邊一起加減再算一次'],
    gcd: ['短除法', 'index.html#s/math/short-division', '📖 回「短除法」按「看步驟」，看公因數、商一步一步怎麼畫'],
    multiples: ['倍數', 'index.html#s/math/multiples', '📖 回「倍數與公倍數」看 📖 教學，再做一次練習'],
    multiply: ['乘法', 'index.html#s/math/multiply', '✏️ 回「乘法快算」的練習，用拆解提示和直式格子一步一步算'],
    fraction: ['分數', 'index.html#s/math/fraction', '🍰 回「分數比較大小」的 📖 教學，用分數條、數線比一比'],
    word: ['應用題', 'index.html#s/math/short-division-word', '']
  };
  const WL_UNIT = { gcdword: 'gw', multiples: 'mul', fraction: 'frc', multiply: 'mx', eq: 'bal' };
  const WL_HREF = { gw: 'index.html#s/math/short-division-word', mul: 'index.html#s/math/multiples', frc: 'index.html#s/math/fraction', mx: 'index.html#s/math/multiply', bal: 'index.html#s/math/balance' };

  // ================= 鼓勵語（情境 × 說法；{n}{subj}{from}{to}{days}{min} 會換成實際數字） =================
  const CHEERS = {
    welcome: ['歡迎來到學習站！每一科都從第一個單元開始，一步一步來就好。', '嗨，新朋友！今天先挑一科試試看，每做一題都是在進步。', '第一天出發！不用急著全部做完，先完成一個小任務就很棒了。',
      '歡迎你！我是學習小助理 🦉，會幫你記住做到哪裡，你只要專心練習。', '準備好了嗎？從下面的任務選一個開始，遇到不會的也沒關係，那就是要學的地方。'],
    comeback: ['歡迎回來！隔了 {days} 天還願意回來練習，這份堅持很棒。', '好久不見！{days} 天沒來也沒關係，今天從一個小任務重新開始。', '你回來了 🎉 先複習一下之前學的，腦袋很快就會想起來。',
      '休息了 {days} 天，今天重新出發！先挑最簡單的一項暖身。', '回來就是最重要的一步！今天練一點點，就會接回之前的進度。'],
    manyWrong: ['今天有 {n} 題答錯，代表你正在挑戰新東西，錯題就是最好的老師。', '錯了 {n} 題沒關係！把錯題再練一次，下次就會記得更清楚。', '今天碰到比較難的題目，你還是繼續做下去，這份努力最重要。',
      '答錯的題目都收進錯題庫了，再練幾次都答對，它們就會畢業 🎓', '大腦在學新東西的時候本來就會答錯，慢慢看解說，你會越來越熟。'],
    listDone: ['今天的清單全部完成了！你說到做到，真的很努力。', '清單都打勾了 ✅ 一題一題做完，這份認真最棒。', '今天的目標都達成了，給自己一個讚 👍',
      '全部完成！想多練也可以，休息一下也很好。', '今天的份量都做完了，你的努力會一點一點變成實力。'],
    fewer: ['這週你的{subj}錯題從 {from} 題變成 {to} 題！把錯題練回來的方法有效喔。', '{subj}錯題從 {from} 題減到 {to} 題，這是你一題一題練出來的成果。', '看得出來你有在複習，{subj}這週只錯 {to} 題（上週 {from} 題）。',
      '{subj}越來越熟了：錯題從 {from} 題變成 {to} 題，繼續用同樣的方法練。', '上週{subj}錯 {from} 題，這週 {to} 題，你的練習正在發揮作用！'],
    first: ['第一次練{subj}！新的開始，先把第一個單元慢慢看完。', '今天開始學{subj}了，願意嘗試新科目，很勇敢喔。', '{subj}初體驗 🎉 不會的地方多看一次解說就好。',
      '歡迎打開{subj}的新地圖！一步一步走，不用急。', '第一次做{subj}就開始動手，這就是學習最好的開始。'],
    unitDone: ['這週你完成了 {n} 個關卡，每一關都是自己努力拿下的！', '又完成 {n} 個關卡了，照這個節奏，課程地圖會越來越亮。', '完成 {n} 個關卡 🏅 你把不會的變成會的了。',
      '這週打通了 {n} 個關卡，認真練習的成果看得見。', '{n} 個關卡完成！記得回課程地圖看看你走了多遠。'],
    streak: ['已經連續 {n} 天來練習了，每天一點點，累積起來很驚人！', '連續 {n} 天 🔥 持續練習就是最厲害的超能力。', '第 {n} 天了！你養成了每天學習的好習慣。',
      '連續 {n} 天都有練習，這份堅持比什麼都重要。', '{n} 天沒有中斷，今天也來完成一個小任務吧！'],
    normal: ['今天想先練哪一科？選一個小任務開始吧！', '每做一題，大腦就多長一點點，我們開始吧 💪', '遇到不會的題目很正常，那正是要學的地方。',
      '先做最上面的任務，完成後再看看下一個。', '慢慢來比較快，把每一題都弄懂最重要。']
  };
  // 挑情境的順序（前面的先）
  const CHEER_ORDER = ['welcome', 'listDone', 'comeback', 'manyWrong', 'fewer', 'first', 'unitDone', 'streak', 'normal'];

  // ================= 小工具 =================
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  const num = x => (x !== null && x !== '' && isFinite(+x) ? +x : null);
  const dayIdx = t => Math.floor((+t + TPE) / DAY);                                  // 台北時間的第幾天
  const keyIdx = k => { const t = Date.parse(String(k) + 'T00:00:00Z'); return isFinite(t) ? Math.floor(t / DAY) : null; };
  const fill = (s, v) => String(s).replace(/\{(\w+)\}/g, (m, k) => (v && v[k] != null ? v[k] : m));
  const live = book => Object.keys(obj(book)).filter(k => { const e = book[k]; return e && typeof e === 'object' && !e.d; });
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  // ---------- 每一科的活動紀錄：{last, first, days:Set(天), wrong:[時間], grad:[時間], goals:[{t, what}]} ----------
  function activity(snap) {
    const now = +snap.now || Date.now(), A = {};
    SK.forEach(k => { A[k] = { last: 0, first: Infinity, days: new Set(), wrong: [], grad: [], goals: [] }; });
    const ok = t => { t = +t; return isFinite(t) && t > 1e12 && t <= now + DAY ? t : 0; };
    const add = (k, t) => { t = ok(t); if (!t || !A[k]) return 0; const a = A[k]; if (t > a.last) a.last = t; if (t < a.first) a.first = t; a.days.add(dayIdx(t)); return t; };
    const goal = (k, t, what) => { if (add(k, t)) A[k].goals.push({ t: +t, what }); };
    const ctx = obj(snap.ctx), done = obj(ctx.done);
    // 英文：作答紀錄（每題一筆、含對錯）；小朋友鎮（m:'town'、k:'town:<地點>'）的對話作答也寫在 ke_log，一起算英文。
    // 只算答題紀錄：遊戲裡走動、遊玩時間不寫 ke_log，也不呼叫 KidsCoins.answer，所以不會讓「很久沒練英文」被誤判成有在練。
    (Array.isArray(ctx.log) ? ctx.log : []).forEach(e => { if (e && add('english', e.t) && !+e.ok) A.english.wrong.push(+e.t); });
    Object.keys(obj(ctx.learned)).forEach(id => { const x = ctx.learned[id]; if (x && x.at && !x.removedAt) goal('english', Date.parse(x.at), 'learned'); });
    Object.keys(obj(done.tb)).forEach(u => add('english', obj(done.tb[u]).at));
    const keMk = obj(snap.keMk);
    Object.keys(keMk).forEach(id => { const e = obj(keMk[id]); add('english', e.u); if (e.d) { if (ok(e.u)) A.english.grad.push(+e.u); } });
    // 其他科錯題庫：t＝最近一次答錯、u＝最後更新；墓碑＝畢業
    const mk = obj(snap.mk);
    Object.keys(mk).forEach(k => {
      if (!A[k]) return;
      Object.keys(obj(mk[k])).forEach(id => { const e = obj(mk[k][id]); add(k, e.u); if (e.d) { if (ok(e.u)) A[k].grad.push(+e.u); } else if (ok(e.t)) { add(k, e.t); A[k].wrong.push(+e.t); } });
    });
    // 心智圖過關（社會／自然）
    Object.keys(obj(ctx.mm)).forEach(key => { const k = key.split(':')[0], p = obj(ctx.mm[key]); if (!A[k]) return; add(k, p.lastPassAt); Object.keys(obj(p.passedAt)).forEach(l => goal(k, p.passedAt[l], 'level')); });
    // 完成紀錄（kids_done）
    Object.keys(obj(done.bal)).forEach(b => goal('math', done.bal[b], 'bal'));
    Object.keys(obj(done.mx)).forEach(lv => goal('math', obj(done.mx[lv]).ok, 'mx'));
    Object.keys(obj(done.ai)).forEach(pg => goal('ai', done.ai[pg], 'ai'));
    Object.keys(obj(done.zh)).forEach(id => goal('chinese', done.zh[id], 'zh'));
    Object.keys(obj(done.cy)).forEach(id => goal('chinese', done.cy[id], 'cy'));   // 成語（接線後才會有）
    const zl = obj(snap.zhLocal);
    Object.keys(zl).forEach(id => { const x = obj(zl[id]); add('chinese', x.at); if (x.done && !obj(done.zh)[id]) goal('chinese', x.done, 'zh'); });
    // 這台的作答時間（kids-coins.js 補記；英文以外的科目大多只有這個）
    const seen = obj(snap.seen);
    Object.keys(seen).forEach(k => { if (!A[k]) return; const s = obj(seen[k]); add(k, s.t); (Array.isArray(s.d) ? s.d : []).forEach(d => { const i = keyIdx(d); if (i != null && i <= dayIdx(now)) A[k].days.add(i); }); });
    return A;
  }

  // ---------- 各科單元（completion.js）----------
  function units(snap) {
    const data = obj(snap.data), ctx = obj(snap.ctx), out = {};
    let built = [];
    try { built = KC ? KC.build(data, ctx).subjects : []; } catch (e) { built = []; }
    built.forEach(s => { out[s.k] = s.units; });
    // 國語：沒載入目錄（首頁）→ 用完成篇數當一個大單元
    if (!out.chinese) {
      const d = obj(obj(ctx.done).zh), zl = obj(snap.zhLocal), n = new Set(Object.keys(d).concat(Object.keys(zl).filter(k => obj(zl[k]).done))).size;
      out.chinese = [{ key: 'zh:all', title: '閱讀素養 100 篇', href: 'index.html#s/chinese/reading', status: n >= ZH_TOTAL ? 'done' : n ? 'doing' : 'todo', pct: Math.min(100, Math.round(n / ZH_TOTAL * 100)),
        checklist: [{ label: `讀完一篇再一篇（已完成 ${n} 篇）`, ok: n >= ZH_TOTAL, detail: '' }] }];
    }
    // 英文、社會、自然（2026-11-02 五下起）：只算到「有練過的最後一冊」（至少第一冊），還沒上到的冊別不拉低完成度；全部冊別放 _all[科]（這一冊做完才接下一冊）
    out._all = {};
    ['english', 'social', 'science'].forEach(k => {
      const en = out[k] || [];
      const books = [...new Set(en.map(u => u.group || ''))], last = Math.max(0, ...en.filter(u => u.status !== 'todo').map(u => books.indexOf(u.group || '')));
      out[k] = en.filter(u => books.indexOf(u.group || '') <= last);
      out._all[k] = en;
    });
    SK.forEach(k => { if (!out[k]) out[k] = []; });
    return out;
  }
  // 社會／自然單元名（錯題用）
  const mmTitle = (k, u) => { const x = ((KC && KC.MM_UNITS[k]) || []).find(r => r[0] === u); return x ? x[1] : u; };
  const mmIdx = (k, u) => ((KC && KC.MM_UNITS[k]) || []).findIndex(r => r[0] === u);
  // 數學錯題分類：應用題 or 計算題型
  function mathKind(id, p) {
    p = obj(p);
    if (p.type === 'gcdword') return 'word';
    if (p.type === 'multiples') { const k = String(p.k || ''); return /^w/.test(k) || (/^l/.test(k) && k !== 'lcm' && k !== 'last') ? 'word' : 'multiples'; }   // 應用題 w*、素養題 l*（lcm、last 不是）
    if (p.type === 'fraction') return p.c != null ? 'fword' : 'fraction';
    if (p.type === 'multiply') return p.lv === 'word' ? 'word' : 'multiply';
    if (p.type === 'gcd') return 'gcd';
    return /^eqw:/.test(id) ? 'word' : 'eq';   // 天平應用題 eqw:、一般天平 eq:
  }
  // 英文錯題分類：🎤 口說、⌨️ 拼字（打字題）、其他
  function enKind(id) {
    if (/:speak$|:oral:/.test(id)) return 'speak';
    if (/:(spell|dict|type|type2|extype|filltype|gap1|gap2|zh\d+)$/.test(id)) return 'spell';
    return 'choice';
  }
  const enLabel = id => { const m = /^(?:w|ph|r|p|g):([^:]+)/.exec(id); return m ? m[1].replace(/-/g, ' ') : ''; };
  // 應用題循序漸進的難度（word-level.js 同一套：第一次就答對 3 題才加難度）
  function wlStar(c) { c = obj(c); const ge = d => { let n = 0; for (let k = d; k <= 3; k++) n += +c[k] || 0; return n; }; return ge(1) < 3 ? 1 : ge(2) < 3 ? 2 : 3; }

  // ---------- 小朋友鎮（遊戲）：ke_log 裡 m:'town' 的紀錄（2026-11-08）----------
  // k：'town:license:<職業>' 執照考試、'town:job:<職業>' 工作、'town:life:<任務>' 生活任務——這三種算每日英文題數；其他 'town:<地點>'＝跟居民聊天（不算）
  const TOWN_JOB = { teacher: '老師', doctor: '醫生', shopkeeper: '店員', chef: '廚師', firefighter: '消防員', mail: '郵差', vet: '獸醫' };
  const TOWN_LIFE = { shop: '超市購物', waiter: '餐廳服務生', lost: '帶迷路的小孩回家', class: '英文課' };
  function townLabel(k) {
    const m = /^town:(license|job|life):([a-z0-9-]+)/.exec(String(k || ''));
    if (!m) return { label: '跟居民聊天', counted: false };
    if (m[1] === 'life') return { label: TOWN_LIFE[m[2]] || '生活任務', counted: true };
    return { label: (TOWN_JOB[m[2]] || m[2]) + (m[1] === 'license' ? '執照考試' : '工作'), counted: true };
  }
  function townSummary(log, now) {
    const today = dayIdx(now), mk = () => ({ n: 0, ok: 0, counted: 0, chat: 0, by: {}, days: new Set() });
    const T = { today: mk(), week: mk() };
    (Array.isArray(log) ? log : []).forEach(e => {
      if (!e || e.m !== 'town' || !isFinite(+e.t)) return;
      const d = today - dayIdx(+e.t); if (d < 0 || d > 6) return;
      const L = townLabel(e.k);
      [d === 0 ? T.today : null, T.week].forEach(s => { if (!s) return; s.n++; if (+e.ok) s.ok++; if (L.counted) s.counted++; else s.chat++; s.by[L.label] = (s.by[L.label] || 0) + 1; s.days.add(dayIdx(+e.t)); });
    });
    const out = s => ({ n: s.n, ok: s.ok, pct: s.n ? Math.round(s.ok / s.n * 100) : null, counted: s.counted, chat: s.chat, days: s.days.size,
      items: Object.keys(s.by).sort((a, b) => s.by[b] - s.by[a]).map(label => ({ label, n: s.by[label] })) });
    return { today: out(T.today), week: out(T.week) };
  }

  // ================= 主程式 =================
  function analyze(snap) {
    snap = snap || {};
    const now = +snap.now || Date.now(), today = dayIdx(now), ctx = obj(snap.ctx), mk = obj(snap.mk), keMk = obj(snap.keMk);
    const A = activity(snap), U = units(snap);
    const allDays = new Set(); SK.forEach(k => A[k].days.forEach(d => allDays.add(d)));
    const isNew = !allDays.size && SK.every(k => U[k].every(u => u.status === 'todo')) && !live(keMk).length && SK.every(k => !live(mk[k]).length);

    // ---------- 各科進度 ----------
    const subjects = SUBJ.map(s => {
      const us = U[s.k], a = A[s.k];
      const pct = us.length ? Math.round(us.reduce((n, u) => n + (+u.pct || 0), 0) / us.length) : 0;
      const nMk = s.k === 'english' ? live(keMk).length : live(mk[s.k]).length;
      const days = a.last ? today - dayIdx(a.last) : null;
      const st = days == null && !pct && !nMk ? 'fresh' : nMk >= RULES.MK_SUBJ || days > RULES.STALE_DAYS ? 'push'
        : pct >= RULES.GREAT_PCT || (!nMk && days != null && days <= RULES.FRESH_DAYS) ? 'great' : 'steady';
      return { k: s.k, name: s.name, icon: s.icon, href: s.home, mkHref: s.mk, pct, mistakes: nMk, lastAt: a.last || null, days, today: days === 0,
        status: st, statusText: STATUS[st], units: us.map(u => ({ key: u.key, title: u.title, href: u.href, status: u.status, pct: u.pct })),
        unitsDone: us.filter(u => u.status === 'done').length, unitsTotal: us.length };
    });
    const SB = Object.fromEntries(subjects.map(s => [s.k, s]));

    // ---------- 錯題分組（任務、弱點都用）----------
    const groups = [];   // {k, kind, n, title, unit?, href, sol, extra}
    ['social', 'science'].forEach(k => {
      const by = {}; live(mk[k]).forEach(id => { const u = obj(obj(mk[k][id]).p).u || ''; by[u] = (by[u] || 0) + 1; });
      Object.keys(by).forEach(u => {
        const b = obj(obj(ctx.mmBlanks)[k + ':' + u]).w, words = Object.keys(obj(b)).filter(w => obj(b[w]).last === 'wrong' && +obj(b[w]).wrong >= 2).sort((x, y) => b[y].wrong - b[x].wrong).slice(0, 3);
        const i = mmIdx(k, u);
        groups.push({ k, kind: 'mm', unit: u, n: by[u], title: `${SBY[k].name}・${u ? mmTitle(k, u) : '其他'}`, unitHref: i >= 0 ? `index.html#s/${k}/${u}` : SBY[k].home,
          mkHref: i >= 0 ? `index.html#s/${k}/mistakes-${u}` : SBY[k].mk, extra: words.length ? `常錯的詞：${words.join('、')}` : '' });
      });
    });
    { const by = {}, wl = {};
      live(mk.math).forEach(id => { const p = obj(obj(mk.math[id]).p), kd = mathKind(id, p); by[kd] = (by[kd] || 0) + 1; if (kd === 'word' || kd === 'fword') { const u = WL_UNIT[p.type] || (/^eqw:/.test(id) ? 'bal' : 'gw'); wl[u] = (wl[u] || 0) + 1; } });
      const nw = (by.word || 0) + (by.fword || 0);
      if (nw) {
        const u = Object.keys(wl).sort((x, y) => wl[y] - wl[x])[0], star = ['', '★☆☆', '★★☆', '★★★'][wlStar(obj(snap.wordLv)[u])];
        groups.push({ k: 'math', kind: by.fword && by.fword >= (by.word || 0) ? 'mathFraction' : 'mathWord', n: nw, title: '數學・應用題', unitHref: WL_HREF[u] || MATH_KIND.word[1], mkHref: SBY.math.mk, extra: `應用題目前難度 ${star}` });
      }
      ['eq', 'gcd', 'multiples', 'multiply', 'fraction'].forEach(kd => { if (by[kd]) groups.push({ k: 'math', kind: 'mathCalc', calc: kd, n: by[kd], title: `數學・${MATH_KIND[kd][0]}`, unitHref: MATH_KIND[kd][1], mkHref: SBY.math.mk, extra: '' }); });
    }
    { const by = { spell: [], speak: [], choice: [] }; live(keMk).forEach(id => by[enKind(id)].push(id));
      const NM = { spell: '英文・拼字', speak: '英文・口說', choice: '英文・選擇題' }, SOL = { spell: 'enSpell', speak: 'enSpeak', choice: 'enChoice' };
      Object.keys(by).forEach(kd => { const ids = by[kd]; if (!ids.length) return; const ex = [...new Set(ids.map(enLabel).filter(Boolean))].slice(0, 3);
        groups.push({ k: 'english', kind: SOL[kd], n: ids.length, title: NM[kd], unitHref: 'index.html#learn/words', mkHref: SBY.english.mk, extra: ex.length ? `例如：${ex.join('、')}` : '' }); });
    }
    { const ids = live(mk.chinese), cy = ids.filter(id => /^cy/.test(id)), rd = ids.filter(id => !/^cy/.test(id));
      if (rd.length) groups.push({ k: 'chinese', kind: 'zhRead', n: rd.length, title: '國語・閱讀理解', unitHref: SBY.chinese.home, mkHref: SBY.chinese.mk, extra: '' });
      if (cy.length) groups.push({ k: 'chinese', kind: 'zhIdiom', n: cy.length, title: '國語・成語', unitHref: 'index.html#s/chinese/idioms', mkHref: SBY.chinese.mk, extra: '' });   // 成語錯題 id 都是 cy 開頭
    }
    // 社會／自然〈📄 單元測驗〉最近一次 < EXAM_WEAK 分 → 列為弱點（同單元已有錯題組就併進去）
    { const ex = obj(snap.exam);
      Object.keys(ex).forEach(key => { const m = /^(social|science):([a-z0-9]+)$/.exec(key), sc = num(obj(ex[key]).last); if (!m || sc == null || sc >= RULES.EXAM_WEAK) return;
        const k = m[1], u = m[2], i = mmIdx(k, u); if (i < 0) return;
        const g = groups.find(x => x.k === k && x.kind === 'mm' && x.unit === u);
        if (g) g.exam = sc;
        else groups.push({ k, kind: 'mm', unit: u, n: 0, exam: sc, title: `${SBY[k].name}・${mmTitle(k, u)}`, unitHref: `index.html#s/${k}/${u}`, mkHref: `index.html#s/${k}/mistakes-${u}`, extra: '' }); });
    }
    { const n = live(mk.ai).length; if (n) groups.push({ k: 'ai', kind: 'ai', n, title: 'AI・挑戰題', unitHref: SBY.ai.home, mkHref: SBY.ai.mk, extra: '' }); }

    // ---------- 今日任務 ----------
    let cand = [];
    SUBJ.forEach(s => {
      const S = SB[s.k], us = U[s.k], list = [];
      // ② 錯題多：社會／自然先看單元，其他整科。社會／自然有到期該複習的（錯題＋閃卡）→ 改成 🔁 今天要複習（同一個位置）
      const unitG = groups.filter(g => g.k === s.k && g.kind === 'mm' && g.unit && g.n >= RULES.MK_UNIT).sort((x, y) => y.n - x.n)[0];
      const nDue = SPACED.includes(s.k) ? live(mk[s.k]).filter(id => !(+mk[s.k][id].due > today)).length : 0;
      const grad = SPACED.includes(s.k) ? '隔 1、3、7 天各答對一次就畢業 🎓' : '同一題連續答對 3 次就畢業 🎓';
      if (nDue) list.push({ kind: 'review', icon: '🔁', title: `今天有 ${nDue} 題到期該複習`, why: `${s.name}的錯題和閃卡隔 1、3、7 天再考一次，到期答對就往下一關`, href: `index.html#s/${s.k}/review`, n: nDue });
      else if (unitG) list.push({ kind: 'mistakes', icon: '📕', title: `只練〈${mmTitle(s.k, unitG.unit)}〉的錯題（${unitG.n} 題）`, why: `這個單元錯了 ${unitG.n} 題，${grad}`, href: unitG.mkHref, n: unitG.n });
      else if (S.mistakes >= RULES.MK_SUBJ) list.push({ kind: 'mistakes', icon: '📕', title: `只練${s.name}錯題（${S.mistakes} 題）`, why: `${s.name}錯題庫有 ${S.mistakes} 題，${grad}`, href: s.mk, n: S.mistakes });
      // ③ 很久沒碰：回到最近在做（或最後完成）的單元
      if (S.days != null && S.days > RULES.STALE_DAYS) {
        const u = us.filter(x => x.status === 'doing').sort((x, y) => y.pct - x.pct)[0] || us.filter(x => x.status === 'done').slice(-1)[0];
        list.push({ kind: 'stale', icon: '🔁', title: `複習${s.name}${u ? '：' + u.title : ''}`, why: `上次練${s.name}是 ${S.days} 天前，複習一輪會記得更牢`, href: u ? u.href : s.home });
      }
      // ④ 進行到一半：最接近完成的那個
      const doing = us.filter(x => x.status === 'doing').sort((x, y) => y.pct - x.pct)[0];
      if (doing) { const miss = (doing.checklist || []).find(c => !c.ok); list.push({ kind: 'finish', icon: '🏁', title: `把〈${doing.title}〉完成`, why: `已經完成 ${doing.pct}%${miss ? '，還差：' + miss.label : ''}`, href: doing.href }); }
      // ⑤ 還沒開始：照順序的下一個
      const todo = us.find(x => x.status === 'todo') || (U._all[s.k] || []).find(x => x.status === 'todo');
      if (todo && !doing) list.push({ kind: 'start', icon: '🚀', title: `${isNew || !us.some(x => x.status !== 'todo') ? '從' : '開始'}〈${todo.title}〉${isNew || !us.some(x => x.status !== 'todo') ? '開始' : ''}`, why: isNew || !us.some(x => x.status !== 'todo') ? `${s.name}的第一個單元，從這裡出發` : `照順序，${s.name}的下一步是這個單元`, href: todo.href });
      list.forEach(t => { t.pri = PRI[t.kind]; t.k = s.k; t.subj = s.name; t.min = t.kind === 'mistakes' || t.kind === 'review' ? clamp(Math.ceil(t.n * MINUTES.mkEach), MINUTES.mkMin, MINUTES.mkMax) : MINUTES[t.kind]; });
      list.sort((x, y) => x.pri - y.pri);
      if (list[0]) cand.push(list[0]);   // 同一科一天最多 1 項
    });
    // 各科輪流：今天已經練過的科目往後排（優先順序 +TODAY_PENALTY）→ 越久沒練越前面 → 每天換一個起點（不讓同一科一直霸榜）
    const rot = today % SUBJ.length, ord = k => (SK.indexOf(k) - rot + SUBJ.length) % SUBJ.length;
    const eff = t => t.pri + (SB[t.k].today ? RULES.TODAY_PENALTY : 0), dd = k => (SB[k].days == null ? -1 : SB[k].days);
    cand.sort((x, y) => (eff(x) - eff(y)) || (dd(y.k) - dd(x.k)) || (ord(x.k) - ord(y.k)));
    // 今日清單還沒完成：還沒達標的科目優先；別科的錯題、複習照留，排在「沒達標科目的新單元」前面（新單元清單那一列就能直達）。不另外列一條，清單本身就在首頁最上面
    const daily = snap.daily && Array.isArray(snap.daily.rows) ? snap.daily : null, unmet = daily ? daily.rows.filter(x => !x.done).map(x => x.k) : [];
    if (unmet.length) { const rk = t => { const miss = unmet.indexOf(t.k) >= 0, work = t.kind === 'mistakes' || t.kind === 'review' || t.kind === 'stale'; return miss ? (work ? 0 : 2) : (work ? 1 : 3); }, si = t => { const i = unmet.indexOf(t.k); return i < 0 ? 9 : i; }; cand = cand.map((t, i) => [t, i]).sort((a, b) => (rk(a[0]) - rk(b[0])) || (si(a[0]) - si(b[0])) || (a[1] - b[1])).map(x => x[0]); }
    const tasks = cand.slice(0, RULES.MAX_TASKS);

    // ---------- 比較弱的地方 ----------
    const weak = [], per = {};
    const isEx = g => (g.exam != null ? 1 : 0);   // 單元測驗不及格的排前面
    groups.filter(g => g.n >= RULES.WEAK_MIN || g.exam != null).sort((x, y) => (isEx(y) - isEx(x)) || (y.n - x.n) || (SK.indexOf(x.k) - SK.indexOf(y.k))).forEach(g => {
      if (weak.length >= RULES.MAX_WEAK || (per[g.k] || 0) >= RULES.WEAK_PER_SUBJ) return;
      per[g.k] = (per[g.k] || 0) + 1;
      const kind = g.exam != null ? 'mmExam' : g.kind, sol = SOLUTIONS[kind], v = { unit: g.unitHref, mk: g.mkHref, how: g.calc ? MATH_KIND[g.calc][2] : '' };
      const text = g.exam != null ? `單元測驗 ${g.exam} 分` + (g.n ? `・錯題 ${g.n} 題` : '') : `錯題 ${g.n} 題`;
      weak.push({ k: g.k, icon: SBY[g.k].icon, title: g.title, text, n: g.n, extra: g.extra, sol: kind, steps: sol.steps.map(x => fill(x, v)),
        href: fill(sol.href, v), btn: sol.btn, href2: sol.href2 ? fill(sol.href2, v) : '', btn2: sol.btn2 || '' });
    });

    // ---------- 還沒開始的：每科只列下一步 ----------
    const next = [];
    SUBJ.slice().sort((x, y) => ord(x.k) - ord(y.k)).forEach(s => {
      const us = U[s.k], t = us.find(x => x.status === 'todo') || (us.every(x => x.status === 'done') ? (U._all[s.k] || []).find(x => x.status === 'todo') : null);
      if (t && next.length < RULES.NEXT_MAX) next.push({ k: s.k, icon: s.icon, subj: s.name, title: t.title, href: t.href, first: !us.some(x => x.status !== 'todo') });
    });

    // ---------- 我的進步：這 7 天 vs 前 7 天 ----------
    const inW = (t, w) => { const d = today - dayIdx(t); return w === 0 ? d >= 0 && d <= 6 : d >= 7 && d <= 13; };
    const dIn = (set, w) => [...set].filter(d => (w === 0 ? today - d >= 0 && today - d <= 6 : today - d >= 7 && today - d <= 13)).length;
    const cnt = (xs, w) => xs.filter(t => inW(t, w)).length;
    let streak = 0; { let d = allDays.has(today) ? today : today - 1; while (allDays.has(d)) { streak++; d--; } }
    const bySubj = SUBJ.map(s => { const a = A[s.k]; return { k: s.k, name: s.name, icon: s.icon, days: dIn(a.days, 0), daysLast: dIn(a.days, 1), wrong: cnt(a.wrong, 0), wrongLast: cnt(a.wrong, 1),
      grad: cnt(a.grad, 0), goals: cnt(a.goals.map(g => g.t), 0), goalsLast: cnt(a.goals.map(g => g.t), 1), mistakes: SB[s.k].mistakes }; });
    const sum = f => bySubj.reduce((n, x) => n + x[f], 0);
    const GW = { zh: ['國語讀完', '篇'], cy: ['成語完成', '個'], level: ['背架構過了', '關'], bal: ['天平算對', '題'], mx: ['乘法挑戰達標', '次'], ai: ['AI 挑戰玩完', '關'], learned: ['英文學會', '個'] };
    const gw = {}; SK.forEach(k => A[k].goals.forEach(g => { if (inW(g.t, 0)) gw[g.what] = (gw[g.what] || 0) + 1; }));
    const progress = {
      days: dIn(allDays, 0), daysLast: dIn(allDays, 1), streak,
      wrong: sum('wrong'), wrongLast: sum('wrongLast'), grad: sum('grad'), goals: sum('goals'), goalsLast: sum('goalsLast'),
      goalItems: Object.keys(GW).filter(k => gw[k]).map(k => `${GW[k][0]} ${gw[k]} ${GW[k][1]}`),
      unitsDone: subjects.reduce((n, s) => n + s.unitsDone, 0), bySubj
    };

    // ---------- 鼓勵語 ----------
    const todayWrong = SK.reduce((n, k) => n + A[k].wrong.filter(t => dayIdx(t) === today).length, 0);
    const prevDay = [...allDays].filter(d => d < today).sort((x, y) => y - x)[0], gap = prevDay == null ? 0 : today - prevDay;
    const fewer = bySubj.filter(x => x.days > 0 && x.wrongLast >= 2 && x.wrong < x.wrongLast).sort((x, y) => (y.wrongLast - y.wrong) - (x.wrongLast - x.wrong))[0];
    const first = SUBJ.find(s => A[s.k].days.has(today) && [...A[s.k].days].every(d => d >= today));
    const sits = {
      welcome: isNew ? {} : null,
      comeback: gap >= RULES.COMEBACK_DAYS ? { days: gap } : null,
      manyWrong: todayWrong >= RULES.MANY_WRONG ? { n: todayWrong } : null,
      listDone: daily && daily.allDone ? {} : null,
      fewer: fewer ? { subj: fewer.name, from: fewer.wrongLast, to: fewer.wrong } : null,
      first: first && allDays.size > 1 ? { subj: first.name } : null,
      unitDone: progress.goals > 0 ? { n: progress.goals } : null,
      streak: streak >= RULES.STREAK_MIN ? { n: streak } : null,
      normal: {}
    };
    const sit = CHEER_ORDER.find(s => sits[s]);
    const cheer = pickCheer(sit, sits[sit], snap.prevCheer, snap.rand);

    // 打招呼（台北時間）
    const h = new Date(now + TPE).getUTCHours(), hi = (snap.nick ? snap.nick + '，' : '') + (h >= 5 && h < 11 ? '早安！' : h >= 11 && h < 18 ? '午安！' : '晚上好！');
    const town = townSummary(ctx.log, now);
    return { isNew, now, hi, cheer, daily, tasks, subjects, weak, next, progress, town, _: { groups, cand } };
  }

  // 同一情境隨機挑一句，跟上一次（prev）不一樣
  function pickCheer(sit, vars, prev, rand) {
    const xs = CHEERS[sit] || CHEERS.normal, r = typeof rand === 'function' ? rand : Math.random;
    const ids = xs.map((x, i) => sit + ':' + i).filter(id => id !== prev);
    const id = ids[Math.min(ids.length - 1, Math.floor(r() * ids.length))];
    return { id, sit, text: fill(xs[+id.split(':')[1]], vars || {}) };
  }

  // ================= 家長摘要（給 Yoda）：各科練習天數、完成關卡、弱點前 3 名、建議 =================
  function parentSummary(r) {
    return {
      rows: r.progress.bySubj.map(x => ({ k: x.k, name: x.name, icon: x.icon, days: x.days, goals: x.goals, mistakes: x.mistakes, status: (r.subjects.find(s => s.k === x.k) || {}).statusText || '' })),
      days: r.progress.days, daysLast: r.progress.daysLast, streak: r.progress.streak, goals: r.progress.goals, goalsLast: r.progress.goalsLast, wrong: r.progress.wrong, wrongLast: r.progress.wrongLast,
      weak: r.weak.slice(0, 3).map(w => ({ title: w.title, text: w.text, step: w.steps[0] })),
      advice: r.tasks.map(t => t.title + '（' + t.why + '）'),
      town: r.town
    };
  }

  const KA = { RULES, PRI, MINUTES, SUBJ, STATUS, SOLUTIONS, MATH_KIND, CHEERS, CHEER_ORDER, analyze, pickCheer, parentSummary, townSummary, _: { activity, units, mathKind, enKind, dayIdx, fill, wlStar, townLabel } };
  if (typeof module !== 'undefined' && module.exports) module.exports = KA;
  root.KidsAssistant = KA;
})(typeof window !== 'undefined' ? window : globalThis);
