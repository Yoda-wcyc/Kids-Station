/* fracadd.js — 異分母分數加減（2026-11-09，每日清單數學「異分母加減 10 題」）。純函式，瀏覽器 window.FA／Node 共用。
   出題（五年級程度）：分母 2～12、兩個分母不一樣；四種題型輪流：真分數＋真分數、真分數－真分數、帶分數＋帶分數、帶分數－帶分數（整數 1～3）。
     減法一定大減小、答案不會是 0 或負的；大約一半的題目答案要約分（以公分母寫出來還能再約）。一輪 10 題同一輪不重複。
   判分 grade(q, {w, n, d})（整數、分子、分母，空白＝0／沒填）：
     寫法沒整理好（沒約分、假分數沒化成帶分數、分數部分 ≥ 1 沒進位、分子 0）→ 'fix'（只提醒、不算對錯，改好再送；2026-11-21 起值錯也先提醒一次，見 tidyMsg）；值不對 → 'wrong'；最簡 → 'ok'。
   🔁 進位挑戰（2026-11-21）：round(10, rnd, ['carry'])，每題的分數部分加起來都比 1 大，一定要化成帶分數再進位。
   steps(q)：答錯時看的算法（通分 → 分子加減 → 約分／化成帶分數）。
   mkId／fromId／mkEntry：數學錯題庫（id 'fa:…'，見下面），fracadd.html?mistakes=1 用 id 原題重練。 */
