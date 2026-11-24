/* english-reading/data/a3.js — 作者 3 的 38 篇（篇號、主題範圍見 english-reading/CONTRACT.md §8）。只改這一個檔；改完跑 node english-reading/check.js a3 */
window.DATA_ER = (window.DATA_ER || []).concat([
  // ===================== 易 e036～e050 =====================
  { id: 'e036', lv: 1, genre: 'story', topic: 'home', title: 'The Sock Thief', zh: '偷襪子的小偷', gloss: { thief: '小偷' }, names: ['Lucky'],
    body: [
      ['Every morning, Sam puts on his socks.', 'But today he has only one blue sock.', 'Where is the other one?'],
      ['He looks in his bed.', 'He looks behind the door.'],
      ['Then Sam sees his dog, Lucky.', 'Lucky is in his little bed.', 'Under him are five socks!', "One is blue, and four are Dad's.", 'Sam laughs and says, "You are a sock thief!"']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where does Sam find the blue sock?', opts: ['Under his dog', 'In his bed', 'Behind the door', "In Dad's bag"], a: 0, why: '第三段說：五隻襪子就壓在小狗 Lucky 的身體下面，藍襪子也在裡面。', ev: ['Under him are five socks!'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 3, who does "him" mean?', opts: ['Lucky', 'Sam', 'Dad', 'Mom'], a: 0, why: '前一句說 Lucky 在牠的小床上，「在他下面有五隻襪子」的他就是狗狗 Lucky。', ev: ['Under him are five socks!'] },
      { id: 'q3', k: 'infer', q: 'Why does Sam call Lucky "a sock thief"?', opts: ['Lucky takes the socks to his bed.', 'Lucky eats all of the blue socks.', 'Lucky buys new socks for Dad.', 'Lucky plays with Mom in the yard.'], a: 0, why: '襪子全都在 Lucky 的小床上 → 是牠把襪子拿走的，所以山姆笑牠是襪子小偷。', ev: ['Lucky is in his little bed.', 'Under him are five socks!'] }
    ] },
  { id: 'e037', lv: 1, genre: 'notice', topic: 'home', title: 'Family Cleaning Day', zh: '全家大掃除日',
    body: [
      { h: 'Family Cleaning Day' },
      ['This Saturday is our family cleaning day.', 'We will start at nine in the morning.', 'Dad will wash the windows.', 'Mom will clean the kitchen.', 'Ben and Amy will clean their bedrooms.', 'Grandpa will take out the trash.', 'At twelve, we will eat lunch together.', 'After lunch, we can watch a movie.'],
      { h: 'From Mom' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will Dad do?', opts: ['Wash the windows', 'Clean the kitchen', 'Take out the trash', 'Clean the bedrooms'], a: 0, why: '告示寫：爸爸要洗窗戶；廚房是媽媽、垃圾是爺爺。', ev: ['Dad will wash the windows.'] },
      { id: 'q2', k: 'detail', q: 'When will the family start cleaning?', opts: ['At nine on Saturday', 'At twelve on Saturday', 'At nine on Sunday', 'At twelve on Sunday'], a: 0, why: '告示說這個星期六是大掃除日，早上九點開始；十二點是吃午餐。', ev: ['This Saturday is our family cleaning day.', 'We will start at nine in the morning.'] },
      { id: 'q3', k: 'vocab', q: 'What does "trash" mean here?', opts: ['垃圾', '衣服', '窗戶', '午餐'], a: 0, why: 'trash 是「垃圾」：爺爺負責把垃圾拿出去。', ev: ['Grandpa will take out the trash.'] }
    ] },
  { id: 'e038', lv: 1, genre: 'dialogue', topic: 'food', title: 'At the Breakfast Shop', zh: '在早餐店',
    body: [
      { who: 'Mrs. Wang', s: ['Good morning, Ben!', 'What do you want today?'] },
      { who: 'Ben', s: ['I want a hamburger, please.'] },
      { who: 'Mrs. Wang', s: ['Do you want a drink, too?'] },
      { who: 'Ben', s: ['Yes.', 'Can I have a cup of hot milk?'] },
      { who: 'Mrs. Wang', s: ['Sorry, the hot milk is all gone.', 'We have cold milk and hot tea.'] },
      { who: 'Ben', s: ['Then I want cold milk.', 'How much is it?'] },
      { who: 'Mrs. Wang', s: ['It is NT$55.', 'Have a nice day at school!'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Ben drink?', opts: ['Cold milk', 'Hot milk', 'Hot tea', 'Cold tea'], a: 0, why: '王太太說熱牛奶賣完了，班就改點冷牛奶。', ev: ['Then I want cold milk.'] },
      { id: 'q2', k: 'detail', q: 'How much does Ben pay?', opts: ['NT$55', 'NT$50', 'NT$65', 'NT$45'], a: 0, why: '王太太最後說：一共 55 元。', ev: ['It is NT$55.'] },
      { id: 'q3', k: 'infer', q: 'Where will Ben probably go after breakfast?', opts: ['To school', 'To the park', 'To the zoo', 'To the hospital'], a: 0, why: '王太太祝班「在學校有美好的一天」→ 班吃完早餐要去上學。', ev: ['Have a nice day at school!'] }
    ] },
  { id: 'e039', lv: 1, genre: 'diary', topic: 'festival', title: "New Year at Grandma's House", zh: '在奶奶家過年', gloss: { envelope: '紅包袋' },
    body: [
      { h: 'Sunday, February 1' },
      ['This year, the first day of the New Year is February 1.', "We are at Grandma's house in Tainan.", 'Everyone wears red clothes.'],
      ['Grandma gives me a red envelope.', 'There is money in it!', 'I say, "Thank you, Grandma."', 'Mom says I can buy one book with it.'],
      ['I want to save the rest for a new bike.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Grandma give the writer?', opts: ['A red envelope', 'A new book', 'Red clothes', 'A new bike'], a: 0, why: '第二段說：奶奶給我一個紅包。', ev: ['Grandma gives me a red envelope.'] },
      { id: 'q2', k: 'ref', q: 'In "There is money in it," what does "it" mean?', opts: ['The red envelope', "Grandma's red clothes", 'The new book', 'The new bike'], a: 0, why: '「它」指前一句奶奶給的紅包：紅包裡面有錢。', ev: ['There is money in it!'] },
      { id: 'q3', k: 'main', q: 'What is the diary mainly about?', opts: ['Getting a red envelope at New Year', 'Buying a new bike with Mom', 'Cooking New Year food with Grandma', 'Taking a train to Tainan'], a: 0, why: '日記寫過年第一天在奶奶家拿到紅包，還想好錢要怎麼用。', ev: ['This year, the first day of the New Year is February 1.'] }
    ] },
  { id: 'e040', lv: 1, genre: 'schedule', topic: 'family', title: 'Our Sunday Plan', zh: '我們的星期天計畫',
    body: [
      ['My family has a plan for Sunday.', 'Here it is.'],
      { table: [['Time', 'What we do'], ['8:00 a.m.', 'Eat breakfast at home'], ['10:00 a.m.', 'See Grandpa and Grandma'], ['12:30 p.m.', 'Have lunch with them'], ['3:00 p.m.', 'Go to the park'], ['6:00 p.m.', 'Cook dinner together']] },
      ['My little sister wants to go to the park early.', 'But Dad says we must see Grandpa first.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will the family do at 3:00 p.m.?', opts: ['Go to the park', 'Have lunch', 'See Grandpa and Grandma', 'Cook dinner together'], a: 0, why: '表上寫下午三點要去公園。', ev: ['3:00 p.m.'] },
      { id: 'q2', k: 'ref', q: 'In the table, who does "them" mean in "Have lunch with them"?', opts: ['Grandpa and Grandma', 'Dad and Mom', 'The writer and the sister', 'The people at the park'], a: 0, why: '「他們」指前一列要去看的爺爺奶奶：中午和爺爺奶奶一起吃午餐。', ev: ['Have lunch with them'] },
      { id: 'q3', k: 'infer', q: 'How does the little sister probably feel about the park?', opts: ['She wants to go there soon.', 'She does not like the park.', 'She is afraid of the park.', 'She thinks the park is too far.'], a: 0, why: '妹妹想要早一點去公園 → 她很想快點去，很期待。', ev: ['My little sister wants to go to the park early.'] }
    ] },
  { id: 'e041', lv: 1, genre: 'info', topic: 'food', title: 'Bananas', zh: '香蕉',
    body: [
      ['Bananas are a yellow fruit.', 'Many bananas grow in Taiwan.', 'Taiwan is warm, and bananas like warm weather.'],
      ['A banana is green when it is young.', 'Then it turns yellow.', 'When it turns a little brown, it is very sweet.'],
      ['Bananas are easy to eat.', 'You do not need to cook them.', 'Just open it and eat!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What color is a young banana?', opts: ['Green', 'Yellow', 'Brown', 'Red'], a: 0, why: '第二段說：香蕉還小、還沒熟的時候是綠色的。', ev: ['A banana is green when it is young.'] },
      { id: 'q2', k: 'vocab', q: 'What does "sweet" mean here?', opts: ['甜的', '酸的', '苦的', '辣的'], a: 0, why: 'sweet 是「甜的」：香蕉變得有一點咖啡色的時候最甜。', ev: ['it is very sweet'] },
      { id: 'q3', k: 'main', q: 'What is the article mainly about?', opts: ['Bananas', 'Warm weather', 'Fruit shops', 'Cooking food'], a: 0, why: '整篇都在介紹香蕉：在哪裡長、顏色怎麼變、怎麼吃。', ev: ['Bananas are a yellow fruit.'] }
    ] },
  { id: 'e042', lv: 1, genre: 'howto', topic: 'food', title: 'Make a Ham Sandwich', zh: '做火腿三明治',
    body: [
      ['You can make a sandwich for breakfast.'],
      { h: 'You need' },
      { table: [['Food', 'How many'], ['Bread', '2 pieces'], ['Ham', '1 piece'], ['Cheese', '1 piece']] },
      { h: 'How to make it' },
      ['First, put the ham on one piece of bread.', 'Next, put the cheese on the ham.', 'Then put the other bread on top.', 'Ask Mom or Dad to cut it in half.', 'Now eat it!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What do you put on the ham?', opts: ['The cheese', 'The other bread', 'Some milk', 'Another piece of ham'], a: 0, why: '第二步說：把起司放在火腿上面。', ev: ['Next, put the cheese on the ham.'] },
      { id: 'q2', k: 'ref', q: 'What does "it" mean in "cut it in half"?', opts: ['The sandwich', 'The cheese', 'The table', 'The ham'], a: 0, why: '「它」指已經疊好的三明治：請爸媽把三明治切成兩半。', ev: ['Ask Mom or Dad to cut it in half.'] },
      { id: 'q3', k: 'main', q: 'What is the article mainly about?', opts: ['How to make a sandwich', 'How to cut bread for Mom', 'What to drink for breakfast', 'Where to buy ham and cheese'], a: 0, why: '文章列出材料和步驟，教你自己做火腿三明治。', ev: ['You can make a sandwich for breakfast.'] }
    ] },
  { id: 'e043', lv: 1, genre: 'letter', topic: 'family', title: "Happy Mother's Day", zh: '母親節快樂',
    body: [
      { h: 'Dear Mom,' },
      ["Happy Mother's Day!", 'Thank you for cooking dinner for us every day.', 'You also help me with my homework.', 'When I am sick, you stay with me.'],
      ['Today you do not need to cook.', 'Dad and I will make dinner for you.', 'Please sit on the sofa and rest.'],
      ['I love you very much.'],
      { h: 'Love, Mia' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Mia write this card?', opts: ['To thank her mom', 'To ask for new homework', 'To say sorry to Dad', 'To ask Mom to cook'], a: 0, why: '卡片一開頭祝媽媽母親節快樂，接著一件一件謝謝媽媽為她做的事。', ev: ['Thank you for cooking dinner for us every day.'] },
      { id: 'q2', k: 'detail', q: 'Who will make dinner today?', opts: ['Mia and Dad', 'Mom', 'Mom and Mia', 'Grandma'], a: 0, why: '第二段說：今天爸爸和我要煮晚餐給媽媽吃。', ev: ['Dad and I will make dinner for you.'] },
      { id: 'q3', k: 'vocab', q: 'What does "rest" mean here?', opts: ['休息', '打掃', '煮飯', '寫功課'], a: 0, why: 'rest 是「休息」：請媽媽坐在沙發上好好休息。', ev: ['Please sit on the sofa and rest.'] }
    ] },
  { id: 'e044', lv: 1, genre: 'story', topic: 'festival', title: 'Who Is This Cat?', zh: '這隻貓是誰？', gloss: { costume: '裝扮的衣服' },
    body: [
      ['It is Halloween.', 'Ben puts on a black cat costume.', 'He has two small ears and a long tail.'],
      ["He goes to Grandma's door.", 'Grandma opens the door.', 'She says, "Hello, little black cat!"', 'Then she gives him some candy.'],
      ['Ben laughs and says, "Grandma, it is me!"', 'Grandma laughs, too.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Ben wear on Halloween?', opts: ['A black cat costume', 'A big dog costume', 'His red clothes', 'A white cat costume'], a: 0, why: '第一段說：班穿上一套黑貓裝。', ev: ['Ben puts on a black cat costume.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, who does "him" mean?', opts: ['Ben', 'Grandma', 'Mom', 'A cat from the street'], a: 0, why: '奶奶給「他」糖果，他就是穿黑貓裝來奶奶家門口的班。', ev: ['Then she gives him some candy.'] },
      { id: 'q3', k: 'vocab', q: 'What does "tail" mean here?', opts: ['尾巴', '耳朵', '鼻子', '腳'], a: 0, why: 'tail 是「尾巴」：黑貓裝有兩個小耳朵和一條長尾巴。', ev: ['a long tail'] }
    ] },
  { id: 'e045', lv: 1, genre: 'dialogue', topic: 'home', title: 'A Rainy Day at Home', zh: '下雨天在家',
    body: [
      { who: 'Lily', s: ['Mom, it is raining.', 'We cannot go to the park.'] },
      { who: 'Mom', s: ['That is OK.', 'We can do something fun at home.'] },
      { who: 'Lily', s: ['Like what?'] },
      { who: 'Mom', s: ['We can make cookies in the kitchen.'] },
      { who: 'Lily', s: ['Yes!', 'Can Leo help, too?'] },
      { who: 'Mom', s: ['Sure.', 'Then you two can draw pictures, too.'] },
      { who: 'Lily', s: ['A rainy day is not so bad!'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will Lily and Mom make?', opts: ['Cookies', 'A cake', 'Lunch', 'Hot tea'], a: 0, why: '媽媽說：我們可以在廚房做餅乾。', ev: ['We can make cookies in the kitchen.'] },
      { id: 'q2', k: 'infer', q: 'How does Lily probably feel at the end?', opts: ['Happy', 'Sad', 'Angry', 'Tired'], a: 0, why: '一開始莉莉因為下雨不能去公園，最後她說「下雨天也沒那麼糟」→ 她變開心了。', ev: ['A rainy day is not so bad!'] },
      { id: 'q3', k: 'main', q: 'What are Lily and Mom mainly talking about?', opts: ['What to do on a rainy day', 'How to get to the park', 'What to buy at the shop', 'Who will clean the kitchen'], a: 0, why: '因為下雨不能出門，整段對話都在想：在家可以做什麼好玩的事。', ev: ['We can do something fun at home.'] }
    ] },
  { id: 'e046', lv: 1, genre: 'notice', topic: 'festival', title: 'Christmas Party for Kids', zh: '兒童聖誕派對', names: ['Santa'],
    body: [
      { h: 'Christmas Party for Kids' },
      ['Come to our Christmas party on the first floor!', 'It is on Saturday, December 20.', 'The party starts at 2:00 p.m.'],
      ['We will sing songs and play games.', 'Santa will give a small gift to every child.', 'Please bring one cookie or one fruit to share.', 'See you there!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What time does the party start?', opts: ['At 2:00 p.m.', 'At 12:00 p.m.', 'At 2:00 a.m.', 'At 4:00 p.m.'], a: 0, why: '告示寫：派對下午兩點開始。', ev: ['The party starts at 2:00 p.m.'] },
      { id: 'q2', k: 'main', q: 'What is the notice mainly about?', opts: ['A Christmas party for kids', 'A cookie class in December', 'A new game for Christmas', 'A trip to see Santa'], a: 0, why: '整張告示都在邀請小朋友來參加聖誕派對：時間、活動、要帶什麼。', ev: ['Come to our Christmas party on the first floor!'] },
      { id: 'q3', k: 'ref', q: 'In the last line, what does "there" mean?', opts: ['At the Christmas party', "At Santa's house", 'At the park', 'At school'], a: 0, why: '「那裡」指告示說的聖誕派對（在一樓）：我們派對上見。', ev: ['See you there!'] }
    ] },
  { id: 'e047', lv: 1, genre: 'diary', topic: 'home', title: 'The Lights Go Out', zh: '停電的晚上',
    body: [
      { h: 'Friday Night' },
      ['Tonight all the lights in our home go out.', 'It is very dark.', 'My little brother is afraid.'],
      ['Dad finds a big candle.', 'We sit around it in the living room.', 'Mom tells us a funny story.', 'We all laugh.'],
      ['After one hour, the lights come back.', 'My brother says, "Can we turn them off again?"']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Dad find?', opts: ['A big candle', 'A funny book', 'A new light', 'A small cake'], a: 0, why: '第二段說：爸爸找到一根大蠟燭。', ev: ['Dad finds a big candle.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, what does "it" mean?', opts: ['The candle', 'The living room', 'The story', 'The light'], a: 0, why: '「它」指爸爸找到的大蠟燭：全家圍著蠟燭坐在客廳。', ev: ['We sit around it in the living room.'] },
      { id: 'q3', k: 'infer', q: 'Why does the brother want to turn the lights off again?', opts: ['He had fun with his family.', 'He wants to go to bed very early.', 'He is still afraid of the dark.', 'He wants to find the big candle.'], a: 0, why: '停電時全家圍著蠟燭聽故事、一起笑 → 弟弟覺得很好玩，才想再關燈一次。', ev: ['We all laugh.', 'Can we turn them off again?'] }
    ] },
  { id: 'e048', lv: 1, genre: 'story', topic: 'food', title: 'One Big Bowl', zh: '一大碗冰', gloss: { mango: '芒果' },
    body: [
      ['It is a hot day.', 'Tom and his sister Nina go to an ice shop.', 'They have money for only one bowl of ice.'],
      ['The mango ice is very big.', 'Tom wants all the mango on top.', 'Nina wants it, too.'],
      ['Then Tom has an idea.', 'He gets two spoons.', 'Tom takes one piece of mango, and Nina takes the next one.', 'Now they are both happy.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How many bowls of ice do they buy?', opts: ['One', 'Two', 'Three', 'Four'], a: 0, why: '第一段說：他們的錢只夠買一碗冰。', ev: ['only one bowl of ice'] },
      { id: 'q2', k: 'ref', q: 'What does "it" mean in "Nina wants it, too"?', opts: ['The mango on top', 'The two spoons', 'The bowl of hot soup', 'The ice shop'], a: 0, why: '「它」指前一句湯姆想要的、放在上面的芒果：妮娜也想要。', ev: ['Nina wants it, too.'] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ['Two kids share a bowl of ice.', 'Tom buys a new spoon for Nina.', 'Nina makes mango ice at home.', 'Tom and Nina fight on a hot day.'], a: 0, why: '整篇講湯姆和妮娜只有一碗冰，最後想辦法一人一塊芒果、一起分著吃。', ev: ['Tom takes one piece of mango, and Nina takes the next one.'] }
    ] },
  { id: 'e049', lv: 1, genre: 'info', topic: 'home', title: 'Save Water at Home', zh: '在家省水',
    body: [
      ['We need water every day.', 'We use it in many ways at home.'],
      ['Here are some easy ways to save water.', 'Turn off the water when you brush your teeth.', 'Take a short shower.', 'Use the water from washing rice to water the plants.'],
      ['Small things can help a lot.', "Let's save water together!"]
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['Ways to save water at home', 'How to wash rice for dinner', 'How to brush your teeth well', 'Why plants need a lot of water'], a: 0, why: '文章一條一條教大家：在家裡可以怎麼省水。', ev: ['Here are some easy ways to save water.'] },
      { id: 'q2', k: 'detail', q: 'What can you do with the water from washing rice?', opts: ['Water the plants', 'Take a shower', 'Brush your teeth', 'Cook dinner'], a: 0, why: '第二段說：洗米的水可以拿來澆花草。', ev: ['Use the water from washing rice to water the plants.'] },
      { id: 'q3', k: 'vocab', q: 'What does "short" mean in "Take a short shower"?', opts: ['短的', '冷的', '熱的', '長的'], a: 0, why: 'short 是「短的」：洗澡時間短一點，就能省水。', ev: ['Take a short shower.'] }
    ] },
  { id: 'e050', lv: 1, genre: 'story', topic: 'family', title: "Baby's First Word", zh: '寶寶說的第一個字',
    body: [
      ['Kate has a baby brother.', 'He is one year old.', 'Every day, Mom says, "Say Mom!"', 'Dad says, "Say Dad!"'],
      ['But the baby does not say a word.', 'He just smiles and claps.'],
      ['One morning, Kate gives him a banana.', 'The baby looks at her and says, "Kate!"', 'Mom and Dad look at each other and laugh.', 'Kate is so happy.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "What is the baby's first word?", opts: ['Kate', 'Mom', 'Dad', 'Banana'], a: 0, why: '寶寶看著凱特，說出「Kate！」，這是他說的第一個字。', ev: ['The baby looks at her and says, "Kate!"'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 3, who does "her" mean?', opts: ['Kate', 'Mom', 'The baby', 'Grandma'], a: 0, why: '「她」指拿香蕉給寶寶的凱特：寶寶看著凱特說話。', ev: ['The baby looks at her and says, "Kate!"'] },
      { id: 'q3', k: 'infer', q: 'Why is Kate so happy?', opts: ['Her brother says her name first.', 'She gets a banana from Mom.', 'The baby goes to sleep early.', 'The baby claps his hands for Dad.'], a: 0, why: '爸媽每天教寶寶叫爸媽，寶寶卻先叫了凱特的名字 → 凱特當然很開心。', ev: ['The baby looks at her and says, "Kate!"'] }
    ] },
  // ===================== 中 m031～m044 =====================
  { id: 'm031', lv: 2, genre: 'story', topic: 'family', title: 'Dad Cooks Dinner', zh: '爸爸煮晚餐', gloss: { salty: '鹹的' },
    body: [
      ['Last Friday, Mom was sick in bed.', 'So Dad said, "I will cook dinner tonight!"', 'Jenny and her brother looked at each other.', 'Dad never cooked at home.'],
      ['Dad made fried rice and egg soup.', 'The kitchen was very dirty, and the rice was a little black.', 'The soup was too salty, so everyone drank a lot of water.'],
      ['But Mom smiled and ate all of her rice.', 'She said, "This is the best dinner because you made it for me."', 'The next day, Dad asked Grandma to teach him how to cook.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why did Dad cook dinner last Friday?', opts: ['Mom was sick in bed.', 'Grandma asked him to cook.', 'Jenny wanted fried rice.', 'Mom was busy at work.'], a: 0, why: '第一段說：上星期五媽媽生病躺在床上，所以爸爸說今晚他來煮。', ev: ['Last Friday, Mom was sick in bed.'] },
      { id: 'q2', k: 'vocab', q: 'What does "never" mean in paragraph 1?', opts: ['從來沒有', '常常', '有時候', '每天'], a: 0, why: 'never 是「從來沒有」：爸爸以前從來沒在家煮過飯，所以姊弟倆才互看一眼。', ev: ['Dad never cooked at home.'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 3, who does "him" mean?', opts: ['Dad', "Jenny's brother", 'Grandpa', 'Mom'], a: 0, why: '「他」指爸爸：隔天爸爸請奶奶教他怎麼做菜。', ev: ['The next day, Dad asked Grandma to teach him how to cook.'] },
      { id: 'q4', k: 'infer', q: 'Why did Dad ask Grandma to teach him?', opts: ['He wanted to cook better next time.', 'He wanted Grandma to cook every day.', 'He did not like fried rice.', 'Mom asked him to clean the kitchen.'], a: 0, why: '爸爸第一次煮的飯有點焦、湯又太鹹 → 他想學好，下次煮得更好吃。', ev: ['The soup was too salty, so everyone drank a lot of water.', 'The next day, Dad asked Grandma to teach him how to cook.'] }
    ] },
  { id: 'm032', lv: 2, genre: 'letter', topic: 'festival', title: 'A Moon Festival Barbecue', zh: '中秋節烤肉邀請', gloss: { barbecue: '烤肉', pomelo: '柚子' },
    body: [
      { h: 'Hi Kevin,' },
      ['How is your new school in Taichung?', 'I have good news.', 'This year, my family will have a barbecue for the Moon Festival.'],
      ['It will be on the top floor of our building at six in the evening.', 'Dad will cook meat and vegetables.', 'Mom will cut a big pomelo for everyone.', 'My job is to make lemon tea.'],
      ['Can you and your parents come?', 'Please come early, and we can play games before dinner.', 'Please write back soon!'],
      { h: 'Your cousin, Andy' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Andy write this email?', opts: ['To ask Kevin to come to a barbecue', 'To tell Kevin about his new school', 'To ask Kevin for some lemon tea', 'To say thank you for a pomelo'], a: 0, why: 'Andy 告訴 Kevin 家裡中秋節要烤肉，問他和爸媽能不能一起來。', ev: ['Can you and your parents come?'] },
      { id: 'q2', k: 'detail', q: 'Where will the barbecue be?', opts: ['On the top floor of the building', 'In the park near the school', "At Kevin's new school", "In Andy's kitchen"], a: 0, why: '第二段說：烤肉在大樓的頂樓，晚上六點開始。', ev: ['on the top floor of our building'] },
      { id: 'q3', k: 'detail', q: 'What will Andy do for the barbecue?', opts: ['Make lemon tea', 'Cook meat and vegetables', 'Cut a big pomelo', 'Play games with Dad'], a: 0, why: '信上說「我的工作是泡檸檬茶」；烤肉是爸爸、切柚子是媽媽。', ev: ['My job is to make lemon tea.'] },
      { id: 'q4', k: 'infer', q: 'Where does Kevin probably live now?', opts: ['In Taichung', 'In Tainan', 'In Taipei', 'In Kaohsiung'], a: 0, why: 'Andy 問 Kevin「你在台中的新學校好嗎？」→ 可以推想 Kevin 現在住在台中。', ev: ['How is your new school in Taichung?'] }
    ] },
  { id: 'm033', lv: 2, genre: 'dialogue', topic: 'food', title: 'Dinner at the Night Market', zh: '夜市晚餐',
    body: [
      { who: 'Dad', s: ['Here is NT$100 for each of you.', 'You can buy any food you like.'] },
      { who: 'Emma', s: ['I want a big chicken steak.', 'How much is it?'] },
      { who: 'Dad', s: ['It is NT$80.', 'Then you will have only NT$20 left.'] },
      { who: 'Leo', s: ['I want to try many small foods.', 'Fried noodles are NT$40, and fish soup is NT$35.'] },
      { who: 'Emma', s: ['Leo, you can buy one more thing with NT$25.'] },
      { who: 'Leo', s: ['Papaya milk is NT$25.', 'I will get a cup!'] },
      { who: 'Dad', s: ['Good thinking.', "Let's meet at the temple door in twenty minutes."] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much is the chicken steak?', opts: ['NT$80', 'NT$20', 'NT$40', 'NT$100'], a: 0, why: '艾瑪問雞排多少錢，爸爸說：80 元。', ev: ['It is NT$80.'] },
      { id: 'q2', k: 'detail', q: 'What does Leo buy?', opts: ['Noodles, fish soup, and papaya milk', 'A chicken steak, fish soup, and lemon tea', 'A chicken steak and papaya milk', 'Fried noodles and a chicken steak'], a: 0, why: 'Leo 買了炒麵（40 元）、魚湯（35 元），剩下的 25 元再買一杯木瓜牛奶。', ev: ['Fried noodles are NT$40, and fish soup is NT$35.', 'Papaya milk is NT$25.'] },
      { id: 'q3', k: 'ref', q: 'Emma asks, "How much is it?" What does "it" mean?', opts: ['The chicken steak', 'The papaya milk', 'The fish soup', 'The fried noodles'], a: 0, why: '艾瑪剛說想買一大塊雞排，接著問「它多少錢」→ 它就是雞排。', ev: ['How much is it?'] },
      { id: 'q4', k: 'infer', q: 'Why does Emma tell Leo about NT$25?', opts: ['He still has NT$25 to use.', 'She wants to use his money.', 'Papaya milk is free today.', 'Dad gives him NT$25 more.'], a: 0, why: '每人 100 元，Leo 花了 40＋35＝75 元 → 還剩 25 元，可以再買一樣東西。', ev: ['Leo, you can buy one more thing with NT$25.'] }
    ] },
  { id: 'm034', lv: 2, genre: 'schedule', topic: 'festival', title: 'Dragon Boat Day at the River', zh: '河邊的端午節活動',
    body: [
      ['Come and enjoy the Dragon Boat Festival at Green River Park!', 'Everything is free.'],
      { h: 'Saturday Plan' },
      { table: [['Time', 'Fun', 'Place'], ['9:00 a.m.', 'Make rice dumplings', 'Room A'], ['10:30 a.m.', 'Dragon boat races', 'The river'], ['12:00 p.m.', 'Free lunch', 'Room A'], ['2:00 p.m.', 'Paint a small dragon boat', 'Room B'], ['3:30 p.m.', 'Gifts for the boat teams', 'The river']] },
      ['Children under ten must come with a parent.', 'If it rains, the boat races will move to Sunday.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where can you make rice dumplings?', opts: ['In Room A', 'In Room B', 'By the river', 'At home'], a: 0, why: '表上寫：早上九點在 A 教室包粽子。', ev: ['Make rice dumplings'] },
      { id: 'q2', k: 'detail', q: 'What time do the dragon boat races start?', opts: ['10:30 a.m.', '9:00 a.m.', '12:00 p.m.', '3:30 p.m.'], a: 0, why: '表上寫：划龍舟比賽上午 10:30 在河邊。', ev: ['Dragon boat races'] },
      { id: 'q3', k: 'infer', q: 'Tim is eight years old. What does he need to do?', opts: ['Come with his mom or dad', 'Bring his own lunch', 'Pay for the boat races', 'Paint a dragon boat'], a: 0, why: '說明寫十歲以下要有爸媽陪；提姆八歲 → 他要跟爸爸或媽媽一起來。', ev: ['Children under ten must come with a parent.'] },
      { id: 'q4', k: 'vocab', q: 'What does "free" mean in "Everything is free"?', opts: ['免費的', '有空的', '很多的', '好玩的'], a: 0, why: 'free 在這裡是「免費的」：所有活動都不用錢，連午餐也是。', ev: ['Everything is free.'] }
    ] },
  { id: 'm035', lv: 2, genre: 'info', topic: 'festival', title: 'Getting Ready for Chinese New Year', zh: '準備過年',
    body: [
      ['Chinese New Year is the biggest holiday in Taiwan.', 'Before the New Year, families get ready in many ways.'],
      ['First, they clean every room in the house.', 'People believe cleaning takes away the bad luck of the old year.', 'Then they put red paper with good words on their doors.'],
      ["On New Year's Eve, everyone in the family eats a big dinner together.", 'Many people eat fish because the Chinese word for fish sounds like "more."', 'Children often stay up late that night.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['How families get ready for New Year', 'Why fish is good for children', 'How to write good words on red paper', 'Why children go to bed late'], a: 0, why: '文章介紹過年前後家家戶戶做的準備：大掃除、貼春聯、吃年夜飯。', ev: ['Before the New Year, families get ready in many ways.'] },
      { id: 'q2', k: 'detail', q: 'Why do people clean the house before New Year?', opts: ['To take away bad luck', 'To find red paper', 'To cook a big dinner', 'To catch more fish'], a: 0, why: '第二段說：大家相信打掃可以把舊的一年的壞運氣帶走。', ev: ['People believe cleaning takes away the bad luck of the old year.'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 2, who does "they" mean?', opts: ['Families', 'Children', 'Fish', 'Good words'], a: 0, why: '「他們」指第一段說的家家戶戶：過年前每一家都會打掃家裡。', ev: ['First, they clean every room in the house.'] },
      { id: 'q4', k: 'detail', q: 'Why do many people eat fish at New Year?', opts: ['The word for fish sounds like "more."', 'Fish is easy to cook for a big family.', 'Children like fish very much.', 'Fish can take away bad luck.'], a: 0, why: '第三段說：中文的「魚」聽起來像「餘」，有「年年有餘、越來越多」的好意思。', ev: ['sounds like "more."'] }
    ] },
  { id: 'm036', lv: 2, genre: 'howto', topic: 'home', title: 'How to Wash the Dishes', zh: '怎麼洗碗', gloss: { soap: '洗碗精', sponge: '菜瓜布' },
    body: [
      ['After dinner, you can help your family wash the dishes.', 'It is easy if you do it like this.'],
      { h: 'What to Do' },
      ['First, put away the food that is left on the plates.', 'Next, put a little soap on a sponge.', 'Wash the bowls and plates one by one.', 'Then wash them again with clean water.', 'Finally, put them in a basket to dry.'],
      ['Be careful with glasses and knives.', 'If a glass breaks, do not pick it up with your hands.', 'Ask Mom or Dad for help.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What do you do right after you put soap on the sponge?', opts: ['Wash the bowls and plates', 'Wash them with clean water', 'Put them in a basket', 'Put away the food'], a: 0, why: '加了洗碗精以後，下一步就是把碗盤一個一個洗乾淨。', ev: ['Wash the bowls and plates one by one.'] },
      { id: 'q2', k: 'ref', q: 'In "wash them again with clean water," what does "them" mean?', opts: ['The bowls and plates', 'The sponges', 'Your hands', 'The food on the table'], a: 0, why: '「它們」指前一句洗過的碗和盤子：再用清水沖一次。', ev: ['Then wash them again with clean water.'] },
      { id: 'q3', k: 'vocab', q: 'What does "careful" mean here?', opts: ['小心的', '快樂的', '忙碌的', '乾淨的'], a: 0, why: 'careful 是「小心的」：碰到玻璃杯和刀子要特別小心。', ev: ['Be careful with glasses and knives.'] },
      { id: 'q4', k: 'infer', q: 'Why should you not pick up a broken glass with your hands?', opts: ['You may cut your hands.', 'The glass is too heavy.', 'The water is too hot.', 'The sponge is dirty.'], a: 0, why: '破掉的玻璃邊邊很尖 → 用手撿可能會割傷，所以要請爸媽幫忙。', ev: ['If a glass breaks, do not pick it up with your hands.'] }
    ] },
  { id: 'm037', lv: 2, genre: 'notice', topic: 'home', title: 'No Water on Tuesday', zh: '星期二停水通知',
    body: [
      { h: 'Notice to All Families' },
      ['The water in our building will stop on Tuesday, May 5.', 'It will stop from 9:00 a.m. to 5:00 p.m.', 'Workers will fix the old water pipes.'],
      ['Please keep some water in big bottles before Tuesday.', 'Do not use the washing machine that day.', 'The water may look a little yellow at first.', 'Let it run for one minute before you use it.'],
      ['Thank you for your help.'],
      { h: 'Building Office' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the notice mainly about?', opts: ['The water will stop for a day.', 'The building has a new office.', 'Families should buy new bottles.', 'The washing machine is broken.'], a: 0, why: '告示說星期二大樓要停水一天，也告訴大家要怎麼準備。', ev: ['The water in our building will stop on Tuesday, May 5.'] },
      { id: 'q2', k: 'detail', q: 'Why will the water stop?', opts: ['Workers will fix old pipes.', 'The water is too yellow.', 'The office is closed on Tuesday.', 'There is no rain this month.'], a: 0, why: '告示寫：工人要來修理舊的水管。', ev: ['Workers will fix the old water pipes.'] },
      { id: 'q3', k: 'detail', q: 'When will there be no water?', opts: ['From 9:00 a.m. to 5:00 p.m.', 'From 5:00 a.m. to 9:00 p.m.', 'For one minute', 'For one full week'], a: 0, why: '停水時間是星期二早上九點到下午五點。', ev: ['from 9:00 a.m. to 5:00 p.m.'] },
      { id: 'q4', k: 'infer', q: 'Why should people keep water in bottles?', opts: ['They can still use water on Tuesday.', 'Bottle water is sweeter.', 'The workers will need some water to drink.', 'It is good for the washing machine.'], a: 0, why: '星期二白天沒有水 → 先把水裝在大瓶子裡，停水的時候才有水可以用。', ev: ['Please keep some water in big bottles before Tuesday.'] }
    ] },
  { id: 'm038', lv: 2, genre: 'diary', topic: 'family', title: "Dad's Day Off", zh: '爸爸放假的一天',
    body: [
      { h: 'Wednesday, October 10' },
      ['Dad works late almost every night, so I do not see him much.', 'But today is a holiday, and he does not have to work.'],
      ['In the morning, we rode bikes along the river.', 'Dad was slower than me, and he said I was too fast!', 'At noon, we ate beef noodles at a small shop.'],
      ['In the afternoon, Dad slept on the sofa.', 'I put a blanket on him.', 'I hope he can have more days off.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did they eat at noon?', opts: ['Beef noodles', 'Fried rice', 'Chicken steak', 'Egg soup'], a: 0, why: '日記寫：中午我們在一家小店吃牛肉麵。', ev: ['we ate beef noodles at a small shop'] },
      { id: 'q2', k: 'vocab', q: 'What does "holiday" mean here?', opts: ['放假的日子', '上學的日子', '生日', '下雨天'], a: 0, why: 'holiday 是「假日」：今天放假，所以爸爸不用上班。', ev: ['But today is a holiday, and he does not have to work.'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 3, who does "him" mean?', opts: ['Dad', 'The writer', 'The shop owner', 'Grandpa'], a: 0, why: '「他」指在沙發上睡著的爸爸：我幫爸爸蓋上毯子。', ev: ['I put a blanket on him.'] },
      { id: 'q4', k: 'infer', q: 'How does the writer probably feel about Dad?', opts: ['Wants to spend more time with him', 'Angry because he is slow', 'Glad that he works late every night', 'Tired of riding bikes with him'], a: 0, why: '爸爸平常很晚下班，作者幫睡著的爸爸蓋毯子、希望他多放假 → 很愛爸爸、想多陪他。', ev: ['I hope he can have more days off.'] }
    ] },
  { id: 'm039', lv: 2, genre: 'story', topic: 'home', title: 'The New House', zh: '搬新家',
    body: [
      ["Last month, Ivy's family moved to a new house in Hsinchu.", 'Her new room was big and bright, but Ivy was not happy.', 'She missed her old room and her friends in Taipei.'],
      ['On the first night, she could not sleep.', 'The house was too quiet.', 'Then she heard a sound at the window.', 'A little girl next door was waving at her!'],
      ['The next day, the girl came to say hello.', 'Her name was Sophie, and she liked drawing, too.', 'Soon the two girls drew pictures together every weekend.', 'Ivy began to like her new home.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['A girl who starts to like her new home', 'A girl who wants to move back to Taipei', 'Two girls who go to the same school', 'A family that builds a big house'], a: 0, why: '艾薇一開始想念舊家、不開心，後來交到新朋友，慢慢喜歡上新家。', ev: ['Ivy began to like her new home.'] },
      { id: 'q2', k: 'detail', q: 'Why was Ivy not happy at first?', opts: ['She missed her old room and friends.', 'Her new room was too small and dark.', 'The girl next door was not very nice to her.', 'She did not like drawing.'], a: 0, why: '第一段說：她想念以前的房間和台北的朋友。', ev: ['She missed her old room and her friends in Taipei.'] },
      { id: 'q3', k: 'ref', q: 'What does "her" mean in "waving at her"?', opts: ['Ivy', 'Sophie', "Ivy's mom", 'The little girl'], a: 0, why: '「她」指那晚睡不著的艾薇：隔壁的小女孩在向艾薇揮手。', ev: ['A little girl next door was waving at her!'] },
      { id: 'q4', k: 'infer', q: 'Why did Ivy begin to like her new home?', opts: ['She made a new friend there.', 'Her room was very quiet at night.', 'She went back to Taipei often.', 'Her old friends came to see her.'], a: 0, why: '隔壁的 Sophie 也喜歡畫畫，兩人每個週末一起畫 → 交到新朋友，才開始喜歡新家。', ev: ['Soon the two girls drew pictures together every weekend.'] }
    ] },
  { id: 'm040', lv: 2, genre: 'dialogue', topic: 'family', title: 'Calling Grandma', zh: '打電話給阿嬤',
    body: [
      { who: 'Grandma', s: ['Hello?'] },
      { who: 'Leo', s: ['Hi, Grandma!', 'It is Leo.', 'Did you get my picture?'] },
      { who: 'Grandma', s: ['Yes, I did!', 'I put it on the wall in the living room.', 'Everyone who visits my house can see it.'] },
      { who: 'Leo', s: ['Great!', 'Grandma, how is your leg now?'] },
      { who: 'Grandma', s: ['It is much better, thank you.', 'I can walk to the market again.'] },
      { who: 'Leo', s: ['That is good.', 'We will come to see you this weekend.', 'Mom says she will make your favorite soup.'] },
      { who: 'Grandma', s: ['Wonderful!', 'I will make your favorite cake, then.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where did Grandma put the picture?', opts: ['On the living room wall', 'In her bedroom', 'At the market', 'On the kitchen door'], a: 0, why: '阿嬤說她把 Leo 的畫掛在客廳的牆上。', ev: ['I put it on the wall in the living room.'] },
      { id: 'q2', k: 'ref', q: 'Grandma says, "It is much better." What does "it" mean?', opts: ['Her leg', 'The picture', 'The soup', 'The market'], a: 0, why: 'Leo 剛問阿嬤的腳好點沒，阿嬤回答「它好多了」→ 它是阿嬤的腳。', ev: ['It is much better, thank you.'] },
      { id: 'q3', k: 'infer', q: 'What was probably wrong with Grandma before?', opts: ['Her leg was hurt.', 'She lost the picture.', 'She could not cook.', 'Her house was too cold.'], a: 0, why: 'Leo 問腳好點沒、阿嬤說又能走去市場了 → 之前她的腳受傷、不太能走路。', ev: ['Grandma, how is your leg now?', 'I can walk to the market again.'] },
      { id: 'q4', k: 'main', q: 'What is the phone call mainly about?', opts: ['Leo asks about Grandma and plans a visit.', 'Grandma teaches Leo how to make his favorite soup.', 'Leo asks Grandma to buy him a cake.', 'Grandma tells Leo about the market.'], a: 0, why: 'Leo 打電話問阿嬤有沒有收到畫、腳好不好，還說週末要去看她。', ev: ['We will come to see you this weekend.'] }
    ] },
  { id: 'm041', lv: 2, genre: 'info', topic: 'food', title: 'From Field to Bowl', zh: '一碗米飯的旅程',
    body: [
      ['Rice is the main food for many people in Taiwan.', 'But do you know how rice gets to your bowl?'],
      ['Farmers plant young rice in fields full of water.', 'The plants grow tall and green in the warm sun.', 'After about four months, the plants turn yellow.', 'Then farmers cut them and dry the rice.'],
      ['Next, machines take off the outside of the rice.', 'Now the rice is white and ready to cook.', 'In some parts of Taiwan, farmers grow rice two times a year.'],
      ['So the next time you eat rice, think of the farmers!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What color are the rice plants after about four months?', opts: ['Yellow', 'Green', 'White', 'Brown'], a: 0, why: '第二段說：大約四個月後，稻子會變成黃色。', ev: ['After about four months, the plants turn yellow.'] },
      { id: 'q2', k: 'ref', q: 'What does "them" mean in "farmers cut them"?', opts: ['The rice plants', 'The fields', 'The machines', 'The bowls'], a: 0, why: '「它們」指前一句變黃的稻子：農夫把稻子割下來，再把米曬乾。', ev: ['Then farmers cut them and dry the rice.'] },
      { id: 'q3', k: 'main', q: 'What is the best title for this article?', opts: ['How Rice Gets to Your Bowl', 'How to Cook White Rice', 'Farmers Who Make Machines', 'Why Rice Is Yellow'], a: 0, why: '文章從種稻、收割、去殼，一路說到變成碗裡的白飯。', ev: ['But do you know how rice gets to your bowl?'] },
      { id: 'q4', k: 'vocab', q: 'What does "ready" mean in paragraph 3?', opts: ['準備好的', '黃色的', '很貴的', '很硬的'], a: 0, why: 'ready 是「準備好的」：去殼後的白米已經可以拿去煮了。', ev: ['Now the rice is white and ready to cook.'] }
    ] },
  { id: 'm042', lv: 2, genre: 'schedule', topic: 'home', title: 'Who Does What This Week?', zh: '這星期誰做家事？',
    body: [
      ['In our home, everyone helps with the work at home.', 'Here is our plan for this week.'],
      { table: [['Day', 'Wash the dishes', 'Take out the trash'], ['Monday', 'Dad', 'Ben'], ['Tuesday', 'Mom', 'Amy'], ['Wednesday', 'Ben', 'Dad'], ['Thursday', 'Amy', 'Mom'], ['Friday', 'Grandma', 'Ben']] },
      ['On weekends, we all clean the house together.', 'If someone is sick, another person will do the job.', 'The person who does the most work gets to choose the Sunday movie!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Who takes out the trash on Wednesday?', opts: ['Dad', 'Ben', 'Mom', 'Amy'], a: 0, why: '表上星期三那一列：洗碗是 Ben，倒垃圾是爸爸。', ev: ['Wednesday'] },
      { id: 'q2', k: 'detail', q: 'Which day does Grandma wash the dishes?', opts: ['Friday', 'Monday', 'Thursday', 'Wednesday'], a: 0, why: '表上只有星期五那一列，洗碗的人是奶奶。', ev: ['Grandma'] },
      { id: 'q3', k: 'infer', q: 'Who will probably choose the Sunday movie?', opts: ['Ben', 'Dad', 'Mom', 'Grandma'], a: 0, why: '數一數表格：Ben 星期一、三、五都有工作，一共 3 次，比其他人多 → 應該是 Ben 選電影。', ev: ['The person who does the most work gets to choose the Sunday movie!'] },
      { id: 'q4', k: 'vocab', q: 'What does "choose" mean here?', opts: ['選擇', '打掃', '收看', '購買'], a: 0, why: 'choose 是「選擇」：做最多家事的人，可以決定星期天看哪一部電影。', ev: ['gets to choose the Sunday movie'] }
    ] },
  { id: 'm043', lv: 2, genre: 'letter', topic: 'food', title: 'Thank You for the Mangoes', zh: '謝謝你的芒果', gloss: { mango: '芒果' },
    body: [
      { h: 'Dear Mrs. Chen,' },
      ['Thank you for the box of mangoes from your farm in Tainan.', 'They were big, sweet, and very yellow.'],
      ['My family ate some after dinner every night.', 'Mom also made mango ice with them.', 'My little sister liked it so much that she ate two bowls!'],
      ['We have some mangoes left, so we will give them to our neighbors.', 'Please come to our home for tea next week.', 'I want to show you the mango cake I am learning to make.'],
      { h: 'Best wishes, Tina' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Tina write this letter?', opts: ['To thank Mrs. Chen for the mangoes', 'To ask Mrs. Chen for more mangoes', 'To sell mango cakes to her neighbors', 'To tell Mrs. Chen about her sister'], a: 0, why: '信一開頭就謝謝陳太太從台南農場送來一箱芒果，整封信都在說芒果多好吃。', ev: ['Thank you for the box of mangoes from your farm in Tainan.'] },
      { id: 'q2', k: 'detail', q: 'What did Mom make with the mangoes?', opts: ['Mango ice', 'Mango cake', 'Mango tea', 'Mango milk'], a: 0, why: '第二段說：媽媽用芒果做了芒果冰；芒果蛋糕是 Tina 自己正在學的。', ev: ['Mom also made mango ice with them.'] },
      { id: 'q3', k: 'ref', q: 'What does "them" mean in "give them to our neighbors"?', opts: ['The mangoes that are left', 'The neighbors', 'Mrs. Chen and her farm workers', 'The bowls of ice'], a: 0, why: '「它們」指同一句前面說的、還剩下的芒果：要把剩下的芒果送給鄰居。', ev: ['We have some mangoes left'] },
      { id: 'q4', k: 'detail', q: 'How many bowls of mango ice did the sister eat?', opts: ['Two', 'One', 'Three', 'Four'], a: 0, why: '信裡說妹妹太喜歡了，一口氣吃了兩碗。', ev: ['she ate two bowls'] }
    ] },
  { id: 'm044', lv: 2, genre: 'story', topic: 'food', title: 'The Ugly Dumplings', zh: '醜醜的水餃',
    body: [
      ['On Sunday, Grandma taught everyone in the family to make dumplings.', 'Her dumplings were small and pretty.', "Mom's and Dad's were good, too."],
      ['But Max was only six, and his dumplings looked very strange.', 'Some were too big, and some had meat coming out.', 'His sister laughed and called them "ugly dumplings."'],
      ['Max felt sad, but Grandma cooked all of them anyway.', "At dinner, everyone tried one of Max's dumplings.", 'Because they had so much meat, they tasted the best!', 'Now Max wants to make dumplings every Sunday.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Who taught the family to make dumplings?', opts: ['Grandma', 'Mom', 'Dad', 'Max'], a: 0, why: '第一段說：星期天奶奶教全家包水餃。', ev: ['Grandma taught everyone in the family to make dumplings.'] },
      { id: 'q2', k: 'vocab', q: 'What does "strange" mean here?', opts: ['奇怪的', '漂亮的', '好吃的', '很小的'], a: 0, why: 'strange 是「奇怪的」：麥克斯包的水餃有的太大、有的肉還跑出來。', ev: ['his dumplings looked very strange'] },
      { id: 'q3', k: 'ref', q: 'What does "they" mean in "they tasted the best"?', opts: ["Max's dumplings", "Grandma's dumplings", "Mom's and Dad's dumplings", 'The pieces of meat'], a: 0, why: '「它們」指前一句大家吃的麥克斯包的水餃：因為肉包得很多，所以最好吃。', ev: ['Because they had so much meat, they tasted the best!'] },
      { id: 'q4', k: 'main', q: 'What is the story mainly about?', opts: ['Ugly dumplings that taste great', 'How Grandma buys meat at the market', 'A boy who does not like dumplings', 'Why Mom makes pretty dumplings'], a: 0, why: '麥克斯的水餃被笑很醜，結果反而最好吃，他還想每個星期天都包。', ev: ['His sister laughed and called them "ugly dumplings."'] }
    ] },
  // ===================== 難 h022～h030 =====================
  { id: 'h022', lv: 3, genre: 'story', topic: 'festival', title: 'The Broken Lantern', zh: '破掉的燈籠', gloss: { bamboo: '竹子' },
    body: [
      ['Every year before the Lantern Festival, Mia and her grandpa make a paper lantern together.', 'This year, they decided to make a big rabbit lantern for her little brother, Leo.'],
      ['Grandpa cut the bamboo, and Mia painted the paper white and pink.', 'When it was finished, the rabbit had long ears and red eyes.'],
      ['On the night of the festival, Leo was so excited that he ran with the lantern.', "Suddenly he fell, and one of the rabbit's ears broke.", 'Leo cried because he thought everyone would be angry.'],
      ['Mia was sad, too, but she remembered what Grandpa always said.', '"Things can break, but we can fix them together."', 'At home, the three of them fixed the ear with tape and paper.', 'The rabbit looked a little funny, but Leo said it was the best lantern in the world.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['A family fixes a broken lantern together.', 'A boy wins a prize for the best lantern.', 'Grandpa buys a rabbit for Leo.', 'Mia learns how to draw a rabbit at school.'], a: 0, why: '燈籠被弄壞以後，大家沒有生氣，而是一起把它修好，這是故事的重點。', ev: ['At home, the three of them fixed the ear with tape and paper.'] },
      { id: 'q2', k: 'detail', q: 'What happened to the lantern?', opts: ["One of the rabbit's ears broke.", 'The red eyes fell off.', 'The paper turned black.', 'It was lost in the park.'], a: 0, why: '第三段說：Leo 跌倒，兔子燈籠的一隻耳朵斷了。', ev: ["one of the rabbit's ears broke"] },
      { id: 'q3', k: 'infer', q: 'Why did Leo say it was the best lantern in the world?', opts: ['His family made and fixed it with love.', 'It was bigger than every other lantern.', 'It had new red eyes.', 'He did not see the broken ear.'], a: 0, why: '兔子雖然修得有點好笑，但那是全家一起做、一起修好的 → 對 Leo 來說特別珍貴。', ev: ['The rabbit looked a little funny, but Leo said it was the best lantern in the world.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "it" mean in "When it was finished"?', opts: ['The rabbit lantern', 'The bamboo', 'The festival', 'The paper'], a: 0, why: '「它」指 Mia 和爺爺一起做的兔子燈籠：做好以後還有長耳朵和紅眼睛。', ev: ['When it was finished'] }
    ] },
  { id: 'h023', lv: 3, genre: 'info', topic: 'food', title: 'Why We Eat Rice Dumplings', zh: '端午節的粽子', gloss: { zongzi: '粽子', sticky: '黏黏的' },
    body: [
      ['The Dragon Boat Festival comes in early summer.', 'On this day, many families in Taiwan eat rice dumplings, or zongzi.'],
      ['A rice dumpling is made of sticky rice, meat, eggs, and other things.', 'People cover them with big leaves and cook them for a long time.', 'In the north and the south of Taiwan, people cook them in different ways.', 'Some families like to make them at home together.'],
      ['The festival is also famous for dragon boat races.', 'Children often get a small, colorful bag with sweet-smelling plants inside.'],
      ['The next time you eat a rice dumpling, eat it slowly.', 'It is sticky, so do not eat too much at one time!']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['Rice dumplings and the Dragon Boat Festival', 'How to win a dragon boat race', 'Why rice grows in early summer', 'How to make a colorful bag with sweet plants inside'], a: 0, why: '文章介紹端午節吃的粽子：用什麼做、怎麼煮、吃的時候要注意什麼。', ev: ['On this day, many families in Taiwan eat rice dumplings, or zongzi.'] },
      { id: 'q2', k: 'detail', q: 'What do people cover rice dumplings with?', opts: ['Big leaves', 'Red paper', 'Colorful bags', 'Small boxes'], a: 0, why: '第二段說：人們用大大的葉子把粽子包起來，再煮很久。', ev: ['People cover them with big leaves'] },
      { id: 'q3', k: 'ref', q: 'What does "them" mean in "cook them for a long time"?', opts: ['The rice dumplings', 'The big leaves', 'The families', 'The dragon boats'], a: 0, why: '「它們」指同一句前面用葉子包好的粽子：包好以後要煮很久。', ev: ['cook them for a long time'] },
      { id: 'q4', k: 'infer', q: 'Why does the writer say "do not eat too much at one time"?', opts: ['Too much sticky food may make you feel sick.', 'Rice dumplings cost a lot of money.', 'There are only a few dumplings each year.', 'You need to save some rice dumplings for the boat teams.'], a: 0, why: '粽子是糯米做的、黏黏的 → 一次吃太多，肚子可能會不舒服，所以作者提醒要慢慢吃。', ev: ['It is sticky, so do not eat too much at one time!'] }
    ] },
  { id: 'h024', lv: 3, genre: 'letter', topic: 'family', title: 'An Email to Dad', zh: '寫給在國外工作的爸爸',
    body: [
      { h: 'Hi Dad,' },
      ['How is your work in Osaka?', 'It has been two months since you left, and we all miss you a lot.'],
      ['Many things have happened at home.', 'Last week, I got a good grade on my math test, and Mom took us out for hot pot.', 'My little sister has also learned to ride a bike without help.', 'She fell down a few times, but she never gave up.'],
      ['Mom is busier than before because she does all the work at home by herself.', 'So I help her more now.', 'I wash the dishes after dinner and take my sister to school in the morning.'],
      ['When you come back next month, can we go to the beach together?', 'Please bring some Japanese snacks for us!'],
      { h: 'Love, Andy' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Andy write this email?', opts: ['To tell Dad what is happening at home', 'To ask Dad to buy him and his sister new bikes', 'To tell Dad about a trip to Osaka', 'To ask Mom to take him to the beach'], a: 0, why: 'Andy 寫信告訴在大阪工作的爸爸家裡最近發生的事，也說大家很想他。', ev: ['Many things have happened at home.'] },
      { id: 'q2', k: 'detail', q: 'How long has Dad been away?', opts: ['Two months', 'One month', 'Three weeks', 'One year'], a: 0, why: '第一段說：爸爸離開已經兩個月了；「下個月」是他要回來的時間。', ev: ['It has been two months since you left'] },
      { id: 'q3', k: 'infer', q: "What kind of person is Andy's sister?", opts: ['She does not give up easily.', 'She is afraid of bikes.', 'She does not like school.', 'She is lazy at home.'], a: 0, why: '妹妹學騎腳踏車跌倒好幾次，但從來不放棄 → 她是個不輕易放棄的人。', ev: ['She fell down a few times, but she never gave up.'] },
      { id: 'q4', k: 'vocab', q: 'What does "miss" mean in paragraph 1?', opts: ['想念', '錯過', '打中', '忘記'], a: 0, why: 'miss 在這裡是「想念」：爸爸離開兩個月了，全家都很想他。', ev: ['we all miss you a lot'] }
    ] },
  { id: 'h025', lv: 3, genre: 'diary', topic: 'home', title: 'A New Color for My Room', zh: '幫房間換顏色',
    body: [
      { h: 'Saturday, March 14' },
      ['My room used to be pink because my parents painted it when I was a baby.', 'Now I am eleven, and I wanted a new color.', 'After a long talk, Mom and Dad finally said yes.'],
      ['This morning, we moved the bed and the desk to the middle of the room.', 'Then we covered them with old newspapers.', 'Dad painted the high parts of the walls, and I painted the low parts.', 'Mom said the light blue I chose looked like the sky in summer.'],
      ['Painting was harder than I thought.', 'My arms got tired, and there was paint on my hair and face!', 'But when we finished, the room looked brighter and bigger.'],
      ['Tonight I will sleep in my new blue room.', 'It still smells like paint, so the windows are open.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What color is the room now?', opts: ['Light blue', 'Pink', 'White', 'Dark blue'], a: 0, why: '第二段說：作者選的是淺藍色，媽媽說像夏天的天空；粉紅色是以前的顏色。', ev: ['the light blue I chose'] },
      { id: 'q2', k: 'ref', q: 'What does "them" mean in "covered them with old newspapers"?', opts: ['The bed and the desk', 'The walls', 'Mom and Dad', 'The windows'], a: 0, why: '「它們」指前一句搬到房間中間的床和書桌：用舊報紙把它們蓋起來。', ev: ['Then we covered them with old newspapers.'] },
      { id: 'q3', k: 'infer', q: 'How did Mom and Dad probably feel about a new color at first?', opts: ['They were not sure about it.', 'They loved the idea right away.', 'They wanted a blue room, too.', 'They did not hear the writer.'], a: 0, why: '要「談很久」爸媽才「終於」答應 → 一開始他們不太確定，沒有馬上同意。', ev: ['After a long talk, Mom and Dad finally said yes.'] },
      { id: 'q4', k: 'main', q: 'What is the diary mainly about?', opts: ['Painting a bedroom with the family', 'Buying a new bed and desk', 'Reading old newspapers at home', 'Drawing a summer sky at school'], a: 0, why: '整篇日記在寫作者和爸媽一起把房間從粉紅色漆成淺藍色。', ev: ['Tonight I will sleep in my new blue room.'] }
    ] },
  { id: 'h026', lv: 3, genre: 'notice', topic: 'food', title: 'Summer Cooking Class for Kids', zh: '兒童暑假烹飪課', names: ['Sunshine Center'],
    body: [
      { h: 'Summer Cooking Class for Kids' },
      ['Do you like to cook?', 'Come and learn to make three easy and healthy dishes at the Sunshine Center!'],
      { table: [['Date', 'What we will make'], ['July 6', 'Vegetable egg rolls'], ['July 13', 'Fruit salad'], ['July 20', 'Tomato noodle soup']] },
      ['Each class is from 10:00 a.m. to 12:00 p.m.', 'The class is for children from 8 to 12 years old.', 'It costs NT$300 for all three classes.', 'Only fifteen students can join, so tell the front desk early.', 'Teachers will help with knives and fire, so it is safe for everyone.', 'Please bring an apron and a box for your food.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will students make on July 13?', opts: ['Fruit salad', 'Vegetable egg rolls', 'Tomato noodle soup', 'Egg soup'], a: 0, why: '表上七月十三日那一列：做水果沙拉。', ev: ['July 13'] },
      { id: 'q2', k: 'detail', q: 'How much does the class cost?', opts: ['NT$300 for three classes', 'NT$300 for one class', 'NT$100 for three classes', 'NT$150 for two classes'], a: 0, why: '告示寫：三堂課一共 300 元，不是一堂 300 元。', ev: ['It costs NT$300 for all three classes.'] },
      { id: 'q3', k: 'infer', q: 'Why should people tell the front desk early?', opts: ['Only fifteen students can join.', 'The class starts at 8:00 a.m.', 'The teachers want to cook first.', 'Students must bring a box.'], a: 0, why: '只收十五個學生，名額很少 → 太晚說可能就沒有位子了。', ev: ['Only fifteen students can join'] },
      { id: 'q4', k: 'main', q: 'Who is this notice mainly for?', opts: ['Children who want to learn to cook', 'Teachers who want a new job', 'Parents who want to sell fruit and noodles', 'Shop owners near the center'], a: 0, why: '告示一開頭就問「你喜歡做菜嗎？」，邀請 8～12 歲的小朋友來上烹飪課。', ev: ['Do you like to cook?'] }
    ] },
  { id: 'h027', lv: 3, genre: 'dialogue', topic: 'family', title: 'Who Gets the Computer?', zh: '電腦誰先用？',
    body: [
      { who: 'Mom', s: ['What is all the noise about?'] },
      { who: 'Amy', s: ['I need the computer for my science report, but Ben will not stop playing games!'] },
      { who: 'Ben', s: ['That is not fair.', 'I finished my homework first, so I should get more time.'] },
      { who: 'Mom', s: ['I see.', 'Amy, when do you need to give your report to your teacher?'] },
      { who: 'Amy', s: ['Tomorrow morning.', 'I still have to find some pictures and type two pages.'] },
      { who: 'Mom', s: ['Then Amy should use it first tonight.', 'Ben, you can play for thirty minutes after she finishes.', 'And this weekend, you can have the computer for one more hour.'] },
      { who: 'Ben', s: ['OK, that sounds better.', 'Amy, do you need help finding pictures?', 'I am good at that!'] },
      { who: 'Amy', s: ['Really?', 'Thanks, Ben!'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why does Amy need the computer?', opts: ['To do her science report', 'To play games with Ben', 'To watch a movie', 'To write an email to her teacher'], a: 0, why: '艾美說她要用電腦做自然科報告，明天早上就要交。', ev: ['I need the computer for my science report'] },
      { id: 'q2', k: 'detail', q: 'What will Ben get this weekend?', opts: ['One more hour on the computer', 'Thirty minutes of games', 'A new computer', 'Help from Amy with his science report'], a: 0, why: '媽媽說：這個週末 Ben 可以多用一個小時的電腦。', ev: ['you can have the computer for one more hour'] },
      { id: 'q3', k: 'ref', q: 'Mom says, "Amy should use it first tonight." What does "it" mean?', opts: ['The computer', 'The report', 'The game', 'The picture'], a: 0, why: '「它」指兩個人在搶的電腦：今晚先給要趕報告的艾美用。', ev: ['Then Amy should use it first tonight.'] },
      { id: 'q4', k: 'infer', q: 'How do Amy and Ben probably feel at the end?', opts: ['They are friendly again.', 'They are still angry.', 'They are both sleepy.', 'They want a new computer.'], a: 0, why: '最後 Ben 主動說要幫艾美找圖片，艾美也謝謝他 → 兩個人和好了。', ev: ['Amy, do you need help finding pictures?', 'Thanks, Ben!'] }
    ] },
  { id: 'h028', lv: 3, genre: 'howto', topic: 'festival', title: 'Make a Paper Plate Mask', zh: '做紙盤面具',
    body: [
      ['Halloween is a fun day to dress up.', 'If you do not have special clothes, you can make a simple mask with a paper plate.'],
      { h: 'What you need' },
      { table: [['Thing', 'How many'], ['Paper plate', '1'], ['Colored pens', 'some'], ['String', '2 pieces'], ['Scissors', '1 pair']] },
      { h: 'Steps' },
      ['First, ask an adult to help you cut two holes for your eyes.', 'Next, draw a face on the plate, such as a cat, a monster, or a pumpkin.', 'Then color it with bright colors to make it more exciting.', 'After that, make a small hole on each side of the plate.', 'Tie a string to each hole.', 'Finally, tie the two strings behind your head.'],
      ['Now you are ready for the Halloween party!', 'Remember to be careful when you walk, because it is harder to see with a mask on.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What do you cut first?', opts: ['Two holes for your eyes', 'A small hole on each side', 'The string into two pieces', 'A cat face on the plate'], a: 0, why: '第一步：請大人幫忙，在紙盤上剪出兩個眼睛的洞。', ev: ['cut two holes for your eyes'] },
      { id: 'q2', k: 'ref', q: 'What does "it" mean in "color it with bright colors"?', opts: ['The face on the plate', 'Your head', 'The string', 'The party'], a: 0, why: '「它」指前一步在紙盤上畫好的臉：接著用鮮豔的顏色把它塗滿。', ev: ['Then color it with bright colors to make it more exciting.'] },
      { id: 'q3', k: 'vocab', q: 'What does "tie" mean in the steps?', opts: ['綁', '剪', '畫', '拿'], a: 0, why: 'tie 是「綁」：把繩子綁在洞上，最後把兩條繩子綁在頭後面。', ev: ['Tie a string to each hole.'] },
      { id: 'q4', k: 'main', q: 'What is the writer mainly doing in this article?', opts: ['Showing how to make a mask', 'Telling a story about Halloween', 'Selling paper plates and pens', 'Asking kids not to go to parties'], a: 0, why: '文章列出材料和一步一步的做法，教你用紙盤做萬聖節面具。', ev: ['you can make a simple mask with a paper plate'] }
    ] },
  { id: 'h029', lv: 3, genre: 'info', topic: 'home', title: 'When the Music Plays, Take Out the Trash', zh: '音樂響了，倒垃圾囉',
    body: [
      ['In many cities in Taiwan, you cannot leave your trash on the street.', 'Instead, people wait for the garbage truck in the evening.'],
      ['How do people know the truck is coming?', 'It plays music!', 'When families hear the song, they carry their bags outside and wait near the road.'],
      ['People in Taiwan also put their trash into different groups.', 'Paper, bottles, and cans go to a different truck that comes right after the first one.', 'Old food from the kitchen is put in its own bucket.'],
      ['This takes a little more time, but it keeps the streets cleaner.', 'It also helps Taiwan use old things again.', 'Many visitors are surprised when they first hear the trash trucks singing!']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['How people in Taiwan take out their trash', 'Why trucks in Taiwan are so big', 'How to play music on the street', 'Why visitors in Taiwan like to buy bottles and cans'], a: 0, why: '文章介紹台灣的人怎麼倒垃圾：等垃圾車、聽音樂、把垃圾分類。', ev: ['Instead, people wait for the garbage truck in the evening.'] },
      { id: 'q2', k: 'detail', q: 'How do people know the truck is coming?', opts: ['It plays music.', 'It stops at every door.', 'Someone calls them.', 'It comes at noon.'], a: 0, why: '第二段說：垃圾車會放音樂，大家一聽到就知道車子來了。', ev: ['It plays music!'] },
      { id: 'q3', k: 'ref', q: 'What does "they" mean in "they carry their bags outside"?', opts: ['Families', 'The trucks', 'Visitors', 'The workers'], a: 0, why: '「他們」指同一句前面說的家家戶戶：一聽到音樂就把垃圾袋拿出去。', ev: ['they carry their bags outside'] },
      { id: 'q4', k: 'infer', q: 'Why are many visitors surprised?', opts: ['Their trash trucks back home do not play songs.', 'The trucks in Taiwan are very small.', 'People in Taiwan do not have any trash at home at all.', 'The music is too loud at night.'], a: 0, why: '遊客第一次聽到垃圾車唱歌會嚇一跳 → 可以推想他們自己國家的垃圾車不會放音樂。', ev: ['Many visitors are surprised when they first hear the trash trucks singing!'] }
    ] },
  { id: 'h030', lv: 3, genre: 'schedule', topic: 'family', title: "Grandma's Big Birthday", zh: '奶奶的八十大壽',
    body: [
      ['Grandma will be eighty years old this Sunday.', "Our whole family is planning a surprise party for her at Uncle Tom's house."],
      { h: 'Party Plan' },
      { table: [['Time', 'What happens', 'Who helps'], ['10:00 a.m.', 'Put up balloons and flowers', 'Kids'], ['11:30 a.m.', 'Uncle Tom drives Grandma here', 'Uncle Tom'], ['12:00 p.m.', 'Everyone shouts "Happy Birthday!"', 'Everyone'], ['12:30 p.m.', 'Big lunch with long noodles', 'Aunt Mary and Mom'], ['2:00 p.m.', 'Cut the peach-shaped cake', 'Dad']] },
      ['Long noodles mean a long life, so they are a good birthday food for older people.', 'Please do not tell Grandma about the party.', 'We want to see her happy face when she walks in!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Who will drive Grandma to the party?', opts: ['Uncle Tom', 'Dad', 'Aunt Mary', 'Mom'], a: 0, why: '表上 11:30 那一列：湯姆叔叔開車載奶奶過來。', ev: ['Uncle Tom drives Grandma here'] },
      { id: 'q2', k: 'detail', q: 'What will happen at 12:00 p.m.?', opts: ['Everyone shouts happy birthday.', 'The kids put up balloons and flowers.', 'Dad cuts the peach-shaped cake.', 'The family eats long noodles.'], a: 0, why: '表上中午 12:00 那一列：大家一起大喊「生日快樂！」。', ev: ['12:00 p.m.'] },
      { id: 'q3', k: 'vocab', q: 'What does "surprise" mean in paragraph 1?', opts: ['驚喜', '生氣', '難過', '安靜'], a: 0, why: 'surprise 是「驚喜」：先不告訴奶奶，等她一進門再給她一個大驚喜。', ev: ['surprise party'] },
      { id: 'q4', k: 'infer', q: 'How will Grandma probably feel when she walks in?', opts: ['Surprised and happy', 'Angry and tired', 'Sad and lonely', 'Bored and sleepy'], a: 0, why: '全家偷偷準備，等她一進門就大喊生日快樂 → 奶奶應該會又驚又喜。', ev: ['We want to see her happy face when she walks in!'] }
    ] },
]);
