/* 🎤 口語對話考試題庫：五上 U1–U2（翰林 Here We Go! 第 5 冊；2026-11-01）
   一題＝考官說一句英文（q）→ 小孩用英文口頭回答。100 題照難度排好：1–40 難度 1、41–80 難度 2、81–100 難度 3。
     lv 1：簡短問答，答案是固定句型（不給中文提示）
     lv 2：照中文情境回答（zh＝給小孩看的提示，不寫英文答案）
     lv 3：一題要說兩句（回答＋反問／更正／補充），或照情境自己換字造問句；f＝考官接著回的話（紙本用）
   a：參考答案（___＝開放欄，自由填、不判分）；縮寫自動補展開版（don't → do not、It's → It is）
   k：評分重點＝關鍵字／句型，每一個都要說到才算對；「A|B」＝說到其中一個就好。關鍵字不可以放在 ___ 裡（開放欄不檢查）
   u：1＝Unit 1（星期）、2＝Unit 2（科目＋Do／Does）、12＝兩課混合；線上題號掛在 hanlin-5-u1（u=1）或 hanlin-5-u2（u=2、12）
   掛法：這支在 textbook.js 後面載入，把題庫掛到兩個單元的 u.oral；engine.js 註冊成 🎤 題（tb:<單元>:oral:<n>），E.tbOral() 一次抽 20 題。
   紙本考卷由 考卷\gen_oral.js 用這份資料產生（考卷只留本機）。 */
