# 世界史漫畫《時光搖搖車》製作契約（給做每一話的人）

> 沒看過任何對話也要能照這份做出**跟第 1 話風格一致**的一話。先完整看過 `data/v1e1.js`（範本）、在瀏覽器開 `v1e1.html` 翻一遍，再開工。
> 系列大綱（這一話要講什麼、怎麼接前後）：`OUTLINE.md`。目錄與上架開關：`catalog.js`。
> 2026-11-08 第一版。共用檔（art.js／comic.js／comic.css／catalog.js／index.html）由整合的人維護。
> 2026-11-08 第 2～7 冊整合：42 話全上架；現代開場（捷運、教室、籃球場、校門）、蠟燭、大樓、火車、太空頭盔的兄妹併進圖庫（§6）；投幣格依格子比例縮放；角色可以站在 back[] 後面（`behind:1`）；課綱不寫代碼（§3）；外部頁面借用引擎播短漫畫（§13）。

---

## 0. 一話長什麼樣子

```
v{冊}e{話}.html ── 載入 ─┬─ ../syncmerge.js ../kids-daily.js ../quizkit.js ../chinese/reading-core.js（站上共用，不准改）
                         ├─ art.js       畫圖元件（角色、場景、道具、地圖）── 共用，不准改
                         ├─ comic.js     閱讀器（翻格、朗讀、測驗、下一話）── 共用，不准改
                         ├─ catalog.js   42 話目錄＋上架開關 ── 共用，不准改
                         └─ data/v{冊}e{話}.js   ← 你寫的只有這支（＋這個 html）

讀者看到的順序：封面 → 漫畫一格一格（9～13 格）→ 重點（3～5 點）→ 地圖＋時間軸 → 小測驗 5 題 → 結果（下一話 ▶／回目錄）
直向 iPad：一整頁，翻一格多亮一格；橫向：一次放大一格。全部是程式畫的 SVG 剪紙風，沒有圖檔。
```

## 1. 你可以新增的檔、不准動的檔

| 可以新增（只有這兩支） | 不准動 |
|---|---|
| `comics/v{冊}e{話}.html`（照下面範本，只改 3 個地方） | `comics/art.js`、`comic.js`、`comic.css`、`catalog.js`、`index.html`、`OUTLINE.md`、`CONTRACT.md` |
| `comics/data/v{冊}e{話}.js` | 別人的 `v*e*.html`／`data/v*e*.js`、`subjects.js`、`index.html`（站首頁）、`test/` 底下所有檔 |

- **需要新的圖形**（場景、角色、道具、圖示、姿勢、版面、河流）：寫在**自己的 data 檔**裡，用 `ComicArt.extend({...})` 註冊（見 §6），名字一律加這一話的前綴，例如 `v2e3_agora`。覺得「別話也用得到」的，在交件回報寫「建議合併進 art.js：v2e3_agora」，由整合的人搬。
- `catalog.js` 的 `ready` 由整合的人改：你做完**不要**自己改，交件時寫「請上架 v2e3」。測試對「檔案做好但還沒上架」只會出 ⚠ 警告，不會失敗。
- 不准寫任何真實孩子的個資（名字、學校、照片）。主角只有阿凱、小禾。

## 2. 檔名與 html 範本

`v{冊}e{話}.html`、`data/v{冊}e{話}.js`，冊 1～7、話 1～6，例：`v3e5.html`、`data/v3e5.js`。

