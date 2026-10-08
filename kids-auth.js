/* kids-auth.js — 小朋友學習站 會員登入（全站共用）
   規則（Yoda）：免登入就可以瀏覽整個網站，但是要登入才可以開始練習和玩遊戲。
   - 只存 localStorage 的 kids_jwt（票）與 kids_member（會員資料 JSON，附 exp）；絕不存密碼，不碰 yoda_* 任何 key。
   - 後端網址只在下面 KIDS_GAS_URL 一處設定。還是佔位字時＝後端沒上線：一律放行、不顯示登入元件（誤推上線也不會把小朋友擋住）。
   - 前端只看票的到期時間（exp），不驗簽；真正的權限判斷在後端。 */
(function () {
  'use strict';
  var KIDS_GAS_URL = 'https://script.google.com/macros/s/AKfycbz9XcZk7kcihMTXTgbfRSP0FGdPHv8DcBRyG0xbLmNSGdIkaGWcNaZMtJmwPtrDCwIv/exec'; // ← 唯一設定處：kids GAS 網頁應用程式網址
  var PLACEHOLDER = 'REPLACE_WITH_KIDS_GAS_URL';
  var K_JWT = 'kids_jwt', K_MEMBER = 'kids_member';
  var DAY = 86400, RENEW_BEFORE = 30 * DAY;

  // 這支檔案所在的資料夾＝網站根目錄（子頁用 ../kids-auth.js 載入也算得對）
  var BASE = (function () {
    try { var s = document.currentScript && document.currentScript.src; if (s) return new URL('.', s).href; } catch (e) { }
    return new URL('.', location.href).href;
  })();

  // 測試專用：只有在本機（localhost／127.0.0.1）開網頁時，才接受測試程式注入的 window.__KIDS_TEST_GAS_URL；正式站一律忽略
  function gasUrl() {
    var h = location.hostname;
    if (h === 'localhost' || h === '127.0.0.1') {
      var t = window.__KIDS_TEST_GAS_URL;
      if (typeof t === 'string' && /^http:\/\/(127\.0\.0\.1|localhost):\d+\//.test(t)) return t;
    }
    return KIDS_GAS_URL === PLACEHOLDER ? '' : KIDS_GAS_URL;
  }
  function configured() { return !!gasUrl(); }

  // ---------- 儲存（每次讀寫都包 try/catch：私密模式或被封鎖時當作沒登入） ----------
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function del(k) { try { localStorage.removeItem(k); } catch (e) { } }
  function readMember() { try { var m = JSON.parse(get(K_MEMBER) || 'null'); return m && typeof m === 'object' ? m : null; } catch (e) { return null; } }
  function token() { return get(K_JWT) || ''; }
  function jwtExp(t) { // 票若是標準 JWT，從 payload 讀 exp（只讀不驗簽）
    try { var p = t.split('.')[1]; p = p.replace(/-/g, '+').replace(/_/g, '/'); while (p.length % 4) p += '='; var o = JSON.parse(atob(p)); return typeof o.exp === 'number' ? o.exp : 0; } catch (e) { return 0; }
  }
  function exp() { var m = readMember(), e = m && +m.exp; return e > 0 ? e : jwtExp(token()); }
  var nowSec = function () { return Math.floor(Date.now() / 1000); };
  function isLoggedIn() { var t = token(); if (!t) return false; var e = exp(); return !e || e > nowSec(); }
  function member() { if (!isLoggedIn()) return null; var m = readMember(); if (!m) return null; var o = {}; Object.keys(m).forEach(function (k) { if (k !== 'exp') o[k] = m[k]; }); return o; }
  function saveSession(res) {
    if (!res || !res.token) return false;
    var m = Object.assign({}, res.member || {}); m.exp = +res.exp || jwtExp(res.token) || 0;
    var ok = set(K_JWT, String(res.token)) && set(K_MEMBER, JSON.stringify(m));
    refreshWidget();
    return ok;
  }
  function logout() { del(K_JWT); del(K_MEMBER); refreshWidget(); }

  // ---------- 呼叫後端（介面合約：POST text/plain JSON → JSON） ----------
  function err(code, body) { var e = new Error(code); e.code = code; e.body = body; return e; }
  function api(action, data) {
    var url = gasUrl();
    if (!url) return Promise.reject(err('not_configured'));
    var body = Object.assign({}, data || {}); body.action = action;
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), cache: 'no-store' })
      .then(function (r) { return r.json(); }, function () { throw err('network'); })
      .then(function (j) { if (!j || j.ok !== true) throw err((j && j.error) || 'server_error', j); return j; },
        function (e) { throw e && e.code ? e : err('server_error'); });
  }
  var MSG = {
    bad_request: '資料好像有地方沒填好，請再檢查一次。',
    consent_required: '請先勾選「爸爸或媽媽已經同意我註冊小朋友學習站」。',
    email_exists: '這個信箱已經註冊過了，請直接登入；忘記密碼可以按「忘記密碼」。',
    weak_password: '密碼要 6 個字以上，而且要有英文字母和數字喔！',
    common_password: '這個密碼太常見了，別人很容易猜到，換一個只有你知道的吧！',
    bad_credentials: '信箱或密碼不對，請再試一次。',
    expired: '登入已經過期了，請重新登入。',
    revoked: '這次登入已經失效（可能在別台改過密碼），請重新登入。',
    rate_limited: '試太多次了，請休息幾分鐘再試。',
    server_error: '學習站的系統忙線中，請稍後再試。',
    network: '連不上網路，請確認 Wi-Fi 之後再試一次。',
    not_configured: '會員系統還在準備中，現在不用登入也可以玩喔！'
  };
  function errorText(code) { return MSG[code] || '發生了一點小問題，請稍後再試。'; }
  // 密碼規則（與後端 Code.gs 的 validPassword／isCommonPassword 完全相同；後端兩者都回 weak_password）
  var COMMON_PW = ['password', 'password1', '123456', '1234567', '12345678', '123456789', '1234567890', '111111', '000000',
    'abc123', 'abc12345', 'a123456', 'qwerty', 'qwerty123', 'iloveyou', 'admin', 'admin123', 'letmein', 'welcome', 'welcome1',
    'monkey', 'dragon', 'football', 'kids123', 'kids1234', 'test123', 'test1234'];
  function isCommonPassword(pw) {
    var p = String(pw).toLowerCase();
    if (COMMON_PW.indexOf(p) >= 0) return true;
    if (/^(.)\1{5,}$/.test(p)) return true;
    if (/^(?:0123456789|123456789|12345678|1234567|123456|abcdef|abcdefg)/.test(p)) return true;
    return false;
  }
  // 回傳 ''＝可以用；否則回 errorText 的代碼（weak_password／common_password）
  function checkPassword(pw) {
    pw = String(pw == null ? '' : pw);
    if (!(pw.length >= 6 && /[A-Za-z]/.test(pw) && /[0-9]/.test(pw))) return 'weak_password';
    if (isCommonPassword(pw)) return 'common_password';
    return '';
  }
  // 年級代碼（介面合約）：K＝幼兒園、G1–G6＝一～六年級、J1–J3＝國一～國三、other＝其他
  var GRADES = [['K', '幼兒園'], ['G1', '一年級'], ['G2', '二年級'], ['G3', '三年級'], ['G4', '四年級'], ['G5', '五年級'], ['G6', '六年級'], ['J1', '國一'], ['J2', '國二'], ['J3', '國三'], ['other', '其他']];
  function gradeText(code) { for (var i = 0; i < GRADES.length; i++) if (GRADES[i][0] === code) return GRADES[i][1]; return code ? String(code) : ''; }

  // ---------- 網址 ----------
  function topHref() { try { if (window.top !== window && window.top.location.origin === location.origin) return window.top.location.href; } catch (e) { } return location.href; }
  function loginUrl(next) { return BASE + 'login.html?next=' + encodeURIComponent(next || topHref()); }
  function safeNext(raw) { // 只回到學習站自己的頁面，避免被當成跳轉到別站的跳板
    try {
      var u = new URL(raw, location.href), b = new URL(BASE);
      if (u.origin === b.origin && u.pathname.indexOf(b.pathname) === 0 && !/\/login\.html$/.test(u.pathname)) return u.href;
    } catch (e) { }
    return BASE + 'index.html';
  }
  function goTop(url) { try { if (window.top !== window && window.top.location.origin === location.origin) { window.top.location.href = url; return; } } catch (e) { } location.href = url; }

  // ---------- 樣式（自帶，iframe 子頁的 CSS 各不相同） ----------
  var cssDone = false;
  function css() {
    if (cssDone) return; cssDone = true;
    var s = document.createElement('style');
    s.textContent = '.ka-modal{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(38,52,69,.45);font:20px/1.55 -apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;color:#263445}'
      + '.ka-card{width:min(440px,100%);background:#fff;border-radius:24px;border:3px solid #f0e2c8;box-shadow:0 10px 30px rgba(38,52,69,.25);padding:24px 20px 20px;text-align:center}'
      + '.ka-i{font-size:3.2rem;line-height:1.2}.ka-t{font-size:1.25rem;font-weight:800;margin:8px 0 6px}.ka-s{font-size:.95rem;color:#6b7785;margin:0 0 16px}'
      + '.ka-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}'
      + '.ka-b{flex:1 1 150px;display:inline-flex;align-items:center;justify-content:center;min-height:60px;padding:10px 18px;border-radius:18px;border:2px solid #f0e2c8;background:#fff;color:#263445;font:inherit;font-size:1.1rem;font-weight:700;cursor:pointer;text-decoration:none;box-shadow:0 3px 0 #f0e2c8;touch-action:manipulation}'
      + '.ka-b:active{transform:translateY(2px);box-shadow:none}.ka-b.ka-p{background:#ff8a3d;border-color:#ff8a3d;color:#fff;box-shadow:0 3px 0 #d96a22}'
      + '.ka-chip{display:inline-flex;align-items:center;gap:4px;min-height:44px;max-width:14em;padding:6px 14px;border-radius:999px;border:2px solid #f0e2c8;background:#fff;color:#263445;font:600 1rem/1.2 -apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:0 2px 0 #f0e2c8;touch-action:manipulation}'
      + '.ka-chip.ka-in{background:#fff8ec}.ka-chip.ka-out{background:#ff8a3d;border-color:#ff8a3d;color:#fff;box-shadow:0 2px 0 #d96a22}'
      + '.ka-float{position:fixed;top:calc(8px + env(safe-area-inset-top));right:calc(8px + env(safe-area-inset-right));z-index:2147482000}'
      + '#subjects .ka-chip{order:1;flex:0 0 auto}#subjects .stabs{order:2}'
      + '@media (max-width:700px){#subjects .brand{width:auto;flex:1 1 auto}}';
    (document.head || document.documentElement).appendChild(s);
  }

  // ---------- 「要登入喔」提示框 ----------
  var VERB = { practice: '開始練習', learn: '標記「學會了」', unlearn: '取消「已學會」', quiz: '開始挑戰', game: '開始玩遊戲', math: '開始練習', download: '下載遊戲檔' };
  var modal = null, lastFocus = null;
  function closePrompt() { if (modal) { modal.remove(); modal = null; document.removeEventListener('keydown', onEsc, true); try { if (lastFocus) lastFocus.focus(); } catch (e) { } } }
  function onEsc(e) { if (e.key === 'Escape') closePrompt(); }
  function showPrompt(why) {
    css(); closePrompt();
    lastFocus = document.activeElement;
    var verb = VERB[why] || (typeof why === 'string' && why.length > 1 && !/^[a-z]+$/.test(why) ? why : '開始練習');
    modal = document.createElement('div');
    modal.className = 'ka-modal'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', 'ka-t');
    modal.innerHTML = '<div class="ka-card"><div class="ka-i">🙋</div><div class="ka-t" id="ka-t"></div><p class="ka-s">看介紹、讀講義、查單字都不用登入。按「開始」之前，先登入一次就好！第一次來可以按「去登入」再選「註冊」。</p><div class="ka-row"><a class="ka-b ka-p" data-ka="go">🔑 去登入</a><button type="button" class="ka-b" data-ka="later">先逛逛</button></div></div>';
    modal.querySelector('.ka-t').textContent = '要先登入，才可以' + verb + '喔！';
    var go = modal.querySelector('[data-ka="go"]'); go.href = loginUrl();
    go.addEventListener('click', function (e) { e.preventDefault(); goTop(loginUrl()); });
    modal.querySelector('[data-ka="later"]').addEventListener('click', closePrompt);
    modal.addEventListener('click', function (e) { if (e.target === modal) closePrompt(); });
    document.addEventListener('keydown', onEsc, true);
    document.body.appendChild(modal);
    try { go.focus(); } catch (e) { }
  }
  var warned = false;
  function requireLogin(why) {
    if (!configured()) { if (!warned) { warned = true; try { console.warn('[kids-auth] KIDS_GAS_URL 還是佔位字（會員後端未上線）：練習與遊戲一律放行。'); } catch (e) { } } return true; }
    if (isLoggedIn()) return true;
    showPrompt(why);
    return false;
  }
  // 子頁用：點到 selector 裡的東西（或按 keys 裡的鍵）時先檢查登入；沒登入就攔下這次點擊，跳提示
  function guard(selector, why, opt) {
    opt = opt || {};
    window.addEventListener('click', function (e) {
      var t = e.target; if (!t || !t.closest || t.closest('.ka-modal') || !t.closest(selector)) return;
      if (requireLogin(why)) return;
      e.preventDefault(); e.stopImmediatePropagation();
    }, true);
    if (opt.keys && opt.keys.length) window.addEventListener('keydown', function (e) {
      if (opt.keys.indexOf(e.key) < 0 || e.altKey || e.ctrlKey || e.metaKey || modal) return;
      var t = e.target; if (t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if (requireLogin(why)) return;
      e.preventDefault(); e.stopImmediatePropagation();
    }, true);
  }

  // ---------- 頁角小元件：已登入「👋 暱稱」→ account.html；未登入「登入」 ----------
  var chip = null;
  function inFrame() { try { return window.top !== window; } catch (e) { return true; } }
  function refreshWidget() {
    if (!document.body || !configured() || inFrame()) return;
    if (document.body.getAttribute('data-kids-widget') === 'off') return;
    css();
    if (!chip) {
      chip = document.createElement('a'); chip.className = 'ka-chip';
      var slot = document.querySelector('[data-kids-auth-slot]'), bar = document.querySelector('#subjects .subj-in');
      if (slot) slot.appendChild(chip);
      else if (bar) bar.appendChild(chip);
      else { chip.classList.add('ka-float'); document.body.appendChild(chip); }
    }
    var m = member();
    if (m) {
      chip.className = chip.className.replace(/\bka-(in|out)\b/g, '').trim() + ' ka-in';
      chip.textContent = '👋 ' + (m.child_nickname || '小朋友');
      chip.href = BASE + 'account.html';
      chip.setAttribute('aria-label', '我的帳號');
    } else {
      chip.className = chip.className.replace(/\bka-(in|out)\b/g, '').trim() + ' ka-out';
      chip.textContent = '🔑 登入'; chip.href = loginUrl(); chip.setAttribute('aria-label', '登入');
    }
    try { window.dispatchEvent(new Event('resize')); } catch (e) { } // 科目列高度可能變了
  }
  // 連結是當下網址：點下去時才算 next（hash 換頁後也正確）
  document.addEventListener('click', function (e) { var a = e.target && e.target.closest && e.target.closest('.ka-chip.ka-out'); if (a) a.href = loginUrl(); }, true);
  window.addEventListener('hashchange', function () { if (chip && chip.classList.contains('ka-out')) chip.href = loginUrl(); });
  window.addEventListener('storage', function (e) { if (e.key === K_JWT || e.key === K_MEMBER || e.key === null) refreshWidget(); });

  // ---------- 自動續期：剩不到 30 天，背景換一張新票；票被撤銷或過期就登出 ----------
  var renewing = null;
  function autoRenew() {
    if (!configured() || inFrame()) return Promise.resolve('skip');
    var t = token(); if (!t) return Promise.resolve('none');
    var e = exp(), n = nowSec();
    if (e && e <= n) { logout(); return Promise.resolve('expired'); }
    if (e && e - n > RENEW_BEFORE) return Promise.resolve('fresh');
    if (renewing) return renewing;
    renewing = api('memberRefresh', { token: t }).then(function (r) { saveSession(r); return 'renewed'; }, function (x) {
      if (x && (x.code === 'revoked' || x.code === 'expired')) { logout(); return 'logged_out'; }
      return 'kept'; // 斷網或伺服器忙：票還沒過期就先照用
    }).then(function (s) { renewing = null; return s; });
    return renewing;
  }

  window.KidsAuth = {
    isLoggedIn: function () { return configured() ? isLoggedIn() : false; },
    member: member, logout: logout, requireLogin: requireLogin, guard: guard,
    configured: configured, token: token, exp: exp, api: api, saveSession: saveSession, errorText: errorText, checkPassword: checkPassword, grades: GRADES, gradeText: gradeText,
    loginUrl: loginUrl, safeNext: safeNext, base: BASE, autoRenew: autoRenew, refreshWidget: refreshWidget
  };

  function boot() { refreshWidget(); autoRenew(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
