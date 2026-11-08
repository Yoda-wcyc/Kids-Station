/* 世界史漫畫 第 3 冊 中古世界・第 1 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：隋唐時期的民族與文化交流。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, path, txt, both, prop, groundShadow, place } = K;
    // 攤子：遮雨棚＋櫃台＋貨品；t＝招牌字
    const stall = (x, y, W, t, f, goods) => {
      let s = groundShadow(x, y + 3, W * .6, 8) + both(rect(x - W / 2, y - 70, W, 70, C.wood, 3), 'cm-warm');
      for (let i = 0; i < 5; i++) s += circ(x - W * .36 + i * W * .18, y - 76, W * .07, goods[i % goods.length]);
      s += rect(x - W / 2 + 6, y - 190, 8, 120, C.wood) + rect(x + W / 2 - 14, y - 190, 8, 120, C.wood);
      for (let i = 0; i < 6; i++) s += rect(x - W / 2 - 12 + i * (W + 24) / 6, y - 214, (W + 24) / 6, 34, i % 2 ? C.cream : f);
      s += path(`M${x - W / 2 - 12} ${y - 180} q${(W + 24) / 12} 18 ${(W + 24) / 6} 0 t${(W + 24) / 6} 0 t${(W + 24) / 6} 0 t${(W + 24) / 6} 0 t${(W + 24) / 6} 0 t${(W + 24) / 6} 0Z`, f);
      if (t) s += rect(x - t.length * 14 - 10, y - 262, t.length * 28 + 20, 40, C.cream, 6) + txt(x, y - 233, t, 26, C.ink);
      return s;
    };
    root.ComicArt.extend({
      scenes: {
        // 長安城外：城牆、城門樓、大路、駱駝隊
        v3e1_city(w, h) {
          const hz = h * .5;
          let s = rect(0, 0, w, h, C.sky) + circ(w * .8, h * .1, 200, 'url(#cm-sun)') + circ(w * .8, h * .1, 46, '#FFF8DC');
          s += path(`M0 ${hz - 60} Q${w * .3} ${hz - 110} ${w * .6} ${hz - 70} T${w} ${hz - 80} L${w} ${hz} L0 ${hz}Z`, C.g3);
          s += rect(0, hz, w, h - hz, C.sand);
          s += prop({ k: 'wall', x: w / 2, y: hz + 10, W: w, H: 120, gate: 90, crenel: false, f: 'brick', seed: 4 });
          s += prop({ k: 'hall', x: w / 2, y: hz - 106, W: 300, H: 150, n: 6, base: 'brick2' });
          s += prop({ k: 'hall', x: w * .12, y: hz - 106, W: 140, H: 90, n: 3, base: 'brick2' }) + prop({ k: 'hall', x: w * .88, y: hz - 106, W: 140, H: 90, n: 3, base: 'brick2' });
          s += path(`M${w / 2 - 46} ${hz + 10} L${w / 2 + 46} ${hz + 10} L${w * .86} ${h} L${w * .14} ${h}Z`, C.paper3);
          return { bg: s };
        },
        // 西市：一整排攤子
        v3e1_market(w, h) {
          const hz = h * .5;
          let s = rect(0, 0, w, h, C.sky) + circ(w * .14, h * .07, 160, 'url(#cm-sun)');
          s += prop({ k: 'hall', x: w * .5, y: hz - 160, W: 260, H: 130, n: 5, base: 'brick2' });
          s += rect(0, hz - 170, w, 60, C.brick3) + rect(0, hz - 112, w, h - hz + 112, C.sand);
          s += stall(w * .16, hz + 30, 210, '波斯寶石', C.blue, [C.red, C.g5, C.gold]);
          s += stall(w * .5, hz + 30, 210, '香料', C.red, [C.clay2, C.gold, C.clay]);
          s += stall(w * .84, hz + 30, 210, '絲綢', C.g7, [C.purple, C.cream, C.red]);
          s += path(`M0 ${h * .9} Q${w * .5} ${h * .86} ${w} ${h * .9} L${w} ${h} L0 ${h}Z`, C.brick3);
          return { bg: s };
        }
      },
      props: {
        v3e1_stall: x => place(x, stall(0, 0, x.W || 220, x.t, (x.f && C[x.f]) || C.red, [C.gold, C.clay2, C.clay3]))
      },
      holds: {
        v3e1_bing: () => circ(0, -4, 14, C.gold) + circ(0, -4, 10, '#DDBB5F') + circ(-4, -7, 1.6, C.wood) + circ(3, -2, 1.6, C.wood) + circ(4, -9, 1.6, C.wood),
        v3e1_dice: () => rect(-9, -13, 18, 18, C.cream, 3) + circ(-4, -8, 1.8, C.red) + circ(4, 0, 1.8, C.ink) + circ(0, -4, 1.8, C.ink),
        v3e1_eraser: () => rect(-12, -10, 24, 14, C.cream, 2) + rect(-12, -10, 9, 14, C.blue, 2)
      },
      cast: {
        v3e1_ana: { name: '阿娜（虛構）', skin: 'skin', top: 'red', bottom: 'g7', leg: 'g7', shoe: 'wood', hair: 'long', hairC: 'wood', hat: 'cone', hatC: 'gold', r: 22, k: .94 },
        v3e1_abe: { name: '阿倍仲麻呂（晁衡）', real: 1, skin: 'skin', robe: 'g7', trim: 'gold', hair: 'man', hat: 'capCN', beard: 1, r: 19, k: 1.16 },
        v3e1_sogd: { name: '粟特商人', skin: 'skin', robe: 'clay3', trim: 'red', hair: 'man', hat: 'cone', hatC: 'red', beard: 2, r: 19, k: 1.14 },
        v3e1_pers: { name: '波斯珠寶商', skin: 'skinB', robe: 'blue', trim: 'gold', hair: 'man', hat: 'softCap', hatC: 'cream', beard: 2, r: 19, k: 1.12 },
        v3e1_cook: { name: '長安的小販', skin: 'skin', top: 'g5', bottom: 'wood', leg: 'wood', hair: 'topknot', r: 19, k: 1.08 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v3e1 = {
    id: 'v3e1', vol: '第 3 冊 中古世界', volNo: 3, ep: 1, title: '長安城的外國朋友', next: '智慧宮的翻譯官',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說明天要請轉學生吃胡餅（他還不知道去哪裡買）。',
    note: '阿凱、小禾、阿娜和市場裡的商人是虛構的角色；阿倍仲麻呂的話是根據史書記載的生平改編，不是他的原話，他的樣子是想像圖。長安城門、西市的攤子也是想像圖。長安有多少人，學者的估計不完全一樣，這裡寫的是常見的「大約一百萬」。',
    curriculum: '國中社會會再學到：隋唐時期的民族與文化交流',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'sand' },
      back: [
        { k: 'hall', x: 130, y: 900, W: 230, H: 160, n: 4, base: 'brick2' },
        { k: 'camel', x: 650, y: 950, s: .9, load: 'gold' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'classroom', sceneOpt: { board: '歡迎新同學！', fs: 34, hz: .82, floor: 'g3', desks: false }, shot: '中景：放學前的教室，黑板寫著「歡迎新同學」',
          actors: [
            { c: 'kai', x: 160, y: 330, s: 1, pose: 'think', expr: 'worry', look: .4, sweat: 1 },
            { c: 'he', x: 640, y: 332, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '明天有轉學生！\n聽不懂他說話怎麼辦？', x: 14, y: 8, w: 310, fs: 24, tail: [170, 112] },
            { t: '你先想好\n自我介紹吧。', x: 520, y: 24, w: 210, tail: [630, 134] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'schoolGate', shot: '大格：校門口文具店前的搖搖車，阿凱一屁股坐上去',
          back: [{ k: 'car', x: 300, y: 600, s: .9 }],
          actors: [
            { c: 'kai', x: 286, y: 540, s: 1, pose: 'ride', expr: 'grin', noShadow: true, look: .4 },
            { c: 'he', x: 100, y: 676, s: 1.2, pose: 'point', expr: 'shout', look: .6 }
          ],
          bubbles: [
            { t: '我先坐搖搖車\n去練習交朋友！', x: 236, y: 140, w: 270, tail: [300, 300] },
            { t: '搖搖車又不會\n說外國話！', x: 14, y: 300, w: 216, tail: [100, 410] }
          ],
          sfx: [{ t: '叮！', x: 420, y: 480, fs: 60, rot: 10 }] },
        { scene: 'coin', sceneOpt: { year: '740', era: '西元' }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 740',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！倒轉到\n西元 740 年！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e1_city', shot: '滿版遠景：長安的城牆與城門樓，駱駝隊從大路走進城',
          back: [
            { k: 'camel', x: 610, y: 640, s: .8, load: 'gold' },
            { k: 'camel', x: 720, y: 660, s: .7, load: 'clay2' },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v3e1_sogd', x: 520, y: 652, s: .8, pose: 'walk', expr: 'calm', flip: 1 },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 1300 年前，唐朝的長安城', en: "CHANG'AN · c. AD 740", x: 0, y: 18 },
            { t: '長安就是今天的西安。城裡大約住了一百萬人，可能是當時世界上人最多的城市。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：唐朝長安。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '城門好大！\n路好寬！', x: 348, y: 652, w: 196, tail: [462, 748] },
            { t: '那些駱駝\n從哪裡來？', x: 570, y: 700, w: 196, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .55, far: 'g3', ground: 'sand' }, shot: '中景：西市的胡餅攤，阿凱拿起餅就咬',
          back: [{ k: 'v3e1_stall', x: 610, y: 300, W: 240, t: '胡餅', f: 'gold' }],
          actors: [
            { c: 'he', x: 80, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 230, y: 436, s: 1.05, pose: 'eat', expr: 'chew', hold: 'v3e1_bing', look: .4 },
            { c: 'v3e1_ana', x: 600, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '好香！\n我先吃一個！', x: 96, y: 40, w: 220, tail: [222, 240] },
            { t: '要付錢啦！！\n那是我家的胡餅！', x: 380, y: 26, w: 290, kind: 'shout', fs: 25, tail: [586, 250] }
          ],
          sfx: [{ t: '咔滋！', x: 330, y: 220, fs: 44, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：阿娜叉腰自我介紹',
          actors: [{ c: 'v3e1_ana', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'smug', look: -.2 }],
          bubbles: [{ t: '我叫阿娜！\n爸爸從撒馬爾罕\n來長安做生意。', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '粟特商人的女兒：阿娜（虛構）', left: 8 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g3', ground: 'sand' }, shot: '中景：阿娜跟路過的商人用不同的話打招呼，阿凱傻眼',
          actors: [
            { c: 'kai', x: 90, y: 545, s: 1, pose: 'scared', expr: 'shock', sweat: 2, look: .6 },
            { c: 'v3e1_ana', x: 250, y: 524, s: 1, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'v3e1_pers', x: 390, y: 520, s: .95, pose: 'wave', expr: 'happy', flip: 1 }
          ],
          caption: [{ t: '粟特人從中亞來，絲路上的\n大生意，很多是他們在做。', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '我會說粟特話、\n漢語和波斯話！', x: 160, y: 124, w: 230, fs: 23, tail: [258, 330] },
            { t: '我只會說\n國語和台語……', x: 8, y: 240, w: 200, fs: 22, tail: [84, 334] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e1_market', shot: '滿版：西市一整排攤子，波斯珠寶、香料、絲綢，各地的商人來來去去',
          back: [
            { k: 'crowd', x: 400, y: 600, n: 12, W: 760, s: .8, op: .5 },
            { k: 'camel', x: 700, y: 650, s: .8, load: 'clay2' }
          ],
          actors: [
            { c: 'v3e1_pers', x: 170, y: 650, s: .85, pose: 'offer', expr: 'happy', hold: 'shell' },
            { c: 'v3e1_cook', x: 400, y: 652, s: .85, pose: 'carry', expr: 'calm', hold: 'sack' },
            { c: 'v3e1_sogd', x: 560, y: 650, s: .85, pose: 'point', expr: 'grin', flip: 1 },
            { c: 'v3e1_ana', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'awe', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '西市靠近絲路的起點，\n波斯、大食、粟特來的商人最多。', x: 16, y: 16, w: 440 },
            { t: '東市在城的東邊，有兩百多種行業，多半賣城裡的人每天要用的東西。', x: 16, y: 128, w: 400, dark: false }
          ],
          bubbles: [
            { t: '波斯的寶石、\n西邊來的香料，\n這裡都買得到！', x: 14, y: 640, w: 236, fs: 24, tail: [140, 790] },
            { t: '好像夜市\n加上機場！', x: 286, y: 646, w: 200, fs: 24, tail: [440, 762] },
            { t: '絲路的那一頭，\n原來就連到\n這裡！', x: 552, y: 630, w: 214, fs: 24, tail: [646, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .62, far: false, ground: 'brick3' }, shot: '細長大格：穿著唐朝官服的阿倍仲麻呂走過來',
          back: [{ k: 'hall', x: 172, y: 650, W: 330, H: 200, n: 4, base: 'brick2' }],
          actors: [
            { c: 'v3e1_abe', x: 190, y: 1030, s: 1.55, pose: 'hold', expr: 'calm', hold: 'book', flip: 1, look: -.3 }
          ],
          caption: [{ t: '從日本來的\n阿倍仲麻呂，\n中文名字叫晁衡', x: 0, y: 14, w: 250 }],
          bubbles: [
            { t: '我十九歲搭遣唐使\n的船來長安讀書，\n後來考上了進士。', x: 14, y: 236, w: 300, fs: 23, tail: [196, 676] }
          ],
          tag: { t: '阿倍仲麻呂的話：改編自史書記載的生平', left: 8, top: 156 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：遣唐使、科舉、長安的城',
          caption: [{ t: '從各地來長安學習', x: 0, y: 16 }],
          cards: [
            { icon: 'ship', y: 80, t: '日本從 630 年到 838 年，\n派了十幾次「遣唐使」，\n來學法律和管理國家的方法。' },
            { icon: 'scrollI', y: 344, t: '從隋朝開始，用考試挑官員，\n叫「科舉」。唐朝最難考的\n一科，叫「進士」。' },
            { icon: 'road', y: 610, t: '長安的街道像棋盤一樣整齊；\n日本的奈良、京都，\n都學長安的樣子蓋城。' }
          ],
          bubbles: [{ t: '原來考試和城市，\n都能「出國留學」！', x: 34, y: 900, w: 354, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .6, far: 'g3', ground: 'sand' }, shot: '矮寬格：阿娜和阿凱交換禮物',
          back: [{ k: 'v3e1_stall', x: 700, y: 250, W: 160, t: '', f: 'gold', s: .8 }],
          actors: [
            { c: 'he', x: 120, y: 392, s: .92, pose: 'hold', expr: 'happy', hold: 'notebook', look: .8 },
            { c: 'kai', x: 300, y: 390, s: .95, pose: 'offer', expr: 'grin', hold: 'v3e1_eraser', look: .6 },
            { c: 'v3e1_ana', x: 470, y: 392, s: .95, pose: 'offer', expr: 'happy', hold: 'v3e1_dice', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '送你骰子！\n中亞的小孩都愛玩。', x: 470, y: 30, w: 250, fs: 23, tail: [478, 196] },
            { t: '那我送妳\n橡皮擦！', x: 196, y: 30, w: 180, fs: 23, tail: [300, 196] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的城門外，準備出發',
          back: [
            { k: 'wall', x: 390, y: 344, W: 780, H: 90, crenel: false, f: 'brick' },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v3e1_ana', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '下次換你\n教我說你的話！', x: 14, y: 150, w: 210, fs: 22, tail: [110, 300] },
            { t: '明天我要先跟\n轉學生說「你好」！', x: 236, y: 120, w: 260, fs: 22, tail: [284, 326] },
            { t: '不同的人，\n帶來新東西。', x: 504, y: 200, w: 180, fs: 22, tail: [480, 362] },
            { t: '嗶嗶——\n下一站，\n巴格達！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：智慧宮的翻譯官', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '國際大都市長安', t: '大約 1300 年前，唐朝的首都長安（今天的西安）大約住了一百萬人，可能是當時世界上人最多的城市。' },
      { h: '東市和西市', t: '長安有兩個大市場。西市靠近絲路，波斯、大食、粟特來的商人最多；東市有兩百多種行業，多半賣城裡的人每天要用的東西。' },
      { h: '遣唐使', t: '日本從 630 年到 838 年，派了十幾次遣唐使來唐朝學習。阿倍仲麻呂 717 年到長安讀書，考上進士，後來在唐朝當官。' },
      { h: '科舉', t: '從隋朝開始，用考試來挑選官員，叫「科舉」。唐朝最難考的一科叫「進士」。' },
      { h: '學長安蓋城', t: '日本的奈良（平城京）和京都（平安京），都是照長安的樣子規劃的。' }
    ],
    map: {
      bounds: { lon: [62, 142], lat: [20, 46] },
      cap: '紅點是長安。紅色虛線是大概的路線：往西是絲路，往東是遣唐使的航線（8 世紀以後，常從日本的五島直接渡海到揚州一帶）。路線是簡化的畫法，河道、海岸是今天的樣子。',
      alt: '唐朝時的東亞地圖：長安在中間偏左（紅點），往西有絲路通到撒馬爾罕，往東有航線從揚州過海到日本的奈良',
      rivers: ['yellow', 'yangtze'],
      routes: [
        { pts: [[34.27, 108.95], [36.06, 103.8], [40.14, 94.66], [42.95, 89.19], [39.47, 75.99], [39.65, 66.96]] },
        { pts: [[34.27, 108.95], [34.6, 112.45], [32.39, 119.42]], w: 3 },
        { pts: [[32.39, 119.42], [31.9, 123], [32.7, 128.6], [33.6, 130.3], [34.0, 132.2], [34.4, 134.4], [34.68, 135.8]] }
      ],
      labels: [
        { t: '唐朝', lat: 37.5, lon: 101, size: 30, f: 'g9' },
        { t: '絲路', lat: 43.2, lon: 82, size: 22, f: 'red' },
        { t: '日本', lat: 39.5, lon: 139, size: 22, f: 'wood' },
        { t: '黃河', lat: 41.6, lon: 110, size: 18, f: 'g7' },
        { t: '長江', lat: 27.4, lon: 110.5, size: 18, f: 'g7' }
      ],
      cities: [
        { n: '長安', lat: 34.27, lon: 108.95, main: 1, side: 'l' },
        { n: '揚州', lat: 32.39, lon: 119.42, side: 'l', dy: 24 },
        { n: '奈良', lat: 34.68, lon: 135.8, side: 'r', dy: 22 },
        { n: '撒馬爾罕', lat: 39.65, lon: 66.96, side: 'r', dy: 24 },
        { n: '敦煌', lat: 40.14, lon: 94.66, side: 'r', dy: -12 }
      ]
    },
    timeline: {
      cap: '這條時間軸只畫唐朝前面兩百多年，是照真正的年代長度畫的：阿倍仲麻呂在長安住了五十多年。',
      items: [
        { y: 618, when: '西元 618 年', t: '唐朝建立，\n首都在長安', side: 'u', w: 170 },
        { y: 630, when: '西元 630 年', t: '日本第一次\n派遣唐使', side: 'd', w: 170 },
        { y: 717, when: '西元 717 年', t: '阿倍仲麻呂\n到長安讀書', side: 'u', w: 180 },
        { y: 740, when: '約西元 740 年', t: '長安：大約\n一百萬人的大城', side: 'd', main: 1, w: 200 },
        { y: 838, when: '西元 838 年', t: '最後一次出發\n的遣唐使', side: 'u', w: 180 }
      ]
    },
    sources: [
      '香港教育局〈中國歷史・文物〉第 8 章「唐代長安」（長安人口約一百萬、面積約 84 平方公里；618 年定名長安為首都；東市 220 行、西市靠近絲路，波斯、大食、粟特商人最多；西市遺址出土骰子，是中亞流行的玩具；日本京城仿長安）',
      '華盛頓大學 Silk Road Seattle〈Xi\'an（Chang\'an）〉（8 世紀中長安約 84 平方公里、約一百萬人；粟特商人在唐初最活躍，來自今撒馬爾罕一帶）',
      '日本國土交通省多語解說資料庫〈Japanese Missions to Tang China〉（630～838 年派出 19 次遣唐使、學習法律與制度，平城京和平安京仿長安規劃；702 年後從五島直航到揚州）',
      '中國社會科學院呂文利〈阿倍仲麻呂，在大唐做官半世紀〉（《環球人物》2015 年 8 月，人民網）（698～770 年；717 年到長安、入國子監太學、考上進士；王維、李白為他寫詩）',
      '哥倫比亞大學 Asia for Educators〈Song Dynasty China〉（從隋朝開始用筆試選官員）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '唐朝的首都長安，就是今天的哪個城市？', opts: ['西安', '北京', '南京', '臺北'], a: 0, why: '唐朝的長安城，就在今天中國陝西省的西安。' },
      { id: 'q2', d: 1, type: 'tf', q: '長安的西市靠近絲路，有很多從波斯、中亞來的商人。', a: true, why: '對！西市離絲路的起點比較近，波斯、大食、粟特的商人最多。' },
      { id: 'q3', d: 2, type: 'mc', q: '阿倍仲麻呂是從哪裡來長安讀書的？', opts: ['日本', '波斯', '撒馬爾罕', '羅馬'], a: 0, why: '阿倍仲麻呂是日本人，717 年跟著遣唐使來長安讀書，後來考上進士、在唐朝當官。' },
      { id: 'q4', d: 2, type: 'match', q: '把左右兩邊配起來。', pairs: [['遣唐使', '日本派來唐朝學習的使節'], ['科舉', '用考試挑選官員'], ['西市', '外國商人最多的市場'], ['粟特人', '從中亞來、在絲路上做生意']], why: '遣唐使來學習、科舉用考試選官員、西市外國商人最多，粟特人是絲路上的大商人。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「長安會那麼熱鬧，是因為唐朝不讓外國人進來。」根據這一話，哪個說法最正確？', opts: ['不對，很多外國人在長安做生意、讀書', '對，唐朝規定外國人只能住在城外面的帳篷', '對，外國商人只能在海邊做生意，不能進長安', '不對，長安只是一個很小、很安靜的村子'], a: 0, why: '長安有粟特、波斯來的商人，也有日本來的留學生，甚至有人在唐朝當官。不同的人帶來新的東西，城市才那麼熱鬧。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
