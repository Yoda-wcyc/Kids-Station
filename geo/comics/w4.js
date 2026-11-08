/* 🎬 地理・世界篇 4〈北美洲〉開場短漫畫（2026-11-08）。照 geo/data/w4.js 檔頭的草稿；格式見 comics/CONTRACT.md §3、§13。geo/intro.html?u=w4 播放。
   要孩子記住：北美洲「西邊高、中間平、東邊低」，大河密西西比河在中間的平原往南流。
   事實（出處見 geo/data/w4.js 檔頭查核）：落磯山脈在西部、又高又長；中部是大平原；密西西比河往南流進墨西哥灣；東部的阿帕拉契山脈比較矮、比較老；
   聯合國總部在紐約。最後一格的剖面圖是示意（高度沒有照比例）。船上的美國小朋友是虛構的人物；旗子只畫顏色，不代表哪一國。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow, cap } = K;
    root.ComicArt.extend({
      scenes: {
        // 剖面示意：西（落磯山脈，高）→ 大平原（平）＋密西西比河 → 阿帕拉契山脈（低）→ 東岸紐約 → 大西洋
        w4_profile(w, h) {
          const g = h * .64;
          let s = rect(0, 0, w, h, '#D9E7EE') + circ(w * .84, h * .2, 110, 'url(#cm-sun)');
          s += path(`M0 ${g} L0 ${h * .44} L40 ${h * .36} L80 ${h * .45} L120 ${h * .31} L165 ${h * .42} L200 ${h * .36} L250 ${h * .5} L300 ${g} L560 ${g} Q610 ${h * .55} 650 ${h * .58} Q690 ${h * .56} 720 ${g} L740 ${g + 6} L740 ${h} L0 ${h}Z`, '#B59A70');
          s += poly(`120,${h * .31} 106,${h * .35} 134,${h * .35}`, '#FFFFFF') + poly(`40,${h * .36} 28,${h * .395} 52,${h * .395}`, '#FFFFFF') + poly(`200,${h * .36} 188,${h * .39} 212,${h * .39}`, '#FFFFFF');
          s += rect(300, g - 14, 260, 14, '#D9B95A') + rect(426, g - 14, 30, 22, '#5B8FA8', 4);
          s += rect(740, g + 10, w - 740, h - g - 10, '#5B8FA8');
          [[690, 60], [705, 90], [718, 50]].forEach(([x, H]) => { s += rect(x, g - H, 12, H, '#7F8C8D'); });
          s += rect(0, h * .7, w, h * .3, '#9DB9A0');
          const lab = (x, y, t, t2, c) => rect(x - 86, y - 30, 172, t2 ? 62 : 40, C.cream, 8, 'opacity=".95"') + txt(x, y - 2, t, 22, c || C.g9) + (t2 ? txt(x, y + 24, t2, 18, C.red) : '');
          s += lab(150, h * .25, '落磯山脈', '西邊高') + lab(470, g - 70, '大平原', '中間平') + lab(640, h * .47, '阿帕拉契山脈', '東邊低');
          s += lab(441, g + 52, '密西西比河', '', '#3E6E8E') + txt(770, g + 60, '大西洋', 18, C.cream, { a: 'end' });
          s += txt(20, h * .74, '◀ 西', 26, C.red, { a: 'start' }) + txt(w - 20, h * .74, '東 ▶', 26, C.red, { a: 'end' });
          return { bg: s };
        }
      },
      props: {
        // 雪橇（搖搖車變的）
        w4_sled: x => place(x, groundShadow(0, 3, 90, 8) + both(rect(-90, -44, 180, 26, C.red, 10)) + path('M-100 -6 L96 -6 Q124 -8 120 -40', 'none', `stroke="${C.ink}" stroke-width="6" stroke-linecap="round"`) + rect(-70, -18, 6, 14, C.ink) + rect(60, -18, 6, 14, C.ink) + rect(80, -60, 30, 22, C.g5, 4)),
        // 一行一行的麥田（W×H）
        w4_field: x => { const W = x.W || 400, H = x.H || 200; let s = rect(-W / 2, -H, W, H, '#D9B95A'); for (let y = -H + 10; y < 0; y += 18) s += rect(-W / 2, y, W, 5, '#B9952E', 0, 'opacity=".55"'); return place(x, s); },
        // 河上的平底船（原點＝吃水線）
        w4_boat: x => place(x, path('M-150 -40 L150 -40 L132 4 L-132 4Z', C.wood) + rect(-150, -46, 300, 10, '#8C5A3C', 4) + rect(-20, -130, 8, 90, C.ink) + path('M-12 -126 L60 -110 L-12 -94Z', C.red)),
        // 一排旗子（只畫顏色，不代表哪一國）
        w4_flags: x => { const n = x.n || 6, cs = [[C.red, C.cream], [C.blue, C.gold], [C.g7, C.cream], [C.gold, C.red], ['#5B8FA8', C.cream], [C.purple, C.gold]]; let s = ''; for (let i = 0; i < n; i++) { const X = -n * 22 + i * 44, [a, b] = cs[i % cs.length]; s += rect(X, -120, 4, 120, C.ink) + rect(X + 4, -118, 32, 22, a) + rect(X + 4, -110, 32, 7, b); } return place(x, s); }
      },
      holds: { w4_cray: () => ell(10, -6, 14, 8, C.red) + circ(26, -14, 6, C.red) + circ(26, 2, 6, C.red) + rect(-8, -8, 8, 4, C.red) },
      cast: {
        w4_kid: { name: '美國小朋友（虛構）', skin: 'skinB', top: 'red', bottom: 'blue', leg: 'skinB', hair: 'curly', r: 22, k: .95 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).w4 = {
    id: 'w4', title: '開場：北美洲像溜滑梯？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    geoFig: { map: 'world', box: [-135, 5, -55, 64] },
    pages: [
      { layout: 'quad', panels: [
        { scene: 'land', sceneOpt: { sky: '#CFE0EA', sun: [.8, .14], hz: .62, far: false, ground: '#F4F6F2' }, shot: '中景：搖搖車停在落磯山脈的雪山頂，阿凱穿短褲發抖', places: ['rockies'],
          back: [
            { k: 'mountain', x: 60, y: 330, W: 260, H: 170, snow: 1, f: '#8FA3A0' }, { k: 'mountain', x: 310, y: 330, W: 300, H: 210, snow: 1, f: '#7D9290' },
            { k: 'car', x: 190, y: 420, s: .42 }
          ],
          actors: [
            { c: 'kai', x: 100, y: 500, s: .9, pose: 'scared', expr: 'shock' },
            { c: 'he', x: 290, y: 504, s: .9, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: -.4 }
          ],
          bubbles: [
            { t: '嗶——本站：北美洲・\n落磯山脈，現代。', x: 10, y: 10, w: 250, kind: 'car', fs: 19, tail: [190, 360] },
            { t: '不是說美國\n很熱嗎？', x: 10, y: 196, w: 160, fs: 21, tail: [86, 330] },
            { t: '這裡是西部\n的高山啦。', x: 200, y: 196, w: 170, fs: 21, tail: [290, 352] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#D9E7EE', sun: [.2, .18], hz: .44, far: false, ground: '#D9B95A' }, shot: '中景：搖搖車變雪橇滑下山，一路滑進一望無際的麥田', places: ['greatPlains'],
          back: [{ k: 'w4_field', x: 192, y: 515, W: 400, H: 290 }],
          props: [{ k: 'w4_sled', x: 200, y: 420, s: 1 }],
          actors: [
            { c: 'kai', x: 150, y: 400, s: .8, pose: 'sit', expr: 'awe', noShadow: true, look: .4 },
            { c: 'he', x: 250, y: 400, s: .8, pose: 'sit', expr: 'happy', noShadow: true, hold: 'notebook', look: .3 }
          ],
          bubbles: [
            { t: '怎麼平到可以\n看到地平線？', x: 10, y: 10, w: 200, fs: 21, tail: [140, 300] },
            { t: '左邊高山，\n中間是平原！', x: 186, y: 100, w: 186, fs: 21, tail: [252, 312] }
          ],
          caption: [{ t: '大平原', x: 0, y: 462, dark: false }] },
        { scene: 'land', sceneOpt: { sky: '#D8E4D8', sun: false, hz: .4, far: '#9DB9A0', ground: '#8DA36E', river: { y: .58, h: .3, tilt: 0, c: '#5B8FA8' } }, shot: '中景：在密西西比河上搭平底船往南漂，美國小朋友說河流進墨西哥灣；阿凱被小龍蝦夾', places: ['mississippi', 'gulfOfMexico'],
          actors: [
            { c: 'kai', x: 120, y: 420, s: .85, pose: 'scared', expr: 'yell', hold: 'w4_cray', look: .3 },
            { c: 'w4_kid', x: 280, y: 424, s: .85, pose: 'point', expr: 'happy', flip: 1, look: -.4 }
          ],
          props: [{ k: 'w4_boat', x: 192, y: 440, s: .95 }],
          bubbles: [
            { t: '這條河最後\n流進墨西哥灣！', x: 170, y: 10, w: 200, fs: 21, tail: [284, 254] },
            { t: '哇——\n牠夾我！', x: 10, y: 96, w: 140, kind: 'shout', fs: 22, tail: [106, 260] }
          ],
          sfx: [{ t: '夾！', x: 150, y: 210, fs: 40, rot: 10 }],
          caption: [{ t: '密西西比河', x: 0, y: 458, dark: false }] },
        { scene: 'land', sceneOpt: { sky: '#CFE0EA', sun: [.85, .14], hz: .56, far: false, ground: '#9DB9A0' }, shot: '中景：「跳站」到東岸，後面是矮矮圓圓的阿帕拉契山，再過去是紐約高樓和聯合國總部前的旗子', places: ['appalachians', 'newYork'],
          back: [
            { k: 'hills', x: 130, y: 286, W: 300, H: 110, f: '#7FA07E' },
            { k: 'building', x: 280, y: 286, W: 50, H: 200, f: '#A9B3B4', g: '#7F8C8D' }, { k: 'building', x: 336, y: 286, W: 56, H: 150, f: '#A9B3B4', g: '#7F8C8D' },
            { k: 'w4_flags', x: 260, y: 360, n: 5, s: .8 }
          ],
          actors: [
            { c: 'kai', x: 80, y: 500, s: .8, pose: 'point', expr: 'awe', look: .5 },
            { c: 'he', x: 200, y: 504, s: .8, pose: 'hold', expr: 'happy', hold: 'notebook', look: .4 }
          ],
          bubbles: [
            { t: '後面是比較矮的\n老山：阿帕拉契山。', x: 10, y: 10, w: 230, fs: 19, tail: [200, 370] },
            { t: '好多旗子！\n這裡是紐約？', x: 10, y: 100, w: 180, fs: 20, tail: [86, 352] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'w4_profile', shot: '滿版剖面示意：西邊高的落磯山脈、中間平的大平原和密西西比河、東邊低的阿帕拉契山脈；阿凱坐雪橇從山上滑下來，像溜滑梯', places: ['rockies', 'greatPlains', 'appalachians'],
          back: [{ k: 'car', x: 520, y: 1000, s: .8 }],
          props: [{ k: 'w4_sled', x: 262, y: 600, s: .7, rot: 32 }],
          actors: [
            { c: 'kai', x: 248, y: 578, s: .7, pose: 'raise', expr: 'grin', noShadow: true, rot: 32 },
            { c: 'he', x: 690, y: 1010, s: 1.2, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '小禾的筆記：北美洲「西邊高、中間平、東邊低」，密西西比河在中間的平原往南流。', x: 0, y: 14, w: 780, dark: false }],
          bubbles: [
            { t: '像溜滑梯！', x: 330, y: 180, w: 200, kind: 'shout', fs: 28, tail: [262, 420] },
            { t: '嗶——答對。\n下一站，南美洲！', x: 300, y: 780, w: 250, kind: 'car', fs: 24, tail: [500, 880] }
          ] }
      ] }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
