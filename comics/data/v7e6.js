/* 世界史漫畫 第 7 冊 現代世界・第 6 話（系列結局；只有資料＋這一話自己的圖形）。
   國中社會會再學到：全球氣候變遷（地理）與全球化。格式：comics/CONTRACT.md
   結尾回到第 1 冊第 1 話的廚房、冰箱和布丁（kitchen 場景、ruleTablet 家規泥板都是第 1 話的圖）。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, place, rect, poly, circ, ell, path, txt, both, groundShadow, seeded } = K;
    const pudding = (lab) => both(poly('-22,0 22,0 28,-40 -28,-40', C.cream)) + path('M-28 -40 L28 -40 L24 -30 L-24 -30Z', C.gold) + ell(0, -44, 26, 7, '#8C5A3C') + (lab ? rect(-20, -24, 40, 16, C.red, 3) + txt(0, -12, lab, 11, C.cream) : '');
    const earth = (cx, cy, r) => circ(cx, cy, r * 1.08, 'rgba(160,200,230,.25)') + circ(cx, cy, r, C.blue) + path(`M${cx - r * .6} ${cy - r * .2} q${r * .2} ${-r * .5} ${r * .55} ${-r * .3} q${-r * .05} ${r * .4} ${-r * .3} ${r * .55}Z`, C.g5) + path(`M${cx + r * .1} ${cy + r * .1} q${r * .4} ${-r * .2} ${r * .6} ${r * .1} q${-r * .2} ${r * .45} ${-r * .55} ${r * .3}Z`, C.g5) + path(`M${cx - r * .2} ${cy - r * .85} q${r * .3} ${-r * .05} ${r * .5} ${r * .08}`, 'none', `stroke="${C.cream}" stroke-width="${r * .06}" opacity=".7"`) + circ(cx - r * .35, cy - r * .4, r * .3, 'rgba(255,255,255,.18)');
    const stars = (w, h, n, seed) => { const r = seeded(seed || 33); let s = ''; for (let i = 0; i < n; i++) s += circ(r() * w, r() * h, .8 + r() * 1.8, C.cream, 'opacity=".85"'); return s; };
    root.ComicArt.extend({
      scenes: {
        // 超市：貨架＋冷藏櫃（一排排布丁）
        v7e6_market(w, h) {
          let s = rect(0, 0, w, h, '#E9E4D2') + rect(0, h * .78, w, h * .22, '#D8D2BC');
          s += both(rect(w * .36, h * .12, w * .6, h * .62, '#CFDCD8', 6)) + rect(w * .36, h * .12, w * .6, 14, C.g7);
          for (let j = 0; j < 3; j++) { s += rect(w * .38, h * (.26 + j * .16), w * .56, 6, C.basalt3); for (let x = w * .4; x < w * .92; x += 44) s += `<g transform="translate(${K.r1(x + 18)} ${K.r1(h * (.26 + j * .16))}) scale(.7)">` + pudding() + `</g>`; }
          s += txt(w * .66, h * .1 - 6, '冷藏區', 22, C.g9);
          return { bg: s };
        },
        // 太空裡看地球：搖搖車繞著地球飛
        v7e6_space(w, h) {
          const cx = w * .5, cy = h * 1.18, R = w * .82;
          let s = rect(0, 0, w, h, '#0E1311') + stars(w, h * .6, 80, 7) + circ(cx, cy, R * 1.04, 'rgba(160,200,230,.22)') + circ(cx, cy, R, C.blue);
          [[-.42, -.86, .22, .07], [-.08, -.9, .16, .05], [.3, -.84, .24, .08], [-.2, -.72, .3, .1], [.5, -.66, .18, .1]].forEach(([dx, dy, rx, ry]) => { s += ell(cx + dx * R, cy + dy * R, rx * R, ry * R, C.g5); });
          [[-.3, -.8, .2], [.15, -.76, .25], [.45, -.88, .14]].forEach(([dx, dy, rx]) => { s += ell(cx + dx * R, cy + dy * R, rx * R, R * .02, C.cream, 'opacity=".55"'); });
          return { bg: s };
        },
        // 42 站一路走來：彎彎的路，7 冊 7 個顏色的站，最後是「家」
        v7e6_route(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const pts = [[60, h * .82], [200, h * .6], [330, h * .82], [450, h * .56], [560, h * .8], [640, h * .5], [560, h * .26], [700, h * .16]];
          for (let i = 0; i < pts.length - 1; i++) s += K.cap(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 20, C.paper3);
          const vol = ['古文明', '古典世界', '中古世界', '大航海', '革命與工業', '兩次大戰', '現代世界'], cs = [C.clay2, C.g5, C.gold, C.blue, C.red, C.purple, C.g7];
          vol.forEach((t, i) => { const [x, y] = pts[i], up = i % 2 === 0; s += circ(x, y, 20, cs[i]) + txt(x, y + 8, String(i + 1), 22, C.cream) + rect(x - 62, up ? y - 70 : y + 28, 124, 34, C.cream, 6, 'opacity=".95"') + txt(x, up ? y - 46 : y + 52, t, 19, C.ink); });
          const [hx, hy] = pts[7];
          s += both(rect(hx - 30, hy - 10, 60, 44, C.cream)) + poly(`${hx - 38},${hy - 8} ${hx},${hy - 40} ${hx + 38},${hy - 8}`, C.red) + rect(hx - 8, hy + 10, 16, 24, C.wood) + txt(hx, hy + 64, '家', 24, C.red);
          return { bg: s };
        },
        // 三條線：記錄與溝通、交流與移動、一起生活
        v7e6_threads(w, h) {
          let s = rect(0, 0, w, h, C.g9);
          const rows = [['① 記錄與溝通', C.gold, ['泥板', '字母', '紙', '印刷', '網路']], ['② 交流與移動', C.blue, ['河', '海', '路', '航線', '太空']], ['③ 一起生活', C.red, ['法律', '民主', '人權', '全球合作']]];
          rows.forEach(([t, c, items], j) => {
            const y = h * (.3 + j * .2);
            s += rect(20, y - 16, w - 40, 32, c, 16, 'opacity=".9"') + txt(30, y - 30, t, 22, C.cream, { a: 'start' });
            items.forEach((it, i) => { const x = 230 + i * (w - 290) / (items.length - 1); s += circ(x, y, 26, C.cream) + txt(x, y + 8, it.length > 2 ? it.slice(0, 2) : it, it.length > 2 ? 15 : 18, C.ink) + (it.length > 2 ? txt(x, y + 46, it, 15, C.cream) : ''); if (i) s += poly(`${x - 44},${y - 7} ${x - 32},${y} ${x - 44},${y + 7}`, C.cream); });
          });
          return { bg: s };
        },
        // 細長格：一個布丁的旅程（由下往上）
        v7e6_journey(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const st = [['牧場', '牛奶'], ['甘蔗田', '糖'], ['養雞場', '雞蛋'], ['工廠', '做成布丁'], ['貨櫃船、卡車', '冷藏運送'], ['超市', '冷藏櫃']];
          const ys = st.map((_, i) => h * (.88 - i * .14));
          ys.forEach((y, i) => { if (i) s += rect(w / 2 - 4, y, 8, ys[i - 1] - y, C.paper3) + poly(`${w / 2 - 12},${y + 40} ${w / 2},${y + 26} ${w / 2 + 12},${y + 40}`, C.wood); });
          st.forEach(([a, b], i) => { const y = ys[i]; s += rect(30, y - 28, w - 60, 56, i === 5 ? C.g7 : C.cream, 12) + txt(w / 2, y - 2, a, 22, i === 5 ? C.cream : C.ink) + txt(w / 2, y + 20, b, 16, i === 5 ? C.g2 : C.wood, { w: 700 }); });
          return { bg: s };
        },
        // 溫暖的城市公園：太陽能板、腳踏車道、樹
        v7e6_green(w, h) {
          let s = rect(0, 0, w, h, '#D9E4D6') + circ(w * .82, h * .1, 50, '#FFF8DC') + circ(w * .82, h * .1, 100, 'url(#cm-sun)');
          s += rect(0, h * .55, w, h * .45, C.g3) + rect(0, h * .74, w, h * .06, C.paper3);
          [[.12, .5], [.32, .52]].forEach(([x, y]) => { s += K.cap(w * x, h * y, w * x, h * .58, 6, C.basalt3) + `<g transform="translate(${K.r1(w * x)} ${K.r1(h * y)}) rotate(-16)">` + rect(-50, -30, 100, 40, C.blue, 3) + rect(-48, -12, 96, 2, C.g2) + rect(-2, -30, 3, 40, C.g2) + `</g>`; });
          return { bg: s };
        }
      },
      props: {
        v7e6_pudding: x => place(x, pudding(x.lab)),
        v7e6_note: x => place(x, both(rect(-60, -40, 120, 52, '#FFF3B0', 3)) + txt(0, -20, '小禾的布丁', 15, C.ink) + txt(0, 2, '阿凱買的・不准吃', 12, C.red)),
        v7e6_thermo: x => place(x, both(rect(-12, -150, 24, 140, C.cream, 12)) + rect(-5, -96, 10, 90, C.red, 5) + circ(0, -8, 20, C.red) + [0, 1, 2, 3, 4].map(i => rect(12, -140 + i * 26, 10, 3, C.ink)).join(''))
      },
      holds: {
        v7e6_puddingH: () => `<g transform="translate(4 -6) scale(.8)">` + pudding() + `</g>`
      },
      cast: {
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v7e6 = {
    id: 'v7e6', vol: '第 7 冊 現代世界', volNo: 7, ep: 6, title: '回家的路：一個地球', next: '全系列完：要不要從第 1 冊再坐一次？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！42 站全部走完。這次阿凱真的寫下來了：冰箱裡那個布丁，留一口給你。',
    note: '阿凱、小禾是虛構的角色。搖搖車飛到太空看地球、把 42 站串起來的畫面是漫畫的想像。一個布丁用到的原料從哪裡來，每一家、每一批都不一樣，這裡畫的是「可能」走過的路，不是真的某一個產品。氣候變遷的說明照聯合國的資料寫；地球升溫多少，各機構用的年份不同，數字會有一點差別，這裡寫「1 度多」。',
    curriculum: '國中社會會再學到：全球氣候變遷（地理）與全球化',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'g3' },
      back: [
        { k: 'v7e6_pudding', x: 130, y: 940, s: 2.6, lab: '小禾' },
        { k: 'ruleTablet', x: 650, y: 900, rot: 6 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'happy', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'v7e6_market', shot: '中景：超市冷藏區，阿凱拿著一個布丁要買給小禾，小禾看包裝上的字',
          actors: [
            { c: 'kai', x: 160, y: 330, s: 1, pose: 'offer', expr: 'happy', hold: 'v7e6_puddingH', blush: 1, look: .5 },
            { c: 'he', x: 420, y: 332, s: 1.05, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '第 1 站吃掉的布丁……\n我用零用錢還你。', x: 14, y: 16, w: 290, fs: 23, tail: [168, 140] },
            { t: '牛奶、糖、雞蛋……\n這個布丁走了多遠？', x: 320, y: 70, w: 270, fs: 22, tail: [420, 170] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sky: '#E8E2CC', sun: [.82, .14], hz: .5, far: false, ground: 'paper3' }, shot: '中景：超市門口的搖搖車，兄妹一起投 10 元',
          back: [
            { k: 'house', x: 262, y: 343, W: 500, H: 220, roof: 'flat', roofC: 'g7', f: 'cream' },
            { k: 'sign', t: '超市', x: 262, y: 200, W: 160, H: 46, fs: 26 },
            { k: 'car', x: 250, y: 580, s: .9 }
          ],
          actors: [
            { c: 'kai', x: 440, y: 640, s: 1.1, pose: 'offer', expr: 'grin', flip: 1, look: -.3 },
            { c: 'he', x: 90, y: 652, s: 1.05, pose: 'offer', expr: 'happy', look: .5 }
          ],
          bubbles: [
            { t: '最後一次，\n一起投！', x: 280, y: 300, w: 200, fs: 24, tail: [432, 446] },
            { t: '我想看看\n布丁的旅程。', x: 14, y: 370, w: 210, fs: 23, tail: [90, 470] }
          ],
          sfx: [{ t: '叮！', x: 300, y: 450, fs: 40, rot: 8 }] },
        { scene: 'coin', sceneOpt: { year: '今天', era: '沒有倒轉' }, shot: '小格特寫：數字盤這次沒有倒轉，停在「今天」',
          actors: [{ c: 'kai', x: 118, y: 860, s: 1.8, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '咦？這次\n沒有倒轉！', x: 18, y: 430, w: 206, fs: 24, tail: [104, 540] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v7e6_space', shot: '滿版：搖搖車往上飛到太空，下面是藍色的地球',
          back: [{ k: 'car', x: 300, y: 440, s: 1.4, rot: -8 }],
          actors: [
            { c: 'kaiSpace', x: 236, y: 350, s: 1, pose: 'ride', expr: 'awe', noShadow: true, look: .5 },
            { c: 'heSpace', x: 560, y: 380, s: .95, pose: 'wave', expr: 'happy', noShadow: true, flip: 1, look: .5 }
          ],
          caption: [
            { t: '今天，地球上空', en: 'EARTH · TODAY', x: 0, y: 18 },
            { t: '這一次，搖搖車不往過去開，而是往上飛：要讓兄妹看看，一路走過的 42 站都在同一個地球上。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：全世界。\n最後一站，免費附贈全景。', x: 14, y: 520, w: 370, kind: 'car', fs: 23, tail: [300, 440] },
            { t: '我們在太空！', x: 14, y: 160, w: 200, fs: 25, tail: [236, 240] },
            { t: '巴比倫、羅馬、長安、\n柏林……都在下面！', x: 420, y: 470, w: 330, fs: 23, tail: [556, 380] }
          ] }
      ] },
      { layout: 'duo', panels: [
        { scene: 'v7e6_route', shot: '大格：42 站串成一條路，7 冊 7 個顏色，最後一站是「家」',
          caption: [{ t: '7 冊、42 站，一路從五千多年前開回今天', x: 0, y: 12 }],
          bubbles: [{ t: '嗶——每一站，\n都是有人想解決一個麻煩。', x: 20, y: 70, w: 330, kind: 'car', fs: 21 }] },
        { scene: 'v7e6_threads', shot: '大格：三條彩色的線，把 42 站串起來',
          caption: [{ t: '把 42 站串起來的三條線', x: 0, y: 10, dark: false }],
          bubbles: [{ t: '寫字、移動、一起生活……\n人一直在想辦法連起來！', x: 200, y: 404, w: 380, fs: 22 }] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v7e6_journey', shot: '細長格：一個布丁可能走過的路，從牧場、甘蔗田一路到超市',
          caption: [{ t: '布丁的旅程\n（可能是這樣）', x: 0, y: 14, w: 300 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '中景：兄妹討論全球化，小禾記筆記',
          actors: [
            { c: 'kai', x: 110, y: 920, s: 1.3, pose: 'think', expr: 'awe', look: .4 },
            { c: 'he', x: 310, y: 926, s: 1.3, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .4 }
          ],
          caption: [{ t: '全球化：東西、人和消息，在全世界之間來來去去。', x: 0, y: 16, w: 420 }],
          bubbles: [
            { t: '原料可能來自不同國家，\n坐船、坐車，才到超市。', x: 14, y: 200, w: 394, fs: 23, tail: [310, 690] },
            { t: '就像我的平板！\n很多國家一起做的。', x: 14, y: 370, w: 300, fs: 23, tail: [110, 680] },
            { t: '遠方的事，\n跟我們的冰箱有關。', x: 100, y: 530, w: 300, fs: 23, tail: [310, 700] }
          ] }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'v7e6_green', shot: '大格：城市公園，有太陽能板、腳踏車道；兄妹看著一支溫度計',
          back: [{ k: 'tree', kind: 'round', x: 420, y: 560, H: 200 }, { k: 'v7e6_thermo', x: 400, y: 900, s: 1.4 }],
          actors: [
            { c: 'kai', x: 120, y: 1010, s: 1.2, pose: 'point', expr: 'think', look: .5 },
            { c: 'he', x: 280, y: 1020, s: 1.15, pose: 'hold', expr: 'calm', hold: 'notebook', look: .5 }
          ],
          caption: [{ t: '氣候變遷：人類燒煤、石油、天然氣，放出二氧化碳這些溫室氣體，地球變熱了。現在比 1800 年代後期，平均熱了 1 度多。', x: 0, y: 14, w: 480 }],
          bubbles: [
            { t: '1 度？\n好像不多啊。', x: 14, y: 560, w: 200, fs: 24, tail: [120, 800] },
            { t: '整個地球一起變熱，\n冰會融化、海水變高，\n乾旱和淹水也會變多。', x: 120, y: 650, w: 330, fs: 21, tail: [270, 820] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：大家約好一起減碳（巴黎協定）',
          cards: [{ icon: 'people', y: 20, x: 10, w: 246, t: '2015 年\n《巴黎協定》：\n各國約好，要讓\n地球升溫少於 2 度，\n最好不超過 1.5 度。' }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '字卡：約好真的有用（臭氧層）',
          cards: [{ icon: 'star', y: 20, x: 10, w: 246, t: '約好真的有用：\n1987 年各國約好\n少用破壞臭氧層的\n東西，南極上空的\n臭氧層，可望在\n2066 年前後補好。' }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'flat', sceneOpt: { c: 'g7', zoom: 1, cx: .8 }, shot: '矮寬格：搖搖車說再見',
          back: [{ k: 'car', x: 610, y: 380, s: 1.1, lights: 1 }],
          actors: [
            { c: 'kai', x: 100, y: 390, s: .85, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'he', x: 210, y: 394, s: .85, pose: 'wave', expr: 'happy', look: .6 }
          ],
          bubbles: [
            { t: '嗶——42 站，全部走完。\n每一站的人，都在想辦法\n讓明天好一點。', x: 330, y: 20, w: 340, kind: 'car', fs: 21, tail: [560, 250] },
            { t: '我們也可以：\n關燈、搭捷運、\n不浪費食物！', x: 14, y: 30, w: 230, fs: 21, tail: [210, 240] }
          ] },
        { scene: 'kitchen', shot: '收尾大格：回到第 1 話的廚房。冰箱裡放著新買的布丁，貼著便條；家規泥板貼在冰箱門上；窗外停著搖搖車',
          back: [
            { k: 'v7e6_pudding', x: 100, y: 186, s: .9, lab: '小禾' },
            { k: 'ruleTablet', x: 118, y: 330, rot: -4 },
            { k: 'v7e6_note', x: 110, y: 430, rot: 3 },
            { k: 'car', x: 655, y: 120, s: .32 }
          ],
          actors: [
            { c: 'kai', x: 360, y: 600, s: 1.2, pose: 'point', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 540, y: 606, s: 1.15, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: .8, blush: 1 }
          ],
          bubbles: [
            { t: '這次我寫下來了：\n「小禾的布丁」！', x: 200, y: 150, w: 270, fs: 23, tail: [340, 380] },
            { t: '寫下來，\n才算數！', x: 480, y: 250, w: 170, fs: 24, tail: [536, 400] },
            { t: '嗶嗶——\n終點站：家。', x: 600, y: 20, w: 170, kind: 'car', fs: 21, tail: [655, 100] }
          ],
          caption: [{ t: '下一話：沒有下一話了，從第 1 冊再坐一次？', x: 220, y: 572, w: 540 }] }
      ] }
    ],
    recap: [
      { h: '42 站，一個地球', t: '從五千多年前的泥板，到今天的網路和太空，搖搖車去過的 42 站，都在同一個地球上。三條線把它們串起來：記錄與溝通、交流與移動、大家怎麼一起生活。' },
      { h: '全球化', t: '東西、人和消息在全世界之間來來去去。一個布丁、一台平板，用到的東西可能來自好幾個國家，坐船、坐車才到我們手上。' },
      { h: '氣候變遷', t: '人類燒煤、石油、天然氣，放出二氧化碳、甲烷這些溫室氣體，地球比 1800 年代後期平均熱了 1 度多，帶來乾旱、淹水、海水上升、冰融化。' },
      { h: '大家一起約好', t: '2015 年，各國在《巴黎協定》約好，要讓地球升溫少於 2 度、最好不超過 1.5 度。1987 年的《蒙特婁議定書》讓各國少用破壞臭氧層的東西，南極上空的臭氧層可望在 2066 年前後補好。' },
      { h: '寫下來，才算數', t: '第 1 話的布丁，最後真的寫上名字了。世界的事也是自己的事：關燈、搭大眾運輸、不浪費，都是一起約好的一小步。' }
    ],
    map: {
      bounds: { lon: [-125, 150], lat: [-25, 64] },
      cap: '紅點是家（臺灣）。黑點是搖搖車去過的其中幾站，42 站太多，畫不下。海岸線是簡化的畫法。',
      alt: '世界地圖：紅點是臺灣，黑點分別是巴比倫、雅典、長安、庫斯科、柏林、華盛頓等搖搖車去過的地方',
      taiwan: false,
      cities: [
        { n: '家（臺灣）', lat: 23.7, lon: 121, main: 1, side: 'l', dy: 22 },
        { n: '巴比倫', lat: 32.54, lon: 44.42, side: 'r' },
        { n: '雅典', lat: 37.98, lon: 23.73, side: 'l', dy: 14 },
        { n: '柏林', lat: 52.52, lon: 13.4, side: 'l' },
        { n: '長安', lat: 34.27, lon: 108.95, side: 'l' },
        { n: '庫斯科', lat: -13.53, lon: -71.97, side: 'r' },
        { n: '華盛頓', lat: 38.9, lon: -77.04, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：搖搖車從五千多年前，一路開回今天。',
      items: [
        { y: -3200, when: '約西元前 3200 年', t: '第 1 冊：\n泥板上寫字', side: 'u', w: 180 },
        { y: -1750, when: '約西元前 1750 年', t: '寫下來\n才算數！', side: 'd', w: 170 },
        { y: 1455, when: '約 1455 年', t: '印刷機\n讓書變多', side: 'u', w: 130 },
        { y: 2026, when: '今天', t: '回到家\n布丁還在', side: 'd', main: 1, w: 150 }
      ]
    },
    sources: [
      '聯合國〈What is climate change?〉（人類燒煤、石油、天然氣是主因；二氧化碳和甲烷；地表比 1800 年代後期熱了約 1.44 度；乾旱、淹水、海平面上升、極地冰融化）',
      '《聯合國氣候變化綱要公約》UNFCCC〈The Paris Agreement〉（2015 年 12 月在巴黎通過；升溫遠低於 2 度，努力控制在 1.5 度）',
      '聯合國環境規劃署臭氧秘書處〈The Montreal Protocol〉〈Fixing the ozone layer and reducing climate change〉（1987 年簽署、1989 年生效，逐步停用破壞臭氧層的物質；南極上空臭氧層可望在 2066 年前後回到 1980 年的程度）',
      '本系列第 1～7 冊各話的資料來源（42 站的年代、地點）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '科學家說，讓地球變熱的主要原因是什麼？', opts: ['燒煤、石油、天然氣', '月亮離地球越來越近', '太陽每年變大一倍', '大家吃太多布丁'], a: 0, why: '燒煤、石油、天然氣會放出二氧化碳這些溫室氣體，把熱留在地球上。' },
      { id: 'q2', d: 1, type: 'tf', q: '一個布丁或一台平板，用到的東西有可能來自好幾個不同的國家。', a: true, why: '對！這就是全球化：原料、零件、機器可能來自不同國家，坐船、坐車才送到我們手上。' },
      { id: 'q3', d: 2, type: 'match', q: '把三條線和它的例子配成一對。', pairs: [['記錄與溝通', '泥板、字母、印刷、網路'], ['交流與移動', '河、海、航線、太空'], ['大家一起生活', '法律、民主、人權']], why: '42 站被這三條線串起來：怎麼記錄和傳話、怎麼移動和交流、大家怎麼一起訂規則生活。' },
      { id: 'q4', d: 2, type: 'mc', q: '1987 年各國約好少用破壞臭氧層的東西，後來怎麼了？', opts: ['臭氧層正在慢慢補好', '臭氧層一下子全破了', '大家約好以後就忘了', '臭氧層變成了月亮'], a: 0, why: '各國一起做到了。科學家估計，南極上空的臭氧層可望在 2066 年前後補好。約好、一起做，真的有用。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「氣候變遷是很遠的國家的事，跟我一點關係都沒有。」根據這一話，哪個說法最正確？', opts: ['不對，地球只有一個，每個人都能做一點', '對，臺灣離那些國家很遠，不會受影響', '對，只有大人和總統才需要管這件事', '不對，所以我們什麼都做不了，只能擔心'], a: 0, why: '地球只有一個，遠方的事也會影響我們。各國一起約好，每個人也能從關燈、搭大眾運輸、不浪費做起；擔心沒有用，一起做才有用。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
