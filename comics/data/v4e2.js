/* 世界史漫畫 第 4 冊 大航海與文藝復興・第 2 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：印刷術的傳播與宗教改革。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, path, txt, both, place, cap, brickWall } = K;
    const ICOL = 'rgba(21,23,20,.28)';
    root.ComicArt.extend({
      scenes: {
        // 印刷工坊：磚牆、木樑、晾乾的紙
        v4e2_shop(w, h, o) {
          o = o || {}; const hz = h * (o.hz || .74);
          let s = brickWall(0, 0, w, hz, C.brick3, C.brick, 21);
          s += rect(0, 0, w, 26, C.wood) + rect(0, hz * .4, w, 14, C.wood, 0, 'opacity=".85"');
          for (let x = w * .08; x < w; x += w * .3) s += rect(x, 0, 18, hz, C.wood, 0, 'opacity=".9"');
          if (o.line !== false) { s += rect(0, h * .1, w, 3, C.ink); for (let x = 40; x < w - 40; x += 92) s += rect(x, h * .1, 62, 78, C.cream, 2) + rect(x + 8, h * .1 + 14, 46, 3, ICOL) + rect(x + 8, h * .1 + 26, 46, 3, ICOL) + rect(x + 8, h * .1 + 38, 30, 3, ICOL) + rect(x + 26, h * .1 - 6, 10, 12, C.wood, 2); }
          s += rect(0, hz, w, h - hz, C.paper3) + rect(0, hz, w, 6, 'rgba(21,23,20,.14)');
          for (let x = 0; x < w; x += 90) s += rect(x, hz, 3, h - hz, 'rgba(21,23,20,.08)');
          return { bg: s };
        },
        // 美因茲街景：一排木框房子、遠方高塔、萊茵河
        v4e2_mainz(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .84, h * .1, 200, 'url(#cm-sun)') + circ(w * .84, h * .1, 44, '#FFF8DC');
          s += rect(0, h * .3, w, h * .06, C.g5);
          s += K.prop({ k: 'tower', x: w * .2, y: h * .36, W: 70, H: 260, f: 'brick2', roof: 'cone', roofC: 'g7' }) + K.prop({ k: 'tower', x: w * .3, y: h * .36, W: 54, H: 190, f: 'brick2', roof: 'cone', roofC: 'g7' });
          const cols = ['cream', 'brick3', 'paper2', 'clay3', 'cream', 'brick3'];
          for (let i = 0; i < 6; i++) {
            const x = i * w / 6 + w / 12, W = w / 6 - 6, H = 210 + (i % 2) * 40, y = h * .62;
            s += K.prop({ k: 'house', x, y, W, H, roof: 'gable', roofC: i % 2 ? 'red' : 'clay2', f: cols[i] });
            s += rect(x - W / 2, y - H * .5, W, 6, C.wood) + rect(x - W / 2, y - H, 6, H, C.wood) + rect(x + W / 2 - 6, y - H, 6, H, C.wood) + poly(`${x - W / 2},${y - H * .5} ${x - W / 2 + 6},${y - H * .5} ${x + W / 2},${y - H + 6} ${x + W / 2 - 6},${y - H + 6}`, C.wood, 'opacity=".7"');
          }
          s += rect(0, h * .62, w, h * .38, C.paper3);
          for (let j = 0; j < 9; j++) for (let i = 0; i < 12; i++) s += rect(i * w / 12 + (j % 2) * 30, h * .64 + j * 40, w / 12 - 8, 30, C.paper2, 6, 'opacity=".6"');
          return { bg: s };
        }
      },
      props: {
        // 黑板
        v4e2_board: x => place(x, rect(-170, -150, 340, 150, C.wood, 4) + rect(-162, -142, 324, 134, C.g9) + txt(-120, -100, '值日生：', 20, C.cream, { a: 'start', w: 700 }) + txt(-120, -60, '校外教學', 22, C.cream, { a: 'start', w: 700 }) + rect(60, -50, 60, 6, C.cream, 2)),
        // 字盤：斜放的木盒，很多小格子
        v4e2_case: x => { let s = both(poly('-120,0 120,0 110,-120 -110,-120', C.wood)); for (let j = 0; j < 5; j++) for (let i = 0; i < 9; i++) s += rect(-104 + i * 23.5 + j * 1.6, -112 + j * 22, 19, 17, C.clay2, 2) + rect(-100 + i * 23.5 + j * 1.6, -104 + j * 22, 10, 6, C.basalt3, 1); return place(x, s + rect(-6, 0, 12, 70, C.wood) + rect(-90, 66, 180, 8, C.wood)); },
        // 印刷機：木架＋大螺旋＋壓板＋拉桿
        v4e2_press: x => {
          let s = K.groundShadow(0, 3, 150, 12);
          s += both(rect(-110, -330, 30, 330, C.wood)) + both(rect(80, -330, 30, 330, C.wood)) + rect(-130, -350, 260, 34, C.wood, 4) + rect(-120, -230, 240, 22, C.wood);
          s += rect(-12, -320, 24, 110, C.gold) + [0, 1, 2, 3, 4].map(i => rect(-14, -312 + i * 20, 28, 6, '#A8862F')).join('');
          s += cap(10, -258, 150, -300, 9, C.ink) + circ(150, -300, 10, C.ink);
          s += rect(-70, -206, 140, 26, C.basalt2, 3);
          s += rect(-150, -150, 300, 30, C.wood, 3) + rect(-80, -168, 160, 18, C.cream) + rect(-74, -164, 148, 10, C.basalt2);
          s += rect(-140, -120, 18, 120, C.wood) + rect(122, -120, 18, 120, C.wood);
          return place(x, s);
        },
        // 金屬活字（字是反的）
        v4e2_types: x => {
          const L = x.t || 'ABC'; let s = '';
          for (let i = 0; i < L.length; i++) {
            const cx = (i - (L.length - 1) / 2) * 96;
            s += both(rect(cx - 40, -130, 80, 130, C.basalt3, 6)) + rect(cx - 40, -130, 80, 18, '#8C9391', 6) + rect(cx - 32, -116, 64, 64, C.basalt2, 4);
            s += txt(-cx, -64, L[L.length - 1 - i], 58, C.paper3, { tr: 'scale(-1 1)' });   // 排版時整排也是反的
          }
          return place(x, s);
        },
        // 攤開的大本《聖經》（兩欄字＋紅色大寫字母）
        v4e2_bible: x => {
          let s = K.groundShadow(0, 4, 160, 10) + both(path('M0 -10 Q-80 -26 -160 -12 L-160 -250 Q-80 -264 0 -246Z', C.cream)) + path('M0 -10 Q80 -26 160 -12 L160 -250 Q80 -264 0 -246Z', C.paper2);
          [-150, -78, 10, 82].forEach(cx => { for (let i = 0; i < 16; i++) s += rect(cx, -228 + i * 13, 58, 4, ICOL); });
          return place(x, s + rect(-150, -232, 20, 24, C.red, 3) + rect(10, -232, 20, 24, C.g7, 3));
        },
        // 一疊印好的紙
        v4e2_pages: x => { let s = K.groundShadow(0, 2, 80, 6); for (let i = 0; i < (x.n || 8); i++) s += rect(-70 + (i % 2) * 4, -12 - i * 12, 140, 12, i % 2 ? C.cream : C.paper2, 2); return place(x, s + rect(-50, -12 - (x.n || 8) * 12 + 2, 100, 4, ICOL)); }
      },
      holds: {
        v4e2_typeH: () => rect(-9, -26, 18, 26, C.basalt3, 2) + rect(-7, -24, 14, 10, C.basalt2, 1),
        v4e2_pageH: () => rect(-24, -40, 48, 62, C.cream, 2) + rect(-18, -32, 36, 3, ICOL) + rect(-18, -24, 36, 3, ICOL) + rect(-18, -16, 26, 3, ICOL)
      },
      cast: {
        v4e2_mate: { name: '同學', skin: 'skin', top: 'red', bottom: 'g9', leg: 'skin', shoe: 'ink', hair: 'short', r: 22, k: .95 },
        v4e2_lukas: { name: '盧卡斯（虛構）', skin: 'skin', top: 'g7', bottom: 'wood', leg: 'wood', shoe: 'ink', hair: 'short', hairC: '#8A5A2B', hat: 'beret', hatC: 'red', r: 22, k: .95 },
        v4e2_worker: { name: '印刷工人', skin: 'skin', top: 'cream', bottom: 'wood', leg: 'wood', hair: 'short', hairC: '#8A5A2B', beard: 1, r: 19, k: 1.14 },
        v4e2_worker2: { name: '印刷工人', skin: 'skin', top: 'g5', bottom: 'g9', leg: 'g9', hair: 'curly', hairC: '#5B3A20', r: 19, k: 1.1 },
        v4e2_copyist: { name: '抄書的人', skin: 'skin', robe: 'wood', trim: 'clay2', hat: 'hood', hatC: 'clay2', r: 19, k: 1.1 },
        v4e2_gutenberg: { name: '古騰堡', real: 1, skin: 'skin', robe: 'g9', trim: 'wood', hair: 'man', hat: 'softCap', hatC: 'wood', beard: 2, r: 19, k: 1.22 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v4e2 = {
    id: 'v4e2', vol: '第 4 冊 大航海與文藝復興', volNo: 4, ep: 2, title: '會印書的機器', next: '會說話的繩結',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說校外教學沒取消——這次他問過老師了。',
    note: '阿凱、小禾、同學、盧卡斯和印刷工人是虛構的角色；古騰堡的話是依據他的發明方法改編，不是他的原話。古騰堡沒有留下可靠的畫像，他的樣子、工坊和印刷機都是想像圖。古騰堡《聖經》原本印了幾本，學者估計大約 180 本（也有不同說法）。路德和教會之間的爭論，當時兩邊都有很多人支持，這裡只講雙方做了什麼。',
    curriculum: '國中社會會再學到：印刷術的傳播與宗教改革',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'paper3' },
      back: [
        { k: 'v4e2_press', x: 130, y: 990, s: .8 },
        { k: 'v4e2_pages', x: 670, y: 960, s: 1.2, n: 9 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'g3', hz: .74, window: [.04, .1, .18, .36], winC: 'g2' }, shot: '中景：教室早上，同學偷偷傳消息',
          back: [{ k: 'v4e2_board', x: 560, y: 210 }],
          actors: [
            { c: 'v4e2_mate', x: 200, y: 334, s: 1, pose: 'arg', expr: 'worry', look: .5 },
            { c: 'kai', x: 380, y: 334, s: 1, pose: 'scared', expr: 'shock', flip: 1, look: .6 },
            { c: 'he', x: 690, y: 334, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '聽說校外教學\n要取消了！', x: 16, y: 12, w: 220, tail: [196, 128] },
            { t: '真的假的？！\n我去告訴大家！', x: 250, y: 12, w: 230, tail: [376, 136] },
            { t: '誰說的？\n你查過了嗎？', x: 520, y: 30, w: 190, tail: [680, 136] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'room', sceneOpt: { wall: 'cream', floor: 'paper3', hz: .55, window: [.55, .08, .4, .3], winC: 'g3' }, shot: '大格：學校穿堂，阿凱衝向不知道哪裡來的搖搖車',
          back: [{ k: 'sign', t: '公布欄', x: 150, y: 330, W: 150, fs: 26 }, { k: 'car', x: 118, y: 628, s: .78 }],
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'yell', flip: 1, look: .7, sweat: 1 }
          ],
          bubbles: [
            { t: '全班都在傳，\n一定是真的！', x: 18, y: 380, w: 216, tail: [206, 450] },
            { t: '陳以凱！！\n穿堂怎麼有搖搖車？', x: 250, y: 300, w: 260, kind: 'shout', tail: [420, 400], fs: 24 }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '1455', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1455',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '又倒轉了！\n西元 1455！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e2_mainz', shot: '滿版遠景：美因茲的石板街，一排木框房子，遠方是萊茵河',
          back: [
            { k: 'sign', t: '印刷工坊', x: 600, y: 640, W: 150, fs: 26 },
            { k: 'cart', x: 300, y: 690, s: .7 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v4e2_worker2', x: 420, y: 700, s: .8, pose: 'carry', expr: 'calm', hold: 'sack' },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 570 年前，美因茲（今天的德國）', en: 'MAINZ · c.1455', x: 0, y: 18 },
            { t: '萊茵河邊的城市。這裡有一間工坊，正在做一件以前沒有人做過的事。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：美因茲。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '房子都有\n木頭格子！', x: 348, y: 660, w: 196, tail: [462, 754], fs: 25 },
            { t: '那間店在\n敲什麼？', x: 570, y: 700, w: 196, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v4e2_shop', sceneOpt: { line: false, hz: .78 }, shot: '矮寬格：工坊裡，阿凱滑倒撞翻排好字的木盤',
          back: [{ k: 'v4e2_case', x: 470, y: 300, s: .9 }],
          props: [{ k: 'v4e2_types', t: 'ABC', x: 330, y: 392, s: .26 }, { k: 'v4e2_types', t: 'DE', x: 410, y: 380, s: .22, rot: 20 }],
          actors: [
            { c: 'he', x: 70, y: 390, s: .9, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 210, y: 385, s: 1, pose: 'splat', expr: 'yell', look: .4, sweat: 1 },
            { c: 'v4e2_lukas', x: 650, y: 395, s: 1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '哇啊！\n腳滑了！', x: 110, y: 20, w: 180, tail: [200, 230] },
            { t: '我排了一整個\n早上的字！！', x: 380, y: 14, w: 280, kind: 'shout', fs: 25, tail: [640, 196] }
          ],
          sfx: [{ t: '嘩啦啦！', x: 270, y: 250, fs: 44, rot: -8 }],
          tag: { t: '印刷工坊的學徒：盧卡斯（虛構）' } },
        { scene: 'flat', sceneOpt: { c: 'g9', zoom: 1, cy: .42 }, shot: '大格特寫：金屬活字上的字是反的，盧卡斯和小禾解釋',
          back: [{ k: 'v4e2_types', t: 'BOOK', x: 390, y: 340, s: 1 }],
          actors: [
            { c: 'v4e2_lukas', x: 130, y: 626, s: 1.2, pose: 'pointUp', expr: 'smug', look: .3, bust: 1 },
            { c: 'he', x: 650, y: 626, s: 1.25, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .5, bust: 1 }
          ],
          caption: [{ t: '用鉛、錫等金屬做的合金，倒進模子裡，鑄成一個一個字母。', x: 0, y: 14, w: 460 }],
          bubbles: [
            { t: '每個字母都是\n一小塊金屬！', x: 14, y: 150, w: 220, fs: 24, tail: [130, 400] },
            { t: '字是反的，\n印到紙上就變正！', x: 540, y: 150, w: 226, fs: 24, tail: [640, 390] }
          ] }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'v4e2_shop', sceneOpt: { hz: .7 }, shot: '左大格：工人用力拉桿，把紙壓在塗了墨的字上',
          back: [{ k: 'v4e2_press', x: 220, y: 728, s: 1.05 }],
          actors: [
            { c: 'v4e2_worker', x: 410, y: 728, s: .95, pose: 'push', expr: 'mad', flip: 1, look: .4, sweat: 1 },
            { c: 'kai', x: 110, y: 1030, s: 1.2, pose: 'fists', expr: 'shock', look: .4 },
            { c: 'he', x: 380, y: 1036, s: 1.15, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .5 }
          ],
          caption: [{ t: '字排好、塗上墨、蓋上紙，\n用力一壓！', x: 0, y: 140, w: 340 }],
          bubbles: [
            { t: '嘿——咻！', x: 300, y: 340, w: 170, kind: 'shout', fs: 26, tail: [420, 520] },
            { t: '一下子\n就印好一張！', x: 20, y: 700, w: 196, fs: 24, tail: [110, 800] },
            { t: '還能\n再印一百張！', x: 290, y: 690, w: 196, fs: 24, tail: [370, 810] }
          ],
          sfx: [{ t: '碰！', x: 150, y: 420, fs: 54, rot: -6 }] },
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .78 }, shot: '右上小格：以前，有人一個字一個字抄書',
          back: [{ k: 'table', x: 160, y: 470, W: 160 }, { k: 'book', x: 150, y: 396, s: .9 }],
          actors: [{ c: 'v4e2_copyist', x: 100, y: 470, s: .9, pose: 'write', expr: 'worry', hold: 'brush', sweat: 2 }],
          caption: [{ t: '以前：一本書\n用手抄，\n要抄好幾個月\n甚至好幾年。', x: 0, y: 14, w: 210, dark: false }] },
        { scene: 'flat', sceneOpt: { c: 'g5' }, shot: '右下小格：同一頁一下子印出一大疊',
          back: [{ k: 'v4e2_pages', x: 133, y: 440, s: 1.3, n: 14 }],
          caption: [{ t: '現在：同一頁\n可以印出\n一大疊。', x: 0, y: 14, w: 200 }],
          bubbles: [{ t: '書會變便宜！', x: 30, y: 180, w: 200, fs: 24 }] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v4e2_shop', sceneOpt: { hz: .82, line: false }, shot: '細長大格：印好的拉丁文《聖經》攤開，小禾湊近看',
          back: [{ k: 'table', x: 172, y: 640, W: 300 }, { k: 'v4e2_bible', x: 172, y: 566, s: .95 }],
          actors: [{ c: 'he', x: 120, y: 1034, s: 1.7, pose: 'hold', expr: 'awe', hold: 'notebook', look: .4 }],
          caption: [{ t: '大約 1455 年，古騰堡的工坊\n印好拉丁文《聖經》，\n大約印了 180 本。', x: 0, y: 14, w: 336 }, { t: '今天世界上\n還留下 49 本。', x: 0, y: 150, w: 210, dark: false }],
          bubbles: [{ t: '每一頁都\n排得整整齊齊！', x: 140, y: 700, w: 200, fs: 22, tail: [150, 760] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：書變便宜、路德的意見、兩邊的爭論',
          caption: [{ t: '書印得快，會發生什麼事？', x: 0, y: 16 }],
          cards: [
            { icon: 'scrollI', y: 80, t: '書變便宜、印得又快：\n更多人買得起書，\n想法也傳得更快。' },
            { icon: 'letterI', y: 344, t: '1517 年，路德寫了 95 條意見，\n反對教會賣「贖罪券」。\n幾個星期就被印出來傳遍德國。' },
            { icon: 'people', y: 610, t: '支持教會的人也印書回應。\n兩邊爭論很久，後來基督教\n分成天主教和新教。' }
          ],
          bubbles: [{ t: '傳得快的消息，\n也要查查真假！', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v4e2_shop', sceneOpt: { hz: .8, line: false }, shot: '矮寬格：古騰堡拿起一個剛鑄好的字',
          back: [{ k: 'v4e2_case', x: 700, y: 290, s: .9 }],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v4e2_lukas', x: 300, y: 392, s: .9, pose: 'bow', expr: 'calm' },
            { c: 'v4e2_gutenberg', x: 560, y: 394, s: 1, pose: 'raise', expr: 'calm', hold: 'v4e2_typeH', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '一個字母做好模子，\n就能鑄出很多個一模一樣的字。', x: 40, y: 14, w: 470, fs: 24, tail: [528, 146] }
          ],
          tag: { t: '古騰堡的話：改編自他的發明方法', left: 10, top: 112 } },
        { scene: 'v4e2_mainz', shot: '收尾大格：傍晚的工坊門口，準備出發',
          back: [{ k: 'car', x: 680, y: 600, s: .8 }],
          actors: [
            { c: 'v4e2_lukas', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', hold: 'v4e2_pageH', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '印之前要校對，\n錯一個字\n就要重排！', x: 14, y: 170, w: 196, fs: 22, tail: [110, 300] },
            { t: '回去我要先問：\n誰說的？', x: 222, y: 160, w: 206, fs: 22, tail: [284, 326] },
            { t: '有證據嗎？\n再決定傳不傳。', x: 434, y: 210, w: 186, fs: 21, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n印加帝國！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：會說話的繩結', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '古騰堡的印刷機', t: '大約 1455 年，在美因茲（今天的德國），古騰堡的工坊用金屬活字和印刷機，印好了拉丁文《聖經》，大約 180 本，今天還留下 49 本。' },
      { h: '金屬活字', t: '用鉛、錫等金屬做的合金，倒進模子裡鑄成一個一個字母。字是反的，排好、塗墨、壓在紙上，印出來就是正的。用完還能拆開重排。' },
      { h: '書變便宜，知識傳得快', t: '以前一本書要用手抄好久；有了印刷機，同一頁可以印出一大疊，更多人買得起書。（比古騰堡更早，中國北宋的畢昇做過泥活字，韓國也有人用金屬活字印書。）' },
      { h: '宗教改革的爭論', t: '1517 年，路德寫了 95 條意見，反對教會賣「贖罪券」，幾個星期就被印出來傳遍德國；支持教會的人也印書回應。兩邊爭論很久，後來基督教分成天主教和新教。' }
    ],
    map: {
      bounds: { lon: [-3, 20], lat: [43, 56] },
      cap: '紅點是美因茲。路德住在東邊的威登堡。河道、海岸是今天的樣子，簡化畫法。',
      alt: '歐洲中部地圖：美因茲在萊茵河邊（紅點），東北邊是威登堡，西邊是巴黎，南邊是威尼斯',
      rivers: ['rhine', 'danube', 'seine'],
      labels: [
        { t: '萊茵河', lat: 51.4, lon: 5.4, size: 18, f: 'g7' },
        { t: '今天的德國', lat: 52.6, lon: 9.2, size: 22, f: 'wood' },
        { t: '北海', lat: 55, lon: 4, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '美因茲', lat: 50.0, lon: 8.27, main: 1, side: 'r' },
        { n: '威登堡', lat: 51.87, lon: 12.65, side: 'r' },
        { n: '巴黎', lat: 48.86, lon: 2.35, side: 'l' },
        { n: '威尼斯', lat: 45.44, lon: 12.33, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：畢昇的泥活字比古騰堡早了 400 年；古騰堡印書以後才 60 多年，路德的意見就靠印刷傳遍德國。',
      items: [
        { y: 1045, when: '約西元 1045 年', t: '北宋畢昇\n做出泥活字', side: 'u', w: 170 },
        { y: 1455, when: '約西元 1455 年', t: '古騰堡印好\n《聖經》', side: 'd', main: 1, w: 170 },
        { y: 1517, when: '西元 1517 年', t: '路德的意見\n印出來傳開', side: 'u', w: 170 },
        { y: 2026, when: '今天', t: '古騰堡《聖經》\n還留下 49 本', side: 'd', w: 190 }
      ]
    },
    sources: [
      '美國國會圖書館〈The Gutenberg Bible〉展覽頁：約 1455 年在美因茲印製、大約 180 本（145 本紙、35 本牛皮）、49 本留到 20 世紀；西歐第一本用金屬活字印的書，韓國更早就用過金屬活字',
      '美因茲古騰堡博物館官網〈The invention〉：手鑄字模、鉛錫等合金鑄字、螺旋壓印機',
      'Christian History Institute〈Preachers and printers〉：1517 年路德的意見兩週內被印出傳遍德國；1517～1520 年他的小冊子大量再版；支持教會的神學家也抱怨印刷商、需要自己出版回應'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '古騰堡的印刷工坊在哪個城市？', opts: ['美因茲', '巴格達', '佛羅倫斯', '南京'], a: 0, why: '古騰堡的工坊在美因茲，今天的德國，萊茵河邊。' },
      { id: 'q2', d: 1, type: 'tf', q: '排版用的金屬活字，字是反的，印到紙上才會變正的。', a: true, why: '對！活字上的字是反的，塗墨壓到紙上，印出來就變成正的。' },
      { id: 'q3', d: 2, type: 'mc', q: '古騰堡的工坊印的拉丁文《聖經》，大約印了多少本？', opts: ['大約 180 本', '大約 18 本', '大約 1800 本', '大約 18 萬本'], a: 0, why: '學者估計大約印了 180 本，今天還留下 49 本。' },
      { id: 'q4', d: 2, type: 'match', q: '把人物和他做的事配起來。', pairs: [['畢昇', '用泥做活字'], ['古騰堡', '用金屬活字和印刷機印書'], ['路德', '寫出 95 條意見']], why: '北宋的畢昇做出泥活字；古騰堡在美因茲用金屬活字和印刷機印書；路德在 1517 年寫出 95 條意見。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「書印得越快、傳得越廣，裡面寫的就一定越正確。」根據這一話，哪個說法最正確？', opts: ['不對，傳得快不代表是真的，還是要查證', '對，印出來的字都經過國王檢查才能賣', '對，印刷機很準，不會印出錯的內容', '不對，印出來的書一定比手抄的書錯得更多'], a: 0, why: '印刷讓想法傳得很快，但傳得快不等於正確，像路德和教會兩邊都印書說自己的道理。看到消息，要先問是誰說的、有沒有證據。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
