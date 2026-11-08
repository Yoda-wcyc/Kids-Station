/* 世界史漫畫 第 4 冊 大航海與文藝復興・第 1 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：明代的對外交流（鄭和下西洋）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, both, place, cap } = K;
    root.ComicArt.extend({
      scenes: {
        // 港邊：天空、海、木頭碼頭（人站在碼頭上）。o：sky、dusk
        v4e1_harbor(w, h, o) {
          o = o || {};
          let s = rect(0, 0, w, h, o.sky ? K.col(o.sky) : C.sky);
          s += circ(w * .82, h * (o.dusk ? .34 : .12), Math.min(w, h) * .3, 'url(#cm-sun)') + circ(w * .82, h * (o.dusk ? .34 : .12), Math.min(w, h) * .06, '#FFF8DC');
          s += path(`M0 ${h * .44} Q${w * .25} ${h * .4} ${w * .5} ${h * .44} T${w} ${h * .42} L${w} ${h * .46} L0 ${h * .46}Z`, C.g3);
          s += rect(0, h * .45, w, h * .4, C.g5);
          for (let i = 0; i < 14; i++) { const yy = h * .47 + h * .36 * ((i * .37) % 1), xx = (i * 151) % w; s += rect(xx, yy, 40 + (i % 3) * 30, 4, C.g2, 2, 'opacity=".55"'); }
          s += both(rect(0, h * .84, w, h * .16, C.wood));
          for (let x = 0; x < w; x += 70) s += rect(x, h * .84, 4, h * .16, 'rgba(21,23,20,.25)');
          s += rect(0, h * .84, w, 8, C.clay2);
          return { bg: s };
        },
        // 寶船甲板：海平面＋木頭甲板＋欄杆
        v4e1_deck(w, h, o) {
          o = o || {}; const hz = h * (o.hz || .6);
          let s = rect(0, 0, w, h, C.sky) + circ(w * .8, h * .14, Math.min(w, h) * .3, 'url(#cm-sun)');
          s += rect(0, h * .34, w, hz - h * .34, C.g5);
          for (let i = 0; i < 8; i++) s += rect((i * 131) % w, h * .38 + (i % 4) * h * .05, 60, 4, C.g2, 2, 'opacity=".6"');
          s += rect(0, hz - 40, w, 10, C.wood) + rect(0, hz - 46, w, 8, C.clay2);
          for (let x = 20; x < w; x += 56) s += rect(x, hz - 40, 8, 42, C.wood);
          s += rect(0, hz, w, h - hz, C.clay2);
          for (let y = hz + 18; y < h; y += 34) s += rect(0, y, w, 3, 'rgba(21,23,20,.18)');
          s += rect(w * .9, 0, 18, hz, C.ink) + rect(w * .9 - 2, 0, 22, 14, C.wood);   // 船桅
          return { bg: s };
        }
      },
      props: {
        // 長頸鹿（朝右）：原點＝腳底中央。s≈1 時高約 330
        v4e1_giraffe: x => {
          const f = C.gold, sp = '#A8722E';
          let s = K.groundShadow(0, 3, 70, 8);
          [[-40, -150, -46], [-24, -150, -20], [30, -156, 34], [46, -156, 54]].forEach(([a, b, c], i) => { s += cap(a, b, c, -6, 11, i % 2 ? f : '#B88E3A') + rect(c - 6, -8, 12, 8, C.ink, 2); });
          s += ell(0, -170, 64, 34, f) + path('M36 -186 L78 -310 L98 -304 L64 -168Z', f) + ell(98, -316, 26, 14, f, 'transform="rotate(-20 98 -316)"') + rect(84, -346, 5, 20, C.wood, 2) + rect(96, -348, 5, 20, C.wood, 2) + circ(98, -322, 3, C.ink);
          [[-30, -176], [-6, -184], [20, -168], [-18, -156], [8, -150], [50, -210], [60, -246], [70, -280]].forEach(([a, b], i) => { s += rect(a - 7, b - 6, 13 + (i % 2) * 3, 11, sp, 3); });
          s += path('M-60 -178 Q-78 -160 -74 -128 L-68 -128 Q-70 -156 -56 -170Z', f);
          return place(x, s);
        },
        // 青花瓷瓶
        v4e1_vase: x => place(x, K.groundShadow(0, 2, 22, 4) + both(path('M-8 -70 L8 -70 L9 -60 Q30 -44 22 -10 L14 0 L-14 0 L-22 -10 Q-30 -44 -9 -60Z', C.cream)) + rect(-20, -42, 40, 5, C.blue) + rect(-16, -22, 32, 4, C.blue) + path('M-12 -36 q6 -6 12 0 q6 6 12 0 l0 6 q-6 6 -12 0 q-6 -6 -12 0Z', C.blue)),
        // 牆上的世界地圖海報
        v4e1_poster: x => place(x, rect(-90, -130, 180, 120, C.cream, 4) + rect(-84, -124, 168, 108, C.g3) + path('M-70 -100 Q-50 -116 -30 -104 Q-20 -84 -40 -70 Q-64 -64 -70 -100Z', C.brick2) + path('M-10 -110 Q30 -118 60 -100 Q70 -76 40 -66 Q20 -50 0 -70 Q-16 -86 -10 -110Z', C.brick2) + path('M-30 -60 Q-14 -56 -12 -34 Q-24 -24 -34 -40Z', C.brick2) + circ(48, -76, 4, C.red))
      },
      holds: {
        v4e1_vaseH: () => path('M-6 -40 L6 -40 L7 -34 Q20 -24 15 -4 L10 2 L-10 2 L-15 -4 Q-20 -24 -7 -34Z', C.cream) + rect(-14, -22, 28, 4, C.blue)
      },
      cast: {
        v4e1_ama: { name: '阿嬤', skin: 'skin', top: 'purple', bottom: 'g9', leg: 'g9', shoe: 'wood', hair: 'bun', hairC: '#8E8E86', r: 20, k: 1.02 },
        v4e1_fu: { name: '阿福（虛構）', skin: 'skinB', top: 'blue', bottom: 'cream', leg: 'cream', shoe: 'ink', hair: 'topknot', r: 22, k: .95 },
        v4e1_sailor: { name: '水手', skin: 'skinC', top: 'clay2', bottom: 'g7', leg: 'g7', hair: 'topknot', hat: 'band', hatC: 'red', r: 19, k: 1.12 },
        v4e1_trader: { name: '古里的商人', skin: 'skinC', robe: 'cream', trim: 'red', hair: 'man', hat: 'turban', hatC: 'gold', beard: 1, r: 19, k: 1.1 },
        v4e1_zheng: { name: '鄭和', real: 1, skin: 'skinB', robe: 'red', trim: 'gold', hat: 'capCN', r: 19, k: 1.26 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v4e1 = {
    id: 'v4e1', vol: '第 4 冊 大航海與文藝復興', volNo: 4, ep: 1, title: '鄭和的大船', next: '會印書的機器',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿嬤說：這次的五天旅行，交給你規劃。',
    note: '阿凱、小禾、阿嬤、阿福、水手和古里的商人是虛構的角色；鄭和的話是依據史書對航行的記載改編，不是他的原話。鄭和的樣子、寶船、古里市場都是想像圖。寶船到底有多大，古書記載得很大，但學者還有不同看法；船隊的船數和人數，各次記載也不完全一樣，這裡寫的是大約的數字。長頸鹿是在孟加拉遇到非洲馬林迪的使者帶來的，有的書寫「孟加拉送的」，說法不完全一樣。',
    curriculum: '國中社會會再學到：明代的對外交流（鄭和下西洋）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'g7' },
      back: [
        { k: 'ship', kind: 'junk', x: 170, y: 900, s: .9, sail: 'red' },
        { k: 'ship', kind: 'junk', x: 650, y: 880, s: 1.1, sail: 'clay3', flip: 1 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', floor: 'wood', hz: .74, window: [.04, .12, .16, .34], winC: 'g2' }, shot: '中景：阿嬤家客廳，全家在規劃暑假旅行',
          back: [{ k: 'v4e1_poster', x: 600, y: 160, s: .9 }, { k: 'table', x: 430, y: 336, W: 150 }],
          actors: [
            { c: 'v4e1_ama', x: 200, y: 334, s: .95, pose: 'hold', expr: 'happy', hold: 'phone', look: .5 },
            { c: 'kai', x: 400, y: 334, s: 1, pose: 'pointUp', expr: 'grin', look: .4 },
            { c: 'he', x: 690, y: 334, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '暑假全家出去玩\n五天，去哪裡好？', x: 16, y: 12, w: 236, tail: [196, 128] },
            { t: '印度！非洲！\n全部都去！', x: 266, y: 12, w: 200, tail: [396, 136] },
            { t: '五天欸。\n去得完嗎？', x: 520, y: 22, w: 180, tail: [680, 136] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sky: 'brick3', sun: [.8, .12], hz: .5, far: false, ground: 'paper3', near: 'g3' }, shot: '大格：阿嬤家巷口，阿凱衝向搖搖車投幣',
          back: [
            { k: 'house', x: 90, y: 343, W: 180, H: 150, roof: 'flat', roofC: 'g7', f: 'paper2' },
            { k: 'house', x: 420, y: 343, W: 200, H: 170, roof: 'tile', roofC: 'g9', f: 'cream' },
            { k: 'car', x: 118, y: 628, s: .78 }
          ],
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'yell', flip: 1, look: .7, sweat: 1 }
          ],
          bubbles: [
            { t: '那我先去看看\n世界有多大！', x: 18, y: 380, w: 216, tail: [206, 450] },
            { t: '陳以凱！！\n那是巷口的搖搖車！', x: 250, y: 300, w: 260, kind: 'shout', tail: [420, 400], fs: 24 }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '1405', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1405',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '又倒轉了！\n西元 1405！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e1_harbor', shot: '滿版遠景：港口外停滿大船，最大的寶船有好幾根桅杆',
          back: [
            { k: 'ship', kind: 'junk', x: 120, y: 470, s: .45, sail: 'clay3' },
            { k: 'ship', kind: 'junk', x: 660, y: 466, s: .5, sail: 'clay3', flip: 1 },
            { k: 'ship', kind: 'junk', x: 300, y: 480, s: .35, sail: 'clay3' },
            { k: 'ship', kind: 'junk', x: 470, y: 760, s: 1.75, sail: 'red' },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '西元 1405 年，明朝（今天的中國）', en: 'MING CHINA · AD 1405', x: 0, y: 18 },
            { t: '永樂皇帝派鄭和帶著大船隊「下西洋」：往南、往西，一路開到印度洋。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：明朝。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '那艘船\n比學校還大！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '旁邊還有\n好多艘！', x: 570, y: 700, w: 196, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v4e1_deck', sceneOpt: { hz: .62 }, shot: '中景：甲板上，阿凱想偷喝大水缸裡的水',
          back: [
            { k: 'barrel', x: 320, y: 432, s: 1.3, f: 'clay' },
            { k: 'barrel', x: 400, y: 440, s: 1.1, f: 'clay2' },
            { k: 'sack', x: 470, y: 446, s: .9 }
          ],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 210, y: 430, s: 1.05, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v4e1_fu', x: 610, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '好渴！這缸水\n借我喝一大口！', x: 110, y: 40, w: 230, tail: [214, 236] },
            { t: '不行！！那是全船\n要喝很多天的淡水！', x: 390, y: 26, w: 320, kind: 'shout', fs: 25, tail: [600, 238] }
          ],
          sfx: [{ t: '咕嚕？', x: 300, y: 196, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：見習水手阿福叉腰解釋',
          actors: [{ c: 'v4e1_fu', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '海水又鹹，\n不能喝！\n有的船專門\n只裝淡水。', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '寶船上的見習水手：阿福（虛構）', left: 8 } },
        { scene: 'v4e1_deck', sceneOpt: { hz: .8 }, shot: '中景：船隊排成一大片，阿凱和小禾在欄杆邊看傻了',
          back: [
            { k: 'ship', kind: 'junk', x: 90, y: 250, s: .3, sail: 'clay3' },
            { k: 'ship', kind: 'junk', x: 230, y: 240, s: .26, sail: 'clay3' },
            { k: 'ship', kind: 'junk', x: 370, y: 256, s: .32, sail: 'clay3', flip: 1 },
            { k: 'ship', kind: 'junk', x: 160, y: 310, s: .4, sail: 'red' },
            { k: 'ship', kind: 'junk', x: 330, y: 320, s: .42, sail: 'clay3', flip: 1 }
          ],
          actors: [
            { c: 'kai', x: 110, y: 540, s: 1, pose: 'fists', expr: 'shock', look: .3 },
            { c: 'he', x: 350, y: 544, s: 1, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .5 }
          ],
          caption: [{ t: '第一次出海：大約 317 艘船、\n將近 28,000 人！', x: 0, y: 14, w: 380 }],
          bubbles: [
            { t: '根本是\n海上的城市！', x: 10, y: 120, w: 196, fs: 24, tail: [118, 300] },
            { t: '還有裝馬、\n裝水的船。', x: 250, y: 120, w: 196, fs: 24, tail: [346, 300] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sun: [.84, .08], hz: .44, far: 'g3', ground: 'sand', near: 'clay3', river: { y: .36, h: .08, tilt: 0, c: 'g5' } }, shot: '滿版：印度西南岸的古里港，水手拿瓷器跟商人換胡椒',
          back: [
            { k: 'ship', kind: 'junk', x: 640, y: 430, s: .5, sail: 'red', flip: 1 },
            { k: 'palm', x: 40, y: 640, H: 300 },
            { k: 'palm', x: 760, y: 650, H: 330 },
            { k: 'mudHouse', x: 150, y: 520, W: 200, H: 110, f: 'brick3' },
            { k: 'mudHouse', x: 620, y: 530, W: 220, H: 120, f: 'cream' },
            { k: 'crowd', x: 400, y: 560, n: 10, W: 700, s: .8, op: .5, skin: 'skinC' },
            { k: 'table', x: 400, y: 660, W: 260 },
            { k: 'sack', x: 330, y: 596, s: .7 },
            { k: 'v4e1_vase', x: 430, y: 584, s: .9 },
            { k: 'v4e1_vase', x: 470, y: 584, s: .7 }
          ],
          actors: [
            { c: 'v4e1_trader', x: 220, y: 660, s: .9, pose: 'arg', expr: 'happy', look: .6 },
            { c: 'v4e1_sailor', x: 590, y: 662, s: .9, pose: 'offer', expr: 'grin', hold: 'v4e1_vaseH', flip: 1, look: .6 },
            { c: 'v4e1_fu', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '古里（今天印度西南岸的卡利卡特）\n印度洋上熱鬧的大港口', x: 16, y: 16, w: 480 },
            { t: '船隊帶著絲綢、瓷器、茶葉送給各國，帶回胡椒、香料和寶石。', x: 16, y: 128, w: 420, dark: false }
          ],
          bubbles: [
            { t: '這瓷器真漂亮！\n換一袋胡椒。', x: 40, y: 330, w: 226, fs: 24, tail: [200, 474] },
            { t: '成交！', x: 600, y: 380, w: 140, fs: 25, tail: [600, 474] },
            { t: '這裡是鄭和船隊\n常停的大港口！', x: 14, y: 636, w: 236, fs: 24, tail: [140, 790] },
            { t: '大家說的話不一樣，\n怎麼做生意？', x: 262, y: 646, w: 260, fs: 23, tail: [440, 772] },
            { t: '船上有\n會說好幾種\n話的翻譯！', x: 560, y: 616, w: 196, fs: 23, tail: [646, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'land', sceneOpt: { sky: 'g2', sun: false, hz: .84, far: false, ground: 'sand' }, shot: '細長大格仰角：船隊帶回來的長頸鹿，阿凱抬頭看',
          back: [{ k: 'v4e1_giraffe', x: 90, y: 900, s: 1.6 }],
          actors: [{ c: 'kai', x: 262, y: 1034, s: 1.5, pose: 'lookup', expr: 'awe', flip: 1, look: .5 }],
          caption: [{ t: '1414 年，船隊在孟加拉\n遇到非洲馬林迪的使者，\n把長頸鹿帶回中國。', x: 0, y: 14, w: 330 }],
          bubbles: [{ t: '宮裡的人說\n牠是「麒麟」！', x: 120, y: 540, w: 206, fs: 24, tail: [250, 700] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：七次下西洋、朝貢、為什麼不再出海',
          caption: [{ t: '七次下西洋（1405～1433 年）', x: 0, y: 16 }],
          cards: [
            { icon: 'ship', y: 80, t: '鄭和前後帶船隊出海七次，\n到過荷莫茲、阿拉伯，\n最遠到了非洲東岸。' },
            { icon: 'people', y: 344, t: '各國派使者帶禮物來「朝貢」，\n承認明朝皇帝最大，\n皇帝再回送很多禮物。' },
            { icon: 'question', y: 610, t: '後來為什麼不出海了？\n太花錢、北邊蒙古的威脅、\n朝廷裡也有人反對。' }
          ],
          bubbles: [{ t: '能出去，也要想好\n為什麼去、怎麼回來。', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v4e1_deck', sceneOpt: { hz: .78 }, shot: '矮寬格：寶船甲板上，鄭和拿著皇帝的文書',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v4e1_fu', x: 300, y: 392, s: .9, pose: 'bow', expr: 'calm' },
            { c: 'v4e1_zheng', x: 560, y: 394, s: 1, pose: 'raise', expr: 'calm', hold: 'scroll', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '我帶著皇帝的禮物拜訪各國，\n也把各國的使者平安送回家。', x: 40, y: 14, w: 470, fs: 24, tail: [528, 146] }
          ],
          tag: { t: '鄭和的話：改編自史書對航行的記載', left: 10, top: 112 } },
        { scene: 'v4e1_harbor', sceneOpt: { sky: '#E8CFA0', dusk: 1 }, shot: '收尾大格：傍晚的碼頭，準備出發',
          back: [{ k: 'ship', kind: 'junk', x: 560, y: 340, s: .7, sail: 'red', flip: 1 }, { k: 'car', x: 680, y: 600, s: .8 }],
          actors: [
            { c: 'v4e1_fu', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '下次換你們\n帶我去玩！', x: 14, y: 186, w: 196, fs: 23, tail: [110, 300] },
            { t: '旅行要先想好：\n去做什麼、花多少錢！', x: 220, y: 160, w: 270, fs: 22, tail: [284, 326] },
            { t: '還有，\n哪天回家！', x: 500, y: 196, w: 180, fs: 23, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n美因茲！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：會印書的機器', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '鄭和是誰', t: '明朝的航海家，出生在雲南的穆斯林家庭，後來在宮裡做事。永樂皇帝派他帶大船隊出海，這件事叫「下西洋」。' },
      { h: '七次下西洋', t: '從 1405 年到 1433 年一共七次。第一次大約 317 艘船、將近 28,000 人，到了古里（今天印度的卡利卡特）；後來還到過荷莫茲、阿拉伯和非洲東岸的馬林迪（今天的肯亞）。' },
      { h: '朝貢與交流', t: '船隊帶著絲綢、瓷器、茶葉當禮物，請各國派使者來「朝貢」；也帶回胡椒、香料、寶石。1414 年，船隊在孟加拉遇到馬林迪的使者，把長頸鹿帶回中國，宮裡的人說牠是「麒麟」。' },
      { h: '為什麼不再出海', t: '出海非常花錢，北邊又有蒙古的威脅，朝廷裡也有人反對。1433 年最後一次航行後，明朝就不再派大船隊出海了。' }
    ],
    map: {
      bounds: { lon: [36, 126], lat: [-8, 36] }, taiwan: false,
      cap: '紅色虛線是船隊大概走過的航線（各次不一樣，這裡簡化成一條）。海岸是今天的樣子，簡化畫法。',
      alt: '鄭和下西洋地圖：從東邊的南京（紅點）出發，往南經過麻六甲，進入印度洋到古里，再到荷莫茲，也有一支到非洲東岸的馬林迪',
      routes: [
        { pts: [[31.6, 121.8], [26, 120.5], [22, 115], [16, 109.5], [10, 107], [4, 104.5], [1.8, 102.6], [5, 98], [6.5, 92], [6, 82], [9, 76], [11.25, 75.78]] },
        { pts: [[11.25, 75.78], [16, 70], [22, 62], [26.6, 56.6]], w: 4 },
        { pts: [[11.25, 75.78], [6, 66], [0, 52], [-3.2, 40.6]], w: 4 }
      ],
      labels: [
        { t: '印度洋', lat: -2, lon: 74, size: 26, f: 'cream' },
        { t: '明朝', lat: 27, lon: 107, size: 28, f: 'g9' },
        { t: '臺灣', lat: 19.6, lon: 121.6, size: 18, f: 'red' },
        { t: '印度', lat: 21, lon: 78, size: 22, f: 'wood' },
        { t: '非洲', lat: 6, lon: 40, size: 22, f: 'wood' },
        { t: '孟加拉', lat: 25.6, lon: 88, size: 18, f: 'wood' }
      ],
      cities: [
        { n: '南京', lat: 32.06, lon: 118.78, main: 1, side: 'l' },
        { n: '麻六甲', lat: 2.19, lon: 102.25, side: 'l', dy: 20 },
        { n: '古里', lat: 11.25, lon: 75.78, side: 'r' },
        { n: '荷莫茲', lat: 27.1, lon: 56.3, side: 'r' },
        { n: '馬林迪', lat: -3.22, lon: 40.12, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從鄭和出生到哥倫布往西航行，大約 120 年。七次下西洋只花了不到 30 年。',
      items: [
        { y: 1371, when: '西元 1371 年', t: '鄭和出生\n（今天的雲南）', side: 'u', w: 160 },
        { y: 1405, when: '西元 1405 年', t: '第一次\n下西洋', side: 'd', main: 1, w: 150 },
        { y: 1414, when: '西元 1414 年', t: '長頸鹿\n被帶回中國', side: 'u', w: 150 },
        { y: 1433, when: '西元 1433 年', t: '最後一次航行，\n鄭和在回程過世', side: 'd', w: 166 },
        { y: 1492, when: '西元 1492 年', t: '哥倫布往西\n航行（第 4 話）', side: 'u', w: 170 }
      ]
    },
    sources: [
      'Asia for Educators（哥倫比亞大學）〈The Ming Voyages〉：1405～1433 年七次航行；第一次 317 艘船、將近 28,000 人，到古里、柯枝；第四次到荷莫茲、第五次到馬林迪；鄭和出身雲南穆斯林家庭、是宮中宦官；船隊帶絲綢、瓷器、茶葉當禮物，帶回胡椒、寶石；有專門裝水、裝馬的船；朝貢制度；後來停止出海的原因（花費、北方蒙古威脅、朝廷反對）；1433 年鄭和在回程過世',
      'Science News〈The giraffes that sailed to medieval China〉：1414 年第四次航行的船隊在孟加拉遇到馬林迪使者，把長頸鹿帶回中國；長頸鹿被看成「麒麟」'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '鄭和第一次下西洋，船隊大約有多少人？', opts: ['將近 28,000 人', '大約 2,800 人', '大約 280,000 人', '大約 280 人'], a: 0, why: '第一次出海大約有 317 艘船、將近 28,000 人，像一座海上的城市。' },
      { id: 'q2', d: 1, type: 'tf', q: '鄭和的船隊最遠到過非洲東岸。', a: true, why: '對！船隊後來到過荷莫茲、阿拉伯，還有非洲東岸的馬林迪（今天的肯亞）。' },
      { id: 'q3', d: 2, type: 'mc', q: '各國派使者帶禮物來見明朝皇帝、皇帝再回送禮物，這叫做什麼？', opts: ['朝貢', '科舉', '驛站', '行省'], a: 0, why: '這叫「朝貢」：各國承認明朝皇帝最大，皇帝再回送很多禮物。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['鄭和出生', '第一次下西洋', '長頸鹿被帶回中國', '最後一次航行結束'], why: '鄭和 1371 年出生；1405 年第一次下西洋；1414 年船隊在孟加拉帶回長頸鹿；1433 年最後一次航行結束。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「明朝後來不再派大船隊出海，是因為船太小，根本開不遠。」根據這一話，哪個說法最正確？', opts: ['不對，是因為太花錢、北邊有威脅、有人反對', '對，寶船其實只能在河裡開，出不了海', '對，船隊從來沒有離開過中國的海岸', '不對，是因為海上其他的國家都不准他們的船靠岸'], a: 0, why: '船隊到過印度洋和非洲，船並不小。停止出海是因為太花錢、北邊蒙古的威脅，朝廷裡也有人反對。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
