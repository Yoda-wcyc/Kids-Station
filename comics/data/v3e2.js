/* 世界史漫畫 第 3 冊 中古世界・第 2 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：伊斯蘭教的起源與發展（巴格達的翻譯運動是延伸）。格式：comics/CONTRACT.md
   宗教：只畫建築的圓頂，不畫任何宗教人物或神的形象。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, path, txt, both, prop, place, palm, cap } = K;
    // 尖拱（伊斯蘭建築常見的拱門形狀）
    const arch = (x, y, W, H, f) => path(`M${x - W / 2} ${y} L${x - W / 2} ${y - H * .6} Q${x - W / 2} ${y - H * .92} ${x} ${y - H} Q${x + W / 2} ${y - H * .92} ${x + W / 2} ${y - H * .6} L${x + W / 2} ${y}Z`, f);
    root.ComicArt.extend({
      scenes: {
        // 巴格達：底格里斯河、圓形的城牆、綠色圓頂、椰棗樹
        v3e2_round(w, h) {
          const hz = h * .46;
          let s = rect(0, 0, w, h, C.sky) + circ(w * .82, h * .09, 200, 'url(#cm-sun)') + circ(w * .82, h * .09, 46, '#FFF8DC');
          s += rect(0, hz, w, h - hz, C.sand);
          s += ell(w * .55, hz + 20, w * .4, 70, C.brick2) + ell(w * .55, hz + 14, w * .37, 56, C.brick3);
          s += rect(w * .15, hz - 50, w * .8, 70, C.brick, 0) + rect(w * .15, hz - 58, w * .8, 10, C.brick2);
          for (let i = 0; i < 4; i++) s += arch(w * .24 + i * w * .21, hz + 20, 44, 56, C.ink);
          s += prop({ k: 'dome', x: w * .55, y: hz - 46, W: 170, H: 170, domeC: 'g5' });
          s += prop({ k: 'tower', x: w * .3, y: hz - 46, W: 26, H: 120, f: 'cream' }) + prop({ k: 'tower', x: w * .8, y: hz - 46, W: 26, H: 120, f: 'cream' });
          s += path(`M0 ${h * .6} Q${w * .5} ${h * .56} ${w} ${h * .58} L${w} ${h * .68} Q${w * .5} ${h * .66} 0 ${h * .7}Z`, C.g5);
          for (let i = 0; i < 6; i++) s += rect((i * 137 + 40) % w, h * .62 + (i % 3) * 12, 60, 4, C.g2, 2, 'opacity=".7"');
          s += palm(w * .06, h * .58, 190) + palm(w * .94, h * .6, 170);
          return { bg: s };
        },
        // 紙市：一排掛著紙的架子
        v3e2_papers(w, h) {
          const hz = h * .55;
          let s = rect(0, 0, w, h, C.sky) + rect(0, hz - h * .3, w, h * .3, C.brick3);
          for (let i = 0; i < 5; i++) s += arch(w * .1 + i * w * .2, hz, w * .13, h * .26, C.brick2);
          s += rect(0, hz, w, h - hz, C.sand);
          return { bg: s };
        },
        // 智慧宮裡：尖拱、書架、長桌
        v3e2_hall(w, h) {
          const hz = h * .62;
          let s = rect(0, 0, w, h, C.brick3);
          for (let i = 0; i < 4; i++) s += arch(w * .14 + i * w * .24, hz, w * .18, h * .5, C.brick) + arch(w * .14 + i * w * .24, hz, w * .14, h * .44, C.g7);
          s += rect(0, h * .06, w, 14, C.gold) + rect(0, h * .085, w, 6, C.blue);
          s += rect(0, hz, w, h - hz, C.paper3) + rect(0, hz, w, 6, 'rgba(21,23,20,.12)');
          return { bg: s };
        },
        // 數字特寫
        v3e2_digits(w, h) {
          let s = rect(0, 0, w, h, C.paper2) + rect(16, h * .26, w - 32, h * .5, C.cream, 12);
          ['1 2 3', '4 5 6', '7 8 9', '0'].forEach((t, i) => { s += txt(w / 2, h * .34 + i * 58, t, 50, i === 3 ? C.red : C.g9); });
          return { bg: s };
        },
        // 數字旅行的路：印度 → 巴格達 → 歐洲
        v3e2_path(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const P = [[w * .14, h * .62, '印度'], [w * .5, h * .46, '巴格達'], [w * .86, h * .62, '歐洲']];
          for (let i = 0; i < 2; i++) for (let j = 0; j < 8; j++) { const a = P[i], b = P[i + 1], t0 = j / 8, t1 = (j + .55) / 8; s += cap(a[0] + (b[0] - a[0]) * t0, a[1] + (b[1] - a[1]) * t0, a[0] + (b[0] - a[0]) * t1, a[1] + (b[1] - a[1]) * t1, 8, C.red); }
          P.forEach(([x, y, t], i) => { s += circ(x, y, 44, i === 1 ? C.red : C.g7) + txt(x, y + 12, t, t.length > 2 ? 26 : 30, C.cream); });
          s += rect(w * .23, h * .74, w * .22, 40, C.cream, 8) + txt(w * .34, h * .74 + 28, '約 800 年', 22, C.wood);
          s += rect(w * .58, h * .74, w * .22, 40, C.cream, 8) + txt(w * .69, h * .74 + 28, '1202 年', 22, C.wood);
          return { bg: s };
        }
      },
      props: {
        // 掛紙的架子
        v3e2_rack: x => { let s = rect(-80, -170, 6, 170, C.wood) + rect(74, -170, 6, 170, C.wood) + rect(-86, -176, 172, 8, C.wood, 3); for (let i = 0; i < 4; i++) s += both(rect(-70 + i * 36, -166, 30, 70 + (i % 2) * 14, C.cream), 'cm-warm'); s += both(rect(-82, -60, 164, 60, C.wood, 3), 'cm-warm') + rect(-70, -74, 140, 14, C.cream, 2) + rect(-64, -84, 128, 10, C.paper2, 2); return place(x, s); },
        // 寫字桌＋攤開的書
        v3e2_desk: x => place(x, both(rect(-110, -64, 220, 14, C.wood, 3), 'cm-warm') + rect(-100, -50, 12, 50, C.wood) + rect(88, -50, 12, 50, C.wood) + path('M0 -66 Q-30 -76 -60 -68 L-60 -100 Q-30 -108 0 -98Z', C.cream) + path('M0 -66 Q30 -76 60 -68 L60 -100 Q30 -108 0 -98Z', C.paper2) + rect(-50, -92, 40, 3, 'rgba(21,23,20,.28)') + rect(10, -92, 40, 3, 'rgba(21,23,20,.28)')),
        // 用正方形解題的圖板（花拉子米用幾何圖形說明解法；這裡只是示意）
        v3e2_fly: x => place(x, both(rect(-18, -24, 36, 46, C.cream, 2), 'cm-warm')),
        v3e2_square: x => place(x, both(rect(-70, -150, 140, 150, C.cream, 6)) + rect(-44, -124, 70, 70, C.g3) + rect(26, -124, 22, 70, C.gold) + rect(-44, -54, 70, 22, C.gold) + rect(26, -54, 22, 22, C.red, 0, 'opacity=".6"'))
      },
      holds: {
        v3e2_sheet: () => rect(-14, -22, 28, 34, C.cream, 2) + rect(-9, -15, 18, 2.5, 'rgba(21,23,20,.3)') + rect(-9, -8, 18, 2.5, 'rgba(21,23,20,.3)') + rect(-9, -1, 12, 2.5, 'rgba(21,23,20,.3)')
      },
      cast: {
        v3e2_hamid: { name: '哈米德（虛構）', skin: 'skinB', top: 'cream', bottom: 'g7', leg: 'g7', shoe: 'wood', hair: 'curly', hat: 'band', hatC: 'g5', r: 22, k: .95 },
        v3e2_khw: { name: '花拉子米', real: 1, skin: 'skinB', robe: 'g7', trim: 'gold', hair: 'man', hat: 'turban', hatC: 'cream', beard: 2, r: 19, k: 1.18 },
        v3e2_tr1: { name: '翻譯學者', skin: 'skin', robe: 'cream', trim: 'blue', hair: 'man', hat: 'turban', hatC: 'g3', beard: 1, r: 19, k: 1.14 },
        v3e2_tr2: { name: '翻譯學者', skin: 'skinC', robe: 'blue', trim: 'cream', hair: 'man', hat: 'softCap', hatC: 'clay3', beard: 2, r: 19, k: 1.12 },
        v3e2_man: { name: '紙市的工人', skin: 'skinB', top: 'clay3', bottom: 'wood', leg: 'wood', hair: 'man', hat: 'band', hatC: 'cream', beard: 1, r: 19, k: 1.1 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v3e2 = {
    id: 'v3e2', vol: '第 3 冊 中古世界', volNo: 3, ep: 2, title: '智慧宮的翻譯官', next: '泥做的活字',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說他要把這一題寫成數學作業的第 0 題。',
    note: '阿凱、小禾、哈米德和翻譯學者是虛構的角色；花拉子米的話是根據他的書改編，不是他的原話，他的樣子是想像圖。巴格達的圓城、智慧宮的樣子也是想像圖。「智慧宮」到底有多大、做了哪些事，學者還有不同看法；造紙術是不是因為怛羅斯之戰才傳到西邊，學者也有不同看法。',
    curriculum: '國中社會會再學到：伊斯蘭教的起源與發展（巴格達的翻譯運動是延伸）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'sand', near: 'g5' },
      back: [
        { k: 'dome', x: 130, y: 900, W: 190, H: 190, domeC: 'g5' },
        { k: 'palm', x: 690, y: 960, H: 260 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trioR', panels: [
        { scene: 'mrt', sceneOpt: { seat: .62 }, shot: '中景：捷運車廂裡，阿凱趴在數學作業上',
          actors: [
            { c: 'kai', x: 200, y: 330, s: 1, pose: 'hold', expr: 'mad', hold: 'v3e2_sheet', look: .4 },
            { c: 'he', x: 600, y: 332, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '數學到底有什麼用！\n又不能吃！', x: 14, y: 10, w: 290, fs: 24, tail: [204, 124] },
            { t: '你剛剛還在算\n還要坐幾站。', x: 456, y: 20, w: 230, fs: 24, tail: [590, 134] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'coin', sceneOpt: { year: '830', era: '西元' }, shot: '小格特寫：捷運站出口的搖搖車，硬幣掉進投幣孔',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'kai', x: 118, y: 860, s: 1.9, pose: 'shout', expr: 'grin', noShadow: true }],
          bubbles: [{ t: '我要去沒有\n數學的地方！', x: 18, y: 380, w: 206, fs: 24, tail: [108, 500] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] },
        { scene: 'vortex', sceneOpt: { year: '830', cy: .4 }, shot: '大格：搖搖車衝進時光漩渦，兄妹抓緊',
          actors: [
            { c: 'he', x: 150, y: 680, s: 1.3, pose: 'scared', expr: 'shock', noShadow: true },
            { c: 'kai', x: 380, y: 690, s: 1.3, pose: 'fists', expr: 'yell', flip: 1, noShadow: true, sweat: 2 }
          ],
          bubbles: [
            { t: '捷運站出口\n怎麼也有搖搖車？', x: 14, y: 20, w: 250, fs: 24, tail: [140, 380] },
            { t: '哇啊啊——\n數字在倒轉！', x: 290, y: 140, w: 220, kind: 'shout', fs: 24, tail: [380, 400] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e2_round', shot: '滿版遠景：底格里斯河邊的巴格達，圓形城牆和綠色圓頂',
          back: [
            { k: 'ship', kind: 'reed', x: 230, y: 655, s: .55 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 1200 年前，巴格達', en: 'BAGHDAD · c. AD 830', x: 0, y: 18 },
            { t: '巴格達在今天的伊拉克，底格里斯河邊。那時候它是伊斯蘭世界的大城，學者從各地來到這裡。', x: 0, y: 112, w: 480, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：巴格達。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '這條河\n好眼熟！', x: 348, y: 652, w: 190, tail: [462, 748] },
            { t: '第 1 話的\n兩河流域！', x: 566, y: 700, w: 200, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v3e2_papers', shot: '中景：紙市，阿凱撞到架子，剛做好的紙飛起來',
          back: [{ k: 'v3e2_rack', x: 600, y: 300, s: 1.1 }],
          props: [{ k: 'v3e2_fly', x: 330, y: 300, rot: -20 }, { k: 'v3e2_fly', x: 400, y: 250, rot: 25 }, { k: 'v3e2_fly', x: 470, y: 330, rot: -8 }],
          actors: [
            { c: 'he', x: 80, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 240, y: 436, s: 1.05, pose: 'splat', expr: 'shock', look: .4, sweat: 2 },
            { c: 'v3e2_hamid', x: 600, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '哇！\n這裡也有紙？', x: 96, y: 40, w: 220, tail: [236, 270] },
            { t: '小心！！\n那是剛做好的紙！', x: 380, y: 26, w: 290, kind: 'shout', fs: 25, tail: [586, 250] }
          ],
          sfx: [{ t: '嘩啦！', x: 330, y: 220, fs: 44, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：哈米德抱著一疊紙自我介紹',
          actors: [{ c: 'v3e2_hamid', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'smug', hold: 'v3e2_sheet', look: -.2 }],
          bubbles: [{ t: '我叫哈米德！\n我家在紙市\n賣紙、幫人抄書。', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '紙市的孩子：哈米德（虛構）', left: 8 } },
        { scene: 'v3e2_papers', shot: '中景：小禾翻筆記，哈米德說紙是從東邊傳來的',
          actors: [
            { c: 'he', x: 90, y: 545, s: 1, pose: 'hold', expr: 'think', hold: 'notebook', look: .6 },
            { c: 'v3e2_hamid', x: 330, y: 540, s: 1, pose: 'point', expr: 'happy', flip: 1, look: -.2 }
          ],
          caption: [{ t: '紙是中國發明的，沿著絲路\n傳到中亞，再傳到巴格達。', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '聽說是打仗抓到的\n中國工匠教的？', x: 8, y: 124, w: 236, fs: 22, tail: [96, 352] },
            { t: '有人這麼說，\n可是學者有\n不同的看法！', x: 250, y: 160, w: 204, fs: 22, tail: [330, 352] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e2_hall', shot: '滿版：智慧宮裡，學者們圍著長桌，把各地的書翻成阿拉伯文',
          back: [
            { k: 'shelf', x: 110, y: 640, W: 170, H: 260 },
            { k: 'shelf', x: 690, y: 640, W: 170, H: 260, seed: 7 },
            { k: 'v3e2_desk', x: 400, y: 660, s: 1.2 }
          ],
          actors: [
            { c: 'v3e2_tr1', x: 290, y: 650, s: .85, pose: 'write', expr: 'think', hold: 'brush' },
            { c: 'v3e2_tr2', x: 520, y: 652, s: .85, pose: 'hold', expr: 'calm', hold: 'scroll', flip: 1 },
            { c: 'v3e2_hamid', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'awe', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '智慧宮：哈里發馬蒙支持的學術中心', x: 16, y: 16, w: 470 },
            { t: '學者把希臘、印度等地的書，翻成阿拉伯文，一邊翻譯、一邊研究。', x: 16, y: 84, w: 420, dark: false }
          ],
          bubbles: [
            { t: '希臘的幾何、\n印度的天文和數字，\n都在這裡翻譯！', x: 14, y: 636, w: 250, fs: 23, tail: [140, 790] },
            { t: '一整間\n都是書！', x: 300, y: 690, w: 170, fs: 24, tail: [444, 772] },
            { t: '翻譯官就是\n幫書「搬家」\n的人！', x: 560, y: 640, w: 206, fs: 24, tail: [646, 790] }
          ] }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'v3e2_hall', shot: '大格：數學家花拉子米站在圖板旁',
          back: [{ k: 'v3e2_square', x: 120, y: 760, s: 1.2 }],
          actors: [
            { c: 'v3e2_khw', x: 330, y: 1030, s: 1.5, pose: 'point', expr: 'calm', flip: 1, look: -.4 },
            { c: 'kai', x: 90, y: 1034, s: 1.1, pose: 'think', expr: 'think', look: .6 }
          ],
          caption: [{ t: '數學家花拉子米\n（大約 780～850 年）', x: 0, y: 14, w: 290 }],
          bubbles: [
            { t: '我寫了一本書，教大家\n用「補回去」和「兩邊\n對消」來算答案。', x: 120, y: 226, w: 360, fs: 23, tail: [320, 680] },
            { t: '算這個\n要幹嘛？', x: 14, y: 410, w: 150, fs: 22, tail: [80, 840] },
            { t: '分遺產、做生意、\n量土地，都用得到。', x: 190, y: 540, w: 290, fs: 22, tail: [330, 690] }
          ],
          tag: { t: '花拉子米的話：改編自他的代數書', left: 8, top: 140 } },
        { scene: 'v3e2_digits', shot: '小格：印度傳來的十個數字',
          caption: [{ t: '印度傳來的\n數字', x: 0, y: 14, w: 170 }],
          bubbles: [{ t: '還有 0！', x: 60, y: 420, w: 150, fs: 24 }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '小格：名字變成英文字',
          caption: [{ t: '他的書名變成\n英文的「代數」\nalgebra；\n他的名字變成\n「演算法」\nalgorithm。', x: 0, y: 14, w: 230 }],
          actors: [{ c: 'he', x: 140, y: 500, s: 1.05, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.3 }],
          bubbles: [{ t: '電腦也\n用得到！', x: 80, y: 222, w: 150, fs: 24, tail: [140, 316] }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v3e2_path', shot: '矮寬格：數字從印度走到巴格達，再走到歐洲',
          caption: [{ t: '1202 年，義大利的費波那契寫書，把這種數字介紹給歐洲。', x: 0, y: 14, w: 760 }],
          bubbles: [{ t: '1、2、3 走了半個地球！', x: 230, y: 340, w: 330, fs: 24 }] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: false, ground: 'sand', near: 'clay3', river: { y: .5, h: .1, tilt: .02 } }, shot: '收尾大格：傍晚的河邊，哈米德送阿凱一張紙',
          back: [
            { k: 'palm', x: 560, y: 360, H: 200 },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v3e2_hamid', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', hold: 'v3e2_sheet', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '這張紙送你，\n回去寫作業！', x: 14, y: 160, w: 210, fs: 22, tail: [110, 316] },
            { t: '好啦……數學\n有點用。', x: 236, y: 140, w: 210, fs: 22, tail: [284, 326] },
            { t: '「有點」？', x: 456, y: 236, w: 170, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n北宋！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：泥做的活字', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '巴格達', t: '大約 1200 年前的巴格達在底格里斯河邊（今天的伊拉克），是伊斯蘭世界的大城，學者從各地來到這裡。' },
      { h: '翻譯運動', t: '哈里發馬蒙支持「智慧宮」，學者把希臘、印度等地的書翻成阿拉伯文，一邊翻譯一邊研究。智慧宮到底有多大，學者還有不同看法。' },
      { h: '紙傳到巴格達', t: '紙是中國發明的，沿著絲路傳到中亞，796 年巴格達有了造紙工坊。有人說是怛羅斯之戰（751 年）抓到的中國工匠教的，但學者認為紙可能更早就傳過去了，看法不一樣。' },
      { h: '花拉子米和代數', t: '數學家花拉子米寫了一本解題的書，可以用來分遺產、做生意、量土地。書名變成英文的 algebra（代數），他的名字變成 algorithm（演算法）。' },
      { h: '1、2、3 的旅行', t: '我們寫的數字是從印度傳到巴格達，1202 年費波那契再把它介紹到歐洲，所以又叫「阿拉伯數字」。' }
    ],
    map: {
      bounds: { lon: [5, 112], lat: [12, 50] },
      cap: '紅點是巴格達。紅色虛線是紙往西傳的大概路線（從長安經過撒馬爾罕到巴格達），黃色虛線是數字從印度經過巴格達、再到義大利的大概路線。路線是簡化的畫法，海岸是今天的樣子。',
      alt: '世界地圖的一部分：巴格達在中間（紅點），東邊有撒馬爾罕和長安，南邊是印度，西邊是義大利的比薩',
      routes: [
        { pts: [[34.27, 108.95], [40.14, 94.66], [39.65, 66.96], [36.3, 59.6], [33.31, 44.36]] },
        { pts: [[22.5, 75.5], [27, 64], [30.5, 52], [33.31, 44.36], [36.2, 37.1], [37.5, 26], [38.2, 15.6], [43.72, 10.4]], f: 'gold' }
      ],
      labels: [
        { t: '印度', lat: 18, lon: 78, size: 24, f: 'wood' },
        { t: '地中海', lat: 34.2, lon: 18, size: 18, f: 'cream' },
        { t: '紙', lat: 44, lon: 82, size: 26, f: 'red' },
        { t: '數字', lat: 25, lon: 60, size: 24, f: 'gold' }
      ],
      cities: [
        { n: '巴格達', lat: 33.31, lon: 44.36, main: 1, side: 'r', dy: 24 },
        { n: '撒馬爾罕', lat: 39.65, lon: 66.96, side: 'r', dy: -10 },
        { n: '長安', lat: 34.27, lon: 108.95, side: 'l', dy: 26 },
        { n: '比薩（義大利）', lat: 43.72, lon: 10.4, side: 'r', dy: -12 }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：紙從中國走到巴格達，花了大約一千年；數字從巴格達走到歐洲，又花了快四百年。',
      items: [
        { y: -150, when: '約西元前 2 世紀', t: '中國已經\n開始用紙', side: 'u', w: 180 },
        { y: 796, when: '西元 796 年', t: '巴格達有了\n造紙工坊', side: 'd', w: 170 },
        { y: 830, when: '約西元 830 年', t: '智慧宮的學者\n翻譯各地的書', side: 'u', main: 1, w: 190 },
        { y: 1202, when: '西元 1202 年', t: '費波那契把\n數字傳到歐洲', side: 'd', w: 150 }
      ]
    },
    sources: [
      '聖安德魯斯大學 MacTutor 數學史〈Al-Khwarizmi〉（大約 780～850 年；在巴格達智慧宮；書名 al-jabr 變成 algebra、拉丁文書名 Algoritmi 變成 algorithm；書是為了分遺產、做生意、量土地；約 770 年印度天文書帶到巴格達宮廷）',
      '聖安德魯斯大學 MacTutor 數學史〈Arabic mathematics〉（哈里發馬蒙在巴格達設立智慧宮，成為翻譯與研究中心；翻譯歐幾里得等希臘著作；印度的數字與十進位影響巴格達的數學）',
      '聖安德魯斯大學 MacTutor 數學史〈Fibonacci〉（1202 年《算盤書》把印度－阿拉伯數字介紹到歐洲）',
      '史密森尼民俗節 2002〈The Silk Road: Paper〉（耶魯大學 Valerie Hansen 撰：紙在西元前 2 世紀的中國已經使用；怛羅斯之戰傳出造紙術是傳說，多數學者認為可能更早就傳到西邊；796 年巴格達設造紙工坊）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '這一話的巴格達，在今天的哪個國家？', opts: ['伊拉克', '埃及', '印度', '土耳其'], a: 0, why: '巴格達在底格里斯河邊，是今天伊拉克的首都。' },
      { id: 'q2', d: 1, type: 'tf', q: '智慧宮的學者，把希臘、印度等地的書翻成阿拉伯文。', a: true, why: '對！學者一邊翻譯各地的書，一邊做研究。' },
      { id: 'q3', d: 2, type: 'mc', q: '英文的 algebra（代數），是從誰的書名來的？', opts: ['花拉子米', '阿倍仲麻呂', '費波那契', '漢摩拉比'], a: 0, why: '花拉子米的書名裡有 al-jabr 這個字，後來變成 algebra；他的名字還變成了 algorithm（演算法）。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['中國已經開始用紙', '巴格達有了造紙工坊', '花拉子米在巴格達寫數學書', '費波那契把這種數字介紹到歐洲'], why: '中國在西元前 2 世紀就用紙；巴格達 796 年有了造紙工坊；花拉子米大約在 830 年前後寫書；費波那契的書在 1202 年。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「1、2、3 叫阿拉伯數字，所以是阿拉伯人自己發明的。」根據這一話，哪個說法最正確？', opts: ['不對，這些數字是從印度傳過去的', '對，是巴格達的國王一個人想出來的', '對，阿拉伯數字跟印度一點關係都沒有', '不對，這些數字是歐洲人最早發明的'], a: 0, why: '數字是從印度傳到巴格達，再經過費波那契的書傳到歐洲。歐洲人從阿拉伯人那裡學到，所以叫它「阿拉伯數字」。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
