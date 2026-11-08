/* 世界史漫畫 第 1 冊 古文明・第 5 話（只有資料；這一話自己的圖形用 ComicArt.extend 註冊，名字前綴 v1e5_）。
   國中社會會再學到：西亞的早期文化（腓尼基人與字母）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const C = K.C, PUR = C.purple, PUR2 = '#8E4A7E';
    // 折線筆畫（用填色膠囊串，維持無描邊）
    const strokes = (pts, w, f) => { let s = ''; for (let i = 0; i < pts.length - 1; i++) s += K.cap(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], w, f); return s; };
    // 腓尼基字形（40×40 單位格，左上原點）：aleph＝橫躺的牛頭（尖端〔牛鼻子〕朝左、兩角朝右開口，加一豎；像側躺的 K）；beth＝左上三角形的頭＋一豎。簡化畫法。
    const GLYPH = {
      aleph: (w, f) => strokes([[34, 6], [6, 20], [34, 34]], w, f) + strokes([[23, 2], [27, 38]], w, f),
      beth: (w, f) => strokes([[28, 4], [8, 15], [28, 24]], w, f) + strokes([[28, 4], [28, 38]], w, f)
    };
    const glyph = (n, x, y, u, f, w) => `<g transform="translate(${K.r1(x)} ${K.r1(y)}) scale(${u})">${GLYPH[n](w || 5, f || C.ink)}</g>`;
    const arrowR = (x, y) => K.poly(`${x},${y - 3} ${x + 6},${y - 3} ${x + 6},${y - 8} ${x + 13},${y} ${x + 6},${y + 8} ${x + 6},${y + 3} ${x},${y + 3}`, C.red);
    // 推羅港：天空、遠方黎巴嫩的山（雪松）、海、島上的城、前景石頭碼頭
    const harbor = (w, h, o) => {
      o = o || {}; const hz = h * (o.hz != null ? o.hz : .42), qy = o.quay === false ? h + 10 : h * (o.quay || .8);
      let s = K.rect(0, 0, w, h, K.col(o.sky) || C.sky);
      if (o.sun !== false) { const sx = w * (o.sun ? o.sun[0] : .82), sy = h * (o.sun ? o.sun[1] : .13), R = Math.min(w, h); s += K.circ(sx, sy, R * .3, 'url(#cm-sun)') + K.circ(sx, sy, R * .065, '#FFF8DC'); }
      if (o.coast !== false) {
        s += K.path(`M0 ${K.r1(hz + 2)} L0 ${K.r1(hz - h * .17)} Q${K.r1(w * .1)} ${K.r1(hz - h * .25)} ${K.r1(w * .2)} ${K.r1(hz - h * .13)} Q${K.r1(w * .3)} ${K.r1(hz - h * .06)} ${K.r1(w * .44)} ${K.r1(hz + 2)}Z`, K.col(o.far) || C.g3);
        [[.04, .2], [.1, .23], [.16, .15], [.24, .1], [.31, .06]].forEach(([fx, fy]) => { s += K.prop({ k: 'tree', kind: 'cedar', x: w * fx, y: hz - h * fy + h * .02, H: h * .09, f: 'g5', f2: 'g7' }); });
      }
      s += K.rect(0, hz, w, h - hz, K.col(o.water) || C.g5);
      for (let i = 0; i < 16; i++) { const yy = hz + (qy - hz) * ((i * .37) % 1), xx = (i * 151) % w, k2 = (yy - hz) / (h - hz); s += K.rect(xx, yy, 30 + k2 * 70, 3 + k2 * 4, C.g2, 2, 'opacity=".55"'); }
      if (o.city !== false) {   // 推羅：蓋在離岸不遠的小島上（想像圖）
        const cx = w * (o.cityX || .72), by = hz + h * .035, cw = w * (o.cityW || .44);
        s += K.path(`M${K.r1(cx - cw * .55)} ${K.r1(by + h * .012)} Q${K.r1(cx)} ${K.r1(by - h * .03)} ${K.r1(cx + cw * .55)} ${K.r1(by + h * .012)}Z`, C.brick2);
        [[-.36, .2, .16], [-.16, .22, .2], [.08, .18, .14], [.27, .2, .18]].forEach(([dx, ww, hh]) => { s += K.prop({ k: 'house', roof: 'flat', roofC: 'brick2', f: 'brick3', x: cx + cw * dx, y: by - h * .03, W: cw * ww, H: h * hh * .5, s: 1 }); });
        s += K.prop({ k: 'tower', x: cx - cw * .45, y: by, W: cw * .09, H: h * .1, f: 'brick' }) + K.prop({ k: 'tower', x: cx + cw * .45, y: by, W: cw * .09, H: h * .1, f: 'brick' });
        s += K.prop({ k: 'wall', x: cx, y: by, W: cw * .84, H: h * .045, f: 'brick', seed: 4 });
      }
      if (o.quay !== false) {
        s += K.rect(0, qy, w, h - qy, C.brick3) + K.rect(0, qy, w, 10, C.brick2);
        const rnd = K.seeded(o.seed || 8);
        for (let yy = qy + 26, j = 0; yy < h - 8; yy += 38, j++) for (let xx = (j % 2) * 40; xx < w; xx += 92) s += K.rect(xx + 4, yy, 80 + rnd() * 6, 4, C.brick, 2, 'opacity=".8"');
      }
      return { bg: s };
    };
    root.ComicArt.extend({
      cast: {
        v1e5_mara: { name: '瑪拉（虛構）', skin: 'skinB', top: 'cream', skirt: 'purple', hair: 'long', hat: 'band', hatC: 'purple', acc: ['earring'], r: 22, k: .94 },
        v1e5_trader: { name: '商人', skin: 'skinB', robe: 'cream', trim: 'purple', hat: 'cone', hatC: 'clay3', beard: 1, r: 19, k: 1.16 },
        v1e5_sailor: { name: '水手', skin: 'skinC', top: 'g5', skirt: 'wood', sleeve: 'skinC', hair: 'man', beard: 1, r: 19, k: 1.12 }
      },
      scenes: {
        v1e5_harbor: harbor,
        // 染坊：磚牆、曬布繩上的紫布、石頭染缸、一堆骨螺殼（想像圖）
        v1e5_dye(w, h, o) {
          o = o || {}; const fy = h * (o.hz || .72);
          let s = K.brickWall(0, 0, w, fy, C.brick3, C.brick, 7) + K.rect(0, fy, w, h - fy, C.sand) + K.rect(0, fy, w, 6, 'rgba(21,23,20,.12)');
          s += K.rect(0, h * .07, w, 4, C.wood);
          for (let x = 18, i = 0; x < w - 40; x += 112, i++) s += K.both(K.path(`M${x} ${K.r1(h * .07)} L${x + 78} ${K.r1(h * .07)} L${x + 80} ${K.r1(h * (.24 + (i % 2) * .05))} Q${x + 40} ${K.r1(h * (.27 + (i % 2) * .05))} ${x - 2} ${K.r1(h * (.24 + (i % 2) * .05))}Z`, i % 3 === 1 ? PUR2 : PUR));
          (o.vats || [.16]).forEach(fx => { const x = w * fx, y = fy + h * .1; s += K.groundShadow(x, y + 2, 84, 10) + K.both(K.rect(x - 74, y - 64, 148, 64, C.brick2, 10), 'cm-warm') + K.ell(x, y - 64, 74, 13, C.brick) + K.ell(x, y - 63, 62, 9, PUR); });
          (o.shells || [[.86, .06], [.9, .1], [.8, .1], [.94, .05]]).forEach(([fx, dy], i) => { s += K.prop({ k: 'shell', x: w * fx, y: fy + h * dy, s: .42, rot: i * 40 - 60 }); });
          return { bg: s };
        },
        // 比布魯斯王陵：石頭墓室裡的阿希拉姆石棺（想像圖；蓋子邊上一圈字是簡化畫法）
        v1e5_tomb(w, h) {
          let s = K.rect(0, 0, w, h, C.basalt2) + K.rect(0, h * .78, w, h * .22, C.basalt);
          for (let j = 0; j < 9; j++) for (let i = 0; i < 4; i++) s += K.rect(i * 96 + (j % 2) * 48 - 20, j * 86 + 10, 88, 78, C.basalt3, 3, 'opacity=".22"');
          s += K.circ(w * .62, h * .5, w * .7, 'url(#cm-glow)', 'opacity=".35"');
          const x = w * .64, y = h * .8, W = w * .66, H = h * .2, L = x - W / 2;
          s += K.groundShadow(x, y + 4, W * .62, 14);
          [0, 1, 2, 3].forEach(i => { s += K.rect(L + 10 + i * (W - 50) / 3, y - 26, 30, 26, C.brick2, 4); });
          s += K.both(K.rect(L, y - 26 - H, W, H, C.brick3, 6), 'cm-warm');
          for (let i = 0; i < 6; i++) { const fx = L + 26 + i * (W - 52) / 5; s += K.circ(fx, y - 26 - H * .72, 9, C.brick) + K.path(`M${K.r1(fx - 12)} ${K.r1(y - 34)} Q${K.r1(fx - 13)} ${K.r1(y - 26 - H * .62)} ${K.r1(fx)} ${K.r1(y - 26 - H * .64)} Q${K.r1(fx + 13)} ${K.r1(y - 26 - H * .62)} ${K.r1(fx + 12)} ${K.r1(y - 34)}Z`, C.brick); }
          const ly = y - 26 - H;
          s += K.both(K.path(`M${K.r1(L - 8)} ${K.r1(ly)} L${K.r1(L - 2)} ${K.r1(ly - 40)} Q${K.r1(x)} ${K.r1(ly - 74)} ${K.r1(L + W + 2)} ${K.r1(ly - 40)} L${K.r1(L + W + 8)} ${K.r1(ly)}Z`, C.brick3), 'cm-warm');
          s += K.rect(L - 6, ly - 22, W + 12, 18, C.brick, 2);
          for (let i = 0, gx = L + W - 16; gx > L + 6; i++, gx -= 19) s += glyph(i % 2 ? 'beth' : 'aleph', gx - 14, ly - 21, .4, C.wood, 6);
          return { bg: s };
        }
      },
      props: {
        // 牆上的字母海報
        v1e5_poster: x => K.place(x, K.both(K.rect(-70, -100, 140, 100, C.cream, 4)) + K.rect(-70, -100, 140, 10, C.red) + K.txt(0, -50, 'A B C', 34, C.g9) + K.txt(0, -16, 'D E F G', 24, C.g5)),
        // 一堆雪松木
        v1e5_logs: x => { let s = K.groundShadow(0, 2, 110, 8); [[0, 3], [1, 2], [2, 1]].forEach(([row, n]) => { for (let i = 0; i < n; i++) { const cx = (i - (n - 1) / 2) * 52, cy = -18 - row * 32; s += K.rect(cx - 80, cy - 16, 120, 32, C.wood, 16) + K.circ(cx + 40, cy, 16, C.clay3) + K.circ(cx + 40, cy, 7, C.clay2); } }); return K.place(x, s); },
        // 扛在肩上的一根雪松木
        v1e5_log: x => K.place(x, K.rect(-90, -16, 180, 32, C.wood, 16) + K.circ(90, 0, 16, C.clay3) + K.circ(90, 0, 7, C.clay2)),
        // 玻璃瓶（腓尼基人做玻璃拿去賣）
        v1e5_glass: x => K.place(x, K.groundShadow(0, 2, 44, 5) + [[-26, '#5FA8A0', 46], [0, '#3E6E8E', 60], [26, '#8FC7B8', 42]].map(([dx, f, hh]) => K.path(`M${dx - 5} ${-hh} L${dx + 5} ${-hh} L${dx + 5} ${-hh * .7} Q${dx + 15} ${-hh * .5} ${dx + 12} 0 L${dx - 12} 0 Q${dx - 15} ${-hh * .5} ${dx - 5} ${-hh * .7}Z`, f, 'opacity=".9"') + K.rect(dx - 7, -hh * .55, 3, hh * .4, C.cream, 1, 'opacity=".7"')).join('')),
        // 一疊紫布
        v1e5_bolt: x => K.place(x, K.both(K.rect(-38, -34, 76, 34, PUR, 5)) + K.rect(-34, -26, 68, 4, PUR2) + K.rect(-34, -14, 68, 4, PUR2)),
        // 沾到染料的紫色手（蓋在手上）
        v1e5_blob: x => K.place(x, K.circ(0, 0, x.r || 12, PUR) + K.ell(4, 14, 4, 6, PUR)),
        // 陶片：右邊 aleph、左邊 beth（腓尼基字由右往左寫）
        v1e5_sherd: x => K.place(x, K.both(K.path('M-52 -30 L-20 -42 L40 -38 L56 -6 L44 30 L-10 36 L-50 22Z', C.clay3), 'cm-warm') + glyph('aleph', 8, -18, .9, C.wood, 6) + glyph('beth', -44, -18, .9, C.wood, 6))
      },
      icons: {
        // 牛頭 → aleph → A
        v1e5_aleph() { return K.rect(0, 0, 120, 90, C.paper) + K.path('M10 30 L32 30 L27 60 Q21 68 15 60Z', C.clay2) + K.cap(13, 32, 4, 14, 6, C.cream) + K.cap(29, 32, 38, 14, 6, C.cream) + K.circ(16, 40, 2.2, C.ink) + K.circ(26, 40, 2.2, C.ink) + arrowR(40, 45) + glyph('aleph', 56, 26, .9, C.red, 5) + arrowR(92, 45) + K.txt(112, 60, 'A', 34, C.ink); },
        // 房子 → beth → B
        v1e5_beth() { return K.rect(0, 0, 120, 90, C.paper) + K.poly('4,40 20,24 36,40', C.red) + K.rect(8, 40, 24, 22, C.clay3) + K.rect(17, 50, 7, 12, C.wood) + arrowR(40, 45) + glyph('beth', 54, 26, .9, C.red, 5) + arrowR(92, 45) + K.txt(112, 60, 'B', 34, C.ink); },
        // 只寫子音 B _ T → 加上母音 BAT
        v1e5_vowel() { return K.rect(0, 0, 120, 90, C.g3) + K.rect(8, 14, 104, 30, C.cream, 6) + K.txt(60, 38, 'B _ T', 22, C.ink) + K.rect(8, 52, 104, 30, C.cream, 6) + K.txt(60, 76, 'B A T', 22, C.ink) + K.rect(52, 55, 16, 24, C.red, 3, 'opacity=".25"'); }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v1e5 = {
    id: 'v1e5', vol: '第 1 冊 古文明', volNo: 1, ep: 5, title: '二十二個字母走天下', next: '國王大道上的快遞',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！瑪拉說要送你一塊紫布（但阿凱的手到現在還是紫的）。',
    note: '阿凱、小禾、瑪拉和港口的商人、水手都是虛構的角色。推羅港、島上的城、染坊、阿希拉姆石棺的樣子是想像圖；船是依學者重建的樣子簡化畫的；腓尼基字母的字形也是簡化畫法。字母 aleph 像牛頭、beth 像房子，是學者常見的解釋；迦太基在西元前 814 年建城是傳統說法；阿希拉姆石棺上的字大約是西元前 1000 年，也有學者認為更晚一些。',
    curriculum: '國中社會會再學到：西亞的早期文化（腓尼基人與字母）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick3', near: 'g5' },
      back: [
        { k: 'ship', kind: 'galley', x: 170, y: 900, s: .78, stripes: 'purple' },
        { k: 'tree', kind: 'cedar', x: 680, y: 900, H: 250 },
        { k: 'amphora', x: 590, y: 930, s: 1.1 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'hold', expr: 'happy', hold: 'notebook', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'kitchen', shot: '中景：小禾在家練英文字母，阿凱在旁邊嘴硬',
          back: [{ k: 'v1e5_poster', x: 470, y: 236 }],
          actors: [
            { c: 'he', x: 330, y: 334, s: 1.12, pose: 'hold', expr: 'worry', hold: 'notebook', look: .7 },
            { c: 'kai', x: 640, y: 336, s: 1.05, pose: 'think', expr: 'smug', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: 'A、B、C……\nA 為什麼長這樣？', x: 120, y: 12, w: 270, tail: [326, 132] },
            { t: '才 26 個，簡單啦！\n上次的甲骨文有幾千個咧。', x: 414, y: 10, w: 356, tail: [626, 118] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'street', shot: '大格遠景：阿凱搶走筆記本跑，小禾追',
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'grin', flip: 1, look: .7, sweat: 1, hold: 'notebook', holdS: .75 }
          ],
          back: [{ k: 'car', x: 118, y: 628, s: .78 }],
          bubbles: [
            { t: 'A 一定是\n倒過來的帳篷！', x: 18, y: 318, w: 216, tail: [206, 428] },
            { t: '陳以凱！！\n還我筆記本！', x: 296, y: 290, w: 210, kind: 'shout', tail: [428, 398], fs: 25 }
          ],
          sfx: [{ t: '噠噠！', x: 330, y: 590, fs: 54, rot: -8 }] },
        { scene: 'coin', sceneOpt: { year: '1000' }, shot: '小格特寫：硬幣投進去，數字盤倒轉到西元前 1000',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！\n倒轉到 1000！', x: 18, y: 432, w: 206, fs: 25, tail: [100, 540] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v1e5_harbor', sceneOpt: { hz: .4, quay: .78 }, shot: '滿版遠景：海上的島城推羅、條紋帆的船、碼頭',
          back: [
            { k: 'ship', kind: 'galley', x: 600, y: 560, s: .5, stripes: 'purple', flip: 1 },
            { k: 'ship', kind: 'galley', x: 270, y: 700, s: .95, stripes: 'purple' },
            { k: 'amphora', x: 730, y: 905, s: .95 },
            { k: 'amphora', x: 765, y: 925, s: .8 },
            { k: 'crate', x: 360, y: 900, s: .9 },
            { k: 'car', x: 150, y: 1010, s: .8 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'point', expr: 'awe', flip: 1, look: -.6 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [
            { t: '大約 3000 年前，推羅', en: 'TYRE · c.1000 BC', x: 0, y: 18 },
            { t: '腓尼基人住在地中海東岸，大約是今天的黎巴嫩。推羅城蓋在離岸不遠的小島上。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：推羅。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 880], fs: 24 },
            { t: '好多船！\n帆上還有條紋！', x: 414, y: 640, w: 216, tail: [462, 770] },
            { t: '空氣\n鹹鹹的！', x: 640, y: 690, w: 136, tail: [630, 806], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v1e5_dye', sceneOpt: { vats: [.42] }, shot: '中景：染坊，阿凱的手伸進染缸變紫色，瑪拉登場',
          actors: [
            { c: 'kai', x: 200, y: 440, s: 1.15, pose: 'raise', expr: 'shock', sweat: 2, look: .5 },
            { c: 'he', x: 386, y: 450, s: 1.02, pose: 'hold', expr: 'worry', hold: 'notebook', look: -.6, flip: 1 },
            { c: 'v1e5_mara', x: 600, y: 444, s: 1.15, pose: 'point', expr: 'grin', flip: 1, look: .8 }
          ],
          props: [{ k: 'v1e5_blob', x: 253, y: 212, r: 13 }],
          bubbles: [
            { t: '我的手！\n變成紫色了！', x: 14, y: 16, w: 230, kind: 'shout', tail: [186, 200] },
            { t: '哥，你又亂摸！', x: 262, y: 128, w: 210, fs: 24, tail: [380, 262] },
            { t: '我是染坊的瑪拉！\n那是骨螺染料，\n好幾天才洗得掉！', x: 494, y: 16, w: 276, fs: 25, tail: [596, 222] }
          ],
          sfx: [{ t: '噗通！', x: 60, y: 300, fs: 50, rot: -10 }],
          tag: { t: '染坊的女兒：瑪拉（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'sand' }, shot: '特寫：一顆顆骨螺',
          props: [
            { k: 'shell', x: 92, y: 360, s: 1.5, rot: -8 },
            { k: 'shell', x: 214, y: 372, s: 1.25, rot: 10 },
            { k: 'shell', x: 156, y: 296, s: .85, rot: -4, op: .75 }
          ],
          caption: [
            { t: '骨（ㄍㄨˇ）螺', say: '骨螺', en: 'MUREX', x: 0, y: 16, w: 190 },
            { t: '骨螺紫很貴，\n常是國王和\n有錢人穿的顏色。', x: 0, y: 92, w: 236, dark: false }
          ],
          bubbles: [{ t: '要好幾千隻骨螺，\n才染得出\n一小塊布！', x: 30, y: 402, w: 242, fs: 25 }] },
        { scene: 'v1e5_dye', sceneOpt: { vats: [.12], shells: [] }, shot: '中景：阿凱皺著臉嫌臭，瑪拉拿著一疊紫布',
          actors: [
            { c: 'kai', x: 120, y: 540, s: 1.15, pose: 'think', expr: 'worry', sweat: 1, look: .6 },
            { c: 'v1e5_mara', x: 340, y: 546, s: 1.12, pose: 'offer', expr: 'smug', flip: 1, look: .6 }
          ],
          props: [{ k: 'v1e5_bolt', x: 268, y: 432 }],
          bubbles: [
            { t: '好臭！\n什麼味道？', x: 12, y: 150, w: 200, tail: [130, 304] },
            { t: '骨螺放久就臭，\n可是染出來的布\n超值錢！', x: 236, y: 120, w: 218, fs: 24, tail: [328, 330] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v1e5_harbor', sceneOpt: { hz: .36, quay: .54, city: false }, shot: '滿版：碼頭上裝貨、商人記帳，大家討論字母',
          back: [
            { k: 'ship', kind: 'galley', x: 560, y: 556, s: .95, stripes: 'purple' },
            { k: 'crowd', x: 610, y: 640, n: 5, W: 300, seed: 21 },
            { k: 'v1e5_logs', x: 250, y: 660 },
            { k: 'crate', x: 520, y: 650 },
            { k: 'v1e5_glass', x: 520, y: 590 },
            { k: 'amphora', x: 700, y: 652 },
            { k: 'amphora', x: 748, y: 662, s: .85 }
          ],
          actors: [
            { c: 'v1e5_sailor', x: 130, y: 640, s: 1, pose: 'raise', expr: 'grin', look: .6 },
            { c: 'v1e5_trader', x: 390, y: 620, s: 1, pose: 'hold', expr: 'smug', hold: 'scroll', look: .4 },
            { c: 'v1e5_mara', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'stand', expr: 'smug', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'fists', expr: 'mad', hold: 'notebook', flip: 1, look: 1 }
          ],
          props: [{ k: 'v1e5_log', x: 160, y: 404, rot: -4 }],
          caption: [{ t: '推羅的商人把黎巴嫩山上的雪松木、玻璃、紫布，用船運到埃及和地中海各地。', x: 16, y: 18, w: 470 }],
          bubbles: [
            { t: '雪松木又香又耐用，\n埃及人最愛！', x: 16, y: 280, w: 270, fs: 25, tail: [120, 400] },
            { t: '紫布三匹、\n玻璃瓶二十個，\n記下來！', x: 304, y: 252, w: 214, fs: 25, tail: [394, 386] },
            { t: '我們的字\n大約二十二個，\n記帳超快！', x: 14, y: 620, w: 226, fs: 25, tail: [128, 770] },
            { t: '才二十二個？\n漢字輸了吧！', x: 268, y: 640, w: 214, fs: 25, tail: [452, 760] },
            { t: '才沒有輸！\n漢字看得出意思，\n字母好拼音，\n兩種都很厲害。', x: 546, y: 600, w: 228, fs: 24, tail: [654, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v1e5_tomb', shot: '細長大格：比布魯斯王陵裡，刻著字母的阿希拉姆石棺',
          actors: [{ c: 'he', x: 62, y: 1034, s: 1.6, pose: 'lookup', expr: 'awe', look: .5 }],
          bubbles: [
            { t: '石棺上刻的\n就是我們的字，\n從右往左讀！', x: 14, y: 14, w: 222, fs: 25, tail: [344, 60] },
            { t: '像一根一根\n小樹枝！', x: 12, y: 640, w: 170, fs: 25, tail: [70, 742] }
          ],
          caption: [
            { t: '比布魯斯的\n阿希拉姆石棺', en: 'BYBLOS', x: 0, y: 166, w: 230 },
            { t: '在推羅北邊。蓋子上的字大約刻在西元前 1000 年，是很早的長篇字母文字。', x: 0, y: 276, w: 336, dark: false }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g9' }, shot: '字卡：aleph 變 A、beth 變 B、只寫子音',
          caption: [
            { t: '一個符號＝一個聲音', en: 'ALPHABET', x: 0, y: 14 },
            { t: '腓尼基 → 希臘 → 羅馬 → ABC', x: 14, y: 736, w: 394, dark: false }
          ],
          cards: [
            { icon: 'v1e5_aleph', y: 92, t: 'aleph 是「牛」：\n牛頭轉一轉，變成 A。' },
            { icon: 'v1e5_beth', y: 298, t: 'beth 是「房子」：\n後來變成 B。' },
            { icon: 'v1e5_vowel', y: 504, t: '只寫子音，像 B _ T，\n要猜是 BAT 還是 BIT；\n希臘人加上母音，就不用猜。' }
          ],
          bubbles: [{ t: '原來 A 以前\n是一頭牛！', x: 60, y: 852, w: 300, fs: 26 }],
          tag: { t: '牛頭、房子的說法，是學者常見的解釋' } }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v1e5_harbor', sceneOpt: { hz: .5, quay: .84, city: false, sun: [.12, .2] }, shot: '矮寬格：船往西開，大家在碼頭揮手',
          back: [{ k: 'ship', kind: 'galley', x: 250, y: 318, s: .62, stripes: 'purple', flip: 1 }],
          actors: [
            { c: 'v1e5_mara', x: 520, y: 388, s: .9, pose: 'wave', expr: 'happy', flip: 1, look: -.6 },
            { c: 'kai', x: 636, y: 390, s: .9, pose: 'wave', expr: 'grin', flip: 1, look: -.6 },
            { c: 'he', x: 730, y: 392, s: .9, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.6 }
          ],
          caption: [{ t: '腓尼基人往西航行，在地中海四周建了很多新城市。傳說推羅人大約西元前 814 年，建了迦太基（今天的突尼西亞）。', x: 0, y: 12, w: 520 }],
          bubbles: [
            { t: '叔叔的船\n要去迦太基！', x: 378, y: 138, w: 196, fs: 24, tail: [516, 222] },
            { t: '字母也坐船\n去旅行囉！', x: 590, y: 14, w: 180, fs: 24, tail: [640, 210] }
          ] },
        { scene: 'v1e5_harbor', sceneOpt: { hz: .5, quay: .72, city: false, sky: 'clay3', water: 'g7', far: 'clay2', sun: [.5, .42] }, shot: '收尾大格：傍晚的碼頭，瑪拉送陶片，準備出發',
          back: [{ k: 'car', x: 690, y: 600, s: .7 }],
          actors: [
            { c: 'v1e5_mara', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'offer', expr: 'smug', flip: 1, look: .8 }
          ],
          props: [
            { k: 'v1e5_sherd', x: 170, y: 428, s: .7, rot: -6 },
            { k: 'v1e5_blob', x: 230, y: 328, r: 13 }
          ],
          bubbles: [
            { t: '這片陶片送你，\n上面是 A 和 B 的\n老祖宗！', x: 14, y: 186, w: 220, fs: 24, tail: [110, 340] },
            { t: '我的手\n還是紫的啦……', x: 244, y: 206, w: 202, fs: 24, tail: [272, 330] },
            { t: '跟老師說：\nABC 的老祖宗\n在推羅！', x: 454, y: 196, w: 196, fs: 24, tail: [474, 362] },
            { t: '嗶嗶——\n下一站，\n波斯！', x: 656, y: 300, w: 120, kind: 'car', fs: 22, tail: [670, 512] }
          ],
          caption: [{ t: '下一話：國王大道上的快遞', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '腓尼基人在哪裡', t: '住在地中海東岸，大約是今天的黎巴嫩。推羅和比布魯斯都是他們的海港城市，推羅城蓋在離岸不遠的小島上。' },
      { h: '大約 22 個字母', t: '腓尼基字母大約只有 22 個，只寫子音，一個符號代表一個聲音，比幾百個楔形符號好學多了。它是從右往左寫的。' },
      { h: 'ABC 的老祖宗', t: '希臘人借去腓尼基字母、加上母音，後來再傳到義大利，變成羅馬人用的拉丁字母，就是今天的 ABC。學者常說第一個字母 aleph 原本像牛頭、beth 像房子。' },
      { h: '海上貿易', t: '腓尼基人用船載著雪松木、玻璃和骨螺紫的布到處做生意。骨螺紫要用好幾千隻骨螺才染得出一小塊布，所以很貴。' },
      { h: '往西建城', t: '腓尼基人在地中海四周建了很多新城市；傳說推羅人大約在西元前 814 年建了迦太基，在今天的突尼西亞。' }
    ],
    map: {
      bounds: { lon: [-6, 38], lat: [30.5, 50] },
      cap: '紅點是推羅。紅色虛線是腓尼基人往西的航線（簡化畫法），一路開到迦太基，還有更西邊。海岸線畫的是今天的樣子，三千年前跟現在不完全一樣。',
      alt: '地中海地圖：推羅和比布魯斯在地中海東岸，大約是今天的黎巴嫩；航線一路往西到北非的迦太基，大約是今天的突尼西亞',
      routes: [
        { pts: [[33.1, 34.9], [33.9, 32], [34.5, 26], [35.3, 19.5], [36.5, 13.6], [36.95, 10.7]] },
        { pts: [[37.2, 9.8], [37.4, 4], [36.4, -1.5], [36, -5.5]] }
      ],
      labels: [
        { t: '地中海', lat: 33.3, lon: 18, size: 24, f: 'g9' },
        { t: '希臘', lat: 39.8, lon: 21.8, size: 20 },
        { t: '義大利', lat: 42.4, lon: 13, size: 20 },
        { t: '埃及', lat: 30.9, lon: 29.5, size: 20 }
      ],
      cities: [
        { n: '推羅', lat: 33.27, lon: 35.2, main: 1, side: 'l', dy: 18 },
        { n: '比布魯斯', lat: 34.12, lon: 35.65, side: 'l', dy: -16 },
        { n: '迦太基（今突尼西亞）', lat: 36.85, lon: 10.32, side: 'l', dy: 30 }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從腓尼基人用字母做生意到今天，大約三千年。',
      items: [
        { y: -1000, when: '約西元前 1000 年', t: '腓尼基人用字母\n記帳、做生意', side: 'u', main: 1, w: 200 },
        { y: -800, when: '約西元前 800～750 年', t: '希臘人借去，\n加上母音', side: 'd', w: 222 },
        { y: 1923, when: '西元 1923 年', t: '在比布魯斯挖到\n阿希拉姆石棺', side: 'd', w: 200 },
        { y: 2026, when: '今天', t: '我們學的 ABC\n是它的後代', side: 'u', w: 180 }
      ]
    },
    sources: [
      '大英百科〈Phoenician alphabet〉〈Phoenicia〉〈Tyre〉〈Carthage〉（大約 22 個字母、只寫子音、從右往左寫；希臘人加上母音；推羅是島上的城；迦太基傳統說法西元前 814 年由推羅人建立）',
      '大都會藝術博物館 Heilbrunn 藝術史年表〈The Phoenicians (1500–300 B.C.)〉（海上貿易、雪松木、玻璃、紫色染料、往西建殖民城市）',
      '黎巴嫩貝魯特國家博物館館藏：阿希拉姆石棺（1923 年在比布魯斯王陵出土；蓋子邊上的銘文大約西元前 1000 年，是很早的長篇腓尼基字母文字，也有學者認為較晚）',
      '大英博物館館藏與說明（骨螺紫染料、腓尼基人的貿易）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '腓尼基字母大約有幾個字母？', opts: ['22 個', '26 個', '幾百個', '幾千個'], a: 0, why: '腓尼基字母大約只有 22 個，一個符號代表一個聲音，比幾百個楔形符號好學。' },
      { id: 'q2', d: 1, type: 'tf', q: '骨螺紫很便宜，每個人都穿得起。', a: false, why: '要用好幾千隻骨螺才染得出一小塊布，所以骨螺紫很貴，常是國王和有錢人穿的。' },
      { id: 'q3', d: 2, type: 'mc', q: '腓尼基字母跟今天的英文字母比，最大的不同是什麼？', opts: ['只寫子音，沒有母音', '每個字都是一幅小圖畫', '要用蘆葦筆壓在泥板上', '只能由上往下直著寫'], a: 0, why: '腓尼基字母只寫子音；後來希臘人借去時加上了母音，讀起來就不用猜。' },
      { id: 'q4', d: 2, type: 'order', q: '字母是怎麼一路傳到今天的？把順序排好。', items: ['腓尼基人用大約 22 個字母', '希臘人借去，加上母音', '傳到義大利，變成拉丁字母', '今天我們學 ABC'], why: '腓尼基字母先傳給希臘人，希臘人加上母音；後來傳到義大利變成羅馬人用的拉丁字母，就是今天的 ABC。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「字母比漢字少很多，所以字母比漢字厲害。」根據這一話，哪個說法最正確？', opts: ['不對，兩種文字各有長處', '對，字少的文字一定比較好', '不對，漢字的字比字母還少', '對，漢字後來就沒人用了'], a: 0, why: '字母少、好拼音，所以很快傳遍地中海；漢字一看就懂意思，也從甲骨文一路用到今天。兩種都很厲害。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
