/* 🎬 地理・世界篇 3〈非洲〉開場短漫畫（2026-11-08）。照 geo/data/w3.js 檔頭的草稿；格式見 comics/CONTRACT.md §3、§13。geo/intro.html?u=w3 播放。
   要孩子記住：赤道差不多從非洲中間通過，南北兩邊的景色像照鏡子（雨林 → 草原 → 沙漠）。
   事實（出處見 geo/data/w3.js 檔頭查核）：奈洛比是肯亞首都、城市南邊就有國家公園；肯亞 2007 年推出手機轉帳；赤道經過非洲中部，
   往北往南依序是雨林、草原、沙漠（北邊撒哈拉、南邊喀拉哈里）。草稿的「捷運工地」沒有去查證，不畫，改說「首都、大城市」。
   攤販阿姨是虛構的人物。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow, cap } = K;
    const acacia = (x, y, H) => rect(x - 5, y - H * .7, 10, H * .7, '#6B4A32') + cap(x, y - H * .5, x + H * .22, y - H * .78, 7, '#6B4A32') + ell(x, y - H * .82, H * .5, H * .12, '#6F8A3E') + ell(x + H * .1, y - H * .9, H * .32, H * .09, '#86A04E');
    root.ComicArt.extend({
      scenes: {
        // 鏡子圖：北 ← 撒哈拉沙漠｜草原｜雨林（赤道）｜草原｜喀拉哈里沙漠 → 南
        w3_mirror(w, h) {
          const zs = [['撒哈拉沙漠', '#E7CF93'], ['草原', '#C9C27A'], ['剛果雨林', '#4F7F4F'], ['草原', '#C9C27A'], ['喀拉哈里沙漠', '#E7CF93']], zw = w / 5, top = 64;
          let s = rect(0, 0, w, h, C.cream);
          zs.forEach(([t, c], i) => {
            const x0 = i * zw; s += rect(x0, top, zw, h - top, c) + txt(x0 + zw / 2 + (i === 0 ? 24 : i === 4 ? -24 : 0), 44, t, 21, C.g9);
            if (c === '#E7CF93') for (let k = 0; k < 3; k++) s += ell(x0 + zw * (.25 + k * .25), h * .62 + k * 14, zw * .2, 18, '#D8B86E');
            if (c === '#C9C27A') { s += acacia(x0 + zw * .5, h * .78, 120); for (let k = 0; k < 6; k++) s += poly(`${x0 + 12 + k * 24},${h * .92} ${x0 + 18 + k * 24},${h * .82} ${x0 + 24 + k * 24},${h * .92}`, '#A9A85A'); }
            if (c === '#4F7F4F') for (let k = 0; k < 5; k++) s += rect(x0 + 14 + k * 30, h * .5, 8, h * .4, '#6B4A32') + circ(x0 + 18 + k * 30, h * .45, 28, k % 2 ? '#2F5A40' : '#3C6B4C');
          });
          s += `<line x1="${w / 2}" y1="${top}" x2="${w / 2}" y2="${h}" stroke="${C.red}" stroke-width="5" stroke-dasharray="14 10"/>` + rect(w / 2 - 34, top + 6, 68, 30, C.red, 6) + txt(w / 2, top + 29, '赤道', 20, C.cream);
          s += txt(18, 44, '北', 24, C.red, { a: 'start' }) + txt(w - 18, 44, '南', 24, C.red, { a: 'end' });
          return { bg: s };
        }
      },
      props: {
        w3_acacia: x => place(x, groundShadow(0, 3, 50, 6) + acacia(0, 0, x.H || 160)),
        // 長頸鹿（朝右）
        w3_giraffe: x => {
          const f = '#E0B35A', d = '#9C6A34';
          let s = groundShadow(0, 3, 60, 8);
          [[-34, -150, -40], [-20, -150, -18], [26, -150, 22], [40, -150, 44]].forEach(([a, b, c]) => { s += cap(a, b, c, -6, 11, f) + rect(c - 6, -8, 12, 8, C.ink, 2); });
          s += ell(0, -168, 66, 38, f) + cap(44, -186, 72, -306, 22, f) + ell(86, -312, 26, 14, f) + rect(76, -340, 4, 16, d) + rect(88, -340, 4, 16, d) + circ(78, -342, 4, d) + circ(90, -342, 4, d) + circ(92, -314, 3, C.ink);
          [[-30, -176, 12], [-6, -160, 14], [20, -178, 11], [38, -158, 9], [-44, -156, 8], [56, -226, 8], [64, -262, 7], [52, -200, 7]].forEach(([a, b, r]) => { s += circ(a, b, r, d, 'opacity=".75"'); });
          return place(x, s + path('M-62 -170 Q-80 -150 -76 -120', 'none', `stroke="${f}" stroke-width="5"`));
        },
        // 路邊水果攤（遮雨棚＋桌子）
        w3_stall: x => {
          let s = rect(-96, -190, 6, 190, C.wood) + rect(90, -190, 6, 190, C.wood);
          for (let i = 0; i < 6; i++) s += poly(`${-104 + i * 34},-200 ${-70 + i * 34},-200 ${-66 + i * 34},-176 ${-100 + i * 34},-176`, i % 2 ? C.cream : C.red);
          s += both(rect(-100, -92, 200, 92, C.wood, 4), 'cm-warm') + rect(-104, -96, 208, 10, '#8C5A3C', 3);
          [[-70, '#E0352B'], [-40, '#F2C14E'], [-10, '#6F9A3E'], [20, '#E0352B'], [50, '#F2A33A'], [76, '#6F9A3E']].forEach(([a, c], i) => { s += circ(a, -104 - (i % 2) * 8, 13, c); });
          return place(x, s);
        }
      },
      holds: { w3_banana: () => path('M-6 -34 Q16 -24 12 6 Q6 -14 -10 -28Z', C.gold) },
      cast: {
        w3_kaiHat: { name: '阿凱（探險帽）', skin: 'skin', top: 'g7', bottom: 'g9', leg: 'skin', stripe: 'cream', hair: 'kai', hat: 'softCap', hatC: 'sand', r: 22 },
        w3_vendor: { name: '水果攤阿姨（虛構）', skin: 'skinC', top: 'gold', skirt: 'red', leg: 'skinC', sleeve: 'skinC', hair: 'short', hat: 'band', hatC: 'g7', r: 19, k: 1.1 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).w3 = {
    id: 'w3', title: '開場：非洲像照鏡子？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    geoFig: { map: 'world', box: [-20, -40, 55, 38] },
    pages: [
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sky: '#CFE0EA', sun: [.86, .14], hz: .6, far: false, ground: '#B9A27A' }, shot: '大格：奈洛比的高樓和車陣；阿凱戴探險帽、拿香蕉準備餵猴子，愣住', places: ['nairobi'],
          back: [
            { k: 'building', x: 80, y: 282, W: 120, H: 210, f: '#C9C7BC' }, { k: 'building', x: 210, y: 282, W: 110, H: 260, win: 'band', f: '#D8D4C4' },
            { k: 'building', x: 600, y: 282, W: 130, H: 240, f: '#B9C4C0' }, { k: 'building', x: 720, y: 282, W: 110, H: 180, win: 'band', f: '#D8D4C4' },
            { k: 'crowd', x: 420, y: 300, n: 8, W: 300, seed: 4 },
            { k: 'car', x: 120, y: 456, s: .55 }
          ],
          actors: [
            { c: 'w3_kaiHat', x: 330, y: 456, s: 1.05, pose: 'scared', expr: 'shock', hold: 'w3_banana', look: .3 },
            { c: 'he', x: 530, y: 462, s: 1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: -.4 }
          ],
          bubbles: [
            { t: '嗶——本站：非洲・\n肯亞奈洛比，現代。', x: 10, y: 14, w: 250, kind: 'car', fs: 20, tail: [120, 380] },
            { t: '獅子呢？\n香蕉要給誰？', x: 240, y: 106, w: 190, fs: 23, tail: [316, 246] },
            { t: '這裡是肯亞的首都，\n是大城市喔！', x: 480, y: 14, w: 250, fs: 22, tail: [520, 282] }
          ],
          caption: [{ t: '肯亞・奈洛比', en: 'NAIROBI · TODAY', x: 560, y: 104, w: 214 }] },
        { scene: 'land', sceneOpt: { sky: '#E8DCC0', sun: false, hz: .5, far: false, ground: '#C8B48A' }, shot: '細長格：路邊水果攤，阿姨用手機收錢，阿凱拿著零錢愣住，小禾解說', places: ['kenya'],
          back: [{ k: 'w3_stall', x: 196, y: 430 }],
          actors: [
            { c: 'w3_vendor', x: 222, y: 380, s: .85, pose: 'offer', expr: 'happy', hold: 'phone', flip: 1, behind: 1 },
            { c: 'w3_kaiHat', x: 70, y: 546, s: .82, pose: 'hold', expr: 'shock', hold: 'coin', look: .4 },
            { c: 'he', x: 236, y: 550, s: .8, pose: 'hold', expr: 'calm', hold: 'notebook', flip: 1, look: -.4 }
          ],
          bubbles: [
            { t: '用手機付錢\n就好囉！', x: 10, y: 10, w: 180, fs: 21, tail: [208, 184] },
            { t: '肯亞 2007 年\n就有手機轉帳了。', x: 10, y: 96, w: 196, fs: 18, tail: [230, 410] },
            { t: '比我的零用錢\n還先進……', x: 10, y: 186, w: 180, fs: 19, tail: [66, 396] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#F0DDB0', sun: [.2, .22], hz: .56, far: false, ground: '#C9B27A' }, shot: '中景：國家公園裡長頸鹿慢慢走，背後是奈洛比的高樓', places: ['nairobi'],
          back: [
            { k: 'building', x: 300, y: 312, W: 60, H: 120, f: '#A9B3B4', g: '#7F8C8D' }, { k: 'building', x: 360, y: 312, W: 50, H: 160, f: '#A9B3B4', g: '#7F8C8D' },
            { k: 'building', x: 420, y: 312, W: 70, H: 100, f: '#A9B3B4', g: '#7F8C8D' },
            { k: 'w3_acacia', x: 80, y: 360, H: 150 },
            { k: 'w3_giraffe', x: 280, y: 500, s: 1.05 }
          ],
          actors: [
            { c: 'w3_kaiHat', x: 70, y: 540, s: .78, pose: 'point', expr: 'awe', look: .5 },
            { c: 'he', x: 160, y: 546, s: .78, pose: 'hold', expr: 'happy', hold: 'notebook', look: .4 }
          ],
          bubbles: [
            { t: '長頸鹿後面\n是高樓耶！', x: 10, y: 14, w: 190, fs: 22, tail: [74, 400] },
            { t: '城市旁邊\n就有國家公園！', x: 220, y: 14, w: 200, fs: 21, tail: [168, 420] }
          ] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'w3_mirror', shot: '矮寬格：搖搖車「跳站」，往北是雨林 → 草原 → 撒哈拉沙漠，往南也是雨林 → 草原 → 喀拉哈里沙漠；小禾在中間比手畫腳', places: ['sahara', 'congoRainforest', 'kalahari'],
          actors: [
            { c: 'w3_kaiHat', x: 80, y: 392, s: .62, pose: 'splat', expr: 'worry', sweat: 2 },
            { c: 'he', x: 392, y: 394, s: .62, pose: 'shout', expr: 'happy' }
          ],
          bubbles: [
            { t: '我曬成肉乾了……', x: 10, y: 214, w: 210, fs: 20, tail: [72, 330] },
            { t: '兩邊像照鏡子！', x: 450, y: 110, w: 200, fs: 22, tail: [400, 280] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '收尾：小禾的筆記；阿凱問赤道是不是鏡子的中線，搖搖車答對、報下一站', places: ['sahara', 'kalahari'],
          back: [{ k: 'car', x: 390, y: 600, s: .7 }],
          actors: [
            { c: 'w3_kaiHat', x: 190, y: 600, s: 1.15, pose: 'think', expr: 'think', look: .4 },
            { c: 'he', x: 590, y: 606, s: 1.15, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '小禾的筆記：赤道差不多從非洲中間通過。往北、往南，都是「雨林 → 草原 → 沙漠」，像照鏡子。', x: 0, y: 12, w: 780, dark: false }],
          bubbles: [
            { t: '所以赤道是\n鏡子的中線？', x: 14, y: 170, w: 230, fs: 24, tail: [190, 364] },
            { t: '嗶——答對。\n下一站，北美洲！', x: 290, y: 330, w: 220, kind: 'car', fs: 23, tail: [390, 494] }
          ] }
      ] }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