(function (G) {
  'use strict';
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const lcm = (a, b) => a / gcd(a, b) * b;
  const ri = (rnd, a, b) => a + Math.floor(rnd() * (b - a + 1));
  const KINDS = ['add', 'sub', 'madd', 'msub'];
  // fadd／fsub＝有假分數、mix3＝三個數連算（只有紙本錯題 fromId 會出現，隨機出題不出）；carry＝🔁 進位挑戰（2026-11-21）
  const KIND_NAME = { add: '真分數相加', sub: '真分數相減', madd: '帶分數相加', msub: '帶分數相減', fadd: '分數相加', fsub: '分數相減', mix3: '三個數連算', carry: '進位挑戰' };

  // 一個數 {w 整數, n 分子, d 分母} → 假分數的分子（分母 d）
  const imp = x => x.w * x.d + x.n;
  // 三個數（2026-11-21）：q.c＋q.op2 是第三個數和第二個運算符（沒有＝兩個數）；由左到右算
  const nums = q => q.c ? [q.a, q.b, q.c] : [q.a, q.b];
  const opsOf = q => q.c ? [q.op, q.op2] : [q.op];
  const sg = o => o === '+' ? '＋' : '－';
  // 答案（最簡）：值 = N/L；P＝每一步算完的分子（分母都是 L），由左到右
  function answer(q) {
    const xs = nums(q), os = opsOf(q), L = xs.reduce((m, x) => lcm(m, x.d), 1), S = xs.map(x => imp(x) * (L / x.d)), P = [S[0]];
    os.forEach((o, i) => P.push(o === '+' ? P[i] + S[i + 1] : P[i] - S[i + 1]));
    const N = P[P.length - 1], g = gcd(N, L), n = N / g, d = L / g;
    return { N, L, P, w: Math.floor(n / d), n: n % d, d, reduce: g > 1 };
  }
  // kind 'carry'（🔁 進位挑戰）：帶分數＋帶分數（或＋真分數），分數部分加起來一定比 1 大 → 一定要化成帶分數再進位到整數
  function gen(kind, rnd) {
    rnd = rnd || Math.random;
    for (let t = 0; t < 200; t++) {
      const d1 = ri(rnd, 2, 12); let d2 = ri(rnd, 2, 12); if (d2 === d1) continue;
      const carry = kind === 'carry', mixed = carry || kind === 'madd' || kind === 'msub', op = carry || kind === 'add' || kind === 'madd' ? '+' : '-';
      const a = { w: mixed ? ri(rnd, 1, 3) : 0, n: ri(rnd, 1, d1 - 1), d: d1 }, b = { w: carry ? ri(rnd, 0, 3) : mixed ? ri(rnd, op === '-' ? 0 : 1, op === '-' ? 2 : 3) : 0, n: ri(rnd, 1, d2 - 1), d: d2 };
      if (gcd(a.n, a.d) > 1 || gcd(b.n, b.d) > 1) continue;   // 題目本身是最簡分數
      if (op === '-' && imp(a) * d2 <= imp(b) * d1) continue;   // 大減小、不出 0
      if (carry && a.n * d2 + b.n * d1 <= d1 * d2) continue;   // 分數部分相加 ≤ 1 → 不用進位
      const q = { kind, op, a, b }, ans = answer(q);
      if (!mixed && op === '+' && ans.w > 1) continue;
      return Object.assign(q, { id: mkId(q), ans });
    }
    return null;
  }
  /* 錯題庫（2026-11-09）：id 就是題目本身＝'fa:' 兩個數夾運算符，一個數＝[整數.]分子_分母（真分數不寫整數）：
     'fa:1_3+3_4'＝1/3＋3/4、'fa:2.1_3-1_4'＝2又1/3－1/4。題型由「有沒有整數＋運算符」推回來，fromId 用 id 原題重出。
     fromId 比隨機出題寬（2026-11-19，紙本錯題 math/paper.js FA_ROWS 照原卷收）：分母 2～99、分數可以沒約分（3又15/27）、沒有整數時可以是假分數（33/14）；帶分數的分數部分仍要比 1 小。
     判分規則不變：答案一樣要最簡、假分數要化成帶分數（4又22/15 只提醒）。
     三個數連算（2026-11-21，紙本原題照收）：在後面再接一個運算符＋一個數，'fa:2.1_2+1.4_5-3.2_3'＝2又1/2＋1又4/5－3又2/3；由左到右算，每一步都要比 0 大。
       兩個數的舊 id 照舊還原；p.v 變 9 個數、p.op 是兩個運算符（'+-'）。隨機出題（一般一輪、進位挑戰）只出兩個數。 */
  const tok = x => (x.w ? x.w + '.' : '') + x.n + '_' + x.d;
  const mkId = q => 'fa:' + tok(q.a) + q.op + tok(q.b) + (q.c ? q.op2 + tok(q.c) : '');
  function fromId(id) {
    const m = /^fa:(?:(\d)\.)?(\d{1,2})_(\d{1,2})([+-])(?:(\d)\.)?(\d{1,2})_(\d{1,2})(?:([+-])(?:(\d)\.)?(\d{1,2})_(\d{1,2}))?$/.exec(String(id));
    if (!m) return null;
    const a = { w: +(m[1] || 0), n: +m[2], d: +m[3] }, b = { w: +(m[5] || 0), n: +m[6], d: +m[7] }, op = m[4];
    const q = { op, a, b }; if (m[8]) { q.op2 = m[8]; q.c = { w: +(m[9] || 0), n: +m[10], d: +m[11] }; }
    if (!nums(q).every(x => x.d >= 2 && x.n >= 1 && (!x.w || x.n < x.d))) return null;
    const ans = answer(q); if (!ans.P.every(p => p > 0)) return null;   // 減法要大減小、每一步都不出 0
    const mixed = a.w || b.w, big = a.n >= a.d || b.n >= b.d;
    q.kind = q.c ? 'mix3' : mixed ? (op === '+' ? 'madd' : 'msub') : big ? (op === '+' ? 'fadd' : 'fsub') : (op === '+' ? 'add' : 'sub');
    return Object.assign(q, { id: mkId(q), ans });
  }
  // 錯題庫的一筆：p 只放清單要畫的（v＝每個數的整數、分子、分母，op＝運算符；三個數 v 9 個、op 兩個字），不放答案、不放畫面
  const mkEntry = q => ({ id: mkId(q), p: { type: 'fracadd', v: [].concat(...nums(q).map(x => [x.w, x.n, x.d])), op: opsOf(q).join(''), q: qtxt(q) } });
  const qtxt = q => nums(q).map((x, i) => (i ? ' ' + sg(opsOf(q)[i - 1]) + ' ' : '') + txt(x)).join('');
  // 一輪 n 題：四種題型輪流（kinds＝['carry']＝🔁 進位挑戰）；一半左右要約分（不夠就多抽幾次）
  function round(n, rnd, kinds) {
    rnd = rnd || Math.random; kinds = kinds || KINDS;
    const out = [], seen = {};
    for (let i = 0, tries = 0, guard = 0; out.length < n && guard < 20000; guard++) {
      const q = gen(kinds[i % kinds.length], rnd); if (!q || seen[q.id]) continue;
      if (q.ans.reduce !== (out.length % 2 === 0) && ++tries < 200) continue;   // 一題要約分、一題不用，輪流（真的抽不到才放過）
      seen[q.id] = 1; out.push(q); i++; tries = 0;
    }
    return out;
  }
  // 讀輸入：空白＝沒填；回傳 null＝格式不對（分母 0、只填一半）
  function parse(x) {
    const v = s => (s == null || String(s).trim() === '' ? null : /^\d+$/.test(String(s).trim()) ? +String(s).trim() : NaN);
    const w = v(x && x.w), n = v(x && x.n), d = v(x && x.d);
    if ([w, n, d].some(Number.isNaN)) return null;
    if ((n == null) !== (d == null)) return null;   // 分子分母要一起填
    if (d === 0) return null;
    if (w == null && n == null) return null;
    return { w: w || 0, n: n || 0, d: d || 1, frac: n != null };
  }
  /* 收尾檢查（2026-11-21，紙本反覆錯：3又8/5 沒進位、沒約分）：寫法還沒整理好（分子 0、分數部分 ≥ 1、沒有整數的假分數、沒約分）
       → 先 'fix' 提醒（不責備、不說對錯），值對不對都一樣；again＝這一題已經提醒過一次又是這樣送 → 照原本的規則：值錯 'wrong'、值對照舊只提醒（'答案一樣大！…'）。 */
  function tidyMsg(x, again) {
    if (!x.frac) return '';
    if (x.n === 0) return again ? '答案一樣大！分子是 0 的話，只要寫整數就好。' : '再檢查一下：分子是 0 的話，只要寫整數就好喔。';
    if (x.n >= x.d) return again ? '答案一樣大！但分子比分母大（或一樣），要化成帶分數。' : x.w ? '再檢查一下：分數部分' + (x.n > x.d ? '比 1 大' : '剛好是 1') + '，要進位成帶分數喔。' : '再檢查一下：分子' + (x.n > x.d ? '比分母大' : '和分母一樣') + '，要化成帶分數（或整數）喔。';
    if (gcd(x.n, x.d) > 1) return again ? '答案一樣大！但還可以約分，請約成最簡分數。' : '再檢查一下：可以再約分喔。';
    return '';
  }
  function grade(q, input, again) {
    const x = parse(input); if (!x) return { st: 'bad', msg: '分子和分母都要填（分母不能是 0）；整數答案只填左邊的格子。' };
    const a = q.ans, val = x.w * x.d + x.n, same = val * a.d === (a.w * a.d + a.n) * x.d;   // 值比較：val/x.d 跟 (a.w*a.d+a.n)/a.d
    const t = tidyMsg(x, again && same);
    if (t && (same || !again)) return { st: 'fix', msg: t };
    if (!same) return { st: 'wrong' };
    return { st: 'ok' };
  }
  const txt = x => (x.w ? x.w + (x.n ? ' 又 ' : '') : '') + (x.n ? x.n + '/' + x.d : x.w ? '' : '0');
  function steps(q) {
    const A = q.ans, L = A.L, xs = nums(q), os = opsOf(q), S = xs.map(x => imp(x) * (L / x.d)), out = [], ds = [...new Set(xs.map(x => x.d))];
    out.push(`找公分母：${ds.length > 2 ? ds.slice(0, -1).join('、') + ' 和 ' + ds[ds.length - 1] : ds.join(' 和 ')} 的最小公倍數是 ${L}`);
    const mx = xs.filter(x => x.w);
    if (mx.length) out.push(`帶分數先化成假分數：${mx.map(x => `${txt(x)} ＝ ${imp(x)}/${x.d}`).join('，')}`);
    out.push(`通分：${xs.map((x, i) => `${imp(x)}/${x.d} ＝ ${S[i]}/${L}`).join('，')}`);
    if (q.c) out.push(`分子由左到右算（兩步都要算完）：${S[0]} ${sg(os[0])} ${S[1]} ＝ ${A.P[1]}，${A.P[1]} ${sg(os[1])} ${S[2]} ＝ ${A.N}，得到 ${A.N}/${L}`);
    else out.push(`分子${q.op === '+' ? '相加' : '相減'}：${S[0]} ${sg(q.op)} ${S[1]} ＝ ${A.N}，得到 ${A.N}/${L}`);
    const g = gcd(A.N, L);
    if (A.reduce) out.push(`約分：${A.N}/${L} 的分子分母同除以 ${g} ＝ ${A.N / g}/${A.d}`);
    if (A.w && A.n) out.push(`假分數化成帶分數（進位）：${A.N / g} ÷ ${A.d} ＝ ${A.w} 餘 ${A.n}，所以是 ${txt(A)}`);
    out.push(`答案：${txt(A)}`);
    return out;
  }
  const FA = { gcd, lcm, KINDS, KIND_NAME, gen, round, answer, parse, grade, steps, txt, qtxt, imp, nums, opsOf, mkId, fromId, mkEntry };
  if (typeof module !== 'undefined' && module.exports) module.exports = FA;
  G.FA = FA;
})(typeof window !== 'undefined' ? window : globalThis);
