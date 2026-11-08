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
    king: { name: '漢摩拉比', real: 1, skin: C.skinB, robe: C.g9, trim: C.gold, shoe: C.ink, r: 19, hat: hatKing, beard: 2, k: 1.26 },
    guard: { name: '隨從', skin: C.skinC, robe: C.paper3, trim: C.g7, shoe: C.ink, r: 18, hair: hairMan, beard: 1, k: 1.18 },
    farmer: { name: '農夫', skin: C.skinC, top: C.brick, skirt: C.g5, leg: C.skinC, sleeve: C.skinC, shoe: C.wood, r: 19, hair: hairMan, beard: 1, k: 1.14 },
    farmer2: { name: '農夫', skin: C.skinB, top: C.g2, skirt: C.clay2, leg: C.skinB, sleeve: C.skinB, shoe: C.wood, r: 19, hair: hairMan, k: 1.1 },
    scribe: { name: '書記官', skin: C.skinB, robe: C.cream, trim: C.g5, shoe: C.wood, r: 19, hair: hairMan, beard: 1, k: 1.14 }
  };

  // 一個角色（腳底在 x,y）。o：s 大小、flip 面向左、expr 表情、look 眼睛方向 -1～1、sweat、blush、hold 手上道具
  function actor(o) {
    const sp = CAST[o.c]; if (!sp) return '';
    const P = POSES[o.pose || 'stand'] || POSES.stand, s = (o.s || 1) * (sp.k || 1), look = o.look || 0, [hx, hy] = P.h, [nx, ny] = P.n, [tx, ty] = P.t, r = sp.r;
    // hair／hairBack／hat／acc 可以是函式（第 1 話的寫法）或 PARTS 裡的名字（data 檔新角色用）
    const part = (f, extra) => !f ? '' : typeof f === 'function' ? f(tx, ty, r, look) : [].concat(f).map(n => PARTS[n] ? at(tx, ty, r / 22, PARTS[n](sp, look)) : '').join('') + (extra || '');
    const hair = sp.hair ? () => part(sp.hair) : null;
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
    if (sp.hairBack) g += part(sp.hairBack);
    g += both(circ(tx, ty, r, sp.skin), 'cm-warm');
    if (sp.beard) g += beard(tx, ty + r * .35, r, sp.beard === 2);
    g += face(tx, ty, r, o.expr || 'calm', look);
    if (o.blush) g += blush(tx, ty, r);
    if (hair) g += hair();
    if (sp.hat) g += part(sp.hat);
    if (sp.over) g += sp.over(tx, ty, r, look);
    if (sp.acc) g += part(sp.acc);
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
    holds.forEach(k => { if (HOLDS[k]) g += at(P.aF[1][0], P.aF[1][1], 1, HOLDS[k](sp)); });
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
    // sceneOpt：year 年份數字（預設 1750）、era 前綴（預設「西元前」；西元後寫「西元」）
    coin(w, h, o) {
      o = o || {};
      let s = rect(0, 0, w, h, C.g7);
      s += zoom(w * .5, h * .42, 60, h * .8, 30, 'rgba(247,243,230,.16)', 3);
      s += both(rect(w * .16, 40, w * .68, 130, C.ink, 10)) + rect(w * .5 - 34, 78, 68, 10, '#000', 5) + rect(w * .22, 118, w * .56, 34, C.paper) + txt(w * .5, 143, '10元', 24, C.ink);
      s += circ(w * .5, h * .46, w * .42, C.cream) + circ(w * .5, h * .46, w * .35, C.ink);
      s += txt(w * .5, h * .46 - 30, '2026', 20, 'rgba(247,243,230,.35)') + txt(w * .5, h * .46 - 6, o.era || '西元前', 20, C.g3) + txt(w * .5, h * .46 + 34, String(o.year || '1750'), String(o.year || '1750').length > 4 ? 32 : 42, C.cream);
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
  // 小道具（面板內用座標擺）：PROPS[k](x)；第 1 話的道具在這裡，各時代共用的道具庫在下面 PROPS 區
  const PROPS = {
    tablet: x => tablet(x.x, x.y, x.w || 60, x.h || 76, { seed: x.seed || 3, rot: x.rot || 0, blank: x.blank, f: x.f, ws: x.ws }),
    sack: x => sack(x.x, x.y, x.s || 1),
    car: x => car(x.x, x.y, x.s || 1, x),
    stele: x => stele(x.x, x.y, x.H, x.W),
    puff: x => puff(x.x, x.y, x.r || 20, x.f),
    zoom: x => zoom(x.x, x.y, x.r0, x.r1, x.n || 24, x.f || 'rgba(247,243,230,.3)', x.seed),
    coin: x => `<g transform="translate(${x.x} ${x.y}) rotate(${x.rot || 0})">` + circ(0, 0, x.r || 26, C.gold) + circ(0, 0, (x.r || 26) * .74, '#DDBB5F') + txt(0, (x.r || 26) * .36, x.t || '10', (x.r || 26) * (x.t && x.t.length > 2 ? .6 : .95), C.wood) + `</g>`,
    arrowDown: x => poly(`${x.x - 6},${x.y} ${x.x + 6},${x.y} ${x.x + 6},${x.y + 30} ${x.x + 14},${x.y + 30} ${x.x},${x.y + 46} ${x.x - 14},${x.y + 30} ${x.x - 6},${x.y + 30}`, x.f || C.cream),
    printTablet: x => `<g transform="translate(${x.x} ${x.y}) rotate(${x.rot || 0})">` + both(rect(-46, -32, 92, 64, C.clay3, 9), 'cm-warm') + ell(-17, 2, 18, 20, C.clay2) + ell(17, 2, 18, 20, C.clay2) + ell(-15, 4, 14, 16, C.clay) + ell(15, 4, 14, 16, C.clay) + `</g>`,
    ruleTablet: x => `<g transform="translate(${x.x} ${x.y}) rotate(${x.rot || 0})">` + both(rect(-74, -46, 148, 92, C.clay3, 11), 'cm-warm') + txt(0, -14, '家規第一條', 19, C.wood) + txt(0, 14, '布丁不准', 19, C.ink) + txt(0, 36, '偷吃', 19, C.red) + `</g>`
  };
  const prop = x => (PROPS[x.k] ? PROPS[x.k](x) : '');

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

  // =====================================================================================================
  // 各時代共用圖庫（2026-11-08 起；第 2 話以後用）。全部只畫色塊、不描邊、同色系陰影，跟第 1 話同一套。
  //   PARTS 髮型／帽子／配件（頭心 0,0、半徑 22 的單位座標）、HOLDS 手上的小東西、PROPS 建築／自然／交通／器物、
  //   SCENES 通用場景 land／sea／room／flat／night／vortex、LAYOUTS 新版面、A.map 通用地圖（GEO 海岸／河流庫）。
  //   每一話要新東西：在自己的 data 檔呼叫 ComicArt.extend({...})，名字前面加這一話編號（例如 v2e3_temple），見 CONTRACT.md。
  // =====================================================================================================
  C.purple = '#6E2F5F'; C.blue = '#3E6E8E'; C.sky = '#CBDAC2'; C.night = '#18261E';
  const col = v => (v && C[v]) || v;
  const at = (x, y, k, inner) => `<g transform="translate(${r1(x)} ${r1(y)}) scale(${r1(k * 100) / 100})">${inner}</g>`;
  const place = (x, inner) => { const s = x.s || 1; return `<g transform="translate(${r1(x.x)} ${r1(x.y)}) scale(${x.flip ? -s : s} ${s})${x.rot ? ` rotate(${x.rot})` : ''}"${x.op ? ` opacity="${x.op}"` : ''}>${inner}</g>`; };
  const hc = sp => col(sp && sp.hairC) || C.ink, hat = (sp, d) => col(sp && sp.hatC) || d;

  // ---------- 髮型、帽子、配件（CAST 的 hair／hairBack／hat／acc 寫名字） ----------
  const PARTS = {
    kai: (sp, l) => hairKai(0, 0, 22, l), he: (sp, l) => hairHe(0, 0, 22, l), heBack: () => hairHeBack(0, 0, 22), iddin: () => hairIddin(0, 0, 22), man: () => hairMan(0, 0, 22), king: () => hatKing(0, 0, 22), glasses: (sp, l) => glasses(0, 0, 22, l),
    bald: () => '',
    short: sp => path('M-22 0 Q-24 -26 0 -26 Q24 -26 22 0 Q12 -11 0 -11 Q-12 -11 -22 0Z', hc(sp)),
    curly: sp => [[-17, -6, 8], [-20, -15, 8], [-11, -21, 9], [0, -24, 9], [11, -21, 9], [20, -15, 8], [17, -6, 8]].map(c => circ(c[0], c[1], c[2], hc(sp))).join(''),
    wig: sp => path('M-26 16 Q-30 -28 0 -28 Q30 -28 26 16 L17 16 L18 -6 Q0 -14 -18 -6 L-17 16Z', hc(sp)),   // 埃及式齊肩假髮
    bun: sp => PARTS.short(sp) + circ(0, -30, 10, hc(sp)) + rect(-13, -33, 26, 3, C.gold, 1),
    topknot: sp => PARTS.short(sp) + circ(0, -29, 8, hc(sp)) + rect(-6, -31, 12, 4, hat(sp, C.g9), 1),   // 束髮（古代中國男子）
    long: sp => rect(-27, -6, 11, 44, hc(sp), 5) + rect(16, -6, 11, 44, hc(sp), 5) + PARTS.short(sp),
    ponytailBack: sp => path('M12 -16 Q42 -8 34 30 Q26 6 8 -4Z', hc(sp)),
    twinBack: () => hairHeBack(0, 0, 22),
    mustache: sp => path('M-10 6 Q0 1 10 6 Q4 9 0 7 Q-4 9 -10 6Z', hc(sp)),
    earring: () => circ(-21, 9, 2.6, C.gold) + circ(21, 9, 2.6, C.gold),
    nemes: () => path('M-24 -6 Q-26 -30 0 -30 Q26 -30 24 -6 L30 30 L18 30 L16 -4 Q0 -12 -16 -4 L-18 30 L-30 30Z', C.gold) + rect(-21, -24, 42, 3, C.g9) + rect(-24, -17, 48, 3, C.g9) + [6, 15, 24].map(y => rect(-29, y, 11, 3, C.g9) + rect(18, y, 11, 3, C.g9)).join(''),   // 法老頭巾
    crownP: () => path('M-20 -10 L-21 -40 L-13 -32 L-7 -42 L0 -33 L7 -42 L13 -32 L21 -40 L20 -10Z', C.gold) + rect(-21, -15, 42, 6, '#B08D3A'),   // 城垛形王冠（波斯）
    softCap: sp => path('M-21 -4 Q-25 -30 -6 -42 Q16 -50 24 -28 Q24 -14 21 -4Z', hat(sp, C.clay3)) + rect(-22, -8, 44, 5, C.wood, 2),
    cone: sp => path('M-21 -4 Q-22 -26 -4 -40 Q10 -50 28 -46 Q16 -40 19 -26 Q22 -14 21 -4Z', hat(sp, C.red)),
    band: sp => rect(-23, -14, 46, 6, hat(sp, C.red), 3),
    turban: sp => ell(0, -16, 25, 12, hat(sp, C.cream)) + ell(0, -26, 21, 11, hat(sp, C.cream)) + rect(-18, -22, 36, 2.4, 'rgba(21,23,20,.12)') + circ(0, -19, 3.4, C.gold),
    wreath: () => [200, 220, 240, 260, 280, 300, 320, 340].map(a => { const t = a * Math.PI / 180; return ell(r1(Math.cos(t) * 22), r1(Math.sin(t) * 18 - 4), 6, 3, a % 40 ? C.g5 : C.g7, `transform="rotate(${a + 90} ${r1(Math.cos(t) * 22)} ${r1(Math.sin(t) * 18 - 4)})"`); }).join(''),
    helmet: sp => path('M-24 0 Q-26 -36 0 -36 Q26 -36 24 0 L19 0 L19 -12 Q0 -17 -19 -12 L-19 0Z', hat(sp, C.gold)) + path('M-16 -34 Q2 -64 26 -40 Q8 -46 -16 -34Z', C.red),
    crown: () => path('M-18 -14 L-20 -40 L-10 -29 L0 -44 L10 -29 L20 -40 L18 -14Z', C.gold) + circ(0, -21, 3, C.red),
    tophat: sp => rect(-15, -60, 30, 42, hat(sp, C.ink), 3) + rect(-26, -21, 52, 6, hat(sp, C.ink), 3) + rect(-15, -27, 30, 5, C.red),
    tricorn: sp => path('M-32 -12 Q-22 -20 -10 -38 Q0 -44 10 -38 Q22 -20 32 -12 Q0 -26 -32 -12Z', hat(sp, C.ink)),
    capCN: () => path('M-21 -8 Q-23 -32 0 -34 Q23 -32 21 -8Z', C.ink) + circ(0, -34, 9, C.ink) + rect(-46, -16, 26, 4, C.ink, 2) + rect(20, -16, 26, 4, C.ink, 2),   // 幞頭（唐宋官帽）
    straw: sp => poly('-44,-8 0,-40 44,-8', hat(sp, C.gold)) + rect(-44, -10, 88, 4, C.wood, 2),
    hood: sp => path('M-30 24 Q-34 -36 0 -38 Q34 -36 30 24 L21 24 Q24 -12 0 -15 Q-24 -12 -21 24Z', hat(sp, C.wood)),
    beret: sp => ell(-2, -22, 27, 10, hat(sp, C.g9)) + rect(-21, -20, 42, 6, hat(sp, C.g9), 2),
    space: () => path('M-34 0 a34 34 0 1 0 68 0 a34 34 0 1 0 -68 0Z M-30 0 a30 30 0 1 1 60 0 a30 30 0 1 1 -60 0Z', C.paper3, 'fill-rule="evenodd"') + circ(0, 0, 30, 'rgba(225,238,240,.28)') + ell(-13, -16, 8, 4, 'rgba(255,255,255,.7)')
  };
  // 拿在前手的小東西（hold 寫名字；原點＝手）
  const HOLDS = {
    scroll: () => rect(-7, -32, 14, 42, C.cream) + rect(-10, -36, 20, 6, C.wood, 3) + rect(-10, 6, 20, 6, C.wood, 3),
    brush: () => cap(0, 4, 8, -30, 4, C.wood) + ell(-1, 9, 3, 6, C.ink),
    bone: () => path('M-8 -30 Q0 -32 8 -30 L10 -24 Q16 -12 14 6 Q0 10 -14 6 Q-16 -12 -10 -24Z', C.cream) + rect(-1, -18, 2, 12, C.wood),
    letter: () => rect(-15, -12, 30, 22, C.cream, 2) + circ(0, -1, 5, C.red),
    coin: () => circ(0, -4, 10, C.gold) + circ(0, -4, 7, '#DDBB5F'),
    torch: () => cap(0, 10, 0, -34, 6, C.wood) + path('M0 -62 Q14 -44 8 -34 L-8 -34 Q-14 -44 0 -62Z', C.red) + path('M0 -52 Q6 -42 4 -36 L-4 -36 Q-6 -42 0 -52Z', C.gold),
    staff: () => cap(0, -70, 0, 96, 6, C.wood),
    book: () => rect(-16, -14, 32, 24, C.g7, 2) + rect(-13, -12, 26, 20, C.cream) + rect(-1, -12, 2, 20, C.paper3),
    phone: () => rect(-8, -16, 16, 28, C.ink, 3) + rect(-6, -13, 12, 20, C.g3, 1),
    shell: () => path('M0 6 Q-12 0 -12 -14 Q-10 -26 0 -32 Q6 -22 9 -14 Q12 -4 0 6Z', C.clay3) + rect(-3, -22, 7, 2, C.purple),
    flagS: sp => rect(-1.5, -60, 3, 70, C.wood) + path('M1 -60 L34 -54 L1 -42Z', hat(sp, C.red))
  };

  // ---------- 新姿勢 ----------
  Object.assign(POSES, {
    walk: { h: [0, -92], n: [4, -150], t: [6, -174], aF: [[18, -118], [32, -94]], aB: [[-16, -118], [-30, -94]], lF: [[16, -46], [26, 0]], lB: [[-12, -46], [-24, -2]] },
    push: { h: [0, -90], n: [22, -142], t: [30, -164], aF: [[46, -126], [74, -124]], aB: [[40, -120], [70, -112]], lF: [[14, -46], [24, 0]], lB: [[-24, -44], [-46, -2]] },
    kneel: { h: [0, -54], n: [2, -112], t: [4, -136], aF: [[24, -84], [40, -64]], aB: [[-10, -82], [18, -66]], lF: [[28, -34], [32, 0]], lB: [[-6, -4], [-44, -4]] },
    bow: { h: [0, -92], n: [16, -142], t: [26, -160], tilt: 14, aF: [[22, -112], [26, -90]], aB: [[-12, -112], [-14, -88]], lF: [[9, -46], [13, 0]], lB: [[-9, -46], [-14, 0]] },
    // 騎馬：y＝屁股（坐的高度），腳往下垂；配 noShadow，擺在 horse 道具上面（見 CONTRACT.md）
    ride: { h: [0, -30], n: [4, -88], t: [8, -112], aF: [[26, -64], [48, -56]], aB: [[16, -62], [40, -52]], lF: [[20, -14], [14, 26]], lB: [[16, -12], [8, 24]] }
  });

  // ---------- 道具庫（原點＝底部中央貼地；s 縮放、flip 左右翻、rot 旋轉、op 透明度；顏色可寫 C 的名字或 #色碼） ----------
  const ICOL = 'rgba(21,23,20,.28)';
  Object.assign(PROPS, {
    // 建築
    pyramid: x => {
      const W = x.W || 400, H = x.H || W * .64, f = col(x.f) || C.sand, f2 = col(x.f2) || C.brick, top = x.wip ? H * x.wip : H, hw = W / 2 * (1 - top / H), ex = W * .1 * (1 - top / H);
      let s = groundShadow(0, 4, W * .62, 12);
      if (x.wip) s += poly(`${-W / 2},0 ${-hw},${-top} ${hw},${-top} ${W / 2},0`, f) + poly(`${W * .1},0 ${ex},${-top} ${hw},${-top} ${W / 2},0`, f2) + poly(`${-W * .9},0 ${-hw},${-top} ${-hw + W * .1},${-top} ${-W * .62},0`, col(x.ramp) || C.brick2);   // 沒蓋完＋坡道
      else s += poly(`${-W / 2},0 0,${-H} ${W / 2},0`, f) + poly(`${W * .1},0 0,${-H} ${W / 2},0`, f2) + (x.cap ? poly(`${-W * .05},${-H * .9} 0,${-H} ${W * .05},${-H * .9}`, C.gold) : '');
      for (let i = 1; i < 12 && H * i / 12 <= top; i++) { const w2 = W / 2 * (1 - i / 12); s += rect(-w2, -H * i / 12, w2 * 2, 1.6, 'rgba(110,80,40,.22)'); }
      return place(x, s);
    },
    obelisk: x => { const H = x.H || 300, W = x.W || H * .1; let s = groundShadow(0, 3, W * 1.4, 8) + poly(`${-W / 2},0 ${-W * .36},${-H * .9} ${W * .36},${-H * .9} ${W / 2},0`, col(x.f) || C.brick3) + poly(`${W * .12},0 ${W * .1},${-H * .9} ${W * .36},${-H * .9} ${W / 2},0`, C.brick, 'opacity=".8"') + poly(`${-W * .36},${-H * .9} 0,${-H} ${W * .36},${-H * .9}`, C.gold); for (let i = 0; i < 10; i++) s += rect(-W * .12, -H * .85 + i * H * .075, W * .24, H * .03, 'rgba(110,80,40,.3)', 1); return place(x, s); },
    mudHouse: x => {
      const W = x.W || 160, H = x.H || 110, f = col(x.f) || C.brick3;
      let s = groundShadow(0, 3, W * .62, 8) + both(rect(-W / 2, -H, W, H, f, 3), 'cm-warm') + rect(-W / 2 - 4, -H - 8, W + 8, 10, col(x.f2) || C.brick, 2);
      if (x.dome) s += path(`M${-W * .3} ${-H - 6} Q${-W * .3} ${-H - W * .38} 0 ${-H - W * .38} Q${W * .3} ${-H - W * .38} ${W * .3} ${-H - 6}Z`, f);
      if (x.door !== false) s += path(`M${-W * .12} 0 L${-W * .12} ${-H * .5} Q0 ${-H * .62} ${W * .12} ${-H * .5} L${W * .12} 0Z`, C.ink);
      if (x.win !== false) s += rect(-W * .38, -H * .72, W * .13, H * .16, C.ink, 2) + rect(W * .25, -H * .72, W * .13, H * .16, C.ink, 2);
      return place(x, s);
    },
    house: x => {
      const W = x.W || 170, H = x.H || 110, f = col(x.f) || C.cream, k = x.roof || 'gable', rc = col(x.roofC) || (k === 'thatch' ? C.gold : k === 'tile' ? C.g9 : C.red);
      let s = groundShadow(0, 3, W * .62, 8) + both(rect(-W / 2, -H, W, H, f));
      if (k === 'gable') s += poly(`${-W / 2 - 12},${-H} 0,${-H - W * .42} ${W / 2 + 12},${-H}`, rc) + poly(`0,${-H - W * .42} ${W / 2 + 12},${-H} ${W * .18},${-H}`, 'rgba(0,0,0,.12)');
      if (k === 'tile') s += path(`M${-W * .68} ${-H + 2} Q${-W * .46} ${-H - 4} ${-W * .32} ${-H - W * .32} L${W * .32} ${-H - W * .32} Q${W * .46} ${-H - 4} ${W * .68} ${-H + 2}Z`, rc) + rect(-W * .36, -H - W * .35, W * .72, 7, rc, 3);
      if (k === 'thatch') s += path(`M${-W / 2 - 14} ${-H + 10} Q${-W * .3} ${-H - W * .5} 0 ${-H - W * .52} Q${W * .3} ${-H - W * .5} ${W / 2 + 14} ${-H + 10}Z`, rc);
      if (k === 'flat') s += rect(-W / 2 - 6, -H - 10, W + 12, 12, rc, 2);
      s += rect(-W * .1, -H * .56, W * .2, H * .56, C.wood, 2) + rect(-W * .38, -H * .7, W * .16, H * .22, C.g9, 2) + rect(W * .22, -H * .7, W * .16, H * .22, C.g9, 2);
      return place(x, s);
    },
    wall: x => {
      const W = x.W || 400, H = x.H || 120, f = col(x.f) || C.brick, rnd = seeded(x.seed || 6);
      let s = rect(-W / 2, -H, W, H, f) + rect(-W / 2, -H, W, 8, col(x.f2) || C.brick2, 0, 'opacity=".7"');
      if (x.crenel !== false) for (let xx = -W / 2; xx < W / 2 - 12; xx += 34) s += rect(xx, -H - 18, 20, 20, f);
      for (let i = 0; i < W * H / 4000; i++) s += rect(-W / 2 + rnd() * (W - 44), -H + 14 + rnd() * (H - 30), 40, 14, col(x.f2) || C.brick2, 2, 'opacity=".45"');
      if (x.gate) s += path(`M${-x.gate / 2} 0 L${-x.gate / 2} ${-H * .55} Q0 ${-H * .55 - x.gate * .6} ${x.gate / 2} ${-H * .55} L${x.gate / 2} 0Z`, C.ink);
      return place(x, s);
    },
    tower: x => { const W = x.W || 70, H = x.H || 220, f = col(x.f) || C.brick; let s = groundShadow(0, 3, W * .8, 6) + both(rect(-W / 2, -H, W, H, f)); if (x.roof === 'cone') s += poly(`${-W / 2 - 10},${-H} 0,${-H - W * 1.1} ${W / 2 + 10},${-H}`, col(x.roofC) || C.red); else for (let i = 0; i < 3; i++) s += rect(-W / 2 + i * W * .4, -H - 14, W * .2, 16, f); return place(x, s + rect(-W * .12, -H * .8, W * .24, H * .12, C.ink, W * .1)); },
    column: x => {
      const H = x.H || 240, W = x.W || H * .13, f = col(x.f) || C.cream, st = x.style || 'greek';
      let s = groundShadow(0, 2, W * .9, 5);
      if (st === 'egypt') s += rect(-W / 2, -H * .86, W, H * .86, f) + path(`M${-W / 2} ${-H * .86} Q${-W * 1.1} ${-H * .95} ${-W * .8} ${-H} L${W * .8} ${-H} Q${W * 1.1} ${-H * .95} ${W / 2} ${-H * .86}Z`, f) + rect(-W / 2, -H * .8, W, 4, C.g7) + rect(-W / 2, -H * .77, W, 4, C.red) + rect(-W * .7, -H * 1.03, W * 1.4, H * .03, col(x.f2) || C.gold);
      else if (st === 'persia') s += rect(-W * .36, -H * .86, W * .72, H * .86, f) + rect(-W / 2, -H * .05, W, H * .05, f) + rect(-W * .4, -H * .92, W * .8, H * .06, f) + rect(-W * 1.15, -H, W * 1.05, H * .1, f, 4) + rect(W * .1, -H, W * 1.05, H * .1, f, 4) + circ(-W * 1.15, -H * .93, W * .24, f) + circ(W * 1.15, -H * .93, W * .24, f);   // 雙牛柱頭（簡化）
      else { s += rect(-W * .62, -H * .04, W * 1.24, H * .04, f) + rect(-W / 2, -H * .93, W, H * .89, f); for (let i = 1; i < 4; i++) s += rect(-W / 2 + i * W / 4 - 1.5, -H * .9, 3, H * .84, 'rgba(0,0,0,.08)'); s += rect(-W * .7, -H, W * 1.4, H * .06, f) + ell(-W * .58, -H * .95, W * .2, H * .025, f) + ell(W * .58, -H * .95, W * .2, H * .025, f); }
      return place(x, s + sh(rect(-W / 2, -H * .9, W, H * .86, f)));
    },
    temple: x => {
      const W = x.W || 360, H = x.H || 220, f = col(x.f) || C.cream, n = x.n || 6, cw = W * .07, gap = (W - 40 - cw) / (n - 1);
      let s = groundShadow(0, 4, W * .6, 12) + rect(-W / 2, -H * .08, W, H * .08, col(x.f2) || C.paper3) + rect(-W / 2 + 8, -H * .14, W - 16, H * .06, f);
      for (let i = 0; i < n; i++) s += PROPS.column({ x: -W / 2 + 20 + cw / 2 + i * gap, y: -H * .14, H: H * .62, W: cw, f: x.f });
      s += rect(-W / 2 + 6, -H * .86, W - 12, H * .1, f) + poly(`${-W / 2},${-H * .86} 0,${-H} ${W / 2},${-H * .86}`, f) + poly(`${-W * .4},${-H * .875} 0,${-H * .975} ${W * .4},${-H * .875}`, col(x.f2) || C.paper3);
      return place(x, s);
    },
    hall: x => {   // 中國式殿堂：夯土台基＋木柱＋大屋頂（roof:'thatch' 茅草，商朝；預設 'tile' 瓦頂，漢以後）
      const W = x.W || 300, H = x.H || 170, f = col(x.f) || C.wood, th = x.roof === 'thatch', rc = col(x.roofC) || (th ? C.gold : C.g9), n = x.n || 5;
      let s = groundShadow(0, 4, W * .62, 10) + rect(-W / 2, -H * .16, W, H * .16, col(x.base) || C.brick3) + rect(-W / 2, -H * .16, W, 5, C.brick2);
      for (let i = 0; i < n; i++) s += rect(-W * .4 + i * (W * .8 - 10) / (n - 1), -H * .6, 10, H * .44, f);
      s += rect(-W * .42, -H * .62, W * .84, H * .06, f);
      if (th) { s += path(`M${-W * .58} ${-H * .54} Q${-W * .4} ${-H * .7} ${-W * .22} ${-H} L${W * .22} ${-H} Q${W * .4} ${-H * .7} ${W * .58} ${-H * .54}Z`, rc); for (let i = 1; i < 8; i++) s += rect(-W * .5 + i * W * .12, -H * .9 + Math.abs(i - 4) * H * .05, 3, H * .3, 'rgba(110,80,40,.25)'); }
      else s += path(`M${-W * .64} ${-H * .58} Q${-W * .5} ${-H * .62} ${-W * .36} ${-H * .88} L${W * .36} ${-H * .88} Q${W * .5} ${-H * .62} ${W * .64} ${-H * .58} Q${W * .45} ${-H * .66} 0 ${-H * .66} Q${-W * .45} ${-H * .66} ${-W * .64} ${-H * .58}Z`, rc) + rect(-W * .39, -H * .93, W * .78, H * .06, rc, 3);
      return place(x, s);
    },
    dome: x => { const W = x.W || 200, H = x.H || 200, f = col(x.f) || C.cream; return place(x, groundShadow(0, 3, W * .6, 8) + both(rect(-W / 2, -H * .55, W, H * .55, f)) + path(`M${-W * .36} ${-H * .55} Q${-W * .38} ${-H * .98} 0 ${-H * .98} Q${W * .38} ${-H * .98} ${W * .36} ${-H * .55}Z`, col(x.domeC) || C.g5) + rect(-2, -H * 1.04, 4, H * .07, C.gold) + path(`M${-W * .1} 0 L${-W * .1} ${-H * .3} Q0 ${-H * .4} ${W * .1} ${-H * .3} L${W * .1} 0Z`, C.ink) + rect(-W * .36, -H * .42, W * .1, H * .14, C.ink, 4) + rect(W * .26, -H * .42, W * .1, H * .14, C.ink, 4)); },
    castle: x => { const W = x.W || 360, H = x.H || 240, f = x.f || 'paper3'; return place(x, PROPS.tower({ x: 0, y: -H * .4, W: W * .24, H: H * .5, f }) + PROPS.wall({ x: 0, y: 0, W: W * .72, H: H * .45, f, gate: W * .16 }) + PROPS.tower({ x: -W * .38, y: 0, W: W * .2, H: H * .78, f, roof: 'cone', roofC: x.roofC }) + PROPS.tower({ x: W * .38, y: 0, W: W * .2, H: H * .78, f, roof: 'cone', roofC: x.roofC })); },
    zig: x => ziggurat(x.x, x.y, x.W || 300, x.H || 160, C.brick3, C.brick, C.brick2),
    // 自然
    tree: x => {
      const H = x.H || 200, k = x.kind || 'round', f = col(x.f) || C.g7, f2 = col(x.f2) || C.g9;
      let s = groundShadow(0, 3, H * .3, 6);
      if (k === 'pine') { s += rect(-H * .03, -H * .3, H * .06, H * .3, C.wood); for (let i = 0; i < 3; i++) s += poly(`${-H * (.3 - i * .07)},${-H * (.2 + i * .22)} 0,${-H * (.55 + i * .22)} ${H * (.3 - i * .07)},${-H * (.2 + i * .22)}`, i % 2 ? f : f2); }
      else if (k === 'cedar') { s += rect(-H * .035, -H * .78, H * .07, H * .78, C.wood); [[.3, .44], [.5, .38], [.68, .29], [.84, .18]].forEach(([y, w], i) => { s += ell(0, -H * y, H * w, H * .075, i % 2 ? f : f2); }); }
      else if (k === 'cypress') s += rect(-H * .025, -H * .15, H * .05, H * .15, C.wood) + ell(0, -H * .55, H * .11, H * .45, f2) + ell(-H * .03, -H * .6, H * .06, H * .36, f, 'opacity=".6"');
      else s += rect(-H * .04, -H * .5, H * .08, H * .5, C.wood) + circ(-H * .16, -H * .6, H * .2, f2) + circ(H * .15, -H * .62, H * .21, f2) + circ(0, -H * .8, H * .24, f) + circ(H * .06, -H * .62, H * .16, f, 'opacity=".7"');
      return place(x, s);
    },
    palm: x => palm(x.x, x.y, x.H || 200, col(x.f), col(x.f2)),
    reeds: x => reedTuft(x.x, x.y, x.n || 7, col(x.f)),
    papyrus: x => { const H = x.H || 120, n = x.n || 5; let s = ''; for (let i = 0; i < n; i++) { const dx = (i - (n - 1) / 2) * H * .12, hh = H * (.75 + ((i * 37) % 5) / 16); s += rect(dx - 1.5, -hh, 3, hh, C.g7) + poly(`${r1(dx)},${r1(-hh)} ${r1(dx - H * .13)},${r1(-hh - H * .16)} ${r1(dx + H * .13)},${r1(-hh - H * .16)}`, C.g5); } return place(x, s); },
    mountain: x => { const W = x.W || 400, H = x.H || 220; return place(x, poly(`${-W / 2},0 0,${-H} ${W / 2},0`, col(x.f) || C.g5) + poly(`0,${-H} ${W / 2},0 ${W * .08},0`, col(x.f2) || C.g7, 'opacity=".6"') + (x.snow ? poly(`${-W * .12},${-H * .76} 0,${-H} ${W * .12},${-H * .76} ${W * .04},${-H * .8} ${-W * .03},${-H * .74}`, C.cream) : '')); },
    hills: x => { const W = x.W || 800, H = x.H || 80; return place(x, path(`M${-W / 2} 0 L${-W / 2} ${-H * .4} Q${-W * .25} ${-H} 0 ${-H * .5} T${W / 2} ${-H * .7} L${W / 2} 0Z`, col(x.f) || C.g3)); },
    cloud: x => place(x, puff(0, 0, x.r || 30, col(x.f) || C.cream)),
    waves: x => { const W = x.W || 400, n = x.n || 3, f = col(x.f) || C.g2; let s = ''; for (let j = 0; j < n; j++) for (let xx = -W / 2 + (j % 2) * 30; xx < W / 2 - 40; xx += 60) s += path(`M${xx} ${j * 22} q15 -12 30 0 q-15 -5 -30 0Z`, f, 'opacity=".8"'); return place(x, s); },
    // 交通
    ship: x => {   // 原點＝吃水線中央，船頭朝右
      const k = x.kind || 'galley', f = col(x.f) || C.wood, sail = col(x.sail) || C.cream; let s = '';
      if (k === 'galley') {   // 古代划槳帆船（腓尼基、希臘、羅馬）：細節是學者依浮雕、沉船重建的樣子
        for (let i = 0; i < 9; i++) s += cap(-104 + i * 26, -34, -118 + i * 26, 8, 4, C.wood);
        s += path('M-150 -30 Q-160 -70 -178 -86 Q-150 -66 -120 -58 L120 -58 Q150 -62 168 -96 Q178 -70 150 -30 Q0 -6 -150 -30Z', f) + rect(-138, -62, 276, 9, col(x.trim) || C.red, 3) + circ(170, -100, 9, f);
        s += rect(-4, -232, 8, 178, C.ink) + rect(-92, -224, 184, 8, C.wood, 3) + path('M-86 -216 L86 -216 Q96 -150 86 -86 L-86 -86 Q-96 -150 -86 -216Z', sail);
        if (x.stripes) for (let i = 0; i < 4; i++) s += rect(-74 + i * 42, -214, 20, 126, col(x.stripes), 0, 'opacity=".8"');
      } else if (k === 'reed') {   // 蘆葦船（兩河、尼羅河）
        s += both(path('M-130 -6 Q-150 -40 -160 -58 Q-120 -18 -80 -16 L80 -16 Q120 -18 160 -58 Q150 -40 130 -6 Q0 14 -130 -6Z', C.gold), 'cm-warm');
        for (let i = -3; i <= 3; i++) s += rect(i * 34 - 2, -16, 4, 18, C.clay2);
        if (x.mast !== false) s += rect(-3, -150, 6, 136, C.wood) + path('M-56 -146 L56 -146 L48 -40 L-48 -40Z', sail);
      } else if (k === 'junk') {   // 中國帆船（硬帆）
        s += path('M-160 -60 L-150 -20 Q0 6 140 -20 L170 -66 Q20 -44 -160 -60Z', f) + rect(-150, -70, 40, 14, f, 3);
        [[-50, 210, 130], [70, 170, 104]].forEach(([mx, hh, ww]) => { s += rect(mx - 3, -hh - 50, 6, hh, C.ink) + path(`M${mx - ww / 2} ${-hh - 40} L${mx + ww / 2} ${-hh - 34} L${mx + ww / 2 + 8} -64 L${mx - ww / 2 + 4} -60Z`, col(x.sail) || C.clay3); for (let j = 1; j < 6; j++) s += rect(mx - ww / 2 + 2, -hh - 40 + j * (hh - 24) / 6, ww + 4, 3, C.wood); });
      } else if (k === 'tall') {   // 大航海時代的多桅帆船
        s += path('M-170 -50 L-176 -110 L-110 -100 L-100 -64 L110 -64 L180 -86 L150 -24 Q0 4 -150 -24Z', f) + rect(-150, -60, 290, 8, col(x.trim) || C.gold, 2);
        [[-70, 230], [20, 270], [110, 200]].forEach(([mx, hh]) => { s += rect(mx - 3, -hh - 60, 6, hh, C.ink); [0, 1].forEach(j => { const y = -hh - 40 + j * hh * .45, ww = 100 - j * 6 - (mx > 80 ? 24 : 0); s += path(`M${mx - ww / 2} ${y} L${mx + ww / 2} ${y} Q${mx + ww / 2 + 10} ${y + hh * .2} ${mx + ww / 2} ${y + hh * .38} L${mx - ww / 2} ${y + hh * .38} Q${mx - ww / 2 + 10} ${y + hh * .2} ${mx - ww / 2} ${y}Z`, sail); }); });
        s += path('M20 -340 L60 -332 L20 -322Z', col(x.flag) || C.red);
      } else if (k === 'steam') {   // 蒸汽船
        s += path('M-170 -50 L170 -50 L150 -6 Q0 6 -150 -6Z', col(x.f) || C.ink) + rect(-110, -96, 200, 46, C.cream, 4) + rect(-10, -168, 34, 76, C.red) + rect(-10, -168, 34, 14, C.ink) + puff(16, -190, 18, C.paper3) + puff(-20, -214, 24, C.paper3);
        for (let i = 0; i < 6; i++) s += circ(-90 + i * 30, -74, 6, C.g9);
      }
      return place(x, s);
    },
    horse: x => {   // 朝右；騎士用 pose 'ride'，x＝馬的 x−4s、y＝馬的 y−98s
      const f = col(x.f) || C.wood, m = col(x.mane) || C.ink; let s = groundShadow(0, 3, 74, 8);
      [[-44, -62, -48, 0], [-30, -62, -24, 0], [36, -62, 42, 0], [50, -62, 58, 0]].forEach((l, i) => { s += cap(l[0], l[1], l[2], l[3] - 4, 10, i % 2 ? f : C.clay2) + rect(l[2] - 6, -7, 12, 7, C.ink, 2); });
      s += path('M-60 -86 Q-86 -78 -88 -36 Q-74 -58 -60 -72Z', m) + ell(0, -80, 64, 27, f) + path('M36 -94 L60 -152 L84 -148 L70 -86Z', f) + path('M60 -152 Q72 -172 98 -162 L114 -132 Q110 -120 98 -124 L76 -136Z', f) + path('M58 -150 L62 -168 L70 -152Z', f) + path('M56 -150 Q46 -118 36 -96 L46 -94 Q56 -118 66 -148Z', m) + circ(92, -150, 3, C.ink);
      if (x.saddle) s += rect(-26, -110, 48, 16, col(x.saddle), 4);
      return place(x, s);
    },
    camel: x => { const f = col(x.f) || C.clay3; let s = groundShadow(0, 3, 70, 8); [[-40, -70, -42, 0], [-26, -70, -22, 0], [32, -70, 36, 0], [46, -70, 52, 0]].forEach(l => { s += cap(l[0], l[1], l[2], l[3] - 4, 9, f) + ell(l[2], -3, 8, 4, C.clay2); }); return place(x, s + ell(0, -88, 60, 26, f) + path('M-30 -104 Q-10 -150 14 -104Z', f) + path('M40 -96 Q70 -110 66 -150 L84 -156 Q96 -150 100 -138 L80 -134 Q86 -100 50 -76Z', f) + circ(88, -148, 3, C.ink) + rect(-34, -116, 60, 14, col(x.load) || C.red, 4)); },
    cart: x => { const f = col(x.f) || C.wood; return place(x, groundShadow(0, 3, 80, 8) + rect(-70, -76, 140, 44, f, 4) + rect(66, -50, 70, 6, f, 3) + circ(-36, -24, 24, C.ink) + circ(-36, -24, 8, C.paper3) + circ(36, -24, 24, C.ink) + circ(36, -24, 8, C.paper3)); },
    // 器物
    scroll: x => { const W = x.W || 90, H = x.H || 120; let s = rect(-W / 2, -H, W, H, col(x.f) || C.cream) + rect(-W / 2 - 6, -H - 6, W + 12, 10, C.wood, 5) + rect(-W / 2 - 6, -4, W + 12, 10, C.wood, 5); for (let i = 0; i < Math.floor((H - 24) / 13); i++) s += rect(-W / 2 + 10, -H + 14 + i * 13, (W - 20) * (i % 3 === 2 ? .7 : 1), 3, ICOL); return place(x, s); },
    slips: x => { const n = x.n || 8, H = x.H || 120; let s = ''; for (let i = 0; i < n; i++) s += rect(-n * 7 + i * 14, -H, 12, H, C.clay3, 2) + rect(-n * 7 + i * 14 + 4, -H + 12, 4, H * .7, ICOL); return place(x, s + rect(-n * 7 - 2, -H * .8, n * 14 + 2, 3, C.wood) + rect(-n * 7 - 2, -H * .25, n * 14 + 2, 3, C.wood)); },   // 竹簡
    book: x => place(x, path('M0 -6 Q-30 -16 -60 -8 L-60 -70 Q-30 -78 0 -68Z', C.cream) + path('M0 -6 Q30 -16 60 -8 L60 -70 Q30 -78 0 -68Z', C.paper2) + rect(-50, -58, 40, 3, ICOL) + rect(-50, -46, 40, 3, ICOL) + rect(10, -58, 40, 3, ICOL) + rect(10, -46, 40, 3, ICOL)),
    amphora: x => place(x, groundShadow(0, 2, 26, 5) + both(path('M-10 -96 L10 -96 L12 -80 Q34 -60 20 -16 L4 0 L-4 0 L-20 -16 Q-34 -60 -12 -80Z', col(x.f) || C.clay), 'cm-warm') + cap(-12, -88, -24, -70, 5, col(x.f) || C.clay) + cap(12, -88, 24, -70, 5, col(x.f) || C.clay)),
    ding: x => { const f = col(x.f) || C.g6, f2 = col(x.f2) || C.g8; let s = groundShadow(0, 2, 52, 6) + cap(-26, -30, -32, 0, 7, f2) + cap(26, -30, 32, 0, 7, f2) + cap(0, -30, 0, 0, 7, f2) + path('M-44 -90 L44 -90 Q46 -40 22 -26 L-22 -26 Q-46 -40 -44 -90Z', f) + rect(-48, -96, 96, 10, f2, 3) + rect(-32, -120, 12, 26, f2) + rect(20, -120, 12, 26, f2) + rect(-40, -82, 80, 7, 'rgba(21,23,20,.22)'); for (let i = 0; i < 6; i++) s += circ(-30 + i * 12, -58, 3, 'rgba(21,23,20,.25)'); return place(x, s); },   // 青銅鼎
    bone: x => {   // 占卜用的牛肩胛骨：燒出「卜」字形裂紋、旁邊刻字（刻痕只是樣子，不是真的字）
      let s = path('M-30 -120 Q-10 -128 10 -120 L14 -100 Q40 -60 44 0 Q0 14 -44 0 Q-40 -60 -14 -100Z', col(x.f) || C.cream) + rect(-10, -128, 20, 14, col(x.f) || C.cream, 4);
      [[-22, -70], [2, -54], [18, -82], [-12, -28], [18, -24]].forEach(([cx, cy]) => { s += rect(cx - 1.2, cy - 14, 2.4, 22, C.wood) + rect(cx, cy - 7, 11, 2.2, C.wood); });
      if (x.glyph !== false) { const rnd = seeded(x.seed || 4); for (let i = 0; i < 9; i++) { const gx = -30 + (i % 3) * 24 + rnd() * 6, gy = -100 + Math.floor(i / 3) * 34 + rnd() * 6; s += rect(gx, gy, 9, 2, ICOL) + rect(gx + 3, gy - 4, 2, 10, ICOL); } }
      return place(x, s);
    },
    shell: x => { let s = path('M0 0 Q-24 -10 -26 -42 Q-22 -70 0 -86 Q14 -64 22 -42 Q30 -16 0 0Z', col(x.f) || C.clay3); [[-24, -30], [-26, -52], [-16, -72], [20, -36], [22, -58]].forEach(([sx, sy]) => { s += poly(`${sx},${sy} ${sx + (sx < 0 ? -14 : 14)},${sy - 6} ${sx},${sy - 10}`, col(x.f) || C.clay3); }); return place(x, s + path('M-4 -20 Q-12 -40 0 -60', 'none', `stroke="${C.clay2}" stroke-width="3"`)); },   // 骨螺
    fire: x => place(x, path('M0 -80 Q34 -40 22 -6 L-22 -6 Q-34 -40 0 -80Z', C.red) + path('M0 -56 Q16 -30 10 -8 L-10 -8 Q-16 -30 0 -56Z', C.gold)),
    brazier: x => place(x, groundShadow(0, 2, 34, 5) + cap(-20, -30, -26, 0, 5, C.ink) + cap(20, -30, 26, 0, 5, C.ink) + path('M-34 -50 L34 -50 Q30 -26 0 -26 Q-30 -26 -34 -50Z', C.ink) + PROPS.fire({ x: 0, y: -46, s: .6 })),
    well: x => place(x, ell(0, -10, 60, 18, C.paper3) + rect(-60, -40, 120, 30, C.brick2) + ell(0, -40, 60, 18, C.brick3) + ell(0, -40, 44, 12, C.ink)),
    flag: x => { const H = x.H || 160; return place(x, rect(-3, -H, 6, H, C.wood) + path(`M3 ${-H} Q30 ${-H - 10} 60 ${-H} T110 ${-H} L110 ${-H + 56} Q80 ${-H + 46} 60 ${-H + 56} T3 ${-H + 56}Z`, col(x.f) || C.red)); },
    sign: x => { const W = x.W || 160, H = x.H || 54; return place(x, rect(-4, -H - 40, 8, H + 40, C.wood) + both(rect(-W / 2, -H - 50, W, H, col(x.f) || C.cream, 4)) + txt(0, -H - 50 + H * .66, x.t || '', x.fs || 24, col(x.tc) || C.ink)); },
    crate: x => place(x, groundShadow(0, 2, 40, 5) + both(rect(-34, -60, 68, 60, col(x.f) || C.clay2, 3), 'cm-warm') + rect(-34, -34, 68, 6, C.wood) + rect(-6, -60, 6, 60, C.wood)),
    barrel: x => place(x, groundShadow(0, 2, 34, 5) + both(path('M-26 0 Q-36 -40 -26 -80 L26 -80 Q36 -40 26 0Z', col(x.f) || C.wood), 'cm-warm') + rect(-32, -66, 64, 5, C.ink) + rect(-32, -18, 64, 5, C.ink)),
    bricks: x => { const n = x.n || 4, m = x.m || 3; let s = ''; for (let j = 0; j < n; j++) for (let i = 0; i < m; i++) s += rect(-m * 26 + i * 52 + (j % 2) * 12, -(j + 1) * 22, 48, 20, col(x.f) || C.clay, 2) + rect(-m * 26 + i * 52 + (j % 2) * 12, -(j + 1) * 22, 48, 5, C.clay3, 1); return place(x, s); },
    crowd: x => { const n = x.n || 6, W = x.W || 300, rnd = seeded(x.seed || 12), cs = [C.g5, C.g7, C.clay2, C.brick2, C.g3, C.wood]; let s = ''; for (let i = 0; i < n; i++) { const cx = -W / 2 + (i + .5) * W / n + (rnd() - .5) * 14, hh = 70 + rnd() * 24, c = cs[Math.floor(rnd() * cs.length)]; s += path(`M${r1(cx - 20)} 0 Q${r1(cx - 22)} ${r1(-hh * .7)} ${r1(cx)} ${r1(-hh * .72)} Q${r1(cx + 22)} ${r1(-hh * .7)} ${r1(cx + 20)} 0Z`, c) + circ(cx, -hh * .84, 13, col(x.skin) || C.skinB); } return place(x, s); },   // 背景人群（剪影，不畫臉）
    road: x => { const W = x.W || 300, w2 = x.w2 || 60, L = x.L || 300, f = col(x.f) || C.paper3; let s = poly(`${-W / 2},0 ${W / 2},0 ${w2 / 2},${-L} ${-w2 / 2},${-L}`, f); for (let i = 0; i < 6; i++) { const t0 = i / 6 + .02, t1 = t0 + .08, wd = t => 7 * (1 - t) + 1.5; s += poly(`${r1(-wd(t0))},${r1(-L * t0)} ${r1(wd(t0))},${r1(-L * t0)} ${r1(wd(t1))},${r1(-L * t1)} ${r1(-wd(t1))},${r1(-L * t1)}`, col(x.dash) || C.cream, 'opacity=".7"'); } return place(x, s); },
    spark: x => { const R = x.r || 18; return place(x, poly(`0,${-R} ${R * .22},${-R * .22} ${R},0 ${R * .22},${R * .22} 0,${R} ${-R * .22},${R * .22} ${-R},0 ${-R * .22},${-R * .22}`, col(x.f) || C.gold)); },
    arrow: x => { const L = x.L || 80; return place(x, poly(`0,-6 ${L - 18},-6 ${L - 18},-16 ${L},0 ${L - 18},16 ${L - 18},6 0,6`, col(x.f) || C.red)); },
    table: x => { const W = x.W || 200; return place(x, groundShadow(0, 2, W * .55, 6) + rect(-W / 2, -76, W, 12, col(x.f) || C.wood, 3) + rect(-W / 2 + 10, -66, 10, 66, col(x.f) || C.wood) + rect(W / 2 - 20, -66, 10, 66, col(x.f) || C.wood)); },
    shelf: x => { const W = x.W || 160, H = x.H || 220, rnd = seeded(x.seed || 3), cs = [C.g7, C.red, C.gold, C.g5, C.clay2, C.g9]; let s = rect(-W / 2, -H, W, H, C.wood); for (let j = 0; j < 4; j++) { let xx = -W / 2 + 8; while (xx < W / 2 - 22) { const bw = 10 + rnd() * 10; s += rect(xx, -H + 10 + j * H / 4, bw, H / 4 - 16, cs[Math.floor(rnd() * cs.length)]); xx += bw + 2; } } return place(x, s); },
    lamp: x => lamp(x.x, x.y, x.H || 200, x.s || 1, x.dir || 1),
    scooter: x => scooter(x.x, x.y, x.s || 1)
  });
  // 字卡小圖示（120×90）：通用的再多幾個
  Object.assign(ICONS, {
    water() { return rect(0, 0, 120, 90, C.g3) + path('M0 50 Q30 38 60 50 T120 48 L120 90 L0 90Z', C.g5) + path('M0 66 Q30 56 60 66 T120 64 L120 90 L0 90Z', C.g7) + circ(94, 22, 12, C.cream); },
    brick() { let s = rect(0, 0, 120, 90, C.paper); for (let j = 0; j < 4; j++) for (let i = 0; i < 3; i++) s += rect(8 + i * 36 + (j % 2) * 12, 10 + j * 19, 32, 15, C.clay, 2); return s; },
    scrollI() { return rect(0, 0, 120, 90, C.g3) + rect(34, 14, 52, 62, C.cream) + rect(28, 8, 64, 9, C.wood, 4) + rect(28, 73, 64, 9, C.wood, 4) + rect(42, 28, 36, 3, ICOL) + rect(42, 40, 36, 3, ICOL) + rect(42, 52, 26, 3, ICOL); },
    coinI() { return rect(0, 0, 120, 90, C.g7) + circ(48, 48, 26, C.gold) + circ(48, 48, 19, '#DDBB5F') + circ(80, 40, 22, C.gold) + circ(80, 40, 16, '#DDBB5F'); },
    ship() { return rect(0, 0, 120, 90, C.g3) + rect(0, 62, 120, 28, C.g5) + path('M14 60 Q60 76 106 60 L98 70 Q60 80 22 70Z', C.wood) + rect(58, 14, 4, 48, C.ink) + path('M36 18 L84 18 L80 52 L40 52Z', C.cream); },
    road() { return rect(0, 0, 120, 90, C.sand) + poly('30,90 90,90 66,10 54,10', C.paper3) + rect(58, 70, 4, 14, C.cream) + rect(58, 46, 4, 12, C.cream) + rect(59, 26, 3, 10, C.cream) + rect(92, 30, 18, 30, C.clay2, 2); },
    letterI() { return rect(0, 0, 120, 90, C.g3) + rect(22, 20, 76, 50, C.cream, 4) + poly('22,20 60,50 98,20', C.paper3) + circ(60, 50, 9, C.red); },
    question() { return rect(0, 0, 120, 90, C.g9) + txt(60, 70, '？', 66, C.gold); },
    people() { return rect(0, 0, 120, 90, C.paper) + [24, 60, 96].map((x, i) => circ(x, 34, 12, [C.skin, C.skinB, C.skinC][i]) + path(`M${x - 18} 90 Q${x - 18} 52 ${x} 52 Q${x + 18} 52 ${x + 18} 90Z`, [C.g5, C.red, C.gold][i])).join(''); },
    star() { return rect(0, 0, 120, 90, C.g7) + poly('60,12 69,36 94,36 74,52 82,78 60,62 38,78 46,52 26,36 51,36', C.gold); }
  });

  // ---------- 通用場景（sceneOpt 調顏色；細節用 back[]／props[] 擺道具） ----------
  Object.assign(SCENES, {
    // 戶外：天空＋太陽＋遠山＋地面（＋河）。o：sky、sun:[x比例,y比例]|false、hz 地平線比例、far 遠山色|false、ground、river:{y,h,tilt,c}、near 前景色
    land(w, h, o) {
      o = o || {}; const hz = h * (o.hz != null ? o.hz : .5);
      let s = rect(0, 0, w, h, col(o.sky) || C.sky);
      if (o.sun !== false) { const sx = w * (o.sun ? o.sun[0] : .76), sy = h * (o.sun ? o.sun[1] : .16), R = Math.min(w, h); s += circ(sx, sy, R * .32, 'url(#cm-sun)') + circ(sx, sy, R * .07, '#FFF8DC'); }
      if (o.far !== false) s += path(`M0 ${r1(hz + 2)} L0 ${r1(hz - h * .03)} Q${r1(w * .25)} ${r1(hz - h * .08)} ${r1(w * .5)} ${r1(hz - h * .03)} T${w} ${r1(hz - h * .06)} L${w} ${r1(hz + 2)}Z`, col(o.far) || C.g3);
      s += rect(0, hz, w, h - hz, col(o.ground) || C.sand);
      if (o.river) { const R = o.river, y0 = h * (R.y != null ? R.y : .62), rh = h * (R.h || .1), t = h * (R.tilt != null ? R.tilt : .03); s += path(`M0 ${r1(y0 + t)} L${w} ${r1(y0 - t)} L${w} ${r1(y0 - t + rh)} Q${r1(w * .5)} ${r1(y0 + rh + t * .2)} 0 ${r1(y0 + t + rh)}Z`, col(R.c) || C.g5); for (let i = 0; i < 7; i++) { const xx = (i * 113 + 30) % w; s += rect(xx, y0 + rh * (.25 + (i % 3) * .2) - (xx / w - .5) * 2 * t, 50 + (i % 3) * 24, 4, C.g2, 2, 'opacity=".7"'); } }
      if (o.near) s += path(`M0 ${r1(h * .86)} Q${r1(w * .5)} ${r1(h * .8)} ${w} ${r1(h * .86)} L${w} ${h} L0 ${h}Z`, col(o.near));
      return { bg: s };
    },
    // 海上：o：sky、hz、water、sun、far（遠方海岸色|false）
    sea(w, h, o) {
      o = o || {}; const hz = h * (o.hz != null ? o.hz : .45);
      let s = rect(0, 0, w, h, col(o.sky) || C.sky);
      if (o.sun !== false) { const sx = w * (o.sun ? o.sun[0] : .78), sy = h * (o.sun ? o.sun[1] : .16); s += circ(sx, sy, Math.min(w, h) * .3, 'url(#cm-sun)') + circ(sx, sy, Math.min(w, h) * .07, '#FFF8DC'); }
      if (o.far) s += path(`M0 ${r1(hz)} Q${r1(w * .2)} ${r1(hz - h * .05)} ${r1(w * .4)} ${r1(hz)}Z`, col(o.far));
      s += rect(0, hz, w, h - hz, col(o.water) || C.g5);
      for (let i = 0; i < 14; i++) { const yy = hz + (h - hz) * ((i * .37) % 1), xx = (i * 151) % w, k = (yy - hz) / (h - hz); s += rect(xx, yy, 30 + k * 70, 3 + k * 4, C.g2, 2, 'opacity=".55"'); }
      return { bg: s };
    },
    // 室內：o：wall、brick（磚牆）、floor、hz 牆腳比例、window:[x,y,w,h]（比例）、winC 窗外顏色
    room(w, h, o) {
      o = o || {}; const hz = h * (o.hz != null ? o.hz : .72);
      let s = o.brick ? brickWall(0, 0, w, hz, col(o.wall) || C.brick3, C.brick, o.seed || 9) : rect(0, 0, w, hz, col(o.wall) || C.paper2);
      if (o.window) { const [a, b, c, d] = o.window; s += rect(w * a - 8, h * b - 8, w * c + 16, h * d + 16, C.wood, 3) + rect(w * a, h * b, w * c, h * d, col(o.winC) || C.g3); }
      s += rect(0, hz, w, h - hz, col(o.floor) || C.paper3) + rect(0, hz, w, 6, 'rgba(21,23,20,.12)');
      return { bg: s };
    },
    // 單色底（特寫、心情格）：o：c、zoom（速度線）、cx、cy
    flat(w, h, o) { o = o || {}; let s = rect(0, 0, w, h, col(o.c) || C.g7); if (o.zoom) s += zoom(w * (o.cx != null ? o.cx : .5), h * (o.cy != null ? o.cy : .5), Math.min(w, h) * .15, Math.max(w, h), 30, 'rgba(247,243,230,.16)', o.seed || 4); return { bg: s }; },
    // 夜晚：o：sky、moon:[x,y]、ground
    night(w, h, o) { o = o || {}; const rnd = seeded(o.seed || 17); let s = rect(0, 0, w, h, col(o.sky) || C.night); for (let i = 0; i < 40; i++) s += circ(rnd() * w, rnd() * h * .6, .8 + rnd() * 1.8, C.cream, 'opacity=".8"'); const m = o.moon || [.78, .16]; s += circ(w * m[0], h * m[1], 90, 'url(#cm-glow)', 'opacity=".4"') + circ(w * m[0], h * m[1], 34, C.cream) + circ(w * m[0] + 12, h * m[1] - 8, 30, col(o.sky) || C.night); if (o.ground !== false) s += path(`M0 ${r1(h * .78)} Q${r1(w * .5)} ${r1(h * .72)} ${w} ${r1(h * .8)} L${w} ${h} L0 ${h}Z`, col(o.ground) || C.g9); return { bg: s }; },
    // 時光隧道（出發／抵達那一格）：漩渦＋搖搖車
    vortex(w, h, o) { o = o || {}; const cx = w * (o.cx != null ? o.cx : .5), cy = h * (o.cy != null ? o.cy : .45); let s = rect(0, 0, w, h, C.g9) + circ(cx, cy, w * .7, C.g8) + circ(cx, cy, w * .5, C.g7) + circ(cx, cy, w * .3, C.g6) + zoom(cx, cy, w * .18, Math.max(w, h), 44, 'rgba(247,243,230,.14)', 9) + circ(cx, cy, w * .3, 'url(#cm-glow)'); if (o.year) s += txt(cx, cy + 20, o.year, Math.min(w, h) * .12, 'rgba(247,243,230,.5)'); return { bg: s, fg: o.car === false ? '' : car(cx, cy + h * .12, (o.carS || 1) * Math.min(w, h) / 700, { rot: -10, noShadow: true, lights: true }) }; }
  });
  // 封面：sceneOpt.plain＝不畫巴比倫古城（第 2 話以後的封面用 back[] 擺自己的建築）
  const coverBabylon = SCENES.cover;
  SCENES.cover = (w, h, o) => {
    if (!o || !o.plain) return coverBabylon(w, h);
    let s = rect(0, 0, w, h, C.g9) + circ(w * .55, h * .46, w * .62, C.g8) + circ(w * .55, h * .46, w * .44, C.g7) + circ(w * .55, h * .46, w * .28, C.g6) + zoom(w * .55, h * .46, w * .2, w * .95, 44, 'rgba(247,243,230,.14)', 9) + circ(w * .55, h * .46, w * .3, 'url(#cm-glow)');
    s += path(`M0 ${h * .8} Q${w * .5} ${h * .74} ${w} ${h * .78} L${w} ${h} L0 ${h}Z`, col(o.ground) || C.brick2) + path(`M0 ${h * .9} Q${w * .4} ${h * .84} ${w} ${h * .93} L${w} ${h} L0 ${h}Z`, col(o.near) || C.g5);
    return { bg: s, fg: car(w * .55, h * .56, 1.7, { rot: -12, noShadow: true, lights: true }) };
  };

  // ---------- 新版面（畫布 800×1060） ----------
  Object.assign(A.LAYOUTS, {
    quad: [{ x: 10, y: 10, w: 383, h: 515 }, { x: 407, y: 10, w: 383, h: 515 }, { x: 10, y: 539, w: 383, h: 511 }, { x: 407, y: 539, w: 383, h: 511 }],
    stack3: [{ x: 10, y: 10, w: 780, h: 338 }, { x: 10, y: 362, w: 780, h: 338 }, { x: 10, y: 714, w: 780, h: 336 }],
    duo: [{ x: 10, y: 10, w: 780, h: 513 }, { x: 10, y: 537, w: 780, h: 513 }],
    bigL: [{ x: 10, y: 10, w: 500, h: 1040 }, { x: 524, y: 10, w: 266, h: 513 }, { x: 524, y: 537, w: 266, h: 513 }],
    trioR: [{ x: 10, y: 10, w: 780, h: 340 }, { x: 10, y: 364, w: 242, h: 686 }, { x: 266, y: 364, w: 524, h: 686 }]
  });

  // ---------- 地圖庫：海岸、島、河（[緯度, 經度]，大約 0.5～1 度精度的簡化線，只給小孩看相對位置） ----------
  const pp = a => { const o = []; for (let i = 0; i < a.length; i += 2) o.push([a[i], a[i + 1]]); return o; };
  GEO.seas = {   // 區域圖：陸地當底色，這些多邊形塗成海
    med: pp([36.1, -5.35, 36.7, -4.4, 36.8, -2.4, 37.6, -1, 38.35, -.5, 39.45, -.35, 40.7, .85, 41.4, 2.2, 42.3, 3.3, 43.5, 3.9, 43.3, 5.4, 43.1, 5.9, 43.7, 7.3, 44.4, 8.9, 44.1, 9.8, 43.55, 10.3, 42.95, 10.5, 42.1, 11.8, 41.2, 13.55, 40.85, 14.25, 40.6, 14.8, 40.05, 15.5, 39.3, 16.05, 38.1, 15.65, 37.92, 16.06, 38.6, 16.55, 39.08, 17.12, 39.7, 16.5, 40.45, 17.2, 40.05, 17.95, 39.8, 18.35, 40.15, 18.5, 40.65, 17.95, 41.12, 16.87, 41.9, 16.2, 42.45, 14.2, 43.6, 13.5, 44.4, 12.3, 45.45, 12.35, 45.65, 13.75, 44.85, 13.85, 45.33, 14.4, 44.1, 15.2, 43.5, 16.45, 42.65, 18.1, 42.1, 19.1, 41.3, 19.45, 40.45, 19.45, 39.6, 20, 38.95, 20.75, 38.3, 21.3, 37.65, 21.4, 36.9, 21.7, 36.38, 22.48, 36.75, 22.57, 36.44, 23.2, 37.55, 22.8, 37.95, 23.65, 37.65, 24.03, 38.15, 24.6, 38.63, 24.12, 39, 23.3, 39.4, 23.2, 40.1, 22.6, 40.6, 22.95, 39.95, 23.7, 40.15, 24.4, 40.93, 24.4, 40.85, 25.9, 40.05, 26.2, 40, 26.25, 39.3, 26.7, 38.3, 26.3, 37.85, 27.25, 37.03, 27.43, 36.85, 28.27, 36.62, 29.1, 36.2, 29.6, 36.88, 30.7, 36.55, 32, 36.02, 32.8, 36.38, 33.93, 36.8, 34.6, 36.6, 36.17, 36.1, 35.9, 35.52, 35.78, 34.45, 35.82, 33.9, 35.48, 33.27, 35.2, 32.82, 34.98, 32.08, 34.77, 31.5, 34.45, 31.13, 33.8, 31.26, 32.3, 31.5, 31.8, 31.47, 30.37, 31.2, 29.9, 30.83, 28.95, 31.35, 27.23, 31.57, 25.15, 32.08, 23.97, 32.77, 22.64, 32.9, 21.6, 32.12, 20.07, 30.8, 20, 30.4, 19.6, 31.2, 16.6, 32.37, 15.1, 32.9, 13.18, 32.93, 12.08, 33.8, 10.9, 33.88, 10.1, 34.74, 10.76, 35.5, 11.07, 35.83, 10.64, 37.08, 11.05, 36.85, 10.32, 37.27, 9.87, 36.95, 8.75, 36.9, 7.77, 36.88, 6.9, 36.75, 5.08, 36.77, 3.06, 36.5, 1.3, 35.7, -.63, 35.3, -2.95, 35.25, -3.93, 35.57, -5.37, 35.89, -5.32]),
    marmara: pp([41, 28.98, 40.77, 29.9, 40.4, 28.9, 40.35, 27.97, 40.4, 26.7, 40.97, 27.5, 41.07, 28.25]),
    black: pp([41.2, 29.1, 41.12, 30.6, 41.28, 31.42, 42.02, 35.15, 41.3, 36.33, 41, 37.88, 41, 39.72, 41.65, 41.63, 42.15, 41.67, 43, 41, 43.6, 39.73, 44.72, 37.78, 45.35, 36.6, 45.03, 35.38, 44.5, 34.17, 44.6, 33.5, 45.35, 32.5, 46.1, 33.6, 46.5, 32, 46.48, 30.75, 45.2, 29.7, 44.17, 28.65, 43.2, 27.95, 42.5, 27.5, 41.9, 28, 41.25, 29]),
    caspian: pp([45.8, 47.8, 46.8, 49.5, 47.1, 51.9, 46.6, 53, 45.4, 53.3, 44.5, 50.3, 43.65, 51.15, 41.3, 52.9, 40, 53, 37.4, 53.9, 36.9, 54, 36.8, 53.2, 36.7, 52.65, 36.9, 50.65, 37.47, 49.46, 38.45, 48.88, 40.45, 50.35, 42.06, 48.3, 42.98, 47.5, 44, 47.2, 45, 47]),
    // 紅海＋阿拉伯海＋波斯灣＋印度洋一圈（南邊在圖外封口）
    ind: pp([29.95, 32.55, 29.6, 32.35, 28.35, 33.1, 27.25, 33.83, 26.1, 34.28, 25.07, 34.9, 23.95, 35.48, 22.2, 36.6, 19.6, 37.22, 15.6, 39.45, 13, 42.75, 11.6, 43.15, 10.44, 45, 11.3, 49.2, 11.83, 51.28, 10.4, 51.4, 7.98, 49.85, 5.35, 48.53, 2.04, 45.34, -.36, 42.55, -2.27, 40.9, -4.05, 39.67, -6.8, 39.3, -10.5, 40.4, -15, 40.7, -15, 110, -8.5, 110, -5.9, 105, -3.8, 102.26, -.95, 100.35, 2, 98.7, 5.55, 95.3, 7.9, 98.3, 14.08, 98.2, 16.5, 97.6, 15.8, 95, 16, 94.2, 20.15, 92.9, 22.35, 91.8, 21.8, 89.5, 21.6, 88.2, 20.2, 86.6, 17.7, 83.3, 16.17, 81.13, 13.08, 80.29, 11.93, 79.83, 10.3, 79.85, 9.28, 79.3, 8.8, 78.15, 8.08, 77.55, 8.5, 76.95, 9.97, 76.25, 11.25, 75.77, 12.87, 74.84, 15.5, 73.82, 18.95, 72.82, 21.17, 72.7, 22.3, 72.6, 21.75, 72.15, 20.7, 70.98, 20.9, 70.37, 21.64, 69.6, 22.24, 68.97, 22.47, 69.07, 22.47, 70.07, 23, 70.2, 22.83, 69.35, 23.2, 68.7, 23.6, 68.4, 24, 67.45, 24.82, 66.98, 25.4, 66.6, 25.2, 64.6, 25.12, 62.33, 25.3, 60.62, 25.64, 57.77, 27.18, 56.27, 26.55, 54.88, 27.83, 52.06, 28.97, 50.83, 30.05, 50.16, 29.95, 48.55, 29.37, 47.98, 26.65, 50.15, 24.75, 50.8, 25.6, 50.8, 26.15, 51.2, 25.3, 51.55, 24.8, 51.6, 24.45, 54.35, 25.27, 55.3, 25.8, 55.95, 26.38, 56.4, 25.12, 56.35, 24.35, 56.75, 23.6, 58.6, 22.53, 59.8, 20.6, 58.7, 19.67, 57.7, 17, 54.1, 14.53, 49.13, 12.78, 45.03, 12.65, 43.45, 13.32, 43.25, 14.8, 42.95, 16.89, 42.55, 21.5, 39.18, 24.08, 38.05, 26.23, 36.45, 27.35, 35.7, 27.95, 35, 29.53, 35, 28.5, 34.5, 27.9, 34.3, 28.24, 33.62, 29.05, 33.1]),
    // 東亞的海（越南→中國→朝鮮半島→俄羅斯，東邊、南邊在圖外封口，再沿印尼、馬來半島回來）
    eas: pp([8.6, 104.7, 10.35, 107.08, 11.9, 109.15, 13.77, 109.23, 16.05, 108.22, 18.67, 105.7, 20.85, 106.7, 21.48, 109.12, 20.25, 110.2, 21.2, 110.4, 21.85, 111.97, 22.2, 113.55, 22.28, 114.17, 23.35, 116.68, 24.48, 118.08, 26.08, 119.6, 28, 120.7, 28.65, 121.45, 29.88, 121.9, 30.35, 121.25, 31.1, 121.85, 31.8, 121.9, 32.4, 121.2, 33.4, 120.6, 34.7, 119.4, 35.4, 119.55, 36.07, 120.38, 36.9, 122.4, 37.4, 122.7, 37.5, 122.1, 37.55, 121.4, 37.8, 120.75, 37.18, 119.95, 37.75, 119.15, 38.4, 117.6, 39, 117.72, 39.2, 118.5, 39.93, 119.6, 40.7, 120.85, 40.65, 122.2, 39.6, 121.5, 38.8, 121.25, 39, 121.8, 39.9, 124.3, 38.7, 125.4, 38, 125.7, 37.45, 126.6, 36.75, 126.15, 35.98, 126.7, 34.8, 126.38, 34.75, 127.75, 35.1, 129.04, 35.5, 129.4, 36.03, 129.4, 37.75, 128.9, 39.15, 127.45, 39.9, 127.6, 41.8, 129.8, 43.1, 131.9, 42.8, 132.9, 45, 136.5, 47.5, 139, 50, 141, 50, 165, -12, 165, -10, 125, -8.3, 115.5, -7.2, 112.7, -6.95, 110.4, -6.1, 106.8, -2, 105.8, 1.25, 103.8, 1.35, 104.2, 3.8, 103.33, 6.13, 102.25, 7.2, 100.6, 10.5, 99.2, 12.57, 99.96, 13.5, 100.5, 12.93, 100.88, 12.2, 102.5, 10.6, 104.18, 10, 105.08]),
    // 大西洋東岸＋北海＋波羅的海（西邊、南邊在圖外封口）
    atl: pp([36.1, -5.35, 35.78, -5.8, 34, -6.85, 33.6, -7.6, 31.5, -9.77, 30.4, -9.6, 27.9, -12.9, 23.7, -15.9, 20.9, -17.05, 14.7, -17.45, 9.5, -13.7, 8.48, -13.23, 6.3, -10.8, 4.37, -7.72, 5.3, -4, 5.55, -.2, 6.45, 3.4, 4.3, 6, 4.05, 9.7, .4, 9.45, -.65, 8.7, -6, 12.3, -8.8, 13.23, -12.6, 13.4, -15.2, 12.15, -22.95, 14.5, -26.65, 15.15, -33.9, 18.4, -34.83, 20, -33.95, 25.6, -33, 27.9, -29.85, 31.03, -25.95, 32.6, -23.85, 35.4, -19.85, 34.85, -17.9, 36.9, -15, 40.7, -40, 40, -40, -40, 70, -40, 71, 25, 69.65, 18.95, 67.28, 14.4, 63.7, 9, 60.4, 5.3, 58.97, 5.73, 58, 7.05, 59, 10.5, 57.7, 11.9, 55.6, 13, 56.66, 16.36, 59.33, 18.07, 62.4, 17.3, 65.58, 22.15, 65, 25.47, 63.1, 21.6, 60.45, 22.27, 60.17, 24.94, 59.93, 30.3, 59.4, 28, 59.44, 24.75, 58.38, 24.5, 57, 24.1, 57.75, 22.6, 56.5, 21, 55.7, 21.13, 54.6, 19.6, 54.4, 18.65, 54.18, 15.57, 53.9, 14.2, 54.18, 12.1, 54.33, 10.15, 56.15, 10.2, 57.73, 10.6, 57.12, 8.6, 55.47, 8.45, 53.87, 8.7, 53.5, 8.1, 53.45, 6.8, 52.95, 4.75, 52.1, 4.27, 51.95, 4.05, 51.4, 3.5, 51.05, 2.37, 50.95, 1.85, 50.73, 1.6, 49.5, .1, 49.65, -1.62, 48.65, -2, 48.4, -4.5, 47.75, -3.37, 47.27, -2.2, 46.15, -1.15, 45.6, -1.2, 44.65, -1.25, 43.48, -1.56, 43.35, -3, 43.47, -3.8, 43.55, -5.65, 43.37, -8.4, 42.88, -9.27, 42.23, -8.72, 41.15, -8.62, 38.7, -9.2, 37.02, -8.99, 37, -7.93, 36.53, -6.3, 36, -5.6])
  };
  GEO.isles = {
    sicily: pp([38.2, 15.55, 37.85, 15.29, 37.5, 15.09, 37.07, 15.29, 36.69, 15.13, 37.06, 14.25, 37.28, 13.55, 37.65, 12.59, 37.8, 12.43, 38.02, 12.5, 38.12, 13.36, 38.04, 14.02, 38.23, 15.24]),
    sardinia: pp([41.24, 9.15, 40.92, 9.5, 40.38, 9.7, 39.94, 9.7, 39.2, 9.55, 39.2, 9.1, 38.87, 8.64, 39.05, 8.4, 39.9, 8.5, 40.56, 8.3, 40.95, 8.22, 40.92, 8.7]),
    corsica: pp([43, 9.42, 42.7, 9.45, 42.1, 9.55, 41.6, 9.28, 41.39, 9.16, 41.67, 8.9, 41.92, 8.73, 42.57, 8.75, 42.68, 9.3]),
    crete: pp([35.6, 23.6, 35.34, 25.13, 35.2, 26.1, 35.3, 26.3, 35, 25.75, 34.93, 24.75, 35.25, 23.55]),
    cyprus: pp([35.7, 34.58, 35.34, 33.32, 35.4, 32.92, 35.2, 32.95, 34.75, 32.4, 34.67, 33.04, 34.56, 33.03, 34.9, 33.63, 35.12, 33.94, 34.96, 34.08]),
    mallorca: pp([39.95, 2.85, 39.87, 3.2, 39.6, 3.45, 39.35, 3.1, 39.55, 2.4, 39.75, 2.65]),
    britain: pp([51.13, 1.3, 50.82, -.14, 50.8, -1.1, 50.6, -2.45, 50.37, -4.14, 50.07, -5.7, 50.2, -5.5, 51.1, -4.2, 51.45, -2.6, 51.48, -3.18, 51.88, -5.3, 52.4, -4.08, 52.8, -4.7, 53.4, -4.4, 53.4, -3, 54.05, -2.9, 54.9, -3.3, 54.65, -4.9, 55.45, -4.63, 55.3, -5.8, 56.4, -5.5, 57.9, -5.2, 58.62, -5, 58.6, -3.5, 58.44, -3.1, 57.48, -4.22, 57.15, -2.1, 56.46, -2.97, 55.95, -3.2, 55.77, -2, 55, -1.45, 54.48, -.6, 53.75, -.33, 52.9, .3, 52.95, 1.3, 52.48, 1.75, 51.95, 1.28, 51.5, .6, 51.39, 1.38]),
    ireland: pp([54.6, -5.9, 53.35, -6.2, 52.33, -6.45, 51.9, -8.47, 51.45, -9.8, 52.1, -10.3, 52.6, -9.6, 53.27, -9.05, 53.95, -10, 54.27, -8.47, 55.37, -7.37, 55, -7.3]),
    srilanka: pp([9.8, 80.1, 8.57, 81.23, 7.72, 81.7, 6.12, 81.12, 5.92, 80.59, 6.03, 80.22, 6.93, 79.85, 8.03, 79.8, 8.98, 79.9]),
    taiwan: pp([25.13, 121.74, 25, 122, 23.98, 121.62, 22.75, 121.15, 21.9, 120.85, 22.62, 120.27, 23, 120.15, 24.05, 120.42, 24.25, 120.5, 24.85, 120.92, 25.3, 121.53]),
    hainan: pp([20.03, 110.33, 19.6, 111, 18.25, 109.5, 19.1, 108.65, 20, 109.7]),
    kyushu: pp([33.95, 130.95, 33.25, 131.65, 31.9, 131.45, 31, 130.67, 31.6, 130.2, 32.75, 129.85, 33.4, 129.55, 33.6, 130.4]),
    shikoku: pp([34.35, 134, 34, 134.6, 33.25, 134.2, 32.75, 133, 33.5, 132.4, 33.9, 132.8]),
    honshu: pp([34, 130.9, 34.35, 132.45, 34.6, 133.9, 34.68, 135.2, 34.2, 135.15, 33.45, 135.75, 34.5, 136.8, 34.7, 137.7, 34.6, 138.85, 35.3, 139.7, 35.7, 140.85, 38.25, 141, 39.65, 142, 40.5, 141.5, 41.5, 140.9, 41, 140, 39.7, 140.05, 37.9, 139.05, 37.5, 137.3, 36.6, 136.6, 36, 136, 35.65, 136.05, 35.5, 134.2, 35.55, 133, 34.4, 131.4]),
    hokkaido: pp([41.75, 140.7, 41.9, 140.1, 43.2, 141, 45.4, 141.7, 44.3, 145.3, 43.3, 145.6, 43, 144.4, 41.93, 143.25, 42.3, 141]),
    borneo: pp([1.55, 110.35, 3.17, 113.03, 4.4, 114, 4.95, 114.95, 5.98, 116.07, 6.9, 116.85, 5.84, 118.12, 4.25, 117.9, 3.3, 117.6, -1.25, 116.85, -3.5, 116, -3.45, 114.6, -3, 111, -.03, 109.33, 2, 109.6]),
    luzon: pp([18.6, 120.8, 18.4, 122.2, 16, 122.1, 14, 124.1, 12.6, 124.1, 13.6, 122, 14.4, 120.9, 15.5, 119.9, 16.5, 120.3, 18, 120.5]),
    mindanao: pp([9.8, 125.5, 7.2, 126.5, 6, 125.3, 6.9, 122.1, 8.5, 123.5])
  };
  GEO.rivers = {
    euphrates: GEO.euphrates, tigris: GEO.tigris, shatt: GEO.shatt,
    nile: pp([.43, 33.2, 1.5, 33, 3.6, 32.05, 4.85, 31.6, 9.5, 31.65, 13.2, 32.65, 15.6, 32.5, 17.7, 33.97, 19.55, 33.3, 18.55, 31.85, 19.17, 30.48, 21.8, 31.35, 22.35, 31.62, 24.09, 32.9, 24.98, 32.87, 25.7, 32.64, 26.16, 32.72, 26.05, 32.25, 26.56, 31.7, 27.18, 31.18, 28.1, 30.75, 29.07, 31.1, 30.05, 31.23, 30.2, 31.15]),
    nileRosetta: pp([30.2, 31.15, 30.8, 30.75, 31.46, 30.37]), nileDamietta: pp([30.2, 31.15, 30.9, 31.4, 31.52, 31.84]),
    indus: pp([35.3, 75.6, 35.75, 74.6, 34.9, 72.9, 34.1, 72.7, 33.9, 72.25, 32.95, 71.55, 31.83, 70.9, 30.4, 70.9, 28.9, 70.45, 27.7, 68.86, 27.3, 68.2, 25.4, 68.37, 24, 67.45]),
    ravi: pp([32.5, 75.8, 31.6, 74.3, 30.65, 72.85, 30.3, 71.9, 29.35, 71.05, 28.9, 70.45]),
    ganges: pp([29.95, 78.15, 26.45, 80.35, 25.43, 81.85, 25.3, 83, 25.6, 85.15, 25.25, 87, 24.8, 87.9, 23.8, 89.5, 22.3, 90.7]),
    yellow: pp([36.06, 103.8, 37.5, 105.2, 38.5, 106.3, 39.7, 106.8, 40.75, 108.6, 40.6, 110, 40.27, 111.15, 39.4, 111.2, 37.6, 110.6, 36, 110.5, 35.65, 110.6, 34.6, 110.3, 34.78, 111.2, 34.9, 112.4, 34.92, 113.65, 34.9, 114.35, 35, 115, 35.8, 115.5, 36.25, 116.2, 36.7, 117, 37.1, 117.9, 37.4, 118.4, 37.75, 119.15]),
    yangtze: pp([28.77, 104.6, 28.9, 105.45, 29.55, 106.55, 30.8, 108.4, 31, 109.6, 30.75, 111.3, 30.3, 112.2, 29.45, 113.1, 30.58, 114.3, 29.75, 116, 30.5, 117.05, 31.35, 118.38, 32.06, 118.78, 32.2, 119.45, 31.95, 120.3, 31.6, 121.5]),
    danube: pp([47.95, 8.5, 48.4, 10, 49, 12.1, 48.57, 13.45, 48.3, 14.3, 48.2, 16.4, 48.15, 17.1, 47.8, 18.75, 47.5, 19.05, 46, 18.7, 45.25, 19.85, 44.8, 20.45, 44.6, 22.5, 44, 22.9, 43.85, 25.95, 44.1, 27.3, 45.27, 27.97, 45.17, 28.8, 45.2, 29.65]),
    rhine: pp([47.6, 9.5, 47.56, 7.6, 48.58, 7.8, 49.5, 8.45, 50, 8.27, 50.36, 7.6, 50.94, 6.96, 51.22, 6.77, 51.85, 5.9, 51.92, 4.4, 51.95, 4.05]),
    seine: pp([48.3, 4.1, 48.85, 2.35, 49.44, 1.1, 49.45, .15]),
    tiber: pp([43.5, 12.1, 43.1, 12.4, 42.45, 12.4, 41.9, 12.48, 41.74, 12.25]),
    mississippi: pp([47.2, -95.2, 45, -93.3, 43, -91.2, 41.5, -90.6, 38.6, -90.2, 37, -89.2, 35.1, -90.1, 32.3, -90.9, 31, -91.6, 30, -90.1, 29.15, -89.25]),
    amazon: pp([-4.2, -73.2, -3.2, -68, -3.1, -60, -2.4, -54.7, -1.4, -51.5, -.1, -50])
  };
  GEO.world = {   // 世界圖：海當底色，這些是陸地（約 2～5 度精度）；地中海、黑海、裏海另外塗海
    afroEurasia: pp([36, -6, 34, -7, 31.5, -9.8, 28, -13, 21, -17, 14.7, -17.4, 10, -14, 6, -10, 4.4, -7.7, 5, -2, 6.4, 3.4, 4, 7, 4, 9.7, 0, 9.4, -6, 12.3, -12, 13.6, -17, 11.8, -23, 14.5, -29, 16.5, -34, 18.4, -34.8, 20, -33.9, 25.6, -30, 31, -26, 32.8, -24, 35.5, -19.8, 34.8, -15, 40.7, -10.5, 40.4, -4, 39.7, 0, 42.5, 2, 45.3, 5.3, 48.5, 10.4, 51.4, 11.8, 51.3, 10.4, 45, 11.6, 43.2, 13, 42.7, 15.6, 39.5, 19.6, 37.2, 22, 36.8, 24, 35.5, 27.2, 33.8, 29.9, 32.6, 28, 34.6, 24, 38, 21.5, 39.2, 16.9, 42.5, 12.7, 43.5, 12.8, 45, 14.5, 49, 17, 54, 19, 57.8, 22.5, 59.8, 23.6, 58.6, 25, 56.5, 26.4, 56.4, 24.4, 54.4, 24.8, 51.6, 26.1, 51.2, 25.6, 50.8, 26.6, 50.1, 29.4, 48, 30, 48.6, 29, 50.8, 27.2, 56.3, 25.6, 57.8, 25.2, 61.6, 24.8, 67, 23.6, 68.4, 22.5, 70, 21, 72.7, 19, 72.8, 15.5, 73.8, 12.9, 74.8, 10, 76.2, 8.1, 77.5, 9.3, 79.3, 13, 80.3, 16.2, 81.1, 17.7, 83.3, 20.2, 86.6, 21.6, 88.2, 22, 89.5, 22.4, 91.8, 20.2, 92.9, 16, 94.2, 16.5, 97.6, 14, 98.2, 8, 98.3, 5.5, 100.3, 2.5, 101.8, 1.3, 103.6, 1.4, 104.2, 3.8, 103.3, 6.1, 102.3, 7.2, 100.6, 10.5, 99.2, 13.5, 100.5, 12.2, 102.5, 10.5, 104, 8.6, 104.7, 10.4, 107.1, 12.3, 109.2, 16, 108.2, 18.7, 105.7, 20.9, 106.7, 21.5, 109.1, 20.3, 110.2, 21.9, 112, 22.3, 114.2, 23.4, 116.7, 24.5, 118.1, 26.1, 119.6, 28, 120.7, 29.9, 121.9, 31.2, 121.8, 32.4, 121.2, 34.7, 119.4, 36.1, 120.4, 37.4, 122.6, 37.5, 121.4, 37.8, 119.2, 39, 117.7, 39.9, 119.6, 40.7, 121, 39, 121.4, 39.9, 124.3, 37.5, 126.6, 34.8, 126.4, 35.1, 129, 38, 128.6, 39.9, 127.6, 41.8, 129.8, 43.1, 131.9, 46, 138, 50, 140.5, 53.5, 141.4, 54.5, 137, 59.3, 143, 59.6, 150.5, 62, 164, 60, 163, 61.5, 173, 64.5, 177, 65, 180, 70, 180, 70, 160, 72, 140, 73, 113, 77.7, 104, 72, 80, 68.5, 73, 69, 60, 68.5, 44, 66.5, 40, 69, 33, 71, 25, 69.6, 19, 67.3, 14.4, 63.6, 9, 60.4, 5.2, 58, 7, 59, 10.5, 57.7, 11.9, 55.6, 13, 56.6, 16.4, 59.3, 18.1, 62.4, 17.3, 65.6, 22.2, 65, 25.5, 63, 21.5, 60.4, 22.3, 60.2, 25, 59.9, 30.2, 59.4, 24.7, 57, 24.1, 57.7, 22.6, 56.5, 21, 54.6, 19.6, 54.4, 18.6, 54.2, 15.6, 54.2, 12.1, 54.3, 10.2, 56.2, 10.2, 57.7, 10.6, 57.1, 8.6, 55.5, 8.4, 53.9, 8.7, 53.5, 6.8, 52.9, 4.7, 51.4, 3.5, 51, 2.4, 49.5, .1, 49.65, -1.6, 48.6, -2, 48.4, -4.6, 47.3, -2.2, 46.2, -1.2, 43.5, -1.5, 43.4, -3.8, 43.6, -5.7, 43.4, -8.4, 42.9, -9.3, 41.1, -8.6, 38.7, -9.4, 37, -9, 37, -7.9, 36.5, -6.3]),
    northAmerica: pp([66, -168, 64.5, -165, 60, -164.5, 58.7, -157, 55, -163, 56, -158, 57.5, -152, 59.5, -151, 60.5, -146, 59.5, -139.5, 58, -136.5, 55, -131.5, 50, -127.5, 48.4, -124.7, 46.2, -124, 42, -124.3, 40.4, -124.4, 37.8, -122.5, 34.5, -120.5, 34, -118.5, 32.7, -117.2, 30, -115.8, 27.5, -114.2, 22.9, -109.9, 26, -111.3, 29, -112.9, 31.5, -114.8, 28, -111.3, 25.6, -109.4, 23.2, -106.4, 20.6, -105.3, 19.1, -104.3, 18, -102.2, 16.8, -99.9, 15.7, -96.5, 15, -92.5, 13.5, -89.8, 11, -85.7, 9.6, -84.6, 8.3, -82.7, 7.5, -80.4, 9, -79.5, 7.5, -77.8, 9.5, -78.9, 9.3, -82.2, 11, -83.7, 15, -83.2, 15.8, -86.5, 15.9, -88.6, 17.5, -88.2, 21.5, -87, 21.3, -89.7, 19.8, -90.6, 18.6, -91.8, 18.1, -94.5, 19.2, -96.1, 22.2, -97.8, 25.9, -97.2, 28, -97, 29.5, -94.7, 29.2, -90.1, 30.4, -88, 30.2, -85.7, 29.8, -84.2, 28, -82.8, 25.9, -81.7, 25.1, -80.4, 26.7, -80, 30.4, -81.4, 32.1, -80.9, 35.2, -75.5, 37, -76, 38.9, -74.9, 40.5, -74, 41.2, -72, 41.7, -70, 42.7, -70.6, 43.7, -70.2, 44.8, -66.9, 43.5, -65.6, 44.7, -63.5, 46.2, -60, 47, -64.8, 46.8, -71.2, 49.3, -67, 50.2, -66, 50.2, -60, 51.4, -57, 53.5, -56, 56.5, -61.5, 58.5, -62.8, 60.4, -64.6, 58.8, -69.3, 62.5, -74, 60.8, -78.2, 58.5, -77, 55.3, -77.7, 52, -79, 51.3, -80.5, 55, -82.3, 57, -92.4, 59, -94.8, 61, -94, 63.5, -90.5, 66.5, -86, 68, -81, 69.7, -82, 68.5, -90, 68.3, -98, 67.8, -109, 68.8, -115, 69.5, -121, 69.3, -131, 69.5, -138, 70.2, -145, 71.3, -156.8, 70.5, -160, 68.9, -166.2, 67.5, -164]),
    southAmerica: pp([8, -77.4, 7, -77.8, 3.8, -77.3, 1.6, -79, -1, -80.4, -2.5, -80, -4.4, -81.3, -6, -81, -9, -78.6, -13, -76.4, -15.4, -75.2, -18.5, -70.3, -23.6, -70.4, -27, -70.8, -33, -71.6, -37, -73.2, -41.5, -73.8, -45, -74.4, -50, -75.4, -53, -74, -54.9, -67.3, -52.4, -68.4, -48, -65.9, -45, -67.2, -42.6, -63.7, -41, -65, -39, -62.3, -38.6, -58, -36.3, -56.7, -34.8, -55, -33.7, -53.4, -31, -50.7, -28.5, -48.8, -25.5, -48.5, -23, -43.2, -22.9, -41.9, -20, -40.1, -16, -39, -13, -38.5, -10, -36, -8, -34.9, -5.2, -35.5, -3, -39.5, -2.5, -44.3, -1, -48.5, 0, -50, 2, -51, 4.6, -52.3, 5.8, -55.2, 6.8, -58.2, 8.5, -60.6, 10.7, -61.6, 10.6, -64.3, 10.5, -66.9, 11.5, -70, 12.5, -71.7, 11.2, -74.2, 10.4, -75.5, 9.4, -76.2, 8.6, -77.2]),
    australia: pp([-10.7, 142.5, -12.5, 141.6, -16.5, 141.4, -17.5, 140.5, -16, 137, -14.8, 135.5, -12.2, 136.8, -11.1, 132.5, -12.4, 130.8, -14.9, 128.4, -14, 126.5, -16.5, 123, -18, 122.2, -20.3, 118.6, -21.8, 114.1, -24.8, 113.6, -28.8, 114.6, -31.9, 115.7, -34.4, 115.1, -35, 117.9, -33.9, 122, -32.2, 127.5, -31.7, 131.2, -32.2, 133.6, -34.9, 135.7, -32.9, 137.8, -34.9, 138.5, -37.5, 140.2, -38.4, 142.5, -37.8, 144.9, -39.1, 146.4, -37.8, 149.9, -35, 150.7, -33.9, 151.3, -32.5, 152.5, -28.2, 153.6, -25, 152.8, -22.5, 150.4, -19.3, 146.8, -16.9, 145.8, -14.5, 144.5, -14.2, 143.5]),
    greenland: pp([60, -43.5, 61, -48, 65, -52.5, 69, -51, 70.6, -54.5, 72.8, -56.5, 76.5, -68.5, 78.5, -73, 82, -60, 83.6, -32, 81.5, -12, 77.5, -18.5, 74, -20, 70.3, -22, 68.5, -27, 65.5, -37, 62.5, -42]),
    baffin: pp([62.3, -70.5, 66.5, -61.8, 70, -67, 73.6, -79.5, 72.8, -89, 70, -84, 68.2, -75, 65.2, -73, 64.2, -77.5, 62.6, -74]),
    iceland: pp([66.5, -23, 66.5, -15, 65, -13.5, 63.4, -18, 63.8, -22.7, 65, -24]),
    madagascar: pp([-12, 49.3, -15.5, 50.5, -20, 48.9, -25.4, 47.1, -25.2, 44, -21.5, 43.5, -16.2, 44.4, -15.4, 47.2]),
    sumatra: pp([5.6, 95.3, 2, 98.7, -.95, 100.3, -3.8, 102.3, -5.9, 105, -3, 106, -1, 104.5, 1, 103, 2.5, 101, 4, 98.5]),
    java: pp([-6, 106, -6.1, 106.8, -6.95, 110.4, -6.9, 112.6, -7.6, 114.4, -8.7, 114.4, -8.2, 111, -7.7, 109, -7.4, 106.4, -6.8, 105.3]),
    newGuinea: pp([-.8, 131.2, -1.4, 137.5, -2.6, 140.7, -5.4, 145.8, -6.8, 147.8, -10.7, 150.5, -10.3, 148, -8.1, 146, -9, 143.4, -8.1, 138.9, -5, 137.6, -4, 133, -2.6, 132.1]),
    nzNorth: pp([-34.4, 172.7, -36.8, 174.8, -37.7, 178.5, -39.6, 177, -41.6, 175.2, -39.3, 173.8, -38, 174.6]),
    nzSouth: pp([-40.5, 172.7, -41.3, 174.2, -43.6, 172.8, -46.6, 169, -46.2, 166.6, -43.9, 168.8, -41.8, 171.4]),
    cuba: pp([21.9, -84.9, 23.1, -82.4, 23.2, -80.6, 21.2, -76.4, 20.1, -74.2, 19.9, -77.7, 21.6, -79.5, 21.8, -83.5]),
    hispaniola: pp([19.9, -72.8, 19.7, -70, 18.5, -68.4, 18.2, -71.2, 18.3, -74.4])
  };
  ['britain', 'ireland', 'srilanka', 'taiwan', 'hainan', 'kyushu', 'shikoku', 'honshu', 'hokkaido', 'borneo', 'luzon', 'mindanao'].forEach(k => { GEO.world[k] = GEO.isles[k]; });

  // 通用地圖：m＝{ bounds:{lon:[西,東], lat:[南,北]}, world?, land?, rivers:['nile', {k|pts, w, f}], areas:[{pts, f, op}], routes:[{pts, f}],
  //   labels:[{t, lat, lon, size, f, rot}], cities:[{n, lat, lon, main, side:'l'|'r', dy}], taiwan:false（不畫「臺灣在哪」）, cap, alt }
  // 經度一度的長度乘 cos(中間緯度)；沒有 bounds 的舊資料（第 1 話）走 mapMeso。
  A.map = function (m) {
    if (!m.bounds) return A.mapMeso(m);
    const b = m.bounds, W = 760, mid = (b.lat[0] + b.lat[1]) / 2, kLon = W / (b.lon[1] - b.lon[0]), kLat = kLon / Math.cos(mid * Math.PI / 180);
    const H = r1((b.lat[1] - b.lat[0]) * kLat), px = (lat, lon) => [r1((lon - b.lon[0]) * kLon), r1((b.lat[1] - lat) * kLat)];
    const P = a => a.map(p => px(p[0], p[1]).join(',')).join(' '), SEA = C.g5, LAND = col(m.land) || C.brick3;
    const world = m.world || b.lon[1] - b.lon[0] > 90;
    let s;
    if (world) { s = rect(0, 0, W, H, SEA); Object.keys(GEO.world).forEach(k => { s += poly(P(GEO.world[k]), LAND); }); ['med', 'marmara', 'black', 'caspian'].forEach(k => { s += poly(P(GEO.seas[k]), SEA); }); }
    else { s = rect(0, 0, W, H, LAND); Object.keys(GEO.seas).forEach(k => { s += poly(P(GEO.seas[k]), SEA); }); Object.keys(GEO.isles).forEach(k => { s += poly(P(GEO.isles[k]), LAND); }); }
    (m.areas || []).forEach(a => { s += poly(P(a.pts), col(a.f) || C.g3, `opacity="${a.op || .6}"`); });
    const line = (a, w, f, dash) => { let d = ''; for (let i = 0; i < a.length - 1; i++) { const p = px(a[i][0], a[i][1]), q = px(a[i + 1][0], a[i + 1][1]); if (!dash) { d += cap(p[0], p[1], q[0], q[1], w, f); continue; } const L = Math.hypot(q[0] - p[0], q[1] - p[1]), n = Math.max(1, Math.round(L / 22)); for (let j = 0; j < n; j++) { const t0 = j / n, t1 = (j + .55) / n; d += cap(p[0] + (q[0] - p[0]) * t0, p[1] + (q[1] - p[1]) * t0, p[0] + (q[0] - p[0]) * t1, p[1] + (q[1] - p[1]) * t1, w, f); } } return d; };
    (m.rivers || []).forEach(r => { const a = typeof r === 'string' ? GEO.rivers[r] : (r.pts || GEO.rivers[r.k]); if (a) s += line(a, (r && r.w) || 6, col(r && r.f) || C.g7); });
    (m.routes || []).forEach(r => { s += line(r.pts, r.w || 5, col(r.f) || C.red, true); });
    (m.labels || []).forEach(l => { const p = px(l.lat, l.lon); s += txt(p[0], p[1], l.t, l.size || 22, col(l.f) || C.ink, l.rot ? { tr: `rotate(${l.rot} ${p[0]} ${p[1]})` } : null); });
    (m.cities || []).forEach(c => { const p = px(c.lat, c.lon), dir = c.side === 'l' ? -1 : 1; s += circ(p[0], p[1], c.main ? 15 : 7, c.main ? 'url(#cm-redglow)' : 'none') + circ(p[0], p[1], c.main ? 8 : 6, c.main ? C.red : C.ink) + txt(p[0] + dir * 14, p[1] + 8 + (c.dy || 0), c.n, c.main ? 26 : 22, C.ink, { a: dir < 0 ? 'end' : 'start' }); });
    if (m.taiwan !== false) {   // 臺灣在哪：在圖裡就標出來，不在就在圖邊畫箭頭指過去
      const t = px(23.7, 121), inside = t[0] > 20 && t[0] < W - 20 && t[1] > 20 && t[1] < H - 20;
      if (inside) s += circ(t[0], t[1], 6, C.red) + txt(t[0] + 12, t[1] + 26, '臺灣', 20, C.red, { a: 'start' });
      else {
        const cx = W / 2, cy = H / 2, dx = t[0] - cx, dy = t[1] - cy, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, k = Math.min((W / 2 - 34) / Math.abs(ux || 1e-9), (H / 2 - 34) / Math.abs(uy || 1e-9)), ex = cx + ux * k, ey = cy + uy * k, ang = Math.atan2(uy, ux) * 180 / Math.PI;
        s += `<g transform="translate(${r1(ex)} ${r1(ey)}) rotate(${r1(ang)})">` + poly('-34,-7 -6,-7 -6,-16 14,0 -6,16 -6,7 -34,7', C.red) + `</g>`;
        const lx = Math.max(110, Math.min(W - 110, ex - ux * 40)), ly = Math.max(30, Math.min(H - 14, ey - uy * 40 + (uy > .3 ? -14 : 26)));
        s += rect(lx - 104, ly - 21, 208, 30, C.cream, 6, 'opacity=".9"') + txt(lx, ly, '往這邊很遠很遠才是臺灣', 17, C.wood);
      }
    }
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${QE(m.alt || '')}" style="display:block;width:100%;height:auto">${s}</svg>`;
  };
  const QE = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------- 擴充：每一話自己的場景／角色／道具／圖示／姿勢／版面／河流，寫在自己的 data 檔 ----------
  // ComicArt.extend({ scenes:{v2e3_agora(w,h,o){…return {bg,fg}}}, cast:{v2e3_guide:{name, skin:'skinB', top:'g5', skirt:'gold', hair:'curly', hat:'band', hatC:'red', r:22, k:.95}}, props:{…}, icons:{…} })
  // 名字重複會丟錯（不准蓋掉共用的或別話的）。cast 的顏色可寫 C 的名字（g7、skinB…）或 #色碼。
  const COLOR_KEYS = ['skin', 'top', 'skirt', 'bottom', 'robe', 'trim', 'leg', 'sleeve', 'shoe', 'stripe'];
  function castOf(o) { const sp = Object.assign({ r: 22, k: 1, shoe: C.ink }, o); COLOR_KEYS.forEach(k => { if (sp[k]) sp[k] = col(sp[k]); }); if (!sp.skin) sp.skin = C.skin; if (!sp.robe && !sp.leg) sp.leg = sp.skin; return sp; }
  A.extend = function (o) {
    const REG = { scenes: SCENES, cast: CAST, props: PROPS, icons: ICONS, poses: POSES, expr: EXPR, parts: PARTS, holds: HOLDS, layouts: A.LAYOUTS, rivers: GEO.rivers };
    Object.keys(o || {}).forEach(k => {
      const R = REG[k]; if (!R) throw new Error('ComicArt.extend：不認得「' + k + '」，只能用 ' + Object.keys(REG).join('、'));
      Object.keys(o[k]).forEach(n => { if (R[n]) throw new Error(`ComicArt.extend：${k}.${n} 已經有了，換個名字（前面加這一話的編號，例如 v2e3_${n}）`); R[n] = k === 'cast' ? castOf(o[k][n]) : o[k][n]; });
    });
    return A;
  };
  A.k = { C, r1, col, at, place, rect, poly, circ, ell, path, txt, cap, sh, both, groundShadow, seeded, wedges, palm, reedTuft, brickWall, sack, jar, lamp, zoom, puff, ziggurat, tablet, notebook, car, scooter, stele, actor: o => actor(o), prop: x => prop(x) };
  A.PROPS = PROPS; A.PARTS = PARTS; A.HOLDS = HOLDS;

  A.POSES = POSES; A.EXPR = EXPR; A.CAST = CAST;
  if (typeof module !== 'undefined' && module.exports) module.exports = A;
  root.ComicArt = A;
})(typeof window !== 'undefined' ? window : globalThis);
