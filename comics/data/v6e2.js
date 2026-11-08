/* 世界史漫畫 第 6 冊 帝國與兩次世界大戰・第 2 話（只有資料＋這一話自己的圖形）。
   國中社會會再學到：日本開國與明治維新、臺灣的日治時期。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const A = root.ComicArt, K = A && A.k;
  if (K) {
    const { C, rect, poly, circ, path, txt, both, cap, puff } = K;
    const GRAY = '#B8B6AC', SMOKE = '#4A4F52';
    A.extend({
      parts: {
        // 雙角帽（十九世紀海軍軍官）
        v6e2_bicorne: () => path('M-36 -8 Q-24 -42 0 -38 Q24 -42 36 -8 Q0 -22 -36 -8Z', C.ink) + path('M-30 -12 Q0 -24 30 -12 L30 -9 Q0 -20 -30 -9Z', C.gold)
      },
      cast: {
        v6e2_grandma: { name: '外婆', skin: 'skin', top: 'purple', bottom: 'g9', leg: 'g9', shoe: 'wood', hair: 'bun', hairC: GRAY, acc: ['glasses'], r: 20, k: 1.02 },
        v6e2_kenta: { name: '健太（虛構）', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'skin', shoe: 'wood', hair: 'short', r: 22, k: .94 },
        v6e2_kenta2: { name: '長大的健太（虛構）', skin: 'skin', top: '#2A2D33', bottom: '#2A2D33', leg: '#2A2D33', hair: 'short', r: 20, k: 1.08 },
        v6e2_perry: { name: '培里', real: 1, skin: 'skin', top: '#1F2A44', bottom: '#1F2A44', leg: '#1F2A44', hair: 'short', hairC: '#7A6A58', hat: 'v6e2_bicorne', r: 19, k: 1.2 },
        v6e2_official: { name: '浦賀的官員', skin: 'skin', robe: 'g9', trim: 'cream', hair: 'topknot', r: 19, k: 1.14 },
        v6e2_lady: { name: '東京的路人', skin: 'skin', robe: 'purple', trim: 'gold', hair: 'bun', r: 19, k: 1.06 },
        v6e2_gent: { name: '東京的路人', skin: 'skin', top: '#3B3F4A', bottom: '#2A2D33', leg: '#2A2D33', hair: 'short', hat: 'tophat', r: 19, k: 1.12 },
        v6e2_twmom: { name: '臺灣的媽媽', skin: 'skin', top: 'blue', bottom: 'g9', leg: 'g9', shoe: 'ink', hair: 'bun', r: 19, k: 1.06 },
        v6e2_twkid: { name: '臺灣的小孩', skin: 'skinB', top: 'cream', bottom: 'wood', leg: 'skinB', shoe: 'ink', hair: 'short', r: 22, k: .9 }
      },
      props: {
        // 牆上的老照片
        v6e2_photo: x => K.place(x, both(rect(-46, -62, 92, 62, C.wood, 3)) + rect(-38, -55, 76, 48, '#C9BFA6') + circ(0, -38, 9, '#8C8270') + path('M-14 -8 Q-14 -28 0 -28 Q14 -28 14 -8Z', '#8C8270')),
        // 黑煙一團
        v6e2_smoke: x => K.place(x, puff(0, 0, x.r || 24, SMOKE) + puff(x.r * 1.3 || 30, -(x.r || 24) * .8, (x.r || 24) * .8, SMOKE)),
        // 竹叢
        v6e2_bamboo: x => { let s = ''; for (let i = 0; i < 6; i++) { const dx = (i - 2.5) * 16, hh = 200 + (i % 3) * 40; s += rect(dx - 3, -hh, 6, hh, C.g7); for (let j = 1; j < 4; j++) s += K.ell(dx + (j % 2 ? 16 : -16), -hh * j / 4, 18, 6, C.g5); } return K.place(x, s); },
        // 電線桿
        v6e2_pole: x => K.place(x, rect(-4, -260, 8, 260, C.wood) + rect(-30, -246, 60, 6, C.wood) + circ(-24, -250, 4, C.cream) + circ(24, -250, 4, C.cream)),
      },
      scenes: {
        // 江戶灣：遠山、海、岸邊
        v6e2_bay(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .2, h * .12, 160, 'url(#cm-sun)');
          s += path(`M0 ${h * .42} Q${w * .2} ${h * .32} ${w * .42} ${h * .4} Q${w * .7} ${h * .3} ${w} ${h * .4} L${w} ${h * .46} L0 ${h * .46}Z`, C.g3);
          s += rect(0, h * .45, w, h * .37, C.g5);
          for (let i = 0; i < 14; i++) { const yy = h * (.47 + (i * .37) % 1 * .3), xx = (i * 151) % w; s += rect(xx, yy, 40 + (yy / h) * 60, 4, C.g2, 2, 'opacity=".5"'); }
          s += path(`M0 ${h * .82} Q${w * .5} ${h * .78} ${w} ${h * .83} L${w} ${h} L0 ${h}Z`, C.sand);
          return { bg: s };
        },
        // 明治時代的東京街頭：紅磚洋樓、電線、橋上的火車
        v6e2_tokyo(w, h) {
          let s = rect(0, 0, w, h, C.sky) + circ(w * .85, h * .1, 160, 'url(#cm-sun)');
          s += rect(0, h * .3, w, h * .06, C.g3) + rect(0, h * .36, w, 16, C.wood);
          for (let x = 30; x < w; x += 90) s += rect(x, h * .36, 14, h * .1, C.wood);
          s += both(rect(w * .55, h * .44, w * .45, h * .2, '#B8553D')) + rect(w * .55, h * .44, w * .45, 12, C.cream);
          for (let i = 0; i < 4; i++) s += rect(w * (.58 + i * .1), h * .48, w * .05, h * .08, C.cream, 3);
          s += both(rect(0, h * .46, w * .32, h * .18, C.paper2)) + path(`M-10 ${h * .46} L${w * .16} ${h * .4} L${w * .34} ${h * .46}Z`, C.g9);
          s += rect(0, h * .64, w, h * .36, C.paper3) + rect(0, h * .64, w, 8, 'rgba(21,23,20,.12)');
          s += path(`M0 ${h * .2} Q${w * .5} ${h * .26} ${w} ${h * .2}`, 'none', `stroke="${C.ink}" stroke-width="2"`);
          return { bg: s };
        },
        // 1895 年的臺灣鄉下
        v6e2_village(w, h) {
          let s = rect(0, 0, w, h, C.sky) + path(`M0 ${h * .36} Q${w * .3} ${h * .22} ${w * .6} ${h * .3} T${w} ${h * .26} L${w} ${h * .5} L0 ${h * .5}Z`, C.g5);
          s += rect(0, h * .46, w, h * .54, C.g3) + rect(0, h * .62, w, h * .38, C.sand);
          for (let i = 0; i < 6; i++) s += rect(w * (.05 + i * .16), h * .5, w * .12, h * .1, C.g5, 4, 'opacity=".6"');
          return { bg: s };
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v6e2 = {
    id: 'v6e2', vol: '第 6 冊 帝國與兩次世界大戰', volNo: 6, ep: 2, title: '黑船來了', next: '被畫線切開的非洲',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！外婆說，下次換她請你聽阿公的故事。',
    note: '阿凱、小禾、外婆、健太和 1895 年臺灣的一家人是虛構的角色；培里的話改編自美國國務院史料對這趟任務的說明，不是他的原話。黑船、浦賀海邊、明治時代的東京街頭和臺灣村子都是想像圖。日本統治臺灣五十年，留下的建設和傷痕都有，臺灣社會對這段歷史有不同的記憶和看法，這一話兩邊都寫，不替讀者下結論。',
    curriculum: '國中社會會再學到：日本開國與明治維新、臺灣的日治時期',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'g7', near: 'sand' },
      back: [
        { k: 'ship', kind: 'steam', x: 140, y: 920, s: .7, f: 'ink' },
        { k: 'v6e2_smoke', x: 150, y: 780, r: 26 },
        { k: 'v6e2_pole', x: 700, y: 960, s: 1.1 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'wood', hz: .74, window: [.04, .12, .2, .4], winC: 'g3' }, shot: '中景：臺南外婆家客廳，外婆指著牆上的老照片',
          back: [{ k: 'v6e2_photo', x: 410, y: 130, s: 1.1 }],
          actors: [
            { c: 'kai', x: 230, y: 330, s: 1, pose: 'lookup', expr: 'shock', look: .5 },
            { c: 'he', x: 690, y: 332, s: .95, pose: 'hold', expr: 'think', hold: 'notebook', flip: 1, look: .6 },
            { c: 'v6e2_grandma', x: 540, y: 330, s: .92, pose: 'point', expr: 'happy', flip: 1, look: .7 }
          ],
          bubbles: [
            { t: '這是我阿公，\n日本時代拍的。', x: 290, y: 186, w: 200, fs: 22, tail: [520, 176] },
            { t: '日本時代？\n臺灣以前歸日本管？', x: 12, y: 30, w: 250, fs: 22, tail: [228, 150] },
            { t: '怎麼會這樣？', x: 560, y: 20, w: 190, kind: 'think', fs: 22 }
          ],
          tag: { t: '哥哥阿凱（五年級）、妹妹小禾（三年級）', left: 8, top: 302 } },
        { scene: 'street', shot: '大格：外婆家巷口，阿凱把 10 元投進搖搖車',
          back: [{ k: 'car', x: 150, y: 650, s: 1 }],
          actors: [
            { c: 'kai', x: 340, y: 650, s: 1.1, pose: 'offer', expr: 'grin', hold: 'coin', flip: 1, look: .5 },
            { c: 'he', x: 460, y: 664, s: 1, pose: 'scared', expr: 'worry', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '去現場看\n最清楚！', x: 14, y: 230, w: 220, fs: 24, tail: [320, 440] },
            { t: '不要每次都\n用這招啦！', x: 290, y: 250, w: 210, fs: 24, tail: [450, 490] }
          ],
          sfx: [{ t: '叮！', x: 40, y: 430, fs: 54, rot: -10 }] },
        { scene: 'coin', sceneOpt: { era: '西元', year: 1853 }, shot: '小格特寫：硬幣掉進投幣孔，數字盤停在西元 1853',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'he', x: 118, y: 860, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '倒轉了！\n停在 1853！', x: 18, y: 436, w: 206, fs: 24, tail: [108, 530] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v6e2_bay', shot: '滿版遠景：海灣裡停著四艘冒黑煙的大船，岸邊的人都在看',
          back: [
            { k: 'ship', kind: 'steam', x: 560, y: 520, s: .9, f: 'ink' }, { k: 'v6e2_smoke', x: 576, y: 330, r: 26 },
            { k: 'ship', kind: 'steam', x: 230, y: 500, s: .6, f: 'ink' }, { k: 'v6e2_smoke', x: 240, y: 380, r: 18 },
            { k: 'ship', kind: 'steam', x: 700, y: 470, s: .45, f: 'ink' },
            { k: 'ship', kind: 'steam', x: 380, y: 470, s: .4, f: 'ink' },
            { k: 'crowd', x: 600, y: 880, n: 9, W: 360, s: .8, op: .6 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 2 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 173 年前，江戶灣的浦賀外海', en: 'URAGA, EDO BAY · 1853', x: 0, y: 18 },
            { t: '江戶就是今天的東京。那時日本由德川家的將軍管，兩百多年來只讓荷蘭、中國的船來做生意。', x: 0, y: 112, w: 470, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：日本江戶灣。\n免費附贈翻譯功能。', x: 14, y: 716, w: 320, kind: 'car', tail: [150, 862], fs: 23 },
            { t: '黑黑的大船\n在冒煙！', x: 348, y: 660, w: 196, tail: [462, 754] },
            { t: '是蒸汽船！', x: 566, y: 720, w: 196, tail: [618, 792], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v6e2_bay', shot: '中景：海邊，阿凱對著大船猛揮手，漁村小孩健太嚇得魚簍都掉了',
          back: [{ k: 'ship', kind: 'steam', x: 640, y: 230, s: .5, f: 'ink' }, { k: 'v6e2_smoke', x: 648, y: 150, r: 16 }],
          actors: [
            { c: 'kai', x: 200, y: 440, s: 1.05, pose: 'wave', expr: 'grin', look: .6 },
            { c: 'he', x: 80, y: 446, s: .95, pose: 'hold', expr: 'worry', hold: 'notebook', look: .6 },
            { c: 'v6e2_kenta', x: 560, y: 452, s: 1.1, pose: 'scared', expr: 'shock', flip: 1, look: .7, sweat: 1 }
          ],
          props: [{ k: 'sack', x: 470, y: 452, s: .7, rot: 30 }],
          bubbles: [
            { t: '哈囉——！\n載我們一程！', x: 100, y: 40, w: 220, tail: [210, 240] },
            { t: '別揮手啦！大家都在\n怕那些「黑船」！', x: 370, y: 40, w: 320, kind: 'shout', fs: 24, tail: [548, 260] }
          ],
          sfx: [{ t: '啪噠', x: 410, y: 330, fs: 40, rot: -8 }] },
        { scene: 'flat', sceneOpt: { c: 'g3' }, shot: '小格：健太說明那些船從哪裡來',
          actors: [{ c: 'v6e2_kenta', x: 150, y: 548, s: 1.25, pose: 'pointUp', expr: 'worry', look: -.2 }],
          bubbles: [{ t: '我叫健太。\n我爸說，船從美國來，\n要日本「開國」！', x: 14, y: 70, w: 274, fs: 23, tail: [150, 300] }],
          tag: { t: '漁村小孩：健太（虛構）', left: 8 } },
        { scene: 'v6e2_bay', shot: '中景：岸上，培里把信交給日本官員',
          actors: [
            { c: 'v6e2_official', x: 360, y: 540, s: .95, pose: 'bow', expr: 'calm', flip: 1 },
            { c: 'v6e2_perry', x: 140, y: 540, s: .95, pose: 'offer', expr: 'calm', hold: 'letter', look: .4 }
          ],
          caption: [{ t: '1853 年 7 月，美國的培里\n帶著四艘軍艦來到這裡。', x: 0, y: 14, w: 330 }],
          bubbles: [
            { t: '這是美國總統的信：\n請照顧遇難的船員，\n開港讓船補給。', x: 10, y: 120, w: 260, fs: 22, tail: [150, 316] }
          ],
          tag: { t: '培里的話：改編自美國國務院史料的說明', left: 8, top: 520 } }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v6e2_tokyo', shot: '滿版：十幾年後的東京，有火車、電線桿、洋樓，也有穿和服的人',
          back: [
            { k: 'coach', x: 380, y: 360, s: .42, f: 'g7' }, { k: 'coach', x: 490, y: 360, s: .42, f: 'g7' }, { k: 'loco', x: 610, y: 360, s: .34, smoke: 1 },
            { k: 'v6e2_pole', x: 120, y: 660, s: 1.2 }, { k: 'v6e2_pole', x: 760, y: 660, s: 1.2 },
            { k: 'car', x: 190, y: 1000, s: 1.1, rot: -4 }
          ],
          actors: [
            { c: 'v6e2_gent', x: 300, y: 690, s: .85, pose: 'walk', expr: 'calm' },
            { c: 'v6e2_lady', x: 420, y: 690, s: .85, pose: 'walk', expr: 'happy', flip: 1 },
            { c: 'v6e2_kenta2', x: 640, y: 700, s: 1, pose: 'point', expr: 'happy', flip: 1, look: .4 },
            { c: 'kai', x: 468, y: 1000, s: 1.2, pose: 'fists', expr: 'shock', look: -.4, sweat: 1 },
            { c: 'he', x: 622, y: 1012, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: .6 }
          ],
          caption: [
            { t: '1854 年，日本跟美國簽約，開了兩個港口。\n1868 年，新政府開始「明治維新」，江戶改名叫東京。', x: 16, y: 16, w: 600 }
          ],
          bubbles: [
            { t: '嗶——快轉到\n明治時代的東京。', x: 14, y: 716, w: 260, kind: 'car', tail: [150, 862], fs: 23 },
            { t: '日本決定學西方：\n請外國老師、送學生\n出國、蓋鐵路！', x: 520, y: 360, w: 256, fs: 22, tail: [650, 486] },
            { t: '健太長大了！', x: 300, y: 740, w: 196, fs: 24, tail: [462, 790] },
            { t: '有火車，\n還有電線桿！', x: 560, y: 600, w: 210, tail: [620, 800], fs: 24 }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'flat', sceneOpt: { c: 'paper2' }, shot: '細長字卡：甲午戰爭與《馬關條約》',
          caption: [{ t: '後來……', x: 0, y: 16 }],
          cards: [
            { icon: 'ship', y: 80, t: '1894～1895 年\n甲午戰爭：\n日本打贏清朝。' },
            { icon: 'scrollI', y: 360, t: '1895 年 4 月 17 日\n《馬關條約》：\n清朝把臺灣、澎湖\n割讓給日本。' }
          ],
          actors: [{ c: 'kai', x: 170, y: 1034, s: 1.15, pose: 'scared', expr: 'shock', look: .2 }],
          bubbles: [{ t: '臺灣就是\n這樣被割讓的……', x: 20, y: 700, w: 300, fs: 23, tail: [174, 820] }] },
        { scene: 'v6e2_village', shot: '大格：1895 年臺灣的村子，一家人站在竹叢旁，擔心地望著遠方',
          back: [
            { k: 'house', roof: 'tile', roofC: 'clay2', f: 'brick3', x: 260, y: 600, W: 300, H: 130 },
            { k: 'v6e2_bamboo', x: 360, y: 640, s: 1 }
          ],
          actors: [
            { c: 'v6e2_twmom', x: 110, y: 760, s: 1.05, pose: 'think', expr: 'worry', look: .5 },
            { c: 'v6e2_twkid', x: 230, y: 770, s: 1, pose: 'stand', expr: 'worry', look: .6 },
            { c: 'he', x: 330, y: 1030, s: 1.15, pose: 'hold', expr: 'worry', hold: 'notebook', flip: 1, look: .4 }
          ],
          caption: [{ t: '1895 年 5 月底，日本軍隊從澳底（今新北市貢寮）上岸。很多臺灣人不願意，起來抵抗，前後打了五個多月。', x: 0, y: 16, w: 422 }],
          bubbles: [
            { t: '以後要聽\n誰的呢？', x: 10, y: 380, w: 170, fs: 23, tail: [110, 530] },
            { t: '阿爸說要\n去守村子……', x: 200, y: 400, w: 200, fs: 23, tail: [234, 560] },
            { t: '大家都沒被\n問過要不要……', x: 30, y: 880, w: 230, fs: 22, tail: [300, 860] }
          ] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'room', sceneOpt: { wall: 'paper2', floor: 'wood', hz: .74, window: [.04, .12, .2, .4], winC: 'g3' }, shot: '矮寬格：回到外婆家，外婆說起兩種記憶',
          back: [{ k: 'v6e2_photo', x: 410, y: 130, s: 1.1 }],
          actors: [
            { c: 'kai', x: 120, y: 384, s: 1, pose: 'think', expr: 'think', look: .5 },
            { c: 'he', x: 230, y: 388, s: .95, pose: 'hold', expr: 'calm', hold: 'notebook', look: .6 },
            { c: 'v6e2_grandma', x: 710, y: 388, s: .95, pose: 'raise', expr: 'calm', flip: 1, look: .6 }
          ],
          bubbles: [
            { t: '有人記得蓋了鐵路、學校；\n也有人記得被差別對待、\n起來反抗，失去家人。', x: 300, y: 190, w: 340, fs: 22, tail: [690, 216] },
            { t: '兩種記憶\n都是真的。', x: 10, y: 40, w: 180, fs: 23, tail: [228, 210] },
            { t: '日本統治臺灣，\n一共五十年。', x: 470, y: 24, w: 230, fs: 22, tail: [700, 176] }
          ] },
        { scene: 'street', shot: '收尾大格：傍晚的巷口，兄妹跟外婆揮手，坐上搖搖車',
          back: [{ k: 'car', x: 620, y: 600, s: .9 }],
          actors: [
            { c: 'v6e2_grandma', x: 110, y: 566, s: 1.15, pose: 'wave', expr: 'happy', look: .6 },
            { c: 'kai', x: 290, y: 570, s: 1.2, pose: 'shout', expr: 'grin', flip: 1, look: .6 },
            { c: 'he', x: 450, y: 576, s: 1.15, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '想知道更多，\n就多問幾個人。', x: 14, y: 170, w: 240, fs: 22, tail: [110, 320] },
            { t: '外婆，下次再講\n阿公的故事！', x: 262, y: 160, w: 230, fs: 22, tail: [290, 326] },
            { t: '我要記下來！', x: 470, y: 262, w: 180, fs: 22, tail: [450, 366] },

            { t: '嗶嗶——\n下一站，\n柏林！', x: 630, y: 24, w: 140, kind: 'car', fs: 22, tail: [640, 470] }
          ],
          caption: [{ t: '下一話：被畫線切開的非洲', x: 288, y: 576 }] }
      ] }
    ],
    recap: [
      { h: '黑船來了', t: '1853 年 7 月，美國的培里帶著四艘軍艦開到江戶灣（今天的東京灣），送來美國總統的信，要日本開港。日本人叫這些冒黑煙的船「黑船」。' },
      { h: '日本開國', t: '1639 年以後的兩百多年，日本只讓荷蘭、中國的船來做生意。1854 年，日本跟美國簽約，開了下田、函館兩個港口。' },
      { h: '明治維新', t: '1868 年，新政府開始改革，江戶改名叫東京。日本請外國老師、送學生出國讀書，蓋鐵路、電報，辦學校，很快學會西方的做法。' },
      { h: '臺灣在 1895 年', t: '甲午戰爭日本打贏清朝。1895 年 4 月 17 日的《馬關條約》，把臺灣、澎湖割讓給日本。5 月底日軍從澳底上岸，很多臺灣人起來抵抗，打了五個多月。' },
      { h: '日本統治的五十年', t: '從 1895 年到 1945 年。有人記得留下的鐵路、電信和學校；也有人記得被差別對待、反抗和失去。兩種記憶都是這段歷史的一部分。' }
    ],
    map: {
      bounds: { lon: [116, 146], lat: [20, 44] },
      cap: '紅點是江戶（今天的東京）。培里的船停在浦賀外海；1854 年的條約開了下田、函館。《馬關條約》在下關簽訂，臺灣、澎湖割讓給日本。海岸線是今天的樣子，簡化畫法。',
      alt: '日本與臺灣地圖：紅點江戶在日本本州東邊，旁邊是浦賀和下田，北海道有函館，本州西邊有下關，南邊的臺灣標出澳底和臺南',
      labels: [
        { t: '日本', lat: 37.5, lon: 136.5, size: 28, f: 'g9' },
        { t: '太平洋', lat: 30.5, lon: 141.0, size: 24, f: 'cream' },
        { t: '清朝', lat: 33.0, lon: 118.5, size: 26, f: 'g9' }
      ],
      cities: [
        { n: '江戶（今東京）', lat: 35.68, lon: 139.69, main: 1, side: 'l', dy: -22 },

        { n: '浦賀', lat: 35.24, lon: 139.72, side: 'r', dy: 16 },
        { n: '下田', lat: 34.68, lon: 138.94, side: 'l', dy: 14 },
        { n: '函館', lat: 41.77, lon: 140.73, side: 'r' },
        { n: '下關', lat: 33.96, lon: 130.94, side: 'l' },
        { n: '澳底', lat: 25.05, lon: 121.92, side: 'r' },
        { n: '臺南', lat: 22.99, lon: 120.2, side: 'l' }
      ]
    },
    timeline: {
      cap: '時間軸是照真正的年代長度畫的：從黑船到日本統治臺灣結束，不到一百年。',
      items: [
        { y: 1853, when: '西元 1853 年', t: '培里的黑船\n開到江戶灣', side: 'u', main: 1, w: 170 },
        { y: 1895, when: '西元 1895 年', t: '《馬關條約》\n臺灣割讓給日本', side: 'd', w: 190 },
        { y: 1945, when: '西元 1945 年', t: '日本統治\n臺灣結束', side: 'u', w: 160 },
        { y: 2026, when: '今天', t: '老照片還在\n外婆家牆上', side: 'd', w: 170 }
      ]
    },
    sources: [
      '美國國務院歷史學家辦公室〈The United States and the Opening to Japan, 1853〉（1853 年 7 月 8 日四艘船到東京灣、帶總統的信；1854 年 3 月 31 日《神奈川條約》開下田、函館，照顧遇難船員；1639 年起只跟荷蘭、中國船貿易）',
      '美國國會圖書館 Country Studies〈Japan: The Meiji Restoration〉（1868 年明治、江戶改名東京、請外國顧問、送學生出國、鐵路電報、義務教育）',
      '日本亞洲歷史資料中心 JACAR〈Signing of the Treaty of Shimonoseki〉、Encyclopedia of the Age of Industry and Empire〈Shimonoseki, Treaty of〉（1895 年 4 月 17 日簽訂；臺灣與澎湖割讓給日本）',
      '中央研究院臺灣史研究所檔案館〈武力進擊〉（1895 年 5 月 29 日日軍在澳底登陸、6 月初進臺北、10 月 21 日進臺南城，武力接收持續五個多月）',
      '周婉窈〈日治五十年：殖民統治、近代化，兩者的糾葛及其遺產〉，中央研究院數位典藏資源網（抵抗與鎮壓；電信、鐵路、銀行等建設；臺灣人主體性不被尊重、中等教育受限）'

    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '1853 年開到江戶灣、讓日本人很緊張的「黑船」，是哪一國派來的？', opts: ['美國', '英國', '荷蘭', '清朝'], a: 0, why: '美國的培里帶著四艘軍艦開到江戶灣，送來美國總統的信，要日本開港。' },
      { id: 'q2', d: 1, type: 'tf', q: '明治維新的時候，江戶改名叫東京。', a: true, why: '對！1868 年明治新政府上台，江戶改名叫東京，也就是今天日本的首都。' },
      { id: 'q3', d: 2, type: 'mc', q: '1895 年的《馬關條約》，讓臺灣發生了什麼改變？', opts: ['臺灣和澎湖被割讓給日本', '臺灣變成美國船的補給港', '臺灣開始只准跟荷蘭人做生意', '臺灣第一次有人搬來居住'], a: 0, why: '甲午戰爭日本打贏清朝，《馬關條約》把臺灣、澎湖割讓給日本，從此日本統治臺灣五十年。' },
      { id: 'q4', d: 2, type: 'order', q: '把這些事照發生的先後排好。', items: ['培里的黑船開到江戶灣', '日本開始明治維新', '《馬關條約》把臺灣割讓給日本', '日本統治臺灣結束'], why: '1853 年黑船；1868 年明治維新；1895 年《馬關條約》；1945 年日本統治臺灣結束。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「日本時代對臺灣只有好處，大家都很高興。」根據這一話，哪個說法最正確？', opts: ['不對，有人記得建設，也有很多人反抗、失去很多', '對，因為日本蓋了鐵路和學校，所以大家都沒有反對', '不對，日本時代臺灣什麼建設都沒有留下', '對，臺灣人當年自己投票決定要歸日本'], a: 0, why: '1895 年很多臺灣人起來抵抗；日本時代留下了鐵路、學校等建設，也有人被差別對待、失去家人。兩種記憶都是真的。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
