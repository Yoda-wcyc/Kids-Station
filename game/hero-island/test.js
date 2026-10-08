/* 勇者島純邏輯測試：node game/hero-island/test.js */
'use strict';
const assert = require('assert');
const crypto = require('crypto');
const L = require('./game.js');
const PIN = require('../../parent-pin.js');
let n = 0;
const t = (name, fn) => { fn(); n++; };
const mem = () => { const m = {}; return { getItem: k => (k in m ? m[k] : null), setItem: (k, v) => { m[k] = String(v); }, dump: () => JSON.stringify(m) }; };

// ---- 傷害／連擊 ----
t('damage', () => {
  assert.deepStrictEqual(L.damage({ combo: 1 }), { dmg: 10, crit: false });
  assert.deepStrictEqual(L.damage({ combo: 3 }), { dmg: 15, crit: true });
  assert.strictEqual(L.damage({ combo: 1, typed: true, cls: 'mage' }).dmg, 18);
  assert.strictEqual(L.damage({ combo: 1, typed: true, cls: 'sword' }).dmg, 13);
  assert.strictEqual(L.damage({ combo: 1, sword: true }).dmg, 11);
  assert.strictEqual(L.damage({ combo: 3, typed: true, cls: 'mage', double: true }).dmg, 54);
  assert.strictEqual(L.comboNext(2, true), 3); assert.strictEqual(L.comboNext(5, false), 0);
  assert.strictEqual(L.bossOutcome(4, 4), 'win'); assert.strictEqual(L.bossOutcome(3, 5), 'lose'); assert.strictEqual(L.bossOutcome(3, 4), 'continue'); assert.strictEqual(L.bossOutcome(1, 3), 'lose');
});
t('forest unlock order', () => {
  const s = L.newSave();
  assert.deepStrictEqual(L.FOREST.map((x, i) => L.nodeStatus(s, i)), ['open', 'locked', 'locked', 'locked']);
  s.defeated.f1 = true; assert.strictEqual(L.nodeStatus(s, 1), 'open');
});

// ---- 掉落（固定種子） ----
t('drops deterministic + rates', () => {
  const a = L.mulberry32(42), b = L.mulberry32(42);
  for (let i = 0; i < 50; i++) assert.deepStrictEqual(L.rollDrop(a, 'normal'), L.rollDrop(b, 'normal'));
  const r = L.mulberry32(7); let dia = 0, stone = 0; const N = 100000;
  for (let i = 0; i < N; i++) { const d = L.rollDrop(r, 'normal'); assert(d.wood >= 2 && d.wood <= 4); if (d.stone) stone++; dia += d.diamond; }
  assert(dia / N > 0.025 && dia / N < 0.035, 'diamond ≈3% got ' + dia / N);
  assert(stone / N > 0.32 && stone / N < 0.38, 'stone ≈35% got ' + stone / N);
  const rb = L.mulberry32(9); for (let i = 0; i < 1000; i++) { const d = L.rollDrop(rb, 'boss'); assert(d.stone >= 2 && d.wood >= 4); }
});

// ---- 合成台／建造 ----
t('craft costs + locks', () => {
  let s = L.newSave(); s.mats = { wood: 0, stone: 0, diamond: 0 };
  assert.strictEqual(L.craftCheck(s, 'sword').reason, '材料不夠');
  s.mats.wood = 4; let r = L.craft(s, 'sword'); assert(r.ok); s = r.s;
  assert.strictEqual(s.mats.wood, 0); assert.strictEqual(s.items.sword, 1);
  s.mats.wood = 9; assert.strictEqual(L.craft(s, 'sword').ok, false);
  const c = L.craftCheck(s, 'lamp'); assert(c.locked && /un-/.test(c.reason));
  s.mats.stone = 5; s.learned.un = true; r = L.craft(s, 'lamp'); assert(r.ok); assert.strictEqual(r.s.items.lamp, 1); assert.strictEqual(r.s.mats.stone, 3);
  r = L.craft(r.s, 'pick'); assert(r.ok); assert.strictEqual(r.s.items.pick, 1); assert.strictEqual(r.s.mats.stone, 0);
});
t('place/remove tiles', () => {
  let s = L.newSave(); s.mats = { wood: 2, stone: 0, diamond: 0 };
  assert.strictEqual(L.placeTile(s, 0, 'lamp').reason, '先到合成台做路燈');
  assert.strictEqual(L.placeTile(s, 19, 'grass').ok, false);
  let r = L.placeTile(s, 0, 'tree'); assert(r.ok); s = r.s; assert.strictEqual(s.mats.wood, 0); assert.strictEqual(s.grid[0], 'tree');
  r = L.removeTile(s, 0); assert(r.refunded); assert.strictEqual(r.s.mats.wood, 2);
  r = L.removeTile(r.s, 19); assert.strictEqual(r.refunded, false); assert.strictEqual(r.s.mats.wood, 2);
});

