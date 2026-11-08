/* 世界史漫畫 第 2 冊 古典世界・第 5 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：漢代與西域的往來（絲路）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, cap, both, place, prop, groundShadow } = K;
    const grapes = () => { let s = cap(0, -46, 4, -58, 3, C.wood) + path('M4 -54 Q18 -62 22 -50 Q12 -48 4 -54Z', C.g5); [[0, -44], [-8, -36], [8, -36], [-12, -26], [0, -28], [12, -26], [-6, -18], [6, -18], [0, -9]].forEach(([x, y]) => { s += circ(x, y, 6.5, C.purple) + circ(x - 2, y - 2, 2, 'rgba(255,255,255,.35)'); }); return s; };
    const silk = c => both(rect(-34, -26, 68, 26, c || C.red, 8), 'cm-warm') + ell(34, -13, 6, 13, C.gold) + rect(-34, -16, 68, 4, 'rgba(255,255,255,.3)');
    const card = (c, star) => rect(-20, -56, 40, 56, C.cream, 4) + rect(-16, -52, 32, 32, c) + (star ? poly('0,-48 4,-40 12,-40 6,-34 8,-26 0,-30 -8,-26 -6,-34 -12,-40 -4,-40', C.gold) : circ(0, -36, 8, C.cream)) + rect(-14, -14, 28, 4, C.paper3) + rect(-14, -8, 20, 4, C.paper3);
    root.ComicArt.extend({
      scenes: {
        // 漢朝的長安：城牆、城門樓、大殿
        v2e5_changan(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .84, h * .1, 200, 'url(#cm-sun)') + circ(w * .84, h * .1, 44, '#FFF8DC');
          s += path(`M0 ${h * .44} Q${w * .3} ${h * .4} ${w * .6} ${h * .43} T${w} ${h * .41} L${w} ${h * .5} L0 ${h * .5}Z`, C.g3);
          s += prop({ k: 'hall', x: w * .3, y: h * .4, W: 300, H: 170, n: 5 }) + prop({ k: 'hall', x: w * .78, y: h * .41, W: 260, H: 150, n: 4 });
          s += prop({ k: 'wall', x: w * .5, y: h * .62, W: w + 40, H: h * .18, f: 'brick2', f2: 'clay2', gate: 130 });
          s += prop({ k: 'hall', x: w * .5, y: h * .44 - 10, W: 220, H: 130, n: 4 });
          s += rect(0, h * .62, w, h * .38, C.brick3) + poly(`${w * .44},${h * .62} ${w * .56},${h * .62} ${w * .7},${h} ${w * .3},${h}`, C.paper3);
          s += path(`M0 ${h * .9} Q${w * .5} ${h * .85} ${w} ${h * .9} L${w} ${h} L0 ${h}Z`, C.brick);
          return { bg: s };
        },
        // 沙漠裡的商隊：沙丘、遠山、綠洲
        v2e5_desert(w, h) {
          let s = rect(0, 0, w, h, '#E3D9B8') + circ(w * .18, h * .12, 220, 'url(#cm-sun)') + circ(w * .18, h * .12, 50, '#FFF8DC');
          s += prop({ k: 'mountain', x: w * .7, y: h * .42, W: 520, H: 200, f: 'clay3', f2: 'clay2', snow: 1 }) + prop({ k: 'mountain', x: w * .3, y: h * .42, W: 400, H: 140, f: 'brick', f2: 'clay2' });
          s += rect(0, h * .42, w, h * .58, C.sand) + path(`M0 ${h * .5} Q${w * .25} ${h * .44} ${w * .5} ${h * .5} T${w} ${h * .48} L${w} ${h * .56} L0 ${h * .56}Z`, C.brick3);
          s += prop({ k: 'palm', x: w * .9, y: h * .52, H: 160 }) + prop({ k: 'palm', x: w * .82, y: h * .53, H: 120 }) + ell(w * .86, h * .535, 70, 10, C.g5);
          s += path(`M0 ${h * .7} Q${w * .3} ${h * .62} ${w * .6} ${h * .7} T${w} ${h * .68} L${w} ${h} L0 ${h}Z`, C.brick3) + path(`M0 ${h * .88} Q${w * .5} ${h * .82} ${w} ${h * .88} L${w} ${h} L0 ${h}Z`, C.clay3);
          return { bg: s };
        },
        // 細長路線圖：長安 → 敦煌 → 大宛 → 大夏（由下往上）
        v2e5_route(w, h) {
          let s = rect(0, 0, w, h, C.paper2) + rect(14, 112, w - 28, 600, C.brick3, 14);
          s += path(`M30 300 Q120 260 200 300 T320 290 L320 360 Q200 330 120 370 T30 360Z`, C.sand) + txt(170, 340, '沙漠', 22, C.wood);
          const pts = [[250, 640], [200, 540], [110, 460], [180, 380], [240, 270], [120, 170]];
          for (let i = 0; i < pts.length - 1; i++) s += cap(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 14, C.paper3);
          [[250, 640, '長安', 1], [110, 460, '敦煌', 0], [240, 270, '大宛', 0], [120, 170, '大夏', 0]].forEach(([x, y, t, m]) => {
            s += m ? circ(x, y, 22, 'url(#cm-redglow)') + circ(x, y, 11, C.red) : circ(x, y, 10, C.ink);
            s += rect(x + (x > 170 ? -96 : 18), y - 22, 80, 34, C.cream, 8, 'opacity=".9"') + txt(x + (x > 170 ? -56 : 58), y + 4, t, 24, C.ink);
          });
          s += txt(w / 2, 700, '（簡化畫法）', 16, C.wood);
          return { bg: s };
        }
      },
      props: {
        v2e5_grapes: x => place(x, grapes()),
        v2e5_silk: x => place(x, silk(x.f)),
        v2e5_card: x => place(x, card(x.f || C.g5, x.star)),
        v2e5_bag: x => place(x, groundShadow(0, 2, 22, 4) + path('M-18 0 Q-24 -28 -8 -34 L8 -34 Q24 -28 18 0Z', C.purple) + rect(-10, -38, 20, 6, C.gold, 3) + txt(0, -12, '葡萄乾', 9, C.cream))
      },
      icons: {
        v2e5_silk() { return rect(0, 0, 120, 90, C.g3) + `<g transform="translate(46 72)">` + silk(C.red) + '</g><g transform="translate(80 50) scale(.8)">' + silk(C.gold) + '</g>' + circ(26, 26, 14, C.gold) + circ(26, 26, 9, '#DDBB5F'); },
        v2e5_grape() { return rect(0, 0, 120, 90, C.paper) + `<g transform="translate(36 80) scale(1.1)">` + grapes() + '</g>' + path('M70 80 Q66 40 80 22 Q78 50 88 80Z', C.g5) + path('M84 80 Q86 46 100 30 Q94 56 98 80Z', C.g7); }
      },
      cast: {
        v2e5_ju: { name: '小駒（虛構）', skin: 'skin', top: 'g7', bottom: 'wood', leg: 'wood', shoe: 'wood', hair: 'topknot', r: 22, k: .94 },
        v2e5_merW: { name: '西域商人', skin: 'skinB', robe: 'blue', trim: 'gold', hair: 'man', hat: 'cone', hatC: 'red', beard: 1, r: 19, k: 1.12 },
        v2e5_merH: { name: '漢朝商人', skin: 'skin', robe: 'g5', trim: 'wood', hair: 'topknot', beard: 1, r: 19, k: 1.12 },
        v2e5_zq: { name: '張騫', real: 1, skin: 'skin', robe: 'wood', trim: 'gold', hair: 'topknot', hat: 'band', hatC: 'ink', beard: 1, r: 19, k: 1.2 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v2e5 = {
    id: 'v2e5', vol: '第 2 冊 古典世界', volNo: 2, ep: 5, title: '駱駝走過的絲路', next: '條條大路通羅馬',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱和小禾換卡片，兩個人都覺得自己賺到了。',
    note: '阿凱、小禾、小駒和兩位商人是虛構的角色；張騫的話改編自《史記・大宛列傳》，不是原話。長安城、商隊和張騫的樣子都是想像圖。張騫出發和回來的年份，各家說法差一兩年（常見的是西元前 138 年左右出發）；商隊那一頁是搖搖車「快轉」到後來的樣子，張騫那時還沒有這麼熱鬧。「絲路」這個名字是很久以後的人取的，路也不只一條。',
    curriculum: '國中社會會再學到：漢代與西域的往來（絲路）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'sand', near: 'clay3' },
      back: [
        { k: 'camel', x: 620, y: 900, s: 1.6, load: 'red' },
        { k: 'mountain', x: 140, y: 880, W: 300, H: 200, f: 'clay3', f2: 'clay2', snow: 1 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'mrt', sceneOpt: { seat: .56, win: 'blue', sign: '下一站：西門' }, shot: '中景：捷運車廂裡，兄妹為了交換卡片吵起來',
          props: [{ k: 'v2e5_card', x: 300, y: 240, star: 1, f: 'purple' }, { k: 'v2e5_card', x: 520, y: 236, f: 'g5' }],
          actors: [
            { c: 'kai', x: 220, y: 330, s: 1, pose: 'arg', expr: 'grin', look: .5 },
            { c: 'he', x: 600, y: 332, s: 1.05, pose: 'fists', expr: 'mad', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '你那張閃卡，\n我用三張換！', x: 30, y: 30, w: 230, tail: [210, 140] },
            { t: '三張普通卡？\n一點都不划算！', x: 470, y: 40, w: 250, tail: [600, 150] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: [.8, .12], hz: .55, far: false, ground: 'paper3' }, shot: '大格：捷運站出口旁，搖搖車開口說話',
          back: [
            { k: 'house', x: 360, y: 377, W: 300, H: 170, roof: 'flat', roofC: 'blue', f: 'paper2' },
            { k: 'sign', t: '捷運出口', x: 360, y: 254, W: 170, fs: 28, s: .8 },
            { k: 'car', x: 160, y: 640, s: .9 }
          ],
          actors: [
            { c: 'kai', x: 380, y: 660, s: 1.2, pose: 'think', expr: 'worry', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '到底怎麼換，\n才算公平啦？', x: 280, y: 296, w: 230, fs: 24, tail: [380, 420] },
            { t: '嗶——投 10 元，\n帶你去看\n一條交換的路。', x: 16, y: 230, w: 250, kind: 'car', fs: 24, tail: [140, 500] }
          ],
          sfx: [{ t: '叮！', x: 30, y: 460, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '120', era: '西元前' }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元前 120',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '我的卡還在你那！\n西元前 120！', x: 14, y: 436, w: 214, fs: 22, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e5_changan', shot: '滿版遠景：漢朝的長安城門',
          back: [
            { k: 'horse', x: 640, y: 760, s: .8, flip: 1 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 2150 年前，長安', en: "CHANG'AN · c.120 BC", x: 0, y: 18 },
            { t: '長安在今天中國陝西的西安，是漢朝的首都，離上一話的咸陽很近。', x: 0, y: 112, w: 390, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：長安。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '又回到\n西安附近？', x: 348, y: 672, w: 196, tail: [460, 760] },
            { t: '這次是\n漢朝了！', x: 566, y: 700, w: 200, tail: [618, 800], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'room', sceneOpt: { wall: 'clay3', floor: 'brick3', hz: .66 }, shot: '中景：皇家馬廄，阿凱掏出一包葡萄乾，小駒嚇一跳',
          back: [{ k: 'horse', x: 480, y: 360, s: 1, saddle: 'red' }],
          props: [{ k: 'v2e5_bag', x: 300, y: 300 }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'hold', expr: 'smug', hold: 'notebook', look: .7 },
            { c: 'kai', x: 230, y: 430, s: 1.05, pose: 'offer', expr: 'grin', look: .4 },
            { c: 'v2e5_ju', x: 690, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '請你吃\n葡萄乾！', x: 90, y: 40, w: 200, tail: [234, 236] },
            { t: '這是什麼果子？！\n我從沒看過！', x: 420, y: 26, w: 300, kind: 'shout', fs: 25, tail: [670, 238] }
          ],
          sfx: [{ t: '嘶——', x: 520, y: 170, fs: 34, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：顧馬的孩子小駒介紹自己',
          actors: [{ c: 'v2e5_ju', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'happy', look: -.2 }],
          bubbles: [{ t: '我在皇家馬廄\n顧馬。皇帝最想要\n西邊的好馬！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '馬廄的孩子：小駒（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2', zoom: 1, cy: .7 }, shot: '特寫：西邊的好馬和葡萄',
          back: [{ k: 'horse', x: 220, y: 540, s: 1.4, f: 'clay2' }],
          props: [{ k: 'v2e5_grapes', x: 390, y: 440, s: 1.6 }],
          caption: [{ t: '大宛的好馬和葡萄', en: 'FERGHANA', x: 0, y: 16, w: 250 }],
          bubbles: [
            { t: '張騫大人說，\n大宛有好馬，\n還有葡萄酒！', x: 14, y: 120, w: 250, fs: 23 },
            { t: '那就是\n葡萄啊！', x: 280, y: 130, w: 170, kind: 'think', fs: 24 }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e5_desert', shot: '滿版：搖搖車快轉幾十年，駱駝商隊在沙漠裡交換貨物',
          back: [
            { k: 'camel', x: 130, y: 640, s: 1, load: 'red' },
            { k: 'camel', x: 330, y: 620, s: .8, load: 'gold' },
            { k: 'camel', x: 680, y: 630, s: .9, load: 'blue', flip: 1 },
            { k: 'v2e5_silk', x: 430, y: 700, s: 1.2 },
            { k: 'v2e5_silk', x: 470, y: 676, s: 1, f: 'gold' }
          ],
          actors: [
            { c: 'v2e5_merH', x: 360, y: 720, s: .95, pose: 'offer', expr: 'happy' },
            { c: 'v2e5_merW', x: 560, y: 720, s: .95, pose: 'offer', expr: 'grin', flip: 1 },
            { c: 'v2e5_ju', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'stand', expr: 'worry', sweat: 2, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '嗶——快轉：幾十年後，往西的路上', x: 16, y: 16, w: 470 },
            { t: '張騫回來以後，漢朝的使者和商人一隊一隊往西走，駱駝背上載著絲綢。', x: 16, y: 74, w: 420, dark: false }
          ],
          bubbles: [
            { t: '我的玉石和毛毯，\n換你的絲綢！', x: 456, y: 250, w: 300, fs: 24, tail: [560, 500] },
            { t: '成交！\n兩邊都賺到！', x: 40, y: 300, w: 230, fs: 24, tail: [350, 500] },
            { t: '駱駝走得\n好慢喔……', x: 270, y: 680, w: 190, fs: 24, tail: [440, 772] },
            { t: '可是牠們\n最能走沙漠！', x: 540, y: 660, w: 210, fs: 24, tail: [650, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v2e5_route', shot: '細長路線圖：從長安往西，經過敦煌到大宛、大夏',
          actors: [
            { c: 'kai', x: 80, y: 1034, s: 1.15, pose: 'think', expr: 'think', look: .6 },
            { c: 'v2e5_ju', x: 262, y: 1034, s: 1.15, pose: 'pointUp', expr: 'smug', flip: 1, look: -.4 }
          ],
          caption: [{ t: '後來的人，把這些路\n叫做「絲路」。', x: 0, y: 14, w: 300 }],
          bubbles: [
            { t: '大夏\n在哪裡？', x: 8, y: 720, w: 150, fs: 22, tail: [84, 830] },
            { t: '很遠很遠！\n比大宛還要\n更西邊！', x: 170, y: 700, w: 168, fs: 21, tail: [250, 830] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：路上交換了什麼',
          caption: [{ t: '路上交換了什麼？', x: 0, y: 16 }],
          cards: [
            { icon: 'v2e5_silk', y: 80, t: '往西：絲綢、銅鏡、\n金器……\n漢朝做的東西。' },
            { icon: 'v2e5_grape', y: 344, t: '往東：葡萄、苜蓿、\n好馬、玉石、毛毯……\n以前沒有的東西。' },
            { icon: 'scrollI', y: 610, t: '兩百多年後（105 年），\n蔡倫把造紙的方法改良，\n紙後來也慢慢往西傳。' }
          ],
          bubbles: [{ t: '兩邊都多了\n新東西！', x: 24, y: 896, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'clay3', floor: 'brick2', hz: .8, window: [.42, .14, .16, .4], winC: 'sky' }, shot: '矮寬格：張騫說起他走了十三年的路',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v2e5_ju', x: 300, y: 392, s: .9, pose: 'bow', expr: 'calm' },
            { c: 'v2e5_zq', x: 560, y: 394, s: 1, pose: 'raise', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '出發時一百多人，被匈奴留住十幾年；\n十三年後，只有兩個人回到長安。', x: 30, y: 14, w: 540, fs: 23, tail: [528, 150] }
          ],
          tag: { t: '張騫的話：改編自《史記・大宛列傳》', left: 10, top: 112 } },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的長安城外，小駒用絲帶換葡萄乾',
          back: [
            { k: 'wall', x: 500, y: 360, W: 560, H: 110, f: 'brick2', f2: 'clay2' },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          props: [{ k: 'v2e5_bag', x: 300, y: 430 }, { k: 'v2e5_silk', x: 170, y: 434, s: .8 }],
          actors: [
            { c: 'v2e5_ju', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'offer', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '絲帶換你的\n葡萄乾！', x: 14, y: 176, w: 200, fs: 22, tail: [110, 300] },
            { t: '成交！\n兩個人都賺到！', x: 228, y: 176, w: 196, fs: 22, tail: [284, 326] },
            { t: '交換要兩邊\n都覺得值得。', x: 434, y: 210, w: 180, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n羅馬！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：條條大路通羅馬', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '張騫出使西域', t: '漢武帝想找西邊的月氏一起對付匈奴，大約西元前 138 年派張騫出發。他被匈奴留住十幾年，十三年後才回到長安，出發時一百多人，只回來兩個。' },
      { h: '西邊的新世界', t: '張騫帶回西邊的消息：大宛（今天的中亞費爾干納一帶）有好馬和葡萄酒；在大夏（今天阿富汗北邊）還看到從四川運去的竹杖和布。' },
      { h: '絲路上的交換', t: '後來漢朝的使者和商人一隊一隊往西走，駱駝載著絲綢、銅鏡往西；葡萄、苜蓿、好馬、玉石、毛毯往東。兩邊都多了以前沒有的東西。這些路後來被叫做「絲路」。' },
      { h: '紙的改良', t: '西元 105 年，東漢的蔡倫用樹皮、麻頭、破布、舊魚網改良造紙，比竹簡輕、比絲布便宜。紙後來也沿著這些路慢慢往西傳。' }
    ],
    map: {
      bounds: { lon: [60, 112], lat: [28, 46] },
      cap: '紅點是長安。紅色虛線是往西的路（大概的走法，其實有好幾條）；中間要繞過很大的沙漠。河道是今天的樣子，簡化畫法。',
      alt: '絲路地圖：從東邊的長安（紅點）往西北經過敦煌，繞過塔克拉瑪干沙漠，到大宛和大夏',
      rivers: ['yellow'],
      routes: [{ pts: [[34.27, 108.9], [36.06, 103.8], [38.9, 100.4], [40.14, 94.66], [41.0, 88.0], [41.2, 80.3], [39.47, 75.99], [40.4, 71.8], [36.76, 66.9]] }],
      labels: [
        { t: '塔克拉瑪干沙漠', lat: 38.6, lon: 83.0, size: 20, f: 'wood' },
        { t: '黃河', lat: 41.4, lon: 104.0, size: 20, f: 'g7' },
        { t: '漢', lat: 31.0, lon: 100.0, size: 30, f: 'g9' }
      ],
      cities: [
        { n: '長安', lat: 34.27, lon: 108.9, main: 1, side: 'l' },
        { n: '敦煌', lat: 40.14, lon: 94.66, side: 'r', dy: -6 },
        { n: '大宛', lat: 40.4, lon: 71.8, side: 'r', dy: -20 },
        { n: '大夏', lat: 36.76, lon: 66.9, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：張騫回來到今天，已經超過兩千一百年。',
      items: [
        { y: -138, when: '約西元前 138 年', t: '張騫出發\n去西域', side: 'u', main: 1, w: 180 },
        { y: -126, when: '約西元前 126 年', t: '十三年後\n回到長安', side: 'd', w: 180 },
        { y: 2026, when: '今天', t: '葡萄、絲綢\n到處都買得到', side: 'u', w: 190 }
      ]
    },
    sources: [
      '《史記・大宛列傳》（維基文庫原文）：張騫被匈奴「留騫十餘歲」；「騫行時百餘人，去十三歲，唯二人得還」；大宛「多善馬」「有蒲陶酒」；在大夏「見邛竹杖、蜀布」；漢使帶回種子，「天子始種苜蓿、蒲陶」',
      'History.com〈Han Dynasty〉（漢朝西元前 206～西元 220 年；漢武帝西元前 138 年派張騫往西、被匈奴抓住、十三年後回來；他的路後來發展成絲路；蔡倫約西元 105 年改良造紙；長安是首都）',
      '《後漢書・宦者列傳》蔡倫傳（維基文庫原文）：用「樹膚、麻頭及敝布、魚網」造紙，「元興元年」（西元 105 年）奏上',
      '華盛頓大學 Silk Road Seattle〈The Han Empire〉（張騫為了找月氏結盟對付匈奴；漢朝往外送絲綢、銅鏡、金器，從西邊進來酒、水果、堅果、毛織品、毛毯、玉石）、國家地理〈The Silk Road〉（駱駝是穿越沙漠的主要運輸，絲路有很多條）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '這一話裡，商隊在沙漠中主要靠什麼動物載貨？', opts: ['駱駝', '大象', '水牛', '綿羊'], a: 0, why: '沙漠又乾又熱，駱駝最耐走，商隊就靠牠們載著絲綢往西走。' },
      { id: 'q2', d: 1, type: 'tf', q: '張騫出發去西域，一路很順利，一年就回到長安了。', a: false, why: '不對！他被匈奴留住十幾年，過了十三年才回到長安，出發時一百多人，只回來兩個。' },
      { id: 'q3', d: 2, type: 'mc', q: '下面哪一樣，是從西邊傳進漢朝的？', opts: ['葡萄', '絲綢', '竹簡', '銅鏡'], a: 0, why: '葡萄和苜蓿是從西邊傳進來的；絲綢、銅鏡是漢朝送往西邊的東西，竹簡是本來就有的。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['秦統一文字和度量衡', '張騫出發去西域', '張騫回到長安', '蔡倫改良造紙'], why: '秦統一在西元前 221 年；張騫大約西元前 138 年出發、十三年後回來；蔡倫改良造紙在西元 105 年。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「交換的時候，一定有一邊賺、一邊虧。」根據這一話，哪個說法最正確？', opts: ['不對，兩邊都換到自己沒有的東西', '對，絲路上的交換都是漢朝一直在虧錢', '對，所以後來大家就不再走絲路了', '不對，絲路上的人只送禮物，從來不交換'], a: 0, why: '漢朝把絲綢送往西邊，西邊的葡萄、苜蓿、好馬傳進來。兩邊都換到自己沒有的東西，所以都覺得值得。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
