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
  const full = s => s.replace(/\b(\w+)n't\b/g, '$1 not').replace(/\b(It|it|What|what|He|he|She|she|There|there|Where|where)'s\b/g, '$1 is')
    .replace(/\bI'm\b/g, 'I am').replace(/\b(We|we|They|they|You|you)'re\b/g, '$1 are');
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

  window.DATA_ORALS = BANKS;
  BANKS.forEach(b => (window.DATA_TEXTBOOK || []).forEach(u => { if (b.units.includes(u.id)) u.oral = b; }));
})();
