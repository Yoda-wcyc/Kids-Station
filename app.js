/* app.js — 畫面、路由、儲存、語音 */
(function () {
  'use strict';
  const D = { words: window.DATA_WORDS || [], phrases: window.DATA_PHRASES || [], roots: window.DATA_ROOTS || [], grammar: window.DATA_GRAMMAR || [], patterns: window.DATA_PATTERNS || [] };
  const E = new KE.Engine(D);
  const app = document.getElementById('app');
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const srcLabel = s => KE.SRC_LABEL[s] || s;
  // 會員閘門（kids-auth.js）：瀏覽免登入；開始練習／小測驗／學會了要登入。沒載入 kids-auth.js 時照舊放行
  const authOK = why => !window.KidsAuth || KidsAuth.requireLogin(why);
  // 練習額度（kids-auth.js startActivity）：登入後再問；回 false＝這次先不開始（提示框或等後端回覆後自己呼叫 retry）
  const quotaOK = (kind, retry) => !window.KidsAuth || !KidsAuth.startActivity || KidsAuth.startActivity(kind, retry);

  // ---------- 儲存 ----------
  function load(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  const SM = window.KESyncMerge;
  const SYNCED = ['ke_log', 'ke_learned', 'ke_mistakes'];
  function save(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 空間不足或私密模式 */ }
    if (SYNCED.includes(k) && window.KESync) KESync.touch(); // 有變動 → 3 秒後同步
  }
  // 科目列（subjects.js）也會寫 ke_settings.subject：存檔時以磁碟上最新的 subject 為準，不要蓋掉
  function saveSettings() { const cur = load('ke_settings', {}) || {}; S.settings.subject = cur.subject; if (S.settings.subject === undefined) delete S.settings.subject; save('ke_settings', S.settings); }
  const KEYS = ['ke_progress', 'ke_mistakes', 'ke_settings', 'ke_log', 'ke_learned', 'ke_correct', 'ke_agg'];
  let S;
  function loadAll() {
    S = { progress: load('ke_progress', {}), mistakes: load('ke_mistakes', {}), settings: load('ke_settings', {}), log: load('ke_log', []), learned: load('ke_learned', {}) };
    if (!S.learned || typeof S.learned !== 'object' || Array.isArray(S.learned)) S.learned = {};
    S.progress = Object.assign({ stars: 0, quizzes: 0 }, S.progress);
    S.settings = Object.assign({ rate: 1, accent: 'en-US', last: null }, S.settings);
    const r0 = S.settings.rate; S.settings.rate = KE.clampRate(r0);
    if (r0 !== S.settings.rate) saveSettings();
    if (!Array.isArray(S.log)) S.log = [];
    if (!S.mistakes || typeof S.mistakes !== 'object') S.mistakes = {};
    // 舊紀錄補上固定 id（雜湊：時間|題號|答案，每台算出來一樣，同步時才不會重複）
    let fixed = 0; S.log.forEach(e => { if (e && !e.r) { e.r = SM.rid(e); fixed++; } });
    if (fixed) try { localStorage.setItem('ke_log', JSON.stringify(S.log)); } catch (e) { }
    S.agg = load('ke_agg', {}) || {};
    // 答對過的題目：作答紀錄（追溯以前的練習）∪ 壓縮過的舊紀錄（agg）∪ 另存的清單
    const kept = load('ke_correct', []);
    S.correct = KE.correctIds(S.log);
    Object.keys(S.agg.agg || {}).forEach(id => { if (S.agg.agg[id].fc != null) S.correct.add(id); });
    (Array.isArray(kept) ? kept : []).forEach(id => S.correct.add(id));
    if (S.correct.size !== (Array.isArray(kept) ? kept.length : -1)) save('ke_correct', [...S.correct]);
  }
  loadAll();

  // ---------- 語音 ----------
  const synth = window.speechSynthesis;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const canSpeak = !!SR;
  let voices = [], unlocked = false;
  function loadVoices() { try { voices = synth ? synth.getVoices() : []; } catch (e) { voices = []; } }
  if (synth) { loadVoices(); try { synth.addEventListener('voiceschanged', loadVoices); } catch (e) { synth.onvoiceschanged = loadVoices; } }
  function pickVoice() {
    const acc = S.settings.accent.toLowerCase(), pref = /Samantha|Ava|Natural|Jenny|Aria|Google|Daniel|Serena|Kate|Libby|Sonia/i;
    let c = voices.filter(v => (v.lang || '').replace('_', '-').toLowerCase() === acc);
    if (!c.length) c = voices.filter(v => /^en/i.test(v.lang || ''));
    return c.find(v => pref.test(v.name)) || c[0] || null;
  }
  function speak(text) {
    if (!synth || !text) return;
    try {
      unlocked = true;
      const busy = synth.speaking || synth.pending;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text), v = pickVoice();
      if (v) u.voice = v;
      u.lang = v ? v.lang : S.settings.accent;
      u.rate = KE.clampRate(S.settings.rate);
      if (busy) setTimeout(() => synth.speak(u), 80); else synth.speak(u);
    } catch (e) { /* 不支援就安靜 */ }
  }
  // iOS 要使用者手勢才能出聲：第一次點擊時先唸一個空字串解鎖
  document.addEventListener('click', () => { if (unlocked || !synth) return; unlocked = true; try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; synth.speak(u); } catch (e) { } });

  // ---------- 🎤 說說看（瀏覽器內建語音辨識；本站不錄音、不保存、不上傳，只比對轉好的文字）----------
  // 2026-10-09 起不需要家長同意（舊的 kids_speak_consent 旗標留著不用、不清除）；iPad 自己的麥克風權限詢問照常
  const NO_SPEAK_MSG = '這台裝置的瀏覽器不支援說說看，請用 iPad 的 Safari';
  const SPEAK_NOTE = '按麥克風後，聲音會交給裝置內建（例如 iPad 的 Apple）語音辨識轉成文字；本站不錄音、不保存、不接收聲音，只拿轉好的文字來比對答案。';
  const MIC_ALLOW = '第一次按 🎤 時，iPad 會問可不可以用麥克風，請按「允許」。';
  const SPEAK_TRIES = 3, SPEAK_SILENCE_MS = 8000;
  // 「練習這組」一律有口說題；裝置支援語音辨識 → 口說題算進「學會了」的解鎖條件，不支援 → 可以先跳過、不算（不會卡關）
  E.speakOn = canSpeak;
  const DEVICE_ERRS = ['network', 'audio-capture', 'not-allowed', 'service-not-allowed', 'language-not-supported'];
  let REC = null; // 正在聽的辨識器（換頁、跳過、作答時停掉）
  function stopRec() { const r = REC; REC = null; if (r) { try { r.onresult = r.onerror = r.onend = null; r.abort(); } catch (e) { } } }
  const SPEAK_ERR = {
    'not-allowed': '🎤 麥克風被關掉了。請爸爸媽媽幫忙：打開 iPad 的「設定」→「Safari」→「麥克風」→ 選「允許」，再回到這一頁重新整理。',
    'service-not-allowed': '🎤 iPad 的語音辨識沒有打開。請爸爸媽媽幫忙：「設定」→「一般」→「鍵盤」→ 打開「啟用聽寫」；也看看「設定」→「Safari」→「麥克風」是不是「允許」。',
    'no-speech': '👂 我沒有聽到聲音耶！靠近 iPad 一點，按 🎤 再大聲說一次。',
    network: '📶 網路好像不太順，說說看要連上網路才能用。看看 Wi-Fi 有沒有連上，再按 🎤 試一次。',
    'audio-capture': '🎤 找不到麥克風。看看是不是有別的 App 正在用麥克風，關掉後再按 🎤 試一次。',
    aborted: '剛剛停掉了，再按一次 🎤 就好。',
    'language-not-supported': '這台裝置不能辨識英文，可以按「跳過」繼續。'
  };
  const speakErr = code => SPEAK_ERR[code] || '出了一點小狀況，再按一次 🎤 試試看；不行的話可以按「跳過」。';

  // ---------- 紀錄與錯題 ----------
  function record(q, ok, input) {
    const e = { t: Date.now(), id: q.id, m: q.module, k: q.tkey, y: q.type, ok: ok ? 1 : 0, a: String(input == null ? '' : input).slice(0, 120) };
    e.r = SM.rid(e);
    S.log.push(e);
    // 紀錄太大（> 500 KB）就把最舊的壓成每題一筆（保留第一次答對的時間），不直接丟掉
    if (S.log.length % 200 === 0 && SM.bytes(S.log) > SM.MAX_BYTES) {
      const d = SM.compact({ log: S.log, cut: S.agg.cut || 0, agg: S.agg.agg || {} });
      S.log = d.log; S.agg = { cut: d.cut, agg: d.agg }; save('ke_agg', S.agg);
    }
    save('ke_log', S.log);
    if (ok && !S.correct.has(q.id)) { S.correct.add(q.id); save('ke_correct', [...S.correct]); }
    const m = S.mistakes, now = Date.now(), prev = m[q.id] && !m[q.id].d ? m[q.id] : null;
    if (!ok) m[q.id] = { c: 0, w: ((m[q.id] || {}).w || 0) + 1, t: now, u: now };
    else if (prev) {
      prev.c++; prev.u = now;
      if (prev.c >= 3) { m[q.id] = { d: 1, w: prev.w, t: prev.t, u: now }; Q.graduated++; } // 畢業＝墓碑，同步到別台才不會復活
    }
    save('ke_mistakes', m);
  }
  function stats() {
    const days = new Set(S.log.map(l => ymd(new Date(l.t)))), t = ymd(new Date()), d = new Date();
    let streak = 0;
    if (!days.has(t)) d.setDate(d.getDate() - 1);
    while (days.has(ymd(d))) { streak++; d.setDate(d.getDate() - 1); }
    return { streak, today: S.log.filter(l => ymd(new Date(l.t)) === t).length };
  }
  const mistakeIds = () => Object.keys(S.mistakes).filter(id => !S.mistakes[id].d && E.byId[id] && (canSpeak || E.byId[id].type !== 'speak'));

  // ---------- 路由 ----------
  let rendered = '', Q = null, redraw = null;
  function go(h) { if (location.hash !== h) location.hash = h; render(); }
  window.addEventListener('hashchange', () => { if (location.hash !== rendered) render(); });
  function render() {
    const h = location.hash || '#home'; rendered = h; redraw = null; stopRec();
    if (/^#s\//.test(h)) return; // 其他科目由 subjects.js 負責
    const [p, sub] = h.slice(1).split('/');
    const pages = { home: pHome, learn: pLearn, practice: pPractice, quiz: pQuiz, result: pResult, mistakes: pMistakes, bank: pBank, parent: pParent };
    (pages[p] || pHome)(sub);
    window.scrollTo(0, 0);
  }
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) { e.preventDefault(); go(g.dataset.go); return; }
    const dr = e.target.closest('[data-drill]');
    if (dr) { e.preventDefault(); startDrill(dr.dataset.drill, rendered); return; }
    const lb = e.target.closest('[data-learn],[data-unlearn]');
    if (lb) {
      e.preventDefault();
      // 題組全部答對過才解鎖；按下去還要通過小測驗才標記
      if (lb.dataset.learn) { startGate(lb.dataset.learn, rendered); return; }
      if (!authOK('unlearn')) return; // 改學習紀錄一律要登入
      if (!confirm('確定要取消「已學會」嗎？')) return;
      S.learned = KE.unsetLearned(S.learned, lb.dataset.unlearn, new Date().toISOString());
      save('ke_learned', S.learned);
      if (window.KESync) KESync.now();
      if (redraw) redraw();
      return;
    }
    if (e.target.closest('[data-share]')) { share(e.target.closest('[data-share]')); return; }
    const s = e.target.closest('.say');
    if (s) speak(s.dataset.say || s.textContent);
  });

  // ---------- 共用 UI ----------
  // 語速控制：學習頁、作答、結果、錯題庫的標題列都有一顆膠囊，點開調整
  const fmtRate = r => KE.clampRate(r).toFixed(1) + '×';
  const speedCtl = () => `<div class="speed-ctl"><label class="speed-row">🐢<input type="range" class="speed-range" min="0.5" max="1.3" step="0.1" value="${KE.clampRate(S.settings.rate)}" aria-label="語音速度">🐇<b class="speed-val">${fmtRate(S.settings.rate)}</b></label><div class="speed-quick">${[['慢', 0.6], ['中', 0.8], ['正常', 1]].map(([t, v]) => `<button type="button" class="btn sm" data-rate="${v}">${t} ${v.toFixed(1)}</button>`).join('')}</div></div>`;
  const speedPill = () => /^#(learn|quiz|result|mistakes)/.test(rendered) ? `<div class="speed"><button type="button" class="btn sm speed-pill" data-speed-toggle aria-label="調整語音速度">🐢 <b class="speed-val">${fmtRate(S.settings.rate)}</b></button><div class="speed-pop" hidden>${speedCtl()}</div></div>` : '';
  function setRate(r, preview) {
    S.settings.rate = KE.clampRate(r); saveSettings();
    $$('.speed-val').forEach(x => { x.textContent = fmtRate(S.settings.rate); });
    $$('.speed-range').forEach(x => { x.value = S.settings.rate; });
    if (preview) speak('Hello');
  }
  document.addEventListener('input', e => { if (e.target.classList.contains('speed-range')) $$('.speed-val').forEach(x => { x.textContent = fmtRate(e.target.value); }); });
  document.addEventListener('change', e => { if (e.target.classList.contains('speed-range')) setRate(e.target.value, true); });
  document.addEventListener('click', e => {
    const q = e.target.closest('[data-rate]'), t = e.target.closest('[data-speed-toggle]');
    if (q) setRate(q.dataset.rate, true);
    if (t) { const p = t.parentNode.querySelector('.speed-pop'); p.hidden = !p.hidden; }
    if (!e.target.closest('.speed')) $$('.speed-pop').forEach(p => { p.hidden = true; });
  });
  const top = (title, back) => `<header class="top">${back === false ? '' : `<button class="btn icon" data-go="${back || '#home'}" aria-label="回上一頁">${back && back !== '#home' ? '⬅️' : '🏠'}</button>`}<h1>${title}</h1>${window.KESync && KESync.code() ? '<span class="cloud" title="裝置同步已開啟" aria-label="裝置同步已開啟">☁️</span>' : ''}${speedPill()}</header>`;
  const tile = (go, icon, name, desc, cls) => `<button class="tile ${cls}" data-go="${go}"><span class="ti">${icon}</span><b>${name}</b><small>${desc}</small></button>`;
  const radios = (name, opts, cur) => `<div class="seg">${opts.map(([v, t]) => `<label class="pill"><input type="radio" name="${name}" value="${esc(v)}" ${String(v) === String(cur) ? 'checked' : ''}><span>${esc(t)}</span></label>`).join('')}</div>`;
  const val = name => { const el = $(`input[name="${name}"]:checked`); return el ? el.value : ''; };
  const vals = name => $$(`input[name="${name}"]`).filter(x => x.checked).map(x => x.value);
  const voiceCard = () => `<section class="card"><h2>🔊 語音設定</h2>${speedCtl()}${radios('accent', [['en-US', '🇺🇸 美式'], ['en-GB', '🇬🇧 英式']], S.settings.accent)}<button class="btn" id="tryv">試聽：<span class="en">Hello! How are you?</span></button>${synth ? '' : '<p class="muted">這個瀏覽器不支援唸英文。</p>'}</section>`;
  function bindVoice() {
    $$('input[name="accent"]').forEach(el => el.onchange = () => { S.settings.accent = val('accent') || 'en-US'; saveSettings(); });
    const t = $('#tryv'); if (t) t.onclick = () => speak('Hello! How are you?');
  }
  // ---------- 學會了 ----------
  const LS = { words: '', phrases: '', roots: '', grammar: '', patterns: '' };
  const isL = id => !!(S.learned[id] && S.learned[id].at);
  const isReady = id => !isL(id) && E.progress(id, S.correct).complete;
  const lfPass = (page, id) => !LS[page] || (LS[page] === 'ready' ? isReady(id) : (LS[page] === 'yes') === isL(id));
  // 卡片：已學會 → ✅＋時間＋分數＋取消；還沒 → 練習進度、練習這組、學會了（全部答對過才解鎖）
  function learnUI(id) {
    if (isL(id)) return `<div class="learned"><span class="done">✅ 已學會 ${esc(KE.fmtTaipei(S.learned[id].at))}${S.learned[id].score ? `（${esc(S.learned[id].score)}）` : ''}</span><button class="btn sm" data-unlearn="${esc(id)}">取消</button></div>`;
    const p = E.progress(id, S.correct), left = p.total - p.done;
    return `<div class="iprog"><div class="iprog-t">練習 ${p.done}/${p.total} ✓</div><div class="iprog-bar"><i style="width:${p.total ? p.done / p.total * 100 : 0}%"></i></div></div>
      <div class="learned">${left ? `<button class="btn sm primary" data-drill="${esc(id)}">🎯 練習這組</button>` : ''}${p.complete ? `<button class="btn learn ready" data-learn="${esc(id)}">👍 學會了</button>` : `<button class="btn learn locked" disabled>🔒 學會了 · 還差 ${left} 題</button>`}</div>`;
  }
  const lfBar = page => `<div class="lfbar">${radios('lf-' + page, [['', '全部'], ['yes', '已學會'], ['no', '未學會'], ['ready', '可以按學會了']], LS[page])}<p class="prog" id="prog"></p></div>`;
  function bindLf(page, label, ids, draw) {
    const full = () => { $('#prog').textContent = `${label} ${ids.filter(isL).length}/${ids.length} 已學會`; draw(); };
    $$(`input[name="lf-${page}"]`).forEach(el => el.onchange = () => { LS[page] = el.value; full(); });
    redraw = full; full();
  }

  // ---------- 分享（網址固定用小朋友學習站正式網址）----------
  const SHARE = { title: '小朋友學習站', text: '單字、字根、文法、句型：聽、選、拼、排句子一起練英文', url: 'https://yoda-wcyc.github.io/Kids-Station/' };
  const shareRow = () => `<div class="share-row"><button class="btn share" data-share>🔗 分享這個網站</button><span class="share-msg muted" role="status" aria-live="polite"></span></div>`;
  function share(b) {
    const msg = b.parentNode.querySelector('.share-msg'), say = t => { if (msg) msg.textContent = t; };
    const copy = () => {
      const done = () => say('已複製連結 ✓ 可以貼給朋友了');
      const legacy = () => {
        const ta = document.createElement('textarea'); let ok = false;
        ta.value = SHARE.url; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(ta); ta.select();
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        ta.remove();
        if (ok) done(); else say('沒辦法自動複製，請長按複製這個網址：' + SHARE.url);
      };
      try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(SHARE.url).then(done, legacy); return; } } catch (e) { }
      legacy();
    };
    say('');
    if (!navigator.share) return copy();
    try { Promise.resolve(navigator.share({ title: SHARE.title, text: SHARE.text, url: SHARE.url })).catch(err => { if (!err || err.name !== 'AbortError') copy(); }); } catch (e) { copy(); }
  }

  // 「學會了」要先通過小測驗：back＝測完要回去的學習頁（從 981d094 移植；題組沒完成時 E.gate 回 null，開不了）
  function startGate(itemId, back) {
    if (!authOK('learn')) return;
    const g = E.gate(itemId, S.correct);
    if (!g || !g.qs.length) return;
    if (!quotaOK('test', () => startGate(itemId, back))) return;
    Q = { list: g.qs, i: 0, answers: [], answered: false, cfg: null, graduated: 0, result: null, gate: { itemId, need: g.need, total: g.total, back: back || '#learn' } };
    go('#quiz');
  }
  // 練習這組：只出還沒答對過的題（打字題最後）；答錯會排回後面直到答對；中途離開進度照樣保留
  function startDrill(itemId, back) {
    if (!authOK('practice')) return;
    const list = E.drill(itemId, S.correct);
    if (!list.length) return;
    if (!quotaOK('english', () => startDrill(itemId, back))) return;
    Q = { list, i: 0, answers: [], answered: false, cfg: null, graduated: 0, result: null, drill: { itemId, back: back || '#learn' } };
    go('#quiz');
  }
  function startQuiz(cfg) {
    if (!authOK('practice')) return;
    const list = cfg.ids ? KE.shuffle(cfg.ids).slice(0, cfg.count || 30).map(id => E.get(id)).filter(Boolean) : E.buildQuiz(cfg);
    if (!list.length) { alert('沒有符合條件的題目，換個選擇試試看！'); return; }
    if (!quotaOK('english', () => startQuiz(cfg))) return;
    Q = { list, i: 0, answers: [], answered: false, cfg, graduated: 0, result: null };
    go('#quiz');
  }

  // ---------- 首頁 ----------
  function pHome() {
    const st = stats(), mc = mistakeIds().length;
    app.innerHTML = top('小朋友學習站 🎈', false) + `
      <div class="stats"><div class="stat"><span>🔥</span><b>${st.streak}</b><small>連續天數</small></div><div class="stat"><span>✏️</span><b>${st.today}</b><small>今天做的題目</small></div><div class="stat"><span>⭐</span><b>${S.progress.stars}</b><small>星星</small></div></div>
      <div class="tiles">${tile('#learn', '📖', '學習', '單字・字根・文法・句型', 'c1')}${tile('#practice', '🎯', '練習', '自己選題目來挑戰', 'c2')}${tile('#mistakes', '🩹', '錯題庫', mc ? `有 ${mc} 題等你復仇` : '目前沒有錯題', 'c3')}${tile('#bank', '🗂️', '例題庫', `全部 ${E.meta.length} 題`, 'c4')}${tile('#parent', '👨‍👩‍👦', '家長', '學習紀錄與設定', 'c5')}</div>
      <p class="muted center">小提示：看到英文，點一下就會唸給你聽 👂</p>${shareRow()}`;
  }

  // ---------- 學習 ----------
  const LF = { lv: '', tag: '', src: '', q: '', page: 0 };
  const PAGE = 40; // 單字卡一頁 40 張（1200 字一次全畫，iPad 會卡）
  function pLearn(sub) {
    if (sub === 'words') return pWords();
    if (sub === 'roots') return pRoots();
    if (sub === 'grammar') return pGrammar();
    if (sub === 'patterns') return pPatterns();
    if (sub === 'phrases') return pPhrases();
    app.innerHTML = top('學習') + `<div class="tiles">${tile('#learn/words', '🔤', '單字卡', `${D.words.length} 個常用字`, 'c1')}${tile('#learn/phrases', '🔗', '片語', `${D.phrases.length} 個常用片語`, 'c5')}${tile('#learn/roots', '🧩', '字根字首', `${D.roots.length} 組拆字密碼`, 'c2')}${tile('#learn/grammar', '📐', '文法', `${D.grammar.length} 個主題`, 'c3')}${tile('#learn/patterns', '💬', '句型', `${D.patterns.length} 個好用句型`, 'c4')}</div>`;
  }
  function pWords() {
    const srcs = E.sources(), tags = [...new Set(D.words.flatMap(w => w.tags || []))];
    app.innerHTML = top('單字卡', '#learn') + `<div class="filters">
      <input id="fq" class="search" type="search" placeholder="🔍 搜尋英文或中文" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="搜尋單字">
      <select id="flv" aria-label="等級"><option value="">全部等級</option><option value="1">等級 1</option><option value="2">等級 2</option><option value="3">等級 3</option></select>
      <select id="ftag" aria-label="主題"><option value="">全部主題</option>${tags.map(t => `<option value="${esc(t)}">${esc(KE.TAGS[t] || t)}</option>`).join('')}</select>
      ${srcs.length > 1 ? `<select id="fsrc" aria-label="來源"><option value="">全部來源</option>${srcs.map(s => `<option value="${esc(s)}">${esc(srcLabel(s))}</option>`).join('')}</select>` : ''}
      <button class="btn primary" id="pw">🎯 練這些字</button><button class="btn" id="ps" ${canSpeak ? '' : 'disabled'} title="${canSpeak ? '用說的練這些字' : NO_SPEAK_MSG}">🎤 說說看</button></div>${canSpeak ? '' : `<p class="muted" id="psno">🎤 ${NO_SPEAK_MSG}</p>`}${lfBar('words')}<p class="muted" id="wn"></p><div class="cards" id="wl"></div><div class="pager" id="wp"></div>`;
    const qOk = w => { const q = LF.q.trim().toLowerCase(); return !q || w.w.toLowerCase().includes(q) || w.zh.includes(LF.q.trim()); };
    const pick = () => D.words.filter(w => (!LF.lv || String(w.lv) === LF.lv) && (!LF.tag || (w.tags || []).includes(LF.tag)) && (!LF.src || (w.src || 'moe') === LF.src) && qOk(w) && lfPass('words', KE.wordItemId(w)));
    const draw = () => {
      const L = pick(), pages = Math.max(1, Math.ceil(L.length / PAGE));
      LF.page = Math.min(LF.page, pages - 1);
      const show = L.slice(LF.page * PAGE, LF.page * PAGE + PAGE);
      $('#wn').textContent = `這裡有 ${L.length} 個字${pages > 1 ? `（第 ${LF.page + 1}／${pages} 頁）` : ''}，點英文就會唸`;
      $('#wl').innerHTML = show.map(w => `<div class="card word ${isL(KE.wordItemId(w)) ? 'is-learned' : ''}"><span class="lvb lv${w.lv}">等級 ${w.lv}</span><div class="w en say">${esc(w.w)}</div><div class="ipa">${esc(w.ipa)} <span class="pos">${esc(KE.POS[w.pos] || w.pos)}</span></div><div class="zh">${esc(w.zh)}</div>${w.ex ? `<div class="ex en say">${esc(w.ex)}</div><div class="exzh">${esc(w.exZh || '')}</div>` : ''}${learnUI(KE.wordItemId(w))}</div>`).join('');
      $('#wp').innerHTML = pages > 1 ? `<button class="btn" data-pg="-1" ${LF.page ? '' : 'disabled'}>⬅️ 上一頁</button><span>${LF.page + 1} / ${pages}</span><button class="btn" data-pg="1" ${LF.page < pages - 1 ? '' : 'disabled'}>下一頁 ➡️</button>` : '';
      $$('#wp [data-pg]').forEach(b => b.onclick = () => { LF.page += +b.dataset.pg; draw(); window.scrollTo(0, 0); });
    };
    ['lv', 'tag', 'src'].forEach(k => { const el = $('#f' + k); if (el) { el.value = LF[k]; el.onchange = () => { LF[k] = el.value; LF.page = 0; draw(); }; } });
    const fq = $('#fq'); let qt = null; fq.value = LF.q; fq.oninput = () => { clearTimeout(qt); qt = setTimeout(() => { if (!fq.isConnected) return; /* 0.2 秒內已切頁：舊搜尋框不在畫面上，略過 */ LF.q = fq.value; LF.page = 0; draw(); }, 200); };
    $('#pw').onclick = () => { const ids = pick().flatMap(w => ['listen', 'zh2en', 'en2zh', 'spell', 'type'].map(t => `w:${KE.wordKey(w)}:${t}`)); startQuiz({ ids, count: 10, mode: 'words' }); };
    $('#ps').onclick = () => { if (!canSpeak) return; startQuiz({ ids: pick().map(w => `w:${KE.wordKey(w)}:speak`), count: 10, mode: 'speak', allowSpeak: true }); };
    bindLf('words', '單字', D.words.map(KE.wordItemId), draw);
  }
  function pRoots() {
    app.innerHTML = top('字根字首', '#learn') + `<p class="muted">把長長的單字拆開，就像拼樂高一樣！</p><button class="btn primary" data-act="pr">🎯 練字根字首</button>${lfBar('roots')}<div class="cards" id="rl"></div>`;
    const draw = () => {
      $('#rl').innerHTML = D.roots.filter(r => lfPass('roots', KE.rootItemId(r))).map(r => `<div class="card root ${isL(KE.rootItemId(r)) ? 'is-learned' : ''}"><div class="rh"><b class="en">${esc(r.p)}</b><span class="tag">${KE.ROOT_T[r.t]}</span></div><div class="rm">＝ ${esc(r.m)}</div><ul>${r.words.map(w => `<li><span class="en say" data-say="${esc(w.w)}">${w.parts.map(esc).join(' <i>+</i> ')} ＝ <b>${esc(w.w)}</b></span> <span class="zh">${esc(w.zh)}</span></li>`).join('')}</ul>${learnUI(KE.rootItemId(r))}</div>`).join('');
    };
    $('[data-act="pr"]').onclick = () => startQuiz({ modules: ['roots'], count: 10, mode: 'roots' });
    bindLf('roots', '字根', D.roots.map(KE.rootItemId), draw);
  }
  function pGrammar() {
    app.innerHTML = top('文法', '#learn') + `${lfBar('grammar')}<div id="gl"></div>`;
    const draw = () => {
      const open = new Set($$('#gl details[open]').map(d => d.dataset.id));
      $('#gl').innerHTML = D.grammar.filter(g => lfPass('grammar', KE.grammarItemId(g))).map(g => `<details class="card gram ${isL(KE.grammarItemId(g)) ? 'is-learned' : ''}" data-id="${esc(g.id)}" ${open.has(g.id) ? 'open' : ''}><summary><b>${isL(KE.grammarItemId(g)) ? '✅ ' : ''}${esc(g.title)}</b></summary><ul class="rules">${g.rules.map(r => `<li>${esc(r)}</li>`).join('')}</ul><div class="exs">${g.ex.map(e => `<div><span class="en say">${esc(e.en)}</span><small>${esc(e.zh)}</small></div>`).join('')}</div><div class="row wrap"><button class="btn primary" data-g="${esc(g.id)}">🎯 練這個文法</button>${learnUI(KE.grammarItemId(g))}</div></details>`).join('');
      $$('[data-g]').forEach(b => b.onclick = () => startQuiz({ modules: ['grammar'], topics: ['grammar:' + b.dataset.g], count: 10, allowSpeak: canSpeak, mode: 'grammar' }));
    };
    bindLf('grammar', '文法', D.grammar.map(KE.grammarItemId), draw);
  }
  // ---------- 片語 ----------
  const PHF = { lv: '', tag: '' };
  function pPhrases() {
    const tags = [...new Set(D.phrases.map(p => p.tag))];
    app.innerHTML = top('片語', '#learn') + `${radios('phlv', [['', '全部等級'], ['1', '必會'], ['2', '基本'], ['3', '進階']], PHF.lv)}
      <div class="filters"><select id="phtag" aria-label="類別"><option value="">全部類別</option>${tags.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('')}</select></div>
      ${lfBar('phrases')}<p class="muted" id="phn"></p><div class="cards" id="phl"></div>`;
    const draw = () => {
      const L = D.phrases.filter(p => (!PHF.lv || String(p.lv) === PHF.lv) && (!PHF.tag || p.tag === PHF.tag) && lfPass('phrases', KE.phraseItemId(p)));
      $('#phn').textContent = `這裡有 ${L.length} 個片語，點英文就會唸`;
      $('#phl').innerHTML = L.map(p => `<div class="card word phrase ${isL(KE.phraseItemId(p)) ? 'is-learned' : ''}"><span class="lvb lv${p.lv}">${KE.PHRASE_LV[p.lv]}</span> <span class="tag">${esc(p.tag)}</span><div class="w en say">${esc(p.p)}</div><div class="zh">${esc(p.zh)}</div><div class="ex en say">${esc(p.ex)}</div><div class="exzh">${esc(p.exZh)}</div>${learnUI(KE.phraseItemId(p))}</div>`).join('');
    };
    $$('input[name="phlv"]').forEach(el => el.onchange = () => { PHF.lv = el.value; draw(); });
    const t = $('#phtag'); t.value = PHF.tag; t.onchange = () => { PHF.tag = t.value; draw(); };
    bindLf('phrases', '片語', D.phrases.map(KE.phraseItemId), draw);
  }
  // 練習設定的主題勾選：有分組（句型的簡單／基本／進階）就分組顯示
  function topicChecks(m, L) {
    const ck = t => `<label class="ck sm"><input type="checkbox" name="top" value="${esc(t.key)}" ${L.offT.includes(t.key) ? '' : 'checked'}> ${esc(t.label)}</label>`;
    const ts = E.topics(m), groups = [...new Set(ts.map(t => t.group).filter(Boolean))];
    if (!groups.length) return `<div class="wrap">${ts.map(ck).join('')}</div>`;
    return groups.map(g => `<div class="tgroup"><b>${esc(g)}</b><div class="wrap">${ts.filter(t => t.group === g).map(ck).join('')}</div></div>`).join('');
  }
  const PLV = { lv: '' };
  function pPatterns() {
    app.innerHTML = top('句型', '#learn') + `${radios('plv', [['', '全部等級'], ['1', '簡單'], ['2', '基本'], ['3', '進階']], PLV.lv)}${lfBar('patterns')}<div class="cards" id="pl"></div>`;
    const lvOf = p => p.lv || 2;
    const draw = () => {
      $('#pl').innerHTML = D.patterns.slice().sort((a, b) => lvOf(a) - lvOf(b)).filter(p => (!PLV.lv || String(lvOf(p)) === PLV.lv) && lfPass('patterns', KE.patternItemId(p))).map(p => `<div class="card pat ${isL(KE.patternItemId(p)) ? 'is-learned' : ''}"><span class="lvb lv${lvOf(p)}">${KE.PATTERN_LV[lvOf(p)]}</span><div class="ph en say">${esc(p.pattern)}</div><div class="zh">${esc(p.zh)}</div><div class="exs">${p.ex.map(e => `<div><span class="en say">${esc(e.en)}</span><small>${esc(e.zh)}</small></div>`).join('')}</div><div class="row wrap"><button class="btn primary" data-p="${esc(p.id)}">🎯 練這個句型</button>${learnUI(KE.patternItemId(p))}</div></div>`).join('');
      $$('[data-p]').forEach(b => b.onclick = () => startQuiz({ modules: ['patterns'], topics: ['patterns:' + b.dataset.p], count: 10, allowSpeak: canSpeak, mode: 'patterns' }));
    };
    $$('input[name="plv"]').forEach(el => el.onchange = () => { PLV.lv = el.value; draw(); });
    bindLf('patterns', '句型', D.patterns.map(KE.patternItemId), draw); // 進度一律算全部句型
  }

  // ---------- 練習設定 ----------
  function pPractice() {
    const mods = Object.keys(KE.MODULES), srcs = E.sources();
    // 🎤 說說看要自己勾（預設不勾：要用麥克風、第一次要家長同意）；不支援的裝置顯示停用
    const types = Object.keys(KE.TYPES).filter(y => y !== 'speak' && !KE.SET_ONLY_TYPES.includes(y)); // 只在「練習這組」出的題型不列
    const L = Object.assign({ mods: mods.slice(), offT: [], offY: [], count: 10, ratio: 0, lv: '', src: '', speak: false }, S.settings.last || {});
    app.innerHTML = top('練習設定') + `
      <section class="card"><h2>1. 選單元</h2>${mods.map(m => `<div class="mod"><label class="ck"><input type="checkbox" name="mod" value="${m}" ${L.mods.includes(m) ? 'checked' : ''}> ${KE.MODULES[m]}</label><details><summary>選主題</summary>${topicChecks(m, L)}</details></div>`).join('')}</section>
      <section class="card"><h2>2. 選題型</h2><div class="wrap">${types.map(y => `<label class="ck"><input type="checkbox" name="typ" value="${y}" ${L.offY.includes(y) ? '' : 'checked'}> ${KE.TYPES[y]}</label>`).join('')}<label class="ck${canSpeak ? '' : ' off'}"><input type="checkbox" name="typ" value="speak" ${canSpeak && L.speak ? 'checked' : ''} ${canSpeak ? '' : 'disabled'}> ${KE.TYPES.speak}</label></div><p class="muted" id="spnote">${canSpeak ? '🎤 說說看：可以只選它，也可以跟其他題型一起練（單字、片語、文法、句型都有）。要用麥克風，第一次會請爸爸媽媽同意。' : '🎤 ' + NO_SPEAK_MSG}</p></section>
      <section class="card"><h2>3. 單字範圍</h2>${radios('lv', [['', '全部等級'], ['1', '等級 1'], ['2', '等級 2'], ['3', '等級 3']], L.lv)}${srcs.length > 1 ? radios('src', [['', '全部來源']].concat(srcs.map(s => [s, srcLabel(s)])), L.src) : ''}</section>
      <section class="card"><h2>4. 題數和錯題</h2>${radios('count', [['10', '10 題'], ['20', '20 題'], ['30', '30 題']], L.count)}${radios('ratio', [['0', '不加錯題'], ['0.3', '加 30% 錯題'], ['1', '只練錯題']], L.ratio)}<p class="muted">錯題庫目前有 ${mistakeIds().length} 題</p></section>
      ${voiceCard()}<button class="btn primary big wide" id="start">開始 🚀</button>`;
    bindVoice();
    $('#start').onclick = () => {
      const allT = $$('input[name="top"]').map(x => x.value), onT = vals('top'), onY = vals('typ');
      const spk = canSpeak && onY.includes('speak');
      const last = { mods: vals('mod'), offT: allT.filter(t => !onT.includes(t)), offY: types.filter(y => !onY.includes(y)), count: +val('count') || 10, ratio: +val('ratio') || 0, lv: val('lv'), src: val('src'), speak: spk };
      S.settings.last = last; saveSettings();
      if (!last.mods.length || !onY.length) { alert('請至少選一個單元和一個題型喔！'); return; }
      startQuiz({ modules: last.mods, topics: onT, types: onY, count: last.count, mistakeRatio: last.ratio, mistakes: mistakeIds(), lv: last.lv, src: last.src, allowSpeak: spk, mode: spk && onY.length === 1 ? 'speak' : 'practice' });
    };
  }

  // ---------- 🎤 說說看：作答畫面 ----------
  // 每題最多試 3 次（只有聽到東西才算一次；沒聲音、網路等錯誤不算）；說對 → answer() 記答對；第 3 次還沒對 → 記答錯；隨時可以跳過
  function spkState(q) { if (!Q.spk || Q.spk.i !== Q.i || Q.spk.id !== q.id) Q.spk = { i: Q.i, id: q.id, tries: [] }; return Q.spk; }
  function micBody(q) {
    // 裝置不支援：提示＋「先跳過」（不算對錯、不算進解鎖、這回合不重出）
    if (!canSpeak) return `<div class="card center" id="spno"><p>🎤 ${NO_SPEAK_MSG}</p></div><div class="row"><button class="btn big" id="spwaive">先跳過 ➜</button></div>`;
    const st = spkState(q), n = st.tries.length, last = n ? st.tries[n - 1].heard : null;
    // 練習這組：跳過＝算答錯、等一下重排再出；裝置問題（連續 2 次網路／麥克風錯誤）→ 多一顆「這題先跳過」（這次不算進解鎖）
    return `<div class="row wrap"><button class="btn primary big" id="mic">🎤 ${n ? '再試一次' : '按我說說看'}</button><button class="btn" id="skip">${Q.drill ? '跳過（算答錯，等一下再來）' : '跳過'}</button><button class="btn" id="spwaive" ${st.dev >= 2 ? '' : 'hidden'}>這題先跳過（裝置有狀況，這次不算）</button></div>
      <p class="center" id="heard" role="status" aria-live="polite">${n ? `我聽到的是：「<b class="en">${esc(last || '（聽不清楚）')}</b>」，再試一次！` : '按 🎤 之後，大聲說出上面的英文'}</p><p class="muted center" id="tries">${n ? `還可以試 ${SPEAK_TRIES - n} 次` : `每題可以試 ${SPEAK_TRIES} 次`}</p>${n ? '' : `<p class="muted center" id="micallow">${MIC_ALLOW}</p>`}`;
  }
  function bindMic(q) {
    const sk = $('#skip'); if (sk) sk.onclick = () => { stopRec(); if (Q.drill) answer(q, ''); else answer(q, '', true); };
    const wv = $('#spwaive'); if (wv) wv.onclick = () => { stopRec(); E.speakWaive.add(q.id); answer(q, '', true); };
    const mic = $('#mic'); if (!mic) return;
    const heard = $('#heard'), say = h => { heard.innerHTML = h; };
    const idle = () => { mic.disabled = false; mic.textContent = '🎤 ' + (spkState(q).tries.length ? '再試一次' : '按我說說看'); };
    mic.onclick = () => {
      if (Q.answered || REC) return;
      const R = window.SpeechRecognition || window.webkitSpeechRecognition;
      let r, got = false, err = '', timer = null;
      const done = () => { clearTimeout(timer); if (REC === r) REC = null; if (mic.isConnected) idle(); };
      try { r = new R(); } catch (e) { say(esc(speakErr(''))); return; }
      r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
      // 8 秒沒聲音就自己停；有聲音就再給 8 秒（說完辨識會自己結束）
      const arm = () => { clearTimeout(timer); timer = setTimeout(() => { if (REC === r) { try { r.stop(); } catch (e) { } } }, SPEAK_SILENCE_MS); };
      r.onsoundstart = arm; r.onspeechstart = arm;
      r.onresult = e => {
        if (REC !== r) return;
        got = true; done();
        const res = e.results && e.results[0], alts = res ? Array.from(res).map(a => ({ t: String((a && a.transcript) || '').trim(), c: a && typeof a.confidence === 'number' ? a.confidence : null })) : [];
        heardIt(q, alts, say);
      };
      r.onerror = e => { err = (e && e.error) || 'unknown'; };
      r.onend = () => {
        if (REC !== r) return; done();
        if (got) return;
        const st = spkState(q), code = err || 'no-speech';
        st.dev = DEVICE_ERRS.includes(code) ? (st.dev || 0) + 1 : 0;
        say(esc(speakErr(code)) + (st.dev >= 2 ? '<br>一直不行的話，可以按「這題先跳過」。' : ''));
        const w = $('#spwaive'); if (w && st.dev >= 2) w.hidden = false;
      };
      try {
        if (synth) synth.cancel();
        REC = r; mic.disabled = true; mic.textContent = '👂 聽你說…'; say('聽你說… 說完會自己停');
        if (window.KidsCoins) KidsCoins.activity('english'); // 按麥克風算互動（不是作答）
        r.start(); arm();
      } catch (e) { done(); say(esc(speakErr(e && e.name === 'NotAllowedError' ? 'not-allowed' : ''))); }
    };
  }
  function heardIt(q, alts, say) {
    const st = spkState(q), res = E.check(q, alts.map(a => a.t));
    st.dev = 0; // 有聽到東西＝裝置正常
    st.tries.push({ heard: res.heard, alts });
    if (res.ok) return answer(q, res.heard);
    if (st.tries.length >= SPEAK_TRIES) return answer(q, res.heard); // 第 3 次還沒說對 → 記答錯
    say(`我聽到的是：「<b class="en">${esc(res.heard || '（聽不清楚）')}</b>」，再試一次！`);
    const t = $('#tries'); if (t) t.textContent = `還可以試 ${SPEAK_TRIES - st.tries.length} 次`;
    const m = $('#mic'); if (m) m.textContent = '🎤 再試一次';
  }

  // ---------- 作答 ----------
  function pQuiz() {
    stopRec();
    if (!Q) { app.innerHTML = top('練習') + `<div class="card center"><p>還沒有開始練習喔！</p><button class="btn primary big" data-go="#practice">去選題目</button></div>`; return; }
    const q = Q.list[Q.i], n = Q.list.length;
    let body;
    if (q.input === 'type') body = `<div class="spell ${/\s/.test(q.answer) ? 'long' : ''}"><input id="ans" type="text" inputmode="text" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" enterkeyhint="send" placeholder="${/\s/.test(q.answer) ? '打出整句英文' : '在這裡打字'}" aria-label="英文答案"><button class="btn primary" id="ok">送出</button></div>`;
    else if (q.input === 'chips') body = `<div class="placed" id="placed"></div><div class="pool">${q.options.map((c, i) => `<button class="chip" data-i="${i}">${esc(c)}</button>`).join('')}</div><div class="row"><button class="btn" id="clr">清除</button><button class="btn primary" id="ok">確定</button></div>`;
    else if (q.input === 'mic') body = micBody(q);
    // 填空拼字：每個空格一個字母框（打一個字自動跳下一格、空格按退格回上一格）
    else if (q.input === 'gap') body = `<div class="gapw en" id="gapw">${q.answer.split('').map((c, i) => (q.gaps.includes(i)
      ? `<input class="gap-in" data-p="${i}" type="text" maxlength="1" inputmode="text" autocapitalize="none" autocorrect="off" autocomplete="off" spellcheck="false" enterkeyhint="next" aria-label="第 ${q.gaps.indexOf(i) + 1} 個空格">`
      : c === ' ' ? '<span class="gap-sp"></span>' : `<span class="gap-ch">${esc(c)}</span>`)).join('')}</div><div class="row"><button class="btn primary big" id="ok">送出</button></div>`;
    else body = `<div class="opts ${q.options.some(o => o.length > 14) ? 'one' : ''}">${q.options.map(o => `<button class="opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
    app.innerHTML = (Q.gate ? top('通過小測驗才能標記學會 ✨', Q.gate.back) + `<p class="gate-note">「${esc(E.itemInfo(Q.gate.itemId).item)}」小測驗：${Q.gate.total} 題要答對 ${Q.gate.need} 題</p>`
      : Q.drill ? top('練習這組', Q.drill.back) + `<p class="drill-note">「${esc(E.itemInfo(Q.drill.itemId).item)}」${drillLine()}</p>` : top('練習中', '#practice')) + `<div class="bar"><i style="width:${Q.i / n * 100}%"></i></div><p class="count">第 ${Q.i + 1} / ${n} 題</p>
      <div class="card qcard"><div class="qtype">${KE.TYPES[q.type]}</div><div class="prompt ${q.en ? 'en say' : ''}">${esc(q.prompt)}</div>${q.sub ? `<div class="sub ${q.subEn ? 'en' : ''}">${esc(q.sub)}</div>` : ''}${q.play ? `<button class="btn sound" id="play">🔊 ${q.type === 'speak' ? '聽示範' : '再聽一次'}</button>` : ''}</div>
      ${body}<div id="fb"></div>`;
    const p = $('#play'); if (p) p.onclick = () => speak(q.speakText);
    $$('.opt').forEach(b => b.onclick = () => answer(q, b.dataset.v));
    if (q.input === 'type') {
      const inp = $('#ans'), send = () => { if (inp.value.trim()) answer(q, inp.value); else inp.focus(); };
      $('#ok').onclick = send;
      inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); send(); } };
    }
    if (q.input === 'chips') {
      let placed = [];
      const pool = $$('.chip');
      const draw = () => {
        $('#placed').innerHTML = placed.map(i => `<button class="chip on" data-p="${i}">${esc(q.options[i])}</button>`).join('') || '<span class="muted">點下面的字卡，排成句子；點上面的字卡可以拿掉</span>';
        pool.forEach(b => b.classList.toggle('used', placed.includes(+b.dataset.i)));
        $$('#placed .chip').forEach(b => b.onclick = () => { if (Q.answered) return; placed = placed.filter(x => x !== +b.dataset.p); draw(); });
      };
      pool.forEach(b => b.onclick = () => { const i = +b.dataset.i; if (Q.answered || placed.includes(i)) return; placed.push(i); draw(); });
      $('#clr').onclick = () => { if (!Q.answered) { placed = []; draw(); } };
      $('#ok').onclick = () => { if (placed.length) answer(q, placed.map(i => q.options[i]).join(' ')); };
      draw();
    }
    if (q.input === 'mic') bindMic(q);
    if (q.input === 'gap') {
      const boxes = $$('.gap-in');
      const filled = () => q.answer.split('').map((c, i) => { const b = boxes.find(x => +x.dataset.p === i); return b ? (b.value.trim().slice(-1) || '_') : c; }).join('');
      const send = () => { const empty = boxes.find(b => !b.value.trim()); if (empty) { empty.focus(); return; } answer(q, filled()); };
      boxes.forEach((b, k) => {
        b.oninput = () => { b.value = b.value.replace(/[^A-Za-z]/g, '').slice(-1); if (b.value && boxes[k + 1]) boxes[k + 1].focus(); };
        b.onkeydown = e => {
          if (e.key === 'Backspace' && !b.value && boxes[k - 1]) { e.preventDefault(); boxes[k - 1].value = ''; boxes[k - 1].focus(); }
          else if (e.key === 'Enter') { e.preventDefault(); send(); }
          else if (e.key === 'ArrowLeft' && boxes[k - 1]) { e.preventDefault(); boxes[k - 1].focus(); }
          else if (e.key === 'ArrowRight' && boxes[k + 1]) { e.preventDefault(); boxes[k + 1].focus(); }
        };
        b.onfocus = () => { try { b.select(); } catch (e) { } };
      });
      $('#ok').onclick = send;
      try { if (boxes[0]) boxes[0].focus({ preventScroll: true }); } catch (e) { }
    }
    if (q.auto) speak(q.speakText);
  }
  function answer(q, input, skipped) {
    if (Q.answered) return;
    Q.answered = true; stopRec();
    const res = skipped ? { ok: false } : E.check(q, input);
    // 說說看：紀錄（會跟著裝置同步）不留辨識出來的原文，只記題目答案（答對）或空白（答錯）
    if (!skipped) record(q, res.ok, q.input === 'mic' ? (res.ok ? q.answer : '') : input);
    // 學習幣（kids-coins.js）：每答一題記進「這一分鐘」；跳過不算作答
    if (window.KidsCoins) skipped ? KidsCoins.activity('english') : KidsCoins.answer(res.ok, 'english');
    Q.answers.push({ q, ok: res.ok, skip: !!skipped, input });
    $$('.opt').forEach(b => { b.disabled = true; if (b.dataset.v === q.answer) b.classList.add('right'); else if (b.dataset.v === input) b.classList.add('wrong'); });
    $$('#ok,#clr,#mic,#skip,.pool .chip,#ans,.gap-in').forEach(x => { x.disabled = true; });
    if (q.input === 'gap' && !skipped) $$('.gap-in').forEach((b, j) => b.classList.add(res.wrong && res.wrong.includes(j) ? 'bad' : 'good'));
    // 練習這組：答錯的題目排回後面（打字題永遠最後），直到答對
    const again = Q.drill && !res.ok && !skipped;
    if (again) Q.list = KE.requeue(Q.list, Q.i, E.get(q.id));
    const last = Q.i === Q.list.length - 1;
    // 打字題答錯：正確答案標出第一個不一樣的字
    const shown = res.diffAt >= 0 ? q.answer.split(/\s+/).map((w, k) => (k === res.diffAt ? `<mark>${esc(w)}</mark>` : esc(w))).join(' ') : esc(q.answer);
    $('#fb').innerHTML = `<div class="fb ${skipped ? 'skip' : res.ok ? 'ok' : 'no'}"><div class="fbh">${skipped ? '⏭️ 先跳過' : res.ok ? (q.input === 'mic' ? '✓ 說對了！太棒了' : '✓ 答對了！太棒了') : '✗ 差一點，再加油！'}</div>
      ${again ? '<div class="again">🔁 再一次！這題等一下會再出現</div>' : ''}
      ${!res.ok ? `<div>正確答案：<b class="say" data-say="${esc(q.speakText || q.answer)}">${shown}</b> 🔊</div>` : ''}
      ${q.input === 'type' && res.ok ? `<button class="btn sm" data-say-btn>🔊 聽英文</button>` : ''}
      ${!res.ok && !skipped && q.input && input ? `<div class="muted">${q.input === 'mic' ? '我聽到的是' : '你的答案'}：${esc(input)}</div>` : ''}
      ${q.input === 'mic' && !skipped && !res.ok ? `<div class="muted">${Q.spk && Q.spk.id === q.id && Q.spk.tries.length >= SPEAK_TRIES ? `試了 ${SPEAK_TRIES} 次，下次再挑戰！` : '跳過算答錯，下次再挑戰！'}</div>` : ''}
      ${res.score != null ? `<div class="muted">唸對了 ${Math.round(res.score * 100)}% 的字（70% 就過關）</div>` : ''}
      ${q.why ? `<div class="why">💡 ${esc(q.why)}</div>` : ''}
      <button class="btn primary big wide" id="next">${last ? '看結果 🎉' : '下一題 ➜'}</button></div>`;
    if (q.speakText && q.type !== 'speak') speak(q.speakText);
    const sb = $('[data-say-btn]'); if (sb) sb.onclick = () => speak(q.speakText);
    $('#next').onclick = () => { Q.i++; Q.answered = false; if (Q.i >= Q.list.length) finish(); else { pQuiz(); window.scrollTo(0, 0); } };
    try { $('#next').scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { }
  }
  function finish() {
    const graded = Q.answers.filter(a => !a.skip), ok = graded.filter(a => a.ok).length, tot = graded.length, pct = tot ? ok / tot : 0;
    const stars = tot ? (pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : 1) : 0;
    S.progress.stars += stars; S.progress.quizzes++; save('ke_progress', S.progress);
    Q.result = { ok, tot, stars, wrong: Q.answers.filter(a => !a.ok && !a.skip).map(a => a.q) };
    if (window.KESync) KESync.now(); // 一回合結束 → 馬上同步
    // 學習幣：一回練習結束就回報（給幾枚、門檻、少於 5 題不給，都由後端決定）
    if (window.KidsCoins && !Q.gate) KidsCoins.report({ type: 'practice_round', item: 'english:' + (Q.drill ? 'drill' : (Q.cfg && Q.cfg.mode) || 'practice'), correct: ok, total: tot });
    if (Q.gate) {
      Q.result.pass = KE.gatePassed(Q.gate, ok);
      if (Q.result.pass) {
        S.learned = KE.setLearned(S.learned, Q.gate.itemId, new Date().toISOString(), `${ok}/${tot}`); save('ke_learned', S.learned);
        if (window.KidsCoins) KidsCoins.report({ type: 'test_' + Q.gate.itemId.split(':')[0], item: Q.gate.itemId, correct: ok, total: tot });
      }
    }
    go('#result');
  }
  const drillLine = () => { const p = E.progress(Q.drill.itemId, S.correct); return `練習 ${p.done}/${p.total} ✓${p.complete ? '（全部答對過了！）' : `，還差 ${p.total - p.done} 題`}`; };
  const wrongList = r => r.wrong.length ? `<section class="card"><h2>答錯過的題目（點一下聽聽看）</h2><ul class="list">${[...new Map(r.wrong.map(q => [q.id, q])).values()].map(q => `<li><span class="badge">${KE.TYPES[q.type]}</span> <span class="say" data-say="${esc(q.speakText || q.answer)}">${esc(q.title)} 🔊</span></li>`).join('')}</ul></section>` : '';
  function pGateResult() {
    const r = Q.result, gt = Q.gate, info = E.itemInfo(gt.itemId), L = S.learned[gt.itemId];
    app.innerHTML = top(r.pass ? '學會了！🎉' : '小測驗結果', gt.back) + (r.pass
      ? `<div class="card center result gate-pass"><div class="party">🎉🏅🎉</div><div class="score">${r.ok} / ${r.tot}</div><p>太棒了！「<b>${esc(info.item)}</b>」標記為已學會</p><p class="muted">✅ ${esc(KE.fmtTaipei(L && L.at))}</p></div><div class="row wrap"><button class="btn primary big" data-go="${esc(gt.back)}">回去繼續學</button></div>`
      : `<div class="card center result"><div class="party">💪</div><div class="score">${r.ok} / ${r.tot}</div><p>差一點！再練練看（要答對 ${gt.need} 題）</p></div>${wrongList(r)}<div class="row wrap"><button class="btn primary big" id="gagain">再試一次</button><button class="btn big" data-go="${esc(gt.back)}">回去複習</button></div>`);
    const a = $('#gagain'); if (a) a.onclick = () => startGate(gt.itemId, gt.back);
  }
  function pDrillResult() {
    const d = Q.drill, p = E.progress(d.itemId, S.correct), info = E.itemInfo(d.itemId);
    app.innerHTML = top('這組練完了', d.back) + `<div class="card center result ${p.complete ? 'gate-pass' : ''}"><div class="party">${p.complete ? '🎉🏅🎉' : '💪'}</div><div class="score">${p.done} / ${p.total}</div>
      <p>「<b>${esc(info.item)}</b>」${p.complete ? '每一題都答對過了！回去按「👍 學會了」吧' : `還差 ${p.total - p.done} 題`}</p></div>${wrongList(Q.result)}
      <div class="row wrap"><button class="btn primary big" data-go="${esc(d.back)}">${p.complete ? '回去按學會了' : '回去學習頁'}</button>${p.complete ? '' : `<button class="btn big" data-drill="${esc(d.itemId)}">繼續練習這組</button>`}</div>`;
  }
  function pResult() {
    if (!Q || !Q.result) return go('#home');
    if (Q.gate) return pGateResult();
    if (Q.drill) return pDrillResult();
    const r = Q.result, msg = r.stars === 3 ? '超級厲害！🏆' : r.stars === 2 ? '做得很好！👍' : '多練幾次會更棒！💪';
    app.innerHTML = top('練習結果') + `<div class="card center result"><div class="stars">${'⭐'.repeat(r.stars)}${'☆'.repeat(3 - r.stars)}</div><div class="score">${r.ok} / ${r.tot}</div><p>${msg}</p>${Q.graduated ? `<p>🎓 有 ${Q.graduated} 題錯題畢業了！</p>` : ''}</div>
      ${wrongList(r)}
      <div class="row wrap"><button class="btn primary big" id="again">再練一次</button>${r.wrong.length ? '<button class="btn big" id="redo">練答錯的題目</button>' : ''}<button class="btn big" data-go="#home">回首頁</button></div>`;
    $('#again').onclick = () => startQuiz(Q.cfg);
    const rd = $('#redo'); if (rd) rd.onclick = () => startQuiz({ ids: r.wrong.map(q => q.id), mode: 'redo' });
  }

  // ---------- 錯題庫 ----------
  function pMistakes() {
    const ids = mistakeIds().sort((a, b) => S.mistakes[b].t - S.mistakes[a].t);
    app.innerHTML = top('錯題庫') + `<div class="card"><p>答錯的題目會來這裡。同一題<b>連續答對 3 次</b>就會畢業離開 🎓</p><button class="btn primary big" id="onlym" ${ids.length ? '' : 'disabled'}>只練錯題（${ids.length} 題）</button></div>
      ${ids.length ? `<ul class="list card">${ids.map(id => { const m = E.byId[id], s = S.mistakes[id]; return `<li><span class="badge">${KE.TYPES[m.type]}</span> <span>${esc(m.title)}</span> <span class="dots">${'●'.repeat(s.c)}${'○'.repeat(3 - s.c)}</span> <small class="muted">錯 ${s.w} 次</small></li>`; }).join('')}</ul>` : '<p class="center muted">太棒了，目前沒有錯題！🎉</p>'}`;
    $('#onlym').onclick = () => startQuiz({ ids, count: 30, mode: 'mistakes' });
  }

  // ---------- 例題庫 ----------
  const BF = { m: '', k: '', y: '' };
  function pBank() {
    const mods = Object.keys(KE.MODULES);
    const types = Object.keys(KE.TYPES).filter(y => (canSpeak || y !== 'speak') && !KE.SET_ONLY_TYPES.includes(y));
    app.innerHTML = top('例題庫') + `<div class="filters"><select id="bm" aria-label="單元"><option value="">全部單元</option>${mods.map(m => `<option value="${m}">${KE.MODULES[m]}</option>`).join('')}</select><select id="bk" aria-label="主題"></select><select id="by" aria-label="題型"><option value="">全部題型</option>${types.map(y => `<option value="${y}">${KE.TYPES[y]}</option>`).join('')}</select><button class="btn primary" id="bgo">🎯 練這些</button></div><p class="muted" id="bn"></p><ul class="list card" id="bl"></ul>`;
    const pick = () => E.list({ modules: BF.m ? [BF.m] : null, topics: BF.k ? [BF.k] : null, types: BF.y ? [BF.y] : null, allowSpeak: canSpeak });
    const draw = () => {
      const tops = BF.m ? E.topics(BF.m) : [];
      $('#bk').innerHTML = `<option value="">全部主題</option>` + tops.map(t => `<option value="${esc(t.key)}">${esc(t.label)}</option>`).join('');
      $('#bk').value = BF.k; $('#bk').disabled = !BF.m;
      const L = pick(), show = L.slice(0, 200);
      $('#bn').textContent = `共 ${L.length} 題` + (L.length > 200 ? '（先列出前 200 題）' : '');
      $('#bl').innerHTML = show.map(m => `<li><span class="badge">${KE.TYPES[m.type]}</span> <span>${esc(m.title)}</span> <small class="muted">${esc(E.topicLabel(m.tkey))}</small></li>`).join('');
    };
    $('#bm').value = BF.m; $('#by').value = BF.y;
    $('#bm').onchange = e => { BF.m = e.target.value; BF.k = ''; draw(); };
    $('#bk').onchange = e => { BF.k = e.target.value; draw(); };
    $('#by').onchange = e => { BF.y = e.target.value; draw(); };
    $('#bgo').onclick = () => startQuiz({ ids: pick().map(m => m.id), count: 30, mode: 'bank' });
    draw();
  }

  // ---------- 家長 ----------
  const PS = { k: 'acc', d: 1 }, PL = { k: 'at', d: -1 };
  // 可排序表格：cols=[{k,t,f}]，st={k,d} 記住目前排序
  function sortTable(el, cols, rows, st) {
    const draw = () => {
      const s = rows.slice().sort((a, b) => { const x = a[st.k], y = b[st.k]; return (typeof x === 'string' ? x.localeCompare(y, 'zh-Hant') : x - y) * st.d; });
      el.innerHTML = `<thead><tr>${cols.map(c => `<th data-k="${c.k}">${c.t}${c.k === st.k ? (st.d > 0 ? ' ▲' : ' ▼') : ''}</th>`).join('')}</tr></thead><tbody>${s.length ? s.map(r => `<tr>${cols.map(c => `<td>${esc(c.f ? c.f(r[c.k]) : r[c.k])}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${cols.length}" class="muted">還沒有紀錄</td></tr>`}</tbody>`;
      $$('th', el).forEach(th => th.onclick = () => { st.d = st.k === th.dataset.k ? -st.d : 1; st.k = th.dataset.k; draw(); });
    };
    draw();
  }
  // ---------- 裝置同步（家長頁）----------
  function syncCard() {
    const P = window.KESync; if (!P) return '';
    // 已登入：同步碼跟著帳號走（不顯示碼、不用手動配對）；手動同步碼只給沒登入時用
    const A = window.KidsAuth;
    if (A && A.isLoggedIn && A.isLoggedIn()) return `<section class="card sync-card"><h2>☁️ 裝置同步（iPad ↔ 電腦）</h2><p><b>已改用帳號自動同步</b>：同一個帳號登入的 iPad、電腦，紀錄會自動合併。</p><div class="row wrap"><button class="btn primary" id="snow">🔄 立即同步</button><a class="btn" href="account.html">帳號頁</a></div>
      <p class="sync-status">${esc(P.statusText())}</p>
      <p class="muted">會同步：作答紀錄、學會紀錄、錯題庫；語音速度等設定每台各自保存。登出後這台就不再同步（紀錄會留在這台）。</p></section>`;
    const code = P.code();
    return `<section class="card sync-card"><h2>☁️ 裝置同步（iPad ↔ 電腦）</h2>${code
      ? `<p>這台已開啟同步，同步碼：<b class="sync-code">${esc(code)}</b></p><div class="row wrap"><button class="btn" id="scopy">📋 複製同步碼</button><button class="btn" id="sshare">🔗 傳送同步連結</button><button class="btn primary" id="snow">🔄 立即同步</button><button class="btn danger" id="soff">取消同步</button></div>`
      : `<p>在第一台按「產生同步碼」，再到另一台輸入同一組同步碼（或打開同步連結），兩台的紀錄就會自動合在一起。</p><div class="row wrap"><button class="btn primary" id="sgen">產生同步碼</button></div>
        <div class="row wrap"><input id="scode" class="code-in" placeholder="輸入同步碼 ABCD-EFGH" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false" aria-label="輸入同步碼"><button class="btn" id="spair">連線</button></div>`}
      <p class="sync-status">${esc(P.statusText())}</p>
      <p class="muted">會同步：作答紀錄、學會紀錄、錯題庫；語音速度等設定每台各自保存。⚠️ 拿到同步碼的人都看得到練習紀錄（只有練習資料，沒有姓名等個人資料），請不要公開分享。</p></section>`;
  }
  function bindSync() {
    const P = window.KESync; if (!P) return;
    const b = id => $('#' + id), fail = e => alert((e && e.message && !/^HTTP|fetch/i.test(e.message) ? e.message : '連不上同步伺服器，請確認網路後再試一次'));
    if (b('sgen')) b('sgen').onclick = () => { b('sgen').disabled = true; P.generate().then(() => render(), e => { b('sgen').disabled = false; fail(e); }); };
    if (b('spair')) b('spair').onclick = async () => {
      const v = b('scode').value;
      try {
        const c = await P.check(v);
        if (!confirm(`要把這台裝置跟同步碼 ${c} 連在一起嗎？\n兩台的作答紀錄、學會紀錄和錯題會合併在一起（不會刪掉這台的紀錄）。`)) return;
        await P.pair(c); render();
      } catch (e) { fail(e); }
    };
    if (b('scode')) b('scode').onkeydown = e => { if (e.key === 'Enter') b('spair').click(); };
    const copy = text => { try { navigator.clipboard.writeText(text).then(() => alert('已複製：' + text), () => prompt('請長按複製：', text)); } catch (e) { prompt('請長按複製：', text); } };
    if (b('scopy')) b('scopy').onclick = () => copy(P.code());
    if (b('sshare')) b('sshare').onclick = () => {
      const url = P.link(P.code());
      if (navigator.share) navigator.share({ title: '小朋友學習站 · 同步連結', text: `在另一台裝置打開這個連結，就會跟這台同步（同步碼 ${P.code()}）`, url }).catch(err => { if (!err || err.name !== 'AbortError') copy(url); });
      else copy(url);
    };
    if (b('snow')) b('snow').onclick = () => (P.uploadNow ? P.uploadNow() : P.syncNow());
    if (b('soff')) b('soff').onclick = () => { if (confirm('要取消這台的同步嗎？這台的紀錄會留著，只是不再跟別台同步。')) { P.unpair(); render(); } };
  }
  // 同步把別台的紀錄合進來後：重新讀取，畫面停在原位（作答中不重畫）
  window.KEApp = {
    reload() { loadAll(); if (/^#quiz/.test(location.hash)) return; const y = window.scrollY; render(); window.scrollTo(0, y); },
    render() { const y = window.scrollY; render(); window.scrollTo(0, y); }
  };
  // 🎤 說說看：說明（不需要同意；要關麥克風請用 iPad 設定）
  function speakCard() {
    return `<section class="card" id="spcard"><h2>🎤 說說看（麥克風）</h2><p>${SPEAK_NOTE}</p><p class="muted">單字、片語、文法、句型的「練習這組」都有說說看題。${MIC_ALLOW}不想用麥克風，可以到 iPad「設定」→「Safari」→「麥克風」關掉。</p>${canSpeak ? '' : `<p class="muted">${NO_SPEAK_MSG}；練習這組的說說看題可以先跳過，不算進「學會了」。</p>`}</section>`;
  }
  function pParent() {
    const days = [];
    for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push(ymd(d)); }
    const cnt = {}, per = {};
    S.log.forEach(l => {
      const k = ymd(new Date(l.t)); cnt[k] = (cnt[k] || 0) + 1;
      const p = per[l.k] || (per[l.k] = { k: l.k, n: 0, ok: 0 }); p.n++; p.ok += l.ok;
    });
    // 壓縮過的舊紀錄（每題一筆）也算進各主題
    const agg = S.agg.agg || {};
    Object.keys(agg).forEach(id => { const m = E.byId[id]; if (!m) return; const p = per[m.tkey] || (per[m.tkey] = { k: m.tkey, n: 0, ok: 0 }); p.n += agg[id].n || 0; p.ok += agg[id].k || 0; });
    const mx = Math.max(1, ...days.map(d => cnt[d] || 0));
    const rows = Object.values(per).map(p => ({ label: E.topicLabel(p.k), mod: KE.MODULES[p.k.split(':')[0]] || '', n: p.n, ok: p.ok, acc: p.ok / p.n }));
    const weak = rows.filter(r => r.n >= 3).sort((a, b) => a.acc - b.acc).slice(0, 5);
    const pct = x => Math.round(x * 100) + '%';
    app.innerHTML = top('家長專區') + `
      <section class="card"><h2>最近 7 天做題數</h2><div class="week">${days.map(d => `<div class="day"><div class="col"><i style="height:${(cnt[d] || 0) / mx * 100}%"></i></div><b>${cnt[d] || 0}</b><small>${d.slice(5)}</small></div>`).join('')}</div>
        <p class="muted">累計 ${S.log.length} 題・完成 ${S.progress.quizzes} 回練習・⭐ ${S.progress.stars}・錯題庫 ${mistakeIds().length} 題</p></section>
      <section class="card"><h2>最需要加強的 5 個主題</h2>${weak.length ? `<ol>${weak.map(r => `<li>${esc(r.label)}（${esc(r.mod)}）— 正確率 ${pct(r.acc)}，做了 ${r.n} 題</li>`).join('')}</ol>` : '<p class="muted">每個主題做滿 3 題後就會出現。</p>'}</section>
      <section class="card"><h2>各主題正確率（點標題排序）</h2><div class="tblwrap"><table class="tbl" id="tt"></table></div></section>
      <section class="card"><h2>學會紀錄（${E.learnedRows(S.learned).length} 項，點標題排序）</h2><div class="tblwrap"><table class="tbl" id="lt"></table></div></section>
      ${syncCard()}
      ${window.KSParentPin ? KSParentPin.cardHtml() : ''}
      ${speakCard()}
      ${voiceCard()}
      <section class="card"><h2>備份與重設</h2><div class="row wrap"><button class="btn" id="exp">📤 匯出備份</button><label class="btn">📥 匯入備份<input type="file" id="imp" accept=".json,application/json" hidden></label><button class="btn danger" id="rst">🗑️ 清除全部紀錄</button></div><p class="muted">紀錄只存在這台裝置的瀏覽器裡；換裝置前先匯出備份。</p></section>`;
    bindVoice(); bindSync(); if (window.KSParentPin) KSParentPin.bindCard(render);
    sortTable($('#tt'), [{ k: 'label', t: '主題' }, { k: 'mod', t: '單元' }, { k: 'n', t: '題數' }, { k: 'ok', t: '答對' }, { k: 'acc', t: '正確率', f: pct }], rows, PS);
    sortTable($('#lt'), [{ k: 'item', t: '項目' }, { k: 'type', t: '類型' }, { k: 'at', t: '學會時間（台北）', f: x => KE.fmtTaipei(x, true) }, { k: 'score', t: '分數' }], E.learnedRows(S.learned), PL);
    $('#exp').onclick = () => {
      const data = { app: 'kids-english', at: new Date().toISOString() };
      KEYS.forEach(k => { data[k] = load(k, null); });
      try {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' }));
        a.download = `kids-english-backup-${ymd(new Date()).replace(/-/g, '')}.json`;
        document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      } catch (e) { alert('匯出失敗：' + e.message); }
    };
    $('#imp').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const data = JSON.parse(rd.result);
          if (!KEYS.some(k => k in data)) throw new Error('不是這個網站的備份檔');
          if (!confirm('匯入會覆蓋目前的紀錄，確定嗎？')) return;
          KEYS.forEach(k => { if (data[k] != null) save(k, data[k]); });
          loadAll(); alert('匯入完成！'); render();
        } catch (err) { alert('匯入失敗：' + err.message); }
      };
      rd.readAsText(f);
    };
    $('#rst').onclick = () => {
      if (!confirm('確定要清除全部紀錄（星星、錯題、做題紀錄、學會紀錄、設定）嗎？這個動作不能復原。' + (window.KESync && KESync.code() ? '\n\n⚠️ 這台還開著裝置同步，別台的紀錄會再同步回來；要全部清掉，請先按「取消同步」。' : ''))) return;
      KEYS.forEach(k => { try { localStorage.removeItem(k); } catch (e) { } });
      loadAll(); render();
    };
  }

  render();
})();
