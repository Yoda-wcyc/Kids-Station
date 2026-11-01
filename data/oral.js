/* 🎤 口語對話考試題庫（翰林 Here We Go!；2026-11-01 起）：每兩課一份 100 題（五上 U1–U2、U3–U4…），下面先寫五上 U1–U2，其他冊別在後面各自一段
   一題＝考官說一句英文（q）→ 小孩用英文口頭回答。100 題照難度排好：1–40 難度 1、41–80 難度 2、81–100 難度 3。
     lv 1：簡短問答，答案是固定句型（不給中文提示）
     lv 2：照中文情境回答（zh＝給小孩看的提示，不寫英文答案）
     lv 3：一題要說兩句（回答＋反問／更正／補充），或照情境自己換字造問句；f＝考官接著回的話（紙本用）
   a：參考答案（___＝開放欄，自由填、不判分）；縮寫自動補展開版（don't → do not、It's → It is）
   k：評分重點＝關鍵字／句型，每一個都要說到才算對；「A|B」＝說到其中一個就好。關鍵字不可以放在 ___ 裡（開放欄不檢查）
   u：1＝第一課、2＝第二課、12＝兩課混合；線上題號掛在第一課（u=1）或第二課（u=2、12）
   類別關鍵字（任一個星期／科目／地點／數字…）：開放欄 ___ 要說出一個同類的字，只說這個關鍵答案（例如 Monday.）也算對
   掛法：這支在 textbook.js 後面載入，window.DATA_ORALS＝全部題庫，每份掛到自己兩個單元的 u.oral；engine.js 註冊成 🎤 題（tb:<單元>:oral:<n>），E.tbOral() 一次抽 20 題。
   紙本考卷由 考卷\gen_oral.js 用這份資料產生（考卷只留本機）。 */
