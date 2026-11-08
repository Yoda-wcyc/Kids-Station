/* 世界史漫畫 第 7 冊 現代世界・第 1 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：冷戰與柏林圍牆。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, col, place, rect, poly, circ, path, both, groundShadow } = K;
    root.ComicArt.extend({
      scenes: {
        // 細長格上下兩半：上＝西邊那面（塗鴉）、下＝東邊那面（空地＋瞭望塔）
        v7e1_faces(w, h) {
          let s = rect(0, 0, w, h * .48, '#CFD6CC') + rect(0, h * .42, w, h * .06, C.paper3);
          s += K.prop({ k: 'v7e1_wallseg', x: w / 2, y: h * .42, W: w, H: h * .2, graf: 1 });
          s += rect(0, h * .48, w, h * .03, C.ink);
          s += rect(0, h * .51, w, h * .49, '#C9CDBF');
          s += K.prop({ k: 'v7e1_wallseg', x: w / 2, y: h * .8, W: w, H: h * .14 }) + rect(0, h * .8, w, h * .2, C.sand);
          for (let i = 0; i < 6; i++) s += rect(20 + i * 56, h * .88, 30, 4, C.brick2, 2, 'opacity=".6"');
          s += K.prop({ k: 'tower', x: w * .76, y: h * .95, W: 46, H: 230, f: 'paper3' });
          return { bg: s };
        }
      },
      props: {
        // 地上的膠帶界線（y＝地板線，往下斜到畫面底）
        v7e1_tape: x => { const L = x.L || 96; return place(x, poly(`-6,0 6,0 22,${L} -16,${L}`, col(x.f) || C.gold) + poly(`-2,0 2,0 6,${L} -2,${L}`, 'rgba(255,255,255,.35)')); },
        v7e1_door: x => place(x, both(rect(-46, -196, 92, 196, C.wood, 3)) + rect(-36, -184, 72, 80, '#7A5A40', 3) + rect(-36, -94, 72, 82, '#7A5A40', 3) + circ(30, -96, 6, C.gold)),
        // 鐵絲網：木樁＋三條帶刺的線
        v7e1_wire: x => {
          const W = x.W || 600, H = x.H || 110; let s = '';
          for (let xx = -W / 2 + 20; xx <= W / 2; xx += 120) s += rect(xx - 4, -H, 8, H, C.wood) + groundShadow(xx, 1, 14, 3);
          [-H + 10, -H * .62, -H * .26].forEach(y => { s += rect(-W / 2, y, W, 3, C.basalt2); for (let xx = -W / 2 + 8; xx < W / 2; xx += 22) s += poly(`${xx - 4},${y - 4} ${xx + 4},${y + 6} ${xx + 5},${y + 4} ${xx - 3},${y - 6}`, C.basalt2) + poly(`${xx + 4},${y - 4} ${xx - 4},${y + 6} ${xx - 5},${y + 4} ${xx + 3},${y - 6}`, C.basalt2); });
          return place(x, s);
        },
        // 水泥圍牆：一片一片，頂端圓管；graf:1 西邊塗鴉
        v7e1_wallseg: x => {
          const W = x.W || 600, H = x.H || 130, sw = 52; let s = rect(-W / 2, -H, W, H, '#B9B6A8');
          for (let xx = -W / 2; xx < W / 2; xx += sw) s += rect(xx + sw - 3, -H, 3, H, 'rgba(21,23,20,.16)');
          s += rect(-W / 2, -H - 16, W, 18, '#D2CEC0', 9) + rect(-W / 2, -6, W, 6, 'rgba(21,23,20,.18)');
          if (x.graf) { const cs = [C.red, C.gold, C.blue, C.g5, C.purple, C.cream]; for (let i = 0, xx = -W / 2 + 24; xx < W / 2 - 30; xx += 70, i++) s += path(`M${xx} ${-H * .3} q14 -${H * .45} 34 -${H * .2} q10 ${H * .3} 26 ${H * .1} l-4 ${H * .25}Z`, cs[i % cs.length], 'opacity=".75"') + circ(xx + 40, -H * .7, 9 + (i % 3) * 4, cs[(i + 2) % cs.length], 'opacity=".7"'); }
          return place(x, s);
        },
        // 布蘭登堡門（簡化）：六根柱子＋門楣＋頂上的馬車剪影
        v7e1_gate: x => {
          const W = x.W || 360, H = x.H || 240, f = C.paper3; let s = groundShadow(0, 3, W * .6, 10);
          for (let i = 0; i < 6; i++) { const cx = -W / 2 + W * (i + .5) / 6; s += both(rect(cx - W * .032, -H * .74, W * .064, H * .74, f)); }
          s += both(rect(-W / 2 - 10, -H * .88, W + 20, H * .14, C.brick3)) + rect(-W / 2 - 14, -H * .74 - 6, W + 28, 8, C.brick);
          s += both(rect(-W * .22, -H, W * .44, H * .12, C.brick3));
          s += path(`M${-W * .12} ${-H} L${-W * .1} ${-H * 1.1} L${-W * .04} ${-H * 1.07} L0 ${-H * 1.2} L${W * .04} ${-H * 1.07} L${W * .1} ${-H * 1.1} L${W * .12} ${-H}Z`, C.g6);
          return place(x, s);
        },
        // 邊界的柵欄桿：up＝抬起的角度
        v7e1_boom: x => { const L = x.L || 260, up = x.up || 0; return place(x, both(rect(-12, -86, 24, 86, C.basalt2, 3)) + `<g transform="rotate(${-up} 0 -72)">` + rect(0, -78, L, 12, C.cream, 4) + [0, 1, 2, 3, 4].map(i => rect(i * L / 5 + 8, -78, L / 10, 12, C.red)).join('') + `</g>`); }
      },
      holds: {
        v7e1_chunk: () => poly('-14,-8 -4,-16 12,-12 16,2 4,10 -12,6', '#B9B6A8') + circ(-4, -4, 4, C.red) + circ(6, 0, 3, C.blue)
      },
      cast: {
        v7e1_lena: { name: '莉娜（虛構）', skin: 'skin', top: 'red', skirt: 'g9', hair: 'long', hairC: 'gold', hat: 'beret', hatC: 'g7', r: 22, k: .92 },
        v7e1_lenaM: { name: '長大的莉娜（虛構）', skin: 'skin', top: 'red', bottom: 'g9', leg: 'g9', hair: 'long', hairC: 'gold', r: 19, k: 1.12 },
        v7e1_oma: { name: '奶奶（虛構）', skin: 'skin', robe: 'purple', trim: 'cream', hair: 'bun', hairC: 'paper3', r: 19, k: 1.06 },
        v7e1_guard: { name: '東德邊防士兵', skin: 'skin', top: 'g8', bottom: 'g9', leg: 'g9', hair: 'man', hat: 'beret', hatC: 'g9', r: 19, k: 1.14 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v7e1 = {
    id: 'v7e1', vol: '第 7 冊 現代世界', volNo: 7, ep: 1, title: '一道牆，兩個世界', next: '我有一個夢',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！小禾說，房間中間那扇畫出來的門，你可以隨時走過來。',
    note: '阿凱、小禾、莉娜和她的奶奶是虛構的角色，這一話沒有讓真實人物說話。街道、鐵絲網、圍牆、布蘭登堡門和 1989 年那一晚的畫面都是想像圖；圍牆的樣子是簡化畫法。冷戰從哪一年算起，學者有不同的算法；結束通常算到 1991 年蘇聯解體。',
    curriculum: '國中社會會再學到：冷戰與柏林圍牆',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'paper3', near: 'g5' },
      back: [
        { k: 'v7e1_wallseg', x: 160, y: 900, W: 320, H: 150, graf: 1 },
        { k: 'v7e1_gate', x: 640, y: 880, W: 260, H: 200 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'g3', hz: .72, window: [.62, .1, .18, .34], winC: 'g2' }, shot: '中景：兄妹的房間，地上貼了一條膠帶，阿凱宣布國界',
          back: [
            { k: 'v7e1_door', x: 90, y: 246 },
            { k: 'shelf', x: 730, y: 246, W: 90, H: 170 },
            { k: 'v7e1_tape', x: 400, y: 245, L: 96 }
          ],
          actors: [
            { c: 'kai', x: 250, y: 330, s: 1, pose: 'fists', expr: 'shout', look: .5 },
            { c: 'he', x: 570, y: 332, s: 1.05, pose: 'hold', expr: 'mad', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這條線是國界！\n不准過來！', x: 30, y: 14, w: 236, tail: [242, 132] },
            { t: '可是門在你那邊，\n我要怎麼出去？', x: 440, y: 18, w: 260, tail: [566, 150] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sky: 'paper2', sun: false, hz: .5, far: false, ground: 'g3', near: 'g5' }, shot: '中景：社區中庭的搖搖車，小禾先投了 10 元，阿凱追下樓',
          back: [
            { k: 'building', door: 1, x: 262, y: 343, W: 500, H: 250 },
            { k: 'tree', kind: 'round', x: 470, y: 380, H: 150 },
            { k: 'car', x: 250, y: 560, s: .9 }
          ],
          actors: [
            { c: 'he', x: 430, y: 600, s: 1.05, pose: 'offer', expr: 'mad', flip: 1, look: -.3 },
            { c: 'kai', x: 110, y: 668, s: 1.12, pose: 'run', expr: 'yell', sweat: 1, look: .5 }
          ],
          bubbles: [
            { t: '我去坐搖搖車，\n不跟你玩了。', x: 262, y: 280, w: 244, tail: [420, 420] },
            { t: '等我！\n我也要坐！', x: 14, y: 360, w: 180, kind: 'shout', fs: 25, tail: [104, 470] }
          ],
          sfx: [{ t: '叮！', x: 210, y: 420, fs: 44, rot: 8 }] },
        { scene: 'coin', sceneOpt: { year: '1961', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1961',
          actors: [{ c: 'kai', x: 118, y: 860, s: 1.8, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '倒轉了！\n停在 1961！', x: 18, y: 430, w: 206, fs: 25, tail: [104, 540] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#D9DED2', sun: [.82, .1], hz: .44, far: false, ground: 'paper3', near: 'brick2' }, shot: '滿版遠景：1961 年 8 月 13 日清晨的柏林街道，正中間拉起了鐵絲網，兩邊的人隔著網子揮手',
          back: [
            { k: 'building', door: 1, x: 120, y: 470, W: 260, H: 300, f: 'brick3' },
            { k: 'building', door: 1, x: 660, y: 470, W: 280, H: 280, f: 'paper2' },
            { k: 'crowd', x: 400, y: 560, n: 12, W: 720, s: .7, op: .5 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          props: [{ k: 'v7e1_wire', x: 390, y: 640, W: 800, H: 110 }],
          actors: [
            { c: 'v7e1_guard', x: 300, y: 596, s: .7, pose: 'stand', expr: 'calm' },
            { c: 'v7e1_guard', x: 520, y: 598, s: .7, pose: 'stand', expr: 'worry', flip: 1 },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '1961 年 8 月 13 日，柏林', en: 'BERLIN · 13 AUG 1961', x: 0, y: 18 },
            { t: '第二次世界大戰以後，柏林被分成東、西兩邊。這天一早，界線上已經拉好了鐵絲網。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：柏林。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '街上怎麼\n拉起鐵絲網？', x: 334, y: 664, w: 196, tail: [460, 770] },
            { t: '兩邊的人\n隔著網子揮手……', x: 544, y: 712, w: 230, tail: [618, 810], fs: 23 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sky: '#D9DED2', sun: false, hz: .5, far: false, ground: 'paper3' }, shot: '中景：莉娜對著網子另一邊的奶奶揮手，阿凱想跨過去',
          back: [
            { k: 'v7e1_wire', x: 390, y: 372, W: 800, H: 100 }
          ],
          actors: [
            { c: 'v7e1_oma', x: 650, y: 336, s: .72, pose: 'wave', expr: 'worry', flip: 1, look: -.4, behind: 1 },
            { c: 'he', x: 70, y: 458, s: .95, pose: 'scared', expr: 'shock', look: .6 },
            { c: 'kai', x: 210, y: 452, s: 1, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v7e1_lena', x: 450, y: 456, s: 1.05, pose: 'wave', expr: 'worry', look: .6 }
          ],
          bubbles: [
            { t: '一條線而已，\n跨過去就好啦！', x: 96, y: 28, w: 240, tail: [232, 266] },
            { t: '不行！跨過去\n會被抓走的！', x: 360, y: 40, w: 246, kind: 'shout', fs: 25, tail: [454, 270] },
            { t: '莉娜——！', x: 616, y: 112, w: 150, fs: 22, tail: [646, 200] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格特寫：莉娜眼眶紅紅的',
          actors: [{ c: 'v7e1_lena', x: 150, y: 548, s: 1.25, pose: 'stand', expr: 'worry', look: -.2 }],
          bubbles: [{ t: '奶奶住對面。\n昨天我還能\n坐電車去看她。', x: 14, y: 60, w: 274, fs: 24, tail: [150, 290] }],
          tag: { t: '東柏林的小孩：莉娜（虛構）', left: 8 } },
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .8 }, shot: '中景：小禾在筆記本寫字，阿凱低頭想',
          actors: [
            { c: 'he', x: 120, y: 540, s: 1.15, pose: 'hold', expr: 'worry', hold: 'notebook', look: .5 },
            { c: 'kai', x: 340, y: 540, s: 1.15, pose: 'think', expr: 'think', flip: 1, look: .4 }
          ],
          bubbles: [
            { t: '一條線，\n就把一家人\n分開了。', x: 14, y: 30, w: 200, fs: 24, tail: [124, 330] },
            { t: '……我們房間那條，\n好像沒那麼好笑了。', x: 186, y: 168, w: 268, fs: 23, tail: [330, 316] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#CFD6CC', sun: [.2, .12], hz: .5, far: false, ground: 'paper3', near: 'g5' }, shot: '滿版：快轉到 1970 年代，鐵絲網變成水泥牆，擋在布蘭登堡門前面；西邊的牆上滿是塗鴉',
          back: [
            { k: 'v7e1_gate', x: 520, y: 540, W: 380, H: 250 },
            { k: 'tower', x: 120, y: 520, W: 46, H: 190, f: 'paper3' },
            { k: 'v7e1_wallseg', x: 390, y: 650, W: 800, H: 150, graf: 1 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'point', expr: 'shock', look: -.4 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'lookup', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '後來，鐵絲網換成了水泥牆。', en: 'THE BERLIN WALL · 1970s', x: 0, y: 18 },
            { t: '整圈圍住西柏林的牆和圍欄，大約有 155 公里長。牆邊守得很嚴，想偷偷越過去非常危險。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——快轉十年。\n現在是 1970 年代。', x: 14, y: 716, w: 300, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '鐵絲網\n變成水泥牆了！', x: 322, y: 650, w: 226, tail: [470, 756], fs: 24 },
            { t: '那座大門……\n被擋在牆後面。', x: 556, y: 720, w: 210, tail: [622, 820], fs: 24 }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v7e1_faces', shot: '細長大格，上下分兩半：上面是西邊那一面（滿是塗鴉，兄妹站著看），下面是東邊那一面（空地、瞭望塔，沒有人）',
          actors: [
            { c: 'kai', x: 90, y: 474, s: .95, pose: 'point', expr: 'awe', look: .3 },
            { c: 'he', x: 256, y: 478, s: .95, pose: 'lookup', expr: 'think', hold: 'notebook', flip: 1, look: .3 }
          ],
          caption: [
            { t: '西柏林這一面：\n大家在牆上畫畫、寫字。', x: 0, y: 14, w: 330 },
            { t: '東柏林那一面：\n牆前面是空地和瞭望塔，\n不准人靠近。', x: 0, y: 560, w: 330, dark: false }
          ],
          bubbles: [
            { t: '這面\n畫滿了！', x: 8, y: 116, w: 150, fs: 24, tail: [84, 280] },
            { t: '另一面\n一定很安靜。', x: 166, y: 116, w: 172, fs: 23, tail: [250, 300] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：冷戰是什麼、為什麼要蓋牆',
          caption: [{ t: '冷戰：兩大陣營比來比去', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '二次大戰後，德國分成兩個：\n西德跟美國這一邊，\n東德跟蘇聯這一邊。' },
            { icon: 'scale', y: 344, t: '美國和蘇聯都覺得自己的制度\n比較好，也怕對方變強。比武器、\n比科技，但沒有直接開打。' },
            { icon: 'road', y: 610, t: '很多東德人搬去西邊。東德政府說\n牆是為了保護國家；西邊的人\n說牆把人關住了。' }
          ],
          bubbles: [{ t: '兩邊都有自己的說法，\n可是被分開的是一家人。', x: 24, y: 900, w: 374, fs: 24 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'night', sceneOpt: { sky: 'night', moon: [.88, .2], ground: 'g9' }, shot: '矮寬格：1989 年 11 月 9 日晚上，邊界的柵欄抬起來，長大的莉娜擠在人群裡',
          back: [
            { k: 'crowd', x: 400, y: 356, n: 14, W: 760, s: .8, op: .55 },
            { k: 'v7e1_boom', x: 520, y: 350, up: 62, L: 200 }
          ],
          actors: [
            { c: 'kai', x: 90, y: 384, s: .82, pose: 'scared',expr: 'shock', look: .8 },
            { c: 'he', x: 186, y: 388, s: .82, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v7e1_lenaM', x: 640, y: 390, s: .9, pose: 'wave', expr: 'happy', flip: 1, look: .6 }
          ],
          caption: [{ t: '1989 年 11 月 9 日晚上', en: '9 NOV 1989', x: 0, y: 14, w: 300 }],
          bubbles: [
            { t: '邊界開了！\n我可以去看奶奶家了！', x: 420, y: 18, w: 300, kind: 'shout', fs: 24, tail: [630, 200] },
            { t: '莉娜？！\n你長這麼大了！', x: 20, y: 118, w: 200, fs: 23, tail: [92, 222] },
            { t: '我們只坐了\n一下下車……', x: 232, y: 140, w: 180, fs: 23, tail: [196, 248] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8DCC0', sun: [.84, .2], hz: .5, far: false, ground: 'paper3', near: 'brick3' }, shot: '收尾大格：隔天早上，大家坐在牆頂、敲下小塊牆；莉娜送兄妹一小塊',
          back: [
            { k: 'v7e1_gate', x: 560, y: 330, W: 320, H: 210 },
            { k: 'v7e1_wallseg', x: 390, y: 400, W: 800, H: 110, graf: 1 },
            { k: 'crowd', x: 400, y: 282, n: 12, W: 620, s: .6, op: .7 },
            { k: 'car', x: 690, y: 600, s: .75 }
          ],
          actors: [
            { c: 'v7e1_lenaM', x: 110, y: 566, s: 1.1, pose: 'offer', expr: 'happy', hold: 'v7e1_chunk', look: .6 },
            { c: 'kai', x: 300, y: 570, s: 1.15, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 480, y: 576, s: 1.1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '東歐很多人上街要求改變，東德只好開放出國。\n一年後，1990 年 10 月 3 日，東西德統一了。', x: 16, y: 16, w: 560 },
            { t: '下一話：我有一個夢', x: 288, y: 576 }
          ],
          bubbles: [
            { t: '送你們\n一小塊牆，\n當作紀念。', x: 14, y: 176, w: 190, fs: 23, tail: [110, 346] },
            { t: '回家我就\n撕掉膠帶！', x: 222, y: 206, w: 184, fs: 23, tail: [300, 368] },
            { t: '我要在中間\n畫一扇門。', x: 420, y: 232, w: 180, fs: 23, tail: [482, 400] },
            { t: '嗶嗶——\n下一站，\n華盛頓！', x: 620, y: 140, w: 146, kind: 'car', fs: 22, tail: [690, 492] }
          ] }
      ] }
    ],
    recap: [
      { h: '冷戰', t: '二次大戰後，美國和蘇聯變成兩大陣營。兩邊都覺得自己的制度比較好、也怕對方變強，比武器、比科技，但沒有直接開打，所以叫冷戰。1991 年蘇聯解體，冷戰才結束。' },
      { h: '一個德國變兩個', t: '1949 年，德國分成西德（跟美國這一邊）和東德（跟蘇聯這一邊）。柏林在東德裡面，也被分成東柏林和西柏林。' },
      { h: '柏林圍牆', t: '1961 年 8 月 13 日，東德沿著界線拉起鐵絲網，後來換成水泥牆，圍住西柏林大約 155 公里。很多家人、朋友被分開，從 1961 到 1989 年，至少 140 人在牆邊失去生命。' },
      { h: '兩邊的說法', t: '蓋牆以前，已經有很多東德人搬去西邊。東德政府說牆是為了保護國家；西邊的人說牆把人關住了。' },
      { h: '牆倒了、德國統一', t: '1989 年，東歐很多人上街要求改變。11 月 9 日晚上，東德宣布開放出國，邊界打開。1990 年 10 月 3 日，東西德統一成一個國家。' }
    ],
    map: {
      bounds: { lon: [3, 24], lat: [47, 56] },
      cap: '綠色是 1949～1990 年的東德（簡化畫法）。紅點是柏林：它在東德裡面，西柏林像一座被圍起來的小島。海岸和國界都是簡化的樣子。',
      alt: '德國一帶地圖：東德在東邊（綠色），柏林在東德中間偏北，西邊是西德，北邊是北海和波羅的海',
      areas: [{ pts: [[54.3, 10.9], [54.6, 13.6], [53.9, 14.3], [52.8, 14.2], [52.4, 14.6], [51.0, 15.0], [50.3, 12.2], [50.4, 11.2], [50.6, 10.0], [51.6, 10.6], [52.4, 10.8], [53.4, 10.6]], f: 'g3', op: .8 }],
      labels: [
        { t: '東德', lat: 51.4, lon: 12.6, size: 28, f: 'g9' },
        { t: '西德', lat: 50.3, lon: 8.0, size: 28, f: 'wood' },
        { t: '北海', lat: 55.0, lon: 5.4, size: 22, f: 'cream' },
        { t: '波羅的海', lat: 55.3, lon: 16.6, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '柏林', lat: 52.52, lon: 13.4, main: 1, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：柏林圍牆立了 28 年，從圍牆倒下到今天，也已經過了三十多年。',
      items: [
        { y: 1949, when: '西元 1949 年', t: '德國分成\n西德、東德', side: 'u', w: 160 },
        { y: 1961, when: '西元 1961 年', t: '8 月 13 日\n開始蓋圍牆', side: 'd', main: 1, w: 170 },
        { y: 1989, when: '西元 1989 年', t: '11 月 9 日\n邊界打開', side: 'u', w: 160 },
        { y: 1990, when: '西元 1990 年', t: '10 月 3 日\n東西德統一', side: 'd', w: 160 },
        { y: 2026, when: '今天', t: '剩下的一段牆\n變成紀念館', side: 'u', w: 170 }
      ]
    },
    sources: [
      '柏林圍牆基金會（Stiftung Berliner Mauer）〈The Berlin Wall〉（1961 年 8 月 13 日由東德執政黨蓋牆，為了阻止人往西邊走；圍住西柏林 155 公里；1961～1989 年至少 140 人因邊界制度死亡；1989 年 11 月 9 日倒下；戈巴契夫的改革、匈牙利拆邊界圍籬）',
      '德國聯邦政府〈A dark day for Germany〉（1961 年 8 月 13 日星期天清晨拉起鐵絲網、拆斷東西向的路；穿過柏林市區約 43 公里）',
      '柏林市政府 berlin.de〈Opening and fall of the Berlin Wall〉（1989 年 11 月 9 日晚上記者會宣布新的出國規定、萊比錫和柏林等地有人上街、邊境關口當晚打開、布蘭登堡門口 12 月 22 日開放）',
      'deutschland.de〈Day of German Unity〉〈30 German years 1950–1980〉（1949 年 5 月 23 日西德、10 月 7 日東德成立；1990 年 10 月 3 日統一）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '柏林開始拉鐵絲網、蓋圍牆，是哪一年？', opts: ['1961 年', '1945 年', '1989 年', '1990 年'], a: 0, why: '1961 年 8 月 13 日，東德沿著界線拉起鐵絲網，後來換成水泥牆。' },
      { id: 'q2', d: 1, type: 'tf', q: '冷戰的時候，美國和蘇聯兩國的大軍直接打了一場大戰。', a: false, why: '不對。兩邊比武器、比科技、互相提防，但沒有直接開打，所以叫「冷」戰。' },
      { id: 'q3', d: 2, type: 'mc', q: '1989 年 11 月 9 日晚上，柏林發生了什麼事？', opts: ['邊界打開了，很多人湧到另一邊', '東西德就在這一天統一成一國', '東德政府開始拉鐵絲網分開城市', '美國和蘇聯的軍隊在柏林開打'], a: 0, why: '那天晚上東德宣布開放出國，邊界打開；正式統一是隔年 1990 年 10 月 3 日。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['德國分成西德和東德', '柏林拉起鐵絲網、蓋起圍牆', '柏林圍牆的邊界打開', '東西德統一成一個國家'], why: '1949 年分成兩個德國；1961 年蓋牆；1989 年邊界打開；1990 年統一。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「柏林圍牆是美國蓋的，因為美國是壞人。」根據這一話，哪個說法最正確？', opts: ['不對，牆是東德蓋的，兩邊各有說法', '對，美國想把東柏林的人全部關起來', '不對，牆是西德為了擋觀光客蓋的', '對，冷戰時只有美國一邊在比賽'], a: 0, why: '牆是東德政府蓋的。東德說是為了保護國家，西邊的人說牆把人關住了。冷戰是兩個陣營互相比賽，不是只有一邊。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
