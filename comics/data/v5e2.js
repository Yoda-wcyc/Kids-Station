/* 世界史漫畫 第 5 冊 革命與工業・第 2 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：啟蒙運動。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, path, txt, cap, place, both } = K;
    root.ComicArt.extend({
      scenes: {
        // 沙龍的客廳：淺色牆板、掛畫、高窗、木地板（桌子用 back 擺）
        v5e2_salon(w, h) {
          let s = rect(0, 0, w, h, C.cream);
          for (let x = 20; x < w; x += 190) s += rect(x, h * .12, 150, h * .5, '#ECE5CF') + rect(x + 8, h * .12 + 8, 134, h * .5 - 16, C.cream);
          s += rect(w * .4, h * .08, w * .16, h * .4, C.wood) + rect(w * .4 + 8, h * .08 + 8, w * .16 - 16, h * .4 - 16, C.sky);
          s += rect(60, h * .2, 110, 80, C.gold) + rect(68, h * .2 + 8, 94, 64, C.g5) + rect(w - 190, h * .2, 120, 90, C.gold) + rect(w - 182, h * .2 + 8, 104, 74, C.clay3);
          s += rect(0, h * .66, w, h * .34, C.wood) + rect(0, h * .66, w, 8, 'rgba(21,23,20,.18)');
          for (let x = 0; x < w; x += 80) s += rect(x, h * .66, 3, h * .34, 'rgba(21,23,20,.12)');
          return { bg: s };
        },
        // 牛頓：同一套規則，說明東西掉下來、也說明月亮繞地球
        v5e2_newton(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          const cx = w * .5, cy = h * .46;
          s += circ(cx, cy, 190, C.g3) + circ(cx, cy, 186, C.paper2);
          s += circ(cx, cy, 64, C.blue) + path(`M${cx - 40} ${cy - 30} Q${cx - 10} ${cy - 50} ${cx + 20} ${cy - 20} Q${cx} ${cy + 10} ${cx - 34} ${cy}Z`, C.g5);
          s += circ(cx + 134, cy - 134, 22, C.cream) + circ(cx + 128, cy - 140, 6, C.paper3);
          s += cap(cx + 108, cy - 112, cx + 40, cy - 46, 6, C.red) + path(`M${cx + 30} ${cy - 36} L${cx + 58} ${cy - 44} L${cx + 46} ${cy - 66}Z`, C.red);
          s += rect(cx - 6, cy - 150, 12, 60, C.wood) + circ(cx, cy - 160, 30, C.g7) + circ(cx + 18, cy - 118, 9, C.red);
          s += cap(cx + 18, cy - 104, cx + 18, cy - 78, 5, C.red) + path(`M${cx + 8} ${cy - 80} L${cx + 28} ${cy - 80} L${cx + 18} ${cy - 66}Z`, C.red);
          s += rect(cx - 140, cy + 200, 280, 44, C.cream, 8) + txt(cx, cy + 232, '都是「萬有引力」', 26, C.red);
          return { bg: s };
        }
      },
      props: {
        // 一疊印好的稿子
        v5e2_pages: x => place(x, both(rect(-40, -36, 80, 36, C.cream, 2)) + rect(-40, -24, 80, 2, C.paper3) + rect(-40, -12, 80, 2, C.paper3) + rect(-34, -46, 70, 12, C.cream, 2, 'transform="rotate(-6)"')),
        // 水晶吊燈
        v5e2_chand: x => place(x, rect(-2, 0, 4, 60, C.gold) + path('M-60 60 Q0 100 60 60 L50 74 Q0 108 -50 74Z', C.gold) + [-50, -25, 0, 25, 50].map(d => rect(d - 3, 40, 6, 22, C.cream) + circ(d, 36, 5, '#FFF3C4')).join(''))
      },
      cast: {
        v5e2_ama: { name: '阿嬤', skin: 'skin', top: 'purple', bottom: 'g9', leg: 'g9', shoe: 'wood', hair: 'bun', hairC: 'paper3', acc: ['glasses'], r: 20, k: 1.02 },
        v5e2_lucie: { name: '露西（虛構）', skin: 'skin', top: 'blue', skirt: 'cream', hair: 'long', hairC: 'wood', hat: 'band', hatC: 'red', r: 22, k: .93 },
        v5e2_geoffrin: { name: '若弗蘭夫人', real: 1, skin: 'skin', robe: 'g5', trim: 'gold', hair: 'bun', hairC: 'paper3', r: 19, k: 1.12 },
        v5e2_diderot: { name: '狄德羅', real: 1, skin: 'skin', robe: 'wood', trim: 'gold', hair: 'curly', hairC: 'paper2', r: 19, k: 1.18 },
        v5e2_guest: { name: '沙龍的客人', skin: 'skinB', robe: 'blue', trim: 'gold', hair: 'curly', hairC: 'paper2', r: 19, k: 1.14 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v5e2 = {
    id: 'v5e2', vol: '第 5 冊 革命與工業', volNo: 5, ep: 2, title: '沙龍裡的大問題', next: '寫下獨立宣言',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿嬤說：你講得有道理，今天可以多吃一碗。',
    note: '阿凱、小禾、阿嬤、露西和沙龍的客人是虛構的角色；狄德羅和若弗蘭夫人是真實人物，他們的話是改編的，不是原話，樣子是想像圖。沙龍裡大家在討論的話，是把孟德斯鳩、洛克等人書裡的想法改寫成小朋友聽得懂的句子。',
    curriculum: '國中社會會再學到：啟蒙運動',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'basalt3', near: 'g5' },
      back: [
        { k: 'house', x: 110, y: 900, W: 170, H: 230, roof: 'gable', roofC: 'basalt2', f: 'cream' },
        { k: 'house', x: 690, y: 890, W: 160, H: 260, roof: 'gable', roofC: 'basalt2', f: 'brick3' },
        { k: 'v5e2_pages', x: 600, y: 960, s: 1.4 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trioR', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'clay3', hz: .76, window: [.04, .1, .18, .4], winC: 'g3' }, shot: '中景：阿嬤家的飯桌，阿凱邊吃飯邊看平板，阿嬤生氣',
          back: [{ k: 'table', x: 330, y: 316, W: 260 }],
          actors: [
            { c: 'he', x: 230, y: 330, s: 1, pose: 'eat', expr: 'chew', hold: ['cup', 'spoon'], look: .5 },
            { c: 'kai', x: 420, y: 334, s: 1, pose: 'hold', expr: 'mad', hold: 'phone', look: .6 },
            { c: 'v5e2_ama', x: 650, y: 332, s: 1, pose: 'point', expr: 'mad', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '吃飯不准看平板！\n規定就是規定！', x: 520, y: 12, w: 250, kind: 'shout', fs: 24, tail: [656, 140] },
            { t: '為什麼？\n總要有理由吧！', x: 250, y: 20, w: 210, fs: 24, tail: [420, 150] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）、阿嬤', left: 8, top: 302 } },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1750 }, shot: '小格特寫：阿嬤家門口也有搖搖車，硬幣投進去，數字盤停在西元 1750',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '阿嬤家門口\n也有搖搖車？！', x: 18, y: 436, w: 206, fs: 23, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] },
        { scene: 'vortex', sceneOpt: { year: '1750', carS: 1.1 }, shot: '大格：搖搖車衝進時光隧道，阿凱還在抱怨',
          actors: [
            { c: 'kai', x: 110, y: 600, s: 1.1, pose: 'scared', expr: 'yell', look: .4, sweat: 2 },
            { c: 'he', x: 430, y: 610, s: 1.05, pose: 'shout', expr: 'shock', flip: 1, look: .5 }
          ],
          bubbles: [
            { t: '我只是問\n「為什麼」啊——！', x: 16, y: 150, w: 250, fs: 24, tail: [110, 380] },
            { t: '抓緊！\n要倒轉了！', x: 320, y: 220, w: 190, fs: 24, tail: [430, 420] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sky: '#D6DCCB', sun: [.8, .14], hz: .5, far: false, ground: 'paper3', river: { y: .56, h: .08, tilt: .01, c: 'g5' }, near: 'basalt3' }, shot: '滿版遠景：塞納河邊的巴黎，灰屋頂的房子，有人搬著一疊疊紙',
          back: [
            { k: 'house', x: 90, y: 500, W: 150, H: 220, roof: 'gable', roofC: 'basalt2', f: 'cream' },
            { k: 'house', x: 250, y: 500, W: 140, H: 260, roof: 'gable', roofC: 'basalt2', f: 'brick3' },
            { k: 'dome', x: 430, y: 500, W: 150, H: 210, f: 'cream' },
            { k: 'house', x: 600, y: 500, W: 150, H: 240, roof: 'gable', roofC: 'basalt2', f: 'cream' },
            { k: 'house', x: 740, y: 500, W: 120, H: 200, roof: 'gable', roofC: 'basalt2', f: 'brick3' },
            { k: 'cart', x: 600, y: 760, s: .9 },
            { k: 'v5e2_pages', x: 580, y: 690, s: 1 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 275 年前，巴黎', en: 'PARIS · c.1750', x: 0, y: 18 },
            { t: '巴黎在今天的法國。那時候法國由國王統治，國王說了算。', x: 0, y: 112, w: 420, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：巴黎。\n免費附贈翻譯功能。', x: 14, y: 716, w: 290, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '好多人\n戴白色假髮！', x: 340, y: 664, w: 200, tail: [462, 760] },
            { t: '那邊在搬\n一大疊紙。', x: 572, y: 704, w: 190, tail: [624, 794], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: false, ground: 'paper3' }, shot: '中景：阿凱撞到抱著稿子的露西，紙飛起來',
          back: [{ k: 'house', x: 680, y: 236, W: 200, H: 200, roof: 'gable', roofC: 'basalt2', f: 'cream' }],
          props: [{ k: 'v5e2_pages', x: 470, y: 200, rot: 30 }, { k: 'v5e2_pages', x: 360, y: 160, rot: -20, s: .8 }],
          actors: [
            { c: 'kai', x: 220, y: 440, s: 1.05, pose: 'splat', expr: 'shock', look: .5, sweat: 2 },
            { c: 'v5e2_lucie', x: 600, y: 452, s: 1.1, pose: 'scared', expr: 'yell', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '對、對不起！', x: 30, y: 150, w: 200, tail: [210, 330] },
            { t: '我的百科全書\n稿子啦！！', x: 470, y: 20, w: 240, kind: 'shout', fs: 25, tail: [590, 236] }
          ],
          sfx: [{ t: '嘩啦！', x: 280, y: 40, fs: 52, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：印刷店學徒露西抱著稿子',
          actors: [{ c: 'v5e2_lucie', x: 150, y: 548, s: 1.25, pose: 'hold', expr: 'smug', hold: 'scroll', look: -.2 }],
          bubbles: [{ t: '我在印刷店幫忙，\n要把稿子送去\n沙龍給作者看。', x: 14, y: 40, w: 274, fs: 24, tail: [150, 280] }],
          tag: { t: '印刷店學徒：露西（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '知識格：一大排《百科全書》',
          back: [{ k: 'shelf', x: 232, y: 470, W: 380, H: 200, seed: 8 }],
          caption: [
            { t: '《百科全書》：1751～1772 年出版，\n文字 17 冊、圖 11 冊。', x: 0, y: 14, w: 440 },
            { t: '七萬多篇文章，一百三十多位作者合寫。', x: 0, y: 108, w: 464, dark: false }
          ],
          bubbles: [
            { t: '從做麵包到造船，\n什麼都寫進去！', x: 20, y: 180, w: 250, fs: 23 },
            { t: '像紙本的\n網路百科！', x: 270, y: 470, w: 180, fs: 23 }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v5e2_salon', shot: '滿版：若弗蘭夫人的沙龍，大家圍著桌子吃飯、討論',
          back: [
            { k: 'v5e2_chand', x: 640, y: 10, s: 1.1 },
            { k: 'table', x: 400, y: 700, W: 420 }
          ],
          actors: [
            { c: 'v5e2_guest', x: 210, y: 690, s: 1, pose: 'arg', expr: 'shout', look: .6 },
            { c: 'v5e2_geoffrin', x: 400, y: 690, s: .95, pose: 'raise', expr: 'smug', look: 0 },
            { c: 'v5e2_diderot', x: 600, y: 690, s: 1, pose: 'point', expr: 'grin', flip: 1, look: .6 },
            { c: 'v5e2_lucie', x: 110, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'scared', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [{ t: '若弗蘭夫人的沙龍：每週三請作家和學者來吃飯、聊天。', x: 16, y: 16, w: 470 }],
          bubbles: [
            { t: '權力不能全給\n同一個人！', x: 20, y: 250, w: 230, fs: 24, tail: [206, 470] },
            { t: '把知識寫下來，\n讓大家都能\n自己想！', x: 560, y: 220, w: 210, fs: 24, tail: [606, 470] },
            { t: '他們在吵架嗎？', x: 300, y: 690, w: 220, fs: 24, tail: [452, 790] },
            { t: '這叫討論！\n輪流講道理。', x: 20, y: 680, w: 210, fs: 24, tail: [110, 800] }
          ],
          tag: { t: '若弗蘭夫人、狄德羅是真實人物，話是改編的', left: 10, top: 98 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v5e2_newton', shot: '細長知識格：同一套規則說明蘋果落下和月亮繞地球',
          actors: [{ c: 'v5e2_lucie', x: 80, y: 1034, s: 1.15, pose: 'pointUp', expr: 'happy', look: .6 }],
          caption: [{ t: '1687 年，英國的牛頓用\n幾條規則，同時說明了\n東西會往下掉、\n月亮會繞著地球轉。', x: 0, y: 14, w: 300 }],
          bubbles: [{ t: '大自然有規則，\n人一起生活，\n也能找出\n好規則吧？', x: 140, y: 790, w: 196, fs: 22, tail: [110, 880] }] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：沙龍裡討論的大問題',
          caption: [{ t: '沙龍裡的大問題', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '洛克（英國，1690 年）：\n人生下來就有生命、\n自由和財產的權利。' },
            { icon: 'scale', y: 344, t: '孟德斯鳩（1748 年）：\n訂法律、執行、審判，\n分給不同的人來管。' },
            { icon: 'question', y: 610, t: '不要只說「一直都這樣」，\n要用理性問「為什麼」。\n這叫「啟蒙」。' }
          ],
          bubbles: [{ t: '原來規定也可以\n講道理耶！', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .8 }, shot: '矮寬格：晚上的印刷店，露西說《百科全書》被禁過',
          back: [{ k: 'shelf', x: 700, y: 320, W: 110, H: 200 }, { k: 'v5e2_pages', x: 560, y: 320 }, { k: 'v5e2_pages', x: 620, y: 320, s: .9 }],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'think', expr: 'think', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'worry', hold: 'notebook', look: .8 },
            { c: 'v5e2_lucie', x: 440, y: 392, s: .95, pose: 'offer', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '政府查禁過它，\n老師們還是一冊一冊\n偷偷編完。', x: 290, y: 14, w: 270, fs: 23, tail: [432, 210] },
            { t: '為什麼\n要禁？', x: 60, y: 30, w: 140, fs: 23, tail: [190, 230] },
            { t: '它叫大家\n自己問為什麼。', x: 560, y: 60, w: 214, fs: 23, tail: [464, 220] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E3C9A0', sun: [.84, .28], hz: .55, far: false, ground: 'paper3', near: 'basalt3' }, shot: '收尾大格：傍晚的巴黎街上，準備出發',
          back: [
            { k: 'house', x: 620, y: 350, W: 180, H: 200, roof: 'gable', roofC: 'basalt2', f: 'cream' },
            { k: 'car', x: 620, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v5e2_lucie', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '下次見面，\n換你說理由給我聽！', x: 14, y: 180, w: 250, fs: 22, tail: [110, 330] },
            { t: '回去我要問阿嬤\n規定的理由，\n也說我的理由。', x: 270, y: 150, w: 210, fs: 22, tail: [284, 336] },
            { t: '好好講，\n不准耍賴喔。', x: 486, y: 214, w: 170, fs: 22, tail: [478, 372] },
            { t: '嗶嗶——\n下一站，\n費城！', x: 630, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：寫下獨立宣言', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '啟蒙運動', t: '1700 年代，歐洲很多學者主張：用理性把事情想清楚，不要只因為「一直都是這樣」就照做。' },
      { h: '牛頓讓人相信世界有規律', t: '1687 年，英國的牛頓用幾條規則，同時說明了地上的東西往下掉、天上的月亮繞地球轉。很多人因此相信：世界是有規則、可以被弄懂的。' },
      { h: '權利和分權', t: '英國的洛克（1690 年）說，人生下來就有生命、自由和財產的權利；法國的孟德斯鳩（1748 年）主張權力要分開、互相牽制，才不會被一個人拿走全部。' },
      { h: '沙龍', t: '巴黎有些人家固定請作家和學者來聊天討論。若弗蘭夫人每週三請大家吃飯，還出錢幫助編《百科全書》。' },
      { h: '《百科全書》', t: '狄德羅和達朗貝爾主編，1751～1772 年出版，文字 17 冊、圖 11 冊，七萬多篇文章、一百三十多位作者。政府審查、查禁過，最後還是編完了。' }
    ],
    map: {
      bounds: { lon: [-7, 12], lat: [42, 55] },
      cap: '紅點是巴黎，塞納河從城裡流過。倫敦是牛頓住的城市。（海岸線、河道是今天的樣子，簡化畫法。）',
      alt: '西歐地圖：巴黎在法國北部的塞納河邊，海峽對面的英國有倫敦',
      rivers: ['seine', 'rhine'],
      labels: [
        { t: '法國', lat: 46.6, lon: 2.4, size: 28, f: 'g9' },
        { t: '英國', lat: 53.2, lon: -1.6, size: 22, f: 'g9' },
        { t: '大西洋', lat: 46.0, lon: -5.4, size: 20, f: 'cream' },
        { t: '塞納河', lat: 49.6, lon: 2.6, size: 18, f: 'g7' }
      ],
      cities: [
        { n: '巴黎', lat: 48.86, lon: 2.35, main: 1, side: 'r' },
        { n: '倫敦', lat: 51.51, lon: -0.13, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從牛頓的書到《百科全書》出完，大約 85 年。',
      items: [
        { y: 1687, when: '西元 1687 年', t: '牛頓出書\n說明萬有引力', side: 'u', w: 140 },
        { y: 1751, when: '西元 1751 年', t: '《百科全書》\n第一冊出版', side: 'd', main: 1, w: 180 },
        { y: 1772, when: '西元 1772 年', t: '《百科全書》\n全部出完', side: 'u', w: 150 },
        { y: 2026, when: '今天', t: '它可以在網路上\n免費查看', side: 'd', w: 170 }
      ]
    },
    sources: [
      '芝加哥大學 ARTFL《Encyclopédie》計畫首頁（狄德羅與達朗貝爾主編；1751～1772 年出版；文字 17 冊、圖 11 冊；七萬四千篇文章；一百三十多位作者；今天可在網路上查看）',
      '史丹佛哲學百科〈Enlightenment〉（牛頓《原理》1687 年用幾條普遍規則說明自然；洛克 1690 年的生命、自由、財產；孟德斯鳩 1748 年《論法的精神》與權力制衡；《百科全書》受到審查、靠狄德羅堅持完成）',
      'Encyclopedia.com〈Geoffrin, Marie Thérèse (1699–1777)〉（Women in World History）：沙龍在聖奧諾雷街、每週三請作家哲學家吃飯，出錢資助《百科全書》，常客有孟德斯鳩、伏爾泰、狄德羅、達朗貝爾'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '這一話裡的「沙龍」是什麼？', opts: ['請人來家裡聊天討論的聚會', '專門幫人剪頭髮和染頭髮的店', '國王和大臣開會決定事情的宮殿', '賣麵包和蛋糕的大市場'], a: 0, why: '巴黎有些人家固定請作家、學者來吃飯、聊天、討論，這種聚會就叫沙龍。' },
      { id: 'q2', d: 1, type: 'tf', q: '《百科全書》是狄德羅一個人寫完的。', a: false, why: '不對！《百科全書》有一百三十多位作者一起寫，狄德羅和達朗貝爾是主編。' },
      { id: 'q3', d: 2, type: 'mc', q: '孟德斯鳩主張什麼？', opts: ['訂法律、執行、審判分給不同的人', '所有的權力都交給國王一個人來管', '只讓最有錢的人決定所有的法律', '把所有的法律和規定全部取消'], a: 0, why: '孟德斯鳩認為權力要分開、互相牽制，才不會被一個人拿走全部。' },
      { id: 'q4', d: 2, type: 'match', q: '把人物和他的想法配對。', pairs: [['牛頓', '用幾條規則說明大自然的運動'], ['洛克', '人生來就有生命、自由和財產的權利'], ['孟德斯鳩', '權力要分開，互相牽制'], ['狄德羅', '和很多作者一起編《百科全書》']], why: '牛頓講大自然的規則；洛克講人的權利；孟德斯鳩講分權；狄德羅主編《百科全書》。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「啟蒙運動的意思就是：大人的規定都不用遵守。」根據這一話，哪個說法最正確？', opts: ['不對，是要用理性問清楚規則的道理', '對，啟蒙就是什麼規定都可以不用守', '對，那時的人都主張把法律全部廢掉', '不對，啟蒙是說國王的話一定要聽從'], a: 0, why: '啟蒙不是不守規則，而是不要只說「一直都這樣」，要用理性問「為什麼」，找出更好的規則。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
