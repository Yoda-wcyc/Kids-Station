/* a-L2-01 長篇對話 第 1 組（原創，2026-11-15） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'a-L2-01',
  title: '長篇對話 1',
  names: [],
  extra: ['landfill', 'compost'],
  items: [
    { id: 'a-L2-01-g1', intro: "Listen to a conversation between a graduate student and her supervisor about her research on city birds.",
      lines: [
        ['F', "Thanks for seeing me, Professor Chen. I wanted to talk about the results from my first season of field research."],
        ['M', "Of course, Emily. Last time you mentioned that the birds in the city parks were singing differently from those in the countryside. Did that pattern hold?"],
        ['F', "It did, and even more clearly than I expected. In the parks near busy roads, the birds sang at a noticeably higher pitch. At the quiet forest sites, the songs were lower and longer."],
        ['M', "That fits what other researchers have reported. The usual explanation is that a higher song carries better over the low sound of traffic. But how do you know it's the noise and not something else about the city, such as light at night or a different mix of species?"],
        ['F', "That's exactly my problem. All of my city sites are both noisier and brighter than my forest sites, so I can't separate the two factors."],
        ['M', "Is there any place where the two don't go together?"],
        ['F', "Actually, yes. There's a park next to the airport that's extremely noisy but almost completely dark at night, because the airport limits lighting there for safety reasons."],
        ['M', "That's valuable. A single site won't prove anything on its own, but it could suggest which factor matters more. What would you need to add it?"],
        ['F', "Mainly recording equipment. We have only six recording devices, and they're all in use. A new one costs about four hundred dollars."],
        ['M', "The department has a small fund for exactly this kind of expense. Write me a one-page request explaining why the site is important, and I'll sign it."],
        ['F', "Thank you. There's one more thing. A local radio station has asked me to talk about the project on a science program."],
        ['M', "I think that's a good idea, as long as you're careful about what you say. Your results are preliminary. If you tell listeners that traffic is changing bird song, someone will repeat it as a proven fact."],
        ['F', "So I should describe it as a pattern we're still investigating."],
        ['M', "Exactly. And mention the lighting question. Listeners often find the uncertainty more interesting than a neat answer."],
        ['F', "I'll do that. Should I mention the airport site?"],
        ['M', "I'd wait until we have permission to record there. The airport authority hasn't agreed yet, and it wouldn't help to announce plans that might fall through."]
      ],
      qs: [
        { id: 'a-L2-01-01', q: "What pattern did Emily find in her first season of field research?", opts: [
          "Birds in noisy parks sang at a higher pitch.",
          "Birds in the forest sang more often than city birds.",
          "City birds sang only during the hours of darkness.",
          "Forest birds copied the songs of city birds."
        ], a: 0 },
        { id: 'a-L2-01-02', q: "What problem does Emily have with her current data?", opts: [
          "Her recordings contain too much traffic noise to analyze.",
          "Two possible causes always appear together at her sites.",
          "She has recorded too few species in the forest.",
          "Other researchers have reported the opposite results."
        ], a: 1 },
        { id: 'a-L2-01-03', q: "Why is the park next to the airport dark at night?", ans: ['for safety reasons', 'safety reasons', 'safety', 'for safety', 'because of safety', 'airport safety rules'] },
        { id: 'a-L2-01-04', q: "What does Professor Chen say about the airport site?", opts: [
          "It will prove that noise changes bird song.",
          "It is too noisy for the equipment to work.",
          "It could indicate which factor is more important.",
          "It has already been studied by other researchers."
        ], a: 2 },
        { id: 'a-L2-01-05', q: "How much does one new recorder cost?", ans: ['about 400 dollars', '400 dollars', 'about four hundred dollars', 'four hundred dollars', '$400', '400'] },
        { id: 'a-L2-01-06', q: "What advice does the professor give about the radio program?", opts: [
          "Refuse the invitation until the research is finished.",
          "Focus on the airport site because listeners will find it exciting.",
          "Avoid mentioning the question about lighting at night.",
          "Present the results as a pattern that is still being studied."
        ], a: 3 },
        { id: 'a-L2-01-07', q: "Why does the professor suggest not mentioning the airport site yet?", opts: [
          "Permission to work there has not been given.",
          "The site might attract too many visitors.",
          "The radio station has asked her not to discuss it.",
          "The department has not approved the cost of equipment."
        ], a: 0 }
      ] },
    { id: 'a-L2-01-g2', intro: "Listen to a conversation between two colleagues at a food company about a new packaging proposal.",
      lines: [
        ['F', "Kevin, have you had a chance to look at the packaging proposal from the design team?"],
        ['M', "I read it last night. Replacing the plastic trays in our ready meals with paper ones sounds great on paper, if you'll forgive the joke."],
        ['F', "I'll forgive it if you tell me what's wrong with it."],
        ['M', "Two things. First, the paper trays need a thin coating to stop sauces from soaking through. That coating makes them very hard to recycle, so many will end up in landfill anyway."],
        ['F', "But the design team says the trays will break down naturally."],
        ['M', "Only in industrial composting facilities, and there are just three of those in the whole region. In an ordinary landfill, they'll last for years."],
        ['F', "So the environmental benefit might be smaller than it looks. What's the second problem?"],
        ['M', "Shelf life. Our tests showed that meals in the paper trays stayed fresh for four days instead of seven. Shops will throw away more food, and wasted food has its own environmental cost."],
        ['F', "That's a serious point. If we cut plastic but increase food waste, we might do more harm overall."],
        ['M', "Exactly. I'm not against changing the packaging. I just think we need a full comparison, from production to disposal, before we commit."],
        ['F', "A full study like that would take months, though. Marketing wants to announce the new trays at the trade fair in March."],
        ['M', "Then let's offer them something smaller. We could reduce the plastic in the current trays by making the walls thinner. The engineers think we can save about twenty percent without any loss of strength."],
        ['F', "That's less exciting than 'plastic-free', but it's honest, and we could do it quickly."],
        ['M', "And it gives us time to study the paper option properly. If it really is better, we'll have the evidence to support the claim."],
        ['F', "I like that. Marketing will be disappointed, but I'd rather that than have a newspaper discover our trays sitting in landfills."],
        ['M', "Shall I prepare a short summary for the meeting on Thursday?"],
        ['F', "Yes, please. Keep it to one page and put the shelf-life figures at the top. Those numbers will get people's attention."]
      ],
      qs: [
        { id: 'a-L2-01-08', q: "What is Kevin's first objection to the paper trays?", opts: [
          "They are more expensive to produce than plastic.",
          "They are too weak to hold heavy meals.",
          "Customers dislike the appearance of paper trays.",
          "Their coating makes them difficult to recycle."
        ], a: 3 },
        { id: 'a-L2-01-09', q: "How many industrial composting facilities are there in the region?", ans: ['three', '3', 'just three', 'only three', 'three facilities', '3 facilities'] },
        { id: 'a-L2-01-10', q: "What did the company's tests show about the paper trays?", opts: [
          "They broke down quickly in ordinary landfills.",
          "They kept meals fresh for a shorter time.",
          "They allowed sauces to soak through.",
          "They were preferred by most shoppers."
        ], a: 1 },
        { id: 'a-L2-01-11', q: "Why does Grace hesitate about a full comparison study?", opts: [
          "It would require hiring outside experts.",
          "It might prove that plastic is better.",
          "It could not be completed before the trade fair.",
          "The engineers have refused to take part."
        ], a: 2 },
        { id: 'a-L2-01-12', q: "By about what percentage could thinner walls reduce the plastic used?", ans: ['20 percent', 'twenty percent', 'about 20 percent', 'about twenty percent', '20%', '20'] },
        { id: 'a-L2-01-13', q: "What does Grace ask Kevin to put first in his summary?", opts: [
          "The cost of the thinner plastic trays.",
          "The results about how long meals stay fresh.",
          "The opinions of the marketing department.",
          "The number of trays that end up in landfills."
        ], a: 1 }
      ] }
  ]
});
