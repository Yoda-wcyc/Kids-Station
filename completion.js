/* completion.js — 單元「學完了沒」的唯一判定處（2026-10-20）。純函式：不碰 DOM／localStorage／網路；瀏覽器（window.KidsCompletion）與 Node 共用。
   畫面（頁首橫幅、課程地圖）在 kids-done.js、map.html；這裡只回傳 {status, pct, checklist}。

   每個單元回傳 {status:'done'|'doing'|'todo', pct:0–100, checklist:[{label, ok, detail}]}
   - todo＝完全沒有任何紀錄；doing＝有任何進度但還沒全部達成；done＝checklist 全部打勾（pct 100）。
   - pct＝每一項的完成度平均（可以分段的項目算比例：學會 3/7 個字＝3/7；分數門檻的項目沒到就是 0）。

   完成規則（Yoda 2026-10-20）：
   - 英文課本單元（tb:<單元>）：本課 tb 標記的單字、片語、句型都「學會了」（ke_learned，按學會了要過小測驗）＋本單元考試最高分 ≥ 80。
   - 社會／自然單元（mm:<科>:<單元>）：背架構第 1～4 關都過（kids_mm_progress.passedAt）＋考考自己一輪「第一次作答就答對」≥ 80% 一次＋練習題一輪 ≥ 80% 一次。
     考考自己只看 czFirst（第一次就答對的格數／總格數；按「再答一次」或答錯後才答對的格子不算）。結果畫面給小孩看的答對率照舊（含再答一次）。
     舊紀錄只有 cz（含再答一次、分不出來）→ 不採用、當未達成，要再做一輪（Yoda 2026-10-20）。練習題每題只答一次，qz 本來就是第一次答對率。
   - 天平（math:balance）：8 題內建題的「換你算算看」都算對過一次。
   - 短除法（math:sd）：四種難度（20 以內、100 以內、三位數、三個數）的換你算各有一輪 ≥ 80%（一次就全對的題數／5）。
   - 短除法應用題（math:gw）：基本、進階各有一輪 ≥ 80%。
   - AI 三頁（ai:<頁>）：各玩完一次（看到結果頁）。
   - Scratch 七堂（scratch:<1–7>）：各有「我完成了」（kids_scratch_done，只讀）。
   - 英文題庫（課本以外）：只算學會百分比（依類別、等級），不判完成。

   新補存的紀錄 kids_done（統一一個 key；格式與合併規則在 syncmerge.js 的 normDone／mergeDone，跟著同步文件 v5 的 done 欄位）：
     {tb:{'<課本單元>':{best,last,at}}, mm:{'<科>:<單元>':{cz,czFirst,qz}}, bal:{b1…b8:第一次算對的時間}, sd:{l20,l100,l3d,tri:最佳 %},
      gw:{basic,adv:最佳 %}, ai:{'<頁>':第一次玩完的時間}}
   以前沒存的分數（舊的考試、考考自己、練習題、短除法、AI）回推不了，照實顯示「還沒有紀錄」。 */
