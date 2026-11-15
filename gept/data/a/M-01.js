/* a-M-01 高級初試模擬考 第 1 回（原創，2026-11-15） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'a-M-01',
  title: '模擬考 1',
  names: ['Halden', 'Mira', 'Castell', 'Larkford', 'Helen', 'Ward', 'Daniel', 'Brooks', 'Moon', 'Earth', 'Pacific', 'Indian', 'Pole', 'Bridge', 'Mill'],
  extra: ['glaze', 'kiln', 'crystal', 'infrared', 'drone', 'fungi', 'compass', 'cargo', 'curator', 'conservator', 'vacuum', 'chamber', 'bamboo', 'soundscape', 'indigo', 'bacteria', 'vat', 'navigator', 'chant', 'sunstone', 'equator', 'petal', 'seabed', 'seafloor', 'sonar', 'tsunami', 'accelerate', 'reopen'],
  parts: {
    L1: {
      items: [
        { id: 'a-M-01-L1-01', lines: [
          ['F', "The glaze on this batch came out cloudy again. Did you change the firing schedule?"],
          ['M', "Only slightly. I let the kiln cool more slowly, because last month several bowls cracked when we opened it too early."],
          ['F', "That would explain it. Slow cooling gives crystals time to form in the glaze, which is what makes the surface look white."],
          ['M', "So we have to choose between cracked bowls and cloudy ones? There must be a middle path."]],
          q: "What does the woman suggest caused the cloudy glaze?",
          opts: ["The kiln was opened before it had cooled", "Crystals formed while the kiln cooled slowly", "The bowls were fired at too low a temperature", "A different glaze recipe was used this month"], a: 1 },
        { id: 'a-M-01-L1-02', lines: [
          ['M', "How far along is the team with scanning the old shipping records?"],
          ['F', "We've finished the record books from before 1900, but the later volumes are a problem. The ink has faded so badly that ordinary scanning picks up almost nothing."],
          ['M', "Could we try the infrared camera the museum lent us last year?"],
          ['F', "That's exactly what I was going to request. It can read carbon-based ink even when the human eye can't."]],
          q: "What will the woman most likely do next?",
          opts: ["Postpone scanning until the ink is restored", "Return the camera to the museum", "Scan the older record books again", "Ask to use a special type of camera"], a: 3 },
        { id: 'a-M-01-L1-03', lines: [
          ['F', "I've read that the seed bank keeps everything at minus eighteen degrees. Doesn't freezing damage the seeds?"],
          ['M', "Not if they're dried first. We bring the moisture down to around five percent, so ice crystals can't form inside the cells."],
          ['F', "And how long can they survive like that?"],
          ['M', "It depends on the species. Some grains last for centuries, but we still test a sample every ten years to make sure they'll sprout."]],
          q: "Why are the seeds dried before being frozen?",
          opts: ["To prevent ice from damaging them", "To make them lighter to store", "To help them sprout more quickly", "To protect them from insects"], a: 0 },
        { id: 'a-M-01-L1-04', lines: [
          ['M', "This piece of wood looks perfect. Why did you reject it?"],
          ['F', "Tap it and listen. It sounds dull. The grain is straight, but the wood is too dense, so it won't vibrate freely."],
          ['M', "I always assumed appearance was the main thing buyers cared about."],
          ['F', "Buyers, maybe. Players care about how the instrument responds under the bow, and that's what keeps them coming back to our workshop."]],
          q: "Why did the woman reject the piece of wood?",
          opts: ["Its grain was not straight enough", "Buyers would dislike its appearance", "It was too heavy to vibrate well", "It had been damaged by the bow"], a: 2 },
        { id: 'a-M-01-L1-05', lines: [
          ['F', "The models disagree by almost two hundred kilometers on where the typhoon will land. Which one are we using for the public bulletin?"],
          ['M', "Neither. We'll publish the full range and stress that the whole eastern coast should prepare regardless."],
          ['F', "Won't a range confuse people? They usually want a single line on the map."],
          ['M', "Perhaps, but a single line gives a false sense of certainty. If it shifts, people stop trusting us."]],
          q: "What is the man's main concern?",
          opts: ["Using the most accurate forecast model", "Keeping the public's trust in forecasts", "Publishing the bulletin as early as possible", "Protecting the eastern coast from damage"], a: 1 },
        { id: 'a-M-01-L1-06', lines: [
          ['M', "The fruit farmers want to rent forty of our hives again this spring."],
          ['F', "Forty is fine, but last year our bees came back weak. I'd like a clause saying they won't spray chemicals while the trees are in flower."],
          ['M', "They might refuse. Their spraying schedule is set by their insurance company, not by them."],
          ['F', "Then the price goes up. Replacing lost bees costs us far more than the rental fee."]],
          q: "What does the woman want?",
          opts: ["Protection for the bees while they are rented", "A smaller number of hives to rent out", "Lower insurance costs for the farmers", "Permission to sell honey from the farm"], a: 0 },
        { id: 'a-M-01-L1-07', lines: [
          ['F', "The client says our translation of the pump manual is too literary. What do they mean?"],
          ['M', "I think the sentences are long and elegant, but a mechanic reading them with oily hands needs short, direct instructions."],
          ['F', "Fair point. So we break each step into a single command and cut the explanations."],
          ['M', "Keep the safety warnings in full, though. That's the one place where being clear matters more than being brief."]],
          q: "What does the man say about the safety warnings?",
          opts: ["They should be cut like the other steps", "They were translated too literally", "They should be moved to the end of the manual", "They should not be reduced in length"], a: 3 },
        { id: 'a-M-01-L1-08', lines: [
          ['M', "Your measurements show the glacier lost more ice last summer than in any year on record. Was that just a heat wave?"],
          ['F', "Partly, but there's a second factor. Dust from a dry valley nearby settled on the surface and made it darker."],
          ['M', "So it absorbed more sunlight."],
          ['F', "Exactly. A clean glacier reflects most of the sun's energy. Once it turns darker, melting speeds up even if temperatures stay the same."]],
          q: "According to the woman, what made the ice melt faster?",
          opts: ["A sudden rise in summer temperatures", "Water flowing in from a nearby valley", "A darker surface that took in more sunlight", "Heavier snow during the previous winter"], a: 2 },
        { id: 'a-M-01-L1-09', lines: [
          ['F', "Why did that tea sell for three times the price of the one before it? The leaves looked identical."],
          ['M', "They did, but this one came from a single small garden, and the buyer could trace every step of its processing."],
          ['F', "So the buyer was paying for the story as much as the taste?"],
          ['M', "For the certainty, I'd say. Large hotel chains need to guarantee their guests the same quality every time, and that's worth a lot."]],
          q: "Why, according to the man, was the tea so expensive?",
          opts: ["Its origin and processing could be checked", "Its leaves looked better than the others", "It was produced in very large quantities", "It had won a well-known tea competition"], a: 0 },
        { id: 'a-M-01-L1-10', lines: [
          ['M', "We've started using drones to inspect the river bridges. It's cut the inspection time in half."],
          ['F', "Impressive, but can a camera really find cracks inside the concrete?"],
          ['M', "No, and that's the limitation. The drones only see the surface. For the steel inside, we still send engineers with sound equipment."],
          ['F', "So the drones help you decide where to send the engineers first."],
          ['M', "Exactly. They narrow the search."]],
          q: "What is the main role of the drones?",
          opts: ["Replacing engineers in bridge inspections", "Showing engineers where to look more closely", "Measuring the condition of the steel inside", "Repairing small cracks in the concrete surface"], a: 1 },
        { id: 'a-M-01-L1-11', spk: 'F', say: "Before we enter the fabric gallery, a short note. The lights inside are kept deliberately low, at roughly a quarter of normal room lighting. Natural dyes, especially reds and yellows made from plants, fade quickly under strong light, and the damage is permanent. For the same reason, flash photography is not permitted. Please give your eyes a minute or two to adjust once you're inside.",
          q: "Why is the light in the gallery kept low?",
          opts: ["To create a calm atmosphere for visitors", "To help visitors' eyes adjust more quickly", "To reduce the museum's electricity costs", "To slow down the fading of the colors"], a: 3 },
        { id: 'a-M-01-L1-12', spk: 'M', say: "Most people think of soil as dead dirt, but a single teaspoon of healthy farmland can hold more living organisms than there are people on Earth. Researchers at the Halden Agricultural Institute have found that fields dug up less often keep far richer underground communities, including fungi that carry water to plant roots. In dry years, those fields produced up to a fifth more grain than neighboring farms. The catch is that the benefits take several seasons to appear.",
          q: "What is a drawback of the method described?",
          opts: ["It requires more water in dry years", "It reduces the amount of fungi in soil", "Its results are not seen immediately", "It only works on very small farms"], a: 2 },
        { id: 'a-M-01-L1-13', spk: 'F', say: "As you know, our soy sauce has always been aged in wooden barrels for eighteen months. Next year we'll trial steel tanks for part of the production. Let me be clear: this is not about cutting corners. Our oldest barrels are over a century old and impossible to replace, because the people who made them are gone. The trial will tell us whether steel can reproduce the flavor, so the barrels can be retired gradually rather than suddenly.",
          q: "Why is the company testing steel tanks?",
          opts: ["Its old barrels are impossible to replace", "Steel tanks make the process faster", "Customers now prefer a milder flavor", "It wants to reduce its production costs"], a: 0 },
        { id: 'a-M-01-L1-14', spk: 'M', say: "Young birds on their first long journey often do not follow their parents. Many species travel alone and at night, guided by an inner compass that senses the Earth's magnetic field. Experiments have shown, however, that this compass alone is not enough. Young birds that were moved hundreds of kilometers during their first journey kept flying in the original direction and missed their destination. Adult birds in the same experiment corrected their course. It seems a mental map must be built through experience.",
          q: "What did the experiment suggest about young birds?",
          opts: ["They depend on their parents to find the way", "They are unable to sense the magnetic field", "They correct their course faster than adults", "They have not yet developed a mental map"], a: 3 },
        { id: 'a-M-01-L1-15', spk: 'F', say: "Our company will fit two of its cargo ships on Pacific routes with large wing-like sails next spring. Computer modeling suggests fuel savings of around ten percent on those routes, where winds are steady. On shorter coastal routes, however, the sails would add weight without much benefit, so those ships will stay as they are. If the savings are confirmed after a full year, the board will consider extending the program across the fleet.",
          q: "Which ships will receive sails next spring?",
          opts: ["All the ships in the company's fleet", "Two ships used on Pacific routes", "Ships that travel on short coastal routes", "Newly built ships ordered by the board"], a: 1 }
      ]
    },
    L2: {
      items: [
        { id: 'a-M-01-L2-g1', intro: "Listen to a conversation between a museum curator and a paper conservator about a damaged map.",
          lines: [
            ['M', "Thanks for coming down so quickly. As you can see, the pipe above the storage room burst on Sunday night, and the harbor map was right underneath it."],
            ['F', "Let me have a look. The good news is that the paper itself is strong. It's made from cotton rags, not wood fiber, so it can survive being soaked. The bad news is the colors."],
            ['M', "The blue of the sea has spread into the coastline. Is that permanent?"],
            ['F', "Not necessarily. That blue comes from a mineral, which barely moves in water. What's running is the green used for the forests. It was probably mixed with a plant-based dye, and those dissolve easily."],
            ['M', "So what's the first step? Should we dry it immediately?"],
            ['F', "No, that's the most common mistake. If it dries slowly in this warm room, mold will appear within two days, and the stains will set. I'd rather freeze it tonight."],
            ['M', "Freeze it? That sounds risky."],
            ['F', "It's standard practice. Freezing stops both the mold and the movement of the dye. Then, once we have a proper plan, we can dry it in a vacuum chamber, where the ice turns straight into gas without becoming liquid first."],
            ['M', "Is there a chamber nearby? Ours was sold years ago."],
            ['F', "The university's food science department has one. They use it to freeze-dry fruit samples, but they've helped us before. I'll call their lab manager."],
            ['M', "And after it's dry, can the spread color be removed?"],
            ['F', "Partly. We can lift some of it with small, damp sheets of paper, a few millimeters at a time. But I won't promise a perfect result. Removing too much risks taking away the original ink along with the stain."],
            ['M', "Honestly, I'd rather keep a little damage than lose the original lines."],
            ['F', "I agree. Our job is to keep the object safe, not to make it look new. Visitors should be able to see that it has a history."],
            ['M', "How long will the whole process take? The map is supposed to be the main attraction of the spring exhibition."],
            ['F', "Drying, about three weeks. The careful cleaning, perhaps two months more. If you open in April, it's tight but possible. Still, I'd recommend making a high-quality copy now, just in case."],
            ['M', "A copy on display instead of the original? Some of our board members won't like that."],
            ['F', "Then display the copy next to the damaged original, with a panel explaining the rescue. In my experience, visitors find that story more interesting than a perfect object."],
            ['M', "That's actually a good idea. It turns an accident into part of the exhibition."]],
          qs: [
            { id: 'a-M-01-L2-01', q: "What does the woman say about the paper of the map?", opts: ["It was weakened by the water", "It must be replaced soon", "It can survive getting wet", "It was made from wood fiber"], a: 2 },
            { id: 'a-M-01-L2-02', q: "Which color is running because it contains a plant-based dye?", ans: ['green', 'the green', 'green color', 'the green color', 'the green of the forests', 'forest green'] },
            { id: 'a-M-01-L2-03', q: "Why does the woman not want to dry the map immediately?", opts: ["Mold could grow and the stains could set", "The vacuum chamber is not available yet", "The paper would shrink as it dries", "The blue color would begin to run"], a: 0 },
            { id: 'a-M-01-L2-04', q: "Which university department owns the vacuum chamber?", ans: ['food science', 'the food science department', 'food science department', 'the department of food science', 'department of food science'] },
            { id: 'a-M-01-L2-05', q: "What does the woman say about removing the spread color?", opts: ["It can be done completely with damp paper", "It should be done before the map is dried", "It is the fastest part of the whole process", "It may also remove some of the original ink"], a: 3 },
            { id: 'a-M-01-L2-06', q: "What view of restoration do the speakers share?", opts: ["Objects should look as they did originally", "Some signs of damage are acceptable", "Copies are as valuable as the originals", "Visitors need not be told about accidents"], a: 1 },
            { id: 'a-M-01-L2-07', q: "What does the man finally agree to?", opts: ["Delaying the exhibition until the summer", "Displaying only the copy of the map", "Showing a copy next to the damaged map", "Asking the board to pay for a storage room"], a: 2 }
          ] },
        { id: 'a-M-01-L2-g2', intro: "Listen to a conversation between two colleagues at a bicycle company about a new frame material.",
          lines: [
            ['F', "I read your report on the bamboo frames over the weekend. I have to admit, I expected you to recommend against them."],
            ['M', "So did I, at first. But the test results surprised me. In the vibration tests, bamboo absorbed road shock better than both our aluminum and carbon frames."],
            ['F', "Comfort matters a lot to touring riders, so that's a real selling point. What about strength?"],
            ['M', "That's where it gets complicated. The bamboo tubes themselves are strong enough. The weak point is the joints. We wrap them in natural fiber soaked in resin, and the quality varies a lot from one worker to another."],
            ['F', "So it's a skills problem, not a material problem."],
            ['M', "Mostly. Of the thirty frames we tested, four failed at the joints before reaching the required load. All four were built by the newest members of the team."],
            ['F', "Could a machine do the wrapping instead?"],
            ['M', "Not easily. Every bamboo stem is a slightly different shape, so a machine would need to measure each one first. It might be possible, but the equipment would cost more than the whole pilot project."],
            ['F', "Then training is the cheaper route. How long does it take someone to become reliable?"],
            ['M', "Our best builder says about three months of daily practice."],
            ['F', "And the supply side? I'm worried about relying on a natural product."],
            ['M', "That was my other concern, and it's less serious than I thought. The species we use grows to full size in about four years, and a group of farmers in the south has offered us a long-term contract. The bigger risk is moisture. Bamboo that isn't dried properly can split months later, after the bike is sold."],
            ['F', "Which would be a disaster for our reputation."],
            ['M', "Right. So I'd suggest we start small: a limited series of two hundred frames, sold with a longer warranty, and every frame tested before it leaves the building."],
            ['F', "A longer warranty on a product nobody has tested in the market? That sounds like inviting trouble."],
            ['M', "I see it the other way. It shows customers we trust the product. And if there are problems, we'll learn about them quickly."],
            ['F', "Fine. Put together a cost estimate for the training and the testing, and I'll take it to the director next week."]],
          qs: [
            { id: 'a-M-01-L2-08', q: "What surprised the man about the test results?", opts: ["Bamboo absorbed road shock better", "Bamboo frames were lighter than carbon", "Bamboo tubes broke under heavy loads", "Bamboo was cheaper than aluminum"], a: 0 },
            { id: 'a-M-01-L2-09', q: "Where did the four failed frames break?", ans: ['at the joints', 'the joints', 'joints', 'at joints', 'in the joints'] },
            { id: 'a-M-01-L2-10', q: "Why does the man think using a machine for the wrapping is difficult?", opts: ["Workers would oppose the change", "Machines are unable to apply resin", "The factory lacks space for new machines", "Each stem has a slightly different shape"], a: 3 },
            { id: 'a-M-01-L2-11', q: "How long does the bamboo take to reach full size?", ans: ['four years', '4 years', 'about four years', 'about 4 years', 'around four years', 'around 4 years'] },
            { id: 'a-M-01-L2-12', q: "According to the man, what is the bigger risk on the supply side?", opts: ["Farmers may end the contract early", "Badly dried bamboo may split later", "Prices may rise after four years", "Insects may damage stored bamboo"], a: 1 },
            { id: 'a-M-01-L2-13', q: "How does the woman first react to the idea of a longer warranty?", opts: ["She thinks it could cause problems", "She believes it will attract investors", "She considers it too costly to test", "She doubts customers will notice it"], a: 0 }
          ] }
      ]
    },
    L3: {
      items: [
        { id: 'a-M-01-L3-g1', intro: "Listen to part of a lecture in a history of technology course.", spk: 'M',
          say: "Today I want to look at something we rarely question: the time on our clocks. Until about 1850, almost every town set its clocks by the sun. When the sun reached its highest point, it was noon. This meant that a town just fifty kilometers to the east had its noon a few minutes earlier. For most of human history, nobody cared, because nobody traveled fast enough to notice. The railways changed that. A train leaving one city at nine o'clock local time might arrive in another city where the clocks showed a quite different hour. Timetables became a nightmare. In one large country, railway companies were using more than fifty different local times at once, and passengers regularly missed connections. More seriously, two trains on the same track could be working from different clocks, which led to crashes. The solution came from the railways themselves, not from governments. The companies agreed to divide the country into a small number of zones, each one hour apart, and to follow a single time within each zone. The change happened on one day, which some newspapers called the day of two noons, because clocks in many towns had to be set back and noon was struck twice. What I find fascinating is the resistance. Many people saw railway time as an attack on local identity. Some town halls kept two clocks on their walls, one showing true sun time and the other showing railway time. In a few places, the debate lasted for decades, and the new system only became law long after everyone was already using it. There's a lesson here for anyone who studies technology. We often assume that new systems are adopted because governments order it. Quite often, though, the law simply catches up with what businesses and ordinary people have already decided. Keep that in mind when we discuss the spread of electrical standards next week.",
          qs: [
            { id: 'a-M-01-L3-01', q: "Before the railways, how did most towns decide on the time?", opts: ["By following the time in the capital", "By the position of the sun", "By agreement with nearby towns", "By the schedules of the trains"], a: 1 },
            { id: 'a-M-01-L3-02', q: "What did some newspapers call the day of the change?", ans: ['the day of two noons', 'day of two noons', 'the day of 2 noons', 'day of 2 noons'] },
            { id: 'a-M-01-L3-03', q: "According to the speaker, what was the most serious problem with local times?", opts: ["Passengers missed their connections", "Timetables were hard to print", "Trains on the same track risked crashing", "Towns lost money from fewer visitors"], a: 2 },
            { id: 'a-M-01-L3-04', q: "What did some town halls keep on their walls?", ans: ['two clocks', '2 clocks', 'two different clocks', '2 different clocks'] },
            { id: 'a-M-01-L3-05', q: "According to the speaker, who introduced the time zones?", opts: ["The railway companies", "National governments", "Newspaper owners", "Local town councils"], a: 0 },
            { id: 'a-M-01-L3-06', q: "What is the main point the speaker wants students to remember?", opts: ["Governments should control new technologies", "Local identity was lost because of railways", "Electrical standards spread faster than time zones", "Laws often follow changes people have already made"], a: 3 }
          ] },
        { id: 'a-M-01-L3-g2', intro: "Listen to a report from a science radio program.", spk: 'F',
          say: "If you walk into a healthy forest at dawn, the first thing you notice is not what you see but what you hear. Birds, insects, frogs and even the wind in the leaves combine into a layered sound that scientists now call a soundscape. A growing number of ecologists believe that recording these soundscapes may be one of the cheapest ways to measure the health of a habitat. The idea is simple. Instead of sending trained experts to count animals, which is slow and expensive, researchers attach small recording devices to trees and leave them for months. Each device costs less than a pair of hiking boots and runs on batteries that last a whole season. Back in the lab, computer programs sort the recordings and measure how many different sounds fill the available range of pitches. Dr. Mira Castell, who leads a project in the mountain forests of the island's interior, explained the logic to us. In a rich habitat, she said, different species have evolved to call at different pitches, so they don't drown each other out. It's a bit like an orchestra, where the instruments share the space. When a forest is damaged, some of those voices disappear, and gaps open up in the recording. Her team has recorded more than thirty thousand hours so far. One unexpected finding was that logging roads affected the soundscape far beyond the area actually cleared. Sound diversity dropped as much as two kilometers away from a road, probably because the noise of trucks drove sensitive species deeper into the forest. Not everyone is convinced. Some researchers point out that a silent animal, such as a snake or a deer, leaves no trace in the data. Others worry that the computer programs could confuse rain with insect calls. Castell accepts these limits. Recordings, she says, are not a replacement for work in the field. They are an early warning system, telling us where to send the experts.",
          qs: [
            { id: 'a-M-01-L3-07', q: "What is the report mainly about?", opts: ["Using sound recordings to judge the health of forests", "Training experts to identify animal calls", "Protecting forests from logging companies", "How birds learn to call at different pitches"], a: 0 },
            { id: 'a-M-01-L3-08', q: "What power source do the recording devices use?", ans: ['batteries', 'battery', 'a battery', 'on batteries'] },
            { id: 'a-M-01-L3-09', q: "Why does Dr. Castell compare a forest to an orchestra?", opts: ["Animals in it call at the same time each day", "The loudest species control the others", "Species share the available range of pitches", "Its sounds change with the seasons"], a: 2 },
            { id: 'a-M-01-L3-10', q: "How far from a road did sound diversity drop?", ans: ['two kilometers', '2 kilometers', 'up to two kilometers', 'as much as two kilometers', 'about two kilometers', 'two kilometres', '2 kilometres'] },
            { id: 'a-M-01-L3-11', q: "Which criticism of the method is mentioned in the report?", opts: ["The devices are too costly to use widely", "Animals that make no sound are missed", "Recordings take too long to analyze", "Experts disagree about what a soundscape is"], a: 1 },
            { id: 'a-M-01-L3-12', q: "What is Dr. Castell's view of the recordings?", opts: ["They can fully replace work in the field", "They are less reliable than counting animals", "They should only be used in mountain forests", "They help decide where field studies are needed"], a: 3 }
          ] }
      ]
    },
    R1: {
      items: [
        { id: 'a-M-01-R1-g1', type: 'head', title: "Reviving Natural Indigo",
          heads: [
            "Government plans to protect traditional crafts",
            "Why the cloth changes color in the air",
            "A blue that once traveled the world",
            "Bacteria that might do the work for us",
            "A living mixture that needs daily care",
            "Hidden environmental costs on both sides",
            "Why buyers prefer the brightest blues",
            "Cheaper, faster and made in a factory",
            "Young makers and paying visitors"],
          paras: [
            "For thousands of years, indigo was one of the most widely traded colors on Earth. Plants containing the dye grew in Asia, Africa, Europe and the Americas, and each region developed its own methods of turning green leaves into deep blue cloth. Merchants carried blocks of the dried dye across oceans, and in some places it was valuable enough to be used in place of money.",
            "The process behind that blue is surprisingly complex. Indigo does not dissolve in water, so dyeing with it is not a matter of simply soaking fabric. The dyer must first remove oxygen from the dye bath, which turns the liquid a strange yellow-green. Cloth dipped into this bath comes out the same pale color. Only when it meets the air does the oxygen return, and within a minute the fabric turns blue before the dyer's eyes.",
            "In traditional workshops, oxygen is removed not by chemicals but by bacteria. The dyer feeds the vat with materials such as wheat or fruit sugar, keeps it warm, and checks it every morning by its smell, color and the thin copper-colored skin on its surface. A healthy vat can be used for years. A neglected one, left too cold or fed too much, can die in a few days, and its bacteria must be built up again from the beginning.",
            "Around 1890, chemists learned to make indigo from substances derived from coal and later from oil. The synthetic dye was cheaper, more consistent and available in any quantity. Within a few decades, indigo farming had almost disappeared, and the knowledge of living vats survived mainly among a few elderly craft workers in rural villages.",
            "Over the past twenty years, that knowledge has found new students. Young designers have set up small studios that use only plant indigo, and some charge visitors to dip their own scarves in a living vat. Their cloth may cost several times as much as factory denim, but customers say they are paying for a slower, more personal way of making things.",
            "Supporters often present natural indigo as the environmentally friendly choice, but the picture is mixed. Synthetic production relies on strong chemicals, and poorly managed factories have released them into rivers. Growing indigo plants, however, requires land and water, and a single vat of dye needs a large field of leaves. Researchers who have compared the two methods conclude that the answer depends heavily on how and where each is practiced.",
            "Some scientists are now looking for a third path. By borrowing genes from the bacteria that already live in dye vats, laboratories have engineered microbes that produce indigo directly from sugar. The method is still expensive, but if it can be scaled up, it might combine the steady output of the factory with something close to the gentle chemistry of the traditional vat."],
          ex: { p: 0, h: 2 },
          qs: [
            { id: 'a-M-01-R1-01', p: 1, a: 1 },
            { id: 'a-M-01-R1-02', p: 2, a: 4 },
            { id: 'a-M-01-R1-03', p: 3, a: 7 },
            { id: 'a-M-01-R1-04', p: 4, a: 8 },
            { id: 'a-M-01-R1-05', p: 5, a: 5 },
            { id: 'a-M-01-R1-06', p: 6, a: 3 }
          ] },
        { id: 'a-M-01-R1-g2', type: 'head', title: "How a New Sign Language Is Born",
          heads: [
            "Machines that can translate gestures",
            "The youngest learners add the rules",
            "Gestures invented at home",
            "Who controls the research?",
            "A rare chance to watch a language begin",
            "Using the space around the body",
            "Teaching hearing parents to sign",
            "A shared system with few rules",
            "What the case suggests about the mind",
            "Why some languages disappear"],
          paras: [
            "Language researchers study languages that have existed for thousands of years, and they almost never see one appear. In recent decades, however, a small number of deaf communities in different parts of the world have allowed researchers to observe something remarkable: a sign language forming, within living memory, from almost nothing.",
            "The story usually begins with isolation. Before a school for deaf children opens, each deaf child typically grows up in a hearing family with no access to an established sign language. To communicate, child and family develop what researchers call home signs, simple gestures for food, sleep or a particular relative. These systems are private, and each family's version is different.",
            "When such children are brought together for the first time, they quickly begin to combine their home signs into a shared system. Vocabulary grows fast, because everyone contributes words. Grammar, however, remains limited. A single sign may mean several different things, and the order of signs in a sentence varies from one speaker to the next.",
            "The decisive change comes with the next group of pupils. Younger children who learn the system from older classmates do not simply copy it. They make it more regular, adding consistent ways to show who did what to whom and when. Remarkably, these innovations are not taught by anyone. They appear to come from the children themselves.",
            "One of the most striking innovations involves space. Younger children assign each person in a story to a location in front of their body and then point to that location whenever they refer to the person again. Moving the hand from one location to another can show that one person gave something to another. Many older users understand these forms but rarely use them.",
            "These observations have fed a long debate about how much of language is built into the human brain. The way children added structure suggests that young minds are prepared to find and create patterns. Yet the same research shows that this ability needs company. Deaf children who remained isolated at home never developed full grammar, however intelligent they were.",
            "Studying a young language also raises ethical questions. Early researchers sometimes took recordings away and published them without asking the community. Today, deaf users of the language increasingly lead the studies themselves, and communities decide which recordings may be shared and how their language should be described to the outside world."],
          ex: { p: 0, h: 4 },
          qs: [
            { id: 'a-M-01-R1-07', p: 1, a: 2 },
            { id: 'a-M-01-R1-08', p: 2, a: 7 },
            { id: 'a-M-01-R1-09', p: 3, a: 1 },
            { id: 'a-M-01-R1-10', p: 4, a: 5 },
            { id: 'a-M-01-R1-11', p: 5, a: 8 },
            { id: 'a-M-01-R1-12', p: 6, a: 3 }
          ] },
        { id: 'a-M-01-R1-g3', type: 'match',
          texts: [
            { title: "Reading the Waves", body: "Long before modern instruments, navigators in the islands of the Pacific crossed thousands of kilometers of open ocean in large double canoes. Their main tool was memory. A navigator learned the rising and setting points of more than a hundred stars, using them as a compass that changed through the night. When clouds hid the sky, he turned to the ocean itself. Swells created by distant weather keep a steady direction for days, and an experienced navigator could feel their pattern through the body of the canoe, sometimes lying down to sense them better. Islands bend these swells, so a change in their rhythm could reveal land long before it came into view. Birds offered another clue, since certain species fly out to sea to feed in the morning and return to land in the evening. This knowledge was passed down through chants and long apprenticeships, and it was almost lost in the last century. A revival that began in 1976, when a canoe completed a long voyage without instruments, has since trained a new generation of navigators." },
            { title: "The Sunstone Question", body: "Medieval stories from northern Europe mention a sunstone that sailors used to find the sun on cloudy days. For a long time, historians treated it as a legend. In recent decades, however, scientists have taken the idea seriously. Certain transparent crystals, common in that region, split light into two beams. When such a crystal is turned, the strength of the two beams changes according to the direction of sunlight, even when the sun is hidden behind thick clouds or has just set below the horizon. In laboratory tests, volunteers using these crystals located the sun to within a few degrees. A crystal of this type was even recovered from a shipwreck about five hundred years old, lying next to the ship's navigation instruments, although that ship sailed long after the age of the stories. Critics point out that no crystal has been found at any earlier site, and that sailors could also have relied on the color of the sky or the behavior of sea birds. The question remains open, but the experiments have at least shown that the method could have worked." },
            { title: "A Card, a String and a Star", body: "On the trading routes of the Indian Ocean, sailors developed a simple but clever device for measuring how far north they were. It consisted of a small wooden card with a knotted string attached to its center. The navigator held the end of the string in his teeth and moved the card away from his face until its lower edge touched the horizon and its upper edge touched the Pole Star. The knot at which the string became tight showed the height of the star, which indicated the ship's position. Each knot stood for a particular port, so a pilot did not need to calculate anything. He simply sailed along the coast until the right knot matched the star, and then turned toward the land. The device was cheap, light and easy to repair, which kept it in use for centuries. Its limits were also clear. It worked only on clear nights, and the Pole Star sinks so low near the equator that measurements there became unreliable." }],
          qs: [
            { id: 'a-M-01-R1-13', q: "Which passage describes a method that has been tested in a laboratory?", a: 1 },
            { id: 'a-M-01-R1-14', q: "Which passage mentions knowledge being passed on through songs?", a: 0 },
            { id: 'a-M-01-R1-15', q: "Which passage describes a tool that linked a measurement directly to a destination?", a: 2 },
            { id: 'a-M-01-R1-16', q: "Which passage mentions a way of detecting land before it could be seen?", a: 0 },
            { id: 'a-M-01-R1-17', q: "Which passage mentions a tool that became less useful in certain parts of the world?", a: 2 },
            { id: 'a-M-01-R1-18', q: "Which passage mentions evidence recovered from the bottom of the sea?", a: 1 },
            { id: 'a-M-01-R1-19', q: "Which passage refers to a successful voyage in modern times?", a: 0 },
            { id: 'a-M-01-R1-20', q: "Which passage notes that other explanations may also be possible?", a: 1 }
          ] }
      ]
    },
    R2: {
      items: [
        { id: 'a-M-01-R2-g1',
          texts: [{ type: 'article', title: "The Price of a Rose", body: "Walk past the perfume counter of any department store and you will hear stories of rare flowers picked at dawn and precious woods gathered from remote forests. The reality of the modern fragrance industry is rather different. Most of the ingredients in a typical perfume today were not grown at all. They were made in a laboratory, and the industry's most closely guarded secrets are not the locations of flower fields but the formulas for synthetic molecules.\nThe economics explain why. To produce a single kilogram of rose oil, producers need roughly three to four tons of petals, all of which must be picked by hand within a few hours of opening, before the heat of the day carries the scent away. A poor harvest, caused by a late frost or a dry spring, can double the price within a season. A synthetic molecule, by contrast, can be produced in any quantity, at a stable cost, with the same smell every time. For a company selling millions of bottles, being consistent is worth more than romance.\nSynthetic ingredients have also expanded what perfumers can do. Some flowers, such as lily of the valley, yield no oil that can be used at all, however carefully they are processed. For most of the last century, their scent existed in perfume only as an imitation, built from other materials. Then chemists developed a technique in which a glass cover is placed over a living flower and the air around it is collected and analyzed. The resulting chemical portrait can be built again from synthetic molecules. Perfumers suddenly had access to the smell of a flower as it grows in the garden, rather than as it smells after being boiled or soaked.\nNone of this has made natural materials disappear. Many of the most respected perfumes still contain natural oils, partly for marketing reasons, but also because a natural oil is not a single molecule. Rose oil contains hundreds of compounds, some present in tiny amounts, which give it a depth that a simple mixture of synthetics struggles to match. Perfumers often describe synthetics as the bright, reliable notes of a piece of music and naturals as the warmth that makes it sound human.\nIronically, the rules that govern the industry have begun to favor synthetics. Several natural oils contain substances that can cause skin reactions in a small number of people, and officials have limited how much of them a perfume may contain. Because a natural oil is difficult to separate into its parts, perfumers sometimes find that the only way to obey the rules is to replace a natural ingredient entirely. Customers who seek natural products for health reasons may therefore be pushing the industry toward the laboratory.\nThere is also an environmental argument, though it cuts both ways. Synthetic production depends on chemicals often derived from oil, and its factories produce waste that must be treated. Yet growing flowers on an industrial scale requires land, water and chemicals to feed the soil, and some woods once prized by perfumers were harvested so heavily that wild trees became rare. In those cases, a synthetic replacement has probably protected a species.\nThe wisest conclusion may be that the line between natural and synthetic matters less than the industry's marketing suggests. A good perfume is a careful balance of materials chosen for what they do, not for where they come from. The flower picked at dawn is still part of the story, but it is no longer the whole of it." }],
          qs: [
            { id: 'a-M-01-R2-01', q: "What is the main idea of the article?", opts: ["Natural perfumes are of higher quality than synthetic ones", "Officials have made perfumes less safe for customers", "Modern perfumes rely heavily on laboratory-made ingredients", "Flower farming has become the industry's biggest business"], a: 2 },
            { id: 'a-M-01-R2-02', q: "Why does the price of rose oil change so easily?", opts: ["Producers have to work through the night", "Synthetic substitutes keep becoming cheaper", "Laws limit how much rose oil may be sold", "Its supply depends on weather conditions"], a: 3 },
            { id: 'a-M-01-R2-03', q: "What can be inferred about perfumes with the scent of lily of the valley in the past?", opts: ["Their scent was only a rough copy of the real flower's", "They were made mainly from the flower's own oil", "They were among the most expensive perfumes", "They were banned because they caused skin reactions"], a: 0 },
            { id: 'a-M-01-R2-04', q: "What is the author's attitude toward the claim that natural ingredients are better?", opts: ["Fully convinced that the claim is true", "Doubtful but willing to see both sides", "Angry that customers are being misled", "Uninterested in the question altogether"], a: 1 },
            { id: 'a-M-01-R2-05', q: "In paragraph 6, the phrase \"cuts both ways\" is closest in meaning to", opts: ["is completely false", "is easy to prove", "is a recent idea", "has two opposite sides"], a: 3 }
          ] },
        { id: 'a-M-01-R2-g2',
          texts: [{ type: 'article', title: "Charting the Deep", body: "We have better maps of the surface of the Moon than of the bottom of our own oceans. The statement has been repeated so often that it has become a familiar saying, but it remains largely true. Satellites can estimate the shape of the seabed by measuring tiny bumps in the ocean's surface caused by the pull of underwater mountains, yet these estimates are unclear. They can reveal a mountain range but miss a hill the size of a city block. Only about a quarter of the seafloor has been measured directly at a level of detail that scientists consider useful.\nDirect measurement relies on sonar. A ship sends pulses of sound toward the bottom and times how long the sound takes to come back. Modern systems send out a wide fan of beams, mapping a strip of seabed several kilometers wide in a single pass. The difficulty is scale. The deep ocean covers more than half of the planet, and a research ship costs tens of thousands of dollars a day to operate. At the speed such ships travel, mapping the remaining area with traditional methods alone would take centuries.\nSeveral developments are now speeding up the work. The first is a small boat with no one on board, often powered by solar panels and wind, that can follow a programmed route for months without a crew. Such vessels are slow, but they are cheap and never get tired, and they can be sent into remote waters where research ships rarely go. The second is a shift in who collects the data. Fishing boats, cargo ships and private yachts already carry equipment that measures depth for safety, and a growing number of owners have agreed to share their readings with an international database. Each reading on its own is of limited value, but millions of them, combined and checked against one another, begin to fill the gaps.\nWhy does any of this matter? The reasons are more practical than they might seem. The shape of the seafloor controls how ocean currents move heat around the planet, and climate models depend on knowing it. It determines how a tsunami travels and how high its waves will be when they reach the coast, so better maps can mean more accurate warnings. Engineers laying the cables that carry most of the world's internet traffic need to avoid steep slopes and loose ground. Scientists who study sea life, meanwhile, have found that underwater mountains often support rich communities of life, many of them unknown to science.\nThe project is not without its critics. Detailed maps of the seafloor are also of interest to companies hoping to mine metals from the deep ocean, and some scientists worry that better mapping will simply accelerate the exploitation of easily damaged habitats before they have even been studied. Others raise questions about who should control the data. If a map of a nation's coastal waters is made by a foreign vessel, should it be freely available to everyone?\nThese concerns are serious, but they are arguments about how the knowledge is used, not about whether it should exist. A map is a tool, and like any tool, its value depends on the hands that hold it. For now, the more urgent problem is that most of the ocean floor remains, quite literally, a blank space on the map. Whatever we decide to do in the deep sea, we will decide better if we can see it." }],
          qs: [
            { id: 'a-M-01-R2-06', q: "What is the article mainly about?", opts: ["Efforts to map the seafloor and why they matter", "The use of satellites to study the Moon", "The dangers of mining metals from the deep ocean", "How sonar was first invented and developed"], a: 0 },
            { id: 'a-M-01-R2-07', q: "According to the article, what is the main weakness of satellite measurements?", opts: ["They are too expensive to repeat often", "They do not work over remote waters", "They fail to show smaller features clearly", "They are affected by ocean currents"], a: 2 },
            { id: 'a-M-01-R2-08', q: "What can be inferred about the depth readings shared by fishing boats and cargo ships?", opts: ["They are more accurate than those from research ships", "They become useful mainly when combined in large numbers", "They are collected chiefly for scientific purposes", "They are kept secret by the international database"], a: 1 },
            { id: 'a-M-01-R2-09', q: "How does the author respond to the critics of seafloor mapping?", opts: ["By agreeing that mapping should be stopped", "By arguing that mining companies are harmless", "By ignoring their concerns completely", "By accepting their concerns but supporting mapping"], a: 3 },
            { id: 'a-M-01-R2-10', q: "In paragraph 5, the word \"accelerate\" is closest in meaning to", opts: ["speed up", "slow down", "make illegal", "pay for"], a: 0 }
          ] },
        { id: 'a-M-01-R2-g3',
          texts: [
            { type: 'letter', from: "Helen Ward, Larkford Heritage Society", to: "City Planning Committee", title: "Proposal: Reopening the Old Mill Canal", body: "Dear Members of the Committee,\nI am writing on behalf of the Larkford Heritage Society to propose that the city reopen the section of the Old Mill Canal that was covered over in 1962. For more than a century, the canal carried boats loaded with grain to the mills along Bridge Street and gave the town center its character. When road traffic grew, it was filled in and turned into a parking area. Today, few residents under the age of sixty even know that it existed.\nSeveral cities in the region have shown what can be gained by bringing hidden rivers and canals back to the surface. In each case, the reopened channel has become a popular public space, with paths, coffee shops and small boats, and nearby property values have risen. Shops along the former parking area have struggled for years, and a waterfront could give them a reason to exist again.\nThere are environmental benefits too. An open channel lined with plants cools the surrounding streets during summer heat and provides a home for birds and insects. It also allows rain to drain away naturally rather than putting too much pressure on the underground pipes, as happened during last autumn's storms.\nWe recognize that the project would not be cheap. However, we believe that part of the cost could be covered by regional heritage grants, and our members have offered to raise funds and volunteer their time. We ask the committee to pay for a full study of the plan, which would give the city accurate figures on which to base a decision.\nYours sincerely,\nHelen Ward\nChair, Larkford Heritage Society" },
            { type: 'letter', from: "Daniel Brooks, City Engineer", to: "Helen Ward", title: "Reply: The Old Mill Canal", body: "Dear Ms. Ward,\nThank you for your letter, which the committee discussed at its meeting on 12 March. Members were broadly sympathetic to the idea, and I have been asked to reply on their behalf with a number of points that any study would need to address.\nFirst, the canal is not simply buried. It has been partly replaced. In 1984, a main sewer pipe was laid along its route, and moving it would be the single largest cost of the project. Our early estimate is that this work alone would exceed the total budget available for heritage projects over the next five years.\nSecond, I would urge caution about the flooding argument. An open channel can help manage rain, but only if it is designed to do so. The original canal was fed by the river, and during the storms you mention, the river rose more than two meters. Without carefully designed gates, a reopened canal could bring flood water into the town center rather than carrying it away.\nThird, the comparison with other cities should be made with care. In at least two of the examples your society has published, the channels were reopened as part of much larger building schemes, funded largely by private companies. Larkford has no such scheme planned.\nNone of this means the idea should be abandoned. The committee has agreed to fund a limited study of the canal's eastern section, where there is no sewer, to test whether a shorter channel is practical. I would be glad to meet with your society to discuss its scope.\nYours sincerely,\nDaniel Brooks\nCity Engineer" }],
          qs: [
            { id: 'a-M-01-R2-11', q: "What is the main purpose of Helen Ward's letter?", opts: ["To complain about the condition of Bridge Street", "To ask the city to study reopening the canal", "To raise money for local shops near the canal", "To protest against plans for a new parking area"], a: 1 },
            { id: 'a-M-01-R2-12', q: "According to Daniel Brooks, what would be the most expensive part of the project?", opts: ["Building gates to control the river", "Removing the parking area", "Planting the banks of the channel", "Moving an underground sewer pipe"], a: 3 },
            { id: 'a-M-01-R2-13', q: "On which point do the two writers most clearly disagree?", opts: ["Whether the canal was historically important", "Whether the committee should hold a meeting", "Whether an open canal would reduce flooding", "Whether shops in the area are struggling"], a: 2 },
            { id: 'a-M-01-R2-14', q: "In the second letter, the word \"sympathetic\" is closest in meaning to", opts: ["supportive", "confused", "suspicious", "worried"], a: 0 },
            { id: 'a-M-01-R2-15', q: "Which best describes Daniel Brooks's attitude toward the proposal?", opts: ["Enthusiastic and ready to approve it", "Negative and unwilling to discuss it", "Cautious but open to a smaller version", "Neutral because he lacks information"], a: 2 }
          ] },
        { id: 'a-M-01-R2-g4',
          texts: [{ type: 'article', title: "On the Tip of the Tongue", body: "Almost everyone knows the feeling. You are trying to recall the name of an actor, a street or an old classmate, and you are certain you know it. You may even be able to say what letter it begins with or how many syllables it has, yet the word itself refuses to appear. Psychologists call this a tip-of-the-tongue state, and for more than half a century it has offered them a rare window into how memory for words is organized.\nThe most important lesson from this research is that knowing a word is not a single piece of knowledge. When we speak, we first select the meaning we want to express, and only then retrieve the sounds that make up the word. In a tip-of-the-tongue state, the first step has succeeded but the second has partly failed. That is why people can often describe the thing they mean in great detail, and can sometimes produce pieces of the sound, while the complete word stays out of reach.\nEarly experiments created these states on purpose. Researchers read out definitions of rare words, such as the name of an old navigation instrument, and asked volunteers to supply the word. When participants reported that the answer was on the tip of their tongue, they were asked to guess its first letter and its length. Their guesses were correct far more often than chance would predict, showing that partial information about a word's form is available even when the full form is not.\nSome groups of people experience these states more often than others. Older adults report them more frequently, which is sometimes taken as a sign of declining memory. The evidence suggests a different interpretation. Older people usually know more words than younger people, and their failures tend to involve rare words and names, which have weaker connections between meaning and sound. Bilingual speakers also report more tip-of-the-tongue states, despite having larger total vocabularies. A likely explanation is that each language is used less often than it would be by someone who speaks only one, so the links in each language are slightly less practiced.\nWhat helps? Waiting is often the most effective strategy, and the word frequently returns when the person has stopped trying. Hearing a word with similar sounds can help too. In one study, volunteers who heard words sharing the first syllable of the missing word escaped from the state more often than those who heard unrelated words. Gestures may also play a role. People who were prevented from moving their hands while describing objects had more difficulty finding words, although this finding has proved hard to repeat.\nThere is a curious side effect. Once a person has been stuck on a particular word, they are more likely to get stuck on it again in the future, as if the brain has practiced the failure. Researchers suggest that the best remedy is to say the word aloud several times once it has been found.\nFor most people, an occasional tip-of-the-tongue state is nothing to worry about. It is not a sign that memory is broken but evidence of how it works: a system that stores meaning and sound separately and usually, though not always, manages to bring them together in a fraction of a second." }],
          qs: [
            { id: 'a-M-01-R2-16', q: "What is the main point of the article?", opts: ["Older adults should train their memory every day", "Bilingual speakers have weaker vocabularies", "Gestures are the best cure for forgotten words", "Tip-of-the-tongue states show how word memory works"], a: 3 },
            { id: 'a-M-01-R2-17', q: "According to the article, what did early experiments show?", opts: ["People often know parts of a word they are unable to recall", "Rare words are forgotten more slowly than common ones", "Definitions make it harder to remember words", "Volunteers rarely experienced the state in a laboratory"], a: 0 },
            { id: 'a-M-01-R2-18', q: "What does the author suggest about older adults' tip-of-the-tongue states?", opts: ["They prove that memory declines with age", "They partly reflect the size of their vocabulary", "They happen mainly with very common words", "They can be prevented by learning a language"], a: 1 },
            { id: 'a-M-01-R2-19', q: "How does the author view the research on gestures?", opts: ["As firmly proven by many studies", "As the most important finding discussed", "As interesting but not yet reliable", "As a mistake that should be ignored"], a: 2 },
            { id: 'a-M-01-R2-20', q: "In the last paragraph, the phrase \"a fraction of a second\" means", opts: ["a period of several seconds", "a very short moment", "a gradual process", "an uncertain length of time"], a: 1 }
          ] }
      ]
    }
  }
});
