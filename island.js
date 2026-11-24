/* island.js — 首頁「小朋友學習島」（2026-11-16）：#home 上方一張 inline SVG 群島，9 座島＝9 科，中央廣場＝課程地圖、家長屋。
   島只是入口外殼：點島拉近 → 說明卡列出該科活動（subjects.js 的 KidsSubjects／KidsActs，不另寫一份）→ 點活動走原本的路由／整頁連結。
   - 今日任務旗：KidsDaily.today() 的各列對到島（英文、英文閱讀→港口、數學→數字塔、閱讀→書院、歷史→時光碼頭、地理→燈塔）；🦉 停在下一個任務旁，點牠＝小助理的「接著做」。
   - 成長 0～4 階：每次從已同步的紀錄現算（kids_done 各科完成度、kids_daily 每科練習天數＋連續天數、ke_learned 學會數），不新增任何同步狀態。
   - 只寫一個本機 key kids_island_ui（看過導覽、今天放過煙火、手動時段；不同步，讀不到就照常顯示）。
   - iPad：動畫全用 CSS（頁面隱藏時暫停、prefers-reduced-motion 關掉），不跑 requestAnimationFrame、不攔捲動、觸控目標 ≥44px。
   需要先載入 subjects.js；登入後才有任務旗和成長（completion.js、kids-done.js、kids-daily.js、syncmerge.js），未登入給預設樣子。 */