```html
<!doctype html>
<html lang="zh-Hant-TW">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#E4DFCC">
<title>時光搖搖車 第 3 冊第 5 話 馬背上的大帝國</title>          ← ① 冊、話、標題（跟 catalog.js 一字不差）
<link rel="stylesheet" href="../style.css">
<link rel="stylesheet" href="comic.css">
</head>
<body>
<header class="cm-top"><a href="index.html">← 目錄</a><span id="cm-ep"></span><span id="cm-count"></span><div class="cm-track"><div id="cm-bar"></div></div></header>
<main id="cm-stage" aria-label="漫畫"><div id="cm-book"></div></main>
<main id="cm-sheet" hidden></main>
<footer class="cm-bot" id="cm-chrome"><button type="button" class="btn" id="cm-prev">◀ 上一格</button><button type="button" class="btn" id="cm-tts">🔊 朗讀</button><button type="button" class="btn" id="cm-next">下一格 ▶</button></footer>
<script src="../syncmerge.js"></script>
<script src="../kids-daily.js"></script>
<script src="../quizkit.js"></script>
<script src="../chinese/reading-core.js"></script>
<script src="art.js"></script>
<script src="comic.js"></script>
<script src="catalog.js"></script>
<script src="data/v3e5.js"></script>                              ← ②
<script>KidsComic.mount(COMIC_DATA.v3e5);</script>               ← ③
</body>
</html>
```

## 3. data 檔結構

整支檔只做兩件事：（可選）`ComicArt.extend` 註冊這一話自己的圖形；把這一話放進 `COMIC_DATA`。

```js
/* 世界史漫畫 第 3 冊 中古世界・第 5 話（只有資料）。課綱：…。格式：comics/CONTRACT.md */
(function (root) {
  'use strict';
  if (root.ComicArt) root.ComicArt.extend({ cast: { v3e5_bat: { name: '巴特（虛構）', skin: 'skinB', top: 'g5', skirt: 'clay2', hair: 'topknot', k: .94 } } });
  (root.COMIC_DATA = root.COMIC_DATA || {}).v3e5 = {
    id: 'v3e5', vol: '第 3 冊 中古世界', volNo: 3, ep: 5, title: '馬背上的大帝國', next: '黃金國王去遠行',
    series: { zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' },
    perfect: '全對！…（全對時的一句話，跟這一話的開場梗有關）',
    note: '阿凱、小禾、巴特是虛構的角色；…的話是改編，不是原話。…是想像圖。',
    curriculum: '國中社會會再學到：蒙古帝國與元朝的國際互動',
    cover: { scene: 'cover', sceneOpt: { plain: 1, ground: 'g3' }, back: [ /* 這一話的代表建築 */ ], actors: [ /* 阿凱、小禾 bust:1 */ ] },
    pages: [ { layout: 'trio', panels: [ {…}, {…}, {…} ] }, … ],
    recap: [ { h: '小標', t: '一兩句說明' }, … ],          // 3～5 點，標題是「小禾的筆記」
    map: { bounds: {lon:[西,東], lat:[南,北]}, rivers: [...], cities: [...], cap: '圖說', alt: '給報讀軟體的描述' },
    timeline: { cap: '…', items: [ { y: -1200, when: '約西元前 1200 年', t: '兩行內\n說明', side: 'u'|'d', main: 1, w: 186 }, … ] },
    sources: [ '來源 1（寫出用了它的哪些事實）', '來源 2', … ],
    quiz: [ q1…q5 ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
```

| 欄位 | 必填 | 說明 |
|---|---|---|
| `id` `volNo` `ep` | ✓ | `'v3e5'`、3、5 |
| `vol` | ✓ | `第 {冊} 冊 {冊名}`，冊名照 catalog（古文明／古典世界／中古世界／大航海與文藝復興／革命與工業／帝國與兩次世界大戰／現代世界） |
| `title` | ✓ | 跟 catalog.js 一字不差 |
| `next` | ✓ | 下一話的標題（catalog 的下一筆）；最後一話寫「全系列完」之類 |
| `series` | ✓ | 固定 `{ zh: '時光搖搖車', en: 'THE TEN-DOLLAR TIME RIDE' }` |
| `perfect` |  | 測驗全對時的一句話（沒寫就用預設） |
| `note` | ✓ | 虛構與改編聲明：哪些角色虛構、哪些台詞改編、哪些畫面是想像圖、哪裡學者還有爭議 |
| `curriculum` | ✓ | 固定寫「國中社會會再學到：○○」（主題的白話名稱；國中課本沒有的寫「○○是延伸」）。**不寫課綱條目代碼**（Na-Ⅳ-1 這類），`sources` 也不列——學校教案抄來的代碼對不到國教院原文，測試會擋 |
| `cover` | ✓ | 封面那一格（780×1040）：`scene:'cover'`＋`sceneOpt:{plain:1, ground, near}`，用 `back[]` 擺代表建築（不擺就是第 1 話的巴比倫古城，不要用） |
| `pages[]` | ✓ | 每頁 `{ layout, panels[] }`，格數＝該版面的格數 |
| `recap` `map` `timeline` `sources` `quiz` | ✓ | 見 §7、§8 |

