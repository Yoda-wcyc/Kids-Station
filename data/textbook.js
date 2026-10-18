/* 課本進度：每個課本單元一筆（之後的單元照這個格式往後加）。
   單字、片語、句型、文法本身放在原本的資料檔，用 tb:["<單元 id>"] 標記屬於哪一課（不重複新增、id 不變，學會紀錄照舊）；
   這裡只放：單元標題、單字分組（wordKey／片語 id）、課本上的中文（tz）、句型對照（qa）、情境對話，
   以及專屬題用的詞表（subjects／days／people：題目由 engine.js 照詞表組出來，題號＝內容，所以錯題可以原題重做）。 */
window.DATA_TEXTBOOK = [
{id: 'hanlin-5-u2', pub: '翰林', grade: 5, unit: 2, title: '翰林 五年級 Unit 2', theme: 'Do you have math class on Monday?', themeZh: '你星期一有數學課嗎？',
 groups: [
   { key: 'subject', title: '學校科目', icon: '📚', words: ['art', 'chinese', 'english', 'math', 'music', 'pe', 'science', 'social-studies'] },
   { key: 'day', title: '星期', icon: '📅', words: ['monday', 'tuesday', 'wednesday', 'thursday'] },
   { key: 'other', title: '其他', icon: '✨', words: ['class', 'park', 'follow'], phrases: ['in-a-hurry'] }],
 // 課本上的中文（單字卡顯示這個；題目的中文照原本資料）
 tz: { art: '美術', chinese: '國語；中文', english: '英文', math: '數學', music: '音樂', pe: '體育', science: '自然；科學', 'social-studies': '社會',
   monday: '星期一', tuesday: '星期二', wednesday: '星期三', thursday: '星期四', class: '課堂；課程', park: '公園', follow: '跟隨', 'in-a-hurry': '趕時間；匆忙（片語）' },
 ipa: { 'in-a-hurry': '/ɪn ə ˈhɝi/' },
 patterns: ['do-you-have-class', 'does-he-have-class'],
 grammar: ['do-does-on'],
 // 句型對照：問句 → 短答（教學頁）
 qa: [
   { q: 'Do you have math class on Monday?', qz: '你星期一有數學課嗎？', a: 'Yes, I do.', az: '是的，我有。' },
   { q: 'Do you have art class on Tuesday?', qz: '你星期二有美術課嗎？', a: "No, I don't.", az: '不，我沒有。' },
   { q: 'Does he have music class on Wednesday?', qz: '他星期三有音樂課嗎？', a: 'Yes, he does.', az: '是的，他有。' },
   { q: 'Does she have science class on Thursday?', qz: '她星期四有自然課嗎？', a: "No, she doesn't.", az: '不，她沒有。' }],
 dialog: {
   title: '放學後去公園',
   lines: [
     { who: 'Amy', side: 'l', en: 'Can we go to the park?', zh: '我們可以去公園嗎？' },
     { who: 'Ben', side: 'r', en: 'Sure, follow me.', zh: '當然好，跟我來。', alts: ['Sure. Follow me.'] },
     { who: 'Ben', side: 'r', en: "I'm in a hurry.", zh: '我在趕時間。' }],
   // 情境選擇題（答案一定在 options 裡）
   choose: [
     { id: 'reply', prompt: 'Can we go to the park?', sub: '選出最適合的回答', options: ['Sure, follow me.', 'Yes, I do.', "No, he doesn't.", 'On Monday.'], answer: 'Sure, follow me.', why: 'Can we …?（我們可以…嗎？）→ Sure.（當然好）' },
     { id: 'hurry', prompt: "I'm in a hurry.", sub: '這句話是什麼意思？', options: ['我在趕時間。', '我在公園裡。', '跟我來。', '我們可以去公園嗎？'], answer: '我在趕時間。', why: "in a hurry ＝ 趕時間、匆忙：I'm in a hurry. 我在趕時間。" },
     { id: 'follow', prompt: '跟我來。', sub: '選出英文', options: ['Follow me.', 'Help me.', 'Hurry up.', 'Go to the park.'], answer: 'Follow me.', why: 'follow ＝ 跟隨：Follow me. 跟我來。' }]
 },
 // 專屬題的詞表：科目（en 照課本寫法：class 前不加冠詞、PE 大寫）、星期、人稱
 subjects: [{ en: 'art', zh: '美術' }, { en: 'Chinese', zh: '國語' }, { en: 'English', zh: '英文' }, { en: 'math', zh: '數學' }, { en: 'music', zh: '音樂' }, { en: 'PE', zh: '體育', alt: 'P.E.' }, { en: 'science', zh: '自然' }, { en: 'social studies', zh: '社會' }],
 days: [{ en: 'Monday', zh: '星期一' }, { en: 'Tuesday', zh: '星期二' }, { en: 'Wednesday', zh: '星期三' }, { en: 'Thursday', zh: '星期四' }],
 people: [{ k: 'you', en: 'you', zh: '你', aux: 'Do', ans: 'I', other: 'you' }, { k: 'he', en: 'he', zh: '他', aux: 'Does', ans: 'he', other: 'she' }, { k: 'she', en: 'she', zh: '她', aux: 'Does', ans: 'she', other: 'he' }]
}
];