(function (G) {
  'use strict';
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  // ---------- 純函式（test/island.test.js） ----------
  const KS = ['chinese', 'math', 'social', 'history', 'geo', 'science', 'english', 'ai', 'game'];
  // 時段（裝置時鐘）：清晨 5–8、白天 8–17、黃昏 17–19、夜晚
  const TIMES = [['dawn', '🌅', '清晨'], ['day', '☀️', '白天'], ['dusk', '🌇', '黃昏'], ['night', '🌙', '夜晚']];
  const phase = h => (h >= 5 && h < 8 ? 'dawn' : h >= 8 && h < 17 ? 'day' : h >= 17 && h < 19 ? 'dusk' : 'night');
  // kids_daily（dd）的科目代碼 → 島（代碼見 kids-daily.js：j/p 英文子目標、u/f/x 數學、o 國語開放題、v 漫畫一話、w 地理一組、b 英文閱讀一篇）
  const CODE = { e: 'english', d: 'english', b: 'english', j: 'english', p: 'english', m: 'math', u: 'math', f: 'math', x: 'math', c: 'chinese', o: 'chinese', s: 'social', n: 'science', h: 'history', v: 'history', g: 'geo', w: 'geo', a: 'ai' };
  const shift = (d, n) => new Date(Date.UTC(2000 + +d.slice(0, 2), +d.slice(2, 4) - 1, +d.slice(4, 6)) + n * 864e5).toISOString().slice(2, 10).replace(/-/g, '');
  // sum＝KESyncMerge.ddSum(kids_daily)：{YYMMDD:{代碼:[題數,答對]}} → 各島練習天數、連續天數（今天還沒練就從昨天往回數）
  function ddStats(sum, today) {
    const per = {}, any = new Set(), s = obj(sum);
    Object.keys(s).forEach(d => {
      if (!/^\d{6}$/.test(d) || d > today) return;
      Object.keys(obj(s[d])).forEach(c => { const k = CODE[c], v = s[d][c]; if (k && Array.isArray(v) && +v[0] > 0) { (per[k] = per[k] || new Set()).add(d); any.add(d); } });
    });
    let streak = 0;
    if (/^\d{6}$/.test(today)) for (let d = any.has(today) ? today : shift(today, -1); any.has(d); d = shift(d, -1)) streak++;
    const days = {}; Object.keys(per).forEach(k => { days[k] = per[k].size; });
    return { days, streak };
  }
  // KidsCompletion.build(...).subjects → 各島平均完成度（%）；國語閱讀＋成語都算書院、Scratch 塔防算遊樂園
  const CAT = { chinese: 'chinese', idioms: 'chinese', english: 'english', social: 'social', science: 'science', math: 'math', geo: 'geo', ai: 'ai', scratch: 'game' };
  function pctOf(subjects) {
    const acc = {}, out = {};
    (Array.isArray(subjects) ? subjects : []).forEach(s => { const k = CAT[obj(s).k]; if (!k) return; (s.units || []).forEach(u => { const a = acc[k] = acc[k] || [0, 0]; a[0] += obj(u).status === 'done' ? 100 : Math.max(0, Math.min(100, +obj(u).pct || 0)); a[1]++; }); });
    Object.keys(acc).forEach(k => { out[k] = Math.round(acc[k][0] / acc[k][1]); });
    return out;
  }
  const learnedN = L => Object.values(obj(L)).filter(x => x && x.at && !x.removedAt).length;
  // 成長：分數＝完成度 % ＋ 練習天數×3（最多 10 天）＋ 英文學會數×0.3（最多 30）；0 / <15 / <40 / <70 / ≥70 → 0～4 階
  const STAGE = [15, 40, 70];
  const score = x => Math.max(0, +obj(x).pct || 0) + 3 * Math.min(10, Math.max(0, +obj(x).days || 0)) + Math.min(30, Math.max(0, +obj(x).learned || 0) * 0.3);
  const stage = x => { const s = score(x); return s <= 0 ? 0 : 1 + STAGE.filter(t => s >= t).length; };
  // 全島（船、路燈、走動的小人）看連續天數：1 / 3 / 7 / 14 天
  const townStage = n => [1, 3, 7, 14].filter(t => +n >= t).length;
  function growth(o) {
    o = obj(o); const isl = {};
    KS.forEach(k => { isl[k] = stage({ pct: obj(o.pct)[k], days: obj(o.days)[k], learned: k === 'english' ? o.learned : 0 }); });
    return { isl, town: townStage(o.streak) };
  }
  // 今日清單（KidsDaily.today()）→ 各島任務旗、🦉 要停的島、是否全部完成
  function quests(T) {
    const q = {}, rows = T && Array.isArray(T.rows) ? T.rows : [];
    rows.forEach(r => { if (r && KS.indexOf(r.k) >= 0) q[r.k] = q[r.k] === 'todo' || !r.done ? 'todo' : 'done'; });   // 同一座島兩列（英文＋英文閱讀）：都完成才插 ✓
    return { q, next: T && T.next && KS.indexOf(T.next.k) >= 0 ? T.next.k : null, all: !!(T && T.allDone && rows.length) };
  }
  const core = { KS, TIMES, phase, CODE, shift, ddStats, pctOf, learnedN, score, stage, townStage, growth, quests };
  if (typeof module !== 'undefined' && module.exports) module.exports = core;
  if (typeof document === 'undefined') return;
  const sec = document.getElementById('island');
  if (!sec || !G.KidsSubjects) return;

  // ---------- 島的長相 ----------
  // [科, 中心 x, y, 半徑 rx, ry, 形狀種子, 建築名, 一句話]（viewBox 1000×640；斜俯視：島身往下 14 是崖壁）
  const ISL = [['chinese', 165, 150, 100, 58, 1, '書院', '讀文章、聽成語故事、練寫作文的地方。'], ['math', 405, 120, 92, 54, 2, '數字塔', '一層一層往上爬：計算、應用題、單元練習。'],
    ['social', 640, 130, 100, 58, 3, '市集廣場', '每個攤位是一個單元，認識臺灣和社會生活。'], ['history', 862, 205, 96, 56, 4, '時光碼頭', '坐上時光搖搖車，從古文明一路看到今天。'],
    ['geo', 868, 425, 92, 54, 5, '燈塔・地圖站', '看懂方位和地圖，認識臺灣和全世界。'], ['science', 680, 530, 104, 58, 6, '森林', '太陽、植物、天氣、星空…在森林裡找答案。'],
    ['english', 430, 545, 112, 58, 7, '港口', '單字、句型、課本，還有全民英檢考場。'], ['ai', 190, 500, 96, 56, 8, '機器人實驗室', '學會和 AI 好好相處：不被唬、問得好、守住秘密。'],
    ['game', 120, 325, 96, 56, 9, '遊樂園', '做自己的遊戲，或穿過傳送門去其他遊戲島。']];
  const BY = {}; ISL.forEach(a => { BY[a[0]] = { k: a[0], x: a[1], y: a[2], rx: a[3], ry: a[4], seed: a[5], b: a[6], line: a[7] }; });
  const PZ = { x: 500, y: 330, rx: 118, ry: 66 };
  const SUBJ = {}; G.KidsSubjects.forEach(s => { SUBJ[s.k] = s; });
  const PORTALS = [['hero-island', '勇者島', '#e0614f'], ['hero-world', '方塊世界', '#4f8a4a'], ['kids-town', '小朋友鎮', '#d9a63a']];
  const f1 = n => +(+n).toFixed(1);
  const pts = a => a.map(p => f1(p[0]) + ',' + f1(p[1])).join(' ');
  const poly = (a, c, x) => `<polygon points="${pts(a)}" fill="${c}"${x || ''}/>`;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // 圓潤的有機形狀：橢圓加兩層正弦起伏，12 點用二次曲線接起來
  function blob(cx, cy, rx, ry, seed, k) {
    const n = 12, P = [], mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    for (let i = 0; i < n; i++) { const a = i / n * 2 * Math.PI, w = 1 + 0.09 * Math.sin(3 * a + seed) + 0.05 * Math.sin(5 * a + seed * 2); P.push([cx + Math.cos(a) * rx * k * w, cy + Math.sin(a) * ry * k * w]); }
    let d = 'M' + pts([mid(P[n - 1], P[0])]).replace(',', ' ');
    for (let i = 0; i < n; i++) { const q = mid(P[i], P[(i + 1) % n]); d += `Q${f1(P[i][0])} ${f1(P[i][1])} ${f1(q[0])} ${f1(q[1])}`; }
    return d + 'Z';
  }
  // 斜俯視的盒子：正面＋右側面＋頂面；lights 收集窗戶（夜晚畫在暗色濾鏡上面才會亮）
  let LIGHTS = [];
  function box(x, y, w, h, c, dk, tp) {
    const dx = w * 0.32, dy = w * 0.2;
    return poly([[x, y], [x + w, y], [x + w, y - h], [x, y - h]], c) + poly([[x + w, y], [x + w + dx, y - dy], [x + w + dx, y - dy - h], [x + w, y - h]], dk)
      + poly([[x, y - h], [x + w, y - h], [x + w + dx, y - h - dy], [x + dx, y - h - dy]], tp || dk);
  }
  const roof = (x, y, w, h, c, dk) => { const dx = w * 0.32, dy = w * 0.2; return poly([[x - 4, y], [x + w / 2, y - h], [x + w + 4, y]], c) + poly([[x + w + 4, y], [x + w / 2, y - h], [x + w / 2 + dx, y - h - dy], [x + w + dx + 4, y - dy]], dk); };
  const win = (x, y, w, h) => { LIGHTS.push([x, y, w, h]); return `<rect x="${f1(x)}" y="${f1(y)}" width="${w}" height="${h}" rx="1.5" fill="#5d7f99"/>`; };
  const tree = (x, y, s) => `<rect x="${f1(x - 2)}" y="${f1(y - 8 * s)}" width="4" height="${f1(8 * s)}" fill="#8a5a36"/><circle cx="${f1(x)}" cy="${f1(y - 13 * s)}" r="${f1(9 * s)}" fill="#3f9a4f"/><circle cx="${f1(x - 3 * s)}" cy="${f1(y - 16 * s)}" r="${f1(5 * s)}" fill="#5cb85f"/>`;
  const txt = (x, y, t, sz, c, x2) => `<text x="${f1(x)}" y="${f1(y)}" font-size="${sz}" text-anchor="middle" fill="${c}"${x2 || ''}>${t}</text>`;
  // 各島的代表建築（s＝成長階段 0～4：房子變高、攤位變多…）
  const BUILD = {
    chinese: (x, y, s) => box(x - 34, y, 56, 26 + (s >= 3 ? 10 : 0), '#f4e2c3', '#d7bd95') + roof(x - 34, y - 26 - (s >= 3 ? 10 : 0), 56, 22, '#c8553d', '#9e3f2c')
      + `<rect x="${x - 12}" y="${y - 15}" width="12" height="15" fill="#7a4a2a"/>` + win(x - 28, y - 20, 9, 8) + win(x + 6, y - 20, 9, 8)
      + (s >= 2 ? box(x + 34, y + 6, 22, 16, '#f4e2c3', '#d7bd95') + roof(x + 34, y - 10, 22, 12, '#c8553d', '#9e3f2c') : '') + (s >= 4 ? txt(x - 6, y - 56, '📜', 18, '#000') : ''),
    math: (x, y, s) => { let o = '', n = 2 + s, h = 15; for (let i = 0; i < n; i++) { o += box(x - 18, y - i * h, 36, h, i % 2 ? '#7cc4f2' : '#ffd36b', i % 2 ? '#4f9fd3' : '#e8b53f', '#fff2c4') + txt(x, y - i * h - 3.5, String(i + 1), 11, '#1f2a37', ' font-weight="700"'); } return o + poly([[x - 20, y - n * h], [x + 6, y - n * h - 22], [x + 30, y - n * h - 7]], '#e0614f') + win(x + 22, y - n * h + 6, 5, 6); },
    social: (x, y, s) => { let o = ''; const n = 2 + (s >= 2) + (s >= 4), C = ['#e0614f', '#4f9fd3', '#5cb85f', '#d9a63a']; for (let i = 0; i < n; i++) { const sx = x - 52 + i * 30, sy = y + (i % 2) * 8; o += box(sx, sy, 24, 14, '#f8ecd6', '#d9c3a0') + poly([[sx - 3, sy - 14], [sx + 27, sy - 14], [sx + 32, sy - 24], [sx + 2, sy - 24]], C[i]) + `<rect x="${sx + 4}" y="${sy - 9}" width="16" height="4" fill="#fff" opacity=".7"/>`; } return o + (s >= 3 ? tree(x + 50, y - 20, 0.8) : ''); },
    history: (x, y, s) => { const h = 38 + s * 6; let o = ''; for (let i = 0; i < 5; i++) o += `<rect x="${x + 44 + i * 13}" y="${y + 18 + i * 3}" width="12" height="7" fill="#b98a5a" stroke="#8a6236" stroke-width="1"/>`;
      return o + box(x - 14, y, 26, h, '#e9d2ad', '#c9ab7f') + roof(x - 14, y - h, 26, 16, '#6c5aa8', '#4e3f82') + `<circle cx="${x - 1}" cy="${y - h + 12}" r="8" fill="#fff" stroke="#4e3f82" stroke-width="2"/><path d="M${x - 1} ${y - h + 12}v-5M${x - 1} ${y - h + 12}h4" stroke="#1f2a37" stroke-width="1.6"/>` + win(x - 8, y - 14, 7, 8)
        + (s >= 3 ? `<path d="M${x + 92} ${y + 36}h34l-6 9h-24z" fill="#d6634a"/><path d="M${x + 108} ${y + 34}v-22l14 18z" fill="#fff"/>` : ''); },
    geo: (x, y, s) => { const h = 66 + s * 4, b = 13, t = 8; let o = poly([[x - b, y], [x + b, y], [x + t, y - h], [x - t, y - h]], '#fff');
      for (let i = 1; i < 4; i += 2) { const y1 = y - h * i / 4, y2 = y - h * (i + 1) / 4, w1 = b - (b - t) * i / 4, w2 = b - (b - t) * (i + 1) / 4; o += poly([[x - w1, y1], [x + w1, y1], [x + w2, y2], [x - w2, y2]], '#e0614f'); }
      LIGHTS.push(['lamp', x, y - h - 8]);
      return o + `<rect x="${x - 10}" y="${y - h - 16}" width="20" height="14" rx="3" fill="#ffe28a" stroke="#1f2a37" stroke-width="2"/>` + poly([[x - 13, y - h - 16], [x, y - h - 28], [x + 13, y - h - 16]], '#1f2a37')
        + `<rect x="${x - 62}" y="${y - 30}" width="40" height="26" rx="3" fill="#fdf6e3" stroke="#8a6236" stroke-width="3"/><path d="M${x - 56} ${y - 12}q8-12 14-4t14-6" stroke="#3f9a4f" stroke-width="3" fill="none"/><rect x="${x - 45}" y="${y - 4}" width="4" height="10" fill="#8a6236"/>`; },
    science: (x, y, s) => { let o = ''; const T = [[-50, -4], [-30, 12], [32, 10], [52, -6], [-8, 20], [12, -26], [-36, -24], [44, 22], [-60, 14], [64, 6], [24, -32], [-18, -34]]; T.slice(0, 4 + s * 2).forEach((p, i) => { o += tree(x + p[0], y + p[1], 1 + (i % 3) * 0.2); });
      return (s >= 2 ? `<path d="M${x - 18} ${y + 2}a18 16 0 0 1 36 0z" fill="#bfe8f2" stroke="#4f9fd3" stroke-width="2"/><path d="M${x} ${y - 14}v16M${x - 12} ${y - 6}h24" stroke="#4f9fd3" stroke-width="1.5"/>` : '') + o; },
    english: (x, y, s) => { let o = ''; for (let i = 0; i < 6; i++) o += `<rect x="${x - 30 + i * 13}" y="${y + 34 + (i % 2)}" width="12" height="8" fill="#b98a5a" stroke="#8a6236" stroke-width="1"/>`;
      return o + box(x - 50, y + 4, 54, 26, '#9cc7e8', '#6aa3cf', '#cfe5f6') + txt(x - 23, y - 6, 'ABC', 13, '#1f2a37', ' font-weight="800"') + win(x - 44, y - 2, 8, 7) + win(x - 8, y - 2, 8, 7)
        + box(x + 22, y - 2, 34, 22 + (s >= 3 ? 8 : 0), '#fdf0d0', '#e3c98f') + roof(x + 22, y - 24 - (s >= 3 ? 8 : 0), 34, 14, '#3d6fb4', '#2b5390') + txt(x + 39, y - 7, '考場', 10, '#1f2a37', ' font-weight="700"')
        + `<path d="M${x + 39} ${y - 38 - (s >= 3 ? 8 : 0)}v-16" stroke="#1f2a37" stroke-width="2"/><path d="M${x + 39} ${y - 54 - (s >= 3 ? 8 : 0)}l13 4-13 4z" fill="#ffb400"/>`; },
    ai: (x, y, s) => { LIGHTS.push(['lamp', x - 6, y - 58]);
      return box(x - 30, y, 50, 22, '#e6ecf3', '#bcc8d6') + `<path d="M${x - 30} ${y - 22}a25 24 0 0 1 50 0z" fill="#c9d7e6" stroke="#8ea3ba" stroke-width="2"/><path d="M${x - 6} ${y - 46}v-12" stroke="#5d7f99" stroke-width="2"/>`
        + win(x - 24, y - 14, 9, 7) + win(x + 6, y - 14, 9, 7) + `<rect x="${x + 30}" y="${y - 24}" width="18" height="16" rx="4" fill="#7cc4f2" stroke="#1f2a37" stroke-width="2"/><circle cx="${x + 35}" cy="${y - 16}" r="2.4" fill="#1f2a37"/><circle cx="${x + 43}" cy="${y - 16}" r="2.4" fill="#1f2a37"/><rect x="${x + 32}" y="${y - 8}" width="14" height="10" rx="2" fill="#5d7f99"/>`
        + (s >= 3 ? `<path d="M${x - 58} ${y - 4}a12 12 0 0 1 20 -14z" fill="#fff" stroke="#8ea3ba" stroke-width="2"/><path d="M${x - 48} ${y - 10}v12" stroke="#8ea3ba" stroke-width="2"/>` : ''); },
    game: (x, y, s) => { let sp = ''; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; sp += `<path d="M0 0L${f1(Math.cos(a) * 26)} ${f1(Math.sin(a) * 26)}" stroke="#8a6236" stroke-width="2"/><circle cx="${f1(Math.cos(a) * 26)}" cy="${f1(Math.sin(a) * 26)}" r="4.5" fill="${['#e0614f', '#ffd36b', '#4f9fd3', '#5cb85f'][i % 4]}"/>`; }
      let o = `<path d="M${x - 46} ${y + 2}l12 -40l12 40" stroke="#8a6236" stroke-width="3" fill="none"/><g transform="translate(${x - 34} ${y - 40})"><g class="isl-wheel"><circle r="26" fill="none" stroke="#e0614f" stroke-width="3"/>${sp}</g></g>`;
      PORTALS.forEach((p, i) => { const px = x + 4 + i * 26, py = y + 10 - i * 6; o += `<path d="M${px} ${py}v-20a10 10 0 0 1 20 0v20z" fill="${p[2]}"/><path d="M${px + 4} ${py}v-17a6 6 0 0 1 12 0v17z" fill="#b8f0ff"/>`; LIGHTS.push(['lamp', px + 10, py - 12]); });
      return o + (s >= 3 ? `<circle cx="${x + 64}" cy="${y - 26}" r="9" fill="#ff8fb3"/><path d="M${x + 64} ${y - 17}v14" stroke="#1f2a37"/>` : ''); }
  };
  // 島身（淺水圈、崖壁、沙灘、草地）＋小樹（越熱鬧越多）＋建築
  const DECO = [[-0.62, 0.05], [0.6, 0.18], [-0.35, 0.42], [0.36, -0.42], [-0.7, -0.28], [0.68, -0.22], [0.15, 0.5]];
  function island(I, s) {
    const { k, x, y, rx, ry, seed } = I, n = [1, 2, 3, 5, 7][s] || 1;
    let o = `<path d="${blob(x, y + 6, rx, ry, seed, 1.2)}" class="isl-shal"/><path d="${blob(x, y + 14, rx, ry, seed, 1)}" fill="#b5835a"/><path d="${blob(x, y, rx, ry, seed, 1)}" fill="#f3e2b0"/><path d="${blob(x, y - 2, rx, ry, seed + 0.4, 0.84)}" fill="${k === 'science' ? '#79c25e' : '#8fd16a'}"/>`;
    if (k !== 'science') DECO.slice(0, n).forEach(p => { o += tree(x + p[0] * rx, y + p[1] * ry, 0.75); });
    return o + BUILD[k](x, y - 4, s);
  }
  // 中央廣場：噴水池、課程地圖看板、家長屋（連結在上層）
  function plaza(town) {
    const { x, y, rx, ry } = PZ;
    let o = `<path d="${blob(x, y + 12, rx, ry, 11, 1)}" fill="#b5835a"/><path d="${blob(x, y, rx, ry, 11, 1)}" fill="#efe3cf"/><ellipse cx="${x}" cy="${y + 4}" rx="30" ry="17" fill="#bcdff0" stroke="#d9c3a0" stroke-width="5"/><circle cx="${x}" cy="${y}" r="5" fill="#fff"/>`
      + `<rect x="${x - 92}" y="${y - 40}" width="52" height="34" rx="4" fill="#fdf6e3" stroke="#8a6236" stroke-width="3"/><path d="M${x - 86} ${y - 18}q10-14 18-6t20-8" stroke="#3f9a4f" stroke-width="3" fill="none"/><circle cx="${x - 52}" cy="${y - 30}" r="4" fill="#e0614f"/><rect x="${x - 68}" y="${y - 6}" width="4" height="14" fill="#8a6236"/>`
      + box(x + 42, y - 2, 38, 26, '#ffe7c2', '#e8c48f') + roof(x + 42, y - 28, 38, 20, '#e0614f', '#b8493a') + `<rect x="${x + 55}" y="${y - 16}" width="11" height="14" fill="#7a4a2a"/>` + win(x + 46, y - 22, 7, 7);
    for (let i = 0; i < town * 2; i++) { const a = Math.PI * (0.15 + i * 0.27), lx = x + Math.cos(a) * rx * 0.86, ly = y + Math.sin(a) * ry * 0.8; o += `<rect x="${f1(lx - 1.5)}" y="${f1(ly - 22)}" width="3" height="22" fill="#5d6b7a"/>`; LIGHTS.push(['lamp', lx, ly - 24]); }
    return o;
  }
  // 橋（廣場 → 每座島）；走動的小人沿著橋來回（CSS 動畫，--dx/--dy＝橋的方向）
  const edge = (I, tx, ty, k) => { const a = Math.atan2(ty - I.y, tx - I.x); return [I.x + Math.cos(a) * I.rx * k, I.y + Math.sin(a) * I.ry * k]; };
  function bridges(town) {
    let o = '', ppl = '';
    ISL.forEach((a, i) => {
      const I = BY[a[0]], p = edge(PZ, I.x, I.y, 0.9), q = edge(I, PZ.x, PZ.y, 0.9);
      o += `<path d="M${f1(p[0])} ${f1(p[1])}L${f1(q[0])} ${f1(q[1])}" stroke="#a8794c" stroke-width="12" stroke-linecap="round"/><path d="M${f1(p[0])} ${f1(p[1])}L${f1(q[0])} ${f1(q[1])}" stroke="#e2c08f" stroke-width="8" stroke-dasharray="5 3"/>`;
      // 外層 g 放位置、內層 g 跑 CSS 動畫（CSS transform 會蓋掉 transform 屬性，所以分兩層）
      if (i < town + 2) ppl += `<g transform="translate(${f1(p[0])} ${f1(p[1] - 6)})"><g class="isl-p" style="--dx:${f1(q[0] - p[0])}px;--dy:${f1(q[1] - p[1])}px;animation-duration:${9 + (i * 7) % 8}s;animation-delay:-${i * 1.7}s"><circle r="3.4" cy="-9" fill="#f2c9a0"/><rect x="-3.5" y="-6" width="7" height="9" rx="3" fill="${['#e0614f', '#4f9fd3', '#5cb85f', '#d9a63a', '#8e6cc8'][i % 5]}"/></g></g>`;
    });
    return o + ppl;
  }
  const BOATS = [[540, 612], [300, 600], [960, 560], [40, 470], [560, 30], [960, 60]];
  const boats = town => BOATS.slice(0, 1 + town).map((b, i) => `<g transform="translate(${b[0]} ${b[1]})"><g class="isl-boat" style="animation-delay:-${i * 0.9}s"><path d="M-16 0h32l-6 8h-20z" fill="${['#d6634a', '#3d6fb4', '#f2f2f2'][i % 3]}"/><path d="M0 -2v-20l13 17z" fill="#fff"/></g></g>`).join('');
  const WAVES = [[60, 60], [290, 40], [770, 40], [960, 310], [520, 450], [330, 380], [60, 600], [800, 620], [600, 250]];

  // ---------- 狀態 ----------
  const UIK = 'kids_island_ui';
  const ldUI = () => { try { return obj(JSON.parse(localStorage.getItem(UIK))); } catch (e) { return {}; } };
  const saveUI = p => { try { localStorage.setItem(UIK, JSON.stringify(Object.assign(ldUI(), p))); } catch (e) { } };
  const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const loggedIn = () => { try { const A = G.KidsAuth; return !!(A && A.configured() && A.isLoggedIn()); } catch (e) { return false; } };
  const reduced = () => { try { return G.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
  const hrefOf = (k, a) => a.href || `#s/${k}/${a.id}`;
  const actsOf = k => (G.KidsActs && G.KidsActs[k] || []).filter(a => !a.hidden);
  const strip = h => String(h || '').replace(/^index\.html(?=#)/, '');
  let D = { logged: false, g: null, Q: { q: {}, next: null, all: false }, T: null }, cur = null, timeMode = ldUI().time || 'auto';

  function gather() {
    const o = { logged: loggedIn(), g: null, Q: { q: {}, next: null, all: false }, T: null };
    if (!o.logged) return o;
    try { o.T = G.KidsDaily.today(); o.Q = quests(o.T); } catch (e) { }
    const in_ = {};
    try { in_.pct = pctOf(G.KidsCompletion.build(G.KidsDone.data(), G.KidsDone.ctx()).subjects); } catch (e) { }
    try { const SM = G.KESyncMerge, st = ddStats(SM.ddSum(ld('kids_daily', {})), SM.ddDay(Date.now())); in_.days = st.days; in_.streak = st.streak; } catch (e) { }
    in_.learned = learnedN(ld('ke_learned', {}));
    o.g = growth(in_);
    return o;
  }

  // ---------- 畫面 ----------
  sec.className = 'isl';
  sec.setAttribute('aria-label', '小朋友學習島');
  sec.innerHTML = `<header class="isl-top"><h1>🏝️ 小朋友學習島</h1><a class="isl-b isl-coin" id="isl-coin" href="account.html" hidden></a>`
    + `<button type="button" class="isl-b" id="isl-time" aria-label="切換時段"></button><button type="button" class="isl-b" id="isl-help" aria-label="看導覽">？</button>`
    + `<button type="button" class="isl-b" id="isl-listbtn" aria-expanded="false" aria-controls="isl-list">☰ 清單</button></header>`
    + `<div class="isl-body"><div class="isl-stage"><div class="isl-map" id="isl-map"><svg id="isl-svg" viewBox="0 0 1000 640" role="group" aria-label="學習島地圖：點一座島看看有什麼"></svg>`
    + `<div class="isl-tour" id="isl-tour" hidden></div></div><div class="isl-card" id="isl-card" hidden></div></div>`
    + `<aside class="isl-list" id="isl-list" aria-label="全部活動清單"><div class="isl-lh"><b>全部活動</b><button type="button" class="isl-b isl-x" id="isl-listx" aria-label="關閉清單">✕</button></div>`
    + `<input type="search" class="isl-q" id="isl-q" placeholder="🔍 找活動，例如：分數、成語" aria-label="搜尋活動" autocomplete="off"><div id="isl-items"></div></aside></div>`;
  const $ = id => document.getElementById(id), svg = $('isl-svg'), card = $('isl-card'), map = $('isl-map');

  function draw() {
    LIGHTS = [];
    const g = D.g || { isl: {}, town: 1 }, st = k => (D.g ? g.isl[k] : 1), town = D.g ? g.town : 1;   // 未登入：預設第 1 階
    let world = `<rect class="isl-sea" width="1000" height="640"/>` + WAVES.map(w => `<path d="M${w[0]} ${w[1]}q8-6 16 0t16 0" stroke="#fff" stroke-width="2.5" fill="none" opacity=".55"/>`).join('');
    world += bridges(town) + plaza(town);
    ISL.forEach(a => { world += `<g class="isl-i" data-k="${a[0]}">${island(BY[a[0]], st(a[0]))}</g>`; });
    world += boats(town);
    // 夜晚的光：窗戶、路燈、燈塔（全部完成時燈塔亮起）
    const all = D.Q.all;
    let lights = LIGHTS.map(l => (l[0] === 'lamp' ? `<circle cx="${f1(l[1])}" cy="${f1(l[2])}" r="7" fill="#ffe27a" opacity=".9"/>` : `<rect x="${f1(l[0])}" y="${f1(l[1])}" width="${l[2]}" height="${l[3]}" rx="1.5" fill="#ffd65a"/>`)).join('');
    const L = BY.geo, ly = L.y - 4 - (66 + st('geo') * 4) - 9;   // 燈塔燈室（BUILD.geo：高 66＋階段×4）
    const beam = `<g class="isl-beam${all ? ' on' : ''}"><path d="M${L.x} ${ly}L${L.x - 170} ${ly - 60}L${L.x - 170} ${ly + 40}z" fill="#ffe27a" opacity=".45"/><circle cx="${L.x}" cy="${ly}" r="14" fill="#fff6c2"/></g>`;
    // 上層（不被夜色蓋住）：島名、任務旗、廣場連結、🦉、說明圖釘、傳送門
    let top = '';
    ISL.forEach(a => {
      const I = BY[a[0]], S = SUBJ[a[0]] || { i: '', n: a[0] }, q = D.Q.q[a[0]], lt = S.i + ' ' + S.n + '・' + I.b;
      const lw = 24 + 18 * [...lt].reduce((n, c) => n + (/[\x20-\x7e️]/.test(c) ? (c === '️' ? 0 : 0.6) : 1), 0);   // 字寬估計：中文、emoji 1 字、英數半字
      top += `<g class="isl-lb" data-k="${a[0]}" role="button" tabindex="0" aria-label="${esc(S.n + '島：' + I.b + (q ? (q === 'done' ? '（今天的任務完成了）' : '（今天有任務）') : ''))}">`
        + `<rect x="${f1(I.x - lw / 2)}" y="${I.y + I.ry * 0.45 - 6}" width="${f1(lw)}" height="34" rx="17" fill="#fff" stroke="#1f2a37" stroke-opacity=".18" stroke-width="2"/>`
        + txt(I.x, I.y + I.ry * 0.45 + 17, esc(lt), 18, '#1f2a37', ' font-weight="700"')
        + (q ? `<g transform="translate(${f1(I.x + I.rx * 0.88)} ${f1(I.y + I.ry * 0.3)})"><g class="isl-flag ${q}"><path d="M0 0v-46" stroke="#1f2a37" stroke-width="3"/><path d="M1 -46h30l-7 11 7 11h-30z" fill="${q === 'done' ? '#2fb36d' : '#ff8a3d'}"/>${txt(14, -29, q === 'done' ? '✓' : '！', 15, '#fff', ' font-weight="900"')}</g></g>` : '')
        + '</g>';
    });
    top += `<a class="isl-pl" href="map.html" aria-label="課程地圖：哪些單元學完了"><rect x="${PZ.x - 136}" y="${PZ.y - 2}" width="132" height="56" fill="transparent"/><rect x="${PZ.x - 132}" y="${PZ.y + 10}" width="124" height="34" rx="17" fill="#fff" stroke="#3f9a4f" stroke-width="2.5"/>${txt(PZ.x - 70, PZ.y + 33, '🗺️ 課程地圖', 17, '#1f2a37', ' font-weight="700"')}</a>`
      + `<a class="isl-pl" href="#parent" aria-label="家長屋（家長專區）"><rect x="${PZ.x + 4}" y="${PZ.y - 2}" width="128" height="56" fill="transparent"/><rect x="${PZ.x + 10}" y="${PZ.y + 10}" width="114" height="34" rx="17" fill="#fff" stroke="#e0614f" stroke-width="2.5"/>${txt(PZ.x + 67, PZ.y + 33, '🏠 家長屋', 17, '#1f2a37', ' font-weight="700"')}</a>`;
    // 遊樂園三個傳送門（拉近遊樂園時才點得到，整頁開原本網址）
    const Gm = BY.game;
    top += `<g class="isl-portals">` + PORTALS.map((p, i) => { const a = (G.KidsActs.game || []).find(x => x.id === p[0]), px = Gm.x + 4 + i * 26 + 10, py = Gm.y + 6 - i * 6; const lx = px + (i - 1) * 16;   // 牌子左右錯開，不互相蓋住
      return a ? `<a href="${esc(a.href)}" aria-label="傳送門：${esc(p[1])}"><rect x="${px - 13}" y="${py - 26}" width="26" height="34" fill="transparent"/><rect x="${lx - 20}" y="${py - 46}" width="40" height="14" rx="7" fill="#fff" stroke="${p[2]}" stroke-width="1.5"/>${txt(lx, py - 35.5, p[1], 8, '#1f2a37', ' font-weight="700"')}</a>` : ''; }).join('') + '</g>';
    // 🦉：停在下一個任務的島旁邊；全部完成就到燈塔慶祝
    const ok = D.Q.next || (all ? 'geo' : null);
    if (ok) {
      const I = BY[ok], ox = I.x - I.rx * 1.02, oy = I.y - I.ry * 0.9;
      top += `<a class="isl-owl" id="isl-owl" href="${esc(owlHref())}" aria-label="${all ? '🦉 今天的清單全部完成了！' : '🦉 接著做：' + esc((D.T && D.T.next && D.T.next.name) || '')}"><g transform="translate(${f1(ox)} ${f1(oy)})"><g class="isl-bob"><circle r="27" fill="#fff" stroke="#8a6236" stroke-width="3"/>${txt(0, 10, '🦉', 30, '#000')}`
        + `<rect x="20" y="-44" width="${all ? 98 : 76}" height="26" rx="13" fill="#1f2a37"/>${txt(all ? 69 : 58, -26, all ? '全部完成！' : '接著做！', 14, '#fff', ' font-weight="700"')}</g></g></a>`;
    }
    svg.innerHTML = `<g class="isl-world">${world}</g><rect class="isl-tint" width="1000" height="640"/><g class="isl-lights">${lights}</g>${beam}${top}<g class="isl-pins" id="isl-pins"></g><g id="isl-fw"></g>`;
    svg.setAttribute('data-z', cur || '');
    if (cur) pins(cur);
  }
  // 🦉 的連結＝小助理的「接著做」（#td-next）；小助理還沒畫好就用今日清單那一列的入口
  function owlHref() {
    const t = document.getElementById('td-next');
    if (t && t.getAttribute('href')) return t.getAttribute('href');
    const n = D.T && D.T.next, s = n && (n.subs || []).find(x => !x.done);
    return n ? strip(s ? s.href : n.href) : '#home';
  }

  // ---------- 拉近／說明卡／圖釘 ----------
  const wide = () => { try { return G.matchMedia('(min-width: 1000px)').matches; } catch (e) { return false; } };
  function zoom(k) {
    cur = k && BY[k] ? k : null;
    sec.classList.toggle('isl-zoomed', !!cur); svg.setAttribute('data-z', cur || '');
    if (!cur) { svg.style.transform = ''; card.hidden = true; $('isl-pins').innerHTML = ''; return; }
    place(); pins(cur); cardHtml(cur);
    card.hidden = false;   // 直式：卡片接在地圖下面，不自動捲動（拉近的鏡頭要看得到）
  }
  function place() {
    if (!cur) return;
    const I = BY[cur], W = map.clientWidth, H = map.clientHeight, s = 2.3, px = I.x / 1000 * W, py = I.y / 640 * H;
    svg.style.transform = `translate(${f1((wide() ? W * 0.32 : W * 0.5) - px * s)}px,${f1(H * 0.5 - py * s)}px) scale(${s})`;
  }
  // 說明卡上前 6 個活動在島上冒編號圖釘（左 → 後 → 右繞上半圈；前面留給島名）
  function pins(k) {
    const I = BY[k], xs = actsOf(k).slice(0, 6), n = xs.length;
    $('isl-pins').innerHTML = xs.map((a, i) => {
      if (PORTALS.some(p => p[0] === a.id)) return '';   // 遊樂園：傳送門本身就是入口，不再冒圖釘
      const t = Math.PI / 180 * (n > 1 ? 200 + 140 * i / (n - 1) : 270), x = I.x + Math.cos(t) * I.rx * 0.82, y = I.y + Math.sin(t) * I.ry * 0.78 + 2;
      // 拉近 2.3 倍後半徑 14 ≈ 直徑 50px（iPad 直式），觸控 ≥44px
      return `<a href="${esc(hrefOf(k, a))}" aria-label="${i + 1}. ${esc(a.title)}"><circle cx="${f1(x)}" cy="${f1(y)}" r="14" fill="transparent"/><circle cx="${f1(x)}" cy="${f1(y)}" r="11.5" fill="#ff8a3d" stroke="#fff" stroke-width="2.5"/>${txt(x, y + 4.5, String(i + 1), 12, '#fff', ' font-weight="800"')}</a>`; }).join('');
  }
  // 做過幾次（kids-lock.js）：有單元 id（dk）的活動標 ✓1／✓2 🔒，鎖住的變灰（說明卡、右側清單共用；點進去由單元頁自己蓋「去挑戰」的卡）
  const lock = a => { try { const KL = G.KidsLock; return a.dk && KL ? { tag: KL.badge(a.dk), off: KL.isLocked(a.dk) } : { tag: '', off: false }; } catch (e) { return { tag: '', off: false }; } };
  function cardHtml(k) {
    const S = SUBJ[k] || { i: '', n: k }, I = BY[k], xs = actsOf(k), r = D.T && D.T.rows ? D.T.rows.find(x => x.k === k) : null;
    const icon = a => (/^</.test(a.icon || '') ? `<span class="isl-ai isl-svgi">${a.icon}</span>` : `<span class="isl-ai">${a.icon || '•'}</span>`);
    const desc = a => { try { return typeof a.desc === 'function' ? a.desc() : a.desc || ''; } catch (e) { return ''; } };
    const quest = r ? `<a class="isl-quest ${r.done ? 'done' : ''}" href="${esc(strip(((r.subs || []).find(x => !x.done) || r).href))}">${r.full ? '🎉 這裡全部學會了' : r.done ? '✓ 今天的任務完成了' : '！ 今天的任務'}：${esc(r.name)} ${r.full ? '（沒有新的可以學，今天算完成）' : r.n + ' / ' + r.goal + ' ' + esc(r.unit)}${r.done ? '' : ' ▶'}</a>` : '';
    card.innerHTML = `<div class="isl-ch"><span class="isl-ci" aria-hidden="true">${S.i}</span><div><h2>${esc(S.n)}・${esc(I.b)}</h2><p>${esc(I.line)}</p></div></div>${quest}`
      + `<ol class="isl-acts">${xs.map((a, i) => { const d = desc(a), pin = i < 6 && !PORTALS.some(p => p[0] === a.id), lk = lock(a); return `<li><a href="${esc(hrefOf(k, a))}"${lk.off ? ' class="kl-off"' : ''}><span class="isl-n${pin ? '' : ' off'}">${pin ? i + 1 : ''}</span>${icon(a)}<span class="isl-at"><b>${esc(a.title)}${lk.tag}</b>${d ? `<small>${esc(d)}</small>` : ''}</span></a></li>`; }).join('')}</ol>`
      + `<div class="isl-cf"><a class="isl-b" href="${k === 'english' ? '#en' : '#s/' + k}">${S.i} 打開${esc(S.n)}頁</a><button type="button" class="isl-b" id="isl-back">← 回到全島</button></div>`;
    card.setAttribute('aria-label', S.n + '島說明');
  }

  // ---------- 清單＋搜尋 ----------
  let listDone = false;
  function listHtml() {
    listDone = true;
    $('isl-items').innerHTML = G.KidsSubjects.map(s => { const xs = actsOf(s.k); return xs.length ? `<section class="isl-lg" data-k="${s.k}"><h3>${s.i} ${esc(s.n)}</h3><ul>${xs.map(a => { const lk = lock(a); return `<li data-q="${esc((s.n + ' ' + a.title + ' ' + (typeof a.desc === 'string' ? a.desc : '')).toLowerCase())}"><a href="${esc(hrefOf(s.k, a))}"${lk.off ? ' class="kl-off"' : ''}>${/^</.test(a.icon || '') ? '🎮' : a.icon || '•'} ${esc(a.title)}${lk.tag}</a></li>`; }).join('')}</ul></section>` : ''; }).join('') + '<p class="isl-none" id="isl-none" hidden>找不到，換個字試試看 🔍</p>';
    filter();
  }
  function filter() {
    const q = $('isl-q').value.trim().toLowerCase(); let n = 0;
    $('isl-items').querySelectorAll('.isl-lg').forEach(g => { let m = 0; g.querySelectorAll('li').forEach(li => { const on = !q || li.dataset.q.indexOf(q) >= 0; li.hidden = !on; if (on) m++; }); g.hidden = !m; n += m; });
    $('isl-none').hidden = n > 0;
  }
  function setList(open) {
    sec.classList.toggle('isl-list-open', open);
    $('isl-listbtn').setAttribute('aria-expanded', String(open));
    if (open && !listDone) listHtml();
    if (open && !wide()) try { $('isl-q').focus({ preventScroll: true }); } catch (e) { }
    if (cur) setTimeout(place, 0);
  }

  // ---------- 時段 ----------
  function applyTime() {
    const t = timeMode === 'auto' ? phase(new Date().getHours()) : timeMode, T = TIMES.find(x => x[0] === t);
    sec.setAttribute('data-time', t);
    $('isl-time').textContent = T[1] + ' ' + (timeMode === 'auto' ? '自動・' : '') + T[2];
  }

  // ---------- 導覽（3 步，看過記在本機；按 ？ 可以再看） ----------
  const TOUR = [['🏝️', '歡迎來到學習島！', '每一座島是一個科目。點一座島，鏡頭會飛過去，旁邊出現這座島可以玩的活動。'],
    ['🚩', '今天的任務在哪裡？', '島上插著「！」旗的是今天要做的任務，做完會變成「✓」。🦉 貓頭鷹會停在下一個任務旁邊，點牠就出發。'],
    ['☰', '找不到活動？', '按上面的「☰ 清單」可以看全部活動、打字搜尋。學得越多，島會越來越熱鬧喔！按「？」可以再看一次導覽。']];
  function tour(i) {
    const el = $('isl-tour');
    if (i == null || i >= TOUR.length) { el.hidden = true; el.innerHTML = ''; saveUI({ tour: 1 }); return; }
    const t = TOUR[i];
    el.innerHTML = `<div class="isl-tc" role="dialog" aria-label="學習島導覽 ${i + 1}/3"><div class="isl-ti">${t[0]}</div><h2>${t[1]}</h2><p>${t[2]}</p><div class="isl-td">${TOUR.map((_, j) => `<i${j === i ? ' class="on"' : ''}></i>`).join('')}</div>`
      + `<div class="isl-cf"><button type="button" class="isl-b" data-tour="end">跳過</button><button type="button" class="isl-b isl-go" data-tour="${i + 1}">${i < TOUR.length - 1 ? '下一步 ▶' : '知道了！'}</button></div></div>`;
    el.hidden = false;
  }

  // ---------- 慶祝（全部完成那天，這台只放一次煙火） ----------
  function party() {
    if (!D.Q.all || !D.T || ldUI().party === D.T.day) return;
    saveUI({ party: D.T.day });
    if (reduced()) return;
    const L = BY.geo, at = [[L.x - 60, L.y - 150], [L.x - 140, L.y - 110], [PZ.x + 10, PZ.y - 120]];
    $('isl-fw').innerHTML = at.map((p, i) => `<g transform="translate(${p[0]} ${p[1]})"><g class="isl-fwb" style="animation-delay:${i * 0.45}s">${Array.from({ length: 10 }, (_, j) => { const a = j * Math.PI / 5; return `<path d="M${f1(Math.cos(a) * 8)} ${f1(Math.sin(a) * 8)}L${f1(Math.cos(a) * 26)} ${f1(Math.sin(a) * 26)}" stroke="${['#ffd65a', '#ff8fb3', '#8ad3ff'][i]}" stroke-width="3.5" stroke-linecap="round"/>`; }).join('')}</g></g>`).join('');
    setTimeout(() => { const f = $('isl-fw'); if (f) f.innerHTML = ''; }, 4500);
  }

  // ---------- 學習幣 ----------
  function coins() {
    const el = $('isl-coin'); let v = null;
    try { v = loggedIn() && G.KidsCoins ? G.KidsCoins.balance() : null; } catch (e) { }
    el.hidden = !loggedIn();
    el.textContent = '🪙 ' + (v == null ? '…' : v);
    el.setAttribute('aria-label', '我的學習幣：' + (v == null ? '讀取中' : v + ' 枚'));
  }

  // ---------- 事件 ----------
  svg.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (a) { if (a.id === 'isl-owl') { e.preventDefault(); const h = owlHref(); if (h !== '#home') location.assign(h); } return; }   // 連結照原本的路由走
    const g = e.target.closest('[data-k]');
    zoom(g ? g.dataset.k : null);   // 點海＝回到全島
  });
  svg.addEventListener('keydown', e => { const g = e.target.closest && e.target.closest('.isl-lb'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); zoom(g.dataset.k); } });
  card.addEventListener('click', e => { if (e.target.closest('#isl-back')) zoom(null); });
  $('isl-time').onclick = () => { const o = ['auto'].concat(TIMES.map(x => x[0])); timeMode = o[(o.indexOf(timeMode) + 1) % o.length]; saveUI({ time: timeMode }); applyTime(); };
  $('isl-help').onclick = () => tour(0);
  $('isl-tour').addEventListener('click', e => { const b = e.target.closest('[data-tour]'); if (b) tour(b.dataset.tour === 'end' ? null : +b.dataset.tour); });
  $('isl-listbtn').onclick = () => setList(!sec.classList.contains('isl-list-open'));
  $('isl-listx').onclick = () => setList(false);
  $('isl-q').addEventListener('input', filter);
  $('isl-list').addEventListener('click', e => { if (e.target.closest('a') && !wide()) setList(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('home-page')) { if (!$('isl-tour').hidden) tour(null); else if (sec.classList.contains('isl-list-open') && !wide()) setList(false); else if (cur) zoom(null); } });
  let rt = null;
  G.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(place, 120); });
  document.addEventListener('visibilitychange', () => { sec.classList.toggle('isl-pause', document.hidden); if (!document.hidden) { applyTime(); later(100); } });
  // 資料變了（同步合併、完成紀錄、別的分頁）→ 閒下來重算重畫；不在首頁就不畫
  let tm = null;
  const onHome = () => document.body.classList.contains('home-page');
  function refresh() { if (!onHome()) return; D = gather(); draw(); coins(); party(); if (listDone) listHtml(); }   // 清單上的 ✓1／✓2 🔒 也跟著重畫（搜尋字保留）
  function later(ms) { clearTimeout(tm); tm = setTimeout(() => { if (G.requestIdleCallback) G.requestIdleCallback(refresh, { timeout: 800 }); else refresh(); }, ms); }
  // 從活動按上一頁回來：還停在剛才那座島（地圖藏起來時量不到大小，回來再對位一次）
  G.addEventListener('hashchange', () => { if (onHome()) { applyTime(); place(); later(40); } });
  ['kids-sync-updated', 'kids-done-changed'].forEach(ev => G.addEventListener(ev, () => later(300)));
  G.addEventListener('storage', e => { if (!e.key || /^(kids_jwt|kids_member|kids_daily|kids_daily_goal|kids_done|ke_learned|kids_mm_progress)$/.test(e.key)) later(300); });
  try { if (G.KidsCoins && G.KidsCoins.onChange) G.KidsCoins.onChange(coins); } catch (e) { }

  // 第一次：先畫預設樣子（不等紀錄），閒下來再算成長／任務
  applyTime(); draw(); coins(); setList(wide());
  if (onHome() && !ldUI().tour) tour(0);
  if (document.readyState === 'complete') later(60); else G.addEventListener('load', () => later(60));
  setInterval(() => { if (!document.hidden && timeMode === 'auto') applyTime(); }, 6e5);
  G.KidsIsland = { zoom, refresh, tour, _core: core, state: () => ({ cur, time: sec.getAttribute('data-time'), D }) };
})(typeof window !== 'undefined' ? window : globalThis);
