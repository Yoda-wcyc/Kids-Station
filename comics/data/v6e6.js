/* 世界史漫畫 第 6 冊 帝國與兩次世界大戰・第 6 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：第二次世界大戰。格式：comics/CONTRACT.md
   適齡：不畫戰場、武器、傷亡；大屠殺只用鞋子和燭光表示；原子彈只畫今天保留下來的原爆圓頂。 */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, cap } = K;
    const GRAY = '#B8B6AC';
    const stroke = (d, c, w) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
    A.extend({
      cast: {
        v6e6_aming: { name: '阿明（虛構）', skin: 'skin', top: 'cream', bottom: 'g9', leg: 'skin', shoe: 'wood', hair: 'short', r: 22, k: .92 },
        v6e6_ama: { name: '阿嬤', skin: 'skin', top: 'red', bottom: 'g9', leg: 'g9', shoe: 'wood', hair: 'bun', hairC: GRAY, r: 20, k: 1.0 },
        v6e6_uncle: { name: '小鎮的大人', skin: 'skin', top: 'paper3', bottom: 'wood', leg: 'wood', shoe: 'wood', hair: 'short', hairC: GRAY, r: 19, k: 1.12 },
        v6e6_auntie: { name: '小鎮的大人', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'g9', shoe: 'ink', hair: 'bun', r: 19, k: 1.06 }
      },
      holds: {
        v6e6_photoH: () => rect(-18, -26, 36, 28, C.cream, 2) + rect(-14, -22, 28, 20, '#B9AE93') + circ(0, -15, 4, '#8C8270') + path('M-7 -2 Q-7 -10 0 -10 Q7 -10 7 -2Z', '#8C8270')
      },
      props: {
        // 老收音機
        v6e6_radio: x => K.place(x, both(rect(-60, -80, 120, 80, C.wood, 10), 'cm-warm') + circ(-22, -40, 24, C.ink) + circ(-22, -40, 16, '#4A3A2A') + rect(14, -64, 34, 18, C.cream, 3) + circ(24, -24, 7, C.gold) + circ(42, -24, 7, C.gold)),
        // 桌子上的收音機
        v6e6_table: x => K.place(x, rect(-90, -76, 180, 12, C.wood, 3) + rect(-80, -64, 10, 64, C.wood) + rect(70, -64, 10, 64, C.wood)),
        // 一雙鞋（只有鞋子，代表一個人）
        v6e6_shoes: x => K.place(x, both(path('M-58 0 L-58 -22 Q-56 -36 -40 -36 L-30 -36 Q-26 -20 -6 -16 Q4 -14 6 0Z', x.f || '#6B4A32'), 'cm-warm') + both(path('M2 0 L2 -20 Q4 -34 20 -34 L30 -34 Q34 -18 52 -14 Q62 -12 62 0Z', x.f || '#6B4A32'), 'cm-warm') + rect(-58, -4, 64, 4, C.ink) + rect(2, -4, 60, 4, C.ink)),
        // 原爆圓頂（今天保留下來的樣子，簡化）
        v6e6_dome: x => K.place(x, both(rect(-150, -110, 300, 110, C.brick3)) + [-120, -80, -40, 40, 80, 120].map(cx => rect(cx - 12, -90, 24, 36, '#4A4440', 2)).join('') + both(rect(-44, -190, 88, 80, C.brick3))
          + [-24, 0, 24].map(cx => rect(cx - 7, -176, 14, 30, '#4A4440', 2)).join('') + stroke('M-46 -190 Q-46 -270 0 -272 Q46 -270 46 -190', '#3A3F42', 5) + stroke('M-24 -194 Q-20 -262 0 -270 Q20 -262 24 -194', '#3A3F42', 4) + stroke('M0 -272 L0 -190', '#3A3F42', 4)),
        // 一排旗子（簡化的色塊，不代表特定國家）
        v6e6_flags: x => { let s = ''; const cs = [C.red, C.blue, C.gold, C.g7, C.cream, C.purple]; for (let i = 0; i < (x.n || 6); i++) s += rect(i * 60 - 4, -160, 4, 160, C.wood) + rect(i * 60, -158, 44, 28, cs[i % cs.length], 2); return K.place(x, s); },
        // 紙張和筆（簽字）
        v6e6_paper: x => K.place(x, both(rect(-60, -10, 120, 10, C.wood, 2)) + rect(-50, -16, 70, 8, C.cream, 1) + cap(30, -14, 54, -28, 3, C.ink))
      },
      scenes: {
        // 老家的倉庫
        v6e6_attic(w, h) {
          let s = rect(0, 0, w, h * .76, C.brick3) + rect(0, h * .76, w, h * .24, C.wood) + rect(0, h * .76, w, 6, 'rgba(21,23,20,.2)');
          for (let x = 0; x < w; x += 90) s += rect(x, 0, 8, h * .76, 'rgba(110,80,40,.18)');
          s += rect(w * .44, h * .1, w * .12, h * .3, C.gold, 3, 'opacity=".6"');
          return { bg: s };
        },
        // 老家門口：紅磚牆
        v6e6_home(w, h) {
          let s = rect(0, 0, w, h, C.sky) + rect(0, h * .2, w, h * .38, '#B8553D') + rect(0, h * .2, w, 14, C.g9);
          for (let j = 0; j < 8; j++) for (let x = (j % 2) * 30; x < w; x += 60) s += rect(x, h * .22 + j * h * .045, 56, h * .04, '#A74A34', 1);
          s += rect(w * .62, h * .3, w * .2, h * .28, C.wood, 4) + rect(w * .71, h * .3, 4, h * .28, C.ink);
          s += rect(0, h * .58, w, h * .42, C.paper3);
          return { bg: s };
        },
        // 1945 年臺灣小鎮的亭仔腳（騎樓）
        v6e6_town(w, h) {
          let s = rect(0, 0, w, h, C.sky) + both(rect(0, h * .14, w, h * .46, C.brick3)) + rect(0, h * .14, w, 18, C.cream);
          for (let i = 0; i < 5; i++) s += path(`M${i * w / 5 + 16} ${h * .6} L${i * w / 5 + 16} ${h * .34} Q${i * w / 5 + w / 10} ${h * .24} ${(i + 1) * w / 5 - 16} ${h * .34} L${(i + 1) * w / 5 - 16} ${h * .6}Z`, '#5A4E44', 'opacity=".55"') + rect(i * w / 5 + 30, h * .19, w / 5 - 60, h * .06, C.g7, 2);
          s += rect(0, h * .6, w, h * .4, C.paper3) + rect(0, h * .6, w, 8, 'rgba(21,23,20,.14)');
          return { bg: s };
        },
        // 廣島：河邊的原爆圓頂（今天）
        v6e6_river(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .8, h * .16, 120, 'url(#cm-sun)');
          s += rect(0, h * .6, w, h * .1, C.g3) + rect(0, h * .7, w, h * .3, C.g5);
          for (let i = 0; i < 8; i++) s += rect((i * 97) % w, h * (.74 + (i % 4) * .06), 50, 3, C.g2, 2, 'opacity=".6"');
          return { bg: s };
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v6e6 = {
    id: 'v6e6', vol: '第 6 冊 帝國與兩次世界大戰', volNo: 6, ep: 6, title: '戰爭結束的那一天', next: '一道牆，兩個世界',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿嬤說，阿祖的照片要好好收著。',
    note: '阿凱、小禾、阿嬤、小時候的阿祖阿明和小鎮的大人都是虛構的角色，阿明一家的故事也是虛構的。這一話沒有真實人物說話。小鎮、各地的畫面都是想像圖；原爆圓頂畫的是今天保留下來的樣子。猶太大屠殺用鞋子和燭光表示，參考美國大屠殺紀念館展出受害者鞋子的做法。臺灣在 1945 年 10 月 25 日以後的地位怎麼說（「光復」或「終戰」），臺灣社會和學者有不同看法，這一話兩種說法都寫。',
    curriculum: '國中社會會再學到：第二次世界大戰',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g7', near: 'paper3' },
      back: [
        { k: 'candle', glow: 52, x: 130, y: 980, s: 1.3 },
        { k: 'v6e6_radio', x: 660, y: 980, s: 1.2 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'v6e6_attic', shot: '中景：老家倉庫大掃除，阿凱從舊箱子裡翻出一張老照片',
          back: [{ k: 'crate', x: 380, y: 330, s: 1.1 }, { k: 'crate', x: 450, y: 330, s: 1 }, { k: 'shelf', x: 730, y: 300, W: 100, H: 180 }],
          actors: [
            { c: 'kai', x: 220, y: 330, s: 1, pose: 'hold', expr: 'awe', hold: 'v6e6_photoH', look: .3 },
            { c: 'he', x: 100, y: 332, s: .95, pose: 'hold', expr: 'think', hold: 'notebook', look: .6 },
            { c: 'v6e6_ama', x: 580, y: 330, s: .92, pose: 'point', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '這張照片\n好舊喔！', x: 230, y: 20, w: 170, fs: 23, tail: [232, 150] },
            { t: '背面寫著：\n1945.8.15', x: 14, y: 20, w: 190, fs: 22, tail: [100, 160] },
            { t: '那是你們阿祖，\n那年他十歲。', x: 430, y: 40, w: 230, fs: 22, tail: [574, 170] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'v6e6_home', shot: '大格：老家門口的搖搖車，這次換小禾投 10 元，阿凱抱著照片',
          back: [{ k: 'car', x: 150, y: 650, s: 1 }],
          actors: [
            { c: 'he', x: 330, y: 660, s: 1, pose: 'offer', expr: 'calm', hold: 'coin', flip: 1, look: .5 },
            { c: 'kai', x: 460, y: 650, s: 1.1, pose: 'hold', expr: 'worry', hold: 'v6e6_photoH', flip: 1, look: .5 }
          ],
          bubbles: [
            { t: '這次我來投。\n去看阿祖的那一天。', x: 14, y: 240, w: 270, fs: 22, tail: [320, 470] },
            { t: '照片\n要拿好……', x: 330, y: 300, w: 170, fs: 23, tail: [452, 450] }
          ],
          sfx: [{ t: '叮！', x: 40, y: 430, fs: 54, rot: -10 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1945 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1945',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '停在 1945……\n照片上那一年。', x: 18, y: 436, w: 206, fs: 22, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v6e6_town', shot: '滿版：1945 年臺灣小鎮的騎樓下，大人小孩圍著一台收音機，安安靜靜地聽',
          back: [
            { k: 'v6e6_table', x: 420, y: 700, s: 1 },
            { k: 'v6e6_radio', x: 420, y: 624, s: .9 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v6e6_uncle', x: 260, y: 720, s: .9, pose: 'think', expr: 'worry', look: .5 },
            { c: 'v6e6_auntie', x: 600, y: 720, s: .9, pose: 'think', expr: 'worry', flip: 1, look: .5 },
            { c: 'v6e6_aming', x: 690, y: 740, s: .85, pose: 'stand', expr: 'worry', flip: 1, look: .5 },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'hold', expr: 'awe', hold: 'v6e6_photoH', look: .4 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: .6 }
          ],
          caption: [
            { t: '1945 年 8 月 15 日，臺灣的一個小鎮', en: 'TAIWAN · 15 AUG 1945', x: 0, y: 18 },
            { t: '那時臺灣還在日本統治下。收音機傳來日本天皇的廣播：日本接受同盟國要它投降的條件。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：1945 年\n的臺灣。免費附贈翻譯。', x: 14, y: 716, w: 330, kind: 'car', tail: [150, 862], fs: 22 },
            { t: '……戰爭\n結束了。', x: 60, y: 450, w: 180, fs: 24, tail: [258, 540] },
            { t: '是照片上\n的男生！', x: 640, y: 640, w: 140, tail: [624, 820], fs: 22 },
            { t: '以後會\n怎麼樣呢？', x: 560, y: 380, w: 180, fs: 23, tail: [600, 540] }
          ] }
      ] },
      { layout: 'duo', panels: [
        { scene: 'v6e6_town', shot: '中景：阿明跟兄妹說他家的事',
          actors: [
            { c: 'v6e6_aming', x: 560, y: 490, s: 1.15, pose: 'think', expr: 'worry', flip: 1, look: .6 },
            { c: 'kai', x: 160, y: 490, s: 1.05, pose: 'hold', expr: 'shock', hold: 'v6e6_photoH', look: .5 },
            { c: 'he', x: 290, y: 494, s: 1, pose: 'scared', expr: 'worry', look: .5 }
          ],
          bubbles: [
            { t: '我叫阿明。我爸爸\n被派去南洋當兵，\n還沒回來……', x: 450, y: 20, w: 300, fs: 23, tail: [556, 236] },
            { t: '你就是……\n我們的阿祖！', x: 20, y: 30, w: 220, fs: 23, tail: [168, 258] },
            { t: '（小聲）哥，\n別亂講啦！', x: 250, y: 140, w: 180, fs: 21, tail: [292, 290] }
          ],
          tag: { t: '小時候的阿祖：阿明（虛構）', left: 8, top: 478 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：第二次世界大戰怎麼打起來',
          caption: [{ t: '第二次世界大戰：打遍歐洲、亞洲、非洲和太平洋', x: 0, y: 14 }],
          cards: [
            { icon: 'people', y: 80, x: 16, w: 240, t: '1937 年\n日本和中國\n全面開戰。' },
            { icon: 'question', y: 80, x: 270, w: 240, t: '1939 年 9 月\n德國攻打波蘭，\n歐洲開戰。' },
            { icon: 'ship', y: 80, x: 524, w: 240, t: '1941 年 12 月\n日本攻擊珍珠港，\n美國也加入。' }
          ],
          bubbles: [{ t: '打了這麼多年，這一天，\n全世界都在等。', x: 180, y: 400, w: 420, fs: 23 }] }
      ] },
      { layout: 'quad', panels: [
        { scene: 'land', sceneOpt: { sun: [.8, .16], hz: .62, far: 'g3', ground: 'paper3' }, shot: '小格：1945 年 5 月 8 日，歐洲城市的廣場上，大家揮旗慶祝',
          back: [{ k: 'v6e6_flags', x: 40, y: 330, n: 6, s: .9 }, { k: 'crowd', x: 190, y: 420, n: 8, W: 340, s: .9, op: .8 }],
          caption: [{ t: '5 月 8 日，歐洲', x: 0, y: 14 }, { t: '德國投降，歐洲的戰爭結束了。', x: 0, y: 440, w: 383, dark: false }],
          bubbles: [{ t: '嗶——帶你們看\n同一年的其他地方。', x: 100, y: 90, w: 270, kind: 'car', fs: 21 }] },
        { scene: 'flat', sceneOpt: { c: 'night' }, shot: '小格：黑暗裡，一雙鞋子和一盞燭光（不畫人）',
          back: [{ k: 'candle', glow: 52, x: 270, y: 330, s: 1 }, { k: 'v6e6_shoes', x: 140, y: 330, s: 1 }, { k: 'v6e6_shoes', x: 160, y: 400, s: .7, f: '#3A3F42' }],
          caption: [
            { t: '記住：猶太大屠殺', x: 0, y: 14 },
            { t: '納粹德國有計畫地迫害、殺害了大約六百萬猶太人。', x: 0, y: 430, w: 383, dark: false }
          ],
          bubbles: [{ t: '每一雙鞋子，\n都是一個人。', x: 150, y: 90, w: 220, kind: 'think', fs: 22 }] },
        { scene: 'v6e6_river', shot: '小格：廣島河邊的原爆圓頂（今天保留下來的樣子）',
          back: [{ k: 'v6e6_dome', x: 200, y: 340, s: .8 }],
          caption: [
            { t: '8 月 6 日廣島、8 月 9 日長崎', x: 0, y: 14 },
            { t: '美國投下原子彈，城市受到很大的破壞。留下的「原爆圓頂」提醒大家和平。', x: 0, y: 390, w: 383, dark: false }
          ] },
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'wood', hz: .7 }, shot: '小格：舊金山會場，長桌上擺著憲章和筆，後面一排旗子',
          back: [{ k: 'v6e6_flags', x: 50, y: 290, n: 5, s: .8 }, { k: 'table', x: 190, y: 380, W: 300 }, { k: 'v6e6_paper', x: 190, y: 304, s: 1.2 }],
          caption: [
            { t: '6 月 26 日，舊金山', x: 0, y: 14 },
            { t: '50 國代表簽下《聯合國憲章》；10 月 24 日聯合國成立。', x: 0, y: 410, w: 383, dark: false }
          ],
          bubbles: [{ t: '大家想一起\n防止下一次大戰。', x: 120, y: 80, w: 240, kind: 'think', fs: 21 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'flat', sceneOpt: { c: 'g9' }, shot: '字卡格：戰爭正式結束，臺灣也改變了',
          caption: [{ t: '1945 年秋天', x: 0, y: 16 }],
          cards: [
            { icon: 'scrollI', y: 80, x: 20, w: 330, t: '9 月 2 日，日本在東京灣的\n軍艦上簽下投降書，\n第二次世界大戰結束。' },
            { icon: 'people', y: 80, x: 362, w: 400, t: '10 月 25 日，臺北舉行受降典禮，\n臺灣改由中華民國政府治理。\n這一天叫「光復」還是「終戰」，\n大家有不同的看法。' }
          ] },
        { scene: 'v6e6_home', sceneOpt: {}, shot: '收尾大格：傍晚回到老家門口，阿嬤接過照片，兄妹把它收好',
          back: [{ k: 'car', x: 660, y: 600, s: .7 }],
          actors: [
            { c: 'v6e6_ama', x: 110, y: 566, s: 1.15, pose: 'hold', expr: 'happy', hold: 'v6e6_photoH', look: .6 },
            { c: 'kai', x: 280, y: 570, s: 1.2, pose: 'think', expr: 'worry', flip: 1, look: .6 },
            { c: 'he', x: 450, y: 576, s: 1.15, pose: 'hold', expr: 'calm', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '後來，阿祖的\n爸爸有回家喔。', x: 14, y: 160, w: 230, fs: 22, tail: [110, 340] },
            { t: '太好了……\n可是很多人沒有。', x: 252, y: 150, w: 240, fs: 22, tail: [280, 330] },
            { t: '記住歷史，\n是為了不讓\n它再發生。', x: 470, y: 250, w: 160, fs: 21, tail: [452, 376] },

            { t: '嗶嗶——\n下一站，\n柏林圍牆！', x: 620, y: 24, w: 150, kind: 'car', fs: 22, tail: [650, 480] }
          ],
          caption: [{ t: '下一話：一道牆，兩個世界', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '打遍全世界的戰爭', t: '1937 年日本和中國全面開戰；1939 年 9 月德國攻打波蘭，歐洲開戰；1941 年 12 月日本攻擊美國的珍珠港，美國也加入。戰場遍布歐洲、亞洲、非洲和太平洋。' },
      { h: '猶太大屠殺', t: '1933 到 1945 年，納粹德國有計畫地迫害、殺害了大約六百萬歐洲猶太人，也迫害身心障礙者、羅姆人等很多人。博物館保存受害者留下的鞋子，提醒大家記住每一個人。' },
      { h: '原子彈', t: '1945 年 8 月 6 日廣島、8 月 9 日長崎，美國投下原子彈，城市受到很大的破壞。廣島的原爆圓頂保留下來，1996 年成為世界遺產，提醒大家和平。' },
      { h: '戰爭結束的那幾天', t: '5 月 8 日德國投降；8 月 15 日日本天皇在廣播裡宣布接受投降的條件；9 月 2 日日本在東京灣正式簽下投降書。' },
      { h: '聯合國與臺灣', t: '6 月 26 日，50 國在舊金山簽下《聯合國憲章》，10 月 24 日聯合國成立。10 月 25 日臺北舉行受降典禮，臺灣改由中華民國政府治理；這一天叫「光復」還是「終戰」，有不同看法。' }
    ],
    map: {
      bounds: { lon: [-130, 172], lat: [-6, 62] },

      taiwan: false,
      cap: '紅點是臺北。同一年，柏林（歐洲的戰爭結束）、廣島和長崎（原子彈）、東京（日本投降）、舊金山（聯合國憲章）都發生了大事。陸地和海岸是簡化畫法。',
      alt: '世界地圖：東亞的臺北是紅點，旁邊是日本的廣島、長崎和東京；歐洲標出柏林；美國西岸標出舊金山',
      labels: [
        { t: '太平洋', lat: 10.0, lon: -118.0, size: 20, f: 'cream' },
        { t: '大西洋', lat: 30.0, lon: -45.0, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '臺北', lat: 25.03, lon: 121.56, main: 1, side: 'l' },
        { n: '廣島、長崎', lat: 34.0, lon: 131.5, side: 'l', dy: -14 },
        { n: '東京', lat: 35.68, lon: 139.69, side: 'r' },
        { n: '柏林', lat: 52.52, lon: 13.4, side: 'r' },
        { n: '舊金山', lat: 37.77, lon: -122.42, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：戰爭結束到今天，已經八十多年。',
      items: [
        { y: 1937, when: '西元 1937 年', t: '日本和中國\n全面開戰', side: 'u', w: 160 },
        { y: 1945, when: '西元 1945 年', t: '第二次世界\n大戰結束', side: 'd', main: 1, w: 170 },
        { y: 1996, when: '西元 1996 年', t: '原爆圓頂\n成為世界遺產', side: 'u', w: 180 },
        { y: 2026, when: '今天', t: '我們還記得\n這一天', side: 'd', w: 160 }
      ]
    },
    sources: [
      '美國大屠殺紀念館 USHMM〈Introduction to the Holocaust〉（1933～1945；納粹德國有計畫地迫害、殺害六百萬歐洲猶太人；其他受迫害的群體）與新聞稿〈Major Gift Enables Museum to Launch Revitalization of Permanent Exhibition〉（常設展的代表展品之一是受害者的鞋子）',
      '美國國家二戰博物館 National WWII Museum〈What (and When) Is V-J Day?〉〈The Home Front: Selected Chronology〉〈The End of World War II 1945〉（8 月 6 日廣島、8 月 9 日長崎；8 月 15 日東京時間中午天皇廣播；9 月 2 日密蘇里號上簽降書；5 月 8 日德國投降；1941 年 12 月 7 日珍珠港）',
      '美國國家檔案館〈Surrender of Japan〉（1945 年 9 月 2 日在東京灣密蘇里號簽下投降書）',
      '廣島市政府〈The Story of the Atomic Bomb Dome〉與〈Atomic Bomb Dome Registered as World Heritage〉（原為廣島縣產業獎勵館；1945 年 8 月 6 日上午 8 點 15 分；1996 年 12 月列入世界遺產）',
      '聯合國〈History of the United Nations〉（1945 年 4 月 25 日～6 月 26 日舊金山會議、50 國；10 月 24 日聯合國成立）',
      '中央研究院臺灣史研究所〈戰後臺灣歷史年表〉1945 年 10 月 25 日條（薛化元撰：臺北公會堂受降典禮、臺灣由中華民國統治；「光復」與「終戰」的不同詮釋）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1945 年 10 月 24 日正式成立、希望防止下一次大戰的國際組織是什麼？', opts: ['聯合國', '國際聯盟', '紅十字會', '奧運會'], a: 0, why: '1945 年 6 月 26 日，50 國在舊金山簽下《聯合國憲章》，10 月 24 日聯合國正式成立。' },
      { id: 'q2', d: 1, type: 'tf', q: '1945 年 8 月 15 日，日本天皇在廣播裡宣布接受投降的條件。', a: true, why: '對！臺灣的收音機也傳來這段廣播；9 月 2 日日本才在東京灣正式簽下投降書。' },
      { id: 'q3', d: 2, type: 'mc', q: '博物館用一雙雙鞋子和燭光來談猶太大屠殺，最主要是為了什麼？', opts: ['讓大家記住受害的人，不讓歷史重演', '讓大家比較誰的鞋子比較好看', '因為那個時候的人每一個都很喜歡收集鞋子', '提醒大家晚上要記得點蠟燭'], a: 0, why: '每一雙鞋子都代表一個真實的人。記住他們，是為了不讓這樣的事再發生。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['德國攻打波蘭，歐洲開戰', '德國投降，歐洲的戰爭結束', '廣島被投下原子彈', '聯合國正式成立'], why: '1939 年 9 月德國攻打波蘭；1945 年 5 月 8 日德國投降；8 月 6 日廣島；10 月 24 日聯合國成立。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「戰爭已經結束八十年了，記不記得都沒差。」根據這一話，哪個說法最正確？', opts: ['不對，記住歷史，是為了不讓它再發生', '對，過去的事跟我們一點關係都沒有', '不對，要記住只是因為考試一定會考', '對，聯合國成立以後就不用再學歷史了'], a: 0, why: '記住戰爭帶來的傷害、記住受害的人，大家才會一起想辦法，不讓同樣的事再發生。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
