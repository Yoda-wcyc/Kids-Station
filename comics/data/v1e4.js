/* 世界史漫畫 第 1 冊 古文明・第 4 話（只有資料，畫面在 art.js／comic.js）。
   國中社會會再學到：商周時期的國家與社會（商朝的甲骨文）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const C = K.C, BONE = '#EFE4C6', ICOL = 'rgba(21,23,20,.18)';
    // 甲骨文字形（60×90 的框、中心 30,45；只用色塊：膠囊筆畫＋填色形狀）。字形照常見的甲骨文寫法簡化重畫
    const G = {
      ri: (f, w) => K.path(`M9 45 a21 21 0 1 0 42 0 a21 21 0 1 0 -42 0Z M${9 + w} 45 a${21 - w} ${21 - w} 0 1 1 ${2 * (21 - w)} 0 a${21 - w} ${21 - w} 0 1 1 ${-2 * (21 - w)} 0Z`, f, 'fill-rule="evenodd"') + K.cap(24, 45, 36, 45, w, f),   // 日：圓圈＋中間一筆
      yue: (f, w) => K.path('M42 16 Q8 22 10 47 Q12 74 42 78 Q22 66 22 47 Q22 28 42 16Z', f) + K.cap(31, 40, 32, 54, w, f),                                   // 月：彎彎的月亮
      shan: (f, w) => K.cap(8, 72, 52, 72, w, f) + K.poly('8,72 15,44 22,72', f) + K.poly('21,72 30,18 39,72', f) + K.poly('38,72 45,44 52,72', f),      // 山：三座山峰
      ren: (f, w) => K.cap(36, 12, 39, 40, w, f) + K.cap(39, 40, 26, 78, w, f) + K.cap(36, 26, 12, 46, w, f),                                                // 人：側面彎著身子的人
      yu: (f, w) => K.cap(8, 18, 52, 18, w, f) + [16, 30, 44].map(x => K.cap(x, 30, x, 40, w, f) + K.cap(x, 52, x, 62, w, f)).join(''),                      // 雨：天（一橫）下落雨點
      mu: (f, w) => K.cap(30, 12, 30, 80, w, f) + K.cap(30, 32, 14, 14, w, f) + K.cap(30, 32, 46, 14, w, f) + K.cap(30, 62, 14, 80, w, f) + K.cap(30, 62, 46, 80, w, f)   // 木：樹枝＋樹根
    };
    const glyph = (n, x, y, k, f, w) => K.at(x - 30 * k, y - 45 * k, k, G[n](f, w));
    // 牛肩胛骨（原點＝底部中央）、龜腹甲
    const SCAP = 'M-30 -120 Q-10 -128 10 -120 L14 -100 Q40 -60 44 0 Q0 14 -44 0 Q-40 -60 -14 -100Z';
    const scap = () => K.both(K.path(SCAP, BONE), 'cm-warm') + K.rect(-10, -128, 20, 14, BONE, 4);
    const PL = 'M-36 -118 Q0 -128 36 -118 Q46 -96 40 -80 Q52 -74 52 -60 Q52 -44 42 -40 Q50 -20 40 -4 Q20 6 0 6 Q-20 6 -40 -4 Q-50 -20 -42 -40 Q-52 -44 -52 -60 Q-52 -74 -40 -80 Q-46 -96 -36 -118Z';
    const plastron = f => K.both(K.path(PL, f || BONE), 'cm-warm') + K.rect(-1, -122, 2, 126, ICOL) + [-96, -70, -44, -20].map(y => K.rect(-44, y, 88, 2, ICOL)).join('');
    // 「卜」字形的裂紋（小單位）：一條直的，中間往右岔出去
    const crack = (x, y, k) => K.at(x, y, k, K.cap(0, -14, 1, -5, 1.6, C.ink) + K.cap(1, -5, -1, 4, 1.6, C.ink) + K.cap(-1, 4, 0, 14, 1.6, C.ink) + K.cap(0, -3, 6, -6, 1.3, C.ink) + K.cap(6, -6, 11, -5, 1.3, C.ink));
    const card = (n, t) => K.rect(0, 0, 120, 90, BONE) + glyph(n, 32, 45, .92, C.wood, 5) + K.poly('60,41 68,41 68,34 79,45 68,56 68,49 60,49', C.red) + K.txt(101, 62, t, 44, C.ink);

    A.extend({
      cast: {
        v1e4_bu: { name: '小卜（虛構）', skin: 'skinB', top: 'cream', skirt: 'clay2', sleeve: 'skinB', hair: 'topknot', hatC: 'red', r: 22, k: .94 },
        v1e4_zhen: { name: '貞人（虛構）', skin: 'skinB', robe: 'cream', trim: 'wood', hair: 'topknot', beard: 1, r: 19, k: 1.16 },
        v1e4_wuding: { name: '商王武丁', real: 1, skin: 'skinB', robe: 'g9', trim: 'gold', hair: 'topknot', hat: 'band', hatC: 'gold', beard: 1, r: 19, k: 1.24 },
        v1e4_fuhao: { name: '婦好', real: 1, skin: 'skinB', robe: 'purple', trim: 'gold', hair: 'bun', acc: ['earring'], r: 19, k: 1.12 }
      },
      props: {
        v1e4_plastron: x => K.place(x, plastron(K.col(x.f)) + (x.cracks ? crack(-20, -60, 1.4) + crack(22, -34, 1.4) : ''))
      },
      icons: {
        v1e4_ri: () => card('ri', '日'), v1e4_yue: () => card('yue', '月'), v1e4_shan: () => card('shan', '山'),
        v1e4_ren: () => card('ren', '人'), v1e4_yu: () => card('yu', '雨'), v1e4_mu: () => card('mu', '木')
      },
      scenes: {
        // 特寫：牛肩胛骨的背面，一排排「長洞＋圓洞」（鑿和鑽），有幾個已經燒黑
        v1e4_drill(w, h) {
          let s = K.rect(0, 0, w, h, C.g9) + K.circ(w * .5, h * .6, w * .7, 'url(#cm-glow)', 'opacity=".25"'), b = scap();
          [[-2, -92], [-12, -70], [12, -70], [-22, -46], [0, -46], [20, -46], [-26, -20], [-2, -20], [22, -20]].forEach(([x, y], i) => {
            b += K.ell(x, y, 3.2, 7, C.clay2) + K.circ(x + 5.6, y + 1.5, 3.4, C.clay2) + (i % 3 === 1 ? K.circ(x + 5.6, y + 1.5, 2.2, C.wood) : '');
          });
          return { bg: s + K.at(w / 2, h - 40, 2.9, b) };
        },
        // 特寫：骨頭正面燙出「卜」字形的裂紋
        v1e4_crack(w, h) {
          let s = K.rect(0, 0, w, h, C.g9) + K.zoom(w * .37, h * .6, 60, h, 28, 'rgba(247,243,230,.12)', 6) + K.circ(w * .37, h * .62, 220, 'url(#cm-glow)', 'opacity=".45"');
          let b = scap() + K.circ(-2, -66, 18, 'url(#cm-redglow)', 'opacity=".5"');
          b += K.cap(-2, -90, 0, -80, 1.8, C.ink) + K.cap(0, -80, -3, -67, 1.8, C.ink) + K.cap(-3, -67, 0, -54, 1.8, C.ink) + K.cap(0, -54, -2, -42, 1.8, C.ink) + K.cap(-2, -69, 8, -73, 1.5, C.ink) + K.cap(8, -73, 15, -71, 1.5, C.ink);
          b += glyph('yu', 24, -30, .2, C.wood, 4) + glyph('ri', -24, -30, .2, C.wood, 4);
          return { bg: s + K.at(w * .37, h - 28, 2.8, b) };
        },
        // 宮殿裡：夯土牆（一層一層）、木柱、茅草屋簷、夯土地面
        v1e4_hall(w, h) {
          const hz = h * .56;
          let s = K.rect(0, 0, w, hz, C.clay3);
          for (let y = 100; y < hz; y += 28) s += K.rect(0, y, w, 3, 'rgba(110,80,40,.16)');
          s += K.path(`M0 0 L${w} 0 L${w} 70 Q${w * .5} 104 0 70Z`, C.gold);
          for (let i = 0; i < 26; i++) s += K.rect(i * w / 26 + 4, 6, 3, 62 + (i % 3) * 8, 'rgba(110,80,40,.28)');
          [w * .04, w * .34, w * .66, w * .96].forEach(x => { s += K.both(K.rect(x - 13, 74, 26, hz - 74, C.wood)) + K.rect(x - 20, hz - 12, 40, 14, C.paper3, 3); });
          s += K.rect(0, hz, w, h - hz, C.clay) + K.rect(0, hz, w, 8, 'rgba(21,23,20,.14)');
          s += K.poly(`${w * .18},${h * .7} ${w * .82},${h * .7} ${w * .9},${h * .8} ${w * .1},${h * .8}`, C.gold, 'opacity=".5"');
          return { bg: s };
        },
        // 大龜甲（上面刻著認得出來的字；「日」那個發亮）
        v1e4_shellBg(w, h) {
          let s = K.rect(0, 0, w, h, C.g9) + K.circ(w * .5, h * .42, w * .75, 'url(#cm-glow)', 'opacity=".3"'), b = plastron();
          b += K.circ(-22, -92, 15, 'url(#cm-redglow)', 'opacity=".5"') + glyph('ri', -22, -92, .3, C.wood, 5) + glyph('yu', 20, -92, .26, C.wood, 5);
          b += glyph('shan', -22, -56, .26, C.wood, 5) + glyph('ren', 22, -56, .26, C.wood, 5) + glyph('mu', -2, -22, .26, C.wood, 5);
          b += crack(-38, -28, 1) + crack(36, -26, 1) + crack(36, -82, 1);
          return { bg: s + K.at(w * .5, 640, 3.2, b) };
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v1e4 = {
    id: 'v1e4', vol: '第 1 冊 古文明', volNo: 1, ep: 4, title: '牛骨上的問題', next: '二十二個字母走天下',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！不用丟銅板，也不用看裂紋——你是真的讀懂了。',
    note: '阿凱、小禾、小卜和那位貞人是虛構的角色。武丁和貞人的話改編自卜辭：問收成的卜辭很多；「雨會從哪一邊來」改編自一片問雨的卜辭（《甲骨文合集》12870），不是武丁本人說的原話。武丁、婦好的樣子，還有殷的宮殿、鑄銅工坊都是想像圖。婦好和鑄銅工坊同一格是想像的畫面。王懿榮「從中藥的龍骨上認出甲骨文」是流傳的說法，細節學者還不確定。',
    curriculum: '國中社會會再學到：商周時期的國家與社會（商朝的甲骨文）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'clay2', near: 'g5' },
      back: [
        { k: 'hall', x: 390, y: 960, W: 560, H: 260, roof: 'thatch' },
        { k: 'ding', x: 120, y: 980, s: 1.5 },
        { k: 'bone', x: 680, y: 990, s: 1.2, rot: 8 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'paper3', hz: .74, window: [.74, .1, .2, .42], winC: 'g3' },
          shot: '中景：考試前一晚，阿凱拿著十元想丟銅板',
          back: [{ k: 'shelf', x: 90, y: 252, W: 120, H: 200 }],
          actors: [
            { c: 'kai', x: 300, y: 330, s: 1, pose: 'raise', expr: 'grin', hold: 'coin', look: .4 },
            { c: 'he', x: 600, y: 334, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .7 }
          ],
          props: [{ k: 'table', x: 300, y: 336, W: 250 }, { k: 'book', x: 250, y: 262, s: .6 }, { k: 'book', x: 360, y: 262, s: .5 }],
          bubbles: [
            { t: '明天考三科，\n丟銅板決定\n先讀哪一科！', x: 20, y: 10, w: 200, fs: 25, tail: [288, 152] },
            { t: '哥，你上次丟銅板，\n結果三科都沒讀。', x: 380, y: 12, w: 270, fs: 25, tail: [590, 168] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'street', shot: '大格遠景：銅板滾走，阿凱追到搖搖車前',
          back: [{ k: 'car', x: 118, y: 628, s: .78 }],
          props: [{ k: 'coin', x: 200, y: 640, r: 16, rot: 30 }],
          actors: [
            { c: 'he', x: 470, y: 590, s: .8, pose: 'shout', expr: 'shock', flip: 1, look: .6 },
            { c: 'kai', x: 400, y: 670, s: 1.15, pose: 'chase', expr: 'yell', flip: 1, look: .7, sweat: 1 }
          ],
          bubbles: [
            { t: '我的十元！\n別跑啊！', x: 150, y: 290, w: 200, kind: 'shout', tail: [364, 450] },
            { t: '哥！那台車\n怪怪的！', x: 360, y: 330, w: 160, fs: 25, tail: [466, 448] }
          ],
          sfx: [{ t: '咕嚕嚕——', x: 196, y: 588, fs: 32, rot: -6 }] },
        { scene: 'coin', sceneOpt: { year: '1200' }, shot: '小格特寫：十元掉進投幣孔，數字盤倒轉到西元前 1200',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'kai', x: 120, y: 880, s: 1.8, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '十元掉進去……\n數字在倒轉！', x: 18, y: 420, w: 206, fs: 24, tail: [100, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: 'sky', sun: [.2, .14], hz: .42, far: 'g3', ground: 'clay3', river: { y: .6, h: .07, tilt: .02, c: 'g5' }, near: 'sand' },
          shot: '滿版遠景：夯土台基上的茅草大殿、河、房子',
          back: [
            { k: 'tree', x: 60, y: 500, H: 170 },
            { k: 'house', x: 170, y: 520, W: 150, H: 80, roof: 'thatch', f: 'brick3' },
            { k: 'hall', x: 470, y: 540, W: 440, H: 270, roof: 'thatch' },
            { k: 'house', x: 730, y: 530, W: 120, H: 70, roof: 'thatch', f: 'brick3' },
            { k: 'crowd', x: 320, y: 600, n: 4, W: 120, s: .7 },
            { k: 'tree', x: 720, y: 600, H: 200, f: 'g5', f2: 'g7' },
            { k: 'reeds', x: 40, y: 880, n: 8 },
            { k: 'car', x: 160, y: 960, s: 1 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'pointUp', expr: 'shock', look: -.3, sweat: 1 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 3200 年前，商朝的都城「殷」', en: 'YIN · c.1200 BC', x: 0, y: 18 },
            { t: '在今天中國河南省的安陽。\n大房子蓋在土台上，\n土是一層層打結實的。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：商朝的殷。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [170, 852], fs: 24 },
            { t: '屋頂是\n草做的耶！', x: 340, y: 640, w: 180, tail: [462, 762] },
            { t: '房子都蓋在\n高高的土台上。', x: 556, y: 680, w: 210, fs: 25, tail: [612, 800] }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sky: 'sky', sun: [.86, .2], hz: .5, far: 'g3', ground: 'clay3' },
          shot: '中景：貞人家的院子，阿凱拿起一塊大骨頭',
          back: [
            { k: 'house', x: 690, y: 280, W: 200, H: 110, roof: 'thatch', f: 'brick3' },
            { k: 'table', x: 410, y: 440, W: 230 },
            { k: 'bone', x: 350, y: 364, s: .55, rot: -8 },
            { k: 'bone', x: 405, y: 364, s: .55, rot: 4 },
            { k: 'v1e4_plastron', x: 468, y: 364, s: .55 }
          ],
          actors: [
            { c: 'he', x: 110, y: 455, s: .95, pose: 'hold', expr: 'shock', hold: 'notebook', look: .6 },
            { c: 'kai', x: 250, y: 452, s: 1, pose: 'hold', expr: 'happy', hold: 'bone', look: .3 },
            { c: 'v1e4_bu', x: 600, y: 456, s: 1, pose: 'point', expr: 'yell', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '好多大骨頭！\n今晚喝大骨湯？', x: 150, y: 30, w: 250, fs: 25, tail: [254, 262] },
            { t: '放下！那是要問\n大王問題的骨頭！', x: 440, y: 26, w: 320, kind: 'shout', tail: [590, 272] }
          ],
          tag: { t: '貞人（占卜官）家的學徒：小卜' } },
        { scene: 'v1e4_drill', shot: '特寫：骨頭背面一排排挖好的小洞',
          bubbles: [{ t: '我的工作是\n把骨頭磨平，\n在背面挖小洞。', x: 14, y: 14, w: 274, fs: 24 }],
          caption: [{ t: '牛肩胛骨的背面', say: '牛肩胛骨的背面', x: 0, y: 506, dark: false }] },
        { scene: 'v1e4_crack', shot: '特寫：用火燙過，正面裂出「卜」字形',
          actors: [{ c: 'v1e4_bu', x: 390, y: 640, s: 1.2, pose: 'point', expr: 'smug', flip: 1, look: .5, noShadow: true, bust: 1 }],
          bubbles: [
            { t: '挖洞要幹嘛？', x: 14, y: 14, w: 200, kind: 'think', fs: 24 },
            { t: '用火燙小洞，\n正面就會裂開，\n看裂紋說好壞！', x: 220, y: 120, w: 236, fs: 24, tail: [372, 420] }
          ],
          caption: [{ t: '裂紋的樣子，就是「卜」字！', x: 0, y: 500 }],
          sfx: [{ t: '啪！', x: 30, y: 200, fs: 52, rot: -10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v1e4_hall', shot: '滿版：宮殿裡的占卜，武丁和貞人在火盆前',
          back: [{ k: 'brazier', x: 440, y: 690, s: 1.6 }, { k: 'bone', x: 200, y: 700, s: .7, rot: -80 }],
          actors: [
            { c: 'v1e4_zhen', x: 300, y: 680, s: 1.15, pose: 'kneel', expr: 'think', hold: 'bone', look: .6 },
            { c: 'v1e4_wuding', x: 590, y: 680, s: 1.05, pose: 'think', expr: 'calm', flip: 1, look: .5 },
            { c: 'kai', x: 150, y: 1030, s: 1.35, pose: 'think', expr: 'grin', look: .5 },
            { c: 'v1e4_bu', x: 410, y: 1032, s: 1.25, pose: 'stand', expr: 'calm', look: .3 },
            { c: 'he', x: 640, y: 1036, s: 1.35, pose: 'hold', expr: 'happy', hold: 'notebook', flip: 1, look: .6 }
          ],
          caption: [{ t: '商王什麼都要問：下雨、收成、打獵、生病……', en: 'KING WU DING', x: 0, y: 18 }],
          bubbles: [
            { t: '今天會下雨嗎？\n雨會從西、東、\n北、南哪邊來？', x: 30, y: 250, w: 300, fs: 25, tail: [300, 470] },
            { t: '今年的莊稼，\n會有好收成嗎？', x: 450, y: 240, w: 300, tail: [585, 424] },
            { t: '四個方向都問，\n總會猜中一個吧！', x: 14, y: 640, w: 270, fs: 25, tail: [150, 764] },
            { t: '問題和答案，\n都會刻在骨頭上！', x: 470, y: 700, w: 290, fs: 25, tail: [620, 798] }
          ],
          tag: { t: '武丁和貞人的話：改編自卜辭', left: 10, top: 96 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v1e4_shellBg', shot: '細長大格：刻滿字的大龜甲，阿凱認出「日」',
          actors: [
            { c: 'v1e4_bu', x: 70, y: 1030, s: 1.15, pose: 'point', expr: 'grin', look: .6 },
            { c: 'kai', x: 250, y: 1036, s: 1.2, pose: 'lookup', expr: 'awe', flip: 1, look: .4 }
          ],
          caption: [{ t: '甲骨文：刻在龜「甲」\n和獸「骨」上的字', x: 0, y: 16, w: 330 }],
          bubbles: [
            { t: '這個我認得！\n是「日」！', x: 144, y: 600, w: 190, fs: 25, tail: [252, 790] },
            { t: '猜猜看，\n這是什麼字？', x: 10, y: 700, w: 190, fs: 25, tail: [78, 812] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g7' }, shot: '字卡：甲骨文和今天的字對照',
          caption: [{ t: '甲骨文 → 今天的字', x: 0, y: 16 }],
          cards: [
            { icon: 'v1e4_ri', x: 14, y: 76, w: 190, t: '太陽' }, { icon: 'v1e4_yue', x: 218, y: 76, w: 190, t: '月亮' },
            { icon: 'v1e4_shan', x: 14, y: 248, w: 190, t: '三座山峰' }, { icon: 'v1e4_ren', x: 218, y: 248, w: 190, t: '側面的人' },
            { icon: 'v1e4_yu', x: 14, y: 420, w: 190, t: '天上落雨點' }, { icon: 'v1e4_mu', x: 218, y: 420, w: 190, t: '有枝有根' }
          ],
          actors: [{ c: 'he', x: 300, y: 1100, s: 1.3, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .6, noShadow: true, bust: 1 }],
          bubbles: [{ t: '原來我們寫的字，\n三千多年前\n就有了！', x: 14, y: 740, w: 250, fs: 25, tail: [262, 862] }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'clay2', hz: .8 },
          shot: '矮寬格：鑄銅工坊裡的大鼎，婦好也在',
          back: [{ k: 'brazier', x: 380, y: 384, s: 1.2 }, { k: 'puff', x: 380, y: 250, r: 22, f: '#D3CCB4' }],
          actors: [
            { c: 'kai', x: 90, y: 390, s: .9, pose: 'point', expr: 'happy', look: .6 },
            { c: 'v1e4_bu', x: 230, y: 392, s: .9, pose: 'point', expr: 'mad', flip: 1, look: .7 },
            { c: 'v1e4_fuhao', x: 700, y: 392, s: .92, pose: 'stand', expr: 'calm', flip: 1, look: .4 }
          ],
          props: [{ k: 'ding', x: 540, y: 384, s: 1.5 }],
          bubbles: [
            { t: '好大的鍋！\n可以煮火鍋嗎？', x: 14, y: 14, w: 212, fs: 24, tail: [96, 205] },
            { t: '那是鼎！祭祀祖先\n用的青銅器啦！', x: 234, y: 14, w: 256, fs: 24, tail: [226, 216] }
          ],
          caption: [{ t: '青銅＝銅加錫。\n熔化後倒進泥模子，\n就鑄成鼎。', x: 500, y: 14, w: 270 }],
          tag: { t: '婦好：武丁的王后，也帶兵出征（想像圖）' } },
        { scene: 'land', sceneOpt: { sky: 'brick3', sun: [.74, .3], hz: .5, far: 'g5', ground: 'clay3', near: 'sand' },
          shot: '收尾大格：傍晚的殷，搖搖車亮燈',
          back: [{ k: 'hall', x: 200, y: 320, W: 300, H: 180, roof: 'thatch' }, { k: 'tree', x: 420, y: 320, H: 150 }, { k: 'car', x: 640, y: 560, s: 1.15, lights: true }],
          actors: [
            { c: 'v1e4_bu', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'raise', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '下次考試，\n要不要也占卜？', x: 10, y: 190, w: 210, fs: 24, tail: [110, 340] },
            { t: '不用了！\n我回家先把\n課本讀完！', x: 228, y: 170, w: 180, fs: 24, tail: [272, 336] },
            { t: '而且這些字，\n三千年後\n我們還在用！', x: 418, y: 220, w: 190, fs: 24, tail: [470, 368] },
            { t: '嗶嗶——\n下一站，\n地中海！', x: 620, y: 206, w: 150, kind: 'car', fs: 22, tail: [640, 420] }
          ],
          caption: [{ t: '下一話：二十二個字母走天下', x: 288, y: 570 }] }
      ] }
    ],
    recap: [
      { h: '甲骨文是什麼', t: '大約 3200 年前，商朝的王用烏龜的腹甲和牛的肩胛骨占卜，再把問題和結果刻在上面。刻在龜「甲」和獸「骨」上的字，就叫甲骨文。' },
      { h: '怎麼占卜', t: '先在骨頭背面挖出小洞，再用火燙，正面就裂出「卜」字形的裂紋，看裂紋判斷好壞。商王什麼都問：下雨、收成、打獵、生病……' },
      { h: '漢字的老祖先', t: '日、月、山、人、雨、木……很多甲骨文看得出樣子，後來慢慢變成我們今天寫的漢字。目前找到幾千個不同的字，學者讀得懂的還不到一半。' },
      { h: '青銅器', t: '商朝人把銅和錫熔在一起變成青銅，倒進泥做的模子鑄成鼎，用來祭祀祖先。殷墟出土的后母戊鼎超過 800 公斤。' },
      { h: '怎麼被找到的', t: '1899 年王懿榮認出甲骨上的字（「從中藥龍骨發現」是傳說）。1928 年起中央研究院在殷墟正式挖掘，很多甲骨現在收藏在臺北的中研院。1976 年挖到武丁的王后婦好的墓。' }
    ],
    map: {
      bounds: { lon: [104, 127], lat: [21, 41] },
      rivers: ['yellow', 'yangtze'],
      labels: [
        { t: '黃河', lat: 39.6, lon: 107.6, size: 24, f: 'g9' },
        { t: '長江', lat: 29.1, lon: 108.8, size: 24, f: 'g9' },
        { t: '黃海', lat: 35.4, lon: 123.6, size: 22, f: 'cream' },
        { t: '東海', lat: 28.6, lon: 124.4, size: 22, f: 'cream' }
      ],
      cities: [
        { n: '殷（今安陽）', lat: 36.1, lon: 114.35, main: 1, side: 'r' },
        { n: '鄭州（商朝早期的城）', lat: 34.75, lon: 113.65, side: 'l', dy: 8 }
      ],
      cap: '紅點是殷（今天河南省的安陽），在黃河北邊不遠。鄭州也挖到更早的商朝城牆。（河道和海岸線畫的是今天的樣子，三千多年前跟現在不完全一樣。）',
      alt: '中國東部地圖：黃河在北、長江在南，都往東流進大海；殷在黃河北邊，鄭州在殷的南邊，右下角的海上是臺灣'
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：甲骨文到今天，已經三千多年。',
      items: [
        { y: -1600, when: '約西元前 1600 年', t: '商朝開始', side: 'u', w: 186 },
        { y: -1200, when: '約西元前 1200 年', t: '武丁的時代，\n刻了很多甲骨', side: 'd', main: 1, w: 200 },
        { y: -221, when: '西元前 221 年', t: '秦朝統一文字\n（小篆）', side: 'u', w: 186 },
        { y: 1899, when: '西元 1899 年', t: '王懿榮認出\n甲骨上的字', side: 'd', w: 186 },
        { y: 2026, when: '今天', t: '我們寫的漢字\n是它的後代', side: 'u', w: 186 }
      ]
    },
    sources: [
      '大英百科〈oracle bone〉〈jiaguwen〉（龜腹甲和牛肩胛骨、商王固定的占卜制度、約 1900 年在河南小屯被認出、已辨認的字只有一部分讀得懂）',
      '中央研究院歷史語言研究所〈殷墟發掘照片選輯〉與歷史文物陳列館（1928～1937 年在安陽殷墟發掘 15 次；館內有殷墟與甲骨展區）',
      '中研院歷史文物陳列館甲骨特展〈Forecast Through Divination〉（商人常用甲骨占卜天氣，也問戰爭、農事、打獵、祭祀；「雨」字上面一橫是天、下面是雨點）',
      '《甲骨文合集》12870 卜雨刻辭（今日雨？其自西來雨？其自東來雨？其自北來雨？其自南來雨？；郭沫若綴合）',
      '中國社會科學院考古研究所《殷墟婦好墓》（1976 年發掘；婦好是武丁的王后，卜辭記她帶兵出征）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '甲骨文主要刻在什麼東西上？', opts: ['龜甲和牛骨', '竹片和木板', '泥板和石碑', '紙張和布料'], a: 0, why: '「甲」是烏龜的腹甲，「骨」是牛的肩胛骨，商朝人在上面占卜、刻字。' },
      { id: 'q2', d: 1, type: 'tf', q: '商朝人占卜時，會先在骨頭背面挖小洞，再用火燙出裂紋。', a: true, why: '背面先挖好小洞，火一燙，正面就會裂出紋路，貞人看裂紋判斷好壞。' },
      { id: 'q3', d: 2, type: 'mc', q: '骨頭被火燙出來的裂紋，樣子像哪一個字？', opts: ['卜', '十', '人', '山'], a: 0, why: '裂紋是一條直的，中間往旁邊岔出去，樣子就像「卜」。' },
      { id: 'q4', d: 2, type: 'match', q: '把甲骨文的樣子和今天的字配起來。', pairs: [['圓圈中間有一筆', '日'], ['三個尖尖的山峰', '山'], ['一橫下面掉雨點', '雨'], ['有枝也有根的樹', '木']], why: '很多甲骨文是照東西的樣子畫的，所以三千多年後的我們還認得出來。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「商王占卜只是隨便問問，看完裂紋就丟掉，什麼也沒留下。」根據這一話，哪個說法最正確？', opts: ['不對，問題和結果都刻在骨頭上', '對，看完裂紋，骨頭就燒掉不留了', '不對，商王只問下雨，別的都不問', '對，骨頭上只有裂紋，沒有刻字'], a: 0, why: '貞人會把占卜的日子、問題，甚至後來有沒有應驗都刻上去，所以今天才讀得到三千多年前的問題。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
