/* 世界史漫畫 第 2 冊 古典世界・第 1 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：希臘的政治與文化（雅典民主）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, path, txt, cap, both, place, seeded, prop } = K;
    // 剪影小人（不畫臉）：cx 腳底中心、base 腳底、hh 身高、c 衣服色、arm 舉手
    const fig = (cx, base, hh, c, arm, skin) => {
      let s = path(`M${cx - hh * .22} ${base} Q${cx - hh * .24} ${base - hh * .7} ${cx} ${base - hh * .72} Q${cx + hh * .24} ${base - hh * .7} ${cx + hh * .22} ${base}Z`, c);
      if (arm) s += cap(cx + hh * .14, base - hh * .6, cx + hh * .26, base - hh * 1.08, hh * .09, c) + circ(cx + hh * .26, base - hh * 1.1, hh * .07, skin || C.skinB);
      return s + circ(cx, base - hh * .84, hh * .14, skin || C.skinB);
    };
    const shard = (t1, t2) => both(path('M-34 0 L-42 -30 L-24 -52 L14 -58 L38 -36 L32 -4Z', C.clay3), 'cm-warm') + path('M-30 -8 L-34 -28 L-20 -44', 'none', `stroke="${C.clay2}" stroke-width="2"`) +
      (t1 ? txt(-2, -32, t1, 13, C.wood) + txt(0, -14, t2, 12, C.wood) : rect(-22, -36, 40, 3, 'rgba(107,74,50,.55)') + rect(-18, -24, 34, 3, 'rgba(107,74,50,.55)') + rect(-14, -12, 22, 3, 'rgba(107,74,50,.55)'));
    root.ComicArt.extend({
      scenes: {
        // 雅典：衛城山丘＋帕德嫩神殿，山腳下的房子
        v2e1_athens(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .86, h * .1, 200, 'url(#cm-sun)') + circ(w * .86, h * .1, 44, '#FFF8DC');
          s += path(`M0 ${h * .5} Q${w * .3} ${h * .44} ${w * .6} ${h * .49} T${w} ${h * .46} L${w} ${h * .62} L0 ${h * .62}Z`, C.g3);
          s += both(path(`M${w * .14} ${h * .66} Q${w * .2} ${h * .44} ${w * .34} ${h * .4} L${w * .86} ${h * .385} Q${w * .96} ${h * .45} ${w} ${h * .6} L${w} ${h * .7} L${w * .14} ${h * .7}Z`, C.brick2), 'cm-warm');
          s += rect(w * .34, h * .39, w * .52, 10, C.brick3);
          s += prop({ k: 'temple', x: w * .63, y: h * .392, W: 330, H: 196, f: 'cream' }) + prop({ k: 'temple', x: w * .4, y: h * .395, W: 120, H: 92, n: 4, f: 'paper2' });
          s += rect(0, h * .66, w, h * .34, C.sand);
          const rnd = seeded(5);
          for (let i = 0; i < 9; i++) s += prop({ k: 'house', x: 40 + i * 92 + rnd() * 20, y: h * (.72 + (i % 2) * .03), W: 86 + rnd() * 20, H: 52, roof: 'tile', roofC: 'clay2', f: i % 3 ? 'cream' : 'paper2', s: .8 });
          s += path(`M0 ${h * .86} Q${w * .5} ${h * .8} ${w} ${h * .86} L${w} ${h} L0 ${h}Z`, C.brick3);
          return { bg: s };
        },
        // 普尼克斯山丘的公民大會：講台＋一排一排舉手的人（剪影）
        v2e1_pnyx(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .14, h * .1, 180, 'url(#cm-sun)');
          s += path(`M${w * .6} ${h * .36} Q${w * .7} ${h * .26} ${w * .82} ${h * .25} L${w} ${h * .26} L${w} ${h * .38}Z`, C.brick2) + prop({ k: 'temple', x: w * .84, y: h * .255, W: 150, H: 90, f: 'cream' });
          s += rect(0, h * .36, w, h * .64, C.g3) + path(`M0 ${h * .36} Q${w * .5} ${h * .3} ${w} ${h * .36} L${w} ${h * .42} L0 ${h * .42}Z`, C.g5, 'opacity=".5"');
          s += rect(w * .36, h * .5, w * .28, h * .06, C.basalt3, 4) + rect(w * .4, h * .47, w * .2, h * .035, C.paper3, 3) + rect(w * .36, h * .555, w * .28, 8, 'rgba(21,23,20,.2)');
          const rnd = seeded(9), cs = [C.cream, C.paper3, C.clay3, C.g5, C.brick, C.wood];
          [[.66, 12, 92], [.75, 11, 112], [.85, 10, 136]].forEach(([y, n, hh], j) => {
            for (let i = 0; i < n; i++) { const cx = (i + .5) * w / n + (rnd() - .5) * 24; s += fig(cx, h * y, hh, cs[Math.floor(rnd() * cs.length)], rnd() < .72, rnd() < .5 ? C.skin : C.skinB); }
          });
          return { bg: s };
        },
        // 誰可以投票？（細長圖表格）
        v2e1_who(w, h) {
          let s = rect(0, 0, w, h, C.paper2);
          [['成年男性公民', 1, C.g7], ['女性', 0, C.purple], ['奴隸', 0, C.clay2], ['外地來的人', 0, C.blue]].forEach(([t, ok, c], i) => {
            const y = 120 + i * 140;
            s += rect(14, y, w - 28, 120, C.cream, 12) + fig(66, y + 112, 92, c, ok, C.skinB);
            s += txt(118, y + 52, t, t.length > 4 ? 24 : 28, C.ink, { a: 'start' }) + rect(118, y + 70, 92, 38, ok ? C.g7 : C.red, 8) + txt(164, y + 97, ok ? '可以' : '不行', 24, C.cream);
          });
          return { bg: s };
        }
      },
      props: {
        v2e1_shard: x => place(x, shard(x.t1, x.t2)),
        v2e1_pile: x => { let s = ''; [[-50, 0, -10], [0, -6, 14], [40, 2, -20], [-20, -24, 30], [22, -30, -6], [-60, -20, 40], [60, -16, 8]].forEach(([dx, dy, r]) => { s += `<g transform="translate(${dx} ${dy}) rotate(${r}) scale(.55)">` + shard() + '</g>'; }); return place(x, s); }
      },
      icons: {
        v2e1_vote() { return rect(0, 0, 120, 90, C.g3) + `<g transform="translate(60 74) scale(1.1)">` + shard('ΘΕΜΙΣ', 'ΘΟΚΛΕΣ') + '</g>'; }
      },
      cast: {
        v2e1_philia: { name: '菲莉亞（虛構）', skin: 'skin', robe: 'cream', trim: 'blue', hair: 'bun', hairC: 'wood', r: 22, k: .92 },
        v2e1_orator: { name: '雅典公民', skin: 'skinB', robe: 'paper3', trim: 'g7', hair: 'short', beard: 1, r: 19, k: 1.15 },
        v2e1_pericles: { name: '伯里克利', real: 1, skin: 'skin', robe: 'cream', trim: 'purple', hair: 'curly', hairC: 'wood', beard: 1, r: 19, k: 1.2 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v2e1 = {
    id: 'v2e1', vol: '第 2 冊 古典世界', volNo: 2, ep: 1, title: '大家一起決定？', next: '刻在石柱上的話',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！這次班長選舉，阿凱說要等比賽的同學回來再投。',
    note: '阿凱、小禾、菲莉亞和雅典公民是虛構的角色；伯里克利的話改編自修昔底德記下的演說，不是原話。雅典城、普尼克斯山丘和伯里克利的樣子都是想像圖。陶片上刻的是「地米斯托克利」的名字，考古隊真的挖到過很多這樣的陶片。陶片放逐要多少票，古書有兩種說法，這裡用學者比較常用的「至少 6000 票」。',
    curriculum: '國中社會會再學到：希臘的政治與文化（雅典民主）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'g5' },
      back: [
        { k: 'temple', x: 600, y: 900, W: 330, H: 200, f: 'cream' },
        { k: 'column', style: 'greek', x: 110, y: 890, H: 300, f: 'cream' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'classroom', sceneOpt: { board: '選班長' }, shot: '中景：五年級教室選班長，阿凱舉手喊，小禾在門口探頭',
          back: [{ k: 'crowd', x: 430, y: 300, n: 5, W: 260, s: .8, op: .75 }],
          actors: [
            { c: 'kai', x: 230, y: 330, s: 1, pose: 'raise', expr: 'grin', look: .3 },
            { c: 'he', x: 640, y: 332, s: 1.05, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '選我當班長！\n我們這排人最多！', x: 30, y: 14, w: 262, tail: [222, 128] },
            { t: '可是有一半的人\n去比賽了耶……', x: 446, y: 20, w: 240, tail: [608, 140] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'land', sceneOpt: { sun: [.82, .12], hz: .55, far: false, ground: 'paper3' }, shot: '大格：放學的校門口，文具店前的搖搖車開口說話',
          back: [
            { k: 'wall', x: 262, y: 377, W: 560, H: 230, f: 'cream', f2: 'paper3', crenel: false, seed: 4 },
            { k: 'sign', t: '校門口', x: 404, y: 236, W: 150, fs: 28, s: .9 },
            { k: 'car', x: 150, y: 640, s: .9 }
          ],
          actors: [
            { c: 'kai', x: 360, y: 660, s: 1.2, pose: 'fists', expr: 'mad', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '嗶——投 10 元，\n帶你去看\n最早的投票。', x: 16, y: 300, w: 236, kind: 'car', fs: 24, tail: [140, 500] },
            { t: '不公平！\n我要去看看\n別人怎麼選！', x: 280, y: 250, w: 226, tail: [356, 420] }
          ],
          sfx: [{ t: '叮！', x: 30, y: 470, fs: 60, rot: -10 }] },
        { scene: 'coin', sceneOpt: { year: '430', era: '西元前' }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元前 430',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！等等我！\n西元前 430！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e1_athens', shot: '滿版遠景：雅典城，山丘上是帕德嫩神殿',
          back: [{ k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 2450 年前，雅典', en: 'ATHENS · c.430 BC', x: 0, y: 18 },
            { t: '雅典在今天的希臘。那時候希臘分成很多「城邦」，一個城就像一個小國家，雅典是其中一個。', x: 0, y: 112, w: 440, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：雅典。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '山頂那座\n好大好白！', x: 348, y: 672, w: 196, tail: [460, 760] },
            { t: '那是帕德嫩\n神殿！', x: 566, y: 700, w: 200, tail: [618, 800], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .55, far: 'g3', ground: 'sand' }, shot: '中景：陶工的院子，阿凱抱起一堆破陶片要丟',
          back: [
            { k: 'mudHouse', x: 650, y: 300, W: 210, H: 110, dome: 1, door: true, win: false },
            { k: 'amphora', x: 470, y: 320 }, { k: 'amphora', x: 515, y: 326, s: .85 }
          ],
          props: [{ k: 'v2e1_pile', x: 330, y: 430 }],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 210, y: 430, s: 1.05, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v2e1_philia', x: 610, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這堆破碗，\n我幫你丟掉！', x: 110, y: 40, w: 230, tail: [214, 236] },
            { t: '不要丟！！\n那是要投票用的！', x: 390, y: 26, w: 300, kind: 'shout', fs: 25, tail: [600, 238] }
          ],
          sfx: [{ t: '匡啷！', x: 330, y: 190, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：陶工的女兒菲莉亞叉腰解釋',
          actors: [{ c: 'v2e1_philia', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '我是陶工的女兒\n菲莉亞。破陶片\n可以刻上名字！', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '陶工的女兒：菲莉亞（虛構）', left: 8 } },
        { scene: 'flat', sceneOpt: { c: 'paper2', zoom: 1, cy: .7 }, shot: '特寫：刻了名字的陶片',
          props: [{ k: 'v2e1_shard', x: 232, y: 500, s: 2.4, t1: 'ΘΕΜΙΣ', t2: 'ΘΟΚΛΕΣ' }],
          caption: [{ t: '陶片放逐', en: 'OSTRACISM', x: 0, y: 16, w: 176 }],
          bubbles: [
            { t: '要刻誰的\n名字？', x: 200, y: 14, w: 200, kind: 'think', fs: 24 },
            { t: '大家覺得誰權力太大、\n會害到城邦，\n就刻他的名字。', x: 14, y: 124, w: 330, fs: 23 }
          ],
          tag: { t: '至少 6000 票，票最多的人要離開雅典 10 年', left: 10 } }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v2e1_pnyx', shot: '滿版：普尼克斯山丘上的公民大會，大家舉手表決',
          actors: [
            { c: 'v2e1_orator', x: 395, y: 540, s: 1, pose: 'raise', expr: 'shout', look: .2 },
            { c: 'v2e1_philia', x: 120, y: 1026, s: 1.35, pose: 'point', expr: 'worry', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'raise', expr: 'grin', flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: 1 }
          ],
          caption: [
            { t: '普尼克斯山丘上的公民大會', x: 16, y: 16 },
            { t: '一年大約開 40 次會，常常有五、六千人來，舉手表決城邦的大事。', x: 16, y: 74, w: 420, dark: false }
          ],
          bubbles: [
            { t: '要不要多造一些船？\n贊成的，舉手！', x: 456, y: 210, w: 310, fs: 24, tail: [420, 330] },
            { t: '我長大也不能\n來投票，因為\n我是女生。', x: 14, y: 620, w: 200, fs: 24, tail: [140, 790] },
            { t: '好多人舉手！\n我也要舉！', x: 252, y: 646, w: 220, fs: 24, tail: [440, 772] },
            { t: '哥，你也不行。\n你又不是\n雅典人！', x: 540, y: 620, w: 220, fs: 24, tail: [650, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v2e1_who', shot: '細長圖表格：誰可以投票、誰不行',
          actors: [
            { c: 'kai', x: 80, y: 1034, s: 1.15, pose: 'think', expr: 'think', look: .6 },
            { c: 'v2e1_philia', x: 262, y: 1034, s: 1.15, pose: 'pointUp', expr: 'smug', flip: 1, look: -.4 }
          ],
          caption: [{ t: '誰可以投票？', x: 0, y: 30, w: 220 }],
          bubbles: [
            { t: '能投票的\n比我想的少！', x: 8, y: 706, w: 168, fs: 22, tail: [84, 820] },
            { t: '我們家，\n只有爸爸\n能去。', x: 184, y: 690, w: 150, fs: 22, tail: [250, 830] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：雅典人怎麼一起決定事情',
          caption: [{ t: '雅典人怎麼一起決定？', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '公民大會：成年男性公民\n都能來，舉手表決。' },
            { icon: 'scrollI', y: 344, t: '五百人會議：十個部落\n各抽籤選出 50 人，\n先準備要討論的事。' },
            { icon: 'v2e1_vote', y: 610, t: '陶片放逐：把名字刻在\n陶片上，怕有人\n權力大到管不住。' }
          ],
          bubbles: [{ t: '用抽籤選人？\n跟我們抽座位一樣！', x: 24, y: 896, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .62, far: 'g3', ground: 'g3' }, shot: '矮寬格：伯里克利對大家演說',
          back: [{ k: 'crowd', x: 400, y: 400, n: 14, W: 800, s: .7, op: .5 }],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v2e1_philia', x: 296, y: 392, s: .9, pose: 'stand', expr: 'calm', look: .8 },
            { c: 'v2e1_pericles', x: 560, y: 394, s: 1, pose: 'raise', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '我們的制度叫做民主，\n因為它照顧多數人，不是少數人。', x: 40, y: 14, w: 470, fs: 24, tail: [528, 146] }
          ],
          tag: { t: '伯里克利的話：改編自修昔底德記下的演說', left: 10, top: 112 } },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚陶工院子，菲莉亞送陶片',
          back: [
            { k: 'mudHouse', x: 560, y: 360, W: 200, H: 110, dome: 1, win: false },
            { k: 'amphora', x: 420, y: 372, s: .9 },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          props: [{ k: 'v2e1_shard', x: 176, y: 440, rot: -6, s: .9 }],
          actors: [
            { c: 'v2e1_philia', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '陶片送你！\n你們那裡，\n誰能投票？', x: 14, y: 176, w: 196, fs: 22, tail: [110, 300] },
            { t: '回去我要問：\n去比賽的同學\n怎麼辦？', x: 236, y: 168, w: 204, fs: 22, tail: [284, 326] },
            { t: '一起決定，\n也要問誰\n被排除在外。', x: 470, y: 200, w: 186, fs: 22, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n印度！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：刻在石柱上的話', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '雅典在哪裡', t: '雅典在今天的希臘。大約 2500 年前，希臘分成很多「城邦」，一座城就像一個小國家，雅典是其中一個。' },
      { h: '公民大會', t: '大約從西元前 508 年的改革開始，雅典的成年男性公民可以一起決定大事：一年大約開 40 次會，常常有五、六千人到普尼克斯山丘，用舉手表決。' },
      { h: '陶片放逐', t: '大家把覺得權力太大的人的名字刻在破陶片上；票數夠多（學者多認為至少 6000 票），票最多的人要離開雅典 10 年。' },
      { h: '誰被排除在外', t: '只有爸媽都是雅典人的成年男性公民可以投票。女性、奴隸、外地來的人都不行，所以能投票的只是住在雅典的人的一小部分。' },
      { h: '伯里克利', t: '雅典的政治家。他說雅典的制度叫做民主，因為它照顧的是多數人。山上的帕德嫩神殿也是在他那時候蓋的（西元前 447 年開工）。' }
    ],
    map: {
      bounds: { lon: [19.5, 29.5], lat: [35.0, 41.5] },
      cap: '紅點是雅典。古希臘有很多城邦，斯巴達、奧林匹亞也都在這一帶；往東過了愛琴海，就是第 1 冊最後一站的波斯帝國。（海岸是今天的樣子，簡化畫法，很多小島沒有畫。）',
      alt: '古希臘地圖：雅典（紅點）在希臘半島東南邊，西南方有斯巴達、奧林匹亞，東邊是愛琴海，再往東是波斯帝國',
      labels: [
        { t: '愛琴海', lat: 38.6, lon: 25.4, size: 26, f: 'cream' },
        { t: '地中海', lat: 35.9, lon: 21.6, size: 22, f: 'cream' },
        { t: '希臘', lat: 39.8, lon: 21.8, size: 30, f: 'g9' },
        { t: '往東是波斯帝國', lat: 40.6, lon: 27.4, size: 20, f: 'wood' }
      ],
      cities: [
        { n: '雅典', lat: 37.98, lon: 23.73, main: 1, side: 'r' },
        { n: '斯巴達', lat: 37.07, lon: 22.43, side: 'l' },
        { n: '奧林匹亞', lat: 37.64, lon: 21.63, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從漢摩拉比的石碑到雅典的民主，隔了一千兩百多年；雅典的民主到今天，又過了兩千五百年。',
      items: [
        { y: -1750, when: '約西元前 1750 年', t: '漢摩拉比把\n法律刻成石碑', side: 'u', w: 186 },
        { y: -508, when: '約西元前 508 年', t: '雅典改革，\n公民一起決定', side: 'd', w: 186 },
        { y: -431, when: '約西元前 431 年', t: '伯里克利說：\n這叫做民主', side: 'u', main: 1, w: 190 },
        { y: 2026, when: '今天', t: '很多國家用選舉\n讓人民一起決定', side: 'd', w: 200 }
      ]
    },
    sources: [
      '國家地理〈What Modern Democracies Didn’t Copy From Ancient Greece〉（只有成年男性公民能進公民大會，女性、外地人、奴隸被排除；大約每 10 天在普尼克斯開一次會，常常五、六千人；五百人會議從 10 個部落各抽 50 人；西元前 508 年克里斯提尼改革）',
      'History.com〈Ancient Greek Democracy〉（約西元前 507 年開始；公民大會一年約 40 次、舉手多數決；公民要爸媽都是雅典人；女性、約 1 萬名外地人、約 15 萬名奴隸不能參加）、〈How People Voted in Ancient Elections〉（陶片放逐：名字刻在陶片上，至少 6000 人、票最多的人放逐 10 年；地米斯托克利西元前 472 年被放逐）、〈Parthenon〉（西元前 447 年開工、438 年落成）',
      '雅典美國古典研究學院 ASCSA〈Reconsidering the Ostraka of the Athenian Agora〉（雅典廣場挖到約 1200 片以上刻名字的陶片）',
      '修昔底德《伯羅奔尼撒戰爭史》2.37（Fordham 大學 Internet History Sourcebooks 英譯）：伯里克利說雅典的制度照顧多數人，所以叫民主'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '雅典人「陶片放逐」時，把名字刻在什麼上面？', opts: ['破掉的陶片', '削平的竹片', '白色的布條', '薄薄的木板'], a: 0, why: '「陶片放逐」就是把名字刻在破陶片上。考古隊在雅典挖到很多刻了名字的陶片。' },
      { id: 'q2', d: 1, type: 'tf', q: '在古代雅典，女性也可以到公民大會舉手投票。', a: false, why: '不對。只有成年男性公民可以投票，女性、奴隸、外地來的人都不行。' },
      { id: 'q3', d: 2, type: 'mc', q: '雅典的公民大會，通常用什麼方法決定事情？', opts: ['大家舉手表決', '國王一個人決定', '抽籤抽到誰就聽誰', '比誰喊得最大聲'], a: 0, why: '公民大會一年大約開 40 次，常常有五、六千人，大家舉手表決。抽籤是拿來選五百人會議的成員。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['漢摩拉比把法律刻成石碑', '雅典改革，公民開始一起決定大事', '伯里克利說：這叫做民主', '今天很多國家用選舉讓人民決定'], why: '漢摩拉比大約在西元前 1750 年；雅典的改革大約在西元前 508 年；伯里克利的演說大約在西元前 431 年；今天最晚。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「雅典是民主，所以住在雅典的每一個人都能投票。」根據這一話，哪個說法最正確？', opts: ['不對，女性、奴隸、外地人都不行', '對，每個人都能去公民大會', '對，連小孩也能舉手表決', '不對，雅典其實是國王一個人說了算'], a: 0, why: '雅典的民主只給成年男性公民投票。女性、奴隸和外地人都被排除在外，所以能投票的只是一小部分人。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
