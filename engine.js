/* engine.js — 題目引擎（不碰 DOM；瀏覽器與 Node 都能用） */
(function (root) {
  'use strict';
  const TAGS = { animal: '動物', food: '食物', color: '顏色', number: '數字', family: '家人', school: '學校', body: '身體', weather: '天氣', place: '地方', time: '時間', verb: '動作', adj: '形容詞',
    clothing: '衣物', transport: '交通', sport: '運動', job: '職業', house: '家裡', feeling: '心情', nature: '自然', function: '功能字', people: '人', thing: '東西', holiday: '節日' };
  const ROOT_T = { prefix: '字首', suffix: '字尾', root: '字根' };
  const MODULES = { words: '單字', phrases: '片語', roots: '字根字首', grammar: '文法', patterns: '句型' };
  const PHRASE_LV = { 1: '必會', 2: '基本', 3: '進階' };
  const TYPES = { 'listen-choose': '聽音選字', zh2en: '看中文選英文', en2zh: '看英文選中文', spell: '聽寫拼字', 'root-meaning': '字首字尾的意思', 'root-word': '用字根組單字', 'grammar-fill': '文法填空', 'grammar-fix': '挑出正確的句子', reorder: '句子重組', 'pattern-choose': '看中文選句子', 'phrase-fill': '片語填空', 'zh2en-type': '中翻英打字', 'root-type': '字根拼字（打字）', speak: '🎤 說說看', 'grammar-fill-type': '文法填空（打字）', 'grammar-fix-type': '改正錯句（打字）', 'word-gap': '填空拼字', 'phrase-fill-type': '例句填空（打字）', 'phrase-dictation': '聽寫片語',
    // 課本單元專屬題（2026-10-18，只在 📘 課本進度的練習／考試出）
    'tb-fill': '選出正確的字', 'tb-fill-type': '填空（打字）', 'tb-ask-type': '看提示造問句（打字）', 'tb-answer': '選出正確的回答', 'tb-answer-type': '打出簡答', 'tb-listen': '聽力：選出意思' };
  const TB_TYPES = ['tb-fill', 'tb-fill-type', 'tb-ask-type', 'tb-answer', 'tb-answer-type', 'tb-listen'];
  // 只放在「練習這組」的題型（一般練習回合、例題庫不出，題型組成維持原樣）；課本專屬題也不進一般練習
  const SET_ONLY_TYPES = ['word-gap', 'grammar-fill-type', 'grammar-fix-type', 'phrase-fill-type', 'phrase-dictation'].concat(TB_TYPES);
  const MOD_TYPES = { words: ['listen-choose', 'zh2en', 'en2zh', 'spell', 'zh2en-type', 'speak'], phrases: ['listen-choose', 'zh2en', 'en2zh', 'phrase-fill', 'zh2en-type', 'phrase-fill-type', 'phrase-dictation', 'speak'], roots: ['root-meaning', 'root-word', 'root-type'], grammar: ['grammar-fill', 'grammar-fix', 'reorder', 'zh2en-type', 'grammar-fill-type', 'grammar-fix-type', 'speak'], patterns: ['reorder', 'pattern-choose', 'zh2en-type', 'speak'] };
  const TYPED = 'zh2en-type';
  // 鍵盤打字題（練習一組時排最後；共用同一個打字介面與判分）
  const TYPED_TYPES = ['spell', 'zh2en-type', 'root-type', 'grammar-fill-type', 'grammar-fix-type', 'word-gap', 'tb-fill-type', 'tb-ask-type', 'tb-answer-type', 'phrase-fill-type', 'phrase-dictation'];
  // 排序等級：選擇類 0 → 🎤 說說看 1 → 填空拼字 2 → 其他打字 3（練習這組照這個順序；答錯重排也不越級）
  const typedRank = q => (q && q.type === 'speak' ? 1 : !isTyped(q) ? 0 : q.type === 'word-gap' ? 2 : 3);
  // 文法、句型的固定題組：10 題非打字＋5 題打字（打字題排最後）；總數不足 15 時照 2:1 的比例
  const SET_CHOICE = 10, SET_TYPED = 5;
  function composeSet(choiceIds, typedIds) {
    const n = choiceIds.length + typedIds.length;
    if (n >= SET_CHOICE + SET_TYPED && choiceIds.length >= SET_CHOICE && typedIds.length >= SET_TYPED) return choiceIds.slice(0, SET_CHOICE).concat(typedIds.slice(0, SET_TYPED));
    const total = Math.min(n, SET_CHOICE + SET_TYPED);
    let kt = Math.min(typedIds.length, Math.max(typedIds.length ? 1 : 0, Math.round(total / 3)));
    let kc = Math.min(choiceIds.length, total - kt);
    kt = Math.min(typedIds.length, total - kc);
    return choiceIds.slice(0, kc).concat(typedIds.slice(0, kt));
  }
  const isTyped = q => TYPED_TYPES.includes(q && q.type);
  const SRC_LABEL = { moe: '教育部基本字彙', moe1200: '教育部 1200 字', moe800: '教育部 800 字（國中進階）', extra: '補充字', textbook: '課本補充字' };
  const PATTERN_LV = { 1: '簡單', 2: '基本', 3: '進階' };
  const POS = { n: '名詞', v: '動詞', adj: '形容詞', adv: '副詞', num: '數字', pron: '代名詞', prep: '介系詞', conj: '連接詞', art: '冠詞', int: '感嘆詞', aux: '助動詞' };
  // 單字的題號：通常是 slug(w)；跟別的字撞名（May／may、Miss／miss）時用資料裡的 id
  const wordKey = w => w.id || slug(w.w);

  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function norm(s) { return String(s == null ? '' : s).trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' '); }
  function tokens(s) { return norm(s).replace(/[^a-z0-9' ]/g, ' ').split(' ').filter(Boolean); }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function fillBlank(s, a) { return s.replace(/_{2,}/, a); }
  // 從分層候選裡挑 n 個不重複、也不等於答案的干擾選項
  function distract(answer, tiers, n) {
    const out = [], seen = new Set([answer]);
    for (const tier of tiers) {
      for (const v of shuffle(tier)) { if (out.length >= n) return out; if (v != null && v !== '' && !seen.has(v)) { seen.add(v); out.push(v); } }
    }
    return out;
  }
  function choice(answer, tiers) { return shuffle([answer].concat(distract(answer, tiers, 3))); }
  function chips(sentence) {
    const t = sentence.trim().split(/\s+/);
    if (t.length < 2) return t;
    let s, k = 0;
    do { s = shuffle(t); k++; } while (s.join(' ') === t.join(' ') && k < 20);
    return s;
  }

  // ---- 學會紀錄（純函式）----
  const TPE = {};
  function fmtTaipei(iso, full) {
    if (!iso) return '';
    const d = new Date(iso); if (isNaN(d)) return '';
    const f = TPE.f || (TPE.f = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }));
    const p = {}; f.formatToParts(d).forEach(x => { p[x.type] = x.value; });
    return full ? `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second}` : `${p.month}/${p.day} ${p.hour}:${p.minute}`;
  }
  // 語速：0.5～1.3、一位小數；舊設定（0.7／1）或壞值都轉成合法值
  function clampRate(r) { const n = parseFloat(r); if (!isFinite(n)) return 1; return Math.round(Math.min(1.3, Math.max(0.5, n)) * 10) / 10; }
  // 學會紀錄 {itemId:{at}}：回傳新物件，不改原本的
  function setLearned(L, itemId, iso, score) { const o = Object.assign({}, L); o[itemId] = score ? { at: iso, score } : { at: iso }; return o; }
  // 中翻英打字的判分：不分大小寫、去頭尾空白、空白合併、句尾 .!? 不計、彎引號統一；可接受 alts
  function typeNorm(s) { return String(s == null ? '' : s).replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').toLowerCase().replace(/\s+/g, ' ').trim().replace(/\s*[.!?]+$/, '').trim(); }
  // 縮寫／展開互收（2026-10-18 舊資料同類修正）：I'm＝I am、don't＝do not、It's＝It is、can't＝cannot、I'll＝I will…
  // 判分前把答案和輸入都展開成同一種寫法再比，混著寫（I'm … do not）也收。's 只展開代名詞／疑問詞／there／here／that（Tom's、Let's 不動）；
  // 'd 只認 'd like／'d love（＝would）。先小寫、撇號統一成 '
  const CONTR = [
    [/\bwon't\b/g, 'will not'], [/\bcan't\b/g, 'cannot'], [/\bcan not\b/g, 'cannot'],
    [/\b(do|does|did|is|are|was|were|have|has|had|should|could|would|must|need)n't\b/g, '$1 not'],
    [/\bi'm\b/g, 'i am'], [/\b(you|we|they|what|who|where|there|here|how)'re\b/g, '$1 are'],
    [/\b(i|you|we|they|he|she|it|that|there)'ll\b/g, '$1 will'], [/\b(i|you|we|they)'ve\b/g, '$1 have'],
    [/\b(i|you|we|they|he|she)'d (like|love)\b/g, '$1 would $2'],
    [/\b(he|she|it|that|what|where|who|how|there|here)'s\b/g, '$1 is']
  ];
  function expandContr(s) { return CONTR.reduce((t, [r, v]) => t.replace(r, v), String(s == null ? '' : s).toLowerCase().replace(/[’‘`´]/g, "'")); }
  function typeGrade(answer, alts, input) {
    const t = typeNorm(input), tc = expandContr(t), ok = !!t && [answer].concat(alts || []).some(a => { const n = typeNorm(a); return n === t || expandContr(n) === tc; });
    let diffAt = -1;
    if (!ok) { const a = typeNorm(answer).split(' '), b = t ? t.split(' ') : []; diffAt = a.findIndex((w, i) => w !== b[i]); if (diffAt < 0) diffAt = a.length - 1; }
    return { ok, diffAt };
  }
  // 🎤 說說看的判分（瀏覽器語音辨識的 alternatives）：小寫、去標點（含撇號、連字號）、空白合併；
  // 0–20 與整十的阿拉伯數字轉成英文字（辨識常把 two 寫成 2）。
  // mode 'word'：任一個 alternative 等於目標，或含有目標（整個字／整組字）就對；'sentence'（片語、句子）：要整句一樣。
  const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const TENS = { 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'one hundred' };
  function speakNorm(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[’‘`´']/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
      .split(' ').map(t => (/^\d+$/.test(t) ? (NUM_WORDS[+t] || TENS[+t] || t) : t)).join(' ');
  }
  // 縮寫／展開互收：原樣比一次、兩邊都展開（expandContr）再比一次，任一個對就算（辨識結果寫 I'm、小朋友說 I am 也對）
  const speakForms = s => [...new Set([speakNorm(s), speakNorm(expandContr(s))])].filter(Boolean);
  function speakGrade(answer, alts, heard, mode) {
    const targets = [...new Set([answer].concat(alts || []).flatMap(speakForms))];
    const list = (Array.isArray(heard) ? heard : [heard]).map(h => String(h == null ? '' : h));
    const at = list.findIndex(h => {
      const ns = speakForms(h);
      if (!ns.length) return false;
      return ns.some(n => targets.some(t => n === t || (mode === 'word' && (' ' + n + ' ').includes(' ' + t + ' '))));
    });
    return { ok: at >= 0, at, heard: at >= 0 ? list[at] : (list[0] || '') };
  }
  // 練習一組時的排序：選擇類洗牌 → 說說看 → 填空拼字 → 其他打字題（打字類一律排最後，順序照題組）
  function drillOrder(qs) { return shuffle(qs.filter(q => typedRank(q) === 0)).concat([1, 2, 3].flatMap(r => qs.filter(q => typedRank(q) === r))); }
  // 答錯重排：插到「後面第一題等級比它高的」之前（選擇題在打字題前、填空拼字在完整打字題前）；最高等級的放最後
  function requeue(list, i, q) {
    const out = list.slice(), r = typedRank(q);
    let at = out.length;
    const k = out.findIndex((x, j) => j > i && typedRank(x) > r); if (k >= 0) at = k;
    out.splice(at, 0, q);
    return out;
  }
  // ---- 單字填空拼字（word-gap）：用單字當種子，同一個字每次抽到的位置都一樣 ----
  function hash32(s) { let h = 2166136261 >>> 0; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h; }
  function seededRng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function seededPick(arr, k, seed) { const a = arr.slice(), r = seededRng(hash32(seed)); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, k).sort((x, y) => x - y); }
  // 回傳 {g1, g2}（要挖空的字元位置；只挖英文字母，空白、句點、連字號照樣顯示）；字母少於 2 個回傳 null（這種字不出填空）
  // 第 3 題 g1：約 1/3、至少 1 個、保留第一個字母；第 4 題 g2：約 1/2、至少 2 個、不全挖、跟 g1 不完全一樣
  // 3 個字母以下：g1 挖 1 個、g2 挖 2 個；只有 2 個字母時 g2 沒辦法挖 2 個又不全挖 → 改挖第一個字母（跟 g1 不同）
  function wordGaps(word) {
    const letters = []; String(word).split('').forEach((c, i) => { if (/[A-Za-z]/.test(c)) letters.push(i); });
    const n = letters.length; if (n < 2) return null;
    const first = letters[0], rest = letters.slice(1);
    const k1 = Math.min(rest.length, n <= 3 ? 1 : Math.max(1, Math.round(n / 3)));
    const g1 = seededPick(rest, k1, word + '|gap1');
    let g2;
    if (n === 2) g2 = [first];
    else {
      const k2 = Math.min(rest.length, n <= 3 ? 2 : Math.max(2, Math.round(n / 2)));
      g2 = seededPick(rest, k2, word + '|gap2');
      if (g2.join() === g1.join()) { const other = rest.find(p => !g1.includes(p)); g2 = other != null ? g2.slice(1).concat(other).sort((x, y) => x - y) : [first]; }
    }
    return { g1, g2 };
  }
  // 填空拼字判分：input＝填好的整個字（沒填的格子用 _）或格子字母陣列；每格不分大小寫，全部對才算對
  function gapGrade(answer, gaps, input) {
    const a = String(answer), letters = Array.isArray(input) ? input.map(String) : (String(input == null ? '' : input).length === a.length ? gaps.map(p => String(input)[p]) : []);
    const wrong = gaps.map((p, j) => ((letters[j] || '').toLowerCase() === a[p].toLowerCase() ? -1 : j)).filter(j => j >= 0);
    return { ok: gaps.length > 0 && letters.length === gaps.length && !wrong.length, wrong, diffAt: -1 };
  }
  // 答對過的題目（從作答紀錄算）
  function correctIds(log) { const s = new Set(); (log || []).forEach(l => { if (l && l.ok && l.id) s.add(l.id); }); return s; }
  // 「學會了」小測驗是否通過：答對數 ≥ 門檻（從 981d094 移植）
  const gatePassed = (gate, correct) => !!gate && correct >= gate.need;
  // 取消學會：留墓碑 {removedAt}（裝置同步時「最新的事件」勝，取消才會傳到別台、不會被救回）；沒給時間就直接刪
  function unsetLearned(L, itemId, iso) { const o = Object.assign({}, L); if (iso) o[itemId] = { removedAt: iso }; else delete o[itemId]; return o; }
  const wordItemId = w => 'word:' + wordKey(w), patternItemId = p => 'pattern:' + p.id, grammarItemId = g => 'grammar:' + g.id, rootItemId = r => 'root:' + slug(r.p), phraseItemId = p => 'phrase:' + p.id;
  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // 片語在例句裡的位置（例句填空打字用）：照 form／p 找整個字（前後不能接字母），只出現一次才回傳 {answer＝例句裡的原樣, prompt＝挖空的例句}；
  // 出現 0 次或 2 次以上回傳 null（答案不唯一，不出這題）
  function phraseInEx(ph) {
    const re = new RegExp("(^|[^A-Za-z'])(" + escRe(ph.form || ph.p) + ")(?![A-Za-z'])", 'gi'), hits = [...String(ph.ex).matchAll(re)];
    if (hits.length !== 1) return null;
    const h = hits[0], at = h.index + h[1].length;
    return { answer: h[2], prompt: ph.ex.slice(0, at) + '___' + ph.ex.slice(at + h[2].length) };
  }
  // 單字在例句裡的位置（單字中翻英第 2 題用）：依序試 form、原形、常見變化（3 個字母以上才試 -s／-es／-ies／-ed／-d／-ing）；
  // 第一個找得到的寫法只出現一次才回傳 {answer＝例句裡的原樣, prompt＝挖空的例句}，否則 null（改用中文＋詞性提示）
  function wordInEx(w) {
    if (!w.ex || !w.exZh) return null;
    const b = w.w, more = b.length >= 3 ? [b + 's', b + 'es', b.replace(/y$/, 'ies'), b + 'ed', b + 'd', b.replace(/e$/, '') + 'ing'] : [];
    for (const f of [...new Set([w.form, b].concat(more).filter(Boolean))]) {
      const hits = [...w.ex.matchAll(new RegExp("(^|[^A-Za-z'])(" + escRe(f) + ")(?![A-Za-z'])", 'gi'))];
      if (!hits.length) continue;
      if (hits.length > 1) return null;
      const h = hits[0], at = h.index + h[1].length;
      return { answer: h[2], prompt: w.ex.slice(0, at) + '___' + w.ex.slice(at + h[2].length) };
    }
    return null;
  }
  // 片語例句超過 10 個字：只打含片語的那半句（先照句號切；切不開就從片語開頭打到句尾）。回傳 {answer, prompt＝另半句＋___}；不長回傳 null
  const wordCount = s => String(s).trim().split(/\s+/).length;
  function phraseHalf(ph) {
    if (wordCount(ph.ex) <= 10) return null;
    const at = ph.ex.toLowerCase().indexOf((ph.form || ph.p).toLowerCase());
    if (at < 0) return null;
    let off = 0, ans = '';
    for (const s of ph.ex.match(/[^.;!?]+[.;!?]*\s*/g) || []) { if (at >= off && at < off + s.length) { ans = s.trim(); break; } off += s.length; }
    if (!ans || ans === ph.ex.trim() || wordCount(ans) > 10) ans = ph.ex.slice(at).trim();
    return { answer: ans, prompt: ph.ex.replace(ans, '___') };
  }
  // 句中有逗號：不打逗號也算對
  const noComma = s => (/,/.test(s) ? [s.replace(/\s*,\s*/g, ' ')] : []);

  function Engine(data) {
    const D = this.D = { words: data.words || [], phrases: data.phrases || [], roots: data.roots || [], grammar: data.grammar || [], patterns: data.patterns || [], textbook: data.textbook || [] };
    this.meta = []; this.byId = {};
    const add = (m, make) => { m.tkey = m.module + ':' + m.topic; m.make = () => Object.assign({ id: m.id, module: m.module, topic: m.topic, tkey: m.tkey, type: m.type, title: m.title, why: '' }, make()); this.meta.push(m); this.byId[m.id] = m; };

    // ---- 單字 ----
    D.words.forEach(w => {
      const topic = (w.tags && w.tags[0]) || 'other', key = wordKey(w);
      // 干擾選項：同等級同主題 → 同詞性 → 同等級 → 全部；中文意思一樣的字、互為同義字（alts）的字不當干擾（看中文選英文才不會兩個都對）
      const syn = x => (w.alts || []).includes(x.w) || (x.alts || []).includes(w.w);
      const tiers = f => {
        const others = D.words.filter(x => x !== w && x.zh !== w.zh && !syn(x)), lv = others.filter(x => x.lv === w.lv);
        return [lv.filter(x => (x.tags || []).some(t => (w.tags || []).includes(t))).map(f), lv.filter(x => x.pos === w.pos).map(f), lv.map(f), others.map(f)];
      };
      const why = `${w.w} ${w.ipa || ''} ＝ ${w.zh}`;
      const base = { module: 'words', topic, lv: w.lv, src: w.src || 'moe', title: `${w.w}　${w.zh}` };
      add(Object.assign({ id: `w:${key}:listen`, type: 'listen-choose' }, base), () => ({ prompt: '聽聽看，是哪一個字？', options: choice(w.w, tiers(x => x.w)), answer: w.w, speakText: w.w, auto: true, play: true, why }));
      add(Object.assign({ id: `w:${key}:zh2en`, type: 'zh2en' }, base), () => ({ prompt: w.zh, options: choice(w.w, tiers(x => x.w)), answer: w.w, speakText: w.w, why }));
      add(Object.assign({ id: `w:${key}:en2zh`, type: 'en2zh' }, base), () => ({ prompt: w.w, en: true, play: true, options: choice(w.zh, tiers(x => x.zh)), answer: w.zh, speakText: w.w, why }));
      add(Object.assign({ id: `w:${key}:spell`, type: 'spell' }, base), () => ({ prompt: '聽寫：把聽到的字拼出來', sub: `提示：${w.zh}（${w.w.length} 個字母）`, input: 'type', options: null, answer: w.w, alts: [], speakText: w.w, auto: true, play: true, why }));
      // 看中文打字：同義字（w.alts，如 shop 也收 store）一起算對（2026-10-18）
      add(Object.assign({ id: `w:${key}:type`, type: 'zh2en-type' }, base), () => ({ prompt: w.zh, sub: `（${POS[w.pos] || w.pos}）打出這個英文字`, input: 'type', options: null, answer: w.w, alts: (w.alts || []).slice(), speakText: w.w, why }));
      // 填空拼字 2 題（只在「練習這組」出；第 3 題挖約 1/3、第 4 題挖約 1/2）
      const gp = wordGaps(w.w);
      if (gp) [['gap1', gp.g1, '把少掉的字母填進去'], ['gap2', gp.g2, '再難一點：把少掉的字母填進去']].forEach(([s, gaps, sub]) =>
        add(Object.assign({ id: `w:${key}:${s}`, type: 'word-gap', setOnly: true }, base), () => ({ prompt: w.zh, sub, input: 'gap', gaps: gaps.slice(), options: null, answer: w.w, alts: [], speakText: w.w, play: true, why })));
      add(Object.assign({ id: `w:${key}:speak`, type: 'speak' }, base), () => ({ prompt: w.w, en: true, sub: w.zh, input: 'mic', play: true, options: null, answer: w.w, alts: [], speakMode: 'word', speakText: w.w, why }));
      // 中翻英第 2 題（2026-10-25，只在「練習這組」出）：看中文例句，打出句中這個字（句子其餘英文照常顯示）；
      // 例句裡找不到（或出現 2 次以上）→ 改成「中文＋詞性＋第一個字母和字母數」
      const wx = wordInEx(w);
      add(Object.assign({ id: `w:${key}:extype`, type: 'zh2en-type', setOnly: true }, base), () => (wx
        ? { prompt: w.exZh, sub: `${wx.prompt}（打出空格裡的英文字：${w.zh}${wx.answer.toLowerCase() !== w.w.toLowerCase() ? '，要配合句子改形式' : ''}）`, input: 'type', options: null, answer: wx.answer, alts: wx.answer === w.w ? (w.alts || []).slice() : [], speakText: w.ex, why: `${why}：${w.ex}　${w.exZh}` }
        : { prompt: w.zh, sub: `（${POS[w.pos] || w.pos}）第一個字母是 ${w.w[0]}，共 ${w.w.length} 個字母：打出這個英文字`, input: 'type', options: null, answer: w.w, alts: (w.alts || []).slice(), speakText: w.w, why }));
    });

    // ---- 片語：聽音選、看中文選、看英文選、例句填空、中翻英打字 ----
    D.phrases.forEach(ph => {
      const topic = ph.lv + '|' + ph.tag, ans = ph.form || ph.p, key = ph.id, why = `${ph.p} ＝ ${ph.zh}`;
      // 選擇題：同等級同類別優先（比較難）；填空題：用「不同類別」的片語當干擾，避免干擾選項也剛好通順
      const tiers = (f, sameTag) => {
        const others = D.phrases.filter(x => x !== ph), lv = others.filter(x => x.lv === ph.lv);
        return sameTag ? [lv.filter(x => x.tag === ph.tag).map(f), lv.map(f), others.map(f)] : [lv.filter(x => x.tag !== ph.tag).map(f), others.filter(x => x.tag !== ph.tag).map(f)];
      };
      const base = { module: 'phrases', topic, lv: ph.lv, title: `${ph.p}　${ph.zh}` };
      add(Object.assign({ id: `ph:${key}:listen`, type: 'listen-choose' }, base), () => ({ prompt: '聽聽看，是哪一個片語？', options: choice(ph.p, tiers(x => x.p, true)), answer: ph.p, speakText: ph.p, auto: true, play: true, why }));
      add(Object.assign({ id: `ph:${key}:zh2en`, type: 'zh2en' }, base), () => ({ prompt: ph.zh, options: choice(ph.p, tiers(x => x.p, true)), answer: ph.p, speakText: ph.p, why }));
      add(Object.assign({ id: `ph:${key}:en2zh`, type: 'en2zh' }, base), () => ({ prompt: ph.p, en: true, play: true, options: choice(ph.zh, tiers(x => x.zh, true)), answer: ph.zh, speakText: ph.p, why }));
      add(Object.assign({ id: `ph:${key}:fill`, type: 'phrase-fill' }, base), () => ({
        prompt: ph.ex.replace(new RegExp(escRe(ans), 'i'), '___'), sub: '選出放進空格的片語', options: choice(ans, tiers(x => x.form || x.p, false)),
        answer: ans, speakText: ph.ex, why: `${ph.p}（${ph.zh}）：${ph.exZh}`
      }));
      add(Object.assign({ id: `ph:${key}:type`, type: 'zh2en-type' }, base), () => ({ prompt: ph.zh, sub: '打出這個英文片語', input: 'type', options: null, answer: ph.p, alts: ph.form ? [ph.form] : [], speakText: ph.p, why }));
      add(Object.assign({ id: `ph:${key}:speak`, type: 'speak' }, base), () => ({ prompt: ph.p, en: true, sub: ph.zh, input: 'mic', play: true, options: null, answer: ph.p, alts: ph.form ? [ph.form] : [], speakMode: 'sentence', speakText: ph.p, why }));
      // 打字 2 題（2026-10-23，只在「練習這組」出）：
      // 例句填空打字：例句挖掉整個片語（照例句裡的寫法，如 ran away、is good at），給中文＋時態提示（fillHint）；fillAlts＝放進句子也對的片語
      const fm = phraseInEx(ph);
      if (fm) add(Object.assign({ id: `ph:${key}:filltype`, type: 'phrase-fill-type', setOnly: true }, base), () => ({
        prompt: fm.prompt, sub: `打出空格裡的片語（提示：${ph.zh}${ph.fillHint ? '，' + ph.fillHint : ''}）${ph.form ? '　要配合句子改形式' : ''}`, input: 'type', options: null,
        answer: fm.answer, alts: (ph.fillAlts || []).slice(), speakText: ph.ex, why: `${ph.p}（${ph.zh}）：${ph.ex}　${ph.exZh}`
      }));
      // 聽寫片語：播放片語，打出來（提示中文意思和字數）
      add(Object.assign({ id: `ph:${key}:dict`, type: 'phrase-dictation', setOnly: true }, base), () => ({ prompt: '聽寫：把聽到的片語打出來', sub: `提示：${ph.zh}（${ph.p.trim().split(/\s+/).length} 個字）`, input: 'type', options: null, answer: ph.p, alts: [], speakText: ph.p, auto: true, play: true, why }));
      // 中翻英第 2 題（2026-10-25，只在「練習這組」出）：看例句中文，打出整句英文；例句超過 10 個字只打含片語的那半句（另半句照常顯示）
      const hx = phraseHalf(ph);
      add(Object.assign({ id: `ph:${key}:extype`, type: 'zh2en-type', setOnly: true }, base), () => ({
        prompt: ph.exZh, sub: hx ? `例句比較長，只要打出含「${ph.p}」的那半句：${hx.prompt}` : `用鍵盤打出整句英文（要用到「${ph.p}」）`, input: 'type', options: null,
        answer: hx ? hx.answer : ph.ex, alts: noComma(hx ? hx.answer : ph.ex), speakText: ph.ex, why: `${ph.p}（${ph.zh}）：${ph.ex}　${ph.exZh}`
      }));
    });

    // ---- 字根字首 ----
    D.roots.forEach(r => {
      const ex = r.words[0];
      add({ id: `r:${slug(r.p)}:meaning`, module: 'roots', topic: r.t, type: 'root-meaning', title: `${r.p}　${r.m}` }, () => ({
        prompt: `${r.p} 是什麼意思？`, sub: r.words.map(x => x.w).join(', '), subEn: true,
        options: choice(r.m, [D.roots.filter(x => x !== r && x.t === r.t).map(x => x.m), D.roots.filter(x => x !== r).map(x => x.m)]),
        answer: r.m, speakText: ex.w, why: `${r.p} ＝ ${r.m}。例：${ex.parts.join(' + ')} ＝ ${ex.w}（${ex.zh}）`
      }));
      r.words.forEach(w => {
        add({ id: `r:${slug(w.w)}:word`, module: 'roots', topic: r.t, type: 'root-word', title: `${w.w}　${w.zh}` }, () => ({
          prompt: `「${w.zh}」英文怎麼說？`, sub: `提示：${r.p}（${r.m}）`,
          options: choice(w.w, [r.words.filter(x => x !== w).map(x => x.w), D.roots.filter(x => x !== r && x.t === r.t).flatMap(x => x.words.map(y => y.w)), D.roots.flatMap(x => x.words.map(y => y.w))]),
          answer: w.w, speakText: w.w, why: `${w.parts.join(' + ')} ＝ ${w.w}（${r.p} ＝ ${r.m}）`
        }));
      });
      // 字根拼字（打字）：輪流藏起一個部分當提示，要打出整個字
      r.words.forEach((w, i) => {
        const hide = w.parts.length - 1 - (i % w.parts.length), hint = w.parts.map((x, k) => (k === hide ? '___' : x)).join(' + ');
        add({ id: `r:${slug(w.w)}:type`, module: 'roots', topic: r.t, type: 'root-type', title: `${w.w}　${w.zh}` }, () => ({
          prompt: `${w.zh} ＝ ${hint}`, sub: '打出整個英文字', input: 'type', options: null, answer: w.w, alts: [], speakText: w.w,
          why: `${w.parts.join(' + ')} ＝ ${w.w}（${r.p} ＝ ${r.m}）`
        }));
      });
      // 字根拼字（打字）補題（2026-10-23，只在「練習這組」出）：例字少於 3 個時，同一個例字換一種藏法再出一題（:type2），湊滿 3 題打字。
      // 優先挑「原本沒藏到字根本身」的例字，這次藏字根（over + ___ → ___ + eat）；都藏過了就藏下一個部分
      const core = r.p.replace(/-/g, '');
      r.words.map((w, i) => {
        const L = w.parts.length, hid = L - 1 - (i % L), ri = w.parts.indexOf(core);
        return { w, hide: ri >= 0 && ri !== hid ? ri : (hid + 1) % L, pri: ri >= 0 && ri !== hid ? 0 : 1, i };
      }).filter(x => x.w.parts.length >= 2).sort((a, b) => a.pri - b.pri || a.i - b.i).slice(0, Math.max(0, 3 - r.words.length)).forEach(({ w, hide }) => {
        const hint = w.parts.map((x, k) => (k === hide ? '___' : x)).join(' + ');
        add({ id: `r:${slug(w.w)}:type2`, module: 'roots', topic: r.t, type: 'root-type', title: `${w.w}　${w.zh}`, setOnly: true }, () => ({
          prompt: `${w.zh} ＝ ${hint}`, sub: '打出整個英文字', input: 'type', options: null, answer: w.w, alts: [], speakText: w.w,
          why: `${w.parts.join(' + ')} ＝ ${w.w}（${r.p} ＝ ${r.m}）`
        }));
      });
      // 中翻英打字 2 題（2026-10-25，只在「練習這組」出）：看中文意思，打出含這個字根的例字；同一字根裡中文一樣的例字也算對。
      // 例字不足 2 個：第 2 題用同一個例字，提示改成「幾個部分、幾個字母」
      [r.words[0], r.words[1]].forEach((w, i) => {
        const same = !w, x = w || r.words[0];
        add({ id: `r:${slug(r.p)}:zh${i + 1}`, module: 'roots', topic: r.t, type: 'zh2en-type', title: `${x.w}　${x.zh}`, setOnly: true }, () => ({
          prompt: x.zh, sub: same ? `打出含「${r.p}」的英文字（${x.parts.length} 個部分、${x.w.length} 個字母）` : `打出含「${r.p}」（${r.m}）的英文字`, input: 'type', options: null,
          answer: x.w, alts: r.words.filter(y => y !== x && y.zh === x.zh).map(y => y.w), speakText: x.w, why: `${x.parts.join(' + ')} ＝ ${x.w}（${r.p} ＝ ${r.m}）`
        }));
      });
    });

    // ---- 句子題：文法例句與句型例句共用 ----
    const sentenceQs = (module, topic, idBase, e, why) => {
      add({ id: `${idBase}:reorder`, module, topic, type: 'reorder', title: e.en }, () => ({ prompt: e.zh, sub: '把字卡排成正確的英文句子', input: 'chips', options: chips(e.en), answer: e.en, speakText: e.en, why }));
      add({ id: `${idBase}:speak`, module, topic, type: 'speak', title: e.en }, () => ({ prompt: e.en, en: true, sub: e.zh, input: 'mic', play: true, options: null, answer: e.en, alts: e.alts || [], speakMode: 'sentence', speakText: e.en, why })); // 例句有 alts（如 How many … are there / 無 there 版）才多收，其他句照舊整句比對
    };

    // ---- 文法 ----
    D.grammar.forEach(g => {
      g.q.forEach((q, i) => {
        const id = `g:${g.id}:${i}`;
        if (q.type === 'fill') {
          add({ id, module: 'grammar', topic: g.id, type: 'grammar-fill', title: fillBlank(q.s, q.a) }, () => ({ prompt: q.s, options: shuffle(q.opts), answer: q.a, speakText: fillBlank(q.s, q.a), why: q.why }));
          // 打字版：打出空格裡的字（題組最後 5 題用；id 另起，選擇版的進度不受影響）
          // 打字版沒有選項：q.hint（原形字或中文意思）顯示在提示裡讓答案唯一；q.alts＝其他也對的答案（如 Can／May）（2026-10-18）
          add({ id: id + ':type', module: 'grammar', topic: g.id, type: 'grammar-fill-type', title: fillBlank(q.s, q.a), setOnly: true }, () => ({ prompt: q.s, sub: q.hint ? `打出空格裡的字（提示：${q.hint}）` : '打出空格裡的字', input: 'type', options: null, answer: q.a, alts: (q.alts || []).slice(), speakText: fillBlank(q.s, q.a), why: q.why }));
          grammarSpeak(id, fillBlank(q.s, q.a), q.why, (q.alts || []).map(a => fillBlank(q.s, a)));
        } else {
          add({ id, module: 'grammar', topic: g.id, type: 'grammar-fix', title: q.right }, () => ({ prompt: '哪一句是對的？', options: shuffle([q.wrong, q.right]), answer: q.right, speakText: q.right, why: q.why }));
          // 打字版：顯示錯句，打出正確的句子（填空題不夠時才進題組）
          add({ id: id + ':type', module: 'grammar', topic: g.id, type: 'grammar-fix-type', title: q.right, setOnly: true }, () => ({ prompt: q.wrong, sub: '這句有錯，打出正確的句子', input: 'type', options: null, answer: q.right, alts: (q.alts || []).slice(), speakText: q.right, why: q.why }));
          grammarSpeak(id, q.right, q.why, q.alts || []);
        }
      });
      // 🎤 說說看（只在題組出）：說出正確的完整句子（填空題＝填好的句子、改錯題＝正確的句子），整句比對
      function grammarSpeak(id, sentence, why, alts) {
        add({ id: id + ':speak', module: 'grammar', topic: g.id, type: 'speak', title: sentence, setOnly: true }, () => ({ prompt: sentence, en: true, sub: '大聲說出這個完整的句子', input: 'mic', play: true, options: null, answer: sentence, alts: alts.slice(), speakMode: 'sentence', speakText: sentence, why }));
      }
      g.ex.forEach((e, j) => sentenceQs('grammar', g.id, `g:${g.id}:ex${j}`, e, `文法：${g.title}`));
      (g.typed || []).forEach((t, k) => typedQ('grammar', g.id, `g:${g.id}:t${k}`, t, `文法：${g.title}`));
    });

    // ---- 句型：例句（重組＋開口說＋看中文選句子）、加練重組、中翻英打字 ----
    D.patterns.forEach(p => {
      const why = `句型：${p.pattern}（${p.zh}）`;
      p.ex.forEach((e, j) => {
        sentenceQs('patterns', p.id, `p:${p.id}:${j}`, e, why);
        add({ id: `p:${p.id}:${j}:choose`, module: 'patterns', topic: p.id, type: 'pattern-choose', title: e.en }, () => ({ prompt: e.zh, sub: '選出意思對的英文句子', options: choice(e.en, [p.ex.filter(x => x !== e).map(x => x.en), (p.extra || []).map(x => x.en)]), answer: e.en, speakText: e.en, why }));
      });
      (p.extra || []).forEach((e, k) => {
        add({ id: `p:${p.id}:x${k}:reorder`, module: 'patterns', topic: p.id, type: 'reorder', title: e.en }, () => ({ prompt: e.zh, sub: '把字卡排成正確的英文句子', input: 'chips', options: chips(e.en), answer: e.en, speakText: e.en, why }));
        typedQ('patterns', p.id, `p:${p.id}:x${k}:type`, e, why, true); // 加練句的中翻英打字（只在題組最後 5 題用）
      });
      (p.typed || []).forEach((t, k) => typedQ('patterns', p.id, `p:${p.id}:t${k}`, t, why));
    });

    // ---- 課本單元專屬題（2026-10-18）：每個單元在 data/textbook.js 給「句子 sents」和「問答 replies」，題型都從這兩樣組出來；
    // module 'textbook'、setOnly（一般練習／例題庫不出）。題號＝內容：tb:<單元>:<題型>:<句子 key>，錯題庫可以原題重做。
    // sents：{key, g(同組才互當聽力干擾), en, zh, alts, why, ask:{prompt, hint}, blanks:[{fam, w, opts, cue, hint, alts, why}]}
    //   → 每句：重組 ro、🎤 sp、中翻英 zh、聽力 li（選意思對的中文）、看提示造句 ask（有 ask 才出）、每個空格：選 <fam>／打 <fam>:type
    // replies：{key, card(同一輪不重複用), q, cue(⭕ 有／圖示提示), en, alts, wrong(3 個錯的), kind, why} → 選回答 ans、打回答 anst
    this.tbq = {}; this.tbBlank = {};
    D.textbook.forEach(u => {
      const F = this.tbq[u.id] = {}, BF = this.tbBlank[u.id] = [], base = `tb:${u.id}`, topic = u.id;
      const reg = (fam, id, type, title, card, make, extra) => { add(Object.assign({ id, module: 'textbook', topic, type, title, setOnly: true, card }, extra || {}), make); (F[fam] = F[fam] || []).push(id); };
      const sents = u.sents || [], byG = {};
      sents.forEach(x => { (byG[x.g || ''] = byG[x.g || ''] || []).push(x); });
      sents.forEach(x => {
        const why = x.why || u.why || '', alts = x.alts || [], k = x.key;
        (x.blanks || []).forEach(bl => {
          const re = new RegExp("(^|[^A-Za-z'])" + escRe(bl.w) + "(?![A-Za-z'])"), prompt = x.en.replace(re, (m, pre) => pre + '___');
          const cue = bl.cue ? `（${bl.cue}）` : '', bw = bl.why || why;
          if (!BF.includes(bl.fam)) BF.push(bl.fam);
          reg(bl.fam, `${base}:${bl.fam}:${k}`, 'tb-fill', x.en, k, () => ({ prompt, sub: cue + '選出空格裡的字', options: shuffle(bl.opts), answer: bl.w, speakText: x.en, why: bw }));
          reg(bl.fam + 'T', `${base}:${bl.fam}:${k}:type`, 'tb-fill-type', x.en, k, () => ({ prompt, sub: cue + (bl.hint ? `打出空格裡的字（提示：${bl.hint}）` : '打出空格裡的字'), input: 'type', options: null, answer: bl.w, alts: (bl.alts || []).slice(), speakText: x.en, why: bw }));
        });
        if (x.ask) reg('ask', `${base}:ask:${k}`, 'tb-ask-type', x.en, k, () => ({ prompt: x.ask.prompt, sub: `${x.ask.hint ? `提示：${x.ask.hint}　` : ''}用鍵盤打出${/\?$/.test(x.en) ? '問句' : '句子'}`, input: 'type', options: null, answer: x.en, alts: alts.slice(), speakText: x.en, why }));
        reg('ro', `${base}:ro:${k}`, 'reorder', x.en, k, () => ({ prompt: x.zh, sub: '把字卡排成正確的英文句子', input: 'chips', options: chips(x.en), answer: x.en, speakText: x.en, why }));
        reg('sp', `${base}:sp:${k}`, 'speak', x.en, k, () => ({ prompt: x.en, en: true, sub: x.zh, input: 'mic', play: true, options: null, answer: x.en, alts: alts.slice(), speakMode: 'sentence', speakText: x.en, why }));
        reg('zh', `${base}:zh:${k}`, 'zh2en-type', x.en, k, () => ({ prompt: x.zh, sub: '用鍵盤打出整句英文', input: 'type', options: null, answer: x.en, alts: alts.slice(), speakText: x.en, why }));
        // 聽力：聽英文，選意思對的中文（干擾＝同一組的其他句子，中文不一樣的才算）
        reg('li', `${base}:li:${k}`, 'tb-listen', x.en, k, () => {
          const pool = byG[x.g || ''].length > 3 ? byG[x.g || ''] : sents, zs = [];
          shuffle(pool).forEach(y => { if (zs.length < 3 && y.zh !== x.zh && !zs.includes(y.zh)) zs.push(y.zh); });
          return { prompt: '聽聽看，選出意思對的中文', options: shuffle([x.zh].concat(zs)), answer: x.zh, speakText: x.en, auto: true, play: true, why: `${x.en}＝${x.zh}` };
        });
      });
      // 回答問句（看 cue：⭕ 有／❌ 沒有、圖示）：選擇＋打字
      (u.replies || []).forEach(r => {
        const why = r.why || u.why || '', alts = (r.alts || []).concat(/,/.test(r.en) ? [r.en.replace(/,/g, '')] : []);
        reg('ans', `${base}:ans:${r.key}`, 'tb-answer', `${r.q} → ${r.en}`, r.card || r.key, () => ({ prompt: r.q, en: true, play: true, sub: `（${r.cue}）選出正確的回答`, options: shuffle([r.en].concat(r.wrong)), answer: r.en, speakText: r.q, why }), { kind: r.kind });
        reg('anst', `${base}:anst:${r.key}`, 'tb-answer-type', `${r.q} → ${r.en}`, r.card || r.key, () => ({ prompt: r.q, en: true, play: true, sub: `（${r.cue}）打出回答`, input: 'type', options: null, answer: r.en, alts: alts.slice(), speakText: r.q, why }), { kind: r.kind });
      });
      // 情境對話：每句重組／🎤／中翻英打字；情境選擇題
      ((u.dialog && u.dialog.lines) || []).forEach((l, i) => {
        const why = `情境對話：${l.en}（${l.zh}）`;
        reg('dlro', `${base}:dl:${i}:reorder`, 'reorder', l.en, null, () => ({ prompt: l.zh, sub: '把字卡排成正確的英文句子', input: 'chips', options: chips(l.en), answer: l.en, speakText: l.en, why }));
        reg('dlsp', `${base}:dl:${i}:speak`, 'speak', l.en, null, () => ({ prompt: l.en, en: true, sub: l.zh, input: 'mic', play: true, options: null, answer: l.en, alts: (l.alts || []).slice(), speakMode: 'sentence', speakText: l.en, why }));
        reg('dlty', `${base}:dl:${i}:type`, 'zh2en-type', l.en, null, () => ({ prompt: l.zh, sub: '用鍵盤打出整句英文', input: 'type', options: null, answer: l.en, alts: (l.alts || []).slice(), speakText: l.en, why }));
      });
      ((u.dialog && u.dialog.choose) || []).forEach(c => reg('dc', `${base}:dc:${c.id}`, 'tb-answer', `${c.prompt} → ${c.answer}`, null, () => ({ prompt: c.prompt, en: /[a-z]/i.test(c.prompt), play: /[a-z]/i.test(c.prompt), sub: c.sub, options: shuffle(c.options), answer: c.answer, speakText: /[a-z]/i.test(c.answer) ? c.answer : c.prompt, why: c.why || '' })));
    });

    // ---- 每個學習項目的固定題組（全部答對過才能按「學會了」）----
    // 題號只增不改：舊題的 id 意思不變，已答對的紀錄照算；文法／句型改成「10 題非打字＋5 題打字」時，
    // 換進來的打字題是新 id（要再答對一次），換出去的舊題仍在題庫裡、只是不算進這一組。
    this.sets = {};
    const keep = ids => ids.filter(id => this.byId[id]);
    // 單字（2026-10-09 起）：聽音選字 → 看中文選英文 → 填空拼字（約 1/3）→ 填空拼字（約 1/2）→ 看中文打字；順序固定不洗牌。
    // listen／zh2en／type 沿用舊 id（舊進度照算）；en2zh、spell 退出題組但留在題庫；只有 1 個字母的字（a、I）沒有填空，這組 3 題
    // 2026-10-25：打字最後加「例句中翻英」（:extype，新 id）；沒有填空的字（a、I）補聽寫拼字，打字湊滿 3 題
    const wTyped = k => (this.byId[`w:${k}:gap1`] ? [`w:${k}:gap1`, `w:${k}:gap2`] : [`w:${k}:spell`]).concat([`w:${k}:type`, `w:${k}:extype`]);
    D.words.forEach(w => { const k = wordKey(w); this.sets[wordItemId(w)] = keep([`w:${k}:listen`, `w:${k}:zh2en`].concat(wTyped(k))); });
    // 片語（2026-10-23 起）：選擇 4 題 → 打字 3 題（中翻英打字 → 例句填空打字 → 聽寫片語）；舊 5 題 id 不變，新加的 2 題要再答對一次
    D.phrases.forEach(ph => { this.sets[phraseItemId(ph)] = keep(['listen', 'zh2en', 'en2zh', 'fill', 'type', 'filltype', 'dict', 'extype'].map(t => `ph:${ph.id}:${t}`)); }); // 2026-10-25 加例句中翻英 extype
    // 字根（2026-10-23 起打字至少 3 題）：意思 → 組單字 → 字根拼字（打字）→ 補的換藏法打字（:type2，新 id 要再答對一次；舊進度、學會紀錄不動）
    D.roots.forEach(r => { this.sets[rootItemId(r)] = keep([`r:${slug(r.p)}:meaning`].concat(r.words.map(x => `r:${slug(x.w)}:word`), r.words.map(x => `r:${slug(x.w)}:type`), r.words.map(x => `r:${slug(x.w)}:type2`), [`r:${slug(r.p)}:zh1`, `r:${slug(r.p)}:zh2`])); }); // 2026-10-25 加中翻英 2 題
    // 文法：打字題＝原有的中翻英打字 → 不夠 5 題時把填空題換成「打出空格裡的字」（從最後一題填空往前換）→ 還不夠才換改錯句（打字）
    D.grammar.forEach(g => {
      const typed = (g.typed || []).map((t, k) => `g:${g.id}:t${k}`);
      const fills = g.q.map((q, i) => (q.type === 'fill' ? i : -1)).filter(i => i >= 0), fixes = g.q.map((q, i) => (q.type === 'fill' ? -1 : i)).filter(i => i >= 0);
      const conv = new Set(fills.slice().reverse().concat(fixes.slice().reverse()).slice(0, Math.max(0, SET_TYPED - typed.length)));
      const choiceIds = g.q.map((q, i) => i).filter(i => !conv.has(i)).map(i => `g:${g.id}:${i}`);
      const typedIds = typed.concat([...conv].sort((a, b) => a - b).map(i => `g:${g.id}:${i}:type`));
      this.sets[grammarItemId(g)] = composeSet(keep(choiceIds), keep(typedIds));
    });
    // 句型：非打字＝例句重組＋看中文選句子（不夠 10 題再用加練句重組）；打字＝原有的中翻英打字 → 加練句打字 → 例句打字
    D.patterns.forEach(p => {
      const choiceIds = p.ex.map((e, j) => `p:${p.id}:${j}:reorder`).concat(p.ex.map((e, j) => `p:${p.id}:${j}:choose`));
      const extraType = (p.extra || []).map((e, k) => `p:${p.id}:x${k}:type`);
      let typedIds = (p.typed || []).map((t, k) => `p:${p.id}:t${k}`).concat(extraType);
      if (typedIds.length < SET_TYPED) p.ex.forEach((e, j) => { const id = `p:${p.id}:${j}:type`; if (!this.byId[id]) typedQ('patterns', p.id, id, e, `句型：${p.pattern}（${p.zh}）`, true); typedIds.push(id); });
      const extraChoice = choiceIds.length < SET_CHOICE ? (p.extra || []).map((e, k) => `p:${p.id}:x${k}:reorder`) : [];
      this.sets[patternItemId(p)] = composeSet(keep(choiceIds.concat(extraChoice)), keep(typedIds));
    });

    // ---- 練習這組的題組（2026-10-09 起一律含口說；見 drillIds／itemSet）----
    // 單字：選 → 選 → 🎤 → 填空 → 填空 → 打字（6 題）；片語：選 4 → 🎤 → 打字 3（8 題）；
    // 文法、句型：前 10 題非打字裡，從後面換 2 題成 🎤（不同句子），後 5 題打字不變；字根不加
    this.speakSets = {};
    const swap2 = (set, toSpeak) => {
      const out = set.slice(); let n = 0;
      for (let k = out.length - 1; k >= 0 && n < 2; k--) {
        const m = this.byId[out[k]]; if (!m || isTyped(m)) continue;
        const sid = toSpeak(out[k]); if (sid && this.byId[sid] && !out.includes(sid)) { out[k] = sid; n++; }
      }
      return out;
    };
    D.words.forEach(w => { const k = wordKey(w); this.speakSets[wordItemId(w)] = keep([`w:${k}:listen`, `w:${k}:zh2en`, `w:${k}:speak`].concat(wTyped(k))); });
    D.phrases.forEach(ph => { this.speakSets[phraseItemId(ph)] = keep(['listen', 'zh2en', 'en2zh', 'fill', 'speak', 'type', 'filltype', 'dict', 'extype'].map(t => `ph:${ph.id}:${t}`)); });
    D.grammar.forEach(g => { this.speakSets[grammarItemId(g)] = swap2(this.sets[grammarItemId(g)], id => (/^g:[^:]+:\d+$/.test(id) ? id + ':speak' : null)); });
    D.patterns.forEach(p => { this.speakSets[patternItemId(p)] = swap2(this.sets[patternItemId(p)], id => { const m = /^(p:[^:]+:\d+):(choose|reorder)$/.exec(id); return m ? m[1] + ':speak' : null; }); });
    this.speakOn = false;          // app 依「裝置支援語音辨識」設定：支援 → 口說題算進解鎖條件
    this.speakWaive = new Set();   // 這次「先跳過」的口說題（不支援／裝置有狀況）：不算進解鎖、這回合不重出；重新整理就清掉

    function typedQ(module, topic, id, t, why, setOnly) {
      add({ id, module, topic, type: TYPED, title: t.en, setOnly: !!setOnly }, () => ({ prompt: t.zh, sub: '用鍵盤打出整句英文', input: 'type', options: null, answer: t.en, alts: t.alts || [], speakText: t.en, why }));
    }
  }

  Engine.prototype = {
    get(id) { const m = this.byId[id]; return m ? m.make() : null; },
    // ---- 課本單元（2026-10-18）----
    tbUnit(unitId) { return this.D.textbook.find(u => u.id === unitId) || null; },
    // 本課的單字／片語／句型／文法：照各資料檔的 tb 標記（同一個字不重複新增，id 不變）
    tbItems(unitId) {
      const has = x => (x.tb || []).includes(unitId), D = this.D;
      return { words: D.words.filter(has), phrases: D.phrases.filter(has), patterns: D.patterns.filter(has), grammar: D.grammar.filter(has) };
    },
    // 從某幾類專屬題隨機挑 n 題（前一類不夠再用下一類）；同一輪裡同一個 card（同一句）不重複，重組和中翻英不會剛好是同一句、互相洩答案
    tbPick(unitId, fams, n, used, f) {
      // 句子少的單元（例如星期只有 15 句）同一句全用過了：第二輪只要求「同一題不重複」
      const out = [], F = this.tbq[unitId] || {};
      for (const strict of [true, false]) {
        for (const fam of [].concat(fams)) {
          for (const id of shuffle(F[fam] || [])) {
            if (out.length >= n) return out;
            if ((f && !f(id)) || used.has('#' + id)) continue;
            const c = this.byId[id].card;
            if (strict && c != null && used.has(c)) continue;
            if (c != null) used.add(c);
            used.add('#' + id); out.push(id);
          }
        }
      }
      return out;
    },
    // 空格題：各種空格輪流挑（Do／Does、on、be 動詞…不會全是同一種）；typed＝打字版
    tbBlanks(unitId, n, used, typed) {
      const fams = shuffle(this.tbBlank[unitId] || []), out = [];
      for (let round = 0; out.length < n && round < n; round++) fams.forEach(fm => { if (out.length < n) out.push(...this.tbPick(unitId, fm + (typed ? 'T' : ''), 1, used)); });
      return out;
    },
    // ✏️ 專屬題一輪（練習）：聽力 1、選空格 2、選回答 1、重組 2、情境 1（沒有就再一題重組）、🎤 1（裝置支援才出）、打空格 1、打回答 1、造問句 1（沒有就選回答）、中翻英 2
    // （2026-10-25：原本「選回答 2＋造句或中翻英 2」改成這樣，打字 ≥ 3、中翻英 ≥ 2，總題數不變）
    // 順序：選擇類洗牌 → 🎤 → 打字（同「練習這組」）；回傳題目物件
    tbPractice(unitId, o) {
      const used = new Set(), P = (fams, n, f) => this.tbPick(unitId, fams, n, used, f);
      const ids = [].concat(P('li', 1), this.tbBlanks(unitId, 2, used), P('ans', 1), P('ro', 2), P(['dc', 'ro'], 1), o && o.speak ? P('sp', 1) : [], this.tbBlanks(unitId, 1, used, true), P('anst', 1), P(['ask', 'ans'], 1), P(['zh', 'dlty'], 2));
      return drillOrder(ids.map(id => this.get(id)).filter(Boolean));
    },
    // 📝 考試：20 題（每題 5 分），照段考順序分六大題，每次隨機組合；不出 🎤
    // 聽力 4（單字聽音選字 2＋句子聽力 2）、選擇 5（選空格 3、選回答 1、情境或選回答 1）、填空 3（打空格 2、單字填空拼字 1）、
    // 重組 3（句子 2、對話或句子 1）、中翻英 3（單字 1＋句子 2）、回答問句 2（打字，兩題的 kind 不同：⭕／❌…）
    tbExam(unitId) {
      const used = new Set(), P = (fams, n, f) => this.tbPick(unitId, fams, n, used, f);
      const wk = shuffle(this.tbItems(unitId).words.map(wordKey)), W = (t, n) => wk.splice(0, n).map(k => `w:${k}:${t}`);
      const a1 = P('anst', 1), k1 = a1.length ? this.byId[a1[0]].kind : null, a2 = P('anst', 1, id => this.byId[id].kind !== k1);
      const secs = [['一、聽力', W('listen', 2).concat(P('li', 2))], ['二、選擇', this.tbBlanks(unitId, 3, used).concat(P('ans', 1), P(['dc', 'ans'], 1))],
        ['三、填空', this.tbBlanks(unitId, 2, used, true).concat(W('gap1', 1))], ['四、重組', P('ro', 2).concat(P(['dlro', 'ro'], 1))],
        ['五、中翻英', W('type', 1).concat(P('zh', 2))], ['六、回答問句', a1.concat(a2.length ? a2 : P('anst', 1))]];
      // 不給提示：聽力以外的題不放 🔊（填空拼字、打字題的發音等於提示）
      return secs.flatMap(([sec, ids]) => shuffle(ids).map(id => this.get(id)).filter(Boolean).map(q => Object.assign(q, { sec, pts: 5 }, sec === secs[0][0] ? {} : { play: false, auto: false })));
    },
    // ---- 打字保底（2026-10-25）：題號 → 學習項目；項目 → 打字題（zh＝中翻英打字、typed＝其他打字）----
    itemOfQ(id) {
      const m = /^(w|ph|r|g|p|tb):([^:]+):/.exec(id || ''); if (!m) return null;
      if (m[1] === 'r') { const r = this.D.roots.find(x => slug(x.p) === m[2] || x.words.some(y => slug(y.w) === m[2])); return r ? rootItemId(r) : null; }
      return { w: 'word:', ph: 'phrase:', g: 'grammar:', p: 'pattern:', tb: 'tb:' }[m[1]] + m[2];
    },
    typedPool(itemId) {
      const [kind, key] = [itemId.slice(0, itemId.indexOf(':')), itemId.slice(itemId.indexOf(':') + 1)], D = this.D, has = a => a.filter(id => this.byId[id]);
      let zh = [], typed = [];
      if (kind === 'word') zh = [`w:${key}:type`, `w:${key}:extype`], typed = ['spell', 'gap1', 'gap2'].map(t => `w:${key}:${t}`);
      else if (kind === 'phrase') zh = [`ph:${key}:type`, `ph:${key}:extype`], typed = [`ph:${key}:filltype`, `ph:${key}:dict`];
      else if (kind === 'root') { const r = D.roots.find(x => slug(x.p) === key); if (r) zh = [`r:${key}:zh1`, `r:${key}:zh2`], typed = r.words.flatMap(x => [`r:${slug(x.w)}:type`, `r:${slug(x.w)}:type2`]); }
      else if (kind === 'grammar') { const g = D.grammar.find(x => x.id === key); if (g) zh = (g.typed || []).map((t, k) => `g:${key}:t${k}`), typed = g.q.map((q, i) => `g:${key}:${i}:type`); }
      else if (kind === 'pattern') { const p = D.patterns.find(x => x.id === key); if (p) zh = (p.typed || []).map((t, k) => `p:${key}:t${k}`).concat((p.extra || []).map((e, k) => `p:${key}:x${k}:type`), p.ex.map((e, j) => `p:${key}:${j}:type`)); }
      else if (kind === 'tb') { const F = this.tbq[key] || {}; zh = (F.zh || []).concat(F.dlty || []); typed = Object.keys(F).filter(f => /T$/.test(f) || f === 'anst' || f === 'ask').flatMap(f => F[f]); }
      return { zh: has(zh), typed: has(typed) };
    },
    // 一般練習回合的打字保底：至少 3 題打字、其中至少 2 題中翻英（一回不到 3 題就盡量全用打字／中翻英），打字排最後；
    // 不夠就從後面換掉選擇題（再不夠換掉非中翻英的打字題），換上「同一批題目的項目」的打字題，總題數不變
    withTyped(qs) {
      const out = qs.slice(), has = new Set(out.map(q => q.id)), isZ = q => q.type === TYPED;
      const needT = Math.min(3, out.length), needZ = Math.min(2, out.length);
      const swap = wantZ => {
        let vi = -1;
        for (let i = out.length - 1; i >= 0 && vi < 0; i--) if (!isTyped(out[i])) vi = i;
        for (let i = out.length - 1; wantZ && i >= 0 && vi < 0; i--) if (!isZ(out[i])) vi = i;
        if (vi < 0) return false;
        const items = [...new Set([out[vi]].concat(out.slice().reverse()).map(q => this.itemOfQ(q.id)).filter(Boolean))], vm = this.byId[out[vi].id], vc = vm && vm.card;
        for (const it of items) {
          const pool = this.typedPool(it), cs = shuffle(pool.zh).concat(wantZ ? [] : shuffle(pool.typed)).filter(x => !has.has(x)); // 中翻英優先
          const id = (vc != null && cs.find(x => this.byId[x].card === vc)) || cs[0]; // 課本題：先挑同一句的打字題
          if (id) { has.add(id); out[vi] = this.get(id); return true; }
        }
        return false;
      };
      while (out.filter(isZ).length < needZ && swap(true));
      while (out.filter(isTyped).length < needT && swap(false));
      return [0, 1, 2, 3].flatMap(r => out.filter(q => typedRank(q) === r));
    },
    // 一般練習一回（練習設定、各頁 🎯、錯題庫、例題庫、結果頁再練）：照舊抽題再做打字保底；單字頁「🎤 說說看」（只出口說題）不加
    round(cfg) {
      cfg = cfg || {};
      const qs = cfg.ids ? shuffle(cfg.ids).slice(0, cfg.count || 30).map(id => this.get(id)).filter(Boolean) : this.buildQuiz(cfg);
      return cfg.ids && cfg.mode === 'speak' ? qs : this.withTyped(qs);
    },
    sources() { return [...new Set(this.D.words.map(w => w.src || 'moe'))]; },
    topics(module) {
      if (module === 'words') { const s = []; this.D.words.forEach(w => { const t = (w.tags && w.tags[0]) || 'other'; if (!s.includes(t)) s.push(t); }); return s.map(t => ({ key: 'words:' + t, label: TAGS[t] || t })); }
      if (module === 'phrases') { const seen = []; this.D.phrases.slice().sort((a, b) => a.lv - b.lv).forEach(p => { const t = p.lv + '|' + p.tag; if (!seen.includes(t)) seen.push(t); }); return seen.map(t => { const [lv, tag] = t.split('|'); return { key: 'phrases:' + t, label: tag, group: PHRASE_LV[lv] }; }); }
      if (module === 'roots') return Object.keys(ROOT_T).map(t => ({ key: 'roots:' + t, label: ROOT_T[t] }));
      if (module === 'grammar') return this.D.grammar.map(g => ({ key: 'grammar:' + g.id, label: g.title }));
      if (module === 'patterns') return this.D.patterns.slice().sort((a, b) => (a.lv || 2) - (b.lv || 2)).map(p => ({ key: 'patterns:' + p.id, label: p.pattern, group: PATTERN_LV[p.lv || 2] }));
      if (module === 'textbook') return this.D.textbook.map(u => ({ key: 'textbook:' + u.id, label: u.title }));
      return [];
    },
    // 學會紀錄的項目資訊：word:apple → {item:'apple', type:'單字'}
    itemInfo(itemId) {
      const w = this.D.words.find(x => wordItemId(x) === itemId); if (w) return { item: w.w, zh: w.zh, type: '單字' };
      const p = this.D.patterns.find(x => patternItemId(x) === itemId); if (p) return { item: p.pattern, zh: p.zh, type: '句型' };
      const g = this.D.grammar.find(x => grammarItemId(x) === itemId); if (g) return { item: g.title, zh: '', type: '文法' };
      const r = this.D.roots.find(x => rootItemId(x) === itemId); if (r) return { item: r.p, zh: r.m, type: '字根' };
      const ph = this.D.phrases.find(x => phraseItemId(x) === itemId); if (ph) return { item: ph.p, zh: ph.zh, type: '片語' };
      return { item: itemId, zh: '', type: '' };
    },
    // 家長頁用：學會紀錄表，預設新到舊；舊紀錄沒有分數顯示「—」
    learnedRows(L) { return Object.keys(L || {}).filter(id => L[id] && L[id].at).map(id => Object.assign({ itemId: id, at: L[id].at, score: L[id].score || '—' }, this.itemInfo(id))).sort((a, b) => (a.at < b.at ? 1 : a.at > b.at ? -1 : 0)); },
    // 「練習這組」出的題（qid 陣列）：一律含口說題（字根沒有口說）；這次先跳過的口說題（waive）不出
    drillIds(itemId, o) {
      const waive = (o && o.waive) || this.speakWaive;
      let s = this.speakSets[itemId] || this.sets[itemId] || [];
      if (waive && waive.size) s = s.filter(id => !waive.has(id));
      return s.slice();
    },
    // 解鎖「學會了」要答對過的題（qid 陣列）；找不到項目回傳 []
    // o = {speak, waive}；沒給就用 this.speakOn／this.speakWaive。speak＝裝置支援語音辨識：口說題是必要條件；
    // 不支援 → 只看練習這組裡其餘的題（口說題照樣出現，但可以先跳過、不算）
    itemSet(itemId, o) {
      const on = o && 'speak' in o ? !!o.speak : this.speakOn;
      return this.drillIds(itemId, o).filter(id => on || !this.byId[id] || this.byId[id].type !== 'speak');
    },
    // 進度：correct＝答對過的 qid Set；全部答對過 complete＝true 才能按「學會了」
    progress(itemId, correct, o) {
      const ids = this.itemSet(itemId, o), missing = ids.filter(id => !correct.has(id));
      return { total: ids.length, done: ids.length - missing.length, missing, complete: ids.length > 0 && !missing.length };
    },
    // 「學會了」的小測驗（不含開口說；從 981d094 移植）：回傳 {itemId, ids, qs, need, total}；找不到項目回傳 null
    // 題組還沒全部答對過（鎖住）時傳 correct 會回傳 null，不能開小測驗
    gate(itemId, correct, o) {
      if (correct && !this.progress(itemId, correct, o).complete) return null;
      const D = this.D, pick = (a, n) => shuffle(a).slice(0, n);
      let ids = null, need;
      const w = D.words.find(x => wordItemId(x) === itemId);
      const r = !w && D.roots.find(x => rootItemId(x) === itemId);
      const g = !w && !r && D.grammar.find(x => grammarItemId(x) === itemId);
      const p = !w && !r && !g && D.patterns.find(x => patternItemId(x) === itemId);
      const ph = !w && !r && !g && !p && D.phrases.find(x => phraseItemId(x) === itemId);
      // 2026-10-25 起：單字、片語、字根、句型 3 題全是打字（至少 2 題中翻英）、全對才過；文法 5 題（選擇 2＋打字 3，其中中翻英 2）、對 4 題才過
      const ok = a => a.filter(id => this.byId[id]);
      if (ph) ids = ok([`ph:${ph.id}:dict`, `ph:${ph.id}:type`, `ph:${ph.id}:extype`]), need = 3;
      if (w) { const k = wordKey(w); ids = ok([`w:${k}:spell`, `w:${k}:type`, `w:${k}:extype`]); need = 3; }
      else if (r) {
        const z = [`r:${slug(r.p)}:zh1`, `r:${slug(r.p)}:zh2`], used = z.map(id => this.byId[id].title);
        const rest = r.words.filter(x => !used.includes(`${x.w}　${x.zh}`)), one = pick(rest.length ? rest : r.words, 1)[0];
        ids = [`r:${slug(one.w)}:type`].concat(z); need = 3;
      }
      else if (g) {
        const fix = pick(g.q.map((q, i) => i), 1)[0];
        ids = pick(g.q.map((q, i) => i).filter(i => i !== fix), 2).map(i => `g:${g.id}:${i}`).concat(`g:${g.id}:${fix}:type`, pick(this.typedPool(itemId).zh, 2)); need = 4;
      }
      else if (p) { ids = pick(this.typedPool(itemId).zh, 3); need = 3; }
      if (!ids) return null;
      const qs = ids.map(id => this.get(id)).filter(Boolean);
      return { itemId, ids, qs, need, total: qs.length };
    },
    // 練習這組：只出還沒答對過的題（一律含口說題），打字題排最後
    // 單字這組順序固定（選 → 選 → 🎤 → 填空 → 填空 → 打字），不洗牌
    drill(itemId, correct, o) { const qs = this.drillIds(itemId, o).filter(id => !correct.has(id)).map(id => this.get(id)).filter(Boolean); return /^word:/.test(itemId) ? qs : drillOrder(qs); },
    topicLabel(tkey) { const m = tkey.split(':')[0]; const t = this.topics(m).find(x => x.key === tkey); return t ? (t.group && m === 'phrases' ? `${t.group}・${t.label}` : t.label) : tkey; },
    // f: {modules, topics(tkey 陣列), types, src, lv, allowSpeak, ids, withSetOnly}
    // 只在題組出的題（setOnly：填空拼字、文法打字版、句型加練句打字）一般練習與例題庫不出；給 ids 或 withSetOnly 才列
    list(f) {
      f = f || {};
      const src = f.src && f.src.length ? [].concat(f.src) : null;
      return this.meta.filter(m => (!f.ids || f.ids.includes(m.id)) && (!m.setOnly || f.withSetOnly || !!f.ids) && (!f.modules || f.modules.includes(m.module)) && (!f.topics || f.topics.includes(m.tkey)) &&
        (!f.types || f.types.includes(m.type)) && (f.allowSpeak || m.type !== 'speak') &&
        (m.module !== 'words' || ((!src || src.includes(m.src)) && (!f.lv || String(m.lv) === String(f.lv)))));
    },
    // cfg: list 的條件 + count, mistakeRatio(0~1；1 = 只練錯題), mistakes(錯題 id 陣列)
    buildQuiz(cfg) {
      cfg = cfg || {};
      const count = cfg.count || 10, ratio = cfg.mistakeRatio || 0, mset = new Set(cfg.mistakes || []);
      // 單字「全部等級」不含 lv4（進階・國中）：要明確選第 4 級（lv 4），或來源明確選 moe800，才出 lv4（2026-10-18）
      const src = cfg.src && cfg.src.length ? [].concat(cfg.src) : [];
      const lvOk = m => m.module !== 'words' || m.lv !== 4 || !!cfg.lv || src.includes('moe800');
      const pool = this.list(cfg).filter(lvOk);
      let mpool = pool.filter(m => mset.has(m.id));
      if (ratio >= 1 && !mpool.length) mpool = [...mset].map(id => this.byId[id]).filter(m => m && lvOk(m) && (cfg.allowSpeak || m.type !== 'speak'));
      const nm = ratio >= 1 ? Math.min(count, mpool.length) : Math.min(Math.round(count * ratio), mpool.length);
      let chosen = shuffle(mpool).slice(0, nm);
      if (ratio < 1) {
        // 依「單元＋題型」分組輪流抽，避免單字題淹沒其他題型
        const taken = new Set(chosen.map(m => m.id)), groups = {};
        pool.forEach(m => { if (!taken.has(m.id)) (groups[m.module + '|' + m.type] = groups[m.module + '|' + m.type] || []).push(m); });
        const gs = shuffle(Object.values(groups).map(shuffle));
        while (chosen.length < count && gs.some(g => g.length)) gs.forEach(g => { if (g.length && chosen.length < count) chosen.push(g.pop()); });
      }
      return shuffle(chosen).map(m => m.make());
    },
    check(q, input) {
      // 🎤 說說看：input 可以是辨識結果的 alternatives 陣列或一個字串；單字題含有目標字就算，片語／句子要整句一樣
      if (q.type === 'speak') return speakGrade(q.answer, q.alts, input, q.speakMode || (/\s/.test(q.answer) ? 'sentence' : 'word'));
      if (q.type === 'word-gap') return gapGrade(q.answer, q.gaps, input);
      if (isTyped(q)) return typeGrade(q.answer, q.alts, input);
      if (q.type === 'reorder') return { ok: norm(input) === norm(q.answer) };
      return { ok: input === q.answer };
    }
  };

  const KE = { Engine, phraseInEx, wordKey, POS, PATTERN_LV, PHRASE_LV, phraseItemId, TAGS, ROOT_T, MODULES, TYPES, MOD_TYPES, SRC_LABEL, shuffle, norm, tokens, fillBlank, fmtTaipei, clampRate, gatePassed, typeNorm, typeGrade, speakNorm, speakGrade, wordGaps, gapGrade, seededPick, SET_ONLY_TYPES, typedRank, isTyped, TYPED_TYPES, SET_CHOICE, SET_TYPED, composeSet, TB_TYPES, expandContr, drillOrder, requeue, correctIds, setLearned, unsetLearned, wordItemId, patternItemId, grammarItemId, rootItemId, slug };
  if (typeof module !== 'undefined' && module.exports) module.exports = KE;
  root.KE = KE;
})(typeof window !== 'undefined' ? window : globalThis);
