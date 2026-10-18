/* 📘 課本進度：每個課本單元一筆（翰林 Here We Go! 第 5 冊五上、第 6 冊五下）。
   單字、片語、句型、文法本身放在原本的資料檔，用 tb:["<單元 id>"] 標記屬於哪一課（不重複新增、id 不變，學會紀錄照舊）；
   這裡放：書別與單元、單字分組（wordKey／片語 id）、課本上的中文（tz）、文法圖解（visual）、句型對照（qa）、情境對話，
   以及專屬題的材料：sents（句子：重組、🎤、中翻英、聽力、造句、空格）、replies（問句＋提示 → 回答）。格式見 engine.js「課本單元專屬題」。
   draft:true＝依學校課程計畫整理、還沒拿課本核對（Yoda 拍課本後改成正式版）。
   寫法照台灣課本：星期首字大寫、PE 大寫、class 前不加冠詞、短答 Yes, I do.、存在句 How many … are there?／There are …。 */
(function () {
  const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const next = (arr, i, k) => arr[(i + (k || 1)) % arr.length];
  const others = (arr, i, n) => [1, 2, 3].slice(0, n || 3).map(k => next(arr, i, k));
  const AUX = ['Do', 'Does', 'Is', 'Are'];
  const U = [];

  // ================= 五上 Unit 1 What Day Is Today? =================
  (() => {
    const days = [['Sunday', '星期日'], ['Monday', '星期一'], ['Tuesday', '星期二'], ['Wednesday', '星期三'], ['Thursday', '星期四'], ['Friday', '星期五'], ['Saturday', '星期六']].map(([en, zh]) => ({ en, zh }));
    const sents = [{ key: 'what-day', g: 'w', en: 'What day is today?', zh: '今天星期幾？', alts: ['What day is it today?', 'What day is it?'], why: '問星期幾：What day is today?',
      blanks: [{ fam: 'wh', w: 'What', opts: ['What', 'Who', 'Where', 'How'], why: '問「星期幾」用 What day。' }, { fam: 'be', w: 'is', opts: ['is', 'are', 'am', 'do'], why: 'today 是單數，用 is。' }], ask: { prompt: '問別人：今天星期幾？', hint: 'What day …' } }];
    const replies = [];
    days.forEach((d, i) => {
      const dOpts = [d.en].concat(others(days, i).map(x => x.en));
      sents.push({ key: 'it:' + slug(d.en), g: 's', en: `It's ${d.en}.`, zh: `今天${d.zh}。`, alts: [`It is ${d.en}.`, `It's ${d.en} today.`, `It is ${d.en} today.`, `Today is ${d.en}.`], why: `回答星期幾：It's ${d.en}.（星期首字大寫）`,
        blanks: [{ fam: 'day', w: d.en, opts: dOpts, cue: d.zh, why: `${d.zh}＝${d.en}（第一個字母大寫）` }], ask: { prompt: `說說看：今天${d.zh}。`, hint: "It's …" } });
      sents.push({ key: 'q:' + slug(d.en), g: 'q', en: `Is it ${d.en} today?`, zh: `今天是${d.zh}嗎？`, why: 'Is it … today? 用 Yes, it is. / No, it isn\'t. 回答',
        blanks: [{ fam: 'isit', w: 'Is', opts: AUX, why: '「今天是…嗎？」用 Is it … today?' }, { fam: 'day', w: d.en, opts: dOpts, cue: d.zh, why: `${d.zh}＝${d.en}` }], ask: { prompt: `問別人：今天是${d.zh}嗎？`, hint: 'Is it … today?' } });
      replies.push({ key: 'w:' + slug(d.en), card: 'it:' + slug(d.en), q: 'What day is today?', cue: `📅 ${d.zh}`, en: `It's ${d.en}.`, alts: [`It is ${d.en}.`, `Today is ${d.en}.`, `It's ${d.en} today.`, `It is ${d.en} today.`], wrong: [`It's ${next(days, i).en}.`, 'Yes, it is.', `It ${d.en}.`], kind: 'w', why: 'What 問句要回答內容：It\'s + 星期.' });
      replies.push({ key: 'y:' + slug(d.en), card: 'q:' + slug(d.en), q: `Is it ${d.en} today?`, cue: `📅 今天是${d.zh}`, en: 'Yes, it is.', wrong: ["Yes, it's.", 'Yes, it does.', `No, it isn't. It's ${next(days, i).en}.`], kind: 'y', why: 'Is it …? 對的話回答 Yes, it is.（句尾不能縮寫成 it\'s）' });
      [1, 6].forEach(k => { const d2 = next(days, i, k);
        replies.push({ key: `n:${slug(d.en)}:${slug(d2.en)}`, card: 'q:' + slug(d.en), q: `Is it ${d.en} today?`, cue: `📅 今天是${d2.zh}`, en: `No, it isn't. It's ${d2.en}.`, alts: [`No, it is not. It is ${d2.en}.`], wrong: [`No, it isn't. It's ${d.en}.`, 'Yes, it is.', `No, it doesn't. It's ${d2.en}.`], kind: 'n', why: 'Is it …? 不對的話：No, it isn\'t. 再說是星期幾。' }); });
    });
    U.push({ id: 'hanlin-5-u1', book: '五上', no: 1, title: '五上 Unit 1 What Day Is Today?', theme: 'What day is today?', themeZh: '今天星期幾？', draft: true,
      groups: [{ key: 'day', title: '星期', icon: '📅', words: days.map(d => slug(d.en)) }, { key: 'phrase', title: '日常用語', icon: '💬', words: [], phrases: ['good-idea', 'have-a-good-time'] }],
      tz: Object.assign(Object.fromEntries(days.map(d => [slug(d.en), d.zh])), { 'good-idea': '好主意！', 'have-a-good-time': '玩得愉快。' }),
      patterns: ['what-day-is-today', 'is-it-today'], grammar: ['wh'],
      visual: { chips: { a: '', items: days.map(d => d.en) }, xs: [{ t: "It's friday.", ok: false }, { t: "It's Friday.", ok: true, note: '星期第一個字母大寫' }, { t: "Yes, it's.", ok: false }, { t: 'Yes, it is.', ok: true, note: '句尾不能縮寫' }],
        table: { head: ['問句', '怎麼回答'], rows: [['[What] day is today?', "It's Friday."], ['[Is] it Monday today?', 'Yes, it is.'], ['[Is] it Monday today?', "No, it isn't. It's Tuesday."]] },
        tip: { en: 'What day is today? → [It\'s] Friday.', note: 'What 問句回答「內容」；Is it 問句先回答 Yes／No' } },
      qa: [{ q: 'What day is today?', qz: '今天星期幾？', a: "It's Friday.", az: '今天星期五。' }, { q: 'Is it Monday today?', qz: '今天是星期一嗎？', a: 'Yes, it is.', az: '是的，沒錯。' },
        { q: 'Is it Saturday today?', qz: '今天是星期六嗎？', a: "No, it isn't. It's Sunday.", az: '不是，今天是星期日。' }],
      sents, replies });
  })();

  // ================= 五上 Unit 2 Do You Have PE Class on Monday?（Yoda 提供課本內容）=================
  (() => {
    const subjects = [{ en: 'art', zh: '美術' }, { en: 'Chinese', zh: '國語' }, { en: 'English', zh: '英文' }, { en: 'math', zh: '數學' }, { en: 'music', zh: '音樂' }, { en: 'PE', zh: '體育', alt: 'P.E.' }, { en: 'science', zh: '自然' }, { en: 'social studies', zh: '社會' }];
    const days = [{ en: 'Monday', zh: '星期一' }, { en: 'Tuesday', zh: '星期二' }, { en: 'Wednesday', zh: '星期三' }, { en: 'Thursday', zh: '星期四' }];
    const people = [{ k: 'you', en: 'you', zh: '你', aux: 'Do', ans: 'I', other: 'you' }, { k: 'he', en: 'he', zh: '他', aux: 'Does', ans: 'he', other: 'she' }, { k: 'she', en: 'she', zh: '她', aux: 'Does', ans: 'she', other: 'he' }];
    const short = (who, aux, yes) => (yes ? `Yes, ${who} ${aux === 'Do' ? 'do' : 'does'}.` : `No, ${who} ${aux === 'Do' ? "don't" : "doesn't"}.`);
    const whyP = p => (p.aux === 'Do' ? `主詞是 ${p.en}，問句用 Do；簡答 Yes, I do. / No, I don't.` : `主詞是 ${p.en}（一個人），問句用 Does；簡答 Yes, ${p.ans} does. / No, ${p.ans} doesn't.`);
    const sents = [], replies = [];
    people.forEach(p => subjects.forEach(s => days.forEach(d => {
      const key = `${p.k}:${slug(s.en)}:${slug(d.en)}`, sen = cls => `${p.aux} ${p.en} have ${s.en}${cls ? ' class' : ''} on ${d.en}?`, Q = sen(true);
      const alts = [sen(false)]; if (s.alt) alts.push(Q.replace(s.en, s.alt), sen(false).replace(s.en, s.alt));
      sents.push({ key, g: 'q', en: Q, zh: `${p.zh}${d.zh}有${s.zh}課嗎？`, alts, why: whyP(p), ask: { prompt: `問${p.k === 'you' ? '對方（你）' : p.zh}：${d.zh}有沒有${s.zh}課？`, hint: `${p.en}／${s.en}／${d.en}` },
        blanks: [{ fam: 'dd', w: p.aux, opts: AUX }, { fam: 'on', w: 'on', opts: ['on', 'in', 'at', 'to'], why: `星期幾前面一律用 on：on ${d.en}。` }] });
      const o = people.find(x => x.k === p.other) || p;
      [true, false].forEach(yes => replies.push({ key: `${key}:${yes ? 'y' : 'n'}`, card: key, q: Q, cue: yes ? '⭕ 有' : '❌ 沒有', en: short(p.ans, p.aux, yes), kind: yes ? 'y' : 'n', why: whyP(p),
        wrong: [short(p.ans, p.aux === 'Do' ? 'Does' : 'Do', yes), short(p.ans, p.aux, !yes), short(o.k === 'you' ? 'you' : o.ans, o.k === 'you' ? 'Do' : o.aux, yes)] }));
    })));
    U.push({ id: 'hanlin-5-u2', book: '五上', no: 2, title: '五上 Unit 2 Do You Have PE Class on Monday?', theme: 'Do you have math class on Monday?', themeZh: '你星期一有數學課嗎？',
      groups: [
        { key: 'subject', title: '學校科目', icon: '📚', words: ['art', 'chinese', 'english', 'math', 'music', 'pe', 'science', 'social-studies'] },
        { key: 'day', title: '星期', icon: '📅', words: ['monday', 'tuesday', 'wednesday', 'thursday'] },
        { key: 'other', title: '其他', icon: '✨', words: ['class', 'park', 'follow'], phrases: ['in-a-hurry'] }],
      tz: { art: '美術', chinese: '國語；中文', english: '英文', math: '數學', music: '音樂', pe: '體育', science: '自然；科學', 'social-studies': '社會',
        monday: '星期一', tuesday: '星期二', wednesday: '星期三', thursday: '星期四', class: '課堂；課程', park: '公園', follow: '跟隨', 'in-a-hurry': '趕時間；匆忙（片語）' },
      ipa: { 'in-a-hurry': '/ɪn ə ˈhɝi/' },
      patterns: ['do-you-have-class', 'does-he-have-class'], grammar: ['do-does-on'],
      visual: { chips: { a: 'on', items: days.map(d => d.en) },
        xs: [{ t: 'in Monday', ok: false }, { t: 'at Monday', ok: false }, { t: 'on Monday', ok: true }, { t: 'Monday', ok: true, note: '第一個字母大寫' }],
        table: { head: ['人稱', '問句', '肯定簡答', '否定簡答', '否定句'], rows: [['I／you（還有 we、they）', '[Do] you have art class?', 'Yes, I do.', "No, I don't.", "I don't have art class."], ['he／she（一個人）', '[Does] he have art class?', 'Yes, he does.', "No, he doesn't.", "She doesn't have art class."]] },
        tip: { en: 'Does she ~has~ [have] PE class?', note: "用了 Do／Does／don't／doesn't，後面的動詞一律還原成原形 have（不能用 has）" } },
      qa: [
        { q: 'Do you have math class on Monday?', qz: '你星期一有數學課嗎？', a: 'Yes, I do.', az: '是的，我有。' },
        { q: 'Do you have art class on Tuesday?', qz: '你星期二有美術課嗎？', a: "No, I don't.", az: '不，我沒有。' },
        { q: 'Does he have music class on Wednesday?', qz: '他星期三有音樂課嗎？', a: 'Yes, he does.', az: '是的，他有。' },
        { q: 'Does she have science class on Thursday?', qz: '她星期四有自然課嗎？', a: "No, she doesn't.", az: '不，她沒有。' }],
      dialog: {
        title: '放學後去公園',
        lines: [
          { who: 'Amy', side: 'l', en: 'Can we go to the park?', zh: '我們可以去公園嗎？' },
          { who: 'Ben', side: 'r', en: 'Sure, follow me.', zh: '當然好，跟我來。', alts: ['Sure. Follow me.'] },
          { who: 'Ben', side: 'r', en: "I'm in a hurry.", zh: '我在趕時間。' }],
        choose: [
          { id: 'reply', prompt: 'Can we go to the park?', sub: '選出最適合的回答', options: ['Sure, follow me.', 'Yes, I do.', "No, he doesn't.", 'On Monday.'], answer: 'Sure, follow me.', why: 'Can we …?（我們可以…嗎？）→ Sure.（當然好）' },
          { id: 'hurry', prompt: "I'm in a hurry.", sub: '這句話是什麼意思？', options: ['我在趕時間。', '我在公園裡。', '跟我來。', '我們可以去公園嗎？'], answer: '我在趕時間。', why: "in a hurry ＝ 趕時間、匆忙：I'm in a hurry. 我在趕時間。" },
          { id: 'follow', prompt: '跟我來。', sub: '選出英文', options: ['Follow me.', 'Help me.', 'Hurry up.', 'Go to the park.'], answer: 'Follow me.', why: 'follow ＝ 跟隨：Follow me. 跟我來。' }]
      },
      sents, replies });
  })();

  // ================= 五上 Unit 3 Where Are You Going? =================
  (() => {
    const places = [['bank', '銀行'], ['bookstore', '書店'], ['hospital', '醫院'], ['library', '圖書館'], ['museum', '博物館'], ['park', '公園'], ['post office', '郵局'], ['supermarket', '超級市場']].map(([en, zh]) => ({ en, zh }));
    const subs = [{ k: 'i', c: "I'm", full: 'I am', zh: '我', q: 'Where are you going?', bad: 'I is' }, { k: 'we', c: "We're", full: 'We are', zh: '我們', q: 'Where are you going?', bad: 'We is' },
      { k: 'he', c: "He's", full: 'He is', zh: '他', q: 'Where is he going?', bad: 'He are' }, { k: 'she', c: "She's", full: 'She is', zh: '她', q: 'Where is she going?', bad: 'She are' }];
    const streets = [['Blue', '藍'], ['Green', '綠'], ['Red', '紅'], ['Yellow', '黃']].map(([en, zh]) => ({ en, zh }));
    const BE = ['are', 'is', 'am', 'do'], why = 'I 配 am（I\'m）；you、we、they 配 are；he、she 配 is。';
    const sents = [
      { key: 'wq:you', g: 'wq', en: 'Where are you going?', zh: '你要去哪裡？', why, blanks: [{ fam: 'be', w: 'are', opts: BE }], ask: { prompt: '問對方：你要去哪裡？', hint: 'Where … going?' } },
      { key: 'wq:he', g: 'wq', en: 'Where is he going?', zh: '他要去哪裡？', why, blanks: [{ fam: 'be', w: 'is', opts: BE }], ask: { prompt: '問：他要去哪裡？', hint: 'Where … he going?' } },
      { key: 'wq:she', g: 'wq', en: 'Where is she going?', zh: '她要去哪裡？', why, blanks: [{ fam: 'be', w: 'is', opts: BE }], ask: { prompt: '問：她要去哪裡？', hint: 'Where … she going?' } }];
    const replies = [];
    places.forEach((pl, i) => {
      const pOpts = [pl.en].concat(others(places, i).map(x => x.en));
      subs.forEach(s => {
        const en = `${s.c} going to the ${pl.en}.`;
        sents.push({ key: `go:${s.k}:${slug(pl.en)}`, g: 'go', en, zh: `${s.zh}要去${pl.zh}。`, alts: [`${s.full} going to the ${pl.en}.`], why,
          blanks: [{ fam: 'pl', w: pl.en, opts: pOpts, cue: pl.zh }, { fam: 'to', w: 'to', opts: ['to', 'on', 'in', 'at'], why: '去某個地方：going to the ＋地點。' }], ask: { prompt: `說說看：${s.zh}要去${pl.zh}。`, hint: `${s.c} going to …` } });
        replies.push({ key: `go:${s.k}:${slug(pl.en)}`, q: s.q, cue: `🧭 ${s.zh} → ${pl.zh}`, en, alts: [`${s.full} going to the ${pl.en}.`], kind: s.k === 'i' || s.k === 'we' ? 'you' : 'he', why,
          wrong: [`${s.c} going to ${pl.en}.`, `${s.c} go to the ${pl.en}.`, `${s.bad} going to the ${pl.en}.`] });
      });
      sents.push({ key: `wh:${slug(pl.en)}`, g: 'wh', en: `Where's the ${pl.en}?`, zh: `${pl.zh}在哪裡？`, alts: [`Where is the ${pl.en}?`], why: "Where's＝Where is", blanks: [{ fam: 'pl', w: pl.en, opts: pOpts, cue: pl.zh }], ask: { prompt: `問：${pl.zh}在哪裡？`, hint: "Where's the …?" } });
      streets.forEach((st, j) => replies.push({ key: `st:${slug(pl.en)}:${slug(st.en)}`, card: `wh:${slug(pl.en)}`, q: `Where's the ${pl.en}?`, cue: `🗺️ ${st.zh}街（${st.en} Street）`, en: `It's on ${st.en} Street.`, alts: [`It is on ${st.en} Street.`], kind: 'st',
        why: '在某條街上用 on：It\'s on Blue Street.', wrong: [`It's in ${st.en} Street.`, `It's at ${st.en} Street.`, `It on ${st.en} Street.`] }));
    });
    streets.forEach(st => sents.push({ key: `st:${slug(st.en)}`, g: 'st', en: `It's on ${st.en} Street.`, zh: `它在${st.zh}街上。`, alts: [`It is on ${st.en} Street.`], why: '在某條街上用 on。',
      blanks: [{ fam: 'on', w: 'on', opts: ['on', 'in', 'at', 'to'], why: '在某條街上用 on：on Blue Street。' }] }));
    U.push({ id: 'hanlin-5-u3', book: '五上', no: 3, title: '五上 Unit 3 Where Are You Going?', theme: 'Where are you going?', themeZh: '你要去哪裡？', draft: true,
      groups: [{ key: 'place', title: '社區場所', icon: '🏙️', words: places.map(p => slug(p.en)) }, { key: 'phrase', title: '日常用語', icon: '💬', words: [], phrases: ['say-cheese', 'excuse-me'] }],
      tz: Object.assign(Object.fromEntries(places.map(p => [slug(p.en), p.zh])), { 'say-cheese': '笑一個（拍照）', 'excuse-me': '不好意思；借過' }),
      patterns: ['where-are-you-going', 'where-is-the'], grammar: ['be'],
      visual: { xs: [{ t: "I'm going to the park.", ok: true }, { t: "I'm going to park.", ok: false, note: '地點前面要有 the' }, { t: "It's on Blue Street.", ok: true }, { t: "It's in Blue Street.", ok: false, note: '街道用 on' }],
        table: { head: ['人稱', 'be 動詞', '例句'], rows: [['I', '[am]（I\'m）', "I'm going to the library."], ['you、we、they', '[are]（We\'re）', "We're going to the supermarket."], ['he、she', '[is]（She\'s）', "She's going to the bank."]] },
        tip: { en: "Where's the park? → It's [on] Blue Street.", note: "Where's＝Where is；在某條街上用 on" } },
      qa: [{ q: 'Where are you going?', qz: '你要去哪裡？', a: "I'm going to the library.", az: '我要去圖書館。' }, { q: 'Where is she going?', qz: '她要去哪裡？', a: "She's going to the bank.", az: '她要去銀行。' },
        { q: "Where's the park?", qz: '公園在哪裡？', a: "It's on Blue Street.", az: '它在藍街上。' }],
      sents, replies });
  })();

  // ================= 五上 Unit 4 How Many Koalas Are There? =================
  (() => {
    const animals = [['elephant', '大象', '頭'], ['horse', '馬', '匹'], ['lion', '獅子', '隻'], ['monkey', '猴子', '隻'], ['tiger', '老虎', '隻'], ['turtle', '烏龜', '隻'], ['zebra', '斑馬', '匹'], ['koala', '無尾熊', '隻']].map(([en, zh, cl]) => ({ en, pl: en + 's', zh, cl }));
    const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'], nz = ['一', '兩', '三', '四', '五', '六', '七', '八', '九', '十'];
    const ppl = [{ en: 'he', zh: '他' }, { en: 'she', zh: '她' }];
    const sents = [], replies = [];
    animals.forEach((a, i) => {
      const a2 = next(animals, i), plOpts = [a.pl, a.en, a.en + 'es', a.en + "'s"];
      sents.push({ key: `hm:${a.en}`, g: 'hm', en: `How many ${a.pl} are there?`, zh: `有幾${a.cl}${a.zh}？`, why: 'How many 後面接複數名詞，問「有幾個」用 How many … are there?',
        blanks: [{ fam: 'many', w: 'many', opts: ['many', 'much', 'old', 'long'] }, { fam: 'are', w: 'are', opts: ['are', 'is', 'am', 'do'], why: '複數用 are。' }], ask: { prompt: `問：有幾${a.cl}${a.zh}？`, hint: 'How many … are there?' } });
      sents.push({ key: `one:${a.en}`, g: 'th', en: `There's one ${a.en}.`, zh: `有一${a.cl}${a.zh}。`, alts: [`There is one ${a.en}.`, `There's 1 ${a.en}.`, `There is 1 ${a.en}.`], why: "一個用 There's（There is）＋單數名詞。", ask: { prompt: `說說看：有一${a.cl}${a.zh}。`, hint: "There's one …" } });
      for (let n = 2; n <= 10; n++) sents.push({ key: `th:${n}:${a.en}`, g: 'th', en: `There are ${nums[n - 1]} ${a.pl}.`, zh: `有${nz[n - 1]}${a.cl}${a.zh}。`, alts: [`There are ${n} ${a.pl}.`], why: '兩個以上用 There are ＋複數名詞。',
        blanks: [{ fam: 'are', w: 'are', opts: ['are', 'is', 'am', 'be'], why: '兩個以上用 There are。' }, { fam: 'pl', w: a.pl, opts: plOpts, cue: `${nz[n - 1]}${a.cl}${a.zh}`, why: `${a.en} 的複數是 ${a.pl}。` }], ask: { prompt: `說說看：有${nz[n - 1]}${a.cl}${a.zh}。`, hint: 'There are …' } });
      for (let n = 1; n <= 10; n++) replies.push({ key: `hm:${n}:${a.en}`, card: `hm:${a.en}`, q: `How many ${a.pl} are there?`, cue: `🔢 ${nz[n - 1]}${a.cl}`, kind: n === 1 ? 'one' : 'many',
        en: n === 1 ? `There's one ${a.en}.` : `There are ${nums[n - 1]} ${a.pl}.`, alts: n === 1 ? [`There is one ${a.en}.`, `There's 1 ${a.en}.`, `There is 1 ${a.en}.`] : [`There are ${n} ${a.pl}.`],
        wrong: n === 1 ? [`There are one ${a.en}.`, `There's one ${a.pl}.`, `There is ${a.en}.`] : [`There is ${nums[n - 1]} ${a.pl}.`, `There are ${nums[n - 1]} ${a.en}.`, `They are ${nums[n - 1]} ${a.pl}.`],
        why: "一個：There's one ＋單數；兩個以上：There are ＋數字＋複數。" });
      ppl.forEach(p => {
        const P = cap(p.en);
        sents.push({ key: `dl:${p.en}:${a.en}`, g: 'dl', en: `Does ${p.en} like ${a.pl}?`, zh: `${p.zh}喜歡${a.zh}嗎？`, why: `${p.en} 是一個人，問句用 Does，後面 like 用原形。`,
          blanks: [{ fam: 'does', w: 'Does', opts: ['Does', 'Do', 'Is', 'Are'] }, { fam: 'like', w: 'like', opts: ['like', 'likes', 'liking', 'to like'], hint: 'like 或 likes' }], ask: { prompt: `問：${p.zh}喜歡${a.zh}嗎？`, hint: 'Does … like …?' } });
        sents.push({ key: `lk:${p.en}:${a.en}`, g: 'lk', en: `${P} likes ${a.pl}.`, zh: `${p.zh}喜歡${a.zh}。`, why: `${p.en} 是一個人，like 要加 s：likes。`,
          blanks: [{ fam: 'likes', w: 'likes', opts: ['like', 'likes', 'liking', 'is like'], hint: 'like 或 likes' }], ask: { prompt: `說說看：${p.zh}喜歡${a.zh}。`, hint: `${P} … ${a.pl}` } });
        const q = `Does ${p.en} like ${a.pl}?`;
        replies.push({ key: `y:${p.en}:${a.en}`, card: `dl:${p.en}:${a.en}`, q, cue: '⭕ 喜歡', en: `Yes, ${p.en} does.`, kind: 'y', why: 'Does …? 的肯定簡答：Yes, he／she does.',
          wrong: [`Yes, ${p.en} do.`, `Yes, ${p.en} likes.`, `No, ${p.en} doesn't.`] });
        replies.push({ key: `n:${p.en}:${a.en}`, card: `dl:${p.en}:${a.en}`, q, cue: `❌ 不喜歡，喜歡${a2.zh}`, en: `No, ${p.en} doesn't. ${P} likes ${a2.pl}.`, alts: [`No, ${p.en} does not. ${P} likes ${a2.pl}.`], kind: 'n', why: "No, he／she doesn't. 再說喜歡什麼（likes 要加 s）。",
          wrong: [`No, ${p.en} don't. ${P} like ${a2.pl}.`, `No, ${p.en} doesn't. ${P} like ${a2.pl}.`, `Yes, ${p.en} does. ${P} likes ${a2.pl}.`] });
      });
    });
    U.push({ id: 'hanlin-5-u4', book: '五上', no: 4, title: '五上 Unit 4 How Many Koalas Are There?', theme: 'How many koalas are there?', themeZh: '有幾隻無尾熊？', draft: true,
      groups: [{ key: 'animal', title: '動物', icon: '🐨', words: animals.map(a => a.en) }, { key: 'phrase', title: '日常用語', icon: '💬', words: [], phrases: ['take-care', 'calm-down'] }],
      tz: Object.assign(Object.fromEntries(animals.map(a => [a.en, a.zh])), { 'take-care': '保重！', 'calm-down': '冷靜下來。' }),
      pl: Object.fromEntries(animals.map(a => [a.en, a.pl])),
      patterns: ['how-many-are-there', 'does-she-like'], grammar: ['there-be', 'present'],
      visual: { xs: [{ t: "There's one koala.", ok: true }, { t: 'There are one koala.', ok: false, note: '一個用 There is' }, { t: 'There are two koalas.', ok: true }, { t: 'There are two koala.', ok: false, note: '兩個以上要用複數' }],
        table: { head: ['數量', '句子'], rows: [['一個', "[There's] one koala."], ['兩個以上', '[There are] two koalas.'], ['he／she 喜歡', 'She [likes] zebras.'], ['問 he／she', '[Does] he [like] horses?']] },
        tip: { en: 'How many lion[s] are there?', note: 'How many 後面接複數名詞；he／she 的 like 要加 s，但 Does 問句裡用原形 like' } },
      qa: [{ q: 'How many lions are there?', qz: '有幾隻獅子？', a: 'There are nine lions.', az: '有九隻獅子。' }, { q: 'How many koalas are there?', qz: '有幾隻無尾熊？', a: "There's one koala.", az: '有一隻無尾熊。' },
        { q: 'Does she like horses?', qz: '她喜歡馬嗎？', a: "No, she doesn't. She likes zebras.", az: '不，她不喜歡。她喜歡斑馬。' }, { q: 'Does he like monkeys?', qz: '他喜歡猴子嗎？', a: 'Yes, he does.', az: '是的，他喜歡。' }],
      sents, replies });
  })();

  // ================= 五下 Unit 1 What's Wrong? =================
  (() => {
    const parts = [['eye', 'eyes', '眼睛', '隻'], ['ear', 'ears', '耳朵', '隻'], ['nose', null, '鼻子'], ['mouth', null, '嘴巴'], ['hand', 'hands', '手', '隻'], ['arm', 'arms', '手臂', '隻'], ['leg', 'legs', '腿', '條'], ['foot', 'feet', '腳', '隻']].map(([en, pl, zh, cl]) => ({ en, pl, zh, cl }));
    const owners = [{ en: 'My', zh: '我', bad: 'I', opts: ['My', 'I', 'Me', 'Mine'] }, { en: 'His', zh: '他', bad: 'He', opts: ['His', 'He', 'Him', "He's"] }, { en: 'Her', zh: '她', bad: 'She', opts: ['Her', 'She', 'Hers', "She's"] }];
    const sents = [{ key: 'wrong', g: 'w', en: "What's wrong?", zh: '怎麼了？', alts: ['What is wrong?'], why: "What's wrong?＝怎麼了？（What's＝What is）", ask: { prompt: '問別人：怎麼了？', hint: "What's …?" } }], replies = [];
    parts.forEach(x => owners.forEach(o => [false, true].forEach(isPl => {
      if (isPl && !x.pl) return;
      const n = isPl ? x.pl : x.en, v = isPl ? 'hurt' : 'hurts', en = `${o.en} ${n} ${v}.`, otherEn = x.pl ? `${o.en} ${isPl ? x.en : x.pl} ${isPl ? 'hurts' : 'hurt'}.` : null, key = `${o.en.toLowerCase()}:${n}`;
      const why = isPl ? `${n} 是複數，動詞用 hurt。` : `${n} 是單數，動詞用 hurts。`;
      sents.push({ key, g: 'h', en, zh: `${o.zh}的${x.zh}痛。`, alts: otherEn ? [otherEn] : [], why,
        blanks: [{ fam: 'hurt', w: v, opts: ['hurt', 'hurts', 'hurting', 'is hurt'], why }, { fam: 'own', w: o.en, opts: o.opts, cue: `${o.zh}的`, why: `${o.zh}的＝${o.en.toLowerCase()}` }],
        ask: { prompt: `說說看：${o.zh}的${x.zh}${x.pl ? `（${isPl ? '兩' : '一'}${x.cl}）` : ''}痛。`, hint: `${o.en} … ${v}` } });
      replies.push({ key, q: "What's wrong?", cue: `🤕 ${o.zh}的${x.zh}${x.pl ? `（${isPl ? '兩' : '一'}${x.cl}）` : ''}`, en, kind: isPl ? 'pl' : 'sg', why,
        wrong: isPl ? [`${o.en} ${n} hurts.`, `${o.bad} ${n} hurt.`, `${o.en} ${x.en} hurt.`] : [`${o.en} ${n} hurt.`, `${o.bad} ${n} hurts.`, `${o.en} ${n} hurting.`] });
    })));
    U.push({ id: 'hanlin-6-u1', book: '五下', no: 1, title: "五下 Unit 1 What's Wrong?", theme: "What's wrong? My foot hurts.", themeZh: '怎麼了？我的腳痛。', draft: true,
      groups: [{ key: 'body', title: '身體部位', icon: '🧍', words: parts.map(p => p.en) }, { key: 'phrase', title: '日常用語', icon: '💬', words: [], phrases: ['what-s-wrong', 'give-me-a-hand', 'be-careful'] }],
      tz: Object.assign(Object.fromEntries(parts.map(p => [p.en, p.zh])), { 'what-s-wrong': '怎麼了？', 'give-me-a-hand': '幫我一下（Can you give me a hand?）', 'be-careful': '小心！' }),
      pl: Object.fromEntries(parts.filter(p => p.pl).map(p => [p.en, p.pl])),
      patterns: ['whats-wrong-hurts'], grammar: ['plural', 'pronoun'],
      visual: { xs: [{ t: 'My foot hurts.', ok: true }, { t: 'My feet hurt.', ok: true, note: 'foot → feet' }, { t: 'My feet hurts.', ok: false, note: '複數不加 s' }, { t: 'He eyes hurt.', ok: false, note: '他的＝his' }],
        table: { head: ['名詞', '動詞', '例句'], rows: [['單數（一個）', '[hurts]', 'My foot hurts.'], ['複數（兩個以上）', '[hurt]', 'His eyes hurt.'], ['我的／他的／她的', 'my／his／her', 'Her legs hurt.']] },
        tip: { en: 'foot → [feet]', note: 'foot 的複數是 feet（不規則）；其他身體部位加 s：eyes、ears、hands、arms、legs' } },
      qa: [{ q: "What's wrong?", qz: '怎麼了？', a: 'My foot hurts.', az: '我的腳痛。' }, { q: "What's wrong?", qz: '怎麼了？', a: 'His eyes hurt.', az: '他的眼睛痛。' }, { q: "What's wrong?", qz: '怎麼了？', a: 'Her arm hurts.', az: '她的手臂痛。' }],
      sents, replies });
  })();

  // ================= 五下 Unit 2 Do You Have a Headache? =================
  (() => {
    const ills = [['cold', '感冒了', 'cold-sick'], ['fever', '發燒了', 'fever'], ['runny nose', '流鼻水', 'runny-nose'], ['sore throat', '喉嚨痛', 'sore-throat'], ['headache', '頭痛', 'headache'], ['toothache', '牙痛', 'toothache'], ['stomachache', '肚子痛', 'stomachache']].map(([en, zh, k]) => ({ en, zh, k }));
    const people = [{ k: 'you', en: 'you', zh: '你', aux: 'Do', ans: 'I', S: 'I', has: 'have', sz: '我' }, { k: 'he', en: 'he', zh: '他', aux: 'Does', ans: 'he', S: 'He', has: 'has', sz: '他' }, { k: 'she', en: 'she', zh: '她', aux: 'Does', ans: 'she', S: 'She', has: 'has', sz: '她' }];
    const yes = p => `Yes, ${p.ans} ${p.aux === 'Do' ? 'do' : 'does'}.`, no = (p, aux) => `No, ${p.ans} ${(aux || p.aux) === 'Do' ? "don't" : "doesn't"}.`;
    const whyP = p => (p.aux === 'Do' ? `I／you：問句用 Do、說「有」用 have。` : `he／she：問句用 Does（後面 have 用原形），直述句用 has。`);
    const sents = [], replies = [];
    ills.forEach((x, i) => people.forEach(p => {
      const x2 = next(ills, i), Q = `${p.aux} ${p.en} have a ${x.en}?`, key = `${p.k}:${slug(x.en)}`;
      sents.push({ key: 'q:' + key, g: 'q', en: Q, zh: `${p.zh}${x.zh}嗎？`, why: whyP(p),
        blanks: [{ fam: 'dd', w: p.aux, opts: AUX }, { fam: 'a', w: 'a', opts: ['a', 'an', 'two', 'many'], why: '病症前面加 a：a cold、a fever、a headache。' }], ask: { prompt: `問${p.k === 'you' ? '對方（你）' : p.zh}：${x.zh}嗎？`, hint: `${p.en}／a ${x.en}` } });
      sents.push({ key: 's:' + key, g: 's', en: `${p.S} ${p.has} a ${x.en}.`, zh: `${p.sz}${x.zh}。`, why: whyP(p),
        blanks: [{ fam: 'has', w: p.has, opts: ['have', 'has', 'having', 'is'], why: 'I、you 用 have；he、she 用 has。' }], ask: { prompt: `說說看：${p.sz}${x.zh}。`, hint: `${p.S} … a ${x.en}` } });
      const swap = p.has === 'has' ? 'have' : 'has';
      replies.push({ key: 'y:' + key, card: 'q:' + key, q: Q, cue: '⭕ 是', en: yes(p), kind: 'y', why: whyP(p), wrong: [p.aux === 'Do' ? `Yes, ${p.ans} does.` : `Yes, ${p.ans} do.`, no(p), p.aux === 'Do' ? `Yes, ${p.ans} have.` : `Yes, ${p.ans} has.`] });
      replies.push({ key: 'n:' + key, card: 'q:' + key, q: Q, cue: `❌ 不是，${x2.zh}`, en: `${no(p)} ${p.S} ${p.has} a ${x2.en}.`, kind: 'n', why: whyP(p),
        alts: [`No, ${p.ans} ${p.aux === 'Do' ? 'do' : 'does'} not. ${p.S} ${p.has} a ${x2.en}.`],
        wrong: [`${no(p)} ${p.S} ${swap} a ${x2.en}.`, `${no(p, p.aux === 'Do' ? 'Does' : 'Do')} ${p.S} ${p.has} a ${x2.en}.`, `${yes(p)} ${p.S} ${p.has} a ${x2.en}.`] });
    }));
    U.push({ id: 'hanlin-6-u2', book: '五下', no: 2, title: '五下 Unit 2 Do You Have a Headache?', theme: 'Do you have a headache?', themeZh: '你頭痛嗎？', draft: true,
      groups: [{ key: 'ill', title: '病症', icon: '🤒', words: ills.map(x => x.k) }, { key: 'phrase', title: '日常用語', icon: '💬', words: [], phrases: ['may-i-help-you', 'you-re-welcome'] }],
      tz: { 'cold-sick': '感冒', fever: '發燒', 'runny-nose': '流鼻水', 'sore-throat': '喉嚨痛', headache: '頭痛', toothache: '牙痛', stomachache: '肚子痛', 'may-i-help-you': '需要幫忙嗎？', 'you-re-welcome': '不客氣。' },
      patterns: ['do-you-have-a-fever', 'does-she-have-a-cold'], grammar: ['present'],
      visual: { xs: [{ t: 'I have a cold.', ok: true }, { t: 'She has a cold.', ok: true }, { t: 'She have a cold.', ok: false, note: 'he／she 用 has' }, { t: 'Does she has a cold?', ok: false, note: 'Does 後面用 have' }],
        table: { head: ['人稱', '問句', '直述句', '簡答'], rows: [['I／you', '[Do] you have a fever?', 'I [have] a fever.', "Yes, I do. / No, I don't."], ['he／she', '[Does] she have a fever?', 'She [has] a fever.', "Yes, she does. / No, she doesn't."]] },
        tip: { en: 'I have [a] headache.', note: '病症前面加 a：a cold、a fever、a runny nose、a sore throat' } },
      qa: [{ q: 'Do you have a fever?', qz: '你發燒了嗎？', a: "No, I don't. I have a runny nose.", az: '沒有。我流鼻水。' }, { q: 'Do you have a headache?', qz: '你頭痛嗎？', a: 'Yes, I do.', az: '是的，我頭痛。' },
        { q: 'Does she have a cold?', qz: '她感冒了嗎？', a: "No, she doesn't. She has a stomachache.", az: '沒有。她肚子痛。' }],
      sents, replies });
  })();

  // ================= 五下 Unit 3 What Would You Like for Dinner? =================
  (() => {
    const meals = [['breakfast', '早餐'], ['lunch', '午餐'], ['dinner', '晚餐']].map(([en, zh]) => ({ en, zh }));
    const foods = [['bread', '麵包'], ['chicken', '雞肉'], ['salad', '沙拉'], ['soup', '湯'], ['noodles', '麵']].map(([en, zh]) => ({ en, zh }));
    const why = "I'd like＝I would like（我想要）；問想吃什麼用 What would you like for …?";
    const sents = [], replies = [];
    meals.forEach(m => {
      sents.push({ key: 'wq:' + m.en, g: 'wq', en: `What would you like for ${m.en}?`, zh: `你${m.zh}想吃什麼？`, why,
        blanks: [{ fam: 'for', w: 'for', opts: ['for', 'to', 'at', 'of'], why: '「當作…餐」用 for：for lunch。' }, { fam: 'meal', w: m.en, opts: ['breakfast', 'lunch', 'dinner', 'dessert'], cue: m.zh }], ask: { prompt: `問對方：你${m.zh}想吃什麼？`, hint: `What would you like for …?` } });
    });
    foods.forEach((f, i) => {
      sents.push({ key: 'id:' + f.en, g: 'id', en: `I'd like some ${f.en}.`, zh: `我想要一些${f.zh}。`, alts: [`I would like some ${f.en}.`], why,
        blanks: [{ fam: 'food', w: f.en, opts: [f.en].concat(others(foods, i).map(x => x.en)), cue: f.zh }], ask: { prompt: `說說看：我想要一些${f.zh}。`, hint: "I'd like some …" } });
      meals.forEach(m => {
        const f2 = next(foods, i), Q = `Would you like some ${f.en} for ${m.en}?`, key = `${f.en}:${m.en}`;
        sents.push({ key: 'wy:' + key, g: 'wy', en: Q, zh: `你${m.zh}想要一些${f.zh}嗎？`, why: 'Would you like some …?＝你想要一些…嗎？',
          blanks: [{ fam: 'would', w: 'Would', opts: ['Would', 'Do', 'Are', 'Does'] }, { fam: 'meal', w: m.en, opts: ['breakfast', 'lunch', 'dinner', 'dessert'], cue: m.zh }], ask: { prompt: `問對方：你${m.zh}想要一些${f.zh}嗎？`, hint: 'Would you like some …?' } });
        replies.push({ key: `w:${m.en}:${f.en}`, card: 'wq:' + m.en, q: `What would you like for ${m.en}?`, cue: `🍽️ ${f.zh}`, en: `I'd like some ${f.en}.`, alts: [`I would like some ${f.en}.`], kind: 'w', why,
          wrong: [`I like some ${f.en}.`, `I'd like some ${f2.en}.`, 'Yes, please.'] });
        replies.push({ key: 'y:' + key, card: 'wy:' + key, q: Q, cue: '⭕ 要', en: 'Yes, please.', kind: 'y', why: '要的話：Yes, please.', wrong: ['No, thank you.', 'Yes, I do.', 'Yes, I would like.'] });
        replies.push({ key: 'n:' + key, card: 'wy:' + key, q: Q, cue: `❌ 不要，想要${f2.zh}`, en: `No, thank you. I'd like some ${f2.en}.`, alts: [`No, thank you. I would like some ${f2.en}.`, `No, thanks. I'd like some ${f2.en}.`], kind: 'n', why: "不要的話：No, thank you. 再說 I'd like some …",
          wrong: [`Yes, please. I'd like some ${f2.en}.`, `No, thank you. I like some ${f2.en}.`, `No, please. I'd like some ${f2.en}.`] });
      });
    });
    U.push({ id: 'hanlin-6-u3', book: '五下', no: 3, title: '五下 Unit 3 What Would You Like for Dinner?', theme: 'What would you like for dinner?', themeZh: '你晚餐想吃什麼？', draft: true,
      groups: [{ key: 'meal', title: '三餐', icon: '🍽️', words: meals.map(m => m.en) }, { key: 'food', title: '食物', icon: '🍞', words: foods.map(f => f.en) }, { key: 'phrase', title: '日常用語', icon: '💬', words: [], phrases: ['i-see', 'too-bad'] }],
      tz: Object.assign(Object.fromEntries(meals.concat(foods).map(x => [x.en, x.zh])), { 'i-see': '我懂了。', 'too-bad': '太可惜了！' }),
      patterns: ['what-would-you-like-for', 'would-you-like-some'], grammar: ['countable', 'article'],
      visual: { xs: [{ t: "I'd like some soup.", ok: true }, { t: 'I would like some soup.', ok: true, note: "I'd＝I would" }, { t: 'I like some soup.', ok: false, note: "要說 I'd like" }, { t: 'a bread', ok: false, note: 'bread 不能加 a' }],
        table: { head: ['用法', '後面接', '例子'], rows: [['[a]', '一個（子音開頭）', 'a cake'], ['[an]', '一個（母音開頭）', 'an egg'], ['[some]', '複數或不可數', 'some bread、some noodles']] },
        tip: { en: 'Would you like some soup? → Yes, please. / No, thank you.', note: '要：Yes, please.；不要：No, thank you.' } },
      qa: [{ q: 'What would you like for lunch?', qz: '你午餐想吃什麼？', a: "I'd like some salad.", az: '我想要一些沙拉。' }, { q: 'Would you like some chicken for dinner?', qz: '你晚餐想要一些雞肉嗎？', a: 'Yes, please.', az: '好的，麻煩你。' },
        { q: 'Would you like some bread for lunch?', qz: '你午餐想要一些麵包嗎？', a: "No, thank you. I'd like some soup.", az: '不用了，謝謝。我想要一些湯。' }],
      sents, replies });
  })();

  // ================= 五下 Unit 4 Whose Backpack Is That? =================
  (() => {
    const items = [['backpack', '背包', 'backpack'], ['cap', '帽子', 'cap'], ['lunchbox', '便當盒', 'lunchbox'], ['umbrella', '雨傘', 'umbrella'], ['water bottle', '水壺', 'water-bottle'], ['workbook', '習作', 'workbook']].map(([en, zh, k]) => ({ en, zh, k }));
    const pls = [['glasses', '眼鏡', 'glasses'], ['shoes', '鞋子', 'shoe']].map(([en, zh, k]) => ({ en, zh, k }));
    const owners = [{ en: 'my', zh: '我', opts: ['my', 'me', 'I', 'mine'] }, { en: 'your', zh: '你', opts: ['your', 'you', "you're", 'yours'] }, { en: 'his', zh: '他', opts: ['his', 'he', 'him', "he's"] },
      { en: 'her', zh: '她', opts: ['her', 'she', 'hers', "she's"] }, { en: "Tony's", zh: '東尼', opts: ["Tony's", 'Tony', 'Tonys', 'Tony is'] }, { en: "Amy's", zh: '艾美', opts: ["Amy's", 'Amy', 'Amys', 'Amy is'] }];
    const why = '所有格：I → my、you → your、he → his、she → her、名字＋\'s；this／that 配 is，these／those 配 are。';
    const sents = [], replies = [];
    const W = ['Whose', 'Who', "Who's", 'What'], BE = ['is', 'are', 'am', 'do'];
    items.forEach(it => ['this', 'that'].forEach(d => {
      const Q = `Whose ${it.en} is ${d}?`, dz = d === 'this' ? '這' : '那', key = `${slug(it.en)}:${d}`;
      sents.push({ key: 'wq:' + key, g: 'wq', en: Q, zh: `${dz}是誰的${it.zh}？`, why, blanks: [{ fam: 'whose', w: 'Whose', opts: W, why: '問「誰的」用 Whose。' }, { fam: 'be', w: 'is', opts: BE, why: 'this、that 配 is。' }], ask: { prompt: `問：${dz}是誰的${it.zh}？`, hint: `Whose … is ${d}?` } });
      owners.forEach((o, j) => replies.push({ key: `sg:${key}:${slug(o.en)}`, card: 'wq:' + key, q: Q, cue: `👤 ${o.zh}的`, en: `It's ${o.en} ${it.en}.`, alts: [`It is ${o.en} ${it.en}.`], kind: 'sg', why,
        wrong: [`It's ${o.opts[1]} ${it.en}.`, `It's ${o.opts[3]} ${it.en}.`, `They are ${o.en} ${it.en}.`] }));
    }));
    pls.forEach(it => ['these', 'those'].forEach(d => {
      const Q = `Whose ${it.en} are ${d}?`, dz = d === 'these' ? '這些' : '那些', key = `${it.en}:${d}`;
      sents.push({ key: 'wq:' + key, g: 'wq', en: Q, zh: `${dz}是誰的${it.zh}？`, why, blanks: [{ fam: 'whose', w: 'Whose', opts: W, why: '問「誰的」用 Whose。' }, { fam: 'be', w: 'are', opts: BE, why: 'these、those 配 are。' }], ask: { prompt: `問：${dz}是誰的${it.zh}？`, hint: `Whose … are ${d}?` } });
      owners.forEach(o => replies.push({ key: `pl:${key}:${slug(o.en)}`, card: 'wq:' + key, q: Q, cue: `👤 ${o.zh}的`, en: `They are ${o.en} ${it.en}.`, alts: [`They're ${o.en} ${it.en}.`], kind: 'pl', why,
        wrong: [`It's ${o.en} ${it.en}.`, `They are ${o.opts[1]} ${it.en}.`, `They is ${o.en} ${it.en}.`] }));
    }));
    owners.forEach(o => {
      items.forEach(it => sents.push({ key: `it:${slug(o.en)}:${slug(it.en)}`, g: 'it', en: `It's ${o.en} ${it.en}.`, zh: `是${o.zh}的${it.zh}。`, alts: [`It is ${o.en} ${it.en}.`], why,
        blanks: [{ fam: 'own', w: o.en, opts: o.opts, cue: `${o.zh}的`, why: `${o.zh}的＝${o.en}` }], ask: { prompt: `說說看：是${o.zh}的${it.zh}。`, hint: "It's …" } }));
      pls.forEach(it => sents.push({ key: `they:${slug(o.en)}:${it.en}`, g: 'it', en: `They are ${o.en} ${it.en}.`, zh: `是${o.zh}的${it.zh}。`, alts: [`They're ${o.en} ${it.en}.`], why,
        blanks: [{ fam: 'own', w: o.en, opts: o.opts, cue: `${o.zh}的`, why: `${o.zh}的＝${o.en}` }], ask: { prompt: `說說看：（那些）是${o.zh}的${it.zh}。`, hint: 'They are …' } }));
    });
    U.push({ id: 'hanlin-6-u4', book: '五下', no: 4, title: '五下 Unit 4 Whose Backpack Is That?', theme: 'Whose backpack is that?', themeZh: '那是誰的背包？', draft: true,
      groups: [{ key: 'item', title: '物品', icon: '🎒', words: items.map(x => x.k).concat(pls.map(x => x.k)) }, { key: 'phrase', title: '日常用語', icon: '💬', words: [], phrases: ['amazing', 'what-s-the-matter'] }],
      tz: { backpack: '背包', cap: '帽子（鴨舌帽）', lunchbox: '便當盒', umbrella: '雨傘', 'water-bottle': '水壺', workbook: '習作', glasses: '眼鏡', shoe: '鞋子', amazing: '太神奇了！', 'what-s-the-matter': '怎麼回事？' },
      pl: { shoe: 'shoes' },
      patterns: ['whose-is-this', 'whose-are-these'], grammar: ['pronoun'],
      visual: { xs: [{ t: 'Whose cap is this?', ok: true }, { t: "Who's cap is this?", ok: false, note: '誰的＝Whose' }, { t: 'Whose glasses are those?', ok: true }, { t: 'Whose glasses is those?', ok: false, note: 'glasses 是複數' }],
        table: { head: ['人', '所有格', '例句'], rows: [['I', '[my]', "It's my backpack."], ['you', '[your]', "It's your cap."], ['he', '[his]', "It's his umbrella."], ['she', '[her]', 'They are her shoes.'], ['Tony', "[Tony's]", "It's Tony's lunchbox."]] },
        tip: { en: 'Whose umbrella [is] this? / Whose shoes [are] these?', note: 'this、that 配 is；these、those 配 are（glasses、shoes 是複數）' } },
      qa: [{ q: 'Whose backpack is that?', qz: '那是誰的背包？', a: "It's my backpack.", az: '那是我的背包。' }, { q: 'Whose umbrella is this?', qz: '這是誰的雨傘？', a: "It's Tony's umbrella.", az: '是東尼的雨傘。' },
        { q: 'Whose glasses are those?', qz: '那是誰的眼鏡？', a: "They are Amy's glasses.", az: '是艾美的眼鏡。' }],
      sents, replies });
  })();

  window.DATA_TEXTBOOK = U;
})();
