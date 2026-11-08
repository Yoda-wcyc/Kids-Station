/* 🎬 地理・世界篇 1〈亞洲〉開場短漫畫（2026-11-08）。照 geo/data/w1.js 檔頭的草稿；格式見 comics/CONTRACT.md §3、§13（短漫畫：沒有重點、地圖、測驗）。
   geo/intro.html?u=w1 播放（geo/unit.html「🎬 開場」分頁的 iframe）。每一格的 places＝geo/places.js 的 id，旁邊的地圖跟著亮；geoFig＝地圖範圍（同 w1.js 的 AS）。
   要孩子記住：亞洲非常大，南北跨好多緯度，同一天有的地方熱得流汗、有的地方冷到結冰。
   「換地方」模式：搖搖車這次不倒轉年代，數字盤轉到地方（第一次出現，在這一段交代清楚）。
   事實：新加坡在赤道附近、全年溫暖潮溼常有午後雷雨；西伯利亞冬天又長又冷；聖母峰世界最高、青藏高原叫「世界屋脊」（出處見 geo/data/w1.js 檔頭查核）。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, circ } = K;
    root.ComicArt.extend({
      props: {
        // 大雷雨：斜斜的雨絲，蓋滿整格（W×H）
        w1_rain: x => { const W = x.W || 500, H = x.H || 700, rnd = K.seeded(x.seed || 5); let s = ''; for (let i = 0; i < W * H / 2600; i++) { const a = rnd() * W, b = rnd() * H; s += `<rect x="${K.r1(a)}" y="${K.r1(b)}" width="3" height="${K.r1(26 + rnd() * 22)}" rx="1.5" fill="#E8F1F4" opacity=".55" transform="rotate(14 ${K.r1(a)} ${K.r1(b)})"/>`; } return place(x, s); },
        // 下雪：白點
        w1_snow: x => { const W = x.W || 780, H = x.H || 470, rnd = K.seeded(x.seed || 8); let s = ''; for (let i = 0; i < W * H / 2200; i++) s += circ(rnd() * W, rnd() * H, 2 + rnd() * 4, '#FFFFFF', 'opacity=".85"'); return place(x, s); },
        // 閃電
        w1_bolt: x => place(x, K.poly('0,0 26,0 12,40 30,40 -6,100 6,52 -12,52', '#FFF3B0'))
      },
      cast: {
        w1_heCoat: { name: '小禾（穿外套）', skin: 'skin', top: 'blue', skirt: 'g9', leg: 'g9', shoe: 'red', hairBack: 'heBack', hair: 'he', acc: ['glasses'], r: 22, k: .9 },
        w1_kaiCoat: { name: '阿凱（穿外套）', skin: 'skin', top: 'red', bottom: 'g9', leg: 'g9', stripe: 'cream', hair: 'kai', r: 22 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).w1 = {
    id: 'w1', title: '開場：亞洲都很熱？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    geoFig: { map: 'world', box: [25, -12, 150, 72] },
    pages: [
      { layout: 'trioR', panels: [
        { scene: 'street', shot: '中景：一月的臺灣街上，阿凱穿短褲、拖鞋要出門，小禾穿外套，旁邊停著搖搖車', places: ['taiwan'],
          back: [{ k: 'car', x: 672, y: 334, s: .5 }],
          actors: [
            { c: 'kai', x: 270, y: 334, s: 1, pose: 'point', expr: 'grin', look: .5 },
            { c: 'w1_heCoat', x: 470, y: 336, s: 1, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: -.5 }
          ],
          bubbles: [
            { t: '臺灣在亞洲，\n亞洲都很熱啦！', x: 14, y: 14, w: 230, fs: 24, tail: [262, 150] },
            { t: '一月耶！外面\n才十幾度，你確定？', x: 300, y: 14, w: 250, fs: 23, tail: [462, 160] }
          ],
          caption: [{ t: '一月的臺灣', x: 610, y: 12 }],
          sfx: [{ t: '叮！', x: 700, y: 196, fs: 40, rot: 8 }] },
        { scene: 'coin', sceneOpt: { era: '換地方', year: '亞洲' }, shot: '細長特寫：數字盤沒有倒轉年代，轉成「換地方：亞洲」', places: ['asiaMain'],
          actors: [{ c: 'kai', x: 120, y: 820, s: 1.3, pose: 'raise', expr: 'shock', noShadow: true, bust: 1 }],
          bubbles: [{ t: '嗶——這次不倒轉\n年代，換地方！', x: 10, y: 432, w: 222, kind: 'car', fs: 21 }],
          sfx: [{ t: '叮！', x: 14, y: 186, fs: 40, rot: -8 }] },
        { scene: 'land', sceneOpt: { sky: '#7F928C', sun: false, hz: .62, far: false, ground: '#5E7F6A' }, shot: '大格：新加坡的高樓，午後大雷雨又悶又熱；阿凱得意、兩人都在流汗', places: ['singapore'],
          back: [
            { k: 'building', x: 90, y: 426, W: 150, H: 330, f: '#C9C7BC' },
            { k: 'building', x: 260, y: 426, W: 130, H: 260, win: 'band', f: '#D8D4C4' },
            { k: 'building', x: 430, y: 426, W: 170, H: 380, f: '#B9C4C0' },
            { k: 'w1_bolt', x: 300, y: 40, s: 1.2 },
            { k: 'palm', x: 488, y: 560, H: 220 },
            { k: 'car', x: 140, y: 650, s: .6 }
          ],
          props: [{ k: 'w1_rain', x: 0, y: 0, W: 524, H: 686 }],
          actors: [
            { c: 'kai', x: 300, y: 664, s: 1.05, pose: 'raise', expr: 'grin', sweat: 2, look: .3 },
            { c: 'w1_heCoat', x: 440, y: 670, s: 1, pose: 'hold', expr: 'worry', hold: 'notebook', sweat: 2, flip: 1, look: -.4 }
          ],
          caption: [{ t: '新加坡（赤道附近）', en: 'SINGAPORE · TODAY', x: 0, y: 14 }],
          bubbles: [
            { t: '嗶——本站：新加坡，\n現代。免費附贈\n翻譯功能。', x: 10, y: 410, w: 264, kind: 'car', fs: 20, tail: [140, 556] },
            { t: '看吧！\n亞洲很熱！', x: 190, y: 290, w: 170, fs: 24, tail: [300, 452] },
            { t: '又悶又熱，\n還下大雷雨……', x: 300, y: 150, w: 210, fs: 22, tail: [440, 486] }
          ],
          sfx: [{ t: '轟隆！', x: 330, y: 70, fs: 46, rot: -6, c: '#F2C14E' }] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sky: '#DDE6E8', sun: [.82, .2], hz: .56, far: '#C9D6DA', ground: '#F4F6F2' }, shot: '大格：一片雪白的西伯利亞，阿凱短褲凍得發抖，小禾在筆記本寫字', places: ['siberia'],
          back: [
            { k: 'tree', kind: 'pine', x: 70, y: 280, H: 170, f: '#5E7F6A' }, { k: 'tree', kind: 'pine', x: 740, y: 270, H: 150, f: '#5E7F6A' },
            { k: 'car', x: 640, y: 450, s: .6 }
          ],
          props: [{ k: 'w1_snow', x: 0, y: 0, W: 780, H: 470 }],
          actors: [
            { c: 'kai', x: 330, y: 450, s: 1.05, pose: 'scared', expr: 'shock', look: .3 },
            { c: 'w1_heCoat', x: 150, y: 456, s: 1, pose: 'hold', expr: 'calm', hold: 'notebook', look: .4 }
          ],
          bubbles: [
            { t: '好、好冷……\n我的腿要結冰了！', x: 250, y: 14, w: 250, fs: 23, tail: [318, 238] },
            { t: '同一洲，\n差好多！', x: 14, y: 130, w: 170, fs: 24, tail: [152, 262] },
            { t: '嗶——本站：西伯利亞，\n一樣是亞洲。', x: 500, y: 14, w: 270, kind: 'car', fs: 20, tail: [630, 320] }
          ],
          caption: [{ t: '西伯利亞（亞洲北部）', x: 0, y: 418, dark: false }],
          sfx: [{ t: '哈啾！', x: 380, y: 170, fs: 42, rot: 10, c: '#3E6E8E' }] },
        { scene: 'land', sceneOpt: { sky: '#CFE0EA', sun: false, hz: .74, far: false, ground: '#9DB9A0' }, shot: '細長格：喜馬拉雅山脈，雲上露出聖母峰；兩人在山腳抬頭看', places: ['everest', 'tibetPlateau'],
          back: [
            { k: 'mountain', x: 40, y: 420, W: 240, H: 200, snow: 1, f: '#8FA3A0' },
            { k: 'mountain', x: 270, y: 420, W: 260, H: 230, snow: 1, f: '#8FA3A0' },
            { k: 'mountain', x: 160, y: 420, W: 360, H: 320, snow: 1, f: '#7D9290' },
            { k: 'cloud', x: 40, y: 330, r: 26 }, { k: 'cloud', x: 270, y: 350, r: 24 },
            { k: 'sign', t: '聖母峰', x: 250, y: 462, W: 92, H: 32, fs: 19 }
          ],
          actors: [
            { c: 'kai', x: 80, y: 548, s: .75, pose: 'lookup', expr: 'awe' },
            { c: 'w1_heCoat', x: 165, y: 552, s: .75, pose: 'pointUp', expr: 'happy' }
          ],
          bubbles: [
            { t: '聖母峰！世界最高\n……我爬不上去啦。', x: 10, y: 10, w: 220, fs: 19, tail: [86, 398] },
            { t: '山後面那一大片\n高原，叫做\n「世界屋脊」。', x: 120, y: 292, w: 176, fs: 19, tail: [174, 408] }
          ],
          caption: [{ t: '喜馬拉雅山脈', x: 0, y: 512, dark: false }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '收尾：阿凱穿上外套，小禾舉著筆記本；搖搖車報下一站', places: ['singapore', 'siberia'],
          actors: [
            { c: 'w1_kaiCoat', x: 120, y: 540, s: 1.05, pose: 'think', expr: 'smug', look: .4 },
            { c: 'w1_heCoat', x: 340, y: 546, s: 1.05, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '小禾的筆記：亞洲是最大的洲，南北很長——赤道旁邊很熱，西伯利亞很冷。', x: 0, y: 12, w: 464, dark: false }],
          bubbles: [
            { t: '好啦好啦，\n亞洲不是都很熱。', x: 10, y: 170, w: 220, fs: 22, tail: [126, 330] },
            { t: '嗶嗶——\n下一站，歐洲！', x: 254, y: 240, w: 200, kind: 'car', fs: 22 }
          ] }
      ] }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
