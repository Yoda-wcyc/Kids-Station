/* 世界史漫畫 第 2 冊 古典世界・第 6 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：羅馬的政治與文化、基督教的起源。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, txt, both, place, prop, groundShadow, seeded } = K;
    // 水道橋：一排拱門，上面是水道（原點＝中間的地面）
    const aqueduct = (W, H, n) => {
      const aw = W / n; let s = '';
      for (let i = 0; i < n; i++) { const x = -W / 2 + i * aw; s += rect(x, -H, aw, H, C.brick3) + path(`M${x + aw * .18} 0 L${x + aw * .18} ${-H * .5} Q${x + aw * .5} ${-H * .8} ${x + aw * .82} ${-H * .5} L${x + aw * .82} 0Z`, C.sky); }
      return s + rect(-W / 2, -H - 14, W, 16, C.brick2) + rect(-W / 2, -H - 6, W, 4, C.blue, 0, 'opacity=".7"') + rect(-W / 2, -H * .62, W, 3, 'rgba(107,74,50,.25)');
    };
    const mile = (t) => groundShadow(0, 2, 26, 5) + both(rect(-20, -110, 40, 110, C.paper3, 6)) + ell(0, -110, 20, 6, C.cream) + txt(0, -76, 'M·P', 14, C.wood) + txt(0, -56, t || 'XII', 16, C.wood);
    root.ComicArt.extend({
      scenes: {
        // 羅馬城：山丘上的神殿、跨過去的水道橋、大路
        v2e6_rome(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .84, h * .1, 200, 'url(#cm-sun)') + circ(w * .84, h * .1, 44, '#FFF8DC');
          s += path(`M0 ${h * .42} Q${w * .25} ${h * .32} ${w * .5} ${h * .4} T${w} ${h * .36} L${w} ${h * .5} L0 ${h * .5}Z`, C.g3);
          s += prop({ k: 'temple', x: w * .3, y: h * .37, W: 260, H: 160, f: 'cream' }) + prop({ k: 'dome', x: w * .7, y: h * .39, W: 160, H: 150, f: 'cream', domeC: 'paper3' });
          s += rect(0, h * .48, w, h * .52, C.brick3);
          s += `<g transform="translate(${w * .5} ${h * .62})">` + aqueduct(w + 80, h * .14, 8) + '</g>';
          s += prop({ k: 'road', old: 1, x: w * .5, y: h, W: 520, w2: 40, L: h * .36, f: 'basalt3', dash: 'paper3' });
          s += path(`M0 ${h * .9} Q${w * .5} ${h * .85} ${w} ${h * .9} L${w} ${h} L0 ${h}Z`, C.brick);
          return { bg: s };
        },
        // 路的剖面：大石頭、碎石、沙、石板，兩邊有路緣和排水溝
        v2e6_layers(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const x0 = 40, x1 = w - 40, top = h * .52, rnd = seeded(3);
          s += rect(0, top - 10, w, h, C.clay2) + rect(x0, top, x1 - x0, 46, C.basalt3) + rect(x0, top + 46, x1 - x0, 50, C.sand) + rect(x0, top + 96, x1 - x0, 60, C.brick2) + rect(x0, top + 156, x1 - x0, 90, C.clay);
          for (let x = x0 + 4; x < x1 - 30; x += 44) s += poly(`${x},${top + 2} ${x + 40},${top + 2} ${x + 36},${top + 42} ${x + 4},${top + 42}`, C.basalt2);
          for (let i = 0; i < 40; i++) s += circ(x0 + rnd() * (x1 - x0), top + 100 + rnd() * 52, 3 + rnd() * 5, C.clay2);
          for (let i = 0; i < 9; i++) s += circ(x0 + 20 + i * ((x1 - x0 - 40) / 8), top + 200, 18 + rnd() * 10, C.brick3);
          s += rect(x0 - 26, top - 30, 26, 76, C.paper3, 3) + rect(x1, top - 30, 26, 76, C.paper3, 3) + rect(0, top - 6, x0 - 26, 30, C.blue, 3) + rect(x1 + 26, top - 6, w - x1 - 26, 30, C.blue, 3);
          [['石板', top + 30, C.cream], ['沙', top + 78, C.wood], ['碎石', top + 132, C.cream], ['大石頭', top + 214, C.ink]].forEach(([t, y, c]) => { s += txt(w / 2, y, t, 22, c); });
          s += txt(x0 - 14, top - 40, '排水溝', 16, C.blue, { a: 'start' });
          return { bg: s };
        },
        // 城裡的大路：里程碑、刻著拉丁字母的拱門
        v2e6_forum(w, h) {
          let s = rect(0, 0, w, h, C.sky) + rect(0, h * .5, w, h * .5, C.paper3);
          s += prop({ k: 'temple', x: w * .18, y: h * .5, W: 300, H: 200, f: 'cream' }) + prop({ k: 'house', x: w * .84, y: h * .5, W: 200, H: 160, roof: 'tile', roofC: 'clay2', f: 'brick3' });
          const ax = w * .52, ay = h * .5;
          s += both(rect(ax - 130, ay - 300, 260, 300, C.cream)) + path(`M${ax - 70} ${ay} L${ax - 70} ${ay - 130} Q${ax} ${ay - 220} ${ax + 70} ${ay - 130} L${ax + 70} ${ay}Z`, C.g3) + rect(ax - 140, ay - 320, 280, 30, C.paper3);
          s += txt(ax, ay - 250, 'SENATVS', 28, C.wood, { ls: 2 }) + txt(ax, ay - 218, 'POPVLVSQVE', 24, C.wood, { ls: 1 });
          s += prop({ k: 'road', old: 1, x: w * .5, y: h, W: 700, w2: 220, L: h * .5, f: 'basalt3', dash: 'paper3' });
          return { bg: s };
        }
      },
      props: {
        v2e6_aqueduct: x => place(x, aqueduct(x.W || 400, x.H || 160, x.n || 4)),
        v2e6_mile: x => place(x, mile(x.t)),
        v2e6_fountain: x => place(x, groundShadow(0, 3, 70, 8) + rect(-70, -40, 140, 40, C.paper3, 6) + rect(-60, -36, 120, 10, C.blue) + rect(-14, -110, 28, 74, C.cream, 4) + path('M10 -96 Q40 -90 44 -40', 'none', `stroke="${C.blue}" stroke-width="7"`)),
        v2e6_bread: x => place(x, ell(0, -10, 40, 12, C.wood) + ell(-14, -18, 18, 12, '#C99A45') + ell(14, -18, 18, 12, '#C99A45'))
      },
      icons: {
        v2e6_split() { return rect(0, 0, 120, 90, C.g5) + path('M8 30 Q30 20 54 34 L54 70 Q30 64 8 72Z', C.brick3) + path('M66 34 Q90 20 112 30 L112 72 Q90 64 66 70Z', C.clay3) + txt(31, 56, '西', 20, C.wood) + txt(89, 56, '東', 20, C.wood) + rect(58, 14, 4, 66, C.cream, 2); },
        v2e6_free() { return rect(0, 0, 120, 90, C.paper) + [30, 60, 90].map((x, i) => circ(x, 36, 12, [C.skin, C.skinB, C.skinC][i]) + path(`M${x - 18} 90 Q${x - 18} 52 ${x} 52 Q${x + 18} 52 ${x + 18} 90Z`, [C.blue, C.g5, C.clay2][i])).join('') + circ(98, 16, 8, C.gold); }
      },
      cast: {
        v2e6_julia: { name: '茱莉亞（虛構）', skin: 'skin', top: 'red', skirt: 'cream', leg: 'skin', shoe: 'wood', hair: 'long', hairC: 'wood', r: 22, k: .93 },
        v2e6_worker: { name: '修路工', skin: 'skinB', top: 'clay3', skirt: 'wood', hair: 'short', beard: 1, r: 19, k: 1.12 },
        v2e6_water: { name: '提水的人', skin: 'skin', top: 'g5', skirt: 'paper3', hair: 'curly', r: 19, k: 1.08 },
        v2e6_neighbor: { name: '鄰居阿姨', skin: 'skinB', robe: 'blue', trim: 'cream', hair: 'bun', r: 19, k: 1.06 },
        v2e6_elder: { name: '鄰居爺爺', skin: 'skin', robe: 'paper3', trim: 'wood', hair: 'short', hairC: 'paper3', beard: 1, r: 19, k: 1.1 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v2e6 = {
    id: 'v2e6', vol: '第 2 冊 古典世界', volNo: 2, ep: 6, title: '條條大路通羅馬', next: '長安城的外國朋友',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！這次阿凱看地圖，一下就騎到外婆家了。',
    note: '阿凱、小禾、茱莉亞、修路工、提水的人和兩位鄰居都是虛構的角色。羅馬城、水道橋、拱門和家裡聚會的樣子都是想像圖；拱門上的字「SENATVS POPVLVSQVE」是「元老院和羅馬人民」的意思，是羅馬常見的寫法。這一話只說當時的人相信什麼、做了什麼，不評價任何信仰。羅馬的路一共有多長，各家估計差很多。',
    curriculum: '國中社會會再學到：羅馬的政治與文化、基督教的起源',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'g5' },
      back: [
        { k: 'v2e6_aqueduct', x: 560, y: 900, W: 420, H: 220, n: 3 },
        { k: 'v2e6_mile', x: 110, y: 930, s: 2 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'land', sceneOpt: { sun: [.86, .2], hz: .42, far: 'g3', ground: 'g5', river: { y: .44, h: .16, tilt: .02, c: 'blue' } }, shot: '中景：河濱自行車道，阿凱拿著手機亂指路，小禾叉腰',
          back: [{ k: 'tree', x: 740, y: 250, H: 160 }],
          actors: [
            { c: 'kai', x: 230, y: 330, s: 1, pose: 'hold', expr: 'grin', hold: 'phone', look: .4 },
            { c: 'he', x: 600, y: 332, s: 1.05, pose: 'fists', expr: 'mad', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '條條大路通羅馬！\n隨便騎就到了！', x: 30, y: 20, w: 262, tail: [222, 136] },
            { t: '我們要去外婆家，\n不是去羅馬！', x: 456, y: 30, w: 262, tail: [600, 150] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g3', ground: 'g5' }, shot: '大格：河濱的橋下，阿凱坐在石頭上發呆，搖搖車開口說話',
          back: [
            { k: 'tower', x: 430, y: 343, W: 90, H: 260, f: 'paper3' },
            { k: 'wall', x: 262, y: 120, W: 600, H: 60, f: 'paper3', f2: 'basalt3', crenel: false },
            { k: 'car', x: 160, y: 640, s: .9 }
          ],
          actors: [
            { c: 'kai', x: 380, y: 660, s: 1.2, pose: 'think', expr: 'worry', flip: 1, look: .4, sweat: 1 }
          ],
          bubbles: [
            { t: '羅馬到底\n在哪裡啦？', x: 300, y: 296, w: 210, fs: 24, tail: [380, 420] },
            { t: '嗶——投 10 元，\n帶你去看\n大路的起點。', x: 16, y: 230, w: 250, kind: 'car', fs: 24, tail: [140, 500] }
          ],
          sfx: [{ t: '叮！', x: 30, y: 460, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '120', era: '西元' }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 120',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '這次不是西元前！\n西元 120！', x: 14, y: 436, w: 214, fs: 22, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e6_rome', shot: '滿版遠景：羅馬城，水道橋橫過去，大路一直通到城裡',
          back: [{ k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 1900 年前，羅馬', en: 'ROME · c. AD 120', x: 0, y: 18 },
            { t: '羅馬在今天的義大利。那時的羅馬帝國很大，把整個地中海圍在中間。', x: 0, y: 112, w: 400, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：羅馬。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '那座橋上\n怎麼沒有路？', x: 348, y: 672, w: 196, tail: [460, 760] },
            { t: '那是運水的\n水道橋！', x: 566, y: 700, w: 200, tail: [618, 800], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g3', ground: 'brick3' }, shot: '中景：修路的工地，阿凱拿起鏟子亂挖，茱莉亞大叫',
          back: [
            { k: 'bricks', x: 560, y: 300, n: 3, m: 2, f: 'basalt3' },
            { k: 'sack', x: 470, y: 320 }
          ],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 230, y: 430, s: 1.05, pose: 'push', expr: 'grin', hold: 'staff', look: .4 },
            { c: 'v2e6_julia', x: 690, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '挖洞我最會了！\n我來幫忙！', x: 80, y: 40, w: 240, tail: [214, 236] },
            { t: '停！！路要\n一層一層鋪！', x: 420, y: 26, w: 300, kind: 'shout', fs: 25, tail: [670, 238] }
          ],
          sfx: [{ t: '沙沙沙', x: 330, y: 300, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：修路工的女兒茱莉亞介紹自己',
          actors: [{ c: 'v2e6_julia', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'happy', look: -.2 }],
          bubbles: [{ t: '我是修路工的\n女兒茱莉亞。\n我們的路超耐用！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '修路工的女兒：茱莉亞（虛構）', left: 8 } },
        { scene: 'v2e6_layers', shot: '剖面圖：羅馬大路一層一層的樣子',
          caption: [{ t: '羅馬的路，一層一層鋪', en: 'ROMAN ROAD', x: 0, y: 16, w: 300 }],
          bubbles: [
            { t: '兩邊還有\n排水溝！', x: 14, y: 96, w: 190, fs: 24 },
            { t: '每一羅馬里，\n還有一根里程碑！', x: 214, y: 96, w: 236, fs: 22 }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e6_forum', shot: '滿版：城裡的大路，拱門上刻著拉丁字母，路邊立著里程碑',
          back: [{ k: 'v2e6_mile', x: 660, y: 640, s: 1.3, t: 'I' }],
          actors: [
            { c: 'v2e6_worker', x: 560, y: 640, s: 1, pose: 'point', expr: 'calm', flip: 1, look: .4 },
            { c: 'v2e6_julia', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'lookup', expr: 'awe', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '羅馬人用的字母，叫拉丁字母。', x: 16, y: 16, w: 470 },
            { t: '第 1 冊的腓尼基字母 → 希臘字母 → 拉丁字母 → 今天的 ABC。', x: 16, y: 72, w: 420, dark: false }
          ],
          bubbles: [
            { t: '光是義大利，\n就有大約 30 條大路\n連到羅馬城！', x: 490, y: 270, w: 276, fs: 23, tail: [556, 415] },
            { t: '大路從這裡\n通到帝國各地。', x: 14, y: 660, w: 220, fs: 24, tail: [140, 790] },
            { t: '那些字，\n我看得懂一半！', x: 250, y: 680, w: 210, fs: 24, tail: [440, 772] },
            { t: '是 ABC 的\n老祖先！', x: 560, y: 680, w: 190, fs: 24, tail: [650, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .7 }, shot: '細長格：晚上，鄰居在家裡聚會，一起分食物',
          back: [{ k: 'table', x: 172, y: 760, W: 240 }, { k: 'amphora', x: 300, y: 770, s: .9 }],
          props: [{ k: 'v2e6_bread', x: 160, y: 686 }],
          actors: [
            { c: 'v2e6_neighbor', x: 90, y: 1000, s: 1.2, pose: 'offer', expr: 'happy', look: .4 },
            { c: 'v2e6_elder', x: 260, y: 1000, s: 1.15, pose: 'stand', expr: 'calm', flip: 1, look: .4 }
          ],
          caption: [
            { t: '有一群人相信\n耶穌的教導，\n常常在家裡聚會。', x: 0, y: 14, w: 300 },
            { t: '那時候這是很新的信仰，有些皇帝會禁止、處罰他們。', x: 0, y: 150, w: 330, dark: false }
          ],
          bubbles: [{ t: '我們一起聚會、\n一起分享食物。', x: 30, y: 400, w: 280, fs: 24, tail: [100, 740] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：羅馬帝國後來的變化',
          caption: [{ t: '後來的羅馬帝國', x: 0, y: 16 }],
          cards: [
            { icon: 'v2e6_free', y: 80, t: '西元 313 年：君士坦丁\n皇帝讓基督徒\n可以自由信仰。' },
            { icon: 'people', y: 344, t: '西元 380 年：基督教\n成為羅馬帝國的國教。' },
            { icon: 'v2e6_split', y: 610, t: '帝國分成東西兩半；\n西羅馬在 476 年結束，\n東羅馬又延續很久。' }
          ],
          bubbles: [{ t: '路通到哪裡，\n新的想法也跟著走到哪裡。', x: 24, y: 896, w: 370, fs: 23 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .7, far: 'g3', ground: 'paper3' }, shot: '矮寬格：城裡的噴水池，水道送來的水流個不停',
          back: [{ k: 'v2e6_aqueduct', x: 600, y: 280, W: 360, H: 140, n: 3 }],
          props: [{ k: 'v2e6_fountain', x: 420, y: 392, s: 1.1 }],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v2e6_water', x: 640, y: 394, s: 1, pose: 'carry', expr: 'happy', hold: 'cup', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '山上的水，順著水道\n一路流進城裡！', x: 300, y: 14, w: 330, fs: 24, tail: [630, 190] }
          ],
          caption: [{ t: '羅馬城後來一共有 11 條水道。', x: 0, y: 14, w: 280, dark: false }] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的大路旁，茱莉亞送一塊鋪路石',
          back: [
            { k: 'v2e6_mile', x: 560, y: 380, s: 1.1 },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          props: [{ k: 'bricks', x: 176, y: 440, n: 1, m: 1, f: 'basalt3', s: .8 }],
          actors: [
            { c: 'v2e6_julia', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '鋪路石送你！\n記得看路標喔！', x: 14, y: 176, w: 210, fs: 22, tail: [110, 300] },
            { t: '原來路連起來，\n哪裡都到得了！', x: 232, y: 176, w: 196, fs: 22, tail: [284, 326] },
            { t: '東西和想法，\n也跟著路走。', x: 438, y: 210, w: 176, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一冊，\n唐朝長安！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：長安城的外國朋友', x: 270, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '從共和到帝國', t: '羅馬在今天的義大利。西元前 509 年，羅馬不再有國王，變成共和；西元前 27 年，奧古斯都成為第一個皇帝。大約西元 117 年，帝國變得最大，把地中海圍在中間。' },
      { h: '大路和里程碑', t: '羅馬人的路一層一層鋪：大石頭、碎石、沙，城裡和重要的地方再鋪石板，兩邊有排水溝。每一羅馬里有一根里程碑，光是義大利就有大約 30 條大路連到羅馬城。' },
      { h: '水道橋', t: '羅馬人蓋水道，把遠方的水一路送進城。最早的水道大約在西元前 312 年，羅馬城後來一共有 11 條。' },
      { h: '拉丁字母', t: '羅馬人用的拉丁字母，是從希臘字母變來的；希臘字母又來自第 1 冊的腓尼基字母。今天的 ABC 就是拉丁字母。' },
      { h: '基督教興起與帝國分裂', t: '耶穌的追隨者把他的教導傳到帝國各地，一開始常被禁止。西元 313 年基督徒可以自由信仰，380 年基督教成為國教。帝國後來分成東西兩半，西羅馬在 476 年結束。' }
    ],
    map: {
      bounds: { lon: [-10, 45], lat: [28, 56] },
      cap: '紅點是羅馬。羅馬帝國最大的時候，地中海四周都是它的土地；第 2 冊去過的雅典、亞歷山卓，那時都在帝國裡。（河道、海岸是今天的樣子，簡化畫法。）',
      alt: '羅馬帝國地圖：羅馬（紅點）在義大利，四周是地中海，東邊有雅典、亞歷山卓，北邊有萊茵河和多瑙河',
      rivers: ['tiber', 'rhine', 'danube', 'nile'],
      labels: [
        { t: '地中海', lat: 34.6, lon: 18.0, size: 24, f: 'cream' },
        { t: '黑海', lat: 43.4, lon: 34.4, size: 20, f: 'cream' },
        { t: '大西洋', lat: 45.0, lon: -7.0, size: 20, f: 'cream' },
        { t: '萊茵河', lat: 51.6, lon: 9.0, size: 18, f: 'g7' },
        { t: '多瑙河', lat: 46.0, lon: 22.0, size: 18, f: 'g7' }
      ],
      cities: [
        { n: '羅馬', lat: 41.9, lon: 12.5, main: 1, side: 'l' },
        { n: '雅典', lat: 37.98, lon: 23.73, side: 'r' },
        { n: '亞歷山卓', lat: 31.2, lon: 29.92, side: 'r' },
        { n: '迦太基', lat: 36.85, lon: 10.32, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從羅馬共和開始到西羅馬帝國結束，將近一千年。第 2 冊「古典世界」就走到這裡。',
      items: [
        { y: -509, when: '西元前 509 年', t: '羅馬變成\n共和', side: 'u', w: 170 },
        { y: -27, when: '西元前 27 年', t: '奧古斯都成為\n第一個皇帝', side: 'd', w: 180 },
        { y: 120, when: '約西元 120 年', t: '大路和水道\n通到各地', side: 'u', main: 1, w: 180 },
        { y: 313, when: '西元 313 年', t: '基督徒可以\n自由信仰', side: 'd', w: 170 },
        { y: 476, when: '西元 476 年', t: '西羅馬帝國\n結束', side: 'u', w: 170 }
      ]
    },
    sources: [
      'History.com〈Ancient Rome〉（西元前 509 年成為共和；西元前 27 年奧古斯都成為第一個皇帝；圖拉真時（98～117 年）帝國最大；哈德良 117～138 年；476 年西羅馬最後一個皇帝被廢）、〈8 Reasons Why Rome Fell〉（帝國分成東西兩半，476 年西羅馬結束，東羅馬又延續約一千年）',
      '國家地理〈200,000 miles of Roman roads provided framework for empire〉（路一層一層鋪、兩邊有排水溝；每一羅馬里一根里程碑；義大利大約 30 條路連到羅馬城；阿庇亞大道西元前 312 年開工）、〈How the Romans became the greatest builders in the ancient world〉（二世紀初羅馬的路約 20 萬英里、鋪石的超過 5 萬英里）',
      'History.com〈10 Innovations That Built Ancient Rome〉（最早的水道約西元前 312 年；羅馬城一共有 11 條水道）',
      'History.com〈Christianity〉（耶穌約西元 30～33 年被釘十字架；西元 64 年、303 年的迫害；313 年米蘭敕令；380 年狄奧多西一世定為國教）；PBS〈The Roman Empire in the First Century: Early Christians〉（保羅把教導傳到各城市、羅馬的交通讓傳播變容易、早期信徒被懷疑，尼祿時曾被迫害）；國家地理〈Who was Constantine?〉（君士坦丁以前，基督徒是被迫害、只能私下聚會的少數；米蘭敕令保障信仰自由）',
      '賓州大學博物館 Expedition〈The Alphabet〉（腓尼基人把字母教給希臘人；今天英文用的拉丁字母是從希臘字母發展來的）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '羅馬人蓋的「水道橋」，主要是拿來做什麼的？', opts: ['把水送進城裡', '讓馬車走過去', '給士兵站崗用', '擋住外面的敵人'], a: 0, why: '水道橋上面是水道，把遠方的水一路送進羅馬城，城裡的噴水池才有水。' },
      { id: 'q2', d: 1, type: 'tf', q: '今天我們用的 ABC，就是從羅馬人的拉丁字母來的。', a: true, why: '對！腓尼基字母傳給希臘人，希臘字母又變成羅馬人的拉丁字母，就是今天的 ABC。' },
      { id: 'q3', d: 2, type: 'mc', q: '羅馬人修的大路，為什麼可以用很久？', opts: ['一層一層鋪，還有排水溝', '路面全部用一塊塊黃金鋪成', '路上不准任何人走', '每天都重新蓋一次'], a: 0, why: '他們先挖到硬地，再一層一層鋪大石頭、碎石、沙和石板，兩邊還有排水溝，路就不容易壞。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['羅馬變成共和', '奧古斯都成為第一個皇帝', '基督徒可以自由信仰', '西羅馬帝國結束'], why: '西元前 509 年共和；西元前 27 年奧古斯都；西元 313 年基督徒可以自由信仰；476 年西羅馬帝國結束。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「羅馬的路只有軍隊在用，跟一般人沒有關係。」根據這一話，哪個說法最正確？', opts: ['不對，商人、貨物和新的想法都靠路傳開', '對，羅馬的路只准士兵走，別人不能用', '對，羅馬人都住在城裡，從來不出遠門', '不對，羅馬的路是專門給皇帝一個人散步的'], a: 0, why: '大路讓軍隊、商人、貨物都走得快，耶穌的教導也沿著這些路，一個城一個城傳開。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