### 一格（panel）

| 欄位 | 說明 |
|---|---|
| `scene` | 場景名（§6），`sceneOpt` 給參數 |
| `shot` | ✓ 分鏡說明一句（「中景：…」「特寫：…」「大格遠景：…」），只給人看，不顯示 |
| `actors[]` | `{ c, x, y, s, pose, expr, look, flip, hold, sweat, blush, noShadow, bust, behind }`；**x,y＝腳底**（面板 px），`s≈1` 時人高約 200px×角色的 k；`flip:1` 面向左；`look` 眼睛方向 -1～1；`bust:1` 不畫下半身（被畫框切掉時用）；`hold` 手上的東西（字串或陣列）；`behind:1` 畫在 `back[]` 後面（站在鐵絲網、牆、櫃檯後面的人） |
| `back[]` `props[]` | 道具 `{ k, x, y, s, flip, rot, op, …各道具參數 }`；`back` 畫在人後面、`props` 畫在人前面。疊的順序：場景 → `behind:1` 的角色 → `back[]` → 其他角色 → `props[]` |
| `bubbles[]` | `{ t, x, y, w, tail:[x,y], kind, fs }`：左上角 x,y、寬 w（≥100）、尾巴尖端指到說話的人嘴邊；`kind`：`say`（預設）／`shout`（黑底大喊）／`think`（想）／`car`（搖搖車說話，綠底）；`fs` 字級 22～29（預設 26）；`\n` 換行 |
| `caption[]` | 旁白 `{ t, x, y, w, en, say, dark:false }`：深綠底（`dark:false` 奶油底）；`en` 小字英文標；`say` 給朗讀的版本（例：注音字要念的樣子） |
| `cards[]` | 字卡 `{ icon, y, x, w, t }`（第 1 話法條那種），icon 見 §6 |
| `sfx[]` | 狀聲字 `{ t, x, y, fs, rot, c }` |
| `tag` | 小標籤 `{ t, left, top }`（左上角），用在「人物介紹」「改編自…」 |

座標系：一頁畫布 800×1060，每格的 x,y,w,h 見 `ComicArt.LAYOUTS`；格子裡的東西都用**格子自己的 px**（左上 0,0）。

## 4. 版面（LAYOUTS）與分鏡節奏

| 名字 | 格數 | 樣子（格子寬×高） |
|---|---|---|
| `trio` | 3 | 上寬 780×340；下左大 524×686＋下右細 242×686 |
| `trioR` | 3 | 上寬 780×340；下左細 242×686＋下右大 524×686 |
| `splash` | 1 | 滿版 780×1040（抵達新時代、最大的場面） |
| `wide2` | 3 | 上寬 780×470；下左 302×556＋下右 464×556 |
| `tall2` | 2 | 左細高 344×1040＋右 422×1040 |
| `strip` | 2 | 上矮寬 780×400＋下大 780×626 |
| `quad` | 4 | 2×2，各約 383×513 |
| `stack3` | 3 | 三條橫的 780×338 |
| `duo` | 2 | 上下各 780×513 |
| `bigL` | 3 | 左大 500×1040＋右兩格 266×513 |

**節奏照第 1 話**（6 頁、12 格）：①現代開場的小麻煩（trio：吵架→追逐→投 10 元）②抵達（splash：大遠景＋旁白「大約 X 年前，某地」＋搖搖車報站）③當地虛構小孩登場、出糗（wide2）④這一話的大場面（splash 或 bigL）⑤知識格（tall2／字卡）⑥真實人物＋收尾回到開場梗（strip）。至少 3 種版面，格數 9～13（建議 11～12）。

## 5. 角色與口吻

