/* syncmerge.js — 裝置同步的合併規則（純函式，不碰 DOM／網路以外的東西；瀏覽器與 Node 共用）
   2026-11-23 英文 agg／learned 上傳時壓縮（不升版、上限都沒動；以前這兩個欄位跟著學過的題數一直長，約 2,560 字就會 413）：
    ke:{a:'<LZW>', l:'<LZW>', o:舊版最後出現的時間}   ← 只在 PUT 出去的文件裡（packDoc）；normalize 解開併回 agg／learned，程式裡、本機照舊是完整物件。
    - a：每題只留「答對過幾次（封頂 2）」三種狀態（答過沒對／1 次／2 次以上）——學過 2 次就不算、解鎖、課本「有沒有練過」都只看這個；
      答題次數 n、確切的 k、fc 時間只留在本機 ke_agg（家長頁各主題正確率＝那台自己的數字＋同步來的封頂值）。合併＝每題取大，跟以前一樣。
    - l：學會 at／取消 removedAt 留到毫秒（新的勝、墓碑照舊）＋分數。還原後跟原本不一樣的（非標準時間、多的欄位）照舊放在 learned 物件。
    - 英文錯題墓碑：最多留 300 筆最新的（比照 mk；以前沒有上限）。
    - 舊版（2026-11-21 線上版，凍結在 test/fixtures/syncmerge-old-1121.js）讀到：丟掉 ke，PUT 回去少了 ke → 新版下次同步從本機補回。
      新版看到舊版寫過的文件（有 agg／learned、沒有 ke）→ ke.o＝那時候；之後 14 天內舊寫法的 agg／learned 也整份寫一份（放得進 MAX_BYTES 才寫），
      舊版那台看得到全部、也不會因為「本機有、文件沒有」每次都重傳、跟新版來回蓋；放不下時舊版那台只看得到自己的。
      雙向測試見 test/sync-ke.test.js；最壞大小見 smoke。
   2026-11-21 裝置時鐘不一致（文件格式、合併規則、上限都沒動）：合併時用「裝置自己的時間」比新舊的欄位，寫入端改用 stamp(上一次的時間, 現在)
    ＝比同一筆上一次的時間至少晚 1 毫秒（prev 超過現在＋1 天就不跟）。時鐘快的那台寫過、慢的那台同步看過之後再改 → 慢的那台一定勝。
    用到的地方：取消學會／重新學會、英文錯題（app.js）、天平新增／刪除／換順序（eqFromLocal）、課本考試最近一次（completion.js）、
    心智圖最後過關＋複習進度、單元測驗最近一次（mindmap.js）；各科錯題庫 kids-mistakes.js 本來就這樣寫（u＋1）。盤點與測試見 test/sync-clock.test.js。
   2026-11-17 瘦身（不升版、上限都沒動；舊版↔新版雙向合併見 test/sync-compat.test.js，舊版＝test/fixtures/syncmerge-old-v9.js）：
    - mmBlanks.a（背架構節點）的 key 省掉單元名：'u1-l1-c' → '-l1-c'（normA／expandBl）。舊版把它當成不認得的節點照樣留著、不會刪；新版兩種都吃。
    - eq.del（天平刪除墓碑）留最新 50 筆（原 100）。舊版留 100 筆也不衝突。
    最壞情況（smoke，dd 用上限算）127,544 → 124,016 B（上限 MAX_BYTES/4＝128,000 B，沒放寬）。
   文件格式 v9（2026-11-02 起；v8 欄位完全不變，只多一個 dd 欄位，舊文件少了它就當空的）：
    dd:{'<裝置id>':'261103e30,5m18,3;261104c5'}   ← kids_daily（每日學習統計；畫面在 kids-daily.js）。每台裝置一個字串，分號隔開每一天：YYMMDD（台北）＋科目代碼＋題數,答錯數（答錯 0 不寫）
    - G-counter：每台裝置只加自己的計數；合併時同一台、同一天、同一科的題數、答錯數各取大；顯示時才加總各裝置（ddSum）→ 重複同步不會重複算，交換、結合、冪等。
    - 只留最近 90 天（用現在時間砍，未來日期不砍：時鐘錯的裝置頂多多留幾筆，顯示端會略過）。
    - 大小：整個 dd 最多 DD_MAX 位元組，超過從最舊的一天開始丟（從新到舊累計，只看「比它新的天」，所以合併順序不影響結果）。iPad 天天 4～5 科＋電腦偶爾用，90 天都放得下（數字見 test/daily-stats.test.js）；只有每天好幾台各做很多科才會提早丟舊的。
    - 舊版（v8）裝置的 normalize 會丟掉 dd，PUT 回去少了它 → 新版下次同步從本機補回（跟 v4→v5 的 done 一樣，不會掉資料）。
    - 2026-11-09 加的代碼（不升版；舊版裝置照樣合併、顯示時略過）：j 句型、p 片語（英文小分類，同一題也記在 e）、u 乘法快算兩位×兩位、f 異分母加減（同一題也記在 m）——都只記題數；
      v 歷史漫畫看完一話、w 地理做完一組／一次測驗。
    dg:{'261103':'60,30,1,0'}   ← kids_daily_goal（每日進度清單的目標，2026-11-03 加，跟 fr 一樣不升版）：生效日 → 英文,數學,閱讀,修改序號。同一天的目標序號大的勝；只留最新 DG_KEEP 筆。
      2026-11-09 起多 6 欄 → 英文,數學,閱讀,修改序號,句型,片語,乘法,異分母,歷史,地理（舊 4 欄照收）。舊版裝置看不懂 10 欄會丟掉、新版下次同步從本機補回。
      2026-11-24 起多第 11 欄「單字」（0～99，不升版；4、10 欄照收）。舊版裝置看不懂 11 欄會丟掉、新版下次同步從本機補回（同上）。dd 多代碼 d＝英文單字題（同一題也記在 e，只記題數）。
   文件格式 v8（2026-11-02 起；只改 mmBlanks，其他欄位跟 v7 完全一樣）——大小改由「真的答過的詞」決定、每筆有上限，不再跟著題庫長：
    - 只同步答過的詞／節點（ok+wrong＞0）；只抽出來、還沒作答的（commitSession 只記 lastShown）留在本機不上傳。
      'rel:' 開頭的背架構紀錄（關係詞 2026-10-11 起不挖空、不會再有新作答）不同步。
    - 計數封頂：ok、wrong 各最多 BL_CAP（99）、streak 最多 3（引擎只看 ≥3）。完整紀錄 "ok,wrong,streak,lastShown"（last 由 streak 推：＞0＝答對）。
    - 已熟練（last＝ok 且 streak≥3，引擎 ×0.25 降權的那種）只留旗標 "m<答題次數>,<lastShown>"，例 "m12,40"：
      答題次數留著給合併比「誰答得多」；lastShown 留著給 core 保證（前兩次沒出現就一定出），不然別台會每次都硬塞這些詞。
    - q（練習題答對過的題目雜湊）從 {雜湊:1} 改成排序過、空格分隔的字串 "h1 h2 h3"。
    - 升級：normRec／normQ 舊物件、v7 字串都吃，一律輸出 v8；新舊格式混著合併結果一樣（smoke 有測）。
    - 本機照舊存完整物件：sync.js writeLocal 用 expandBl(文件, 本機)——同步結果跟本機那筆壓縮後一樣就留本機原本的（不會被封頂、
      旗標蓋掉），本機有、文件沒有的（沒作答的）也留著。只有別台答得比較多的詞才換成文件裡的（可能是封頂／旗標還原的）。
    - 舊版（v7）裝置讀 v8：紀錄、旗標、q 字串都看不懂會丟掉，PUT 回去少了它們 → 新版下次同步從本機補回（跟 v6→v7 一樣，不會掉資料；?v= 換網址後重開頁就是新版）。
    - 最壞情況（每個詞、節點都答過、計數封頂，練習題全答對）見 smoke：現有單元＋六下 9 單元（照六上詞數估）都要 ≤ MAX_BYTES/4。
   文件格式 v7（2026-11-02 起；只改 mmBlanks 的寫法，其他欄位跟 v6 完全一樣）：
    mmBlanks 每個詞／節點的紀錄從物件壓成一個字串 "ok,wrong,streak,last,lastShown"（last＝o／w／空、lastShown 沒有＝空），
    例 {ok:4,wrong:1,streak:2,last:'ok',lastShown:5} → "4,1,2,o,5"。五下上線後塞滿（每個詞答 999 次）從約 156KB 降到約 80KB。
   - 升級：normRec 物件、字串都吃，一律輸出字串 → v6 文件、本機舊紀錄讀進來就是 v7；新舊格式混著合併結果一樣（smoke 有測）。
   - 本機 kids_mm_blanks 照舊是物件（blanks.js、completion、小助理直接讀）：sync.js writeLocal 用 expandBl 還原。
   - 舊版（v6）裝置讀到字串會丟掉那些詞的紀錄、PUT 回去只剩它自己的 → 新版下次同步從本機補回（跟 v4→v5 的 done 一樣，不會掉資料）。
   文件格式 v6（2026-10-21 起；v5 欄位完全不變，只在 done 裡多 mp、mx 兩節，舊文件少了它們就當空的）：
    done.mp:{circle,both,fill,lcm,word,lit:最佳 %, test:考試最高分, p1,p2:練習卷第一回／第二回最高分}   ← 數學〈倍數與公倍數〉各題型練習一輪最佳 %＋考試最高分（p1、p2 2026-10-21 加；舊版裝置會丟掉、新版下次同步從本機補回）
    done.mx:{nn,d21,d22t,d22,d31:{acc:最佳 %, sp:最快平均秒數×10, ok:第一次達標的時間}}   ← 數學〈乘法快算〉挑戰（一輪 ≥90% 且平均每題 ≤ 門檻秒數＝ok：二位×二位 20 秒、其他 10 秒；判定在 completion.js）
    done.fr:{basic,bench,lcd,red,mix:最佳 %, test:考試最高分}   ← 數學〈分數比較大小〉各題型練習一輪最佳 %＋考試最高分（2026-10-27 加，跟 p1／p2 一樣不升版：舊版裝置會丟掉、新版下次同步從本機補回）
    done.zh:{'<篇id>':第一次完成的時間}   ← 國語〈閱讀素養〉完成的篇（2026-11-01 加，跟 fr 一樣不升版；聯集，留最早的時間；判定在 completion.js zh:L1～L4）
    done.cy:{'<成語／篇／單元測驗 id>':第一次完成的時間}   ← 國語〈成語故事〉完成的成語 cy001～cy100、素養閱讀 cyr01～cyr10、單元測驗 cyu01～cyu10、總測驗 cyall（2026-11-01 加，同 zh）
    done.mg:{'g5b1q':%, 'g5b1t':分, 'g5bR':分}   ← 數學五下～六下（math/grade.html，2026-11-06 加，跟 fr 一樣不升版）：單元練習一輪最佳 %、單元測驗最高分、整冊總複習最高分；各項取大
    done.geo:{'m1p1':%, 'm1t':分}   ← 🌍 地理（geo/unit.html，2026-11-08 加，跟 mg 一樣不升版）：練習各組（p1～p3）最佳 %、單元測驗最高分；各項取大；'w1o'～'w7o'＝世界篇開場漫畫看完（100，2026-11-08 加）
    mk.chinese                              ← 國語錯題庫（2026-11-01 加；舊版裝置的 normMk 會丟掉、新版下次同步從本機補回）
    mk.geo                                  ← 地理錯題庫（2026-11-09 加，同 chinese 不升版；p 只有 {ty, s}）
    mk.<科>.<id>.due                         ← 🔁 隔天複習（社會／自然）下次到期的日子（台北時間第幾天；2026-11-01 加，不升版：舊版裝置會丟掉 → 那題當今天到期；一樣新時 墓碑 ＞ 有 due ＞ 沒 due）
   - mp、fr：各項取大。mx：acc 取大、sp 取小、ok 取最早（聯集）。舊版（v5）裝置的 normDone 會丟掉 mp／mx → 新版下次同步從本機補回來（跟 v4→v5 的 done 一樣）。
   文件格式 v5（2026-10-20 起；v4 欄位完全不變，只多一個 done 欄位，舊文件少了它就當空的）：
    done:{tb:{'<課本單元>':{best,last,at}}, mm:{'<科>:<單元>':{cz,qz}}, bal:{b1…b8:ms}, sd:{l20,l100,l3d,tri:%}, gw:{basic,adv:%}, ai:{'<頁>':ms}}
                                                                                          ← kids_done（單元完成用的補存紀錄；判定在 completion.js）
   - done：英文課本考試 best 取大、last 跟著 at 較新的那次（一樣新取大的）；心智圖考考自己 cz／練習題 qz、短除法 sd、應用題 gw 的最佳 % 取大；
     天平內建題算對過 bal、AI 玩完 ai：聯集，留最早的時間。舊版（v4）裝置 PUT 回去的文件少了 done → 新版下次同步從本機補回來。
   文件格式 v4（2026-10-11 起；v3 欄位完全不變，只多一個 mk 欄位，舊文件少了它就當空的）：
    mk:{'<科>':{題目id:{c,w,t,u,p}|{d:1,w,t,u}}}   ← kids_mistakes（社會／自然／數學／AI 錯題庫；科＝social、science、math、ai）
   - mk：每科依題目 id 聯集；同一題 u（更新時間）最新的勝——畢業（移出錯題庫）用 d:1 墓碑，別台舊的那份不會把它救回來；
     答錯次數 w 取兩邊較大；墓碑每科最多留 300 筆（最新的）。英文錯題（mistakes）照舊。
   文件格式 v3（2026-10-09 起；v2 欄位完全不變，只多下面五個欄位，舊文件少了它們就當空的）：
   {v:3, cut, log:[{r,t,id,m,k,y,ok,a}], agg:{qid:{fc,n,k}}, learned:{id:{at,score}|{removedAt}}, mistakes:{qid:{c,w,t,u,d?}},
    mm:{'<科>:<單元>':{unlocked,best:{關:%},passedAt:{關:ms},lastPassAt,reviewStep}},      ← kids_mm_progress（社會／自然心智圖）
    mmBlanks:{'<科>:<單元>':{sess,w:{詞:{ok,wrong,streak,last?,lastShown?}},a:{節點:{…}},q?:{題目雜湊:1}}},  ← kids_mm_blanks（挖空／背架構加權；q＝練習題答對過）
    eq:{at,items:[{q,own,t}],del:{q:ms}},                                                  ← tianping-eq-list-v2（數學天平題目清單）
    scratch:{'<會員>|<堂>':iso},                                                            ← kids_scratch_done（Scratch 我完成了）
    ctr:{<裝置id>:{stars,quizzes}}}                                                         ← ke_progress（英文星星、完成回數）
   - log：每筆有固定 id（r），合併＝依 r 聯集；沒有 r 的舊紀錄用 雜湊(時間|題號|答案) 補，兩台算出來一樣
   - agg＋cut：太大時把最舊的紀錄壓成每題一筆（fc＝第一次答對的時間），t ≤ cut 的紀錄只留在 agg
   - learned：每個項目「最新的事件」勝（學會 at／取消 removedAt 墓碑），取消會傳到別台、不會被救回
   - mistakes：每題 u（更新時間）最新的勝；畢業用 d:1 墓碑
   - mm：每單元 unlocked／best／passedAt 各關取最大（＝過關聯集＋最佳成績＋最新過關時間）；複習：lastPassAt 取最新，
     reviewStep 跟著 lastPassAt 較新的那份走（一樣新取大的）。'_' 開頭的 key（示範時鐘）不同步。
   - mmBlanks：sess 取大；每個詞／節點取「答題次數（ok+wrong）較多」的那份（一樣多取 lastShown 大的）。
     q（2026-10-29 加，練習題答對過的題目雜湊 → 1）：聯集。跟 p1／p2 一樣不升版：舊版裝置的 normBl 會丟掉 q，新版下次同步從本機補回。
     不用加總：同一份紀錄每次同步都會再碰到，加總會一直重複累加（不冪等）；取較多的那份每次結果都一樣。
   - eq：依題目字串聯集＋刪除墓碑（del 比 t 新＝刪掉），順序跟 at（最後在哪台改清單）較新的那份，最多 30 題、墓碑最多 100 筆。
   - scratch：聯集，同一堂留最早的完成時間。
   - ctr：每台裝置各記自己的星星／回數（各欄取大），本機總數＝全部裝置加總，所以兩台不會互相蓋掉也不會重複算。 */
