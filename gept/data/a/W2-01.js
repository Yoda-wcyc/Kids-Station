/* a-W2-01 圖表寫作 第 1 組（原創，2026-11-15；數據為虛構） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'a-W2-01',
  title: '圖表寫作 1',
  names: [],
  extra: [],
  items: [
    { id: 'a-W2-01-01',
      prompt: '下面兩個表格是某大學學生餐廳近三年的廚餘量，以及學生剩下食物的原因調查。請寫一篇約 250 字的英文文章（可以用投書給校刊的格式），說明表格的重點，並提出具體的解決辦法。',
      charts: [
        { cap: "Food Waste in the Campus Cafeteria (kilograms per day)", head: ['Year', 'Breakfast', 'Lunch', 'Dinner', 'Total'], rows: [
          ['2023', '45', '120', '95', '260'],
          ['2024', '48', '140', '102', '290'],
          ['2025', '50', '165', '110', '325']
        ] },
        { cap: "Main Reason Students Leave Food (survey of 600 students, 2025)", head: ['Reason', 'Students'], rows: [
          ['Portions are too large', '38%'],
          ['Food is cold or poorly cooked', '24%'],
          ['Not enough time to finish', '18%'],
          ['Did not like the taste', '14%'],
          ['Other reasons', '6%']
        ] }
      ],
      model: "To the Editor:\nThe figures recently published by the university's food service office reveal a problem that deserves more attention. Between 2023 and 2025, the amount of food thrown away in the campus cafeteria rose from 260 to 325 kilograms a day, an increase of 25 percent. Lunch is clearly the main source of the problem: waste at lunch grew from 120 to 165 kilograms, while breakfast remained almost unchanged.\nThe student survey helps explain why. The most common reason students gave for leaving food was that portions are too large, mentioned by 38 percent of those asked. Another 24 percent said the food was cold or poorly cooked, and 18 percent said they did not have enough time to finish. Taste, interestingly, was a less important factor.\nThese results suggest that the waste is caused less by students' habits than by the way meals are served. I would therefore like to propose three changes. First, the cafeteria should offer two portion sizes at lunch, with a lower price for the smaller one, so that students pay only for what they will eat. Second, since many students are in a hurry, the university could avoid scheduling classes between 12:00 and 12:30, or extend lunch service so that the busiest period is spread out. Third, the kitchen should keep dishes warm until they are served and collect feedback from students every month.\nNone of these measures is expensive, and together they could reduce waste, save money and improve students' meals. I hope the university will consider them seriously.\nSincerely,\nIvy Chen, third-year student",
      points: [
        '正確說明兩個表格的重點（總量上升約 25%、午餐是主要來源；份量太大是最主要原因），數字引用正確',
        '不是逐格抄數字，而是挑重點、做比較與歸納（例：問題出在供餐方式而不是口味）',
        '提出具體可行的解決辦法，並且跟表格的原因對應',
        '格式與語氣合適（投書：開頭稱呼、結尾署名），段落組織清楚',
        '字數約 250 字；文法正確、用字精確且多樣'
      ] }
  ]
});