// ---- 競技場 ----
t('arena gold reset + shop + double', () => {
  let m = L.newMatch(); assert.strictEqual(m.gold, 0);
  m = L.arenaAnswer(L.arenaStartQ(m), true, 3, {}); assert.strictEqual(m.gold, 10);
  assert.strictEqual(L.buy(m, 'hint').ok, false);
  m = L.arenaAnswer(L.arenaStartQ(m), true, 3, {}); assert.strictEqual(m.gold, 20);
  let b = L.buy(m, 'double'); assert.strictEqual(b.ok, false);
  b = L.buy(m, 'hint'); assert(b.ok); m = b.m; assert.strictEqual(m.gold, 0);
  m.gold = 30; b = L.buy(m, 'double'); assert(b.ok); m = b.m; assert(m.dblNext && !m.double);
  assert.strictEqual(L.buy(m, 'double').ok, false);
  m = L.arenaStartQ(m); assert(m.double);
  const before = m.dmg; m = L.arenaAnswer(m, true, 3, {}); assert.strictEqual(m.dmg - before, 30); assert.strictEqual(m.double, false);
  assert.strictEqual(L.newMatch().gold, 0);
});
t('shadow sim deterministic + accuracy', () => {
  assert.deepStrictEqual(L.simShadow(L.mulberry32(5), L.SHADOW, 7), L.simShadow(L.mulberry32(5), L.SHADOW, 7));
  const r = L.mulberry32(11); let ok = 0;
  for (let i = 0; i < 2000; i++) ok += L.simShadow(r, L.SHADOW, 7).correct;
  const acc = ok / 14000; assert(acc > 0.67 && acc < 0.73, 'acc ' + acc);
  const res = L.arenaResult({ dmg: 100, correct: 7, times: [3, 3, 3], maxCombo: 7 }, { dmg: 40, steps: [{ t: 6 }] });
  assert(res.win && res.mvp > 9);
});
t('rank stars + protect card + first win', () => {
  let r = L.rankAfter({ tier: 0, stars: 1, protectUsed: false }, false); assert.strictEqual(r.r.stars, 1); assert(r.r.protectUsed);
  r = L.rankAfter(r.r, false); assert.strictEqual(r.r.stars, 0);
  r = L.rankAfter({ tier: 0, stars: 3, protectUsed: true }, true); assert.strictEqual(r.r.tier, 1); assert.strictEqual(r.r.stars, 1);
  const a = L.arenaReward(true, '', '2026-10-08'); assert(a.first); assert.strictEqual(a.xp, 40);
  const b = L.arenaReward(true, '2026-10-08', '2026-10-08'); assert(!b.first); assert.strictEqual(b.xp, 20);
});

