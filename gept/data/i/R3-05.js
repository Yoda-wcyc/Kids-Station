/* i-R3-05 閱讀理解 第 5 組（原創，B1 作者，2026-11-15；g2 兩篇對照） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'i-R3-05',
  title: '閱讀理解 5',
  names: ['Maple'],
  extra: ['massage'],
  items: [
    { id: 'i-R3-05-g1',
      texts: [{ type: 'table', title: 'Maple Town Hall: Rooms for Rent',
        body: "Rooms can be rented by the hour. Residents of Maple Town pay half price. Please book at least three days before you need the room. Groups must clean the room after use, or NT$500 will be charged. Food is allowed only in the Party Room.",
        table: { head: ['Room', 'Size', 'Good For', 'Price per Hour'], rows: [
          ['Music Room', '15 people', 'Band practice (piano included)', 'NT$400'],
          ['Meeting Room', '20 people', 'Classes, meetings', 'NT$300'],
          ['Dance Hall', '40 people', 'Dance, yoga', 'NT$600'],
          ['Party Room', '30 people', 'Birthday parties, family events', 'NT$500']] } }],
      qs: [
        { id: 'i-R3-05-01', q: "A group of 25 people wants to have a birthday party with cake. Which room should they book?", opts: ['Meeting Room', 'Party Room', 'Dance Hall', 'Music Room'], a: 1 },
        { id: 'i-R3-05-02', q: "A Maple Town resident rents the Dance Hall for two hours. How much will she pay?", opts: ['NT$1,200', 'NT$300', 'NT$600', 'NT$900'], a: 2 },
        { id: 'i-R3-05-03', q: "What happens if a group does not clean the room?", opts: ["They cannot book a room again.", "They must clean another room next time.", "They will get half price next time.", "They will have to pay an extra NT$500."], a: 3 }
      ] },
    { id: 'i-R3-05-g2',
      texts: [
        { type: 'chat', title: 'Brother and Sister',
          body: "Wei: Mom's birthday is next Saturday! What should we get her?\nSue: She keeps saying her feet hurt after work. Maybe some comfortable shoes?\nWei: Good idea, but we don't know her size. She'll find out if we ask.\nSue: Hmm. What about a foot massage? I saw an ad for a place near the MRT.\nWei: Perfect. How much is it?\nSue: I'll send you the ad. We have NT$1,500 together.\nWei: OK. Let's book it for Saturday afternoon, so we can have dinner together after." },
        { type: 'ad', title: 'Happy Feet Massage Center',
          body: "Feel brand-new after a long day! 30 minutes: NT$600. 60 minutes: NT$1,000. 90 minutes: NT$1,400. Special offer: Buy a gift card for someone you love and get 10% off. Open 11 a.m. to 10 p.m. every day except Monday. Two minutes from Exit 1 of Market Street MRT Station." }],
      qs: [
        { id: 'i-R3-05-04', q: "Why didn't Wei and Sue buy shoes for their mother?", opts: ["They did not know what size she wears.", "Their mother already has many shoes.", "Shoes are too expensive for them.", "The shoe store is closed on Saturday."], a: 0 },
        { id: 'i-R3-05-05', q: "If they buy a gift card for a 90-minute massage, how much will they pay?", opts: ['NT$1,400', 'NT$1,260', 'NT$1,500', 'NT$900'], a: 1 },
        { id: 'i-R3-05-06', q: "What do Wei and Sue plan to do after the massage?", opts: ["Go shopping near the MRT", "Buy their mother new shoes", "Go to work with their mother", "Eat dinner with their mother"], a: 3 }
      ] },
    { id: 'i-R3-05-g3',
      texts: [{ type: 'article', title: 'Give Your Eyes a Break',
        body: "Doctors in Taiwan are worried about children's eyes. More and more students need glasses, and many of them get their first pair before they turn ten. One big reason is that children spend hours looking at screens and books up close, and too little time outdoors.\nEye doctors suggest a simple habit called the '20-20-20 rule.' Every 20 minutes, look at something about 20 feet (about six meters) away for 20 seconds. This gives the small muscles in your eyes a chance to relax.\nSpending time outside is also important. Sunlight seems to help young eyes grow in a healthy way. Some studies have found that children who play outside for two hours a day are less likely to need glasses, even if they also read a lot. That's why some schools now send students outside during every break, rain or shine. So the next time your parents tell you to stop playing games and go outside, they may be right." }],
      qs: [
        { id: 'i-R3-05-07', q: "According to the article, what is one reason more children need glasses?", opts: ["They eat too much sugar.", "They sleep too late at night.", "They spend little time outdoors.", "They play too many sports."], a: 2 },
        { id: 'i-R3-05-08', q: "What does the 20-20-20 rule tell people to do?", opts: ["Look at something far away for a short time", "Read for 20 minutes and then sleep", "Play outside for 20 minutes a day", "Close their eyes for 20 minutes"], a: 0 },
        { id: 'i-R3-05-09', q: "What does 'rain or shine' most likely mean?", opts: ["Only when it is sunny", "In any kind of weather", "After it stops raining", "Only in the morning"], a: 1 }
      ] },
    { id: 'i-R3-05-g4',
      texts: [{ type: 'notice', title: 'Silver Cloud Trail: Important Information',
        body: "Because part of the trail was washed away during the last typhoon, the path between the Stone Rest Area and the Top View Point is closed until further notice. Hikers may still walk from the main entrance to the Stone Rest Area (about 2.5 kilometers, 1 hour one way).\nPlease follow these rules:\n- Stay on the trail at all times.\n- Do not feed the monkeys. They can become dangerous when they expect food.\n- Take all your trash back down with you. There are no trash cans on the trail.\n- Hikers must leave the trail by 5 p.m. The gate is locked at 5:30.\nIn an emergency, call the park office at 03-456-7890. There is no phone signal after the first kilometer, so please plan carefully." }],
      qs: [
        { id: 'i-R3-05-10', q: "Why is part of the trail closed?", opts: ["There are too many monkeys.", "The trash cans were removed.", "The rest area is being built.", "The typhoon damaged the trail."], a: 3 },
        { id: 'i-R3-05-11', q: "What is the farthest place hikers can reach right now?", opts: ["The Top View Point", "The park office", "The Stone Rest Area", "The end of the first kilometer"], a: 2 },
        { id: 'i-R3-05-12', q: "Why should hikers plan carefully?", opts: ["Their phones may not work on most of the trail.", "The trail is longer than it looks.", "The gate is locked in the morning.", "The monkeys often steal phones."], a: 0 }
      ] },
    { id: 'i-R3-05-g5',
      texts: [{ type: 'story', title: 'The Wrong Present',
        body: "Every December, Max's class did a gift exchange. Each student picked a name from a box and bought a present for that person, with a limit of NT$300. This year, Max picked Nina, the quiet girl who sat in the back and always had her nose in a book.\nMax had no idea what to buy. He asked her best friend, who told him that Nina loved space. So Max saved his money and bought a small model of the planets. On the day of the exchange, Nina opened it, looked at it for a moment, and said a polite 'thank you.' Max felt his face go red. She did not look excited at all.\nAfter class, Nina came to him. 'I'm sorry I didn't say more,' she said. 'I was just surprised. I already have this model. My dad bought it for me last year.' Max wanted to disappear. Then she smiled. 'But now I can give one to my little brother. He's always wanted to touch mine.' The next day, she lent Max her favorite book about the stars." }],
      qs: [
        { id: 'i-R3-05-13', q: "How did Max decide what to buy?", opts: ["He chose something he liked himself.", "He asked Nina's friend for help.", "He asked Nina directly.", "He picked the most expensive gift."], a: 1 },
        { id: 'i-R3-05-14', q: "Why did Nina look surprised when she opened the gift?", opts: ["She already had the same model.", "She did not like space at all.", "The gift was broken.", "The gift cost more than NT$300."], a: 0 },
        { id: 'i-R3-05-15', q: "What does the ending of the story show?", opts: ["Max will never join a gift exchange again.", "Nina wants Max to buy her another gift.", "Nina's brother broke the model.", "The gift still brought Max and Nina closer."], a: 3 }
      ] }
  ]
});
