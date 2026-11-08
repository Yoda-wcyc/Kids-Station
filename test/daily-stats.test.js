// daily-stats.test.js — 家長頁每日學習紀錄（kids-daily.js、syncmerge.js 的 dd）：node test/daily-stats.test.js
'use strict';
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const SM = require(path.join(root, 'syncmerge.js')), KD = require(path.join(root, 'kids-daily.js'))._core;
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL', m); } };
const same = (a, b) => SM.canon(a) === SM.canon(b);
const read = f => fs.readFileSync(path.join(root, f), 'utf8');

const NOW = Date.UTC(2026, 10, 20, 4);   // 2026-11-20 12:00 台北
const DAY = 864e5, day = n => SM.ddDay(NOW - n * DAY), today = SM.ddDay(NOW);
const add = (dd, dev, t, code, right, times) => { for (let i = 0; i < (times || 1); i++) dd = SM.ddAdd(dd, dev, t, code, right); return dd; };
const view = o => KD.view(Object.assign({ today, ev: {} }, o));

// ---------- 同一天多科累加 ----------
{
  let d = {};
  d = add(d, 'iPad', NOW, 'e', true, 3); d = add(d, 'iPad', NOW, 'e', false, 2); d = add(d, 'iPad', NOW, 'm', true, 4); d = add(d, 'iPad', NOW, 'n', false);
  ok(same(SM.ddSum(d)[today], { e: [5, 3], m: [4, 4], n: [1, 0] }), 'same day, several subjects add up: ' + JSON.stringify(d));
  ok(typeof d.iPad === 'string' && /^\d{6}e5,2m4n1,1$/.test(d.iPad), 'compact format: ' + d.iPad);
  const r = view({ dd: d }).rows[0];
  ok(r.day === today && r.n === 10 && r.pct === 70 && r.subj.map(s => s.name + s.n).join() === '英文5,數學4,自然1', 'row: total, %, subjects in order, no empty subjects ' + JSON.stringify(r));
  ok(same(r.subj.map(s => s.pct), [60, 100, 0]), 'per-subject %');
}
// ---------- 台北時間跨日 ----------
{
  const t2359 = Date.UTC(2026, 10, 19, 15, 59), t0001 = Date.UTC(2026, 10, 19, 16, 1);   // 11/19 23:59、11/20 00:01（台北）
  ok(SM.ddDay(t2359) === '261119' && SM.ddDay(t0001) === '261120', 'Taipei date boundary');
  let d = SM.ddAdd({}, 'x', t2359, 'e', true); d = SM.ddAdd(d, 'x', t0001, 'e', false);
  ok(d.x === '261119e1;261120e1,1', 'two sides of midnight are two days: ' + d.x);
  const v = KD.view({ dd: d, today: '261120', ev: {} }).rows;
  ok(v.length === 2 && v[0].day === '261120' && v[1].day === '261119', 'newest first');
  ok(KD.cardHtml(v.length && { rows: v }, '261120').includes('11/20（五）'), 'date label with weekday (2026-11-20 is Friday)');
}
// ---------- 三台合併、交換律、結合律、冪等、重複同步 ----------
{
  let a = {}, b = {}, c = {};
  a = add(a, 'iPad', NOW, 'e', true, 30); b = add(b, 'pc', NOW, 'e', false, 5); b = add(b, 'pc', NOW, 'm', true, 18); c = add(c, 'mom', NOW, 'n', true, 10); c = add(c, 'mom', NOW - DAY, 'e', true, 2);
  const m = SM.mergeDd(SM.mergeDd(a, b, NOW), c, NOW);
  ok(same(SM.ddSum(m)[today], { e: [35, 30], m: [18, 18], n: [10, 10] }) && same(SM.ddSum(m)[day(1)], { e: [2, 2] }), 'three devices add up on display');
  ok(same(m, SM.mergeDd(a, SM.mergeDd(c, b, NOW), NOW)) && same(m, SM.mergeDd(SM.mergeDd(c, a, NOW), b, NOW)), 'commutative, associative');
  ok(same(SM.mergeDd(m, m, NOW), m) && same(SM.mergeDd(m, a, NOW), m) && same(SM.mergeDd(a, m, NOW), m), 'idempotent: merging again changes nothing');
  ok(same(SM.normDd(m, NOW), m), 'normalize is stable');
  // 同一台的新舊版本：取大、不是加總
  const a2 = add(a, 'iPad', NOW, 'e', false, 2), mm = SM.mergeDd(SM.mergeDd(m, a2, NOW), a, NOW);
  ok(same(SM.ddSum(mm)[today].e, [37, 30]), 'same device: newer copy wins, old copy never adds');
  // 亂數：每台裝置的版本是遞增的，任何順序、重複合併結果都一樣
  let seed = 7; const rnd = n => (seed = (seed * 16807) % 2147483647) % n;
  const devs = ['a', 'b', 'c'], snaps = [];
  devs.forEach(dev => { let x = {}; for (let i = 0; i < 40; i++) { x = SM.ddAdd(x, dev, NOW - rnd(5) * DAY, 'emcsnh'[rnd(6)], rnd(2) === 0); if (i % 8 === 0) snaps.push(x); } snaps.push(x); });
  const fold = l => l.reduce((p, q) => SM.mergeDd(p, q, NOW), {}), ref = fold(snaps);
  let okAll = true;
  for (let i = 0; i < 25; i++) { const l = snaps.slice(); for (let j = l.length - 1; j > 0; j--) { const k = rnd(j + 1); [l[j], l[k]] = [l[k], l[j]]; } if (!same(fold(l.concat(l.slice(0, 5))), ref)) okAll = false; }
  ok(okAll, 'random order + repeats converge');
}
// ---------- 同步文件：端到端（syncOnce）、重複同步不重複算、舊版文件 ----------
(async () => {
  const dayNow = Date.now();
  let etag = 1, remote = { doc: { v: 8, log: [], cut: 0, agg: {}, learned: {}, mistakes: {} }, etag: 'e1' };   // 線上是 v8 文件
  const io = local => ({
    get: async () => JSON.parse(JSON.stringify(remote)),
    put: async (c, d, et) => { if (et !== remote.etag) return { conflict: true }; remote = { doc: JSON.parse(JSON.stringify(d)), etag: 'e' + (++etag) }; return {}; },
    readLocal: () => local.d, writeLocal: d => { local.d = d; }
  });
  const dev = (id, n) => ({ d: { dd: add({}, id, dayNow, 'e', true, n) } });
  const A = dev('iPad', 3), B = dev('pc', 4), C = dev('mom', 5);
  for (const L of [A, B, C, A, B, C]) await SM.syncOnce(io(L), 'X');
  const sum = L => SM.ddSum(L.d.dd)[SM.ddDay(dayNow)];
  ok(remote.doc.v === SM.VERSION && SM.VERSION === 9 && same(sum(A), { e: [12, 12] }) && same(sum(B), sum(A)) && same(sum(C), sum(A)), 'three devices via syncOnce: total 12 on every device, doc v9');
  const et0 = remote.etag;
  for (const L of [A, B, C, A]) { const r = await SM.syncOnce(io(L), 'X'); ok(r.ok && r.puts === 0, 'second sync: nothing to upload'); }
  ok(remote.etag === et0 && same(sum(A), { e: [12, 12] }), 'syncing again does not change the numbers');
  A.d.dd = add(A.d.dd, 'iPad', dayNow, 'm', false, 2);
  await SM.syncOnce(io(A), 'X'); await SM.syncOnce(io(B), 'X');
  ok(same(sum(B), { e: [12, 12], m: [2, 0] }), 'new answers reach the other device');
  // 舊版（v8）裝置：看不懂 dd，PUT 回去少了它 → 新版下次同步從本機補回，數字不變
  remote = { doc: Object.assign({}, remote.doc, { v: 8 }), etag: 'e' + (++etag) }; delete remote.doc.dd;
  const r = await SM.syncOnce(io(A), 'X');
  ok(r.ok && r.puts === 1 && same(sum(A), { e: [12, 12], m: [2, 0] }) && same(SM.ddSum(remote.doc.dd)[SM.ddDay(dayNow)], sum(A)), 'v8 device wipes dd from the doc → next v9 sync restores it');
  // 別的欄位不受影響、舊文件升級
  const v8 = SM.normalize({ v: 8, log: [], mm: { 'social:u1': { unlocked: 2 } } });
  ok(v8.v === 9 && same(v8.dd, {}) && v8.mm['social:u1'].unlocked === 2, 'old doc → v9 with empty dd');
  ok(same(SM.normalize({ dd: 'garbage' }).dd, {}) && same(SM.normDd({ 'bad id!': 'x', ok: 'zzz;261120e1,1'.replace('261120', SM.ddDay(dayNow)) }, dayNow), { ok: SM.ddDay(dayNow) + 'e1,1' }), 'garbage dropped');
  ok(same(SM.normDd({ x: SM.ddDay(dayNow) + 'e5,9' }, dayNow), { x: SM.ddDay(dayNow) + 'e5,5' }), 'wrong never exceeds n');

  // ---------- 超過 90 天清掉 ----------
  {
    const old = NOW - 90 * DAY, edge = NOW - 89 * DAY;
    let d = SM.ddAdd({}, 'x', edge, 'e', true);
    d.x = SM.ddDay(old) + 'e9,9;' + d.x;
    const n = SM.normDd(d, NOW);
    ok(n.x === SM.ddDay(edge) + 'e1', '90th day back stays, 91st is gone: ' + n.x);
    ok(!SM.ddAdd({ x: SM.ddDay(old) + 'e9' }, 'x', NOW, 'e', true).x.includes(SM.ddDay(old)), 'recording prunes old days');
    ok(same(SM.normDd({ x: SM.ddDay(old) + 'e9,9' }, NOW), {}), 'device with only old days disappears');
  }
  // ---------- 大小 ----------
  {
    // iPad 天天 5 科、各 20～30 題，電腦每週一天 2 科
    let dd = {}; const ipad = [], pc = [];
    for (let i = 0; i < 90; i++) { ipad.push(SM.ddDay(NOW - i * DAY) + 'c20,3e60,10m30,5n30,5s30,5'); if (i % 7 === 0) pc.push(SM.ddDay(NOW - i * DAY) + 'e30,5m18,3'); }
    dd = { d0abcdefgh12345: ipad.reverse().join(';'), d0abcdefgh54321: pc.reverse().join(';') };
    const n = SM.normDd(dd, NOW), b = SM.bytes(n);
    ok(same(Object.keys(SM.ddSum(n)).length, 90) && b <= SM.DD_MAX, 'realistic heavy use keeps all 90 days: ' + b + ' B');
    console.log('daily stats doc size: 90 天 iPad 5 科＋電腦每週一天 ' + b + ' B（上限 ' + SM.DD_MAX + ' B）');
    // 最壞：90 天、5 台、8 個代碼全部封頂 → 上限內，留最新的；合併順序不影響
    const full = {}; for (let k = 0; k < 5; k++) { const s = []; for (let i = 0; i < 90; i++) s.push(SM.ddDay(NOW - i * DAY) + 'emcsnhao'.split('').map(c => c + '9999,9999').join('')); full['d' + k + 'abcdefgh12345'] = s.reverse().join(';'); }
    const f = SM.normDd(full, NOW), fb = SM.bytes(f), kept = Object.keys(SM.ddSum(f)).sort();
    ok(fb <= SM.DD_MAX && kept[kept.length - 1] === today && kept.length >= 5, 'worst case stays under the cap, keeps newest days: ' + fb + ' B, ' + kept.length + ' days');
    const parts = Object.keys(full).map(k => ({ [k]: full[k] })), fwd = parts.reduce((p, q) => SM.mergeDd(p, q, NOW), {}), bak = parts.slice().reverse().reduce((p, q) => SM.mergeDd(p, q, NOW), {});
    ok(same(fwd, bak) && same(fwd, f), 'cap does not break merge order');
    ok(same(SM.normDd({ d: SM.ddDay(NOW) + 'e99999,99999' }, NOW), { d: SM.ddDay(NOW) + 'e9999,9999' }), 'counter capped');
  }
  // ---------- 空資料、斷日、併行 ----------
  {
    ok(same(view({ dd: {} }).rows, []) && KD.cardHtml(view({ dd: {} }), today).includes('還沒有紀錄'), 'empty');
    ok(same(view({ dd: null, log: null, ev: null }).rows, []), 'null inputs');
    let d = {}; [0, 1, 5, 6].forEach(n => { d = SM.ddAdd(d, 'x', NOW - n * DAY, 'e', true); });
    d = SM.ddAdd(d, 'x', NOW - 8 * DAY, 'e', true);
    const r = view({ dd: d }).rows;
    ok(r.map(x => x.gap ? x.from + '-' + x.to : x.day).join() === [today, day(1), day(4) + '-' + day(2), day(5), day(6), day(7) + '-' + day(7), day(8)].join(), 'gaps merged: ' + JSON.stringify(r.map(x => x.gap ? x.from + '-' + x.to : x.day)));
    const h = KD.cardHtml({ rows: r }, today);
    ok(h.includes(`${day(4).slice(2, 4)}/${day(4).slice(4)}～${day(2).slice(2, 4)}/${day(2).slice(4)} 沒有練習`) && (h.match(/dl-gap/g) || []).length === 2, 'several days → one line');
    ok(h.includes(`${day(7).slice(2, 4)}/${day(7).slice(4)} 沒有練習`), 'single day gap');
    // 今天還沒做
    const y = SM.ddAdd({}, 'x', NOW - DAY, 'e', true), r0 = view({ dd: y }).rows;
    ok(r0[0].gap && r0[0].from === today && KD.cardHtml({ rows: r0 }, today).includes('今天還沒練習'), 'today not practiced yet');
    const y3 = SM.ddAdd({}, 'x', NOW - 3 * DAY, 'e', true), r3 = view({ dd: y3 }).rows;
    ok(r3[0].gap && r3[0].from === day(2) && r3[0].to === today, 'days up to today merged');
    // 14 天外收進「展開全部」；未來日期不顯示
    let far = {}; for (const n of [0, 5, 20, 40]) far = SM.ddAdd(far, 'x', NOW - n * DAY, 'e', true);
    far = SM.mergeDd(far, { x: SM.ddDay(NOW + 3 * DAY) + 'e1' }, NOW);
    const vf = view({ dd: far }), hf = KD.cardHtml(vf, today), split = hf.split('<details');
    ok(vf.rows[0].day === today && split.length === 2 && split[0].includes(`data-day="${day(5)}"`) && !split[0].includes(`data-day="${day(20)}"`) && split[1].includes(`data-day="${day(40)}"`), 'older than 14 days folded; future dates ignored');
    ok(!hf.includes('<details id="dlMore" open') && KD.cardHtml(vf, today, true).includes('<details id="dlMore" open'), 'expanded state kept');
  }
  // ---------- 開放題 ----------
  {
    let d = add({}, 'x', NOW, 'c', true, 3); d = add(d, 'x', NOW, 'c', false, 1); d = SM.ddAdd(d, 'x', NOW, 'o', false);
    const r = view({ dd: d }).rows[0];
    ok(r.n === 5 && r.den === 4 && r.pct === 75 && r.subj[0].name === '國語' && r.subj[0].n === 5 && r.subj[0].pct === 75, 'open question counts in total, not in %');
    const only = view({ dd: SM.ddAdd({}, 'x', NOW, 'o', false) }).rows[0], h = KD.cardHtml({ rows: [only] }, today);
    ok(only.n === 1 && only.pct == null && !/答對 \d/.test(h) && h.includes('國語 1 題'), 'only open questions: no % shown');
  }
  // ---------- 舊紀錄回填 ----------
  {
    const L = (t, right) => ({ t, ok: right ? 1 : 0, id: 'q', m: 'words' }), lanT = Date.UTC(2026, 10, 3, 4);   // 上線日 11/03 12:00 台北
    const lanDay = SM.ddDay(lanT), T = Date.UTC(2026, 10, 4, 4), td = SM.ddDay(T);
    ok(lanDay === KD.START, 'launch date constant');
    const log = [L(lanT - 3 * DAY, 1), L(lanT - 3 * DAY, 0), L(lanT - 3 * DAY, 1), L(lanT, 1), L(lanT, 1), L(T, 1)];
    // 上線日：ke_log 2 題、計數 1 題（上線後做的）→ 取較大，不相加；隔天起只看計數，不看 ke_log
    let dd = SM.ddAdd({}, 'x', lanT, 'e', true); dd = SM.ddAdd(dd, 'x', T, 'e', true); dd = SM.ddAdd(dd, 'x', T, 'e', true);
    const rows = KD.view({ dd, log, today: td, ev: {} }).rows, by = {}; rows.forEach(r => { if (r.day) by[r.day] = r; });
    ok(by[td].n === 2 && by[lanDay].n === 2 && by[SM.ddDay(lanT - 3 * DAY)].n === 3 && by[SM.ddDay(lanT - 3 * DAY)].pct === 67, 'ke_log backfills before launch, launch day takes the larger, later days use counters only ' + JSON.stringify(by));
    ok(same(by[SM.ddDay(lanT - 3 * DAY)].subj.map(s => s.name), ['英文']), 'backfill is English');
    const gap = rows.find(r => r.gap);
    ok(gap && gap.pre === 1 && KD.cardHtml({ rows }, td).includes('沒有紀錄') && !/dl-gap">[^<]*沒有練習/.test(KD.cardHtml({ rows }, td)), 'days before launch say 沒有紀錄, not 沒有練習');
    // 超過 90 天的 ke_log 不顯示
    const r90 = KD.view({ dd: {}, log: [L(lanT - 200 * DAY, 1), L(lanT - 10 * DAY, 1)], today: lanDay, ev: {} }).rows;
    ok(r90[r90.length - 1].day === SM.ddDay(lanT - 10 * DAY), 'ke_log older than 90 days ignored');
    // 其他科：只知道有練
    const ev = KD.evidence({
      seen: { social: { d: ['2026-10-30'] } }, mk: { math: { 'a': { t: lanT - 2 * DAY, u: lanT - 2 * DAY } } }, mm: { 'science:n1': { lastPassAt: lanT - 5 * DAY, passedAt: { 1: lanT - 5 * DAY } }, '_demo': { lastPassAt: lanT - 6 * DAY } },
      done: { ai: { p: lanT - 7 * DAY }, zh: { L: lanT - 8 * DAY } }, exam: { 'social:u1': { at: lanT - 9 * DAY }, _seen: { science: { k: lanT - 11 * DAY } } }, zhRead: { a1: { at: lanT - 12 * DAY } }
    }, SM.ddDay);
    const rv = KD.view({ dd: {}, log: [], today: lanDay, ev }).rows, note = {}; rv.forEach(r => { if (r.day) note[r.day] = r.noted.join(); });
    ok(note['261030'].includes('社會') && note[SM.ddDay(lanT - 5 * DAY)] === '自然' && note[SM.ddDay(lanT - 7 * DAY)] === 'AI' && note[SM.ddDay(lanT - 8 * DAY)] === '國語' && note[SM.ddDay(lanT - 11 * DAY)] === '自然' && note[SM.ddDay(lanT - 12 * DAY)] === '國語' && !note[SM.ddDay(lanT - 6 * DAY)], 'practice days from timestamps: ' + JSON.stringify(note));
    const hv = KD.cardHtml({ rows: rv }, lanDay);
    ok(hv.includes('有練習（題數未記錄）') && !/社會 \d+ 題/.test(hv) && hv.includes('其他科從 11/03 開始統計'), 'no made-up numbers; note about the start date');
    // 上線之後的日子，只有證據沒計數 → 不顯示（計數才算數）
    ok(KD.view({ dd: {}, log: [], today: '261110', ev: { 261105: { social: 1 } } }).rows.length === 0, 'evidence only used up to launch day');
    // 同一天有英文題數也有別科證據
    const mix = KD.view({ dd: {}, log: [L(lanT - 3 * DAY, 1)], today: lanDay, ev: { [SM.ddDay(lanT - 3 * DAY)]: { english: 1, math: 1 } } }).rows.find(r => r.day);
    ok(mix.n === 1 && same(mix.noted, ['數學']), 'counted subject is not also noted');
  }
  // ---------- 每日進度清單 ----------
  {
    const G = KD.GOAL_DEF, D = (o) => o, chk = (d, reads, goal) => KD.checkDay(d, reads, goal || G);
    ok(same(G, [60, 30, 1]), 'default goals 60/30/1');
    // 計數與折算：答錯也算；快算 3 題折 1 題，多的不進位
    let dd = add({}, 'iPad', NOW, 'e', false, 12); dd = add(dd, 'iPad', NOW, 'm', true, 10); dd = add(dd, 'iPad', NOW, 'x', false, 8);
    let c = chk(SM.ddSum(dd)[today], 0);
    ok(c.rows[0].n === 12 && c.rows[0].left === 48 && !c.rows[0].done, 'wrong answers count');
    ok(c.rows[1].n === 12 && c.rows[1].raw === 18 && c.rows[1].left === 18 && c.rows[1].mx === 8, 'multiply 3→1: 10 + floor(8/3) = 12; raw 18 ' + JSON.stringify(c.rows[1]));
    ok(c.rows[2].n === 0 && !c.rows[2].done && c.doneN === 0 && !c.allDone && c.total === 3, 'reading not done');
    // 三台裝置合併：先加總再折算（2＋2＋2 快算＝6 題＝2 題，不是各自折成 0）
    let a3 = {}, b3 = {}, c3 = {}; a3 = add(a3, 'a', NOW, 'x', true, 2); b3 = add(b3, 'b', NOW, 'x', true, 2); c3 = add(c3, 'c', NOW, 'x', true, 2); a3 = add(a3, 'a', NOW, 'e', true, 20); b3 = add(b3, 'b', NOW, 'e', true, 20); c3 = add(c3, 'c', NOW, 'e', true, 20);
    const m3 = [a3, b3, c3].reduce((p, q) => SM.mergeDd(p, q, NOW), {}), cm = chk(SM.ddSum(SM.mergeDd(m3, a3, NOW))[today], 0);
    ok(cm.rows[1].n === 2 && cm.rows[0].n === 60 && cm.rows[0].done && !cm.rows[0].over, 'three devices: sum first, then convert; 60/60 done, not over; repeated merge unchanged');
    // 家長頁、首頁的數學題數含快算（原始題數）
    const rv = view({ dd }).rows[0];
    ok(rv.subj.find(s => s.name === '數學').n === 18, 'math row shows raw count including multiply');
    // 跨日歸零（台北時間）
    const t0 = Date.UTC(2026, 10, 19, 15, 59), t1 = Date.UTC(2026, 10, 19, 16, 1); let dn = add({}, 'x', t0, 'e', true, 60);
    ok(chk(SM.ddSum(dn)['261119'], 0).rows[0].done && !chk(SM.ddSum(dn)['261120'], 0).rows[0].done && chk(SM.ddSum(dn)['261120'], 0).rows[0].n === 0, 'new Taipei day starts at 0');
    dn = SM.ddAdd(dn, 'x', t1, 'e', true); ok(chk(SM.ddSum(dn)['261120'], 0).rows[0].n === 1 && chk(SM.ddSum(dn)['261119'], 0).rows[0].n === 60, '00:01 counts on the new day; 23:59 stays');
    // 超標：多做的不算到隔天
    const ov = chk({ e: [85, 80], m: [30, 30] }, 2);
    ok(ov.rows[0].over && ov.rows[0].done && !ov.rows[1].over && ov.rows[2].over && ov.allDone, 'over target flagged');
    ok(chk(SM.ddSum(add({}, 'x', t0, 'e', true, 85))['261120'], 0).rows[0].n === 0, 'extra does not carry over');
    // 閱讀：只算第一次完成落在當天；重讀（done 時間不變）、成語故事 cy001、單元測驗 cyu、總測驗不算；成語素養閱讀 cyr 算
    const tR = Date.UTC(2026, 10, 19, 4), yR = tR - DAY, rd = KD.readDays({ zh: { 'zh1-01': yR, 'zh1-02': tR }, cy: { cy001: tR, cyu01: tR, cyall: tR, cyr01: tR } }, SM.ddDay);
    ok(rd[SM.ddDay(tR)] === 2 && rd[SM.ddDay(yR)] === 1, 'reading counts: zh + cyr only, by first completion ' + JSON.stringify(rd));
    ok(same(KD.readDays(SM.mergeDone({ zh: { a: tR } }, { zh: { a: yR } }).zh ? { zh: SM.mergeDone({ zh: { a: tR } }, { zh: { a: yR } }).zh } : {}, SM.ddDay), { [SM.ddDay(yR)]: 1 }), 'same article on two devices: earliest counts once');
    ok(same(KD.readDays(null, SM.ddDay), {}), 'no reading data');
    // 目標生效日：改目標不影響過去
    let dg = KD.setGoal({}, '261110', [80, 30, 1]);
    ok(same(KD.goalOn(dg, '261109'), [60, 30, 1]) && same(KD.goalOn(dg, '261110'), [80, 30, 1]) && same(KD.goalOn(dg, '261120'), [80, 30, 1]), 'goal applies from its effective day');
    dg = KD.setGoal(dg, '261115', [40, 20, 2]);
    ok(same(KD.goalOn(dg, '261112'), [80, 30, 1]) && same(KD.goalOn(dg, '261115'), [40, 20, 2]), 'history kept');
    const d2 = add(add({}, 'x', Date.UTC(2026, 10, 12, 4), 'e', true, 70), 'x', Date.UTC(2026, 10, 12, 4), 'm', true, 30), lab = dgx => KD.view({ dd: d2, ev: {}, today: '261120', start: '261103', dg: dgx, done: { zh: { a: Date.UTC(2026, 10, 12, 4) } } }).rows.find(r => r.day === '261112').check;
    ok(lab(KD.setGoal({}, '261110', [60, 30, 1])) === '✓ 全部完成' && lab(KD.setGoal(KD.setGoal({}, '261110', [60, 30, 1]), '261115', [90, 30, 1])) === '✓ 全部完成', 'raising the goal later does not change a past day');
    ok(lab(KD.setGoal({}, '261110', [80, 30, 1])) === '英文 70/80、數學 ✓、閱讀 ✓', 'judged by that day goal: ' + lab(KD.setGoal({}, '261110', [80, 30, 1])));
    // 家長頁文字
    ok(KD.checkText(chk({ e: [45, 40], m: [30, 30] }, 0)) === '英文 45/60、數學 ✓、閱讀 未完成', 'parent label ' + KD.checkText(chk({ e: [45, 40], m: [30, 30] }, 0)));
    ok(KD.checkText(chk({ e: [60, 40], m: [30, 30] }, 1, [60, 30, 2])) === '英文 ✓、數學 ✓、閱讀 1/2', 'reading partial');
    const hc = KD.cardHtml(KD.view({ dd: d2, ev: {}, today: '261120', start: '261103', dg: {}, done: { zh: { a: Date.UTC(2026, 10, 12, 4) } } }), '261120', false, [60, 30, 1]);
    ok(hc.includes('今日清單：✓ 全部完成') && hc.includes('id="dgSave"') && hc.includes('現在：英文 60 題、數學 30 題、閱讀 1 篇'), 'parent card shows label and goal form');
    ok(!KD.view({ dd: { x: '261001e5' }, ev: {}, today: '261103', start: '261103' }).rows.find(r => r.day === '261001').check, 'days before launch have no checklist label');
    // 同步：目標合併
    const g1 = { 261110: '80,30,1,0' }, g2 = { 261110: '70,30,1,1', 261112: '50,30,1,0' };
    ok(same(SM.mergeDg(g1, g2), SM.mergeDg(g2, g1)) && SM.mergeDg(g1, g2)[261110] === '70,30,1,1' && same(SM.mergeDg(SM.mergeDg(g1, g2), g2), SM.mergeDg(g1, g2)), 'goals merge: higher edit count wins; commutative, idempotent');
    ok(same(SM.normalize({ dg: { 261110: '80,30,1,0', bad: 'x', 261111: 'nope' } }).dg, { 261110: '80,30,1,0' }) && same(SM.normalize({}).dg, {}), 'goals normalized; old doc has none');
    const many = {}; for (let i = 10; i < 20; i++) many['2611' + i] = '999,999,20,99';
    ok(Object.keys(SM.normDg(many)).length === 6 && SM.normDg(many)[261119] && SM.bytes(SM.normDg(many)) <= SM.DG_MAX_BYTES, 'keep newest 6 goals within budget: ' + SM.bytes(SM.normDg(many)));
    ok(same(KD.setGoal({ 261110: '80,30,1,3' }, '261110', [70, 30, 1]), { 261110: '70,30,1,4' }), 'editing again the same day bumps the edit count');
    ok(same(KD.validGoal(['60', '30', '1']), [60, 30, 1]) && !KD.validGoal(['0', '30', '1']) && !KD.validGoal(['60', 'x', '1']) && !KD.validGoal(['60', '30', '21']), 'goal validation');
    // 慶祝只跳一次
    ok(KD.partyDue(null, '261103', true) && !KD.partyDue('261103', '261103', true) && KD.partyDue('261102', '261103', true) && !KD.partyDue(null, '261103', false), 'celebration once a day, only when all done');
  }
  // ---------- 小助理看清單 ----------
  {
    const ac = read('assistant-core.js'), au = read('assistant-ui.js');
    ok(ac.includes('listDone') && !ac.includes('GOAL_MIN') && !/每日目標還差/.test(ac), 'assistant uses the checklist, not the 15-minute goal');
    ok(au.includes('KidsDaily.today()') && au.includes('id="td-next"') && au.includes('id="td-more"'), 'home: list, one main button, other tasks collapsed');
    ok(read('sync.js').includes('dg: ld(K_DG, {})') && /WATCH = \[[^\]]*K_DG/.test(read('sync.js')), 'goals in sync scope');
    ok(read('mindmap/mindmap.js').includes("['學習', [['read',") && read('mindmap/mindmap.js').includes("['測驗', [['exam',") && read('mindmap/mindmap.js').includes("['複習', [['card',"), 'unit page modes grouped');
    ['read', 'arch', 'cloze', 'quiz', 'lit', 'ia', 'exam', 'card'].forEach(v => ok(read('mindmap/mindmap.js').includes("['" + v + "', "), 'mode still there: ' + v));
  }
  // ---------- 作答入口都有記錄（新增入口沒接就會在這裡擋下）----------
  {
    const R = 'KidsDaily.rec(';
    const ENTRIES = [
      // 英文：題型、課本、口語考試、學會小測驗、練這組、錯題回合都走 app.js answer()
      ['英文 全部題型', 'app.js', "if (!skipped && window.KidsDaily) KidsDaily.rec('english', res.ok)"],
      // 數學：一題記一次，掛在第一次答錯／一路沒錯做完（錯題庫同一點）；考卷每題也走 mkRec
      ['數學 天平換你算', 'math/balance.html', /function mkRec\(q, ok\)\{\s*if \(window\.KidsDaily\) KidsDaily\.rec\('math', ok\)/],
      ['數學 天平應用題', 'math/balance.html', "function bwRec(Q, ok){ if (window.KidsDaily) KidsDaily.rec('math', ok)"],
      ['數學 分數練習＋考試', 'math/fraction.html', "function mkRec(Q, ok) { if (window.KidsDaily) KidsDaily.rec('math', ok)"],
      ['數學 倍數練習＋考試', 'math/multiples.html', "function mkRec(Q, ok) { if (window.KidsDaily) KidsDaily.rec('math', ok)"],
      ['數學 乘法練習＋挑戰（快算，清單 3 題折 1 題）', 'math/multiply.html', /function mkRec\(q, ok\) \{\s*if \(window\.KidsDaily\) KidsDaily\.rec\('mathx', ok\)/],
      ['數學 短除法換你算', 'math/short-division.html', /function mkRec\(Q, ok\) \{\s*if \(window\.KidsDaily\) KidsDaily\.rec\('math', ok\)/],
      ['數學 紙本錯題＋類題 30 題', 'math/paper.html', "function mkRec(Q, ok) { if (window.KidsDaily) KidsDaily.rec('math', ok)"],
      ['數學 短除法應用題', 'math/short-division.html', /function wRec\(Q, ok\) \{\s*if \(window\.KidsDaily\) KidsDaily\.rec\('math', ok\)/],
      ['數學 五下～六下 練習＋測驗＋總複習＋錯題', 'math/grade.html', "function mkRec(Q, ok) { if (window.KidsDaily) KidsDaily.rec('math', ok)"],
      // 社會／自然（SUBJ＝科）
      ['社自 挖空（考考自己）', 'mindmap/mindmap.js', 'function logBlank(b, ok){ dailyRec(ok);'],
      ['社自 背架構四關', 'mindmap/mindmap.js', 'if(!s || s.x.nq) return; dailyRec(ok);'],
      ['社自 練習題／填空／互動題／錯題回合／隔天複習', 'mindmap/mindmap.js', 'if(!card){ coinAnswer(right); dailyRec(right); }'],
      ['社自 素養題組', 'mindmap/mindmap.js', 'var q = LT.items[i].q, u = unit(); coinAnswer(ok); dailyRec(ok);'],
      ['社自 單元測驗／段考', 'mindmap/mindmap.js', 'coinAnswer(oks[i]); dailyRec(oks[i]);'],
      // 國語
      ['國語 閱讀自動判分＋只練錯題', 'chinese/reading.js', "KidsCoins.answer(!!ok, 'chinese'); } catch (e) { } if (window.KidsDaily) KidsDaily.rec('chinese', !!ok);"],
      ['國語 閱讀想一想', 'chinese/reading.js', "KidsDaily.rec('chinese', null)"],
      ['國語 成語＋測驗', 'chinese/idioms/idioms.js', "KidsCoins.answer(!!ok, 'chinese'); } catch (e) { } if (window.KidsDaily) KidsDaily.rec('chinese', !!ok);"],
      ['國語 成語想一想', 'chinese/idioms/idioms.js', "KidsDaily.rec('chinese', null)"],
      // AI
      ['AI 幻覺', 'ai/hallucinate.html', "KidsDaily.rec('ai',ok)"],
      ['AI 問得好', 'ai/ask-well.html', "KidsDaily.rec('ai',ok)"],
      ['AI 秘密', 'ai/secrets.html', "KidsDaily.rec('ai',ok)"],
      ['AI 錯題回合', 'kids-mistakes.js', "KidsDaily.rec('ai', right)"],
      // 歷史
      ['歷史漫畫測驗', 'comics/comic.js', "KidsDaily.rec('history', r.result)"],
      // 遊戲（算英文）：勇者島戰鬥／夜襲／競技場都走 askQ.finish；方塊世界石碑／錯題怪／任務都走 recordAnswer；小朋友鎮只有執照考試／工作任務（閒聊不算）
      ['勇者島', 'game/hero-island/game.js', "root.KidsDaily.rec('english', ok)"],
      ['方塊世界（打包檔）', 'game/hero-world/assets/hw.js', /KidsDaily\.rec\("english",/],
      ['小朋友鎮（打包檔）', 'game/kids-town/assets/kt.js', /KidsDaily\.rec\("english",/],
    ];
    ENTRIES.forEach(([name, f, needle]) => { const s = read(f); ok(needle instanceof RegExp ? needle.test(s) : s.includes(needle), 'entry records: ' + name + ' (' + f + ')'); });
    if (fs.existsSync(path.join(root, 'game/hero-world/src'))) {   // 原始碼只在正本
      ok(read('game/hero-world/src/ui/quiz.js').includes("rec('english', ok)"), 'hero-world source records');
      // 小朋友鎮（2026-11-08 Yoda 定）：只有執照考試、工作任務算進每日英文題數，跟居民閒聊（對話、小測驗）不算
      const tm = read('game/hero-world/src/town/main.js'), body = (from, to) => tm.slice(tm.indexOf(from), tm.indexOf(to, tm.indexOf(from) + 1));
      ok((tm.match(/KidsDaily\.rec\('english'/g) || []).length === 1 && tm.includes("function countEnglish(ok) { if (window.KidsDaily) window.KidsDaily.rec('english', ok); }"), 'kids-town records through countEnglish only');
      ok(['function renderExam', 'function renderTask', 'function goTick'].every(fn => body(fn, '\n  function ').includes('countEnglish(')), 'kids-town license exam and job tasks record');
      ok(!/countEnglish|KidsDaily/.test(body('function answer(', 'function checkAns(') + body('function checkAns(', '\n  // ')), 'kids-town chat does not record');
    }
    // 閃卡不算：flashcard 的 fcAns 不經 quizDone、也不呼叫 dailyRec；quizDone 裡的閃卡（type:card）被擋掉
    const mm = read('mindmap/mindmap.js');
    ok(/fcAns:function[^\n]*/.test(mm) && !/fcAns:function[^\n]*dailyRec/.test(mm), 'flashcards do not record');
    // 重試不重複：挖空答錯、背架構放錯不直接記，math 的 coinAnswer 不記
    ok(!/coinAnswer\(false\);\s*dailyRec/.test(mm) && !/function coinAnswer[^\n]*KidsDaily/.test(read('math/short-division.html')), 'retries are not counted');
    // 掃全站：呼叫 KidsCoins.answer 的檔案（＝作答入口）一定要記；頁面要載 kids-daily.js、而且排在 syncmerge.js 後面
    const skipDir = new Set(['node_modules', 'scratchpad', '考卷', 'test', 'data', 'src', '_build', '_demo']), found = [];
    (function walk(dir) { fs.readdirSync(dir, { withFileTypes: true }).forEach(e => { if (e.isDirectory()) { if (!skipDir.has(e.name) && e.name !== '.git') walk(path.join(dir, e.name)); } else if (/\.(js|html)$/.test(e.name)) found.push(path.relative(root, path.join(dir, e.name)).replace(/\\/g, '/')); }); })(root);
    const entryFiles = found.filter(f => f !== 'kids-coins.js' && /KidsCoins\.answer\(/.test(read(f).replace(/\/\*[\s\S]*?\*\//g, '')));
    ok(entryFiles.length >= 12, 'found entry files: ' + entryFiles.length);
    entryFiles.forEach(f => { const s = read(f); ok(s.includes(R) || s.includes('dailyRec(') || f === 'chinese/reading-core.js', 'file with KidsCoins.answer must record too: ' + f); });
    const PAGES = ['index.html', 'mindmap/social.html', 'mindmap/science.html', 'math/balance.html', 'math/fraction.html', 'math/multiples.html', 'math/multiply.html', 'math/short-division.html', 'math/paper.html', 'math/grade.html', 'chinese/reading.html', 'chinese/idioms/idioms.html', 'ai/ask-well.html', 'ai/hallucinate.html', 'ai/secrets.html', 'game/hero-island/index.html', 'game/hero-world/index.html', 'game/kids-town/index.html']
      .concat(fs.readdirSync(path.join(root, 'comics')).filter(f => /^v\d+e\d+\.html$/.test(f)).map(f => 'comics/' + f));   // 漫畫每一話（comic.js 記錄）自動列進來
    PAGES.forEach(f => { const s = read(f), a = s.indexOf('syncmerge.js"'), a2 = s.indexOf('syncmerge.js?'), m = a >= 0 ? a : a2, b = s.search(/kids-daily\.js["?]/); ok(m >= 0 && b > m, 'page loads syncmerge.js then kids-daily.js: ' + f); });
    // 每個有記錄的 html 都在清單裡（新頁面忘了載 kids-daily.js 會擋）
    found.filter(f => f.endsWith('.html') && /KidsCoins\.answer\(|KidsDaily\.rec\(/.test(read(f))).forEach(f => ok(PAGES.includes(f), 'html entry page is listed: ' + f));
    // 記錄點要照規矩：沒登入不記、不對外送
    const kd = read('kids-daily.js');
    ok(kd.includes('!loggedIn()') && !/fetch\(|XMLHttpRequest|sendBeacon/.test(kd), 'no login no record; no network');
    ok(read('sync.js').includes("dd: ld(K_DD, {})") && /WATCH = \[[^\]]*K_DD/.test(read('sync.js')), 'kids_daily in sync scope');
    ok(read('app.js').includes('KidsDaily.html()') && read('app.js').includes('KidsDaily.bind(app, render)'), 'parent page shows the card');
  }
  console.log(`daily-stats: ${pass} passed, ${fail} failed`);
  if (fail) process.exit(1);
})().catch(e => { console.error(e); process.exit(1); });
