/* 世界史漫畫 第 4 冊 大航海與文藝復興・第 6 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：大航海時代的臺灣（荷蘭人在大員）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, place, cap } = K;
    const BR = '#B0604A', BR2 = '#8E4A38';
    // 熱蘭遮城：下層城牆＋四角稜堡，上層內城（紅磚），旗子只畫色條
    const fort = (W, H) => {
      let s = K.groundShadow(0, 4, W * .62, 12);
      s += both(rect(-W / 2, -H * .45, W, H * .45, BR)) + rect(-W / 2, -H * .45, W, 8, BR2);
      [-W / 2, W / 2].forEach(x => { s += both(poly(`${x - W * .08},0 ${x - W * .08},${-H * .5} ${x + W * .08},${-H * .5} ${x + W * .08},0`, BR)) + rect(x - W * .08, -H * .5, W * .16, 8, BR2); });
      s += both(rect(-W * .3, -H * .9, W * .6, H * .46, BR)) + rect(-W * .3, -H * .9, W * .6, 8, BR2);
      for (let x = -W * .3; x < W * .3 - 10; x += 26) s += rect(x, -H * .9 - 12, 14, 14, BR);
      for (let x = -W / 2 + 10; x < W / 2 - 10; x += 30) s += rect(x, -H * .45 - 10, 14, 12, BR);
      for (let i = 0; i < 4; i++) s += rect(-W * .24 + i * W * .14, -H * .78, W * .05, H * .1, C.ink, 3);
      s += path(`M${-W * .06} 0 L${-W * .06} ${-H * .24} Q0 ${-H * .32} ${W * .06} ${-H * .24} L${W * .06} 0Z`, C.ink);
      s += rect(-2, -H * 1.22, 4, H * .32, C.ink) + rect(2, -H * 1.22, W * .16, H * .05, '#D9822B') + rect(2, -H * 1.17, W * .16, H * .05, C.cream) + rect(2, -H * 1.12, W * .16, H * .05, C.blue);
      return s;
    };
    const hide = (x, y, k, f) => `<g transform="translate(${x} ${y}) scale(${k})">` + path('M-40 -10 Q-46 -26 -30 -30 Q-20 -40 0 -34 Q20 -40 30 -30 Q46 -26 40 -10 Q44 6 30 8 Q0 14 -30 8 Q-44 6 -40 -10Z', f || '#B98A55') + circ(-14, -14, 3, C.cream, 'opacity=".6"') + circ(8, -20, 3, C.cream, 'opacity=".6"') + circ(16, -4, 3, C.cream, 'opacity=".6"') + `</g>`;
    root.ComicArt.extend({
      scenes: {
        // 今天的安平：紅磚老城牆、老榕樹、遠方白色觀景塔
        v4e6_anping(w, h, o) {
          o = o || {};
          let s = rect(0, 0, w, h, o.sky ? K.col(o.sky) : '#D4E2D6') + circ(w * .86, h * .14, Math.min(w, h) * .26, 'url(#cm-sun)');
          s += rect(w * .7, h * .12, 50, h * .4, C.cream) + rect(w * .7 - 10, h * .1, 70, 18, C.red, 3) + poly(`${w * .7 - 10},${h * .1} ${w * .7 + 25},${h * .03} ${w * .7 + 60},${h * .1}`, C.red);
          s += rect(0, h * .55, w, h * .45, C.paper3);
          s += both(rect(w * .02, h * .26, w * .6, h * .3, BR)) + [0, 1, 2, 3, 4, 5].map(j => [0, 1, 2, 3, 4, 5, 6, 7].map(i => rect(w * .02 + i * w * .075 + (j % 2) * 18, h * .27 + j * h * .045, w * .06, h * .035, BR2, 2, 'opacity=".45"')).join('')).join('');
          s += path(`M${w * .44} ${h * .26} Q${w * .5} ${h * .4} ${w * .46} ${h * .56} L${w * .5} ${h * .56} Q${w * .54} ${h * .4} ${w * .48} ${h * .26}Z`, C.wood) + path(`M${w * .3} ${h * .3} Q${w * .38} ${h * .44} ${w * .36} ${h * .56} L${w * .38} ${h * .56} Q${w * .4} ${h * .42} ${w * .34} ${h * .3}Z`, C.wood, 'opacity=".8"');
          s += circ(w * .42, h * .14, h * .16, C.g7) + circ(w * .3, h * .2, h * .12, C.g9) + circ(w * .55, h * .19, h * .13, C.g9) + circ(w * .44, h * .1, h * .1, C.g5, 'opacity=".7"');
          return { bg: s };
        },
        // 1630 年左右的大員：內海、沙洲上的熱蘭遮城、漢人市街、船
        v4e6_tayouan(w, h, o) {
          o = o || {}; const sea = h * (o.sea || .32), land = h * (o.land || .5);
          let s = rect(0, 0, w, h, o.sky ? K.col(o.sky) : '#CFE0D6');
          if (o.sun !== false) s += circ(w * .82, h * .1, Math.min(w, h) * .26, 'url(#cm-sun)') + circ(w * .82, h * .1, 36, '#FFF8DC');
          s += rect(0, sea, w, land - sea, '#5FA393');
          for (let i = 0; i < 10; i++) s += rect((i * 149) % w, sea + (land - sea) * ((i * .37) % 1), 50, 4, C.g2, 2, 'opacity=".6"');
          s += K.prop({ k: 'ship', kind: 'tall', x: w * .14, y: sea + (land - sea) * .55, s: .32 * (o.sk || 1), f: 'wood', flag: 'red' }) + K.prop({ k: 'ship', kind: 'junk', x: w * .86, y: sea + (land - sea) * .6, s: .34 * (o.sk || 1), sail: 'clay3', flip: 1 });
          s += path(`M${w * .25} ${land} Q${w * .5} ${land - (land - sea) * .5} ${w * .8} ${land} Z`, '#EFE4C2');
          s += place({ x: w * .52, y: land - (land - sea) * .18, s: (o.fk || 1) }, fort(260, 220));
          s += rect(0, land, w, h - land, C.paper3);
          return { bg: s };
        },
        // 轉運站示意：中國 → 大員 → 日本
        v4e6_trade(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const node = (x, y, t, f) => circ(x, y, 46, f) + txt(x, y + 9, t, 24, C.cream);
          const arrow = (x1, y1, x2, y2) => { const a = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI, L = Math.hypot(x2 - x1, y2 - y1); return `<g transform="translate(${x1} ${y1}) rotate(${a.toFixed(1)})">` + rect(0, -5, L - 22, 10, C.red, 4) + poly(`${L - 26},-16 ${L},0 ${L - 26},16`, C.red) + `</g>`; };
          const A = [w * .2, h * .3], B = [w * .5, h * .54], J = [w * .8, h * .3];
          s += arrow(A[0] + 40, A[1] + 26, B[0] - 44, B[1] - 20) + arrow(B[0] + 44, B[1] - 20, J[0] - 40, J[1] + 26);
          s += node(A[0], A[1], '中國', C.g7) + node(B[0], B[1], '大員', C.red) + node(J[0], J[1], '日本', C.g7);
          s += txt(A[0], A[1] + 76, '生絲、瓷器', 20, C.wood) + txt(B[0], B[1] + 76, '鹿皮', 20, C.wood) + txt(J[0], J[1] + 76, '日本市場', 20, C.wood);
          s += hide(B[0] - 70, B[1] + 20, .6) + hide(B[0] + 72, B[1] + 18, .55, '#A87A48');
          return { bg: s };
        }
      },
      props: {
        v4e6_fort: x => place(x, fort(x.W || 260, x.H || 220)),
        v4e6_hides: x => place(x, hide(0, -40, 1) + hide(6, -26, 1.05, '#A87A48') + hide(-4, -12, 1.1)),
        // 甘蔗一束
        v4e6_cane: x => place(x, [-14, -4, 6, 16].map((dx, i) => rect(dx - 3, -120 + i * 4, 7, 120 - i * 4, C.g5) + [0, 1, 2, 3].map(j => rect(dx - 4, -100 + j * 26, 9, 3, C.g7)).join('') + path(`M${dx} ${-118 + i * 4} q-24 -14 -34 -4 q16 -4 34 8Z`, C.g6)).join('') + rect(-20, -60, 42, 8, C.wood, 3)),
        // 梅花鹿（朝右）
        v4e6_deer: x => { const f = '#B5733C'; let s = K.groundShadow(0, 3, 50, 6); [[-28, -54, -30], [-16, -54, -12], [22, -54, 24], [34, -54, 38]].forEach(([a, b, c]) => { s += cap(a, b, c, -4, 7, f) + rect(c - 4, -6, 8, 6, C.ink, 2); }); s += ell(0, -66, 46, 20, f) + path('M30 -74 L44 -118 L58 -114 L46 -64Z', f) + ell(58, -122, 16, 10, f) + circ(64, -124, 2.4, C.ink) + cap(50, -130, 44, -156, 3, C.wood) + cap(46, -146, 36, -156, 3, C.wood) + cap(58, -130, 66, -156, 3, C.wood); [[-24, -70], [-8, -76], [8, -68], [20, -76], [-14, -60]].forEach(([a, b]) => { s += circ(a, b, 3.4, C.cream); }); return place(x, s); },
        // 黑板上的羅馬字母
        v4e6_board: x => place(x, rect(-90, -140, 180, 120, C.wood, 4) + rect(-82, -132, 164, 104, C.g9) + txt(0, -88, 'A  B  C', 30, C.cream) + txt(0, -48, 'D  E  F', 30, C.cream))
      },
      holds: {
        v4e6_hideH: () => hide(0, -10, .6),
        v4e6_silkH: () => rect(-18, -26, 36, 30, C.gold, 4) + rect(-18, -14, 36, 4, C.red),
        v4e6_paperH: () => rect(-24, -40, 48, 62, C.cream, 2) + [0, 1, 2, 3].map(i => rect(-18, -32 + i * 9, 36 - (i % 2) * 10, 3, 'rgba(21,23,20,.3)')).join(''),
        v4e6_ledgerH: () => rect(-16, -24, 32, 30, C.g9, 2) + rect(-12, -20, 24, 22, C.cream)
      },
      icons: {
        v4e6_fortI() { return rect(0, 0, 120, 90, C.g3) + rect(0, 70, 120, 20, '#EFE4C2') + `<g transform="translate(60 76) scale(.3)">` + fort(260, 220) + `</g>`; },
        v4e6_caneI() { return rect(0, 0, 120, 90, C.paper) + `<g transform="translate(40 86) scale(.6)">` + [-14, -4, 6, 16].map(dx => rect(dx - 3, -120, 7, 120, C.g5) + [0, 1, 2, 3].map(j => rect(dx - 4, -100 + j * 26, 9, 3, C.g7)).join('')).join('') + `</g>` + [70, 92].map(x => ell(x, 64, 12, 8, C.cream) + ell(x, 60, 9, 4, C.paper3)).join(''); }
      },
      cast: {
        v4e6_teacher: { name: '老師', skin: 'skin', top: 'g5', bottom: 'ink', leg: 'ink', shoe: 'ink', hair: 'short', acc: ['glasses'], r: 20, k: 1.12 },
        v4e6_noka: { name: '諾卡（虛構）', skin: 'skinC', top: 'gold', skirt: 'g9', leg: 'skinC', shoe: 'wood', hair: 'short', hat: 'band', hatC: 'red', acc: ['earring'], r: 22, k: .95 },
        v4e6_hunter: { name: '西拉雅的獵人', skin: 'skinC', top: 'cream', skirt: 'wood', leg: 'skinC', shoe: 'wood', hair: 'long', hat: 'band', hatC: 'gold', acc: ['earring'], r: 19, k: 1.14 },
        v4e6_han: { name: '從福建來的漢人', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'g9', shoe: 'wood', hair: 'topknot', hat: 'straw', r: 19, k: 1.1 },
        v4e6_jp: { name: '日本商人', skin: 'skin', robe: 'g7', trim: 'ink', hair: 'topknot', r: 19, k: 1.1 },
        v4e6_dutch: { name: '荷蘭東印度公司的人', skin: 'skin', top: 'ink', bottom: 'ink', leg: 'ink', shoe: 'ink', hair: 'long', hairC: '#8A5A2B', hat: 'softCap', hatC: 'ink', acc: ['mustache'], r: 19, k: 1.18 },
        v4e6_pastor: { name: '荷蘭傳教士', skin: 'skin', robe: 'ink', trim: 'cream', hair: 'short', hairC: '#C9A54A', r: 19, k: 1.14 },
        v4e6_koxinga: { name: '鄭成功', real: 1, skin: 'skin', robe: 'g9', trim: 'gold', hat: 'capCN', beard: 1, r: 19, k: 1.24 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v4e6 = {
    id: 'v4e6', vol: '第 4 冊 大航海與文藝復興', volNo: 4, ep: 6, title: '福爾摩沙的大員', next: '望遠鏡裡的月亮',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！老師說：下次安平校外教學，導覽交給你。',
    note: '阿凱、小禾、老師、諾卡、獵人、漢人農夫、日本商人、荷蘭職員和傳教士是虛構的角色；鄭成功的話是依據他把大員改名「安平」的史事改編，不是他的原話。熱蘭遮城、大員市街、鄭成功的樣子都是想像圖；黑板上的字母只是樣子，不是真的西拉雅語。荷蘭人投降的日子，有的資料寫 1662 年 1 月、有的寫 2 月 1 日（曆法和簽約日不同），這裡寫「1662 年初」。',
    curriculum: '國中社會會再學到：大航海時代的臺灣（荷蘭人在大員）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: '#EFE4C2', near: '#5FA393' },
      back: [
        { k: 'v4e6_fort', x: 150, y: 930, s: .8 },
        { k: 'v4e6_deer', x: 650, y: 960, s: 1.3 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'v4e6_anping', shot: '中景：校外教學到安平，老榕樹下的紅磚老城牆',
          actors: [
            { c: 'v4e6_teacher', x: 140, y: 334, s: .95, pose: 'point', expr: 'happy', look: .5 },
            { c: 'kai', x: 470, y: 334, s: 1, pose: 'stand', expr: 'calm', look: .4 },
            { c: 'he', x: 690, y: 334, s: 1.05, pose: 'hold', expr: 'mad', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這道紅磚牆，\n快 400 年前\n就在這裡了。', x: 16, y: 12, w: 210, fs: 23, tail: [150, 140] },
            { t: '臺灣的歷史\n又不是世界史……', x: 276, y: 12, w: 256, fs: 24, tail: [466, 136] },
            { t: '哥，你聽完\n再說啦！', x: 560, y: 30, w: 180, tail: [680, 140] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'v4e6_anping', sceneOpt: { sky: '#E3E6D2' }, shot: '大格：老城牆邊的搖搖車，阿凱溜過去投幣',
          back: [{ k: 'car', x: 118, y: 628, s: .78 }],
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'grin', flip: 1, look: .7, sweat: 1 }
          ],
          bubbles: [
            { t: '我自己回去\n看一眼就知道！', x: 18, y: 320, w: 220, fs: 24, tail: [206, 430] },
            { t: '陳以凱！！\n老師在點名！', x: 300, y: 300, w: 210, kind: 'shout', tail: [420, 400], fs: 25 }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '1630', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1630',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '又倒轉了！\n西元 1630！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e6_tayouan', sceneOpt: { sea: .34, land: .62, sk: 1.6, fk: 1.25 }, shot: '滿版遠景：內海邊的沙洲上，紅磚的熱蘭遮城；荷蘭帆船和中國帆船都停在這裡',
          back: [
            { k: 'house', x: 90, y: 690, W: 150, H: 90, roof: 'tile', roofC: 'g9', f: 'cream' },
            { k: 'house', x: 690, y: 690, W: 150, H: 90, roof: 'tile', roofC: 'g9', f: 'brick3' },
            { k: 'v4e6_hides', x: 560, y: 700, s: .8 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 400 年前，大員（今天的臺南安平）', en: 'TAYOUAN · c.1630', x: 0, y: 18 },
            { t: '荷蘭東印度公司在沙洲上蓋了熱蘭遮城。各地的船，都來這裡做生意。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：大員。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '這是……\n臺灣？！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '荷蘭的船、\n中國的船！', x: 570, y: 700, w: 196, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v4e6_tayouan', sceneOpt: { sun: false, sea: .2, land: .55 }, shot: '中景：城外的市集，阿凱踩到一疊鹿皮滑了一跤',
          back: [{ k: 'v4e6_hides', x: 300, y: 450, s: 1.1 }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 230, y: 440, s: 1, pose: 'splat', expr: 'yell', look: .4, sweat: 2 },
            { c: 'v4e6_han', x: 630, y: 452, s: 1.05, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '哇！\n滑滑的！', x: 120, y: 40, w: 170, tail: [220, 300] },
            { t: '小心！那是\n要賣去日本的鹿皮！', x: 380, y: 26, w: 320, kind: 'shout', fs: 25, tail: [620, 250] }
          ],
          sfx: [{ t: '咻——碰！', x: 300, y: 300, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：西拉雅男孩諾卡站出來說話',
          back: [{ k: 'v4e6_deer', x: 230, y: 556, s: .9 }],
          actors: [{ c: 'v4e6_noka', x: 110, y: 548, s: 1.2, pose: 'fists', expr: 'smug', look: -.2 }],
          bubbles: [{ t: '梅花鹿是我們\n西拉雅人獵的。\n我們本來就\n住在這裡！', x: 14, y: 50, w: 274, fs: 24, tail: [110, 300] }],
          tag: { t: '新港社的男孩：諾卡（虛構）', left: 8 } },
        { scene: 'v4e6_trade', shot: '知識格：大員像轉運站，中國的貨和臺灣的鹿皮運到日本',
          actors: [
            { c: 'kai', x: 110, y: 660, s: 1.05, pose: 'think', expr: 'think', look: .3, bust: 1 },
            { c: 'he', x: 350, y: 666, s: 1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .5, bust: 1 }
          ],
          caption: [{ t: '大員：船在這裡換貨', x: 0, y: 14, w: 300 }],
          bubbles: [
            { t: '東西在這裡\n換船！', x: 10, y: 380, w: 190, fs: 22, tail: [110, 450] },
            { t: '大員像一個\n轉運站！', x: 254, y: 380, w: 190, fs: 22, tail: [340, 470] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e6_tayouan', sceneOpt: { sun: false, sea: .22, land: .4, fk: 1.1 }, shot: '滿版：城外的市街，西拉雅獵人、漢人農夫、日本商人、荷蘭職員各忙各的',
          back: [
            { k: 'house', x: 90, y: 520, W: 160, H: 100, roof: 'tile', roofC: 'g9', f: 'cream' },
            { k: 'house', x: 700, y: 520, W: 160, H: 100, roof: 'tile', roofC: 'g9', f: 'brick3' },
            { k: 'v4e6_cane', x: 330, y: 662, s: .9 },
            { k: 'crate', x: 500, y: 664, s: .8 }
          ],
          actors: [
            { c: 'v4e6_hunter', x: 130, y: 660, s: .85, pose: 'offer', expr: 'calm', hold: 'v4e6_hideH', look: .6 },
            { c: 'v4e6_han', x: 280, y: 664, s: .85, pose: 'hold', expr: 'happy', look: .4 },
            { c: 'v4e6_dutch', x: 450, y: 662, s: .85, pose: 'hold', expr: 'calm', hold: 'v4e6_ledgerH', flip: 1, look: .5 },
            { c: 'v4e6_jp', x: 640, y: 664, s: .85, pose: 'offer', expr: 'worry', hold: 'v4e6_silkH', flip: 1, look: .5 },
            { c: 'v4e6_noka', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '大員有很多不同的人', x: 16, y: 16, w: 420 },
            { t: '西拉雅等原住民、從福建來的漢人、荷蘭東印度公司的人、日本商人，都在這裡往來。', x: 16, y: 84, w: 470, dark: false }
          ],
          bubbles: [
            { t: '這是今年\n獵到的鹿皮。', x: 14, y: 300, w: 190, fs: 23, tail: [130, 470] },
            { t: '公司給地種，\n頭幾年不用繳稅！', x: 216, y: 330, w: 220, fs: 22, tail: [290, 474] },
            { t: '荷蘭人管得\n越來越多了……', x: 580, y: 300, w: 196, fs: 22, tail: [640, 474] },
            { t: '每一群人，\n都有自己的打算。', x: 540, y: 620, w: 230, fs: 22, tail: [646, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'room', sceneOpt: { wall: 'clay3', floor: 'paper3', hz: .8 }, shot: '細長大格：傳教士在黑板上寫羅馬字母，諾卡拿著寫好的紙',
          back: [{ k: 'v4e6_board', x: 200, y: 470, s: 1.3 }],
          actors: [
            { c: 'v4e6_pastor', x: 70, y: 560, s: 1, pose: 'point', expr: 'calm', look: .5, noShadow: true },
            { c: 'v4e6_noka', x: 180, y: 1034, s: 1.6, pose: 'hold', expr: 'happy', hold: 'v4e6_paperH', look: .3 }
          ],
          caption: [{ t: '荷蘭傳教士用羅馬字母\n拼寫西拉雅語。', x: 0, y: 14, w: 300 }, { t: '荷蘭人走了以後，這種寫法\n還用了至少 150 年，\n留下「新港文書」。', x: 0, y: 110, w: 330, dark: false }],
          bubbles: [{ t: '後來我們用它\n寫土地契約！', x: 120, y: 620, w: 210, fs: 23, tail: [200, 700] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：熱蘭遮城、荷蘭人和各社、漢人來種田',
          caption: [{ t: '荷蘭人在大員的 38 年', x: 0, y: 16 }],
          cards: [
            { icon: 'v4e6_fortI', y: 80, t: '1624 年荷蘭人來到大員，\n開始蓋城堡，1627 年取名\n熱蘭遮城，1634 年完工。' },
            { icon: 'people', y: 344, t: '荷蘭人跟附近各社立約、傳教，\n想管住各社；有的社合作，\n也有的社反抗。' },
            { icon: 'v4e6_caneI', y: 610, t: '公司用土地和免稅，\n吸引福建的漢人來種甘蔗、稻米；\n糖還賣到很遠的地方。' }
          ],
          bubbles: [{ t: '大員的故事，\n是很多人一起寫的！', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v4e6_tayouan', sceneOpt: { sun: false, sea: .3, land: .8, sk: .8, fk: .9 }, shot: '矮寬格：1662 年，鄭成功站在熱蘭遮城前',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v4e6_noka', x: 300, y: 392, s: .9, pose: 'stand', expr: 'worry' },
            { c: 'v4e6_koxinga', x: 600, y: 394, s: 1, pose: 'raise', expr: 'calm', flip: 1, look: .6 }
          ],
          caption: [{ t: '1661 年鄭成功帶大軍來，1662 年初荷蘭人投降離開。', x: 0, y: 318, w: 660, dark: false }],
          bubbles: [
            { t: '從今天起，\n這裡改叫「安平」。', x: 290, y: 14, w: 280, fs: 24, tail: [584, 150] }
          ],
          tag: { t: '鄭成功的話：改編自他把大員改名安平的史事', left: 10, top: 112 } },
        { scene: 'v4e6_anping', sceneOpt: { sky: '#E8CFA0' }, shot: '收尾大格：回到今天的安平老城牆，老師正在找人',
          back: [{ k: 'car', x: 680, y: 600, s: .8 }],
          actors: [
            { c: 'v4e6_teacher', x: 104, y: 566, s: 1.1, pose: 'fists', expr: 'mad', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '陳以凱，\n剛剛去哪裡了？', x: 14, y: 170, w: 200, fs: 21, tail: [110, 340] },
            { t: '我去 400 年前\n的大員了！', x: 222, y: 160, w: 200, fs: 22, tail: [284, 326] },
            { t: '臺灣，早就在\n世界史裡了。', x: 432, y: 200, w: 182, fs: 21, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n帕多瓦！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：望遠鏡裡的月亮（第 5 冊）', x: 248, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '大員和熱蘭遮城', t: '1624 年，荷蘭東印度公司來到大員（今天的臺南安平），在沙洲上蓋城堡，1627 年取名熱蘭遮城，1634 年完工，成為荷蘭人在臺灣的中心。' },
      { h: '很多人一起在大員', t: '西拉雅等原住民早就住在這一帶（大員附近有新港、目加溜灣、蕭壠、麻豆等大社）；荷蘭東印度公司用土地和免稅吸引福建的漢人來種甘蔗、稻米；日本商人也來做生意，直到 1635 年日本禁止日本人出國。' },
      { h: '轉運站', t: '中國商人帶來生絲、瓷器，荷蘭人把很多貨轉運到日本；臺灣的鹿皮也賣到日本；後來糖還賣到印度、波斯和歐洲。' },
      { h: '新港文書', t: '荷蘭傳教士用羅馬字母拼寫西拉雅語。荷蘭人離開後，西拉雅人還用這種寫法寫土地契約，至少用了 150 年，留下「新港文書」。' },
      { h: '鄭成功來了', t: '1661 年，鄭成功帶著幾百艘船和大約兩萬五千名士兵來到大員，包圍熱蘭遮城；1662 年初，荷蘭人投降離開。鄭成功把這裡改名「安平」，同一年過世，之後鄭家繼續治理臺灣一段時間。' }
    ],
    map: {
      bounds: { lon: [115, 132], lat: [20, 35.5] },
      taiwan: false,
      cap: '紅色虛線是大概的貿易路線：中國的貨從廈門一帶運到大員，再轉運到日本的長崎。海岸是今天的樣子，簡化畫法。',
      alt: '臺灣海峽一帶的地圖：大員在臺灣西南岸（紅點），西北邊是中國的廈門，東北邊是日本的長崎，紅色虛線把三個地方連起來',
      routes: [
        { pts: [[24.48, 118.09], [23.6, 119.2], [23.0, 120.0]] },
        { pts: [[23.0, 120.0], [23.4, 119.6], [25.5, 120.4], [28.5, 123.5], [31.5, 128], [32.75, 129.87]] }
      ],
      labels: [
        { t: '臺灣', lat: 24.0, lon: 121.0, size: 20, f: 'red' },
        { t: '中國（明朝）', lat: 28.2, lon: 117.6, size: 22, f: 'wood' },
        { t: '日本', lat: 34.2, lon: 131.2, size: 20, f: 'wood' },
        { t: '東海', lat: 29.5, lon: 126, size: 22, f: 'cream' }
      ],
      cities: [
        { n: '大員', lat: 23.0, lon: 120.16, main: 1, side: 'l', dy: 30 },
        { n: '廈門', lat: 24.48, lon: 118.09, side: 'l' },
        { n: '長崎', lat: 32.75, lon: 129.87, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：鄭和下西洋兩百多年後，荷蘭人來到大員；第 4 冊就走到這裡。',
      items: [
        { y: 1405, when: '西元 1405 年', t: '鄭和第一次\n下西洋', side: 'u', w: 160 },
        { y: 1492, when: '西元 1492 年', t: '哥倫布來到\n加勒比海', side: 'd', w: 160 },
        { y: 1630, when: '約西元 1630 年', t: '1624 年荷蘭人來，\n大員越來越熱鬧', side: 'u', main: 1, w: 196 },
        { y: 1662, when: '西元 1662 年', t: '荷蘭人投降，\n大員改名安平', side: 'd', w: 176 },
        { y: 2026, when: '今天', t: '熱蘭遮城牆還在\n（安平古堡）', side: 'u', w: 176 }
      ]
    },
    sources: [
      '臺南市政府文化資產管理處教育資料（熱蘭遮城）：1624 年荷蘭人佔據大員興建堡壘、1627 年正式定名熱蘭遮城、1634 年完工，成為軍事、貿易與行政中心',
      '荷蘭 Atlas of Mutual Heritage〈An-Ping〉：1624～1662 年荷蘭東印度公司以熱蘭遮城為據點；收入主要來自和中國商人的貿易（瓷器、生絲、黃金）；鹿皮出口到日本；糖賣到印度、波斯和歐洲；1661 年 4 月底鄭成功登陸，城堡守了約十個月，1662 年 1 月投降',
      '匹茲堡大學 Centering Taiwan in Global Asia〈Navigation, Trade & Piracy〉：1624 年荷蘭人到臺灣西南建熱蘭遮城；1623 年已有中國商船把鹿皮運到日本；1661 年鄭成功率約 400 艘船、2 萬 5 千名士兵，把城改名安平，1662 年過世',
      'Taipei Times 2024 年 11 月 17 日歷史專欄：大員周圍有麻豆、蕭壠、目加溜灣、新港四大社；1627 年新港社人赴日本；荷蘭與日本的貿易糾紛（1628 年濱田彌兵衛事件）；傳教士甘治士的紀錄',
      '德州大學 Not Even Past 書評（Andrade《How Taiwan Became Chinese》）：荷蘭東印度公司用土地、免稅、財產權吸引福建漢人，種甘蔗和稻米；與原住民建立上下關係；鄭成功打敗荷蘭人',
      'Pinyin.info 轉述《Taiwan Journal》（2006）：新港文書用荷蘭人設計的羅馬字拼寫西拉雅語，荷蘭人走後至少又用了 150 年，多半是土地契約',
      '美國國會圖書館 Country Studies〈Japan: Seclusion and Social Control〉：1635 年的命令禁止日本人出國'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '熱蘭遮城在今天的哪裡？', opts: ['臺南安平', '臺北淡水', '高雄旗津', '基隆和平島'], a: 0, why: '熱蘭遮城蓋在大員，也就是今天的臺南安平，現在叫安平古堡，還留著一段紅磚城牆。' },
      { id: 'q2', d: 1, type: 'tf', q: '荷蘭人來大員以前，臺灣本來沒有人住。', a: false, why: '不對！西拉雅等原住民早就住在這裡，漢人和日本人也已經來做生意了。' },
      { id: 'q3', d: 2, type: 'match', q: '把大員的人和他們在做的事配起來。', pairs: [['西拉雅人', '在平原上獵梅花鹿'], ['從福建來的漢人', '種甘蔗和稻米'], ['荷蘭東印度公司', '蓋熱蘭遮城、管貿易'], ['日本商人', '來大員買貨運回日本']], why: '西拉雅人獵鹿，鹿皮賣到日本；漢人來種甘蔗和稻米；荷蘭東印度公司蓋城堡、管貿易；日本商人也來大員做生意。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['荷蘭人來到大員', '熱蘭遮城完工', '鄭成功帶大軍來到大員', '荷蘭人投降離開'], why: '1624 年荷蘭人來到大員；1634 年熱蘭遮城完工；1661 年鄭成功來到大員；1662 年初荷蘭人投降離開。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「大員的歷史，只跟荷蘭人和鄭成功有關。」根據這一話，哪個說法最正確？', opts: ['不對，原住民、漢人、日本人也都在這裡', '對，其他人都只是剛好路過而已', '對，那時候臺灣只住了荷蘭人', '不對，那時候大員其實只有日本商人在做生意'], a: 0, why: '西拉雅等原住民早就住在這裡，漢人來種田、做生意，日本商人也來買賣。大員的歷史是很多人一起寫的。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
