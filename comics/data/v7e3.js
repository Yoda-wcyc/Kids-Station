/* 世界史漫畫 第 7 冊 現代世界・第 3 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：冷戰時期的太空競賽。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow, seeded } = K;
    const stars = (w, h, n, seed) => { const r = seeded(seed || 21); let s = ''; for (let i = 0; i < n; i++) s += circ(r() * w, r() * h, .8 + r() * 1.8, C.cream, 'opacity=".85"'); return s; };
    const consoleRow = (x, y, W, n) => { let s = both(rect(x, y, W, 70, C.paper3, 4)); for (let i = 0; i < n; i++) { const cx = x + 16 + i * (W - 32) / n; s += rect(cx, y - 56, (W - 32) / n - 14, 54, C.basalt2, 4) + rect(cx + 6, y - 50, (W - 32) / n - 26, 40, C.g6, 2) + rect(cx + 10, y - 40, 30, 3, C.g2) + rect(cx + 10, y - 30, 18, 3, C.gold); } return s; };
    root.ComicArt.extend({
      scenes: {
        // 月球表面：黑色天空、星星、地球、灰色地面和坑洞
        v7e3_moon(w, h) {
          let s = rect(0, 0, w, h, '#0E1311') + stars(w, h * .55, 60, 5);
          s += circ(w * .8, h * .14, 62, C.blue) + path(`M${w * .8 - 40} ${h * .14 - 20} q20 -24 44 -10 q-6 22 -30 30 q-18 -4 -14 -20Z`, C.g5) + path(`M${w * .8 + 8} ${h * .14 + 14} q24 -6 34 10 q-12 20 -30 18Z`, C.g5) + circ(w * .8 - 18, h * .14 - 26, 22, 'rgba(255,255,255,.25)');
          s += path(`M0 ${h * .56} Q${w * .3} ${h * .52} ${w * .6} ${h * .55} T${w} ${h * .53} L${w} ${h} L0 ${h}Z`, '#A9AAA2') + path(`M0 ${h * .7} Q${w * .5} ${h * .64} ${w} ${h * .72} L${w} ${h} L0 ${h}Z`, '#BDBDB4');
          [[.15, .62, 50], [.48, .6, 30], [.8, .66, 70], [.3, .82, 60], [.7, .9, 40]].forEach(([x, y, r]) => { s += ell(w * x, h * y, r, r * .3, '#8E8F87') + ell(w * x + 4, h * y + 3, r * .8, r * .22, '#9D9E96'); });
          return { bg: s };
        },
        // 任務控制中心：一排排控制台，牆上大螢幕
        v7e3_control(w, h) {
          let s = rect(0, 0, w, h, '#3B4A42') + rect(w * .08, h * .06, w * .84, h * .28, C.basalt2, 6) + rect(w * .1, h * .08, w * .8, h * .24, '#20302A', 4);
          s += path(`M${w * .14} ${h * .26} Q${w * .3} ${h * .1} ${w * .5} ${h * .2} T${w * .86} ${h * .14}`, 'none', `stroke="${C.gold}" stroke-width="4" stroke-dasharray="10 8"`) + circ(w * .86, h * .14, 10, C.cream) + circ(w * .14, h * .26, 12, C.blue);
          s += rect(0, h * .62, w, h * .38, '#2C3832');
          s += consoleRow(w * .04, h * .46, w * .92, 5) + consoleRow(-20, h * .74, w + 40, 6);
          return { bg: s };
        }
      },
      props: {
        // 土星五號火箭（簡化）：白色箭身、黑色格紋；fire:1 底下噴火
        v7e3_saturn: x => {
          const H = x.H || 500, W = H * .1; let s = '';
          if (x.fire) s += path(`M${-W * .6} 0 Q${-W * .9} ${H * .14} 0 ${H * .3} Q${W * .9} ${H * .14} ${W * .6} 0Z`, C.red) + path(`M${-W * .35} 0 Q${-W * .4} ${H * .1} 0 ${H * .18} Q${W * .4} ${H * .1} ${W * .35} 0Z`, C.gold);
          s += both(rect(-W / 2, -H * .82, W, H * .82, C.cream)) + rect(-W / 2, -H * .82, W / 2, H * .06, C.ink) + rect(0, -H * .5, W / 2, H * .05, C.ink) + rect(-W / 2, -H * .2, W / 2, H * .06, C.ink) + rect(-W / 2, -H * .58, W, 4, C.ink) + rect(-W / 2, -H * .3, W, 4, C.ink);
          s += poly(`${-W * .36},${-H * .82} ${W * .36},${-H * .82} ${W * .22},${-H * .9} ${-W * .22},${-H * .9}`, C.paper3) + rect(-W * .22, -H * .94, W * .44, H * .04, C.cream) + rect(-2, -H, 4, H * .07, C.ink);
          s += poly(`${-W / 2},0 ${-W * .9},${H * .02} ${-W / 2},${-H * .08}`, C.ink) + poly(`${W / 2},0 ${W * .9},${H * .02} ${W / 2},${-H * .08}`, C.ink);
          return place(x, s);
        },
        // 登月小艇「老鷹號」（簡化）：金色底座＋四隻腳＋灰色艙
        v7e3_eagle: x => {
          let s = groundShadow(0, 2, 110, 10);
          [[-90, -4, -50, -70], [90, -4, 50, -70], [-40, -2, -24, -60], [40, -2, 24, -60]].forEach(([a, b, c, d]) => { s += K.cap(a, b, c, d, 6, C.basalt3) + ell(a, b, 14, 4, C.basalt3); });
          s += both(rect(-60, -110, 120, 54, C.gold, 4), 'cm-warm') + rect(-60, -92, 120, 4, '#A88B3A');
          s += both(poly('-50,-110 50,-110 64,-150 30,-186 -30,-186 -64,-150', '#B9BBB2')) + poly('-20,-170 0,-160 -6,-140 -26,-148', C.basalt2) + rect(-4, -200, 8, 16, C.basalt2);
          for (let i = 0; i < 5; i++) s += rect(54, -104 + i * 12, 30, 3, C.basalt3);
          return place(x, s);
        },
        // 望遠鏡（三腳架）
        v7e3_scope: x => place(x, K.cap(0, -70, -30, 0, 5, C.basalt3) + K.cap(0, -70, 30, 0, 5, C.basalt3) + K.cap(0, -70, 0, 0, 5, C.basalt3) + `<g transform="rotate(-32 0 -76)">` + both(rect(-44, -88, 96, 22, C.cream, 6)) + rect(48, -90, 10, 26, C.ink, 3) + `</g>`),
        v7e3_screenGlow: x => place(x, rect(-40, -30, 80, 30, C.g6, 3))
      },
      icons: {
        v7e3_sat() { return rect(0, 0, 120, 90, C.g9) + K.cap(60, 45, 16, 80, 2, C.cream) + K.cap(60, 45, 30, 86, 2, C.cream) + K.cap(60, 45, 100, 84, 2, C.cream) + K.cap(60, 45, 112, 74, 2, C.cream) + circ(60, 42, 18, C.paper3) + circ(54, 36, 6, 'rgba(255,255,255,.6)') + circ(14, 14, 2, C.cream) + circ(100, 20, 2, C.cream); },
        v7e3_rocket() { return rect(0, 0, 120, 90, C.blue) + path('M60 8 Q74 22 72 56 L48 56 Q46 22 60 8Z', C.cream) + circ(60, 30, 6, C.blue) + poly('48,48 36,64 48,60', C.red) + poly('72,48 84,64 72,60', C.red) + path('M52 58 Q60 84 68 58Z', C.gold); },
        v7e3_moonI() { return rect(0, 0, 120, 90, '#0E1311') + circ(60, 45, 30, '#BDBDB4') + circ(50, 36, 7, '#9D9E96') + circ(70, 54, 9, '#9D9E96') + circ(64, 30, 4, '#9D9E96') + circ(18, 16, 2, C.cream) + circ(102, 70, 2, C.cream); }
      },
      cast: {
        v7e3_ruth: { name: '露絲（虛構）', skin: 'skin', top: 'blue', skirt: 'cream', hair: 'long', hairC: 'wood', hairBack: 'ponytailBack', r: 22, k: .93 },
        v7e3_mom: { name: '露絲的媽媽（虛構）', skin: 'skin', top: 'cream', skirt: 'g9', hair: 'bun', hairC: 'wood', acc: ['glasses'], r: 19, k: 1.1 },
        v7e3_eng: { name: '工程師', skin: 'skinB', top: 'cream', bottom: 'g9', leg: 'g9', stripe: 'ink', hair: 'short', r: 19, k: 1.12 },
        v7e3_arm: { name: '阿姆斯壯', real: 1, skin: 'skin', top: 'cream', bottom: 'cream', leg: 'cream', shoe: 'paper3', hair: 'short', hat: 'space', r: 19, k: 1.12 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v7e3 = {
    id: 'v7e3', vol: '第 7 冊 現代世界', volNo: 7, ep: 3, title: '人類的一小步', next: '新竹的小晶片',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！你的數學，大概可以去任務控制中心幫忙了。',
    note: '阿凱、小禾、露絲、露絲的媽媽和控制中心的工程師是虛構的角色。阿姆斯壯的話改編自他踏上月球時說的話。兄妹跟著搖搖車上月球、戴太空頭盔，是漫畫的想像；火箭、登月小艇、控制中心和月球的畫面都是簡化的想像圖。漫畫裡的日期是美國時間：阿姆斯壯踩上月球，是臺灣時間 7 月 21 日上午。',
    curriculum: '國中社會會再學到：冷戰時期的太空競賽',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'basalt3', near: 'paper3' },
      back: [
        { k: 'v7e3_saturn', x: 680, y: 900, H: 420 },
        { k: 'v7e3_eagle', x: 140, y: 960, s: .9 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'night', sceneOpt: { moon: [.84, .24], ground: 'g9' }, shot: '中景：晚上的河濱公園，小禾架望遠鏡寫天文作業，阿凱說月亮上有兔子',
          back: [{ k: 'v7e3_scope', x: 610, y: 318 }],
          actors: [
            { c: 'kai', x: 230, y: 330, s: 1, pose: 'point', expr: 'grin', look: .4 },
            { c: 'he', x: 490, y: 332, s: 1.05, pose: 'hold', expr: 'mad', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '月亮上一定\n有兔子在搗麻糬！', x: 24, y: 16, w: 250, tail: [236, 140] },
            { t: '作業要寫：\n人真的上去過嗎？', x: 330, y: 20, w: 250, tail: [486, 158] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'night', sceneOpt: { moon: [.82, .1], ground: 'g9' }, shot: '中景：河濱自行車道路燈下的搖搖車，阿凱投下 10 元',
          back: [
            { k: 'lamp', x: 470, y: 560, H: 300, s: 1, dir: -1 },
            { k: 'car', x: 230, y: 600, s: .9 }
          ],
          actors: [
            { c: 'he', x: 100, y: 650, s: 1, pose: 'scared', expr: 'worry', look: .4 },
            { c: 'kai', x: 410, y: 640, s: 1.1, pose: 'offer', expr: 'grin', flip: 1, look: -.3 }
          ],
          bubbles: [
            { t: '搖搖車！\n帶我們去月球！', x: 256, y: 290, w: 244, kind: 'shout', fs: 24, tail: [404, 440] },
            { t: '這台車不是\n去月球的吧……', x: 14, y: 380, w: 220, fs: 23, tail: [100, 474] }
          ],
          sfx: [{ t: '叮！', x: 290, y: 450, fs: 40, rot: 8 }] },
        { scene: 'coin', sceneOpt: { year: '1969', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1969',
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！停在\n1969 年！', x: 18, y: 436, w: 206, fs: 25, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#BFD3E0', sun: [.12, .1], hz: .62, far: 'g3', ground: 'sand', near: 'g5' }, shot: '滿版遠景：1969 年 7 月 16 日早上，土星五號火箭噴火升空，海邊擠滿看的人',
          back: [
            { k: 'puff', x: 520, y: 640, r: 60, f: '#EDE7D6' },
            { k: 'puff', x: 640, y: 650, r: 70, f: '#E3DCC6' },
            { k: 'v7e3_saturn', x: 580, y: 470, H: 430, fire: 1 },
            { k: 'puff', x: 470, y: 660, r: 44, f: '#EDE7D6' },
            { k: 'crowd', x: 230, y: 700, n: 10, W: 420, s: .8, op: .6 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: .4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'lookup', expr: 'awe', hold: 'notebook', look: .6 }
          ],
          caption: [
            { t: '1969 年 7 月 16 日，美國佛羅里達州', en: 'KENNEDY SPACE CENTER · 16 JUL 1969', x: 0, y: 18 },
            { t: '阿波羅 11 號出發去月球。火箭大約 110 公尺高，比 30 層樓還高！', x: 0, y: 112, w: 400, dark: false }
          ],
          sfx: [{ t: '轟——！', x: 270, y: 520, fs: 64, rot: -8 }],
          bubbles: [
            { t: '嗶——本站：佛羅里達。\n免費附贈翻譯功能。', x: 14, y: 716, w: 316, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '火箭！\n好大聲！', x: 352, y: 664, w: 170, tail: [462, 770], fs: 25 },
            { t: '上面坐著\n三個太空人！', x: 556, y: 712, w: 206, tail: [618, 810], fs: 24 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sky: '#BFD3E0', sun: false, hz: .4, far: 'g3', ground: 'sand' }, shot: '中景：阿凱跳上搖搖車想追火箭，搖搖車拒絕；露絲笑出來',
          back: [
            { k: 'puff', x: 640, y: 120, r: 26, f: '#EDE7D6' },
            { k: 'puff', x: 600, y: 170, r: 30, f: '#EDE7D6' },
            { k: 'car', x: 260, y: 446, s: .85 }
          ],
          actors: [
            { c: 'kai', x: 222, y: 362, s: .95, pose: 'ride', expr: 'yell', noShadow: true, look: .5 },
            { c: 'v7e3_ruth', x: 620, y: 452, s: 1.05, pose: 'point', expr: 'grin', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '跟上去！\n我們也要上月球！', x: 20, y: 20, w: 240, kind: 'shout', fs: 23, tail: [230, 220] },
            { t: '嗶——本車沒有氧氣，\n也沒有火箭。', x: 300, y: 290, w: 260, kind: 'car', fs: 21, tail: [330, 390] },
            { t: '哈哈！去月球\n要很多人一起準備！', x: 420, y: 40, w: 260, fs: 23, tail: [612, 270] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：露絲自我介紹',
          actors: [{ c: 'v7e3_ruth', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'smug', look: -.2 }],
          bubbles: [{ t: '我媽媽是工程師，\n在休士頓的\n任務控制中心。', x: 14, y: 60, w: 274, fs: 24, tail: [150, 296] }],
          tag: { t: '看火箭的小孩：露絲（虛構）', left: 8 } },
        { scene: 'v7e3_control', shot: '中景：搖搖車一轉，來到休士頓任務控制中心，露絲的媽媽在控制台前',
          actors: [
            { c: 'kai', x: 80, y: 540, s: 1.05, pose: 'scared', expr: 'awe', look: .5 },
            { c: 'v7e3_mom', x: 340, y: 546, s: 1.05, pose: 'raise', expr: 'smug', flip: 1, look: .5 }
          ],
          caption: [{ t: '搖搖車一轉，來到休士頓。', x: 0, y: 12 }],
          bubbles: [
            { t: '一個數字錯了，\n他們就回不了家，\n所以算了又算。', x: 180, y: 190, w: 270, fs: 22, tail: [334, 330] },
            { t: '原來不只\n太空人在忙！', x: 10, y: 196, w: 166, fs: 20, tail: [80, 340] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v7e3_moon', shot: '滿版：月球表面，老鷹號停著，阿姆斯壯走下來；戴太空頭盔的兄妹在旁邊看，天上是地球',
          back: [
            { k: 'v7e3_eagle', x: 420, y: 660, s: 1.25 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v7e3_arm', x: 600, y: 680, s: .85, pose: 'walk', expr: 'calm', look: -.3 },
            { c: 'kaiSpace', x: 468, y: 1000, s: 1.2, pose: 'raise', expr: 'grin', look: -.4 },
            { c: 'heSpace', x: 640, y: 1012, s: 1.16, pose: 'lookup', expr: 'awe', hold: 'notebook', look: .4 }
          ],
          caption: [
            { t: '1969 年 7 月 20 日，月球', en: 'THE MOON · 20 JUL 1969', x: 0, y: 18 },
            { t: '阿姆斯壯走下登月小艇「老鷹號」，成為第一個踩上月球的人。', x: 0, y: 112, w: 420, dark: false }
          ],
          bubbles: [
            { t: '這是一個人的一小步，\n卻是人類的一大步。', x: 380, y: 400, w: 300, fs: 23, tail: [596, 520] },
            { t: '嗶——本站：月球。\n免費附贈太空頭盔。', x: 14, y: 716, w: 300, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '我在月球上\n跳起來了！', x: 330, y: 680, w: 190, tail: [462, 770], fs: 24 },
            { t: '地球在天上，\n好藍！', x: 560, y: 700, w: 200, tail: [636, 790], fs: 24 }
          ],
          tag: { t: '阿姆斯壯的話：改編自他踩上月球時說的話', left: 10, top: 600 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'flat', sceneOpt: { c: 'g9' }, shot: '字卡：太空競賽，冷戰的另一面',
          caption: [{ t: '太空競賽：\n冷戰的另一面', x: 0, y: 14, w: 250, dark: false }],
          cards: [
            { icon: 'v7e3_sat', y: 110, t: '1957 年，蘇聯\n發射第一顆\n人造衛星。' },
            { icon: 'v7e3_rocket', y: 410, t: '1961 年，蘇聯的\n加加林成為第一個\n飛上太空的人。' },
            { icon: 'v7e3_moonI', y: 710, t: '1969 年，美國的\n阿波羅 11 號\n第一次載人登月。' }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：很多人一起才走得到',
          caption: [{ t: '很多人一起，才走得到', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '阿波羅計畫最多的時候，\n大約有 40 萬人一起工作：\n工程師、工人、計算員……' },
            { icon: 'star', y: 344, t: '凱瑟琳・強森這樣的「計算員」，\n用數學幫太空人算出\n飛行的路線。' },
            { icon: 'v7e3_moonI', y: 610, t: '1969 到 1972 年，\n一共有 12 位太空人\n走上月球。' }
          ],
          bubbles: [{ t: '原來一小步的後面，\n有好多好多人。', x: 24, y: 900, w: 374, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v7e3_control', shot: '矮寬格：7 月 24 日，太空人平安降落，控制中心的人歡呼',
          actors: [
            { c: 'v7e3_eng', x: 600, y: 390, s: .85, pose: 'shout', expr: 'happy', flip: 1 },
            { c: 'v7e3_mom', x: 470, y: 392, s: .9, pose: 'raise', expr: 'happy', flip: 1, look: .5 },
            { c: 'v7e3_ruth', x: 330, y: 392, s: .85, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'kai', x: 100, y: 388, s: .82, pose: 'shout', expr: 'grin', look: .6 }
          ],
          caption: [{ t: '7 月 24 日，三位太空人平安降落在太平洋。', x: 0, y: 12, w: 580 }],
          bubbles: [
            { t: '他們平安回家了！', x: 520, y: 90, w: 240, kind: 'shout', fs: 23, tail: [470, 230] },
            { t: '媽媽，\n你們算對了！', x: 270, y: 96, w: 190, fs: 22, tail: [330, 236] },
            { t: '我以後也要\n好好算數學……', x: 14, y: 100, w: 220, fs: 22, tail: [100, 236] }
          ] },
        { scene: 'night', sceneOpt: { moon: [.5, .18], ground: 'g8' }, shot: '收尾大格：晚上，跟露絲一起看月亮，準備出發',
          back: [{ k: 'car', x: 690, y: 600, s: .75 }],
          actors: [
            { c: 'v7e3_ruth', x: 104, y: 566, s: 1.2, pose: 'point', expr: 'grin', look: .6 },
            { c: 'kai', x: 290, y: 570, s: 1.2, pose: 'pointUp', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '回家我要用望遠鏡\n找老鷹號！', x: 200, y: 156, w: 236, fs: 22, tail: [290, 350] },
            { t: '太小了，\n看不到啦！', x: 14, y: 236, w: 160, fs: 22, tail: [110, 340] },
            { t: '作業寫：人真的上去過，\n是大家一起去的。', x: 340, y: 262, w: 272, fs: 21, tail: [474, 370] },
            { t: '嗶嗶——\n下一站，\n新竹！', x: 620, y: 140, w: 146, kind: 'car', fs: 22, tail: [690, 492] }
          ],
          caption: [{ t: '下一話：新竹的小晶片', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '太空競賽', t: '冷戰時，美國和蘇聯也在太空比賽。1957 年蘇聯發射第一顆人造衛星；1961 年蘇聯的加加林第一個飛上太空。美國總統甘迺迪則定下目標：在 1960 年代結束前，把人送上月球再平安帶回來。' },
      { h: '阿波羅 11 號', t: '1969 年 7 月 16 日，從佛羅里達的甘迺迪太空中心出發，火箭大約 110 公尺高。太空人是阿姆斯壯、艾德林和柯林斯。' },
      { h: '踩上月球', t: '7 月 20 日（美國時間），登月小艇「老鷹號」降落在月球的「寧靜海」，阿姆斯壯第一個走出去；柯林斯留在月球上空的指揮艙等。他們帶回大約 21 公斤的月球岩石和土，7 月 24 日降落在太平洋。' },
      { h: '很多人的合作', t: '阿波羅計畫最多的時候，大約有 40 萬人一起工作。像凱瑟琳・強森這樣的計算員，幫忙算出飛行的路線。' },
      { h: '12 個人', t: '從 1969 到 1972 年，一共有 12 位太空人走上月球。' }
    ],
    map: {
      bounds: { lon: [-178, -40], lat: [-2, 52] },
      cap: '紅點是火箭出發的甘迺迪太空中心。休士頓是任務控制中心，太空人回來時降落在太平洋上。月球太遠了，不在地圖上。海岸線是簡化的畫法。',
      alt: '美國和太平洋的地圖：甘迺迪太空中心在美國東南的佛羅里達（紅點），休士頓在南邊中間，太空人降落的地點在左邊的太平洋上',
      labels: [
        { t: '美國', lat: 41, lon: -100, size: 30, f: 'g9' },
        { t: '太平洋', lat: 24, lon: -140, size: 24, f: 'cream' },
        { t: '大西洋', lat: 38, lon: -52, size: 22, f: 'cream' },
        { t: '← 再往西很遠才是臺灣', lat: 4, lon: -150, size: 18, f: 'cream' }
      ],
      taiwan: false,
      cities: [
        { n: '甘迺迪太空中心', lat: 28.57, lon: -80.65, main: 1, side: 'r', dy: 34 },
        { n: '休士頓', lat: 29.76, lon: -95.37, side: 'l' },
        { n: '降落點', lat: 13.3, lon: -169.15, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從第一顆人造衛星到登上月球，只花了 12 年。',
      items: [
        { y: 1957, when: '西元 1957 年', t: '第一顆\n人造衛星', side: 'u', w: 120 },
        { y: 1969, when: '西元 1969 年', t: '阿波羅 11 號\n登上月球', side: 'd', main: 1, w: 170 },
        { y: 1972, when: '1972 年', t: '最後一次\n登月', side: 'u', w: 120 },
        { y: 2026, when: '今天', t: '你在這裡\n看月亮', side: 'u', w: 140 }
      ]
    },
    sources: [
      'NASA〈Apollo 11〉任務頁（1969 年 7 月 16 日出發、7 月 20 日登月、7 月 24 日降落；阿姆斯壯的話；三位太空人與分工）',
      'NASA 影像說明〈Launch of Apollo 11〉（甘迺迪太空中心 39 號發射台、土星五號高 363 英尺，約 110 公尺）',
      'NASA 太空科學資料中心 NSSDCA〈Apollo 11 Command and Service Module〉（降落在寧靜海、帶回 21.55 公斤岩石和土、在太平洋降落）',
      '行星協會 The Planetary Society〈Project Apollo〉〈Vostok 1〉（阿波羅計畫最多時約 40 萬人、甘迺迪的目標、12 人登月、1972 年阿波羅 17 號；1957 年史普尼克、1961 年 4 月 12 日加加林）',
      '電腦歷史博物館〈Katherine Johnson〉（「計算員」、幫阿波羅 11 號規劃飛行路線）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1969 年，第一個踩上月球的人是誰？', opts: ['阿姆斯壯', '加加林', '金恩博士', '柯林斯'], a: 0, why: '阿姆斯壯第一個走出老鷹號；加加林是第一個飛上太空的人，柯林斯那時留在月球上空的指揮艙。' },
      { id: 'q2', d: 1, type: 'tf', q: '第一顆人造衛星和第一個飛上太空的人，都是蘇聯先做到的。', a: true, why: '對！1957 年蘇聯發射第一顆人造衛星，1961 年蘇聯的加加林飛上太空；1969 年美國先登上月球。' },
      { id: 'q3', d: 2, type: 'mc', q: '為什麼說登上月球是「很多人一起」做到的？', opts: ['大約 40 萬人一起工作', '月球上的居民一起來幫忙', '太空人自己造出火箭', '全班同學一起推火箭'], a: 0, why: '工程師、工人、計算員……最多時大約 40 萬人一起，才把三位太空人送去又平安帶回來。' },
      { id: 'q4', d: 2, type: 'order', q: '把阿波羅 11 號的旅程照先後排好。', items: ['土星五號火箭從佛羅里達出發', '老鷹號降落在月球上', '阿姆斯壯踩上月球', '三位太空人降落在太平洋'], why: '7 月 16 日出發，7 月 20 日（美國時間）降落月球、阿姆斯壯走出去，7 月 24 日回到地球、降落在太平洋。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「太空競賽就是美國很厲害、蘇聯很差。」根據這一話，哪個說法最正確？', opts: ['不對，兩邊各有先做到的事，互相追趕', '對，蘇聯在太空比賽裡什麼都沒有做到過', '對，美國每一項都比蘇聯先做到', '不對，太空競賽其實只是一場電視節目'], a: 0, why: '蘇聯先發射人造衛星、先送人上太空；美國先登上月球。兩邊互相追趕，也讓太空科技進步很快。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
