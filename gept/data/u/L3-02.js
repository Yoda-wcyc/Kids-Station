/* u-L3-02 談話 第 2 組（第二階段作者 A，2026-11-21）題材：A 機場廣播航班延誤換登機門；B 資訊部說明兩步驟登入；C 導遊在遊覽車上說明湖區行程；D 主管宣布辦公室改用預約座位；E 連假高速公路路況廣播；F 廣播節目談旅途中用公共網路的風險 */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'u-L3-02',
  title: '談話 2',
  names: [],
  extra: [],
  items: [
    { id: 'u-L3-02-g1', spk: 'F', intro: "Listen to an announcement at an airport.",
      say: "Good afternoon. This is an announcement for passengers on the 3:15 flight to Bangkok. Because our crew has found a technical problem with the aircraft, this flight will now leave at 4:50, and it will board from Gate D7 instead of the gate shown on your boarding pass. We understand that this delay may affect passengers with connecting flights. If you need to change a connection, please speak to our staff at the transfer desk near Gate D2 as soon as possible. All passengers on this flight will also receive a ticket for a free meal, which can be used at any restaurant in the departure area. Please show your boarding pass at the service counter to collect it. We will make another announcement thirty minutes before boarding begins. We are sorry for the delay, and thank you for your understanding.",
      chart: { cap: 'Departures', head: ['Flight', 'To', 'Time', 'Gate'], rows: [['612', 'Bangkok', '1:40', 'A5'], ['618', 'Bangkok', '3:15', 'B3'], ['620', 'Tokyo', '3:15', 'B5'], ['625', 'Bangkok', '5:30', 'C2']] },
      qs: [
        { id: 'u-L3-02-01', q: "Look at the chart. Which flight has been delayed?", opts: ["Flight 612", "Flight 618", "Flight 620", "Flight 625"], a: 1 },
        { id: 'u-L3-02-02', q: "Where should passengers go if they need to change a connecting flight?", opts: ["To Gate B3", "To Gate D7", "To the service counter", "To the transfer desk near Gate D2"], a: 3 },
        { id: 'u-L3-02-03', q: "What will passengers on the delayed flight receive?", opts: ["A ticket for a free meal", "A free hotel room", "A seat in a higher class", "A new boarding pass"], a: 0 }
      ] },
    { id: 'u-L3-02-g2', spk: 'M', intro: "Listen to a talk at a staff meeting.",
      say: "Thanks for having me. I'm from the IT department, and I'll keep this short. Last month, three employees received fake emails that looked like they came from our bank, and one of them almost gave away his password. Luckily, he checked with us first. Because of this, starting next month, everyone will need to log in in two steps. After you type your password, a code will be sent to your phone, and you'll enter that code as well. It adds about ten seconds, but it makes it much harder for anyone else to get into your account and steal our data. I know some of you don't like using your personal phone for work. If that's the case, we can lend you a small device that creates the codes instead. Just fill out the form on our page by Friday. And remember, we will never ask for your password by email.",
      qs: [
        { id: 'u-L3-02-04', q: "Why is the company changing the way staff log in?", opts: ["Employees keep forgetting their passwords.", "The old system was too slow.", "Some staff received fake messages.", "The bank asked all companies to change."], a: 2 },
        { id: 'u-L3-02-05', q: "What can employees do if they do not want to use their own phones?", opts: ["Borrow a device that makes codes", "Keep logging in the old way", "Ask IT to send codes by email", "Use a colleague's phone"], a: 0 },
        { id: 'u-L3-02-06', q: "What does the speaker say the IT department will never do?", opts: ["Lend devices to employees", "Send codes to personal phones", "Change the way staff log in again", "Ask for passwords through email"], a: 3 }
      ] },
    { id: 'u-L3-02-g3', spk: 'F', intro: "Listen to a tour guide on a bus.",
      say: "Good morning, everyone, and welcome to day two of our tour. In about forty minutes, we'll arrive at the lake. The boat ride leaves at ten sharp, so please don't wander off once we get there. After the boat ride, you'll have free time until one o'clock to explore the old street and have lunch. I'd recommend the tea shops near the stone bridge, but I'd avoid the ones right next to the parking lot. Their prices are much higher than they should be. In the afternoon, we'll drive up into the mountains to see the tea farms, where the views are breathtaking. It can get quite cool up there, even in summer, so bring a jacket with you when you leave the bus. One more thing. Yesterday, two members of our group nearly missed the bus. Please be punctual and make sure you're back by one, or we'll have to leave without you.",
      qs: [
        { id: 'u-L3-02-07', q: "What will the group do first when they arrive at the lake?", opts: ["Have lunch on the old street", "Take a boat ride", "Visit the tea farms", "Look for a parking space"], a: 1 },
        { id: 'u-L3-02-08', q: "What does the guide say about the shops by the parking lot?", opts: ["They close at one o'clock.", "They sell the best tea in the area.", "They charge too much.", "They are only open in summer."], a: 2 },
        { id: 'u-L3-02-09', q: "Why does the guide mention what happened yesterday?", opts: ["To remind people to come back on time", "To explain why the tour is shorter", "To thank the driver for waiting", "To warn people about the cold weather"], a: 0 }
      ] },
    { id: 'u-L3-02-g4', spk: 'F', intro: "Listen to a manager speaking to her team.",
      say: "I have some news about our office. Since about half of you now spend two or three days a week visiting clients, many desks are empty most of the time. So from June, we're going to stop giving everyone a fixed desk. Instead, you'll book a desk online the day before you come in. Each of you will get a locker for your personal things, and there will be more quiet rooms for phone calls. This should make the office much more flexible. I know this is a big change, and some of you may feel you're losing your own space. That's understandable. So we'll try it for three months first, and then I'll ask for your feedback before we decide whether to keep it.",
      qs: [
        { id: 'u-L3-02-10', q: "Why is the company making this change?", opts: ["The office is moving to a smaller building.", "Too many staff make phone calls at their desks.", "Staff have asked for more quiet rooms.", "Many desks are not being used most of the time."], a: 3 },
        { id: 'u-L3-02-11', q: "What will happen after three months?", opts: ["Every employee will get a new desk.", "Staff will be asked for their opinions.", "The lockers will be taken away.", "The office will close in June."], a: 1 }
      ] },
    { id: 'u-L3-02-g5', spk: 'M', intro: "Listen to a traffic report on the radio.",
      say: "And now for the holiday traffic. As expected, the highway heading south is already very crowded this morning, especially between Taoyuan and Hsinchu, where an accident earlier has closed one lane. Motorists should expect delays of up to an hour in that area. If you haven't left yet, you might want to wait until after two this afternoon, when traffic usually gets lighter. For those of you heading east, the mountain route is open, but heavy rain is expected later today, so please drive slowly and leave plenty of space between cars. Also, the rest area near Hsinchu is already full, so drivers are asked not to stop there. That's all for now. We'll be back with another update at eleven.",
      qs: [
        { id: 'u-L3-02-12', q: "Why has one lane been closed?", opts: ["Repair work is being done on the highway.", "Heavy rain has fallen in the mountains.", "There was an accident earlier.", "Too many cars are heading east."], a: 2 },
        { id: 'u-L3-02-13', q: "What does the speaker suggest for people who have not left yet?", opts: ["Wait until later in the afternoon", "Take the mountain route instead", "Stop at the rest area near Hsinchu", "Listen for an update at two"], a: 0 }
      ] },
    { id: 'u-L3-02-g6', spk: 'F', intro: "Listen to part of a radio program.",
      say: "When you're traveling, free internet at a café or an airport can feel like a gift. But many people don't realize how easily other users on the same network can see what they're doing. My advice is simple. First, check the exact name of the network with the staff. Dishonest people sometimes create a network with a similar name, hoping you'll connect to it by mistake. Second, never do online banking or shopping on a public network, since your payment details could be stolen. If you really have to, use your phone's own data instead. It might cost a little more, but it's far safer. Finally, turn off the setting that lets your phone join networks automatically. It's convenient, but it means your phone may connect to places you'd never choose. After the break, I'll answer some of your questions.",
      qs: [
        { id: 'u-L3-02-14', q: "Why should listeners check the network name with staff?", opts: ["Staff can give them a faster connection.", "The network may need a password.", "Some cafés charge for internet use.", "There may be a fake network with a similar name."], a: 3 },
        { id: 'u-L3-02-15', q: "What does the speaker recommend for online shopping while traveling?", opts: ["Shopping only at airports", "Using mobile data rather than public internet", "Turning on automatic connections", "Asking the café staff for help"], a: 1 }
      ] }
  ]
});