| 角色 | 設定 | 口吻與固定梗 |
|---|---|---|
| 阿凱 `kai` | 哥哥，五年級，衝動、愛吃、好奇，常出糗（坐到泥板、踩到東西） | 短句、誇張、愛找藉口：「布丁上又沒寫『不准吃』。」被叫全名「陳以凱！！」 |
| 小禾 `he` | 妹妹，三年級，戴眼鏡、帶筆記本（`hold:'notebook'`），細心、會吐槽 | 冷靜吐槽＋發問：「那不是墊子！」；重點頁標題是「小禾的筆記」 |
| 時光搖搖車 | 投 10 元、數字盤倒轉；會說話（泡泡 `kind:'car'`） | 每話抵達：「嗶——本站：○○。免費附贈翻譯功能。」結尾：「嗶嗶——下一站，○○！」 |
| 當地小孩 | 每話一個**虛構**的同齡小孩當嚮導（第 1 話是書記學徒伊丁），用 extend 自己做 | 介紹自己的工作，帶兄妹去看；個性要跟阿凱有對比 |
| 真實人物 | 最多 1～2 位，`real: 1` | **台詞一律標 `tag:{t:'○○的話：改編自…'}`**（測試會擋）；不要編造他沒做過的事；外表沒有可靠畫像的，note 寫「想像圖」 |
| 路人 | 農夫、工人、商人、士兵（不拿武器對人）… | 一兩句，負責把「這時代的麻煩」演出來 |

- 一個泡泡 ≤36 字（不含空白），一格最多 4 個泡泡；漫畫總字數（泡泡＋旁白＋字卡）300～1000（第 1 話約 650）。
- 用台灣國小用語；人名地名第一次出現附「今天的哪裡」；難字可在旁白用 `say` 給朗讀版。
- 笑點來自角色個性，不取笑任何民族、宗教、外表。

## 6. 圖庫（art.js 已經有的，直接用名字）

**場景 `scene`**（`sceneOpt` 顏色可寫色名 g3 g5 g7 g9 sand brick brick2 brick3 clay clay2 clay3 cream paper2 paper3 gold red wood blue purple sky night 或 #色碼）

| 名字 | 用途與參數 |
|---|---|
| `land` | 戶外通用：`sky` `sun:[x比例,y比例]|false` `hz`（地平線比例 .5） `far`（遠山色|false） `ground` `river:{y,h,tilt,c}` `near` |
| `sea` | 海上：`sky` `hz` `water` `sun` `far` |
| `room` | 室內：`wall` `brick:1` `floor` `hz` `window:[x,y,w,h]`（比例） `winC` |
| `flat` | 單色特寫／心情格：`c` `zoom:1` `cx` `cy` |
| `night` | 夜空：`sky` `moon:[x,y]` `ground` |
| `vortex` | 時光隧道（出發格）：`year:'前1200'` `car:false` `carS` |
| `cover` | 封面：`plain:1` `ground` `near` |
| `coin` | 投幣孔＋倒轉的數字盤（出發那一格）：`year:'2560'`、`era:'西元前'|'西元'`。任何格子都能用：寬格（寬＞高×1.2）投幣孔在左、數字盤在右；直的格子上下排、數字盤跟著縮，不會蓋到投幣孔 |
| `mrt` | 捷運車廂：`seat` 座椅上緣比例（.6，坐著的人腳底放在 seat＋.16 附近）、`poles:[.3,.7]` 扶手桿、`sign` 車門上的跑馬燈字、`win` 窗外顏色 |
| `classroom` | 教室：`board` 黑板上的字、`fs` 字級、`hz` 牆腳（.74）、`floor`、`desks:false` 不畫前排課桌 |
| `ballCourt` | 籃球場（第 1 話的 `court` 是國王的宮廷，不一樣）：`back:'fence'`（鐵絲網，預設）`'trees'` `'school'`、`floor` 場地色、`hoop` 籃框位置比例（不寫就自己用 `hoop` 道具擺）、`sun:[x,y]`、`hz` |
| `schoolGate` | 校門口：`name` 校名（時光國小）、`shop:false` 不畫左邊文具店、`hz` 地面（.54）、`ground` 地面色（預設馬路） |
| 第 1 話專用 | `kitchen`（家裡廚房）`street`（台灣街道）`babylon` `yard` `print` `stylus` `granary` `steleHall` `lawsBg` `court` `dusk` —— 現代開場可以重用 `kitchen`、`street`、`coin` |
| 現代開場還沒有共用的 | 圖書館用 `room`＋`shelf`＋`table`（v2e3、v5e5 的寫法）；夜市、便利商店、超市各只有一話畫過（`v3e6_night` `v6e5_shop` `v7e6_market`），第二話要用時再搬進來 |

