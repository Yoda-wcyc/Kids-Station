/* english-reading/data/a2.js — 作者 2 的 38 篇（篇號、主題範圍見 english-reading/CONTRACT.md §8）。只改這一個檔；改完跑 node english-reading/check.js a2 */
window.DATA_ER = (window.DATA_ER || []).concat([
  { id: 'e021', lv: 1, genre: 'story', topic: 'animal', title: 'Lucky at the School Door', zh: '校門口的小狗', names: ['Lucky'],
    body: [
      ['Every morning, a little brown dog sits at the school door.', 'He has no home.', 'The children call him Lucky.'],
      ['Ben gives him water.', 'Amy gives him some bread.', 'Lucky is very happy, and he jumps up and down.'],
      ['One day, Lucky is not at the door.', 'The children are sad.', 'Then Mr. Lin comes to school with Lucky.', '"He lives with me now," Mr. Lin says.', 'Everyone claps.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Amy give Lucky?', opts: ['Some bread', 'Some water', 'A new home', 'Some milk'], a: 0, why: '第二段說：艾美給小狗一些麵包；給水的是班。', ev: ['Amy gives him some bread.'] },
      { id: 'q2', k: 'ref', q: 'In "Ben gives him water," who does "him" mean?', opts: ['Lucky', 'Ben', 'Mr. Lin', 'Amy'], a: 0, why: '「him（他）」指的是坐在校門口的小狗 Lucky，班拿水給牠喝。', ev: ['Ben gives him water.'] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ['A dog that finds a home', 'A boy who loses his dog at school', 'A teacher who sells dogs', 'Children who play games at the door'], a: 0, why: '小狗原本沒有家，最後林老師說牠現在跟他住，整篇在說小狗找到新家。', ev: ['He lives with me now'] }
    ] },
  { id: 'e022', lv: 1, genre: 'info', topic: 'animal', title: 'Birds at Our School', zh: '校園裡的小鳥',
    body: [
      ['Many birds live at our school.', 'You can see them in the trees and on the grass.'],
      ['Some birds are small and brown.', 'They often look for bugs on the grass.', 'Some birds are black and white.', 'They sing in the morning.'],
      ['Birds are our friends.', 'Please do not run after them.', 'Just watch them quietly and listen to their songs.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When do the black and white birds sing?', opts: ['In the morning', 'At night', 'At noon', 'In the evening'], a: 0, why: '第二段說：黑白色的鳥會在早上唱歌。', ev: ['They sing in the morning.'] },
      { id: 'q2', k: 'vocab', q: 'What does "quietly" mean here?', opts: ['安靜地', '很快地', '大聲地', '生氣地'], a: 0, why: 'quietly 是「安靜地」：不要追鳥，安安靜靜看牠們、聽牠們唱歌。', ev: ['Just watch them quietly'] },
      { id: 'q3', k: 'main', q: 'What is the article mainly about?', opts: ['Birds at a school', 'How to cook rice for birds', 'A bird shop near the school', 'Trees in the city park'], a: 0, why: '整篇介紹學校裡有哪些鳥、牠們做什麼，還有要怎麼對待牠們。', ev: ['Many birds live at our school.'] }
    ] },
  { id: 'e023', lv: 1, genre: 'dialogue', topic: 'weather', title: 'A Typhoon Day', zh: '颱風天',
    body: [
      { who: 'Tom', s: ['Mom, is there school today?'] },
      { who: 'Mom', s: ['No, there is no school.', 'A typhoon is coming.'] },
      { who: 'Tom', s: ['Can I play in the park?'] },
      { who: 'Mom', s: ['No, it is not safe outside.', 'The wind is too strong.'] },
      { who: 'Tom', s: ['OK.', 'Then can we make a cake at home?'] },
      { who: 'Mom', s: ['Good idea!', 'We have eggs and milk.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why is there no school today?', opts: ['A typhoon is coming.', 'It is Sunday.', 'Tom is sick.', 'The school is closed for a party.'], a: 0, why: '媽媽說今天不用上學，因為颱風要來了。', ev: ['A typhoon is coming.'] },
      { id: 'q2', k: 'infer', q: 'What will Tom and Mom probably do next?', opts: ['Make a cake at home', 'Go to the park', 'Go to school', 'Buy eggs at the shop'], a: 0, why: '湯姆提議在家做蛋糕，媽媽說好主意，家裡也有蛋和牛奶 → 他們接下來應該會做蛋糕。', ev: ['Then can we make a cake at home?', 'Good idea!'] },
      { id: 'q3', k: 'ref', q: 'Mom says, "We have eggs and milk." Who does "we" mean?', opts: ['Tom and Mom', 'Tom and his friends', 'The teachers', 'Dad and Grandma'], a: 0, why: '媽媽在跟湯姆說話，「我們」就是媽媽和湯姆這一家人。', ev: ['We have eggs and milk.'] }
    ] },
  { id: 'e024', lv: 1, genre: 'diary', topic: 'plant', title: 'My Bean Plant', zh: '我的豆子', gloss: { soil: '泥土' },
    body: [
      { h: 'Monday, March 3' },
      ['Today our teacher gives us some beans.', 'I put three beans in a cup of soil.', 'I give them a little water.'],
      { h: 'Friday, March 7' },
      ['I see something green in my cup!', 'It is a very small plant.', 'I am so happy.', 'I want to see it grow every day.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How many beans does the writer put in the cup?', opts: ['Three', 'Two', 'Four', 'Seven'], a: 0, why: '星期一的日記寫：我把三顆豆子放進一杯土裡。', ev: ['I put three beans in a cup of soil.'] },
      { id: 'q2', k: 'vocab', q: 'What does "grow" mean here?', opts: ['長大', '睡覺', '跳舞', '喝水'], a: 0, why: 'grow 是「長大、生長」：作者想每天看小豆苗長大。', ev: ['I want to see it grow every day.'] },
      { id: 'q3', k: 'main', q: 'What is the diary mainly about?', opts: ['A bean starts to grow', 'A trip to a flower shop', 'A green cup for a teacher', 'A rainy day at school'], a: 0, why: '星期一種下豆子，星期五就看到綠色的小芽，整篇在說豆子發芽了。', ev: ['It is a very small plant.'] }
    ] },
  { id: 'e025', lv: 1, genre: 'notice', topic: 'ocean', title: 'Beach Clean-Up Day', zh: '淨灘日', names: ['Blue Sky Beach'],
    body: [
      { h: 'Beach Clean-Up Day' },
      ['Come and help clean our beach!'],
      ['We will meet at Blue Sky Beach on Saturday at eight.', 'Please wear a hat and bring water.', 'We will give you a big bag.', 'Pick up bottles, paper, and other trash.', 'Do not touch glass with your hands.', 'Tell us about it.'],
      ["Let's keep the sea clean for the fish!"]
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When will people meet at the beach?', opts: ['At eight on Saturday', 'At eight on Sunday', 'At ten on Saturday', 'At eleven on Saturday'], a: 0, why: '告示寫：星期六八點在藍天海灘集合。', ev: ['on Saturday at eight'] },
      { id: 'q2', k: 'main', q: 'Why is this notice written?', opts: ['To ask people to clean the beach', 'To sell hats and water', 'To tell about a fish show', 'To ask people to swim in the sea'], a: 0, why: '告示一開頭就說「來幫忙清理我們的海灘」，後面寫集合時間和要撿什麼。', ev: ['Come and help clean our beach!'] },
      { id: 'q3', k: 'vocab', q: 'What does "trash" mean here?', opts: ['垃圾', '貝殼', '小魚', '沙子'], a: 0, why: 'trash 是「垃圾」：要撿瓶子、紙和其他垃圾。', ev: ['other trash'] }
    ] },
  { id: 'e026', lv: 1, genre: 'schedule', topic: 'animal', title: 'Lunch Time for Zoo Animals', zh: '動物園餵食時間', names: ['Happy Zoo'],
    body: [
      ['Come and watch the animals eat at Happy Zoo!'],
      { h: 'Animal Lunch Time' },
      { table: [['Animal', 'Time'], ['Monkeys', '9:30 a.m.'], ['Elephants', '11:00 a.m.'], ['Bears', '2:00 p.m.'], ['Lions', '4:00 p.m.']] },
      ['The bears eat fish.', 'The monkeys eat bananas and apples.', 'The elephants eat a lot of grass.', 'Please do not give your food to the animals.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When do the elephants eat?', opts: ['11:00 a.m.', '9:30 a.m.', '2:00 p.m.', '4:00 p.m.'], a: 0, why: '表上大象（Elephants）的時間是上午 11:00。', ev: ['11:00 a.m.'] },
      { id: 'q2', k: 'detail', q: 'What do the monkeys eat?', opts: ['Bananas and apples', 'Fish and apples', 'Lots of grass and bananas', 'Meat and bananas'], a: 0, why: '表格下面寫：猴子吃香蕉和蘋果。', ev: ['The monkeys eat bananas and apples.'] },
      { id: 'q3', k: 'infer', q: 'Mia gets to the zoo at 1:00 p.m. Which animals can she watch eat first?', opts: ['Bears', 'Monkeys', 'Elephants', 'Lions'], a: 0, why: '下午一點時，猴子（9:30）和大象（11:00）都吃完了，接下來最早的是下午兩點的熊。', ev: ['2:00 p.m.'] }
    ] },
  { id: 'e027', lv: 1, genre: 'letter', topic: 'weather', title: 'Rain Every Day', zh: '天天下雨',
    body: [
      { h: 'Dear Jenny,' },
      ['It rains every day in Taipei this month.', 'My shoes are always wet.', 'I cannot ride my bike to the park.'],
      ['But I like the rain, too.', 'I wear my yellow coat and jump in the water.', 'My little sister watches me.', 'She laughs and says, "You look like a duck!"'],
      ['Is it rainy in your city, too?', 'Please write back soon.'],
      { h: 'Your friend, Amy' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "What color is Amy's coat?", opts: ['Yellow', 'Purple', 'Orange', 'Pink'], a: 0, why: '第二段說：艾美穿她的黃色外套，在水裡跳。', ev: ['I wear my yellow coat and jump in the water.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, who does "She" mean?', opts: ["Amy's little sister", 'Jenny', 'Amy', "Amy's mom"], a: 0, why: '前一句說「我妹妹在看我」，接著「她」笑著說話，她就是艾美的妹妹。', ev: ['She laughs and says'] },
      { id: 'q3', k: 'main', q: 'Why does Amy write this letter?', opts: ['To tell Jenny about the rainy days', 'To ask Jenny for a new bike', 'To tell Jenny about her duck', 'To ask Jenny to come and ride bikes in the park'], a: 0, why: '信裡都在說這個月台北天天下雨，還有她在雨天做了什麼。', ev: ['It rains every day in Taipei this month.'] }
    ] },
  { id: 'e028', lv: 1, genre: 'howto', topic: 'plant', title: 'Grow Green Onions in Water', zh: '用水種蔥', gloss: { onions: '蔥' },
    body: [
      ['You can grow green onions at home.'],
      ['First, cut the green onions.', 'Ask Mom or Dad to help you cut.', 'Keep the white end.', 'Next, put the white end in a cup of water.', 'Then put the cup near a window.', 'Change the water every two days.'],
      ['Soon you will see new leaves.', 'Now you can cut them and eat them!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How often should you change the water?', opts: ['Every two days', 'Every day', 'Every week', 'Every two weeks'], a: 0, why: '步驟最後一句說：每兩天換一次水。', ev: ['Change the water every two days.'] },
      { id: 'q2', k: 'ref', q: 'What does "them" mean in "cut them and eat them"?', opts: ['The green onions', 'The cups of water', 'Mom and Dad', 'The windows'], a: 0, why: '蔥長出新葉子以後，就可以把「它們」剪下來吃，它們就是種好的蔥。', ev: ['Now you can cut them and eat them!'] },
      { id: 'q3', k: 'vocab', q: 'What does "near" mean here?', opts: ['靠近', '裡面', '下面', '遠離'], a: 0, why: 'near 是「靠近」：把杯子放在窗戶旁邊，蔥才曬得到太陽。', ev: ['Then put the cup near a window.'] }
    ] },
  { id: 'e029', lv: 1, genre: 'story', topic: 'ocean', title: 'The Little Turtle', zh: '小海龜', gloss: { plastic: '塑膠' },
    body: [
      ['Ben and his dad walk on the beach.', 'They see a little turtle near the water.', 'It cannot move well.'],
      ['A plastic bag is on its leg.', 'Dad takes the bag off slowly.'],
      ['Then the turtle walks to the sea.', 'It swims away in the blue water.', 'Ben waves and says, "Bye, little friend!"', 'He puts the bag in a trash can.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "What is on the turtle's leg?", opts: ['A plastic bag', 'A piece of paper', 'Some fish', 'A trash can'], a: 0, why: '第二段說：一個塑膠袋卡在海龜的腳上。', ev: ['A plastic bag is on its leg.'] },
      { id: 'q2', k: 'infer', q: 'Why can the turtle swim away at the end?', opts: ['Dad takes the bag off its leg.', 'Ben gives it some fish.', 'The water is very warm.', 'Ben carries it into the sea with his hands.'], a: 0, why: '海龜一開始動不好，是因為袋子卡在腳上；爸爸把袋子拿掉後，牠就能游走了。', ev: ['It cannot move well.', 'Dad takes the bag off slowly.'] },
      { id: 'q3', k: 'main', q: 'What is the best title for the story?', opts: ['Helping a Turtle', 'A Day at the Pool', 'Ben Loses His Bag', 'Fish for Dinner'], a: 0, why: '班和爸爸在海邊幫助一隻被塑膠袋卡住的小海龜，所以「幫助海龜」最適合。', ev: ['They see a little turtle near the water.'] }
    ] },
  { id: 'e030', lv: 1, genre: 'notice', topic: 'animal', title: 'Lost Cat', zh: '找貓', names: ['Coco'],
    body: [
      { h: 'Lost Cat' },
      ['Have you seen our cat, Coco?', 'She is small and white.', 'She has one black ear and blue eyes.', 'She is very shy.', 'We lost her near Park Street on Sunday night.', 'If you see her, please tell Mr. Chen at the fruit shop.', 'Thank you!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Coco look like?', opts: ['White with one black ear', 'Black with one white ear', 'White with brown eyes', 'Small and gray'], a: 0, why: '告示寫：可可又小又白，有一隻黑色的耳朵和藍眼睛。', ev: ['She has one black ear and blue eyes.'] },
      { id: 'q2', k: 'infer', q: "How do Coco's family probably feel?", opts: ['Sad', 'Happy', 'Angry', 'Hungry'], a: 0, why: '他們的貓走丟了，還貼告示到處問人 → 可以想到家人很難過、很擔心。', ev: ['Have you seen our cat, Coco?'] },
      { id: 'q3', k: 'ref', q: 'In "She is very shy," who does "She" mean?', opts: ['Coco', 'Mr. Chen', 'The writer', 'A dog on Park Street'], a: 0, why: '整張告示都在說走丟的貓，「她很害羞」的她就是貓咪可可。', ev: ['She is very shy.'] }
    ] },
  { id: 'e031', lv: 1, genre: 'info', topic: 'weather', title: 'Four Seasons in Taiwan', zh: '台灣的四季', gloss: { season: '季節' },
    body: [
      ['Taiwan has four seasons.', 'Each season has its own weather.'],
      ['Spring is warm, and many flowers come out.', 'Summer is very hot.', 'People like to swim and eat ice cream.', 'Fall is cool and windy.', 'It is a good time to fly a kite.', 'Winter is cold and often rainy in Taipei.', 'People drink hot soup to stay warm.'],
      ['Which season do you like best?']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Which season is a good time to fly a kite?', opts: ['Fall', 'Spring', 'Summer', 'Winter'], a: 0, why: '文章說秋天涼涼的、風很大，是放風箏的好時候。', ev: ['It is a good time to fly a kite.'] },
      { id: 'q2', k: 'vocab', q: 'What does "windy" mean here?', opts: ['風很大的', '天氣很熱的', '常常下雨的', '下雪的'], a: 0, why: 'windy 是「風很大的」：秋天又涼風又大，所以適合放風箏。', ev: ['Fall is cool and windy.'] },
      { id: 'q3', k: 'main', q: 'What is the article mainly about?', opts: ['The four seasons in Taiwan', 'How to fly a kite', 'Hot soup in winter', 'How to make ice cream on a hot summer day'], a: 0, why: '文章一個一個介紹台灣的春、夏、秋、冬。', ev: ['Taiwan has four seasons.'] }
    ] },
  { id: 'e032', lv: 1, genre: 'dialogue', topic: 'plant', title: 'The School Garden', zh: '學校的菜園',
    body: [
      { who: 'Mia', s: ['Mr. Lin, what are these small green plants?'] },
      { who: 'Mr. Lin', s: ['They are tomato plants.', 'Soon they will have red tomatoes.'] },
      { who: 'Mia', s: ['Wow!', 'Can I help you?'] },
      { who: 'Mr. Lin', s: ['Sure.', 'Please give them some water.', 'They need water every day.'] },
      { who: 'Mia', s: ['OK!', 'Can we eat the tomatoes later?'] },
      { who: 'Mr. Lin', s: ['Yes.', 'We can eat them together at lunch.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What plants are in the garden?', opts: ['Tomato plants', 'Flowers', 'Green beans', 'Small banana trees'], a: 0, why: '林老師說：這些是番茄的植物，很快就會長出紅番茄。', ev: ['They are tomato plants.'] },
      { id: 'q2', k: 'ref', q: 'Mr. Lin says, "Please give them some water." What does "them" mean?', opts: ['The tomato plants', 'The children in the class', 'The red apples', 'The lunch boxes'], a: 0, why: '他們在說菜園裡的番茄，「給它們澆水」的它們就是番茄植物。', ev: ['Please give them some water.'] },
      { id: 'q3', k: 'main', q: 'What are Mia and Mr. Lin mainly talking about?', opts: ['The tomato plants in the garden', 'What to eat for lunch today', 'A new teacher at school', 'How to buy some flowers in a shop'], a: 0, why: '米亞一開始就問這些綠色植物是什麼，後面都在說怎麼照顧番茄、什麼時候吃。', ev: ['Mr. Lin, what are these small green plants?'] }
    ] },
  { id: 'e033', lv: 1, genre: 'diary', topic: 'ocean', title: 'A Day at the Aquarium', zh: '參觀水族館', gloss: { aquarium: '水族館', jellyfish: '水母', shark: '鯊魚' },
    body: [
      { h: 'Saturday, July 12' },
      ['Today I go to the aquarium with my family.', 'There are many kinds of fish.'],
      ['I like the jellyfish best.', 'They are pink and look like small umbrellas.', 'They move slowly in the water.'],
      ['I also see a big shark.', 'It has many big teeth!', 'My brother hides behind Dad.'],
      ['I want to come back again.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does the writer like best?', opts: ['The jellyfish', 'The shark', 'The big fish', 'The small umbrellas'], a: 0, why: '第二段第一句就說：我最喜歡水母。', ev: ['I like the jellyfish best.'] },
      { id: 'q2', k: 'infer', q: 'Why does the brother hide behind Dad?', opts: ['He is afraid of the shark.', 'He wants to eat the fish.', 'He is tired and wants to sleep.', 'He likes the jellyfish.'], a: 0, why: '鯊魚有很多大牙齒，弟弟馬上躲到爸爸後面 → 他是怕鯊魚。', ev: ['It has many big teeth!', 'My brother hides behind Dad.'] },
      { id: 'q3', k: 'vocab', q: 'What does "slowly" mean here?', opts: ['慢慢地', '很快地', '大聲地', '開心地'], a: 0, why: 'slowly 是「慢慢地」：粉紅色的水母在水裡慢慢地動。', ev: ['They move slowly in the water.'] }
    ] },
  { id: 'e034', lv: 1, genre: 'schedule', topic: 'weather', title: 'Weather This Week', zh: '這星期的天氣',
    body: [
      ['Here is the weather for this week in Taichung.'],
      { table: [['Day', 'Weather'], ['Monday', 'Sunny'], ['Tuesday', 'Sunny'], ['Wednesday', 'Cloudy'], ['Thursday', 'Rainy'], ['Friday', 'Rainy and windy']] },
      ['Please bring an umbrella on Thursday and Friday.', 'Our sports day is on Tuesday.', 'The weather will be good for running.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will the weather be on Wednesday?', opts: ['Cloudy', 'Sunny', 'Rainy', 'Rainy and windy'], a: 0, why: '表上星期三（Wednesday）寫的是 Cloudy，多雲。', ev: ['Wednesday'] },
      { id: 'q2', k: 'infer', q: 'Which day is probably NOT good for playing outside?', opts: ['Friday', 'Monday', 'Tuesday', 'Wednesday'], a: 0, why: '星期五又下雨又颳風，最不適合在外面玩；星期一、二是晴天，星期三只是多雲。', ev: ['Rainy and windy'] },
      { id: 'q3', k: 'vocab', q: 'What does "umbrella" mean here?', opts: ['雨傘', '雨衣', '帽子', '外套'], a: 0, why: 'umbrella 是「雨傘」：星期四、五會下雨，所以要帶傘。', ev: ['Please bring an umbrella'] }
    ] },
  { id: 'e035', lv: 1, genre: 'story', topic: 'plant', title: "Grandpa's Mango Tree", zh: '爺爺的芒果樹', gloss: { mango: '芒果' },
    body: [
      ["There is a big mango tree in front of Grandpa's house.", 'It is older than Dad!'],
      ['Every summer, the tree has many sweet mangoes.', 'Lily and Grandpa pick them together.', 'They eat some and give some to their friends.'],
      ['On hot days, Lily reads under the tree.', 'It is cool there.', 'Birds sing above her.', "She loves Grandpa's tree."]
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Lily do under the tree?', opts: ['She reads.', 'She sleeps.', 'She sings.', 'She eats ice cream.'], a: 0, why: '第三段說：天氣熱的時候，莉莉在樹下看書。', ev: ['On hot days, Lily reads under the tree.'] },
      { id: 'q2', k: 'ref', q: 'In paragraph 2, what does "them" mean?', opts: ['The mangoes', 'The friends', 'The birds', 'The trees'], a: 0, why: '前一句說樹上有很多甜芒果，莉莉和爺爺一起摘「它們」，就是芒果。', ev: ['Lily and Grandpa pick them together.'] },
      { id: 'q3', k: 'main', q: 'What is the story mainly about?', opts: ['A mango tree that Lily loves', 'How to cook mangoes', 'A bird that sings at night', 'Grandpa buys a new house in the city'], a: 0, why: '故事講爺爺家門口的芒果樹：夏天摘芒果、熱天在樹下看書，莉莉很喜歡這棵樹。', ev: ["She loves Grandpa's tree."] }
    ] },
  { id: 'm017', lv: 2, genre: 'story', topic: 'animal', title: 'The Bird with a Hurt Wing', zh: '受傷的小鳥',
    body: [
      ['After school, Jack saw a small bird under a tree.', 'It could not fly because one of its wings was hurt.'],
      ['He put the bird in a small box and took it home.', 'His mom said, "Let\'s take it to the animal doctor."'],
      ['The doctor looked at the bird carefully.', 'She said, "Keep it warm and quiet for a week."', 'Jack gave the bird water and some seeds every day.'],
      ['A week later, the bird could fly again.', 'Jack opened the box, and the bird flew into the sky.', 'He waved to it with a big smile.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did the doctor tell Jack to do?', opts: ['Keep the bird warm and quiet', 'Let the bird fly right away', 'Give the bird a bath', 'Take the bird back to the tree'], a: 0, why: '第三段醫生說：讓小鳥保暖、安靜地休息一個星期。', ev: ['Keep it warm and quiet for a week.'] },
      { id: 'q2', k: 'infer', q: 'Why did Jack take the bird home?', opts: ['It was hurt and could not fly.', 'He wanted to keep it as a pet in his room.', 'His mom asked him to.', 'The bird was hungry for rice.'], a: 0, why: '小鳥翅膀受傷、飛不起來，留在樹下很危險 → 傑克才把牠帶回家照顧。', ev: ['It could not fly because one of its wings was hurt.'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 3, who does "She" mean?', opts: ['The animal doctor', "Jack's mom", 'Jack', "Jack's teacher"], a: 0, why: '前一句是醫生在看小鳥，接著「她說」的她就是動物醫生。', ev: ['She said, "Keep it warm'] },
      { id: 'q4', k: 'main', q: 'What is the story mainly about?', opts: ['A boy helps a hurt bird', 'A boy buys a bird at a shop', 'A doctor who lives in a garden', 'A bird that eats too much'], a: 0, why: '傑克發現受傷的小鳥，帶去看醫生、照顧牠，最後讓牠飛回天空。', ev: ['the bird flew into the sky'] }
    ] },
  { id: 'm018', lv: 2, genre: 'info', topic: 'ocean', title: 'Sea Turtle Babies', zh: '海龜寶寶', gloss: { sand: '沙子' },
    body: [
      ['Sea turtles live in the sea for most of their lives.', 'But mother turtles come back to the beach to lay their eggs.'],
      ['In summer, a mother turtle comes out of the sea at night.', 'She digs in the sand with her back legs.', 'Then she lays many eggs and covers them with sand.'],
      ['About two months later, baby turtles come out of the eggs.', 'They walk to the sea at night.'],
      ['Bright lights and trash on the beach can hurt them.', 'In Penghu, people keep some beaches dark and clean for the turtles.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When does a mother turtle come out of the sea?', opts: ['At night in summer', 'In the morning in winter', 'At noon in summer', 'In the evening in spring'], a: 0, why: '第二段說：夏天的晚上，海龜媽媽會從海裡爬上岸。', ev: ['In summer, a mother turtle comes out of the sea at night.'] },
      { id: 'q2', k: 'vocab', q: 'What does "lay" mean in paragraph 1?', opts: ['生（蛋）', '吃（蛋）', '找（蛋）', '賣（蛋）'], a: 0, why: 'lay eggs 是「生蛋、產卵」：海龜媽媽回到海灘來生蛋。', ev: ['to lay their eggs'] },
      { id: 'q3', k: 'main', q: 'What is the article mainly about?', opts: ['How sea turtles have their babies', 'Where to buy a pet turtle', 'Why the sea is blue', 'Fun games to play on the beach at night'], a: 0, why: '文章從海龜媽媽上岸生蛋，講到小海龜出生、爬回海裡。', ev: ['But mother turtles come back to the beach to lay their eggs.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "them" mean?', opts: ['The eggs', 'The back legs', 'The baby turtles', 'The lights'], a: 0, why: '海龜媽媽生了很多蛋，再用沙子蓋住「它們」，它們就是蛋。', ev: ['covers them with sand'] }
    ] },
  { id: 'm019', lv: 2, genre: 'dialogue', topic: 'weather', title: 'The Plum Rain', zh: '梅雨', gloss: { plum: '梅子', ripe: '成熟的' },
    body: [
      { who: 'Kevin', s: ['Grandma, it has rained for five days!', 'My soccer shoes are still wet.'] },
      { who: 'Grandma', s: ['It is May.', 'In Taiwan, we often get a lot of rain in May and June.', 'People call it the plum rain.'] },
      { who: 'Kevin', s: ['Why is it called that?'] },
      { who: 'Grandma', s: ['Because plums get ripe at this time of year.'] },
      { who: 'Kevin', s: ['I see.', 'But I want to play soccer outside.'] },
      { who: 'Grandma', s: ["Let's make plum juice together.", 'When the rain stops, you can play again.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When does Taiwan often get a lot of rain, according to Grandma?', opts: ['In May and June', 'In July and August', 'In December', 'In March and April'], a: 0, why: '奶奶說：台灣五月、六月常常下很多雨。', ev: ['we often get a lot of rain in May and June'] },
      { id: 'q2', k: 'infer', q: 'How does Kevin probably feel about the rain?', opts: ['Unhappy about it', 'Happy about the wet shoes', 'Afraid of Grandma', 'Excited about the plum juice'], a: 0, why: '凱文說已經下了五天雨、球鞋還是濕的，又說想去外面踢球 → 他對下雨不太開心。', ev: ['But I want to play soccer outside.'] },
      { id: 'q3', k: 'vocab', q: 'What does "stops" mean in the last line?', opts: ['停止', '開始', '變大', '回來'], a: 0, why: 'stop 是「停止」：等雨停了，凱文就可以再出去玩。', ev: ['When the rain stops'] }
    ] },
  { id: 'm020', lv: 2, genre: 'diary', topic: 'plant', title: 'My Sunflower', zh: '我的向日葵', gloss: { sunflower: '向日葵' },
    body: [
      { h: 'April 2' },
      ['Today I planted a sunflower seed in a big pot.', 'Mom said it needs a lot of sun, so I put it by the window.'],
      { h: 'April 20' },
      ['A little green plant came out!', 'It has two small leaves.', 'I gave it water every morning before school.'],
      { h: 'June 15' },
      ['My sunflower is taller than me now!', 'It has a big yellow flower.', 'Bees come to visit it every day.', 'I took a photo of it and showed it to my class.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Where did the writer put the pot?', opts: ['By the window', 'In the classroom', 'Under the bed', 'In the garden'], a: 0, why: '四月二日寫：媽媽說它需要很多陽光，所以放在窗戶旁邊。', ev: ['so I put it by the window'] },
      { id: 'q2', k: 'detail', q: 'What did the writer see on April 20?', opts: ['A small plant with two leaves', 'A big yellow flower with many bees', 'Some bees in the pot', 'A photo of the class'], a: 0, why: '四月二十日寫：長出一棵綠色小植物，有兩片小葉子。', ev: ['It has two small leaves.'] },
      { id: 'q3', k: 'vocab', q: 'What does "taller" mean in the June 15 diary?', opts: ['比較高', '比較胖', '比較老', '比較矮'], a: 0, why: 'taller 是 tall（高）的比較級，「比較高」：向日葵現在比我還高。', ev: ['taller than me'] },
      { id: 'q4', k: 'main', q: 'What is the diary mainly about?', opts: ['How a sunflower grew', 'How to take a good photo', 'A trip to see bees', 'Why plants need rain'], a: 0, why: '日記從四月種下種子，寫到六月開出大黃花，記錄向日葵長大的過程。', ev: ['Today I planted a sunflower seed in a big pot.'] }
    ] },
  { id: 'm021', lv: 2, genre: 'letter', topic: 'animal', title: 'Thank You for the Zoo Talk', zh: '謝謝你來講動物園',
    body: [
      { h: 'Dear Ms. Chen,' },
      ['Thank you for coming to our class last Friday.', 'We loved your talk about the animals at the zoo.'],
      ['I did not know that an elephant can eat grass for many hours a day!', 'I also liked the photos of the baby giraffe.'],
      ['I have one question.', 'What do you do when an animal is sick?', 'I want to be a zoo keeper like you one day.'],
      ['Thank you again!'],
      { h: 'Best wishes, Ben' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why did Ben write this email?', opts: ['To thank Ms. Chen and ask a question', 'To ask Ms. Chen for a baby giraffe', 'To tell Ms. Chen that his pet dog is sick at home', 'To ask his class to visit the zoo'], a: 0, why: '班先謝謝陳小姐來班上演講，接著問了一個問題。', ev: ['Thank you for coming to our class last Friday.'] },
      { id: 'q2', k: 'detail', q: 'When did Ms. Chen come to the class?', opts: ['Last Friday', 'Last Monday', 'This morning', 'Next Friday'], a: 0, why: '信的第一句說：謝謝你上星期五來我們班。', ev: ['last Friday'] },
      { id: 'q3', k: 'ref', q: 'In paragraph 1, who does "We" mean?', opts: ['Ben and his classmates', 'Ms. Chen and the zoo keepers', 'Ben and his family', 'The animals at the zoo'], a: 0, why: '陳小姐是來班上演講，「我們很喜歡」的我們就是班和全班同學。', ev: ['We loved your talk'] },
      { id: 'q4', k: 'infer', q: 'Why does Ben ask about sick animals?', opts: ['He wants to be a zoo keeper one day.', 'His pet bird is very sick.', 'Ms. Chen is a doctor at the zoo.', 'His teacher told him to ask one question in the email.'], a: 0, why: '班問完問題，緊接著說想像陳小姐一樣當飼育員 → 他想知道這份工作要做什麼。', ev: ['I want to be a zoo keeper like you one day.'] }
    ] },
  { id: 'm022', lv: 2, genre: 'schedule', topic: 'animal', title: 'A Day with a Zoo Keeper', zh: '飼育員的一天',
    body: [
      ['Mr. Lee is a keeper at the City Zoo.', 'He takes care of the bears.', 'Here is his day.'],
      { table: [['Time', 'Work'], ['7:30 a.m.', 'Clean the bear house'], ['9:00 a.m.', 'Give the bears fruit and fish'], ['12:00 p.m.', 'Eat lunch'], ['2:00 p.m.', 'Check if the bears are healthy'], ['4:30 p.m.', 'Talk to visitors about bears']] },
      ['Mr. Lee says the hardest part is cleaning in the hot summer.', 'But he loves his job because every bear is different.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does Mr. Lee do at 9:00 a.m.?', opts: ['He gives the bears food.', 'He cleans the bear house.', 'He eats lunch.', 'He talks to visitors.'], a: 0, why: '表上 9:00 a.m. 那一列寫：給熊吃水果和魚。', ev: ['Give the bears fruit and fish'] },
      { id: 'q2', k: 'detail', q: 'What animals does Mr. Lee take care of?', opts: ['Bears', 'Lions', 'Monkeys', 'Elephants'], a: 0, why: '第一段說：李先生負責照顧熊。', ev: ['He takes care of the bears.'] },
      { id: 'q3', k: 'infer', q: 'Amy has a question about bears for Mr. Lee. When is the best time to ask?', opts: ['At 4:30 p.m.', 'At 7:30 a.m.', 'At 9:00 a.m.', 'At 12:00 p.m.'], a: 0, why: '表上下午 4:30 是「跟遊客介紹熊」的時間，這時候問問題最剛好；其他時間他在打掃、餵食或吃飯。', ev: ['Talk to visitors about bears'] },
      { id: 'q4', k: 'vocab', q: 'What does "healthy" mean here?', opts: ['健康的', '快樂的', '乾淨的', '飢餓的'], a: 0, why: 'healthy 是「健康的」：下午兩點要檢查熊有沒有生病。', ev: ['Check if the bears are healthy'] }
    ] },
  { id: 'm023', lv: 2, genre: 'howto', topic: 'plant', title: 'An Egg Shell Garden', zh: '蛋殼小花園', gloss: { shell: '殼', soil: '泥土' },
    body: [
      ['Do not throw away your egg shells!', 'You can use them to grow small plants.'],
      { h: 'What you need' },
      ['You need six clean egg shells, an egg box, some soil, and some seeds.'],
      { h: 'What to do' },
      ['First, put the egg shells in the egg box.', 'Next, fill each shell with soil.', 'Then put two seeds in each one and give them a little water.', 'Put the box in a sunny place.'],
      ['In about a week, you will see little green plants.', 'When they get bigger, you can put each shell into the ground.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'How many seeds do you put in each shell?', opts: ['Two', 'Six', 'One', 'Twelve'], a: 0, why: '步驟第三句說：每個蛋殼放兩顆種子。', ev: ['Then put two seeds in each one'] },
      { id: 'q2', k: 'ref', q: 'In "You can use them," what does "them" mean?', opts: ['The egg shells', 'The seeds', 'The plants', 'The egg boxes'], a: 0, why: '前一句說不要丟掉蛋殼，接著說可以用「它們」種植物，它們就是蛋殼。', ev: ['You can use them to grow small plants.'] },
      { id: 'q3', k: 'vocab', q: 'What does "fill" mean in the steps?', opts: ['裝滿', '打破', '洗乾淨', '拿走'], a: 0, why: 'fill 是「裝滿」：把每個蛋殼裝滿泥土，才能種種子。', ev: ['fill each shell with soil'] },
      { id: 'q4', k: 'main', q: 'What does this article mainly teach?', opts: ['How to grow plants in egg shells', 'How to cook eggs', 'How to buy seeds', 'Why plants need a lot of sun and water'], a: 0, why: '文章列出材料和步驟，教你用蛋殼種小植物。', ev: ['You can use them to grow small plants.'] }
    ] },
  { id: 'm024', lv: 2, genre: 'notice', topic: 'ocean', title: 'Beach Rules', zh: '海灘守則', gloss: { lifeguard: '救生員', flag: '旗子' }, names: ['Sunny Beach'],
    body: [
      { h: 'Welcome to Sunny Beach!' },
      ['Please read these rules before you swim.', 'Swim only from 9:00 a.m. to 5:00 p.m.', 'A lifeguard watches the water at these times.', 'Always swim with a friend or your family.', 'When you see a red flag, do not go into the water.', 'It means the waves are too big.', 'Put your trash in the trash cans.', 'Have fun and stay safe!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When can people swim at this beach?', opts: ['From 9:00 a.m. to 5:00 p.m.', 'From 5:00 a.m. to 9:00 p.m.', 'From 9:00 p.m. to 5:00 a.m.', 'All day and all night'], a: 0, why: '告示寫：只能在早上九點到下午五點游泳。', ev: ['Swim only from 9:00 a.m. to 5:00 p.m.'] },
      { id: 'q2', k: 'detail', q: 'What should you do when you see a red flag?', opts: ['Stay out of the water', 'Swim with a friend', 'Look for the lifeguard', 'Put your trash in the cans'], a: 0, why: '告示說看到紅旗就不要下水，因為浪太大了。', ev: ['When you see a red flag'] },
      { id: 'q3', k: 'infer', q: 'Why should people swim only at those times?', opts: ['A lifeguard is watching then.', 'The water is warm then.', 'There are no big waves in the morning.', 'The beach is clean then.'], a: 0, why: '告示說救生員只在這段時間看著海面 → 有人顧著才安全，所以只能那時候游。', ev: ['A lifeguard watches the water at these times.'] }
    ] },
  { id: 'm025', lv: 2, genre: 'story', topic: 'weather', title: 'The Night the Lights Went Out', zh: '颱風夜停電', gloss: { flashlight: '手電筒', shadow: '影子' },
    body: [
      ['One night, a strong typhoon came to Hualien.', 'The wind was loud, and the rain hit the windows.'],
      ['Then all the lights went out.', 'Amy was scared because it was very dark.', 'Dad found a flashlight and turned it on.'],
      ['"Let\'s play a game," Dad said.', 'He made shadow animals on the wall with his hands.', 'Amy laughed at the shadow dog and the shadow bird.', 'Then she tried it, too.'],
      ['The lights came back two hours later.', 'But Amy said, "Can we turn them off and play again?"']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did Dad use to make light?', opts: ['A flashlight', 'A candle', 'The TV', 'The window'], a: 0, why: '第二段說：爸爸找到手電筒，把它打開。', ev: ['Dad found a flashlight and turned it on.'] },
      { id: 'q2', k: 'infer', q: 'How did Amy feel at the end of the story?', opts: ['She had fun.', 'She was scared.', 'She was angry.', 'She was hungry.'], a: 0, why: '燈回來了，艾美卻想再關燈繼續玩 → 她玩得很開心，已經不怕了。', ev: ['Can we turn them off and play again?'] },
      { id: 'q3', k: 'ref', q: 'In the last paragraph, what does "them" mean?', opts: ['The lights', 'The shadow animals', 'The windows', "Dad's hands"], a: 0, why: '前一句說燈兩小時後回來了，艾美想把「它們」關掉，它們就是燈。', ev: ['Can we turn them off and play again?'] },
      { id: 'q4', k: 'main', q: 'What is the best title for this story?', opts: ['Fun in the Dark', 'A Sunny Day in Hualien', 'Amy Buys a New Lamp', 'The Broken Window'], a: 0, why: '颱風夜停電，本來很可怕，爸爸用手電筒玩影子遊戲，變成好玩的夜晚。', ev: ['He made shadow animals on the wall with his hands.'] }
    ] },
  { id: 'm026', lv: 2, genre: 'info', topic: 'animal', title: 'From Egg to Frog', zh: '從卵到青蛙', gloss: { tadpole: '蝌蚪' },
    body: [
      ['Did you know that a young frog does not look like a frog?'],
      ['A mother frog lays many eggs in the water.', 'After a few days, tadpoles come out of the eggs.', 'A tadpole has a long tail and no legs.', 'It lives in the water like a fish.'],
      ['A few weeks later, the tadpole grows back legs.', 'Then it grows front legs, and its tail gets shorter.', 'At last, it becomes a little frog and jumps out of the water.'],
      ['Next time you see a pond in spring, look for these babies!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What does a tadpole look like?', opts: ['It has a long tail and no legs.', 'It has four legs and no tail.', 'It has two front legs and a short tail.', 'It looks just like its mother.'], a: 0, why: '第二段說：蝌蚪有一條長尾巴，沒有腳。', ev: ['A tadpole has a long tail and no legs.'] },
      { id: 'q2', k: 'vocab', q: 'What does "becomes" mean in paragraph 3?', opts: ['變成', '跳過', '看見', '離開'], a: 0, why: 'become 是「變成」：蝌蚪長出腳、尾巴變短，最後變成小青蛙。', ev: ['it becomes a little frog'] },
      { id: 'q3', k: 'ref', q: 'In "It lives in the water like a fish," what does "It" mean?', opts: ['A tadpole', 'A mother frog', 'An egg', 'A pond'], a: 0, why: '前一句在說蝌蚪長什麼樣子，「它像魚一樣住在水裡」的它就是蝌蚪。', ev: ['It lives in the water like a fish.'] },
      { id: 'q4', k: 'main', q: 'What is the article mainly about?', opts: ['How a frog grows up', 'Where fish live', 'Why frogs jump high', 'How to catch frogs in a pond'], a: 0, why: '文章從青蛙卵、蝌蚪，一步一步講到變成小青蛙。', ev: ['At last, it becomes a little frog and jumps out of the water.'] }
    ] },
  { id: 'm027', lv: 2, genre: 'dialogue', topic: 'ocean', title: 'Leave the Shells', zh: '把貝殼留下來', gloss: { shell: '貝殼', hermit: '寄居（蟹）', crab: '螃蟹' },
    body: [
      { who: 'Lisa', s: ['Look, Dad!', 'I found five pretty shells.', 'Can I take them home?'] },
      { who: 'Dad', s: ['They are pretty, but please leave them on the beach.'] },
      { who: 'Lisa', s: ['Why?', 'Nobody is using them.'] },
      { who: 'Dad', s: ['Hermit crabs use old shells as their homes.', 'When a crab grows bigger, it looks for a bigger shell.', 'If people take all the shells, the crabs cannot find new homes.'] },
      { who: 'Lisa', s: ['Oh, I did not know that.', 'I will put them back.'] },
      { who: 'Dad', s: ['Good girl.', 'We can take photos of them.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What do hermit crabs use old shells for?', opts: ['For their homes', 'For their food', 'For their games', 'For their babies'], a: 0, why: '爸爸說：寄居蟹把舊貝殼當成自己的家。', ev: ['Hermit crabs use old shells as their homes.'] },
      { id: 'q2', k: 'infer', q: 'What will Lisa probably do next?', opts: ['Put the shells back on the beach', 'Take the five shells home in her bag', 'Buy more shells at a shop', 'Give the shells to her friends'], a: 0, why: '莉莎聽完爸爸說寄居蟹需要貝殼，就說「我會放回去」→ 她接下來會把貝殼放回海灘。', ev: ['I will put them back.'] },
      { id: 'q3', k: 'ref', q: 'Dad says, "it looks for a bigger shell." What does "it" mean?', opts: ['A hermit crab', 'A shell', 'The beach', 'A photo'], a: 0, why: '同一句前面說「寄居蟹長大的時候」，所以「它」去找更大的殼，指的是寄居蟹。', ev: ['it looks for a bigger shell'] }
    ] },
  { id: 'm028', lv: 2, genre: 'letter', topic: 'plant', title: 'The Little Lemon Tree', zh: '小檸檬樹',
    body: [
      { h: 'Dear Grandpa,' },
      ['Thank you for the little lemon tree you gave me last month.', 'I put it on our balcony, and I water it every evening.'],
      ['Last week, I saw some small white flowers on it.', 'They smell very sweet!', 'Mom says the flowers will turn into lemons.'],
      ['When the lemons are ready, I will make lemon tea for you.', 'Please come and visit us this winter.'],
      { h: 'Love, Mia' }
    ],
    qs: [
      { id: 'q1', k: 'main', q: 'Why did Mia write this letter?', opts: ['To thank Grandpa and tell him about the tree', 'To ask Grandpa for some lemon tea', 'To tell Grandpa about her new school', 'To ask Grandpa to buy a new lemon tree for Mom'], a: 0, why: '米亞先謝謝爺爺送的檸檬樹，再告訴爺爺樹開花了。', ev: ['Thank you for the little lemon tree you gave me last month.'] },
      { id: 'q2', k: 'detail', q: 'When does Mia water the tree?', opts: ['Every evening', 'Every morning', 'Once a week', 'Every winter'], a: 0, why: '第一段說：我每天傍晚幫它澆水。', ev: ['I water it every evening'] },
      { id: 'q3', k: 'vocab', q: 'What does "smell" mean here?', opts: ['聞起來', '看起來', '嚐起來', '聽起來'], a: 0, why: 'smell 在這裡是「聞起來」：小白花聞起來很香甜。', ev: ['They smell very sweet!'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "They" mean?', opts: ['The small white flowers', 'The lemons', 'The green leaves on the tree', 'Mom and Mia'], a: 0, why: '前一句說樹上開了小白花，「它們很香」的它們就是那些小白花。', ev: ['They smell very sweet!'] }
    ] },
  { id: 'm029', lv: 2, genre: 'howto', topic: 'weather', title: 'Make a Rain Cup', zh: '做一個雨量杯', gloss: { plastic: '塑膠' },
    body: [
      ['How much rain falls on a rainy day?', 'You can find out with a rain cup.'],
      { h: 'What to do' },
      ['Ask Mom or Dad to cut off the top of a plastic bottle.', 'Turn the top over and put it into the bottle.', 'Put a ruler next to the bottle.', 'Put the bottle outside in an open place.'],
      ['After the rain stops, look at the water in the bottle.', 'Write down how high it is.', 'Do this every day for a week.', 'You will learn a lot about the weather!']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Who should cut the bottle?', opts: ['Mom or Dad', 'You by yourself', 'Your little brother', 'Your classmate'], a: 0, why: '第一步說：請爸爸或媽媽幫忙把瓶子上面切掉。', ev: ['Ask Mom or Dad to cut off the top of a plastic bottle.'] },
      { id: 'q2', k: 'detail', q: 'What should you put next to the bottle?', opts: ['A ruler', 'A pen', 'Some water', 'A plastic top'], a: 0, why: '步驟說：在瓶子旁邊放一把尺，才看得出水有多高。', ev: ['Put a ruler next to the bottle.'] },
      { id: 'q3', k: 'ref', q: 'In "Write down how high it is," what does "it" mean?', opts: ['The water in the bottle', 'The ruler', 'The rain cloud', 'The plastic top of the bottle'], a: 0, why: '前一句叫你看瓶子裡的水，接著寫下「它」有多高，它就是瓶子裡的雨水。', ev: ['Write down how high it is.'] },
      { id: 'q4', k: 'vocab', q: 'What does "open" mean in "an open place"?', opts: ['空曠的', '黑暗的', '很小的', '溫暖的'], a: 0, why: 'open place 是「空曠的地方」：上面沒有東西擋著，雨才能直接落進瓶子。', ev: ['in an open place'] }
    ] },
  { id: 'm030', lv: 2, genre: 'story', topic: 'plant', title: 'The Ugly Plant', zh: '醜醜的仙人掌', gloss: { cactus: '仙人掌' },
    body: [
      ["Kevin's aunt gave him a small cactus for his birthday.", 'Kevin did not like it.', '"It is ugly, and it has no flowers," he said.'],
      ['He put the cactus by the window and forgot about it.', 'He gave it water only once or twice a month.'],
      ['One morning in May, Kevin saw something pink on top of the cactus.', 'It was a beautiful flower!', 'He could not believe his eyes.'],
      ['Kevin took a photo and sent it to his aunt.', 'She wrote back, "Some plants need time to show how beautiful they are."']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did Kevin see on the cactus in May?', opts: ['A pink flower', 'A white bird', 'A small bug', 'A yellow fruit'], a: 0, why: '第三段說：五月的一個早上，凱文看到仙人掌上面有粉紅色的東西，是一朵花。', ev: ['It was a beautiful flower!'] },
      { id: 'q2', k: 'main', q: 'What is the story mainly about?', opts: ['A plant that surprises Kevin', "A birthday party at Kevin's house", 'How to water flowers every day', 'Kevin buys a cactus for his aunt'], a: 0, why: '凱文本來覺得仙人掌很醜，沒想到它後來開出漂亮的花。', ev: ['Some plants need time to show how beautiful they are.'] },
      { id: 'q3', k: 'infer', q: 'How did Kevin probably feel when he saw the flower?', opts: ['Surprised and happy', 'Angry and sad', 'Bored and tired', 'Afraid of the cactus'], a: 0, why: '他本來以為仙人掌不會開花，看到花時「不敢相信自己的眼睛」→ 又驚訝又開心。', ev: ['He could not believe his eyes.'] },
      { id: 'q4', k: 'vocab', q: 'What does "ugly" mean in paragraph 1?', opts: ['醜的', '可愛的', '好笑的', '奇怪的'], a: 0, why: 'ugly 是「醜的」：凱文一開始覺得仙人掌很醜、又沒有花。', ev: ['It is ugly'] }
    ] },
  { id: 'h013', lv: 3, genre: 'story', topic: 'animal', title: 'Guests over the Front Door', zh: '門口的客人',
    body: [
      ['One spring morning, Lily noticed two small birds flying around her front door.', 'They were swallows, and they were building a nest out of mud.'],
      ['At first, Dad said, "They will make the floor dirty."', 'But Grandma smiled and told them that swallows bring good luck to a home.', 'In the end, Dad put a small board under the nest to catch the mess.'],
      ['A few weeks later, Lily heard tiny voices.', 'Four baby birds were in the nest with their mouths wide open.', 'The parents flew in and out all day to feed them.'],
      ['By early summer, the young birds learned to fly, and the nest was empty.', 'Lily felt a little lonely.', 'Grandma said they often come back to the same nest the next year.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did Dad put under the nest?', opts: ['A small board', 'A box of food', 'A bowl of water', 'Some mud'], a: 0, why: '第二段最後說：爸爸在鳥巢下面放了一塊小木板，用來接髒東西。', ev: ['Dad put a small board under the nest'] },
      { id: 'q2', k: 'main', q: 'What is the story mainly about?', opts: ["A bird family that stays at Lily's home for a while", "Why Lily's dad does not like birds", 'How to build a nest out of mud', 'A girl who takes the baby birds to her school as pets'], a: 0, why: '燕子春天來莉莉家門口築巢、生寶寶，到了初夏小鳥學會飛就離開了，整篇在講這段日子。', ev: ['they were building a nest out of mud'] },
      { id: 'q3', k: 'infer', q: 'Why did Dad probably decide to keep the nest?', opts: ['Grandma said the birds bring good luck.', 'The birds were too loud.', 'The floor was always clean.', 'Lily said the birds would help clean the floor every day.'], a: 0, why: '爸爸本來怕地板變髒，奶奶說燕子會帶來好運以後，他就改成放木板接髒東西 → 是奶奶的話讓他留下鳥巢。', ev: ['swallows bring good luck to a home'] },
      { id: 'q4', k: 'vocab', q: 'What does "lonely" mean in paragraph 4?', opts: ['寂寞的', '生氣的', '害怕的', '興奮的'], a: 0, why: 'lonely 是「寂寞的」：小燕子都飛走了、鳥巢空了，莉莉覺得有點寂寞。', ev: ['Lily felt a little lonely.'] }
    ] },
  { id: 'h014', lv: 3, genre: 'info', topic: 'ocean', title: 'Coral: An Animal, Not a Rock', zh: '珊瑚是動物', gloss: { coral: '珊瑚' },
    body: [
      ['When people see coral in the sea, many of them think it is a rock or a plant.', 'In fact, coral is made of many tiny animals.'],
      ['These animals build hard homes around their soft bodies.', 'Over many years, millions of them grow together and become huge coral areas.', 'Many kinds of fish, crabs, and sea turtles live there or come there to find food.'],
      ['Coral needs clean, warm water and plenty of sunlight.', 'If the sea gets too hot, coral can lose its colors and turn white.', 'If it stays white for too long, it may die.'],
      ['In Kenting, people check the coral every year.', 'You can help, too.', 'When you visit the beach, take your trash home and never step on coral.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What can happen when the sea gets too hot?', opts: ['Coral can turn white.', 'Coral can turn into rock.', 'Fish can grow bigger.', 'The water can get clean.'], a: 0, why: '第三段說：海水太熱的時候，珊瑚會失去顏色、變成白色。', ev: ['If the sea gets too hot, coral can lose its colors and turn white.'] },
      { id: 'q2', k: 'detail', q: 'What does coral need?', opts: ['Clean, warm water and sunlight', 'Cold water and dark places', 'Dirty water and a lot of trash', 'Hot water and no sunlight'], a: 0, why: '第三段第一句：珊瑚需要乾淨、溫暖的海水和充足的陽光。', ev: ['Coral needs clean, warm water and plenty of sunlight.'] },
      { id: 'q3', k: 'main', q: 'What is the best title for the article?', opts: ['Coral: An Animal, Not a Rock', 'How to Swim in Kenting', 'Why Fish Love Rocks', 'The Biggest Plant in the Sea'], a: 0, why: '文章一開始就說珊瑚其實是很多小動物，後面介紹牠們需要什麼、怎麼保護。', ev: ['In fact, coral is made of many tiny animals.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "there" mean?', opts: ['The coral areas', 'The beach', 'Kenting', 'Their soft bodies'], a: 0, why: '前一句說珊瑚長成很大一片，魚、螃蟹、海龜就住在「那裡」或去那裡找食物，那裡就是珊瑚區。', ev: ['live there or come there'] }
    ] },
  { id: 'h015', lv: 3, genre: 'dialogue', topic: 'weather', title: 'Snow on the Mountain', zh: '山上下雪了', names: ['Hehuan Mountain'],
    body: [
      { who: 'Eric', s: ['Dad, the TV news says it is snowing on Hehuan Mountain!', 'Can we go there this weekend?'] },
      { who: 'Dad', s: ['I know you really want to see snow.', 'But when it snows, the mountain roads get covered with ice and become dangerous.', 'Many cars also go up there, so the traffic is terrible.'] },
      { who: 'Eric', s: ['But it never snows in our city.', 'This may be my only chance!'] },
      { who: 'Dad', s: ['How about this?', 'We can check the weather report on Friday.', 'If the roads are safe, we will leave very early on Sunday morning.', 'We must bring warm jackets, gloves, and hot water.'] },
      { who: 'Eric', s: ['Deal!', 'I will get my jacket ready tonight.'] }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When will they check the weather report?', opts: ['On Friday', 'On Sunday morning', 'Tonight', 'On Saturday night'], a: 0, why: '爸爸說：我們星期五再看天氣預報。', ev: ['We can check the weather report on Friday.'] },
      { id: 'q2', k: 'infer', q: 'Why does Dad not say yes right away?', opts: ['He thinks the trip may not be safe.', 'He does not like snow.', 'He has to work on Sunday.', 'He wants to watch the TV news about the snow first.'], a: 0, why: '爸爸說下雪時山路會結冰、很危險，車又很多 → 他擔心安全，所以要先看天氣再決定。', ev: ['the mountain roads get covered with ice and become dangerous'] },
      { id: 'q3', k: 'ref', q: 'Dad says, "Many cars also go up there." What does "there" mean?', opts: ['Hehuan Mountain', "Eric's city", 'The TV station', 'The store'], a: 0, why: '他們在說要不要去合歡山看雪，「很多車也開上那裡」的那裡就是合歡山。', ev: ['Many cars also go up there'] },
      { id: 'q4', k: 'main', q: 'What are Eric and Dad mainly talking about?', opts: ['A trip to see snow', 'What to watch on TV tonight', 'How to drive a car safely', 'Buying warm clothes for school'], a: 0, why: '艾瑞克想去合歡山看雪，爸爸說要先注意安全，兩人整段都在討論這趟看雪的行程。', ev: ['Can we go there this weekend?'] }
    ] },
  { id: 'h016', lv: 3, genre: 'letter', topic: 'plant', title: 'Please Save the Old Tree', zh: '請留下老榕樹', gloss: { banyan: '榕樹' },
    body: [
      { h: 'Dear Principal,' },
      ['My name is Emma, and I am in Class 5B.', 'I heard that the old banyan tree near the gate will be cut down to make more parking space.', 'I am writing to ask you to keep it.'],
      ['That tree is more than fifty years old.', 'On hot days, students play under it because it keeps them cool.', 'Birds and other small animals also live in it.', 'If we cut it down, they will lose their home.'],
      ['Maybe we can put the new parking space behind the gym.', 'Many of my classmates agree with me, and forty of them signed this letter.'],
      ['Thank you for reading my letter.'],
      { h: 'Yours, Emma' }
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'Why will the tree be cut down?', opts: ['To make more parking space', 'Because it is too old', 'To build a new gym', 'Because the students do not like to play under it'], a: 0, why: '第一段說：老榕樹要被砍掉，是為了多做一些停車位。', ev: ['will be cut down to make more parking space'] },
      { id: 'q2', k: 'main', q: 'What is the main reason Emma wrote this letter?', opts: ['To ask the principal to keep the tree', 'To ask for a new gym', 'To tell the principal about her class', 'To ask for more birds at school'], a: 0, why: '艾瑪在第一段就說：我寫信是想請您留下這棵樹。後面都是在說留下它的理由。', ev: ['I am writing to ask you to keep it.'] },
      { id: 'q3', k: 'infer', q: 'Why did Emma ask her classmates to sign the letter?', opts: ['To show that many students agree', 'Because the principal asked her to do it', 'To win a prize for writing', 'To make the letter look pretty'], a: 0, why: '她說很多同學同意她、四十個人簽了名 → 想讓校長知道不只她一個人想留下這棵樹。', ev: ['forty of them signed this letter'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, who does "they" mean?', opts: ['The birds and other small animals', 'The students', 'The teachers', 'Emma and her classmates in 5B'], a: 0, why: '前一句說鳥和其他小動物住在樹上，樹被砍掉「牠們」就會失去家，牠們就是這些動物。', ev: ['they will lose their home'] }
    ] },
  { id: 'h017', lv: 3, genre: 'notice', topic: 'animal', title: 'Find a Friend Day', zh: '領養日', gloss: { adopt: '領養', shelter: '收容所' }, names: ['Green Hill'],
    body: [
      { h: 'Find a Friend Day' },
      ['Are you ready to give a dog or cat a loving home?', 'Come to the Green Hill Animal Shelter on Saturday, March 8, from 10:00 a.m. to 3:00 p.m.'],
      { table: [['Activity', 'Time'], ['Meet the dogs', '10:00 a.m.'], ['Meet the cats', '11:30 a.m.'], ['Talk: How to care for a pet', '1:00 p.m.']] },
      ['If you want to adopt a pet, you must be at least 18 years old.', 'Children must come with a parent.', 'All the animals have seen a doctor and are healthy.', 'Please remember that a pet is a friend for life, not a toy.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'When is the talk about caring for pets?', opts: ['At 1:00 p.m.', 'At 10:00 a.m.', 'At 11:30 a.m.', 'At 3:00 p.m.'], a: 0, why: '表格最後一列：教你怎麼照顧寵物的講座在下午 1:00。', ev: ['Talk: How to care for a pet'] },
      { id: 'q2', k: 'detail', q: 'Who can adopt a pet?', opts: ['People 18 years old or older', 'Children without a parent', 'Anyone who brings a toy', 'Only people who have a cat'], a: 0, why: '告示說：想領養寵物，必須滿 18 歲；小朋友要跟爸媽一起來。', ev: ['you must be at least 18 years old'] },
      { id: 'q3', k: 'infer', q: 'What does the notice probably want people to think about?', opts: ['Taking care of a pet for its whole life', 'Buying cheap pet food at the shelter shop on Saturday', 'Bringing their old toys to the dogs', 'Getting more than one pet at a time'], a: 0, why: '最後一句提醒「寵物是一輩子的朋友，不是玩具」→ 希望大家想清楚能不能一直照顧牠。', ev: ['a pet is a friend for life, not a toy'] },
      { id: 'q4', k: 'vocab', q: 'What does "loving" mean in "a loving home"?', opts: ['充滿愛的', '很貴的', '很安靜的', '很乾淨的'], a: 0, why: 'loving 是「充滿愛的」：給狗狗或貓咪一個有愛的家。', ev: ['a loving home'] }
    ] },
  { id: 'h018', lv: 3, genre: 'diary', topic: 'ocean', title: 'Whale Watching in Hualien', zh: '花蓮賞鯨', gloss: { seasick: '暈船' },
    body: [
      { h: 'Sunday, July 20' },
      ['Today my family went whale watching in Hualien.', 'We got on a big boat at nine in the morning.'],
      ['At first, the sea was calm and blue.', 'Then the boat began to go up and down, and I felt seasick.', 'Mom gave me some water and told me to look far away.', 'Soon I felt better.'],
      ['After an hour, someone shouted, "Look over there!"', 'About twenty dolphins were jumping out of the water next to our boat.', 'They looked like they were playing a game with us.'],
      ['We did not see any whales today, but I was not disappointed.', 'The dolphins were the best part of my summer.', 'Next year, I hope to see a whale.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did the writer see next to the boat?', opts: ['About twenty dolphins', 'A big whale', 'A family of sea turtles near the boat', 'Many birds'], a: 0, why: '第三段說：大約二十隻海豚在船旁邊跳出水面。', ev: ['About twenty dolphins were jumping out of the water next to our boat.'] },
      { id: 'q2', k: 'infer', q: 'Why did Mom tell the writer to look far away?', opts: ['To help the writer feel better', 'To find the whales', 'To see the mountains', 'To look for other boats on the sea'], a: 0, why: '作者暈船了，媽媽給水又叫他看遠方，接著「很快就好多了」→ 這是幫他不暈船的方法。', ev: ['Mom gave me some water and told me to look far away.', 'Soon I felt better.'] },
      { id: 'q3', k: 'vocab', q: 'What does "calm" mean in paragraph 2?', opts: ['平靜的', '很冷的', '很髒的', '很深的'], a: 0, why: 'calm 是「平靜的」：一開始海很平靜，後來船才開始上下搖。', ev: ['the sea was calm and blue'] },
      { id: 'q4', k: 'main', q: 'What is the diary mainly about?', opts: ['A boat trip to watch sea animals', 'How to catch fish in Hualien', 'A swimming lesson in the sea', 'Why whales are bigger than dolphins'], a: 0, why: '日記寫全家在花蓮坐船賞鯨：暈船、看到海豚，雖然沒看到鯨魚還是很開心。', ev: ['Today my family went whale watching in Hualien.'] }
    ] },
  { id: 'h019', lv: 3, genre: 'schedule', topic: 'weather', title: 'Our Weather Club Plan', zh: '氣象社的計畫',
    body: [
      ['Our Weather Club meets every Wednesday afternoon.', 'Here is our plan for the next four months.'],
      { table: [['Month', 'What we will do'], ['September', 'Learn to read a weather map'], ['October', 'Make a rain cup and record the rain'], ['November', 'Visit the weather station in the city'], ['December', 'Give a weather report to the school']] },
      ['In November, we will take a bus and leave school at 1:30 p.m.', 'Please bring a notebook and a pen.', 'If a typhoon comes, the visit will move to the next week.', 'Students who join the club for all four months will get a "Little Weather Expert" card.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What will the club do in October?', opts: ['Make a rain cup', 'Read a weather map', 'Visit a weather station', 'Give a weather report'], a: 0, why: '表上十月（October）要做雨量杯、記錄下雨量。', ev: ['Make a rain cup and record the rain'] },
      { id: 'q2', k: 'detail', q: 'What should students bring for the November visit?', opts: ['A notebook and a pen', 'A rain cup', 'A weather map', 'Some money for the bus ride'], a: 0, why: '表格下面說：請帶筆記本和筆。', ev: ['Please bring a notebook and a pen.'] },
      { id: 'q3', k: 'infer', q: 'A typhoon comes on the day of the visit. What will probably happen?', opts: ['The visit will be a week later.', 'The club will stop for a month.', 'The visit will be in December.', 'The students will stay at the station all night.'], a: 0, why: '計畫寫：颱風來的話，參觀會改到下一週 → 所以會晚一個星期去。', ev: ['If a typhoon comes, the visit will move to the next week.'] },
      { id: 'q4', k: 'main', q: 'What is this schedule mainly for?', opts: ["Telling students the club's plan", 'Selling weather maps', 'Teaching how to make a rain cup', 'Asking students to watch a typhoon'], a: 0, why: '開頭就說「這是我們接下來四個月的計畫」，表格列出每個月要做的事。', ev: ['Here is our plan for the next four months.'] }
    ] },
  { id: 'h020', lv: 3, genre: 'story', topic: 'plant', title: 'A Day in the Rice Field', zh: '稻田裡的一天',
    body: [
      ["Last spring, Leo visited his grandpa's farm in Yilan.", 'Grandpa was getting ready to plant rice, and he asked Leo to help.'],
      ['Leo took off his shoes and stepped into the field.', 'The mud was soft and cold, and his feet went down deep.', 'Grandpa showed him how to push the young rice plants into the mud in straight lines.'],
      ['It looked easy, but it was not.', "After one hour, Leo's back hurt, and his lines were not straight at all.", 'Grandpa laughed and said, "Your first lines always look like a snake!"'],
      ['That evening, Leo ate a big bowl of rice for dinner.', 'For the first time, he thought about how hard farmers work for every bowl.', 'He finished all the rice and did not leave any.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: 'What did Grandpa show Leo?', opts: ['How to plant young rice plants', 'How to cook rice', 'How to catch a snake', 'How to wash his shoes in the river'], a: 0, why: '第二段說：爺爺教里歐把秧苗一排一排插進泥巴裡。', ev: ['Grandpa showed him how to push the young rice plants into the mud'] },
      { id: 'q2', k: 'ref', q: 'In the last paragraph, who does "he" mean?', opts: ['Leo', 'Grandpa', 'A farmer', "Leo's dad"], a: 0, why: '這一段說的是晚上里歐吃飯，「他第一次想到農夫有多辛苦」的他就是里歐。', ev: ['he thought about how hard farmers work'] },
      { id: 'q3', k: 'vocab', q: 'What does "straight" mean in paragraph 2?', opts: ['直的', '彎的', '很長的', '很深的'], a: 0, why: 'straight 是「直的」：秧苗要插成一直線；里歐插歪了，爺爺才說像蛇一樣彎彎的。', ev: ['in straight lines'] },
      { id: 'q4', k: 'main', q: 'What is the main idea of the story?', opts: ['Leo learns that farming is hard work.', 'Leo learns to cook rice.', 'Leo finds a snake in the mud and runs back to the house.', 'Grandpa sells his farm in Yilan.'], a: 0, why: '里歐插秧插到腰痛，晚上吃飯時第一次想到農夫的辛苦，把飯吃光光。', ev: ['he thought about how hard farmers work for every bowl'] }
    ] },
  { id: 'h021', lv: 3, genre: 'info', topic: 'animal', title: 'Busy Bees', zh: '忙碌的蜜蜂', gloss: { pollen: '花粉', spray: '噴霧（殺蟲劑）' },
    body: [
      ['Bees are small, but they do a very big job for people.'],
      ['When a bee visits a flower to drink its sweet juice, yellow pollen gets on its body.', 'Then the bee flies to another flower and leaves some of the pollen there.', 'This helps the flower make seeds and fruit.'],
      ['Many fruits we eat, such as apples and watermelons, get help from bees.'],
      ['Sadly, there are fewer bees in many places today.', 'Some reasons are bug spray and fewer wild flowers.', 'You can help by planting flowers at home or at school.', 'And if a bee flies near you, stay calm and let it go on its way.']
    ],
    qs: [
      { id: 'q1', k: 'detail', q: "What gets on a bee's body at a flower?", opts: ['Yellow pollen', 'Sweet juice', 'Small seeds', 'Water from the flower'], a: 0, why: '第二段說：蜜蜂喝花裡的甜汁時，黃色的花粉會沾到牠身上。', ev: ['yellow pollen gets on its body'] },
      { id: 'q2', k: 'detail', q: 'According to the article, how can people help bees?', opts: ['By planting flowers', 'By catching them', 'By eating more apples', 'By using bug spray'], a: 0, why: '最後一段說：你可以在家裡或學校種花來幫助蜜蜂。', ev: ['You can help by planting flowers at home or at school.'] },
      { id: 'q3', k: 'infer', q: 'What would probably happen if there were no bees?', opts: ['Some fruits would be hard to grow.', 'Flowers would grow bigger.', 'People would eat more apples.', 'There would be more bug spray in the garden.'], a: 0, why: '文章說蜜蜂幫花做出種子和果實，蘋果、西瓜都靠蜜蜂幫忙 → 沒有蜜蜂，有些水果就很難長出來。', ev: ['This helps the flower make seeds and fruit.'] },
      { id: 'q4', k: 'ref', q: 'In paragraph 2, what does "there" mean?', opts: ['Another flower', "The bee's body", 'School', 'The sweet juice'], a: 0, why: '蜜蜂飛到另一朵花，把一些花粉留在「那裡」，那裡就是另一朵花。', ev: ['leaves some of the pollen there'] }
    ] }
]);
