/* u-M-03 中高級模擬考 第 3 份（第二階段 作者 B，2026-11-21）題材：L1 1 農夫市集搬到車站後；2 料理影片一夜爆紅；3 網球場預約；4 道路施工公車停靠站改；5 合訂農場蔬菜箱；6 自助點餐卻收一成服務費（整合時換掉長輩轉傳假健康文，避開同份 L3 g3 查證假消息）；7 市立泳池整修課程搬家；8 房東下個月漲房租；9 邀上節目談都市農業；10 單車環島團加開梯次；L2 g1 公共自行車月票方案；g2 苗栗採梨場次；g3 料理頻道觀看數下滑；g4 趕回城選登山步道；g5 新住戶問機車停車證；g6 網路負評的新麵店；g7 在家烤麵包失敗；g8 棒球賽下雨暫停；g9 夜市搬遷；L3 g1 市府新設實體分隔自行車道；g2 颱風後菜價上漲報導；g3 網路節目談查證假消息；g4 攀岩館新手須知；g5 茶園導覽；g6 籃球教練賽後受訪；R2 g1 稻田養鴨；g2 運動後休息日的重要；R3 g1 地方週報停印轉數位＋老讀者來信；g2 河濱獨木舟立槳租借（表格）；g3 台灣高山咖啡；g4 人行道擺桌椅新規定 */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'u-M-03',
  title: '中高級模擬考 3',
  names: ['Riverton', 'Bluewater', 'Chiayi', 'Nantou', 'Hualien'],
  extra: ['podcast', 'yeast', 'kayak', 'fertilizer', 'app', 'subscription'],
  parts: {
    L1: { items: [
      { id: 'u-M-03-L1-01', spk: 'F', say: "Starting this Sunday, the farmers' market is moving to the parking lot behind the train station.",
        opts: ["Good. It'll be much easier to get there by train.", "I parked behind the station last Sunday.", "The train to the market leaves from platform two.", "The farmers grow most of their rice there."], a: 0 },
      { id: 'u-M-03-L1-02', spk: 'M', say: "My cooking video got over ten thousand views overnight, and I have no idea why.",
        opts: ["Ten thousand dollars is a lot for one video.", "You should cook it for a few more minutes.", "Maybe a popular account shared it. Have you checked the comments?", "I watched a cooking show last night, too."], a: 2 },
      { id: 'u-M-03-L1-03', spk: 'F', say: "Have you booked the tennis court for Saturday morning yet?",
        opts: ["I played tennis every Saturday as a child.", "Not yet. The online system was down when I tried.", "Yes, I returned the book on Saturday.", "The court is right next to the swimming pool."], a: 1 },
      { id: 'u-M-03-L1-04', spk: 'M', say: "Because of the road work, the number 12 bus won't stop outside our building for a whole month.",
        opts: ["The road was built about twelve years ago.", "I'll keep working on it for another month.", "That bus is always crowded at twelve o'clock.", "Then I guess we'll have to walk to the stop on Park Road."], a: 3 },
      { id: 'u-M-03-L1-05', spk: 'F', say: "I'm thinking of ordering a weekly box of vegetables straight from a farm. Do you want to share one?",
        opts: ["Sure, as long as it's not too much for two people.", "I shared a room with my brother on the farm.", "The box was delivered to the wrong address.", "No, I've never grown vegetables before."], a: 0 },
      { id: 'u-M-03-L1-06', spk: 'M', say: "This place adds a ten percent service charge, but we ordered at the counter and carried our own food.",
        opts: ["I'd rather carry the tray to the table myself.", "Ten percent of the customers ordered noodles.", "That does seem strange. Let's ask about it before we pay.", "The counter is right next to the door."], a: 2 },
      { id: 'u-M-03-L1-07', spk: 'F', say: "The city pool is closed for repairs until March, so our swimming lessons have been moved.",
        opts: ["I can't swim very far, either.", "The repairs cost the city a lot last March.", "I'll close the window before the lesson starts.", "Moved where? I hope it's not too far from here."], a: 3 },
      { id: 'u-M-03-L1-08', spk: 'M', say: "Our landlord just told us he's raising the rent by NT$2,000 starting next month.",
        opts: ["He raised his hand to ask a question.", "That's a lot. Maybe we should start looking at other places.", "Next month I'll be on vacation in Japan.", "Two thousand people live in our building."], a: 1 },
      { id: 'u-M-03-L1-09', spk: 'F', say: "Would you be willing to come on our podcast next month and talk about urban farming?",
        opts: ["I'd love to. Just send me the date and the topics.", "I listened to it on the bus this morning.", "My farm is about two hours from the city.", "Next month I'll be twenty-five."], a: 0 },
      { id: 'u-M-03-L1-10', spk: 'M', say: "The island tour for cyclists was fully booked, but they've just added another date.",
        opts: ["The island is famous for its seafood.", "I took my bike in for repairs last week.", "I've never been around the world, either.", "Let's sign up right away before it fills up again."], a: 3 }
    ] },
    L2: { items: [
      { id: 'u-M-03-L2-g1',
        lines: [
          ['F', "I'm thinking of using the city's shared bikes to commute to work. Have you looked at the plans?"],
          ['M', "Yes, there are four, and they're fairly flexible. How often would you ride?"],
          ['F', "Every weekday, both ways, but each trip only takes about twenty minutes."],
          ['M', "Then you don't need unlimited riding. Just make sure each ride stays within the free minutes."],
          ['F', "Right. And I'd rather not pay for a whole year, in case I change jobs."],
          ['M', "Makes sense. Then there's really only one choice."]
        ],
        chart: { cap: 'City Bike Plans', head: ['Plan', 'Price', 'Free Minutes per Ride', 'Length'],
          rows: [['Pay as You Go', 'NT$10 per 30 minutes', 'None', 'No limit'], ['Monthly Basic', 'NT$300', '30', '1 month'], ['Monthly Unlimited', 'NT$600', 'No limit', '1 month'], ['Yearly Basic', 'NT$2,800', '30', '1 year']] },
        qs: [
          { id: 'u-M-03-L2-01', q: 'Look at the chart. Which plan will the woman most likely choose?',
            opts: ['Pay as You Go', 'Yearly Basic', 'Monthly Unlimited', 'Monthly Basic'], a: 3 },
          { id: 'u-M-03-L2-02', q: 'Why does the woman not want to pay for a whole year?',
            opts: ['She plans to buy her own bike soon.', 'Her job may change in the future.', 'She only rides on weekends.', 'The yearly plan has no free minutes.'], a: 1 }
        ] },
      { id: 'u-M-03-L2-g2',
        lines: [
          ['M', "The pear farm in Miaoli is open for picking this month. Shall we take the kids on Saturday?"],
          ['F', "Sure. How far is it?"],
          ['M', "About an hour and a half by car. They have morning and afternoon sessions, depending on availability."],
          ['F', "Let's go in the morning. It'll be far too hot out in the fields after lunch."],
          ['M', "Okay. Oh, it says the price includes a basket of pears to take home, but the Saturday morning session is already full."],
          ['F', "Then let's go on Sunday instead, at the same time."]
        ],
        chart: { cap: 'Pear Picking Sessions', head: ['Day', 'Time', 'Price per Person'],
          rows: [['Saturday', '9:00 a.m.', 'NT$350'], ['Saturday', '2:00 p.m.', 'NT$300'], ['Sunday', '9:00 a.m.', 'NT$400'], ['Sunday', '2:00 p.m.', 'NT$350']] },
        qs: [
          { id: 'u-M-03-L2-03', q: 'Look at the chart. How much will they pay per person?',
            opts: ['NT$300', 'NT$350', 'NT$400', 'NT$450'], a: 2 },
          { id: 'u-M-03-L2-04', q: 'Why does the woman prefer to go in the morning?',
            opts: ['The weather will be cooler then.', 'The children have a class in the afternoon.', 'The best pears are picked early.', 'There is less traffic on the road.'], a: 0 }
        ] },
      { id: 'u-M-03-L2-g3',
        lines: [
          ['F', "Our dumpling video got only half the views of the one before. What went wrong?"],
          ['M', "I watched it again. Frankly, the first two minutes are just us chopping vegetables. People probably left before anything interesting happened."],
          ['F', "So we should show the finished dish right at the start?"],
          ['M', "Exactly. Give them a reason to stay. And let's keep the whole thing under eight minutes."],
          ['F', "Fine, but I don't want to cut the part where we explain the folding. That's what viewers keep asking about in the comments."],
          ['M', "Agreed. We'll cut the chopping instead."]
        ],
        qs: [
          { id: 'u-M-03-L2-05', q: 'What does the man think caused the drop in views?',
            opts: ['The video was posted at the wrong time.', 'The beginning of the video was too slow.', 'The dumplings did not look very tasty.', 'Viewers were tired of cooking videos.'], a: 1 },
          { id: 'u-M-03-L2-06', q: 'Why does the woman want to keep the folding part?',
            opts: ['It is the shortest part of the video.', 'It took them the longest time to film.', 'The man did most of the work in it.', 'Viewers have often asked about it.'], a: 3 }
        ] },
      { id: 'u-M-03-L2-g4',
        lines: [
          ['M', "Let's go hiking on Sunday. Which trail do you feel like doing?"],
          ['F', "Something with a view, but not too long. We need to be back in town by three for my cousin's wedding."],
          ['M', "Then we'd better avoid anything marked hard. They take far too long. What about the one along the river?"],
          ['F', "It's flat, but there's no view at all. And I read that part of it is closed because of a landslide."],
          ['M', "Okay, then there's only one left."]
        ],
        chart: { cap: 'Trails in Green Valley', head: ['Trail', 'Length', 'Level', 'Highlights'],
          rows: [['River Path', '6 kilometers', 'Easy', 'River, birds'], ['Sky View Trail', '4 kilometers', 'Easy', 'Mountain view'], ['Pine Ridge', '9 kilometers', 'Hard', 'Mountain view, old trees'], ['Waterfall Trail', '7 kilometers', 'Hard', 'Waterfall']] },
        qs: [
          { id: 'u-M-03-L2-07', q: 'Look at the chart. Which trail will the speakers most likely take?',
            opts: ['Sky View Trail', 'River Path', 'Pine Ridge', 'Waterfall Trail'], a: 0 },
          { id: 'u-M-03-L2-08', q: 'Why does the woman want a shorter hike?',
            opts: ['Her knee still hurts from last weekend.', 'The weather may turn bad in the afternoon.', 'She has to be back in town by three.', 'She has never hiked in the mountains before.'], a: 2 }
        ] },
      { id: 'u-M-03-L2-g5',
        lines: [
          ['F', "Excuse me, I just moved in on the fifth floor. Where can I park my scooter? The spaces out front are always full."],
          ['M', "Those are mostly for customers of the shops downstairs. Residents park in the basement, but you'll need a sticker from the management office first."],
          ['F', "I see. What do I need to get one?"],
          ['M', "Just bring your rental contract and your scooter's registration papers. The sticker costs NT$200 a year. And the office closes at six, so go before work if you can."],
          ['F', "Thanks. I'll stop by tomorrow morning."]
        ],
        qs: [
          { id: 'u-M-03-L2-09', q: "What is the woman's problem?",
            opts: ['Her scooter was taken away by the police.', 'She lost the key to the basement.', 'Her neighbors complained about her scooter.', 'She does not know where she is allowed to park.'], a: 3 },
          { id: 'u-M-03-L2-10', q: 'What does the man tell the woman to bring?',
            opts: ['Her ID card and a photo', 'Her rental contract and scooter papers', 'NT$200 and a letter from the owner', 'A ticket from one of the shops'], a: 1 }
        ] },
      { id: 'u-M-03-L2-g6',
        lines: [
          ['M', "Shall we try that new noodle place for dinner? Oh, wait. It only has a 2.8 rating online."],
          ['F', "I wouldn't worry too much. I read through the reviews, and most of the low scores are complaints about the chaotic lines on its opening weekend."],
          ['M', "So there are no genuine complaints about the food itself?"],
          ['F', "Hardly anything. People who actually got a table seem to love the beef noodles."],
          ['M', "All right. But let's get there at five, before the dinner crowd."]
        ],
        qs: [
          { id: 'u-M-03-L2-11', q: "Why was the restaurant's online rating low?",
            opts: ['Many people complained about waiting.', 'The beef noodles were too salty.', 'The prices were higher than expected.', 'The staff were rude to customers.'], a: 0 },
          { id: 'u-M-03-L2-12', q: 'What does the man suggest?',
            opts: ['Ordering the noodles online', 'Reading more reviews first', 'Arriving early to avoid crowds', 'Going to another restaurant instead'], a: 2 }
        ] },
      { id: 'u-M-03-L2-g7',
        lines: [
          ['F', "This is my third try at baking bread, and it still comes out flat and heavy."],
          ['M', "Did you check whether the yeast was fresh? Old yeast won't make the bread rise."],
          ['F', "Hmm. The package has been in the cupboard since last year."],
          ['M', "There's your answer. Get a new pack and try again."]
        ],
        qs: [
          { id: 'u-M-03-L2-13', q: 'What is the woman most likely going to do?',
            opts: ['Ask the man to bake the bread for her', 'Buy fresh yeast before baking again', 'Give up and buy bread from a bakery', 'Bake the bread for a longer time'], a: 1 }
        ] },
      { id: 'u-M-03-L2-g8',
        lines: [
          ['M', "It's starting to rain. Do you think they'll stop the game?"],
          ['F', "Probably just for a while. The forecast says it should clear up within an hour."],
          ['M', "Then let's wait under the roof by the food stands instead of going home. These seats were pretty costly."],
          ['F', "Fine, but if it's still raining at eight, I'm leaving."]
        ],
        qs: [
          { id: 'u-M-03-L2-14', q: 'What does the man want to do?',
            opts: ['Ask for their money back', 'Move to cheaper seats', 'Go home before the rain gets worse', 'Stay at the stadium until the rain stops'], a: 3 }
        ] },
      { id: 'u-M-03-L2-g9',
        lines: [
          ['F', "Did you hear the night market on our street is moving to the empty lot by the river next year?"],
          ['M', "Really? I'll miss being able to walk there in five minutes."],
          ['F', "Me too. But honestly, I won't miss the noise and the trash outside our windows every night."],
          ['M', "That's true. I guess it's better for the neighborhood in the end."]
        ],
        qs: [
          { id: 'u-M-03-L2-15', q: 'How does the woman feel about the move?',
            opts: ['She will miss some things but sees benefits.', 'She is angry because the market is her favorite.', 'She hopes the market will stay on their street.', 'She thinks the new place is too noisy.'], a: 0 }
        ] }
    ] },
    L3: { items: [
      { id: 'u-M-03-L3-g1', intro: 'Listen to a news report.', spk: 'M',
        say: "The city government announced today that it will add forty kilometers of protected bike lanes over the next two years. Unlike the painted lanes used now, the new lanes will give cyclists real protection, since they will be separated from cars by a low concrete wall. The work will be done in three stages, beginning with the busy area around the train station, where the number of bike accidents has been highest. Some shop owners have expressed concern that losing parking spaces will hurt their business. In response, the city says it will build a new underground parking lot near the market before the second stage begins. Officials also hope the lanes will encourage more people to commute to school and work by bike, reducing traffic during rush hour. Residents can view detailed maps of the plan and leave comments on the city's website until the end of this month.",
        chart: { cap: 'Bike Lane Plan', head: ['Stage', 'Area', 'Work Begins'],
          rows: [['1', 'Train station', 'March'], ['2', 'Market area', 'October'], ['3', 'University area', 'Next June']] },
        qs: [
          { id: 'u-M-03-L3-01', q: 'Look at the chart. When will the new parking lot probably be ready?',
            opts: ['Before March', 'Before October', 'By next June', 'By the end of this month'], a: 1 },
          { id: 'u-M-03-L3-02', q: 'Why will the work begin near the train station?',
            opts: ['The area has the most parking spaces.', 'The shop owners there asked for it.', 'It is the easiest area to build in.', 'It has had the most bike accidents.'], a: 3 },
          { id: 'u-M-03-L3-03', q: "What can residents do on the city's website?",
            opts: ['Give their opinions about the plan', 'Book a space in the new parking lot', 'Rent a bike for the new lanes', 'Report accidents on the road'], a: 0 }
        ] },
      { id: 'u-M-03-L3-g2', intro: 'Listen to a radio report.', spk: 'F',
        say: "Shoppers at traditional markets this week may be shocked by the price of green vegetables. After last weekend's typhoon brought heavy rain to central and southern Taiwan, farmers lost a large part of their crops, and the price of cabbage has nearly doubled. Officials from the agriculture department say the shortage should be temporary. Vegetables grown in greenhouses were mostly not damaged, and supplies from the mountains are expected to arrive in considerably larger amounts next week. Until then, the department is releasing vegetables that have been kept in cold storage to help keep prices under control. Nutrition experts suggest that families switch to root vegetables such as carrots and sweet potatoes, which were less affected by the storm and are still reasonably priced. Prices should return to normal in about three weeks, as long as no more storms arrive.",
        qs: [
          { id: 'u-M-03-L3-04', q: 'What happened to the price of cabbage?',
            opts: ['It fell by half.', 'It stayed the same.', 'It almost doubled.', 'It rose for three weeks.'], a: 2 },
          { id: 'u-M-03-L3-05', q: 'What is the government doing about the problem?',
            opts: ['Building more greenhouses in the south', 'Selling vegetables that were kept in storage', 'Buying vegetables from other countries', 'Asking farmers to plant root vegetables'], a: 1 },
          { id: 'u-M-03-L3-06', q: 'Why do experts recommend root vegetables?',
            opts: ['They are grown only in the mountains.', 'They are healthier than green vegetables.', 'They can be kept in cold storage.', 'They were less damaged and are still affordable.'], a: 3 }
        ] },
      { id: 'u-M-03-L3-g3', intro: 'Listen to the start of an online program.', spk: 'M',
        say: "Welcome back to Clear Signal, the show about life online. Last week, a photo of a giant snake in a city park was shared more than fifty thousand times before anyone noticed that it had been edited. Today we're asking a simple question: how can ordinary users avoid spreading stories like that? My guest is a journalist who has spent ten years checking facts and data for a news website. She'll share three habits that are crucial but take less than a minute each, and the first one is so simple that most of us forget it: read the whole article, not just the headline. Later in the show, we'll also look at why false stories often travel faster than true ones. But before we begin, a quick reminder: the results of our listener survey are now on our website. Thank you to the more than two thousand of you who took part.",
        qs: [
          { id: 'u-M-03-L3-07', q: "What is today's program mainly about?",
            opts: ['How to avoid sharing false information', 'How to take better photos of animals', 'Why news websites are losing readers', 'Why people enjoy online surveys'], a: 0 },
          { id: 'u-M-03-L3-08', q: 'Why does the speaker mention the photo of a snake?',
            opts: ['It was taken by the guest.', 'It shows how dangerous city parks can be.', 'It is an example of a fake image that spread widely.', 'It won a prize in a photo contest.'], a: 2 },
          { id: 'u-M-03-L3-09', q: 'What is the first habit the guest will talk about?',
            opts: ['Checking who took a photo', 'Reading the full story before sharing it', 'Waiting a day before posting anything', 'Asking a journalist for help'], a: 1 }
        ] },
      { id: 'u-M-03-L3-g4', intro: 'Listen to an instructor at a climbing center.', spk: 'F',
        say: "Hello, everyone, and welcome to your first climbing session. Climbing is more demanding than it looks, so before you touch the wall, there are a few things you need to know. First, please take off watches and rings, and empty your pockets. These things can scratch the wall or fall on someone below, so stay alert whenever others are climbing above you. Second, today you'll only be using the low walls in this room. They're no taller than three meters, and the soft mats underneath are thick enough to protect you if you fall, so you won't need ropes yet. When you want to come down, please don't jump from the top. Climb down at least half of the way and then step off carefully. Finally, the colored tape next to each hold shows the level of the route. Start with yellow, which is the easiest. Once you can finish two yellow routes without help, you can try green.",
        qs: [
          { id: 'u-M-03-L3-10', q: 'Why are the climbers told to empty their pockets?',
            opts: ['The center does not allow phones.', 'Their clothes need to be light.', 'The staff want to check their tickets.', 'Things could fall out and hit people.'], a: 3 },
          { id: 'u-M-03-L3-11', q: 'What should a beginner do before trying a green route?',
            opts: ['Finish two yellow routes without help', 'Learn how to use the ropes', 'Jump down safely from the top', 'Climb the tall wall in another room'], a: 0 }
        ] },
      { id: 'u-M-03-L3-g5', intro: 'Listen to a guide at a tea farm.', spk: 'M',
        say: "Good morning, and welcome to our family's tea farm. My grandfather planted the first tea bushes on this hill about six decades ago, and we still pick most of the leaves by hand. You may wonder why we don't use machines. Machines are much faster, but they cut old and young leaves together. For our best tea, we only want the bud and the top two leaves, so careful hands are still the best tool. After picking, the leaves are spread out to lose some water, then rolled and dried in the building behind me. The whole process takes about two days. In a moment, we'll walk up to the field so you can try picking a few leaves yourselves. Please wear the hats we've given you, because the sun on the hill is stronger than you might expect.",
        qs: [
          { id: 'u-M-03-L3-12', q: 'Why does the farm still pick leaves by hand?',
            opts: ['Machines are too expensive to buy.', 'The hill is too steep for machines.', 'Only the youngest leaves can be chosen that way.', 'The grandfather does not trust machines.'], a: 2 },
          { id: 'u-M-03-L3-13', q: 'Why should the visitors wear hats?',
            opts: ['The hats protect them from insects.', 'The sun on the hill is strong.', 'It is a tradition on the farm.', 'The hats are used to carry leaves.'], a: 1 }
        ] },
      { id: 'u-M-03-L3-g6', intro: 'Listen to a basketball coach speaking to reporters.', spk: 'M',
        say: "Well, I'm genuinely proud of how the players fought back in the second half. We were down by fifteen points at the break, and honestly, we looked tired. In the locker room, I didn't shout at anyone. I just reminded them that we'd practiced for exactly this kind of game, and that the other team was getting tired, too. We switched to a faster style, our defense stayed consistent, and our younger players really made the difference tonight. As for our captain, Ryan, his ankle injury isn't as serious as we first feared. He'll rest for about two weeks, so he'll miss the next three games, but he should be back in time for the final games of the season. For now, we'll enjoy this win, and tomorrow we'll start getting ready for Saturday.",
        qs: [
          { id: 'u-M-03-L3-14', q: 'How did the coach handle the team at the break?',
            opts: ['He calmly reminded them of their training.', 'He shouted at the players who made mistakes.', 'He replaced all of the younger players.', 'He told them the game was already lost.'], a: 0 },
          { id: 'u-M-03-L3-15', q: 'What does the coach say about Ryan?',
            opts: ['He will play in the next game.', 'He has to stop playing this season.', 'He played very well despite his injury.', 'He should return before the season ends.'], a: 3 }
        ] }
    ] },
    R1: { items: [
      { id: 'u-M-03-R1-01', s: 'Many rice farmers now also grow beans and corn, so that one bad year for a single crop will not ___ their whole income.',
        opts: ['earn', 'raise', 'ruin', 'save'], a: 2 },
      { id: 'u-M-03-R1-02', s: "Thanks to the unusually warm and dry spring, this year's mango ___ in the south is expected to be the largest in ten years.",
        opts: ['harvest', 'shortage', 'recipe', 'menu'], a: 0 },
      { id: 'u-M-03-R1-03', s: 'The new subway line will cut the daily ___ of people living in the suburbs by almost half an hour.',
        opts: ['salary', 'commute', 'schedule', 'distance'], a: 1 },
      { id: 'u-M-03-R1-04', s: 'To reduce traffic jams, the city now ___ drivers a fee for entering the downtown area during rush hour.',
        opts: ['pays', 'costs', 'spends', 'charges'], a: 3 },
      { id: 'u-M-03-R1-05', s: 'Before posting a photo of your friends online, it is polite to ask for their ___ first.',
        opts: ['permission', 'attention', 'admission', 'ambition'], a: 0 },
      { id: 'u-M-03-R1-06', s: 'The funny video ___ quickly across social media after a famous singer shared it, and within two days millions had watched it.',
        opts: ['built', 'raised', 'spread', 'threw'], a: 2 },
      { id: 'u-M-03-R1-07', s: 'The news website ___ its stories every few minutes, so readers can always see the latest information.',
        opts: ['deletes', 'updates', 'prints', 'borrows'], a: 1 },
      { id: 'u-M-03-R1-08', s: 'The tennis player ___ from the tournament after hurting her wrist during practice the day before her first match.',
        opts: ['recovered', 'graduated', 'escaped', 'withdrew'], a: 3 },
      { id: 'u-M-03-R1-09', s: 'Hiking alone in the mountains can be risky, so always tell someone your ___ before you set off.',
        opts: ['rule', 'score', 'route', 'rank'], a: 2 },
      { id: 'u-M-03-R1-10', s: 'The cake contains nuts, so it is not ___ for anyone who is allergic to them.',
        opts: ['suitable', 'available', 'valuable', 'comfortable'], a: 0 }
    ] },
    R2: { items: [
      { id: 'u-M-03-R2-g1', title: 'Ducks in the Rice Fields',
        text: "In some parts of Asia, farmers have found an unusual helper for growing rice: ducks. About two weeks after the young rice plants are put into the flooded fields, the farmers let a group of young ducks into the water. [1] The ducks eat insects and weeds that would otherwise compete with the rice, and their waste works as a natural fertilizer.\nThe ducks also help in a less obvious way. As they paddle through the fields, they stir up the muddy water, [2]. This makes it harder for new weeds to grow and allows more air to reach the roots of the rice plants.\nBecause the farmers no longer need to spray chemicals, the rice can be sold as organic, [3] usually brings a higher price. When the rice begins to flower and the ducks become large enough to damage the plants, they are moved out of the fields.\nThe method does have its [4]. Farmers must build fences to protect the ducks from dogs and other animals, and someone has to check on the birds every day. Still, many farmers say the extra effort is genuinely worth it. [5] For them, the rice field has become a small, balanced system in which plants and animals support each other.",
        qs: [
          { id: 'u-M-03-R2-01', opts: ['The rice plants are then cut down and sold at the market.', 'For the next two months, the birds spend almost all day in the fields.', 'Most farmers keep the ducks as pets for many years.', 'This is because ducks cannot swim in deep water.'], a: 1 },
          { id: 'u-M-03-R2-02', opts: ['which blocks sunlight from reaching the bottom', 'which makes the water safe to drink', 'so the rice plants are washed away', 'because the ducks are looking for fish'], a: 0 },
          { id: 'u-M-03-R2-03', opts: ['what', 'who', 'where', 'which'], a: 3 },
          { id: 'u-M-03-R2-04', opts: ['rewards', 'origins', 'disadvantages', 'benefits'], a: 2 },
          { id: 'u-M-03-R2-05', opts: ['Many have already gone back to using chemicals.', 'Not only do they save money on chemicals, but they also enjoy watching the ducks at work.', 'That is why the ducks are sold before the rice is planted.', 'Others prefer to raise chickens in their fields instead.'], a: 1 }
        ] },
      { id: 'u-M-03-R2-g2', title: 'Why Rest Days Matter',
        text: "Many people who start exercising believe that the more they train, the faster they will improve. [1], sports scientists say that rest is just as important as the training itself.\nDuring hard exercise, tiny tears form in the muscles. This sounds alarming, but it is a normal part of getting stronger. It is in the hours and days after a workout, [2], that the body repairs these tears and builds the muscles back a little stronger than before. Without enough rest, the repair work never finishes, and performance may actually get worse.\nRest also protects the mind. [3] People who train every day without a break often report feeling tired, losing interest in their sport, or sleeping badly. These are all signs that the body needs time off.\nThis does not mean lying on the sofa all day. Many coaches recommend \"active rest,\" such as a slow walk, an easy swim or gentle stretching, which is beneficial because it keeps the blood moving without putting too much [4] on tired muscles.\nHow much rest is enough? It depends on the person and the sport, but most beginners need at least one or two rest days a week. The most important rule is to listen to your body. [5]",
        qs: [
          { id: 'u-M-03-R2-06', opts: ['However', 'Therefore', 'For example', 'In addition'], a: 0 },
          { id: 'u-M-03-R2-07', opts: ['while the person is still exercising', 'because the muscles stop working', 'unless the person eats a big meal', 'when the person is resting'], a: 3 },
          { id: 'u-M-03-R2-08', opts: ['Most athletes never feel tired at all.', 'This is why rest days should be avoided.', 'Training too hard for too long can also wear people out mentally.', 'The mind has nothing to do with exercise.'], a: 2 },
          { id: 'u-M-03-R2-09', opts: ['interest', 'pressure', 'attention', 'effort'], a: 1 },
          { id: 'u-M-03-R2-10', opts: ['Beginners should train twice a day to improve faster.', 'Rest days are only necessary for professional athletes.', 'Pain is a sign that you should train even harder.', 'If you still feel sore or tired, an extra day off is never a waste.'], a: 3 }
        ] }
    ] },
    R3: { items: [
      { id: 'u-M-03-R3-g1',
        texts: [
          { type: 'notice', title: 'A Message to Our Readers: Riverton Weekly Goes Digital',
            body: "After 35 years in print, Riverton Weekly will publish its final paper edition on June 28. From July, all of our news will be available on our website and through a free app for mobile phones.\nWhy the change? Printing and delivery costs have nearly doubled in the past five years, while the number of readers who receive the paper at home has fallen by more than half. At the same time, our website now has over 40,000 readers a month, many of them under 40.\nGoing digital will allow us to report breaking news as it happens, add videos and maps to our stories, and spend more of our budget on reporters instead of paper and ink. For a local paper, that is crucial.\nWe know that some readers, especially older ones, prefer a paper they can hold in their hands. For them, we will offer a printed booklet with a summary of the week's top stories. It will be available free every Friday at the public library, the community center and the health clinic.\nReaders who currently pay for home delivery can choose one of two options. They can receive a refund for any remaining months, or they can move their subscription to our new online membership, which includes every past issue of the paper since 1990.\nQuestions? Call our reader service line at 03-555-2468, Monday to Friday, 9 a.m. to 5 p.m." },
          { type: 'letter', from: 'Henry Kao', to: 'The Editor, Riverton Weekly', title: 'About the Final Paper Edition',
            body: "To the editor,\nI have read Riverton Weekly every Saturday morning for almost thirty years, usually with my first cup of tea, so I was sad to hear about your decision. I understand that times have changed, and I do not blame you for it.\nMy eyesight is not what it used to be, and I find reading on a small phone screen tiring. My grandson has offered to set up the app on a tablet for me, and I am willing to give it a try. However, I would like to know whether the text can be made larger.\nI also have eight months left on my paper subscription. I would rather not lose that money, but I have no use for old issues either. Please let me know what I need to do.\nFinally, the library is a long bus ride from my home, but the community center is just around the corner. I hope I can still pick up the printed summary there.\nHenry Kao" }
        ],
        qs: [
          { id: 'u-M-03-R3-01', q: 'Why is the newspaper stopping its paper edition?',
            opts: ['Its reporters prefer to write for the website.', 'Printing costs more and fewer people receive it.', 'The city library asked it to stop printing.', 'Most of its older readers have moved away.'], a: 1 },
          { id: 'u-M-03-R3-02', q: 'Which of the following is NOT mentioned as an advantage of going digital?',
            opts: ['Reporting news more quickly', 'Adding videos to stories', 'Lower prices for advertisers', 'Spending more money on reporters'], a: 2 },
          { id: 'u-M-03-R3-03', q: 'Which option will Mr. Kao most likely choose for his subscription?',
            opts: ['Getting his money back for the remaining months', 'Moving to the online membership', 'Keeping his paper subscription until it ends', 'Giving his subscription to his grandson'], a: 0 },
          { id: 'u-M-03-R3-04', q: 'What does Mr. Kao want to know about the app?',
            opts: ['Whether it is free for older readers', 'Whether it works on a tablet', 'Whether his grandson can use it too', 'Whether the words can be shown in a bigger size'], a: 3 },
          { id: 'u-M-03-R3-05', q: 'Where and when will Mr. Kao probably get the printed summary?',
            opts: ['At the library on Saturdays', 'At the community center on Fridays', 'At the health clinic on Saturdays', 'At his home every Friday'], a: 1 }
        ] },
      { id: 'u-M-03-R3-g2',
        texts: [
          { type: 'notice', title: 'Bluewater River Park: Paddle Sports Rental',
            body: "Enjoy the river from a new angle! Our rental center by the North Gate is open from 8:00 a.m. to 5:00 p.m., Tuesday to Sunday, from April to October. Booking in advance is recommended, as availability is limited on weekends. Every rental includes a life jacket, which must be worn at all times on the water.\nFirst-time paddlers are welcome, but anyone renting a stand-up paddle board must first join a free 20-minute lesson, held every hour on the hour. Kayaks do not require a lesson. Children aged 8 to 15 may only use a double kayak, together with an adult. Children under 8 are not allowed on the water. Please report any faulty equipment to our staff right away.\nPlease return all equipment by 4:30 p.m. Late returns will be charged an extra NT$100 for every 15 minutes.\nPaddling is not allowed when the river is too high or the wind is too strong. On such days, a red flag will be raised at the rental center, and all bookings will be refunded in full. To check conditions before you come, visit our website or call the center after 7:30 a.m." },
          { type: 'table', title: 'Rental Prices',
            table: { head: ['Equipment', '1 Hour', '2 Hours', 'Half Day (4 Hours)'],
              rows: [['Single kayak', 'NT$300', 'NT$500', 'NT$800'], ['Double kayak', 'NT$450', 'NT$750', 'NT$1,200'], ['Stand-up paddle board', 'NT$350', 'NT$600', 'NT$950']] } }
        ],
        qs: [
          { id: 'u-M-03-R3-06', q: 'What is included in every rental?',
            opts: ['A life jacket', 'A free lesson', 'A map of the river', 'A bottle of water'], a: 0 },
          { id: 'u-M-03-R3-07', q: 'Mrs. Lin wants to go paddling with her ten-year-old daughter for two hours. How much will she pay?',
            opts: ['NT$500', 'NT$1,000', 'NT$750', 'NT$1,200'], a: 2 },
          { id: 'u-M-03-R3-08', q: 'Who must take a lesson before going on the water?',
            opts: ['All children under 15', 'Anyone renting a single kayak', 'People coming for the first time', 'Anyone using a paddle board'], a: 3 },
          { id: 'u-M-03-R3-09', q: 'What happens when a red flag is raised?',
            opts: ['Only kayaks may be used that day.', 'Customers get all of their money back.', 'Paddlers must return within one hour.', 'The center opens later than usual.'], a: 1 },
          { id: 'u-M-03-R3-10', q: "The phrase \"from a new angle\" in the first sentence is closest in meaning to",
            opts: ['at a lower price', 'in a different way', 'with new equipment', 'at a faster speed'], a: 1 }
        ] },
      { id: 'u-M-03-R3-g3',
        texts: [
          { type: 'article', title: "Coffee from Taiwan's Mountains",
            body: "When people think of Taiwan's farm products, they usually think of tea, rice or tropical fruit. Few realize that the island also grows coffee, and that some of it is now winning international prizes.\nCoffee was first planted in Taiwan more than a hundred years ago, but for decades farmers grew very little of it, since imported beans were much cheaper. That began to change about twenty years ago. As more people in Taiwan started drinking coffee, a number of tea and fruit farmers in the mountains of Chiayi, Nantou and Hualien decided to try planting coffee trees between their other crops.\nThe mountains turned out to be a good place for coffee. At higher altitudes, the cool air makes the coffee fruit become ripe more slowly, which gives the beans more time to develop sweet and complex flavors. Many farmers also pick the red fruit by hand, choosing only the ripe ones. This practice improves quality, but it takes far more time and is not economical.\nHowever, Taiwanese coffee faces serious challenges. Land and labor are costly, so a cup made from local beans can cost three or four times as much as an ordinary cup. Typhoons can also destroy a whole year's harvest in a single night. As a result, total production remains small, and most of the coffee drunk in Taiwan is still imported.\nMany farmers believe their future lies in quality rather than quantity. Instead of competing on price, they invite visitors to their farms to pick fruit, roast beans and taste the difference for themselves. \"Once people see how much work goes into each cup,\" says one farmer in Chiayi, \"they understand why it costs more.\"" }
        ],
        qs: [
          { id: 'u-M-03-R3-11', q: 'Why did farmers in Taiwan grow little coffee for many years?',
            opts: ['The weather was too hot for coffee trees.', 'Beans from other countries cost less.', 'Most people in Taiwan preferred tea.', 'The government did not allow it.'], a: 1 },
          { id: 'u-M-03-R3-12', q: 'According to the article, how does growing coffee high in the mountains affect the beans?',
            opts: ['They grow larger and heavier.', 'They can be picked twice a year.', 'They develop more flavor because they become ripe slowly.', 'They are protected from typhoons.'], a: 2 },
          { id: 'u-M-03-R3-13', q: 'Which of the following is NOT mentioned as a challenge for Taiwanese coffee?',
            opts: ['The high cost of land and workers', 'Damage caused by typhoons', 'Its high price for customers', 'A lack of interest from coffee drinkers'], a: 3 },
          { id: 'u-M-03-R3-14', q: "In paragraph 3, the word \"ripe\" is closest in meaning to",
            opts: ['ready to be picked and eaten', 'small and green', 'dry and hard', 'sold at a high price'], a: 0 },
          { id: 'u-M-03-R3-15', q: "What can be inferred about the farmers' plans for the future?",
            opts: ['They plan to lower their prices to compete with imports.', 'They will stop growing tea and fruit.', 'They hope visitors will value the work behind their coffee.', 'They want to move their farms to lower land.'], a: 2 }
        ] },
      { id: 'u-M-03-R3-g4',
        texts: [
          { type: 'notice', title: 'New Rules for Sidewalk Seating',
            body: "From September 1, restaurants and cafes in Riverton that wish to place tables and chairs on the sidewalk must apply for a permit from the city's Department of Urban Development. The city has received a growing number of complaints from pedestrians, especially parents with young children and people in wheelchairs, who say crowded sidewalks force them to walk in the road.\nUnder the new rules, at least 1.5 meters of the sidewalk must be kept clear at all times for people walking past. Outdoor seating will be allowed only between 10:00 a.m. and 10:00 p.m., and all furniture must be taken inside each night. Restaurants near schools may not use the sidewalk on weekday mornings before 9:00 a.m.\nThe permit costs NT$3,000 a year for up to four tables. Businesses that want more tables will pay an additional NT$1,000 for every two tables, up to a maximum of ten. Eligible businesses can apply online, and applications take about two weeks to process.\nCity inspectors will carry out regular checks. A business that breaks the rules for the first time will receive a written warning. A second offense will lead to a fine of NT$6,000, and a business that breaks the rules three times within a year will lose its permit.\nThe city says the aim is not to remove outdoor seating, which many residents find charming, but to make sure that sidewalks remain safe and open for everyone. Questions can be sent to the department by email." }
        ],
        qs: [
          { id: 'u-M-03-R3-16', q: 'Why was this notice written?',
            opts: ['To ask restaurants to stop serving food outdoors', 'To explain new rules for using sidewalks', 'To announce wider sidewalks near schools', 'To invite residents to open new cafes'], a: 1 },
          { id: 'u-M-03-R3-17', q: 'A cafe wants to put six tables on the sidewalk. How much will its permit cost each year?',
            opts: ['NT$3,000', 'NT$6,000', 'NT$5,000', 'NT$4,000'], a: 3 },
          { id: 'u-M-03-R3-18', q: 'What led the city to make the new rules?',
            opts: ['Complaints from people who had trouble walking past', 'Too much noise from restaurants at night', 'A lack of space for new restaurants', 'Requests from cafe owners for more tables'], a: 0 },
          { id: 'u-M-03-R3-19', q: 'What will happen to a restaurant that breaks the rules for the second time?',
            opts: ['It will receive a written warning.', 'It will lose its permit.', 'It will have to pay NT$6,000.', 'It must close for two weeks.'], a: 2 },
          { id: 'u-M-03-R3-20', q: 'Which of the following is allowed under the new rules?',
            opts: ['Leaving chairs outside overnight', 'Serving customers outdoors at 8:00 p.m.', 'Using the sidewalk near a school at 7:30 a.m. on Monday', 'Placing twelve tables on the sidewalk'], a: 1 }
        ] }
    ] }
  }
});