**道具 `k`**（原點＝底部中央貼地；共通 `s` `flip` `rot` `op`）

| 類別 | 名字（參數） |
|---|---|
| 建築 | `pyramid`（W H f f2 cap wip:0～1 沒蓋完＋坡道） `obelisk`（H） `mudHouse`（W H dome door:false win:false） `house`（W H roof:gable/tile/thatch/flat roofC f） `wall`（W H gate crenel:false） `tower`（W H roof:'cone'） `column`（H style:greek/egypt/persia） `temple`（W H n 根柱） `hall`（中國殿堂 W H roof:'thatch'/'tile'） `dome`（W H domeC，不畫宗教符號） `castle`（W H roofC） `zig`（金字形神塔 W H） `stele`（石碑 H W） `building`（現代大樓 W H f 牆色 g 窗色 win:'grid'|'band' door:1） |
| 自然 | `tree`（H kind:round/pine/cedar/cypress） `palm`（H） `reeds`（n） `papyrus`（H n） `mountain`（W H snow） `hills`（W H） `cloud`（r） `waves`（W n） |
| 交通 | `ship`（kind:galley 古代划槳帆船／reed 蘆葦船／junk 中國帆船／tall 大航海帆船／steam 蒸汽船；sail stripes trim flag） `horse`（f mane saddle） `camel`（load） `cart` `car`（搖搖車 s lights rot） `scooter` `loco`（早期蒸汽火車頭，朝右 smoke:1） `coach`（客車廂 f） `rail`（鐵軌 W） |
| 器物 | `scroll`（W H） `slips`（竹簡） `book` `tablet`（泥板） `amphora` `ding`（青銅鼎） `bone`（卜骨） `shell`（骨螺） `fire` `brazier` `well` `flag`（f） `sign`（t fs 招牌） `crate` `barrel` `bricks`（n m） `sack` `coin`（t 面額） `crowd`（n W 背景人群剪影） `road`（W w2 L 透視的路；old:1 古代的路，不畫白色分隔線） `spark` `arrow`（L rot） `table` `shelf` `lamp` `puff` `zoom` `candle`（蠟燭＋光暈 glow） `hoop`（籃框，朝右） `ball`（籃球） |

**角色**：`kai` `he`（主角）、`kaiSpace` `heSpace`（戴太空頭盔的兄妹）＋第 1 話的 `iddin` `king` `guard` `farmer` `farmer2` `scribe`。新角色用 extend 的 `cast`：

