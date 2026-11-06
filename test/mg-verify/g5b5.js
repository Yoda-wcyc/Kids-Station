// 五下 單元五 大數與折線圖：驗算（跟出題用不同算法：讀法用「每位都寫出來再化簡」、國字用逐字解析、取概數用字串切位、折線圖從 SVG 的點座標讀回數值）
const PLV = { 個: 1, 十: 10, 百: 100, 千: 1e3, 萬: 1e4, 十萬: 1e5, 百萬: 1e6, 千萬: 1e7, 億: 1e8, 十億: 1e9, 百億: 1e10, 千億: 1e11, 兆: 1e12 };
const pos = name => String(PLV[name]).length - 1;
const NUM = '零一二三四五六七八九';
// 每一位都寫出「數字＋位名」，再把零化簡
function read(n) {
  const s = String(n), L = s.length; let out = '';
  for (let i = 0; i < L; i++) {
    const p = L - 1 - i, d = +s[i], g = p % 4 === 0 ? ['', '萬', '億', '兆'][p / 4] : '';
    out += d ? NUM[d] + ['', '十', '百', '千'][p % 4] + g : '零' + g;
  }
  return out.replace(/零+/g, '零').replace(/零([萬億兆])/g, '$1').replace(/兆億萬/g, '兆零').replace(/([兆億])萬/g, '$1零').replace(/兆億/g, '兆零')
    .replace(/零+/g, '零').replace(/零$/, '').replace(/^一十/, '十');
}
// 國字 → 數字
function parse(s) {
  const SU = { 十: 10, 百: 100, 千: 1000 }, BU = { 萬: 1e4, 億: 1e8, 兆: 1e12 }; let tot = 0, sec = 0, d = 0;
  for (const c of s) {
    if (NUM.includes(c)) d = NUM.indexOf(c);
    else if (SU[c]) { sec += (d || 1) * SU[c]; d = 0; }
    else if (BU[c]) { tot += (sec + d) * BU[c]; sec = 0; d = 0; }
  }
  return tot + sec + d;
}
// 字串切位取概數：k＝要取到第幾位（0＝個位）
function sround(n, k, how) {
  const s = String(n), head = s.slice(0, s.length - k), tail = s.slice(s.length - k);
  const up = how === 0 ? tail[0] >= '5' : how === 1 ? false : /[1-9]/.test(tail);
  return String(+head + (up ? 1 : 0)) + '0'.repeat(k);
}
// 從 SVG 的點座標讀回數值（圖的底線 y＝234，每格 20）
const pts = (q, step) => [...q.svg.matchAll(/<circle cx="[\d.]+" cy="([\d.]+)"/g)].map(m => (234 - +m[1]) / 20 * step);
const big = (a, b) => (String(a).length - String(b).length) || (String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0);
module.exports = {
  digit: v => +String(v.n).split('').reverse()[pos(v.p)],
  write: v => parse(v.s),
  read: v => read(v.n),
  cmp: v => v.ns.reduce((m, x) => ((big(x, m) > 0) === v.big ? x : m)),
  lread: (v, q) => { const ys = pts(q, v.step); return ys[v.xs.indexOf(q.q.match(/。(\d+月)是多少/)[1])]; },
  ten: v => { let x = 1; while (x * PLV[v.q] < PLV[v.p]) x *= 10; return x; },
  parts: v => {
    if (v.n != null) { const s = String(v.n).padStart(12, '0'); return [+s.slice(0, 4), +s.slice(4, 8), +s.slice(8)]; }
    return +(String(v.a) + String(v.b).padStart(4, '0') + String(v.c).padStart(4, '0'));
  },
  round: v => { const s = sround(v.n, pos(v.p), v.how); return +s.slice(0, s.length - (v.un === '億' ? 8 : 4)); },
  ldiff: (v, q) => { const ys = pts(q, v.step); return v.mode === 'range' ? Math.max(...ys) - Math.min(...ys) : Math.abs(ys[v.i] - ys[v.j]); },
  lup: (v, q) => { const ys = pts(q, v.step); let bi = 0; for (let i = 1; i < ys.length - 1; i++) if (ys[i + 1] - ys[i] > ys[bi + 1] - ys[bi]) bi = i; return v.xs[bi] + '到' + v.xs[bi + 1]; },
  rset: v => v.cand.filter(n => +sround(n, 8, 0) === v.X * 1e8),
  ltrend: (v, q) => { const ys = pts(q, v.step), out = []; for (let i = 0; i + 1 < ys.length; i++) if (ys[i + 1] < ys[i]) out.push(v.xs[i] + '到' + v.xs[i + 1]); return out; },
  lbig: (v, q) => { const ys = pts(q, v.step); let m = 0; for (let i = 0; i + 1 < ys.length; i++) m = Math.max(m, Math.abs(ys[i + 1] - ys[i])); return m; }
};