// ---- 遊玩時間 ----
t('timer daily reset + pause/resume', () => {
  let T = L.timerLoad(null, '2026-10-08'); assert.strictEqual(L.timerLeft(T), 600);
  T = L.timerTick(T, 30, true); assert.strictEqual(L.timerLeft(T), 570);
  T = L.timerTick(T, 30, false); assert.strictEqual(L.timerLeft(T), 570, 'paused does not count');
  T = L.timerTick(T, 1, true); assert.strictEqual(L.timerLeft(T), 569, 'resumes');
  assert.strictEqual(L.timerLeft(L.timerLoad(T, '2026-10-08')), 569);
  T = L.timerSetPlan(T, 'paid'); T = L.timerExtend(T, 30).st;
  const next = L.timerLoad(T, '2026-10-09'); assert.strictEqual(next.used, 0); assert.strictEqual(next.ext, 0); assert.strictEqual(next.plan, 'paid'); assert.strictEqual(L.timerLeft(next), 3600);
  assert.strictEqual(L.taipeiDay(new Date('2026-10-08T16:30:00Z')), '2026-10-09');
  assert.strictEqual(L.taipeiDay(new Date('2026-10-08T15:30:00Z')), '2026-10-08');
});
t('free: 10 min lock, no extension', () => {
  let T = L.timerLoad(null, 'd'); T = L.timerTick(T, 9999, true); assert.strictEqual(L.timerLeft(T), 0); assert.strictEqual(T.used, 600);
  assert.strictEqual(L.timerExtend(T, 10).ok, false);
});
t('paid: 60 min lock -> PIN -> each extension, unlimited', () => {
  const store = mem(); PIN.set('2468', '2468', store);
  const base = L.timerTick(L.timerLoad({ day: 'd', plan: 'paid' }, 'd'), 99999, true);
  assert.strictEqual(base.used, 3600); assert.strictEqual(L.timerLeft(base), 0);
  assert(L.pinCheck(L.newParent(), '2468', 0, store).ok);
  [10, 30, 60].forEach(m => { const r = L.timerExtend(base, m); assert(r.ok); assert.strictEqual(L.timerLeft(r.st), m * 60); });
  const inf = L.timerExtend(base, 'inf').st; assert.strictEqual(L.timerLeft(inf), Infinity);
  assert.strictEqual(L.timerTick(inf, 5000, true).used, 8600);
  assert.strictEqual(L.timerLeft(L.timerTick(inf, 5000, true)), Infinity);
  assert.strictEqual(L.timerExtend(base, 15).ok, false);
  const log = L.logExtension(L.logExtension([], 'd', 30, 'x'), 'd', 'inf', 'y'); assert.deepStrictEqual(log.map(x => x.minutes), [30, 'inf']);
});

t('free play: flag off -> 2 hours never locks, no pill; flag on -> locks', () => {
  assert.strictEqual(L.TIME_LIMITS_ENABLED, false, 'shipping config is free / no limit');
  ['free', 'paid'].forEach(plan => {
    let T = L.timerLoad({ day: 'd', plan }, 'd');
    for (let s = 0; s < 7200; s++) { T = L.playTick(T, 1, true, false); assert.deepStrictEqual(L.timeView(T, false), { pill: false, lock: null }); }
    assert.strictEqual(T.used, 0, 'time not counted');
    const old = { day: 'd', plan, used: 99999, ext: 0, inf: false };      // 舊的 hi_timer 已經用完
    assert.deepStrictEqual(L.timeView(L.timerLoad(old, 'd'), false), { pill: false, lock: null }, 'old state ignored');
    let T2 = L.timerLoad({ day: 'd', plan }, 'd');
    for (let s = 0; s < 7200; s++) T2 = L.playTick(T2, 1, true, true);
    const v = L.timeView(T2, true); assert(v.pill); assert.strictEqual(v.lock, plan === 'paid' ? 'rest' : 'lock');
  });
});

