/* u-L2-02 對話 第 2 組（第二階段作者 A，2026-11-21）題材：A 選團隊專案管理工具；B 高雄研討會出差選飯店；C 深夜抵達機場怎麼進市區；D 公司換新會計軟體；E 訂票 App 付款頁當掉；F 車站寄放大行李；G 電腦當機報告沒存到共用槽；H 簡報技巧課撞期；I 機票改期手續費 */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'u-L2-02',
  title: '對話 2',
  names: [],
  extra: ['app'],
  items: [
    { id: 'u-L2-02-g1',
      lines: [
        ['F', "Our team needs a new tool for tracking projects, so I've compared four options. There are eighteen of us, including our colleagues in Tainan, so it has to allow at least that many users."],
        ['M', "Right. And some of us work on the train with no internet, so it should work without the internet, too."],
        ['F', "Then two are left. The cheaper one is fine with me, but its free trial is only seven days."],
        ['M', "Seven days isn't enough to test it properly. Let's go with the other one, even if it costs a bit more."]],
      chart: { cap: 'Project Tools', head: ['Tool', 'Max Users', 'Works Without Internet', 'Price per Month', 'Free Trial'], rows: [['Tool A', '15', 'Yes', 'NT$2,400', '30 days'], ['Tool B', '25', 'Yes', 'NT$3,000', '7 days'], ['Tool C', '20', 'Yes', 'NT$3,500', '30 days'], ['Tool D', '30', 'No', 'NT$2,800', '14 days']] },
      qs: [
        { id: 'u-L2-02-01', q: "Look at the chart. Which tool will the speakers most likely choose?", opts: ["Tool A", "Tool B", "Tool C", "Tool D"], a: 2 },
        { id: 'u-L2-02-02', q: "Why does the man reject the cheaper option?", opts: ["The free trial is too short to test it well.", "It cannot be used without the internet.", "It does not allow enough users.", "The price goes up after the first month."], a: 0 }
      ] },
    { id: 'u-L2-02-g2',
      lines: [
        ['M', "I'm booking our hotel for the conference in Kaohsiung next month. It runs from nine to six, three days in a row."],
        ['F', "Please find somewhere we can walk to. Last year we spent almost an hour in taxis every day."],
        ['M', "There are four hotels within walking distance. The company only pays up to NT$3,000 a night for accommodation, though."],
        ['F', "Then that rules one out. Of the rest, I'd pick the one with breakfast, since we'll need to leave early."],
        ['M', "Okay. I'll also ask if we can check out late on the last day."]],
      chart: { cap: 'Hotels near the Exhibition Center', head: ['Hotel', 'Walk to Center', 'Price per Night', 'Breakfast'], rows: [['Harbor Hotel', '5 minutes', 'NT$3,400', 'Yes'], ['City Lodge', '8 minutes', 'NT$2,600', 'No'], ['River Hotel', '12 minutes', 'NT$2,900', 'No'], ['Bay View Hotel', '10 minutes', 'NT$2,800', 'Yes']] },
      qs: [
        { id: 'u-L2-02-03', q: "Look at the chart. Which hotel will the man most likely book?", opts: ["Harbor Hotel", "City Lodge", "River Hotel", "Bay View Hotel"], a: 3 },
        { id: 'u-L2-02-04', q: "What does the man say he will do?", opts: ["Ask the company to pay more for the hotel", "Ask the hotel about leaving later on the final day", "Book taxis for every morning of the conference", "Find a hotel closer to the airport"], a: 1 }
      ] },
    { id: 'u-L2-02-g3',
      lines: [
        ['F', "Our flight lands at 11:40 tonight. Should we take the airport train or a taxi to the hotel?"],
        ['M', "The train is much cheaper, but I just checked, and the last one leaves at midnight."],
        ['F', "That's cutting it close. We'll still need to pick up our luggage and go through customs."],
        ['M', "Exactly. If we miss it, we'll end up waiting in the taxi line anyway. Let's book a car in advance so it's waiting for us."],
        ['F', "Fine. I'll send the driver our flight number in case we're delayed."]],
      qs: [
        { id: 'u-L2-02-05', q: "What is the man concerned about?", opts: ["They may not get to the train in time.", "The taxi line will be too long in the morning.", "The train tickets are very expensive.", "Their luggage might be lost."], a: 0 },
        { id: 'u-L2-02-06', q: "What will the woman probably do next?", opts: ["Buy two tickets for the airport train", "Ask the hotel to send a car", "Give the driver details of their flight", "Change to an earlier flight"], a: 2 }
      ] },
    { id: 'u-L2-02-g4',
      lines: [
        ['M', "Have you heard we're switching to new accounting software in March?"],
        ['F', "Yes, and I'm a bit nervous. I've used the old system for eight years, and I know exactly how everything works."],
        ['M', "I felt the same at first. But I used it at my last company, and it does a lot of the boring, repeated work automatically."],
        ['F', "That sounds good. I just hope they give us proper training, not just a manual."],
        ['M', "They will. There's a two-day course, and you can sign up for either week."]],
      qs: [
        { id: 'u-L2-02-07', q: "Why is the woman nervous about the change?", opts: ["She has never used accounting software.", "She is very used to the current system.", "The new software costs too much.", "She will miss the training course."], a: 1 },
        { id: 'u-L2-02-08', q: "What does the man suggest about the new software?", opts: ["It is harder to learn than the old system.", "It will only be used until March.", "It was designed by his last company.", "It will save staff time on repeated tasks."], a: 3 }
      ] },
    { id: 'u-L2-02-g5',
      lines: [
        ['F', "Daniel, I tested the new booking app on my phone this morning. There's a problem with the payment page."],
        ['M', "Oh no. What happens?"],
        ['F', "When I enter my card number, the screen just goes blank. It only happens on older phones, though."],
        ['M', "Hmm, a lot of our customers use older models. We can't launch on Monday with that problem."],
        ['F', "Should I tell the marketing team to delay the announcement?"],
        ['M', "Not yet. Let me talk to the programmers first. If they can fix it by Friday, we'll keep the date."]],
      qs: [
        { id: 'u-L2-02-09', q: "What problem did the woman find?", opts: ["The app is too slow on new phones.", "Customers cannot find the booking page.", "The payment screen stops working on some phones.", "Card numbers are shown on the screen."], a: 2 },
        { id: 'u-L2-02-10', q: "What does the man want to do before changing the launch date?", opts: ["Check with the programmers", "Test the app on his own phone", "Talk to the marketing team", "Ask customers to upgrade their phones"], a: 0 }
      ] },
    { id: 'u-L2-02-g6',
      lines: [
        ['M', "Excuse me. We're taking the train to Hualien this afternoon, but we'd like to look around the city first. Is there somewhere we can leave our suitcases?"],
        ['F', "There are lockers next to the ticket machines. But they're quite small, so large suitcases might not fit."],
        ['M', "Ours are pretty big. Is there any other option?"],
        ['F', "The service counter next to Exit 3 can store your belongings for NT$100 a bag. Just remember it closes at five."],
        ['M', "Our train leaves at 5:30, so that should work."]],
      qs: [
        { id: 'u-L2-02-11', q: "Where are the speakers?", opts: ["At a hotel front desk", "On a train to Hualien", "At an airport", "At a train station"], a: 3 },
        { id: 'u-L2-02-12', q: "What does the woman suggest?", opts: ["Putting the suitcases in a locker", "Leaving the suitcases at a counter", "Taking an earlier train", "Buying smaller suitcases"], a: 1 }
      ] },
    { id: 'u-L2-02-g7',
      lines: [
        ['F', "My computer just shut down by itself, and I lost the report I'd been writing all morning."],
        ['M', "Didn't you save it to the shared drive? The system makes a backup every thirty minutes."],
        ['F', "No, I saved it on my desktop instead."],
        ['M', "Then let's ask IT. They might be able to get it back. But next time, use the shared drive."]],
      qs: [
        { id: 'u-L2-02-13', q: "What mistake did the woman make?", opts: ["She did not keep her work in the right place.", "She shared the report with the wrong people.", "She turned off the backup system.", "She wrote the report on the wrong computer."], a: 0 }
      ] },
    { id: 'u-L2-02-g8',
      lines: [
        ['M', "Did you sign up for the presentation skills workshop? The deadline is today."],
        ['F', "I wanted to, but it's on the same day as my client visit in Taichung."],
        ['M', "They're running it again in June. You could join that one instead."],
        ['F', "Good to know. Honestly, I'd rather wait anyway. I'll have more time after the busy season."]],
      qs: [
        { id: 'u-L2-02-14', q: "What will the woman probably do?", opts: ["Cancel her client visit in Taichung", "Sign up for the workshop today", "Attend the workshop later in the year", "Teach the workshop in June"], a: 2 }
      ] },
    { id: 'u-L2-02-g9',
      lines: [
        ['F', "Hi, I'd like to change my flight to Osaka from the 12th to the 15th. I booked an economy ticket last month."],
        ['M', "Let me see. Your ticket allows changes, but there's a fee. It's cheaper if you change it well before you fly."],
        ['F', "Today is the 2nd, so I'm not too late. Please go ahead."],
        ['M', "Done. The fee will be charged to the card you used for the original payment."]],
      chart: { cap: 'Change Fees: Economy Tickets', head: ['When You Change', 'Fee'], rows: [['More than 7 days before the flight', 'NT$1,000'], ['3 to 7 days before the flight', 'NT$1,800'], ['Less than 3 days before the flight', 'NT$2,500'], ['After the flight', 'Not allowed']] },
      qs: [
        { id: 'u-L2-02-15', q: "Look at the chart. How much will the woman pay to change her flight?", opts: ["NT$2,500", "NT$1,800", "Nothing at all", "NT$1,000"], a: 3 }
      ] }
  ]
});
