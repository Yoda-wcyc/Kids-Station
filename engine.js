/* engine.js — 題目引擎（不碰 DOM；瀏覽器與 Node 都能用） */
(function (root) {
  'use strict';
  const TAGS = { animal: '動物', food: '食物', color: '顏色', number: '數字', family: '家人', school: '學校', body: '身體', weather: '天氣', place: '地方', time: '時間', verb: '動作', adj: '形容詞' };
  const ROOT_T = { prefix: '字首', suffix: '字尾', root: '字根' };
  const MODULES = { words: '單字', roots: '字根字首', grammar: '文法', patterns: '句型' };
  const TYPES = { 'listen-choose': '聽音選字', zh2en: '看中文選英文', en2zh: '看英文選中文', spell: '聽寫拼字', 'root-meaning': '字首字尾的意思', 'root-word': '用字根組單字', 'grammar-fill': '文法填空', 'grammar-fix': '挑出正確的句子', reorder: '句子重組', speak: '開口說說看' };
  const MOD_TYPES = { words: ['listen-choose', 'zh2en', 'en2zh', 'spell'], roots: ['root-meaning', 'root-word'], grammar: ['grammar-fill', 'grammar-fix', 'reorder', 'speak'], patterns: ['reorder', 'speak'] };
  const SRC_LABEL = { moe: '教育部基本字彙' };

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
  // 學會紀錄 {itemId:{at}}：回傳新物件，不改原本的
  function setLearned(L, itemId, iso) { const o = Object.assign({}, L); o[itemId] = { at: iso }; return o; }
  function unsetLearned(L, itemId) { const o = Object.assign({}, L); delete o[itemId]; return o; }
  const wordItemId = w => 'word:' + slug(w.w), patternItemId = p => 'pattern:' + p.id, grammarItemId = g => 'grammar:' + g.id, rootItemId = r => 'root:' + slug(r.p);

  function Engine(data) {
    const D = this.D = { words: data.words || [], roots: data.roots || [], grammar: data.grammar || [], patterns: data.patterns || [] };
    this.meta = []; this.byId = {};
    const add = (m, make) => { m.tkey = m.module + ':' + m.topic; m.make = () => Object.assign({ id: m.id, module: m.module, topic: m.topic, tkey: m.tkey, type: m.type, title: m.title, why: '' }, make()); this.meta.push(m); this.byId[m.id] = m; };

    // ---- 單字 ----
    D.words.forEach(w => {
      const topic = (w.tags && w.tags[0]) || 'other', key = slug(w.w);
      const tiers = f => {
        const lv = D.words.filter(x => x !== w && x.lv === w.lv);
        return [lv.filter(x => (x.tags || []).some(t => (w.tags || []).includes(t))).map(f), lv.filter(x => x.pos === w.pos).map(f), lv.map(f), D.words.filter(x => x !== w).map(f)];
      };
      const why = `${w.w} ${w.ipa || ''} ＝ ${w.zh}`;
      const base = { module: 'words', topic, lv: w.lv, src: w.src || 'moe', title: `${w.w}　${w.zh}` };
      add(Object.assign({ id: `w:${key}:listen`, type: 'listen-choose' }, base), () => ({ prompt: '聽聽看，是哪一個字？', options: choice(w.w, tiers(x => x.w)), answer: w.w, speakText: w.w, auto: true, play: true, why }));
      add(Object.assign({ id: `w:${key}:zh2en`, type: 'zh2en' }, base), () => ({ prompt: w.zh, options: choice(w.w, tiers(x => x.w)), answer: w.w, speakText: w.w, why }));
      add(Object.assign({ id: `w:${key}:en2zh`, type: 'en2zh' }, base), () => ({ prompt: w.w, en: true, play: true, options: choice(w.zh, tiers(x => x.zh)), answer: w.zh, speakText: w.w, why }));
      add(Object.assign({ id: `w:${key}:spell`, type: 'spell' }, base), () => ({ prompt: '聽寫：把聽到的字拼出來', sub: `提示：${w.zh}（${w.w.length} 個字母）`, input: 'text', options: null, answer: w.w, speakText: w.w, auto: true, play: true, why }));
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
    });

    // ---- 句型 ----
    D.patterns.forEach(p => p.ex.forEach((e, j) => sentenceQs('patterns', p.id, `p:${p.id}:${j}`, e, `句型：${p.pattern}（${p.zh}）`)));
  }

  Engine.prototype = {
    get(id) { const m = this.byId[id]; return m ? m.make() : null; },
    sources() { return [...new Set(this.D.words.map(w => w.src || 'moe'))]; },
    topics(module) {
      if (module === 'words') { const s = []; this.D.words.forEach(w => { const t = (w.tags && w.tags[0]) || 'other'; if (!s.includes(t)) s.push(t); }); return s.map(t => ({ key: 'words:' + t, label: TAGS[t] || t })); }
      if (module === 'roots') return Object.keys(ROOT_T).map(t => ({ key: 'roots:' + t, label: ROOT_T[t] }));
      if (module === 'grammar') return this.D.grammar.map(g => ({ key: 'grammar:' + g.id, label: g.title }));
      if (module === 'patterns') return this.D.patterns.map(p => ({ key: 'patterns:' + p.id, label: p.pattern }));
      return [];
    },
    // 學會紀錄的項目資訊：word:apple → {item:'apple', type:'單字'}
    itemInfo(itemId) {
      const w = this.D.words.find(x => wordItemId(x) === itemId); if (w) return { item: w.w, zh: w.zh, type: '單字' };
      const p = this.D.patterns.find(x => patternItemId(x) === itemId); if (p) return { item: p.pattern, zh: p.zh, type: '句型' };
      const g = this.D.grammar.find(x => grammarItemId(x) === itemId); if (g) return { item: g.title, zh: '', type: '文法' };
      const r = this.D.roots.find(x => rootItemId(x) === itemId); if (r) return { item: r.p, zh: r.m, type: '字根' };
      return { item: itemId, zh: '', type: '' };
    },
    // 家長頁用：學會紀錄表，預設新到舊
    learnedRows(L) { return Object.keys(L || {}).filter(id => L[id] && L[id].at).map(id => Object.assign({ itemId: id, at: L[id].at }, this.itemInfo(id))).sort((a, b) => (a.at < b.at ? 1 : a.at > b.at ? -1 : 0)); },
    topicLabel(tkey) { const m = tkey.split(':')[0]; const t = this.topics(m).find(x => x.key === tkey); return t ? t.label : tkey; },
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
      if (q.type === 'spell' || q.type === 'reorder') return { ok: norm(input) === norm(q.answer) };
      return { ok: input === q.answer };
    }
  };

  const KE = { Engine, TAGS, ROOT_T, MODULES, TYPES, MOD_TYPES, SRC_LABEL, shuffle, norm, tokens, fillBlank, fmtTaipei, setLearned, unsetLearned, wordItemId, patternItemId, grammarItemId, rootItemId, slug };
  if (typeof module !== 'undefined' && module.exports) module.exports = KE;
  root.KE = KE;
})(typeof window !== 'undefined' ? window : globalThis);
