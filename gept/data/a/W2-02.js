/* a-W2-02 圖表寫作 第 2 組（原創，2026-11-15；數據為虛構） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'a-W2-02',
  title: '圖表寫作 2',
  names: [],
  extra: [],
  items: [
    { id: 'a-W2-02-01',
      prompt: '下面兩個表格是某高中學生上學日晚上的平均睡眠時數（2021～2025），以及學生超過午夜才睡的主要原因調查（數據為虛構）。請以學生會的身分寫一封約 250 字的英文信給校長，說明表格的重點，並提出具體的解決辦法。',
      charts: [
        { cap: "Average Sleep on School Nights (hours; fictional data)", head: ['Year', 'Grade 10', 'Grade 11', 'Grade 12'], rows: [
          ['2021', '7.4', '7.0', '6.6'],
          ['2023', '7.1', '6.7', '6.2'],
          ['2025', '6.8', '6.3', '5.9']
        ] },
        { cap: "Main Reason for Going to Bed After Midnight (survey of 500 students, 2025; fictional data)", head: ['Reason', 'Students'], rows: [
          ['Using phones or social media', '41%'],
          ['Homework and test preparation', '29%'],
          ['Evening classes that end late', '15%'],
          ['Part-time jobs', '6%'],
          ['Other reasons', '9%']
        ] }
      ],
      model: "Dear Principal Wang,\nI am writing on behalf of the student council about a problem that affects almost everyone at our school: lack of sleep. According to the figures from the school health office, average sleep on school nights has fallen in every grade since 2021. Twelfth graders are the worst affected, with their average dropping from 6.6 to just 5.9 hours, far below what doctors recommend for teenagers. Even tenth graders now sleep less than seven hours a night.\nThe survey of 500 students helps explain why. The most common reason for going to bed after midnight was using phones or social media, given by 41 percent of students. However, a combined 44 percent blamed school-related pressure: 29 percent mentioned homework and test preparation, and another 15 percent said their evening classes ended late. In other words, students are not simply careless; many are struggling to meet heavy demands.\nI would like to suggest three measures. First, teachers of different subjects could plan their test dates together, so that students do not face several major tests in the same week. Second, the school could hold short workshops, perhaps led by the school nurse, on how screens affect sleep, and encourage students to charge their phones outside their bedrooms. Third, a limit on homework the night before a major test would allow students to rest instead of staying up late to study.\nNone of these ideas would cost much, but together they could help students arrive at school rested and ready to learn. The student council would be glad to help organize them.\nYours sincerely,\nAmy Lin\nStudent Council President",
      points: [
        '正確說明兩個表格的重點（三個年級睡眠都逐年下降、高三最少；滑手機是最大原因，但課業相關合計也占四成以上），數字引用正確',
        '不是逐格抄數字，而是挑重點、做比較與歸納（例：不只是學生不自律，課業壓力也是原因）',
        '提出具體可行的解決辦法，並且跟表格的原因對應',
        '書信格式與語氣合適（稱呼、說明身分與目的、結尾署名），段落組織清楚',
        '字數約 250 字；文法正確、用字精確且多樣'
      ] }
  ]
});
