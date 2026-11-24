/* english-reading/data/a5.js — 作者 5 的 38 篇（篇號、主題範圍見 english-reading/CONTRACT.md §8）。只改這一個檔；改完跑 node english-reading/check.js a5 */
window.DATA_ER = (window.DATA_ER || []).concat([
  { id: 'e066', lv: 1, genre: 'story', topic: 'shopping', title: "Tim's Money Box", zh: '提姆的存錢筒',
    body: [
      ['Tim gets NT$50 from Mom every week.', 'He puts NT$20 into a big box.', 'He wants to buy a gift for Mom.'],
      ['After eight weeks, the box is heavy.', 'Tim counts the money.', 'He has NT$160!'],
      ['He buys a pretty cup for Mom.', 'Mom smiles and gives him a big kiss.', 'Tim is very happy.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much money does Tim put into the box every week?', opts: ['NT$20', 'NT$50', 'NT$160', 'NT$80'], a: 0, why: '媽媽每週給他 50 元，他每週把其中的 20 元放進存錢筒（大盒子）裡。', ev: ['He puts NT$20 into a big box.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 3, who does "him" mean?', opts: ['Tim', 'Mom', 'Dad', "Tim's friend"], a: 0, why: '媽媽親了「他」一下，他就是買杯子送媽媽的提姆。', ev: ['Mom smiles and gives him a big kiss.'] },
      { id: 'q3', k: 'infer', q: 'Why is Tim very happy?', opts: ['He buys Mom a gift with his own money.', 'He gets a lot of money from Dad every day.', 'He finds a heavy box under his bed.', 'He gets a pretty cup from his teacher.'], a: 0, why: '提姆存了八週的錢，自己買杯子送媽媽，媽媽很開心 → 所以他也很開心。', ev: ['He buys a pretty cup for Mom.', 'Tim is very happy.'] }
    ] },
  { id: 'e067', lv: 1, genre: 'info', topic: 'science', title: 'Ice, Water, and Steam', zh: '冰、水和水蒸氣', gloss: { steam: '水蒸氣' },
    body: [
      ['Water can change.', 'When it gets very cold, it turns into ice.', 'Ice is hard, and you can hold it in your hand.'],
      ['When ice gets warm, it turns into water again.'],
      ['When water gets very hot, it turns into steam.', 'Steam goes up into the air.', 'Be careful, because hot water and steam can hurt you.'],
      ['They do not look the same, but they are all water!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does ice turn into when it gets warm?', opts: ['Water', 'Steam', 'Hard ice', 'Cold air'], a: 0, why: '第二段說：冰變溫暖的時候，會再變回水。', ev: ['When ice gets warm, it turns into water again.'] },
      { id: 'q2', k: 'vocab', q: 'What does "hurt" mean here?', opts: ['弄傷、弄痛', '幫忙', '加熱', '變冷'], a: 0, why: 'hurt 是「弄傷、弄痛」：熱水和水蒸氣會燙傷人，所以要小心。', ev: ['can hurt you'] },
      { id: 'q3', k: 'main', q: 'What is the article mainly about?', opts: ['Water can be ice, water, or steam.', 'How to make hot tea at home.', 'Why ice is hard and cold.', 'Where we can find a lot of water.'], a: 0, why: '整篇在說水會變成冰、也會變成水蒸氣，最後說它們其實都是水。', ev: ['they are all water'] }
    ] },
  { id: 'e068', lv: 1, genre: 'dialogue', topic: 'travel', title: 'On the MRT', zh: '在捷運上',
    body: [
      { who: 'Ben', s: ['Mom, can I have my candy now?'] },
      { who: 'Mom', s: ['Not now.', 'You cannot eat or drink on the MRT.'] },
      { who: 'Ben', s: ['Oh, I see.', 'When can I eat it?'] },
      { who: 'Mom', s: ['We get off at the next station.', 'You can eat it after we leave the station.'] },
      { who: 'Ben', s: ['OK.', 'Look, an old man is standing.', 'I can give him my seat.'] },
      { who: 'Mom', s: ['Good boy!'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Ben want to do on the MRT?', opts: ['Eat his candy', 'Drink some water', 'Sleep on his seat', 'Play a game'], a: 0, why: '班一開始就問媽媽：可以現在吃糖果嗎？', ev: ['Mom, can I have my candy now?'] },
      { id: 'q2', k: 'ref', q: 'Ben says, "I can give him my seat." Who does "him" mean?', opts: ['An old man', "Ben's dad", 'The MRT driver', 'A little boy'], a: 0, why: '班前一句說有一位老先生站著，「把我的位子給他」的他就是那位老先生。', ev: ['I can give him my seat.'] },
      { id: 'q3', k: 'infer', q: 'Why does Mom say "Good boy!"?', opts: ['Ben wants to give his seat to an old man.', 'Ben eats all his candy on the MRT.', 'Ben gets off at the next station.', 'Ben drinks water on the MRT.'], a: 0, why: '班看到老先生站著，就想讓座 → 媽媽覺得他很乖，才說 Good boy。', ev: ['I can give him my seat.', 'Good boy!'] }
    ] },
  { id: 'e069', lv: 1, genre: 'notice', topic: 'shopping', title: 'School Market Day', zh: '學校二手市集', gloss: { market: '市集' },
    body: [
      { h: 'School Market Day' },
      ['Do you have old books or toys at home?', 'Bring them to our school market!'],
      { table: [['Day', 'Time', 'Place'], ['Saturday', '9:00 a.m. to 11:00 a.m.', 'Room 101'], ['Sunday', '1:00 p.m. to 4:00 p.m.', 'The music room']] },
      ['Everything is NT$10 to NT$50.', 'Please bring clean things only.', 'All the money will go to the school library.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where is the market on Sunday?', opts: ['The music room', 'Room 101', 'The school library', 'The park'], a: 0, why: '表上星期日那一列寫：下午 1 點到 4 點，在音樂教室。', ev: ['Sunday'] },
      { id: 'q2', k: 'ref', q: 'What does "them" mean in "Bring them to our school market"?', opts: ['Old books or toys', 'The students', 'The money', 'The rooms'], a: 0, why: '前一句問家裡有沒有舊書或玩具，「把它們帶來」的它們就是舊書和玩具。', ev: ['Bring them to our school market!'] },
      { id: 'q3', k: 'vocab', q: 'What does "clean" mean here?', opts: ['乾淨的', '很舊的', '很貴的', '很小的'], a: 0, why: 'clean 是「乾淨的」：只能帶乾淨的東西來賣。', ev: ['Please bring clean things only.'] }
    ] },
  { id: 'e070', lv: 1, genre: 'diary', topic: 'taiwan', title: 'Up in Taipei 101', zh: '登上台北 101', gloss: { elevator: '電梯' },
    body: [
      { h: 'Saturday, March 14' },
      ['Today my family goes to Taipei 101.', 'It is a very tall building in Taipei.'],
      ['We go up in a fast elevator.', 'My ears feel funny in the elevator.', 'From the window, the cars look like small toys.', 'I can see mountains far away, too.'],
      ['Dad takes many pictures.', 'I want to come back at night to see the lights.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What do the cars look like from the window?', opts: ['Small toys', 'Big trains', 'Tall mountains', 'Pretty lights'], a: 0, why: '日記寫：從窗戶看出去，車子像小小的玩具。', ev: ['the cars look like small toys'] },
      { id: 'q2', k: 'vocab', q: 'What does "funny" mean in "My ears feel funny"?', opts: ['怪怪的', '好笑的', '很痛的', '很熱的'], a: 0, why: '這裡的 funny 不是好笑，是坐快速電梯時耳朵「怪怪的」感覺。', ev: ['My ears feel funny in the elevator.'] },
      { id: 'q3', k: 'infer', q: 'How does the writer probably feel about the trip?', opts: ['Happy', 'Bored', 'Angry', 'Afraid'], a: 0, why: '作者還想晚上再來看燈 → 可見他很喜歡這趟，很開心。', ev: ['I want to come back at night to see the lights.'] }
    ] },
  { id: 'e071', lv: 1, genre: 'schedule', topic: 'travel', title: 'A Day in Yilan', zh: '宜蘭一日遊',
    body: [
      ['Lily and her family will take a bus to Yilan on Sunday.', 'Here is their plan.'],
      { h: 'Sunday Plan' },
      { table: [['Time', 'Plan'], ['7:30 a.m.', 'Take the bus'], ['9:00 a.m.', 'Get to Yilan'], ['10:00 a.m.', 'Go to a farm'], ['11:30 a.m.', 'Have lunch'], ['2:00 p.m.', 'Swim in a hot spring'], ['5:00 p.m.', 'Take the bus home']] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will they do at 10:00 a.m.?', opts: ['Go to a farm', 'Have lunch', 'Swim in a hot spring', 'Take the bus'], a: 0, why: '表上 10:00 a.m. 那一列寫：去農場。', ev: ['Go to a farm'] },
      { id: 'q2', k: 'infer', q: 'How long is the bus ride to Yilan?', opts: ['About one and a half hours', 'About half an hour', 'About three hours', 'About five hours'], a: 0, why: '7:30 上車、9:00 到宜蘭 → 中間大約一個半小時。', ev: ['7:30 a.m.', '9:00 a.m.'] },
      { id: 'q3', k: 'main', q: 'What is this mainly about?', opts: ["A family's plan for a day in Yilan", 'How to swim in a hot spring', 'A bus driver in Yilan', 'Lunch at a farm'], a: 0, why: '開頭說這是莉莉一家星期日去宜蘭的計畫，表上列出整天要做的事。', ev: ['Here is their plan.'] }
    ] },
  { id: 'e072', lv: 1, genre: 'story', topic: 'science', title: 'Ben and His Shadow', zh: '班和他的影子', gloss: { shadow: '影子' },
    body: [
      ['In the morning, Ben walks to school.', 'The sun is low.', 'His shadow is long and thin.', 'He laughs, "I am so tall!"'],
      ['At noon, Ben plays in the playground.', 'The sun is high in the sky.', 'Now his shadow is very short.'],
      ['"Where is my tall shadow?" he asks.', 'His teacher smiles.', '"When the sun is high, shadows are short," she says.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "What is Ben's shadow like in the morning?", opts: ['Long and thin', 'Short and fat', 'Very short', 'Round and small'], a: 0, why: '第一段說：早上太陽很低，班的影子又長又細。', ev: ['His shadow is long and thin.'] },
      { id: 'q2', k: 'main', q: 'What is the story mainly about?', opts: ["Ben's shadow changes during the day.", 'Ben is late for school.', 'Ben plays a game with his teacher.', 'Ben grows tall in one day.'], a: 0, why: '早上影子長、中午影子短，整篇在說班的影子一天裡會變。', ev: ['Now his shadow is very short.'] },
      { id: 'q3', k: 'ref', q: 'In the last line, who does "she" mean?', opts: ["Ben's teacher", "Ben's mom", "Ben's sister", 'A girl in the playground'], a: 0, why: '前一句是老師在笑，接著「她說」的她就是班的老師。', ev: ['shadows are short," she says.'] }
    ] },
  { id: 'e073', lv: 1, genre: 'howto', topic: 'science', title: 'Float or Sink?', zh: '浮起來還是沉下去？', gloss: { float: '浮', sink: '沉' },
    body: [
      ["Let's play a water game!"],
      { h: 'What you need' },
      ['Get a big bowl of water.', 'Then find an apple, a pencil, a key, and an egg.'],
      { h: 'What to do' },
      ['First, put the apple in the water.', 'Does it float or sink?', 'Next, try the pencil.', 'Then try the key and the egg.'],
      ['The apple and the pencil float.', 'The key and the egg sink.', 'What other things can you try?']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Which things sink?', opts: ['The key and the egg', 'The apple and the pencil', 'The apple and the key', 'The pencil and the egg'], a: 0, why: '最後一段說：鑰匙和生雞蛋會沉下去。', ev: ['The key and the egg sink.'] },
      { id: 'q2', k: 'vocab', q: 'What does "float" mean here?', opts: ['浮在水上', '沉到水底', '丟出去', '洗乾淨'], a: 0, why: 'float 是「浮在水上」：蘋果和鉛筆放進水裡會浮起來。', ev: ['The apple and the pencil float.'] },
      { id: 'q3', k: 'ref', q: 'In "Does it float or sink?", what does "it" mean?', opts: ['The apple', 'The pencil', 'The key', 'The bowl'], a: 0, why: '前一句把蘋果放進水裡，「它會浮還是沉」的它就是蘋果。', ev: ['Does it float or sink?'] }
    ] },
  { id: 'e074', lv: 1, genre: 'letter', topic: 'travel', title: 'A Card from Kenting', zh: '墾丁寄來的卡片', gloss: { south: '南方、南部' },
    body: [
      { h: 'Dear Amy,' },
      ['I am in Kenting with my family.', 'It is in the south of Taiwan.', 'The weather is hot and sunny.'],
      ['Every morning, we swim in the blue sea.', 'In the afternoon, we ride bikes by the beach.', 'I see many small fish in the water.'],
      ['I will show you my pictures.', 'See you next week!'],
      { h: 'Love, Mia' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Mia do in the afternoon?', opts: ['She rides a bike by the beach.', 'She swims in the blue sea.', 'She looks at small fish.', 'She writes to Amy at home.'], a: 0, why: '信裡說：下午他們在海邊騎腳踏車；游泳是在早上。', ev: ['In the afternoon, we ride bikes by the beach.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 1, what does "It" mean?', opts: ['Kenting', 'The sea', 'Taiwan', 'The weather'], a: 0, why: '前一句說米亞在墾丁，「它在台灣南部」的它就是墾丁。', ev: ['It is in the south of Taiwan.'] },
      { id: 'q3', k: 'main', q: 'Why does Mia write to Amy?', opts: ['To tell Amy about her trip', 'To ask Amy to swim with her', 'To say sorry to Amy', 'To ask Amy for some pictures'], a: 0, why: '米亞在墾丁玩，寫信告訴艾美她每天做了什麼。', ev: ['I am in Kenting with my family.'] }
    ] },
  { id: 'e075', lv: 1, genre: 'dialogue', topic: 'shopping', title: 'Pencils and a Pen', zh: '買鉛筆和原子筆',
    body: [
      { who: 'Tom', s: ['Hello, Mr. Chen.', 'How much is this blue pencil?'] },
      { who: 'Mr. Chen', s: ['It is NT$15.'] },
      { who: 'Tom', s: ['And how much is the red pen?'] },
      { who: 'Mr. Chen', s: ['It is NT$25.'] },
      { who: 'Tom', s: ['I want two pencils and one pen, please.'] },
      { who: 'Mr. Chen', s: ['OK.', 'That is NT$55.'] },
      { who: 'Tom', s: ['Here is NT$100.'] },
      { who: 'Mr. Chen', s: ['Here is your change, NT$45.', 'Thank you!'] },
      { who: 'Tom', s: ['Thanks!', 'Have a nice day.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much is the red pen?', opts: ['NT$25', 'NT$15', 'NT$55', 'NT$45'], a: 0, why: '湯姆問紅色原子筆多少錢，陳先生說 25 元。', ev: ['It is NT$25.'] },
      { id: 'q2', k: 'infer', q: 'How much are two blue pencils?', opts: ['NT$30', 'NT$15', 'NT$25', 'NT$55'], a: 0, why: '一枝藍色鉛筆 15 元 → 兩枝就是 15＋15＝30 元。', ev: ['It is NT$15.'] },
      { id: 'q3', k: 'vocab', q: 'What does "change" mean here?', opts: ['找的零錢', '改變', '換衣服', '零食'], a: 0, why: '湯姆付 100 元，東西 55 元，老闆找他 45 元，這裡的 change 是「找的零錢」。', ev: ['Here is your change, NT$45.'] }
    ] },
  { id: 'e076', lv: 1, genre: 'notice', topic: 'travel', title: 'Bikes for Rent', zh: '腳踏車出租', gloss: { rent: '租', helmet: '安全帽' },
    body: [
      { h: 'Bikes for Rent' },
      ['Do you want to ride by the river?', 'Rent a bike here!'],
      { table: [['Bike', 'One hour'], ['Small bike', 'NT$30'], ['Big bike', 'NT$50'], ['Bike for two', 'NT$80']] },
      ['We are open from 8:00 a.m. to 6:00 p.m. every day.', 'Every rider must wear a helmet.', 'Children under ten must ride with Mom or Dad.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much is a big bike for one hour?', opts: ['NT$50', 'NT$30', 'NT$80', 'NT$100'], a: 0, why: '表上「大腳踏車」那一列寫：一小時 50 元。', ev: ['Big bike'] },
      { id: 'q2', k: 'detail', q: 'What must every rider do?', opts: ['Wear a helmet', 'Ride with Mom or Dad', 'Pay NT$80', 'Come before 8:00 a.m.'], a: 0, why: '告示說每個騎車的人都一定要戴安全帽；跟爸媽一起騎是十歲以下的小孩才要。', ev: ['Every rider must wear a helmet.'] },
      { id: 'q3', k: 'infer', q: 'Amy and her dad want to ride one bike together for one hour. How much will they pay?', opts: ['NT$80', 'NT$30', 'NT$50', 'NT$60'], a: 0, why: '兩個人騎同一台 → 要租「雙人腳踏車」，表上寫一小時 80 元。', ev: ['Bike for two'] }
    ] },
  { id: 'e077', lv: 1, genre: 'info', topic: 'taiwan', title: 'Taiwan Is an Island', zh: '台灣是一座島', gloss: { jade: '玉', island: '島' },
    body: [
      ['Taiwan is an island.', 'The sea is all around it.'],
      ['Taiwan is not very big, but it has many tall mountains.', 'The tallest one is Jade Mountain.', 'In winter, there is sometimes snow on the top.'],
      ['Most people live in cities on the west side.', 'You can go to the sea and the mountains in one day!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What is the tallest mountain in Taiwan?', opts: ['Jade Mountain', 'Snow Mountain', 'Green Mountain', 'Big Mountain'], a: 0, why: '第二段說：最高的山是玉山。', ev: ['The tallest one is Jade Mountain.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 1, what does "it" mean?', opts: ['Taiwan', 'The sea', 'The mountain', 'The city'], a: 0, why: '「海在它的四周」的它，指的是前一句說的台灣這座島。', ev: ['The sea is all around it.'] },
      { id: 'q3', k: 'main', q: 'What is the best title for this article?', opts: ['Mountains and Sea in Taiwan', 'Snow in a Big City', 'How to Swim in the Sea', 'A Day on the West Side'], a: 0, why: '文章介紹台灣是被海圍繞的島，而且有很多高山。', ev: ['Taiwan is not very big, but it has many tall mountains.'] }
    ] },
  { id: 'e078', lv: 1, genre: 'diary', topic: 'shopping', title: 'Shopping for Mom', zh: '幫媽媽買東西', gloss: { list: '清單' },
    body: [
      { h: 'Wednesday, June 3' },
      ['Mom is busy today.', 'She gives me NT$200 and a shopping list.', 'I go to the store with my little sister.'],
      ['We buy eggs, milk, and bread.', 'It is NT$170.', 'My sister wants some candy, but I say no.'],
      ['At home, I give Mom the change.', 'She says I can keep the change.', 'Now I have NT$30!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much money does Mom give the writer?', opts: ['NT$200', 'NT$170', 'NT$30', 'NT$100'], a: 0, why: '日記寫：媽媽給我 200 元和一張購物清單。', ev: ['She gives me NT$200 and a shopping list.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, what does "It" mean in "It is NT$170"?', opts: ['The eggs, milk, and bread', 'The candy', 'The shopping list', 'The change'], a: 0, why: '前一句買了蛋、牛奶和麵包，「它是 170 元」的它就是這些東西的價錢。', ev: ['It is NT$170.'] },
      { id: 'q3', k: 'infer', q: 'Why does the writer say no to the little sister?', opts: ['The money is for the things on the list.', 'The writer does not like candy at all.', 'The store has no candy today.', 'Mom is in the store with them.'], a: 0, why: '錢是媽媽給的，要買清單上的東西 → 所以不能拿去買糖果。', ev: ['She gives me NT$200 and a shopping list.', 'My sister wants some candy, but I say no.'] }
    ] },
  { id: 'e079', lv: 1, genre: 'story', topic: 'taiwan', title: 'A Windy Day on the Lake', zh: '湖上起風了',
    body: [
      ['Amy and her dad go to Sun Moon Lake.', 'It is in Nantou.', 'The lake is big and blue.'],
      ['They get on a boat.', 'The wind is strong.', "Oh no, it takes Dad's hat!", 'The hat flies into the water.'],
      ['A man on the boat gets it out of the water.', 'Dad says, "Thank you very much!"', 'Amy laughs, and Dad laughs, too.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "Where does Dad's hat go?", opts: ['Into the water', 'Onto the mountain', 'Into the boat', "Onto Amy's head"], a: 0, why: '第二段說：帽子飛進水裡了。', ev: ['The hat flies into the water.'] },
      { id: 'q2', k: 'ref', q: 'In "Oh no, it takes Dad\'s hat!", what does "it" mean?', opts: ['The wind', 'The boat', 'The lake', 'The man'], a: 0, why: '前一句說風很大，「它把爸爸的帽子拿走」的它就是風。', ev: ["Oh no, it takes Dad's hat!"] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ["Dad's hat flies away on a boat trip.", 'Amy learns to swim in a lake.', 'A man sells hats on a boat.', 'Amy and Dad climb a mountain.'], a: 0, why: '故事說爸爸坐船時帽子被風吹進水裡，後來被人撈起來。', ev: ['A man on the boat gets it out of the water.'] }
    ] },
  { id: 'e080', lv: 1, genre: 'schedule', topic: 'science', title: 'Science Museum Shows', zh: '科學館的表演',
    body: [
      ['Come to the City Science Museum this Sunday!', 'Here are the shows.'],
      { h: 'Sunday Shows' },
      { table: [['Show', 'Time', 'Place'], ['Toy Car Race', '10:00 a.m.', 'Room A'], ['Star Show', '11:30 a.m.', 'Room B'], ['Fun with Ice', '2:00 p.m.', 'Room A']] },
      ['Each show is thirty minutes long.', 'The Star Show room is very dark.', 'Please come ten minutes early.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When is the Toy Car Race?', opts: ['10:00 a.m.', '11:30 a.m.', '2:00 p.m.', '10:30 a.m.'], a: 0, why: '表上「玩具車比賽」那一列寫：上午 10:00。', ev: ['Toy Car Race'] },
      { id: 'q2', k: 'detail', q: 'Where is the Star Show?', opts: ['Room B', 'Room A', 'Room C', 'Room 101'], a: 0, why: '表上星星秀那一列：上午 11:30，在 B 教室。', ev: ['11:30 a.m.'] },
      { id: 'q3', k: 'vocab', q: 'What does "early" mean here?', opts: ['提早', '很晚', '準時', '一起'], a: 0, why: 'early 是「提早」：請在表演開始前十分鐘先到。', ev: ['Please come ten minutes early.'] }
    ] },
  { id: 'm058', lv: 2, genre: 'story', topic: 'travel', title: 'The Fast Train to Kaohsiung', zh: '坐高鐵去高雄', gloss: { speed: '速度' },
    body: [
      ['Last summer, Kevin took the high-speed train for the first time.', 'He went from Taipei to Kaohsiung with his grandpa.'],
      ['The train was very fast and quiet.', 'Kevin looked out of the window.', 'He saw rice fields, small towns, and mountains far away.', 'The trip took about two hours.'],
      ['Kevin was so happy that he did not want to sleep.', 'But Grandpa slept after ten minutes!', 'When they got to Kaohsiung, Grandpa woke up and said, "Wow, we are here already?"'],
      ['Kevin laughed.', 'He wanted to tell Grandpa everything he saw.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Who went with Kevin on the train?', opts: ['His grandpa', 'His mom', 'His teacher', 'His friend'], a: 0, why: '第一段說：凱文和爺爺一起從台北坐到高雄。', ev: ['He went from Taipei to Kaohsiung with his grandpa.'] },
      { id: 'q2', k: 'detail', q: 'How long was the trip?', opts: ['About two hours', 'About ten minutes', 'About five hours', 'About half an hour'], a: 0, why: '第二段最後說：這趟車大約兩個小時。', ev: ['The trip took about two hours.'] },
      { id: 'q3', k: 'infer', q: 'Why did Grandpa think the trip was so short?', opts: ['He slept, so the trip felt very short.', 'He wanted to go back to Taipei.', 'He thought the train was very slow.', 'He did not want to get off the train.'], a: 0, why: '爺爺上車十分鐘就睡著，一醒來已經到高雄 → 所以覺得怎麼這麼快就到了。', ev: ['But Grandpa slept after ten minutes!'] },
      { id: 'q4', k: 'ref', q: 'In the last paragraph, who does "He" mean?', opts: ['Kevin', 'Grandpa', 'The train driver', "Kevin's dad"], a: 0, why: '前一句是凱文在笑，接著「他想把看到的都告訴爺爺」的他就是凱文。', ev: ['He wanted to tell Grandpa everything he saw.'] }
    ] },
  { id: 'm059', lv: 2, genre: 'info', topic: 'science', title: 'Lightning and Thunder', zh: '閃電和打雷', gloss: { lightning: '閃電', thunder: '雷聲', electricity: '電' },
    body: [
      ['Why do we hear thunder after we see lightning?'],
      ['Lightning is a kind of electricity in the sky.', 'It makes the air very hot very quickly.', 'The hot air moves fast and makes a loud sound.', 'That sound is thunder.'],
      ['Light moves much faster than sound.', 'So we see the lightning first and hear the thunder later.'],
      ['When you hear thunder, go inside a building.', 'Stay away from tall trees and water.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['Why thunder comes after lightning', 'How to make electricity at home', 'Why trees grow so tall', 'How fast people can run'], a: 0, why: '文章一開始就問：為什麼先看到閃電、後聽到雷聲？接著說明原因。', ev: ['Why do we hear thunder after we see lightning?'] },
      { id: 'q2', k: 'detail', q: 'What makes the loud sound of thunder?', opts: ['Hot air that moves fast', 'Rain that hits the ground', 'Big trees that fall down', 'Clouds that hit each other'], a: 0, why: '第二段說：閃電讓空氣變得很熱，熱空氣快速移動，發出很大的聲音。', ev: ['The hot air moves fast and makes a loud sound.'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 2, what does "It" mean in "It makes the air very hot"?', opts: ['Lightning', 'Thunder', 'The sound', 'The sky'], a: 0, why: '前一句在說閃電，「它讓空氣變得很熱」的它就是閃電。', ev: ['It makes the air very hot very quickly.'] },
      { id: 'q4', k: 'detail', q: 'What should you do when you hear thunder?', opts: ['Go inside a building', 'Stand under a tall tree', 'Swim in the water', 'Look for lightning outside'], a: 0, why: '最後一段說：聽到雷聲要進到建築物裡面，遠離高大的樹和水。', ev: ['go inside a building'] }
    ] },
  { id: 'm060', lv: 2, genre: 'dialogue', topic: 'shopping', title: 'Big Bottle or Small Bottles?', zh: '大瓶還是小瓶？',
    body: [
      { who: 'Lily', s: ['Dad, we need juice for the party tomorrow.'] },
      { who: 'Dad', s: ['Look, here are two kinds.', 'The big bottle is NT$90.', 'The small bottle is NT$35.'] },
      { who: 'Lily', s: ['One big bottle has as much juice as three small bottles.'] },
      { who: 'Dad', s: ['So which one is cheaper?'] },
      { who: 'Lily', s: ['Three small bottles cost NT$105.', 'The big one is cheaper!'] },
      { who: 'Dad', s: ['Good thinking.', 'But small bottles are easy to carry.', 'Your friends can each take one.'] },
      { who: 'Lily', s: ["OK, let's buy two big bottles and some paper cups."] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much is one small bottle of juice?', opts: ['NT$35', 'NT$90', 'NT$105', 'NT$70'], a: 0, why: '爸爸說：小瓶的一瓶 35 元。', ev: ['The small bottle is NT$35.'] },
      { id: 'q2', k: 'main', q: 'What are Lily and Dad mainly talking about?', opts: ['Which juice to buy for a party', 'How to make juice at home', 'Where to have the party', 'What to give friends as gifts'], a: 0, why: '莉莉要為派對買果汁，兩人在比較大瓶和小瓶哪個划算。', ev: ['Dad, we need juice for the party tomorrow.'] },
      { id: 'q3', k: 'vocab', q: 'What does "cheaper" mean here?', opts: ['比較便宜', '比較貴', '比較大', '比較好喝'], a: 0, why: '三小瓶要 105 元，大瓶只要 90 元，所以大瓶「比較便宜」。', ev: ['The big one is cheaper!'] },
      { id: 'q4', k: 'ref', q: 'Dad says, "Your friends can each take one." What does "one" mean?', opts: ['A small bottle', 'A big bottle', 'A paper cup', 'A party gift'], a: 0, why: '爸爸前一句說小瓶好拿，所以「每人拿一瓶」的一瓶是小瓶果汁。', ev: ['Your friends can each take one.'] }
    ] },
  { id: 'm061', lv: 2, genre: 'letter', topic: 'taiwan', title: 'Come to Tainan!', zh: '來台南玩！', gloss: { email: '電子郵件', fort: '城堡（古堡）' }, names: ['Anping'],
    body: [
      { h: 'Dear Lucy,' },
      ['Thank you for your email about Japan.', 'Now let me tell you about my city, Tainan.'],
      ['Tainan is one of the oldest cities in Taiwan.', 'There are many old temples here.', 'My favorite place is Anping Old Fort.', 'It is about four hundred years old!', 'People from the Netherlands built it a long time ago.'],
      ['Tainan also has lots of yummy snacks.', 'When you come to Taiwan, I will show you around.', 'Please write back soon!'],
      { h: 'Your friend, Ben' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Ben write this email?', opts: ['To tell Lucy about Tainan', 'To ask Lucy about Japan', 'To say sorry for a late email', 'To ask Lucy to a party'], a: 0, why: '班先謝謝露西寄來日本的信，接著介紹自己住的城市台南。', ev: ['Now let me tell you about my city, Tainan.'] },
      { id: 'q2', k: 'detail', q: "What is Ben's favorite place in Tainan?", opts: ['Anping Old Fort', 'An old temple', 'A snack shop', 'The train station'], a: 0, why: '信裡說：我最喜歡的地方是安平古堡。', ev: ['My favorite place is Anping Old Fort.'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 2, what does "it" mean in "built it a long time ago"?', opts: ['Anping Old Fort', 'Tainan', 'An old temple', 'Taiwan'], a: 0, why: '前面說的是安平古堡有大約四百年，「很久以前蓋了它」的它就是安平古堡。', ev: ['People from the Netherlands built it a long time ago.'] },
      { id: 'q4', k: 'infer', q: 'What will Ben probably do when Lucy comes to Taiwan?', opts: ['Take her to see places in Tainan', 'Send her a new email about Japan', 'Go to Japan with her', 'Build an old fort with her'], a: 0, why: '班說露西來台灣時，他會帶她到處看看 → 他應該會帶她去逛台南。', ev: ['When you come to Taiwan, I will show you around.'] }
    ] },
  { id: 'm062', lv: 2, genre: 'notice', topic: 'travel', title: 'The Bus Stop Has Moved', zh: '公車站暫時搬家', gloss: { patient: '有耐心的' },
    body: [
      { h: 'Notice: Bus Stop Moved' },
      ['From May 4 to May 22, workers will fix Park Road.', 'So the No. 25 bus will not stop in front of the library.'],
      ['During these days, please wait at the new stop.', 'It is next to the post office on Lake Street.'],
      ['The bus will still come every fifteen minutes.', 'The new stop has no seats, so please be patient.'],
      ['Sorry for the trouble.', 'Thank you!']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the notice mainly about?', opts: ['A bus stop that moves for a few weeks', 'A new library on Park Road', 'A new bus number in the city', 'Workers who need some help'], a: 0, why: '告示說修路期間，25 號公車不停圖書館前面，要改到新的站牌等車。', ev: ['So the No. 25 bus will not stop in front of the library.'] },
      { id: 'q2', k: 'detail', q: 'Where is the new bus stop?', opts: ['Next to the post office', 'In front of the library', 'On Park Road', 'Next to the park'], a: 0, why: '第二段說：新站牌在湖街的郵局旁邊。', ev: ['next to the post office'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 2, what does "It" mean?', opts: ['The new stop', 'The library', 'The No. 25 bus', 'Park Road'], a: 0, why: '前一句請大家到新站牌等，「它在郵局旁邊」的它就是新站牌。', ev: ['It is next to the post office on Lake Street.'] },
      { id: 'q4', k: 'vocab', q: 'What does "patient" mean here?', opts: ['有耐心的', '生病的人', '很快的', '安靜的'], a: 0, why: '新站牌沒有座位，要站著等車，所以請大家「有耐心」一點。', ev: ['so please be patient'] }
    ] },
  { id: 'm063', lv: 2, genre: 'diary', topic: 'science', title: 'The Little Light', zh: '小燈泡亮了', gloss: { battery: '電池', wire: '電線', bulb: '燈泡' },
    body: [
      { h: 'Thursday, October 8' },
      ['Today we had a fun science class.', 'Mr. Lin gave each group a battery, two wires, and a small bulb.'],
      ['At first, our bulb did not light up.', 'We checked everything, but we did not know why.', 'Then Amy found that one wire was not touching the battery.'],
      ['When we fixed it, the bulb lit up!', 'Mr. Lin said the power must go all the way around, like a circle.'],
      ['Our group cheered.', 'I want to try it again at home with Dad.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did each group get?', opts: ['A battery, two wires, and a bulb', 'Two batteries and a small bulb', 'A battery and a science book', 'Two bulbs and one wire'], a: 0, why: '日記寫：林老師給每一組一個電池、兩條電線和一個小燈泡。', ev: ['Mr. Lin gave each group a battery, two wires, and a small bulb.'] },
      { id: 'q2', k: 'detail', q: 'Why did the bulb not light up at first?', opts: ['One wire was not touching the battery.', 'The battery was too old.', 'The bulb was broken.', 'Amy took a wire away.'], a: 0, why: '第二段說：艾美發現有一條電線沒有碰到電池。', ev: ['Then Amy found that one wire was not touching the battery.'] },
      { id: 'q3', k: 'ref', q: 'In "When we fixed it", what does "it" mean?', opts: ['The wire', 'The bulb', 'The circle', 'The class'], a: 0, why: '前一句說有一條電線沒碰到電池，「我們把它弄好」的它就是那條電線。', ev: ['When we fixed it, the bulb lit up!'] },
      { id: 'q4', k: 'infer', q: 'How did the group probably feel at the end?', opts: ['Happy', 'Angry', 'Tired', 'Afraid'], a: 0, why: '燈泡亮了以後，全組一起歡呼 → 大家應該很開心。', ev: ['Our group cheered.'] }
    ] },
  { id: 'm064', lv: 2, genre: 'schedule', topic: 'taiwan', title: 'Two Days in Alishan', zh: '阿里山兩天行程', gloss: { sunrise: '日出' },
    body: [
      ['Our class will visit Alishan in Chiayi.', 'It is a famous mountain area with old trees and a small forest train.'],
      { h: 'Trip Plan' },
      { table: [['Day', 'Time', 'Plan'], ['Day 1', '10:00 a.m.', 'Ride the forest train'], ['Day 1', '2:00 p.m.', 'See giant old trees'], ['Day 2', '4:30 a.m.', 'Get up and watch the sunrise'], ['Day 2', '9:00 a.m.', 'Take the bus home']] },
      ['It is cold on the mountain in the morning, so bring a warm jacket.', 'Please go to bed early on Day 1!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will the class do at 4:30 a.m. on Day 2?', opts: ['Watch the sunrise', 'Ride the forest train', 'Take the bus home', 'See giant old trees'], a: 0, why: '表上第二天 4:30 a.m. 那一列寫：起床看日出。', ev: ['4:30 a.m.'] },
      { id: 'q2', k: 'detail', q: 'Where is Alishan?', opts: ['In Chiayi', 'In Tainan', 'In Taipei', 'In Kaohsiung'], a: 0, why: '第一句就說：阿里山在嘉義。', ev: ['Our class will visit Alishan in Chiayi.'] },
      { id: 'q3', k: 'infer', q: 'Why should the students go to bed early on Day 1?', opts: ['They must get up very early on Day 2.', 'The forest train leaves at night.', 'It is too cold to stay up.', 'The bus comes at 10:00 a.m.'], a: 0, why: '第二天 4:30 就要起床看日出 → 所以第一天要早點睡。', ev: ['Get up and watch the sunrise', 'Please go to bed early on Day 1!'] },
      { id: 'q4', k: 'vocab', q: 'What does "warm" mean in "a warm jacket"?', opts: ['保暖的', '新的', '好看的', '很輕的'], a: 0, why: '山上早上很冷，要帶一件「保暖的」外套。', ev: ['so bring a warm jacket'] }
    ] },
  { id: 'm065', lv: 2, genre: 'howto', topic: 'shopping', title: 'Be a Smart Shopper', zh: '當個聰明的購物者', gloss: { compare: '比較', receipt: '收據' },
    body: [
      ['Do you want to spend your money well?', 'Try these ideas the next time you go shopping.'],
      ['First, look at what you already have at home.', 'You may not need a new one!', 'Next, write a list of things you really need.', 'At the store, look at the prices and compare them.', 'Do not buy something just because it looks cute.', 'Finally, keep the receipt.', 'If something is broken, you can bring it back.'],
      ['With these ideas, you can save money for the things you love.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['How to shop well and save money', 'How to sell things in a store', 'Why cute things are cheap', 'How to make a list for school'], a: 0, why: '文章一步一步教你怎麼聰明買東西，最後說這樣可以存錢。', ev: ['Do you want to spend your money well?'] },
      { id: 'q2', k: 'detail', q: 'What should you do first?', opts: ['Look at what you have at home', 'Write a list of things', 'Look at the prices', 'Keep the receipt'], a: 0, why: '第一步（First）是先看看家裡已經有什麼。', ev: ['First, look at what you already have at home.'] },
      { id: 'q3', k: 'vocab', q: 'What does "compare" mean here?', opts: ['比較', '付錢', '收好', '丟掉'], a: 0, why: '在店裡看不同的價錢，再「比較」哪個比較划算。', ev: ['look at the prices and compare them'] },
      { id: 'q4', k: 'ref', q: 'In "you can bring it back", what does "it" mean?', opts: ['The broken thing', 'The receipt', 'The list', 'The money'], a: 0, why: '同一句前面說「如果東西壞了」，「把它拿回去」的它就是壞掉的東西。', ev: ['If something is broken, you can bring it back.'] }
    ] },
  { id: 'm066', lv: 2, genre: 'story', topic: 'science', title: 'The Ice Race', zh: '冰塊賽跑', gloss: { melt: '融化' },
    body: [
      ['On a hot afternoon, Tom and his sister Mia had an ice race.', 'Each of them put a small piece of ice on a plate.'],
      ['"Let\'s see whose ice melts first," Tom said.', 'Mia had an idea.', 'She put a little salt on her ice.'],
      ["Soon, Mia's ice began to get smaller and wetter.", "Tom's ice melted, too, but more slowly."],
      ['"Salt makes ice melt faster," Mom said.', '"In some cold countries, people put salt on snowy roads."'],
      ['Mia won the race, and Tom wanted to try again with sugar.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did Mia put on her ice?', opts: ['A little salt', 'A little sugar', 'Some water', 'Some juice'], a: 0, why: '第二段說：米亞在她的冰上撒了一點鹽。', ev: ['She put a little salt on her ice.'] },
      { id: 'q2', k: 'vocab', q: 'What does "melt" mean here?', opts: ['融化', '結冰', '變大', '掉下去'], a: 0, why: 'melt 是「融化」：冰慢慢變小、變濕，最後變成水。', ev: ['"Salt makes ice melt faster," Mom said.'] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ['Two kids find out that salt helps ice melt.', 'Tom and Mia make ice cream at home.', 'Mom cleans the snowy roads.', 'Sugar makes ice get bigger.'], a: 0, why: '兄妹比賽誰的冰先融化，結果發現撒鹽的冰融得比較快。', ev: ["Soon, Mia's ice began to get smaller and wetter."] },
      { id: 'q4', k: 'infer', q: 'What will Tom probably do next?', opts: ['Put sugar on a new piece of ice', 'Eat all the salt', 'Stop playing with ice', 'Go to a cold country'], a: 0, why: '最後一句說湯姆想用糖再試一次 → 他接下來應該會在冰上放糖。', ev: ['Tom wanted to try again with sugar'] }
    ] },
  { id: 'm067', lv: 2, genre: 'info', topic: 'taiwan', title: 'Taroko Gorge', zh: '太魯閣峽谷', gloss: { gorge: '峽谷', marble: '大理石', helmet: '安全帽' },
    body: [
      ['Taroko Gorge is in Hualien, on the east side of Taiwan.', 'It is one of the most famous parks in Taiwan.'],
      ['The gorge has very tall rock walls.', 'Much of the rock is marble.', 'A river runs between the walls.', 'Over a very long time, the river cut the rock and made the deep gorge.'],
      ['Visitors can walk by the river and look up at the high walls.', 'Small rocks sometimes fall from the walls, so people wear a helmet in some places.', 'Before you go, check if the roads you want to walk on are open.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where is Taroko Gorge?', opts: ['In Hualien', 'In Tainan', 'In Chiayi', 'In Taipei'], a: 0, why: '第一句就說：太魯閣在花蓮，台灣的東邊。', ev: ['Taroko Gorge is in Hualien, on the east side of Taiwan.'] },
      { id: 'q2', k: 'detail', q: 'What made the deep gorge?', opts: ['A river', 'Strong wind', 'People with tools', 'Falling rocks'], a: 0, why: '第二段說：很長很長的時間裡，河水把石頭切開，才變成深深的峽谷。', ev: ['the river cut the rock and made the deep gorge'] },
      { id: 'q3', k: 'vocab', q: 'What does "marble" mean here?', opts: ['大理石', '彈珠', '沙子', '木頭'], a: 0, why: 'marble 也可以是彈珠，但這裡說的是石頭牆，所以是「大理石」。', ev: ['Much of the rock is marble.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 1, what does "It" mean?', opts: ['Taroko Gorge', 'Hualien', 'Taiwan', 'The east side'], a: 0, why: '「它是台灣最有名的公園之一」的它，就是第一句說的太魯閣峽谷。', ev: ['It is one of the most famous parks in Taiwan.'] }
    ] },
  { id: 'm068', lv: 2, genre: 'dialogue', topic: 'travel', title: 'Two Tickets to Yilan', zh: '兩張去宜蘭的車票', gloss: { adult: '大人', platform: '月台' },
    body: [
      { who: 'Mom', s: ['Hello.', 'Two tickets to Yilan, please.', 'One adult and one child.'] },
      { who: 'Clerk', s: ['The next train leaves at 10:15.', 'An adult ticket is NT$200, and a child ticket is half price.'] },
      { who: 'Mom', s: ['OK, that is NT$300.', 'Which platform should we go to?'] },
      { who: 'Clerk', s: ['Platform 3.', 'Please go down the stairs on your left.'] },
      { who: 'Ben', s: ['Mom, can I sit by the window?', 'I want to see the sea.'] },
      { who: 'Mom', s: ['Sure.', 'The sea is on the left side when we go to Yilan.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What time does the next train leave?', opts: ['10:15', '10:50', '3:00', '10:30'], a: 0, why: '站務員說：下一班車 10:15 開。', ev: ['The next train leaves at 10:15.'] },
      { id: 'q2', k: 'infer', q: 'How much is one child ticket?', opts: ['NT$100', 'NT$200', 'NT$300', 'NT$150'], a: 0, why: '大人票 200 元，小孩票半價 → 100 元；所以兩張加起來是 300 元。', ev: ['half price'] },
      { id: 'q3', k: 'vocab', q: 'What does "platform" mean here?', opts: ['月台', '車票', '座位', '樓梯'], a: 0, why: '媽媽問要去哪一個 platform 等車，站務員說第 3 月台，所以是「月台」。', ev: ['Which platform should we go to?'] },
      { id: 'q4', k: 'main', q: 'What is the dialogue mainly about?', opts: ['Buying train tickets to Yilan', 'Swimming in the sea in Yilan', 'Looking for a lost child', 'Taking a bus to school'], a: 0, why: '媽媽在車站買兩張去宜蘭的票，還問了開車時間和月台。', ev: ['Two tickets to Yilan, please.'] }
    ] },
  { id: 'm069', lv: 2, genre: 'story', topic: 'shopping', title: 'Too Much Change', zh: '多找的錢',
    body: [
      ['Amy went to a small fruit shop near her home.', 'She bought three apples for NT$60 and paid NT$100.'],
      ['The old woman at the shop was busy.', 'She gave Amy NT$90 back.', 'Amy looked at the money and stopped.', '"This is too much," she thought.'],
      ['Amy walked back to the shop.', '"Excuse me, you gave me too much change," she said.', 'The woman counted again and smiled.', '"You are an honest girl," she said.', 'Then she gave Amy a big orange for free.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much did the three apples cost?', opts: ['NT$60', 'NT$100', 'NT$90', 'NT$40'], a: 0, why: '第一段說：艾美買三顆蘋果，60 元。', ev: ['She bought three apples for NT$60'] },
      { id: 'q2', k: 'infer', q: 'How much change should Amy get?', opts: ['NT$40', 'NT$90', 'NT$60', 'NT$50'], a: 0, why: '付 100 元、買 60 元 → 應該找 40 元；老闆娘卻找了 90 元，多給了。', ev: ['She bought three apples for NT$60 and paid NT$100.'] },
      { id: 'q3', k: 'vocab', q: 'What does "honest" mean here?', opts: ['誠實的', '聰明的', '害羞的', '很忙的'], a: 0, why: '艾美把多找的錢拿回去還，老闆娘說她是「誠實的」女孩。', ev: ['"You are an honest girl," she said.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, who does "She" mean in "She gave Amy NT$90 back"?', opts: ['The old woman', 'Amy', "Amy's mom", "Amy's friend"], a: 0, why: '前一句說店裡的老太太很忙，「她找艾美 90 元」的她就是那位老太太。', ev: ['She gave Amy NT$90 back.'] }
    ] },
  { id: 'm070', lv: 2, genre: 'letter', topic: 'science', title: 'Our Planet Model', zh: '我們的行星模型', gloss: { model: '模型' }, names: ['Jupiter', 'Saturn'],
    body: [
      { h: 'Dear Kevin,' },
      ['How are you?', 'This week, my class made a model of the planets around the sun.'],
      ['My job was to make Earth.', 'It is the third planet from the sun.', 'I painted it blue and green because it has seas and land.'],
      ['My friend Tom made Jupiter.', 'It is the biggest planet, so his planet was much bigger than mine.', 'Amy made Saturn with a paper ring around it.'],
      ['Next month, our model will be in the school library.', 'Can you come and see it?'],
      { h: 'Your cousin, Lily' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Which planet did Lily make?', opts: ['Earth', 'Jupiter', 'Saturn', 'The sun'], a: 0, why: '信裡說：我的工作是做地球。', ev: ['My job was to make Earth.'] },
      { id: 'q2', k: 'ref', q: 'In "a paper ring around it", what does "it" mean?', opts: ['Saturn', 'Jupiter', 'Earth', 'The sun'], a: 0, why: '同一句說艾美做土星，「在它四周加一個紙環」的它就是土星。', ev: ['Amy made Saturn with a paper ring around it.'] },
      { id: 'q3', k: 'infer', q: "Why was Tom's planet bigger than Lily's?", opts: ['Jupiter is much bigger than Earth.', 'Tom had more paper than Lily.', 'Lily did not finish her job.', 'Tom made the sun, too.'], a: 0, why: '湯姆做木星、莉莉做地球；木星是最大的行星 → 所以湯姆做的比較大。', ev: ['It is the biggest planet'] },
      { id: 'q4', k: 'main', q: 'Why does Lily write to Kevin?', opts: ["To tell him about her class's model", 'To ask him to paint a planet', 'To tell him about a trip to the sun', 'To say thank you for a gift'], a: 0, why: '莉莉寫信告訴表哥凱文：全班做了太陽系行星模型，還邀他來看。', ev: ['This week, my class made a model of the planets around the sun.'] }
    ] },
  { id: 'h041', lv: 3, genre: 'info', topic: 'science', title: 'Why Does the Moon Change Its Shape?', zh: '月亮為什麼會變形狀？',
    body: [
      ['The moon is the brightest thing in the night sky, but it does not make its own light.', 'It shines because light from the sun hits it.'],
      ['The sun always lights up half of the moon.', 'As the moon moves around the Earth, we see different parts of that bright half.', 'When we can see all of it, we call it a full moon.', 'When we can see only a small part, the moon looks thin, like a smile.'],
      ['It takes about a month for the moon to go from one full moon to the next.', 'So the moon itself is not really changing.', 'Only the part we can see is changing.'],
      ['Tonight, look up and draw the shape of the moon.', 'Then do it again next week and compare the two pictures.']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['Why the moon seems to change its shape', 'How the moon makes its own light', 'Why the sun is brighter than the moon', 'How to draw the stars at night'], a: 0, why: '整篇在說明：月亮本身沒變，只是我們看到亮面的部分不同，所以形狀看起來會變。', ev: ['Only the part we can see is changing.'] },
      { id: 'q2', k: 'detail', q: 'Why does the moon shine?', opts: ['Light from the sun hits it.', 'It makes its own light.', 'The Earth gives it light.', 'The stars light it up.'], a: 0, why: '第一段說：月亮自己不會發光，是太陽的光照到它，它才會亮。', ev: ['It shines because light from the sun hits it.'] },
      { id: 'q3', k: 'detail', q: 'How long does it take to go from one full moon to the next?', opts: ['About a month', 'About a week', 'About a year', 'About a day'], a: 0, why: '第三段說：從一次滿月到下一次滿月，大約要一個月。', ev: ['It takes about a month'] },
      { id: 'q4', k: 'infer', q: 'The moon looks thin tonight. What does this tell us?', opts: ['We can see only a small part of its bright half.', 'The moon is getting smaller and smaller.', 'The sun is not shining on the moon at all.', 'The moon is very far from the Earth tonight.'], a: 0, why: '文章說只看到一小部分亮面時，月亮就細細的 → 月亮沒變小，是我們看到的亮面變少了。', ev: ['When we can see only a small part, the moon looks thin, like a smile.'] }
    ] },
  { id: 'h042', lv: 3, genre: 'story', topic: 'taiwan', title: 'Learning Taiwanese from Grandma', zh: '跟阿嬤學台語', names: ['Lukang'],
    body: [
      ['Last winter vacation, Lily stayed with her grandma in Lukang, an old town in Changhua.', 'Grandma speaks Taiwanese most of the time, but Lily only knew a few words.'],
      ['On the first day, Grandma asked her something at lunch, and Lily just smiled because she did not understand.', 'That night, Lily made a small notebook.', 'Every day, she wrote down new words Grandma taught her, like the words for "eat" and "thank you."'],
      ['She also practiced with the old man who sold rice cakes near the temple.', 'He always laughed kindly when she made mistakes.'],
      ['After two weeks, Lily could ask Grandma simple questions.', 'On her last day, Grandma held her hand and said something in Taiwanese.', 'This time, Lily understood every word: "Come back soon, my dear."']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the story mainly about?', opts: ['A girl learns Taiwanese to talk with her grandma', 'A girl sells rice cakes near a temple', 'A grandma learns English from Lily', 'A girl writes a book about Lukang'], a: 0, why: '莉莉聽不懂阿嬤的台語，就每天記單字、練習，最後聽懂阿嬤的話。', ev: ['Every day, she wrote down new words Grandma taught her'] },
      { id: 'q2', k: 'detail', q: 'What did Lily do on the first night?', opts: ['She made a small notebook.', 'She called her mom.', 'She went to the temple.', 'She bought rice cakes.'], a: 0, why: '第二段說：那天晚上，莉莉做了一本小筆記本。', ev: ['That night, Lily made a small notebook.'] },
      { id: 'q3', k: 'infer', q: 'How did Lily probably feel on her last day?', opts: ['Happy, but a little sad to leave', 'Angry with her grandma', 'Bored in the old town', 'Afraid of the old man'], a: 0, why: '她終於聽懂阿嬤說的每個字，一定很開心；阿嬤牽著她的手要她快回來 → 要離開也會捨不得。', ev: ['This time, Lily understood every word'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 3, who does "He" mean?', opts: ['The rice cake seller', "Lily's grandpa", "Lily's little brother", "Grandma's friend at school"], a: 0, why: '前一句說莉莉跟廟旁賣米糕的老先生練習，「他總是親切地笑」的他就是那位老先生。', ev: ['He always laughed kindly when she made mistakes.'] }
    ] },
  { id: 'h043', lv: 3, genre: 'dialogue', topic: 'science', title: 'Morning Here, Night There', zh: '這裡早上，那裡晚上',
    body: [
      { who: 'Ben', s: ['Mom, I just called Uncle Tom in New York.', 'He said it was still night there, and he was in bed!'] },
      { who: 'Mom', s: ['That is right.', 'When it is morning in Taiwan, it is night in New York.'] },
      { who: 'Ben', s: ['Why is that?', 'We all have the same sun.'] },
      { who: 'Mom', s: ['The Earth is like a big ball that turns around once every day.', 'Only one side of it faces the sun at a time.', 'The side facing the sun has day, and the other side has night.'] },
      { who: 'Ben', s: ['So New York is on the other side of the Earth from Taiwan?'] },
      { who: 'Mom', s: ['Yes, almost.', 'Our morning is their night.'] },
      { who: 'Ben', s: ['Then I will call Uncle Tom again after dinner.', 'It will be morning for him then!'] }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What are Ben and Mom mainly talking about?', opts: ['Why it is day in one place and night in another', 'How to call Uncle Tom on the phone', 'What to eat for dinner tonight', 'Why New York is a very big city'], a: 0, why: '班問為什麼台灣早上、紐約卻是晚上，媽媽解釋地球自轉造成白天和黑夜。', ev: ['The side facing the sun has day, and the other side has night.'] },
      { id: 'q2', k: 'detail', q: 'How often does the Earth turn around?', opts: ['Once every day', 'Once every week', 'Twice every day', 'Once every month'], a: 0, why: '媽媽說：地球像一顆大球，每天轉一圈。', ev: ['turns around once every day'] },
      { id: 'q3', k: 'infer', q: 'Why will Ben call Uncle Tom after dinner?', opts: ['Uncle Tom will be awake then.', 'Uncle Tom eats dinner with Ben.', 'Ben wants to go to bed early.', 'Ben has no time in the morning.'], a: 0, why: '台灣晚上是紐約的早上 → 晚飯後打過去，湯姆叔叔已經起床了。', ev: ['It will be morning for him then!'] },
      { id: 'q4', k: 'ref', q: 'Mom says, "Our morning is their night." Who does "their" mean?', opts: ['People in New York', 'People in Taiwan', 'Ben and Mom', "Ben's friends at school"], a: 0, why: '「我們的早上」是台灣，「他們的晚上」指的是住在紐約的人。', ev: ['Our morning is their night.'] }
    ] },
  { id: 'h044', lv: 3, genre: 'schedule', topic: 'travel', title: 'Around Taiwan by Train', zh: '搭火車環島', gloss: { harbor: '港口' },
    body: [
      ["This summer, Mia's family will travel around Taiwan by train in four days.", 'Here is their plan.'],
      { table: [['Day', 'From', 'To', 'Things to do'], ['1', 'Taipei', 'Hualien', 'See the sea and the mountains'], ['2', 'Hualien', 'Taitung', 'Ride bikes in the rice fields'], ['3', 'Taitung', 'Kaohsiung', 'Visit a big park by the harbor'], ['4', 'Kaohsiung', 'Taipei', 'Take the high-speed train home']] },
      ['They will stay in a hotel near the train station each night.', 'Mia is most excited about Day 2, because she loves riding bikes.', 'Her brother wants to buy a lunch box on every train.', 'Dad says they must not carry too many bags, because they will change trains often.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where will the family go on Day 2?', opts: ['From Hualien to Taitung', 'From Taipei to Hualien', 'From Taitung to Kaohsiung', 'From Kaohsiung to Taipei'], a: 0, why: '表上第 2 天：從花蓮到台東，在稻田騎腳踏車。', ev: ['Ride bikes in the rice fields'] },
      { id: 'q2', k: 'infer', q: 'Where will the family probably sleep on the first night?', opts: ['In Hualien', 'In Taipei', 'In Taitung', 'In Kaohsiung'], a: 0, why: '第一天從台北坐到花蓮，每晚都住車站附近的旅館 → 第一晚應該住花蓮。', ev: ['See the sea and the mountains', 'near the train station each night'] },
      { id: 'q3', k: 'main', q: 'What is the best title for this plan?', opts: ['A Four-Day Train Trip Around Taiwan', 'Riding Bikes in Taitung', 'How to Buy a Lunch Box', 'The Biggest Park in Kaohsiung'], a: 0, why: '整份計畫是米亞一家四天坐火車繞台灣一圈。', ev: ['travel around Taiwan by train in four days'] },
      { id: 'q4', k: 'vocab', q: 'What does "change" mean in the last sentence?', opts: ['換（車）', '零錢', '改變想法', '搬家'], a: 0, why: '這裡的 change trains 是「換火車」：一路要換好幾次車，所以行李不能太多。', ev: ['they will change trains often'] }
    ] },
  { id: 'h045', lv: 3, genre: 'letter', topic: 'shopping', title: 'A Problem with My New Bag', zh: '新書包出了問題', gloss: { zipper: '拉鍊' },
    body: [
      { h: 'Dear Happy Bag Shop,' },
      ['I am writing to you about a school bag I bought from your website last week.'],
      ['The bag is blue and has a cute bear on it, and I really like it.', 'But when I opened it for the first time, the zipper broke.', 'Now I cannot close the bag, so my books might fall out.'],
      ['I still have the receipt and the box.', 'Could you please send me a new bag of the same kind?', 'If you do not have one, I would like my money back.'],
      ['I hope to hear from you soon.', 'Thank you for your help.'],
      { h: 'Kevin Chen' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why does Kevin write this email?', opts: ['To ask for a new bag or his money back', 'To buy one more blue bag', 'To thank the shop for a gift', 'To ask how much the bag is'], a: 0, why: '凱文的書包拉鍊壞了，他寫信請店家換新的，或是退錢。', ev: ['Could you please send me a new bag of the same kind?'] },
      { id: 'q2', k: 'detail', q: 'What is wrong with the bag?', opts: ['The zipper broke.', 'The bear fell off.', 'The color is wrong.', 'It is too small for his books.'], a: 0, why: '第二段說：第一次打開，拉鍊就壞了。', ev: ['the zipper broke'] },
      { id: 'q3', k: 'infer', q: 'Why does Kevin say he still has the receipt?', opts: ['To show that he bought the bag there', 'To ask the shop for a new receipt', 'He wants to give it to a friend', 'The receipt is broken, too'], a: 0, why: '收據可以證明東西是在這家店買的 → 店家才會幫他換貨或退錢。', ev: ['I still have the receipt and the box.'] },
      { id: 'q4', k: 'ref', q: 'In "If you do not have one", what does "one" mean?', opts: ['A new blue bag like his', 'A receipt from the shop', 'A box for the books', 'A cute bear toy'], a: 0, why: '前一句請店家寄一個一樣的新書包，「如果你們沒有」指的就是同款的新書包。', ev: ['If you do not have one, I would like my money back.'] }
    ] },
  { id: 'h046', lv: 3, genre: 'notice', topic: 'taiwan', title: 'Welcome to Yangmingshan', zh: '歡迎來到陽明山', gloss: { volcanoes: '火山' },
    body: [
      { h: 'Welcome to Yangmingshan National Park' },
      ['Yangmingshan National Park is close to the city of Taipei.', 'In spring, many people come to see the flowers, and in winter, some come for the hot springs.', 'Long ago, there were volcanoes here, so in some places, hot steam still comes out of the ground.'],
      { h: 'Park Rules' },
      ['Please stay on the paths at all times.', 'Do not touch the hot water or steam, because it can burn your skin.', 'Do not pick flowers or feed the animals.', 'Take your trash home with you.', 'If the weather turns bad, leave the mountain early.'],
      ['Thank you for helping us keep the park beautiful!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why do some people come to the park in winter?', opts: ['For the hot springs', 'To see the flowers', 'To feed the animals', 'To play in the snow'], a: 0, why: '告示說：春天大家來看花，冬天有些人來泡溫泉。', ev: ['some come for the hot springs'] },
      { id: 'q2', k: 'infer', q: 'Amy sees a beautiful flower and wants to take it home. What should she do?', opts: ['Take a picture of it', 'Pick it quietly', 'Ask a friend to pick it', 'Come back in winter for it'], a: 0, why: '規則寫不可以摘花 → 喜歡的話只能拍照留下來。', ev: ['Do not pick flowers or feed the animals.'] },
      { id: 'q3', k: 'vocab', q: 'What does "trash" mean here?', opts: ['垃圾', '行李', '花草', '水壺'], a: 0, why: 'trash 是「垃圾」：自己的垃圾要自己帶回家。', ev: ['Take your trash home with you.'] },
      { id: 'q4', k: 'main', q: 'Why is this notice written?', opts: ['To tell visitors about the park and its rules', 'To sell tickets for the hot springs', 'To ask people to plant more flowers', 'To tell people how to find volcanoes'], a: 0, why: '告示先介紹陽明山，再列出遊客要遵守的規則。', ev: ['Please stay on the paths at all times.'] }
    ] },
  { id: 'h047', lv: 3, genre: 'diary', topic: 'travel', title: 'My First Flight', zh: '第一次坐飛機', gloss: { coral: '珊瑚' },
    body: [
      { h: 'Saturday, July 18' },
      ['Today I took a plane for the first time!', 'My family flew from Taipei to Penghu, a group of small islands in the sea west of Taiwan.'],
      ['Before we got on the plane, a worker checked our bags.', "I was a little nervous when the plane went up, so I held Mom's hand.", 'But soon I saw white clouds under us, and the sea looked like blue glass.', 'The flight took less than an hour.'],
      ['It was sunny and very hot in Penghu.', 'In the afternoon, we visited an old village with houses made of stone and coral.', 'Tomorrow we will take a boat to another small island.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where is Penghu?', opts: ['In the sea west of Taiwan', 'In the mountains near Taipei', 'On the east side of Taiwan', 'Near Hualien'], a: 0, why: '日記寫：澎湖是台灣西邊海上的一群小島。', ev: ['a group of small islands in the sea west of Taiwan'] },
      { id: 'q2', k: 'vocab', q: 'What does "nervous" mean here?', opts: ['緊張的', '興奮的', '生氣的', '想睡的'], a: 0, why: '飛機起飛時作者握著媽媽的手，可見是「緊張的」。', ev: ["I was a little nervous when the plane went up, so I held Mom's hand."] },
      { id: 'q3', k: 'infer', q: 'Which is probably true about the writer?', opts: ['The writer felt better after the plane went up.', 'The writer did not like the white clouds.', 'The writer was afraid of the boat.', 'The writer took a plane many times before.'], a: 0, why: '起飛時很緊張，但很快就看到白雲和像玻璃一樣的海 → 後來心情變好了。', ev: ['But soon I saw white clouds under us'] },
      { id: 'q4', k: 'main', q: 'What is the diary mainly about?', opts: ["The writer's first plane trip to Penghu", 'A boat trip around Taiwan', 'How to make a house with stone', 'A busy day for a worker'], a: 0, why: '整篇寫作者第一次坐飛機去澎湖，和到了以後做的事。', ev: ['Today I took a plane for the first time!'] }
    ] },
  { id: 'h048', lv: 3, genre: 'howto', topic: 'science', title: 'Make a Simple Compass', zh: '做一個簡單的指南針', gloss: { compass: '指南針', magnet: '磁鐵' },
    body: [
      ['A compass helps people find their way because its needle always points north and south.', 'You can make a simple one at home.'],
      { h: 'What you need' },
      { table: [['What', 'How many'], ['A needle', '1'], ['A magnet', '1'], ['A small leaf', '1'], ['A bowl of water', '1']] },
      { h: 'Steps' },
      ['First, ask an adult to help you, because the needle is sharp.', 'Rub the magnet along the needle in one direction about thirty times.', 'This turns the needle into a small magnet.', 'Next, put the leaf on the water and lay the needle on it gently.', 'Then wait and watch.', 'The leaf will slowly turn until the needle points north and south.'],
      ['Try turning the bowl.', 'The needle will still point the same way!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why should you ask an adult to help?', opts: ['The needle is sharp.', 'The water is hot.', 'The magnet is heavy.', 'The leaf is too small.'], a: 0, why: '第一步就說：因為針很尖，要請大人幫忙。', ev: ['because the needle is sharp'] },
      { id: 'q2', k: 'main', q: 'What is the article mainly about?', opts: ['How to make a simple compass at home', 'Why leaves float on water', 'How to find a lost needle', 'Where magnets come from'], a: 0, why: '文章列出材料和步驟，教你在家做一個簡單的指南針。', ev: ['You can make a simple one at home.'] },
      { id: 'q3', k: 'ref', q: 'In "lay the needle on it gently", what does "it" mean?', opts: ['The leaf', 'The water', 'The magnet', 'The bowl'], a: 0, why: '同一句先把葉子放在水上，再把針輕輕放在「它」上面，它就是葉子。', ev: ['Next, put the leaf on the water and lay the needle on it gently.'] },
      { id: 'q4', k: 'infer', q: 'What would probably happen if you did not rub the needle with the magnet?', opts: ['It would not point north and south.', 'It would sink very fast.', 'It would get very hot.', 'It would point north even faster.'], a: 0, why: '針要先用磁鐵磨過才會變成小磁鐵，才會指南北 → 沒磨過就不會指方向。', ev: ['This turns the needle into a small magnet.'] }
    ] },
  { id: 'h049', lv: 3, genre: 'story', topic: 'shopping', title: 'The Two-Week Rule', zh: '兩個星期的規則',
    body: [
      ['Mia saw a cool robot toy in a shop window.', 'It cost NT$800, and she wanted it right away.'],
      ['"Can I use my birthday money to buy it?" she asked Dad.', 'Dad said, "Sure, but let\'s follow our family rule first."', '"If you still want it after two weeks, you can buy it."'],
      ['For the first few days, Mia thought about the robot all the time.', 'In the second week, she started reading a new set of books from the library.', 'Soon she forgot about the toy.'],
      ['When the two weeks were over, Dad asked, "Do you still want the robot?"', 'Mia thought for a moment and shook her head.', 'Instead, she spent NT$300 on three books of her own and saved the rest.'],
      ['"Waiting helps me know what I really want," she said with a smile.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How much was the robot toy?', opts: ['NT$800', 'NT$300', 'NT$500', 'NT$80'], a: 0, why: '第一段說：機器人玩具要 800 元。', ev: ['It cost NT$800'] },
      { id: 'q2', k: 'main', q: 'What is the story mainly about?', opts: ['Waiting helps Mia make a better choice.', 'Mia gets a robot for her birthday.', 'Dad buys Mia three new books.', 'Mia loses her birthday money.'], a: 0, why: '米亞照家規等了兩星期，發現自己其實沒那麼想要，最後做了更好的決定。', ev: ['"Waiting helps me know what I really want," she said with a smile.'] },
      { id: 'q3', k: 'infer', q: 'Why did Mia forget about the toy?', opts: ['She got busy reading new books.', 'Dad put the toy away.', 'The shop sold the last robot.', 'She already had the same toy.'], a: 0, why: '第二週她開始看圖書館借來的新書，看得很投入 → 慢慢就忘了玩具。', ev: ['In the second week, she started reading a new set of books from the library.'] },
      { id: 'q4', k: 'vocab', q: 'What does "rest" mean in "saved the rest"?', opts: ['剩下的部分', '休息', '睡覺', '全部'], a: 0, why: '花 300 元買書，「剩下的」生日錢就存起來；這裡的 rest 不是休息。', ev: ['saved the rest'] }
    ] },
  { id: 'h050', lv: 3, genre: 'info', topic: 'travel', title: 'Travel in Taiwan, Then and Now', zh: '台灣交通的從前和現在', gloss: { carts: '拉車（牛車）' },
    body: [
      ['Today, you can travel from Taipei to Kaohsiung in about two hours by high-speed train.', 'But long ago, the same trip took many days.'],
      ['Before there were trains, most people walked.', 'Some rode in ox carts, and some took small boats on rivers.', 'Bad roads and big rivers made travel slow and hard.'],
      ["More than 130 years ago, Taiwan's first train line was built in the north.", 'People were surprised that a train could carry so many people and things so fast.'],
      ['Later, train lines went all around the island.', 'About twenty years ago, the high-speed train started running on the west side.'],
      ['Now, trips that once took days take only a few hours.', 'Next time you ride a train, think about how lucky we are!']
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'What is the article mainly about?', opts: ['How travel in Taiwan changed over time', 'How to buy a high-speed train ticket', 'Why ox carts were so slow', 'Where to see old trains today'], a: 0, why: '文章從以前走路、坐牛車，說到火車、高鐵，講台灣交通怎麼一路改變。', ev: ['Now, trips that once took days take only a few hours.'] },
      { id: 'q2', k: 'detail', q: "When was Taiwan's first train line built?", opts: ['More than 130 years ago', 'About twenty years ago', 'About fifty years ago', 'More than 500 years ago'], a: 0, why: '第三段說：台灣第一條鐵路是一百三十多年前在北部蓋的。', ev: ["Taiwan's first train line was built in the north"] },
      { id: 'q3', k: 'infer', q: 'Why did the trip from Taipei to Kaohsiung take many days long ago?', opts: ['People walked, and the roads were bad.', 'People liked to stop and rest.', 'The trains were very slow.', 'There were too many cars.'], a: 0, why: '以前沒有火車，大多走路，路又不好、河又大 → 所以要走很多天。', ev: ['Before there were trains, most people walked.', 'Bad roads and big rivers made travel slow and hard.'] },
      { id: 'q4', k: 'vocab', q: 'What does "surprised" mean here?', opts: ['驚訝的', '難過的', '生氣的', '無聊的'], a: 0, why: '第一次看到火車能這麼快載很多人和東西，大家都很「驚訝」。', ev: ['People were surprised'] }
    ] }
]);