(function () {
  const Y = (who, aux) => [`Yes, ${who} ${aux}.`, `No, ${who} ${aux === 'do' ? "don't" : "doesn't"}.`];
  const YK = (who, aux) => [`Yes, ${who} ${aux}|No, ${who} ${aux === 'do' ? "don't" : "doesn't"}`];
  const ISIT = ['Yes, it is.', "No, it isn't."], ISITK = ["Yes, it is|No, it isn't"];
  // 開放欄的類別關鍵字：說到任一個星期／科目就算（「只說關鍵答案」也對，例如 When…? → Monday.）；紙本顯示成「任一個星期／科目」
  const DAY = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday', SUBJ = 'art|Chinese|English|math|music|PE|P.E.|science|social studies';
  const L1 = [
    // ---- Unit 1：星期 ----
    { u: 1, q: 'What day is today?', a: ["It's ___.", "Today is ___.", "It's ___ today.", '___.'], k: [DAY] },
    { u: 1, q: 'What day is tomorrow?', a: ["It's ___.", 'Tomorrow is ___.', '___.'], k: [DAY] },
    { u: 1, q: 'Is it Monday today?', a: ISIT.concat(["No, it isn't. It's ___."]), k: ISITK },
    { u: 1, q: 'Is it Friday or Saturday today?', a: ["It's Friday.", "It's Saturday.", 'Today is Friday.', 'Today is Saturday.', 'Friday.', 'Saturday.'], k: ['Friday|Saturday'] },
    { u: 1, q: 'Is tomorrow Saturday?', a: ISIT.concat(["No, it isn't. It's ___."]), k: ISITK },
    { u: 1, q: "What's your favorite day?", a: ['My favorite day is ___.', '___ is my favorite day.', "It's ___.", '___.'], k: [DAY] },
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
    { u: 12, q: 'When do you have English class?', a: ['On ___.', '___.', 'I have English class on ___.'], k: [DAY] },
    { u: 12, q: 'What day do you have music class?', a: ['On ___.', '___.', 'I have music class on ___.'], k: [DAY] },
    { u: 12, q: 'When does she have PE class?', a: ['On ___.', '___.', 'She has PE class on ___.'], k: [DAY] },
    { u: 12, q: 'What day is your art class?', a: ["It's on ___.", 'On ___.', '___.'], k: [DAY] },
    { u: 2, q: 'What class do you have on Monday?', a: ['I have ___ class.', 'I have ___ class on Monday.', '___ class.', '___.'], k: [SUBJ] },
    { u: 2, q: 'What class do you have today?', a: ['I have ___ class today.', 'I have ___ class.', '___.'], k: [SUBJ] },
    { u: 2, q: 'What class do we have tomorrow?', a: ['We have ___ class tomorrow.', 'We have ___ class.', '___.'], k: [SUBJ] },
    { u: 2, q: 'Do you have English class or math class today?', a: ['I have English class.', 'I have math class.', 'English class.', 'Math class.', 'English.', 'Math.'], k: ['English|math'] },
    { u: 12, q: 'Is your PE class on Tuesday?', a: ISIT.concat(["No, it isn't. It's on ___."]), k: ISITK },
    { u: 2, q: "What's your favorite subject?", a: ['My favorite subject is ___.', '___ is my favorite subject.', 'I like ___.', '___.'], k: [SUBJ] },
    { u: 2, q: 'Do you like art class?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Does she like music class?', a: Y('she', 'does'), k: YK('she', 'does') },
    { u: 2, q: 'Do you study English every day?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 2, q: 'Do you speak Chinese?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 12, q: 'Do you play in the park on Saturday?', a: Y('I', 'do'), k: YK('I', 'do') },
    { u: 1, q: 'Do you sleep late on Sunday?', a: Y('I', 'do'), k: YK('I', 'do') }
  ];
  const L2 = [
    // ---- Unit 1 ----
    { u: 1, q: 'What day is today?', zh: '月曆上，今天是星期三。', a: ["It's Wednesday.", 'Today is Wednesday.', "It's Wednesday today.", 'Wednesday.'], k: ['Wednesday'] },
    { u: 1, q: 'What day is tomorrow?', zh: '今天是星期五。', a: ["It's Saturday.", 'Tomorrow is Saturday.', 'Saturday.'], k: ['Saturday'] },
    { u: 1, q: 'What day is it today?', zh: '昨天是星期日。', a: ["It's Monday.", 'Today is Monday.', 'Monday.'], k: ['Monday'] },
    { u: 1, q: 'What day is it?', zh: '明天是星期五。', a: ["It's Thursday.", 'Today is Thursday.', 'Thursday.'], k: ['Thursday'] },
    { u: 1, q: 'Is it Thursday today?', zh: '月曆上，今天就是星期四。', a: ['Yes, it is.'], k: ['Yes, it is'] },
    { u: 1, q: 'Is it Tuesday today?', zh: '今天是星期三。說「不是」，再說今天星期幾。', a: ["No, it isn't. It's Wednesday.", "No. It's Wednesday."], k: ['No', 'Wednesday'] },
    { u: 1, q: 'Is tomorrow Friday?', zh: '今天是星期四。', a: ['Yes, it is.'], k: ['Yes, it is'] },
    { u: 1, q: 'Is tomorrow Sunday?', zh: '今天是星期日。說「不是」，再說明天星期幾。', a: ["No, it isn't. It's Monday.", "No, it isn't. Tomorrow is Monday."], k: ['No', 'Monday'] },
    { u: 1, q: 'Is it Monday or Tuesday today?', zh: '今天是星期二。', a: ["It's Tuesday.", 'Today is Tuesday.', 'Tuesday.'], k: ['Tuesday'] },
    { u: 1, q: "What's your favorite day?", zh: '你最喜歡星期五。', a: ['My favorite day is Friday.', 'Friday is my favorite day.', "It's Friday.", 'Friday.'], k: ['Friday'] },
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
    { u: 12, q: 'When do you have PE class?', zh: '你的體育課在星期二。', a: ['On Tuesday.', 'Tuesday.', 'I have PE class on Tuesday.', "It's on Tuesday."], k: ['Tuesday'] },
    { u: 12, q: 'When does Amy have music class?', zh: 'Amy 的音樂課在星期四。', a: ['On Thursday.', 'Thursday.', 'She has music class on Thursday.'], k: ['Thursday'] },
    { u: 12, q: 'What day is your art class?', zh: '你的美術課在星期五。', a: ["It's on Friday.", 'On Friday.', 'Friday.'], k: ['Friday'] },
    { u: 2, q: 'What class do you have on Wednesday?', zh: '看課表：星期三有自然課。', a: ['I have science class.', 'I have science class on Wednesday.', 'Science class.', 'Science.'], k: ['science'] },
    { u: 2, q: 'What class do we have today?', zh: '我們今天有國語課。', a: ['We have Chinese class.', 'We have Chinese class today.', 'Chinese class.', 'Chinese.'], k: ['Chinese'] },
    { u: 2, q: 'Do you have English class or Chinese class today?', zh: '今天有英文課。', a: ['I have English class.', 'I have English class today.', 'English class.', 'English.'], k: ['English'] },
    { u: 2, q: "What's your favorite subject?", zh: '你最喜歡數學。', a: ['My favorite subject is math.', 'Math is my favorite subject.', 'I like math.', 'Math.'], k: ['math'] },
    { u: 2, q: 'Do you like PE class?', zh: '你不喜歡。', a: ["No, I don't."], k: ["No, I don't"] },
    { u: 12, q: 'Is your music class on Monday?', zh: '沒錯，你的音樂課在星期一。', a: ['Yes, it is.'], k: ['Yes, it is'] },
    { u: 12, q: 'Is your science class on Tuesday?', zh: '不是，你的自然課在星期四。', a: ["No, it isn't. It's on Thursday.", "No. It's on Thursday."], k: ['No', 'Thursday'] },
    { u: 12, q: 'Do you have math class today?', zh: '今天星期二，你星期二有數學課。', a: ['Yes, I do.'], k: ['Yes, I do'] },
    { u: 12, q: 'Does he have art class tomorrow?', zh: '今天星期三，他星期四有美術課。', a: ['Yes, he does.'], k: ['Yes, he does'] },
    { u: 12, q: "Let's play in the park on Tuesday.", zh: '你星期二有英文課，不能去。', a: ['I have English class on Tuesday.', 'No, I have English class on Tuesday.', 'I have English class.'], k: ['English'] },
    { u: 12, q: 'What day is tomorrow?', zh: '明天要上體育課，你的體育課在星期一。', a: ["It's Monday.", 'Tomorrow is Monday.', 'Monday.'], k: ['Monday'] }
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
    { u: 2, q: 'What class do you have on Tuesday?', zh: '看課表：星期二有美術課，也有音樂課。', a: ['I have art class and music class.', 'I have art and music.', 'Art and music.'], k: ['art', 'music'] },
    { u: 12, q: 'When do you have science class?', zh: '你的自然課在星期一和星期四。', a: ['On Monday and Thursday.', 'Monday and Thursday.', 'I have science class on Monday and Thursday.'], k: ['Monday', 'Thursday'] },
    { u: 12, q: 'Does Ben have PE class tomorrow?', zh: '今天星期二，Ben 星期三有體育課。先回答，再說明天星期幾。', a: ['Yes, he does. Tomorrow is Wednesday.', "Yes, he does. It's Wednesday tomorrow."], k: ['Yes, he does', 'Wednesday'] },
    { u: 2, q: 'Do we have social studies class today?', zh: '今天沒有社會課，今天有的是自然課。', a: ["No, we don't. We have science class today.", "No, we don't. We have science today."], k: ["No, we don't", 'science'] },
    { u: 2, q: "I'm in a hurry!", zh: '換你問考官：你今天有體育課嗎？', a: ['Do you have PE class today?', 'Do you have PE today?'], k: ['Do you have', 'PE|P.E.', 'today'], f: "Yes, I do. Follow me!" },
    { u: 1, q: "Let's go to the park on Saturday.", zh: '說這是好主意，再請對方跟你走。', a: ['Good idea! Follow me.', 'Good idea. Follow me, please.'], k: ['Good idea', 'follow me'] },
    { u: 1, q: 'Is it Sunday today? I go to the park on Sunday.', zh: '今天真的是星期日。先回答，再祝考官玩得愉快。', a: ['Yes, it is. Have a good time!'], k: ['Yes, it is', 'have a good time'] }
  ];
  // ================= 共用：組題庫 =================
  // 縮寫補展開版（保留大小寫）：don't → do not、It's → It is、I'm → I am、He's → He is、There's → There is、We're → We are…（Let's 不動）
  const full = s => s.replace(/\b([Cc])an't\b/g, '$1annot').replace(/\b(\w+)n't\b/g, '$1 not').replace(/\b(It|it|What|what|He|he|She|she|There|there|Where|where)'s\b/g, '$1 is')
    .replace(/\bI'm\b/g, 'I am').replace(/\b(I|He|She|We|They|You)'d\b/g, '$1 would').replace(/\b(We|we|They|they|You|you)'re\b/g, '$1 are');
  const BANKS = [];
  // def：{key, title, file（紙本檔名用）, units:[第一課, 第二課], labels:['U1','U2'], cls:{類別關鍵字: 中文}, scope（紙本範圍說明）, note（核對狀態）, L:[難度1, 2, 3]}
  // 題目的 u：1＝第一課、2＝第二課、12＝兩課混合（線上題號掛第一課或第二課）
  function build(def) {
    const qs = def.L.flatMap((L, j) => L.map(x => Object.assign({ lv: j + 1 }, x))).map((x, i) => {
      const a = [...new Set(x.a.flatMap(s => [s, full(s)]))];
      // 科目 PE：辨識常寫成 P.E.，關鍵字兩種都收
      const k = x.k.map(s => (/\bPE\b/.test(s) && !/P\.E\./.test(s) ? s + '|' + s.replace(/\bPE\b/g, 'P.E.') : s));
      const kz = k.map(s => def.cls[s] || s);
      return Object.assign({}, x, { n: i + 1, a, k, kz, tb: x.u === 1 ? def.units[0] : def.units[1] });
    });
    BANKS.push({ key: def.key, title: def.title, file: def.file, units: def.units, labels: def.labels, scope: def.scope, note: def.note, pick: { 1: 8, 2: 8, 3: 4 }, qs });
  }
  build({ key: '5-u12', title: '五上 U1–U2 口語對話考試', file: '五上U1-U2', units: ['hanlin-5-u1', 'hanlin-5-u2'], labels: ['U1', 'U2'], cls: { [DAY]: '任一個星期', [SUBJ]: '任一個科目' }, L: [L1, L2, L3],
    scope: "Unit 1 What Day Is Today?（星期、What day is today? / Is it ___ today?、Good idea!、Have a good time!）；Unit 2 Do You Have PE Class on Monday?（八個科目、Do you / Does he/she have ___ class on ___?、Can we go to the park? Sure, follow me. I'm in a hurry.）",
    note: 'Unit 1 是依學校課程計畫整理、還沒拿課本逐字核對；Unit 2 依課本原文。' });

  // ================= 五上 U3–U4（Where Are You Going? ／ How Many Koalas Are There?；兩課都待課本核對）=================
  (() => {
    const PLACE = 'bank|bookstore|hospital|library|museum|park|post office|supermarket', STREET = 'Blue|Green|Red|Yellow';
    const NUM = 'one|two|three|four|five|six|seven|eight|nine|ten';
    const BE = (who, be) => [`Yes, ${who} ${be}.`, `No, ${who} ${be === 'am' ? "'m not" : be + "n't"}.`.replace(" 'm", "'m")];
    const BEK = (who, be) => [`Yes, ${who} ${be}|No, ${who} ${be === 'am' ? "'m not" : be + "n't"}`.replace(" 'm", "'m")];
    const L1 = [
      // ---- Unit 3：地點、Where are you going?、Where's the ___? ----
      { u: 1, q: 'Where are you going?', a: ["I'm going to the ___.", 'To the ___.', 'The ___.'], k: [PLACE] },
      { u: 1, q: 'Where is he going?', a: ["He's going to the ___.", 'To the ___.'], k: [PLACE] },
      { u: 1, q: 'Where is she going?', a: ["She's going to the ___.", 'To the ___.'], k: [PLACE] },
      { u: 1, q: 'Where are you and Amy going?', a: ["We're going to the ___.", 'To the ___.'], k: [PLACE] },
      { u: 1, q: 'Where are Amy and Ben going?', a: ["They're going to the ___.", 'To the ___.'], k: [PLACE] },
      { u: 1, q: "Where's the park?", a: ["It's on ___ Street.", 'On ___ Street.'], k: [STREET] },
      { u: 1, q: 'Where is the library?', a: ["It's on ___ Street.", 'On ___ Street.'], k: [STREET] },
      { u: 1, q: "Excuse me. Where's the post office?", a: ["It's on ___ Street.", 'On ___ Street.'], k: [STREET] },
      { u: 1, q: 'Excuse me. Where is the hospital?', a: ["It's on ___ Street.", 'On ___ Street.'], k: [STREET] },
      { u: 1, q: 'Are you going to the park?', a: BE('I', 'am'), k: BEK('I', 'am') },
      { u: 1, q: 'Is she going to the museum?', a: BE('she', 'is'), k: BEK('she', 'is') },
      { u: 1, q: 'Is he going to the hospital?', a: BE('he', 'is'), k: BEK('he', 'is') },
      { u: 1, q: 'Are we going to the supermarket?', a: BE('we', 'are'), k: BEK('we', 'are') },
      { u: 1, q: 'Is Amy going to the post office?', a: BE('she', 'is'), k: BEK('she', 'is') },
      { u: 1, q: 'Is the bookstore on Green Street?', a: BE('it', 'is'), k: BEK('it', 'is') },
      { u: 1, q: 'Is the museum on Red Street or Blue Street?', a: ["It's on Red Street.", "It's on Blue Street.", 'Red Street.', 'Blue Street.'], k: ['Red|Blue'] },
      { u: 1, q: 'Are you going to the bank or the post office?', a: ["I'm going to the bank.", "I'm going to the post office.", 'The bank.', 'The post office.'], k: ['bank|post office'] },
      { u: 1, q: 'Are you going to the library or the bookstore?', a: ["I'm going to the library.", "I'm going to the bookstore.", 'The library.', 'The bookstore.'], k: ['library|bookstore'] },
      { u: 1, q: 'Say cheese!', a: ['Cheese!', 'Say cheese!'], k: ['cheese'] },
      // ---- Unit 4：動物、How many ___ are there?、Does he/she like ___? ----
      { u: 2, q: 'How many lions are there?', a: ['There are ___ lions.', "There's one lion.", '___.'], k: [NUM] },
      { u: 2, q: 'How many koalas are there?', a: ['There are ___ koalas.', "There's one koala.", '___.'], k: [NUM] },
      { u: 2, q: 'How many elephants are there?', a: ['There are ___ elephants.', "There's one elephant.", '___.'], k: [NUM] },
      { u: 2, q: 'How many horses are there?', a: ['There are ___ horses.', "There's one horse.", '___.'], k: [NUM] },
      { u: 2, q: 'How many monkeys are there?', a: ['There are ___ monkeys.', "There's one monkey.", '___.'], k: [NUM] },
      { u: 2, q: 'Is there one tiger?', a: ['Yes, there is.', "No, there isn't."], k: ["Yes, there is|No, there isn't"] },
      { u: 2, q: 'Are there two horses?', a: ['Yes, there are.', "No, there aren't."], k: ["Yes, there are|No, there aren't"] },
      { u: 2, q: 'Is there one zebra or two zebras?', a: ["There's one zebra.", 'There are two zebras.', 'One.', 'Two.'], k: ['one|two'] },
      { u: 2, q: 'Do you like turtles?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you like zebras?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Does he like tigers?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Does she like elephants?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Does Ben like horses?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Does Amy like koalas?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Do they like monkeys?', a: Y('they', 'do'), k: YK('they', 'do') },
      { u: 2, q: 'Do you like lions or tigers?', a: ['I like lions.', 'I like tigers.', 'Lions.', 'Tigers.'], k: ['lions|tigers|lion|tiger'] },
      { u: 2, q: 'Does he like zebras or horses?', a: ['He likes zebras.', 'He likes horses.', 'Zebras.', 'Horses.'], k: ['zebras|horses|zebra|horse'] },
      { u: 2, q: 'Does she like monkeys or koalas?', a: ['She likes monkeys.', 'She likes koalas.', 'Monkeys.', 'Koalas.'], k: ['monkeys|koalas|monkey|koala'] },
      { u: 2, q: 'Bye! Take care.', a: ['Bye! Take care.', 'Bye!', 'Take care!'], k: ['bye|take care'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Are there two koalas in the park?', a: ['Yes, there are.', "No, there aren't."], k: ["Yes, there are|No, there aren't"] },
      { u: 12, q: 'Where are they going?', a: ["They're going to the ___.", 'To the ___.'], k: [PLACE] }
    ];
    const L2 = [
      // ---- Unit 3 ----
      { u: 1, q: 'Where are you going?', zh: '你要去圖書館。', a: ["I'm going to the library.", 'To the library.', 'The library.'], k: ['library'] },
      { u: 1, q: 'Where is she going?', zh: '她要去銀行。', a: ["She's going to the bank.", 'To the bank.'], k: ['bank'] },
      { u: 1, q: 'Where is he going?', zh: '他要去醫院。', a: ["He's going to the hospital.", 'To the hospital.'], k: ['hospital'] },
      { u: 1, q: 'Where are you going?', zh: '你和弟弟要一起去超級市場。', a: ["We're going to the supermarket.", 'To the supermarket.'], k: ['supermarket'] },
      { u: 1, q: 'Where are they going?', zh: '他們要去公園。', a: ["They're going to the park.", 'To the park.'], k: ['park'] },
      { u: 1, q: "Where's the museum?", zh: '博物館在綠街上。', a: ["It's on Green Street.", 'On Green Street.'], k: ['Green'] },
      { u: 1, q: 'Where is the post office?', zh: '郵局在黃街上。', a: ["It's on Yellow Street.", 'On Yellow Street.'], k: ['Yellow'] },
      { u: 1, q: "Excuse me. Where's the bookstore?", zh: '書店在紅街上。', a: ["It's on Red Street.", 'On Red Street.'], k: ['Red'] },
      { u: 1, q: "Where's the park?", zh: '公園在藍街上。', a: ["It's on Blue Street.", 'On Blue Street.'], k: ['Blue'] },
      { u: 1, q: 'Is the bank on Red Street?', zh: '沒錯，銀行在紅街上。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 1, q: 'Is the library on Blue Street?', zh: '不是，圖書館在綠街上。', a: ["No, it isn't. It's on Green Street.", "No. It's on Green Street."], k: ['No', 'Green'] },
      { u: 1, q: 'Are you going to the museum?', zh: '對，你要去博物館。', a: ['Yes, I am.'], k: ['Yes, I am'] },
      { u: 1, q: 'Is he going to the park?', zh: '不是，他要去書店。', a: ["No, he isn't. He's going to the bookstore.", "No. He's going to the bookstore."], k: ['No', 'bookstore'] },
      { u: 1, q: 'Is she going to the hospital?', zh: '對，她要去醫院。', a: ['Yes, she is.'], k: ['Yes, she is'] },
      { u: 1, q: 'One, two, three!', zh: '要拍照了，請大家笑一個。', a: ['Say cheese!'], k: ['say cheese'] },
      // ---- Unit 4 ----
      { u: 2, q: 'How many lions are there?', zh: '看圖：有三隻獅子。', a: ['There are three lions.', 'Three.', 'Three lions.'], k: ['three'] },
      { u: 2, q: 'How many koalas are there?', zh: '看圖：只有一隻無尾熊。', a: ["There's one koala.", 'One.', 'One koala.'], k: ['one'] },
      { u: 2, q: 'How many monkeys are there?', zh: '看圖：有十隻猴子。', a: ['There are ten monkeys.', 'Ten.', 'Ten monkeys.'], k: ['ten'] },
      { u: 2, q: 'How many zebras are there?', zh: '看圖：有兩匹斑馬。', a: ['There are two zebras.', 'Two.', 'Two zebras.'], k: ['two'] },
      { u: 2, q: 'How many elephants are there?', zh: '看圖：有五頭大象。', a: ['There are five elephants.', 'Five.', 'Five elephants.'], k: ['five'] },
      { u: 2, q: 'How many turtles are there?', zh: '看圖：有八隻烏龜。', a: ['There are eight turtles.', 'Eight.', 'Eight turtles.'], k: ['eight'] },
      { u: 2, q: 'How many horses are there?', zh: '看圖：有四匹馬。', a: ['There are four horses.', 'Four.', 'Four horses.'], k: ['four'] },
      { u: 2, q: 'Is there one tiger?', zh: '不是，有兩隻老虎。', a: ['No, there are two tigers.', "No, there isn't. There are two tigers."], k: ['No', 'two'] },
      { u: 2, q: 'Are there two lions?', zh: '對，有兩隻獅子。', a: ['Yes, there are.'], k: ['Yes, there are'] },
      { u: 2, q: 'Does he like tigers?', zh: '他喜歡。', a: ['Yes, he does.'], k: ['Yes, he does'] },
      { u: 2, q: 'Does she like horses?', zh: '她不喜歡；她喜歡斑馬。', a: ["No, she doesn't. She likes zebras."], k: ["No, she doesn't", 'zebras'] },
      { u: 2, q: 'Does he like koalas?', zh: '他不喜歡；他喜歡獅子。', a: ["No, he doesn't. He likes lions."], k: ["No, he doesn't", 'lions'] },
      { u: 2, q: 'Do you like monkeys?', zh: '你很喜歡猴子。', a: ['Yes, I do.'], k: ['Yes, I do'] },
      { u: 2, q: 'Do you like turtles?', zh: '你不喜歡烏龜。', a: ["No, I don't."], k: ["No, I don't"] },
      { u: 2, q: 'Do they like elephants?', zh: '他們喜歡大象。', a: ['Yes, they do.'], k: ['Yes, they do'] },
      { u: 2, q: 'Does she like lions?', zh: '她喜歡獅子。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      { u: 2, q: 'Do you like lions or tigers?', zh: '你喜歡老虎。', a: ['I like tigers.', 'Tigers.'], k: ['tigers|tiger'] },
      { u: 2, q: 'Does she like koalas or monkeys?', zh: '她喜歡無尾熊。', a: ['She likes koalas.', 'Koalas.'], k: ['koalas|koala'] },
      { u: 2, q: "There's a tiger!", zh: '朋友嚇壞了，請他冷靜下來。', a: ['Calm down.', 'Calm down!'], k: ['calm down'] },
      { u: 2, q: 'Bye!', zh: '跟考官說再見，請他保重。', a: ['Bye! Take care.', 'Take care!'], k: ['take care'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Where is he going?', zh: '他要去郵局。', a: ["He's going to the post office.", 'To the post office.'], k: ['post office'] },
      { u: 12, q: "Where's the hospital?", zh: '醫院在紅街上。', a: ["It's on Red Street.", 'On Red Street.'], k: ['Red'] },
      { u: 12, q: 'Is the supermarket on Yellow Street?', zh: '對，超級市場在黃街上。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 12, q: 'How many koalas are there in the park?', zh: '公園裡有六隻無尾熊。', a: ['There are six koalas.', 'Six.', 'Six koalas.'], k: ['six'] },
      { u: 12, q: 'Are you going to the bookstore?', zh: '不是，你要去圖書館。', a: ["No, I'm not. I'm going to the library.", "No. I'm going to the library."], k: ['No', 'library'] }
    ];
    const L3 = [
      { u: 1, q: 'Where are you going?', zh: '你要去圖書館。說完後，反問考官要去哪裡。', a: ["I'm going to the library. Where are you going?"], k: ['library', 'Where are you going'], f: "I'm going to the bank." },
      { u: 1, q: "Excuse me. Where's the museum?", zh: '博物館在藍街上。告訴他，再說你也要去博物館。', a: ["It's on Blue Street. I'm going to the museum, too.", "It's on Blue Street. I'm going to the museum."], k: ['Blue', 'going to the museum'] },
      { u: 1, q: "I'm going to the post office.", zh: '換你問考官：郵局在哪裡？', a: ["Where's the post office?"], k: ['Where', 'the post office'], f: "It's on Yellow Street." },
      { u: 1, q: "I'm going to the supermarket.", zh: '換你問考官：她（旁邊那個女生）要去哪裡？', a: ['Where is she going?'], k: ['Where is she', 'going'], f: "She's going to the bookstore." },
      { u: 1, q: 'This is Green Street.', zh: '先有禮貌地說「不好意思」，再問考官：醫院在哪裡？', a: ["Excuse me. Where's the hospital?"], k: ['Excuse me', "Where's the hospital"], f: "It's on Green Street." },
      { u: 1, q: 'Is she going to the library?', zh: '不是；她要去書店，書店在紅街上。', a: ["No, she isn't. She's going to the bookstore. It's on Red Street."], k: ['No', 'bookstore', 'Red'] },
      { u: 1, q: 'Are you going to the bank?', zh: '不是；你要去郵局。說完後，反問考官是不是要去銀行。', a: ["No, I'm not. I'm going to the post office. Are you going to the bank?"], k: ['No', 'post office', 'Are you going to the bank'], f: 'Yes, I am.' },
      { u: 1, q: 'Where is he going?', zh: '他要去超級市場；超級市場在黃街上。', a: ["He's going to the supermarket. It's on Yellow Street."], k: ['supermarket', 'Yellow'] },
      { u: 2, q: 'How many lions are there?', zh: '有四隻獅子。回答後，再問考官有幾隻老虎。', a: ['There are four lions. How many tigers are there?'], k: ['four', 'How many tigers'], f: 'There are two tigers.' },
      { u: 2, q: 'There are five monkeys.', zh: '換你問考官：有幾隻無尾熊？', a: ['How many koalas are there?'], k: ['How many', 'koalas'], f: "There's one koala." },
      { u: 2, q: 'Does he like zebras?', zh: '他不喜歡斑馬，他喜歡馬。說完後，問考官喜不喜歡馬。', a: ["No, he doesn't. He likes horses. Do you like horses?"], k: ["No, he doesn't", 'horses', 'Do you like'], f: 'Yes, I do.' },
      { u: 2, q: 'She likes elephants.', zh: '換你問考官：她喜歡烏龜嗎？', a: ['Does she like turtles?'], k: ['Does she like', 'turtles'], f: "No, she doesn't." },
      { u: 2, q: 'Do you like tigers?', zh: '你喜歡；再說有三隻老虎。', a: ['Yes, I do. There are three tigers.'], k: ['Yes, I do', 'three'] },
      { u: 2, q: 'How many koalas are there?', zh: '只有一隻；再說她喜歡無尾熊。', a: ["There's one koala. She likes koalas."], k: ['one', 'She likes koalas'] },
      { u: 2, q: 'Does she like monkeys?', zh: '她喜歡；再說有十隻猴子。', a: ['Yes, she does. There are ten monkeys.'], k: ['Yes, she does', 'ten'] },
      { u: 2, q: 'How many elephants are there?', zh: '有兩頭；再說他喜歡大象。', a: ['There are two elephants. He likes elephants.'], k: ['two', 'He likes elephants'] },
      { u: 2, q: "There's a lion!", zh: '請朋友冷靜下來，再告訴他：只有一隻獅子。', a: ["Calm down. There's one lion."], k: ['calm down', 'one lion'] },
      { u: 12, q: 'Are you going to the park?', zh: '對，你要去公園；再說公園裡有兩隻烏龜。', a: ['Yes, I am. There are two turtles in the park.'], k: ['Yes, I am', 'two turtles'] },
      { u: 12, q: 'Say cheese!', zh: '拍照時要說的話，說完再數一、二、三。', a: ['Cheese! One, two, three!'], k: ['cheese', 'one two three'] },
      { u: 12, q: 'Bye!', zh: '跟考官說再見、請他保重，再說你要去圖書館。', a: ["Bye! Take care. I'm going to the library."], k: ['take care', 'library'] }
    ];
    build({ key: '5-u34', title: '五上 U3–U4 口語對話考試', file: '五上U3-U4', units: ['hanlin-5-u3', 'hanlin-5-u4'], labels: ['U3', 'U4'],
      cls: { [PLACE]: '任一個地點', [STREET]: '任一條街（Blue／Green／Red／Yellow）', [NUM]: '任一個數字（one～ten）' }, L: [L1, L2, L3],
      scope: "Unit 3 Where Are You Going?（八個地點、Where are you going? I'm going to the ___.、Where's the ___? It's on ___ Street.、Say cheese!、Excuse me.）；Unit 4 How Many Koalas Are There?（八種動物＋複數、How many ___ are there? There are ___.／There's one ___.、Does he/she like ___?、Take care.、Calm down.）",
      note: 'Unit 3、Unit 4 都是依學校課程計畫整理、還沒拿課本逐字核對。' });
  })();

  // ================= 五下 U1–U2（What's Wrong? ／ Do You Have a Headache?；兩課都待課本核對）=================
  (() => {
    const PART = 'eye|eyes|ear|ears|nose|mouth|hand|hands|arm|arms|leg|legs|foot|feet', ILL = 'cold|fever|runny nose|sore throat|headache|toothache|stomachache';
    const IT = ['Yes, it does.', "No, it doesn't."], ITK = ["Yes, it does|No, it doesn't"];
    const THEY = ['Yes, they do.', "No, they don't."], THEYK = ["Yes, they do|No, they don't"];
    const L1 = [
      // ---- Unit 1：身體部位、What's wrong? My ___ hurts. ----
      { u: 1, q: "What's wrong?", a: ['My ___ hurts.', 'My ___ hurt.', 'My ___.'], k: [PART] },
      { u: 1, q: "What's wrong, Amy?", a: ['My ___ hurts.', 'My ___ hurt.', 'My ___.'], k: [PART] },
      { u: 1, q: 'Does your foot hurt?', a: IT, k: ITK },
      { u: 1, q: 'Do your eyes hurt?', a: THEY, k: THEYK },
      { u: 1, q: 'Does his arm hurt?', a: IT, k: ITK },
      { u: 1, q: 'Do her legs hurt?', a: THEY, k: THEYK },
      { u: 1, q: "Does Ben's hand hurt?", a: IT, k: ITK },
      { u: 1, q: 'Do your feet hurt?', a: THEY, k: THEYK },
      { u: 1, q: 'Does your mouth hurt?', a: IT, k: ITK },
      { u: 1, q: 'Do his ears hurt?', a: THEY, k: THEYK },
      { u: 1, q: 'Does your nose hurt?', a: IT, k: ITK },
      { u: 1, q: 'Does your arm or your leg hurt?', a: ['My arm hurts.', 'My leg hurts.', 'My arm.', 'My leg.'], k: ['arm|leg'] },
      { u: 1, q: 'Do your hands or your feet hurt?', a: ['My hands hurt.', 'My feet hurt.', 'My hands.', 'My feet.'], k: ['hands|feet|hand|foot'] },
      { u: 1, q: 'Can you give me a hand?', a: ['Yes, I can.', "No, I can't."], k: ["Yes, I can|No, I can't"] },
      // ---- Unit 2：病症、Do you have a ___? ----
      { u: 2, q: 'Do you have a fever?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you have a cold?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you have a headache?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you have a sore throat?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you have a runny nose?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Does he have a toothache?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Does she have a runny nose?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Does Amy have a stomachache?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Does Ben have a cold?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Does she have a fever?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Does he have a sore throat?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Do they have a cold?', a: Y('they', 'do'), k: YK('they', 'do') },
      { u: 2, q: 'Do you and Ben have a fever?', a: Y('we', 'do'), k: YK('we', 'do') },
      { u: 2, q: 'Do Amy and Ben have a headache?', a: Y('they', 'do'), k: YK('they', 'do') },
      { u: 2, q: 'Do you have a cold or a fever?', a: ['I have a cold.', 'I have a fever.', 'A cold.', 'A fever.'], k: ['cold|fever'] },
      { u: 2, q: 'Does he have a headache or a toothache?', a: ['He has a headache.', 'He has a toothache.', 'A headache.', 'A toothache.'], k: ['headache|toothache'] },
      { u: 2, q: 'Does she have a cold or a runny nose?', a: ['She has a cold.', 'She has a runny nose.', 'A cold.', 'A runny nose.'], k: ['cold|runny nose'] },
      { u: 2, q: 'May I help you?', a: ['Yes, please.', 'No, thank you.'], k: ['Yes, please|No, thank you|No, thanks'] },
      { u: 2, q: 'Thank you!', a: ["You're welcome."], k: ["You're welcome"] },
      { u: 2, q: 'Do you have a toothache?', a: Y('I', 'do'), k: YK('I', 'do') },
      // ---- 兩課混合 ----
      { u: 12, q: 'Does your throat hurt?', a: IT, k: ITK },
      { u: 12, q: "What's wrong? Do you have a fever?", a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 12, q: 'Does his eye hurt?', a: IT, k: ITK },
      { u: 12, q: "Do Amy's feet hurt?", a: THEY, k: THEYK },
      { u: 12, q: "What's the matter?", a: ['I have a ___.', 'My ___ hurts.', 'A ___.'], k: [ILL + '|' + PART] },
      { u: 12, q: 'Does she have a stomachache?', a: Y('she', 'does'), k: YK('she', 'does') }
    ];
    const L2 = [
      // ---- Unit 1 ----
      { u: 1, q: "What's wrong?", zh: '你的一隻腳很痛。', a: ['My foot hurts.', 'My foot.'], k: ['foot'] },
      { u: 1, q: "What's the matter?", zh: '你兩隻眼睛都很痛。', a: ['My eyes hurt.', 'My eyes.'], k: ['eyes'] },
      { u: 1, q: 'What is wrong?', zh: '你的嘴巴痛。', a: ['My mouth hurts.', 'My mouth.'], k: ['mouth'] },
      { u: 1, q: 'Does his leg hurt?', zh: '他的腿很痛。', a: ['Yes, it does.'], k: ['Yes, it does'] },
      { u: 1, q: 'Do her ears hurt?', zh: '她的耳朵不痛。', a: ["No, they don't."], k: ["No, they don't"] },
      { u: 1, q: 'Does your hand hurt?', zh: '不是手，是你的手臂痛。', a: ["No, it doesn't. My arm hurts.", 'No. My arm hurts.'], k: ['No', 'arm'] },
      { u: 1, q: 'Do your feet hurt?', zh: '你兩隻腳都痛。', a: ['Yes, they do.'], k: ['Yes, they do'] },
      { u: 1, q: 'Does her nose hurt?', zh: '她的鼻子痛。', a: ['Yes, it does.'], k: ['Yes, it does'] },
      { u: 1, q: 'Do his eyes hurt?', zh: '他的眼睛不痛；他的耳朵痛。', a: ["No, they don't. His ears hurt.", 'No. His ears hurt.'], k: ['No', 'ears'] },
      { u: 1, q: 'Does your arm hurt?', zh: '不痛。', a: ["No, it doesn't."], k: ["No, it doesn't"] },
      { u: 1, q: 'Can you give me a hand?', zh: '可以，你很樂意幫忙。', a: ['Yes, I can.'], k: ['Yes, I can'] },
      { u: 1, q: 'My leg hurts.', zh: '提醒他要小心。', a: ['Be careful!'], k: ['be careful'] },
      { u: 1, q: "What's wrong?", zh: '你搬不動東西，請考官幫你一下。', a: ['Can you give me a hand?'], k: ['give me a hand'] },
      { u: 1, q: "What's wrong with Amy?", zh: 'Amy 的腿痛，幫她回答。', a: ['Her leg hurts.', 'Her legs hurt.', 'Her leg.'], k: ['Her', 'leg|legs'] },
      { u: 1, q: "What's wrong with Ben?", zh: 'Ben 的手痛，幫他回答。', a: ['His hand hurts.', 'His hands hurt.', 'His hand.'], k: ['His', 'hand|hands'] },
      { u: 1, q: 'Can you give me a hand?', zh: '不行，你在忙。', a: ["No, I can't."], k: ["No, I can't"] },
      // ---- Unit 2 ----
      { u: 2, q: 'Do you have a fever?', zh: '你發燒了。', a: ['Yes, I do.'], k: ['Yes, I do'] },
      { u: 2, q: 'Do you have a headache?', zh: '你沒有頭痛；你喉嚨痛。', a: ["No, I don't. I have a sore throat."], k: ["No, I don't", 'sore throat'] },
      { u: 2, q: 'Does he have a cold?', zh: '他感冒了。', a: ['Yes, he does.'], k: ['Yes, he does'] },
      { u: 2, q: 'Does she have a toothache?', zh: '她沒有牙痛；她肚子痛。', a: ["No, she doesn't. She has a stomachache."], k: ["No, she doesn't", 'stomachache'] },
      { u: 2, q: 'Do you have a cold?', zh: '不是感冒；你流鼻水。', a: ["No, I don't. I have a runny nose."], k: ["No, I don't", 'runny nose'] },
      { u: 2, q: 'Does Ben have a fever?', zh: 'Ben 發燒了。', a: ['Yes, he does.'], k: ['Yes, he does'] },
      { u: 2, q: 'Does Amy have a headache?', zh: 'Amy 沒有頭痛。', a: ["No, she doesn't."], k: ["No, she doesn't"] },
      { u: 2, q: "What's wrong?", zh: '你牙痛。', a: ['I have a toothache.', 'A toothache.'], k: ['toothache'] },
      { u: 2, q: "What's wrong, Ben?", zh: '你當 Ben：你感冒了。', a: ['I have a cold.', 'A cold.'], k: ['cold'] },
      { u: 2, q: "What's the matter?", zh: '你肚子痛。', a: ['I have a stomachache.', 'A stomachache.'], k: ['stomachache'] },
      { u: 2, q: 'Do you have a cold or a fever?', zh: '你發燒了。', a: ['I have a fever.', 'A fever.'], k: ['fever'] },
      { u: 2, q: 'Does he have a headache or a toothache?', zh: '他頭痛。', a: ['He has a headache.', 'A headache.'], k: ['headache'] },
      { u: 2, q: 'May I help you?', zh: '你需要幫忙。', a: ['Yes, please.'], k: ['Yes, please'] },
      { u: 2, q: 'May I help you?', zh: '你不用幫忙，有禮貌地拒絕。', a: ['No, thank you.', 'No, thanks.'], k: ['No, thank you|No, thanks'] },
      { u: 2, q: 'Do they have a runny nose?', zh: '他們都流鼻水。', a: ['Yes, they do.'], k: ['Yes, they do'] },
      { u: 2, q: 'Do you and Ben have a sore throat?', zh: '你們兩個都沒有喉嚨痛。', a: ["No, we don't."], k: ["No, we don't"] },
      { u: 2, q: 'Does she have a fever?', zh: '她發燒了。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      { u: 2, q: "What's wrong, Amy?", zh: '你當 Amy：你喉嚨痛。', a: ['I have a sore throat.', 'A sore throat.'], k: ['sore throat'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'What is the matter?', zh: '你頭痛。', a: ['I have a headache.', 'A headache.'], k: ['headache'] },
      { u: 12, q: 'Does your throat hurt?', zh: '會痛，你喉嚨痛。', a: ['Yes, it does.', 'Yes, it does. I have a sore throat.'], k: ['Yes, it does'] },
      { u: 12, q: 'Do your eyes hurt?', zh: '不痛；你流鼻水。', a: ["No, they don't. I have a runny nose."], k: ["No, they don't", 'runny nose'] },
      { u: 12, q: "Does Ben's foot hurt?", zh: 'Ben 的腳不痛；他的腿痛。', a: ["No, it doesn't. His leg hurts.", 'No. His leg hurts.'], k: ['No', 'leg'] },
      { u: 12, q: 'Do you have a stomachache?', zh: '你沒有肚子痛；你的嘴巴痛。', a: ["No, I don't. My mouth hurts."], k: ["No, I don't", 'mouth'] },
      { u: 12, q: 'Hello! May I help you?', zh: '要；你頭痛。', a: ['Yes, please. I have a headache.'], k: ['Yes, please', 'headache'] }
    ];
    const L3 = [
      { u: 1, q: "What's the matter?", zh: '你的腳痛。說完後，問考官怎麼了。', a: ["My foot hurts. What's wrong?", "My foot hurts. What's wrong with you?"], k: ['foot', "What's wrong"], f: 'My arm hurts.' },
      { u: 1, q: "What's wrong with you?", zh: '你的手臂痛。說完後，請考官幫你一下。', a: ['My arm hurts. Can you give me a hand?'], k: ['arm', 'give me a hand'], f: 'Yes, I can.' },
      { u: 1, q: 'Can you give me a hand?', zh: '好；再提醒他要小心。', a: ['Yes, I can. Be careful!'], k: ['Yes, I can', 'be careful'] },
      { u: 1, q: 'Do your ears hurt?', zh: '不痛；你的眼睛痛。說完後，問考官的眼睛痛不痛。', a: ["No, they don't. My eyes hurt. Do your eyes hurt?"], k: ["No, they don't", 'My eyes', 'Do your eyes hurt'], f: "No, they don't." },
      { u: 1, q: "Ben's arm hurts.", zh: '換你問考官：他的手痛嗎？', a: ['Does his hand hurt?', "Does Ben's hand hurt?"], k: ['Does', 'hand', 'hurt'], f: "No, it doesn't." },
      { u: 1, q: "What's wrong, Amy?", zh: '你當 Amy：你的手痛，腿也痛。', a: ['My hand hurts. My legs hurt, too.', 'My hand and my legs hurt.'], k: ['hand', 'legs|leg'] },
      { u: 2, q: 'My leg hurts.', zh: '換你問考官：你發燒了嗎？', a: ['Do you have a fever?'], k: ['Do you have', 'fever'], f: "No, I don't." },
      { u: 2, q: 'I have a cold.', zh: '換你問考官：你喉嚨痛嗎？', a: ['Do you have a sore throat?'], k: ['Do you have', 'sore throat'], f: 'Yes, I do.' },
      { u: 2, q: 'Ben has a fever.', zh: '換你問考官：他頭痛嗎？', a: ['Does he have a headache?', 'Does Ben have a headache?'], k: ['Does', 'have a headache'], f: "No, he doesn't." },
      { u: 2, q: "Amy's eyes hurt.", zh: '換你問考官：她感冒了嗎？', a: ['Does she have a cold?', 'Does Amy have a cold?'], k: ['Does', 'have a cold'], f: 'Yes, she does.' },
      { u: 2, q: 'Does she have a fever?', zh: '是的；她也流鼻水。', a: ['Yes, she does. She has a runny nose, too.', 'Yes, she does. She has a runny nose.'], k: ['Yes, she does', 'runny nose'] },
      { u: 2, q: 'May I help you?', zh: '要；你喉嚨痛，也流鼻水。', a: ['Yes, please. I have a sore throat and a runny nose.'], k: ['Yes, please', 'sore throat', 'runny nose'] },
      { u: 2, q: 'Thank you!', zh: '說不客氣，再問考官：你頭痛嗎？', a: ["You're welcome. Do you have a headache?"], k: ["You're welcome", 'Do you have a headache'], f: "No, I don't." },
      { u: 2, q: 'Does he have a cold or a fever?', zh: '他兩個都有。', a: ['He has a cold and a fever.', 'A cold and a fever.'], k: ['cold', 'fever'] },
      { u: 2, q: 'Do they have a fever?', zh: '沒有；他們都感冒了。', a: ["No, they don't. They have a cold."], k: ["No, they don't", 'cold'] },
      { u: 12, q: 'Do you have a headache?', zh: '不是；你牙痛，嘴巴也痛。', a: ["No, I don't. I have a toothache. My mouth hurts, too.", "No, I don't. I have a toothache. My mouth hurts."], k: ["No, I don't", 'toothache', 'mouth'] },
      { u: 12, q: 'My feet hurt.', zh: '提醒考官要小心，再問他是不是發燒了。', a: ['Be careful! Do you have a fever?'], k: ['be careful', 'Do you have a fever'], f: "No, I don't." },
      { u: 12, q: 'Does Ben have a stomachache?', zh: '沒有；他的腿痛。', a: ["No, he doesn't. His leg hurts."], k: ["No, he doesn't", 'leg'] },
      { u: 12, q: "What's wrong, Ben?", zh: '你當 Ben：你感冒了，頭也痛。', a: ['I have a cold and a headache.', 'I have a cold. I have a headache.'], k: ['cold', 'headache'] },
      { u: 12, q: 'I have a toothache.', zh: '換你問考官：你的嘴巴痛嗎？', a: ['Does your mouth hurt?'], k: ['Does your mouth', 'hurt'], f: 'Yes, it does.' }
    ];
    build({ key: '6-u12', title: '五下 U1–U2 口語對話考試', file: '五下U1-U2', units: ['hanlin-6-u1', 'hanlin-6-u2'], labels: ['U1', 'U2'],
      cls: { [PART]: '任一個身體部位', [ILL + '|' + PART]: '任一個病症或身體部位' }, L: [L1, L2, L3],
      scope: "Unit 1 What's Wrong?（身體部位＋複數 eyes／feet、What's wrong? My ___ hurts.／My ___ hurt.、my／his／her、Can you give me a hand?、Be careful!）；Unit 2 Do You Have a Headache?（七個病症、Do you / Does he/she have a ___?、I have a ___.／She has a ___.、May I help you?、You're welcome.）",
      note: '五下 Unit 1、Unit 2 都是依學校課程計畫整理、還沒拿課本逐字核對。' });
  })();

  // ================= 五下 U3–U4（What Would You Like for Dinner? ／ Whose Backpack Is That?；兩課都待課本核對）=================
  (() => {
    const FOOD = 'bread|chicken|salad|soup|noodles', OWN = "my|your|his|her|Tony's|Amy's|Ben's";
    const WY = ['Yes, please.', 'No, thank you.', 'No, thanks.'], WYK = ['Yes, please|No, thank you|No, thanks'];
    const ISIT = ['Yes, it is.', "No, it isn't."], ISITK = ["Yes, it is|No, it isn't"], ARE = ['Yes, they are.', "No, they aren't."], AREK = ["Yes, they are|No, they aren't"];
    const L1 = [
      // ---- Unit 3：三餐、食物、What would you like for ___? ----
      { u: 1, q: 'What would you like for breakfast?', a: ["I'd like some ___.", 'Some ___.', '___.'], k: [FOOD] },
      { u: 1, q: 'What would you like for lunch?', a: ["I'd like some ___.", 'Some ___.', '___.'], k: [FOOD] },
      { u: 1, q: 'What would you like for dinner?', a: ["I'd like some ___.", 'Some ___.', '___.'], k: [FOOD] },
      { u: 1, q: 'What would you like?', a: ["I'd like some ___.", 'Some ___.', '___.'], k: [FOOD] },
      { u: 1, q: 'What would she like for lunch?', a: ["She'd like some ___.", 'Some ___.', '___.'], k: [FOOD] },
      { u: 1, q: 'What would he like for breakfast?', a: ["He'd like some ___.", 'Some ___.', '___.'], k: [FOOD] },
      { u: 1, q: 'Would you like some soup?', a: WY, k: WYK },
      { u: 1, q: 'Would you like some bread for breakfast?', a: WY, k: WYK },
      { u: 1, q: 'Would you like some chicken for dinner?', a: WY, k: WYK },
      { u: 1, q: 'Would you like some noodles for lunch?', a: WY, k: WYK },
      { u: 1, q: 'Would you like some bread or some noodles?', a: ["I'd like some bread.", "I'd like some noodles.", 'Bread.', 'Noodles.'], k: ['bread|noodles'] },
      { u: 1, q: 'Would you like soup or salad for lunch?', a: ["I'd like some soup.", "I'd like some salad.", 'Soup.', 'Salad.'], k: ['soup|salad'] },
      { u: 1, q: 'Would you like chicken or noodles for dinner?', a: ["I'd like some chicken.", "I'd like some noodles.", 'Chicken.', 'Noodles.'], k: ['chicken|noodles'] },
      { u: 1, q: 'Do you like chicken?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 1, q: 'Does he like salad?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 1, q: 'Does she like noodles?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 1, q: "There's no soup.", a: ['Too bad!', 'Oh, too bad.'], k: ['too bad'] },
      { u: 1, q: 'We have noodles for dinner.', a: ['I see.', 'Oh, I see.'], k: ['I see'] },
      { u: 1, q: 'Is the soup for lunch or dinner?', a: ["It's for lunch.", "It's for dinner.", 'For lunch.', 'For dinner.'], k: ['lunch|dinner'] },
      { u: 1, q: 'Is it breakfast or lunch?', a: ["It's breakfast.", "It's lunch.", 'Breakfast.', 'Lunch.'], k: ['breakfast|lunch'] },
      // ---- Unit 4：物品、Whose ___ is this／that? ----
      { u: 2, q: 'Whose backpack is this?', a: ["It's ___ backpack.", '___ backpack.'], k: [OWN] },
      { u: 2, q: 'Whose cap is that?', a: ["It's ___ cap.", '___ cap.'], k: [OWN] },
      { u: 2, q: 'Whose umbrella is this?', a: ["It's ___ umbrella.", '___ umbrella.'], k: [OWN] },
      { u: 2, q: 'Whose lunchbox is that?', a: ["It's ___ lunchbox.", '___ lunchbox.'], k: [OWN] },
      { u: 2, q: 'Whose water bottle is that?', a: ["It's ___ water bottle.", '___ water bottle.'], k: [OWN] },
      { u: 2, q: 'Whose workbook is this?', a: ["It's ___ workbook.", '___ workbook.'], k: [OWN] },
      { u: 2, q: 'Whose glasses are these?', a: ['They are ___ glasses.', "They're ___ glasses.", '___ glasses.'], k: [OWN] },
      { u: 2, q: 'Whose shoes are those?', a: ['They are ___ shoes.', "They're ___ shoes.", '___ shoes.'], k: [OWN] },
      { u: 2, q: 'Is this your water bottle?', a: ISIT, k: ISITK },
      { u: 2, q: 'Is that his workbook?', a: ISIT, k: ISITK },
      { u: 2, q: "Is this Tony's cap?", a: ISIT, k: ISITK },
      { u: 2, q: 'Is this her backpack?', a: ISIT, k: ISITK },
      { u: 2, q: 'Are these your shoes?', a: ARE, k: AREK },
      { u: 2, q: 'Are those her glasses?', a: ARE, k: AREK },
      { u: 2, q: "Are these Amy's shoes?", a: ARE, k: AREK },
      { u: 2, q: "Is that Amy's umbrella or Ben's umbrella?", a: ["It's Amy's umbrella.", "It's Ben's umbrella.", "Amy's.", "Ben's."], k: ["Amy's|Ben's"] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Whose soup is this?', a: ["It's ___ soup.", '___ soup.'], k: [OWN] },
      { u: 12, q: 'Whose noodles are these?', a: ['They are ___ noodles.', "They're ___ noodles.", '___ noodles.'], k: [OWN] },
      { u: 12, q: 'Is this your salad?', a: ISIT, k: ISITK },
      { u: 12, q: "Would you like some bread? It's in my backpack.", a: WY, k: WYK }
    ];
    const L2 = [
      // ---- Unit 3 ----
      { u: 1, q: 'What would you like for breakfast?', zh: '你想吃麵包。', a: ["I'd like some bread.", 'Some bread.', 'Bread.'], k: ['bread'] },
      { u: 1, q: 'What would you like for lunch?', zh: '你想吃沙拉。', a: ["I'd like some salad.", 'Some salad.', 'Salad.'], k: ['salad'] },
      { u: 1, q: 'What would you like for dinner?', zh: '你想吃雞肉。', a: ["I'd like some chicken.", 'Some chicken.', 'Chicken.'], k: ['chicken'] },
      { u: 1, q: 'What would you like?', zh: '你想喝湯。', a: ["I'd like some soup.", 'Some soup.', 'Soup.'], k: ['soup'] },
      { u: 1, q: 'Would you like some noodles for lunch?', zh: '你要。', a: ['Yes, please.'], k: ['Yes, please'] },
      { u: 1, q: 'Would you like some chicken for dinner?', zh: '你不要，有禮貌地拒絕。', a: ['No, thank you.', 'No, thanks.'], k: ['No, thank you|No, thanks'] },
      { u: 1, q: 'Would you like some bread for lunch?', zh: '不要麵包；你想喝湯。', a: ["No, thank you. I'd like some soup.", "No, thanks. I'd like some soup."], k: ['No, thank you|No, thanks', 'soup'] },
      { u: 1, q: 'Would you like some salad for breakfast?', zh: '不要沙拉；你想吃麵包。', a: ["No, thank you. I'd like some bread.", "No, thanks. I'd like some bread."], k: ['No, thank you|No, thanks', 'bread'] },
      { u: 1, q: 'Would you like soup or salad?', zh: '你要沙拉。', a: ["I'd like some salad.", 'Salad.'], k: ['salad'] },
      { u: 1, q: 'Would you like chicken or noodles for dinner?', zh: '你要麵。', a: ["I'd like some noodles.", 'Noodles.'], k: ['noodles'] },
      { u: 1, q: 'What would he like for lunch?', zh: '他想吃雞肉。', a: ["He'd like some chicken.", 'Some chicken.', 'Chicken.'], k: ['chicken'] },
      { u: 1, q: 'What would she like for breakfast?', zh: '她想吃麵包。', a: ["She'd like some bread.", 'Some bread.', 'Bread.'], k: ['bread'] },
      { u: 1, q: 'Do you like soup?', zh: '你喜歡。', a: ['Yes, I do.'], k: ['Yes, I do'] },
      { u: 1, q: 'Does he like salad?', zh: '他不喜歡。', a: ["No, he doesn't."], k: ["No, he doesn't"] },
      { u: 1, q: "There's no chicken.", zh: '說「太可惜了」。', a: ['Too bad!'], k: ['too bad'] },
      { u: 1, q: 'We have soup for lunch.', zh: '說「我懂了」。', a: ['I see.', 'Oh, I see.'], k: ['I see'] },
      { u: 1, q: 'Is the soup for lunch?', zh: '不是，是晚餐要喝的。', a: ["No, it isn't. It's for dinner.", 'No. For dinner.'], k: ['No', 'dinner'] },
      { u: 1, q: 'Would you like some salad?', zh: '你要，有禮貌地說。', a: ['Yes, please.'], k: ['Yes, please'] },
      // ---- Unit 4 ----
      { u: 2, q: 'Whose backpack is this?', zh: '是你的。', a: ["It's my backpack.", 'My backpack.'], k: ['my'] },
      { u: 2, q: 'Whose cap is that?', zh: '是他的。', a: ["It's his cap.", 'His cap.'], k: ['his'] },
      { u: 2, q: 'Whose umbrella is this?', zh: '是 Tony 的。', a: ["It's Tony's umbrella.", "Tony's umbrella.", "Tony's."], k: ["Tony's"] },
      { u: 2, q: 'Whose lunchbox is that?', zh: '是她的。', a: ["It's her lunchbox.", 'Her lunchbox.'], k: ['her'] },
      { u: 2, q: 'Whose glasses are these?', zh: '是 Amy 的。', a: ["They are Amy's glasses.", "Amy's glasses.", "Amy's."], k: ["Amy's"] },
      { u: 2, q: 'Whose shoes are those?', zh: '是你的。', a: ['They are my shoes.', 'My shoes.'], k: ['my'] },
      { u: 2, q: 'Whose water bottle is this?', zh: '是考官的（考官的＝「你的」）。', a: ["It's your water bottle.", 'Your water bottle.'], k: ['your'] },
      { u: 2, q: 'Whose workbook is that?', zh: '是 Ben 的。', a: ["It's Ben's workbook.", "Ben's workbook.", "Ben's."], k: ["Ben's"] },
      { u: 2, q: 'Is this your cap?', zh: '不是，是他的。', a: ["No, it isn't. It's his cap.", "No. It's his cap."], k: ['No', 'his'] },
      { u: 2, q: 'Are these your glasses?', zh: '是你的。', a: ['Yes, they are.'], k: ['Yes, they are'] },
      { u: 2, q: 'Are those her shoes?', zh: '不是，是 Amy 的。', a: ["No, they aren't. They are Amy's shoes.", "No. They're Amy's shoes."], k: ['No', "Amy's"] },
      { u: 2, q: "Is that Tony's backpack?", zh: '對，是 Tony 的。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 2, q: "It's my umbrella. It's a cap, too!", zh: '這把雨傘也是帽子，你覺得太神奇了。', a: ['Amazing!'], k: ['amazing'] },
      { u: 2, q: 'My lunchbox!', zh: '考官好像很著急，問他「怎麼回事？」', a: ["What's the matter?"], k: ["What's the matter"] },
      { u: 2, q: "Is this Amy's water bottle or Ben's water bottle?", zh: '是 Ben 的。', a: ["It's Ben's water bottle.", "Ben's."], k: ["Ben's"] },
      { u: 2, q: 'Whose shoes are these?', zh: '是他的。', a: ['They are his shoes.', 'His shoes.'], k: ['his'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Whose soup is this?', zh: '是她的。', a: ["It's her soup.", 'Her soup.'], k: ['her'] },
      { u: 12, q: 'Whose noodles are those?', zh: '是 Tony 的。', a: ["They are Tony's noodles.", "Tony's noodles.", "Tony's."], k: ["Tony's"] },
      { u: 12, q: 'What would you like for lunch?', zh: '你想吃麵。', a: ["I'd like some noodles.", 'Some noodles.', 'Noodles.'], k: ['noodles'] },
      { u: 12, q: 'Is this your bread?', zh: '不是，是她的。', a: ["No, it isn't. It's her bread.", "No. It's her bread."], k: ['No', 'her'] },
      { u: 12, q: "Would you like some soup? It's in my lunchbox.", zh: '你要。', a: ['Yes, please.'], k: ['Yes, please'] },
      { u: 12, q: 'Whose salad is that?', zh: '是你的。', a: ["It's my salad.", 'My salad.'], k: ['my'] }
    ];
    const L3 = [
      { u: 1, q: 'What would you like for lunch?', zh: '你想喝湯。說完後，反問考官午餐想吃什麼。', a: ["I'd like some soup. What would you like for lunch?", "I'd like some soup. What would you like?"], k: ['soup', 'What would you like'], f: "I'd like some noodles." },
      { u: 1, q: 'Would you like some bread for breakfast?', zh: '不要；你想吃沙拉。說完後，問考官要不要一些沙拉。', a: ["No, thank you. I'd like some salad. Would you like some salad?"], k: ['No, thank you|No, thanks', 'salad', 'Would you like'], f: 'Yes, please.' },
      { u: 1, q: "I'd like some chicken.", zh: '換你問考官：你晚餐想吃什麼？', a: ['What would you like for dinner?'], k: ['What would you like', 'dinner'], f: "I'd like some noodles." },
      { u: 1, q: "I'd like some soup.", zh: '換你問考官：你要不要一些麵包？', a: ['Would you like some bread?'], k: ['Would you like', 'bread'], f: 'No, thank you.' },
      { u: 1, q: "There's no soup.", zh: '說太可惜了，再說你想吃一些麵。', a: ["Too bad! I'd like some noodles."], k: ['too bad', 'noodles'] },
      { u: 1, q: 'Would you like chicken or noodles for dinner?', zh: '兩個都要。', a: ["I'd like some chicken and some noodles.", 'Chicken and noodles.'], k: ['chicken', 'noodles'] },
      { u: 1, q: 'What would he like for breakfast?', zh: '他想要麵包，也想喝湯。', a: ["He'd like some bread and some soup.", 'Some bread and some soup.'], k: ['bread', 'soup'] },
      { u: 1, q: 'Do you like salad?', zh: '不喜歡；你喜歡雞肉。', a: ["No, I don't. I like chicken."], k: ["No, I don't", 'chicken'] },
      { u: 2, q: 'Whose backpack is that?', zh: '是你的。說完後，問考官這頂帽子是誰的。', a: ["It's my backpack. Whose cap is this?"], k: ['my', 'Whose cap'], f: "It's Tony's cap." },
      { u: 2, q: 'This is my umbrella.', zh: '換你問考官：那是誰的水壺？', a: ['Whose water bottle is that?'], k: ['Whose water bottle', 'that'], f: "It's Amy's water bottle." },
      { u: 2, q: 'These are my glasses.', zh: '換你問考官：那些是誰的鞋子？', a: ['Whose shoes are those?'], k: ['Whose shoes', 'those'], f: "They are Ben's shoes." },
      { u: 2, q: 'Is this your workbook?', zh: '不是，是她的；再說你的習作在你的背包裡。', a: ["No, it isn't. It's her workbook. My workbook is in my backpack."], k: ['No', 'her', 'in my backpack'] },
      { u: 2, q: 'Are those your shoes?', zh: '不是，是 Tony 的。說完後，反問考官這些是不是他的鞋子。', a: ["No, they aren't. They are Tony's shoes. Are these your shoes?"], k: ['No', "Tony's", 'Are these your shoes'], f: 'Yes, they are.' },
      { u: 2, q: "It's my cap.", zh: '說你懂了，再問考官：那些是誰的眼鏡？', a: ['I see. Whose glasses are those?'], k: ['I see', 'Whose glasses'], f: 'They are my glasses, too.' },
      { u: 2, q: 'This lunchbox is a backpack, too!', zh: '說太神奇了，再問考官：這是你的便當盒嗎？', a: ['Amazing! Is it your lunchbox?', 'Amazing! Is this your lunchbox?'], k: ['amazing', 'your lunchbox'], f: 'Yes, it is.' },
      { u: 2, q: "Whose umbrella is this? Is it Ben's?", zh: '不是 Ben 的，是 Amy 的。', a: ["No, it isn't. It's Amy's umbrella.", "No. It's Amy's."], k: ['No', "Amy's"] },
      { u: 12, q: 'Whose lunchbox is this?', zh: '是你的；裡面有一些雞肉。', a: ["It's my lunchbox. There's some chicken in it."], k: ['my lunchbox', 'chicken'] },
      { u: 12, q: 'Whose soup is this?', zh: '是他的；他晚餐想喝一些湯。', a: ["It's his soup. He'd like some soup for dinner."], k: ['his', 'dinner'] },
      { u: 12, q: 'Would you like some noodles?', zh: '不要；你想喝湯，湯在你的便當盒裡。', a: ["No, thank you. I'd like some soup. It's in my lunchbox."], k: ['No, thank you|No, thanks', 'soup', 'lunchbox'] },
      { u: 12, q: 'Would you like some salad for lunch?', zh: '要；再問考官：那是誰的便當盒？', a: ['Yes, please. Whose lunchbox is that?'], k: ['Yes, please', 'Whose lunchbox'], f: "It's my lunchbox." }
    ];
    build({ key: '6-u34', title: '五下 U3–U4 口語對話考試', file: '五下U3-U4', units: ['hanlin-6-u3', 'hanlin-6-u4'], labels: ['U3', 'U4'],
      cls: { [FOOD]: '任一種食物', [OWN]: '任一個「誰的」（my／your／his／her／名字＋\'s）' }, L: [L1, L2, L3],
      scope: "Unit 3 What Would You Like for Dinner?（三餐、五種食物、What would you like for ___? I'd like some ___.、Would you like some ___? Yes, please. / No, thank you.、I see.、Too bad!）；Unit 4 Whose Backpack Is That?（八樣物品、Whose ___ is this/that? It's my/his/Tony's ___.、Whose ___ are these/those? They are ___.、Amazing!、What's the matter?）",
      note: '五下 Unit 3、Unit 4 都是依學校課程計畫整理、還沒拿課本逐字核對。' });
  })();

  // ================= 六上 U1–U2（Where Are You From? ／ How Do You Go to School?；依學校課程計畫整理，待課本核對）=================
  (() => {
    const CTRY = 'Australia|India|Japan|Spain|Taiwan|UK|USA|U.K.|U.S.A.', BY = 'bike|bus|car|MRT|M.R.T.|metro|scooter|taxi|train|foot';
    const UKK = 'UK|U.K.', USK = 'USA|U.S.A.', MRT = 'MRT|M.R.T.|metro';
    const IS = (who) => [`Yes, ${who} is.`, `No, ${who} isn't.`], ISK = (who) => [`Yes, ${who} is|No, ${who} isn't`];
    const ARE = (who) => [`Yes, ${who} are.`, `No, ${who} aren't.`], AREK = (who) => [`Yes, ${who} are|No, ${who} aren't`];
    const L1 = [
      // ---- Unit 1：國家、Where are you from? ----
      { u: 1, q: 'Where are you from?', a: ["I'm from ___.", 'From ___.', '___.'], k: [CTRY] },
      { u: 1, q: 'Where is he from?', a: ["He's from ___.", 'From ___.', '___.'], k: [CTRY] },
      { u: 1, q: 'Where is she from?', a: ["She's from ___.", 'From ___.', '___.'], k: [CTRY] },
      { u: 1, q: 'Where are Amy and Ben from?', a: ["They're from ___.", 'From ___.', '___.'], k: [CTRY] },
      { u: 1, q: 'Where is Amy from?', a: ["She's from ___.", 'From ___.', '___.'], k: [CTRY] },
      { u: 1, q: 'Where is Ben from?', a: ["He's from ___.", 'From ___.', '___.'], k: [CTRY] },
      { u: 1, q: 'Are you from Taiwan?', a: ['Yes, I am.', "No, I'm not."], k: ["Yes, I am|No, I'm not"] },
      { u: 1, q: 'Is he from Japan?', a: IS('he'), k: ISK('he') },
      { u: 1, q: 'Is she from the USA?', a: IS('she'), k: ISK('she') },
      { u: 1, q: 'Is Amy from Australia?', a: IS('she'), k: ISK('she') },
      { u: 1, q: 'Is Ben from the UK?', a: IS('he'), k: ISK('he') },
      { u: 1, q: 'Are they from Spain?', a: ARE('they'), k: AREK('they') },
      { u: 1, q: 'Are you and Ben from Taiwan?', a: ARE('we'), k: AREK('we') },
      { u: 1, q: 'Is Ben from India?', a: IS('he'), k: ISK('he') },
      { u: 1, q: 'Are you from Japan or Taiwan?', a: ["I'm from Japan.", "I'm from Taiwan.", 'Japan.', 'Taiwan.'], k: ['Japan|Taiwan'] },
      { u: 1, q: 'Is he from India or Spain?', a: ["He's from India.", "He's from Spain.", 'India.', 'Spain.'], k: ['India|Spain'] },
      { u: 1, q: 'Is she from the UK or the USA?', a: ["She's from the UK.", "She's from the USA.", 'The UK.', 'The USA.'], k: ['UK|USA|U.K.|U.S.A.'] },
      // ---- Unit 2：交通方式、How do you go to school? ----
      { u: 2, q: 'How do you go to school?', a: ['I go to school by ___.', 'I go to school on foot.', 'By ___.', 'On foot.'], k: [BY] },
      { u: 2, q: 'How does he go to school?', a: ['He goes to school by ___.', 'He goes to school on foot.', 'By ___.'], k: [BY] },
      { u: 2, q: 'How does she go to school?', a: ['She goes to school by ___.', 'She goes to school on foot.', 'By ___.'], k: [BY] },
      { u: 2, q: 'How does Amy go to school?', a: ['She goes to school by ___.', 'She goes to school on foot.', 'By ___.'], k: [BY] },
      { u: 2, q: 'How do they go to school?', a: ['They go to school by ___.', 'They go to school on foot.', 'By ___.'], k: [BY] },
      { u: 2, q: 'How do Amy and Ben go to school?', a: ['They go to school by ___.', 'They go to school on foot.', 'By ___.'], k: [BY] },
      { u: 2, q: 'Do you go to school by bus?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you go to school on foot?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you go to school by scooter?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Does he go to school by car?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Does she go to school by MRT?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Does Ben go to school by bike?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Does Amy go to school by taxi?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Do they go to school by train?', a: Y('they', 'do'), k: YK('they', 'do') },
      { u: 2, q: 'Do you and Amy go to school by bus?', a: Y('we', 'do'), k: YK('we', 'do') },
      { u: 2, q: 'Do you go to school by bus or by bike?', a: ['I go to school by bus.', 'I go to school by bike.', 'By bus.', 'By bike.'], k: ['bus|bike'] },
      { u: 2, q: 'Does he go to school by car or on foot?', a: ['He goes to school by car.', 'He goes to school on foot.', 'By car.', 'On foot.'], k: ['car|foot'] },
      { u: 2, q: 'Does she go to school by train or by MRT?', a: ['She goes to school by train.', 'She goes to school by MRT.', 'By train.', 'By MRT.'], k: ['train|' + MRT] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Are you from Taiwan? Do you go to school by MRT?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 12, q: "He's from Japan. Does he go to school by train?", a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 12, q: "She's from India. How does she go to school?", a: ['She goes to school by ___.', 'She goes to school on foot.', 'By ___.'], k: [BY] },
      { u: 12, q: "I'm from Taiwan. Where are you from?", a: ["I'm from ___.", 'From ___.', '___.'], k: [CTRY] },
      { u: 12, q: 'I go to school by bike. How do you go to school?', a: ['I go to school by ___.', 'I go to school on foot.', 'By ___.', 'On foot.'], k: [BY] }
    ];
    const L2 = [
      // ---- Unit 1 ----
      { u: 1, q: 'Where are you from?', zh: '你來自台灣。', a: ["I'm from Taiwan.", 'From Taiwan.', 'Taiwan.'], k: ['Taiwan'] },
      { u: 1, q: 'Where is he from?', zh: '他來自日本。', a: ["He's from Japan.", 'From Japan.', 'Japan.'], k: ['Japan'] },
      { u: 1, q: 'Where is she from?', zh: '她來自澳洲。', a: ["She's from Australia.", 'From Australia.', 'Australia.'], k: ['Australia'] },
      { u: 1, q: 'Where are they from?', zh: '他們來自西班牙。', a: ["They're from Spain.", 'From Spain.', 'Spain.'], k: ['Spain'] },
      { u: 1, q: 'Where is Amy from?', zh: 'Amy 來自美國。', a: ["She's from the USA.", 'From the USA.', 'The USA.'], k: [USK] },
      { u: 1, q: 'Where is Ben from?', zh: 'Ben 來自英國。', a: ["He's from the UK.", 'From the UK.', 'The UK.'], k: [UKK] },
      { u: 1, q: 'Is he from India?', zh: '對，他來自印度。', a: ['Yes, he is.'], k: ['Yes, he is'] },
      { u: 1, q: 'Is she from Japan?', zh: '不是；她來自英國。', a: ["No, she isn't. She's from the UK.", "No. She's from the UK."], k: ['No', UKK] },
      { u: 1, q: 'Are you from the USA?', zh: '不是；你來自台灣。', a: ["No, I'm not. I'm from Taiwan.", "No. I'm from Taiwan."], k: ['No', 'Taiwan'] },
      { u: 1, q: 'Is Amy from Spain?', zh: '對，Amy 來自西班牙。', a: ['Yes, she is.'], k: ['Yes, she is'] },
      { u: 1, q: 'Is Ben from Australia?', zh: '不是；他來自印度。', a: ["No, he isn't. He's from India.", "No. He's from India."], k: ['No', 'India'] },
      { u: 1, q: 'Are they from Japan?', zh: '對，他們來自日本。', a: ['Yes, they are.'], k: ['Yes, they are'] },
      { u: 1, q: 'Are you from Taiwan or Japan?', zh: '你來自台灣。', a: ["I'm from Taiwan.", 'Taiwan.'], k: ['Taiwan'] },
      { u: 1, q: 'Is she from India or Spain?', zh: '她來自印度。', a: ["She's from India.", 'India.'], k: ['India'] },
      { u: 1, q: 'Where are you and Ben from?', zh: '你們兩個都來自台灣。', a: ["We're from Taiwan.", 'Taiwan.'], k: ['Taiwan'] },
      { u: 1, q: 'Is he from the UK?', zh: '不是；他來自美國。', a: ["No, he isn't. He's from the USA.", "No. He's from the USA."], k: ['No', USK] },
      // ---- Unit 2 ----
      { u: 2, q: 'How do you go to school?', zh: '你搭公車上學。', a: ['I go to school by bus.', 'By bus.'], k: ['bus'] },
      { u: 2, q: 'How does he go to school?', zh: '他走路上學。', a: ['He goes to school on foot.', 'On foot.'], k: ['foot'] },
      { u: 2, q: 'How does she go to school?', zh: '她搭捷運上學。', a: ['She goes to school by MRT.', 'By MRT.'], k: [MRT] },
      { u: 2, q: 'How do you go to school?', zh: '你騎腳踏車上學。', a: ['I go to school by bike.', 'By bike.'], k: ['bike'] },
      { u: 2, q: 'How does Amy go to school?', zh: 'Amy 搭火車上學。', a: ['She goes to school by train.', 'By train.'], k: ['train'] },
      { u: 2, q: 'How does Ben go to school?', zh: 'Ben 坐車上學。', a: ['He goes to school by car.', 'By car.'], k: ['car'] },
      { u: 2, q: 'Do you go to school by bus?', zh: '對，你搭公車上學。', a: ['Yes, I do.'], k: ['Yes, I do'] },
      { u: 2, q: 'Does he go to school by taxi?', zh: '不是；他騎機車上學。', a: ["No, he doesn't. He goes to school by scooter."], k: ["No, he doesn't", 'scooter'] },
      { u: 2, q: 'Does she go to school on foot?', zh: '對，她走路上學。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      { u: 2, q: 'Does Ben go to school by car?', zh: '不是；他搭公車上學。', a: ["No, he doesn't. He goes to school by bus."], k: ["No, he doesn't", 'bus'] },
      { u: 2, q: 'Do they go to school by train?', zh: '對，他們搭火車上學。', a: ['Yes, they do.'], k: ['Yes, they do'] },
      { u: 2, q: 'Do you go to school by MRT?', zh: '不是；你走路上學。', a: ["No, I don't. I go to school on foot."], k: ["No, I don't", 'foot'] },
      { u: 2, q: 'Do you go to school by bus or by bike?', zh: '你騎腳踏車。', a: ['I go to school by bike.', 'By bike.'], k: ['bike'] },
      { u: 2, q: 'Does she go to school by car or on foot?', zh: '她走路。', a: ['She goes to school on foot.', 'On foot.'], k: ['foot'] },
      { u: 2, q: 'How do they go to school?', zh: '他們搭計程車上學。', a: ['They go to school by taxi.', 'By taxi.'], k: ['taxi'] },
      { u: 2, q: 'Does Amy go to school by scooter?', zh: '對，Amy 騎機車上學。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      { u: 2, q: 'Do you and Amy go to school by bike?', zh: '不是，你們都不是騎腳踏車。', a: ["No, we don't."], k: ["No, we don't"] },
      { u: 2, q: 'How do Amy and Ben go to school?', zh: '他們搭捷運上學。', a: ['They go to school by MRT.', 'By MRT.'], k: [MRT] },
      // ---- 兩課混合 ----
      { u: 12, q: "He's from Japan. How does he go to school?", zh: '他搭火車上學。', a: ['He goes to school by train.', 'By train.'], k: ['train'] },
      { u: 12, q: "She's from India. Does she go to school by bus?", zh: '對，她搭公車上學。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      { u: 12, q: "I'm from the USA. Where are you from?", zh: '你來自台灣。', a: ["I'm from Taiwan.", 'Taiwan.'], k: ['Taiwan'] },
      { u: 12, q: 'I go to school by car. How do you go to school?', zh: '你走路上學。', a: ['I go to school on foot.', 'On foot.'], k: ['foot'] },
      { u: 12, q: 'Is Ben from Spain?', zh: '不是；他來自澳洲。', a: ["No, he isn't. He's from Australia.", "No. He's from Australia."], k: ['No', 'Australia'] },
      { u: 12, q: 'Does Amy go to school by train?', zh: '不是；她搭公車上學。', a: ["No, she doesn't. She goes to school by bus."], k: ["No, she doesn't", 'bus'] }
    ];
    const L3 = [
      { u: 1, q: 'Where are you from?', zh: '你來自台灣。說完後，反問考官來自哪裡。', a: ["I'm from Taiwan. Where are you from?"], k: ['Taiwan', 'Where are you from'], f: "I'm from the USA." },
      { u: 1, q: "I'm from Australia.", zh: '換你問考官：他（旁邊那個男生）來自哪裡？', a: ['Where is he from?'], k: ['Where is he', 'from'], f: "He's from Japan." },
      { u: 1, q: "He's from Spain.", zh: '換你問考官：她來自英國嗎？', a: ['Is she from the UK?'], k: ['Is she from', UKK], f: "No, she isn't. She's from India." },
      { u: 1, q: 'Are you from the UK?', zh: '不是；你來自台灣。說完後，反問考官是不是來自英國。', a: ["No, I'm not. I'm from Taiwan. Are you from the UK?"], k: ['No', 'Taiwan', 'Are you from'], f: 'Yes, I am.' },
      { u: 1, q: 'Where is she from?', zh: '她來自日本。說完後，再問考官：他來自哪裡？', a: ["She's from Japan. Where is he from?"], k: ['Japan', 'Where is he from'], f: "He's from Spain." },
      { u: 2, q: 'How do you go to school?', zh: '你搭捷運。說完後，反問考官怎麼去上學。', a: ['I go to school by MRT. How do you go to school?'], k: [MRT, 'How do you go to school'], f: 'I go to school by car.' },
      { u: 2, q: 'I go to school by bus.', zh: '換你問考官：她怎麼去上學？', a: ['How does she go to school?'], k: ['How does she', 'go to school'], f: 'She goes to school on foot.' },
      { u: 2, q: 'She goes to school on foot.', zh: '換你問考官：他騎腳踏車上學嗎？', a: ['Does he go to school by bike?'], k: ['Does he go', 'bike'], f: "No, he doesn't. He goes to school by bus." },
      { u: 2, q: 'Do you go to school by taxi?', zh: '不是；你和 Ben 都走路上學。', a: ["No, I don't. Ben and I go to school on foot.", "No, I don't. We go to school on foot."], k: ["No, I don't", 'foot'] },
      { u: 2, q: 'How does Amy go to school?', zh: 'Amy 搭火車；再說 Ben 搭公車。', a: ['She goes to school by train. Ben goes to school by bus.'], k: ['train', 'Ben', 'bus'] },
      { u: 2, q: 'Does she go to school by car?', zh: '對；再問考官：你也坐車上學嗎？', a: ['Yes, she does. Do you go to school by car?'], k: ['Yes, she does', 'Do you go to school by car'], f: "No, I don't." },
      { u: 2, q: 'Do you go to school by bus or by MRT?', zh: '兩個你都會搭。', a: ['I go to school by bus and by MRT.', 'By bus and by MRT.'], k: ['bus', MRT] },
      { u: 2, q: "I'm in Taiwan.", zh: '換你問考官：你怎麼去上學？', a: ['How do you go to school?'], k: ['How do you', 'go to school'], f: 'I go to school by scooter.' },
      { u: 12, q: 'Is she from Japan?', zh: '不是；她來自印度，再說她搭公車上學。', a: ["No, she isn't. She's from India. She goes to school by bus."], k: ['No', 'India', 'goes to school by bus'] },
      { u: 12, q: 'Where is Ben from?', zh: '他來自美國；再說他坐車上學。', a: ["He's from the USA. He goes to school by car."], k: [USK, 'car'] },
      { u: 12, q: 'Does he go to school by train?', zh: '不是；他騎機車上學，再說他來自西班牙。', a: ["No, he doesn't. He goes to school by scooter. He's from Spain."], k: ["No, he doesn't", 'scooter', 'Spain'] },
      { u: 12, q: 'Are they from Japan?', zh: '對；再說他們搭捷運上學。', a: ['Yes, they are. They go to school by MRT.'], k: ['Yes, they are', MRT] },
      { u: 12, q: 'Is Amy from Australia?', zh: '對；再說她騎腳踏車上學。', a: ['Yes, she is. She goes to school by bike.'], k: ['Yes, she is', 'bike'] },
      { u: 12, q: 'Where are you from? How do you go to school?', zh: '你來自台灣，走路上學。', a: ["I'm from Taiwan. I go to school on foot."], k: ['Taiwan', 'foot'] },
      { u: 12, q: 'Is Ben from the USA?', zh: '不是；他來自英國，再說他搭計程車上學。', a: ["No, he isn't. He's from the UK. He goes to school by taxi."], k: ['No', UKK, 'taxi'] }
    ];
    build({ key: '7-u12', title: '六上 U1–U2 口語對話考試', file: '六上U1-U2', units: ['hanlin-7-u1', 'hanlin-7-u2'], labels: ['U1', 'U2'],
      cls: { [CTRY]: '任一個國家', [BY]: '任一種交通方式（by bus／on foot…）' }, L: [L1, L2, L3],
      scope: "Unit 1 Where Are You From?（Australia、India、Japan、Spain、Taiwan、the UK、the USA；Where are you from? I'm from ___.、Is he/she from ___? Yes, he is. / No, she isn't.）；Unit 2 How Do You Go to School?（by bike／bus／car／MRT／scooter／taxi／train、on foot；How do you go to school? I go to school by ___.、Does he/she go to school by ___?）",
      note: '六上兩課都是依學校公開的課程計畫（翰林 Here We Go 7）整理，還沒拿課本核對；課程計畫沒有列日常用語和對話，所以題目只考單字和句型。' });
  })();

  // ================= 六上 U3–U4（What Do You Do on Weekends? ／ What Time Do You Get Up?；依學校課程計畫整理，待課本核對）=================
  (() => {
    const ACT = 'jogging|baseball|basketball|bike|music|English|Internet|TV', DO = ACT + '|home|homework|shower|bed|lunch|get up|school';
    const TIME = 'one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve';
    const L1 = [
      // ---- Unit 3：休閒活動 ----
      { u: 1, q: 'What do you do on weekends?', a: ['I ___ on weekends.', 'I ___.', '___.'], k: [ACT] },
      { u: 1, q: 'What does he do in his free time?', a: ['He ___ in his free time.', 'He ___.', '___.'], k: [ACT] },
      { u: 1, q: 'What does she do in her free time?', a: ['She ___ in her free time.', 'She ___.', '___.'], k: [ACT] },
      { u: 1, q: 'What do they do on weekends?', a: ['They ___ on weekends.', 'They ___.', '___.'], k: [ACT] },
      { u: 1, q: 'What does Amy do on weekends?', a: ['She ___ on weekends.', 'She ___.', '___.'], k: [ACT] },
      { u: 1, q: 'What do you do in your free time?', a: ['I ___ in my free time.', 'I ___.', '___.'], k: [ACT] },
      { u: 1, q: 'Do you watch TV on weekends?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 1, q: 'Do you play baseball on weekends?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 1, q: 'Do you study English in your free time?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 1, q: 'Does he go jogging on weekends?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 1, q: 'Does she listen to music in her free time?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 1, q: 'Does Ben surf the Internet in his free time?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 1, q: 'Does Amy study English on weekends?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 1, q: 'Do they ride a bike on weekends?', a: Y('they', 'do'), k: YK('they', 'do') },
      { u: 1, q: 'Do you and Ben play basketball on weekends?', a: Y('we', 'do'), k: YK('we', 'do') },
      { u: 1, q: 'Do you watch TV or listen to music on weekends?', a: ['I watch TV.', 'I listen to music.', 'Watch TV.', 'Listen to music.'], k: ['TV|music'] },
      { u: 1, q: 'Does he play baseball or basketball?', a: ['He plays baseball.', 'He plays basketball.', 'Baseball.', 'Basketball.'], k: ['baseball|basketball'] },
      { u: 1, q: 'Does she go jogging or ride a bike?', a: ['She goes jogging.', 'She rides a bike.', 'Go jogging.', 'Ride a bike.'], k: ['jogging|bike'] },
      // ---- Unit 4：作息時間 ----
      { u: 2, q: 'What time do you get up?', a: ['I get up at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 2, q: 'What time do you go to school?', a: ['I go to school at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 2, q: 'What time do you go to bed?', a: ['I go to bed at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 2, q: 'What time does he have lunch?', a: ['He has lunch at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 2, q: 'What time does she go home?', a: ['She goes home at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 2, q: 'What time does Ben take a shower?', a: ['He takes a shower at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 2, q: 'What time does Amy do her homework?', a: ['She does her homework at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 2, q: 'Do you get up at six?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you go to bed at nine?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Do you do your homework at five?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 2, q: 'Does he have lunch at twelve?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Does she go home at four?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 2, q: 'Does Ben take a shower at eight?', a: Y('he', 'does'), k: YK('he', 'does') },
      { u: 2, q: 'Do they go to school at seven thirty?', a: Y('they', 'do'), k: YK('they', 'do') },
      { u: 2, q: 'Do you get up at six or at seven?', a: ['I get up at six.', 'I get up at seven.', 'At six.', 'At seven.'], k: ['six|seven'] },
      { u: 2, q: 'Does she go to bed at nine or at ten?', a: ['She goes to bed at nine.', 'She goes to bed at ten.', 'At nine.', 'At ten.'], k: ['nine|ten'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'What time do you watch TV?', a: ['I watch TV at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 12, q: 'What time does he play basketball?', a: ['He plays basketball at ___.', 'At ___.', '___.'], k: [TIME] },
      { u: 12, q: 'Do you listen to music at nine?', a: Y('I', 'do'), k: YK('I', 'do') },
      { u: 12, q: 'What do you do at four?', a: ['I ___ at four.', 'I ___.', '___.'], k: [DO] },
      { u: 12, q: 'Does Amy watch TV at eight?', a: Y('she', 'does'), k: YK('she', 'does') },
      { u: 12, q: 'What does he do at five?', a: ['He ___ at five.', 'He ___.', '___.'], k: [DO] }
    ];
    const L2 = [
      // ---- Unit 3 ----
      { u: 1, q: 'What do you do on weekends?', zh: '你週末去慢跑。', a: ['I go jogging on weekends.', 'I go jogging.', 'Go jogging.'], k: ['jogging'] },
      { u: 1, q: 'What does he do in his free time?', zh: '他看電視。', a: ['He watches TV in his free time.', 'He watches TV.', 'Watch TV.'], k: ['TV'] },
      { u: 1, q: 'What does she do in her free time?', zh: '她讀英文。', a: ['She studies English in her free time.', 'She studies English.', 'Study English.'], k: ['English'] },
      { u: 1, q: 'What do they do on weekends?', zh: '他們打棒球。', a: ['They play baseball on weekends.', 'They play baseball.', 'Play baseball.'], k: ['baseball'] },
      { u: 1, q: 'What does Amy do on weekends?', zh: 'Amy 騎腳踏車。', a: ['She rides a bike on weekends.', 'She rides a bike.', 'Ride a bike.'], k: ['bike'] },
      { u: 1, q: 'What does Ben do in his free time?', zh: 'Ben 上網。', a: ['He surfs the Internet in his free time.', 'He surfs the Internet.', 'Surf the Internet.'], k: ['Internet'] },
      { u: 1, q: 'What do you do in your free time?', zh: '你聽音樂。', a: ['I listen to music in my free time.', 'I listen to music.', 'Listen to music.'], k: ['music'] },
      { u: 1, q: 'Do you play basketball on weekends?', zh: '對，你週末打籃球。', a: ['Yes, I do.'], k: ['Yes, I do'] },
      { u: 1, q: 'Does he watch TV on weekends?', zh: '不是；他打籃球。', a: ["No, he doesn't. He plays basketball.", "No, he doesn't. He plays basketball on weekends."], k: ["No, he doesn't", 'basketball'] },
      { u: 1, q: 'Does she go jogging on weekends?', zh: '對，她週末去慢跑。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      { u: 1, q: 'Does Ben study English in his free time?', zh: '不是；他上網。', a: ["No, he doesn't. He surfs the Internet."], k: ["No, he doesn't", 'Internet'] },
      { u: 1, q: 'Do they ride a bike on weekends?', zh: '對，他們週末騎腳踏車。', a: ['Yes, they do.'], k: ['Yes, they do'] },
      { u: 1, q: 'Do you watch TV or listen to music?', zh: '你聽音樂。', a: ['I listen to music.', 'Listen to music.'], k: ['music'] },
      { u: 1, q: 'Does he play baseball or basketball?', zh: '他打棒球。', a: ['He plays baseball.', 'Baseball.'], k: ['baseball'] },
      { u: 1, q: 'Do you and Amy go jogging on weekends?', zh: '不是，你們週末不去慢跑。', a: ["No, we don't."], k: ["No, we don't"] },
      { u: 1, q: 'Does Amy surf the Internet on weekends?', zh: '對，Amy 週末上網。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      // ---- Unit 4 ----
      { u: 2, q: 'What time do you get up?', zh: '你六點半起床。', a: ['I get up at six thirty.', 'At six thirty.'], k: ['six thirty'] },
      { u: 2, q: 'What time do you go to school?', zh: '你七點半去上學。', a: ['I go to school at seven thirty.', 'At seven thirty.'], k: ['seven thirty'] },
      { u: 2, q: 'What time does he have lunch?', zh: '他十二點吃午餐。', a: ['He has lunch at twelve.', 'At twelve.'], k: ['twelve'] },
      { u: 2, q: 'What time does she go home?', zh: '她四點回家。', a: ['She goes home at four.', 'At four.'], k: ['four'] },
      { u: 2, q: 'What time does Ben do his homework?', zh: 'Ben 五點寫功課。', a: ['He does his homework at five.', 'At five.'], k: ['five'] },
      { u: 2, q: 'What time does Amy take a shower?', zh: 'Amy 八點洗澡。', a: ['She takes a shower at eight.', 'At eight.'], k: ['eight'] },
      { u: 2, q: 'What time do you go to bed?', zh: '你九點半上床睡覺。', a: ['I go to bed at nine thirty.', 'At nine thirty.'], k: ['nine thirty'] },
      { u: 2, q: 'Do you get up at six?', zh: '對，你六點起床。', a: ['Yes, I do.'], k: ['Yes, I do'] },
      { u: 2, q: 'Does he go to bed at ten?', zh: '不是；他九點上床睡覺。', a: ["No, he doesn't. He goes to bed at nine."], k: ["No, he doesn't", 'nine'] },
      { u: 2, q: 'Does she have lunch at twelve?', zh: '對，她十二點吃午餐。', a: ['Yes, she does.'], k: ['Yes, she does'] },
      { u: 2, q: 'Does Ben go home at five?', zh: '不是；他四點回家。', a: ["No, he doesn't. He goes home at four."], k: ["No, he doesn't", 'four'] },
      { u: 2, q: 'Do they go to school at seven?', zh: '對，他們七點去上學。', a: ['Yes, they do.'], k: ['Yes, they do'] },
      { u: 2, q: 'Do you take a shower at eight or at nine?', zh: '你八點洗澡。', a: ['I take a shower at eight.', 'At eight.'], k: ['eight'] },
      { u: 2, q: 'What time do you have lunch?', zh: '你十二點吃午餐。', a: ['I have lunch at twelve.', 'At twelve.'], k: ['twelve'] },
      { u: 2, q: 'What time does she get up?', zh: '她六點起床。', a: ['She gets up at six.', 'At six.'], k: ['six'] },
      { u: 2, q: 'Do you do your homework at five?', zh: '不是；你六點寫功課。', a: ["No, I don't. I do my homework at six."], k: ["No, I don't", 'six'] },
      { u: 2, q: 'What time does he take a shower?', zh: '他七點洗澡。', a: ['He takes a shower at seven.', 'At seven.'], k: ['seven'] },
      { u: 2, q: 'What time do Amy and Ben go to school?', zh: '他們七點半去上學。', a: ['They go to school at seven thirty.', 'At seven thirty.'], k: ['seven thirty'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'What time do you watch TV?', zh: '你八點看電視。', a: ['I watch TV at eight.', 'At eight.'], k: ['eight'] },
      { u: 12, q: 'What do you do at four?', zh: '你四點回家。', a: ['I go home at four.', 'I go home.', 'Go home.'], k: ['go home'] },
      { u: 12, q: 'What does she do at five?', zh: '她五點寫功課。', a: ['She does her homework at five.', 'She does her homework.', 'Do her homework.'], k: ['homework'] },
      { u: 12, q: 'Does he play basketball at four?', zh: '對，他四點打籃球。', a: ['Yes, he does.'], k: ['Yes, he does'] },
      { u: 12, q: 'What time does Amy go jogging?', zh: 'Amy 六點去慢跑。', a: ['She goes jogging at six.', 'At six.'], k: ['six'] },
      { u: 12, q: 'What does Ben do at nine?', zh: 'Ben 九點上床睡覺。', a: ['He goes to bed at nine.', 'He goes to bed.', 'Go to bed.'], k: ['bed'] }
    ];
    const L3 = [
      { u: 1, q: 'What do you do on weekends?', zh: '你打籃球。說完後，反問考官週末做什麼。', a: ['I play basketball on weekends. What do you do on weekends?'], k: ['basketball', 'What do you do'], f: 'I go jogging on weekends.' },
      { u: 1, q: 'I watch TV on weekends.', zh: '換你問考官：她空閒的時候做什麼？', a: ['What does she do in her free time?'], k: ['What does she do', 'free time'], f: 'She listens to music in her free time.' },
      { u: 1, q: 'He plays baseball.', zh: '換你問考官：他週末去慢跑嗎？', a: ['Does he go jogging on weekends?'], k: ['Does he', 'jogging'], f: "No, he doesn't." },
      { u: 1, q: 'Does she watch TV in her free time?', zh: '不是；她讀英文，也聽音樂。', a: ["No, she doesn't. She studies English. She listens to music, too."], k: ["No, she doesn't", 'English', 'music'] },
      { u: 1, q: 'What does he do in his free time?', zh: '他上網；再說他週末騎腳踏車。', a: ['He surfs the Internet in his free time. He rides a bike on weekends.'], k: ['Internet', 'bike'] },
      { u: 1, q: 'Do you play baseball on weekends?', zh: '對；再問考官：你也打棒球嗎？', a: ['Yes, I do. Do you play baseball?'], k: ['Yes, I do', 'Do you play baseball'], f: 'Yes, I do.' },
      { u: 1, q: 'What do Amy and Ben do on weekends?', zh: 'Amy 看電視，Ben 打籃球。', a: ['Amy watches TV. Ben plays basketball.'], k: ['Amy', 'TV', 'Ben', 'basketball'] },
      { u: 1, q: 'I go jogging at six.', zh: '換你問考官：她週末做什麼？', a: ['What does she do on weekends?'], k: ['What does she do', 'weekends'], f: 'She rides a bike on weekends.' },
      { u: 2, q: 'What time do you get up?', zh: '你六點半起床。說完後，反問考官幾點起床。', a: ['I get up at six thirty. What time do you get up?'], k: ['six thirty', 'What time do you get up'], f: 'I get up at seven.' },
      { u: 2, q: 'I go to bed at ten.', zh: '換你問考官：他幾點寫功課？', a: ['What time does he do his homework?'], k: ['What time does he', 'homework'], f: 'He does his homework at five.' },
      { u: 2, q: 'She has lunch at twelve.', zh: '換你問考官：你幾點回家？', a: ['What time do you go home?'], k: ['What time do you', 'go home'], f: 'I go home at four.' },
      { u: 2, q: 'Does he get up at seven?', zh: '不是；他六點起床，七點去上學。', a: ["No, he doesn't. He gets up at six. He goes to school at seven."], k: ["No, he doesn't", 'six', 'seven'] },
      { u: 2, q: 'What time does Amy take a shower?', zh: '八點；再說她九點半上床睡覺。', a: ['She takes a shower at eight. She goes to bed at nine thirty.'], k: ['eight', 'nine thirty'] },
      { u: 2, q: 'Do you do your homework at four?', zh: '不是；你四點回家，五點寫功課。', a: ["No, I don't. I go home at four. I do my homework at five."], k: ["No, I don't", 'go home', 'five'] },
      { u: 2, q: 'What time do you go to school?', zh: '七點半；再問考官幾點去上學。', a: ['I go to school at seven thirty. What time do you go to school?'], k: ['seven thirty', 'What time do you go to school'], f: 'I go to school at seven.' },
      { u: 2, q: 'What time do you have lunch?', zh: '十二點；再問考官：她幾點吃午餐？', a: ['I have lunch at twelve. What time does she have lunch?'], k: ['twelve', 'What time does she have lunch'], f: 'She has lunch at twelve thirty.' },
      { u: 12, q: 'What do you do at five?', zh: '你五點寫功課，八點看電視。', a: ['I do my homework at five. I watch TV at eight.'], k: ['homework', 'TV', 'eight'] },
      { u: 12, q: 'What time does he play basketball?', zh: '四點；再說他週末也打籃球。', a: ['He plays basketball at four. He plays basketball on weekends, too.'], k: ['four', 'weekends'] },
      { u: 12, q: 'Does Ben watch TV at nine?', zh: '不是；他九點上床睡覺。', a: ["No, he doesn't. He goes to bed at nine."], k: ["No, he doesn't", 'bed'] },
      { u: 12, q: 'What does she do in her free time?', zh: '她聽音樂；再說她八點洗澡。', a: ['She listens to music in her free time. She takes a shower at eight.'], k: ['music', 'shower', 'eight'] }
    ];
    build({ key: '7-u34', title: '六上 U3–U4 口語對話考試', file: '六上U3-U4', units: ['hanlin-7-u3', 'hanlin-7-u4'], labels: ['U3', 'U4'],
      cls: { [ACT]: '任一種休閒活動', [DO]: '任一種活動或作息', [TIME]: '任一個時間（點鐘）' }, L: [L1, L2, L3],
      scope: 'Unit 3 What Do You Do on Weekends?（go jogging、play baseball／basketball、ride a bike、listen to music、study English、surf the Internet、watch TV；What do you do on weekends?、What does he/she do in his/her free time?）；Unit 4 What Time Do You Get Up?（get up、go to school、have lunch、go home、do my homework、take a shower、go to bed；What time do you ___? I ___ at ___.、What time does he/she ___?）',
      note: '六上兩課都是依學校公開的課程計畫（翰林 Here We Go 7）整理，還沒拿課本核對；課程計畫沒有列日常用語和對話，所以題目只考單字和句型。' });
  })();

  // ================= 六下 U1–U2（Where Were You Yesterday? ／ What Did You Do Last Night?；依學校課程計畫整理，待課本核對）=================
  (() => {
    const PL = 'home|school|mall|theater|restaurant|zoo', ACT = 'cleaned|listened|played|walked|watched|visited';
    const WAS = (who) => [`Yes, ${who} was.`, `No, ${who} wasn't.`], WASK = (who) => [`Yes, ${who} was|No, ${who} wasn't`];
    const WERE = (who) => [`Yes, ${who} were.`, `No, ${who} weren't.`], WEREK = (who) => [`Yes, ${who} were|No, ${who} weren't`];
    const DID = (who) => [`Yes, ${who} did.`, `No, ${who} didn't.`], DIDK = (who) => [`Yes, ${who} did|No, ${who} didn't`];
    const L1 = [
      // ---- Unit 1：昨天在哪裡 ----
      { u: 1, q: 'Where were you yesterday?', a: ['I was ___ yesterday.', 'At ___.', '___.'], k: [PL] },
      { u: 1, q: 'Where was he yesterday?', a: ['He was ___ yesterday.', 'At ___.', '___.'], k: [PL] },
      { u: 1, q: 'Where was she yesterday?', a: ['She was ___ yesterday.', 'At ___.', '___.'], k: [PL] },
      { u: 1, q: 'Where were they yesterday?', a: ['They were ___ yesterday.', 'At ___.', '___.'], k: [PL] },
      { u: 1, q: 'Where was Amy yesterday?', a: ['She was ___ yesterday.', 'At ___.', '___.'], k: [PL] },
      { u: 1, q: 'Where were you and Ben yesterday?', a: ['We were ___ yesterday.', 'At ___.', '___.'], k: [PL] },
      { u: 1, q: 'Where were Amy and Ben yesterday?', a: ['They were ___ yesterday.', 'At ___.', '___.'], k: [PL] },
      { u: 1, q: 'Were you at school yesterday?', a: WAS('I'), k: WASK('I') },
      { u: 1, q: 'Were you at home yesterday?', a: WAS('I'), k: WASK('I') },
      { u: 1, q: 'Was he at the zoo yesterday?', a: WAS('he'), k: WASK('he') },
      { u: 1, q: 'Was she at the mall yesterday?', a: WAS('she'), k: WASK('she') },
      { u: 1, q: 'Was Ben at the restaurant yesterday?', a: WAS('he'), k: WASK('he') },
      { u: 1, q: 'Was Amy at home yesterday?', a: WAS('she'), k: WASK('she') },
      { u: 1, q: 'Were they at the movie theater yesterday?', a: WERE('they'), k: WEREK('they') },
      { u: 1, q: 'Were you and Amy at the zoo yesterday?', a: WERE('we'), k: WEREK('we') },
      { u: 1, q: 'Were you at home or at school yesterday?', a: ['I was at home.', 'I was at school.', 'At home.', 'At school.'], k: ['home|school'] },
      { u: 1, q: 'Was he at the mall or at the zoo?', a: ['He was at the mall.', 'He was at the zoo.', 'At the mall.', 'At the zoo.'], k: ['mall|zoo'] },
      { u: 1, q: 'Was she at the restaurant or at the movie theater?', a: ['She was at the restaurant.', 'She was at the movie theater.', 'At the restaurant.', 'At the movie theater.'], k: ['restaurant|theater'] },
      // ---- Unit 2：昨晚做了什麼 ----
      { u: 2, q: 'What did you do last night?', a: ['I ___ last night.', 'I ___.'], k: [ACT] },
      { u: 2, q: 'What did he do last night?', a: ['He ___ last night.', 'He ___.'], k: [ACT] },
      { u: 2, q: 'What did she do last night?', a: ['She ___ last night.', 'She ___.'], k: [ACT] },
      { u: 2, q: 'What did they do last night?', a: ['They ___ last night.', 'They ___.'], k: [ACT] },
      { u: 2, q: 'What did Ben do last night?', a: ['He ___ last night.', 'He ___.'], k: [ACT] },
      { u: 2, q: 'What did Amy do last night?', a: ['She ___ last night.', 'She ___.'], k: [ACT] },
      { u: 2, q: 'Did you play basketball last night?', a: DID('I'), k: DIDK('I') },
      { u: 2, q: 'Did you watch videos last night?', a: DID('I'), k: DIDK('I') },
      { u: 2, q: 'Did you clean your room last night?', a: DID('I'), k: DIDK('I') },
      { u: 2, q: 'Did he walk the dog last night?', a: DID('he'), k: DIDK('he') },
      { u: 2, q: 'Did she listen to music last night?', a: DID('she'), k: DIDK('she') },
      { u: 2, q: 'Did Amy visit a friend last night?', a: DID('she'), k: DIDK('she') },
      { u: 2, q: 'Did they play basketball last night?', a: DID('they'), k: DIDK('they') },
      { u: 2, q: 'Did you and Ben watch videos last night?', a: DID('we'), k: DIDK('we') },
      { u: 2, q: 'Did you walk the dog or clean your room last night?', a: ['I walked the dog.', 'I cleaned my room.'], k: ['walked|cleaned'] },
      { u: 2, q: 'Did he play basketball or watch videos?', a: ['He played basketball.', 'He watched videos.'], k: ['played|watched'] },
      { u: 2, q: 'Did she listen to music or visit a friend?', a: ['She listened to music.', 'She visited a friend.'], k: ['listened|visited'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Where were you last night?', a: ['I was ___ last night.', 'At ___.', '___.'], k: [PL] },
      { u: 12, q: 'What did you do yesterday?', a: ['I ___ yesterday.', 'I ___.'], k: [ACT] },
      { u: 12, q: 'Were you at home last night?', a: WAS('I'), k: WASK('I') },
      { u: 12, q: 'Did you visit a friend yesterday?', a: DID('I'), k: DIDK('I') },
      { u: 12, q: 'Was he at school yesterday? Did he play basketball?', a: DID('he'), k: DIDK('he') }
    ];
    const L2 = [
      // ---- Unit 1 ----
      { u: 1, q: 'Where were you yesterday?', zh: '你昨天在動物園。', a: ['I was at the zoo yesterday.', 'At the zoo.'], k: ['zoo'] },
      { u: 1, q: 'Where was he yesterday?', zh: '他昨天在購物中心。', a: ['He was at the mall yesterday.', 'At the mall.'], k: ['mall'] },
      { u: 1, q: 'Where was she yesterday?', zh: '她昨天在餐廳。', a: ['She was at the restaurant yesterday.', 'At the restaurant.'], k: ['restaurant'] },
      { u: 1, q: 'Where were they yesterday?', zh: '他們昨天在電影院。', a: ['They were at the movie theater yesterday.', 'At the movie theater.'], k: ['theater'] },
      { u: 1, q: 'Where was Amy yesterday?', zh: 'Amy 昨天在家。', a: ['She was at home yesterday.', 'At home.'], k: ['home'] },
      { u: 1, q: 'Where was Ben yesterday?', zh: 'Ben 昨天在學校。', a: ['He was at school yesterday.', 'At school.'], k: ['school'] },
      { u: 1, q: 'Were you at school yesterday?', zh: '對，你昨天在學校。', a: ['Yes, I was.'], k: ['Yes, I was'] },
      { u: 1, q: 'Were you at the mall yesterday?', zh: '不是；你在家。', a: ["No, I wasn't. I was at home.", 'No. I was at home.'], k: ['No', 'home'] },
      { u: 1, q: 'Was he at the zoo yesterday?', zh: '對，他在動物園。', a: ['Yes, he was.'], k: ['Yes, he was'] },
      { u: 1, q: 'Was she at home yesterday?', zh: '不是；她在餐廳。', a: ["No, she wasn't. She was at the restaurant.", 'No. She was at the restaurant.'], k: ['No', 'restaurant'] },
      { u: 1, q: 'Were they at the movie theater yesterday?', zh: '對，他們在電影院。', a: ['Yes, they were.'], k: ['Yes, they were'] },
      { u: 1, q: 'Was Ben at the restaurant yesterday?', zh: '不是；他在學校。', a: ["No, he wasn't. He was at school.", 'No. He was at school.'], k: ['No', 'school'] },
      { u: 1, q: 'Were you at home or at school yesterday?', zh: '你在學校。', a: ['I was at school.', 'At school.'], k: ['school'] },
      { u: 1, q: 'Was she at the mall or at the zoo?', zh: '她在動物園。', a: ['She was at the zoo.', 'At the zoo.'], k: ['zoo'] },
      { u: 1, q: 'Where were you and Ben yesterday?', zh: '你們兩個在電影院。', a: ['We were at the movie theater.', 'At the movie theater.'], k: ['theater'] },
      { u: 1, q: 'Were you and Amy at the mall yesterday?', zh: '不是，你們不在購物中心。', a: ["No, we weren't."], k: ["No, we weren't"] },
      // ---- Unit 2 ----
      { u: 2, q: 'What did you do last night?', zh: '你看了影片。', a: ['I watched videos last night.', 'I watched videos.'], k: ['watched videos'] },
      { u: 2, q: 'What did he do last night?', zh: '他遛了狗。', a: ['He walked the dog last night.', 'He walked the dog.'], k: ['walked the dog'] },
      { u: 2, q: 'What did she do last night?', zh: '她打掃了房間。', a: ['She cleaned her room last night.', 'She cleaned her room.'], k: ['cleaned'] },
      { u: 2, q: 'What did they do last night?', zh: '他們打了籃球。', a: ['They played basketball last night.', 'They played basketball.'], k: ['played basketball'] },
      { u: 2, q: 'What did Amy do last night?', zh: 'Amy 拜訪了朋友。', a: ['She visited a friend last night.', 'She visited a friend.'], k: ['visited'] },
      { u: 2, q: 'What did Ben do last night?', zh: 'Ben 聽了音樂。', a: ['He listened to music last night.', 'He listened to music.'], k: ['listened to music'] },
      { u: 2, q: 'Did you play basketball last night?', zh: '有，你打了籃球。', a: ['Yes, I did.'], k: ['Yes, I did'] },
      { u: 2, q: 'Did you watch videos last night?', zh: '沒有；你遛了狗。', a: ["No, I didn't. I walked the dog last night.", "No, I didn't. I walked the dog."], k: ["No, I didn't", 'walked the dog'] },
      { u: 2, q: 'Did he clean his room last night?', zh: '有，他打掃了房間。', a: ['Yes, he did.'], k: ['Yes, he did'] },
      { u: 2, q: 'Did she visit a friend last night?', zh: '沒有；她聽了音樂。', a: ["No, she didn't. She listened to music."], k: ["No, she didn't", 'listened'] },
      { u: 2, q: 'Did they walk the dog last night?', zh: '有，他們遛了狗。', a: ['Yes, they did.'], k: ['Yes, they did'] },
      { u: 2, q: 'Did Ben listen to music last night?', zh: '沒有；他打了籃球。', a: ["No, he didn't. He played basketball."], k: ["No, he didn't", 'played basketball'] },
      { u: 2, q: 'Did you walk the dog or clean your room?', zh: '你打掃了房間。', a: ['I cleaned my room.', 'Cleaned my room.'], k: ['cleaned'] },
      { u: 2, q: 'Did he play basketball or watch videos?', zh: '他看了影片。', a: ['He watched videos.'], k: ['watched'] },
      { u: 2, q: 'What did you do yesterday?', zh: '你拜訪了朋友。', a: ['I visited a friend yesterday.', 'I visited a friend.'], k: ['visited'] },
      { u: 2, q: 'Did you and Ben watch videos last night?', zh: '沒有，你們沒看影片。', a: ["No, we didn't."], k: ["No, we didn't"] },
      { u: 2, q: 'Did Amy clean her room last night?', zh: '有，Amy 打掃了房間。', a: ['Yes, she did.'], k: ['Yes, she did'] },
      { u: 2, q: 'What did you do last night?', zh: '你聽了音樂。', a: ['I listened to music last night.', 'I listened to music.'], k: ['listened'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Where were you last night?', zh: '你昨晚在家。', a: ['I was at home last night.', 'At home.'], k: ['home'] },
      { u: 12, q: 'Were you at the zoo yesterday?', zh: '不是；你在家。', a: ["No, I wasn't. I was at home."], k: ['No', 'home'] },
      { u: 12, q: 'Was he at school yesterday?', zh: '對，他在學校。', a: ['Yes, he was.'], k: ['Yes, he was'] },
      { u: 12, q: 'Did you visit a friend yesterday?', zh: '有，你拜訪了朋友。', a: ['Yes, I did.'], k: ['Yes, I did'] },
      { u: 12, q: 'Where was she last night?', zh: '她昨晚在電影院。', a: ['She was at the movie theater last night.', 'At the movie theater.'], k: ['theater'] },
      { u: 12, q: 'What did they do yesterday?', zh: '他們遛了狗。', a: ['They walked the dog yesterday.', 'They walked the dog.'], k: ['walked'] }
    ];
    const L3 = [
      { u: 1, q: 'Where were you yesterday?', zh: '你在購物中心。說完後，反問考官昨天在哪裡。', a: ['I was at the mall yesterday. Where were you yesterday?'], k: ['mall', 'Where were you'], f: 'I was at home.' },
      { u: 1, q: 'I was at school yesterday.', zh: '換你問考官：她昨天在哪裡？', a: ['Where was she yesterday?'], k: ['Where was she', 'yesterday'], f: 'She was at the zoo.' },
      { u: 1, q: 'He was at home.', zh: '換你問考官：他昨天在電影院嗎？', a: ['Was he at the movie theater yesterday?'], k: ['Was he', 'theater'], f: "No, he wasn't." },
      { u: 1, q: 'Was she at the restaurant yesterday?', zh: '對；再問考官：你也在餐廳嗎？', a: ['Yes, she was. Were you at the restaurant, too?'], k: ['Yes, she was', 'Were you'], f: "No, I wasn't." },
      { u: 1, q: 'Where were Amy and Ben yesterday?', zh: 'Amy 在購物中心，Ben 在學校。', a: ['Amy was at the mall. Ben was at school.'], k: ['Amy', 'mall', 'Ben', 'school'] },
      { u: 1, q: 'Was Ben at home last night?', zh: '不是；他在餐廳。說完後，問考官昨晚在哪裡。', a: ["No, he wasn't. He was at the restaurant. Where were you last night?"], k: ['No', 'restaurant', 'Where were you'], f: 'I was at home.' },
      { u: 2, q: 'What did you do last night?', zh: '你看了影片。說完後，反問考官昨晚做了什麼。', a: ['I watched videos last night. What did you do last night?'], k: ['watched', 'What did you do'], f: 'I listened to music.' },
      { u: 2, q: 'I played basketball last night.', zh: '換你問考官：他昨晚遛狗了嗎？', a: ['Did he walk the dog last night?'], k: ['Did he', 'walk the dog'], f: 'Yes, he did.' },
      { u: 2, q: 'She cleaned her room.', zh: '換你問考官：你昨晚做了什麼？', a: ['What did you do last night?'], k: ['What did you do', 'last night'], f: 'I visited a friend.' },
      { u: 2, q: 'Did you play basketball last night?', zh: '沒有；你聽了音樂，也看了影片。', a: ["No, I didn't. I listened to music. I watched videos, too."], k: ["No, I didn't", 'listened', 'watched'] },
      { u: 2, q: 'Did she walk the dog last night?', zh: '有；她也打掃了房間。', a: ['Yes, she did. She cleaned her room, too.'], k: ['Yes, she did', 'cleaned'] },
      { u: 2, q: 'What did Amy and Ben do last night?', zh: 'Amy 拜訪了朋友，Ben 打了籃球。', a: ['Amy visited a friend. Ben played basketball.'], k: ['visited', 'played'] },
      { u: 2, q: 'I watched videos.', zh: '換你問考官：你昨晚聽音樂了嗎？', a: ['Did you listen to music last night?'], k: ['Did you', 'listen to music'], f: 'Yes, I did.' },
      { u: 2, q: 'What did you do yesterday?', zh: '你遛了狗，也打掃了房間。', a: ['I walked the dog and cleaned my room.', 'I walked the dog. I cleaned my room.'], k: ['walked', 'cleaned'] },
      { u: 12, q: 'Were you at the zoo yesterday?', zh: '不是；你在家，你打掃了房間。', a: ["No, I wasn't. I was at home. I cleaned my room."], k: ['No', 'home', 'cleaned'] },
      { u: 12, q: 'Where were you last night?', zh: '你在家；再說你看了影片。', a: ['I was at home. I watched videos.'], k: ['home', 'watched'] },
      { u: 12, q: 'Were you at the mall yesterday?', zh: '對；再說你拜訪了朋友。', a: ['Yes, I was. I visited a friend.'], k: ['Yes, I was', 'visited'] },
      { u: 12, q: 'What did he do yesterday?', zh: '他在學校打了籃球。', a: ['He played basketball at school.'], k: ['played', 'school'] },
      { u: 12, q: 'Did they watch videos at home?', zh: '沒有；他們在電影院。', a: ["No, they didn't. They were at the movie theater."], k: ["No, they didn't", 'theater'] },
      { u: 12, q: 'Did you visit a friend yesterday?', zh: '有；你們在購物中心。', a: ['Yes, I did. We were at the mall.'], k: ['Yes, I did', 'mall'] }
    ];
    build({ key: '8-u12', title: '六下 U1–U2 口語對話考試', file: '六下U1-U2', units: ['hanlin-8-u1', 'hanlin-8-u2'], labels: ['U1', 'U2'],
      cls: { [PL]: '任一個地點（at home／at the mall…）', [ACT]: '任一個做過的事（過去式：played、watched…）' }, L: [L1, L2, L3],
      scope: "Unit 1 Where Were You Yesterday?（at home、at school、at the mall、at the movie theater、at the restaurant、at the zoo；Where were you yesterday? I was ___ yesterday.、Were you at ___? Yes, I was. / No, I wasn't.）；Unit 2 What Did You Do Last Night?（cleaned my room、listened to music、played basketball、walked the dog、watched videos、visited a friend；What did you do last night?、Did you ___ last night? Yes, I did. / No, I didn't.）",
      note: '六下兩課都是依學校公開的課程計畫（翰林 Here We Go 8）整理，還沒拿課本核對；課程計畫沒有列日常用語和對話，所以題目只考單字和句型。' });
  })();

  // ================= 六下 U3–U4（How Much Is the T-shirt? ／ What's Your Favorite Season?；依學校課程計畫整理，待課本核對）=================
  (() => {
    // 價錢：說出任一個數字就算（辨識常把 three hundred 寫成 300，數字照收）
    const PRICE = 'hundred|ten|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|100|200|300|400|500|600|700|800|900|1000';
    const SEASON = 'spring|summer|fall|autumn|winter';
    const IT = ['Yes, it is.', "No, it isn't."], ITK = ["Yes, it is|No, it isn't"], THEY = ['Yes, they are.', "No, they aren't."], THEYK = ["Yes, they are|No, they aren't"];
    const n = (w, d) => w + '|' + d;   // 數字＋阿拉伯數字
    const L1 = [
      // ---- Unit 3：衣物、How much …? ----
      { u: 1, q: 'How much is the T-shirt?', a: ["It's ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much is the coat?', a: ["It's ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much is the dress?', a: ["It's ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much is the hat?', a: ["It's ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much is the jacket?', a: ["It's ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much is the skirt?', a: ["It's ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much are the pants?', a: ["They're ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much are the jeans?', a: ["They're ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much are the shorts?', a: ["They're ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much is it?', a: ["It's ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'How much are they?', a: ["They're ___ dollars.", '___ dollars.'], k: [PRICE] },
      { u: 1, q: 'Is the T-shirt ten dollars?', a: IT, k: ITK },
      { u: 1, q: 'Is the hat fifty dollars?', a: IT, k: ITK },
      { u: 1, q: 'Is the jacket five hundred dollars?', a: IT, k: ITK },
      { u: 1, q: 'Is the T-shirt one hundred dollars?', a: IT, k: ITK },
      { u: 1, q: 'Are the jeans two hundred dollars?', a: THEY, k: THEYK },
      { u: 1, q: 'Are the shorts one hundred dollars?', a: THEY, k: THEYK },
      { u: 1, q: 'Are the pants three hundred dollars?', a: THEY, k: THEYK },
      { u: 1, q: 'Is the dress three hundred or five hundred dollars?', a: ["It's three hundred dollars.", "It's five hundred dollars.", 'Three hundred dollars.', 'Five hundred dollars.'], k: ['three hundred|five hundred|300|500'] },
      { u: 1, q: 'Is the skirt ten or fifty dollars?', a: ["It's ten dollars.", "It's fifty dollars.", 'Ten dollars.', 'Fifty dollars.'], k: ['ten|fifty|10|50'] },
      // ---- Unit 4：季節、天氣 ----
      { u: 2, q: "What's your favorite season?", a: ['My favorite season is ___.', '___.'], k: [SEASON] },
      { u: 2, q: "What's his favorite season?", a: ['His favorite season is ___.', '___.'], k: [SEASON] },
      { u: 2, q: "What's her favorite season?", a: ['Her favorite season is ___.', '___.'], k: [SEASON] },
      { u: 2, q: "What's Amy's favorite season?", a: ['Her favorite season is ___.', '___.'], k: [SEASON] },
      { u: 2, q: "What's Ben's favorite season?", a: ['His favorite season is ___.', '___.'], k: [SEASON] },
      { u: 2, q: 'Is it cold in winter?', a: IT, k: ITK },
      { u: 2, q: 'Is it hot in summer?', a: IT, k: ITK },
      { u: 2, q: 'Is it cool in fall?', a: IT, k: ITK },
      { u: 2, q: 'Is it snowy in winter?', a: IT, k: ITK },
      { u: 2, q: 'Is it foggy in spring?', a: IT, k: ITK },
      { u: 2, q: 'Is it dry in fall?', a: IT, k: ITK },
      { u: 2, q: 'Is it wet in spring?', a: IT, k: ITK },
      { u: 2, q: 'Is your favorite season spring or fall?', a: ['My favorite season is spring.', 'My favorite season is fall.', 'Spring.', 'Fall.'], k: ['spring|fall|autumn'] },
      { u: 2, q: 'Is his favorite season summer or winter?', a: ['His favorite season is summer.', 'His favorite season is winter.', 'Summer.', 'Winter.'], k: ['summer|winter'] },
      { u: 2, q: 'Is it hot or cold in summer?', a: ["It's hot.", "It's cold.", 'Hot.', 'Cold.'], k: ['hot|cold'] },
      { u: 2, q: 'Is it dry or wet in fall?', a: ["It's dry.", "It's wet.", 'Dry.', 'Wet.'], k: ['dry|wet'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Is the jacket for fall?', a: IT, k: ITK },
      { u: 12, q: 'Are the shorts for summer?', a: THEY, k: THEYK },
      { u: 12, q: 'Is the coat for winter?', a: IT, k: ITK },
      { u: 12, q: 'Is the dress for spring?', a: IT, k: ITK }
    ];
    const L2 = [
      // ---- Unit 3 ----
      { u: 1, q: 'How much is the T-shirt?', zh: '標價：十元。', a: ["It's ten dollars.", 'Ten dollars.'], k: [n('ten', '10')] },
      { u: 1, q: 'How much is the coat?', zh: '標價：五百元。', a: ["It's five hundred dollars.", 'Five hundred dollars.'], k: [n('five hundred', '500')] },
      { u: 1, q: 'How much is the dress?', zh: '標價：三百元。', a: ["It's three hundred dollars.", 'Three hundred dollars.'], k: [n('three hundred', '300')] },
      { u: 1, q: 'How much is the hat?', zh: '標價：五十元。', a: ["It's fifty dollars.", 'Fifty dollars.'], k: [n('fifty', '50')] },
      { u: 1, q: 'How much is the jacket?', zh: '標價：兩百元。', a: ["It's two hundred dollars.", 'Two hundred dollars.'], k: [n('two hundred', '200')] },
      { u: 1, q: 'How much is the skirt?', zh: '標價：一百元。', a: ["It's one hundred dollars.", 'One hundred dollars.'], k: [n('one hundred', '100')] },
      { u: 1, q: 'How much are the pants?', zh: '標價：一百元。', a: ["They're one hundred dollars.", 'One hundred dollars.'], k: [n('one hundred', '100')] },
      { u: 1, q: 'How much are the jeans?', zh: '標價：三百元。', a: ["They're three hundred dollars.", 'Three hundred dollars.'], k: [n('three hundred', '300')] },
      { u: 1, q: 'How much are the shorts?', zh: '標價：五十元。', a: ["They're fifty dollars.", 'Fifty dollars.'], k: [n('fifty', '50')] },
      { u: 1, q: 'Is the T-shirt fifty dollars?', zh: '不是，標價十元。', a: ["No, it isn't. It's ten dollars.", 'No. Ten dollars.'], k: ['No', n('ten', '10')] },
      { u: 1, q: 'Is the hat fifty dollars?', zh: '對，五十元。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 1, q: 'Are the jeans two hundred dollars?', zh: '不是，標價三百元。', a: ["No, they aren't. They're three hundred dollars.", 'No. Three hundred dollars.'], k: ['No', n('three hundred', '300')] },
      { u: 1, q: 'Are the shorts fifty dollars?', zh: '對，五十元。', a: ['Yes, they are.'], k: ['Yes, they are'] },
      { u: 1, q: 'Is the dress three hundred or five hundred dollars?', zh: '五百元。', a: ["It's five hundred dollars.", 'Five hundred dollars.'], k: [n('five hundred', '500')] },
      { u: 1, q: 'How much is it?', zh: '（指著帽子）標價十元。', a: ["It's ten dollars.", 'Ten dollars.'], k: [n('ten', '10')] },
      { u: 1, q: 'How much are they?', zh: '（指著長褲）標價兩百元。', a: ["They're two hundred dollars.", 'Two hundred dollars.'], k: [n('two hundred', '200')] },
      { u: 1, q: 'Is the jacket five hundred dollars?', zh: '不是，標價兩百元。', a: ["No, it isn't. It's two hundred dollars.", 'No. Two hundred dollars.'], k: ['No', n('two hundred', '200')] },
      { u: 1, q: 'Is the coat one hundred dollars?', zh: '對，一百元。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      // ---- Unit 4 ----
      { u: 2, q: "What's your favorite season?", zh: '你最喜歡秋天。', a: ['My favorite season is fall.', 'Fall.'], k: ['fall|autumn'] },
      { u: 2, q: "What's his favorite season?", zh: '他最喜歡冬天。', a: ['His favorite season is winter.', 'Winter.'], k: ['winter'] },
      { u: 2, q: "What's her favorite season?", zh: '她最喜歡春天。', a: ['Her favorite season is spring.', 'Spring.'], k: ['spring'] },
      { u: 2, q: "What's Amy's favorite season?", zh: 'Amy 最喜歡夏天。', a: ['Her favorite season is summer.', 'Summer.'], k: ['summer'] },
      { u: 2, q: "What's Ben's favorite season?", zh: 'Ben 最喜歡冬天。', a: ['His favorite season is winter.', 'Winter.'], k: ['winter'] },
      { u: 2, q: 'Is it cold in winter?', zh: '對，冬天很冷。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 2, q: 'Is it hot in fall?', zh: '不是；秋天涼爽又乾燥。', a: ["No, it isn't. It's cool and dry in fall.", "No. It's cool and dry."], k: ['No', 'cool', 'dry'] },
      { u: 2, q: 'Is it snowy in summer?', zh: '不是；夏天又熱又潮濕。', a: ["No, it isn't. It's hot and wet in summer.", "No. It's hot and wet."], k: ['No', 'hot', 'wet'] },
      { u: 2, q: 'Is it foggy in spring?', zh: '對，春天會起霧。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 2, q: 'Is your favorite season spring or fall?', zh: '你最喜歡秋天。', a: ['My favorite season is fall.', 'Fall.'], k: ['fall|autumn'] },
      { u: 2, q: 'Is it hot or cold in summer?', zh: '夏天很熱。', a: ["It's hot.", "It's hot in summer.", 'Hot.'], k: ['hot'] },
      { u: 2, q: 'Is it dry or wet in fall?', zh: '秋天很乾燥。', a: ["It's dry.", "It's dry in fall.", 'Dry.'], k: ['dry'] },
      { u: 2, q: 'Is it cool in fall?', zh: '對，秋天很涼爽。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 2, q: 'Is it wet in winter?', zh: '不是；冬天寒冷又下雪。', a: ["No, it isn't. It's cold and snowy in winter.", "No. It's cold and snowy."], k: ['No', 'cold', 'snowy'] },
      { u: 2, q: 'Is his favorite season summer?', zh: '不是；他最喜歡春天。', a: ["No, it isn't. His favorite season is spring.", 'No. Spring.'], k: ['No', 'spring'] },
      { u: 2, q: 'Is her favorite season winter?', zh: '對，她最喜歡冬天。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      // ---- 兩課混合 ----
      { u: 12, q: 'Are the shorts for summer?', zh: '對，短褲是夏天穿的。', a: ['Yes, they are.'], k: ['Yes, they are'] },
      { u: 12, q: 'Is the coat for winter?', zh: '對，外套是冬天穿的。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 12, q: "How much is the jacket? It's for fall.", zh: '標價三百元。', a: ["It's three hundred dollars.", 'Three hundred dollars.'], k: [n('three hundred', '300')] },
      { u: 12, q: 'How much are the jeans? They are for winter.', zh: '標價兩百元。', a: ["They're two hundred dollars.", 'Two hundred dollars.'], k: [n('two hundred', '200')] },
      { u: 12, q: 'Is the hat for summer?', zh: '對，帽子是夏天戴的。', a: ['Yes, it is.'], k: ['Yes, it is'] },
      { u: 12, q: 'Is the dress for spring?', zh: '不是；洋裝是夏天穿的。', a: ["No, it isn't. It's for summer.", 'No. For summer.'], k: ['No', 'summer'] }
    ];
    const L3 = [
      { u: 1, q: 'How much is the T-shirt?', zh: '十元；再問考官：長褲多少錢？', a: ["It's ten dollars. How much are the pants?"], k: [n('ten', '10'), 'How much are the pants'], f: "They're one hundred dollars." },
      { u: 1, q: 'The hat is fifty dollars.', zh: '換你問考官：這件夾克多少錢？', a: ['How much is the jacket?'], k: ['How much is', 'jacket'], f: "It's two hundred dollars." },
      { u: 1, q: 'The coat is five hundred dollars.', zh: '換你問考官：這件短褲多少錢？', a: ['How much are the shorts?'], k: ['How much are', 'shorts'], f: "They're fifty dollars." },
      { u: 1, q: 'Is the dress one hundred dollars?', zh: '不是，三百元；再問考官：裙子多少錢？', a: ["No, it isn't. It's three hundred dollars. How much is the skirt?"], k: ['No', n('three hundred', '300'), 'How much is the skirt'], f: "It's one hundred dollars." },
      { u: 1, q: 'Are the jeans three hundred dollars?', zh: '對；再說 T 恤十元。', a: ['Yes, they are. The T-shirt is ten dollars.'], k: ['Yes, they are', n('ten', '10')] },
      { u: 1, q: 'How much are the pants?', zh: '長褲一百元；再說短褲五十元。', a: ["They're one hundred dollars. The shorts are fifty dollars."], k: [n('one hundred', '100'), 'shorts', n('fifty', '50')] },
      { u: 1, q: "It's hot in summer.", zh: '換你問考官：這件 T 恤多少錢？', a: ['How much is the T-shirt?'], k: ['How much is', 'T-shirt'], f: "It's ten dollars." },
      { u: 2, q: "What's your favorite season?", zh: '秋天；說完後，反問考官最喜歡哪個季節。', a: ["My favorite season is fall. What's your favorite season?"], k: ['fall|autumn', "What's your favorite season"], f: 'My favorite season is spring.' },
      { u: 2, q: 'My favorite season is winter.', zh: '換你問考官：她最喜歡哪個季節？', a: ["What's her favorite season?"], k: ["What's her", 'season'], f: 'Her favorite season is summer.' },
      { u: 2, q: "It's cold in winter.", zh: '換你問考官：秋天乾燥嗎？', a: ['Is it dry in fall?'], k: ['Is it dry', 'fall|autumn'], f: 'Yes, it is.' },
      { u: 2, q: "What's your favorite season?", zh: '你最喜歡夏天；再說夏天又熱又潮濕。', a: ["My favorite season is summer. It's hot and wet in summer."], k: ['summer', 'hot', 'wet'] },
      { u: 2, q: 'Is it snowy in fall?', zh: '不是；秋天涼爽又乾燥，你最喜歡秋天。', a: ["No, it isn't. It's cool and dry in fall. My favorite season is fall."], k: ['No', 'cool', 'dry', 'favorite season is fall|favorite season is autumn'] },
      { u: 2, q: "What's his favorite season?", zh: '他最喜歡冬天；再說冬天寒冷又下雪。', a: ["His favorite season is winter. It's cold and snowy in winter."], k: ['winter', 'cold', 'snowy'] },
      { u: 2, q: 'Is it foggy in spring?', zh: '對；再問考官：夏天也會起霧嗎？', a: ['Yes, it is. Is it foggy in summer?'], k: ['Yes, it is', 'Is it foggy in summer'], f: "No, it isn't." },
      { u: 2, q: 'Is her favorite season spring?', zh: '不是；她最喜歡秋天。', a: ["No, it isn't. Her favorite season is fall."], k: ['No', 'Her favorite season', 'fall|autumn'] },
      { u: 2, q: "What's Amy's favorite season?", zh: '她最喜歡春天；再說春天溫暖又潮濕。', a: ["Her favorite season is spring. It's warm and wet in spring."], k: ['spring', 'warm', 'wet'] },
      { u: 12, q: 'Are the shorts for winter?', zh: '不是；短褲是夏天穿的，五十元。', a: ["No, they aren't. They're for summer. They're fifty dollars."], k: ['No', 'summer', n('fifty', '50')] },
      { u: 12, q: 'How much is the coat?', zh: '五百元；外套是冬天穿的。', a: ["It's five hundred dollars. It's for winter."], k: [n('five hundred', '500'), 'winter'] },
      { u: 12, q: 'How much is the hat?', zh: '五十元；帽子是夏天戴的。', a: ["It's fifty dollars. It's for summer."], k: [n('fifty', '50'), 'summer'] },
      { u: 12, q: 'Is the jacket for fall?', zh: '對；夾克兩百元。再問考官最喜歡哪個季節。', a: ["Yes, it is. It's two hundred dollars. What's your favorite season?"], k: ['Yes, it is', n('two hundred', '200'), "What's your favorite season"], f: 'My favorite season is fall.' }
    ];
    build({ key: '8-u34', title: '六下 U3–U4 口語對話考試', file: '六下U3-U4', units: ['hanlin-8-u3', 'hanlin-8-u4'], labels: ['U3', 'U4'],
      cls: { [PRICE]: '說出價錢（任一個數字）', [SEASON]: '任一個季節' }, L: [L1, L2, L3],
      scope: "Unit 3 How Much Is the T-shirt?（coat、dress、hat、jacket、skirt、T-shirt、jeans、pants、shorts；How much is the ___? It's ___ dollars.、How much are the ___? They're ___ dollars.）；Unit 4 What's Your Favorite Season?（spring、summer、fall、winter、dry、wet、foggy、snowy；What's your favorite season? My favorite season is ___.、It's cool and dry in fall.）",
      note: '六下兩課都是依學校公開的課程計畫（翰林 Here We Go 8）整理，還沒拿課本核對；課程計畫沒有列日常用語和對話，所以題目只考單字和句型。季節天氣的搭配（春天溫暖潮濕…）是出題時設的情境，以中文提示為準。' });
  })();

  window.DATA_ORALS = BANKS;
  BANKS.forEach(b => (window.DATA_TEXTBOOK || []).forEach(u => { if (b.units.includes(u.id)) u.oral = b; }));
})();
