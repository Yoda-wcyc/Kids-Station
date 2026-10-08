/* game.js — 勇者島 DEMO。
   上半部 L＝純邏輯（不碰 DOM，Node 測試 test.js 用）；下半部＝畫面（只在瀏覽器跑）。
   存檔一律 localStorage 前綴 hi_（hi_save / hi_timer / hi_parent），不碰學習站其他鍵。 */
(function (root) {
  'use strict';
  const L = {};
  // ⚙ 遊玩時間限制總開關：目前整個遊戲免費、不限時間（false）。改成 true 就恢復 未付費 10 分／付費會員 60 分＋家長密碼延長。
  const TIME_LIMITS_ENABLED = false;
  L.TIME_LIMITS_ENABLED = TIME_LIMITS_ENABLED;
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
  // o: {combo（含這題）, typed, cls, sword（'iron' 鐵劍 ×1.10、其他真值＝木劍 ×1.05）, double, map, forceCrit, shieldMult}
  // 打字題：森林 法師 ×1.8／其他 ×1.3；洞窟 法師 ×1.5／其他 ×1.2。連擊 ≥3 暴擊 ×1.5（洞窟劍士 ≥2）
  // 城堡：劍士（文法職業）所有答對 ×1.5
  L.CAVE_CLASS = { mage: { typed: 1.5 }, sword: { critAt: 2 }, archer: { readAloud: true }, guard: { hitBack: 6 } };
  L.CASTLE_CLASS = { mage: { typed: 1.5 }, sword: { all: 1.5 } };
  L.HARBOR_CLASS = { guard: { all: 1.5 } };  // 港口：守護者（句型職業）×1.5
  L.MAP_CLASS = { cave: L.CAVE_CLASS, castle: L.CASTLE_CLASS, harbor: L.HARBOR_CLASS };
  L.mapClass = (map, cls) => ((L.MAP_CLASS[map] || {})[cls]) || {};
  L.damage = function (o) {
    o = o || {};
    const forest = !o.map || o.map === 'forest', cc = L.mapClass(o.map, o.cls);
    let m = cc.all || 1;
    if (o.typed) m *= forest ? (o.cls === 'mage' ? 1.8 : 1.3) : (cc.typed || 1.2);
    const crit = !!o.forceCrit || (o.combo || 0) >= (cc.critAt || 3);
    if (crit) m *= 1.5;
    if (o.sword) m *= L.WEAPON_MULT[o.sword] || 1.05;
    if (o.double) m *= 2;
    if (o.shieldMult) m *= o.shieldMult;
    return { dmg: Math.round(L.BASE_DMG * m), crit };
  };
  // 被打：洞窟守護者只扣 6；有金盾再少 20%
  L.WEAPON_MULT = { wood: 1.05, iron: 1.10, flame: 1.20 };
  L.maxHp = s => Math.round(L.PLAYER_HP * (s && s.items && s.items.anchor ? 1.2 : 1));  // 船錨 +20% 血量
  L.hitBack = (map, cls, s) => Math.round((L.mapClass(map, cls).hitBack || L.HIT_BACK) * (s && s.items && s.items.gshield ? 0.8 : 1));
  L.TRAP_SNAP = 8;
  L.trapSnap = s => Math.round(L.TRAP_SNAP * (s && s.items && s.items.gshield ? 0.8 : 1));
  L.FOREST = [
    { id: 'f1', name: '葉子怪', kind: 'leaf', hp: 30, x: 190 },
    { id: 'f2', name: '蘑菇怪', kind: 'mush', hp: 30, x: 430 },
    { id: 'f3', name: '石頭怪', kind: 'rock', hp: 40, x: 650 },
    { id: 'boss', name: '森林巨木王', kind: 'boss', boss: true, x: 850 }
  ];
  // 字根洞窟：題目一律走字根單元；shield＝拆字護盾
  L.CAVE = [
    { id: 'c1', name: '反轉蝙蝠', tag: 'un-', kind: 'bat', hp: 30, x: 150 },
    { id: 'c2', name: '重來石怪', tag: 're-', kind: 'golem', hp: 30, x: 330, shield: true },
    { id: 'c3', name: '遠方幽靈', tag: 'tele-', kind: 'wisp', hp: 36, x: 510 },
    { id: 'c4', name: '不要蜘蛛', tag: 'dis-', kind: 'spider', hp: 36, x: 690, shield: true },
    { id: 'cboss', name: '字根石像王', tag: '字根', kind: 'statue', boss: true, x: 860 }
  ];
  L.CAVE_TYPES = ['root-meaning', 'root-word', 'root-type'];
  // 文法城堡：往右上爬的 5 個房間＋王座。door＝時態之門（那個時態答對才開）；traps＝改錯陷阱個數
  L.CASTLE = [
    { id: 'k1', name: '過去式之門', tag: '過去式', kind: 'gargoyle', hp: 30, x: 120, door: 'past' },
    { id: 'k2', name: '改錯陷阱房', tag: '陷阱', kind: 'trapjaw', hp: 30, x: 280, traps: 2 },
    { id: 'k3', name: '進行式之門', tag: '現在進行式', kind: 'gargoyle', hp: 30, x: 440, door: 'progressive' },
    { id: 'k4', name: '盔甲哨兵', tag: '文法', kind: 'armor', hp: 36, x: 600 },
    { id: 'k5', name: '陷阱長廊', tag: '陷阱', kind: 'trapjaw', hp: 36, x: 760, traps: 2 },
    { id: 'kboss', name: '時態騎士王', tag: '時態', kind: 'knight', boss: true, x: 900 }
  ];
  L.CASTLE_TYPES = ['grammar-fill', 'grammar-fix', 'zh2en-type'];
  // 句型港口：碼頭之間要「搭橋」；題目一律句型（重組／看中文選句子／句型填空／中翻英打字），簡單、基本為主
  L.HARBOR = [
    { id: 'h1', name: '海鷗小偷', tag: '句型', kind: 'gull', hp: 30, x: 140 },
    { id: 'h2', name: '螃蟹橋頭', tag: '搭橋', kind: 'crab', hp: 30, x: 330, bridge: true },
    { id: 'h3', name: '漂流木怪', tag: '句型', kind: 'drift', hp: 36, x: 520 },
    { id: 'h4', name: '霧中水手', tag: '搭橋', kind: 'sailor', hp: 36, x: 710, bridge: true },
    { id: 'hboss', name: '句型海怪', tag: '海怪', kind: 'kraken', boss: true, x: 880 }
  ];
  L.HARBOR_TYPES = ['pattern-choose', 'reorder', 'pattern-fill', 'zh2en-type'];
  // 句型等級權重：簡單 45%、基本 40%、進階 15%
  L.pickPatternLv = rng => { const r = rng(); return r < 0.45 ? 1 : r < 0.85 ? 2 : 3; };
  L.harborTypes = function (n, bridge) {
    const base = bridge ? ['reorder', 'pattern-choose', 'reorder', 'pattern-fill'] : L.HARBOR_TYPES;
    const out = []; for (let i = 0; i < n; i++) out.push(base[i % base.length]); return out;
  };
  L.harborBossTypes = function (rng) {
    const a = ['pattern-choose', 'reorder', 'pattern-fill', 'pattern-choose', 'reorder'];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a.concat(['zh2en-type']);
  };
  // 搭橋：每點對一個字＝鋪一塊木板；點錯＝木板晃一下（扣一點血），要重鋪；整句鋪完＝走過去＋暴擊
  L.PLANK_HIT = 4;
  L.bridgeStart = sentence => ({ tokens: String(sentence).trim().split(/\s+/), laid: 0, wobbles: 0 });
  L.bridgeStep = function (st, word) {
    if (st.laid >= st.tokens.length) return { st, ok: false, done: true, hit: 0 };
    if (word === st.tokens[st.laid]) { const n = Object.assign({}, st, { laid: st.laid + 1 }); return { st: n, ok: true, done: n.laid === n.tokens.length, hit: 0 }; }
    return { st: Object.assign({}, st, { wobbles: st.wobbles + 1 }), ok: false, done: false, hit: L.PLANK_HIT };
  };

  // 片語火山（最後一張地圖）：片語跳石；題目一律片語（聽音選、看中文選、看英文選、例句填空、中翻英打字），三個等級都有
  L.VOLCANO = [
    { id: 'v1', name: '岩漿史萊姆', tag: '片語', kind: 'magma', hp: 30, x: 140 },
    { id: 'v2', name: '跳石火蜥', tag: '跳石', kind: 'salamander', hp: 30, x: 320, hop: true },
    { id: 'v3', name: '灰燼鳥', tag: '片語', kind: 'ashbird', hp: 36, x: 500 },
    { id: 'v4', name: '熔岩石人', tag: '跳石', kind: 'lavagolem', hp: 36, x: 680, hop: true },
    { id: 'vboss', name: '片語火龍', tag: '火龍', kind: 'dragon', boss: true, x: 870 }
  ];
  L.VOLCANO_TYPES = ['listen-choose', 'zh2en', 'en2zh', 'phrase-fill', 'zh2en-type'];
  L.volcanoTypes = function (n, hop) {
    const base = hop ? ['phrase-hop', 'zh2en', 'phrase-hop', 'phrase-fill', 'listen-choose'] : ['listen-choose', 'phrase-hop', 'zh2en', 'en2zh', 'phrase-fill', 'zh2en-type'];
    const out = []; for (let i = 0; i < n; i++) out.push(base[i % base.length]); return out;
  };
  // 火龍 7 題：前 6 題五種題型＋跳石打亂，第 7 題一定是中翻英打字
  L.volcanoBossTypes = function (rng) {
    const a = ['listen-choose', 'zh2en', 'en2zh', 'phrase-fill', 'phrase-hop', 'zh2en'];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a.concat(['zh2en-type']);
  };
  // 片語跳石：片語拆成兩半（look | for），選對後半才跳得過去；干擾選項不能剛好也組成另一個真的片語
  L.STONE_HIT = 5;
  L.makeHop = function (phrases, ph, rng) {
    const words = ph.p.split(' '), head = words[0], answer = words.slice(1).join(' ');
    const real = new Set(phrases.map(x => x.p.toLowerCase()));
    const tails = [...new Set(phrases.filter(x => x !== ph && x.p.includes(' ')).map(x => x.p.split(' ').slice(1).join(' ')))]
      .filter(t => t.toLowerCase() !== answer.toLowerCase() && !real.has((head + ' ' + t).toLowerCase()));
    const pick = [];
    while (pick.length < 3 && tails.length) pick.push(tails.splice(Math.floor(rng() * tails.length), 1)[0]);
    const options = [answer].concat(pick);
    for (let i = options.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [options[i], options[j]] = [options[j], options[i]]; }
    return { head, answer, options };
  };
  // 選錯：那顆石頭沉下去（扣一點血），剩下的選項重新洗牌再選一次
  L.hopPick = function (st, choice, rng) {
    if (choice === st.answer) return { ok: true, st };
    const left = st.options.filter(o => o !== choice);
    for (let i = left.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [left[i], left[j]] = [left[j], left[i]]; }
    return { ok: false, hit: L.STONE_HIT, st: Object.assign({}, st, { options: left, sunk: (st.sunk || []).concat([choice]) }) };
  };
  // 通關：第一次打倒片語火龍
  L.ENDING_BOSS = 'vboss'; L.LEGEND_TITLE = '傳說勇者';
  L.endingTriggered = (s, bossId) => bossId === L.ENDING_BOSS && !(s && s.ended);
  L.MAPLISTS = { forest: L.FOREST, cave: L.CAVE, castle: L.CASTLE, harbor: L.HARBOR, volcano: L.VOLCANO };
  L.mapOf = id => Object.keys(L.MAPLISTS).find(k => L.MAPLISTS[k].some(x => x.id === id)) || 'forest';
  L.monster = id => [].concat(...Object.values(L.MAPLISTS)).find(x => x.id === id);
  L.BOSS_Q = 5; L.BOSS_NEED = 4; L.CAVE_BOSS_Q = 6; L.CAVE_BOSS_NEED = 5;
  L.BOSS_RULES = { forest: { q: 5, need: 4, playAll: false }, volcano: { q: 7, need: 6, playAll: true } };  // 其他地圖預設 6 題對 5 題、打滿、最後一題打字
  L.bossRule = map => L.BOSS_RULES[map || 'forest'] || { q: L.CAVE_BOSS_Q, need: L.CAVE_BOSS_NEED, playAll: true };
  // 城堡房間下一題：門沒開→考那個時態（填空／挑對句）；還有陷阱→改錯題（grammar-fix）；都過了→三種輪流
  L.castleRoomNext = function (st) {
    if (st.door && !st.doorOpen) return { types: ['grammar-fill', 'grammar-fix'], topic: st.door };
    if (st.traps > 0) return { types: ['grammar-fix'], topic: null };
    return { types: [L.CASTLE_TYPES[(st.asked || 0) % 3]], topic: null };
  };
  // 陷阱：答對改錯題＝解除；答錯＝陷阱夾一下（扣一點血，陷阱還在）
  L.trapResolve = (traps, ok) => ok ? { traps: Math.max(0, traps - 1), disarmed: true, snap: false } : { traps, disarmed: false, snap: true };
  // 時態之門：只有「答對、而且是那個時態的題目」才打得開
  L.doorResolve = (open, ok, qTopic, door) => !!open || (!!ok && qTopic === door);
  // 騎士王 6 題：前 5 題填空／挑對句混合、主題盡量不重複；第 6 題一定是整句中翻英打字
  L.castleBossPlan = function (topics, rng) {
    const ts = topics.slice();
    for (let i = ts.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [ts[i], ts[j]] = [ts[j], ts[i]]; }
    const types = ['grammar-fill', 'grammar-fix', 'grammar-fill', 'grammar-fix', 'grammar-fill'];
    for (let i = types.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [types[i], types[j]] = [types[j], types[i]]; }
    return types.map((t, i) => ({ type: t, topic: ts[i % ts.length] })).concat([{ type: 'zh2en-type', topic: ts[5 % ts.length] }]);
  };
  L.nodeStatus = function (s, i, list) {
    list = list || L.FOREST; const n = list[i];
    if (s.defeated && s.defeated[n.id]) return 'done';
    return (i === 0 || (s.defeated && s.defeated[list[i - 1].id])) ? 'open' : 'locked';
  };
  // playAll（洞窟 Boss）：一定打滿 6 題（最後一題是打字題），不提早結算勝利；已經不可能贏才提早結束
  L.bossOutcome = function (correct, asked, rule) {
    rule = rule || L.bossRule('forest');
    if ((asked - correct) > (rule.q - rule.need)) return 'lose';
    if (rule.playAll) return asked >= rule.q ? (correct >= rule.need ? 'win' : 'lose') : 'continue';
    return correct >= rule.need ? 'win' : 'continue';
  };
  // 洞窟 Boss 題型：前 5 題三種都有（打亂），第 6 題固定打字
  L.caveBossTypes = function (rng) {
    const a = ['root-meaning', 'root-word', 'root-type', 'root-meaning', 'root-word'];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a.concat(['root-type']);
  };
  // 一般洞窟怪：有護盾的第 2 題就是打字題，之後每 3 題一題
  L.caveMonTypes = function (n, shield) {
    const base = shield ? ['root-meaning', 'root-type', 'root-word'] : ['root-meaning', 'root-word', 'root-type'];
    const out = []; for (let i = 0; i < n; i++) out.push(base[i % 3]); return out;
  };
  // 拆字護盾：只有「答對的打字題」拆得掉，那一下必定暴擊；護盾還在時一般答對只打到一半；答錯護盾不動
  L.shieldResolve = function (shield, ok, typed) {
    if (!shield) return { shield: false, broke: false, mult: 1 };
    if (ok && typed) return { shield: false, broke: true, mult: 1, crit: true };
    return { shield: true, broke: false, mult: ok ? 0.5 : 1 };
  };

  // ---- 掉落：森林 木頭一定有、石頭有時候、鑽石 3%（Boss 石頭保底）；洞窟 石頭一定有、鐵有時候（Boss 保底 2）、鑽石 6% ----
  L.DIAMOND_RATE = 0.03; L.STONE_RATE = 0.35; L.CAVE_DIAMOND_RATE = 0.06; L.IRON_RATE = 0.4; L.CASTLE_DIAMOND_RATE = 0.08; L.GOLD_RATE = 0.35; L.HARBOR_DIAMOND_RATE = 0.10; L.PEARL_RATE = 0.35; L.VOLCANO_DIAMOND_RATE = 0.12;
  L.rollDrop = function (rng, tier, map) {
    const boss = tier === 'boss';
    if (map === 'volcano') {  // 火山：火晶一定有（Boss 3～4）、鑽石 12%
      const crystal = (boss ? 3 : 1) + Math.floor(rng() * 2), diamond = rng() < L.VOLCANO_DIAMOND_RATE ? 1 : 0;
      return { wood: 0, stone: 0, iron: 0, gold: 0, pearl: 0, crystal, diamond };
    }
    if (map === 'harbor') {  // 港口：金一定有、珍珠有時候（Boss 保底 2）、鑽石 10%
      const gold = (boss ? 3 : 1) + Math.floor(rng() * 2), pr = rng();
      const pearl = boss ? 2 : (pr < L.PEARL_RATE ? 1 : 0);
      const diamond = rng() < L.HARBOR_DIAMOND_RATE ? 1 : 0;
      return { wood: 0, stone: 0, iron: 0, gold, pearl, diamond };
    }
    if (map === 'castle') {  // 城堡：鐵一定有、金有時候（Boss 保底 2）、鑽石 8%
      const iron = (boss ? 3 : 1) + Math.floor(rng() * 2), gr = rng();
      const gold = boss ? 2 : (gr < L.GOLD_RATE ? 1 : 0);
      const diamond = rng() < L.CASTLE_DIAMOND_RATE ? 1 : 0;
      return { wood: 0, stone: 0, iron, gold, diamond };
    }
    if (map === 'cave') {
      const stone = (boss ? 3 : 1) + Math.floor(rng() * 2), ir = rng();
      const iron = boss ? 2 : (ir < L.IRON_RATE ? 1 : 0);
      const diamond = rng() < L.CAVE_DIAMOND_RATE ? 1 : 0;
      return { wood: 0, stone, iron, gold: 0, diamond };
    }
    const wood = (boss ? 4 : 2) + Math.floor(rng() * 3);
    const sr = rng(), sn = rng();
    const stone = boss ? 2 + Math.floor(sn * 2) : (sr < L.STONE_RATE ? 1 + Math.floor(sn * 2) : 0);
    const diamond = rng() < L.DIAMOND_RATE ? 1 : 0;
    return { wood, stone, iron: 0, gold: 0, diamond };
  };

  // ---- 合成台 ----
  L.RECIPES = [
    { id: 'sword', name: '木劍', icon: 'sword', cost: { wood: 4 }, desc: '冒險傷害 +5%', once: true },
    { id: 'pick', name: '石鎬', icon: 'pick', cost: { wood: 2, stone: 3 }, desc: '挖開下一張地圖「字根洞窟」', once: true },
    { id: 'lamp', name: '路燈', icon: 'lampi', cost: { wood: 1, stone: 2 }, desc: '放在島上，晚上會發光', lock: 'un', lockText: '學會 un- 字根才解鎖' },
    { id: 'iron', name: '鐵劍', icon: 'sword', cost: { iron: 3, wood: 2 }, desc: '冒險傷害 +10%（取代木劍）', once: true, needItem: 'pick', needText: '先做石鎬，到字根洞窟找鐵' },
    { id: 'key', name: '城堡鑰匙', icon: 'key', cost: { iron: 3, stone: 5 }, desc: '打開「文法城堡」', once: true, appearAfter: 'cboss' },
    { id: 'gshield', name: '金盾', icon: 'gshield', cost: { gold: 3, iron: 2 }, desc: '被打少 20%（陷阱也是）', once: true, needItem: 'key', needText: '先打開文法城堡，在那裡找金', appearAfter: 'cboss' },
    { id: 'boat', name: '小船', icon: 'boat', cost: { gold: 2, iron: 3, wood: 10 }, desc: '開往「句型港口」', once: true, appearAfter: 'kboss' },
    { id: 'anchor', name: '船錨', icon: 'anchor', cost: { pearl: 2, iron: 2 }, desc: '最大血量 +20%', once: true, needItem: 'boat', needText: '先開船到句型港口，在那裡找珍珠', appearAfter: 'kboss' },
    { id: 'boots', name: '防火靴', icon: 'boots', cost: { pearl: 3, gold: 3 }, desc: '走上「片語火山」', once: true, appearAfter: 'hboss' },
    { id: 'flame', name: '火焰劍', icon: 'flame', cost: { crystal: 4, gold: 2, iron: 2 }, desc: '冒險傷害 +20%（最強的武器）', once: true, needItem: 'boots', needText: '先走上片語火山，在那裡找火晶', appearAfter: 'hboss' }
  ];
  // 有 appearAfter 的配方：打倒那隻 Boss 之後才會出現在合成台
  L.recipesFor = s => L.RECIPES.filter(r => !r.appearAfter || (s.defeated && s.defeated[r.appearAfter]));
  // 地圖路線：森林 → 洞窟（石鎬）→ 城堡（城堡鑰匙）→ 之後的地圖（還沒開放）
  L.ROUTE = [
    { id: 'forest', name: '單字森林', scr: 'map', boss: 'boss' },
    { id: 'cave', name: '字根洞窟', scr: 'cave', boss: 'cboss', need: 'pick' },
    { id: 'castle', name: '文法城堡', scr: 'castle', boss: 'kboss', need: 'key' },
    { id: 'harbor', name: '句型港口', scr: 'harbor', boss: 'hboss', need: 'boat' },
    { id: 'volcano', name: '片語火山', scr: 'volcano', boss: 'vboss', need: 'boots' }
  ];
  L.mapUnlocked = (s, id) => { const r = L.ROUTE.find(x => x.id === id); return !!r && !r.soon && (!r.need || !!(s.items && s.items[r.need])); };
  L.swordOf = s => { const it = (s && s.items) || {}; return it.flame ? 'flame' : it.iron ? 'iron' : it.sword ? 'wood' : null; };
  L.canAfford = (w, cost) => Object.keys(cost).every(k => (w[k] || 0) >= cost[k]);
  L.craftCheck = function (s, id) {
    const r = L.RECIPES.find(x => x.id === id);
    if (!r) return { ok: false, reason: '沒有這個配方' };
    if (r.appearAfter && !(s.defeated || {})[r.appearAfter]) return { ok: false, hidden: true, locked: true, reason: '還沒出現' };
    if (r.lock && !(s.learned || {})[r.lock]) return { ok: false, locked: true, reason: r.lockText };
    if (r.needItem && !(s.items || {})[r.needItem]) return { ok: false, locked: true, reason: r.needText };
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
    { id: 'lamp', name: '路燈', cost: { lamp: 1 } },
    { id: 'torch', name: '火把', cost: { wood: 1, iron: 1 } },
    { id: 'flag', name: '城堡旗幟', cost: { gold: 1, wood: 1 } },
    { id: 'lighthouse', name: '燈塔', cost: { pearl: 1, stone: 2 } },
    { id: 'lavalamp', name: '熔岩燈', cost: { crystal: 1, stone: 1 } }
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
  // 開關關掉時：不計時、不顯示膠囊、永遠不鎖（舊的 hi_timer 狀態一律忽略）
  L.playTick = (st, sec, active, enabled) => enabled ? L.timerTick(st, sec, active) : st;
  L.timeView = function (st, enabled) {
    if (!enabled) return { pill: false, lock: null };
    const left = L.timerLeft(st);
    return { pill: true, left, lock: left > 0 ? null : (st.plan === 'paid' ? 'rest' : 'lock') };
  };
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
  // 有石鎬（洞窟打開）後，「打倒 3 隻怪物」換成洞窟版
  L.CAVE_MISSION = { id: 'cave', name: '打倒 3 隻洞窟怪', goal: 3 };
  L.CASTLE_MISSION = { id: 'traps', name: '解除 3 個改錯陷阱', goal: 3 };
  L.HARBOR_MISSION = { id: 'bridges', name: '搭好 3 座橋', goal: 3 };
  // 「打倒 3 隻怪物」換成最新打開那張地圖的任務
  L.VOLCANO_MISSION = { id: 'hops', name: '跳過 10 顆片語石', goal: 10 };
  L.MAP_MISSIONS = [['boots', 'VOLCANO_MISSION'], ['boat', 'HARBOR_MISSION'], ['key', 'CASTLE_MISSION'], ['pick', 'CAVE_MISSION']];
  L.missionList = s => { const hit = L.MAP_MISSIONS.find(([it]) => s.items && s.items[it]); return L.MISSIONS.map(m => m.id === 'wins' && hit ? L[hit[1]] : m); };
  L.MISSION_REWARD = { wood: 3, stone: 1 };
  L.missionsFor = (ms, today) => (!ms || ms.day !== today) ? { day: today, correct: 0, wins: 0, cave: 0, traps: 0, bridges: 0, hops: 0, build: 0, claimed: {} } : ms;
  L.BADGES = [{ id: 'boss', name: '第一次打倒 Boss' }, { id: 'diamond', name: '第一顆鑽石' }, { id: 'combo3', name: '連續答對 3 題' }, { id: 'caver', name: '洞窟探險家' }, { id: 'castle', name: '城堡征服者' }, { id: 'captain', name: '港口船長' }, { id: 'hero', name: '火山英雄' }];
  L.newSave = () => ({
    v: 1, cls: null, lv: 1, xp: 0, mats: { wood: 4, stone: 2, iron: 0, gold: 0, pearl: 0, crystal: 0, diamond: 0 }, items: { sword: 0, pick: 0, lamp: 0, iron: 0, key: 0, gshield: 0, boat: 0, anchor: 0, boots: 0, flame: 0 }, ended: '', title: '', learned: {},
    grid: L.initGrid(), free: [10, 11, 12, 18, 19, 20, 26, 27, 28, 35], mastery: { mage: 0, sword: 0, archer: 0, guard: 0 },
    mistakes: [], badges: {}, defeated: {}, missions: null, rank: { tier: 0, stars: 1, protectUsed: false }, firstWinDay: ''
  });

  if (typeof module !== 'undefined' && module.exports) module.exports = L;
  root.HILogic = L;
  if (typeof document === 'undefined') return;

  // ===================== 畫面 =====================
  const A = root.HIArt, KE = root.KE, AU = root.HIAudio || null;
  const au = (fn, a) => { try { if (AU && AU[fn]) return AU[fn](a); } catch (e) { /* 沒有聲音也能玩 */ } };
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
  // 自己產生的題（句型填空、片語跳石）用 mistakeId 指到題庫裡同一個項目的題，晚上才叫得出來
  function addMistake(q) { const id = q.mistakeId || q.id; if (!id || /^s:/.test(id) || (E && !E.byId[id])) return; S.mistakes = [id].concat(S.mistakes.filter(x => x !== id)).slice(0, 20); }

  // ---- 發音 ----
  let voice = null;
  function pickVoice() { try { const vs = speechSynthesis.getVoices(); voice = vs.find(v => /^en[-_]US/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null; } catch (e) { /* */ } }
  if ('speechSynthesis' in root) { pickVoice(); try { speechSynthesis.addEventListener('voiceschanged', pickVoice); } catch (e) { /* */ } }
  let duckId = null;
  function endDuck() { if (duckId != null) { au('duckEnd', duckId); duckId = null; } }
  function speak(t, vol) {
    try {
      if (!('speechSynthesis' in root) || !t) return;
      speechSynthesis.cancel(); endDuck();
      const u = new SpeechSynthesisUtterance(t); u.lang = 'en-US'; u.rate = 0.9; if (voice) u.voice = voice; if (vol != null) u.volume = vol;
      if (vol !== 0) {  // 英文語音播放時把音樂壓到 15%，講完才恢復
        const id = duckId = au('duckStart'), done = () => { if (duckId === id) duckId = null; au('duckEnd', id); clearTimeout(safe); };
        const safe = setTimeout(done, 1500 + String(t).length * 180);
        u.onend = done; u.onerror = done;
      }
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
    if (r.ups) setTimeout(() => { toast(`升級！Lv ${S.lv}`, 'lvl'); au('sting', 'levelup'); }, 900);
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
    fx.hidden = false; anim(fx, 'go'); au('sting', 'diamond');
    const close = () => { fx.hidden = true; fx.removeEventListener('click', close); };
    fx.addEventListener('click', close); setTimeout(close, 2600);
  }

  // ---- 畫面切換 ----
  let cur = 'title';
  function show(id) { cur = id; document.querySelectorAll('.scr').forEach(s => s.classList.toggle('on', s.id === 'scr-' + id)); renderTimer(); musicScene(); }
  function musicScene() { au('scene', cur === 'battle' && B && B.boss ? (B.map === 'volcano' ? 'dragon' : 'boss') : cur === 'island' && N ? 'night' : cur); }
  const RENDER = { title: renderTitle, class: renderClass, hub: renderHub, map: () => renderMap('forest'), cave: () => renderMap('cave'), castle: () => renderMap('castle'), harbor: () => renderMap('harbor'), volcano: () => renderMap('volcano'), island: renderIsland, arena: renderArenaLobby, rewards: renderRewards };
  function go(id) { if (id !== 'island') N = null; if (id !== 'arena') stopArenaTimer(); if (RENDER[id]) RENDER[id](); show(id); }

  function hud(eyebrow, title, back) {
    const need = L.xpNeed(S.lv);
    return h('header', { class: 'hud' },
      back ? h('button', { class: 'icon-btn', onclick: () => go(back), 'aria-label': '返回' }, '←') : null,
      h('div', { class: 'hud-t' }, h('div', { class: 'eyebrow' }, eyebrow), h('div', { class: 'hud-title' }, title)),
      h('div', { class: 'hud-r' },
        h('div', { class: 'lv' }, h('b', {}, 'Lv ' + S.lv), h('div', { class: 'bar' }, h('i', { style: `transform:scaleX(${(S.xp / need).toFixed(3)})` }))),
        h('div', { class: 'mats' }, ['wood', 'stone', 'iron', 'gold', 'pearl', 'crystal', 'diamond'].filter(k => !MAT_GATE[k] || S.items[MAT_GATE[k]] || S.mats[k]).map(k => h('span', { class: 'mat', title: MAT_NAME[k], html: A.icon(MAT_ICON[k]) + `<b>${S.mats[k] || 0}</b>` })))));
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
        h('button', { class: 'btn big', onclick: () => { au('unlock'); speak(' ', 0); go(S.cls ? 'hub' : 'class'); } }, '開始'),
        h('div', { class: 't-demo' }, h('div', { class: 'eyebrow' }, TIME_LIMITS_ENABLED ? '試玩設定 · 帳號類型' : '試玩設定'), TIME_LIMITS_ENABLED ? seg : null,
          h('div', { class: 'row t-row' }, h('button', { class: 'btn ghost small', onclick: openParent }, '家長設定'), h('a', { class: 'linkish', href: '../../#s/game' }, '← 回小朋友學習站')), soundSliders())));
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
    const done = L.missionList(S).filter(m => ms[m.id] >= m.goal).length;
    const tile = (cls, eb, name, sub, art, fn) => h('button', { class: 'hub-tile ' + cls, onclick: fn },
      h('div', { class: 'ht-art', html: art }), h('div', { class: 'eyebrow' }, eb), h('div', { class: 'ht-name' }, name), h('div', { class: 'ht-sub' }, sub));
    s.append(hud('HERO ISLAND', '勇者島', 'title'),
      h('div', { class: 'hub-main' },
        h('div', { class: 'hub-hero' }, h('div', { class: 'hub-art', html: A.hero(S.cls) }),
          h('div', { class: 'eyebrow' }, `${c.en} · 熟練度 ${S.mastery[S.cls] || 0}`), h('div', { class: 'hub-name' }, c.name, S.title ? h('span', { class: 'tag red' }, S.title) : null),
          h('button', { class: 'linkish', onclick: () => go('class') }, '換職業')),
        h('div', { class: 'hub-tiles' },
          tile('t-adv', 'DAY · WORD FOREST', '冒險', S.items.boots ? '森林 → 洞窟 → 城堡 → 港口 → 火山' : S.items.boat ? '森林 → 洞窟 → 城堡 → 港口' : S.items.key ? '森林 → 洞窟 → 城堡' : S.items.pick ? '單字森林 → 字根洞窟' : '單字森林', A.monster('leaf'), () => go('map')),
          tile('t-isl', 'ISLAND', '我的島', '蓋東西 · 合成台 · 守夜', A.tile('house'), () => go('island')),
          tile('t-arena', 'ARENA', '競技場', '影子對戰', A.hero('sword', 'shadow'), () => go('arena')),
          tile('t-rew', 'REWARDS', '獎勵', `今日任務 ${done}/3`, A.icon('star'), () => go('rewards')))));
  }

  // ---- 地圖（森林／洞窟／城堡／港口／火山共用） ----
  // portal＝通往下一張地圖的入口節點；need＝要先做的道具
  const MAPUI = {
    forest: { scr: '#scr-map', eyebrow: 'DAY · WORD FOREST', title: '單字森林', back: 'hub', mid: x => A.roadMid(x), art: n => A.forest(n), portal: { to: 'cave', x: 905, y: 536, label: '字根洞窟', num: '↓' } },
    cave: { scr: '#scr-cave', eyebrow: 'UNDERGROUND · ROOT CAVE', title: '字根洞窟', back: 'map', mid: x => A.caveMid(x), art: n => A.cave(n), portal: { to: 'castle', x: 930, y: 250, label: '文法城堡', num: '↑' } },
    castle: { scr: '#scr-castle', eyebrow: 'UPSTAIRS · GRAMMAR CASTLE', title: '文法城堡', back: 'cave', mid: x => A.castleMid(x), art: n => A.castle(n), portal: { to: 'harbor', x: 120, y: 260, label: '句型港口', num: '⛵' } },
    harbor: { scr: '#scr-harbor', eyebrow: 'SEASIDE · SENTENCE HARBOR', title: '句型港口', back: 'castle', mid: x => A.harborMid(x), art: n => A.harbor(n), portal: { to: 'volcano', x: 960, y: 520, label: '片語火山', num: '▲' } },
    volcano: { scr: '#scr-volcano', eyebrow: 'SUMMIT · PHRASE VOLCANO', title: '片語火山', back: 'harbor', mid: x => A.volcanoMid(x), art: n => A.volcano(n) }
  };
  const PORTAL_MSG = {
    cave: () => '洞口被石頭堵住了：先到合成台做「石鎬」',
    castle: () => S.defeated.cboss ? '城門鎖著：到合成台做「城堡鑰匙」（鐵 ×3＋石頭 ×5）' : '先打倒字根石像王，合成台才會出現「城堡鑰匙」',
    harbor: () => S.defeated.kboss ? '要坐船才到得了：到合成台做「小船」（金 ×2＋鐵 ×3＋木頭 ×10）' : '先打倒時態騎士王，合成台才會出現「小船」',
    volcano: () => S.defeated.hboss ? '火山太燙了：到合成台做「防火靴」（珍珠 ×3＋金 ×3）' : '先打倒句型海怪，合成台才會出現「防火靴」'
  };
  const CAVE_BONUS = { mage: '打字題傷害 ×1.5', sword: '連續答對 2 題就暴擊', archer: '答完會念出那個單字給你聽', guard: '被打只扣一半的血' };
  const MAP_NOTE = {
    forest: () => `${L.CLASSES[S.cls].name}的題目：${L.CLASSES[S.cls].skill}。打倒前一隻，下一隻才會出現；Boss 5 題要答對 4 題。`,
    cave: () => `不分職業都考字根。帶 🛡 的怪有「拆字護盾」：要答對打字題才拆得開。Boss 6 題要答對 5 題，最後一題一定是打字題。${L.CLASSES[S.cls].name}在洞窟：${CAVE_BONUS[S.cls]}。`,
    castle: () => '不分職業都考文法。「時態之門」要答對那個時態才打得開；「改錯陷阱」要挑出對的句子才解除，答錯會被夾一下。騎士王 6 題要對 5 題，最後一題是整句中翻英。' + (S.cls === 'sword' ? '劍士在城堡：傷害 ×1.5！' : ''),
    volcano: () => '最後一張地圖！不分職業都考片語。「片語跳石」要選對片語的後半段才跳得過去，選錯石頭會沉下去。片語火龍 7 題要對 6 題，最後一題是中翻英打字。' + (S.ended ? `你已經是「${L.LEGEND_TITLE}」了，地圖可以一直重玩，也可以去競技場再挑戰！` : ''),
    harbor: () => '不分職業都考句型。句子重組題要「搭橋」：照順序點字，一個字一塊木板，點錯木板會晃。海怪 6 題要對 5 題，最後一題是整句中翻英。' + (S.cls === 'guard' ? '守護者在港口：傷害 ×1.5！' : '')
  };
  // 試玩捷徑：直接拿到某張地圖之前的所有通行道具
  const UNLOCK_ITEMS = { cave: ['pick'], castle: ['pick', 'key'], harbor: ['pick', 'key', 'boat'], volcano: ['pick', 'key', 'boat', 'boots'] };
  function demoUnlock(to) { UNLOCK_ITEMS[to].forEach(k => { S.items[k] = 1; }); saveS(); toast(`（試玩）直接打開${(L.ROUTE.find(r => r.id === to) || {}).name}！`); go((L.ROUTE.find(r => r.id === to) || {}).scr || 'map'); }
  const demoUnlockCave = () => demoUnlock('cave'), demoUnlockCastle = () => demoUnlock('castle'), demoUnlockHarbor = () => demoUnlock('harbor');
  // 地圖路線：森林 ✓ → 洞窟 ✓ → 城堡 → 港口 → 火山
  function routeBar(curId) {
    return h('nav', { class: 'route', 'aria-label': '地圖路線' }, L.ROUTE.map((r, i) => {
      const open = L.mapUnlocked(S, r.id), done = r.boss && S.defeated[r.boss];
      return [i ? h('span', { class: 'route-arrow', 'aria-hidden': 'true' }, '→') : null,
        h('button', { class: 'route-b' + (r.id === curId ? ' on' : '') + (open ? '' : ' locked') + (r.soon ? ' soon' : ''), disabled: !open || r.id === curId,
          title: r.soon ? '之後的地圖' : '', onclick: () => go(r.scr) }, r.soon ? h('span', { class: 'silhouette' }, '?') : null, r.name, done ? ' ✓' : '', !open ? h('span', { html: A.icon('lock') }) : null)];
    }));
  }
  function renderMap(mapId) {
    mapId = MAPUI[mapId] ? mapId : 'forest';
    const M = MAPUI[mapId], list = L.MAPLISTS[mapId], s = $(M.scr); s.innerHTML = '';
    const nodes = list.map((n, i) => ({ id: n.id, x: n.x, y: Math.round(M.mid(n.x)) - 6, r: n.boss ? 44 : 34, boss: n.boss, kind: n.kind, label: n.name, tag: n.tag, shield: n.shield, trap: !!n.traps, num: i + 1, status: L.nodeStatus(S, i, list) }));
    const P = M.portal, nextRoute = P && L.ROUTE.find(r => r.id === P.to);
    if (P && nextRoute && !nextRoute.soon) nodes.push({ id: 'go:' + P.to, x: P.x, y: P.y, r: 28, label: P.label, num: P.num, status: L.mapUnlocked(S, P.to) ? 'open' : 'locked' });
    const wrap = h('div', { class: 'map-wrap', html: M.art(nodes) });
    wrap.addEventListener('click', e => {
      const g = e.target.closest('[data-node]'); if (!g) return;
      const id = g.getAttribute('data-node');
      if (id.slice(0, 3) === 'go:') { const to = id.slice(3), r = L.ROUTE.find(x => x.id === to); return L.mapUnlocked(S, to) ? go(r.scr) : toast(PORTAL_MSG[to]()); }
      const i = list.findIndex(x => x.id === id);
      if (L.nodeStatus(S, i, list) === 'locked') return toast('先打倒前一隻怪物');
      startBattle(id);
    });
    const nxt = P && nextRoute && !nextRoute.soon && !L.mapUnlocked(S, P.to) ? h('button', { class: 'linkish', onclick: () => demoUnlock(P.to) }, `試玩：直接解鎖${P.label}`) : null;
    s.append(hud(M.eyebrow, M.title, M.back), wrap, h('div', { class: 'map-note' }, MAP_NOTE[mapId](), nxt), routeBar(mapId));
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
      h('div', { class: 'q-type' }, q.typeLabel || (KE && KE.TYPES[q.type]) || '題目', isTyped(q) ? h('span', { class: 'tag red' }, '打字題 · 傷害加成') : null),
      h('div', { class: 'q-row' }, say, h('div', { class: 'q-prompt' + (q.en ? ' en' : '') + (String(q.prompt).length > 26 ? ' long' : '') }, q.prompt)),
      q.sub ? h('div', { class: 'q-sub' + (q.subEn ? ' en' : '') }, q.sub) : null), body, fb);
    if (q.auto && q.speakText) speak(q.speakText);
    const ctrl = { hint() { }, timeout() { if (!answered) finish(false, true); }, get answered() { return answered; } };
    function finish(ok, timeUp) {
      if (answered) return; answered = true; box.classList.add('done');
      au('sfx', ok ? 'correct' : 'wrong');
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
    } else if (q.input === 'chips' && o.bridge) {
      // 搭橋：照順序點字，點對一個就鋪一塊木板；點錯木板會晃（扣一點血），要重新點
      let st = L.bridgeStart(q.answer);
      const ans = h('div', { class: 'chip-ans' }), pool = h('div', { class: 'chip-pool' });
      q.options.forEach(w => { const c = h('button', { class: 'chip en', onclick: () => {
        if (answered || c.parentNode !== pool) return;
        const r = L.bridgeStep(st, w); st = r.st;
        if (r.ok) { ans.append(c); o.bridge.onPlank(st.laid - 1, st.tokens.length); if (r.done) { q.wobbles = st.wobbles; q.bridged = true; finish(true); } }
        else { anim(c, 'wobble'); o.bridge.onWobble(st.laid, r.hit); }
      } }, w); pool.append(c); });
      body.append(h('div', { class: 'bridge-tip' }, '照順序點字，一個字＝一塊木板'), ans, pool);
      o.bridge.onStart(st.tokens.length);
      ctrl.hint = () => { const c = [...pool.children].find(x => x.textContent === st.tokens[st.laid]); if (c) { c.classList.add('hinted'); c.click(); } };
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
    } else if (q.type === 'phrase-hop' && o.hop) {
      // 片語跳石：選對後半段才跳得過去；選錯那顆石頭沉下去（扣一點血），剩下的重新洗牌
      let st = { answer: q.answer, options: q.options.slice(), sunk: [] };
      const grid = h('div', { class: 'opts stones-opts' });
      const draw = () => { grid.innerHTML = ''; st.options.forEach(op => grid.append(h('button', { class: 'opt en stone-b', onclick: () => {
        if (answered) return;
        const r = L.hopPick(st, op, Math.random); st = r.st;
        if (r.ok) { q.hopMiss = st.sunk.length; o.hop.onJump(op); finish(true); }
        else { o.hop.onSink(op, r.hit); draw(); }
      } }, op))); };
      draw(); body.append(grid);
      ctrl.hint = () => { const wrong = st.options.filter(x => x !== st.answer); if (wrong.length > 1) { st = Object.assign({}, st, { options: st.options.filter(x => x !== wrong[0]) }); draw(); } };
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
  const MAT_NAME = { wood: '木頭', stone: '石頭', iron: '鐵', gold: '金', pearl: '珍珠', crystal: '火晶', diamond: '鑽石' };
  const MAT_ICON = { wood: 'wood', stone: 'stone', iron: 'iron', gold: 'goldbar', pearl: 'pearl', crystal: 'crystal', diamond: 'diamond' };
  const MAT_GATE = { iron: 'pick', gold: 'key', pearl: 'boat', crystal: 'boots' };  // 打開那張地圖之前不顯示這種材料
  const MAP_EYEBROW = { forest: 'BATTLE · WORD FOREST', cave: 'BATTLE · ROOT CAVE', castle: 'BATTLE · GRAMMAR CASTLE', harbor: 'BATTLE · SENTENCE HARBOR', volcano: 'BATTLE · PHRASE VOLCANO' };
  const MAP_SCR = { cave: 'cave', castle: 'castle', harbor: 'harbor', volcano: 'volcano' };
  // 洞窟題組：優先出這隻怪自己的字根（un- 怪就考 un-），不夠再從整個字根單元補
  function caveQs(mon, n) {
    if (!E) return sampleQs(3);
    const root0 = E.D.roots.find(r => r.p === mon.tag), sl = KE.slug, used = new Set();
    const types = mon.boss ? L.caveBossTypes(Math.random) : L.caveMonTypes(n, mon.shield);
    const idsFor = (r, t) => t === 'root-meaning' ? [`r:${sl(r.p)}:meaning`] : r.words.map(w => `r:${sl(w.w)}:${t === 'root-word' ? 'word' : 'type'}`);
    return types.map(t => {
      const pool = (root0 ? shuffle(idsFor(root0, t)) : []).concat(shuffle(E.list({ modules: ['roots'], types: [t] }).map(m => m.id)));
      const id = pool.find(x => !used.has(x) && E.byId[x]); used.add(id);
      return id ? E.get(id) : null;
    }).filter(Boolean);
  }
  // 城堡：文法題（12 個主題的填空／挑對句／整句中翻英），用過的不重複
  function grammarPick(types, topic) {
    if (!E) return null;
    const pool = E.list({ modules: ['grammar'], types, topics: topic ? ['grammar:' + topic] : null }).filter(m => !B.used.has(m.id));
    const m = pool[Math.floor(Math.random() * pool.length)] || E.list({ modules: ['grammar'], types })[0];
    if (!m) return null; B.used.add(m.id); return E.get(m.id);
  }
  function castleBossQs() {
    if (!E) return sampleQs(3);
    return L.castleBossPlan(E.D.grammar.map(g => g.id), Math.random).map(p => grammarPick([p.type], p.topic)).filter(Boolean);
  }
  // 港口：句型題，等級 簡單 45%／基本 40%／進階 15%
  const PT_STOP = new Set(['___', '…', '...']);
  function patternFill(p) {
    const tpl = new Set(p.pattern.toLowerCase().replace(/[.,!?]/g, ' ').split(/\s+/).filter(w => w && !PT_STOP.has(w)));
    const j = Math.floor(Math.random() * p.ex.length), e = p.ex[j];
    const words = e.en.replace(/[.,!?]/g, '').split(/\s+/), slot = words.filter(w => !tpl.has(w.toLowerCase()) && w.length > 1);
    const ans = slot[slot.length - 1] || words[words.length - 1];
    const others = shuffle([...new Set(E.D.patterns.filter(x => x !== p && (x.lv || 2) === (p.lv || 2)).flatMap(x => x.ex.flatMap(y => y.en.replace(/[.,!?]/g, '').split(/\s+/))).filter(w => w.length > 2 && w.toLowerCase() !== ans.toLowerCase()))]).slice(0, 3);
    return { id: `pf:${p.id}:${j}`, mistakeId: `p:${p.id}:${j}:choose`, module: 'patterns', type: 'pattern-fill', typeLabel: '句型填空', prompt: e.en.replace(new RegExp('\\b' + ans.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b'), '___'), en: true, sub: e.zh,
      options: shuffle([ans].concat(others)), answer: ans, speakText: e.en, why: `句型：${p.pattern}（${p.zh}）` };
  }
  function harborQs(mon, n) {
    if (!E) return sampleQs(3);
    const types = mon.boss ? L.harborBossTypes(Math.random) : L.harborTypes(n, mon.bridge);
    return types.map(t => {
      for (let k = 0; k < 20; k++) {
        const lv = L.pickPatternLv(Math.random), ps = E.D.patterns.filter(p => (p.lv || 2) === lv), p = ps[Math.floor(Math.random() * ps.length)];
        if (!p) continue;
        if (t === 'pattern-fill') { const q = patternFill(p); if (!B.used.has(q.id)) { B.used.add(q.id); return q; } continue; }
        const ids = t === 'zh2en-type' ? (p.typed || []).map((x, i) => `p:${p.id}:t${i}`) : p.ex.map((x, j) => `p:${p.id}:${j}:${t === 'reorder' ? 'reorder' : 'choose'}`);
        const id = shuffle(ids).find(x => !B.used.has(x) && E.byId[x]);
        if (id) { B.used.add(id); return E.get(id); }
      }
      return null;
    }).filter(Boolean);
  }
  // 火山：片語題（三個等級都有）＋片語跳石
  const PH_SUFFIX = { 'listen-choose': 'listen', zh2en: 'zh2en', en2zh: 'en2zh', 'phrase-fill': 'fill', 'zh2en-type': 'type' };
  function volcanoQs(mon, n) {
    if (!E) return sampleQs(3);
    const types = mon.boss ? L.volcanoBossTypes(Math.random) : L.volcanoTypes(n, mon.hop);
    return types.map(t => {
      const ph = shuffle(E.D.phrases.filter(p => (t !== 'phrase-hop' || p.p.includes(' ')) && !B.used.has(p.id + t)))[0];
      if (!ph) return null; B.used.add(ph.id + t);
      if (t === 'phrase-hop') {
        const hp = L.makeHop(E.D.phrases, ph, Math.random);
        return { id: 'hop:' + ph.id, mistakeId: `ph:${ph.id}:zh2en`, module: 'phrases', type: 'phrase-hop', typeLabel: '片語跳石', prompt: ph.zh, sub: `${hp.head} ＿＿＿：選對後半段，跳到下一顆石頭`,
          options: hp.options, answer: hp.answer, head: hp.head, speakText: ph.p, why: `${ph.p} ＝ ${ph.zh}` };
      }
      return E.get(`ph:${ph.id}:${PH_SUFFIX[t]}`);
    }).filter(Boolean);
  }
  function mapQs(n) {
    if (B.map === 'volcano') return volcanoQs(B.mon, n);
    if (B.map === 'harbor') return harborQs(B.mon, n);
    if (B.map === 'cave') return caveQs(B.mon, n);
    if (B.map === 'castle') {
      if (B.boss) return castleBossQs();
      const p = L.castleRoomNext({ door: B.door, doorOpen: B.doorOpen, traps: B.traps, asked: B.asked });
      return [grammarPick(p.types, p.topic) || sampleQs(1)[0]];
    }
    return quizFor(S.cls, n);
  }
  function shieldParts(mon) {
    const r = E && E.D.roots.find(x => x.p === mon.tag), w = r && r.words[0];
    return w ? w.parts : [String(mon.tag || '').replace(/-/g, ''), '???'];
  }
  function startBattle(id) {
    const mon = L.monster(id), boss = !!mon.boss, map = L.mapOf(id), rule = L.bossRule(map);
    B = { mon, boss, map, rule, shield: !!mon.shield, door: mon.door || null, doorOpen: !mon.door, traps: mon.traps || 0, used: new Set(),
      hp: boss ? rule.need : mon.hp, maxHp: boss ? rule.need : mon.hp, php: L.PLAYER_HP, combo: 0, qi: 0, asked: 0, correct: 0, over: false };
    B.php = B.maxPhp = L.maxHp(S);
    B.qs = (map === 'castle' && !boss) ? [] : mapQs(boss ? rule.q : 10);
    renderBattle(); show('battle'); nextQ();
  }
  const mapScr = () => B ? (MAP_SCR[B.map] || 'map') : 'map';
  const doorName = t => (E && (E.D.grammar.find(g => g.id === t) || {}).title || t).replace(/（.*?）/, '');
  function renderBattle() {
    const s = $('#scr-battle'), M = B.map; s.innerHTML = '';
    s.append(
      h('header', { class: 'hud' }, h('button', { class: 'icon-btn', onclick: () => { B.over = true; go(mapScr()); }, 'aria-label': '離開戰鬥' }, '←'),
        h('div', { class: 'hud-t' }, h('div', { class: 'eyebrow' }, B.boss ? `BOSS · ${B.rule.q} 題要答對 ${B.rule.need} 題${M !== 'forest' ? ' · 最後一題打字' : ''}` : MAP_EYEBROW[M]), h('div', { class: 'hud-title' }, B.mon.name)),
        h('div', { class: 'b-info', id: 'bInfo' })),
      h('div', { class: 'b-stage ' + M, id: 'bStage' },
        h('div', { class: 'b-bg', html: A.stage(M) }),
        h('div', { class: 'b-side b-hero' }, h('div', { class: 'hp' }, h('span', {}, '我'), h('div', { class: 'bar' }, h('i', { id: 'bPhp' }))), h('div', { class: 'b-art', id: 'bHero', html: A.hero(S.cls) })),
        h('div', { class: 'b-side b-mon' + (B.boss ? ' boss' : '') },
          h('div', { class: 'hp mon' }, h('span', {}, B.mon.name), B.mon.tag && M === 'cave' ? h('span', { class: 'mon-tag en' }, B.mon.tag) : null, h('div', { class: 'bar' + (B.boss ? ' seg' : ''), style: `--n:${B.maxHp}` }, h('i', { id: 'bMhp' }))),
          h('div', { class: 'b-art', id: 'bMon', html: A.monster(B.mon.kind) }),
          B.shield ? h('div', { class: 'shield', id: 'bShield', 'aria-label': '拆字護盾' }, h('small', {}, '拆字護盾'), h('div', { class: 'sh-parts' }, shieldParts(B.mon).map((p, i) => [i ? h('i', {}, '|') : null, h('b', { class: 'en' }, p)]))) : null,
          B.door ? h('div', { class: 'door', id: 'bDoor', 'aria-label': '時態之門' }, h('small', {}, '時態之門'), h('b', {}, doorName(B.door)), h('span', {}, '答對這個時態才打得開')) : null),
        M === 'volcano' ? h('div', { class: 'stones', id: 'bStones', hidden: true }, h('b', { class: 'stone head en', id: 'bStoneA' }, ''), h('i', { class: 'lava' }), h('b', { class: 'stone next en', id: 'bStoneB' }, '?')) : null,
        M === 'harbor' ? h('div', { class: 'bridge', id: 'bBridge', hidden: true }, h('i', { class: 'dock l' }), h('div', { class: 'planks', id: 'bPlanks' }), h('i', { class: 'dock r' })) : null,
        B.traps ? h('div', { class: 'trap', id: 'bTrap' }, h('small', {}, '改錯陷阱'), h('div', { class: 'trap-s en', id: 'bTrapS' }, ''), h('span', { id: 'bTrapN' }, '')) : null),
      h('div', { class: 'qbox', id: 'bQ' }));
  }
  function updBattle() {
    $('#bPhp').style.transform = `scaleX(${B.php / B.maxPhp})`;
    $('#bMhp').style.transform = `scaleX(${B.hp / B.maxHp})`;
    $('#bInfo').textContent = B.boss ? `第 ${Math.min(B.asked + 1, B.rule.q)}/${B.rule.q} 題 · 答對 ${B.correct}` : B.shield ? '🛡 打字題才拆得開' : (B.door && !B.doorOpen) ? '🚪 門還關著' : B.traps ? `⚠ 陷阱 ×${B.traps}` : (B.combo >= 2 ? `COMBO ×${B.combo}` : '');
    const tn = $('#bTrapN'); if (tn) tn.textContent = B.traps ? `還有 ${B.traps} 個陷阱：挑出對的句子就解除` : '陷阱全部解除了！';
  }
  function nextQ() {
    if (B.over) return;
    if (B.qi >= B.qs.length) B.qs = B.qs.concat(mapQs(6));
    const q = B.qs[B.qi++];
    // 改錯陷阱：把錯的那一句掛在陷阱上
    const ts = $('#bTrapS');
    if (ts) { const wrong = B.traps && q.type === 'grammar-fix' ? (q.options || []).find(o => o !== q.answer) : ''; ts.textContent = wrong || ''; $('#bTrap').classList.toggle('off', !wrong); }
    const br = $('#bBridge'); if (br) br.hidden = !(q.input === 'chips');
    const sto = $('#bStones'); if (sto) { sto.hidden = q.type !== 'phrase-hop'; $('#bStoneA').textContent = q.head || ''; const nb = $('#bStoneB'); nb.textContent = '?'; nb.className = 'stone next en'; }
    askQ($('#bQ'), q, { onAnswer: ok => battleHit(ok, q), onDone: afterQ, bridge: B.map === 'harbor' ? BRIDGE : null, hop: B.map === 'volcano' ? HOP : null });
    updBattle();
  }
  // 跳石動畫：選對＝石頭亮起來、主角跳過去；選錯＝石頭沉進岩漿（扣一點血）
  const HOP = {
    onJump(op) { const nb = $('#bStoneB'); if (nb) { nb.textContent = op; nb.classList.add('ok'); } anim($('#bHero'), 'jump'); au('sfx', 'hop'); },
    onSink(op, hit) {
      const nb = $('#bStoneB'); if (nb) { nb.textContent = op; nb.classList.remove('sink'); void nb.offsetWidth; nb.classList.add('sink'); setTimeout(() => { nb.textContent = '?'; nb.classList.remove('sink'); }, 700); }
      B.php = Math.max(0, B.php - hit); au('sfx', 'sink'); floatText($('#bStage'), '石頭沉下去了 -' + hit, 'dmg hurt', 40, 40); updBattle();
    }
  };
  // 搭橋動畫：木板一塊一塊鋪上去；點錯那塊晃一下（扣一點血）
  const BRIDGE = {
    onStart(n) { const pl = $('#bPlanks'); if (!pl) return; pl.innerHTML = ''; for (let i = 0; i < n; i++) pl.append(h('i', { class: 'plank' })); pl.style.setProperty('--n', n); },
    onPlank(i) { const p = $('#bPlanks') && $('#bPlanks').children[i]; if (p) p.classList.add('laid'); au('sfx', 'plank'); },
    onWobble(i, hit) {
      const p = $('#bPlanks') && $('#bPlanks').children[i]; if (p) anim(p, 'wobble');
      B.php = Math.max(0, B.php - hit); au('sfx', 'splash'); floatText($('#bStage'), '木板晃了一下 -' + hit, 'dmg hurt', 40, 40); updBattle();
    }
  };
  function battleHit(ok, q) {
    B.asked++; B.combo = L.comboNext(B.combo, ok);
    const stage = $('#bStage'), typed = isTyped(q), sh = L.shieldResolve(B.shield, ok, typed);
    const room = B.map === 'castle' && !B.boss;
    const trap = room && B.traps > 0 && q.type === 'grammar-fix' ? L.trapResolve(B.traps, ok) : null;
    const opened = room && B.door && !B.doorOpen && L.doorResolve(false, ok, q.topic, B.door);
    const crossed = ok && q.bridged;
    if (ok) {
      B.correct++; S.mastery[S.cls] = (S.mastery[S.cls] || 0) + 1; missions().correct++;
      const d = L.damage({ combo: B.combo, typed, cls: S.cls, sword: L.swordOf(S), map: B.map, forceCrit: sh.crit || crossed, shieldMult: sh.mult });
      if (q.type === 'phrase-hop') { missions().hops = (missions().hops || 0) + 1; if (q.hopMiss) addMistake(q); }
      if (crossed) { missions().bridges = (missions().bridges || 0) + 1; anim($('#bHero'), 'cross'); announce('橋搭好了！衝過去！', true); if (q.wobbles) addMistake(q); }
      B.hp = Math.max(0, B.hp - (B.boss ? 1 : d.dmg));
      anim($('#bHero'), 'atk'); setTimeout(() => { anim($('#bMon'), 'hit'); au('sfx', d.crit ? 'crit' : 'hit'); }, 170);
      floatText(stage, (d.crit ? '暴擊！' : '') + '-' + d.dmg, 'dmg' + (d.crit ? ' crit' : ''), 70, 28);
      if (sh.broke) { B.shield = false; const el = $('#bShield'); if (el) { el.classList.add('broken'); setTimeout(() => el.remove(), 800); } au('sfx', 'shield'); announce('拆字護盾破了！', true); }
      else if (B.shield) floatText(stage, '護盾擋掉一半！', 'note', 70, 12);
      else if (opened) { B.doorOpen = true; const el = $('#bDoor'); if (el) { el.classList.add('open'); setTimeout(() => el.remove(), 900); } au('sfx', 'door'); announce(doorName(B.door) + '之門打開了！', true); }
      else if (trap && trap.disarmed) { B.traps = trap.traps; missions().traps = (missions().traps || 0) + 1; announce('陷阱解除！', true); au('sfx', 'door'); }
      else if (B.combo >= 2) announce(`連續答對 ×${B.combo}！`, B.combo >= 3);
      if (B.combo >= 3) award('combo3');
    } else {
      addMistake(q);
      if (trap && trap.snap) {  // 陷阱夾一下：扣一點血，就這樣
        const hb = L.trapSnap(S); B.php = Math.max(0, B.php - hb);
        anim($('#bTrap'), 'snap'); setTimeout(() => { anim($('#bHero'), 'hit'); au('sfx', 'trap'); }, 120);
        floatText(stage, '喀！陷阱夾到 -' + hb, 'dmg hurt', 30, 30);
      } else {
        const hb = L.hitBack(B.map, S.cls, S);
        B.php = Math.max(0, B.php - hb);
        anim($('#bMon'), 'atk'); setTimeout(() => { anim($('#bHero'), 'hit'); flash(); au('sfx', 'hit'); }, 170);
        floatText(stage, '-' + hb, 'dmg hurt', 24, 32);
        if (B.shield) floatText(stage, '護盾還在', 'note', 70, 12);
        if (room && B.door && !B.doorOpen) floatText(stage, '門還關著', 'note', 70, 12);
      }
    }
    // 射手在洞窟：答完念出那個單字
    if (B.map === 'cave' && S.cls === 'archer' && q.speakText) setTimeout(() => speak(q.speakText), 450);
    saveS(); updBattle();
  }
  function afterQ() {
    if (B.over) return;
    if (B.boss) { const o = L.bossOutcome(B.correct, B.asked, B.rule); if (o !== 'continue') return endBattle(o === 'win'); }
    else { if (B.hp <= 0) return endBattle(true); if (B.php <= 0) return endBattle(false); }
    nextQ();
  }
  const dropChip = (k, n, rare) => h('span', { class: 'drop' + (rare ? ' rare' : ''), html: A.icon(MAT_ICON[k]) + `<b>${MAT_NAME[k]} ×${n}</b>` });
  function endBattle(win) {
    B.over = true;
    const s = $('#scr-battle'), res = h('div', { class: 'result' }), card = h('div', { class: 'result-card' }), M = B.map;
    if (win) {
      const drop = L.rollDrop(Math.random, B.boss ? 'boss' : 'normal', M), xp = B.boss ? 50 : 20;
      Object.keys(MAT_NAME).forEach(k => { S.mats[k] = (S.mats[k] || 0) + (drop[k] || 0); });
      S.defeated[B.mon.id] = true; missions().wins++; if (M === 'cave') missions().cave = (missions().cave || 0) + 1;
      if (B.boss) award('boss');
      if (B.boss && M === 'cave') award('caver');
      if (B.boss && M === 'castle') award('castle');
      if (B.boss && M === 'harbor') award('captain');
      if (B.boss && M === 'volcano') award('hero');
      if (L.endingTriggered(S, B.mon.id)) { S.ended = today(); S.title = L.LEGEND_TITLE; setTimeout(showEnding, 1500); }
      const tip = M === 'harbor' && B.boss && !S.items.boots ? ' · 合成台出現「防火靴」了！' : M === 'volcano' && drop.crystal ? ' · 火晶可以做火焰劍、熔岩燈' : M === 'castle' && B.boss && !S.items.boat ? ' · 合成台出現「小船」了！' : M === 'cave' && B.boss && !S.items.key ? ' · 合成台出現「城堡鑰匙」了！' : M === 'cave' && drop.iron ? ' · 鐵可以做鐵劍、火把' : M === 'castle' && drop.gold ? ' · 金可以做金盾、城堡旗幟' : M === 'castle' && B.boss && !S.items.boat ? ' · 合成台出現「小船」了！' : M === 'harbor' && drop.pearl ? ' · 珍珠可以做船錨、燈塔' : '';
      card.append(h('div', { class: 'eyebrow' }, 'VICTORY'), h('h2', {}, `打倒${B.mon.name}了！`),
        h('div', { class: 'drops' }, Object.keys(MAT_NAME).filter(k => drop[k]).map(k => dropChip(k, drop[k], k === 'diamond')), h('span', { class: 'drop xp' }, `+${xp} XP`)),
        h('p', { class: 'muted' }, `答對 ${B.correct} 題 · ${L.CLASSES[S.cls].name}熟練度 ${S.mastery[S.cls]}` + tip));
      gainXp(xp); au('sting', 'victory');
      if (drop.diamond) { award('diamond'); setTimeout(diamondMoment, 450); }
    } else {
      card.append(h('div', { class: 'eyebrow' }, 'TRY AGAIN'), h('h2', {}, B.boss ? `差一點！要答對 ${B.rule.need} 題才打得倒` : '差一點！'),
        h('p', {}, '答錯的題目會變成「錯題怪」，晚上來島上。再打一次就記住了！'));
      gainXp(5); au('sting', 'defeat');
    }
    saveS();
    card.append(h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => go(mapScr()) }, '回地圖'),
      win ? h('button', { class: 'btn ghost', onclick: () => go('island') }, '回島上蓋東西') : h('button', { class: 'btn ghost', onclick: () => startBattle(B.mon.id) }, '再試一次')));
    res.append(card); s.append(res);
    requestAnimationFrame(() => requestAnimationFrame(() => res.classList.add('on')));
  }

  // ---- 島：建造、合成台、守夜 ----
  let tool = 'grass', N = null;
  const costText = c => Object.keys(c).length ? Object.keys(c).map(k => `${{ wood: '木', stone: '石', iron: '鐵', gold: '金', pearl: '珍珠', crystal: '火晶', lamp: '路燈' }[k]}${c[k]}`).join(' ') : '免費';
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
      if (t !== 'lamp' && t !== 'house' && t !== 'torch' && t !== 'flag' && t !== 'lighthouse' && t !== 'lavalamp') return;
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
    const recipes = h('div', { class: 'recipes' }, L.recipesFor(S).map(r => {
      const c = L.craftCheck(S, r.id);
      return h('div', { class: 'recipe' + (c.locked ? ' locked' : '') + (c.done ? ' done' : '') },
        h('span', { class: 'r-ico', html: A.icon(c.locked ? 'lock' : r.icon) }),
        h('div', { class: 'r-t' }, h('b', {}, r.name), h('small', {}, c.locked ? c.reason : `${r.desc} · ${costText(r.cost)}`)),
        c.locked && r.needItem ? h('button', { class: 'btn small', disabled: true }, '還不行')
          : c.locked ? h('button', { class: 'btn small ghost', onclick: () => { S.learned.un = true; saveS(); toast('（試玩）假裝學會 un- 字根了：路燈配方解鎖！'); renderBuildSide(); } }, '模擬學會')
          : h('button', { class: 'btn small', disabled: !c.ok, onclick: () => doCraft(r) }, c.done ? '已完成' : '合成'));
    }));
    side.append(h('div', { class: 'eyebrow' }, 'BUILD'), h('p', { class: 'muted small' }, '選一個方塊，再點格子放上去；點已經蓋好的東西會拆掉（材料退回）。'), tools,
      h('div', { class: 'eyebrow mt' }, 'CRAFTING TABLE · 合成台'), recipes,
      h('button', { class: 'btn night-btn', onclick: startNight, html: A.icon('moon') + '<span>天黑了</span>' }));
  }
  function doCraft(r) {
    const res = L.craft(S, r.id);
    if (!res.ok) return toast(res.reason);
    S = res.s; saveS(); au('sfx', 'craft');
    toast(r.id === 'pick' ? '做好石鎬了！地圖上的「字根洞窟」可以挖開了' : r.id === 'sword' ? '做好木劍了！冒險傷害 +5%' : r.id === 'iron' ? '做好鐵劍了！冒險傷害 +10%（取代木劍）' : r.id === 'key' ? '做好城堡鑰匙了！文法城堡打開了' : r.id === 'gshield' ? '做好金盾了！被打少 20%' : r.id === 'boat' ? '做好小船了！可以開到句型港口' : r.id === 'boots' ? '做好防火靴了！可以走上片語火山' : r.id === 'flame' ? '做好火焰劍了！冒險傷害 +20%' : r.id === 'anchor' ? '做好船錨了！最大血量 +20%' : '做好一盞路燈！選「路燈」放到島上');
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
      S = r.s; missions().build++; saveS(); au('sfx', 'place');
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
    renderIsland(); musicScene();
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
      h('button', { class: 'btn', onclick: () => { N = null; renderIsland(); musicScene(); toast('天亮了！'); }, html: A.icon('sun') + '<span>天亮了</span>' }));
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
    S.mats.wood += rw.wood; gainXp(rw.xp); saveS(); au('sting', res.win ? 'victory' : 'defeat');
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
          L.missionList(S).map(m => {
            const v = Math.min(m.goal, ms[m.id] || 0), done = v >= m.goal, claimed = ms.claimed[m.id];
            return h('div', { class: 'mission' + (done ? ' done' : '') }, h('div', { class: 'm-t' }, h('b', {}, m.name), h('small', {}, `${v}/${m.goal}`)),
              h('div', { class: 'bar' }, h('i', { style: `transform:scaleX(${v / m.goal})` })),
              h('button', { class: 'btn small', disabled: !done || claimed, onclick: () => { ms.claimed[m.id] = true; S.mats.wood += L.MISSION_REWARD.wood; S.mats.stone += L.MISSION_REWARD.stone; saveS(); toast('領到 木頭 +3、石頭 +1'); renderRewards(); } }, claimed ? '已領' : '領取'));
          }),
          h('small', { class: 'muted' }, '每天台北時間 0 點重新開始')),
        h('section', { class: 'card' }, h('div', { class: 'eyebrow' }, 'BADGES · 徽章'),
          h('div', { class: 'badges' }, L.BADGES.map(b => h('div', { class: 'badge' + (S.badges[b.id] ? ' on' : '') }, h('span', { class: 'b-ico', html: A.icon(b.id === 'diamond' ? 'diamond' : b.id === 'caver' ? 'pick' : b.id === 'castle' ? 'key' : b.id === 'captain' ? 'anchor' : b.id === 'hero' ? 'flame' : 'star') }), h('b', {}, b.name), h('small', {}, S.badges[b.id] || '還沒拿到'))))),
        h('section', { class: 'card' }, soundSliders()),
        h('section', { class: 'card' }, h('div', { class: 'eyebrow' }, 'BAG · 背包'),
          h('div', { class: 'drops' }, ['wood', 'stone', 'iron', 'gold', 'pearl', 'crystal'].map(k => dropChip(k, S.mats[k] || 0)), dropChip('diamond', S.mats.diamond, S.mats.diamond > 0)),
          h('p', {}, `木劍 ${S.items.sword ? '✓' : '—'} · 鐵劍 ${S.items.iron ? '✓' : '—'} · 金盾 ${S.items.gshield ? '✓' : '—'} · 城堡鑰匙 ${S.items.key ? '✓' : '—'} · 小船 ${S.items.boat ? '✓' : '—'} · 船錨 ${S.items.anchor ? '✓' : '—'} · 防火靴 ${S.items.boots ? '✓' : '—'} · 火焰劍 ${S.items.flame ? '✓' : '—'} · 石鎬 ${S.items.pick ? '✓' : '—'} · 路燈 ${S.items.lamp || 0} 盞 · 錯題本 ${S.mistakes.length} 題`),
          h('p', {}, `競技場：${L.TIERS[S.rank.tier]}段位 `, stars(S.rank.stars)),
          h('button', { class: 'btn ghost small', onclick: () => {
            if (!confirm('重置試玩？等級、材料、島、遊戲時間與延長紀錄都會清掉（只清勇者島 hi_ 的資料；家長密碼是全站共用的，不會清）。')) return;
            ['save', 'timer', 'parent'].forEach(LS.del); location.reload();
          } }, '重置試玩'),
          !S.items.pick ? h('button', { class: 'btn ghost small', onclick: demoUnlockCave }, '試玩：直接解鎖字根洞窟') : null,
          !S.items.key ? h('button', { class: 'btn ghost small', onclick: demoUnlockCastle }, '試玩：直接解鎖文法城堡') : null,
          !S.items.boat ? h('button', { class: 'btn ghost small', onclick: demoUnlockHarbor }, '試玩：直接解鎖句型港口') : null,
          !S.items.boots ? h('button', { class: 'btn ghost small', onclick: () => demoUnlock('volcano') }, '試玩：直接解鎖片語火山') : null)));
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
    const view = L.timeView(T, TIME_LIMITS_ENABLED);
    if (!view.pill) {  // 不限時間：沒有膠囊、沒有鎖定／休息畫面
      pill.hidden = true; pill.innerHTML = ''; $('#lock').hidden = true; $('#rest').hidden = true; au('setLocked', false); return;
    }
    pill.hidden = false;
    const left = view.left, active = timerActive();
    pill.innerHTML = '';
    pill.append(h('span', { class: 'p-plan' }, L.PLANS[T.plan].name), h('b', {}, left === Infinity ? '∞ 今日無限' : '剩 ' + L.fmtClock(left)), !active && left > 0 ? h('small', {}, '暫停') : '');
    pill.classList.toggle('low', left !== Infinity && left <= 60);
    const out = left <= 0;
    au('setLocked', out);
    if (out) { try { speechSynthesis.cancel(); } catch (e) { /* */ } endDuck(); }
    $('#lock').hidden = !(out && T.plan === 'free');
    const rest = $('#rest');
    if (out && T.plan === 'paid') { if (rest.hidden) openRest(); } else rest.hidden = true;
  }
  setInterval(() => {
    const d = today();
    if (T.day !== d) { T = L.timerLoad(T, d); saveT(); }
    if (TIME_LIMITS_ENABLED && timerActive()) { T = L.playTick(T, 1, true, TIME_LIMITS_ENABLED); saveT(); }
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
      TIME_LIMITS_ENABLED ? [h('p', {}, `今天（${T.day}）· ${L.PLANS[T.plan].name} · 已玩 ${L.fmtClock(T.used)} · ${left === Infinity ? '今日無限' : '剩 ' + L.fmtClock(left)}`),
        h('div', { class: 'eyebrow mt' }, '延長紀錄'),
        log.length ? h('ul', { class: 'log' }, log.map(x => h('li', {}, h('b', {}, x.date), ` ${x.minutes === 'inf' ? '今日無限' : '+' + x.minutes + ' 分'} `, h('span', { class: 'muted' }, fmtAt(x.at))))) : h('p', { class: 'muted' }, '還沒有延長紀錄')]
        : h('p', { class: 'muted' }, '勇者島目前完全免費、不限遊玩時間。'),
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

  // ---- 全島通關！ ----
  function showEnding() {
    const el = $('#ending'); el.innerHTML = ''; el.hidden = false;
    const bits = [];
    for (let i = 0; i < 28; i++) bits.push(h('i', { class: 'confetti c' + (i % 4), style: `left:${(i * 37) % 100}%;--d:${(i % 7) * 0.12}s;--r:${(i * 53) % 360}deg` }));
    el.append(h('div', { class: 'confetti-box' }, bits),
      h('div', { class: 'end-card' },
        h('div', { class: 'eyebrow' }, 'ALL ISLANDS CLEARED'), h('h1', {}, '全島通關！'),
        h('div', { class: 'end-hero', html: A.hero(S.cls) }),
        h('p', { class: 'lead' }, '你打倒了片語火龍，從單字森林一路走到片語火山。'),
        h('div', { class: 'legend' }, h('small', {}, '獲得稱號'), h('b', {}, L.LEGEND_TITLE)),
        h('div', { class: 'credits' }, h('div', { class: 'eyebrow' }, 'CREDITS'),
          h('p', {}, '勇者島 HERO ISLAND'), h('p', {}, '題目：小朋友學習站（教育部國中小英語字彙、字根、文法、句型、片語）'),
          h('p', {}, '美術：剪紙風格 SVG · 音樂：Web Audio 即時合成'), h('p', {}, '主角：' + L.CLASSES[S.cls].name + '（就是你）')),
        h('p', { class: 'muted' }, '地圖都可以再玩；想更強？去競技場「再挑戰」別的小朋友的影子！'),
        h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => { el.hidden = true; go('arena'); } }, '再挑戰：去競技場'), h('button', { class: 'btn ghost', onclick: () => { el.hidden = true; go('volcano'); } }, '回地圖'))));
    au('sting', 'levelup'); setTimeout(() => au('sting', 'victory'), 700); au('scene', 'title');
  }

  // ---- 聲音開關（一直看得到）＋音量設定 ----
  function soundSliders() {
    if (!AU) return null;
    const s = AU.get();
    return h('div', { class: 'snd-set' }, h('div', { class: 'eyebrow' }, 'SOUND · 聲音'),
      ['music', 'sfx'].map(k => h('label', { class: 'snd-row' }, h('span', {}, k === 'music' ? '音樂' : '音效'),
        h('input', { type: 'range', min: 0, max: 100, step: 5, value: Math.round(s[k] * 100), 'aria-label': k === 'music' ? '音樂音量' : '音效音量', oninput: e => { AU.set({ [k]: e.target.value / 100 }); }, onchange: () => { au('unlock'); if (k === 'sfx') au('sfx', 'correct'); } }))),
      h('small', { class: 'muted' }, '念英文的時候，音樂會自動變小聲'));
  }
  function renderSound() {
    const box = $('#snd'); if (!box) return;
    if (!AU) { box.hidden = true; return; }
    const s = AU.get(); box.innerHTML = '';
    box.append(h('button', { class: 'snd-b', 'aria-label': s.muted ? '打開聲音' : '關掉聲音', onclick: () => { au('unlock'); AU.toggle(); renderSound(); } }, s.muted ? '🔇' : '🔊'));
  }
  // 讓學習站「家長」頁知道要不要顯示「勇者島 遊戲時間」（以這裡的開關為準）
  LS.set('cfg', { timeLimits: TIME_LIMITS_ENABLED });

  // ---- 開機 ----
  document.getElementById('defs').innerHTML = A.defs();
  renderLock(); renderTitle(); renderSound(); show('title');
  // 第一次點畫面就建立／恢復 AudioContext（iOS 要使用者手勢）；按鈕輕點音效
  document.addEventListener('pointerdown', () => au('unlock'), { capture: true, once: true });
  document.addEventListener('click', e => { if (e.target.closest && e.target.closest('button') && !e.target.closest('.opt,.chip,.kp-k')) au('sfx', 'tap'); }, true);
  window.addEventListener('resize', () => { if (N) placeMons(); });
  root.HIDebug = { get S() { return S; }, get T() { return T; }, get E() { return E; }, get q() { return lastQ; }, go, startBattle };
})(typeof window !== 'undefined' ? window : globalThis);