// ---- 家長密碼（全站共用 ks_parent_pin） ----
t('sha256 matches node crypto', () => {
  ['', 'abc', '1234', 'salt|123456', '勇者島', 'x'.repeat(200)].forEach(s => assert.strictEqual(PIN.sha256(s), crypto.createHash('sha256').update(s, 'utf8').digest('hex')));
});
t('pin stored only as salted hash', () => {
  const store = mem(); assert.strictEqual(PIN.set('12', '12', store).ok, false); assert.strictEqual(PIN.set('1234', '1235', store).ok, false);
  assert(PIN.set('482915', '482915', store).ok);
  const raw = store.dump(); assert(!raw.includes('482915'), 'no plain PIN'); assert(raw.includes(PIN.KEY));
  const rec = JSON.parse(store.getItem(PIN.KEY)); assert(/^[0-9a-f]{64}$/.test(rec.hash) && rec.salt);
  assert.strictEqual(rec.hash, PIN.sha256(rec.salt + '|482915'));
  const s2 = mem(); PIN.set('482915', '482915', s2); assert.notStrictEqual(JSON.parse(s2.getItem(PIN.KEY)).hash, rec.hash, 'salted');
  assert.strictEqual(JSON.stringify(L.newParent()).includes('hash'), false, 'game-side hi_parent has no hash');
});
t('wrong PIN x3 -> 1 minute cooldown', () => {
  const store = mem(); PIN.set('1357', '1357', store);
  let p = L.newParent(), r = L.pinCheck(p, '0000', 1000, store); assert.strictEqual(r.left, 2); p = r.parent;
  r = L.pinCheck(p, '1111', 2000, store); assert.strictEqual(r.left, 1); p = r.parent;
  r = L.pinCheck(p, '2222', 3000, store); assert.strictEqual(r.cooldown, 60); p = r.parent;
  r = L.pinCheck(p, '1357', 30000, store); assert.strictEqual(r.ok, false); assert(r.cooldown > 0, 'right PIN refused during cooldown');
  r = L.pinCheck(r.parent, '1357', 63001, store); assert(r.ok);
});
t('same PIN in game + site; change from either side', () => {
  const store = mem();
  assert(PIN.set('2580', '2580', store).ok);                         // 家長頁設定
  assert(L.pinCheck(L.newParent(), '2580', 0, store).ok);              // 遊戲驗證
  const g = L.pinChange(L.newParent(), '2580', '1111', '1111', 0, store); // 遊戲改密碼
  assert(g.ok); assert(PIN.verify('1111', store)); assert(!PIN.verify('2580', store)); // 家長頁看到新密碼
  assert.strictEqual(PIN.change('9999', '3333', '3333', store).ok, false);
  assert(PIN.change('1111', '3333', '3333', store).ok);               // 家長頁改密碼
  assert(L.pinCheck(L.newParent(), '3333', 0, store).ok);              // 遊戲用新密碼
  assert.strictEqual(L.pinCheck(L.newParent(), '1111', 0, store).ok, false);
});

// ---- 等級／任務 ----
t('xp + missions', () => {
  assert.deepStrictEqual(L.addXp({ lv: 1, xp: 30 }, 20), { lv: 2, xp: 10, ups: 1 });
  const m = L.missionsFor(null, 'a'); m.correct = 5; assert.strictEqual(L.missionsFor(m, 'a').correct, 5); assert.strictEqual(L.missionsFor(m, 'b').correct, 0);
});

