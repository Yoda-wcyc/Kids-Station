/* u-L3-01 談話 第 1 組（第一階段樣本，2026-11-21）題材：A 捷運線段維修接駁公車；B 健身房新課程說明；C 主管說明出差報帳新流程；D 健康檢查前的語音提醒；E 跑步社團教練賽前叮嚀；F 同事班機延誤請人代接待客戶 */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'u-L3-01',
  title: '談話 1',
  names: [],
  extra: [],
  items: [
    { id: 'u-L3-01-g1', spk: 'F', intro: "Listen to an announcement.",
      say: "Attention, passengers. Starting this Monday, the Green Line will be closed between City Hall and River Park stations for repair work on the tracks. The closure is temporary and should last about two weeks. During this time, free buses will run between the two stations every ten minutes from six in the morning until midnight. Commuters should allow at least twenty extra minutes for their trip, especially during peak hours. Cyclists will not be allowed to take their bicycles on the buses, so we suggest taking another route on the Blue Line. For more information, please check our website or ask any station staff. We are sorry for the trouble, and thank you for your patience.",
      qs: [
        { id: 'u-L3-01-01', q: "What is the main purpose of the announcement?", opts: ["To introduce a new subway line", "To ask passengers to buy tickets online", "To explain a short-term service change", "To announce new hours for the trains"], a: 2 },
        { id: 'u-L3-01-02', q: "How often will the free buses run?", opts: ["Every ten minutes", "Every twenty minutes", "Every two hours", "Only during peak hours"], a: 0 },
        { id: 'u-L3-01-03', q: "What should cyclists do?", opts: ["Take the free bus at night", "Ask station staff for a special ticket", "Leave twenty minutes earlier", "Use another subway line"], a: 3 }
      ] },
    { id: 'u-L3-01-g2', spk: 'M', intro: "Listen to a talk at a gym.",
      say: "Hi, everyone, and thanks for coming to our members' evening. Based on the feedback from our survey, we're adding four new classes this month. They're all optional and free for members. Most of them are in the evening, so they should be convenient for people who work during the day. If you're new to exercise, I'd strongly recommend starting with a beginner class, because jumping into an advanced class too early is a common way to get injured. One more thing: our Thursday class is very popular, and it's limited to fifteen people, so please sign up at the front desk at least a day before. Finally, members who attend eight classes this month will receive a free towel.",
      chart: { cap: 'New Classes This Month', head: ['Class', 'Day', 'Time', 'Level'], rows: [['Strength Basics', 'Monday', '7:00 pm', 'Beginner'], ['Power Cycling', 'Tuesday', '6:30 am', 'Advanced'], ['Stretch and Relax', 'Wednesday', '8:00 pm', 'All levels'], ['Core Training', 'Thursday', '7:00 pm', 'Beginner']] },
      qs: [
        { id: 'u-L3-01-04', q: "Why is the gym adding new classes?", opts: ["Because the old classes were too difficult", "Because members asked for them", "Because the gym hired new trainers", "Because fewer people came in the evening"], a: 1 },
        { id: 'u-L3-01-05', q: "Look at the chart. Which class does the speaker say must be booked early?", opts: ["Strength Basics", "Power Cycling", "Core Training", "Stretch and Relax"], a: 2 },
        { id: 'u-L3-01-06', q: "What does the speaker suggest about advanced classes?", opts: ["Beginners may get hurt if they start with them.", "They are only for members who work during the day.", "They are limited to fifteen people.", "Members can get a free towel for joining them."], a: 0 }
      ] },
    { id: 'u-L3-01-g3', spk: 'F', intro: "Listen to a manager at a team meeting.",
      say: "Before we finish, I want to talk about travel expenses. From next month, we'll stop using paper forms. Instead, you'll take a photo of each receipt and upload it to our new online system within five working days of your trip. I know that with all the old paperwork, some of you had to wait almost two months to get your money back. With the new procedure, payment should take about a week. The system is still new, though, so if anything goes wrong, please don't keep trying again and again. Send a short message to our colleague Eric in accounting, and he'll sort it out. He'll also run a training session next Tuesday at three, and I'd really like all employees who travel regularly to be there.",
      qs: [
        { id: 'u-L3-01-07', q: "What is the talk mainly about?", opts: ["A plan to reduce business travel", "A new training program for accounting staff", "A problem with the company's website", "A change in how staff get paid back for trips"], a: 3 },
        { id: 'u-L3-01-08', q: "What is one benefit of the new procedure?", opts: ["Staff can travel more often.", "Staff will get their money back faster.", "Employees no longer need to keep receipts.", "Staff can choose their own hotels."], a: 1 },
        { id: 'u-L3-01-09', q: "What should staff do if they have trouble with the system?", opts: ["Contact Eric in accounting", "Upload the photo again later", "Fill out a paper form instead", "Wait until the training session"], a: 0 }
      ] },
    { id: 'u-L3-01-g4', spk: 'F', intro: "Listen to a voice message.",
      say: "Hello, this is Nancy from Sunny Day Health Center, calling for Mr. Huang. I'm calling to confirm your health check this Friday at 8:30 in the morning. Please don't eat or drink anything except water after ten o'clock the night before, because some of the blood tests require an empty stomach. If you take medication every day, bring it with you, and we'll tell you when to take it. The check usually takes about three hours, so you may want to let your workplace know you'll be late. If you need to postpone the check, please call us at least two days ahead. Thank you, and have a nice day.",
      qs: [
        { id: 'u-L3-01-10', q: "What is Mr. Huang asked to do before the health check?", opts: ["Drink a lot of water in the morning", "Stop taking his daily medication", "Avoid food after ten the night before", "Arrive three hours early"], a: 2 },
        { id: 'u-L3-01-11', q: "What does the speaker suggest Mr. Huang do?", opts: ["Call the center on Friday morning", "Bring his test results from last year", "Ask a family member to come with him", "Tell his workplace he will arrive late"], a: 3 }
      ] },
    { id: 'u-L3-01-g5', spk: 'M', intro: "Listen to a running club coach.",
      say: "Okay, everyone, the half marathon is this Sunday, so tonight's run will be short and easy. I know some of you want to do one last long run, but trust me, your legs need to rest now, not get more tired. For the next few days, get plenty of sleep, and don't try any new shoes or new food before the race. Stick to what you know works. On race day, our team tent will be next to the main stage. Meet there at 6:15, and we'll warm up together. And please, don't sprint at the start just because everyone around you is excited. A steady pace will get you a much better finishing time.",
      qs: [
        { id: 'u-L3-01-12', q: "Why will tonight's run be short?", opts: ["The runners need to save energy for the race.", "The weather is expected to be bad.", "Some runners have new shoes to try.", "The coach has to set up the team tent."], a: 0 },
        { id: 'u-L3-01-13', q: "What does the coach warn the runners about?", opts: ["Arriving late at the main stage", "Running too fast at the beginning", "Eating too little before the race", "Sleeping too much the night before"], a: 1 }
      ] },
    { id: 'u-L3-01-g6', spk: 'M', intro: "Listen to a message from a colleague.",
      say: "Hi, Grace, it's Mark. I'm still at the airport in Tokyo. My flight home has been delayed, so I won't be back in time to meet the clients from our partner company at ten this morning. Could you take my place? Everything you need is in the blue folder on my desk, including the price list and the factory tour schedule. They've already seen our basic products, so please focus on the new models. Also, one of them doesn't eat meat, so please book the vegetarian restaurant on the second floor for lunch. I really owe you one. Call me if you have any questions.",
      qs: [
        { id: 'u-L3-01-14', q: "Why is the man calling?", opts: ["To cancel the meeting with the clients", "To ask Grace to pick him up at the airport", "To report a problem at the factory", "To ask Grace to meet the clients for him"], a: 3 },
        { id: 'u-L3-01-15', q: "What does the man mean when he says, \"I really owe you one\"?", opts: ["He needs to pay Grace back some money.", "He forgot to bring one of the folders.", "He is grateful for Grace's help.", "He wants Grace to order one more meal."], a: 2 }
      ] }
  ]
});