```js
cast: { v2e1_nikos: { name: '尼可斯（虛構）', skin: 'skin'|'skinB'|'skinC', top: 'g5', skirt: 'gold',   // 短衣＋裙
                     // 或長袍：robe: 'cream', trim: 'g7'（有 robe 就不畫腿）；或 top＋bottom＝上衣＋長褲
                     hair: 'curly', hairC: 'wood', hat: 'wreath', hatC: 'red', acc: ['earring'], beard: 0|1|2,
                     r: 22（頭半徑，大人 18～19）, k: .95（身高倍率，小孩 .9～.96、大人 1.1～1.26）, real: 1（真實人物才寫） } }
```
- `hair`：`short` `curly` `wig`（埃及假髮） `bun` `topknot`（古代中國束髮） `long` `bald` `man` `kai` `he` `iddin`；`hairBack`：`ponytailBack` `twinBack` `heBack`
- `hat`：`nemes`（法老頭巾） `crownP`（波斯王冠） `softCap` `cone` `band` `turban` `wreath`（桂冠） `helmet` `crown` `tophat` `tricorn` `capCN`（幞頭） `straw`（斗笠） `hood` `beret` `space`（太空頭盔） `king`
- `acc`：`glasses` `mustache` `earring`
- `pose`：`stand` `walk` `run` `chase` `shout` `fists` `point` `pointUp` `think` `eat` `hold` `offer` `lookup` `scared` `wave` `sit` `splat` `write` `carry` `arg` `raise` `push` `kneel` `bow` `ride`（騎馬：人 x＝馬 x−4s、y＝馬 y−98s，加 `noShadow:1`）
- `expr`：`calm` `happy` `grin` `shock` `shout` `mad` `worry` `smug` `chew` `awe` `think` `yell`
- `hold`：`notebook` `tablet` `tabletBlank` `cup` `spoon` `sack` `reed` `scroll` `brush` `bone` `letter` `coin` `torch` `staff` `book` `phone` `shell` `flagS`
- 字卡 `icon`：`dike` `eye` `scale` `water` `brick` `scrollI` `coinI` `ship` `road` `letterI` `question` `people` `star`

**自己畫新東西**（extend 的 `scenes`／`props`／`icons`）：用 `ComicArt.k` 的工具，只畫色塊、不描邊、陰影用 `k.both(shape)`／`'cm-warm'`，顏色用 `k.C`：

```js
const K = root.ComicArt && root.ComicArt.k;
if (K) root.ComicArt.extend({
  scenes: { v2e1_pnyx(w, h, o) { return { bg: K.rect(0, 0, w, h, K.C.sky) + K.prop({ k: 'temple', x: w * .7, y: h * .5, W: 300 }) /* … */, fg: '' }; } },
  props: { v2e1_ostracon: x => K.place(x, K.both(K.path('M-30 0 L-24 -40 L20 -46 L32 -6Z', K.C.clay3), 'cm-warm')) },
  icons: { v2e1_vote() { return K.rect(0, 0, 120, 90, K.C.g3) + /* … */ ''; } }
});
```
- 名字一定要有 `v{冊}e{話}_` 前綴；撞名會丟錯。
- 不准用外部圖片、字型、網址；不准畫血、傷口、武器對著人。

## 7. 重點、地圖、時間軸、來源

- `recap` 3～5 點：`h` 小標＋`t` 一兩句；要能單獨讀懂，數字年代跟漫畫一致。
- `map`（通用地圖 `A.map`）：
  - `bounds:{lon:[西,東], lat:[南,北]}`；區域圖適用經度 -20～150、緯度 -10～65；範圍寬超過 90 度自動變世界圖（或寫 `world:1`）。
  - `rivers`：`euphrates` `tigris` `shatt` `nile` `nileRosetta` `nileDamietta` `indus` `ravi` `ganges` `yellow` `yangtze` `danube` `rhine` `seine` `tiber` `mississippi` `amazon`，或 `{ pts:[[緯,經],…], w, f }`
  - `routes:[{ pts, f }]` 紅色虛線（路線、航線）；`areas:[{ pts, f, op }]` 半透明範圍（帝國版圖）；`labels:[{ t, lat, lon, size, f, rot }]`（海名、河名、國名）
  - `cities:[{ n, lat, lon, main:1, side:'l'|'r', dy }]`，剛好一個 `main`（紅點）
  - 臺灣：在範圍裡會自動標「臺灣」，不在就在圖邊畫「往這邊很遠很遠才是臺灣」箭頭（跟城市名疊到就調 bounds，或 `taiwan:false`）
  - `cap` 要寫「河道、海岸是今天的樣子／簡化畫法」；`alt` 一句話描述給報讀軟體。
- `timeline.items`：照年代排、`y` 用西元年（西元前寫負數）、剛好一個 `main`、`t` 兩行內、`side:'u'|'d'` 上下交錯、`w` 框寬；最後一個通常是「今天」。它是**照真實比例**畫的，年代挤在一起時調 `w`、`side`。
- `sources` ≥2：寫出處＋用了它的哪些事實（博物館館藏頁、大英百科、教育部／國家教育研究院、學術單位）；不准用維基百科當唯一來源、不准用市售童書。

