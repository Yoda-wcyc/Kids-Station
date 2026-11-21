/* u-L2-01 對話 第 1 組（第一階段樣本，2026-11-21）題材：A 會議室預約；B 出差高鐵訂位；C 新同事等筆電；D 客戶簡報延期；E 看診預約改時間；F 租車取車；G 跑步社團河濱新路線；H 公司附近月租停車；I 銷售報告數字有誤 */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'u-L2-01',
  title: '對話 1',
  names: [],
  extra: [],
  items: [
    { id: 'u-L2-01-g1',
      lines: [
        ['F', "Kevin, I need to book a room for Friday's meeting with the design team. There will be ten of us, including two colleagues joining from the Kaohsiung office."],
        ['M', "Then you'll need a room with a video screen so they can join online."],
        ['F', "Right. And the meeting should start at two and last about an hour."],
        ['M', "Room C is the newest, but I don't think it'll be free in time. Honestly, I'd book the other one now before someone else takes it."]],
      chart: { cap: 'Meeting Rooms on Friday', head: ['Room', 'Seats', 'Video Screen', 'Free From'], rows: [['A', '6', 'No', '9:00'], ['B', '12', 'Yes', '1:00'], ['C', '10', 'Yes', '3:30'], ['D', '20', 'No', '10:00']] },
      qs: [
        { id: 'u-L2-01-01', q: "Look at the chart. Which room will the woman most likely book?", opts: ["Room A", "Room B", "Room C", "Room D"], a: 1 },
        { id: 'u-L2-01-02', q: "What does the man suggest the woman do?", opts: ["Move the meeting to a later time", "Ask the Kaohsiung staff to come in person", "Invite fewer people to the meeting", "Make the booking without delay"], a: 3 }
      ] },
    { id: 'u-L2-01-g2',
      lines: [
        ['M', "Sara, our meeting with the client in Tainan starts at ten on Tuesday. Their office is about twenty minutes from the station by taxi."],
        ['F', "Then we should arrive by 9:30 at the latest. I'd also like to sit together so we can go over the slides on the way."],
        ['M', "Good idea. But I don't want to get up too early, so let's take the latest train that still works."],
        ['F', "Fine, but if there are only a few seats left, we probably can't sit together."]],
      chart: { cap: 'High Speed Rail: Taipei to Tainan', head: ['Train', 'Leaves', 'Arrives', 'Seats Left'], rows: [['603', '7:15', '9:05', 'Many'], ['121', '7:45', '9:30', 'Few'], ['605', '8:10', '9:58', 'Many'], ['125', '8:40', '10:25', 'Many']] },
      qs: [
        { id: 'u-L2-01-03', q: "Look at the chart. Which train will the speakers most likely take?", opts: ["Train 603", "Train 121", "Train 605", "Train 125"], a: 0 },
        { id: 'u-L2-01-04', q: "Why does the woman want to sit with the man?", opts: ["To make sure they arrive on time", "To share the cost of a taxi", "To prepare for the meeting together", "To avoid getting up too early"], a: 2 }
      ] },
    { id: 'u-L2-01-g3',
      lines: [
        ['F', "Hi, I'm Mia. I just started in the sales department today. Do you know who I should talk to about getting a laptop?"],
        ['M', "Welcome, Mia. I'm Tom from accounting. Usually the IT team handles that, but they're short of staff this week."],
        ['F', "Oh, so it might take a while?"],
        ['M', "Probably a few days. Until then, you can use the spare computer by the window. Just don't save anything important on it, because it's shared."]],
      qs: [
        { id: 'u-L2-01-05', q: "What is the main problem for the woman?", opts: ["She can't find the sales department.", "She doesn't know anyone in accounting.", "The spare computer by the window is broken.", "She may have to wait for her own laptop."], a: 3 },
        { id: 'u-L2-01-06', q: "What does the man advise the woman to do?", opts: ["Ask the IT team to work faster", "Keep important files off the shared computer", "Sit by the window so she can see better", "Borrow a laptop from the accounting team"], a: 1 }
      ] },
    { id: 'u-L2-01-g4',
      lines: [
        ['M', "Did you hear back from Ms. Lin about the product presentation?"],
        ['F', "Yes. She asked if we could postpone it until next Wednesday. Her manager wants to attend, and he's away until Tuesday."],
        ['M', "That's actually good news. We could use the extra time to update the price list."],
        ['F', "True. But we'd better not change too much. Ms. Lin seemed happy with the first version."]],
      qs: [
        { id: 'u-L2-01-07', q: "Why was the presentation postponed?", opts: ["Because the price list was not ready", "Because Ms. Lin will be away on Wednesday", "So that Ms. Lin's manager can attend", "So that the man can prepare a new version"], a: 2 },
        { id: 'u-L2-01-08', q: "What does the woman mean when she says, \"We'd better not change too much\"?", opts: ["The client already likes what she has seen.", "The new price list is too expensive.", "They do not have enough time to make changes.", "The manager prefers a shorter presentation."], a: 0 }
      ] },
    { id: 'u-L2-01-g5',
      lines: [
        ['F', "Good morning, Green Leaf Clinic. How can I help you?"],
        ['M', "Hi, I have an appointment with Dr. Wu on Tuesday evening, but I just found out I have to attend a conference in Taichung that day. Could I change it?"],
        ['F', "Of course. Are you free during the day, or only after work?"],
        ['M', "I'm in meetings every morning this week, so it has to be after work. And I'd like to come in as soon as possible. My shoulder still hurts."]],
      chart: { cap: 'Dr. Wu: Open Times This Week', head: ['Day', 'Morning', 'Evening'], rows: [['Wednesday', '9:00', 'Full'], ['Thursday', '10:30', '7:00'], ['Friday', 'Full', '6:30'], ['Saturday', '11:00', 'Closed']] },
      qs: [
        { id: 'u-L2-01-09', q: "Look at the table. When will the man most likely see the doctor?", opts: ["Wednesday at 9:00", "Thursday at 10:30", "Friday at 6:30", "Thursday at 7:00"], a: 3 },
        { id: 'u-L2-01-10', q: "Why does the man need to change his appointment?", opts: ["His shoulder feels much better now.", "He will be away at a conference.", "He has meetings every evening.", "The clinic is closed on Tuesday."], a: 1 }
      ] },
    { id: 'u-L2-01-g6',
      lines: [
        ['M', "Hi, I booked a car online for three days. The name is David Lee."],
        ['F', "Let me check. Yes, a small car until Sunday. Full insurance is optional. Would you like to add it? It's NT$300 more per day."],
        ['M', "Hmm, my credit card already covers some of that. I'll skip it."],
        ['F', "All right. Just remember that the tank is full now, and it should be full when you return it. Otherwise, you'll have to pay a penalty."]],
      qs: [
        { id: 'u-L2-01-11', q: "Where does this conversation most likely take place?", opts: ["At a gas station", "At a parking lot", "At a car rental counter", "At a bank"], a: 2 },
        { id: 'u-L2-01-12', q: "What does the woman remind the man to do?", opts: ["Fill up the car before returning it", "Pay NT$300 for the insurance", "Return the car before Saturday", "Show his credit card at the gas station"], a: 0 }
      ] },
    { id: 'u-L2-01-g7',
      lines: [
        ['F', "Are you coming to the running club on Saturday? We're trying a new route along the river."],
        ['M', "I'd love to, but isn't that path really crowded on weekends? Last time I had to keep stopping for bikes."],
        ['F', "That's why we're starting at six. Hardly anyone is there that early."],
        ['M', "Six? Well, I guess the views will be worth it."]],
      qs: [
        { id: 'u-L2-01-13', q: "How does the man feel about the plan?", opts: ["He is worried the route is too long.", "He would rather run on a weekday.", "He thinks the river path is unsafe at night.", "He is willing to go despite the early start."], a: 3 }
      ] },
    { id: 'u-L2-01-g8',
      lines: [
        ['M', "I'm thinking of renting a monthly parking space near the office. Do you know how much it costs?"],
        ['F', "The one on Park Road is NT$4,000 a month. But honestly, have you tried the bus? Line 52 stops right outside our building."],
        ['M', "I know, but I often work overtime, and the last bus leaves at nine."],
        ['F', "Fair enough. Then paying for a parking space sounds sensible."]],
      qs: [
        { id: 'u-L2-01-14', q: "Why does the man prefer to drive?", opts: ["The bus stop is far from the office.", "He sometimes works after the buses stop.", "Parking near the office is cheap.", "Line 52 is often crowded in the morning."], a: 1 }
      ] },
    { id: 'u-L2-01-g9',
      lines: [
        ['F', "Paul, I was looking at the sales report you sent this morning. The numbers for March seem far too high."],
        ['M', "Really? I copied the data straight from our database."],
        ['F', "I think the database may have duplicate orders. Could you check with the accounting team before the report goes to the manager?"],
        ['M', "Sure. I'll ask them right after lunch."]],
      qs: [
        { id: 'u-L2-01-15', q: "What will the man probably do this afternoon?", opts: ["Send the report to the manager", "Enter the March orders again", "Check the figures with accounting", "Ask the woman to rewrite the report"], a: 2 }
      ] }
  ]
});
