/* english-reading/data/s0.js — 樣本 10 篇（易 e001～e004、中 m001～m003、難 h001～h003），全部原創。格式見 english-reading/CONTRACT.md；改完跑 node english-reading/check.js */
window.DATA_ER = (window.DATA_ER || []).concat([
  { id: 'e001', lv: 1, genre: 'story', topic: 'school', title: 'The Lost Eraser', zh: '不見的橡皮擦',
    body: [
      ['Ben is in the classroom.', 'He wants to draw a cat.', 'But he cannot find his eraser.'],
      ['He looks in his bag.', 'It is not there.', 'He looks under his desk, but it is not there.'],
      ['Then Mia smiles at him.', 'She says, "Look at your ear!"', 'The small eraser is on his ear!', 'Ben laughs.', 'Now he can draw his cat.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where is the eraser?', opts: ["On Ben's ear", "In Ben's bag", 'Under the desk', "In Mia's hand"], a: 0, why: '文章最後說：小橡皮擦就在班的耳朵上。', ev: ['The small eraser is on his ear!'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, what does "it" mean?', opts: ['The eraser', 'The bag', 'The desk', 'The cat'], a: 0, why: '班在找橡皮擦，「它不在那裡」的「它」就是橡皮擦。', ev: ['He looks in his bag.', 'It is not there.'] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ['Ben looks for his eraser.', 'Mia and Ben play a game after class.', 'Ben draws a big dog.', 'Mia loses her bag.'], a: 0, why: '整篇都在說班找不到橡皮擦，最後才發現在耳朵上。', ev: ['But he cannot find his eraser.'] }
    ] },
  { id: 'e002', lv: 1, genre: 'notice', topic: 'school', title: 'Class Picnic', zh: '班級野餐', gloss: { picnic: '野餐' },
    body: [
      { h: 'Class Picnic' },
      ['Class 5A will have a picnic on Friday.', 'We will meet at the school door at nine.', 'We will walk to the park together.', 'Please bring water, a hat, and your lunch.', 'Do not bring toys or money.', 'If it rains, we will watch a movie in the classroom.', 'Have fun!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When will the class meet?', opts: ['At nine on Friday', 'At ten on Friday', 'At nine on Monday', 'At noon on Sunday'], a: 0, why: '告示寫星期五野餐，九點在學校門口集合。', ev: ['picnic on Friday', 'at the school door at nine'] },
      { id: 'q2', k: 'detail', q: 'What should the students NOT bring?', opts: ['Toys', 'Water', 'A hat', 'Lunch'], a: 0, why: '告示說不要帶玩具或錢；水、帽子、午餐都要帶。', ev: ['Do not bring toys or money.'] },
      { id: 'q3', k: 'vocab', q: 'What does "together" mean here?', opts: ['一起', '分開', '很快', '安靜'], a: 0, why: 'together 是「一起」：全班一起走到公園。', ev: ['We will walk to the park together.'] }
    ] },
  { id: 'e003', lv: 1, genre: 'dialogue', topic: 'animal', title: 'A New Pet', zh: '新寵物',
    body: [
      { who: 'Amy', s: ['Dad, can we get a pet?'] },
      { who: 'Dad', s: ['What kind of pet do you want?'] },
      { who: 'Amy', s: ['I want a rabbit.', 'It is soft and quiet.'] },
      { who: 'Dad', s: ['A rabbit needs food and water every day.', 'Can you take care of it?'] },
      { who: 'Amy', s: ['Yes!', 'I can give it food after school.'] },
      { who: 'Dad', s: ['OK.', "Let's go to the pet shop on Sunday."] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What pet does Amy want?', opts: ['A rabbit', 'A dog', 'A cat', 'A bird'], a: 0, why: '艾美說她想要一隻兔子，因為兔子又軟又安靜。', ev: ['I want a rabbit.'] },
      { id: 'q2', k: 'ref', q: 'Amy says, "I can give it food after school." What does "it" mean?', opts: ['The rabbit', 'The pet shop', 'The school', 'The water'], a: 0, why: '艾美說放學後可以拿食物給「它」，指的是她想養的兔子。', ev: ['I can give it food after school.'] },
      { id: 'q3', k: 'main', q: 'What are Amy and Dad talking about?', opts: ['A new pet', 'Going to school by bus', 'Cooking dinner at home', 'A trip to the zoo'], a: 0, why: '整段對話都在討論要不要養寵物兔子。', ev: ['Dad, can we get a pet?'] }
    ] },
  { id: 'e004', lv: 1, genre: 'diary', topic: 'festival', title: 'Moon Festival Night', zh: '中秋節的晚上',
    body: [
      { h: 'Sunday, September 21' },
      ['Today is the Moon Festival.', 'My family eats dinner outside.', 'Grandpa cooks fish and meat.', 'My little brother eats three moon cakes.', 'Then he feels sick!'],
      ['The moon is big and round.', 'We sit together and look at it.', 'I am happy tonight.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Who cooks the food?', opts: ['Grandpa', 'The writer', 'Little brother', 'Mom'], a: 0, why: '日記寫：爺爺煮魚和肉。', ev: ['Grandpa cooks fish and meat.'] },
      { id: 'q2', k: 'vocab', q: 'What does "round" mean here?', opts: ['圓的', '方的', '很小的', '很暗的'], a: 0, why: 'round 在這裡是「圓的」：中秋節的月亮又大又圓。', ev: ['The moon is big and round.'] },
      { id: 'q3', k: 'infer', q: 'Why does the little brother feel sick?', opts: ['He eats too many moon cakes.', 'He sits outside all night long.', 'He looks at the moon.', 'He drinks cold water.'], a: 0, why: '弟弟吃了三個月餅，接著就不舒服，可以推想是吃太多了。', ev: ['My little brother eats three moon cakes.', 'Then he feels sick!'] }
    ] },
  { id: 'm001', lv: 2, genre: 'letter', topic: 'family', title: 'A Letter to Grandma', zh: '寫給奶奶的信', names: ['Mimi'],
    body: [
      { h: 'Dear Grandma,' },
      ['How are you?', 'I miss you and your cat, Mimi.', 'School is busy this month, but I am fine.'],
      ['Next Saturday, Mom and I will take the train to Tainan.', 'We will arrive at your house at about two in the afternoon.', 'Mom wants to cook dinner for you.', 'I want to make a card for you, too.'],
      ['Can we visit the old street after dinner?', 'I want to buy some sweet snacks there.', 'Please tell Mimi that I am coming!'],
      { h: 'Love, Lily' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Lily write this letter?', opts: ['To tell Grandma about a visit', 'To ask Grandma to buy a new cat', 'To say sorry to her mom', 'To tell Grandma about a test'], a: 0, why: '莉莉寫信告訴奶奶：下星期六要和媽媽坐火車去台南看她。', ev: ['Next Saturday, Mom and I will take the train to Tainan.'] },
      { id: 'q2', k: 'detail', q: "What time will they get to Grandma's house?", opts: ['Around two in the afternoon', 'Around ten in the morning', 'At night after dinner', 'Early in the morning before school'], a: 0, why: '信裡說大約下午兩點會到奶奶家。', ev: ['at about two in the afternoon'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 3, what does "there" mean?', opts: ['The old street', "Grandma's house", 'The train', 'The school'], a: 0, why: 'there 指的是前一句說的老街：莉莉想在老街買甜點心。', ev: ['Can we visit the old street after dinner?', 'I want to buy some sweet snacks there.'] },
      { id: 'q4', k: 'infer', q: 'How does Lily probably feel about the trip?', opts: ['Happy', 'Angry', 'Tired', 'Afraid'], a: 0, why: '她想做卡片給奶奶，還請奶奶告訴咪咪她要來了，可見她很期待、很開心。', ev: ['Please tell Mimi that I am coming!'] }
    ] },
  { id: 'm002', lv: 2, genre: 'schedule', topic: 'travel', title: 'The Free Zoo Bus', zh: '動物園免費公車',
    body: [
      ['The Sunny Zoo has a free bus for visitors.', 'The bus leaves from Green Park Station.'],
      { h: 'Free Zoo Bus' },
      { table: [['Bus', 'Leaves the station', 'Gets to the zoo'], ['No. 1', '8:30 a.m.', '9:00 a.m.'], ['No. 2', '10:00 a.m.', '10:30 a.m.'], ['No. 3', '1:00 p.m.', '1:30 p.m.']] },
      ['The last bus back to the station leaves the zoo at 5:00 p.m.', 'There is no bus on Mondays because the zoo is closed.', 'Each bus has forty seats, so please come early.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When does the No. 2 bus get to the zoo?', opts: ['10:30 a.m.', '10:00 a.m.', '9:00 a.m.', '1:30 p.m.'], a: 0, why: '表上 2 號車上午 10:00 從車站出發，10:30 到動物園。', ev: ['No. 2'] },
      { id: 'q2', k: 'detail', q: 'Which day can you NOT take the bus?', opts: ['Monday', 'Friday', 'Saturday', 'Sunday'], a: 0, why: '星期一動物園休息，所以那天沒有公車。', ev: ['There is no bus on Mondays because the zoo is closed.'] },
      { id: 'q3', k: 'infer', q: 'Tom wants to get to the zoo before 10:00 a.m. Which bus should he take?', opts: ['No. 1', 'No. 2', 'No. 3', 'The last bus'], a: 0, why: '只有 1 號車 9:00 就到動物園，比 10 點早；2 號車 10:30 才到。', ev: ['No. 1', 'No. 2'] }
    ] },
  { id: 'm003', lv: 2, genre: 'info', topic: 'science', title: 'Rainbows', zh: '彩虹', gloss: { spray: '噴' },
    body: [
      ['Have you ever seen a rainbow?', 'A rainbow often comes after rain, when the sun comes out again.'],
      ['Light from the sun looks white, but it has many colors in it.', 'When the light goes into small drops of water, the drops break it into colors.', 'That is how we get red, orange, yellow, green, blue, and purple.'],
      ['You can make a rainbow at home, too.', 'Stand with your back to the sun on a sunny morning.', 'Then spray water into the air and look carefully.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['How rainbows are made', 'Why the sun is hot', 'How to draw a picture', 'What rain tastes like'], a: 0, why: '文章說明彩虹怎麼出現，最後還教你在家做彩虹。', ev: ['A rainbow often comes after rain, when the sun comes out again.'] },
      { id: 'q2', k: 'detail', q: 'When can you often see a rainbow?', opts: ['After rain, when the sun is out', 'Late at night when it is dark', 'On a cold and snowy day', 'Early in the morning before the sun comes up'], a: 0, why: '第一段說：彩虹常在雨後、太陽又出來的時候出現。', ev: ['A rainbow often comes after rain'] },
      { id: 'q3', k: 'vocab', q: 'What does "break" mean in paragraph 2?', opts: ['分成好幾份', '休息一下', '打破弄壞', '停下來'], a: 0, why: '這裡的 break 不是打破，而是小水滴把白色的光分成好幾種顏色。', ev: ['the drops break it into colors'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "it" mean?', opts: ['Light from the sun', 'A rainbow', 'Water', 'The air'], a: 0, why: '「它」指的是太陽的光：看起來是白色的，其實裡面有很多顏色。', ev: ['Light from the sun looks white, but it has many colors in it.'] }
    ] },
  { id: 'h001', lv: 3, genre: 'story', topic: 'sport', title: 'The Last Runner', zh: '最後一棒', gloss: { relay: '接力', baton: '接力棒' },
    body: [
      ["On Sports Day, Kevin's class was in the relay race.", 'Kevin was the last runner, so everyone was watching him.'],
      ['When Kevin got the baton, his team was in second place.', 'He ran as fast as he could.', 'In the middle of the race, he fell down and hurt his knee.'],
      ['For a moment, Kevin wanted to cry.', 'Then he heard his friends shouting his name.', 'He stood up and kept running.', 'His team finished last, but the whole class cheered for him.'],
      ['After the race, Kevin felt sad at first.', 'His teacher said, "Winning is nice, but not giving up is better."', 'Kevin smiled and decided to practice every morning.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['A boy who does not give up in a race', 'A boy who easily wins first place for his team', 'A class that cleans the school after a race', 'A teacher who runs very fast'], a: 0, why: '故事的重點是凱文跌倒後還是站起來跑完，而且決定繼續練習。', ev: ['He stood up and kept running.'] },
      { id: 'q2', k: 'detail', q: 'What happened to Kevin during the race?', opts: ['He fell and hurt his knee.', 'He dropped the baton.', 'He ran the wrong way.', 'He stopped to drink water.'], a: 0, why: '第二段說他跑到一半跌倒，膝蓋受傷。', ev: ['he fell down and hurt his knee'] },
      { id: 'q3', k: 'infer', q: 'Why did Kevin decide to practice every morning?', opts: ['He wanted to do better next time.', 'His teacher was very angry with him.', 'He did not like his team.', 'He had to clean the school.'], a: 0, why: '老師說不放棄更重要，凱文笑了並決定每天練習，表示他想下次跑得更好。', ev: ['Kevin smiled and decided to practice every morning.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 3, who does "him" mean?', opts: ['Kevin', "Kevin's teacher", "Kevin's friend", 'The first runner'], a: 0, why: '全班為「他」歡呼，他指的是跌倒後還跑完的凱文。', ev: ['His team finished last, but the whole class cheered for him.'] }
    ] },
  { id: 'h002', lv: 3, genre: 'info', topic: 'animal', title: 'A Winter Bird in Tainan', zh: '冬天來台南的鳥', gloss: { spoonbill: '琵鷺', shallow: '淺的' },
    body: [
      ['Every winter, a special bird comes to Tainan.', 'It is the black-faced spoonbill.', 'Its long black mouth looks like a big spoon, so people gave it this name.'],
      ['Spoonbills live in the north, in places like Korea, during the summer.', 'When the weather gets cold, they fly south to warmer places.', 'Tainan is one of their favorite homes because it has a lot of fish and shallow water.', 'Many of them stay from October to April.'],
      ['Long ago, there were only a few hundred of these birds in the world.', 'People in Taiwan and other countries worked hard to protect them.', 'Today there are more than six thousand.'],
      ['If you visit Tainan in winter, you may see them looking for food in the water.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When do many of the birds stay in Tainan?', opts: ['From October to April', 'From April to October', 'Only in summer', 'All year'], a: 0, why: '文章說很多黑面琵鷺十月來、四月走，也就是冬天待在台南。', ev: ['Many of them stay from October to April.'] },
      { id: 'q2', k: 'vocab', q: 'What does "protect" mean in paragraph 3?', opts: ['保護', '抓住', '賣掉', '趕走'], a: 0, why: 'protect 是「保護」：大家努力保護牠們，數量才變多。', ev: ['People in Taiwan and other countries worked hard to protect them.'] },
      { id: 'q3', k: 'infer', q: 'Why are there more of these birds today?', opts: ['People worked together to protect them.', 'They stopped flying to warm places in winter.', 'They found more food in Korea.', 'People gave them a new name.'], a: 0, why: '以前全世界只有幾百隻，大家努力保護以後，現在超過六千隻。', ev: ['Long ago, there were only a few hundred of these birds in the world.', 'People in Taiwan and other countries worked hard to protect them.'] },
      { id: 'q4', k: 'main', q: 'What is the best title for this article?', opts: ['A Winter Bird in Tainan', 'The Biggest Spoon in Taiwan', 'Fun Things to Do in Korea', 'How to Catch Fish in Shallow Water'], a: 0, why: '整篇介紹每年冬天到台南的黑面琵鷺：名字怎麼來、為什麼來、怎麼被保護。', ev: ['Every winter, a special bird comes to Tainan.'] }
    ] },
  { id: 'h003', lv: 3, genre: 'howto', topic: 'food', title: 'Make Your Own Bubble Tea', zh: '自己做珍珠奶茶', gloss: { tapioca: '粉圓', bubble: '泡泡（珍奶）' },
    body: [
      ['Bubble tea is a famous drink from Taiwan.', 'You can buy it in many shops, but you can also make it at home.'],
      { h: 'What you need' },
      { table: [['Thing', 'How much'], ['Black tea', '1 cup'], ['Milk', 'half a cup'], ['Tapioca balls', '3 spoons'], ['Ice', 'some']] },
      { h: 'Steps' },
      ['First, cook the tapioca balls in hot water for about twenty minutes.', 'Next, put them into a glass and add a little sugar.', 'Then pour in the cold tea and the milk.', 'Finally, add some ice and mix everything with a big straw.'],
      ['Be careful with the hot water, and ask an adult to help you.', 'Now enjoy your drink!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How long do you cook the tapioca balls?', opts: ['About twenty minutes', 'About two minutes', 'About one hour', 'About ten seconds'], a: 0, why: '步驟第一步說：粉圓要在熱水裡煮大約二十分鐘。', ev: ['for about twenty minutes'] },
      { id: 'q2', k: 'vocab', q: 'What does "mix" mean in the steps?', opts: ['攪拌', '倒掉', '加熱', '切開'], a: 0, why: 'mix 是「攪拌、混合」：用吸管把冰、茶和牛奶攪在一起。', ev: ['mix everything with a big straw'] },
      { id: 'q3', k: 'ref', q: 'What does "them" mean in "put them into a glass"?', opts: ['The tapioca balls', 'The ice', 'The cups of milk', 'The shops'], a: 0, why: '前一句煮的是粉圓，「把它們放進杯子」的它們就是煮好的粉圓。', ev: ['Next, put them into a glass and add a little sugar.'] },
      { id: 'q4', k: 'main', q: 'What is the writer mainly doing in this article?', opts: ['Showing how to make a drink', 'Selling bubble tea in a shop', 'Telling a story about a cook', 'Asking you not to drink tea'], a: 0, why: '文章列出材料和步驟，教你在家自己做珍珠奶茶。', ev: ['You can buy it in many shops, but you can also make it at home.'] }
    ] }
]);