(function () {
  const Y = (who, aux) => [`Yes, ${who} ${aux}.`, `No, ${who} ${aux === 'do' ? "don't" : "doesn't"}.`];
  const YK = (who, aux) => [`Yes, ${who} ${aux}|No, ${who} ${aux === 'do' ? "don't" : "doesn't"}`];
  const ISIT = ['Yes, it is.', "No, it isn't."], ISITK = ["Yes, it is|No, it isn't"];
  const L1 = [
    // ---- Unit 1：星期 ----
    { u: 1, q: 'What day is today?', a: ["It's ___.", "Today is ___.", "It's ___ today."], k: ['It is|Today is'] },
    { u: 1, q: 'What day is tomorrow?', a: ["It's ___.", 'Tomorrow is ___.'], k: ['It is|Tomorrow is'] },
    { u: 1, q: 'Is it Monday today?', a: ISIT.concat(["No, it isn't. It's ___."]), k: ISITK },
    { u: 1, q: 'Is it Friday or Saturday today?', a: ["It's ___.", 'Today is ___.'], k: ['It is|Today is'] },
    { u: 1, q: 'Is tomorrow Saturday?', a: ISIT.concat(["No, it isn't. It's ___."]), k: ISITK },
    { u: 1, q: "What's your favorite day?", a: ['My favorite day is ___.', '___ is my favorite day.', "It's ___."], k: ['favorite day|It is'] },
    { u: 1, q: 'Is Friday your favorite day?', a: ISIT, k: ISITK },
    { u: 1, q: "Let's go to the park!", a: ['Good idea!', "Good idea. Let's go!", 'Sure.'], k: ['Good idea|Sure'] },
    // ---- Unit 2：科目＋Do／Does ----
    { u: 2, q: 'Can we go to the park?', a: ['Sure.', 'Sure, follow me.', 'Yes, we can.'], k: ['Sure|Yes'] },
    { u: 2, q: 'Are you in a hurry?', a: ['Yes, I am.', "No, I'm not.", "Yes, I'm in a hurry."], k: ["Yes, I am|No, I'm not|in a hurry"] },
    { u: 2, q: 'Do you have English class today?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Do you have math class on Monday?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Do you have PE class tomorrow?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Do you have class on Saturday?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Does he have art class on Tuesday?', a: Y('he', 'does'), k: YK('he', 'does') },
    { u: 2, q: 'Does she have music class on Wednesday?', a: Y('she', 'does'), k: YK('she', 'does') },
    { u: 2, q: 'Does Amy have Chinese class today?', a: Y('she', 'does'), k: YK('she', 'does') },
    { u: 2, q: 'Does Ben have social studies class on Thursday?', a: Y('he', 'does'), k: YK('he', 'does') },
    { u: 2, q: 'Do we have science class on Friday?', a: Y('we', 'do'), k: YK('we', 'do') },
    { u: 2, q: 'Do they have PE class on Monday?', a: Y('they', 'do'), k: YK('they', 'do') },
    { u: 2, q: 'Do you and Amy have art class today?', a: Y('we', 'do'), k: YK('we', 'do') },
    { u: 2, q: 'Do Amy and Ben have English class tomorrow?', a: Y('they', 'do'), k: YK('they', 'do') },
    { u: 2, q: 'Does Ben have class on Sunday?', a: Y('he', 'does'), k: YK('he', 'does') },
    { u: 2, q: 'Does she have PE class tomorrow?', a: Y('she', 'does'), k: YK('she', 'does') },
    // ---- 兩課混合：When／What day／What class ----
    { u: 12, q: 'When do you have English class?', a: ['On ___.', 'I have English class on ___.'], k: ['on'] },
    { u: 12, q: 'What day do you have music class?', a: ['On ___.', 'I have music class on ___.'], k: ['on'] },
    { u: 12, q: 'When does she have PE class?', a: ['On ___.', 'She has PE class on ___.'], k: ['on'] },
    { u: 12, q: 'What day is your art class?', a: ["It's on ___.", 'On ___.'], k: ['on'] },
    { u: 2, q: 'What class do you have on Monday?', a: ['I have ___ class.', 'I have ___ class on Monday.'], k: ['I have'] },
    { u: 2, q: 'What class do you have today?', a: ['I have ___ class today.', 'I have ___ class.'], k: ['I have'] },
    { u: 2, q: 'What class do we have tomorrow?', a: ['We have ___ class tomorrow.', 'We have ___ class.'], k: ['We have'] },
    { u: 2, q: 'Do you have English class or math class today?', a: ['I have English class.', 'I have math class.', 'I have ___ class today.'], k: ['I have'] },
    { u: 12, q: 'Is your PE class on Tuesday?', a: ISIT.concat(["No, it isn't. It's on ___."]), k: ISITK },
    { u: 2, q: "What's your favorite subject?", a: ['My favorite subject is ___.', '___ is my favorite subject.', 'I like ___.'], k: ['favorite subject|I like'] },
    { u: 2, q: 'Do you like art class?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Does she like music class?', a: Y('she', 'does'), k: YK('she', 'does') },
    { u: 2, q: 'Do you study English every day?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Do you speak Chinese?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 12, q: 'Do you play in the park on Saturday?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 1, q: 'Do you sleep late on Sunday?', a: Y('I', 'do'), k: YK('I', 'do') }
  ];
  const L2 = [
    // ---- Unit 1 ----
    { u: 1, q: 'What day is today?', zh: '月曆上，今天是星期三。', a: ["It's Wednesday.", 'Today is Wednesday.', "It's Wednesday today."], k: ['Wednesday'] },
    { u: 1, q: 'What day is tomorrow?', zh: '今天是星期五。', a: ["It's Saturday.", 'Tomorrow is Saturday.'], k: ['Saturday'] },
    { u: 1, q: 'What day is it today?', zh: '昨天是星期日。', a: ["It's Monday.", 'Today is Monday.'], k: ['Monday'] },
    { u: 1, q: 'What day is it?', zh: '明天是星期五。', a: ["It's Thursday.", 'Today is Thursday.'], k: ['Thursday'] },
    { u: 1, q: 'Is it Thursday today?', zh: '月曆上，今天就是星期四。', a: ['Yes, it is.'], k: ['Yes, it is'] },
    { u: 1, q: 'Is it Tuesday today?', zh: '今天是星期三。說「不是」，再說今天星期幾。', a: ["No, it isn't. It's Wednesday.", "No. It's Wednesday."], k: ['No', 'Wednesday'] },
    { u: 1, q: 'Is tomorrow Friday?', zh: '今天是星期四。', a: ['Yes, it is.'], k: ['Yes, it is'] },
    { u: 1, q: 'Is tomorrow Sunday?', zh: '今天是星期日。說「不是」，再說明天星期幾。', a: ["No, it isn't. It's Monday.", "No, it isn't. Tomorrow is Monday."], k: ['No', 'Monday'] },
    { u: 1, q: 'Is it Monday or Tuesday today?', zh: '今天是星期二。', a: ["It's Tuesday.", 'Today is Tuesday.'], k: ['Tuesday'] },
    { u: 1, q: "What's your favorite day?", zh: '你最喜歡星期五。', a: ['My favorite day is Friday.', 'Friday is my favorite day.', "It's Friday."], k: ['Friday'] },
    { u: 1, q: 'Is Saturday your favorite day?', zh: '沒錯，你最喜歡星期六。', a: ['Yes, it is.'], k: ['Yes, it is'] },
    { u: 1, q: "Let's go to the park on Sunday.", zh: '你覺得這個點子很好。', a: ['Good idea!', "Good idea. Let's go!"], k: ['Good idea'] },
    { u: 1, q: 'We go to the park on Saturday.', zh: '朋友星期六要去公園，祝他們玩得愉快。', a: ['Have a good time!'], k: ['have a good time'] },
    // ---- Unit 2 ----
    { u: 2, q: "Let's go to the park!", zh: '你在趕時間，沒辦法去。', a: ["I'm in a hurry.", "No, I'm in a hurry."], k: ['in a hurry'] },
    { u: 2, q: 'Can we go to the park?', zh: '你答應，而且要對方跟著你走。', a: ['Sure, follow me.', 'Sure. Follow me, please.'], k: ['Sure', 'follow me'] },
    { u: 2, q: 'Do you have art class on Monday?', zh: '看課表：星期一有美術課。', a: ['Yes, I do.'], k: ['Yes, I do'] },
    { u: 2, q: 'Do you have music class on Tuesday?', zh: '看課表：星期二沒有音樂課。', a: ["No, I don't."], k: ["No, I don't"] },
    { u: 2, q: 'Does he have PE class on Wednesday?', zh: '他星期三有體育課。', a: ['Yes, he does.'], k: ['Yes, he does'] },
    { u: 2, q: 'Does she have science class on Thursday?', zh: '她星期四沒有自然課。', a: ["No, she doesn't."], k: ["No, she doesn't"] },
    { u: 2, q: 'Does Ben have English class today?', zh: 'Ben 今天有英文課。', a: ['Yes, he does.'], k: ['Yes, he does'] },
    { u: 2, q: 'Does Amy have math class tomorrow?', zh: 'Amy 明天沒有數學課。', a: ["No, she doesn't."], k: ["No, she doesn't"] },
    { u: 2, q: 'Do we have Chinese class on Friday?', zh: '我們星期五有國語課。', a: ['Yes, we do.'], k: ['Yes, we do'] },
    { u: 2, q: 'Do they have social studies class on Monday?', zh: '他們星期一沒有社會課。', a: ["No, they don't."], k: ["No, they don't"] },
    { u: 2, q: 'Do you and Ben have art class today?', zh: '你和 Ben 今天都有美術課。', a: ['Yes, we do.'], k: ['Yes, we do'] },
    { u: 2, q: 'Do Amy and Ben have PE class on Wednesday?', zh: 'Amy 和 Ben 星期三都沒有體育課。', a: ["No, they don't."], k: ["No, they don't"] },
    { u: 2, q: 'Do you have class on Saturday?', zh: '星期六不用上課。', a: ["No, I don't."], k: ["No, I don't"] },
    { u: 12, q: 'When do you have PE class?', zh: '你的體育課在星期二。', a: ['On Tuesday.', 'I have PE class on Tuesday.', "It's on Tuesday."], k: ['Tuesday'] },
    { u: 12, q: 'When does Amy have music class?', zh: 'Amy 的音樂課在星期四。', a: ['On Thursday.', 'She has music class on Thursday.'], k: ['Thursday'] },
    { u: 12, q: 'What day is your art class?', zh: '你的美術課在星期五。', a: ["It's on Friday.", 'On Friday.'], k: ['Friday'] },
    { u: 2, q: 'What class do you have on Wednesday?', zh: '看課表：星期三有自然課。', a: ['I have science class.', 'I have science class on Wednesday.'], k: ['science'] },
    { u: 2, q: 'What class do we have today?', zh: '我們今天有國語課。', a: ['We have Chinese class.', 'We have Chinese class today.'], k: ['Chinese'] },
    { u: 2, q: 'Do you have English class or Chinese class today?', zh: '今天有英文課。', a: ['I have English class.', 'I have English class today.'], k: ['English'] },
    { u: 2, q: "What's your favorite subject?", zh: '你最喜歡數學。', a: ['My favorite subject is math.', 'Math is my favorite subject.', 'I like math.'], k: ['math'] },
    { u: 2, q: 'Do you like PE class?', zh: '你不喜歡。', a: ["No, I don't."], k: ["No, I don't"] },
    { u: 12, q: 'Is your music class on Monday?', zh: '沒錯，你的音樂課在星期一。', a: ['Yes, it is.'], k: ['Yes, it is'] },
    { u: 12, q: 'Is your science class on Tuesday?', zh: '不是，你的自然課在星期四。', a: ["No, it isn't. It's on Thursday.", "No. It's on Thursday."], k: ['No', 'Thursday'] },
    { u: 12, q: 'Do you have math class today?', zh: '今天星期二，你星期二有數學課。', a: ['Yes, I do.'], k: ['Yes, I do'] },
    { u: 12, q: 'Does he have art class tomorrow?', zh: '今天星期三，他星期四有美術課。', a: ['Yes, he does.'], k: ['Yes, he does'] },
    { u: 12, q: "Let's play in the park on Tuesday.", zh: '你星期二有英文課，不能去。', a: ['I have English class on Tuesday.', 'No, I have English class on Tuesday.'], k: ['English', 'Tuesday'] },
    { u: 12, q: 'What day is tomorrow?', zh: '明天要上體育課，你的體育課在星期一。', a: ["It's Monday.", 'Tomorrow is Monday.'], k: ['Monday'] }
  ];
  const L3 = [
    { u: 12, q: 'Is it Tuesday today?', zh: '今天是星期三。先回答，再問考官星期三有沒有數學課。', a: ["No, it isn't. It's Wednesday. Do you have math class on Wednesday?"], k: ['No', 'Wednesday', 'Do you have', 'math'], f: 'Yes, I do.' },
    { u: 12, q: 'What day is today?', zh: '今天星期一。說今天星期幾，再說你今天有英文課。', a: ["It's Monday. I have English class today.", 'Today is Monday. I have English class.'], k: ['Monday', 'I have', 'English'] },
    { u: 2, q: 'Do you have art class on Monday?', zh: '你沒有。回答後，反問考官星期一有沒有美術課。', a: ["No, I don't. Do you have art class on Monday?"], k: ["No, I don't", 'Do you have', 'art'], f: 'Yes, I do.' },
    { u: 2, q: 'Do you have Chinese class on Friday?', zh: '你沒有；你星期五有的是社會課。', a: ["No, I don't. I have social studies class on Friday.", "No, I don't. I have social studies on Friday."], k: ["No, I don't", 'social studies'] },
    { u: 12, q: 'Does Amy have music class on Tuesday?', zh: '她沒有；她的音樂課在星期三。', a: ["No, she doesn't. She has music class on Wednesday.", "No, she doesn't. It's on Wednesday."], k: ["No, she doesn't", 'Wednesday'] },
    { u: 12, q: 'I have PE class today.', zh: '換你問考官：你星期幾有音樂課？', a: ['When do you have music class?', 'What day do you have music class?'], k: ['When|What day', 'do you have music'], f: 'On Thursday.' },
    { u: 2, q: "Ben doesn't have art class on Monday.", zh: '換你問考官：Ben 星期二有沒有美術課？', a: ['Does he have art class on Tuesday?', 'Does Ben have art class on Tuesday?'], k: ['Does', 'have art', 'Tuesday'], f: 'Yes, he does.' },
    { u: 12, q: 'Today is Monday.', zh: '換你問考官：你今天有英文課嗎？', a: ['Do you have English class today?', 'Do you have English today?'], k: ['Do you have English', 'today'], f: "Yes, I do. I have English class on Monday." },
    { u: 12, q: "Let's go to the park on Thursday.", zh: '你星期四有音樂課，不能去；改約星期五。', a: ["I have music class on Thursday. Let's go on Friday.", 'I have music class on Thursday. Can we go on Friday?'], k: ['music', 'Thursday', 'Friday'] },
    { u: 2, q: 'Can we go to the park?', zh: '說好、請對方跟你走，再說你在趕時間。', a: ["Sure, follow me. I'm in a hurry."], k: ['Sure', 'follow me', 'in a hurry'] },
    { u: 2, q: 'Are you in a hurry?', zh: '是的，你等一下有數學課。', a: ['Yes, I am. I have math class.', "Yes, I'm in a hurry. I have math class."], k: ['Yes, I am', 'math'] },
    { u: 1, q: "What's your favorite day?", zh: '你最喜歡星期五。說完後，反問考官最喜歡哪一天。', a: ["My favorite day is Friday. What's your favorite day?", "Friday is my favorite day. What's your favorite day?"], k: ['Friday', "What's your favorite day"], f: 'My favorite day is Sunday.' },
    { u: 1, q: 'Is Friday your favorite day?', zh: '不是；你最喜歡的是星期日。', a: ["No, it isn't. My favorite day is Sunday.", 'No. Sunday is my favorite day.'], k: ['No', 'Sunday'] },
    { u: 2, q: 'What class do you have on Tuesday?', zh: '看課表：星期二有美術課，也有音樂課。', a: ['I have art class and music class.', 'I have art and music.'], k: ['art', 'music'] },
    { u: 12, q: 'When do you have science class?', zh: '你的自然課在星期一和星期四。', a: ['On Monday and Thursday.', 'I have science class on Monday and Thursday.'], k: ['Monday', 'Thursday'] },
    { u: 12, q: 'Does Ben have PE class tomorrow?', zh: '今天星期二，Ben 星期三有體育課。先回答，再說明天星期幾。', a: ['Yes, he does. Tomorrow is Wednesday.', "Yes, he does. It's Wednesday tomorrow."], k: ['Yes, he does', 'Wednesday'] },
    { u: 2, q: 'Do we have social studies class today?', zh: '今天沒有社會課，今天有的是自然課。', a: ["No, we don't. We have science class today.", "No, we don't. We have science today."], k: ["No, we don't", 'science'] },
    { u: 2, q: "I'm in a hurry!", zh: '換你問考官：你今天有體育課嗎？', a: ['Do you have PE class today?', 'Do you have PE today?'], k: ['Do you have', 'PE|P.E.', 'today'], f: "Yes, I do. Follow me!" },
    { u: 1, q: "Let's go to the park on Saturday.", zh: '說這是好主意，再請對方跟你走。', a: ['Good idea! Follow me.', 'Good idea. Follow me, please.'], k: ['Good idea', 'follow me'] },
    { u: 1, q: 'Is it Sunday today? I go to the park on Sunday.', zh: '今天真的是星期日。先回答，再祝考官玩得愉快。', a: ['Yes, it is. Have a good time!'], k: ['Yes, it is', 'have a good time'] }
  ];
  // 縮寫補展開版（保留大小寫）：don't → do not、isn't → is not、It's → It is、What's → What is、I'm → I am（Let's 不動）
  const full = s => s.replace(/\b(\w+)n't\b/g, '$1 not').replace(/\b(It|it|What|what)'s\b/g, '$1 is').replace(/\bI'm\b/g, 'I am');
  const qs = [[1, L1], [2, L2], [3, L3]].flatMap(([lv, L]) => L.map(x => Object.assign({ lv }, x))).map((x, i) => {
    const a = [...new Set(x.a.flatMap(s => [s, full(s)]))];
    // 科目 PE：辨識常寫成 P.E.，關鍵字兩種都收
    const k = x.k.map(s => (/\bPE\b/.test(s) && !/P\.E\./.test(s) ? s + '|' + s.replace(/\bPE\b/g, 'P.E.') : s));
    return Object.assign({}, x, { n: i + 1, a, k, tb: x.u === 1 ? 'hanlin-5-u1' : 'hanlin-5-u2' });
  });
  const bank = { key: '5-u12', title: '五上 U1–U2 口語對話考試', units: ['hanlin-5-u1', 'hanlin-5-u2'], pick: { 1: 8, 2: 8, 3: 4 }, qs };
  window.DATA_ORAL = bank;
  (window.DATA_TEXTBOOK || []).forEach(u => { if (bank.units.includes(u.id)) u.oral = bank; });
})();
