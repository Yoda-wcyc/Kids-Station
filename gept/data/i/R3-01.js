/* i-R3-01 閱讀理解 第 1 組（原創，2026-11-15；g2 兩篇對照） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'i-R3-01',
  title: '閱讀理解 1',
  names: ['Riverside'],
  extra: [],
  items: [
    { id: 'i-R3-01-g1',
      texts: [{ type: 'ad', title: 'Riverside Youth Center: Summer Courses',
        body: "Sign up at the front desk or online by June 20. Members get 20% off all courses. If fewer than six students sign up for a course, the course will be canceled, and you will get all your money back.",
        table: { head: ['Course', 'Day and Time', 'Ages', 'Fee'], rows: [
          ['Street Dance', 'Tuesday 7:00-8:30 p.m.', '13-18', 'NT$2,400'],
          ['Basic Coding', 'Saturday 9:00-11:00 a.m.', '12-15', 'NT$3,200'],
          ['Photography', 'Sunday 2:00-4:00 p.m.', '15-18', 'NT$2,800'],
          ['Cooking for Teens', 'Wednesday 4:30-6:00 p.m.', '12-18', 'NT$3,000']] } }],
      qs: [
        { id: 'i-R3-01-01', q: "Which course can a 12-year-old take on the weekend?", opts: ['Street Dance', 'Basic Coding', 'Photography', 'Cooking for Teens'], a: 1 },
        { id: 'i-R3-01-02', q: "Lily is a member of the center. How much will she pay for Photography?", opts: ['NT$2,240', 'NT$2,800', 'NT$2,400', 'NT$560'], a: 0 },
        { id: 'i-R3-01-03', q: "What will happen if only four students sign up for a course?", opts: ["The class will be moved to another day.", "The fee will be 20% lower.", "The students will get their money back.", "The students must find two more people."], a: 2 }
      ] },
    { id: 'i-R3-01-g2',
      texts: [
        { type: 'email', from: 'Emma', to: 'Mei', title: 'Coming to Taiwan!',
          body: "Hi Mei,\nGreat news! My parents finally said yes, so I'll be in Taipei from July 3 to July 10. I'd love to see the night markets you always talk about, and I want to try every snack, even the strange ones my brother read about online. I'm also hoping to see some nature, maybe the mountains or the ocean. One problem: I feel sick on long bus rides, especially on mountain roads, so I'd like to go to places we can reach by train. Could you suggest a few ideas? I'll pay for my own tickets, of course.\nCan't wait!\nEmma" },
        { type: 'email', from: 'Mei', to: 'Emma', title: 'Your Trip Plan',
          body: "Hi Emma,\nI'm so happy you're coming! Here's my plan. On your first night, we can go to the night market near my home. On July 5, let's take the train to Hualien. It's about two hours, and the view of the ocean from the train is amazing. We can stay at my aunt's house there for two nights and ride bikes along the coast. I thought about Alishan, too, but you have to take a bus up the mountain for hours, so I don't think you'd enjoy it. On your last weekend, my cousin is having a birthday party, and she has invited you.\nSee you soon!\nMei" }],
      qs: [
        { id: 'i-R3-01-04', q: "Why did Mei decide not to take Emma to Alishan?", opts: ["Emma has already been there before.", "The train to Alishan costs too much.", "Mei's aunt lives too far from there.", "Emma feels sick on long mountain bus rides."], a: 3 },
        { id: 'i-R3-01-05', q: "How long will Emma stay in Hualien?", opts: ['One night', 'Two nights', 'Three nights', 'A whole week'], a: 1 },
        { id: 'i-R3-01-06', q: "Which of the following is NOT mentioned in the two emails?", opts: ["Going to a night market", "Riding bikes by the sea", "Going to a birthday party", "Visiting a museum in Taipei"], a: 3 }
      ] },
    { id: 'i-R3-01-g3',
      texts: [{ type: 'article', title: 'Repair Cafe: Fixing Things Together',
        body: "Every second Saturday of the month, a small neighborhood center in Taichung turns into a busy workshop. People bring in broken lamps, old radios, school bags with holes, and bikes with flat tires. Volunteers, many of them retired engineers, help fix these things for free. This event is called a Repair Cafe.\nThe idea is simple. Instead of throwing broken things away and buying new ones, people learn how to repair them. 'Most things only need a small change to work again,' says Mr. Liu, a 68-year-old volunteer. 'But many young people have never been taught how to do it.'\nVisitors are not allowed to just leave their things and go home. They must sit with a volunteer and watch, or even help. This way, they can fix the same kind of problem by themselves next time. Last year, the cafe fixed more than 900 items that would have ended up in the trash.\nHigh school student Wei-ting came for the first time with her grandmother's old fan. 'I thought it was useless,' she said. 'Now it works, and I know how to clean it myself.'" }],
      qs: [
        { id: 'i-R3-01-07', q: "What is the article mainly about?", opts: ["A place where people learn to fix their own things", "A shop that sells old radios and lamps", "A school class that teaches students to be engineers", "A group that picks up trash in Taichung"], a: 0 },
        { id: 'i-R3-01-08', q: "Why must visitors stay with the volunteers?", opts: ["Because the volunteers need extra money", "Because things are often stolen at the cafe", "So that they can learn to repair things themselves", "So that the cafe can fix more items each day"], a: 2 },
        { id: 'i-R3-01-09', q: "What is probably true about Wei-ting?", opts: ["She had visited the Repair Cafe many times.", "She will probably try to fix things before throwing them away.", "She wants to become a volunteer engineer.", "She bought her grandmother a new fan."], a: 1 }
      ] },
    { id: 'i-R3-01-g4',
      texts: [{ type: 'notice', title: 'Important Changes at Central Library',
        body: "Starting March 1, the second and third floors of Central Library will be closed for three months while we update the reading rooms and add new study spaces. During this time:\n- The first floor will stay open from 9 a.m. to 6 p.m. (instead of 9 p.m.).\n- Books on the second and third floors can't be borrowed directly. If you need one of these books, ask at the front desk, and we will bring it to the first floor within two working days.\n- You may return books at any of our six branch libraries or use the 24-hour book drop outside the main door.\n- Study rooms will not be available. Students may use the study area at Riverside Branch, which is now open until 10 p.m.\nWe are sorry for any trouble this may cause. When we open again in June, you will find faster Wi-Fi, more places to charge your phone, and a new teen corner with games and comic books." }],
      qs: [
        { id: 'i-R3-01-10', q: "In April, what time will Central Library close?", opts: ['6 p.m.', '9 p.m.', '10 p.m.', '9 a.m.'], a: 0 },
        { id: 'i-R3-01-11', q: "A student needs a book from the third floor. What should she do?", opts: ["Go to Riverside Branch to borrow it", "Wait until the library opens again in June", "Use the book drop outside the main door", "Ask at the front desk and wait up to two days"], a: 3 },
        { id: 'i-R3-01-12', q: "Which of the following will NOT be new when the library opens again?", opts: ["Faster Internet", "A corner for teenagers", "Longer opening hours", "More places to charge phones"], a: 2 }
      ] },
    { id: 'i-R3-01-g5',
      texts: [{ type: 'story', title: 'The Wrong Bus',
        body: "It was Jun's first day at his new high school, and he wanted everything to be perfect. He left home twenty minutes early and waited at the bus stop, listening to music. When a bus with the number 18 arrived, he got on without thinking and found a seat by the window.\nAfter ten minutes, the view outside began to look strange. Instead of shops and offices, he saw rice fields. Jun's heart sank. He checked the screen at the front of the bus. It was Bus 81, not 18.\nHe jumped off at the next stop and looked at the map on his phone. He was now forty minutes away from school. For a moment, he wanted to go home and pretend he was sick. Then an old woman at the stop asked if he was lost. When he explained, she laughed kindly. 'My grandson did the same thing last year,' she said. She showed him which bus to take and even gave him a piece of candy for good luck.\nJun arrived at school during the second class. He felt embarrassed, but when he told his new classmates the story at lunch, everyone laughed, and two of them said they had made the same mistake. By the end of the day, Jun didn't feel like a new student anymore." }],
      qs: [
        { id: 'i-R3-01-13', q: "Why did Jun get on the wrong bus?", opts: ["He wanted to sit by the window.", "He did not look carefully at the number.", "He left home later than usual.", "The old woman told him to take it."], a: 1 },
        { id: 'i-R3-01-14', q: "What does 'Jun's heart sank' show about how he felt?", opts: ["He suddenly felt worried.", "He felt sleepy on the bus.", "He was excited to see the fields.", "He felt sick from the bus ride."], a: 0 },
        { id: 'i-R3-01-15', q: "What can we learn from the end of the story?", opts: ["Jun decided to walk to school after that.", "Jun's classmates thought he was lying.", "Jun missed the whole first day of school.", "Jun's mistake helped him make new friends."], a: 3 }
      ] }
  ]
});