// ---- 字根洞窟 ----
t('cave question mix', () => {
  const r = L.mulberry32(3);
  for (let k = 0; k < 200; k++) {
    const b = L.caveBossTypes(r);
    assert.strictEqual(b.length, 6); assert.strictEqual(b[5], 'root-type', 'boss last is typed');
    L.CAVE_TYPES.forEach(tp => assert(b.slice(0, 5).includes(tp), 'all three types in first 5'));
  }
  const m = L.caveMonTypes(9, true); assert.strictEqual(m[1], 'root-type'); assert.strictEqual(m.filter(x => x === 'root-type').length, 3);
  assert.deepStrictEqual([...new Set(L.caveMonTypes(6, false))].sort(), L.CAVE_TYPES.slice().sort());
  assert.strictEqual(L.mapOf('c2'), 'cave'); assert.strictEqual(L.mapOf('f1'), 'forest');
  assert.strictEqual(L.CAVE.length, 5); assert(L.CAVE[4].boss); assert(L.CAVE.slice(0, 4).every(x => /-$/.test(x.tag)));
});
t('shield: only a correct typed answer breaks it', () => {
  assert.deepStrictEqual(L.shieldResolve(true, true, false), { shield: true, broke: false, mult: 0.5 });
  assert.deepStrictEqual(L.shieldResolve(true, false, true), { shield: true, broke: false, mult: 1 });
  assert.deepStrictEqual(L.shieldResolve(true, false, false), { shield: true, broke: false, mult: 1 });
  const b = L.shieldResolve(true, true, true); assert(b.broke && !b.shield && b.crit);
  assert.strictEqual(L.damage({ combo: 1, typed: true, cls: 'sword', map: 'cave', forceCrit: b.crit }).crit, true);
  assert.strictEqual(L.shieldResolve(false, true, true).broke, false);
  assert.strictEqual(L.damage({ combo: 1, map: 'cave', shieldMult: 0.5 }).dmg, 5);
});
t('cave class bonuses + iron sword', () => {
  assert.strictEqual(L.damage({ combo: 1, typed: true, cls: 'mage', map: 'cave' }).dmg, 15);
  assert.strictEqual(L.damage({ combo: 1, typed: true, cls: 'mage' }).dmg, 18);
  assert.strictEqual(L.damage({ combo: 2, cls: 'sword', map: 'cave' }).crit, true);
  assert.strictEqual(L.damage({ combo: 2, cls: 'sword' }).crit, false);
  assert.strictEqual(L.hitBack('cave', 'guard'), 6); assert.strictEqual(L.hitBack('forest', 'guard'), 12);
  assert.strictEqual(L.damage({ combo: 3, sword: 'iron' }).dmg, 17); assert.strictEqual(L.damage({ combo: 3, sword: 'wood' }).dmg, 16);
  const s = L.newSave(); assert.strictEqual(L.swordOf(s), null); s.items.sword = 1; assert.strictEqual(L.swordOf(s), 'wood'); s.items.iron = 1; assert.strictEqual(L.swordOf(s), 'iron');
});
t('cave boss rule: 6 questions, >=5, plays all 6', () => {
  const R = L.bossRule('cave'); assert.deepStrictEqual([R.q, R.need, R.playAll], [6, 5, true]);
  assert.strictEqual(L.bossOutcome(5, 5, R), 'continue', 'still asks the typed 6th');
  assert.strictEqual(L.bossOutcome(5, 6, R), 'win'); assert.strictEqual(L.bossOutcome(6, 6, R), 'win');
  assert.strictEqual(L.bossOutcome(4, 6, R), 'lose'); assert.strictEqual(L.bossOutcome(2, 4, R), 'lose');
  assert.strictEqual(L.bossOutcome(4, 5, R), 'continue');
});
t('cave drops with seed', () => {
  const a = L.mulberry32(77), b = L.mulberry32(77);
  for (let i = 0; i < 50; i++) assert.deepStrictEqual(L.rollDrop(a, 'normal', 'cave'), L.rollDrop(b, 'normal', 'cave'));
  const r = L.mulberry32(21), N = 100000; let dia = 0, iron = 0;
  for (let i = 0; i < N; i++) { const d = L.rollDrop(r, 'normal', 'cave'); assert(d.stone >= 1 && d.wood === 0); dia += d.diamond; iron += d.iron; }
  assert(dia / N > 0.054 && dia / N < 0.066, 'diamond ≈6% got ' + dia / N);
  assert(iron / N > 0.37 && iron / N < 0.43, 'iron ≈40% got ' + iron / N);
  const rb = L.mulberry32(5); for (let i = 0; i < 500; i++) { const d = L.rollDrop(rb, 'boss', 'cave'); assert(d.iron === 2 && d.stone >= 3); }
});
t('recipes: iron sword needs pick; torch tile; cave mission + badge', () => {
  let s = L.newSave(); s.mats = { wood: 9, stone: 9, iron: 9, diamond: 0 };
  const c = L.craftCheck(s, 'iron'); assert(c.locked); assert(/石鎬/.test(c.reason));
  s.items.pick = 1; const r = L.craft(s, 'iron'); assert(r.ok); assert.strictEqual(r.s.mats.iron, 6); assert.strictEqual(r.s.mats.wood, 7);
  assert.strictEqual(L.craft(r.s, 'iron').ok, false);
  const p = L.placeTile(r.s, 0, 'torch'); assert(p.ok); assert.strictEqual(p.s.mats.iron, 5);
  assert.strictEqual(L.placeTile(Object.assign(L.newSave(), { mats: { wood: 5, stone: 0, iron: 0 } }), 0, 'torch').reason, '材料不夠');
  assert(!L.missionList(L.newSave()).some(m => m.id === 'cave')); assert(L.missionList(r.s).some(m => m.id === 'cave' && m.goal === 3));
  assert(L.BADGES.some(b => b.id === 'caver' && b.name === '洞窟探險家'));
});

