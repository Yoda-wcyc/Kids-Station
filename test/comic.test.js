/* test/comic.test.js — 世界史漫畫的資料檢查：格式、格數 8～12、測驗 5 題、d 遞增、單選只有一個正解、資料用到的元件都存在。
   用法：node test/comic.test.js（新增一話：把檔名加進 EPISODES）。 */
const vm = require('vm'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), EPISODES = ['v1e1'];
const QK = require(path.join(root, 'quizkit.js')), A = require(path.join(root, 'comics', 'art.js'));
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('✗ ' + m); } };
const str = x => typeof x === 'string' && x.trim().length > 0;

EPISODES.forEach(id => {
  const ctx = {}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(root, 'comics', 'data', id + '.js'), 'utf8'), ctx);
  const ep = ctx.COMIC_DATA[id], W = m => id + '：' + m;
  ok(ep && ep.id === id, W('id'));
  ['title', 'vol', 'next', 'curriculum'].forEach(k => ok(str(ep[k]), W('沒有 ' + k)));
  ok(str(ep.series.zh) && Number.isInteger(ep.ep), W('series／ep'));
  const panels = ep.pages.flatMap(pg => pg.panels);
  ok(panels.length >= 8 && panels.length <= 12, W('格數要 8～12，現在 ' + panels.length));
  ok(new Set(ep.pages.map(pg => pg.layout)).size >= 3, W('版面至少 3 種，分鏡才有變化'));
  ep.pages.forEach((pg, pi) => {
    const L = A.LAYOUTS[pg.layout]; ok(L, W(`第 ${pi + 1} 頁版面 ${pg.layout} 不存在`));
    if (L) ok(L.length === pg.panels.length, W(`第 ${pi + 1} 頁 ${pg.layout} 要 ${L.length} 格，資料 ${pg.panels.length} 格`));
    pg.panels.forEach((p, i) => {
      const w = `第 ${pi + 1} 頁第 ${i + 1} 格 `, s = L && L[i];
      ok(A.SCENES[p.scene], W(w + '場景不存在 ' + p.scene));
      ok(str(p.shot), W(w + '沒有分鏡說明 shot'));
      (p.actors || []).forEach(a => { ok(A.CAST[a.c], W(w + '角色不存在 ' + a.c)); ok(!a.pose || A.POSES[a.pose], W(w + '姿勢不存在 ' + a.pose)); ok(!a.expr || A.EXPR[a.expr], W(w + '表情不存在 ' + a.expr)); });
      (p.bubbles || []).forEach(b => {
        ok(str(b.t), W(w + '泡泡沒字'));
        ok(b.t.replace(/\s/g, '').length <= 36, W(w + '泡泡字太多：' + b.t));
        if (s) ok(b.x >= 0 && b.y >= 0 && b.x + b.w <= s.w, W(w + '泡泡超出格子：' + b.t));
      });
      (p.cards || []).forEach(c => ok(A.ICONS[c.icon] && str(c.t), W(w + '字卡圖示或文字')));
      ok((p.bubbles || []).length + (p.caption || []).length + (p.cards || []).length > 0, W(w + '這格沒有字'));
    });
  });
  // 真實人物的台詞要標明是改編
  panels.filter(p => (p.actors || []).some(a => a.c === 'king') && (p.bubbles || []).length).forEach(p => ok(p.tag && /改編/.test(p.tag.t), W('漢摩拉比說話的格子要標「改編」')));
  // 看完以後
  ok(ep.recap.length >= 3 && ep.recap.length <= 5 && ep.recap.every(r => str(r.h) && str(r.t)), W('重點要 3～5 點'));
  ok(ep.map.cities.some(c => c.main) && str(ep.map.cap) && str(ep.map.alt), W('地圖'));
  ok(ep.timeline.items.length >= 3 && ep.timeline.items.every((t, i, a) => !i || t.y > a[i - 1].y), W('時間軸要照年代排'));
  ok(ep.sources.length > 0 && str(ep.note), W('要列資料來源、虛構與改編註記'));
  // 測驗
  ok(ep.quiz.length === 5, W('測驗要 5 題'));
  ep.quiz.forEach((q, i) => {
    const w = W(`第 ${i + 1} 題 `);
    QK.validate(q).forEach(e => ok(false, w + e));
    ok([1, 2, 3].includes(q.d), w + 'd 要 1|2|3');
    if (i) ok(q.d >= ep.quiz[i - 1].d, w + 'd 要由小到大');
    ok(/^q\d+$/.test(q.id), w + 'id');
    if (q.type === 'mc') ok(Number.isInteger(q.a), w + '單選只有一個正解');
  });
  ok(ep.quiz[0].d < ep.quiz[4].d, W('要由易到難'));
  // 頁面實際載入這一話
  const h = fs.readFileSync(path.join(root, 'comics', id + '.html'), 'utf8');
  ['../quizkit.js', '../chinese/reading-core.js', 'art.js', 'comic.js', `data/${id}.js`].forEach(f => ok(h.includes(`src="${f}"`), W('頁面沒載入 ' + f)));
  ok(h.includes(`COMIC_DATA.${id}`), W('頁面沒掛這一話'));
});
// 地圖：幼發拉底河在底格里斯河西邊，兩河會合後流進波斯灣；巴比倫貼著幼發拉底河
{
  const G = A.GEO, near = (a, lat, lon) => Math.min(...a.map(p => Math.hypot(p[0] - lat, p[1] - lon)));
  ok(G.euphrates[G.euphrates.length - 1].join() === G.tigris[G.tigris.length - 1].join(), '地圖：兩河在下游會合');
  ok(G.euphrates.find(p => p[0] < 34.2)[1] < G.tigris.find(p => p[0] < 34.3)[1], '地圖：中游幼發拉底河在西');
  ok(near(G.euphrates, 32.54, 44.42) < .2, '地圖：巴比倫在幼發拉底河邊');
  ok(/<svg/.test(A.mapMeso({ alt: 'x', cities: [] })) && /<svg/.test(A.timeline([{ y: 0, when: 'a', t: 'b' }, { y: 1, when: 'c', t: 'd' }])), '地圖、時間軸畫得出來');
}
console.log(`comic.test: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