## 8. 測驗 5 題

- 題型（`quizkit.js`）：`mc` 單選（opts 3～4 個、`a` 正解索引）、`tf` 是非（`a: true|false`）、`order` 排順序（`items` 照正確順序寫 3～6 個）、`match` 配對（`pairs` 3～5 組）。**至少 1 題不是 mc**。
- `id` 依序 `q1`～`q5`；`d` 難度 1／2／3 由小到大，第 1 題 < 第 5 題；建議 1,1,2,2,3。每題要有 `why`（答完給看的解析）。
- 第 5 題是「判斷題」：引用一個小朋友的說法（「小明說：…」），問哪個說法最正確——考理解不是背誦。
- 防洩答（測試會擋）：選項不要用「以上皆是／皆非」；正解不能比其他選項長很多；**「正解是唯一最長的選項」整話 ≤25%**（4 題 mc 最多 1 題）——寫完把干擾選項加長或正解縮短。選項順序執行時會打散，`a` 寫 0 沒關係。
- 題目只考漫畫和重點頁裡講過的東西。

## 9. 史實與適齡

- 年代、人名、地名要對得上 §7 的來源；不確定的寫「大約」「學者認為」「有不同說法」，`note` 註明想像圖與改編。
- 戰爭、殖民、屠殺、奴隸：講原因和影響，不畫血腥（測試擋「血、屍、砍頭、斬首、殺死」出現在漫畫格裡）；不美化征服，也不把哪一方畫成壞人臉。
- 宗教：講「當時的人相信什麼、帶來什麼影響」，不評價、不畫神明的樣子；政治與領土爭議兩邊都提、不站隊。
- 不抄任何市售書／卡通的情節、角色、台詞、構圖。

## 10. 驗證（全部綠才算做完）

```powershell
cd "G:\Yoda x Claude\小朋友學習站"
node test\comics.test.js v3e5                                  # 只檢查你這一話：結構、元件、畫得出來、測驗、連結
node test\comics.test.js --browser v3e5 --out "<你的暫存夾>"   # 無頭 Chrome：0 JS 錯誤、泡泡不出格／不疊／不蓋臉、
                                                               # 直向翻完、測驗做完、橫向、375 寬不左右捲動，每頁截圖
# 平行跑的人各用不同 port：$env:CM_PS=8901; $env:CM_PD=9441
```

- 看截圖：每一頁（`v3e5-p01.png`…）、重點、地圖、結果頁都要**親眼看過**：人有沒有被泡泡擋、字有沒有壓在臉上、角色有沒有站在空中或被切掉、地圖城市字有沒有疊。
- 也開本機伺服器實際翻一遍（iPad 直式 820×1180、橫式 1180×820）。

## 11. 交件

回報寫：①這一話的標題與 12 格分鏡一句話摘要 ②`comics.test.js` 兩種模式的結果 ③截圖資料夾路徑 ④用到哪些 extend 名字、建議合併進 art.js 的 ⑤「請上架 vXeY」⑥查證不確定、需要人判斷的地方。

整合的人做：讀過、看截圖 → `catalog.js` 把 `ready` 改 1 → 跑 `node test\comics.test.js`、`node test\smoke.js`、`node test\daily-stats.test.js` → `python deploy_copy.py` → 到部署夾 `git commit -- comics <其他自己的路徑>`、push。

## 12. 常見坑

- 泡泡的 `y` 是**左上角**；字多時高度會長，往下壓到人臉 → 減字或把泡泡往上／旁邊放，尾巴 `tail` 要指到嘴邊（頭心大約在腳底往上 174×s×k）。
- 角色 `x` 在格子邊緣會被切掉一半；腳底 `y` 大於格高就是被畫框切到腰（要的話加 `bust:1`）。
- 封面一定要 `sceneOpt:{plain:1}`，不然會畫出第 1 話的巴比倫。
- `next` 要跟 catalog 下一話標題一樣；最後一格要有旁白「下一話：…」。
- 不要改共用檔「順手修一下」——寫在回報裡。

