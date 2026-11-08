/* 世界史漫畫 第 2 冊 古典世界・第 3 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：希臘化時代的文化與科學。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, path, txt, cap, both, place, prop, puff, groundShadow } = K;
    const cubby = (x0, y0, cols, rows, cw, ch) => {   // 放卷軸的格子櫃（看得到一捲一捲的圓頭）
      let s = rect(x0 - 8, y0 - 8, cols * cw + 16, rows * ch + 16, C.wood, 4);
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const x = x0 + c * cw, y = y0 + r * ch;
        s += rect(x + 3, y + 3, cw - 6, ch - 6, '#3B2A1C');
        [[.3, .35], [.68, .38], [.48, .7], [.25, .72], [.75, .72]].forEach(([a, b], i) => { if ((r + c + i) % 4) s += circ(x + cw * a, y + ch * b, cw * .14, i % 2 ? C.cream : C.paper3); });
      }
      return s;
    };
    root.ComicArt.extend({
      scenes: {
        // 亞歷山卓的港口：海、划槳帆船、岸邊的城、遠方高塔（想像圖）
        v2e3_harbor(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .82, h * .1, 200, 'url(#cm-sun)') + circ(w * .82, h * .1, 44, '#FFF8DC');
          s += rect(0, h * .4, w, h * .32, C.g5);
          for (let i = 0; i < 12; i++) s += rect((i * 157) % w, h * (.43 + (i % 5) * .05), 60 + (i % 3) * 30, 4, C.g2, 2, 'opacity=".6"');
          s += path(`M${w * .62} ${h * .4} L${w} ${h * .38} L${w} ${h * .47} L${w * .7} ${h * .46}Z`, C.brick3);
          s += prop({ k: 'tower', x: w * .86, y: h * .44, W: 60, H: 300, f: 'cream' }) + prop({ k: 'fire', x: w * .86, y: h * .44 - 300 - 14, s: .5 });
          s += prop({ k: 'ship', x: w * .42, y: h * .56, s: .55, stripes: 'red' }) + prop({ k: 'ship', x: w * .72, y: h * .62, s: .4, flip: 1 });
          s += path(`M0 ${h * .42} L${w * .34} ${h * .46} L${w * .3} ${h * .72} L0 ${h * .72}Z`, C.brick3);
          s += prop({ k: 'temple', x: w * .14, y: h * .5, W: 220, H: 140, f: 'cream' }) + prop({ k: 'house', x: w * .06, y: h * .6, W: 110, H: 60, roof: 'flat', roofC: 'clay3', f: 'paper2' }) + prop({ k: 'house', x: w * .24, y: h * .64, W: 110, H: 60, roof: 'flat', roofC: 'clay3', f: 'cream' });
          s += rect(0, h * .72, w, h * .28, C.sand) + rect(0, h * .72, w, 10, C.brick2) + path(`M0 ${h * .88} Q${w * .5} ${h * .82} ${w} ${h * .88} L${w} ${h} L0 ${h}Z`, C.brick3);
          return { bg: s };
        },
        // 圖書館大廳：一整面放卷軸的格子櫃、希臘柱子
        v2e3_hall(w, h) {
          let s = rect(0, 0, w, h, C.cream) + rect(0, h * .78, w, h * .22, C.paper3) + rect(0, h * .78, w, 6, 'rgba(21,23,20,.12)');
          s += cubby(w * .08, h * .1, Math.floor(w * .84 / 64), 4, 64, h * .16);
          return { bg: s };
        },
        // 夏至中午的院子：竿子和斜斜的影子
        v2e3_court(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .62, h * .06, 220, 'url(#cm-sun)') + circ(w * .62, h * .06, 48, '#FFF8DC');
          s += rect(0, h * .42, w, h * .58, C.brick3);
          for (let i = 0; i < 9; i++) s += rect(0, h * (.46 + i * .06), w, 2, 'rgba(107,74,50,.18)');
          [w * .06, w * .94].forEach(x => { s += prop({ k: 'column', x, y: h * .44, H: 360, f: 'cream' }); });
          const gx = w * .56, gy = h * .6;
          s += poly(`${gx - 5},${gy} ${gx + 5},${gy} ${gx + 150},${gy + 44} ${gx + 138},${gy + 48}`, 'rgba(21,23,20,.38)');   // 影子
          s += rect(gx - 5, gy - 220, 10, 222, C.wood, 3) + rect(gx - 30, gy - 2, 60, 10, C.wood, 3);
          return { bg: s };
        },
        // 細長圖解：平行的陽光、兩根竿子、角度（角度放大畫）
        v2e3_diagram(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const cx = w * .66, cy = h * .98, R = 470, a2 = -112 * Math.PI / 180, ax = cx + R * Math.cos(a2), ay = cy + R * Math.sin(a2), sx = cx, sy = cy - R;
          for (let x = 20; x < w; x += 34) s += rect(x, 180, 3, 560, C.gold, 0, 'opacity=".75"');
          s += circ(cx, cy, R, C.g5) + circ(cx, cy, R - 18, C.g3);
          s += path(`M${cx} ${cy} L${sx} ${sy} M${cx} ${cy} L${ax} ${ay}`, 'none', `stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 8"`);
          s += cap(sx, sy, sx, sy - 70, 7, C.wood) + cap(ax, ay, ax + 70 * Math.cos(a2), ay + 70 * Math.sin(a2), 7, C.wood);
          s += circ(sx, sy - 4, 10, C.red) + circ(ax, ay, 10, C.red);
          s += path(`M${cx} ${cy - 120} A120 120 0 0 0 ${cx + 120 * Math.cos(a2)} ${cy + 120 * Math.sin(a2)}`, 'none', `stroke="${C.red}" stroke-width="5"`);
          s += txt(sx + 14, sy + 40, '賽伊尼', 22, C.ink, { a: 'start' }) + txt(ax - 4, ay + 40, '亞歷山卓', 22, C.ink, { a: 'middle' });
          s += txt(cx - 16, cy - 140, '7.2 度', 26, C.red, { a: 'end' });
          return { bg: s };
        }
      },
      props: {
        v2e3_cubby: x => place(x, cubby(0, -(x.rows || 3) * 60, x.cols || 3, x.rows || 3, 56, 60)),
        v2e3_stick: x => place(x, cap(0, 0, 0, -(x.H || 120), 6, C.wood) + poly(`-3,0 3,0 ${(x.H || 120) * .5},14 ${(x.H || 120) * .46},16`, 'rgba(21,23,20,.3)'))
      },
      icons: {
        v2e3_shadow() { return rect(0, 0, 120, 90, C.sky) + circ(96, 18, 12, '#FFF8DC') + rect(0, 70, 120, 20, C.brick3) + rect(40, 18, 5, 54, C.wood) + poly('40,72 45,72 92,84 86,86', 'rgba(21,23,20,.35)') + path('M96 18 L43 18', 'none', `stroke="${C.gold}" stroke-width="2" stroke-dasharray="4 3"`); },
        v2e3_well() { return rect(0, 0, 120, 90, C.sky) + circ(60, 12, 10, '#FFF8DC') + rect(30, 40, 60, 50, C.brick2) + rect(40, 40, 40, 50, '#3B2A1C') + rect(40, 78, 40, 12, C.gold) + rect(58, 12, 3, 66, C.gold, 0, 'opacity=".8"'); }
      },
      cast: {
        v2e3_dion: { name: '狄翁（虛構）', skin: 'skin', top: 'cream', skirt: 'g7', hair: 'curly', hairC: 'wood', r: 22, k: .95 },
        v2e3_era: { name: '埃拉托斯特尼', real: 1, skin: 'skin', robe: 'cream', trim: 'blue', hair: 'short', hairC: 'paper3', beard: 1, r: 19, k: 1.2 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v2e3 = {
    id: 'v2e3', vol: '第 2 冊 古典世界', volNo: 2, ep: 3, title: '用影子量地球', next: '一樣的字，一樣的尺',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！小禾的科展題目定了：夏至中午，一起來量影子。',
    note: '阿凱、小禾、狄翁是虛構的角色；埃拉托斯特尼的話是改編，他的書沒有留下來，量地球的方法是後來的人記下的。亞歷山卓的港口、圖書館和他的樣子都是想像圖。圖解裡的角度故意畫大，真的只有大約 7.2 度。1 斯塔德到底多長，學者還在爭論，所以算出來的公里數只能說「很接近」。圖書館有多少卷書，各家說法差很多。',
    curriculum: '國中社會會再學到：希臘化時代的文化與科學',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'sand' },
      back: [
        { k: 'tower', x: 660, y: 880, W: 80, H: 360, f: 'cream' },
        { k: 'fire', x: 660, y: 505, s: .6 },
        { k: 'column', style: 'greek', x: 110, y: 890, H: 300, f: 'cream' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .74, window: [.42, .1, .18, .4], winC: 'g2' }, shot: '中景：區立圖書館，小禾對著空白的科展單發愁，阿凱趴在書上睡',
          back: [
            { k: 'shelf', x: 90, y: 252, W: 140, H: 220 },
            { k: 'shelf', x: 720, y: 252, W: 120, H: 220, seed: 8 },
            { k: 'table', x: 420, y: 330, W: 300 }
          ],
          actors: [
            { c: 'kai', x: 300, y: 330, s: 1, pose: 'sit', expr: 'calm', look: .4, noShadow: true },
            { c: 'he', x: 560, y: 332, s: 1.05, pose: 'think', expr: 'worry', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '……隨便量個\n東西就好啦……', x: 40, y: 20, w: 230, kind: 'think', fs: 24, tail: [270, 190] },
            { t: '科展題目\n到底要做什麼啦！', x: 470, y: 18, w: 250, tail: [560, 140] }
          ],
          sfx: [{ t: '呼——', x: 210, y: 150, fs: 34, rot: -6, c: 'var(--g7)' }],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: [.5, .06], hz: .5, far: 'g3', ground: 'paper3' }, shot: '大格：中午的圖書館門口，影子好短，樹下的搖搖車開口說話',
          back: [
            { k: 'house', x: 380, y: 343, W: 260, H: 150, roof: 'flat', roofC: 'g7', f: 'cream' },
            { k: 'sign', t: '圖書館', x: 380, y: 250, W: 150, fs: 28, s: .8 },
            { k: 'tree', x: 70, y: 400, H: 260 },
            { k: 'car', x: 160, y: 640, s: .9 }
          ],
          actors: [
            { c: 'kai', x: 380, y: 660, s: 1.2, pose: 'point', expr: 'shock', flip: 1, look: .2 }
          ],
          bubbles: [
            { t: '中午了！你看，\n影子變好短！', x: 280, y: 296, w: 230, fs: 24, tail: [380, 420] },
            { t: '嗶——投 10 元，\n帶你去看用影子\n量地球的人。', x: 16, y: 230, w: 250, kind: 'car', fs: 24, tail: [140, 500] }
          ],
          sfx: [{ t: '叮！', x: 30, y: 460, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '240', era: '西元前' }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元前 240',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '量地球？！\n西元前 240！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e3_harbor', shot: '滿版遠景：亞歷山卓的港口，船很多，岸邊有神殿',
          back: [{ k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 2260 年前，亞歷山卓', en: 'ALEXANDRIA · c.240 BC', x: 0, y: 18 },
            { t: '亞歷山卓在今天埃及的海邊，是亞歷山大大帝在西元前 331 年建的城。', x: 0, y: 112, w: 390, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：亞歷山卓。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '又是埃及？\n金字塔呢？', x: 348, y: 672, w: 196, tail: [460, 760] },
            { t: '這裡是海邊，\n船好多！', x: 566, y: 700, w: 200, tail: [618, 800], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v2e3_hall', shot: '中景：圖書館大廳，阿凱拉開一捲書，一路滾到地上',
          props: [{ k: 'scroll', x: 520, y: 440, W: 300, H: 40, rot: 0 }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 260, y: 430, s: 1.05, pose: 'run', expr: 'yell', look: .4, sweat: 2 },
            { c: 'v2e3_dion', x: 690, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這捲書\n怎麼一直滾！', x: 90, y: 40, w: 220, tail: [250, 236] },
            { t: '那是要抄的書！\n快捲回去！！', x: 420, y: 26, w: 300, kind: 'shout', fs: 25, tail: [670, 238] }
          ],
          sfx: [{ t: '咕嚕咕嚕', x: 360, y: 300, fs: 40, rot: -6 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：抄書學徒狄翁叉腰解釋',
          actors: [{ c: 'v2e3_dion', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '我是抄書學徒\n狄翁。各地的書\n都收在這裡！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '圖書館的抄書學徒：狄翁（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'wood' }, shot: '特寫：一格一格塞滿卷軸的書櫃',
          back: [{ k: 'v2e3_cubby', x: 30, y: 530, cols: 4, rows: 5 }],
          caption: [
            { t: '亞歷山卓圖書館', en: 'LIBRARY OF ALEXANDRIA', x: 0, y: 16, w: 250 },
            { t: '書寫在莎草紙上，捲成一捲一捲。學者估計可能有幾十萬卷，說法差很多。', x: 0, y: 92, w: 300, dark: false }
          ],
          bubbles: [
            { t: '這麼多書，\n誰讀得完？', x: 260, y: 250, w: 190, fs: 24 },
            { t: '館長最會讀！\n他還在量地球呢。', x: 230, y: 400, w: 220, fs: 23 }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e3_court', shot: '滿版：夏至中午的院子，埃拉托斯特尼指著竿子斜斜的影子',
          actors: [
            { c: 'v2e3_era', x: 250, y: 690, s: 1.1, pose: 'point', expr: 'calm', look: .8 },
            { c: 'v2e3_dion', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'think', expr: 'think', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '夏至的中午，亞歷山卓', x: 16, y: 16 },
            { t: '圖書館長埃拉托斯特尼聽說：南方的賽伊尼（今天的亞斯文），這一天中午，太陽會照到井底。', x: 16, y: 74, w: 400, dark: false }
          ],
          bubbles: [
            { t: '賽伊尼的井沒有影子，\n這裡的竿子卻有。', x: 40, y: 300, w: 300, fs: 24, tail: [256, 430] },
            { t: '同一個太陽，\n影子為什麼\n不一樣？', x: 14, y: 640, w: 210, fs: 23, tail: [140, 790] },
            { t: '影子不一樣，\n是因為……', x: 270, y: 680, w: 200, fs: 24, tail: [440, 772] },
            { t: '地面是\n彎的！', x: 560, y: 680, w: 180, fs: 25, tail: [650, 790] }
          ],
          tag: { t: '埃拉托斯特尼的話：改編，根據後人記下的方法', left: 10, top: 260 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v2e3_diagram', shot: '細長圖解：平行的陽光、兩根竿子和地心的角度',
          caption: [
            { t: '太陽很遠，\n照下來的光幾乎\n是平行的。', x: 0, y: 14, w: 250 },
            { t: '（角度故意畫大了）', x: 0, y: 980, w: 230, dark: false }
          ],
          bubbles: [{ t: '兩根竿子的角度差，\n就是兩座城在地球上\n隔開的角度！', x: 10, y: 680, w: 324, fs: 22 }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：用影子量地球的三個步驟',
          caption: [{ t: '用影子量地球，三步驟', x: 0, y: 16 }],
          cards: [
            { icon: 'v2e3_well', y: 80, t: '賽伊尼：夏至中午，\n太陽在正上方，\n陽光照得到井底。' },
            { icon: 'v2e3_shadow', y: 344, t: '亞歷山卓：同一時間，\n影子斜了大約 7.2 度，\n是一整圈的 1/50。' },
            { icon: 'road', y: 610, t: '兩城相距約 5000 斯塔德，\n乘上 50，地球一圈\n大約 25 萬斯塔德。' }
          ],
          bubbles: [{ t: '換成公里，\n跟今天量的很接近！', x: 24, y: 896, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v2e3_hall', shot: '矮寬格：圖書館裡，埃拉托斯特尼對兄妹說話',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v2e3_dion', x: 300, y: 392, s: .9, pose: 'stand', expr: 'calm', look: .8 },
            { c: 'v2e3_era', x: 560, y: 394, s: 1, pose: 'raise', expr: 'happy', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '不用走完一整圈，\n用影子和算數就量得出來。', x: 40, y: 14, w: 440, fs: 24, tail: [528, 150] }
          ],
          tag: { t: '埃拉托斯特尼的話：改編，根據後人記下的方法', left: 10, top: 112 } },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .5, far: false, ground: 'sand', near: 'clay3', river: { y: .36, h: .14, tilt: 0, c: 'g5' } }, shot: '收尾大格：傍晚的港邊，狄翁送一根竿子',
          back: [{ k: 'car', x: 680, y: 600, s: .8 }],
          props: [{ k: 'v2e3_stick', x: 150, y: 450, H: 150, rot: -8 }],
          actors: [
            { c: 'v2e3_dion', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '竿子送你！\n回去也量量看！', x: 14, y: 176, w: 210, fs: 22, tail: [110, 300] },
            { t: '科展題目\n有了！', x: 246, y: 186, w: 170, fs: 23, tail: [284, 326] },
            { t: '夏至中午，\n一起來量影子！', x: 430, y: 200, w: 196, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n咸陽！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：一樣的字，一樣的尺', x: 250, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '亞歷山大和希臘化時代', t: '亞歷山大大帝（西元前 356～323 年）打下波斯帝國，一路打到印度河邊。他死後帝國分裂，但希臘的語言和文化留在很多地方，這段時間叫「希臘化時代」。' },
      { h: '亞歷山卓和大圖書館', t: '亞歷山卓是西元前 331 年建的城，在今天埃及的海邊。托勒密家族的國王在這裡蓋了大圖書館，收集各地的書，學者估計可能有幾十萬卷。圖書館後來在幾百年裡慢慢損壞，不是一場大火一次燒光。' },
      { h: '埃拉托斯特尼', t: '大約西元前 276 年出生，大約西元前 240 年當上亞歷山卓圖書館的館長，什麼學問都研究。' },
      { h: '用影子量地球', t: '夏至中午，賽伊尼（今天的亞斯文）的陽光照得到井底；同一時間亞歷山卓的竿子影子斜了大約 7.2 度，是一圈的 1/50。兩城相距約 5000 斯塔德，乘 50 就是地球一圈：大約 25 萬斯塔德，跟今天量的很接近。' },
      { h: '地球是圓的', t: '大約西元前 500 年，很多希臘人已經相信地球是圓的。亞里斯多德還舉出證據：月食的時候，地球照在月亮上的影子是圓的。' }
    ],
    map: {
      bounds: { lon: [26, 36], lat: [23, 32.5] },
      cap: '紅點是亞歷山卓。紅色虛線連到南邊的賽伊尼（今天的亞斯文），大約 5000 斯塔德。第 1 冊第 2 話的吉薩也在尼羅河邊。（河道、海岸是今天的樣子，簡化畫法。）',
      alt: '埃及地圖：亞歷山卓（紅點）在北邊地中海岸，尼羅河往南，紅色虛線連到南方的賽伊尼（今亞斯文），中間經過吉薩',
      rivers: ['nile', 'nileRosetta', 'nileDamietta'],
      routes: [{ pts: [[31.2, 29.92], [24.09, 32.9]] }],
      labels: [
        { t: '地中海', lat: 32.0, lon: 27.6, size: 24, f: 'cream' },
        { t: '紅海', lat: 26.6, lon: 35.0, size: 22, f: 'cream' },
        { t: '約 5000 斯塔德', lat: 27.6, lon: 28.6, size: 20, f: 'red' },
        { t: '尼羅河', lat: 26.0, lon: 33.4, size: 20, f: 'g7' }
      ],
      cities: [
        { n: '亞歷山卓', lat: 31.2, lon: 29.92, main: 1, side: 'r' },
        { n: '吉薩', lat: 29.98, lon: 31.13, side: 'r' },
        { n: '賽伊尼（今亞斯文）', lat: 24.09, lon: 32.9, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：吉薩的金字塔到埃拉托斯特尼量地球，隔了兩千三百多年。',
      items: [
        { y: -2560, when: '約西元前 2560 年', t: '吉薩的大金字塔\n（第 1 冊第 2 話）', side: 'u', w: 200 },
        { y: -331, when: '西元前 331 年', t: '亞歷山大大帝\n建亞歷山卓', side: 'd', w: 180 },
        { y: -240, when: '約西元前 240 年', t: '埃拉托斯特尼\n用影子量地球', side: 'u', main: 1, w: 190 },
        { y: 2026, when: '今天', t: '你也能在夏至\n中午量影子', side: 'd', w: 180 }
      ]
    },
    sources: [
      '美國物理學會 APS News〈This Month in Physics History: June, ca. 240 B.C.〉（埃拉托斯特尼約前 276 年生、約前 240 年當館長；夏至中午賽伊尼井底有陽光、亞歷山卓影子約 7.2 度＝1/50 圈；相距約 5000 斯塔德、算出約 25 萬斯塔德；斯塔德長度有爭議；約前 500 年多數希臘人相信地球是圓的、亞里斯多德舉月食的影子）',
      'History.com〈What Destroyed the Library of Alexandria?〉（亞歷山大西元前 331 年建亞歷山卓；托勒密二世時建圖書館；可能約 40 萬卷；幾百年間慢慢損壞，不是一次燒光）、〈Alexander the Great〉（西元前 356～323 年；打敗波斯、到達印度河；死後是希臘化時代）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '埃拉托斯特尼是用什麼來量地球有多大？', opts: ['竿子的影子', '很長的繩子', '一整年的船', '高高的燈塔'], a: 0, why: '他比較兩座城在同一時間的影子：賽伊尼沒有影子，亞歷山卓的竿子影子斜了大約 7.2 度。' },
      { id: 'q2', d: 1, type: 'tf', q: '亞歷山卓在今天埃及的海邊，是亞歷山大大帝建的城。', a: true, why: '對！亞歷山大大帝在西元前 331 年建了這座城，就在地中海邊。' },
      { id: 'q3', d: 2, type: 'mc', q: '夏至的中午，賽伊尼（今天的亞斯文）發生了什麼事？', opts: ['太陽照得到井底', '整天都是黑夜', '竿子的影子最長', '下了一場大雪'], a: 0, why: '那一天中午，賽伊尼的太陽差不多在正上方，陽光直直照進井底，幾乎沒有影子。' },
      { id: 'q4', d: 2, type: 'order', q: '照埃拉托斯特尼的想法，把步驟排好。', items: ['知道賽伊尼夏至中午沒有影子', '量出亞歷山卓的影子斜了約 7.2 度', '算出 7.2 度是一整圈的 1/50', '把兩城的距離乘上 50'], why: '先知道一個地方沒有影子，再量另一個地方影子斜多少；7.2 度是一圈的 1/50，所以兩城距離乘 50，就是地球一圈。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「要知道地球多大，一定要有人真的繞地球走一圈才行。」根據這一話，哪個說法最正確？', opts: ['不對，量影子的角度和兩城距離，就能算出來', '對，埃拉托斯特尼真的坐船繞了地球一圈', '對，古時候的人量不出來，只能用猜的', '不對，只要爬上最高的燈塔看一眼，就知道多大了'], a: 0, why: '埃拉托斯特尼沒有走完一圈，他用影子的角度（一圈的 1/50）乘上兩城的距離，就算出地球一圈的大小。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
