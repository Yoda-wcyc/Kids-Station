/* 世界史漫畫 第 6 冊 帝國與兩次世界大戰・第 5 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：兩次大戰之間的世界（甘地與印度的非暴力抵抗）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, cap } = K;
    const COURT = '#C77B4E', SALT = '#F4F1E8';
    A.extend({
      parts: {
        v6e5_cap: () => path('M-21 -8 L-19 -26 Q0 -32 19 -26 L21 -8 Q0 -14 -21 -8Z', C.cream)   // 白色的布帽
      },
      cast: {
        v6e5_big: { name: '高年級的男生', skin: 'skin', top: 'red', bottom: 'ink', leg: 'skin', hair: 'short', r: 22, k: 1.06 },
        v6e5_rani: { name: '拉妮（虛構）', skin: 'skinC', top: 'g5', skirt: 'red', leg: 'skinC', sleeve: 'skinC', shoe: 'wood', hair: 'long', acc: ['earring'], r: 22, k: .94 },
        v6e5_gandhi: { name: '甘地', real: 1, skin: 'skinB', robe: 'cream', trim: 'paper3', hair: 'bald', acc: ['glasses'], r: 19, k: 1.12 },
        v6e5_walker: { name: '一起走的人', skin: 'skinC', robe: 'cream', trim: 'paper3', hair: 'short', hat: 'v6e5_cap', beard: 1, r: 19, k: 1.12 },
        v6e5_walker2: { name: '一起走的人', skin: 'skinB', robe: 'cream', trim: 'g3', hair: 'short', hat: 'v6e5_cap', r: 19, k: 1.1 },
        v6e5_lady: { name: '村子裡的婦人', skin: 'skinC', robe: 'red', trim: 'gold', hair: 'bun', acc: ['earring'], r: 19, k: 1.06 }
      },
      props: {
        // 一小堆鹽（白色結晶）
        v6e5_salt: x => K.place(x, path('M-60 0 Q-40 -26 -10 -30 Q20 -34 60 0Z', SALT) + [[-30, -12], [0, -22], [26, -10]].map(([a, b]) => poly(`${a - 6},${b} ${a},${b - 8} ${a + 6},${b}`, '#FFFFFF')).join(''))
      },
      holds: {
        v6e5_ballH: () => circ(0, -6, 16, '#D9772F') + rect(-16, -7, 32, 2, C.ink) + rect(-1, -22, 2, 32, C.ink)   // 抱在手上的籃球
      },
      icons: {
        v6e5_salt()
 { return rect(0, 0, 120, 90, C.g7) + path('M20 72 Q40 40 60 38 Q80 36 100 72Z', SALT) + poly('44,60 50,48 56,60', '#FFFFFF') + poly('62,54 68,42 74,54', '#FFFFFF'); }
      },
      scenes: {
        // 便利商店門口
        v6e5_shop(w, h) {
          let s = rect(0, 0, w, h, C.sky) + both(rect(w * .38, h * .1, w * .62, h * .48, C.cream, 4)) + rect(w * .38, h * .1, w * .62, h * .08, C.g7) + rect(w * .38, h * .18, w * .62, 8, C.red);
          s += txt(w * .69, h * .16, '便利商店', 30, C.cream) + rect(w * .46, h * .24, w * .44, h * .3, C.g3, 4) + rect(w * .66, h * .24, 6, h * .3, C.cream);
          s += rect(0, h * .58, w, h * .42, C.paper3) + rect(0, h * .58, w, 8, 'rgba(21,23,20,.12)');
          return { bg: s };
        },
        // 路線圖：阿默達巴德 → 丹迪
        v6e5_route(w, h) {
          let s = rect(0, 0, w, h, C.brick3) + path(`M0 ${h * .3} Q${w * .3} ${h * .5} ${w * .2} ${h} L0 ${h}Z`, C.g5);
          const pts = [[w * .72, h * .2], [w * .78, h * .36], [w * .7, h * .5], [w * .62, h * .66], [w * .5, h * .8]];
          for (let i = 0; i < pts.length - 1; i++) s += cap(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 8, C.red);
          s += circ(pts[0][0], pts[0][1], 12, C.ink) + txt(pts[0][0] - 18, pts[0][1] - 18, '阿默達巴德', 22, C.ink, { a: 'end' });
          s += circ(pts[4][0], pts[4][1], 20, 'url(#cm-redglow)') + circ(pts[4][0], pts[4][1], 10, C.red) + txt(pts[4][0] + 18, pts[4][1] + 34, '丹迪', 26, C.ink, { a: 'start' });
          s += rect(w * .12, h * .44, w * .5, 66, C.cream, 8, 'opacity=".92"') + txt(w * .37, h * .44 + 28, '約 385 公里', 22, C.red) + txt(w * .37, h * .44 + 56, '走 24 天', 22, C.ink);
          return { bg: s };
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v6e5 = {
    id: 'v6e5', vol: '第 6 冊 帝國與兩次世界大戰', volNo: 6, ep: 5, title: '走到海邊去曬鹽', next: '戰爭結束的那一天',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說，下次球場要大家輪流用。',
    note: '阿凱、小禾、拉妮、高年級男生、一路上的村民是虛構的角色；甘地的話改編自他的非暴力主張，不是當天的原話，樣子是想像圖。一起出發的人數，資料有寫 78 人、也有寫 79 人；路程有寫 240 英里（約 385 公里），也有寫 241 英里；到丹迪是 4 月 5 日、撿鹽是 4 月 6 日。被捕的人數是大約的數字。路線圖是簡化畫法。',
    curriculum: '國中社會會再學到：兩次大戰之間的世界（甘地與印度的非暴力抵抗）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'clay3', near: 'sand' },
      back: [
        { k: 'v6e5_salt', x: 650, y: 980, s: 1.6 },
        { k: 'palm', x: 110, y: 960, H: 240 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'ballCourt', shot: '中景：社區籃球場，高年級男生把阿凱的球高高舉走',
          back: [{ k: 'hoop', x: 640, y: 300, s: .8 }],
          props: [{ k: 'ball', x: 548, y: 152, s: 1 }],
          actors: [
            { c: 'kai', x: 230, y: 330, s: 1, pose: 'fists', expr: 'mad', look: .6 },
            { c: 'he', x: 90, y: 332, s: .95, pose: 'scared', expr: 'worry', look: .6 },
            { c: 'v6e5_big', x: 520, y: 330, s: 1, pose: 'raise', expr: 'smug', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '把球還我！\n不然我揍你！', x: 210, y: 16, w: 210, fs: 23, tail: [236, 140] },
            { t: '球場我們先佔了！', x: 530, y: 210, w: 230, fs: 22, tail: [520, 164] },
            { t: '哥，打回去\n會打不完啦。', x: 14, y: 30, w: 190, fs: 22, tail: [90, 150] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'v6e5_shop', shot: '大格：便利商店門口，阿凱氣得踢了搖搖車一腳，口袋的 10 元剛好掉進投幣孔',
          back: [{ k: 'car', x: 170, y: 650, s: 1 }],
          props: [{ k: 'coin', x: 220, y: 470, r: 18, rot: 20 }],
          actors: [
            { c: 'kai', x: 360, y: 650, s: 1.1, pose: 'run', expr: 'mad', flip: 1, look: .5 },
            { c: 'he', x: 470, y: 664, s: 1, pose: 'scared', expr: 'shock', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '氣死我了！', x: 14, y: 250, w: 200, kind: 'shout', fs: 24, tail: [330, 450] },
            { t: '哥！你的 10 元\n掉進投幣孔了！', x: 260, y: 270, w: 250, fs: 22, tail: [460, 490] }
          ],
          sfx: [{ t: '咚！', x: 40, y: 440, fs: 54, rot: -10 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1930 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1930',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '倒轉了！\n停在 1930！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sun: [.84, .1], hz: .44, far: 'g3', ground: 'sand', near: 'clay3' }, shot: '滿版遠景：塵土飛揚的鄉間路上，一長排穿白衣的人跟著拿手杖的甘地走，村民在路邊看',
          back: [
            { k: 'tree', x: 90, y: 470, H: 200 }, { k: 'tree', x: 720, y: 480, H: 220 },
            { k: 'road', old: 1, x: 420, y: 1040, W: 620, w2: 40, L: 600, f: 'paper3' },
            { k: 'crowd', x: 470, y: 600, n: 12, W: 300, s: .7, op: .7 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v6e5_walker', x: 360, y: 700, s: .8, pose: 'walk', expr: 'calm' },
            { c: 'v6e5_gandhi', x: 470, y: 720, s: .85, pose: 'walk', expr: 'calm', hold: 'staff' },
            { c: 'v6e5_walker2', x: 580, y: 700, s: .8, pose: 'walk', expr: 'calm' },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 1 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 96 年前，印度西部', en: 'SALT MARCH · 1930', x: 0, y: 18 },
            { t: '那時印度由英國統治。1930 年 3 月 12 日，甘地帶著七十多位夥伴，從阿默達巴德出發，要走到海邊。', x: 0, y: 112, w: 450, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：印度。\n免費附贈翻譯功能。', x: 14, y: 716, w: 300, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好多人\n在走路！', x: 320, y: 660, w: 160, tail: [462, 780], fs: 24 },
            { t: '他們要\n走去哪裡？', x: 566, y: 640, w: 190, tail: [614, 810], fs: 24 }

          ],
          tag: { t: '拿手杖的是甘地（樣子是想像圖）', left: 8, top: 214 } }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g3', ground: 'sand' }, shot: '中景：阿凱衝到隊伍最前面，拉妮大喊',
          actors: [
            { c: 'kai', x: 200, y: 440, s: 1.05, pose: 'run', expr: 'grin', look: .4, sweat: 1 },
            { c: 'he', x: 70, y: 446, s: .95, pose: 'scared', expr: 'worry', look: .6 },
            { c: 'v6e5_rani', x: 600, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '我要第一個\n走到海邊！', x: 140, y: 40, w: 220, tail: [226, 240] },
            { t: '這不是賽跑！\n要走二十四天耶！', x: 400, y: 30, w: 300, kind: 'shout', fs: 24, tail: [596, 250] }
          ],
          sfx: [{ t: '咻——', x: 330, y: 300, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：拉妮說明為什麼要走',
          actors: [{ c: 'v6e5_rani', x: 150, y: 548, s: 1.25, pose: 'pointUp', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '我叫拉妮。\n英國規定鹽只能\n跟政府買，\n還要繳稅！', x: 14, y: 60, w: 274, fs: 23, tail: [150, 310] }],
          tag: { t: '村裡的小孩：拉妮（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：為什麼是鹽',
          caption: [{ t: '為什麼是「鹽」？', x: 0, y: 14 }],
          cards: [
            { icon: 'v6e5_salt', y: 76, t: '鹽是每個人每天都要吃的，\n不管有錢沒錢、\n住在哪裡都一樣。' },
            { icon: 'coinI', y: 300, t: '1882 年英國的法律：\n鹽只能由政府做、由政府賣，\n還要繳鹽稅。' }
          ] }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'land', sceneOpt: { sun: [.8, .12], hz: .48, far: 'g3', ground: 'sand' }, shot: '左大格：大樹下，甘地對村民說話，兄妹和拉妮在前面聽',
          back: [{ k: 'tree', x: 380, y: 520, H: 360 }, { k: 'crowd', x: 260, y: 560, n: 7, W: 380, s: .7, op: .6 }],
          actors: [
            { c: 'v6e5_gandhi', x: 250, y: 600, s: 1, pose: 'raise', expr: 'calm', hold: 'staff', look: .2 },
            { c: 'v6e5_rani', x: 100, y: 1030, s: 1.2, pose: 'hold', expr: 'happy', look: .4 },
            { c: 'kai', x: 260, y: 1030, s: 1.2, pose: 'think', expr: 'think', flip: 1, look: .4 },
            { c: 'he', x: 400, y: 1034, s: 1.15, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .5 }
          ],
          bubbles: [
            { t: '我們不打人，也不罵人。\n我們走到海邊，\n自己做鹽。', x: 20, y: 110, w: 320, fs: 24, tail: [252, 380] },
            { t: '不打回去，\n真的有用嗎？', x: 230, y: 640, w: 210, fs: 23, tail: [266, 800] }
          ],
          tag: { t: '甘地的話：改編自他的非暴力主張', left: 8, top: 14 } },
        { scene: 'v6e5_route', shot: '右上小格：從阿默達巴德到丹迪的路線',
          caption: [{ t: '從出發到海邊', x: 0, y: 14, w: 210 }] },
        { scene: 'land', sceneOpt: { sun: false, hz: .45, far: 'g3', ground: 'sand' }, shot: '右下小格：路邊的婦人放下水罐，加入隊伍',
          actors: [{ c: 'v6e5_lady', x: 140, y: 500, s: .95, pose: 'walk', expr: 'happy', look: .3 }],
          caption: [{ t: '一路上，越來越多人跟著走。', x: 0, y: 14, w: 266 }],
          bubbles: [{ t: '我也要\n一起走！', x: 20, y: 150, w: 170, fs: 24, tail: [140, 300] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'sea', sceneOpt: { sun: [.8, .14], hz: .44 }, shot: '滿版：丹迪海邊，甘地彎腰撿起一把含鹽的泥土，很多人圍在旁邊',
          back: [
            { k: 'crowd', x: 400, y: 640, n: 14, W: 700, s: .8, op: .6 },
            { k: 'v6e5_salt', x: 420, y: 720, s: 1.2 },
            { k: 'car', x: 160, y: 1010, s: 1, rot: -4 }
          ],
          props: [],
          actors: [
            { c: 'v6e5_gandhi', x: 380, y: 720, s: 1, pose: 'kneel', expr: 'calm', look: .4 },
            { c: 'v6e5_rani', x: 330, y: 1010, s: 1.15, pose: 'raise', expr: 'grin', look: .4 },
            { c: 'kai', x: 480, y: 1012, s: 1.2, pose: 'scared', expr: 'shock', flip: 1, look: .5 },
            { c: 'he', x: 640, y: 1016, s: 1.15, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: .6 }
          ],
          caption: [
            { t: '1930 年 4 月 6 日早上，丹迪海邊', en: 'DANDI · 6 APR 1930', x: 0, y: 18 },
            { t: '甘地從海邊撿起一把含鹽的泥土。照當時英國的法律，這樣是犯法的。', x: 0, y: 112, w: 440, dark: false }
          ],
          bubbles: [
            { t: '就這樣？\n撿一把鹽？', x: 470, y: 600, w: 190, fs: 24, tail: [486, 790] },
            { t: '全印度的人\n都會跟著做！', x: 30, y: 640, w: 230, fs: 24, tail: [330, 800] },
            { t: '不用拳頭，\n也讓全世界聽見了。', x: 520, y: 760, w: 250, fs: 22, tail: [632, 820] }
          ],
          tag: { t: '甘地的樣子是想像圖', left: 8, top: 214 } }

      ] },
      { layout: 'strip', panels: [
        { scene: 'flat', sceneOpt: { c: 'g9' }, shot: '字卡格：後來發生的事',
          caption: [{ t: '後來……', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, x: 20, w: 370, t: '很多地方的人跟著自己做鹽、\n不繳鹽稅。英國抓了超過\n六萬人，甘地也被抓了。' },
            { icon: 'star', y: 80, x: 400, w: 360, t: '1947 年 8 月 15 日，\n印度獨立了；同時也分成\n印度和巴基斯坦兩個國家。' }
          ] },
        { scene: 'ballCourt', shot: '收尾大格：回到籃球場，阿凱平心靜氣地跟高年級男生商量',
          back: [{ k: 'hoop', x: 90, y: 520, s: .8, flip: 1 }, { k: 'car', x: 660, y: 600, s: .7 }],
          actors: [
            { c: 'kai', x: 260, y: 570, s: 1.2, pose: 'offer', expr: 'calm', look: .5 },
            { c: 'he', x: 140, y: 576, s: 1.1, pose: 'hold', expr: 'smug', hold: 'notebook', look: .6 },
            { c: 'v6e5_big', x: 470, y: 570, s: 1.15, pose: 'hold', expr: 'worry', flip: 1, hold: 'v6e5_ballH', look: .4 }

          ],
          bubbles: [
            { t: '球場大家輪流用，\n好不好？\n不行就請老師來說。', x: 14, y: 130, w: 270, fs: 21, tail: [270, 330] },
            { t: '……好啦，\n一人一半。', x: 330, y: 150, w: 190, fs: 22, tail: [470, 340] },
            { t: '嗶嗶——\n下一站：\n1945 年！', x: 610, y: 24, w: 160, kind: 'car', fs: 22, tail: [650, 480] }
          ],
          caption: [{ t: '下一話：戰爭結束的那一天', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '英國統治下的印度', t: '1930 年的印度由英國統治。1882 年英國的法律規定：鹽只能由政府做、由政府賣，還要繳鹽稅。鹽是每個人每天都要吃的東西。' },
      { h: '食鹽長征', t: '1930 年 3 月 12 日，甘地帶著七十多位夥伴從阿默達巴德出發，走了 24 天、大約 385 公里，4 月 6 日在丹迪海邊撿起一把含鹽的泥土，表示不接受這條法律。' },
      { h: '非暴力抵抗', t: '甘地主張不打人、不罵人，用大家一起行動讓人聽見。很多地方的人跟著自己做鹽、不繳鹽稅；英國抓了超過六萬人，甘地也被抓。' },
      { h: '印度獨立', t: '1947 年 8 月 15 日，印度獨立，同時也分成印度和巴基斯坦兩個國家。甘地不用拳頭的方法，後來影響了世界上很多爭取權利的人。' }
    ],
    map: {
      bounds: { lon: [64, 92], lat: [8, 32] },
      cap: '紅點是丹迪。紅色虛線是食鹽長征大約的路線（從阿默達巴德往南走到海邊），是簡化畫法；海岸線、河道是今天的樣子。',
      alt: '印度地圖：西部的阿默達巴德往南有紅色虛線，到海邊的丹迪（紅點）；北邊是德里，東邊是加爾各答，西北有印度河，北邊有恆河',
      rivers: ['indus', 'ganges'],
      routes: [{ pts: [[23.03, 72.58], [22.69, 72.86], [22.56, 72.95], [21.71, 72.98], [21.17, 72.83], [20.89, 72.8]] }],
      labels: [
        { t: '印度', lat: 20.5, lon: 79.0, size: 32, f: 'g9' },
        { t: '阿拉伯海', lat: 15.5, lon: 66.5, size: 22, f: 'cream' },
        { t: '孟加拉灣', lat: 15.0, lon: 87.5, size: 22, f: 'cream' }
      ],
      cities: [
        { n: '丹迪', lat: 20.89, lon: 72.8, main: 1, side: 'l' },
        { n: '阿默達巴德', lat: 23.03, lon: 72.58, side: 'r', dy: -6 },
        { n: '孟買', lat: 19.08, lon: 72.88, side: 'r', dy: 14 },
        { n: '德里', lat: 28.61, lon: 77.21, side: 'r' },
        { n: '加爾各答', lat: 22.57, lon: 88.36, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從食鹽長征到印度獨立，又過了十七年。',
      items: [
        { y: 1915, when: '西元 1915 年', t: '甘地從南非\n回到印度', side: 'u', w: 150 },
        { y: 1930, when: '西元 1930 年', t: '食鹽長征', side: 'd', main: 1, w: 160 },
        { y: 1947, when: '西元 1947 年', t: '印度獨立', side: 'u', w: 150 },
        { y: 2026, when: '今天', t: '不用拳頭的方法\n影響了很多人', side: 'd', w: 200 }
      ]
    },
    sources: [
      'Swarthmore College〈Global Nonviolent Action Database: Indians campaign for independence (Salt Satyagraha), 1930-1931〉（1882 年《鹽法》政府專賣與鹽稅；3 月 12 日出發、約 240 英里、24 天；4 月 6 日撿鹽；超過六萬人被捕；甘地 5 月 4 日夜裡被捕）',
      '甘地紀念網站 mkgandhi.org〈A Short Chronological Sketch〉與〈Dandi March〉（1915 年 1 月 9 日回到印度；1930 年 3 月 12 日帶 78 位夥伴出發，另有 79 人的寫法；4 月 5 日到丹迪、6 日做鹽；甘地反對用暴力；1947 年 8 月 15 日印度獨立、國家被分成兩塊）',
      'gandhistory.in〈Salt Satyagraha〉圖片說明（照片藏於新德里甘地紀念館 Gandhi Smriti；約 240 英里、6 日早上撿起鹽）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '甘地帶大家走到海邊，是要去做什麼？', opts: ['自己做鹽', '搭船出國', '看日出', '撿貝殼賣'], a: 0, why: '照英國的法律，鹽只能跟政府買，甘地帶大家走到海邊，自己撿鹽、做鹽。' },
      { id: 'q2', d: 1, type: 'tf', q: '食鹽長征的時候，甘地和夥伴們用打架的方式反抗英國。', a: false, why: '不對！甘地主張非暴力：不打人、不罵人，用大家一起走路、一起做鹽的方式讓人聽見。' },
      { id: 'q3', d: 2, type: 'mc', q: '甘地為什麼選「鹽」來抗議？', opts: ['鹽是每個人每天都要吃的，大家都懂', '因為印度的鹽都被拿去做成最貴的寶石了', '因為英國人不喜歡吃鹹的東西', '因為海邊只有甘地一個人住'], a: 0, why: '不管有錢沒錢、住在哪裡，每個人每天都要吃鹽，鹽稅影響每一個人，大家一看就懂。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['甘地從南非回到印度', '甘地從阿默達巴德出發', '甘地在丹迪海邊撿起鹽', '印度獨立'], why: '1915 年回到印度；1930 年 3 月 12 日出發；4 月 6 日在丹迪撿起鹽；1947 年 8 月 15 日印度獨立。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「被欺負的時候，只有打回去，別人才會聽見。」根據這一話，哪個說法最正確？', opts: ['不一定，甘地用不打人的方法，也讓全世界聽見', '對，甘地就是靠打架讓英國人離開', '不對，甘地什麼都沒有做，只是每天待在家裡等英國人離開', '對，所以每個走到海邊的人都比賽誰的力氣大'], a: 0, why: '甘地不用拳頭，而是帶著大家一起走路、一起做鹽，讓全世界都看見英國的鹽法不公平。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
