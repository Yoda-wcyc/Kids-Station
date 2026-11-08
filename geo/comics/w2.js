/* 🎬 地理・世界篇 2〈歐洲〉開場短漫畫（2026-11-08）。照 geo/data/w2.js 檔頭的草稿；格式見 comics/CONTRACT.md §3、§13。geo/intro.html?u=w2 播放。
   要孩子記住：歐洲面積小（第二小的洲），國家卻很多、彼此很近，搭火車就能一下子換好幾個國家。
   事實（出處見 geo/data/w2.js 檔頭查核）：荷蘭約 26% 的土地低於海平面；地中海型氣候夏天乾熱、冬天溫和多雨（臺灣大部分地方是夏天雨多）；
   荷蘭、德國、瑞士彼此相鄰，有國際列車連接。義大利的形狀像靴子是課本常見的說法。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow } = K;
    // 窗外的小風景（火車窗用）
    const view = (x, y, w, h, kind) => {
      let s = rect(x, y, w, h, '#CFE0EA');
      if (kind === 'nl') s += rect(x, y + h * .6, w, h * .4, '#8DB07A') + rect(x, y + h * .74, w, 6, '#5B8FA8') + rect(x + w * .66 - 4, y + h * .3, 8, h * .32, '#7A5A3C') + [0, 90, 180, 270].map(a => `<rect x="${K.r1(x + w * .66 - 2)}" y="${K.r1(y + h * .3 - 30)}" width="4" height="30" fill="${C.cream}" transform="rotate(${a + 20} ${K.r1(x + w * .66)} ${K.r1(y + h * .3)})"/>`).join('');
      if (kind === 'de') s += path(`M${x} ${y + h * .62} Q${x + w * .3} ${y + h * .36} ${x + w * .55} ${y + h * .58} T${x + w} ${y + h * .5} L${x + w} ${y + h} L${x} ${y + h}Z`, '#6F9A6A') + [.15, .3, .8].map(t => circ(x + w * t, y + h * .62, h * .12, C.g7)).join('') + rect(x + w * .55, y + h * .5, 26, 22, C.cream) + poly(`${x + w * .55 - 4},${y + h * .5} ${x + w * .55 + 13},${y + h * .38} ${x + w * .55 + 30},${y + h * .5}`, C.red);
      if (kind === 'ch') s += poly(`${x},${y + h} ${x + w * .25},${y + h * .25} ${x + w * .5},${y + h}`, '#8FA3A0') + poly(`${x + w * .3},${y + h} ${x + w * .62},${y + h * .12} ${x + w * .95},${y + h}`, '#7D9290') + poly(`${x + w * .55},${y + h * .3} ${x + w * .62},${y + h * .12} ${x + w * .69},${y + h * .3}`, '#FFFFFF') + poly(`${x + w * .2},${y + h * .4} ${x + w * .25},${y + h * .25} ${x + w * .3},${y + h * .4}`, '#FFFFFF') + rect(x, y + h * .88, w, h * .12, '#8DB07A');
      return s;
    };
    root.ComicArt.extend({
      scenes: {
        // 火車車廂裡往外看：三扇窗由上到下＝荷蘭 → 德國 → 瑞士（細長格用）
        w2_train(w, h) {
          let s = rect(0, 0, w, h, C.paper2) + rect(0, h * .9, w, h * .1, C.g7);
          [['nl', '荷蘭'], ['de', '德國'], ['ch', '瑞士']].forEach(([k, t], j) => { const y0 = 64 + j * 158; s += rect(10, y0 - 6, w - 20, 122, C.g9, 12) + view(18, y0, w - 36, 110, k) + txt(w / 2, y0 + 140, t, 21, C.g9); if (j < 2) s += poly(`${w - 34},${y0 + 128} ${w - 20},${y0 + 128} ${w - 27},${y0 + 140}`, C.red); });
          return { bg: s };
        }
      },
      props: {
        // 荷蘭風車（原點＝底部中央）
        w2_mill: x => {
          let s = groundShadow(0, 3, 50, 6) + both(poly('-40,0 40,0 26,-170 -26,-170', '#7A5A3C'), 'cm-warm') + path('M-34 -168 Q0 -214 34 -168Z', C.g9) + rect(-12, -46, 24, 46, C.ink, 4) + rect(-8, -120, 16, 20, C.cream, 2);
          [20, 110, 200, 290].forEach(a => { s += `<g transform="translate(0 -182) rotate(${a})">` + rect(-5, -150, 10, 150, C.wood) + rect(5, -146, 32, 112, C.cream, 0, 'opacity=".92"') + `</g>`; });
          return place(x, s + circ(0, -182, 9, C.ink));
        },
        // 運河邊一排窄窄高高的房子（W 總寬）
        w2_houses: x => {
          const W = x.W || 500, cs = [C.brick2, '#8C5A3C', C.g7, C.cream, '#B9825A', C.g5], n = Math.round(W / 64), bw = W / n;
          let s = '';
          for (let i = 0; i < n; i++) { const H = 130 + ((i * 37) % 4) * 18, x0 = -W / 2 + i * bw; s += both(rect(x0, -H, bw - 2, H, cs[i % cs.length])) + poly(`${x0},${-H} ${x0 + bw / 2 - 1},${-H - 30} ${x0 + bw - 2},${-H}`, cs[i % cs.length]); for (let r = 0; r < 3; r++) s += rect(x0 + 10, -H + 16 + r * 38, bw - 22, 22, C.cream, 2, 'opacity=".85"'); }
          return place(x, s);
        },
        // 橄欖樹（灰綠色）
        w2_olive: x => { const H = x.H || 160; return place(x, groundShadow(0, 3, H * .3, 6) + path(`M-6 0 Q-14 ${-H * .3} 0 ${-H * .5} Q10 ${-H * .3} 6 0Z`, '#7A5A3C') + ell(-H * .2, -H * .62, H * .26, H * .16, '#6F7F55') + ell(H * .18, -H * .66, H * .26, H * .17, '#8A9A6A') + ell(0, -H * .8, H * .26, H * .16, '#9AAA78')); }
      },
      icons: {
        // 義大利像靴子（小地圖，示意）
        w2_boot() { return rect(0, 0, 120, 90, '#BFD7DF') + path('M26 8 L60 4 L66 14 L72 26 L84 38 L100 48 L106 54 L98 58 L88 54 L84 60 L86 70 L80 80 L74 76 L76 66 L70 58 L60 50 L48 40 L38 28 L30 18Z', '#E0C98E') + path('M62 82 L80 80 L72 89Z', '#E0C98E') + path('M32 46 L41 44 L42 61 L33 62Z', '#E0C98E'); }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).w2 = {
    id: 'w2', title: '開場：歐洲坐火車就能出國？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    geoFig: { map: 'world', box: [-25, 30, 65, 72] },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'schoolGate', shot: '中景：放學的校門口，阿凱抱怨出國要坐好久的飛機；小禾抱著地圖書說歐洲坐火車就能出國', places: ['taiwan'],
          back: [{ k: 'car', x: 660, y: 334, s: .48 }],
          actors: [
            { c: 'kai', x: 250, y: 334, s: 1, pose: 'arg', expr: 'mad', look: .4 },
            { c: 'he', x: 450, y: 336, s: 1, pose: 'hold', expr: 'smug', hold: 'book', flip: 1, look: -.5 }
          ],
          bubbles: [
            { t: '出國要坐好久的\n飛機，好無聊……', x: 14, y: 14, w: 224, fs: 23, tail: [250, 140] },
            { t: '在歐洲，搭火車\n就能出國喔！', x: 280, y: 14, w: 214, fs: 23, tail: [440, 168] }
          ],
          caption: [{ t: '騙人！投 10 元看看！', x: 506, y: 14, w: 266 }],
          sfx: [{ t: '叮！', x: 700, y: 190, fs: 40, rot: 8 }] },
        { scene: 'land', sceneOpt: { sky: '#CFE0EA', sun: [.82, .12], hz: .5, far: false, ground: '#8DB07A', river: { y: .64, h: .13, tilt: .01, c: '#5B8FA8' } }, shot: '大格：阿姆斯特丹的運河、房子和風車；小禾指著運河說荷蘭很低，阿凱嚇得踮腳', places: ['amsterdam'],
          back: [
            { k: 'w2_houses', x: 220, y: 343, W: 440 },
            { k: 'w2_mill', x: 452, y: 400, s: .9 },
            { k: 'car', x: 120, y: 656, s: .5 }
          ],
          actors: [
            { c: 'kai', x: 322, y: 664, s: 1.02, pose: 'scared', expr: 'shock', look: .4 },
            { c: 'he', x: 440, y: 670, s: 1, pose: 'point', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '荷蘭・阿姆斯特丹', en: 'AMSTERDAM · TODAY', x: 0, y: 14 }],
          bubbles: [
            { t: '嗶——本站：荷蘭，現代。\n免費附贈翻譯功能。', x: 10, y: 392, w: 280, kind: 'car', fs: 19, tail: [120, 582] },
            { t: '這裡大約四分之一的\n土地，比海還低！', x: 236, y: 150, w: 278, fs: 22, tail: [430, 496] },
            { t: '比海還低？\n我要踮腳尖！', x: 160, y: 270, w: 190, fs: 23, tail: [310, 450] }
          ] },
        { scene: 'w2_train', shot: '細長格：火車窗外一格一格換風景，荷蘭 → 德國 → 瑞士的阿爾卑斯山；阿凱數手指', places: ['netherlands', 'germany', 'alps'],
          actors: [{ c: 'kai', x: 120, y: 820, s: 1.1, pose: 'think', expr: 'grin', noShadow: true, bust: 1 }],
          caption: [{ t: '火車一路往南', x: 0, y: 6, w: 242 }],
          bubbles: [{ t: '早餐、午餐、點心，\n在三個國家吃！', x: 6, y: 540, w: 230, fs: 18, tail: [120, 610] }] }
      ] },
      { layout: 'duo', panels: [
        { scene: 'sea', sceneOpt: { sky: '#F3E6BF', hz: .42, water: '#3E8EB0', sun: [.86, .14] }, shot: '大格：地中海邊的義大利，夏天又乾又熱，橄欖樹下阿凱曬到冒汗；小禾拿出小地圖', places: ['italy', 'mediterranean'],
          back: [
            { k: 'hills', x: 390, y: 513, W: 800, H: 210, f: '#D9C48E' },
            { k: 'w2_olive', x: 90, y: 440, H: 170 }, { k: 'w2_olive', x: 720, y: 452, H: 150 }
          ],
          actors: [
            { c: 'kai', x: 270, y: 496, s: 1.05, pose: 'point', expr: 'grin', sweat: 2, look: .6 },
            { c: 'he', x: 450, y: 500, s: 1.02, pose: 'hold', expr: 'calm', hold: 'notebook', sweat: 1, flip: 1, look: -.4 }
          ],
          cards: [{ icon: 'w2_boot', x: 570, y: 150, w: 190, t: '義大利' }],
          bubbles: [
            { t: '這裡夏天乾、冬天才多雨，\n跟臺灣大多數地方相反。', x: 220, y: 14, w: 340, fs: 22, tail: [440, 330] },
            { t: '義大利真的\n長得像靴子耶！', x: 14, y: 120, w: 210, fs: 23, tail: [262, 300] }
          ],
          caption: [{ t: '地中海邊的義大利\n（夏天）', x: 556, y: 436, w: 224, dark: false }],
          sfx: [{ t: '好熱～', x: 24, y: 24, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '收尾：小禾寫好筆記，阿凱吃點心；搖搖車報下一站', places: ['netherlands', 'germany', 'italy'],
          back: [{ k: 'car', x: 400, y: 500, s: .6 }],
          actors: [
            { c: 'kai', x: 190, y: 500, s: 1.05, pose: 'eat', expr: 'chew', look: .4 },
            { c: 'he', x: 600, y: 506, s: 1.05, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '小禾的筆記：歐洲是第二小的洲，國家很多、靠得很近；西邊是大西洋，南邊是地中海。', x: 0, y: 12, w: 780, dark: false }],
          bubbles: [
            { t: '三個國家的點心，\n都好好吃！', x: 14, y: 150, w: 230, fs: 23, tail: [190, 300] },
            { t: '嗶嗶——\n下一站，非洲！', x: 300, y: 250, w: 200, kind: 'car', fs: 23, tail: [400, 418] }
          ] }
      ] }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
