// flashcards.test.js — 🃏 社會／自然名詞閃卡（mindmap/data/<科>/cards.js）資料檢查
// 用法：node test/flashcards.test.js
// 1. 每張卡都有 ref，而且指得到（節點 id 或重點句 '<節點id>-p<i>'）；正面的名詞一定出現在 ref 指到的那段文字裡（＝內容從講義整理，不是另外寫的）
// 2. 沒有籠統詞（包含、應用、功能、例如＋blanks.js 的 GENERIC／RELS）
// 3. id 全科唯一、格式 '<單元>-<兩位數>'；背面 1～2 句
// 4. 各單元張數（校對後社會 20～25 張、自然 29～42 張）；正面全科不重複
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), MM = path.join(root, 'mindmap');
const SB = require(path.join(MM, 'blanks.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('FAIL flashcards:', m); } };
const ctx = { window: {} }; vm.createContext(ctx);
['social/unit1-2', 'social/unit3-4', 'social/cards', 'science/unit1-2', 'science/unit3-4', 'science/cards']
  .forEach(f => vm.runInContext(fs.readFileSync(path.join(MM, 'data', f + '.js'), 'utf8'), ctx, { filename: f }));
const SUBJ = { social: ctx.window.DATA_SOCIAL, science: ctx.window.DATA_SCIENCE };
const norm = s => String(s || '').replace(/[\s　、，,。．.·・\-－—~～（）()「」『』:：;；!！?？"'“”‘’\/【】\[\]→＝÷]/g, '').replace(/臺/g, '台').replace(/溼/g, '濕').toLowerCase();
const kids = d => d.lessons || d.topics || d.children || [];
const BANNED = new Set(['包含', '應用', '功能', '例如'].concat(SB.RELS, SB.GENERIC).map(norm));
const RANGE = { social: [18, 45], science: [25, 45] };   // 校對後刪掉重複、籠統的卡，不為了湊數補卡
const ids = new Set(), counts = {};

Object.keys(SUBJ).forEach(k => {
  const D = SUBJ[k], fronts = new Set();
  ok(D && D.cards && typeof D.cards === 'object', k + ': cards loaded');
  ok(Object.keys(D.cards).sort().join() === D.units.map(u => u.id).sort().join(), k + ': every unit has cards, no extra units: ' + Object.keys(D.cards));
  D.units.forEach(u => {
    // 這個單元的所有 ref 目標：節點 id → 標題；重點句 pid → 句子
    const T = {};
    (function w(d) { T[d.id] = d.title; (d.points || []).forEach((p, i) => { T[d.id + '-p' + i] = typeof p === 'string' ? p : p.t; }); kids(d).forEach(w); })(u);
    const cards = D.cards[u.id] || [];
    counts[k + ':' + u.id] = cards.length;
    ok(cards.length >= RANGE[k][0] && cards.length <= RANGE[k][1], `${k}:${u.id} card count ${cards.length} in ${RANGE[k]}`);
    cards.forEach(c => {
      const tag = `${k}:${u.id}:${c && c.id}`;
      ok(c && typeof c.id === 'string' && new RegExp('^' + u.id + '-\\d{2}$').test(c.id), tag + ' id format');
      ok(!ids.has(c.id), tag + ' id unique'); ids.add(c.id);
      ok(typeof c.f === 'string' && c.f.trim() && c.f.length <= 12, tag + ' front is a short term: ' + c.f);
      ok(typeof c.ref === 'string' && T[c.ref] != null, tag + ' ref resolves: ' + c.ref);
      ok(T[c.ref] != null && norm(T[c.ref]).includes(norm(c.f)), tag + ` front「${c.f}」appears in ref text「${T[c.ref]}」`);
      ok(!BANNED.has(norm(c.f)), tag + ' not a vague word: ' + c.f);
      const n = (String(c.b || '').match(/[。！？]/g) || []).length;
      ok(typeof c.b === 'string' && /[。！？]$/.test(c.b) && n >= 1 && n <= 2 && c.b.length <= 60, tag + ` back is 1–2 sentences (≤60 字): ${n}｜${c.b}`);
      ok(!fronts.has(norm(c.f)), tag + ' front not repeated in subject: ' + c.f); fronts.add(norm(c.f));
    });
  });
});
const tot = k => Object.keys(counts).filter(x => x.startsWith(k)).reduce((n, x) => n + counts[x], 0);
console.log('cards per unit: ' + Object.keys(counts).map(x => x + ' ' + counts[x]).join('、') + `｜社會 ${tot('social')}、自然 ${tot('science')}、共 ${tot('social') + tot('science')}`);
console.log(`flashcards: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
