/* art.js — 勇者島的所有美術（inline SVG 字串產生器，不用外部圖檔）
   風格：editorial flat geometric / cut-paper。大色塊、無描邊、同色系噴槍陰影（radial gradient）、全畫面印刷顆粒（style.css body::after）。 */
(function (root) {
  'use strict';
  const C = {
    paper: '#EFEBDD', paper2: '#E4DFCC', paper3: '#D3CCB4', cream: '#F7F3E6', ink: '#151714',
    g9: '#1F3D2B', g8: '#264A35', g7: '#2F5A40', g6: '#3C6B4C', g5: '#5E8C6A', g3: '#9DB9A0',
    red: '#E0352B', skin: '#B9825A', wood: '#6B4A32', stone: '#8C9384', stone2: '#6B7366', stone3: '#A9AFA0', gold: '#C9A54A', road: '#26302A'
  };
  const A = { C };
  const r1 = n => Math.round(n * 10) / 10;

  // 膠囊（四肢）：兩點之間的圓角長條
  function cap(x1, y1, x2, y2, w, fill) {
    const len = Math.hypot(x2 - x1, y2 - y1), ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    return `<rect x="${r1(x1 - w / 2)}" y="${r1(y1 - w / 2)}" width="${r1(len + w)}" height="${w}" rx="${w / 2}" fill="${fill}" transform="rotate(${r1(ang)} ${x1} ${y1})"/>`;
  }
  // 同一個形狀再疊一層噴槍陰影
  const sh = (shape, g) => shape.replace(/fill="[^"]*"/, `fill="url(#${g || 'hi-shade'})"`);
  const both = (shape, g) => shape + sh(shape, g);
  const ground = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#hi-ground)"/>`;
  const face = (cx, cy) => `<ellipse cx="${cx - 6}" cy="${cy}" rx="2.2" ry="3" fill="${C.ink}"/><ellipse cx="${cx + 6}" cy="${cy - 1}" rx="2.2" ry="3" fill="${C.ink}"/><rect x="${cx - 3}" y="${cy + 8}" width="7" height="2.2" rx="1.1" fill="${C.ink}"/>`;

  A.defs = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<radialGradient id="hi-shade" cx="80%" cy="88%" r="90%"><stop offset="0" stop-color="#0b1a10" stop-opacity=".45"/><stop offset=".55" stop-color="#0b1a10" stop-opacity=".12"/><stop offset="1" stop-color="#0b1a10" stop-opacity="0"/></radialGradient>
<radialGradient id="hi-shadeL" cx="12%" cy="88%" r="90%"><stop offset="0" stop-color="#0b1a10" stop-opacity=".42"/><stop offset=".55" stop-color="#0b1a10" stop-opacity=".1"/><stop offset="1" stop-color="#0b1a10" stop-opacity="0"/></radialGradient>
<radialGradient id="hi-lit" cx="25%" cy="15%" r="70%"><stop offset="0" stop-color="#fffbe9" stop-opacity=".4"/><stop offset="1" stop-color="#fffbe9" stop-opacity="0"/></radialGradient>
<radialGradient id="hi-ground"><stop offset="0" stop-color="#1F3D2B" stop-opacity=".5"/><stop offset=".6" stop-color="#1F3D2B" stop-opacity=".16"/><stop offset="1" stop-color="#1F3D2B" stop-opacity="0"/></radialGradient>
<linearGradient id="hi-cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5E8C6A" stop-opacity=".95"/><stop offset=".5" stop-color="#5E8C6A" stop-opacity=".42"/><stop offset="1" stop-color="#5E8C6A" stop-opacity="0"/></linearGradient>
<radialGradient id="hi-glow"><stop offset="0" stop-color="#F4E9B8" stop-opacity=".95"/><stop offset=".35" stop-color="#9FC4A0" stop-opacity=".5"/><stop offset="1" stop-color="#5E8C6A" stop-opacity="0"/></radialGradient>
<radialGradient id="hi-red"><stop offset="0" stop-color="#FF7A5C"/><stop offset=".3" stop-color="#E0352B" stop-opacity=".75"/><stop offset="1" stop-color="#E0352B" stop-opacity="0"/></radialGradient>
<radialGradient id="hi-bush" cx="32%" cy="22%" r="85%"><stop offset="0" stop-color="#3C6B4C"/><stop offset=".55" stop-color="#2F5A40"/><stop offset="1" stop-color="#1F3D2B"/></radialGradient>
<filter id="hi-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="8"/></filter>
<filter id="hi-blur-s" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter>
</defs></svg>`;

  // ---------- 四個職業（每人一個超大招牌物件） ----------
  const HEROES = {
    mage() { // 法師：抱著巨大的書＋巨大羽毛筆
      let s = ground(124, 238, 86, 10);
      s += both(`<path d="M150 170 C176 112 198 62 226 12 C210 66 188 120 162 174 Z" fill="${C.g5}"/>`);
      s += `<path d="M154 172 L224 16 L227 18 L159 174 Z" fill="${C.g9}"/>`;
      s += cap(108, 226, 102, 236, 13, C.ink) + cap(138, 224, 146, 234, 13, C.ink);
      s += both(`<polygon points="94,96 150,88 172,226 80,232" fill="${C.g7}"/>`);
      s += both(`<circle cx="122" cy="68" r="19" fill="${C.skin}"/>`) + face(122, 70);
      s += `<polygon points="98,60 148,50 134,0" fill="${C.g9}"/><polygon points="94,62 152,50 154,57 97,69" fill="${C.ink}"/>`;
      s += cap(100, 106, 66, 150, 13, C.g7) + cap(146, 102, 176, 140, 13, C.g7);
      s += `<g transform="rotate(-12 120 160)"><rect x="46" y="114" width="132" height="96" rx="4" fill="${C.g9}"/>` +
        both(`<rect x="54" y="120" width="116" height="84" fill="${C.cream}"/>`) +
        `<rect x="110" y="120" width="4" height="84" fill="${C.paper3}"/>` +
        `<text x="82" y="176" font-family="Georgia,'Times New Roman',serif" font-size="42" font-weight="700" fill="${C.ink}" text-anchor="middle">A</text>` +
        `<text x="142" y="176" font-family="Georgia,serif" font-size="38" font-style="italic" fill="${C.g7}" text-anchor="middle">b</text>` +
        `<polygon points="150,204 160,204 160,230 155,223 150,230" fill="${C.red}"/>` +
        `<circle cx="54" cy="158" r="8.5" fill="${C.skin}"/><circle cx="172" cy="150" r="8.5" fill="${C.skin}"/></g>`;
      return s;
    },
    sword() { // 劍士：拖著一把超大的劍
      let s = ground(128, 238, 104, 10);
      s += `<polygon points="8,240 118,232 118,236 8,244" fill="${C.g9}" opacity=".22"/>`;
      s += `<polygon points="112,150 124,162 32,240 20,232" fill="#D8D2BE"/><polygon points="118,156 124,162 32,240 26,236" fill="#A9A28D"/>`;
      s += cap(104, 170, 134, 140, 8, C.ink) + cap(122, 152, 136, 138, 8, C.wood) + `<circle cx="140" cy="134" r="5.5" fill="${C.red}"/>`;
      s += cap(124, 172, 112, 230, 17, C.ink) + cap(146, 170, 160, 228, 17, C.g9);
      s += `<ellipse cx="106" cy="234" rx="13" ry="5" fill="${C.ink}"/><ellipse cx="166" cy="232" rx="13" ry="5" fill="${C.ink}"/>`;
      s += both(`<polygon points="106,92 160,84 172,178 102,184" fill="${C.g9}"/>`);
      s += `<polygon points="106,92 160,84 156,100 112,106" fill="${C.g7}"/>`;
      s += cap(112, 104, 126, 146, 14, C.g9) + `<circle cx="128" cy="148" r="8.5" fill="${C.skin}"/>`;
      s += cap(156, 100, 178, 144, 14, C.g7) + `<circle cx="180" cy="148" r="8.5" fill="${C.skin}"/>`;
      s += both(`<circle cx="134" cy="64" r="19" fill="${C.skin}"/>`) + face(132, 67);
      s += `<path d="M114 60 Q118 38 142 40 Q158 44 154 62 L148 52 L130 56 L120 50 Z" fill="${C.ink}"/>`;
      return s;
    },
    archer() { // 射手：靠著一把比人還高的弓
      let s = ground(140, 238, 90, 10);
      s += `<rect x="185" y="16" width="1.6" height="222" fill="${C.cream}"/>`;
      s += both(`<path d="M186 14 Q236 128 186 240 L180 238 Q224 128 180 16 Z" fill="${C.g9}"/>`, 'hi-shadeL');
      s += `<rect x="207" y="114" width="10" height="26" rx="3" fill="${C.wood}"/>`;
      s += `<g transform="rotate(7 130 240)">`;
      s += `<g transform="rotate(-18 100 120)"><rect x="90" y="88" width="18" height="66" rx="4" fill="${C.wood}"/><polygon points="92,88 98,70 102,88" fill="${C.cream}"/><polygon points="100,88 106,66 110,88" fill="${C.red}"/></g>`;
      s += cap(120, 176, 112, 232, 15, C.ink) + cap(142, 176, 150, 232, 15, C.ink);
      s += both(`<polygon points="108,96 152,92 162,184 102,188" fill="${C.g5}"/>`);
      s += cap(112, 110, 98, 150, 13, C.g5) + `<circle cx="96" cy="152" r="7.5" fill="${C.skin}"/>`;
      s += cap(150, 108, 194, 124, 13, C.g6) + `<circle cx="198" cy="125" r="8.5" fill="${C.skin}"/>`;
      s += cap(118, 58, 96, 92, 10, C.ink);
      s += both(`<circle cx="130" cy="66" r="18" fill="${C.skin}"/>`) + face(130, 69);
      s += `<path d="M112 64 Q114 44 132 46 Q148 48 148 62 L130 58 Z" fill="${C.ink}"/></g>`;
      return s;
    },
    guard() { // 守護者：躲在巨大的盾牌後面
      let s = ground(120, 240, 92, 10);
      s += cap(110, 206, 104, 236, 18, C.ink) + cap(140, 206, 150, 236, 18, C.ink);
      s += `<polygon points="92,96 152,90 158,206 88,210" fill="${C.g7}"/>`;
      s += both(`<circle cx="122" cy="70" r="19" fill="${C.skin}"/>`) + face(122, 74);
      s += `<path d="M100 68 Q104 44 124 44 Q146 46 146 68 L140 61 L104 63 Z" fill="${C.ink}"/><rect x="119" y="34" width="6" height="12" rx="3" fill="${C.ink}"/>`;
      s += cap(98, 104, 66, 118, 15, C.g7) + cap(148, 100, 178, 116, 15, C.g7);
      s += both(`<path d="M48 108 Q120 88 192 108 L186 178 Q162 222 120 242 Q78 222 54 178 Z" fill="${C.g9}"/>`);
      s += `<path d="M48 108 Q84 97 120 94 L120 242 Q78 222 54 178 Z" fill="${C.g7}"/>`;
      s += `<circle cx="120" cy="160" r="20" fill="${C.cream}"/><polygon points="120,148 130,160 120,172 110,160" fill="${C.red}"/>`;
      s += `<circle cx="62" cy="110" r="8.5" fill="${C.skin}"/><circle cx="178" cy="110" r="8.5" fill="${C.skin}"/>`;
      return s;
    }
  };
  A.hero = (cls, extra) => `<svg viewBox="0 0 240 250" class="hero hero-${cls}${extra ? ' ' + extra : ''}" aria-hidden="true">${(HEROES[cls] || HEROES.mage)()}</svg>`;

  // ---------- 怪物 ----------
  const MON = {
    leaf() {
      let s = ground(100, 188, 62, 8) + cap(84, 160, 80, 184, 10, C.ink) + cap(116, 160, 120, 184, 10, C.ink);
      s += both(`<path d="M100 18 C162 50 170 130 100 172 C30 130 38 50 100 18 Z" fill="${C.g5}"/>`);
      s += `<path d="M100 18 C162 50 170 130 100 172 Z" fill="${C.g7}" opacity=".85"/><polygon points="99,36 101,36 102,166 98,166" fill="${C.g9}" opacity=".55"/>`;
      s += `<ellipse cx="82" cy="94" rx="11" ry="12" fill="${C.cream}"/><ellipse cx="118" cy="94" rx="11" ry="12" fill="${C.cream}"/><circle cx="85" cy="97" r="5" fill="${C.ink}"/><circle cx="115" cy="97" r="5" fill="${C.ink}"/>`;
      s += `<polygon points="70,78 92,84 91,88 69,82" fill="${C.ink}"/><polygon points="130,78 108,84 109,88 131,82" fill="${C.ink}"/><polygon points="88,124 112,124 100,132" fill="${C.ink}"/>`;
      return s;
    },
    mush() {
      let s = ground(100, 186, 60, 8);
      s += both(`<path d="M76 108 L124 108 L132 180 L68 180 Z" fill="${C.cream}"/>`);
      s += both(`<path d="M24 114 Q30 36 100 32 Q170 36 176 114 Z" fill="${C.g7}"/>`);
      s += `<circle cx="68" cy="78" r="10" fill="${C.cream}"/><circle cx="118" cy="58" r="8" fill="${C.cream}"/><circle cx="144" cy="92" r="7" fill="${C.cream}"/>`;
      s += `<ellipse cx="90" cy="138" rx="3.5" ry="5" fill="${C.ink}"/><ellipse cx="110" cy="138" rx="3.5" ry="5" fill="${C.ink}"/><rect x="94" y="152" width="12" height="3" rx="1.5" fill="${C.ink}"/>`;
      return s;
    },
    rock() {
      let s = ground(100, 188, 72, 8);
      s += both(`<polygon points="38,182 28,112 70,58 132,50 174,100 166,182" fill="${C.stone}"/>`);
      s += `<polygon points="70,58 132,50 120,108 60,118" fill="${C.stone3}"/><polygon points="132,50 174,100 166,182 120,108" fill="${C.stone2}"/>`;
      s += `<polygon points="70,126 92,120 92,132 72,134" fill="${C.cream}"/><polygon points="108,120 130,126 128,134 108,132" fill="${C.cream}"/>`;
      s += `<polygon points="80,154 96,148 104,156 120,148 122,152 104,162 96,154 82,160" fill="${C.ink}"/>`;
      return s;
    },
    boss() {
      let s = ground(100, 190, 88, 8);
      s += `<polygon points="86,118 114,118 126,190 74,190" fill="${C.ink}"/><polygon points="74,190 60,192 82,176" fill="${C.ink}"/><polygon points="126,190 142,192 118,176" fill="${C.ink}"/>`;
      [[52, 96, 42, C.g9], [100, 68, 54, C.g7], [150, 96, 42, C.g9], [100, 116, 40, C.g8]].forEach(([x, y, r, f]) => { s += both(`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`); });
      s += `<circle cx="80" cy="34" r="14" fill="url(#hi-lit)"/>`;
      s += `<polygon points="72,22 82,6 92,18 100,2 108,18 118,6 128,22" fill="${C.ink}"/>`;
      s += `<circle cx="82" cy="104" r="18" fill="url(#hi-red)"/><circle cx="118" cy="104" r="18" fill="url(#hi-red)"/><circle cx="82" cy="104" r="4.5" fill="#FFD9CC"/><circle cx="118" cy="104" r="4.5" fill="#FFD9CC"/>`;
      s += `<polygon points="84,130 116,130 108,140 100,134 92,140" fill="${C.ink}"/>`;
      return s;
    },
    ghost() { // 晚上的錯題怪
      let s = `<ellipse cx="100" cy="186" rx="56" ry="8" fill="url(#hi-ground)"/>`;
      s += both(`<path d="M40 180 L40 90 Q40 24 100 24 Q160 24 160 90 L160 180 L140 164 L120 180 L100 164 L80 180 L60 164 Z" fill="#0E1A12"/>`);
      s += `<ellipse cx="80" cy="92" rx="12" ry="16" fill="#F4E9B8"/><ellipse cx="120" cy="92" rx="12" ry="16" fill="#F4E9B8"/><circle cx="82" cy="96" r="5" fill="${C.red}"/><circle cx="118" cy="96" r="5" fill="${C.red}"/>`;
      return s;
    }
  };
  A.monster = kind => `<svg viewBox="0 0 200 200" class="mon mon-${kind}" aria-hidden="true">${(MON[kind] || MON.leaf)()}</svg>`;
  A.monsterInner = kind => (MON[kind] || MON.leaf)();

  // ---------- 場景：斜向道路＋路燈＋光錐（參考圖的構圖） ----------
  const roadTop = x => 500 - 0.314 * x, roadBot = x => 620 - 0.37 * x, roadMid = x => 560 - 0.342 * x, rail = x => 470 - 0.298 * x;
  A.roadMid = roadMid;
  function lamp(x, H, k) {
    const y0 = roadTop(x) - 2, y1 = y0 - H, hx = x + 62 * k, hy = y1 - 10 * k, rb = roadBot(hx) + 4;
    let s = `<polygon points="${r1(hx - 5 * k)},${r1(hy)} ${r1(hx + 5 * k)},${r1(hy)} ${r1(hx + 120 * k)},${r1(rb)} ${r1(hx - 130 * k)},${r1(rb)}" fill="url(#hi-cone)" opacity=".8" filter="url(#hi-blur-s)"/>`;
    s += `<ellipse cx="${r1(hx - 4 * k)}" cy="${r1(rb - 18 * k)}" rx="${r1(120 * k)}" ry="${r1(22 * k)}" fill="#5E8C6A" opacity=".28" filter="url(#hi-blur)"/>`;
    s += `<rect x="${r1(x - 3 * k)}" y="${r1(y1)}" width="${r1(6 * k)}" height="${r1(H)}" fill="${C.ink}"/>`;
    s += `<path d="M${r1(x - 3 * k)} ${r1(y1)} Q${r1(x - 3 * k)} ${r1(y1 - 22 * k)} ${r1(x + 22 * k)} ${r1(y1 - 22 * k)} L${r1(hx + 8 * k)} ${r1(y1 - 16 * k)} L${r1(hx + 8 * k)} ${r1(y1 - 10 * k)} L${r1(x + 22 * k)} ${r1(y1 - 16 * k)} Q${r1(x + 3 * k)} ${r1(y1 - 16 * k)} ${r1(x + 3 * k)} ${r1(y1)} Z" fill="${C.ink}"/>`;
    s += `<ellipse cx="${r1(hx)}" cy="${r1(hy + 1)}" rx="${r1(12 * k)}" ry="${r1(4 * k)}" fill="#F7F1D6"/>`;
    return s;
  }
  const bush = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#hi-bush)"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#hi-shade)"/>`;
  A.scene = function (o) {
    o = o || {};
    let s = `<rect width="1000" height="620" fill="${C.paper}"/>`;
    s += `<path d="M0 380 Q180 320 320 350 T640 300 T1000 240 L1000 620 L0 620Z" fill="${C.g3}" opacity=".32"/>`;
    [[30, 440, 100], [150, 388, 84], [250, 424, 70], [330, 392, 58], [420, 372, 48], [515, 336, 40], [600, 318, 30], [690, 284, 26], [780, 256, 20], [860, 232, 15]].forEach(b => { s += bush(b[0], b[1], b[2]); });
    s += `<polygon points="0,500 1000,186 1000,250 0,620" fill="${C.road}"/>`;
    for (let x = 30; x < 1000; x += 110) { const x2 = x + 46, t = 5 - x / 300; s += `<polygon points="${x},${r1(roadMid(x) - t)} ${x2},${r1(roadMid(x2) - t)} ${x2},${r1(roadMid(x2) + t)} ${x},${r1(roadMid(x) + t)}" fill="${C.cream}" opacity=".75"/>`; }
    s += `<polygon points="0,${rail(0) - 3} 1000,${r1(rail(1000) - 3)} 1000,${r1(rail(1000) + 3)} 0,${rail(0) + 3}" fill="${C.cream}"/>`;
    for (let x = 12; x < 1000; x += 64) s += `<rect x="${x}" y="${r1(rail(x))}" width="${r1(4.5 - x / 300)}" height="${r1(roadTop(x) - rail(x))}" fill="${C.cream}"/>`;
    [[100, 330, 1], [340, 255, 0.8], [570, 195, 0.64], [770, 150, 0.52], [930, 118, 0.42]].forEach(l => { s += lamp(l[0], l[1], l[2]); });
    if (o.cave) {
      s += both(`<path d="M760 620 Q840 470 1000 470 L1000 620 Z" fill="${C.g9}"/>`, 'hi-shadeL');
      s += `<path d="M846 620 Q868 532 918 540 Q962 556 966 620 Z" fill="${C.ink}"/>`;
    }
    return s;
  };
  A.sceneSvg = o => `<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${A.scene(o)}</svg>`;

  // 單字森林地圖：nodes = [{id,x,y,r,status:'open'|'done'|'locked'|'next',kind,label,num}]
  A.forest = function (nodes) {
    let s = A.scene({ cave: true });
    nodes.forEach(n => {
      const r = n.r || 34, fill = n.status === 'done' ? C.g5 : n.status === 'locked' ? C.paper3 : (n.boss ? C.ink : C.g9);
      const w = n.label.length * 24 + 28;
      s += `<g class="node ${n.status}${n.boss ? ' boss' : ''}" data-node="${n.id}" transform="translate(${n.x} ${n.y})" role="button" aria-label="${n.label}">`;
      s += `<circle r="${r + 26}" fill="transparent"/>`;
      if (n.kind && n.status !== 'locked') s += `<svg x="${-r * 1.3}" y="${-r * 3.5}" width="${r * 2.6}" height="${r * 2.6}" viewBox="0 0 200 200">${A.monsterInner(n.kind)}</svg>`;
      if (n.status === 'open') s += `<circle class="ring" r="${r + 10}" fill="${n.boss ? C.red : C.g5}" opacity=".35"/>`;
      s += `<circle r="${r}" fill="${fill}"/><circle r="${r}" fill="url(#hi-shade)"/>`;
      s += n.status === 'locked' ? `<g transform="translate(-11 -14)"><rect x="0" y="10" width="22" height="18" rx="3" fill="${C.ink}"/><path d="M4 11 V6 a7 7 0 0 1 14 0 V11 h-4 V6 a3 3 0 0 0 -6 0 V11Z" fill="${C.ink}"/></g>`
        : `<text y="${r * 0.36}" text-anchor="middle" font-size="${r * 0.95}" font-weight="900" fill="${C.cream}" font-family="system-ui,-apple-system,sans-serif">${n.status === 'done' ? '✓' : n.num}</text>`;
      s += `<rect x="${-w / 2}" y="${r + 10}" width="${w}" height="34" rx="17" fill="${C.cream}"/><text y="${r + 34}" text-anchor="middle" font-size="20" font-weight="800" fill="${C.ink}" font-family="system-ui,-apple-system,'PingFang TC',sans-serif">${n.label}</text>`;
      s += `</g>`;
    });
    return `<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" class="forest">${s}</svg>`;
  };

  // 戰鬥背景
  A.stage = () => `<svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="1000" height="420" fill="${C.paper}"/>` +
    `<polygon points="120,40 136,40 360,420 -120,420" fill="url(#hi-cone)" opacity=".55" filter="url(#hi-blur-s)"/>` +
    `<rect x="40" y="10" width="7" height="330" fill="${C.ink}"/><path d="M40 10 Q40 -6 64 -6 L140 0 L140 6 L64 2 Q47 2 47 10Z" fill="${C.ink}"/>` +
    bush(860, 300, 120) + bush(980, 250, 110) + bush(740, 330, 70) +
    `<polygon points="0,350 1000,290 1000,420 0,420" fill="${C.paper3}"/><polygon points="0,350 1000,290 1000,300 0,362" fill="${C.cream}"/></svg>`;

  // ---------- 島上方塊（俯視，viewBox 100×100；顏色走 CSS class，晚上換色） ----------
  const base = `<rect class="t-grass" width="100" height="100"/>`;
  const TILE = {
    grass: () => base + `<ellipse class="t-grass2" cx="26" cy="30" rx="11" ry="5"/><ellipse class="t-grass2" cx="70" cy="64" rx="13" ry="5"/><ellipse class="t-grass2" cx="38" cy="82" rx="7" ry="3.5"/>`,
    path: () => `<rect class="t-path" width="100" height="100"/><rect class="t-path2" x="12" y="16" width="28" height="18" rx="9"/><rect class="t-path2" x="54" y="42" width="32" height="20" rx="10"/><rect class="t-path2" x="18" y="66" width="24" height="16" rx="8"/>`,
    fence: () => base + `<rect x="0" y="62" width="100" height="10" fill="#0b1a10" opacity=".22" filter="url(#hi-blur-s)"/><rect class="t-wood" y="38" width="100" height="9"/><rect class="t-wood" y="54" width="100" height="9"/><rect class="t-wood2" x="14" y="30" width="11" height="42" rx="2"/><rect class="t-wood2" x="76" y="30" width="11" height="42" rx="2"/>`,
    tree: () => base + `<ellipse cx="60" cy="62" rx="40" ry="34" fill="#0b1a10" opacity=".3" filter="url(#hi-blur)"/><circle class="t-tree" cx="48" cy="48" r="36"/><circle class="t-tree2" cx="38" cy="38" r="20"/><circle cx="48" cy="48" r="36" fill="url(#hi-shade)"/>`,
    house: () => base + `<rect x="18" y="24" width="80" height="72" fill="#0b1a10" opacity=".3" filter="url(#hi-blur)"/>` +
      `<rect class="t-wall" x="12" y="76" width="76" height="14"/><rect x="44" y="78" width="12" height="12" fill="${C.ink}"/><rect class="t-win" x="20" y="79" width="12" height="7"/><rect class="t-win" x="68" y="79" width="12" height="7"/>` +
      `<polygon class="t-roof2" points="12,14 88,14 50,46"/><polygon class="t-roof2" points="12,14 12,78 50,46"/><polygon class="t-roof" points="88,14 88,78 50,46"/><polygon class="t-roof" points="12,78 88,78 50,46"/><rect x="62" y="22" width="9" height="9" fill="${C.ink}"/>`,
    lamp: () => base + `<rect x="50" y="48" width="44" height="5" fill="#0b1a10" opacity=".28" transform="rotate(28 50 50)"/><circle cx="50" cy="50" r="11" fill="${C.ink}"/><circle class="t-bulb" cx="50" cy="50" r="5"/>`
  };
  A.tile = id => TILE[id] ? `<svg viewBox="0 0 100 100" aria-hidden="true">${TILE[id]()}</svg>` : '';

  // ---------- 小圖示（viewBox 24） ----------
  const ICON = {
    wood: `<g transform="rotate(-20 12 12)"><rect x="2" y="8" width="20" height="9" rx="4.5" fill="${C.wood}"/><circle cx="19" cy="12.5" r="3.6" fill="#C9A47E"/></g>`,
    stone: `<polygon points="3,18 5,9 11,4 19,6 22,14 18,20 8,21" fill="${C.stone}"/><polygon points="11,4 19,6 15,12 7,11" fill="${C.stone3}"/>`,
    diamond: `<polygon points="12,22 2,9 6,3 18,3 22,9" fill="${C.red}"/><polygon points="6,3 18,3 22,9 2,9" fill="#FF8A70"/><polygon points="9,9 15,9 12,20" fill="#B8241C"/>`,
    sound: `<polygon points="2,9 7,9 13,4 13,20 7,15 2,15" fill="currentColor"/><path d="M16 7.5a6 6 0 0 1 0 9l-1.4-1.4a4 4 0 0 0 0-6.2Z" fill="currentColor"/><path d="M18.6 4.6a10 10 0 0 1 0 14.8l-1.4-1.4a8 8 0 0 0 0-12Z" fill="currentColor"/>`,
    star: `<polygon points="12,2 14.9,8.6 22,9.3 16.6,14 18.2,21 12,17.3 5.8,21 7.4,14 2,9.3 9.1,8.6" fill="currentColor"/>`,
    lock: `<rect x="5" y="10" width="14" height="11" rx="2" fill="currentColor"/><path d="M8 10V7a4 4 0 0 1 8 0v3h-2V7a2 2 0 0 0-4 0v3Z" fill="currentColor"/>`,
    moon: `<path d="M15 3a9 9 0 1 0 6 15A8 8 0 0 1 15 3Z" fill="currentColor"/>`,
    sun: `<circle cx="12" cy="12" r="6" fill="currentColor"/>`,
    gold: `<circle cx="12" cy="12" r="9" fill="${C.gold}"/><circle cx="12" cy="12" r="5.5" fill="#E2C877"/>`,
    sword: `<polygon points="4,20 16,6 19,5 18,8 6,22" fill="#D8D2BE"/><rect x="2" y="17" width="9" height="3" rx="1.5" fill="${C.ink}" transform="rotate(45 6.5 18.5)"/>`,
    pick: `<path d="M3 8 Q12 1 21 8 L19 9 Q12 4 5 9 Z" fill="${C.stone2}"/><rect x="11" y="6" width="3" height="16" rx="1.5" fill="${C.wood}"/>`,
    lampi: `<rect x="7" y="4" width="2.4" height="18" fill="${C.ink}"/><path d="M7 5 Q7 2 10 2 L18 3 L18 5 L10 4 Q9 4 9 5Z" fill="${C.ink}"/><ellipse cx="17" cy="6" rx="3" ry="1.4" fill="#F4E9B8"/>`
  };
  A.icon = name => `<svg viewBox="0 0 24 24" class="ico" aria-hidden="true">${ICON[name] || ''}</svg>`;

  // 鑽石大圖（稀有掉落時刻）
  A.diamond = () => `<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="96" fill="url(#hi-red)" opacity=".55"/>` +
    `<polygon points="100,176 30,82 58,38 142,38 170,82" fill="${C.red}"/><polygon points="58,38 142,38 170,82 30,82" fill="#FF8A70"/><polygon points="76,82 124,82 100,164" fill="#B8241C"/><polygon points="58,38 76,82 30,82" fill="#FFB3A1"/></svg>`;

  // 休息畫面 / 鎖定畫面的小插圖：一盞路燈＋月亮
  A.rest = () => `<svg viewBox="0 0 300 220" aria-hidden="true"><circle cx="230" cy="54" r="26" fill="${C.cream}"/><circle cx="242" cy="46" r="24" fill="${C.g9}"/>` +
    `<polygon points="122,40 132,40 220,220 20,220" fill="url(#hi-cone)" opacity=".9" filter="url(#hi-blur-s)"/><rect x="70" y="30" width="6" height="190" fill="${C.ink}"/><path d="M70 30 Q70 16 88 16 L132 22 L132 28 L88 22 Q76 22 76 30Z" fill="${C.ink}"/><ellipse cx="126" cy="31" rx="10" ry="3.5" fill="#F7F1D6"/></svg>`;

  if (typeof module !== 'undefined' && module.exports) module.exports = A;
  root.HIArt = A;
})(typeof window !== 'undefined' ? window : globalThis);
