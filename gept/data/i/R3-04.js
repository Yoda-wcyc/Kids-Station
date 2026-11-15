/* i-R3-04 閱讀理解 第 4 組（原創，B1 作者，2026-11-15；g2 兩篇對照） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'i-R3-04',
  title: '閱讀理解 4',
  names: ['Corner', 'Zhongshan'],
  extra: ['tutor'],
  items: [
    { id: 'i-R3-04-g1',
      texts: [{ type: 'menu', title: 'Corner Cafe: Afternoon Menu (2:00-5:00 p.m.)',
        body: "Afternoon Deal: Choose any drink and any cake, and pay NT$30 less than the total price. Customers who order hot tea can get more tea for free. Students with ID get one free cookie with any order. Sorry, we do not accept credit cards.",
        table: { head: ['Drinks', 'Price', 'Cakes', 'Price'], rows: [
          ['Hot Tea', 'NT$70', 'Cheese Cake', 'NT$110'],
          ['Coffee', 'NT$90', 'Chocolate Cake', 'NT$120'],
          ['Fresh Orange Juice', 'NT$100', 'Banana Bread', 'NT$80'],
          ['Milk Tea', 'NT$85', 'Lemon Cake', 'NT$95']] } }],
      qs: [
        { id: 'i-R3-04-01', q: "How much will a customer pay for coffee and chocolate cake at 3 p.m.?", opts: ['NT$210', 'NT$120', 'NT$240', 'NT$180'], a: 3 },
        { id: 'i-R3-04-02', q: "Which drink can a customer get more of for free?", opts: ['Coffee', 'Hot Tea', 'Milk Tea', 'Orange Juice'], a: 1 },
        { id: 'i-R3-04-03', q: "What can we learn from the menu?", opts: ["Customers cannot pay by credit card.", "The Afternoon Deal is available all day.", "Every customer gets a free cookie.", "Cakes are cheaper than drinks."], a: 0 }
      ] },
    { id: 'i-R3-04-g2',
      texts: [
        { type: 'ad', title: 'Wanted: English Tutor for Two Children',
          body: "We are looking for a high school or university student to help our two children, ages 8 and 10, with their English homework. Lessons will be at our home near Zhongshan MRT Station on Tuesday and Thursday evenings from 6:30 to 8:00. Pay: NT$400 per hour. The tutor should be patient, good with children, and able to speak English well. Experience is not necessary, but it is a plus. Please email Mrs. Lee with a short introduction and tell us why you would be a good tutor." },
        { type: 'email', from: 'Kelly', to: 'Mrs. Lee', title: 'English Tutor Position',
          body: "Dear Mrs. Lee,\nMy name is Kelly Wang, and I am a second-year student at a high school in Taipei. I saw your ad on the school website, and I would like to apply for the tutor position. I lived in Canada for four years as a child, so I can speak English well. I have never worked as a tutor, but I often help my little cousins with their homework, and they say I make learning fun. My school is only two stops from Zhongshan Station. I can work on Tuesdays, but on Thursdays I have volleyball practice until seven. Could the Thursday lesson start at 7:30 instead?\nThank you for your time.\nKelly Wang" }],
      qs: [
        { id: 'i-R3-04-04', q: "How much will the tutor earn for each lesson?", opts: ['NT$600', 'NT$400', 'NT$800', 'NT$1,200'], a: 0 },
        { id: 'i-R3-04-05', q: "Why does Kelly think she can help the children?", opts: ["She has worked as a tutor for years.", "She studies English at university.", "She is good with children and speaks English well.", "She lives near the family's home."], a: 2 },
        { id: 'i-R3-04-06', q: "What does Kelly ask Mrs. Lee?", opts: ["If she can bring her cousins to the lessons", "If one lesson can begin later", "If she can be paid more each hour", "If the lessons can be at her school"], a: 1 }
      ] },
    { id: 'i-R3-04-g3',
      texts: [{ type: 'article', title: 'Talking with Their Hands',
        body: "At a junior high school in Taoyuan, students do something unusual every Wednesday morning: they learn sign language. The idea started two years ago, when a deaf student named Yi-chen joined the school. At first, she could only talk with others by writing on paper or through a helper who came to her classes. Many classmates wanted to be her friends, but they didn't know how to talk to her.\nHer teacher, Mr. Ko, decided to invite a sign language teacher to the school. Now, every class spends twenty minutes a week learning basic signs, such as greetings, numbers, and words for food. Yi-chen often helps the teacher show the signs.\nThe results have been better than anyone expected. Yi-chen now eats lunch with a big group of friends and has joined the school dance team. Other students say that learning sign language has made them more aware of people who are different from them. 'It's like learning a new language and a new way of thinking at the same time,' said one ninth grader." }],
      qs: [
        { id: 'i-R3-04-07', q: "Why did the school start teaching sign language?", opts: ["The students asked for a new language class.", "A sign language teacher wanted a job there.", "The school wanted to win a prize.", "To help students talk with a deaf classmate."], a: 3 },
        { id: 'i-R3-04-08', q: "How often do students learn sign language?", opts: ["Once a week", "Every school day", "Twice a month", "Only during lunch"], a: 0 },
        { id: 'i-R3-04-09', q: "What does the ninth grader mean?", opts: ["Sign language is harder than English.", "Learning sign language changes how people see others.", "Students should learn many languages at once.", "Sign language is only useful at school."], a: 1 }
      ] },
    { id: 'i-R3-04-g4',
      texts: [{ type: 'notice', title: 'History Museum: Opening Hours During the Chinese New Year',
        body: "Dear visitors,\nDuring the Chinese New Year holiday, our opening hours will change as follows:\n- New Year's Eve (February 16): open 9 a.m. to 1 p.m.\n- February 17 to 18: closed\n- February 19 to 22: open 9 a.m. to 8 p.m. (three hours longer than usual)\nFrom February 19 to 22, all visitors under 18 can enter for free. Every afternoon at 3 p.m., there will be a special show of traditional lion dancing in the front square. The museum gift shop will also sell red envelopes and paper art made by local artists.\nThe museum cafe will be closed for the whole holiday. Visitors are welcome to bring their own snacks, but food may only be eaten in the garden area." }],
      qs: [
        { id: 'i-R3-04-10', q: "When is the museum closed?", opts: ["On February 16", "On February 17 and 18", "On February 19 to 22", "Every afternoon at 3 p.m."], a: 1 },
        { id: 'i-R3-04-11', q: "What time does the museum usually close?", opts: ['1 p.m.', '8 p.m.', '3 p.m.', '5 p.m.'], a: 3 },
        { id: 'i-R3-04-12', q: "A family wants to eat lunch at the museum on February 20. What should they do?", opts: ["Buy lunch at the museum cafe", "Eat in the front square during the show", "Bring their own food and eat in the garden", "Buy red envelopes at the gift shop"], a: 2 }
      ] },
    { id: 'i-R3-04-g5',
      texts: [{ type: 'story', title: "Grandma's Notebook",
        body: "After Grandma moved into our apartment, she spent every afternoon in the kitchen. Her food was the best I had ever eaten, but whenever I asked how she made something, she just said, 'A little of this, a little of that.'\nOne day, I decided to find out. I followed her around the kitchen with a notebook. When she added a 'little' salt, I measured it. When she cooked the fish 'until it smelled right,' I checked the clock. It was not easy. Grandma moved fast, and she often changed things depending on the weather or her mood.\nAfter six months, my notebook was full of her dishes, written step by step. I typed them up, added photos, and printed a small book for each family member at New Year. When Grandma opened hers, she was quiet for a long time. Then she said, 'I never thought anyone wanted to remember these.'\nLast week, my aunt in Japan sent me a photo. She had cooked Grandma's fish soup for the first time. Under the photo, she wrote, 'It tastes just like home.'" }],
      qs: [
        { id: 'i-R3-04-13', q: "Why did the writer follow Grandma with a notebook?", opts: ["To learn exactly how she cooked", "To help her clean the kitchen", "To write a story for school", "To check if she was feeling well"], a: 0 },
        { id: 'i-R3-04-14', q: "Why was it hard to write down how Grandma cooked?", opts: ["Grandma refused to cook in front of others.", "Grandma did not have the right tools.", "Grandma cooked quickly and often changed things.", "Grandma only cooked once a month."], a: 2 },
        { id: 'i-R3-04-15', q: "How did Grandma probably feel when she opened the book?", opts: ["Angry", "Touched", "Bored", "Worried"], a: 1 }
      ] }
  ]
});
