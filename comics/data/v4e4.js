/* 世界史漫畫 第 4 冊 大航海與文藝復興・第 4 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：新航路的開啟與美洲原住民的遭遇。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, place, cap } = K;
    const corn = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">` + path('M0 -40 Q16 -10 0 30 Q-16 -10 0 -40Z', C.gold) + [-24, -12, 0, 12].map(yy => rect(-8, yy, 16, 3, '#B08D3A')).join('') + path('M0 30 Q-26 0 -20 -30 Q-8 0 0 30Z', C.g5) + path('M0 30 Q26 4 22 -24 Q8 4 0 30Z', C.g6) + `</g>`;
    const potato = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">` + ell(0, 0, 26, 18, C.clay) + circ(-10, -4, 2.4, C.clay2) + circ(8, 4, 2.4, C.clay2) + circ(12, -6, 2, C.clay2) + `</g>`;
    const tomato = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">` + circ(0, 0, 20, C.red) + path('M-10 -18 L0 -12 L10 -18 L6 -10 L0 -14 L-6 -10Z', C.g6) + `</g>`;
    const wheat = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">` + [-10, 0, 10].map(dx => cap(dx, 30, dx * .4, -24, 3, C.gold) + [0, 1, 2, 3].map(i => ell(dx * .4 + (i % 2 ? 4 : -4), -20 + i * 8, 4, 7, C.gold)).join('')).join('') + `</g>`;
    const cane = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">` + [-12, 0, 12].map(dx => rect(dx - 3, -36, 6, 70, C.g5) + [0, 1, 2].map(i => rect(dx - 4, -26 + i * 22, 8, 3, C.g7)).join('')).join('') + path('M0 -36 Q-26 -50 -34 -40 Q-16 -42 0 -30Z', C.g6) + `</g>`;
    const germs = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">` + [[0, 0, 14], [-24, 12, 9], [22, -10, 10], [16, 18, 7], [-14, -18, 8]].map(([a, b, r]) => circ(a, b, r, C.purple, 'opacity=".75"') + circ(a - r * .3, b - r * .3, r * .3, C.cream, 'opacity=".5"')).join('') + `</g>`;
    root.ComicArt.extend({
      scenes: {
        // 加勒比海的沙灘：天空、海、白沙
        v4e4_beach(w, h, o) {
          o = o || {}; const hz = h * (o.hz || .42), sand = h * (o.sand || .6);
          let s = rect(0, 0, w, h, o.sky ? K.col(o.sky) : '#CFE3D8');
          if (o.sun !== false) s += circ(w * (o.sx || .82), h * (o.sy || .12), Math.min(w, h) * .28, 'url(#cm-sun)') + circ(w * (o.sx || .82), h * (o.sy || .12), Math.min(w, h) * .06, '#FFF8DC');
          s += rect(0, hz, w, sand - hz, '#5FA393');
          for (let i = 0; i < 12; i++) s += rect((i * 137) % w, hz + (sand - hz) * ((i * .41) % 1), 40 + (i % 3) * 24, 4, C.g2, 2, 'opacity=".6"');
          s += path(`M0 ${sand} Q${w * .5} ${sand - 20} ${w} ${sand} L${w} ${h} L0 ${h}Z`, '#EFE4C2') + path(`M0 ${sand + 6} Q${w * .5} ${sand - 12} ${w} ${sand + 6} L${w} ${sand + 12} Q${w * .5} ${sand - 6} 0 ${sand + 14}Z`, C.cream, 'opacity=".7"');
          return { bg: s };
        },
        // 哥倫布大交換：上半「美洲→歐洲、亞洲」，下半「歐洲→美洲」（含看不見的病菌）
        v4e4_swap(w, h) {
          let s = rect(0, 0, w, h, C.paper2) + rect(0, h * .5, w, h * .5, C.g3);
          s += rect(16, h * .2, w - 32, 44, C.cream, 8) + txt(w / 2, h * .2 + 31, '美洲 → 歐洲、亞洲', 24, C.ink);
          s += corn(w * .22, h * .34, 1.3) + potato(w * .5, h * .36, 1.3) + tomato(w * .78, h * .35, 1.3);
          s += txt(w * .22, h * .43, '玉米', 20, C.wood) + txt(w * .5, h * .43, '馬鈴薯', 20, C.wood) + txt(w * .78, h * .43, '番茄', 20, C.wood);
          s += rect(16, h * .53, w - 32, 44, C.cream, 8) + txt(w / 2, h * .53 + 31, '歐洲 → 美洲', 24, C.ink);
          s += K.prop({ k: 'horse', x: w * .28, y: h * .7, s: .62 }) + wheat(w * .66, h * .66, 1.2) + cane(w * .86, h * .66, 1.1);
          s += txt(w * .28, h * .73, '馬、牛', 20, C.g9) + txt(w * .66, h * .73, '小麥', 20, C.g9) + txt(w * .86, h * .73, '甘蔗', 20, C.g9);
          s += germs(w * .5, h * .78, 1.1) + txt(w * .5, h * .84, '還有看不見的病菌', 20, C.purple);
          return { bg: s };
        }
      },
      props: {
        // 泰諾人的圓屋：木柱牆＋圓錐茅草頂
        v4e4_bohio: x => { const W = x.W || 160; let s = K.groundShadow(0, 3, W * .6, 8) + both(rect(-W / 2, -W * .5, W, W * .5, C.clay3)); for (let i = 1; i < 8; i++) s += rect(-W / 2 + i * W / 8 - 2, -W * .5, 4, W * .5, C.clay2); return place(x, s + poly(`${-W * .62},${-W * .48} 0,${-W * 1.15} ${W * .62},${-W * .48}`, C.gold) + poly(`0,${-W * 1.15} ${W * .62},${-W * .48} ${W * .2},${-W * .48}`, '#B08D3A') + path(`M${-W * .12} 0 L${-W * .12} ${-W * .32} L${W * .12} ${-W * .32} L${W * .12} 0Z`, C.ink)); },
        // 獨木舟
        v4e4_canoe: x => place(x, both(path('M-120 -24 Q-130 -40 -140 -44 Q-60 -26 0 -26 Q60 -26 140 -44 Q130 -40 120 -24 Q0 6 -120 -24Z', C.wood), 'cm-warm') + path('M-104 -30 Q0 -20 104 -30 Q0 -14 -104 -30Z', '#4A3322')),
        // 吊床（兩根木樁中間一張網）
        v4e4_hammock: x => { const W = x.W || 260; return place(x, rect(-W / 2 - 8, -150, 12, 150, C.wood) + rect(W / 2 - 4, -150, 12, 150, C.wood) + path(`M${-W / 2} -130 Q0 -40 ${W / 2} -130 L${W / 2} -116 Q0 -24 ${-W / 2} -116Z`, C.cream) + [0, 1, 2].map(i => path(`M${-W / 2 + 20} ${-124 + i * 4} Q0 ${-36 + i * 6} ${W / 2 - 20} ${-124 + i * 4}`, 'none', `stroke="${C.red}" stroke-width="3" opacity=".7"`)).join('')); },
        // 公園溜滑梯
        v4e4_slide: x => place(x, K.groundShadow(0, 3, 100, 8) + rect(-80, -190, 10, 190, C.ink) + rect(-30, -190, 10, 190, C.ink) + [0, 1, 2, 3, 4].map(i => rect(-80, -30 - i * 36, 60, 6, C.ink)).join('') + rect(-86, -196, 72, 14, C.gold, 4) + poly('-20,-190 120,-10 120,6 -20,-170', C.red) + rect(116, -12, 16, 14, C.red, 3)),
        // 插在沙灘上的旗子
        v4e4_banner: x => place(x, rect(-3, -230, 6, 230, C.wood) + path('M3 -228 L90 -222 L90 -150 L3 -156Z', C.cream) + rect(12, -218, 34, 30, C.red) + rect(50, -186, 34, 30, C.gold))   // 只畫色塊，不畫宗教符號
      },
      icons: {
        v4e4_swapI() { return rect(0, 0, 120, 90, C.paper) + corn(26, 44, .8) + potato(56, 50, .7) + poly('74,40 92,40 92,32 106,46 92,60 92,52 74,52', C.red); },
        v4e4_germI() { return rect(0, 0, 120, 90, C.g3) + germs(60, 46, 1.4); }
      },
      cast: {
        v4e4_mi: { name: '鄰居小米', skin: 'skin', top: 'gold', bottom: 'blue', leg: 'skin', shoe: 'red', hair: 'short', hairBack: 'ponytailBack', r: 22, k: .9 },
        v4e4_ana: { name: '阿娜（虛構）', skin: 'skinC', top: 'blue', skirt: 'cream', leg: 'skinC', shoe: 'skinC', hair: 'long', hat: 'band', hatC: 'red', acc: ['earring'], r: 22, k: .93 },
        v4e4_cacique: { name: '泰諾的族長', skin: 'skinC', top: 'gold', skirt: 'cream', leg: 'skinC', shoe: 'skinC', hair: 'long', hat: 'band', hatC: 'gold', acc: ['earring'], r: 19, k: 1.14 },
        v4e4_taino: { name: '泰諾人', skin: 'skinC', top: 'wood', skirt: 'g5', leg: 'skinC', shoe: 'skinC', hair: 'short', r: 19, k: 1.1 },
        v4e4_sailor: { name: '水手', skin: 'skin', top: 'cream', bottom: 'wood', leg: 'wood', hair: 'short', hairC: '#6B4A32', hat: 'band', hatC: 'red', beard: 1, r: 19, k: 1.12 },
        v4e4_columbus: { name: '哥倫布', real: 1, skin: 'skin', top: 'red', bottom: 'g9', leg: 'g9', shoe: 'ink', hair: 'long', hairC: '#C9C2B0', hat: 'beret', hatC: 'ink', r: 19, k: 1.22 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v4e4 = {
    id: 'v4e4', vol: '第 4 冊 大航海與文藝復興', volNo: 4, ep: 4, title: '往西航行到哪裡？', next: '達文西的筆記本',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！小米說：祕密基地歡迎你們一起來玩。',
    note: '阿凱、小禾、小米、阿娜、族長、水手是虛構的角色；哥倫布的話是依據他的信和航海紀錄的內容改編，不是他的原話。哥倫布、泰諾村子和船的樣子都是想像圖。哥倫布第一次靠岸的「瓜納哈尼」在今天的巴哈馬，但到底是哪一座島，學者提過十幾種說法。泰諾人口減少了多少，學者的估計差很多。',
    curriculum: '國中社會會再學到：新航路的開啟與美洲原住民的遭遇',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: '#EFE4C2', near: '#5FA393' },
      back: [
        { k: 'palm', x: 80, y: 940, H: 300 },
        { k: 'v4e4_canoe', x: 230, y: 990, s: .9 },
        { k: 'ship', kind: 'tall', x: 640, y: 870, s: .7, flag: 'red' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'land', sceneOpt: { sky: 'paper2', sun: false, hz: .6, far: false, ground: 'g3' }, shot: '中景：社區中庭的樹叢後面，阿凱站在紙箱「祕密基地」上',
          back: [
            { k: 'house', x: 110, y: 204, W: 220, H: 170, roof: 'flat', roofC: 'g7', f: 'paper3' },
            { k: 'house', x: 680, y: 204, W: 220, H: 190, roof: 'flat', roofC: 'g7', f: 'paper3' },
            { k: 'tree', x: 470, y: 230, H: 150 },
            { k: 'crate', x: 300, y: 330, s: 1.3, f: 'clay3' }
          ],
          actors: [
            { c: 'kai', x: 300, y: 252, s: .85, pose: 'fists', expr: 'smug', look: .4, noShadow: true },
            { c: 'v4e4_mi', x: 520, y: 334, s: 1, pose: 'arg', expr: 'mad', flip: 1, look: .6 },
            { c: 'he', x: 700, y: 334, s: 1, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這是我發現的\n祕密基地！', x: 30, y: 14, w: 220, tail: [300, 96] },
            { t: '我們上個月\n就在這裡玩了。', x: 326, y: 14, w: 224, fs: 24, tail: [520, 150] },
            { t: '人家先來的耶。', x: 560, y: 80, w: 214, fs: 23, tail: [700, 152] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sky: 'paper2', sun: false, hz: .5, far: false, ground: 'g3', near: 'g5' }, shot: '大格：溜滑梯旁的搖搖車，阿凱賭氣衝過去',
          back: [{ k: 'v4e4_slide', x: 400, y: 420, s: 1 }, { k: 'tree', x: 80, y: 340, H: 200 }, { k: 'car', x: 118, y: 628, s: .78 }],
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'mad', flip: 1, look: .7, sweat: 1 }
          ],
          bubbles: [
            { t: '那我去發現\n沒人去過的地方！', x: 18, y: 320, w: 230, fs: 23, tail: [206, 430] },
            { t: '陳以凱！！', x: 318, y: 316, w: 176, kind: 'shout', tail: [420, 400], fs: 25 }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '1492', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1492',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '又倒轉了！\n西元 1492！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e4_beach', shot: '滿版遠景：棕櫚樹下的泰諾村子，沙灘上有獨木舟，遠方海上出現三艘船',
          back: [
            { k: 'ship', kind: 'tall', x: 560, y: 450, s: .22, flag: 'red' },
            { k: 'ship', kind: 'tall', x: 640, y: 446, s: .18, flag: 'red' },
            { k: 'ship', kind: 'tall', x: 700, y: 452, s: .2, flag: 'red' },
            { k: 'v4e4_bohio', x: 130, y: 640, W: 170 },
            { k: 'v4e4_bohio', x: 300, y: 630, W: 130 },
            { k: 'palm', x: 40, y: 660, H: 330 },
            { k: 'palm', x: 420, y: 640, H: 260 },
            { k: 'v4e4_canoe', x: 610, y: 700, s: .8 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v4e4_taino', x: 230, y: 700, s: .7, pose: 'carry', expr: 'calm', hold: 'sack' },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'raise', expr: 'grin', look: -.4 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'worry', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '西元 1492 年 10 月，加勒比海的島（今天的巴哈馬）', en: 'THE CARIBBEAN · AD 1492', x: 0, y: 18, w: 600 },
            { t: '泰諾人早就住在這些島上了：種木薯和玉米，划獨木舟在島之間來往。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：加勒比海。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '我發現\n新島嶼了！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '哥，島上\n早就有人了！', x: 570, y: 700, w: 196, tail: [624, 792], fs: 24 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v4e4_beach', sceneOpt: { hz: .3, sand: .5, sun: false }, shot: '中景：村子裡，阿凱跳上吊床，整個人翻下來',
          back: [{ k: 'v4e4_bohio', x: 700, y: 300, W: 150 }, { k: 'v4e4_hammock', x: 300, y: 430, W: 280 }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 300, y: 450, s: 1, pose: 'splat', expr: 'yell', look: .4, sweat: 2, noShadow: true },
            { c: 'v4e4_ana', x: 620, y: 452, s: 1.1, pose: 'shout', expr: 'grin', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這網子\n會咬人！', x: 120, y: 40, w: 180, tail: [280, 300] },
            { t: '那是吊床！\n要斜斜地躺啦！', x: 400, y: 26, w: 300, kind: 'shout', fs: 25, tail: [610, 238] }
          ],
          sfx: [{ t: '咚！', x: 380, y: 330, fs: 50, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：泰諾女孩阿娜介紹自己的島',
          actors: [{ c: 'v4e4_ana', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'happy', look: -.2 }],
          bubbles: [{ t: '這是我們的島，\n我們叫它\n「瓜納哈尼」！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '泰諾族的女孩：阿娜（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '知識格：從泰諾語變成英文的字',
          back: [{ k: 'v4e4_hammock', x: 232, y: 250, W: 220, s: .8 }, { k: 'v4e4_canoe', x: 232, y: 300, s: .8 }],
          actors: [
            { c: 'kai', x: 110, y: 640, s: 1.05, pose: 'think', expr: 'think', look: .3, bust: 1 },
            { c: 'he', x: 350, y: 650, s: 1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .5, bust: 1 }
          ],
          caption: [{ t: '這些英文字，是從泰諾語來的', x: 0, y: 14, w: 380 }],
          bubbles: [
            { t: '颶風 hurricane\n也是！', x: 10, y: 352, w: 200, fs: 22, tail: [110, 430] },
            { t: '吊床 hammock、\n獨木舟 canoe！', x: 222, y: 352, w: 232, fs: 22, tail: [340, 450] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e4_beach', sceneOpt: { hz: .3, sand: .52 }, shot: '滿版：三艘帆船停在外海，哥倫布一行人上岸插旗，泰諾人划獨木舟過來看',
          back: [
            { k: 'ship', kind: 'tall', x: 200, y: 450, s: .5, flag: 'red' },
            { k: 'ship', kind: 'tall', x: 520, y: 430, s: .42, flag: 'red' },
            { k: 'ship', kind: 'tall', x: 690, y: 460, s: .36, flag: 'red' },
            { k: 'v4e4_canoe', x: 360, y: 500, s: .7 },
            { k: 'v4e4_banner', x: 560, y: 640, s: .9 }
          ],
          actors: [
            { c: 'v4e4_sailor', x: 620, y: 660, s: .85, pose: 'stand', expr: 'awe', look: -.5, flip: 1 },
            { c: 'v4e4_columbus', x: 500, y: 668, s: .9, pose: 'raise', expr: 'calm', flip: 1, look: -.4 },
            { c: 'v4e4_cacique', x: 250, y: 664, s: .9, pose: 'think', expr: 'worry', look: .5 },
            { c: 'v4e4_ana', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'worry', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '1492 年 10 月 12 日，\n哥倫布的三艘船來到這座島。', x: 16, y: 16, w: 420 },
            { t: '他一直以為自己到了亞洲。他替島取了西班牙名字，說這些土地屬於西班牙國王。', x: 16, y: 128, w: 440, dark: false }
          ],
          bubbles: [
            { t: '這些人\n從哪裡來的？', x: 150, y: 330, w: 190, fs: 24, tail: [270, 470] },
            { t: '他們把旗子\n插在我們的沙灘上……', x: 14, y: 636, w: 256, fs: 22, tail: [140, 790] },
            { t: '他說他「發現」\n這座島？', x: 280, y: 660, w: 230, fs: 23, tail: [440, 772] },
            { t: '可是阿娜他們\n早就住在這裡了。', x: 540, y: 612, w: 230, fs: 22, tail: [646, 790] }
          ],
          tag: { t: '想像圖：哥倫布沒有留下當時畫的可靠畫像', left: 16, top: 240 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v4e4_swap', shot: '細長大格：哥倫布大交換，東西往兩個方向走',
          caption: [{ t: '哥倫布大交換', en: 'COLUMBIAN EXCHANGE', x: 0, y: 14, w: 300 }],
          bubbles: [{ t: '東西走兩個方向，\n連病菌也是。', x: 40, y: 900, w: 260, fs: 23 }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：交換、疾病、強迫勞動',
          caption: [{ t: '大交換，帶來了什麼？', x: 0, y: 16 }],
          cards: [
            { icon: 'v4e4_swapI', y: 80, t: '玉米、馬鈴薯、番茄\n傳到歐洲和亞洲；馬、牛、\n小麥、甘蔗被帶到美洲。' },
            { icon: 'v4e4_germI', y: 344, t: '歐洲人也帶來天花等傳染病。\n美洲的人以前沒碰過，\n很多人病倒。' },
            { icon: 'people', y: 610, t: '西班牙人逼泰諾人挖金子。\n生病、被強迫工作、田園被破壞，\n島上的人口大大減少。' }
          ],
          bubbles: [{ t: '對阿娜來說，不是「發現」，\n是陌生人來到她的家。', x: 20, y: 900, w: 382, fs: 23 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v4e4_beach', sceneOpt: { hz: .3, sand: .62, sun: false }, shot: '矮寬格：沙灘上，哥倫布說他的計畫',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'think', expr: 'think', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'worry', hold: 'notebook', look: .8 },
            { c: 'v4e4_ana', x: 300, y: 392, s: .9, pose: 'fists', expr: 'mad' },
            { c: 'v4e4_columbus', x: 560, y: 394, s: 1, pose: 'point', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '我往西航行，是想找一條\n到亞洲去的路。', x: 40, y: 14, w: 420, fs: 24, tail: [528, 150] }
          ],
          tag: { t: '哥倫布的話：改編自他的信和航海紀錄', left: 10, top: 112 } },
        { scene: 'v4e4_beach', sceneOpt: { sky: '#E8CFA0', sx: .8, sy: .3, hz: .45, sand: .7 }, shot: '收尾大格：傍晚的沙灘，準備出發',
          back: [{ k: 'palm', x: 560, y: 450, H: 260 }, { k: 'car', x: 680, y: 600, s: .8 }],
          actors: [
            { c: 'v4e4_ana', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'think', expr: 'worry', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '今天還有泰諾人\n的後代，記得\n我們的話喔！', x: 14, y: 160, w: 200, fs: 21, tail: [110, 300] },
            { t: '回去要跟小米\n說對不起，問能\n不能一起玩。', x: 224, y: 150, w: 200, fs: 21, tail: [284, 326] },
            { t: '從別人的角度\n看就不一樣了。', x: 430, y: 200, w: 188, fs: 21, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n佛羅倫斯！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：達文西的筆記本', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '誰本來就在那裡？', t: '1492 年以前，美洲已經住了好幾百萬人。加勒比海島上人數最多的是泰諾人：住在大房子裡，由族長帶領，種木薯和玉米，划獨木舟、睡吊床。' },
      { h: '1492 年的航行', t: '哥倫布在 1492 年 8 月從西班牙的帕洛斯出發，帶著三艘船往西航行，10 月 12 日來到泰諾人叫做「瓜納哈尼」的島（在今天的巴哈馬）。他一直以為自己到了亞洲。' },
      { h: '哥倫布大交換', t: '之後東西往兩個方向走：玉米、馬鈴薯、番茄傳到歐洲和亞洲；馬、牛、小麥、甘蔗被帶到美洲；歐洲人也帶來天花等美洲以前沒有的傳染病。' },
      { h: '殖民帶來的傷害', t: '西班牙人逼泰諾人挖金子，加上傳染病、田園被破壞，島上的人口大大減少；有一種估計說，伊斯帕紐拉島的原住民在 20 年內從大約一百萬人減少到三萬人（學者的估計差很多）。1502 年起，西班牙人還從非洲運來被奴役的人做工。' },
      { h: '今天', t: '吊床（hammock）、獨木舟（canoe）、颶風（hurricane）這些字都是從泰諾語來的。今天還有自認是泰諾人後代的人，努力讓自己的文化延續下去。' }
    ],
    map: {
      world: 1,
      bounds: { lon: [-92, -2], lat: [8, 46] }, taiwan: false,
      cap: '紅色虛線是哥倫布第一次航行大概的路線（先到加那利群島補給，再往西）。海岸是今天的樣子，簡化畫法。',
      alt: '大西洋地圖：右邊是西班牙的帕洛斯，紅色虛線往西南經過加那利群島，橫越大西洋到左邊加勒比海的瓜納哈尼（紅點），再到古巴和伊斯帕紐拉島',
      routes: [{ pts: [[37.2, -6.9], [33, -11], [28.1, -15.4], [27, -30], [26, -50], [24.6, -68], [24.05, -74.5], [21.8, -77.5], [20.6, -74], [19.9, -72.5]] }],
      labels: [
        { t: '大西洋', lat: 34, lon: -45, size: 28, f: 'cream' },
        { t: '加勒比海', lat: 14.5, lon: -74, size: 22, f: 'cream' },
        { t: '北美洲', lat: 38, lon: -85, size: 22, f: 'wood' },
        { t: '歐洲', lat: 43, lon: -8, size: 20, f: 'wood' },
        { t: '古巴', lat: 23, lon: -82, size: 16, f: 'wood' }
      ],
      cities: [
        { n: '瓜納哈尼', lat: 24.05, lon: -74.5, main: 1, side: 'r', dy: -6 },
        { n: '帕洛斯', lat: 37.23, lon: -6.9, side: 'l' },
        { n: '加那利群島', lat: 28.1, lon: -15.4, side: 'l', dy: 28 },
        { n: '伊斯帕紐拉島', lat: 19.0, lon: -71.5, side: 'r', dy: 16 }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：鄭和下西洋比哥倫布早了將近 90 年；哥倫布出航後 40 年，西班牙人就到了印加帝國。',
      items: [
        { y: 1405, when: '西元 1405 年', t: '鄭和第一次\n下西洋', side: 'u', w: 160 },
        { y: 1455, when: '約西元 1455 年', t: '古騰堡\n印好《聖經》', side: 'd', w: 170 },
        { y: 1492, when: '西元 1492 年', t: '哥倫布來到\n加勒比海', side: 'u', main: 1, w: 170 },
        { y: 1532, when: '西元 1532 年', t: '西班牙人\n來到印加', side: 'd', w: 160 }
      ]
    },
    sources: [
      '佛羅里達自然史博物館（佛羅里達大學）〈Columbus〉教育頁：1492 年 10 月 12 日看見陸地；島民（盧卡揚人）叫它瓜納哈尼，哥倫布改名聖薩爾瓦多；學者對確切是哪座島提過十種說法；泰諾人划獨木舟來看船、吊床被水手採用；哥倫布替西班牙王室宣稱土地；第一次登陸讓泰諾文化在一個世代內衰落',
      '美國國會圖書館「1492: An Ongoing Voyage」展覽〈What Came to Be Called America〉〈Christopher Columbus〉〈Europe Claims America〉：1492 年美洲已住了好幾百萬人；泰諾人是加勒比海島上最大的族群、族長、大房子、吊床、獨木舟；哥倫布一直相信自己到了亞洲；歐洲疾病重創原住民；伊斯帕紐拉島原住民估計 20 年內從約一百萬降到三萬；逼泰諾人挖金、1502 年起運來非洲奴隸；帶來甘蔗、小麥、馬、牛',
      'EBSCO Research Starters〈Christopher Columbus〉：1492 年 8 月 3 日出航、船員來自帕洛斯、先停加那利群島；聖瑪利亞號、尼尼亞號、平塔號三艘船；10 月 12 日到巴哈馬',
      '美國國家人文中心 Alfred Crosby〈The Columbian Exchange〉：玉米、馬鈴薯、番茄等美洲作物；馬、牛、小麥等舊世界作物和牲畜；天花等傳染病',
      '美國史密森尼美洲印第安人博物館《American Indian》雜誌〈Abuelas, Ancestors and Atabey: The Spirit of Taíno Resurgence〉：泰諾語 hurakan（颶風）；泰諾文化並沒有消失，今天有後代在復興'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '哥倫布 1492 年靠岸的那座島，泰諾人叫它什麼？', opts: ['瓜納哈尼', '福爾摩沙', '庫斯科', '美因茲'], a: 0, why: '泰諾人叫這座島「瓜納哈尼」，在今天的巴哈馬；哥倫布替它取了西班牙名字。' },
      { id: 'q2', d: 1, type: 'tf', q: '哥倫布到的時候，那些島上本來沒有人住。', a: false, why: '不對！泰諾人早就住在這些島上，種木薯和玉米、划獨木舟、睡吊床。' },
      { id: 'q3', d: 2, type: 'match', q: '把東西和它的故事配起來。', pairs: [['玉米、馬鈴薯', '從美洲傳到歐洲'], ['馬、牛', '從歐洲帶到美洲'], ['吊床、獨木舟', '泰諾人本來就在用']], why: '玉米和馬鈴薯從美洲傳出去；馬和牛是歐洲人帶到美洲的；吊床和獨木舟是泰諾人本來就在用的，連英文名字都從泰諾語來。' },
      { id: 'q4', d: 2, type: 'mc', q: '哥倫布的船隊來了以後，為什麼很多泰諾人病倒？', opts: ['歐洲人帶來新的傳染病，他們以前沒碰過', '那一年颶風特別大，房子和田全都被吹壞', '島上的木薯田突然全部枯死了', '他們吃了太多從歐洲帶來的小麥'], a: 0, why: '天花等傳染病是歐洲人帶來的，美洲的人以前沒碰過，身體沒有抵抗力，很多人病倒。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「哥倫布發現了美洲，在那之前美洲是一片沒有人的空地。」根據這一話，哪個說法最正確？', opts: ['不對，美洲本來就住著好幾百萬人', '對，那裡只有動物，沒有人住', '不對，其實是泰諾人先發現了歐洲', '對，所以歐洲人把它叫做新大陸'], a: 0, why: '1492 年以前，美洲已經住了好幾百萬人，泰諾人就住在那些島上。對他們來說，不是「被發現」，而是陌生人來到他們的家。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