// ---- 文法城堡 ----
const TOPICS = ['be', 'present', 'progressive', 'past', 'future', 'plural', 'article', 'pronoun', 'compare', 'prep', 'modal', 'wh'];
t('castle question mix', () => {
  assert.deepStrictEqual(L.castleRoomNext({ door: 'past', doorOpen: false, traps: 0, asked: 3 }), { types: ['grammar-fill', 'grammar-fix'], topic: 'past' });
  assert.deepStrictEqual(L.castleRoomNext({ door: null, doorOpen: true, traps: 2, asked: 0 }).types, ['grammar-fix']);
  const mix = [0, 1, 2].map(a => L.castleRoomNext({ traps: 0, asked: a }).types[0]); assert.deepStrictEqual(mix, L.CASTLE_TYPES);
  assert.strictEqual(L.CASTLE.length, 6); assert(L.CASTLE[5].boss); assert.strictEqual(L.CASTLE.filter(r => r.door).length, 2); assert.strictEqual(L.CASTLE.filter(r => r.traps).length, 2);
  assert.strictEqual(L.mapOf('k3'), 'castle');
});
t('trap + door logic', () => {
  assert.deepStrictEqual(L.trapResolve(2, true), { traps: 1, disarmed: true, snap: false });
  assert.deepStrictEqual(L.trapResolve(2, false), { traps: 2, disarmed: false, snap: true });
  assert.strictEqual(L.trapSnap(L.newSave()), 8);
  const s = L.newSave(); s.items.gshield = 1; assert.strictEqual(L.trapSnap(s), 6); assert.strictEqual(L.hitBack('castle', 'mage', s), 10); assert.strictEqual(L.hitBack('castle', 'mage', L.newSave()), 12);
  assert.strictEqual(L.doorResolve(false, true, 'past', 'past'), true);
  assert.strictEqual(L.doorResolve(false, true, 'future', 'past'), false, 'other topic does not open');
  assert.strictEqual(L.doorResolve(false, false, 'past', 'past'), false, 'wrong answer does not open');
  assert.strictEqual(L.doorResolve(true, false, 'x', 'past'), true, 'stays open');
  assert.strictEqual(L.damage({ combo: 1, cls: 'sword', map: 'castle' }).dmg, 15, 'sword grammar ×1.5 in castle');
  assert.strictEqual(L.damage({ combo: 1, cls: 'sword' }).dmg, 10);
});
t('castle boss: 6 questions, >=5, mixed topics, last typed', () => {
  const r = L.mulberry32(8);
  for (let k = 0; k < 200; k++) {
    const p = L.castleBossPlan(TOPICS, r);
    assert.strictEqual(p.length, 6); assert.strictEqual(p[5].type, 'zh2en-type');
    assert(p.slice(0, 5).every(x => x.type === 'grammar-fill' || x.type === 'grammar-fix'));
    assert.strictEqual(new Set(p.map(x => x.topic)).size, 6, 'six different topics');
  }
  const R = L.bossRule('castle'); assert.deepStrictEqual([R.q, R.need, R.playAll], [6, 5, true]);
  assert.strictEqual(L.bossOutcome(5, 5, R), 'continue'); assert.strictEqual(L.bossOutcome(5, 6, R), 'win'); assert.strictEqual(L.bossOutcome(4, 6, R), 'lose');
});
t('castle drops with seed', () => {
  const a = L.mulberry32(99), b = L.mulberry32(99);
  for (let i = 0; i < 50; i++) assert.deepStrictEqual(L.rollDrop(a, 'normal', 'castle'), L.rollDrop(b, 'normal', 'castle'));
  const r = L.mulberry32(31), N = 100000; let dia = 0, gold = 0;
  for (let i = 0; i < N; i++) { const d = L.rollDrop(r, 'normal', 'castle'); assert(d.iron >= 1); dia += d.diamond; gold += d.gold; }
  assert(dia / N > 0.073 && dia / N < 0.087, 'diamond ≈8% got ' + dia / N);
  assert(gold / N > 0.32 && gold / N < 0.38, 'gold ≈35% got ' + gold / N);
  const rb = L.mulberry32(4); for (let i = 0; i < 300; i++) { const d = L.rollDrop(rb, 'boss', 'castle'); assert(d.gold === 2 && d.iron >= 3); }
});
t('unlock chain: cave boss -> key recipe -> castle map', () => {
  let s = L.newSave(); s.items.pick = 1; s.mats = { wood: 9, stone: 9, iron: 9, gold: 9, diamond: 0 };
  assert(!L.recipesFor(s).some(r => r.id === 'key'), 'key hidden before cave boss');
  assert(L.craftCheck(s, 'key').hidden); assert(!L.mapUnlocked(s, 'castle'));
  s.defeated.cboss = true;
  assert(L.recipesFor(s).some(r => r.id === 'key'));
  assert.strictEqual(L.craftCheck(s, 'gshield').reason, '先打開文法城堡，在那裡找金');
  const k = L.craft(s, 'key'); assert(k.ok); assert.deepStrictEqual([k.s.mats.iron, k.s.mats.stone], [6, 4]);
  assert(L.mapUnlocked(k.s, 'castle'));
  const g = L.craft(k.s, 'gshield'); assert(g.ok); assert.strictEqual(g.s.mats.gold, 6);
  assert(L.placeTile(g.s, 0, 'flag').ok);
  assert(!L.mapUnlocked(g.s, 'harbor') && !L.mapUnlocked(g.s, 'volcano'), 'later maps are teasers');
  assert(L.missionList(g.s).some(m => m.id === 'traps' && m.goal === 3));
  assert(L.BADGES.some(b => b.id === 'castle' && b.name === '城堡征服者'));
});

