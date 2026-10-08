/* audio.js — 勇者島的背景音樂與音效：全部用 Web Audio API 即時合成（沒有音檔、沒有外部音樂，沒有版權問題）。
   上半部是純邏輯（場景→曲目、語音壓低音樂的狀態機、設定存取；Node 測試用），下半部是合成器（只在瀏覽器跑）。 */
(function (root) {
  'use strict';
  const AU = {};

  // ===================== 純邏輯 =====================
  AU.SCENE_TRACK = { title: 'calm', class: 'calm', hub: 'calm', island: 'calm', rewards: 'calm', map: 'adventure', battle: 'battle', boss: 'boss', night: 'night', arena: 'arena', cave: 'cave', castle: 'castle' };
  AU.trackFor = scene => AU.SCENE_TRACK[scene] || 'calm';
  AU.DUCK = 0.15; AU.XFADE = 0.8;
  AU.DEFAULTS = { muted: false, music: 0.35, sfx: 0.7 };
  const clamp01 = v => Math.max(0, Math.min(1, +v));
  AU.normalize = s => ({ muted: !!(s && s.muted), music: s && isFinite(+s.music) ? clamp01(s.music) : AU.DEFAULTS.music, sfx: s && isFinite(+s.sfx) ? clamp01(s.sfx) : AU.DEFAULTS.sfx });
  AU.loadSettings = store => { try { return AU.normalize(JSON.parse(store.getItem('hi_audio') || 'null')); } catch (e) { return AU.normalize(null); } };
  AU.saveSettings = (store, s) => { try { store.setItem('hi_audio', JSON.stringify(AU.normalize(s))); } catch (e) { /* 私密模式 */ } };
  AU.toggleMute = s => Object.assign({}, s, { muted: !s.muted });
  // 音樂實際音量：靜音／鎖定畫面＝0；英文語音播放中＝壓到 15%
  AU.musicGain = (s, ducked, locked) => (s.muted || locked) ? 0 : s.music * (ducked ? AU.DUCK : 1);
  AU.sfxGain = (s, locked) => (s.muted || locked) ? 0 : s.sfx;
  // 語音壓低狀態機：每一段語音一個 id；全部結束（或被取消）才恢復。重複 end 不會出錯。
  AU.Ducker = function () {
    const on = new Set(); let seq = 0;
    return {
      start() { const id = ++seq; on.add(id); return id; },
      end(id) { on.delete(id); return on.size > 0; },
      reset() { on.clear(); },
      get ducked() { return on.size > 0; },
      get count() { return on.size; }
    };
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = AU;
  root.HIAudio = AU;
  if (typeof document === 'undefined') return;

  // ===================== 合成器 =====================
  const AC = root.AudioContext || root.webkitAudioContext;
  let ctx = null, musicBus = null, sfxBus = null, delay = null, fbGain = null, noiseBuf = null, cur = null, want = 'calm', locked = false;
  const store = (() => { try { return root.localStorage; } catch (e) { return null; } })();
  let S = store ? AU.loadSettings(store) : AU.normalize(null);
  const duck = AU.Ducker();
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  const R = (n, a) => { let o = []; for (let i = 0; i < n; i++) o = o.concat(a); return o; };

  // 曲目：chords＝每小節一個和弦（MIDI）；arp/bass/kick/snare/hat＝16 分音符格子
  const TRACKS = {
    calm: { bpm: 80, padCut: 900, padLv: .05, chords: [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 64]],
      arp: [0, -1, -1, 2, -1, -1, 1, -1, 3, -1, -1, 2, -1, 1, -1, -1], arpOct: 12, arpLv: .05, bass: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
    adventure: { bpm: 100, padCut: 1100, padLv: .04, chords: [[62, 66, 69, 74], [59, 62, 66, 71], [55, 59, 62, 67], [57, 61, 64, 69]],
      arp: [0, -1, 1, -1, 2, -1, 1, -1, 3, -1, 2, -1, 1, -1, 2, -1], arpOct: 12, arpLv: .05, bass: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      kick: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], kickLv: .35, hat: R(4, [0, 0, 1, 0]), hatLv: .05 },
    battle: { bpm: 120, padCut: 1200, padLv: .035, chords: [[57, 60, 64, 69], [53, 57, 60, 65], [48, 52, 55, 60], [55, 59, 62, 67]],
      arp: [0, 1, 2, 1, 3, 2, 1, 2, 0, 1, 2, 3, 2, 1, 0, 1], arpOct: 12, arpLv: .03, bass: R(4, [1, 0, 1, 0]),
      kick: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], kickLv: .45, snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], snLv: .12, hat: R(4, [1, 0, 1, 0]), hatLv: .04 },
    boss: { bpm: 126, padCut: 650, padLv: .05, chords: [[50, 53, 57, 62], [46, 50, 53, 58], [43, 46, 50, 55], [45, 49, 52, 57]],
      arp: [0, -1, 1, 0, 2, -1, 1, 0, 3, -1, 2, 0, 1, -1, 2, 3], arpOct: 12, arpLv: .035, bass: R(4, [1, 0, 1, 0]),
      kick: R(4, [1, 0, 0, 0]), kickLv: .45, snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1], snLv: .12, hat: R(4, [0, 0, 1, 0]), hatLv: .05 },
    night: { bpm: 66, padCut: 700, padLv: .06, chords: [[52, 55, 59, 62, 66], [48, 52, 55, 59], [45, 48, 52, 55], [47, 52, 54, 57]],
      arp: [3, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, 2, -1, -1, -1], arpOct: 24, arpLv: .035, bass: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    cave: { bpm: 60, padCut: 480, padLv: .055, echo: true, chords: [[45, 52, 57, 60], [43, 50, 55, 59], [41, 48, 53, 57], [40, 47, 52, 56]],
      arp: [0, -1, -1, -1, -1, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1], arpOct: 24, arpLv: .03, bass: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      drip: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] },
    castle: { bpm: 92, padCut: 1000, padLv: .045, chords: [[62, 66, 69, 74], [55, 59, 62, 67], [57, 61, 64, 69], [62, 66, 69, 74], [59, 62, 66, 71], [55, 59, 62, 67], [57, 61, 64, 69], [57, 62, 66, 69]],
      arp: [0, -1, 1, 2, -1, 1, 0, -1, 2, -1, 3, 2, -1, 1, -1, -1], arpOct: 12, arpLv: .05, bass: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      kick: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], kickLv: .25, snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], snLv: .05 },
    arena: { bpm: 128, padCut: 1300, padLv: .03, chords: [[52, 55, 59, 64], [48, 52, 55, 60], [43, 47, 50, 55], [50, 54, 57, 62]],
      arp: [0, 1, 2, 3, 2, 1, 0, 1, 0, 2, 1, 3, 2, 1, 2, 3], arpOct: 12, arpLv: .028, bass: R(4, [1, 0, 1, 1]),
      kick: R(4, [1, 0, 0, 0]), kickLv: .45, snare: R(2, [0, 0, 0, 0, 1, 0, 0, 0]), snLv: .11, hat: R(4, [1, 1, 1, 1]), hatLv: .03 }
  };
  AU.TRACKS = TRACKS;

  function env(g, t, a, peak, d) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
  function tone(dest, type, f, t, a, peak, d, cut) {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(f, t);
    let last = o; if (cut) { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = cut; o.connect(fl); last = fl; }
    last.connect(g); g.connect(dest); env(g, t, a, peak, d); o.start(t); o.stop(t + a + d + 0.05); return o;
  }
  function noise(dest, t, type, f, peak, d) {
    const s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; fl.type = type; fl.frequency.value = f; s.connect(fl); fl.connect(g); g.connect(dest); env(g, t, 0.003, peak, d); s.start(t); s.stop(t + d + 0.05);
  }
  function kick(dest, t, lv) { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14); o.connect(g); g.connect(dest); env(g, t, 0.004, lv, 0.22); o.start(t); o.stop(t + 0.3); }
  function pad(dest, notes, t, dur, cut, lv) {
    const g = ctx.createGain(), fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = cut; fl.connect(g); g.connect(dest);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(lv, t + Math.min(0.6, dur * 0.3)); g.gain.setValueAtTime(lv, t + dur * 0.7); g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.4);
    notes.forEach(m => [-5, 5].forEach(c => { const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = hz(m); o.detune.value = c; o.connect(fl); o.start(t); o.stop(t + dur + 0.5); }));
  }
  function pluck(dest, m, t, lv) {
    const o = ctx.createOscillator(), g = ctx.createGain(), fl = ctx.createBiquadFilter(); o.type = 'triangle'; o.frequency.value = hz(m);
    fl.type = 'lowpass'; fl.frequency.setValueAtTime(2600, t); fl.frequency.exponentialRampToValueAtTime(700, t + 0.35);
    o.connect(fl); fl.connect(g); g.connect(dest); g.connect(delay); env(g, t, 0.005, lv, 0.45); o.start(t); o.stop(t + 0.55);
  }

  function drip(dest, t) {  // 水滴：高音快速下滑，送進回音
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(1500 + Math.random() * 500, t); o.frequency.exponentialRampToValueAtTime(650, t + 0.07);
    o.connect(g); g.connect(dest); g.connect(delay); env(g, t, 0.003, 0.05, 0.1); o.start(t); o.stop(t + 0.15);
  }
  function Track(name) {
    const d = TRACKS[name]; this.name = name; this.d = d;
    this.out = ctx.createGain(); this.out.gain.value = 0.0001; this.out.connect(musicBus);
    this.step = 0; this.next = ctx.currentTime + 0.06;
    const now = ctx.currentTime; this.out.gain.setValueAtTime(0.0001, now); this.out.gain.linearRampToValueAtTime(1, now + AU.XFADE);
    // 洞窟：回音拉長（delay 長一點、回授多一點）
    delay.delayTime.setTargetAtTime(d.echo ? 0.46 : 0.33, now, 0.4); fbGain.gain.setTargetAtTime(d.echo ? 0.52 : 0.28, now, 0.4);
    this.timer = setInterval(() => this.tick(), 60);
  }
  Track.prototype.tick = function () {
    const d = this.d, sx = 60 / d.bpm / 4, bars = d.chords.length;
    while (this.next < ctx.currentTime + 0.25) {
      const t = this.next, s = this.step % 16, ch = d.chords[Math.floor(this.step / 16) % bars];
      if (s === 0) pad(this.out, ch, t, sx * 16, d.padCut, d.padLv);
      if (d.arp[s] >= 0) pluck(this.out, ch[d.arp[s] % ch.length] + d.arpOct, t, d.arpLv);
      if (d.bass && d.bass[s]) tone(this.out, 'sine', hz(ch[0] - 12), t, 0.01, 0.09, sx * 1.8, 400);
      if (d.kick && d.kick[s]) kick(this.out, t, d.kickLv);
      if (d.snare && d.snare[s]) noise(this.out, t, 'bandpass', 1800, d.snLv, 0.13);
      if (d.hat && d.hat[s]) noise(this.out, t, 'highpass', 7000, d.hatLv, 0.04);
      if (d.drip && d.drip[s] && Math.random() < 0.7) drip(this.out, t);
      this.next += sx; this.step = (this.step + 1) % (16 * bars);
    }
  };
  Track.prototype.stop = function () {
    const now = ctx.currentTime, g = this.out.gain;
    g.cancelScheduledValues(now); g.setValueAtTime(Math.max(0.0001, g.value), now); g.linearRampToValueAtTime(0.0001, now + AU.XFADE);
    setTimeout(() => { clearInterval(this.timer); try { this.out.disconnect(); } catch (e) { /* */ } }, AU.XFADE * 1000 + 400);
  };

  function apply() {
    if (!ctx) return;
    const now = ctx.currentTime;
    musicBus.gain.setTargetAtTime(AU.musicGain(S, duck.ducked, locked), now, duck.ducked ? 0.05 : 0.25);
    sfxBus.gain.setTargetAtTime(AU.sfxGain(S, locked), now, 0.03);
  }
  function play(name) {
    if (!ctx || !TRACKS[name]) return;
    if (cur && cur.name === name) return;
    if (cur) cur.stop();
    cur = new Track(name);
  }

  // ---- 對外 ----
  AU.unlock = function () {
    if (!AC) return;
    try {
      if (!ctx) {
        ctx = new AC();
        musicBus = ctx.createGain(); sfxBus = ctx.createGain(); musicBus.gain.value = 0; sfxBus.gain.value = 0;
        const comp = ctx.createDynamicsCompressor(); musicBus.connect(comp); sfxBus.connect(comp); comp.connect(ctx.destination);
        delay = ctx.createDelay(1); delay.delayTime.value = 0.33; const fb = fbGain = ctx.createGain(), wet = ctx.createGain(); fb.gain.value = 0.28; wet.gain.value = 0.25;
        delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(musicBus);
        noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate); const ch = noiseBuf.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
        // iOS：用一個無聲 buffer 解鎖
        const b = ctx.createBufferSource(); b.buffer = ctx.createBuffer(1, 1, 22050); b.connect(ctx.destination); b.start(0);
      }
      if (locked) ctx.suspend(); else if (ctx.state !== 'running' && !document.hidden) ctx.resume();
      apply(); play(want);
    } catch (e) { console.warn('audio', e); }
  };
  AU.scene = function (scene) { want = AU.trackFor(scene); play(want); };
  AU.setLocked = function (on) {
    on = !!on; if (on === locked) return; locked = on; apply();
    if (!ctx) return;
    if (on) setTimeout(() => { if (locked) ctx.suspend(); }, 400); else if (!document.hidden) ctx.resume();
  };
  AU.duckStart = () => { const id = duck.start(); apply(); return id; };
  AU.duckEnd = id => { duck.end(id); apply(); };
  AU.get = () => Object.assign({}, S);
  AU.set = patch => { S = AU.normalize(Object.assign({}, S, patch)); if (store) AU.saveSettings(store, S); apply(); return S; };
  AU.toggle = () => AU.set({ muted: !S.muted });
  AU.state = () => ({ ctx: ctx ? ctx.state : 'none', track: cur ? cur.name : null, music: musicBus ? +musicBus.gain.value.toFixed(3) : 0, ducked: duck.ducked, locked });

  const SEQ = {
    victory: [[72, 0], [76, .11], [79, .22], [84, .36]], levelup: [[67, 0], [72, .08], [76, .16], [79, .24], [84, .32], [88, .44]],
    diamond: [[88, 0], [91, .09], [95, .18], [100, .27], [95, .45], [100, .55]], defeat: [[76, 0], [72, .22], [69, .44]]
  };
  AU.sting = function (name) {
    if (!ctx || !SEQ[name]) return; const t = ctx.currentTime + 0.02;
    SEQ[name].forEach(([m, dt]) => { tone(sfxBus, name === 'diamond' ? 'sine' : 'triangle', hz(m), t + dt, 0.01, name === 'defeat' ? 0.08 : 0.13, name === 'defeat' ? 0.6 : 0.5, 3000); if (name === 'diamond') tone(sfxBus, 'sine', hz(m + 12), t + dt, 0.01, 0.04, 0.8); });
  };
  AU.sfx = function (name) {
    if (!ctx || ctx.state !== 'running') return; const t = ctx.currentTime + 0.005;
    switch (name) {
      case 'tap': tone(sfxBus, 'sine', 880, t, 0.002, 0.04, 0.04); break;
      case 'correct': tone(sfxBus, 'triangle', hz(76), t, 0.005, 0.12, 0.16); tone(sfxBus, 'triangle', hz(81), t + 0.09, 0.005, 0.12, 0.3); break;
      case 'wrong': { const o = tone(sfxBus, 'triangle', 330, t, 0.01, 0.07, 0.35, 900); o.frequency.exponentialRampToValueAtTime(220, t + 0.3); break; }
      case 'hit': kick(sfxBus, t, 0.35); noise(sfxBus, t, 'bandpass', 1200, 0.12, 0.12); break;
      case 'crit': kick(sfxBus, t, 0.4); noise(sfxBus, t, 'bandpass', 1500, 0.14, 0.15); [84, 88, 91].forEach((m, i) => tone(sfxBus, 'sine', hz(m), t + 0.05 + i * 0.05, 0.005, 0.07, 0.4)); break;
      case 'craft': [0, 0.12, 0.24].forEach(dt => { const o = tone(sfxBus, 'sine', 420, t + dt, 0.002, 0.12, 0.09); o.frequency.exponentialRampToValueAtTime(180, t + dt + 0.08); }); tone(sfxBus, 'sine', hz(84), t + 0.4, 0.01, 0.08, 0.6); break;
      case 'shield': noise(sfxBus, t, 'highpass', 2500, 0.16, 0.25); kick(sfxBus, t, 0.3); [96, 91, 87, 84].forEach((m, i) => tone(sfxBus, 'triangle', hz(m), t + 0.03 + i * 0.05, 0.003, 0.07, 0.3)); break;
      case 'trap': noise(sfxBus, t, 'bandpass', 900, 0.18, 0.08); noise(sfxBus, t + 0.07, 'bandpass', 600, 0.14, 0.08); kick(sfxBus, t, 0.2); break;
      case 'door': { const o = tone(sfxBus, 'sawtooth', 110, t, 0.05, 0.05, 0.5, 500); o.frequency.exponentialRampToValueAtTime(150, t + 0.5); kick(sfxBus, t + 0.5, 0.25); tone(sfxBus, 'triangle', hz(79), t + 0.55, 0.01, 0.06, 0.5); break; }
      case 'place': { const o = tone(sfxBus, 'sine', 200, t, 0.003, 0.18, 0.14); o.frequency.exponentialRampToValueAtTime(90, t + 0.12); break; }
    }
  };

  document.addEventListener('visibilitychange', () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else if (!locked) ctx.resume(); });
})(typeof window !== 'undefined' ? window : globalThis);
