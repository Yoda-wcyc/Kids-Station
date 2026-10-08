/* game.js — 勇者島 DEMO。
   上半部 L＝純邏輯（不碰 DOM，Node 測試 test.js 用）；下半部＝畫面（只在瀏覽器跑）。
   存檔一律 localStorage 前綴 hi_（hi_save / hi_timer / hi_parent），不碰學習站其他鍵。 */
(function (root) {
  'use strict';
  const L = {};
  const clone = o => JSON.parse(JSON.stringify(o));
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // ===================== 純邏輯 =====================
  L.mulberry32 = function (seed) {
    let a = seed >>> 0;
    return function () { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  };
  let DTF = null;
  L.taipeiDay = function (d) {
    d = d || new Date();
    try {
      DTF = DTF || new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit' });
      const p = {}; DTF.formatToParts(d).forEach(x => { p[x.type] = x.value; });
      return `${p.year}-${p.month}-${p.day}`;
    } catch (e) { return new Date(d.getTime() + 8 * 3600e3).toISOString().slice(0, 10); }
  };

  // ---- 職業：每個職業練不同單元（題目來自學習站 engine.js） ----
  L.CLASSES = {
    mage: { name: '法師', en: 'MAGE', skill: '單字', line: '抱著一本超大的字典。打字題的魔法最痛！', quiz: { modules: ['words'], lv: 1, types: ['zh2en', 'en2zh', 'zh2en-type'] } },
    sword: { name: '劍士', en: 'SWORDSMAN', skill: '文法', line: '拖著一把大劍。文法句子砍得最準！', quiz: { modules: ['grammar'], types: ['grammar-fill', 'grammar-fix'] } },
    archer: { name: '射手', en: 'ARCHER', skill: '聽力', line: '靠著一把高高的弓。耳朵最靈，聽音就射中！', quiz: { modules: ['words'], lv: 1, types: ['listen-choose'] } },
    guard: { name: '守護者', en: 'GUARDIAN', skill: '句型', line: '躲在大盾牌後面。句型排得穩，誰都打不倒！', quiz: { modules: ['patterns'], types: ['pattern-choose', 'reorder'], patLv: 1 } }
  };
  L.FALLBACK_QUIZ = { modules: ['words'], lv: 1, types: ['zh2en', 'en2zh', 'listen-choose'] };

  // ---- 戰鬥 ----
  L.BASE_DMG = 10; L.PLAYER_HP = 100; L.HIT_BACK = 12;
  L.comboNext = (combo, ok) => ok ? combo + 1 : 0;
  // o: {combo（含這題）, typed, cls, sword（木劍）, double（雙倍）}；打字題法師 ×1.8、其他職業 ×1.3；連擊 ≥3 暴擊 ×1.5
  L.damage = function (o) {
    o = o || {};
    let m = 1;
    if (o.typed) m *= (o.cls === 'mage' ? 1.8 : 1.3);
    const crit = (o.combo || 0) >= 3;
    if (crit) m *= 1.5;
    if (o.sword) m *= 1.05;
    if (o.double) m *= 2;
    return { dmg: Math.round(L.BASE_DMG * m), crit };
  };
  L.FOREST = [
    { id: 'f1', name: '葉子怪', kind: 'leaf', hp: 30, x: 190 },
    { id: 'f2', name: '蘑菇怪', kind: 'mush', hp: 30, x: 430 },
    { id: 'f3', name: '石頭怪', kind: 'rock', hp: 40, x: 650 },
    { id: 'boss', name: '森林巨木王', kind: 'boss', boss: true, x: 850 }
  ];
  L.BOSS_Q = 5; L.BOSS_NEED = 4;
  L.nodeStatus = function (s, i) {
    const n = L.FOREST[i];
    if (s.defeated && s.defeated[n.id]) return 'done';
    return (i === 0 || (s.defeated && s.defeated[L.FOREST[i - 1].id])) ? 'open' : 'locked';
  };
  L.bossOutcome = (correct, asked) => correct >= L.BOSS_NEED ? 'win' : (asked - correct) > (L.BOSS_Q - L.BOSS_NEED) ? 'lose' : 'continue';

  // ---- 掉落：木頭一定有、石頭有時候、鑽石 3%（Boss 石頭保底） ----
  L.DIAMOND_RATE = 0.03; L.STONE_RATE = 0.35;
  L.rollDrop = function (rng, tier) {
    const boss = tier === 'boss';
    const wood = (boss ? 4 : 2) + Math.floor(rng() * 3);
    const sr = rng(), sn = rng();
    const stone = boss ? 2 + Math.floor(sn * 2) : (sr < L.STONE_RATE ? 1 + Math.floor(sn * 2) : 0);
    const diamond = rng() < L.DIAMOND_RATE ? 1 : 0;
    return { wood, stone, diamond };
  };

  // ---- 合成台 ----
  L.RECIPES = [
    { id: 'sword', name: '木劍', icon: 'sword', cost: { wood: 4 }, desc: '冒險傷害 +5%', once: true },
    { id: 'pick', name: '石鎬', icon: 'pick', cost: { wood: 2, stone: 3 }, desc: '挖開下一張地圖「字根洞窟」', once: true },
    { id: 'lamp', name: '路燈', icon: 'lampi', cost: { wood: 1, stone: 2 }, desc: '放在島上，晚上會發光', lock: 'un', lockText: '學會 un- 字根才解鎖' }
  ];
  L.canAfford = (w, cost) => Object.keys(cost).every(k => (w[k] || 0) >= cost[k]);
  L.craftCheck = function (s, id) {
    const r = L.RECIPES.find(x => x.id === id);
    if (!r) return { ok: false, reason: '沒有這個配方' };
    if (r.lock && !(s.learned || {})[r.lock]) return { ok: false, locked: true, reason: r.lockText };
    if (r.once && (s.items || {})[id]) return { ok: false, done: true, reason: '已經做好了' };
    if (!L.canAfford(s.mats, r.cost)) return { ok: false, reason: '材料不夠' };
    return { ok: true };
  };
  L.craft = function (s, id) {
    const c = L.craftCheck(s, id);
    if (!c.ok) return Object.assign({ s }, c);
    const r = L.RECIPES.find(x => x.id === id), n = clone(s);
    Object.keys(r.cost).forEach(k => { n.mats[k] -= r.cost[k]; });
    n.items[id] = (n.items[id] || 0) + 1;
    return { ok: true, s: n };
  };

  // ---- 島：8×6 方格 ----
  L.GRID_W = 8; L.GRID_H = 6;
  L.TILES = [
    { id: 'grass', name: '草地', cost: {} },
    { id: 'path', name: '小路', cost: { stone: 1 } },
    { id: 'fence', name: '籬笆', cost: { wood: 1 } },
    { id: 'tree', name: '樹', cost: { wood: 2 } },
    { id: 'house', name: '房子', cost: { wood: 6, stone: 4 } },
    { id: 'lamp', name: '路燈', cost: { lamp: 1 } }
  ];
  L.wallet = s => Object.assign({}, s.mats, { lamp: (s.items && s.items.lamp) || 0 });
  L.placeTile = function (s, i, id) {
    const t = L.TILES.find(x => x.id === id);
    if (!t) return { ok: false, reason: '沒有這種方塊', s };
    if (i < 0 || i >= L.GRID_W * L.GRID_H) return { ok: false, reason: '格子不存在', s };
    if (s.grid[i]) return { ok: false, reason: '這格已經有東西了', s };
    if (!L.canAfford(L.wallet(s), t.cost)) return { ok: false, reason: id === 'lamp' ? '先到合成台做路燈' : '材料不夠', s };
    const n = clone(s);
    Object.keys(t.cost).forEach(k => { if (k === 'lamp') n.items.lamp -= t.cost[k]; else n.mats[k] -= t.cost[k]; });
    n.grid[i] = id;
    return { ok: true, s: n };
  };
  // 拆掉退回材料；一開始送的（free）不退，避免拆了賺材料
  L.removeTile = function (s, i) {
    const id = s.grid[i];
    if (!id) return { ok: false, s };
    const t = L.TILES.find(x => x.id === id), n = clone(s), free = (n.free || []).includes(i);
    if (!free && t) Object.keys(t.cost).forEach(k => { if (k === 'lamp') n.items.lamp = (n.items.lamp || 0) + t.cost[k]; else n.mats[k] = (n.mats[k] || 0) + t.cost[k]; });
    n.grid[i] = null; n.free = (n.free || []).filter(x => x !== i);
    return { ok: true, s: n, id, refunded: !free };
  };
  L.initGrid = function () {
    const g = new Array(L.GRID_W * L.GRID_H).fill(null);
    g[19] = 'house'; [10, 11, 12, 18, 20, 26, 28].forEach(i => { g[i] = 'grass'; }); g[27] = 'path'; g[35] = 'path';
    return g;
  };

  // ---- 競技場：非同步影子對戰（平衡模式：裝備不算） ----
  L.SHADOW = { name: '勇敢的藍色海豚', tier: '鐵劍段位', acc: 0.7, speed: 6.5 };
  L.ARENA_Q = 7; L.ARENA_TIME = 12; L.GOLD_PER = 10;
  L.SHOP = [{ id: 'time', name: '+5 秒時間', cost: 20 }, { id: 'hint', name: '顯示提示', cost: 20 }, { id: 'double', name: '下一題雙倍傷害', cost: 30 }];
  L.newMatch = () => ({ gold: 0, i: 0, combo: 0, maxCombo: 0, dmg: 0, correct: 0, times: [], double: false, dblNext: false });
  L.arenaStartQ = m => m.dblNext ? Object.assign({}, m, { double: true, dblNext: false }) : m;
  L.arenaAnswer = function (m, ok, t, o) {
    o = o || {};
    const n = Object.assign({}, m, { times: m.times.concat([t]), i: m.i + 1, combo: ok ? m.combo + 1 : 0 });
    n.maxCombo = Math.max(m.maxCombo, n.combo);
    let d = 0;
    if (ok) { n.gold += L.GOLD_PER; n.correct++; d = L.damage({ combo: n.combo, typed: o.typed, cls: o.cls, double: m.double }).dmg; n.dmg += d; }
    n.double = false; n.last = d;
    return n;
  };
  L.buy = function (m, id) {
    const it = L.SHOP.find(x => x.id === id);
    if (!it) return { ok: false, reason: '沒有這個東西', m };
    if (id === 'double' && (m.dblNext || m.double)) return { ok: false, reason: '已經買了', m };
    if (m.gold < it.cost) return { ok: false, reason: '局內金幣不夠', m };
    const n = Object.assign({}, m, { gold: m.gold - it.cost });
    if (id === 'double') n.dblNext = true;
    return { ok: true, m: n };
  };
  L.simShadow = function (rng, sh, n) {
    const steps = []; let combo = 0, dmg = 0, correct = 0;
    for (let i = 0; i < n; i++) {
      const ok = rng() < sh.acc, t = Math.round(clamp(sh.speed + (rng() - 0.5) * 4, 2, L.ARENA_TIME) * 10) / 10;
      combo = ok ? combo + 1 : 0;
      const d = ok ? L.damage({ combo }).dmg : 0;
      dmg += d; if (ok) correct++;
      steps.push({ ok, t, d, total: dmg });
    }
    return { steps, dmg, correct };
  };
  L.arenaResult = function (m, sim) {
    const pAvg = avg(m.times), sAvg = avg(sim.steps.map(x => x.t));
    const win = m.dmg > sim.dmg || (m.dmg === sim.dmg && m.dmg > 0 && pAvg < sAvg);
    const acc = m.correct / L.ARENA_Q, speed = clamp((L.ARENA_TIME - pAvg) / (L.ARENA_TIME - 2), 0, 1);
    const mvp = Math.round((acc * 7 + speed * 2 + Math.min(1, m.maxCombo / 3)) * 10) / 10;
    return { win, mvp, pAvg: Math.round(pAvg * 10) / 10, sAvg: Math.round(sAvg * 10) / 10, acc };
  };
  L.TIERS = ['鐵劍', '銅劍', '銀劍', '金劍'];
  // 段位：贏 +1 星（滿 3 星再贏升段）；輸：第一次有保星卡不掉星
  L.rankAfter = function (r, win) {
    const n = Object.assign({ tier: 0, stars: 1, protectUsed: false }, r); let note = '';
    if (win) {
      if (n.stars >= 3 && n.tier < L.TIERS.length - 1) { n.tier++; n.stars = 1; note = `升段！${L.TIERS[n.tier]}段位`; }
      else { n.stars = Math.min(3, n.stars + 1); note = '+1 顆星'; }
    } else if (!n.protectUsed) { n.protectUsed = true; note = '保星卡發動：這次星星不會掉！'; }
    else { const had = n.stars; n.stars = Math.max(0, n.stars - 1); note = had ? '-1 顆星' : '星星已經是 0，不會再掉'; }
    return { r: n, note };
  };
  L.arenaReward = function (win, firstWinDay, today) {
    const first = !!win && firstWinDay !== today, mult = first ? 2 : 1;
    const b = win ? { xp: 20, wood: 2 } : { xp: 8, wood: 1 };
    return { xp: b.xp * mult, wood: b.wood * mult, first };
  };

  // ---- 遊玩時間：未付費 10 分／付費會員 60 分（家長可用密碼延長當天） ----
  L.PLANS = { free: { name: '未付費', min: 10 }, paid: { name: '付費會員', min: 60 } };
  L.timerLoad = function (st, today) {
    const plan = st && L.PLANS[st.plan] ? st.plan : 'free';
    if (!st || st.day !== today) return { day: today, plan, used: 0, ext: 0, inf: false };
    return { day: st.day, plan, used: Math.max(0, +st.used || 0), ext: Math.max(0, +st.ext || 0), inf: !!st.inf };
  };
  L.timerSetPlan = (st, plan) => Object.assign({}, st, { plan: L.PLANS[plan] ? plan : st.plan });
  L.timerLimit = st => (st.plan === 'paid' && st.inf) ? Infinity : L.PLANS[st.plan].min * 60 + (st.plan === 'paid' ? st.ext : 0);
  L.timerLeft = st => Math.max(0, L.timerLimit(st) - st.used);
  L.timerTick = function (st, sec, active) {
    if (!active) return st;
    const left = L.timerLeft(st);
    if (left <= 0) return st;
    return Object.assign({}, st, { used: st.used + Math.min(sec, left) });
  };
  L.EXT_OPTIONS = [10, 30, 60, 'inf'];
  L.timerExtend = function (st, opt) {
    if (st.plan !== 'paid') return { ok: false, reason: '只有付費會員可以延長', st };
    if (!L.EXT_OPTIONS.includes(opt)) return { ok: false, reason: '沒有這個選項', st };
    return { ok: true, st: opt === 'inf' ? Object.assign({}, st, { inf: true }) : Object.assign({}, st, { ext: st.ext + opt * 60 }) };
  };
  L.logExtension = (log, date, minutes, at) => (log || []).concat([{ date, minutes, at }]).slice(-50);
  L.fmtClock = s => { s = Math.max(0, Math.floor(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };

  // ---- 家長密碼：雜湊存在全站共用的 ks_parent_pin（../../parent-pin.js，家長頁也讀寫同一個鍵）；
  //      這裡只管「錯 3 次冷卻 1 分鐘」與延長紀錄（hi_parent = {fails, lockUntil, log}，不含密碼） ----
  const PIN = root.KSParentPin || (typeof require === 'function' ? require('../../parent-pin.js') : null);
  L.PIN = PIN;
  L.PIN_MAX_FAILS = 3; L.PIN_COOLDOWN = 60000;
  L.newParent = () => ({ fails: 0, lockUntil: 0, log: [] });
  L.pinCheck = function (parent, pin, now, store) {
    const p = Object.assign(L.newParent(), parent);
    if (p.lockUntil > now) return { ok: false, cooldown: Math.ceil((p.lockUntil - now) / 1000), parent: p };
    if (PIN.verify(pin, store)) return { ok: true, parent: Object.assign(p, { fails: 0, lockUntil: 0 }) };
    p.fails++;
    if (p.fails >= L.PIN_MAX_FAILS) { p.fails = 0; p.lockUntil = now + L.PIN_COOLDOWN; return { ok: false, cooldown: L.PIN_COOLDOWN / 1000, parent: p }; }
    return { ok: false, left: L.PIN_MAX_FAILS - p.fails, parent: p };
  };
  L.pinChange = function (parent, oldPin, n1, n2, now, store) {
    const c = L.pinCheck(parent, oldPin, now, store);
    if (!c.ok) return Object.assign({ reason: '舊密碼不對' }, c);
    return Object.assign({ parent: c.parent }, PIN.set(n1, n2, store));
  };

  // ---- 等級、任務、存檔 ----
  L.xpNeed = lv => 40 + 20 * (lv - 1);
  L.addXp = function (p, n) { let lv = p.lv, xp = p.xp + n, ups = 0; while (xp >= L.xpNeed(lv)) { xp -= L.xpNeed(lv); lv++; ups++; } return { lv, xp, ups }; };
  L.MISSIONS = [{ id: 'correct', name: '答對 10 題', goal: 10 }, { id: 'wins', name: '打倒 3 隻怪物', goal: 3 }, { id: 'build', name: '在島上蓋 2 個東西', goal: 2 }];
  L.MISSION_REWARD = { wood: 3, stone: 1 };
  L.missionsFor = (ms, today) => (!ms || ms.day !== today) ? { day: today, correct: 0, wins: 0, build: 0, claimed: {} } : ms;
  L.BADGES = [{ id: 'boss', name: '第一次打倒 Boss' }, { id: 'diamond', name: '第一顆鑽石' }, { id: 'combo3', name: '連續答對 3 題' }];
  L.newSave = () => ({
    v: 1, cls: null, lv: 1, xp: 0, mats: { wood: 4, stone: 2, diamond: 0 }, items: { sword: 0, pick: 0, lamp: 0 }, learned: {},
    grid: L.initGrid(), free: [10, 11, 12, 18, 19, 20, 26, 27, 28, 35], mastery: { mage: 0, sword: 0, archer: 0, guard: 0 },
    mistakes: [], badges: {}, defeated: {}, missions: null, rank: { tier: 0, stars: 1, protectUsed: false }, firstWinDay: ''
  });

  if (typeof module !== 'undefined' && module.exports) module.exports = L;
  root.HILogic = L;
  if (typeof document === 'undefined') return;

  // ===================== 畫面 =====================
  const A = root.HIArt, KE = root.KE;
  const $ = (q, el) => (el || document).querySelector(q);
  function h(tag, at) {
    const e = document.createElement(tag);
    for (const k in (at || {})) {
      const v = at[k];
      if (v === false || v == null) continue;
      if (k === 'class') e.className = v; else if (k === 'html') e.innerHTML = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : v);
    }
    const add = c => { if (c == null || c === false) return; if (Array.isArray(c)) c.forEach(add); else e.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c))); };
    for (let i = 2; i < arguments.length; i++) add(arguments[i]);
    return e;
  }
  const LS = {
    get(k, d) { try { const v = localStorage.getItem('hi_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('hi_' + k, JSON.stringify(v)); } catch (e) { /* 私密模式 */ } },
    del(k) { try { localStorage.removeItem('hi_' + k); } catch (e) { /* */ } }
  };
  const today = () => L.taipeiDay();
  function loadSave() {
    const d = L.newSave(), s = LS.get('save', null);
    if (!s || s.v !== 1) return d;
    Object.keys(d).forEach(k => { if (s[k] === undefined) s[k] = d[k]; });
    ['mats', 'items', 'mastery', 'rank'].forEach(k => { s[k] = Object.assign({}, d[k], s[k]); });
    if (!Array.isArray(s.grid) || s.grid.length !== 48) s.grid = d.grid;
    return s;
  }
  let S = loadSave(), T = L.timerLoad(LS.get('timer', null), today()), P = Object.assign(L.newParent(), LS.get('parent', {}));
  const saveS = () => LS.set('save', S), saveT = () => LS.set('timer', T), saveP = () => LS.set('parent', P);
  saveT();
  const missions = () => (S.missions = L.missionsFor(S.missions, today()));

  // ---- 題目（學習站 engine.js） ----
  let E = null;
  try { if (KE && root.DATA_WORDS) E = new KE.Engine({ words: root.DATA_WORDS || [], phrases: root.DATA_PHRASES || [], roots: root.DATA_ROOTS || [], grammar: root.DATA_GRAMMAR || [], patterns: root.DATA_PATTERNS || [] }); }
  catch (e) { console.warn('engine', e); }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const SAMPLE = [
    { id: 's:1', type: 'zh2en', prompt: '蘋果', options: ['apple', 'banana', 'cat', 'dog'], answer: 'apple', speakText: 'apple', why: 'apple ＝ 蘋果' },
    { id: 's:2', type: 'en2zh', prompt: 'book', en: true, options: ['書', '筆', '桌子', '門'], answer: '書', speakText: 'book', why: 'book ＝ 書' },
    { id: 's:3', type: 'zh2en', prompt: '狗', options: ['dog', 'pig', 'cow', 'hen'], answer: 'dog', speakText: 'dog', why: 'dog ＝ 狗' }
  ];
  function sampleQs(n) {
    if (E) { const qs = E.buildQuiz({ modules: ['words'], lv: 1, types: ['zh2en', 'en2zh'], count: n }); if (qs.length) return qs; }
    return shuffle(SAMPLE).slice(0, n).map(q => Object.assign({}, q, { options: shuffle(q.options) }));
  }
  function quizFor(cls, n) {
    const c = L.CLASSES[cls] || L.CLASSES.mage, cfg = Object.assign({ count: n }, c.quiz);
    delete cfg.patLv;
    if (c.quiz.patLv && E) cfg.topics = E.D.patterns.filter(p => (p.lv || 2) === c.quiz.patLv).map(p => 'patterns:' + p.id);
    let qs = E ? E.buildQuiz(cfg) : [];
    if (qs.length < n && E) qs = qs.concat(E.buildQuiz(Object.assign({ count: n - qs.length }, L.FALLBACK_QUIZ)));
    if (!qs.length) qs = sampleQs(Math.min(n, 3));
    return qs.slice(0, n);
  }
  const checkQ = (q, input) => (E && !/^s:/.test(q.id)) ? E.check(q, input) : { ok: input === q.answer };
  const isTyped = q => q.input === 'type';
  function addMistake(q) { if (!q.id || /^s:/.test(q.id)) return; S.mistakes = [q.id].concat(S.mistakes.filter(x => x !== q.id)).slice(0, 20); }

  // ---- 發音 ----
  let voice = null;
  function pickVoice() { try { const vs = speechSynthesis.getVoices(); voice = vs.find(v => /^en[-_]US/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null; } catch (e) { /* */ } }
  if ('speechSynthesis' in root) { pickVoice(); try { speechSynthesis.addEventListener('voiceschanged', pickVoice); } catch (e) { /* */ } }
  function speak(t, vol) {
    try {
      if (!('speechSynthesis' in root) || !t) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(t); u.lang = 'en-US'; u.rate = 0.9; if (voice) u.voice = voice; if (vol != null) u.volume = vol;
      speechSynthesis.speak(u);
    } catch (e) { /* */ }
  }

  // ---- 小效果 ----
  function toast(msg, kind) {
    const t = h('div', { class: 'toast ' + (kind || '') }, msg);
    $('#toasts').append(t);
    requestAnimationFrame(() => t.classList.add('on'));
    setTimeout(() => { t.classList.remove('on'); setTimeout(() => t.remove(), 400); }, 2200);
  }
  function announce(text, big) {
    const a = $('#announce'); a.textContent = text; a.className = big ? 'big' : '';
    void a.offsetWidth; a.classList.add('go');
  }
  function anim(el, cls) { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function flash() { anim($('#flash'), 'go'); }
  function floatText(parent, text, cls, x, y) {
    const d = h('div', { class: 'float ' + cls, style: `left:${x}%;top:${y}%` }, text);
    parent.append(d); setTimeout(() => d.remove(), 1100);
  }
  function gainXp(n) {
    const r = L.addXp(S, n); S.lv = r.lv; S.xp = r.xp;
    if (r.ups) setTimeout(() => toast(`升級！Lv ${S.lv}`, 'lvl'), 600);
  }
  function award(id) {
    if (S.badges[id]) return;
    S.badges[id] = today();
    const b = L.BADGES.find(x => x.id === id);
    setTimeout(() => toast('獲得徽章：' + b.name, 'badge'), 900);
  }
  function diamondMoment() {
    const fx = $('#gem');
    fx.innerHTML = '';
    fx.append(h('div', { class: 'gem-art', html: A.diamond() }), h('div', { class: 'gem-t' }, '✨ 稀有掉落：鑽石！ ✨'), h('div', { class: 'gem-s' }, '每一場只有 3% 的機會'));
    for (let i = 0; i < 10; i++) fx.append(h('i', { class: 'spark', style: `--a:${i * 36}deg;--d:${0.05 * i}s` }, '✦'));
    fx.hidden = false; anim(fx, 'go');
    const close = () => { fx.hidden = true; fx.removeEventListener('click', close); };
    fx.addEventListener('click', close); setTimeout(close, 2600);
  }

  // ---- 畫面切換 ----
  let cur = 'title';
  function show(id) { cur = id; document.querySelectorAll('.scr').forEach(s => s.classList.toggle('on', s.id === 'scr-' + id)); renderTimer(); }
  const RENDER = { title: renderTitle, class: renderClass, hub: renderHub, map: renderMap, island: renderIsland, arena: renderArenaLobby, rewards: renderRewards };
  function go(id) { if (id !== 'island') N = null; if (id !== 'arena') stopArenaTimer(); if (RENDER[id]) RENDER[id](); show(id); }

  function hud(eyebrow, title, back) {
    const need = L.xpNeed(S.lv);
    return h('header', { class: 'hud' },
      back ? h('button', { class: 'icon-btn', onclick: () => go(back), 'aria-label': '返回' }, '←') : null,
      h('div', { class: 'hud-t' }, h('div', { class: 'eyebrow' }, eyebrow), h('div', { class: 'hud-title' }, title)),
      h('div', { class: 'hud-r' },
        h('div', { class: 'lv' }, h('b', {}, 'Lv ' + S.lv), h('div', { class: 'bar' }, h('i', { style: `transform:scaleX(${(S.xp / need).toFixed(3)})` }))),
        h('div', { class: 'mats' }, ['wood', 'stone', 'diamond'].map(k => h('span', { class: 'mat', title: { wood: '木頭', stone: '石頭', diamond: '鑽石' }[k], html: A.icon(k) + `<b>${S.mats[k] || 0}</b>` })))));
  }

  // ---- 首頁 ----
  function renderTitle() {
    const s = $('#scr-title'); s.innerHTML = '';
    const seg = h('div', { class: 'seg', role: 'radiogroup', 'aria-label': '帳號類型' },
      Object.keys(L.PLANS).map(k => h('button', { class: 'seg-b' + (T.plan === k ? ' on' : ''), role: 'radio', 'aria-checked': T.plan === k ? 'true' : 'false', onclick: () => { T = L.timerSetPlan(T, k); saveT(); renderTitle(); renderTimer(); } }, `${L.PLANS[k].name} · 每天 ${L.PLANS[k].min} 分`)));
    s.append(
      h('div', { class: 't-scene', html: A.sceneSvg() }),
      h('div', { class: 't-hero', html: A.hero('sword') }),
      h('div', { class: 't-copy' },
        h('div', { class: 'eyebrow' }, 'HERO ISLAND · DEMO'),
        h('h1', { class: 't-title' }, '勇者島'),
        h('p', { class: 't-sub' }, '答對英文就是出招。打怪、撿材料，回島上蓋房子。'),
        h('button', { class: 'btn big', onclick: () => { speak(' ', 0); go(S.cls ? 'hub' : 'class'); } }, '開始'),
        h('div', { class: 't-demo' }, h('div', { class: 'eyebrow' }, '試玩設定 · 帳號類型'), seg,
          h('button', { class: 'btn ghost small', onclick: openParent }, '家長設定'))));
  }

  // ---- 選職業 ----
  function renderClass() {
    const s = $('#scr-class'); s.innerHTML = '';
    s.append(hud('CHOOSE YOUR CLASS', '選一個職業', S.cls ? 'hub' : 'title'),
      h('div', { class: 'cls-grid' }, Object.keys(L.CLASSES).map(k => {
        const c = L.CLASSES[k];
        return h('button', { class: 'cls-card' + (S.cls === k ? ' on' : ''), onclick: () => { S.cls = k; saveS(); toast(`你現在是${c.name}！`); go('hub'); } },
          h('div', { class: 'cls-art', html: A.hero(k) }), h('div', { class: 'eyebrow' }, c.en),
          h('div', { class: 'cls-name' }, c.name, h('span', { class: 'tag' }, '擅長' + c.skill)), h('p', {}, c.line));
      })));
  }

  // ---- 大廳 ----
  function renderHub() {
    const s = $('#scr-hub'); s.innerHTML = ''; const c = L.CLASSES[S.cls] || L.CLASSES.mage, ms = missions();
    const done = L.MISSIONS.filter(m => ms[m.id] >= m.goal).length;
    const tile = (cls, eb, name, sub, art, fn) => h('button', { class: 'hub-tile ' + cls, onclick: fn },
      h('div', { class: 'ht-art', html: art }), h('div', { class: 'eyebrow' }, eb), h('div', { class: 'ht-name' }, name), h('div', { class: 'ht-sub' }, sub));
    s.append(hud('HERO ISLAND', '勇者島', 'title'),
      h('div', { class: 'hub-main' },
        h('div', { class: 'hub-hero' }, h('div', { class: 'hub-art', html: A.hero(S.cls) }),
          h('div', { class: 'eyebrow' }, `${c.en} · 熟練度 ${S.mastery[S.cls] || 0}`), h('div', { class: 'hub-name' }, c.name),
          h('button', { class: 'linkish', onclick: () => go('class') }, '換職業')),
        h('div', { class: 'hub-tiles' },
          tile('t-adv', 'DAY · WORD FOREST', '冒險', '單字森林', A.monster('leaf'), () => go('map')),
          tile('t-isl', 'ISLAND', '我的島', '蓋東西 · 合成台 · 守夜', A.tile('house'), () => go('island')),
          tile('t-arena', 'ARENA', '競技場', '影子對戰', A.hero('sword', 'shadow'), () => go('arena')),
          tile('t-rew', 'REWARDS', '獎勵', `今日任務 ${done}/3`, A.icon('star'), () => go('rewards')))));
  }

  // ---- 地圖 ----
  function renderMap() {
    const s = $('#scr-map'); s.innerHTML = '';
    const nodes = L.FOREST.map((n, i) => ({ id: n.id, x: n.x, y: Math.round(A.roadMid(n.x)) - 6, r: n.boss ? 44 : 34, boss: n.boss, kind: n.kind, label: n.name, num: i + 1, status: L.nodeStatus(S, i) }));
    nodes.push({ id: 'cave', x: 905, y: 536, r: 28, label: '字根洞窟', num: '?', status: S.items.pick ? 'open' : 'locked' });
    const wrap = h('div', { class: 'map-wrap', html: A.forest(nodes) });
    wrap.addEventListener('click', e => {
      const g = e.target.closest('[data-node]'); if (!g) return;
      const id = g.getAttribute('data-node');
      if (id === 'cave') return toast(S.items.pick ? '石鎬把洞口挖開了！字根洞窟下一版開放' : '洞口被石頭堵住了：先到合成台做「石鎬」');
      const i = L.FOREST.findIndex(x => x.id === id);
      if (L.nodeStatus(S, i) === 'locked') return toast('先打倒前一隻怪物');
      startBattle(id);
    });
    const c = L.CLASSES[S.cls];
    s.append(hud('DAY · WORD FOREST', '單字森林', 'hub'), wrap,
      h('div', { class: 'map-note' }, `${c.name}的題目：${c.skill}。打倒前一隻，下一隻才會出現；Boss 5 題要答對 4 題。`));
  }

  // ---- 題目元件（戰鬥／守夜／競技場共用） ----
  let lastQ = null;
  function askQ(box, q, o) {
    o = o || {};
    box.innerHTML = ''; box.classList.remove('done');
    let answered = false; lastQ = q;
    const listen = q.type === 'listen-choose' || q.type === 'spell';
    const say = q.speakText && (listen || q.en || q.play) ? h('button', { class: 'say', onclick: () => speak(q.speakText), 'aria-label': '再聽一次', html: A.icon('sound') }) : null;
    const fb = h('div', { class: 'q-fb' });
    const body = h('div', { class: 'q-body' });
    box.append(h('div', { class: 'q-head' },
      h('div', { class: 'q-type' }, (KE && KE.TYPES[q.type]) || '題目', isTyped(q) ? h('span', { class: 'tag red' }, '打字題 · 傷害加成') : null),
      h('div', { class: 'q-row' }, say, h('div', { class: 'q-prompt' + (q.en ? ' en' : '') + (String(q.prompt).length > 26 ? ' long' : '') }, q.prompt)),
      q.sub ? h('div', { class: 'q-sub' + (q.subEn ? ' en' : '') }, q.sub) : null), body, fb);
    if (q.auto && q.speakText) speak(q.speakText);
    const ctrl = { hint() { }, timeout() { if (!answered) finish(false, true); }, get answered() { return answered; } };
    function finish(ok, timeUp) {
      if (answered) return; answered = true; box.classList.add('done');
      if (o.onAnswer) o.onAnswer(ok);
      if (ok) { fb.className = 'q-fb ok'; fb.textContent = ['答對了！', '漂亮！', '命中！', '好厲害！'][Math.floor(Math.random() * 4)]; setTimeout(() => o.onDone && o.onDone(true), 750); return; }
      fb.className = 'q-fb bad'; fb.innerHTML = '';
      fb.append(h('div', { class: 'fb-t' }, timeUp ? '時間到！' : '差一點！', ' 正確答案：', h('b', { class: 'en' }, q.answer)),
        q.why ? h('div', { class: 'why' }, q.why) : null,
        h('button', { class: 'btn small', onclick: () => o.onDone && o.onDone(false) }, '繼續'));
    }
    if (q.input === 'type') {
      const inp = h('input', { class: 'typein en', type: 'text', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false', enterkeyhint: 'done', placeholder: '在這裡打英文', 'aria-label': '輸入答案' });
      const submit = () => { if (answered) return; if (!inp.value.trim()) return; const r = checkQ(q, inp.value); inp.classList.add(r.ok ? 'ok' : 'bad'); finish(r.ok); };
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
      body.append(h('div', { class: 'typerow' }, inp, h('button', { class: 'btn', onclick: submit }, '出招！')));
      ctrl.hint = () => { inp.placeholder = '提示：' + q.answer.split(' ').map(w => w[0] + '_'.repeat(Math.max(0, w.length - 1))).join(' '); };
    } else if (q.input === 'chips') {
      const ans = h('div', { class: 'chip-ans' }), pool = h('div', { class: 'chip-pool' });
      const go2 = h('button', { class: 'btn', disabled: true, onclick: () => { if (answered) return; const v = [...ans.children].map(x => x.textContent).join(' '); const r = checkQ(q, v); ans.classList.add(r.ok ? 'ok' : 'bad'); finish(r.ok); } }, '出招！');
      const sync = () => { go2.disabled = pool.children.length > 0; };
      q.options.forEach(w => { const c = h('button', { class: 'chip en', onclick: () => { if (answered) return; (c.parentNode === pool ? ans : pool).append(c); sync(); } }, w); pool.append(c); });
      body.append(ans, pool, h('div', { class: 'row end' }, go2));
      ctrl.hint = () => {
        [...ans.children].forEach(c => pool.append(c));
        const first = q.answer.trim().split(/\s+/)[0], c = [...pool.children].find(x => x.textContent === first);
        if (c) { ans.append(c); c.classList.add('hinted'); } sync();
      };
    } else {
      const grid = h('div', { class: 'opts' + (q.options.some(x => String(x).length > 16) ? ' long' : '') });
      q.options.forEach(op => {
        const b = h('button', { class: 'opt' + (/[a-z]/i.test(op) ? ' en' : ''), onclick: () => {
          if (answered) return;
          const r = checkQ(q, op); b.classList.add(r.ok ? 'ok' : 'bad');
          if (!r.ok) [...grid.children].forEach(x => { if (x.dataset.v === q.answer) x.classList.add('ok'); });
          finish(r.ok);
        } }, op);
        b.dataset.v = op; grid.append(b);
      });
      body.append(grid);
      ctrl.hint = () => { [...grid.children].filter(x => x.dataset.v !== q.answer && !x.disabled).slice(0, 2).forEach(x => { x.disabled = true; x.classList.add('off'); }); };
    }
    return ctrl;
  }

  // ---- 戰鬥 ----
  let B = null;
  function startBattle(id) {
    const mon = L.FOREST.find(m => m.id === id), boss = !!mon.boss;
    B = { mon, boss, hp: boss ? L.BOSS_NEED : mon.hp, maxHp: boss ? L.BOSS_NEED : mon.hp, php: L.PLAYER_HP, combo: 0, qs: quizFor(S.cls, boss ? L.BOSS_Q : 10), qi: 0, asked: 0, correct: 0, over: false };
    renderBattle(); show('battle'); nextQ();
  }
  function renderBattle() {
    const s = $('#scr-battle'); s.innerHTML = '';
    s.append(
      h('header', { class: 'hud' }, h('button', { class: 'icon-btn', onclick: () => { B.over = true; go('map'); }, 'aria-label': '離開戰鬥' }, '←'),
        h('div', { class: 'hud-t' }, h('div', { class: 'eyebrow' }, B.boss ? `BOSS · ${L.BOSS_Q} 題要答對 ${L.BOSS_NEED} 題` : 'BATTLE · WORD FOREST'), h('div', { class: 'hud-title' }, B.mon.name)),
        h('div', { class: 'b-info', id: 'bInfo' })),
      h('div', { class: 'b-stage', id: 'bStage' },
        h('div', { class: 'b-bg', html: A.stage() }),
        h('div', { class: 'b-side b-hero' }, h('div', { class: 'hp' }, h('span', {}, '我'), h('div', { class: 'bar' }, h('i', { id: 'bPhp' }))), h('div', { class: 'b-art', id: 'bHero', html: A.hero(S.cls) })),
        h('div', { class: 'b-side b-mon' + (B.boss ? ' boss' : '') }, h('div', { class: 'hp mon' }, h('span', {}, B.mon.name), h('div', { class: 'bar' + (B.boss ? ' seg' : '') }, h('i', { id: 'bMhp' }))), h('div', { class: 'b-art', id: 'bMon', html: A.monster(B.mon.kind) }))),
      h('div', { class: 'qbox', id: 'bQ' }));
  }
  function updBattle() {
    $('#bPhp').style.transform = `scaleX(${B.php / L.PLAYER_HP})`;
    $('#bMhp').style.transform = `scaleX(${B.hp / B.maxHp})`;
    $('#bInfo').textContent = B.boss ? `第 ${Math.min(B.asked + 1, L.BOSS_Q)}/${L.BOSS_Q} 題 · 答對 ${B.correct}` : (B.combo >= 2 ? `COMBO ×${B.combo}` : '');
  }
  function nextQ() {
    if (B.over) return;
    if (B.qi >= B.qs.length) B.qs = B.qs.concat(quizFor(S.cls, 6));
    const q = B.qs[B.qi++];
    askQ($('#bQ'), q, { onAnswer: ok => battleHit(ok, q), onDone: afterQ });
    updBattle();
  }
  function battleHit(ok, q) {
    B.asked++; B.combo = L.comboNext(B.combo, ok);
    const stage = $('#bStage');
    if (ok) {
      B.correct++; S.mastery[S.cls] = (S.mastery[S.cls] || 0) + 1; missions().correct++;
      const d = L.damage({ combo: B.combo, typed: isTyped(q), cls: S.cls, sword: !!S.items.sword });
      B.hp = Math.max(0, B.hp - (B.boss ? 1 : d.dmg));
      anim($('#bHero'), 'atk'); setTimeout(() => anim($('#bMon'), 'hit'), 170);
      floatText(stage, (d.crit ? '暴擊！' : '') + '-' + d.dmg, 'dmg' + (d.crit ? ' crit' : ''), 70, 28);
      if (B.combo >= 2) announce(`連續答對 ×${B.combo}！`, B.combo >= 3);
      if (B.combo >= 3) award('combo3');
    } else {
      B.php = Math.max(0, B.php - L.HIT_BACK); addMistake(q);
      anim($('#bMon'), 'atk'); setTimeout(() => { anim($('#bHero'), 'hit'); flash(); }, 170);
      floatText(stage, '-' + L.HIT_BACK, 'dmg hurt', 24, 32);
    }
    saveS(); updBattle();
  }
  function afterQ() {
    if (B.over) return;
    if (B.boss) { const o = L.bossOutcome(B.correct, B.asked); if (o !== 'continue') return endBattle(o === 'win'); }
    else { if (B.hp <= 0) return endBattle(true); if (B.php <= 0) return endBattle(false); }
    nextQ();
  }
  const dropChip = (k, n, rare) => h('span', { class: 'drop' + (rare ? ' rare' : ''), html: A.icon(k) + `<b>${{ wood: '木頭', stone: '石頭', diamond: '鑽石' }[k]} ×${n}</b>` });
  function endBattle(win) {
    B.over = true;
    const s = $('#scr-battle'), res = h('div', { class: 'result' }), card = h('div', { class: 'result-card' });
    if (win) {
      const drop = L.rollDrop(Math.random, B.boss ? 'boss' : 'normal'), xp = B.boss ? 50 : 20;
      ['wood', 'stone', 'diamond'].forEach(k => { S.mats[k] = (S.mats[k] || 0) + drop[k]; });
      S.defeated[B.mon.id] = true; missions().wins++;
      if (B.boss) award('boss');
      card.append(h('div', { class: 'eyebrow' }, 'VICTORY'), h('h2', {}, `打倒${B.mon.name}了！`),
        h('div', { class: 'drops' }, dropChip('wood', drop.wood), drop.stone ? dropChip('stone', drop.stone) : null, drop.diamond ? dropChip('diamond', drop.diamond, true) : null, h('span', { class: 'drop xp' }, `+${xp} XP`)),
        h('p', { class: 'muted' }, `答對 ${B.correct} 題 · ${L.CLASSES[S.cls].name}熟練度 ${S.mastery[S.cls]}`));
      gainXp(xp);
      if (drop.diamond) { award('diamond'); setTimeout(diamondMoment, 450); }
    } else {
      card.append(h('div', { class: 'eyebrow' }, 'TRY AGAIN'), h('h2', {}, B.boss ? `差一點！要答對 ${L.BOSS_NEED} 題才打得倒` : '差一點！'),
        h('p', {}, '答錯的題目會變成「錯題怪」，晚上來島上。再打一次就記住了！'));
      gainXp(5);
    }
    saveS();
    card.append(h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => go('map') }, '回地圖'),
      win ? h('button', { class: 'btn ghost', onclick: () => go('island') }, '回島上蓋東西') : h('button', { class: 'btn ghost', onclick: () => startBattle(B.mon.id) }, '再試一次')));
    res.append(card); s.append(res);
    requestAnimationFrame(() => requestAnimationFrame(() => res.classList.add('on')));
  }

  // ---- 島：建造、合成台、守夜 ----
  let tool = 'grass', N = null;
  const costText = c => Object.keys(c).length ? Object.keys(c).map(k => `${{ wood: '木', stone: '石', lamp: '路燈' }[k]}${c[k]}`).join(' ') : '免費';
  function renderIsland() {
    const s = $('#scr-island'); s.innerHTML = '';
    s.classList.toggle('night', !!N);
    const grid = h('div', { class: 'grid', id: 'grid' });
    S.grid.forEach((t, i) => grid.append(h('button', { class: 'cell', 'data-i': i, 'aria-label': t ? (L.TILES.find(x => x.id === t) || {}).name : '空地', html: t ? A.tile(t) : '' })));
    grid.addEventListener('click', onCell);
    const board = h('div', { class: 'isl-board', id: 'board' }, grid, h('div', { class: 'isl-fx', id: 'islFx' }), h('div', { class: 'isl-mons', id: 'islMons' }));
    s.append(h('div', { class: 'night-sky' }),
      hud(N ? 'NIGHT · MISTAKE RAID' : 'ISLAND · DAY', N ? '錯題怪攻島' : '我的島', 'hub'),
      h('div', { class: 'isl-main' }, h('div', { class: 'isl-wrap' }, board), h('aside', { class: 'isl-side', id: 'islSide' })));
    if (N) { renderNightSide(); placeMons(); } else renderBuildSide();
    renderGlows();
  }
  function renderGlows() {
    const fx = $('#islFx'); if (!fx) return; fx.innerHTML = '';
    S.grid.forEach((t, i) => {
      if (t !== 'lamp' && t !== 'house') return;
      const x = (i % 8 + 0.5) / 8 * 100, y = (Math.floor(i / 8) + 0.5) / 6 * 100;
      fx.append(h('i', { class: 'glow ' + t, style: `left:${x}%;top:${y}%` }));
    });
  }
  function renderBuildSide() {
    const side = $('#islSide'); side.innerHTML = '';
    const tools = h('div', { class: 'tools' }, L.TILES.map(t => {
      const can = L.canAfford(L.wallet(S), t.cost);
      return h('button', { class: 'tool' + (tool === t.id ? ' on' : '') + (can ? '' : ' poor'), onclick: () => { tool = t.id; renderBuildSide(); } },
        h('span', { class: 'tool-art', html: A.tile(t.id) }), h('b', {}, t.name), h('small', {}, t.id === 'lamp' ? `有 ${S.items.lamp || 0} 盞` : costText(t.cost)));
    }));
    const recipes = h('div', { class: 'recipes' }, L.RECIPES.map(r => {
      const c = L.craftCheck(S, r.id);
      return h('div', { class: 'recipe' + (c.locked ? ' locked' : '') + (c.done ? ' done' : '') },
        h('span', { class: 'r-ico', html: A.icon(c.locked ? 'lock' : r.icon) }),
        h('div', { class: 'r-t' }, h('b', {}, r.name), h('small', {}, c.locked ? r.lockText : `${r.desc} · ${costText(r.cost)}`)),
        c.locked ? h('button', { class: 'btn small ghost', onclick: () => { S.learned.un = true; saveS(); toast('（試玩）假裝學會 un- 字根了：路燈配方解鎖！'); renderBuildSide(); } }, '模擬學會')
          : h('button', { class: 'btn small', disabled: !c.ok, onclick: () => doCraft(r) }, c.done ? '已完成' : '合成'));
    }));
    side.append(h('div', { class: 'eyebrow' }, 'BUILD'), h('p', { class: 'muted small' }, '選一個方塊，再點格子放上去；點已經蓋好的東西會拆掉（材料退回）。'), tools,
      h('div', { class: 'eyebrow mt' }, 'CRAFTING TABLE · 合成台'), recipes,
      h('button', { class: 'btn night-btn', onclick: startNight, html: A.icon('moon') + '<span>天黑了</span>' }));
  }
  function doCraft(r) {
    const res = L.craft(S, r.id);
    if (!res.ok) return toast(res.reason);
    S = res.s; saveS();
    toast(r.id === 'pick' ? '做好石鎬了！地圖上的「字根洞窟」可以挖開了' : r.id === 'sword' ? '做好木劍了！冒險傷害 +5%' : '做好一盞路燈！選「路燈」放到島上');
    if (r.id === 'lamp') tool = 'lamp';
    renderIsland();
  }
  function onCell(e) {
    const c = e.target.closest('.cell'); if (!c || N) return;
    const i = +c.dataset.i;
    if (S.grid[i]) {
      const r = L.removeTile(S, i); S = r.s; saveS();
      toast(`拆掉${(L.TILES.find(x => x.id === r.id) || {}).name}` + (r.refunded ? '，材料退回' : ''));
    } else {
      const r = L.placeTile(S, i, tool);
      if (!r.ok) return toast(r.reason);
      S = r.s; missions().build++; saveS();
    }
    renderIsland();
    const cell = document.querySelector(`.cell[data-i="${i}"]`); if (cell && S.grid[i]) anim(cell, 'pop');
  }
  function houseIdx() { const i = S.grid.indexOf('house'); return i >= 0 ? i : 19; }
  const SPAWN = [[-6, 18], [106, 72], [34, -12], [-6, 86], [106, 22]];
  function startNight() {
    let qs = S.mistakes.slice(0, 5).map(id => E && E.get(id)).filter(Boolean), sample = false;
    if (!qs.length) { qs = sampleQs(3); sample = true; }
    const hi = houseIdx(), hx = (hi % 8 + 0.5) / 8 * 100, hy = (Math.floor(hi / 8) + 0.5) / 6 * 100;
    N = { qs, i: 0, sample, hx, hy, win: 0, back: 0, mons: qs.map((q, k) => ({ from: SPAWN[k % SPAWN.length], t: 0, state: 'walk' })) };
    renderIsland();
    setTimeout(nightNext, 600);
  }
  function placeMons() {
    const box = $('#islMons'); if (!box || !N) return;
    if (!box.children.length) N.mons.forEach((m, k) => box.append(h('div', { class: 'nmon', 'data-k': k }, h('div', { class: 'nmon-art', html: A.monster('ghost') }), h('span', { class: 'nmon-l' }, '明晚再來'))));
    N.mons.forEach((m, k) => {
      const el = box.children[k], t = m.state === 'back' ? 0 : m.t;
      const x = m.from[0] + (N.hx - m.from[0]) * t, y = m.from[1] + (N.hy - m.from[1]) * t;
      const bw = box.clientWidth, bh = box.clientHeight;
      el.style.transform = `translate3d(${(x * bw / 100).toFixed(1)}px,${(y * bh / 100).toFixed(1)}px,0) translate(-50%,-50%)`;
      el.className = 'nmon ' + m.state + (k === N.i && m.state === 'walk' ? ' cur' : '');
    });
  }
  function nightNext() {
    if (!N || cur !== 'island') return;
    if (N.i >= N.qs.length) return nightEnd();
    const m = N.mons[N.i], q = N.qs[N.i];
    N.mons.forEach(x => { if (x.state === 'walk') x.t = Math.min(0.8, x.t + (x === m ? 0.5 : 0.15)); });
    placeMons(); renderNightSide();
    askQ($('#nQ'), q, {
      onAnswer: ok => {
        if (ok) { m.state = 'dead'; N.win++; S.mistakes = S.mistakes.filter(x => x !== q.id); S.mats.wood++; missions().correct++; gainXp(5); }
        else { m.state = 'back'; N.back++; addMistake(q); }
        saveS(); placeMons();
      },
      onDone: () => { N.i++; setTimeout(nightNext, 350); }
    });
  }
  function renderNightSide() {
    const side = $('#islSide'); if (!side || !N) return; side.innerHTML = '';
    side.append(h('div', { class: 'eyebrow' }, 'NIGHT RAID'),
      h('div', { class: 'night-t' }, N.i < N.qs.length ? `第 ${N.i + 1}/${N.qs.length} 隻錯題怪` : '天快亮了'),
      N.sample ? h('p', { class: 'muted small' }, '錯題本是空的，先用 3 題示範。白天答錯的題目，晚上就會變成錯題怪。') : h('p', { class: 'muted small' }, '這些是你白天答錯的題目。答對就打倒它！'),
      h('div', { class: 'qbox night-q', id: 'nQ' }));
  }
  function nightEnd() {
    const side = $('#islSide'); side.innerHTML = '';
    side.append(h('div', { class: 'eyebrow' }, 'MORNING'), h('div', { class: 'night-t' }, '守住了！'),
      h('p', {}, `打倒 ${N.win} 隻錯題怪（每隻 +1 木頭）`), N.back ? h('p', {}, `${N.back} 隻「明晚再來」——它們還在錯題本裡。`) : h('p', {}, '錯題本清空了，太棒了！'),
      h('button', { class: 'btn', onclick: () => { N = null; renderIsland(); toast('天亮了！'); }, html: A.icon('sun') + '<span>天亮了</span>' }));
  }

  // ---- 競技場 ----
  let AR = null, arTimer = null;
  function stopArenaTimer() { if (arTimer) { clearInterval(arTimer); arTimer = null; } }
  const stars = n => h('span', { class: 'stars' }, [0, 1, 2].map(i => h('span', { class: i < n ? 'on' : '', html: A.icon('star') })));
  function renderArenaLobby() {
    stopArenaTimer(); AR = null;
    const s = $('#scr-arena'); s.innerHTML = '';
    const sh = L.SHADOW, firstDone = S.firstWinDay === today();
    s.append(hud('ARENA · SHADOW MATCH', '競技場', 'hub'),
      h('div', { class: 'ar-lobby' },
        h('div', { class: 'vs' },
          h('div', { class: 'vs-side' }, h('div', { class: 'vs-art', html: A.hero(S.cls) }), h('b', {}, '你 · ' + L.CLASSES[S.cls].name), h('small', {}, `${L.TIERS[S.rank.tier]}段位`), stars(S.rank.stars)),
          h('div', { class: 'vs-mid' }, 'VS'),
          h('div', { class: 'vs-side' }, h('div', { class: 'vs-art', html: A.hero('archer', 'shadow') }), h('b', {}, sh.name), h('small', {}, `${sh.tier} · 答對率 ${Math.round(sh.acc * 100)}% · 平均 ${sh.speed} 秒`))),
        h('div', { class: 'ar-rules' },
          h('div', { class: 'eyebrow' }, 'RULES'),
          h('ul', {}, h('li', {}, `${L.ARENA_Q} 題，每題 ${L.ARENA_TIME} 秒。傷害高的贏。`), h('li', {}, `答對 +${L.GOLD_PER} 局內金幣（每場歸零），可以在小商店買道具。`),
            h('li', {}, '平衡模式：裝備不算，比的是答題。'), h('li', {}, '對手是別的小朋友的答題「影子」（試玩是模擬資料）。')),
          h('p', {}, '保星卡：', S.rank.protectUsed ? '已經用過了' : '還在（輸一次不掉星）', ' · 今日首勝 ×2：', firstDone ? '今天已經拿過了' : '還沒拿'),
          h('button', { class: 'btn big', onclick: startArena }, '開始對戰'))));
  }
  function startArena() {
    AR = { m: L.newMatch(), sim: L.simShadow(Math.random, L.SHADOW, L.ARENA_Q), qs: quizFor(S.cls, L.ARENA_Q) };
    const s = $('#scr-arena'); s.innerHTML = '';
    s.append(h('header', { class: 'hud' }, h('button', { class: 'icon-btn', onclick: () => go('arena'), 'aria-label': '離開對戰' }, '←'),
      h('div', { class: 'hud-t' }, h('div', { class: 'eyebrow' }, 'ARENA · SHADOW MATCH'), h('div', { class: 'hud-title', id: 'arN' }, '')),
      h('div', { class: 'gold', id: 'arGold' })),
      h('div', { class: 'ar-board' },
        h('div', { class: 'ar-row' }, h('b', {}, '你'), h('div', { class: 'bar me' }, h('i', { id: 'arMe' })), h('span', { id: 'arMeN' }, '0')),
        h('div', { class: 'ar-row' }, h('b', {}, '海豚'), h('div', { class: 'bar sh' }, h('i', { id: 'arSh' })), h('span', { id: 'arShN' }, '0')),
        h('div', { class: 'ar-log', id: 'arLog' }, '影子對手跟你答一樣多題，看誰傷害高。')),
      h('div', { class: 'ar-timer' }, h('i', { id: 'arT' })),
      h('div', { class: 'shop', id: 'arShop' }),
      h('div', { class: 'qbox', id: 'arQ' }));
    arenaNext();
  }
  function arenaBoard() {
    const max = Math.max(60, AR.m.dmg, AR.shDmg || 0);
    $('#arMe').style.transform = `scaleX(${AR.m.dmg / max})`; $('#arMeN').textContent = AR.m.dmg;
    $('#arSh').style.transform = `scaleX(${(AR.shDmg || 0) / max})`; $('#arShN').textContent = AR.shDmg || 0;
    $('#arGold').innerHTML = A.icon('gold') + `<b>${AR.m.gold}</b><small>局內金幣</small>`;
    $('#arN').textContent = `第 ${Math.min(AR.m.i + 1, L.ARENA_Q)}/${L.ARENA_Q} 題` + (AR.m.double ? ' · 這題雙倍！' : AR.m.dblNext ? ' · 下一題雙倍' : '');
    const shop = $('#arShop'); shop.innerHTML = '';
    L.SHOP.forEach(it => shop.append(h('button', { class: 'shop-b', disabled: AR.m.gold < it.cost || (AR.ctrl && AR.ctrl.answered) || (it.id === 'double' && (AR.m.dblNext || AR.m.double)), onclick: () => buyItem(it) },
      h('b', {}, it.name), h('small', { html: A.icon('gold') + it.cost }))));
  }
  function buyItem(it) {
    if (!AR || (AR.ctrl && AR.ctrl.answered)) return;
    const r = L.buy(AR.m, it.id); if (!r.ok) return toast(r.reason);
    AR.m = r.m;
    if (it.id === 'time') { AR.limit += 5; toast('+5 秒！'); }
    if (it.id === 'hint') AR.ctrl.hint();
    if (it.id === 'double') toast('下一題答對傷害 ×2');
    arenaBoard();
  }
  function arenaNext() {
    if (!AR || cur !== 'arena') return;
    if (AR.m.i >= L.ARENA_Q) return arenaEnd();
    AR.m = L.arenaStartQ(AR.m);
    const q = AR.qs[AR.m.i % AR.qs.length];
    AR.t0 = Date.now(); AR.limit = L.ARENA_TIME;
    AR.ctrl = askQ($('#arQ'), q, {
      onAnswer: ok => {
        stopArenaTimer();
        const t = Math.min((Date.now() - AR.t0) / 1000, AR.limit);
        AR.m = L.arenaAnswer(AR.m, ok, Math.round(t * 10) / 10, { typed: isTyped(q), cls: S.cls });
        if (ok) { missions().correct++; S.mastery[S.cls] = (S.mastery[S.cls] || 0) + 1; saveS(); floatText($('.ar-board'), `+${L.GOLD_PER} 金幣  -${AR.m.last}`, 'goldf', 50, 10); }
        const st = AR.sim.steps[AR.m.i - 1]; AR.shDmg = st.total;
        $('#arLog').textContent = `海豚這題：${st.ok ? '答對 ✓' : '答錯 ✗'} · ${st.t} 秒` + (st.ok ? ` · 傷害 ${st.d}` : '');
        arenaBoard();
      },
      onDone: () => setTimeout(arenaNext, 150)
    });
    arenaBoard();
    const bar = $('#arT');
    stopArenaTimer();
    arTimer = setInterval(() => {
      const left = AR.limit - (Date.now() - AR.t0) / 1000;
      bar.style.transform = `scaleX(${clamp(left / L.ARENA_TIME, 0, 1)})`;
      bar.classList.toggle('low', left < 4);
      if (left <= 0) { stopArenaTimer(); AR.ctrl.timeout(); }
    }, 100);
  }
  function arenaEnd() {
    stopArenaTimer();
    const res = L.arenaResult(AR.m, AR.sim), rk = L.rankAfter(S.rank, res.win), d = today();
    const rw = L.arenaReward(res.win, S.firstWinDay, d);
    S.rank = rk.r; if (rw.first) S.firstWinDay = d;
    S.mats.wood += rw.wood; gainXp(rw.xp); saveS();
    const s = $('#scr-arena'); s.innerHTML = '';
    s.append(hud('ARENA · RESULT', res.win ? '勝利！' : '差一點！', 'hub'),
      h('div', { class: 'ar-result' },
        h('div', { class: 'mvp' }, h('div', { class: 'eyebrow' }, 'MVP 評分'), h('div', { class: 'mvp-n' }, res.mvp.toFixed(1)), h('small', {}, '答對率 70% ＋ 速度 20% ＋ 連擊 10%')),
        h('div', { class: 'ar-stats' },
          h('div', {}, h('b', {}, '你'), ` 答對 ${AR.m.correct}/${L.ARENA_Q} · 平均 ${res.pAvg} 秒 · 傷害 ${AR.m.dmg}`),
          h('div', {}, h('b', {}, '海豚'), ` 答對 ${AR.sim.correct}/${L.ARENA_Q} · 平均 ${res.sAvg} 秒 · 傷害 ${AR.sim.dmg}`),
          h('div', { class: 'rank' }, `${L.TIERS[S.rank.tier]}段位 `, stars(S.rank.stars), h('span', { class: 'muted' }, ' ' + rk.note)),
          h('div', { class: 'reward' + (rw.first ? ' first' : '') }, rw.first ? '每日首勝 ×2！' : '獎勵', ` +${rw.xp} XP · +${rw.wood} 木頭`)),
        h('div', { class: 'row' }, h('button', { class: 'btn', onclick: startArena }, '再打一場'), h('button', { class: 'btn ghost', onclick: () => go('hub') }, '回大廳'))));
    AR = null;
  }

  // ---- 獎勵 ----
  function renderRewards() {
    const s = $('#scr-rewards'); s.innerHTML = ''; const ms = missions(), need = L.xpNeed(S.lv);
    const maxM = Math.max(10, ...Object.values(S.mastery));
    s.append(hud('REWARDS', '獎勵', 'hub'),
      h('div', { class: 'rw-grid' },
        h('section', { class: 'card' }, h('div', { class: 'eyebrow' }, 'LEVEL'), h('div', { class: 'big-n' }, 'Lv ' + S.lv),
          h('div', { class: 'bar wide' }, h('i', { style: `transform:scaleX(${(S.xp / need).toFixed(3)})` })), h('small', { class: 'muted' }, `${S.xp} / ${need} XP`),
          h('div', { class: 'eyebrow mt' }, '職業熟練度'),
          Object.keys(L.CLASSES).map(k => h('div', { class: 'mrow' }, h('span', {}, L.CLASSES[k].name), h('div', { class: 'bar' }, h('i', { style: `transform:scaleX(${((S.mastery[k] || 0) / maxM).toFixed(3)})` })), h('b', {}, S.mastery[k] || 0)))),
        h('section', { class: 'card' }, h('div', { class: 'eyebrow' }, 'DAILY MISSIONS · 每日任務'),
          L.MISSIONS.map(m => {
            const v = Math.min(m.goal, ms[m.id] || 0), done = v >= m.goal, claimed = ms.claimed[m.id];
            return h('div', { class: 'mission' + (done ? ' done' : '') }, h('div', { class: 'm-t' }, h('b', {}, m.name), h('small', {}, `${v}/${m.goal}`)),
              h('div', { class: 'bar' }, h('i', { style: `transform:scaleX(${v / m.goal})` })),
              h('button', { class: 'btn small', disabled: !done || claimed, onclick: () => { ms.claimed[m.id] = true; S.mats.wood += L.MISSION_REWARD.wood; S.mats.stone += L.MISSION_REWARD.stone; saveS(); toast('領到 木頭 +3、石頭 +1'); renderRewards(); } }, claimed ? '已領' : '領取'));
          }),
          h('small', { class: 'muted' }, '每天台北時間 0 點重新開始')),
        h('section', { class: 'card' }, h('div', { class: 'eyebrow' }, 'BADGES · 徽章'),
          h('div', { class: 'badges' }, L.BADGES.map(b => h('div', { class: 'badge' + (S.badges[b.id] ? ' on' : '') }, h('span', { class: 'b-ico', html: A.icon(b.id === 'diamond' ? 'diamond' : 'star') }), h('b', {}, b.name), h('small', {}, S.badges[b.id] || '還沒拿到'))))),
        h('section', { class: 'card' }, h('div', { class: 'eyebrow' }, 'BAG · 背包'),
          h('div', { class: 'drops' }, dropChip('wood', S.mats.wood), dropChip('stone', S.mats.stone), dropChip('diamond', S.mats.diamond, S.mats.diamond > 0)),
          h('p', {}, `木劍 ${S.items.sword ? '✓' : '—'} · 石鎬 ${S.items.pick ? '✓' : '—'} · 路燈 ${S.items.lamp || 0} 盞 · 錯題本 ${S.mistakes.length} 題`),
          h('p', {}, `競技場：${L.TIERS[S.rank.tier]}段位 `, stars(S.rank.stars)),
          h('button', { class: 'btn ghost small', onclick: () => {
            if (!confirm('重置試玩？等級、材料、島、遊戲時間與延長紀錄都會清掉（只清勇者島 hi_ 的資料；家長密碼是全站共用的，不會清）。')) return;
            ['save', 'timer', 'parent'].forEach(LS.del); location.reload();
          } }, '重置試玩'))));
  }

  // ---- 遊玩時間、鎖定、休息、家長設定 ----
  let focused = document.hasFocus ? document.hasFocus() : true, modalOpen = false;
  window.addEventListener('blur', () => { focused = false; renderTimer(); });
  window.addEventListener('focus', () => { focused = true; renderTimer(); });
  document.addEventListener('visibilitychange', renderTimer);
  window.addEventListener('pointerdown', () => { if (!focused) { focused = true; renderTimer(); } });
  const timerActive = () => !document.hidden && focused && cur !== 'title' && !modalOpen && L.timerLeft(T) > 0;
  function renderTimer() {
    const pill = $('#timer'); if (!pill) return;
    const left = L.timerLeft(T), active = timerActive();
    pill.innerHTML = '';
    pill.append(h('span', { class: 'p-plan' }, L.PLANS[T.plan].name), h('b', {}, left === Infinity ? '∞ 今日無限' : '剩 ' + L.fmtClock(left)), !active && left > 0 ? h('small', {}, '暫停') : null);
    pill.classList.toggle('low', left !== Infinity && left <= 60);
    const out = left <= 0;
    $('#lock').hidden = !(out && T.plan === 'free');
    const rest = $('#rest');
    if (out && T.plan === 'paid') { if (rest.hidden) openRest(); } else rest.hidden = true;
  }
  setInterval(() => {
    const d = today();
    if (T.day !== d) { T = L.timerLoad(T, d); saveT(); }
    if (timerActive()) { T = L.timerTick(T, 1, true); saveT(); }
    renderTimer();
  }, 1000);
  function renderLock() {
    const el = $('#lock'); el.innerHTML = '';
    el.append(h('div', { class: 'lock-card' }, h('div', { class: 'lock-art', html: A.rest() }), h('div', { class: 'eyebrow' }, 'SEE YOU TOMORROW'),
      h('h2', {}, '今天的免費時間用完囉，'), h('p', { class: 'lead' }, '明天再來，或請爸媽開通會員'),
      h('button', { class: 'linkish', onclick: () => { T = L.timerSetPlan(T, 'paid'); saveT(); renderTimer(); toast('（試玩）切換成付費會員帳號'); } }, '（試玩用）切換成付費會員帳號')));
  }
  function keypad(o) {
    let v = '';
    const dots = h('div', { class: 'kp-dots', 'aria-live': 'polite' }), msg = h('div', { class: 'kp-msg' }, o.sub || '');
    const paint = () => { dots.innerHTML = ''; for (let i = 0; i < 6; i++) dots.append(h('i', { class: i < v.length ? 'on' : (i < 4 ? 'need' : '') })); dots.setAttribute('aria-label', `已輸入 ${v.length} 位`); };
    const el = h('div', { class: 'kp' });
    const api = {
      error(t) { msg.textContent = t; msg.classList.add('bad'); v = ''; paint(); anim(el, 'shake'); },
      set(t) { msg.textContent = t; msg.classList.remove('bad'); v = ''; paint(); }
    };
    const key = k => {
      if (k === 'del') v = v.slice(0, -1);
      else if (k === 'ok') { if (v.length < 4) return api.error('請輸入 4–6 位數字'); const pin = v; v = ''; paint(); return o.onSubmit(pin, api); }
      else if (v.length < 6) v += k;
      paint();
    };
    el.append(h('div', { class: 'kp-title' }, o.title), dots, msg,
      h('div', { class: 'kp-pad' }, ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'del', '0', 'ok'].map(k =>
        h('button', { class: 'kp-k' + (k === 'ok' ? ' ok' : k === 'del' ? ' del' : ''), 'aria-label': k === 'del' ? '刪除' : k === 'ok' ? '確定' : k, onclick: () => key(k) }, k === 'del' ? '⌫' : k === 'ok' ? '確定' : k))));
    paint();
    return el;
  }
  function openRest() {
    const r = $('#rest'); r.hidden = false; r.innerHTML = '';
    const card = h('div', { class: 'lock-card' }, h('div', { class: 'eyebrow' }, 'TIME FOR A BREAK'), h('h2', {}, '休息一下！'),
      h('p', {}, `今天的 ${L.PLANS.paid.min} 分鐘玩完了。看看遠方、喝口水。要繼續玩，請爸媽輸入家長密碼。`));
    if (!PIN.isSet()) card.append(h('p', { class: 'note' }, '家長還沒設定密碼。'), h('button', { class: 'btn', onclick: openParent }, '家長設定'));
    else card.append(keypad({ title: '家長密碼', onSubmit: (pin, kp) => {
      const c = L.pinCheck(P, pin, Date.now()); P = c.parent; saveP();
      if (c.ok) return showExtend(card);
      kp.error(c.cooldown ? `錯太多次了，請等 ${c.cooldown} 秒再試` : `密碼不對，還可以試 ${c.left} 次`);
    } }));
    r.append(card);
  }
  function showExtend(card) {
    card.innerHTML = '';
    card.append(h('div', { class: 'eyebrow' }, 'PARENTS'), h('h2', {}, '今天要再玩多久？'), h('p', { class: 'muted' }, '只算今天，明天會恢復成每天 60 分鐘。'),
      h('div', { class: 'ext' }, L.EXT_OPTIONS.map(opt => h('button', { class: 'btn ext-b', onclick: () => {
        const r = L.timerExtend(T, opt); if (!r.ok) return toast(r.reason);
        T = r.st; saveT();
        P.log = L.logExtension(P.log, T.day, opt, new Date().toISOString()); saveP();
        $('#rest').hidden = true; renderTimer();
        toast(opt === 'inf' ? '爸媽說：今天不限時間！' : `爸媽幫你加了 ${opt} 分鐘`);
      } }, opt === 'inf' ? '無限' : opt + '分'))));
  }
  function modalCard(kids) {
    const m = $('#modal'); m.innerHTML = '';
    m.append(h('div', { class: 'modal-card' }, h('button', { class: 'icon-btn close', onclick: closeParent, 'aria-label': '關閉' }, '×'), kids));
  }
  function openParent() { modalOpen = true; $('#modal').hidden = false; parentHome(); renderTimer(); }
  function closeParent() { modalOpen = false; $('#modal').hidden = true; if (!$('#rest').hidden) openRest(); renderTimer(); }
  const fmtAt = iso => { try { return new Date(iso).toLocaleTimeString('zh-TW', { timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', hour12: false }); } catch (e) { return ''; } };
  function parentHome() {
    if (!PIN.isSet()) return parentSetPin('第一次使用：設定家長密碼', null);
    const left = L.timerLeft(T), log = (P.log || []).slice().reverse().slice(0, 10);
    modalCard([h('div', { class: 'eyebrow' }, 'PARENTS'), h('h2', {}, '家長設定'),
      h('p', {}, `今天（${T.day}）· ${L.PLANS[T.plan].name} · 已玩 ${L.fmtClock(T.used)} · ${left === Infinity ? '今日無限' : '剩 ' + L.fmtClock(left)}`),
      h('div', { class: 'eyebrow mt' }, '延長紀錄'),
      log.length ? h('ul', { class: 'log' }, log.map(x => h('li', {}, h('b', {}, x.date), ` ${x.minutes === 'inf' ? '今日無限' : '+' + x.minutes + ' 分'} `, h('span', { class: 'muted' }, fmtAt(x.at))))) : h('p', { class: 'muted' }, '還沒有延長紀錄'),
      h('div', { class: 'row' }, h('button', { class: 'btn small', onclick: parentChange }, '修改密碼')),
      h('p', { class: 'note' }, '密碼只存加鹽的 SHA-256 雜湊，跟學習站「家長」頁共用同一組。試玩版的時間與紀錄只存在這台裝置；正式版會放在會員後端（每個小朋友一份），清掉瀏覽器資料也改不了。')]);
  }
  function parentSetPin(title, done) {
    let first = null;
    modalCard([h('div', { class: 'eyebrow' }, 'PARENTS · PIN'), h('h2', {}, title),
      keypad({ title: '輸入新密碼（4–6 位數字）', onSubmit: (pin, kp) => {
        if (first === null) { first = pin; return kp.set('再輸入一次確認'); }
        const r = PIN.set(first, pin);
        if (!r.ok) { first = null; return kp.error(r.reason + '，請重新輸入'); }
        P.fails = 0; P.lockUntil = 0; saveP(); toast('家長密碼設定好了（家長頁也是用這一組）');
        (done || parentHome)();
      } })]);
  }
  function parentChange() {
    modalCard([h('div', { class: 'eyebrow' }, 'PARENTS · PIN'), h('h2', {}, '修改密碼'),
      keypad({ title: '先輸入舊密碼', onSubmit: (pin, kp) => {
        const c = L.pinCheck(P, pin, Date.now()); P = c.parent; saveP();
        if (!c.ok) return kp.error(c.cooldown ? `錯太多次了，請等 ${c.cooldown} 秒再試` : `舊密碼不對，還可以試 ${c.left} 次`);
        parentSetPin('設定新密碼', null);
      } })]);
  }

  // ---- 開機 ----
  document.getElementById('defs').innerHTML = A.defs();
  renderLock(); renderTitle(); show('title');
  window.addEventListener('resize', () => { if (N) placeMons(); });
  root.HIDebug = { get S() { return S; }, get T() { return T; }, get E() { return E; }, get q() { return lastQ; }, go, startBattle };
})(typeof window !== 'undefined' ? window : globalThis);
