/* 世界史漫畫 第 5 冊 革命與工業・第 5 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：法國大革命的影響（海地革命是延伸）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, poly, path, txt, cap, place, both, groundShadow } = K;
    // 一叢甘蔗（原點＝底部中央）
    const cane = (H, n) => { let s = ''; for (let i = 0; i < n; i++) { const dx = (i - (n - 1) / 2) * 16, hh = H * (.8 + (i * 37 % 5) / 20); s += rect(dx - 4, -hh, 8, hh, C.g5); for (let j = 1; j < 5; j++) s += rect(dx - 5, -hh * j / 5, 10, 3, C.g7); s += path(`M${dx} ${-hh} Q${dx - 34} ${-hh - 6} ${dx - 44} ${-hh + 20} Q${dx - 20} ${-hh - 2} ${dx} ${-hh + 8}Z`, C.g7) + path(`M${dx} ${-hh + 10} Q${dx + 34} ${-hh} ${dx + 42} ${-hh + 26} Q${dx + 18} ${-hh + 8} ${dx} ${-hh + 18}Z`, C.g7); } return s; };
    root.ComicArt.extend({
      scenes: {
        // 法國的決定變來變去：三個盒子＋箭頭
        v5e5_steps(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const box = (y, yr, a, b, c) => rect(20, y, w - 40, 150, C.cream, 10) + txt(36, y + 40, yr, 26, c, { a: 'start' }) + txt(36, y + 82, a, 21, C.ink, { a: 'start' }) + txt(36, y + 116, b, 21, C.ink, { a: 'start' });
          s += box(220, '1794 年', '法國宣布：所有殖民地', '都廢除奴隸制度', C.g7);
          s += poly(`${w / 2 - 16},382 ${w / 2 + 16},382 ${w / 2},410`, C.red);
          s += box(420, '1802 年', '拿破崙派軍隊來；杜桑', '被抓走，隔年死在法國', C.red);
          s += poly(`${w / 2 - 16},582 ${w / 2 + 16},582 ${w / 2},610`, C.red);
          s += box(620, '1804 年', '1 月 1 日，宣布獨立，', '國名叫「海地」', C.g7);
          return { bg: s };
        }
      },
      props: {
        v5e5_cane: x => place(x, cane(x.H || 200, x.n || 5)),
        // 小禾讀的故事書：公主有臉、有名字，旁邊的「僕人」只是灰色剪影
        v5e5_story: x => place(x, groundShadow(0, 2, 170, 10) + path('M0 -10 Q-80 -30 -170 -14 L-170 -230 Q-80 -246 0 -226Z', C.cream) + path('M0 -10 Q80 -30 170 -14 L170 -230 Q80 -246 0 -226Z', C.paper2) + rect(-3, -228, 6, 218, C.paper3) +
          circ(-90, -170, 18, C.skin) + poly('-120,-60 -60,-60 -76,-150 -104,-150', C.red) + path('M-112 -176 Q-90 -204 -68 -176 L-74 -186 L-90 -196 L-106 -186Z', C.gold) + txt(-90, -40, '公主', 20, C.wood) +
          circ(-30, -160, 14, C.basalt3) + rect(-42, -146, 24, 80, C.basalt3, 6) + txt(-30, -40, '僕人', 18, C.basalt3) +
          [0, 1, 2, 3, 4, 5, 6].map(i => rect(30, -200 + i * 24, i % 3 === 2 ? 70 : 110, 5, C.paper3)).join('')),
        // 一面旗子揮舞的人群用 crowd，這裡加一面簡單的鼓
        v5e5_drum: x => place(x, groundShadow(0, 2, 30, 5) + both(rect(-26, -56, 52, 56, C.wood, 4), 'cm-warm') + ell(0, -56, 26, 8, C.cream) + cap(-26, -40, 26, -16, 3, C.gold) + cap(-26, -16, 26, -40, 3, C.gold))
      },
      cast: {
        v5e5_marie: { name: '瑪莉安（虛構）', skin: 'skinC', top: 'gold', skirt: 'blue', hair: 'curly', hat: 'band', hatC: 'red', r: 22, k: .93 },
        v5e5_toussaint: { name: '杜桑・盧維杜爾', real: 1, skin: 'skinC', top: 'blue', bottom: 'cream', leg: 'ink', shoe: 'ink', hair: 'short', hat: 'tricorn', r: 19, k: 1.18 },
        v5e5_man: { name: '一起爭取自由的人', skin: 'skinB', top: 'cream', bottom: 'wood', leg: 'skinB', shoe: 'wood', hair: 'short', r: 19, k: 1.14 },
        v5e5_woman: { name: '一起爭取自由的人', skin: 'skinC', robe: 'g5', trim: 'gold', hair: 'curly', hat: 'band', hatC: 'gold', r: 19, k: 1.08 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v5e5 = {
    id: 'v5e5', vol: '第 5 冊 革命與工業', volNo: 5, ep: 5, title: '甘蔗田裡的自由', next: '冒煙的工廠和第一列火車',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！故事書裡的那個人，現在有名字了。',
    note: '阿凱、小禾、瑪莉安和她的家人、慶祝獨立的人們都是虛構的角色。杜桑・盧維杜爾是真實人物，他的話改編自 1793 年 8 月 29 日的公告，不是原話；流傳下來的畫像大多是他過世以後才畫的，這裡的樣子是想像圖。戈納伊夫慶祝的畫面、甘蔗田都是想像圖。海地革命打了十多年仗，經過很複雜，這裡只講原因和影響。',
    curriculum: '國中社會會再學到：法國大革命的影響（海地革命是延伸）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'g7' },
      back: [
        { k: 'v5e5_cane', x: 110, y: 950, H: 260, n: 6 },
        { k: 'palm', x: 700, y: 900, H: 300 },
        { k: 'mountain', x: 640, y: 860, W: 300, H: 150, f: 'g5', f2: 'g7' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'g3', hz: .78, window: [.4, .08, .2, .4], winC: 'sky' }, shot: '中景：圖書館的兒童區，小禾在讀故事書',
          back: [{ k: 'shelf', x: 90, y: 266, W: 150, H: 220, seed: 4 }, { k: 'shelf', x: 700, y: 266, W: 150, H: 220, seed: 9 }],
          actors: [
            { c: 'he', x: 300, y: 330, s: 1.05, pose: 'hold', expr: 'think', hold: 'book', look: .6 },
            { c: 'kai', x: 520, y: 334, s: 1, pose: 'stand', expr: 'smug', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '故事書裡的「僕人」，\n都沒有名字耶。', x: 30, y: 16, w: 290, fs: 24, tail: [300, 150] },
            { t: '僕人只是\n背景啦！', x: 400, y: 20, w: 170, fs: 24, tail: [516, 150] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'flat', sceneOpt: { c: 'g2' }, shot: '大格：攤開的故事書，公主有名字，僕人只是灰色剪影',
          back: [{ k: 'v5e5_story', x: 262, y: 420, s: 1.15 }],
          actors: [
            { c: 'he', x: 120, y: 690, s: 1.15, pose: 'pointUp', expr: 'worry', look: .5 },
            { c: 'kai', x: 410, y: 690, s: 1.2, pose: 'think', expr: 'think', flip: 1, look: .5 }
          ],
          bubbles: [
            { t: '每個人都有名字，\n也有自己的故事吧？', x: 14, y: 12, w: 260, fs: 23 },
            { t: '……那他的故事\n是什麼？', x: 300, y: 40, w: 210, fs: 23 }
          ] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1804 }, shot: '小格特寫：圖書館門口的搖搖車，數字盤停在西元 1804',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '圖書館門口\n也有搖搖車！\n西元 1804！', x: 18, y: 410, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#CFE0D8', sun: [.8, .12], hz: .5, far: 'g5', ground: 'sand', near: 'g5' }, shot: '滿版遠景：海邊的城鎮戈納伊夫，遠山、棕櫚樹，人們在慶祝',
          back: [
            { k: 'mountain', x: 200, y: 520, W: 420, H: 200, f: 'g5', f2: 'g7' },
            { k: 'mountain', x: 600, y: 520, W: 380, H: 160, f: 'g3', f2: 'g5' },
            { k: 'palm', x: 70, y: 640, H: 260 },
            { k: 'house', x: 330, y: 600, W: 150, H: 100, roof: 'flat', roofC: 'clay2', f: 'cream' },
            { k: 'house', x: 520, y: 600, W: 160, H: 110, roof: 'flat', roofC: 'clay2', f: 'brick3' },
            { k: 'palm', x: 730, y: 650, H: 240 },
            { k: 'crowd', x: 420, y: 690, n: 16, W: 620, s: .85, op: .75 },
            { k: 'flag', x: 300, y: 670, H: 200, f: 'blue' },
            { k: 'flag', x: 560, y: 680, H: 220, f: 'red' },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 222 年前，海地的戈納伊夫', en: 'GONAÏVES, HAITI · 1804', x: 0, y: 18 },
            { t: '1804 年 1 月 1 日。海地在加勒比海的大島上（島的東邊是今天的多明尼加）。這一天，這裡宣布獨立。', x: 0, y: 112, w: 450, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：海地。\n免費附贈翻譯功能。', x: 14, y: 716, w: 290, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '大家在\n慶祝什麼？', x: 340, y: 670, w: 180, tail: [462, 760] },
            { t: '有人在唱歌、\n打鼓！', x: 572, y: 704, w: 190, tail: [624, 794], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .45, far: 'g5', ground: 'g3' }, shot: '中景：甘蔗田邊，阿凱咬了一口甘蔗，瑪莉安的表情變了',
          back: [{ k: 'v5e5_cane', x: 120, y: 260, H: 160, n: 6 }, { k: 'v5e5_cane', x: 680, y: 250, H: 170, n: 6 }, { k: 'v5e5_cane', x: 420, y: 230, H: 140, n: 5 }],
          actors: [
            { c: 'kai', x: 220, y: 440, s: 1.05, pose: 'eat', expr: 'chew', look: .5 },
            { c: 'v5e5_marie', x: 590, y: 452, s: 1.1, pose: 'stand', expr: 'worry', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '這根甘蔗好甜！', x: 30, y: 40, w: 220, tail: [216, 250] },
            { t: '以前，我外婆每天\n被逼著在這裡種甘蔗，\n沒有薪水。', x: 400, y: 20, w: 300, fs: 23, tail: [580, 250] }
          ],
          sfx: [{ t: '喀滋', x: 300, y: 200, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：瑪莉安抬頭挺胸',
          actors: [{ c: 'v5e5_marie', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'happy', look: -.2 }],
          bubbles: [{ t: '我叫瑪莉安。\n從今天起，\n我們都是自由的人！', x: 14, y: 50, w: 274, fs: 24, tail: [150, 290] }],
          tag: { t: '住在戈納伊夫：瑪莉安（虛構）', left: 8 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .4, far: false, ground: 'g3', sky: '#D9D2BC' }, shot: '知識格：甘蔗田和遠方的船',
          back: [{ k: 'v5e5_cane', x: 90, y: 556, H: 230, n: 6 }, { k: 'v5e5_cane', x: 400, y: 556, H: 210, n: 6 }],
          caption: [
            { t: '這裡以前叫「聖多明哥」，是法國最重要\n的殖民地，大農場種甘蔗、咖啡。', x: 0, y: 14, w: 464 },
            { t: '大約 50 萬人被當成奴隸。他們大多是從非洲被抓上船、運過大西洋來的。', x: 0, y: 112, w: 464, dark: false }
          ],
          bubbles: [{ t: '沒有薪水，\n也不能離開？', x: 140, y: 250, w: 200, fs: 24 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#C9D4C4', sun: false, hz: .55, far: 'g5', ground: 'g3', near: 'g5' }, shot: '滿版回憶：山邊，杜桑・盧維杜爾騎著馬，和大家一起爭取自由（不畫打鬥）',
          back: [
            { k: 'mountain', x: 180, y: 570, W: 460, H: 240, f: 'g5', f2: 'g7' },
            { k: 'mountain', x: 620, y: 570, W: 420, H: 200, f: 'g3', f2: 'g5' },
            { k: 'crowd', x: 420, y: 700, n: 14, W: 640, s: .9, op: .7 },
            { k: 'horse', x: 404, y: 700, s: 1, f: 'wood' },
            { k: 'v5e5_drum', x: 120, y: 1000, s: 1.2 }
          ],
          actors: [
            { c: 'v5e5_toussaint', x: 400, y: 602, s: 1, pose: 'ride', expr: 'calm', look: .2, noShadow: true },
            { c: 'v5e5_man', x: 200, y: 1020, s: 1.25, pose: 'raise', expr: 'shout', look: .5 },
            { c: 'v5e5_woman', x: 620, y: 1024, s: 1.25, pose: 'fists', expr: 'happy', flip: 1, look: .5 }
          ],
          caption: [
            { t: '瑪莉安說的故事：1791 年 8 月，\n被奴役的人起來反抗。', x: 16, y: 16, w: 470 },
            { t: '杜桑・盧維杜爾生下來也是奴隸，後來得到自由，成為大家的領袖。1793 年，他開始用「盧維杜爾」這個名字。', x: 16, y: 120, w: 470, dark: false }
          ],
          bubbles: [
            { t: '我要讓自由和平等，\n在這片土地上實現！', x: 300, y: 340, w: 290, fs: 24, tail: [404, 400] },
            { t: '我們是人，\n不是別人的東西！', x: 20, y: 640, w: 240, fs: 24, tail: [200, 780] },
            { t: '我們的孩子，\n要生下來就自由！', x: 520, y: 640, w: 250, fs: 24, tail: [620, 780] }
          ],
          tag: { t: '杜桑的話：改編自 1793 年 8 月 29 日的公告', left: 10, top: 300 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v5e5_steps', shot: '細長知識格：1794、1802、1804 年發生的事',
          actors: [{ c: 'v5e5_marie', x: 80, y: 1034, s: 1.1, pose: 'pointUp', expr: 'calm', look: .6 }],
          caption: [{ t: '法國的決定，\n變來變去……', x: 0, y: 14, w: 240 }],
          bubbles: [{ t: '大家不想\n回到從前，\n就爭取獨立！', x: 150, y: 830, w: 186, fs: 22, tail: [112, 880] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：海地革命的意義',
          caption: [{ t: '海地革命為什麼重要？', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '1804 年，曾經被奴役的人\n自己建立了國家：海地。' },
            { icon: 'question', y: 314, t: '法國《人權宣言》說人人平等，\n一開始卻沒有包括\n殖民地被奴役的人。' },
            { icon: 'star', y: 586, t: '聯合國教科文組織訂了一個\n紀念日，記住 1791 年 8 月\n這場起義和廢除奴隸貿易。' }
          ],
          bubbles: [{ t: '平等，\n要包括每一個人。', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'sea', sceneOpt: { sky: '#E3C9A0', hz: .5, sun: [.8, .3], far: 'g5' }, shot: '矮寬格：海邊，小禾問瑪莉安外婆的名字',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'think', expr: 'think', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'worry', hold: 'notebook', look: .8 },
            { c: 'v5e5_marie', x: 450, y: 392, s: .95, pose: 'hold', expr: 'happy', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '瑪莉安，\n你外婆叫什麼名字？', x: 20, y: 30, w: 260, fs: 23, tail: [196, 216] },
            { t: '她叫愛蓮娜。\n我們都記得——\n每個人都有名字。', x: 480, y: 30, w: 250, fs: 23, tail: [460, 210] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E3C9A0', sun: [.84, .3], hz: .55, far: 'g5', ground: 'sand', near: 'g5' }, shot: '收尾大格：傍晚的海邊，準備出發',
          back: [{ k: 'palm', x: 560, y: 360, H: 260 }, { k: 'car', x: 640, y: 600, s: .8 }],
          actors: [
            { c: 'v5e5_marie', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '別忘了\n我們的故事喔！', x: 14, y: 196, w: 220, fs: 22, tail: [110, 340] },
            { t: '回去我要幫\n書裡的僕人取名字、\n寫他的故事！', x: 234, y: 156, w: 240, fs: 22, tail: [284, 336] },
            { t: '這次你\n說得很好。', x: 478, y: 216, w: 150, fs: 22, tail: [478, 372] },
            { t: '嗶嗶——\n下一站，\n曼徹斯特！', x: 630, y: 24, w: 146, kind: 'car', fs: 22, tail: [660, 480] }
          ],
          caption: [{ t: '下一話：冒煙的工廠和第一列火車', x: 240, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '甘蔗園和奴隸', t: '海地以前叫聖多明哥，是法國最重要的殖民地，大農場種甘蔗和咖啡。大約 50 萬人被當成奴隸，大多是從非洲被抓上船、運過大西洋來的，沒有薪水，也不能離開。' },
      { h: '1791 年的起義', t: '1791 年 8 月，被奴役的人起來反抗。今天聯合國教科文組織訂的「紀念奴隸貿易和廢除奴隸貿易國際日」（8 月 23 日），就是紀念這場起義。' },
      { h: '杜桑・盧維杜爾', t: '他生下來是奴隸，後來得到自由，成為起義的領袖。1794 年法國宣布廢除所有殖民地的奴隸制度；1802 年拿破崙派軍隊來，杜桑被抓到法國，1803 年死在監獄裡。' },
      { h: '海地獨立', t: '1804 年 1 月 1 日，德薩林等將領在戈納伊夫宣布獨立，國名叫「海地」（借用島上原住民的名字）。這是曾經被奴役的人自己建立的國家。' },
      { h: '平等要包括每一個人', t: '法國《人權宣言》說人人平等，一開始卻沒有包括殖民地被奴役的人；海地的人用行動讓「人權」包括了他們自己。' }
    ],
    map: {
      world: 1, bounds: { lon: [-90, 10], lat: [-2, 54] },
      cap: '紅點是海地的戈納伊夫。紅色虛線：很多人從西非被抓上船、運過大西洋；細的虛線：甘蔗做的糖和咖啡運回法國。（路線是簡化畫法，海岸線是今天的樣子。）',
      alt: '大西洋地圖：左邊是加勒比海的海地，右上是法國巴黎，右下是西非，紅色虛線從西非畫到海地，再從海地畫到法國',
      routes: [
        { pts: [[12, -17], [14, -40], [18, -62], [19.4, -72]] },
        { pts: [[20, -70], [32, -50], [44, -20], [47.2, -2.5]], w: 3 }
      ],
      labels: [
        { t: '大西洋', lat: 30, lon: -42, size: 26, f: 'cream' },
        { t: '非洲', lat: 18, lon: -2, size: 24, f: 'g9' },
        { t: '西非', lat: 9, lon: -10, size: 20, f: 'red' },
        { t: '歐洲', lat: 41, lon: -2, size: 22, f: 'g9' },
        { t: '北美洲', lat: 42, lon: -84, size: 22, f: 'g9' }
      ],
      cities: [
        { n: '戈納伊夫（海地）', lat: 19.45, lon: -72.69, main: 1, side: 'r', dy: 20 },
        { n: '巴黎', lat: 48.86, lon: 2.35, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從海地獨立到美國在全國廢除奴隸制度，又過了 61 年。',
      items: [
        { y: 1791, when: '西元 1791 年', t: '被奴役的人\n起來反抗', side: 'u', w: 150 },
        { y: 1804, when: '西元 1804 年', t: '海地宣布獨立', side: 'd', main: 1, w: 170 },
        { y: 1865, when: '西元 1865 年', t: '美國廢除\n奴隸制度', side: 'u', w: 150 },
        { y: 2026, when: '今天', t: '每年 8 月 23 日\n記住這段歷史', side: 'd', w: 186 }
      ]
    },
    sources: [
      'George Mason 大學 RRCHNM 與 CUNY《Liberty, Equality, Fraternity》〈Slavery and the Haitian Revolution〉（聖多明哥約 50 萬奴隸、3.2 萬白人、2.8 萬自由的有色人；甘蔗、咖啡；1791 年 8 月 22 日起義；1794 年 2 月 4 日法國廢除所有殖民地奴隸制；杜桑曾是奴隸；1802 年拿破崙恢復奴隸制、派大軍、抓走杜桑；1804 年建立海地）',
      '同上〈The Enlightenment and Human Rights〉（1789 年《人權宣言》沒有提到奴隸）',
      '法國國家圖書館 BnF〈Toussaint Louverture: Destiny and Contradictions〉（約 1740 年生為奴隸；舊制度時就得到自由；1793 年 8 月用盧維杜爾這個名字；1802 年 6 月被抓、送到法國；1803 年 4 月死於汝拉山區的茹堡）',
      '牛津大學出版社教學資源〈Speeches and Letters of Toussaint Louverture〉（1793 年 8 月 29 日的公告；1777 年得到自由；要讓自由和平等在聖多明哥實現）',
      'OUPblog，Philippe R. Girard〈The Haitian Declaration of Independence〉（1804 年 1 月 1 日德薩林等將領在戈納伊夫宣讀獨立宣言；國名「海地」借自島上的原住民）',
      '聯合國新聞〈All of humanity is part of this story〉（紀念奴隸貿易和廢除奴隸貿易國際日，紀念 1791 年 8 月海地被奴役的人起義，1804 年獨立）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '海地獨立以前，是哪一個國家的殖民地？', opts: ['法國', '英國', '西班牙', '荷蘭'], a: 0, why: '海地以前叫聖多明哥，是法國最重要的殖民地。' },
      { id: 'q2', d: 1, type: 'tf', q: '杜桑・盧維杜爾生下來也是被奴役的人。', a: true, why: '對！杜桑生下來是奴隸，後來得到自由，成為起義的領袖。' },
      { id: 'q3', d: 2, type: 'mc', q: '聖多明哥的大農場，主要種什麼？', opts: ['甘蔗和咖啡', '稻米和茶葉', '小麥和葡萄', '蘋果和馬鈴薯'], a: 0, why: '聖多明哥的大農場主要種甘蔗和咖啡，靠被奴役的人來做工。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['被奴役的人起來反抗', '法國宣布廢除所有殖民地的奴隸制度', '拿破崙派軍隊來，杜桑被抓', '海地宣布獨立'], why: '起義是 1791 年；法國廢除奴隸制度是 1794 年；拿破崙派兵、杜桑被抓是 1802 年；海地獨立是 1804 年。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「法國的《人權宣言》寫了人人平等，所以那時法國殖民地裡早就沒有奴隸了。」根據這一話，哪個說法最正確？', opts: ['不對，宣言一開始沒包括被奴役的人', '對，宣言一通過，殖民地的奴隸就全部自由', '對，殖民地的人本來就都不是奴隸', '不對，海地從來都不是法國的殖民地'], a: 0, why: '《人權宣言》是 1789 年寫的，可是一開始並沒有包括殖民地被奴役的人；1791 年他們起來反抗，1804 年才建立了自己的國家海地。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
