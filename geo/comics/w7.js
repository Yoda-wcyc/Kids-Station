/* 🎬 地理・世界篇 7〈南極洲〉開場短漫畫（2026-11-08）。照 geo/data/w7.js 檔頭的草稿；格式見 comics/CONTRACT.md §3、§13。geo/intro.html?u=w7 播放。
   要孩子記住：南極洲是最冷的大陸，各國依《南極條約》一起保護、只用來和平與科學研究。
   事實（出處見 geo/data/w7.js 檔頭查核）：站在南極點，往哪個方向走都是北；南極的夏天太陽不下山（極晝）；北極熊只住北極，南極有企鵝和海豹；
   皇帝企鵝爸爸把蛋放在腳上孵；《南極條約》規定南極只用於和平目的、各國自由做科學研究。
   第 4 格的旗子只畫顏色、不代表哪一國，也不畫「這塊是某國的」任何暗示；科學家是虛構的人物。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow, cap } = K;
    const penguin = (egg) => groundShadow(0, 3, 30, 5) + ell(0, -60, 30, 58, '#1F2A2E') + ell(4, -54, 22, 48, '#F7F3E6') + circ(0, -122, 18, '#1F2A2E') + ell(10, -112, 8, 6, '#F2C14E', 'opacity=".9"') + poly('14,-126 30,-120 14,-116', '#E0352B') + circ(6, -128, 2.5, C.cream) + ell(-26, -64, 7, 26, '#1F2A2E', 'transform="rotate(12 -26 -64)"') + ell(-6, -2, 10, 4, '#F2A33A') + ell(14, -2, 10, 4, '#F2A33A') + (egg ? ell(4, -10, 14, 10, '#FFFDF4') + ell(4, -14, 22, 8, '#1F2A2E', 'opacity=".55"') : '');
    root.ComicArt.extend({
      props: {
        // 南極點的標誌：紅白條紋桿子＋銀球
        w7_pole: x => place(x, groundShadow(0, 3, 30, 5) + rect(-7, -150, 14, 150, C.cream) + [0, 1, 2, 3, 4].map(i => rect(-7, -150 + i * 30, 14, 15, C.red)).join('') + circ(0, -166, 20, '#B9C4C8') + circ(-6, -172, 7, 'rgba(255,255,255,.7)')),
        w7_penguin: x => place(x, penguin(x.egg)),
        // 研究站：架高的房子（冰雪才不會把它埋住）
        w7_station: x => place(x, groundShadow(0, 3, 160, 10) + [-120, -40, 40, 120].map(a => rect(a - 6, -60, 12, 60, '#6A7170')).join('') + both(rect(-150, -150, 300, 92, C.red, 8)) + [-110, -50, 10, 70].map(a => rect(a, -126, 40, 30, '#CFE0EA', 4)).join('') + rect(-150, -158, 300, 10, '#B9C4C8', 4)),
        // 一排旗子（只畫顏色，不代表哪一國）
        w7_flags: x => { const n = x.n || 7, cs = [[C.red, C.cream], [C.blue, C.gold], [C.g7, C.cream], [C.gold, C.red], ['#5B8FA8', C.cream], [C.purple, C.gold], [C.cream, C.g7]]; let s = ''; for (let i = 0; i < n; i++) { const X = -n * 24 + i * 48, [a, b] = cs[i % cs.length]; s += rect(X, -130, 4, 130, C.ink) + rect(X + 4, -128, 34, 24, a) + rect(X + 4, -119, 34, 7, b); } return place(x, s); },
        // 鑽冰芯的三腳架
        w7_drill: x => place(x, cap(-40, 0, 0, -130, 6, '#6A7170') + cap(40, 0, 0, -130, 6, '#6A7170') + cap(0, 4, 0, -130, 6, '#3A4042') + rect(-14, -60, 28, 20, C.gold, 3) + rect(-60, -8, 120, 8, '#B9C4C8', 3)),
        // 氣象氣球
        w7_balloon: x => place(x, ell(0, -40, 34, 40, '#FFFFFF') + path('M0 0 Q12 40 -4 80 Q-12 110 0 140', 'none', `stroke="${C.ink}" stroke-width="2"`) + rect(-8, 140, 16, 14, C.gold, 2))
      },
      holds: { w7_compass: () => circ(0, -6, 14, C.cream) + circ(0, -6, 11, '#E4DFCC') + poly('0,-16 4,-6 -4,-6', C.red) + poly('0,4 4,-6 -4,-6', C.ink) },
      cast: {
        w7_sciA: { name: '科學家（虛構）', skin: 'skinB', top: 'red', bottom: 'ink', leg: 'ink', hair: 'short', hat: 'hood', hatC: 'red', r: 19, k: 1.15 },
        w7_sciB: { name: '科學家（虛構）', skin: 'skin', top: 'blue', bottom: 'ink', leg: 'ink', hair: 'long', hat: 'hood', hatC: 'blue', r: 19, k: 1.1 },
        w7_sciC: { name: '科學家（虛構）', skin: 'skinC', top: 'gold', bottom: 'ink', leg: 'ink', hair: 'short', hat: 'beret', hatC: 'g9', r: 19, k: 1.12 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).w7 = {
    id: 'w7', title: '開場：全世界最冷的地方',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    geoFig: { map: 'world', proj: 'polar' },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'kitchen', shot: '中景：夏天的廚房，阿凱熱到融化，拿著十元要去全世界最冷的地方；小禾來不及拿外套；窗外停著搖搖車', places: ['taiwan'],
          back: [{ k: 'car', x: 655, y: 120, s: .32 }],
          actors: [
            { c: 'he', x: 300, y: 334, s: 1, pose: 'shout', expr: 'shock', look: .5 },
            { c: 'kai', x: 480, y: 334, s: 1, pose: 'offer', expr: 'yell', hold: 'coin', sweat: 2, look: .6 }
          ],
          bubbles: [
            { t: '等一下！\n外套還沒拿！', x: 14, y: 14, w: 200, fs: 23, tail: [298, 160] },
            { t: '熱到融化了……\n去全世界最冷的地方！', x: 300, y: 14, w: 286, fs: 22, tail: [488, 140] }
          ],
          caption: [{ t: '七月，好熱的夏天', x: 14, y: 290, dark: false }],
          sfx: [{ t: '叮！', x: 690, y: 160, fs: 40, rot: 8 }] },
        { scene: 'land', sceneOpt: { sky: '#DCE8EE', sun: [.82, .16], hz: .56, far: false, ground: '#F4F6F2' }, shot: '大格：一片白茫茫的南極點，紅白條紋的標誌桿；阿凱凍成冰棒，小禾看指南針', places: ['southPole'],
          back: [{ k: 'w7_pole', x: 280, y: 440, s: 1.1 }, { k: 'car', x: 440, y: 430, s: .48 }],
          actors: [
            { c: 'kai', x: 120, y: 662, s: 1.02, pose: 'scared', expr: 'shock', look: .4 },
            { c: 'he', x: 360, y: 668, s: 1, pose: 'hold', expr: 'think', hold: 'w7_compass', flip: 1, look: -.4 }
          ],
          bubbles: [
            { t: '嗶——本站：南極點。\n現在是南極的夏天，\n太陽不下山。', x: 10, y: 10, w: 270, kind: 'car', fs: 20, tail: [420, 360] },
            { t: '奇怪，不管往哪個\n方向走……都是「北」！', x: 230, y: 300, w: 286, fs: 21, tail: [360, 494] },
            { t: '因為你們站在\n地球最南邊那一點。', x: 300, y: 130, w: 214, kind: 'car', fs: 19, tail: [440, 360] }
          ],
          sfx: [{ t: '抖抖抖', x: 20, y: 380, fs: 34, rot: -8, c: '#3E6E8E' }] },
        { scene: 'land', sceneOpt: { sky: '#DCE8EE', sun: false, hz: .48, far: false, ground: '#F4F6F2' }, shot: '細長格：一群皇帝企鵝搖搖擺擺經過，企鵝爸爸腳上頂著蛋；兄妹在下面說話', places: ['rossSea'],
          back: [{ k: 'w7_penguin', x: 60, y: 390, s: .8 }, { k: 'w7_penguin', x: 180, y: 400, s: .85 }],
          props: [{ k: 'w7_penguin', x: 120, y: 470, s: 1.25, egg: 1 }],
          actors: [
            { c: 'kai', x: 60, y: 820, s: 1, pose: 'think', expr: 'think', noShadow: true, bust: 1, look: .4 },
            { c: 'he', x: 180, y: 826, s: 1, pose: 'hold', expr: 'smug', hold: 'notebook', noShadow: true, bust: 1, flip: 1, look: -.4 }
          ],
          bubbles: [
            { t: '北極熊呢？', x: 8, y: 10, w: 150, fs: 21, tail: [60, 600] },
            { t: '北極熊住北極，\n南極有企鵝\n和海豹啦！', x: 66, y: 84, w: 170, fs: 19, tail: [180, 610] }
          ],
          caption: [{ t: '企鵝爸爸把蛋放在腳上孵', x: 0, y: 500, w: 242, dark: false }] }
      ] },
      { layout: 'duo', panels: [
        { scene: 'land', sceneOpt: { sky: '#DCE8EE', sun: [.86, .16], hz: .56, far: false, ground: '#F4F6F2' }, shot: '大格：研究站前插著很多旗子，穿不同顏色外套的科學家一起鑽冰芯、放氣象氣球', places: ['antarcticPeninsula'],
          back: [
            { k: 'w7_station', x: 560, y: 300, s: .9 },
            { k: 'w7_flags', x: 250, y: 300, n: 7, s: .9 },
            { k: 'w7_drill', x: 150, y: 470, s: .9 },
            { k: 'w7_balloon', x: 690, y: 140, s: .7 }
          ],
          actors: [
            { c: 'w7_sciA', x: 200, y: 486, s: .9, pose: 'push', expr: 'calm', look: -.2, flip: 1 },
            { c: 'w7_sciB', x: 370, y: 490, s: .9, pose: 'point', expr: 'happy', flip: 1, look: -.4 },
            { c: 'w7_sciC', x: 470, y: 488, s: .9, pose: 'raise', expr: 'happy', look: .4 },
            { c: 'he', x: 640, y: 496, s: .85, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: -.5 }
          ],
          bubbles: [
            { t: '這裡不是誰的地盤。大家說好\n只做和平的事、一起做研究。', x: 200, y: 14, w: 380, fs: 21, tail: [364, 300] }
          ],
          caption: [{ t: '南極的研究站', x: 0, y: 14 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '收尾：小禾的筆記；阿凱打噴嚏，搖搖車說回程請再投十元', places: ['southPole'],
          back: [{ k: 'car', x: 400, y: 500, s: .6 }],
          actors: [
            { c: 'kai', x: 190, y: 500, s: 1.05, pose: 'scared', expr: 'shock', look: .4 },
            { c: 'he', x: 610, y: 506, s: 1.05, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '小禾的筆記：南極洲是最冷的大陸。《南極條約》：大家一起保護，只用來做和平的事和科學研究。', x: 0, y: 12, w: 780, dark: false }],
          bubbles: [
            { t: '哈、哈啾！那可以研究一下\n回家的路嗎……', x: 14, y: 150, w: 330, fs: 22, tail: [180, 300] },
            { t: '嗶——回程\n請再投十元。', x: 310, y: 260, w: 190, kind: 'car', fs: 22, tail: [400, 418] }
          ] }
      ] }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