(function (root) {
  'use strict';
  // MAX_EQ_DEL：天平刪除墓碑留最新幾筆（2026-11-17 瘦身 100 → 50，仍是清單上限 30 題的 1.6 倍；舊版裝置留 100 筆也不衝突，新版整理時砍回 50）
  const MAX_BYTES = 500 * 1024, VERSION = 9, MAX_EQ = 30, MAX_EQ_DEL = 50, BL_CAP = 99;

  function h53(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }
  const rid = e => 'r' + h53(`${e.t}|${e.id}|${e.a == null ? '' : e.a}`).toString(36);
  // 依 key 排序的 JSON：用來比對「內容一樣嗎」與決定平手時的順序
  function canon(x) {
    if (Array.isArray(x)) return '[' + x.map(canon).join(',') + ']';
    if (x && typeof x === 'object') return '{' + Object.keys(x).sort().filter(k => x[k] !== undefined).map(k => JSON.stringify(k) + ':' + canon(x[k])).join(',') + '}';
    return JSON.stringify(x === undefined ? null : x);
  }
  const bytes = d => (typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(JSON.stringify(d)).length : JSON.stringify(d).length);
  const cmpLog = (a, b) => (a.t - b.t) || (a.r < b.r ? -1 : a.r > b.r ? 1 : 0);
  const evL = x => Math.max(Date.parse(x && x.at) || 0, Date.parse(x && x.removedAt) || 0);
  const evM = x => (x && (x.u || x.t)) || 0;
  // 寫「拿來比新舊的時間」用（2026-11-21 裝置時鐘不一致）：比同一筆上一次的時間 prev 至少晚 1 毫秒（混合邏輯時鐘的簡化版，只看同一筆、不存任何新東西）。
  //   時鐘快 10 分鐘的那台寫過、這台同步看過 → 這台之後的操作一定排在後面。prev 超過「現在＋1 天」就不跟（時鐘快很多的那台不會把大家的時間一起推走），用現在。
  //   顯示、日期判斷（每日清單哪一天、隔天複習、補題期限、x 分鐘前）照舊用真的 Date.now()，不要用這個。
  const STAMP_MAX_AHEAD = 864e5;
  const stamp = (prev, now) => { const n = now == null ? Date.now() : +now, p = +prev || 0; return p >= n && p <= n + STAMP_MAX_AHEAD ? p + 1 : n; };
  // 兩筆取「事件較新」的；一樣新就取 canon 字串較大的（兩邊結果一致）
  function newest(a, b, ev) { if (!a) return b; if (!b) return a; const ea = ev(a), eb = ev(b); if (ea !== eb) return ea > eb ? a : b; return canon(a) >= canon(b) ? a : b; }
  function mergeMap(a, b, ev) { const o = {}; Object.keys(Object.assign({}, a, b)).sort().forEach(k => { const v = newest(a[k], b[k], ev); if (v) o[k] = v; }); return o; }
  function addFc(agg, e) { if (!e.ok) return; const g = agg[e.id] || (agg[e.id] = { n: 0, k: 0 }); if (g.fc == null || e.t < g.fc) g.fc = e.t; }
  function mergeAgg(a, b) {
    const o = {};
    Object.keys(Object.assign({}, a, b)).sort().forEach(q => {
      const x = a[q] || {}, y = b[q] || {}, g = { n: Math.max(x.n || 0, y.n || 0), k: Math.max(x.k || 0, y.k || 0) };
      const fc = [x.fc, y.fc].filter(v => v != null); if (fc.length) g.fc = Math.min.apply(null, fc);
      o[q] = g;
    });
    return o;
  }
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  const num = (x, d) => (x !== null && x !== '' && isFinite(+x) ? +x : d);
  const int0 = x => Math.max(0, Math.floor(num(x, 0)));
  // 物件型欄位：依 key 排序、逐筆整理（回 null 的丟掉）；'_' 開頭的 key 不同步
  function section(x, one) { const o = {}; Object.keys(obj(x)).sort().forEach(k => { if (!k || k.charAt(0) === '_') return; const v = one(x[k], k); if (v) o[k] = v; }); return o; }
  function mergeSection(a, b, fn) { const o = {}; Object.keys(Object.assign({}, a, b)).sort().forEach(k => { const v = a[k] && b[k] ? fn(a[k], b[k]) : (a[k] || b[k]); if (v) o[k] = v; }); return o; }
  const maxMap = (a, b) => { const o = {}; Object.keys(Object.assign({}, a, b)).sort().forEach(k => { o[k] = Math.max(a[k] == null ? -Infinity : a[k], b[k] == null ? -Infinity : b[k]); }); return o; };

  // ---- mm：社會／自然心智圖過關（kids_mm_progress 的一個單元）----
  function normProg(p) {
    if (!p || typeof p !== 'object' || Array.isArray(p)) return null;
    const lv = m => { const o = {}; Object.keys(obj(m)).sort().forEach(k => { const v = num(m[k], null); if (/^[1-9]$/.test(k) && v != null) o[k] = v; }); return o; };
    return { unlocked: Math.max(1, Math.min(5, Math.floor(num(p.unlocked, 1)) || 1)), best: lv(p.best), passedAt: lv(p.passedAt), lastPassAt: Math.max(0, num(p.lastPassAt, 0)), reviewStep: int0(p.reviewStep) };
  }
  function mergeProg(a, b) {
    const o = { unlocked: Math.max(a.unlocked, b.unlocked), best: maxMap(a.best, b.best), passedAt: maxMap(a.passedAt, b.passedAt), lastPassAt: Math.max(a.lastPassAt, b.lastPassAt) };
    o.reviewStep = a.lastPassAt !== b.lastPassAt ? (a.lastPassAt > b.lastPassAt ? a : b).reviewStep : Math.max(a.reviewStep, b.reviewStep);
    return o;
  }
  // ---- mmBlanks：挖空／背架構加權（kids_mm_blanks 的一個單元）----
  // v8：完整紀錄 "ok,wrong,streak,lastShown"（計數封頂；last 不存：答過的詞 streak＞0＝最後答對、streak＝0＝最後答錯，recordAnswer 就是這樣記的）；
  //     已熟練只留旗標 "m<次數>,<lastShown>"；沒作答的不留。舊的物件、v7 字串 "ok,wrong,streak,last,lastShown" 也吃（升級）
  const unRec = s => {
    let p, o;
    if (s.charAt(0) === 'm') { p = s.slice(1).split(','); const n = int0(p[0]), ok = Math.min(n, BL_CAP); o = { ok, wrong: n - ok, streak: 3, last: 'ok' }; p = [, , , , p[1]]; }
    else { p = s.split(','); if (p.length === 4) p.splice(3, 0, +p[2] > 0 ? 'o' : 'w'); o = { ok: +p[0], wrong: +p[1], streak: +p[2] }; if (p[3]) o.last = p[3] === 'o' ? 'ok' : 'wrong'; }
    if (p[4] !== '') o.lastShown = +p[4];
    return o;
  };
  function normRec(r) {
    if (typeof r === 'string') { const n = r.split(',').length; r = (r.charAt(0) === 'm' ? n === 2 : n === 4 || n === 5) ? unRec(r) : null; }
    if (!r || typeof r !== 'object') return null;
    const ok = Math.min(int0(r.ok), BL_CAP), wrong = Math.min(int0(r.wrong), BL_CAP), st0 = Math.min(int0(r.streak), 3);
    if (!(ok + wrong)) return null;   // 只抽出來、沒作答
    const lastOk = r.last === 'ok' || (r.last !== 'wrong' && st0 > 0), st = lastOk ? Math.max(1, st0) : 0;
    const ls = num(r.lastShown, null), L = ls == null ? '' : ls;
    return st >= 3 ? 'm' + (ok + wrong) + ',' + L : [ok, wrong, st, L].join(',');
  }
  // 背架構節點 id（a 的 key）短寫（2026-11-17 瘦身，不升版）：節點 id 都是「<單元>-…」→ 文件裡省掉單元名、留「-」開頭（例 social:u1 的 'u1-l1-c' 寫 '-l1-c'）。
  //   舊版裝置看不懂也不會丟：舊版 section 只丟 '_' 開頭的 key，'-…' 照樣留著、合併、PUT 回去（只是舊版自己用不到那幾筆）；
  //   新版兩種寫法都吃，同一個節點取答得多的那份（pickRec）。本機 kids_mm_blanks 照舊存完整 id（expandBl 還原）。
  const aUnit = k => { const i = String(k || '').indexOf(':'); return i >= 0 ? String(k).slice(i + 1) : ''; };
  const aFull = (k, uid) => (uid && k.charAt(0) === '-' ? uid + k : k);
  const aShort = (k, uid) => (uid && k.indexOf(uid + '-') === 0 && k.length > uid.length + 1 ? k.slice(uid.length) : k);
  const normA = (x, uid) => {
    const o = {}, d = obj(x);
    Object.keys(d).sort().forEach(k => { if (!k || k.charAt(0) === '_') return; const f = aFull(k, uid), v = normRec(d[k]); if (!v || f.indexOf('rel:') === 0) return; const s = aShort(f, uid); o[s] = o[s] ? pickRec(o[s], v) : v; });
    const out = {}; Object.keys(o).sort().forEach(k => { out[k] = o[k]; }); return out;
  };
  // q：v8 存成排序過、空格分隔的字串；舊的 {雜湊:1} 也吃。'_' 開頭的不同步；空的回 ''
  const normQ = x => { const s = new Set(); (typeof x === 'string' ? x.split(/\s+/) : Object.keys(obj(x)).filter(k => x[k] && !/\s/.test(k))).forEach(k => { if (k && k.charAt(0) !== '_') s.add(k); }); return [...s].sort().join(' '); };
  function pickRec(a, b) {
    const x = unRec(a), y = unRec(b), na = x.ok + x.wrong, nb = y.ok + y.wrong; if (na !== nb) return na > nb ? a : b;
    const la = x.lastShown || 0, lb = y.lastShown || 0; if (la !== lb) return la > lb ? a : b;
    return a >= b ? a : b;
  }
  // q：練習題答對過的題（題目雜湊，2026-10-29）；聯集。空的不寫出來（舊文件、舊測試的形狀不變）
  const withQ = (o, q) => { if (q && (typeof q === 'string' || Object.keys(q).length)) o.q = q; return o; };
  function normBl(s, key) { if (!s || typeof s !== 'object' || Array.isArray(s)) return null; return withQ({ sess: int0(s.sess), w: section(s.w, normRec), a: normA(s.a, aUnit(key)) }, normQ(s.q)); }
  const mergeBl = (a, b) => withQ({ sess: Math.max(a.sess, b.sess), w: mergeSection(a.w, b.w, pickRec), a: mergeSection(a.a, b.a, pickRec) }, normQ((a.q || '') + ' ' + (b.q || '')));
  // 同步結果寫回本機 kids_mm_blanks 用：字串紀錄還原成物件（形狀跟 blanks.js 寫的一樣）。
  // local＝本機原本的 kids_mm_blanks：文件裡那筆＝本機那筆壓縮後的樣子 → 留本機原本的（沒被封頂／旗標化）；本機有、文件沒有的（沒作答的）也留
  function expandBl(x, local) {
    const L = obj(local), qo = q => { const o = {}; (q ? q.split(' ') : []).forEach(h => { o[h] = 1; }); return o; };
    // uid：a 的短寫 key 還原成完整節點 id；本機裡舊版留下的短寫 key（'-' 開頭）不留（文件裡那筆已經用完整 id 寫回）
    const m = (r, lb, uid) => { const lo = obj(lb), o = {}; Object.keys(lo).forEach(k => { if (lo[k] && typeof lo[k] === 'object' && !(uid && k.charAt(0) === '-')) o[k] = lo[k]; }); Object.keys(r).forEach(k0 => { const k = aFull(k0, uid); if (normRec(lo[k]) !== r[k0]) o[k] = unRec(r[k0]); }); return o; };
    const d = section(x, normBl), o = {};
    Object.keys(d).forEach(k => { const u = d[k], l = obj(L[k]); o[k] = withQ({ sess: u.sess, w: m(u.w, l.w, ''), a: m(u.a, l.a, aUnit(k)) }, qo(u.q)); });
    return o;
  }
  // ---- eq：數學天平題目清單（聯集＋刪除墓碑）----
  function finishEq(at, items, del) {
    const alive = items.filter(it => !(it.q in del) || it.t > del[it.q]).slice(0, MAX_EQ), live = new Set(alive.map(it => it.q)), d2 = {};
    Object.keys(del).filter(q => !live.has(q)).sort((x, y) => (del[y] - del[x]) || (x < y ? -1 : 1)).slice(0, MAX_EQ_DEL).sort().forEach(q => { d2[q] = del[q]; });
    return { at, items: alive, del: d2 };
  }
  function normEq(e) {
    const d = obj(e), del = Object.create(null), items = [], seen = new Set();
    Object.keys(obj(d.del)).forEach(q => { const t = num(d.del[q], 0); if (q && t > 0) del[q] = t; });
    (Array.isArray(d.items) ? d.items : []).forEach(it => {
      if (!it || typeof it.q !== 'string' || !it.q || seen.has(it.q)) return;
      seen.add(it.q); items.push({ q: it.q, own: !!it.own, t: Math.max(0, num(it.t, 0)) });
    });
    return finishEq(Math.max(0, num(d.at, 0)), items, del);
  }
  function mergeEq(a, b) {
    a = normEq(a); b = normEq(b);
    const first = a.at !== b.at ? (a.at > b.at ? a : b) : (canon(a) >= canon(b) ? a : b), second = first === a ? b : a;
    const m = new Map();
    [first, second].forEach(s => s.items.forEach(it => { const p = m.get(it.q); if (!p) m.set(it.q, { q: it.q, own: it.own, t: it.t }); else { p.t = Math.max(p.t, it.t); p.own = p.own || it.own; } }));
    const del = Object.create(null); [a.del, b.del].forEach(x => Object.keys(x).forEach(q => { del[q] = Math.max(del[q] || 0, x[q]); }));
    return finishEq(Math.max(a.at, b.at), [...m.values()], del);
  }
  // 本機清單（[{q,own}]，沒有＝null）＋上次同步後的清單狀態 prev → 這台的 eq：新出現的題 t＝now、不見的題記墓碑、順序變了 at＝now
  //   （時間都用 stamp：比這一題／這份清單上一次的時間晚，時鐘慢的那台後來的新增、刪除、換順序才不會輸給時鐘快的那台）
  function eqFromLocal(list, prev, now) {
    const p = normEq(prev);
    if (!Array.isArray(list)) return p;
    const pm = new Map(p.items.map(it => [it.q, it])), del = Object.assign(Object.create(null), p.del), items = [], seen = new Set();
    list.forEach(it => {
      if (!it || typeof it.q !== 'string' || !it.q || seen.has(it.q)) return;
      seen.add(it.q); const o = pm.get(it.q); items.push({ q: it.q, own: !!it.own, t: o ? o.t : stamp(del[it.q], now) });
    });
    pm.forEach((it, q) => { if (!seen.has(q)) del[q] = stamp(it.t, now); });
    const same = items.length === p.items.length && items.every((it, i) => it.q === p.items[i].q && it.own === p.items[i].own);
    return finishEq(same ? p.at : stamp(p.at, now), items, del);
  }
  // ---- scratch：Scratch「我完成了」（聯集，留最早的時間）----
  const normScr = x => section(x, v => (typeof v === 'string' && v ? v : null));
  const earliest = (a, b) => { const ta = Date.parse(a), tb = Date.parse(b); if (ta !== tb && !(isNaN(ta) && isNaN(tb))) return isNaN(tb) || ta < tb ? a : b; return a <= b ? a : b; };
  // ---- ctr：每台裝置的星星／回數 ----
  const normCtr = x => section(x, c => (c && typeof c === 'object' ? { stars: int0(c.stars), quizzes: int0(c.quizzes) } : null));
  const mergeCtr = (a, b) => ({ stars: Math.max(a.stars, b.stars), quizzes: Math.max(a.quizzes, b.quizzes) });
  const ctrSum = c => { const s = { stars: 0, quizzes: 0 }; Object.keys(obj(c)).forEach(d => { s.stars += int0(c[d] && c[d].stars); s.quizzes += int0(c[d] && c[d].quizzes); }); return s; };

  // ---- mk：各科錯題庫（kids_mistakes；格式見 kids-mistakes.js 檔頭；這裡的整理規則要跟 kids-mistakes.js _core 一致，smoke 會對）----
  const MK_SUBJ = ['chinese', 'social', 'science', 'math', 'ai', 'geo', 'gept'], MK_GRAD = 3, MK_DEL = 300, MK_ID = 200, MK_P = 4000;
  const nat = x => { x = +x; return isFinite(x) && x > 0 ? Math.floor(x) : 0; };
  function normMkP(p) { if (!p || typeof p !== 'object' || Array.isArray(p)) return {}; try { const s = JSON.stringify(p); return s.length <= MK_P ? JSON.parse(s) : {}; } catch (e) { return {}; } }
  function normMkEntry(e) {
    if (!e || typeof e !== 'object' || Array.isArray(e)) return null;
    const t = nat(e.t), u = Math.max(nat(e.u), t);
    if (e.d) return { d: 1, w: nat(e.w), t, u };
    const o = { c: Math.min(nat(e.c), MK_GRAD - 1), w: Math.max(1, nat(e.w)), t, u, p: normMkP(e.p) };
    if (nat(e.due)) o.due = nat(e.due);   // 🔁 隔天複習的下次到期日（社會／自然，2026-11-01；不升版：舊版裝置會丟掉，那題就當今天到期）
    return o;
  }
  function normMkBook(b) {
    const o = {}, x = obj(b), dead = [];
    Object.keys(x).sort().forEach(k => { if (!k || k.length > MK_ID || k.charAt(0) === '_') return; const e = normMkEntry(x[k]); if (!e) return; o[k] = e; if (e.d) dead.push(k); });
    if (dead.length > MK_DEL) dead.sort((a, c) => (o[c].u - o[a].u) || (a < c ? -1 : 1)).slice(MK_DEL).forEach(k => { delete o[k]; });
    return o;
  }
  function normMk(x) { const o = {}, d = obj(x); MK_SUBJ.forEach(s => { const b = normMkBook(d[s]); if (Object.keys(b).length) o[s] = b; }); return o; }
  // 同一題：u 新的勝（墓碑＝已畢業也是，別台舊的那份不會把它救回來）；一樣新比內容（不含 w）；答錯次數 w 取較大
  const noW = e => { const o = Object.assign({}, e); delete o.w; return canon(o); };
  // 一樣新時：墓碑 ＞ 有 due ＞ 沒 due（不讓畢業的題復活、舊版丟掉 due 也蓋不掉排程；三級全序，合併才能交換、結合；同 kids-mistakes.js pick）
  const rkMk = e => e.d ? 2 : e.due ? 1 : 0;
  function pickMk(a, b) {
    if (!a) return b; if (!b) return a;
    const x = a.u !== b.u ? (a.u > b.u ? a : b) : rkMk(a) !== rkMk(b) ? (rkMk(a) > rkMk(b) ? a : b) : (noW(a) >= noW(b) ? a : b), w = Math.max(a.w, b.w);
    return x.w === w ? x : Object.assign({}, x, { w });
  }
  function mergeMk(a, b) {
    a = normMk(a); b = normMk(b); const o = {};
    MK_SUBJ.forEach(s => { if (!a[s] && !b[s]) return; const x = a[s] || {}, y = b[s] || {}, m = {}; Object.keys(Object.assign({}, x, y)).sort().forEach(k => { m[k] = pickMk(x[k], y[k]); }); o[s] = m; });
    return normMk(o);
  }

  // ---- done：單元完成用的補存紀錄（kids_done；completion.js 讀）----
  const pct = x => { const v = num(x, null); return v == null ? null : Math.max(0, Math.min(100, Math.round(v))); };
  const ms = x => { const v = num(x, 0); return v > 0 ? Math.floor(v) : 0; };
  const DONE_KEY = /^[a-z0-9][a-z0-9:_-]{0,79}$/i, SD_K = ['l20', 'l100', 'l3d', 'tri'], GW_K = ['basic', 'adv'];
  // 每一節：依 key 排序、整理、丟掉不合格的；keys＝只收這幾個 key（陣列）或符合的 key（正規式）
  function dsec(x, one, keys) { const o = {}, d = obj(x); Object.keys(d).sort().forEach(k => { if (!DONE_KEY.test(k) || (keys && (keys.test ? !keys.test(k) : keys.indexOf(k) < 0))) return; const v = one(d[k]); if (v != null) o[k] = v; }); return o; }
  function normTb(e) { if (!e || typeof e !== 'object') return null; const b = pct(e.best), l = pct(e.last), at = ms(e.at); if (b == null && l == null) return null; const last = l == null ? b : l; return { best: Math.max(b == null ? 0 : b, last), last, at }; }
  // mm：cz＝考考自己一輪答對率（含「再答一次」才答對的格子，2026-10-20 第一版存的；判定已不採用）、czFirst＝考考自己一輪「第一次作答就答對」的格數／總格數（判定用）、
  //     qz＝練習題一輪答對率（每題只答一次，本來就是第一次答對率）。三個都取最佳（大）。
  const MM_F = ['cz', 'czFirst', 'qz'];
  // mp：倍數與公倍數（各題型練習最佳 %、考試最高分）；mx：乘法快算挑戰（acc 最佳 %、sp 最快平均秒數×10、ok 第一次達標時間）
  // mg：五下～六下數學（2026-11-06）'<單元>q'＝練習一輪最佳 %、'<單元>t'＝單元測驗最高分、'<冊>R'＝總複習最高分（key 用 MG_RE 擋，最多 25 單元×2＋3 冊）
  const MG_RE = /^g[56][ab](\d{1,2}[qt]|R)$/;
  // geo：🌍 地理（2026-11-08，geo/unit.html）'<單元>p1'～'p3'＝練習各組最佳 %、'<單元>t'＝單元測驗最高分（18 單元×4＝最多 72 個 key）
  const GEO_RE = /^(m[1-5]|t[1-6]|w[1-7])(p[1-3]|t)$|^w[1-7]o$/;   // w1o～w7o：世界篇開場漫畫看完（100；舊版裝置會丟掉，下次看完再記）
  const MP_K = ['circle', 'both', 'fill', 'lcm', 'word', 'lit', 'test', 'p1', 'p2'], FR_K = ['basic', 'bench', 'lcd', 'red', 'mix', 'test'], MX_K = ['nn', 'd21', 'd22t', 'd22', 'd31'];
  function normMx(e) {
    if (!e || typeof e !== 'object') return null; const acc = pct(e.acc); if (acc == null) return null;
    const o = { acc }, sp = num(e.sp, null), ok = ms(e.ok);
    if (sp != null && sp > 0) o.sp = Math.min(36000, Math.max(1, Math.round(sp)));
    if (ok) o.ok = ok;
    return o;
  }
  function normMmD(e) { if (!e || typeof e !== 'object') return null; const o = {}; MM_F.forEach(k => { const v = pct(e[k]); if (v != null) o[k] = v; }); return Object.keys(o).length ? o : null; }
  // n：單元做過幾次（kids-lock.js，2026-11-16，跟 fr 一樣不升版；舊版裝置的 normDone 會丟掉 n → 新版下次同步從本機補回）。
  //   大小預算只剩 ~1.8KB（smoke 最壞情況），所以一格一個字：{組:'字串'}，組＋位置由 kids-lock.js slot() 從單元 id 算（例 'z1' 第 4 格＝zh1-05）。
  //   一個字＝N_ABC 裡的值 v（0～61）：v＝3×解鎖次數＋這一輪做過幾次（0～2）。做一次 +1、家長解鎖跳到下一輪的 1 → 只會變大，合併＝每格取大（交換、結合、冪等）。
  const N_ABC = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', N_GRP = /^[a-z][a-zA-Z0-9]{0,3}$/, N_STR = /^[0-9a-zA-Z]{1,128}$/, N_MAXG = 100;
  function normN(x) { const d = obj(x), o = {}; Object.keys(d).filter(g => N_GRP.test(g)).sort().slice(0, N_MAXG).forEach(g => { const s = typeof d[g] === 'string' && N_STR.test(d[g]) ? d[g].replace(/0+$/, '') : ''; if (s) o[g] = s; }); return o; }
  function mergeN(a, b) {
    a = normN(a); b = normN(b); const o = {};
    Object.keys(Object.assign({}, a, b)).forEach(g => { const x = a[g] || '', y = b[g] || ''; let s = ''; for (let i = 0; i < Math.max(x.length, y.length); i++) s += N_ABC[Math.max(N_ABC.indexOf(x[i] || '0'), N_ABC.indexOf(y[i] || '0'))]; o[g] = s; });
    return normN(o);
  }
  function normDone(x) {
    const d = obj(x), once = v => ms(v) || null, n = normN(d.n);
    const o = { tb: dsec(d.tb, normTb), mm: dsec(d.mm, normMmD), bal: dsec(d.bal, once), sd: dsec(d.sd, pct, SD_K), gw: dsec(d.gw, pct, GW_K), ai: dsec(d.ai, once), mp: dsec(d.mp, pct, MP_K), mx: dsec(d.mx, normMx, MX_K), fr: dsec(d.fr, pct, FR_K), zh: dsec(d.zh, once), cy: dsec(d.cy, once), mg: dsec(d.mg, pct, MG_RE), geo: dsec(d.geo, pct, GEO_RE) };
    if (Object.keys(n).length) o.n = n;   // 沒有就不放（舊文件、舊測試的形狀不變）
    return o;
  }
  const maxOf = (a, b) => Math.max(a == null ? -Infinity : a, b == null ? -Infinity : b);
  function mergeDone(a, b) {
    a = normDone(a); b = normDone(b);
    const tb = mergeSection(a.tb, b.tb, (x, y) => { const n = x.at !== y.at ? (x.at > y.at ? x : y) : (x.last >= y.last ? x : y); return { best: Math.max(x.best, y.best), last: n.last, at: n.at }; });
    const mm = mergeSection(a.mm, b.mm, (x, y) => { const o = {}; MM_F.forEach(k => { if (x[k] != null || y[k] != null) o[k] = maxOf(x[k], y[k]); }); return o; });
    // 數字節（0 分也要留著：做過一輪＝有進度），兩邊都有才用 fn
    const nums = (x, y, fn) => { const o = {}; Object.keys(Object.assign({}, x, y)).sort().forEach(k => { o[k] = x[k] != null && y[k] != null ? fn(x[k], y[k]) : (x[k] != null ? x[k] : y[k]); }); return o; };
    const first = (x, y) => Math.min(x, y), best = (x, y) => Math.max(x, y);
    const lo = (x, y) => (x == null ? y : y == null ? x : Math.min(x, y));
    const mx = mergeSection(a.mx, b.mx, (x, y) => { const o = { acc: Math.max(x.acc, y.acc) }, sp = lo(x.sp, y.sp), ok = lo(x.ok, y.ok); if (sp != null) o.sp = sp; if (ok != null) o.ok = ok; return o; });
    return normDone({ tb, mm, bal: nums(a.bal, b.bal, first), sd: nums(a.sd, b.sd, best), gw: nums(a.gw, b.gw, best), ai: nums(a.ai, b.ai, first), mp: nums(a.mp, b.mp, best), mx, fr: nums(a.fr, b.fr, best), zh: nums(a.zh, b.zh, first), cy: nums(a.cy, b.cy, first), mg: nums(a.mg, b.mg, best), geo: nums(a.geo, b.geo, best), n: mergeN(a.n, b.n) });
  }

  // ---- dd：每日學習統計（kids_daily；格式見檔頭 v9）----
  const DD_DAYS = 90, DD_MAX = 3750, DD_CAP = 9999, DD_ID = /^[\w-]{1,32}$/, DD_ENT = /^(\d{6})((?:[a-z]\d+(?:,\d+)?)+)$/;
  const ddDay = t => new Date(+t + 8 * 3600e3).toISOString().slice(2, 10).replace(/-/g, '');   // 台北時間 YYMMDD
  // 展開成 {天:{裝置:{科:[題數,答錯數]}}}
  function ddOpen(x) {
    const o = {}, d = obj(x);
    Object.keys(d).forEach(dev => {
      if (!DD_ID.test(dev) || typeof d[dev] !== 'string') return;
      d[dev].split(';').forEach(e => {
        const m = DD_ENT.exec(e); if (!m) return;
        const c = ((o[m[1]] = o[m[1]] || {})[dev] = {});
        m[2].replace(/([a-z])(\d+)(?:,(\d+))?/g, (_, k, n, w) => { n = Math.min(+n, DD_CAP); c[k] = [n, Math.min(+w || 0, n)]; return ''; });
      });
    });
    return o;
  }
  const ddEnt = (day, c) => { const b = Object.keys(c).sort().filter(k => c[k][0] > 0).map(k => k + c[k][0] + (c[k][1] ? ',' + c[k][1] : '')).join(''); return b ? day + b : ''; };
  // 收回字串：砍 90 天以前的；由新到舊累計大小，放不下就停（只看比它新的天，合併順序不影響結果）
  function ddClose(o, now) {
    const cut = ddDay(now - (DD_DAYS - 1) * 864e5), keep = {}; let left = DD_MAX - 2;
    for (const day of Object.keys(o).filter(d => d >= cut).sort().reverse()) {
      const es = Object.keys(o[day]).sort().map(dev => [dev, ddEnt(day, o[day][dev])]).filter(e => e[1]);
      const size = es.reduce((n, e) => n + e[1].length + 1 + (keep[e[0]] ? 0 : e[0].length + 6), 0);
      if (size > left) break;
      left -= size; es.forEach(e => (keep[e[0]] = keep[e[0]] || []).push(e[1]));
    }
    const out = {}; Object.keys(keep).sort().forEach(dev => { out[dev] = keep[dev].reverse().join(';'); });
    return out;
  }
  const normDd = (x, now) => ddClose(ddOpen(x), now || Date.now());
  function mergeDd(a, b, now) {
    const o = ddOpen(a), y = ddOpen(b);
    Object.keys(y).forEach(day => {
      const D = o[day] = o[day] || {};
      Object.keys(y[day]).forEach(dev => {
        const c = D[dev] = D[dev] || {};
        Object.keys(y[day][dev]).forEach(k => { const p = c[k] || [0, 0], q = y[day][dev][k]; c[k] = [Math.max(p[0], q[0]), Math.max(p[1], q[1])]; });
      });
    });
    return ddClose(o, now || Date.now());
  }
  // 這台裝置記一題（時間 t）
  function ddAdd(x, dev, t, code, ok) {
    const o = ddOpen(x), day = ddDay(t), c = ((o[day] = o[day] || {})[dev] = o[day][dev] || {}), p = c[code] || [0, 0];
    c[code] = [Math.min(p[0] + 1, DD_CAP), Math.min(p[1] + (ok ? 0 : 1), DD_CAP)];
    return ddClose(o, t);
  }
  // 顯示用：各裝置加總 {天:{科:[n,ok]}}
  function ddSum(x) {
    const o = ddOpen(x), s = {};
    Object.keys(o).forEach(day => { const S = s[day] = {}; Object.keys(o[day]).forEach(dev => Object.keys(o[day][dev]).forEach(k => { const p = S[k] || [0, 0], q = o[day][dev][k]; S[k] = [p[0] + q[0], p[1] + q[0] - q[1]]; })); });
    return s;
  }

  // ---- dg：每日進度清單的目標（kids_daily_goal；改目標只影響生效日起，過去的判定不變）----
  // 2026-11-09 多 6 欄：句型,片語,乘法,異分母（0～99）,歷史,地理（0～9）（舊 4 欄照收）；一筆變長，只留最新 3 筆才放得進 DG_MAX_BYTES（預算不放寬）
  // 2026-11-24 再多第 11 欄：單字（0～99）；3 筆最長 133 B，還在 160 B 內
  const DG_KEEP = 3, DG_MAX_BYTES = 160, DG_VAL = /^\d{1,3},\d{1,3},\d{1,2},\d{1,2}(,\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d,\d(,\d{1,2})?)?$/;
  const dgSeq = v => +v.split(',')[3];
  const pickDg = (a, b) => { if (!a) return b; if (!b) return a; const x = dgSeq(a), y = dgSeq(b); return x !== y ? (x > y ? a : b) : (a >= b ? a : b); };
  function normDg(x) { const d = obj(x), o = {}; Object.keys(d).filter(k => /^\d{6}$/.test(k) && typeof d[k] === 'string' && DG_VAL.test(d[k])).sort().slice(-DG_KEEP).forEach(k => { o[k] = d[k]; }); return o; }
  function mergeDg(a, b) { a = normDg(a); b = normDg(b); const o = {}; Object.keys(Object.assign({}, a, b)).forEach(k => { o[k] = pickDg(a[k], b[k]); }); return normDg(o); }

  // ---- pg：只在本機頁面存的進度（2026-11-19，跟 dd 一樣不升版；格式見檔頭 pg 段）----
  // 三種壓縮寫法（全部是字串，群組之間逗號隔開、照群組名排序）：
  //   f 旗標：'群組=位元圖'，位元圖 base32（一個字 5 格，第 i 格＝第 i 個單元做過）；合併＝聯集
  //   v 數值：'群組=每格兩個字'，base36 的（值＋1），'00'＝沒有；合併＝每格取大。Z／I／W 開頭的群組一格是（最佳 %, 次數）一對：值＝次數×101＋最佳，兩個各自取大
  //   e 段考／單元測驗：'卷代碼＋8 個字;…'（見 exOpen）；最高取大、最近跟著小時較新的（一樣新取大）
  //   m 英檢模擬考：最新 PG_MOCK 筆 '級組.秒.聽對.聽題.讀對.讀題.聽分.讀分.過'；依（卷, 秒）聯集
  const B32 = '0123456789abcdefghijklmnopqrstuv', PG_GRP = /^[A-Za-z][A-Za-z0-9]{0,4}$/, PG_FSLOT = 320, PG_VSLOT = 200, PG_NGRP = 120, PG_EX = 80, PG_MOCK = 8, PG_PAIR = /^[ZIW]/, PG_NCAP = 11;
  const pgSplit = s => { const o = {}; (typeof s === 'string' ? s : '').split(',').forEach(x => { const i = x.indexOf('='), g = x.slice(0, i), v = x.slice(i + 1); if (i > 0 && PG_GRP.test(g) && v) o[g] = v; }); return o; };
  const pgJoin = o => Object.keys(o).filter(g => o[g]).sort().slice(0, PG_NGRP).map(g => g + '=' + o[g]).join(',');
  const bitsOf = s => { const o = []; String(s || '').slice(0, PG_FSLOT / 5).split('').forEach((c, i) => { const v = B32.indexOf(c); for (let b = 0; v > 0 && b < 5; b++) if (v >> b & 1) o.push(i * 5 + b); }); return o; };
  const bitStr = idx => { const a = []; idx.forEach(i => { if (i >= 0 && i < PG_FSLOT) { const k = Math.floor(i / 5); a[k] = (a[k] || 0) | (1 << (i % 5)); } }); let s = ''; for (let k = 0; k < a.length; k++) s += B32[a[k] || 0]; return s.replace(/0+$/, ''); };
  const cellsOf = s => { const o = []; String(s || '').slice(0, PG_VSLOT * 2).replace(/[^0-9a-z]/g, '0').replace(/(..)/g, (_, c) => { const v = parseInt(c, 36); o.push(v > 0 ? v - 1 : null); return ''; }); return o; };
  const cellStr = a => a.map(v => (v == null || !(v >= 0) ? '00' : (Math.min(1294, Math.floor(v)) + 1).toString(36).padStart(2, '0'))).join('').replace(/(00)+$/, '');
  const pairOf = v => (v == null ? null : [v % 101, Math.floor(v / 101)]);   // [最佳 %, 次數]
  const pairV = (best, n) => Math.max(0, Math.min(100, Math.round(+best || 0))) + 101 * Math.max(1, Math.min(PG_NCAP, Math.floor(+n || 0)));
  // 閃卡（F）、素養題組（L）是每個單元一組，「組名=」太多：同一科的單元收成一組（'Fu'、'Ln'），單元之間用 '.' 隔開（第 i 段＝第 i 單元）。
  //   文件裡只有收好的寫法；程式裡一律先拆開（unpack）成 'Fu1'、'Ln10' 再處理
  const PACK = /^([FL])([un])(\d{1,2})$/;
  function unpack(s) { const o = pgSplit(s); Object.keys(o).forEach(g => { if (!/^[FL][un]$/.test(g)) return; o[g].split('.').slice(0, 99).forEach((v, i) => { if (v && !o[g + (i + 1)]) o[g + (i + 1)] = v; }); delete o[g]; }); return o; }
  function pack(o) {
    const out = {}, seg = {};
    Object.keys(o).forEach(g => { const m = PACK.exec(g); if (!m) out[g] = o[g]; else if (o[g]) (seg[m[1] + m[2]] = seg[m[1] + m[2]] || [])[m[3] - 1] = o[g]; });
    Object.keys(seg).forEach(P => { out[P] = Array.from(seg[P], v => v || '').join('.').replace(/\.+$/, ''); });
    return pgJoin(out);
  }
  const normF = s => { const o = unpack(s); Object.keys(o).forEach(g => { o[g] = bitStr(bitsOf(o[g])); }); return pack(o); };
  const normV = s => { const o = unpack(s); Object.keys(o).forEach(g => { const c = cellsOf(o[g]); o[g] = cellStr(PG_PAIR.test(g) ? c.map(v => (v == null || v < 101 ? null : pairV(v % 101, v / 101))) : c); }); return pack(o); };
  const mergeF = (a, b) => { const x = unpack(normF(a)), y = unpack(normF(b)), o = {}; Object.keys(Object.assign({}, x, y)).forEach(g => { o[g] = bitStr(bitsOf(x[g]).concat(bitsOf(y[g]))); }); return pack(o); };
  const mergeV = (a, b) => {
    const x = unpack(normV(a)), y = unpack(normV(b)), o = {};
    Object.keys(Object.assign({}, x, y)).forEach(g => { const p = cellsOf(x[g]), q = cellsOf(y[g]), r = [];
      for (let i = 0; i < Math.max(p.length, q.length); i++) { const u = p[i], w = q[i]; r[i] = u == null ? w : w == null ? u : PG_PAIR.test(g) ? pairV(Math.max(u % 101, w % 101), Math.max(Math.floor(u / 101), Math.floor(w / 101))) : Math.max(u, w); }
      o[g] = cellStr(r); });
    return pack(o);
  };
  // e：{卷代碼:[最高, 最近, 小時]}。卷代碼＝單元 id（'u1'）；段考＝'*'＋第一個單元＋'~'＋幾個單元（'mock-u7-u8-u9'→'*u7~3'），單元不連續就照寫（'*u7-u9'）
  //    一筆＝卷代碼＋固定 8 個字：最高 2、最近 2、小時 4（都是 base36）
  const EX_CODE = /^([un]\d{1,2}|\*[un]\d{1,2}(~[2-4]|(-[un]\d{1,2}){1,3}))$/, EX_LOCAL = /^([un]\d{1,2}|mock-[un]\d{1,2}(-[un]\d{1,2}){1,3})$/;
  const sc = x => Math.max(0, Math.min(100, Math.round(num(x, 0))));
  const b36 = (v, w) => Math.max(0, Math.floor(+v || 0)).toString(36).padStart(w, '0').slice(-w);
  function exCode(id) { const m = /^mock-(.+)$/.exec(id); if (!m) return id; const us = m[1].split('-'), n = us.map(u => +u.slice(1)); return '*' + (us.every((u, i) => u.charAt(0) === us[0].charAt(0) && n[i] === n[0] + i) ? us[0] + '~' + us.length : us.join('-')); }
  function exFull(c) { if (c.charAt(0) !== '*') return c; const m = /^\*([un])(\d{1,2})~([2-4])$/.exec(c); return 'mock-' + (m ? Array.from({ length: +m[3] }, (_, i) => m[1] + (+m[2] + i)).join('-') : c.slice(1)); }
  function exOpen(s) { const o = {}; (typeof s === 'string' ? s : '').split(';').forEach(e => { const id = e.slice(0, -8), t = e.slice(-8); if (!EX_CODE.test(id) || !/^[0-9a-z]{8}$/.test(t)) return; o[id] = [sc(parseInt(t.slice(0, 2), 36)), sc(parseInt(t.slice(2, 4), 36)), parseInt(t.slice(4), 36)]; }); return o; }
  const exClose = o => Object.keys(o).sort().slice(0, PG_EX).map(id => id + b36(o[id][0], 2) + b36(o[id][1], 2) + b36(o[id][2], 4)).join(';');
  const normE = s => exClose(exOpen(s));
  function mergeE(a, b) { const x = exOpen(a), y = exOpen(b), o = {}; Object.keys(Object.assign({}, x, y)).forEach(id => { const p = x[id], q = y[id]; if (!p || !q) { o[id] = p || q; return; } const n = p[2] !== q[2] ? (p[2] > q[2] ? p : q) : (p[1] >= q[1] ? p : q); o[id] = [Math.max(p[0], q[0]), n[1], n[2]]; }); return exClose(o); }
  // m：[級組, 秒, 聽對, 聽題, 讀對, 讀題, 聽分, 讀分, 過]；最新 PG_MOCK 筆
  const GM_ID = /^[eia]\d\d$/, i3 = x => Math.max(0, Math.min(999, Math.floor(num(x, 0))));
  function mockOpen(s) { const o = {}; (typeof s === 'string' ? s : '').split(';').forEach(e => { const p = e.split('.'); if (p.length !== 9 || !GM_ID.test(p[0])) return; const t = parseInt(p[1], 36); if (!(t > 0)) return; o[p[0] + '.' + t] = [p[0], t].concat(p.slice(2, 8).map(i3), [p[8] === '1' ? 1 : 0]); }); return o; }
  const mockClose = o => Object.keys(o).map(k => o[k]).sort((a, b) => (a[1] - b[1]) || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)).slice(-PG_MOCK).map(r => [r[0], r[1].toString(36)].concat(r.slice(2)).join('.')).join(';');
  const normMock = s => mockClose(mockOpen(s));
  const mergeMock = (a, b) => mockClose(Object.assign(mockOpen(a), mockOpen(b)));   // 同一筆（卷＋秒）兩邊內容一樣（同一次考試），誰蓋誰都一樣
  function normPg(x) { const d = obj(x), o = {}; [['f', normF], ['v', normV], ['e', normE], ['m', normMock]].forEach(([k, fn]) => { const s = fn(d[k]); if (s) o[k] = s; }); return o; }
  function mergePg(a, b) { a = obj(a); b = obj(b); return normPg({ f: mergeF(a.f, b.f), v: mergeV(a.v, b.v), e: mergeE(a.e, b.e), m: mergeMock(a.m, b.m) }); }

  // ---- 本機 key ↔ pg（sync.js readLocal／writeLocal 用；L＝{comic, anim, writing, gept, exam, lit, cards, wordLv, zhRead, zhIdiom, geoQ, mg, er} 各 key 的原始物件；er＝kids_en_reading）----
  const COMIC_EPS = 7 * 6;   // 世界史漫畫 7 冊 × 6 話（comics/catalog.js；test 會對）。沒載入目錄的頁面照這個順序找「下一話」
  const comicSlot = id => { const m = /^v([1-9])e([1-9])$/.exec(id); return m ? (m[1] - 1) * 9 + (m[2] - 1) : -1; };
  const comicId = i => 'v' + (Math.floor(i / 9) + 1) + 'e' + (i % 9 + 1);
  const ld2 = n => String(n).padStart(2, '0');
  const SUBJ_OF = { u: 'social', n: 'science' };
  // 地理每一題答對過幾次（kids_geo_q＝{題目 id: 1|2}，2026-11-21 學過 2 次就不算）→ f 旗標兩層：'Q<區>1'＝答對過 ≥1 次、'Q<區>2'＝≥2 次（合併＝聯集，只會變多）。
  //   區＝m／t／w；第 i 格＝(單元號−1)×40＋題號（練習 p01～p30＝0～29、測驗 t01～t10＝30～39）。720 題全滿約 320 B（smoke 最壞情況有算）
  const geoSlot = id => { const m = /^([mtw])([1-7])-([pt])(\d\d)$/.exec(id || ''), n = m ? +m[4] : 0; return m && n >= 1 && n <= (m[3] === 'p' ? 30 : 10) ? [m[1], (m[2] - 1) * 40 + (m[3] === 'p' ? n - 1 : 29 + n)] : null; };
  const geoId = (r, i) => r + (Math.floor(i / 40) + 1) + '-' + (i % 40 < 30 ? 'p' + ld2(i % 40 + 1) : 't' + ld2(i % 40 - 29));
  // 線對稱（五上單元七 g5a7，2026-11-24）每一題答對過幾次（kids_mg.c＝{題目 id: 1|2}，學過 2 次就不算）→ 同地理：f 旗標兩層 'Ms1'／'Ms2'（合併＝聯集＝每題取大）。
  //   第 i 格＝題型序號×8＋題號（g5a7-mid0…g5a7-kite23；MG_K 只能往後加）；46 題全滿 34 B（smoke 最壞情況有算）。kids_mg.c 裡別的單元只留本機
  const MG_K = ['mid', 'pair', 'ang', 'angmc', 'half', 'kite', 'peri', 'kite2'];
  const mgSlot = id => { const m = /^g5a7-([a-z]+2?)([0-7])$/.exec(id || ''), k = m ? MG_K.indexOf(m[1]) : -1; return k >= 0 ? k * 8 + +m[2] : -1; };
  const mgId = i => (MG_K[i >> 3] ? 'g5a7-' + MG_K[i >> 3] + (i & 7) : null);
  // 'social:u1-L1' 這種 key：科目要跟單元字頭對得上
  const mmKey = (k, re) => { const m = /^(social|science):([un])(\d{1,2})-(.+)$/.exec(k); if (!m || SUBJ_OF[m[2]] !== m[1]) return null; const r = re.exec(m[4]); return r ? { u: m[2] + m[3], n: +r[1] } : null; };
  function pgFromLocal(L) {
    L = obj(L); const F = {}, V = {}, setF = (g, i) => { if (i >= 0 && PG_GRP.test(g)) (F[g] = F[g] || []).push(i); }, setV = (g, i, v) => { if (i >= 0 && i < PG_VSLOT && PG_GRP.test(g)) (V[g] = V[g] || [])[i] = v; };
    Object.keys(obj(obj(L.comic).seen)).forEach(id => setF('C', comicSlot(id)));
    Object.keys(obj(obj(L.anim).seen)).forEach(c => { if (/^[A-Z]$/.test(c) && L.anim.seen[c]) setF('A', c.charCodeAt(0) - 65); });
    const wr = obj(L.writing);
    Object.keys(obj(wr.t)).forEach(id => { const m = /^t(\d{2,3})$/.exec(id); if (m && obj(wr.t[id]).done) setF('T', m[1] - 1); });
    Object.keys(obj(wr.l)).forEach(id => { const m = /^L(\d\d)$/.exec(id), r = obj(wr.l[id]); if (!m) return; if (r.done) setF('K', m[1] - 1); if (+r.n > 0) setV('W', m[1] - 1, pairV(r.best, r.n)); });
    const gp = obj(L.gept);
    Object.keys(obj(gp.best)).forEach(id => { const m = /^([eia])-([LR]\d)-(\d\d)$/.exec(id), p = num(obj(gp.best[id]).p, null); if (m && p != null) setV('G' + m[1] + m[2], m[3] - 1, sc(p)); });
    Object.keys(obj(gp.task)).forEach(id => { const m = /^([eia])-([SW]\d)-(\d\d)$/.exec(id); if (m && gp.task[id]) setF('S' + m[1] + m[2], m[3] - 1); });
    const mocks = {}; (Array.isArray(gp.mock) ? gp.mock : []).forEach(r => { const m = /^([eia])-M-(\d\d)$/.exec(r && r.id), t = Math.floor(num(r && r.t, 0) / 1000); if (m && t > 0) mocks[m[1] + m[2] + '.' + t] = [m[1] + m[2], t, r.lc, r.ln, r.rc, r.rn, r.L, r.R].map((v, i) => (i < 2 ? v : i3(v))).concat([r.pass ? 1 : 0]); });
    const E = {}, ex = obj(L.exam);
    Object.keys(ex).forEach(k => { const m = /^(social|science):(.+)$/.exec(k), r = obj(ex[k]); if (!m || !EX_LOCAL.test(m[2]) || SUBJ_OF[m[2].replace(/^mock-/, '').charAt(0)] !== m[1] || !(+r.n > 0)) return; E[exCode(m[2])] = [sc(r.best), sc(r.last), Math.floor(num(r.at, 0) / 3600e3)]; });
    Object.keys(obj(L.lit)).forEach(k => { const x = mmKey(k, /^L(\d)$/), r = obj(L.lit[k]); if (x && +r.n > 0) setV('L' + x.u, x.n - 1, sc(r.best)); });
    Object.keys(obj(L.cards)).forEach(k => { const x = mmKey(k, /^(\d{2})$/); if (x && L.cards[k]) setF('F' + x.u, x.n - 1); });
    const wl = obj(L.wordLv); Object.keys(wl).forEach(u => { if (/^[a-z]{2,4}$/.test(u)) [1, 2, 3].forEach(d => { const n = Math.floor(num(obj(wl[u])[d], 0)); if (n > 0) setV('V' + u, d - 1, Math.min(99, n)); }); });
    const zp = (g, i, r) => { r = obj(r); if (+r.n > 0) setV(g, i, pairV(r.best, r.n)); };
    Object.keys(obj(L.zhRead)).forEach(id => { const m = /^zh([1-4])-(\d\d)$/.exec(id); if (m) zp('Z' + m[1], m[2] - 1, L.zhRead[id]); });
    Object.keys(obj(L.zhIdiom)).forEach(id => { let m; if ((m = /^cy(\d{3})$/.exec(id))) zp('I', m[1] - 1, L.zhIdiom[id]); else if ((m = /^cy([ru])(\d\d)$/.exec(id))) zp('I' + m[1], m[2] - 1, L.zhIdiom[id]); else if (id === 'cyall') zp('Ia', 0, L.zhIdiom[id]); });
    Object.keys(obj(L.geoQ)).forEach(id => { const s = geoSlot(id), n = Math.floor(num(L.geoQ[id], 0)); if (s && n >= 1) setF('Q' + s[0] + '1', s[1]); if (s && n >= 2) setF('Q' + s[0] + '2', s[1]); });
    { const c = obj(obj(L.mg).c); Object.keys(c).forEach(id => { const s = mgSlot(id), n = Math.floor(num(c[id], 0)); if (n >= 1) setF('Ms1', s); if (n >= 2) setF('Ms2', s); }); }
    // 英文閱讀（2026-11-24）：不能跳篇 → 只同步「照順序完成到第幾篇」p 一個整數＝v 群組 'R' 第 0 格（合併每格取大），約 5 B（smoke 最壞情況有算）。每篇次數、鎖、每題 ok 只留本機
    { const p = Math.floor(num(obj(L.er).p, 0)); if (p > 0) setV('R', 0, Math.min(999, p)); }
    const f = {}, v = {}; Object.keys(F).forEach(g => { f[g] = bitStr(F[g]); }); Object.keys(V).forEach(g => { v[g] = cellStr(Array.from(V[g])); });
    return normPg({ f: pgJoin(f), v: pgJoin(v), e: exClose(E), m: mockClose(mocks) });
  }
  // 合併結果 → 本機：只會補上、變大，不刪本機任何東西（作文內容、開放題、時間、_seen 都留著）。回 {key 名: 新物件}（沒變的不回）
  function pgApply(pg, L) {
    pg = normPg(pg); L = obj(L); const out = {}, cl = x => JSON.parse(JSON.stringify(obj(x)));
    const F = {}, V = {}; Object.entries(unpack(pg.f)).forEach(([g, s]) => { F[g] = bitsOf(s); }); Object.entries(unpack(pg.v)).forEach(([g, s]) => { V[g] = cellsOf(s); });
    // 沒東西補進去的空節就不建（本機原本沒有 task:{} 就不要多寫一個）
    const up = (r, best, n) => { if (!(num(r.best, -1) >= best)) r.best = best; if (n != null && !(+r.n >= n)) r.n = n; return r; };   // 只往上補（本機已經比較大就不動）
    const put = (k, before, after) => { Object.keys(after).forEach(f => { const v = after[f]; if (v && typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length && !(f in before)) delete after[f]; }); if (canon(before) !== canon(after)) out[k] = after; };
    // 漫畫：看過的話；「下一話」被別台看掉了就往後找（目錄順序＝v1e1…v7e6）
    { const c = cl(L.comic), seen = obj(c.seen); c.seen = seen; (F.C || []).forEach(i => { const id = comicId(i); if (!seen[id]) seen[id] = 1; });
      if (Object.keys(seen).length && (c.next == null || seen[c.next])) { let nx = ''; for (let i = 0; i < COMIC_EPS; i++) { const id = comicId(Math.floor(i / 6) * 9 + i % 6); if (!seen[id]) { nx = id; break; } } c.next = nx; }
      put('comic', obj(L.comic), c); }
    { const a = cl(L.anim); a.seen = obj(a.seen); (F.A || []).forEach(i => { const ch = String.fromCharCode(65 + i); if (i < 26 && !a.seen[ch]) a.seen[ch] = 1; }); put('anim', obj(L.anim), a); }
    { const w = cl(L.writing); w.t = obj(w.t); w.l = obj(w.l);
      (F.T || []).forEach(i => { const id = 't' + ld2(i + 1); if (!obj(w.t[id]).done) w.t[id] = Object.assign(obj(w.t[id]), { done: 1 }); });
      (F.K || []).forEach(i => { const id = 'L' + ld2(i + 1); if (i < 99 && !obj(w.l[id]).done) w.l[id] = Object.assign(obj(w.l[id]), { done: 1 }); });
      (V.W || []).forEach((v, i) => { const p = pairOf(v), id = 'L' + ld2(i + 1); if (!p || i > 98) return; w.l[id] = up(obj(w.l[id]), p[0], p[1]); });
      put('writing', obj(L.writing), w); }
    { const g = cl(L.gept); g.best = obj(g.best); g.task = obj(g.task);
      Object.keys(V).forEach(k => { const m = /^G([eia])([LR]\d)$/.exec(k); if (m) V[k].forEach((v, i) => { const id = m[1] + '-' + m[2] + '-' + ld2(i + 1); if (v != null && i < 99 && !(num(obj(g.best[id]).p, -1) >= v)) g.best[id] = { p: v }; }); });
      Object.keys(F).forEach(k => { const m = /^S([eia])([SW]\d)$/.exec(k); if (m) F[k].forEach(i => { const id = m[1] + '-' + m[2] + '-' + ld2(i + 1); if (i < 99 && !g.task[id]) g.task[id] = { t: 0 }; }); });
      const have = new Set((Array.isArray(g.mock) ? g.mock : []).map(r => r && r.id + '.' + Math.floor(num(r.t, 0) / 1000)));
      const add = Object.values(mockOpen(pg.m)).filter(r => !have.has(r[0].charAt(0) + '-M-' + r[0].slice(1) + '.' + r[1])).map(r => ({ id: r[0].charAt(0) + '-M-' + r[0].slice(1), t: r[1] * 1000, lc: r[2], ln: r[3], rc: r[4], rn: r[5], L: r[6], R: r[7], pass: !!r[8] }));
      if (add.length) g.mock = (Array.isArray(g.mock) ? g.mock : []).concat(add).sort((a, b) => num(a && a.t, 0) - num(b && b.t, 0)).slice(-60);
      put('gept', obj(L.gept), g); }
    { const x = cl(L.exam), E = exOpen(pg.e);
      Object.keys(E).forEach(id0 => { const id = exFull(id0), k = SUBJ_OF[id.replace(/^mock-/, '').charAt(0)] + ':' + id, s = E[id0], r = obj(x[k]), lh = Math.floor(num(r.at, 0) / 3600e3);
        if (!(+r.n > 0)) { x[k] = { best: s[0], last: s[1], n: 1, at: s[2] * 3600e3 }; return; }
        const o = Object.assign({}, r, { best: Math.max(sc(r.best), s[0]) });
        if (s[2] > lh) Object.assign(o, { last: s[1], at: s[2] * 3600e3 }); else if (s[2] === lh && s[1] > sc(r.last)) o.last = s[1];
        x[k] = o; });
      if (Object.keys(E).length) put('exam', obj(L.exam), x); }
    { const x = cl(L.lit); Object.keys(V).forEach(k => { const m = /^L([un]\d{1,2})$/.exec(k); if (m) V[k].forEach((v, i) => { if (v == null || i > 8) return; const id = SUBJ_OF[m[1].charAt(0)] + ':' + m[1] + '-L' + (i + 1), r = obj(x[id]); x[id] = +r.n > 0 ? up(r, v) : Object.assign(r, { best: v, n: 1, at: 0 }); }); });
      put('lit', obj(L.lit), x); }
    { const x = cl(L.cards); Object.keys(F).forEach(k => { const m = /^F([un]\d{1,2})$/.exec(k); if (m) F[k].forEach(i => { const id = SUBJ_OF[m[1].charAt(0)] + ':' + m[1] + '-' + ld2(i + 1); if (i < 99 && !x[id]) x[id] = 1; }); }); put('cards', obj(L.cards), x); }
    { const x = cl(L.wordLv); Object.keys(V).forEach(k => { const m = /^V([a-z]{2,4})$/.exec(k); if (m) V[k].slice(0, 3).forEach((v, i) => { if (v == null) return; const c = x[m[1]] = obj(x[m[1]]); if (!(num(c[i + 1], 0) >= v)) c[i + 1] = v; }); }); put('wordLv', obj(L.wordLv), x); }
    const zApply = (key, grpId) => { const x = cl(L[key]); Object.keys(V).forEach(k => { const toId = grpId(k); if (toId) V[k].forEach((v, i) => { const p = pairOf(v), id = toId(i); if (!p || !id) return; const r = x[id]; if (r && typeof r === 'object') up(r, p[0], p[1]); else x[id] = { best: p[0], n: p[1], at: 0 }; }); }); put(key, obj(L[key]), x); };
    zApply('zhRead', k => { const m = /^Z([1-4])$/.exec(k); return m && (i => 'zh' + m[1] + '-' + ld2(i + 1)); });
    zApply('zhIdiom', k => (k === 'I' ? i => 'cy' + String(i + 1).padStart(3, '0') : /^I[ru]$/.test(k) ? i => 'cy' + k.charAt(1) + ld2(i + 1) : k === 'Ia' ? i => (i ? null : 'cyall') : null));
    { const x = cl(L.geoQ); Object.keys(F).forEach(k => { const m = /^Q([mtw])([12])$/.exec(k); if (m) F[k].forEach(i => { const id = geoId(m[1], i); if (i < 280 && !(num(x[id], 0) >= +m[2])) x[id] = +m[2]; }); }); put('geoQ', obj(L.geoQ), x); }
    { const x = cl(L.mg); x.c = obj(x.c); [1, 2].forEach(n => (F['Ms' + n] || []).forEach(i => { const id = mgId(i); if (id && !(num(x.c[id], 0) >= n)) x.c[id] = n; })); put('mg', obj(L.mg), x); }
    { const p = (V.R || [])[0]; if (p > 0) { const x = cl(L.er); if (!(num(x.p, 0) >= p)) x.p = p; put('er', obj(L.er), x); } }   // 只補 p；閱讀頁打開時 EnReading.syncIn 再把前 p 篇補成完成
    return out;
  }

  // ---- ke：英文 agg／learned 上傳時的壓縮寫法（2026-11-23，格式見檔頭；不升版：舊版裝置丟掉 ke、新版從本機補回）----
  // 程式裡（normalize／merge／compact 的結果、本機 ke_agg／ke_learned）照舊是完整物件；只有 PUT 出去的文件（packDoc）是壓縮的。
  const KE_ID = /^[-0-9a-z]+(:[-0-9a-z]+)+$/, KE_LS = /^\d{1,4}\/\d{1,4}$/, KE_ST = '.+*', KE_OLD_MS = 14 * 864e5, KE_TMAX = 8.64e15;
  // 常見的題型尾巴換成一個大寫字（只能往後加，不能改順序）
  const KE_TOK = ['type', 'speak', 'listen', 'zh2en', 'en2zh', 'extype', 'spell', 'gap1', 'gap2', 'reorder', 'choose', 'fill', 'filltype', 'dict', 'meaning', 'word'];
  const keOk = k => k.length <= 200 && KE_ID.test(k);
  // 前綴共用：跟上一筆一樣的前幾個字只寫長度（一個 base36 字，最多 35）
  const pre = (k, prev) => { let p = 0; while (p < 35 && p < k.length && k[p] === prev[p]) p++; return p; };
  // LZW（字串 → [0-9a-zA-Z_-]，可以直接放進 JSON）：'原長度36進位.內容'。第 i 個碼用 bitlen(字表初始大小＋i) 位元，編解碼兩邊算法一樣
  const Z_IN = '-0123456789:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ=,.+*~/', Z_OUT = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_', Z_MAX = 4e6;
  const zMemo = new Map(), memo = (k, f) => { if (zMemo.has(k)) return zMemo.get(k); const v = f(); if (zMemo.size > 8) zMemo.clear(); zMemo.set(k, v); return v; };
  function zip(s) {
    if (!s) return '';
    return memo('z' + s, () => {
      const d = new Map(); for (let i = 0; i < Z_IN.length; i++) d.set(Z_IN[i], i);
      let n = Z_IN.length, i = 0, w = '', out = '', acc = 0, nb = 0;
      const put = c => { for (let b = 0, wd = 32 - Math.clz32(Z_IN.length + i++); b < wd; b++) { acc |= (c >> b & 1) << nb; if (++nb === 6) { out += Z_OUT[acc]; acc = nb = 0; } } };
      for (const ch of s) { if (!d.has(ch)) throw new Error('zip: bad char ' + ch); const wc = w + ch; if (d.has(wc)) w = wc; else { put(d.get(w)); d.set(wc, n++); w = ch; } }
      put(d.get(w)); if (nb) out += Z_OUT[acc];
      return s.length.toString(36) + '.' + out;
    });
  }
  // 解不開（壞掉、被截斷）回 ''＝當作沒有（不報錯）
  function unzip(z) {
    const m = /^([0-9a-z]{1,6})\.([0-9a-zA-Z_-]+)$/.exec(typeof z === 'string' ? z : ''); if (!m) return '';
    return memo('u' + z, () => {
      const len = parseInt(m[1], 36), src = m[2], d = Z_IN.split(''); if (!(len > 0 && len <= Z_MAX)) return '';
      let pos = 0, acc = 0, nb = 0, i = 0;
      const get = () => { let c = 0; for (let b = 0, wd = 32 - Math.clz32(Z_IN.length + i++); b < wd; b++) { if (!nb) { if (pos >= src.length) return -1; acc = Z_OUT.indexOf(src[pos++]); nb = 6; } c |= (acc & 1) << b; acc >>= 1; nb--; } return c; };
      let c = get(); if (c < 0 || c >= d.length) return '';
      let w = d[c], out = w;
      while (out.length < len) {
        c = get(); const e = c >= 0 && c < d.length ? d[c] : c === d.length ? w + w[0] : null; if (e == null) return '';
        out += e; d.push(w + e[0]); w = e;
      }
      return out.length === len && pos === src.length ? out : '';
    });
  }
  // agg：每題只上傳「答對過幾次（封頂 2）」：'.'＝答過、沒答對；'+'＝答對 1 次；'*'＝2 次以上（學過 2 次就不算、解鎖都只看這個）。
  //   題號照「最後一個 : 之前」分組（例 w:apple），組名前綴共用；組內每題＝尾巴（KE_TOK 的大寫字或原字）＋狀態字。
  //   答題次數 n、確切的答對次數 k、第一次答對的時間 fc 只留在本機 ke_agg（各主題正確率是那台自己的數字）。
  const keSt = g => Math.min(2, Math.max(int0(g && g.k), g && g.fc != null ? 1 : 0));
  function aggPack(agg) {
    const grp = new Map(), rest = {};
    Object.keys(agg).forEach(q => { if (!keOk(q)) { rest[q] = agg[q]; return; } const i = q.lastIndexOf(':'), G = q.slice(0, i); (grp.get(G) || grp.set(G, []).get(G)).push(q.slice(i + 1)); });
    let prev = ''; const out = [];
    [...grp.keys()].sort().forEach(G => {
      const p = pre(G, prev); prev = G;
      out.push(p.toString(36) + G.slice(p) + '=' + grp.get(G).sort().map(l => { const t = KE_TOK.indexOf(l); return (t >= 0 ? String.fromCharCode(65 + t) : l) + KE_ST[keSt(agg[G + ':' + l])]; }).join(''));
    });
    return { s: out.join(','), rest };
  }
  // 還原成 {n,k,fc}：fc 只是「答對過」的記號，用 cut（壓進 agg 的紀錄都 ≤ cut；跟本機合併取小，本機真的時間會留著）
  function aggUnpack(s, fc) {
    const o = {}; let prev = '';
    (s ? s.split(',') : []).forEach(r => {
      const e = r.indexOf('='); if (e < 1) return;
      const G = prev.slice(0, parseInt(r[0], 36) || 0) + r.slice(1, e); prev = G;
      r.slice(e + 1).replace(/([A-P]|[-0-9a-z]+)([.+*])/g, (_, l, st) => {
        const q = G + ':' + (/^[A-P]$/.test(l) ? KE_TOK[l.charCodeAt(0) - 65] : l), c = KE_ST.indexOf(st);
        if (keOk(q)) o[q] = c ? { n: c, k: c, fc } : { n: 1, k: 0 };
        return '';
      });
    });
    return o;
  }
  // learned：'前綴長度＋項目=a<學會時間 ms 36進位>[~分數]' 或 '=r<取消時間>'，逗號隔開。時間留到毫秒（stamp 的 +1 毫秒才比得出新舊）。
  //   只壓「還原後一模一樣」的（標準 ISO 時間、分數 n/m、沒有別的欄位）；其他照舊放在 learned 物件裡
  const kIso = t => new Date(t).toISOString();
  function lOne(v) {
    if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
    const ks = Object.keys(v).sort().join(), t = Date.parse(ks === 'removedAt' ? v.removedAt : v.at);
    if (!(t > 0 && t < KE_TMAX) || kIso(t) !== (ks === 'removedAt' ? v.removedAt : v.at)) return null;
    if (ks === 'removedAt') return 'r' + t.toString(36);
    if (ks === 'at') return 'a' + t.toString(36);
    return ks === 'at,score' && typeof v.score === 'string' && KE_LS.test(v.score) ? 'a' + t.toString(36) + '~' + v.score : null;
  }
  function lPack(L) {
    const rest = {}, out = []; let prev = '';
    Object.keys(L).sort().forEach(k => { const s = keOk(k) ? lOne(L[k]) : null; if (s == null) { rest[k] = L[k]; return; } const p = pre(k, prev); prev = k; out.push(p.toString(36) + k.slice(p) + '=' + s); });
    return { s: out.join(','), rest };
  }
  function lUnpack(s) {
    const o = {}; let prev = '';
    (s ? s.split(',') : []).forEach(r => {
      const e = r.indexOf('='); if (e < 1) return;
      const k = prev.slice(0, parseInt(r[0], 36) || 0) + r.slice(1, e); prev = k;
      const m = /^([ar])([0-9a-z]{1,11})(?:~(\d{1,4}\/\d{1,4}))?$/.exec(r.slice(e + 1)), t = m ? parseInt(m[2], 36) : 0;
      if (!m || !(t > 0 && t < KE_TMAX) || !keOk(k)) return;
      o[k] = m[1] === 'r' ? { removedAt: kIso(t) } : m[3] ? { at: kIso(t), score: m[3] } : { at: kIso(t) };
    });
    return o;
  }
  // 英文錯題墓碑最多留 MK_DEL（300）筆最新的（比照其他科；2026-11-23 以前沒有上限）
  function capDead(m) {
    const dead = Object.keys(m).filter(k => m[k] && m[k].d), ev = k => +evM(m[k]) || 0;
    if (dead.length > MK_DEL) dead.sort((a, b) => (ev(b) - ev(a)) || (a < b ? -1 : 1)).slice(MK_DEL).forEach(k => { delete m[k]; });
    return m;
  }
  // 上傳用的文件：agg、learned 壓進 ke。remote＝伺服器上那份（原樣）：
  //   舊版裝置寫過（有 agg／learned、沒有 ke）→ ke.o＝現在。KE_OLD_MS（14 天）內舊寫法的 agg／learned 也整份寫一份：
  //   舊版那台看得到全部（學會、學過 2 次都一致），也不會因為「本機有、文件沒有」每次都 PUT、跟新版來回蓋。
  //   兩份加起來超過 MAX_BYTES 就只寫壓縮的（舊版那台只看得到自己的；它 PUT 時丟掉 ke，新版下次同步補回）。14 天沒再看到舊版就不寫舊寫法了。
  function packDoc(d, remote, now) {
    const r = obj(remote), ro = num(obj(r.ke).o, 0);
    const seen = Math.max(ro <= now + 864e5 ? ro : 0, !r.ke && (Object.keys(obj(r.agg)).length || Object.keys(obj(r.learned)).length) ? now : 0);
    const A = aggPack(obj(d.agg)), L = lPack(obj(d.learned)), ke = {};
    if (A.s) ke.a = zip(A.s); if (L.s) ke.l = zip(L.s);
    const out = Object.assign({}, d, { agg: A.rest, learned: L.rest, ke });
    if (!(seen > 0 && now - seen < KE_OLD_MS)) return out;
    ke.o = seen;
    const both = Object.assign({}, out, { agg: d.agg, learned: d.learned });
    return bytes(both) <= MAX_BYTES ? both : out;
  }

  // 整理成 v7：補 r、去重、排序；t ≤ cut 的舊紀錄只保留「答對過」到 agg；新欄位缺了就是空的（讀舊文件不會壞）
  // 2026-11-23：壓縮的 ke（agg、learned）解開併回完整物件；結果裡沒有 ke（上傳前才 packDoc）
  function normalize(doc) {
    const d = obj(doc), cut = +d.cut || 0, ke = obj(d.ke), agg = mergeAgg(obj(d.agg), aggUnpack(unzip(ke.a), cut > 0 ? cut : KE_TMAX)), seen = new Map();
    (Array.isArray(d.log) ? d.log : []).forEach(e0 => {
      if (!e0 || !e0.id || !isFinite(+e0.t)) return;
      const e = e0.r ? e0 : Object.assign({}, e0, { r: rid(e0) });
      if (e.t <= cut) { addFc(agg, e); return; }
      const p = seen.get(e.r); if (!p || canon(e) > canon(p)) seen.set(e.r, e);
    });
    const o = { v: VERSION, cut, log: [...seen.values()].sort(cmpLog), agg, learned: mergeMap(obj(d.learned), lUnpack(unzip(ke.l)), evL), mistakes: capDead(mergeMap(obj(d.mistakes), {}, evM)),
      mm: section(d.mm, normProg), mmBlanks: section(d.mmBlanks, normBl), eq: normEq(d.eq), scratch: normScr(d.scratch), ctr: normCtr(d.ctr), mk: normMk(d.mk), done: normDone(d.done), dd: normDd(d.dd), dg: normDg(d.dg) };
    const pg = normPg(d.pg); if (Object.keys(pg).length) o.pg = pg;   // 沒有就不放（舊文件、舊測試的形狀不變）
    return o;
  }
  function merge(a, b) {
    a = normalize(a); b = normalize(b);
    const cut = Math.max(a.cut, b.cut);
    return normalize({ cut, log: a.log.concat(b.log), agg: mergeAgg(a.agg, b.agg), learned: mergeMap(a.learned, b.learned, evL), mistakes: mergeMap(a.mistakes, b.mistakes, evM),
      mm: mergeSection(a.mm, b.mm, mergeProg), mmBlanks: mergeSection(a.mmBlanks, b.mmBlanks, mergeBl), eq: mergeEq(a.eq, b.eq),
      scratch: mergeSection(a.scratch, b.scratch, earliest), ctr: mergeSection(a.ctr, b.ctr, mergeCtr), mk: mergeMk(a.mk, b.mk), done: mergeDone(a.done, b.done), dd: mergeDd(a.dd, b.dd), dg: mergeDg(a.dg, b.dg), pg: mergePg(a.pg, b.pg) });
  }
  // 太大就把最舊的 1/4 壓進 agg（保留每題第一次答對的時間），重複到夠小（2026-11-23 起量的是上傳的樣子 packDoc）
  function compact(doc, maxBytes) {
    let d = normalize(doc); const lim = maxBytes || MAX_BYTES;
    while (d.log.length > 50 && bytes(d) > lim && bytes(packDoc(d, null, 0)) > lim) {   // 完整物件放得下，壓縮的一定也放得下：先比便宜的
      const cutT = d.log[Math.ceil(d.log.length / 4) - 1].t, agg = JSON.parse(JSON.stringify(d.agg));
      d.log.forEach(e => { if (e.t > cutT) return; const g = agg[e.id] || (agg[e.id] = { n: 0, k: 0 }); g.n++; if (e.ok) { g.k++; if (g.fc == null || e.t < g.fc) g.fc = e.t; } });
      d = normalize(Object.assign({}, d, { cut: Math.max(d.cut, cutT), agg }));
    }
    return d;
  }
  // 答對過的題號：紀錄裡 ok 的＋agg 有 fc 的（解鎖狀態從這裡算）
  function correctIds(doc) { const d = normalize(doc), s = new Set(); d.log.forEach(e => { if (e.ok) s.add(e.id); }); Object.keys(d.agg).forEach(q => { if (d.agg[q].fc != null) s.add(q); }); return s; }

  // 同步一次：GET → 合併 → 本機有變就寫回 → 跟遠端不同才 PUT（If-Match；被別台搶先就重來）
  // io = {get(code) → {doc,etag,notModified?}|null, put(code,doc,etag) → {conflict?}, readLocal() → doc, writeLocal(doc)}
  // opts（2026-10-19 自動同步）：
  //   tries：最多試幾次（預設 4＝第一次＋衝突後最多重試 3 次）
  //   lazy：第一次 GET 回「伺服器沒變」（notModified）就直接結束，不合併（輪詢用；本機沒有待上傳的變動才可以用）
  //   cached：{doc,etag} 上次跟伺服器對到的版本。第一次不 GET，直接拿它合併後 PUT（If-Match 它的 etag）；被別台改過（412）才 GET 重來
  async function syncOnce(io, code, opts) {
    opts = opts || {};
    const tries = opts.tries || 4; let puts = 0, changedLocal = false, pre = opts.cached && opts.cached.doc ? opts.cached : null;
    for (let i = 0; i < tries; i++) {
      const remote = pre || await io.get(code); pre = null;
      if (!remote) return { ok: false, notFound: true, puts, changedLocal };
      if (opts.lazy && i === 0 && remote.notModified) return { ok: true, notModified: true, puts, changedLocal };
      const rdoc = normalize(remote.doc), merged = compact(merge(io.readLocal(), rdoc));
      // 寫回本機前再跟「現在的本機」合一次，期間新增的作答不會被蓋掉
      const fresh = compact(merge(io.readLocal(), merged));
      if (canon(fresh) !== canon(normalize(io.readLocal()))) { io.writeLocal(fresh); changedLocal = true; }
      // 比「上傳的樣子」：agg 在文件裡只有封頂的次數，本機比較準的數字不算新東西（不然每次都 PUT）
      const now = opts.now || Date.now(), out = packDoc(merged, remote.doc, now);
      if (canon(out) === canon(packDoc(rdoc, remote.doc, now))) return { ok: true, puts, changedLocal };
      const r = await io.put(code, out, remote.etag);
      if (r && r.conflict) continue;
      puts++;
      return { ok: true, puts, changedLocal };
    }
    return { ok: false, conflict: true, puts, changedLocal };
  }

  const ALPHA = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  function normCode(s) { const c = String(s || '').toUpperCase().replace(/[\s-]/g, ''); return c.length === 8 && [...c].every(ch => ALPHA.includes(ch)) ? c.slice(0, 4) + '-' + c.slice(4) : null; }

  const SM = { packDoc, zip, unzip, KE_OLD_MS, stamp, STAMP_MAX_AHEAD, MAX_BYTES, VERSION, MAX_EQ, MAX_EQ_DEL, MK_DEL, rid, canon, bytes, normalize, merge, compact, expandBl, correctIds, syncOnce, normCode, normEq, eqFromLocal, ctrSum, normMk, mergeMk, normDone, mergeDone, N_ABC, normN, mergeN, MP_K, MX_K, FR_K, DD_DAYS, DD_MAX, DG_MAX_BYTES, ddDay, normDd, mergeDd, ddAdd, ddSum, normDg, mergeDg, normPg, mergePg, pgFromLocal, pgApply, COMIC_EPS, PG_MOCK };
  if (typeof module !== 'undefined' && module.exports) module.exports = SM;
  root.KESyncMerge = SM;
})(typeof window !== 'undefined' ? window : globalThis);
