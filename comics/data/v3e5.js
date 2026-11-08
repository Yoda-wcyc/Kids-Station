/* 世界史漫畫 第 3 冊 中古世界・第 5 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：蒙古帝國與元朝的國際互動。格式：comics/CONTRACT.md
   戰爭：蒙古擴張只講原因與影響，不畫打仗、不畫城被攻破的樣子。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, path, poly, txt, both, prop, place, groundShadow, cap } = K;
    const ger = (x, y, W, f) => groundShadow(x, y + 3, W * .62, 8) + both(rect(x - W / 2, y - W * .45, W, W * .45, f || C.cream, 4)) + path(`M${x - W / 2 - 6} ${y - W * .44} Q${x} ${y - W * .9} ${x + W / 2 + 6} ${y - W * .44}Z`, f || C.cream) + rect(x - W / 2, y - W * .3, W, 6, C.red) + rect(x - W * .1, y - W * .3, W * .2, W * .3, C.red, 2) + circ(x, y - W * .78, 6, C.wood);
    root.ComicArt.extend({
      scenes: {
        // 現代：山上的露營區
        v3e5_camp(w, h) {
          const hz = h * .56;
          let s = rect(0, 0, w, h, C.sky) + circ(w * .84, h * .12, 130, 'url(#cm-sun)');
          s += path(`M0 ${hz} L${w * .18} ${hz - h * .3} L${w * .36} ${hz - h * .08} L${w * .56} ${hz - h * .36} L${w * .78} ${hz - h * .1} L${w} ${hz - h * .26} L${w} ${hz}Z`, C.g5);
          s += rect(0, hz, w, h - hz, C.g3);
          s += prop({ k: 'tree', kind: 'pine', x: w * .05, y: hz + 20, H: 180 }) + prop({ k: 'tree', kind: 'pine', x: w * .95, y: hz + 30, H: 200 });
          return { bg: s };
        },
        // 草原：蒙古包、遠處的城牆
        v3e5_steppe(w, h) {
          const hz = h * .5;
          let s = rect(0, 0, w, h, '#C9DCE0') + circ(w * .8, h * .1, 200, 'url(#cm-sun)') + circ(w * .8, h * .1, 46, '#FFF8DC');
          s += path(`M0 ${hz} Q${w * .2} ${hz - 120} ${w * .45} ${hz - 60} T${w} ${hz - 90} L${w} ${hz} Z`, C.g5) + rect(0, hz, w, h - hz, C.g3);
          s += prop({ k: 'wall', x: w * .62, y: hz + 16, W: 380, H: 60, crenel: false, f: 'clay3', gate: 40 }) + prop({ k: 'hall', x: w * .62, y: hz - 44, W: 160, H: 100, n: 4, base: 'clay3' });
          s += ger(w * .14, hz + 70, 130) + ger(w * .3, hz + 50, 100, C.paper2) + ger(w * .9, hz + 70, 120);
          s += path(`M0 ${h * .88} Q${w * .5} ${h * .84} ${w} ${h * .88} L${w} ${h} L0 ${h}Z`, C.g5);
          return { bg: s };
        },
        // 哈拉和林城裡：泥牆、店、蒙古包混在一起
        v3e5_city(w, h) {
          const hz = h * .52;
          let s = rect(0, 0, w, h, '#C9DCE0') + rect(0, hz - 70, w, 70, C.clay3) + rect(0, hz - 76, w, 8, C.clay2) + rect(0, hz, w, h - hz, C.sand);
          s += prop({ k: 'hall', x: w * .2, y: hz - 60, W: 220, H: 130, n: 4, base: 'clay3' }) + prop({ k: 'dome', x: w * .52, y: hz - 60, W: 130, H: 130, domeC: 'g5' }) + ger(w * .82, hz - 2, 150);
          s += path(`M0 ${h * .9} Q${w * .5} ${h * .86} ${w} ${h * .9} L${w} ${h} L0 ${h}Z`, C.brick3);
          return { bg: s };
        },
        // 宮殿門口：銀樹
        v3e5_palace(w, h) {
          const hz = h * .7;
          let s = rect(0, 0, w, hz, C.brick3) + rect(0, 0, w, h * .05, C.red) + rect(0, h * .05, w, 10, C.gold);
          [.12, .88].forEach(p => { s += rect(w * p - 18, h * .05, 36, hz - h * .05, C.red) + rect(w * p - 24, hz - 20, 48, 20, C.gold); });
          s += rect(0, hz, w, h - hz, C.paper3) + rect(0, hz, w, 6, 'rgba(21,23,20,.15)');
          return { bg: s };
        },
        // 牌子特寫
        v3e5_paizaBg(w, h) {
          let s = rect(0, 0, w, h, C.g7) + circ(w / 2, h * .52, w * .5, 'url(#cm-glow)', 'opacity=".5"');
          s += both(rect(w / 2 - 60, h * .3, 120, 220, C.gold, 20)) + circ(w / 2, h * .3 + 24, 10, C.g7);
          for (let i = 0; i < 4; i++) s += rect(w / 2 - 6 + (i % 2 ? 14 : -14), h * .3 + 50 + i * 38, 12, 30, '#8C6E28', 4);
          return { bg: s };
        }
      },
      props: {
        v3e5_ger: x => place(x, ger(0, 0, x.W || 130, x.f ? C[x.f] : C.cream)),
        // 現代帳篷
        v3e5_tent: x => place(x, groundShadow(0, 3, 90, 9) + both(poly('-90,0 0,-110 90,0', x.f ? C[x.f] : C.gold)) + poly('-24,0 0,-60 24,0', C.ink)),
        // 迷你數字盤（投幣那一格用）
        v3e5_dial: x => place(x, circ(0, 0, 70, C.cream) + circ(0, 0, 58, C.ink) + txt(0, -18, '西元', 18, C.g3) + txt(0, 22, x.t || '1254', 34, C.cream)),
        // 巴黎金匠做的銀樹（照魯布魯克的描述畫的想像圖）
        v3e5_tree: x => {
          let s = groundShadow(0, 3, 120, 12) + rect(-90, -40, 180, 40, '#B8BEC0', 6);
          for (let i = 0; i < 4; i++) s += circ(-66 + i * 44, -54, 16, '#D7DCDD') + circ(-60 + i * 44, -58, 4, C.ink);
          s += rect(-14, -330, 28, 290, '#C6CBCC', 8) + cap(0, -250, -90, -320, 14, '#C6CBCC') + cap(0, -270, 90, -340, 14, '#C6CBCC') + cap(0, -300, -60, -380, 12, '#C6CBCC') + cap(0, -310, 60, -390, 12, '#C6CBCC');
          [[-90, -320], [90, -340], [-60, -380], [60, -390], [0, -350]].forEach(([a, b]) => { s += circ(a, b, 30, '#D7DCDD', 'opacity=".9"') + circ(a + 10, b + 10, 7, C.gold); });
          for (let i = 0; i < 4; i++) s += rect(-74 + i * 44, -22, 16, 22, '#E6E9EA', 3);
          return place(x, s);
        }
      },
      holds: {
        v3e5_paiza: () => rect(-10, -26, 20, 36, C.gold, 5) + circ(0, -20, 3, C.g7) + rect(-3, -12, 6, 16, '#8C6E28', 2)
      },
      cast: {
        v3e5_bat: { name: '巴特（虛構）', skin: 'skinB', robe: 'blue', trim: 'gold', hair: 'short', hat: 'band', hatC: 'red', r: 22, k: .94 },
        v3e5_rider: { name: '信差', skin: 'skinB', robe: 'red', trim: 'gold', hair: 'man', hat: 'softCap', hatC: 'clay2', beard: 1, r: 19, k: 1.12 },
        v3e5_rub: { name: '魯布魯克的威廉', real: 1, skin: 'skin', robe: 'wood', trim: 'clay2', hair: 'bald', hat: 'hood', hatC: 'wood', r: 19, k: 1.16 },
        v3e5_merch: { name: '中亞來的商人', skin: 'skinB', robe: 'g7', trim: 'gold', hair: 'man', hat: 'turban', hatC: 'cream', beard: 2, r: 19, k: 1.12 },
        v3e5_art: { name: '中國來的工匠', skin: 'skin', top: 'g5', bottom: 'wood', leg: 'wood', hair: 'topknot', r: 19, k: 1.08 },
        v3e5_herder: { name: '牧民', skin: 'skinB', robe: 'g7', trim: 'red', hair: 'man', hat: 'cone', hatC: 'gold', r: 19, k: 1.1 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v3e5 = {
    id: 'v3e5', vol: '第 3 冊 中古世界', volNo: 3, ep: 5, title: '馬背上的大帝國', next: '黃金國王去遠行',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！巴特說要送你一匹馬（可惜搖搖車載不下）。',
    note: '阿凱、小禾、巴特、信差和城裡的商人、工匠是虛構的角色；魯布魯克的威廉的話是根據他自己寫的旅行記改編，不是他的原話，他的樣子是想像圖。銀樹是照他的描述畫的想像圖。驛站大概多遠一站、信差一天跑多遠，是學者根據當時的記載估計的。蒙古人為什麼往外擴張，學者還沒有一致的答案。',
    curriculum: '國中社會會再學到：蒙古帝國與元朝的國際互動',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g5', near: 'g3' },
      back: [
        { k: 'v3e5_ger', x: 140, y: 920, W: 200 },
        { k: 'horse', x: 650, y: 960, s: 1.1 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'strip', panels: [
        { scene: 'v3e5_camp', shot: '中景：山上的露營區，阿凱舉高手機找訊號',
          back: [{ k: 'v3e5_tent', x: 640, y: 330 }],
          actors: [
            { c: 'kai', x: 240, y: 380, s: 1, pose: 'raise', expr: 'mad', hold: 'phone', look: -.3, sweat: 1 },
            { c: 'he', x: 470, y: 384, s: 1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '沒訊號！\n怎麼跟媽媽說\n我們到了？', x: 20, y: 30, w: 210, fs: 23, tail: [230, 180] },
            { t: '露營區的\n遊客中心旁邊，\n好像有一台……', x: 300, y: 20, w: 240, fs: 23, tail: [462, 190] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 362 } },
        { scene: 'v3e5_camp', shot: '大格：遊客中心前的搖搖車，阿凱投下 10 元，數字盤倒轉',
          back: [
            { k: 'house', x: 600, y: 360, W: 260, H: 150, roof: 'flat', roofC: 'g7' },
            { k: 'sign', t: '遊客中心', x: 600, y: 196, W: 170, fs: 26, s: .9 },
            { k: 'car', x: 300, y: 560, s: 1 }
          ],
          props: [{ k: 'coin', x: 420, y: 300, r: 24, rot: 12 }, { k: 'v3e5_dial', x: 620, y: 470, t: '1254' }],
          actors: [
            { c: 'kai', x: 286, y: 492, s: 1.05, pose: 'ride', expr: 'grin', noShadow: true, look: .4 },
            { c: 'he', x: 90, y: 600, s: 1.1, pose: 'scared', expr: 'shock', look: .6 }
          ],
          bubbles: [
            { t: '找一個\n不用訊號的地方！', x: 180, y: 40, w: 250, tail: [300, 240] },
            { t: '數字在倒轉——\n西元 1254！', x: 14, y: 250, w: 230, fs: 23, tail: [90, 400] }
          ],
          sfx: [{ t: '叮！', x: 450, y: 210, fs: 54, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e5_steppe', shot: '滿版遠景：大草原、一群馬、蒙古包和遠處的城牆',
          back: [
            { k: 'horse', x: 300, y: 680, s: .7 },
            { k: 'horse', x: 420, y: 690, s: .6, flip: 1, f: 'clay2' },
            { k: 'horse', x: 600, y: 700, s: .7, f: 'cream' },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 770 年前，蒙古帝國的首都哈拉和林', en: 'KARAKORUM · c. AD 1254', x: 0, y: 18 },
            { t: '哈拉和林在今天的蒙古國。1206 年，鐵木真統一了蒙古各部，大家稱他「成吉思汗」。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：哈拉和林。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '到處\n都是馬！', x: 348, y: 676, w: 170, tail: [462, 760] },
            { t: '手機還是\n沒訊號……', x: 566, y: 700, w: 200, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v3e5_steppe', shot: '中景：驛站的馬棚，阿凱想騎上一匹備好的馬',
          back: [{ k: 'v3e5_ger', x: 660, y: 300, W: 160 }, { k: 'horse', x: 330, y: 420, s: 1, saddle: 'red' }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 210, y: 430, s: 1.05, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v3e5_bat', x: 600, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '借我騎一下，\n去找訊號！', x: 110, y: 40, w: 220, tail: [214, 236] },
            { t: '不行！！那匹馬是\n給大汗的信差換的！', x: 390, y: 26, w: 320, kind: 'shout', fs: 25, tail: [600, 238] }
          ],
          sfx: [{ t: '嘶——！', x: 330, y: 200, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：巴特叉腰自我介紹',
          actors: [{ c: 'v3e5_bat', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'smug', look: -.2 }],
          bubbles: [{ t: '我叫巴特！\n我家管驛站，\n照顧換班的馬。', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '驛站的孩子：巴特（虛構）', left: 8 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g5', ground: 'g3' }, shot: '中景：信差舉起金色的牌子，換上新馬',
          back: [{ k: 'horse', x: 320, y: 520, s: 1 }],
          actors: [
            { c: 'v3e5_bat', x: 90, y: 540, s: 1, pose: 'point', expr: 'happy', look: .5 },
            { c: 'v3e5_rider', x: 316, y: 422, s: 1, pose: 'ride', expr: 'grin', hold: 'v3e5_paiza', noShadow: true, look: -.4 }
          ],
          caption: [{ t: '大約每 45 公里一站，\n換馬、吃飯、休息。', x: 0, y: 14, w: 300 }],
          bubbles: [
            { t: '拿著大汗的牌子，\n每一站都能換馬！', x: 10, y: 120, w: 250, fs: 22, tail: [96, 350] },
            { t: '一天可以\n跑一百多公里！', x: 260, y: 150, w: 196, fs: 22, tail: [318, 268] }
          ],
          sfx: [{ t: '噠噠噠', x: 300, y: 500, fs: 36, rot: -6 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e5_city', shot: '滿版：哈拉和林城裡，各地來的人來來去去',
          back: [
            { k: 'crowd', x: 400, y: 610, n: 12, W: 760, s: .8, op: .5 },
            { k: 'camel', x: 700, y: 650, s: .8, load: 'gold' }
          ],
          actors: [
            { c: 'v3e5_merch', x: 170, y: 650, s: .85, pose: 'offer', expr: 'happy', hold: 'sack' },
            { c: 'v3e5_art', x: 340, y: 652, s: .85, pose: 'hold', expr: 'calm', hold: 'brush' },
            { c: 'v3e5_herder', x: 540, y: 650, s: .85, pose: 'wave', expr: 'grin', flip: 1 },
            { c: 'v3e5_bat', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'awe', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '哈拉和林：商人住一區、中國來的工匠住一區。', x: 16, y: 16, w: 470 },
            { t: '城裡有十二座不同民族的廟、兩座清真寺、一座教堂。大汗讓各種信仰的人住在一起。', x: 16, y: 84, w: 420, dark: false }
          ],
          bubbles: [
            { t: '中亞的商人、\n中國的工匠，\n都在這裡！', x: 14, y: 640, w: 224, fs: 24, tail: [140, 790] },
            { t: '好多不同\n的人！', x: 290, y: 660, w: 180, fs: 24, tail: [440, 772] },
            { t: '連歐洲人\n也來了？', x: 560, y: 650, w: 200, fs: 24, tail: [646, 790] }
          ] }
      ] },
      { layout: 'bigL', panels: [
        { scene: 'v3e5_palace', shot: '大格：宮殿門口的銀樹，歐洲來的修士魯布魯克站在旁邊',
          back: [{ k: 'v3e5_tree', x: 330, y: 730, s: 1.1 }],
          actors: [
            { c: 'v3e5_rub', x: 140, y: 1030, s: 1.45, pose: 'raise', expr: 'calm', look: .4 },
            { c: 'kai', x: 380, y: 1034, s: 1.1, pose: 'fists', expr: 'awe', flip: 1, look: -.3 }
          ],
          caption: [{ t: '魯布魯克的威廉：\n法國國王派來的修士', x: 0, y: 14, w: 300 }],
          bubbles: [
            { t: '我 1253 年出發，\n走了好幾個月，\n才見到大汗。', x: 14, y: 220, w: 250, fs: 23, tail: [140, 680] },
            { t: '這棵銀樹，是巴黎來的\n金匠做的！四根管子\n流出四種飲料。', x: 170, y: 410, w: 320, fs: 22, tail: [170, 690] },
            { t: '比飲料機\n還厲害！', x: 340, y: 700, w: 156, fs: 22, tail: [380, 820] }
          ],
          tag: { t: '魯布魯克的話：改編自他的旅行記', left: 8, top: 140 } },
        { scene: 'v3e5_paizaBg', shot: '小格特寫：大汗發的牌子',
          caption: [{ t: '牌子（牌符）', x: 0, y: 14, w: 200 }],
          bubbles: [{ t: '金銀做的給大官，\n木頭做的給\n一般的信差。', x: 14, y: 396, w: 238, fs: 20 }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '小格：小禾整理筆記',
          caption: [{ t: '蒙古帝國最大的\n時候，是史上最大、\n連在一起的陸地\n帝國。', x: 0, y: 14, w: 240 }],
          actors: [{ c: 'he', x: 140, y: 500, s: 1.05, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.3 }],
          bubbles: [{ t: '從東亞\n到東歐！', x: 80, y: 196, w: 150, fs: 24, tail: [140, 316] }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '矮寬格：為什麼擴張、帶來什麼（兩張字卡）',
          caption: [{ t: '蒙古為什麼往外擴張？學者還沒有一致的答案。', x: 0, y: 14, w: 760 }],
          cards: [
            { icon: 'question', x: 14, y: 70, w: 370, t: '可能的原因：天氣變冷、\n草變少；鄰國不跟他們\n做生意；還有成吉思汗。' },
            { icon: 'road', x: 396, y: 70, w: 370, t: '影響：很多城市被破壞、\n很多人失去生命；後來\n東西方的路變得比較通。' }
          ],
          bubbles: [{ t: '原因和代價，都要記得。', x: 220, y: 330, w: 340, fs: 23 }] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'g5', ground: 'g3', near: 'g5' }, shot: '收尾大格：傍晚的蒙古包前，準備出發',
          back: [
            { k: 'v3e5_ger', x: 470, y: 350, W: 170 },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v3e5_bat', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '下次來，\n教你騎馬！', x: 14, y: 170, w: 190, fs: 22, tail: [110, 316] },
            { t: '沒訊號就找人\n一站一站接力傳！', x: 220, y: 120, w: 260, fs: 22, tail: [284, 326] },
            { t: '跟波斯的\n驛站一樣！', x: 486, y: 210, w: 176, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n馬利！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：黃金國王去遠行', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '成吉思汗', t: '1206 年，鐵木真統一了蒙古各部，大家稱他「成吉思汗」。他選了哈拉和林（今天的蒙古國）當首都，兒子窩闊台再把城蓋起來。' },
      { h: '驛站和牌子', t: '窩闊台把驛站整頓好：學者估計大約每 45 公里一站，信差換馬、吃飯、休息，順利時一天能跑一百多公里。拿著大汗發的牌子（金、銀或木頭做的）才能用驛站。' },
      { h: '東西交流', t: '1254 年，法國國王派來的修士魯布魯克到了哈拉和林，看到商人、中國工匠和各種信仰的人住在一起，還有巴黎金匠做的銀樹。' },
      { h: '原因和影響', t: '蒙古為什麼往外擴張，學者還沒有一致的答案（天氣變冷、鄰國不做生意、成吉思汗本人）。征服讓很多城市被破壞、很多人失去生命，例如 1258 年的巴格達；帝國建立後，東西方的路變得比較通。' }
    ],
    map: {
      world: 1,
      bounds: { lon: [-10, 140], lat: [14, 64] },
      cap: '紅點是哈拉和林。淺綠色是蒙古帝國最大時候的大概範圍（簡化畫法）。紅色虛線是魯布魯克大概走的路：從君士坦丁堡出發，經過黑海北邊的草原到哈拉和林。海岸是今天的樣子。',
      alt: '亞洲和歐洲的地圖：哈拉和林在中間偏右（紅點），淺綠色的蒙古帝國從東亞延伸到東歐，紅色虛線從君士坦丁堡往東走到哈拉和林',
      areas: [{ pts: [[56, 38], [58, 60], [57, 90], [54, 122], [47, 135], [40, 126], [35, 118], [33, 106], [29, 98], [31, 72], [34, 60], [30, 52], [32, 45], [37, 40], [42, 42], [45, 36], [48, 30], [52, 30]], f: 'g3', op: .55 }],
      routes: [{ pts: [[41.01, 28.98], [44.85, 34.97], [47.2, 39.7], [48.7, 44.5], [47, 52], [44, 64], [43.3, 77], [46, 90], [47.2, 102.8]] }],
      labels: [
        { t: '蒙古帝國', lat: 52, lon: 96, size: 26, f: 'g9' },
        { t: '宋', lat: 26, lon: 113, size: 20, f: 'wood' }
      ],
      cities: [
        { n: '哈拉和林', lat: 47.2, lon: 102.8, main: 1, side: 'r', dy: -6 },
        { n: '君士坦丁堡', lat: 41.01, lon: 28.98, side: 'l', dy: 24 },
        { n: '巴格達', lat: 33.31, lon: 44.36, side: 'l' },
        { n: '巴黎', lat: 48.86, lon: 2.35, side: 'r', dy: -10 }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的，只畫了大約 50 年：蒙古從統一到變成大帝國，速度非常快。',
      items: [
        { y: 1206, when: '西元 1206 年', t: '鐵木真成為\n成吉思汗', side: 'u', w: 170 },
        { y: 1220, when: '西元 1220 年', t: '選哈拉和林\n當首都', side: 'd', w: 170 },
        { y: 1254, when: '西元 1254 年', t: '魯布魯克到了\n哈拉和林', side: 'u', main: 1, w: 180 },
        { y: 1258, when: '西元 1258 年', t: '蒙古軍\n攻下巴格達', side: 'd', w: 170 }
      ]
    },
    sources: [
      '哥倫比亞大學 Asia for Educators〈The Mongols in World History〉（擴張原因沒有學者共識：1180～1220 年氣溫下降、鄰國減少貿易、成吉思汗本人；1206 年得到「成吉思汗」稱號；窩闊台建首都哈拉和林；魯布魯克 1253～1255 年出使；蒙古支持貿易；史上最大的連成一片的陸地帝國；1258 年攻下巴格達）',
      'UNESCO 世界遺產〈Orkhon Valley Cultural Landscape〉（哈拉和林是成吉思汗 1220 年建立的蒙古帝國首都，13～14 世紀的帝都）',
      '斯洛伐克科學院考古研究所 Holešák〈Travelling in the Mongol Empire〉論文（窩闊台正式建立驛站制度；大約每 45 公里一站；順利時一天可跑 100 公里以上；牌子用金銀給高官、木頭給較低的人；魯布魯克 1253 年受法國國王派遣、見到蒙哥大汗、1255 年回去）',
      '魯布魯克《東方行記》（Rockhill 英譯本，華盛頓大學 Silk Road Seattle）：巴黎金匠威廉做的銀樹，四根管子流出四種飲料；城裡有商人區和中國工匠區、十二座不同民族的廟、兩座清真寺、一座教堂',
      '史密森尼民俗節 2002〈The Silk Road: Paper〉（蒙古 1258 年攻下巴格達、造成大量死傷，之後也帶動東西交流）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1206 年統一蒙古各部，被大家稱為「成吉思汗」的是誰？', opts: ['鐵木真', '花拉子米', '畢昇', '薩拉丁'], a: 0, why: '鐵木真統一蒙古各部後，被稱為「成吉思汗」。' },
      { id: 'q2', d: 1, type: 'tf', q: '拿著大汗發的牌子，信差可以在驛站換馬、吃飯、休息。', a: true, why: '對！驛站一站接一站，信差換上休息過的馬，消息就傳得很快。' },
      { id: 'q3', d: 2, type: 'mc', q: '魯布魯克的威廉，是誰派他到蒙古來的？', opts: ['法國國王', '日本天皇', '巴格達的哈里發', '北宋的皇帝'], a: 0, why: '魯布魯克是法國國王派來的修士，1253 年出發，1254 年到了哈拉和林。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['鐵木真成為成吉思汗', '選哈拉和林當首都', '魯布魯克到了哈拉和林', '蒙古軍攻下巴格達'], why: '1206 年成吉思汗統一蒙古；1220 年定哈拉和林為首都；1254 年魯布魯克來到這裡；1258 年蒙古軍攻下巴格達。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「蒙古帝國那麼大，只有好處，沒有人受到傷害。」根據這一話，哪個說法最正確？', opts: ['不對，征服讓很多城市被破壞', '對，因為蒙古人從來沒有離開過草原', '對，大家都是自己搬進蒙古帝國的', '不對，蒙古帝國其實只有一座城那麼大'], a: 0, why: '蒙古的征服讓很多城市被破壞、很多人失去生命；帝國建立後，東西方的路變得比較通。好處和代價都要記得。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
