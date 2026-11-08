/* 世界史漫畫 第 1 冊 古文明・第 6 話（只有資料＋這一話自己的圖形）。
   課綱對應：108 課綱社會領域歷史 歷 Na-Ⅳ-1「非洲與西亞的早期文化」（延伸：波斯帝國）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const K = root.ComicArt && root.ComicArt.k;
  if (K) {
    const { C, rect, poly, circ, path, txt, cap, both, zoom } = K;
    root.ComicArt.extend({
      scenes: {
        // 投幣孔＋數字盤（停在西元前 500）
        v1e6_coin(w, h) {
          let s = rect(0, 0, w, h, C.g7) + zoom(w * .5, h * .42, 60, h * .8, 30, 'rgba(247,243,230,.16)', 3);
          s += both(rect(w * .16, 40, w * .68, 130, C.ink, 10)) + rect(w * .5 - 34, 78, 68, 10, '#000', 5) + rect(w * .22, 118, w * .56, 34, C.paper) + txt(w * .5, 143, '10元', 24, C.ink);
          s += circ(w * .5, h * .46, w * .42, C.cream) + circ(w * .5, h * .46, w * .35, C.ink);
          s += txt(w * .5, h * .46 - 30, '2026', 20, 'rgba(247,243,230,.35)') + txt(w * .5, h * .46 - 6, '西元前', 20, C.g3) + txt(w * .5, h * .46 + 34, '500', 42, C.cream);
          return { bg: s + circ(w * .5, h * .46, w * .47, 'url(#cm-glow)', 'opacity=".5"') };
        },
        // 蘇薩宮殿：高台、彩色釉磚帶（只畫花紋）、階梯；柱子用 back[] 擺 column style:'persia'
        v1e6_susa(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .84, h * .08, 200, 'url(#cm-sun)') + circ(w * .84, h * .08, 46, '#FFF8DC');
          s += path(`M0 ${h * .3} Q${w * .3} ${h * .24} ${w * .6} ${h * .29} T${w} ${h * .27} L${w} ${h * .5} L0 ${h * .5}Z`, C.g3);
          s += rect(0, h * .17, w, h * .29, C.brick3) + rect(0, h * .2, w, h * .065, C.blue) + rect(0, h * .265, w, 6, C.gold) + rect(0, h * .2 - 6, w, 6, C.gold);
          for (let x = 30; x < w; x += 64) s += circ(x, h * .2325, 14, C.cream) + circ(x, h * .2325, 7, C.gold);
          s += rect(0, h * .46, w, h * .1, C.brick2) + rect(0, h * .46, w, 8, C.brick3);
          const sx = w * .64, top = h * .46, bot = h * .56;
          s += poly(`${sx - 70},${top} ${sx + 70},${top} ${sx + 130},${bot} ${sx - 130},${bot}`, C.brick3);
          for (let i = 1; i < 8; i++) { const t = i / 8, y = top + (bot - top) * t, hw = 70 + 60 * t; s += rect(sx - hw, y - 2, hw * 2, 3, C.brick2); }
          s += rect(0, h * .56, w, h * .44, C.sand) + path(`M0 ${h * .88} Q${w * .5} ${h * .83} ${w} ${h * .88} L${w} ${h} L0 ${h}Z`, C.brick3);
          return { bg: s };
        },
        // 細長地圖格：薩第斯 → 蘇薩，一路很多驛站
        v1e6_roadmap(w, h) {
          let s = rect(0, 0, w, h, C.paper2) + rect(14, 112, w - 28, 600, C.brick3, 14);
          [[70, 330, 90, 60], [250, 250, 80, 54], [80, 520, 100, 64], [270, 470, 70, 48]].forEach(([x, y, W, H]) => { s += poly(`${x - W / 2},${y} ${x},${y - H} ${x + W / 2},${y}`, C.g3) + poly(`${x},${y - H} ${x + W / 2},${y} ${x + W * .1},${y}`, C.g5, 'opacity=".6"'); });
          const pts = [[70, 186], [190, 250], [120, 340], [236, 410], [130, 500], [250, 610]];
          for (let i = 0; i < pts.length - 1; i++) s += cap(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 16, C.paper3);
          for (let i = 0; i < pts.length - 1; i++) {   // 驛站小方塊（畫個樣子，不是真的個數）
            const [a, b] = [pts[i], pts[i + 1]], L = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.round(L / 26);
            for (let j = 1; j < n; j++) { const t = j / n; s += rect(a[0] + (b[0] - a[0]) * t - 4, a[1] + (b[1] - a[1]) * t - 4, 8, 8, C.wood, 1); }
          }
          s += circ(70, 186, 12, C.ink) + txt(92, 180, '薩第斯', 28, C.ink, { a: 'start' }) + txt(92, 206, '（今天的土耳其）', 17, C.wood, { a: 'start' });
          s += circ(250, 610, 22, 'url(#cm-redglow)') + circ(250, 610, 11, C.red) + txt(226, 620, '蘇薩', 30, C.ink, { a: 'end' }) + txt(226, 648, '（今天的伊朗）', 17, C.wood, { a: 'end' });
          s += rect(150, 270, 168, 40, C.cream, 8, 'opacity=".92"') + txt(234, 299, '約 2500 公里', 24, C.red);
          s += rect(26, 412, 126, 34, C.cream, 8, 'opacity=".92"') + txt(89, 436, '■＝驛站', 20, C.wood);
          return { bg: s };
        }
      },
      cast: {
        v1e6_ata: { name: '阿塔（虛構）', skin: 'skinB', top: 'clay3', bottom: 'g7', leg: 'g7', shoe: 'wood', hair: 'curly', hat: 'softCap', hatC: 'gold', r: 22, k: .95 },
        v1e6_rider: { name: '信差', skin: 'skinC', top: 'red', bottom: 'g9', leg: 'g9', hair: 'man', hat: 'softCap', hatC: 'clay2', beard: 1, r: 19, k: 1.12 },
        v1e6_rider2: { name: '信差', skin: 'skinB', top: 'g5', bottom: 'wood', leg: 'wood', hair: 'man', hat: 'softCap', hatC: 'gold', beard: 1, r: 19, k: 1.12 },
        v1e6_darius: { name: '大流士一世', real: 1, skin: 'skinB', robe: 'purple', trim: 'gold', hair: 'man', hat: 'crownP', beard: 2, r: 19, k: 1.26 },
        v1e6_lyd: { name: '薩第斯來的使者', skin: 'skin', robe: 'blue', trim: 'cream', hair: 'short', hat: 'band', hatC: 'cream', beard: 1, r: 19, k: 1.1 },
        v1e6_ind: { name: '印度河來的使者', skin: 'skinC', top: 'gold', skirt: 'cream', hair: 'man', hat: 'band', hatC: 'red', beard: 1, r: 19, k: 1.08 },
        v1e6_bab: { name: '巴比倫來的使者', skin: 'skinB', robe: 'g7', trim: 'gold', hair: 'man', hat: 'turban', hatC: 'clay3', beard: 2, r: 19, k: 1.12 }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v1e6 = {
    id: 'v1e6', vol: '第 1 冊 古文明', volNo: 1, ep: 6, title: '國王大道上的快遞', next: '大家一起決定？',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！阿凱說包裹到了要分你一半（這次他一次都沒催）。',
    note: '阿凱、小禾、阿塔、信差和各地使者是虛構的角色；大流士一世的話改編自貝希斯敦銘文，不是他的原話。大流士的樣子、蘇薩宮殿、驛站和使者隊伍都是想像圖（使者帶禮物的樣子參考波斯波利斯的階梯浮雕）。國王大道有多長、有幾個驛站、信差要騎幾天，各家說法不完全一樣，這裡寫的是大約的數字。',
    curriculum: '歷 Na-Ⅳ-1 非洲與西亞的早期文化（延伸：波斯帝國的行省、道路與錢幣）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'sand' },
      back: [
        { k: 'column', style: 'persia', x: 110, y: 880, H: 330, f: 'cream' },
        { k: 'column', style: 'persia', x: 690, y: 870, H: 360, f: 'cream' },
        { k: 'sign', t: '驛站', x: 600, y: 940, W: 120, fs: 28 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'g3', hz: .72, window: [.4, .1, .2, .36], winC: 'g2' }, shot: '中景：客廳，阿凱盯著手機查包裹',
          back: [{ k: 'shelf', x: 730, y: 246, W: 90, H: 170 }],
          actors: [
            { c: 'kai', x: 250, y: 330, s: 1, pose: 'hold', expr: 'mad', hold: 'phone', look: .4 },
            { c: 'he', x: 600, y: 332, s: 1.05, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '包裹怎麼還沒到？\n已經三天了！', x: 40, y: 14, w: 250, tail: [236, 124] },
            { t: '你今天已經\n看第二十次了。', x: 460, y: 20, w: 220, tail: [590, 134] }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'street', shot: '大格遠景：阿凱衝向搖搖車，小禾在後面追',
          actors: [
            { c: 'he', x: 448, y: 540, s: .78, pose: 'chase', expr: 'shout', flip: 1, look: .6 },
            { c: 'kai', x: 262, y: 676, s: 1.3, pose: 'run', expr: 'yell', flip: 1, look: .7, sweat: 1 }
          ],
          back: [{ k: 'car', x: 118, y: 628, s: .78 }],
          bubbles: [
            { t: '我坐搖搖車\n去追快遞車！', x: 18, y: 318, w: 216, tail: [206, 428] },
            { t: '陳以凱！！', x: 318, y: 316, w: 176, kind: 'shout', tail: [420, 400], fs: 25 }
          ],
          sfx: [{ t: '咻！', x: 24, y: 470, fs: 66, rot: -10 }] },
        { scene: 'v1e6_coin', shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元前 500',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '哥！又倒轉了！\n西元前 500！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'land', sceneOpt: { sun: [.84, .1], hz: .42, far: 'g3', ground: 'sand', near: 'brick3' }, shot: '滿版遠景：一條筆直的大路伸到山邊，路旁有驛站，信差騎馬奔過',
          back: [
            { k: 'mountain', x: 170, y: 437, W: 380, H: 150, f: 'g5', f2: 'g7' },
            { k: 'mountain', x: 640, y: 437, W: 320, H: 120, f: 'g3', f2: 'g5' },
            { k: 'road', x: 390, y: 1040, W: 600, w2: 26, L: 603, f: 'paper3' },
            { k: 'tree', kind: 'cypress', x: 740, y: 575, H: 170 },
            { k: 'mudHouse', x: 620, y: 568, W: 210, H: 110, door: true },
            { k: 'horse', x: 712, y: 610, s: .55, flip: 1, f: 'clay2' },
            { k: 'sign', t: '驛站', x: 492, y: 600, W: 110, fs: 28 },
            { k: 'puff', x: 196, y: 628, r: 16, f: '#E9DFC2' },
            { k: 'puff', x: 160, y: 636, r: 11, f: '#E9DFC2' },
            { k: 'horse', x: 300, y: 640, s: .75 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v1e6_rider', x: 297, y: 566.5, s: .75, pose: 'ride', expr: 'shout', hold: 'letter', noShadow: true },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 2500 年前，波斯帝國的國王大道', en: 'ROYAL ROAD · c.500 BC', x: 0, y: 18 },
            { t: '波斯帝國的中心在今天的伊朗。那時候它從埃及一路管到印度河邊，是世界上最大的帝國。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：波斯帝國。\n免費附贈翻譯功能。', x: 14, y: 716, w: 310, kind: 'car', tail: [150, 862], fs: 24 },
            { t: '這條路好直、\n好長！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '有人騎馬\n衝過去了！', x: 570, y: 700, w: 196, tail: [624, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'land', sceneOpt: { sun: false, hz: .55, far: 'g3', ground: 'sand' }, shot: '中景：驛站院子，阿凱想爬上備好的馬',
          back: [
            { k: 'mudHouse', x: 650, y: 300, W: 250, H: 140 },
            { k: 'sign', t: '驛站', x: 525, y: 300, W: 110, fs: 26, s: .85 },
            { k: 'horse', x: 330, y: 420, s: 1, saddle: 'red' }
          ],
          actors: [
            { c: 'he', x: 70, y: 440, s: .95, pose: 'scared', expr: 'shock', look: .7 },
            { c: 'kai', x: 210, y: 430, s: 1.05, pose: 'push', expr: 'grin', look: .4 },
            { c: 'v1e6_ata', x: 610, y: 452, s: 1.1, pose: 'shout', expr: 'yell', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '借我騎一下！\n我去追包裹！', x: 110, y: 40, w: 230, tail: [214, 236] },
            { t: '不行！！那匹馬\n是給國王的信差換的！', x: 390, y: 26, w: 320, kind: 'shout', fs: 25, tail: [600, 238] }
          ],
          sfx: [{ t: '嘶——！', x: 330, y: 200, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：驛站馬夫的小孩阿塔叉腰解釋',
          actors: [{ c: 'v1e6_ata', x: 150, y: 548, s: 1.25, pose: 'fists', expr: 'mad', look: -.2 }],
          bubbles: [{ t: '這是國王的\n送信路線！\n每一站都備好\n休息過的馬。', x: 14, y: 70, w: 274, fs: 24, tail: [150, 300] }],
          tag: { t: '驛站馬夫的小孩：阿塔（虛構）', left: 8 } },
        { scene: 'land', sceneOpt: { sun: false, hz: .5, far: 'g3', ground: 'sand' }, shot: '中景：跑累的信差把信交給騎上新馬的信差',
          back: [{ k: 'horse', x: 320, y: 520, s: 1 }],
          actors: [
            { c: 'v1e6_rider', x: 100, y: 520, s: 1, pose: 'offer', expr: 'worry', hold: 'letter', sweat: 2, look: .5 },
            { c: 'v1e6_rider2', x: 316, y: 422, s: 1, pose: 'ride', expr: 'grin', noShadow: true, look: -.4 }
          ],
          caption: [{ t: '一站接一站：換人、換馬，\n信不用停下來！', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '國王的信，\n交給你了！', x: 10, y: 120, w: 190, fs: 24, tail: [108, 300] },
            { t: '收到！\n下一站見！', x: 250, y: 128, w: 190, fs: 24, tail: [318, 268] }
          ],
          sfx: [{ t: '噠噠噠', x: 300, y: 500, fs: 36, rot: -6 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v1e6_susa', shot: '滿版：國王大道的終點蘇薩，各地使者排隊送禮物上宮殿',
          back: [
            { k: 'column', style: 'persia', x: 60, y: 478, H: 300, f: 'cream' },
            { k: 'column', style: 'persia', x: 210, y: 478, H: 300, f: 'cream' },
            { k: 'column', style: 'persia', x: 360, y: 478, H: 300, f: 'cream' },
            { k: 'column', style: 'persia', x: 640, y: 478, H: 300, f: 'cream' },
            { k: 'column', style: 'persia', x: 760, y: 478, H: 300, f: 'cream' },
            { k: 'crowd', x: 400, y: 612, n: 12, W: 760, s: .8, op: .55 },
            { k: 'camel', x: 120, y: 650, s: .8, load: 'gold' }
          ],
          actors: [
            { c: 'v1e6_bab', x: 270, y: 650, s: .85, pose: 'walk', expr: 'calm' },
            { c: 'v1e6_ind', x: 390, y: 652, s: .85, pose: 'carry', expr: 'calm', hold: 'sack' },
            { c: 'v1e6_lyd', x: 505, y: 650, s: .85, pose: 'offer', expr: 'happy', hold: 'cup' },
            { c: 'v1e6_ata', x: 130, y: 1026, s: 1.3, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 462, y: 1028, s: 1.35, pose: 'fists', expr: 'shock', sweat: 1, flip: 1, look: .7 },
            { c: 'he', x: 660, y: 1030, s: 1.35, pose: 'hold', expr: 'awe', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [
            { t: '國王大道的終點：蘇薩（今天的伊朗）。\n大流士一世在這裡蓋了大宮殿。', x: 16, y: 16, w: 480 },
            { t: '波斯波利斯宮殿的階梯上，也刻著二十多個地方的使者帶禮物來的樣子。', x: 16, y: 128, w: 420, dark: false }
          ],
          bubbles: [
            { t: '各地的人\n都來送禮物\n給國王！', x: 14, y: 636, w: 220, fs: 24, tail: [140, 790] },
            { t: '蘇薩？！第 1 話那塊\n石碑被搬來這裡！', x: 252, y: 646, w: 266, fs: 24, tail: [440, 772] },
            { t: '兩河、埃及、\n印度河……\n我們去過的地方，\n都在這個帝國裡！', x: 536, y: 596, w: 236, fs: 23, tail: [646, 790] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v1e6_roadmap', shot: '細長地圖格：從薩第斯到蘇薩的國王大道，一路都是驛站',
          actors: [
            { c: 'kai', x: 80, y: 1034, s: 1.15, pose: 'think', expr: 'think', look: .6 },
            { c: 'v1e6_ata', x: 262, y: 1034, s: 1.15, pose: 'pointUp', expr: 'smug', flip: 1, look: -.4 }
          ],
          caption: [{ t: '據希臘歷史學家希羅多德\n記載，路上有 111 個驛站。', x: 0, y: 14, w: 344 }],
          bubbles: [
            { t: '走路要\n多久？', x: 8, y: 700, w: 110, fs: 24, tail: [84, 820] },
            { t: '走路大約三個月；\n信差接力騎馬，\n大約七到九天！', x: 124, y: 690, w: 216, fs: 22, tail: [250, 812] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '字卡：大帝國怎麼管、怎麼溝通、怎麼買賣',
          caption: [{ t: '這麼大的帝國，怎麼管？', x: 0, y: 16 }],
          cards: [
            { icon: 'people', y: 80, t: '分成很多「行省」，\n每省由國王派的「總督」管，\n各地要繳稅給國王。' },
            { icon: 'letterI', y: 344, t: '各地的人說不同的話、\n信不同的神。重要的命令\n常用好幾種文字刻寫。' },
            { icon: 'coinI', y: 610, t: '呂底亞人（在薩第斯）\n最早做出錢幣；大流士發行\n金幣「大流克」，買賣更方便。' }
          ],
          bubbles: [{ t: '有錢幣，就不用扛\n一袋大麥去買東西了！', x: 24, y: 900, w: 370, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'brick3', brick: 1, floor: 'paper3', hz: .8 }, shot: '矮寬格：宮殿裡，大流士一世拿著剛送到的信',
          back: [
            { k: 'column', style: 'persia', x: 44, y: 330, H: 330, f: 'cream' },
            { k: 'column', style: 'persia', x: 740, y: 330, H: 330, f: 'cream' }
          ],
          actors: [
            { c: 'kai', x: 96, y: 390, s: .92, pose: 'scared', expr: 'shock', look: .8 },
            { c: 'he', x: 196, y: 392, s: .92, pose: 'hold', expr: 'awe', hold: 'notebook', look: .8 },
            { c: 'v1e6_ata', x: 300, y: 392, s: .9, pose: 'bow', expr: 'calm' },
            { c: 'v1e6_darius', x: 560, y: 394, s: 1, pose: 'raise', expr: 'calm', hold: 'letter', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '波斯、巴比倫、埃及、薩第斯……\n一共二十三個地方，都歸我管。', x: 40, y: 14, w: 470, fs: 24, tail: [528, 146] }
          ],
          tag: { t: '大流士一世的話：改編自貝希斯敦銘文', left: 10, top: 112 } },
        { scene: 'land', sceneOpt: { sky: '#E8CFA0', sun: [.8, .3], hz: .55, far: 'clay3', ground: 'sand', near: 'clay3' }, shot: '收尾大格：傍晚的驛站前，準備出發',
          back: [
            { k: 'mudHouse', x: 600, y: 360, W: 220, H: 120 },
            { k: 'sign', t: '驛站', x: 450, y: 372, W: 110, fs: 26, s: .9 },
            { k: 'car', x: 680, y: 600, s: .8 }
          ],
          actors: [
            { c: 'v1e6_ata', x: 104, y: 566, s: 1.2, pose: 'wave', expr: 'worry', look: .6 },
            { c: 'kai', x: 278, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 474, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '聽說西邊的希臘人\n跟國王吵起來了……', x: 14, y: 170, w: 252, fs: 22, tail: [110, 300] },
            { t: '我懂了！包裹也是\n一站一站接力送的！', x: 272, y: 160, w: 250, fs: 22, tail: [284, 326] },
            { t: '回家以後\n不准再催囉！', x: 528, y: 196, w: 180, fs: 23, tail: [476, 362] },
            { t: '嗶嗶——\n下一站，\n雅典！', x: 620, y: 24, w: 146, kind: 'car', fs: 22, tail: [690, 480] }
          ],
          caption: [{ t: '下一話：大家一起決定？', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '好多民族的大帝國', t: '大約 2500 年前的波斯帝國，中心在今天的伊朗，從埃及、兩河流域一直到印度河邊。第 1、2、3、5 話去過的地方，那時都在這個帝國裡（第 4 話的殷在很遠的東邊，不在裡面）。各地的人說不同的話、信不同的神。' },
      { h: '行省和總督', t: '大流士一世把帝國分成很多行省，由國王派的總督管理，各地要繳稅給國王。波斯波利斯宮殿的階梯浮雕，刻著二十多個地方的使者帶禮物來的樣子。' },
      { h: '國王大道和驛站接力', t: '從薩第斯到蘇薩，大約 2500 公里。據希臘歷史學家希羅多德記載，路上有 111 個驛站；走路大約要三個月，信差一站一站換人換馬接力，學者估計大約七到九天就能送到。' },
      { h: '錢幣', t: '住在薩第斯一帶（今天的土耳其）的呂底亞人最早做出錢幣；大流士發行金幣「大流克」，買賣不用再扛著大麥換東西，方便多了。' },
      { h: '居魯士大帝', t: '波斯帝國的開國國王。西元前 539 年進入巴比倫，讓以前被擄到巴比倫的人可以回到家鄉。' }
    ],
    map: {
      bounds: { lon: [22, 76], lat: [22, 44] },
      cap: '紅色虛線是國王大道（從薩第斯到蘇薩），細的虛線是蘇薩到波斯波利斯。路線是學者推測的大概走法；河道、海岸是今天的樣子，簡化畫法。',
      alt: '波斯帝國地圖：國王大道從西邊的薩第斯（今土耳其）往東南走到蘇薩（今伊朗，紅點），旁邊有巴比倫、波斯波利斯，西邊是尼羅河，東邊是印度河',
      rivers: ['euphrates', 'tigris', 'nile', 'nileRosetta', 'nileDamietta', 'indus'],
      routes: [
        { pts: [[38.49, 28.04], [39.65, 31.98], [39.0, 34.5], [38.7, 35.5], [38.35, 38.3], [37.9, 40.2], [36.19, 44.01], [34.4, 45.6], [32.19, 48.25]] },
        { pts: [[32.19, 48.25], [31.0, 50.5], [29.93, 52.89]], w: 3 }
      ],
      labels: [
        { t: '國王大道', lat: 40.6, lon: 36.6, size: 22, f: 'red' },
        { t: '波斯帝國', lat: 35.4, lon: 57.5, size: 30, f: 'g9' },
        { t: '地中海', lat: 33.6, lon: 28.6, size: 20, f: 'cream' },
        { t: '黑海', lat: 43.0, lon: 34.8, size: 20, f: 'cream' },
        { t: '裏海', lat: 41.6, lon: 51.0, size: 20, f: 'cream' },
        { t: '波斯灣', lat: 27.0, lon: 51.4, size: 20, f: 'cream' },
        { t: '埃及', lat: 25.5, lon: 29.4, size: 22, f: 'wood' },
        { t: '尼羅河', lat: 28.6, lon: 33.6, size: 18, f: 'g7' },
        { t: '印度河', lat: 31.0, lon: 68.0, size: 20, f: 'g7' }
      ],
      cities: [
        { n: '蘇薩', lat: 32.19, lon: 48.25, main: 1, side: 'r' },
        { n: '巴比倫', lat: 32.54, lon: 44.42, side: 'l' },
        { n: '波斯波利斯', lat: 29.93, lon: 52.89, side: 'r' },
        { n: '薩第斯', lat: 38.49, lon: 28.04, side: 'r', dy: 20 },
        { n: '推羅', lat: 33.27, lon: 35.2, side: 'l' },
        { n: '雅典', lat: 37.98, lon: 23.73, side: 'r', dy: 24 }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從第 1 話的漢摩拉比到大流士，隔了一千兩百多年。第 1 冊「古文明」就走到這裡。',
      items: [
        { y: -1750, when: '約西元前 1750 年', t: '漢摩拉比把\n法律刻成石碑', side: 'u', w: 160 },
        { y: -539, when: '西元前 539 年', t: '居魯士大帝\n進入巴比倫', side: 'd', w: 180 },
        { y: -500, when: '約西元前 500 年', t: '大流士一世：\n國王大道接力', side: 'u', main: 1, w: 190 },
        { y: 1901, when: '西元 1901～1902 年', t: '考古隊在蘇薩\n挖到法典石碑', side: 'd', w: 206 },
        { y: 2026, when: '今天', t: '波斯波利斯\n是世界遺產', side: 'u', w: 160 }
      ]
    },
    sources: [
      '大英百科〈Royal Road〉〈Achaemenian dynasty〉〈Darius I〉〈Cyrus II〉（國王大道從蘇薩到薩第斯、超過 2400 公里；行省與總督；西元前 539 年進入巴比倫）',
      '希羅多德《歷史》5.52–53、8.98（Livius.org 英譯）：薩第斯到蘇薩 111 個驛站、走路約 90 天、信差騎馬一站接一站；信差約 7～9 天是現代學者的估計',
      'Encyclopaedia Iranica〈Daric〉〈Bisotun〉、大英博物館錢幣與居魯士圓柱說明（呂底亞最早的錢幣、大流克金幣；貝希斯敦銘文用三種文字、列出 23 個地方；居魯士讓被擄的人回鄉）',
      'UNESCO 世界遺產〈Persepolis〉（1979 年列入；階梯浮雕上各地使者帶禮物）',
      '羅浮宮〈The Code of Hammurabi〉（石碑 1901～1902 年在蘇薩出土）',
      '108 課綱社會領域 歷 Na-Ⅳ-1'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '國王的信差為什麼能把信送得那麼快？', opts: ['在驛站換人換馬接力', '同一個人騎到底不休息', '把信綁在鴿子腳上', '沿著大河坐船去送'], a: 0, why: '國王大道上一站一站都有驛站，信差跑完一段就把信交給下一個人、換一匹休息過的馬，信就不用停下來。' },
      { id: 'q2', d: 1, type: 'tf', q: '最早做出錢幣的，是住在薩第斯一帶的呂底亞人。', a: true, why: '對！呂底亞人（今天的土耳其一帶）最早做出錢幣，後來大流士發行了金幣「大流克」。' },
      { id: 'q3', d: 2, type: 'mc', q: '波斯帝國分成很多行省，每個行省主要由誰來管？', opts: ['國王派去的總督', '當地選出的班長', '驛站的馬夫', '希臘來的使者'], a: 0, why: '大流士一世把帝國分成很多行省，每一省由國王派去的總督管理，各地要繳稅給國王。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['漢摩拉比把法律刻成石碑', '居魯士大帝進入巴比倫', '大流士一世時，國王大道上的信差接力', '考古隊在蘇薩挖到法典石碑'], why: '漢摩拉比（約西元前 1750 年）最早；居魯士在西元前 539 年進入巴比倫；大流士一世大約在西元前 500 年；石碑到西元 1901～1902 年才被挖出來。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「波斯帝國那麼大，一定是大家都說同一種話、信同一個神，才管得動。」根據這一話，哪個說法最正確？', opts: ['不對，各地的人說不同的話、信不同的神', '對，國王規定全國只能說波斯話', '對，所以命令都只用一種文字寫', '不對，波斯帝國其實只有一座小城那麼大'], a: 0, why: '波斯帝國裡有好多民族，說不同的話、信不同的神；重要的命令常用好幾種文字刻寫，靠行省、總督和道路來管理。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
