/* 世界史漫畫 第 2 冊 古典世界・第 4 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：秦的統一。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, cap, both, place, prop, groundShadow } = K;
    const BR = '#8C7A3E', BR2 = '#6E5F2E';   // 青銅（舊舊的）
    const quan = () => groundShadow(0, 2, 30, 5) + both(path('M-26 0 Q-30 -34 0 -40 Q30 -34 26 0Z', BR), 'cm-warm') + rect(-6, -52, 12, 14, BR2, 4) + circ(0, -54, 8, 'none', `stroke="${BR2}" stroke-width="4"`) + rect(-18, -24, 36, 3, 'rgba(21,23,20,.25)');   // 秦權（秤錘）
    const sheng = () => groundShadow(0, 2, 36, 5) + both(rect(-30, -36, 46, 36, BR, 3), 'cm-warm') + rect(-26, -32, 38, 6, BR2) + rect(16, -26, 34, 9, BR2, 3);   // 方升（量米的）
    const banliang = () => circ(0, 0, 20, BR) + rect(-6, -6, 12, 12, C.cream) + txt(-11, 6, '半', 10, C.ink) + txt(12, 6, '兩', 10, C.ink);
    const slips = n => { let s = ''; for (let i = 0; i < n; i++) s += rect(-n * 6 + i * 12, -60, 10, 60, C.clay3, 2) + rect(-n * 6 + i * 12 + 4, -54, 2, 44, 'rgba(21,23,20,.3)'); return s + rect(-n * 6 - 2, -46, n * 12 + 2, 3, C.wood) + rect(-n * 6 - 2, -16, n * 12 + 2, 3, C.wood); };
    root.ComicArt.extend({
      scenes: {
        // 咸陽：夯土台基上的大宮殿、城牆，路上有一樣寬的車輪印
        v2e4_palace(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .82, h * .1, 200, 'url(#cm-sun)') + circ(w * .82, h * .1, 44, '#FFF8DC');
          s += path(`M0 ${h * .42} Q${w * .3} ${h * .38} ${w * .6} ${h * .41} T${w} ${h * .39} L${w} ${h * .5} L0 ${h * .5}Z`, C.g3);
          s += both(rect(w * .1, h * .4, w * .8, h * .12, C.brick2), 'cm-warm') + rect(w * .1, h * .4, w * .8, 10, C.brick3);
          s += prop({ k: 'hall', x: w * .5, y: h * .41, W: 560, H: 300, n: 7 });
          s += rect(0, h * .52, w, h * .48, C.brick3);
          s += prop({ k: 'wall', x: w * .14, y: h * .6, W: 260, H: 90, f: 'brick2', f2: 'clay2' }) + prop({ k: 'wall', x: w * .86, y: h * .6, W: 260, H: 90, f: 'brick2', f2: 'clay2' });
          [[.44, .2], [.56, .2]].forEach(([x0]) => { s += poly(`${w * x0 - 3},${h * .62} ${w * x0 + 3},${h * .62} ${w * (x0 + (x0 - .5) * 1.6) + 8},${h} ${w * (x0 + (x0 - .5) * 1.6) - 8},${h}`, C.clay2, 'opacity=".7"'); });
          s += path(`M0 ${h * .9} Q${w * .5} ${h * .85} ${w} ${h * .9} L${w} ${h} L0 ${h}Z`, C.brick);
          return { bg: s };
        },
        // 城門口的公告牌（字是用今天的字體寫的）
        v2e4_gate(w, h) {
          let s = rect(0, 0, w, h, C.sky) + rect(0, h * .5, w, h * .5, C.brick3);
          s += prop({ k: 'wall', x: w * .5, y: h * .52, W: w + 40, H: h * .3, f: 'brick2', f2: 'clay2', gate: 150 });
          s += prop({ k: 'hall', x: w * .5, y: h * .24, W: 300, H: 150, n: 5 });
          const bx = w * .62, by = h * .3;
          s += rect(bx - 6, by + 190, 12, h * .25, C.wood) + rect(bx + 170, by + 190, 12, h * .25, C.wood) + both(rect(bx - 20, by, 220, 200, C.cream, 4));
          s += txt(bx + 90, by + 70, '車同軌', 40, C.ink) + txt(bx + 90, by + 130, '書同文', 40, C.ink) + txt(bx + 90, by + 178, '（今天的字體）', 16, C.wood);
          return { bg: s };
        }
      },
      props: {
        v2e4_quan: x => place(x, quan()),
        v2e4_sheng: x => place(x, sheng()),
        v2e4_coin: x => place(x, banliang()),
        v2e4_slips: x => place(x, slips(x.n || 6)),
        v2e4_cake: x => place(x, groundShadow(0, 2, 70, 6) + ell(0, -4, 72, 10, C.cream) + path('M-72 -4 Q-60 -22 0 -24 Q60 -22 72 -4Z', '#E3B866') + ell(-20, -18, 8, 3, '#C99A45') + ell(24, -16, 10, 3, '#C99A45')),
        v2e4_ruler: x => place(x, rect(-60, -10, 120, 14, C.wood, 2) + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => rect(-58 + i * 11.6, -10, 2, i % 5 ? 5 : 8, C.cream)).join(''))
      },
      icons: {
        v2e4_scale() { return rect(0, 0, 120, 90, C.paper) + `<g transform="translate(30 80)">` + quan() + '</g><g transform="translate(80 80) scale(.9)">' + sheng() + '</g><g transform="translate(96 26) scale(.8)">' + banliang() + '</g>'; },
        v2e4_burn() { return rect(0, 0, 120, 90, C.g9) + `<g transform="translate(44 84) scale(.9)">` + slips(5) + '</g>' + `<g transform="translate(92 86) scale(.5)">` + path('M0 -80 Q34 -40 22 -6 L-22 -6 Q-34 -40 0 -80Z', C.red) + path('M0 -56 Q16 -30 10 -8 L-10 -8 Q-16 -30 0 -56Z', C.gold) + '</g>'; },
        v2e4_wall() { let s = rect(0, 0, 120, 90, C.g3) + path('M0 70 Q30 40 60 54 T120 36 L120 90 L0 90Z', C.g5) + path('M0 64 Q30 34 60 48 T120 30 L120 40 Q90 50 60 60 Q30 46 0 74Z', C.brick2); for (let i = 0; i < 6; i++) s += rect(4 + i * 20, 58 - i * 4 - (i % 2) * 6, 8, 8, C.brick2); return s; }
      },
      cast: {
        v2e4_ama: { name: '阿嬤（虛構）', skin: 'skin', top: 'purple', bottom: 'g9', leg: 'g9', hair: 'bun', hairC: 'paper3', r: 21, k: 1.04 },
        v2e4_heng: { name: '小衡（虛構）', skin: 'skin', top: 'clay3', bottom: 'g9', leg: 'g9', shoe: 'wood', hair: 'topknot', r: 22, k: .94 },
        v2e4_official: { name: '官吏', skin: 'skin', robe: 'g9', trim: 'red', hair: 'topknot', beard: 1, r: 19, k: 1.12 },
        v2e4_farmer: { name: '百姓', skin: 'skinB', top: 'paper3', bottom: 'wood', leg: 'wood', hair: 'topknot', hat: 'straw', hatC: 'gold', r: 19, k: 1.08 },
        v2e4_scholar: { name: '讀書人', skin: 'skin', robe: 'paper3', trim: 'wood', hair: 'topknot', beard: 1, r: 19, k: 1.12 },
        v2e4_qin: { name: '秦始皇', real: 1, skin: 'skin', robe: 'ink', trim: 'red', hair: 'topknot', hat: 'band', hatC: 'gold', beard: 1, r: 19, k: 1.22 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v2e4 = {
    id: 'v2e4', vol: '第 2 冊 古典世界', volNo: 2, ep: 4, title: '一樣的字，一樣的尺', next: '駱駝走過的絲路',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿嬤說下次的蛋糕，大家都用公克量。',
    note: '阿凱、小禾、阿嬤、小衡、官吏、百姓和讀書人是虛構的角色；秦始皇的話改編自《史記》裡的琅邪臺刻石，不是他當面說的話。咸陽宮、秦始皇的樣子和公告牌都是想像圖，牌子上是今天的字體，不是真的小篆。焚書的規模、「坑儒」到底是哪些人，學者還有不同的看法；秦朝的法律有多嚴，《史記》和出土的秦簡寫的也不完全一樣。',
    curriculum: '國中社會會再學到：秦的統一',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'brick3' },
      back: [
        { k: 'hall', x: 610, y: 900, W: 340, H: 210 },
        { k: 'v2e4_quan', x: 120, y: 940, s: 2 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'cream', floor: 'g3', hz: .74, window: [.4, .1, .2, .36], winC: 'g2' }, shot: '中景：阿嬤家的廚房，蛋糕烤扁了，三個人各說各的單位',
          back: [{ k: 'table', x: 390, y: 336, W: 260 }],
          props: [{ k: 'v2e4_cake', x: 390, y: 258 }],
          actors: [
            { c: 'kai', x: 150, y: 330, s: 1, pose: 'carry', expr: 'grin', hold: 'cup', look: .4 },
            { c: 'v2e4_ama', x: 400, y: 332, s: .95, pose: 'hold', expr: 'worry', hold: 'scroll', look: 0 },
            { c: 'he', x: 650, y: 332, s: 1.05, pose: 'fists', expr: 'mad', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '麵粉我用\n大碗量的！', x: 14, y: 16, w: 200, fs: 24, tail: [150, 140] },
            { t: '阿嬤寫的是\n半斤、二兩……', x: 252, y: 14, w: 220, fs: 23, tail: [396, 150] },
            { t: '網路食譜\n寫公克啦！', x: 540, y: 16, w: 200, fs: 24, tail: [640, 140] }
          ],
          sfx: [{ t: '扁——', x: 470, y: 200, fs: 34, rot: -6 }],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: [.8, .12], hz: .55, far: false, ground: 'paper3' }, shot: '大格：阿嬤家樓下的雜貨店門口，搖搖車開口說話',
          back: [
            { k: 'house', x: 360, y: 377, W: 300, H: 170, roof: 'flat', roofC: 'g7', f: 'paper2' },
            { k: 'sign', t: '雜貨店', x: 360, y: 254, W: 150, fs: 28, s: .8 },
            { k: 'crate', x: 470, y: 400, s: .9, f: 'gold' },
            { k: 'car', x: 160, y: 640, s: .9 }
          ],
          actors: [
            { c: 'kai', x: 380, y: 660, s: 1.2, pose: 'arg', expr: 'mad', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '每個人用的單位\n都不一樣啦！', x: 280, y: 296, w: 230, fs: 24, tail: [380, 420] },
            { t: '嗶——投 10 元，\n帶你去看\n統一單位的皇帝。', x: 16, y: 230, w: 250, kind: 'car', fs: 24, tail: [140, 500] }
          ],
          sfx: [{ t: '叮！', x: 30, y: 460, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '221', era: '西元前' }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元前 221',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '蛋糕還沒收！\n西元前 221！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e4_palace', shot: '滿版遠景：咸陽的大宮殿，路上的車輪印一樣寬',
          back: [
            { k: 'cart', x: 640, y: 720, s: .9 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 2250 年前，咸陽', en: 'XIANYANG · 221 BC', x: 0, y: 18 },
            { t: '咸陽在今天中國陝西的西安附近。這一年，秦國打敗其他六國，統一了天下。', x: 0, y: 112, w: 390, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：咸陽。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好大的\n宮殿！', x: 348, y: 672, w: 196, tail: [460, 760] },
            { t: '路上的車輪印\n一樣寬耶！', x: 566, y: 700, w: 200, tail: [618, 800], fs: 24 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .7 }, shot: '中景：量器工坊，阿凱拿起青銅秤錘當饅頭',
          back: [
            { k: 'table', x: 560, y: 330, W: 260 },
            { k: 'v2e4_sheng', x: 500, y: 254 }, { k: 'v2e4_quan', x: 600, y: 254 }
          ],
          props: [{ k: 'v2e4_quan', x: 290, y: 300, s: 1.1 }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 230, y: 430, s: 1.05, pose: 'carry', expr: 'grin', look: .4 },
            { c: 'v2e4_heng', x: 690, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這顆銅饅頭\n好重喔！', x: 60, y: 40, w: 220, tail: [214, 236] },
            { t: '放下！！那是\n標準的秤錘！', x: 420, y: 26, w: 300, kind: 'shout', fs: 25, tail: [670, 238] }
          ],
          sfx: [{ t: '咚！', x: 350, y: 190, fs: 44, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：量器工坊的孩子小衡叉腰解釋',
          actors: [{ c: 'v2e4_heng', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '我爸做量器。\n全國的尺、升、秤\n都要一模一樣！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '量器工坊的孩子：小衡（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2', zoom: 1, cy: .7 }, shot: '特寫：一樣大的秤錘、量米的方升、半兩錢',
          props: [
            { k: 'v2e4_quan', x: 110, y: 500, s: 1.7 },
            { k: 'v2e4_sheng', x: 270, y: 500, s: 1.6 },
            { k: 'v2e4_coin', x: 390, y: 440, s: 1.6 }
          ],
          caption: [{ t: '統一度量衡', say: '統一度量衡', en: 'ONE STANDARD', x: 0, y: 16, w: 200 }],
          bubbles: [
            { t: '圓圓的錢中間\n有方洞！', x: 220, y: 14, w: 230, kind: 'think', fs: 24 },
            { t: '各地照一樣的樣子做，\n買賣就不會吵架。', x: 14, y: 140, w: 330, fs: 23 }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e4_gate', shot: '滿版：城門口貼出公告，官吏指著牌子，各地來的百姓圍著看',
          actors: [
            { c: 'v2e4_official', x: 330, y: 640, s: 1, pose: 'point', expr: 'calm', look: .6 },
            { c: 'v2e4_farmer', x: 160, y: 650, s: .95, pose: 'think', expr: 'worry', look: .6 },
            { c: 'v2e4_heng', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'stand', expr: 'happy', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '秦始皇下令：文字、尺和秤、錢、\n車輪的寬度，全國都要一樣。', x: 16, y: 16, w: 470 },
            { t: '統一用的字叫「小篆」。', x: 16, y: 120, w: 300, dark: false }
          ],
          bubbles: [
            { t: '以前各國的字，\n寫法都不一樣……', x: 14, y: 240, w: 250, fs: 23, tail: [160, 440] },
            { t: '這樣全國的人\n都看得懂了。', x: 14, y: 640, w: 230, fs: 24, tail: [140, 790] },
            { t: '蛋糕食譜\n也該這樣！', x: 270, y: 680, w: 190, fs: 24, tail: [440, 772] },
            { t: '可是……\n好像有人\n不太高興。', x: 560, y: 660, w: 190, fs: 24, tail: [650, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'land', sceneOpt: { sky: '#B9B29A', sun: false, hz: .6, far: 'clay2', ground: 'clay2' }, shot: '細長格：讀書人難過地看著竹簡被收走',
          back: [{ k: 'brazier', x: 250, y: 740, s: 1.4 }],
          props: [{ k: 'v2e4_slips', x: 110, y: 760, n: 5, rot: -8 }],
          actors: [{ c: 'v2e4_scholar', x: 150, y: 1000, s: 1.35, pose: 'hold', expr: 'worry', look: .6 }],
          caption: [
            { t: '西元前 213 年：焚書', x: 0, y: 14, w: 300 },
            { t: '《史記》記載：民間收藏的詩、書和各家學說的書，要交出來燒掉；只留醫藥、占卜、種樹的書。', x: 0, y: 72, w: 330, dark: false },
            { t: '法律很嚴，犯錯要受重罰；很多人被抓去蓋長城、修宮殿和陵墓。', x: 0, y: 296, w: 330, dark: false }
          ],
          bubbles: [{ t: '不一樣的想法，\n也不能留嗎？', x: 30, y: 470, w: 280, fs: 24, tail: [156, 690] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：統一的好處、代價和結果',
          caption: [{ t: '統一：好處和代價', x: 0, y: 16 }],
          cards: [
            { icon: 'v2e4_scale', y: 80, t: '好處：字、尺、秤、錢、\n車軌都一樣，各地\n做生意、管理都方便。' },
            { icon: 'v2e4_burn', y: 344, t: '代價：燒書、管住想法；\n法律很嚴、工作很重，\n很多人受苦。' },
            { icon: 'v2e4_wall', y: 610, t: '結果：統一 15 年後，\n秦朝就亡了；後來的漢朝\n留下很多秦的制度。' }
          ],
          bubbles: [{ t: '好處和代價，\n要一起看！', x: 24, y: 896, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'clay3', floor: 'brick2', hz: .8 }, shot: '矮寬格：宮殿裡，秦始皇說出他的統一',
          back: [
            { k: 'column', style: 'greek', x: 44, y: 330, H: 330, f: 'red' },
            { k: 'column', style: 'greek', x: 740, y: 330, H: 330, f: 'red' }
          ],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v2e4_heng', x: 300, y: 392, s: .9, pose: 'bow', expr: 'calm' },
            { c: 'v2e4_qin', x: 560, y: 394, s: 1, pose: 'raise', expr: 'smug', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '天下的量器都一樣，\n寫的字也都一樣！', x: 40, y: 14, w: 420, fs: 24, tail: [528, 150] }
          ],
          tag: { t: '秦始皇的話：改編自《史記》琅邪臺刻石「器械一量，同書文字」', left: 10, top: 112 } },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的城牆外，小衡送一把尺',
          back: [
            { k: 'wall', x: 500, y: 360, W: 560, H: 110, f: 'brick2', f2: 'clay2' },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          props: [{ k: 'v2e4_ruler', x: 176, y: 430, rot: -10 }],
          actors: [
            { c: 'v2e4_heng', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '這把尺送你，\n一點都不差！', x: 14, y: 176, w: 200, fs: 22, tail: [110, 300] },
            { t: '回去蛋糕\n用公克量！', x: 240, y: 186, w: 180, fs: 23, tail: [284, 326] },
            { t: '統一很方便，\n也要聽大家\n怎麼想。', x: 430, y: 196, w: 180, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n長安！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：駱駝走過的絲路', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '秦統一天下', t: '西元前 221 年，秦國打敗其他六國，秦王嬴政自稱「始皇帝」，首都在咸陽（今天的西安附近）。' },
      { h: '書同文、車同軌', t: '《史記》說秦朝「一法度衡石丈尺，車同軌，書同文字」：文字統一用小篆，尺、秤、量器和錢都照一樣的標準做，連車輪的寬度也一樣。第 1 冊的甲骨文，就是這些字的老祖先。' },
      { h: '統一的代價', t: '西元前 213 年，秦始皇聽從李斯的建議，下令把民間收藏的很多書燒掉，只留醫藥、占卜、種樹的書；法律很嚴，很多人被抓去做很重的工。' },
      { h: '長城和兵馬俑', t: '秦朝把各國原本的城牆連起來、加長；秦始皇的陵墓旁有幾千個陶做的兵馬俑，1974 年農民挖井時才發現。' },
      { h: '好處與代價一起看', t: '統一讓各地溝通、買賣更方便，但秦朝只過了 15 年就在西元前 206 年滅亡；後來的漢朝留下了很多秦的制度。' }
    ],
    map: {
      bounds: { lon: [100, 124], lat: [28, 44] },
      cap: '紅點是秦的首都咸陽。旁邊標的是被秦打敗的幾個國家的首都（括號是國名）。河道、海岸是今天的樣子，簡化畫法。',
      alt: '中國地圖：咸陽（紅點）在黃河的支流渭河邊，東邊有邯鄲（趙）、臨淄（齊）、薊（燕）、壽春（楚），南邊是長江',
      rivers: ['yellow', 'yangtze'],
      labels: [
        { t: '黃河', lat: 40.9, lon: 108.0, size: 22, f: 'g7' },
        { t: '長江', lat: 29.0, lon: 113.0, size: 22, f: 'g7' },
        { t: '秦', lat: 36.2, lon: 105.0, size: 34, f: 'g9' }
      ],
      cities: [
        { n: '咸陽', lat: 34.33, lon: 108.71, main: 1, side: 'l' },
        { n: '邯鄲（趙）', lat: 36.6, lon: 114.5, side: 'l' },
        { n: '臨淄（齊）', lat: 36.8, lon: 118.3, side: 'r' },
        { n: '薊（燕）', lat: 39.9, lon: 116.4, side: 'r' },
        { n: '壽春（楚）', lat: 32.6, lon: 116.8, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從甲骨文到秦統一文字，隔了大約一千年。',
      items: [
        { y: -1200, when: '約西元前 1200 年', t: '甲骨文\n（第 1 冊第 4 話）', side: 'u', w: 190 },
        { y: -221, when: '西元前 221 年', t: '秦統一天下，\n書同文、車同軌', side: 'd', main: 1, w: 200 },
        { y: -213, when: '西元前 213 年', t: '下令燒掉\n民間很多書', side: 'u', w: 170 },
        { y: 1974, when: '西元 1974 年', t: '農民挖井，\n發現兵馬俑', side: 'd', w: 180 }
      ]
    },
    sources: [
      '《史記・秦始皇本紀》（維基文庫原文）：二十六年（西元前 221 年）「一法度衡石丈尺。車同軌。書同文字」；琅邪臺刻石「器械一量，同書文字」；三十四年（西元前 213 年）李斯建議焚書，「所不去者，醫藥卜筮種樹之書」；三十五年諸生四百六十餘人',
      '《史記・陳涉世家》（維基文庫原文）：「失期，法皆斬」（秦法很嚴的記載；出土秦簡的規定較輕，學者有討論）',
      'History.com〈Qin Dynasty〉（西元前 221～206 年；統一文字、發標準的青銅度量衡和錢；連接、加長長城；約 8000 個兵馬俑；秦亡後漢朝沿用很多制度）',
      '秦始皇帝陵博物院〈About〉（1974 年 3 月農民挖井發現兵馬俑碎片；一號坑約 6000 件；1987 年列入世界遺產）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '秦統一天下是在哪一年？', opts: ['西元前 221 年', '西元前 1200 年', '西元 105 年', '西元 1974 年'], a: 0, why: '西元前 221 年，秦國打敗其他六國，統一天下。1974 年是發現兵馬俑的那一年。' },
      { id: 'q2', d: 1, type: 'tf', q: '兵馬俑是 1974 年農民挖井的時候發現的。', a: true, why: '對！1974 年，陝西的農民挖井時挖到陶俑的碎片，後來才找到一大片兵馬俑坑。' },
      { id: 'q3', d: 2, type: 'mc', q: '「書同文、車同軌」是什麼意思？', opts: ['文字和車輪寬度全國統一', '每個人都要會寫書法', '全國的車都要漆同一種顏色', '書和車都只能給皇帝用'], a: 0, why: '「書同文」是文字統一，「車同軌」是車輪的寬度統一，各地往來更方便。' },
      { id: 'q4', d: 2, type: 'match', q: '把左邊和右邊配起來。', pairs: [['統一度量衡', '尺、秤、量器都照一樣的標準'], ['小篆', '秦朝統一用的文字'], ['焚書', '把民間很多書燒掉'], ['兵馬俑', '秦始皇陵旁的陶做士兵']], why: '度量衡是尺、秤、量器；小篆是統一的文字；焚書是秦朝管住想法的做法；兵馬俑在秦始皇陵旁邊。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「秦朝把東西全部統一，所以只有好處，沒有壞處。」根據這一話，哪個說法最正確？', opts: ['不對，方便了買賣，但也燒書、法律太嚴', '對，大家都很高興，秦朝傳了好幾百年', '對，統一以後大家就不用再工作了', '不對，秦朝其實從來都沒有統一過文字和尺'], a: 0, why: '統一讓溝通、買賣更方便；可是秦朝也燒書、管住想法，法律嚴、工作重，統一 15 年後就滅亡了。好處和代價要一起看。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
