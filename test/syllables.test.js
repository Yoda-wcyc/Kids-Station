/* 音節底線（syl.js＋data/syllables*.js，2026-11-23）：node test/syllables.test.js（smoke.js 也會跑） */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..'), read = f => fs.readFileSync(path.join(root, f), 'utf8');
let n = 0; const ok = (c, m) => { n++; assert.ok(c, m); };
const win = {}, ctx = vm.createContext({ window: win });
['words', 'words-2', 'words-3', 'words-4', 'words-5', 'words-6', 'words-7', 'words-8', 'phrases', 'phrases-2', 'roots', 'syllables'].forEach(f => vm.runInContext(read('data/' + f + '.js'), ctx));
const S = win.DATA_SYLLABLES, Y = require(path.join(root, 'syl.js'));
const segs = t => Y.split(S, t).filter(x => x.k >= 0).map(x => x.t);
const ks = t => Y.split(S, t).filter(x => x.k >= 0).map(x => x.k);

// 查表：原字 → 小寫；Object 內建名字不算查到
ok(Y.look(S, 'ability') === 'a-bi-li-ty' && Y.look(S, 'Ability') === 'a-bi-li-ty', 'look: ability / Ability');
ok(Y.look(S, 'constructor') === null || typeof Y.look(S, 'constructor') === 'string', 'look: constructor is not Object.prototype');
ok(Y.look({}, 'toString') === null && Y.look(null, 'cat') === null, 'look: no prototype hits, no data → null');
// 拆字：家長的例子、單音節、大小寫照畫面原字、多字詞、連字號、查不到
ok(segs('ability').join('/') === 'a/bi/li/ty' && ks('ability').join() === '0,1,2,3', 'ability → a/bi/li/ty, 4 segments');
ok(Y.html(S, 'ability') === '<span class="sy sy0">a</span><span class="sy sy1">bi</span><span class="sy sy0">li</span><span class="sy sy1">ty</span>', 'ability html: adjacent colours differ');
ok(segs('cat').join('/') === 'cat' && Y.html(S, 'cat') === '<span class="sy sy0">cat</span>', 'cat → one segment (one whole line)');
ok(segs('Ability').join('/') === 'A/bi/li/ty', 'capital A kept from the screen text');
ok(segs('living room').join('/') === 'liv/ing/room' && ks('living room').join() === '0,1,0', 'living room: each word restarts colours');
ok(Y.split(S, 'living room').some(x => x.k < 0 && x.t === ' '), 'space not underlined');
ok(segs('T-shirt').join('/') === 'T/shirt' && Y.split(S, 'T-shirt').some(x => x.k < 0 && x.t === '-'), 'T-shirt: hyphen not underlined');
ok(segs('zzqxv').join('/') === 'zzqxv', 'unknown word → one segment');
ok(segs('zzqxv ability').join('/') === 'zzqxv/a/bi/li/ty', 'phrase: unknown token one segment, known token split');
ok(Y.split({ cat: 'ca-tt' }, 'cat').map(x => x.t).join('/') === 'cat', 'data length mismatch → whole word');
ok(segs('seventy').join('/') === 'sev/en/ty' && segs('visitor').join('/') === 'vis/i/tor', 'family: sev-en-ty, vis-i-tor (follow seven, visit)');
ok(Y.html(S, '<b>') === '&lt;<span class="sy sy0">b</span>&gt;', 'html escapes');
const ex = Y.split(S, 'Excuse me.'); ok(ex.map(x => x.t).join('') === 'Excuse me.' && ex.find(x => x.t === '.').k === -1, 'trailing period kept, not underlined');
// 每一張主單字卡、片語卡、字根例字都查得到（查不到也不會壞：整個字一節）
const W = win.DATA_WORDS, miss = W.filter(w => Y.split(S, w.w).map(x => x.t).join('') !== w.w);
ok(!miss.length, 'every word card text survives split unchanged: ' + miss.slice(0, 5).map(w => w.w));
ok(W.filter(w => w.src === 'cefrj-a2').length === 519 && W.filter(w => w.src === 'cefrj-a2').every(w => w.w.split(/[\s-]+/).every(t => Y.look(S, t.replace(/[^A-Za-z'.]/g, '')) || Y.look(S, t.replace(/[^A-Za-z']/g, '')))), 'words-8: all 519 new words have syllables');
ok(win.DATA_PHRASES.every(p => Y.split(S, p.p).map(x => x.t).join('') === p.p), 'phrase text unchanged after split');

// 頁面：首頁不同步載入音節資料（第一次要畫線才載）；英檢單字頁才載 syllables-gept.js
const idx = read('index.html'), gw = read('gept/words.html');
ok(!/<script src="data\/syllables/.test(idx) && /<script src="syl\.js(\?v=\w+)?" data-src="data\/syllables\.js(\?v=\w+)?"><\/script>/.test(idx) && !/syllables-gept/.test(idx), 'index.html: syllables.js lazy (data-src), no gept file');
ok(/data-src="\.\.\/data\/syllables\.js(\?v=\w+)?" data-gept-src="\.\.\/data\/syllables-gept\.js(\?v=\w+)?"/.test(gw), 'gept/words.html lazy-loads both syllable files');
['assistant.html', 'map.html'].forEach(f => ok(!/syllables/.test(read(f)), f + ' does not load syllables'));
// 只畫在展示卡：單字卡、片語卡、課本單字卡、字根例字、英檢單字表；作答畫面（拼字、聽寫題目）不加 .syl
const app = read('app.js'), quiz = app.slice(app.indexOf('function pQuiz()'), app.indexOf('function answer('));
ok(quiz.length > 1000 && !/syl/.test(quiz), 'pQuiz (spell / dictation prompts) has no .syl');
ok(/class="w en say syl">\$\{esc\(w\.w\)\}/.test(app) && /class="w en say syl">\$\{esc\(p\.p\)\}/.test(app) && /<span class="w en say syl">\$\{esc\(en\)\}/.test(app) && /<b class="syl">\$\{esc\(w\.w\)\}<\/b>/.test(app), 'word / phrase / textbook / root cards carry .syl');
const gj = read('gept/gept.js'), gq = gj.slice(gj.indexOf('function one()'), gj.indexOf('$(\'gp-wf\').innerHTML'));
ok(/<span class="syl">' \+ esc\(x\.w\)/.test(gj) && gq.length > 100 && !/syl/.test(gq), 'gept word list has .syl; dictation question screen does not');
ok(/\.sy\{[^}]*background-size:max\(5px,calc\(100% - 3px\)\) 3px/.test(read('style.css')) && /\.sy0\{/.test(read('style.css')) && /\.sy1\{/.test(read('style.css')), 'style.css: per-syllable line with a gap, two colours');
console.log('syllables: ' + n + ' passed, 0 failed');
