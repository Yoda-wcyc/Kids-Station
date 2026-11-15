/* gept/vocab/e-extra.js — 初級檢查用補充字（教育部 2000 字以外、初級允許的字）。
   收字規則（2026-11-16 整合時訂，SPEC.md §6）：只收「同時在 LTTC 全民英檢初級參考字表裡（本機 scratchpad/gept-local/lttc_e.txt，不上網）、
   而且初級考試常見情境（日常、學校、旅遊、購物、休閒）會用到」的字；政治、法律、軍事、經濟、抽象學術字（election、prison、weapon、debt、policy…）
   即使在 LTTC 初級字表也不收；國名、地名、節日走 names.js。不是 LTTC 字表的複製（約 2,200 條中只挑 108 條），給檢查工具和中高級單字頁（gept/words.html，用來排除初級已有的字）用。
   本機有 LTTC 字表時，node gept/tools/check.js 會檢查這裡每個字都真的在 LTTC 初級字表裡。 */
(function (V) {
  V.eextra = [
    'ability', 'achieve', 'addition', 'adopt', 'adventure', 'aircraft', 'anymore', 'anytime', 'anyway', 'appearance', 'article', 'attend', 'audience', 'aware',
    'babysit', 'brain', 'brief', 'businessperson', 'cafe', 'CD', 'cell', 'chairperson', 'chapter', 'chat', 'chief', 'citizen', 'classic', 'click', 'collection', 'confirm',
    'contain', 'countryside', 'delay', 'director', 'document', 'eastern', 'encourage', 'entire', 'exact', 'examine', 'expert', 'fashion', 'favor', 'field', 'figure',
    'grand', 'growth', 'heroine', 'hippopotamus', 'hometown', 'huge', 'image', 'injury', 'KTV', 'length', 'loss', 'luck', 'Mandarin', 'material', 'melon',
    'northern', 'online', 'opportunity', 'organize', 'particular', 'photograph', 'photographer', 'policeman', 'policewoman', 'powerful', 'prefer', 'product', 'protection',
    'prove', 'purchase', 'quality', 'rapid', 'recent', 'reply', 'require', 'salesperson', 'separate', 'slip', 'solution', 'sort', 'southern', 'stage', 'standard', 'stick',
    'stress', 'supply', 'surface', 'task', 'throughout', 'tour', 'track', 'treatment', 'unit', 'view', 'volume', 'western', 'whatever', 'whom', 'width', 'within', 'wonder',
    'wooden', 'worth'
  ];
})(typeof module !== 'undefined' ? module.exports : ((window.GEPT_VOCAB = window.GEPT_VOCAB || {})));
