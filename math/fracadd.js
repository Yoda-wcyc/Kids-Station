/* fracadd.js — 異分母分數加減（2026-11-09，每日清單數學「異分母加減 10 題」）。純函式，瀏覽器 window.FA／Node 共用。
   出題（五年級程度）：分母 2～12、兩個分母不一樣；四種題型輪流：真分數＋真分數、真分數－真分數、帶分數＋帶分數、帶分數－帶分數（整數 1～3）。
     減法一定大減小、答案不會是 0 或負的；大約一半的題目答案要約分（以公分母寫出來還能再約）。一輪 10 題同一輪不重複。
   判分 grade(q, {w, n, d})（整數、分子、分母，空白＝0／沒填）：
     值不對 → 'wrong'；值對但沒約分、或假分數沒化成帶分數、或整數答案寫成分數 → 'fix'（只提醒、不算對錯，改好再送）；最簡 → 'ok'。
   steps(q)：答錯時看的算法（通分 → 分子加減 → 約分／化成帶分數）。
   mkId／fromId／mkEntry：數學錯題庫（id 'fa:…'，見下面），fracadd.html?mistakes=1 用 id 原題重練。 */
(function (G) {
  'use strict';
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const lcm = (a, b) => a / gcd(a, b) * b;
  const ri = (rnd, a, b) => a + Math.floor(rnd() * (b - a + 1));
  const KINDS = ['add', 'sub', 'madd', 'msub'];
  const KIND_NAME = { add: '真分數相加', sub: '真分數相減', madd: '帶分數相加', msub: '帶分數相減' };

  // 一個數 {w 整數, n 分子, d 分母} → 假分數的分子（分母 d）
  const imp = x => x.w * x.d + x.n;
  // 答案（最簡）：值 = N/D
  function answer(q) {
    const L = lcm(q.a.d, q.b.d), A = imp(q.a) * (L / q.a.d), B = imp(q.b) * (L / q.b.d), N = q.op === '+' ? A + B : A - B, g = gcd(N, L);
    const n = N / g, d = L / g;
    return { N, L, w: Math.floor(n / d), n: n % d, d, reduce: g > 1 };
  }
  function gen(kind, rnd) {
    rnd = rnd || Math.random;
    for (let t = 0; t < 200; t++) {
      const d1 = ri(rnd, 2, 12); let d2 = ri(rnd, 2, 12); if (d2 === d1) continue;
      const mixed = kind === 'madd' || kind === 'msub', op = kind === 'add' || kind === 'madd' ? '+' : '-';
      const a = { w: mixed ? ri(rnd, 1, 3) : 0, n: ri(rnd, 1, d1 - 1), d: d1 }, b = { w: mixed ? ri(rnd, op === '-' ? 0 : 1, op === '-' ? 2 : 3) : 0, n: ri(rnd, 1, d2 - 1), d: d2 };
      if (gcd(a.n, a.d) > 1 || gcd(b.n, b.d) > 1) continue;   // 題目本身是最簡分數
      if (op === '-' && imp(a) * d2 <= imp(b) * d1) continue;   // 大減小、不出 0
      const q = { kind, op, a, b }, ans = answer(q);
      if (!mixed && op === '+' && ans.w > 1) continue;
      return Object.assign(q, { id: mkId(q), ans });
    }
    return null;
  }
  /* 錯題庫（2026-11-09）：id 就是題目本身＝'fa:' 兩個數夾運算符，一個數＝[整數.]分子_分母（真分數不寫整數）：
     'fa:1_3+3_4'＝1/3＋3/4、'fa:2.1_3-1_4'＝2又1/3－1/4。題型由「有沒有整數＋運算符」推回來，fromId 用 id 原題重出。 */
  const tok = x => (x.w ? x.w + '.' : '') + x.n + '_' + x.d;
  const mkId = q => 'fa:' + tok(q.a) + q.op + tok(q.b);
  function fromId(id) {
    const m = /^fa:(?:(\d)\.)?(\d{1,2})_(\d{1,2})([+-])(?:(\d)\.)?(\d{1,2})_(\d{1,2})$/.exec(String(id));
    if (!m) return null;
    const a = { w: +(m[1] || 0), n: +m[2], d: +m[3] }, b = { w: +(m[5] || 0), n: +m[6], d: +m[7] }, op = m[4];
    if (![a, b].every(x => x.d >= 2 && x.d <= 12 && x.n >= 1 && x.n < x.d) || (op === '-' && imp(a) * b.d <= imp(b) * a.d)) return null;
    const mixed = a.w || b.w, q = { kind: mixed ? (op === '+' ? 'madd' : 'msub') : (op === '+' ? 'add' : 'sub'), op, a, b };
    return Object.assign(q, { id: mkId(q), ans: answer(q) });
  }
  // 錯題庫的一筆：p 只放清單要畫的（v＝兩個數的整數、分子、分母，op），不放答案、不放畫面
  const mkEntry = q => ({ id: mkId(q), p: { type: 'fracadd', v: [q.a.w, q.a.n, q.a.d, q.b.w, q.b.n, q.b.d], op: q.op, q: txt(q.a) + (q.op === '+' ? ' ＋ ' : ' － ') + txt(q.b) } });
  // 一輪 n 題：四種題型輪流；一半左右要約分（不夠就多抽幾次）
  function round(n, rnd) {
    rnd = rnd || Math.random;
    const out = [], seen = {};
    for (let i = 0, tries = 0, guard = 0; out.length < n && guard < 20000; guard++) {
      const q = gen(KINDS[i % KINDS.length], rnd); if (!q || seen[q.id]) continue;
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
  function grade(q, input) {
    const x = parse(input); if (!x) return { st: 'bad', msg: '分子和分母都要填（分母不能是 0）；整數答案只填左邊的格子。' };
    const a = q.ans, val = x.w * x.d + x.n;   // 值比較：val/x.d 跟 (a.w*a.d+a.n)/a.d
    if (val * a.d !== (a.w * a.d + a.n) * x.d) return { st: 'wrong' };
    if (x.frac && x.n === 0) return { st: 'fix', msg: '答案一樣大！分子是 0 的話，只要寫整數就好。' };
    if (x.frac && x.n >= x.d) return { st: 'fix', msg: '答案一樣大！但分子比分母大（或一樣），要化成帶分數。' };
    if (x.frac && gcd(x.n, x.d) > 1) return { st: 'fix', msg: '答案一樣大！但還可以約分，請約成最簡分數。' };
    if (!x.frac && a.n) return { st: 'wrong' };
    return { st: 'ok' };
  }
  const txt = x => (x.w ? x.w + (x.n ? ' 又 ' : '') : '') + (x.n ? x.n + '/' + x.d : x.w ? '' : '0');
  function steps(q) {
    const L = q.ans.L, ma = L / q.a.d, mb = L / q.b.d, out = [];
    out.push(`找公分母：${q.a.d} 和 ${q.b.d} 的最小公倍數是 ${L}`);
    if (q.a.w || q.b.w) out.push(`帶分數先化成假分數：${txt(q.a)} ＝ ${imp(q.a)}/${q.a.d}，${txt(q.b)} ＝ ${imp(q.b)}/${q.b.d}`);
    out.push(`通分：${imp(q.a)}/${q.a.d} ＝ ${imp(q.a) * ma}/${L}，${imp(q.b)}/${q.b.d} ＝ ${imp(q.b) * mb}/${L}`);
    out.push(`分子${q.op === '+' ? '相加' : '相減'}：${imp(q.a) * ma} ${q.op === '+' ? '＋' : '－'} ${imp(q.b) * mb} ＝ ${q.ans.N}，得到 ${q.ans.N}/${L}`);
    if (q.ans.reduce) out.push(`約分：${q.ans.N}/${L} 的分子分母同除以 ${gcd(q.ans.N, L)}`);
    if (q.ans.w && q.ans.n) out.push(`假分數化成帶分數`);
    out.push(`答案：${txt(q.ans)}`);
    return out;
  }
  const FA = { gcd, lcm, KINDS, KIND_NAME, gen, round, answer, parse, grade, steps, txt, imp, mkId, fromId, mkEntry };
  if (typeof module !== 'undefined' && module.exports) module.exports = FA;
  G.FA = FA;
})(typeof window !== 'undefined' ? window : globalThis);
