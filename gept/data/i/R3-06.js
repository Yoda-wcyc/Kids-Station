/* i-R3-06 閱讀理解 第 6 組（原創，B1 作者，2026-11-15；g2 兩篇對照） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'i-R3-06',
  title: '閱讀理解 6',
  names: ['Hillside'],
  extra: [],
  items: [
    { id: 'i-R3-06-g1',
      texts: [{ type: 'schedule', title: 'Hillside High School Festival: Saturday, November 29',
        body: "The festival is open to students, families, and neighbors. Entrance is free. Food tickets can be bought at the front gate (NT$10 each). Food stands will only accept tickets, not cash. If it rains, the Talent Show will move to the gym, and the Sports Games will be canceled.",
        table: { head: ['Time', 'Event', 'Place'], rows: [
          ['9:00-9:30', 'Opening Dance', 'Playground'],
          ['9:30-12:00', 'Class Food Stands', 'Front Garden'],
          ['10:00-11:30', 'Sports Games for Families', 'Playground'],
          ['1:00-3:00', 'Talent Show', 'Playground'],
          ['3:00-4:00', 'Prize Drawing', 'Main Hall']] } }],
      qs: [
        { id: 'i-R3-06-01', q: "How can visitors pay at the food stands?", opts: ["With food tickets only", "With cash or tickets", "With a student card", "With a credit card"], a: 0 },
        { id: 'i-R3-06-02', q: "Where will the Talent Show be held if it rains?", opts: ['On the playground', 'In the Main Hall', 'In the Front Garden', 'In the gym'], a: 3 },
        { id: 'i-R3-06-03', q: "Which event happens at the same time as the Class Food Stands?", opts: ["The Opening Dance", "The Talent Show", "The Sports Games", "The Prize Drawing"], a: 2 }
      ] },
    { id: 'i-R3-06-g2',
      texts: [
        { type: 'email', from: 'Daniel Huang', to: 'Easy Buy Customer Service', title: 'Wrong Item Received (Order No. 58213)',
          body: "Hello,\nOn November 2, I ordered a blue backpack (size L) from your website for my son's school trip. The package arrived yesterday, but inside was a black backpack in size S. It is much too small for him. The trip is on November 15, so I need the right backpack before then. Could you please send the correct one as soon as possible? I would also like to know how to return the black one. I don't want to pay for the return because it was not my mistake.\nThank you,\nDaniel Huang" },
        { type: 'email', from: 'Easy Buy Customer Service', to: 'Daniel Huang', title: 'Re: Wrong Item Received (Order No. 58213)',
          body: "Dear Mr. Huang,\nWe are very sorry for our mistake. We have checked, and the blue backpack in size L is available. It will be sent today by express delivery and should arrive within two days. You do not need to pay anything for the return. When the new backpack arrives, please give the black one to our delivery driver. To say sorry, we have also added NT$200 to your account. You can use it on your next order before the end of the year.\nBest regards,\nAmy Chen, Customer Service" }],
      qs: [
        { id: 'i-R3-06-04', q: "What was wrong with Mr. Huang's order?", opts: ["It arrived after the school trip.", "He got the wrong color and size.", "The backpack was broken.", "He was charged twice for it."], a: 1 },
        { id: 'i-R3-06-05', q: "How will Mr. Huang return the black backpack?", opts: ["Hand it to the driver who brings the new one", "Take it to the nearest post office", "Send it back by express delivery", "Bring it to the store before the trip"], a: 0 },
        { id: 'i-R3-06-06', q: "What will Mr. Huang get to make up for the mistake?", opts: ["A free backpack for his son", "All his money back", "Money off his next order", "A free school trip"], a: 2 }
      ] },
    { id: 'i-R3-06-g3',
      texts: [{ type: 'article', title: 'Old Uniforms, New Friends',
        body: "School uniforms in Taiwan can be expensive, and students grow quickly. Many uniforms are worn for only a year or two before they become too small. At one high school in Chiayi, a group of students decided to do something about it.\nThey started a 'Uniform Exchange Day' at the beginning of each term. Students who have uniforms that no longer fit bring them to the school hall. The student volunteers wash, check, and sort them by size. Then any student can take what they need for free. In the first year, more than 600 pieces of clothing found new owners.\nThe idea has helped families save money, but the organizers say it has done more than that. 'Older students often leave notes in the pockets for the new owners,' said one volunteer. 'Things like good luck on your exams or try the noodles at the shop across the street.' Some first-year students have even found the writers of the notes and become friends with them. Now, three other schools in the city have started their own exchange days." }],
      qs: [
        { id: 'i-R3-06-07', q: "Why did the students start Uniform Exchange Day?", opts: ["Their school wanted new uniforms.", "They wanted to sell old clothes.", "They needed money for a school trip.", "Uniforms are costly and quickly become too small."], a: 3 },
        { id: 'i-R3-06-08', q: "What do the volunteers do with the uniforms?", opts: ["They send them to other cities.", "They clean them and put them in order by size.", "They sell them at a low price.", "They give them only to first-year students."], a: 1 },
        { id: 'i-R3-06-09', q: "What is one unexpected result of the exchange day?", opts: ["Students have made new friends through notes.", "The school stopped wearing uniforms.", "The noodle shop gives students free food.", "Students' grades have gone up."], a: 0 }
      ] },
    { id: 'i-R3-06-g4',
      texts: [{ type: 'ad', title: 'Room for Rent: Near Hillside University',
        body: "A quiet single room in a three-bedroom apartment, ten minutes on foot from the university's main gate. The room comes with a bed, a desk, a closet, and air conditioning. The kitchen, bathroom, and living room are shared with two other female students.\nRent: NT$7,500 a month, including Internet. Electricity is not included.\nWe are looking for a female student who doesn't smoke. No pets, please, because one of us gets sick around animals. Guests are welcome during the day, but no overnight guests. We take turns cleaning the shared areas every week.\nThe room will be free from August 1. Please call Lisa at 0933-222-111 after 6 p.m. to make an appointment to see it." }],
      qs: [
        { id: 'i-R3-06-10', q: "Which of these costs is NOT included in the rent?", opts: ["Internet", "Using the kitchen", "Electricity", "Using the living room"], a: 2 },
        { id: 'i-R3-06-11', q: "Who would most likely be able to rent the room?", opts: ["A male student who studies at night", "A female student with a pet cat", "A female student who smokes", "A female student who does not smoke"], a: 3 },
        { id: 'i-R3-06-12', q: "What should people do if they want to see the room?", opts: ["Visit the apartment on August 1", "Call Lisa in the evening", "Email the university office", "Go to the main gate after 6 p.m."], a: 1 }
      ] },
    { id: 'i-R3-06-g5',
      texts: [{ type: 'story', title: 'The Last Kilometer',
        body: "Jason's grandfather had run a long-distance race every year until he turned seventy. Now he was eighty and walked with a stick, but he still watched every race on TV. When Jason signed up for his first 10-kilometer race, Grandpa was more excited than he was.\nOn the morning of the race, Grandpa sat in a chair near the finish line. Jason started too fast, like many beginners. By the eighth kilometer, his legs felt like stone, and he slowed to a walk. Runners passed him one after another. He thought about stopping.\nThen he remembered something Grandpa always said: 'The last kilometer is run with your heart, not your legs.' Jason started running again, slowly at first, then faster. As he turned the final corner, he saw Grandpa standing up from his chair, holding his stick in the air and shouting his name.\nJason finished near the back of the race. His time was not good, but when Grandpa hugged him, it didn't matter at all." }],
      qs: [
        { id: 'i-R3-06-13', q: "What mistake did Jason make in the race?", opts: ["He started running too quickly.", "He forgot to bring water.", "He took the wrong road.", "He did not practice at all."], a: 0 },
        { id: 'i-R3-06-14', q: "What helped Jason keep going?", opts: ["Other runners cheering for him", "Seeing the finish line", "His grandfather's words", "A drink at the water station"], a: 2 },
        { id: 'i-R3-06-15', q: "What can we learn from the end of the story?", opts: ["Jason won a prize for his time.", "Grandpa was disappointed in Jason.", "Jason decided to stop running.", "Finishing with Grandpa's support meant more than his time."], a: 3 }
      ] }
  ]
});
