/* 全站禁止複製、剪下、貼上（家長指令 2026-11-13）。每一個 .html 的 <head> 都載這支；node test/smoke.js 會擋漏載的頁面。
   擋：copy／cut／paste／drop／dragstart 事件、beforeinput 的 insertFromPaste／insertFromDrop、右鍵選單、Ctrl/⌘+C/X/V（含 Ctrl/Shift+Insert、Shift+Delete）；
   CSS：整頁不能選字、iPad 長按不出放大鏡／拷貝選單；輸入框照樣能打字（iOS 上 user-select:none 會讓輸入框打不了字，所以設回 text）。
   例外（只放網址、代碼，不放題目）：data-copy-ok 裡可以複製（分享網址、天平題目代碼）、data-paste-ok 裡可以貼上（同步碼、天平匯入題目代碼）。
   站內按鈕用 navigator.clipboard.writeText 複製不會觸發 copy 事件，不受影響；execCommand('copy') 的暫存 textarea 要加 data-copy-ok。 */
(function () {
  var COPY = 'data-copy-ok', PASTE = 'data-paste-ok';
  function inside(e, attr) { var t = e.target; if (t && t.nodeType !== 1) t = t.parentNode; return !!(t && t.closest && t.closest('[' + attr + ']')); }
  function block(e) { e.preventDefault(); e.stopPropagation(); }
  function on(type, attr, test) { window.addEventListener(type, function (e) { if ((!test || test(e)) && !inside(e, attr)) block(e); }, true); }
  on('copy', COPY); on('cut', COPY); on('dragstart', COPY);
  on('paste', PASTE); on('drop', PASTE);
  on('beforeinput', PASTE, function (e) { return /^insertFrom(Paste|Drop|Yank)/.test(e.inputType || ''); });
  window.addEventListener('contextmenu', function (e) { if (!inside(e, COPY) && !inside(e, PASTE)) block(e); }, true);
  window.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase(), c = e.code || '', mod = (e.ctrlKey || e.metaKey) && !e.altKey;
    var copy = mod && (k === 'c' || k === 'x' || c === 'KeyC' || c === 'KeyX') || e.ctrlKey && c === 'Insert' || e.shiftKey && c === 'Delete' && !e.ctrlKey;
    var paste = mod && (k === 'v' || c === 'KeyV') || e.shiftKey && c === 'Insert';
    if (copy && !inside(e, COPY) || paste && !inside(e, PASTE)) block(e);
  }, true);
  var s = document.createElement('style');
  s.textContent = '*{-webkit-user-select:none!important;user-select:none!important;-webkit-touch-callout:none!important}img{-webkit-user-drag:none}' +
    'input,textarea,[contenteditable],[contenteditable] *,[' + COPY + '],[' + COPY + '] *{-webkit-user-select:text!important;user-select:text!important}';
  (document.head || document.documentElement).appendChild(s);
})();
