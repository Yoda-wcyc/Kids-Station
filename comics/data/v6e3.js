/* 世界史漫畫 第 6 冊 帝國與兩次世界大戰・第 3 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：歐洲帝國的擴張與非洲的回應。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const { C, rect, poly, circ, path, txt, both, cap } = K;
    // 非洲大陸的簡化輪廓（約 200×220，左上 0,0）；只畫樣子，不是精確地圖
    const AFR = 'M30 20 L90 8 L132 14 L150 34 L176 70 L202 74 L182 110 L162 150 L150 190 L124 216 L108 200 L100 160 L90 122 L60 106 L20 92 L4 62 L10 34Z';
    const africa = (x, y, s, lines) => `<g transform="translate(${x} ${y}) scale(${s})">` + path(AFR, C.clay3) + (lines ? [[30, 66, 150, 66], [100, 20, 100, 112], [40, 92, 96, 40], [120, 112, 176, 112], [110, 150, 160, 150], [130, 112, 130, 200]].map(l => cap(l[0], l[1], l[2], l[3], 2.6, C.red)).join('') : '') + `</g>`;
    A.extend({
      cast: {
        v6e3_ama: { name: '阿瑪（虛構）', skin: 'skinC', top: 'gold', skirt: 'g7', leg: 'skinC', sleeve: 'skinC', shoe: 'wood', hair: 'curly', hat: 'band', hatC: 'red', r: 22, k: .94 },
        v6e3_dip1: { name: '開會的代表', skin: 'skin', top: '#3B3F4A', bottom: '#2A2D33', leg: '#2A2D33', hair: 'short', hairC: 'wood', r: 19, k: 1.16 },
        v6e3_dip2: { name: '開會的代表', skin: 'skin', top: '#2F3A33', bottom: '#2A2D33', leg: '#2A2D33', hair: 'bald', beard: 1, r: 19, k: 1.12 },
        v6e3_dip3: { name: '開會的代表', skin: 'skin', top: '#4A3B3F', bottom: '#2A2D33', leg: '#2A2D33', hair: 'short', acc: ['mustache'], r: 19, k: 1.14 },
        v6e3_menelik: { name: '孟尼利克二世', real: 1, skin: 'skinC', robe: 'cream', trim: 'gold', hair: 'man', hat: 'crown', beard: 1, r: 19, k: 1.22 },
        v6e3_taytu: { name: '泰圖皇后', real: 1, skin: 'skinC', robe: 'purple', trim: 'gold', hair: 'long', hat: 'band', hatC: 'gold', r: 19, k: 1.12 }
      },
      props: {
        // 黑板上的座位表，老師畫了紅線
        v6e3_board: x => { let s = rect(-160, -150, 320, 150, C.wood, 4) + rect(-150, -142, 300, 134, C.g9); for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) s += rect(-130 + i * 66, -128 + j * 40, 50, 28, 'none', 0, `stroke="${C.cream}" stroke-width="2"`); return K.place(x, s + cap(-40, -136, -40, -14, 4, C.red) + cap(-140, -60, 140, -60, 4, C.red)); },
        // 牆上的非洲地圖（畫了紅色直線）
        v6e3_map: x => K.place(x, both(rect(-130, -250, 260, 250, C.paper2, 4)) + africa(-104, -238, 1.05, x.lines !== false)),
        // 長會議桌
        v6e3_table: x => { const W = x.W || 420; return K.place(x, rect(-W / 2, -80, W, 18, C.wood, 3) + rect(-W / 2 + 14, -62, 14, 62, C.wood) + rect(W / 2 - 28, -62, 14, 62, C.wood) + rect(-W / 2 + 30, -94, 60, 14, C.cream, 2) + rect(W / 2 - 110, -94, 60, 14, C.cream, 2)); }
      },
      scenes: {
        // 細長圖：國界切開民族
        v6e3_africa(w, h) {
          let s = rect(0, 0, w, h, C.g5) + africa(10, 140, 1.6, true);
          s += rect(14, 520, w - 28, 118, C.cream, 10) + txt(w / 2, 556, '紅線＝後來畫的國界', 22, C.red) + txt(w / 2, 590, '很多是直直的線，', 21, C.ink, { w: 700 }) + txt(w / 2, 620, '沒問住在那裡的人。', 21, C.ink, { w: 700 });
          return { bg: s };
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v6e3 = {
    id: 'v6e3', vol: '第 6 冊 帝國與兩次世界大戰', volNo: 6, ep: 3, title: '被畫線切開的非洲', next: '壕溝裡的聖誕節',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱決定下次分組前，先問大家想跟誰一組。',
    note: '阿凱、小禾、阿瑪、開會的代表們是虛構的角色；開會時說的話是根據學者對當時做法的描述改寫，不是真人說過的話。約魯巴國王的話改編自學者阿西瓦朱（Asiwaju, 1985）書中的引述；泰圖皇后的話改編自南非歷史線上（SAHO）引用的說法；孟尼利克二世與泰圖皇后的樣子是想像圖。柏林會議本身沒有在會上直接畫出所有國界，它訂的是歐洲國家「怎麼分非洲」的規則，很多界線是之後幾年才畫的。漫畫裡的非洲地圖和紅線只是示意，不是真的國界位置。',
    curriculum: '國中社會會再學到：歐洲帝國的擴張與非洲的回應',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'clay2', near: 'sand' },
      back: [
        { k: 'palm', x: 120, y: 960, H: 240 },
        { k: 'v6e3_map', x: 650, y: 990, s: .75 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'cream', floor: 'paper3', hz: .76, window: [.78, .12, .18, .4], winC: 'g3' }, shot: '中景：放學後的教室，黑板上的座位表被老師畫了紅線',
          back: [{ k: 'v6e3_board', x: 330, y: 200, s: .9 }],
          actors: [
            { c: 'kai', x: 120, y: 330, s: 1, pose: 'fists', expr: 'mad', look: .6 },
            { c: 'he', x: 600, y: 332, s: .95, pose: 'hold', expr: 'think', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '老師拿尺一畫，\n就把我跟阿豪分開了！', x: 10, y: 10, w: 290, fs: 22, tail: [128, 150] },
            { t: '老師有問你們\n想跟誰一組嗎？', x: 470, y: 30, w: 230, fs: 22, tail: [594, 160] },
            { t: '沒有！', x: 176, y: 196, w: 110, kind: 'shout', fs: 24, tail: [140, 176] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'schoolGate', sceneOpt: { shop: false, name: '○○國小', hz: .58, ground: 'paper3' }, shot: '大格：校門口的搖搖車，阿凱氣呼呼地投下 10 元',
          back: [{ k: 'car', x: 150, y: 650, s: 1 }],
          actors: [
            { c: 'kai', x: 340, y: 650, s: 1.1, pose: 'offer', expr: 'mad', hold: 'coin', flip: 1, look: .5 },
            { c: 'he', x: 460, y: 664, s: 1, pose: 'scared', expr: 'worry', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '我要去一個\n不用被分組的地方！', x: 14, y: 230, w: 250, fs: 23, tail: [320, 440] },
            { t: '哪有這種\n地方啦！', x: 300, y: 260, w: 190, fs: 24, tail: [450, 490] }
          ],
          sfx: [{ t: '叮！', x: 40, y: 430, fs: 54, rot: -10 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1884 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1884',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '倒轉了！\n停在 1884！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'wood', hz: .66, window: [.06, .1, .16, .34], winC: 'sky' }, shot: '滿版：柏林的會議廳，一群穿西裝的代表圍著長桌，牆上掛著非洲地圖',
          back: [
            { k: 'v6e3_map', x: 520, y: 560, s: 1.1 },
            { k: 'v6e3_table', x: 400, y: 760, W: 560 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v6e3_dip1', x: 250, y: 700, s: .85, pose: 'point', expr: 'calm', look: .4 },
            { c: 'v6e3_dip2', x: 690, y: 700, s: .85, pose: 'think', expr: 'think', flip: 1, look: .4 },
            { c: 'v6e3_dip3', x: 380, y: 680, s: .8, pose: 'stand', expr: 'calm', look: .5 },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 1 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 142 年前，德國柏林', en: 'BERLIN · 1884', x: 0, y: 18 },
            { t: '1884 年 11 月到隔年 2 月，十幾個國家的代表在這裡開會，訂出歐洲國家怎麼分非洲土地的規則。', x: 0, y: 112, w: 420, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：柏林。\n免費附贈翻譯功能。', x: 14, y: 716, w: 300, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '他們在看\n非洲地圖……', x: 330, y: 650, w: 200, tail: [462, 770], fs: 24 },
            { t: '可是這裡\n一個非洲人\n都沒有！', x: 566, y: 610, w: 200, tail: [614, 810], fs: 24 }

          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'wood', hz: .8 }, shot: '中景：代表拿尺在地圖上畫線，阿凱躲在桌邊偷聽',
          back: [{ k: 'v6e3_map', x: 560, y: 330, s: 1 }],
          actors: [
            { c: 'v6e3_dip1', x: 380, y: 440, s: 1, pose: 'pointUp', expr: 'calm', hold: 'staff', look: .6 },
            { c: 'v6e3_dip2', x: 730, y: 440, s: .95, pose: 'think', expr: 'think', flip: 1, look: .5 },
            { c: 'kai', x: 110, y: 450, s: 1, pose: 'scared', expr: 'shock', look: .6 }
          ],
          bubbles: [
            { t: '這條線，\n就畫到河這邊。', x: 160, y: 30, w: 220, fs: 23, tail: [384, 250] },
            { t: '那邊住的\n是哪些人？', x: 600, y: 20, w: 170, fs: 23, tail: [724, 262] },
            { t: '……不清楚，\n先畫了再說。', x: 170, y: 150, w: 210, fs: 23, tail: [384, 258] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：小禾翻筆記本，說出開會的人有誰',
          actors: [{ c: 'he', x: 150, y: 548, s: 1.3, pose: 'hold', expr: 'mad', hold: 'notebook', look: -.2 }],
          bubbles: [{ t: '開會的人裡，\n只有兩個人\n真的去過非洲！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 290] }],
          tag: { t: '根據歷史學者的研究', left: 8 } },
        { scene: 'vortex', sceneOpt: { cy: .4 }, shot: '中景：搖搖車帶兄妹衝進時光隧道，往西非海岸去',
          caption: [{ t: '去看看「被畫線」的地方', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '嗶——前往\n西非海岸。', x: 20, y: 420, w: 220, kind: 'car', fs: 24, tail: [210, 290] },
            { t: '去問問住在\n那裡的人！', x: 230, y: 90, w: 210, kind: 'think', fs: 22 }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sun: [.82, .12], hz: .5, far: 'g5', ground: 'sand', near: 'clay3' }, shot: '滿版：西非海岸的埃維人村子，椰子樹、茅草屋和市場',
          back: [
            { k: 'palm', x: 80, y: 540, H: 260 }, { k: 'palm', x: 720, y: 560, H: 300 },
            { k: 'house', roof: 'thatch', f: 'clay3', x: 280, y: 560, W: 190, H: 100 },
            { k: 'house', roof: 'thatch', f: 'brick3', x: 540, y: 560, W: 170, H: 90 },
            { k: 'crowd', x: 400, y: 640, n: 8, W: 500, s: .7, op: .5 },
            { k: 'car', x: 130, y: 1000, s: .9, rot: -4 }
          ],
          actors: [
            { c: 'v6e3_ama', x: 300, y: 1004, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 500, y: 1000, s: 1.2, pose: 'think', expr: 'worry', flip: 1, look: .5 },
            { c: 'he', x: 640, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .6 }
          ],
          caption: [
            { t: '同一個時候，西非海岸', en: 'WEST AFRICA · 1884', x: 0, y: 18 },
            { t: '今天的迦納、多哥一帶。這裡住著埃維人，有自己的語言、村子和市場。', x: 0, y: 112, w: 440, dark: false }
          ],
          bubbles: [
            { t: '歡迎！我叫阿瑪。\n我家在這邊，\n外婆家在河那邊。', x: 14, y: 640, w: 270, fs: 23, tail: [300, 780] },
            { t: '你知道柏林有人\n在幫你們畫線嗎？', x: 300, y: 620, w: 250, fs: 22, tail: [500, 790] },
            { t: '柏林？\n那是哪裡？', x: 40, y: 540, w: 170, kind: 'think', fs: 22 },

            { t: '根本沒人\n來問過她……', x: 580, y: 720, w: 190, fs: 22, tail: [640, 806] }
          ],
          tag: { t: '埃維族的小孩：阿瑪（虛構）', left: 8, top: 200 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v6e3_africa', shot: '細長圖：非洲輪廓上的紅色直線，代表後來畫的國界',
          caption: [{ t: '後來的國界……', x: 0, y: 14, w: 240 }],
          actors: [{ c: 'v6e3_ama', x: 170, y: 1034, s: 1.15, pose: 'scared', expr: 'worry', look: .2 }],
          bubbles: [{ t: '外婆家\n變成別的殖民地，\n後來是別的國家！', x: 14, y: 670, w: 316, fs: 23, tail: [174, 820] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：非洲人自己的觀點與反抗',
          caption: [{ t: '非洲人怎麼看、怎麼做？', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '埃維人後來分在迦納和多哥，\n約魯巴人分在奈及利亞和貝南。\n一位約魯巴國王說：「那條線\n分開的是英國人和法國人，\n不是我們約魯巴人。」' },
            { icon: 'letterI', y: 420, t: '衣索比亞的孟尼利克二世\n寫信給列強，要他們\n把衣索比亞當成\n真正的國家看待。' },
            { icon: 'star', y: 700, t: '1896 年，衣索比亞在阿杜瓦\n打敗來侵略的義大利軍隊，\n保住了自己的國家。' }
          ] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'land', sceneOpt: { sun: [.85, .2], hz: .62, far: 'g5', ground: 'clay3' }, shot: '矮寬格：衣索比亞的山地上，孟尼利克二世和泰圖皇后',
          back: [{ k: 'mountain', x: 640, y: 248, W: 380, H: 160, f: 'g5', f2: 'g7' }, { k: 'mountain', x: 160, y: 248, W: 300, H: 120, f: 'g3', f2: 'g5' }],
          actors: [
            { c: 'kai', x: 80, y: 390, s: .9, pose: 'scared', expr: 'awe', look: .8 },
            { c: 'he', x: 170, y: 392, s: .9, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v6e3_menelik', x: 680, y: 394, s: .95, pose: 'stand', expr: 'calm', flip: 1, look: .5 },
            { c: 'v6e3_taytu', x: 560, y: 394, s: .95, pose: 'raise', expr: 'calm', flip: 1, look: .6 }
          ],
          caption: [{ t: '1896 年 3 月 1 日，阿杜瓦\n（在今天的衣索比亞北部）', x: 0, y: 14, w: 340 }],
          bubbles: [
            { t: '衣索比亞也要有自己的尊嚴，\n不會變成別人的保護國。', x: 230, y: 110, w: 380, fs: 22, tail: [556, 196] }
          ],
          tag: { t: '泰圖皇后的話：改編自南非歷史線上（SAHO）的引述', left: 300, top: 14 } },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'g5', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的埃維人村子，阿瑪送兄妹上車',
          back: [
            { k: 'palm', x: 60, y: 360, H: 220 },
            { k: 'house', roof: 'thatch', f: 'clay3', x: 470, y: 350, W: 160, H: 90 },
            { k: 'car', x: 650, y: 600, s: .7 }
          ],
          actors: [
            { c: 'v6e3_ama', x: 110, y: 566, s: 1.2, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 290, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 450, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '下次要畫線，\n先問住在這裡的人！', x: 14, y: 170, w: 250, fs: 22, tail: [120, 320] },
            { t: '我回去要請老師，\n先聽大家想跟誰一組！', x: 272, y: 150, w: 270, fs: 21, tail: [290, 326] },
            { t: '我要記下來。', x: 460, y: 262, w: 180, fs: 22, tail: [450, 366] },
            { t: '嗶嗶——\n下一站，\n比利時！', x: 630, y: 24, w: 140, kind: 'car', fs: 22, tail: [640, 470] }
          ],
          caption: [{ t: '下一話：壕溝裡的聖誕節', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '柏林會議', t: '1884 年 11 月到 1885 年 2 月，十四個國家的代表在德國柏林開會，訂出歐洲國家怎麼分非洲土地的規則。會上沒有邀請任何非洲人，開會的人裡只有兩個人去過非洲。' },
      { h: '畫線切開民族', t: '歐洲國家常常沒問當地人就畫界線。埃維人後來分在迦納和多哥，約魯巴人分在奈及利亞和貝南，索馬利人分在索馬利亞、衣索比亞、肯亞和吉布地。' },
      { h: '非洲人的觀點和反抗', t: '一位約魯巴國王說，那條線分開的是英國人和法國人，不是約魯巴人。衣索比亞的孟尼利克二世寫信給列強；1896 年 3 月 1 日，衣索比亞在阿杜瓦打敗來侵略的義大利軍隊。' },
      { h: '到 1914 年', t: '除了衣索比亞和賴比瑞亞，非洲幾乎都被歐洲國家佔領。很多當年畫的國界，一直留到今天。' }
    ],
    map: {
      world: 1,
      bounds: { lon: [-22, 56], lat: [-36, 56] },
      cap: '紅點是柏林。開會的人在歐洲，被畫線的是非洲。埃維人住在今天的迦納、多哥一帶；阿杜瓦在衣索比亞北部；賴比瑞亞和衣索比亞是 1914 年還沒被殖民的兩個國家。海岸線是簡化畫法。',
      alt: '歐洲與非洲地圖：北邊歐洲的柏林是紅點，往南是非洲；西非海岸標出阿克拉（今迦納）、洛美（今多哥）、蒙羅維亞（賴比瑞亞），東北邊標出阿杜瓦（今衣索比亞）',
      labels: [
        { t: '歐洲', lat: 48.5, lon: 25.0, size: 26, f: 'g9' },
        { t: '非洲', lat: 9.0, lon: 25.0, size: 32, f: 'g9' },
        { t: '大西洋', lat: -8.0, lon: -12.0, size: 22, f: 'cream' },
        { t: '印度洋', lat: -22.0, lon: 50.0, size: 22, f: 'cream' }
      ],
      cities: [
        { n: '柏林', lat: 52.52, lon: 13.4, main: 1, side: 'r' },
        { n: '洛美（今多哥）', lat: 6.13, lon: 1.22, side: 'r', dy: 10 },
        { n: '阿克拉（今迦納）', lat: 5.6, lon: -0.19, side: 'r', dy: 42 },
        { n: '蒙羅維亞（賴比瑞亞）', lat: 6.3, lon: -10.8, side: 'r', dy: -18 },
        { n: '阿杜瓦（今衣索比亞）', lat: 14.17, lon: 38.9, side: 'l', dy: -18 }

      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：柏林會議到今天一百四十多年，很多國界還是當年的樣子。',
      items: [
        { y: 1884, when: '西元 1884 年', t: '柏林會議\n開始', side: 'u', main: 1, w: 160 },
        { y: 1896, when: '西元 1896 年', t: '衣索比亞在\n阿杜瓦打勝仗', side: 'd', w: 180 },
        { y: 1964, when: '西元 1964 年', t: '非洲國家約好\n保留舊國界', side: 'u', w: 180 },
        { y: 2026, when: '今天', t: '很多國界\n還是當年的線', side: 'd', w: 170 }
      ]
    },
    sources: [
      'OER Project，Trevor Getz〈The Berlin Conference〉（1884 年 11 月 15 日～1885 年 2 月 26 日；12 個歐洲國家＋美國＋鄂圖曼共 14 方；沒有非洲人、只有兩人去過非洲；孟尼利克寫信；到 1914 年只剩賴比瑞亞、衣索比亞）',
      'Michalopoulos & Papaioannou〈The Long-Run Effects of the Scramble for Africa〉，美國國家經濟研究局 NBER 工作論文 17620（國界多半沒考慮當地；埃維人被迦納—多哥國界分開、約魯巴人被奈及利亞—貝南國界分開、索馬利人分在四國；1964 年非洲團結組織接受舊國界；引 Asiwaju 1985 約魯巴國王的話）',
      'South African History Online〈Remembering the Battle of Adwa〉（1896 年 3 月 1 日阿杜瓦戰役、孟尼利克二世與泰圖皇后、泰圖拒絕成為義大利的保護國）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1884 年討論怎麼分非洲土地的會議，是在哪一個城市開的？', opts: ['柏林', '開羅', '倫敦', '巴黎'], a: 0, why: '1884 年 11 月到 1885 年 2 月，十四個國家的代表在德國柏林開會。' },
      { id: 'q2', d: 1, type: 'tf', q: '柏林會議邀請了很多非洲國家的代表，一起討論怎麼畫國界。', a: false, why: '不對！會上一個非洲人都沒有，開會的人裡也只有兩個人去過非洲。' },
      { id: 'q3', d: 2, type: 'mc', q: '為什麼說很多非洲國界「切開」了民族？', opts: ['畫線時沒問當地人，同一個民族被分到不同國家', '因為非洲的河流全部都是直直的', '因為非洲人自己要求住得越遠越好', '因為歐洲國家把每一個民族都搬到海邊的城市去住'], a: 0, why: '歐洲國家常常沒問當地人就畫線，像埃維人後來分在迦納和多哥，約魯巴人分在奈及利亞和貝南。' },
      { id: 'q4', d: 2, type: 'match', q: '把左右兩邊配成一對。', pairs: [['埃維人', '分在迦納和多哥'], ['約魯巴人', '分在奈及利亞和貝南'], ['衣索比亞', '在阿杜瓦打敗義大利軍隊']], why: '國界把埃維人、約魯巴人分到不同國家；衣索比亞 1896 年在阿杜瓦打勝仗，保住了自己的國家。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「非洲有些國界畫得直直的，是因為非洲人自己喜歡整齊。」根據這一話，哪個說法最正確？', opts: ['不對，很多國界是歐洲國家開會畫的，沒問當地人', '對，非洲人開會投票決定要畫直線', '不對，非洲到今天都還沒有任何國界', '對，因為直直的國界剛好讓每一個民族都住在一起'], a: 0, why: '很多國界是歐洲國家照自己的規則畫的，沒有問住在那裡的人，所以才會把同一個民族切開。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
