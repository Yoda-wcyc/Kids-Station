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
<radialGradient id="hi-torch"><stop offset="0" stop-color="#F7C77E" stop-opacity=".75"/><stop offset=".4" stop-color="#E89A4A" stop-opacity=".28"/><stop offset="1" stop-color="#E89A4A" stop-opacity="0"/></radialGradient>
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
    bat() { // 反轉蝙蝠 un-：倒掛
      let s = ground(100, 190, 50, 6) + `<rect x="98" y="0" width="4" height="34" fill="${C.stone2}"/>`;
      s += `<g transform="rotate(180 100 96)">`;
      s += both(`<path d="M100 92 L30 60 L42 92 L22 104 L56 112 L100 128 Z" fill="${C.g7}"/>`, 'hi-shadeL') + both(`<path d="M100 92 L170 60 L158 92 L178 104 L144 112 L100 128 Z" fill="${C.g6}"/>`);
      s += `<polygon points="100,92 50,68 54,96" fill="${C.g5}" opacity=".7"/><polygon points="100,92 150,68 146,96" fill="${C.g5}" opacity=".5"/>`;
      s += both(`<ellipse cx="100" cy="104" rx="24" ry="30" fill="#3A423B"/>`) + `<polygon points="82,80 88,62 94,78" fill="#3A423B"/><polygon points="106,78 112,62 118,80" fill="#3A423B"/>`;
      s += `<circle cx="91" cy="98" r="6" fill="${C.cream}"/><circle cx="109" cy="98" r="6" fill="${C.cream}"/><circle cx="91" cy="99" r="2.6" fill="${C.red}"/><circle cx="109" cy="99" r="2.6" fill="${C.red}"/><polygon points="94,114 106,114 100,120" fill="${C.cream}"/>`;
      return s + `</g>`;
    },
    golem() { // 重來石怪 re-
      let s = ground(100, 190, 70, 8);
      s += both(`<polygon points="50,186 44,120 76,104 128,102 158,124 152,186" fill="${C.stone}"/>`) + `<polygon points="128,102 158,124 152,186 124,150" fill="${C.stone2}"/>`;
      s += both(`<polygon points="62,104 70,46 104,30 140,44 142,100 100,112" fill="${C.stone3}"/>`) + `<polygon points="104,30 140,44 142,100 112,70" fill="${C.stone}"/>`;
      s += `<polygon points="80,66 98,70 96,78 80,76" fill="${C.cream}"/><polygon points="108,70 126,66 126,76 110,78" fill="${C.cream}"/>`;
      s += `<path d="M86 148 a18 18 0 1 0 18 -18 l0 -8 l-12 12 l12 12 l0 -8 a10 10 0 1 1 -10 10 Z" fill="${C.cream}" opacity=".85"/>`;
      return s;
    },
    wisp() { // 遠方幽靈 tele-
      let s = `<ellipse cx="100" cy="190" rx="44" ry="6" fill="url(#hi-ground)"/>`;
      s += `<path d="M100 186 C70 170 168 150 132 120 C120 108 150 92 140 70" fill="none"/>`;
      s += both(`<path d="M60 92 Q60 36 104 36 Q148 36 148 90 Q148 120 130 136 Q140 160 112 184 Q118 160 98 150 Q72 140 60 112 Z" fill="${C.g3}"/>`);
      s += `<rect x="102" y="6" width="4" height="34" fill="${C.ink}"/><path d="M84 8 Q104 26 124 8 L120 4 Q104 16 88 4 Z" fill="${C.ink}"/>`;
      s += `<ellipse cx="88" cy="82" rx="7" ry="10" fill="${C.ink}"/><ellipse cx="120" cy="82" rx="7" ry="10" fill="${C.ink}"/><ellipse cx="104" cy="108" rx="6" ry="4" fill="${C.ink}"/>`;
      return s;
    },
    spider() { // 不要蜘蛛 dis-
      let s = ground(100, 188, 76, 8);
      [[70, 120, 22, 168], [64, 110, 14, 130], [66, 98, 18, 82], [74, 92, 36, 52], [130, 120, 178, 168], [136, 110, 186, 130], [134, 98, 182, 82], [126, 92, 164, 52]].forEach(l => { s += cap(l[0], l[1], l[2], l[3], 8, C.stone2); });
      s += both(`<ellipse cx="100" cy="128" rx="40" ry="34" fill="#3A423B"/>`) + both(`<circle cx="100" cy="88" r="24" fill="${C.ink}"/>`);
      s += `<circle cx="90" cy="84" r="4" fill="${C.red}"/><circle cx="110" cy="84" r="4" fill="${C.red}"/><circle cx="95" cy="94" r="2.5" fill="${C.red}"/><circle cx="105" cy="94" r="2.5" fill="${C.red}"/>`;
      s += `<polygon points="80,124 120,124 116,132 84,132" fill="${C.cream}" opacity=".8"/><polygon points="96,118 104,118 104,138 96,138" fill="${C.cream}" opacity=".8" transform="rotate(45 100 128)"/>`;
      return s;
    },
    statue() { // 字根石像王
      let s = ground(100, 192, 90, 8);
      s += both(`<polygon points="40,192 48,150 152,150 160,192" fill="${C.stone2}"/>`);
      s += both(`<polygon points="46,150 38,70 70,30 130,30 162,70 154,150" fill="${C.stone}"/>`) + `<polygon points="70,30 130,30 120,70 76,74" fill="${C.stone3}"/><polygon points="130,30 162,70 154,150 124,112" fill="${C.stone2}"/>`;
      s += `<polygon points="60,30 70,6 84,22 100,0 116,22 130,6 140,30" fill="${C.ink}"/>`;
      s += `<circle cx="80" cy="92" r="18" fill="url(#hi-red)"/><circle cx="120" cy="92" r="18" fill="url(#hi-red)"/><rect x="70" y="88" width="20" height="7" fill="#FFD9CC"/><rect x="110" y="88" width="20" height="7" fill="#FFD9CC"/>`;
      s += `<polygon points="76,124 124,124 120,134 80,134" fill="${C.ink}"/><polygon points="58,60 70,84 64,100" fill="${C.ink}" opacity=".5"/><polygon points="140,110 150,128 146,140" fill="${C.ink}" opacity=".5"/>`;
      s += `<text x="100" y="178" text-anchor="middle" font-size="16" font-weight="900" fill="${C.cream}" font-family="Georgia,serif" letter-spacing="2">un · re · dis</text>`;
      return s;
    },    gargoyle() { // 時態之門後面的石像鬼
      let s = ground(100, 190, 66, 8);
      s += both(`<path d="M100 70 L28 40 L44 84 L20 100 L60 104 Z" fill="${C.stone2}"/>`, 'hi-shadeL') + both(`<path d="M100 70 L172 40 L156 84 L180 100 L140 104 Z" fill="${C.stone}"/>`);
      s += both(`<polygon points="62,186 70,96 130,96 138,186" fill="${C.stone3}"/>`) + `<polygon points="100,96 130,96 138,186 104,150" fill="${C.stone}"/>`;
      s += both(`<circle cx="100" cy="82" r="30" fill="${C.stone3}"/>`) + `<polygon points="76,62 70,36 90,56" fill="${C.stone2}"/><polygon points="124,62 130,36 110,56" fill="${C.stone2}"/>`;
      s += `<rect x="84" y="76" width="10" height="6" fill="${C.ink}"/><rect x="106" y="76" width="10" height="6" fill="${C.ink}"/><polygon points="88,96 112,96 106,104 100,98 94,104" fill="${C.ink}"/>`;
      return s;
    },
    trapjaw() { // 改錯陷阱：一張會夾人的鐵嘴
      let s = ground(100, 186, 76, 8);
      s += both(`<path d="M24 120 Q100 168 176 120 L170 150 Q100 196 30 150 Z" fill="${C.stone2}"/>`);
      s += both(`<path d="M24 112 Q100 40 176 112 L168 88 Q100 22 32 88 Z" fill="${C.stone}"/>`);
      for (let i = 0; i < 7; i++) { const x = 42 + i * 19.5; s += `<polygon points="${x - 7},${108 - Math.sin(i / 6 * Math.PI) * 18} ${x + 7},${108 - Math.sin(i / 6 * Math.PI) * 18} ${x},${126 - Math.sin(i / 6 * Math.PI) * 10}" fill="${C.cream}"/>`; }
      s += `<circle cx="78" cy="70" r="9" fill="${C.cream}"/><circle cx="122" cy="70" r="9" fill="${C.cream}"/><circle cx="78" cy="72" r="4" fill="${C.red}"/><circle cx="122" cy="72" r="4" fill="${C.red}"/>`;
      return s;
    },
    armor() { // 盔甲哨兵
      let s = ground(100, 190, 60, 8) + cap(84, 150, 80, 186, 16, C.stone2) + cap(116, 150, 120, 186, 16, C.stone);
      s += both(`<polygon points="66,70 134,70 128,156 72,156" fill="${C.stone3}"/>`) + `<polygon points="100,70 134,70 128,156 100,156" fill="${C.stone}"/>`;
      s += both(`<path d="M74 70 Q74 22 100 22 Q126 22 126 70 Z" fill="${C.stone3}"/>`) + `<rect x="80" y="44" width="40" height="6" fill="${C.ink}"/><rect x="98" y="50" width="4" height="16" fill="${C.ink}"/>`;
      s += `<rect x="96" y="6" width="8" height="18" rx="3" fill="${C.g7}"/>` + cap(140, 80, 160, 40, 6, C.ink) + `<polygon points="160,40 170,10 152,34" fill="#D8D2BE"/>`;
      s += `<rect x="60" y="88" width="22" height="42" rx="6" fill="${C.g9}"/><polygon points="66,96 76,96 71,110" fill="${C.cream}"/>`;
      return s;
    },
    knight() { // 時態騎士王
      let s = ground(100, 192, 84, 8);
      s += cap(86, 150, 78, 188, 18, C.ink) + cap(116, 150, 124, 188, 18, C.g9);
      s += both(`<polygon points="58,72 142,72 150,158 50,158" fill="${C.g9}"/>`) + `<polygon points="100,72 142,72 150,158 104,158" fill="${C.g7}"/>`;
      s += `<polygon points="88,80 112,80 106,150 94,150" fill="${C.gold}"/><circle cx="100" cy="112" r="12" fill="${C.cream}"/><text x="100" y="117" text-anchor="middle" font-size="13" font-weight="900" fill="${C.ink}" font-family="Georgia,serif">-ed</text>`;
      s += both(`<path d="M74 72 Q72 22 100 20 Q128 22 126 72 Z" fill="${C.stone3}"/>`) + `<rect x="80" y="44" width="40" height="7" fill="${C.ink}"/><circle cx="90" cy="48" r="4" fill="url(#hi-red)"/><circle cx="110" cy="48" r="4" fill="url(#hi-red)"/>`;
      s += `<path d="M100 20 Q130 -4 150 14 Q128 8 112 26 Z" fill="${C.red}"/><polygon points="78,22 84,6 92,18 100,2 108,18 116,6 122,22" fill="${C.gold}"/>`;
      s += cap(150, 150, 176, 30, 7, C.ink) + `<polygon points="170,40 182,0 188,40" fill="#D8D2BE"/>` + cap(160, 70, 190, 70, 8, C.gold);
      return s;
    },
    gull() { // 海鷗小偷
      let s = ground(100, 188, 50, 6) + cap(92, 150, 88, 184, 6, C.gold) + cap(108, 150, 112, 184, 6, C.gold);
      s += both(`<path d="M100 90 Q60 40 14 62 Q56 70 74 104 Z" fill="${C.paper2}"/>`, 'hi-shadeL') + both(`<path d="M100 90 Q140 40 186 62 Q144 70 126 104 Z" fill="${C.cream}"/>`);
      s += both(`<ellipse cx="100" cy="118" rx="34" ry="38" fill="${C.cream}"/>`) + `<polygon points="118,108 150,116 118,124" fill="${C.red}"/>`;
      s += `<circle cx="108" cy="100" r="5" fill="${C.ink}"/><polygon points="88,88 104,92 102,96 87,92" fill="${C.ink}"/><rect x="60" y="128" width="26" height="18" rx="4" fill="${C.wood}"/><text x="73" y="141" text-anchor="middle" font-size="10" font-weight="900" fill="${C.cream}" font-family="Georgia,serif">ABC</text>`;
      return s;
    },
    crab() { // 螃蟹橋頭
      let s = ground(100, 188, 76, 8);
      [[60, 140, 22, 170], [64, 150, 34, 184], [140, 140, 178, 170], [136, 150, 166, 184]].forEach(l => { s += cap(l[0], l[1], l[2], l[3], 8, C.g9); });
      s += cap(64, 112, 34, 80, 10, C.g7) + cap(136, 112, 166, 80, 10, C.g7) + both(`<path d="M18 62 Q30 40 48 58 L40 72 Q30 60 22 74 Z" fill="${C.g6}"/>`) + both(`<path d="M182 62 Q170 40 152 58 L160 72 Q170 60 178 74 Z" fill="${C.g6}"/>`);
      s += both(`<ellipse cx="100" cy="132" rx="50" ry="34" fill="${C.g7}"/>`) + cap(86, 100, 84, 84, 5, C.g9) + cap(114, 100, 116, 84, 5, C.g9);
      s += `<circle cx="84" cy="82" r="8" fill="${C.cream}"/><circle cx="116" cy="82" r="8" fill="${C.cream}"/><circle cx="85" cy="84" r="3.5" fill="${C.ink}"/><circle cx="115" cy="84" r="3.5" fill="${C.ink}"/><rect x="90" y="138" width="20" height="3" rx="1.5" fill="${C.ink}"/>`;
      return s;
    },
    drift() { // 漂流木怪
      let s = `<ellipse cx="100" cy="176" rx="90" ry="10" fill="${C.g5}" opacity=".35"/>`;
      s += both(`<rect x="24" y="96" width="152" height="62" rx="31" fill="${C.wood}"/>`) + `<ellipse cx="166" cy="127" rx="14" ry="29" fill="#C9A47E"/><ellipse cx="166" cy="127" rx="7" ry="15" fill="${C.wood}"/>`;
      s += `<path d="M50 96 Q46 70 60 60 Q56 80 66 96 Z" fill="${C.g5}"/><path d="M80 96 Q86 66 74 52 Q92 64 90 96 Z" fill="${C.g6}"/>`;
      s += `<circle cx="80" cy="122" r="7" fill="${C.cream}"/><circle cx="114" cy="122" r="7" fill="${C.cream}"/><circle cx="81" cy="124" r="3" fill="${C.ink}"/><circle cx="113" cy="124" r="3" fill="${C.ink}"/><path d="M86 140 Q97 148 108 140" fill="none" stroke-width="0"/><rect x="88" y="139" width="18" height="3" rx="1.5" fill="${C.ink}"/>`;
      return s;
    },
    sailor() { // 霧中水手
      let s = `<ellipse cx="100" cy="188" rx="60" ry="7" fill="url(#hi-ground)"/>`;
      s += both(`<path d="M52 186 L58 96 Q60 58 100 58 Q140 58 142 96 L148 186 Q124 172 100 186 Q76 172 52 186 Z" fill="${C.g3}"/>`);
      s += `<polygon points="60,70 140,70 128,52 72,52" fill="${C.ink}"/><rect x="56" y="66" width="88" height="8" fill="${C.ink}"/>`;
      s += `<ellipse cx="86" cy="96" rx="6" ry="8" fill="${C.ink}"/><ellipse cx="114" cy="96" rx="6" ry="8" fill="${C.ink}"/><polygon points="78,120 122,120 116,128 84,128" fill="${C.ink}"/>`;
      s += `<polygon points="76,136 124,136 112,160 88,160" fill="${C.cream}"/><rect x="0" y="150" width="200" height="14" fill="${C.cream}" opacity=".45" filter="url(#hi-blur-s)"/>`;
      return s;
    },
    kraken() { // 句型海怪
      let s = `<ellipse cx="100" cy="186" rx="96" ry="10" fill="${C.g5}" opacity=".35"/>`;
      [[30, 180, 10, 110], [56, 186, 40, 130], [144, 186, 160, 130], [170, 180, 190, 110]].forEach(([x1, y1, x2, y2]) => { s += both(`<path d="M${x1} ${y1} Q${(x1 + x2) / 2 - 20} ${(y1 + y2) / 2} ${x2} ${y2} Q${x2 + 10} ${y2 - 10} ${x2 + 6} ${y2 + 8} Q${(x1 + x2) / 2} ${(y1 + y2) / 2 + 14} ${x1 + 14} ${y1} Z" fill="${C.g7}"/>`); });
      s += both(`<path d="M50 150 Q42 40 100 30 Q158 40 150 150 Z" fill="${C.g9}"/>`) + `<path d="M100 30 Q158 40 150 150 L120 150 Q130 70 100 30Z" fill="${C.g8}"/>`;
      s += `<circle cx="80" cy="100" r="18" fill="url(#hi-red)"/><circle cx="120" cy="100" r="18" fill="url(#hi-red)"/><circle cx="80" cy="100" r="5" fill="#FFD9CC"/><circle cx="120" cy="100" r="5" fill="#FFD9CC"/>`;
      s += `<rect x="70" y="124" width="60" height="10" rx="5" fill="${C.ink}"/>` + [0, 1, 2, 3].map(i => `<circle cx="${70 + i * 20}" cy="${168 - (i % 2) * 6}" r="4" fill="${C.cream}" opacity=".7"/>`).join('');
      return s;
    },
    magma() { // 岩漿史萊姆
      let s = `<ellipse cx="100" cy="186" rx="70" ry="10" fill="url(#hi-red)" opacity=".5"/>`;
      s += both(`<path d="M30 184 Q24 110 70 84 Q100 60 130 84 Q176 110 170 184 Z" fill="#3A2A26"/>`);
      s += `<path d="M44 160 Q70 150 80 170 Q96 140 120 166 Q140 150 158 168 L164 184 L36 184 Z" fill="${C.red}" opacity=".85"/><path d="M60 104 Q74 92 84 104" fill="none"/><circle cx="74" cy="118" r="10" fill="#FFB38A"/><circle cx="126" cy="118" r="10" fill="#FFB38A"/><circle cx="76" cy="120" r="4.5" fill="${C.ink}"/><circle cx="124" cy="120" r="4.5" fill="${C.ink}"/><rect x="90" y="138" width="20" height="4" rx="2" fill="${C.ink}"/>`;
      return s;
    },
    salamander() { // 跳石火蜥
      let s = ground(100, 186, 76, 8);
      s += cap(60, 150, 40, 182, 9, C.g9) + cap(140, 150, 160, 182, 9, C.g9) + cap(80, 160, 74, 186, 9, C.g9) + cap(120, 160, 126, 186, 9, C.g9);
      s += both(`<path d="M30 140 Q60 100 110 110 Q160 116 176 90 Q180 130 140 156 Q90 176 30 140 Z" fill="${C.g7}"/>`) + both(`<ellipse cx="54" cy="122" rx="30" ry="22" fill="${C.g6}"/>`);
      [[90, 120], [112, 124], [134, 116]].forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="6" fill="${C.red}"/>`; });
      s += `<circle cx="46" cy="114" r="6" fill="${C.cream}"/><circle cx="47" cy="115" r="3" fill="${C.ink}"/><path d="M26 128 L12 124 L26 132Z" fill="${C.red}"/>`;
      return s;
    },
    ashbird() { // 灰燼鳥
      let s = ground(100, 188, 46, 6) + cap(94, 150, 90, 184, 5, C.ink) + cap(106, 150, 110, 184, 5, C.ink);
      s += both(`<path d="M100 96 Q50 30 8 70 Q60 72 72 116 Z" fill="${C.stone2}"/>`, 'hi-shadeL') + both(`<path d="M100 96 Q150 30 192 70 Q140 72 128 116 Z" fill="${C.stone}"/>`);
      s += `<path d="M14 70 Q30 60 40 70" fill="none"/><polygon points="20,68 34,58 30,70" fill="${C.red}" opacity=".8"/><polygon points="180,68 166,58 170,70" fill="${C.red}" opacity=".8"/>`;
      s += both(`<ellipse cx="100" cy="122" rx="30" ry="34" fill="#4A4440"/>`) + `<polygon points="100,72 108,92 92,92" fill="${C.red}"/><polygon points="114,112 140,118 114,124" fill="${C.gold}"/><circle cx="106" cy="106" r="5" fill="#FFB38A"/><circle cx="107" cy="107" r="2.5" fill="${C.ink}"/>`;
      return s;
    },
    lavagolem() { // 熔岩石人
      let s = ground(100, 190, 72, 8);
      s += both(`<polygon points="48,188 40,118 70,90 132,88 160,118 152,188" fill="#2A2522"/>`) + `<polygon points="132,88 160,118 152,188 124,150" fill="#1C1917"/>`;
      s += `<path d="M60 120 L80 140 L70 160 L92 176" fill="none"/><polygon points="58,118 84,142 74,158 96,178 90,180 68,160 78,144 54,122" fill="${C.red}" opacity=".85"/><polygon points="140,120 120,146 132,168 126,170 114,148 134,118" fill="#F2A541" opacity=".85"/>`;
      s += both(`<polygon points="70,90 74,40 100,28 128,40 132,90" fill="#3A332F"/>`) + `<rect x="80" y="56" width="14" height="8" fill="#FFB38A"/><rect x="108" y="56" width="14" height="8" fill="#FFB38A"/><rect x="88" y="74" width="26" height="4" fill="${C.red}"/>`;
      return s;
    },
    dragon() { // 片語火龍（最終 Boss）
      let s = `<ellipse cx="100" cy="190" rx="94" ry="9" fill="url(#hi-red)" opacity=".55"/>`;
      s += both(`<path d="M100 92 L18 30 L36 84 L4 96 L52 112 Z" fill="${C.g7}"/>`, 'hi-shadeL') + both(`<path d="M100 92 L182 30 L164 84 L196 96 L148 112 Z" fill="${C.g6}"/>`);
      s += both(`<path d="M56 188 Q50 120 100 104 Q150 120 144 188 Z" fill="${C.g9}"/>`) + `<path d="M84 188 Q86 140 100 128 Q114 140 116 188 Z" fill="#E9C98E"/>`;
      s += cap(64, 180, 54, 192, 14, C.g9) + cap(136, 180, 146, 192, 14, C.g9);
      s += both(`<path d="M70 104 Q66 56 100 46 Q134 56 130 104 Q116 118 100 118 Q84 118 70 104 Z" fill="${C.g8}"/>`);
      s += `<polygon points="76,56 70,22 88,48" fill="${C.cream}"/><polygon points="124,56 130,22 112,48" fill="${C.cream}"/>`;
      s += `<circle cx="86" cy="78" r="15" fill="url(#hi-red)"/><circle cx="114" cy="78" r="15" fill="url(#hi-red)"/><ellipse cx="86" cy="78" rx="3" ry="6" fill="#FFD9CC"/><ellipse cx="114" cy="78" rx="3" ry="6" fill="#FFD9CC"/>`;
      s += `<path d="M88 102 Q100 110 112 102 L108 112 Q100 116 92 112 Z" fill="${C.ink}"/><path d="M100 116 Q92 140 104 156 Q118 140 108 124 Q104 132 100 116Z" fill="#F2A541" opacity=".8"/>`;
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
  function nodesSvg(nodes) {
    let s = '';
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
      if (n.tag) {
        const tw = [...n.tag].reduce((a, ch) => a + (ch.charCodeAt(0) > 255 ? 16 : 10), 0) + 18 + (n.shield || n.trap ? 24 : 0);
        s += `<g transform="translate(${r - 4} ${-r - 6})"><rect width="${tw}" height="26" rx="4" fill="${n.boss ? C.red : C.ink}"/><text x="9" y="18" font-size="16" font-weight="800" fill="${C.cream}" font-family="Georgia,'PingFang TC',serif">${n.tag}</text>` +
          (n.trap ? `<polygon transform="translate(${tw - 22} 5)" points="8,0 16,16 0,16" fill="${C.red}"/>` : '') + (n.shield ? `<path transform="translate(${tw - 22} 4)" d="M0 2 Q8 -1 16 2 L15 11 Q12 16 8 18 Q4 16 1 11 Z" fill="${C.gold}"/>` : '') + `</g>`;
      }
      s += `</g>`;
    });
    return s;
  }
  A.forest = nodes => `<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" class="forest">${A.scene({ cave: true })}${nodesSvg(nodes)}</svg>`;

  // 字根洞窟：往右下斜的隧道，石頭灰＋深綠黑，火把的暖光池，紅色只給危險（Boss）
  const ceil = x => 60 + 0.37 * x, floorTop = x => 220 + 0.38 * x;
  A.caveMid = x => 196 + 0.38 * x;
  A.cave = function (nodes) {
    let s = `<rect width="1000" height="620" fill="#0E1712"/>`;
    s += `<polygon points="0,${ceil(0) + 40} 1000,${ceil(1000) + 40} 1000,${floorTop(1000)} 0,${floorTop(0)}" fill="#14211A"/>`;
    [[240, 1], [600, 1], [920, .8]].forEach(([x, k]) => { const y = (ceil(x) + floorTop(x)) / 2; s += `<ellipse cx="${x}" cy="${r1(y)}" rx="${190 * k}" ry="${150 * k}" fill="url(#hi-torch)"/>`; });
    s += `<polygon points="0,0 1000,0 1000,${ceil(1000)} 0,${ceil(0)}" fill="#1B2620"/>`;
    for (let x = 20; x < 1000; x += 86) { const y = ceil(x), l = 30 + (x * 7 % 50); s += `<polygon points="${x},${r1(y - 2)} ${x + 26},${r1(ceil(x + 26) - 2)} ${x + 11},${r1(y + l)}" fill="#3A423B"/><polygon points="${x + 11},${r1(y)} ${x + 26},${r1(ceil(x + 26) - 2)} ${x + 11},${r1(y + l)}" fill="#2A322C"/>`; if (x % 3 === 2) s += `<ellipse cx="${x + 11}" cy="${r1(y + l + 14)}" rx="2.2" ry="4" fill="${C.cream}" opacity=".7"/>`; }
    s += both(`<polygon points="0,${floorTop(0)} 1000,${floorTop(1000)} 1000,620 0,620" fill="#26302A"/>`, 'hi-shadeL');
    s += `<polygon points="0,${floorTop(0)} 1000,${floorTop(1000)} 1000,${floorTop(1000) + 8} 0,${floorTop(0) + 8}" fill="${C.stone2}"/>`;
    for (let x = 60; x < 1000; x += 140) s += `<polygon points="${x},${r1(floorTop(x) + 40)} ${x + 60},${r1(floorTop(x + 60) + 30)} ${x + 90},${r1(floorTop(x + 90) + 70)} ${x + 20},${r1(floorTop(x + 20) + 80)}" fill="#323B34"/>`;
    [[240, 1], [600, 1], [920, .8]].forEach(([x, k]) => { const y = ceil(x) + 70 * k; s += `<rect x="${x - 4}" y="${r1(y)}" width="8" height="${30 * k}" fill="${C.ink}"/><path d="M${x} ${r1(y - 34 * k)} Q${x + 14 * k} ${r1(y - 10 * k)} ${x} ${r1(y)} Q${x - 14 * k} ${r1(y - 10 * k)} ${x} ${r1(y - 34 * k)}Z" fill="#F2A541"/><path d="M${x} ${r1(y - 18 * k)} Q${x + 6 * k} ${r1(y - 6 * k)} ${x} ${r1(y)} Q${x - 6 * k} ${r1(y - 6 * k)} ${x} ${r1(y - 18 * k)}Z" fill="${C.red}"/>`; s += `<ellipse cx="${x + 20}" cy="${r1(floorTop(x + 20) + 6)}" rx="${110 * k}" ry="${16 * k}" fill="#F7C77E" opacity=".22" filter="url(#hi-blur)"/>`; });
    s += `<ellipse cx="880" cy="520" rx="130" ry="70" fill="url(#hi-red)" opacity=".35"/>`;
    s += `<text x="40" y="44" font-size="18" font-weight="900" letter-spacing="5" fill="${C.cream}" font-family="Helvetica Neue,Arial,sans-serif">ROOT CAVE</text>`;
    return `<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" class="forest cave">${s}${nodesSvg(nodes)}</svg>`;
  };
  // 文法城堡：淡石牆、深綠旗、窗戶暖光；樓梯往右上爬；紅色只給 Boss 與陷阱
  A.castleMid = x => 560 - 0.42 * x;
  A.castle = function (nodes) {
    const stair = x => 600 - 0.42 * x;
    let s = `<rect width="1000" height="620" fill="#ECE7D8"/>`;
    s += both(`<polygon points="0,620 0,330 120,330 120,300 1000,300 1000,620" fill="#D8D2C2"/>`, 'hi-shadeL');
    for (let x = 0; x < 1000; x += 46) s += `<rect x="${x + 6}" y="282" width="28" height="22" fill="#D8D2C2"/>`;
    for (let y = 340; y < 620; y += 34) for (let x = (y / 34 % 2) * 40; x < 1000; x += 80) s += `<rect x="${x}" y="${y}" width="76" height="2" fill="#C9C2AF"/>`;
    [[60, 90, 150, 340], [820, 40, 170, 300]].forEach(([x, y, w, b]) => { s += both(`<rect x="${x}" y="${y}" width="${w}" height="${b - y}" fill="#CFC8B5"/>`); for (let k = 0; k < w; k += 34) s += `<rect x="${x + k}" y="${y - 22}" width="22" height="24" fill="#CFC8B5"/>`; });
    s += both(`<polygon points="870,40 940,40 905,-20" fill="${C.g9}"/>`);
    [[180, 120, 1], [470, 110, 1], [700, 110, .9]].forEach(([x, y, k]) => { s += `<rect x="${x}" y="${y}" width="${46 * k}" height="${150 * k}" fill="${C.g9}"/><polygon points="${x},${y + 150 * k} ${x + 23 * k},${y + 130 * k} ${x + 46 * k},${y + 150 * k} ${x + 46 * k},${y + 170 * k} ${x},${y + 170 * k}" fill="${C.g9}"/><circle cx="${x + 23 * k}" cy="${y + 50 * k}" r="${10 * k}" fill="${C.gold}"/>`; });
    [[100, 180], [330, 170], [590, 150], [870, 130]].forEach(([x, y]) => { s += `<ellipse cx="${x + 14}" cy="${y + 24}" rx="70" ry="60" fill="url(#hi-torch)"/><path d="M${x} ${y + 50} V${y + 14} Q${x + 14} ${y - 6} ${x + 28} ${y + 14} V${y + 50} Z" fill="#F7C77E"/><rect x="${x + 13}" y="${y + 6}" width="2" height="44" fill="#B98A4A"/>`; });
    // 樓梯（往右上爬）
    for (let x = 0; x < 1000; x += 40) { const y = stair(x); s += `<rect x="${x}" y="${r1(y)}" width="42" height="${r1(620 - y)}" fill="#BDB49B"/><rect x="${x}" y="${r1(y)}" width="42" height="7" fill="#E4DDC8"/><rect x="${x}" y="${r1(y + 7)}" width="42" height="10" fill="#A9A08A" opacity=".7"/>`; }
    s += `<ellipse cx="900" cy="170" rx="140" ry="80" fill="url(#hi-red)" opacity=".28"/>`;
    s += `<text x="40" y="44" font-size="18" font-weight="900" letter-spacing="5" fill="${C.ink}" font-family="Helvetica Neue,Arial,sans-serif">GRAMMAR CASTLE</text>`;
    return `<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" class="forest castle">${s}${nodesSvg(nodes)}</svg>`;
  };
  A.castleStage = () => `<svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="1000" height="420" fill="#E4DED0"/>` +
    [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<rect x="${i * 120 - 20}" y="${40 + (i % 2) * 34}" width="110" height="2" fill="#C9C2AF"/><rect x="${i * 120 + 40}" y="${140 + (i % 2) * 34}" width="110" height="2" fill="#C9C2AF"/>`).join('') +
    `<ellipse cx="500" cy="120" rx="160" ry="120" fill="url(#hi-torch)"/><path d="M470 190 V90 Q500 46 530 90 V190 Z" fill="#F7C77E"/><rect x="498" y="70" width="4" height="120" fill="#B98A4A"/>` +
    `<rect x="120" y="0" width="70" height="230" fill="${C.g9}"/><polygon points="120,230 155,205 190,230 190,256 120,256" fill="${C.g9}"/><circle cx="155" cy="80" r="16" fill="${C.gold}"/>` +
    `<rect x="800" y="0" width="70" height="210" fill="${C.g9}"/><polygon points="800,210 835,185 870,210 870,236 800,236" fill="${C.g9}"/><circle cx="835" cy="70" r="16" fill="${C.red}"/>` +
    `<polygon points="0,340 1000,300 1000,420 0,420" fill="#BDB49B"/><polygon points="0,340 1000,300 1000,308 0,350" fill="#E4DDC8"/></svg>`;

  // 句型港口：淡米色天空、深綠海面（噴槍波浪帶）、木頭碼頭、繫著的小船、燈塔的紅光是唯一的強調色
  A.harborMid = x => 470 - 0.22 * x;
  const waves = (y0, h, n) => { let s = ''; for (let i = 0; i < n; i++) { const y = y0 + i * h / n; s += `<rect x="-20" y="${r1(y)}" width="1040" height="${r1(h / n * 0.55)}" fill="${i % 2 ? C.g7 : C.g9}" opacity=".55" filter="url(#hi-blur-s)"/>`; s += `<rect x="${(i * 137) % 600}" y="${r1(y + 4)}" width="${120 + (i * 53) % 140}" height="2" fill="${C.cream}" opacity=".35"/>`; } return s; };
  const gull = (x, y, k) => `<path d="M${x - 14 * k} ${y} Q${x - 7 * k} ${y - 9 * k} ${x} ${y} Q${x + 7 * k} ${y - 9 * k} ${x + 14 * k} ${y} Q${x + 7 * k} ${y - 4 * k} ${x} ${y + 2 * k} Q${x - 7 * k} ${y - 4 * k} ${x - 14 * k} ${y}Z" fill="${C.ink}"/>`;
  const boat = (x, y, k) => `<polygon points="${x - 40 * k},${y} ${x + 44 * k},${y} ${x + 30 * k},${y + 18 * k} ${x - 30 * k},${y + 18 * k}" fill="${C.ink}"/><rect x="${x - 2 * k}" y="${y - 70 * k}" width="${3 * k}" height="${70 * k}" fill="${C.ink}"/><polygon points="${x + 2 * k},${y - 66 * k} ${x + 34 * k},${y - 8 * k} ${x + 2 * k},${y - 8 * k}" fill="${C.cream}"/><polygon points="${x - 2 * k},${y - 52 * k} ${x - 26 * k},${y - 8 * k} ${x - 2 * k},${y - 8 * k}" fill="${C.paper2}"/>`;
  const dock = (x, y, w) => `<polygon points="${x - w / 2},${y} ${x + w / 2},${y} ${x + w / 2 - 10},${y + 26} ${x - w / 2 - 10},${y + 26}" fill="${C.wood}"/>` + [0, 1, 2, 3].map(i => `<rect x="${x - w / 2 + 8 + i * (w - 16) / 3}" y="${y + 20}" width="6" height="34" fill="#4E3524"/>`).join('') + `<rect x="${x - w / 2}" y="${y}" width="${w}" height="4" fill="#9B7552"/>`;
  A.harbor = function (nodes) {
    let s = `<rect width="1000" height="620" fill="${C.paper}"/>`;
    s += `<circle cx="160" cy="110" r="46" fill="${C.cream}"/>` + gull(300, 90, 1.2) + gull(360, 120, .9) + gull(520, 70, 1) + gull(640, 140, .7);
    s += `<path d="M0 260 Q200 236 420 250 T1000 230 L1000 260 Z" fill="${C.g3}" opacity=".5"/>`;
    s += `<rect y="250" width="1000" height="370" fill="${C.g8}"/>` + waves(256, 360, 12);
    // 燈塔＋紅光
    s += `<polygon points="930,140 1000,110 1000,180" fill="url(#hi-red)" opacity=".7"/><polygon points="930,140 760,96 760,170" fill="url(#hi-red)" opacity=".35"/>`;
    s += both(`<polygon points="910,270 950,270 944,150 916,150" fill="${C.cream}"/>`) + `<polygon points="912,230 948,230 947,212 913,212" fill="${C.g9}"/><polygon points="915,180 945,180 944,164 916,164" fill="${C.g9}"/><rect x="912" y="128" width="36" height="22" fill="${C.ink}"/><rect x="920" y="132" width="20" height="14" fill="${C.red}"/><polygon points="908,128 952,128 930,110" fill="${C.ink}"/>`;
    nodes.forEach(n => { if (!/^go:/.test(n.id)) s += dock(n.x, n.y + 30, n.r * 3.6); });
    s += boat(240, 470, 1) + boat(600, 400, .8) + boat(800, 330, .6);
    s += `<text x="40" y="44" font-size="18" font-weight="900" letter-spacing="5" fill="${C.ink}" font-family="Helvetica Neue,Arial,sans-serif">SENTENCE HARBOR</text>`;
    return `<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" class="forest harbor">${s}${nodesSvg(nodes)}</svg>`;
  };
  A.harborStage = () => `<svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="1000" height="420" fill="${C.paper}"/>` +
    gull(380, 70, 1.3) + gull(460, 100, 1) + `<polygon points="560,80 1000,40 1000,140" fill="url(#hi-red)" opacity=".4"/>` +
    `<polygon points="540,200 566,200 562,90 544,90" fill="${C.cream}"/><rect x="540" y="70" width="26" height="22" fill="${C.ink}"/><rect x="546" y="74" width="14" height="14" fill="${C.red}"/>` +
    `<rect y="200" width="1000" height="220" fill="${C.g8}"/>` + waves(206, 214, 8) +
    `<polygon points="0,300 330,300 320,330 0,330" fill="${C.wood}"/><rect y="300" width="330" height="4" fill="#9B7552"/><polygon points="670,300 1000,300 1000,330 660,330" fill="${C.wood}"/><rect x="670" y="300" width="330" height="4" fill="#9B7552"/>` +
    [40, 140, 240, 700, 800, 900].map(x => `<rect x="${x}" y="326" width="10" height="70" fill="#4E3524"/>`).join('') + `</svg>`;

  // 片語火山：深綠黑岩壁往右上爬，岩漿用收斂的紅（這張地圖比較多，但還是有質感），熱氣用噴槍漸層
  A.volcanoMid = x => 560 - 0.36 * x;
  A.volcano = function (nodes) {
    let s = `<rect width="1000" height="620" fill="#141A16"/>`;
    s += `<ellipse cx="760" cy="40" rx="360" ry="160" fill="url(#hi-red)" opacity=".28"/>`;
    s += both(`<polygon points="520,620 760,90 820,70 880,90 1000,320 1000,620" fill="#1E2621"/>`);
    s += `<polygon points="790,72 812,72 830,160 800,240 788,150" fill="${C.red}" opacity=".7"/><polygon points="798,90 808,90 818,170 800,220" fill="#F2A541" opacity=".7"/>`;
    for (let i = 0; i < 4; i++) s += `<ellipse cx="${700 + i * 50}" cy="${60 - i * 14}" rx="${60 + i * 20}" ry="${24 + i * 6}" fill="#6B7366" opacity="${0.18 - i * 0.03}" filter="url(#hi-blur)"/>`;
    s += both(`<polygon points="0,620 0,380 160,330 340,350 520,280 700,240 860,200 1000,230 1000,620" fill="#26302A"/>`, 'hi-shadeL');
    s += `<path d="M0 560 Q120 520 220 548 Q320 580 430 520 Q540 470 640 500 Q760 530 860 470 Q940 430 1000 450 L1000 620 L0 620Z" fill="${C.red}" opacity=".75"/>`;
    s += `<path d="M0 580 Q150 556 260 572 Q400 590 520 548 Q660 520 780 548 Q900 572 1000 520 L1000 620 L0 620Z" fill="#F2A541" opacity=".45" filter="url(#hi-blur-s)"/>`;
    s += `<rect y="430" width="1000" height="190" fill="url(#hi-red)" opacity=".18"/>`;
    for (let x = 60; x < 1000; x += 120) s += `<ellipse cx="${x}" cy="${r1(A.volcanoMid(x) + 40)}" rx="46" ry="12" fill="#3A332F"/>`;
    s += `<text x="40" y="44" font-size="18" font-weight="900" letter-spacing="5" fill="${C.cream}" font-family="Helvetica Neue,Arial,sans-serif">PHRASE VOLCANO</text>`;
    return `<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" class="forest volcano">${s}${nodesSvg(nodes)}</svg>`;
  };
  A.volcanoStage = () => `<svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="1000" height="420" fill="#141A16"/>` +
    `<ellipse cx="500" cy="420" rx="620" ry="200" fill="url(#hi-red)" opacity=".45"/><polygon points="600,260 760,40 800,30 840,40 1000,200 1000,260" fill="#1E2621"/><polygon points="790,34 806,34 816,110 796,150" fill="${C.red}" opacity=".6"/>` +
    `<polygon points="0,320 340,300 330,336 0,350" fill="#26302A"/><polygon points="660,300 1000,320 1000,350 670,336" fill="#26302A"/>` +
    `<path d="M0 360 Q200 340 400 362 Q600 384 800 356 Q900 344 1000 360 L1000 420 L0 420Z" fill="${C.red}" opacity=".8"/><path d="M0 380 Q250 366 500 384 Q750 400 1000 378 L1000 420 L0 420Z" fill="#F2A541" opacity=".45" filter="url(#hi-blur-s)"/></svg>`;

  // 戰鬥背景
  A.stage = map => map === 'cave' ? A.caveStage() : map === 'castle' ? A.castleStage() : map === 'harbor' ? A.harborStage() : map === 'volcano' ? A.volcanoStage() : `<svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="1000" height="420" fill="${C.paper}"/>` +
    `<polygon points="120,40 136,40 360,420 -120,420" fill="url(#hi-cone)" opacity=".55" filter="url(#hi-blur-s)"/>` +
    `<rect x="40" y="10" width="7" height="330" fill="${C.ink}"/><path d="M40 10 Q40 -6 64 -6 L140 0 L140 6 L64 2 Q47 2 47 10Z" fill="${C.ink}"/>` +
    bush(860, 300, 120) + bush(980, 250, 110) + bush(740, 330, 70) +
    `<polygon points="0,350 1000,290 1000,420 0,420" fill="${C.paper3}"/><polygon points="0,350 1000,290 1000,300 0,362" fill="${C.cream}"/></svg>`;

  A.caveStage = () => `<svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect width="1000" height="420" fill="#0E1712"/>` +
    `<ellipse cx="180" cy="200" rx="300" ry="220" fill="url(#hi-torch)"/><ellipse cx="840" cy="250" rx="240" ry="180" fill="url(#hi-red)" opacity=".18"/>` +
    `<polygon points="0,0 1000,0 1000,60 0,90" fill="#1B2620"/>` + [80, 260, 430, 610, 790, 940].map((x, i) => `<polygon points="${x},${88 - x * .03} ${x + 34},${88 - (x + 34) * .03} ${x + 14},${150 + (i % 3) * 30}" fill="#3A423B"/>`).join('') +
    `<rect x="176" y="120" width="10" height="44" fill="${C.ink}"/><path d="M181 74 Q200 104 181 122 Q162 104 181 74Z" fill="#F2A541"/><path d="M181 98 Q190 110 181 122 Q172 110 181 98Z" fill="${C.red}"/>` +
    `<polygon points="0,350 1000,290 1000,420 0,420" fill="#26302A"/><polygon points="0,350 1000,290 1000,298 0,360" fill="${C.stone2}"/></svg>`;
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
    flag: () => base + `<rect x="44" y="14" width="5" height="76" fill="#0b1a10" opacity=".25" transform="rotate(30 46 88)"/><circle cx="46" cy="86" r="7" fill="${C.stone2}"/><rect x="43" y="12" width="6" height="76" fill="${C.ink}"/><polygon class="t-flag" points="49,14 86,14 86,46 72,38 49,46"/><circle cx="67" cy="28" r="5" fill="${C.gold}"/>`,
    lighthouse: () => base + `<circle cx="56" cy="56" r="30" fill="#0b1a10" opacity=".25" filter="url(#hi-blur-s)"/><circle cx="50" cy="50" r="28" fill="${C.cream}"/><circle cx="50" cy="50" r="21" fill="${C.g9}"/><circle cx="50" cy="50" r="15" fill="${C.cream}"/><circle cx="50" cy="50" r="8" fill="${C.red}"/>`,
    lavalamp: () => base + `<circle cx="54" cy="56" r="24" fill="#0b1a10" opacity=".25" filter="url(#hi-blur-s)"/><rect x="36" y="30" width="28" height="42" rx="12" fill="${C.ink}"/><rect x="40" y="34" width="20" height="34" rx="9" fill="#3A2A26"/><circle cx="50" cy="44" r="6" fill="${C.red}"/><circle cx="47" cy="58" r="4" fill="#F2A541"/>`,
    torch: () => base + `<circle cx="50" cy="54" r="22" fill="#0b1a10" opacity=".25" filter="url(#hi-blur-s)"/><circle cx="50" cy="50" r="17" fill="${C.stone2}"/><circle cx="50" cy="50" r="11" fill="${C.ink}"/><path d="M50 30 Q64 48 50 60 Q36 48 50 30Z" fill="#F2A541"/><path d="M50 42 Q57 51 50 58 Q43 51 50 42Z" fill="${C.red}"/>`,
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
    goldbar: `<polygon points="2,16 6,8 22,8 18,16" fill="#B8913A"/><polygon points="6,8 22,8 20,11 7,11" fill="#E2C877"/>`,
    key: `<circle cx="7" cy="12" r="5" fill="${C.gold}"/><circle cx="7" cy="12" r="2" fill="${C.paper}"/><rect x="11" y="10.5" width="11" height="3" fill="${C.gold}"/><rect x="17" y="13" width="2.5" height="4" fill="${C.gold}"/><rect x="20" y="13" width="2" height="3" fill="${C.gold}"/>`,
    gshield: `<path d="M3 4 Q12 1 21 4 L20 13 Q17 20 12 22 Q7 20 4 13 Z" fill="${C.gold}"/><path d="M12 2 L12 22 Q7 20 4 13 L3 4 Q8 2.5 12 2Z" fill="#E2C877"/>`,
    pearl: `<circle cx="12" cy="13" r="8" fill="#E9E2D3"/><circle cx="9" cy="10" r="3" fill="#fff"/>`,
    boat: `<polygon points="2,15 22,15 18,21 6,21" fill="${C.ink}"/><rect x="11" y="2" width="2" height="13" fill="${C.ink}"/><polygon points="13,3 21,13 13,13" fill="${C.cream}"/>`,
    anchor: `<circle cx="12" cy="5" r="3" fill="none" stroke="${C.ink}" stroke-width="2"/><rect x="11" y="7" width="2" height="14" fill="${C.ink}"/><rect x="7" y="10" width="10" height="2" fill="${C.ink}"/><path d="M4 14 Q4 21 12 21 Q20 21 20 14 L18 15 Q17 19 12 19 Q7 19 6 15Z" fill="${C.ink}"/>`,
    crystal: `<polygon points="12,2 19,9 15,22 9,22 5,9" fill="${C.red}"/><polygon points="12,2 19,9 12,12 5,9" fill="#F2A541"/>`,
    boots: `<path d="M6 3 H13 V14 L21 16 Q22 21 18 21 H5 Q4 21 4 19Z" fill="${C.g9}"/><rect x="4" y="18" width="18" height="3" fill="${C.red}"/>`,
    flame: `<polygon points="4,20 16,6 19,5 18,8 6,22" fill="${C.red}"/><polygon points="9,15 16,6 19,5 18,8 11,17" fill="#F2A541"/><rect x="2" y="17" width="9" height="3" rx="1.5" fill="${C.ink}" transform="rotate(45 6.5 18.5)"/>`,
    iron: `<polygon points="2,16 6,8 22,8 18,16" fill="#8E979A"/><polygon points="6,8 22,8 20,11 7,11" fill="#C3C9CB"/>`,
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
