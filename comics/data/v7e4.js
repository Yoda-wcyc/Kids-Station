/* 世界史漫畫 第 7 冊 現代世界・第 4 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：臺灣的經濟發展（從加工出口到半導體）。格式：comics/CONTRACT.md
   ⚠ 這一話不寫任何公司名稱、股價、「全世界最強」之類的說法，也不寫兩岸政治。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, col, place, rect, poly, circ, ell, path, txt, both, groundShadow } = K;
    // 晶圓：圓片＋格子（一格＝一顆晶片）
    const wafer = (r, f) => { let s = circ(0, 0, r, f || '#9FB3C8') + circ(-r * .3, -r * .3, r * .5, 'rgba(255,255,255,.18)'); const n = 7, g = r * 2 / n; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const x = -r + i * g + g * .1, y = -r + j * g + g * .1; if (Math.hypot(x + g * .4, y + g * .4) < r * .86) s += rect(x, y, g * .8, g * .8, C.gold, 1, 'opacity=".75"'); } return s + rect(-r * .2, r * .94, r * .4, r * .08, C.paper2); };
    root.ComicArt.extend({
      scenes: {
        // 1987 年代的潔淨室（無塵室）：黃色燈光、一台台機器
        v7e4_fab(w, h) {
          let s = rect(0, 0, w, h, '#EFE3A6') + rect(0, 0, w, h * .08, '#E2D27E');
          for (let x = 10; x < w; x += 70) s += rect(x, h * .02, 50, h * .04, '#FFF6C8', 3);
          s += rect(0, h * .72, w, h * .28, '#E9E6D8');
          [[.06, .3, .34], [.5, .26, .3]].forEach(([x, y, ww]) => { s += both(rect(w * x, h * y, w * ww, h * .42, '#D9D6C8', 6)) + rect(w * x + 12, h * y + 14, w * ww - 24, h * .1, C.basalt2, 4) + rect(w * x + 20, h * y + 22, 40, 6, C.g3) + circ(w * (x + ww) - 24, h * y + 40, 7, C.red) + rect(w * x + 12, h * (y + .2), w * ww - 24, 8, C.paper3); });
          return { bg: s };
        },
        // 細長格：從加工出口到晶圓代工，五站
        v7e4_path(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const pts = [[70, h * .9], [250, h * .74], [80, h * .58], [250, h * .42], [90, h * .26]];
          for (let i = 0; i < pts.length - 1; i++) s += K.cap(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 18, C.paper3);
          const lab = [['1966', '加工出口區', '組裝、加工'], ['1973', '工研院成立', '研究新技術'], ['1976', '去美國學', '做積體電路'], ['1980', '新竹科學園區', '成立'], ['1987', '晶圓代工', '專門幫別人做晶片']];
          pts.forEach(([x, y], i) => {
            const right = x < w / 2, tx = right ? x + 30 : x - 30, a = right ? 'start' : 'end';
            s += circ(x, y, i === 4 ? 22 : 15, i === 4 ? 'url(#cm-redglow)' : C.g7) + circ(x, y, i === 4 ? 11 : 7, i === 4 ? C.red : C.cream);
            s += txt(tx, y - 18, lab[i][0], 26, i === 4 ? C.red : C.g7, { a }) + txt(tx, y + 12, lab[i][1], 22, C.ink, { a }) + txt(tx, y + 38, lab[i][2], 17, C.wood, { a, w: 700 });
          });
          return { bg: s };
        }
      },
      props: {
        // 捷運站出口：玻璃雨遮＋「出口」牌
        v7e4_exit: x => place(x, both(rect(-150, -180, 300, 180, '#C9D3CC', 6)) + rect(-150, -190, 300, 16, C.g7, 4) + rect(-110, -160, 220, 160, '#7F9488', 4) + rect(-70, -150, 140, 30, C.cream, 4) + txt(0, -127, '出口', 22, C.g9) + rect(-6, -120, 12, 120, C.paper3)),
        // 無塵室的門：玻璃門＋「無塵室」牌
        v7e4_cleanDoor: x => place(x, both(rect(-80, -230, 160, 230, C.paper3, 4)) + rect(-66, -200, 60, 190, '#B9CBD3', 3) + rect(6, -200, 60, 190, '#B9CBD3', 3) + rect(-90, -262, 180, 30, C.g7, 4) + txt(0, -240, '無塵室', 20, C.cream)),
        // 修理店的櫃檯
        v7e4_counter: x => { const W = x.W || 300; return place(x, groundShadow(0, 2, W * .55, 6) + both(rect(-W / 2, -90, W, 90, C.g7, 4)) + rect(-W / 2 - 6, -98, W + 12, 12, C.wood, 3)); },
        v7e4_wafer: x => place(x, wafer(x.r || 50)),
        v7e4_tab: x => place(x, rect(-60, -86, 120, 86, C.ink, 8) + rect(-52, -78, 104, 70, x.on ? C.g3 : '#1C2420', 4))
      },
      holds: {
        v7e4_waferH: () => `<g transform="translate(6 -26)">` + wafer(30) + `</g>`,
        v7e4_tabH: () => rect(-26, -40, 52, 38, C.ink, 5) + rect(-22, -36, 44, 30, '#1C2420', 3),
        v7e4_tabOn: () => rect(-26, -40, 52, 38, C.ink, 5) + rect(-22, -36, 44, 30, C.g3, 3) + rect(-16, -30, 20, 4, C.cream) + rect(-16, -22, 30, 4, C.cream)
      },
      icons: {
        v7e4_waferI() { return rect(0, 0, 120, 90, C.g3) + `<g transform="translate(60 45)">` + wafer(36) + `</g>`; },
        v7e4_lightI() { return rect(0, 0, 120, 90, '#EFE3A6') + poly('46,6 74,6 70,22 50,22', C.ink) + poly('50,22 70,22 94,62 26,62', 'rgba(255,240,150,.9)') + rect(20, 62, 80, 10, '#9FB3C8', 3) + [30, 46, 62, 78].map(x => rect(x, 64, 10, 6, C.gold)).join(''); },
        v7e4_chipI() { let s = rect(0, 0, 120, 90, C.g7) + rect(38, 23, 44, 44, C.ink, 4) + rect(46, 31, 28, 28, C.basalt3, 2); for (let i = 0; i < 4; i++) s += rect(42 + i * 10, 15, 4, 8, C.gold) + rect(42 + i * 10, 67, 4, 8, C.gold) + rect(30, 27 + i * 10, 8, 4, C.gold) + rect(82, 27 + i * 10, 8, 4, C.gold); return s; },
        v7e4_globeI() { return rect(0, 0, 120, 90, C.paper) + circ(60, 45, 34, C.blue) + path('M38 30 q14 -10 28 0 q-4 14 -18 16 q-12 -4 -10 -16Z', C.g5) + path('M66 50 q18 -4 22 10 q-10 12 -22 6Z', C.g5) + path('M30 60 Q60 10 92 40', 'none', `stroke="${C.red}" stroke-width="3" stroke-dasharray="6 5"`); }
      },
      cast: {
        v7e4_yun: { name: '阿芸（虛構）', skin: 'skin', top: 'red', skirt: 'g9', hair: 'bun', r: 22, k: .93 },
        v7e4_mom: { name: '阿芸的媽媽（虛構）', skin: 'skin', top: 'blue', skirt: 'g9', hair: 'short', acc: ['glasses'], r: 19, k: 1.1 },
        v7e4_momW: { name: '阿芸的媽媽（穿無塵衣）', skin: 'skin', robe: 'cream', trim: 'paper3', hat: 'hood', hatC: 'cream', acc: ['glasses'], r: 19, k: 1.1 },
        v7e4_kaiW: { name: '阿凱（穿無塵衣）', skin: 'skin', robe: 'cream', trim: 'paper3', hat: 'hood', hatC: 'cream', r: 22 },
        v7e4_heW: { name: '小禾（穿無塵衣）', skin: 'skin', robe: 'cream', trim: 'paper3', hat: 'hood', hatC: 'cream', acc: ['glasses'], r: 22, k: .9 },
        v7e4_yunW: { name: '阿芸（穿無塵衣）', skin: 'skin', robe: 'cream', trim: 'paper3', hat: 'hood', hatC: 'cream', r: 22, k: .93 },
        v7e4_tech: { name: '修理店的叔叔', skin: 'skinB', top: 'g7', bottom: 'ink', leg: 'ink', hair: 'short', acc: ['glasses'], r: 19, k: 1.1 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v7e4 = {
    id: 'v7e4', vol: '第 7 冊 現代世界', volNo: 7, ep: 4, title: '新竹的小晶片', next: '連起全世界的網',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！你可以去潔淨室當導覽員了（記得先穿無塵衣）。',
    note: '阿凱、小禾、阿芸、阿芸的媽媽和修理店的叔叔都是虛構的角色。科學園區、潔淨室和機器的畫面是簡化的想像圖，做晶片的步驟也簡化成三步，用「做餅乾」來比喻；真正的做法有好幾百道步驟。這一話不介紹任何一家公司，只講臺灣產業怎麼一步步改變。',
    curriculum: '國中社會會再學到：臺灣的經濟發展（從加工出口到半導體）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g3', near: 'g5' },
      back: [
        { k: 'building', win: 'band', x: 140, y: 920, W: 220, H: 150 , f: 'cream' },
        { k: 'v7e4_wafer', x: 650, y: 860, r: 90 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'stack3', panels: [
        { scene: 'mrt', sceneOpt: { seat: .58, poles: [.2, .62] }, shot: '中景：捷運車廂裡，阿凱抱著黑掉的平板，小禾翻白眼',
          actors: [
            { c: 'kai', x: 250, y: 330, s: 1, pose: 'hold', expr: 'worry', hold: 'v7e4_tabH', sweat: 2, look: .5 },
            { c: 'he', x: 540, y: 332, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '平板黑掉了！\n我的作業在裡面！', x: 20, y: 30, w: 250, tail: [240, 140] },
            { t: '修理店說，\n要換小晶片。', x: 380, y: 26, w: 220, tail: [536, 158] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sky: '#DDE3D8', sun: [.86, .2], hz: .72, far: false, ground: 'paper3' }, shot: '中景：捷運站出口旁的搖搖車，阿凱投下 10 元',
          back: [
            { k: 'v7e4_exit', x: 640, y: 248 },
            { k: 'car', x: 280, y: 300, s: .62 }
          ],
          actors: [
            { c: 'he', x: 80, y: 330, s: .95, pose: 'scared', expr: 'shock', look: .5 },
            { c: 'kai', x: 440, y: 330, s: 1, pose: 'offer', expr: 'grin', flip: 1, look: -.3 }
          ],
          bubbles: [
            { t: '晶片可以吃嗎？\n我自己去看！', x: 290, y: 20, w: 236, kind: 'shout', fs: 23, tail: [430, 150] },
            { t: '又來了……', x: 20, y: 70, w: 150, fs: 22, tail: [80, 160] }
          ] },
        { scene: 'coin', sceneOpt: { year: '1987', era: '西元' }, shot: '橫的大特寫：投幣孔和數字盤，數字倒轉停在西元 1987',
          props: [{ k: 'coin', x: 156, y: 86, r: 24, rot: 12 }],
          bubbles: [{ t: '倒轉了！\n停在 1987 年！', x: 560, y: 20, w: 210, fs: 24, kind: 'think' }],
          sfx: [{ t: '叮！', x: 200, y: 16, fs: 40, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#D3E0D2', sun: [.84, .1], hz: .48, far: 'g3', ground: 'g3', near: 'paper3' }, shot: '滿版遠景：1987 年的新竹科學工業園區，一棟棟新大樓、大馬路、園區的招牌',
          back: [
            { k: 'building', win: 'band', x: 160, y: 500, W: 280, H: 170 , f: 'cream' },
            { k: 'building', win: 'band', x: 520, y: 490, W: 320, H: 200, f: 'paper2', g: 'g7' },
            { k: 'tree', kind: 'round', x: 330, y: 520, H: 130 },
            { k: 'tree', kind: 'round', x: 720, y: 530, H: 150 },
            { k: 'road', x: 390, y: 1040, W: 620, w2: 40, L: 540, f: 'paper3' },
            { k: 'sign', t: '新竹科學工業園區', x: 590, y: 690, W: 300, H: 50, fs: 26 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 1 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '1987 年，新竹科學工業園區', en: 'HSINCHU SCIENCE PARK · 1987', x: 0, y: 18 },
            { t: '1980 年成立，是臺灣第一個科學園區。旁邊就有工研院和大學。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：新竹。\n免費附贈翻譯功能。', x: 14, y: 716, w: 300, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '翻譯？\n這裡講中文啊！', x: 330, y: 660, w: 196, tail: [462, 770], fs: 24 },
            { t: '我們回到\n臺灣了！', x: 560, y: 712, w: 190, tail: [618, 810], fs: 24 }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .8 }, shot: '細長格：阿凱衝向潔淨室的門，阿芸一把拉住他',
          back: [{ k: 'v7e4_cleanDoor', x: 200, y: 832 }],
          actors: [
            { c: 'kai', x: 180, y: 1000, s: 1.05, pose: 'run', expr: 'grin', look: .5 },
            { c: 'v7e4_yun', x: 90, y: 1020, s: 1.05, pose: 'push', expr: 'yell', look: .5 }
          ],
          bubbles: [
            { t: '晶片在裡面吧？\n我先進去！', x: 40, y: 330, w: 290, fs: 24, tail: [190, 800] },
            { t: '停！\n要先穿無塵衣！', x: 14, y: 470, w: 250, kind: 'shout', fs: 25, tail: [100, 830] },
            { t: '一粒灰塵\n就可能讓晶片壞掉！', x: 30, y: 620, w: 290, fs: 23, tail: [100, 830] }
          ],
          caption: [{ t: '潔淨室（無塵室）門口', x: 0, y: 14 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '大格：阿芸自我介紹，說阿嬤和媽媽的工作',
          actors: [
            { c: 'v7e4_yun', x: 140, y: 900, s: 1.4, pose: 'point', expr: 'smug', look: .4 },
            { c: 'he', x: 330, y: 906, s: 1.3, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '我阿嬤以前在高雄的\n加工出口區，\n組裝電子零件。', x: 20, y: 150, w: 300, fs: 23, tail: [130, 640] },
            { t: '我媽媽現在\n在這裡做晶片！', x: 60, y: 330, w: 260, fs: 23, tail: [140, 640] },
            { t: '從「幫別人組裝」\n變成「自己做晶片」？', x: 110, y: 480, w: 300, fs: 22, tail: [326, 660] }
          ],
          tag: { t: '新竹的小孩：阿芸（虛構）', left: 8, top: 990 } }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'v7e4_fab', shot: '大格：大家穿上無塵衣，走進黃色燈光的潔淨室；阿芸的媽媽拿著一片晶圓',
          actors: [
            { c: 'v7e4_momW', x: 330, y: 830, s: 1.1, pose: 'offer', expr: 'smug', hold: 'v7e4_waferH', flip: 1, look: .4 },
            { c: 'v7e4_kaiW', x: 120, y: 1010, s: 1.1, pose: 'fists', expr: 'grin', look: .5 },
            { c: 'v7e4_heW', x: 400, y: 1020, s: 1.05, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .3 }
          ],
          caption: [{ t: '潔淨室（無塵室）：空氣一直過濾，\n灰塵比外面少很多很多。', x: 0, y: 14, w: 460 }],
          bubbles: [
            { t: '這片圓圓的叫「晶圓」，\n上面有很多小晶片。', x: 120, y: 470, w: 320, fs: 22, tail: [320, 640] },
            { t: '我變成\n白白的雪人了！', x: 14, y: 700, w: 220, fs: 23, tail: [110, 790] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：做晶片第一步（晶圓）',
          caption: [{ t: '做晶片，像做餅乾', x: 0, y: 10 }],
          cards: [{ icon: 'v7e4_waferI', y: 70, x: 10, w: 246, t: '① 把沙子裡的「矽」\n做成又薄又圓的\n「晶圓」，像一片\n超薄的大餅乾。' }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：做晶片第二、三步（印電路、切小塊）',
          cards: [{ icon: 'v7e4_lightI', y: 14, x: 10, w: 246, t: '② 用光把電路圖\n「印」上去，一層\n又一層。\n③ 切成小晶片，\n包好、測試。' }] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v7e4_path', shot: '細長格：臺灣從加工出口區走到晶圓代工的五站',
          caption: [{ t: '臺灣怎麼走到這裡？', x: 0, y: 14 }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：晶圓代工、全球分工',
          caption: [{ t: '一顆晶片，很多人接力', x: 0, y: 16 }],
          cards: [
            { icon: 'v7e4_chipI', y: 80, t: '以前做晶片的公司，要自己設計，\n也要自己蓋很貴的工廠。' },
            { icon: 'scale', y: 344, t: '1987 年起，新竹有了\n「晶圓代工」：設計的人\n畫好電路圖，交給工廠做。\n像蛋糕師傅畫好設計圖，\n交給大烤箱工廠烤。' },
            { icon: 'v7e4_globeI', y: 690, t: '畫設計圖、做機器、做材料、\n做晶片、組裝平板的人，\n常常在不同的國家。' }
          ] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .6, far: 'g3', ground: 'g3' }, shot: '矮寬格：傍晚，在園區門口跟阿芸和媽媽道別',
          back: [{ k: 'building', win: 'band', x: 600, y: 240, W: 280, H: 140 , f: 'cream' }, { k: 'car', x: 690, y: 380, s: .55 }],
          actors: [
            { c: 'v7e4_yun', x: 120, y: 384, s: .9, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'v7e4_mom', x: 210, y: 388, s: .9, pose: 'raise', expr: 'smug', look: .6 },
            { c: 'kai', x: 370, y: 384, s: .85, pose: 'wave', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 470, y: 388, s: .85, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '一台機器，是全世界\n很多人一起做出來的。', x: 20, y: 20, w: 320, fs: 22, tail: [200, 196] },
            { t: '那我的平板\n也是囉！', x: 360, y: 60, w: 180, fs: 22, tail: [366, 222] }
          ] },
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'g3', hz: .74, window: [.04, .12, .3, .4], winC: 'g2' }, shot: '收尾大格：回到今天，修理店，平板修好亮起來；搖搖車在店門外',
          back: [
            { k: 'shelf', x: 640, y: 463, W: 180, H: 260 },
            { k: 'v7e4_counter', x: 470, y: 520, W: 320 },
            { k: 'car', x: 150, y: 312, s: .4 }
          ],
          actors: [
            { c: 'v7e4_tech', x: 520, y: 440, s: 1, pose: 'offer', expr: 'happy', flip: 1, look: .4, bust: 1 },
            { c: 'kai', x: 250, y: 580, s: 1.2, pose: 'hold', expr: 'grin', hold: 'v7e4_tabOn', look: .5 },
            { c: 'he', x: 120, y: 586, s: 1.1, pose: 'hold', expr: 'smug', hold: 'notebook', look: .6 }
          ],
          bubbles: [
            { t: '修好了！\n謝謝全世界！', x: 200, y: 150, w: 210, fs: 24, tail: [270, 350] },
            { t: '先謝謝\n修理的叔叔啦。', x: 14, y: 270, w: 190, fs: 22, tail: [110, 400] },
            { t: '新晶片\n裝好囉！', x: 560, y: 120, w: 160, fs: 22, tail: [528, 250] },
            { t: '嗶嗶——\n下一站，\n日內瓦！', x: 14, y: 20, w: 146, kind: 'car', fs: 21, tail: [150, 262] }
          ],
          caption: [{ t: '下一話：連起全世界的網', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '加工出口區', t: '1966 年，臺灣第一個加工出口區在高雄成立：工廠把外國運來的材料加工、組裝，再賣到國外，兩年就請了兩萬多人。' },
      { h: '學做積體電路', t: '1973 年工研院成立。1976 年派人去美國學做積體電路（晶片），1977 年蓋好示範工廠。' },
      { h: '新竹科學園區', t: '1980 年 12 月，新竹科學工業園區成立，是臺灣第一個科學園區，旁邊有工研院和大學。' },
      { h: '晶圓代工', t: '1987 年，新竹開始有專門幫別人做晶片的「晶圓代工」：設計的人不用自己蓋很貴的工廠，畫好電路圖交給工廠做就好。' },
      { h: '全球分工', t: '一台平板裡的晶片，從設計、機器、材料、製造到組裝，常常是好幾個國家的人接力完成的。' }
    ],
    map: {
      bounds: { lon: [117.4, 124.4], lat: [21.2, 26.2] },
      cap: '紅點是新竹。1966 年的加工出口區在高雄。海岸線是簡化的畫法。',
      alt: '臺灣地圖：新竹在西北邊（紅點），臺北在北邊，高雄在西南邊',
      taiwan: false,
      labels: [
        { t: '臺灣海峽', lat: 23.0, lon: 119.2, size: 20, f: 'cream' },
        { t: '臺灣', lat: 23.6, lon: 121.0, size: 26, f: 'g9' },
        { t: '太平洋', lat: 22.6, lon: 123.2, size: 22, f: 'cream' }
      ],
      cities: [
        { n: '新竹', lat: 24.8, lon: 120.97, main: 1, side: 'l' },
        { n: '臺北', lat: 25.03, lon: 121.56, side: 'r' },
        { n: '高雄', lat: 22.62, lon: 120.3, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從加工出口區到晶圓代工，大約走了 20 年。',
      items: [
        { y: 1966, when: '西元 1966 年', t: '高雄\n加工出口區', side: 'u', w: 150 },
        { y: 1976, when: '1976 年', t: '去美國學做\n積體電路', side: 'd', w: 150 },
        { y: 1980, when: '1980 年', t: '新竹\n科學園區', side: 'u', w: 130 },
        { y: 1987, when: '西元 1987 年', t: '開始\n晶圓代工', side: 'd', main: 1, w: 150 },
        { y: 2026, when: '今天', t: '你的平板裡\n可能就有', side: 'u', w: 150 }
      ]
    },
    sources: [
      '行政院珍貴史料〈高雄加工出口區落成〉、經濟部統計處加工出口區勞動力分析（1966 年 12 月在高雄設立；把農村的勞動力帶到輕工業；成立兩年就僱用兩萬多人）',
      '工研院 50 周年網站〈臺灣產業發展的推手 工研院的誕生〉〈向RCA取經 發展臺灣積體電路〉〈從0到1發展半導體〉（1973 年 7 月 5 日成立；1976 年積體電路技術移轉、19 人赴美受訓；1977 年示範工廠；1980 年衍生第一家積體電路公司；1987 年首創晶圓代工模式，讓設計公司不必自己蓋晶圓廠）',
      '新竹科學園區管理局〈園區簡介〉與兒童版〈園區介紹〉（1980 年 12 月 15 日成立、臺灣第一個科學園區、周邊有工研院和大學、半導體等產業）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '進潔淨室做晶片之前，為什麼一定要穿無塵衣？', opts: ['灰塵可能讓晶片壞掉', '因為裡面冷到會結冰', '這樣拍照比較好看', '怕身上的錢被偷走'], a: 0, why: '晶片上的電路非常非常小，一粒灰塵就可能讓它壞掉，所以潔淨室的空氣一直過濾，人也要包得緊緊的。' },
      { id: 'q2', d: 1, type: 'tf', q: '「晶圓代工」的意思是：工廠專門幫設計晶片的人，把晶片做出來。', a: true, why: '對！設計的人畫好電路圖，交給代工的工廠做，就不用自己蓋很貴的工廠。' },
      { id: 'q3', d: 2, type: 'order', q: '把臺灣走過的路照先後排好。', items: ['高雄設立加工出口區', '派人去美國學做積體電路', '新竹科學工業園區成立', '新竹開始有晶圓代工'], why: '1966 年加工出口區、1976 年去美國學技術、1980 年竹科成立、1987 年開始晶圓代工。' },
      { id: 'q4', d: 2, type: 'mc', q: '用「做餅乾」來比喻，做晶片的步驟哪一個順序對？', opts: ['做晶圓→印電路→切成小晶片', '切成小晶片→做晶圓→印電路', '印電路→切成小晶片→做晶圓', '做晶圓→切成小晶片→印電路'], a: 0, why: '先把矽做成薄薄的圓片（晶圓），再用光一層層印上電路，最後切成小晶片、包好測試。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「我的平板一定是一個國家、一家工廠，從頭到尾自己做出來的。」根據這一話，哪個說法最正確？', opts: ['不對，設計、機器、材料和組裝常常在不同國家', '對，晶片和平板都是在同一個房間裡從頭做完的', '對，因為全世界只有一個國家會做晶片', '不對，平板是從月球運回來的'], a: 0, why: '這叫全球分工：畫設計圖、做機器、做材料、做晶片、組裝，常常是好幾個國家的人接力完成的。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
