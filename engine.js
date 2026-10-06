/* engine.js — 題目引擎（不碰 DOM；瀏覽器與 Node 都能用） */
(function (root) {
  'use strict';
  const TAGS = { animal: '動物', food: '食物', color: '顏色', number: '數字', family: '家人', school: '學校', body: '身體', weather: '天氣', place: '地方', time: '時間', verb: '動作', adj: '形容詞',
    clothing: '衣物', transport: '交通', sport: '運動', job: '職業', house: '家裡', feeling: '心情', nature: '自然', function: '功能字', people: '人', thing: '東西', holiday: '節日' };
  const ROOT_T = { prefix: '字首', suffix: '字尾', root: '字根' };
  const MODULES = { words: '單字', phrases: '片語', roots: '字根字首', grammar: '文法', patterns: '句型' };
  const PHRASE_LV = { 1: '必會', 2: '基本', 3: '進階' };
  const TYPES = { 'listen-choose': '聽音選字', zh2en: '看中文選英文', en2zh: '看英文選中文', spell: '聽寫拼字', 'root-meaning': '字首字尾的意思', 'root-word': '用字根組單字', 'grammar-fill': '文法填空', 'grammar-fix': '挑出正確的句子', reorder: '句子重組', 'pattern-choose': '看中文選句子', 'phrase-fill': '片語填空', 'zh2en-type': '中翻英打字', 'root-type': '字根拼字（打字）', speak: '開口說說看' };
  const MOD_TYPES = { words: ['listen-choose', 'zh2en', 'en2zh', 'spell', 'zh2en-type'], phrases: ['listen-choose', 'zh2en', 'en2zh', 'phrase-fill', 'zh2en-type'], roots: ['root-meaning', 'root-word', 'root-type'], grammar: ['grammar-fill', 'grammar-fix', 'reorder', 'zh2en-type', 'speak'], patterns: ['reorder', 'pattern-choose', 'zh2en-type', 'speak'] };
  const TYPED = 'zh2en-type';
  // 鍵盤打字題（練習一組時排最後；共用同一個打字介面與判分）
  const TYPED_TYPES = ['spell', 'zh2en-type', 'root-type'];
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
  // 練習一組時的排序：打字題一律排最後；其餘洗牌
  function drillOrder(qs) { return shuffle(qs.filter(q => !isTyped(q))).concat(qs.filter(isTyped)); }
  // 答錯重排：非打字題插到「後面第一個打字題」之前（打字題永遠排最後）；打字題放最後
  function requeue(list, i, q) {
    const out = list.slice();
    let at = out.length;
    if (!isTyped(q)) { const k = out.findIndex((x, j) => j > i && isTyped(x)); if (k >= 0) at = k; }
    out.splice(at, 0, q);
    return out;
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
      add({ id: `${idBase}:speak`, module, topic, type: 'speak', title: e.en }, () => ({ prompt: e.en, en: true, sub: e.zh, input: 'mic', play: true, options: null, answer: e.en, speakText: e.en, why }));
    };

    // ---- 文法 ----
    D.grammar.forEach(g => {
      g.q.forEach((q, i) => {
        const id = `g:${g.id}:${i}`;
        if (q.type === 'fill') add({ id, module: 'grammar', topic: g.id, type: 'grammar-fill', title: fillBlank(q.s, q.a) }, () => ({ prompt: q.s, options: shuffle(q.opts), answer: q.a, speakText: fillBlank(q.s, q.a), why: q.why }));
        else add({ id, module: 'grammar', topic: g.id, type: 'grammar-fix', title: q.right }, () => ({ prompt: '哪一句是對的？', options: shuffle([q.wrong, q.right]), answer: q.right, speakText: q.right, why: q.why }));
      });
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
      (p.extra || []).forEach((e, k) => add({ id: `p:${p.id}:x${k}:reorder`, module: 'patterns', topic: p.id, type: 'reorder', title: e.en }, () => ({ prompt: e.zh, sub: '把字卡排成正確的英文句子', input: 'chips', options: chips(e.en), answer: e.en, speakText: e.en, why })));
      (p.typed || []).forEach((t, k) => typedQ('patterns', p.id, `p:${p.id}:t${k}`, t, why));
    });

    // ---- 每個學習項目的固定題組（全部答對過才能按「學會了」）----
    this.sets = {};
    const keep = ids => ids.filter(id => this.byId[id]);
    D.words.forEach(w => { const k = wordKey(w); this.sets[wordItemId(w)] = keep([`w:${k}:listen`, `w:${k}:zh2en`, `w:${k}:en2zh`, `w:${k}:spell`, `w:${k}:type`]); });
    D.phrases.forEach(ph => { this.sets[phraseItemId(ph)] = keep(['listen', 'zh2en', 'en2zh', 'fill', 'type'].map(t => `ph:${ph.id}:${t}`)); });
    D.roots.forEach(r => { this.sets[rootItemId(r)] = keep([`r:${slug(r.p)}:meaning`].concat(r.words.map(x => `r:${slug(x.w)}:word`), r.words.map(x => `r:${slug(x.w)}:type`))); });
    D.grammar.forEach(g => { this.sets[grammarItemId(g)] = keep(g.q.map((q, i) => `g:${g.id}:${i}`).concat((g.typed || []).map((t, k) => `g:${g.id}:t${k}`))); });
    D.patterns.forEach(p => { this.sets[patternItemId(p)] = keep(p.ex.map((e, j) => `p:${p.id}:${j}:reorder`).concat(p.ex.map((e, j) => `p:${p.id}:${j}:choose`), (p.extra || []).map((e, k) => `p:${p.id}:x${k}:reorder`), (p.typed || []).map((t, k) => `p:${p.id}:t${k}`))); });

    function typedQ(module, topic, id, t, why) {
      add({ id, module, topic, type: TYPED, title: t.en }, () => ({ prompt: t.zh, sub: '用鍵盤打出整句英文', input: 'type', options: null, answer: t.en, alts: t.alts || [], speakText: t.en, why }));
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
    itemSet(itemId) { return (this.sets[itemId] || []).slice(); },
    // 進度：correct＝答對過的 qid Set；全部答對過 complete＝true 才能按「學會了」
    progress(itemId, correct) {
      const ids = this.sets[itemId] || [], missing = ids.filter(id => !correct.has(id));
      return { total: ids.length, done: ids.length - missing.length, missing, complete: ids.length > 0 && !missing.length };
    },
    // 「學會了」的小測驗（不含開口說；從 981d094 移植）：回傳 {itemId, ids, qs, need, total}；找不到項目回傳 null
    // 題組還沒全部答對過（鎖住）時傳 correct 會回傳 null，不能開小測驗
    gate(itemId, correct) {
      if (correct && !this.progress(itemId, correct).complete) return null;
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
    drill(itemId, correct) { return drillOrder(this.progress(itemId, correct).missing.map(id => this.get(id)).filter(Boolean)); },
    topicLabel(tkey) { const m = tkey.split(':')[0]; const t = this.topics(m).find(x => x.key === tkey); return t ? (t.group && m === 'phrases' ? `${t.group}・${t.label}` : t.label) : tkey; },
    // f: {modules, topics(tkey 陣列), types, src, lv, allowSpeak, ids}
    list(f) {
      f = f || {};
      const src = f.src && f.src.length ? [].concat(f.src) : null;
      return this.meta.filter(m => (!f.ids || f.ids.includes(m.id)) && (!f.modules || f.modules.includes(m.module)) && (!f.topics || f.topics.includes(m.tkey)) &&
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
      if (q.type === 'speak') {
        const a = tokens(q.answer), have = {};
        tokens(input).forEach(x => { have[x] = (have[x] || 0) + 1; });
        let hit = 0;
        a.forEach(x => { if (have[x]) { hit++; have[x]--; } });
        const score = a.length ? hit / a.length : 0;
        return { ok: score >= 0.7, score };
      }
      if (isTyped(q)) return typeGrade(q.answer, q.alts, input);
      if (q.type === 'reorder') return { ok: norm(input) === norm(q.answer) };
      return { ok: input === q.answer };
    }
  };

  const KE = { Engine, wordKey, POS, PATTERN_LV, PHRASE_LV, phraseItemId, TAGS, ROOT_T, MODULES, TYPES, MOD_TYPES, SRC_LABEL, shuffle, norm, tokens, fillBlank, fmtTaipei, clampRate, gatePassed, typeNorm, typeGrade, isTyped, TYPED_TYPES, drillOrder, requeue, correctIds, setLearned, unsetLearned, wordItemId, patternItemId, grammarItemId, rootItemId, slug };
  if (typeof module !== 'undefined' && module.exports) module.exports = KE;
  root.KE = KE;
})(typeof window !== 'undefined' ? window : globalThis);
