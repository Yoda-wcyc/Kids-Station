/* gept/gept-core.js — 全民英檢（GEPT）準備區的規格與規則（純函式：不碰 DOM／localStorage；瀏覽器 window.GeptCore 與 Node 共用）。
   規格正本：gept/SPEC.md（官方規格＋來源）、gept/CONTRACT.md（題目資料格式＝作者看這兩份就能寫題）。
   - LV／PARTS／MOCK：三級（e 初級、i 中級、a 高級）各題型的題數、選項數、播放次數、作答時間、長度上限（數字照 SPEC.md；官方沒公布的標「本站訂」）。
   - validateSet(set, V)：一組題目的格式、用字（V＝gept/vocab/*.js）、句長、選項、答案分布檢查 → {errors, warns, offList, names}（gept/tools/check.js、test/gept.test.js 用）。
   - questions(set)：攤平成「一題一題」（錯題庫、計分都用這個）；scale／passLR：模擬換算 120 分制與通過標準；writeScore／speakScore：複試換算公式。 */
(function (root) {
  'use strict';

  // ================= 級別 =================
  var LV = {
    e: { n: '初級', en: 'Elementary', cefr: 'A2', tag: '', who: '國中畢業程度（國小高年級可以挑戰）', pass: { sum: 160, min: 72 }, wpass: 70, spass: 80 },
    i: { n: '中級', en: 'Intermediate', cefr: 'B1', tag: '進階挑戰', who: '高中畢業程度', pass: { sum: 160, min: 72 }, wpass: 80, spass: 80 },
    a: { n: '高級', en: 'Advanced', cefr: 'C1', tag: '超級挑戰', who: '大學英文系畢業程度', pass: { sum: 150, min: 64 }, wpass: 3, spass: 3 }
  };
  // ================= 題型 =================
  // sec：L 聽力／R 閱讀／W 寫作／S 口說；kind：資料格式（CONTRACT.md §3）；n＝一組題數（＝官方該部分題數）；o＝選項數；
  // play＝播放次數；wait＝模擬考每題聽完後的作答秒數（官方未公布，本站訂）；groups＝題組數；prep／sec＝口說準備／作答秒數
  var PARTS = {
    e: {
      L1: { s: 'L', n0: '看圖辨義', kind: 'pic', n: 5, o: 3, play: 1, wait: 10, how: '看圖，聽一個問題和三個英文句子（選項不印出來），選出最符合圖的句子。每題只播一遍。' },
      L2: { s: 'L', n0: '問答', kind: 'resp', n: 10, o: 3, play: 1, wait: 10, how: '聽一句英文，從三個印出來的回答選一個最適合的。每題只播一遍。' },
      L3: { s: 'L', n0: '簡短對話', kind: 'dlg', n: 10, o: 3, play: 1, wait: 10, how: '聽一段對話和一個問題，從三個印出來的選項選答案。對話和問題只播一遍。' },
      L4: { s: 'L', n0: '短文聽解', kind: 'talk', n: 5, o: 3, pics: true, play: 1, wait: 10, how: '每題有三張圖。聽一段短文和問題，選出最適合的圖。每題只播一遍。' },
      R1: { s: 'R', n0: '詞彙', kind: 'vocab', n: 10, o: 4, how: '每題一個空格，從四個選項選出最適合的字或詞。' },
      R2: { s: 'R', n0: '段落填空', kind: 'cloze', n: 8, groups: 2, o: 4, how: '兩篇短文、各 4 個空格，每格從四個選項選最適合的。' },
      R3: { s: 'R', n0: '閱讀理解', kind: 'read', n: 12, groups: 4, o: 4, how: '4 個題組，每組 1～2 篇短文（廣告、信件、公告…），回答四選一的問題。' },
      W1: { s: 'W', n0: '單句寫作', kind: 'wsent', n: 15, how: '句子改寫 5 題、句子合併 5 題、重組 5 題（每題 2 分）。寫出完整句子，注意大小寫和標點。' },
      W2: { s: 'W', n0: '段落寫作', kind: 'write', n: 1, words: 50, min: 0, how: '看圖寫一篇約 50 字的短文，描寫圖片情節（0～5 級分）。' },
      S1: { s: 'S', n0: '複誦', kind: 'srepeat', n: 5, play: 2, sec: 8, how: '聽一句英文（播兩次、題目不印出來），聽完馬上跟著唸一次。' },
      S2: { s: 'S', n0: '朗讀句子與短文', kind: 'sread', n: 1, prep: 60, sec: 60, how: '先用 1 分鐘看 5 個句子和 1 篇短文，再在 1 分鐘內用正常速度唸完。' },
      S3: { s: 'S', n0: '回答問題', kind: 'sanswer', n: 7, play: 2, sec: 15, how: '聽問題（播兩次、不印出來），每題 15 秒回答，不一定要完整句子。' }
    },
    i: {
      L1: { s: 'L', n0: '看圖辨義', kind: 'pic', n: 5, o: 4, play: 1, wait: 12, how: '看圖，聽一個問題和四個英文敘述（選項不印出來），選出最符合圖的。每題只播一遍。' },
      L2: { s: 'L', n0: '問答', kind: 'resp', n: 10, o: 4, play: 1, wait: 12, how: '聽一句問句或直述句，從四個印出來的回應選一個最適合的。每題只播一遍。' },
      L3: { s: 'L', n0: '簡短對話', kind: 'dlg', n: 10, o: 4, play: 1, wait: 12, how: '聽一段對話和一個問題，從四個印出來的選項選答案；有些題要配合印出來的圖表（整合聽讀）。只播一遍。' },
      L4: { s: 'L', n0: '簡短談話', kind: 'talk', n: 10, o: 4, play: 1, wait: 12, how: '聽一段談話（廣播、留言、介紹…）和一個問題，從四個印出來的選項選答案。只播一遍。' },
      R1: { s: 'R', n0: '詞彙', kind: 'vocab', n: 10, o: 4, how: '每題一個空格，從四個選項選出最適合的字或詞。' },
      R2: { s: 'R', n0: '段落填空', kind: 'cloze', n: 10, groups: 2, o: 4, how: '兩篇短文、各 5 個空格；選項可能是字、詞、連接詞或整句。' },
      R3: { s: 'R', n0: '閱讀理解', kind: 'read', n: 15, groups: 5, o: 4, how: '5 個題組，每組 1～2 篇短文（文章、信件、廣告、圖表…），回答四選一的問題。' },
      W1: { s: 'W', n0: '中譯英', kind: 'write', n: 1, how: '把一段中文翻成通順、達意、前後連貫的英文（40%，0～5 級分）。' },
      W2: { s: 'W', n0: '英文作文', kind: 'write', n: 1, words: 120, how: '依提示寫一篇約 120 字（8～12 句）的作文（60%，0～5 級分）。' },
      S1: { s: 'S', n0: '朗讀短文', kind: 'sread', n: 1, prep: 60, sec: 120, how: '先默讀短文 1 分鐘，再在 2 分鐘內用正常速度清楚唸出來。' },
      S2: { s: 'S', n0: '回答問題', kind: 'sanswer', n: 10, play: 2, sec: 15, how: '10 題，題目播兩次、不印出來；第 1～5 題每題 15 秒、第 6～10 題每題 30 秒。' },
      S3: { s: 'S', n0: '看圖敘述', kind: 'spic', n: 1, prep: 30, sec: 90, how: '先用 30 秒看圖和問題，再在 1 分半內回答（直接回答，不用唸題號或題目）。' }
    },
    a: {
      L1: { s: 'L', n0: '短篇對話及談話', kind: 'short', n: 15, o: 4, play: 1, wait: 12, how: '15 段短對話或短談話，每段後面一個問題，從印出來的四個選項選答案。只播一遍，可以在試題本上做筆記。' },
      L2: { s: 'L', n0: '長篇對話', kind: 'long', n: 13, groups: 2, o: 4, play: 1, preview: 40, after: 180, how: '兩段長對話，只播一遍、可做筆記。聽之前有 30～45 秒看題目，聽完有 2～4 分鐘作答；答案可能是選擇，也可能要寫一個字、片語或短句。' },
      L3: { s: 'L', n0: '長篇談話', kind: 'long', n: 12, groups: 2, o: 4, play: 1, preview: 40, after: 180, how: '兩段長談話（演講、報導…），作答方式同長篇對話。' },
      R1: { s: 'R', n0: '略讀（Skimming & Scanning）', kind: 'skim', n: 20, groups: 3, how: '20 題 20 分鐘：1A、1B 替段落選標題（各 6 題）、1C 三篇短文找答案在哪一篇（8 題）。要讀得快、挑著讀。' },
      R2: { s: 'R', n0: '精讀（Careful Reading）', kind: 'read', n: 20, groups: 4, o: 4, how: '20 題 50 分鐘：幾篇較長的文章，仔細讀後回答四選一的問題。' },
      W1: { s: 'W', n0: '摘要寫作', kind: 'write', n: 1, words: 250, min: 60, how: '讀兩篇文章，寫一篇約 250 字的文章：先摘要兩篇的重點（用自己的話、註明出處），再提出自己的看法（60 分鐘）。' },
      W2: { s: 'W', n0: '圖表寫作', kind: 'write', n: 1, words: 250, min: 45, how: '看兩個圖表，寫一篇約 250 字的文章：說明圖表重點並提出解決辦法或建議（45 分鐘）。' },
      S1: { s: 'S', n0: '暖身面談', kind: 'sint', n: 1, sec: 30, how: '主考老師問幾個關於自己的問題（面談形式、2～3 位考生同場）。' },
      S2: { s: 'S', n0: '訊息交換／討論', kind: 'sint', n: 1, sec: 60, how: '依題目和其他考生交換訊息、討論，達成結論（官方英文版稱 Discussion）。' },
      S3: { s: 'S', n0: '申述', kind: 'sint', n: 1, prep: 60, sec: 120, how: '依題目準備後，針對一個主題發表看法（Presentation）。' }
    }
  };
  // 模擬考（初試＝聽力＋閱讀，順序照官方）；R＝閱讀的計時段（高級略讀、精讀分開計時）
  var MOCK = {
    e: { L: ['L1', 'L2', 'L3', 'L4'], R: [{ parts: ['R1', 'R2', 'R3'], min: 35 }], lmin: 20 },
    i: { L: ['L1', 'L2', 'L3', 'L4'], R: [{ parts: ['R1', 'R2', 'R3'], min: 45 }], lmin: 30 },
    a: { L: ['L1', 'L2', 'L3'], R: [{ parts: ['R1'], min: 20 }, { parts: ['R2'], min: 50 }], lmin: 55 }
  };
  // 長度上限（字數；官方未公布，本站依官方練習題實測訂，見 SPEC.md §5）：sent＝一句最多幾字、say＝問答題那句、dlg＝一段對話、talk＝一段短文／談話、
  // cloze＝段落填空一篇 [最少, 最多]、text＝閱讀一篇最多、long＝長篇聽力 [最少, 最多]、skim＝略讀一篇最多、opt＝一個選項最多、vocab＝詞彙題那句
  var LIM = {
    e: { sent: 20, say: 15, dlg: 50, turns: [2, 4], talk: 70, cloze: [70, 150], text: 170, opt: 12, vocab: 20, pic: 12, extra: 0 },
    i: { sent: 30, say: 22, dlg: 90, turns: [2, 6], talk: 120, cloze: [100, 220], text: 260, opt: 25, vocab: 28, pic: 18, extra: 6 },
    a: { sent: 45, say: 35, dlg: 140, turns: [2, 8], talk: 160, long: [250, 650], text: 800, skim: 950, opt: 30, vocab: 40, pic: 25, extraPct: 3 }
  };
  var SPK = ['M', 'F', 'N'];   // 男聲、女聲、旁白（題號、問題）
  var ID_RE = /^([eia])-(L[1-4]|R[1-3]|W[12]|S[1-3]|M)-(\d{2})$/;

  // ================= 詞表 =================
  // 不規則變化 → 原形（規則變化在 stems() 自動處理）
  var IRR = {};
  ('arose:arise arisen:arise ate:eat eaten:eat awoke:awake was:be were:be been:be am:be is:be are:be bore:bear born:bear beat:beat beaten:beat became:become began:begin begun:begin ' +
    'bent:bend bet:bet bit:bite bitten:bite bled:bleed blew:blow blown:blow broke:break broken:break bred:breed brought:bring built:build burnt:burn burst:burst bought:buy caught:catch ' +
    'chose:choose chosen:choose came:come cost:cost crept:creep cut:cut dealt:deal dug:dig did:do done:do does:do drew:draw drawn:draw dreamt:dream drank:drink drunk:drink drove:drive driven:drive ' +
    'fell:fall fallen:fall fed:feed felt:feel fought:fight found:find fled:flee flew:fly flown:fly forbade:forbid forgot:forget forgotten:forget forgave:forgive forgiven:forgive froze:freeze frozen:freeze ' +
    'got:get gotten:get gave:give given:give went:go gone:go grew:grow grown:grow hung:hang had:have has:have heard:hear hid:hide hidden:hide hit:hit held:hold hurt:hurt kept:keep knelt:kneel ' +
    'knew:know known:know laid:lay led:lead leapt:leap learnt:learn left:leave lent:lend let:let lay:lie lain:lie lit:light lost:lose made:make meant:mean met:meet mistook:mistake mistaken:mistake ' +
    'paid:pay proved:prove proven:prove put:put quit:quit read:read rode:ride ridden:ride rang:ring rung:ring rose:rise risen:rise ran:run said:say saw:see seen:see sought:seek sold:sell sent:send ' +
    'set:set sewed:sew sewn:sew shook:shake shaken:shake shone:shine shot:shoot showed:show shown:show shrank:shrink shut:shut sang:sing sung:sing sank:sink sunk:sink sat:sit slept:sleep slid:slide ' +
    'spoke:speak spoken:speak sped:speed spent:spend spilt:spill spun:spin spat:spit split:split spread:spread sprang:spring stood:stand stole:steal stolen:steal stuck:stick stung:sting stank:stink ' +
    'struck:strike strove:strive swore:swear sworn:swear swept:sweep swam:swim swum:swim swung:swing took:take taken:take taught:teach tore:tear torn:tear told:tell thought:think threw:throw thrown:throw ' +
    'understood:understand undertook:undertake upset:upset woke:wake woken:wake wore:wear worn:wear wove:weave woven:weave wept:weep won:win wound:wind withdrew:withdraw wrote:write written:write ' +
    'overcame:overcome overtook:overtake overtaken:overtake undergone:undergo underwent:undergo foresaw:foresee foreseen:foresee mislaid:mislay misled:mislead outgrew:outgrow ' +
    'children:child men:man women:woman feet:foot teeth:tooth mice:mouse geese:goose oxen:ox people:person lives:life wives:wife knives:knife leaves:leaf wolves:wolf halves:half shelves:shelf thieves:thief ' +
    'loaves:loaf selves:self calves:calf media:medium criteria:criterion phenomena:phenomenon analyses:analysis crises:crisis theses:thesis hypotheses:hypothesis bases:basis ' +
    'better:good best:good worse:bad worst:bad more:many most:many less:little least:little further:far furthest:far farther:far farthest:far elder:old eldest:old ' +
    'me:i my:i mine:i myself:i us:we our:we ours:we ourselves:we him:he his:he himself:he her:she hers:she herself:she its:it itself:it them:they their:they theirs:they themselves:they ' +
    'yours:you yourself:you yourselves:you your:you an:a could:can would:will might:may should:shall').split(' ').forEach(function (p) { var x = p.split(':'); IRR[x[0]] = x[1]; });
  // 永遠允許：縮寫、稱謂、時間寫法（不另外算字）
  // 感嘆詞（oh、wow…）、序數（fourth…，表上只有基數）也算；單一字母（Room B、選項代號）在 tokens() 跳過
  var ALWAYS = ['mr', 'mrs', 'ms', 'dr', 'am', 'pm', 'ok', 'okay', 'tv', 'nt', 'st', 'etc', 'vs', 'i', 'a', 'oh', 'wow', 'hey', 'hmm', 'uh', 'ah', 'um', 'oops', 'ouch',
    'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth',
    'twentieth', 'thirtieth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth', 'eightieth', 'ninetieth', 'hundredth', 'thousandth'];
  function addEntry(S, s) {
    String(s).replace(/\(([^)]*)\)/g, ',$1').split(/[,\/]/).forEach(function (w) {
      var ps = w.split(/[\s-]+/).map(function (t) { return t.replace(/[^A-Za-z'.]/g, '').replace(/\.$/, '').toLowerCase(); }).filter(Boolean);
      ps.forEach(function (t) { if (t.length > 1 || t === 'a' || t === 'i') S[t] = 1; });
      if (ps.length > 1) S[ps.join('')] = 1;   // baby sitter → babysitter（合寫也算）
      ps.forEach(function (t) { if (/[^s]s$/.test(t) && t.length > 3) S[t.slice(0, -1)] = 1; });   // 表上寫複數（socks、chopsticks）→ 單數也算
    });
  }
  // lexOf(lv, V)：該級允許的字（小寫原形）。e＝教育部 2000＋初級補充字（e-extra）；i＝教育部 2000＋CEFR-J A1～B1；a＝教育部 2000＋CEFR-J A1～B2＋Octanove C1
  function lexOf(lv, V) {
    var S = {};
    ALWAYS.forEach(function (w) { S[w] = 1; });
    var m = V.moe || {}; (m.t1 || []).concat(m.t2 || [], V.eextra || []).forEach(function (s) { addEntry(S, s); });   // eextra＝初級補充字（vocab/e-extra.js，LTTC 初級字表裡的常用字）
    var cj = V.cefrj || {}, lvls = lv === 'i' ? ['A1', 'A2', 'B1'] : lv === 'a' ? ['A1', 'A2', 'B1', 'B2'] : [];
    lvls.forEach(function (k) { (cj[k] || []).forEach(function (s) { addEntry(S, s); }); });
    if (lv === 'a') (V.c1 || []).forEach(function (s) { addEntry(S, s); });
    return S;
  }
  var VOW = /[aeiou]/;
  // 規則變化的可能原形（複數、三單、過去式、-ing、比較級、-ly 副詞；LTTC 字表也把 -ly 副詞當形容詞的變化形，不另列）
  function stems(w, lv, deep) {
    var o = [w];
    if (IRR[w]) o.push(IRR[w]);
    function add(x) { if (x && x.length > 1) o.push(x); }
    function dbl(x) { if (x.length > 2 && x[x.length - 1] === x[x.length - 2] && !VOW.test(x[x.length - 1])) add(x.slice(0, -1)); }
    var s;
    if (/s$/.test(w)) { add(w.slice(0, -1)); if (/es$/.test(w)) add(w.slice(0, -2)); if (/ies$/.test(w)) add(w.slice(0, -3) + 'y'); if (/ves$/.test(w)) { add(w.slice(0, -3) + 'f'); add(w.slice(0, -3) + 'fe'); } }
    if (/ed$/.test(w)) { s = w.slice(0, -2); add(s); add(s + 'e'); dbl(s); if (/ied$/.test(w)) add(w.slice(0, -3) + 'y'); add(w.slice(0, -1)); }
    if (/ing$/.test(w)) { s = w.slice(0, -3); add(s); add(s + 'e'); dbl(s); if (/ying$/.test(w)) add(w.slice(0, -4) + 'ie'); }
    if (/er$/.test(w)) { s = w.slice(0, -2); add(s); add(s + 'e'); dbl(s); if (/ier$/.test(w)) add(w.slice(0, -3) + 'y'); }
    if (/est$/.test(w)) { s = w.slice(0, -3); add(s); add(s + 'e'); dbl(s); if (/iest$/.test(w)) add(w.slice(0, -4) + 'y'); }
    if (/ly$/.test(w)) { s = w.slice(0, -2); add(s); if (/ily$/.test(w)) add(w.slice(0, -3) + 'y'); if (/ally$/.test(w)) add(w.slice(0, -4)); if (/ly$/.test(w) && /[^aeiou]ly$/.test(w)) add(s + 'le'); }
    if (/'s$/.test(w)) add(w.slice(0, -2));
    o.slice().forEach(function (x) { if (IRR[x]) o.push(IRR[x]); });
    if (!deep) o.slice(1).forEach(function (x) { if (x !== w) o.push.apply(o, stems(x, lv, true)); });   // 兩層：reviewers → reviewer → review
    return o;
  }
  // 斷字：回傳 [{w:原字, k:小寫}]；縮寫（don't、I'm、Tom's）拆回原形；a.m.／p.m.／Mr. 先處理；數字、時間、金額不算字
  function tokens(text) {
    var s = String(text == null ? '' : text).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’‘]/g, "'").replace(/\b\d+(?:st|nd|rd|th|s)\b/g, ' ').replace(/\bRe:/g, ' ').replace(/\bcannot\b/gi, 'can not').replace(/\b[ap]\.m\./gi, ' am ').replace(/\bU\.S\.(A\.)?/g, ' USA ').replace(/\be\.g\./gi, ' ').replace(/\bi\.e\./gi, ' ');
    var out = [], m, re = /[A-Za-z]+(?:'[A-Za-z]+)?/g;
    while ((m = re.exec(s))) {
      var w = m[0], k = w.toLowerCase(), i = k.indexOf("'");
      if (i > 0 && k !== "o'clock") {
        var b = k.slice(0, i), suf = k.slice(i + 1);
        if (suf === 't') k = b === 'won' ? 'will' : b === 'can' ? 'can' : b === 'shan' ? 'shall' : /n$/.test(b) ? b.slice(0, -1) : b;
        else k = b;
        w = w.slice(0, i);
      }
      if (w.length === 1 && w !== 'a' && w !== 'I') continue;   // 單一字母：Room B、Plan A、選項代號
      out.push({ w: w, k: k });
    }
    return out;
  }
  function words(text) { return (String(text == null ? '' : text).match(/[A-Za-z0-9]+(?:['’.,:-][A-Za-z0-9]+)*/g) || []).length; }
  function sentences(text) { return String(text == null ? '' : text).replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, '$1').replace(/\b([ap])\.m\./gi, '$1m').split(/[.!?]+(?:["')\]]*)(?:\s+|$)|\n+/).map(function (x) { return x.trim(); }).filter(Boolean); }

  // ================= 題目攤平 =================
  // questions(set)：每一個「要作答的題」＝{id, part, kind, q?, opts?, a?, ans?, group?}（group＝所屬題組物件；mock 的 part 取自 parts 的 key）
  function partItems(set) {
    var lvp = ID_RE.exec(set && set.id || ''), part = lvp && lvp[2];
    if (part === 'M') return Object.keys(set.parts || {}).sort().map(function (p) { return { part: p, items: (set.parts[p] || {}).items || [] }; });
    return [{ part: part, items: (set && set.items) || [] }];
  }
  function questions(set) {
    var lv = (ID_RE.exec(set && set.id || '') || [])[1], out = [];
    partItems(set).forEach(function (pi) {
      var P = (PARTS[lv] || {})[pi.part] || {};
      pi.items.forEach(function (it) {
        if (it && Array.isArray(it.qs) && (P.kind === 'cloze' || P.kind === 'read' || P.kind === 'long' || P.kind === 'skim')) it.qs.forEach(function (q) { out.push({ id: q.id, part: pi.part, kind: P.kind, sub: it.type || '', q: q, group: it }); });
        else if (P.kind !== 'sread' && P.kind !== 'spic' && P.kind !== 'sint' && P.kind !== 'write') out.push({ id: it && it.id, part: pi.part, kind: P.kind, q: it, group: null });
        else out.push({ id: it && it.id, part: pi.part, kind: P.kind, q: it, group: null, open: true });
      });
    });
    return out;
  }
  function auto(q) { return !q.open && q.kind !== 'wsent' && q.kind !== 'srepeat' && q.kind !== 'sanswer'; }   // 自動判分的題（聽、讀）
  // 錯題庫的 p（精簡：只存級別、題型、題目短句；原題由 id 從 data 檔找回）
  function stemOf(Q) {
    var q = Q.q || {}, g = Q.group || {};
    var s = q.q || q.say || q.s || (q.lines ? q.lines.map(function (l) { return l[1]; }).join(' ') : '') || g.title || (g.texts && g.texts[0] && (g.texts[0].title || g.texts[0].body)) || g.text || '';
    s = String(s).replace(/\s+/g, ' ').trim();
    return s.length > 60 ? s.slice(0, 59) + '…' : s;
  }
  function mkP(Q) { return { u: Q.id.charAt(0), pt: Q.part, s: stemOf(Q) }; }
  function setIdOf(qid) { var m = /^([eia]-(?:L[1-4]|R[1-3]|W[12]|S[1-3]|M)-\d{2})-/.exec(String(qid || '')); return m ? m[1] : ''; }
  function fileOf(setId) { var m = ID_RE.exec(setId || ''); return m ? 'data/' + m[1] + '/' + m[2] + '-' + m[3] + '.js' : ''; }

  // ================= 判分與換算 =================
  function norm(s) { return String(s == null ? '' : s).toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim(); }
  // 短答比對：不分大小寫、去標點（連字號＝空格，two-thirds＝two thirds）、不管開頭冠詞（a／an／the）；數字、分數的不同寫法由作者列在 ans
  function normAns(s) { return norm(s).replace(/^(a|an|the) /, ''); }
  function gradeQ(Q, v) {   // v＝選項索引（數字）或短答文字
    var q = Q.q;
    if (q.ans) return (q.ans || []).some(function (a) { return normAns(a) === normAns(v); });
    return v === q.a;
  }
  function scale(c, n) { return n ? Math.round(c / n * 120) : 0; }   // 模擬換算（官方是量尺分數，算法不公開）
  function passLR(lv, L, R) { var p = LV[lv].pass; return L + R >= p.sum && L >= p.min && R >= p.min; }
  // 寫作換算：e＝{(第一部分得分/30)+(第二部分級分/5)}×50；i＝第一部分平均級分×20×40%＋第二部分×20×60%；a＝各部分 0～5 級分、3 級通過（沒有百分制）
  function writeScore(lv, s1, s2) {
    if (lv === 'e') return Math.round(((+s1 || 0) / 30 + (+s2 || 0) / 5) * 50);
    if (lv === 'i') return Math.round((+s1 || 0) * 20 * 0.4 + (+s2 || 0) * 20 * 0.6);
    return null;
  }
  // 口說換算：e＝（發音語調流利度級分＋文法字彙級分）×10；i＝級分×20；a＝級分（3 級通過）
  function speakScore(lv, b1, b2) { if (lv === 'e') return ((+b1 || 0) + (+b2 || 0)) * 10; if (lv === 'i') return (+b1 || 0) * 20; return +b1 || 0; }

  // ================= 檢查 =================
  function validateSet(set, V, opt) {
    opt = opt || {};
    var E = [], W = [], off = {}, used = {}, texts = [];
    function err(m) { E.push(m); } function warn(m) { W.push(m); }
    var m = ID_RE.exec(set && set.id || '');
    if (!m) { err('id 格式不對：' + (set && set.id) + '（要像 e-L1-01、i-M-01）'); return { errors: E, warns: W, offList: [], names: [] }; }
    var lv = m[1], part = m[2], L = LIM[lv], lex = opt.lex || lexOf(lv, V), names = {};
    (V.names || []).concat(set.names || []).forEach(function (n) { tokens(n).forEach(function (t) { names[t.w] = 1; names[t.k] = 1; }); });
    var extra = {}; (set.extra || []).forEach(function (x) { extra[String(x).toLowerCase()] = 1; });
    if (lv === 'e' && (set.extra || []).length) err(set.id + ': 初級不可以用 extra（表外字）');
    if (set.names && !Array.isArray(set.names)) err(set.id + ': names 要是陣列');
    // 收文字：t＝英文、where＝位置、max＝這段的句長上限
    function T(t, where, kind) { if (t == null || t === '') return; if (typeof t !== 'string') { err(where + ': 要是字串'); return; } texts.push({ t: t, where: where, kind: kind || 'sent' }); }
    function need(c, msg) { if (!c) err(msg); return !!c; }
    function opts(o, n, where, maxW) {
      if (!need(Array.isArray(o) && o.length === n, where + ': opts 要剛好 ' + n + ' 個')) return;
      var seen = {}; o.forEach(function (x, i) { T(x, where + '.opts[' + i + ']', 'opt'); if (seen[norm(x)]) err(where + ': 選項重複「' + x + '」'); seen[norm(x)] = 1; if (words(x) > maxW) err(where + '.opts[' + i + ']: 選項太長（' + words(x) + ' 字 > ' + maxW + '）'); });
    }
    function ans(q, n, where) { need(Number.isInteger(q.a) && q.a >= 0 && q.a < n, where + ': a（正解索引）要是 0～' + (n - 1)); }
    function pic(p, where) {
      if (!need(p && typeof p === 'object' && typeof p.e === 'string' && p.e.trim(), where + ': pic 要有 e（表情符號場景）')) return;
      if (/[A-Za-z]/.test(p.e)) err(where + '.e: 只放表情符號，文字寫在 t');
      if (p.t != null) { T(p.t, where + '.t', 'label'); if (words(p.t) > L.pic) err(where + '.t: 圖上的字太多'); }
    }
    function chart(c, where) {
      if (!c) return;
      if (!need(Array.isArray(c.head) && Array.isArray(c.rows) && c.rows.every(function (r) { return Array.isArray(r) && r.length === c.head.length; }), where + ': 表格要有 head 和等長的 rows')) return;
      T(c.cap, where + '.cap', 'label'); c.head.concat.apply(c.head, c.rows).forEach(function (x, i) { if (typeof x === 'string') T(x, where + '.cell', 'label'); });
    }
    function speaker(s, where) { need(SPK.indexOf(s) >= 0, where + ': 說話的人要是 M／F／N'); }
    function lenMax(t, max, where, what) { var n = words(t); if (n > max) err(where + ': ' + what + '太長（' + n + ' 字 > ' + max + '）'); return n; }
    var P = (PARTS[lv] || {})[part];
    var groups = part === 'M' ? Object.keys(set.parts || {}).map(function (p) { return [p, (set.parts[p] || {}).items]; }) : [[part, set.items]];
    if (part === 'M') {
      var want = MOCK[lv].L.concat.apply(MOCK[lv].L, MOCK[lv].R.map(function (r) { return r.parts; }));
      need(JSON.stringify(Object.keys(set.parts || {}).sort()) === JSON.stringify(want.slice().sort()), set.id + ': 模擬考 parts 要剛好是 ' + want.join(','));
    } else need(!!P, set.id + ': 沒有這個題型');
    var qnum = 0, ids = {}, ansSeq = [];
    groups.forEach(function (g) {
      var pt = g[0], items = g[1], PP = PARTS[lv][pt], base = part === 'M' ? set.id + '-' + pt : set.id;
      if (!PP) { err(set.id + ': 不認得的部分 ' + pt); return; }
      if (!need(Array.isArray(items) && items.length, base + ': items 要是非空陣列')) return;
      var nQ = 0, k = 0;
      function qid(x, where) {
        k++; var want2 = base + '-' + (k < 10 ? '0' : '') + k;
        if (!x || x.id !== want2) err(where + ': id 要是 ' + want2 + '（題號照順序 01、02…，上線後不改）');
        if (x && ids[x.id]) err(where + ': id 重複 ' + x.id); if (x) ids[x.id] = 1;
      }
      if (PP.groups && items.length !== PP.groups) err(base + ': 要剛好 ' + PP.groups + ' 個題組（現在 ' + items.length + '）');
      items.forEach(function (it, ii) {
        var w = base + '[' + ii + ']';
        if (!it || typeof it !== 'object') { err(w + ': 不是物件'); return; }
        switch (PP.kind) {
          case 'pic':
            qid(it, w); nQ++; pic(it.pic, w); T(it.q, w + '.q', 'sent'); if (lv !== 'e') need(it.q, w + ': 中級要有 q（題目）');
            opts(it.opts, PP.o, w, L.sent); ans(it, PP.o, w); ansSeq.push(it.a); break;
          case 'resp':
            qid(it, w); nQ++; speaker(it.spk, w); T(it.say, w + '.say'); lenMax(it.say || '', L.say, w, '那句話'); opts(it.opts, PP.o, w, L.opt); ans(it, PP.o, w); ansSeq.push(it.a); break;
          case 'dlg': case 'short': case 'talk':
            qid(it, w); nQ++;
            if (it.lines) {
              need(Array.isArray(it.lines) && it.lines.length >= L.turns[0] && it.lines.length <= L.turns[1], w + ': 對話要 ' + L.turns.join('～') + ' 句（lines）');
              var dw = 0; (it.lines || []).forEach(function (l, li) { if (!Array.isArray(l) || l.length !== 2) return err(w + '.lines[' + li + ']: 要寫 ["M"|"F", "句子"]'); speaker(l[0], w + '.lines[' + li + ']'); T(l[1], w + '.lines[' + li + ']'); dw += words(l[1]); });
              if (dw > L.dlg) err(w + ': 對話太長（' + dw + ' 字 > ' + L.dlg + '）');
              var sp = {}; (it.lines || []).forEach(function (l) { sp[l && l[0]] = 1; }); if (Object.keys(sp).length < 2) warn(w + ': 對話只有一個人在說');
              if (PP.kind === 'talk') err(w + ': ' + PP.n0 + '是一個人說（用 say＋spk，不用 lines）');
            } else {
              need(it.say, w + ': 要有 lines（對話）或 say（一個人說）'); speaker(it.spk, w); T(it.say, w + '.say'); lenMax(it.say || '', L.talk, w, '談話');
              if (PP.kind === 'dlg') err(w + ': 簡短對話要用 lines');
            }
            T(it.intro, w + '.intro'); need(it.q, w + ': 要有 q（播出的問題）'); T(it.q, w + '.q');
            if (PP.pics) { need(Array.isArray(it.pics) && it.pics.length === PP.o, w + ': 要有 ' + PP.o + ' 張圖選項 pics'); (it.pics || []).forEach(function (p, pi2) { pic(p, w + '.pics[' + pi2 + ']'); }); if (it.opts) err(w + ': 這個題型的選項是圖（pics），不要 opts'); ans(it, PP.o, w); }
            else { opts(it.opts, PP.o, w, L.opt); ans(it, PP.o, w); }
            chart(it.chart, w + '.chart'); ansSeq.push(it.a); break;
          case 'long':
            need(typeof it.id === 'string', w + ': 題組要有 id'); T(it.intro, w + '.intro'); need(it.intro, w + ': 要有 intro（Listen to a conversation between …）');
            var lw = 0;
            if (it.lines) { (it.lines || []).forEach(function (l, li) { if (!Array.isArray(l) || l.length !== 2) return err(w + '.lines[' + li + ']: 要寫 ["M"|"F", "句子"]'); speaker(l[0], w + '.lines[' + li + ']'); T(l[1], w + '.lines[' + li + ']'); lw += words(l[1]); }); if (pt === 'L3') err(w + ': 長篇談話用 say＋spk'); }
            else { speaker(it.spk, w); T(it.say, w + '.say'); lw = words(it.say); if (pt === 'L2') err(w + ': 長篇對話用 lines'); }
            if (L.long && (lw < L.long[0] || lw > L.long[1])) err(w + ': 長度 ' + lw + ' 字，要 ' + L.long.join('～'));
            need(Array.isArray(it.qs) && it.qs.length >= 4, w + ': qs 至少 4 題');
            (it.qs || []).forEach(function (q, qi) {
              var qw = w + '.qs[' + qi + ']'; qid(q, qw); nQ++; need(q.q, qw + ': 要有 q（印出來的問題）'); T(q.q, qw + '.q');
              if (q.ans) { need(Array.isArray(q.ans) && q.ans.length && !q.opts, qw + ': 短答題 ans 是可接受答案陣列、不要 opts'); (q.ans || []).forEach(function (a, ai) { T(a, qw + '.ans[' + ai + ']', 'opt'); if (words(a) > 8) err(qw + ': 短答答案最多 8 字'); }); }
              else { opts(q.opts, PP.o, qw, L.opt); ans(q, PP.o, qw); ansSeq.push(q.a); }
            });
            if (!(it.qs || []).some(function (q) { return q.ans; })) warn(w + ': 官方長篇聽力有短答題（寫字、片語、短句），建議至少 1 題用 ans');
            break;
          case 'vocab':
            qid(it, w); nQ++; need(/_{3,}/.test(it.s || ''), w + ': s 要有空格 ___'); T(it.s, w + '.s'); lenMax(it.s || '', L.vocab, w, '句子'); opts(it.opts, PP.o, w, 6); ans(it, PP.o, w); ansSeq.push(it.a); break;
          case 'cloze':
            need(typeof it.id === 'string', w + ': 題組要有 id'); T(it.title, w + '.title', 'label');
            var marks = (String(it.text || '').match(/\[(\d+)\]/g) || []).map(function (x) { return +x.slice(1, -1); });
            var nb = PP.n / PP.groups;
            need(Array.isArray(it.qs) && it.qs.length === nb, w + ': 每篇要剛好 ' + nb + ' 個空格（qs）');
            need(JSON.stringify(marks) === JSON.stringify((it.qs || []).map(function (q, i) { return i + 1; })), w + ': text 裡要依序標 [1] [2] … 對應 qs');
            T(String(it.text || '').replace(/\[\d+\]/g, ' '), w + '.text');
            var cw = words(String(it.text || '').replace(/\[\d+\]/g, ' x '));
            if (cw < L.cloze[0] || cw > L.cloze[1]) err(w + ': 段落 ' + cw + ' 字，要 ' + L.cloze.join('～'));
            (it.qs || []).forEach(function (q, qi) { var qw = w + '.qs[' + qi + ']'; qid(q, qw); nQ++; opts(q.opts, PP.o, qw, L.sent); ans(q, PP.o, qw); ansSeq.push(q.a); });
            break;
          case 'read':
            need(typeof it.id === 'string', w + ': 題組要有 id');
            need(Array.isArray(it.texts) && it.texts.length >= 1 && it.texts.length <= (lv === 'a' ? 2 : 2), w + ': texts 要 1～2 篇');
            (it.texts || []).forEach(function (x, xi) {
              var xw = w + '.texts[' + xi + ']'; T(x.title, xw + '.title', 'label'); T(x.from, xw + '.from', 'label'); T(x.to, xw + '.to', 'label');
              need(x.body || x.table, xw + ': 要有 body 或 table'); T(x.body, xw + '.body'); chart(x.table, xw + '.table');
              var n = words(x.body); if (n > L.text) err(xw + ': 文章太長（' + n + ' 字 > ' + L.text + '）');
            });
            need(Array.isArray(it.qs) && it.qs.length >= 2 && it.qs.length <= 6, w + ': 每組 2～6 題');
            (it.qs || []).forEach(function (q, qi) { var qw = w + '.qs[' + qi + ']'; qid(q, qw); nQ++; T(q.q, qw + '.q'); opts(q.opts, PP.o, qw, L.opt); ans(q, PP.o, qw); ansSeq.push(q.a); });
            break;
          case 'skim':
            need(typeof it.id === 'string', w + ': 題組要有 id'); need(it.type === 'head' || it.type === 'match', w + ': type 要是 head（選段落標題）或 match（找哪一篇）');
            if (it.type === 'head') {
              T(it.title, w + '.title', 'label'); need(Array.isArray(it.heads) && it.heads.length >= 8 && it.heads.length <= 11, w + ': heads 要 8～11 個標題（比段落多，不會全用到）');
              (it.heads || []).forEach(function (h, hi) { T(h, w + '.heads[' + hi + ']', 'opt'); });
              need(Array.isArray(it.paras) && it.paras.length >= 7, w + ': paras 至少 7 段'); var pw = 0; (it.paras || []).forEach(function (p, pi3) { T(p, w + '.paras[' + pi3 + ']'); pw += words(p); });
              if (pw > L.skim) err(w + ': 文章太長（' + pw + ' 字 > ' + L.skim + '）');
              need(it.ex && Number.isInteger(it.ex.p) && Number.isInteger(it.ex.h), w + ': ex＝{p:範例段落, h:範例標題}');
              need(Array.isArray(it.qs) && it.qs.length === 6, w + ': 1A／1B 每篇 6 題');
              var usedH = {}, usedP = {}; if (it.ex) { usedH[it.ex.h] = 1; usedP[it.ex.p] = 1; }
              (it.qs || []).forEach(function (q, qi) { var qw = w + '.qs[' + qi + ']'; qid(q, qw); nQ++; need(Number.isInteger(q.p) && q.p >= 0 && q.p < (it.paras || []).length && !usedP[q.p], qw + ': p＝段落索引（不重複、不是範例段）'); need(Number.isInteger(q.a) && q.a >= 0 && q.a < (it.heads || []).length && !usedH[q.a], qw + ': a＝標題索引（不重複、不是範例標題）'); usedP[q.p] = 1; usedH[q.a] = 1; });   // 標題題不算進答案分布（答案是標題代號、本來就各不相同）
            } else {
              need(Array.isArray(it.texts) && it.texts.length === 3, w + ': match 要 3 篇短文'); var mw = 0;
              (it.texts || []).forEach(function (x, xi) { T(x.title, w + '.texts[' + xi + '].title', 'label'); T(x.body, w + '.texts[' + xi + '].body'); mw += words(x.body); });
              if (mw > L.skim) err(w + ': 三篇合計太長（' + mw + ' 字 > ' + L.skim + '）');
              need(Array.isArray(it.qs) && it.qs.length === 8, w + ': 1C 要 8 題');
              (it.qs || []).forEach(function (q, qi) { var qw = w + '.qs[' + qi + ']'; qid(q, qw); nQ++; T(q.q, qw + '.q'); need(Number.isInteger(q.a) && q.a >= 0 && q.a < 3, qw + ': a＝0～2（第幾篇）'); ansSeq.push(q.a); });
            }
            break;
          case 'wsent':
            qid(it, w); nQ++; need(['rewrite', 'combine', 'order'].indexOf(it.type) >= 0, w + ': type 要是 rewrite／combine／order');
            T(it.s1, w + '.s1'); T(it.s2, w + '.s2'); T(it.frame, w + '.frame'); (it.parts || []).forEach(function (p, pi4) { T(p, w + '.parts[' + pi4 + ']', 'opt'); });
            if (it.type === 'combine') need(it.s1 && it.s2, w + ': 合併要有 s1、s2'); else if (it.type === 'rewrite') need(it.s1 && it.frame, w + ': 改寫要有 s1、frame（第二句的提示）'); else need(Array.isArray(it.parts) && it.parts.length >= 3, w + ': 重組要有 parts（至少 3 塊）');
            need(Array.isArray(it.ans) && it.ans.length, w + ': ans＝可接受的完整句子（至少 1 個）'); (it.ans || []).forEach(function (a, ai) { T(a, w + '.ans[' + ai + ']'); });
            if (it.type === 'order' && it.ans && it.parts) { var bag = norm(it.parts.join(' ') + ' ' + String(it.frame || '').replace(/_+/g, ' ')).split(' ').sort().join(' '); if (norm(it.ans[0]).split(' ').sort().join(' ') !== bag) err(w + ': 重組的答案要剛好用完 parts（加上 frame 的字），不能增減'); }
            break;
          case 'write':
            qid(it, w); nQ++; need(it.prompt, w + ': 要有 prompt（題目說明，可中文）'); T(/[A-Za-z]{3}/.test(it.prompt || '') && !/[一-鿿]/.test(it.prompt || '') ? it.prompt : '', w + '.prompt');
            (it.pics || []).forEach(function (p, pi5) { pic(p, w + '.pics[' + pi5 + ']'); });
            (it.sources || []).forEach(function (x, xi) { T(x.title, w + '.sources[' + xi + '].title', 'label'); T(x.body, w + '.sources[' + xi + '].body'); if (words(x.body) > 450) err(w + '.sources[' + xi + ']: 文章太長'); });
            (it.charts || []).forEach(function (c, ci) { chart(c, w + '.charts[' + ci + ']'); });
            need(it.model, w + ': 要有 model（範文）'); T(it.model, w + '.model');
            need(Array.isArray(it.points) && it.points.length >= 3, w + ': points＝家長評分要點（至少 3 條，中文）');
            if (PP.words && it.model) { var mw2 = words(it.model); if (mw2 < PP.words * 0.8 || mw2 > PP.words * 1.4) err(w + ': 範文 ' + mw2 + ' 字，要接近 ' + PP.words + ' 字'); }
            if (lv === 'i' && pt === 'W1') need(it.zh, w + ': 中譯英要有 zh（中文原文）');
            if (lv === 'e') need(Array.isArray(it.pics) && it.pics.length >= 1, w + ': 初級段落寫作要有 pics');
            if (lv === 'a' && pt === 'W1') need(Array.isArray(it.sources) && it.sources.length === 2, w + ': 摘要寫作要 2 篇 sources');
            if (lv === 'a' && pt === 'W2') need(Array.isArray(it.charts) && it.charts.length === 2, w + ': 圖表寫作要 2 個 charts');
            break;
          case 'srepeat':
            qid(it, w); nQ++; T(it.say, w + '.say'); need(it.say, w + ': 要有 say'); lenMax(it.say || '', 12, w, '複誦句'); break;
          case 'sread':
            qid(it, w); nQ++; if (lv === 'e') need(Array.isArray(it.sents) && it.sents.length === 5, w + ': 初級朗讀要 5 個句子 sents'); (it.sents || []).forEach(function (s, si) { T(s, w + '.sents[' + si + ']'); });
            need(it.passage, w + ': 要有 passage（短文）'); T(it.passage, w + '.passage'); var rw = words(it.passage); if (rw < (lv === 'e' ? 40 : 80) || rw > (lv === 'e' ? 90 : 170)) err(w + ': 短文 ' + rw + ' 字（初級 40～90、中級 80～170）'); break;
          case 'sanswer':
            qid(it, w); nQ++; T(it.say, w + '.say'); need(it.say, w + ': 要有 say（問題）'); need(it.sample, w + ': 要有 sample（範例回答）'); T(it.sample, w + '.sample');
            need(it.sec === 15 || it.sec === 30, w + ': sec 要是 15 或 30'); lenMax(it.say || '', L.say, w, '問題');
            if (lv === 'e' && it.sec !== 15) err(w + ': 初級每題 15 秒'); if (lv === 'i') { var want3 = ii < 5 ? 15 : 30; if (it.sec !== want3) err(w + ': 中級第 1～5 題 15 秒、第 6～10 題 30 秒'); } break;
          case 'spic':
            qid(it, w); nQ++; pic(it.pic, w); need(Array.isArray(it.qs) && it.qs.length >= 2 && it.qs.length <= 4, w + ': qs＝2～4 個印出來的問題'); (it.qs || []).forEach(function (q, qi) { T(q, w + '.qs[' + qi + ']'); });
            need(it.sample, w + ': 要有 sample'); T(it.sample, w + '.sample'); break;
          case 'sint':
            qid(it, w); nQ++; need(it.prompt, w + ': 要有 prompt'); T(/[一-鿿]/.test(it.prompt || '') ? '' : it.prompt, w + '.prompt'); (it.say || []).forEach(function (q, qi) { T(q, w + '.say[' + qi + ']'); });
            need(it.sample, w + ': 要有 sample'); T(it.sample, w + '.sample'); need(Array.isArray(it.points) && it.points.length >= 3, w + ': points 至少 3 條'); break;
        }
      });
      if (nQ !== PP.n) err(base + ': ' + PP.n0 + '一組要 ' + PP.n + ' 題（現在 ' + nQ + '）');
      if (PP.kind === 'wsent') { var ty = (items || []).map(function (x) { return x && x.type; }); if (ty.join(',') !== 'rewrite,rewrite,rewrite,rewrite,rewrite,combine,combine,combine,combine,combine,order,order,order,order,order') err(base + ': 單句寫作照官方順序：改寫 5、合併 5、重組 5'); }
      qnum += nQ;
    });
    // 答案分布：每個選項都要用到、最多的不超過平均的 1.6 倍＋1、不能連 4 題同一個
    if (ansSeq.length >= 5) {
      var kk = Math.max.apply(null, ansSeq) + 1, cnt = []; for (var i = 0; i < kk; i++) cnt.push(0); ansSeq.forEach(function (a) { cnt[a]++; });
      var lim = Math.ceil(ansSeq.length / kk * 1.6) + 1;
      if (Math.max.apply(null, cnt) > lim) err(set.id + ': 答案太集中（' + cnt.map(function (c, j) { return 'ABCD'.charAt(j) + c; }).join(' ') + '，單一選項最多 ' + lim + '）');
      if (ansSeq.length >= kk * 2 && cnt.some(function (c) { return !c; })) err(set.id + ': 有選項從來不是答案（' + cnt.map(function (c, j) { return 'ABCD'.charAt(j) + c; }).join(' ') + '）');
      for (var j2 = 3; j2 < ansSeq.length; j2++) if (ansSeq[j2] === ansSeq[j2 - 1] && ansSeq[j2] === ansSeq[j2 - 2] && ansSeq[j2] === ansSeq[j2 - 3]) { err(set.id + ': 連續 4 題答案都是 ' + 'ABCD'.charAt(ansSeq[j2])); break; }
    }
    // 用字＋句長
    var nTok = 0, nExtra = 0;
    texts.forEach(function (x) {
      if (x.kind === 'sent') sentences(x.t).forEach(function (s) { var n = words(s); if (n > L.sent) err(x.where + ': 句子太長（' + n + ' 字 > ' + L.sent + '）「' + s.slice(0, 50) + '…」'); });
      tokens(x.t).forEach(function (t) {
        nTok++;
        if (stems(t.k, lv).some(function (s) { return lex[s]; })) return;
        if (names[t.w] || (/^[A-Z]/.test(t.w) && names[t.k])) { used[t.w] = 1; return; }
        if (extra[t.k] || stems(t.k, lv).some(function (s) { return extra[s]; })) { nExtra++; return; }
        (off[t.k] = off[t.k] || []).push(x.where);
      });
    });
    Object.keys(off).forEach(function (k) { err(set.id + ': 表外字「' + k + '」（' + off[k][0] + (off[k].length > 1 ? ' 等 ' + off[k].length + ' 處' : '') + '）'); });
    if (lv === 'i' && (set.extra || []).length > L.extra * (part === 'M' ? 3 : 1)) err(set.id + ': extra 表外字最多 ' + L.extra * (part === 'M' ? 3 : 1) + ' 個');
    if (lv === 'a' && nTok && nExtra / nTok * 100 > L.extraPct) err(set.id + ': extra 表外字占 ' + (nExtra / nTok * 100).toFixed(1) + '%（> ' + L.extraPct + '%）');
    (set.extra || []).forEach(function (x) { if (stems(String(x).toLowerCase(), lv).some(function (s) { return lex[s]; })) warn(set.id + ': extra「' + x + '」其實在詞表裡，可以拿掉'); });
    return { errors: E, warns: W, offList: Object.keys(off), names: Object.keys(used), questions: qnum, tokens: nTok };
  }

  var core = { LV: LV, PARTS: PARTS, MOCK: MOCK, LIM: LIM, SPK: SPK, ID_RE: ID_RE, IRR: IRR, lexOf: lexOf, stems: stems, tokens: tokens, words: words, sentences: sentences,
    questions: questions, auto: auto, mkP: mkP, stemOf: stemOf, setIdOf: setIdOf, fileOf: fileOf, norm: norm, gradeQ: gradeQ, scale: scale, passLR: passLR, writeScore: writeScore, speakScore: speakScore, validateSet: validateSet };
  if (typeof module !== 'undefined' && module.exports) module.exports = core; else root.GeptCore = core;
})(typeof window !== 'undefined' ? window : this);
