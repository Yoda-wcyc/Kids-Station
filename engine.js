/* engine.js — 題目引擎（不碰 DOM；瀏覽器與 Node 都能用） */
(function (root) {
  'use strict';
  const TAGS = { animal: '動物', food: '食物', color: '顏色', number: '數字', family: '家人', school: '學校', body: '身體', weather: '天氣', place: '地方', time: '時間', verb: '動作', adj: '形容詞',
    clothing: '衣物', transport: '交通', sport: '運動', job: '職業', house: '家裡', feeling: '心情', nature: '自然', function: '功能字', people: '人', thing: '東西', holiday: '節日' };
  const ROOT_T = { prefix: '字首', suffix: '字尾', root: '字根' };
  const MODULES = { words: '單字', phrases: '片語', roots: '字根字首', grammar: '文法', patterns: '句型' };
  const PHRASE_LV = { 1: '必會', 2: '基本', 3: '進階' };
  const TYPES = { 'listen-choose': '聽音選字', zh2en: '看中文選英文', en2zh: '看英文選中文', spell: '聽寫拼字', 'root-meaning': '字首字尾的意思', 'root-word': '用字根組單字', 'grammar-fill': '文法填空', 'grammar-fix': '挑出正確的句子', reorder: '句子重組', 'pattern-choose': '看中文選句子', 'phrase-fill': '片語填空', 'zh2en-type': '中翻英打字', 'root-type': '字根拼字（打字）', speak: '🎤 說說看', 'grammar-fill-type': '文法填空（打字）', 'grammar-fix-type': '改正錯句（打字）', 'word-gap': '填空拼字' };
  // 只放在「練習這組」的題型（一般練習回合、例題庫不出，題型組成維持原樣）
  const SET_ONLY_TYPES = ['word-gap', 'grammar-fill-type', 'grammar-fix-type'];
  const MOD_TYPES = { words: ['listen-choose', 'zh2en', 'en2zh', 'spell', 'zh2en-type', 'speak'], phrases: ['listen-choose', 'zh2en', 'en2zh', 'phrase-fill', 'zh2en-type', 'speak'], roots: ['root-meaning', 'root-word', 'root-type'], grammar: ['grammar-fill', 'grammar-fix', 'reorder', 'zh2en-type', 'grammar-fill-type', 'grammar-fix-type', 'speak'], patterns: ['reorder', 'pattern-choose', 'zh2en-type', 'speak'] };
  const TYPED = 'zh2en-type';
  // 鍵盤打字題（練習一組時排最後；共用同一個打字介面與判分）
  const TYPED_TYPES = ['spell', 'zh2en-type', 'root-type', 'grammar-fill-type', 'grammar-fix-type', 'word-gap'];
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
  const SRC_LABEL = { moe: '教育部基本字彙', moe1200: '教育部 1200 字', extra: '補充字' };
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
  function typeGrade(answer, alts, input) {
    const t = typeNorm(input), ok = !!t && [answer].concat(alts || []).some(a => typeNorm(a) === t);
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
  function speakGrade(answer, alts, heard, mode) {
    const targets = [answer].concat(alts || []).map(speakNorm).filter(Boolean);
    const list = (Array.isArray(heard) ? heard : [heard]).map(h => String(h == null ? '' : h));
    const at = list.findIndex(h => {
      const n = speakNorm(h);
      if (!n) return false;
      return targets.some(t => n === t || (mode === 'word' && (' ' + n + ' ').includes(' ' + t + ' ')));
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

  function Engine(data) {
    const D = this.D = { words: data.words || [], phrases: data.phrases || [], roots: data.roots || [], grammar: data.grammar || [], patterns: data.patterns || [] };
    this.meta = []; this.byId = {};
    const add = (m, make) => { m.tkey = m.module + ':' + m.topic; m.make = () => Object.assign({ id: m.id, module: m.module, topic: m.topic, tkey: m.tkey, type: m.type, title: m.title, why: '' }, make()); this.meta.push(m); this.byId[m.id] = m; };

    // ---- 單字 ----
    D.words.forEach(w => {
      const topic = (w.tags && w.tags[0]) || 'other', key = wordKey(w);
      // 干擾選項：同等級同主題 → 同詞性 → 同等級 → 全部；中文意思一樣的字不當干擾（看中文選英文才不會兩個都對）
      const tiers = f => {
        const others = D.words.filter(x => x !== w && x.zh !== w.zh), lv = others.filter(x => x.lv === w.lv);
        return [lv.filter(x => (x.tags || []).some(t => (w.tags || []).includes(t))).map(f), lv.filter(x => x.pos === w.pos).map(f), lv.map(f), others.map(f)];
      };
      const why = `${w.w} ${w.ipa || ''} ＝ ${w.zh}`;
      const base = { module: 'words', topic, lv: w.lv, src: w.src || 'moe', title: `${w.w}　${w.zh}` };
      add(Object.assign({ id: `w:${key}:listen`, type: 'listen-choose' }, base), () => ({ prompt: '聽聽看，是哪一個字？', options: choice(w.w, tiers(x => x.w)), answer: w.w, speakText: w.w, auto: true, play: true, why }));
      add(Object.assign({ id: `w:${key}:zh2en`, type: 'zh2en' }, base), () => ({ prompt: w.zh, options: choice(w.w, tiers(x => x.w)), answer: w.w, speakText: w.w, why }));
      add(Object.assign({ id: `w:${key}:en2zh`, type: 'en2zh' }, base), () => ({ prompt: w.w, en: true, play: true, options: choice(w.zh, tiers(x => x.zh)), answer: w.zh, speakText: w.w, why }));
      add(Object.assign({ id: `w:${key}:spell`, type: 'spell' }, base), () => ({ prompt: '聽寫：把聽到的字拼出來', sub: `提示：${w.zh}（${w.w.length} 個字母）`, input: 'type', options: null, answer: w.w, alts: [], speakText: w.w, auto: true, play: true, why }));
      add(Object.assign({ id: `w:${key}:type`, type: 'zh2en-type' }, base), () => ({ prompt: w.zh, sub: `（${POS[w.pos] || w.pos}）打出這個英文字`, input: 'type', options: null, answer: w.w, alts: [], speakText: w.w, why }));
      // 填空拼字 2 題（只在「練習這組」出；第 3 題挖約 1/3、第 4 題挖約 1/2）
      const gp = wordGaps(w.w);
      if (gp) [['gap1', gp.g1, '把少掉的字母填進去'], ['gap2', gp.g2, '再難一點：把少掉的字母填進去']].forEach(([s, gaps, sub]) =>
        add(Object.assign({ id: `w:${key}:${s}`, type: 'word-gap', setOnly: true }, base), () => ({ prompt: w.zh, sub, input: 'gap', gaps: gaps.slice(), options: null, answer: w.w, alts: [], speakText: w.w, play: true, why })));
      add(Object.assign({ id: `w:${key}:speak`, type: 'speak' }, base), () => ({ prompt: w.w, en: true, sub: w.zh, input: 'mic', play: true, options: null, answer: w.w, alts: [], speakMode: 'word', speakText: w.w, why }));
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
    });

    // ---- 句子題：文法例句與句型例句共用 ----
    const sentenceQs = (module, topic, idBase, e, why) => {
      add({ id: `${idBase}:reorder`, module, topic, type: 'reorder', title: e.en }, () => ({ prompt: e.zh, sub: '把字卡排成正確的英文句子', input: 'chips', options: chips(e.en), answer: e.en, speakText: e.en, why }));
      add({ id: `${idBase}:speak`, module, topic, type: 'speak', title: e.en }, () => ({ prompt: e.en, en: true, sub: e.zh, input: 'mic', play: true, options: null, answer: e.en, alts: [], speakMode: 'sentence', speakText: e.en, why }));
    };

    // ---- 文法 ----
    D.grammar.forEach(g => {
      g.q.forEach((q, i) => {
        const id = `g:${g.id}:${i}`;
        if (q.type === 'fill') {
          add({ id, module: 'grammar', topic: g.id, type: 'grammar-fill', title: fillBlank(q.s, q.a) }, () => ({ prompt: q.s, options: shuffle(q.opts), answer: q.a, speakText: fillBlank(q.s, q.a), why: q.why }));
          // 打字版：打出空格裡的字（題組最後 5 題用；id 另起，選擇版的進度不受影響）
          add({ id: id + ':type', module: 'grammar', topic: g.id, type: 'grammar-fill-type', title: fillBlank(q.s, q.a), setOnly: true }, () => ({ prompt: q.s, sub: '打出空格裡的字', input: 'type', options: null, answer: q.a, alts: [], speakText: fillBlank(q.s, q.a), why: q.why }));
          grammarSpeak(id, fillBlank(q.s, q.a), q.why);
        } else {
          add({ id, module: 'grammar', topic: g.id, type: 'grammar-fix', title: q.right }, () => ({ prompt: '哪一句是對的？', options: shuffle([q.wrong, q.right]), answer: q.right, speakText: q.right, why: q.why }));
          // 打字版：顯示錯句，打出正確的句子（填空題不夠時才進題組）
          add({ id: id + ':type', module: 'grammar', topic: g.id, type: 'grammar-fix-type', title: q.right, setOnly: true }, () => ({ prompt: q.wrong, sub: '這句有錯，打出正確的句子', input: 'type', options: null, answer: q.right, alts: [], speakText: q.right, why: q.why }));
          grammarSpeak(id, q.right, q.why);
        }
      });
      // 🎤 說說看（只在題組出）：說出正確的完整句子（填空題＝填好的句子、改錯題＝正確的句子），整句比對
      function grammarSpeak(id, sentence, why) {
        add({ id: id + ':speak', module: 'grammar', topic: g.id, type: 'speak', title: sentence, setOnly: true }, () => ({ prompt: sentence, en: true, sub: '大聲說出這個完整的句子', input: 'mic', play: true, options: null, answer: sentence, alts: [], speakMode: 'sentence', speakText: sentence, why }));
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

    // ---- 每個學習項目的固定題組（全部答對過才能按「學會了」）----
    // 題號只增不改：舊題的 id 意思不變，已答對的紀錄照算；文法／句型改成「10 題非打字＋5 題打字」時，
    // 換進來的打字題是新 id（要再答對一次），換出去的舊題仍在題庫裡、只是不算進這一組。
    this.sets = {};
    const keep = ids => ids.filter(id => this.byId[id]);
    // 單字（2026-10-09 起）：聽音選字 → 看中文選英文 → 填空拼字（約 1/3）→ 填空拼字（約 1/2）→ 看中文打字；順序固定不洗牌。
    // listen／zh2en／type 沿用舊 id（舊進度照算）；en2zh、spell 退出題組但留在題庫；只有 1 個字母的字（a、I）沒有填空，這組 3 題
    D.words.forEach(w => { const k = wordKey(w); this.sets[wordItemId(w)] = keep([`w:${k}:listen`, `w:${k}:zh2en`, `w:${k}:gap1`, `w:${k}:gap2`, `w:${k}:type`]); });
    D.phrases.forEach(ph => { this.sets[phraseItemId(ph)] = keep(['listen', 'zh2en', 'en2zh', 'fill', 'type'].map(t => `ph:${ph.id}:${t}`)); });
    D.roots.forEach(r => { this.sets[rootItemId(r)] = keep([`r:${slug(r.p)}:meaning`].concat(r.words.map(x => `r:${slug(x.w)}:word`), r.words.map(x => `r:${slug(x.w)}:type`))); });
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

    // ---- 加口說的題組（裝置支援語音辨識＋家長同意時才用；見 itemSet）----
    // 單字：選 → 選 → 🎤 → 填空 → 填空 → 打字（6 題）；片語：非打字題最後加 1 題 🎤；
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
    D.words.forEach(w => { const k = wordKey(w); this.speakSets[wordItemId(w)] = keep([`w:${k}:listen`, `w:${k}:zh2en`, `w:${k}:speak`, `w:${k}:gap1`, `w:${k}:gap2`, `w:${k}:type`]); });
    D.phrases.forEach(ph => { this.speakSets[phraseItemId(ph)] = keep(['listen', 'zh2en', 'en2zh', 'fill', 'speak', 'type'].map(t => `ph:${ph.id}:${t}`)); });
    D.grammar.forEach(g => { this.speakSets[grammarItemId(g)] = swap2(this.sets[grammarItemId(g)], id => (/^g:[^:]+:\d+$/.test(id) ? id + ':speak' : null)); });
    D.patterns.forEach(p => { this.speakSets[patternItemId(p)] = swap2(this.sets[patternItemId(p)], id => { const m = /^(p:[^:]+:\d+):(choose|reorder)$/.exec(id); return m ? m[1] + ':speak' : null; }); });
    this.speakOn = false;          // app 依「支援語音辨識＆家長同意」設定
    this.speakWaive = new Set();   // 這次因裝置問題先跳過的口說題（不算進解鎖；重新整理就清掉）

    function typedQ(module, topic, id, t, why, setOnly) {
      add({ id, module, topic, type: TYPED, title: t.en, setOnly: !!setOnly }, () => ({ prompt: t.zh, sub: '用鍵盤打出整句英文', input: 'type', options: null, answer: t.en, alts: t.alts || [], speakText: t.en, why }));
    }
  }

  Engine.prototype = {
    get(id) { const m = this.byId[id]; return m ? m.make() : null; },
    sources() { return [...new Set(this.D.words.map(w => w.src || 'moe'))]; },
    topics(module) {
      if (module === 'words') { const s = []; this.D.words.forEach(w => { const t = (w.tags && w.tags[0]) || 'other'; if (!s.includes(t)) s.push(t); }); return s.map(t => ({ key: 'words:' + t, label: TAGS[t] || t })); }
      if (module === 'phrases') { const seen = []; this.D.phrases.slice().sort((a, b) => a.lv - b.lv).forEach(p => { const t = p.lv + '|' + p.tag; if (!seen.includes(t)) seen.push(t); }); return seen.map(t => { const [lv, tag] = t.split('|'); return { key: 'phrases:' + t, label: tag, group: PHRASE_LV[lv] }; }); }
      if (module === 'roots') return Object.keys(ROOT_T).map(t => ({ key: 'roots:' + t, label: ROOT_T[t] }));
      if (module === 'grammar') return this.D.grammar.map(g => ({ key: 'grammar:' + g.id, label: g.title }));
      if (module === 'patterns') return this.D.patterns.slice().sort((a, b) => (a.lv || 2) - (b.lv || 2)).map(p => ({ key: 'patterns:' + p.id, label: p.pattern, group: PATTERN_LV[p.lv || 2] }));
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
    // 項目的固定題組（qid 陣列）；找不到項目回傳 []
    // o = {speak, waive}；沒給就用 this.speakOn／this.speakWaive。口說沒開（不支援或家長沒同意）→ 不含口說題，解鎖也不算它
    itemSet(itemId, o) {
      const on = o && 'speak' in o ? !!o.speak : this.speakOn, waive = (o && o.waive) || this.speakWaive;
      let s = (on && this.speakSets[itemId]) || this.sets[itemId] || [];
      if (waive && waive.size) s = s.filter(id => !waive.has(id));
      return s.slice();
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
      if (ph) ids = [`ph:${ph.id}:zh2en`, `ph:${ph.id}:fill`, `ph:${ph.id}:type`], need = 3;
      if (w) { const k = wordKey(w); ids =[`w:${k}:listen`, `w:${k}:zh2en`, `w:${k}:spell`]; need = 3; }
      else if (r) { ids = [`r:${slug(r.p)}:meaning`].concat(pick(r.words, 2).map(x => `r:${slug(x.w)}:word`)); need = 3; }
      else if (g) { ids = pick(g.q.map((q, i) => `g:${g.id}:${i}`), 5); need = 4; }
      else if (p) { const js = pick(p.ex.map((e, j) => j), 3); ids = [`p:${p.id}:${js[0]}:reorder`, `p:${p.id}:${js[1]}:reorder`, `p:${p.id}:${js[2]}:choose`]; need = 3; }
      if (!ids) return null;
      const qs = ids.map(id => this.get(id)).filter(Boolean);
      return { itemId, ids, qs, need, total: qs.length };
    },
    // 練習這組：只出還沒答對過的題，打字題排最後
    // 單字這組順序固定（選 → 選 → 填空 → 填空 → 打字），不洗牌
    drill(itemId, correct, o) { const qs = this.progress(itemId, correct, o).missing.map(id => this.get(id)).filter(Boolean); return /^word:/.test(itemId) ? qs : drillOrder(qs); },
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
      const pool = this.list(cfg);
      let mpool = pool.filter(m => mset.has(m.id));
      if (ratio >= 1 && !mpool.length) mpool = [...mset].map(id => this.byId[id]).filter(m => m && (cfg.allowSpeak || m.type !== 'speak'));
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

  const KE = { Engine, wordKey, POS, PATTERN_LV, PHRASE_LV, phraseItemId, TAGS, ROOT_T, MODULES, TYPES, MOD_TYPES, SRC_LABEL, shuffle, norm, tokens, fillBlank, fmtTaipei, clampRate, gatePassed, typeNorm, typeGrade, speakNorm, speakGrade, wordGaps, gapGrade, seededPick, SET_ONLY_TYPES, typedRank, isTyped, TYPED_TYPES, SET_CHOICE, SET_TYPED, composeSet, drillOrder, requeue, correctIds, setLearned, unsetLearned, wordItemId, patternItemId, grammarItemId, rootItemId, slug };
  if (typeof module !== 'undefined' && module.exports) module.exports = KE;
  root.KE = KE;
})(typeof window !== 'undefined' ? window : globalThis);
