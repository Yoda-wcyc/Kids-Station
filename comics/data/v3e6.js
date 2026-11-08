/* 世界史漫畫 第 3 冊 中古世界・第 6 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：伊斯蘭世界的發展（西非的馬利帝國是延伸）。格式：comics/CONTRACT.md
   宗教：只講「去麥加朝聖」這件事，不畫麥加、不畫任何宗教人物或神的形象。數字只用查得到出處的。 */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, circ, ell, path, poly, txt, both, prop, place, groundShadow, cap } = K;
    // 泥造建築：土牆＋突出來的木樁（西非的泥造清真寺常見的樣子，這裡不畫任何宗教符號）
    const mud = (x, y, W, H) => {
      let s = groundShadow(x, y + 3, W * .62, 10) + both(path(`M${x - W / 2} ${y} L${x - W / 2 + 10} ${y - H} L${x + W / 2 - 10} ${y - H} L${x + W / 2} ${y}Z`, C.clay), 'cm-warm');
      s += both(path(`M${x - W * .12} ${y - H} L${x - W * .1} ${y - H * 1.7} Q${x} ${y - H * 1.85} ${x + W * .1} ${y - H * 1.7} L${x + W * .12} ${y - H}Z`, C.clay), 'cm-warm');
      for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) s += rect(x - W / 2 + 16 + c * (W - 32) / 5 - 8, y - H * .25 - r * H * .28, 16, 5, C.wood, 2);
      for (let r = 0; r < 3; r++) s += rect(x - W * .1 - 6, y - H * 1.15 - r * H * .18, W * .2 + 12, 5, C.wood, 2);
      return s + rect(x - 16, y - H * .4, 32, H * .4, C.ink, 4);
    };
    const baobab = (x, y, H) => rect(x - H * .09, y - H * .7, H * .18, H * .7, C.clay2, 6) + ell(x, y - H * .78, H * .42, H * .2, C.g5) + ell(x - H * .2, y - H * .86, H * .2, H * .12, C.g6) + ell(x + H * .2, y - H * .84, H * .22, H * .12, C.g6);
    root.ComicArt.extend({
      scenes: {
        // 現代：夜市，攤子和燈
        v3e6_night(w, h) {
          let s = rect(0, 0, w, h, C.night);
          for (let i = 0; i < 26; i++) s += circ((i * 97) % w, 20 + (i * 53) % (h * .3), 1.6, C.cream, 'opacity=".6"');
          s += cap(0, h * .2, w, h * .16, 3, C.paper3);
          for (let i = 0; i < 8; i++) { const x = w * .06 + i * w * .125, y = h * .2 - i * h * .005 + 18; s += rect(x - 1, y - 18, 2, 18, C.paper3) + ell(x, y + 10, 14, 18, i % 2 ? C.red : C.gold) + ell(x, y + 10, 24, 28, i % 2 ? C.red : C.gold, 'opacity=".2"'); }
          [[w * .2, '雞排', C.red], [w * .5, '套圈圈', C.g5], [w * .8, '珍奶', C.gold]].forEach(([x, t, f]) => { s += rect(x - 110, h * .34, 220, h * .3, C.g9) + rect(x - 120, h * .3, 240, 40, f, 4) + txt(x, h * .3 + 30, t, 26, C.cream) + rect(x - 100, h * .52, 200, h * .12, C.wood); });
          s += rect(0, h * .64, w, h * .36, C.road);
          return { bg: s };
        },
        // 西非的草原：猴麵包樹、尼日河、泥造房子
        v3e6_sahel(w, h) {
          const hz = h * .48;
          let s = rect(0, 0, w, h, '#F0DDB0') + circ(w * .8, h * .1, 220, 'url(#cm-sun)') + circ(w * .8, h * .1, 50, '#FFF8DC');
          s += rect(0, hz, w, h - hz, C.sand) + path(`M0 ${hz + 60} Q${w * .5} ${hz + 40} ${w} ${hz + 70} L${w} ${hz + 120} Q${w * .5} ${hz + 90} 0 ${hz + 110}Z`, C.g5);
          for (let i = 0; i < 5; i++) s += rect((i * 151 + 60) % w, hz + 78 + (i % 2) * 10, 50, 4, C.g2, 2, 'opacity=".7"');
          s += baobab(w * .1, hz + 20, 220) + baobab(w * .9, hz + 10, 180) + mud(w * .55, hz + 30, 220, 110);
          s += path(`M0 ${h * .9} Q${w * .5} ${h * .86} ${w} ${h * .9} L${w} ${h} L0 ${h}Z`, C.clay3);
          return { bg: s };
        },
        // 市集：一堆一堆的鹽板
        v3e6_market(w, h, o) {
          o = o || {}; const hz = h * (o.hz || .5);
          let s = rect(0, 0, w, h, '#F0DDB0') + rect(0, hz - 90, w, 90, C.clay3) + rect(0, hz - 96, w, 8, C.clay2);
          for (let i = 0; i < 6; i++) s += rect(w * .04 + i * w * .17, hz - 70, 40, 50, C.ink, 4, 'opacity=".75"');
          s += rect(0, hz, w, h - hz, C.sand);
          return { bg: s };
        },
        // 開羅：圓頂和高塔
        v3e6_cairo(w, h) {
          const hz = h * .64;
          let s = rect(0, 0, w, h, '#E8D9B0') + circ(w * .2, h * .12, 160, 'url(#cm-sun)');
          s += prop({ k: 'dome', x: w * .7, y: hz, W: 200, H: 220, f: 'brick3', domeC: 'brick' }) + prop({ k: 'tower', x: w * .42, y: hz, W: 40, H: 300, f: 'brick3' }) + prop({ k: 'house', x: w * .16, y: hz, W: 180, H: 140, roof: 'flat', roofC: 'brick2', f: 'brick3' });
          s += rect(0, hz, w, h - hz, C.paper3) + rect(0, hz, w, 6, 'rgba(21,23,20,.12)');
          return { bg: s };
        },
        // 廷巴克圖：泥造的大清真寺
        v3e6_timb(w, h) {
          const hz = h * .62;
          let s = rect(0, 0, w, h, '#F0DDB0') + circ(w * .14, h * .1, 140, 'url(#cm-sun)') + rect(0, hz, w, h - hz, C.sand);
          s += mud(w * .66, hz + 4, 300, 120);
          return { bg: s };
        }
      },
      props: {
        // 鹽板一疊
        v3e6_salt: x => { let s = groundShadow(0, 2, 60, 6); for (let i = 0; i < (x.n || 4); i++) s += both(rect(-50 + (i % 2) * 6, -22 - i * 22, 100, 20, i % 2 ? '#F2EFE6' : '#E6E1D2', 3)) + rect(-40 + (i % 2) * 6, -14 - i * 22, 80, 2, '#C9C2AE'); return place(x, s); },
        // 金砂袋
        v3e6_gold: x => place(x, groundShadow(0, 2, 30, 5) + both(path('M-24 0 Q-30 -24 -14 -36 L-8 -44 Q0 -40 8 -44 L14 -36 Q30 -24 24 0Z', C.clay3), 'cm-warm') + ell(0, -40, 10, 5, C.gold) + circ(-4, -44, 4, '#E7C55A') + circ(5, -45, 3.5, '#E7C55A')),
        v3e6_baobab: x => place(x, baobab(0, 0, x.H || 200)),
        v3e6_mud: x => place(x, mud(0, 0, x.W || 220, x.H || 110))
      },
      holds: {
        v3e6_salt: () => rect(-16, -14, 32, 14, '#F2EFE6', 2) + rect(-12, -9, 24, 2, '#C9C2AE'),
        v3e6_wallet: () => rect(-14, -12, 28, 20, C.wood, 3) + rect(-14, -12, 28, 6, '#5A3D28', 2)
      },
      cast: {
        v3e6_amadou: { name: '阿馬杜（虛構）', skin: 'skinC', top: 'gold', bottom: 'cream', leg: 'cream', shoe: 'wood', hair: 'short', hat: 'band', hatC: 'blue', r: 22, k: .95 },
        v3e6_musa: { name: '曼薩・穆薩', real: 1, skin: 'skinC', robe: 'gold', trim: 'g9', hair: 'man', hat: 'crown', beard: 1, r: 19, k: 1.24 },
        v3e6_trader: { name: '運鹽的商人', skin: 'skinB', robe: 'blue', trim: 'cream', hair: 'man', hat: 'turban', hatC: 'blue', beard: 1, r: 19, k: 1.14 },
        v3e6_rider: { name: '隊伍裡的人', skin: 'skinC', robe: 'cream', trim: 'gold', hair: 'man', hat: 'band', hatC: 'gold', r: 19, k: 1.12 },
        v3e6_rider2: { name: '隊伍裡的人', skin: 'skinC', robe: 'g7', trim: 'gold', hair: 'man', hat: 'turban', hatC: 'cream', beard: 1, r: 19, k: 1.12 },
        v3e6_emir: { name: '開羅的官員', skin: 'skinB', robe: 'g5', trim: 'cream', hair: 'man', hat: 'turban', hatC: 'cream', beard: 2, r: 19, k: 1.14 },
        v3e6_student: { name: '讀書的學生', skin: 'skinC', robe: 'cream', trim: 'blue', hair: 'short', r: 20, k: 1.02 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v3e6 = {
    id: 'v3e6', vol: '第 3 冊 中古世界', volNo: 3, ep: 6, title: '黃金國王去遠行', next: '鄭和的大船',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱決定這個月的零用錢，一半存起來（另一半……還在想）。',
    note: '阿凱、小禾、阿馬杜、商人、官員和學生是虛構的角色；曼薩・穆薩的話是根據歷史學家歐瑪里的記載改編，不是他的原話，他的樣子參考 1375 年歐洲地圖上畫的國王，是想像圖。朝聖隊伍、開羅和廷巴克圖的樣子也是想像圖。曼薩・穆薩的隊伍有多少人、帶了多少金子，各種說法差很多，這裡不寫數字；開羅的金價低了十幾年，是歐瑪里的說法（他說大約十二年），這是當時人的記載，影響有多大，學者還在研究。',
    curriculum: '國中社會會再學到：伊斯蘭世界的發展（西非的馬利帝國是延伸）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'clay3', near: 'sand' },
      back: [
        { k: 'v3e6_mud', x: 140, y: 930, W: 200, H: 100 },
        { k: 'camel', x: 650, y: 960, s: 1, load: 'gold' }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trioR', panels: [
        { scene: 'v3e6_night', shot: '中景：夜市，阿凱打開空空的錢包',
          actors: [
            { c: 'kai', x: 220, y: 330, s: 1, pose: 'hold', expr: 'shock', hold: 'v3e6_wallet', sweat: 2, look: .4 },
            { c: 'he', x: 600, y: 332, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '雞排、套圈圈、珍奶……\n零用錢全部花光了！', x: 14, y: 8, w: 330, fs: 23, tail: [220, 124] },
            { t: '只剩下\n10 元喔。', x: 470, y: 14, w: 180, fs: 24, tail: [590, 134] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'coin', sceneOpt: { year: '1324', era: '西元' }, shot: '小格特寫：最後的 10 元投進夜市口的搖搖車',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'kai', x: 118, y: 860, s: 1.9, pose: 'shout', expr: 'grin', noShadow: true }],
          bubbles: [{ t: '最後 10 元，\n拿來搭車！', x: 18, y: 420, w: 206, fs: 23, tail: [108, 520] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] },
        { scene: 'vortex', sceneOpt: { year: '1324', cy: .42 }, shot: '中格：搖搖車衝進時光漩渦',
          actors: [{ c: 'he', x: 130, y: 680, s: 1.3, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！你連搭車的錢\n都花掉了！', x: 200, y: 20, w: 300, fs: 23, kind: 'shout', tail: [150, 400] }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e6_sahel', shot: '滿版遠景：尼日河邊的草原，猴麵包樹和泥造的房子，駱駝隊經過',
          back: [
            { k: 'camel', x: 300, y: 690, s: .75, load: 'gold' },
            { k: 'camel', x: 410, y: 700, s: .7, load: 'clay2' },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v3e6_trader', x: 200, y: 690, s: .75, pose: 'walk', expr: 'calm' },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 700 年前，西非的馬利帝國', en: 'MALI EMPIRE · AD 1324', x: 0, y: 18 },
            { t: '馬利帝國在今天的西非，大約是馬利一帶，土地裡出產很多黃金。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：馬利帝國。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '那棵樹\n好胖！', x: 348, y: 676, w: 170, tail: [462, 760] },
            { t: '駱駝背上\n載了什麼？', x: 566, y: 700, w: 200, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'trioR', panels: [
        { scene: 'v3e6_market', shot: '中景：市集的鹽堆，阿凱以為是糖、伸手去舔',
          back: [{ k: 'v3e6_salt', x: 330, y: 320, n: 5 }, { k: 'v3e6_salt', x: 450, y: 320, n: 3 }],
          actors: [
            { c: 'he', x: 80, y: 320, s: .9, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 220, y: 318, s: .95, pose: 'eat', expr: 'chew', hold: 'v3e6_salt', look: .4 },
            { c: 'v3e6_amadou', x: 630, y: 324, s: 1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '好大塊的糖！\n……好鹹！', x: 130, y: 12, w: 220, fs: 23, tail: [222, 150] },
            { t: '那是要換金子的鹽！！', x: 400, y: 12, w: 330, kind: 'shout', fs: 24, tail: [620, 150] }
          ],
          sfx: [{ t: '呸！', x: 300, y: 130, fs: 44, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '細長格：阿馬杜自我介紹',
          actors: [{ c: 'v3e6_amadou', x: 120, y: 660, s: 1.2, pose: 'fists', expr: 'smug', look: -.2 }],
          bubbles: [{ t: '我叫\n阿馬杜！\n我家跟著\n駱駝隊\n做生意。', x: 14, y: 90, w: 210, fs: 23, tail: [120, 420] }],
          tag: { t: '商隊的孩子：阿馬杜（虛構）', left: 8 } },
        { scene: 'v3e6_market', sceneOpt: { hz: .6 }, shot: '中景：阿馬杜一手拿鹽、一手拿金砂袋，說明鹽換金',
          back: [{ k: 'v3e6_salt', x: 110, y: 470, n: 4 }, { k: 'v3e6_gold', x: 370, y: 480, s: 1.5 }],
          actors: [
            { c: 'v3e6_amadou', x: 270, y: 640, s: 1.1, pose: 'raise', expr: 'happy', look: .3 },
            { c: 'kai', x: 470, y: 646, s: 1.05, pose: 'think', expr: 'shock', flip: 1, sweat: 1 }
          ],
          caption: [{ t: '北邊的撒哈拉沙漠產鹽（塔加札），\n南邊產黃金。商人用駱駝穿過\n沙漠，在市集用鹽換金子。', x: 0, y: 14, w: 420 }],
          bubbles: [
            { t: '北邊的鹽，\n南邊的金，\n在這裡交換！', x: 14, y: 170, w: 220, fs: 23, tail: [260, 440] },
            { t: '鹽可以\n換金子？！', x: 316, y: 200, w: 180, fs: 23, tail: [466, 440] }
          ] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v3e6_sahel', shot: '滿版：曼薩・穆薩的朝聖隊伍出發，駱駝載著金子',
          back: [
            { k: 'crowd', x: 400, y: 620, n: 12, W: 760, s: .8, op: .5 },
            { k: 'camel', x: 130, y: 650, s: .85, load: 'gold' },
            { k: 'camel', x: 680, y: 660, s: .85, load: 'gold' },
            { k: 'horse', x: 400, y: 650, s: .8, saddle: 'red' }
          ],
          actors: [
            { c: 'v3e6_musa', x: 396, y: 571.6, s: .8, pose: 'ride', expr: 'calm', noShadow: true },
            { c: 'v3e6_rider', x: 250, y: 652, s: .8, pose: 'walk', expr: 'calm' },
            { c: 'v3e6_rider2', x: 550, y: 652, s: .8, pose: 'carry', expr: 'calm', hold: 'sack', flip: 1 },
            { c: 'v3e6_amadou', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'awe', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '1324 年，馬利的國王曼薩・穆薩\n出發去麥加朝聖。', x: 16, y: 16, w: 470 },
            { t: '對穆斯林來說，去麥加朝聖是很重要的事。國王帶了很多黃金，一路送人、買東西。', x: 16, y: 128, w: 420, dark: false }
          ],
          bubbles: [
            { t: '國王的隊伍\n要走過整個\n撒哈拉沙漠！', x: 14, y: 640, w: 224, fs: 24, tail: [140, 790] },
            { t: '整隊都是\n黃金……', x: 290, y: 670, w: 180, fs: 24, tail: [440, 772] },
            { t: '路上要\n花多少錢啊？', x: 556, y: 650, w: 210, fs: 24, tail: [646, 790] }
          ],
          tag: { t: '騎馬的是曼薩・穆薩（想像圖）', left: 16, top: 240 } }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v3e6_cairo', shot: '細長大格：開羅，曼薩・穆薩跟官員說話',
          actors: [
            { c: 'v3e6_musa', x: 200, y: 1030, s: 1.4, pose: 'raise', expr: 'calm', flip: 1, look: -.4 },
            { c: 'v3e6_emir', x: 60, y: 1034, s: 1.05, pose: 'bow', expr: 'awe' }
          ],
          caption: [{ t: '開羅（今天的埃及），\n1324 年', x: 0, y: 14, w: 290 }],
          bubbles: [
            { t: '我是為了朝聖\n才來的，\n不是為了別的事。', x: 14, y: 320, w: 250, fs: 23, tail: [196, 700] }
          ],
          tag: { t: '曼薩・穆薩的話：改編自歐瑪里的記載', left: 8, top: 120 } },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：金子太多，就變便宜了',
          caption: [{ t: '歷史學家歐瑪里記下', x: 0, y: 16 }],
          cards: [
            { icon: 'coinI', y: 80, t: '國王在開羅送出好多金子：\n朝廷裡的大官，\n每個人都拿到一包。' },
            { icon: 'scale', y: 344, t: '金子變多，就不稀奇了：\n一枚金幣本來至少換 25 枚\n銀幣，後來只換 22 枚或更少。' },
            { icon: 'question', y: 610, t: '歐瑪里說，金價低了十幾年。\n這是當時人的記載，\n細節學者還在研究。' }
          ],
          bubbles: [{ t: '東西太多，\n就變得不值錢！', x: 34, y: 900, w: 354, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v3e6_timb', shot: '矮寬格：廷巴克圖，泥造的大清真寺前，學生抱著書',
          actors: [
            { c: 'v3e6_student', x: 470, y: 384, s: .9, pose: 'hold', expr: 'calm', hold: 'book', flip: 1 },
            { c: 'v3e6_amadou', x: 110, y: 390, s: .92, pose: 'point', expr: 'happy', look: .6 },
            { c: 'he', x: 260, y: 392, s: .9, pose: 'hold', expr: 'awe', hold: 'notebook', look: .6 }
          ],
          caption: [{ t: '國王回國後，在廷巴克圖蓋了大清真寺。\n後來這裡成為讀書人聚集、買賣書的城市。', x: 0, y: 14, w: 560 }],
          bubbles: [
            { t: '這裡可以買書，\n也能跟老師學！', x: 14, y: 130, w: 220, fs: 22, tail: [112, 230] },
            { t: '金子換成了\n學問！', x: 250, y: 140, w: 180, fs: 22, tail: [262, 234] }
          ] },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: false, ground: 'sand', near: 'clay3', river: { y: .52, h: .08, tilt: .02 } }, shot: '收尾大格：傍晚的尼日河邊，準備出發',
          back: [
            { k: 'v3e6_baobab', x: 540, y: 340, H: 200 },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v3e6_amadou', x: 104, y: 566, s: 1.2, pose: 'offer', expr: 'grin', hold: 'v3e6_salt', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '送你一小塊鹽，\n比金子還實用！', x: 14, y: 150, w: 230, fs: 22, tail: [110, 316] },
            { t: '回去零用錢\n要記帳、慢慢花！', x: 252, y: 120, w: 240, fs: 22, tail: [284, 326] },
            { t: '1375 年歐洲的地圖，\n也畫了拿著金子的他！', x: 300, y: 250, w: 300, fs: 21, tail: [476, 372] },
            { t: '嗶嗶——\n下一站，\n南京！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：鄭和的大船', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '黃金的帝國', t: '大約 700 年前，西非的馬利帝國（今天的馬利一帶）出產很多黃金，國王曼薩・穆薩非常有名。' },
      { h: '鹽換金', t: '北邊撒哈拉沙漠的塔加札產鹽，南邊產黃金。商人用駱駝穿過沙漠，在廷巴克圖這樣的市集用鹽換金子。' },
      { h: '1324 年的朝聖', t: '對穆斯林來說，去麥加朝聖是很重要的事。1324 年曼薩・穆薩帶著很多黃金去麥加，經過開羅時送給大官們很多金子。' },
      { h: '金子變便宜', t: '歷史學家歐瑪里記下：開羅的金子變多，一枚金幣本來至少換 25 枚銀幣，後來只換 22 枚或更少。東西太多，就變得不值錢。' },
      { h: '廷巴克圖和地圖', t: '國王回國後在廷巴克圖蓋了大清真寺，後來這裡成為讀書、買賣書的城市。1375 年歐洲人畫的地圖，也畫了拿著金子的他。' }
    ],
    map: {
      bounds: { lon: [-20, 46], lat: [6, 36] },
      taiwan: false,
      cap: '紅點是廷巴克圖。淺綠色是馬利帝國的大概範圍，紅色虛線是曼薩・穆薩去麥加大概走的路（學者推測，簡化畫法），白色虛線是鹽從塔加札運來的路。河道、海岸是今天的樣子。臺灣在這張圖往東很遠很遠的地方。',
      alt: '西非到阿拉伯半島的地圖：廷巴克圖在尼日河邊（紅點），北邊是撒哈拉沙漠裡的塔加札，紅色虛線往東經過開羅到麥加',
      areas: [{ pts: [[17.5, -17], [17.8, -7], [17.2, 0], [15.6, 2], [13.2, 1], [11, -3], [10, -8], [11.2, -12], [13, -16.5]], f: 'g3', op: .55 }],
      rivers: ['nile', 'nileRosetta', 'nileDamietta', { pts: [[9.1, -10.5], [11.4, -8.4], [12.65, -8.0], [13.6, -6.2], [14.5, -4.2], [16.2, -3.6], [16.85, -3.0], [16.3, -0.05], [13.5, 2.1], [11.9, 3.4], [9.6, 4.6], [7.8, 6.7]] }],
      routes: [
        { pts: [[16.77, -3.0], [17.3, -7.0], [20.5, -6], [27.9, -0.3], [29.5, 10], [30.5, 20], [30.04, 31.24], [29.97, 32.55], [27.5, 35.6], [21.42, 39.83]] },
        { pts: [[23.6, -5.0], [16.77, -3.0]], f: 'cream', w: 4 }
      ],
      labels: [
        { t: '撒哈拉沙漠', lat: 25.5, lon: 15, size: 26, f: 'clay2' },
        { t: '馬利帝國', lat: 11.8, lon: -11, size: 22, f: 'g9' },
        { t: '尼日河', lat: 9.8, lon: 0, size: 18, f: 'g7' },
        { t: '地中海', lat: 33.4, lon: 19, size: 20, f: 'cream' }
      ],
      cities: [
        { n: '廷巴克圖', lat: 16.77, lon: -3.0, main: 1, side: 'r', dy: 14 },
        { n: '塔加札（鹽）', lat: 23.6, lon: -5.0, side: 'r' },
        { n: '開羅', lat: 30.04, lon: 31.24, side: 'l', dy: -10 },
        { n: '麥加', lat: 21.42, lon: 39.83, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：國王的旅行，讓幾十年後的歐洲地圖也畫上了他。',
      items: [
        { y: 1324, when: '西元 1324 年', t: '曼薩・穆薩\n經過開羅去朝聖', side: 'u', main: 1, w: 200 },
        { y: 1375, when: '西元 1375 年', t: '歐洲的地圖\n畫上拿金子的他', side: 'd', w: 200 },
        { y: 1500, when: '15～16 世紀', t: '廷巴克圖是\n有名的讀書城市', side: 'u', w: 200 }
      ]
    },
    sources: [
      '喬治梅森大學 World History Commons〈Al-Umari\'s Account of Mansa Musa\'s Visit to Cairo〉與波士頓大學非洲研究中心〈Kingdom of Mali〉教學資源（1324 年經過開羅去朝聖；送每位大官一包金子；金幣本來至少換 25 枚銀幣，後來 22 枚或更少，低了大約十二年；國王說自己是為了朝聖而來）',
      'UNESCO 世界遺產〈Timbuktu〉（北邊塔加札的鹽、黃金在這裡交易；津加里貝爾清真寺最早是國王朝聖回來後興建；15～16 世紀是學術與信仰的中心，有書籍買賣）',
      '西北大學布洛克美術館「Caravans of Gold」〈Catalan Atlas〉與大英圖書館部落格〈African kings on medieval and renaissance maps〉（1375 年的加泰隆尼亞地圖集畫著拿金子的曼薩・穆薩，說他因為土地出產黃金而最富有；1324 年朝聖讓埃及的金價下跌）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '曼薩・穆薩是哪一個帝國的國王？', opts: ['馬利帝國', '蒙古帝國', '波斯帝國', '羅馬帝國'], a: 0, why: '曼薩・穆薩是西非馬利帝國的國王，那裡出產很多黃金。' },
      { id: 'q2', d: 1, type: 'tf', q: '撒哈拉沙漠的商人，把北邊的鹽運到南邊，換金子。', a: true, why: '對！北邊的塔加札產鹽，南邊產黃金，商人用駱駝穿過沙漠來交換。' },
      { id: 'q3', d: 2, type: 'mc', q: '曼薩・穆薩在開羅送出很多金子以後，發生了什麼事？', opts: ['金子的價錢變低了', '金子的價錢變得更高', '開羅的金子全部被搬走', '開羅從此不再用金子'], a: 0, why: '金子一下子變多，就不稀奇了：一枚金幣能換的銀幣變少，金價低了好一陣子。' },
      { id: 'q4', d: 2, type: 'match', q: '把左右兩邊配起來。', pairs: [['鹽', '從撒哈拉沙漠北邊運來'], ['金子', '馬利帝國出產很多'], ['廷巴克圖', '後來成為讀書、買賣書的城市'], ['1375 年的地圖', '畫了拿著金子的國王']], why: '鹽從北邊來、金子在南邊，在市集交換；廷巴克圖後來以讀書聞名；1375 年歐洲的地圖也畫上了曼薩・穆薩。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「錢越多越好，大家都多拿一點金子，東西就會變得更便宜。」根據這一話，哪個說法最正確？', opts: ['不對，金子太多，反而變得不值錢', '對，金子越多，每樣東西都會越來越便宜', '對，開羅的人後來都很有錢，不用再工作了', '不對，曼薩・穆薩其實一點金子也沒有帶'], a: 0, why: '開羅一下子多了很多金子，金子就變得不稀奇，一枚金幣能換的銀幣變少了。東西太多，就會變得不值錢。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
