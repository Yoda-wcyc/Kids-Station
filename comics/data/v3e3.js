/* 世界史漫畫 第 3 冊 中古世界・第 3 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：宋代的商業與文化交流（活字印刷）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, path, txt, both, prop, place, groundShadow } = K;
    const mirror = (x, y, t, size, f) => txt(0, y, t, size, f, { tr: `translate(${x} 0) scale(-1 1)` });   // 反過來的字（印版上的字）
    const shop = (x, y, W, H, sign, f) => prop({ k: 'house', x, y, W, H, roof: 'tile', roofC: 'g9', f: f || 'cream' }) + rect(x - 16, y - H - W * .3 + 10, 32, 90, C.red, 3) + sign.split('').map((c, i) => txt(x, y - H - W * .3 + 40 + i * 30, c, 24, C.cream)).join('');
    root.ComicArt.extend({
      scenes: {
        // 現代：社區圖書館裡
        v3e3_lib(w, h) {
          let s = rect(0, 0, w, h, C.paper2) + rect(0, h * .76, w, h * .24, C.wood) + rect(0, h * .76, w, 6, 'rgba(21,23,20,.15)');
          s += prop({ k: 'shelf', x: w * .5, y: h * .76, W: 240, H: 220, seed: 5 }) + prop({ k: 'shelf', x: w * .9, y: h * .76, W: 200, H: 220, seed: 8 });
          return { bg: s };
        },
        // 現代：圖書館門口
        v3e3_libout(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .85, h * .08, 140, 'url(#cm-sun)');
          s += both(rect(w * .08, h * .14, w * .84, h * .46, C.brick3)) + rect(w * .04, h * .12, w * .92, 22, C.g7);
          s += rect(w * .2, h * .2, w * .6, 54, C.g9, 6) + txt(w * .5, h * .2 + 38, '社區圖書館', 32, C.cream);
          for (let i = 0; i < 3; i++) s += rect(w * .14 + i * w * .26, h * .32, w * .18, h * .12, C.g3, 3);
          s += rect(w * .4, h * .46, w * .2, h * .14, C.ink) + rect(0, h * .6, w, h * .4, C.paper3) + rect(0, h * .6, w, 8, 'rgba(21,23,20,.12)');
          s += prop({ k: 'tree', x: w * .06, y: h * .62, H: 230 });
          return { bg: s };
        },
        // 北宋開封的大街：店面開在路邊、招牌一排
        v3e3_street(w, h) {
          const hz = h * .52;
          let s = rect(0, 0, w, h, C.sky) + circ(w * .14, h * .08, 170, 'url(#cm-sun)') + rect(0, hz, w, h - hz, C.sand);
          s += shop(w * .12, hz + 10, 200, 150, '茶', 'cream') + shop(w * .38, hz, 190, 170, '書坊', 'brick3') + shop(w * .64, hz + 10, 200, 150, '布', 'cream') + shop(w * .9, hz, 190, 170, '餅', 'brick3');
          s += path(`M0 ${h * .9} Q${w * .5} ${h * .86} ${w} ${h * .9} L${w} ${h} L0 ${h}Z`, C.brick3);
          return { bg: s };
        },
        // 木頭牆的工坊（書坊、畢昇的工坊）
        v3e3_work(w, h, o) {
          o = o || {}; const hz = h * (o.hz || .66);
          let s = rect(0, 0, w, hz, C.clay3);
          for (let x = 0; x < w; x += 46) s += rect(x, 0, 4, hz, 'rgba(110,80,40,.25)');
          s += rect(0, h * .05, w, 16, C.wood) + rect(0, hz, w, h - hz, C.paper3) + rect(0, hz, w, 6, 'rgba(21,23,20,.15)');
          if (o.win !== false) s += rect(w * .62, h * .12, w * .26, h * .26, C.wood, 3) + rect(w * .62 + 8, h * .12 + 8, w * .26 - 16, h * .26 - 16, C.g3);
          return { bg: s };
        },
        // 一顆泥活字的大特寫：字是反的
        v3e3_type(w, h) {
          let s = rect(0, 0, w, h, C.g3) + groundShadow(w / 2, h * .68, 110, 16);
          s += both(rect(w / 2 - 90, h * .34, 180, 180, C.clay2, 14), 'cm-warm') + rect(w / 2 - 74, h * .34 + 14, 148, 148, C.clay3, 10);
          s += mirror(w / 2, h * .34 + 132, '書', 116, C.wood);
          return { bg: s };
        },
        // 兩塊鐵板輪流用
        v3e3_plates(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          [[w * .27, '印'], [w * .73, '排']].forEach(([x, t], i) => {
            s += both(rect(x - 52, h * .4, 104, 104, C.basalt2, 6)) + rect(x - 46, h * .4 + 6, 92, 92, C.basalt3, 4);
            for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (i === 0 || r * 4 + c < 9) s += rect(x - 42 + c * 22, h * .4 + 10 + r * 22, 18, 18, C.clay3, 2);
            s += circ(x, h * .4 + 150, 26, i ? C.g7 : C.red) + txt(x, h * .4 + 159, t, 26, C.cream);
          });
          return { bg: s };
        }
      },
      props: {
        // 壞掉的影印機
        v3e3_copier: x => place(x, groundShadow(0, 2, 70, 7) + both(rect(-60, -110, 120, 110, C.paper3, 6)) + rect(-54, -124, 108, 18, C.basalt3, 4) + rect(-40, -90, 50, 26, C.g9, 3) + rect(-70, -170, 140, 40, C.red, 6) + txt(0, -142, '故障中', 24, C.cream)),
        // 整頁刻好的雕版
        v3e3_block: x => { let s = groundShadow(0, 2, 80, 7) + both(rect(-74, -100, 148, 100, C.wood, 6), 'cm-warm') + rect(-66, -92, 132, 84, C.clay2, 3); for (let i = 0; i < 4; i++) s += rect(-56 + i * 32, -84, 18, 68, C.ink, 2, 'opacity=".55"'); return place(x, s); },
        // 一疊印好的紙
        v3e3_stack: x => { const n = x.n || 10; let s = groundShadow(0, 2, 60, 6); for (let i = 0; i < n; i++) s += rect(-46 + (i % 3) * 2, -10 - i * 10, 92, 10, i % 2 ? C.cream : C.paper2, 2); return place(x, s); },
        // 排字的鐵板
        v3e3_tray: x => { let s = both(rect(-80, -30, 160, 30, C.basalt2, 4)); for (let c = 0; c < 6; c++) s += rect(-70 + c * 24, -26, 20, 20, C.clay3, 2); return place(x, s); }
      },
      holds: {
        v3e3_type: () => rect(-10, -16, 20, 20, C.clay3, 3) + rect(-6, -12, 12, 12, C.clay2, 2),
        v3e3_block: () => rect(-18, -18, 36, 26, C.wood, 3) + rect(-14, -14, 6, 18, C.ink, 1) + rect(-3, -14, 6, 18, C.ink, 1) + rect(8, -14, 6, 18, C.ink, 1)
      },
      cast: {
        v3e3_xiu: { name: '阿秀（虛構）', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'g9', shoe: 'ink', hair: 'bun', r: 22, k: .93 },
        v3e3_bi: { name: '畢昇', real: 1, skin: 'skin', top: 'clay3', bottom: 'wood', leg: 'wood', shoe: 'ink', hair: 'topknot', beard: 1, r: 19, k: 1.12 },
        v3e3_seller: { name: '書坊老闆', skin: 'skin', robe: 'g5', trim: 'cream', hair: 'topknot', beard: 2, r: 19, k: 1.12 },
        v3e3_buyer: { name: '買東西的人', skin: 'skinB', top: 'gold', bottom: 'g7', leg: 'g7', hair: 'topknot', r: 19, k: 1.08 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v3e3 = {
    id: 'v3e3', vol: '第 3 冊 中古世界', volNo: 3, ep: 3, title: '泥做的活字', next: '城堡裡的一年',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！小禾說班刊這期的頭條，就寫你。',
    note: '阿凱、小禾、阿秀和書坊的人是虛構的角色；畢昇的話是根據沈括《夢溪筆談》的記載改編，不是他的原話。畢昇住在哪裡、長什麼樣子，史書沒有寫，這裡的工坊和他的樣子都是想像圖。泥活字到現在還沒有找到實物，有學者對它怎麼印出好看的書還有疑問。畢昇的生卒年（大約 990～1051 年）是學者根據 1990 年在湖北找到的墓碑推算的，也有不同看法。',
    curriculum: '國中社會會再學到：宋代的商業與文化交流（活字印刷）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'clay3' },
      back: [
        { k: 'house', x: 130, y: 900, W: 200, H: 150, roof: 'tile', roofC: 'g9' },
        { k: 'v3e3_block', x: 660, y: 960, s: 1.3 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'v3e3_lib', shot: '中景：社區圖書館，影印機故障，小禾手抄班刊',
          back: [{ k: 'table', x: 250, y: 330, W: 220 }, { k: 'v3e3_copier', x: 650, y: 330 }],
          actors: [
            { c: 'he', x: 250, y: 332, s: 1, pose: 'write', expr: 'worry', sweat: 2, look: .3 },
            { c: 'kai', x: 480, y: 330, s: 1, pose: 'think', expr: 'shock', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '影印機壞了，\n班刊只好用手抄……', x: 14, y: 14, w: 260, fs: 24, tail: [220, 128] },
            { t: '全班 30 份？\n手會斷掉吧！', x: 300, y: 14, w: 220, fs: 24, tail: [470, 128] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'v3e3_libout', shot: '大格：圖書館門口的搖搖車，阿凱跳上去',
          back: [{ k: 'car', x: 300, y: 600, s: .9 }],
          actors: [
            { c: 'kai', x: 286, y: 540, s: 1, pose: 'ride', expr: 'grin', noShadow: true, look: .4 },
            { c: 'he', x: 96, y: 676, s: 1.2, pose: 'hold', expr: 'mad', hold: 'notebook', look: .6 }
          ],
          props: [{ k: 'v3e3_stack', x: 160, y: 680, n: 6 }],
          bubbles: [
            { t: '走！去找\n不用手抄的時代！', x: 236, y: 230, w: 270, tail: [300, 330] },
            { t: '你只是\n想偷懶吧！', x: 14, y: 330, w: 180, tail: [96, 430] }
          ],
          sfx: [{ t: '叮！', x: 420, y: 480, fs: 60, rot: 10 }] },
        { scene: 'coin', sceneOpt: { year: '1045', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1045',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '西元 1045！\n班刊還沒抄完啦！', x: 14, y: 400, w: 214, fs: 22, tail: [108, 520] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e3_street', shot: '滿版遠景：北宋開封的大街，店面一間接一間',
          back: [
            { k: 'crowd', x: 400, y: 640, n: 12, W: 760, s: .8, op: .5 },
            { k: 'cart', x: 640, y: 660, s: .8 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v3e3_buyer', x: 300, y: 660, s: .8, pose: 'carry', expr: 'calm', hold: 'sack' },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 1000 年前，北宋的開封', en: 'KAIFENG · c. AD 1045', x: 0, y: 18 },
            { t: '開封在今天的河南，是北宋的首都，大約住了一百萬人。商店就開在大街兩旁。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：北宋開封。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '街上\n好多店！', x: 348, y: 660, w: 180, tail: [462, 754] },
            { t: '長安的市場\n有圍牆，\n這裡沒有耶！', x: 560, y: 668, w: 206, fs: 23, tail: [630, 800] }
          ] }
      ] },
      { layout: 'duo', panels: [
        { scene: 'v3e3_work', shot: '中景：書坊裡，阿凱拿起刻好的雕版當印章，阿秀大叫',
          back: [{ k: 'shelf', x: 120, y: 340, W: 180, H: 200, seed: 4 }, { k: 'table', x: 470, y: 470, W: 260 }, { k: 'v3e3_block', x: 470, y: 394, s: .8 }],
          actors: [
            { c: 'he', x: 120, y: 470, s: 1, pose: 'scared', expr: 'shock', look: .6 },
            { c: 'kai', x: 300, y: 474, s: 1.05, pose: 'raise', expr: 'grin', hold: 'v3e3_block', look: .4 },
            { c: 'v3e3_xiu', x: 650, y: 480, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '這塊木板上的字\n怎麼全是反的？', x: 150, y: 20, w: 250, fs: 24, tail: [296, 236] },
            { t: '別亂拿！！\n那是刻好的整頁書版！', x: 440, y: 20, w: 330, kind: 'shout', fs: 24, tail: [640, 250] }
          ],
          tag: { t: '印書工坊的學徒：阿秀（虛構）', left: 8, top: 478 } },
        { scene: 'v3e3_work', sceneOpt: { win: false }, shot: '中景：阿秀示範雕版印刷，刷墨、蓋紙',
          back: [{ k: 'table', x: 400, y: 460, W: 300 }, { k: 'v3e3_block', x: 400, y: 384, s: .9 }],
          actors: [
            { c: 'v3e3_xiu', x: 250, y: 470, s: 1.05, pose: 'hold', expr: 'smug', hold: 'brush', look: .6 },
            { c: 'kai', x: 640, y: 474, s: 1.05, pose: 'think', expr: 'worry', flip: 1, sweat: 1, look: .6 }
          ],
          caption: [{ t: '雕版印刷：把一整頁的字刻在木板上，刷上墨、蓋上紙，就印好一頁。', x: 0, y: 14, w: 420 }],
          bubbles: [
            { t: '可是刻錯一個字，\n整塊板就要重刻！', x: 14, y: 150, w: 260, fs: 23, tail: [240, 290] },
            { t: '那我常常寫錯字，\n不就慘了……', x: 470, y: 150, w: 250, fs: 23, tail: [636, 290] }
          ] }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'v3e3_work', sceneOpt: { hz: .7 }, shot: '大格：畢昇在工坊裡排泥活字，旁邊是火盆',
          back: [{ k: 'brazier', x: 410, y: 780, s: 1.1 }, { k: 'table', x: 250, y: 900, W: 300 }, { k: 'v3e3_tray', x: 250, y: 824 }],
          actors: [
            { c: 'v3e3_bi', x: 300, y: 1030, s: 1.4, pose: 'hold', expr: 'calm', hold: 'v3e3_type', flip: 1, look: -.4 },
            { c: 'v3e3_xiu', x: 90, y: 1034, s: 1.1, pose: 'point', expr: 'happy', look: .4 }
          ],
          caption: [{ t: '畢昇：北宋的平民\n（大約 990～1051 年）', x: 0, y: 14, w: 300 }],
          bubbles: [
            { t: '我用黏土刻字，\n一個字一個印，\n再用火燒硬。', x: 180, y: 240, w: 260, fs: 24, tail: [300, 760] },
            { t: '要印的時候，\n把字排在鐵板上！', x: 14, y: 470, w: 250, fs: 22, tail: [90, 820] }
          ],
          tag: { t: '畢昇的話：改編自沈括《夢溪筆談》', left: 8, top: 140 } },
        { scene: 'v3e3_type', shot: '小格特寫：一顆泥活字，字是反的',
          caption: [{ t: '字刻成反的，\n印出來才是正的', x: 0, y: 14, w: 240 }],
          bubbles: [{ t: '像蓋印章！', x: 50, y: 400, w: 170, fs: 24 }] },
        { scene: 'v3e3_plates', shot: '小格：兩塊鐵板輪流用',
          caption: [{ t: '兩塊鐵板輪流：\n一塊在印，\n一塊在排字。', x: 0, y: 14, w: 230 }],
          bubbles: [{ t: '不用停下來等！', x: 30, y: 420, w: 206, fs: 22 }] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v3e3_work', sceneOpt: { win: false, hz: .7 }, shot: '細長大格：印好的紙堆得比阿凱還高',
          back: [{ k: 'v3e3_stack', x: 230, y: 1000, n: 40 }],
          actors: [{ c: 'kai', x: 90, y: 1034, s: 1.3, pose: 'lookup', expr: 'awe', look: .5 }],
          caption: [{ t: '沈括記下：只印兩三本，\n不算快；印幾十、幾百、\n幾千本，就快得不得了。', x: 0, y: 14, w: 330 }],
          bubbles: [{ t: '班刊 30 份，\n一下就印好了！', x: 14, y: 360, w: 230, fs: 24, tail: [90, 720] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：為什麼用泥、紙做的錢、指南針',
          caption: [{ t: '宋朝的新東西', x: 0, y: 16 }],
          cards: [
            { icon: 'brick', y: 80, t: '為什麼不用木頭刻活字？\n木頭有紋路、碰到水會變形，\n所以畢昇改用燒過的泥。' },
            { icon: 'coinI', y: 344, t: '一串串銅錢太重了！\n1020 年代，政府發行紙做的錢\n「交子」，是世界最早的一批。' },
            { icon: 'ship', y: 610, t: '1119 年的書記下：\n陰天看不到太陽、星星，\n船夫就看指南針找方向。' }
          ],
          bubbles: [{ t: '紙不只拿來寫字，\n還能當錢！', x: 34, y: 900, w: 354, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v3e3_work', sceneOpt: { win: false }, shot: '矮寬格：阿秀說大部分書坊還是用雕版',
          back: [{ k: 'shelf', x: 700, y: 330, W: 150, H: 180, seed: 6 }],
          actors: [
            { c: 'he', x: 120, y: 392, s: .92, pose: 'hold', expr: 'think', hold: 'notebook', look: .8 },
            { c: 'v3e3_xiu', x: 420, y: 392, s: .95, pose: 'raise', expr: 'calm', flip: 1, look: -.2 }
          ],
          bubbles: [
            { t: '那大家都改用\n活字了嗎？', x: 14, y: 30, w: 220, fs: 23, tail: [122, 196] },
            { t: '還沒！常印的書，\n刻一整塊雕版\n反而比較便宜。', x: 300, y: 20, w: 260, fs: 23, tail: [420, 200] }
          ],
          caption: [{ t: '四百多年後，歐洲的古騰堡\n也做出了活字印刷機。', x: 456, y: 300, w: 316, dark: false }] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的街口，阿秀送阿凱幾顆泥活字',
          back: [
            { k: 'house', x: 470, y: 350, W: 200, H: 130, roof: 'tile', roofC: 'g9' },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v3e3_xiu', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', hold: 'v3e3_type', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '送你「班」和\n「刊」兩個字！', x: 14, y: 160, w: 220, fs: 22, tail: [110, 316] },
            { t: '回去用橡皮擦\n刻字，拆開重排！', x: 246, y: 130, w: 250, fs: 22, tail: [284, 326] },
            { t: '記得刻反的！', x: 456, y: 236, w: 170, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n英格蘭！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：城堡裡的一年', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '雕版印刷', t: '9 世紀的唐朝，已經會把一整頁的字刻在木板上印書。868 年印的《金剛經》，是現存最早寫了日期的印刷書。' },
      { h: '畢昇的泥活字', t: '北宋慶曆年間（1041～1048 年），平民畢昇用黏土刻字、一字一印、用火燒硬，排在鐵板上印書。這件事記在沈括的《夢溪筆談》裡。' },
      { h: '印越多越快', t: '兩塊鐵板輪流，一塊印、一塊排字。只印兩三本不算快，印幾百、幾千本就快得不得了。不過常印的書，整塊雕版比較便宜，所以活字在中國沒有馬上取代雕版。' },
      { h: '交子', t: '銅錢太重，1020 年代北宋政府在四川發行紙做的錢「交子」，是世界上最早由政府發行的紙幣之一。' },
      { h: '指南針', t: '1119 年的書記下：陰天的時候，船夫看指南針找方向。' }
    ],
    map: {
      bounds: { lon: [96, 130], lat: [18, 42] },
      cap: '紅點是北宋的首都開封。成都是最早發行交子的地方，廣州是記下船夫用指南針的海港。河道、海岸是今天的樣子，北宋的國界沒有畫出來。',
      alt: '北宋時的中國地圖：開封在黃河邊（紅點），西南邊是成都，東南邊是杭州，南邊是廣州，右下角是臺灣',
      rivers: ['yellow', 'yangtze'],
      labels: [
        { t: '黃河', lat: 38.4, lon: 109.6, size: 20, f: 'g7' },
        { t: '長江', lat: 28.6, lon: 110.6, size: 20, f: 'g7' },
        { t: '東海', lat: 28.5, lon: 125, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '開封', lat: 34.8, lon: 114.3, main: 1, side: 'r' },
        { n: '成都', lat: 30.66, lon: 104.07, side: 'r' },
        { n: '杭州', lat: 30.27, lon: 120.15, side: 'r', dy: 10 },
        { n: '廣州', lat: 23.13, lon: 113.26, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的，只畫了大約 250 年。四百多年後（1455 年前後），歐洲才有古騰堡的活字印刷機。',
      items: [
        { y: 868, when: '西元 868 年', t: '唐朝印的\n《金剛經》', side: 'u', w: 170 },
        { y: 1023, when: '西元 1023 年', t: '政府開始\n管交子', side: 'd', w: 170 },
        { y: 1045, when: '約西元 1045 年', t: '畢昇做出\n泥活字', side: 'u', main: 1, w: 190 },
        { y: 1119, when: '西元 1119 年', t: '書上記下\n船用指南針', side: 'd', w: 180 }
      ]
    },
    sources: [
      '沈括《夢溪筆談》卷十八〈技藝〉（維基文庫，四部叢刊本）：慶曆中，布衣畢昇為活板；膠泥刻字、火燒令堅；鐵板上用松脂、蠟、紙灰固定；兩塊鐵板輪流；印數十百千本極為神速；不用木頭是因為紋理疏密、沾水高低不平',
      '哥倫比亞大學 Asia for Educators〈Song Dynasty China〉：Printing & Movable Type（9 世紀已有雕版；畢昇 990～1051 年用燒過的黏土；活字在中國沒有廣泛使用，因為整塊雕版比較便宜）、Paper Money（1020 年代政府接手、世界最早由政府發行的紙幣）、Compass（1119 年最早記載用在海上）、Cities（開封約一百萬人、商店開在街上、不像長安有圍起來的坊）',
      '國家社科基金〈交子〉研究文章（天聖元年 1023 年設益州交子務、1024 年開始發行官交子；民間交子更早）',
      '朱彧《萍洲可談》卷二（維基文庫）：舟師識地理，夜則觀星，晝則觀日，陰晦觀指南針',
      '琳達霍爾圖書館〈Scientist of the Day: The Diamond Sutra〉（868 年 5 月 11 日印、敦煌出土、現藏大英圖書館，現存最早有日期的完整印刷書）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '畢昇做的活字，是用什麼做的？', opts: ['燒硬的黏土', '削尖的竹子', '磨亮的銅片', '打碎的石頭'], a: 0, why: '畢昇用黏土刻字，一個字一個印，再用火燒硬。' },
      { id: 'q2', d: 1, type: 'tf', q: '雕版印刷，是把一整頁的字刻在同一塊木板上。', a: true, why: '對！所以刻錯一個字，整塊板就要重刻；活字可以一個一個拆開重排。' },
      { id: 'q3', d: 2, type: 'mc', q: '北宋政府發行的、用紙做的錢叫什麼？', opts: ['交子', '銅板', '竹簡', '泥板'], a: 0, why: '一串串銅錢太重，1020 年代北宋政府在四川發行了紙做的錢「交子」。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['唐朝印出《金剛經》', '北宋政府開始管交子', '畢昇做出泥活字', '書上記下船夫用指南針'], why: '《金剛經》是 868 年；交子務是 1023 年；畢昇的泥活字在慶曆年間（1041～1048 年）；指南針的記載在 1119 年的書裡。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「活字那麼方便，宋朝的書坊一定全部改用活字了。」根據這一話，哪個說法最正確？', opts: ['不對，很多書坊還是用整塊雕版', '對，宋朝的雕版就完全沒有人用了', '對，因為活字是用最便宜的木頭做的', '不對，宋朝的人根本還不會印書'], a: 0, why: '常印的書刻一整塊雕版反而比較便宜，所以雕版還是很常用。畢昇的活字是用泥做的，不是木頭。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
