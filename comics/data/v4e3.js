/* 世界史漫畫 第 4 冊 大航海與文藝復興・第 3 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：新航路與美洲（印加文明是延伸）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, both, place, cap } = K;
    const CORD = [C.red, C.gold, C.cream, C.g7, C.wood, C.blue];
    // 奇普：主繩＋垂下的細繩，結的位置不同（只是樣子，不是真的數字）
    const khipu = (W, L, n, seed) => {
      const rnd = K.seeded(seed || 3); let s = cap(-W / 2, 0, W / 2, 0, 8, C.wood);
      for (let i = 0; i < n; i++) {
        const x = -W / 2 + 10 + i * (W - 20) / (n - 1), len = L * (.75 + rnd() * .25), f = CORD[i % CORD.length];
        s += cap(x, 2, x + (rnd() - .5) * 8, len, 4, f);
        [.22, .5, .8].forEach((t, j) => { const k = Math.floor(rnd() * 4); for (let m = 0; m < k; m++) s += ell(x, len * t + m * 7 - 6 + j, 5, 3.6, C.ink, 'opacity=".75"'); });
      }
      return s;
    };
    root.ComicArt.extend({
      scenes: {
        // 安地斯山：雪山、一層一層的梯田、石頭路
        v4e3_andes(w, h, o) {
          o = o || {};
          let s = rect(0, 0, w, h, o.sky ? K.col(o.sky) : '#C9DCD6');
          if (o.sun !== false) s += circ(w * .82, h * .12, Math.min(w, h) * .28, 'url(#cm-sun)') + circ(w * .82, h * .12, 34, '#FFF8DC');
          s += K.prop({ k: 'mountain', x: w * .24, y: h * .46, W: w * .7, H: h * .34, f: 'g3', f2: 'g5', snow: 1 }) + K.prop({ k: 'mountain', x: w * .72, y: h * .46, W: w * .8, H: h * .4, f: 'g5', f2: 'g7', snow: 1 });
          s += rect(0, h * .46, w, h * .54, C.g5);
          for (let i = 0; i < 9; i++) { const y = h * .46 + i * h * .045; s += path(`M0 ${y + 10} Q${w * .4} ${y - 6} ${w * .7} ${y + 6} T${w} ${y} L${w} ${y + 10} Q${w * .5} ${y + 14} 0 ${y + 18}Z`, i % 2 ? C.g6 : C.g3) + rect(0, y + 16, w, 3, C.basalt3, 0, 'opacity=".45"'); }
          if (o.road !== false) { const pts = [[w * .9, h * .48], [w * .62, h * .56], [w * .8, h * .64], [w * .4, h * .74], [w * .55, h * .84], [w * .2, h * 1.02]]; for (let i = 0; i < pts.length - 1; i++) s += cap(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 18 + i * 8, C.paper3); }
          if (o.near !== false) s += path(`M0 ${h * .88} Q${w * .5} ${h * .82} ${w} ${h * .88} L${w} ${h} L0 ${h}Z`, C.clay3);
          return { bg: s };
        },
        // 梯田特寫（細長格）
        v4e3_terrace(w, h) {
          let s = rect(0, 0, w, h, '#C9DCD6') + K.prop({ k: 'mountain', x: w * .6, y: h * .3, W: w * 1.6, H: h * .24, f: 'g3', f2: 'g5', snow: 1 });
          for (let i = 0; i < 12; i++) { const y = h * .3 + i * h * .055, hw = 20 + i * 12; s += rect(0, y, w, h * .055, i % 2 ? C.g5 : C.g6) + rect(0, y + h * .05, w, h * .012, C.basalt3); for (let x = (i % 2) * 20; x < w; x += 40) s += rect(x, y + h * .052, 30, h * .008, C.paper3, 1); if (i % 3 === 0) for (let x = 10 + hw % 30; x < w; x += 46) s += rect(x, y + 6, 6, h * .03, C.gold); }
          return { bg: s + rect(0, h * .9, w, h * .1, C.clay3) };
        }
      },
      props: {
        // 羊駝（朝右）：原點＝腳底中央，s≈1 時高約 180
        v4e3_llama: x => {
          const f = col(x.f) || C.cream, f2 = C.paper3;
          let s = K.groundShadow(0, 3, 52, 6);
          [[-30, -60, -32], [-18, -60, -14], [24, -60, 26], [36, -60, 40]].forEach(([a, b, c], i) => { s += cap(a, b, c, -4, 9, i % 2 ? f : f2) + rect(c - 5, -6, 10, 6, C.ink, 2); });
          s += ell(0, -78, 52, 26, f) + path('M28 -86 L38 -158 L58 -158 L52 -80Z', f) + ell(56, -164, 22, 12, f) + path('M40 -172 L44 -192 L50 -172Z', f) + path('M52 -172 L58 -190 L62 -170Z', f) + circ(60, -166, 2.6, C.ink);
          if (x.load) s += rect(-30, -112, 56, 20, col(x.load), 5) + rect(-20, -96, 36, 12, C.red, 3);
          return place(x, s);
        },
        v4e3_khipu: x => place(x, khipu(x.W || 300, x.L || 220, x.n || 12, x.seed)),
        // 倉庫（圓形石屋＋茅草頂）
        v4e3_qollqa: x => place(x, K.groundShadow(0, 3, 60, 6) + both(rect(-50, -90, 100, 90, C.basalt3, 6)) + path('M-60 -86 Q-50 -150 0 -154 Q50 -150 60 -86Z', C.gold) + path('M-14 0 L-14 -40 Q0 -50 14 -40 L14 0Z', C.ink) + [0, 1, 2].map(i => rect(-48, -80 + i * 22, 96, 3, 'rgba(21,23,20,.18)')).join(''))
      },
      holds: {
        v4e3_khipuH: () => khipu(60, 46, 6, 9),
        v4e3_braceH: () => cap(-20, -6, 20, -6, 4, C.red) + [-12, -2, 8].map(x => circ(x, -6, 4.6, C.red) + circ(x, -6, 2, C.ink, 'opacity=".4"')).join('')
      },
      icons: {
        v4e3_storeI() { return rect(0, 0, 120, 90, C.g3) + rect(0, 66, 120, 24, C.g5) + [26, 60, 94].map(x => rect(x - 14, 40, 28, 30, C.basalt3, 3) + path(`M${x - 18} 42 Q${x} 18 ${x + 18} 42Z`, C.gold)).join(''); },
        v4e3_khipuI() { return rect(0, 0, 120, 90, C.paper) + `<g transform="translate(60 14)">` + khipu(96, 66, 8, 5) + `</g>`; }
      },
      cast: {
        v4e3_kusi: { name: '庫希（虛構）', skin: 'skinB', top: 'red', skirt: 'g9', leg: 'skinB', shoe: 'wood', hair: 'long', hat: 'band', hatC: 'gold', r: 22, k: .93 },
        v4e3_runner: { name: '接力跑者', skin: 'skinB', top: 'cream', skirt: 'g7', leg: 'skinB', shoe: 'wood', hair: 'short', hat: 'band', hatC: 'red', r: 19, k: 1.1 },
        v4e3_runner2: { name: '接力跑者', skin: 'skinC', top: 'gold', skirt: 'wood', leg: 'skinC', shoe: 'wood', hair: 'short', hat: 'band', hatC: 'g7', r: 19, k: 1.1 },
        v4e3_dad: { name: '記帳官（虛構）', skin: 'skinB', robe: 'clay2', trim: 'red', hair: 'short', hat: 'band', hatC: 'gold', r: 19, k: 1.16 }
      }
    });
    function col(v) { return K.col(v); }
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v4e3 = {
    id: 'v4e3', vol: '第 4 冊 大航海與文藝復興', volNo: 4, ep: 3, title: '會說話的繩結', next: '往西航行到哪裡？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！小禾在手環上幫你打了五個結。',
    note: '阿凱、小禾、庫希、記帳官和跑者是虛構的角色。印加的道路、梯田、倉庫和奇普的樣子都是想像圖；圖上的繩結只是樣子，不是真的數字。奇普除了數字還記了什麼（例如顏色代表什麼），學者還在研究。印加道路的總長度，各家估計從三萬多到四萬公里都有；跑者一天能送多遠也是估計。',
    curriculum: '國中社會會再學到：新航路與美洲（印加文明是延伸）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'g3' },
      back: [
        { k: 'mountain', x: 120, y: 880, W: 300, H: 200, f: 'g3', f2: 'g5', snow: 1 },
        { k: 'v4e3_llama', x: 670, y: 960, s: 1.3, load: 'gold' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'land', sceneOpt: { sun: [.9, .2], hz: .62, far: 'g3', ground: 'g3', near: 'g5' }, shot: '中景：公園跑步，小禾在手環上打結記圈數',
          back: [{ k: 'tree', x: 40, y: 220, H: 190 }, { k: 'tree', x: 560, y: 214, H: 160 }, { k: 'tree', x: 760, y: 220, H: 200 }],
          actors: [
            { c: 'kai', x: 250, y: 330, s: 1, pose: 'run', expr: 'worry', look: .4, sweat: 2 },
            { c: 'he', x: 640, y: 334, s: 1.05, pose: 'hold', expr: 'smug', hold: 'v4e3_braceH', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '我跑第幾圈了？\n五圈？六圈？', x: 16, y: 12, w: 236, tail: [250, 130] },
            { t: '我有打結。\n你才跑四圈。', x: 500, y: 22, w: 210, tail: [640, 140] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .45, far: 'g3', ground: 'g3', near: 'g5' }, shot: '大格：公園步道邊的搖搖車，阿凱跑過去投幣',
          back: [{ k: 'tree', x: 420, y: 320, H: 260 }, { k: 'tree', x: 80, y: 300, H: 180 }, { k: 'car', x: 118, y: 628, s: .78 }],
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'yell', flip: 1, look: .7, sweat: 1 }
          ],
          bubbles: [
            { t: '打結又不是數字！\n我去搖一下！', x: 18, y: 320, w: 230, fs: 22, tail: [206, 430] },
            { t: '陳以凱！！\n還有一圈！', x: 300, y: 300, w: 210, kind: 'shout', tail: [420, 400], fs: 25 }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '1470', era: '西元' }, shot: '小格特寫：數字盤倒轉，停在西元 1470',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '又倒轉了！\n西元 1470！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e3_andes', shot: '滿版遠景：雪山下，山坡被切成一層一層的梯田，石頭路彎彎曲曲',
          back: [
            { k: 'v4e3_qollqa', x: 120, y: 640, s: .7 },
            { k: 'v4e3_qollqa', x: 210, y: 630, s: .6 },
            { k: 'v4e3_llama', x: 640, y: 690, s: .6, load: 'gold' },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'worry', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 550 年前，印加帝國（今天的祕魯一帶）', en: 'INCA EMPIRE · c.1470', x: 0, y: 18 },
            { t: '安地斯山脈：很高很高的山。帝國的中心是庫斯科。', x: 0, y: 112, w: 420, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：印加帝國。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好喘……\n空氣好稀！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '山坡被切成\n一層一層的！', x: 570, y: 700, w: 196, tail: [624, 792], fs: 24 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v4e3_andes', sceneOpt: { sun: false, road: false, near: false }, shot: '中景：山路上，阿凱想騎羊駝，被庫希大叫阻止',
          back: [{ k: 'v4e3_llama', x: 380, y: 440, s: 1.25, load: 'gold' }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 230, y: 430, s: 1.05, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v4e3_kusi', x: 640, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '借我騎一下！\n我走不動了！', x: 110, y: 40, w: 230, tail: [234, 236] },
            { t: '不行！！牠是\n載東西的，不是給人騎的！', x: 380, y: 26, w: 340, kind: 'shout', fs: 24, tail: [630, 238] }
          ],
          sfx: [{ t: '噗！', x: 470, y: 200, fs: 46, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：庫希叉腰解釋',
          actors: [{ c: 'v4e3_kusi', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '我爸爸是\n記帳官。\n我們用繩子\n記帳！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '記帳官的女兒：庫希（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '特寫：奇普，主繩上掛著好多條打了結的細繩',
          back: [{ k: 'v4e3_khipu', x: 232, y: 120, W: 360, L: 220, n: 13 }],
          actors: [
            { c: 'kai', x: 110, y: 640, s: 1.05, pose: 'think', expr: 'think', look: .3, bust: 1 },
            { c: 'he', x: 350, y: 650, s: 1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .5, bust: 1 }
          ],
          caption: [{ t: '奇普（結繩）', en: 'KHIPU', x: 0, y: 14, w: 200 }],
          bubbles: [
            { t: '結離主繩越近，\n數字越大！', x: 220, y: 356, w: 236, fs: 22, tail: [340, 450] },
            { t: '像個位、十位、\n百位？', x: 10, y: 356, w: 200, fs: 22, tail: [110, 430] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v4e3_andes', sceneOpt: { sun: [.86, .08] }, shot: '滿版：山路上的小站，跑者把奇普交給下一個跑者',
          back: [
            { k: 'mudHouse', x: 610, y: 600, W: 200, H: 110, f: 'basalt3', f2: 'basalt2' }
          ],
          actors: [
            { c: 'v4e3_runner', x: 250, y: 650, s: .95, pose: 'offer', expr: 'worry', hold: 'v4e3_khipuH', sweat: 2, look: .5 },
            { c: 'v4e3_runner2', x: 420, y: 660, s: .95, pose: 'run', expr: 'grin', look: .4 },
            { c: 'v4e3_kusi', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '印加的道路連起整個帝國，\n加起來有好幾萬公里。', x: 16, y: 16, w: 420 },
            { t: '跑者一站接一站，把消息和奇普接力送到很遠的地方。', x: 16, y: 128, w: 420, dark: false }
          ],
          bubbles: [
            { t: '庫斯科來的消息，\n交給你了！', x: 40, y: 360, w: 236, fs: 24, tail: [240, 470] },
            { t: '收到！', x: 470, y: 380, w: 130, fs: 25, tail: [440, 480] },
            { t: '還有用草編的\n吊橋，可以過山谷！', x: 14, y: 636, w: 246, fs: 22, tail: [140, 790] },
            { t: '跟第 1 冊波斯的\n驛站一樣！', x: 270, y: 660, w: 236, fs: 23, tail: [440, 772] },
            { t: '不用文字，\n也能傳消息！', x: 560, y: 616, w: 196, fs: 23, tail: [646, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v4e3_terrace', shot: '細長大格：一層一層的梯田，小禾抬頭看',
          actors: [{ c: 'he', x: 110, y: 1034, s: 1.7, pose: 'lookup', expr: 'awe', look: .5 }],
          caption: [{ t: '梯田：把陡陡的山坡\n做成一層一層的平地，\n才能種東西。', x: 0, y: 14, w: 320 }],
          bubbles: [{ t: '一階一階，\n像樓梯一樣！', x: 130, y: 640, w: 200, fs: 24, tail: [130, 700] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：倉庫、用工作繳稅、奇普',
          caption: [{ t: '大帝國，怎麼管？', x: 0, y: 16 }],
          cards: [
            { icon: 'v4e3_storeI', y: 80, t: '梯田種玉米，高山上種馬鈴薯，\n收成存進山坡上\n一排一排的倉庫。' },
            { icon: 'people', y: 344, t: '大約一千萬人，說三十多種話。\n大家用「工作」來繳稅：\n修路、種田、蓋房子。' },
            { icon: 'v4e3_khipuI', y: 610, t: '沒有文字，卻有奇普：\n記人數、記收成、記帳。\n很多細節學者還在研究。' }
          ],
          bubbles: [{ t: '記錄不一定\n要用字！', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v4e3_andes', sceneOpt: { sun: false, road: false }, shot: '矮寬格：倉庫前，記帳官讀著奇普',
          back: [{ k: 'v4e3_qollqa', x: 690, y: 340, s: .9 }],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'think', expr: 'think', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v4e3_kusi', x: 300, y: 392, s: .9, pose: 'point', expr: 'smug' },
            { c: 'v4e3_dad', x: 540, y: 394, s: 1, pose: 'raise', expr: 'calm', hold: 'v4e3_khipuH', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '這一條，是倉庫裡的玉米：\n三百二十五袋。', x: 40, y: 14, w: 420, fs: 24, tail: [508, 150] }
          ],
          tag: { t: '記帳官（虛構）：專門做奇普、讀奇普的人', left: 10, top: 112 } },
        { scene: 'v4e3_andes', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], road: false }, shot: '收尾大格：傍晚的山路，準備出發',
          back: [{ k: 'car', x: 680, y: 600, s: .8 }],
          actors: [
            { c: 'v4e3_kusi', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'v4e3_braceH', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '回去以後，\n也試試用繩子記！', x: 14, y: 170, w: 210, fs: 22, tail: [110, 300] },
            { t: '下次跑步，\n我自己打結！', x: 232, y: 160, w: 200, fs: 22, tail: [284, 326] },
            { t: '記錄有\n好多種方法。', x: 442, y: 200, w: 170, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n加勒比海！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：往西航行到哪裡？', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '印加帝國在哪裡', t: '在南美洲的安地斯山脈（今天的祕魯一帶），中心是庫斯科。大約 1400～1533 年，1438 年以後越來越大，南北長大約 5500 公里。' },
      { h: '奇普：會說話的繩結', t: '印加人沒有文字，用打了結的彩色繩子「奇普」記數字：結離主繩越近，代表越大的數。專門的記帳官負責做和讀奇普。奇普還記了什麼，學者還在研究。' },
      { h: '道路和接力跑者', t: '道路連起整個帝國，學者估計加起來有三萬多到四萬公里，經過今天的六個國家；還有用草編的吊橋。跑者一站接一站，把消息接力送到很遠的地方。' },
      { h: '梯田和倉庫', t: '把山坡做成一層一層的梯田種玉米，高山上種馬鈴薯，收成存在倉庫裡。大家用「工作」來繳稅：修路、種田、蓋房子。' },
      { h: '後來', t: '1532 年西班牙人來到南美，不久印加帝國就結束了。今天還有大約八百萬人說印加人的克丘亞語。' }
    ],
    map: {
      world: 1,
      bounds: { lon: [-88, -56], lat: [-27, 5] },
      cap: '紅色虛線是印加道路大概的主幹（其實還有很多條）。海岸是今天的樣子，簡化畫法。',
      alt: '南美洲西邊的地圖：安地斯山脈沿著太平洋岸南北延伸，紅點是庫斯科，北邊是基多，紅色虛線是印加道路的主幹',
      areas: [{ pts: [[-15.2, -69.9], [-15.6, -69.1], [-16.5, -68.6], [-16.4, -69.3], [-15.8, -70.0]], f: 'g5', op: 1 }],
      routes: [{ pts: [[-0.2, -78.5], [-4, -79.2], [-7.2, -78.5], [-9.5, -77.5], [-12, -75.2], [-13.53, -71.97], [-15.8, -70], [-19.5, -66.5], [-24, -65.5]] }],
      labels: [
        { t: '太平洋', lat: -16, lon: -82, size: 24, f: 'cream' },
        { t: '安地斯山脈', lat: -8, lon: -73.5, size: 20, f: 'wood' },
        { t: '的的喀喀湖', lat: -17.4, lon: -66.2, size: 16, f: 'g7' }
      ],
      cities: [
        { n: '庫斯科', lat: -13.53, lon: -71.97, main: 1, side: 'r' },
        { n: '基多', lat: -0.18, lon: -78.47, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：印加帝國從開始變大到結束，大約只有一百年。',
      items: [
        { y: 1438, when: '西元 1438 年', t: '印加打敗鄰族，\n開始變大', side: 'u', w: 180 },
        { y: 1470, when: '約西元 1470 年', t: '帝國越來越大，\n道路四通八達', side: 'd', main: 1, w: 190 },
        { y: 1492, when: '西元 1492 年', t: '哥倫布到了\n加勒比海', side: 'u', w: 170 },
        { y: 1532, when: '西元 1532 年', t: '西班牙人\n來到南美', side: 'd', w: 160 }
      ]
    },
    sources: [
      'Nature News 2005 年 8 月 11 日的奇普研究報導（news050808-11，Urton 團隊）：奇普是彩色打結的繩子，用來記數字；結離主繩越近數值越大、結的種類代表不同的數；當時已知約 600 條奇普；記的是什麼學者還在研究',
      'World History Encyclopedia〈Inca Civilization〉：約 1400～1533 年；1438 年打敗昌卡人後開始擴張；南北約 5500 公里；約 1000 萬人、30 多種語言；道路網、跑者接力；用工作繳稅（mit\'a）；梯田、倉庫；1532 年西班牙人到來；今天約 800 萬人說克丘亞語',
      'NPR〈For Inca Road Builders, Extreme Terrain Was No Obstacle〉（2015）：道路超過 2 萬英里、經過今天六個國家、庫斯科是起點、有用草編的吊橋至今還在用'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '印加人用什麼來記數字和帳？', opts: ['打了結的彩色繩子', '刻在濕泥板上的記號', '寫在紙上的漢字', '畫在牆上的圖畫'], a: 0, why: '印加人用「奇普」：主繩上掛很多條打了結的彩色細繩，用來記數字和帳。' },
      { id: 'q2', d: 1, type: 'tf', q: '印加人有自己的文字，都寫在紙上。', a: false, why: '不對。印加人沒有文字，他們用打了結的繩子「奇普」來記數字和帳。' },
      { id: 'q3', d: 2, type: 'mc', q: '奇普的細繩上，結離主繩越近，代表什麼？', opts: ['越大的數', '越小的數', '越重要的人', '越早的日子'], a: 0, why: '結的位置像個位、十位、百位：離主繩越近，代表越大的數。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['印加打敗鄰族，開始變大', '印加帝國越來越大，道路四通八達', '哥倫布到了加勒比海', '西班牙人來到南美'], why: '1438 年印加開始擴張；大約 1470 年帝國越來越大；1492 年哥倫布到加勒比海；1532 年西班牙人來到南美。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「印加人沒有文字，所以他們一定記不住帳，也管不了大帝國。」根據這一話，哪個說法最正確？', opts: ['不對，他們用奇普和專門的記帳官記帳', '對，所以他們每件事都只能用背的', '對，所以帝國裡的人每天都在吵帳', '不對，他們其實偷偷用別國的文字記帳'], a: 0, why: '印加人用奇普記數字和帳，還有專門的記帳官，加上道路和接力跑者，才管得動這麼大的帝國。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
