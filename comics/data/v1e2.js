/* 世界史漫畫 第 1 冊 古文明・第 2 話（只有資料＋這一話自己的圖形）。
   課綱對應：108 課綱社會領域歷史 歷 Na-Ⅳ-1「非洲與西亞的早期文化」。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const C = K.C, MUD = '#3F3227', PAP = '#E9DDB0';
    // 聖書體的幾個符號（單位約 44 高，中心 0,0；只是簡化的樣子）
    const GL = {
      owl: f => K.path('M-10 18 L-12 2 Q-14 -10 -4 -12 L6 -12 Q14 -8 12 4 L10 18Z', f) + K.circ(0, -16, 9, f) + K.poly('-8,-21 -11,-30 -3,-24', f) + K.poly('8,-21 11,-30 3,-24', f) + K.circ(-3.6, -16, 2.6, C.cream) + K.circ(3.6, -16, 2.6, C.cream) + K.rect(-8, 18, 4, 4, f) + K.rect(4, 18, 4, 4, f),
      water: f => { let a = [], b = []; for (let i = 0; i <= 8; i++) { const x = -22 + i * 5.5, y = i % 2 ? -4 : 2; a.push(x + ',' + y); b.unshift(x + ',' + (y + 5)); } return K.poly(a.concat(b).join(' '), f); },
      mouth: f => K.ell(0, 0, 20, 7, f),
      basket: f => K.path('M-20 -8 L20 -8 Q18 12 0 12 Q-18 12 -20 -8Z', f) + K.path('M12 8 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0Z M15.5 8 a3.5 3.5 0 1 1 7 0 a3.5 3.5 0 1 1 -7 0Z', f, 'fill-rule="evenodd"'),
      vulture: f => K.path('M-4 -12 Q8 -16 16 -2 L22 16 L8 10 L-6 14 Q-12 6 -10 -4Z', f) + K.circ(-8, -16, 6, f) + K.poly('-13,-18 -20,-14 -13,-12', f) + K.rect(-2, 12, 3, 9, f) + K.rect(4, 12, 3, 9, f),
      reed: f => K.path('M2 22 Q-8 2 2 -22 Q10 0 2 22Z', f) + K.path('M2 -22 Q9 -25 11 -18 Q6 -20 2 -18Z', f),
      sun: f => K.path('M-14 0 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0Z M-9 0 a9 9 0 1 1 18 0 a9 9 0 1 1 -18 0Z', f, 'fill-rule="evenodd"') + K.circ(0, 0, 3.6, f),
      bread: f => K.path('M-16 6 Q-16 -10 0 -10 Q16 -10 16 6Z', f)
    };
    const G = (n, x, y, s, f) => K.at(x, y, s, GL[n](f || C.ink));
    // 小禾的貼圖（現代）：太陽、腳踏車、樹（單位約 60）
    const ST = {
      sun: () => [0, 45, 90, 135, 180, 225, 270, 315].map(a => { const t = a * Math.PI / 180; return K.cap(Math.cos(t) * 19, Math.sin(t) * 19, Math.cos(t) * 27, Math.sin(t) * 27, 5, C.gold); }).join('') + K.circ(0, 0, 15, '#F2C14E'),
      bike: () => K.circ(-16, 8, 12, C.ink) + K.circ(-16, 8, 8, C.cream) + K.circ(16, 8, 12, C.ink) + K.circ(16, 8, 8, C.cream) + K.cap(-16, 8, -3, -8, 4, C.red) + K.cap(-3, -8, 13, -8, 4, C.red) + K.cap(13, -8, 16, 8, 4, C.red) + K.cap(-3, -8, 2, 8, 4, C.red) + K.cap(2, 8, -16, 8, 4, C.red) + K.rect(-8, -14, 12, 4, C.ink, 2) + K.cap(13, -8, 10, -18, 3, C.ink),
      tree: () => K.rect(-4, 2, 8, 22, C.wood) + K.circ(-10, -2, 12, C.g7) + K.circ(10, -2, 12, C.g7) + K.circ(0, -12, 16, C.g5)
    };
    const sticker = (n, x, y, s) => K.at(x, y, s, K.rect(-36, -36, 72, 72, C.cream, 12) + ST[n]());
    const sheet = (W, H) => { let s = K.both(K.rect(-W / 2, -H, W, H, PAP, 4), 'cm-warm'); for (let i = 1; i < 6; i++) s += K.rect(-W / 2 + i * W / 6, -H, 1.4, H, 'rgba(110,80,40,.14)'); for (let j = 1; j < 4; j++) s += K.rect(-W / 2, -H + j * H / 4, W, 1.4, 'rgba(110,80,40,.12)'); return s; };

    A.extend({
      parts: {
        // 古埃及小孩常見的髮型：頭髮剃短，側邊留一條辮子
        v1e2_lock: () => K.path('M-22 0 Q-24 -26 0 -26 Q24 -26 22 0 Q12 -11 0 -11 Q-12 -11 -22 0Z', 'rgba(21,23,20,.4)') + K.path('M-23 -10 Q-31 8 -25 28 Q-20 33 -17 26 Q-22 10 -16 -8Z', C.ink)
      },
      cast: {
        v1e2_nefer: { name: '奈弗（虛構）', skin: 'skinB', top: 'skinB', skirt: 'cream', sleeve: 'skinB', shoe: 'wood', hair: 'v1e2_lock', r: 22, k: .94 },
        v1e2_worker: { name: '工人', skin: 'skinC', top: 'skinC', skirt: 'cream', sleeve: 'skinC', shoe: 'wood', hair: 'short', r: 19, k: 1.1 },
        v1e2_worker2: { name: '工人', skin: 'skinB', top: 'skinB', skirt: 'paper3', sleeve: 'skinB', shoe: 'wood', hair: 'short', r: 19, k: 1.08 },
        v1e2_scribe: { name: '書記', skin: 'skinB', top: 'cream', skirt: 'cream', sleeve: 'skinB', shoe: 'wood', hair: 'wig', r: 19, k: 1.14 }
      },
      holds: {
        v1e2_palette: () => K.rect(-6, -46, 12, 62, '#C9A97A', 3) + K.circ(0, -38, 3.6, C.ink) + K.circ(0, -29, 3.6, C.red) + K.rect(-1.5, -20, 3, 30, 'rgba(21,23,20,.3)'),
        v1e2_jarW: () => `<g transform="rotate(60)">` + K.both(K.path('M-10 -40 L10 -40 L12 -30 Q28 -18 18 6 L-18 6 Q-28 -18 -12 -30Z', C.clay), 'cm-warm') + `</g>` + K.path('M34 -20 Q44 10 40 60 L32 60 Q36 14 28 -16Z', 'rgba(195,215,220,.9)'),
        v1e2_sheet: () => K.rect(-30, -4, 56, 30, PAP, 2) + K.rect(-24, 4, 40, 2.4, 'rgba(21,23,20,.3)') + K.rect(-24, 12, 30, 2.4, 'rgba(21,23,20,.3)') + K.cap(2, 2, 16, -26, 3, C.gold)
      },
      props: {
        // 雪橇上的大石塊（原點＝雪橇底中央）
        v1e2_block: x => K.place(x, K.groundShadow(0, 2, 90, 8) + K.ell(112, 2, 40, 7, 'rgba(94,140,106,.45)') + K.path('M-84 0 L74 0 Q96 0 100 -18 L90 -18 Q86 -9 72 -9 L-84 -9Z', C.wood) + K.rect(-60, -15, 10, 8, C.wood) + K.rect(40, -15, 10, 8, C.wood) + K.both(K.rect(-70, -130, 140, 118, C.brick2, 3), 'cm-warm') + K.rect(36, -130, 34, 118, C.clay2, 0, 'opacity=".7"') + K.rect(-70, -130, 140, 10, C.brick3, 3) + K.cap(70, -60, 90, -12, 4, C.wood)),
        // 尖尖的麵包（古王國時代用模子烤的圓錐麵包）
        v1e2_bread: x => { let s = ''; [[-44, 0], [-22, 0], [0, 0], [22, 0], [44, 0], [-33, -22], [-11, -22], [11, -22], [33, -22]].forEach(([dx, dy]) => { s += K.poly(`${dx - 11},${dy} ${dx},${dy - 34} ${dx + 11},${dy}`, C.clay3) + K.ell(dx, dy - 2, 11, 3.6, C.clay2); }); return K.place(x, s); },
        // 小禾手機上的貼圖暗號（放大畫在格子中間）
        v1e2_phone: x => K.place(x, K.both(K.rect(-170, -158, 340, 158, C.ink, 22)) + K.rect(-158, -146, 316, 134, C.g2, 12) + K.txt(-146, -124, '小禾', 16, C.g7, { a: 'start' }) + K.rect(-144, -116, 288, 98, C.paper, 16) + sticker('sun', -88, -67, .95) + sticker('bike', 0, -67, .95) + sticker('tree', 88, -67, .95)),
        // 回家後兄妹約好的暗號表
        v1e2_key: x => { let s = K.both(K.rect(-95, -176, 190, 176, C.cream, 6), 'cm-warm') + K.txt(0, -146, '暗號表', 24, C.red); [['sun', '早上'], ['bike', '騎車'], ['tree', '公園']].forEach(([n, t], i) => { s += sticker(n, -52, -110 + i * 46 + 6, .5) + K.txt(-12, -100 + i * 46 + 6, '＝', 22, C.ink) + K.txt(42, -100 + i * 46 + 6, t, 24, C.ink); }); return K.place(x, s); },
        // 奈弗送的莎草紙：用聲音符號拼「凱」（k＋a＋i）
        v1e2_namePap: x => K.place(x, sheet(210, 124) + G('basket', -62, -72, 1.25) + G('vulture', 2, -76, 1.25) + G('reed', 62, -74, 1.2) + K.txt(-62, -18, 'k', 20, C.red) + K.txt(0, -18, 'a', 20, C.red) + K.txt(62, -18, 'i', 20, C.red)),
        v1e2_papyrus: x => K.place(x, sheet(x.W || 120, x.H || 80))
      },
      icons: {
        v1e2_sprout() { let s = K.rect(0, 0, 120, 90, C.g3) + K.rect(0, 52, 120, 38, MUD); [18, 46, 74, 102].forEach(x => { s += K.cap(x, 54, x, 34, 3, C.g7) + K.ell(x - 7, 36, 8, 4, C.g5, `transform="rotate(-25 ${x - 7} 36)"`) + K.ell(x + 7, 32, 8, 4, C.g5, `transform="rotate(25 ${x + 7} 32)"`); }); return s; },
        // 一綑麥子：中間綁起來、上面是麥穗
        v1e2_harvest() { let s = K.rect(0, 0, 120, 90, C.g3) + K.rect(0, 74, 120, 16, C.sand); [-24, -16, -8, 0, 8, 16, 24].forEach(d => { s += K.cap(60 + d * .25, 54, 60 + d, 22, 3, '#B08D3A') + K.cap(60 + d * .25, 54, 60 + d * .7, 80, 3, '#B08D3A') + K.ell(60 + d * 1.08, 15, 4.5, 10, C.gold, `transform="rotate(${d * 1.2} ${60 + d * 1.08} 15)"`); }); return s + K.rect(50, 50, 20, 7, C.red, 2); },
        v1e2_sunI() { return K.rect(0, 0, 120, 90, C.paper) + K.at(30, 45, .8, ST.sun()) + K.txt(60, 56, '＝', 30, C.ink) + K.rect(70, 15, 44, 60, C.clay3, 4) + G('sun', 92, 45, 1.25, C.red); },
        v1e2_owlI() { return K.rect(0, 0, 120, 90, C.paper) + K.rect(8, 10, 50, 70, C.clay3, 4) + G('owl', 33, 47, 1.25) + K.txt(70, 56, '→', 24, C.ink) + K.txt(98, 62, 'm', 42, C.red); },
        v1e2_papI() { return K.rect(0, 0, 120, 90, C.g3) + K.at(48, 80, 1, sheet(70, 64)) + G('owl', 30, 46, .55) + G('water', 50, 46, .55) + G('mouth', 68, 46, .45) + `<g transform="rotate(-20 100 50)">` + K.rect(94, 14, 12, 64, '#C9A97A', 3) + K.circ(100, 22, 3.4, C.ink) + K.circ(100, 31, 3.4, C.red) + `</g>`; }
      },
      scenes: {
        // 投幣特寫（數字盤停在西元前 2560）
        v1e2_coin(w, h) {
          let s = K.rect(0, 0, w, h, C.g7) + K.zoom(w * .5, h * .42, 60, h * .8, 30, 'rgba(247,243,230,.16)', 3);
          s += K.both(K.rect(w * .16, 40, w * .68, 130, C.ink, 10)) + K.rect(w * .5 - 34, 78, 68, 10, '#000', 5) + K.rect(w * .22, 118, w * .56, 34, C.paper) + K.txt(w * .5, 143, '10元', 24, C.ink);
          s += K.circ(w * .5, h * .46, w * .42, C.cream) + K.circ(w * .5, h * .46, w * .35, C.ink);
          s += K.txt(w * .5, h * .46 - 30, '2026', 20, 'rgba(247,243,230,.35)') + K.txt(w * .5, h * .46 - 6, '西元前', 20, C.g3) + K.txt(w * .5, h * .46 + 34, '2560', 42, C.cream);
          return { bg: s + K.circ(w * .5, h * .46, w * .47, 'url(#cm-glow)', 'opacity=".5"') };
        },
        // 抵達：沙漠高地上蓋到一半的大金字塔、綠色田地、尼羅河、黑土河岸
        v1e2_giza(w, h) {
          let s = A.SCENES.land(w, h, { sun: [.84, .1], hz: .44, far: 'brick', ground: 'sand' }).bg;
          s += K.prop({ k: 'pyramid', x: w * .58, y: h * .48, W: 540, wip: .74, f: 'sand', f2: 'brick', ramp: 'brick2' });
          s += K.prop({ k: 'crowd', x: w * .3, y: h * .37, s: .32, n: 5, W: 260, seed: 3 }) + K.prop({ k: 'crowd', x: w * .72, y: h * .485, s: .3, n: 6, W: 300, seed: 7 });
          s += K.rect(0, h * .5, w, h * .1, C.g5);
          for (let i = 0; i < 26; i++) s += K.rect(0, h * .505 + i * h * .0036, w, 2, C.g7, 0, 'opacity=".35"');
          [[w * .06, h * .55, 150], [w * .17, h * .56, 110], [w * .86, h * .55, 160], [w * .95, h * .56, 120]].forEach(p => { s += K.palm(p[0], p[1], p[2], C.g7, C.g9); });
          s += K.rect(0, h * .6, w, h * .1, '#5F8F94');
          for (let i = 0; i < 9; i++) { const x = (i * 97 + 40) % w; s += K.rect(x, h * (.62 + (i % 3) * .025), 60 + (i % 3) * 30, 5, C.g2, 3, 'opacity=".7"'); }
          s += K.prop({ k: 'ship', kind: 'reed', x: w * .8, y: h * .665, s: .8, mast: false }) + K.both(K.rect(w * .8 - 40, h * .66 - 74, 80, 62, C.brick3, 3), 'cm-warm');
          s += K.path(`M0 ${h * .7} L${w} ${h * .69} L${w} ${h * .76} Q${w * .5} ${h * .74} 0 ${h * .77}Z`, MUD);
          s += K.path(`M0 ${h * .77} Q${w * .5} ${h * .74} ${w} ${h * .76} L${w} ${h} L0 ${h}Z`, C.brick3);
          s += K.prop({ k: 'papyrus', x: w * .04, y: h * .8, H: 130, n: 6 }) + K.prop({ k: 'papyrus', x: w * .97, y: h * .82, H: 150, n: 6 });
          s += K.car(w * .2, h * .93, 1.1, { rot: -7 });
          return { bg: s };
        },
        // 剛退水的黑泥田；fg 把阿凱的腿埋進泥巴（o.mx, o.my）
        v1e2_mud(w, h, o) {
          o = o || {}; const mx = o.mx || w * .3, my = o.my || h * .85;
          let s = A.SCENES.land(w, h, { sun: [.12, .14], hz: .38, far: 'g3', ground: MUD }).bg;
          [[w * .52, h * .36, 130], [w * .62, h * .37, 100], [w * .9, h * .36, 150]].forEach(p => { s += K.palm(p[0], p[1], p[2], C.g7, C.g9); });
          [[w * .2, h * .5, 120, 12], [w * .5, h * .56, 90, 10], [w * .08, h * .66, 70, 8], [w * .46, h * .74, 110, 12]].forEach(([x, y, rx, ry]) => { s += K.ell(x, y, rx, ry, C.g5, 'opacity=".7"') + K.ell(x - rx * .2, y - 2, rx * .5, ry * .3, C.g2, 'opacity=".6"'); });
          s += K.path(`M${w * .6} ${h} L${w * .66} ${h * .8} L${w} ${h * .78} L${w} ${h}Z`, C.sand) + K.path(`M${w * .6} ${h} L${w * .66} ${h * .8} L${w * .68} ${h * .8} L${w * .63} ${h}Z`, C.brick2);
          const fg = K.path(`M${mx - 150} ${my + 4} Q${mx} ${my - 30} ${mx + 150} ${my + 4} L${mx + 170} ${h} L${mx - 170} ${h}Z`, MUD) + K.ell(mx, my - 6, 120, 14, '#2E241C') + K.ell(mx - 40, my + 18, 30, 5, 'rgba(195,211,190,.35)') + K.circ(mx - 120, my - 40, 7, MUD) + K.circ(mx + 110, my - 52, 9, MUD) + K.circ(mx + 140, my - 24, 5, MUD);
          return { bg: s, fg };
        },
        // 刻滿聖書體的牆：中間框起來的三個字（貓頭鷹、水波、嘴巴）
        v1e2_wall(w, h) {
          let s = K.rect(0, 0, w, h, C.brick3) + K.rect(0, 0, w, 24, C.g7) + K.rect(0, 24, w, 8, C.red);
          const rnd = K.seeded(21), names = ['owl', 'water', 'mouth', 'basket', 'vulture', 'reed', 'sun', 'bread'], cs = [C.g7, C.red, C.ink, C.blue];
          for (let cx = 34; cx < w; cx += 68) { s += K.rect(cx + 32, 40, 2, h * .8, 'rgba(110,80,40,.25)'); for (let y = 70; y < h * .84; y += 62) s += K.at(cx, y, .9, `<g opacity=".45">${GL[names[Math.floor(rnd() * names.length)]](cs[Math.floor(rnd() * cs.length)])}</g>`); }
          const fx = w * .62;
          s += K.both(K.rect(fx - 62, 230, 124, 330, C.cream, 10)) + G('owl', fx, 300, 1.9) + G('water', fx, 410, 1.9, C.blue) + G('mouth', fx, 500, 1.9, C.red);
          s += K.rect(0, h * .86, w, h * .14, C.sand) + K.rect(0, h * .86, w, 5, C.brick2);
          return { bg: s };
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v1e2 = {
    id: 'v1e2', vol: '第 1 冊 古文明', volNo: 1, ep: 2, title: '尼羅河邊，小圖畫也能當文字？', next: '會排水的古城',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！奈弗說要用聖書體幫你拼名字（記得先約好怎麼念）。',
    note: '阿凱、小禾、奈弗和工人、書記都是虛構的角色，古夫王沒有出場。吉薩工地、坡道、推石頭的樣子是想像圖：金字塔到底怎麼蓋、坡道長什麼樣子，學者還有不同說法。奈弗剃短頭髮、側邊留一條辮子，是古埃及小孩常見的髮型。用聲音符號拼「凱」，是現代人借古埃及的音符玩的寫法。',
    curriculum: '108 課綱社會領域歷史 歷 Na-Ⅳ-1 非洲與西亞的早期文化',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'sand', near: 'g5' },
      back: [
        { k: 'pyramid', x: 610, y: 850, W: 360, cap: 1, f: 'sand', f2: 'brick' },
        { k: 'palm', x: 110, y: 905, H: 230 },
        { k: 'palm', x: 730, y: 930, H: 190 },
        { k: 'papyrus', x: 300, y: 980, H: 100, n: 7 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .8, window: [.04, .1, .2, .4], winC: 'g3' }, shot: '中景：客廳，小禾傳了三張貼圖，阿凱看不懂',
          back: [{ k: 'shelf', x: 735, y: 272, W: 110, H: 200 }],
          props: [{ k: 'v1e2_phone', x: 400, y: 300 }],
          actors: [
            { c: 'he', x: 160, y: 334, s: 1, pose: 'hold', expr: 'smug', hold: 'phone', look: .6 },
            { c: 'kai', x: 640, y: 336, s: 1.05, pose: 'hold', expr: 'worry', hold: 'phone', flip: 1, look: .6, sweat: 1 }
          ],
          bubbles: [
            { t: '我的暗號，\n看懂了沒？', x: 30, y: 16, w: 200, tail: [168, 150] },
            { t: '太陽……曬腳踏車……\n給樹看？', x: 468, y: 12, w: 298, tail: [628, 128] }
          ],
          tag: { t: '小禾傳了三張貼圖給哥哥', left: 8, top: 302 } },
        { scene: 'street', shot: '大格遠景：柑仔店前，兩人在搖搖車旁吵起來',
          back: [{ k: 'car', x: 300, y: 600, s: .7 }],
          actors: [
            { c: 'kai', x: 110, y: 650, s: 1.15, pose: 'fists', expr: 'mad', look: .6 },
            { c: 'he', x: 440, y: 660, s: 1.05, pose: 'point', expr: 'shout', hold: 'coin', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '圖又不是字，\n誰看得懂！', x: 14, y: 300, w: 216, tail: [128, 424] },
            { t: '誰說不是！\n我證明給你看！', x: 290, y: 340, w: 222, kind: 'shout', tail: [432, 470], fs: 25 }
          ],
          sfx: [{ t: '哼！', x: 236, y: 448, fs: 52, rot: -10 }] },
        { scene: 'v1e2_coin', shot: '小格特寫：硬幣投進去，數字盤倒轉到西元前 2560',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'kai', x: 118, y: 900, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '又倒轉了！\n這次去哪？', x: 18, y: 432, w: 206, fs: 25, tail: [108, 528] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v1e2_giza', shot: '滿版大遠景：沙漠高地上蓋到一半的大金字塔、尼羅河、綠田和黑土',
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'pointUp', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 4600 年前，吉薩', en: 'GIZA · c.2560 BC', x: 0, y: 18 },
            { t: '尼羅河邊，大約在今天的埃及。古夫王的大金字塔正在蓋。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：尼羅河。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '三角形的\n大石頭山！', x: 344, y: 668, w: 196, tail: [462, 760] },
            { t: '是金字塔！\n還沒蓋完耶！', x: 566, y: 700, w: 200, tail: [618, 794], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v1e2_mud', sceneOpt: { mx: 250, my: 400 }, shot: '中景：阿凱踩進剛退水的黑泥田，陷到大腿',
          actors: [
            { c: 'kai', x: 250, y: 470, s: 1.15, pose: 'scared', expr: 'shock', sweat: 2, noShadow: true },
            { c: 'v1e2_nefer', x: 600, y: 400, s: 1.05, pose: 'point', expr: 'yell', hold: 'v1e2_palette', flip: 1, look: .8 },
            { c: 'he', x: 722, y: 444, s: .95, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '黑黑軟軟的，好舒服……\n啊！腳拔不出來！', x: 14, y: 40, w: 336, tail: [232, 238] },
            { t: '別踩！那是剛退水的田，\n等一下要撒種子！', x: 380, y: 30, w: 330, kind: 'shout', tail: [590, 196], fs: 25 }
          ],
          sfx: [{ t: '噗滋！', x: 316, y: 330, fs: 56, rot: -8 }],
          tag: { t: '書記學徒：奈弗（虛構）', left: 560, top: 432 } },
        { scene: 'land', sceneOpt: { sun: [.8, .16], hz: .5, far: 'g3', ground: 'g5', river: { y: .56, h: .2, tilt: .02 }, near: '#3F3227' }, shot: '近景：奈弗說明尼羅河每年漲水',
          actors: [{ c: 'v1e2_nefer', x: 150, y: 650, s: 1.6, pose: 'point', expr: 'happy', hold: 'v1e2_palette', look: .4 }],
          caption: [
            { t: '每年夏天，尼羅河的水\n漲起來，淹進田裡。', x: 0, y: 14, w: 302 },
            { t: '埃及人叫這裡\n「凱美特」：\n黑色的土地。', x: 14, y: 100, w: 274, dark: false }
          ],
          bubbles: [{ t: '水退了，\n留下黑黑的肥土，\n種什麼都長得好！', x: 14, y: 218, w: 274, fs: 24, tail: [150, 368] }] },
        { scene: 'flat', sceneOpt: { c: 'g9' }, shot: '字卡：看河水把一年分成三季',
          caption: [{ t: '看河水排一年：三季，每季四個月', x: 0, y: 10 }],
          cards: [
            { icon: 'water', y: 62, t: '氾濫季：河水淹進田裡' },
            { icon: 'v1e2_sprout', y: 226, t: '生長季：水退了，撒種子' },
            { icon: 'v1e2_harvest', y: 390, t: '收穫季：割麥子、收糧食' }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sun: [.88, .08], hz: .5, far: 'brick', ground: 'sand' }, shot: '滿版：金字塔工地，工人推石塊、潑水，書記記下發出去的麵包',
          back: [
            { k: 'pyramid', x: 470, y: 560, W: 620, wip: .72, f: 'sand', f2: 'brick', ramp: 'brick2' },
            { k: 'crowd', x: 190, y: 420, s: .32, n: 5, W: 260, seed: 5 },
            { k: 'v1e2_block', x: 330, y: 690 },
            { k: 'table', x: 610, y: 700, W: 170 },
            { k: 'v1e2_bread', x: 610, y: 624 }
          ],
          actors: [
            { c: 'v1e2_worker', x: 200, y: 692, s: .95, pose: 'push', expr: 'shout' },
            { c: 'v1e2_worker2', x: 535, y: 698, s: .92, pose: 'offer', expr: 'calm', hold: 'v1e2_jarW', flip: 1 },
            { c: 'v1e2_scribe', x: 745, y: 705, s: .95, pose: 'write', expr: 'smug', hold: 'v1e2_sheet', flip: 1, noShadow: true },
            { c: 'v1e2_nefer', x: 120, y: 1050, s: 1.25, pose: 'point', expr: 'happy', hold: 'v1e2_palette', look: .6, noShadow: true },
            { c: 'kai', x: 462, y: 1050, s: 1.25, pose: 'stand', expr: 'worry', sweat: 2, flip: 1, look: .7, noShadow: true },
            { c: 'he', x: 660, y: 1050, s: 1.25, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: 1, noShadow: true }
          ],
          bubbles: [
            { t: '一、二——推！', x: 70, y: 410, w: 210, kind: 'shout', fs: 25, tail: [218, 496] },
            { t: '第三隊領了\n十條麵包，記好！', x: 548, y: 440, w: 228, fs: 24, tail: [722, 562] },
            { t: '才不是！\n我們分隊輪班，\n每天都領糧食。', x: 14, y: 686, w: 240, fs: 24, tail: [132, 812] },
            { t: '後面有人\n拿鞭子在趕嗎？', x: 270, y: 708, w: 210, fs: 24, tail: [452, 806] },
            { t: '原來這裡\n也要記帳！', x: 560, y: 712, w: 196, fs: 24, tail: [650, 826] }
          ],
          caption: [{ t: '學者從吉薩的工人村、工人墓\n和糧食紀錄推論：蓋金字塔的是\n一隊一隊輪班的工人，不是奴隸。', x: 16, y: 18, w: 470 }] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v1e2_wall', shot: '細長大格：刻滿圖畫的牆，阿凱照圖猜意思',
          actors: [{ c: 'kai', x: 112, y: 1034, s: 1.6, pose: 'think', expr: 'think', look: .5 }],
          caption: [
            { t: '聖書體（象形文字）', en: 'HIEROGLYPHS', x: 0, y: 46 },
            { t: '五千多年前就有了，常刻在\n神廟和墳墓的牆上。', x: 0, y: 118, w: 344, dark: false }
          ],
          bubbles: [{ t: '貓頭鷹……喝水……\n張大嘴巴？', x: 14, y: 590, w: 296, kind: 'think', tail: [130, 712] }] },
        { scene: 'flat', sceneOpt: { c: 'clay2' }, shot: '字卡：圖的兩種用法、書記和莎草紙',
          caption: [{ t: '奈弗說：這些圖有兩種用法', x: 0, y: 16 }],
          cards: [
            { icon: 'v1e2_sunI', y: 72, t: '有的圖就是那個東西：\n畫太陽，就是「太陽」。' },
            { icon: 'v1e2_owlI', y: 278, t: '有的圖只代表聲音：\n貓頭鷹念「m」（ㄇ）。' },
            { icon: 'v1e2_papI', y: 484, t: '書記用蘆葦筆沾墨，\n寫在莎草紙上，\n要練好多年。' }
          ],
          actors: [{ c: 'v1e2_nefer', x: 300, y: 1100, s: 1.5, pose: 'pointUp', expr: 'grin', flip: 1, look: .5 }],
          bubbles: [{ t: '大家照同一套規則讀，\n我已經練了三年！', x: 14, y: 726, w: 292, fs: 24, tail: [262, 830] }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'land', sceneOpt: { sky: 'brick3', sun: [.82, .4], hz: .55, far: 'g5', ground: 'sand', river: { y: .6, h: .12, tilt: .01 } }, shot: '矮寬格：傍晚河邊，奈弗送阿凱一張拼了名字的莎草紙',
          props: [{ k: 'v1e2_namePap', x: 282, y: 330, s: .9, rot: -4 }],
          actors: [
            { c: 'v1e2_nefer', x: 140, y: 392, s: .95, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 420, y: 392, s: .95, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 540, y: 394, s: .9, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '送你！這是用聲音\n拼的名字。', x: 14, y: 14, w: 240, fs: 24, tail: [150, 210] },
            { t: '籃子、鳥、葉子，\n拼成『凱』？', x: 268, y: 14, w: 236, fs: 24, tail: [412, 206] }
          ],
          caption: [{ t: '後來一千多年\n沒人會讀這種字，\n直到 1822 年\n才被解開。', x: 520, y: 14, w: 250, dark: false }] },
        { scene: 'street', shot: '收尾大格：回到柑仔店前，兄妹拿出約好的暗號表',
          back: [{ k: 'car', x: 650, y: 592, s: .85 }],
          props: [{ k: 'v1e2_key', x: 300, y: 520, rot: -3 }],
          actors: [
            { c: 'kai', x: 170, y: 600, s: 1.1, pose: 'raise', expr: 'grin', hold: 'phone', look: .5 },
            { c: 'he', x: 440, y: 606, s: 1.08, pose: 'offer', expr: 'smug', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '早上騎車去公園！\n這次看懂了！', x: 14, y: 200, w: 252, fs: 24, tail: [176, 380] },
            { t: '圖也能當字，\n但要先約好\n怎麼看。', x: 448, y: 236, w: 188, fs: 24, tail: [444, 410] },
            { t: '嗶嗶——\n下一站，\n印度河！', x: 642, y: 230, w: 134, kind: 'car', fs: 22, tail: [640, 470] }
          ],
          caption: [{ t: '下一話：會排水的古城', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '尼羅河送的黑土', t: '尼羅河每年夏天漲水、淹進田裡，水退了留下黑色的肥土。埃及人把這裡叫「凱美特」，意思是「黑色的土地」。' },
      { h: '看河水排日曆', t: '埃及人把一年分成氾濫季、生長季、收穫季，每季四個月、每個月 30 天，再加 5 天，一年 365 天。' },
      { h: '聖書體（象形文字）', t: '大約五千多年前出現。有的圖代表那個東西，有的圖只代表聲音（貓頭鷹念 m）。書記在莎草紙上常寫比較快的簡化字體，要從小練很多年。' },
      { h: '誰蓋了金字塔', t: '大金字塔是古夫王的墳墓，大約西元前 2560 年蓋好，原本高約 146 公尺。學者從吉薩的工人村、工人墓和糧食紀錄推論：蓋的人是分隊輪班的工人，領麵包、啤酒等糧食當薪水，不是奴隸。' },
      { h: '解開圖畫密碼', t: '後來一千多年沒人會讀象形文字。1799 年找到羅塞塔石碑（同一段話用三種字寫），1822 年法國學者商博良靠它解開了象形文字。' }
    ],
    map: {
      bounds: { lon: [25, 37], lat: [21.5, 32.5] },
      rivers: ['nile', 'nileRosetta', 'nileDamietta'],
      labels: [
        { t: '地中海', lat: 32, lon: 28, size: 26, f: 'cream' },
        { t: '紅海', lat: 24.3, lon: 36.1, size: 24, f: 'cream', rot: 58 },
        { t: '尼羅河', lat: 27.6, lon: 29.9, size: 24, f: 'g7' },
        { t: '沙漠', lat: 29.4, lon: 27.4, size: 22, f: 'clay2' },
        { t: '沙漠', lat: 28.6, lon: 32.6, size: 22, f: 'clay2' },
        { t: '今天的埃及', lat: 23.2, lon: 28.6, size: 22, f: 'wood' }
      ],
      cities: [
        { n: '吉薩', lat: 29.98, lon: 31.13, main: 1, side: 'l' },
        { n: '羅塞塔', lat: 31.4, lon: 30.42, side: 'l' },
        { n: '亞斯文', lat: 24.09, lon: 32.9, side: 'r' }
      ],
      cap: '紅點是吉薩，大金字塔就在這裡。尼羅河由南往北流，到下游分成好幾條支流流進地中海（這裡只畫兩條）；羅塞塔石碑是在羅塞塔附近找到的。（河道、海岸畫的是今天的樣子，是簡化畫法。）',
      alt: '埃及地圖：尼羅河從南邊的亞斯文往北流，經過吉薩，在下游分支流進地中海，東邊是紅海，河的兩邊都是沙漠'
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從大金字塔蓋好到今天，已經四千五百多年。',
      items: [
        { y: -3200, when: '約西元前 3200 年', t: '埃及出現\n象形文字', side: 'u', w: 186 },
        { y: -2560, when: '約西元前 2560 年', t: '古夫王的\n大金字塔蓋好', side: 'd', main: 1, w: 186 },
        { y: 394, when: '西元 394 年', t: '已知最後一段\n象形文字', side: 'u', w: 160 },
        { y: 1822, when: '西元 1799、1822 年', t: '找到羅塞塔石碑，\n商博良解開它', side: 'd', w: 214 },
        { y: 2026, when: '今天', t: '羅塞塔石碑\n在大英博物館', side: 'u', w: 160 }
      ]
    },
    sources: [
      '美國古埃及研究協會 AERA〈The Lost City of the Pyramids〉（吉薩工人村 1988 年起發掘、糧倉，發麵包和啤酒給工人；工人墓）',
      '大英博物館〈Rosetta Stone〉館藏與說明（1799 年在羅塞塔附近找到、同一段話用聖書體／世俗體／希臘文三種字寫、1822 年商博良解讀）',
      '大英百科〈Egyptian calendar〉（365 天、三季各四個月、每月 30 天加 5 天）、〈Hieroglyph〉（約西元前 3200 年出現、圖可以表意也可以表音、最後的碑文在西元 394 年）、〈Pyramids of Giza〉（古夫王、約西元前 2560 年、原高約 146 公尺）',
      '大都會藝術博物館〈Egyptian Hieroglyphs〉〈Scribes〉相關專文（書記要長時間訓練、在莎草紙上多用簡化的僧侶體）',
      '108 課綱社會領域 歷 Na-Ⅳ-1'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '尼羅河每年漲水，水退了以後，田裡會留下什麼？', opts: ['黑色的肥土', '白白的鹽巴', '一堆大石頭', '乾乾的黃沙'], a: 0, why: '河水帶來黑色的肥土，所以埃及人把這裡叫「凱美特」：黑色的土地。' },
      { id: 'q2', d: 1, type: 'mc', q: '古埃及的書記常把字寫在什麼上面？', opts: ['莎草紙', '竹子片', '大泥板', '動物皮'], a: 0, why: '書記用蘆葦筆沾墨，寫在用莎草做成的紙上。' },
      { id: 'q3', d: 2, type: 'tf', q: '象形文字裡，每一個圖都只代表它畫的那個東西。', a: false, why: '有的圖代表那個東西，有的圖只代表聲音，例如貓頭鷹念「m」。' },
      { id: 'q4', d: 2, type: 'match', q: '把季節和那時候田裡發生的事配起來。', pairs: [['氾濫季', '河水淹進田裡'], ['生長季', '水退了，撒種子'], ['收穫季', '割麥子、收糧食']], why: '埃及人看尼羅河的水來安排一年：先淹水，再種，最後收。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「金字塔是奴隸被鞭子打著蓋起來的。」根據這一話，哪個說法最正確？', opts: ['不對，學者認為是分隊輪班、領糧食的工人', '對，國王抓了好多奴隸，在後面用鞭子趕他們做工', '不對，金字塔是風吹出來的大石頭山', '不對，是外國商人花很多錢請人來蓋的'], a: 0, why: '學者從吉薩的工人村、工人墓和糧食紀錄推論：蓋金字塔的是有組織、輪班、領糧食的工人隊伍。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
