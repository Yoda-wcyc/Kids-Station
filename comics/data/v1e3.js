/* 世界史漫畫 第 1 冊 古文明・第 3 話（只有資料＋這一話自己的圖形）。國中社會會再學到：古代文明的發展（印度河流域文明是延伸）。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  const CA = root.ComicArt, K = CA && CA.k;
  if (K) {
    const { C, rect, poly, circ, ell, path, cap, both, groundShadow, place, brickWall, seeded, puff, jar } = K;
    const MUD = '#D9C9A2', WATER = '#7FA8A6', CH = '#4A3A2C';
    // 有蓋的排水溝（原點＝溝底中央）：W 長、open:[a,b] 掀開的那段（本地 x）
    const drain = x => {
      const W = x.W || 600, o = x.open; let s = rect(-W / 2, -26, W, 26, CH) + rect(-W / 2, -10, W, 8, WATER, 0, 'opacity=".55"');
      for (let xx = -W / 2; xx < W / 2 - 4; xx += 50) {
        if (o && xx + 46 > o[0] && xx < o[1]) continue;
        s += rect(xx + 1, -40, 46, 16, C.brick2, 2) + rect(xx + 1, -40, 46, 5, C.brick3, 1);
      }
      if (o) s += rect(o[0] + 6, -18, o[1] - o[0] - 12, 4, C.g2, 2, 'opacity=".7"') + rect(o[1] + 6, -58, 46, 14, C.brick2, 2) + rect(o[1] + 10, -72, 46, 14, C.brick3, 2);
      return place(x, s);
    };
    // 現代：颱風天的臺灣巷子（sunny:1＝雨停了）
    function rain(w, h, o) {
      o = o || {}; const sunny = !!o.sunny, gy = h * (o.hz || .5), cy = h * (o.curb || .74), wy = h * (o.water || .8), gx = w * (o.gx || .5), rnd = seeded(o.seed || 31);
      let s = rect(0, 0, w, h, sunny ? C.sky : '#A3B0A8');
      if (sunny) s += circ(w * .84, h * .14, Math.min(w, h) * .32, 'url(#cm-sun)') + circ(w * .84, h * .14, Math.min(w, h) * .06, '#FFF8DC');
      else [[.12, .08, 1], [.48, .04, 1.3], [.86, .1, 1.1]].forEach(([a, b, k]) => { s += puff(w * a, h * b, 46 * k, '#8E9C94'); });
      const cs = ['#C9C3AE', '#B7C2B0', '#D6CDB4', '#AFBCAA'];
      for (let x = -20, i = 0; x < w; i++) {
        const bw = 130 + rnd() * 90, bh = gy * (.55 + rnd() * .35);
        s += rect(x, gy - bh, bw, bh + 2, cs[i % 4]);
        for (let yy = gy - bh + 16; yy < gy - 90; yy += 40) for (let xx = x + 14; xx < x + bw - 30; xx += 38) s += rect(xx, yy, 22, 24, sunny ? C.g2 : '#7F8E86') + rect(xx - 2, yy + 10, 26, 2, C.ink, 0, 'opacity=".45"');
        s += rect(x + 10, gy - 62, bw - 20, 62, '#8C9690');
        for (let yy = gy - 56; yy < gy; yy += 9) s += rect(x + 10, yy, bw - 20, 2, C.ink, 0, 'opacity=".25"');   // 鐵捲門
        x += bw + 6;
      }
      s += rect(0, gy, w, cy - gy, C.paper3) + rect(0, cy, w, 10, C.paper2) + rect(0, cy + 10, w, h - cy, C.road);
      s += rect(gx - 46, cy + 10, 92, 20, C.ink);
      for (let i = 0; i < 7; i++) s += rect(gx - 40 + i * 13, cy + 13, 6, 14, C.basalt3);   // 水溝蓋
      let fg = '';
      if (sunny) { s += ell(w * .56, h * .97, 80, 8, C.g3, 'opacity=".5"'); }
      else {
        fg += rect(0, wy, w, h - wy, 'rgba(110,140,132,.62)');
        for (let i = 0; i < 12; i++) fg += rect((i * 97 + 20) % w, wy + 8 + (i % 4) * (h - wy) / 4.4, 40 + (i % 3) * 20, 3, C.cream, 2, 'opacity=".55"');
        if (o.trash !== false) {   // 卡在水溝蓋上的落葉和飲料杯
        [[-34, 0], [-10, 6], [22, -2], [40, 8]].forEach(([dx, dy], i) => { fg += ell(gx + dx, wy + 2 + dy, 12, 5, i % 2 ? C.g5 : C.g7, `transform="rotate(${i * 30 - 20} ${gx + dx} ${wy + 2 + dy})"`); });
        fg += `<g transform="translate(${gx + 2} ${wy - 2}) rotate(80)">` + teaCup() + `</g>`; }
        for (let i = 0; i < 90; i++) { const x = rnd() * (w + 120) - 60, y = rnd() * h, L = 26 + rnd() * 30; fg += cap(x, y, x - L * .3, y + L, 2.4, 'rgba(240,244,236,.45)'); }
      }
      return { bg: s, fg };
    }
    // 珍珠奶茶杯（原點＝杯底中央）
    const teaCup = () => rect(-2, -66, 5, 30, C.red, 2) + poly('-15,-42 15,-42 11,0 -11,0', C.cream, 'opacity=".9"') + poly('-13,-30 13,-30 11,0 -11,0', '#C8A27A') + [[-6, -6], [2, -8], [7, -4], [-2, -3]].map(([x, y]) => circ(x, y, 2.6, C.ink)).join('') + rect(-16, -45, 32, 5, C.paper3, 2);
    // 印度河流域的巷子：磚牆、平屋頂、牆腳有蓋排水溝
    function lane(w, h, o) {
      o = o || {}; const hz = h * (o.hz || .62), rnd = seeded(o.seed || 41);
      let s = rect(0, 0, w, h, o.sky ? K.col(o.sky) : C.sky);
      if (o.sun !== false) s += circ(w * .82, h * .12, Math.min(w, h) * .3, 'url(#cm-sun)');
      for (let x = -10, i = 0; x < w; i++) {
        const bw = 150 + rnd() * 110, top = hz * (.12 + rnd() * .28);
        s += brickWall(x, top, bw, hz - top, i % 2 ? C.brick3 : '#D8C49C', C.brick, 3 + i);
        s += rect(x - 3, top - 10, bw + 6, 12, C.brick2, 2) + rect(x + bw - 8, top, 8, hz - top, 'rgba(21,23,20,.14)');
        if (i % 2) s += rect(x + bw * .4, hz - (hz - top) * .36, Math.min(42, bw * .2), (hz - top) * .36, '#5A4330', 2);   // 門（多半開在小巷）
        s += rect(x + bw * .18, top + 26, 18, 12, C.ink, 2, 'opacity=".8"');   // 高高的小窗
        if (i % 2 === 0) s += cap(x + bw * .72, hz - 40, x + bw * .72 + 10, hz - 6, 9, C.clay);   // 牆上的排水管
        x += bw;
      }
      s += rect(0, hz, w, h - hz, MUD);
      s += drain({ x: w / 2, y: hz + 28, W: w + 60 });
      return { bg: s };
    }
    // 摩亨佐達羅大遠景：筆直的大街、兩旁沒窗的磚牆、遠方的高台和印度河
    function city(w, h) {
      const hz = h * .36, vx = w * .56;
      let s = rect(0, 0, w, h, C.sky) + circ(w * .82, h * .1, w * .22, 'url(#cm-sun)') + circ(w * .82, h * .1, w * .05, '#FFF8DC');
      s += rect(0, hz - 40, w, 44, C.g3) + path(`M0 ${hz - 26} Q${w * .5} ${hz - 36} ${w} ${hz - 22} L${w} ${hz - 6} Q${w * .5} ${hz - 18} 0 ${hz - 10}Z`, C.g5);
      s += K.prop({ k: 'reeds', x: w * .9, y: hz - 4, n: 6 }) + K.prop({ k: 'palm', x: w * .97, y: hz, H: 110 });
      s += rect(0, hz, w, h - hz, C.sand);
      // 西邊的高台（城堡區）
      s += both(path(`M0 ${hz + 40} L0 ${hz - 70} L${w * .06} ${hz - 104} L${w * .4} ${hz - 104} L${w * .48} ${hz + 40}Z`, C.brick2), 'cm-warm');
      [[.02, .08, 46], [.11, .14, 64], [.26, .09, 40], [.36, .06, 52]].forEach(([a, b, hh]) => { s += both(rect(w * a, h * 0 + hz - 104 - hh, w * b, hh + 2, C.brick3)) + rect(w * a, hz - 104 - hh, w * b, 7, C.brick); });
      // 下城：大街＋兩邊的房子
      const T = hz + 12, L = y => vx - 18 - (y - T) / (h - T) * (vx - 18 - w * .12), R = y => vx + 18 + (y - T) / (h - T) * (w * .95 - vx - 18);
      s += poly(`${vx - 18},${T} ${vx + 18},${T} ${w * .95},${h} ${w * .12},${h}`, MUD);
      const rnd = seeded(7);
      // 牆後面的平屋頂房子
      for (let i = 0; i < 9; i++) {
        const t = (i + .5) / 9, y = T + (h * .6 - T) * t * t, k = .25 + t * 1.3;
        s += both(rect(L(y) - 150 * k - 40 * k * rnd(), y - 120 * k - 30 * rnd() * k, 150 * k, 150 * k, i % 2 ? C.brick3 : '#D8C49C')) + rect(L(y) - 150 * k, y - 120 * k - 6, 150 * k, 6 * k + 2, C.brick2);
        s += both(rect(R(y) + 30 * k * rnd(), y - 116 * k - 30 * rnd() * k, 150 * k, 150 * k, i % 2 ? '#D8C49C' : C.brick3)) + rect(R(y) + 10 * k, y - 116 * k - 6, 140 * k, 6 * k + 2, C.brick2);
      }
      // 兩邊沿街的牆（大街這一面幾乎不開窗）
      const lanes = [.08, .2, .38, .62];
      s += poly(`${vx - 18},${T - 18} ${vx - 18},${T} ${w * .12},${h} 0,${h} 0,${h * .44}`, C.brick);
      s += poly(`${vx + 18},${T - 18} ${vx + 18},${T} ${w * .95},${h} ${w},${h} ${w},${h * .46}`, C.brick2);
      s += poly(`${vx - 18},${T - 18} ${vx - 18},${T - 12} 0,${h * .46} 0,${h * .44}`, C.brick3) + poly(`${vx + 18},${T - 18} ${vx + 18},${T - 12} ${w},${h * .48} ${w},${h * .46}`, C.brick3);
      for (let f = .1; f < .96; f += .085) s += cap(vx - 18, T - 18 + 18 * f, 0, h * .44 + h * .56 * f, 3, 'rgba(140,105,70,.3)') + cap(vx + 18, T - 18 + 18 * f, w, h * .46 + h * .54 * f, 3, 'rgba(140,105,70,.3)');   // 磚縫
      lanes.forEach(u => {   // 小巷口（棋盤的另一條線）
        const xa = (vx - 18) * (1 - u), xb = (vx - 18) * (1 - u - .035);
        const yl = x => T + (vx - 18 - x) / (vx - 18 - w * .12) * (h - T), yt = x => T - 18 + (vx - 18 - x) / (vx - 18) * (h * .44 - T + 18);
        if (xa > w * .12) s += poly(`${xa},${yt(xa)} ${xb},${yt(xb)} ${xb},${yl(xb)} ${xa},${yl(xa)}`, C.wood, 'opacity=".55"');
        const xr = vx + 18 + (w - vx - 18) * u, xr2 = vx + 18 + (w - vx - 18) * (u + .035), yr = x => T + (x - vx - 18) / (w * .95 - vx - 18) * (h - T), ytr = x => T - 18 + (x - vx - 18) / (w - vx - 18) * (h * .46 - T + 18);
        if (xr2 < w * .95) s += poly(`${xr},${ytr(xr)} ${xr2},${ytr(xr2)} ${xr2},${yr(xr2)} ${xr},${yr(xr)}`, C.wood, 'opacity=".55"');
      });
      // 沿街兩邊的有蓋排水溝
      for (let i = 0; i < 26; i++) {
        const t0 = i / 26, t1 = (i + .8) / 26, y0 = T + (h - T) * t0 * t0, y1 = T + (h - T) * t1 * t1, wd = 3 + 16 * t1;
        s += cap(L(y0) + 4 + 10 * t0, y0, L(y1) + 4 + 10 * t1, y1, wd, i % 2 ? C.brick2 : C.paper3) + cap(R(y0) - 4 - 10 * t0, y0, R(y1) - 4 - 10 * t1, y1, wd, i % 2 ? C.brick2 : C.paper3);
      }
      return { bg: s };
    }
    // 剖面：浴室的水 → 管子 → 街上的排水溝
    function cut(w, h) {
      const gy = h * .62, wx = w * .56, dx = w * .82;
      let s = rect(0, 0, w, h, C.sky);
      s += brickWall(0, h * .1, wx, gy - h * .1, C.brick3, C.brick, 5) + rect(0, h * .08, wx + 30, 16, C.brick2) + rect(wx, h * .08, 30, gy - h * .08, C.brick2);
      s += brickWall(wx + 30, h * .26, w - wx - 30, gy - h * .26, '#D8C49C', C.brick, 8) + rect(wx + 30, h * .24, w - wx - 30, 12, C.brick2);
      s += rect(wx + 30, gy - 30, w - wx - 30, 30, MUD);
      s += poly(`0,${gy - 40} ${wx},${gy - 26} ${wx},${gy} 0,${gy}`, C.brick2);
      for (let x = 10; x < wx; x += 40) s += rect(x, gy - 40 + x / wx * 14 + 3, 34, 4, C.brick3, 1);
      s += jar(w * .14, gy - 38, .7, C.clay2) + rect(wx - 34, gy - 30, 22, 6, C.ink, 2);   // 地上的排水口
      s += rect(0, gy, w, h - gy, '#B49A78');
      const rnd = seeded(4); for (let i = 0; i < 40; i++) s += circ(rnd() * w, gy + 10 + rnd() * (h - gy - 10), 2 + rnd() * 3, C.clay2, 'opacity=".5"');
      s += rect(dx - 40, gy - 2, 80, 64, C.brick2, 4) + rect(dx - 30, gy + 6, 60, 50, CH) + rect(dx - 30, gy + 36, 60, 20, WATER);
      s += rect(dx - 50, gy - 14, 100, 16, C.brick3, 3) + rect(dx - 50, gy - 14, 100, 5, C.paper3, 2);   // 溝蓋
      s += cap(wx - 22, gy - 26, wx + 40, gy + 12, 16, C.clay) + cap(wx + 40, gy + 12, dx - 32, gy + 30, 16, C.clay) + cap(wx - 22, gy - 26, wx + 40, gy + 12, 6, '#8C5A3C');
      [[wx + 10, gy - 6], [wx + 60, gy + 14], [wx + 100, gy + 20], [dx, gy + 30]].forEach(([x, y]) => { s += path(`M${x} ${y - 9} Q${x + 7} ${y} ${x} ${y + 6} Q${x - 7} ${y} ${x} ${y - 9}Z`, '#BFD7DF'); });
      return { bg: s };
    }
    // 大浴池（從高處往下看）：長方形水池、兩頭有階梯
    function bath(w, h) {
      let s = rect(0, 0, w, h, C.brick3);
      for (let y = 8, j = 0; y < h; y += 26, j++) for (let x = (j % 2) * 30 - 30; x < w; x += 60) s += rect(x, y, 56, 22, C.brick, 2, 'opacity=".35"');
      s += rect(0, 0, w, h * .1, C.brick2);
      for (let x = 20; x < w; x += 80) s += rect(x, h * .02, 40, h * .08, C.ink, 3, 'opacity=".7"');   // 四周的小房間
      const tx = w * .13, tw = w * .74, ty = h * .2, th = h * .56;
      s += both(rect(tx - 16, ty - 16, tw + 32, th + 32, C.brick2, 4), 'cm-warm');
      s += rect(tx - 5, ty - 5, tw + 10, th + 10, C.basalt2, 2);   // 磚縫外面那層瀝青
      s += rect(tx, ty, tw, th, '#6C9C92') + rect(tx, ty, 14, th, 'rgba(21,23,20,.18)');
      for (let i = 0; i < 9; i++) s += rect(tx + 20 + (i * 53) % (tw - 80), ty + 60 + i * th / 10, 40 + (i % 3) * 16, 3, C.g2, 2, 'opacity=".7"');
      for (let i = 0; i < 7; i++) {
        const sw = tw * .42, sx = tx + (tw - sw) / 2;
        s += rect(sx, ty - 14 + i * 14, sw, 14, i % 2 ? C.brick : C.brick2) + rect(sx, ty + th - i * 14, sw, 14, i % 2 ? C.brick : C.brick2);
      }
      return { bg: s };
    }
    CA.extend({
      scenes: {
        v1e3_rain: rain, v1e3_lane: lane, v1e3_city: city, v1e3_cut: cut, v1e3_bath: bath,
      },
      cast: {
        v1e3_daro: { name: '達若（虛構）', skin: 'skinB', top: 'cream', skirt: 'clay2', sleeve: 'skinB', leg: 'skinB', shoe: 'wood', hair: 'short', hat: 'band', hatC: 'red', k: .94 },
        v1e3_dad: { name: '達若的爸爸（虛構）', skin: 'skinC', top: 'clay3', skirt: 'cream', sleeve: 'skinC', leg: 'skinC', shoe: 'wood', hair: 'short', beard: 1, r: 19, k: 1.16 },
        v1e3_trader: { name: '商人（虛構）', skin: 'skinB', robe: 'cream', trim: 'red', shoe: 'wood', hair: 'short', beard: 1, r: 19, k: 1.14 }
      },
      holds: {
        v1e3_tea: () => `<g transform="translate(4 14)">` + teaCup() + `</g>`,
        v1e3_brick: () => rect(-26, -14, 52, 26, C.clay, 3) + rect(-26, -14, 52, 7, C.clay3, 2)
      },
      props: {
        v1e3_drain: drain,
        v1e3_kiln: x => place(x, groundShadow(0, 3, 90, 9) + both(path('M-80 0 Q-86 -120 0 -130 Q86 -120 80 0Z', C.brick2), 'cm-warm') + path('M-30 0 L-30 -40 Q0 -62 30 -40 L30 0Z', C.ink) + path('M0 -44 Q18 -20 12 0 L-12 0 Q-18 -20 0 -44Z', C.red) + puff(10, -150, 22, C.paper3) + puff(30, -190, 16, C.paper3)),
        v1e3_dry: x => { const n = x.n || 3, m = x.m || 4; let s = ''; for (let j = 0; j < n; j++) for (let i = 0; i < m; i++) s += rect(-m * 34 + i * 68 + j * 10, -j * 18 - 14, 50, 14, C.clay3, 2) + rect(-m * 34 + i * 68 + j * 10, -j * 18 - 14, 50, 4, C.brick3, 1); return place(x, s); },
        v1e3_peel: x => place(x, path('M0 0 Q-20 -6 -26 -24 Q-14 -14 0 -16 Q14 -14 26 -24 Q20 -6 0 0Z', C.gold) + ell(0, -10, 8, 9, '#E8D27A')),
        v1e3_scale: x => {
          let s = rect(-26, -8, 52, 8, C.wood, 2) + rect(-4, -150, 8, 146, C.wood) + rect(-84, -152, 168, 7, C.wood, 3) + circ(0, -150, 7, C.gold);
          [-76, 76].forEach(px => { s += cap(px, -148, px - 14, -96, 2, C.ink) + cap(px, -148, px + 14, -96, 2, C.ink) + ell(px, -94, 28, 7, C.gold); });
          s += rect(-90, -112, 13, 13, '#D8CBB0', 2) + rect(-75, -106, 9, 9, '#D8CBB0', 2) + rect(-90, -112, 13, 3, '#EDE3CC');
          s += path('M62 -98 Q58 -116 70 -122 L66 -130 Q76 -126 86 -130 L82 -122 Q94 -116 90 -98Z', C.paper2);
          return place(x, s);
        }
      },
      icons: {
        // 印章：方形石頭、上面一排符號、下面像獨角獸的動物（照博物館館藏的樣子簡化）
        v1e3_seal() {
          let s = rect(0, 0, 120, 90, C.g7) + rect(26, 6, 68, 78, '#E8DEC6', 6) + rect(30, 10, 60, 70, '#D6C8A8', 4);
          [[36, 14, 4, 12], [44, 14, 9, 4], [44, 22, 9, 4], [58, 14, 4, 12], [66, 16, 8, 8], [80, 14, 4, 12]].forEach(r => { s += rect(r[0], r[1], r[2], r[3], C.wood, 1); });
          s += ell(56, 54, 18, 9, C.wood) + rect(42, 56, 4, 16, C.wood) + rect(50, 58, 4, 14, C.wood) + rect(60, 58, 4, 14, C.wood) + rect(68, 56, 4, 16, C.wood);
          s += path('M70 50 Q78 38 84 42 Q86 48 80 52 Q76 56 70 56Z', C.wood) + path('M80 42 L92 30 L83 44Z', C.wood) + path('M38 52 Q32 46 34 40 Q36 48 42 50Z', C.wood);
          return s + rect(78, 64, 10, 12, C.wood, 2) + rect(76, 62, 14, 3, C.wood);
        }
      }
    });
  }

  (root.COMIC_DATA = root.COMIC_DATA || {}).v1e3 = {
    id: 'v1e3', vol: '第 1 冊 古文明', volNo: 1, ep: 3, title: '會排水的古城', next: '牛骨上的問題',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！社區的水溝小隊長就是你了（記得排輪值表）。',
    note: '阿凱、小禾、達若、達若的爸爸和商人都是虛構的角色。「達若」這個名字是編的：印度河流域的文字到今天還沒有人讀懂，我們不知道當時的人叫什麼名字。摩亨佐達羅的街景、房子、大浴池、做磚的工坊都是想像圖。大浴池拿來做什麼、城市為什麼沒落，學者還在討論。',
    curriculum: '國中社會會再學到：古代文明的發展（印度河流域文明是延伸）',
    cover: {
      scene: 'cover', sceneOpt: { plain: 1, ground: 'brick2', near: 'g5' },
      back: [
        { k: 'mudHouse', x: 130, y: 836, W: 210, H: 150, win: false, f: 'brick3' },
        { k: 'mudHouse', x: 660, y: 826, W: 230, H: 170, win: false, f: '#D8C49C' },
        { k: 'v1e3_drain', x: 390, y: 900, W: 820 }
      ],
      actors: [
        { c: 'he', x: 372, y: 576, s: 1.1, pose: 'shout', expr: 'shock', noShadow: true, look: .4, bust: 1 },
        { c: 'kai', x: 500, y: 548, s: 1.15, pose: 'wave', expr: 'grin', noShadow: true, look: .4, bust: 1 }
      ]
    },
    pages: [
      { layout: 'trio', panels: [
        { scene: 'v1e3_rain', sceneOpt: { hz: .5, curb: .72, water: .8, gx: .56 }, shot: '中景：颱風天巷子淹水，水溝蓋被落葉和飲料杯塞住',
          actors: [
            { c: 'kai', x: 300, y: 330, s: .85, pose: 'scared', expr: 'worry', sweat: 1, look: .6 },
            { c: 'he', x: 580, y: 330, s: .88, pose: 'point', expr: 'shout', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '哥！水溝被你的\n飲料杯塞住了！', x: 470, y: 12, w: 290, kind: 'shout', tail: [574, 168] },
            { t: '又不是\n只有我丟的！', x: 96, y: 16, w: 210, tail: [290, 150] }
          ],
          tag: { t: '颱風天，社區的路淹水了', left: 8, top: 302 } },
        { scene: 'v1e3_rain', sceneOpt: { hz: .42, curb: .64, water: .72, gx: .9, seed: 5, trash: false }, shot: '大格：淹水的巷子裡，搖搖車漂了過來',
          back: [{ k: 'car', x: 128, y: 640, s: .74, rot: -6 }],
          actors: [
            { c: 'he', x: 258, y: 520, s: .8, pose: 'hold', expr: 'think', hold: 'notebook', look: .3 },
            { c: 'kai', x: 420, y: 676, s: 1.3, pose: 'point', expr: 'shock', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '古代的城市\n也會淹水嗎？', x: 16, y: 232, w: 220, kind: 'think', tail: [244, 360] },
            { t: '搖搖車\n漂過來了！', x: 290, y: 280, w: 210, kind: 'shout', tail: [404, 420] }
          ],
          sfx: [{ t: '嘩啦！', x: 20, y: 470, fs: 58, rot: -8 }] },
        { scene: 'coin', sceneOpt: { year: '2500' }, shot: '小格特寫：躲進搖搖車，數字盤倒轉到西元前 2500',
          props: [{ k: 'coin', x: 121, y: 34, r: 26, rot: 12 }],
          actors: [{ c: 'kai', x: 120, y: 990, s: 1.9, pose: 'scared', expr: 'shock', noShadow: true }],
          bubbles: [{ t: '上車躲雨！\n咦？在倒轉！', x: 18, y: 432, w: 206, fs: 24, tail: [108, 560] }],
          sfx: [{ t: '叮！', x: 150, y: 8, fs: 44, rot: 10 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v1e3_city', shot: '滿版遠景：筆直的大街、兩邊的磚牆、遠方的高台和印度河',
          back: [{ k: 'crowd', x: 436, y: 430, s: .4, n: 5, W: 220 }, { k: 'car', x: 160, y: 990, s: .8 }],
          actors: [
            { c: 'kai', x: 420, y: 1000, s: 1.2, pose: 'fists', expr: 'awe', look: -.4, sweat: 1 },
            { c: 'he', x: 600, y: 1010, s: 1.16, pose: 'hold', expr: 'awe', hold: 'notebook', look: -.6 }
          ],
          caption: [
            { t: '大約 4500 年前，摩亨佐達羅', say: '大約四千五百年前，摩亨佐達羅', en: 'MOHENJO-DARO · c.2500 BC', x: 0, y: 18 },
            { t: '摩亨佐達羅在今天巴基斯坦的信德省，就在印度河附近。', x: 392, y: 18, w: 372, dark: false }
          ],
          bubbles: [
            { t: '嗶——本站：印度河流域。\n免費附贈翻譯功能。', x: 14, y: 716, w: 316, kind: 'car', tail: [150, 862], fs: 22 },
            { t: '又一條大河！\n地還是乾的！', x: 336, y: 620, w: 210, tail: [420, 758] },
            { t: '街道好直，\n像棋盤一樣！', x: 560, y: 680, w: 206, tail: [600, 796], fs: 25 }
          ] }
      ] },
      { layout: 'wide2', panels: [
        { scene: 'v1e3_lane', sceneOpt: { hz: .56 }, shot: '中景：阿凱想把果皮丟進掀開的排水溝，達若大叫',
          props: [{ k: 'v1e3_drain', x: 390, y: 470, W: 800, open: [10, 150] }, { k: 'v1e3_peel', x: 474, y: 372, rot: 30 }],
          actors: [
            { c: 'he', x: 140, y: 426, s: .95, pose: 'hold', expr: 'smug', hold: 'notebook', look: .6 },
            { c: 'kai', x: 380, y: 426, s: 1, pose: 'offer', expr: 'happy', look: .6 },
            { c: 'v1e3_daro', x: 660, y: 428, s: 1, pose: 'fists', expr: 'yell', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '哥，你在家\n也是這樣！', x: 18, y: 70, w: 200, tail: [146, 248] },
            { t: '咦？\n這個洞剛好……', x: 268, y: 44, w: 230, tail: [384, 222] },
            { t: '不准丟！\n水溝塞住，\n整條街都會淹！', x: 540, y: 14, w: 226, kind: 'shout', fs: 24, tail: [654, 236] }
          ],
          sfx: [{ t: '咻——', x: 470, y: 290, fs: 34, rot: 12 }] },
        { scene: 'v1e3_lane', sceneOpt: { hz: .74, seed: 9, sun: false }, shot: '小格特寫：達若自我介紹，手拿清水溝的長竿',
          actors: [{ c: 'v1e3_daro', x: 140, y: 640, s: 1.5, pose: 'hold', expr: 'grin', hold: 'staff', noShadow: true, bust: 1 }],
          bubbles: [{ t: '我是達若。\n我家做磚，\n也幫忙清水溝！', x: 16, y: 60, w: 270, fs: 25, tail: [140, 352] }],
          tag: { t: '做磚人家的孩子：達若（虛構）', left: 8, top: 10 } },
        { scene: 'v1e3_cut', shot: '剖面圖：浴室的水經過管子，流進街上有蓋子的排水溝',
          actors: [{ c: 'v1e3_daro', x: 110, y: 312, s: .78, pose: 'point', expr: 'happy', look: .6 }],
          bubbles: [
            { t: '浴室的水\n流到街上的溝。', x: 12, y: 14, w: 196, fs: 23, tail: [114, 162] },
            { t: '四千多年前\n就有下水道？', x: 236, y: 30, w: 214, kind: 'think', fs: 23 }
          ],
          sfx: [{ t: '浴室', x: 14, y: 200, fs: 26, c: '#1F3D2B' }, { t: '排水溝', x: 334, y: 284, fs: 26, c: '#1F3D2B' }],
          caption: [{ t: '磚砌的排水溝沿著街走，上面蓋著磚或石板，可以掀開來清。', x: 0, y: 432, w: 464 }] }
      ] },
      { layout: 'splash', panels: [
        { scene: 'v1e3_lane', sceneOpt: { hz: .5, seed: 23 }, shot: '滿版：做磚的工坊和市場，磚一樣大、砝碼有標準',
          back: [
            { k: 'v1e3_kiln', x: 110, y: 560 },
            { k: 'bricks', x: 300, y: 590, n: 5, m: 2 },
            { k: 'v1e3_dry', x: 220, y: 680, n: 3, m: 4 },
            { k: 'table', x: 580, y: 640, W: 210 },
            { k: 'v1e3_scale', x: 580, y: 564 }
          ],
          actors: [
            { c: 'v1e3_dad', x: 400, y: 640, s: 1, pose: 'offer', expr: 'happy', hold: 'v1e3_brick', look: .4 },
            { c: 'v1e3_trader', x: 728, y: 644, s: 1, pose: 'raise', expr: 'smug', flip: 1, look: .6 },
            { c: 'v1e3_daro', x: 130, y: 1024, s: 1.16, pose: 'point', expr: 'happy', look: .6 },
            { c: 'kai', x: 440, y: 1026, s: 1.16, pose: 'stand', expr: 'worry', flip: 1, look: .7 },
            { c: 'he', x: 640, y: 1030, s: 1.16, pose: 'hold', expr: 'think', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [{ t: '很多城市的燒磚，長、寬、厚的比例大致一樣。\n石頭砝碼也照標準做：一倍、兩倍、四倍、八倍……', x: 16, y: 18, w: 748 }],
          bubbles: [
            { t: '磚的長、寬、厚，\n大約是 4：2：1！', x: 120, y: 290, w: 260, fs: 24, tail: [376, 420] },
            { t: '砝碼有標準，\n誰也騙不了誰！', x: 520, y: 290, w: 246, fs: 24, tail: [712, 430] },
            { t: '一樣大才好疊、\n好算、好交換！', x: 14, y: 716, w: 244, fs: 24, tail: [128, 806] },
            { t: '每塊都一樣，\n好無聊喔。', x: 330, y: 724, w: 200, fs: 24, tail: [436, 812] }
          ] }
      ] },
      { layout: 'tall2', panels: [
        { scene: 'v1e3_bath', shot: '細長大格俯角：大浴池，兩頭有階梯',
          actors: [{ c: 'he', x: 100, y: 1034, s: 1.8, pose: 'point', expr: 'awe', look: .5 }],
          caption: [
            { t: '大浴池\n長約 12 公尺、寬約 7 公尺', x: 0, y: 16, w: 310 },
            { t: '磚縫外面塗了一層瀝青防水。\n做什麼用的？學者還在討論，\n可能跟洗淨的儀式有關。', x: 0, y: 112, w: 336, dark: false }
          ],
          bubbles: [
            { t: '好大的\n游泳池！', x: 150, y: 590, w: 170, fs: 25, tail: [140, 712] },
            { t: '不是游泳池啦！', x: 136, y: 874, w: 204, fs: 22, tail: [344, 930] }
          ] },
        { scene: 'flat', sceneOpt: { c: 'g9' }, shot: '字卡：印章、還沒讀懂的字、跟兩河流域做生意',
          caption: [{ t: '印章和還沒讀懂的字', x: 0, y: 16 }],
          cards: [
            { icon: 'v1e3_seal', y: 76, t: '小小的石頭印章，\n常刻著像獨角獸的動物，\n上面還有一排符號。' },
            { icon: 'question', y: 340, t: '這些符號是文字，\n可是到今天，\n還沒有人讀得懂。' },
            { icon: 'ship', y: 600, t: '這種印章在兩河流域也找到了！\n那邊泥板寫的「美路哈」，\n學者多認為就是這裡。' }
          ],
          bubbles: [{ t: '第 1 話的\n兩河流域耶！', x: 34, y: 900, w: 354, fs: 25 }] }
      ] },
      { layout: 'strip', panels: [
        { scene: 'v1e3_lane', sceneOpt: { hz: .6, seed: 51, sun: false }, shot: '矮寬格：傍晚，大家一起掀開溝蓋清排水溝',
          props: [{ k: 'v1e3_drain', x: 390, y: 400, W: 800, open: [-80, 60] }],
          actors: [
            { c: 'v1e3_dad', x: 150, y: 358, s: .82, pose: 'offer', expr: 'calm', hold: 'v1e3_brick', look: .6 },
            { c: 'v1e3_daro', x: 330, y: 356, s: .9, pose: 'kneel', expr: 'happy', hold: 'staff', look: .6 },
            { c: 'kai', x: 560, y: 360, s: .9, pose: 'hold', expr: 'grin', hold: 'v1e3_brick', flip: 1, sweat: 1, look: .6 },
            { c: 'he', x: 700, y: 362, s: .88, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          caption: [{ t: '大約西元前 1900 年後，這些城市慢慢沒落。\n原因學者還在討論，可能跟河道改變、氣候變化有關。', x: 0, y: 0, w: 640 }],
          bubbles: [
            { t: '大家輪流清，\n水溝才不會塞。', x: 200, y: 96, w: 220, fs: 24, tail: [334, 222] },
            { t: '原來要守規格，\n還要一起顧！', x: 520, y: 100, w: 236, fs: 23, tail: [566, 200] }
          ] },
        { scene: 'v1e3_rain', sceneOpt: { sunny: 1, hz: .5, curb: .74, gx: .4 }, shot: '收尾大格：雨停了，阿凱撿起自己的杯子，社區排好清水溝輪值表',
          back: [{ k: 'crowd', x: 470, y: 470, s: .7, n: 4, W: 220 }, { k: 'car', x: 650, y: 560, s: .9, lights: 1 }],
          actors: [
            { c: 'kai', x: 150, y: 560, s: 1.15, pose: 'raise', expr: 'grin', hold: 'v1e3_tea', look: .6 },
            { c: 'he', x: 330, y: 566, s: 1.1, pose: 'hold', expr: 'smug', hold: 'notebook', flip: 1, look: .8 }
          ],
          bubbles: [
            { t: '我的杯子，\n我自己撿！', x: 14, y: 176, w: 200, fs: 24, tail: [150, 334] },
            { t: '清水溝輪值表排好了，\n哥是星期六。', x: 226, y: 210, w: 300, fs: 24, tail: [330, 368] },
            { t: '嗶嗶——\n下一站，\n黃河！', x: 620, y: 200, w: 146, kind: 'car', fs: 22, tail: [644, 436] }
          ],
          caption: [{ t: '下一話：牛骨上的問題', x: 420, y: 572 }] }
      ] }
    ],
    recap: [
      { h: '印度河流域在哪裡', t: '印度河流過今天的巴基斯坦。大約 4500 年前，河邊有摩亨佐達羅、哈拉帕這些大城市。' },
      { h: '會排水的城市', t: '街道大致像棋盤一樣直，很多房子有浴室；磚砌的排水溝沿著街走，上面有蓋子，可以掀開來清。' },
      { h: '大家守一樣的規格', t: '很多城市的燒磚，長、寬、厚的比例大致一樣（大約 4：2：1）；石頭砝碼的重量也有標準，買賣比較公平。' },
      { h: '印章和還沒讀懂的字', t: '印章上常刻著像獨角獸的動物和一排符號。這些字到今天還沒有人讀懂，所以我們不知道當時的人叫什麼名字。' },
      { h: '跟兩河流域做生意', t: '印度河流域的印章在兩河流域也找得到。兩河流域文獻裡的「美路哈」，學者多認為就是這一帶。' }
    ],
    map: {
      bounds: { lon: [43.5, 79.5], lat: [19.5, 36] },
      rivers: ['indus', 'ravi', 'euphrates', 'tigris', 'shatt'],
      routes: [{ pts: [[22.4, 72.3], [21.4, 72.4], [20.5, 71.2], [20.6, 69.6], [22.7, 67.6], [24.3, 64], [24.9, 60.6], [25.9, 57.4], [26.75, 56.3], [26.3, 54], [27.4, 51.4], [29.2, 49.3], [29.95, 48.55], [30.5, 47.8], [31, 47.42], [30.96, 46.2]] }],
      labels: [
        { t: '阿拉伯海', lat: 21.2, lon: 62.5, size: 24, f: 'cream' },
        { t: '波斯灣', lat: 27.3, lon: 51.6, size: 18, f: 'cream', rot: 30 },
        { t: '印度河', lat: 29.4, lon: 68.4, size: 20, f: 'g7' },
        { t: '今天的巴基斯坦一帶', lat: 32.6, lon: 66.6, size: 18, f: 'wood' }
      ],
      cities: [
        { n: '摩亨佐達羅', lat: 27.33, lon: 68.14, main: 1, side: 'l' },
        { n: '哈拉帕', lat: 30.63, lon: 72.87, side: 'r' },
        { n: '洛塔', lat: 22.52, lon: 72.25, side: 'r' },
        { n: '烏爾（兩河流域）', lat: 30.96, lon: 46.1, side: 'r', dy: -26 }
      ],
      cap: '紅點是摩亨佐達羅，在印度河邊。紅色虛線是學者推測的海上貿易路線：沿著海岸到波斯灣，再到兩河流域。（河道和海岸線畫的是今天的樣子，四千多年前跟現在不完全一樣。）',
      alt: '印度河流域地圖：印度河由北往南流過今天的巴基斯坦，摩亨佐達羅在下游河邊，哈拉帕在北邊的拉維河邊，洛塔在南邊海岸附近；一條海路沿著阿拉伯海海岸進波斯灣，通到兩河流域的烏爾'
    },
    timeline: {
      cap: '時間軸照真正的年代長度畫：這些城市沒落以後，過了將近四千年才被考古學家挖出來。',
      items: [
        { y: -2500, when: '約西元前 2500 年', t: '摩亨佐達羅\n很熱鬧', side: 'd', main: 1, w: 186 },
        { y: -1900, when: '約西元前 1900 年後', t: '大城市\n慢慢沒落', side: 'u', w: 186 },
        { y: 1922, when: '西元 1920 年代', t: '考古學家\n開始挖掘', side: 'd', w: 176 },
        { y: 2026, when: '今天', t: '印章上的字\n還沒人讀懂', side: 'u', w: 160 }
      ]
    },
    sources: [
      'UNESCO 世界遺產〈Archaeological Ruins at Moenjodaro〉（在信德省、印度河邊；燒磚建築、城市規劃、排水系統；1980 年列入世界遺產）',
      'Harappa.com（J. M. Kenoyer）摩亨佐達羅圖說：有蓋的排水溝、可掀開的溝蓋與清理、房子的浴室、獨角獸印章、還沒解讀的文字',
      '大英百科〈Mohenjo-daro〉〈Indus civilization〉（約西元前 2500～1900 年；1922 年發現、1920 年代起大規模發掘；磚的比例、標準砝碼、大浴池約 12×7 公尺與瀝青防水；美路哈；衰落原因有不同說法）',
      '大都會藝術博物館〈Art of the Harappan Civilization〉與印章館藏（印章的獨角獸圖案、在兩河流域出土的印度河印章與貿易）'
    ],
    quiz: [
      { id: 'q1', d: 1, type: 'mc', q: '這一話的摩亨佐達羅，大約在今天的哪個國家？', opts: ['巴基斯坦', '埃及', '伊拉克', '沙烏地阿拉伯'], a: 0, why: '摩亨佐達羅在印度河邊，大約是今天巴基斯坦的信德省。' },
      { id: 'q2', d: 1, type: 'tf', q: '摩亨佐達羅的排水溝上面有蓋子，可以掀開來清理。', a: true, why: '磚砌的排水溝沿著街走，上面蓋著磚或石板，塞住了可以掀開來清。' },
      { id: 'q3', d: 2, type: 'mc', q: '印度河流域的磚和砝碼「規格大致一樣」，有什麼好處？', opts: ['好疊、好算，買賣比較公平', '每一塊磚都能刻上國王的名字', '這樣磚頭會變得比較好看', '只要一個人就能做完全部'], a: 0, why: '磚一樣大，蓋房子好疊；砝碼有標準，買賣算得清楚，大家比較不會吵。' },
      { id: 'q4', d: 2, type: 'match', q: '把左邊的東西和它的特色配起來。', pairs: [['排水溝', '沿著街走、上面有蓋子'], ['燒磚', '長寬厚的比例大致一樣'], ['石頭砝碼', '重量有標準'], ['印章', '常刻著像獨角獸的動物']], why: '這四樣都是摩亨佐達羅的特色：排水溝有蓋子、磚有固定比例、砝碼有標準、印章上有動物和符號。' },
      { id: 'q5', d: 3, type: 'mc', q: '小明說：「印度河流域的文字早就被讀懂了，所以我們知道他們國王叫什麼名字。」根據這一話，哪個說法最正確？', opts: ['不對，那些符號到今天還沒有人讀懂', '對，字刻在印章上，所以很好讀', '對，兩河流域的人早就幫忙翻譯好了', '不對，印度河流域的人從來不寫字'], a: 0, why: '印章上有一排符號，學者認為是文字，可是到今天還沒有人讀懂，所以我們不知道當時的人叫什麼名字。' }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
