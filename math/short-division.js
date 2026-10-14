/* short-division.js — 短除法（最大公因數 GCD／最小公倍數 LCM）的純函式；不碰 DOM，瀏覽器（window.SD）與 Node（module.exports）共用。
   模式 mode：
     'both' ＝兩個數：同一張短除法，除到「互質」就停；GCD＝左邊除數相乘，LCM＝左邊除數 × 最底下一列。
     'gcd'  ＝三個數找最大公因數：每次用「三個數都能整除」的數去除；三個數沒有共同的公因數就停（兩兩之間還有也不管）。
     'lcm'  ＝三個數找最小公倍數：只要「其中兩個數」有公因數就繼續除，除不盡的數照抄到下一列；每兩個數都互質才停。
   「任何公因數都可以」：
     both／gcd：只要大於 1、而且每個數都能整除，就可以（不限質數），最後答案一樣。
     lcm：大於 1、至少兩個數能整除，而且「除不盡、要照抄的數」跟這個除數不能再有公因數
          （例：12、18、8 用 6 除，8 不能被 6 整除，可是 8 和 6 還有公因數 2，照抄會讓答案變大）；用質數一定安全。 */
(function (G) {
  'use strict';

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function lcm(a, b) { return a && b ? a / gcd(a, b) * b : 0; }
  function gcdAll(xs) { return xs.reduce(function (g, x) { return gcd(g, x); }, 0); }
  function lcmAll(xs) { return xs.reduce(function (l, x) { return lcm(l, x); }, 1); }
  function prod(xs) { return xs.reduce(function (p, x) { return p * x; }, 1); }
  function isInt(n) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n; }
  function isPrime(n) { if (!isInt(n) || n < 2) return false; for (var i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }
  function modeOf(nums, mode) { return nums.length === 2 ? 'both' : (mode === 'lcm' ? 'lcm' : 'gcd'); }
  // 能整除的數有幾個
  function divCount(row, d) { var n = 0; row.forEach(function (x) { if (x % d === 0) n++; }); return n; }
  // 兩兩互質？
  function pairwiseCoprime(row) {
    for (var i = 0; i < row.length; i++) for (var j = i + 1; j < row.length; j++) if (gcd(row[i], row[j]) > 1) return false;
    return true;
  }
  // 這一列該停了嗎（both／gcd：全部的最大公因數＝1；lcm：每兩個都互質）
  function isDone(row, mode) { return mode === 'lcm' ? pairwiseCoprime(row) : gcdAll(row) === 1; }

  // 這一列可以用 d 去除嗎？回 {ok, why, x}；why：'num'（不是大於 1 的整數）、'done'（已經停了）、
  //   'notAll'（x 不能被 d 整除；both／gcd）、'fewer'（lcm：能整除的不到兩個）、'unsafe'（lcm：x 照抄，但 x 和 d 還有公因數）
  function checkDivisor(row, d, mode) {
    if (!isInt(d) || d < 2) return { ok: false, why: 'num' };
    if (isDone(row, mode)) return { ok: false, why: 'done' };
    if (mode !== 'lcm') {
      for (var i = 0; i < row.length; i++) if (row[i] % d !== 0) return { ok: false, why: 'notAll', x: row[i] };
      return { ok: true };
    }
    if (divCount(row, d) < 2) {
      var bad = row.filter(function (x) { return x % d !== 0; });
      return { ok: false, why: 'fewer', x: bad[0] };
    }
    for (var j = 0; j < row.length; j++) if (row[j] % d !== 0 && gcd(row[j], d) > 1) return { ok: false, why: 'unsafe', x: row[j], g: gcd(row[j], d) };
    return { ok: true };
  }
  // 這一列所有可以用的除數（由小到大；最多 max 個）
  function validDivisors(row, mode, max) {
    var out = [], top = Math.max.apply(null, row);
    for (var d = 2; d <= top && out.length < (max || 99); d++) if (checkDivisor(row, d, mode).ok) out.push(d);
    return out;
  }
  // 預設除數：最小的「共同質因數」。lcm 先找三個數都能整除的質數，沒有才找能整除其中兩個的質數（課本的順序）
  function smallestDivisor(row, mode) {
    if (isDone(row, mode)) return 0;
    var top = Math.max.apply(null, row), p;
    for (p = 2; p <= top; p++) if (isPrime(p) && row.every(function (x) { return x % p === 0; })) return p;
    if (mode !== 'lcm') return 0;
    for (p = 2; p <= top; p++) if (isPrime(p) && divCount(row, p) >= 2) return p;
    return 0;
  }
  // 還沒互質時的提示：{d, xs:[哪幾個數還有公因數 d]}
  function stillFactor(row, mode) {
    var d = smallestDivisor(row, mode); if (!d) return null;
    return { d: d, xs: row.filter(function (x) { return x % d === 0; }) };
  }
  function divideRow(row, d) { return row.map(function (x) { return x % d === 0 ? x / d : x; }); }

  /* plan(nums, mode, pick) — 整張短除法
     pick：{第幾次除: 指定的除數}（「我想用別的公因數」）；不合規則的指定一律改用預設
     回 {nums, mode, rows:[[...]], divs:[...], copied:[[是否照抄]], gcd, lcm, stopRow}
       rows[0]＝題目；rows[k+1]＝rows[k] 用 divs[k] 除完；最後一列＝停下來的那列 */
  function plan(nums, mode, pick) {
    nums = nums.map(Number); mode = modeOf(nums, mode); pick = pick || {};
    var rows = [nums.slice()], divs = [], copied = [], guard = 0;
    while (!isDone(rows[rows.length - 1], mode) && guard++ < 64) {
      var row = rows[rows.length - 1], k = divs.length, d = pick[k];
      if (!(d && checkDivisor(row, d, mode).ok)) d = smallestDivisor(row, mode);
      if (!d) break;
      divs.push(d);
      copied.push(row.map(function (x) { return x % d !== 0; }));
      rows.push(divideRow(row, d));
    }
    var last = rows[rows.length - 1], D = prod(divs);
    return { nums: nums, mode: mode, rows: rows, divs: divs, copied: copied, last: last,
      gcd: mode === 'lcm' ? null : D, lcm: mode === 'gcd' ? null : D * prod(last) };
  }

  // 出題：level ∈ l20、l100、l3d（兩個數）、tri（三個數）；rnd＝亂數函式（測試可換）；coprimeRate＝本來就互質的比例
  function randInt(rnd, a, b) { return a + Math.floor(rnd() * (b - a + 1)); }
  var LEVELS = { l20: [2, 20], l100: [10, 100], l3d: [100, 999], tri: [2, 60] };
  function generate(level, opt) {
    opt = opt || {}; var rnd = opt.rnd || Math.random, mode = opt.mode, cr = opt.coprimeRate == null ? 0.12 : opt.coprimeRate;
    var R = LEVELS[level] || LEVELS.l20, wantCoprime = rnd() < cr, nums, tries = 0;
    if (level !== 'tri') {
      while (tries++ < 5000) {
        nums = [randInt(rnd, R[0], R[1]), randInt(rnd, R[0], R[1])];
        if (nums[0] === nums[1]) continue;
        var g = gcd(nums[0], nums[1]);
        if (wantCoprime ? g === 1 : g > 1) break;
      }
      return nums.sort(function (a, b) { return a - b; });
    }
    mode = mode === 'lcm' ? 'lcm' : 'gcd';
    while (tries++ < 5000) {
      nums = [randInt(rnd, R[0], R[1]), randInt(rnd, R[0], R[1]), randInt(rnd, R[0], R[1])];
      if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) continue;
      var done = isDone(nums, mode);
      if (wantCoprime ? !done : done) continue;
      if (mode === 'lcm' && lcmAll(nums) > 3000) continue;   // 三個數的最小公倍數別大到算不完
      if (!wantCoprime && plan(nums, mode).divs.length < 2 && rnd() < 0.6) continue;   // 多半出至少要除兩次的題
      break;
    }
    return nums.sort(function (a, b) { return a - b; });
  }
  // 解析輸入：'12, 18' / '12 18' / '12、18' → [12,18]；不合格回 null
  function parseNums(s, n) {
    var xs = String(s == null ? '' : s).replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); }).split(/[^0-9]+/).filter(Boolean).map(Number);
    if (xs.length !== n || xs.some(function (x) { return !isInt(x) || x < 1 || x > 9999; })) return null;
    return xs;
  }

  var SD = { gcd: gcd, lcm: lcm, gcdAll: gcdAll, lcmAll: lcmAll, prod: prod, isPrime: isPrime, modeOf: modeOf, isDone: isDone, pairwiseCoprime: pairwiseCoprime,
    checkDivisor: checkDivisor, validDivisors: validDivisors, smallestDivisor: smallestDivisor, stillFactor: stillFactor, divideRow: divideRow,
    plan: plan, generate: generate, parseNums: parseNums, LEVELS: LEVELS };
  if (typeof module !== 'undefined' && module.exports) module.exports = SD;
  else G.SD = SD;
})(typeof window !== 'undefined' ? window : globalThis);
