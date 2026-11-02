/* comics/art.js — 世界史漫畫《時光搖搖車》的美術元件（inline SVG 字串產生器，不用圖檔）。
   風格沿用勇者島 game/hero-island/STYLE.md：大色塊、無描邊、同色系噴槍陰影、奶油紙底、深綠、少量紅；印刷顆粒在 comic.css。
   這支沒有劇情：角色 A.CAST、姿勢 POSES、表情 EXPR、場景 A.SCENES、版面 A.LAYOUTS、地圖與時間軸都是元件，每一話的 data/*.js 只寫名字和座標。
   純字串、不碰 DOM，Node 也能載入（test/comic.test.js 拿它對資料）。 */
(function (root) {
  'use strict';
  const C = {
    paper: '#EFEBDD', paper2: '#E4DFCC', paper3: '#D3CCB4', cream: '#F7F3E6', ink: '#151714',
    g9: '#1F3D2B', g8: '#264A35', g7: '#2F5A40', g6: '#3C6B4C', g5: '#5E8C6A', g3: '#9DB9A0', g2: '#C3D3BE',
    red: '#E0352B', wood: '#6B4A32', gold: '#C9A54A', road: '#26302A',
    skin: '#E2B48E', skinB: '#B9825A', skinC: '#A06E4A',
    clay: '#B98F66', clay2: '#9C7550', clay3: '#D0AF88', brick: '#CDB68E', brick2: '#B59A70', brick3: '#E0CFAB', sand: '#E2D6B2',
    basalt: '#23272A', basalt2: '#3A4042', basalt3: '#6A7170'
  };
  const r1 = n => Math.round(n * 10) / 10;
  const A = { C };

  // ---------- 基本形狀 ----------
  const rect = (x, y, w, h, f, rx, extra) => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="${f}"${rx ? ` rx="${rx}"` : ''}${extra ? ' ' + extra : ''}/>`;
  const poly = (pts, f, extra) => `<polygon points="${pts}" fill="${f}"${extra ? ' ' + extra : ''}/>`;
  const circ = (x, y, r, f, extra) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(r)}" fill="${f}"${extra ? ' ' + extra : ''}/>`;
  const ell = (x, y, rx, ry, f, extra) => `<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="${f}"${extra ? ' ' + extra : ''}/>`;
  const path = (d, f, extra) => `<path d="${d}" fill="${f}"${extra ? ' ' + extra : ''}/>`;
  const txt = (x, y, t, size, f, o) => { o = o || {}; return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${o.w || 900}" fill="${f}" text-anchor="${o.a || 'middle'}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}${o.tr ? ` transform="${o.tr}"` : ''}>${t}</text>`; };
  function cap(x1, y1, x2, y2, w, fill) {
    const len = Math.hypot(x2 - x1, y2 - y1), ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    return `<rect x="${r1(x1 - w / 2)}" y="${r1(y1 - w / 2)}" width="${r1(len + w)}" height="${w}" rx="${w / 2}" fill="${fill}" transform="rotate(${r1(ang)} ${r1(x1)} ${r1(y1)})"/>`;
  }
  const sh = (shape, g) => shape.replace(/fill="[^"]*"/, `fill="url(#${g || 'cm-shade'})"`);
  const both = (shape, g) => shape + sh(shape, g);
  const groundShadow = (cx, cy, rx, ry) => ell(cx, cy, rx, ry, 'url(#cm-ground)');
  function seeded(n) { let s = n * 9301 + 49297; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

  A.defs = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<radialGradient id="cm-shade" cx="80%" cy="88%" r="90%"><stop offset="0" stop-color="#0b1a10" stop-opacity=".42"/><stop offset=".55" stop-color="#0b1a10" stop-opacity=".1"/><stop offset="1" stop-color="#0b1a10" stop-opacity="0"/></radialGradient>
<radialGradient id="cm-shadeL" cx="12%" cy="88%" r="90%"><stop offset="0" stop-color="#0b1a10" stop-opacity=".4"/><stop offset=".55" stop-color="#0b1a10" stop-opacity=".1"/><stop offset="1" stop-color="#0b1a10" stop-opacity="0"/></radialGradient>
<radialGradient id="cm-warm" cx="78%" cy="90%" r="95%"><stop offset="0" stop-color="#4a2c12" stop-opacity=".42"/><stop offset=".6" stop-color="#4a2c12" stop-opacity=".1"/><stop offset="1" stop-color="#4a2c12" stop-opacity="0"/></radialGradient>
<radialGradient id="cm-ground"><stop offset="0" stop-color="#1F3D2B" stop-opacity=".5"/><stop offset=".6" stop-color="#1F3D2B" stop-opacity=".16"/><stop offset="1" stop-color="#1F3D2B" stop-opacity="0"/></radialGradient>
<radialGradient id="cm-sun"><stop offset="0" stop-color="#FFF8DC" stop-opacity="1"/><stop offset=".5" stop-color="#FBEFC4" stop-opacity=".75"/><stop offset="1" stop-color="#F4E9B8" stop-opacity="0"/></radialGradient>
<radialGradient id="cm-glow"><stop offset="0" stop-color="#FFF6CF" stop-opacity=".95"/><stop offset=".4" stop-color="#E9E3A8" stop-opacity=".45"/><stop offset="1" stop-color="#9FC4A0" stop-opacity="0"/></radialGradient>
<radialGradient id="cm-redglow"><stop offset="0" stop-color="#FF7A5C"/><stop offset=".3" stop-color="#E0352B" stop-opacity=".75"/><stop offset="1" stop-color="#E0352B" stop-opacity="0"/></radialGradient>
<linearGradient id="cm-cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4EBB8" stop-opacity=".85"/><stop offset=".55" stop-color="#C9D9A8" stop-opacity=".32"/><stop offset="1" stop-color="#9DB9A0" stop-opacity="0"/></linearGradient>
<linearGradient id="cm-fridge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFF6CF" stop-opacity=".9"/><stop offset="1" stop-color="#FFF6CF" stop-opacity="0"/></linearGradient>
<filter id="cm-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="9"/></filter>
<filter id="cm-blur-s" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter>
</defs></svg>`;

  // ---------- 表情 ----------
  const EXPR = {
    calm: { e: 'dot', m: 'dash' }, happy: { e: 'arc', m: 'smile' }, grin: { e: 'dot', m: 'grin' }, shock: { e: 'wide', m: 'o' }, shout: { e: 'angry', m: 'open' },
    mad: { e: 'angry', m: 'frown' }, worry: { e: 'dot', b: 'up', m: 'wave' }, smug: { e: 'half', m: 'smirk' }, chew: { e: 'arc', m: 'chew' }, awe: { e: 'wide', m: 'small' }, think: { e: 'dot', b: 'one', m: 'dash' }, yell: { e: 'wide', m: 'open' }
  };
  function face(cx, cy, r, name, look) {
    const X = EXPR[name] || EXPR.calm, k = r / 22, dx = (look || 0) * 6 * k, ex = 8 * k;
    let s = '';
    const L = cx + dx - ex, R = cx + dx + ex, y = cy - 1 * k;
    if (X.e === 'dot' || X.e === 'angry') s += ell(L, y, 2.5 * k, 3.4 * k, C.ink) + ell(R, y - .6 * k, 2.5 * k, 3.4 * k, C.ink);
    if (X.e === 'wide') s += circ(L, y, 5 * k, C.cream) + circ(R, y, 5 * k, C.cream) + circ(L + (look || 0) * 1.5 * k, y, 2.5 * k, C.ink) + circ(R + (look || 0) * 1.5 * k, y, 2.5 * k, C.ink);
    if (X.e === 'arc') [L, R].forEach(x => { s += path(`M${r1(x - 4.4 * k)} ${r1(y + 1.4 * k)} Q${r1(x)} ${r1(y - 5.4 * k)} ${r1(x + 4.4 * k)} ${r1(y + 1.4 * k)} Q${r1(x)} ${r1(y - 1.8 * k)} ${r1(x - 4.4 * k)} ${r1(y + 1.4 * k)}Z`, C.ink); });
    if (X.e === 'half') s += rect(L - 4 * k, y - 1 * k, 8 * k, 2.6 * k, C.ink, 1) + rect(R - 4 * k, y - 1 * k, 8 * k, 2.6 * k, C.ink, 1);
    if (X.e === 'angry') s += poly(`${r1(L - 5 * k)},${r1(y - 8 * k)} ${r1(L + 5 * k)},${r1(y - 4 * k)} ${r1(L + 4 * k)},${r1(y - 2 * k)} ${r1(L - 5.4 * k)},${r1(y - 5.6 * k)}`, C.ink) + poly(`${r1(R + 5 * k)},${r1(y - 8 * k)} ${r1(R - 5 * k)},${r1(y - 4 * k)} ${r1(R - 4 * k)},${r1(y - 2 * k)} ${r1(R + 5.4 * k)},${r1(y - 5.6 * k)}`, C.ink);
    if (X.b === 'up') s += poly(`${r1(L - 5 * k)},${r1(y - 5 * k)} ${r1(L + 5 * k)},${r1(y - 9 * k)} ${r1(L + 5 * k)},${r1(y - 7 * k)} ${r1(L - 5 * k)},${r1(y - 3 * k)}`, C.ink) + poly(`${r1(R + 5 * k)},${r1(y - 5 * k)} ${r1(R - 5 * k)},${r1(y - 9 * k)} ${r1(R - 5 * k)},${r1(y - 7 * k)} ${r1(R + 5 * k)},${r1(y - 3 * k)}`, C.ink);
    if (X.b === 'one') s += rect(R - 5 * k, y - 8 * k, 10 * k, 2.2 * k, C.ink, 1);
    const mx = cx + dx * 1.1, my = cy + 9 * k;
    if (X.m === 'dash') s += rect(mx - 4 * k, my, 8 * k, 2.4 * k, C.ink, 1);
    if (X.m === 'smile') s += path(`M${r1(mx - 6 * k)} ${r1(my - 1 * k)} Q${r1(mx)} ${r1(my + 6 * k)} ${r1(mx + 6 * k)} ${r1(my - 1 * k)} Q${r1(mx)} ${r1(my + 2 * k)} ${r1(mx - 6 * k)} ${r1(my - 1 * k)}Z`, C.ink);
    if (X.m === 'grin') s += path(`M${r1(mx - 7 * k)} ${r1(my - 2 * k)} L${r1(mx + 7 * k)} ${r1(my - 2 * k)} Q${r1(mx + 5 * k)} ${r1(my + 6 * k)} ${r1(mx)} ${r1(my + 6 * k)} Q${r1(mx - 5 * k)} ${r1(my + 6 * k)} ${r1(mx - 7 * k)} ${r1(my - 2 * k)}Z`, C.ink) + rect(mx - 5.5 * k, my - 1.6 * k, 11 * k, 2.2 * k, C.cream);
    if (X.m === 'o') s += ell(mx, my + 2 * k, 3.6 * k, 5 * k, C.ink);
    if (X.m === 'small') s += ell(mx, my + 1 * k, 2.2 * k, 2.8 * k, C.ink);
    if (X.m === 'open') s += path(`M${r1(mx - 7 * k)} ${r1(my - 2 * k)} L${r1(mx + 7 * k)} ${r1(my - 3 * k)} Q${r1(mx + 6 * k)} ${r1(my + 8 * k)} ${r1(mx)} ${r1(my + 8 * k)} Q${r1(mx - 6 * k)} ${r1(my + 8 * k)} ${r1(mx - 7 * k)} ${r1(my - 2 * k)}Z`, C.ink) + ell(mx, my + 5 * k, 3.4 * k, 2.2 * k, C.red);
    if (X.m === 'frown') s += path(`M${r1(mx - 5 * k)} ${r1(my + 3 * k)} Q${r1(mx)} ${r1(my - 3 * k)} ${r1(mx + 5 * k)} ${r1(my + 3 * k)} Q${r1(mx)} ${r1(my)} ${r1(mx - 5 * k)} ${r1(my + 3 * k)}Z`, C.ink);
    if (X.m === 'wave') s += path(`M${r1(mx - 6 * k)} ${r1(my + 1 * k)} q${r1(3 * k)} ${r1(-3 * k)} ${r1(6 * k)} 0 t${r1(6 * k)} 0 l0 ${r1(2 * k)} q${r1(-3 * k)} ${r1(-3 * k)} ${r1(-6 * k)} 0 t${r1(-6 * k)} 0Z`, C.ink);
    if (X.m === 'smirk') s += path(`M${r1(mx - 5 * k)} ${r1(my + 1 * k)} Q${r1(mx + 2 * k)} ${r1(my + 4 * k)} ${r1(mx + 6 * k)} ${r1(my - 2 * k)} L${r1(mx + 7 * k)} ${r1(my)} Q${r1(mx + 3 * k)} ${r1(my + 7 * k)} ${r1(mx - 5 * k)} ${r1(my + 1 * k)}Z`, C.ink);
    if (X.m === 'chew') s += path(`M${r1(mx - 6 * k)} ${r1(my + 1 * k)} Q${r1(mx)} ${r1(my + 6 * k)} ${r1(mx + 6 * k)} ${r1(my)}`, C.ink) + circ(cx + dx + 13 * k, cy + 6 * k, 6 * k, 'rgba(160,80,50,.28)');
    return s;
  }
  const blush = (cx, cy, r) => ell(cx - r * .58, cy + r * .34, r * .2, r * .13, C.red, 'opacity=".26"') + ell(cx + r * .58, cy + r * .34, r * .2, r * .13, C.red, 'opacity=".26"');
  const sweat = (x, y, s) => path(`M${x} ${y} q${5 * s} ${9 * s} 0 ${14 * s} q${-5 * s} ${-5 * s} 0 ${-14 * s}Z`, '#BFD7DF');

  // ---------- 姿勢（腳底 y=0，往上是負；身高約 200；h＝臀 n＝頸 t＝頭心；aF/aB 前後手 [肘,手]；lF/lB 前後腳 [膝,腳]） ----------
  const POSES = {
    stand: { h: [0, -92], n: [2, -150], t: [3, -174], aF: [[22, -118], [26, -88]], aB: [[-20, -118], [-26, -88]], lF: [[9, -46], [13, 0]], lB: [[-9, -46], [-14, 0]] },
    run: { h: [0, -92], n: [18, -146], t: [26, -168], aF: [[42, -118], [64, -142]], aB: [[-12, -112], [-40, -92]], lF: [[38, -66], [28, -22]], lB: [[-24, -48], [-66, -30]] },
    chase: { h: [0, -92], n: [16, -148], t: [22, -172], aF: [[44, -146], [76, -168]], aB: [[-12, -114], [-38, -104]], lF: [[36, -58], [44, -6]], lB: [[-24, -48], [-58, -26]] },
    shout: { h: [0, -92], n: [0, -150], t: [0, -175], aF: [[28, -166], [40, -202]], aB: [[-28, -166], [-40, -202]], lF: [[13, -46], [24, 0]], lB: [[-13, -46], [-24, 0]] },
    fists: { h: [0, -92], n: [2, -150], t: [4, -174], aF: [[30, -124], [18, -96]], aB: [[-28, -124], [-16, -96]], lF: [[12, -46], [22, 0]], lB: [[-12, -46], [-22, 0]] },
    point: { h: [0, -92], n: [2, -150], t: [4, -174], aF: [[40, -136], [78, -146]], aB: [[-20, -118], [-26, -90]], lF: [[10, -46], [16, 0]], lB: [[-9, -46], [-14, 0]] },
    pointUp: { h: [0, -92], n: [2, -150], t: [4, -176], aF: [[34, -158], [58, -198]], aB: [[-20, -118], [-26, -90]], lF: [[10, -46], [16, 0]], lB: [[-9, -46], [-14, 0]] },
    think: { h: [0, -92], n: [2, -150], t: [4, -174], aF: [[30, -122], [14, -148]], aB: [[-14, -116], [10, -112]], lF: [[10, -46], [14, 0]], lB: [[-9, -46], [-14, 0]] },
    eat: { h: [0, -92], n: [2, -150], t: [4, -174], aF: [[32, -126], [16, -154]], aB: [[-6, -114], [30, -116]], lF: [[10, -46], [16, 0]], lB: [[-9, -46], [-14, 0]] },
    hold: { h: [0, -92], n: [2, -150], t: [4, -174], aF: [[24, -116], [36, -112]], aB: [[-20, -114], [-16, -106]], lF: [[9, -46], [13, 0]], lB: [[-9, -46], [-14, 0]] },
    offer: { h: [0, -92], n: [4, -150], t: [8, -174], aF: [[36, -122], [66, -124]], aB: [[28, -116], [60, -106]], lF: [[10, -46], [16, 0]], lB: [[-9, -46], [-14, 0]] },
    lookup: { h: [0, -92], n: [0, -150], t: [-3, -176], tilt: -12, aF: [[20, -118], [22, -88]], aB: [[-20, -118], [-24, -88]], lF: [[9, -46], [13, 0]], lB: [[-9, -46], [-14, 0]] },
    scared: { h: [0, -88], n: [-8, -146], t: [-12, -170], aF: [[24, -130], [12, -160]], aB: [[-32, -130], [-28, -160]], lF: [[18, -44], [28, 0]], lB: [[-12, -44], [-22, 0]] },
    wave: { h: [0, -92], n: [2, -150], t: [4, -174], aF: [[34, -164], [52, -196]], aB: [[-20, -118], [-26, -88]], lF: [[9, -46], [13, 0]], lB: [[-9, -46], [-14, 0]] },
    sit: { h: [0, -34], n: [-8, -92], t: [-6, -116], aF: [[24, -62], [38, -26]], aB: [[-30, -64], [-42, -26]], lF: [[44, -46], [72, -4]], lB: [[38, -40], [60, -2]] },
    splat: { h: [0, -30], n: [-14, -88], t: [-16, -112], tilt: -10, aF: [[20, -106], [40, -134]], aB: [[-40, -94], [-60, -122]], lF: [[42, -56], [78, -82]], lB: [[40, -42], [76, -56]] },
    write: { h: [0, -28], n: [4, -86], t: [8, -110], aF: [[28, -60], [46, -44]], aB: [[6, -52], [38, -30]], lF: [[42, -18], [-8, -6]], lB: [[-36, -18], [14, -6]] },
    carry: { h: [0, -92], n: [4, -148], t: [10, -170], aF: [[30, -142], [22, -172]], aB: [[-20, -124], [-18, -160]], lF: [[14, -46], [24, 0]], lB: [[-14, -46], [-22, 0]] },
    arg: { h: [0, -92], n: [4, -150], t: [8, -174], aF: [[34, -150], [64, -176]], aB: [[-20, -120], [-30, -96]], lF: [[12, -46], [20, 0]], lB: [[-10, -46], [-18, 0]] },
    raise: { h: [0, -92], n: [0, -150], t: [2, -175], aF: [[32, -166], [46, -198]], aB: [[-20, -118], [-24, -88]], lF: [[9, -46], [13, 0]], lB: [[-9, -46], [-14, 0]] }
  };

  // ---------- 招牌道具 ----------
  const notebook = (x, y, s) => `<g transform="translate(${x} ${y}) rotate(-10) scale(${s})">` + rect(-30, -36, 62, 74, C.ink, 3) + both(rect(-27, -34, 56, 68, C.cream)) + rect(-27, -34, 7, 68, C.red) + rect(-14, -22, 34, 3, C.g5) + rect(-14, -11, 34, 3, C.g5) + rect(-14, 0, 24, 3, C.g5) + `</g>`;
  const tablet = (x, y, w, h, o) => { o = o || {}; return `<g transform="translate(${x} ${y}) rotate(${o.rot || 0})">` + both(rect(-w / 2, -h / 2, w, h, o.f || C.clay, Math.min(w, h) * .12), 'cm-warm') + (o.blank ? '' : wedges(-w / 2 + w * .1, -h / 2 + h * .1, w * .8, h * .8, { seed: o.seed || 3, s: o.ws || Math.max(4, w / 14), f: o.wf || C.clay2 })) + `</g>`; };
  const bottle = () => both(cap(-24, -158, -34, -96, 22, C.g3)) + rect(-37, -176, 22, 12, C.red, 4, 'transform="rotate(-9 -26 -170)"') + rect(-38, -130, 20, 3, C.cream, 0, 'transform="rotate(-9 -28 -130)"');

  // 楔形文字樣子的裝飾（不是真的文字）：一排一排楔子（三角頭＋細尾）
  function wedges(x, y, w, h, o) {
    o = o || {}; const s = o.s || 6, f = o.f || C.clay2, rnd = seeded(o.seed || 1), rowH = s * 2.2;
    let d = '';
    for (let yy = y; yy + s * 1.6 < y + h; yy += rowH) {
      let xx = x;
      while (xx + s * 1.4 < x + w) {
        const t = rnd();
        if (t < .55) d += `M${r1(xx)} ${r1(yy)}h${r1(s)}l${r1(-s * .4)} ${r1(s * .52)}v${r1(s * .95)}h${r1(-s * .2)}v${r1(-s * .95)}Z`;
        else if (t < .86) d += `M${r1(xx)} ${r1(yy + s * .1)}v${r1(s)}l${r1(s * .55)} ${r1(-s * .4)}h${r1(s * .95)}v${r1(-s * .2)}h${r1(-s * .95)}Z`;
        else d += `M${r1(xx + s * .1)} ${r1(yy + s * .4)}l${r1(s * .8)} ${r1(-s * .4)}v${r1(s * .95)}Z`;
        xx += s * (1.1 + rnd() * .9);
      }
      if (o.rule) d += `M${r1(x)} ${r1(yy + rowH - s * .24)}h${r1(w)}v${r1(Math.max(.8, s * .06))}h${r1(-w)}Z`;
    }
    return path(d, f);
  }

  // ---------- 角色 ----------
  const hairKai = (x, y, r, look) => { const k = r / 22, dx = (look || 0) * 2; return path(`M${r1(x - 23 * k)} ${r1(y - 1 * k)} L${r1(x - 28 * k)} ${r1(y - 16 * k)} L${r1(x - 18 * k)} ${r1(y - 18 * k)} L${r1(x - 20 * k)} ${r1(y - 32 * k)} L${r1(x - 7 * k + dx)} ${r1(y - 24 * k)} L${r1(x - 3 * k + dx)} ${r1(y - 37 * k)} L${r1(x + 8 * k + dx)} ${r1(y - 25 * k)} L${r1(x + 21 * k + dx)} ${r1(y - 32 * k)} L${r1(x + 20 * k)} ${r1(y - 18 * k)} L${r1(x + 29 * k)} ${r1(y - 13 * k)} L${r1(x + 23 * k)} ${r1(y - 1 * k)} Q${r1(x + 16 * k)} ${r1(y - 11 * k)} ${r1(x + 2 * k + dx)} ${r1(y - 11 * k)} Q${r1(x - 14 * k)} ${r1(y - 11 * k)} ${r1(x - 23 * k)} ${r1(y - 1 * k)}Z`, C.ink); };
  const hairHeBack = (x, y, r) => { const k = r / 22; return circ(x - 28 * k, y + 2 * k, 12 * k, C.ink) + circ(x + 28 * k, y + 2 * k, 12 * k, C.ink) + cap(x - 24 * k, y + 3 * k, x - 16 * k, y + 2 * k, 4 * k, C.red) + cap(x + 24 * k, y + 3 * k, x + 16 * k, y + 2 * k, 4 * k, C.red); };
  const hairHe = (x, y, r, look) => { const k = r / 22, dx = (look || 0) * 2; return path(`M${r1(x - 24 * k)} ${r1(y + 6 * k)} Q${r1(x - 28 * k)} ${r1(y - 28 * k)} ${r1(x)} ${r1(y - 28 * k)} Q${r1(x + 28 * k)} ${r1(y - 28 * k)} ${r1(x + 24 * k)} ${r1(y + 6 * k)} L${r1(x + 17 * k)} ${r1(y - 4 * k)} Q${r1(x + 8 * k + dx)} ${r1(y - 7 * k)} ${r1(x + 4 * k + dx)} ${r1(y - 14 * k)} Q${r1(x - 6 * k + dx)} ${r1(y - 6 * k)} ${r1(x - 17 * k)} ${r1(y - 4 * k)}Z`, C.ink); };
  const glasses = (x, y, r, look) => { const k = r / 22, dx = (look || 0) * 6 * k, L = x + dx - 8 * k, R = x + dx + 8 * k, cy = y - 1 * k; return `<g fill="none" stroke="${C.ink}" stroke-width="${r1(1.6 * k)}"><circle cx="${r1(L)}" cy="${r1(cy)}" r="${r1(6.2 * k)}"/><circle cx="${r1(R)}" cy="${r1(cy)}" r="${r1(6.2 * k)}"/><path d="M${r1(L + 6 * k)} ${r1(cy)}h${r1(4 * k)}"/></g>`; };
  const hairIddin = (x, y, r) => { const k = r / 22; let s = ''; [[-17, -6, 8], [-20, -15, 8], [-11, -21, 9], [0, -24, 9], [11, -21, 9], [20, -15, 8], [17, -6, 8]].forEach(c => { s += circ(x + c[0] * k, y + c[1] * k, c[2] * k, C.ink); }); return s + rect(x - 20 * k, y - 15 * k, 40 * k, 3 * k, C.cream, 1); };
  const beard = (x, y, r, long) => { const k = r / 22; return path(`M${r1(x - 18 * k)} ${r1(y + 4 * k)} L${r1(x + 18 * k)} ${r1(y + 4 * k)} L${r1(x + 14 * k)} ${r1(y + (long ? 42 : 26) * k)} L${r1(x - 14 * k)} ${r1(y + (long ? 42 : 26) * k)}Z`, C.ink); };
  const hatKing = (x, y, r) => { const k = r / 22; return path(`M${r1(x - 20 * k)} ${r1(y - 8 * k)} Q${r1(x - 24 * k)} ${r1(y - 46 * k)} ${r1(x)} ${r1(y - 48 * k)} Q${r1(x + 24 * k)} ${r1(y - 46 * k)} ${r1(x + 20 * k)} ${r1(y - 8 * k)}Z`, C.g7) + rect(x - 24 * k, y - 16 * k, 48 * k, 9 * k, C.gold, 3 * k) + circ(x, y - 12 * k, 3 * k, C.red); };
  const hairMan = (x, y, r) => { const k = r / 22; return path(`M${r1(x - 22 * k)} ${r1(y)} Q${r1(x - 24 * k)} ${r1(y - 26 * k)} ${r1(x)} ${r1(y - 26 * k)} Q${r1(x + 24 * k)} ${r1(y - 26 * k)} ${r1(x + 22 * k)} ${r1(y)} Q${r1(x + 12 * k)} ${r1(y - 11 * k)} ${r1(x)} ${r1(y - 11 * k)} Q${r1(x - 12 * k)} ${r1(y - 11 * k)} ${r1(x - 22 * k)} ${r1(y)}Z`, C.ink); };

  const CAST = {
    kai: { name: '阿凱', skin: C.skin, top: C.g7, bottom: C.g9, leg: C.skin, shoe: C.ink, r: 22, hair: hairKai, back: bottle, stripe: C.cream },
    he: { name: '小禾', skin: C.skin, top: C.g3, skirt: C.g9, leg: C.skin, shoe: C.red, r: 22, hairBack: hairHeBack, hair: hairHe, over: glasses, k: .9 },
    iddin: { name: '伊丁', skin: C.skinB, top: '#8C5A3C', skirt: C.gold, leg: C.skinB, sleeve: C.skinB, shoe: C.wood, r: 22, hair: hairIddin, k: .96 },
    king: { name: '漢摩拉比', skin: C.skinB, robe: C.g9, trim: C.gold, shoe: C.ink, r: 19, hat: hatKing, beard: 2, k: 1.26 },
    guard: { name: '隨從', skin: C.skinC, robe: C.paper3, trim: C.g7, shoe: C.ink, r: 18, hair: hairMan, beard: 1, k: 1.18 },
    farmer: { name: '農夫', skin: C.skinC, top: C.brick, skirt: C.g5, leg: C.skinC, sleeve: C.skinC, shoe: C.wood, r: 19, hair: hairMan, beard: 1, k: 1.14 },
    farmer2: { name: '農夫', skin: C.skinB, top: C.g2, skirt: C.clay2, leg: C.skinB, sleeve: C.skinB, shoe: C.wood, r: 19, hair: hairMan, k: 1.1 },
    scribe: { name: '書記官', skin: C.skinB, robe: C.cream, trim: C.g5, shoe: C.wood, r: 19, hair: hairMan, beard: 1, k: 1.14 }
  };

  // 一個角色（腳底在 x,y）。o：s 大小、flip 面向左、expr 表情、look 眼睛方向 -1～1、sweat、blush、hold 手上道具
  function actor(o) {
    const sp = CAST[o.c]; if (!sp) return '';
    const P = POSES[o.pose || 'stand'] || POSES.stand, s = (o.s || 1) * (sp.k || 1), look = o.look || 0, hair = sp.hair, [hx, hy] = P.h, [nx, ny] = P.n, [tx, ty] = P.t, r = sp.r;
    let g = o.noShadow ? '' : groundShadow(0, 2, 62, 8);
    if (sp.back) g += `<g transform="translate(${nx - 2} ${ny + 150})">${sp.back()}</g>`;
    const limb = (a, b, c, w, f1, f2) => cap(a[0], a[1], b[0], b[1], w, f1) + cap(b[0], b[1], c[0], c[1], w, f2 || f1);
    const shoulderB = [nx - 13, ny + 8], shoulderF = [nx + 13, ny + 7];
    const arm = sp.robe || sp.top, hand = sp.skin;
    // 後手
    g += limb(shoulderB, P.aB[0], P.aB[1], 12, sp.robe || sp.skin === sp.top ? arm : (sp.sleeve || sp.skin)); g += circ(P.aB[1][0], P.aB[1][1], 7.5, hand);
    // 腿
    const foot = (f, kx) => ell(f[0] + Math.sign(f[0] - kx || 1) * 4 + 4, f[1] - 4, 12, 6, sp.shoe);
    if (o.bust) { /* 下半身被東西擋住 */ } else if (!sp.robe) {
      [[P.lB, 15], [P.lF, 15]].forEach(([l]) => {
        const mid = [(hx + l[0][0]) / 2, (hy + l[0][1]) / 2];
        g += cap(hx, hy, l[0][0], l[0][1], 15, sp.leg) + cap(l[0][0], l[0][1], l[1][0], l[1][1], 14, sp.leg) + foot(l[1], l[0][0]);
        if (sp.bottom) g += cap(hx, hy, mid[0], mid[1], 19, sp.bottom);
      });
    } else {
      [P.lB, P.lF].forEach(l => { g += foot(l[1], l[0][0]); });
    }
    // 身體
    if (sp.robe) {
      const lx = Math.min(P.lB[1][0], P.lF[1][0]) - 18, rx = Math.max(P.lB[1][0], P.lF[1][0]) + 18;
      g += both(poly(`${nx - 24},${ny + 2} ${nx + 24},${ny - 1} ${rx + 6},-5 ${lx - 6},-3`, sp.robe));
      g += poly(`${lx - 6},-3 ${rx + 6},-5 ${rx + 5},-17 ${lx - 5},-15`, sp.trim);
      g += poly(`${nx + 8},${ny} ${nx + 16},${ny - 1} ${rx - 4},-15 ${rx - 16},-15`, sp.trim, 'opacity=".7"');
    } else if (sp.skirt) {
      g += both(poly(`${nx - 21},${ny + 3} ${nx + 21},${ny} ${hx + 26},${hy + 22} ${hx - 28},${hy + 24}`, sp.top));
      g += both(poly(`${hx - 22},${hy - 8} ${hx + 22},${hy - 10} ${hx + 36},${hy + 28} ${hx - 38},${hy + 30}`, sp.skirt));
    } else {
      g += both(poly(`${nx - 22},${ny + 3} ${nx + 22},${ny} ${hx + 25},${hy + 6} ${hx - 24},${hy + 9}`, sp.top));
      if (sp.stripe) g += poly(`${nx + 12},${ny + 1} ${nx + 17},${ny} ${hx + 18},${hy + 7} ${hx + 11},${hy + 8}`, sp.stripe);
    }
    // 頭
    const tilt = P.tilt ? ` rotate(${P.tilt} ${tx} ${ty})` : '';
    g += `<g transform="translate(0 0)${tilt}">`;
    if (sp.hairBack) g += sp.hairBack(tx, ty, r);
    g += both(circ(tx, ty, r, sp.skin), 'cm-warm');
    if (sp.beard) g += beard(tx, ty + r * .35, r, sp.beard === 2);
    g += face(tx, ty, r, o.expr || 'calm', look);
    if (o.blush) g += blush(tx, ty, r);
    if (hair) g += hair(tx, ty, r, look);
    if (sp.hat) g += sp.hat(tx, ty, r);
    if (sp.over) g += sp.over(tx, ty, r, look);
    if (o.sweat) g += sweat(tx + r + 4, ty - r * .7, 1) + (o.sweat > 1 ? sweat(tx + r + 14, ty - r * .1, .7) : '');
    g += `</g>`;
    // 手上的東西（在前手下面）
    const holds = [].concat(o.hold || []), has = k => holds.indexOf(k) >= 0;
    if (has('notebook')) g += notebook(P.aF[1][0] + 2, P.aF[1][1] + 6, o.holdS || 1);
    if (has('tablet')) g += tablet(P.aF[1][0] + 8, P.aF[1][1] - 2, 56, 72, { seed: 7, rot: -8 });
    if (has('tabletBlank')) g += tablet(P.aF[1][0] + 8, P.aF[1][1] - 2, 56, 72, { blank: 1, rot: -8 });
    if (has('cup')) g += poly(`${P.aB[1][0] - 10},${P.aB[1][1] - 12} ${P.aB[1][0] + 10},${P.aB[1][1] - 12} ${P.aB[1][0] + 7},${P.aB[1][1] + 6} ${P.aB[1][0] - 7},${P.aB[1][1] + 6}`, C.cream) + rect(P.aB[1][0] - 11, P.aB[1][1] - 14, 22, 4, C.gold, 1);
    if (has('spoon')) g += cap(P.aF[1][0], P.aF[1][1], P.aF[1][0] - 8, P.aF[1][1] + 18, 3, C.paper3) + ell(P.aF[1][0] - 1, P.aF[1][1] - 3, 4, 3, C.paper3);
    if (has('sack')) g += both(path(`M${P.aF[1][0] - 52} ${P.aF[1][1] - 34} Q${P.aF[1][0] - 40} ${P.aF[1][1] - 54} ${P.aF[1][0] - 8} ${P.aF[1][1] - 46} L${P.aF[1][0] + 14} ${P.aF[1][1] - 18} Q${P.aF[1][0] + 2} ${P.aF[1][1] + 4} ${P.aF[1][0] - 30} ${P.aF[1][1] - 2}Z`, C.clay3), 'cm-warm');
    if (has('reed')) g += cap(P.aF[1][0] - 2, P.aF[1][1] + 2, P.aF[1][0] + 18, P.aF[1][1] - 24, 3, C.gold);
    // 前手
    g += limb(shoulderF, P.aF[0], P.aF[1], 12, sp.robe || sp.top === sp.skin ? arm : (sp.sleeve || arm)); g += circ(P.aF[1][0], P.aF[1][1], 7.5, hand);
    return `<g transform="translate(${o.x} ${o.y}) scale(${o.flip ? -r1(s * 100) / 100 : r1(s * 100) / 100} ${r1(s * 100) / 100})${o.rot ? ` rotate(${o.rot})` : ''}">${g}</g>`;
  }
  A.actor = actor;
  // 頭的中心與半徑（面板座標）：測試用，檢查泡泡有沒有蓋到臉
  A.headOf = o => { const sp = CAST[o.c], P = POSES[o.pose || 'stand'] || POSES.stand, s = (o.s || 1) * (sp.k || 1), R = sp.r * s; return { x: o.x + (o.flip ? -1 : 1) * P.t[0] * s, y: o.y + P.t[1] * s, r: R }; };

  // ---------- 時光搖搖車（原點＝底座中心、貼地） ----------
  function car(x, y, s, o) {
    o = o || {};
    let g = o.noShadow ? '' : groundShadow(0, 4, 150, 12);
    g += rect(-132, -18, 264, 18, C.g9, 9);
    g += rect(-11, -46, 22, 30, C.ink, 4);
    [-48, -40, -32, -24].forEach((yy, i) => { g += rect(-14, yy, 28, 4, i % 2 ? C.basalt3 : C.ink, 2); });
    g += rect(102, -86, 42, 70, C.ink, 5) + rect(106, -82, 34, 22, C.paper) + txt(123, -65, '10元', 13, C.ink) + rect(114, -54, 18, 4, C.gold, 2);
    g += rect(-92, -146, 32, 58, C.ink, 9);
    g += both(path('M-122 -46 L-126 -86 Q-126 -112 -92 -112 L-34 -112 L-20 -96 L44 -96 Q90 -98 104 -72 Q112 -56 108 -46Z', C.g5));
    g += path('M-124 -74 L106 -74 L108 -64 L-124 -64Z', C.cream, 'opacity=".85"');
    g += poly('10,-96 20,-146 28,-146 24,-96', C.g9) + poly('20,-146 28,-146 40,-128 34,-126', C.g9, 'opacity=".55"');
    g += cap(-16, -116, 2, -128, 7, C.ink) + ell(-2, -124, 5, 11, C.ink, 'transform="rotate(20 -2 -124)"');
    g += circ(-74, -44, 22, C.ink) + circ(-74, -44, 8, C.cream) + circ(62, -44, 22, C.ink) + circ(62, -44, 8, C.cream);
    g += circ(103, -80, 9, C.cream);
    g += circ(-126, -92, 16, 'url(#cm-redglow)') + circ(-126, -92, 5, C.red);
    if (o.lights) g += circ(103, -80, 34, 'url(#cm-glow)');
    return `<g transform="translate(${x} ${y}) scale(${s})${o.rot ? ` rotate(${o.rot})` : ''}">${g}</g>`;
  }
  A.car = car;

  // ---------- 零件 ----------
  const palm = (x, y, h, f, f2) => {
    const tx = x + h * .1, ty = y - h, lean = h * .1; f = f || C.g7; f2 = f2 || C.g9;
    let s = path(`M${r1(x - h * .035)} ${y} Q${r1(x - h * .01)} ${r1(y - h * .6)} ${r1(tx - h * .018)} ${r1(ty)} L${r1(tx + h * .018)} ${r1(ty)} Q${r1(x + h * .05)} ${r1(y - h * .55)} ${r1(x + h * .04)} ${y}Z`, C.wood);
    [[-1, .12, f2], [1, .14, f2], [-1, -.1, f], [1, -.08, f], [-.55, -.3, f2], [.6, -.28, f]].forEach(([dx, dy, c]) => {
      const L = h * .42;
      s += path(`M${r1(tx)} ${r1(ty)} Q${r1(tx + dx * L * .55)} ${r1(ty + dy * L - L * .4)} ${r1(tx + dx * L)} ${r1(ty + dy * L + L * .28)} Q${r1(tx + dx * L * .5)} ${r1(ty + dy * L - L * .05)} ${r1(tx)} ${r1(ty + L * .05)}Z`, c);
    });
    return s + circ(tx - lean * .2, ty + h * .03, h * .025, C.gold) + circ(tx + lean * .2, ty + h * .035, h * .025, C.gold);
  };
  const reedTuft = (x, y, n, f) => { let s = ''; for (let i = 0; i < n; i++) { const dx = (i - n / 2) * 7; s += path(`M${x + dx - 2} ${y} Q${x + dx * 1.4} ${y - 30} ${x + dx * 2.2} ${y - 50 - (i % 3) * 8} Q${x + dx * 1.2} ${y - 26} ${x + dx + 3} ${y}Z`, f || C.g6); } return s; };
  function brickWall(x, y, w, h, f, f2, seed) {
    let s = rect(x, y, w, h, f); const rnd = seeded(seed || 2);
    for (let yy = y + 14, i = 0; yy < y + h; yy += 28, i++) for (let xx = x + (i % 2 ? 22 : 4); xx < x + w - 26; xx += 66) if (rnd() < .42) s += rect(xx, yy, Math.min(44, x + w - xx), 16, f2, 2, 'opacity=".5"');
    return s;
  }
  const sack = (x, y, s, f) => `<g transform="translate(${x} ${y}) scale(${s})">` + groundShadow(0, 1, 40, 6) + both(path('M-34 0 Q-44 -30 -26 -48 Q-14 -56 -9 -60 L-16 -76 Q0 -70 16 -76 L9 -60 Q14 -56 26 -48 Q44 -30 34 0Z', f || C.paper2), 'cm-warm') + rect(-11, -63, 22, 4, C.wood, 2) + rect(-20, -34, 40, 2.4, C.paper3) + rect(-24, -20, 48, 2.4, C.paper3) + `</g>`;
  const jar = (x, y, s, f) => `<g transform="translate(${x} ${y}) scale(${s})">` + groundShadow(0, 1, 30, 5) + both(path('M-16 -70 L16 -70 L14 -58 Q36 -40 22 0 L-22 0 Q-36 -40 -14 -58Z', f || C.clay2), 'cm-warm') + `</g>`;
  function lamp(x, y, H, k, dir) {
    dir = dir || 1; const hx = x + 58 * k * dir, hy = y - H - 10 * k;
    return poly(`${r1(hx - 5 * k)},${r1(hy)} ${r1(hx + 5 * k)},${r1(hy)} ${r1(hx + 90 * k)},${r1(y + 30 * k)} ${r1(hx - 90 * k)},${r1(y + 30 * k)}`, 'url(#cm-cone)', 'filter="url(#cm-blur-s)" opacity=".85"')
      + rect(x - 3 * k, y - H, 6 * k, H, C.ink) + path(`M${r1(x - 3 * k)} ${r1(y - H)} Q${r1(x - 3 * k)} ${r1(y - H - 20 * k)} ${r1(x + 22 * k * dir)} ${r1(y - H - 20 * k)} L${r1(hx + 8 * k * dir)} ${r1(y - H - 16 * k)} L${r1(hx + 8 * k * dir)} ${r1(y - H - 10 * k)} L${r1(x + 22 * k * dir)} ${r1(y - H - 14 * k)} Q${r1(x + 3 * k)} ${r1(y - H - 14 * k)} ${r1(x + 3 * k)} ${r1(y - H)}Z`, C.ink) + ell(hx, hy + 1, 11 * k, 3.6 * k, '#F7F1D6');
  }
  // 速度線（一端尖的色塊，不用描邊）
  function zoom(cx, cy, r0, r1x, n, f, seed) { const rnd = seeded(seed || 5); let d = ''; for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + rnd() * .1, w = .012 + rnd() * .022, R0 = r0 * (1 + rnd() * .4), R1 = r1x; d += `M${r1(cx + Math.cos(a) * R0)} ${r1(cy + Math.sin(a) * R0)}L${r1(cx + Math.cos(a - w) * R1)} ${r1(cy + Math.sin(a - w) * R1)}L${r1(cx + Math.cos(a + w) * R1)} ${r1(cy + Math.sin(a + w) * R1)}Z`; } return path(d, f); }
  const puff = (x, y, r, f) => circ(x, y, r, f || C.cream) + circ(x + r * .9, y - r * .4, r * .7, f || C.cream) + circ(x - r * .8, y - r * .2, r * .6, f || C.cream);

  // 石碑：黑色玄武岩（上方浮雕：太陽神沙瑪什坐著、漢摩拉比站在他面前；下方滿滿的字）。x,y＝底部中心，H 高，W 底寬
  function stele(x, y, H, W, o) {
    o = o || {}; const top = y - H, w2 = W * .86, reliefH = H * .29;
    let s = groundShadow(x, y + 4, W * .85, 14);
    s += both(path(`M${r1(x - W / 2)} ${y} L${r1(x - w2 / 2)} ${r1(top + w2 * .5)} Q${r1(x - w2 / 2)} ${r1(top)} ${x} ${r1(top)} Q${r1(x + w2 / 2)} ${r1(top)} ${r1(x + w2 / 2)} ${r1(top + w2 * .5)} L${r1(x + W / 2)} ${y}Z`, C.basalt));
    const u = w2 / 100, rx = x - w2 / 2, ry = top + H * .035;
    // 浮雕底（稍亮）
    s += path(`M${r1(rx + 5 * u)} ${r1(ry + reliefH)} L${r1(rx + 5 * u)} ${r1(ry + 36 * u)} Q${r1(rx + 7 * u)} ${r1(ry + 2 * u)} ${r1(x)} ${r1(ry)} Q${r1(rx + 93 * u)} ${r1(ry + 2 * u)} ${r1(rx + 95 * u)} ${r1(ry + 36 * u)} L${r1(rx + 95 * u)} ${r1(ry + reliefH)}Z`, C.basalt2);
    const R = C.basalt3, b = ry + reliefH;
    // 右：坐著的太陽神（肩上有火焰，腳踩山形台）
    const gx = rx + 67 * u;
    s += poly(`${r1(gx - 4 * u)},${r1(b)} ${r1(gx + 24 * u)},${r1(b)} ${r1(gx + 24 * u)},${r1(b - 28 * u)} ${r1(gx - 4 * u)},${r1(b - 28 * u)}`, C.basalt);
    s += path(`M${r1(gx - 12 * u)} ${r1(b - 44 * u)} L${r1(gx + 12 * u)} ${r1(b - 44 * u)} L${r1(gx + 18 * u)} ${r1(b)} L${r1(gx - 22 * u)} ${r1(b)}Z`, R);
    s += circ(gx, b - 52 * u, 7.5 * u, R) + path(`M${r1(gx - 8 * u)} ${r1(b - 48 * u)} L${r1(gx)} ${r1(b - 47 * u)} L${r1(gx - 5 * u)} ${r1(b - 34 * u)} L${r1(gx - 10 * u)} ${r1(b - 36 * u)}Z`, C.basalt);
    s += poly(`${r1(gx - 9 * u)},${r1(b - 56 * u)} ${r1(gx + 9 * u)},${r1(b - 56 * u)} ${r1(gx + 7 * u)},${r1(b - 68 * u)} ${r1(gx - 7 * u)},${r1(b - 68 * u)}`, C.basalt);
    [[-14, -48, -24, -58], [14, -48, 24, -60], [18, -38, 30, -46]].forEach(f => { s += poly(`${r1(gx + f[0] * u)},${r1(b + f[1] * u)} ${r1(gx + f[0] * u + 3 * u)},${r1(b + f[1] * u + 5 * u)} ${r1(gx + f[2] * u)},${r1(b + f[3] * u)}`, R); });
    s += cap(gx - 8 * u, b - 40 * u, gx - 22 * u, b - 34 * u, 3.6 * u, R) + circ(gx - 26 * u, b - 34 * u, 3.4 * u, C.basalt);
    // 左：站著的漢摩拉比
    const kx = rx + 28 * u;
    s += path(`M${r1(kx - 8 * u)} ${r1(b - 46 * u)} L${r1(kx + 8 * u)} ${r1(b - 46 * u)} L${r1(kx + 12 * u)} ${r1(b)} L${r1(kx - 12 * u)} ${r1(b)}Z`, R);
    s += circ(kx, b - 54 * u, 7 * u, R) + poly(`${r1(kx - 2 * u)},${r1(b - 50 * u)} ${r1(kx + 7 * u)},${r1(b - 50 * u)} ${r1(kx + 5 * u)},${r1(b - 36 * u)} ${r1(kx - 1 * u)},${r1(b - 36 * u)}`, C.basalt);
    s += path(`M${r1(kx - 7 * u)} ${r1(b - 56 * u)} Q${r1(kx)} ${r1(b - 68 * u)} ${r1(kx + 7 * u)} ${r1(b - 56 * u)}Z`, C.basalt);
    s += cap(kx + 6 * u, b - 42 * u, kx + 14 * u, b - 52 * u, 3.4 * u, R);
    // 下面的字
    s += wedges(x - w2 / 2 + 7 * u, b + 7 * u, w2 - 14 * u, y - b - 14 * u, { seed: 11, s: o.ws || Math.max(3.4, w2 / 22), f: 'rgba(205,200,180,.5)', rule: 1 });
    return s;
  }
  A.stele = stele;

  // ---------- 場景（w,h＝面板大小；回傳 {bg, fg}：角色畫在兩者之間） ----------
  const SCENES = {
    // 封面：搖搖車衝出時間漩渦，底下是古城
    cover(w, h) {
      let s = rect(0, 0, w, h, C.g9);
      s += circ(w * .55, h * .46, w * .62, C.g8) + circ(w * .55, h * .46, w * .44, C.g7) + circ(w * .55, h * .46, w * .28, C.g6);
      s += zoom(w * .55, h * .46, w * .2, w * .95, 44, 'rgba(247,243,230,.14)', 9);
      s += circ(w * .55, h * .46, w * .3, 'url(#cm-glow)');
      // 底部古城
      s += path(`M0 ${h * .76} L${w * .2} ${h * .73} L${w} ${h * .69} L${w} ${h} L0 ${h}Z`, C.brick2);
      s += ziggurat(w * .76, h * .72, w * .46, h * .17, C.brick3, C.brick, C.brick2);
      for (let i = 0; i < 16; i++) s += rect(i * w / 16, h * .775 - i * 2.6, w / 16 - 10, 20, C.brick);
      s += rect(0, h * .79 - 8, w, h * .25, C.brick);
      s += palm(w * .12, h * .86, h * .17, C.g7, C.g9) + palm(w * .92, h * .9, h * .2, C.g7, C.g9);
      s += path(`M0 ${h * .9} Q${w * .4} ${h * .84} ${w} ${h * .93} L${w} ${h} L0 ${h}Z`, C.g5) + path(`M0 ${h * .94} Q${w * .4} ${h * .89} ${w} ${h * .97} L${w} ${h} L0 ${h}Z`, C.g3, 'opacity=".5"');
      return { bg: s, fg: car(w * .55, h * .56, 1.7, { rot: -12, noShadow: true, lights: true }) };
    },
    kitchen(w, h) {
      let s = rect(0, 0, w, h, C.paper2);
      for (let x = 300; x < w; x += 42) for (let y = h - 150; y < h - 48; y += 34) s += rect(x, y, 39, 31, C.paper3, 2, 'opacity=".5"');
      s += rect(0, h - 44, w, 44, C.g3) + rect(0, h - 48, w, 6, C.g5);
      // 窗（鐵窗）
      s += rect(w - 210, 22, 170, 112, C.g2) + circ(w - 80, 60, 26, C.cream);
      for (let i = 0; i < 6; i++) s += rect(w - 208 + i * 33, 22, 3, 112, C.ink);
      s += rect(w - 210, 76, 170, 3, C.ink) + rect(w - 218, 16, 186, 7, C.g9) + rect(w - 218, 134, 186, 7, C.g9);
      // 流理台
      s += both(rect(w - 240, h - 118, 240, 74, C.g7)) + rect(w - 250, h - 124, 250, 9, C.ink);
      // 冰箱
      s += both(rect(24, 12, 158, h - 44, C.g5), 'cm-shade');
      s += rect(38, 26, 130, h - 70, C.cream) + rect(38, 26, 130, h - 70, 'url(#cm-fridge)');
      [108, 180].forEach(y => { s += rect(38, y, 130, 6, C.paper3); });
      s += jar(70, 106, .55, C.g3) + rect(112, 76, 38, 30, C.paper2, 3) + rect(112, 80, 38, 6, C.red);
      s += ell(100, 178, 30, 6, C.paper3) + txt(100, 170, '？', 26, C.red);   // 布丁該在的空位
      s += jar(136, 244 > h - 40 ? h - 40 : 244, .5, C.gold);
      s += poly(`182,12 268,-8 268,${h + 2} 182,${h - 32}`, C.g7) + rect(246, 90, 8, 80, C.ink, 4);
      s += poly(`168,26 ${w * .62},${h - 30} ${w * .3},${h} 40,${h}`, 'url(#cm-cone)', 'opacity=".35"');
      return { bg: s };
    },
    // 傍晚的台灣街道：斜線道路＋路燈＋招牌
    street(w, h) {
      let s = rect(0, 0, w, h, C.brick3);
      s += circ(w * .78, h * .14, 60, C.cream);
      // 遠方房子
      [[w * .5, 110, 150], [w * .66, 90, 190], [w * .82, 120, 140]].forEach(([x, bw, bh], i) => { s += rect(x, h * .36 - bh, bw, bh + 40, i % 2 ? C.g3 : C.g2); for (let yy = h * .36 - bh + 14; yy < h * .36 - 8; yy += 30) for (let xx = x + 12; xx < x + bw - 16; xx += 30) s += rect(xx, yy, 16, 18, C.cream, 0, 'opacity=".7"'); });
      // 地面
      s += rect(0, h * .36, w, h, C.paper3);
      // 道路（左下→右上）
      s += poly(`${w * .16},${h} ${w},${h} ${w},${h * .5} ${w * .62},${h * .36}`, C.road);
      for (let i = 0; i < 5; i++) { const t0 = i * .2 + .02, t1 = t0 + .1, X = t => w * .58 + (1 - t) * w * .08, Y = t => h - (h - h * .38) * t, W = t => 16 * (1 - t) + 3; s += poly(`${r1(X(t0) - W(t0))},${r1(Y(t0))} ${r1(X(t0) + W(t0))},${r1(Y(t0))} ${r1(X(t1) + W(t1))},${r1(Y(t1))} ${r1(X(t1) - W(t1))},${r1(Y(t1))}`, C.cream, 'opacity=".8"'); }
      // 路燈（右側，近大遠小）
      [[w * .98, h * .82, 230, 1.15, -1], [w * .88, h * .58, 118, .62, -1], [w * .8, h * .46, 70, .4, -1]].forEach(l => { s += lamp(l[0], l[1], l[2], l[3], l[4]); });
      // 左邊：阿公的柑仔店
      s += both(rect(0, h * .16, w * .5, h * .46, C.g7));
      s += rect(0, h * .16 + 4, w * .5, 62, C.g9) + txt(w * .25, h * .16 + 48, '阿公柑仔店', 34, C.cream);
      s += rect(0, h * .35, w * .46, h * .27, C.ink) + rect(12, h * .375, w * .44 - 16, h * .21, C.cream);
      [[30, 'g5'], [84, 'gold'], [136, 'red'], [186, 'g3']].forEach(([x, c], i) => { s += rect(x, h * .375 + 20, 42, 34 + (i % 2) * 10, C[c] || C.g5, 3); s += rect(x + 2, h * .375 + 90, 40, 26, C[['g3', 'clay3', 'g5', 'gold'][i]], 3); });
      s += rect(12, h * .375 + 62, w * .44 - 16, 5, C.g7) + rect(12, h * .375 + 122, w * .44 - 16, 5, C.g7);
      // 遮雨棚（綠白條）
      for (let i = 0; i < 9; i++) s += poly(`${i * w * .056},${h * .315} ${(i + 1) * w * .056},${h * .315} ${(i + 1) * w * .062 + 4},${h * .375} ${i * w * .062 + 4},${h * .375}`, i % 2 ? C.cream : C.g5);
      // 機車
      s += scooter(w * .6, h * .54, .55);
      return { bg: s };
    },
    // 投幣孔＋數字盤（大特寫）
    coin(w, h) {
      let s = rect(0, 0, w, h, C.g7);
      s += zoom(w * .5, h * .42, 60, h * .8, 30, 'rgba(247,243,230,.16)', 3);
      s += both(rect(w * .16, 40, w * .68, 130, C.ink, 10)) + rect(w * .5 - 34, 78, 68, 10, '#000', 5) + rect(w * .22, 118, w * .56, 34, C.paper) + txt(w * .5, 143, '10元', 24, C.ink);
      s += circ(w * .5, h * .46, w * .42, C.cream) + circ(w * .5, h * .46, w * .35, C.ink);
      s += txt(w * .5, h * .46 - 30, '2026', 20, 'rgba(247,243,230,.35)') + txt(w * .5, h * .46 - 6, '西元前', 20, C.g3) + txt(w * .5, h * .46 + 34, '1750', 42, C.cream);
      s += circ(w * .5, h * .46, w * .47, 'url(#cm-glow)', 'opacity=".5"');
      return { bg: s };
    },
    // 大跨頁：巴比倫城與幼發拉底河
    babylon(w, h) {
      let s = rect(0, 0, w, h, '#CBDAC2');
      s += circ(w * .26, h * .15, 200, 'url(#cm-sun)') + circ(w * .26, h * .15, 62, '#FFF8DC');
      // 遠方沙丘
      s += path(`M0 ${h * .36} Q${w * .3} ${h * .3} ${w * .55} ${h * .35} T${w} ${h * .31} L${w} ${h * .5} L0 ${h * .5}Z`, C.brick);
      // 神廟高塔
      s += ziggurat(w * .68, h * .42, w * .6, h * .25, C.brick3, C.brick, C.clay);
      // 城牆（斜線，近大遠小）
      s += poly(`0,${h * .47} ${w},${h * .39} ${w},${h * .5} 0,${h * .6}`, C.brick2);
      for (let i = 0; i < 18; i++) { const x = i * w / 18, y = h * .47 - i * (h * .08 / 18); s += rect(x, y - 18, w / 18 - 14, 22, C.brick2); }
      s += poly(`0,${h * .47} ${w},${h * .39} ${w},${h * .425} 0,${h * .508}`, C.brick3, 'opacity=".5"');
      // 城門
      const gx = w * .3, gy = h * .56; s += rect(gx - 56, gy - 118, 112, 130, C.clay2) + rect(gx - 70, gy - 134, 26, 148, C.brick2) + rect(gx + 44, gy - 134, 26, 148, C.brick2) + path(`M${gx - 34} ${gy + 10} L${gx - 34} ${gy - 60} Q${gx} ${gy - 106} ${gx + 34} ${gy - 60} L${gx + 34} ${gy + 10}Z`, C.ink);
      // 田地
      s += poly(`0,${h * .59} ${w},${h * .49} ${w},${h * .62} 0,${h * .72}`, C.g3);
      for (let i = 0; i < 9; i++) { const x = i * w / 9; s += poly(`${x},${h * .6 - i * h * .011} ${x + w * .08},${h * .6 - (i + 1) * h * .0108} ${x + w * .1},${h * .68 - (i + 1) * h * .0108} ${x + w * .02},${h * .69 - i * h * .011}`, i % 2 ? C.g5 : C.g2, 'opacity=".75"'); }
      [[w * .08, h * .62, 170], [w * .5, h * .57, 130], [w * .58, h * .56, 110], [w * .9, h * .54, 150]].forEach(p => { s += palm(p[0], p[1], p[2], C.g7, C.g9); });
      // 河（斜向大河）
      s += path(`M0 ${h * .67} L${w} ${h * .55} L${w} ${h * .74} Q${w * .55} ${h * .77} 0 ${h * .85}Z`, C.g5);
      for (let i = 0; i < 9; i++) { const x = (i * 97 + 40) % w, y = h * (.71 + (i % 3) * .03) - x * .09; s += rect(x, y, 60 + (i % 3) * 30, 5, C.g2, 3, 'opacity=".7"'); }
      // 蘆葦船
      s += `<g transform="translate(${w * .72} ${h * .63}) scale(1.25) rotate(-5)">` + both(path('M-70 -6 Q-90 -30 -96 -44 Q-70 -14 -40 -10 L44 -10 Q70 -14 92 -44 Q88 -24 66 -6 Q0 12 -70 -6Z', C.gold), 'cm-warm') + rect(-3, -84, 5, 76, C.wood) + `</g>`;
      s += actor({ c: 'farmer', x: w * .71, y: h * .622, s: .55, pose: 'stand', noShadow: true, flip: 1 });
      // 前景河岸
      s += path(`M0 ${h * .82} Q${w * .5} ${h * .74} ${w} ${h * .73} L${w} ${h} L0 ${h}Z`, C.sand);
      s += path(`M0 ${h * .87} Q${w * .5} ${h * .83} ${w} ${h * .84} L${w} ${h} L0 ${h}Z`, C.brick3);
      s += reedTuft(w * .05, h * .83, 8, C.g6) + reedTuft(w * .96, h * .76, 8, C.g7);
      s += puff(w * .22, h * .84, 22) + puff(w * .13, h * .86, 16);
      s += palm(w * .97, h * 1.02, 300, C.g9, C.ink);
      s += car(w * .25, h * .925, 1.1, { rot: -7 });
      return { bg: s };
    },
    // 泥巴工坊的院子
    yard(w, h) {
      let s = brickWall(0, 0, w, h, C.brick3, C.brick, 4);
      s += both(rect(w * .62, 40, 160, h * .62, C.clay2, 0));
      s += path(`M${w * .62 + 30} ${h * .62 + 40} L${w * .62 + 30} 110 Q${w * .62 + 80} 56 ${w * .62 + 130} 110 L${w * .62 + 130} ${h * .62 + 40}Z`, C.ink);
      // 蘆葦棚
      s += poly(`0,0 ${w * .6},0 ${w * .52},72 0,88`, C.gold); for (let i = 0; i < 14; i++) s += poly(`${i * 34},0 ${i * 34 + 6},0 ${i * 32 + 4},${84 - i * 1.1} ${i * 32},${84 - i * 1.1}`, C.clay, 'opacity=".55"');
      s += rect(0, h * .72, w, h * .28, C.sand) + rect(0, h * .72, w, 6, C.brick2);
      // 陶罐、籃子
      s += jar(w * .9, h * .8, 1.05) + jar(w * .98, h * .84, .85, C.clay);
      // 晾乾的泥板
      s += both(rect(w * .3, h * .62, 170, 16, C.wood, 3));
      [0, 1, 2, 3].forEach(i => { s += tablet(w * .3 + 26 + i * 40, h * .62 - 26, 32, 44, { seed: i + 2, ws: 3.6 }); });
      // 坐墊一樣的濕泥板蓆子
      s += path(`M${w * .04} ${h * .92} L${w * .5} ${h * .92} L${w * .46} ${h * .8} L${w * .08} ${h * .8}Z`, C.gold);
      [0, 1, 2, 3, 4].forEach(i => { s += tablet(w * .1 + i * 62, h * .86, 54, 42, { seed: i + 11, ws: 4, f: i === 2 ? C.clay3 : C.clay }); });
      return { bg: s };
    },
    // 特寫：屁股印泥板
    print(w, h) {
      const bg = rect(0, 0, w, h, C.red) + zoom(w * .5, h * .62, 90, h, 26, 'rgba(255,255,255,.18)', 8);
      const tx = w * .5, ty = h * .68, W = w * .84, H = h * .42;
      let s = both(rect(tx - W / 2, ty - H / 2, W, H, C.clay3, 22), 'cm-warm');
      s += wedges(tx - W / 2 + 18, ty - H / 2 + 16, W - 36, H - 32, { seed: 21, s: 11, f: C.clay2, rule: 1 });
      // 屁股印（兩個圓凹）
      s += ell(tx - 46, ty + 4, 56, 62, C.clay2) + ell(tx + 46, ty + 4, 56, 62, C.clay2) + ell(tx - 42, ty + 10, 46, 52, C.clay) + ell(tx + 42, ty + 10, 46, 52, C.clay) + rect(tx - 4, ty - 44, 8, 96, C.clay2, 4);
      return { bg, fg: s };
    },
    // 特寫：蘆葦筆壓在泥板上
    stylus(w, h) {
      let s = rect(0, 0, w, h, C.g9);
      const tx = w * .5, ty = h * .68, W = w * .92, H = h * .54;
      s += both(rect(tx - W / 2, ty - H / 2, W, H, C.clay3, 24), 'cm-warm');
      s += wedges(tx - W / 2 + 26, ty - H / 2 + 24, W * .62, H * .28, { seed: 33, s: 19, f: C.clay2, rule: 1 });
      // 一個放大的楔子（剛壓好）
      const mx = tx + W * .22, my = ty + H * .18, k = 2.4;
      s += `<g transform="translate(${mx} ${my}) scale(${k})">` + path('M-14 -12 L14 -12 L3 2 L2 22 L-2 22 L-3 2Z', C.clay2) + `</g>`;
      // 蘆葦筆＋手
      const bx = mx + 8, by = my - 40;
      s += poly(`${bx - 7},${by + 6} ${bx + 7},${by + 8} ${bx + 104},${by - 186} ${bx + 90},${by - 192}`, C.gold) + poly(`${bx - 7},${by + 6} ${bx + 7},${by + 8} ${bx},${by + 26}`, C.wood);
      for (let i = 1; i < 4; i++) s += rect(bx + i * 24 - 4, by - i * 47 - 2, 16, 3, C.wood, 0, `transform="rotate(26 ${bx + i * 24} ${by - i * 47})"`);
      s += cap(bx + 40, by - 86, bx + 160, by - 180, 40, C.skinB) + circ(bx + 36, by - 82, 27, C.skinB) + cap(bx + 26, by - 68, bx + 12, by - 50, 16, C.skinB);
      return { bg: s };
    },
    // 穀倉與記帳
    granary(w, h) {
      let s = brickWall(0, 0, w, h * .66, C.brick3, C.brick, 7);
      // 圓頂穀倉
      [[w * .2, h * .46, 150, 300], [w * .5, h * .44, 170, 340], [w * .82, h * .46, 150, 300]].forEach(([x, y, r, H]) => {
        s += both(path(`M${x - r} ${y} L${x - r} ${y - H * .35} Q${x - r} ${y - H} ${x} ${y - H} Q${x + r} ${y - H} ${x + r} ${y - H * .35} L${x + r} ${y}Z`, C.brick), 'cm-warm');
        s += path(`M${x - 22} ${y} L${x - 22} ${y - 58} Q${x} ${y - 88} ${x + 22} ${y - 58} L${x + 22} ${y}Z`, C.ink);
      });
      s += rect(0, h * .46, w, 12, C.brick2);
      s += rect(0, h * .47, w, h * .53, C.sand);
      s += path(`M0 ${h * .78} Q${w * .5} ${h * .72} ${w} ${h * .78} L${w} ${h} L0 ${h}Z`, C.brick3);
      // 麻袋堆
      [[w * .08, h * .62, 1.15], [w * .19, h * .635, 1.25], [w * .13, h * .57, 1.05], [w * .93, h * .6, 1.2], [w * .84, h * .615, 1.1]].forEach(p => { s += sack(p[0], p[1], p[2]); });
      // 記帳矮桌
      s += both(rect(w * .34, h * .59, 150, 26, C.wood, 4));
      s += tablet(w * .34 + 34, h * .59 - 18, 44, 34, { seed: 8, ws: 4 }) + tablet(w * .34 + 94, h * .59 - 18, 44, 34, { seed: 9, ws: 4 });
      return { bg: s };
    },
    // 石碑（細長格；低角度）
    steleHall(w, h) {
      let s = rect(0, 0, w, h, C.g5);
      s += poly(`0,0 ${w},0 ${w},${h * .42} 0,${h * .58}`, C.g3);
      s += circ(w * .64, h * .14, 150, 'url(#cm-sun)');
      s += rect(0, h * .84, w, h * .16, C.brick3) + rect(0, h * .84, w, 5, C.brick2);
      s += stele(w * .66, h * .9, 654, 190, { ws: 5.4 });
      return { bg: s };
    },
    // 法條（黑石頭底）
    lawsBg(w, h) {
      let s = rect(0, 0, w, h, C.basalt);
      s += wedges(14, 14, w - 28, h - 28, { seed: 41, s: 15, f: 'rgba(205,200,180,.13)', rule: 1 });
      return { bg: s };
    },
    // 國王來了
    court(w, h) {
      let s = rect(0, 0, w, h, C.brick3);
      s += circ(w * .78, h * .2, 150, 'url(#cm-sun)');
      s += brickWall(0, h * .1, w, h * .62, C.brick, C.brick2, 13);
      for (let i = 0; i < 18; i++) s += rect(i * w / 18, h * .1 - 16, w / 18 - 14, 20, C.brick);
      [w * .08, w * .4, w * .72].forEach(x => { s += rect(x, h * .1, 40, h * .62, C.brick2) + rect(x - 8, h * .1, 56, 12, C.clay2); });
      s += rect(0, h * .72, w, h * .28, C.sand) + rect(0, h * .72, w, 5, C.brick2);
      s += stele(w * .92, h * .96, h * .84, 100, { ws: 4 });
      return { bg: s };
    },
    // 收尾：傍晚河邊
    dusk(w, h) {
      let s = rect(0, 0, w, h, C.g3);
      s += circ(w * .74, h * .3, 70, C.cream) + circ(w * .74, h * .3, 180, 'url(#cm-sun)');
      s += path(`M0 ${h * .36} Q${w * .3} ${h * .3} ${w * .6} ${h * .34} T${w} ${h * .3} L${w} ${h * .5} L0 ${h * .5}Z`, C.g5);
      s += ziggurat(w * .24, h * .44, w * .36, h * .2, C.brick3, C.brick, C.brick2);
      s += rect(0, h * .43, w, 40, C.brick2);
      for (let i = 0; i < 18; i++) s += rect(i * w / 18, h * .43 - 12, w / 18 - 14, 16, C.brick2);
      s += palm(w * .6, h * .5, 180, C.g7, C.g9) + palm(w * .68, h * .51, 130, C.g7, C.g9);
      s += rect(0, h * .5, w, h * .14, C.g5);
      for (let i = 0; i < 10; i++) s += rect((i * 83 + 20) % w, h * (.52 + (i % 4) * .025), 50 + (i % 3) * 30, 5, C.g2, 3, 'opacity=".7"');
      s += rect((w * .74) - 44, h * .53, 88, 6, C.cream, 3, 'opacity=".9"') + rect((w * .74) - 28, h * .56, 56, 5, C.cream, 3, 'opacity=".8"');
      s += path(`M0 ${h * .64} Q${w * .5} ${h * .6} ${w} ${h * .65} L${w} ${h} L0 ${h}Z`, C.sand);
      s += reedTuft(w * .03, h * .66, 8, C.g7) + reedTuft(w * .98, h * .67, 8, C.g7);
      s += car(w * .76, h * .86, 1.25, { lights: true });
      return { bg: s };
    }
  };
  function ziggurat(x, y, W, H, f1, f2, f3) {
    let s = ''; const n = 4, sh2 = H / n;
    for (let i = 0; i < n; i++) { const w = W * (1 - i * .22), yy = y - i * sh2, xx = x - w / 2; s += both(rect(xx, yy - sh2, w, sh2 + 1, i % 2 ? f2 : f1), 'cm-warm'); s += rect(xx, yy - sh2, w, 5, f3, 0, 'opacity=".7"'); }
    s += poly(`${x - W * .1},${y} ${x + W * .1},${y} ${x + W * .05},${y - H + sh2 * .1} ${x - W * .05},${y - H + sh2 * .1}`, f3);
    for (let i = 1; i < 12; i++) { const t = i / 12, yy = y - t * (H - sh2 * .1), hw = W * (.1 - .05 * t); s += rect(x - hw, yy, hw * 2, 2.4, C.cream, 0, 'opacity=".45"'); }
    return s;
  }
  function scooter(x, y, s) {
    return `<g transform="translate(${x} ${y}) scale(${s})">` + groundShadow(0, 2, 110, 10) + circ(-70, -26, 26, C.ink) + circ(70, -26, 26, C.ink) + circ(-70, -26, 9, C.paper3) + circ(70, -26, 9, C.paper3)
      + both(path('M-98 -30 L-96 -64 Q-90 -84 -40 -82 L10 -82 L18 -46 L50 -46 L66 -118 L84 -122 L92 -80 Q98 -40 88 -30Z', C.g5)) + rect(-90, -94, 70, 16, C.ink, 6) + cap(64, -120, 46, -132, 8, C.ink) + circ(-98, -66, 10, 'url(#cm-redglow)') + circ(-98, -66, 4, C.red) + `</g>`;
  }
  A.SCENES = SCENES;

  // 面板：回傳整張 <svg>。p＝{scene, sceneOpt, actors:[…], props:[…]}；actors 依陣列順序疊
  A.panelSvg = function (p, w, h) {
    const sc = (SCENES[p.scene] || SCENES.lawsBg)(w, h, p.sceneOpt || {});
    let s = sc.bg || '';
    (p.back || []).forEach(x => { s += prop(x); });
    (p.actors || []).forEach(a => { s += actor(a); });
    (p.props || []).forEach(x => { s += prop(x); });
    s += sc.fg || '';
    return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${s}</svg>`;
  };
  // 小道具（面板內用座標擺）
  function prop(x) {
    if (x.k === 'tablet') return tablet(x.x, x.y, x.w || 60, x.h || 76, { seed: x.seed || 3, rot: x.rot || 0, blank: x.blank, f: x.f, ws: x.ws });
    if (x.k === 'sack') return sack(x.x, x.y, x.s || 1);
    if (x.k === 'car') return car(x.x, x.y, x.s || 1, x);
    if (x.k === 'stele') return stele(x.x, x.y, x.H, x.W);
    if (x.k === 'puff') return puff(x.x, x.y, x.r || 20, x.f);
    if (x.k === 'zoom') return zoom(x.x, x.y, x.r0, x.r1, x.n || 24, x.f || 'rgba(247,243,230,.3)', x.seed);
    if (x.k === 'coin') return `<g transform="translate(${x.x} ${x.y}) rotate(${x.rot || 0})">` + circ(0, 0, x.r || 26, C.gold) + circ(0, 0, (x.r || 26) * .74, '#DDBB5F') + txt(0, (x.r || 26) * .36, '10', (x.r || 26) * .95, C.wood) + `</g>`;
    if (x.k === 'arrowDown') return poly(`${x.x - 6},${x.y} ${x.x + 6},${x.y} ${x.x + 6},${x.y + 30} ${x.x + 14},${x.y + 30} ${x.x},${x.y + 46} ${x.x - 14},${x.y + 30} ${x.x - 6},${x.y + 30}`, x.f || C.cream);
    if (x.k === 'printTablet') return `<g transform="translate(${x.x} ${x.y}) rotate(${x.rot || 0})">` + both(rect(-46, -32, 92, 64, C.clay3, 9), 'cm-warm') + ell(-17, 2, 18, 20, C.clay2) + ell(17, 2, 18, 20, C.clay2) + ell(-15, 4, 14, 16, C.clay) + ell(15, 4, 14, 16, C.clay) + `</g>`;
    if (x.k === 'ruleTablet') return `<g transform="translate(${x.x} ${x.y}) rotate(${x.rot || 0})">` + both(rect(-74, -46, 148, 92, C.clay3, 11), 'cm-warm') + txt(0, -14, '家規第一條', 19, C.wood) + txt(0, 14, '布丁不准', 19, C.ink) + txt(0, 36, '偷吃', 19, C.red) + `</g>`;
    return '';
  }

  // 法條卡的小圖示（SVG 字串，viewBox 0 0 120 90）。⛔ 不畫暴力：只畫眼睛、牙齒、天平、堤防
  const ICONS = {
    dike() { return rect(0, 0, 120, 90, C.g3) + rect(0, 54, 120, 36, C.brick2) + path('M0 34 Q30 24 60 34 T120 32 L120 58 L0 58Z', C.g5) + poly('44,58 60,34 76,58', C.sand) + path('M58 40 q16 12 34 36 q-26 -6 -46 0 q6 -18 12 -36Z', C.g5) + rect(84, 10, 26, 20, C.gold, 2) + cap(88, 70, 104, 70, 5, C.g9); },
    eye() {
      const eye = (x, y) => path(`M${x - 20} ${y} Q${x} ${y - 17} ${x + 20} ${y} Q${x} ${y + 17} ${x - 20} ${y}Z`, C.ink) + circ(x, y, 7.5, C.cream) + circ(x, y, 3.8, C.ink);
      const tooth = (x, y) => path(`M${x - 11} ${y - 12} Q${x - 5} ${y - 16} ${x} ${y - 12} Q${x + 5} ${y - 16} ${x + 11} ${y - 12} Q${x + 12} ${y} ${x + 8} ${y + 14} Q${x + 4} ${y + 16} ${x + 2} ${y + 6} L${x - 2} ${y + 6} Q${x - 4} ${y + 16} ${x - 8} ${y + 14} Q${x - 12} ${y} ${x - 11} ${y - 12}Z`, C.g7);
      const ar = y => poly(`48,${y - 2} 54,${y - 2} 54,${y - 7} 60,${y} 54,${y + 7} 54,${y + 2} 48,${y + 2}`, C.red) + poly(`72,${y - 2} 66,${y - 2} 66,${y - 7} 60,${y} 66,${y + 7} 66,${y + 2} 72,${y + 2}`, C.red);
      return eye(26, 24) + ar(24) + eye(94, 24) + tooth(26, 66) + ar(66) + tooth(94, 66);
    },
    scale() { return rect(0, 0, 120, 90, C.paper) + rect(58, 12, 5, 62, C.ink) + rect(40, 74, 41, 7, C.ink, 3) + poly('18,18 102,34 102,38 18,22', C.ink) + cap(22, 22, 22, 46, 2, C.ink) + cap(98, 38, 98, 62, 2, C.ink) + path('M6 46 L38 46 Q34 60 22 60 Q10 60 6 46Z', C.g7) + path('M82 62 L114 62 Q110 76 98 76 Q86 76 82 62Z', C.gold) + circ(22, 40, 5, C.red) + circ(98, 57, 4, C.g9); }
  };
  A.icon = name => `<svg viewBox="0 0 120 90" aria-hidden="true" focusable="false">${(ICONS[name] || ICONS.scale)()}</svg>`;
  A.ICONS = ICONS;

  // ---------- 一頁的版面（畫布 800×1060；每格 x,y,w,h） ----------
  A.PAGE = { w: 800, h: 1060 };
  A.LAYOUTS = {
    // 上寬＋左大右細
    trio: [{ x: 10, y: 10, w: 780, h: 340 }, { x: 10, y: 364, w: 524, h: 686 }, { x: 548, y: 364, w: 242, h: 686 }],
    // 滿版跨頁
    splash: [{ x: 10, y: 10, w: 780, h: 1040 }],
    // 上寬＋下兩小
    wide2: [{ x: 10, y: 10, w: 780, h: 470 }, { x: 10, y: 494, w: 302, h: 556 }, { x: 326, y: 494, w: 464, h: 556 }],
    // 左細高＋右高
    tall2: [{ x: 10, y: 10, w: 344, h: 1040 }, { x: 368, y: 10, w: 422, h: 1040 }],
    // 上矮寬＋下大
    strip: [{ x: 10, y: 10, w: 780, h: 400 }, { x: 10, y: 424, w: 780, h: 626 }]
  };

  // ---------- 地圖：兩河流域（用真實經緯度投影：等距圓柱；河道、海岸是簡化折線） ----------
  const GEO = {
    bounds: { lon: [33.5, 53], lat: [26.4, 39.3] },
    euphrates: [[38.8, 38.9], [38.2, 38.5], [37.03, 37.98], [36.02, 38.23], [35.33, 40.14], [34.37, 41.1], [34.13, 42.38], [33.43, 43.3], [32.48, 44.42], [32.03, 44.4], [31.32, 45.28], [31.04, 46.25], [31.0, 47.42]],
    tigris: [[38.1, 39.9], [37.91, 40.24], [37.2, 42.4], [36.34, 43.12], [35.5, 43.25], [34.6, 43.68], [34.2, 43.87], [33.31, 44.39], [32.5, 45.82], [31.84, 47.14], [31.0, 47.42]],
    shatt: [[31.0, 47.42], [30.5, 47.8], [29.95, 48.55]],
    gulf: [[29.95, 48.55], [30.1, 49.6], [29.3, 50.6], [27.8, 51.6], [27.0, 52.6], [26.3, 53.1], [25.2, 53.1], [25.2, 50.8], [25.9, 50.15], [27.0, 49.6], [28.0, 48.75], [29.05, 48.15], [29.5, 47.95]],
    med: [[36.15, 33.5], [36.7, 34.8], [36.75, 36.2], [36.25, 36.0], [35.5, 35.8], [34.45, 35.85], [33.3, 35.25], [32.3, 34.85], [31.3, 34.25], [30.5, 33.5]]
  };
  A.GEO = GEO;
  A.mapMeso = function (m) {
    const W = 760, H = 610, b = GEO.bounds, kLon = W / (b.lon[1] - b.lon[0]);
    const kLat = kLon * 1.17;   // 緯度 32 度附近，經度一度只有緯度一度的 0.85 倍長（1/cos32°≈1.18）
    const Y0 = b.lat[1], px = (lat, lon) => [r1((lon - b.lon[0]) * kLon), r1((Y0 - lat) * kLat)];
    const P = a => a.map(p => px(p[0], p[1]).join(',')).join(' ');
    const H2 = r1((b.lat[1] - b.lat[0]) * kLat);
    let s = rect(0, 0, W, H2, C.brick3);
    // 平原（兩河中間）
    const plain = GEO.euphrates.slice(3).concat(GEO.tigris.slice(1).reverse()).map(p => px(p[0], p[1]).join(',')).join(' ');
    s += poly(plain, C.g3, 'opacity=".75"');
    // 海
    s += poly(P(GEO.med.concat([[30.5, 33.5]])), C.g5);
    s += poly(P(GEO.gulf), C.g5);
    // 河（用填色膠囊串起來，維持無描邊）
    const riv = (a, w, f) => { let d = ''; for (let i = 0; i < a.length - 1; i++) { const p = px(a[i][0], a[i][1]), q = px(a[i + 1][0], a[i + 1][1]); d += cap(p[0], p[1], q[0], q[1], w, f); } return d; };
    s += riv(GEO.euphrates, 6, C.g7) + riv(GEO.tigris, 6, C.g9) + riv(GEO.shatt, 7, C.g7);
    const lab = (lat, lon, t, o) => { const p = px(lat, lon); return txt(p[0], p[1], t, (o && o.size) || 22, (o && o.f) || C.ink, o); };
    s += lab(35.6, 36.9, '幼發拉底河', { size: 24, f: C.g7, tr: `rotate(66 ${px(35.6, 36.9).join(' ')})`, a: 'middle' });
    s += lab(35.9, 45.1, '底格里斯河', { size: 24, f: C.g9, tr: `rotate(70 ${px(35.9, 45.1).join(' ')})`, a: 'middle' });
    s += lab(28.3, 50.2, '波斯灣', { size: 24, f: C.cream, tr: `rotate(42 ${px(28.3, 50.2).join(' ')})` }) + lab(34.9, 34.5, '地中海', { size: 22, f: C.cream, a: 'middle' });
    s += lab(31.5, 41.8, '今天的伊拉克一帶', { size: 21, f: C.wood });
    (m.cities || []).forEach(c => { const p = px(c.lat, c.lon), dir = c.side === 'l' ? -1 : 1; s += circ(p[0], p[1], c.main ? 15 : 7, c.main ? 'url(#cm-redglow)' : 'none') + circ(p[0], p[1], c.main ? 8 : 6, c.main ? C.red : C.ink) + txt(p[0] + dir * 14, p[1] + 8 + (c.dy || 0), c.n, c.main ? 26 : 22, C.ink, { a: dir < 0 ? 'end' : 'start' }); });
    s += `<g transform="translate(${W - 124} 26)">` + rect(0, 0, 108, 40, C.cream, 6, 'opacity=".9"') + txt(44, 27, '往東', 19, C.ink) + poly('74,14 90,14 90,8 104,20 90,32 90,26 74,26', C.red) + `</g>` + txt(W - 70, 84, '很遠很遠才是臺灣', 15, C.wood);
    return `<svg viewBox="0 0 ${W} ${H2}" role="img" aria-label="${m.alt}" style="display:block;width:100%;height:auto">${s}</svg>`;
  };

  // 時間軸：線性比例（真的按年代長度畫，小孩才看得到中間隔多久）。items：[{y:西元年(負＝西元前), t, s}]，side 交錯
  A.timeline = function (items) {
    const W = 760, H = 400, x0 = 40, x1 = W - 40, y = H / 2, min = items[0].y, max = items[items.length - 1].y, X = v => x0 + (v - min) / (max - min) * (x1 - x0);
    let s = rect(x0 - 20, y - 4, x1 - x0 + 40, 8, C.g9, 4);
    items.forEach((it, i) => {
      const x = X(it.y), up = it.side ? it.side === 'u' : i % 2 === 0, boxW = it.w || 190, bx = Math.max(4, Math.min(W - boxW - 4, x - boxW / 2)), L = it.len || 46, by = up ? y - L - 98 : y + L;
      s += rect(x - 1.5, up ? y - L : y, 3, L, C.g7) + circ(x, y, it.main ? 11 : 8, it.main ? C.red : C.g9);
      s += rect(bx, by, boxW, 98, C.cream, 10);
      s += txt(bx + 12, by + 28, it.when, 19, it.main ? C.red : C.g7, { a: 'start' });
      String(it.t).split('\n').forEach((ln, j) => { s += txt(bx + 12, by + 56 + j * 24, ln, 19, C.ink, { a: 'start', w: 700 }); });
    });
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${items.map(i => i.when + i.t.replace(/\n/g, '')).join('，')}" style="display:block;width:100%;height:auto">${s}</svg>`;
  };

  A.POSES = POSES; A.EXPR = EXPR; A.CAST = CAST;
  if (typeof module !== 'undefined' && module.exports) module.exports = A;
  root.ComicArt = A;
})(typeof window !== 'undefined' ? window : globalThis);
