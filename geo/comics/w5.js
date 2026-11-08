/* 🎬 地理・世界篇 5〈南美洲〉開場短漫畫（2026-11-08）。照 geo/data/w5.js 檔頭的草稿；格式見 comics/CONTRACT.md §3、§13。geo/intro.html?u=w5 播放。
   要孩子記住：安地斯山脈在西邊排成一長條，所以亞馬遜河從西邊的山上一路往東流進大西洋，流過世界最大的熱帶雨林。
   事實（出處見 geo/data/w5.js 檔頭查核）：安地斯山脈是世界最長的山脈（約 7,000 公里；臺灣中央山脈約 340 公里，維基百科〈中央山脈〉）；
   馬丘比丘在秘魯的安地斯山上；亞馬遜河是世界水量最大的河、往東流進大西洋；巴西說葡萄牙語、最大城市聖保羅。
   第 2 格的南美洲小地圖是手畫的示意（海岸線、山脈、河道都簡化），中央山脈的小紅條照同一個比例畫。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow, cap } = K;
    // 南美洲輪廓、安地斯山脈、亞馬遜河（[經度, 緯度]，大約 1～2 度的簡化線，只給小孩看相對位置）
    const SA = [[-77, 8.5], [-72, 12], [-63, 10.7], [-60, 8.5], [-52, 5], [-50, 0], [-44, -2.5], [-35, -5], [-35, -9], [-39, -14], [-41, -22], [-48, -26], [-53, -34], [-58, -38], [-62, -39], [-65, -42], [-66, -47], [-69, -51], [-68, -55], [-72, -54], [-75, -50], [-73, -42], [-71.5, -33], [-70.5, -23], [-70.3, -18], [-76, -14], [-81, -6], [-80.5, -2], [-80, 1], [-78.5, 2.5]];
    const AND = [[-72.5, 10.5], [-75.5, 5], [-78.5, -1], [-77.5, -7], [-75, -12], [-71, -16], [-68.5, -20], [-68, -25], [-69.5, -30], [-70, -33], [-71, -38], [-72, -43], [-73, -48], [-73.2, -52]];
    const AMZ = [[-77.5, -4.5], [-73.25, -3.75], [-69.9, -4.2], [-65.5, -3.4], [-60.02, -3.12], [-57, -2.6], [-54.71, -2.44], [-52.5, -1.6], [-50.5, -.2]];
    root.ComicArt.extend({
      scenes: {
        // 從安地斯山上往下：小溪越流越寬，衝進雨林（細長格）
        w5_stream(w, h) {
          let s = rect(0, 0, w, h, '#CFE0EA') + poly(`0,${h * .3} ${w * .3},${h * .06} ${w * .55},${h * .24} ${w * .8},${h * .08} ${w},${h * .26} ${w},${h * .4} 0,${h * .4}`, '#8FA3A0') + poly(`${w * .24},${h * .11} ${w * .3},${h * .06} ${w * .36},${h * .11}`, '#FFFFFF') + poly(`${w * .74},${h * .12} ${w * .8},${h * .08} ${w * .86},${h * .12}`, '#FFFFFF');
          s += rect(0, h * .38, w, h * .62, '#3C6B4C');
          s += path(`M${w * .48} ${h * .2} Q${w * .3} ${h * .4} ${w * .5} ${h * .52} Q${w * .75} ${h * .66} ${w * .45} ${h * .8} Q${w * .2} ${h * .9} ${w * .3} ${h} L${w * .82} ${h} Q${w * .6} ${h * .9} ${w * .8} ${h * .78} Q${w * .98} ${h * .64} ${w * .62} ${h * .5} Q${w * .44} ${h * .4} ${w * .52} ${h * .2}Z`, '#8A7A55');
          [[.1, .5], [.92, .45], [.08, .7], [.95, .62], [.12, .9], [.96, .86]].forEach(([x, y], i) => { s += rect(w * x - 4, h * y - 10, 8, 50, C.wood) + circ(w * x, h * y - 16, 30, i % 2 ? '#2F5A40' : '#5E8C6A'); });
          s += path(`M${w * .7} ${h * .44} q6 -6 12 0 q6 -6 12 0`, 'none', `stroke="${C.ink}" stroke-width="3"`) + path(`M${w * .2} ${h * .58} q6 -6 12 0 q6 -6 12 0`, 'none', `stroke="${C.ink}" stroke-width="3"`);
          return { bg: s };
        }
      },
      props: {
        // 南美洲小地圖（W 寬；原點＝左上角）
        w5_samap: x => {
          const W = x.W || 260, H = W * 69 / 48, X = lo => (lo + 82) / 48 * W, Y = la => (13 - la) / 69 * H, pts = a => a.map(([lo, la]) => K.r1(X(lo)) + ' ' + K.r1(Y(la))).join(' L');
          let s = rect(-8, -8, W + 16, H + 16, C.cream, 10) + rect(0, 0, W, H, '#BFD7DF', 6) + path('M' + pts(SA) + 'Z', '#E0C98E');
          s += path('M' + pts(AND), 'none', `stroke="#8C5A3C" stroke-width="${K.r1(W * .035)}" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 6"`) + path('M' + pts(AND), 'none', `stroke="#8C5A3C" stroke-width="${K.r1(W * .02)}" stroke-linejoin="round" opacity=".7"`);
          s += path('M' + pts(AMZ), 'none', `stroke="#3E6E8E" stroke-width="${K.r1(W * .022)}" stroke-linecap="round"`);
          s += txt(X(-79), Y(-30), '安地斯山脈', 17, '#6B3E1F', { tr: `rotate(-78 ${K.r1(X(-79))} ${K.r1(Y(-30))})` }) + txt(X(-62), Y(-6.5), '亞馬遜河', 16, '#2A5470') + txt(X(-40), Y(-32), '大西洋', 16, '#2A5470') + txt(X(-78), Y(9) + 18, '太平洋', 14, '#2A5470', { a: 'end' });
          const cy = Y(-46), cx = X(-48), L = 3 / 69 * H;   // 中央山脈約 340 公里＝緯度約 3 度，同一個比例
          s += rect(cx - 3, cy - L, 6, L, C.red, 2) + txt(cx + 8, cy - L / 2 + 5, '臺灣中央山脈', 13, C.red, { a: 'start' }) + txt(cx + 8, cy - L / 2 + 22, '（一樣的比例）', 12, C.red, { a: 'start', w: 700 });
          return place(x, s);
        },
        // 馬丘比丘：山坡梯田＋石頭牆
        w5_ruins: x => { const W = x.W || 360; let s = ''; for (let i = 0; i < 4; i++) s += rect(-W / 2 + i * 24, -24 * (i + 1), W - i * 48, 24, i % 2 ? '#7FA06A' : '#8DB07A') + rect(-W / 2 + i * 24, -24 * (i + 1), W - i * 48, 4, '#A8A49A'); [[-90, 50], [-30, 70], [40, 56], [96, 44]].forEach(([a, H]) => { s += both(rect(a - 26, -96 - H, 52, H, '#A8A49A')) + poly(`${a - 26},${-96 - H} ${a},${-122 - H} ${a + 26},${-96 - H}`, '#A8A49A') + rect(a - 8, -96 - H * .6, 16, H * .6, '#6A7170'); }); return place(x, s); },
        // 羊駝（朝左）
        w5_llama: x => place(x, groundShadow(0, 3, 46, 6) + [-30, -16, 18, 32].map(a => cap(a, -60, a + 2, -4, 9, '#D8C8A8')).join('') + ell(0, -70, 46, 26, '#E8DCC4') + cap(-34, -76, -46, -150, 20, '#E8DCC4') + ell(-56, -154, 20, 12, '#E8DCC4') + poly('-44,-166 -40,-186 -34,-166', '#D8C8A8') + poly('-56,-166 -54,-184 -48,-166', '#D8C8A8') + circ(-58, -158, 3, C.ink)),
        // 橡皮艇（搖搖車變的）
        w5_raft: x => place(x, ell(0, -14, 90, 22, '#F2A33A') + ell(0, -18, 72, 12, '#D9772F') + rect(-60, -40, 6, 30, C.ink) + rect(54, -40, 6, 30, C.ink)),
        // 跳站的小框：聖保羅的高樓
        w5_inset: x => { const W = x.W || 290, H = x.H || 230; let s = both(rect(0, 0, W, H, C.cream, 8)) + rect(10, 10, W - 20, H - 20, '#CFE0EA'); [[30, 120], [70, 160], [112, 100], [150, 180], [196, 130], [236, 150]].forEach(([a, h], i) => { s += rect(a, H - 10 - h, 34, h, i % 2 ? '#A9B3B4' : '#C9C7BC'); for (let y = H - h; y < H - 20; y += 18) s += rect(a + 6, y, 22, 8, '#7F8C8D'); }); return place(x, s + rect(10, H - 22, W - 20, 12, '#6A7170')); }
      },
      holds: { w5_icecream: () => poly('-8,-6 8,-6 0,18', C.gold) + circ(0, -12, 10, '#F4B6C2') + path('M-6 -4 q2 10 0 16', 'none', 'stroke="#F4B6C2" stroke-width="4"') }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).w5 = {
    id: 'w5', title: '開場：河往哪邊跑？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    geoFig: { map: 'world', box: [-92, -60, -22, 14] },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'land', sceneOpt: { sky: '#CFE0EA', sun: [.86, .18], hz: .72, far: '#6F8F76', ground: '#7FA06A' }, shot: '中景：安地斯山上的馬丘比丘，阿凱爬兩步就喘，羊駝對他噴口水', places: ['machuPicchu'],
          back: [
            { k: 'mountain', x: 640, y: 250, W: 240, H: 230, f: '#5E7F5A' },
            { k: 'w5_ruins', x: 470, y: 330, W: 300 },
            { k: 'car', x: 700, y: 334, s: .4 }
          ],
          actors: [
            { c: 'he', x: 100, y: 336, s: .95, pose: 'hold', expr: 'happy', hold: 'notebook', look: .4 },
            { c: 'kai', x: 240, y: 334, s: .98, pose: 'scared', expr: 'shock', sweat: 2, look: .4 }
          ],
          props: [{ k: 'w5_llama', x: 380, y: 336, s: .95 }],
          bubbles: [
            { t: '這裡也太高了吧！\n（喘）', x: 14, y: 12, w: 220, fs: 22, tail: [232, 136] },
            { t: '嗶——本站：南美洲・\n秘魯，現代。', x: 520, y: 12, w: 250, kind: 'car', fs: 20, tail: [700, 270] }
          ],
          caption: [{ t: '馬丘比丘', x: 270, y: 12 }],
          sfx: [{ t: '呸！', x: 290, y: 96, fs: 44, rot: -10 }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '大格：小禾攤開南美洲小地圖，安地斯山脈在西邊排成好長一條；阿凱問雨水流去哪', places: ['andes'],
          back: [{ k: 'w5_samap', x: 18, y: 30, W: 250 }],
          actors: [
            { c: 'he', x: 410, y: 676, s: 1.02, pose: 'point', expr: 'happy', flip: 1, look: -.6 },
            { c: 'kai', x: 330, y: 680, s: .95, pose: 'think', expr: 'think', look: -.3 }
          ],
          bubbles: [
            { t: '安地斯山脈在西邊，\n比中央山脈\n長好多好多！', x: 286, y: 30, w: 230, fs: 21, tail: [410, 500] },
            { t: '那下雨的水，\n要流去哪？', x: 290, y: 200, w: 190, fs: 21, tail: [330, 500] }
          ] },
        { scene: 'w5_stream', shot: '細長格：搖搖車變橡皮艇，沿著山上的小溪往東衝，河越來越寬，衝進雨林；阿凱的冰淇淋融化', places: ['andes', 'amazonRainforest'],
          back: [{ k: 'w5_raft', x: 120, y: 410, s: .8 }],
          actors: [
            { c: 'kai', x: 96, y: 396, s: .5, pose: 'sit', expr: 'shock', noShadow: true, hold: 'w5_icecream', sweat: 2 },
            { c: 'he', x: 150, y: 398, s: .5, pose: 'sit', expr: 'happy', noShadow: true, flip: 1 }
          ],
          bubbles: [
            { t: '嗶——本車\n變身橡皮艇！', x: 8, y: 8, w: 180, kind: 'car', fs: 19, tail: [110, 380] },
            { t: '好熱！冰淇淋\n三秒就融化了！', x: 8, y: 450, w: 226, fs: 18, tail: [92, 352] }
          ] }
      ] },
      { layout: 'duo', panels: [
        { scene: 'sea', sceneOpt: { sky: '#E2E9E0', hz: .4, water: '#8A7A55', sun: [.12, .14] }, shot: '大格：河面寬到看不見對岸，最後流進大海；右邊小框「跳站」到聖保羅的高樓', places: ['amazonRiver', 'saoPaulo'],
          back: [{ k: 'w5_raft', x: 200, y: 476, s: 1.1 }, { k: 'w5_inset', x: 470, y: 18, W: 290, H: 230 }],
          actors: [
            { c: 'kai', x: 160, y: 460, s: .8, pose: 'sit', expr: 'awe', noShadow: true, look: .3 },
            { c: 'he', x: 250, y: 462, s: .8, pose: 'sit', expr: 'happy', hold: 'notebook', noShadow: true, flip: 1 }
          ],
          bubbles: [
            { t: '看不見對岸耶！', x: 14, y: 220, w: 200, fs: 23, tail: [150, 360] },
            { t: '亞馬遜河是世界上\n水量最大的河！', x: 150, y: 30, w: 270, fs: 23, tail: [250, 372] },
            { t: '嗶——跳站：巴西・聖保羅。\n巴西人說葡萄牙語喔！', x: 430, y: 270, w: 340, kind: 'car', fs: 20 }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '收尾：小禾的筆記；阿凱問山和河的方向，搖搖車報下一站', places: ['andes', 'amazonRiver'],
          back: [{ k: 'car', x: 390, y: 500, s: .6 }],
          actors: [
            { c: 'kai', x: 190, y: 500, s: 1.05, pose: 'think', expr: 'think', look: .4 },
            { c: 'he', x: 600, y: 506, s: 1.05, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '小禾的筆記：西邊是高高的安地斯山脈 → 亞馬遜河往東流 → 流進大西洋，一路經過世界最大的熱帶雨林。', x: 0, y: 12, w: 780, dark: false }],
          bubbles: [
            { t: '所以山在哪邊，\n河就往反方向跑？', x: 14, y: 150, w: 250, fs: 23, tail: [190, 300] },
            { t: '嗶——這一洲是這樣。\n下一站，大洋洲！', x: 290, y: 250, w: 260, kind: 'car', fs: 21, tail: [390, 418] }
          ] }
      ] }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
