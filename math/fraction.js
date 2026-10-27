/* fraction.js — 〈分數比較大小〉（國小五上）的出題、解答、判分純函式（2026-10-27）；不碰 DOM，瀏覽器（window.FRC）與 Node 共用。
   分數 F＝[w, n, d]：值＝w＋n/d。w＝0 且 n ≥ d＝假分數；w > 0＝帶分數（1 ≤ n < d）。
   比大小一律用「交叉相乘」的整數（cmp），不用浮點數。
   題型 kind（括號＝練習分組 group，照紙本練習卷由易到難）：
     sd   （basic 同分母・同分子）  同分母，比分子
     sn   （basic）                同分子（含單位分數；可以是假分數）：分母越大，每一份越小
     one  （bench 跟 1、跟一半比） 分母分子差 1（n/(n+1) 跟 1 差 1/(n+1)；(n+1)/n 比 1 多 1/n）
     half （bench）                一個比一半大、一個比一半小（分子×2 跟分母比）
     lcd  （lcd 通分）             兩個最簡分數（可以帶一樣的整數）直接通分到最小公倍數
     red  （red 先約分）           兩個都能約：先約成最簡分數，再比（可能一樣大）
     mixw （mix 假分數・帶分數）   化成帶分數後整數不同
     mixs （mix）                  化成帶分數後整數一樣，比旁邊的分數
     mixm （mix）                  分子是分母的倍數 → 化成整數（可能一樣大）
   v＝[aw, an, ad, bw, bn, bd]；build(kind, v) 只靠 v 就能重建同一題（錯題庫原題重做），不合規則回 null。
   練習：lcd／red／mix* 先「填」（通分／約分／化帶分數，數字鍵盤）再按 ＞＜＝；其他題直接按。
   考試：固定一份（PAPER，題目數字自編），①–⑤ 比大小、⑥ 只填，配分 15／15／20／20／20／10＝100。 */
