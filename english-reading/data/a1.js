/* english-reading/data/a1.js — 作者 1 的 38 篇（篇號、主題範圍見 english-reading/CONTRACT.md §8）。只改這一個檔；改完跑 node english-reading/check.js a1 */
window.DATA_ER = (window.DATA_ER || []).concat([
  { id: 'e005', lv: 1, genre: 'story', topic: 'school', title: 'A New Seat', zh: '新座位',
    body: [
      ['Today our teacher changes our seats.', 'Amy has a new seat by the window.', 'A boy named Leo sits next to her.', 'He does not talk.', 'He just looks at his book.'],
      ['At lunch, Amy sees his lunch box.', 'It has a big green frog on it.', 'Amy says, "I like frogs, too!"', 'Leo smiles for the first time.', 'Now they talk every day.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "Where is Amy's new seat?", opts: ['By the window', 'By the door', 'Next to the teacher', 'At the back of the room'], a: 0, why: '第一段說：艾美的新座位在窗戶旁邊。', ev: ['Amy has a new seat by the window.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, what does "It" mean in "It has a big green frog on it"?', opts: ["Leo's lunch box", 'The frog', "Leo's book", 'The window'], a: 0, why: '前一句說艾美看到里歐的便當盒，「它」上面有一隻大青蛙，所以「它」是便當盒。', ev: ['It has a big green frog on it.'] },
      { id: 'q3', k: 'infer', q: 'Why does Leo smile?', opts: ['Amy likes frogs, too.', 'He gets a seat by the window.', 'He finds his lost book.', 'The teacher gives him a frog.'], a: 0, why: '艾美說「我也喜歡青蛙」，里歐才第一次笑 → 他發現兩人喜歡一樣的東西，很開心。', ev: ['Amy says, "I like frogs, too!"', 'Leo smiles for the first time.'] }
    ] },
  { id: 'e006', lv: 1, genre: 'dialogue', topic: 'friend', title: 'Come to My House', zh: '來我家玩',
    body: [
      { who: 'Tim', s: ['Hi, Ben.', 'Are you free on Saturday?'] },
      { who: 'Ben', s: ['Yes, I am.', 'Why?'] },
      { who: 'Tim', s: ['Can you come to my house?', 'We can play a card game.'] },
      { who: 'Ben', s: ['That sounds fun!', 'What time?'] },
      { who: 'Tim', s: ['How about two in the afternoon?'] },
      { who: 'Ben', s: ['OK.', 'Can I bring my little sister?', 'She likes card games, too.'] },
      { who: 'Tim', s: ['Sure!', 'My mom will make cookies for us.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "When will Ben go to Tim's house?", opts: ['On Saturday afternoon', 'On Saturday morning', 'On Sunday afternoon', 'On Friday night'], a: 0, why: '提姆問班星期六有沒有空，又說下午兩點，所以是星期六下午。', ev: ['Are you free on Saturday?', 'How about two in the afternoon?'] },
      { id: 'q2', k: 'ref', q: 'Ben says, "She likes card games, too." Who does "She" mean?', opts: ["Ben's little sister", "Tim's mom", "Tim's sister", "Ben's mom"], a: 0, why: '班前一句問能不能帶妹妹去，「她」也喜歡玩牌，指的就是班的妹妹。', ev: ['She likes card games, too.'] },
      { id: 'q3', k: 'main', q: 'What are Tim and Ben mainly talking about?', opts: ["Playing at Tim's house", 'Making cookies at school', 'Buying a new card game', 'Taking care of a little sister'], a: 0, why: '整段對話都在約星期六去提姆家玩牌。', ev: ['Can you come to my house?'] }
    ] },
  { id: 'e007', lv: 1, genre: 'notice', topic: 'library', title: 'In the Library', zh: '在圖書館裡',
    body: [
      { h: 'Welcome to the School Library' },
      ['The library is open from 8:00 a.m. to 4:30 p.m.', 'Please be quiet in the library.', 'Do not eat or drink here.', 'You can take home two books at a time.', 'Bring them back in two weeks.', 'Please wash your hands before you read.', 'Have a good time with books!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How many books can you take home at a time?', opts: ['Two', 'Three', 'Four', 'One'], a: 0, why: '告示寫：一次可以帶兩本書回家。', ev: ['You can take home two books at a time.'] },
      { id: 'q2', k: 'detail', q: 'What should you do before you read?', opts: ['Wash your hands', 'Drink some water', 'Eat a snack', 'Talk to a friend'], a: 0, why: '告示說看書前要先洗手；圖書館裡也不能吃東西、喝東西。', ev: ['Please wash your hands before you read.'] },
      { id: 'q3', k: 'vocab', q: 'What does "quiet" mean here?', opts: ['安靜', '乾淨', '快樂', '小心'], a: 0, why: 'quiet 是「安靜」：在圖書館裡要小聲，不吵到別人。', ev: ['Please be quiet in the library.'] }
    ] },
  { id: 'e008', lv: 1, genre: 'diary', topic: 'club', title: 'My First Club Day', zh: '第一次上社團', gloss: { club: '社團' },
    body: [
      { h: 'Wednesday, March 5' },
      ['Today is my first day in the drawing club.', 'Our teacher is Ms. Chen.', 'She gives us paper and colored pencils.', 'We draw flowers in the school garden.', 'My flower is red and yellow.'],
      ['Ms. Chen puts my picture on the wall.', 'I feel shy, but I am very happy.', 'I want to draw a bird next week.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does the class draw today?', opts: ['Flowers', 'Birds', 'Trees', 'Cats'], a: 0, why: '日記寫：今天大家在學校花園畫花。畫鳥是下星期才想畫的。', ev: ['We draw flowers in the school garden.'] },
      { id: 'q2', k: 'vocab', q: 'What does "shy" mean here?', opts: ['害羞', '生氣', '很累', '很餓'], a: 0, why: 'shy 是「害羞」：作品被貼在牆上，大家都看得到，所以有點不好意思。', ev: ['I feel shy, but I am very happy.'] },
      { id: 'q3', k: 'infer', q: 'Why is the writer happy?', opts: ['Ms. Chen puts the picture on the wall.', 'The writer draws a bird today.', 'The writer gets new pencils at home.', 'The class goes home early.'], a: 0, why: '陳老師把作者的畫貼到牆上，作者接著說很開心 → 是因為畫被老師貼出來。', ev: ['Ms. Chen puts my picture on the wall.'] }
    ] },
  { id: 'e009', lv: 1, genre: 'info', topic: 'school', title: 'Lunch at Our School', zh: '學校的午餐時間',
    body: [
      ['At our school, we eat lunch in the classroom.', 'At noon, some students bring the food from the kitchen.', 'They wear white hats.', 'Everyone stands in a line.', 'We get rice, vegetables, meat, and soup.'],
      ['After lunch, we clean our desks.', 'Then we brush our teeth.', 'We rest for thirty minutes.', 'Lunch time is busy, but it is fun!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where do the students eat lunch?', opts: ['In the classroom', 'In the kitchen', 'In the park', 'At home'], a: 0, why: '第一段第一句說：我們在教室吃午餐。廚房是拿飯菜的地方。', ev: ['we eat lunch in the classroom'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 1, who does "They" mean?', opts: ['The students who bring the food', 'The cooks in the kitchen', 'All the teachers', 'The kids at home'], a: 0, why: '前一句說有些同學去廚房拿飯菜，「他們」戴白帽子，指的就是這些同學。', ev: ['They wear white hats.'] },
      { id: 'q3', k: 'detail', q: 'What do the students do first after lunch?', opts: ['They clean their desks.', 'They brush their teeth.', 'They rest for thirty minutes.', 'They stand in a line.'], a: 0, why: '第二段說吃完飯先擦桌子，然後（Then）才刷牙、休息。', ev: ['After lunch, we clean our desks.'] }
    ] },
  { id: 'e010', lv: 1, genre: 'schedule', topic: 'club', title: 'After-School Clubs', zh: '放學後的社團', gloss: { club: '社團' },
    body: [
      ['Our school has fun clubs after school.', 'You can choose one club.', 'Look at the table.'],
      { table: [['Club', 'Day', 'Room'], ['Dance', 'Monday', 'Room 101'], ['Drawing', 'Tuesday', 'Room 203'], ['Soccer', 'Wednesday', 'The field'], ['Music', 'Friday', 'Room 105']] },
      ['Each club starts at 4:00 p.m.', 'Please tell your teacher by this Friday.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Which club meets on Tuesday?', opts: ['Drawing', 'Dance', 'Soccer', 'Music'], a: 0, why: '表上星期二那一列是畫畫社，在 203 教室。', ev: ['Tuesday'] },
      { id: 'q2', k: 'detail', q: 'Where does the soccer club meet?', opts: ['On the field', 'In Room 101', 'In Room 105', 'In Room 203'], a: 0, why: '表上足球社星期三上課，地點寫的是操場（The field），不是教室。', ev: ['Soccer'] },
      { id: 'q3', k: 'infer', q: 'Jack can only stay after school on Monday. Which club can he go to?', opts: ['Dance', 'Drawing', 'Music', 'Soccer'], a: 0, why: '傑克只有星期一能留下來，表上星期一只有舞蹈社，所以只能選舞蹈社。', ev: ['Monday'] }
    ] },
  { id: 'e011', lv: 1, genre: 'story', topic: 'friend', title: 'One Umbrella, Two Friends', zh: '一把傘，兩個好朋友',
    body: [
      ['After school, it starts to rain.', 'Mia has no umbrella.', 'She stands at the school door.', 'She looks sad.'],
      ['Then her friend Kate comes.', 'Kate has a big blue umbrella.', '"Come with me," Kate says.', '"My house is near yours."'],
      ['The two girls walk home under one umbrella.', 'Their shoes get wet, but they laugh all the way.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "What color is Kate's umbrella?", opts: ['Blue', 'Red', 'Green', 'Yellow'], a: 0, why: '第二段說：凱特有一把大大的藍色雨傘。', ev: ['Kate has a big blue umbrella.'] },
      { id: 'q2', k: 'infer', q: 'Why does Mia look sad at first?', opts: ['She has no umbrella in the rain.', 'Kate does not want to walk with her.', 'Her shoes are wet.', 'She cannot find her house.'], a: 0, why: '放學下雨了，米亞卻沒有雨傘 → 她回不了家，所以看起來很難過。', ev: ['Mia has no umbrella.'] },
      { id: 'q3', k: 'vocab', q: 'What does "wet" mean here?', opts: ['濕的', '髒的', '新的', '壞掉的'], a: 0, why: 'wet 是「濕的」：兩個人撐一把傘，鞋子被雨淋濕了。', ev: ['Their shoes get wet, but they laugh all the way.'] }
    ] },
  { id: 'e012', lv: 1, genre: 'howto', topic: 'library', title: 'Borrow a Book', zh: '怎麼借書', gloss: { borrow: '借（來）' },
    body: [
      ['Do you want to borrow a book from the library?', 'It is easy.'],
      ['First, find a book you like.', 'Next, take it to the front desk.', 'Then give the teacher your library card.', 'The teacher will tell you the day to bring it back.', 'Now you can take the book home.', 'Have fun with your new book!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What do you give the teacher?', opts: ['Your library card', 'Your book bag', 'Some money', 'Your name card'], a: 0, why: '第三步說：把借書證交給老師。', ev: ['Then give the teacher your library card.'] },
      { id: 'q2', k: 'ref', q: 'In "take it to the front desk," what does "it" mean?', opts: ['The book you like', 'The library card', 'The front desk', 'The day'], a: 0, why: '前一步是找一本喜歡的書，再把「它」拿到櫃台，所以「它」是那本書。', ev: ['Next, take it to the front desk.'] },
      { id: 'q3', k: 'main', q: 'What does this article mainly tell you?', opts: ['How to borrow a book', 'How to make a library card', 'How to write a book', 'How to clean the library'], a: 0, why: '文章一步一步教你：找書、拿到櫃台、給借書證，就能把書借回家。', ev: ['Do you want to borrow a book from the library?'] }
    ] },
  { id: 'e013', lv: 1, genre: 'letter', topic: 'friend', title: 'Thank You, Andy', zh: '謝謝你，安迪',
    body: [
      { h: 'Dear Andy,' },
      ['Thank you for the pencil box.', 'I like it very much.', 'It has two small stars on the top.'],
      ['You are a good friend.', 'You always help me with math.', 'Can you come to my birthday party on Sunday?', 'We can eat cake and play games.'],
      { h: 'Your friend, Nick' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Andy give Nick?', opts: ['A pencil box', 'A birthday cake', 'A little star', 'A math book'], a: 0, why: '信的第一句：謝謝你送的鉛筆盒。', ev: ['Thank you for the pencil box.'] },
      { id: 'q2', k: 'main', q: 'Why does Nick write this letter?', opts: ['To say thanks and ask Andy to a party', 'To ask Andy to help with his math homework', 'To tell Andy about the stars in the sky', 'To say sorry for losing a pencil box'], a: 0, why: '尼克先謝謝安迪的鉛筆盒，再邀他星期天來生日派對。', ev: ['Thank you for the pencil box.', 'Can you come to my birthday party on Sunday?'] },
      { id: 'q3', k: 'vocab', q: 'What does "always" mean here?', opts: ['總是', '從不', '有時候', '今天'], a: 0, why: 'always 是「總是」：安迪每次都會教尼克數學。', ev: ['You always help me with math.'] }
    ] },
  { id: 'e014', lv: 1, genre: 'diary', topic: 'school', title: 'Class Helper Day', zh: '當值日生的一天',
    body: [
      { h: 'Thursday, May 8' },
      ['Today I am the class helper.', 'I come to school early.', 'I open the windows and clean the blackboard.', 'At lunch, I help my teacher carry the soup.', 'It is very heavy!'],
      ['After school, I turn off the lights and close the door.', 'I am tired, but I feel big and strong.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does the writer help carry at lunch?', opts: ['The soup', 'The rice', 'The books', 'The windows'], a: 0, why: '日記寫：午餐時我幫老師搬湯。', ev: ['At lunch, I help my teacher carry the soup.'] },
      { id: 'q2', k: 'ref', q: 'What does "It" mean in "It is very heavy!"?', opts: ['The soup', 'The door', 'The blackboard', 'The light'], a: 0, why: '前一句在搬湯，接著說「它好重」，「它」就是那桶湯。', ev: ['It is very heavy!'] },
      { id: 'q3', k: 'detail', q: 'What does the writer do after school?', opts: ['Turns off the lights', 'Opens the windows', 'Cleans the blackboard', 'Eats lunch with the teacher'], a: 0, why: '第二段說：放學後關燈、關門。開窗、擦黑板是早上做的。', ev: ['I turn off the lights'] }
    ] },
  { id: 'e015', lv: 1, genre: 'notice', topic: 'club', title: 'Join the Dance Club', zh: '來參加舞蹈社', gloss: { join: '參加', club: '社團' },
    body: [
      { h: 'Join the Dance Club!' },
      ['Do you like music?', 'Do you like to move?', 'Come and dance with us!'],
      ['We meet every Monday after school.', 'We dance in the music room.', 'You do not need to dance well.', 'Everyone can come!', 'Just wear sports shoes and bring water.'],
      ['Talk to Ms. Lin in Room 204.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When does the club meet?', opts: ['Every Monday after school', 'Every Friday after school', 'Every Monday morning', 'Every day at noon'], a: 0, why: '海報寫：每個星期一放學後上課。', ev: ['We meet every Monday after school.'] },
      { id: 'q2', k: 'detail', q: 'What should you bring?', opts: ['Water', 'Music', 'A dance book', 'Money'], a: 0, why: '海報說穿運動鞋、帶水就好。', ev: ['Just wear sports shoes and bring water.'] },
      { id: 'q3', k: 'infer', q: 'Who can join the club?', opts: ['Any student who likes to move', 'Only very good dancers', "Only students in Ms. Lin's class", 'Only students in Room 204'], a: 0, why: '海報說不用跳得好、大家都可以來 → 只要喜歡動一動就能參加。204 是找林老師的地方。', ev: ['You do not need to dance well.', 'Everyone can come!'] }
    ] },
  { id: 'e016', lv: 1, genre: 'dialogue', topic: 'library', title: 'A Book About Dogs', zh: '一本講狗的書',
    body: [
      { who: 'Sam', s: ['Hello, Ms. Wu.', 'I want a book about dogs.'] },
      { who: 'Ms. Wu', s: ['The animal books are by the big window.'] },
      { who: 'Sam', s: ['I see one, but it is too hard for me.'] },
      { who: 'Ms. Wu', s: ['Here is an easy one.', 'It has many pictures.'] },
      { who: 'Sam', s: ['Great!', 'Can I take it home?'] },
      { who: 'Ms. Wu', s: ['Yes.', 'Please bring it back next Friday.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where are the animal books?', opts: ['By the big window', 'By the front door', 'Next to the desk', 'In the classroom'], a: 0, why: '吳老師說：動物的書在大窗戶旁邊。', ev: ['The animal books are by the big window.'] },
      { id: 'q2', k: 'ref', q: 'Ms. Wu says, "Here is an easy one." What does "one" mean?', opts: ['A book', 'A dog', 'A window', 'A picture'], a: 0, why: '山姆說那本書太難，吳老師就拿「一本」簡單的給他，one 指的是一本書。', ev: ['Here is an easy one.'] },
      { id: 'q3', k: 'detail', q: 'When should Sam bring the book back?', opts: ['Next Friday', 'Next Monday', 'Tomorrow', 'In two weeks'], a: 0, why: '對話最後吳老師說：下星期五還書。', ev: ['Please bring it back next Friday.'] }
    ] },
  { id: 'e017', lv: 1, genre: 'story', topic: 'club', title: 'Max and the Big Drum', zh: '麥克斯和大鼓', gloss: { club: '社團' },
    body: [
      ['Max is in the drum club.', 'He plays the big drum.', 'The drum is as big as Max!'],
      ['Every day, Max plays after school.', 'His arms get tired, but he does not stop.'],
      ['On Friday, the club plays for all the students.', 'Max hits the drum loud and strong.', 'Everyone claps for him.', 'Max has a big smile on his face.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What is true about Max when he plays every day?', opts: ['His arms get tired.', 'His drum gets small.', 'His ears hurt.', 'His friends stop him.'], a: 0, why: '第二段說：麥克斯每天練，手臂會累，但他不停下來。', ev: ['His arms get tired, but he does not stop.'] },
      { id: 'q2', k: 'vocab', q: 'What does "loud" mean here?', opts: ['大聲的', '小聲的', '慢慢的', '快樂的'], a: 0, why: 'loud 是「大聲的」：麥克斯把鼓打得又大聲又有力。', ev: ['Max hits the drum loud and strong.'] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ['A boy who works hard on the drum', 'A boy who loses his drum', 'A club that never plays', 'A girl who claps for Max'], a: 0, why: '故事說麥克斯每天練大鼓，累了也不停，最後表演得到大家的掌聲。', ev: ['Every day, Max plays after school.'] }
    ] },
  { id: 'e018', lv: 1, genre: 'info', topic: 'friend', title: 'What Good Friends Do', zh: '好朋友會做的事',
    body: [
      ['Everyone needs good friends.', 'But what do good friends do?'],
      ['Good friends listen to you.', 'When you are sad, they stay with you.', 'They share snacks and games with you.', 'They say sorry when they are wrong.'],
      ['You can be a good friend, too.', 'Say hello to a new classmate today!']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['What good friends do', 'How to make snacks', 'How to play new games', 'Why people feel sad'], a: 0, why: '文章一開始就問：好朋友會做什麼？接著一件一件說。', ev: ['But what do good friends do?'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, who does "they" mean in "they stay with you"?', opts: ['Good friends', 'Snacks', 'Games', 'New classmates'], a: 0, why: '第二段都在說好朋友：你難過時「他們」會陪你，他們就是好朋友。', ev: ['When you are sad, they stay with you.'] },
      { id: 'q3', k: 'detail', q: 'What does the writer ask you to do today?', opts: ['Say hello to a new classmate', 'Share your snacks with the teacher', 'Say sorry to a friend', 'Play a game after school'], a: 0, why: '最後一句：今天去跟新同學打招呼吧！', ev: ['Say hello to a new classmate today!'] }
    ] },
  { id: 'e019', lv: 1, genre: 'schedule', topic: 'school', title: 'Our Farm Day', zh: '農場校外教學',
    body: [
      ['Class 5B will go to Happy Farm on Tuesday.'],
      { table: [['Time', 'What we do'], ['8:30 a.m.', 'Take the bus at school'], ['9:30 a.m.', 'See cows and pigs'], ['11:00 a.m.', 'Make bread'], ['12:00 p.m.', 'Eat lunch'], ['2:00 p.m.', 'Go back to school']] },
      ['Please wear a hat and good shoes.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What time will the class make bread?', opts: ['11:00 a.m.', '9:30 a.m.', '12:00 p.m.', '2:00 p.m.'], a: 0, why: '表上 11:00 那一列寫「做麵包」。', ev: ['Make bread'] },
      { id: 'q2', k: 'infer', q: 'Why should the students wear good shoes?', opts: ['They will walk a lot at the farm.', 'They will dance on the bus.', 'They will make shoes.', 'They will stay in the classroom.'], a: 0, why: '大家要去農場看牛、看豬，走很多路 → 所以要穿好走的鞋子。', ev: ['Please wear a hat and good shoes.'] },
      { id: 'q3', k: 'vocab', q: 'What does "wear" mean here?', opts: ['穿、戴', '買', '洗', '拿走'], a: 0, why: 'wear 是「穿、戴」：帽子要戴、鞋子要穿。', ev: ['Please wear a hat and good shoes.'] }
    ] },
  { id: 'e020', lv: 1, genre: 'howto', topic: 'school', title: 'Get Your School Bag Ready', zh: '把書包準備好',
    body: [
      ['Do you leave things at home?', 'Get your bag ready the night before.'],
      ['First, check which classes you have tomorrow.', 'Next, put in the right books.', 'Then put in your pencil box and your water bottle.', 'Do you have a sports class tomorrow?', 'Put your sports clothes in, too.', 'Last, put your bag by the door.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where should you put your bag at the end?', opts: ['By the door', 'On your bed', 'Under your desk', 'In the classroom'], a: 0, why: '最後一步（Last）說：把書包放在門邊。', ev: ['Last, put your bag by the door.'] },
      { id: 'q2', k: 'main', q: 'What is the article mainly about?', opts: ['Getting your school bag ready', 'Buying a new school bag', 'Cleaning your bedroom', 'Making sports clothes'], a: 0, why: '文章教你前一天晚上一步一步把書包整理好。', ev: ['Get your bag ready the night before.'] },
      { id: 'q3', k: 'vocab', q: 'What does "right" mean in "put in the right books"?', opts: ['對的', '右邊的', '新的', '重的'], a: 0, why: '這裡的 right 不是「右邊」，是「對的」：放進明天要上的課的書。', ev: ['Next, put in the right books.'] }
    ] },
  { id: 'm004', lv: 2, genre: 'story', topic: 'school', title: 'The Girl from Hualien', zh: '從花蓮來的女孩',
    body: [
      ['On Monday, a new student came to our class.', 'Her name was Nina, and she was from Hualien.', 'She sat by herself at lunch and did not say much.'],
      ['The next day, our teacher asked Nina to tell us about her city.', 'She showed us pictures of high mountains and the blue sea.', 'Everyone wanted to know more.', 'Ben asked, "Can you swim in that sea?"', 'Nina laughed and said, "Yes, every summer!"'],
      ['After that day, Nina never ate lunch by herself again.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where was Nina from?', opts: ['Hualien', 'Taipei', 'Tainan', 'Taichung'], a: 0, why: '第一段說：她叫妮娜，從花蓮來。', ev: ['she was from Hualien'] },
      { id: 'q2', k: 'main', q: 'What is the story mainly about?', opts: ['A new student who makes friends', 'A class trip to the mountains', 'A girl who learns to swim', 'A teacher who takes pictures'], a: 0, why: '妮娜剛轉來時一個人吃飯，介紹家鄉以後大家想認識她，最後不再孤單。', ev: ['After that day, Nina never ate lunch by herself again.'] },
      { id: 'q3', k: 'infer', q: 'Why did Nina stop eating lunch by herself?', opts: ['Her classmates got to know her.', 'She moved to a new school.', 'She ate lunch with the teacher.', 'She showed pictures every day.'], a: 0, why: '她介紹花蓮後，大家都想知道更多、還問她問題 → 同學開始認識她、跟她做朋友。', ev: ['Everyone wanted to know more.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "that" mean in Ben\'s question?', opts: ['The sea in Hualien', 'A pool at school', 'A river in Taipei', 'The sea near Tainan'], a: 0, why: '妮娜給大家看花蓮的藍色大海，班問能不能在「那片」海游泳，指的是花蓮的海。', ev: ['Ben asked, "Can you swim in that sea?"'] }
    ] },
  { id: 'm005', lv: 2, genre: 'letter', topic: 'library', title: 'Sorry About the Late Book', zh: '對不起，書晚還了',
    body: [
      { h: 'Dear Ms. Lee,' },
      ['I am sorry because my library book is late.', 'I had to bring it back last Friday, but I lost it.'],
      ['Yesterday, I finally found it under my bed.', 'My dog was sleeping on it!', 'The book is fine, but one page is a little dirty.'],
      ['I will bring the book to you tomorrow morning.', 'I can also pay for the page if you want.', 'Next time, I will keep my books on my desk.'],
      { h: 'From Henry' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why did Henry write this letter?', opts: ['To say sorry for a late book', 'To ask for a new book about dogs', 'To tell Ms. Lee about his new bed', 'To ask for a new library card'], a: 0, why: '信一開頭就說：對不起，我的圖書館的書晚還了。', ev: ['I am sorry because my library book is late.'] },
      { id: 'q2', k: 'detail', q: 'Where did Henry find the book?', opts: ['Under his bed', 'On his desk', 'In his school bag', 'At the library'], a: 0, why: '第二段說：昨天終於在床底下找到書。書桌是他以後要放書的地方。', ev: ['Yesterday, I finally found it under my bed.'] },
      { id: 'q3', k: 'vocab', q: 'What does "finally" mean in paragraph 2?', opts: ['終於', '馬上', '常常', '從來沒有'], a: 0, why: 'finally 是「終於」：書不見了好幾天，昨天才總算找到。', ev: ['Yesterday, I finally found it under my bed.'] },
      { id: 'q4', k: 'ref', q: 'What does "it" mean in "My dog was sleeping on it"?', opts: ['The library book', 'The bed', 'The desk', 'The dog'], a: 0, why: '亨利在床底下找到書，他的狗就睡在「它」上面，它指的是那本圖書館的書。', ev: ['My dog was sleeping on it!'] }
    ] },
  { id: 'm006', lv: 2, genre: 'dialogue', topic: 'club', title: 'Which Club Is for Me?', zh: '哪個社團適合我？', gloss: { drama: '戲劇' },
    body: [
      { who: 'Lily', s: ['Ray, which club will you choose this year?'] },
      { who: 'Ray', s: ['I want to be in the science club.', 'We can make small robots there.'] },
      { who: 'Lily', s: ['That sounds cool, but I am not good at science.'] },
      { who: 'Ray', s: ['What do you like to do?'] },
      { who: 'Lily', s: ['I love to sing and act.'] },
      { who: 'Ray', s: ['Then the drama club is for you!', 'They put on a play at the end of every year.'] },
      { who: 'Lily', s: ['Really?', 'When do they meet?'] },
      { who: 'Ray', s: ['On Thursday afternoons.', "Let's go and ask Mr. Kao after class."] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What can Ray make in the science club?', opts: ['Small robots', 'A play', 'Songs', 'Cakes'], a: 0, why: '雷說：在自然科學社可以做小機器人。', ev: ['We can make small robots there.'] },
      { id: 'q2', k: 'ref', q: 'Ray says, "We can make small robots there." What does "there" mean?', opts: ['In the science club', 'In the drama club', "In Mr. Kao's office", 'On the stage'], a: 0, why: '雷前一句說想參加科學社，「在那裡」可以做機器人，指的就是科學社。', ev: ['We can make small robots there.'] },
      { id: 'q3', k: 'infer', q: 'Which club will Lily probably choose?', opts: ['The drama club', 'The science club', 'The singing club', 'The soccer club'], a: 0, why: '莉莉說自己不擅長自然，喜歡唱歌和演戲；雷推薦戲劇社，她還問什麼時候上 → 很可能選戲劇社。', ev: ['Then the drama club is for you!', 'When do they meet?'] },
      { id: 'q4', k: 'main', q: 'What are Lily and Ray mainly talking about?', opts: ['Choosing a club', 'Making robots at home', 'Watching a play on Thursday', 'Asking Mr. Kao about a test'], a: 0, why: '對話一開始莉莉就問雷今年要選哪個社團，接著兩人討論哪個社團適合她。', ev: ['Ray, which club will you choose this year?'] }
    ] },
  { id: 'm007', lv: 2, genre: 'info', topic: 'library', title: 'More Than Books', zh: '圖書館不只有書', gloss: { magazines: '雜誌' },
    body: [
      ['When you think of a library, you may think of books.', 'But a library has many other things, too.'],
      ['You can read magazines and newspapers there.', 'You can watch movies or listen to music.', 'Some libraries have computers for students to use.'],
      ['Many libraries also have story time for children on weekends.', 'Best of all, you do not need to pay for any of this!', 'You only need a library card.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['Things you can do at a library', 'How to get a library card', 'How to write a story', 'Why movies cost a lot'], a: 0, why: '文章說圖書館除了書，還有報紙、電影、音樂、電腦和說故事時間。', ev: ['But a library has many other things, too.'] },
      { id: 'q2', k: 'detail', q: 'What do you need to use the library?', opts: ['A library card', 'Some money', 'A computer', 'A newspaper'], a: 0, why: '最後一句說：只要有一張借書證就可以。', ev: ['You only need a library card.'] },
      { id: 'q3', k: 'vocab', q: 'What does "pay" mean here?', opts: ['付錢', '玩', '借', '看'], a: 0, why: 'pay 是「付錢」：這些東西都不用花錢，免費就能用。', ev: ['Best of all, you do not need to pay for any of this!'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "there" mean?', opts: ['At the library', 'At home', 'At school', 'At the movies'], a: 0, why: '整篇在說圖書館，「在那裡」可以看雜誌和報紙，指的就是圖書館。', ev: ['You can read magazines and newspapers there.'] }
    ] },
  { id: 'm008', lv: 2, genre: 'story', topic: 'friend', title: 'A Note in the Desk', zh: '抽屜裡的紙條',
    body: [
      ['Sue and Grace were best friends.', 'One day, Sue showed Grace her drawing of a horse.', 'Grace laughed and said, "It looks like a dog!"', 'Sue was very angry and did not talk to her all afternoon.'],
      ['The next morning, Sue found a note in her desk.', 'It said, "I am sorry, and your horse is great."', 'There was also a funny drawing of Grace with a sad face.'],
      ['Sue laughed.', 'At lunch, the two girls ate together again.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['Two friends who fight and then make up', 'A girl who wants a horse', 'A girl who loses her desk', 'A drawing class at school'], a: 0, why: '蘇和葛蕾絲因為一張畫鬧不愉快，後來葛蕾絲寫紙條道歉，兩人又一起吃午餐。', ev: ['At lunch, the two girls ate together again.'] },
      { id: 'q2', k: 'detail', q: 'Why was Sue angry?', opts: ['Grace laughed at her drawing.', 'Grace took her horse.', 'Grace did not eat lunch with her.', 'Grace wrote on her desk.'], a: 0, why: '第一段說：葛蕾絲笑蘇畫的馬看起來像狗，蘇就生氣了。', ev: ['Grace laughed and said, "It looks like a dog!"'] },
      { id: 'q3', k: 'infer', q: 'Why did Grace draw herself with a sad face?', opts: ['To show that she felt bad', 'To make Sue angry again', 'Because she liked dogs', 'Because her teacher asked her'], a: 0, why: '紙條上寫「對不起」，旁邊畫自己難過的臉 → 她想讓蘇知道自己很後悔。', ev: ['There was also a funny drawing of Grace with a sad face.'] },
      { id: 'q4', k: 'vocab', q: 'What does "angry" mean in paragraph 1?', opts: ['生氣的', '開心的', '害怕的', '累的'], a: 0, why: 'angry 是「生氣的」：蘇氣到整個下午都不跟葛蕾絲說話。', ev: ['Sue was very angry'] }
    ] },
  { id: 'm009', lv: 2, genre: 'notice', topic: 'school', title: 'Sports Day Is Tomorrow', zh: '明天是運動會',
    body: [
      { h: 'Sports Day Tomorrow!' },
      ['Tomorrow is our school Sports Day.', 'Please come to school by 7:40 a.m.', 'Wear your sports clothes and running shoes.'],
      ['Bring a water bottle, a towel, and a hat.', 'The weather will be hot, so drink water often.', 'Parents are welcome to come and watch.', 'Lunch will be at 12:00 p.m. in your classroom.'],
      ['If it rains, Sports Day will move to next Saturday.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What time should students get to school?', opts: ['By 7:40 a.m.', 'By 8:40 a.m.', 'By 12:00 p.m.', 'By 7:00 a.m.'], a: 0, why: '通知寫：早上 7:40 以前到學校。12:00 是吃午餐的時間。', ev: ['Please come to school by 7:40 a.m.'] },
      { id: 'q2', k: 'detail', q: 'What will happen if it rains tomorrow?', opts: ['Sports Day will move to next Saturday.', 'Sports Day will be in the classroom.', 'Students will have lunch at home.', 'Parents will come to watch a movie.'], a: 0, why: '最後一句說：如果下雨，運動會改到下星期六。', ev: ['If it rains, Sports Day will move to next Saturday.'] },
      { id: 'q3', k: 'infer', q: 'Why does the notice ask students to bring a hat and drink water often?', opts: ['It will be a hot day outside.', 'There will be no lunch.', 'Parents will not bring water.', 'It will rain all day.'], a: 0, why: '通知說天氣會很熱 → 戴帽子遮太陽、多喝水才不會中暑。', ev: ['The weather will be hot, so drink water often.'] },
      { id: 'q4', k: 'vocab', q: 'What does "towel" mean here?', opts: ['毛巾', '手錶', '書包', '雨傘'], a: 0, why: 'towel 是「毛巾」：跟水壺、帽子一起帶，流汗時可以擦。', ev: ['Bring a water bottle, a towel, and a hat.'] }
    ] },
  { id: 'm010', lv: 2, genre: 'diary', topic: 'club', title: 'Our Big Show', zh: '我們的大表演',
    body: [
      { h: 'Saturday, December 13' },
      ['Today our singing club had a show in the school gym.', 'Before the show, my hands were cold and my heart was jumping.', 'I was afraid I would forget the words.'],
      ['When the music started, I saw my parents in the second row.', 'Mom waved at me, and her smile made me feel better.', 'We sang three songs, and I did not forget any words.'],
      ['After the show, our teacher gave each of us a flower.', 'I put mine in a cup on my desk.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How many songs did the club sing?', opts: ['Three', 'Two', 'Four', 'One'], a: 0, why: '第二段說：我們唱了三首歌，一個字都沒忘。', ev: ['We sang three songs'] },
      { id: 'q2', k: 'main', q: 'What is the diary mainly about?', opts: ['Singing in a club show', 'Buying flowers for Mom', 'Learning new words at school', 'Watching a movie with parents'], a: 0, why: '整篇日記寫作者參加歌唱社表演：上台前很緊張，最後順利唱完。', ev: ['Today our singing club had a show in the school gym.'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 2, who does "her" mean in "her smile"?', opts: ["The writer's mom", 'The teacher', "The writer's friend", 'A girl in the second row'], a: 0, why: '前面說媽媽對作者揮手，「她的」笑容指的就是媽媽的笑容。', ev: ['Mom waved at me, and her smile made me feel better.'] },
      { id: 'q4', k: 'infer', q: 'How did the writer feel before the show?', opts: ['Afraid', 'Bored', 'Angry', 'Tired'], a: 0, why: '上台前手很冰、心跳得很快，還怕忘詞 → 作者很緊張、害怕。', ev: ['Before the show, my hands were cold and my heart was jumping.'] }
    ] },
  { id: 'm011', lv: 2, genre: 'schedule', topic: 'library', title: 'Fun Week at the Library', zh: '圖書館的一週活動',
    body: [
      ['Our city library has fun things to do every week.', 'They are all free for children.'],
      { table: [['Day', 'Time', 'What to do'], ['Tuesday', '4:00 p.m.', 'Story Time'], ['Thursday', '4:30 p.m.', 'Make a Picture Book'], ['Saturday', '10:00 a.m.', 'English Songs'], ['Sunday', '2:00 p.m.', 'Movie Time']] },
      ['Story Time is for children under eight.', 'For Make a Picture Book, please bring your own colored pencils.', 'Seats for Movie Time are few, so come early.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When is English Songs?', opts: ['10:00 a.m. on Saturday', '4:00 p.m. on Tuesday', '2:00 p.m. on Sunday', '4:30 p.m. on Thursday'], a: 0, why: '表上「英文歌」那一列是星期六上午 10:00。', ev: ['English Songs'] },
      { id: 'q2', k: 'detail', q: 'What should you bring to Make a Picture Book?', opts: ['Your own colored pencils', 'A movie', 'Your library card', 'A song book'], a: 0, why: '表下面說：做繪本要帶自己的色鉛筆。', ev: ['please bring your own colored pencils'] },
      { id: 'q3', k: 'infer', q: 'Ivy is ten years old. Which one is NOT for her?', opts: ['Story Time', 'English Songs', 'Movie Time', 'Make a Picture Book'], a: 0, why: '說故事時間只給八歲以下的小朋友，艾薇十歲，比八歲大，所以不能參加。', ev: ['Story Time is for children under eight.'] },
      { id: 'q4', k: 'main', q: 'What is this schedule mainly about?', opts: ['Free fun at the city library', 'How to read a picture book', 'Buying tickets for a movie', 'A music class at school'], a: 0, why: '時刻表列出市立圖書館每週的免費活動和時間。', ev: ['Our city library has fun things to do every week.'] }
    ] },
  { id: 'm012', lv: 2, genre: 'howto', topic: 'club', title: 'Make a Paper Fan', zh: '做一把紙扇子', gloss: { fold: '摺' },
    body: [
      ['In our art club, we made paper fans last week.', 'They are easy to make, and they keep you cool.'],
      ['You need a piece of paper, some colored pens, and tape.'],
      { h: 'How to Make It' },
      ['First, draw pictures on the paper.', 'Next, fold the paper again and again like stairs.', 'Then hold the bottom and put tape around it.', 'Finally, open the top part of your fan.'],
      ['Now wave it in front of your face and feel the wind!']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What does the article mainly teach you?', opts: ['How to make a paper fan', 'How to draw a picture', 'How to choose an art club', 'How to stay cool in the pool'], a: 0, why: '文章列出材料和步驟，教你怎麼做紙扇子。', ev: ['In our art club, we made paper fans last week.'] },
      { id: 'q2', k: 'detail', q: 'What do you do first?', opts: ['Draw pictures on the paper', 'Fold the paper', 'Put tape on the bottom', 'Open the top part'], a: 0, why: '第一步（First）是在紙上畫圖，畫好才摺。', ev: ['First, draw pictures on the paper.'] },
      { id: 'q3', k: 'vocab', q: 'What does "wave" mean in the last line?', opts: ['揮動', '洗', '剪', '摺'], a: 0, why: 'wave 是「揮動」：拿扇子在臉前面揮一揮，就有風了。', ev: ['Now wave it in front of your face and feel the wind!'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 1, what does "They" mean?', opts: ['Paper fans', 'Colored pens', 'The club members', 'The pictures'], a: 0, why: '前一句說做了紙扇子，「它們」很好做又能讓你涼快，指的就是紙扇子。', ev: ['They are easy to make, and they keep you cool.'] }
    ] },
  { id: 'm013', lv: 2, genre: 'story', topic: 'library', title: 'The Wet Book', zh: '濕掉的書',
    body: [
      ['Last Sunday, Eric borrowed a book about space from the library.', 'On the way home, it rained hard.', 'Eric ran, but his bag got wet.'],
      ['At home, he opened his bag and saw the book.', 'The pages were wet and soft.', 'Eric felt bad.', 'He thought about hiding the book.', 'But in the end, he took it back and told Mrs. Liu what happened.'],
      ['Mrs. Liu was not angry.', 'She said, "Thank you for telling me."', 'She showed Eric how to dry the pages with paper towels.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What happened to the book?', opts: ['It got wet in the rain.', 'Eric lost it on the bus.', 'His dog ate the pages.', 'It fell into a river.'], a: 0, why: '回家路上下大雨，書包濕了，書頁也變得又濕又軟。', ev: ['The pages were wet and soft.'] },
      { id: 'q2', k: 'infer', q: 'Why was Mrs. Liu not angry?', opts: ['Eric was honest with her.', 'The book was very old.', 'She did not like the book.', 'Eric bought her a new book.'], a: 0, why: '艾瑞克沒有把書藏起來，而是老實說出發生什麼事；劉老師還謝謝他說出來 → 她喜歡他誠實。', ev: ['She said, "Thank you for telling me."'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 3, who does "She" mean?', opts: ['Mrs. Liu', "Eric's mom", "Eric's sister", 'A student'], a: 0, why: '第三段一開始說劉老師沒有生氣，接下來的「她」都是劉老師。', ev: ['She showed Eric how to dry the pages with paper towels.'] },
      { id: 'q4', k: 'main', q: 'What is the best title for this story?', opts: ['Telling What Happened', 'A Trip to Space', 'A Rainy Day at the Zoo', 'Eric Buys a Book'], a: 0, why: '故事的重點是艾瑞克把書弄濕後，沒有藏起來，而是去跟老師說實話。', ev: ['But in the end, he took it back and told Mrs. Liu what happened.'] }
    ] },
  { id: 'm014', lv: 2, genre: 'info', topic: 'school', title: 'Jobs in Our Class', zh: '班上的工作',
    body: [
      ['In many classes in Taiwan, students have class jobs.', 'Each job helps everyone in the class.'],
      ['The class leader helps the teacher and tells everyone what to do.', 'The lunch helpers bring the food and share it.', 'Some students clean the windows, and some take out the trash.'],
      ['Students change jobs every month.', 'This way, they can learn to do many things.', 'They also learn that a class is like a big family.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['Class jobs that students do', 'How to cook lunch at school', 'How to clean windows at home', 'Why some families are big'], a: 0, why: '文章介紹班上同學各有工作：班長、打菜的、擦窗戶、倒垃圾。', ev: ['In many classes in Taiwan, students have class jobs.'] },
      { id: 'q2', k: 'detail', q: 'How often do students change jobs?', opts: ['Every month', 'Every week', 'Every day', 'Every year'], a: 0, why: '第三段說：同學每個月換一次工作。', ev: ['Students change jobs every month.'] },
      { id: 'q3', k: 'vocab', q: 'What does "leader" mean in "class leader"?', opts: ['班長、帶頭的人', '客人', '老師', '廚師'], a: 0, why: 'leader 是「帶頭的人」，class leader 就是班長：幫老師、告訴大家要做什麼。', ev: ['The class leader helps the teacher and tells everyone what to do.'] },
      { id: 'q4', k: 'ref', q: 'What does "it" mean in "share it"?', opts: ['The food', 'The class', 'The trash', 'The window'], a: 0, why: '打菜的同學把飯菜拿來，再分給大家，「它」指的就是飯菜。', ev: ['The lunch helpers bring the food and share it.'] }
    ] },
  { id: 'm015', lv: 2, genre: 'dialogue', topic: 'friend', title: 'A Gift for Rose', zh: '送蘿絲的禮物',
    body: [
      { who: 'Jenny', s: ["Rose's birthday is next Wednesday.", 'What should we give her?'] },
      { who: 'Mark', s: ['How about a book?', 'She reads every day.'] },
      { who: 'Jenny', s: ['She has too many books already.', 'Her mom said there is no more room for them.'] },
      { who: 'Mark', s: ['Hmm.', 'She loves cats, right?'] },
      { who: 'Jenny', s: ["Yes!", "Let's make a cat card and buy her a cat cup."] },
      { who: 'Mark', s: ['Good idea.', 'The cup is NT$120.', 'We can each pay NT$60.'] },
      { who: 'Jenny', s: ['OK.', "Let's go to the shop after school on Monday."] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much will each of them pay?', opts: ['NT$60', 'NT$120', 'NT$100', 'NT$30'], a: 0, why: '杯子 120 元，馬克說兩人各出 60 元。', ev: ['We can each pay NT$60.'] },
      { id: 'q2', k: 'infer', q: 'Why does Jenny not want to give Rose a book?', opts: ['Rose already has a lot of books.', 'Rose does not like to read.', 'Books cost too much.', 'Mark wants to buy a cup.'], a: 0, why: '珍妮說蘿絲的書已經太多，媽媽說沒地方放了 → 再送書不太好。', ev: ['She has too many books already.'] },
      { id: 'q3', k: 'vocab', q: 'What does "already" mean here?', opts: ['已經', '還沒', '每天', '一起'], a: 0, why: 'already 是「已經」：蘿絲現在就已經有很多書了。', ev: ['She has too many books already.'] },
      { id: 'q4', k: 'ref', q: 'Mark says, "She reads every day." Who does "She" mean?', opts: ['Rose', 'Jenny', "Rose's mom", "Mark's sister"], a: 0, why: '他們在討論蘿絲的生日禮物，馬克說「她」每天看書，指的是蘿絲。', ev: ['She reads every day.'] }
    ] },
  { id: 'm016', lv: 2, genre: 'letter', topic: 'club', title: 'Welcome to the English Club', zh: '歡迎加入英語社',
    body: [
      { h: 'Dear new members,' },
      ['Welcome to the English Club!', 'We are happy to have you with us this year.'],
      ['Our first meeting is next Tuesday at 3:30 p.m. in Room 302.', 'We will play word games and sing English songs.', 'In May, we will act out a short play for everyone at school.'],
      ['Please bring a notebook and a pencil to every meeting.', 'If you cannot come, please tell me before the meeting.'],
      { h: 'See you soon, Ms. Huang' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why did Ms. Huang write this email?', opts: ['To welcome new club members', 'To ask students to buy notebooks', 'To tell students about a test', 'To say sorry for a late meeting'], a: 0, why: '信一開始就說「歡迎加入英語社」，接著告訴新社員第一次聚會的事。', ev: ['Welcome to the English Club!'] },
      { id: 'q2', k: 'detail', q: 'Where is the first meeting?', opts: ['In Room 302', 'In Room 203', 'In the school gym', 'In the library'], a: 0, why: '第二段說：第一次聚會在 302 教室。', ev: ['in Room 302'] },
      { id: 'q3', k: 'detail', q: 'What will the club do in May?', opts: ['Act out a short play', 'Play word games', 'Sing songs at a party', 'Write a long letter'], a: 0, why: '信上說五月要演一齣短劇給全校看。玩字謎、唱歌是平常聚會做的。', ev: ['In May, we will act out a short play for everyone at school.'] },
      { id: 'q4', k: 'vocab', q: 'What does "meeting" mean here?', opts: ['聚會、開會', '考試', '比賽', '假期'], a: 0, why: 'meeting 是「聚會」：社團大家聚在一起的時間，每次都要帶筆記本。', ev: ['Please bring a notebook and a pencil to every meeting.'] }
    ] },
  { id: 'h004', lv: 3, genre: 'story', topic: 'friend', title: 'The Quiet Girl', zh: '安靜的女孩',
    body: [
      ['In our class, there was a girl named Wendy who almost never spoke.', 'During break time, she always sat at her desk and drew in a small notebook.', 'Most of us thought she did not want any friends.'],
      ['One afternoon, I saw her notebook on the floor and picked it up.', 'Inside, there were drawings of everyone in our class, and each one was smiling.', 'There was even one of me holding my favorite basketball.'],
      ['When I gave the notebook back, I told Wendy that her pictures were wonderful.', 'Her face turned red, but she smiled and said, "Thank you."', 'Since that day, we have eaten lunch together almost every day.', 'I learned that quiet people often have a lot to say in their own way.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['Making friends with a quiet classmate', 'Losing a notebook at school', 'Learning to play basketball', 'A drawing contest in class'], a: 0, why: '作者撿到溫蒂的筆記本、稱讚她的畫，從此兩人天天一起吃午餐，變成朋友。', ev: ['Since that day, we have eaten lunch together almost every day.'] },
      { id: 'q2', k: 'detail', q: 'What did the writer see inside the notebook?', opts: ['Drawings of the classmates', 'Notes for a math test', "Letters to Wendy's family", 'Pictures of famous players'], a: 0, why: '第二段說：本子裡畫的是全班每一個人，而且每個人都在笑。', ev: ['Inside, there were drawings of everyone in our class, and each one was smiling.'] },
      { id: 'q3', k: 'infer', q: "Why did Wendy's face turn red?", opts: ['She was shy but happy about the kind words.', 'She was angry that the writer took her notebook.', 'She was sick and needed to go home.', 'She ran around the classroom.'], a: 0, why: '作者稱讚她的畫很棒，她臉紅了卻還是笑著說謝謝 → 她很害羞，但心裡很高興。', ev: ['Her face turned red, but she smiled and said, "Thank you."'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "one" mean in "There was even one of me"?', opts: ['A drawing', 'A basketball', 'A notebook', 'A friend'], a: 0, why: '前一句在說本子裡的畫，「甚至有一張畫我」的 one 就是一張畫。', ev: ['There was even one of me holding my favorite basketball.'] }
    ] },
  { id: 'h005', lv: 3, genre: 'info', topic: 'library', title: 'Finding a Book on the Shelf', zh: '怎麼在書架上找到書', gloss: { label: '標籤', librarian: '圖書館員' },
    body: [
      ['Have you ever walked into a big library and wondered how to find one book?', 'Libraries have a clever way to keep thousands of books in order.'],
      ['First, books are put into groups by subject, such as animals, history, or stories.', 'Every book has a small label on its side with a number on it.', 'Books about the same subject have numbers that are close to each other, so they stand together on the shelf.'],
      ['To find a book, you can look up its number on the library computer.', 'Then walk to the shelf with that number and look from left to right.', 'If you still cannot find it, ask the librarian for help.'],
      ['Once you understand the numbers, the library will feel much smaller!']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['How books are kept in order in a library', 'How to write a number on a book', 'Why libraries are getting smaller', 'How to buy books from a library'], a: 0, why: '文章說明圖書館怎麼把上千本書分類、編號，讓你找得到書。', ev: ['Libraries have a clever way to keep thousands of books in order.'] },
      { id: 'q2', k: 'detail', q: 'Where is the label on a book?', opts: ['On its side', 'On its first page', 'Inside its back cover', 'On the library computer'], a: 0, why: '第二段說：每本書的側邊（書背）都有一張寫著號碼的小標籤。', ev: ['Every book has a small label on its side with a number on it.'] },
      { id: 'q3', k: 'detail', q: 'What should you do if you still cannot find the book?', opts: ['Ask the librarian for help', 'Go home and try again', 'Look from right to left', 'Buy a new one'], a: 0, why: '第三段最後一句：還是找不到，就請圖書館員幫忙。', ev: ['If you still cannot find it, ask the librarian for help.'] },
      { id: 'q4', k: 'vocab', q: 'What does "subject" mean in paragraph 2?', opts: ['主題、類別', '學生', '號碼', '書架'], a: 0, why: 'subject 在這裡是「主題」：書照動物、歷史、故事這些主題分成一組一組。', ev: ['First, books are put into groups by subject, such as animals, history, or stories.'] }
    ] },
  { id: 'h006', lv: 3, genre: 'dialogue', topic: 'club', title: 'News for the School Paper', zh: '校刊要寫什麼新聞',
    body: [
      { who: 'Ms. Yang', s: ['Our next school newspaper comes out in two weeks.', 'What stories should we write?'] },
      { who: 'Tony', s: ['I think we should write about the new playground.', 'Everyone is excited about it because it will have a long slide.'] },
      { who: 'Zoe', s: ["That's a good idea, but the playground won't be finished until next month."] },
      { who: 'Ms. Yang', s: ['Zoe is right.', 'We need news that is ready now.'] },
      { who: 'Tony', s: ['Then how about Mrs. Chang in the kitchen?', 'She has cooked lunch for our school for twenty years, and her soup is famous.'] },
      { who: 'Zoe', s: ['Yes!', 'I can interview her, and Tony can take photos.'] },
      { who: 'Ms. Yang', s: ['Great.', 'Please finish your story by next Friday.'] }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What are they mainly talking about?', opts: ['What to write in the school newspaper', 'How to build a new playground', 'Why Mrs. Chang is leaving the school', 'How to take good photos'], a: 0, why: '楊老師一開始就問「我們要寫什麼新聞？」，大家接著討論題目。', ev: ['What stories should we write?'] },
      { id: 'q2', k: 'detail', q: 'Why will they not write about the playground now?', opts: ['It will not be finished until next month.', 'Nobody is excited about it.', 'Ms. Yang does not like it.', 'Tony already wrote about it.'], a: 0, why: '柔伊說：新遊樂場要到下個月才會蓋好，現在還不能寫。', ev: ["the playground won't be finished until next month"] },
      { id: 'q3', k: 'infer', q: 'Why does Ms. Yang want the story by next Friday?', opts: ['She needs time before the newspaper comes out.', 'She will be away for two weeks.', 'Mrs. Chang will be busy after Friday.', 'The playground opens on Friday.'], a: 0, why: '校刊兩星期後出刊，老師要大家下星期五先交 → 這樣出刊前還有時間整理、檢查。', ev: ['Our next school newspaper comes out in two weeks.', 'Please finish your story by next Friday.'] },
      { id: 'q4', k: 'detail', q: 'Who will take photos?', opts: ['Tony', 'Zoe', 'Ms. Yang', 'Mrs. Chang'], a: 0, why: '柔伊說她去訪問張阿姨，東尼負責拍照。', ev: ['Tony can take photos'] }
    ] },
  { id: 'h007', lv: 3, genre: 'letter', topic: 'friend', title: 'News from Our Old Class', zh: '老同學捎來的消息', names: ['Bubbles'],
    body: [
      { h: 'Dear Jason,' },
      ['It has been three months since you moved to Taichung.', 'How is your new school?', 'Do you have many new friends there?'],
      ['Here is some news from our class.', 'Last week, we won second place in the school singing contest.', 'Everyone practiced every morning for a month, and Mr. Wang was very proud of us.', 'We also have a new class fish named Bubbles, but nobody remembers to feed him except me.'],
      ['I miss walking home with you after school.', 'My mom says we can visit Taichung during the winter vacation.', 'If we come, could you show me the night market near your home?'],
      { h: 'Your friend, Mei' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why did Mei write this letter?', opts: ['To share class news and say she misses Jason', 'To ask Jason to feed the class fish', 'To tell Jason about a new night market', 'To ask Jason to sing in the contest'], a: 0, why: '梅告訴搬走的傑森班上的新鮮事，還說很想念一起走路回家的日子。', ev: ['I miss walking home with you after school.'] },
      { id: 'q2', k: 'detail', q: 'What place did the class win in the contest?', opts: ['Second place', 'First place', 'Third place', 'Last place'], a: 0, why: '第二段說：上星期全班在歌唱比賽得到第二名。', ev: ['Last week, we won second place in the school singing contest.'] },
      { id: 'q3', k: 'infer', q: 'What can we guess about Mei?', opts: ['She takes care of the class fish.', 'She did not practice for the contest.', 'She is moving to Taichung soon.', 'She does not miss Jason at all.'], a: 0, why: '信上說除了她以外，沒有人記得餵魚 → 都是梅在照顧班上的魚。', ev: ['but nobody remembers to feed him except me'] },
      { id: 'q4', k: 'vocab', q: 'What does "contest" mean in paragraph 2?', opts: ['比賽', '派對', '課程', '旅行'], a: 0, why: 'contest 是「比賽」：全班練習一個月，在歌唱比賽拿到第二名。', ev: ['Last week, we won second place in the school singing contest.'] }
    ] },
  { id: 'h008', lv: 3, genre: 'notice', topic: 'library', title: 'Book Swap Day', zh: '換書日', gloss: { swap: '交換' },
    body: [
      { h: 'Book Swap Day at Sunshine Library' },
      ['Do you have books at home that you have already read many times?', 'Bring them to our Book Swap Day and change them for "new" ones!'],
      { h: 'When and Where' },
      ['Saturday, April 12, from 9:00 a.m. to 12:00 p.m., in the library hall on the first floor.'],
      { h: 'How It Works' },
      ['For each book you bring, you will get one ticket.', 'You can use one ticket to take one book home.', 'You can bring up to five books.'],
      ['Books must be clean and in good shape.', 'We cannot take textbooks or books with missing pages.', 'Any books left at the end of the day will be given to schools in the mountains.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the notice mainly about?', opts: ['An event where people change books', 'A sale of new books', 'A new library opening', 'A trip to schools in the mountains'], a: 0, why: '告示邀請大家把看過的書帶來，換別人的書回家。', ev: ['Bring them to our Book Swap Day and change them for "new" ones!'] },
      { id: 'q2', k: 'detail', q: 'How many books can one person bring?', opts: ['Up to five', 'Up to three', 'Only one', 'As many as they like'], a: 0, why: '「How It Works」那段最後說：最多可以帶五本。', ev: ['You can bring up to five books.'] },
      { id: 'q3', k: 'detail', q: 'Which book can NOT be swapped?', opts: ['A textbook', 'A clean story book', 'A book you have read many times', 'A book about animals'], a: 0, why: '告示說不收課本，也不收缺頁的書。', ev: ['We cannot take textbooks or books with missing pages.'] },
      { id: 'q4', k: 'infer', q: 'Kate brings four clean books. How many books can she take home?', opts: ['Four', 'Five', 'One', 'Eight'], a: 0, why: '帶一本書換一張票，一張票拿一本書 → 帶四本就有四張票，可以拿四本回家。', ev: ['For each book you bring, you will get one ticket.', 'You can use one ticket to take one book home.'] }
    ] },
  { id: 'h009', lv: 3, genre: 'diary', topic: 'school', title: 'My First Report', zh: '我的第一次上台報告',
    body: [
      { h: 'Friday, October 17' },
      ['Today I gave my first report in front of the whole class.', "My topic was \"My Grandpa's Garden,\" and I had practiced it at home for three nights."],
      ['When it was my turn, my legs were shaking, and my voice sounded small.', 'I looked down at my paper and read too fast.', 'Then I remembered what Ms. Chou told us: "Look at a friend, not at the floor."', 'I looked at Amy in the front row, and she gave me a little nod.', "After that, I slowed down and even told a joke about Grandpa's lazy cat."],
      ['Everyone laughed, and I felt much better.', 'Next time, I want to be brave from the very first word.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the diary mainly about?', opts: ['Giving a report in front of the class', "Working in Grandpa's garden", 'Telling jokes to a lazy cat', 'Making a new friend named Amy'], a: 0, why: '整篇日記寫作者第一次上台報告：一開始很緊張，後來慢慢放鬆。', ev: ['Today I gave my first report in front of the whole class.'] },
      { id: 'q2', k: 'detail', q: 'How many nights did the writer practice at home?', opts: ['Three', 'Two', 'Four', 'Seven'], a: 0, why: '第一段說：在家練了三個晚上。', ev: ['I had practiced it at home for three nights'] },
      { id: 'q3', k: 'infer', q: 'Why did Amy give the writer a little nod?', opts: ['To help the writer feel calm', 'To ask the writer to stop', 'To show that she was bored', 'To tell the writer to read faster'], a: 0, why: '作者緊張到念太快，看向艾美時她點點頭，接著作者就放慢了 → 艾美是在替作者打氣。', ev: ['I looked at Amy in the front row, and she gave me a little nod.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, who does "she" mean in "she gave me a little nod"?', opts: ['Amy', 'Ms. Chou', "The writer's grandma", 'The lazy cat'], a: 0, why: '同一句前面說作者看著前排的艾美，「她」點頭，指的就是艾美。', ev: ['she gave me a little nod'] }
    ] },
  { id: 'h010', lv: 3, genre: 'schedule', topic: 'club', title: 'Nature Club Summer Camp', zh: '自然社夏令營',
    body: [
      ['Our Nature Club will hold a two-day camp at Green Hill in July.', 'Here is the plan for the first day.'],
      { table: [['Time', 'What we do', 'Place'], ['9:00 a.m.', 'Meet and take the bus', 'School gate'], ['10:30 a.m.', 'Walk in the forest', 'Green Hill'], ['12:00 p.m.', 'Lunch and rest', 'Dining room'], ['2:00 p.m.', 'Study insects', 'By the river'], ['7:30 p.m.', 'Look at the stars', 'Open field']] },
      ['The second day will end at 3:00 p.m., and parents can pick you up at school.', 'Each student needs to pay NT$800 for food and a bed.', 'Please sign up with Mr. Lu before June 20.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is this schedule mainly about?', opts: ['The plan for a club camp', 'A trip to a science museum', 'A class party at school', 'How to study stars at home'], a: 0, why: '開頭說自然社七月要辦兩天的營隊，表格列出第一天的行程。', ev: ['Our Nature Club will hold a two-day camp at Green Hill in July.'] },
      { id: 'q2', k: 'detail', q: 'Where will the students study insects?', opts: ['By the river', 'In the forest', 'In the dining room', 'At the school gate'], a: 0, why: '表上下午 2:00 觀察昆蟲，地點在河邊。', ev: ['Study insects'] },
      { id: 'q3', k: 'detail', q: 'How much does each student need to pay?', opts: ['NT$800', 'NT$80', 'NT$300', 'NT$8,000'], a: 0, why: '表下面說：每人要付 800 元，包含吃飯和床位。', ev: ['Each student needs to pay NT$800 for food and a bed.'] },
      { id: 'q4', k: 'infer', q: 'Why will the club look at the stars at 7:30 p.m.?', opts: ['It is dark enough to see them then.', 'The bus leaves at that time.', 'They must sleep before eight.', 'It will rain in the morning.'], a: 0, why: '星星要天黑才看得到，晚上 7:30 天已經暗了 → 所以排在晚上看星星。', ev: ['Look at the stars'] }
    ] },
  { id: 'h011', lv: 3, genre: 'info', topic: 'school', title: 'Recycling at School', zh: '學校的資源回收', gloss: { sort: '分類' },
    body: [
      ['Every day, a school of a thousand students can throw away a lot of trash.', 'That is why many schools in Taiwan teach students to sort their trash.'],
      ['In most classrooms, there are different boxes for paper, plastic bottles, cans, and food waste.', 'Before you throw away a bottle, you should wash it and make it flat.', 'Food waste is often collected and sent to farms, where it can be turned into food for plants.'],
      ['Recycling takes a little time, but it helps a lot.', 'When we use things again, we cut down fewer trees and use less oil to make new products.', 'If everyone does a small part, our school and our planet will be cleaner.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the main idea of the article?', opts: ['Sorting trash at school helps the earth.', 'Schools should throw away more paper.', 'Plastic bottles are very cheap.', 'Farms need more plants.'], a: 0, why: '文章說明學校怎麼做垃圾分類，最後說大家都做一點，學校和地球就會更乾淨。', ev: ['If everyone does a small part, our school and our planet will be cleaner.'] },
      { id: 'q2', k: 'detail', q: 'What should you do before you throw away a bottle?', opts: ['Wash it and make it flat', 'Paint it a new color', 'Put food inside it', 'Give it to a farm'], a: 0, why: '第二段說：丟瓶子前要先洗乾淨、壓扁。', ev: ['you should wash it and make it flat'] },
      { id: 'q3', k: 'vocab', q: 'What does "flat" mean in paragraph 2?', opts: ['扁的', '滿的', '乾淨的', '圓的'], a: 0, why: 'flat 是「扁平的」：把寶特瓶壓扁，比較不佔空間。', ev: ['Before you throw away a bottle, you should wash it and make it flat.'] },
      { id: 'q4', k: 'infer', q: 'Why does the writer say recycling "takes a little time, but it helps a lot"?', opts: ['To ask readers to recycle even if it is a little work', 'To tell readers to stop recycling', 'To show that recycling is too hard', 'To say that trees grow very fast'], a: 0, why: '作者承認分類要花一點時間，接著說好處很多 → 是在鼓勵大家就算麻煩一點也要做。', ev: ['Recycling takes a little time, but it helps a lot.'] }
    ] },
  { id: 'h012', lv: 3, genre: 'story', topic: 'club', title: 'The Sock Fish', zh: '襪子魚', gloss: { puppet: '布偶' },
    body: [
      ['Our puppet club had worked for weeks on a show called "The Brave Little Fish."', 'On the morning of the show, Tom opened the box and found that the fish puppet was missing.'],
      ['Everyone looked around the room, but they could not find it anywhere.', 'With only one hour left, Tom had an idea.', 'He took an old blue sock, drew two big eyes on it, and added a paper tail.'],
      ['The new fish looked a little silly, but the children watching the show loved it.', 'They laughed every time it jumped out of the paper sea.'],
      ['After the show, our teacher found the real puppet in her car.', 'She smiled and said, "I think the sock fish should keep the job."']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['A club that saves its show with a new idea', 'A boy who loses his blue sock', 'A teacher who buys a new car', 'A fish that lives in the sea'], a: 0, why: '布偶不見了，湯姆想到用舊襪子做一條新魚，表演還是成功演完。', ev: ['With only one hour left, Tom had an idea.'] },
      { id: 'q2', k: 'detail', q: 'What did Tom use to make the new fish?', opts: ['An old blue sock', 'A paper box', 'A real fish', "The teacher's bag"], a: 0, why: '第二段說：湯姆拿一隻舊的藍襪子，畫上大眼睛、加上紙做的尾巴。', ev: ['He took an old blue sock, drew two big eyes on it, and added a paper tail.'] },
      { id: 'q3', k: 'infer', q: 'What does the teacher mean when she says the sock fish should "keep the job"?', opts: ['The sock fish did well and can stay in the show.', 'The sock fish must be thrown away.', 'Tom should get a job at a shop.', 'The real puppet is much better.'], a: 0, why: '小朋友都很喜歡襪子魚，老師笑著說它該「保住工作」→ 意思是以後就讓襪子魚繼續演。', ev: ['She smiled and said, "I think the sock fish should keep the job."'] },
      { id: 'q4', k: 'vocab', q: 'What does "missing" mean in paragraph 1?', opts: ['不見了', '壞掉了', '很新', '太大'], a: 0, why: 'missing 是「不見了」：表演那天早上，箱子裡的魚布偶找不到了。', ev: ['found that the fish puppet was missing'] }
    ] },
]);
