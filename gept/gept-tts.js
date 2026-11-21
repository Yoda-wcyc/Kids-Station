/* gept/gept-tts.js — 全民英檢聽力／口說的語音（瀏覽器 speechSynthesis，en-US）。
   挑聲音的方式比照首頁 app.js pickVoice（同一組偏好名單），多分男聲／女聲：iPad 有 Aaron、Samantha 等就各用一個；
   只有一個聲音時用音高區分（男 0.8、女 1.25、旁白 1）。iOS 要使用者手勢才能出聲：第一句一定要在點擊裡呼叫。
   speak(text, spk) → Promise（念完；onend 沒來就用字數估的時間保底，iPad 偶爾會吞掉 onend）。
   play(parts, times) ：parts＝[{t, spk}]，整段播 times 次、中間停 1.5 秒（官方「播兩次，間隔 1～2 秒」）。
   測試：window.__GEPT_FAST＝{…} 時不出聲、立刻念完（test/gept-browser.js 用）。 */
(function (W) {
  'use strict';
  var synth = W.speechSynthesis, voices = [], token = 0;
  function load() { try { voices = synth ? synth.getVoices() : []; } catch (e) { voices = []; } }
  if (synth) { load(); try { synth.addEventListener('voiceschanged', load); } catch (e) { synth.onvoiceschanged = load; } }
  var PREF = /Samantha|Ava|Natural|Jenny|Aria|Google|Daniel|Serena|Kate|Libby|Sonia/i;   // 同 app.js
  var FEM = /Samantha|Ava|Allison|Susan|Victoria|Karen|Moira|Tessa|Zira|Jenny|Aria|Nicky|Serena|Kate|Libby|Sonia|Female|Google US English/i;
  var MALE = /Aaron|Fred|Alex|Daniel|Tom|David|Guy|Mark|Male|Nathan|Evan|Rishi|Arthur|Oliver|Gordon/i;
  function en() { var c = voices.filter(function (v) { return /^en[-_]US/i.test(v.lang || ''); }); return c.length ? c : voices.filter(function (v) { return /^en/i.test(v.lang || ''); }); }
  function pick(spk) {
    var c = en(), f = c.filter(function (v) { return FEM.test(v.name); }), m = c.filter(function (v) { return MALE.test(v.name) && !FEM.test(v.name); });
    var base = c.filter(function (v) { return PREF.test(v.name); })[0] || c[0] || null;
    if (spk === 'M') return m[0] ? { v: m[0], p: 1 } : { v: base, p: 0.8 };
    if (spk === 'F') return f[0] ? { v: f[0], p: 1 } : { v: base, p: 1.25 };
    return { v: base, p: 1 };
  }
  var rate = 1;
  function fast() { return !!W.__GEPT_FAST; }
  // 送語音前的念法：NT$1,000 → 1,000 NT dollars（各家聲音念 NT$ 不一致，台灣廣播的說法是數字＋NT dollars）
  function spoken(t) { return String(t).replace(/NT\$\s?(\d+(?:,\d{3})*(?:\.\d+)?)/g, '$1 NT dollars'); }
  function speak(text, spk) {
    var my = token; text = text && spoken(text);
    return new Promise(function (res) {
      if (!text) return res();
      if (fast() || !synth) return setTimeout(res, fast() ? 5 : 0);
      var done = false, fin = function () { if (!done) { done = true; clearTimeout(tm); res(); } };
      var n = String(text).split(/\s+/).length, tm = setTimeout(fin, 1500 + n * 520 / rate);
      try {
        var u = new SpeechSynthesisUtterance(String(text)), pv = pick(spk);
        if (pv.v) u.voice = pv.v; u.lang = pv.v ? pv.v.lang : 'en-US'; u.pitch = pv.p; u.rate = rate;
        u.onend = fin; u.onerror = fin;
        if (my !== token) return fin();
        synth.speak(u);
      } catch (e) { fin(); }
    });
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, fast() ? Math.min(ms, 5) : ms); }); }
  // 依序念完 parts；整段播 times 次。stop() 之後還沒念的都跳過
  function play(parts, times) {
    var my = token, i = 0, k = 0; times = times || 1;
    function next() {
      if (my !== token) return Promise.resolve(false);
      if (i >= parts.length) { k++; i = 0; if (k >= times) return Promise.resolve(true); return wait(1500).then(next); }
      var p = parts[i++]; return speak(p.t, p.spk).then(function () { return wait(250); }).then(next);
    }
    return next();
  }
  function stop() { token++; try { if (synth) synth.cancel(); } catch (e) { } }
  // 一題的語音（作者資料 → parts）：說話的人照資料；旁白念題目
  function partsOf(q, num) {
    var o = [];
    if (num) o.push({ t: 'Number ' + num + '.', spk: 'N' });
    if (q.intro) o.push({ t: q.intro, spk: 'N' });
    if (q.lines) q.lines.forEach(function (l) { o.push({ t: l[1], spk: l[0] }); });
    if (q.say) o.push({ t: q.say, spk: q.spk || 'N' });
    if (q.q && !q.qs) o.push({ t: (q.lines || q.say ? 'Question: ' : '') + q.q, spk: 'N' });
    return o;
  }
  W.GeptTTS = { speak: speak, spoken: spoken, play: play, stop: stop, wait: wait, partsOf: partsOf, setRate: function (r) { rate = r; }, ok: function () { return !!synth; } };
})(window);
