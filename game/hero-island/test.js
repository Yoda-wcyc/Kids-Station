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

// ---- 聲音（audio.js 純邏輯） ----
const AU = require('./audio.js');
t('scene -> track mapping', () => {
  const want = { title: 'calm', class: 'calm', hub: 'calm', island: 'calm', rewards: 'calm', map: 'adventure', battle: 'battle', boss: 'boss', night: 'night', arena: 'arena', unknown: 'calm' };
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
