/* 世界史漫畫 第 5 冊 革命與工業・第 6 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：工業革命。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, poly, path, txt, cap, place, both, groundShadow, puff } = K;
    // 紡紗機（原點＝底部中央，寬 W）
    const spinner = (x, y, W) => { let s = both(rect(x - W / 2, y - 90, W, 70, C.basalt3)) + rect(x - W / 2, y - 20, 12, 20, C.ink) + rect(x + W / 2 - 12, y - 20, 12, 20, C.ink); for (let i = x - W / 2 + 16; i < x + W / 2 - 10; i += 18) s += rect(i, y - 120, 6, 32, C.cream) + rect(i - 2, y - 104, 10, 10, C.paper2); return s + rect(x - W / 2, y - 94, W, 6, C.wood); };
    root.ComicArt.extend({
      scenes: {
        // 冒煙的曼徹斯特街道：紅磚工廠、高煙囪、灰色天空
        v5e6_town(w, h) {
          let s = rect(0, 0, w, h, '#B9B6A6');
          [[.12, .5], [.32, .44], [.7, .4], [.88, .52]].forEach(([fx, fy], i) => { const x = w * fx; s += rect(x - 18, h * fy - h * .14, 36, h * .5, C.brick2) + rect(x - 22, h * fy - h * .14, 44, 12, C.wood); for (let j = 0; j < 4; j++) s += puff(x + j * 24, h * fy - h * .17 - j * 40, 20 + j * 6, '#8E8C80'); });
          s += rect(0, h * .45, w, h * .25, '#A65A3F');
          for (let r = 0; r < 3; r++) for (let x = 20; x < w - 30; x += 60) s += rect(x, h * .47 + r * h * .075, 30, h * .045, '#3A3530');
          s += rect(0, h * .7, w, h * .3, C.basalt3) + rect(0, h * .7, w, 8, C.basalt2);
          return { bg: s };
        },
        // 棉紡織工廠裡面：磚牆、天花板的轉軸和皮帶、好幾排紡紗機
        v5e6_mill(w, h) {
          let s = rect(0, 0, w, h, C.brick3);
          for (let x = 40; x < w; x += 190) s += rect(x, 70, 110, 180, C.sky) + rect(x + 52, 70, 6, 180, C.wood) + rect(x, 156, 110, 6, C.wood);
          s += rect(0, 30, w, 14, C.ink);
          for (let x = 60; x < w; x += 140) s += cap(x, 37, x + 30, h * .5, 6, C.wood) + circ(x, 37, 14, C.basalt2);
          s += rect(0, h * .5, w, h * .5, C.paper3);
          s += spinner(w * .3, h * .62, w * .5) + spinner(w * .78, h * .62, w * .38);
          return { bg: s };
        },
        // 棉花從港口坐火車到工廠，做成布再運出去（細長示意）
        v5e6_flow(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const row = (y, label, draw) => rect(20, y, w - 40, 170, C.cream, 10) + draw(w / 2, y + 120) + txt(w / 2, y + 160, label, 21, C.wood);
          s += row(220, '利物浦港：棉花上岸', (x, y) => K.prop({ k: 'ship', kind: 'tall', x, y: y - 6, s: .35, sail: 'clay3' }) + rect(x + 74, y - 34, 36, 30, C.clay3, 4) + rect(x - 110, y - 34, 36, 30, C.clay3, 4));
          s += poly(`${w / 2 - 16},398 ${w / 2 + 16},398 ${w / 2},424`, C.red);
          s += row(430, '坐火車到曼徹斯特', (x, y) => K.prop({ k: 'loco', x: x + 20, y: y + 4, s: .26 }));
          s += poly(`${w / 2 - 16},608 ${w / 2 + 16},608 ${w / 2},634`, C.red);
          s += row(640, '工廠做成布，再運出去', (x, y) => rect(x - 70, y - 70, 140, 60, '#A65A3F') + rect(x + 30, y - 120, 22, 60, C.brick2) + puff(x + 44, y - 130, 14, '#8E8C80') + [-50, -20, 10].map(d => rect(x + d, y - 56, 20, 16, '#3A3530')).join(''));
          return { bg: s };
        }
      },
      props: {
        // 瓦特式的蒸汽機（簡化：橫桿、汽缸、大飛輪）
        v5e6_engine: x => place(x, groundShadow(0, 3, 130, 10) + rect(-120, -24, 240, 24, C.brick2) + both(rect(-100, -190, 56, 166, C.basalt3)) + rect(-30, -280, 14, 256, C.wood) + rect(-110, -290, 220, 16, C.wood, 4) + cap(90, -282, 90, -120, 8, C.basalt2) + circ(90, -110, 80, C.ink) + circ(90, -110, 66, C.paper2) + circ(90, -110, 14, C.ink) + cap(90, -110, 90, -176, 6, C.ink) + cap(90, -110, 147, -110, 6, C.ink) + cap(90, -110, 33, -110, 6, C.ink) + cap(90, -110, 90, -44, 6, C.ink)),
      },
      cast: {
        v5e6_tom: { name: '湯姆（虛構）', skin: 'skin', top: 'basalt3', bottom: 'wood', leg: 'skin', shoe: 'ink', hair: 'short', hairC: 'wood', hat: 'beret', hatC: 'basalt2', r: 22, k: .92 },
        v5e6_girl: { name: '工廠的女孩', skin: 'skin', top: 'clay3', skirt: 'basalt3', hair: 'bun', hairC: 'wood', r: 22, k: .9 },
        v5e6_boss: { name: '工頭', skin: 'skin', top: 'wood', bottom: 'basalt2', leg: 'basalt2', shoe: 'ink', hair: 'man', hat: 'tophat', beard: 1, r: 19, k: 1.18 },
        v5e6_rider: { name: '乘客', skin: 'skin', top: 'g7', bottom: 'basalt2', leg: 'basalt2', shoe: 'ink', hair: 'short', r: 20, k: 1.12 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v5e6 = {
    id: 'v5e6', vol: '第 5 冊 革命與工業', volNo: 5, ep: 6, title: '冒煙的工廠和第一列火車', next: '茶、白銀和鴉片',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說：這件 T 恤，他會好好穿很久。',
    note: '阿凱、小禾、湯姆、工廠的女孩、工頭和捷運上的乘客是虛構的角色。工廠、街道、火車頭和車廂都是想像圖（火車頭參考「火箭號」的樣子再簡化）。1832 年國會調查童工的證詞，當時就有人批評問題問得不公平，哪些情形最常見，歷史學家還在討論；這裡寫的是證詞裡說的內容。',
    curriculum: '國中社會會再學到：工業革命',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'basalt3', near: 'g5' },
      back: [
        { k: 'loco', x: 650, y: 940, s: .55, smoke: 1 },
        { k: 'tower', x: 110, y: 900, W: 50, H: 320, f: 'brick2' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trioR', panels: [
        { scene: 'mrt', sceneOpt: { seat: .62, poles: [.2, .58] }, shot: '中景：捷運車廂裡，阿凱滑手機看到超便宜的 T 恤',
          actors: [
            { c: 'v5e6_rider', x: 700, y: 330, s: .95, pose: 'hold', expr: 'calm', hold: 'phone', flip: 1, look: .2 },
            { c: 'kai', x: 250, y: 330, s: 1, pose: 'hold', expr: 'grin', hold: 'phone', look: .6 },
            { c: 'he', x: 470, y: 332, s: 1, pose: 'hold', expr: 'think', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這件 T 恤\n才 99 元耶！', x: 30, y: 30, w: 200, fs: 24, tail: [240, 150] },
            { t: '這麼便宜？\n是誰做的？', x: 290, y: 20, w: 190, fs: 24, tail: [466, 160] },
            { t: '機器做的吧？', x: 20, y: 136, w: 190, fs: 22, tail: [236, 166] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1830 }, shot: '小格特寫：捷運站出口的搖搖車，數字盤停在西元 1830',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '捷運站出口\n也有搖搖車！\n西元 1830！', x: 18, y: 410, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] },
        { scene: 'v5e6_town', shot: '大格：抵達煙霧瀰漫的曼徹斯特街頭',
          back: [{ k: 'car', x: 130, y: 640, s: .85, rot: -4 }],
          actors: [
            { c: 'kai', x: 300, y: 650, s: 1.1, pose: 'scared', expr: 'shock', sweat: 2, look: .4 },
            { c: 'he', x: 440, y: 660, s: 1.05, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .6 }
          ],
          caption: [{ t: '大約 196 年前，曼徹斯特', en: 'MANCHESTER · 1830', x: 0, y: 14 }],
          bubbles: [
            { t: '嗶——本站：\n曼徹斯特。\n免費附贈翻譯功能。', x: 14, y: 390, w: 240, kind: 'car', fs: 22, tail: [120, 540] },
            { t: '咳咳！\n好多煙！', x: 210, y: 280, w: 170, fs: 24, tail: [300, 440] },
            { t: '到處都是\n煙囪……', x: 360, y: 200, w: 150, fs: 23, tail: [440, 470] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v5e6_mill', shot: '滿版：棉紡織工廠裡，一排排紡紗機轉個不停，有很多小孩在工作',
          actors: [
            { c: 'v5e6_girl', x: 230, y: 700, s: .95, pose: 'hold', expr: 'worry', look: .4 },
            { c: 'v5e6_boss', x: 680, y: 720, s: 1, pose: 'point', expr: 'calm', flip: 1, look: .6 },
            { c: 'v5e6_tom', x: 110, y: 1026, s: 1.3, pose: 'stand', expr: 'calm', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'scared', expr: 'shock', sweat: 2, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '曼徹斯特的棉紡織工廠：機器轟隆隆轉個不停，\n裡面有很多大人，也有很多小孩。', x: 16, y: 16, w: 560 }
          ],
          bubbles: [
            { t: '動作快一點！', x: 470, y: 380, w: 200, kind: 'shout', fs: 24, tail: [660, 520] },
            { t: '這裡有小孩\n在工作！', x: 280, y: 690, w: 180, fs: 24, tail: [452, 790] },
            { t: '他們跟我\n一樣大……', x: 580, y: 700, w: 180, fs: 24, tail: [650, 800] },
            { t: '我也在\n這裡工作。', x: 14, y: 660, w: 170, fs: 24, tail: [110, 800] }
          ],
          sfx: [{ t: '轟隆隆隆', x: 380, y: 200, fs: 46, rot: -6 }] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v5e6_mill', shot: '中景：阿凱湊近機器，湯姆把他拉回來',
          actors: [
            { c: 'kai', x: 340, y: 440, s: 1.05, pose: 'lookup', expr: 'awe', look: -.4 },
            { c: 'v5e6_tom', x: 560, y: 452, s: 1.1, pose: 'push', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這台機器\n好大聲喔！', x: 60, y: 60, w: 200, tail: [330, 250] },
            { t: '退後！頭髮或衣服\n被捲進去很危險！', x: 400, y: 20, w: 280, kind: 'shout', fs: 24, tail: [556, 260] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：在工廠接線頭的湯姆',
          actors: [{ c: 'v5e6_tom', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'calm', look: -.2 }],
          bubbles: [{ t: '我叫湯姆。\n斷掉的線，\n要馬上接起來。', x: 14, y: 60, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '紡織工廠的小工人：湯姆（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '知識格：瓦特改良的蒸汽機',
          back: [{ k: 'v5e6_engine', x: 260, y: 540, s: 1.05 }],
          caption: [
            { t: '瓦特在 1769 年取得專利：\n加一個分開的「冷凝器」。', x: 0, y: 14, w: 464 },
            { t: '改良後的蒸汽機省了大約三分之二的煤，工廠也用得起了。', x: 0, y: 108, w: 464, dark: false }
          ],
          bubbles: [{ t: '一台蒸汽機\n帶動整排機器！', x: 240, y: 190, w: 210, fs: 23 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#C9CFC4', sun: [.85, .14], hz: .5, far: 'g3', ground: 'g3', near: 'g5' }, shot: '滿版：1830 年 9 月 15 日，利物浦－曼徹斯特鐵路通車，冒煙的火車頭拉著車廂',
          back: [
            { k: 'crowd', x: 400, y: 520, n: 16, W: 760, s: .8, op: .55 },
            { k: 'rail', x: 400, y: 680, W: 820 },
            { k: 'coach', x: 140, y: 676, f: 'g7' },
            { k: 'coach', x: 390, y: 676, f: 'red' },
            { k: 'loco', x: 640, y: 676, s: .9, smoke: 1 }
          ],
          actors: [
            { c: 'v5e6_tom', x: 110, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'raise', expr: 'grin', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [{ t: '1830 年 9 月 15 日，利物浦－曼徹斯特鐵路通車：\n第一條連起兩個城市、按時刻表載客的蒸汽火車鐵路。', x: 16, y: 16, w: 640 }],
          bubbles: [
            { t: '到利物浦大約 50 公里，\n坐火車只要兩個小時！', x: 14, y: 660, w: 300, fs: 23, tail: [130, 800] },
            { t: '火車！\n冒煙的火車！', x: 320, y: 650, w: 190, fs: 24, tail: [452, 780] },
            { t: '以前坐運河的船，\n要 12 個小時耶。', x: 540, y: 690, w: 230, fs: 22, tail: [650, 806] }
          ],
          sfx: [{ t: '嗚——！', x: 560, y: 140, fs: 56, rot: -6 }] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v5e6_flow', shot: '細長知識格：棉花從港口坐火車到工廠，做成布運出去',
          actors: [{ c: 'v5e6_tom', x: 80, y: 1034, s: 1.1, pose: 'pointUp', expr: 'happy', look: .6 }],
          caption: [{ t: '棉花從國外運到利物浦，\n坐火車到曼徹斯特，\n做成布再運出去。', x: 0, y: 14, w: 300 }],
          bubbles: [{ t: '工廠一天\n能做好多布！', x: 150, y: 850, w: 186, fs: 22, tail: [112, 890] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：童工和後來的法律',
          caption: [{ t: '工廠裡的小孩後來怎麼了？', x: 0, y: 16 }],
          cards: [
            { icon: 'question', y: 80, t: '1832 年國會調查：有人 6 歲\n就進工廠，忙的時候從早上\n5 點做到晚上 9 點。' },
            { icon: 'scale', y: 346, t: '1833 年《工廠法》：未滿 9 歲\n不准在紡織工廠工作；未滿 13 歲\n一天最多 9 小時。' },
            { icon: 'scrollI', y: 612, t: '工作的小孩每天要上學\n至少 2 小時，還派 4 位\n督察到工廠檢查。' }
          ],
          bubbles: [{ t: '法律改了，\n小孩才能去上學。', x: 24, y: 906, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v5e6_town', shot: '矮寬格：工廠門口，阿凱想到自己的 T 恤',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'think', expr: 'think', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'smug', hold: 'notebook', look: .8 },
            { c: 'v5e6_tom', x: 330, y: 392, s: .95, pose: 'hold', expr: 'happy', flip: 1, look: .6 }
          ],
          caption: [{ t: '今天：臺灣《勞動基準法》規定，\n原則上不能僱用未滿 15 歲的人。', x: 396, y: 300, w: 384, dark: false }],
          bubbles: [
            { t: '我的 99 元 T 恤，\n是誰做的呢？', x: 12, y: 30, w: 230, fs: 23, tail: [100, 200] },
            { t: '回去看看\n衣服的標籤吧！', x: 250, y: 20, w: 200, fs: 23, tail: [200, 210] },
            { t: '聽說英國的船，\n要去中國買茶……', x: 470, y: 40, w: 250, fs: 23, tail: [340, 216] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E3C9A0', sun: [.84, .3], hz: .55, far: 'g3', ground: 'g3', near: 'basalt3' }, shot: '收尾大格：傍晚的車站，準備出發',
          back: [{ k: 'rail', x: 400, y: 380, W: 820 }, { k: 'coach', x: 560, y: 376, s: .6, f: 'g7' }, { k: 'car', x: 640, y: 600, s: .8 }],
          actors: [
            { c: 'v5e6_tom', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '你們要好好上學喔！\n我也好想去上學。', x: 14, y: 190, w: 236, fs: 22, tail: [110, 340] },
            { t: '便宜的背後，\n也有人在做工。\n我會好好穿。', x: 256, y: 160, w: 210, fs: 22, tail: [284, 336] },
            { t: '第 5 冊，\n收集完成！', x: 470, y: 216, w: 170, fs: 22, tail: [478, 372] },
            { t: '嗶嗶——\n下一站，\n廣州！', x: 630, y: 24, w: 146, kind: 'car', fs: 22, tail: [660, 480] }
          ],
          caption: [{ t: '下一話：茶、白銀和鴉片', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '瓦特改良蒸汽機', t: '瓦特不是第一個做出蒸汽機的人，他在 1769 年取得專利，加了一個分開的冷凝器，讓蒸汽機省下大約三分之二的煤，工廠、磨坊也用得起。' },
      { h: '冒煙的棉紡織工廠', t: '曼徹斯特有好多棉紡織工廠，用蒸汽機帶動一排排機器。棉花從利物浦港上岸，做成布再運出去。' },
      { h: '第一列城市間的火車', t: '1830 年 9 月 15 日，利物浦－曼徹斯特鐵路通車，全長大約 50 公里，是第一條連起兩個城市、按時刻表載客的蒸汽火車鐵路。坐火車大約兩小時，坐運河的船大約要 12 小時。' },
      { h: '工廠裡的小孩', t: '1832 年英國國會調查童工，有人說自己 6 歲就進工廠，忙的時候從早上 5 點做到晚上 9 點。' },
      { h: '後來的法律', t: '1833 年《工廠法》：未滿 9 歲不准在紡織工廠工作，未滿 13 歲一天最多 9 小時、每天上學 2 小時，並派督察檢查。今天臺灣的《勞動基準法》也規定，原則上不能僱用未滿 15 歲的人。' }
    ],
    map: {
      bounds: { lon: [-6.5, 2], lat: [50.4, 56] },
      cap: '紅點是曼徹斯特，紅色虛線是 1830 年通車的利物浦－曼徹斯特鐵路（簡化畫法）。（海岸線是今天的樣子，簡化畫法。）',
      alt: '英國地圖：曼徹斯特在英格蘭西北部，西邊靠海的是利物浦，兩個城市之間畫了一條鐵路，東南邊是倫敦',
      routes: [{ pts: [[53.41, -2.98], [53.45, -2.6], [53.48, -2.24]] }],
      labels: [
        { t: '英國', lat: 52.4, lon: -1.2, size: 26, f: 'g9' },
        { t: '愛爾蘭海', lat: 53.9, lon: -4.9, size: 18, f: 'cream' },
        { t: '北海', lat: 54.6, lon: .6, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '曼徹斯特', lat: 53.48, lon: -2.24, main: 1, side: 'r' },
        { n: '利物浦', lat: 53.41, lon: -2.98, side: 'l', dy: 16 },
        { n: '倫敦', lat: 51.51, lon: -.13, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：瓦特改良蒸汽機以後六十年，蒸汽火車開始在城市之間載客。',
      items: [
        { y: 1769, when: '西元 1769 年', t: '瓦特改良\n蒸汽機', side: 'u', w: 130 },
        { y: 1830, when: '西元 1830 年', t: '利物浦－曼徹斯特\n鐵路通車', side: 'd', main: 1, w: 200 },
        { y: 1833, when: '西元 1833 年', t: '《工廠法》\n保護童工', side: 'u', w: 150 },
        { y: 2026, when: '今天', t: '火箭號收藏在\n英國的科學博物館', side: 'd', w: 200 }
      ]
    },
    sources: [
      '科學博物館部落格〈James Watt and the separate condenser〉（1769 年 1 月 5 日取得專利；加了冷凝器的蒸汽機省下約三分之二的煤，工廠、磨坊也能用）',
      '科學博物館集團館藏〈Stephenson\'s Rocket〉（1829 年雨山試驗得勝，取得利物浦－曼徹斯特鐵路的合約；平均時速 12 英里）',
      '利物浦大學維多利亞美術館部落格〈Liverpool and Manchester Railway〉（1830 年 9 月 15 日通車；約 31 英里；第一條城市間客貨鐵路、按時刻表行駛；約兩小時，運河約 12 小時；棉花等原料運進曼徹斯特、成品運回港口）',
      '漢諾威學院歷史系〈The Sadler Committee Report〉節錄（1832 年證詞：6 歲進工廠、忙時早上 5 點做到晚上 9 點）',
      'education-uk.org〈1833 Factories Act〉法條全文（未滿 9 歲不得受僱；未滿 13 歲每週最多 48 小時、每天最多 9 小時；每天上學 2 小時；4 位督察）',
      '全國法規資料庫《勞動基準法》第 45 條（雇主原則上不得僱用未滿 15 歲之人）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1830 年通車的那條鐵路，連接哪兩個城市？', opts: ['利物浦和曼徹斯特', '伯明罕和曼徹斯特', '倫敦和利物浦', '巴黎和凡爾賽'], a: 0, why: '1830 年 9 月 15 日，利物浦－曼徹斯特鐵路通車，大約 50 公里，坐火車大約兩小時。' },
      { id: 'q2', d: 1, type: 'tf', q: '瓦特發明了世界上第一台蒸汽機。', a: false, why: '不對！瓦特以前就有蒸汽機了。瓦特是把它改良得更省煤，工廠才用得起。' },
      { id: 'q3', d: 2, type: 'mc', q: '1833 年英國的《工廠法》規定了什麼？', opts: ['未滿 9 歲不能在紡織工廠工作', '小孩每天至少要工作 12 個小時', '只有大人才可以去學校上課', '工廠一律不准再用蒸汽機'], a: 0, why: '1833 年《工廠法》規定未滿 9 歲不准在紡織工廠工作，未滿 13 歲一天最多 9 小時，還要每天上學 2 小時。' },
      { id: 'q4', d: 2, type: 'match', q: '把左右配成一對。', pairs: [['瓦特', '改良蒸汽機，省下很多煤'], ['利物浦', '棉花上岸的港口'], ['曼徹斯特', '有很多棉紡織工廠的城市'], ['1833 年《工廠法》', '規定童工的年齡和工作時間']], why: '瓦特改良蒸汽機；棉花從利物浦港上岸；曼徹斯特有很多棉紡織工廠；1833 年《工廠法》保護童工。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「工業革命讓東西變便宜，所以對每個人都只有好處。」根據這一話，哪個說法最正確？', opts: ['不一定，很多小孩在工廠工作很久', '對，工廠裡的人每天都只工作一下子', '對，那時候的工廠裡沒有任何小孩', '不對，工業革命讓東西變得更貴了'], a: 0, why: '工廠讓布變得又多又便宜，可是很多人、包括小孩，在工廠工作很久；後來英國才訂了《工廠法》保護童工。便宜的背後，也要想想是誰在做。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