(function (root) {
  'use strict';
  const SM = root.KESyncMerge || (typeof require === 'function' ? require('./syncmerge.js') : null);
  const PASS = 80;

  // ---------- 課程目錄（單元清單；英文課本單元從 DATA_TEXTBOOK 來）----------
  // 社會／自然：id、標題要跟 subjects.js 的 MM_UNITS、mindmap/data 一致（smoke 會對）
  const MM_UNITS = {
    social: [['u1', '臺灣的位置與先民足跡'], ['u2', '臺灣登上國際舞臺'], ['u3', '成為清帝國的領土'], ['u4', '土地的利用與變遷']],
    science: [['n1', '太陽與光'], ['n2', '植物世界'], ['n3', '水溶液'], ['n4', '力與運動']]
  };
  const NUMS = ['一', '二', '三', '四', '五', '六', '七', '八'];
  // 天平內建 8 題（要跟 math/balance.html 的 BUILTIN 一樣，smoke 會對）
  const BAL = ['x+5=12', 'x−3=9', '12+x=20', 'x+8−2=15', '(x+3)−2=10', '(x−5)+4=12', 'x−(6−2)=7', 'x+(10−4)=15'];
  const SD_LV = [['l20', '20 以內'], ['l100', '100 以內'], ['l3d', '三位數'], ['tri', '三個數']];
  const GW_LV = [['basic', '基本'], ['adv', '進階']];
  const AI = [['hallucinate', 'AI 會唬爛', '🤥'], ['ask-well', '怎麼問得好', '💬'], ['secrets', '秘密不能說', '🔒']];
  const SCRATCH = ['怪物沿 S 形路線走到城堡', '分身變出一串怪物＋生命＋失敗畫面', '高台／低地塔位＋點擊蓋塔＋金錢', '自製走路積木＋怪物血量＋打倒得錢',
    '開始按鈕＋波次＋勝利畫面＋清場', '加料①：蓋兵營＋派小兵站崗', '加料②：小兵擋怪互打＋兵營補兵'];

  // ---------- 小工具 ----------
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  const num = x => (x !== null && x !== '' && isFinite(+x) ? +x : null);
  const listText = (xs, n) => (xs.length > n ? xs.slice(0, n).join('、') + ` 等 ${xs.length} 個` : xs.join('、'));
  function result(checks, any) {
    const allOk = checks.length > 0 && checks.every(c => c.ok);
    const status = allOk ? 'done' : any ? 'doing' : 'todo';
    const pct = status === 'done' ? 100 : status === 'todo' ? 0 : Math.min(99, Math.round(checks.reduce((s, c) => s + (c.ok ? 1 : Math.max(0, Math.min(1, c.p || 0))), 0) / checks.length * 100));
    return { status, pct, checklist: checks.map(c => ({ label: c.label, ok: !!c.ok, detail: c.detail || '' })) };
  }
  // 分數門檻的一項：best＝最佳一輪 %（沒有＝null）
  function scoreCheck(label, best, what) {
    const b = num(best);
    if (b == null) return { label, ok: false, p: 0, detail: `還沒有紀錄：做完一整輪${what || ''}，答對 ${PASS}% 以上` };
    return b >= PASS ? { label, ok: true, p: 1, detail: `最佳一輪 ${b}%` } : { label, ok: false, p: 0, detail: `最佳一輪 ${b}%，還差一點：要 ${PASS}% 以上` };
  }

  // ---------- 儲存（kids_done）的更新：record 回傳新的物件（不改原本的）----------
  // sec：tb（考試分數）、czFirst／qz（心智圖考考自己第一次答對率／練習題 %，key＝'<科>:<單元>'；cz＝舊版的含重答答對率，只為相容留著）、sd／gw（難度的最佳 %）、bal／ai（第一次的時間）
  function record(store, sec, key, val, now) {
    const s = SM.normDone(store), t = Math.max(1, Math.floor(+now || Date.now())), v = Math.max(0, Math.min(100, Math.round(+val || 0)));
    key = String(key || '');
    if (sec === 'tb') { const p = s.tb[key]; s.tb[key] = { best: Math.max(p ? p.best : 0, v), last: v, at: t }; }
    else if (sec === 'cz' || sec === 'czFirst' || sec === 'qz') { const p = Object.assign({}, s.mm[key]); p[sec] = Math.max(p[sec] == null ? 0 : p[sec], v); s.mm[key] = p; }
    else if (sec === 'sd' || sec === 'gw') s[sec][key] = Math.max(s[sec][key] == null ? 0 : s[sec][key], v);
    else if (sec === 'bal' || sec === 'ai') { if (!s[sec][key]) s[sec][key] = t; }
    else return s;
    return SM.normDone(s);
  }

  // ---------- 英文課本單元 ----------
  // 本課要學會的項目（照各資料檔的 tb 標記；文法不算）：[{id, kind, label, qp}]；qp＝這個項目的題號開頭（看有沒有練過）
  function tbItems(D, unitId, KE) {
    const has = x => (x.tb || []).includes(unitId), out = [];
    (D.words || []).filter(has).forEach(w => out.push({ id: KE.wordItemId(w), kind: 'word', label: w.w, qp: 'w:' + KE.wordKey(w) + ':' }));
    (D.phrases || []).filter(has).forEach(p => out.push({ id: KE.phraseItemId(p), kind: 'phrase', label: p.p, qp: 'ph:' + p.id + ':' }));
    (D.patterns || []).filter(has).forEach(p => out.push({ id: KE.patternItemId(p), kind: 'pattern', label: p.pattern, qp: 'p:' + p.id + ':' }));
    return out;
  }
  const isLearned = (learned, id) => { const x = obj(learned)[id]; return !!(x && x.at); };
  // 有沒有練過（作答紀錄 ke_log、壓縮過的 ke_agg 裡有本課的題號）
  function touchedTb(unitId, items, log, agg) {
    const pre = ['tb:' + unitId + ':'].concat(items.map(x => x.qp)), hit = id => typeof id === 'string' && pre.some(p => id.indexOf(p) === 0);
    return (Array.isArray(log) ? log : []).some(e => e && hit(e.id)) || Object.keys(obj(agg)).some(hit);
  }
  const KIND = { word: ['單字', '個'], phrase: ['片語', '個'], pattern: ['句型', '個'] };
  function tbUnit(unitId, items, ctx) {
    const learned = obj(ctx.learned), exam = SM.normDone(ctx.done).tb[unitId] || null;
    const checks = [];
    ['word', 'phrase', 'pattern'].forEach(k => {
      const xs = items.filter(x => x.kind === k); if (!xs.length) return;
      const ok = xs.filter(x => isLearned(learned, x.id)), miss = xs.filter(x => !isLearned(learned, x.id)).map(x => x.label), [name, u] = KIND[k];
      checks.push({ label: `本課${name}都學會了（${ok.length}/${xs.length}）`, ok: !miss.length, p: ok.length / xs.length,
        detail: miss.length ? `還沒按「學會了」：${listText(miss, 6)}` : `${xs.length} ${u}都學會了` });
    });
    checks.push(exam
      ? (exam.best >= PASS ? { label: `考試 ${PASS} 分以上`, ok: true, p: 1, detail: `最高 ${exam.best} 分（最近一次 ${exam.last} 分）` }
        : { label: `考試 ${PASS} 分以上`, ok: false, p: 0, detail: `最高 ${exam.best} 分（最近一次 ${exam.last} 分），要考到 ${PASS} 分以上` })
      : { label: `考試 ${PASS} 分以上`, ok: false, p: 0, detail: '還沒有考試紀錄：到 📝 考試考一次' });
    const any = items.some(x => isLearned(learned, x.id)) || !!exam || touchedTb(unitId, items, ctx.log, ctx.agg);
    return result(checks, any);
  }

  // ---------- 社會／自然心智圖單元 ----------
  const CZ_LABEL = `考考自己一輪第一次就答對 ${PASS}% 以上`;
  function mmUnit(subj, uid, ctx) {
    const key = subj + ':' + uid, p = obj(obj(ctx.mm)[key]), pa = obj(p.passedAt), d = obj(SM.normDone(ctx.done).mm[key]);
    const passed = [1, 2, 3, 4].filter(l => num(pa[l]) != null), miss = [1, 2, 3, 4].filter(l => num(pa[l]) == null);
    const checks = [
      { label: '背架構第 1～4 關都過關', ok: !miss.length, p: passed.length / 4, detail: miss.length ? `已過 ${passed.length}/4 關，還差第 ${miss.join('、')} 關` : '4 關都過了' },
      d.czFirst == null && d.cz != null
        ? { label: CZ_LABEL, ok: false, p: 0, detail: `以前的紀錄算進了「再答一次」才答對的格子，不算：再做一整輪考考自己，第一次就答對 ${PASS}% 以上` }
        : scoreCheck(CZ_LABEL, d.czFirst, '考考自己（全部空格都作答完）'),
      scoreCheck('練習題一輪答對 80% 以上', d.qz, '練習題')
    ];
    const b = obj(obj(ctx.mmBlanks)[key]);
    const any = passed.length > 0 || Object.keys(obj(p.best)).length > 0 || d.cz != null || d.czFirst != null || d.qz != null || (+b.sess > 0) || Object.keys(obj(b.w)).length > 0 || Object.keys(obj(b.a)).length > 0;
    return result(checks, any);
  }

  // ---------- 數學 ----------
  function balance(ctx) {
    const s = SM.normDone(ctx.done).bal, ok = BAL.map((q, i) => !!s['b' + (i + 1)]), n = ok.filter(Boolean).length;
    const miss = BAL.map((q, i) => (ok[i] ? null : `第 ${i + 1} 題 ${q}`)).filter(Boolean);
    return result([{ label: `8 題內建題的「換你算算看」都算對過（${n}/8）`, ok: n === 8, p: n / 8, detail: miss.length ? `還差：${listText(miss, 4)}` : '8 題都算對過了' }], n > 0);
  }
  function shortDiv(ctx) {
    const s = SM.normDone(ctx.done).sd;
    return result(SD_LV.map(([k, t]) => scoreCheck(`換你算「${t}」一輪 80% 以上`, s[k], `「${t}」的換你算（5 題）`)), SD_LV.some(([k]) => s[k] != null));
  }
  function gcdWord(ctx) {
    const s = SM.normDone(ctx.done).gw;
    return result(GW_LV.map(([k, t]) => scoreCheck(`應用題「${t}」一輪 80% 以上`, s[k], `「${t}」應用題（5 題）`)), GW_LV.some(([k]) => s[k] != null));
  }
  // ---------- AI ----------
  function aiPage(pg, ctx) {
    const at = SM.normDone(ctx.done).ai[pg];
    return result([{ label: '從頭玩到看結果一次', ok: !!at, p: at ? 1 : 0, detail: at ? '玩完了' : '還沒有玩完的紀錄：按「開始挑戰」一路玩到看結果' }], !!at);
  }
  // ---------- Scratch（kids_scratch_done：'<會員>|scratch-td:L<n>'：時間；只讀）----------
  function scratchDone(scratch, n) { const re = new RegExp('(^|\\|)scratch-td:(L|lesson)' + n + '$'); return Object.keys(obj(scratch)).some(k => re.test(k) && obj(scratch)[k]); }
  function scratchLesson(n, ctx) {
    const ok = scratchDone(ctx.scratch, n);
    return result([{ label: '講義最後按了「我完成了」', ok, p: ok ? 1 : 0, detail: ok ? '完成了' : '做完這堂的遊戲後，到講義最下面按「我完成了」' }], ok);
  }

  // ---------- 單一單元（key）----------
  // data＝{textbook, words, phrases, patterns, KE}（只有英文課本單元要）；ctx＝{learned, log, agg, done, mm, mmBlanks, scratch}
  function evaluate(key, data, ctx) {
    data = data || {}; ctx = ctx || {};
    let m;
    if ((m = /^tb:(.+)$/.exec(key))) return tbUnit(m[1], tbItems(data, m[1], data.KE), ctx);
    if ((m = /^mm:(social|science):(.+)$/.exec(key))) return mmUnit(m[1], m[2], ctx);
    if (key === 'math:balance') return balance(ctx);
    if (key === 'math:sd') return shortDiv(ctx);
    if (key === 'math:gw') return gcdWord(ctx);
    if ((m = /^ai:(.+)$/.exec(key))) return aiPage(m[1], ctx);
    if ((m = /^scratch:(\d)$/.exec(key))) return scratchLesson(+m[1], ctx);
    return null;
  }

  // ---------- 課程地圖：各科的單元清單＋狀態＋整體完成率 ----------
  function catalog(data) {
    const tb = (data && data.textbook) || [];
    return [
      { k: 'english', name: '英文課本', icon: '📘', units: tb.map(u => ({ key: 'tb:' + u.id, group: u.book || '', title: u.title.replace(/^五[上下] /, ''), sub: u.theme || '', href: `index.html#tb/${u.id}/learn` })) },
      { k: 'social', name: '社會', icon: '🌏', units: MM_UNITS.social.map(([id, t], i) => ({ key: 'mm:social:' + id, title: `單元${NUMS[i]}　${t}`, href: `index.html#s/social/${id}` })) },
      { k: 'science', name: '自然', icon: '🔬', units: MM_UNITS.science.map(([id, t], i) => ({ key: 'mm:science:' + id, title: `單元${NUMS[i]}　${t}`, href: `index.html#s/science/${id}` })) },
      { k: 'math', name: '數學', icon: '🔢', units: [
        { key: 'math:balance', title: '天平解方程式', href: 'index.html#s/math/balance' },
        { key: 'math:sd', title: '短除法：換你算', href: 'index.html#s/math/short-division' },
        { key: 'math:gw', title: '短除法：應用題', href: 'index.html#s/math/short-division-word' }] },
      { k: 'ai', name: 'AI', icon: '🤖', units: AI.map(([id, t, i]) => ({ key: 'ai:' + id, title: `${i} ${t}`, href: `index.html#s/ai/${id}` })) },
      { k: 'scratch', name: 'Scratch 塔防', icon: '🏰', units: SCRATCH.map((t, i) => ({ key: 'scratch:' + (i + 1), title: `第 ${i + 1} 堂　${t}`, href: `game/scratch-td/web/lesson${i + 1}.html` })) }
    ];
  }
  // 英文題庫（課本以外）：學會百分比，依類別、等級
  function bank(data, ctx) {
    const KE = data.KE, L = obj(ctx.learned), mk = (k, label, icon, href, xs, idOf, lvOf, lvName) => {
      const total = xs.length, done = xs.filter(x => isLearned(L, idOf(x))).length, lvs = [];
      if (lvOf) [...new Set(xs.map(lvOf))].sort((a, b) => a - b).forEach(lv => { const ys = xs.filter(x => lvOf(x) === lv), d = ys.filter(x => isLearned(L, idOf(x))).length; lvs.push({ lv, label: lvName(lv), total: ys.length, learned: d, pct: ys.length ? Math.floor(d / ys.length * 100) : 0 }); });
      return { k, label, icon, href, total, learned: done, pct: total ? Math.floor(done / total * 100) : 0, levels: lvs };
    };
    return [
      mk('words', '單字', '🔤', 'index.html#learn/words', data.words || [], KE.wordItemId, w => w.lv || 1, lv => (lv === 4 ? '進階（國中）' : '等級 ' + lv)),
      mk('phrases', '片語', '🔗', 'index.html#learn/phrases', data.phrases || [], KE.phraseItemId, p => p.lv || 1, lv => (KE.PHRASE_LV && KE.PHRASE_LV[lv]) || '等級 ' + lv),
      mk('roots', '字根字首', '🧩', 'index.html#learn/roots', data.roots || [], KE.rootItemId),
      mk('grammar', '文法', '📐', 'index.html#learn/grammar', data.grammar || [], KE.grammarItemId),
      mk('patterns', '句型', '💬', 'index.html#learn/patterns', data.patterns || [], KE.patternItemId, p => p.lv || 2, lv => (KE.PATTERN_LV && KE.PATTERN_LV[lv]) || '等級 ' + lv)
    ];
  }
  function build(data, ctx) {
    const subjects = catalog(data).map(s => {
      const units = s.units.map(u => Object.assign({}, u, evaluate(u.key, data, ctx)));
      return Object.assign({}, s, { units, done: units.filter(u => u.status === 'done').length, total: units.length });
    });
    const done = subjects.reduce((n, s) => n + s.done, 0), total = subjects.reduce((n, s) => n + s.total, 0);
    return { subjects, done, total, pct: total ? Math.round(done / total * 100) : 0, bank: data.KE ? bank(data, ctx) : [] };
  }
  const STATUS_TEXT = { done: '✅ 已完成', doing: '🟡 進行中', todo: '⚪ 還沒開始' };
  const statusText = r => (r.status === 'doing' ? `${STATUS_TEXT.doing} ${r.pct}%` : STATUS_TEXT[r.status]);

  const KC = { PASS, MM_UNITS, BAL, SD_LV, GW_LV, AI, SCRATCH, record, tbItems, evaluate, catalog, bank, build, statusText, STATUS_TEXT, _: { tbUnit, mmUnit, balance, shortDiv, gcdWord, aiPage, scratchLesson, result } };
  if (typeof module !== 'undefined' && module.exports) module.exports = KC;
  root.KidsCompletion = KC;
})(typeof window !== 'undefined' ? window : globalThis);
