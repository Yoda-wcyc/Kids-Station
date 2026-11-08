/* 世界史漫畫 第 5 冊 革命與工業・第 4 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：法國大革命。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, path, txt, place, both, groundShadow } = K;
    const loaf = (x, y, r) => both(ell(x, y, r, r * .62, C.clay2), 'cm-warm') + path(`M${x - r * .5} ${y - r * .2} L${x - r * .2} ${y - r * .45} M${x - r * .1} ${y - r * .1} L${x + r * .25} ${y - r * .45}`, 'none') + rect(x - r * .5, y - r * .32, r * .3, 4, C.clay3, 2) + rect(x - r * .05, y - r * .36, r * .3, 4, C.clay3, 2) + rect(x + r * .35, y - r * .3, r * .25, 4, C.clay3, 2);
    root.ComicArt.extend({
      scenes: {
        // 辦桌：紅白條紋棚子＋圓桌（桌子用 props 擺）
        v5e4_banquet(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          for (let x = 0; x < w; x += 80) s += path(`M${x} 0 L${x + 40} 0 L${x + 40} ${h * .16} Q${x + 20} ${h * .2} ${x} ${h * .16}Z`, C.red) + path(`M${x + 40} 0 L${x + 80} 0 L${x + 80} ${h * .16} Q${x + 60} ${h * .2} ${x + 40} ${h * .16}Z`, C.cream);
          s += rect(0, h * .6, w, h * .4, C.basalt3) + rect(0, h * .6, w, 6, 'rgba(21,23,20,.15)');
          return { bg: s };
        },
        // 三個等級：一條長條，教士和貴族只占最多大約 5%
        v5e4_estates(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const y = h * .5, x0 = 30, W = w - 60;
          s += rect(x0, y, W * .05, 70, C.purple) + rect(x0 + W * .05, y, W * .95, 70, C.g5);
          s += txt(x0, y - 16, '教士＋貴族：最多大約 5%', 20, C.purple, { a: 'start' }) + txt(x0 + W * .55, y + 46, '第三等級：其他所有人', 22, C.cream);
          s += rect(x0, y + 110, W, 120, C.cream, 8) + txt(x0 + 16, y + 150, '三級會議：每個等級各 1 票', 21, C.ink, { a: 'start' }) + txt(x0 + 16, y + 186, '→ 教士和貴族加起來 2 票', 21, C.red, { a: 'start' }) + txt(x0 + 16, y + 216, '→ 第三等級只有 1 票', 21, C.red, { a: 'start' });
          return { bg: s };
        },
        // 《人權宣言》像兩塊石板（只畫樣子，字是示意）
        v5e4_decl(w, h) {
          let s = rect(0, 0, w, h, C.g9);
          [w * .27, w * .73].forEach(cx => {
            s += both(path(`M${cx - 70} ${h * .78} L${cx - 70} ${h * .36} Q${cx - 70} ${h * .27} ${cx} ${h * .27} Q${cx + 70} ${h * .27} ${cx + 70} ${h * .36} L${cx + 70} ${h * .78}Z`, C.cream));
            for (let i = 0; i < 12; i++) s += rect(cx - 52, h * .37 + i * 22, i % 4 === 3 ? 60 : 104, 4, C.paper3);
          });
          return { bg: s };
        }
      },
      props: {
        // 辦桌的圓桌：bad＝小孩桌（只有一盤麵包）
        v5e4_round: x => {
          let s = groundShadow(0, 4, 150, 14) + rect(-8, -60, 16, 60, C.wood) + both(ell(0, -64, 150, 34, C.red)) + ell(0, -70, 136, 26, '#E85A4F');
          if (x.poor) s += ell(0, -74, 40, 12, C.cream) + loaf(0, -82, 22);
          else s += ell(-60, -74, 40, 12, C.cream) + path('M-90 -80 Q-60 -110 -30 -80 Q-60 -70 -90 -80Z', C.red) + ell(30, -76, 34, 10, C.cream) + circ(30, -82, 14, C.gold) + ell(90, -72, 30, 9, C.cream) + circ(84, -78, 8, C.g5) + circ(96, -78, 8, C.g5);
          return place(x, s);
        },
        // 一顆圓麵包
        v5e4_bread: x => place(x, groundShadow(0, 2, 40, 5) + loaf(0, -24, 40)),
        // 巴士底監獄（簡化：深色石牆＋圓塔）
        v5e4_bastille: x => {
          let s = groundShadow(0, 4, 300, 14);
          [-230, -80, 80, 230].forEach(dx => { s += both(rect(dx - 50, -330, 100, 330, C.basalt3)) + rect(dx - 56, -350, 112, 24, C.basalt3); for (let i = 0; i < 3; i++) s += rect(dx - 46 + i * 36, -372, 20, 24, C.basalt3); s += rect(dx - 6, -260, 12, 30, C.ink); });
          s += rect(-180, -290, 360, 290, C.basalt2) + rect(-40, -120, 80, 120, C.ink);
          return place(x, s);
        }
      },
      icons: {
        v5e4_bread() { return rect(0, 0, 120, 90, C.g3) + loaf(60, 52, 36); }
      },
      cast: {
        v5e4_mom: { name: '媽媽', skin: 'skin', top: 'red', bottom: 'g9', leg: 'g9', shoe: 'ink', hair: 'long', r: 20, k: 1.08 },
        v5e4_pierre: { name: '皮耶（虛構）', skin: 'skin', top: 'cream', bottom: 'blue', leg: 'skin', shoe: 'wood', hair: 'curly', hairC: 'gold', hat: 'beret', hatC: 'cream', r: 22, k: .95 },
        v5e4_baker: { name: '麵包師傅', skin: 'skin', top: 'cream', bottom: 'g9', leg: 'g9', shoe: 'wood', hair: 'man', hat: 'softCap', hatC: 'cream', beard: 1, r: 19, k: 1.16 },
        v5e4_woman: { name: '市場的婦女', skin: 'skin', robe: 'clay2', trim: 'cream', hair: 'bun', hairC: 'wood', hat: 'band', hatC: 'red', r: 19, k: 1.08 },
        v5e4_man: { name: '巴黎的工人', skin: 'skinB', top: 'g5', bottom: 'wood', leg: 'wood', shoe: 'ink', hair: 'man', hat: 'cone', hatC: 'red', r: 19, k: 1.14 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v5e4 = {
    id: 'v5e4', vol: '第 5 冊 革命與工業', volNo: 5, ep: 4, title: '巴黎的麵包和人權', next: '甘蔗田裡的自由',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！這次小孩桌也分到龍蝦了——是大家好好商量來的。',
    note: '阿凱、小禾、媽媽、皮耶、麵包師傅和巴黎的群眾是虛構的角色。巴士底監獄、麵包店和《人權宣言》石板都是想像圖（石板的樣子參考當年的畫，上面的字只是示意）。攻下巴士底的人為什麼去、想要什麼，歷史學家有不同看法；恐怖統治的經過很複雜，這裡只講它帶來的影響。',
    curriculum: '國中社會會再學到：法國大革命',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'basalt3', near: 'g5' },
      back: [
        { k: 'v5e4_bastille', x: 620, y: 900, s: .45 },
        { k: 'v5e4_bread', x: 140, y: 960, s: 1.4 },
        { k: 'flag', x: 90, y: 880, H: 200, f: 'blue' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'v5e4_banquet', shot: '中景：辦桌，大人桌滿滿是菜，小孩桌只有一盤麵包',
          back: [{ k: 'v5e4_round', x: 220, y: 300 }, { k: 'v5e4_round', x: 600, y: 300, poor: 1 }],
          actors: [
            { c: 'kai', x: 500, y: 334, s: 1, pose: 'fists', expr: 'mad', look: -.6 },
            { c: 'he', x: 700, y: 330, s: 1, pose: 'eat', expr: 'chew', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '大人桌有龍蝦，\n我們只有麵包？！', x: 220, y: 70, w: 260, fs: 24, tail: [492, 150] },
            { t: '麵包\n也不錯啊。', x: 600, y: 40, w: 160, fs: 23, tail: [690, 150] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'v5e4_banquet', shot: '大格：阿凱站上椅子號召小孩去搶龍蝦，場面一團亂，媽媽大喊',
          back: [{ k: 'v5e4_round', x: 360, y: 640 }],
          props: [{ k: 'crate', x: 140, y: 560, f: 'red', s: .9 }],
          actors: [
            { c: 'kai', x: 140, y: 504, s: 1.2, pose: 'raise', expr: 'yell', look: .4, noShadow: true },
            { c: 'v5e4_mom', x: 430, y: 660, s: 1.05, pose: 'shout', expr: 'shout', flip: 1, look: .5 }
          ],
          bubbles: [
            { t: '小孩桌的\n衝啊——！\n搶龍蝦！', x: 14, y: 30, w: 210, kind: 'shout', fs: 25, tail: [140, 270] },
            { t: '陳以凱！！\n你給我下來！', x: 250, y: 160, w: 260, kind: 'shout', fs: 25, tail: [420, 440] }
          ],
          sfx: [{ t: '哐啷！', x: 220, y: 380, fs: 54, rot: -10 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1789 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1789',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥，先去\n冷靜一下！\n西元 1789！', x: 18, y: 410, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#D9D2BC', sun: [.82, .12], hz: .52, far: false, ground: 'paper3', near: 'basalt3' }, shot: '滿版遠景：巴黎的街上，麵包店前排了好長的隊伍',
          back: [
            { k: 'house', x: 110, y: 540, W: 180, H: 260, roof: 'gable', roofC: 'basalt2', f: 'cream' },
            { k: 'house', x: 330, y: 540, W: 200, H: 240, roof: 'gable', roofC: 'basalt2', f: 'brick3' },
            { k: 'house', x: 600, y: 540, W: 240, H: 270, roof: 'gable', roofC: 'basalt2', f: 'cream' },
            { k: 'sign', t: '麵包店', x: 600, y: 470, W: 150, fs: 28 },
            { k: 'crowd', x: 380, y: 640, n: 14, W: 600, s: .85, op: .7 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 237 年前，巴黎（1789 年夏天）', en: 'PARIS · 1789', x: 0, y: 18 },
            { t: '又回到巴黎了！離上一話的沙龍，大約過了 40 年。這時候麵包越來越貴。', x: 0, y: 112, w: 450, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：巴黎。\n免費附贈翻譯功能。', x: 14, y: 716, w: 290, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好長的隊伍！', x: 330, y: 680, w: 200, tail: [462, 760] },
            { t: '大家都在\n排麵包？', x: 572, y: 704, w: 190, tail: [624, 794], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .8 }, shot: '中景：麵包店裡，阿凱聞到麵包香，皮耶說麵包又漲了',
          back: [{ k: 'sack', x: 700, y: 440 }, { k: 'sack', x: 740, y: 446, s: .8 }, { k: 'table', x: 430, y: 440, W: 220 }, { k: 'v5e4_bread', x: 400, y: 364 }, { k: 'v5e4_bread', x: 470, y: 364, s: .8 }],
          actors: [
            { c: 'kai', x: 200, y: 440, s: 1.05, pose: 'offer', expr: 'happy', look: .5 },
            { c: 'v5e4_pierre', x: 620, y: 452, s: 1.1, pose: 'arg', expr: 'worry', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '好香！給我一個，\n不，三個！', x: 20, y: 30, w: 250, tail: [204, 240] },
            { t: '麵包又漲價了，\n很多人快買不起，\n你還要三個？', x: 420, y: 18, w: 250, fs: 24, tail: [606, 250] }
          ],
          sfx: [{ t: '香～', x: 300, y: 160, fs: 44, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：麵包店的小孩皮耶',
          actors: [{ c: 'v5e4_pierre', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'smug', look: -.2 }],
          props: [{ k: 'v5e4_bread', x: 196, y: 470, s: .6 }],
          bubbles: [{ t: '我家開麵包店，\n我每天幫忙\n揉麵團！', x: 24, y: 70, w: 254, fs: 25, tail: [150, 300] }],
          tag: { t: '麵包店的小孩：皮耶（虛構）', left: 8 } },
        { scene: 'v5e4_estates', shot: '知識格：法國人分成三個等級',
          caption: [{ t: '法國人分成三個「等級」：\n教士、貴族，還有其他所有人。', x: 0, y: 14, w: 464 }],
          bubbles: [{ t: '人最多的，\n票反而最少？', x: 200, y: 130, w: 220, fs: 24 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#C9C2AE', sun: false, hz: .6, far: false, ground: 'paper3', near: 'basalt3' }, shot: '滿版：1789 年 7 月 14 日，群眾拿著旗子聚在巴士底監獄前（不畫打鬥）',
          back: [
            { k: 'v5e4_bastille', x: 400, y: 620, s: .95 },
            { k: 'crowd', x: 400, y: 700, n: 16, W: 760, s: .9, op: .75 },
            { k: 'flag', x: 180, y: 690, H: 220, f: 'blue' },
            { k: 'flag', x: 560, y: 690, H: 240, f: 'red' }
          ],
          actors: [
            { c: 'v5e4_man', x: 300, y: 740, s: .95, pose: 'raise', expr: 'shout', hold: 'flagS', look: .4 },
            { c: 'v5e4_woman', x: 500, y: 742, s: .95, pose: 'shout', expr: 'shout', flip: 1, look: .4 },
            { c: 'v5e4_pierre', x: 110, y: 1026, s: 1.3, pose: 'point', expr: 'worry', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'scared', expr: 'shock', sweat: 2, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [{ t: '1789 年 7 月 14 日，巴黎的群眾攻下巴士底監獄。\n其實裡面只關了 7 個人。', x: 16, y: 16, w: 560 }],
          bubbles: [
            { t: '巴士底是國王的監獄，\n大家說它代表\n國王的權力。', x: 14, y: 590, w: 280, fs: 23, tail: [130, 790] },
            { t: '好多人……\n好吵！', x: 290, y: 700, w: 170, fs: 24, tail: [452, 790] },
            { t: '我們站遠一點，\n別被擠到。', x: 560, y: 690, w: 210, fs: 23, tail: [650, 800] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v5e4_decl', shot: '細長格：《人權和公民權宣言》像兩塊石板',
          actors: [{ c: 'v5e4_pierre', x: 80, y: 1034, s: 1.1, pose: 'pointUp', expr: 'happy', look: .6 }],
          caption: [{ t: '1789 年 8 月 26 日，\n國民議會通過\n《人權和公民權宣言》。', x: 0, y: 14, w: 300 }],
          bubbles: [{ t: '第一條：人生來\n自由，權利平等！', x: 130, y: 880, w: 210, fs: 21, tail: [110, 900] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：人權宣言寫了什麼、漏了誰、麵包的事',
          caption: [{ t: '宣言之後呢？', x: 0, y: 16 }],
          cards: [
            { icon: 'scale', y: 80, t: '法律對每個人都要一樣，\n不管是保護還是處罰。' },
            { icon: 'question', y: 314, t: '可是宣言沒提到女性和奴隸。\n1791 年，古熱寫了\n《女權宣言》。' },
            { icon: 'v5e4_bread', y: 586, t: '1789 年 10 月，市場的婦女\n為了麵包走到凡爾賽宮，\n要國王搬回巴黎。' }
          ],
          bubbles: [{ t: '寫下人權，\n才只是開始。', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'flat', sceneOpt: { c: 'basalt2' }, shot: '矮寬格：後來的事，三個人表情沉重',
          actors: [
            { c: 'kai', x: 500, y: 390, s: .92, pose: 'think', expr: 'worry', look: -.6 },
            { c: 'he', x: 600, y: 392, s: .92, pose: 'hold', expr: 'think', hold: 'notebook', flip: 1, look: .4 },
            { c: 'v5e4_pierre', x: 720, y: 392, s: .95, pose: 'stand', expr: 'worry', flip: 1, look: .6 }
          ],
          caption: [{ t: '後來：1793～1794 年的「恐怖統治」，很多人被懷疑是敵人，被抓、被判死刑。1799 年拿破崙奪得政權，1804 年當上皇帝。', x: 14, y: 14, w: 420, dark: false }],
          bubbles: [
            { t: '一開始，大家都想\n變得更公平……', x: 450, y: 14, w: 250, fs: 22, tail: [700, 200] },
            { t: '改變太急、\n不肯商量，\n也會失控。', x: 270, y: 210, w: 180, fs: 22, tail: [586, 230] }
          ] },
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .75, window: [.62, .12, .2, .34], winC: '#E3C9A0' }, shot: '收尾大格：麵包店門口，皮耶送他們一個麵包',
          back: [{ k: 'car', x: 640, y: 600, s: .8 }],
          actors: [
            { c: 'v5e4_pierre', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'hold', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          props: [{ k: 'v5e4_bread', x: 190, y: 452, s: .7 }],
          bubbles: [
            { t: '這個麵包請你們，\n一人一半喔！', x: 14, y: 190, w: 230, fs: 22, tail: [110, 330] },
            { t: '回去不搶龍蝦了，\n跟大人好好講。', x: 252, y: 170, w: 210, fs: 22, tail: [284, 336] },
            { t: '要改，\n也要一起商量。', x: 462, y: 220, w: 194, fs: 22, tail: [478, 372] },
            { t: '嗶嗶——\n下一站，\n海地！', x: 630, y: 24, w: 146, kind: 'car', fs: 22, tail: [660, 480] }
          ],
          caption: [{ t: '下一話：甘蔗田裡的自由', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '三個等級', t: '法國人分成教士、貴族和其他所有人三個「等級」。教士和貴族加起來最多大約占 5%，卻有很多特權；三級會議每個等級各一票，人最多的第三等級反而吃虧。' },
      { h: '麵包越來越貴', t: '麵包是巴黎人每天的主食。1789 年麵包價格一直漲，很多人快買不起，大家越來越不滿。' },
      { h: '攻下巴士底', t: '1789 年 7 月 14 日，巴黎群眾攻下巴士底監獄，它被看成國王權力的象徵（裡面其實只關了 7 個人）。這一天的衝突有不少人傷亡。' },
      { h: '《人權和公民權宣言》', t: '1789 年 8 月 26 日通過：人生來自由，權利平等；法律對每個人都一樣。可是它沒有提到女性和奴隸，1791 年古熱寫了《女權宣言》。' },
      { h: '改變也會失控', t: '1793～1794 年的「恐怖統治」，很多人被懷疑是敵人而被判死刑；1799 年拿破崙奪得政權，1804 年當上皇帝。' }
    ],
    map: {
      bounds: { lon: [1.4, 3.3], lat: [48.5, 49.12] },
      cap: '紅點是巴黎，巴士底監獄在城的東邊。1789 年 10 月，市場的婦女從巴黎走到西南邊的凡爾賽宮，要國王回巴黎。（河道是簡化畫法。）',
      alt: '巴黎附近地圖：塞納河流過巴黎，西南邊是凡爾賽，紅色虛線是婦女走去凡爾賽的方向',
      rivers: ['seine'],
      routes: [{ pts: [[48.857, 2.352], [48.84, 2.25], [48.805, 2.13]] }],
      labels: [
        { t: '塞納河', lat: 48.96, lon: 1.9, size: 20, f: 'g7' },
        { t: '往凡爾賽', lat: 48.9, lon: 2.18, size: 18, f: 'red' }
      ],
      cities: [
        { n: '巴黎', lat: 48.857, lon: 2.352, main: 1, side: 'r' },
        { n: '凡爾賽', lat: 48.805, lon: 2.13, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：法國的《人權宣言》過了大約 160 年，聯合國才通過《世界人權宣言》。',
      items: [
        { y: 1789, when: '西元 1789 年', t: '攻下巴士底、\n《人權宣言》', side: 'd', main: 1, w: 180 },
        { y: 1793, when: '西元 1793～1794 年', t: '恐怖統治', side: 'u', w: 190 },
        { y: 1948, when: '西元 1948 年', t: '聯合國\n《世界人權宣言》', side: 'd', w: 190 },
        { y: 2026, when: '今天', t: '《人權宣言》\n滿 237 年', side: 'u', w: 160 }
      ]
    },
    sources: [
      'George Mason 大學 RRCHNM 與 CUNY《Liberty, Equality, Fraternity: Exploring the French Revolution》〈Social Causes of the Revolution〉（三個等級；教士和貴族最多占 5%；每個等級一票；麵包是城市的主食）',
      '同上〈Paris and the Politics of Rebellion〉（1789 年 7 月麵包漲價；7 月 14 日攻下巴士底，只放出 7 個人；10 月市場婦女為麵包走到凡爾賽，要國王回巴黎）',
      '同上〈The Enlightenment and Human Rights〉〈War, Terror, and Resistance〉〈The Napoleonic Experience〉（1789 年 8 月 26 日《人權宣言》沒提到女性和奴隸；1791 年 9 月古熱《女權宣言》；1793 年 9 月起恐怖統治、1794 年 7 月羅伯斯比爾倒台；1799 年 11 月 9 日霧月政變；1804 年 12 月 2 日稱帝；與 1948 年《世界人權宣言》第一條相似）',
      '耶魯大學 Avalon Project〈Declaration of the Rights of Man – 1789〉（第一條：人生來自由，權利平等；第六條：法律對所有人都一樣；8 月 26 日通過）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1789 年，巴黎人每天吃、卻越來越貴的主食是什麼？', opts: ['麵包', '白米飯', '馬鈴薯', '玉米餅'], a: 0, why: '麵包是巴黎人每天的主食，1789 年麵包一直漲價，很多人快買不起。' },
      { id: 'q2', d: 1, type: 'tf', q: '攻下巴士底監獄的那一天，是 1789 年 7 月 14 日。', a: true, why: '對！1789 年 7 月 14 日，巴黎群眾攻下巴士底監獄，它被看成國王權力的象徵。' },
      { id: 'q3', d: 2, type: 'mc', q: '法國的三個「等級」，第三等級指的是誰？', opts: ['教士和貴族以外的所有人', '只有住在巴黎城裡的貴族', '只有在教會裡工作的教士', '國王和王后一家人'], a: 0, why: '第一等級是教士、第二等級是貴族，其他所有人（農民、工人、商人……）都是第三等級。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['群眾攻下巴士底監獄', '通過《人權和公民權宣言》', '恐怖統治', '拿破崙當上皇帝'], why: '攻下巴士底是 1789 年 7 月；《人權宣言》是 1789 年 8 月；恐怖統治是 1793～1794 年；拿破崙稱帝是 1804 年。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「法國大革命寫下了人權，所以後來的每一步都很公平，大家都過得很好。」根據這一話，哪個說法最正確？', opts: ['不對，後來有恐怖統治，改變也會失控', '對，宣言通過以後，就再也沒有任何衝突了', '對，宣言把女性和奴隸的權利都寫進去', '不對，法國大革命根本沒有寫下人權'], a: 0, why: '《人權宣言》寫下了人生來自由、權利平等，但沒提到女性和奴隸；後來又有恐怖統治，很多人被懷疑是敵人。改變太急、不肯商量，也會失控。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
