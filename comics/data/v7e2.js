/* 世界史漫畫 第 7 冊 現代世界・第 2 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：戰後的人權運動（美國民權運動是延伸）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, col, place, rect, poly, circ, ell, path, txt, both, groundShadow } = K;
    const sign = (t, f) => rect(-1.5, -70, 3, 80, C.wood) + both(rect(-34, -96, 68, 40, f || C.cream, 3)) + txt(0, -69, t, 17, C.ink);
    // 拿在手上的牌子：桿子拉長，牌子舉到頭頂上面，不會擋到臉
    const signUp = (t, f, foot) => rect(-1.5, -150, 3, 160, C.wood) + both(rect(-34, -186, 68, 40, f || C.cream, 3)) + txt(0, -159, t, 17, C.ink) + (foot ? ell(18, -174, 9, 5, 'rgba(21,23,20,.35)') : '');
    root.ComicArt.extend({
      scenes: {
        // 1955 年公車車廂裡面：一排窗＋座椅
        v7e2_busIn(w, h) {
          let s = rect(0, 0, w, h, '#E3DCC6') + rect(0, h * .1, w, h * .26, C.g9);
          for (let x = 18; x < w; x += 120) s += rect(x, h * .12, 96, h * .22, C.g3, 8) + rect(x + 6, h * .14, 84, h * .08, C.g2, 6);
          s += rect(0, h * .36, w, 12, C.gold) + rect(0, h * .62, w, h * .38, C.paper3);
          for (let x = 30; x < w; x += 150) s += both(rect(x, h * .5, 110, 26, C.g7, 6)) + both(rect(x, h * .38, 22, h * .14, C.g7, 6));
          return { bg: s };
        }
      },
      props: {
        // 林肯紀念堂（簡化）：台階＋一排柱子＋平頂
        v7e2_memorial: x => {
          const W = x.W || 500, H = x.H || 260, f = C.cream, n = 12; let s = groundShadow(0, 3, W * .62, 12);
          for (let i = 0; i < 5; i++) s += rect(-W / 2 - 30 + i * 8, -H * .04 * (i + 1), W + 60 - i * 16, H * .04, i % 2 ? C.paper3 : C.paper2);
          s += rect(-W / 2, -H * .78, W, H * .58, '#B8B09A');
          for (let i = 0; i < n; i++) { const cx = -W / 2 + W * (i + .5) / n; s += both(rect(cx - W * .022, -H * .78, W * .044, H * .58, f)); }
          s += both(rect(-W / 2 - 10, -H * .9, W + 20, H * .12, f)) + both(rect(-W * .42, -H, W * .84, H * .1, C.paper2));
          return place(x, s);
        },
        // 長長的倒影池
        v7e2_pool: x => { const W = x.W || 600, H = x.H || 50; return place(x, rect(-W / 2, -H, W, H, C.blue, 4) + rect(-W / 2 + 30, -H * .6, W * .5, 4, C.g2, 2, 'opacity=".7"') + rect(-W * .1, -H * .3, W * .4, 4, C.g2, 2, 'opacity=".7"')); },
        // 演講台＋麥克風
        v7e2_podium: x => place(x, both(rect(-44, -92, 88, 92, C.wood, 4)) + rect(-50, -98, 100, 10, C.wood, 3) + [-24, -8, 8, 24].map((dx, i) => rect(dx - 2, -146 + i % 2 * 6, 4, 50, C.ink) + rect(dx - 6, -156 + i % 2 * 6, 12, 14, C.basalt3, 4)).join('')),
        // 1950 年代的公車（側面，朝右）
        v7e2_bus: x => {
          let s = groundShadow(0, 3, 190, 12) + both(path('M-180 -26 L-180 -150 Q-180 -170 -160 -170 L150 -170 Q190 -168 196 -120 L200 -26Z', C.gold));
          for (let i = 0; i < 6; i++) s += rect(-166 + i * 52, -150, 40, 44, C.g9, 4);
          s += rect(150, -150, 34, 60, C.g9, 4) + rect(-180, -96, 380, 10, C.cream) + rect(-180, -40, 380, 14, C.wood);
          s += circ(-110, -24, 26, C.ink) + circ(-110, -24, 10, C.paper3) + circ(120, -24, 26, C.ink) + circ(120, -24, 10, C.paper3);
          return place(x, s);
        },
        // 躺在草地上的牌子（被踩了一個腳印）
        v7e2_signFlat: x => place(x, poly('-70,0 70,0 60,-22 -60,-22', C.cream) + txt(0, -6, '自由', 18, C.ink) + ell(28, -10, 12, 6, 'rgba(21,23,20,.35)') + ell(14, -12, 5, 3, 'rgba(21,23,20,.35)')),
        v7e2_hold: x => place(x, sign(x.t || '自由', col(x.f)))
      },
      holds: {
        v7e2_signFoot: () => signUp('自由', C.cream, 1)
      },
      cast: {
        v7e2_maya: { name: '瑪雅（虛構）', skin: 'skinC', top: 'gold', skirt: 'blue', hair: 'curly', hat: 'band', hatC: 'red', r: 22, k: .93 },
        v7e2_senior: { name: '六年級學長', skin: 'skin', top: 'red', bottom: 'ink', leg: 'skin', hair: 'short', r: 22, k: 1.02 },
        v7e2_mom: { name: '瑪雅的媽媽（虛構）', skin: 'skinC', top: 'purple', skirt: 'g9', hair: 'bun', r: 19, k: 1.1 },
        v7e2_king: { name: '金恩博士', real: 1, skin: 'skinC', top: 'ink', bottom: 'ink', leg: 'ink', stripe: 'cream', hair: 'short', acc: ['mustache'], r: 19, k: 1.14 },
        v7e2_parks: { name: '羅莎・帕克斯', real: 1, skin: 'skinB', top: 'g7', skirt: 'g9', hair: 'bun', acc: ['glasses'], r: 19, k: 1.04 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v7e2 = {
    id: 'v7e2', vol: '第 7 冊 現代世界', volNo: 7, ep: 2, title: '我有一個夢', next: '人類的一小步',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！小禾的連署書上，你可以簽第二個名字（第一個被阿凱搶走了）。',
    note: '阿凱、小禾、瑪雅、瑪雅的媽媽和六年級學長是虛構的角色。金恩博士的話改編自〈我有一個夢〉演講，不是原文；羅莎・帕克斯的話改編自她後來說明自己為什麼不讓座的說法。人物的樣子、公車、林肯紀念堂和遊行的畫面都是想像圖；遊行牌子上的中文是搖搖車的「翻譯」。參加遊行的人數，各單位估計從 20 萬到 25 萬人不等。',
    curriculum: '國中社會會再學到：戰後的人權運動（美國民權運動是延伸）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g3', near: 'g5' },
      back: [
        { k: 'v7e2_memorial', x: 620, y: 900, W: 300, H: 170 },
        { k: 'v7e2_hold', t: '要自由', f: 'gold', x: 120, y: 940, s: 1.6 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'wide2', panels: [
        { scene: 'ballCourt', sceneOpt: { back: 'school', floor: 'g5', hoop: .84 }, shot: '中景：學校籃球場，六年級學長說籃球隊不收女生，小禾很生氣，阿凱站在學長那邊',
          actors: [
            { c: 'he', x: 150, y: 450, s: 1.05, pose: 'fists', expr: 'mad', look: .6 },
            { c: 'kai', x: 440, y: 444, s: 1, pose: 'hold', expr: 'worry', flip: 1, look: .6, sweat: 1 },
            { c: 'v7e2_senior', x: 610, y: 440, s: 1.02, pose: 'arg', expr: 'smug', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '為什麼？\n我投籃比你們準！', x: 24, y: 30, w: 250, kind: 'shout', fs: 24, tail: [150, 262] },
            { t: '籃球隊只收男生，\n隊規寫的。', x: 470, y: 20, w: 270, tail: [604, 246] },
            { t: '呃……規則\n就是這樣啊。', x: 290, y: 130, w: 180, fs: 24, tail: [436, 262] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 430 } },
        { scene: 'land', sceneOpt: { sky: 'paper2', sun: false, hz: .5, far: false, ground: 'g3' }, shot: '小格：福利社旁邊的搖搖車，小禾氣得自己投了 10 元，阿凱追過來',
          back: [
            { k: 'house', x: 150, y: 278, W: 240, H: 150, roof: 'flat', roofC: 'g7', f: 'cream' },
            { k: 'sign', t: '福利社', x: 150, y: 210, W: 120, H: 40, fs: 22, s: .8 },
            { k: 'car', x: 140, y: 470, s: .55 }
          ],
          actors: [
            { c: 'kai', x: 54, y: 546, s: .72, pose: 'run', expr: 'yell', look: .5 },
            { c: 'he', x: 250, y: 520, s: .9, pose: 'offer', expr: 'mad', flip: 1, look: -.3 }
          ],
          bubbles: [
            { t: '我自己去找\n改規則的方法！', x: 14, y: 20, w: 274, kind: 'shout', fs: 23, tail: [240, 350] },
            { t: '小禾，等我！', x: 14, y: 300, w: 170, fs: 22, tail: [60, 410] }
          ],
          sfx: [{ t: '叮！', x: 140, y: 372, fs: 34, rot: 8 }] },
        { scene: 'vortex', sceneOpt: { year: '1963', carS: 1.1, cy: .4 }, shot: '特寫：搖搖車衝進時光隧道，隧道裡浮出「1963」',
          actors: [{ c: 'kai', x: 380, y: 700, s: 1.5, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '倒轉了！\n停在 1963！', x: 14, y: 430, w: 210, fs: 25, tail: [230, 470] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#D6E2D8', sun: [.14, .12], hz: .42, far: false, ground: 'g3', near: 'paper3' }, shot: '滿版遠景：1963 年 8 月 28 日，林肯紀念堂前的倒影池兩邊擠滿了人，舉著牌子',
          back: [
            { k: 'v7e2_memorial', x: 390, y: 440, W: 540, H: 250 },
            { k: 'crowd', x: 390, y: 500, n: 18, W: 760, s: .6, op: .55 },
            { k: 'v7e2_pool', x: 390, y: 560, W: 520, H: 46 },
            { k: 'crowd', x: 390, y: 640, n: 16, W: 780, s: .85, op: .7, seed: 4 },
            { k: 'v7e2_hold', t: '要工作', x: 150, y: 640, s: 1.3 },
            { k: 'v7e2_hold', t: '要自由', f: 'gold', x: 400, y: 660, s: 1.3 },
            { k: 'v7e2_hold', t: '平等', f: 'g3', x: 640, y: 650, s: 1.3 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '1963 年 8 月 28 日，華盛頓', en: 'WASHINGTON, D.C. · 28 AUG 1963', x: 0, y: 18 },
            { t: '華盛頓是美國的首都。超過 20 萬人從全國各地來，聚在林肯紀念堂前面。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：華盛頓。\n免費附贈翻譯功能。', x: 14, y: 716, w: 316, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好多人！\n是演唱會嗎？', x: 340, y: 664, w: 190, tail: [462, 770], fs: 24 },
            { t: '牌子上寫：\n要工作、要自由。', x: 544, y: 712, w: 230, tail: [618, 810], fs: 23 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sky: '#D6E2D8', sun: false, hz: .3, far: false, ground: 'g3' }, shot: '中景：阿凱想擠到前面，一腳踩在瑪雅放在草地上的牌子上',
          back: [{ k: 'crowd', x: 390, y: 200, n: 14, W: 780, s: .8, op: .45 }, { k: 'v7e2_signFlat', x: 330, y: 456 }],
          actors: [
            { c: 'he', x: 110, y: 452, s: .95, pose: 'scared', expr: 'worry', look: .6 },
            { c: 'kai', x: 300, y: 468, s: 1, pose: 'run', expr: 'shock', look: .4 },
            { c: 'v7e2_maya', x: 580, y: 450, s: 1.05, pose: 'fists', expr: 'yell', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '讓一讓！\n我要擠到前面！', x: 170, y: 18, w: 236, fs: 24, tail: [320, 250] },
            { t: '那是我自己\n畫的牌子！', x: 480, y: 30, w: 236, kind: 'shout', fs: 25, tail: [574, 262] },
            { t: '對不起！\n他平常就這樣……', x: 10, y: 150, w: 216, fs: 22, tail: [104, 280] }
          ],
          sfx: [{ t: '啪！', x: 380, y: 360, fs: 52, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：瑪雅抱著有腳印的牌子，自我介紹',
          actors: [{ c: 'v7e2_maya', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'smug', hold: 'v7e2_signFoot', look: -.2 }],
          bubbles: [{ t: '我們坐了一整晚的巴士，\n從南方的阿拉巴馬州來。', x: 12, y: 60, w: 278, fs: 22, tail: [150, 300] }],
          tag: { t: '從南方來的小孩：瑪雅（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '中景：瑪雅說家鄉的規定，背景是一台公車',
          back: [{ k: 'v7e2_bus', x: 236, y: 300, s: .95 }],
          actors: [
            { c: 'v7e2_maya', x: 96, y: 540, s: 1.08, pose: 'point', expr: 'worry', look: .4 },
            { c: 'he', x: 370, y: 540, s: 1.1, pose: 'hold', expr: 'shock', hold: 'notebook', flip: 1, look: .4 }
          ],
          caption: [{ t: '1950 年代，美國南方的規定：', x: 0, y: 12 }],
          bubbles: [
            { t: '公車、學校、餐廳，\n黑人白人都要分開。', x: 12, y: 76, w: 250, fs: 21, tail: [100, 330] },
            { t: '這種規則\n誰定的啊？', x: 280, y: 160, w: 172, fs: 22, tail: [366, 336] }
          ] }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'v7e2_busIn', shot: '大格：倒帶到 1955 年蒙哥馬利的公車上，羅莎・帕克斯安靜地坐著不讓座',
          actors: [
            { c: 'v7e2_parks', x: 92, y: 576, s: 1.1, pose: 'sit', expr: 'calm', look: .3, noShadow: true },
            { c: 'kai', x: 300, y: 1030, s: 1.15, pose: 'scared', expr: 'shock', look: -.4 },
            { c: 'he', x: 420, y: 1034, s: 1.1, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .3 }
          ],
          caption: [
            { t: '1955 年 12 月 1 日，蒙哥馬利', en: 'MONTGOMERY · 1 DEC 1955', x: 0, y: 14 },
            { t: '司機要羅莎・帕克斯把座位讓給白人乘客。她不肯，結果被警察帶走。', x: 0, y: 104, w: 330, dark: false }
          ],
          bubbles: [
            { t: '嗶——倒帶到 1955。', x: 160, y: 650, w: 250, kind: 'car', fs: 22 },
            { t: '我不是累了，\n是受夠了一直讓步。', x: 190, y: 360, w: 270, fs: 23, tail: [130, 452] },
            { t: '她好勇敢……', x: 230, y: 728, w: 200, fs: 23, tail: [300, 800] }
          ],
          tag: { t: '羅莎・帕克斯的話：改編自她後來的說法', left: 8, top: 596 } },
        { scene: 'land', sceneOpt: { sky: '#E8DCC0', sun: [.8, .14], hz: .55, far: false, ground: 'paper3' }, shot: '小格：大家改成走路上班，瑪雅的媽媽也在走',
          back: [{ k: 'crowd', x: 133, y: 300, n: 6, W: 250, s: .7, op: .5 }],
          actors: [{ c: 'v7e2_mom', x: 130, y: 500, s: .95, pose: 'walk', expr: 'smug', look: .4 }],
          caption: [{ t: '不坐公車！\n大家走路上班，\n走了 381 天。', x: 0, y: 12, w: 240 }],
          bubbles: [{ t: '寧可走路，\n也不坐不公平\n的公車。', x: 60, y: 140, w: 196, fs: 21, tail: [150, 300] }] },
        { scene: 'flat', sceneOpt: { c: 'g7' }, shot: '字卡：1956 年，最高法院判決',
          cards: [{ icon: 'scale', y: 40, x: 10, w: 246, t: '1956 年，\n美國最高法院\n判定：公車上\n依膚色分開坐，\n違反憲法。' }],
          bubbles: [{ t: '規則，\n真的改了！', x: 40, y: 370, w: 186, fs: 25 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#D6E2D8', sun: [.86, .1], hz: .6, far: false, ground: 'paper3', near: 'g3' }, shot: '滿版：回到 1963 年，金恩博士站在林肯紀念堂前演講，台下的人安靜聽',
          back: [
            { k: 'v7e2_memorial', x: 390, y: 600, W: 760, H: 380 },
            { k: 'crowd', x: 390, y: 780, n: 18, W: 780, s: 1, op: .55, seed: 7 }
          ],
          props: [{ k: 'v7e2_podium', x: 322, y: 650 }],
          actors: [
            { c: 'v7e2_king', x: 330, y: 640, s: 1, pose: 'raise', expr: 'calm', look: .4 },
            { c: 'v7e2_maya', x: 120, y: 1026, s: 1.3, pose: 'hold', expr: 'awe', hold: 'v7e2_signFoot', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'stand', expr: 'awe', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: 1 }
          ],
          caption: [{ t: '金恩博士在林肯紀念堂前演講', en: 'I HAVE A DREAM · 1963', x: 0, y: 18 }],
          bubbles: [
            { t: '我夢想有一天，我的孩子\n不是被膚色評斷，\n而是被品格評斷。', x: 400, y: 150, w: 360, fs: 24, tail: [346, 410] },
            { t: '不用拳頭，\n也能讓規則改變。', x: 14, y: 600, w: 236, fs: 23, tail: [130, 780] },
            { t: '……大家都\n安靜下來了。', x: 286, y: 640, w: 190, fs: 23, tail: [452, 770] },
            { t: '他說「一起」，\n不是說「打回去」。', x: 520, y: 600, w: 250, fs: 22, tail: [650, 780] }
          ],
          tag: { t: '金恩博士的話：改編自〈我有一個夢〉演講', left: 10, top: 100 } }
      ] },
      { layout: 'strip', panels: [
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '矮寬格：後來改變了什麼（美國的法律、南非的曼德拉），小禾在旁邊記筆記',
          actors: [{ c: 'he', x: 700, y: 392, s: .9, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .3 }],
          caption: [
            { t: '後來呢？', x: 0, y: 12 },
            { t: '1964 年《民權法》：學校、公園、游泳池這些地方，不能再因為膚色把人分開。1965 年《投票權法》保護大家投票的權利。', x: 16, y: 74, w: 600, dark: false },
            { t: '非洲的南非也有依膚色分開的制度。曼德拉坐牢 27 年，1990 年出獄；1994 年南非第一次讓所有人投票，他當選總統。', x: 16, y: 226, w: 600, dark: false }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: false, ground: 'g3', near: 'g5' }, shot: '收尾大格：傍晚的倒影池邊，跟瑪雅道別，準備出發',
          back: [
            { k: 'v7e2_pool', x: 390, y: 360, W: 760, H: 40 },
            { k: 'car', x: 690, y: 600, s: .75 }
          ],
          actors: [
            { c: 'v7e2_maya', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'grin', hold: 'v7e2_signFoot', look: .6 },
            { c: 'kai', x: 290, y: 570, s: 1.2, pose: 'raise', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '回去以後，\n你們也去\n改規則吧！', x: 14, y: 150, w: 190, fs: 23, tail: [110, 340] },
            { t: '我要寫連署書，\n請大家一起簽！', x: 392, y: 150, w: 222, fs: 22, tail: [474, 380] },
            { t: '我……\n我第一個簽！', x: 206, y: 214, w: 176, fs: 22, tail: [290, 340] },
            { t: '嗶嗶——\n下一站，\n月球？！', x: 620, y: 140, w: 146, kind: 'car', fs: 22, tail: [690, 492] }
          ],
          caption: [{ t: '下一話：人類的一小步', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '把人分開的規定', t: '1950 年代，美國南方很多地方規定公車、學校、餐廳裡，黑人和白人要分開。這叫種族隔離。' },
      { h: '蒙哥馬利不坐公車', t: '1955 年 12 月 1 日，羅莎・帕克斯不肯讓座給白人乘客而被捕。大家改走路，381 天不坐公車；1956 年最高法院判定公車上分開坐違反憲法。' },
      { h: '〈我有一個夢〉', t: '1963 年 8 月 28 日，超過 20 萬人來到華盛頓的林肯紀念堂前遊行，要工作、要自由。金恩博士說，他夢想孩子們不再因為膚色被評斷。' },
      { h: '法律改了', t: '1964 年《民權法》讓學校、公園、游泳池不能再依膚色分開；1965 年《投票權法》保護大家投票的權利。他們用的是不打人的方法：遊行、抵制、上法院。' },
      { h: '南非的曼德拉', t: '南非也有依膚色分開的制度。曼德拉坐牢 27 年，1990 年出獄；1994 年南非第一次讓所有人都能投票，他當選總統。' }
    ],
    map: {
      world: 1,
      bounds: { lon: [-102, -62], lat: [24, 46] },
      cap: '紅點是華盛頓（美國首都），蒙哥馬利在南方的阿拉巴馬州。海岸線是簡化的畫法。',
      alt: '美國東部地圖：華盛頓在東邊海岸附近（紅點），蒙哥馬利在西南方，右邊是大西洋',
      labels: [
        { t: '美國', lat: 39.5, lon: -92, size: 30, f: 'g9' },
        { t: '大西洋', lat: 31, lon: -70, size: 22, f: 'cream' },
        { t: '阿拉巴馬州', lat: 30.9, lon: -88.4, size: 18, f: 'wood' }
      ],
      cities: [
        { n: '華盛頓', lat: 38.9, lon: -77.04, main: 1, side: 'l' },
        { n: '蒙哥馬利', lat: 32.37, lon: -86.3, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從蒙哥馬利的公車到曼德拉當選總統，走了將近 40 年。',
      items: [
        { y: 1955, when: '西元 1955 年', t: '蒙哥馬利的人\n不坐公車', side: 'u', w: 170 },
        { y: 1963, when: '西元 1963 年', t: '華盛頓大遊行\n〈我有一個夢〉', side: 'd', main: 1, w: 180 },
        { y: 1990, when: '西元 1990 年', t: '曼德拉\n出獄', side: 'u', w: 150 },
        { y: 1994, when: '西元 1994 年', t: '曼德拉\n當選南非總統', side: 'd', w: 170 },
        { y: 2026, when: '今天', t: '還在學\n怎麼公平', side: 'u', w: 140 }
      ]
    },
    sources: [
      '史丹佛大學金恩研究所〈March on Washington for Jobs and Freedom〉（1963 年 8 月 28 日、林肯紀念堂前、超過 20 萬人、〈我有一個夢〉、之後的 1964 年《民權法》與 1965 年《投票權法》）',
      '美國國家公園署 NPS〈March on Washington〉（估計約 25 萬人，從林肯紀念堂一路到華盛頓紀念碑）',
      '史丹佛大學金恩研究所〈Montgomery Bus Boycott〉〈Parks, Rosa〉〈Civil Rights Act of 1964〉（1955 年 12 月 1 日被捕、抵制到 1956 年 12 月 20 日共 381 天、1956 年 11 月最高法院判決；帕克斯說她不是身體累，是厭倦一直讓步；《民權法》讓學校、公園、游泳池等公共設施不能隔離）',
      '南非政府新聞網 SAnews〈Mandela released from prison〉（1990 年 2 月 11 日出獄、坐牢 27 年、1994 年 4 月 27 日第一次民主選舉）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1963 年，金恩博士在哪裡發表〈我有一個夢〉演講？', opts: ['林肯紀念堂前', '白宮的屋頂上', '蒙哥馬利的公車上', '柏林圍牆旁邊'], a: 0, why: '1963 年 8 月 28 日，超過 20 萬人聚在華盛頓的林肯紀念堂前，金恩博士在那裡演講。' },
      { id: 'q2', d: 1, type: 'tf', q: '羅莎・帕克斯在公車上不肯讓座以後，蒙哥馬利很多人一起不坐公車，抵制了一年多。', a: true, why: '對！從 1955 年 12 月到 1956 年 12 月，一共 381 天。' },
      { id: 'q3', d: 2, type: 'mc', q: '蒙哥馬利的人用什麼方法，讓公車的規定改變？', opts: ['大家一起不坐公車', '把全城的公車推倒', '請國王下命令改', '全部搬去別的國家'], a: 0, why: '大家改走路、381 天不坐公車，也上法院爭取；1956 年最高法院判定公車上分開坐違反憲法。' },
      { id: 'q4', d: 2, type: 'match', q: '把人物和他做的事配成一對。', pairs: [['羅莎・帕克斯', '在公車上不肯讓座'], ['金恩博士', '發表〈我有一個夢〉'], ['曼德拉', '坐牢 27 年後當選總統']], why: '帕克斯不讓座（1955）；金恩博士在華盛頓演講（1963）；曼德拉 1990 年出獄、1994 年當選南非總統。' },
      { id: 'q5', d: 3, type: 'mc', q: '小美說：「規則是大人定的，小孩只能乖乖遵守，永遠改不了。」根據這一話，哪個說法最正確？', opts: ['不對，大家一起和平爭取，規則改了', '對，那些公車的規定到今天都還沒有改', '不對，只要打架打贏就能改規則', '對，美國的法律只有總統一個人能改'], a: 0, why: '蒙哥馬利的人用不坐公車、遊行、上法院這些不打人的方法，讓不公平的規定改掉了。規則改得動，但要大家一起、用對的方法。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
