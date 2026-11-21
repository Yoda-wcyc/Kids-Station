/* u-M-02 中高級模擬考 第 2 份（第二階段作者 A，2026-11-21）題材：L1 1 資源回收日改期；2 夏天電費暴增；3 網購包裹收到別人的；4 藥要飯後吃；5 商店點數月底到期；6 週六淨灘邀約；7 牙醫半年洗牙；8 屋頂裝太陽能板；9 新手機缺料延後出貨；10 社區捐血車；L2 g1 選購省電冰箱；g2 長者送餐志工排班；g3 健檢血糖偏高；g4 手機門市換資費方案；g5 空地改建公園徵求意見；g6 預約流感疫苗；g7 電動機車換電還是在家充；g8 網購牛仔褲尺寸偏小；g9 膝蓋復健診所太遠；L3 g1 垃圾分類新收運時間；g2 醫院門診新報到叫號系統；g3 百貨週年慶廣播；g4 社區防震演練號召志工；g5 廣播節目夏季省電；g6 藥局領藥語音留言；R2 g1 綠屋頂降溫；g2 螢幕時代護眼；R3 g1 大樓屋頂太陽能提案＋住戶來信；g2 診所春節門診時間（表格）；g3 免費試用自動續訂的消費報導；g4 社區工具圖書館 */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'u-M-02',
  title: '中高級模擬考 2',
  names: ['Elm'],
  extra: ['app'],
  parts: {
    L1: { items: [
      { id: 'u-M-02-L1-01', spk: 'F', say: "The city is changing recycling day from Tuesday to Thursday starting next month.",
        opts: ["I recycled my old phone last month.", "Tuesday is the best day for me to go shopping.", "Thanks for telling me. I'll put a note on the fridge.", "The city hall is closed on Thursdays."], a: 2 },
      { id: 'u-M-02-L1-02', spk: 'M', say: "Our electricity bill nearly doubled this summer, even though we were away for two weeks.",
        opts: ["Maybe the old fridge is using more power than it should.", "We were away for two weeks last summer, too.", "The bill was paid on time, I believe.", "Summer is my favorite season for traveling."], a: 0 },
      { id: 'u-M-02-L1-03', spk: 'F', say: "The package I ordered online finally arrived, but it's somebody else's order.",
        opts: ["Then you'll have to wait for somebody to arrive.", "I usually order my clothes online, too.", "It arrived earlier than I expected.", "You should contact the seller and arrange to send it back."], a: 3 },
      { id: 'u-M-02-L1-04', spk: 'M', say: "The pharmacist said I should take this medicine after meals, not on an empty stomach.",
        opts: ["I'll find you an empty box for it.", "Then let's have lunch first, before you take it.", "The pharmacy opens after nine.", "I never eat meals by myself."], a: 1 },
      { id: 'u-M-02-L1-05', spk: 'F', say: "My store points can only be used until the end of the month, and I still have quite a lot.",
        opts: ["Then why not use them on something you need anyway?", "The store is at the end of the street.", "I've been a member for about a month.", "A lot of people shop there on weekends."], a: 0 },
      { id: 'u-M-02-L1-06', spk: 'M', say: "A group of us are cleaning up the beach on Saturday morning. Would you like to come along?",
        opts: ["The beach was very crowded last Saturday.", "I'd love to. Should I bring my own gloves?", "I usually clean my room on Saturdays.", "It's a beautiful beach for swimming."], a: 1 },
      { id: 'u-M-02-L1-07', spk: 'F', say: "The dentist says I need a dental cleaning every six months.",
        opts: ["I cleaned the whole house in six hours.", "The dentist's office is next to the bank.", "That's pretty normal. It helps catch small problems early.", "Six months is too long to wait for a table."], a: 2 },
      { id: 'u-M-02-L1-08', spk: 'M', say: "We're thinking of putting solar panels on our roof, but I'm not sure it's worth the cost.",
        opts: ["Our roof was repaired after the typhoon.", "I'd ask a few neighbors who already have them.", "The sun sets at about six these days.", "It's worth visiting in the spring."], a: 1 },
      { id: 'u-M-02-L1-09', spk: 'F', say: "The phone I ordered last week won't be delivered until next month because of a shortage of parts.",
        opts: ["Next month is my birthday, too.", "I ordered the same dish last week.", "That's annoying. Can you cancel and get your money back?", "The parts were delivered to the factory yesterday."], a: 2 },
      { id: 'u-M-02-L1-10', spk: 'M', say: "The blood donation bus will be outside the community center all afternoon.",
        opts: ["I'll go after lunch. I haven't given blood in a year.", "The bus to the community center leaves at noon.", "I gave my old clothes away there last week.", "The community center closes in the afternoon."], a: 0 }
    ] },
    L2: { items: [
      { id: 'u-M-02-L2-g1',
        lines: [
          ['F', "We really need a new fridge. I've narrowed it down to these four models."],
          ['M', "The space in our kitchen is only 70 centimeters wide, so anything bigger won't fit."],
          ['F', "Good point. And since it runs all day, I'd like one that's cheap to run, even if it costs more at first."],
          ['M', "Makes sense. Over ten years, the savings on electricity will more than cover the difference."],
          ['F', "Then it's decided. I'll order it today and ask them to take away the old one when they deliver."]
        ],
        chart: { cap: 'Fridge Models', head: ['Model', 'Width', 'Price', 'Electricity Cost per Year'],
          rows: [['Model A', '68 centimeters', 'NT$22,000', 'NT$2,100'], ['Model B', '75 centimeters', 'NT$25,000', 'NT$1,600'], ['Model C', '65 centimeters', 'NT$27,500', 'NT$1,500'], ['Model D', '70 centimeters', 'NT$19,000', 'NT$3,200']] },
        qs: [
          { id: 'u-M-02-L2-01', q: "Look at the chart. Which fridge will the woman most likely order?", opts: ["Model A", "Model B", "Model C", "Model D"], a: 2 },
          { id: 'u-M-02-L2-02', q: "What does the man think about paying more at first?", opts: ["It is worth it because of lower bills later.", "They should wait for a sale instead.", "The old fridge can still be repaired.", "A bigger kitchen would be a better choice."], a: 0 }
        ] },
      { id: 'u-M-02-L2-g2',
        lines: [
          ['M', "Hi, I'm calling about volunteering for the lunch delivery program for older residents."],
          ['F', "Thank you! We deliver lunches every weekday. Do you have a car or a scooter?"],
          ['M', "A scooter. I work afternoons from Wednesday to Friday, so mornings early in the week are best for me."],
          ['F', "Then this shift would suit you. It still needs two more drivers."],
          ['M', "Great. Is there any training?"],
          ['F', "Yes, a one-hour session on handling food safely. After that, you can start."]
        ],
        chart: { cap: 'Volunteer Shifts', head: ['Shift', 'Day', 'Time', 'Drivers Needed'],
          rows: [['Shift 1', 'Monday', '10:00 to 12:00', '0'], ['Shift 2', 'Tuesday', '10:00 to 12:00', '2'], ['Shift 3', 'Wednesday', '10:00 to 12:00', '3'], ['Shift 4', 'Tuesday', '2:00 to 4:00', '1']] },
        qs: [
          { id: 'u-M-02-L2-03', q: "Look at the chart. Which shift will the man most likely take?", opts: ["Shift 1", "Shift 2", "Shift 3", "Shift 4"], a: 1 },
          { id: 'u-M-02-L2-04', q: "What must the man do before he starts?", opts: ["Buy a car for the deliveries", "Cook lunches for the residents", "Work three afternoons a week", "Attend a short training session"], a: 3 }
        ] },
      { id: 'u-M-02-L2-g3',
        lines: [
          ['F', "Dr. Lin, my health check results came back, and it says my blood sugar is a bit high. Should I be worried?"],
          ['M', "It's slightly above normal, but it's not dangerous yet. Still, it's a warning sign, especially since your father had the same problem."],
          ['F', "So do I need medicine?"],
          ['M', "Not at this stage. Cut down on sweet drinks and try to walk thirty minutes a day. We'll test you again in three months."],
          ['F', "I think I can handle that. I do drink a lot of bubble tea."]
        ],
        qs: [
          { id: 'u-M-02-L2-05', q: "Why does the doctor say the result is a warning sign?", opts: ["The woman has been taking the wrong medicine.", "A family member had a similar problem.", "The woman walks too much every day.", "The test was done three months ago."], a: 1 },
          { id: 'u-M-02-L2-06', q: "What does the woman mean when she says, 'I think I can handle that'?", opts: ["She thinks she can follow the advice.", "She wants the doctor to plan her meals.", "She is too busy to exercise.", "She would prefer to take medicine."], a: 0 }
        ] },
      { id: 'u-M-02-L2-g4',
        lines: [
          ['M', "Hi, my phone contract ends next month, and I'm thinking of switching plans."],
          ['F', "Sure. How much data do you usually use?"],
          ['M', "Not much at home, since I use the internet connection there. But I travel for work a lot, and I always run out on the road."],
          ['F', "Then I'd suggest our unlimited plan. It's NT$200 more a month, but you won't need to buy extra data anymore."],
          ['M', "Hmm. Let me check how much I spent on extra data last year before I decide."]
        ],
        qs: [
          { id: 'u-M-02-L2-07', q: "Why is the man thinking of changing his plan?", opts: ["His phone is broken.", "His home internet is too slow.", "He wants a cheaper contract.", "He often uses up his data while traveling."], a: 3 },
          { id: 'u-M-02-L2-08', q: "What is the man going to do first?", opts: ["Sign up for the unlimited plan right away", "Buy a new phone from the store", "Look at how much he paid for data before", "Cancel his home internet"], a: 2 }
        ] },
      { id: 'u-M-02-L2-g5',
        lines: [
          ['F', "Did you see the notice? The city wants to turn the empty lot next to our building into a park."],
          ['M', "Yes, and they're asking residents what we'd like to see there. I'm going to suggest more trees. That corner gets so hot in summer."],
          ['F', "Good idea. I'd also like a small play area. There's nowhere around here for kids to play safely."],
          ['M', "Then let's go to the meeting together on Thursday night. They'll pay more attention if several of us say the same thing."]
        ],
        qs: [
          { id: 'u-M-02-L2-09', q: "What is the man's main reason for wanting more trees?", opts: ["To give the area more shade", "To attract more birds", "To hide the empty lot", "To reduce noise from the road"], a: 0 },
          { id: 'u-M-02-L2-10', q: "What does the man suggest they do?", opts: ["Write a notice for the residents", "Build a play area themselves", "Attend a meeting as a group", "Plant trees on Thursday night"], a: 2 }
        ] },
      { id: 'u-M-02-L2-g6',
        lines: [
          ['M', "Hi, I'd like to make an appointment for a flu vaccine."],
          ['F', "Of course. Are you over sixty-five? If so, you're eligible for a free one."],
          ['M', "No, I'm forty-two. How much is it, then?"],
          ['F', "It's NT$500. We have openings this Saturday morning, or you can come without an appointment on weekday evenings, though you might have to wait."],
          ['M', "I'd rather not wait. Saturday at ten, please."],
          ['F', "All right. Please avoid hard exercise on the day you get it, and call us if you develop a high fever."]
        ],
        qs: [
          { id: 'u-M-02-L2-11', q: "Why does the man have to pay for the vaccine?", opts: ["He is not old enough to get it free.", "He made the appointment too late.", "He will come on a Saturday.", "He does not have an appointment."], a: 0 },
          { id: 'u-M-02-L2-12', q: "What does the woman advise the man to do?", opts: ["Come in on a weekday evening", "Exercise before the appointment", "Avoid hard exercise that day", "Bring NT$500 in cash"], a: 2 }
        ] },
      { id: 'u-M-02-L2-g7',
        lines: [
          ['F', "I'm finally replacing my old scooter with an electric one. But I can't decide between one that changes batteries at a station and one I charge at home."],
          ['M', "We live on the fifth floor with no parking space, so charging at home isn't really possible, is it?"],
          ['F', "True. And there's a battery station just around the corner."],
          ['M', "Then the choice seems obvious."]
        ],
        qs: [
          { id: 'u-M-02-L2-13', q: "What will the woman most likely do?", opts: ["Keep using her old scooter", "Rent a parking space with a charger", "Buy a scooter with batteries that are changed at a station", "Move to a lower floor"], a: 2 }
        ] },
      { id: 'u-M-02-L2-g8',
        lines: [
          ['M', "Those jeans you ordered online look a bit small."],
          ['F', "They are. I followed the size chart, but this brand must run small."],
          ['M', "Can you exchange them?"],
          ['F', "Yes, but I have to pay the shipping myself. Next time I'll read the customer reviews before I order. People usually mention problems like this."]
        ],
        qs: [
          { id: 'u-M-02-L2-14', q: "What does the woman plan to do in the future?", opts: ["Shop only in real stores", "Always order a larger size", "Avoid paying for shipping", "Check other buyers' comments first"], a: 3 }
        ] },
      { id: 'u-M-02-L2-g9',
        lines: [
          ['F', "How's your knee? Is the therapy helping?"],
          ['M', "A lot. The therapist also gave me some exercises to do at home. The only problem is that the clinic is across the city, so I spend an hour on the bus each way."],
          ['F', "Have you asked if they have a branch closer to you?"],
          ['M', "Actually, I hadn't thought of that. I'll ask at my next session."]
        ],
        qs: [
          { id: 'u-M-02-L2-15', q: "What will the man probably do?", opts: ["Stop doing the exercises at home", "Take a taxi to the clinic", "Change to a different therapist", "Ask about a clinic nearer to him"], a: 3 }
        ] }
    ] },
    L3: { items: [
      { id: 'u-M-02-L3-g1', intro: 'Listen to a message from the city government.', spk: 'F',
        say: "Good morning. This is a message from the city's environmental office. Starting on March 1, garbage collection in the North District will follow a new schedule. Trucks will still come every evening at around eight, but each day will now be for a different kind of waste, as shown in the schedule we have sent to every home. One important change is that paper will no longer have its own day. From now on, please put out paper together with plastic and glass. Also, remember to wash plastic containers before putting them out, because dirty plastic cannot be recycled. Finally, large items such as old furniture are not collected by the regular trucks. For those, please call the office to arrange a time for them to be picked up. Thank you for helping to keep our city clean.",
        chart: { cap: 'New Collection Schedule', head: ['Type of Waste', 'Collection Days'],
          rows: [['General garbage', 'Monday, Wednesday, Friday'], ['Plastic and glass', 'Tuesday, Saturday'], ['Food waste', 'Every day except Sunday'], ['Large items', 'By phone appointment']] },
        qs: [
          { id: 'u-M-02-L3-01', q: 'Look at the chart. On which day can residents put out old newspapers?', opts: ['Monday', 'Thursday', 'Saturday', 'Sunday'], a: 2 },
          { id: 'u-M-02-L3-02', q: 'Why does the speaker ask residents to wash plastic containers?', opts: ['Dirty plastic cannot be recycled.', 'The trucks will not stop otherwise.', 'Washed plastic is collected every day.', 'It keeps insects out of the kitchen.'], a: 0 },
          { id: 'u-M-02-L3-03', q: 'What should residents do with old furniture?', opts: ['Leave it out on Sunday night', 'Put it out with general garbage', 'Take it to a recycling center', 'Call the office to arrange a time'], a: 3 }
        ] },
      { id: 'u-M-02-L3-g2', intro: 'Listen to an announcement at a hospital.', spk: 'M',
        say: "Welcome to City General Hospital. To reduce waiting times, our outpatient clinics are now using a new check-in system. When you arrive, please put your health card into one of the machines in the main hall. You will receive a ticket with your number, and you can follow your place in the line on our website or on the screens on each floor. This means you no longer need to sit in the waiting area the whole time. You are welcome to visit the café on the ground floor, but please come back when there are about five patients ahead of you. If you miss your turn, you will be moved to the end of the line. Patients who need help with the machines can ask our volunteers in green jackets. Thank you.",
        qs: [
          { id: 'u-M-02-L3-04', q: 'What is the purpose of the new system?', opts: ['To make patients wait for shorter periods', 'To reduce the number of volunteers', 'To help patients pay their bills online', 'To give patients free coffee'], a: 0 },
          { id: 'u-M-02-L3-05', q: 'When should patients go back to the waiting area?', opts: ['As soon as they get a ticket', 'When their number is five', 'When there are about five people before them', 'After they have visited the café'], a: 2 },
          { id: 'u-M-02-L3-06', q: 'Who can help patients with the machines?', opts: ['Nurses on each floor', 'Volunteers wearing green', 'Staff at the café', 'Doctors in the main hall'], a: 1 }
        ] },
      { id: 'u-M-02-L3-g3', intro: 'Listen to an announcement in a department store.', spk: 'F',
        say: "Good evening, shoppers, and welcome to our anniversary sale. Today only, members receive an extra 10% off all clothing and shoes on the third and fourth floors. Not a member yet? Joining is free, and it takes just two minutes at the service counter on the first floor. Please note that items already marked down by more than half are not included in the extra discount. For every NT$3,000 you spend, you'll also receive a NT$300 gift card, which can be used from tomorrow until the end of next month. Because the store is very busy tonight, we recommend using the parking lot on Park Street, where the first hour is free. Finally, please keep an eye on your belongings while you shop. Thank you, and enjoy your evening.",
        qs: [
          { id: 'u-M-02-L3-07', q: 'What must shoppers do to receive the extra discount?', opts: ['Spend at least NT$3,000', 'Shop before tomorrow morning', 'Become a store member', 'Park on Park Street'], a: 2 },
          { id: 'u-M-02-L3-08', q: 'Which items are NOT included in the extra discount?', opts: ['Shoes on the fourth floor', 'Items already reduced by over 50%', 'Clothing bought by members', 'Items paid for with a gift card'], a: 1 },
          { id: 'u-M-02-L3-09', q: 'When can the gift cards be used?', opts: ["Only during tonight's sale", 'Only on the first floor', 'Until the end of this week', 'Starting the following day'], a: 3 }
        ] },
      { id: 'u-M-02-L3-g4', intro: 'Listen to a speech at a community meeting.', spk: 'M',
        say: "Thank you all for coming tonight. As your community leader, I'd like to invite everyone to our earthquake safety day on the 25th. In the morning, the fire department will show us how to put out a small fire and how to get out of a building safely. In the afternoon, we'll practice an evacuation, walking together from the community center to the nearest shelter, which is the elementary school on Lake Road. Many of you have never checked how long that walk takes, and in an emergency, every minute counts. We especially need younger volunteers to help older residents and people in wheelchairs. If you can help, please write your name on the list by the door. Lunch will be provided for all volunteers.",
        qs: [
          { id: 'u-M-02-L3-10', q: 'Why does the speaker want residents to walk to the school?', opts: ['To raise money for the school', 'To find out how long it takes to reach the shelter', 'To meet the fire department', 'To help the school prepare lunch'], a: 1 },
          { id: 'u-M-02-L3-11', q: 'What are younger volunteers asked to do?', opts: ['Help residents who have trouble moving', 'Teach residents how to put out fires', 'Cook lunch for everyone', 'Clean the elementary school'], a: 0 }
        ] },
      { id: 'u-M-02-L3-g5', intro: 'Listen to part of a radio program.', spk: 'F',
        say: "With temperatures above 35 degrees this week, electricity use across the island is close to its limit, so today I'd like to share a few simple ways to save power. The air conditioner is usually the biggest user of electricity in any home. Setting it to 26 or 27 degrees, instead of 22, can cut its electricity use by around 20 percent, and using a fan at the same time helps the cool air move around the room. Another tip is to pull out the plugs of chargers and TVs when you're not using them. Many people don't realize that these devices still use some power even when they're switched off. Finally, try to run your washing machine after nine at night, when demand is lower. Small changes like these, multiplied across millions of homes, really do make a difference.",
        qs: [
          { id: 'u-M-02-L3-12', q: 'Why is the speaker giving this advice now?', opts: ['Electricity prices will rise next week.', 'The demand for power is very high this week.', 'Many air conditioners are breaking down.', 'A new power plant has just opened.'], a: 1 },
          { id: 'u-M-02-L3-13', q: 'What does the speaker say about chargers?', opts: ['They should be replaced every year.', 'They are the biggest users of power.', 'They still use some power when turned off.', 'They work better at night.'], a: 2 }
        ] },
      { id: 'u-M-02-L3-g6', intro: 'Listen to a telephone message.', spk: 'M',
        say: "Hello, this is Kevin from Corner Pharmacy, calling for Ms. Chen. Your medicine is ready to be picked up. Before you come in, I just want to mention two things. First, this medication may make you feel sleepy, so please don't drive for a few hours after taking it. Second, the doctor has prescribed it for two weeks, and it's important to finish all of it, even if you start to feel better after a few days. Stopping too early is one of the most common reasons an infection comes back. We're open until ten tonight, and if you'd like us to deliver it to your home, there's a small fee of NT$50. Just call us back at this number. Thanks.",
        qs: [
          { id: 'u-M-02-L3-14', q: 'What does the pharmacist warn Ms. Chen about?', opts: ['The medication is very costly.', 'She may feel tired after taking it.', 'The pharmacy closes early tonight.', 'She must take it before meals.'], a: 1 },
          { id: 'u-M-02-L3-15', q: 'Why should Ms. Chen take all of the medicine?', opts: ['The doctor wants to see her in two weeks.', 'The pharmacy cannot take it back.', 'Her illness might return if she stops early.', 'She will feel better after a few days.'], a: 2 }
        ] }
    ] },
    R1: { items: [
      { id: 'u-M-02-R1-01', s: 'Customers who are not satisfied with the product can return it within seven days for a full ___.',
        opts: ['receipt', 'refund', 'reward', 'record'], a: 1 },
      { id: 'u-M-02-R1-02', s: 'The factory was fined for ___ the river with chemicals that killed thousands of fish.',
        opts: ['protecting', 'preventing', 'polluting', 'providing'], a: 2 },
      { id: 'u-M-02-R1-03', s: 'Please keep this medicine out of the ___ of children, and store it in a cool, dry place.',
        opts: ['taste', 'touch', 'hand', 'reach'], a: 3 },
      { id: 'u-M-02-R1-04', s: 'The community center is looking for ___ who can spare two hours a week to read to older residents.',
        opts: ['volunteers', 'customers', 'patients', 'tourists'], a: 0 },
      { id: 'u-M-02-R1-05', s: 'After the operation, the doctor told him to ___ from heavy exercise for at least a month.',
        opts: ['prevent', 'refrain', 'protect', 'prohibit'], a: 1 },
      { id: 'u-M-02-R1-06', s: 'To attract more shoppers, the store is offering a free gift with every ___ over NT$1,000.',
        opts: ['product', 'profit', 'process', 'purchase'], a: 3 },
      { id: 'u-M-02-R1-07', s: 'The new bus line is very ___ for people living in the hills, who used to walk forty minutes to the nearest stop.',
        opts: ['confident', 'constant', 'convenient', 'careful'], a: 2 },
      { id: 'u-M-02-R1-08', s: 'Many families have started to ___ their energy use by turning off lights and devices they are not using.',
        opts: ['reduce', 'refuse', 'remove', 'repeat'], a: 0 },
      { id: 'u-M-02-R1-09', s: 'Because of a ___ of nurses, some patients had to wait several hours before they were seen.',
        opts: ['storage', 'shortage', 'package', 'passage'], a: 1 },
      { id: 'u-M-02-R1-10', s: 'Before you join the gym, read the contract carefully to see whether you can ___ your membership at any time.',
        opts: ['delay', 'argue', 'borrow', 'cancel'], a: 3 }
    ] },
    R2: { items: [
      { id: 'u-M-02-R2-g1', title: 'Cooling Cities with Green Roofs',
        text: "In summer, the center of a large city can be several degrees hotter than the countryside around it. Experts call this the urban heat island effect. Roads, roofs, and buildings absorb heat during the day and release it slowly at night, [1] the air rarely has a chance to cool down.\nOne solution that many cities are now trying is the green roof, a roof covered with soil and plants. [2] On a hot afternoon, the surface of a normal dark roof can reach 70 degrees, while a green roof nearby may stay below 30.\nThe benefits go beyond comfort. Because the rooms below stay cooler, people use their air conditioners less, which [3] both their electricity bills and the pressure on the power supply. The plants also hold rain, reducing the risk of flooding during heavy storms, and they provide a home for birds and insects.\nGreen roofs are not without problems. They are heavy, so older buildings may need extra support, and they must be [4] regularly, just like any garden. The cost of building one can also be high. [5], several cities now offer to pay part of the cost for building owners who agree to put one in.",
        qs: [
          { id: 'u-M-02-R2-01', opts: ['unless', 'so', 'before', 'although'], a: 1 },
          { id: 'u-M-02-R2-02', opts: ['Most of these roofs are painted black.', 'Plants usually grow better in the countryside.', 'The difference in temperature can be surprising.', 'Such roofs are only found in cold countries.'], a: 2 },
          { id: 'u-M-02-R2-03', opts: ['raises', 'charges', 'supplies', 'lowers'], a: 3 },
          { id: 'u-M-02-R2-04', opts: ['looked after', 'turned down', 'given up', 'put off'], a: 0 },
          { id: 'u-M-02-R2-05', opts: ['Instead of this', 'To encourage more of them', 'In the past', 'Because of the weather'], a: 1 }
        ] },
      { id: 'u-M-02-R2-g2', title: 'Protecting Your Eyes in a World of Screens',
        text: "Many adults now spend more than eight hours a day looking at screens, first at work and then at home on their phones. It is no surprise that eye doctors are seeing more patients who complain of dry, tired eyes and headaches. [1] Simple habits can make a big difference.\nOne of the easiest is the 20-20-20 rule. Every twenty minutes, look at something about six meters away for twenty seconds. This gives the muscles in your eyes a chance to relax. Another useful habit is to blink more. [2] we stare at a screen, we blink much less often than usual, so the surface of the eye dries out.\nThe position of your screen also matters. It should be about an arm's length away and slightly below eye level. [3] the room is too dark, the bright screen makes your eyes work harder, so keep the lights on even in the evening.\nFinally, do not forget to have your eyes [4] regularly. Many eye problems develop slowly and without pain, so people may not notice them until they become serious. Eye doctors recommend a check every one to two years, and more often for people who already wear glasses. [5]",
        qs: [
          { id: 'u-M-02-R2-06', opts: ['Unfortunately, nothing can be done about it.', 'Most of them are children under ten.', 'Phones are now cheaper than ever before.', 'Fortunately, the problem is not hard to prevent.'], a: 3 },
          { id: 'u-M-02-R2-07', opts: ['When', 'Unless', 'Until', 'Although'], a: 0 },
          { id: 'u-M-02-R2-08', opts: ['Unless', 'Although', 'If', 'Until'], a: 2 },
          { id: 'u-M-02-R2-09', opts: ['checking', 'to check', 'check', 'checked'], a: 3 },
          { id: 'u-M-02-R2-10', opts: ['That is why screens should be banned at work.', 'After all, your eyes have to last a lifetime.', 'Glasses are the main cause of these problems.', 'Most people already follow these rules.'], a: 1 }
        ] }
    ] },
    R3: { items: [
      { id: 'u-M-02-R3-g1',
        texts: [
          { type: 'notice', title: 'Join the Sunny Roof Project',
            body: "Our building's roof gets strong sunlight for most of the year, yet it is currently used only for drying laundry. The residents' committee is proposing to put solar panels on part of the roof through a partnership with a local energy company. Here is how the plan would work.\n- The company would pay for the panels and for putting them in. Residents would pay nothing at the start.\n- The electricity produced would be used first for the building's shared areas, such as the elevators, corridor lights, and water pumps. Any extra power would be sold to the power company.\n- In return, the energy company would receive 70% of the income from selling the extra power for 15 years. The remaining 30% would go into the building's repair fund.\n- About one third of the roof would still be available for drying clothes.\nThe committee expects the electricity bill for shared areas to fall by around 40%, which should lower each household's monthly management fee. A vote will be held at the residents' meeting on October 18. The plan will go ahead only if at least two thirds of households agree. Questions can be sent to the committee by email before October 10." },
          { type: 'email', from: 'Helen Wu', to: "Residents' Committee", title: 'Questions about the Sunny Roof Project',
            body: "Dear Committee Members,\nThank you for the information about the solar panel plan. I think it is a good idea in general, and I like that it would not cost us anything at the beginning. However, I have a few concerns before the vote.\nFirst, my apartment is on the top floor, directly under the roof. Would the panels add weight to the roof, and could the work cause leaks during the rainy season? I would like to know whether the company would be responsible for any damage.\nSecond, fifteen years is a long time. What happens if the building needs major roof repairs during that period? Would the company remove the panels at its own cost?\nFinally, I noticed that the notice does not mention who will clean the panels. I have read that dirty panels produce much less electricity.\nI hope these questions can be answered before October 18, so that residents can make a well-informed decision.\nBest regards,\nHelen Wu, 12F" }
        ],
        qs: [
          { id: 'u-M-02-R3-01', q: 'What is the main purpose of the notice?',
            opts: ['To ask residents to stop drying laundry on the roof', 'To explain a proposal before residents vote on it', 'To announce that solar panels have been put in', 'To invite residents to work for an energy company'], a: 1 },
          { id: 'u-M-02-R3-02', q: 'Who will pay for the solar panels?',
            opts: ['Each household equally', "The building's repair fund", 'The energy company', 'The residents on the top floor'], a: 2 },
          { id: 'u-M-02-R3-03', q: 'According to the notice, how will residents benefit?',
            opts: ['They will receive 70% of the income.', 'Their monthly management fee should go down.', 'They will get free electricity at home.', 'They will have more space for laundry.'], a: 1 },
          { id: 'u-M-02-R3-04', q: 'Why is Helen Wu especially concerned about the roof?',
            opts: ['She lives right below it.', 'She dries her laundry there every day.', 'She is in charge of the repair fund.', 'She works for the energy company.'], a: 0 },
          { id: 'u-M-02-R3-05', q: 'What information does Helen say is missing from the notice?',
            opts: ['How much of the roof will be left for laundry', 'When the vote will be held', 'Who will keep the panels clean', 'How the extra power will be used'], a: 2 }
        ] },
      { id: 'u-M-02-R3-g2',
        texts: [
          { type: 'notice', title: 'Chinese New Year Opening Hours',
            body: "During the Chinese New Year holiday, Hope Family Clinic will open on a reduced schedule, as shown in the table below. On holiday days, there will be no evening sessions, and Dr. Lee will be the only doctor on duty.\nIf you take medicine for a long-term condition, such as high blood pressure, please make sure you have enough to last through the holiday. Medicine for long-term conditions can be picked up up to ten days before you run out, so there is no need to wait until the last minute.\nIf you feel unwell while the clinic is closed, you can call the city's 24-hour health line at 1999 for advice. For serious emergencies, such as chest pain or difficulty breathing, go directly to the nearest hospital or call 119.\nPlease also note that our online booking system will be closed for updates from February 3 to February 5. During this time, appointments can only be made by phone during opening hours. We wish all our patients a healthy and happy new year." },
          { type: 'table', title: 'Opening Hours',
            table: { head: ['Date', 'Morning (9:00 to 12:00)', 'Afternoon (2:00 to 5:00)', 'Evening (6:00 to 9:00)'],
              rows: [['Friday, January 31', 'Open', 'Open', 'Open'], ['Saturday, February 1', 'Closed', 'Closed', 'Closed'], ['Sunday, February 2', 'Closed', 'Closed', 'Closed'], ['Monday, February 3', 'Open', 'Closed', 'Closed'], ['Tuesday, February 4', 'Open', 'Open', 'Closed'], ['Wednesday, February 5', 'Open', 'Open', 'Open']] } }
        ],
        qs: [
          { id: 'u-M-02-R3-06', q: 'A patient wants to see a doctor on an afternoon during the holiday. When can she go?',
            opts: ['Saturday, February 1', 'Monday, February 3', 'Tuesday, February 4', 'Sunday, February 2'], a: 2 },
          { id: 'u-M-02-R3-07', q: 'What does the notice suggest patients with high blood pressure do?',
            opts: ['Get their medicine before the holiday begins', 'Call the health line every day', 'Visit the clinic only in the evening', 'Stop taking their medicine during the holiday'], a: 0 },
          { id: 'u-M-02-R3-08', q: 'What should a person with chest pain do while the clinic is closed?',
            opts: ['Wait for the clinic to open', 'Book an appointment online', 'Leave a message for Dr. Lee', 'Go to a hospital right away'], a: 3 },
          { id: 'u-M-02-R3-09', q: 'On February 4, Mr. Lin wants to book an appointment. How can he do it?',
            opts: ["Through the clinic's website", 'By phone while the clinic is open', 'By visiting the hospital', 'By calling 1999'], a: 1 },
          { id: 'u-M-02-R3-10', q: 'What is true about the holiday period?',
            opts: ['Several doctors will be available every day.', 'The clinic will be closed for a whole week.', 'Only one doctor will be working on holiday days.', 'Evening sessions will be longer than usual.'], a: 2 }
        ] },
      { id: 'u-M-02-R3-g3',
        texts: [
          { type: 'article', title: 'The Hidden Cost of Free Trials',
            body: "\"Try it free for 30 days.\" Offers like this are everywhere, from music and video services to language apps and online fitness classes. They seem like a great deal: you get to test a product before paying anything. But a recent survey of 1,200 consumers suggests that free trials often end up costing more than people expect.\nAccording to the survey, almost 40 percent of people who signed up for a free trial in the past year forgot to cancel it before it ended. Because most services ask for credit card details at the start, these customers were automatically charged for at least one month. Around one in six said they kept paying for more than half a year for a service they hardly used.\nWhy does this happen so often? Part of the reason is simply that a trial lasting a whole month is easy to forget about. But consumer groups also point out that some companies deliberately make cancelling difficult. Instead of a clear \"cancel\" button, users may have to go through several pages, answer questions about why they are leaving, or even call a phone line that is only open during working hours.\nSome governments are now responding. In several countries, new legislation requires companies to remind customers a few days before a free trial turns into a paid one, and to make cancelling online as easy as signing up.\nUntil such laws are common, experts offer some practical advice. Set a reminder on your phone for two days before any trial ends. Check your bank statement every month for small, regular payments you do not recognize. And before signing up, look for the cancel button. If you cannot find it easily, that tells you something about the company." }
        ],
        qs: [
          { id: 'u-M-02-R3-11', q: 'What did the survey find?',
            opts: ['Most people never sign up for free trials.', 'Many people forgot to stop a trial in time.', 'Free trials usually last more than a month.', 'Most services do not ask for card details.'], a: 1 },
          { id: 'u-M-02-R3-12', q: 'According to consumer groups, what do some companies do?',
            opts: ['Offer trials that are shorter than advertised', 'Charge customers before the trial begins', 'Refuse to answer customers’ questions', 'Make stopping a service harder than necessary'], a: 3 },
          { id: 'u-M-02-R3-13', q: "In the third paragraph, the word 'deliberately' is closest in meaning to",
            opts: ['on purpose', 'by mistake', 'for free', 'in time'], a: 0 },
          { id: 'u-M-02-R3-14', q: 'What does the new legislation in some countries require?',
            opts: ['Free trials must last at least 30 days.', 'Customers must cancel by phone.', 'Companies must warn customers before charging them.', 'Companies may not ask for card details.'], a: 2 },
          { id: 'u-M-02-R3-15', q: "What is the writer's main advice?",
            opts: ['Avoid all free trials.', 'Use cash instead of credit cards.', 'Complain to the government about companies.', 'Take simple steps to stay in control of trials.'], a: 3 }
        ] },
      { id: 'u-M-02-R3-g4',
        texts: [
          { type: 'notice', title: "Borrow, Don't Buy: The Elm Street Tool Library",
            body: "How often do you use an electric drill? For most households, the answer is a few minutes a year. Yet many of us own one, along with ladders, sewing machines, and camping tents that spend most of their lives in a closet. The Elm Street Tool Library was set up last spring to change that.\nHow it works: Members can borrow up to three items at a time for one week. Membership costs NT$300 a year for residents of the district and NT$500 for others. Members who donate a tool in good condition receive one year of free membership. All items are checked and cleaned by volunteers after each use.\nWhat we have: Our collection now includes more than 400 items, from basic hand tools to carpet cleaners and party equipment such as folding tables. Please note that, for safety reasons, electric tools can only be borrowed by members who are 18 or older, and first-time borrowers must watch a short safety video.\nLate returns: We do not charge money for late returns. Instead, members who return items late must wait the same number of days before borrowing again. If an item is lost or damaged, the member will be asked to pay for a repair or a replacement.\nOpening hours: The library is open on Wednesday evenings from 6:00 to 9:00 and on Saturdays from 10:00 to 4:00. It is run entirely by volunteers, so we are always looking for new helpers, especially people who are good at fixing things." }
        ],
        qs: [
          { id: 'u-M-02-R3-16', q: 'What is the main point of the first paragraph?',
            opts: ['Most people do not know how to use tools.', 'Many household items are rarely used.', 'Tools are too expensive to buy.', 'Closets are too small for most families.'], a: 1 },
          { id: 'u-M-02-R3-17', q: 'How can a member get a year of membership without paying?',
            opts: ['By living in the district', 'By borrowing three items at a time', 'By giving the library a tool in good condition', 'By watching a safety video'], a: 2 },
          { id: 'u-M-02-R3-18', q: 'Who is NOT allowed to borrow an electric drill?',
            opts: ['A 16-year-old member', 'A member from another district', 'A member who has just watched the safety video', 'A member who has paid NT$500'], a: 0 },
          { id: 'u-M-02-R3-19', q: 'What happens if a member returns an item four days late?',
            opts: ['The member pays a small fine.', 'The member loses the membership.', 'The member must pay for a new item.', 'The member cannot borrow for four days.'], a: 3 },
          { id: 'u-M-02-R3-20', q: 'What does the notice say about the people who run the library?',
            opts: ['They are paid by the district.', 'They work only on Saturdays.', 'They do the work without pay.', 'They sell tools to members.'], a: 2 }
        ] }
    ] }
  }
});
