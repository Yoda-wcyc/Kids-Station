/* e-R3-04 閱讀理解 第 4 組（原創，2026-11-15） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'e-R3-04',
  title: '閱讀理解 4',
  items: [
    {
      id: 'e-R3-04-g1',
      texts: [{ type: 'notice', title: 'City Zoo', table: { head: ['Ticket', 'Price'], rows: [['Adults', 'NT$100'], ['Students', 'NT$60'], ['Children under 6', 'Free'], ['People over 65', 'Free']] }, body: 'Open: 9:00 a.m. to 5:00 p.m., Tuesday to Sunday\nThe panda house closes at 4:00 p.m.\nPlease do not give food to the animals.' }],
      qs: [
        { id: 'e-R3-04-01', q: 'How much is a student ticket?', opts: ['Free.', 'NT$60.', 'NT$100.', 'NT$65.'], a: 1 },
        { id: 'e-R3-04-02', q: 'When does the panda house close?', opts: ['At 5:00 p.m.', 'At 9:00 a.m.', 'At 4:00 p.m.', 'At 6:00 p.m.'], a: 2 },
        { id: 'e-R3-04-03', q: 'On which day is the zoo closed?', opts: ['Monday.', 'Tuesday.', 'Saturday.', 'Sunday.'], a: 0 }
      ]
    },
    {
      id: 'e-R3-04-g2',
      texts: [{ type: 'letter', from: 'Emma', to: 'Wei', title: 'Hello from Australia', body: 'Dear Wei,\nThank you for your letter and the pictures of Taipei. Your school looks very big! Now I will tell you about my life. I live in a small town near the sea. It is summer here in December, so we often have a picnic on the beach at Christmas. Many people in my town keep horses. I ride my uncle\'s horse every Saturday. Next year, my family will visit Taiwan. I really want to try milk tea and visit a night market. Please write back soon.\nYour friend,\nEmma' }],
      qs: [
        { id: 'e-R3-04-04', q: 'Where does Emma live?', opts: ['In a big city.', 'In Taipei.', 'In the mountains.', 'In a small town near the sea.'], a: 3 },
        { id: 'e-R3-04-05', q: 'What season is it in Emma\'s town in December?', opts: ['Spring.', 'Summer.', 'Fall.', 'Winter.'], a: 1 },
        { id: 'e-R3-04-06', q: 'What does Emma do every Saturday?', opts: ['She rides a horse.', 'She swims in the sea.', 'She writes letters.', 'She drinks milk tea.'], a: 0 }
      ]
    },
    {
      id: 'e-R3-04-g3',
      texts: [{ type: 'schedule', title: 'Star English School: Class Times', table: { head: ['Class', 'Monday', 'Wednesday', 'Friday'], rows: [['Grade 3 and 4', '4:30-5:30', '4:30-5:30', 'no class'], ['Grade 5 and 6', '6:00-7:30', 'no class', '6:00-7:30'], ['Junior High', '7:40-9:10', '7:40-9:10', '7:40-9:10']] }, body: 'All classes are in Room 302.\nThere are no classes on national holidays.\nIf you are sick, please call the school before 3:00 p.m.' }],
      qs: [
        { id: 'e-R3-04-07', q: 'When does the Grade 5 and 6 class have lessons?', opts: ['Monday and Wednesday.', 'Monday and Friday.', 'Wednesday and Friday.', 'Every day.'], a: 1 },
        { id: 'e-R3-04-08', q: 'What should a sick student do?', opts: ['Go to Room 302.', 'Come on Friday.', 'Stay at school.', 'Call before 3:00 p.m.'], a: 3 },
        { id: 'e-R3-04-09', q: 'Which class has lessons three days a week?', opts: ['Grade 3 and 4.', 'Grade 5 and 6.', 'Junior High.', 'All of them.'], a: 2 }
      ]
    },
    {
      id: 'e-R3-04-g4',
      texts: [
        { type: 'notice', title: 'Lost and Found', body: 'We found these things at school last week:\nA green water bottle in the music room\nA black watch on the playground\nA yellow pencil box with a cat on it in the library\nIf something is yours, come to the school office between 8:00 a.m. and 4:00 p.m.' },
        { type: 'email', from: 'Nina', to: 'Zoe', title: 'Good news!', body: 'Hi Zoe,\nGood news! I saw the Lost and Found notice this morning. My pencil box is in the office! I left it in the library on Tuesday. I was so sad because my grandpa gave it to me. I will get it at noon. Can you go with me?\nSee you,\nNina' }
      ],
      qs: [
        { id: 'e-R3-04-10', q: 'Where was the black watch found?', opts: ['In the music room.', 'In the library.', 'In the office.', 'On the playground.'], a: 3 },
        { id: 'e-R3-04-11', q: 'Why was Nina sad?', opts: ['Her grandpa was sick.', 'Zoe was angry with her.', 'She lost a gift from her grandpa.', 'She did badly on a test.'], a: 2 },
        { id: 'e-R3-04-12', q: 'When will Nina go to the office?', opts: ['At noon.', 'On Tuesday.', 'After 4:00 p.m.', 'Tomorrow morning.'], a: 0 }
      ]
    }
  ]
});