// ---- 句型港口 ----
t('harbor question mix + level weights', () => {
  assert.deepStrictEqual(L.harborTypes(4, false), L.HARBOR_TYPES);
  assert.strictEqual(L.harborTypes(8, true).filter(x => x === 'reorder').length, 4, 'bridge rooms are reorder-heavy');
  const r = L.mulberry32(12), cnt = { 1: 0, 2: 0, 3: 0 }, N = 20000;
  for (let i = 0; i < N; i++) cnt[L.pickPatternLv(r)]++;
  assert(Math.abs(cnt[1] / N - 0.45) < 0.02 && Math.abs(cnt[2] / N - 0.40) < 0.02 && Math.abs(cnt[3] / N - 0.15) < 0.02, JSON.stringify(cnt));
  for (let k = 0; k < 100; k++) { const b = L.harborBossTypes(r); assert.strictEqual(b.length, 6); assert.strictEqual(b[5], 'zh2en-type'); ['pattern-choose', 'reorder', 'pattern-fill'].forEach(tp => assert(b.includes(tp))); }
  assert.strictEqual(L.damage({ combo: 1, cls: 'guard', map: 'harbor' }).dmg, 15, 'guardian ×1.5 in harbor');
  assert.strictEqual(L.mapOf('h2'), 'harbor'); assert.deepStrictEqual(L.bossRule('harbor'), { q: 6, need: 5, playAll: true });
});
t('bridge: plank per correct word, wobble on wrong, done = crossed', () => {
  let st = L.bridgeStart('I like apples .'.replace(' .', '.'));
  assert.deepStrictEqual(st.tokens, ['I', 'like', 'apples.']);
  let r = L.bridgeStep(st, 'like'); assert(!r.ok && r.hit === L.PLANK_HIT && r.st.laid === 0 && r.st.wobbles === 1); st = r.st;
  r = L.bridgeStep(st, 'I'); assert(r.ok && !r.done && r.st.laid === 1); st = r.st;
  r = L.bridgeStep(st, 'like'); st = r.st; r = L.bridgeStep(st, 'apples.'); assert(r.ok && r.done && r.st.laid === 3 && r.st.wobbles === 1);
  assert.strictEqual(L.bridgeStep(r.st, 'x').done, true);
  st = L.bridgeStart('go go home'); r = L.bridgeStep(st, 'go'); r = L.bridgeStep(r.st, 'go'); assert(r.ok && r.st.laid === 2, 'repeated words');
});
t('harbor drops with seed', () => {
  const a = L.mulberry32(41), b = L.mulberry32(41);
  for (let i = 0; i < 50; i++) assert.deepStrictEqual(L.rollDrop(a, 'normal', 'harbor'), L.rollDrop(b, 'normal', 'harbor'));
  const r = L.mulberry32(17), N = 100000; let dia = 0, pearl = 0;
  for (let i = 0; i < N; i++) { const d = L.rollDrop(r, 'normal', 'harbor'); assert(d.gold >= 1); dia += d.diamond; pearl += d.pearl; }
  assert(dia / N > 0.092 && dia / N < 0.108, 'diamond ≈10% got ' + dia / N);
  assert(pearl / N > 0.32 && pearl / N < 0.38, 'pearl ≈35% got ' + pearl / N);
  const rb = L.mulberry32(2); for (let i = 0; i < 300; i++) { const d = L.rollDrop(rb, 'boss', 'harbor'); assert(d.pearl === 2 && d.gold >= 3); }
});
t('unlock chain: knight boss -> boat -> harbor; anchor +20% HP; lighthouse', () => {
  let s = L.newSave(); Object.assign(s.items, { pick: 1, key: 1 }); s.mats = { wood: 20, stone: 9, iron: 9, gold: 9, pearl: 9, diamond: 0 };
  assert(!L.recipesFor(s).some(r => r.id === 'boat')); assert(!L.mapUnlocked(s, 'harbor'));
  s.defeated.kboss = true; assert(L.recipesFor(s).some(r => r.id === 'boat'));
  assert(L.craftCheck(s, 'anchor').locked);
  const b = L.craft(s, 'boat'); assert(b.ok); assert.deepStrictEqual([b.s.mats.gold, b.s.mats.iron, b.s.mats.wood], [7, 6, 10]);
  assert(L.mapUnlocked(b.s, 'harbor'));
  assert.strictEqual(L.maxHp(b.s), 100); const an = L.craft(b.s, 'anchor'); assert(an.ok); assert.strictEqual(L.maxHp(an.s), 120);
  assert(L.placeTile(an.s, 0, 'lighthouse').ok);
  assert(L.missionList(an.s).some(m => m.id === 'bridges' && m.goal === 3));
  assert(L.BADGES.some(x => x.id === 'captain' && x.name === '港口船長'));
});

