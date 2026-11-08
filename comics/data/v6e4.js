/* 世界史漫畫 第 6 冊 帝國與兩次世界大戰・第 4 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：第一次世界大戰。格式：comics/CONTRACT.md
   適齡：不畫武器、不畫傷亡；主角只在休戰那一刻、在後方。 */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, cap } = K;
    const KHAKI = '#7A7650', GREY = '#6E7A72', MUD = '#5A4A3A', MUD2 = '#7A6450', FROST = '#E8ECE6';
    // 一長條沙包牆（壕溝的邊）
    const bags = (x0, y, W, s) => { let o = ''; for (let j = 0; j < 2; j++) for (let x = x0 + (j % 2) * 18 * s; x < x0 + W; x += 38 * s) o += both(ell(x, y - j * 14 * s, 20 * s, 9 * s, j ? '#B7A27E' : '#A08B68'), 'cm-warm'); return o; };
    A.extend({
      parts: {
        v6e4_capB: () => path('M-23 -6 Q-24 -28 0 -30 Q24 -28 23 -6Z', KHAKI) + path('M2 -8 L30 -6 Q28 0 2 -2Z', '#4E4B33'),   // 英軍的軟帽（簡化）
        v6e4_capG: () => path('M-22 -6 Q-22 -26 0 -27 Q22 -26 22 -6Z', GREY) + rect(-22, -12, 44, 6, C.red, 2)   // 德軍的圓帽（簡化）
      },
      cast: {
        v6e4_tommy: { name: '湯米（虛構）', skin: 'skin', top: KHAKI, bottom: KHAKI, leg: KHAKI, shoe: 'wood', hair: 'short', hairC: 'wood', hat: 'v6e4_capB', r: 20, k: 1.08 },
        v6e4_hans: { name: '漢斯（虛構）', skin: 'skin', top: GREY, bottom: GREY, leg: GREY, shoe: 'ink', hair: 'short', hairC: 'gold', hat: 'v6e4_capG', r: 20, k: 1.08 },
        v6e4_brit: { name: '英國士兵', skin: 'skin', top: KHAKI, bottom: KHAKI, leg: KHAKI, shoe: 'wood', hair: 'short', hat: 'v6e4_capB', acc: ['mustache'], r: 19, k: 1.12 },
        v6e4_germ: { name: '德國士兵', skin: 'skin', top: GREY, bottom: GREY, leg: GREY, shoe: 'ink', hair: 'short', hairC: 'wood', hat: 'v6e4_capG', beard: 1, r: 19, k: 1.12 },
        v6e4_eve: { name: '威廉・伊夫', real: 1, skin: 'skin', top: KHAKI, bottom: KHAKI, leg: KHAKI, shoe: 'wood', hair: 'short', hairC: 'wood', hat: 'v6e4_capB', r: 19, k: 1.12 }
      },
      props: {
        // 公園長椅（中間有一條粉筆線）
        v6e4_bench: x => K.place(x, rect(-200, -64, 400, 16, C.wood, 4) + rect(-200, -110, 400, 14, C.wood, 4) + rect(-186, -48, 14, 48, C.ink) + rect(172, -48, 14, 48, C.ink) + rect(-3, -66, 6, 20, C.cream)),
        // 插蠟燭的小聖誕樹
        v6e4_xtree: x => K.place(x, rect(-4, -20, 8, 20, C.wood) + poly('-34,-20 0,-96 34,-20', C.g7) + poly('-26,-50 0,-110 26,-50', C.g5) + [[-18, -30], [16, -34], [-8, -62], [10, -70], [0, -100]].map(([cx, cy]) => rect(cx - 2, cy - 12, 4, 12, C.cream) + circ(cx, cy - 16, 4, C.gold)).join('')),
        // 足球
        v6e4_ball: x => K.place(x, circ(0, -14, 14, C.cream) + circ(0, -14, 5, C.ink) + circ(-9, -22, 3, C.ink) + circ(9, -6, 3, C.ink)),
        // 沙包牆
        v6e4_bags: x => K.place(x, bags(-(x.W || 400) / 2, 0, x.W || 400, 1))
      },
      scenes: {
        // 平安夜的西線：月光、遠方的壕溝上插著小聖誕樹
        v6e4_eve(w, h) {
          let s = rect(0, 0, w, h, C.night);
          for (let i = 0; i < 50; i++) { const a = (i * 97) % w, b = (i * 53) % (h * .4); s += circ(a, b, 1 + (i % 3) * .6, C.cream, 'opacity=".8"'); }
          s += circ(w * .82, h * .1, 90, 'url(#cm-glow)') + circ(w * .82, h * .1, 26, C.cream);
          s += rect(0, h * .42, w, h * .2, '#3A3A34') + bags(0, h * .44, w, .7) + rect(0, h * .6, w, h * .4, MUD) + rect(0, h * .6, w, 8, 'rgba(0,0,0,.2)');
          for (let i = 0; i < 6; i++) s += ell(w * (.1 + i * .17), h * .52, 40, 6, FROST, 'opacity=".25"');
          return { bg: s };
        },
        // 壕溝裡（近景）：沙包牆、木板
        v6e4_trench(w, h) {
          let s = rect(0, 0, w, h * .3, '#B9C4C0') + rect(0, h * .3, w, h * .45, MUD2) + bags(0, h * .3, w, 1);
          for (let x = 20; x < w; x += 120) s += rect(x, h * .34, 12, h * .4, C.wood);
          s += rect(0, h * .75, w, h * .25, MUD) + rect(0, h * .75, w, 10, C.wood);
          return { bg: s };
        },
        // 聖誕節早上的無人地帶：結霜的地面，兩邊遠遠的壕溝
        v6e4_truce(w, h) {
          let s = rect(0, 0, w, h, '#D9DFDA') + circ(w * .2, h * .12, 150, 'url(#cm-sun)');
          s += rect(0, h * .34, w, h * .04, '#8A7A62') + bags(0, h * .345, w, .55) + rect(0, h * .37, w, h * .63, '#A9A08A');
          for (let i = 0; i < 18; i++) s += ell((i * 137) % w, h * (.42 + ((i * .29) % 1) * .5), 30 + (i % 4) * 12, 5, FROST, 'opacity=".6"');
          s += rect(0, h * .86, w, h * .14, '#8A7A62') + bags(0, h * .87, w, 1);
          return { bg: s };
        }
      },
      icons: {
        v6e4_chain() { return rect(0, 0, 120, 90, C.paper) + [18, 46, 74].map((x, i) => ell(x + 14, 45, 18, 11, 'none') + `<ellipse cx="${x + 14}" cy="45" rx="17" ry="10" fill="none" stroke="${[C.red, C.g7, C.blue][i]}" stroke-width="6"/>`).join(''); },
        v6e4_dove() { return rect(0, 0, 120, 90, C.g3) + path('M26 52 Q40 30 64 38 Q78 22 96 26 Q84 34 82 44 Q76 64 50 64 Q36 64 26 52Z', C.cream) + circ(86, 32, 3, C.ink) + poly('96,30 106,32 96,35', C.gold); }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v6e4 = {
    id: 'v6e4', vol: '第 6 冊 帝國與兩次世界大戰', volNo: 6, ep: 4, title: '壕溝裡的聖誕節', next: '走到海邊去曬鹽',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！兄妹和好了，拼圖也一起拼完了。',
    note: '阿凱、小禾、湯米、漢斯和其他士兵是虛構的角色；威廉・伊夫是真的人，他的話改編自他 1914 年 12 月 25 日的日記（英國國家陸軍博物館收藏），樣子是想像圖。聖誕節休戰不是整條戰線都有，各地情況不同；有沒有正式的足球比賽，史料說法不一，比較像是隨興踢球。漫畫故意不畫武器和傷亡，只畫休戰的那一刻。',
    curriculum: '國中社會會再學到：第一次世界大戰',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: '#5A4A3A', near: '#A9A08A' },
      back: [
        { k: 'v6e4_xtree', x: 140, y: 960, s: 1.4 },
        { k: 'candle', x: 680, y: 980, s: 1.2 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'land', sceneOpt: { sun: [.88, .2], hz: .55, far: 'g3', ground: 'g3', near: 'g5' }, shot: '中景：公園長椅上，兄妹背對背坐在粉筆線兩邊，誰也不理誰',
          back: [{ k: 'tree', x: 90, y: 200, H: 200 }, { k: 'tree', x: 720, y: 196, H: 180 }, { k: 'v6e4_bench', x: 400, y: 320, s: 1 }],
          actors: [
            { c: 'kai', x: 270, y: 300, s: .95, pose: 'sit', expr: 'mad', flip: 1, noShadow: true },
            { c: 'he', x: 530, y: 300, s: .95, pose: 'sit', expr: 'mad', noShadow: true }
          ],
          bubbles: [
            { t: '哼，是她先\n說我笨的。', x: 20, y: 30, w: 200, kind: 'think', fs: 23 },
            { t: '哼，是他先弄壞\n我的拼圖的。', x: 560, y: 30, w: 210, kind: 'think', fs: 23 }
          ],
          caption: [{ t: '兄妹冷戰第三天', x: 300, y: 14, w: 210 }],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g3', ground: 'paper3' }, shot: '大格：公園門口，兩個人同時伸手搶投幣孔，頭撞在一起',
          back: [{ k: 'tree', x: 460, y: 344, H: 220 }, { k: 'car', x: 200, y: 640, s: 1.05 }],
          actors: [
            { c: 'kai', x: 110, y: 660, s: 1.05, pose: 'push', expr: 'yell', look: .5, sweat: 1 },
            { c: 'he', x: 420, y: 664, s: 1, pose: 'push', expr: 'yell', flip: 1, look: .5 }
          ],
          bubbles: [
            { t: '走開，我先！', x: 14, y: 250, w: 200, kind: 'shout', fs: 24, tail: [136, 460] },
            { t: '明明是我！', x: 300, y: 270, w: 200, kind: 'shout', fs: 24, tail: [394, 486] }
          ],
          sfx: [{ t: '叩！', x: 220, y: 380, fs: 56, rot: -10 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1914 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1914',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '倒轉了！\n停在 1914！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v6e4_eve', shot: '滿版夜景：月光下，遠方的壕溝上插著點了蠟燭的小聖誕樹，傳來歌聲；兄妹和搖搖車在後方',
          back: [
            { k: 'v6e4_xtree', x: 150, y: 448, s: .5 }, { k: 'v6e4_xtree', x: 390, y: 446, s: .45 }, { k: 'v6e4_xtree', x: 620, y: 448, s: .5 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'scared', expr: 'awe', look: -.4 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          sfx: [{ t: '♪', x: 250, y: 380, fs: 48, rot: -10, c: '#C9A54A' }, { t: '♪', x: 520, y: 370, fs: 40, rot: 10, c: '#C9A54A' }],
          caption: [
            { t: '大約 112 年前，比利時伊普爾附近', en: 'NEAR YPRES · 24 DEC 1914', x: 0, y: 18 },
            { t: '第一次世界大戰的第一個冬天。英國和德國的士兵，各自躲在長長的壕溝裡。', x: 0, y: 112, w: 420, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：1914 年的\n聖誕夜。我們待在後方。', x: 14, y: 716, w: 320, kind: 'car', tail: [150, 862], fs: 23 },
            { t: '好冷……\n對面在唱歌？', x: 340, y: 640, w: 196, tail: [462, 770] },
            { t: '是聖誕歌！\n還有點蠟燭的\n小樹！', x: 566, y: 620, w: 200, tail: [614, 800], fs: 24 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v6e4_trench', shot: '中景：後方的壕溝邊，年輕的英國士兵湯米發現兩個小孩',
          actors: [
            { c: 'kai', x: 120, y: 450, s: 1, pose: 'scared', expr: 'shock', look: .6, sweat: 1 },
            { c: 'he', x: 230, y: 454, s: .95, pose: 'hold', expr: 'worry', hold: 'notebook', look: .6 },
            { c: 'v6e4_tommy', x: 600, y: 456, s: 1.05, pose: 'kneel', expr: 'worry', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '噓！小孩怎麼\n會跑來這裡？\n快待在後面！', x: 470, y: 30, w: 250, fs: 23, tail: [596, 280] },
            { t: '對、對不起！', x: 40, y: 120, w: 200, fs: 24, tail: [124, 250] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：湯米蹲著說自己的事',
          actors: [{ c: 'v6e4_tommy', x: 150, y: 548, s: 1.2, pose: 'think', expr: 'worry', look: -.2 }],
          bubbles: [{ t: '我叫湯米，十九歲。\n本來在家鄉的\n麵包店幫忙……', x: 14, y: 70, w: 274, fs: 23, tail: [150, 300] }],
          tag: { t: '英國士兵：湯米（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：戰爭怎麼開始的',
          caption: [{ t: '戰爭怎麼開始的？', x: 0, y: 14 }],
          cards: [
            { icon: 'v6e4_chain', y: 76, t: '1914 年 6 月 28 日，\n奧匈帝國的王儲\n在塞拉耶佛遇刺。' },
            { icon: 'people', y: 300, t: '國家之間結成同盟，\n一國宣戰、盟友跟著加入，\n很快變成兩大陣營。' }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v6e4_truce', shot: '滿版：聖誕節早上，兩邊的士兵走出壕溝，在中間握手、交換紀念品，遠處有人踢球',
          back: [
            { k: 'v6e4_ball', x: 640, y: 470, s: .8 },
            { k: 'crowd', x: 400, y: 450, n: 10, W: 640, s: .6, op: .45 },
            { k: 'car', x: 120, y: 1020, s: .9, rot: -4 }
          ],
          actors: [
            { c: 'v6e4_germ', x: 690, y: 500, s: .6, pose: 'run', expr: 'happy', flip: 1 },
            { c: 'v6e4_brit', x: 580, y: 500, s: .6, pose: 'run', expr: 'grin' },
            { c: 'v6e4_tommy', x: 300, y: 690, s: .95, pose: 'offer', expr: 'happy', look: .4 },
            { c: 'v6e4_hans', x: 480, y: 690, s: .95, pose: 'offer', expr: 'happy', flip: 1, look: .4 },
            { c: 'kai', x: 400, y: 1010, s: 1.15, pose: 'scared', expr: 'awe', look: -.4 },
            { c: 'he', x: 620, y: 1014, s: 1.12, pose: 'hold', expr: 'happy', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '1914 年 12 月 25 日早上', en: 'CHRISTMAS DAY · 1914', x: 0, y: 18 },
            { t: '西線有些地方的士兵，自己停火，走出壕溝，在兩邊中間見面。', x: 0, y: 112, w: 420, dark: false }
          ],
          bubbles: [
            { t: '聖誕快樂！\n交換紀念品吧！', x: 520, y: 520, w: 230, fs: 23, tail: [500, 560] },
            { t: '聖誕快樂！\n這顆鈕扣給你。', x: 40, y: 500, w: 220, fs: 23, tail: [290, 560] },
            { t: '他們昨天\n還是敵人耶……', x: 170, y: 760, w: 210, fs: 23, tail: [396, 820] },
            { t: '對面的人，\n也想回家過節。', x: 560, y: 740, w: 210, fs: 23, tail: [612, 830] }
          ],
          tag: { t: '湯米（左）和德國士兵漢斯（右）都是虛構的', left: 430, top: 200 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'flat', sceneOpt: { c: 'night' }, shot: '細長格：燭光下，步兵威廉・伊夫在寫日記',
          back: [{ k: 'candle', x: 250, y: 760, s: 1.1 }],
          actors: [{ c: 'v6e4_eve', x: 140, y: 860, s: 1.2, pose: 'write', expr: 'calm', look: .4 }],
          caption: [{ t: '1914 年 12 月 25 日\n威廉・伊夫的日記', x: 0, y: 14, w: 290 }],
          bubbles: [{ t: '今天一整天、\n一整晚，\n一槍都沒有開。', x: 20, y: 380, w: 290, fs: 25, tail: [150, 640] }],
          tag: { t: '伊夫的話：改編自他的日記', left: 8, top: 140 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：休戰之後',
          caption: [{ t: '休戰之後……', x: 0, y: 16 }],
          cards: [
            { icon: 'question', y: 80, t: '不是每個地方都停火。\n長官不准士兵跟對面來往，\n後來幾年，再也沒有\n這麼大的休戰。' },
            { icon: 'star', y: 380, t: '1918 年 11 月 11 日\n上午 11 點，\n戰爭終於停火。' },
            { icon: 'v6e4_dove', y: 640, t: '1920 年成立「國際聯盟」，\n希望國家用開會解決爭吵；\n可是美國一直沒有加入。' }
          ],
          bubbles: [{ t: '要有一個大家\n能坐下來談的地方。', x: 34, y: 916, w: 354, fs: 24 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v6e4_eve', shot: '矮寬格：聖誕夜晚上，湯米和兄妹說再見',
          back: [{ k: 'v6e4_xtree', x: 600, y: 180, s: .45 }],
          actors: [
            { c: 'v6e4_tommy', x: 140, y: 390, s: 1, pose: 'wave', expr: 'happy', look: .5 },
            { c: 'kai', x: 420, y: 392, s: .95, pose: 'wave', expr: 'worry', flip: 1, look: .6 },
            { c: 'he', x: 540, y: 394, s: .92, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '對面的漢斯說，\n他也有一個妹妹。', x: 190, y: 30, w: 270, fs: 23, tail: [150, 190] },
            { t: '希望你們\n都能回家。', x: 560, y: 60, w: 190, fs: 23, tail: [540, 210] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'g3', ground: 'g3', near: 'g5' }, shot: '收尾大格：回到公園長椅，粉筆線擦掉了，兄妹一起拼拼圖',
          back: [{ k: 'tree', x: 80, y: 330, H: 220 }, { k: 'v6e4_bench', x: 330, y: 560, s: 1.1 }, { k: 'car', x: 660, y: 600, s: .7 }],
          actors: [
            { c: 'kai', x: 250, y: 540, s: 1.1, pose: 'sit', expr: 'worry', noShadow: true, look: .5 },
            { c: 'he', x: 420, y: 540, s: 1.05, pose: 'sit', expr: 'happy', flip: 1, noShadow: true, look: .5 }
          ],
          bubbles: [
            { t: '對不起，\n拼圖是我弄壞的。', x: 14, y: 170, w: 240, fs: 23, tail: [240, 400] },
            { t: '我也不該\n說你笨。', x: 300, y: 160, w: 180, fs: 23, tail: [420, 400] },
            { t: '嗶嗶——\n下一站，\n印度！', x: 620, y: 24, w: 140, kind: 'car', fs: 22, tail: [650, 480] }
          ],
          caption: [{ t: '下一話：走到海邊去曬鹽', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '戰爭怎麼開始', t: '1914 年 6 月 28 日，奧匈帝國的王儲在塞拉耶佛遇刺；7 月 28 日奧匈帝國對塞爾維亞宣戰。國家之間有同盟，盟友一個拉一個，歐洲很快分成兩大陣營。' },
      { h: '壕溝戰', t: '在比利時和法國的「西線」，兩邊挖了長長的壕溝，士兵躲在裡面，冬天又濕又冷。' },
      { h: '1914 年的聖誕節休戰', t: '12 月 24、25 日，西線有些地方的士兵自己停火：點蠟燭、唱聖誕歌、互相問候、交換紀念品，有些人還一起踢球。不是每個地方都停火，長官也不准，後來幾年再也沒有這麼大的休戰。' },
      { h: '停火與國際聯盟', t: '1918 年 11 月 11 日上午 11 點，戰爭停火。1920 年 1 月 10 日成立國際聯盟，希望國家用開會解決爭吵，可是美國一直沒有加入。' }
    ],
    map: {
      bounds: { lon: [-6, 30], lat: [40, 56] },
      cap: '紅點是伊普爾（在比利時）。紅色虛線是大約的「西線」，從比利時海邊一路到瑞士邊界；塞拉耶佛在東南邊。路線是簡化畫法，國界沒有畫。',
      alt: '歐洲地圖：紅點伊普爾在比利時，紅色虛線西線往南穿過法國東北部；西邊是倫敦和巴黎，東邊是柏林、維也納，東南邊是塞拉耶佛',
      routes: [{ pts: [[51.15, 2.7], [50.85, 2.9], [50.3, 2.8], [49.6, 2.9], [49.4, 3.5], [49.2, 4.2], [49.15, 5.4], [48.6, 6.6], [48.0, 7.2], [47.55, 7.5]] }],
      labels: [
        { t: '西線', lat: 49.9, lon: 6.0, size: 22, f: 'red' },
        { t: '北海', lat: 54.6, lon: 3.6, size: 20, f: 'cream' },
        { t: '地中海', lat: 41.0, lon: 6.0, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '伊普爾', lat: 50.85, lon: 2.88, main: 1, side: 'r', dy: -10 },
        { n: '倫敦', lat: 51.51, lon: -0.13, side: 'l' },
        { n: '巴黎', lat: 48.86, lon: 2.35, side: 'l' },
        { n: '柏林', lat: 52.52, lon: 13.4, side: 'r' },
        { n: '維也納', lat: 48.21, lon: 16.37, side: 'r' },
        { n: '塞拉耶佛', lat: 43.86, lon: 18.41, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：聖誕節休戰以後，戰爭還打了將近四年。',
      items: [
        { y: 1914, when: '西元 1914 年', t: '大戰開始；\n聖誕節休戰', side: 'u', main: 1, w: 180 },
        { y: 1918, when: '西元 1918 年', t: '11 月 11 日\n停火', side: 'd', w: 160 },
        { y: 2026, when: '今天', t: '休戰的故事\n還有人在說', side: 'u', w: 170 }

      ]
    },
    sources: [
      '英國國家陸軍博物館 National Army Museum〈Christmas truce〉（1914 年 12 月 24、25 日、西線部分地方、不是協調好的單一事件；唱聖誕歌、點蠟燭、交換紀念品、有人踢球；長官不准；步兵威廉・伊夫 12 月 25 日的日記）',
      '美國國家一戰博物館 National WWI Museum and Memorial〈Assassination of Archduke Ferdinand〉教材與〈Armistice〉（1914 年 6 月 28 日塞拉耶佛事件；1918 年 11 月 11 日上午 11 點停火）',
      '聯合國日內瓦辦事處〈League of Nations: overview〉（1920 年 1 月 10 日成立；美國沒有加入；1920～1946）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1914 年聖誕節，西線有些地方的士兵做了什麼？', opts: ['自己停火、互相問候', '一起搭火車回家過節', '把兩邊的壕溝填平', '一起到巴黎看燈飾'], a: 0, why: '有些地方的士兵自己停火，唱聖誕歌、互相問候、交換紀念品，有些人還一起踢球。' },
      { id: 'q2', d: 1, type: 'tf', q: '第一次世界大戰的導火線，是奧匈帝國的王儲在塞拉耶佛遇刺。', a: true, why: '對！1914 年 6 月 28 日王儲在塞拉耶佛遇刺，一個月後奧匈帝國對塞爾維亞宣戰。' },
      { id: 'q3', d: 2, type: 'mc', q: '為什麼一件事，會讓那麼多國家都捲進戰爭？', opts: ['國家之間有同盟，盟友一個拉一個', '因為那一年的冬天特別冷', '因為各國士兵都在壕溝裡吵起架來了', '因為大家都想搶聖誕節的禮物'], a: 0, why: '國家之間結成同盟，一國宣戰、盟友跟著加入，歐洲很快分成兩大陣營。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['奧匈帝國王儲在塞拉耶佛遇刺', '西線士兵的聖誕節休戰', '戰爭在 11 月 11 日停火', '國際聯盟成立'], why: '1914 年 6 月塞拉耶佛事件；1914 年 12 月聖誕節休戰；1918 年 11 月 11 日停火；1920 年國際聯盟成立。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「有了聖誕節休戰，大家就不打仗了。」根據這一話，哪個說法最正確？', opts: ['不對，休戰只有幾天，戰爭又打了好幾年', '對，聖誕節一過戰爭就結束了', '不對，聖誕節那天各地都打得更兇', '對，因為有了聖誕節休戰，所以從此再也沒有戰爭'], a: 0, why: '休戰只在部分地方、只有幾天，長官也不准；戰爭一直打到 1918 年 11 月 11 日才停火。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
