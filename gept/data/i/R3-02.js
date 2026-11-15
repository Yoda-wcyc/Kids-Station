/* i-R3-02 閱讀理解 第 2 組（原創，B1 作者，2026-11-15；g2 兩篇對照） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'i-R3-02',
  title: '閱讀理解 2',
  names: ['Sunrise'],
  extra: ['marathon'],
  items: [
    { id: 'i-R3-02-g1',
      texts: [{ type: 'ad', title: 'Sunrise Bikes: Rent a Bike and Explore the River Path!',
        body: "We are open every day from 7 a.m. to 7 p.m. All bikes must be returned by 7 p.m., or you will pay NT$100 for each extra hour. Please bring an ID card. Children under 12 must ride with an adult. Helmets are free with every bike. On weekdays, all prices are 20% lower.",
        table: { head: ['Bike', 'For', 'Weekend Price (2 hours)', 'Weekend Price (All Day)'], rows: [
          ['City Bike', 'Ages 12 and up', 'NT$120', 'NT$300'],
          ['Kids Bike', 'Ages 6-11', 'NT$80', 'NT$200'],
          ['Electric Bike', 'Ages 16 and up', 'NT$250', 'NT$600'],
          ['Family Bike (2 seats)', 'One adult + one child', 'NT$200', 'NT$500']] } }],
      qs: [
        { id: 'i-R3-02-01', q: "Who can rent an Electric Bike?", opts: ["A ten-year-old riding alone", "A seventeen-year-old high school student", "Any child riding with an adult", "A fourteen-year-old with an ID card"], a: 1 },
        { id: 'i-R3-02-02', q: "How much does a City Bike cost for two hours on a Wednesday?", opts: ['NT$120', 'NT$100', 'NT$240', 'NT$96'], a: 3 },
        { id: 'i-R3-02-03', q: "What will happen if someone returns a bike at 8:30 p.m.?", opts: ["They will have to pay an extra fee.", "They will get a free helmet next time.", "They will not be able to rent a bike again.", "They will get 20% off the price."], a: 0 }
      ] },
    { id: 'i-R3-02-g2',
      texts: [
        { type: 'email', from: 'Ryan', to: 'Mia', title: 'Help at the City Marathon?',
          body: "Hi Mia,\nThe city marathon is on Sunday, December 7, and my running club needs volunteers for a water station near the 30-kilometer point. We'll hand out water and bananas to the runners and cheer for them. It's hard work, but it's a lot of fun, and every volunteer gets a free T-shirt and lunch. We need to be there at 6 a.m., because the fastest runners will pass us before eight. I know it's early, but my dad can pick you up on the way. Are you in?\nRyan" },
        { type: 'email', from: 'Mia', to: 'Ryan', title: 'Re: Help at the City Marathon?',
          body: "Hi Ryan,\nI'd love to help! I've never seen a marathon up close. Getting up early is no problem for me, since I get up at 5:30 every day to practice the violin. But I have a concert at 2 p.m. that day, so I'll have to leave by noon. Will that be OK? Also, thanks for the offer of a ride, but my mom works near the 30-kilometer point, so she can drop me off. Could you tell me what I should wear?\nMia" }],
      qs: [
        { id: 'i-R3-02-04', q: "What will volunteers at the water station do?", opts: ["Run part of the marathon", "Sell T-shirts to the runners", "Give food and drinks to the runners", "Cook lunch for the other volunteers"], a: 2 },
        { id: 'i-R3-02-05', q: "Why does Mia say no to the ride from Ryan's father?", opts: ["Her mother can take her there.", "She will go there by bike.", "She doesn't want to get up so early.", "Ryan's father has to leave by noon."], a: 0 },
        { id: 'i-R3-02-06', q: "What is the problem with Mia's plan?", opts: ["She can't arrive by 6 a.m.", "She has never done a marathon.", "She needs to practice the violin that morning.", "She cannot stay for the whole day."], a: 3 }
      ] },
    { id: 'i-R3-02-g3',
      texts: [{ type: 'article', title: 'Ugly Fruit, Good Food',
        body: "Every year, farmers in Taiwan throw away a lot of fruit and vegetables, not because they taste bad, but because they look strange. A carrot with two legs, a small apple with a brown spot, or a banana that is too curved is often not good enough for supermarkets. Shoppers simply pick the most beautiful ones.\nLast year, a small supermarket chain in Tainan decided to try something different. It opened an 'Ugly Corner' where these less perfect foods are sold at half price. At first, the manager worried that nobody would buy them. To her surprise, the corner was often empty by noon. Many customers were families trying to save money, but others said they simply wanted to stop wasting good food.\nFarmers are happy, too. 'Before, I had to throw away nearly a third of my tomatoes,' said one farmer. 'Now I can sell almost all of them.' The supermarket now plans to open Ugly Corners in ten more stores next year." }],
      qs: [
        { id: 'i-R3-02-07', q: "Why do farmers throw away some fruit and vegetables?", opts: ["They have gone bad.", "They do not look perfect.", "They are too expensive to sell.", "Supermarkets have too many already."], a: 1 },
        { id: 'i-R3-02-08', q: "How did the manager feel when the Ugly Corner first opened?", opts: ["Angry with the farmers", "Sure that it would work", "Worried that it would fail", "Sorry for the customers"], a: 2 },
        { id: 'i-R3-02-09', q: "What can we learn from the end of the article?", opts: ["The idea has been successful.", "The supermarket will close some stores.", "Farmers will grow fewer tomatoes.", "The prices in the Ugly Corner will go up."], a: 0 }
      ] },
    { id: 'i-R3-02-g4',
      texts: [{ type: 'notice', title: 'Bring Your Own Bowl Week: School Cafeteria',
        body: "To cut down on waste, our cafeteria will hold Bring Your Own Bowl Week from October 13 to October 17.\n- Students who bring their own bowl or lunch box will get a free fruit or a cup of soy milk.\n- Paper bowls will still be available, but each one will cost NT$5.\n- Please wash your bowl at home. The cafeteria sinks are for staff only.\n- Bowls must be at least 15 centimeters wide. Very small cups cannot be used for meals.\nThe class that brings the most bowls during the week will win a pizza party. Each class leader should count the bowls in their class every day and report the number to the student council office by 1 p.m." }],
      qs: [
        { id: 'i-R3-02-10', q: "What is the main purpose of the event?", opts: ["To sell more fruit and soy milk", "To raise money for a pizza party", "To teach students how to wash bowls", "To reduce waste in the cafeteria"], a: 3 },
        { id: 'i-R3-02-11', q: "A student forgets his bowl on Tuesday. What will happen?", opts: ["He cannot buy lunch that day.", "He will have to pay for a paper bowl.", "He can borrow a bowl from the staff.", "He will get a free cup of soy milk."], a: 1 },
        { id: 'i-R3-02-12', q: "What must class leaders do every day?", opts: ["Wash the bowls in the cafeteria", "Order pizza for the class", "Report the number of bowls by 1 p.m.", "Measure every bowl in the class"], a: 2 }
      ] },
    { id: 'i-R3-02-g5',
      texts: [{ type: 'story', title: 'The Borrowed Raincoat',
        body: "It started raining just as Hao left the library. He had no umbrella, and the bus stop was ten minutes away. As he stood at the door wondering what to do, an old man reading a newspaper looked up. 'Take this,' he said, holding out a yellow raincoat. 'I live upstairs. Bring it back whenever you can.'\nHao thanked him and ran to the bus stop. He meant to return the raincoat the next day, but exams started, and he forgot all about it. Two weeks later, he found it hanging behind his bedroom door. He felt terrible.\nThat afternoon, he went back to the library with the raincoat and a box of pineapple cakes. The librarian told him that the old man was in the hospital. Hao went to visit him. The man was surprised and happy to see him. 'I didn't think I'd see that coat again,' he laughed. 'But I'm gladder to see you.' After that, Hao visited him every Saturday, and the two became good friends." }],
      qs: [
        { id: 'i-R3-02-13', q: "Why did the old man give Hao the raincoat?", opts: ["Hao had no way to stay dry in the rain.", "Hao had asked him for help.", "The raincoat was too small for him.", "He wanted to sell it to Hao."], a: 0 },
        { id: 'i-R3-02-14', q: "Why did Hao feel terrible?", opts: ["He had lost the raincoat.", "He had failed his exams.", "He had missed the bus that day.", "He had not kept his promise."], a: 3 },
        { id: 'i-R3-02-15', q: "What does the old man mean when he says, 'I'm gladder to see you'?", opts: ["He wants Hao to buy him a new coat.", "Hao's visit means more to him than the coat.", "He would like more pineapple cakes.", "He thinks Hao should not visit him again."], a: 1 }
      ] }
  ]
});
