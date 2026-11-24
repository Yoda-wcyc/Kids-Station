/* english-reading/data/a4.js — 作者 4 的 38 篇（篇號、主題範圍見 english-reading/CONTRACT.md §8）。只改這一個檔；改完跑 node english-reading/check.js a4 */
window.DATA_ER = (window.DATA_ER || []).concat([
  // ===== 易 e051～e065 =====
  { id: 'e051', lv: 1, genre: 'story', topic: 'sport', title: 'Ten Jumps', zh: '跳十下', gloss: { rope: '繩子' },
    body: [
      ['Lily has a new jump rope.', 'She wants to jump ten times.', 'But the rope hits her feet after two jumps.'],
      ['Her brother says, "Try again every day."', 'So Lily jumps in the park after school.', 'On Monday, she jumps four times.', 'On Friday, she jumps seven times.'],
      ['It is Sunday morning.', 'Lily jumps ten times!', 'Her brother claps for her.', 'Lily is very happy.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How many times does Lily jump on Friday?', opts: ['Seven', 'Four', 'Ten', 'Two'], a: 0, why: '第二段說：星期五她跳了七下。', ev: ['On Friday, she jumps seven times.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 3, who does "her" mean?', opts: ['Lily', "Lily's mom", "Lily's teacher", "Lily's friend"], a: 0, why: '哥哥為「她」拍手，她就是終於跳到十下的莉莉。', ev: ['Her brother claps for her.'] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ['Lily tries every day and jumps ten times.', 'Lily and her brother play in the rain.', 'Lily buys a new rope at the shop.', 'Lily runs a race at school.'], a: 0, why: '莉莉一開始只跳兩下，每天練習，到星期天終於跳了十下。', ev: ['She wants to jump ten times.'] }
    ] },
  { id: 'e052', lv: 1, genre: 'story', topic: 'hobby', title: 'The Red Kite', zh: '紅色風箏', gloss: { string: '線' },
    body: [
      ['Sam loves kites.', 'On Saturday, he and Grandpa make a red kite.',],
      ['In the afternoon, they go to the beach.', 'The wind is strong.', 'Sam runs, and the kite goes up.', 'It flies high in the blue sky.'],
      ['Then the string breaks!', 'The kite flies away over the sea.', 'Sam is sad.', 'Grandpa smiles and says, "We can make a new one tomorrow."']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where do Sam and Grandpa fly the kite?', opts: ['At the beach', 'In the park', 'At school', 'At the river'], a: 0, why: '第二段說：下午他們去海邊放風箏。', ev: ['they go to the beach'] },
      { id: 'q2', k: 'ref', q: 'Grandpa says, "We can make a new one tomorrow." What does "one" mean?', opts: ['A kite', 'A string', 'A boat', 'A picture'], a: 0, why: '風箏飛走了，爺爺說明天再做一個新的「one」，指的就是新的風箏。', ev: ['We can make a new one tomorrow.'] },
      { id: 'q3', k: 'infer', q: 'What will Sam and Grandpa probably do tomorrow?', opts: ['Make another kite', 'Swim in the sea', 'Buy a long string at the shop', 'Stay at home and sleep'], a: 0, why: '爺爺說明天可以再做一個新的 → 他們明天大概會再做一個風箏。', ev: ['Grandpa smiles and says'] }
    ] },
  { id: 'e053', lv: 1, genre: 'story', topic: 'health', title: 'Too Late for Bed', zh: '太晚睡了',
    body: [
      ['On Monday night, Kevin watches TV until eleven.', 'Then he goes to bed.'],
      ['On Tuesday morning, he cannot get up.', 'He is late for school.', 'In class, his eyes close, and he cannot read.'],
      ['That night, Mom turns off the TV at nine.', 'Kevin goes to bed early.', 'The next morning, he feels great.', 'He gets to school on time.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Until what time does Kevin watch TV on Monday night?', opts: ['Eleven', 'Nine', 'Ten', 'Seven'], a: 0, why: '第一段說：星期一晚上凱文看電視看到十一點。', ev: ['Kevin watches TV until eleven'] },
      { id: 'q2', k: 'vocab', q: 'What does "late" mean here?', opts: ['遲到', '很早', '生病', '很累'], a: 0, why: '前一晚太晚睡，早上起不來，所以上學「遲到」了。', ev: ['He is late for school.'] },
      { id: 'q3', k: 'main', q: 'What does the story mainly tell us?', opts: ['Going to bed early is good for you.', 'Watching TV is fun.', 'Kevin likes to read in class.', 'Mom likes to watch TV at night.'], a: 0, why: '凱文晚睡就起不來、上課想睡；早睡以後精神很好、準時到校。', ev: ['The next morning, he feels great.'] }
    ] },
  { id: 'e054', lv: 1, genre: 'dialogue', topic: 'sport', title: 'Swim Class', zh: '游泳課', gloss: { deep: '深的' },
    body: [
      { who: 'Mia', s: ['Dad, I do not want to go to swim class.'] },
      { who: 'Dad', s: ['Why not?'] },
      { who: 'Mia', s: ['The water is deep.', 'I am afraid.'] },
      { who: 'Dad', s: ['Your teacher will help you.', 'You can stay in the small pool first.'] },
      { who: 'Mia', s: ['Can you watch me?'] },
      { who: 'Dad', s: ['Yes, I can sit near the pool.', 'After class, we can eat ice cream.'] },
      { who: 'Mia', s: ['OK!', 'I will try.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why does Mia not want to go to swim class?', opts: ['She is afraid of the deep water.', 'She does not like her teacher.', 'She wants to eat ice cream at home.', 'She is sick today.'], a: 0, why: '米亞說水很深、她會怕，所以不想去游泳課。', ev: ['The water is deep.', 'I am afraid.'] },
      { id: 'q2', k: 'detail', q: 'Where will Dad sit?', opts: ['Near the pool', 'In the car', 'At home', 'In the small pool'], a: 0, why: '爸爸說他可以坐在游泳池旁邊看她。', ev: ['I can sit near the pool'] },
      { id: 'q3', k: 'infer', q: 'How does Mia probably feel at the end?', opts: ['Ready to try', 'Very angry', 'Sad and tired', 'Hungry for dinner'], a: 0, why: '爸爸說老師會幫忙、他也會在旁邊看，米亞最後說「我會試試」→ 她願意試試看了。', ev: ['I will try.'] }
    ] },
  { id: 'e055', lv: 1, genre: 'dialogue', topic: 'art', title: 'A Picture for Mom', zh: '送媽媽的畫',
    body: [
      { who: 'Ben', s: ['What are you drawing, Amy?'] },
      { who: 'Amy', s: ['I am drawing a picture for Mom.', 'Her birthday is on Sunday.'] },
      { who: 'Ben', s: ['It is nice!', 'What are these?'] },
      { who: 'Amy', s: ['They are flowers.', 'Mom loves pink flowers.'] },
      { who: 'Ben', s: ['Can I help you?', 'I can draw a big yellow sun.'] },
      { who: 'Amy', s: ['Yes, please!', 'Mom will love it.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "When is Mom's birthday?", opts: ['On Sunday', 'On Saturday', 'On Monday', 'On Friday'], a: 0, why: '艾美說媽媽的生日在星期天。', ev: ['Her birthday is on Sunday.'] },
      { id: 'q2', k: 'ref', q: 'Ben asks, "What are these?" What does "these" mean?', opts: ['The flowers in the picture', 'The colors in the box', "Mom's birthday cards", 'The big yellow suns'], a: 0, why: '班指著畫問「這些是什麼」，艾美回答是花，所以 these 指的是畫上的花。', ev: ['What are these?'] },
      { id: 'q3', k: 'main', q: 'What is Amy doing?', opts: ['Drawing a gift for Mom', 'Buying flowers for Mom at a shop', 'Helping Ben with his homework', 'Making a birthday cake'], a: 0, why: '艾美一開始就說：她在畫一張畫要送媽媽當生日禮物。', ev: ['I am drawing a picture for Mom.'] }
    ] },
  { id: 'e056', lv: 1, genre: 'diary', topic: 'hobby', title: 'Fishing with Dad', zh: '跟爸爸去釣魚',
    body: [
      { h: 'Saturday, May 10' },
      ['Dad and I go fishing at the river.', 'We get up at six in the morning.', 'We wait for a long time.', 'I am hungry, so we eat bread and eggs.'],
      ['At ten, I get a big fish!', 'It is long and gray.', 'Dad takes a picture of me and the fish.', 'Then we put it back into the river.', 'I want to go fishing again.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What time does the writer get the fish?', opts: ['At ten', 'At six', 'At noon', 'At nine'], a: 0, why: '日記第二段說：十點的時候釣到一條大魚。', ev: ['At ten, I get a big fish!'] },
      { id: 'q2', k: 'ref', q: 'In "Then we put it back into the river," what does "it" mean?', opts: ['The fish', 'The picture', 'The bread', 'The egg'], a: 0, why: '拍完照以後把「它」放回河裡，它就是釣到的那條大魚。', ev: ['Then we put it back into the river.'] },
      { id: 'q3', k: 'vocab', q: 'What does "hungry" mean here?', opts: ['肚子餓', '很想睡', '很冷', '生氣'], a: 0, why: '等了很久，肚子「餓」了，所以吃麵包和蛋。', ev: ['I am hungry, so we eat bread and eggs.'] }
    ] },
  { id: 'e057', lv: 1, genre: 'diary', topic: 'health', title: 'I Have a Cold', zh: '我感冒了',
    body: [
      { h: 'Wednesday, March 4' },
      ['I have a cold today.', 'My head is hot, and my nose is red.', 'Mom takes me to the doctor.', 'The doctor says, "Drink a lot of water and rest."'],
      ['I stay in bed all day.', 'I cannot go to school or play with my friends.', 'Mom makes hot soup for me.', 'I hope I feel better tomorrow.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does the doctor tell the writer to do?', opts: ['Drink water and rest', 'Eat hot soup', 'Go to school', 'Play with friends'], a: 0, why: '醫生說：多喝水、好好休息。', ev: ['Drink a lot of water and rest.'] },
      { id: 'q2', k: 'vocab', q: 'What does "stay" mean here?', opts: ['待著', '離開', '跳起來', '整理'], a: 0, why: 'stay 是「待著」：生病了，一整天都待在床上。', ev: ['I stay in bed all day.'] },
      { id: 'q3', k: 'infer', q: 'How does the writer probably feel?', opts: ['Sick and a little sad', 'Happy and excited', 'Angry at Mom', 'Hungry for candy'], a: 0, why: '感冒了不能上學、也不能和朋友玩，還希望明天好一點 → 身體不舒服、也有點難過。', ev: ['I cannot go to school or play with my friends.'] }
    ] },
  { id: 'e058', lv: 1, genre: 'notice', topic: 'sport', title: 'Come and Cheer!', zh: '來加油吧！', gloss: { cheer: '加油', gym: '體育館' },
    body: [
      { h: 'Basketball Game Day' },
      ['Our school team will play Green Hill School.', 'The game is on Saturday, June 7.', 'It starts at 2:00 p.m. in the school gym.', 'Everyone can come and watch for free.', 'Please wear a blue shirt for our team.', 'Bring water, but do not bring food into the gym.', 'Come and cheer for us!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where is the game?', opts: ['In the school gym', 'At Green Hill School', 'In the park', 'In the classroom'], a: 0, why: '告示寫：比賽下午兩點在學校體育館開始。', ev: ['in the school gym'] },
      { id: 'q2', k: 'detail', q: 'What color shirt should people wear?', opts: ['Blue', 'Green', 'White', 'Red'], a: 0, why: '告示請大家穿藍色上衣幫我們的隊伍加油。', ev: ['Please wear a blue shirt for our team.'] },
      { id: 'q3', k: 'main', q: 'What is the notice mainly about?', opts: ['A basketball game at school', 'A new gym for Green Hill School', 'Free food for the team', 'A swim class on Saturday'], a: 0, why: '整張告示都在說星期六學校籃球比賽的時間、地點，請大家來加油。', ev: ['Our school team will play Green Hill School.'] }
    ] },
  { id: 'e059', lv: 1, genre: 'notice', topic: 'art', title: 'Draw Your Dream Park', zh: '畫出你夢想的公園',
    body: [
      { h: 'Draw Your Dream Park' },
      ['Do you like to draw?', 'Draw your dream park and show it to us!', 'Your picture can have trees, animals, or anything you like.', 'You can use colored pencils or paint.', 'Please write your name and class on the back.', 'Give your picture to Ms. Wang by May 20.', 'The best ten pictures will go on the library wall.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When should students give their pictures to Ms. Wang?', opts: ['By May 20', 'By May 2', 'By June 20', 'By March 20'], a: 0, why: '告示寫：五月二十日以前把畫交給王老師。', ev: ['by May 20'] },
      { id: 'q2', k: 'vocab', q: 'What does "back" mean here?', opts: ['背面', '後來', '回來', '書包'], a: 0, why: '名字和班級要寫在畫的「背面」，正面是畫。', ev: ['on the back'] },
      { id: 'q3', k: 'infer', q: 'Who is this notice probably for?', opts: ['Students who like to draw', 'Teachers who like to cook', 'Parents who play basketball', 'Doctors at the hospital'], a: 0, why: '告示一開頭問「你喜歡畫畫嗎？」，又要寫名字和班級 → 是寫給喜歡畫畫的學生看的。', ev: ['Do you like to draw?'] }
    ] },
  { id: 'e060', lv: 1, genre: 'info', topic: 'health', title: 'Take Care of Your Teeth', zh: '照顧你的牙齒', gloss: { dentist: '牙醫' },
    body: [
      ['Your teeth help you eat and talk.', 'So you need to take care of them.'],
      ['Brush your teeth two times a day.', 'Brush them in the morning and before bed.', 'Each time, brush for about two minutes.'],
      ['Sweet food and drinks are bad for your teeth.', 'Eat less candy and drink more water.', 'Go to the dentist two times a year, too.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How long should you brush each time?', opts: ['About two minutes', 'About ten minutes', 'About two hours', 'About one minute'], a: 0, why: '第二段說：每次大約刷兩分鐘。', ev: ['brush for about two minutes'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 1, what does "them" mean?', opts: ['Your teeth', 'Sweet drinks', 'Your eyes', 'Your hands'], a: 0, why: '第一句說牙齒幫你吃東西和說話，所以要照顧「它們」＝你的牙齒。', ev: ['So you need to take care of them.'] },
      { id: 'q3', k: 'main', q: 'What is the article mainly about?', opts: ['How to take care of your teeth', 'How to make sweet drinks at home', 'Why you should eat candy', 'How to talk to a dentist'], a: 0, why: '文章教你每天刷牙、少吃糖、看牙醫，都是在說怎麼照顧牙齒。', ev: ['Brush your teeth two times a day.'] }
    ] },
  { id: 'e061', lv: 1, genre: 'info', topic: 'sport', title: 'Ride a Bike', zh: '騎腳踏車', gloss: { helmet: '安全帽' },
    body: [
      ['Riding a bike is fun, and it is good for your body.', 'Your legs get strong when you ride.'],
      ['Before you ride, check your bike.', 'Always wear a helmet.', 'It keeps your head safe.'],
      ['Ride in the park with Mom or Dad.', 'Do not ride on a busy road.', 'Do not ride too fast.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What should you always wear?', opts: ['A helmet', 'A hat', 'A watch', 'A coat'], a: 0, why: '第二段說：騎車一定要戴安全帽。', ev: ['Always wear a helmet.'] },
      { id: 'q2', k: 'ref', q: '"It keeps your head safe." What does "It" mean?', opts: ['The helmet', 'The bike', 'The road', 'The park'], a: 0, why: '前一句說要戴安全帽，「它」保護你的頭，指的就是安全帽。', ev: ['It keeps your head safe.'] },
      { id: 'q3', k: 'vocab', q: 'What does "busy" mean here?', opts: ['車子很多的', '很安靜的', '很乾淨的', '很小的'], a: 0, why: 'busy road 是車子很多、很熱鬧的馬路，騎車在那裡很危險。', ev: ['Do not ride on a busy road.'] }
    ] },
  { id: 'e062', lv: 1, genre: 'letter', topic: 'art', title: 'I Can Play the Piano', zh: '我會彈鋼琴了',
    body: [
      { h: 'Dear Grandpa,' },
      ['I have good news.', 'I can play the piano now!', 'I have piano class every Wednesday.', 'My teacher is very nice.'],
      ['I play for thirty minutes every day.', 'Now I can play "Happy Birthday."', 'Your birthday is next month.', 'I will play the song for you.'],
      { h: 'Love, Ivy' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When does Ivy have piano class?', opts: ['Every Wednesday', 'Every Sunday', 'Every day', 'Every Friday'], a: 0, why: '信裡說：每個星期三有鋼琴課。每天是在家練習三十分鐘。', ev: ['I have piano class every Wednesday.'] },
      { id: 'q2', k: 'main', q: 'Why does Ivy write this letter?', opts: ['To tell Grandpa about her piano', 'To ask Grandpa for a new piano', 'To say happy birthday to her teacher', 'To ask Grandpa to come to her school'], a: 0, why: '艾薇寫信告訴爺爺好消息：她會彈鋼琴了。', ev: ['I can play the piano now!'] },
      { id: 'q3', k: 'infer', q: "What will Ivy probably do on Grandpa's birthday?", opts: ['Play a song for him', 'Buy a cake for him', 'Go to piano class', 'Draw a picture for him'], a: 0, why: '爺爺下個月生日，艾薇會彈〈生日快樂〉→ 生日那天她大概會彈歌給爺爺聽。', ev: ['I will play the song for you.'] }
    ] },
  { id: 'e063', lv: 1, genre: 'schedule', topic: 'sport', title: 'Sports Center Classes', zh: '運動中心的課', gloss: { center: '中心', towel: '毛巾' },
    body: [
      ['Come and move at the Sunny Sports Center!'],
      { h: 'Kids Classes' },
      { table: [['Day', 'Class', 'Time'], ['Monday', 'Swimming', '4:00 p.m.'], ['Wednesday', 'Basketball', '5:00 p.m.'], ['Friday', 'Dance', '4:30 p.m.'], ['Saturday', 'Badminton', '10:00 a.m.']] },
      ['Each class is one hour.', 'Please come ten minutes early.', 'Bring a towel for swimming class.', 'Come and have fun with us!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What time is the dance class?', opts: ['4:30 p.m.', '4:00 p.m.', '5:00 p.m.', '10:00 a.m.'], a: 0, why: '表上星期五的舞蹈課是下午四點半。', ev: ['Dance'] },
      { id: 'q2', k: 'detail', q: 'What should you bring for swimming class?', opts: ['A towel', 'A shirt', 'A book', 'A hat'], a: 0, why: '表下面寫：游泳課要帶毛巾。', ev: ['Bring a towel for swimming class.'] },
      { id: 'q3', k: 'infer', q: 'Ben can come only on Saturday morning. Which class can he take?', opts: ['Badminton', 'Swimming', 'Dance', 'Basketball'], a: 0, why: '表上只有羽球課在星期六早上十點，其他課都在平日下午。', ev: ['Saturday'] }
    ] },
  { id: 'e064', lv: 1, genre: 'schedule', topic: 'hobby', title: 'Hobby Day', zh: '嗜好日', gloss: { hobby: '嗜好' },
    body: [
      ['Friday is Hobby Day at our school.'],
      { h: 'Hobby Day Plan' },
      { table: [['Time', 'What to do', 'Where'], ['9:00 a.m.', 'Paper planes', 'Room 101'], ['10:30 a.m.', 'Card games', 'Room 102'], ['12:00 (noon)', 'Lunch', 'Lunch room'], ['1:30 p.m.', 'Singing', 'Music room']] },
      ['You can bring one thing from home to show your friends.', 'School ends at 3:00 p.m.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where do students play card games?', opts: ['Room 102', 'Room 101', 'Music room', 'Lunch room'], a: 0, why: '表上寫：上午十點半在 102 教室玩紙牌遊戲。', ev: ['Card games'] },
      { id: 'q2', k: 'detail', q: 'What time does school end?', opts: ['3:00 p.m.', '1:30 p.m.', '12:00 (noon)', '10:30 a.m.'], a: 0, why: '表下面寫：下午三點放學。', ev: ['School ends at 3:00 p.m.'] },
      { id: 'q3', k: 'vocab', q: 'What does "show" mean here?', opts: ['給人看', '藏起來', '買東西', '借東西'], a: 0, why: '從家裡帶一樣東西來「給朋友看」，show 就是拿給人看。', ev: ['to show your friends'] }
    ] },
  { id: 'e065', lv: 1, genre: 'howto', topic: 'art', title: 'Draw a Happy Sun', zh: '畫一個快樂的太陽',
    body: [
      ['Do you want to draw a sun?', 'You need paper and some colors.'],
      { h: 'How to Draw' },
      ['First, draw a big circle.', 'Next, draw short lines around the circle.', 'Then draw two eyes and a big smile.', 'Color the sun yellow and orange.', 'Last, write your name on the paper.', 'Now you have a happy sun!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What do you draw first?', opts: ['A big circle', 'Short lines', 'Two eyes', 'A big smile'], a: 0, why: '步驟第一步：先畫一個大圓圈。', ev: ['First, draw a big circle.'] },
      { id: 'q2', k: 'vocab', q: 'What does "around" mean here?', opts: ['在…周圍', '在…裡面', '在…下面', '在…上面'], a: 0, why: '在圓圈「周圍」畫短線，就像太陽的光。', ev: ['draw short lines around the circle'] },
      { id: 'q3', k: 'main', q: 'What does this article teach?', opts: ['How to draw a sun', 'How to make paper', 'How to write your name', 'How to color a flower'], a: 0, why: '文章一步一步教你畫一個笑咪咪的太陽。', ev: ['Do you want to draw a sun?'] }
    ] },
  // ===== 中 m045～m057 =====
  { id: 'm045', lv: 2, genre: 'story', topic: 'sport', title: 'The Best Pass', zh: '最好的一傳',
    body: [
      ['Tom was the best player on his basketball team.', 'He always wanted to win games by himself.'],
      ['In the last game, his team was one point behind.', 'There were only ten seconds left.', 'Tom had the basketball, but two tall boys stood in front of him.'],
      ['Then he saw his friend Andy.', 'Nobody was near Andy.', 'Tom quickly passed the basketball to him.', 'Andy threw it, and it went in!'],
      ['Their team won.', 'After the game, Andy said, "Thank you for the great pass."', 'Tom smiled.', 'He learned that a team is better than one player.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much time was left in the game?', opts: ['Ten seconds', 'Two seconds', 'Ten minutes', 'One minute'], a: 0, why: '第二段說：比賽只剩下十秒。', ev: ['There were only ten seconds left.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 3, who does "him" mean?', opts: ['Andy', 'Tom', 'A tall boy', 'The teacher'], a: 0, why: '湯姆把球傳給「他」，前一句說安迪旁邊沒人，所以他指的是安迪。', ev: ['Tom quickly passed the basketball to him.'] },
      { id: 'q3', k: 'infer', q: 'Why did Tom pass the basketball to Andy?', opts: ['No one was near Andy.', 'Andy was the tallest boy on the team.', 'Tom was too tired to run.', 'The other team asked him to.'], a: 0, why: '兩個高個子擋在湯姆前面，安迪旁邊卻沒有人 → 傳給安迪比較容易投進。', ev: ['Nobody was near Andy.'] },
      { id: 'q4', k: 'main', q: 'What is the main idea of the story?', opts: ['Working with your team is important.', 'Tall players always win.', 'Tom wanted to stop playing basketball.', 'Andy is better than Tom at everything.'], a: 0, why: '湯姆本來想自己贏球，最後把球傳給隊友才贏，他學到團隊比一個人重要。', ev: ['He learned that a team is better than one player.'] }
    ] },
  { id: 'm046', lv: 2, genre: 'story', topic: 'hobby', title: 'Playing with Grandpa', zh: '跟爺爺下棋', gloss: { chess: '西洋棋' },
    body: [
      ['Every Sunday, Leo plays chess with Grandpa.', 'Grandpa is very good at it, and Leo always loses.'],
      ['One Sunday, Leo lost again and felt angry.', '"I will never win," he said.', 'Grandpa laughed and said, "Every time you lose, you learn something new."'],
      ['After that, Leo watched Grandpa carefully.', 'He also read a chess book in the library.', 'He played with his friends at school, too.'],
      ['A month later, Leo finally won a game.', 'Grandpa clapped his hands.', '"Now I need to practice more," he said with a smile.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where did Leo read a chess book?', opts: ['In the library', 'At school', 'At home', 'In the park'], a: 0, why: '第三段說：他也在圖書館看了一本西洋棋的書。在學校是跟朋友下棋。', ev: ['He also read a chess book in the library.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 4, who does "he" mean?', opts: ['Grandpa', 'Leo', "Leo's friend", "Leo's dad"], a: 0, why: '里歐贏了，爺爺拍拍手、笑著說「我得多練習了」，所以 he 是爺爺。', ev: ['Now I need to practice more'] },
      { id: 'q3', k: 'vocab', q: 'What does "finally" mean here?', opts: ['終於', '很快地', '第一次就', '不小心'], a: 0, why: '里歐輸了很多次，練了一個月才贏，finally 就是「終於」。', ev: ['A month later, Leo finally won a game.'] }
    ] },
  { id: 'm047', lv: 2, genre: 'story', topic: 'health', title: 'A Visit to the Dentist', zh: '去看牙醫', gloss: { hole: '洞' },
    body: [
      ["Rose's tooth hurt last night.", 'Rose was afraid of the dentist, but Mom took her there this morning.'],
      ['The dentist was a kind woman.', "She looked in Rose's mouth and found a small hole in one tooth.", '"Too much candy," she said.', 'Then she fixed the tooth quickly.', 'It did not hurt much.'],
      ['After that, the dentist gave Rose a small gift.', 'On the way home, Rose made a plan.', 'She will eat less candy and brush her teeth better.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did the dentist find?', opts: ['A small hole in one tooth', 'A piece of candy in her mouth', 'Two new teeth in her mouth', 'Some food between her teeth'], a: 0, why: '第二段說：牙醫看了蘿絲的嘴巴，發現一顆牙齒有個小洞。', ev: ['found a small hole in one tooth'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 1, what does "there" mean?', opts: ["The dentist's place", 'Her school', 'The candy shop', "Grandma's house"], a: 0, why: '前面說蘿絲怕牙醫，媽媽還是帶她去「那裡」，指的是看牙醫的地方。', ev: ['Mom took her there this morning'] },
      { id: 'q3', k: 'infer', q: 'Why did Rose get a hole in her tooth?', opts: ['She ate too much candy.', 'She went to bed too late every night.', 'She did not drink water.', 'She fell down at school.'], a: 0, why: '牙醫看到蛀洞就說「太多糖果了」→ 蛀牙是因為糖吃太多。', ev: ['Too much candy'] },
      { id: 'q4', k: 'main', q: 'What is the best title for the story?', opts: ['A Visit to the Dentist', 'Rose Buys Some Candy', 'A Kind Teacher', 'Mom Goes to the Doctor'], a: 0, why: '整篇在說蘿絲牙痛、去看牙醫、補好牙齒，最後決定少吃糖。', ev: ['Rose was afraid of the dentist'] }
    ] },
  { id: 'm048', lv: 2, genre: 'dialogue', topic: 'hobby', title: 'The Missing Wing', zh: '不見的機翼', gloss: { model: '模型' },
    body: [
      { who: 'Jack', s: ['Mom, I need help!', 'I cannot finish my model plane.'] },
      { who: 'Mom', s: ['What is wrong?'] },
      { who: 'Jack', s: ['One small wing is missing.', 'I looked in the box three times, but it is not there.'] },
      { who: 'Mom', s: ['Did you look under the table?', 'Your little sister played here this morning.'] },
      { who: 'Jack', s: ['Oh no!', 'Maybe she took it.'] },
      { who: 'Mom', s: ["Let's ask her nicely.", 'And next time, keep the small pieces in a bag.'] },
      { who: 'Jack', s: ['Look, Mom!', 'It is in her toy car!'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "What is missing from Jack's model plane?", opts: ['A small wing', 'A toy car', 'The box', 'A bag'], a: 0, why: '傑克說：有一片小機翼不見了。', ev: ['One small wing is missing.'] },
      { id: 'q2', k: 'ref', q: 'Jack says, "Maybe she took it." Who does "she" mean?', opts: ["Jack's little sister", 'Mom', "Jack's friend", "Jack's teacher"], a: 0, why: '媽媽說妹妹早上在這裡玩過，所以傑克說的「她」是妹妹。', ev: ['Maybe she took it.'] },
      { id: 'q3', k: 'vocab', q: 'What does "missing" mean here?', opts: ['不見了', '壞掉了', '太大了', '新買的'], a: 0, why: '傑克在盒子裡找了三次都找不到，missing 就是「不見了」。', ev: ['One small wing is missing.'] }
    ] },
  { id: 'm049', lv: 2, genre: 'dialogue', topic: 'health', title: "At the Nurse's Office", zh: '在健康中心',
    body: [
      { who: 'Nurse', s: ['Hi, Kate.', 'What is wrong?'] },
      { who: 'Kate', s: ['My stomach hurts.', 'I ate my lunch very fast because I wanted to play.'] },
      { who: 'Nurse', s: ['Did you drink anything cold?'] },
      { who: 'Kate', s: ['Yes, I drank a big cup of ice water, too.'] },
      { who: 'Nurse', s: ['That is why.', 'Lie down here and rest for twenty minutes.', 'I will give you some warm water.'] },
      { who: 'Kate', s: ['Can I go back to class after that?'] },
      { who: 'Nurse', s: ['Yes, if you feel better.', 'Next time, eat slowly and do not drink so much ice water.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why did Kate eat her lunch fast?', opts: ['She wanted to play.', 'She was very hungry.', 'Her class was late.', 'She did not like the food.'], a: 0, why: '凱特說她吃很快，是因為想去玩。', ev: ['because I wanted to play'] },
      { id: 'q2', k: 'detail', q: 'How long should Kate rest?', opts: ['Twenty minutes', 'Ten minutes', 'Two hours', 'Thirty minutes'], a: 0, why: '護理師請她躺下來休息二十分鐘。', ev: ['rest for twenty minutes'] },
      { id: 'q3', k: 'ref', q: 'The nurse says, "That is why." What does "That" mean?', opts: ['Kate ate fast and drank ice water.', 'Kate wanted to play with her friends after lunch.', 'Kate lay down to rest.', 'Kate drank some warm water.'], a: 0, why: '凱特說她吃很快、又喝了一大杯冰水，護理師說「就是這樣（才肚子痛）」，That 指的就是這兩件事。', ev: ['That is why.'] },
      { id: 'q4', k: 'infer', q: 'What will Kate probably do at lunch next time?', opts: ['Eat more slowly', 'Drink more ice water', 'Run to the playground', 'Not eat lunch'], a: 0, why: '護理師叮嚀下次要慢慢吃、少喝冰水，凱特不想再肚子痛 → 下次大概會吃慢一點。', ev: ['Next time, eat slowly'] }
    ] },
  { id: 'm050', lv: 2, genre: 'diary', topic: 'art', title: 'My First Violin Show', zh: '我的第一次小提琴表演', gloss: { nervous: '緊張的' },
    body: [
      { h: 'Friday, December 12' },
      ['Tonight was my first violin show.', 'Before the show, my hands were cold, and my legs were shaking.', 'I was so nervous!'],
      ['When it was my turn, I walked onto the stage slowly.', 'I saw Mom and Dad in the second row.', 'Dad gave me a big smile, so I felt better.'],
      ['I made one small mistake, but I did not stop.', 'At the end, everyone clapped for me.', 'I felt proud of myself.', 'Next year, I want to play a harder song.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where were Mom and Dad?', opts: ['In the second row', 'In the first row', 'On the stage', 'At home'], a: 0, why: '第二段說：作者看到爸媽坐在第二排。', ev: ['in the second row'] },
      { id: 'q2', k: 'vocab', q: 'What does "proud" mean here?', opts: ['感到驕傲', '很害怕', '很無聊', '很生氣'], a: 0, why: '表演完大家都為作者拍手，作者覺得「以自己為榮」，proud 就是驕傲、光榮。', ev: ['I felt proud of myself.'] },
      { id: 'q3', k: 'infer', q: 'What can we learn about the writer from paragraph 3?', opts: ['The writer did not give up after a mistake.', 'The writer played the song two times.', 'The writer stopped and cried on the stage.', 'The writer wants to stop playing the violin.'], a: 0, why: '作者拉錯一個小地方，但沒有停下來繼續拉完 → 遇到錯誤也不放棄。', ev: ['I made one small mistake, but I did not stop.'] },
      { id: 'q4', k: 'main', q: 'What is the diary mainly about?', opts: ["The writer's first violin show", 'Buying a new violin with Dad', 'A music class at school', 'A harder song for next year'], a: 0, why: '日記第一句就說：今晚是我第一次小提琴表演，後面寫表演前、中、後的心情。', ev: ['Tonight was my first violin show.'] }
    ] },
  { id: 'm051', lv: 2, genre: 'notice', topic: 'health', title: 'Health Check Day', zh: '健康檢查日',
    body: [
      { h: 'Health Check Day' },
      ['All students will have a health check next Tuesday, October 14.', 'The check will be in Room 105.'],
      { table: [['Class', 'Time'], ['Grades 1 and 2', '8:30 a.m.'], ['Grades 3 and 4', '10:00 a.m.'], ['Grades 5 and 6', '1:30 p.m.']] },
      ['The nurse will check your eyes, teeth, and height.', 'Please wear your PE clothes on that day.', 'If you wear glasses, bring them with you.', 'If you are sick on that day, tell your teacher.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When will the fifth grade students have their check?', opts: ['1:30 p.m.', '10:00 a.m.', '8:30 a.m.', '12:30 p.m.'], a: 0, why: '表上五、六年級是下午一點半檢查。', ev: ['Grades 5 and 6'] },
      { id: 'q2', k: 'ref', q: '"If you wear glasses, bring them with you." What does "them" mean?', opts: ['Your glasses', 'Your PE clothes', 'Your teeth', 'Your books'], a: 0, why: '有戴眼鏡的人要把「它們」帶來，them 就是你的眼鏡。', ev: ['If you wear glasses, bring them with you.'] },
      { id: 'q3', k: 'main', q: 'What is the notice mainly about?', opts: ['A health check at school', 'A new nurse at school', 'A PE class on Tuesday', 'How to buy new glasses for your eyes'], a: 0, why: '告示說明全校健康檢查的日期、地點、時間和要準備的東西。', ev: ['All students will have a health check'] }
    ] },
  { id: 'm052', lv: 2, genre: 'info', topic: 'art', title: 'Making New Colors', zh: '調出新顏色', gloss: { mix: '混合' },
    body: [
      ['Did you know that you can make new colors with just three?', 'In art class, we often start with red, yellow, and blue.'],
      ['When you mix red and yellow, you get orange.', 'Yellow and blue make green.', 'Red and blue make purple.'],
      ['You can also change how light or dark a color is.', 'Mix in white to make a color lighter.', 'Mix in a little black to make it darker.'],
      ['Try it with your paints at home.', 'You may find a color with no name!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What color do you get from yellow and blue?', opts: ['Green', 'Orange', 'Purple', 'Brown'], a: 0, why: '第二段說：黃色加藍色會變成綠色。', ev: ['Yellow and blue make green.'] },
      { id: 'q2', k: 'detail', q: 'What should you mix in to make a color lighter?', opts: ['White', 'Black', 'Yellow', 'Water'], a: 0, why: '第三段說：加白色可以讓顏色變淺；加黑色是變深。', ev: ['Mix in white to make a color lighter.'] },
      { id: 'q3', k: 'ref', q: '"Mix in a little black to make it darker." What does "it" mean?', opts: ['A color', 'The black paint', 'Your home', 'The art class'], a: 0, why: '這一段在講怎麼讓顏色變淺或變深，「它」指的是你在調的那個顏色。', ev: ['Mix in a little black to make it darker.'] },
      { id: 'q4', k: 'main', q: 'What is the article mainly about?', opts: ['How to make new colors', 'How to draw a rainbow', 'Why people like red', 'Where to buy paints'], a: 0, why: '文章教你用紅黃藍調出新顏色，再用白和黑調深淺。', ev: ['you can make new colors with just three'] }
    ] },
  { id: 'm053', lv: 2, genre: 'info', topic: 'sport', title: 'Warm Up First', zh: '先暖身',
    body: [
      ['Before you run or swim, you should always warm up.', 'Warming up gets your body ready for sports.'],
      ['First, walk or jog slowly for a few minutes.', 'You will start to feel warm.', 'Then move your arms, legs, and neck in big circles.'],
      ['Why is this important?', 'Cold bodies get hurt more easily.', 'When your body is warm, you can move better and play longer.'],
      ['After sports, do not just sit down.', 'Walk around for a while and drink some water.']
    ],
    qs: [
      { id: 'q1', k: 'vocab', q: 'What does "warm up" mean here?', opts: ['運動前先暖身', '把衣服穿暖', '喝熱水', '曬太陽'], a: 0, why: '跑步、游泳前要讓身體準備好，warm up 就是運動前的「暖身」。', ev: ['you should always warm up'] },
      { id: 'q2', k: 'detail', q: 'What should you do after sports?', opts: ['Walk around and drink water', 'Sit down and rest at once', 'Run very fast', 'Jog for an hour'], a: 0, why: '最後一段說：運動完不要馬上坐下，要走一走、喝點水。', ev: ['Walk around for a while and drink some water.'] },
      { id: 'q3', k: 'infer', q: 'Mike runs fast as soon as he gets to the park, without warming up. What may happen?', opts: ['He may get hurt.', 'He will run faster than everyone.', 'He will win the race.', 'His arms will get stronger.'], a: 0, why: '文章說身體還冷的時候比較容易受傷 → 麥克沒暖身就跑，可能會受傷。', ev: ['Cold bodies get hurt more easily.'] }
    ] },
  { id: 'm054', lv: 2, genre: 'letter', topic: 'sport', title: 'I Joined a Team', zh: '我加入球隊了', gloss: { strict: '嚴格的' },
    body: [
      { h: 'Dear Nina,' },
      ['How are you?', 'I have some good news.', 'Last month, I joined the badminton team at my school!'],
      ['We practice after school on Tuesdays and Thursdays.', 'Our teacher is Mr. Chen.', 'He is very strict, but he is also funny.'],
      ['At first, I could not hit anything.', 'I practiced hard every day.', 'Now I can play a game with my friends.'],
      ['Next month, our team will have a game with another school.', 'Can you come and watch me?'],
      { h: 'Your friend, Grace' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Grace write this email?', opts: ['To tell Nina about her badminton team', 'To ask Nina to join the swim team', 'To say sorry for a game', 'To tell Nina about a new teacher at her school'], a: 0, why: '葛蕾絲開頭就說有好消息：她上個月加入學校的羽球隊。', ev: ['Last month, I joined the badminton team at my school!'] },
      { id: 'q2', k: 'detail', q: 'When does the team practice?', opts: ['On Tuesdays and Thursdays', 'On Mondays and Fridays', 'Every day before school', 'On Saturdays and Sundays'], a: 0, why: '信裡說：每週二和週四放學後練習。', ev: ['We practice after school on Tuesdays and Thursdays.'] },
      { id: 'q3', k: 'vocab', q: 'What does "strict" mean here?', opts: ['嚴格的', '好笑的', '很高的', '很懶的'], a: 0, why: 'strict 是「嚴格的」：陳老師很嚴格，但也很好笑。', ev: ['He is very strict, but he is also funny.'] },
      { id: 'q4', k: 'infer', q: 'How does Grace probably feel about the game next month?', opts: ['Excited', 'Bored', 'Angry', 'Sick'], a: 0, why: '她特別邀請妮娜來看她比賽 → 她很期待、很興奮。', ev: ['Can you come and watch me?'] }
    ] },
  { id: 'm055', lv: 2, genre: 'letter', topic: 'hobby', title: 'Thank You for the Camera', zh: '謝謝你送的相機',
    body: [
      { h: 'Dear Aunt Lisa,' },
      ['Thank you for the camera!', 'It is the best birthday gift I have ever had.'],
      ['Last weekend, I took it to the park with Dad.', 'I took pictures of flowers, birds, and a big white cloud.', 'My favorite one is a bird in a tree.', 'It looks like it is smiling!'],
      ['Dad and I picked five of the best photos.', 'I put them on the wall of my room.', 'When you visit us next month, I will show them to you.'],
      { h: 'Love, Eric' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where did Eric take the camera last weekend?', opts: ['To the park', 'To the zoo', 'To school', "To Aunt Lisa's house"], a: 0, why: '第二段說：上週末他和爸爸帶相機去公園。', ev: ['I took it to the park with Dad'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, what does "one" mean?', opts: ['A picture', 'A bird', 'A tree', 'A flower'], a: 0, why: '艾瑞克拍了很多照片，「最喜歡的那一張」是樹上的鳥，one 指的是照片。', ev: ['My favorite one is a bird in a tree.'] },
      { id: 'q3', k: 'main', q: 'Why does Eric write this letter?', opts: ['To thank Aunt Lisa for a gift', 'To ask Aunt Lisa for a new camera', 'To tell Aunt Lisa about a bird', 'To ask Aunt Lisa to come to his birthday party'], a: 0, why: '信一開頭就謝謝阿姨送的相機，後面再說他用相機拍了什麼。', ev: ['Thank you for the camera!'] },
      { id: 'q4', k: 'detail', q: 'Where are the photos now?', opts: ['On the wall of his room', 'In the park', "In Dad's car", 'In a big box'], a: 0, why: '第三段說：他把照片貼在房間的牆上。', ev: ['I put them on the wall of my room.'] }
    ] },
  { id: 'm056', lv: 2, genre: 'schedule', topic: 'art', title: 'Kids Day at the Museum', zh: '博物館兒童日', gloss: { clay: '黏土' },
    body: [
      ['The City Art Museum has a special day for kids on Saturday, April 5.', 'Tickets are free for children under twelve.'],
      { table: [['Time', 'What', 'Place'], ['9:30 a.m.', 'Painting class', 'Room A'], ['11:00 a.m.', 'Music show', 'Garden'], ['1:30 p.m.', 'Clay animals', 'Room B'], ['3:00 p.m.', 'Museum tour', 'Front door']] },
      ['You need to sign up for the clay class because it has only twenty seats.', 'Please do not touch the pictures on the walls.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where is the music show?', opts: ['In the garden', 'In Room A', 'In Room B', 'At the front door'], a: 0, why: '表上上午十一點的音樂表演在花園。', ev: ['Music show'] },
      { id: 'q2', k: 'detail', q: 'Who can get in for free?', opts: ['Children under twelve', 'Everyone on Saturday', 'Children in the clay class', 'Moms and dads with their children'], a: 0, why: '第一段說：十二歲以下的小孩免費。', ev: ['Tickets are free for children under twelve.'] },
      { id: 'q3', k: 'infer', q: 'Amy wants to make clay animals. What should she do first?', opts: ['Sign up for the class', 'Go to Room A at 9:30', 'Touch the pictures', 'Wait at the front door'], a: 0, why: '黏土課只有二十個位子、要先報名 → 艾美想上的話要先報名。', ev: ['You need to sign up for the clay class'] },
      { id: 'q4', k: 'ref', q: 'In the last paragraph, what does "it" mean?', opts: ['The clay class', 'The museum', 'The garden', 'The ticket'], a: 0, why: '「它」只有二十個位子，前面說的是黏土課，所以 it 指黏土課。', ev: ['because it has only twenty seats'] }
    ] },
  { id: 'm057', lv: 2, genre: 'howto', topic: 'health', title: 'Wash Your Hands Well', zh: '把手洗乾淨', gloss: { soap: '肥皂', rub: '搓' },
    body: [
      ['Our hands touch many things every day.', 'Washing them well can keep you from getting sick.'],
      { h: 'How to Do It' },
      ['First, make your hands wet with clean water.', 'Next, put some soap on your hands.', 'Then rub your hands together for at least twenty seconds.', 'Do not forget your fingers and nails.', 'After that, wash off the soap with water.', 'Finally, dry your hands with a clean towel.'],
      ['Wash your hands before you eat and after you use the bathroom.', 'You can sing "Happy Birthday" two times while you rub.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How long should you rub your hands?', opts: ['At least twenty seconds', 'About two minutes', 'At least ten seconds', 'About one hour'], a: 0, why: '第三步說：兩手互相搓至少二十秒。', ev: ['for at least twenty seconds'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 1, what does "them" mean?', opts: ['Our hands', 'Many things', 'Our friends', 'Our eyes'], a: 0, why: '第一句說我們的手每天摸很多東西，把「它們」洗乾淨，them 就是我們的手。', ev: ['Washing them well'] },
      { id: 'q3', k: 'vocab', q: 'What does "dry" mean here?', opts: ['把…擦乾', '把…弄濕', '把…洗乾淨', '把…包起來'], a: 0, why: '最後一步用乾淨的毛巾把手「擦乾」，dry 在這裡是擦乾。', ev: ['Finally, dry your hands with a clean towel.'] },
      { id: 'q4', k: 'main', q: 'What does this article mainly teach?', opts: ['How to wash your hands', 'How to sing a birthday song', 'How to make soap at home', 'Why towels must be clean'], a: 0, why: '文章列出五個步驟，教你怎麼把手洗乾淨、什麼時候要洗手。', ev: ['Washing them well can keep you from getting sick.'] }
    ] },
  // ===== 難 h031～h040 =====
  { id: 'h031', lv: 3, genre: 'story', topic: 'sport', title: 'The New Goalkeeper', zh: '新守門員', gloss: { goalkeeper: '守門員' },
    body: [
      ['Henry was the shortest boy in his class, and he never wanted to play soccer.', 'He thought the other boys ran faster and kicked harder than he did.'],
      ['One day, the class goalkeeper was sick, and Mr. Lin asked Henry to stand in the goal.', 'Henry did not want to, but nobody else wanted to try.'],
      ['At first, he was so scared that he closed his eyes when the ball came.', 'Then his friend Ryan shouted, "Watch the ball, not the players!"', 'Henry listened, and he caught the ball three times.'],
      ['After the game, Mr. Lin told him that being small helps a goalkeeper move quickly.', 'Now Henry practices in the park every weekend, and he is not afraid of soccer anymore.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['A shy boy who finds a sport he can do well', 'A tall boy who wins every soccer game', 'A teacher who is sick on game day', 'A class that cleans the field after a long soccer game'], a: 0, why: '亨利本來不敢踢足球，代替生病的同學當守門員後，發現自己做得到，也不怕了。', ev: ['he is not afraid of soccer anymore'] },
      { id: 'q2', k: 'detail', q: 'Why did Henry stand in the goal?', opts: ['The class goalkeeper was sick.', 'He wanted to be the goalkeeper.', 'Ryan asked him to play.', 'He was the fastest boy in the class.'], a: 0, why: '第二段說：班上的守門員生病了，林老師請亨利去守門。', ev: ['the class goalkeeper was sick'] },
      { id: 'q3', k: 'infer', q: 'How did Henry probably feel when Mr. Lin talked to him after the game?', opts: ['Proud and happy', 'Sad and angry', 'Tired and sick', 'Bored and sleepy'], a: 0, why: '亨利接到三次球，老師又說個子小反而動作快 → 他被稱讚，應該覺得開心又驕傲。', ev: ['After the game, Mr. Lin told him'] },
      { id: 'q4', k: 'vocab', q: 'What does "anymore" mean in the last sentence?', opts: ['不再', '一直', '很快', '再一次'], a: 0, why: 'not … anymore 是「不再…」：亨利以前怕足球，現在不再害怕了。', ev: ['he is not afraid of soccer anymore'] }
    ] },
  { id: 'h032', lv: 3, genre: 'story', topic: 'art', title: 'Rain on the Painting', zh: '畫上的雨滴',
    body: [
      ['Sophie worked on her painting for the school art show for two weeks.', 'It was a picture of a quiet lake with green mountains behind it.'],
      ['On the morning of the show, she carried it to school without an umbrella.', 'Suddenly it started to rain, and big drops fell on her painting.', 'When she got to the classroom, the sky in her picture was full of round spots.'],
      ['Sophie almost cried.', '"These spots look like rain on a lake," her teacher said.', 'Sophie had an idea.', 'She painted small circles around each spot, so the lake looked like it was raining.'],
      ['Her painting did not win first place, but many people stopped to look at it.', 'Sophie learned that a mistake can sometimes become something new.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the main idea of the story?', opts: ['A mistake can become a good idea.', 'You should always win first place.', 'Painting a lake is very easy.', 'Rain is bad for everyone at school.'], a: 0, why: '畫被雨滴弄花了，蘇菲把雨點變成湖上的雨，故事最後說錯誤有時也能變成新東西。', ev: ['Sophie learned that a mistake can sometimes become something new.'] },
      { id: 'q2', k: 'detail', q: "What was in Sophie's painting at first?", opts: ['A lake and green mountains', 'A rainy street and an umbrella', 'A classroom with many students', 'Some flowers in a garden'], a: 0, why: '第一段說：她畫的是一座安靜的湖，後面有綠色的山。', ev: ['a quiet lake with green mountains'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 1, what does "it" mean in "behind it"?', opts: ['The lake', 'The painting', 'The school', 'The art show'], a: 0, why: '「綠色的山在它後面」，山是在湖的後面，所以 it 指的是湖。', ev: ['with green mountains behind it'] },
      { id: 'q4', k: 'infer', q: 'Why did many people stop to look at her painting?', opts: ['The rain spots made it look special.', 'It won first place in the show.', 'Sophie stood next to it and cried.', 'It was the biggest painting in the whole show.'], a: 0, why: '畫沒有得第一名，但雨點被畫成湖上的雨很特別 → 大家才停下來看。', ev: ['many people stopped to look at it'] }
    ] },
  { id: 'h033', lv: 3, genre: 'dialogue', topic: 'sport', title: 'A Bike Ride by the River', zh: '河邊騎車', gloss: { helmet: '安全帽' },
    body: [
      { who: 'Dad', s: ['The weather is great today.', 'Do you want to ride bikes along the river?'] },
      { who: 'Jenny', s: ['Yes!', 'Can we ride to the bridge and have lunch there?'] },
      { who: 'Dad', s: ['Sure, but it is about ten kilometers away.', 'That is a long way for you.'] },
      { who: 'Jenny', s: ['I can do it.', 'I rode five kilometers last week, and I was not tired at all.'] },
      { who: 'Dad', s: ['OK.', 'First, check your tires and your brakes.', 'And do not forget your helmet and two bottles of water.'] },
      { who: 'Jenny', s: ['Should I bring a jacket, too?'] },
      { who: 'Dad', s: ['Yes.', 'It gets windy near the river in the afternoon.', 'If you feel tired, tell me, and we will stop and rest.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where does Jenny want to have lunch?', opts: ['At the bridge', 'At home', 'Near the school', 'In the park'], a: 0, why: '珍妮問能不能騎到橋那邊、在那裡吃午餐。', ev: ['Can we ride to the bridge and have lunch there?'] },
      { id: 'q2', k: 'detail', q: 'What does Dad tell Jenny to check first?', opts: ['Her tires and brakes', 'Her helmet and jacket', 'The weather and the time', 'Her two bottles of water'], a: 0, why: '爸爸說：先檢查輪胎和煞車。安全帽和水是「不要忘記帶」。', ev: ['First, check your tires and your brakes.'] },
      { id: 'q3', k: 'infer', q: 'Why does Dad say Jenny should bring a jacket?', opts: ['It will be windy by the river later.', 'It will rain at lunch time.', 'The bridge is very cold at night.', 'Her old jacket is too small for her.'], a: 0, why: '爸爸說下午河邊風會變大，他們會騎到下午 → 帶外套才不會冷。', ev: ['It gets windy near the river in the afternoon.'] },
      { id: 'q4', k: 'vocab', q: 'What does "along" mean in "ride bikes along the river"?', opts: ['沿著', '越過', '在…下面', '遠離'], a: 0, why: 'along the river 是「沿著河」：順著河邊一直騎。', ev: ['Do you want to ride bikes along the river?'] }
    ] },
  { id: 'h034', lv: 3, genre: 'diary', topic: 'hobby', title: 'My First Magic Show', zh: '我的第一場魔術表演',
    body: [
      { h: 'Sunday, January 18' },
      ['For the past month, I have practiced magic tricks after I finish my homework.', 'Today I finally showed them to my family in the living room.'],
      ['My first trick was making a coin disappear.', 'I was so worried that my hands shook, and the coin fell on the floor.', 'Everyone laughed, and my face turned red.'],
      ['I almost stopped, but Grandma said, "Try it one more time."', 'This time I did it slowly and carefully, and the coin really disappeared!', 'My little cousin looked under the table to find it.'],
      ['Then I did two card tricks, and both of them worked.', 'At the end, my family clapped for a long time.', 'Next month, I want to learn a trick with a rope.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the diary mainly about?', opts: ['Showing magic tricks to the family', 'Learning to play cards with Grandma', 'Looking for a lost coin under the table', 'Doing homework in the living room'], a: 0, why: '作者練了一個月魔術，今天在客廳表演給家人看，日記寫的就是這場表演。', ev: ['Today I finally showed them to my family'] },
      { id: 'q2', k: 'detail', q: 'Who told the writer to try again?', opts: ['Grandma', 'The little cousin', 'Mom', 'Dad'], a: 0, why: '第三段說：作者差點不演了，是奶奶說「再試一次」。', ev: ['Grandma said'] },
      { id: 'q3', k: 'infer', q: 'Why did the little cousin look under the table?', opts: ['The cousin thought the coin was there.', 'The cousin wanted to find a lost toy car.', 'The cousin did not like the magic show.', 'Grandma asked the cousin to clean the floor.'], a: 0, why: '硬幣「變不見」了，表弟妹以為它掉到桌子下面 → 才會去桌下找。', ev: ['My little cousin looked under the table to find it.'] },
      { id: 'q4', k: 'vocab', q: 'What does "worried" mean in paragraph 2?', opts: ['擔心的', '開心的', '生氣的', '無聊的'], a: 0, why: '作者太「擔心」了，手一直抖，硬幣就掉了，worried 是擔心的。', ev: ['I was so worried'] }
    ] },
  { id: 'h035', lv: 3, genre: 'notice', topic: 'sport', title: 'Summer Swim Class for Kids', zh: '兒童暑期游泳班', names: ['Riverside'],
    body: [
      { h: 'Summer Swim Class for Kids' },
      ['Do you want to swim better this summer?', 'The Riverside Sports Center will hold swim classes for children from seven to twelve years old.'],
      { table: [['Class', 'Days', 'Time', 'Price'], ['Level 1 (new swimmers)', 'Monday and Wednesday', '9:00 a.m.', 'NT$1,200'], ['Level 2', 'Tuesday and Thursday', '10:30 a.m.', 'NT$1,500'], ['Level 3', 'Friday and Saturday', '2:00 p.m.', 'NT$1,500']] },
      ['Each class lasts one hour, and the classes run for four weeks in July.', 'Students in Level 2 and Level 3 must be able to swim 25 meters.', 'Please bring a swimming cap and a towel.', 'You can sign up at the front desk before June 20.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much is the Level 1 class?', opts: ['NT$1,200', 'NT$1,500', 'NT$1,000', 'NT$2,000'], a: 0, why: '表上第一級（給剛學游泳的人）是一千兩百元。', ev: ['Level 1'] },
      { id: 'q2', k: 'detail', q: 'When is the last day to sign up?', opts: ['June 20', 'July 20', 'June 2', 'July 1'], a: 0, why: '告示最後說：六月二十日以前到櫃台報名。', ev: ['before June 20'] },
      { id: 'q3', k: 'infer', q: 'Max is eight and cannot swim yet. Which class should he take?', opts: ['Level 1', 'Level 2', 'Level 3', 'He cannot take any class.'], a: 0, why: '八歲在七到十二歲之間；第二、三級要會游 25 公尺，麥克還不會游 → 只能上第一級。', ev: ['Level 1', 'must be able to swim 25 meters'] },
      { id: 'q4', k: 'main', q: 'What is the notice mainly for?', opts: ['To tell children about summer swim classes', 'To sell swimming caps and towels', 'To ask kids to clean the pool', 'To tell people that the center is closed in July'], a: 0, why: '告示寫出暑期游泳班的級別、時間、價錢和報名方法。', ev: ['will hold swim classes for children'] }
    ] },
  { id: 'h036', lv: 3, genre: 'info', topic: 'health', title: 'Why We Need Sleep', zh: '為什麼要睡覺',
    body: [
      ['Sleep is not only a time for rest.', 'While you are sleeping, your body and brain are still busy working.'],
      ['During sleep, your body grows and fixes itself.', 'Your brain also puts the things you learned in order, so you can remember them later.'],
      ['Most children need about nine to twelve hours of sleep every night.', 'Without enough sleep, children may feel tired and get angry easily.', 'It may also be hard for them to listen in class.'],
      ['Here are some tips for better sleep.', 'Go to bed at the same time every night.', 'Stop using phones and computers one hour before bed.', 'Keep your bedroom dark and quiet.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['Why sleep is important and how to sleep well', 'How to use phones before bed', 'Why children get angry at school', 'Why children should stay up late to finish their homework'], a: 0, why: '文章先說睡覺時身體和大腦在做什麼、要睡多久，最後給好好睡覺的小方法。', ev: ['Sleep is not only a time for rest.'] },
      { id: 'q2', k: 'detail', q: 'How much sleep do most children need?', opts: ['About nine to twelve hours', 'About six to eight hours', 'About two to four hours', 'About fifteen hours'], a: 0, why: '第三段說：大部分小孩每晚需要大約九到十二小時的睡眠。', ev: ['about nine to twelve hours'] },
      { id: 'q3', k: 'vocab', q: 'What does "enough" mean in paragraph 3?', opts: ['足夠的', '太多的', '很晚的', '安靜的'], a: 0, why: '沒有「足夠的」睡眠，小孩會累、容易生氣，enough 就是足夠的。', ev: ['Without enough sleep'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "them" mean?', opts: ['The things you learned', 'Your body and brain', 'Your friends at school', 'The hours of sleep'], a: 0, why: '大腦把白天學到的東西整理好，你之後才記得住「它們」，them 指學到的東西。', ev: ['so you can remember them later'] }
    ] },
  { id: 'h037', lv: 3, genre: 'info', topic: 'art', title: 'Glove Puppet Shows', zh: '布袋戲', gloss: { puppet: '布袋戲偶' },
    body: [
      ['Have you ever watched a glove puppet show?', 'It is a kind of traditional art in Taiwan, and it has been popular for more than a hundred years.'],
      ['Each puppet has a wooden head, a cloth body, and small hands.', 'The player puts one hand inside the puppet like a glove.', 'With quick fingers, the player can make it walk, wave, bow, and even jump.'],
      ['In the past, shows were often played on small stages near temples during festivals.', 'A few people played music behind the stage.', 'Today, you can also see puppet shows on TV and in big theaters.'],
      ['Some schools in Taiwan have puppet clubs, so students can learn this old art and keep it alive.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['A kind of old puppet show in Taiwan', 'How to make gloves in winter', 'Music that people play at festivals', 'A new TV show for children in Taiwan'], a: 0, why: '文章介紹台灣傳統的布袋戲：戲偶長什麼樣子、怎麼演、在哪裡演。', ev: ['It is a kind of traditional art in Taiwan'] },
      { id: 'q2', k: 'detail', q: 'Where were the shows often played in the past?', opts: ['On small stages near temples', 'In big theaters', 'On TV', 'In school clubs'], a: 0, why: '第三段說：以前常在節慶時、廟旁邊的小戲台演出。', ev: ['near temples during festivals'] },
      { id: 'q3', k: 'vocab', q: 'What does "alive" mean in "keep it alive"?', opts: ['讓它繼續存在', '讓它變成新的', '把它賣掉', '把它藏起來'], a: 0, why: 'keep it alive 是「讓它活下去」：讓布袋戲這門老藝術一直傳下去。', ev: ['keep it alive'] },
      { id: 'q4', k: 'infer', q: 'Why do some schools have puppet clubs?', opts: ['So the old art will not be lost', 'So students can watch more TV', 'So students can sell puppets', 'So teachers can play music'], a: 0, why: '學生在社團學布袋戲，就能把老藝術傳下去 → 學校希望它不要消失。', ev: ['students can learn this old art'] }
    ] },
  { id: 'h038', lv: 3, genre: 'letter', topic: 'health', title: 'My New Glasses', zh: '我的新眼鏡', gloss: { tablet: '平板電腦' },
    body: [
      { h: 'Dear Kelly,' },
      ['Guess what?', 'I have to wear glasses now.', 'Last month, I could not see the board clearly, so Mom took me to an eye doctor.'],
      ['The doctor said my eyes were tired because I played games on my tablet too much.', 'He told me to follow the "30-10" rule.', 'After every thirty minutes of reading or using a screen, I should rest my eyes for ten minutes.'],
      ['He also said that playing outside is good for our eyes.', 'So now I go to the park with Dad every evening.', 'At first, I did not like my glasses.', 'Now I can see everything clearly, and my friends say I look smart.'],
      ['Please take care of your eyes, too!'],
      { h: 'Your cousin, Paul' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Paul write this email?', opts: ['To tell Kelly about his new glasses', 'To ask Kelly to play games on a tablet', 'To tell Kelly about a new park', 'To ask Kelly to come to the eye doctor with him'], a: 0, why: '保羅一開頭就說「猜猜看？我現在要戴眼鏡了」，後面說為什麼要戴、怎麼保護眼睛。', ev: ['I have to wear glasses now.'] },
      { id: 'q2', k: 'detail', q: 'After thirty minutes of reading, how long should Paul rest his eyes?', opts: ['Ten minutes', 'Thirty minutes', 'One hour', 'Five minutes'], a: 0, why: '第二段說：每用眼三十分鐘，要讓眼睛休息十分鐘。', ev: ['rest my eyes for ten minutes'] },
      { id: 'q3', k: 'infer', q: 'How does Paul feel about his glasses now?', opts: ['He likes them now.', 'He still does not like them.', 'He wants to throw them away.', 'He thinks they are too big.'], a: 0, why: '他說一開始不喜歡，但現在看得很清楚、朋友還說他看起來很聰明 → 現在喜歡了。', ev: ['Now I can see everything clearly'] },
      { id: 'q4', k: 'vocab', q: 'What does "clearly" mean in paragraph 1?', opts: ['清楚地', '慢慢地', '快樂地', '安靜地'], a: 0, why: '保羅看不「清楚」黑板，才去看眼科，clearly 就是清楚地。', ev: ['I could not see the board clearly'] }
    ] },
  { id: 'h039', lv: 3, genre: 'schedule', topic: 'hobby', title: 'Hobby Fair This Saturday', zh: '這個星期六的嗜好博覽會',
    body: [
      ['This Saturday, our town will have a Hobby Fair at the Sun Park Center.', 'Kids can try different hobbies for free and meet people who love them.'],
      { table: [['Time', 'Hobby', 'Room'], ['9:00–10:30 a.m.', 'Chess for beginners', 'Room 1'], ['10:00–11:30 a.m.', 'Paper art', 'Room 2'], ['1:00–2:30 p.m.', 'Model trains', 'Room 3'], ['2:00–3:30 p.m.', 'Cup music', 'Room 2']] },
      ['You can eat lunch in the garden from 11:30 a.m. to 1:00 p.m.', 'Children under eight must come with an adult.', 'The chess class has only fifteen seats, so please come early.', 'If you join three hobbies, you will get a free gift at the front desk.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Which room is the paper art class in?', opts: ['Room 2', 'Room 1', 'Room 3', 'The garden'], a: 0, why: '表上紙藝在上午十點到十一點半，地點是 2 號教室。', ev: ['Paper art'] },
      { id: 'q2', k: 'detail', q: 'What will you get if you join three hobbies?', opts: ['A free gift', 'A free lunch', 'A chess book', 'A seat in the chess class'], a: 0, why: '最後一句說：參加三種嗜好，可以到櫃台拿一份免費禮物。', ev: ['you will get a free gift'] },
      { id: 'q3', k: 'infer', q: 'Ben wants to join both chess and paper art. What problem will he have?', opts: ['Paper art starts before chess ends.', 'Both classes are in the same room.', 'The two classes are on different days.', 'Children cannot join the chess class.'], a: 0, why: '西洋棋上到 10:30，紙藝 10:00 就開始 → 時間重疊，班沒辦法兩個都從頭上到尾。', ev: ['Chess for beginners', 'Paper art'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 1, what does "them" mean?', opts: ['Different hobbies', 'Kids', 'The people at the center', 'Free gifts'], a: 0, why: '小朋友可以認識喜歡「它們」的人，them 指前面說的各種嗜好。', ev: ['meet people who love them'] }
    ] },
  { id: 'h040', lv: 3, genre: 'howto', topic: 'hobby', title: 'Make a Paper Plane', zh: '摺紙飛機', gloss: { fold: '摺' },
    body: [
      ['A paper plane is easy to make, and it can fly farther than you think.', 'All you need is one piece of paper.'],
      { h: 'How to Make It' },
      ['First, fold the paper in half the long way, and then open it again.', 'Next, fold the two top corners down to the middle line.', 'Then fold the new sides to the middle line one more time, so the front becomes a sharp point.', 'After that, fold the plane in half along the middle line.', 'Finally, fold each side down to make the wings.'],
      ['Hold the plane under the wings and throw it gently.', 'If it falls too quickly, try bending the back of the wings up a little.', "Never throw your plane at people's faces."]
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What does the article mainly teach?', opts: ['How to make and fly a paper plane', 'How to buy a toy plane', 'Why planes can fly in the sky', 'How to cut a piece of paper into a bird'], a: 0, why: '文章一步一步教你摺紙飛機，最後還教怎麼射、怎麼調整。', ev: ['A paper plane is easy to make'] },
      { id: 'q2', k: 'detail', q: 'How many pieces of paper do you need?', opts: ['One', 'Two', 'Three', 'Four'], a: 0, why: '第一段說：只需要一張紙。', ev: ['All you need is one piece of paper.'] },
      { id: 'q3', k: 'vocab', q: 'What does "gently" mean here?', opts: ['輕輕地', '用力地', '很快地', '往下地'], a: 0, why: '拿著機翼下面，「輕輕地」把飛機送出去，gently 就是輕輕地。', ev: ['throw it gently'] },
      { id: 'q4', k: 'ref', q: 'What does "it" mean in "If it falls too quickly"?', opts: ['The plane', 'The paper', 'The wing', 'The middle line'], a: 0, why: '射出去以後掉太快的是「它」，指的是你射出去的紙飛機。', ev: ['If it falls too quickly'] }
    ] },
]);
