/* 世界史漫畫 第 5 冊 革命與工業・第 1 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：科學革命。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, path, txt, cap, place, seeded } = K;
    // 望遠鏡的鏡筒（原點＝目鏡那一頭，往右是物鏡）
    const tube = L => cap(0, 0, L, 0, 18, C.wood) + rect(L * .3, -10, 8, 20, C.gold) + rect(L * .7, -10, 8, 20, C.gold) + circ(L, 0, 10, C.g2) + cap(-14, 0, 0, 0, 11, C.ink);
    // 望遠鏡看到的月亮：亮的一半有坑，暗的那邊有幾個被照亮的山頂
    const moon = R => {
      let s = circ(0, 0, R * 1.5, 'url(#cm-glow)', 'opacity=".35"') + circ(0, 0, R, C.cream);
      [[-.2, -.4, .16], [.3, -.1, .12], [-.05, .35, .2], [.45, .4, .09], [.1, -.65, .08], [-.45, .05, .1]].forEach(([x, y, r]) => { s += circ(x * R, y * R, r * R, C.paper3) + circ(x * R + r * R * .2, y * R + r * R * .2, r * R * .7, '#E6DFC8'); });
      s += path(`M${R * .5} ${-R * .87} Q${R * .15} 0 ${R * .5} ${R * .87} A${R} ${R} 0 0 0 ${R * .5} ${-R * .87}Z`, 'rgba(24,38,30,.88)');
      [[.66, -.3], [.62, .2], [.72, .52]].forEach(([x, y]) => { s += circ(x * R, y * R, R * .025, C.cream); });
      return s;
    };
    root.ComicArt.extend({
      scenes: {
        // 屋頂上的夜空：星星＋紅瓦屋頂（月亮另外用 props 擺）
        v5e1_roof(w, h) {
          const rnd = seeded(31); let s = rect(0, 0, w, h, C.night);
          for (let i = 0; i < 60; i++) s += circ(rnd() * w, rnd() * h * .7, .8 + rnd() * 1.8, C.cream, 'opacity=".8"');
          s += rect(0, h * .74, w, h * .26, C.clay2) + rect(0, h * .74, w, 10, C.brick2);
          for (let y = h * .78; y < h; y += 34) for (let x = (y / 34 % 2) * 30; x < w; x += 60) s += ell(x, y, 28, 9, '#A97E57', 'opacity=".7"');
          return { bg: s };
        },
        // 伽利略的觀察記錄（示意）：木星和旁邊的小光點，一天一行
        v5e1_jup(w, h) {
          let s = rect(0, 0, w, h, C.paper2) + rect(16, 150, w - 32, 690, C.cream, 10);
          const rows = [['1月7日', [-2, -1, 1.5]], ['1月8日', [1, 2, 3]], ['1月10日', [-2, -1]], ['1月11日', [-2.4, -1.2]], ['1月13日', [-1, 1, 2, 3]]];
          rows.forEach(([d, pts], i) => {
            const y = 230 + i * 128, cx = w * .62;
            s += txt(30, y + 8, d, 22, C.wood, { a: 'start' }) + circ(cx, y, 16, C.gold) + rect(cx - 15, y - 3, 30, 4, C.clay2);
            pts.forEach(p => { s += circ(cx + p * 26, y, 5, C.ink); });
            if (i < rows.length - 1) s += rect(30, y + 62, w - 60, 2, C.paper3);
          });
          s += txt(w * .6, 186, '東 ←   木星   → 西', 17, C.wood);
          return { bg: s };
        }
      },
      props: {
        v5e1_scope: x => place(x, cap(-36, 0, 0, -118, 6, C.wood) + cap(36, 0, 0, -118, 6, C.wood) + cap(4, 0, 0, -118, 6, C.wood) + `<g transform="translate(-74 -96) rotate(-24)">${tube(190)}</g>`),
        v5e1_tube: x => place(x, tube(x.L || 130)),
        v5e1_moon: x => place(x, moon(x.R || 150))
      },
      holds: {
        v5e1_lens: () => circ(0, -8, 12, C.g2) + circ(-3, -11, 5, '#EEF5F0')
      },
      icons: {
        v5e1_geo() { return rect(0, 0, 120, 90, C.g9) + circ(60, 45, 36, C.g7) + circ(60, 45, 33, C.g9) + circ(60, 45, 11, C.blue) + circ(60, 9, 8, C.gold) + circ(94, 50, 5, C.cream); },
        v5e1_book() { return rect(0, 0, 120, 90, C.g3) + path('M60 70 Q40 62 18 66 L18 22 Q40 18 60 26Z', C.cream) + path('M60 70 Q80 62 102 66 L102 22 Q80 18 60 26Z', C.paper2) + circ(38, 40, 9, C.gold) + rect(26, 54, 24, 3, C.wood) + rect(26, 60, 18, 3, C.wood) + circ(70, 42, 3, C.ink) + circ(78, 42, 3, C.ink) + circ(86, 42, 6, C.gold) + circ(96, 42, 3, C.ink); },
        v5e1_helio() { return rect(0, 0, 120, 90, C.g9) + circ(60, 45, 36, C.g7) + circ(60, 45, 33, C.g9) + circ(60, 45, 14, C.gold) + circ(96, 45, 7, C.blue) + circ(30, 26, 5, C.red); }
      },
      cast: {
        v5e1_tonio: { name: '托尼歐（虛構）', skin: 'skin', top: 'clay3', bottom: 'wood', leg: 'wood', shoe: 'ink', hair: 'curly', hairC: 'wood', hat: 'beret', hatC: 'g9', r: 22, k: .94 },
        v5e1_galileo: { name: '伽利略', real: 1, skin: 'skin', robe: '#5A4636', trim: 'cream', hair: 'short', hairC: '#8A5A36', beard: 2, r: 19, k: 1.2 },
        v5e1_scholar: { name: '羅馬的教會學者（代表人物）', skin: 'skinB', robe: 'basalt2', trim: 'basalt3', hair: 'short', hairC: 'basalt3', r: 19, k: 1.14 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v5e1 = {
    id: 'v5e1', vol: '第 5 冊 革命與工業', volNo: 5, ep: 1, title: '望遠鏡裡的月亮', next: '沙龍裡的大問題',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說他服了——因為你拿出了證據。',
    note: '阿凱、小禾、托尼歐和羅馬的教會學者是虛構的角色；伽利略的話改編自《星際信使》，不是他的原話。伽利略的樣子參考後人畫的肖像再簡化，屋頂觀星、工坊和 1611 年羅馬那一格都是想像畫面；木星旁光點的位置是簡化示意，不是照原稿描的。當時「地球繞太陽」還沒有完整的證明，教會和學者之間怎麼爭論、1616 年的禁令細節，歷史學家到今天還有不同看法。',
    curriculum: '國中社會會再學到：科學革命',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'clay2', near: 'g7' },
      back: [
        { k: 'v5e1_moon', x: 726, y: 260, R: 44 },
        { k: 'tower', x: 690, y: 880, W: 80, H: 300, f: 'brick', roof: 'cone' },
        { k: 'v5e1_scope', x: 120, y: 900, s: 1.3 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'night', sceneOpt: { moon: [.88, .22], ground: 'g7' }, shot: '中景：晚上的公園，小禾指著月亮，阿凱不相信',
          back: [{ k: 'tree', x: 60, y: 300, H: 210 }, { k: 'lamp', x: 740, y: 330, H: 230 }],
          actors: [
            { c: 'he', x: 300, y: 330, s: 1.05, pose: 'pointUp', expr: 'happy', look: .6 },
            { c: 'kai', x: 540, y: 334, s: 1, pose: 'arg', expr: 'smug', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '月亮上有坑洞，\n還有高山喔！', x: 120, y: 12, w: 220, tail: [300, 140] },
            { t: '亂講！月亮明明\n平平亮亮的。', x: 400, y: 12, w: 230, tail: [536, 132] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'night', sceneOpt: { moon: [.2, .1], ground: 'g7' }, shot: '大格：公園溜滑梯旁邊，搖搖車自己跑來了',
          back: [{ k: 'tree', x: 470, y: 520, H: 220, kind: 'pine' }, { k: 'car', x: 360, y: 640, s: 1 }],
          actors: [
            { c: 'he', x: 90, y: 640, s: 1.15, pose: 'point', expr: 'smug', look: .6 },
            { c: 'kai', x: 236, y: 652, s: 1.2, pose: 'fists', expr: 'mad', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '你又沒去過，\n證據咧？', x: 236, y: 150, w: 210, tail: [258, 380] },
            { t: '那就去找\n第一個用望遠鏡\n看月亮的人！', x: 12, y: 250, w: 206, fs: 24, tail: [96, 430] },
            { t: '投 10 元，\n帶你去找證據。', x: 296, y: 300, w: 216, kind: 'car', fs: 24, tail: [400, 500] }
          ],
          sfx: [{ t: '嗶？', x: 430, y: 430, fs: 40, rot: 8 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1610 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1610',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '數字在倒轉！\n西元 1610！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#E3C9A0', sun: [.16, .44], hz: .55, far: 'clay3', ground: 'paper3', near: 'brick2' }, shot: '滿版遠景：傍晚的帕多瓦，紅瓦房子、圓頂和鐘樓',
          back: [
            { k: 'house', x: 110, y: 580, W: 190, H: 150, roof: 'tile', roofC: 'clay2', f: 'brick3' },
            { k: 'dome', x: 330, y: 572, W: 160, H: 190, f: 'cream' },
            { k: 'tower', x: 520, y: 576, W: 66, H: 300, f: 'brick', roof: 'cone' },
            { k: 'house', x: 680, y: 584, W: 200, H: 170, roof: 'tile', roofC: 'clay2', f: 'cream' },
            { k: 'v5e1_moon', x: 640, y: 300, R: 34 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 400 年前，帕多瓦', en: 'PADUA · 1610', x: 0, y: 18 },
            { t: '帕多瓦在今天的義大利北部，離威尼斯不遠。伽利略在這裡的大學教數學。', x: 0, y: 112, w: 440, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：帕多瓦。\n免費附贈翻譯功能。', x: 14, y: 716, w: 300, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '月亮出來了，\n可是好小……', x: 340, y: 664, w: 200, tail: [462, 760] },
            { t: '伽利略\n住在哪裡？', x: 572, y: 704, w: 190, tail: [624, 794], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .8, window: [.42, .1, .16, .3], winC: 'night' }, shot: '中景：工坊裡，阿凱拿反了鏡筒',
          back: [{ k: 'shelf', x: 720, y: 376, W: 100, H: 200 }, { k: 'table', x: 470, y: 440, W: 200 }],
          props: [{ k: 'v5e1_tube', x: 400, y: 260, L: 120, flip: 1 }],
          actors: [
            { c: 'kai', x: 250, y: 440, s: 1.05, pose: 'hold', expr: 'shock', look: .5 },
            { c: 'v5e1_tonio', x: 630, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '哇！什麼東西\n都變好小！', x: 40, y: 30, w: 220, tail: [236, 218] },
            { t: '拿反了啦！\n小的那頭\n才對著眼睛！', x: 420, y: 18, w: 200, kind: 'shout', fs: 24, tail: [600, 240] }
          ],
          sfx: [{ t: '咦？', x: 300, y: 150, fs: 44, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：工坊學徒托尼歐拿著剛磨好的鏡片',
          actors: [{ c: 'v5e1_tonio', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'happy', hold: 'v5e1_lens', look: -.2 }],
          bubbles: [{ t: '我在伽利略老師\n的工坊幫忙\n磨鏡片！', x: 24, y: 70, w: 254, fs: 25, tail: [150, 300] }],
          tag: { t: '工坊學徒：托尼歐（虛構）', left: 8 } },
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .82 }, shot: '中景：架子上的望遠鏡，小禾在想',
          props: [{ k: 'v5e1_scope', x: 310, y: 470, s: 1.15 }],
          actors: [{ c: 'he', x: 100, y: 520, s: 1.1, pose: 'think', expr: 'think', look: .6 }],
          caption: [
            { t: '1609 年，伽利略聽說荷蘭有人\n做出「看遠鏡」，就自己磨鏡片改良。', x: 0, y: 14, w: 464 },
            { t: '留下來的一支，長大約 93 公分，可以放大大約 20 倍。', x: 0, y: 112, w: 440, dark: false }
          ],
          bubbles: [{ t: '一片一片磨，\n要好久吧？', x: 30, y: 200, w: 190, fs: 24, tail: [96, 316] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v5e1_roof', shot: '滿版：屋頂上，伽利略用望遠鏡看月亮，天上是放大的月亮',
          back: [
            { k: 'v5e1_moon', x: 520, y: 290, R: 170 },
            { k: 'v5e1_scope', x: 300, y: 790, s: 1.4 }
          ],
          actors: [
            { c: 'v5e1_galileo', x: 150, y: 800, s: 1.1, pose: 'lookup', expr: 'awe', look: .6 },
            { c: 'v5e1_tonio', x: 110, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [{ t: '1609 年底，伽利略一晚一晚看月亮，\n把看到的樣子畫下來。', x: 16, y: 16, w: 440 }],
          bubbles: [
            { t: '月亮不是光滑的球。\n上面有高山、有坑，\n跟地球很像。', x: 14, y: 380, w: 290, fs: 24, tail: [150, 610] },
            { t: '真的\n坑坑洞洞！', x: 290, y: 660, w: 170, fs: 25, tail: [452, 790] },
            { t: '我要畫下來，\n當作證據！', x: 560, y: 650, w: 200, fs: 24, tail: [650, 790] }
          ],
          tag: { t: '伽利略的話：改編自《星際信使》', left: 10, top: 340 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v5e1_jup', shot: '細長格：伽利略的記錄，木星旁的小光點每天換位置',
          actors: [{ c: 'he', x: 80, y: 1034, s: 1.15, pose: 'pointUp', expr: 'awe', look: .6 }],
          caption: [{ t: '1610 年 1 月 7 日起，\n木星旁的小光點\n每天都換位置。', x: 0, y: 14, w: 300 }],
          bubbles: [{ t: '它們在\n繞著木星轉！', x: 150, y: 864, w: 180, fs: 24, tail: [112, 900] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：地球是不是宇宙的中心？',
          caption: [{ t: '地球是宇宙的中心嗎？', x: 0, y: 16 }],
          cards: [
            { icon: 'v5e1_geo', y: 80, t: '當時大多數人相信：\n地球不動，太陽、月亮、\n星星都繞著地球轉。' },
            { icon: 'v5e1_helio', y: 344, t: '哥白尼說：地球繞著太陽轉。\n木星有自己的衛星，表示\n不是每樣東西都繞著地球。' },
            { icon: 'v5e1_book', y: 610, t: '伽利略把觀察寫成書\n《星際信使》（1610 年），\n別人也能拿望遠鏡來檢查。' }
          ],
          bubbles: [{ t: '不是比誰大聲，\n是比誰有證據！', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'g3', hz: .8, window: [.06, .12, .16, .36], winC: 'night' }, shot: '矮寬格：1611 年的羅馬，教會的學者也用望遠鏡檢查',
          back: [{ k: 'v5e1_scope', x: 470, y: 320, s: .9 }],
          actors: [
            { c: 'v5e1_scholar', x: 360, y: 322, s: .95, pose: 'lookup', expr: 'awe', look: .6 },
            { c: 'v5e1_galileo', x: 610, y: 322, s: .95, pose: 'offer', expr: 'calm', flip: 1, look: .5 }
          ],
          caption: [{ t: '1611 年，羅馬的教會學者用望遠鏡檢查，\n也看到了木星旁的光點。', x: 0, y: 14, w: 520 }],
          bubbles: [
            { t: '我們也看到了。\n可是「地球在動」，\n還要更多證明。', x: 20, y: 120, w: 250, fs: 23, tail: [318, 170] },
            { t: '我會繼續\n找證據。', x: 636, y: 30, w: 140, fs: 23, tail: [622, 120] }
          ],
          tag: { t: '想像畫面：學者是虛構的代表人物，伽利略的話是改編', left: 10, top: 370 } },
        { scene: 'night', sceneOpt: { moon: [.86, .14], ground: 'clay2' }, shot: '收尾大格：夜裡的帕多瓦街上，準備出發',
          back: [{ k: 'house', x: 690, y: 500, W: 180, H: 130, roof: 'tile', roofC: 'clay2', f: 'brick3' }, { k: 'car', x: 630, y: 600, s: .8 }],
          actors: [
            { c: 'v5e1_tonio', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', hold: 'v5e1_lens', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '後來：1616 年，教會要伽利略不要主張「地球在動」；1633 年審判後，他被關在家裡不能離開。1992 年，教宗為他恢復名譽。', x: 14, y: 12, w: 600, dark: false },
            { t: '下一話：沙龍裡的大問題', x: 288, y: 576 }
          ],
          bubbles: [
            { t: '這片鏡片送你！\n自己看，才算數。', x: 14, y: 196, w: 230, fs: 22, tail: [108, 340] },
            { t: '回家以後，\n我先找證據，\n再說人家亂講。', x: 250, y: 190, w: 200, fs: 22, tail: [282, 336] },
            { t: '那你要先跟\n我說對不起。', x: 456, y: 220, w: 170, fs: 22, tail: [478, 372] },
            { t: '嗶嗶——\n下一站，\n巴黎！', x: 632, y: 150, w: 140, kind: 'car', fs: 22, tail: [690, 480] }
          ] }
      ] }
    ],
    recap: [
      { h: '自己動手做望遠鏡', t: '1609 年，在帕多瓦大學教數學的伽利略，聽說荷蘭有人做出能把遠處拉近的鏡筒，就自己磨鏡片改良。留到今天的一支長大約 93 公分，可以放大大約 20 倍。' },
      { h: '月亮上有山和坑', t: '1609 年底，他一晚一晚觀察月亮、畫下來，發現月亮不是光滑的球，上面有高山和坑洞。' },
      { h: '木星的衛星', t: '1610 年 1 月 7 日起，他看到木星旁的小光點每天換位置，最後確定有 4 顆衛星繞著木星轉。同年 3 月，他在威尼斯出版《星際信使》。' },
      { h: '地球繞太陽？大家在爭論', t: '當時多數人相信地球不動。伽利略支持哥白尼「地球繞太陽」的說法，但那時還沒有完整的證明。1611 年羅馬的教會學者也看到了他看到的東西；可是這個說法跟當時對聖經的解釋不合，1616 年教會要他不要主張，1633 年審判後他被關在家裡。1992 年，教宗為他恢復名譽。' },
      { h: '拿證據說話', t: '觀察、畫下來、寫出來，再讓別人也能檢查——這就是科學的方法。' }
    ],
    map: {
      bounds: { lon: [5, 20], lat: [38, 47.5] },
      cap: '紅點是帕多瓦，旁邊就是威尼斯（《星際信使》在這裡出版）。羅馬是 1611 年教會學者檢查望遠鏡觀察的地方。（海岸線是今天的樣子，城市位置是簡化畫法。）',
      alt: '義大利地圖：帕多瓦在北部、威尼斯旁邊，往南是佛羅倫斯和羅馬，東邊是亞得里亞海、西邊是地中海',
      labels: [
        { t: '義大利', lat: 43.3, lon: 12.0, size: 26, f: 'g9' },
        { t: '亞得里亞海', lat: 43.2, lon: 16.4, size: 20, f: 'cream', rot: -35 },
        { t: '地中海', lat: 39.6, lon: 8.6, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '帕多瓦', lat: 45.41, lon: 11.88, main: 1, side: 'l' },
        { n: '威尼斯', lat: 45.44, lon: 12.33, side: 'r', dy: -6 },
        { n: '佛羅倫斯', lat: 43.77, lon: 11.25, side: 'l' },
        { n: '羅馬', lat: 41.95, lon: 12.8, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：伽利略被審判以後，過了三百多年，教宗才為他恢復名譽。',
      items: [
        { y: 1610, when: '西元 1610 年', t: '發現木星的衛星\n出版《星際信使》', side: 'd', main: 1, w: 200 },
        { y: 1633, when: '西元 1633 年', t: '伽利略被審判\n關在家裡', side: 'u', w: 170 },
        { y: 1992, when: '西元 1992 年', t: '教宗為他\n恢復名譽', side: 'd', w: 160 },
        { y: 2026, when: '今天', t: '他的望遠鏡在\n佛羅倫斯的博物館', side: 'u', w: 196 }
      ]
    },
    sources: [
      'Museo Galileo（佛羅倫斯伽利略博物館）館藏〈Galileo\'s telescope〉〈Galileo\'s objective lens〉（1609 年底～1610 年初；放大 21 倍、長 927 公釐；伽利略第一個看到木星的衛星）',
      '美國物理學會 APS News〈This Month in Physics History：Galileo\'s telescope〉（1609 年聽說望遠鏡、自己做；向威尼斯議會展示；1609 年底看月亮；1610 年 1 月 7～15 日看出木星的衛星；1610 年 3 月在威尼斯出版《星際信使》）',
      '史丹佛哲學百科〈Galileo Galilei〉（1592 年到帕多瓦大學教數學；1611 年羅馬學院的學者確認他的觀察；1616 年被告誡不要主張哥白尼學說；1633 年審判、改判軟禁；1992 年教宗為他恢復名譽；當時還沒有決定性的證明）',
      'NASA〈Jupiter Moons〉（木星最大的 4 顆衛星，1610 年由伽利略最先觀察到）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '伽利略用什麼看到月亮上的高山和坑洞？', opts: ['望遠鏡', '放大鏡', '顯微鏡', '老花眼鏡'], a: 0, why: '伽利略自己磨鏡片、改良望遠鏡，用它一晚一晚看月亮，才發現月亮不是光滑的。' },
      { id: 'q2', d: 1, type: 'tf', q: '伽利略發現，木星旁邊有小光點繞著木星轉。', a: true, why: '對！1610 年 1 月，他看到木星旁的光點每天換位置，原來是繞著木星轉的衛星。' },
      { id: 'q3', d: 2, type: 'mc', q: '伽利略那個時代，大多數人相信什麼？', opts: ['地球不動，太陽繞著地球轉', '太陽不動，地球繞著太陽轉', '地球和太陽都繞著月亮轉', '地球和太陽都一直不會動'], a: 0, why: '當時大多數人相信地球是宇宙的中心、不會動；哥白尼和伽利略支持的是「地球繞太陽」。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['伽利略發現木星的衛星', '羅馬的教會學者也用望遠鏡看到了', '伽利略被審判、關在家裡', '教宗為伽利略恢復名譽'], why: '發現木星的衛星是 1610 年；羅馬的學者檢查是 1611 年；審判是 1633 年；恢復名譽是 1992 年。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「伽利略是對的，所以當時不同意他的人，都是故意找麻煩的壞人。」根據這一話，哪個說法最正確？', opts: ['不一定，當時證據還不完整，大家在爭論', '對，教會裡從來沒有任何人用望遠鏡看過天空', '對，不同意他的人都在故意說謊', '不對，伽利略根本沒有看過月亮'], a: 0, why: '羅馬的教會學者也用望遠鏡看到了他看到的東西；可是「地球在動」當時還沒有完整的證明，又跟當時對聖經的解釋不合，所以大家在爭論。不同意，不一定就是壞人。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
