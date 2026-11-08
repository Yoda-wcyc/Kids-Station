/* 世界史漫畫 第 3 冊 中古世界・第 4 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：中古歐洲的莊園、封建與基督教會。格式：comics/CONTRACT.md
   宗教與戰爭：只講當時的人相信什麼、做了什麼，十字軍寫兩邊的看法，只講原因與影響；不畫宗教符號、不畫打仗。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, path, poly, txt, both, prop, place, groundShadow } = K;
    const fields = (y0, y1, w) => { let s = ''; const cs = [C.g5, C.gold, C.g3, '#B9B060', C.g6]; for (let i = 0; i < 9; i++) { const a = -w * .2 + i * w * .17, b = a + w * .17; s += poly(`${a},${y1} ${b},${y1} ${w * .5 + (b - w * .5) * .35},${y0} ${w * .5 + (a - w * .5) * .35},${y0}`, cs[i % cs.length]); } return s; };
    root.ComicArt.extend({
      scenes: {
        // 現代：阿嬤家的三合院
        v3e4_yard(w, h) {
          let s = rect(0, 0, w, h, C.sky) + rect(0, h * .2, w, h * .44, '#B5533C') + rect(0, h * .14, w, h * .08, C.g9);
          for (let r = 0; r < 6; r++) for (let c = 0; c < 9; c++) s += rect(((r % 2) * 20 + c * 48) % (w + 20) - 10, h * .24 + r * h * .065, 40, h * .05, '#A44A35', 2, 'opacity=".55"');
          s += rect(w * .62, h * .3, w * .22, h * .34, C.wood, 3) + rect(0, h * .64, w, h * .36, C.paper3) + rect(0, h * .64, w, 6, 'rgba(21,23,20,.12)');
          return { bg: s };
        },
        // 英格蘭的莊園：山丘上的城堡、一條一條的田、村子
        v3e4_manor(w, h) {
          const hz = h * .44;
          let s = rect(0, 0, w, h, C.sky) + circ(w * .82, h * .1, 200, 'url(#cm-sun)') + circ(w * .82, h * .1, 46, '#FFF8DC');
          s += path(`M0 ${hz} Q${w * .25} ${hz - 140} ${w * .5} ${hz - 120} T${w} ${hz - 40} L${w} ${hz + 10} L0 ${hz + 10}Z`, C.g5);
          s += prop({ k: 'castle', x: w * .68, y: hz - 100, W: 300, H: 210, f: 'paper3', roofC: 'g9' });
          s += rect(0, hz, w, h - hz, C.g3) + fields(hz + 10, h * .66, w);
          s += prop({ k: 'house', x: w * .14, y: hz + 60, W: 120, H: 70, roof: 'thatch' }) + prop({ k: 'house', x: w * .3, y: hz + 50, W: 100, H: 60, roof: 'thatch' }) + prop({ k: 'tower', x: w * .82, y: hz + 40, W: 50, H: 130, f: 'paper3', roof: 'cone', roofC: 'g9' });
          s += path(`M0 ${h * .66} Q${w * .5} ${h * .62} ${w} ${h * .66} L${w} ${h} L0 ${h}Z`, C.sand);
          return { bg: s };
        },
        // 修道院的抄寫室：尖拱窗、石牆
        v3e4_scrip(w, h) {
          let s = rect(0, 0, w, h, C.paper3);
          for (let r = 0; r < 14; r++) for (let c = 0; c < 4; c++) s += rect((r % 2) * 40 + c * 90 - 20, r * h * .05, 82, h * .045, C.brick3, 3, 'opacity=".6"');
          s += path(`M${w * .3} ${h * .5} L${w * .3} ${h * .22} Q${w * .5} ${h * .08} ${w * .7} ${h * .22} L${w * .7} ${h * .5}Z`, C.cream) + rect(w * .49, h * .14, 6, h * .36, C.paper3);
          s += rect(0, h * .72, w, h * .28, C.wood) + rect(0, h * .72, w, 6, 'rgba(21,23,20,.15)');
          return { bg: s };
        },
        // 十字軍：左邊是歐洲的田，右邊是耶路撒冷一帶（中間分開）
        v3e4_two(w, h) {
          const hz = h * .56;
          let s = rect(0, 0, w / 2, h, C.sky) + rect(0, hz, w / 2, h - hz, C.g3) + prop({ k: 'castle', x: w * .2, y: hz, W: 180, H: 130, f: 'paper3', roofC: 'g9' });
          s += rect(w / 2, 0, w / 2, h, '#E8D9B0') + rect(w / 2, hz, w / 2, h - hz, C.sand) + prop({ k: 'wall', x: w * .78, y: hz, W: 340, H: 70, f: 'brick3' }) + prop({ k: 'dome', x: w * .8, y: hz - 70, W: 110, H: 110, domeC: 'gold' }) + prop({ k: 'house', x: w * .64, y: hz - 70, W: 70, H: 50, roof: 'flat', roofC: 'brick2', f: 'brick3' });
          s += rect(w / 2 - 4, 0, 8, h, C.cream);
          return { bg: s };
        }
      },
      props: {
        // 家事分工表
        v3e4_chart: x => place(x, both(rect(-90, -150, 180, 150, C.cream, 4)) + rect(-90, -150, 180, 34, C.g7, 4) + txt(0, -125, '家事分工表', 22, C.cream) + txt(-76, -86, '小禾：曬衣服', 19, C.ink, { a: 'start' }) + txt(-76, -56, '阿凱：餵雞', 19, C.red, { a: 'start' }) + txt(-76, -26, '阿嬤：煮飯', 19, C.ink, { a: 'start' })),
        // 雞
        v3e4_hen: x => place(x, groundShadow(0, 2, 26, 4) + ell(0, -24, 26, 20, x.f ? C[x.f] : C.cream) + circ(20, -46, 11, x.f ? C[x.f] : C.cream) + path('M16 -58 q4 -8 8 0 q4 -8 8 0 l-4 6z', C.red) + poly('30,-46 40,-43 30,-40', C.gold) + circ(23, -48, 2, C.ink) + rect(-6, -6, 3, 8, C.gold) + rect(4, -6, 3, 8, C.gold)),
        // 乾草堆
        v3e4_hay: x => place(x, groundShadow(0, 3, 90, 10) + both(path('M-90 0 Q-96 -80 0 -96 Q96 -80 90 0Z', C.gold), 'cm-warm') + rect(-80, -40, 160, 4, '#B08D3A') + rect(-70, -66, 140, 4, '#B08D3A')),
        // 羊皮紙書：一頁寫好、一頁空白
        v3e4_codex: x => place(x, path('M0 -6 Q-34 -16 -68 -8 L-68 -86 Q-34 -94 0 -84Z', C.cream) + path('M0 -6 Q34 -16 68 -8 L68 -86 Q34 -94 0 -84Z', C.paper2) + rect(-58, -74, 46, 8, C.red, 2) + [0, 1, 2, 3, 4].map(i => rect(-58, -60 + i * 10, 46, 3, 'rgba(21,23,20,.35)')).join('') + rect(10, -74, 46, 3, 'rgba(21,23,20,.2)'))
      },
      cast: {
        v3e4_emma: { name: '艾瑪（虛構）', skin: 'skin', top: 'clay2', skirt: 'wood', hair: 'long', hairC: 'wood', hat: 'band', hatC: 'cream', r: 22, k: .94 },
        v3e4_gran: { name: '阿嬤', skin: 'skin', top: 'g5', bottom: 'g9', leg: 'g9', hair: 'bun', hairC: '#8E8E86', r: 20, k: 1.0 },
        v3e4_lord: { name: '領主', skin: 'skin', robe: 'red', trim: 'gold', hair: 'man', hairC: 'wood', beard: 1, r: 19, k: 1.18 },
        v3e4_knight: { name: '騎士', skin: 'skin', top: 'basalt3', bottom: 'g9', leg: 'g9', hair: 'man', hat: 'helmet', hatC: 'basalt3', r: 19, k: 1.16 },
        v3e4_monk: { name: '修士', skin: 'skin', robe: 'wood', trim: 'clay2', hair: 'bald', hat: 'hood', hatC: 'clay2', r: 19, k: 1.12 },
        v3e4_farmer: { name: '農民', skin: 'skin', top: 'clay3', bottom: 'wood', leg: 'wood', hair: 'man', hat: 'hood', hatC: 'g5', beard: 1, r: 19, k: 1.1 },
        v3e4_local: { name: '住在耶路撒冷的人', skin: 'skinB', robe: 'cream', trim: 'g7', hair: 'man', hat: 'turban', hatC: 'cream', beard: 1, r: 19, k: 1.12 },
        v3e4_pilgrim: { name: '出發的人', skin: 'skin', robe: 'g7', trim: 'cream', hair: 'man', hairC: 'wood', beard: 1, r: 19, k: 1.12 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v3e4 = {
    id: 'v3e4', vol: '第 3 冊 中古世界', volNo: 3, ep: 4, title: '城堡裡的一年', next: '馬背上的大帝國',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿嬤說這週的雞，阿凱一個人餵。',
    note: '阿凱、小禾、阿嬤、艾瑪、領主、騎士、修士和十字軍那一格的人物都是虛構的角色；這一話沒有真實人物說話。莊園、城堡、修道院都是想像圖。農民每個星期要替領主做幾天工，各地不一樣，這裡寫的是常見的「兩三天」。十字軍那一格只講當時兩邊的人怎麼想、帶來什麼影響，不代表哪一邊對。',
    curriculum: '國中社會會再學到：中古歐洲的莊園、封建與基督教會',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'g3' },
      back: [
        { k: 'castle', x: 140, y: 900, W: 240, H: 180, f: 'paper3', roofC: 'g9' },
        { k: 'v3e4_hay', x: 660, y: 960, s: 1.1 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'quad', panels: [
        { scene: 'v3e4_yard', shot: '中景：阿嬤家三合院的牆上貼著家事分工表',
          back: [{ k: 'v3e4_chart', x: 280, y: 270 }],
          actors: [
            { c: 'v3e4_gran', x: 300, y: 500, s: 1, pose: 'point', expr: 'happy', flip: 1, look: -.4 },
            { c: 'kai', x: 80, y: 500, s: .95, pose: 'scared', expr: 'shock', look: .6 }
          ],
          bubbles: [
            { t: '週末在阿嬤家，\n大家分工做家事！', x: 120, y: 14, w: 250, fs: 22, tail: [330, 290] },
            { t: '為什麼\n我是餵雞？！', x: 8, y: 196, w: 170, fs: 22, kind: 'shout', tail: [80, 300] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 474 } },
        { scene: 'v3e4_yard', shot: '中景：雞群追著阿凱跑',
          back: [{ k: 'v3e4_hen', x: 250, y: 470 }, { k: 'v3e4_hen', x: 320, y: 490, f: 'clay3' }, { k: 'v3e4_hen', x: 200, y: 495, f: 'gold' }],
          actors: [
            { c: 'kai', x: 90, y: 490, s: .95, pose: 'run', expr: 'yell', flip: 1, sweat: 2, look: .5 },
            { c: 'he', x: 320, y: 360, s: .7, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '雞在追我啦！', x: 10, y: 160, w: 200, fs: 22, kind: 'shout', tail: [80, 300] },
            { t: '大家都有\n工作啊。', x: 210, y: 40, w: 160, fs: 22, tail: [310, 220] }
          ],
          sfx: [{ t: '咯咯咯！', x: 170, y: 380, fs: 34, rot: -8 }] },
        { scene: 'v3e4_yard', shot: '中景：三合院角落的舊搖搖車，阿凱跳上去投幣',
          back: [{ k: 'car', x: 220, y: 470, s: .75 }],
          props: [{ k: 'coin', x: 300, y: 300, r: 20, rot: 12 }],
          actors: [{ c: 'kai', x: 210, y: 420, s: .85, pose: 'ride', expr: 'grin', noShadow: true, look: .4 }],
          bubbles: [{ t: '我去找\n不用餵雞的地方！', x: 14, y: 20, w: 240, fs: 22, tail: [200, 230] }],
          sfx: [{ t: '叮！', x: 300, y: 220, fs: 44, rot: 10 }] },
        { scene: 'coin', sceneOpt: { year: '1100', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1100',
          actors: [{ c: 'he', x: 300, y: 640, s: 1.2, pose: 'shout', expr: 'shock', noShadow: true, flip: 1, bust: 1 }],
          bubbles: [{ t: '哥！\n你逃不掉的啦！', x: 14, y: 418, w: 200, fs: 20, tail: [270, 450] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e4_manor', shot: '滿版遠景：山丘上的城堡、一條一條的田和村子',
          back: [
            { k: 'v3e4_hay', x: 640, y: 700, s: .8 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v3e4_farmer', x: 520, y: 690, s: .8, pose: 'carry', expr: 'calm', hold: 'sack' },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 900 年前，英格蘭的莊園', en: 'ENGLAND · c. AD 1100', x: 0, y: 18 },
            { t: '1066 年，從法國諾曼第來的威廉當上英格蘭國王。他把全國的土地都當成自己的，再分給跟隨他的貴族。', x: 0, y: 112, w: 480, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：英格蘭。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '真的城堡！', x: 348, y: 690, w: 180, tail: [462, 760] },
            { t: '田怎麼分成\n一條一條的？', x: 556, y: 700, w: 210, fs: 24, tail: [624, 792] }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: [.85, .2], hz: .5, far: 'g5', ground: 'gold' }, shot: '中景：收割的田裡，阿凱躺在乾草堆上偷懶',
          back: [{ k: 'v3e4_hay', x: 250, y: 420, s: 1.3 }],
          actors: [
            { c: 'he', x: 80, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 250, y: 300, s: 1, pose: 'sit', expr: 'happy', look: .4, noShadow: true },
            { c: 'v3e4_emma', x: 610, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '軟軟的，\n睡一下！', x: 270, y: 30, w: 180, tail: [262, 150] },
            { t: '起來！！今天要去\n領主的田收麥子！', x: 470, y: 26, w: 300, kind: 'shout', fs: 24, tail: [600, 250] }
          ],
          sfx: [{ t: '呼——', x: 60, y: 120, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：艾瑪抱著一束麥子自我介紹',
          actors: [{ c: 'v3e4_emma', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'smug', look: -.2 }],
          bubbles: [{ t: '我叫艾瑪！\n我家是莊園\n裡的農民。', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '莊園農民的女兒：艾瑪（虛構）', left: 8 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g5', ground: 'gold' }, shot: '中景：艾瑪扳著手指說農民要做的事',
          actors: [
            { c: 'kai', x: 90, y: 545, s: 1, pose: 'think', expr: 'worry', sweat: 1, look: .6 },
            { c: 'v3e4_emma', x: 330, y: 540, s: 1, pose: 'raise', expr: 'calm', flip: 1, look: -.2 }
          ],
          caption: [{ t: '農民種田、交一部分收成給領主；\n領主保護他們。農民不能隨便搬走。', x: 0, y: 14, w: 440 }],
          bubbles: [
            { t: '每個星期，要去\n領主的田做兩三天工，\n還要交十分之一給教會。', x: 150, y: 120, w: 306, fs: 21, tail: [330, 350] },
            { t: '比餵雞\n還累……', x: 8, y: 250, w: 150, fs: 22, tail: [86, 356] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e4_manor', shot: '滿版：莊園裡的人各有工作——領主、騎士、農民',
          back: [
            { k: 'horse', x: 640, y: 620, s: .8, saddle: 'red' },
            { k: 'v3e4_hay', x: 120, y: 660, s: .7 }
          ],
          actors: [
            { c: 'v3e4_lord', x: 300, y: 650, s: .85, pose: 'raise', expr: 'calm' },
            { c: 'v3e4_farmer', x: 440, y: 652, s: .85, pose: 'carry', expr: 'worry', hold: 'sack', flip: 1 },
            { c: 'v3e4_knight', x: 560, y: 650, s: .85, pose: 'hold', expr: 'calm', hold: 'flagS', flip: 1 },
            { c: 'v3e4_emma', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'awe', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'think', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '國王把土地分給貴族；\n貴族再分給騎士，騎士要替他打仗。', x: 16, y: 16, w: 470 },
            { t: '農民在領主的土地上工作、交收成，換來領主的保護。大家都綁在「土地」上。', x: 16, y: 128, w: 420, dark: false }
          ],
          bubbles: [
            { t: '每個人都有\n自己的工作！', x: 14, y: 640, w: 220, fs: 24, tail: [140, 790] },
            { t: '像阿嬤家的\n分工表！', x: 286, y: 650, w: 196, fs: 24, tail: [440, 772] },
            { t: '可是農民\n好像最辛苦……', x: 548, y: 640, w: 218, fs: 24, tail: [646, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v3e4_scrip', shot: '細長大格：修道院的抄寫室，修士一個字一個字抄書',
          back: [{ k: 'table', x: 200, y: 1030, W: 240 }, { k: 'v3e4_codex', x: 210, y: 954 }],
          actors: [
            { c: 'v3e4_monk', x: 110, y: 990, s: 1.3, pose: 'write', expr: 'calm', hold: 'brush', look: .4 },
            { c: 'kai', x: 290, y: 1034, s: 1.05, pose: 'think', expr: 'shock', flip: 1, sweat: 1 }
          ],
          caption: [{ t: '修道院：修士在抄寫室\n用手抄書，寫在動物皮\n做的「羊皮紙」上。', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '一頁一頁用手抄，\n還要畫上\n漂亮的圖。', x: 10, y: 400, w: 236, fs: 22, tail: [110, 790] },
            { t: '比小禾抄班刊\n還累！', x: 130, y: 580, w: 206, fs: 22, tail: [270, 820] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：末日審判書、羊皮紙、只有修道院做書',
          caption: [{ t: '寫下來、記下來', x: 0, y: 16 }],
          cards: [
            { icon: 'scrollI', y: 80, t: '1086 年，威廉國王派人\n調查全英格蘭的土地、人和\n牲畜，寫成《末日審判書》。' },
            { icon: 'question', y: 344, t: '為什麼要調查？\n大概跟收稅、打仗有關，\n不過當時的書沒有說清楚。' },
            { icon: 'star', y: 610, t: '那時候的書都用手抄，\n常常是修道院的修士做的，\n材料也貴，所以書很少。' }
          ],
          bubbles: [{ t: '原來國王\n也要「記帳」！', x: 34, y: 900, w: 354, fs: 25 }] }
      ] },
      { layout: 'duo', panels: [
        { scene: 'v3e4_two', shot: '左右對照：左邊是歐洲出發的人，右邊是住在耶路撒冷一帶的人',
          actors: [
            { c: 'v3e4_pilgrim', x: 120, y: 470, s: .95, pose: 'walk', expr: 'calm' },
            { c: 'v3e4_knight', x: 270, y: 474, s: .95, pose: 'hold', expr: 'calm', hold: 'flagS' },
            { c: 'v3e4_local', x: 640, y: 470, s: .95, pose: 'scared', expr: 'worry', flip: 1 }
          ],
          caption: [{ t: '1095 年，教宗號召歐洲人出發去奪取耶路撒冷，這就是「十字軍」。', x: 0, y: 14, w: 760 }],
          bubbles: [
            { t: '我們相信，\n這是去聖地的朝聖！', x: 120, y: 110, w: 250, fs: 22, tail: [270, 280] },
            { t: '這裡是我們的家，\n外地的軍隊打來了！', x: 420, y: 110, w: 280, fs: 22, tail: [636, 280] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .5, far: 'clay3', ground: 'gold', near: 'clay3' }, shot: '收尾大格：傍晚的莊園，準備出發',
          back: [
            { k: 'castle', x: 470, y: 250, W: 220, H: 150, f: 'paper3', roofC: 'g9' },
            { k: 'car', x: 680, y: 490, s: .8 }
          ],
          actors: [
            { c: 'v3e4_emma', x: 104, y: 470, s: 1.1, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 270, y: 474, s: 1.1, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 450, y: 478, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '1099 年，十字軍攻下耶路撒冷，很多人因此失去生命；1187 年，薩拉丁又收回這座城。兩邊打了將近兩百年，東方的香料、糖也更多傳進歐洲。', x: 0, y: 14, w: 600, dark: false },
            { t: '下一話：馬背上的大帝國', x: 288, y: 466 }
          ],
          bubbles: [
            { t: '兩邊的人，\n看法很不一樣。', x: 330, y: 132, w: 220, fs: 22, tail: [450, 300] },
            { t: '回去我自己\n認領餵雞！', x: 110, y: 132, w: 190, fs: 22, tail: [262, 290] },
            { t: '嗶嗶——\n下一站，\n蒙古！', x: 620, y: 140, w: 146, kind: 'car', fs: 22, tail: [690, 400] }
          ] }
      ] }
    ],
    recap: [
      { h: '封建和莊園', t: '1066 年威廉當上英格蘭國王，把土地分給貴族；貴族再把土地分給騎士，騎士要替他打仗。農民在莊園裡種田，換來領主的保護。' },
      { h: '農民的一週', t: '農民每個星期常常要到領主的田做兩三天工，收成時更多；還要交一部分收成給領主，交大約十分之一給教會。他們不能隨便離開莊園。' },
      { h: '修道院抄書', t: '那時候歐洲的書都用手抄，常常是修道院的修士在抄寫室做的：寫在羊、小牛等動物皮做的羊皮紙上，還要畫上圖案，所以書又貴又少。' },
      { h: '《末日審判書》', t: '1086 年，威廉國王派人調查全英格蘭的土地、人和牲畜，寫成兩大本書，現在保存在英國國家檔案館。' },
      { h: '十字軍', t: '1095 年教宗號召歐洲人去奪取耶路撒冷。出發的人相信是去聖地朝聖，住在那裡的人覺得是外地軍隊打進來。1099 年十字軍攻下耶路撒冷，1187 年薩拉丁又收回。' }
    ],
    map: {
      bounds: { lon: [-10, 52], lat: [29, 56] },
      taiwan: false,
      cap: '紅點是英格蘭的倫敦，這一話的莊園是想像在英格蘭的鄉下。紅色虛線是第一次十字軍大概走的路：從法國的克萊蒙出發，經過君士坦丁堡，到耶路撒冷。路線是簡化的畫法，河道、海岸是今天的樣子。臺灣在這張圖往東很遠很遠的地方。',
      alt: '歐洲和地中海東岸的地圖：英格蘭在左上（紅點倫敦），法國的克萊蒙在中間偏左，紅色虛線往東南經過君士坦丁堡到耶路撒冷',
      rivers: ['seine', 'rhine', 'danube'],
      routes: [
        { pts: [[45.78, 3.08], [47.5, 9], [48.2, 16.4], [44.8, 20.45], [42.7, 25], [41.01, 28.98], [39, 32.5], [37, 35.3], [36.2, 36.16], [33.5, 35.6], [31.78, 35.22]] }
      ],
      labels: [
        { t: '英格蘭', lat: 53.4, lon: -2.2, size: 20, f: 'wood' },
        { t: '法國', lat: 47.6, lon: 1.2, size: 22, f: 'wood' },
        { t: '地中海', lat: 34.5, lon: 18.5, size: 22, f: 'cream' }
      ],
      cities: [
        { n: '倫敦', lat: 51.5, lon: -0.13, main: 1, side: 'r' },
        { n: '克萊蒙', lat: 45.78, lon: 3.08, side: 'l', dy: 20 },
        { n: '君士坦丁堡', lat: 41.01, lon: 28.98, side: 'r', dy: -10 },
        { n: '耶路撒冷', lat: 31.78, lon: 35.22, side: 'l', dy: 20 }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的，只畫了大約 120 年：從威廉當上國王，到薩拉丁收回耶路撒冷。',
      items: [
        { y: 1066, when: '西元 1066 年', t: '威廉當上\n英格蘭國王', side: 'u', w: 140 },
        { y: 1095, when: '西元 1095 年', t: '教宗號召\n十字軍', side: 'd', w: 170 },
        { y: 1100, when: '約西元 1100 年', t: '莊園裡的\n一年', side: 'u', main: 1, w: 160 },
        { y: 1187, when: '西元 1187 年', t: '薩拉丁收回\n耶路撒冷', side: 'd', w: 180 }
      ]
    },
    sources: [
      '英國國家檔案館〈Domesday Book〉研究指南與教育資源（1085 年耶誕節威廉下令、1086 年調查；記錄土地、人、牲畜和價值；當時的資料沒有說清楚為什麼要做，大概跟收稅與防衛有關）',
      '世界歷史百科〈Feudalism〉（威廉把全英格蘭的土地當成自己的；土地換服務、騎士最典型；農民無償為他人工作、換取保護）、〈Serf〉（每週到領主的田做兩三天工、收成時更多；交十分之一給教會；通常不能離開莊園）',
      '蓋蒂博物館〈The Medieval Scriptorium〉〈About Illuminated Manuscripts〉與世界歷史百科〈Medieval Monastery〉（抄寫室是抄書、畫圖的地方；手抄本常由修道院的修士製作；羊皮紙用小牛、綿羊或山羊的皮做成）',
      '世界歷史百科〈First Crusade〉〈The Crusades: Causes & Goals〉〈Saladin〉〈The Crusades: Consequences & Effects〉（1095 年 11 月克萊蒙會議；出發的人被視為朝聖者；1099 年 7 月攻下耶路撒冷、許多穆斯林和猶太人喪命；1187 年薩拉丁收回；之後東西貿易增加，胡椒、肉桂、糖等傳進歐洲）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '在莊園裡，每個星期要去領主的田裡做工的是誰？', opts: ['農民', '國王', '修士', '教宗'], a: 0, why: '農民常常每星期要到領主的田做兩三天工，換來領主的保護。' },
      { id: 'q2', d: 1, type: 'tf', q: '那時候歐洲修道院的修士，用手一個字一個字抄書。', a: true, why: '對！修士在抄寫室把字一頁一頁抄在羊皮紙上，還要畫上圖案。' },
      { id: 'q3', d: 2, type: 'mc', q: '1086 年，英格蘭國王派人調查全國的土地、人和牲畜，寫成了哪一本書？', opts: ['《末日審判書》', '《夢溪筆談》', '《漢摩拉比法典》', '《金剛經》'], a: 0, why: '威廉國王派人到各地調查，寫成《末日審判書》，現在還保存在英國國家檔案館。' },
      { id: 'q4', d: 2, type: 'match', q: '把左右兩邊配起來。', pairs: [['國王', '把土地分給貴族'], ['騎士', '得到土地，要替領主打仗'], ['農民', '種田、交收成，換領主的保護'], ['修士', '在修道院用手抄書']], why: '封建時代的人都跟土地綁在一起：國王分地、騎士打仗、農民種田；修道院的修士負責抄書。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「十字軍這件事，歐洲人和住在耶路撒冷的人想法都一樣。」根據這一話，哪個說法最正確？', opts: ['不對，兩邊的人看法很不一樣', '對，大家都覺得是去觀光旅行', '對，耶路撒冷的人邀請他們來住', '不對，十字軍其實沒有離開歐洲'], a: 0, why: '出發的人相信是去聖地朝聖；住在那裡的人覺得是外地的軍隊打進來。同一件事，站的地方不同，看到的就不一樣。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
