/* 世界史漫畫 第 5 冊 革命與工業・第 3 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：美國獨立革命。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, poly, path, txt, place, both, groundShadow } = K;
    root.ComicArt.extend({
      props: {
        // 教室的黑板（原點＝黑板下緣中央）：班長自己寫的班規
        v5e3_board: x => {
          const W = x.W || 300, H = x.H || 200;
          let s = rect(-W / 2 - 8, -H - 8, W + 16, H + 16, C.wood, 4) + rect(-W / 2, -H, W, H, C.g8);
          (x.lines || []).forEach((t, i) => { s += txt(-W / 2 + 18, -H + 40 + i * 38, t, i ? 22 : 28, i ? C.cream : C.gold, { a: 'start' }); });
          return place(x, s + rect(-W / 2, -2, W, 8, C.wood));
        },
        // 賓夕法尼亞議會大樓（今天的獨立廳）：紅磚樓＋白色鐘塔（簡化）
        v5e3_hall: x => {
          const W = 440, H = 170;
          let s = groundShadow(0, 3, W * .55, 10) + both(rect(-W / 2, -H, W, H, '#A65A3F'), 'cm-warm');
          s += rect(-W / 2 - 6, -H - 10, W + 12, 12, C.cream) + poly(`${-W / 2},${-H - 10} 0,${-H - 50} ${W / 2},${-H - 10}`, C.basalt2);
          for (let r = 0; r < 2; r++) for (let i = 0; i < 8; i++) { if (r === 1 && i === 3) continue; s += rect(-W / 2 + 22 + i * 52, -H + 24 + r * 74, 26, 44, C.cream, 2) + rect(-W / 2 + 25 + i * 52, -H + 27 + r * 74, 20, 38, C.g9); }
          s += path(`M-22 0 L-22 -50 Q0 -70 22 -50 L22 0Z`, C.ink);
          s += both(rect(-36, -H - 120, 72, 120, '#A65A3F')) + rect(-30, -H - 200, 60, 80, C.cream) + rect(-22, -H - 260, 44, 60, C.cream) + poly(`-22,${-H - 260} 0,${-H - 320} 22,${-H - 260}`, C.cream) + circ(0, -H - 160, 16, C.ink) + circ(0, -H - 160, 12, C.cream);
          return place(x, s);
        },
        // 手壓印刷機
        v5e3_press: x => place(x, groundShadow(0, 2, 90, 8) + rect(-70, -230, 18, 230, C.wood) + rect(52, -230, 18, 230, C.wood) + rect(-80, -246, 160, 22, C.wood, 3) + rect(-6, -224, 12, 70, C.ink) + rect(-50, -160, 100, 18, C.ink, 3) + rect(-90, -100, 180, 16, C.wood, 3) + rect(-60, -116, 120, 16, C.cream) + rect(-70, -84, 14, 84, C.wood) + rect(56, -84, 14, 84, C.wood) + rect(6, -214, 70, 8, C.ink, 4) + circ(76, -210, 9, C.red)),
        // 一張印好的宣言傳單
        v5e3_sheet: x => place(x, both(rect(-40, -110, 80, 110, C.cream, 2)) + rect(-28, -96, 56, 8, C.ink) + [0, 1, 2, 3, 4, 5, 6].map(i => rect(-30, -78 + i * 10, i % 3 === 2 ? 36 : 60, 3, C.basalt3)).join(''))
      },
      cast: {
        v5e3_leader: { name: '班長（虛構）', skin: 'skin', top: 'cream', bottom: 'g7', leg: 'skin', shoe: 'ink', hair: 'short', acc: ['glasses'], stripe: 'g7', r: 22, k: .97 },
        v5e3_elijah: { name: '以利亞（虛構）', skin: 'skin', top: 'clay3', bottom: 'g9', leg: 'cream', shoe: 'ink', hair: 'short', hairC: 'wood', hat: 'tricorn', r: 22, k: .95 },
        v5e3_jefferson: { name: '傑佛遜', real: 1, skin: 'skin', top: 'clay2', bottom: 'g9', leg: 'basalt3', shoe: 'ink', hair: 'curly', hairC: '#C27A4E', r: 19, k: 1.26 },
        v5e3_franklin: { name: '富蘭克林', real: 1, skin: 'skin', top: 'wood', bottom: 'wood', leg: 'paper3', shoe: 'ink', hair: 'long', hairC: 'paper3', acc: ['glasses'], r: 20, k: 1.1 },
        v5e3_seller: { name: '商店老闆', skin: 'skinB', top: 'g5', bottom: 'wood', leg: 'wood', shoe: 'ink', hair: 'man', hat: 'tricorn', beard: 1, r: 19, k: 1.14 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v5e3 = {
    id: 'v5e3', vol: '第 5 冊 革命與工業', volNo: 5, ep: 3, title: '寫下獨立宣言', next: '巴黎的麵包和人權',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！你的班規可以寫成全班一起通過的版本了。',
    note: '阿凱、小禾、班長、以利亞和商店老闆是虛構的角色；傑佛遜和富蘭克林是真實人物，傑佛遜的話改編自《獨立宣言》，樣子參考後人畫的肖像再簡化。議會大樓、印刷店和會場是想像圖。殖民地的人為什麼要獨立，原因不只稅，歷史學家有不同看法；這裡只講最常被提到的「無代表，不納稅」。',
    curriculum: '國中社會會再學到：美國獨立革命',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'g7' },
      back: [
        { k: 'v5e3_hall', x: 640, y: 900, s: .55 },
        { k: 'v5e3_sheet', x: 130, y: 940, s: 1.4, rot: -6 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'tall2', panels: [
        { scene: 'room', sceneOpt: { wall: 'g2', floor: 'clay3', hz: .8 }, shot: '細長大格：教室裡，班長在黑板寫好自己訂的班規',
          back: [{ k: 'v5e3_board', x: 172, y: 330, W: 316, H: 200, lines: ['班規（班長訂）', '1. 上課不准講話', '2. 午休不准動', '3. 每天幫班長擦黑板'] }],
          actors: [
            { c: 'v5e3_leader', x: 230, y: 650, s: 1.05, pose: 'pointUp', expr: 'smug', flip: 1, look: .3 },
            { c: 'kai', x: 100, y: 1030, s: 1.3, pose: 'arg', expr: 'mad', look: .4 },
            { c: 'he', x: 270, y: 1030, s: 1.2, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '班規我訂好了，\n大家照做！', x: 90, y: 360, w: 230, fs: 24, tail: [216, 470] },
            { t: '又沒問我們，\n憑什麼要守？', x: 10, y: 596, w: 210, fs: 24, kind: 'shout', tail: [100, 790] },
            { t: '第三條\n太扯了！', x: 196, y: 720, w: 140, fs: 23, tail: [270, 830] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 8 } },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1776 }, shot: '大格特寫：福利社旁邊也有搖搖車，阿凱投下 10 元，數字盤停在 1776',
          props: [{ k: 'coin', x: 211, y: 34, r: 30, rot: 12 }],
          actors: [{ c: 'kai', x: 230, y: 1250, s: 2.2, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '福利社旁邊\n也有搖搖車？\n西元 1776！', x: 30, y: 690, w: 250, fs: 25, tail: [190, 820] }],
          sfx: [{ t: '叮！', x: 270, y: 8, fs: 50, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#CFDCE0', sun: [.84, .12], hz: .56, far: 'g3', ground: 'paper3', near: 'g5' }, shot: '滿版遠景：費城的紅磚議會大樓和白色鐘塔，門口有人在等消息',
          back: [
            { k: 'tree', x: 70, y: 590, H: 230 },
            { k: 'v5e3_hall', x: 430, y: 590, s: 1 },
            { k: 'tree', x: 740, y: 596, H: 210 },
            { k: 'crowd', x: 430, y: 660, n: 10, W: 560, s: .8, op: .6 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 250 年前，費城', en: 'PHILADELPHIA · 1776', x: 0, y: 18 },
            { t: '費城在今天的美國東岸。那時候它屬於英國在北美洲的 13 個殖民地。', x: 0, y: 112, w: 430, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：費城。\n免費附贈翻譯功能。', x: 14, y: 716, w: 290, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好大的\n紅磚房子！', x: 340, y: 670, w: 180, tail: [462, 760] },
            { t: '門口好多人\n在等消息。', x: 572, y: 704, w: 190, tail: [624, 794], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: false, ground: 'paper3' }, shot: '中景：雜貨店前，阿凱想買茶，大家都瞪他',
          back: [{ k: 'house', x: 640, y: 240, W: 240, H: 170, roof: 'flat', roofC: 'wood', f: 'brick3' }, { k: 'crate', x: 520, y: 420 }, { k: 'barrel', x: 600, y: 424 }],
          actors: [
            { c: 'kai', x: 200, y: 440, s: 1.05, pose: 'offer', expr: 'grin', hold: 'coin', look: .5 },
            { c: 'v5e3_seller', x: 400, y: 446, s: 1, pose: 'arg', expr: 'mad', flip: 1, look: .6 },
            { c: 'v5e3_elijah', x: 690, y: 452, s: 1.05, pose: 'shout', expr: 'yell', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '好渴！老闆，\n來一杯英國紅茶！', x: 20, y: 30, w: 250, tail: [204, 240] },
            { t: '噓！大家在\n拒買英國的茶！', x: 470, y: 20, w: 230, kind: 'shout', fs: 24, tail: [676, 246] }
          ],
          sfx: [{ t: '瞪——', x: 300, y: 140, fs: 40, rot: -6 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：印刷店學徒以利亞',
          actors: [{ c: 'v5e3_elijah', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'smug', hold: 'letter', look: -.2 }],
          bubbles: [{ t: '我在印刷店當學徒，\n印報紙和傳單！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 290] }],
          tag: { t: '印刷店學徒：以利亞（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '知識格：殖民地的人為什麼不滿',
          back: [{ k: 'crate', x: 340, y: 540, s: 1.4 }, { k: 'v5e3_sheet', x: 420, y: 540, s: .8 }],
          actors: [{ c: 'v5e3_elijah', x: 110, y: 548, s: 1.1, pose: 'fists', expr: 'mad', look: .4 }],
          caption: [
            { t: '英國國會向殖民地收稅：\n1765 年的印花稅、1773 年的茶稅……', x: 0, y: 14, w: 464 },
            { t: '「無代表，不納稅」：國會裡沒有我們選的代表，就不該收我們的稅。', x: 0, y: 108, w: 464, dark: false }
          ],
          bubbles: [{ t: '1773 年，有人把\n一箱一箱的茶\n倒進波士頓港！', x: 170, y: 220, w: 250, fs: 23, tail: [130, 370] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'room', sceneOpt: { wall: 'cream', floor: 'wood', hz: .66, window: [.06, .08, .14, .34], winC: 'sky' }, shot: '滿版：議會大樓裡，大陸會議通過《獨立宣言》，傑佛遜拿著草稿',
          back: [
            { k: 'crowd', x: 400, y: 690, n: 14, W: 700, s: .9, op: .55 },
            { k: 'table', x: 470, y: 700, W: 380 }
          ],
          actors: [
            { c: 'v5e3_franklin', x: 560, y: 690, s: .95, pose: 'stand', expr: 'smug', flip: 1, look: .4 },
            { c: 'v5e3_jefferson', x: 300, y: 690, s: 1, pose: 'hold', expr: 'calm', hold: 'scroll', look: .2 },
            { c: 'v5e3_elijah', x: 110, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'awe', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [{ t: '1776 年 7 月 4 日，大陸會議通過《獨立宣言》。\n草稿主要是傑佛遜寫的。', x: 16, y: 16, w: 520 }],
          bubbles: [
            { t: '人人生而平等，\n都有生命、自由、\n追求幸福的權利。', x: 300, y: 150, w: 260, fs: 24, tail: [304, 420] },
            { t: '人人平等！\n跟我們班規不一樣！', x: 270, y: 604, w: 250, fs: 23, tail: [452, 790] },
            { t: '寫得\n好漂亮……', x: 600, y: 700, w: 160, fs: 24, tail: [650, 800] }
          ],
          tag: { t: '傑佛遜的話：改編自《獨立宣言》', left: 10, top: 112 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .86 }, shot: '細長格：當天晚上，印刷店連夜印宣言',
          back: [{ k: 'v5e3_press', x: 200, y: 700, s: 1.1 }, { k: 'v5e3_sheet', x: 70, y: 900, rot: -8 }, { k: 'v5e3_sheet', x: 290, y: 880, rot: 6, s: .9 }],
          actors: [{ c: 'v5e3_elijah', x: 170, y: 1034, s: 1.15, pose: 'carry', expr: 'grin', look: .4, sweat: 1 }],
          caption: [{ t: '7 月 4 日晚上，\n印刷商鄧拉普連夜\n印出宣言。今天\n知道的只剩 26 張。', x: 0, y: 14, w: 290 }],
          bubbles: [{ t: '印好就送到\n每一個殖民地！', x: 100, y: 690, w: 230, fs: 23, tail: [190, 800] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：宣言寫了什麼、沒做到什麼',
          caption: [{ t: '宣言寫了什麼？', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '人人生而平等，有生命、\n自由、追求幸福的權利。' },
            { icon: 'scale', y: 314, t: '政府的權力要經過人民同意；\n政府破壞這些權利，人民\n可以改變它。' },
            { icon: 'question', y: 586, t: '可是：寫宣言的傑佛遜，\n一生奴役了六百多人；\n那時還有幾十萬人是奴隸。' }
          ],
          bubbles: [{ t: '「人人」裡面，\n為什麼沒有他們？', x: 24, y: 896, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .7, far: false, ground: 'paper3', sky: '#D9D2BC' }, shot: '矮寬格：印刷店門口，三個人看著宣言想事情',
          back: [{ k: 'house', x: 680, y: 290, W: 200, H: 170, roof: 'flat', roofC: 'wood', f: 'brick3' }],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'think', expr: 'think', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'worry', hold: 'notebook', look: .8 },
            { c: 'v5e3_elijah', x: 380, y: 392, s: .95, pose: 'hold', expr: 'worry', hold: 'letter', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '寫得出來，\n不代表做得到。', x: 12, y: 30, w: 210, fs: 23, tail: [100, 200] },
            { t: '要等多久\n才做得到？', x: 240, y: 20, w: 170, fs: 23, tail: [200, 210] },
            { t: '……我也不知道。\n可是寫下來了，\n就能拿來要求。', x: 440, y: 20, w: 230, fs: 23, tail: [384, 216] }
          ],
          caption: [{ t: '後來：美國到 1865 年，\n才在全國廢除奴隸制度。', x: 460, y: 290, w: 310, dark: false }] },
        { scene: 'land', sceneOpt: { sky: '#E3C9A0', sun: [.8, .3], hz: .55, far: 'g3', ground: 'paper3', near: 'g5' }, shot: '收尾大格：傍晚的費城街上，準備出發',
          back: [
            { k: 'v5e3_hall', x: 560, y: 350, s: .5 },
            { k: 'car', x: 620, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v5e3_elijah', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', hold: 'letter', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '這張宣言送你們，\n帶回去給同學看！', x: 14, y: 180, w: 240, fs: 22, tail: [110, 330] },
            { t: '回去全班一起\n訂班規、寫下來，\n還要真的做到！', x: 262, y: 156, w: 210, fs: 22, tail: [284, 336] },
            { t: '寫下來簡單，\n做到才難喔。', x: 480, y: 216, w: 170, fs: 22, tail: [478, 372] },
            { t: '嗶嗶——\n下一站，\n巴黎！', x: 630, y: 24, w: 146, kind: 'car', fs: 22, tail: [660, 480] }
          ],
          caption: [{ t: '下一話：巴黎的麵包和人權', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '13 個殖民地', t: '1700 年代，英國在北美洲東岸有 13 個殖民地，費城是其中最大的城市之一。' },
      { h: '無代表，不納稅', t: '英國國會向殖民地收稅（1765 年印花稅、1773 年茶稅），可是國會裡沒有殖民地選的代表。1773 年 12 月 16 日，有人把茶倒進波士頓港，衝突越來越大。' },
      { h: '《獨立宣言》', t: '1776 年 7 月 4 日，大陸會議在費城通過《獨立宣言》，草稿主要是傑佛遜寫的。它說人人生而平等，有生命、自由和追求幸福的權利；政府的權力要經過人民同意。' },
      { h: '寫下來，還要做到', t: '宣言說人人平等，那時卻還有幾十萬人是奴隸，傑佛遜自己一生也奴役了六百多人。美國到 1865 年才在全國廢除奴隸制度。' },
      { h: '印出來，傳出去', t: '宣言通過的當晚，印刷商鄧拉普就把它印成傳單送到各地；這批傳單今天知道的只剩 26 張。' }
    ],
    map: {
      world: 1, bounds: { lon: [-86, -62], lat: [30, 47] },
      cap: '紅點是費城。淡綠色是 13 個殖民地大約的範圍（簡化畫法）。波士頓是把茶倒進海裡的地方。（海岸線是今天的樣子，簡化畫法。）',
      alt: '北美洲東岸地圖：費城在中間靠海的地方，北邊有紐約、波士頓，13 個殖民地沿著大西洋排成一長條',
      areas: [{ pts: [[45.2, -71.2], [44.6, -67.2], [42, -70.2], [41, -72], [40.4, -74.2], [38.8, -75.1], [36.9, -76], [35, -75.8], [33.8, -78.2], [32, -80.8], [30.9, -81.6], [31.5, -84.2], [34.8, -83.8], [37, -81.8], [39.7, -80.2], [42, -79.7], [43.4, -79], [45, -74.8]], f: 'g3', op: .7 }],
      labels: [
        { t: '大西洋', lat: 35.5, lon: -70, size: 26, f: 'cream' },
        { t: '13 個殖民地', lat: 35.8, lon: -80.4, size: 20, f: 'g9' }
      ],
      cities: [
        { n: '費城', lat: 39.95, lon: -75.17, main: 1, side: 'l' },
        { n: '紐約', lat: 40.71, lon: -74.0, side: 'r', dy: 6 },
        { n: '波士頓', lat: 42.36, lon: -71.06, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：寫下「人人生而平等」以後，又過了快 90 年，美國才廢除奴隸制度。',
      items: [
        { y: 1773, when: '西元 1773 年', t: '波士頓：\n把茶倒進海裡', side: 'u', w: 160 },
        { y: 1776, when: '西元 1776 年', t: '通過\n《獨立宣言》', side: 'd', main: 1, w: 160 },
        { y: 1865, when: '西元 1865 年', t: '美國全國\n廢除奴隸制度', side: 'u', w: 170 },
        { y: 2026, when: '今天', t: '宣言原件在\n美國國家檔案館', side: 'd', w: 180 }
      ]
    },
    sources: [
      '美國國家檔案館〈The Declaration of Independence: A History〉（大陸會議 1775 年起開會；五人委員會、傑佛遜起草；1776 年 7 月 4 日通過；鄧拉普當晚印出，已知 26 份；8 月 2 日簽署）',
      '美國國家檔案館〈Declaration of Independence: A Transcription〉（「人人生而平等」、生命、自由和追求幸福；政府的權力來自被統治者的同意；政府破壞這些目的時人民有權改變它）',
      'NCpedia／Anchor〈Timeline of Resistance, 1763–1774〉（1765 年印花稅、1766 年廢除、1767 年湯森法案、1773 年茶稅法、1773 年 12 月 16 日波士頓倒茶、1774 年強制法；印花稅大會提出「無代表，不納稅」）',
      'PBS NewsHour〈Thomas Jefferson\'s complicated legacy 250 years after the Declaration of Independence〉（傑佛遜奴役過六百多人；宣言說人人平等時仍有幾十萬人被奴役）',
      '美國國家檔案館〈13th Amendment〉（1865 年 12 月 6 日批准，全國廢除奴隸制度）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '《獨立宣言》是在哪一年通過的？', opts: ['西元 1776 年', '西元 1789 年', '西元 1610 年', '西元 1830 年'], a: 0, why: '1776 年 7 月 4 日，大陸會議在費城通過《獨立宣言》。' },
      { id: 'q2', d: 1, type: 'tf', q: '殖民地的人不滿，是因為英國國會向他們收稅，國會裡卻沒有他們選的代表。', a: true, why: '對！這就是「無代表，不納稅」：沒有自己選的代表，就不該被收稅。' },
      { id: 'q3', d: 2, type: 'mc', q: '《獨立宣言》說，人人都有哪些權利？', opts: ['生命、自由和追求幸福', '可以當國王、收別人的稅', '可以完全不遵守任何法律', '可以免費喝英國茶'], a: 0, why: '宣言說人人生而平等，都有生命、自由和追求幸福的權利。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['英國國會收印花稅', '有人把茶倒進波士頓港', '大陸會議通過《獨立宣言》', '美國在全國廢除奴隸制度'], why: '印花稅是 1765 年；波士頓倒茶是 1773 年；《獨立宣言》是 1776 年；全國廢除奴隸制度是 1865 年。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「《獨立宣言》寫了人人生而平等，所以 1776 年以後，美國就沒有奴隸了。」根據這一話，哪個說法最正確？', opts: ['不對，美國到 1865 年才廢除奴隸制度', '對，宣言一通過，所有的奴隸馬上都自由了', '對，傑佛遜寫完宣言就放了他家所有的人', '不對，宣言裡從頭到尾都沒有寫到平等'], a: 0, why: '宣言寫下了「人人平等」的理想，可是那時還有幾十萬人是奴隸；美國到 1865 年才在全國廢除奴隸制度。寫下來的理想，要做到更難。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
