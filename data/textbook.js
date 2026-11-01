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

  // ================= 六上（第 7 冊）：依學校公開的課程計畫整理（屏東縣 114 學年度六年級英語 Here We Go 7 教學計畫），待課本核對 =================
  // 計畫只列各課單字與句型（沒有日常用語），所以這四課沒有「日常用語」片語組；對話、情境也還沒有，等課本核對再補。
  // ================= 六上 Unit 1 Where Are You From? =================
  (() => {
    const cs = [['Australia', '澳洲', 'australia'], ['India', '印度', 'india'], ['Japan', '日本', 'japan'], ['Spain', '西班牙', 'spain'], ['Taiwan', '台灣', 'taiwan'], ['the UK', '英國', 'uk', 'UK'], ['the USA', '美國', 'usa', 'USA']]
      .map(([en, zh, k, w]) => ({ en, zh, k, w: w || en }));
    const ppl = [{ k: 'he', en: 'he', S: 'He', c: "He's", zh: '他' }, { k: 'she', en: 'she', S: 'She', c: "She's", zh: '她' }];
    const BE = ['are', 'is', 'am', 'do'], why = 'I 配 am（I\'m）；you 配 are；he、she 配 is。問來自哪裡：Where are you from? / Where is he from?';
    const sents = [
      { key: 'wq:you', g: 'wq', en: 'Where are you from?', zh: '你來自哪裡？', why, blanks: [{ fam: 'be', w: 'are', opts: BE }, { fam: 'from', w: 'from', opts: ['from', 'to', 'in', 'at'], why: '來自＝from。' }], ask: { prompt: '問對方：你來自哪裡？', hint: 'Where … from?' } },
      { key: 'wq:he', g: 'wq', en: 'Where is he from?', zh: '他來自哪裡？', why, blanks: [{ fam: 'be', w: 'is', opts: BE }], ask: { prompt: '問：他來自哪裡？', hint: 'Where … he from?' } },
      { key: 'wq:she', g: 'wq', en: 'Where is she from?', zh: '她來自哪裡？', why, blanks: [{ fam: 'be', w: 'is', opts: BE }], ask: { prompt: '問：她來自哪裡？', hint: 'Where … she from?' } }];
    const replies = [];
    cs.forEach((c, i) => {
      const c2 = next(cs, i), cOpts = [c.w].concat(others(cs, i).map(x => x.w));
      sents.push({ key: 'i:' + c.k, g: 'i', en: `I'm from ${c.en}.`, zh: `我來自${c.zh}。`, alts: [`I am from ${c.en}.`], why,
        blanks: [{ fam: 'ctry', w: c.w, opts: cOpts, cue: c.zh, why: `${c.zh}＝${c.en}（國名第一個字母大寫）` }, { fam: 'from', w: 'from', opts: ['from', 'to', 'in', 'at'], why: '來自＝from。' }], ask: { prompt: `說說看：我來自${c.zh}。`, hint: "I'm from …" } });
      ppl.forEach(p => {
        sents.push({ key: `${p.k}:${c.k}`, g: 'he', en: `${p.S} is from ${c.en}.`, zh: `${p.zh}來自${c.zh}。`, alts: [`${p.c} from ${c.en}.`], why,
          blanks: [{ fam: 'ctry', w: c.w, opts: cOpts, cue: c.zh }, { fam: 'be', w: 'is', opts: BE }], ask: { prompt: `說說看：${p.zh}來自${c.zh}。`, hint: `${p.c} from …` } });
        sents.push({ key: `q:${p.k}:${c.k}`, g: 'q', en: `Is ${p.en} from ${c.en}?`, zh: `${p.zh}來自${c.zh}嗎？`, why: 'he、she 用 Is 問：Is he from …? 回答 Yes, he is. / No, he isn\'t.',
          blanks: [{ fam: 'isq', w: 'Is', opts: ['Is', 'Are', 'Do', 'Does'] }], ask: { prompt: `問：${p.zh}來自${c.zh}嗎？`, hint: `Is ${p.en} from …?` } });
        replies.push({ key: `y:${p.k}:${c.k}`, card: `q:${p.k}:${c.k}`, q: `Is ${p.en} from ${c.en}?`, cue: `⭕ 是`, en: `Yes, ${p.en} is.`, kind: 'y', why: 'Is he …? 對的話：Yes, he is.（句尾不縮寫）',
          wrong: [`Yes, ${p.en} does.`, `Yes, ${p.en}'s.`, `No, ${p.en} isn't.`] });
        replies.push({ key: `n:${p.k}:${c.k}`, card: `q:${p.k}:${c.k}`, q: `Is ${p.en} from ${c.en}?`, cue: `❌ 不是，${p.zh}來自${c2.zh}`, en: `No, ${p.en} isn't. ${p.c} from ${c2.en}.`, alts: [`No, ${p.en} is not. ${p.S} is from ${c2.en}.`], kind: 'n',
          why: "不對的話：No, he isn't. 再說他來自哪裡。", wrong: [`No, ${p.en} doesn't. ${p.c} from ${c2.en}.`, `No, ${p.en} isn't. ${p.c} from ${c.en}.`, `Yes, ${p.en} is. ${p.c} from ${c2.en}.`] });
      });
      replies.push({ key: `w:${c.k}`, card: 'wq:you', q: 'Where are you from?', cue: `🌏 ${c.zh}`, en: `I'm from ${c.en}.`, alts: [`I am from ${c.en}.`], kind: 'w', why,
        wrong: [`I from ${c.en}.`, `I'm from ${c2.en}.`, `I'm come from ${c.en}.`] });
    });
    U.push({ id: 'hanlin-7-u1', book: '六上', no: 1, title: '六上 Unit 1 Where Are You From?', theme: 'Where are you from?', themeZh: '你來自哪裡？', draft: true,
      groups: [{ key: 'country', title: '國家', icon: '🌏', words: cs.slice(0, 4).map(c => c.k) }, { key: 'country2', title: '國家（續）', icon: '🗺️', words: cs.slice(4).map(c => c.k) }],
      tz: Object.fromEntries(cs.map(c => [c.k, c.zh + (c.en !== c.w ? `（${c.en}）` : '')])),
      patterns: ['where-are-you-from', 'is-he-from'], grammar: ['be'],
      visual: { xs: [{ t: "I'm from Taiwan.", ok: true }, { t: 'I from Taiwan.', ok: false, note: '要有 be 動詞 am' }, { t: "She's from the UK.", ok: true }, { t: 'She from UK.', ok: false, note: '要有 is；the UK 前面有 the' }],
        table: { head: ['問句', '回答'], rows: [['Where [are] you from?', "I'm from Taiwan."], ['Where [is] he from?', "He's from Japan."], ['[Is] she from India?', "Yes, she is. / No, she isn't. She's from Spain."]] },
        tip: { en: "I'm from [the] USA. / I'm from Japan.", note: 'the UK、the USA 前面要加 the；其他國名不加' } },
      qa: [{ q: 'Where are you from?', qz: '你來自哪裡？', a: "I'm from Taiwan.", az: '我來自台灣。' }, { q: 'Is he from India?', qz: '他來自印度嗎？', a: 'Yes, he is.', az: '是的，他是。' },
        { q: 'Is she from India?', qz: '她來自印度嗎？', a: "No, she isn't. She's from the UK.", az: '不是，她來自英國。' }],
      sents, replies });
  })();

  // ================= 六上 Unit 2 How Do You Go to School? =================
  (() => {
    const ms = [['bike', 'by bike', '騎腳踏車'], ['bus', 'by bus', '搭公車'], ['car', 'by car', '坐車'], ['MRT', 'by MRT', '搭捷運'], ['scooter', 'by scooter', '騎機車'], ['taxi', 'by taxi', '搭計程車'], ['train', 'by train', '搭火車'], ['foot', 'on foot', '走路']]
      .map(([w, by, zh]) => ({ w, by, zh, k: slug(by) }));
    const ppl = [{ k: 'he', en: 'he', S: 'He', zh: '他' }, { k: 'she', en: 'she', S: 'She', zh: '她' }];
    const why = 'I、you 配 go；he、she 配 goes。交通方式：by bus、by MRT…，走路是 on foot。';
    const sents = [
      { key: 'hq:you', g: 'hq', en: 'How do you go to school?', zh: '你怎麼去上學？', why, blanks: [{ fam: 'dd', w: 'do', opts: ['do', 'does', 'is', 'are'], why: 'I、you 用 do 問。' }], ask: { prompt: '問對方：你怎麼去上學？', hint: 'How … go to school?' } },
      { key: 'hq:he', g: 'hq', en: 'How does he go to school?', zh: '他怎麼去上學？', why, blanks: [{ fam: 'dd', w: 'does', opts: ['does', 'do', 'is', 'are'] }], ask: { prompt: '問：他怎麼去上學？', hint: 'How … he go to school?' } },
      { key: 'hq:she', g: 'hq', en: 'How does she go to school?', zh: '她怎麼去上學？', why, blanks: [{ fam: 'dd', w: 'does', opts: ['does', 'do', 'is', 'are'] }], ask: { prompt: '問：她怎麼去上學？', hint: 'How … she go to school?' } }];
    const replies = [];
    ms.forEach((m, i) => {
      const m2 = next(ms, i), pw = m.by.split(' ')[0], wrongBy = m.by === 'on foot' ? 'by foot' : 'on ' + m.w;
      sents.push({ key: 'i:' + m.k, g: 'i', en: `I go to school ${m.by}.`, zh: `我${m.zh}上學。`, why,
        blanks: [{ fam: 'by', w: pw, opts: ['by', 'on', 'in', 'at'], why: m.by === 'on foot' ? '走路是 on foot。' : `搭交通工具用 by：${m.by}。` }], ask: { prompt: `說說看：我${m.zh}上學。`, hint: `I go to school ${pw} …` } });
      ppl.forEach(p => {
        sents.push({ key: `${p.k}:${m.k}`, g: 'he', en: `${p.S} goes to school ${m.by}.`, zh: `${p.zh}${m.zh}上學。`, why,
          blanks: [{ fam: 'goes', w: 'goes', opts: ['go', 'goes', 'going', 'gos'], why: 'he、she 後面 go 要變 goes。' }], ask: { prompt: `說說看：${p.zh}${m.zh}上學。`, hint: `${p.S} goes …` } });
        sents.push({ key: `q:${p.k}:${m.k}`, g: 'q', en: `Does ${p.en} go to school ${m.by}?`, zh: `${p.zh}${m.zh}上學嗎？`, why: 'he、she 用 Does 問，後面 go 用原形。',
          blanks: [{ fam: 'dd', w: 'Does', opts: ['Does', 'Do', 'Is', 'Are'], why: 'he、she 用 Does 問。' }], ask: { prompt: `問：${p.zh}${m.zh}上學嗎？`, hint: `Does ${p.en} go to school …?` } });
        replies.push({ key: `hw:${p.k}:${m.k}`, card: `hq:${p.k}`, q: `How does ${p.en} go to school?`, cue: `🚌 ${m.zh}`, en: `${p.S} goes to school ${m.by}.`, kind: 'hw', why,
          wrong: [`${p.S} go to school ${m.by}.`, `${p.S} goes to school ${m2.by}.`, `${p.S} goes to school ${wrongBy}.`] });
        replies.push({ key: `y:${p.k}:${m.k}`, card: `q:${p.k}:${m.k}`, q: `Does ${p.en} go to school ${m.by}?`, cue: '⭕ 是', en: `Yes, ${p.en} does.`, kind: 'y', why: 'Does …? 對的話：Yes, he does.',
          wrong: [`Yes, ${p.en} do.`, `Yes, ${p.en} goes.`, `No, ${p.en} doesn't.`] });
        replies.push({ key: `n:${p.k}:${m.k}`, card: `q:${p.k}:${m.k}`, q: `Does ${p.en} go to school ${m.by}?`, cue: `❌ 不是，${m2.zh}`, en: `No, ${p.en} doesn't. ${p.S} goes to school ${m2.by}.`, alts: [`No, ${p.en} does not. ${p.S} goes to school ${m2.by}.`], kind: 'n',
          why: "不對的話：No, he doesn't. 再說他怎麼去（goes 要加 es）。", wrong: [`No, ${p.en} doesn't. ${p.S} go to school ${m2.by}.`, `No, ${p.en} don't. ${p.S} goes to school ${m2.by}.`, `Yes, ${p.en} does. ${p.S} goes to school ${m2.by}.`] });
      });
      replies.push({ key: `w:${m.k}`, card: 'hq:you', q: 'How do you go to school?', cue: `🚌 ${m.zh}`, en: `I go to school ${m.by}.`, kind: 'w', why,
        wrong: [`I goes to school ${m.by}.`, `I go to school ${m2.by}.`, `I go to school ${wrongBy}.`] });
    });
    U.push({ id: 'hanlin-7-u2', book: '六上', no: 2, title: '六上 Unit 2 How Do You Go to School?', theme: 'How do you go to school?', themeZh: '你怎麼去上學？', draft: true,
      groups: [{ key: 'transport', title: '交通工具', icon: '🚌', words: ['bike', 'bus', 'car', 'mrt', 'scooter', 'taxi', 'train'] }, { key: 'phrase', title: '交通方式', icon: '🚶', words: [], phrases: ['by-bus', 'on-foot'] }],
      tz: { bike: '腳踏車（by bike 騎腳踏車）', bus: '公車（by bus 搭公車）', car: '汽車（by car 坐車）', mrt: '捷運（by MRT 搭捷運）', scooter: '機車（by scooter 騎機車）', taxi: '計程車（by taxi 搭計程車）', train: '火車（by train 搭火車）', 'by-bus': '搭公車', 'on-foot': '走路' },
      patterns: ['how-do-you-go-to-school', 'does-he-go-to-school-by'], grammar: ['present'],
      visual: { chips: { a: 'by', items: ['bike', 'bus', 'car', 'MRT', 'scooter', 'taxi', 'train'] },
        xs: [{ t: 'I go to school by bus.', ok: true }, { t: 'I go to school on foot.', ok: true, note: '走路用 on foot' }, { t: 'I go to school by foot.', ok: false }, { t: 'She go to school by MRT.', ok: false, note: 'she 要用 goes' }],
        table: { head: ['人稱', '問句', '回答'], rows: [['I／you', 'How [do] you go to school?', 'I [go] to school by bike.'], ['he／she', 'How [does] she go to school?', 'She [goes] to school by bus.'], ['he／she', '[Does] he go to school by car?', "No, he doesn't. He goes to school on foot."]] },
        tip: { en: 'by bus / by MRT / [on] foot', note: '搭交通工具用 by（中間不加 a、the）；走路是 on foot' } },
      qa: [{ q: 'How do you go to school?', qz: '你怎麼去上學？', a: 'I go to school by bike.', az: '我騎腳踏車上學。' }, { q: 'Does she go to school by bus?', qz: '她搭公車上學嗎？', a: 'Yes, she does.', az: '是的。' },
        { q: 'Does he go to school by car?', qz: '他坐車上學嗎？', a: "No, he doesn't. He goes to school on foot.", az: '不是，他走路上學。' }],
      sents, replies });
  })();

  // ================= 六上 Unit 3 What Do You Do on Weekends? =================
  (() => {
    const acts = [['go jogging', 'goes jogging', '去慢跑', 'going jogging'], ['play baseball', 'plays baseball', '打棒球', 'playing baseball'], ['play basketball', 'plays basketball', '打籃球', 'playing basketball'], ['ride a bike', 'rides a bike', '騎腳踏車', 'riding a bike'],
      ['listen to music', 'listens to music', '聽音樂', 'listening to music'], ['study English', 'studies English', '讀英文', 'studying English'], ['surf the Internet', 'surfs the Internet', '上網', 'surfing the Internet'], ['watch TV', 'watches TV', '看電視', 'watching TV']]
      .map(([v, s, zh, ing]) => ({ v, s, zh, ing, k: slug(v) }));
    const ppl = [{ k: 'he', en: 'he', S: 'He', own: 'his', zh: '他' }, { k: 'she', en: 'she', S: 'She', own: 'her', zh: '她' }];
    const why = 'I、you 用原形（play、watch）；he、she 動詞要加 s／es（plays、watches、studies、goes）。';
    const sents = [
      { key: 'wq:you', g: 'wq', en: 'What do you do on weekends?', zh: '你週末做什麼？', why, blanks: [{ fam: 'on', w: 'on', opts: ['on', 'in', 'at', 'to'], why: '週末用 on weekends。' }], ask: { prompt: '問對方：你週末做什麼？', hint: 'What … on weekends?' } }];
    ppl.forEach(p => sents.push({ key: 'wq:' + p.k, g: 'wq', en: `What does ${p.en} do in ${p.own} free time?`, zh: `${p.zh}空閒的時候做什麼？`, why,
      blanks: [{ fam: 'own', w: p.own, opts: p.k === 'he' ? ['his', 'he', 'him', 'her'] : ['her', 'she', 'hers', 'his'], why: `${p.en} 的＝${p.own}` }],
      ask: { prompt: `問：${p.zh}空閒的時候做什麼？`, hint: `What does ${p.en} do …?` } }));
    const replies = [];
    acts.forEach((a, i) => {
      const a2 = next(acts, i), w0 = a.v.split(' ')[0], s0 = a.s.split(' ')[0];
      sents.push({ key: 'i:' + a.k, g: 'i', en: `I ${a.v} on weekends.`, zh: `我週末${a.zh}。`, why,
        blanks: [{ fam: 'on', w: 'on', opts: ['on', 'in', 'at', 'to'], why: '週末用 on weekends。' }], ask: { prompt: `說說看：我週末${a.zh}。`, hint: `I ${w0} … on weekends.` } });
      ppl.forEach(p => {
        sents.push({ key: `${p.k}:${a.k}`, g: 'he', en: `${p.S} ${a.s} in ${p.own} free time.`, zh: `${p.zh}空閒的時候${a.zh}。`, why,
          blanks: [{ fam: 's3', w: s0, opts: [s0, w0, a.ing.split(' ')[0], 'is ' + a.ing.split(' ')[0]], why: `${p.en} 是一個人，${w0} 要變 ${s0}。` },
            { fam: 'own', w: p.own, opts: p.k === 'he' ? ['his', 'he', 'him', 'her'] : ['her', 'she', 'hers', 'his'], why: `${p.en} 的＝${p.own}` }], ask: { prompt: `說說看：${p.zh}空閒的時候${a.zh}。`, hint: `${p.S} ${s0} …` } });
        replies.push({ key: `h:${p.k}:${a.k}`, card: `${p.k}:${a.k}`, q: `What does ${p.en} do in ${p.own} free time?`, cue: `🎈 ${a.zh}`, en: `${p.S} ${a.s} in ${p.own} free time.`, alts: [`${p.S} ${a.s}.`], kind: p.k, why,
          wrong: [`${p.S} ${a.v} in ${p.own} free time.`, `${p.S} ${a2.s} in ${p.own} free time.`, `${p.S} is ${a.ing} in ${p.own} free time.`] });
      });
      replies.push({ key: 'w:' + a.k, card: 'i:' + a.k, q: 'What do you do on weekends?', cue: `🎈 ${a.zh}`, en: `I ${a.v} on weekends.`, alts: [`I ${a.v}.`], kind: 'w', why,
        wrong: [`I ${a.s} on weekends.`, `I ${a2.v} on weekends.`, `I ${a.v} in weekends.`] });
    });
    U.push({ id: 'hanlin-7-u3', book: '六上', no: 3, title: '六上 Unit 3 What Do You Do on Weekends?', theme: 'What do you do on weekends?', themeZh: '你週末做什麼？', draft: true,
      groups: [{ key: 'act', title: '休閒活動（單字）', icon: '⚾', words: ['jog', 'baseball', 'basketball', 'internet', 'tv', 'weekend'] }, { key: 'phrase', title: '休閒活動（片語）', icon: '🎧', words: [], phrases: ['play-baseball', 'play-basketball', 'ride-a-bike', 'listen-to-music', 'surf-the-internet', 'watch-tv'] }],
      tz: { jog: '慢跑（go jogging 去慢跑）', baseball: '棒球', basketball: '籃球', internet: '網際網路（surf the Internet 上網）', tv: '電視', weekend: '週末（on weekends 每逢週末）',
        'play-baseball': '打棒球', 'play-basketball': '打籃球', 'ride-a-bike': '騎腳踏車', 'listen-to-music': '聽音樂', 'surf-the-internet': '上網', 'watch-tv': '看電視' },
      patterns: ['what-do-you-do-on-weekends', 'what-does-she-do-free-time'], grammar: ['present'],
      visual: { xs: [{ t: 'I watch TV on weekends.', ok: true }, { t: 'He watches TV in his free time.', ok: true, note: 'he 要加 es' }, { t: 'She study English.', ok: false, note: 'she 要用 studies' }, { t: 'I go jogging in weekends.', ok: false, note: '週末用 on' }],
        table: { head: ['動詞', 'he／she 用', '規則'], rows: [['play', '[plays]', '一般加 s'], ['watch', '[watches]', 'ch、sh、s、x 結尾加 es'], ['go', '[goes]', 'o 結尾加 es'], ['study', '[studies]', '子音＋y：去 y 加 ies']] },
        tip: { en: 'What [does] she do in [her] free time?', note: 'he 配 his、she 配 her；問 he、she 用 does，後面的 do 是原形' } },
      qa: [{ q: 'What do you do on weekends?', qz: '你週末做什麼？', a: 'I go jogging on weekends.', az: '我週末去慢跑。' }, { q: 'What does she do in her free time?', qz: '她空閒的時候做什麼？', a: 'She watches TV in her free time.', az: '她空閒的時候看電視。' },
        { q: 'What does he do in his free time?', qz: '他空閒的時候做什麼？', a: 'He studies English in his free time.', az: '他空閒的時候讀英文。' }],
      sents, replies });
  })();

  // ================= 六上 Unit 4 What Time Do You Get Up? =================
  (() => {
    const rs = [['get up', 'gets up', '起床', 'six thirty', '六點半'], ['go to school', 'goes to school', '去上學', 'seven thirty', '七點半'], ['have lunch', 'has lunch', '吃午餐', 'twelve', '十二點'], ['go home', 'goes home', '回家', 'four', '四點'],
      ['do my homework', 'does * homework', '寫功課', 'five', '五點'], ['take a shower', 'takes a shower', '洗澡', 'eight', '八點'], ['go to bed', 'goes to bed', '上床睡覺', 'nine thirty', '九點半']]
      .map(([v, s, zh, t, tz]) => ({ v, s, zh, t, tz, k: slug(v.replace(' my', '')) }));
    const ppl = [{ k: 'he', en: 'he', S: 'He', own: 'his', zh: '他' }, { k: 'she', en: 'she', S: 'She', own: 'her', zh: '她' }];
    const vP = (r, p) => r.v.replace(' my ', ` ${p.own} `), sP = (r, p) => r.s.replace('*', p.own);
    const why = '問幾點做某事：What time do you …? 回答用 at＋時間；he、she 動詞要加 s／es（gets、goes、has、does）。';
    const sents = [], replies = [];
    rs.forEach((r, i) => {
      const r2 = next(rs, i), w0 = r.v.split(' ')[0], s0 = r.s.split(' ')[0];
      sents.push({ key: 'wq:you:' + r.k, g: 'wq', en: `What time do you ${r.v}?`, zh: `你幾點${r.zh}？`, why,
        blanks: [{ fam: 'time', w: 'time', opts: ['time', 'day', 'old', 'many'], why: '問幾點用 What time。' }, { fam: 'dd', w: 'do', opts: ['do', 'does', 'is', 'are'] }], ask: { prompt: `問對方：你幾點${r.zh}？`, hint: `What time do you ${w0} …?` } });
      sents.push({ key: 'i:' + r.k, g: 'i', en: `I ${r.v} at ${r.t}.`, zh: `我${r.tz}${r.zh}。`, why,
        blanks: [{ fam: 'at', w: 'at', opts: ['at', 'on', 'in', 'to'], why: '幾點用 at：at six thirty。' }], ask: { prompt: `說說看：我${r.tz}${r.zh}。`, hint: `I ${w0} … at …` } });
      replies.push({ key: 'w:' + r.k, card: 'wq:you:' + r.k, q: `What time do you ${r.v}?`, cue: `⏰ ${r.tz}`, en: `I ${r.v} at ${r.t}.`, alts: [`At ${r.t}.`], kind: 'w', why,
        wrong: [`I ${r.s.replace('*', 'my')} at ${r.t}.`, `I ${r.v} on ${r.t}.`, `I ${r.v} at ${r2.t}.`] });
      ppl.forEach(p => {
        sents.push({ key: `wq:${p.k}:${r.k}`, g: 'wq', en: `What time does ${p.en} ${vP(r, p)}?`, zh: `${p.zh}幾點${r.zh}？`, why,
          blanks: [{ fam: 'dd', w: 'does', opts: ['does', 'do', 'is', 'are'] }], ask: { prompt: `問：${p.zh}幾點${r.zh}？`, hint: `What time does ${p.en} …?` } });
        sents.push({ key: `${p.k}:${r.k}`, g: 'he', en: `${p.S} ${sP(r, p)} at ${r.t}.`, zh: `${p.zh}${r.tz}${r.zh}。`, why,
          blanks: [{ fam: 's3', w: s0, opts: [s0, w0, { get: 'getting', go: 'going', have: 'having', do: 'doing', take: 'taking' }[w0], 'is'], why: `${p.en} 是一個人，${w0} 要變 ${s0}。` }], ask: { prompt: `說說看：${p.zh}${r.tz}${r.zh}。`, hint: `${p.S} ${s0} …` } });
        replies.push({ key: `h:${p.k}:${r.k}`, card: `wq:${p.k}:${r.k}`, q: `What time does ${p.en} ${vP(r, p)}?`, cue: `⏰ ${r.tz}`, en: `${p.S} ${sP(r, p)} at ${r.t}.`, alts: [`At ${r.t}.`], kind: p.k, why,
          wrong: [`${p.S} ${vP(r, p)} at ${r.t}.`, `${p.S} ${sP(r, p)} in ${r.t}.`, `${p.S} ${sP(r, p)} at ${r2.t}.`] });
      });
    });
    U.push({ id: 'hanlin-7-u4', book: '六上', no: 4, title: '六上 Unit 4 What Time Do You Get Up?', theme: 'What time do you get up?', themeZh: '你幾點起床？', draft: true,
      groups: [{ key: 'word', title: '單字', icon: '🏠', words: ['homework', 'shower', 'bed', 'home'] }, { key: 'phrase', title: '一天的作息', icon: '⏰', words: [], phrases: ['get-up', 'go-to-school', 'have-lunch', 'go-home', 'do-homework', 'take-a-shower', 'go-to-bed'] }],
      tz: { homework: '功課（do my homework 寫功課）', shower: '淋浴（take a shower 洗澡）', bed: '床（go to bed 上床睡覺）', home: '家（go home 回家）',
        'get-up': '起床', 'go-to-school': '去上學', 'have-lunch': '吃午餐', 'go-home': '回家', 'do-homework': '寫功課（do my homework）', 'take-a-shower': '洗澡', 'go-to-bed': '上床睡覺' },
      patterns: ['what-time-do-you-get-up', 'what-time-does-he'], grammar: ['present'],
      visual: { xs: [{ t: 'I get up at six thirty.', ok: true }, { t: 'She gets up at seven.', ok: true }, { t: 'He have lunch at twelve.', ok: false, note: 'he 要用 has' }, { t: 'I go to bed on nine.', ok: false, note: '幾點用 at' }],
        table: { head: ['人稱', '問句', '回答'], rows: [['I／you', 'What time [do] you get up?', 'I get up [at] six thirty.'], ['he／she', 'What time [does] she do her homework?', 'She [does] her homework at five.']] },
        tip: { en: 'have → [has]、do → [does]、go → [goes]', note: 'he、she 後面的動詞要變化；my 換成 his／her' } },
      qa: [{ q: 'What time do you get up?', qz: '你幾點起床？', a: 'I get up at six thirty.', az: '我六點半起床。' }, { q: 'What time does she do her homework?', qz: '她幾點寫功課？', a: 'She does her homework at five.', az: '她五點寫功課。' },
        { q: 'What time does he go to bed?', qz: '他幾點上床睡覺？', a: 'He goes to bed at nine thirty.', az: '他九點半上床睡覺。' }],
      sents, replies });
  })();

  // ================= 六下（第 8 冊）：依學校公開的課程計畫整理（屏東縣 114 學年度六年級英語 Here We Go 7／8 教學計畫），待課本核對 =================
  // 計畫列了四課（第 16 週旅遊計畫、第 18 週文化單元是活動週，不是新課）；只有單字與句型，沒有日常用語和對話。
  // ================= 六下 Unit 1 Where Were You Yesterday? =================
  (() => {
    const ps = [['at home', '在家', 'home'], ['at school', '在學校', 'school'], ['at the mall', '在購物中心', 'mall'], ['at the movie theater', '在電影院', 'theater'], ['at the restaurant', '在餐廳', 'restaurant'], ['at the zoo', '在動物園', 'zoo']]
      .map(([en, zh, w]) => ({ en, zh, w, k: slug(en) }));
    const ppl = [{ k: 'he', S: 'He', en: 'he', zh: '他' }, { k: 'she', S: 'She', en: 'she', zh: '她' }];
    const why = '過去（yesterday）的 be 動詞：I、he、she 用 was；you、we、they 用 were。';
    const sents = [{ key: 'wq:you', g: 'wq', en: 'Where were you yesterday?', zh: '你昨天在哪裡？', why, blanks: [{ fam: 'was', w: 'were', opts: ['were', 'was', 'are', 'did'], why: 'you 的過去式 be 動詞是 were。' }], ask: { prompt: '問對方：你昨天在哪裡？', hint: 'Where … yesterday?' } }];
    ppl.forEach(p => sents.push({ key: 'wq:' + p.k, g: 'wq', en: `Where was ${p.en} yesterday?`, zh: `${p.zh}昨天在哪裡？`, why, blanks: [{ fam: 'was', w: 'was', opts: ['was', 'were', 'is', 'did'] }], ask: { prompt: `問：${p.zh}昨天在哪裡？`, hint: `Where … ${p.en} yesterday?` } }));
    const replies = [];
    ps.forEach((x, i) => {
      const x2 = next(ps, i), pOpts = [x.w].concat(others(ps, i).map(y => y.w));
      sents.push({ key: 'i:' + x.k, g: 'i', en: `I was ${x.en} yesterday.`, zh: `我昨天${x.zh}。`, why,
        blanks: [{ fam: 'was', w: 'was', opts: ['was', 'were', 'am', 'is'] }, { fam: 'pl', w: x.w, opts: pOpts, cue: x.zh }], ask: { prompt: `說說看：我昨天${x.zh}。`, hint: 'I was … yesterday.' } });
      sents.push({ key: 'q:' + x.k, g: 'q', en: `Were you ${x.en} yesterday?`, zh: `你昨天${x.zh}嗎？`, why: 'you 用 Were 問；回答 Yes, I was. / No, I wasn\'t.',
        blanks: [{ fam: 'wq', w: 'Were', opts: ['Were', 'Was', 'Are', 'Did'] }], ask: { prompt: `問對方：你昨天${x.zh}嗎？`, hint: 'Were you … yesterday?' } });
      replies.push({ key: 'w:' + x.k, card: 'i:' + x.k, q: 'Where were you yesterday?', cue: `📍 ${x.zh}`, en: `I was ${x.en} yesterday.`, alts: [`I was ${x.en}.`], kind: 'w', why,
        wrong: [`I were ${x.en} yesterday.`, `I was ${x2.en} yesterday.`, `I am ${x.en} yesterday.`] });
      replies.push({ key: 'y:' + x.k, card: 'q:' + x.k, q: `Were you ${x.en} yesterday?`, cue: '⭕ 是', en: 'Yes, I was.', kind: 'y', why: 'Were you …? 對的話：Yes, I was.', wrong: ['Yes, I were.', 'Yes, I did.', "No, I wasn't."] });
      replies.push({ key: 'n:' + x.k, card: 'q:' + x.k, q: `Were you ${x.en} yesterday?`, cue: `❌ 不是，${x2.zh}`, en: `No, I wasn't. I was ${x2.en}.`, alts: [`No, I was not. I was ${x2.en}.`], kind: 'n', why: "不對的話：No, I wasn't. 再說你在哪裡。",
        wrong: [`No, I weren't. I was ${x2.en}.`, `No, I didn't. I was ${x2.en}.`, `Yes, I was. I was ${x2.en}.`] });
      ppl.forEach(p => {
        sents.push({ key: `${p.k}:${x.k}`, g: 'he', en: `${p.S} was ${x.en} yesterday.`, zh: `${p.zh}昨天${x.zh}。`, why,
          blanks: [{ fam: 'was', w: 'was', opts: ['was', 'were', 'is', 'are'] }], ask: { prompt: `說說看：${p.zh}昨天${x.zh}。`, hint: `${p.S} was …` } });
        sents.push({ key: `q:${p.k}:${x.k}`, g: 'q', en: `Was ${p.en} ${x.en} yesterday?`, zh: `${p.zh}昨天${x.zh}嗎？`, why: 'he、she 用 Was 問。',
          blanks: [{ fam: 'wq', w: 'Was', opts: ['Was', 'Were', 'Is', 'Did'] }], ask: { prompt: `問：${p.zh}昨天${x.zh}嗎？`, hint: `Was ${p.en} … yesterday?` } });
        replies.push({ key: `h:${p.k}:${x.k}`, card: `${p.k}:${x.k}`, q: `Where was ${p.en} yesterday?`, cue: `📍 ${x.zh}`, en: `${p.S} was ${x.en} yesterday.`, alts: [`${p.S} was ${x.en}.`], kind: 'he', why,
          wrong: [`${p.S} were ${x.en} yesterday.`, `${p.S} was ${x2.en} yesterday.`, `${p.S} is ${x.en} yesterday.`] });
      });
    });
    U.push({ id: 'hanlin-8-u1', book: '六下', no: 1, title: '六下 Unit 1 Where Were You Yesterday?', theme: 'Where were you yesterday?', themeZh: '你昨天在哪裡？', draft: true,
      groups: [{ key: 'place', title: '地點', icon: '📍', words: ['home', 'school', 'mall', 'theater', 'restaurant', 'zoo'] }, { key: 'time', title: '時間・片語', icon: '📅', words: ['yesterday'], phrases: ['at-home'] }],
      tz: { home: '家（at home 在家）', school: '學校（at school 在學校）', mall: '購物中心（at the mall）', theater: '電影院（at the movie theater）', restaurant: '餐廳（at the restaurant）', zoo: '動物園（at the zoo）', yesterday: '昨天', 'at-home': '在家' },
      patterns: ['where-were-you-yesterday', 'were-you-at-yesterday'], grammar: ['past-be'],
      visual: { xs: [{ t: 'I was at home yesterday.', ok: true }, { t: 'I were at home yesterday.', ok: false, note: 'I 用 was' }, { t: 'Were you at the zoo yesterday?', ok: true }, { t: 'Was you at the zoo?', ok: false, note: 'you 用 were' }],
        table: { head: ['人稱', '過去的 be 動詞', '例句'], rows: [['I／he／she', '[was]', 'I was at the mall yesterday.'], ['you／we／they', '[were]', 'Were you at school yesterday?'], ['簡答', "was／wasn't", "Yes, I was. / No, I wasn't."]] },
        tip: { en: "Were you at school yesterday? → No, I [wasn't]. I was at home.", note: 'at home 不加 the；at the mall、at the zoo 要加 the' } },
      qa: [{ q: 'Where were you yesterday?', qz: '你昨天在哪裡？', a: 'I was at the mall yesterday.', az: '我昨天在購物中心。' }, { q: 'Were you at school yesterday?', qz: '你昨天在學校嗎？', a: 'Yes, I was.', az: '是的。' },
        { q: 'Were you at school yesterday?', qz: '你昨天在學校嗎？', a: "No, I wasn't. I was at home.", az: '不是，我在家。' }],
      sents, replies });
  })();

  // ================= 六下 Unit 2 What Did You Do Last Night? =================
  (() => {
    const as = [['clean my room', 'cleaned my room', '打掃房間'], ['listen to music', 'listened to music', '聽音樂'], ['play basketball', 'played basketball', '打籃球'], ['walk the dog', 'walked the dog', '遛狗'], ['watch videos', 'watched videos', '看影片'], ['visit a friend', 'visited a friend', '拜訪朋友']]
      .map(([v, d, zh]) => ({ v, d, zh, k: slug(v.replace(' my', '')), b0: v.split(' ')[0], d0: d.split(' ')[0] }));
    const ppl = [{ k: 'he', S: 'He', en: 'he', own: 'his', zh: '他' }, { k: 'she', S: 'She', en: 'she', own: 'her', zh: '她' }];
    const own = (s, p) => s.replace(' my ', ` ${p.own} `);
    const why = '過去的事（last night）動詞加 ed：play → played；問句用 Did，後面動詞用原形。';
    const s3 = w => (/(ch|sh|s|x)$/.test(w) ? w + 'es' : w + 's'), opts4 = a => [a.d0, a.b0, s3(a.b0), a.b0 + 'ing'];
    const sents = [{ key: 'wq:you', g: 'wq', en: 'What did you do last night?', zh: '你昨晚做了什麼？', why, blanks: [{ fam: 'did', w: 'did', opts: ['did', 'do', 'does', 'were'], why: '問過去做什麼用 did。' }], ask: { prompt: '問對方：你昨晚做了什麼？', hint: 'What … last night?' } }];
    ppl.forEach(p => sents.push({ key: 'wq:' + p.k, g: 'wq', en: `What did ${p.en} do last night?`, zh: `${p.zh}昨晚做了什麼？`, why, blanks: [{ fam: 'did', w: 'did', opts: ['did', 'do', 'does', 'was'] }], ask: { prompt: `問：${p.zh}昨晚做了什麼？`, hint: `What did ${p.en} …?` } }));
    const replies = [];
    as.forEach((a, i) => {
      const a2 = next(as, i);
      sents.push({ key: 'i:' + a.k, g: 'i', en: `I ${a.d} last night.`, zh: `我昨晚${a.zh}。`, why, blanks: [{ fam: 'ed', w: a.d0, opts: opts4(a), why: `過去式：${a.b0} → ${a.d0}` }], ask: { prompt: `說說看：我昨晚${a.zh}。`, hint: `I ${a.d0} …` } });
      sents.push({ key: 'q:' + a.k, g: 'q', en: `Did you ${a.v} last night?`, zh: `你昨晚${a.zh}嗎？`, why: 'Did 問句後面的動詞用原形。',
        blanks: [{ fam: 'did', w: 'Did', opts: ['Did', 'Do', 'Were', 'Does'] }, { fam: 'base', w: a.b0, opts: opts4(a).slice(1).concat(a.d0).sort(), why: 'Did 後面用原形動詞。' }], ask: { prompt: `問對方：你昨晚${a.zh}嗎？`, hint: 'Did you … last night?' } });
      replies.push({ key: 'w:' + a.k, card: 'i:' + a.k, q: 'What did you do last night?', cue: `🌙 ${a.zh}`, en: `I ${a.d} last night.`, alts: [`I ${a.d}.`], kind: 'w', why,
        wrong: [`I ${a.v} last night.`, `I ${a2.d} last night.`, `I did ${a.d} last night.`] });
      replies.push({ key: 'y:' + a.k, card: 'q:' + a.k, q: `Did you ${a.v} last night?`, cue: '⭕ 有', en: 'Yes, I did.', kind: 'y', why: 'Did you …? 有的話：Yes, I did.', wrong: ['Yes, I do.', 'Yes, I was.', "No, I didn't."] });
      replies.push({ key: 'n:' + a.k, card: 'q:' + a.k, q: `Did you ${a.v} last night?`, cue: `❌ 沒有，${a2.zh}`, en: `No, I didn't. I ${a2.d} last night.`, alts: [`No, I did not. I ${a2.d} last night.`], kind: 'n', why: "沒有的話：No, I didn't. 再說你做了什麼（動詞加 ed）。",
        wrong: [`No, I don't. I ${a2.d} last night.`, `No, I didn't. I ${a2.v} last night.`, `Yes, I did. I ${a2.d} last night.`] });
      ppl.forEach(p => {
        sents.push({ key: `${p.k}:${a.k}`, g: 'he', en: `${p.S} ${own(a.d, p)} last night.`, zh: `${p.zh}昨晚${a.zh}。`, why, blanks: [{ fam: 'ed', w: a.d0, opts: opts4(a) }], ask: { prompt: `說說看：${p.zh}昨晚${a.zh}。`, hint: `${p.S} ${a.d0} …` } });
        replies.push({ key: `h:${p.k}:${a.k}`, card: `${p.k}:${a.k}`, q: `What did ${p.en} do last night?`, cue: `🌙 ${a.zh}`, en: `${p.S} ${own(a.d, p)} last night.`, alts: [`${p.S} ${own(a.d, p)}.`], kind: 'he', why,
          wrong: [`${p.S} ${own(a.v, p)} last night.`, `${p.S} ${own(a2.d, p)} last night.`, `${p.S} did ${own(a.d, p)} last night.`] });
      });
    });
    U.push({ id: 'hanlin-8-u2', book: '六下', no: 2, title: '六下 Unit 2 What Did You Do Last Night?', theme: 'What did you do last night?', themeZh: '你昨晚做了什麼？', draft: true,
      groups: [{ key: 'word', title: '單字', icon: '🌙', words: ['clean', 'room', 'walk', 'dog', 'video', 'visit', 'friend', 'night'] }, { key: 'phrase', title: '做了什麼', icon: '🏀', words: [], phrases: ['clean-your-room', 'walk-the-dog', 'listen-to-music', 'play-basketball'] }],
      tz: { clean: '打掃（cleaned my room 打掃了房間）', room: '房間', walk: '走路（walked the dog 遛了狗）', dog: '狗', video: '影片（watched videos 看了影片）', visit: '拜訪（visited a friend 拜訪了朋友）', friend: '朋友', night: '晚上（last night 昨晚）',
        'clean-your-room': '打掃房間', 'walk-the-dog': '遛狗', 'listen-to-music': '聽音樂', 'play-basketball': '打籃球' },
      patterns: ['what-did-you-do-last-night', 'did-you-last-night'], grammar: ['past'],
      visual: { xs: [{ t: 'I played basketball last night.', ok: true }, { t: 'I play basketball last night.', ok: false, note: 'last night 要用過去式' }, { t: 'Did you walk the dog?', ok: true }, { t: 'Did you walked the dog?', ok: false, note: 'Did 後面用原形' }],
        table: { head: ['原形', '過去式'], rows: [['clean', '[cleaned]'], ['listen', '[listened]'], ['play', '[played]'], ['walk', '[walked]'], ['watch', '[watched]'], ['visit', '[visited]']] },
        tip: { en: "Did you play basketball last night? → No, I [didn't]. I walked the dog.", note: '問句、否定用 did／didn\'t，後面的動詞用原形' } },
      qa: [{ q: 'What did you do last night?', qz: '你昨晚做了什麼？', a: 'I visited a friend last night.', az: '我昨晚拜訪了朋友。' }, { q: 'Did you play basketball last night?', qz: '你昨晚打籃球了嗎？', a: 'Yes, I did.', az: '有。' },
        { q: 'Did you play basketball last night?', qz: '你昨晚打籃球了嗎？', a: "No, I didn't. I walked the dog last night.", az: '沒有，我昨晚去遛狗。' }],
      sents, replies });
  })();

  // ================= 六下 Unit 3 How Much Is the T-shirt? =================
  (() => {
    const sg = [['coat', '外套'], ['dress', '洋裝'], ['hat', '帽子'], ['jacket', '夾克'], ['skirt', '裙子'], ['T-shirt', 'T恤']].map(([en, zh]) => ({ en, zh, k: slug(en) }));
    const pl = [['jeans', '牛仔褲'], ['pants', '長褲'], ['shorts', '短褲']].map(([en, zh]) => ({ en, zh, k: slug(en) }));
    const pr = [['ten', '十'], ['fifty', '五十'], ['one hundred', '一百'], ['two hundred', '兩百'], ['three hundred', '三百'], ['five hundred', '五百']].map(([en, zh]) => ({ en, zh }));
    const why = '問價錢：一件用 How much is the …? 回答 It\'s … dollars.；長褲、牛仔褲、短褲是複數，用 How much are the …? 回答 They\'re … dollars.';
    const sents = [], replies = [];
    sg.concat(pl).forEach((it, i) => {
      const isPl = pl.includes(it), be = isPl ? 'are' : 'is', P0 = isPl ? "They're" : "It's", P1 = isPl ? 'They are' : 'It is';
      sents.push({ key: 'hm:' + it.k, g: 'hm', en: `How much ${be} the ${it.en}?`, zh: `這件${it.zh}多少錢？`, why,
        blanks: [{ fam: 'much', w: 'much', opts: ['much', 'many', 'old', 'long'], why: '問價錢用 How much。' }, { fam: 'isare', w: be, opts: ['is', 'are', 'am', 'do'], why: isPl ? `${it.en} 是複數，用 are。` : '一件用 is。' }],
        ask: { prompt: `問：這件${it.zh}多少錢？`, hint: `How much ${be} the …?` } });
      const p = pr[i % pr.length], p2 = pr[(i + 2) % pr.length];
      sents.push({ key: 'pr:' + it.k, g: 'pr', en: `The ${it.en} ${be} ${p.en} dollars.`, zh: `這件${it.zh}${p.zh}元。`, why,
        blanks: [{ fam: 'isare', w: be, opts: ['is', 'are', 'am', 'do'] }, { fam: 'dollars', w: 'dollars', opts: ['dollars', 'dollar', 'cents', 'money'], why: '一元以上用複數 dollars。' }], ask: { prompt: `說說看：這件${it.zh}${p.zh}元。`, hint: `The ${it.en} ${be} …` } });
      [p, p2, pr[(i + 4) % pr.length]].forEach((q, j) => replies.push({ key: `${isPl ? 'pl' : 'sg'}:${it.k}:${slug(q.en)}`, card: j ? null : 'hm:' + it.k, q: `How much ${be} the ${it.en}?`, cue: `💲 ${q.zh}元`, en: `${P0} ${q.en} dollars.`, alts: [`${P1} ${q.en} dollars.`], kind: isPl ? 'pl' : 'sg', why,
        wrong: [`${isPl ? "It's" : "They're"} ${q.en} dollars.`, `${P0} ${q.en} dollar.`, `${P0} ${pr[(pr.indexOf(q) + 1) % pr.length].en} dollars.`] }));
    });
    pr.forEach(p => {
      sents.push({ key: 'it:' + slug(p.en), g: 'it', en: `It's ${p.en} dollars.`, zh: `它${p.zh}元。`, alts: [`It is ${p.en} dollars.`], why, blanks: [{ fam: 'dollars', w: 'dollars', opts: ['dollars', 'dollar', 'cents', 'money'] }], ask: { prompt: `說說看：它${p.zh}元。`, hint: "It's … dollars." } });
      sents.push({ key: 'they:' + slug(p.en), g: 'it', en: `They're ${p.en} dollars.`, zh: `它們（褲子）${p.zh}元。`, alts: [`They are ${p.en} dollars.`], why, blanks: [{ fam: 'dollars', w: 'dollars', opts: ['dollars', 'dollar', 'cents', 'money'] }], ask: { prompt: `說說看：這件褲子${p.zh}元。`, hint: "They're … dollars." } });
    });
    U.push({ id: 'hanlin-8-u3', book: '六下', no: 3, title: '六下 Unit 3 How Much Is the T-shirt?', theme: 'How much is the T-shirt?', themeZh: '這件T恤多少錢？', draft: true,
      groups: [{ key: 'cloth', title: '衣物（一件）', icon: '👕', words: sg.map(x => x.k) }, { key: 'pants', title: '褲子（複數）', icon: '👖', words: pl.map(x => x.k).concat(['dollar']) }],
      tz: Object.assign(Object.fromEntries(sg.concat(pl).map(x => [x.k, x.zh])), { dollar: '元（dollars）' }),
      patterns: ['how-much-is-the', 'how-much-are-the'], grammar: ['countable'],
      visual: { xs: [{ t: 'How much is the T-shirt?', ok: true }, { t: 'How much are the pants?', ok: true, note: 'pants 是複數' }, { t: 'How much is the jeans?', ok: false }, { t: "It's ten dollar.", ok: false, note: '要用 dollars' }],
        table: { head: ['東西', '問句', '回答'], rows: [['一件（coat、dress…）', 'How much [is] the T-shirt?', "[It's] ten dollars."], ['複數（pants、jeans、shorts）', 'How much [are] the pants?', "[They're] one hundred dollars."]] },
        tip: { en: 'pants／jeans／shorts → [are] … [They\'re]', note: '褲子一條也是複數；一元以上用 dollars' } },
      qa: [{ q: 'How much is the T-shirt?', qz: '這件T恤多少錢？', a: "It's ten dollars.", az: '十元。' }, { q: 'How much are the pants?', qz: '這件長褲多少錢？', a: "They're one hundred dollars.", az: '一百元。' },
        { q: 'How much is the jacket?', qz: '這件夾克多少錢？', a: "It's five hundred dollars.", az: '五百元。' }],
      sents, replies });
  })();

  // ================= 六下 Unit 4 What's Your Favorite Season? =================
  (() => {
    const ss = [['spring', '春天', 'warm', 'wet', '溫暖又潮濕', 'snowy'], ['summer', '夏天', 'hot', 'wet', '又熱又潮濕', 'cold'], ['fall', '秋天', 'cool', 'dry', '涼爽又乾燥', 'wet'], ['winter', '冬天', 'cold', 'snowy', '寒冷又下雪', 'hot']]
      .map(([en, zh, a, b, wz, no]) => ({ en, zh, a, b, wz, no, k: en === 'fall' ? 'fall-season' : en }));  // no＝跟這季節相反的天氣（否定回答用）
    const ppl = [{ k: 'his', P: 'His', en: 'his', zh: '他' }, { k: 'her', P: 'Her', en: 'her', zh: '她' }];
    const WX = ['dry', 'wet', 'foggy', 'snowy', 'cool', 'warm', 'hot', 'cold'];
    const why = "問最喜歡的季節：What's your favorite season? 回答 My favorite season is ….；說天氣：It's cool and dry in fall.（季節前面用 in）";
    const sents = [{ key: 'wq:your', g: 'wq', en: "What's your favorite season?", zh: '你最喜歡哪個季節？', alts: ['What is your favorite season?'], why, blanks: [{ fam: 'season', w: 'season', opts: ['season', 'seasons', 'day', 'color'] }], ask: { prompt: '問對方：你最喜歡哪個季節？', hint: "What's your …?" } }];
    ppl.forEach(p => sents.push({ key: 'wq:' + p.k, g: 'wq', en: `What's ${p.en} favorite season?`, zh: `${p.zh}最喜歡哪個季節？`, alts: [`What is ${p.en} favorite season?`], why,
      blanks: [{ fam: 'own', w: p.en, opts: p.k === 'his' ? ['his', 'he', 'him', 'her'] : ['her', 'she', 'hers', 'his'] }], ask: { prompt: `問：${p.zh}最喜歡哪個季節？`, hint: `What's ${p.en} …?` } }));
    const replies = [];
    ss.forEach((s, i) => {
      const s2 = next(ss, i), sOpts = [s.en].concat(others(ss, i).map(x => x.en));
      sents.push({ key: 'my:' + s.en, g: 'my', en: `My favorite season is ${s.en}.`, zh: `我最喜歡${s.zh}。`, why, blanks: [{ fam: 'ssn', w: s.en, opts: sOpts, cue: s.zh }], ask: { prompt: `說說看：我最喜歡${s.zh}。`, hint: 'My favorite season is …' } });
      sents.push({ key: 'wx:' + s.en, g: 'wx', en: `It's ${s.a} and ${s.b} in ${s.en}.`, zh: `${s.zh}${s.wz}。`, alts: [`It is ${s.a} and ${s.b} in ${s.en}.`], why,
        blanks: [{ fam: 'in', w: 'in', opts: ['in', 'on', 'at', 'to'], why: '季節前面用 in：in fall。' }, { fam: 'wx', w: s.b, opts: [s.b].concat(WX.filter(w => w !== s.b && w !== s.a).slice(i, i + 3)), cue: s.wz.slice(-2) }], ask: { prompt: `說說看：${s.zh}${s.wz}。`, hint: `It's … in ${s.en}.` } });
      sents.push({ key: 'q:' + s.en, g: 'q', en: `Is it ${s.b} in ${s.en}?`, zh: `${s.zh}${s.wz.slice(-2)}嗎？`, why: 'Is it … in …? 回答 Yes, it is. / No, it isn\'t.', blanks: [{ fam: 'in', w: 'in', opts: ['in', 'on', 'at', 'to'] }], ask: { prompt: `問：${s.zh}${s.wz.slice(-2)}嗎？`, hint: `Is it … in ${s.en}?` } });
      replies.push({ key: 'w:' + s.en, card: 'my:' + s.en, q: "What's your favorite season?", cue: `🍂 ${s.zh}`, en: `My favorite season is ${s.en}.`, alts: [`${s.en.charAt(0).toUpperCase() + s.en.slice(1)}.`], kind: 'w', why,
        wrong: [`My favorite season is ${s2.en}.`, `My favorite seasons is ${s.en}.`, `I favorite season is ${s.en}.`] });
      replies.push({ key: 'y:' + s.en, card: 'q:' + s.en, q: `Is it ${s.b} in ${s.en}?`, cue: '⭕ 是', en: 'Yes, it is.', kind: 'y', why: 'Is it …? 對的話：Yes, it is.', wrong: ['Yes, it does.', "Yes, it's.", "No, it isn't."] });
      replies.push({ key: 'n:' + s.en, card: 'wx:' + s.en, q: `Is it ${s.no} in ${s.en}?`, cue: `❌ 不是，${s.wz}`, en: `No, it isn't. It's ${s.a} and ${s.b} in ${s.en}.`, alts: [`No, it is not. It is ${s.a} and ${s.b} in ${s.en}.`], kind: 'n', why: "不對的話：No, it isn't. 再說天氣怎麼樣。",
        wrong: [`No, it doesn't. It's ${s.a} and ${s.b} in ${s.en}.`, `No, it isn't. It's ${s.a} and ${s.b} on ${s.en}.`, `Yes, it is. It's ${s.a} and ${s.b} in ${s.en}.`] });
      ppl.forEach(p => {
        sents.push({ key: `${p.k}:${s.en}`, g: 'my', en: `${p.P} favorite season is ${s.en}.`, zh: `${p.zh}最喜歡${s.zh}。`, why,
          blanks: [{ fam: 'own', w: p.P, opts: p.k === 'his' ? ['His', 'He', 'Him', 'Her'] : ['Her', 'She', 'Hers', 'His'] }, { fam: 'ssn', w: s.en, opts: sOpts, cue: s.zh }], ask: { prompt: `說說看：${p.zh}最喜歡${s.zh}。`, hint: `${p.P} favorite season is …` } });
        replies.push({ key: `h:${p.k}:${s.en}`, card: `${p.k}:${s.en}`, q: `What's ${p.en} favorite season?`, cue: `🍂 ${s.zh}`, en: `${p.P} favorite season is ${s.en}.`, alts: [`${s.en.charAt(0).toUpperCase() + s.en.slice(1)}.`], kind: 'he', why,
          wrong: [`${p.k === 'his' ? 'He' : 'She'} favorite season is ${s.en}.`, `${p.k === 'his' ? 'Her' : 'His'} favorite season is ${s.en}.`, `${p.P} favorite season is ${s2.en}.`] });
      });
    });
    U.push({ id: 'hanlin-8-u4', book: '六下', no: 4, title: "六下 Unit 4 What's Your Favorite Season?", theme: "What's your favorite season?", themeZh: '你最喜歡哪個季節？', draft: true,
      groups: [{ key: 'season', title: '季節', icon: '🍂', words: ss.map(s => s.k) }, { key: 'weather', title: '天氣', icon: '🌫️', words: ['dry', 'wet', 'foggy', 'snowy', 'cool'] }],
      tz: { spring: '春天', summer: '夏天', 'fall-season': '秋天（in fall）', winter: '冬天', dry: '乾燥的', wet: '潮濕的', foggy: '有霧的', snowy: '下雪的', cool: '涼爽的' },
      patterns: ['whats-your-favorite-season', 'its-cool-and-dry-in'], grammar: ['prep'],
      visual: { chips: { a: 'in', items: ['spring', 'summer', 'fall', 'winter'] },
        xs: [{ t: 'My favorite season is fall.', ok: true }, { t: "It's cool and dry in fall.", ok: true }, { t: "It's cool and dry on fall.", ok: false, note: '季節用 in' }, { t: 'My favorite seasons is fall.', ok: false, note: 'season 不加 s' }],
        table: { head: ['問句', '回答'], rows: [["What's [your] favorite season?", 'My favorite season is fall.'], ["What's [his] favorite season?", 'His favorite season is winter.'], ['Is it snowy [in] winter?', 'Yes, it is.']] },
        tip: { en: "It's cool and dry [in] fall.", note: '季節前面用 in；兩種天氣中間用 and' } },
      qa: [{ q: "What's your favorite season?", qz: '你最喜歡哪個季節？', a: 'My favorite season is fall.', az: '我最喜歡秋天。' }, { q: 'Is it hot in fall?', qz: '秋天熱嗎？', a: "No, it isn't. It's cool and dry in fall.", az: '不熱，秋天涼爽又乾燥。' },
        { q: "What's her favorite season?", qz: '她最喜歡哪個季節？', a: 'Her favorite season is spring.', az: '她最喜歡春天。' }],
      sents, replies });
  })();

  window.DATA_TEXTBOOK = U;
})();
