/* 世界史漫畫 第 4 冊 大航海與文藝復興・第 5 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：文藝復興。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, place, cap } = K;
    const INK = '#6B4A32';
    const bird = (x, y, k, f) => `<g transform="translate(${x} ${y}) scale(${k})">` + path('M-40 0 Q-20 -22 0 -4 Q20 -22 40 0 Q20 -12 0 4 Q-20 -12 -40 0Z', f || C.ink) + `</g>`;
    root.ComicArt.extend({
      scenes: {
        // 佛羅倫斯：大圓頂、鐘樓、紅屋頂、河與橋
        v4e5_florence(w, h, o) {
          o = o || {};
          let s = rect(0, 0, w, h, o.sky ? K.col(o.sky) : C.sky) + circ(w * .84, h * .1, 200, 'url(#cm-sun)') + circ(w * .84, h * .1, 44, '#FFF8DC');
          s += path(`M0 ${h * .36} Q${w * .3} ${h * .26} ${w * .6} ${h * .33} T${w} ${h * .3} L${w} ${h * .5} L0 ${h * .5}Z`, C.g3);
          for (let i = 0; i < 14; i++) s += K.prop({ k: 'tree', kind: 'cypress', x: 30 + i * 60, y: h * .36 + (i % 3) * 6, H: 60 });
          s += K.prop({ k: 'dome', x: w * .42, y: h * .5, W: 260, H: 290, f: 'cream', domeC: 'red' }) + K.prop({ k: 'tower', x: w * .62, y: h * .5, W: 46, H: 260, f: 'cream' }) + K.prop({ k: 'tower', x: w * .2, y: h * .5, W: 40, H: 220, f: 'brick3' });
          const rnd = K.seeded(31);
          for (let i = 0; i < 16; i++) { const x = (i * 53) % w, y = h * .5 + (i % 3) * 18, W = 70 + rnd() * 40; s += rect(x - W / 2, y - 50, W, 70, i % 2 ? C.cream : C.brick3) + poly(`${x - W / 2 - 6},${y - 50} ${x},${y - 72} ${x + W / 2 + 6},${y - 50}`, C.red) + rect(x - 8, y - 30, 16, 20, C.ink, 2); }
          s += rect(0, h * .58, w, h * .08, C.g5) + rect(w * .1, h * .555, w * .3, 22, C.clay3);
          for (let i = 0; i < 4; i++) s += path(`M${w * .1 + i * w * .075 + 6} ${h * .58 + 6} Q${w * .1 + i * w * .075 + w * .0375} ${h * .555 + 2} ${w * .1 + (i + 1) * w * .075 - 6} ${h * .58 + 6}Z`, C.g5);
          s += rect(0, h * .66, w, h * .34, C.paper3);
          return { bg: s };
        },
        // 透視法：地磚往消失點集中、地平線、紅點
        v4e5_persp(w, h, o) {
          const vx = w * .5, vy = h * (o && o.vy || .36);
          let s = rect(0, 0, w, vy, C.cream) + rect(0, vy, w, h - vy, C.paper3);
          for (let i = -8; i <= 8; i++) s += poly(`${vx},${vy} ${vx + i * w * .16 - 3},${h} ${vx + i * w * .16 + 3},${h}`, C.red, 'opacity=".55"');
          for (let j = 1; j < 9; j++) { const y = vy + (h - vy) * Math.pow(j / 9, 1.8); s += rect(0, y, w, 2 + j * .4, C.wood, 0, 'opacity=".5"'); }
          [[.2, 1], [.38, .62], [.47, .38]].forEach(([t, k]) => { s += both(rect(w * t - 40 * k, vy + (h - vy) * .5 * k - 120 * k, 80 * k, 120 * k, C.g5)); s += both(rect(w * (1 - t) - 40 * k, vy + (h - vy) * .5 * k - 120 * k, 80 * k, 120 * k, C.g5)); });
          s += rect(0, vy - 2, w, 4, C.ink) + circ(vx, vy, 10, C.red) + txt(vx, vy - 18, '消失點', 20, C.red);
          return { bg: s };
        },
        // 筆記本的一頁：鳥的翅膀草圖、水流、反過來的字
        v4e5_page(w, h) {
          let s = rect(0, 0, w, h, '#E9DDBE');
          for (let y = 60; y < h - 40; y += 26) if (y < h * .3 || y > h * .62) { const L = (y * 7) % 90; s += rect(w * .1 + L * .3, y, w * .8 - L, 3, INK, 0, 'opacity=".55"'); }
          s += bird(w * .32, h * .4, 2.4, INK) + bird(w * .72, h * .36, 1.4, INK) + bird(w * .6, h * .5, 1, INK);
          s += path(`M${w * .1} ${h * .56} Q${w * .3} ${h * .5} ${w * .45} ${h * .58}`, 'none', `stroke="${INK}" stroke-width="3"`);
          for (let i = 0; i < 4; i++) s += circ(w * .78 - i * 8, h * .56 + i * 6, 26 - i * 6, 'none', `stroke="${INK}" stroke-width="2.5"`);
          s += txt(-w * .5, h * .27, 'uccello', 30, INK, { tr: 'scale(-1 1)', w: 500 });
          return { bg: s };
        }
      },
      props: {
        v4e5_bird: x => place(x, bird(0, 0, 1, K.col(x.f) || C.ink)),
        // 畫架＋畫到一半的人像
        v4e5_easel: x => place(x, K.groundShadow(0, 3, 60, 6) + cap(-40, 0, -10, -230, 8, C.wood) + cap(40, 0, 10, -230, 8, C.wood) + cap(0, -10, 0, -200, 6, C.wood) + rect(-60, -200, 120, 150, C.cream, 3) + ell(0, -140, 26, 32, C.skin) + path('M-30 -110 Q0 -90 30 -110 L36 -52 L-36 -52Z', C.g7) + rect(-66, -52, 132, 8, C.wood)),
        // 顏料碗
        v4e5_bowls: x => place(x, [[-50, C.blue], [0, C.red], [50, C.gold]].map(([dx, f]) => ell(dx, -8, 22, 10, C.paper3) + ell(dx, -12, 18, 6, f)).join(''))
      },
      holds: {
        v4e5_sketchH: () => rect(-26, -40, 52, 60, C.cream, 2) + rect(-12, -30, 24, 24, 'none', `stroke="${C.ink}" stroke-width="2"`) + rect(-8, -20, 4, 4, C.ink) + rect(4, -20, 4, 4, C.ink) + rect(-6, -10, 12, 2, C.ink),
        v4e5_bookH: () => rect(-20, -30, 40, 40, '#E9DDBE', 2) + rect(-16, -24, 30, 2, INK) + rect(-16, -16, 30, 2, INK) + bird(0, -2, .4, INK)
      },
      icons: {
        v4e5_bookI() { return rect(0, 0, 120, 90, C.g3) + path('M60 76 Q40 68 18 74 L18 22 Q40 16 60 24Z', C.cream) + path('M60 76 Q80 68 102 74 L102 22 Q80 16 60 24Z', C.paper2) + rect(24, 34, 28, 3, 'rgba(21,23,20,.3)') + rect(24, 46, 28, 3, 'rgba(21,23,20,.3)') + rect(76, 30, 6, 34, C.cream) + rect(72, 28, 14, 5, C.paper3) + rect(72, 62, 14, 5, C.paper3); },
        v4e5_perspI() { let s = rect(0, 0, 120, 90, C.cream) + rect(0, 40, 120, 50, C.paper3); for (let i = -4; i <= 4; i++) s += poly(`60,40 ${60 + i * 26 - 1.5},90 ${60 + i * 26 + 1.5},90`, C.red, 'opacity=".6"'); return s + rect(0, 39, 120, 2, C.ink) + circ(60, 40, 5, C.red); },
        v4e5_lookI() { return rect(0, 0, 120, 90, C.g7) + path('M20 44 Q60 14 100 44 Q60 74 20 44Z', C.cream) + circ(60, 44, 14, C.g5) + circ(60, 44, 7, C.ink) + cap(84, 80, 108, 56, 6, C.gold); }
      },
      cast: {
        v4e5_tommaso: { name: '托馬索（虛構）', skin: 'skin', top: 'gold', bottom: 'red', leg: 'red', shoe: 'wood', hair: 'curly', hairC: '#6B4A32', r: 22, k: .95 },
        v4e5_leo: { name: '達文西', real: 1, skin: 'skin', robe: '#B5655B', trim: 'wood', hair: 'long', hairC: '#9A958A', hat: 'beret', hatC: 'g9', beard: 2, r: 19, k: 1.22 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v4e5 = {
    id: 'v4e5', vol: '第 4 冊 大航海與文藝復興', volNo: 4, ep: 5, title: '達文西的筆記本', next: '福爾摩沙的大員',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說要畫你——這次他會先仔細看。',
    note: '阿凱、小禾、托馬索是虛構的角色；達文西的話是依據他筆記裡重視觀察和實驗的想法改編，不是他的原話。達文西的樣子、畫坊、佛羅倫斯街景和筆記頁都是想像圖（筆記頁上的字和圖只是樣子）。達文西為什麼用鏡像字寫筆記，有人說是左撇子比較順手，有人說是不想給別人看，學者還沒有定論。',
    curriculum: '國中社會會再學到：文藝復興',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick3', near: 'paper3' },
      back: [
        { k: 'dome', x: 150, y: 900, W: 220, H: 250, f: 'cream', domeC: 'red' },
        { k: 'v4e5_easel', x: 660, y: 980, s: 1.2 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'mrt', sceneOpt: { seat: .62, poles: [.5] }, shot: '中景：捷運車廂裡，阿凱拿著畫紙畫小禾，畫得四四方方',
          actors: [
            { c: 'kai', x: 230, y: 250, s: 1, pose: 'sit', expr: 'mad', hold: 'v4e5_sketchH', look: .5, noShadow: true },
            { c: 'he', x: 600, y: 250, s: 1.05, pose: 'sit', expr: 'shout', hold: 'notebook', flip: 1, look: .6, noShadow: true }
          ],
          bubbles: [
            { t: '是你一直動啦！\n美勞作業明天要交！', x: 16, y: 12, w: 270, tail: [222, 104] },
            { t: '我的頭\n哪有這麼方！', x: 470, y: 12, w: 200, tail: [596, 104] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sky: 'paper2', sun: false, hz: .5, far: false, ground: 'paper3', near: 'g3' }, shot: '大格：捷運站出口，阿凱衝向搖搖車',
          back: [
            { k: 'house', x: 330, y: 343, W: 300, H: 200, roof: 'flat', roofC: 'g9', f: 'paper3' },
            { k: 'sign', t: '捷運 出口 2', x: 330, y: 200, W: 200, fs: 26, f: 'gold' },
            { k: 'car', x: 118, y: 628, s: .78 }
          ],
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'yell', flip: 1, look: .7, sweat: 1 }
          ],
          bubbles: [
            { t: '我去找會畫畫的\n人教我！', x: 18, y: 320, w: 220, fs: 24, tail: [206, 430] },
            { t: '陳以凱！！\n你的悠遊卡！', x: 300, y: 300, w: 210, kind: 'shout', tail: [420, 400], fs: 25 }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '1505', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1505',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '又倒轉了！\n西元 1505！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e5_florence', shot: '滿版遠景：紅色大圓頂、鐘樓、紅屋頂和河上的橋',
          back: [{ k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'pointUp', expr: 'shock', look: -.4, sweat: 1 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 520 年前，佛羅倫斯（今天的義大利）', en: 'FLORENCE · c.1505', x: 0, y: 18 },
            { t: '城裡到處是畫家和雕刻家的工作坊。很多人重新研究古希臘、古羅馬的書和藝術。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：佛羅倫斯。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '那個紅色圓頂\n好大！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '大家都在\n畫畫耶！', x: 570, y: 700, w: 196, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .7, window: [.7, .1, .2, .3], winC: 'g3' }, shot: '中景：畫坊裡，阿凱湊近顏料碗，一個噴嚏把藍色顏料噴得滿天飛',
          back: [{ k: 'v4e5_easel', x: 470, y: 330, s: .9 }, { k: 'table', x: 300, y: 400, W: 180 }, { k: 'v4e5_bowls', x: 300, y: 324, s: 1 }],
          props: [{ k: 'puff', x: 330, y: 230, r: 34, f: '#8FB0C8' }, { k: 'puff', x: 380, y: 200, r: 22, f: '#8FB0C8' }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 210, y: 430, s: 1.05, pose: 'scared', expr: 'yell', look: .4, sweat: 1 },
            { c: 'v4e5_tommaso', x: 640, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '哈……\n哈啾！', x: 110, y: 40, w: 170, tail: [200, 236] },
            { t: '那是我磨了一整天的\n藍色顏料！！', x: 390, y: 26, w: 330, kind: 'shout', fs: 25, tail: [630, 238] }
          ],
          sfx: [{ t: '噗！', x: 420, y: 140, fs: 50, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：學徒托馬索叉腰說老師的規矩',
          actors: [{ c: 'v4e5_tommaso', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '我們老師說：\n畫之前，\n要先會「看」！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '畫坊的學徒：托馬索（虛構）', left: 8 } },
        { scene: 'v4e5_persp', shot: '知識格：透視法，地磚的線都集中到消失點',
          actors: [
            { c: 'kai', x: 110, y: 640, s: 1.05, pose: 'think', expr: 'think', look: .3, bust: 1 },
            { c: 'he', x: 350, y: 650, s: 1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .5, bust: 1 }
          ],
          caption: [{ t: '透視法：遠的畫小，\n平行的線會集中到一個點', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '線都跑到\n同一個點！', x: 10, y: 352, w: 190, fs: 22, tail: [110, 430] },
            { t: '遠的東西\n要畫小！', x: 254, y: 352, w: 190, fs: 22, tail: [340, 450] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sun: [.84, .1], hz: .5, far: 'g3', ground: 'g5', near: 'g3' }, shot: '滿版：城外山坡上，達文西坐在石頭上看鳥、畫筆記',
          back: [
            { k: 'tree', kind: 'cypress', x: 80, y: 540, H: 220 },
            { k: 'tree', kind: 'cypress', x: 720, y: 530, H: 200 },
            { k: 'v4e5_bird', x: 300, y: 260, s: 1.2 },
            { k: 'v4e5_bird', x: 420, y: 320, s: .8 },
            { k: 'v4e5_bird', x: 560, y: 250, s: 1 },
            { k: 'bricks', x: 520, y: 650, n: 2, m: 3, f: 'basalt3' }
          ],
          actors: [
            { c: 'v4e5_leo', x: 510, y: 640, s: .95, pose: 'sit', expr: 'think', hold: 'v4e5_bookH', look: -.6, flip: 1, noShadow: true },
            { c: 'v4e5_tommaso', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '1505 年前後，達文西在佛羅倫斯，\n寫了一本研究鳥怎麼飛的筆記。', x: 16, y: 16, w: 480 },
            { t: '同一段時間，他也在畫《蒙娜麗莎》。', x: 16, y: 128, w: 420, dark: false }
          ],
          tag: { t: '想像圖：達文西的樣子', left: 16, top: 196 },
          bubbles: [
            { t: '老師看鳥，\n可以看一整天！', x: 14, y: 636, w: 236, fs: 23, tail: [140, 790] },
            { t: '他畫了又擦、\n擦了又畫……', x: 270, y: 660, w: 236, fs: 23, tail: [440, 772] },
            { t: '他的字\n是反的耶！', x: 560, y: 616, w: 196, fs: 24, tail: [646, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v4e5_page', shot: '細長大格：達文西筆記的一頁，鳥的翅膀、水流和反過來的字',
          actors: [{ c: 'kai', x: 120, y: 1100, s: 1.7, pose: 'think', expr: 'awe', look: .4, bust: 1 }],
          caption: [{ t: '筆記上的字從右往左寫，\n要拿鏡子照才好讀，\n叫做「鏡像字」。', x: 0, y: 14, w: 330 }],
          bubbles: [{ t: '原來他\n是這樣「看」的！', x: 110, y: 690, w: 226, fs: 22, tail: [150, 780] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：文藝復興、透視法、觀察和實驗',
          caption: [{ t: '文藝復興，在「復興」什麼？', x: 0, y: 16 }],
          cards: [
            { icon: 'v4e5_bookI', y: 80, t: '很多人重新研究古希臘、古羅馬\n的書和藝術，相信人可以\n靠學習變得更好。' },
            { icon: 'v4e5_perspI', y: 344, t: '大約 1420 年，布魯內萊斯基\n在佛羅倫斯用鏡子做實驗，\n讓畫看起來有遠有近。' },
            { icon: 'v4e5_lookI', y: 610, t: '達文西：仔細看、畫草圖、\n做實驗。鳥、水、人體、機器，\n他什麼都想弄懂。' }
          ],
          bubbles: [{ t: '原來畫不像，\n是因為沒仔細看！', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .8, window: [.42, .1, .16, .4], winC: 'g3' }, shot: '矮寬格：畫坊裡，達文西拿著筆記本',
          back: [{ k: 'v4e5_easel', x: 720, y: 320, s: .8 }],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v4e5_tommaso', x: 300, y: 392, s: .9, pose: 'bow', expr: 'calm' },
            { c: 'v4e5_leo', x: 560, y: 394, s: 1, pose: 'raise', expr: 'calm', hold: 'v4e5_bookH', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '先好好看，再畫下來。\n看不懂的，就去做實驗。', x: 40, y: 14, w: 420, fs: 24, tail: [528, 150] }
          ],
          tag: { t: '達文西的話：改編自他筆記裡的想法', left: 10, top: 112 } },
        { scene: 'v4e5_florence', sceneOpt: { sky: '#E8CFA0' }, shot: '收尾大格：傍晚的河邊，準備出發',
          back: [{ k: 'car', x: 680, y: 600, s: .8 }],
          actors: [
            { c: 'v4e5_tommaso', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'hold', expr: 'grin', hold: 'v4e5_sketchH', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '下次來，\n教你磨顏料！', x: 14, y: 170, w: 196, fs: 22, tail: [110, 300] },
            { t: '這次我會\n好好看你的臉！', x: 222, y: 160, w: 200, fs: 22, tail: [284, 326] },
            { t: '我坐著不動，\n你慢慢畫。', x: 434, y: 200, w: 180, fs: 21, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n福爾摩沙！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：福爾摩沙的大員', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '文藝復興', t: '大約 1300 年代到 1600 年代，義大利的很多人重新研究古希臘、古羅馬的書和藝術，相信人可以靠學習變得更好，這叫「人文主義」。佛羅倫斯的麥第奇家族也出錢支持學者和藝術家。' },
      { h: '透視法', t: '遠的東西畫小，平行的線會集中到一個「消失點」。大約 1415～1420 年，布魯內萊斯基在佛羅倫斯，用畫和鏡子對照真正的建築做實驗。' },
      { h: '達文西的筆記本', t: '達文西（1452～1519 年）留下很多筆記，研究鳥、水、人體和機器。1505 年前後，他寫了一本研究鳥怎麼飛的筆記，同一段時間也在畫《蒙娜麗莎》。他的筆記多半用從右往左寫的「鏡像字」。' },
      { h: '仔細看，再動手', t: '觀察、畫草圖、做實驗，是達文西弄懂事情的方法。畫不像，常常是因為沒有仔細看。' }
    ],
    map: {
      bounds: { lon: [5, 19], lat: [38, 47] },
      cap: '紅點是佛羅倫斯，旁邊的河是阿諾河。河道、海岸是今天的樣子，簡化畫法。',
      alt: '義大利地圖：佛羅倫斯在中部的阿諾河邊（紅點），北邊是米蘭和威尼斯，南邊是羅馬',
      rivers: ['tiber', { pts: [[43.8, 11.7], [43.77, 11.25], [43.72, 10.9], [43.68, 10.4], [43.68, 10.28]], w: 5 }],
      labels: [
        { t: '亞得里亞海', lat: 43.2, lon: 15.2, size: 18, f: 'cream', rot: 38 },
        { t: '地中海', lat: 39.4, lon: 12.6, size: 22, f: 'cream' },
        { t: '今天的義大利', lat: 42.2, lon: 13.6, size: 18, f: 'wood' }
      ],
      cities: [
        { n: '佛羅倫斯', lat: 43.77, lon: 11.25, main: 1, side: 'r' },
        { n: '米蘭', lat: 45.46, lon: 9.19, side: 'l' },
        { n: '威尼斯', lat: 45.44, lon: 12.33, side: 'r' },
        { n: '羅馬', lat: 41.9, lon: 12.5, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：達文西出生的時候，透視法已經發明三十多年了。',
      items: [
        { y: 1420, when: '約西元 1420 年', t: '布魯內萊斯基\n做透視實驗', side: 'u', w: 170 },
        { y: 1452, when: '西元 1452 年', t: '達文西出生', side: 'd', w: 160 },
        { y: 1505, when: '約西元 1505 年', t: '鳥怎麼飛的\n筆記', side: 'u', main: 1, w: 170 },
        { y: 1519, when: '西元 1519 年', t: '達文西過世', side: 'd', w: 160 }
      ]
    },
    sources: [
      '英國維多利亞與艾伯特博物館（V&A）〈Leonardo da Vinci\'s notebooks〉：達文西 1452～1519 年；筆記用從右往左的鏡像字（原因可能是隱私或左撇子順手）；研究測量、水、比例、解剖、馬；Codex Forster I 有一部分寫於 1505 年的佛羅倫斯',
      'Fondazione Bracco 新聞稿（史密森尼國家航太博物館 2013 年展出《鳥類飛行手稿》）：手稿寫於 1505～1506 年、18 張兩面寫、研究鳥的飛行、用鏡像字；同一時期他在畫《蒙娜麗莎》',
      '布朗大學數學系〈Brunelleschi\'s peepshow experiment〉：布魯內萊斯基用畫和鏡子對照佛羅倫斯洗禮堂，觀看孔在消失點；馬薩喬把透視法用在畫上',
      'CUNY〈Humanism in Renaissance Italy〉（John M. Hunt）：人文主義以古希臘、拉丁文學為基礎，14 世紀中在義大利發展、15 世紀末傳遍歐洲；麥第奇家族支持學者與藝術家'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '達文西的筆記，字的方向有什麼特別？', opts: ['從右往左寫，像鏡子裡的字', '全部用畫的，一個字也沒寫', '只寫數字，不寫任何句子', '寫在泥板上，一壓就成形'], a: 0, why: '達文西的筆記多半用「鏡像字」：從右往左寫，要拿鏡子照才好讀。' },
      { id: 'q2', d: 1, type: 'tf', q: '用透視法畫畫，遠的東西要畫得比較小。', a: true, why: '對！遠的畫小，平行的線會集中到一個「消失點」，畫就看起來有遠有近。' },
      { id: 'q3', d: 2, type: 'mc', q: '文藝復興的時候，很多人重新去研究哪裡的書和藝術？', opts: ['古希臘和古羅馬', '古埃及和兩河流域', '印加和泰諾', '明朝和蒙古'], a: 0, why: '「復興」的是古希臘、古羅馬的學問和藝術；人們相信人可以靠學習變得更好。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['布魯內萊斯基做透視實驗', '達文西出生', '達文西寫研究鳥怎麼飛的筆記', '達文西過世'], why: '透視實驗大約在 1420 年；達文西 1452 年出生；1505 年前後寫鳥的飛行筆記；1519 年過世。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「達文西很厲害，是因為他天生就會畫，根本不用練習。」根據這一話，哪個說法最正確？', opts: ['不對，他一直觀察、畫草圖、做實驗', '對，他畫畫從來不用打草稿', '對，他都是憑想像畫，不用看', '不對，他其實只會寫字，畫畫一點也不行'], a: 0, why: '達文西看鳥可以看很久，畫了很多草圖，看不懂就做實驗。仔細觀察和一直練習，才是他厲害的原因。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
