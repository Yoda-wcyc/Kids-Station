// 六下 單元一 小數與分數的計算：驗算（另寫一個算式解析器，照「括號 → 乘除 → 加減」從字串重算；分數化小數用直式除法一位一位除）
const { R, add, sub, mul, div } = require('../../math/grade.js').H;
const tok = s => {
  if (s.includes('/')) { const [n, d] = s.split('/'); return R(+n, +d); }
  const [ip, fp = ''] = s.split('.'); let den = 1; for (let k = 0; k < fp.length; k++) den *= 10; return R(+(ip + fp), den);
};
function calc(e) {
  let i = 0;
  const atom = () => {
    if (e[i] === '(') { i++; const x = sum(); if (e[i++] !== ')') throw new Error('paren ' + e); return x; }
    const m = /^\d+(\.\d+)?(\/\d+)?/.exec(e.slice(i)); if (!m) throw new Error('num ' + e); i += m[0].length; return tok(m[0]);
  };
  const prod = () => { let x = atom(); while (e[i] === '*' || e[i] === ':') { const op = e[i++], y = atom(); x = op === '*' ? mul(x, y) : div(x, y); } return x; };
  const sum = () => { let x = prod(); while (e[i] === '+' || e[i] === '-') { const op = e[i++], y = prod(); x = op === '+' ? add(x, y) : sub(x, y); } return x; };
  const x = sum(); if (i !== e.length) throw new Error('left ' + e); return x;
}
const longDiv = (n, d) => { let s = Math.floor(n / d) + '.', rem = n % d; for (let k = 0; k < 12 && rem; k++) { rem *= 10; s += Math.floor(rem / d); rem %= d; } if (rem) throw new Error('not finite'); return tok(s.replace(/\.$/, '')); };
const E = v => calc(v.e);
// 照「括號 → 乘除 → 加減」走一遍，記下第一個真正算到的那一步（兩邊原樣的字）
function firstOp(e) {
  let i = 0, first = null;
  const done = (x, op, y) => { const s = x + op + y; if (first == null) first = s; return '(' + s + ')'; };
  const atom = () => { if (e[i] === '(') { i++; const x = sum(); i++; return x; } const m = /^\d+(\.\d+)?(\/\d+)?/.exec(e.slice(i)); i += m[0].length; return m[0]; };
  const prod = () => { let x = atom(); while (e[i] === '*' || e[i] === ':') { const op = e[i++]; x = done(x, op, atom()); } return x; };
  const sum = () => { let x = prod(); while (e[i] === '+' || e[i] === '-') { const op = e[i++]; x = done(x, op, prod()); } return x; };
  sum(); return first;
}
// 情境答案用另一條路算：跑步一天一天加；麥茶用「全部－喝掉的」
const story = v => { if (v.k === 0) { let s = R(0); for (let d = 0; d < v.n; d++) s = add(add(s, tok(v.m)), tok(v.f)); return s; } return sub(tok(v.L), mul(tok(v.L), tok(v.f))); };
module.exports = {
  dec: E, frac: E, mix: E, law: E, pick: E, life: E, law3: E,
  conv: v => (v.s != null ? tok(v.s) : add(v.w, longDiv(v.n, v.d))),
  first: v => firstOp(v.e),
  how: (v, q) => { const t = story(v); return q.ov.find(c => { const x = calc(c); return x[0] === t[0] && x[1] === t[1]; }); },
  set: v => { const t = calc(v.base); return v.cand.filter(c => { const x = calc(c); return x[0] === t[0] && x[1] === t[1]; }); }
};
