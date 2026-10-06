/* 句型：12 個，每個 5 句例句。 */
window.DATA_PATTERNS = [
{id:"there-is",pattern:"There is / There are …",zh:"（某個地方）有…",ex:[
 {en:"There is a cat under the table.",zh:"桌子下面有一隻貓。"},{en:"There are five people in my family.",zh:"我家有五個人。"},{en:"There is a park near my school.",zh:"我學校附近有一座公園。"},{en:"There are many stars in the sky.",zh:"天空中有很多星星。"},{en:"Is there a store near here?",zh:"這附近有商店嗎？"}],
 extra:[{"en":"There is a bird in the tree.","zh":"樹上有一隻鳥。"},{"en":"There are two books on my desk.","zh":"我的書桌上有兩本書。"},{"en":"Are there any apples in the box?","zh":"箱子裡有蘋果嗎？"}],
 typed:[{"zh":"桌上有一顆蘋果。","en":"There is an apple on the table.","alts":["There's an apple on the table."]},{"zh":"公園裡有很多孩子。","en":"There are many children in the park.","alts":["There are lots of children in the park.","There are a lot of children in the park.","There are many kids in the park."]}]},
{id:"want-to",pattern:"I want to …",zh:"我想要（做）…",ex:[
 {en:"I want to eat ice cream.",zh:"我想吃冰淇淋。"},{en:"I want to be a doctor.",zh:"我想當醫生。"},{en:"I want to go to Japan.",zh:"我想去日本。"},{en:"I want to play with my friends.",zh:"我想和朋友玩。"},{en:"Do you want to watch a movie?",zh:"你想看電影嗎？"}],
 extra:[{"en":"I want to read this book.","zh":"我想讀這本書。"},{"en":"She wants to buy a new bag.","zh":"她想買一個新包包。"},{"en":"We want to go to the beach.","zh":"我們想去海邊。"}],
 typed:[{"zh":"我想喝水。","en":"I want to drink water.","alts":["I want to drink some water."]},{"zh":"我想去公園。","en":"I want to go to the park."}]},
{id:"like-ing",pattern:"I like …ing",zh:"我喜歡做…",ex:[
 {en:"I like swimming.",zh:"我喜歡游泳。"},{en:"I like reading comic books.",zh:"我喜歡看漫畫書。"},{en:"My brother likes playing video games.",zh:"我哥哥喜歡打電動。"},{en:"We like riding bikes in the park.",zh:"我們喜歡在公園騎腳踏車。"},{en:"Do you like drawing?",zh:"你喜歡畫畫嗎？"}],
 extra:[{"en":"I like singing songs.","zh":"我喜歡唱歌。"},{"en":"She likes cooking.","zh":"她喜歡做菜。"},{"en":"They like playing soccer.","zh":"他們喜歡踢足球。"}],
 typed:[{"zh":"我喜歡跳舞。","en":"I like dancing."},{"zh":"我喜歡看書。","en":"I like reading.","alts":["I like reading books."]}]},
{id:"time-to",pattern:"It's time to …",zh:"該…的時間了",ex:[
 {en:"It's time to get up.",zh:"該起床了。"},{en:"It's time to go to school.",zh:"該上學了。"},{en:"It's time to eat dinner.",zh:"該吃晚餐了。"},{en:"It's time to do your homework.",zh:"該寫功課了。"},{en:"It's time to go to bed.",zh:"該睡覺了。"}],
 extra:[{"en":"It's time to wash your hands.","zh":"該洗手了。"},{"en":"It's time to go home.","zh":"該回家了。"},{"en":"It's time to have lunch.","zh":"該吃午餐了。"}],
 typed:[{"zh":"該刷牙了。","en":"It's time to brush your teeth.","alts":["It is time to brush your teeth."]},{"zh":"該吃早餐了。","en":"It's time to eat breakfast.","alts":["It is time to eat breakfast.","It's time to have breakfast.","It is time to have breakfast."]}]},
{id:"how-many",pattern:"How many …?",zh:"有多少（個）…？",ex:[
 {en:"How many apples do you have?",zh:"你有幾顆蘋果？"},{en:"How many people are in your family?",zh:"你家有幾個人？"},{en:"How many books are on the desk?",zh:"書桌上有幾本書？"},{en:"How many legs does a spider have?",zh:"蜘蛛有幾隻腳？"},{en:"How many days are in a week?",zh:"一個星期有幾天？"}],
 extra:[{"en":"How many cats do you have?","zh":"你有幾隻貓？"},{"en":"How many students are in your class?","zh":"你們班有幾個學生？"},{"en":"How many pencils are in your bag?","zh":"你的包包裡有幾支鉛筆？"}],
 typed:[{"zh":"你有幾本書？","en":"How many books do you have?"},{"zh":"你家有幾個人？","en":"How many people are in your family?","alts":["How many people are there in your family?"]}]},
{id:"can-you",pattern:"Can you …?",zh:"你可以／你會…嗎？",ex:[
 {en:"Can you help me?",zh:"你可以幫我嗎？"},{en:"Can you swim?",zh:"你會游泳嗎？"},{en:"Can you open the door, please?",zh:"可以請你開門嗎？"},{en:"Can you say it again?",zh:"你可以再說一次嗎？"},{en:"Can you play the guitar?",zh:"你會彈吉他嗎？"}],
 extra:[{"en":"Can you ride a bike?","zh":"你會騎腳踏車嗎？"},{"en":"Can you close the window?","zh":"你可以關窗戶嗎？"},{"en":"Can you speak English?","zh":"你會說英文嗎？"}],
 typed:[{"zh":"你會游泳嗎？","en":"Can you swim?"},{"zh":"你可以幫我嗎？","en":"Can you help me?"}]},
{id:"lets",pattern:"Let's …",zh:"我們一起…吧！",ex:[
 {en:"Let's go!",zh:"我們走吧！"},{en:"Let's play a game.",zh:"我們來玩遊戲吧。"},{en:"Let's sing a song together.",zh:"我們一起唱首歌吧。"},{en:"Let's go to the park after school.",zh:"放學後我們去公園吧。"},{en:"Let's eat lunch now.",zh:"我們現在吃午餐吧。"}],
 extra:[{"en":"Let's play basketball.","zh":"我們來打籃球吧。"},{"en":"Let's go home.","zh":"我們回家吧。"},{"en":"Let's read a book together.","zh":"我們一起看書吧。"}],
 typed:[{"zh":"我們走吧！","en":"Let's go!","alts":["Let us go!"]},{"zh":"我們來唱歌吧。","en":"Let's sing.","alts":["Let's sing a song.","Let's sing songs."]}]},
{id:"have-to",pattern:"I have to …",zh:"我必須…",ex:[
 {en:"I have to go home now.",zh:"我現在必須回家了。"},{en:"I have to finish my homework.",zh:"我必須寫完功課。"},{en:"I have to get up early tomorrow.",zh:"我明天必須早起。"},{en:"She has to clean her room.",zh:"她必須打掃她的房間。"},{en:"Do you have to go to school on Saturday?",zh:"你星期六要上學嗎？"}],
 extra:[{"en":"I have to clean my room.","zh":"我必須打掃我的房間。"},{"en":"We have to wear our uniforms.","zh":"我們必須穿制服。"},{"en":"He has to go to bed early.","zh":"他必須早點睡覺。"}],
 typed:[{"zh":"我必須寫功課。","en":"I have to do my homework.","alts":["I have to do homework."]},{"zh":"我必須回家了。","en":"I have to go home.","alts":["I have to go home now."]}]},
{id:"it-is-to",pattern:"It is ___ to …",zh:"做…是很___的",ex:[
 {en:"It is fun to play soccer.",zh:"踢足球很好玩。"},{en:"It is easy to make a sandwich.",zh:"做三明治很簡單。"},{en:"It is hard to get up early.",zh:"早起很難。"},{en:"It is important to wash your hands.",zh:"洗手很重要。"},{en:"It is dangerous to swim alone.",zh:"一個人游泳很危險。"}],
 extra:[{"en":"It is fun to swim in the sea.","zh":"在海裡游泳很好玩。"},{"en":"It is easy to learn English.","zh":"學英文很簡單。"},{"en":"It is good to eat vegetables.","zh":"吃蔬菜很好。"}],
 typed:[{"zh":"看書很好玩。","en":"It is fun to read books.","alts":["It's fun to read books.","It is fun to read.","It's fun to read."]},{"zh":"早起很難。","en":"It is hard to get up early.","alts":["It's hard to get up early.","It is difficult to get up early.","It's difficult to get up early."]}]},
{id:"what-do",pattern:"What do you …?",zh:"你（做）什麼…？",ex:[
 {en:"What do you want for dinner?",zh:"你晚餐想吃什麼？"},{en:"What do you like to do?",zh:"你喜歡做什麼？"},{en:"What do you have in your bag?",zh:"你的包包裡有什麼？"},{en:"What do you do after school?",zh:"你放學後做什麼？"},{en:"What does your dad do?",zh:"你爸爸是做什麼工作的？"}],
 extra:[{"en":"What do you eat for breakfast?","zh":"你早餐吃什麼？"},{"en":"What do you want to be?","zh":"你長大想做什麼？"},{"en":"What do you see?","zh":"你看到什麼？"}],
 typed:[{"zh":"你喜歡什麼？","en":"What do you like?"},{"zh":"你想要什麼？","en":"What do you want?"}]},
{id:"i-think",pattern:"I think …",zh:"我覺得…",ex:[
 {en:"I think it will rain today.",zh:"我覺得今天會下雨。"},{en:"I think this book is interesting.",zh:"我覺得這本書很有趣。"},{en:"I think you are right.",zh:"我覺得你是對的。"},{en:"I think he is at home.",zh:"我想他在家。"},{en:"I don't think so.",zh:"我不這麼認為。"}],
 extra:[{"en":"I think she is right.","zh":"我覺得她是對的。"},{"en":"I think it is a good idea.","zh":"我覺得這是個好主意。"},{"en":"I think he likes dogs.","zh":"我覺得他喜歡狗。"}],
 typed:[{"zh":"我覺得這很簡單。","en":"I think it is easy.","alts":["I think it's easy.","I think this is easy."]},{"zh":"我覺得你是對的。","en":"I think you are right.","alts":["I think you're right."]}]},
{id:"dont",pattern:"Don't …",zh:"不要…",ex:[
 {en:"Don't run in the hallway.",zh:"不要在走廊上跑。"},{en:"Don't worry.",zh:"別擔心。"},{en:"Don't be late for school.",zh:"上學不要遲到。"},{en:"Don't touch the hot pan.",zh:"不要碰熱鍋子。"},{en:"Don't forget your homework.",zh:"別忘了你的功課。"}],
 extra:[{"en":"Don't eat too much candy.","zh":"不要吃太多糖果。"},{"en":"Don't talk in class.","zh":"上課不要講話。"},{"en":"Don't be sad.","zh":"不要難過。"}],
 typed:[{"zh":"不要跑！","en":"Don't run!","alts":["Do not run!"]},{"zh":"別擔心。","en":"Don't worry.","alts":["Do not worry."]}]}
];
