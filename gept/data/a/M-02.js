/* a-M-02 高級初試模擬考 第 2 回（原創，2026-11-15；人物、地名、數據為虛構） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'a-M-02',
  title: '模擬考 2',
  names: ['Northam', 'Lakeport', 'Eastfield', 'Riverside', 'Gulf'],
  extra: ['mackerel', 'quorum', 'rewilding', 'rewilded', 'sensor', 'scout', 'colony', 'honeybee', 'earworm', 'courtyard'],
  parts: {
    L1: {
      items: [
        { id: 'a-M-02-L1-01', lines: [
          ['F', "How did your observing nights at the mountain telescope go?"],
          ['M', "Badly. Out of five nights, four were completely cloudy, and on the fifth it was too windy to open the roof."],
          ['F', "So you'll have to apply for time again next year?"],
          ['M', "Luckily not. The telescope center has an arrangement where staff collect the data for you on clear nights later in the season. I just send them instructions."]],
          q: "How will the man obtain his data?",
          opts: ["He will apply for observing time next year.", "He will use data from another telescope.", "Staff will carry out the observations for him.", "He will return to the mountain next month."], a: 2 },
        { id: 'a-M-02-L1-02', lines: [
          ['M', "Starting next month, we're removing the small plastic bottles of shampoo from all guest rooms."],
          ['F', "Some guests will complain. They like taking them home."],
          ['M', "Perhaps, but we throw away thousands of half-used bottles every week. Large containers fixed to the shower wall will replace them."],
          ['F', "Then we should make sure the containers look clean and well made, or guests will assume we're just cutting costs."]],
          q: "What does the woman think is important?",
          opts: ["The new containers should look high in quality.", "Guests should be allowed to take bottles home.", "The change should be delayed for several months.", "Staff should explain the costs to guests."], a: 0 },
        { id: 'a-M-02-L1-03', spk: 'F', say: "Good morning, everyone, and welcome to the second day of the conference. Please note one change to the program. Because of the very large number of people who have registered for the afternoon session on water policy, it will move from Room 204 to the main hall downstairs. The session will start at two o'clock as planned. Since the main hall is also being used for lunch, we ask everyone to leave the hall by one thirty so that staff can prepare it.",
          q: "Why has the session been moved?",
          opts: ["Room 204 is needed for lunch.", "The speaker asked for a larger screen.", "The session will now start later.", "More people want to attend than expected."], a: 3 },
        { id: 'a-M-02-L1-04', lines: [
          ['M', "Some of my students' essays are suddenly full of perfect grammar but very strange word choices."],
          ['F', "Online translation, probably. They write in Chinese and then translate."],
          ['M', "Should I ban it?"],
          ['F', "I doubt a ban would work. I've had more success asking students to give a short spoken summary of their essay as well. If they can't explain their argument in their own words, it shows immediately."]],
          q: "What does the woman recommend?",
          opts: ["Banning the use of translation software.", "Checking students' understanding through speaking.", "Asking students to write their essays in class.", "Grading grammar less strictly than before."], a: 1 },
        { id: 'a-M-02-L1-05', lines: [
          ['F', "Since we moved to the open office, I've been getting almost nothing done before lunch."],
          ['M', "Too much noise?"],
          ['F', "It's not the noise exactly. It's that everyone can see me, so people keep stopping by with quick questions."],
          ['M', "Some teams have started using a simple signal. If you wear headphones, it means don't interrupt unless it's urgent."]],
          q: "What is the woman's main problem?",
          opts: ["Colleagues keep interrupting her with questions.", "The office is too loud for phone calls.", "She has to start work earlier than before.", "She cannot find a quiet room for meetings."], a: 0 },
        { id: 'a-M-02-L1-06', spk: 'M', say: "Engineers in a northern city have begun replacing part of the stone in road surfaces with crushed recycled glass. Early tests show that the glass roads are just as strong as ordinary ones, and they reflect more light at night, making them easier for drivers to see. The main challenge is supply. The city collects far less glass than the program would need, so officials plan to ask nearby towns to send theirs.",
          q: "What problem does the program face?",
          opts: ["The glass roads are weaker than ordinary ones.", "Drivers find the roads too bright at night.", "There is not enough glass available locally.", "Nearby towns oppose the use of glass."], a: 2 },
        { id: 'a-M-02-L1-07', lines: [
          ['F', "Mr. Chen's knee isn't improving as quickly as it should."],
          ['M', "Is he doing his exercises at home?"],
          ['F', "He says he is, but his muscles tell a different story. I think he finds them boring."],
          ['M', "We could try the software the clinic tested last spring. It turns the exercises into short games and sends us a record of each session."],
          ['F', "That would at least show us whether he's actually doing them."]],
          q: "What is one advantage of the software, according to the speakers?",
          opts: ["It reduces the number of exercises needed.", "It allows patients to skip visits to the clinic.", "It removes the need for a trained therapist.", "It lets them check whether the exercises are done."], a: 3 },
        { id: 'a-M-02-L1-08', lines: [
          ['M', "We collected nearly 300 kilograms of trash at the beach clean-up on Sunday."],
          ['F', "Mostly plastic bottles, I suppose?"],
          ['M', "Actually, by weight, most of it was old fishing nets and ropes. They're heavy and very hard to pull out of the sand."],
          ['F', "Then next time we should contact the fishing association. If they understand the scale of the problem, they might help us deal with it at the source."]],
          q: "What does the woman suggest?",
          opts: ["Asking more volunteers to join the next clean-up.", "Working with the people who use the nets.", "Collecting only plastic bottles in future.", "Holding the clean-up on a different beach."], a: 1 },
        { id: 'a-M-02-L1-09', spk: 'F', say: "In this part of the course, we'll look at how changes in the price of books changed who read them. Until the 1930s, most new books were printed with hard covers and cost about as much as a worker earned in a day. When publishers began selling serious novels with paper covers at a fraction of the price, and placed them in train stations and ordinary shops, reading stopped being a luxury. We'll consider what this meant for authors, for readers and for the idea of literature itself.",
          q: "What is the lecture mainly about?",
          opts: ["How train stations became popular places to shop.", "Why authors preferred books with hard covers.", "How cheaper books widened the reading public.", "Why workers in the 1930s had little time to read."], a: 2 },
        { id: 'a-M-02-L1-10', lines: [
          ['M', "Should we keep requiring a university degree for the junior designer position?"],
          ['F', "I'd drop it. Two of our best designers never finished university."],
          ['M', "But without that requirement, we might get hundreds of applications."],
          ['F', "Then let's ask every applicant to complete a short design task. It tells us far more than a certificate does."]],
          q: "What does the woman propose?",
          opts: ["Judging applicants by a practical task.", "Hiring only applicants with degrees.", "Limiting the number of applications.", "Asking current designers to finish university."], a: 0 },
        { id: 'a-M-02-L1-11', lines: [
          ['F', "Several viewers complained about the subtitles in last night's opening film."],
          ['M', "Were there mistakes in the translation?"],
          ['F', "Not exactly. The translation was accurate, but the lines appeared and disappeared so fast that people couldn't read them."],
          ['M', "Then the problem is timing, not language. I'll ask the subtitle company to adjust it before the second showing."]],
          q: "What was wrong with the subtitles?",
          opts: ["They contained errors in translation.", "They were not shown long enough to read.", "They appeared in the wrong language.", "They covered important parts of the picture."], a: 1 },
        { id: 'a-M-02-L1-12', spk: 'M', say: "Welcome to the city zoo. Please note that the tropical bird house will be closed to visitors until the end of May. Several pairs of rare birds have begun building nests, and our keepers have found that the noise and movement of crowds can cause the parents to leave their eggs. Visitors can still watch the birds through a live camera on screens outside the building. We expect the young birds to be visible in early June.",
          q: "Why is the bird house closed?",
          opts: ["The building is being repaired.", "Some of the birds have become ill.", "A camera system is being installed.", "Crowds might disturb the nesting birds."], a: 3 },
        { id: 'a-M-02-L1-13', lines: [
          ['F', "The new school in the south is designed without air conditioning in most classrooms."],
          ['M', "In that heat? Parents will be furious."],
          ['F', "The architects used high ceilings, shaded windows and openings that let hot air escape through the roof. Their models predict temperatures similar to air-conditioned rooms for most of the year."],
          ['M', "Most of the year isn't all of it. I'd want an extra cooling system for the hottest weeks."]],
          q: "What is the man's opinion?",
          opts: ["Additional cooling should be available for extreme heat.", "The design will be too expensive to build.", "The architects' models are completely wrong.", "Parents should be asked to approve the design."], a: 0 },
        { id: 'a-M-02-L1-14', lines: [
          ['M', "During the recent economic difficulties, the city gave every household money to spend at local businesses. Did it work?"],
          ['F', "Partly. Spending rose, but most of the money was spent at big supermarket chains."],
          ['M', "So small shops hardly benefited."],
          ['F', "Right. If the city tries it again, it should only allow the money to be spent at shops below a certain size."]],
          q: "What does the woman think should be changed?",
          opts: ["Each household should receive a larger amount.", "The money should go only to poorer households.", "Spending should be limited to smaller businesses.", "Supermarket chains should pay part of the cost."], a: 2 },
        { id: 'a-M-02-L1-15', spk: 'F', say: "A study at three city hospitals has found that patients recovering from operations slept on average forty minutes less per night when their rooms were noisy. The main sources of noise were not machines, as expected, but conversations between staff at night and the sound of equipment being pushed along the corridors. After one hospital introduced quiet hours between ten at night and six in the morning, patients reported better sleep and asked for less pain medicine.",
          q: "What did the study find was the main source of noise?",
          opts: ["Medical machines beside patients' beds.", "Staff talking and equipment being moved.", "Visitors arriving late at night.", "Traffic outside the hospital buildings."], a: 1 }
      ]
    },
    L2: {
      items: [
        { id: 'a-M-02-L2-g1', intro: "Listen to a conversation between a restaurant chef and a fish supplier about next season's orders.",
          lines: [
            ['M', "Thanks for making time, Chef Wu. I wanted to talk about your order for next season, especially the tuna."],
            ['F', "Is there a problem with supply?"],
            ['M', "There will be. The fishing limits for that tuna have been cut by about a quarter, and prices have already risen by thirty percent this year. I can still get it, but I'd be lying if I said it would be cheap or reliable."],
            ['F', "That's difficult. Tuna is in half the dishes on our menu, and customers expect it."],
            ['M', "I understand. But honestly, I'd encourage you to think beyond price. The fish are under real pressure. Some of my other customers are switching to local species that are common but less well known."],
            ['F', "Such as?"],
            ['M', "Mackerel, for one. It's caught by small boats just along the coast, it's very fresh, and it costs about a third as much."],
            ['F', "Mackerel has a strong flavor, though. Some customers find it too oily."],
            ['M', "That depends a lot on how it's prepared. One restaurant I supply treats it lightly with salt and vinegar, and it's become their most popular first course."],
            ['F', "Interesting. What about a steady supply? With tuna I know exactly what I'm getting every week."],
            ['M', "That's the honest drawback. Local catches vary with the weather and the season. Some weeks the boats can't go out at all. If you want local fish, your menu needs some flexibility."],
            ['F', "Perhaps we could have a 'catch of the day' section, where the dish changes depending on what's available."],
            ['M', "Many chefs do that, and customers often enjoy it. It makes the menu feel connected to the place."],
            ['F', "I'll need to train the staff to explain it, though. Our servers are used to recommending the same dishes every night."],
            ['M', "I could come in and talk to them about the boats and the different fish. It might help them tell the story."],
            ['F', "That would be great. I won't remove tuna completely, but I'll reduce it to two dishes and see how customers respond to the alternatives."],
            ['M', "Sounds sensible. Shall I send you some mackerel next week so you can test recipes?"],
            ['F', "Yes, please. About five kilograms should be enough for the kitchen to experiment with."]],
          qs: [
            { id: 'a-M-02-L2-01', q: "Why does the supplier expect problems with tuna?", opts: ["Fishing limits have been reduced and prices have risen", "Customers have lost interest in eating tuna", "The boats that catch tuna have stopped working", "The restaurant has not paid for earlier orders"], a: 0 },
            { id: 'a-M-02-L2-02', q: "By about what percentage have tuna prices risen this year?", ans: ['thirty percent', '30 percent', '30%', 'about thirty percent', 'about 30 percent', '30', 'thirty'] },
            { id: 'a-M-02-L2-03', q: "What concern does the chef have about mackerel?", opts: ["It is more expensive than tuna", "It is difficult to buy in large amounts", "Some customers find its taste too strong", "It must be cooked for a long time"], a: 2 },
            { id: 'a-M-02-L2-04', q: "According to the supplier, what is the main drawback of local fish?", opts: ["It is rarely fresh when delivered", "Its supply is less predictable", "It is caught by large foreign boats", "It cannot be served raw"], a: 1 },
            { id: 'a-M-02-L2-05', q: "What does the chef suggest adding to the menu?", opts: ["A section whose dish depends on what is caught", "A list of the boats that supply the restaurant", "Cheaper versions of the tuna dishes", "Information about the price of each fish"], a: 0 },
            { id: 'a-M-02-L2-06', q: "What does the supplier offer to do?", opts: ["Lower the price of tuna for one season", "Find a new chef to prepare mackerel", "Teach the kitchen how to treat fish with salt", "Speak to the serving staff about the fish"], a: 3 },
            { id: 'a-M-02-L2-07', q: "How much mackerel does the chef ask for?", ans: ['five kilograms', '5 kilograms', 'about five kilograms', 'about 5 kilograms', '5', 'five'] }
          ] },
        { id: 'a-M-02-L2-g2', intro: "Listen to a conversation between two city engineers about an old bridge.",
          lines: [
            ['F', "Mark, I've read the inspection report on the river bridge. The cracks in the supports are worse than last year."],
            ['M', "Yes, but the important question is whether they're growing or just becoming more visible. The inspectors only visit twice a year, so we can't tell."],
            ['F', "That's why you're proposing the sensors?"],
            ['M', "Exactly. We'd attach about forty small sensors to the supports and the road surface. They'd measure movement, shaking and temperature every few seconds and send the data to our office."],
            ['F', "Why temperature?"],
            ['M', "Because steel and concrete expand in the heat. A crack that seems to widen in the afternoon might simply close again at night. Without temperature data, we could easily mistake normal movement for damage."],
            ['F', "Makes sense. How much would the system cost?"],
            ['M', "About two hundred thousand dollars to install, plus maintenance. That sounds like a lot, but closing the bridge for emergency repairs would cost the city far more, in both money and traffic."],
            ['F', "The council will ask why we don't just repair the cracks now."],
            ['M', "We may need to. But some of the repairs being suggested would mean closing two lanes for six months. If the sensors show the cracks are stable, we could delay that work and plan it properly, perhaps during the school holidays when traffic is lighter."],
            ['F', "And if the cracks are growing?"],
            ['M', "Then the system sends a warning immediately, and we can limit heavy trucks before anything dangerous happens. Either way, we're making decisions based on evidence instead of guesses."],
            ['F', "What about the data itself? Forty sensors reporting every few seconds will produce an enormous amount of information. Who's going to look at it all?"],
            ['M', "Good point. The software would mark anything unusual automatically, so engineers only need to review the warnings and a weekly summary. A university team has offered to help us analyze the first year of data for free, because they want to use it in their research."],
            ['F', "That's a generous offer. Just make sure the agreement says the city owns the data."],
            ['M', "I'll check that with our lawyers before anything is signed."]],
          qs: [
            { id: 'a-M-02-L2-08', q: "Why can't the engineers tell whether the cracks are growing?", opts: ["The cracks are hidden under the road surface", "Inspections take place only twice a year", "The inspectors used the wrong equipment", "The inspection report was lost"], a: 1 },
            { id: 'a-M-02-L2-09', q: "About how many sensors would be attached to the bridge?", ans: ['forty', '40', 'about forty', 'about 40', 'forty sensors', '40 sensors'] },
            { id: 'a-M-02-L2-10', q: "Why would the sensors measure temperature?", opts: ["To warn drivers about icy roads", "To check whether the sensors are working", "To separate normal movement from real damage", "To measure the effect of traffic on the bridge"], a: 2 },
            { id: 'a-M-02-L2-11', q: "What could happen if the cracks are found to be stable?", opts: ["Repairs could be planned for a quieter period", "The sensors would be removed from the bridge", "Heavy trucks would be banned permanently", "The bridge would be closed for six months"], a: 0 },
            { id: 'a-M-02-L2-12', q: "Who has offered to help analyze the data?", ans: ['a university team', 'university team', 'the university team', 'a university', 'the university', 'university researchers', 'researchers from a university'] },
            { id: 'a-M-02-L2-13', q: "What does the woman want the agreement to include?", opts: ["The university must pay for the sensors", "The analysis must be finished within a year", "The software must mark unusual readings", "The city must remain the owner of the data"], a: 3 }
          ] }
      ]
    },
    L3: {
      items: [
        { id: 'a-M-02-L3-g1', intro: "Listen to part of a lecture in a biology course.", spk: 'F',
          say: "Good morning. Today we're going to look at a question that has interested scientists for decades: how does a group of animals make a decision when no single animal is in charge? Our example is the honeybee. In late spring, when a colony becomes too large, the old queen leaves with about half of the workers, perhaps ten thousand bees. They gather in a large group hanging from a tree branch, and from there they must choose a new home, usually a hole in a tree. The choice matters enormously. A home that is too small, too wet or too exposed to the wind could mean that the whole colony dies in the winter. What's remarkable is that the queen plays no part in this decision. Instead, a few hundred older bees act as scouts. They fly out in all directions, inspect possible sites, and return to the group to report what they've found. They report through a dance. The direction of the dance tells other bees where the site is, and, importantly, the length and energy of the dance reflect the quality of the site. A scout that has found an excellent site dances for a long time; one that has found a poor site dances briefly or not at all. Other scouts watch these dances, fly out to visit the advertised sites themselves, and, if they agree, return and dance too. Over a day or two, support for the better sites grows, while support for poorer ones fades, because scouts gradually stop dancing for them. The final step is especially clever. Rather than waiting until every scout agrees, the bees use what researchers call a quorum. When about fifteen to twenty scouts are present at the same site at the same time, they take this as a sign that enough support has built up. They return to the group and start making a special sound that tells the others to warm up their flight muscles. Within an hour, all ten thousand bees take off together and fly to their new home. Experiments in which researchers offered bees a choice of artificial nest boxes have shown that they choose the best option in the large majority of cases. Some researchers have even suggested that human committees could learn from them. The bees succeed because scouts investigate independently, rather than simply copying each other, and because they keep the debate open until support is strong. Next time, we'll compare this with the way ants choose new nests, which works somewhat differently.",
          qs: [
            { id: 'a-M-02-L3-01', q: "What happens when a bee colony becomes too large?", opts: ["The workers build a larger home in the same tree", "The old queen leaves with about half of the workers", "The youngest bees are forced out of the colony", "The colony divides into many small groups"], a: 1 },
            { id: 'a-M-02-L3-02', q: "What role does the queen play in choosing a new home?", opts: ["She chooses among the sites the scouts report", "She inspects the most promising sites herself", "She plays no part in the decision", "She leads the bees to the final site"], a: 2 },
            { id: 'a-M-02-L3-03', q: "How do scouts report what they have found?", ans: ['through a dance', 'by dancing', 'a dance', 'dancing', 'they dance', 'through dancing', 'with a dance', 'by a dance'] },
            { id: 'a-M-02-L3-04', q: "What does a long and energetic dance indicate?", opts: ["The site is of high quality", "The site is very far away", "The scout is tired after a long flight", "The scout disagrees with other scouts"], a: 0 },
            { id: 'a-M-02-L3-05', q: "About how many scouts at one site signal that there is enough support?", ans: ['fifteen to twenty', '15 to 20', '15-20', 'about fifteen to twenty', 'about 15 to 20', '15 to 20 scouts', 'fifteen to twenty scouts'] },
            { id: 'a-M-02-L3-06', q: "According to the speaker, why are the bees successful?", opts: ["They always choose the site closest to the old home", "They follow the scout that returns first", "They make decisions as quickly as possible", "They investigate independently and wait for strong support"], a: 3 }
          ] },
        { id: 'a-M-02-L3-g2', intro: "Listen to a report from a radio program about rural life.", spk: 'M',
          say: "This is City and Country. In the hills outside Taitung, a village of about six hundred people has become an unlikely leader in clean energy. Five years ago, residents formed a cooperative and installed solar panels on the roofs of the village school, the temple hall and dozens of homes. Today the panels produce roughly half of the electricity the village uses over a year. The idea came from a group of farmers who were frustrated by rising power bills and frequent power cuts during typhoons. 'We were always the last to get our power back after a storm,' one of them, Mr. Kao, told me. 'We wanted some control over our own supply.' Each household that joined paid a small fee to become a member, and the cooperative borrowed the rest of the money from a regional bank. Electricity that the village doesn't use is sold to the national network, and the income is used to repay the loan. Once the loan is paid off, which is expected in about four more years, profits will be shared among members or spent on village projects. The members have already voted on their first priority: a small bus service to take elderly residents to the hospital in town. Perhaps the most important addition came two years ago, when the cooperative installed large batteries next to the school. During a typhoon last autumn, the rest of the district lost power for almost two days. The village school, powered by its batteries, stayed lit and became a shelter where residents could charge their phones, keep medicine cold and cook hot meals. Not everything has gone smoothly. Some residents who rent their homes have been unable to take part, because their landlords refuse to allow panels on the roofs. The cooperative is now discussing a plan to place shared panels on empty farmland so that renters can join too. There have also been disagreements about how the panels look on older buildings. Energy experts I spoke to said that small cooperatives like this cannot replace large power stations, but they can help rural communities recover more quickly from disasters. Several other villages in the region have visited to learn from the project, and the cooperative now runs a free workshop every month for other communities that want to follow its example.",
          qs: [
            { id: 'a-M-02-L3-07', q: "Why did the farmers start the project?", opts: ["They wanted to sell electricity to the city", "They were unhappy with high bills and power cuts", "The government required villages to use solar power", "The school asked for a cheaper source of energy"], a: 1 },
            { id: 'a-M-02-L3-08', q: "How is the cooperative repaying its loan?", opts: ["By charging members a monthly fee", "By renting out empty farmland", "By selling extra electricity to the national network", "By running paid workshops for other villages"], a: 2 },
            { id: 'a-M-02-L3-09', q: "Where would the members' first-priority bus service take elderly residents?", ans: ['the hospital', 'to the hospital', 'to hospital', 'a hospital', 'to a hospital', 'the hospital in town', 'to the hospital in town', 'hospital in the town', 'to the hospital in the town', 'the town hospital', 'to the town hospital', 'a hospital in town', 'to a hospital in town'] },
            { id: 'a-M-02-L3-10', q: "What happened during the typhoon last autumn?", opts: ["The school stayed powered and served as a shelter", "The batteries were damaged by heavy rain", "The whole village lost power for two days", "Residents moved to the hospital in town"], a: 0 },
            { id: 'a-M-02-L3-11', q: "Why have some renters been unable to take part?", opts: ["They cannot afford the membership fee", "They live too far from the village school", "Their homes do not receive enough sunlight", "Their landlords will not allow panels on the roofs"], a: 3 },
            { id: 'a-M-02-L3-12', q: "How often does the cooperative run a free workshop?", ans: ['every month', 'once a month', 'monthly', 'each month', 'once every month'] }
          ] }
      ]
    },
    R1: {
      items: [
        { id: 'a-M-02-R1-g1', type: 'head', title: "The Second Life of Old Phones",
          heads: [
            "Reasons for holding on",
            "Why new phones cost more each year",
            "Building phones to be opened",
            "A growing pile of forgotten devices",
            "The hidden cost of cheap recycling",
            "Richer than a gold mine",
            "Making it easy to give phones back",
            "Children and their first phone",
            "A growing market for repaired phones"
          ],
          paras: [
            "Every year, well over a billion mobile phones are sold around the world, and most of them replace a phone that still works. The old devices rarely disappear. Surveys in several countries suggest that a typical household keeps two or three old phones it no longer uses in drawers and cupboards, and only a small minority of old phones are ever recycled. As the pile of forgotten devices grows, so does interest in what could be done with it.",
            "Part of that interest is financial. A phone contains small amounts of gold, silver and copper, along with rarer metals used in its screen, battery and electronic parts. Individually, these quantities are tiny, but they add up. By some estimates, a ton of old phones contains far more gold than a ton of rock from a typical gold mine. Recovering these metals could reduce the need for new mining, which often damages forests and rivers.",
            "Why, then, do so many phones stay in drawers? Researchers who have asked owners report a mix of reasons. Many people worry that personal photos, messages or bank details could be recovered from a phone they give away. Others keep an old phone in case their new one breaks, or simply because it holds memories. And many people say they do not know where old phones can be taken, or assume that doing so will be complicated.",
            "Not all recycling is beneficial. A large share of the world's electronic waste is shipped to poorer countries, where it is often taken apart by hand in small workshops with little protection for workers. To recover copper, cables may be burned in the open air, releasing poisonous smoke. Acids used to remove gold can pollute soil and water. Such methods make recycling cheap, but the true cost is paid by the health of workers and their neighbors.",
            "A more promising path for many phones is repair and a second sale. Specialist companies buy used phones, replace damaged screens and worn-out batteries, delete the owners' data and sell the phones again with a guarantee, often at half the price of a new model. This market has grown rapidly, helped by buyers who want a reliable phone without paying for the latest features. Keeping a phone in use for an extra two years, studies suggest, does more for the environment than recycling it.",
            "Repair, however, depends on how phones are made. Many modern models are glued together tightly, which makes them thin and able to survive water but very hard to open. Replacing a battery may require special tools and considerable skill. In response, some manufacturers have begun to design phones whose parts can be removed with an ordinary household tool, and some governments are introducing rules that will require batteries to be easy for users to replace themselves.",
            "Finally, there is the question of collection. Experience shows that people return far more phones when the process is simple. Programs that accept old devices in ordinary shops, provide free envelopes for posting them, or offer a small discount on a new purchase have collected many more phones than those that require a special trip. Some experts have suggested a small deposit, paid when a phone is bought and returned when it is handed back."
          ],
          ex: { p: 0, h: 3 },
          qs: [
            { id: 'a-M-02-R1-01', p: 1, a: 5 },
            { id: 'a-M-02-R1-02', p: 2, a: 0 },
            { id: 'a-M-02-R1-03', p: 3, a: 4 },
            { id: 'a-M-02-R1-04', p: 4, a: 8 },
            { id: 'a-M-02-R1-05', p: 5, a: 2 },
            { id: 'a-M-02-R1-06', p: 6, a: 6 }
          ] },
        { id: 'a-M-02-R1-g2', type: 'head', title: "Why Songs Get Stuck in Our Heads",
          heads: [
            "What sets it off",
            "A tool for selling products",
            "Why we forget the words of songs",
            "Hearing music that is not playing",
            "What makes a tune hard to forget",
            "A common experience with a curious name",
            "Ways to escape a repeating tune",
            "A short history of popular music",
            "Some people suffer more than others"
          ],
          paras: [
            "Almost everyone has experienced it: a short piece of music, often just a few lines of a song, that repeats itself in the mind for hours, sometimes for days. Researchers have given this experience the informal name 'earworm'. Surveys suggest that more than ninety percent of people have earworms at least once a week. Although usually harmless, they can be surprisingly annoying, and they have become a serious subject of study for psychologists interested in memory.",
            "Not every song is equally likely to stick. When researchers compared songs that people frequently reported as earworms with similar songs that were rarely mentioned, they found some clear patterns. Earworms tend to be relatively fast, with simple melodies that are easy to sing. At the same time, they often contain a small surprise, such as an unusual jump between notes or a repeated phrase with a slight change, which seems to catch the listener's attention.",
            "The circumstances in which earworms appear are also revealing. The most common cause is simply having heard the song recently, especially more than once. But earworms can also be started by memories: seeing a person, a place or even a word that is connected with a song. Many people report that earworms appear when they are tired or under stress, or during simple activities, such as walking or washing dishes, that leave the mind free to wander.",
            "Some people are affected much more than others. People who spend more time listening to or playing music report earworms more often, which is not surprising. More unexpectedly, studies have found that people who tend to worry or who tend to go over the same thoughts again and again also experience longer and more frequent earworms. For a small number of individuals, the experience can become distressing enough to interfere with sleep or work.",
            "Brain imaging studies offer some clues about what is happening. When people imagine a familiar piece of music, the parts of the brain that process sound become active, almost as if the music were actually being heard. In one experiment, participants listened to familiar songs with short silent gaps. Activity in their sound-processing areas continued during the gaps, as though the brain were filling in the missing notes. An earworm may be a similar process that keeps running without any music at all.",
            "So what can be done about an unwanted tune? Research offers a few practical suggestions. Chewing gum appears to help, possibly because it uses the same muscles involved in silently singing. Some people find that a moderately difficult task, such as a word puzzle, takes up enough attention to push the tune aside. Others recommend listening to the whole song from beginning to end, on the theory that earworms are often short parts of songs that the mind keeps trying to finish.",
            "Not everyone wants earworms to disappear. Advertisers have long understood the power of a short tune that repeats, and many of the most memorable advertisements are built around one. If a customer cannot stop singing a product's song, the product's name is likely to come to mind at the moment of purchase. For the companies that create them, a successful earworm is not a problem to be solved but a valuable tool."
          ],
          ex: { p: 0, h: 5 },
          qs: [
            { id: 'a-M-02-R1-07', p: 1, a: 4 },
            { id: 'a-M-02-R1-08', p: 2, a: 0 },
            { id: 'a-M-02-R1-09', p: 3, a: 8 },
            { id: 'a-M-02-R1-10', p: 4, a: 3 },
            { id: 'a-M-02-R1-11', p: 5, a: 6 },
            { id: 'a-M-02-R1-12', p: 6, a: 1 }
          ] },
        { id: 'a-M-02-R1-g3', type: 'match',
          texts: [
            { title: "Paying to Drive", body: "Five years ago, Northam began charging drivers a daily fee to enter its city center on weekdays. The charge was strongly opposed at first, particularly by shop owners, who feared that customers would stop coming. In the first year, traffic in the center fell by about twenty percent, and journeys by bus became noticeably faster because the roads were less crowded. Shop sales in the center fell, and five years later they have still not returned to their earlier level. By law, all of the money collected from the charge must be spent on transport, and most of it has gone into new bus routes and more frequent services. Residents who live inside the charging area pay only a tenth of the normal fee. The scheme still has critics, however. Some argue that a flat daily charge is unfair to people on low incomes who need a car for work, such as cleaners and care workers who travel between several homes in a day, while wealthy drivers barely notice the cost." },
            { title: "Free Rides for Everyone", body: "Lakeport took the opposite approach: instead of making driving more expensive, it made public transport free. Since the change, anyone can ride the city's buses and trams without a ticket. The number of passengers rose by about forty percent in the first two years, which the city celebrated as a major success. Closer analysis, however, revealed a less positive picture. Many of the new passengers had previously walked or cycled for short journeys, and the number of cars in the city fell only slightly. During the morning and evening rush, buses became so full that some passengers could not get on. The service is funded mainly by a special tax paid by businesses with more than fifty employees, and some of these businesses complain that they are paying for a service many of their workers do not use. Supporters reply that free transport has benefits beyond traffic, giving elderly and poorer residents easier access to shops, hospitals and jobs." },
            { title: "Slower Streets", body: "Eastfield chose neither charges nor free rides. Instead, it lowered the speed limit on almost every street in its center to 30 kilometers per hour. The change was supported by new road markings, narrower traffic lanes and cameras that record drivers who go too fast. Over the following three years, the number of serious road accidents in the center fell by about a third, and noise levels on major streets dropped noticeably. Many drivers complained that their journeys would take much longer. Yet measurements by the city found that average journey times had barely changed, because traffic moved more smoothly with fewer sudden stops at traffic lights. Perhaps the most striking result was a change in behavior: as the streets felt safer, more parents allowed their children to walk or cycle to school, and the number of people cycling into the center rose steadily. Business groups, initially worried, now use the calmer streets in advertising for the city." }
          ],
          qs: [
            { id: 'a-M-02-R1-13', q: "Which passage mentions that many new users had previously walked or cycled?", a: 1 },
            { id: 'a-M-02-R1-14', q: "Which passage mentions a reduction in serious accidents?", a: 2 },
            { id: 'a-M-02-R1-15', q: "Which passage mentions a lower price for people living in the area?", a: 0 },
            { id: 'a-M-02-R1-16', q: "Which passage mentions crowding at the busiest times of day?", a: 1 },
            { id: 'a-M-02-R1-17', q: "Which passage mentions that a complaint was not supported by measurements?", a: 2 },
            { id: 'a-M-02-R1-18', q: "Which passage mentions that money collected must be spent on transport?", a: 0 },
            { id: 'a-M-02-R1-19', q: "Which passage mentions the use of cameras?", a: 2 },
            { id: 'a-M-02-R1-20', q: "Which passage mentions businesses objecting to a cost they must pay?", a: 1 }
          ] }
      ]
    },
    R2: {
      items: [
        { id: 'a-M-02-R2-g1',
          texts: [{ type: 'article', title: "Learning from Old Desert Cities", body: "For much of the twentieth century, cities in hot desert regions were built as if the climate did not exist. Glass office towers, wide roads and large detached houses were copied from cooler parts of the world, and the heat was managed with an enormous and growing amount of air conditioning. In some Gulf cities today, cooling buildings accounts for well over half of all the electricity used in summer. As energy prices and temperatures both rise, architects are increasingly looking back at how people lived in the same places before electricity arrived.\nTraditional desert towns share a number of features. Streets are narrow and often winding, so that buildings shade one another and the ground stays cool for much of the day. Walls are thick and built from earth or stone, materials that absorb heat slowly during the day and release it at night, when the air outside is cooler. Windows facing the street are small, while rooms open onto inner courtyards, which may contain trees and a small pool. The courtyard acts as a store of cool air: at night it fills with cool air from above, and during the day it remains shaded and comfortable.\nThe most striking feature in some regions is the wind tower, a tall structure rising above the roof with openings at the top. It catches the breeze, which is stronger and cooler above the roofs, and directs it down into the rooms below. In some designs, the air passes over water before entering the house, cooling it further as the water slowly disappears into the air. Measurements in surviving historic houses show that such towers can keep indoor temperatures several degrees below those outside, without using any electricity at all.\nModern architects are now borrowing these ideas, though rarely copying them exactly. A new university campus in one desert country has narrow shaded paths between its buildings and uses towers to draw air through its courtyards; its designers claim that it uses about half as much energy for cooling as ordinary campuses. Elsewhere, housing projects have introduced shared courtyards and thick walls made from pressed earth blocks.\nThere are limits to what traditional methods can achieve. Wind towers work best in dry climates; in humid coastal cities, where the air is already heavy with water, cooling by this method is much less effective. Older designs also assumed lower expectations of comfort: few people today would accept an office at thirty degrees, however pleasant it might have seemed in the past. And narrow streets, while cool, are difficult to combine with the cars, delivery trucks and emergency vehicles that modern cities depend on.\nFor these reasons, most experts see the old methods not as a replacement for modern technology but as a way of reducing the need for it. A building that is shaded, well designed and able to breathe will still need some air conditioning in the hottest months, but far less of it. In a warming world, that difference could be enormous." }],
          qs: [
            { id: 'a-M-02-R2-01', q: "What is the main idea of the article?", opts: ["Air conditioning should be banned in desert cities.", "Traditional desert design can reduce modern cooling needs.", "Wind towers are the best solution for all hot cities.", "Glass towers are more comfortable than traditional homes."], a: 1 },
            { id: 'a-M-02-R2-02', q: "According to the article, how do thick walls help?", opts: ["They block the wind from entering rooms.", "They hold water that cools the air.", "They let in more light through small windows.", "They absorb heat slowly and release it at night."], a: 3 },
            { id: 'a-M-02-R2-03', q: "Why are wind towers less effective in humid coastal cities?", opts: ["The air already contains a lot of water.", "There is not enough wind near the coast.", "Coastal buildings are usually made of glass.", "Water is too expensive in coastal areas."], a: 0 },
            { id: 'a-M-02-R2-04', q: "Which of the following is NOT mentioned as a limit of traditional methods?", opts: ["People today expect cooler indoor temperatures.", "Narrow streets do not suit modern vehicles.", "Earth walls are too expensive to build today.", "Wind towers work poorly in wet climates."], a: 2 },
            { id: 'a-M-02-R2-05', q: "What does the author mean by a building that is 'able to breathe'?", opts: ["A building with no air conditioning at all", "A building designed to let air move through it", "A building made entirely of natural materials", "A building with windows that open automatically"], a: 1 }
          ] },
        { id: 'a-M-02-R2-g2',
          texts: [{ type: 'article', title: "The Science of First Impressions", body: "We are often told not to judge a book by its cover, yet when we meet a stranger, we form opinions with remarkable speed. In a series of experiments, psychologists showed participants photographs of unfamiliar faces for as little as one tenth of a second and asked them to rate each person's honesty, ability and friendliness. The ratings made after this brief glance were very similar to those made by participants who were allowed to look at the faces for as long as they wished. Additional time, it seems, mostly makes us more confident in judgments we have already reached.\nSuch rapid judgments probably developed for good reasons. For our ancestors, deciding quickly whether a stranger was a friend or a threat could be a matter of survival. Even today, quick impressions help us manage a busy social world in which we cannot study every person we meet in detail.\nThe difficulty is that these impressions are often wrong. Studies that compare first impressions of honesty with actual behavior, for example in games where participants can choose to cooperate or cheat, generally find only a weak connection. People with round faces and large eyes, features associated with children, tend to be seen as honest and harmless, whether or not they are. Facial features that suggest strength or confidence are frequently mistaken for ability.\nThese errors have real consequences. In one well-known line of research, participants who knew nothing about politics were shown pairs of photographs of candidates from past elections and asked which looked more capable. Their choices predicted the actual winners far more often than chance would suggest. Similar effects have been found in job interviews and even in courts, where people accused of crimes who look more honest may receive lighter punishments.\nCan we correct for such errors? The evidence is mixed. Simply warning people that first impressions are unreliable has little effect, partly because the judgments are made too quickly to be noticed. More promising approaches change the situation rather than the individual. Some orchestras, for example, ask musicians to perform behind a screen when they apply to join, so that the judges hear the music without seeing the player. Some companies now use structured interviews, in which every candidate is asked the same questions and scored against fixed standards, reducing the room for impressions to influence the result.\nFirst impressions are also less fixed than we might fear. Later information, especially about how a person actually behaves, can change them considerably, provided we are exposed to it. The danger lies in situations where a first meeting is also the last, and where a decision is made before the impression can be tested." }],
          qs: [
            { id: 'a-M-02-R2-06', q: "What did the experiments with photographs show?", opts: ["Brief glances produced judgments similar to longer looks.", "People needed several seconds to judge a face.", "Longer viewing made judgments more accurate.", "Participants refused to judge strangers' faces."], a: 0 },
            { id: 'a-M-02-R2-07', q: "According to the article, why might quick judgments have developed?", opts: ["They help people remember faces for longer.", "They allow people to make friends more easily.", "Judging strangers quickly helped people survive.", "Children learn them from their parents."], a: 2 },
            { id: 'a-M-02-R2-08', q: "What can be inferred about people with childlike facial features?", opts: ["They are usually more honest than others.", "They are often chosen as political leaders.", "They tend to perform poorly in job interviews.", "They may be trusted more than they deserve."], a: 3 },
            { id: 'a-M-02-R2-09', q: "Why does the author mention orchestras?", opts: ["To show that musicians are judged more fairly than others", "To give an example of changing the situation to reduce errors", "To argue that appearance matters little in music", "To explain how judges learn to ignore their impressions"], a: 1 },
            { id: 'a-M-02-R2-10', q: "The word 'fixed' in the last paragraph is closest in meaning to", opts: ["repaired", "attached", "permanent", "arranged"], a: 2 }
          ] },
        { id: 'a-M-02-R2-g3',
          texts: [
            { type: 'letter', from: "Karen Yu, Riverside Residents' Association", to: "District Education Office", title: "Proposal: A Future for the Old Riverside Primary School", body: "Dear Sir or Madam,\nI am writing on behalf of the Riverside Residents' Association regarding the former Riverside Primary School, which has stood empty since it closed two years ago because of falling student numbers. We understand that the District Education Office is considering selling the site to a private developer. We would like to propose an alternative.\nOur neighborhood has no community center, no public library and very few places where older residents can meet. At the same time, many young families have recently moved into the new apartment buildings along the river, and there is a long waiting list for after-school care. We believe the school buildings could meet both needs. The classrooms could be used for adult education courses and a small library, the hall for community events and exercise classes, and the playground and two ground-floor classrooms for an after-school program.\nWe have already surveyed 650 households, and 82% supported the idea. Several local organizations, including a club for older residents and a youth music group, have offered to run activities in the building. We recognize that the buildings need repairs, especially to the roof, and we are prepared to raise part of the cost through local events and donations.\nWe would be grateful for the opportunity to present our proposal at the Office's next public meeting.\nYours faithfully,\nKaren Yu\nChair, Riverside Residents' Association" },
            { type: 'letter', from: "Peter Chou, District Education Office", to: "Karen Yu", title: "Reply: The Old Riverside Primary School", body: "Dear Ms. Yu,\nThank you for your letter and for the careful work your association has done. The level of local support you describe is impressive, and I agree that the neighborhood lacks public facilities.\nI must, however, explain some of the difficulties. Our engineers estimate that the roof and electrical systems alone would cost about NT$18 million to repair, and the building would also need an elevator and other changes before it could be used by older people or those with disabilities. In addition, the Office is required by law to use former school sites for educational purposes unless they are formally transferred to another government department. A community center would therefore need the support of the city's Social Affairs Department, which would also become responsible for its running costs.\nThat said, I do not believe that selling the site is the only option. The rapid growth in young families that you mention may mean that a school will be needed in the area again within ten years. Selling the site now could prove to be a costly mistake. One possibility would be for the Office to keep the site and allow part of it to be used for after-school care and adult classes, which count as educational, while we discuss a longer-term arrangement with the Social Affairs Department.\nI would be pleased to include your proposal on the agenda for our meeting on 14 March.\nYours sincerely,\nPeter Chou\nPlanning Officer, District Education Office" }
          ],
          qs: [
            { id: 'a-M-02-R2-11', q: "Why was Riverside Primary School closed?", opts: ["Its buildings were unsafe.", "It was sold to a developer.", "It moved to a new site by the river.", "There were too few students."], a: 3 },
            { id: 'a-M-02-R2-12', q: "Which of the following does Karen Yu NOT propose?", opts: ["Building new apartments on the playground", "Using classrooms for adult courses", "Holding exercise classes in the hall", "Running an after-school program"], a: 0 },
            { id: 'a-M-02-R2-13', q: "According to Peter Chou, why can the Education Office not simply open a community center?", opts: ["Local residents have not raised enough money.", "The building is too small for community events.", "The law limits former school sites to educational use.", "The Social Affairs Department has rejected the idea."], a: 2 },
            { id: 'a-M-02-R2-14', q: "Why does Peter Chou mention the growth in young families?", opts: ["To show that after-school care is unnecessary", "To suggest that a school may be needed there again", "To explain why the roof repairs are so expensive", "To argue that the site should be sold quickly"], a: 1 },
            { id: 'a-M-02-R2-15', q: "What does Peter Chou propose?", opts: ["Selling the site and using the money for a library", "Repairing the roof before any decision is made", "Giving the site to the Social Affairs Department at once", "Keeping the site and allowing some educational uses for now"], a: 3 }
          ] },
        { id: 'a-M-02-R2-g4',
          texts: [{ type: 'article', title: "Letting the Land Go Wild", body: "Across parts of Europe and elsewhere, a growing number of farm owners are doing something that would have shocked their grandparents: they are letting farmland go wild. Instead of planting crops or keeping animals in neat fields, they remove fences, allow bushes and trees to spread, and introduce large animals such as cattle, horses and pigs that are left to wander with little human management. The approach, known as rewilding, aims to let natural processes rather than human plans shape the landscape.\nOne of the best-known examples is a former farm whose owners gave up ordinary agriculture after years of losing money. Within two decades, the land had become a mixture of bushes, young forest and open fields of grass. Species that had disappeared from the area returned, including several rare birds and butterflies, and the number of insects increased dramatically. Visitors now pay to stay on the land and watch the wildlife, and this income, together with sales of meat from the free-roaming animals, has replaced much of what was once earned from farming.\nSupporters argue that rewilding offers benefits far beyond the borders of individual farms. Forests and wet ground store carbon and hold water, reducing the risk of floods in towns further down the river. Large areas of varied natural living space allow plants and animals to move as the climate changes. And because rewilding requires relatively little continuing management, it can be cheaper than traditional conservation projects, which often depend on constant human effort to maintain a particular landscape.\nCritics, however, raise serious concerns. The most basic is food. Land that is rewilded produces far less food than land that is farmed, and if wealthy countries take large areas out of production, they may simply import more food from elsewhere, possibly from regions where forests are being cleared to create new farmland. In that case, the environmental gains at home could be cancelled out by losses abroad.\nOthers worry about rural communities. Farming supports jobs, local businesses and long-held traditions. When farms are rewilded, some of this way of life may disappear, even if new jobs in tourism appear. There are also practical conflicts: free-roaming animals can escape onto roads, and the return of wolves and other hunting animals, which some projects hope to encourage, alarms people who keep sheep nearby.\nMany scientists now favor a middle path. Rather than rewilding whole regions, they suggest concentrating it on land that is poor for farming, such as steep hills or wet ground, while farming the best land more efficiently. Such an approach might allow countries to protect wildlife without reducing their ability to feed themselves. Whether it can satisfy both conservation groups and farmers remains to be seen, but the debate has already changed how many people think about what the countryside is for." }],
          qs: [
            { id: 'a-M-02-R2-16', q: "What is the main purpose of the article?", opts: ["To present the benefits and drawbacks of rewilding", "To argue that all farmland should be rewilded", "To describe the history of farming in Europe", "To explain how to raise free-roaming animals"], a: 0 },
            { id: 'a-M-02-R2-17', q: "How does the former farm described in paragraph 2 now earn money?", opts: ["By growing rare plants for sale", "Through tourism and selling meat", "From government payments for storing carbon", "By renting fields to neighboring farmers"], a: 1 },
            { id: 'a-M-02-R2-18', q: "Why might rewilding in wealthy countries harm the environment elsewhere?", opts: ["Wild animals may move into other countries.", "Rivers may flood towns in other regions.", "Tourists may travel long distances to visit.", "More food may be imported from areas where forests are cleared."], a: 3 },
            { id: 'a-M-02-R2-19', q: "The phrase 'cancelled out' in paragraph 4 is closest in meaning to", opts: ["made official", "added to", "balanced by an equal loss", "delayed for a long time"], a: 2 },
            { id: 'a-M-02-R2-20', q: "What does the 'middle path' favored by many scientists involve?", opts: ["Rewilding mainly land that is poor for farming", "Rewilding only land owned by the government", "Ending all farming on steep hills and near towns", "Allowing wild animals to return to every region"], a: 0 }
          ] }
      ]
    }
  }
});
