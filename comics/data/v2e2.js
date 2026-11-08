/* 世界史漫畫 第 2 冊 古典世界・第 2 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：佛教的起源與傳播（孔雀王朝、阿育王）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, cap, both, place, seeded, prop, groundShadow } = K;
    // 阿育王石柱：磨亮的砂岩柱身＋鐘形柱頭＋圓盤＋坐著的獅子（簡化，不是照哪一根畫）
    const pillar = (H, lion) => {
      const W = H * .07;
      let s = groundShadow(0, 3, W * 2, 6) + both(poly(`${-W / 2},0 ${-W * .4},${-H * .8} ${W * .4},${-H * .8} ${W / 2},0`, C.brick3));
      s += poly(`${-W * .1},0 ${-W * .06},${-H * .8} ${W * .06},${-H * .8} ${W * .12},0`, 'rgba(255,255,255,.45)');
      s += path(`M${-W * .45} ${-H * .8} Q${-W * .9} ${-H * .84} ${-W * .6} ${-H * .88} L${W * .6} ${-H * .88} Q${W * .9} ${-H * .84} ${W * .45} ${-H * .8}Z`, C.brick);
      s += rect(-W * .75, -H * .92, W * 1.5, H * .04, C.brick3, 3) + circ(0, -H * .9, W * .18, C.wood) + circ(0, -H * .9, W * .1, C.brick3);
      if (lion !== false) {   // 坐著的獅子（側面、簡化）
        const L = W * 1.5, b = -H * .92;
        s += ell(-L * .12, b - L * .26, L * .34, L * .26, C.brick2) + rect(L * .1, b - L * .4, L * .12, L * .4, C.brick2, 3) + rect(L * .26, b - L * .4, L * .12, L * .4, C.brick2, 3);
        s += circ(L * .26, b - L * .62, L * .3, C.clay) + circ(L * .34, b - L * .6, L * .19, C.brick2) + ell(L * .5, b - L * .54, L * .1, L * .07, C.brick2) + circ(L * .4, b - L * .66, L * .035, C.ink);
        s += path(`M${-L * .44} ${b - L * .24} Q${-L * .66} ${b - L * .3} ${-L * .6} ${b - L * .56}`, 'none', `stroke="${C.brick2}" stroke-width="${L * .06}"`);
      }
      return s;
    };
    const glyphs = (x0, y0, w, rows, sz, seed, f) => {   // 像婆羅米文字的刻痕（只是樣子，不是真的字）
      const rnd = seeded(seed); let s = '';
      for (let r = 0; r < rows; r++) for (let x = x0; x < x0 + w - sz; x += sz * 1.5) {
        const y = y0 + r * sz * 1.9, k = Math.floor(rnd() * 5);
        if (k === 0) s += rect(x, y, sz * .18, sz, f) + rect(x, y + sz * .4, sz * .8, sz * .18, f);
        else if (k === 1) s += circ(x + sz * .4, y + sz * .5, sz * .4, 'none', `stroke="${f}" stroke-width="${sz * .16}"`);
        else if (k === 2) s += rect(x, y, sz * .8, sz * .18, f) + rect(x + sz * .3, y, sz * .18, sz, f);
        else if (k === 3) s += path(`M${x} ${y + sz} L${x + sz * .4} ${y} L${x + sz * .8} ${y + sz}`, 'none', `stroke="${f}" stroke-width="${sz * .16}"`);
        else s += rect(x + sz * .3, y, sz * .18, sz, f) + rect(x, y + sz * .82, sz * .8, sz * .18, f);
      }
      return s;
    };
    root.ComicArt.extend({
      scenes: {
        // 孔雀王朝的大路：石柱、榕樹、水井、休息的小屋
        v2e2_road(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .8, h * .1, 200, 'url(#cm-sun)') + circ(w * .8, h * .1, 44, '#FFF8DC');
          s += path(`M0 ${h * .44} Q${w * .3} ${h * .4} ${w * .6} ${h * .43} T${w} ${h * .41} L${w} ${h * .5} L0 ${h * .5}Z`, C.g3) + rect(0, h * .48, w, h * .52, C.sand);
          s += prop({ k: 'road', old: 1, x: w * .52, y: h, W: 560, w2: 30, L: h * .52, f: 'paper3' });
          s += prop({ k: 'tree', x: w * .12, y: h * .6, H: 330 }) + prop({ k: 'tree', x: w * .9, y: h * .58, H: 300 });
          for (let i = 0; i < 6; i++) s += rect(w * .04 + i * 22, h * .43, 3, h * .16, C.wood, 0, 'opacity=".6"');
          s += prop({ k: 'house', x: w * .76, y: h * .58, W: 150, H: 80, roof: 'thatch' }) + prop({ k: 'well', x: w * .3, y: h * .6, s: .9 });
          s += `<g transform="translate(${w * .58} ${h * .62})">` + pillar(h * .5) + '</g>';
          s += path(`M0 ${h * .88} Q${w * .5} ${h * .82} ${w} ${h * .88} L${w} ${h} L0 ${h}Z`, C.brick3);
          return { bg: s };
        },
        // 石匠的院子：一根躺著、磨得發亮的石柱
        v2e2_work(w, h) {
          let s = rect(0, 0, w, h, C.sky) + rect(0, h * .5, w, h * .5, C.sand) + path(`M0 ${h * .5} Q${w * .5} ${h * .44} ${w} ${h * .5}Z`, C.g3);
          s += prop({ k: 'tree', x: w * .9, y: h * .52, H: 200 });
          const y = h * .84, x0 = w * .3, x1 = w * .8;
          s += rect(x0 + 20, y - 4, 30, 26, C.wood) + rect(x1 - 70, y - 4, 30, 26, C.wood);
          s += both(path(`M${x0} ${y - 92} L${x1} ${y - 76} L${x1} ${y + 2} L${x0} ${y + 8}Z`, C.brick3)) + path(`M${x0} ${y - 74} L${x1} ${y - 60} L${x1} ${y - 50} L${x0} ${y - 62}Z`, 'rgba(255,255,255,.55)');
          s += path(`M${x1} ${y - 84} Q${x1 + 50} ${y - 92} ${x1 + 64} ${y - 40} Q${x1 + 50} ${y + 10} ${x1} ${y + 4}Z`, C.brick);
          s += ell(x0 + 22, y - 64, 12, 15, 'rgba(107,74,50,.35)') + ell(x0 + 48, y - 70, 11, 14, 'rgba(107,74,50,.3)');   // 手印
          return { bg: s };
        },
        // 石頭上的刻字（特寫）
        v2e2_inscr(w, h) {
          let s = rect(0, 0, w, h, C.brick) + rect(20, 140, w - 40, h - 200, C.brick3, 10);
          s += glyphs(48, 180, w - 96, 7, 26, 7, 'rgba(107,74,50,.75)');
          return { bg: s };
        }
      },
      props: {
        v2e2_pillar: x => place(x, pillar(x.H || 400, x.lion)),
        v2e2_cow: x => place(x, groundShadow(0, 3, 64, 8) + [[-40, -60, -42, 0], [-26, -60, -24, 0], [30, -60, 32, 0], [44, -60, 48, 0]].map(l => cap(l[0], l[1], l[2], l[3] - 4, 10, C.cream)).join('') +
          ell(0, -74, 58, 26, C.cream) + ell(-10, -70, 18, 12, C.paper3) + path('M46 -84 Q74 -96 88 -74 Q84 -54 64 -56 L48 -64Z', C.cream) + path('M62 -92 Q56 -110 46 -112 Q60 -104 64 -94Z', C.paper3) + path('M74 -92 Q84 -110 96 -110 Q82 -102 78 -92Z', C.paper3) + circ(78, -78, 3, C.ink) + rect(-62, -80, 6, 30, C.cream, 3)),
      },
      cast: {
        v2e2_ming: { name: '阿明（虛構）', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'skin', hair: 'short', r: 22, k: 1 },
        v2e2_anan: { name: '阿南（虛構）', skin: 'skinC', top: 'gold', skirt: 'cream', hair: 'curly', r: 22, k: .94 },
        v2e2_reader: { name: '宣讀的官員', skin: 'skinC', robe: 'g7', trim: 'gold', hair: 'man', hat: 'turban', hatC: 'cream', beard: 1, r: 19, k: 1.12 },
        v2e2_villager: { name: '村民', skin: 'skinB', top: 'clay3', skirt: 'cream', hair: 'man', hat: 'band', hatC: 'red', r: 19, k: 1.08 },
        v2e2_ashoka: { name: '阿育王', real: 1, skin: 'skinB', robe: 'cream', trim: 'red', hair: 'man', hat: 'turban', hatC: 'gold', beard: 0, r: 19, k: 1.2 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v2e2 = {
    id: 'v2e2', vol: '第 2 冊 古典世界', volNo: 2, ep: 2, title: '刻在石柱上的話', next: '用影子量地球',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱已經去跟阿明道歉了，兩個人又一起打球了。',
    note: '阿凱、小禾、阿明、阿南、宣讀的官員和村民是虛構的角色；阿育王的話改編自他刻的第十三號岩石詔令，不是原話。阿育王的樣子、石柱和路邊的景色都是想像圖；石柱上的刻痕只是樣子，不是真的字。阿育王在位的年代，各家說法差幾年（大約西元前 270～232 年）；羯陵伽之戰大約在西元前 260 年。他刻的話很多是「要怎麼做人」，學者認為不只是佛教的教導。',
    curriculum: '國中社會會再學到：佛教的起源與傳播（孔雀王朝、阿育王）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'clay3', near: 'g5' },
      back: [
        { k: 'v2e2_pillar', x: 650, y: 920, H: 520 },
        { k: 'tree', x: 110, y: 900, H: 300 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'ballCourt', sceneOpt: { back: 'trees', floor: 'g5', sun: [.1, .12], hoop: .74 }, shot: '中景：公園籃球場，阿凱推倒阿明，小禾跑過來',
          props: [{ k: 'ball', x: 470, y: 330 }],
          actors: [
            { c: 'v2e2_ming', x: 380, y: 322, s: .95, pose: 'sit', expr: 'worry', flip: 1, look: -.6, noShadow: true },
            { c: 'kai', x: 200, y: 330, s: 1, pose: 'arg', expr: 'mad', look: .6 },
            { c: 'he', x: 640, y: 332, s: 1.05, pose: 'fists', expr: 'mad', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '是他先撞我的！', x: 30, y: 30, w: 240, tail: [210, 130] },
            { t: '可是你推人。\n去跟阿明道歉！', x: 446, y: 20, w: 240, tail: [610, 140] }
          ],
          sfx: [{ t: '砰！', x: 290, y: 150, fs: 44, rot: -8 }],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g3', ground: 'g5' }, shot: '大格：公園角落販賣機旁的搖搖車，阿凱躲過去',
          back: [
            { k: 'tree', x: 430, y: 343, H: 260 },
            { k: 'crate', x: 70, y: 400, s: 1.3, f: 'red' },
            { k: 'car', x: 160, y: 640, s: .9 }
          ],
          actors: [
            { c: 'kai', x: 380, y: 660, s: 1.2, pose: 'think', expr: 'worry', flip: 1, look: .4, sweat: 1 }
          ],
          bubbles: [
            { t: '道歉好丟臉……\n我去兜風一下。', x: 280, y: 250, w: 230, fs: 24, tail: [380, 430] },
            { t: '嗶——投 10 元，\n帶你去看\n會認錯的國王。', x: 16, y: 300, w: 236, kind: 'car', fs: 24, tail: [140, 500] }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '250', era: '西元前' }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元前 250',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！你想溜！\n西元前 250！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e2_road', shot: '滿版遠景：大路旁有磨亮的石柱、大樹、水井和休息的小屋',
          back: [{ k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 2270 年前，孔雀王朝', en: 'MAURYA EMPIRE · c.250 BC', x: 0, y: 18 },
            { t: '孔雀王朝在今天的印度一帶，那時候的國王叫阿育王。', x: 0, y: 112, w: 330, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：孔雀王朝。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '那根柱子\n亮晶晶！', x: 348, y: 672, w: 196, tail: [460, 760] },
            { t: '上面坐著\n一隻獅子！', x: 566, y: 700, w: 200, tail: [618, 800], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v2e2_work', shot: '中景：石匠的院子，阿凱在磨亮的石柱上照鏡子、按手印',
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 230, y: 430, s: 1.05, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v2e2_anan', x: 690, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '哇！可以照鏡子！\n我按個手印～', x: 90, y: 40, w: 250, tail: [214, 236] },
            { t: '別摸！！\n我磨了一個月！', x: 420, y: 26, w: 300, kind: 'shout', fs: 25, tail: [670, 238] }
          ],
          sfx: [{ t: '啪！', x: 330, y: 220, fs: 44, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：石匠的孩子阿南叉腰解釋',
          actors: [{ c: 'v2e2_anan', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '我爸是石匠。\n國王要把他的話\n刻在石柱上！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '石匠的孩子：阿南（虛構）', left: 8 } },
        { scene: 'v2e2_inscr', shot: '特寫：石頭上一行一行的刻字',
          caption: [{ t: '刻在石頭上的話', en: 'EDICTS OF ASHOKA', x: 0, y: 16, w: 220 }],
          bubbles: [
            { t: '上面寫\n什麼？', x: 250, y: 14, w: 180, kind: 'think', fs: 24 },
            { t: '用大家說的話寫：\n要對人好，\n也要對動物好。', x: 60, y: 330, w: 330, fs: 24 }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sun: [.85, .1], hz: .44, far: 'g3', ground: 'sand', near: 'brick3' }, shot: '滿版：大樹下的路邊，官員念石柱上的話，旅人和牛在休息喝水',
          back: [
            { k: 'tree', x: 150, y: 520, H: 420 },
            { k: 'tree', x: 690, y: 500, H: 380 },
            { k: 'v2e2_pillar', x: 420, y: 560, H: 420 },
            { k: 'well', x: 600, y: 610, s: 1 },
            { k: 'v2e2_cow', x: 720, y: 640, s: .9, flip: 1 },
            { k: 'house', x: 250, y: 560, W: 150, H: 80, roof: 'thatch' }
          ],
          actors: [
            { c: 'v2e2_reader', x: 330, y: 640, s: .95, pose: 'hold', expr: 'calm', hold: 'scroll' },
            { c: 'v2e2_villager', x: 520, y: 650, s: .9, pose: 'stand', expr: 'happy', flip: 1 },
            { c: 'v2e2_anan', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'calm', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'stand', expr: 'happy', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '國王下令：路邊種樹、挖井、蓋休息的小屋，\n人和動物生病，都要有藥醫。', x: 16, y: 16, w: 560 },
            { t: '石柱上的話，會有官員念給不識字的人聽。', x: 16, y: 120, w: 400, dark: false }
          ],
          bubbles: [
            { t: '國王說：不同的信仰，\n都要互相尊重。', x: 40, y: 250, w: 300, fs: 24, tail: [326, 428] },
            { t: '以前不是這樣的。\n是那場大戰以後……', x: 14, y: 640, w: 236, fs: 22, tail: [140, 790] },
            { t: '樹下好涼！', x: 280, y: 680, w: 180, fs: 24, tail: [440, 772] },
            { t: '連牛也有\n水喝耶！', x: 540, y: 680, w: 200, fs: 24, tail: [650, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'land', sceneOpt: { sky: '#D9C9A6', sun: [.5, .42], hz: .55, far: 'clay3', ground: 'clay2' }, shot: '細長格：黃昏，阿育王一個人站著回想那場戰爭',
          actors: [
            { c: 'v2e2_ashoka', x: 180, y: 1000, s: 1.45, pose: 'stand', expr: 'worry', look: .3 }
          ],
          caption: [
            { t: '大約西元前 260 年，\n阿育王打下羯陵伽，\n在今天印度東邊的海邊。', say: '大約西元前 260 年，阿育王打下羯（ㄐㄧㄝˊ）陵伽，在今天印度東邊的海邊。', x: 0, y: 14, w: 344 },
            { t: '他自己刻字說：很多人失去生命、被帶離家園，讓他非常難過、後悔。', x: 0, y: 150, w: 330, dark: false }
          ],
          bubbles: [
            { t: '看到那麼多人受苦，\n我心裡好痛。\n以後不再這樣打仗。', x: 10, y: 470, w: 324, fs: 23, tail: [184, 650] }
          ],
          tag: { t: '阿育王的話：改編自第十三號岩石詔令', left: 8, top: 420 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：阿育王後來做了哪些事',
          caption: [{ t: '大戰以後，阿育王改做什麼？', x: 0, y: 16 }],
          cards: [
            { icon: 'scrollI', y: 80, t: '把規矩刻在石柱和岩石上，\n放在大路旁和城市裡，\n用各地的話來寫。' },
            { icon: 'water', y: 344, t: '路邊挖井、種樹、\n蓋休息的小屋；\n人和動物都能看病。' },
            { icon: 'people', y: 610, t: '尊重不同的信仰；\n支持佛教，派人把\n佛教傳到斯里蘭卡。' }
          ],
          bubbles: [{ t: '原來國王\n也會認錯、會改！', x: 24, y: 896, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .8 }, shot: '矮寬格：宮殿裡，阿育王對兄妹說話',
          back: [
            { k: 'column', style: 'persia', x: 44, y: 330, H: 330, f: 'cream' },
            { k: 'column', style: 'persia', x: 740, y: 330, H: 330, f: 'cream' }
          ],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v2e2_anan', x: 300, y: 392, s: .9, pose: 'bow', expr: 'calm' },
            { c: 'v2e2_ashoka', x: 560, y: 394, s: 1, pose: 'offer', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '用道理讓人心服，\n比打勝仗更了不起。', x: 40, y: 14, w: 420, fs: 24, tail: [528, 150] }
          ],
          tag: { t: '阿育王的話：改編自第十三號岩石詔令', left: 10, top: 112 } },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的石柱旁，準備出發',
          back: [
            { k: 'v2e2_pillar', x: 560, y: 360, H: 320 },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v2e2_anan', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'stand', expr: 'worry', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '做錯事不可怕，\n改過來就好！', x: 14, y: 176, w: 210, fs: 22, tail: [110, 300] },
            { t: '回去……\n我去跟阿明\n說對不起。', x: 236, y: 168, w: 196, fs: 22, tail: [284, 326] },
            { t: '知道錯、\n肯改，\n最難得。', x: 444, y: 210, w: 160, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n埃及！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：用影子量地球', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '孔雀王朝和阿育王', t: '孔雀王朝在今天的印度一帶，首都叫華氏城。阿育王大約在西元前 270～232 年當國王（各家說法差幾年）。' },
      { h: '大戰以後的改變', t: '大約西元前 260 年，阿育王打下羯陵伽。他自己刻字說，看到很多人失去生命、被帶離家園，非常難過後悔，之後不再用打仗去擴大國家。' },
      { h: '刻在石柱上的話', t: '他把規矩刻在磨亮的砂岩石柱和岩石上，用各地的話來寫，多數是婆羅米文字；在今天的阿富汗，還用希臘文和亞蘭文刻。' },
      { h: '照顧人和動物', t: '路邊種樹、挖井、蓋休息的小屋，讓人和動物都能看病；也要大家尊重不同的信仰。' },
      { h: '佛教傳出去', t: '阿育王支持佛教，派自己的孩子把佛教帶到斯里蘭卡。1837 年，學者普林塞普讀懂了石柱上的字；1950 年，鹿野苑石柱上的獅子柱頭成為印度的國徽。' }
    ],
    map: {
      bounds: { lon: [62, 92], lat: [6, 33] },
      cap: '紅點是孔雀王朝的首都華氏城。東南邊的海岸是羯陵伽；西北邊的坎達哈（今天的阿富汗）也有阿育王刻的字；紅色虛線是佛教傳到斯里蘭卡的方向（簡化畫法）。河道、海岸是今天的樣子。',
      alt: '印度地圖：華氏城（紅點）在恆河邊，東南海岸是羯陵伽，西北的坎達哈在阿富汗，南邊的斯里蘭卡有紅色虛線連過去',
      rivers: ['ganges', 'indus'],
      routes: [{ pts: [[25.6, 85.1], [20.6, 85.6], [15.5, 81.5], [11.0, 80.4], [8.6, 80.6]] }],
      labels: [
        { t: '孔雀王朝', lat: 22.5, lon: 77.0, size: 30, f: 'g9' },
        { t: '恆河', lat: 27.4, lon: 80.4, size: 20, f: 'g7' },
        { t: '印度河', lat: 26.8, lon: 66.2, size: 20, f: 'g7' },
        { t: '斯里蘭卡', lat: 7.3, lon: 85.2, size: 20, f: 'cream' },
        { t: '阿拉伯海', lat: 15.5, lon: 66.5, size: 22, f: 'cream' }
      ],
      cities: [
        { n: '華氏城', lat: 25.61, lon: 85.14, main: 1, side: 'l' },
        { n: '羯陵伽', lat: 20.19, lon: 85.84, side: 'l' },
        { n: '坎達哈', lat: 31.61, lon: 65.71, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：阿育王的石柱刻好以後，過了兩千年，才有人重新讀懂上面的字。',
      items: [
        { y: -260, when: '約西元前 260 年', t: '羯陵伽之戰後，\n阿育王後悔', side: 'd', w: 196 },
        { y: -250, when: '約西元前 250 年', t: '把規矩刻在\n石柱和岩石上', side: 'u', main: 1, w: 190 },
        { y: 1837, when: '西元 1837 年', t: '普林塞普讀懂\n石柱上的字', side: 'd', w: 180 },
        { y: 1950, when: '西元 1950 年', t: '獅子柱頭\n成為印度國徽', side: 'u', w: 180 }
      ]
    },
    sources: [
      '國家地理〈Ashoka〉（約西元前 304～233 年；約前 270 年掌權，八年後打下羯陵伽；他寫下自己對戰爭的痛心，之後不再用武力征服；石柱詔令用當地方言，坎達哈附近有希臘文和亞蘭文；派自己的孩子到斯里蘭卡傳教；鹿野苑獅子柱頭 1950 年成為印度國徽）',
      'S. Dhammika 英譯《The Edicts of King Asoka》（Access to Insight）：第十三號岩石詔令（羯陵伽之戰與後悔、「用正法征服」最好）、第二號（人和動物的醫療、路邊挖井種樹）、第十二號（尊重其他信仰）、第七號石柱詔令（榕樹、井、休息處）；1837 年普林塞普讀出德里石柱上的字；多數用婆羅米文字',
      '大英博物館館藏 1880.21〈Pillar of Emperor Ashoka〉（Google Arts & Culture）：楚納爾（瓦拉納西附近）的砂岩、表面磨亮、婆羅米文字，內容是阿育王的「正法」，不專講佛教',
      '印度考古調查局 ASI 陶利（Dhauli）岩石詔令說明（用婆羅米文字、有第十三號詔令；陶利在今天的奧里薩，古代屬於羯陵伽）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '阿育王把他的規矩刻在哪裡，讓大家都看得到？', opts: ['石柱和岩石上', '竹片和木板上', '泥板和陶片上', '絲布和紙張上'], a: 0, why: '阿育王把話刻在磨亮的石柱和岩石上，放在大路旁和城市裡。' },
      { id: 'q2', d: 1, type: 'tf', q: '阿育王打下羯陵伽以後，覺得很難過、後悔，之後不再用打仗去擴大國家。', a: true, why: '對！他自己刻字說，看到很多人受苦非常痛心，之後改用道理和照顧百姓來治理國家。' },
      { id: 'q3', d: 2, type: 'mc', q: '下面哪一件，是阿育王在路邊做的事？', opts: ['挖井、種樹、蓋休息的小屋', '蓋高高的城牆擋住旅人', '每隔一小段路就設關卡跟旅人收錢', '把大路全部改成石板路'], a: 0, why: '他下令路邊挖井、種樹、蓋休息的地方，人和動物都能喝水、乘涼、看病。' },
      { id: 'q4', d: 2, type: 'match', q: '把左邊和右邊配起來。', pairs: [['羯陵伽之戰', '讓阿育王後悔的大戰'], ['石柱詔令', '刻在石頭上的國王的話'], ['斯里蘭卡', '佛教被傳過去的島'], ['獅子柱頭', '今天印度的國徽']], why: '羯陵伽之戰讓阿育王後悔；他把話刻在石柱上；派人把佛教傳到斯里蘭卡；鹿野苑石柱的獅子柱頭成了印度國徽。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「國王都很厲害，不會做錯事，所以也不用道歉。」根據這一話，哪個說法最正確？', opts: ['不對，阿育王就寫下自己的後悔，還改了做法', '對，阿育王從來沒有打過任何一場仗', '對，國王的話刻在石頭上，所以一定沒錯', '不對，阿育王後悔以後，馬上就把王位讓給了別人'], a: 0, why: '阿育王打完羯陵伽之戰後，刻字說自己很難過後悔，之後改成照顧百姓、尊重不同信仰。知道錯、肯改，才難得。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
