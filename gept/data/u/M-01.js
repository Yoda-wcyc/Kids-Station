/* u-M-01 中高級模擬考 第 1 份（第一階段，2026-11-21）題材：L2 g1 搬家公司比價；g2 生日聚餐訂位加人；g3 洗衣機保固到府維修；g4 飯店櫃台二次面試；g5 颱風前居家準備；g6 撞窗受傷的鳥；g7 樓上漏水；g8 外帶餐點做錯；g9 動物園夜間導覽；L3 g1 大樓電梯汰換公告；g2 寒流氣象報告；g3 海龜保育解說；g4 獵才顧問語音留言；g5 客服專線退貨語音；g6 主廚秋季換菜單；R2 g1 租屋前檢查；g2 濕地候鳥季；R3 g1 野生動物園徵飼育助理＋應徵信；g2 冷氣清洗保養方案；g3 住戶管委會會議紀錄；g4 梅雨季居家防霉 */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'u-M-01',
  title: '中高級模擬考 1',
  names: ['Hilltop', 'Greenway', 'Oakwood', 'Sunfield', 'Greenhill'],
  extra: ['technician', 'humidity'],
  parts: {
    L1: { items: [
      { id: 'u-M-01-L1-01', spk: 'F', say: "The movers said they'd arrive at eight, but it's almost ten and nobody has called.",
        opts: ["They moved here about ten years ago.", "Let me phone the company and find out what's going on.", "Eight cardboard boxes should be enough for the kitchen.", "Great, so they finished earlier than planned."], a: 1 },
      { id: 'u-M-01-L1-02', spk: 'M', say: "Would you mind if we moved our reservation from seven to seven thirty?",
        opts: ["Yes, we reserved a table for four.", "Seven people is too many for one table.", "Sorry, I don't mind the noise at all.", "Not at all. I'll let the restaurant know."], a: 3 },
      { id: 'u-M-01-L1-03', spk: 'F', say: "I heard the heavy rain is going to last until the weekend.",
        opts: ["Then we'd better postpone the barbecue until next week.", "I last saw him at the weekend.", "No wonder the sky was so clear this morning.", "The weekend was sunny and warm."], a: 0 },
      { id: 'u-M-01-L1-04', spk: 'M', say: "The repair shop says fixing my laptop screen would cost more than a replacement.",
        opts: ["I'm sure the screen will look brighter after cleaning.", "You should have paid them before they fixed it.", "In that case, buying a new one might make more sense.", "Replacing the shop would take a lot of time."], a: 2 },
      { id: 'u-M-01-L1-05', spk: 'F', say: "Did the interviewer tell you when you'd hear back from them?",
        opts: ["I told them I'd be back from my trip on Monday.", "Within two weeks, once they've met all the candidates.", "I heard the interview room was on the third floor.", "Yes, they asked me why I wanted to leave my last job."], a: 1 },
      { id: 'u-M-01-L1-06', spk: 'M', say: "Look, there's a cat stuck on the roof of the bike shed again.",
        opts: ["Let's not scare it. It'll probably find its own way down.", "The bike shed is locked after nine at night.", "I'd prefer a dog because cats are harder to train.", "Again? I fixed the roof only last month."], a: 0 },
      { id: 'u-M-01-L1-07', spk: 'F', say: "Our building manager wants everyone to move their bikes out of the corridor by Friday.",
        opts: ["I'll ask the manager for a bigger office.", "Friday is the best day to ride to the beach.", "The corridor lights were fixed last Friday.", "Fine, but where are we supposed to keep them?"], a: 3 },
      { id: 'u-M-01-L1-08', spk: 'M', say: "I'm afraid the dish you ordered is unavailable tonight.",
        opts: ["I'm afraid of spicy food, too.", "Tonight is fine. What time is it available?", "Oh, that's a pity. What would you recommend instead?", "Then I'd like to order it again tomorrow night."], a: 2 },
      { id: 'u-M-01-L1-09', spk: 'F', say: "You've been with your company for ten years. Why are you looking for a new position?",
        opts: ["I'm ready for a challenge that my current job can't offer.", "I'll be looking at the position of the desk.", "Ten years ago I was still a student.", "The company moved to a new building last year."], a: 0 },
      { id: 'u-M-01-L1-10', spk: 'M', say: "The forecast says it'll be cloudy in the morning, but clearing up after lunch.",
        opts: ["Then lunch should be cleared away by noon.", "Good. Let's dry the laundry outside in the afternoon, then.", "I'd prefer a sunny morning to a cloudy one.", "The cloud service saved all my photos."], a: 1 }
    ] },
    L2: { items: [
      { id: 'u-M-01-L2-g1',
        lines: [
          ['F', "I've narrowed the movers down to four. Which one do you think we should go with?"],
          ['M', "Well, we have to be out of this apartment by March 5, so anything later than that is out."],
          ['F', "Right. And with both of us working full-time, I really don't want to pack everything ourselves."],
          ['M', "Agreed. Then it's between the two that are left. Let's take the more affordable one."],
          ['F', "Fine by me. I'll call them this afternoon and ask whether they can provide cardboard boxes, too."]
        ],
        chart: { cap: 'Moving Company Quotes', head: ['Company', 'Price', 'Packing Service', 'Earliest Date'],
          rows: [['Hilltop', 'NT$12,000', 'Yes', 'March 3'], ['Greenway', 'NT$9,500', 'No', 'March 3'], ['Oakwood', 'NT$11,000', 'Yes', 'March 10'], ['Sunfield', 'NT$14,500', 'Yes', 'March 1']] },
        qs: [
          { id: 'u-M-01-L2-01', q: 'Look at the chart. Which company will the speakers most likely choose?',
            opts: ['Sunfield', 'Greenway', 'Hilltop', 'Oakwood'], a: 2 },
          { id: 'u-M-01-L2-02', q: 'Why does the woman want a packing service?',
            opts: ['They both have full-time jobs and little free time.', 'They do not have enough boxes for all their things.', 'Their building does not allow packing in the corridors.', 'The man hurt his back during their last move.'], a: 0 }
        ] },
      { id: 'u-M-01-L2-g2',
        lines: [
          ['M', "Hello, this is Kevin Wu. I booked a table for six this Saturday at seven, for my mother's birthday."],
          ['F', "Yes, Mr. Wu, I have it here. How can I help?"],
          ['M', "Two more relatives have decided to join us. Is there any chance you could fit eight?"],
          ['F', "Our tables by the window only seat six, but the private room upstairs holds up to ten. There's a minimum charge of NT$8,000, though."],
          ['M', "Hmm, with eight people we'd probably spend that anyway. Let's do it."],
          ['F', "Great. I'll just need a deposit of NT$1,000 by Thursday to hold the room."]
        ],
        qs: [
          { id: 'u-M-01-L2-03', q: 'Why is the man calling the restaurant?',
            opts: ['To cancel his booking because of a family emergency', 'To ask whether the restaurant can bake a birthday cake', 'To move his dinner from Saturday to another night', 'To change the number of people in his group'], a: 3 },
          { id: 'u-M-01-L2-04', q: 'What does the man suggest about the minimum charge?',
            opts: ['He thinks it is too high and wants a discount.', 'He expects his group to reach it without trouble.', 'He will pay it on Thursday together with the deposit.', 'He does not understand what the woman means by it.'], a: 1 }
        ] },
      { id: 'u-M-01-L2-g3',
        lines: [
          ['F', "Hi, my washing machine stopped draining water this morning. It's only eight months old."],
          ['M', "Then it's still under the one-year warranty, so any parts will be free. Can you bring the machine to our service center?"],
          ['F', "Not really. It's far too heavy, and I don't have a car."],
          ['M', "I understand. We can send a technician to your home, or we can pick the machine up and return it after the repair."],
          ['F', "I'd rather not be without it for a whole week. My kids make a lot of laundry. But I don't want to pay double just to save a day or two, either."],
          ['M', "All right. I'll book that for you now."]
        ],
        chart: { cap: 'Service Options', head: ['Option', 'Visit Fee', 'Parts', 'Waiting Time'],
          rows: [['Home visit', 'NT$600', 'Free under warranty', '3 to 5 days'], ['Express home visit', 'NT$1,200', 'Free under warranty', 'Next day'], ['Drop-off at service center', 'Free', 'Free under warranty', '7 to 10 days'], ['Pick up and return', 'NT$900', 'Free under warranty', '5 to 7 days']] },
        qs: [
          { id: 'u-M-01-L2-05', q: 'Look at the chart. How much will the woman pay for the visit?',
            opts: ['Nothing', 'NT$900', 'NT$600', 'NT$1,200'], a: 2 },
          { id: 'u-M-01-L2-06', q: "What is wrong with the woman's washing machine?",
            opts: ['It makes a loud noise when it spins.', 'It will not turn on at all.', 'It leaks water onto the floor.', 'It does not let the water out.'], a: 3 }
        ] },
      { id: 'u-M-01-L2-g4',
        lines: [
          ['F', "Hello, may I speak to Jason Lin? This is Linda Chen from the hotel's human resources department."],
          ['M', "Speaking. Thanks for calling. Is this about the front desk position I interviewed for?"],
          ['F', "Yes. Our manager was impressed with you, and you're one of three candidates we'd like to invite for a second interview next Tuesday at ten."],
          ['M', "That's great news. Tuesday morning is a little difficult, though, since I'm still at my current job. Would the afternoon be possible?"],
          ['F', "Let me see. Two o'clock is open. This time you'll also be asked to deal with a guest in a short role-play, so be prepared."],
          ['M', "Two o'clock works perfectly. I'll be there."]
        ],
        qs: [
          { id: 'u-M-01-L2-07', q: 'Why does the man ask to change the time?',
            opts: ['He cannot leave his current job in the morning.', 'He has another interview on Tuesday morning.', 'He lives too far away to arrive by ten.', 'He wants more time to prepare for the role-play.'], a: 0 },
          { id: 'u-M-01-L2-08', q: 'What will the man be asked to do at the second interview?',
            opts: ['Meet his future colleagues at the front desk', 'Show how he would handle a guest', 'Bring a letter from his current manager', 'Take a written test about the hotel'], a: 1 }
        ] },
      { id: 'u-M-01-L2-g5',
        lines: [
          ['M', "The typhoon is supposed to hit tomorrow night. Should we go and buy some food today?"],
          ['F', "Yes, but let's not buy too much like last time. We threw away half the vegetables."],
          ['M', "Fair enough. What about the balcony? The wind could knock those flower pots over."],
          ['F', "Let's bring them inside tonight. And can you check that the flashlight works? The power went out for six hours during the last storm."],
          ['M', "I'll pick up some spare batteries on the way. Do we need to tape the windows?"],
          ['F', "The building manager says it doesn't really help. Just close them tightly and keep the curtains shut."]
        ],
        qs: [
          { id: 'u-M-01-L2-09', q: 'What happened during the last storm?',
            opts: ['Their windows were broken by the wind.', 'Their flower pots were blown off the balcony.', 'They could not buy any vegetables.', 'They lost electricity for several hours.'], a: 3 },
          { id: 'u-M-01-L2-10', q: 'What does the woman suggest about buying food?',
            opts: ['They should buy twice as much as last time.', 'They should wait until after the typhoon.', 'They should avoid buying more than they need.', 'They should only buy food in cans this time.'], a: 2 }
        ] },
      { id: 'u-M-01-L2-g6',
        lines: [
          ['F', "Come and look. There's a bird on the ground under our window. I think it flew into the glass."],
          ['M', "Poor thing. It's not moving much. Should we pick it up and give it some water?"],
          ['F', "I read that you shouldn't give water to an injured bird. It can choke."],
          ['M', "Then what should we do? We can't just leave it there with the neighbor's cat around."],
          ['F', "Let's put it gently in a cardboard box with a few air holes and keep it somewhere dark and quiet. Then I'll call the wildlife rescue center."],
          ['M', "Good idea. I'll find a box. Maybe we should put some stickers on that window, too."]
        ],
        qs: [
          { id: 'u-M-01-L2-11', q: 'Why does the man not want to leave the bird where it is?',
            opts: ['A cat might find it and attack it.', 'It might fly into the window again.', 'The neighbor might complain about it.', 'It might get too cold outside at night.'], a: 0 },
          { id: 'u-M-01-L2-12', q: 'What does the man suggest at the end?',
            opts: ['Moving the box closer to the window', 'Making the window easier for birds to see', 'Asking the neighbor to keep the cat inside', 'Giving the bird a little water first'], a: 1 }
        ] },
      { id: 'u-M-01-L2-g7',
        lines: [
          ['M', "There's a brown stain on our bathroom ceiling, and it's getting bigger. I think water is leaking from the apartment upstairs."],
          ['F', "Have you talked to Mrs. Huang about it?"],
          ['M', "I knocked twice, but nobody answered. I'm worried the ceiling will get damaged if we wait."],
          ['F', "I'm sure she'd want to know. Why don't you leave a note on her door with our phone number, and also tell the building office? They can send a plumber if needed."],
          ['M', "You're right. I'll do both before lunch."]
        ],
        qs: [
          { id: 'u-M-01-L2-13', q: 'What will the man probably do next?',
            opts: ['Repair the bathroom ceiling by himself', 'Ask a plumber to check the pipes upstairs', "Knock on Mrs. Huang's door again", 'Contact his neighbor and the building office'], a: 3 }
        ] },
      { id: 'u-M-01-L2-g8',
        lines: [
          ['F', "Hi, I just picked up an order from your restaurant, but when I got home, I found chicken noodles instead of the vegetable rice I ordered."],
          ['M', "I'm very sorry. That's our mistake, and it's unacceptable. Do you still have your receipt?"],
          ['F', "Yes. I'm a vegetarian, so I can't eat this at all, and I'd rather not drive all the way back."],
          ['M', "I understand. I'll give you a full refund right away, and next time you order, there'll be a free dessert on us."],
          ['F', "That's very kind. Thank you."]
        ],
        qs: [
          { id: 'u-M-01-L2-14', q: 'How does the restaurant solve the problem?',
            opts: ['By delivering the correct dish to her home', 'By asking her to bring the noodles back', 'By returning her money and offering a free item later', 'By replacing the noodles with a bigger meal'], a: 2 }
        ] },
      { id: 'u-M-01-L2-g9',
        lines: [
          ['M', "The zoo is running night tours this month. Do you think Sophie would enjoy one?"],
          ['F', "Definitely. But she's only seven, so we'll have to skip the ones with an age limit."],
          ['M', "That still leaves two. She's been crazy about owls ever since we read that book about the forest together."],
          ['F', "Then the choice is easy. The website says that tour fills up quickly, though."],
          ['M', "I'll book it online tonight, then."]
        ],
        chart: { cap: 'Night Tours at the Zoo', head: ['Tour', 'Start Time', 'Animals', 'Age Limit'],
          rows: [['Tour 1', '6:30 pm', 'Owls and bats', 'None'], ['Tour 2', '7:00 pm', 'Lions and tigers', 'Age 8 and up'], ['Tour 3', '7:30 pm', 'Bears and wolves', 'None'], ['Tour 4', '8:00 pm', 'Snakes and frogs', 'Age 10 and up']] },
        qs: [
          { id: 'u-M-01-L2-15', q: 'Look at the chart. Which tour will they most likely book?',
            opts: ['Tour 1', 'Tour 2', 'Tour 3', 'Tour 4'], a: 0 }
        ] }
    ] },
    L3: { items: [
      { id: 'u-M-01-L3-g1', intro: 'Listen to an announcement in an apartment building.', spk: 'F',
        say: "Good evening, residents. This is the management office. As some of you know, our two elevators are more than twenty years old, and they will be replaced over the next month. The work will be done one elevator at a time, so one will always be running. Please see the schedule posted in the lobby. During the work, the remaining elevator may be crowded in the morning, so we kindly ask residents on the second and third floors to use the stairs whenever possible and to hold the handrail. If you are planning to move furniture or other large items this month, please contact the office first. As a reminder, moving will only be allowed while the larger elevator, Elevator A, is in service. Finally, residents who have difficulty walking can ask our security staff for help at any time. Thank you for your patience.",
        chart: { cap: 'Elevator Work Schedule', head: ['Dates', 'Elevator A', 'Elevator B'],
          rows: [['November 3 to 14', 'Closed for work', 'In service'], ['November 17 to 28', 'In service', 'Closed for work'], ['December 1 to 5', 'Safety check', 'Safety check']] },
        qs: [
          { id: 'u-M-01-L3-01', q: 'Look at the chart. When can residents move large furniture?',
            opts: ['November 3 to 14', 'November 17 to 28', 'December 1 to 5', 'Any time this month'], a: 1 },
          { id: 'u-M-01-L3-02', q: 'Why is the office making this announcement?',
            opts: ['To ask residents to pay for new elevators', 'To explain why the stairs will be closed', 'To invite residents to a building meeting', 'To inform residents about elevator replacement work'], a: 3 },
          { id: 'u-M-01-L3-03', q: 'What are residents on the lower floors asked to do?',
            opts: ['Walk up and down instead of taking the elevator', 'Help older residents carry heavy items', 'Leave home earlier in the morning', 'Contact the office before using the elevator'], a: 0 }
        ] },
      { id: 'u-M-01-L3-g2', intro: 'Listen to a weather report.', spk: 'M',
        say: "Here is the weather for the coming week. A strong cold front will reach northern Taiwan on Wednesday afternoon, and temperatures are expected to drop quickly. By Thursday morning, lows in Taipei may fall to around 9 degrees, and mountain areas above 3,000 meters could see snow. The south will stay drier and a little warmer, with highs near 20 degrees. Along the northern and eastern coastline, strong winds will make the air feel even colder than the numbers suggest, so if you plan to spend time outdoors, dress in layers. Sudden changes in temperature can be hard on older people and those with heart problems, so please check on elderly family members and neighbors. If you use a gas heater indoors, keep a window slightly open. Light rain is also expected in the north, so a waterproof jacket is a good idea. The cold should ease from Saturday, and the weekend looks mostly sunny across the island.",
        qs: [
          { id: 'u-M-01-L3-04', q: 'When will the cold weather probably begin to improve?',
            opts: ['On Wednesday afternoon', 'On Thursday morning', 'On Saturday', 'Next Monday'], a: 2 },
          { id: 'u-M-01-L3-05', q: 'Why does the speaker mention the coastline?',
            opts: ['Snow is likely to fall there by Thursday.', 'Wind will make it feel colder than it really is.', 'It will be the warmest part of the island.', 'Boats should stay in the harbors this week.'], a: 1 },
          { id: 'u-M-01-L3-06', q: 'What advice does the speaker give about gas heaters?',
            opts: ['Turn them off before going to sleep', 'Use them only in the south', 'Have them checked by a technician', 'Let some fresh air into the room'], a: 3 }
        ] },
      { id: 'u-M-01-L3-g3', intro: 'Listen to a talk at a nature center.', spk: 'F',
        say: "Welcome to the turtle room. The young turtles you see in these tanks were all found on nearby beaches last summer. Several species of sea turtle visit our coastline, and the females return to the beach where they were born to lay their eggs. When the babies come out of their eggs at night, they find the sea by heading toward the brightest light. Unfortunately, lights from roads and houses often lead them the wrong way. Our staff walk the beaches every morning during the egg-laying season and bring lost babies here. We keep them for a few months until they are strong enough to survive, and then we release them. You can help, too. If you stay near the coastline in summer, turn off outdoor lights after dark, and please take your trash home. Plastic bags in the water look very similar to the soft sea animals that turtles love to eat. Now, before we visit the feeding area, does anyone have a question?",
        qs: [
          { id: 'u-M-01-L3-07', q: 'Why do some baby turtles go the wrong way?',
            opts: ['They are confused by lights on land.', 'They follow their mothers along the beach.', 'Strong waves push them back onto the sand.', 'They are frightened by people walking nearby.'], a: 0 },
          { id: 'u-M-01-L3-08', q: 'What does the speaker say about plastic bags?',
            opts: ['They are often used to carry baby turtles.', 'They make the beaches too bright at night.', 'Turtles may mistake them for food.', 'Visitors can buy them at the center.'], a: 2 },
          { id: 'u-M-01-L3-09', q: 'What will the listeners probably do next?',
            opts: ['Walk along the beach to look for eggs', 'Ask questions and then see the turtles being fed', 'Help release the turtles into the sea', 'Watch a film about turtles in the turtle room'], a: 1 }
        ] },
      { id: 'u-M-01-L3-g4', intro: 'Listen to a telephone message.', spk: 'M',
        say: "Hi, Sarah, this is Tony Kuo, the recruiter from Bright Path Job Services. I'm calling about the assistant manager position at the bakery chain we talked about last week. The good news is that they've read your resume and would like to meet you, and the salary is higher than at your current job. Before that, though, they've asked every candidate to fill out a short online form about their work experience and their availability on weekends, since the job sometimes includes Saturday shifts. I've just sent you the link by email. Please complete it by Friday, or your application may not move forward. Also, I noticed your resume doesn't mention the food safety certificate you told me about. If you have a copy, please attach it to the form. It could really make you stand out. Call me back if you have any questions. Talk soon.",
        qs: [
          { id: 'u-M-01-L3-10', q: 'What must the woman do by Friday?',
            opts: ['Call the bakery to arrange an interview', 'Send her resume to the speaker again', 'Work a Saturday shift at the bakery', 'Fill out a form on the internet'], a: 3 },
          { id: 'u-M-01-L3-11', q: 'Why does the recruiter mention the certificate?',
            opts: ['It may give her an advantage over other candidates.', 'It is required for all workers at the bakery.', 'He needs it before he can send her the link.', 'Her old certificate is no longer valid.'], a: 0 }
        ] },
      { id: 'u-M-01-L3-g5', intro: 'Listen to a recorded message.', spk: 'F',
        say: "Thank you for calling our customer service line. Our phones are busier than usual because of the holiday sale, and the current waiting time is about twenty minutes. If you are calling to return an item, you may not need to wait at all. Most products can be returned within thirty days, as long as they have not been used and are still in the original box. Simply log in to your account on our website, choose the item, and print the return label. If your product is damaged or not working and you would like a replacement, please have the order number and a photo of the problem ready before you speak to one of our staff. To hear these choices again, press 9. To stay on the line for the next available person, please hold.",
        qs: [
          { id: 'u-M-01-L3-12', q: 'Why is the waiting time longer than usual?',
            opts: ['Several staff members are on holiday.', 'The website is not working properly.', 'Many customers are calling during a sale.', 'The company is moving to a new office.'], a: 2 },
          { id: 'u-M-01-L3-13', q: 'What should callers with a broken product prepare?',
            opts: ['The original box and the return label', 'Their order number and a picture', 'A copy of their bank card', 'Their account password and address'], a: 1 }
        ] },
      { id: 'u-M-01-L3-g6', intro: 'Listen to a chef speaking on a radio program.', spk: 'M',
        say: "Every autumn, I rewrite about half of our menu. People sometimes ask why I bother, since our summer dishes sell so well. The answer is simple. I build the menu around seasonal vegetables. They taste best when they are in season, and they are also cheaper, which keeps our prices reasonable. This month, for example, we've added a pumpkin soup and a mushroom rice dish, both made with vegetables from farms less than an hour away. Of course, not every customer is happy about the change. A few regular customers still ask for the cold noodle salad, and honestly, I understand. So we've decided to keep it on the menu as a weekend special until the end of October. After that, it'll be gone until next summer, like any seasonal dish.",
        qs: [
          { id: 'u-M-01-L3-14', q: 'According to the chef, why does he change the menu?',
            opts: ['His customers get bored with the same dishes.', 'The farms nearby close in the summer.', 'His restaurant is too small for a long menu.', 'Seasonal vegetables taste better and cost less.'], a: 3 },
          { id: 'u-M-01-L3-15', q: "What does the chef mean when he says, 'honestly, I understand'?",
            opts: ['He sees why some customers miss an old dish.', 'He agrees that the new soup is too expensive.', 'He knows his staff do not like the changes.', 'He thinks the noodle salad is not very popular.'], a: 0 }
        ] }
    ] },
    R1: { items: [
      { id: 'u-M-01-R1-01', s: 'Before you sign the lease, make sure you know how much of the ___ will be returned when you move out.',
        opts: ['income', 'profit', 'salary', 'deposit'], a: 3 },
      { id: 'u-M-01-R1-02', s: 'The restaurant was fully booked, so we put our names on a waiting ___ and hoped someone would cancel.',
        opts: ['menu', 'list', 'bill', 'sign'], a: 1 },
      { id: 'u-M-01-R1-03', s: 'The technician said the problem was not ___ by the customer, so the repair would be covered by the warranty.',
        opts: ['repaired', 'delivered', 'caused', 'ordered'], a: 2 },
      { id: 'u-M-01-R1-04', s: 'Many animals in the area have lost their natural ___ because forests were cleared to build new roads.',
        opts: ['habitat', 'harvest', 'pattern', 'climate'], a: 0 },
      { id: 'u-M-01-R1-05', s: 'Thanks to the new ___ heating system, our electricity bill this winter was much lower than last year.',
        opts: ['expensive', 'temporary', 'previous', 'efficient'], a: 3 },
      { id: 'u-M-01-R1-06', s: 'Applicants who meet all the ___ listed in the job ad will be contacted for an interview within a week.',
        opts: ['instructions', 'directions', 'qualifications', 'suggestions'], a: 2 },
      { id: 'u-M-01-R1-07', s: 'Because of the heavy snow, the mountain road will remain closed until ___ notice.',
        opts: ['next', 'further', 'later', 'more'], a: 1 },
      { id: 'u-M-01-R1-08', s: 'Residents are reminded that bikes may not be left in ___ areas of the building, such as the lobby and corridors.',
        opts: ['public', 'private', 'personal', 'individual'], a: 0 },
      { id: 'u-M-01-R1-09', s: 'The new coffee machine stopped working after a week, so I took it back to the store and asked for a ___.',
        opts: ['receipt', 'discount', 'replacement', 'reward'], a: 2 },
      { id: 'u-M-01-R1-10', s: 'Weather experts ___ that this summer will be hotter than usual, so the city is opening more cooling centers.',
        opts: ['remind', 'admit', 'attract', 'predict'], a: 3 }
    ] },
    R2: { items: [
      { id: 'u-M-01-R2-g1', title: 'Before You Rent an Apartment',
        text: "Looking for a rental apartment can be exciting, but signing a lease too quickly is one of the most common mistakes renters make. Before you agree to anything, visit the place at least twice, once during the day and once in the evening. [1] A street that seems quiet at noon may be full of noise from food stands and traffic after dark.\nNext, check the condition of everything inside. Turn on the taps, check the toilet, and open every window. If something is broken, ask the owner to fix it [2] you move in, and get the promise in writing. It is also wise to take photos of any existing damage, [3] marks on the floor or stains on the walls. These photos can protect you when it is time to get your deposit back.\nFinally, read the lease carefully. Some leases include rules about guests, pets, or cooking, and breaking them can lead to extra [4]. If any part of the agreement is unclear, do not be [5] to ask questions. A good owner will be happy to explain, and one who refuses may not be someone you want to rent from.",
        qs: [
          { id: 'u-M-01-R2-01', opts: ['Most owners prefer renters who have pets.', 'This allows you to see how the neighborhood changes over time.', 'It is always cheaper to rent an apartment in the evening.', 'You should also bring a friend who knows how to cook.'], a: 1 },
          { id: 'u-M-01-R2-02', opts: ['before', 'unless', 'although', 'since'], a: 0 },
          { id: 'u-M-01-R2-03', opts: ['as well as', 'instead of', 'in spite of', 'such as'], a: 3 },
          { id: 'u-M-01-R2-04', opts: ['benefits', 'discounts', 'charges', 'rewards'], a: 2 },
          { id: 'u-M-01-R2-05', opts: ['afraid', 'proud', 'eager', 'likely'], a: 0 }
        ] },
      { id: 'u-M-01-R2-g2', title: 'A Busy Season at the Wetland',
        text: "Every year from October to March, thousands of birds stop at the wetland near the river mouth on their long migration south. For many of them, it is the only place to rest and find food [1] their trip from colder northern countries.\nIn recent years, the number of people coming to watch the birds has grown quickly. This is good news for local shops and restaurants, [2]. Large groups of visitors, especially those who walk too close or make loud noises, can frighten the birds away from their feeding areas.\nTo [3] the birds, the local government has built three wooden watching towers and asked visitors to stay on marked paths. Dogs are no longer allowed on the paths [4] the winter months. Some visitors have complained that these restrictions are too strict, but the results speak for themselves. Last winter, more bird species were recorded at the wetland than at any time in the past ten years. [5]",
        qs: [
          { id: 'u-M-01-R2-06', opts: ['beyond', 'against', 'toward', 'during'], a: 3 },
          { id: 'u-M-01-R2-07', opts: ['and the birds have also become more relaxed', 'but it has also created some problems', 'because most visitors arrive by bus', 'so the wetland will soon be closed'], a: 1 },
          { id: 'u-M-01-R2-08', opts: ['attract', 'feed', 'protect', 'count'], a: 2 },
          { id: 'u-M-01-R2-09', opts: ['throughout', 'beside', 'among', 'across'], a: 0 },
          { id: 'u-M-01-R2-10', opts: ['The towers will be taken down next year.', 'It seems that birds and people can share the space after all.', 'Most visitors now prefer to watch birds online.', 'Even so, fewer birds are expected to come back.'], a: 1 }
        ] }
    ] },
    R3: { items: [
      { id: 'u-M-01-R3-g1',
        texts: [
          { type: 'ad', title: 'Now Hiring: Assistant Animal Keeper',
            body: "Greenhill Wildlife Park is looking for an assistant animal keeper to join our small animals team. The successful applicant will help prepare food, clean animal areas, keep daily records of each animal's health and behavior, and answer visitors' questions during our afternoon talks.\nQualifications:\n- At least one year of experience working with animals (experience at a farm, shelter, or animal hospital is acceptable)\n- Good physical health; the job involves lifting bags of up to 20 kilograms\n- Willingness to work weekends and public holidays on a changing schedule\nA degree in biology or a related subject is an advantage but not required.\nThis is a full-time position with a six-month trial period. The starting salary is NT$36,000 a month and increases after the trial period. Employees are also eligible for free entry for up to four family members.\nTo apply, send your resume and a short letter explaining why you want this job through the park's website by May 15. Only applicants chosen for an interview will be contacted." },
          { type: 'email', from: 'Emily Chang', to: 'Greenhill Wildlife Park', title: 'Application: Assistant Animal Keeper',
            body: "Dear Hiring Manager,\nI am writing to apply for the assistant animal keeper position advertised on your website. For the past two years, I have worked at an animal shelter in Taichung, where I feed and care for around forty dogs and cats. I also help new owners learn how to look after the animals they adopt, so I am comfortable speaking to groups of people.\nAlthough I do not have a university degree, I recently received a certificate from an evening course in basic animal care, and I am planning to continue studying part-time.\nI should mention that I am currently caring for my grandmother on Sunday mornings. I would be glad to work Saturdays and holidays, and I am flexible enough to arrange help for her if the schedule requires it.\nI have visited Greenhill many times since I was a child, and watching the keepers there is what first made me want to work with animals. I have attached my resume and would welcome the chance to meet you.\nSincerely,\nEmily Chang" }
        ],
        qs: [
          { id: 'u-M-01-R3-01', q: 'What is one of the duties of the job?',
            opts: ['Training dogs and cats for new owners', 'Teaching biology classes to visiting students', "Recording information about the animals' condition", 'Selling tickets at the park entrance'], a: 2 },
          { id: 'u-M-01-R3-02', q: "What might worry the employer about Emily's application?",
            opts: ['She may not always be free on Sundays.', 'She has less than one year of experience with animals.', 'She has never visited the park before.', 'She does not want to speak to visitors.'], a: 0 },
          { id: 'u-M-01-R3-03', q: 'What does the ad say about a university degree?',
            opts: ['Applicants without one will receive lower pay.', 'It must be finished before the trial period ends.', 'It must be in biology and nothing else.', 'It would help but is not necessary for the job.'], a: 3 },
          { id: 'u-M-01-R3-04', q: "In the email, the word 'adopt' is closest in meaning to",
            opts: ['sell to other people', 'take home as their own', 'give medicine to', 'feed for the first time'], a: 1 },
          { id: 'u-M-01-R3-05', q: 'What can be learned about Emily?',
            opts: ['She works full-time at an animal hospital.', 'She lives very close to the wildlife park.', 'Her interest in this kind of work began at the park itself.', 'She has cared for small animals on a farm.'], a: 2 }
        ] },
      { id: 'u-M-01-R3-g2',
        texts: [
          { type: 'notice', title: 'Get Your Air Conditioner Ready for Summer',
            body: "Is your air conditioner making strange noises, or does the air smell bad when you turn it on? Dust and mold build up inside the unit over the winter, which makes it work harder, use more electricity, and blow dirty air into your home. Our trained technicians can clean and check your unit in about an hour.\nBook before April 30 to receive 15% off any service. Customers who book two or more units at the same address receive an additional NT$300 off the total. Please note that these two discounts cannot be combined with our Member Card price.\nAll services come with a 90-day guarantee. If the same problem returns within that time, we will fix it at no extra cost. Units older than ten years may need parts that the manufacturer no longer makes. In this case, our technician will explain your options before doing any work. Payment can be made in cash or by card when the work is finished." },
          { type: 'table', title: 'Service Prices (per unit)',
            table: { head: ['Service', 'What Is Included', 'Price'],
              rows: [['Basic Clean', 'Filter wash and outside cleaning', 'NT$1,200'], ['Deep Clean', 'Basic Clean, plus inside parts taken apart and washed', 'NT$2,500'], ['Deep Clean Plus', 'Deep Clean, plus a gas check and more gas if needed', 'NT$3,400'], ['Safety Check Only', 'Electrical and gas check, no cleaning', 'NT$800']] } }
        ],
        qs: [
          { id: 'u-M-01-R3-06', q: 'According to the notice, what happens when an air conditioner is dirty?',
            opts: ['It becomes louder only when the weather is hot.', 'It needs more power to keep a room cool.', 'It stops working completely after one winter.', 'It must be replaced within ten years.'], a: 1 },
          { id: 'u-M-01-R3-07', q: 'Mr. Lee is not a member. He books a Deep Clean for two units at his home on April 20. How much will he pay?',
            opts: ['NT$5,000', 'NT$4,700', 'NT$4,250', 'NT$3,950'], a: 3 },
          { id: 'u-M-01-R3-08', q: 'What is true about the Deep Clean Plus service?',
            opts: ['It includes everything in the Basic Clean.', 'It is the only service with a guarantee.', 'It costs NT$3,400 for two units.', 'It does not include a check of the gas.'], a: 0 },
          { id: 'u-M-01-R3-09', q: 'What will a technician do with a very old unit?',
            opts: ['Refuse to clean it under any condition', 'Replace it with a new unit for free', 'Discuss possible choices with the owner first', 'Charge the owner extra for the guarantee'], a: 2 },
          { id: 'u-M-01-R3-10', q: 'What is the main purpose of the notice?',
            opts: ['To explain how customers can clean their own units', 'To announce that the company will close in April', 'To warn customers about dangerous air conditioners', 'To encourage customers to book a service early'], a: 3 }
        ] },
      { id: 'u-M-01-R3-g3',
        texts: [
          { type: 'notice', title: "Minutes: Residents' Committee Meeting, March 12",
            body: "Present: seven committee members and twelve residents. Chair: Mrs. Wang.\n1. Package room. Since online shopping has increased, the package room on the ground floor is often packed, and some packages have been left in the lobby. Mr. Chen suggested buying smart lockers that send a text message when a package arrives. The cost would be around NT$180,000. Several residents agreed it was a good idea but felt the price was too high. Decision: The office will ask two more companies for prices and make the issue a priority and report at the next meeting.\n2. Roof garden. Residents who use the roof garden asked for a water tap to be put in, since carrying water up the stairs is tiring. The committee agreed. Work will begin in April and will be paid for from the repair fund, so no extra payment will be needed from residents.\n3. Noise. There were four complaints last month about loud music late at night that could be heard in the corridors. The committee reminded everyone that quiet hours are from 10 pm to 7 am. Rather than naming any household, the office will post a general reminder in the elevators.\n4. Next meeting: April 9, 7:30 pm, in the community room. Residents are welcome to attend, but anyone who wishes to raise a new issue should tell the office at least one week before." }
        ],
        qs: [
          { id: 'u-M-01-R3-11', q: 'What was decided about the package problem?',
            opts: ['More information will be collected before a final choice.', 'Residents will pay NT$180,000 to buy lockers.', 'Packages will be kept in the lobby from now on.', 'Mr. Chen will order smart lockers next week.'], a: 0 },
          { id: 'u-M-01-R3-12', q: 'Why did residents ask for a water tap on the roof?',
            opts: ['The garden plants were dying from the heat.', 'Water from the repair fund was running out.', 'Bringing water up by hand was hard work.', 'The committee needed it for the April repairs.'], a: 2 },
          { id: 'u-M-01-R3-13', q: 'How will the office handle the noise complaints?',
            opts: ['By speaking directly to the families involved', 'By putting up a notice that does not name anyone', 'By changing the quiet hours to start earlier', 'By charging the noisy household a fine'], a: 1 },
          { id: 'u-M-01-R3-14', q: 'A resident wants to discuss a new topic at the next meeting. What should she do?',
            opts: ['Arrive at the community room by 7:30 pm', 'Join the committee before the meeting', 'Write a letter to Mrs. Wang directly', 'Tell the office by April 2'], a: 3 },
          { id: 'u-M-01-R3-15', q: 'Which of the following was NOT discussed at the meeting?',
            opts: ['Where packages should be stored', 'How much residents pay each month for cleaning', 'When residents should keep quiet', 'How the roof garden gets water'], a: 1 }
        ] },
      { id: 'u-M-01-R3-g4',
        texts: [
          { type: 'article', title: 'Living with the Plum Rain',
            body: "Every year between May and June, warm, wet air from the south meets cooler air from the north and stays over Taiwan for weeks. The result is the plum rain season, named after the fruit that becomes ripe at the same time. For farmers, the rain is welcome, since it fills the lakes and dams that supply much of the island's water during the dry months that follow. For people at home, however, it often means one thing: mold.\nMold grows when indoor humidity stays above about 70 percent. During the plum rain season, it can easily reach 90 percent, and black stains begin to appear on walls, shoes, and even leather bags, while laundry takes days to dry. Apart from looking unpleasant, mold can cause sneezing and breathing problems, especially for children and people who are sensitive to dust.\nMany families respond by keeping their windows shut and running a machine that dries the air all day. This works, but it is not always efficient. Experts point out that such a machine in a room with open doors is trying to dry the whole house. It works better to close the door of one room at a time and empty the water tank regularly.\nThere are also simple, low-cost habits that help. Leaving closet doors slightly open lets air move around clothes. Putting newspaper inside shoes absorbs water from the air overnight. On the rare days when the sun comes out, opening windows on both sides of the home for even half an hour can lower humidity noticeably.\nThe plum rain will never be anyone's favorite time of year. But with a little planning, it does not have to mean throwing away a favorite pair of shoes." }
        ],
        qs: [
          { id: 'u-M-01-R3-16', q: 'Why is the season called the plum rain?',
            opts: ['The drops of rain are usually as large as plums.', 'Farmers plant plum trees when it begins.', 'The rain helps plums grow larger.', 'It happens when plums become ready to eat.'], a: 3 },
          { id: 'u-M-01-R3-17', q: 'According to the article, what is one benefit of the plum rain?',
            opts: ['It makes indoor air less wet.', 'It stores water for the dry months.', 'It lowers the temperature in summer.', 'It reduces breathing problems in children.'], a: 1 },
          { id: 'u-M-01-R3-18', q: 'What do experts say about machines that dry the air?',
            opts: ['They should be turned off when people are home.', 'They are too expensive for most families.', 'They work best in a room with the door closed.', 'They should be used only after the rain stops.'], a: 2 },
          { id: 'u-M-01-R3-19', q: "In the fourth paragraph, the word 'absorbs' is closest in meaning to",
            opts: ['takes in', 'gives off', 'covers up', 'breaks down'], a: 0 },
          { id: 'u-M-01-R3-20', q: "What is the writer's attitude toward the plum rain season?",
            opts: ['It is a dangerous time that families should fear.', 'It is pleasant as long as people stay indoors.', 'It is unpleasant but can be managed.', 'It is no longer a problem thanks to new machines.'], a: 2 }
        ] }
    ] }
  }
});