(function (G) {
  'use strict';

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function lcm(a, b) { return a && b ? a / gcd(a, b) * b : 0; }
  function isInt(n) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n; }
  function ri(rnd, a, b) { return a + Math.floor(rnd() * (b - a + 1)); }
  function shuffle(rnd, xs) { xs = xs.slice(); for (var i = xs.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = xs[i]; xs[i] = xs[j]; xs[j] = t; } return xs; }
  function num(s) { s = String(s == null ? '' : s).replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 65248); }).trim(); return /^\d{1,6}$/.test(s) ? +s : null; }

  // ---------- 分數 ----------
  function top(F) { return F[0] * F[2] + F[1]; }                          // 化成假分數的分子
  function cmp(A, B) { var x = top(A) * B[2], y = top(B) * A[2]; return x > y ? '>' : x < y ? '<' : '='; }
  function okF(F) { return Array.isArray(F) && F.length === 3 && F.every(isInt) && F[2] >= 2 && F[2] <= 999 && F[0] >= 0 && F[0] <= 99 && F[1] <= 999 && (F[0] > 0 ? F[1] >= 1 && F[1] < F[2] : F[1] >= 1); }
  function improper(F) { return F[0] === 0 && F[1] >= F[2]; }
  function proper(F) { return F[0] === 0 && F[1] < F[2]; }
  function whole(F) { return F[0] + Math.floor(F[1] / F[2]); }              // 整數部分
  function rest(F) { return F[1] % F[2]; }                                // 旁邊分數的分子（分母不變）
  function simp(n, d) { var g = gcd(n, d); return [n / g, d / g]; }
  var SIGN = { '>': '＞', '<': '＜', '=': '＝' };
  var SIGNS = ['>', '<', '='];
  // 純文字（錯題庫 q、測試訊息）
  function txt(F) { return (F[0] ? F[0] + '又' : '') + F[1] + '/' + F[2]; }
  // 上下排的 HTML（只有數字＋固定字，不用跳脫）
  function fr(n, d) { return '<span class="fr"><span class="fr-n">' + n + '</span><span class="fr-d">' + d + '</span></span>'; }
  function fh(F) { return F[0] ? '<span class="frm"><span class="fr-w">' + F[0] + '</span>' + fr(F[1], F[2]) + '</span>' : fr(F[1], F[2]); }

  // ---------- 題型 ----------
  var GROUPS = [['basic', '同分母・同分子'], ['bench', '跟 1、跟一半比'], ['lcd', '通分再比'], ['red', '先約分再比'], ['mix', '假分數・帶分數']];
  var GROUP_KINDS = { basic: ['sd', 'sn'], bench: ['one', 'half'], lcd: ['lcd'], red: ['red'], mix: ['mixw', 'mixs', 'mixm'] };
  var GROUP_OF = {}; Object.keys(GROUP_KINDS).forEach(function (g) { GROUP_KINDS[g].forEach(function (k) { GROUP_OF[k] = g; }); });
  var KIND_NAME = { sd: '同分母', sn: '同分子', one: '跟 1 比', half: '跟一半比', lcd: '通分', red: '先約分', mixw: '整數不同', mixs: '整數一樣', mixm: '化成整數' };

  // 每種題型的規則（build 用來擋錯題庫的壞資料，也保證題型名實相符）
  function rule(k, A, B) {
    var same = A.join() === B.join();
    switch (k) {
      case 'sd': return proper(A) && proper(B) && A[2] === B[2] && A[1] !== B[1];
      case 'sn': return A[0] === 0 && B[0] === 0 && A[1] === B[1] && A[2] !== B[2];
      case 'one': return A[0] === 0 && B[0] === 0 && !same && ((A[1] === A[2] - 1 && B[1] === B[2] - 1) || (A[1] === A[2] + 1 && B[1] === B[2] + 1));
      case 'half': return proper(A) && proper(B) && A[1] !== B[1] && A[2] !== B[2] && (2 * A[1] - A[2]) * (2 * B[1] - B[2]) < 0;
      case 'lcd': return A[0] === B[0] && A[1] < A[2] && B[1] < B[2] && A[2] !== B[2] && gcd(A[1], A[2]) === 1 && gcd(B[1], B[2]) === 1 && lcm(A[2], B[2]) <= 120;
      case 'red': return proper(A) && proper(B) && !same && gcd(A[1], A[2]) > 1 && gcd(B[1], B[2]) > 1;
      case 'mixw': return (improper(A) || improper(B)) && whole(A) !== whole(B);
      case 'mixs': return (improper(A) || improper(B)) && whole(A) === whole(B) && whole(A) >= 1 && rest(A) > 0 && rest(B) > 0 && !same;
      case 'mixm': return ((improper(A) && rest(A) === 0) || (improper(B) && rest(B) === 0)) && !same;
    }
    return false;
  }

  // 要先填的格子：lcd＝通分（分子、分母）；red＝約成最簡分數；mix*＝假分數化成帶分數（整數＋分子，分母不變；整除的只填整數）
  function fillOf(k, A, B) {
    if (k === 'lcd') { var L = lcm(A[2], B[2]); return { t: 'lcd', L: L, a: [A[1] * L / A[2], L], b: [B[1] * L / B[2], L] }; }
    if (k === 'red') return { t: 'red', a: simp(A[1], A[2]), b: simp(B[1], B[2]) };
    if (GROUP_OF[k] === 'mix') {
      var one = function (F) { return improper(F) ? { w: whole(F), r: rest(F), d: F[2] } : null; };
      return { t: 'mix', a: one(A), b: one(B) };
    }
    return null;
  }

  function build(k, v) {
    if (!GROUP_OF[k] || !Array.isArray(v) || v.length !== 6 || !v.every(isInt)) return null;
    var A = v.slice(0, 3), B = v.slice(3, 6);
    if (!okF(A) || !okF(B) || !rule(k, A, B)) return null;
    var ans = cmp(A, B);
    return { id: 'frc:' + k + ':' + v.join('-'), kind: k, group: GROUP_OF[k], v: v.slice(), A: A, B: B, ans: ans, fill: fillOf(k, A, B),
      text: txt(A) + ' ○ ' + txt(B) };
  }

  // ---------- 隨機出題（產生 v，交給 build 檢查）----------
  function properPair(rnd, dlo, dhi) { var d = ri(rnd, dlo, dhi), n = ri(rnd, 1, d - 1); return [n, d]; }
  function coprimeOf(rnd, d) { var n; do { n = ri(rnd, 1, d - 1); } while (gcd(n, d) !== 1); return n; }
  function gen(k, rnd) {
    var a, b, d, n, w;
    switch (k) {
      case 'sd': d = ri(rnd, 3, 15); a = ri(rnd, 1, d - 1); do { b = ri(rnd, 1, d - 1); } while (b === a); return [0, a, d, 0, b, d];
      case 'sn': {
        n = rnd() < 0.4 ? 1 : ri(rnd, 2, 12);
        var lo = rnd() < 0.25 ? Math.max(2, n - 5) : n + 1, hi = n + 14;
        a = ri(rnd, lo, hi); do { b = ri(rnd, lo, hi); } while (b === a);
        return [0, n, a, 0, n, b];
      }
      case 'one':
        if (rnd() < 0.7) { a = ri(rnd, 1, 30); do { b = ri(rnd, 1, 30); } while (b === a); return [0, a, a + 1, 0, b, b + 1]; }
        a = ri(rnd, 2, 20); do { b = ri(rnd, 2, 20); } while (b === a); return [0, a + 1, a, 0, b + 1, b];
      case 'half': {
        var hd = ri(rnd, 4, 30), hn = ri(rnd, Math.floor(hd / 2) + 1, hd - 1), ld = ri(rnd, 3, 30), ln = ri(rnd, 1, Math.ceil(ld / 2) - 1);
        return rnd() < 0.5 ? [0, hn, hd, 0, ln, ld] : [0, ln, ld, 0, hn, hd];
      }
      case 'lcd': {
        var d1 = ri(rnd, 3, 15), d2; do { d2 = ri(rnd, 3, 15); } while (d2 === d1 || lcm(d1, d2) > 90);
        w = rnd() < 0.25 ? ri(rnd, 1, 5) : 0;
        return [w, coprimeOf(rnd, d1), d1, w, coprimeOf(rnd, d2), d2];
      }
      case 'red': {
        var q1 = ri(rnd, 2, 12), p1 = coprimeOf(rnd, q1), q2, p2;
        if (rnd() < 0.25) { q2 = q1; p2 = p1; } else { q2 = ri(rnd, 2, 12); p2 = coprimeOf(rnd, q2); }
        var k1 = ri(rnd, 2, Math.max(2, Math.floor(60 / q1))), k2 = ri(rnd, 2, Math.max(2, Math.floor(60 / q2)));
        return [0, p1 * k1, q1 * k1, 0, p2 * k2, q2 * k2];
      }
      case 'mixw': {
        var da = ri(rnd, 2, 12), wa = ri(rnd, 1, 5), A = [0, wa * da + ri(rnd, 1, da - 1), da], wb;
        do { wb = ri(rnd, 1, 6); } while (wb === wa);
        var db = ri(rnd, 2, 12), rb = ri(rnd, 1, db - 1), B = rnd() < 0.5 ? [0, wb * db + rb, db] : [wb, rb, db];
        return rnd() < 0.5 ? A.concat(B) : B.concat(A);
      }
      case 'mixs': {
        w = ri(rnd, 1, 5);
        var pa, pb;
        if (rnd() < 0.4) { var u1 = ri(rnd, 2, 12), u2; do { u2 = ri(rnd, 2, 12); } while (u2 === u1); pa = [1, u1]; pb = [1, u2]; }   // 旁邊是單位分數
        else { pa = properPair(rnd, 2, 12); pb = properPair(rnd, 2, 12); }
        var FA = [0, w * pa[1] + pa[0], pa[1]], FB = rnd() < 0.5 ? [0, w * pb[1] + pb[0], pb[1]] : [w, pb[0], pb[1]];
        return rnd() < 0.5 ? FA.concat(FB) : FB.concat(FA);
      }
      case 'mixm': {
        var md = ri(rnd, 2, 20), mw = ri(rnd, 1, 6), MA = [0, mw * md, md], MB, r = rnd();
        if (r < 0.4) { var md2 = ri(rnd, 2, 20); MB = [0, mw * md2, md2]; }                         // 一樣大
        else if (r < 0.7) { var md3 = ri(rnd, 2, 20); MB = [0, ri(rnd, 1, 6) * md3, md3]; }           // 另一個也整除
        else { var md4 = ri(rnd, 2, 12), w4 = ri(rnd, 1, 6), r4 = ri(rnd, 1, md4 - 1); MB = rnd() < 0.5 ? [0, w4 * md4 + r4, md4] : [w4, r4, md4]; }
        return rnd() < 0.5 ? MA.concat(MB) : MB.concat(MA);
      }
    }
    return null;
  }
  function make(k, rnd) { rnd = rnd || Math.random; for (var i = 0; i < 300; i++) { var Q = build(k, gen(k, rnd)); if (Q) return Q; } return null; }
  function round(group, n, rnd) {
    rnd = rnd || Math.random;
    var ks = GROUP_KINDS[group]; if (!ks) return [];
    var out = [], seen = {}, order = shuffle(rnd, ks), guard = 0;
    while (out.length < n && guard++ < 300) { var Q = make(order[out.length % order.length], rnd); if (Q && !seen[Q.id]) { seen[Q.id] = 1; out.push(Q); } }
    return shuffle(rnd, out);
  }

  // ---------- 判分 ----------
  // 比大小：s＝'>'｜'<'｜'='
  function checkCmp(Q, s) { var ok = SIGNS.indexOf(s) >= 0 && s === Q.ans; return { ok: ok, hint: ok ? '' : cmpHint(Q) }; }
  // 填格子：f＝{an, ad, bn, bd}（lcd、red）或 {aw, ar, bw, br}（mix）；回 {ok, bad:[格子], hint}
  function checkFill(Q, f) {
    var F = Q.fill, bad = [], hint = '';
    if (!F) return { ok: true, bad: [], hint: '' };
    f = f || {};
    if (F.t === 'lcd' || F.t === 'red') {
      ['a', 'b'].forEach(function (s) {
        var want = F[s], X = s === 'a' ? Q.A : Q.B, n = num(f[s + 'n']), d = num(f[s + 'd']);
        if (n === want[0] && d === want[1]) return;
        if (n == null || d == null) { bad.push(s + 'n', s + 'd'); hint = hint || '分子、分母都要填'; return; }
        var eq = n * X[2] === X[1] * d && d > 0;   // 跟原來的分數一樣大（交叉相乘）
        if (F.t === 'lcd') {
          if (d !== F.L) { bad.push(s + 'd'); if (eq && d % Q.A[2] === 0 && d % Q.B[2] === 0) bad.push(s + 'n'); hint = hint || (eq && d % Q.A[2] === 0 && d % Q.B[2] === 0 ? '這樣也通分了，但要用最小公倍數 ' + F.L + ' 當分母（數字小、比較好算）' : '分母要變成一樣：找 ' + Q.A[2] + ' 和 ' + Q.B[2] + ' 的最小公倍數'); }
          else { bad.push(s + 'n'); hint = hint || '分母從 ' + X[2] + ' 變成 ' + F.L + ' 是 ×' + (F.L / X[2]) + '，分子也要 ×' + (F.L / X[2]); }
        } else {
          bad.push(s + 'n', s + 'd');
          hint = hint || (eq ? '還可以再約：' + fr(n, d) + ' 的分子、分母還有公因數 ' + gcd(n, d) : '分子、分母要除以同一個數：' + fr(X[1], X[2]) + ' 的最大公因數是 ' + gcd(X[1], X[2]));
        }
      });
    } else {
      ['a', 'b'].forEach(function (s) {
        var want = F[s], X = s === 'a' ? Q.A : Q.B; if (!want) return;
        var w = num(f[s + 'w']), r = want.r ? num(f[s + 'r']) : 0;
        if (w === want.w && r === want.r) return;
        if (w !== want.w) bad.push(s + 'w'); if (r !== want.r) bad.push(s + 'r');
        hint = hint || (X[1] + ' ÷ ' + X[2] + ' ＝ 商 … 餘數：商是整數部分' + (want.r ? '，餘數是旁邊分數的分子（分母還是 ' + X[2] + '）' : '（整除了，就是整數）'));
      });
    }
    return { ok: !bad.length, bad: bad, hint: hint };
  }
  function fillAnswer(Q) {   // 正解的格子（測試、考試正解顯示用）
    var F = Q.fill; if (!F) return null;
    if (F.t !== 'mix') return { an: F.a[0], ad: F.a[1], bn: F.b[0], bd: F.b[1] };
    var o = {}; ['a', 'b'].forEach(function (s) { if (F[s]) { o[s + 'w'] = F[s].w; if (F[s].r) o[s + 'r'] = F[s].r; } }); return o;
  }

  // ---------- 提示（答錯時：給方法，不給答案）與步驟（做完／考試後：完整說明）----------
  function cmpHint(Q) {
    var A = Q.A, B = Q.B;
    switch (Q.kind) {
      case 'sd': return '分母一樣，都是把 1 個分成 ' + A[2] + ' 份 → 比分子：誰拿的份數多？';
      case 'sn': return '分子一樣，都拿 ' + A[1] + ' 份 → 比一份有多大：分母越大，一份越小';
      case 'one': return A[1] < A[2] ? '想一想：' + fh(A) + ' 跟 1 差 ' + fr(1, A[2]) + '，' + fh(B) + ' 跟 1 差 ' + fr(1, B[2]) + '。差得越少，越接近 1' : '想一想：' + fh(A) + ' 比 1 多 ' + fr(1, A[2]) + '，' + fh(B) + ' 比 1 多 ' + fr(1, B[2]) + '。多得越多越大';
      case 'half': return '跟一半比：分子 ×2，跟分母比。比分母大＝比一半大';
      case 'lcd': return '看上面通分好的分數：分母一樣了，比分子';
      case 'red': return '看上面約好的分數' + (Q.fill.a.join() === Q.fill.b.join() ? '：兩個一模一樣嗎？' : '：分母不一樣的話再通分，再比分子');
      default: return '看上面化好的帶分數：先比整數，整數一樣再比旁邊的分數';
    }
  }
  // 兩個真分數（[n,d]）怎麼比：同分母、同分子、通分
  function partLines(p, q) {
    if (p[1] === q[1]) return ['分母一樣，比分子：' + p[0] + ' ' + SIGN[p[0] > q[0] ? '>' : p[0] < q[0] ? '<' : '='] + ' ' + q[0]];
    if (p[0] === q[0]) return ['分子一樣，分母越大一份越小：' + fr(1, p[1]) + ' ' + SIGN[p[1] < q[1] ? '>' : '<'] + ' ' + fr(1, q[1])];
    var L = lcm(p[1], q[1]), x = p[0] * L / p[1], y = q[0] * L / q[1];
    return [p[1] + ' 和 ' + q[1] + ' 的最小公倍數是 ' + L + '：' + fr(p[0], p[1]) + '＝' + fr(x, L) + '、' + fr(q[0], q[1]) + '＝' + fr(y, L), '比分子：' + x + ' ' + SIGN[x > y ? '>' : x < y ? '<' : '='] + ' ' + y];
  }
  function mixed(F) { return improper(F) ? (rest(F) ? [whole(F), rest(F), F[2]] : null) : F; }   // 整除的回 null（是整數）
  function mixHTML(F) { var m = mixed(F); return m ? fh(m) : String(whole(F)); }
  function steps(Q) {
    var A = Q.A, B = Q.B, out = [], s = SIGN[Q.ans];
    switch (Q.kind) {
      case 'sd': case 'sn': case 'lcd': out = (A[0] ? ['整數一樣都是 ' + A[0] + '，比旁邊的分數'] : []).concat(partLines([A[1], A[2]], [B[1], B[2]])); break;
      case 'one':
        out = A[1] < A[2] ? [fh(A) + ' 跟 1 差 ' + fr(1, A[2]) + '，' + fh(B) + ' 跟 1 差 ' + fr(1, B[2]), '差得越少越大：' + fr(1, A[2]) + ' ' + SIGN[cmp([0, 1, A[2]], [0, 1, B[2]])] + ' ' + fr(1, B[2]) + '，所以 ' + fh(A) + ' ' + s + ' ' + fh(B)]
          : [fh(A) + ' 比 1 多 ' + fr(1, A[2]) + '，' + fh(B) + ' 比 1 多 ' + fr(1, B[2]), '多得越多越大：' + fr(1, A[2]) + ' ' + s + ' ' + fr(1, B[2])];
        break;
      case 'half':
        out = [A, B].map(function (F) { var big = 2 * F[1] > F[2]; return fh(F) + '：' + F[1] + '×2＝' + (2 * F[1]) + (big ? ' ＞ ' : ' ＜ ') + F[2] + ' → 比一半' + (big ? '大' : '小'); });
        break;
      case 'red': {
        var a = Q.fill.a, b = Q.fill.b;
        out = ['先約分：' + fh(A) + '＝' + fr(a[0], a[1]) + '（÷' + gcd(A[1], A[2]) + '）、' + fh(B) + '＝' + fr(b[0], b[1]) + '（÷' + gcd(B[1], B[2]) + '）'];
        out = out.concat(a.join() === b.join() ? ['約完一模一樣 → 一樣大'] : partLines(a, b));
        break;
      }
      default: {
        out = ['化成帶分數（或整數）：' + fh(A) + (improper(A) ? '＝' + mixHTML(A) : '') + '、' + fh(B) + (improper(B) ? '＝' + mixHTML(B) : '')];
        var wa = whole(A), wb = whole(B);
        if (wa !== wb) out.push('先比整數：' + wa + ' ' + SIGN[wa > wb ? '>' : '<'] + ' ' + wb);
        else if (!rest(A) && !rest(B)) out.push('都是 ' + wa + ' → 一樣大');
        else if (!rest(A) || !rest(B)) out.push('整數一樣都是 ' + wa + '，可是有一個旁邊還多一點');
        else out = out.concat(['整數一樣都是 ' + wa + '，比旁邊的分數'], partLines([rest(A), A[2]], [rest(B), B[2]]));
      }
    }
    out.push('所以 ' + fh(A) + ' ' + s + ' ' + fh(B));
    return out;
  }
  function answerHTML(Q) { return fh(Q.A) + ' ' + SIGN[Q.ans] + ' ' + fh(Q.B); }
  function fillHTML(Q) {   // 填格子的正解
    var F = Q.fill; if (!F) return '';
    if (F.t !== 'mix') return fh(Q.A) + '＝' + fr(F.a[0], F.a[1]) + '、' + fh(Q.B) + '＝' + fr(F.b[0], F.b[1]);
    return [Q.A, Q.B].filter(improper).map(function (X) { return fh(X) + '＝' + mixHTML(X); }).join('、');
  }

  // ---------- 考試：固定一份（數字自編；觀念、題型照紙本練習卷）----------
  var PAPER = [
    { no: 1, title: '同分母・同分子', note: '每題 3 分', pts: 3, mode: 'cmp', items: [['sd', [0, 7, 11, 0, 4, 11]], ['sn', [0, 1, 7, 0, 1, 4]], ['sn', [0, 5, 9, 0, 5, 13]], ['sd', [0, 9, 14, 0, 13, 14]], ['sn', [0, 11, 6, 0, 11, 8]]] },
    { no: 2, title: '跟 1、跟一半比', note: '每題 3 分', pts: 3, mode: 'cmp', items: [['one', [0, 6, 7, 0, 8, 9]], ['one', [0, 12, 13, 0, 10, 11]], ['half', [0, 5, 12, 0, 9, 16]], ['half', [0, 13, 24, 0, 7, 15]], ['one', [0, 9, 8, 0, 12, 11]]] },
    { no: 3, title: '通分再比', note: '每題 4 分', pts: 4, mode: 'cmp', items: [['lcd', [0, 4, 7, 0, 3, 5]], ['lcd', [0, 5, 9, 0, 7, 12]], ['lcd', [0, 11, 15, 0, 7, 10]], ['lcd', [3, 5, 6, 3, 7, 9]], ['lcd', [0, 3, 8, 0, 5, 14]]] },
    { no: 4, title: '先約分再比', note: '每題 4 分', pts: 4, mode: 'cmp', items: [['red', [0, 6, 14, 0, 9, 21]], ['red', [0, 10, 25, 0, 6, 18]], ['red', [0, 8, 20, 0, 9, 15]], ['red', [0, 15, 18, 0, 14, 21]], ['red', [0, 4, 22, 0, 6, 27]]] },
    { no: 5, title: '假分數・帶分數', note: '每題 4 分', pts: 4, mode: 'cmp', items: [['mixs', [0, 23, 6, 0, 17, 5]], ['mixw', [0, 19, 4, 3, 5, 7]], ['mixs', [0, 9, 8, 0, 10, 9]], ['mixm', [0, 54, 18, 0, 48, 16]], ['mixm', [0, 25, 7, 0, 40, 10]]] },
    { no: 6, title: '填填看：通分、約分、化成帶分數', note: '每題 2 分，全部填對才給分', pts: 2, mode: 'fill', items: [['lcd', [0, 2, 9, 0, 5, 6]], ['lcd', [0, 3, 4, 0, 5, 14]], ['red', [0, 12, 16, 0, 20, 45]], ['mixs', [0, 29, 8, 0, 31, 9]], ['mixm', [0, 42, 14, 0, 38, 6]]] }
  ];
  function exam() {
    return PAPER.map(function (s) {
      return { no: s.no, title: s.title, note: s.note, pts: s.pts, mode: s.mode, items: s.items.map(function (it, j) { var Q = build(it[0], it[1]); Q.pid = s.no + '-' + (j + 1); return Q; }) };
    });
  }
  // answers：{Q.id: '>'|'<'|'='（比大小）或 {an,ad,…}（填）}；回 {total, secs:[{no,title,got,max,items:[{Q, r:{ok,got,max}}]}]}
  function examScore(secs, answers) {
    answers = answers || {}; var total = 0;
    var out = secs.map(function (s) {
      var got = 0, items = s.items.map(function (Q) {
        var a = answers[Q.id], ok = s.mode === 'fill' ? checkFill(Q, a).ok : checkCmp(Q, a).ok;
        got += ok ? s.pts : 0; return { Q: Q, r: { ok: ok, got: ok ? s.pts : 0, max: s.pts } };
      });
      total += got; return { no: s.no, title: s.title, mode: s.mode, got: got, max: s.pts * s.items.length, items: items };
    });
    return { total: total, secs: out };
  }

  // ---------- 錯題庫 ----------
  // 考試⑥填填看的題跟①–⑤數字都不一樣，id 不會撞；錯題庫重做一律照練習的做法（先填再比）
  function mkEntry(Q) { return { id: Q.id, p: { type: 'fraction', k: Q.kind, v: Q.v.slice(), q: Q.text } }; }
  function fromMistake(p) { return p && p.type === 'fraction' && GROUP_OF[p.k] && Array.isArray(p.v) ? build(p.k, p.v) : null; }

  var FRC = { GROUPS: GROUPS, GROUP_KINDS: GROUP_KINDS, GROUP_OF: GROUP_OF, KIND_NAME: KIND_NAME, SIGN: SIGN, SIGNS: SIGNS, PAPER: PAPER,
    gcd: gcd, lcm: lcm, num: num, top: top, cmp: cmp, okF: okF, improper: improper, whole: whole, rest: rest, simp: simp, txt: txt, fr: fr, fh: fh, mixHTML: mixHTML,
    rule: rule, build: build, gen: gen, make: make, round: round, checkCmp: checkCmp, checkFill: checkFill, fillAnswer: fillAnswer,
    cmpHint: cmpHint, steps: steps, answerHTML: answerHTML, fillHTML: fillHTML, exam: exam, examScore: examScore, mkEntry: mkEntry, fromMistake: fromMistake };
  if (typeof module !== 'undefined' && module.exports) module.exports = FRC;
  G.FRC = FRC;
})(typeof window !== 'undefined' ? window : globalThis);