// ---- 聲音（audio.js 純邏輯） ----
const AU = require('./audio.js');
t('scene -> track mapping', () => {
  const want = { title: 'calm', class: 'calm', hub: 'calm', island: 'calm', rewards: 'calm', map: 'adventure', battle: 'battle', boss: 'boss', night: 'night', arena: 'arena', cave: 'cave', castle: 'castle', harbor: 'harbor', unknown: 'calm' };
  Object.keys(want).forEach(k => assert.strictEqual(AU.trackFor(k), want[k], k));
});
t('speech ducking state machine', () => {
  const s = AU.normalize(null), D = AU.Ducker();
  assert.strictEqual(AU.musicGain(s, D.ducked, false), 0.35);
  const a = D.start(); assert(D.ducked); assert.strictEqual(+AU.musicGain(s, D.ducked, false).toFixed(4), +(0.35 * 0.15).toFixed(4));
  const b = D.start();            // 重疊：第二段語音開始
  D.end(a); assert(D.ducked, 'still ducked while b speaks');
  D.end(a); assert(D.ducked, 'double end is harmless');
  D.end(b); assert(!D.ducked); assert.strictEqual(AU.musicGain(s, D.ducked, false), 0.35);
  assert.strictEqual(AU.musicGain(s, true, true), 0, 'lock screen silences music');
  assert.strictEqual(AU.sfxGain(s, true), 0);
});
t('mute + volume persistence', () => {
  const store = mem();
  assert.deepStrictEqual(AU.loadSettings(store), { muted: false, music: 0.35, sfx: 0.7 });
  AU.saveSettings(store, AU.toggleMute(AU.loadSettings(store)));
  assert.strictEqual(AU.loadSettings(store).muted, true);
  assert.strictEqual(AU.musicGain(AU.loadSettings(store), false, false), 0);
  AU.saveSettings(store, Object.assign(AU.loadSettings(store), { muted: false, music: 3, sfx: -1 }));
  assert.deepStrictEqual(AU.loadSettings(store), { muted: false, music: 1, sfx: 0 });
  assert(store.dump().includes('hi_audio'));
});

console.log(`hero-island test: ${n} groups passed`);