## 13. 外部頁面借用漫畫引擎播一段短漫畫（地理世界篇開場等；需求見 `geo/CONTRACT.md` §8）

借用、不複製：外部頁面直接載 `comics/` 的引擎，`comics/` 底下的檔一個都不用改、也不准改。

```
geo/unit.html（或任何外部頁面）
  ├─ ../comics/comic.css               版面樣式（在頁面自己的 css 之後載，class 都是 cm- 開頭）
  ├─ 頁面裡放漫畫的骨架（id 固定，見下面）
  ├─ ../quizkit.js ../chinese/reading-core.js ../comics/art.js ../comics/comic.js   （照這個順序；短漫畫不用 catalog.js）
  ├─ geo/comics/w1.js                  短漫畫資料：照 §3 的「一話」格式放進 COMIC_DATA.w1
  └─ KidsComic.mount(COMIC_DATA.w1, { short: 1, onStep, onEnd })
```

骨架（id 一個都不能少；放在一個有高度的容器裡，例如分頁內容 `height: 70vh`）：

```html
<header class="cm-top"><span id="cm-ep"></span><span id="cm-count"></span><div class="cm-track"><div id="cm-bar"></div></div></header>
<main id="cm-stage" aria-label="漫畫"><div id="cm-book"></div></main>
<main id="cm-sheet" hidden></main>
<footer class="cm-bot" id="cm-chrome"><button type="button" class="btn" id="cm-prev">◀ 上一格</button><button type="button" class="btn" id="cm-tts">🔊 朗讀</button><button type="button" class="btn" id="cm-next">下一格 ▶</button></footer>
```

| `mount` 的選項 | 說明 |
|---|---|
| `short: 1` | 短漫畫：只有封面（資料沒寫 `cover` 就沒有封面，直接從第 1 格開始）＋格子，沒有重點、地圖、測驗；最後一格的按鈕變「看完了 ✓」 |
| `onStep(step, i)` | 每翻一步都呼叫。`step.kind` 是 `'cover'`／`'panel'`；`step.p` 是這一格的資料，**格子可以自己加欄位**，例如 `places: ['nile', 'cairo']`（`geo/places.js` 的 id），外部頁面在這裡讓旁邊的地圖亮起來 |
| `onEnd(ep)` | 最後一格按「看完了 ✓」時呼叫（例如切回地理的練習分頁） |

- 短漫畫的資料：`id` `title` `series` `pages` 必填；`cover` 選填；`recap` `map` `timeline` `quiz` `sources` 都不用。格子的寫法、版面、角色、圖庫完全照 §3～§6；這一段自己的新圖形用 `ComicArt.extend`，名字前綴用自己的 id（例如 `w1_`）。
- 測試：`test/comics.test.js --browser` 有一項「短漫畫模式」檢查（只有格子、每翻一步呼叫 onStep、最後呼叫 onEnd）。地理那邊的資料格式、地點 id 由 `test/geo.test.js` 檢查（地理的人加）。
- 限制：同一頁只能 mount 一次（引擎抓固定 id、在 window 上掛鍵盤左右鍵翻格）。要換一段漫畫就重新整理頁面，或改用 `<iframe>` 包一個只放骨架的頁面。
- 學習紀錄：短漫畫沒有測驗，不會呼叫 `KidsDaily.rec`。
- 2026-11-08 實際接法（地理世界篇開場）：comic.css 會改 `html,body`（全螢幕、不能捲、`:root` 顏色），直接載進別人的頁面會把那一頁弄壞，所以地理用 `geo/intro.html`（只放骨架）包在 iframe 裡，onStep／onEnd 用 postMessage 告訴上一層。見 `geo/CONTRACT.md` §8。
- 2026-11-08 comic.js 只加了一行：地圖頁（WHERE & WHEN）在地圖下面多一個「🌍 在地圖上看這一站」（`#cm-geo`，連到 `../geo/history.html?ep=<這一話>`）；地點對照表在 `geo/history.js`。