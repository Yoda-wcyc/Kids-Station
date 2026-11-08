/* 世界史漫畫 第 6 冊 帝國與兩次世界大戰・第 1 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：鴉片戰爭與不平等條約。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, cap } = K;
    // 清朝官員的帽子（頂上紅色帽珠、紅纓）
    const qingHat = () => path('M-26 -8 Q-24 -30 0 -32 Q24 -30 26 -8 Q0 -16 -26 -8Z', C.ink) + path('M-20 -18 Q0 -26 20 -18 Q10 -30 0 -31 Q-10 -30 -20 -18Z', C.red) + circ(0, -34, 5, C.red);
    // 一排十三行洋行（只畫樣子：白牆、拱廊、旗桿；旗子是簡化的色塊，不是真的國旗）
    const factories = (x0, y, W, n, H) => {
      let s = ''; const bw = W / n;
      for (let i = 0; i < n; i++) {
        const x = x0 + i * bw, hh = H * (.82 + (i % 3) * .09), f = i % 2 ? C.cream : C.paper2;
        s += both(rect(x, y - hh, bw - 4, hh, f));
        for (let j = 0; j < 3; j++) s += path(`M${x + 8 + j * (bw - 12) / 3} ${y} L${x + 8 + j * (bw - 12) / 3} ${y - hh * .3} Q${x + 8 + j * (bw - 12) / 3 + (bw - 28) / 6} ${y - hh * .42} ${x + 8 + (j + 1) * (bw - 12) / 3 - 6} ${y - hh * .3} L${x + 8 + (j + 1) * (bw - 12) / 3 - 6} ${y}Z`, C.g9, 'opacity=".55"');
        s += rect(x + 10, y - hh * .78, bw * .2, hh * .16, C.g9, 2) + rect(x + bw * .55, y - hh * .78, bw * .2, hh * .16, C.g9, 2);
        if (i % 2 === 0) s += rect(x + bw * .5 - 2, y - hh - 70, 4, 70, C.wood) + rect(x + bw * .5 + 2, y - hh - 70, 40, 24, [C.red, C.blue, C.gold, C.g7][(i / 2) % 4]);
      }
      return s;
    };
    A.extend({
      parts: {
        v6e1_queue: () => path('M-16 -2 Q-26 20 -20 52 Q-18 60 -14 52 Q-18 22 -8 2Z', C.ink),   // 清朝男子的辮子（畫在頭後）
        v6e1_qinghat: qingHat
      },
      cast: {
        v6e1_afu: { name: '阿福（虛構）', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'skin', shoe: 'ink', hair: 'short', hairBack: 'v6e1_queue', r: 22, k: .94 },
        v6e1_lin: { name: '林則徐', real: 1, skin: 'skin', robe: 'blue', trim: 'g9', hair: 'short', hat: 'v6e1_qinghat', beard: 1, r: 19, k: 1.18 },
        v6e1_trader: { name: '英國商人', skin: 'skin', top: '#3B3F4A', bottom: '#2A2D33', leg: '#2A2D33', hair: 'short', hairC: 'wood', hat: 'tophat', r: 19, k: 1.16 },
        v6e1_porter: { name: '挑夫', skin: 'skinB', top: 'paper3', bottom: 'wood', leg: 'skinB', shoe: 'wood', hair: 'short', hairBack: 'v6e1_queue', hat: 'straw', r: 19, k: 1.1 },
        v6e1_porter2: { name: '工人', skin: 'skinC', top: 'cream', bottom: 'g7', leg: 'skinC', shoe: 'wood', hair: 'short', hairBack: 'v6e1_queue', r: 19, k: 1.12 }
      },
      props: {
        // 茶葉箱（貼紅紙「茶」字）
        v6e1_teabox: x => K.place(x, both(rect(-34, -62, 68, 62, C.clay2, 3), 'cm-warm') + rect(-34, -36, 68, 5, C.wood) + rect(-14, -56, 28, 30, C.red, 2) + txt(0, -34, '茶', 20, C.cream)),
        // 鴉片箱（只畫木箱，不畫煙具）
        v6e1_chest: x => K.place(x, both(rect(-36, -56, 72, 56, C.wood, 3), 'cm-warm') + rect(-36, -40, 72, 5, C.ink, 0, 'opacity=".35"') + rect(-36, -18, 72, 5, C.ink, 0, 'opacity=".35"')),
        // 銀元一小堆
        v6e1_silver: x => K.place(x, ell(0, -8, 30, 10, '#B7BDBF') + ell(-10, -18, 18, 7, '#D7DCDD') + ell(12, -20, 16, 6, '#CDD3D4') + ell(0, -30, 14, 5, '#E4E8E8')),
        // 虎門的銷煙池（海水、鹽、石灰；冒的是白煙）
        v6e1_pool: x => K.place(x, both(rect(-150, -30, 300, 30, C.brick2, 4), 'cm-warm') + rect(-140, -26, 280, 20, '#B9C9C2') + K.puff(-80, -40, 18, C.cream) + K.puff(10, -46, 22, C.cream) + K.puff(90, -40, 16, C.cream))
      },
      icons: {
        v6e1_ban() { return rect(0, 0, 120, 90, C.paper) + both(rect(30, 12, 60, 66, C.wood, 6), 'cm-warm') + circ(60, 45, 30, C.red) + circ(60, 45, 23, C.paper) + K.cap(40, 25, 80, 65, 8, C.red); }
      },
      scenes: {
        // 捷運站出口：路邊的搖搖車（車畫在 back[]）
        v6e1_exit(w, h) {
          let s = rect(0, 0, w, h, C.sky) + rect(0, h * .55, w, h * .45, C.paper3) + rect(0, h * .55, w, 10, 'rgba(21,23,20,.12)');
          s += both(rect(w * .42, h * .08, w * .58, h * .48, C.g7, 6)) + path(`M${w * .42} ${h * .08} Q${w * .71} ${-h * .04} ${w} ${h * .08}Z`, C.g9) + rect(w * .56, h * .22, w * .3, h * .34, C.ink, 4) + rect(w * .5, h * .12, w * .42, h * .07, C.cream, 6) + txt(w * .71, h * .175, '捷運站 出口 2', 26, C.g9);
          return { bg: s };
        },
        // 1840 年的廣州：珠江邊的十三行洋行、很多船
        v6e1_canton(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .82, h * .1, 200, 'url(#cm-sun)') + circ(w * .82, h * .1, 40, '#FFF8DC');
          s += path(`M0 ${h * .4} Q${w * .3} ${h * .34} ${w * .6} ${h * .38} T${w} ${h * .36} L${w} ${h * .5} L0 ${h * .5}Z`, C.g3);
          s += rect(0, h * .46, w, h * .06, C.brick3) + factories(10, h * .48, w - 20, 9, h * .16);
          s += rect(0, h * .5, w, h * .5, C.g5);
          for (let i = 0; i < 16; i++) { const yy = h * (.54 + (i * .37) % 1 * .4), xx = (i * 151) % w; s += rect(xx, yy, 40 + (yy / h) * 70, 4, C.g2, 2, 'opacity=".5"'); }
          return { bg: s };
        },
        // 茶行的倉庫
        v6e1_store(w, h) {
          let s = rect(0, 0, w, h * .74, C.wood) + rect(0, h * .74, w, h * .26, C.paper3) + rect(0, h * .74, w, 6, 'rgba(21,23,20,.18)');
          for (let x = 0; x < w; x += 60) s += rect(x, 0, 4, h * .74, 'rgba(0,0,0,.15)');
          s += rect(w * .62, h * .1, w * .3, h * .3, C.gold, 3, 'opacity=".75"');
          return { bg: s };
        },
        // 細長圖解：茶、白銀、鴉片怎麼流
        v6e1_flow(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const box = (y, t, f) => both(rect(40, y, w - 80, 70, f, 12)) + txt(w / 2, y + 47, t, 30, C.cream);
          const arr = (x, y1, y2, f, t) => { const d = y2 > y1 ? 1 : -1; return rect(x - 7, Math.min(y1, y2) + (d < 0 ? 20 : 0), 14, Math.abs(y2 - y1) - 20, f) + poly(`${x - 20},${y2 - d * 24} ${x + 20},${y2 - d * 24} ${x},${y2}`, f) + txt(x, (y1 + y2) / 2 + 8, t, 22, C.ink); };
          const sec = (y0, era, a, b, fa, fb, ta) => txt(w / 2, y0, era, 24, C.g7) + box(y0 + 14, a, fa) + box(y0 + 194, b, fb)
            + arr(w * .3, ta ? y0 + 84 : y0 + 194, ta ? y0 + 194 : y0 + 84, ta ? C.wood : C.g7, '') + rect(w * .3 - 34, y0 + 124, 68, 30, C.cream, 6) + txt(w * .3, y0 + 148, ta || '茶', 22, ta ? C.wood : C.g7)
            + arr(w * .7, ta ? y0 + 194 : y0 + 84, ta ? y0 + 84 : y0 + 194, '#9AA3A5', '') + rect(w * .7 - 34, y0 + 124, 68, 30, C.cream, 6) + txt(w * .7, y0 + 148, '白銀', 22, C.ink);
          s += sec(112, '① 1700 年代', '英國', '中國', C.blue, C.red) + sec(406, '② 1800 年代', '印度', '中國', C.g7, C.red, '鴉片');
          return { bg: s };
        },
        // 虎門海邊
        v6e1_humen(w, h) {
          let s = rect(0, 0, w, h, C.sky) + rect(0, h * .34, w, h * .14, C.g5) + path(`M0 ${h * .36} Q${w * .3} ${h * .3} ${w * .55} ${h * .35} L${w * .55} ${h * .38} L0 ${h * .38}Z`, C.g3);
          s += rect(0, h * .46, w, h * .54, C.sand) + rect(0, h * .46, w, 8, 'rgba(110,80,40,.18)');
          return { bg: s };
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v6e1 = {
    id: 'v6e1', vol: '第 6 冊 帝國與兩次世界大戰', volNo: 6, ep: 1, title: '茶、白銀和鴉片', next: '黑船來了',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說這次手遊只玩半小時（他還設了鬧鐘）。',
    note: '阿凱、小禾、阿福、英國商人和挑夫是虛構的角色；林則徐的話改編自他 1839 年寫給英國女王的信，不是他當面說的話（這封信最後有沒有送到女王手上，學者有不同說法）。十三行、虎門銷煙池和林則徐的樣子都是想像圖；洋行上的旗子是簡化的色塊，不是真的國旗。銷毀的鴉片數量，各種資料寫法不同（大約兩萬箱）。',
    curriculum: '國中社會會再學到：鴉片戰爭與不平等條約',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g7', near: 'g5' },
      back: [
        { k: 'ship', kind: 'junk', x: 150, y: 930, s: .7, sail: 'clay3' },
        { k: 'v6e1_teabox', x: 640, y: 960, s: 1.3 },
        { k: 'v6e1_teabox', x: 720, y: 960, s: 1.1 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'mrt', shot: '中景：捷運車廂裡，阿凱低頭打手遊，小禾指著路線圖',
          actors: [
            { c: 'kai', x: 250, y: 330, s: 1, pose: 'hold', expr: 'grin', hold: 'phone', look: .3 },
            { c: 'he', x: 600, y: 332, s: 1.05, pose: 'point', expr: 'shout', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '再一關就好……\n再一關！', x: 20, y: 40, w: 220, tail: [236, 124] },
            { t: '哥！我們已經\n坐過頭三站了！', x: 430, y: 40, w: 230, kind: 'shout', fs: 24, tail: [592, 132] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'v6e1_exit', shot: '大格：捷運站出口，阿凱一邊滑手機一邊把 10 元投進搖搖車',
          back: [{ k: 'car', x: 150, y: 650, s: 1 }],
          actors: [
            { c: 'kai', x: 340, y: 650, s: 1.1, pose: 'offer', expr: 'happy', hold: 'phone', flip: 1, look: .5 },
            { c: 'he', x: 460, y: 664, s: 1, pose: 'fists', expr: 'mad', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '下車先玩一下\n搖搖車，投 10 元！', x: 14, y: 230, w: 250, fs: 24, tail: [320, 440] },
            { t: '你什麼都\n停不下來耶！', x: 290, y: 250, w: 210, fs: 24, tail: [450, 490] }
          ],
          sfx: [{ t: '叮！', x: 40, y: 430, fs: 54, rot: -10 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1840 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1840',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！倒轉了！\n停在 1840！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v6e1_canton', shot: '滿版遠景：珠江邊一排掛著旗子的洋行，江上滿是中國帆船和外國大帆船',
          back: [
            { k: 'ship', kind: 'tall', x: 620, y: 640, s: .7, sail: 'cream' },
            { k: 'ship', kind: 'junk', x: 220, y: 690, s: .8, sail: 'clay3' },
            { k: 'ship', kind: 'junk', x: 460, y: 600, s: .45, sail: 'clay3' },
            { k: 'v6e1_teabox', x: 690, y: 1010, s: 1.1 },
            { k: 'v6e1_teabox', x: 760, y: 1010, s: 1 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 600, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 186 年前，廣州的珠江邊', en: 'CANTON · 1840', x: 0, y: 18 },
            { t: '那時候清朝只准外國商人在廣州做生意。江邊那一排外國商館，叫做「十三行」。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：廣州。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好多船！\n這裡好熱鬧！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '那排房子\n掛著旗子！', x: 566, y: 700, w: 196, tail: [604, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v6e1_store', shot: '中景：茶行倉庫，阿凱打開茶葉箱聞，打了個大噴嚏',
          back: [
            { k: 'v6e1_teabox', x: 470, y: 420, s: 1.1 }, { k: 'v6e1_teabox', x: 546, y: 420, s: 1.1 }, { k: 'v6e1_teabox', x: 508, y: 352, s: 1.1 },
            { k: 'v6e1_teabox', x: 730, y: 430, s: 1.2 }
          ],
          actors: [
            { c: 'kai', x: 230, y: 430, s: 1.05, pose: 'scared', expr: 'shock', look: .4, sweat: 1 },
            { c: 'he', x: 80, y: 440, s: .95, pose: 'hold', expr: 'smug', hold: 'notebook', look: .7 },
            { c: 'v6e1_afu', x: 640, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '好香……\n哈——啾！', x: 150, y: 40, w: 200, tail: [240, 236] },
            { t: '別對著茶打噴嚏！\n那是要賣到英國的！', x: 400, y: 30, w: 320, kind: 'shout', fs: 24, tail: [630, 238] }
          ],
          sfx: [{ t: '哈啾！', x: 330, y: 220, fs: 46, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：茶行學徒阿福抱著茶葉箱解釋',
          props: [{ k: 'v6e1_teabox', x: 214, y: 470, s: 1.1 }],
          actors: [{ c: 'v6e1_afu', x: 130, y: 548, s: 1.25, pose: 'carry', expr: 'happy', look: .2 }],
          bubbles: [{ t: '英國人超愛喝茶！\n一船一船買走，\n用白銀付錢。', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '茶行學徒：阿福（虛構）', left: 8 } },
        { scene: 'v6e1_store', shot: '中景：英國商人搖頭看著空錢袋，挑夫搬來一箱箱木箱',
          back: [{ k: 'v6e1_chest', x: 330, y: 520, s: 1 }, { k: 'v6e1_chest', x: 410, y: 520, s: 1 }, { k: 'v6e1_chest', x: 370, y: 464, s: 1 }],
          actors: [
            { c: 'v6e1_trader', x: 110, y: 530, s: .95, pose: 'think', expr: 'worry', look: .3 },
            { c: 'v6e1_porter', x: 260, y: 536, s: .9, pose: 'carry', expr: 'calm', flip: 1, hold: 'sack' }
          ],
          caption: [{ t: '後來，英國商人改從印度\n運「鴉片」來賣。', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '白銀一直付出去，\n得找別的東西換！', x: 10, y: 130, w: 250, fs: 23, tail: [110, 316] },
            { t: '鴉片是什麼？', x: 270, y: 150, w: 180, kind: 'think', fs: 23 }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v6e1_flow', shot: '細長圖解：先是茶換白銀，後來鴉片讓白銀流出中國',
          caption: [{ t: '東西和錢\n怎麼流？', x: 0, y: 14, w: 200 }],
          actors: [
            { c: 'kai', x: 80, y: 1034, s: 1.15, pose: 'think', expr: 'think', look: .6 },
            { c: 'v6e1_afu', x: 262, y: 1034, s: 1.15, pose: 'pointUp', expr: 'worry', flip: 1, look: -.4 }
          ],
          bubbles: [
            { t: '白銀反過來\n流走了？', x: 8, y: 694, w: 150, fs: 22, tail: [84, 806] },
            { t: '對！清朝的\n白銀越來越少。', x: 160, y: 694, w: 180, fs: 20, tail: [256, 806] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：鴉片為什麼可怕',
          caption: [{ t: '鴉片是什麼？', x: 0, y: 16 }],
          cards: [
            { icon: 'question', y: 80, t: '鴉片是一種會讓人上癮的毒品：\n吸了會想一直吸，停不下來，\n身體和家裡的錢都會被拖垮。' },
            { icon: 'v6e1_ban', y: 344, t: '清朝下令禁止鴉片，\n可是很多人偷偷走私，\n官員也管不住。' },
            { icon: 'coinI', y: 610, t: '到了 1830 年代末，\n一年運進中國的鴉片\n大約有四萬箱。' }
          ],
          bubbles: [{ t: '停不下來……\n跟我玩手遊有點像？', x: 34, y: 900, w: 354, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v6e1_humen', shot: '矮寬格：虎門海邊，林則徐看著工人把鴉片倒進池子',
          back: [{ k: 'v6e1_pool', x: 590, y: 392, s: .9 }, { k: 'v6e1_chest', x: 740, y: 392, s: .8 }],
          actors: [
            { c: 'kai', x: 60, y: 390, s: .9, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 150, y: 392, s: .9, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v6e1_porter2', x: 470, y: 392, s: .85, pose: 'carry', expr: 'calm', flip: 1, hold: 'sack' },
            { c: 'v6e1_lin', x: 300, y: 396, s: 1, pose: 'raise', expr: 'calm', look: .6 }
          ],
          caption: [{ t: '1839 年，林則徐在虎門\n把大約兩萬箱鴉片，跟鹽、\n石灰一起泡在池子裡毀掉。', x: 0, y: 14, w: 380 }],
          bubbles: [
            { t: '你們國家不准吸鴉片，\n為什麼要賣到我們這裡來？', x: 420, y: 100, w: 350, fs: 22, tail: [326, 196] }
          ],
          tag: { t: '林則徐的話：改編自他寫給英國女王的信', left: 400, top: 60 } },
        { scene: 'flat', sceneOpt: { c: 'g9' }, shot: '字卡格：鴉片戰爭與《南京條約》',
          caption: [{ t: '1840 年，英國派軍艦來，鴉片戰爭開始', x: 0, y: 16 }],
          cards: [
            { icon: 'ship', y: 90, x: 20, w: 370, t: '清朝打輸了。1842 年簽\n《南京條約》：香港島給英國，\n再多開四個港口給外國人。' },
            { icon: 'scale', y: 90, x: 400, w: 360, t: '後來的中國人把這種\n被逼著簽、對自己很吃虧的\n條約，叫做「不平等條約」。' }
          ],
          actors: [
            { c: 'kai', x: 120, y: 620, s: 1.3, pose: 'think', expr: 'worry', look: .5 },
            { c: 'he', x: 660, y: 624, s: 1.25, pose: 'hold', expr: 'calm', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '一打輸，\n就得答應這麼多……', x: 190, y: 340, w: 290, fs: 24, tail: [150, 400] },
            { t: '香港一直到 1997 年\n才回到中國。', x: 350, y: 470, w: 270, fs: 22, tail: [630, 450] }

          ] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'wood', floor: 'paper3', hz: .78 }, shot: '矮寬格：茶行裡，阿福和兄妹看著空蕩蕩的倉庫',
          back: [{ k: 'v6e1_teabox', x: 680, y: 312, s: 1 }],
          actors: [
            { c: 'v6e1_afu', x: 120, y: 380, s: 1, pose: 'think', expr: 'worry', look: .5 },
            { c: 'kai', x: 380, y: 384, s: 1, pose: 'think', expr: 'think', flip: 1, look: .6 },
            { c: 'he', x: 500, y: 388, s: .95, pose: 'hold', expr: 'calm', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '買賣本來是你情我願……\n可是賣讓人上癮的東西，\n就不公平了。', x: 10, y: 14, w: 330, fs: 23, tail: [140, 186] },
            { t: '而且打輸了，\n還要被逼著簽約……', x: 400, y: 30, w: 300, fs: 23, tail: [500, 196] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'g3', ground: 'g5', near: 'sand' }, shot: '收尾大格：傍晚的珠江邊，阿凱把手機收進口袋',
          back: [
            { k: 'ship', kind: 'junk', x: 520, y: 360, s: .6, sail: 'clay3' },
            { k: 'car', x: 650, y: 600, s: .7 }

          ],
          actors: [
            { c: 'v6e1_afu', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '聽說日本那邊，\n也有外國船要來……', x: 14, y: 170, w: 252, fs: 22, tail: [110, 300] },
            { t: '我決定了！手遊\n一天只玩半小時！', x: 272, y: 160, w: 250, fs: 22, tail: [284, 326] },
            { t: '我幫你\n設鬧鐘！', x: 528, y: 196, w: 150, fs: 23, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n江戶！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：黑船來了', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '茶和白銀', t: '1700 年代，英國人越來越愛喝中國的茶，大多用白銀付錢，白銀就一直流進中國。那時清朝只准外國商人在廣州做生意。' },
      { h: '鴉片走私', t: '英國商人後來改從印度運鴉片到中國賣。鴉片是會讓人上癮的毒品，清朝下令禁止，可是走私越來越多，換成中國的白銀流出去。' },
      { h: '林則徐與虎門銷煙', t: '1839 年，林則徐到廣州禁鴉片，在虎門把大約兩萬箱鴉片跟鹽、石灰泡在海邊的池子裡毀掉。他還寫信問英國女王：你們自己國家禁止鴉片，為什麼賣給我們？' },
      { h: '鴉片戰爭與《南京條約》', t: '1840 年英國派軍艦來，清朝打輸了。1842 年簽下《南京條約》：香港島給英國，另外再開四個港口。這種被逼著簽、很吃虧的條約，後來被叫做「不平等條約」。香港到 1997 年才回到中國。' }
    ],
    map: {
      bounds: { lon: [108, 126], lat: [20, 33] },
      cap: '紅點是廣州。《南京條約》開放的五個港口：廣州、廈門、福州、寧波、上海，香港島給了英國。海岸線是今天的樣子，簡化畫法。',
      alt: '中國東南沿海地圖：紅點廣州在南邊珠江口，旁邊是香港和虎門，沿著海岸往北是廈門、福州、寧波、上海，臺灣在廈門對面的海上',
      labels: [
        { t: '南海', lat: 20.8, lon: 115.5, size: 22, f: 'cream' },
        { t: '東海', lat: 28.6, lon: 124.0, size: 22, f: 'cream' },
        { t: '清朝', lat: 28.8, lon: 112.8, size: 30, f: 'g9' }
      ],
      cities: [
        { n: '廣州', lat: 23.13, lon: 113.26, main: 1, side: 'l', dy: -10 },
        { n: '虎門', lat: 22.82, lon: 113.67, side: 'r', dy: -12 },
        { n: '香港', lat: 22.28, lon: 114.17, side: 'r', dy: 14 },
        { n: '廈門', lat: 24.48, lon: 118.09, side: 'l' },
        { n: '福州', lat: 26.07, lon: 119.3, side: 'l' },
        { n: '寧波', lat: 29.87, lon: 121.54, side: 'l' },
        { n: '上海', lat: 31.23, lon: 121.47, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從虎門銷煙到香港回到中國，隔了一百五十多年。',
      items: [
        { y: 1839, when: '西元 1839 年', t: '林則徐在虎門\n毀掉鴉片', side: 'u', w: 170 },
        { y: 1840, when: '西元 1840～1842 年', t: '鴉片戰爭；\n簽《南京條約》', side: 'd', main: 1, w: 210 },
        { y: 1997, when: '西元 1997 年', t: '香港回到\n中國', side: 'u', w: 160 },
        { y: 2026, when: '今天', t: '香港是中國的\n特別行政區', side: 'd', w: 170 }

      ]
    },
    sources: [
      'MIT Visualizing Cultures〈The Opium War in Japanese and Chinese Art〉與〈Rise & Fall of the Canton Trade System〉（英國茶葉需求、用白銀買茶、從孟加拉運鴉片、戰前一年約四萬箱、林則徐 1839 年 3 月到廣州、戰爭 1839～1842）',
      '美國國會圖書館 Country Studies〈China: The Opium War, 1839-42〉（鴉片被禁、林則徐沒收並毀掉約兩萬箱、《南京條約》割讓香港、開放五口、「不平等條約」）',
      'Fordham University Modern History Sourcebook〈Lin Zexu: Letter to Queen Victoria, 1839〉（信中說英國本國嚴禁鴉片，為什麼賣毒品給中國）',
      '維基百科〈Destruction of opium at Humen〉〈Treaty of Nanking〉（只用來核對：1839 年 6 月 3 日開始、海水＋鹽＋石灰的池子；1842 年 8 月 29 日簽約、五個港口名字）'

    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1700 年代，英國人向中國大量買的是什麼？', opts: ['茶', '石油', '咖啡', '橡膠'], a: 0, why: '英國人越來越愛喝茶，一船一船向中國買茶，大多用白銀付錢。' },
      { id: 'q2', d: 1, type: 'tf', q: '1839 年在虎門毀掉大量鴉片的人是林則徐。', a: true, why: '對！林則徐奉命到廣州禁鴉片，在虎門海邊把大約兩萬箱鴉片跟鹽、石灰泡在池子裡毀掉。' },
      { id: 'q3', d: 2, type: 'mc', q: '鴉片走私越來越多以後，中國的白銀發生了什麼事？', opts: ['白銀反過來一直流出中國', '白銀變成英國送的禮物', '白銀全部被拿去蓋長城', '白銀變得比茶葉便宜很多'], a: 0, why: '本來是英國用白銀買茶，白銀流進中國；鴉片賣進來以後，換成中國的白銀流出去。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['英國人用白銀向中國買茶', '林則徐在虎門毀掉鴉片', '簽下《南京條約》，香港島給英國', '香港回到中國'], why: '1700 年代就在買茶；1839 年虎門銷煙；1842 年簽《南京條約》；香港到 1997 年才回到中國。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「只要兩邊都願意買賣，賣什麼都公平。」根據這一話，哪個說法最正確？', opts: ['不一定，賣讓人上癮的東西會害到買的人', '對，只要有人要買就一定公平', '對，打贏的國家可以決定什麼公平', '不一定，因為用白銀付錢的那一方一定吃虧'], a: 0, why: '鴉片會讓人上癮、停不下來，傷身體也拖垮家裡；英國又用戰爭逼清朝簽下吃虧的條約，這都不是公平的交易。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
