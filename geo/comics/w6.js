/* 🎬 地理・世界篇 6〈大洋洲〉開場短漫畫（2026-11-08）。照 geo/data/w6.js 檔頭的草稿；格式見 comics/CONTRACT.md §3、§13。geo/intro.html?u=w6 播放。
   要孩子記住：大洋洲在太平洋西南邊、大部分在南半球，季節和臺灣相反（聖誕節在夏天）。
   事實（出處見 geo/data/w6.js 檔頭查核）：雪梨歌劇院在雪梨港邊；大堡礁在澳洲東北外海；太平洋是最大的洋；紐西蘭有北島、南島；
   臺灣原住民的語言和毛利語都屬南島語系。
   第 4 格「眼睛」這句草稿要再查，2026-11-08 查過了，留著：
   - 阿美語 mata＝眼睛：原住民族語言線上辭典、吳明義《阿美族語辭典》、蔡中涵大辭典（都收在 new-amis.moedict.tw/terms/mata）。
   - 毛利語 mata：Te Aka Māori Dictionary（maoridictionary.co.nz）列「face, countenance, … eye」，所以漫畫寫「mata 是臉，也可以指眼睛」。
   毛利阿嬤、烤肉的雪梨人是虛構的人物；不畫毛利人的刺青（有文化意義，不拿來當造型）。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow, cap, puff } = K;
    root.ComicArt.extend({
      scenes: {
        // 路線圖（細長格）：上面臺灣、中間赤道、一大片太平洋、下面澳洲（示意，不照比例）
        w6_route(w, h) {
          let s = rect(0, 0, w, h, '#5B8FA8');
          s += path(`M${w * .62} ${h * .17} Q${w * .7} ${h * .2} ${w * .66} ${h * .27} Q${w * .6} ${h * .3} ${w * .58} ${h * .24}Z`, '#9DB9A0') + txt(w * .62, h * .33, '臺灣', 20, C.cream);
          s += `<line x1="0" y1="${h * .46}" x2="${w}" y2="${h * .46}" stroke="${C.red}" stroke-width="4" stroke-dasharray="12 8"/>` + rect(8, h * .46 - 30, 64, 24, C.red, 5) + txt(40, h * .46 - 12, '赤道', 16, C.cream);
          s += txt(w - 10, h * .44, '北半球 ▲', 15, C.cream, { a: 'end' }) + txt(w - 10, h * .5, '南半球 ▼', 15, C.cream, { a: 'end' });
          s += txt(w / 2, h * .62, '太平洋', 34, 'rgba(247,243,230,.85)');
          s += path(`M${w * .1} ${h * .76} Q${w * .3} ${h * .7} ${w * .55} ${h * .72} Q${w * .82} ${h * .7} ${w * .9} ${h * .8} Q${w * .92} ${h * .9} ${w * .7} ${h * .92} Q${w * .4} ${h * .95} ${w * .2} ${h * .9} Q${w * .04} ${h * .84} ${w * .1} ${h * .76}Z`, '#D9A066') + txt(w / 2, h * .85, '澳洲', 22, C.ink);
          s += path(`M${w * .6} ${h * .29} Q${w * .3} ${h * .5} ${w * .55} ${h * .74}`, 'none', `stroke="${C.cream}" stroke-width="4" stroke-dasharray="3 9" stroke-linecap="round"`);
          return { bg: s };
        },
        // 三個小框：大堡礁｜澳洲內陸的紅色沙漠＋袋鼠｜紐西蘭的綠色山丘
        w6_montage(w, h) {
          const fw = (w - 40) / 3; let s = rect(0, 0, w, h, C.g9);
          const frame = (i, inner, t) => { const x0 = 10 + i * (fw + 10); return `<svg x="${K.r1(x0)}" y="10" width="${K.r1(fw)}" height="${h - 20}" viewBox="0 0 ${K.r1(fw)} ${h - 20}">${inner(fw, h - 20)}</svg>` + rect(x0, h - 50, fw, 40, 'rgba(21,23,20,.6)') + txt(x0 + fw / 2, h - 22, t, 22, C.cream); };
          s += frame(0, (W, H) => rect(0, 0, W, H, '#3E8EB0') + [[.2, .7, 30, '#E07A5F'], [.5, .78, 40, '#F2C14E'], [.78, .68, 28, '#C77DAB'], [.35, .86, 24, '#E07A5F'], [.66, .9, 30, '#9DB9A0']].map(([x, y, r, c]) => circ(W * x, H * y, r, c)).join('') + [[.3, .3], [.6, .42], [.45, .2]].map(([x, y]) => ell(W * x, H * y, 16, 8, '#F2C14E') + poly(`${W * x - 16},${H * y} ${W * x - 28},${H * y - 8} ${W * x - 28},${H * y + 8}`, '#F2C14E')).join(''), '大堡礁');
          s += frame(1, (W, H) => rect(0, 0, W, H, '#F2D7A6') + rect(0, H * .55, W, H * .45, '#C96A3A') + path(`M${W * .55} ${H * .55} Q${W * .62} ${H * .4} ${W * .8} ${H * .42} Q${W * .92} ${H * .45} ${W * .95} ${H * .55}Z`, '#A84E2A') + `<g transform="translate(${K.r1(W * .32)} ${K.r1(H * .8)})">` + ell(0, -40, 22, 34, '#8C5A3C') + ell(14, -82, 10, 14, '#8C5A3C') + poly('8,-94 12,-112 16,-94', '#8C5A3C') + cap(-14, -16, -50, 6, 9, '#8C5A3C') + cap(6, -10, 22, 0, 8, '#6B4A32') + `</g>`, '澳洲內陸');
          s += frame(2, (W, H) => rect(0, 0, W, H, '#CFE0EA') + poly(`0,${H * .55} ${W * .35},${H * .2} ${W * .7},${H * .55}`, '#8FA3A0') + poly(`${W * .28},${H * .3} ${W * .35},${H * .2} ${W * .42},${H * .3}`, '#FFFFFF') + path(`M0 ${H * .6} Q${W * .3} ${H * .45} ${W * .6} ${H * .6} T${W} ${H * .55} L${W} ${H} L0 ${H}Z`, '#6F9A6A') + [[.3, .78], [.5, .8], [.7, .74]].map(([x, y]) => ell(W * x, H * y, 14, 9, C.cream)).join(''), '紐西蘭');
          return { bg: s };
        }
      },
      props: {
        // 雪梨歌劇院（幾片白色的帆）
        w6_opera: x => place(x, rect(-170, -20, 340, 20, '#C9C2B0') + [[-120, 70, 90], [-70, 100, 110], [-10, 120, 130], [60, 90, 100], [110, 60, 70]].map(([a, H, W]) => path(`M${a - W / 2} -20 Q${a - W * .3} ${-H - 20} ${a + W * .35} ${-H - 30} Q${a + W * .1} ${-H * .5} ${a + W / 2} -20Z`, '#F7F3E6') + path(`M${a + W * .05} -20 Q${a + W * .15} ${-H * .5} ${a + W * .35} ${-H - 30} Q${a + W * .1} ${-H * .5} ${a + W / 2} -20Z`, '#E4DFCC')).join('')),
        // 烤肉架＋煙
        w6_bbq: x => place(x, groundShadow(0, 3, 50, 6) + cap(-30, -40, -40, 0, 5, C.ink) + cap(30, -40, 40, 0, 5, C.ink) + both(rect(-50, -66, 100, 30, C.ink, 6)) + rect(-44, -70, 88, 6, '#6A7170') + ell(-20, -74, 12, 5, '#8C5A3C') + ell(16, -74, 12, 5, '#8C5A3C') + puff(-6, -110, 14, 'rgba(247,243,230,.8)') + puff(10, -146, 18, 'rgba(247,243,230,.6)'))
      },
      holds: { w6_coatH: () => rect(-18, -24, 40, 34, C.blue, 6) + rect(-18, -10, 40, 4, C.cream) },
      cast: {
        w6_kaiCoat: { name: '阿凱（羽絨外套）', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'g9', stripe: 'cream', hair: 'kai', r: 22 },
        w6_heCoat: { name: '小禾（羽絨外套）', skin: 'skin', top: 'red', skirt: 'g9', leg: 'g9', shoe: 'red', hairBack: 'heBack', hair: 'he', acc: ['glasses'], r: 22, k: .9 },
        w6_bbqA: { name: '雪梨人（虛構）', skin: 'skinB', top: 'gold', bottom: 'g9', leg: 'skinB', hair: 'short', hat: 'cone', hatC: 'red', r: 19, k: 1.12 },
        w6_bbqB: { name: '雪梨人（虛構）', skin: 'skin', top: 'g5', skirt: 'blue', leg: 'skin', hair: 'long', hairC: '#8C5A3C', hat: 'cone', hatC: 'red', r: 19, k: 1.06 },
        w6_kuia: { name: '毛利阿嬤（虛構）', skin: 'skinB', top: 'g7', skirt: 'wood', leg: 'skinB', sleeve: 'skinB', hair: 'bun', hairC: '#8E8E8E', r: 19, k: 1.04 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).w6 = {
    id: 'w6', title: '開場：聖誕節在夏天？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    geoFig: { map: 'world', box: [105, -50, 195, 12] },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'street', shot: '中景：十二月的臺北冷到發抖，阿凱把十元丟進搖搖車；小禾提醒要轉「地方」', places: ['taipei'],
          back: [{ k: 'car', x: 672, y: 334, s: .5 }],
          actors: [
            { c: 'w6_heCoat', x: 260, y: 336, s: 1, pose: 'shout', expr: 'shout', hold: 'notebook', look: .5 },
            { c: 'w6_kaiCoat', x: 470, y: 334, s: 1, pose: 'offer', expr: 'worry', look: .6 }
          ],
          bubbles: [
            { t: '哥，要轉的是「地方」，\n不是「年代」！', x: 14, y: 14, w: 290, fs: 22, tail: [262, 150] },
            { t: '好冷！我要去\n溫暖的地方！', x: 330, y: 14, w: 210, fs: 23, tail: [476, 142] }
          ],
          caption: [{ t: '十二月的臺北', x: 584, y: 12 }],
          sfx: [{ t: '叮！', x: 700, y: 196, fs: 40, rot: 8 }] },
        { scene: 'sea', sceneOpt: { sky: '#BFE0EE', hz: .46, water: '#3E8EB0', sun: [.86, .1] }, shot: '大格：雪梨歌劇院前，旁邊的人穿短袖、戴聖誕帽在海邊烤肉；兩人穿羽絨外套熱到流汗', places: ['sydney'],
          back: [
            { k: 'w6_opera', x: 300, y: 330, s: .9 },
            { k: 'hills', x: 262, y: 686, W: 600, H: 170, f: '#D9C48E' }
          ],
          actors: [
            { c: 'w6_bbqA', x: 380, y: 610, s: .9, pose: 'wave', expr: 'happy', flip: 1, look: -.5 },
            { c: 'w6_bbqB', x: 470, y: 614, s: .88, pose: 'hold', expr: 'grin', flip: 1, look: -.5 },
            { c: 'w6_kaiCoat', x: 110, y: 664, s: 1, pose: 'scared', expr: 'shock', sweat: 2, look: .5 },
            { c: 'w6_heCoat', x: 226, y: 670, s: 1, pose: 'hold', expr: 'worry', hold: 'notebook', sweat: 2, look: .5 }
          ],
          props: [{ k: 'w6_bbq', x: 430, y: 650, s: .9 }],
          bubbles: [
            { t: '嗶——本站：澳洲雪梨。\n今天天氣：夏天！', x: 10, y: 10, w: 296, kind: 'car', fs: 20 },
            { t: '聖誕老公公\n穿短褲？！', x: 10, y: 330, w: 190, fs: 23, tail: [106, 462] },
            { t: '聖誕快樂！\n一起來烤肉！', x: 300, y: 300, w: 200, fs: 22, tail: [384, 404] }
          ],
          caption: [{ t: '雪梨・十二月', x: 352, y: 12 }] },
        { scene: 'w6_route', shot: '細長格：路線圖，從臺灣一路往南，飛過赤道和一大片太平洋，到南半球的澳洲', places: ['taiwan', 'australia'],
          bubbles: [{ t: '嗶——本車剛剛經過\n最大的太平洋。', x: 6, y: 8, w: 230, kind: 'car', fs: 18 }],
          caption: [{ t: '小禾：北半球到南半球，季節剛好相反！', x: 0, y: 604, w: 242, dark: false }] }
      ] },
      { layout: 'trioR', panels: [
        { scene: 'w6_montage', shot: '三個小框：大堡礁的珊瑚和魚、澳洲內陸的紅色沙漠和袋鼠、紐西蘭的山和綠色山丘', places: ['greatBarrierReef', 'uluru', 'newZealand'],
          bubbles: [{ t: '嗶——大堡礁、紅色沙漠、紐西蘭，一次看完！', x: 150, y: 16, w: 480, kind: 'car', fs: 21 }] },
        { scene: 'land', sceneOpt: { sky: '#CFE6D8', sun: [.8, .12], hz: .62, far: '#7FA07E', ground: '#8DB07A' }, shot: '細長格：紐西蘭，毛利阿嬤指著自己的眼睛說 mata，小禾想起阿美族的外婆也這樣說', places: ['newZealand'],
          actors: [
            { c: 'w6_kuia', x: 70, y: 660, s: .82, pose: 'think', expr: 'happy', look: .5 },
            { c: 'w6_heCoat', x: 176, y: 666, s: .8, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: -.5 }
          ],
          caption: [{ t: '紐西蘭', x: 0, y: 8 }],
          bubbles: [
            { t: 'mata。\n（臉、眼睛）', x: 8, y: 286, w: 170, fs: 20, tail: [70, 492] },
            { t: '阿美族的外婆\n也說 mata，\n是眼睛！', x: 60, y: 372, w: 176, fs: 19, tail: [176, 522] }
          ],
          cards: [{ icon: 'people', x: 8, y: 58, w: 226, t: '毛利語、阿美語\n都是南島語系\n的親戚。' }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '收尾：小禾的筆記；阿凱脫下外套，搖搖車說回程請再投十元', places: ['australia', 'newZealand'],
          back: [{ k: 'car', x: 420, y: 668, s: .55 }],
          actors: [
            { c: 'kai', x: 130, y: 662, s: 1.05, pose: 'offer', expr: 'grin', hold: 'w6_coatH', look: .4 },
            { c: 'w6_heCoat', x: 300, y: 668, s: 1.05, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: -.4 }
          ],
          caption: [{ t: '小禾的筆記：大洋洲在太平洋的西南邊，大部分在南半球——季節和臺灣相反。', x: 0, y: 12, w: 524, dark: false }],
          bubbles: [
            { t: '那我們回臺灣，\n換我過夏天——', x: 14, y: 220, w: 230, fs: 23, tail: [134, 470] },
            { t: '嗶——回程\n請再投十元。', x: 300, y: 400, w: 200, kind: 'car', fs: 22, tail: [420, 590] }
          ] }
      ] }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
