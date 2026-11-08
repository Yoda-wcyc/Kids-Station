/* 世界史漫畫 第 7 冊 現代世界・第 5 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：媒體識讀與網路社會（公民）。格式：comics/CONTRACT.md
   跟網站「AI 會唬爛」那一課同一套查證三招：自己查（課本、官網、圖書館）、問大人或老師、多找一個地方對答案。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, col, place, rect, poly, circ, path, txt, both, groundShadow } = K;
    root.ComicArt.extend({
      scenes: {
      },
      props: {
        // 1990 年的黑色方塊電腦＋螢幕＋手寫標籤（標籤上的中文是搖搖車翻譯）
        v7e5_next: x => place(x,
          both(rect(-150, -86, 110, 86, C.ink, 4)) + rect(-140, -70, 70, 26, C.cream, 2) + txt(-105, -61, '這台是伺服器', 10, C.red) + txt(-105, -49, '不要關機！！', 10, C.red) + circ(-58, -16, 6, C.basalt3) +
          both(rect(-20, -150, 150, 110, C.ink, 6)) + rect(-10, -140, 130, 86, '#DDE6DD', 2) + rect(0, -130, 70, 6, C.g7) + rect(0, -116, 100, 4, C.basalt3) + rect(0, -106, 90, 4, C.basalt3) + rect(0, -94, 40, 4, C.blue) + rect(42, -40, 26, 30, C.ink) + rect(10, -12, 90, 12, C.basalt2, 3)),
        v7e5_sofa: x => { const W = x.W || 260; return place(x, groundShadow(0, 2, W * .55, 6) + both(rect(-W / 2, -60, W, 60, col(x.f) || C.g7, 10)) + both(rect(-W / 2, -110, W, 54, col(x.f) || C.g7, 12)) + rect(-W / 2 - 10, -76, 26, 76, C.g9, 8) + rect(W / 2 - 16, -76, 26, 76, C.g9, 8)); },
        v7e5_fan: x => place(x, rect(-4, -120, 8, 120, C.basalt3) + K.ell(0, -2, 34, 8, C.basalt3) + circ(0, -140, 36, C.paper3) + circ(0, -140, 30, 'rgba(255,255,255,.4)') + circ(0, -140, 8, C.basalt3))
      },
      icons: {
        v7e5_page() { return rect(0, 0, 120, 90, C.paper) + rect(10, 10, 44, 56, C.cream, 3) + rect(16, 18, 30, 4, C.g7) + rect(16, 28, 26, 3, C.basalt3) + rect(16, 36, 20, 3, C.blue) + rect(66, 24, 44, 56, C.cream, 3) + rect(72, 32, 30, 4, C.g7) + rect(72, 42, 24, 3, C.basalt3) + path('M38 38 Q60 20 80 44', 'none', `stroke="${C.red}" stroke-width="3"`) + poly('76,38 84,46 74,48', C.red); },
        v7e5_lock() { return rect(0, 0, 120, 90, C.g3) + path('M44 40 L44 30 Q44 14 60 14 Q76 14 76 30 L76 40', 'none', `stroke="${C.ink}" stroke-width="7"`) + rect(36, 38, 48, 40, C.gold, 6) + circ(60, 54, 6, C.ink) + rect(57, 56, 6, 12, C.ink); }
      },
      cast: {
        v7e5_ama: { name: '阿嬤', skin: 'skin', top: 'purple', bottom: 'g9', leg: 'g9', hair: 'bun', hairC: 'paper3', r: 19, k: 1.02 },
        v7e5_sophie: { name: '蘇菲（虛構）', skin: 'skin', top: 'g5', skirt: 'blue', hair: 'short', hairC: 'gold', r: 22, k: .93 },
        v7e5_tbl: { name: '提姆・柏納李', real: 1, skin: 'skin', top: 'blue', bottom: 'wood', leg: 'wood', hair: 'short', hairC: 'wood', r: 19, k: 1.14 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v7e5 = {
    id: 'v7e5', vol: '第 7 冊 現代世界', volNo: 7, ep: 5, title: '連起全世界的網', next: '回家的路：一個地球',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！下次群組裡又有人轉傳，你就是家裡的查證小隊長。',
    note: '阿凱、小禾、蘇菲是虛構的角色；阿嬤是兄妹的阿嬤（漫畫角色）。提姆・柏納李的話改編自他介紹全球資訊網的說法，不是原話。那台電腦上真的貼過一張手寫的英文標籤，意思是「這台是伺服器，不要關機！！」，漫畫裡的中文是搖搖車的翻譯。研究所大樓、辦公室的畫面是想像圖。「搖搖車要漲到 100 元」是漫畫編的謠言。',
    curriculum: '國中社會會再學到：媒體識讀與網路社會（公民）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g3', near: 'g5' },
      back: [
        { k: 'building', g: 'blue', x: 150, y: 920, W: 240, H: 140 , f: 'paper2' },
        { k: 'v7e5_next', x: 660, y: 950, s: 1.2 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'quad', panels: [
        { scene: 'room', sceneOpt: { wall: '#E6DCC4', floor: 'wood', hz: .76, window: [.6, .1, .32, .3], winC: 'g2' }, shot: '中景：阿嬤家客廳，阿嬤唸手機群組裡轉傳的消息，阿凱嚇一跳',
          back: [{ k: 'v7e5_sofa', x: 150, y: 390, W: 260 }, { k: 'v7e5_fan', x: 340, y: 392, s: .8 }],
          actors: [
            { c: 'v7e5_ama', x: 110, y: 500, s: 1.05, pose: 'hold', expr: 'worry', hold: 'phone', look: .5 },
            { c: 'kai', x: 290, y: 500, s: 1, pose: 'scared', expr: 'shock', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '群組說：明天起，\n搖搖車要收\n100 元！', x: 12, y: 18, w: 230, fs: 22, tail: [110, 300] },
            { t: '什麼？！', x: 240, y: 170, w: 130, kind: 'shout', fs: 24, tail: [284, 300] }
          ] },
        { scene: 'room', sceneOpt: { wall: '#E6DCC4', floor: 'wood', hz: .76 }, shot: '中景：小禾冷靜問來源，阿凱已經衝出去',
          actors: [
            { c: 'he', x: 110, y: 490, s: 1.05, pose: 'hold', expr: 'think', hold: 'notebook', look: .4 },
            { c: 'kai', x: 300, y: 496, s: .95, pose: 'run', expr: 'yell', sweat: 2, look: .5 }
          ],
          bubbles: [
            { t: '誰說的？\n哪裡來的消息？', x: 12, y: 30, w: 210, fs: 22, tail: [110, 310] },
            { t: '趁還是 10 元，\n快去坐！', x: 170, y: 160, w: 200, kind: 'shout', fs: 21, tail: [300, 320] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 6, top: 474 } },
        { scene: 'land', sceneOpt: { sky: '#E6DCC4', sun: false, hz: .5, far: false, ground: 'paper3' }, shot: '中景：阿嬤家巷口的搖搖車，阿凱投下 10 元',
          back: [
            { k: 'house', x: 120, y: 255, W: 220, H: 150, roof: 'flat', roofC: 'clay2', f: 'brick3' },
            { k: 'house', x: 330, y: 255, W: 200, H: 170, roof: 'flat', roofC: 'g7', f: 'paper2' },
            { k: 'car', x: 190, y: 420, s: .7 }
          ],
          actors: [
            { c: 'he', x: 60, y: 480, s: .9, pose: 'scared', expr: 'worry', look: .4 },
            { c: 'kai', x: 320, y: 470, s: .95, pose: 'offer', expr: 'grin', flip: 1, look: -.3 }
          ],
          bubbles: [
            { t: '最後一次\n10 元！', x: 230, y: 20, w: 146, fs: 22, tail: [316, 300] },
            { t: '我覺得\n是假的……', x: 10, y: 60, w: 150, fs: 21, tail: [60, 320] }
          ],
          sfx: [{ t: '叮！', x: 250, y: 300, fs: 32, rot: 8 }] },
        { scene: 'coin', sceneOpt: { year: '1991', era: '西元' }, shot: '特寫：投幣孔和數字盤，倒轉停在西元 1991',
          props: [{ k: 'coin', x: 230, y: 40, r: 22, rot: 12 }],
          bubbles: [{ t: '又倒轉了！1991 年！', x: 52, y: 448, w: 280, fs: 22, kind: 'think' }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#D6E0E4', sun: [.14, .12], hz: .46, far: 'g3', ground: 'g3', near: 'paper3' }, shot: '滿版遠景：1991 年日內瓦旁的 CERN，遠處是雪山，研究所大樓前有各國的科學家',
          back: [
            { k: 'mountain', x: 200, y: 478, W: 460, H: 190, f: 'g5', f2: 'g7', snow: 1 },
            { k: 'mountain', x: 620, y: 478, W: 380, H: 150, f: 'g3', f2: 'g5', snow: 1 },
            { k: 'building', g: 'blue', x: 300, y: 600, W: 360, H: 170 , f: 'paper2' },
            { k: 'building', g: 'blue', x: 640, y: 620, W: 260, H: 130, f: 'cream' },
            { k: 'sign', t: 'CERN', x: 600, y: 700, W: 160, H: 50, fs: 30 },
            { k: 'crowd', x: 360, y: 680, n: 7, W: 300, s: .8, op: .6 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 1 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '1991 年，瑞士日內瓦，CERN', en: 'CERN · GENEVA · 1991', x: 0, y: 18 },
            { t: 'CERN 是歐洲核子研究組織。很多國家的科學家在這裡一起研究最小的粒子。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：日內瓦。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '搖搖車漲價\n跟這裡有關嗎？', x: 330, y: 664, w: 210, tail: [462, 770], fs: 23 },
            { t: '我也不知道，\n先查查看！', x: 556, y: 712, w: 206, tail: [618, 810], fs: 23 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .78, window: [.04, .1, .26, .4], winC: 'g2' }, shot: '中景：辦公室，阿凱伸手要按黑色電腦的開關，蘇菲大叫',
          back: [
            { k: 'shelf', x: 700, y: 366, W: 120, H: 240 },
            { k: 'table', x: 470, y: 400, W: 300 },
            { k: 'v7e5_next', x: 470, y: 324, s: 1 }
          ],
          actors: [
            { c: 'kai', x: 270, y: 456, s: 1, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v7e5_sophie', x: 640, y: 456, s: 1.02, pose: 'shout', expr: 'yell', flip: 1, look: .6 },
            { c: 'he', x: 100, y: 460, s: .95, pose: 'scared', expr: 'shock', look: .5 }
          ],
          bubbles: [
            { t: '這台好舊喔，\n我按一下開關……', x: 140, y: 20, w: 250, fs: 23, tail: [276, 280] },
            { t: '別關！它一關，\n很多網頁就打不開了！', x: 430, y: 20, w: 330, kind: 'shout', fs: 23, tail: [636, 270] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：蘇菲自我介紹',
          actors: [{ c: 'v7e5_sophie', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'smug', look: -.2 }],
          bubbles: [{ t: '我爸爸是物理學家。\n這裡的人來自\n好多國家，資料\n要分享給大家。', x: 12, y: 50, w: 278, fs: 22, tail: [150, 300] }],
          tag: { t: '日內瓦的小孩：蘇菲（虛構）', left: 8 } },
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .8 }, shot: '中景：提姆・柏納李指著螢幕，說明「連結」',
          back: [{ k: 'table', x: 300, y: 444, W: 240 }, { k: 'v7e5_next', x: 300, y: 368, s: .9 }],
          actors: [
            { c: 'v7e5_tbl', x: 110, y: 540, s: 1, pose: 'point', expr: 'happy', look: .4 },
            { c: 'kai', x: 390, y: 540, s: 1, pose: 'think', expr: 'awe', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '用「連結」把文件串起來，\n點一下，就跳到\n另一台電腦的資料。', x: 10, y: 20, w: 300, fs: 21, tail: [114, 330] },
            { t: '像尋寶地圖，\n一張接一張！', x: 270, y: 150, w: 186, fs: 21, tail: [386, 350] }
          ],
          tag: { t: '提姆・柏納李的話：改編自他介紹全球資訊網的說法', left: 6, top: 516 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：網際網路和全球資訊網不一樣',
          caption: [{ t: '「網」有兩層', x: 0, y: 14 }],
          cards: [
            { icon: 'road', y: 76, t: '網際網路：把電腦\n連起來的「路」。\n1969 年起慢慢\n接起來。' },
            { icon: 'v7e5_page', y: 400, t: '全球資訊網：路上\n一頁頁的「網頁」，\n用「連結」串起來。\n1989 年在 CERN\n想出來。' },
            { icon: 'star', y: 740, t: '1993 年，CERN\n把網頁軟體\n免費給全世界用。' }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '字卡：查來源三招、保護隱私',
          caption: [{ t: '傳得快，假的也傳得快', x: 0, y: 16 }],
          cards: [
            { icon: 'question', y: 80, t: '查來源三招：\n① 自己查：課本、官網、圖書館\n② 問大人或老師\n③ 多找一個地方對答案' },
            { icon: 'v7e5_lock', y: 400, t: '保護隱私：名字、地址、\n學校、照片、密碼，\n不要隨便貼上網。' }
          ],
          bubbles: [{ t: '跟印刷機那一站一樣：\n傳得越快，\n越要查真假！', x: 24, y: 760, w: 374, fs: 24 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .8 }, shot: '矮寬格：1991 年 8 月，柏納李把新系統公告到網路上，蘇菲和兄妹在旁邊',
          back: [{ k: 'table', x: 560, y: 330, W: 260 }, { k: 'v7e5_next', x: 560, y: 254, s: .8 }],
          actors: [
            { c: 'v7e5_sophie', x: 90, y: 388, s: .85, pose: 'raise', expr: 'grin', look: .4 },
            { c: 'kai', x: 220, y: 386, s: .85, pose: 'think', expr: 'worry', flip: 1, look: .5 },
            { c: 'he', x: 340, y: 390, s: .85, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .5 }
          ],
          caption: [{ t: '1991 年 8 月，柏納李公告這個新系統，CERN 以外的人也能用了。', x: 380, y: 12, w: 390, dark: false }],
          bubbles: [
            { t: '以後全世界\n都能分享了！', x: 10, y: 30, w: 190, fs: 21, tail: [92, 230] },
            { t: '也能分享\n謠言……', x: 160, y: 132, w: 150, fs: 21, tail: [220, 236] },
            { t: '所以更要\n查來源。', x: 330, y: 158, w: 150, fs: 21, tail: [340, 252] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .26], hz: .5, far: false, ground: 'paper3' }, shot: '收尾大格：回到今天，阿嬤家巷口，小禾跟阿嬤說查證的結果，阿嬤在群組更正',
          back: [
            { k: 'house', x: 200, y: 313, W: 380, H: 200, roof: 'flat', roofC: 'clay2', f: 'brick3' },
            { k: 'car', x: 690, y: 600, s: .75 }
          ],
          actors: [
            { c: 'v7e5_ama', x: 110, y: 566, s: 1.15, pose: 'hold', expr: 'happy', hold: 'phone', look: .6 },
            { c: 'he', x: 280, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .6 },
            { c: 'kai', x: 460, y: 570, s: 1.2, pose: 'think', expr: 'worry', sweat: 1, flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '阿嬤，我查了官網：\n搖搖車沒有漲價。', x: 170, y: 60, w: 280, fs: 22, tail: [284, 368] },
            { t: '那我在群組說：\n這則是假的。', x: 14, y: 210, w: 210, fs: 22, tail: [110, 352] },
            { t: '可是我已經\n先坐了一次……', x: 420, y: 200, w: 200, fs: 21, tail: [462, 360] },
            { t: '嗶嗶——\n下一站，\n回家！', x: 620, y: 140, w: 146, kind: 'car', fs: 22, tail: [690, 492] }
          ],
          caption: [{ t: '下一話：回家的路：一個地球', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '網際網路', t: '把世界各地的電腦連起來的「路」。1969 年美國先連起四台電腦，後來一點一點接到全世界。' },
      { h: '全球資訊網', t: '1989 年，在瑞士日內瓦 CERN 工作的英國科學家提姆・柏納李，想出用「連結」把一頁頁網頁串起來。1990 年底第一個網站開張，1991 年 8 月公告給 CERN 以外的人。' },
      { h: '送給全世界', t: '1993 年 4 月 30 日，CERN 把網頁的軟體免費讓大家使用。網站從 1993 年底的 500 多個，到 1994 年底變成 1 萬個。' },
      { h: '查來源三招', t: '消息傳得快，假的也傳得快。① 自己查：課本、官網、圖書館 ② 問大人或老師 ③ 多找一個地方對答案。AI 給的答案也一樣要查。' },
      { h: '保護隱私', t: '名字、地址、學校、照片、密碼，都不要隨便貼上網路或告訴陌生人。' }
    ],
    map: {
      bounds: { lon: [-20, 150], lat: [-10, 65] },
      cap: '紅點是日內瓦的 CERN。紅色虛線表示：網路把很遠的地方連起來，訊息一下子就能傳到臺灣。海岸線是簡化的畫法。',
      alt: '世界地圖：日內瓦在歐洲（紅點），一條紅色虛線連到東邊很遠的臺北',
      taiwan: false,
      routes: [{ pts: [[46.2, 6.14], [50, 40], [45, 80], [32, 110], [25.03, 121.56]] }],
      labels: [
        { t: '歐洲', lat: 55, lon: 20, size: 22, f: 'g9' },
        { t: '亞洲', lat: 52, lon: 95, size: 24, f: 'g9' },
        { t: '非洲', lat: 10, lon: 20, size: 22, f: 'g9' }
      ],
      cities: [
        { n: '日內瓦', lat: 46.2, lon: 6.14, main: 1, side: 'l' },
        { n: '臺北', lat: 25.03, lon: 121.56, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從網際網路連起第一批電腦，到全球資訊網出現，隔了二十年。',
      items: [
        { y: 1969, when: '西元 1969 年', t: '美國連起\n第一批電腦', side: 'u', w: 150 },
        { y: 1989, when: '1989 年', t: '柏納李寫下\n全球資訊網的構想', side: 'd', w: 200 },
        { y: 1991, when: '西元 1991 年', t: '公告給\n全世界使用', side: 'u', main: 1, w: 150 },
        { y: 2026, when: '今天', t: '你正在\n用網路看漫畫', side: 'u', w: 150 }
      ]
    },
    sources: [
      'CERN〈A short history of the Web〉（1989 年 3 月柏納李寫下提案、為了讓各國大學和研究所的科學家分享資料；1990 年底第一個伺服器和瀏覽器；1991 年 8 月公告；1993 年 4 月 30 日免費開放原始碼；1993 年底 500 多個、1994 年底 1 萬個伺服器）',
      'CERN〈The birth of the Web〉〈Where the web was born〉（英國科學家柏納李；第一個網站 info.cern.ch 放在他的 NeXT 電腦上；CERN 在日內瓦）',
      '倫敦科學博物館〈Happy 25th Birthday World Wide Web!〉與〈Image bank: maths and computing〉（那台 NeXT 電腦是第一台網頁伺服器，貼紙寫著「This machine is a server. DO NOT POWER IT DOWN!!」；1990 年關掉它，全球資訊網就會跟著關掉）',
      '網際網路協會 Internet Society〈Brief History of the Internet〉（1969 年第一批電腦連上 ARPANET、1983 年改用 TCP/IP）',
      '本站「小朋友學 AI：AI 會唬爛」一課（查證三招：自己查、問大人、多找一個地方對答案）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '全球資訊網（用連結串起網頁）是在哪裡想出來的？', opts: ['日內瓦的 CERN', '新竹的科學園區', '華盛頓的紀念堂', '休士頓的控制中心'], a: 0, why: '1989 年，提姆・柏納李在瑞士日內瓦的 CERN 寫下全球資訊網的構想。' },
      { id: 'q2', d: 1, type: 'tf', q: '網際網路和全球資訊網是完全一樣的東西。', a: false, why: '不一樣。網際網路是把電腦連起來的「路」；全球資訊網是路上用連結串起來的一頁頁「網頁」。' },
      { id: 'q3', d: 2, type: 'match', q: '把每一招查證方法，和它的例子配成一對。', pairs: [['自己查', '翻課本、看官網、去圖書館'], ['問大人', '請老師或爸媽一起看'], ['多找一個地方', '換一個可靠的來源對答案']], why: '三招一起用：自己查、問信得過的大人、再多找一個地方對答案。' },
      { id: 'q4', d: 2, type: 'mc', q: '下面哪一個「可以」放心貼到網路上？', opts: ['沒寫名字的恐龍畫', '家裡的地址和電話', '學校名字和班級座號', '遊戲帳號的密碼'], a: 0, why: '地址、電話、學校、密碼都是個人資料，貼上網可能被壞人利用；沒有寫名字的畫可以分享。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「群組裡很多人都在轉傳，所以這個消息一定是真的。」根據這一話，哪個說法最正確？', opts: ['不對，轉傳的人多不代表是真的，要查來源', '對，轉傳的人越多，消息就越不可能是假的', '對，只要是阿嬤傳的消息就一定是真的', '不對，網路上所有的消息全部都是假的'], a: 0, why: '假消息也可能被很多人轉傳。要看是誰說的、去官網或可靠的地方查，再多找一個地方對答案；但也不是網路上的消息全都是假的。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
