/* 世界史漫畫 第 1 冊 古文明・第 1 話（只有資料，畫面在 art.js／comic.js；格式檢查在 test/comics.test.js）。
   國中社會會再學到：西亞的早期文明（兩河流域、漢摩拉比法典）。
   格式：pages[{layout, panels[{scene, shot, actors[], props[], back[], bubbles[{t,x,y,w,tail,kind}], caption[], sfx[], cards[], tag}]}]；座標單位＝面板 px（版面見 art.js LAYOUTS）。 */
(function (root) {
  'use strict';
  (root.COMIC_DATA = root.COMIC_DATA || {}).v1e1 = {
    id: 'v1e1', vol: '第 1 冊 古文明', volNo: 1, ep: 1, title: '寫下來，才算數！', next: '尼羅河邊，小圖畫也能當文字？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說要請你吃布丁（但他沒寫下來）。',
    note: '阿凱、小禾、伊丁是虛構的角色；漢摩拉比的話是改編自法典內容，不是他的原話。巴比倫城和高塔是想像圖：漢摩拉比的時代有沒有這座塔，學者還不確定。',
    curriculum: '國中社會會再學到：西亞的早期文明（兩河流域、漢摩拉比法典）',
    cover: {
      scene: 'cover',
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ],
      back: []
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'kitchen', shot: '中景：冰箱開著，布丁不見了',
          actors: [
            { c: 'he', x: 355, y: 334, s: 1.12, pose: 'fists', expr: 'shout', look: .7 },
            { c: 'kai', x: 640, y: 336, s: 1.05, pose: 'eat', expr: 'chew', hold: ['cup', 'spoon'], flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '我的布丁呢？！', x: 268, y: 16, w: 226, kind: 'shout', tail: [352, 118] },
            { t: '布丁上又沒寫\n「不准吃」。', x: 520, y: 10, w: 218, tail: [632, 112] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'street', shot: '大格遠景：斜線街道，追逐',
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'yell', flip: 1, look: .7, sweat: 1 }
          ],
          back: [{ k: 'car', x: 118, y: 628, s: .78 }],
          bubbles: [
            { t: '小禾，沒寫下來\n就不算啦！', x: 18, y: 318, w: 216, tail: [206, 428] },
            { t: '陳以凱！！', x: 318, y: 316, w: 176, kind: 'shout', tail: [420, 400], fs: 25 }
          ],
          sfx: [{ t: '咚！', x: 24, y: 470, fs: 66, rot: -10 }] },
        { scene: 'coin', shot: '小格特寫：硬幣掉進投幣孔，數字盤倒轉',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！\n數字在倒轉！', x: 18, y: 436, w: 206, fs: 25, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'babylon', shot: '滿版跨頁遠景：古城、大河、蘆葦船',
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 3800 年前，巴比倫城', en: 'BABYLON · c.1750 BC', x: 0, y: 18 },
            { t: '兩河流域：幼發拉底河和底格里斯河之間的土地，大約在今天的伊拉克。', x: 408, y: 18, w: 356, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：兩河流域。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '這裡是哪裡？\n好熱！', x: 348, y: 672, w: 196, tail: [460, 748] },
            { t: '那座城……\n是真的耶！', x: 566, y: 700, w: 200, tail: [618, 790], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'yard', shot: '中景：阿凱一屁股坐下去',
          actors: [
            { c: 'kai', x: 236, y: 400, s: 1.3, pose: 'sit', expr: 'happy', look: .3, noShadow: true },
            { c: 'he', x: 560, y: 440, s: 1.05, pose: 'scared', expr: 'yell', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '走得好累……\n這墊子軟軟的，剛好！', x: 26, y: 88, w: 300, tail: [226, 226] },
            { t: '哥！\n那不是墊子！', x: 396, y: 118, w: 196, kind: 'shout', tail: [544, 232], fs: 26 }
          ],
          sfx: [{ t: '噗嘰！', x: 348, y: 362, fs: 56, rot: -8 }] },
        { scene: 'print', shot: '小格特寫：泥板上的屁股印，伊丁大叫',
          actors: [{ c: 'iddin', x: 152, y: 346, s: 1.08, pose: 'fists', expr: 'yell', noShadow: true }],
          bubbles: [{ t: '那是今天的\n大麥帳！！', x: 24, y: 10, w: 254, kind: 'shout', fs: 29, tail: [150, 132] }],
          tag: { t: '書記學徒：伊丁', left: 8 } },
        { scene: 'stylus', shot: '特寫：蘆葦筆壓進濕泥',
          caption: [{ t: '楔（ㄒㄧㄝ）形文字', say: '楔形文字', en: 'CUNEIFORM', x: 0, y: 16, w: 176 }],
          bubbles: [
            { t: '為什麼要\n寫在泥巴上？', x: 192, y: 14, w: 258, kind: 'think', fs: 24 },
            { t: '這裡木頭、石頭都少，\n河邊的泥巴最多！\n蘆葦筆一壓，就是記號。', x: 14, y: 124, w: 318, fs: 24, tail: [352, 216] }
          ],
          tag: { t: '記號一頭粗、一頭尖，像小木楔，所以叫楔形', left: 10 } }
      ] },
      { layout: 'splash', panels: [
        { scene: 'granary', shot: '滿版：穀倉前排隊記帳，兩個農夫吵架',
          actors: [
            { c: 'farmer', x: 160, y: 618, s: 1.05, pose: 'arg', expr: 'mad', look: .8 },
            { c: 'farmer2', x: 630, y: 620, s: 1.05, pose: 'arg', expr: 'shout', flip: 1, look: .8 },
            { c: 'scribe', x: 395, y: 590, s: 1.1, pose: 'raise', expr: 'smug', hold: 'tablet', noShadow: true },
            { c: 'iddin', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'stand', expr: 'worry', sweat: 2, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: 1 }
          ],
          bubbles: [
            { t: '我交了五袋！', x: 16, y: 262, w: 196, fs: 25, tail: [152, 366] },
            { t: '明明才三袋！', x: 572, y: 262, w: 196, fs: 25, tail: [640, 366] },
            { t: '看帳！三袋。', x: 276, y: 198, w: 212, kind: 'shout', fs: 27, tail: [392, 324] },
            { t: '誰交了幾袋大麥，\n都要記下來，\n才不會吵不完。', x: 14, y: 636, w: 256, fs: 24, tail: [132, 776] },
            { t: '……布丁\n又不是大麥。', x: 290, y: 656, w: 196, fs: 24, tail: [456, 758] },
            { t: '聽到沒？\n寫下來，\n就不能賴皮。', x: 574, y: 636, w: 196, fs: 24, tail: [660, 778] }
          ],
          caption: [{ t: '五千多年前，蘇美人開始在泥板上記帳。\n後來，記號慢慢變成這種楔形文字。', x: 16, y: 18, w: 460 }] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'steleHall', shot: '細長大格仰角：比大人還高的黑色石碑',
          actors: [
            { c: 'he', x: 92, y: 1034, s: 2.1, pose: 'lookup', expr: 'awe', look: .5 }
          ],
          bubbles: [
            { t: '更厲害的字\n在這裡。', x: 18, y: 14, w: 180, fs: 25, tail: [-6, 62] },
            { t: '比我爸\n還高！', x: 12, y: 520, w: 118, fs: 25, tail: [84, 656] }
          ],
          caption: [{ t: '《漢摩拉比法典》石碑\n高約 2.25 公尺', x: 0, y: 100, w: 284 }, { t: '石碑後來被搶到蘇薩，\n1901～1902 年才挖出來。', x: 0, y: 184, w: 336, dark: false }] },
        { scene: 'lawsBg', shot: '字卡：石碑上寫了什麼',
          caption: [{ t: '大約 280 條，刻在石碑上', x: 0, y: 16 }],
          cards: [
            { icon: 'dike', y: 76, t: '沒顧好堤防，淹了別人的田？\n要賠人家的穀物。' },
            { icon: 'eye', y: 340, t: '傷了身分相同的人的眼睛？\n就用一樣的方法罰他。\n這叫「以眼還眼，以牙還牙」。' },
            { icon: 'scale', y: 636, t: '可是身分不同，罰法也不一樣：\n傷到地位低的人，可能賠錢就好。' }
          ],
          bubbles: [{ t: '跟我們說的\n「人人平等」不一樣耶！', x: 34, y: 918, w: 354, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'court', shot: '矮寬格：國王本人現身',
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'guard', x: 660, y: 392, s: .9, pose: 'stand', flip: 1 },
            { c: 'king', x: 550, y: 394, s: 1, pose: 'raise', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '我把法律刻在這裡，不讓強的欺負弱的。\n受委屈的人，可以來請人唸給他聽。', x: 40, y: 14, w: 560, fs: 24, tail: [530, 134] }
          ],
          tag: { t: '漢摩拉比的話：改編自法典的序言與結語', left: 10, top: 112 } },
        { scene: 'dusk', shot: '收尾大格：傍晚河邊，準備出發',
          actors: [
            { c: 'iddin', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'offer', expr: 'smug', flip: 1, look: .8 }
          ],
          props: [
            { k: 'printTablet', x: 176, y: 424, rot: -6 },
            { k: 'ruleTablet', x: 384, y: 448, rot: 5 }
          ],
          bubbles: [
            { t: '這塊送你！\n賠大麥的事，\n我寫下來了。', x: 14, y: 186, w: 196, fs: 24, tail: [110, 332] },
            { t: '我的屁股\n留名歷史了！', x: 216, y: 200, w: 196, fs: 24, tail: [272, 300] },
            { t: '家規寫好了，\n賴不掉囉！', x: 420, y: 232, w: 188, fs: 24, tail: [472, 366] },
            { t: '嗶嗶——\n下一站，\n尼羅河！', x: 620, y: 206, w: 146, kind: 'car', fs: 22, tail: [640, 356] }
          ],
          caption: [{ t: '下一話：尼羅河邊，小圖畫也能當文字？', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '兩河流域在哪裡', t: '在幼發拉底河和底格里斯河之間，大約是今天的伊拉克。' },
      { h: '楔形文字', t: '五千多年前，蘇美人開始在泥板上寫字，後來記號慢慢變成楔形文字：用蘆葦筆壓在濕泥上，一頭粗、一頭尖。' },
      { h: '為什麼要寫字', t: '最早主要是為了記帳：誰交了多少穀物，寫下來就不會吵不清楚。' },
      { h: '《漢摩拉比法典》', t: '大約 3800 年前，巴比倫國王漢摩拉比把大約 280 條法律規定刻在高約 2.25 公尺的黑色石碑上。石碑後來被搶到蘇薩（今天的伊朗），1901～1902 年才挖出來，現在在法國羅浮宮。' },
      { h: '以眼還眼，以牙還牙', t: '法典裡有「怎麼傷人就怎麼罰」的規定，但身分不同罰法也不同，跟今天的人人平等不一樣。' }
    ],
    map: {
      cap: '紅點是巴比倫。兩條河最後會合，流進波斯灣。蘇薩在今天的伊朗，不在伊拉克。（河道和海岸線畫的是今天的樣子，三千多年前跟現在不完全一樣。）',
      alt: '兩河流域地圖：幼發拉底河在西、底格里斯河在東，都由西北往東南流進波斯灣，巴比倫在幼發拉底河邊，大約在今天的伊拉克',
      cities: [
        { n: '巴比倫', lat: 32.54, lon: 44.42, main: 1, side: 'l' },
        { n: '烏魯克', lat: 31.32, lon: 45.64, side: 'l', dy: 22 },
        { n: '蘇薩（今伊朗）', lat: 32.19, lon: 48.25, side: 'r' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從楔形文字開始到今天，已經超過五千年。',
      items: [
        { y: -3200, when: '約西元前 3200 年', t: '蘇美人開始\n在泥板上寫字', side: 'u', w: 186 },
        { y: -1750, when: '約西元前 1750 年', t: '漢摩拉比把\n法律刻成石碑', side: 'd', main: 1, w: 186 },
        { y: -1150, when: '約西元前 1150 年', t: '石碑被搶到\n蘇薩', side: 'u', w: 186 },
        { y: 1902, when: '西元 1901～1902 年', t: '考古隊在蘇薩\n挖到石碑', side: 'd', w: 206 },
        { y: 2026, when: '今天', t: '石碑在法國\n羅浮宮博物館', side: 'u', w: 160 }
      ]
    },
    sources: [
      '羅浮宮〈The Code of Hammurabi〉與館藏紀錄（黑色玄武岩、高 2.25 公尺、約西元前 1750 年、282 條判決、1901～1902 年在蘇薩出土、被埃蘭國王當戰利品帶走）',
      '大英博物館〈The first writing: counting beer for the workers〉、大都會藝術博物館早期泥板紀錄（最早的文字主要用於記帳）',
      '大英百科〈Cuneiform〉〈Clay tablet〉〈Code of Hammurabi〉（蘆葦筆、濕泥、以牙還牙、身分不同罰法不同）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '楔形文字是用什麼壓在濕泥板上寫出來的？', opts: ['蘆葦筆', '毛筆', '鉛筆', '羽毛筆'], a: 0, why: '蘇美人把蘆葦削成筆，壓在濕泥上，就會留下楔子形的記號。' },
      { id: 'q2', d: 1, type: 'mc', q: '這一話的「兩河流域」，大約在今天的哪個國家？', opts: ['伊拉克', '埃及', '義大利', '印度'], a: 0, why: '幼發拉底河和底格里斯河之間的土地，大約就在今天的伊拉克。' },
      { id: 'q3', d: 2, type: 'mc', q: '蘇美人最早在泥板上寫字，主要是拿來做什麼的？', opts: ['記下誰交了多少穀物', '記下國王打勝仗的故事', '寫給神明的祈禱文', '把法律刻給大家看'], a: 0, why: '早期的泥板多半是帳目：誰交了多少穀物，寫下來才不會吵不清楚。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['蘇美人開始在泥板上寫字', '漢摩拉比把法律刻成石碑', '石碑被搶到蘇薩', '考古隊挖到石碑'], why: '在泥板上寫字比石碑早了一千多年；石碑後來被搶到蘇薩，到西元 1901～1902 年才被挖出來。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「《漢摩拉比法典》就是人人平等，大家犯一樣的錯就受一樣的罰。」根據這一話，哪個說法最正確？', opts: ['不對，身分不同，罰法也可能不同', '對，不管是誰，受的處罰都完全一樣', '不對，法典只處罰當國王的人', '對，法典規定犯錯一律賠錢就好'], a: 0, why: '傷了身分相同的人，可能要受一樣的罰；傷到地位比較低的人，可能賠錢就好。所以它跟今天的人人平等不一樣。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
