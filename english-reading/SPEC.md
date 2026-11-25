# 英文閱讀測驗 200 篇：規格（SPEC）

> 給整合人和家長看。寫題的作者只要看 `CONTRACT.md`。
> 第一階段（2026-11-24）：規格、契約、檢查工具、頁面與引擎、10 篇樣本、測試。
> 第二階段（2026-11-24 整合）：200 篇到齊；接上每日清單「英文閱讀 1 篇」（dd 代碼 b）、進度 p 跨裝置（pg 'R'）、學習幣 english:reading（GAS kids-2026-11-24-a，家長部署後生效）。見 §6.4。

## 1. 給誰、做什麼

- 學習者：國小五年級，iPad 主畫面 PWA（直放為主）。
- 一次讀一篇英文短文，答 3～4 題四選一。答完一題馬上看對錯、中文解說，文章裡用綠色標出答案在哪一句。
- **難度由易到難自動排，最高到國中程度（CEFR A2）。孩子的畫面上沒有等級選單。**

## 2. 三級

| 級 | id | 篇數 | CEFR | 字數 | 題數 | 每句最多 | 用字 |
|---|---|---|---|---|---|---|---|
| 易 | `e001`～`e080` | 80 | A1 | 40～70 | 3 | 12 字 | 站上 lv1～lv2 的字＋基本功能詞 |
| 中 | `m001`～`m070` | 70 | A1+ | 60～100 | 3～4 | 15 字 | 再加 lv3 |
| 難 | `h001`～`h050` | 50 | A2 | 90～140 | 4 | 20 字 | 再加教育部 2000 字＋CEFR-J A1～A2 |

- 字表外的字每篇最多 3 個，都要附中文註解（畫面上加點點底線，文章下方列「📌 生字」）。
- 難的字表到 A2 為止：站上 lv4 裡 CEFR-J B1 以上的字（例如 experiment）算表外字。`check.js` 會擋。

## 3. 畫面

```
english-reading/index.html
├─ 首頁（沒有參數）
│    下一篇大卡（標題、中文標題、易/中/難小標籤、字數、題數、▶ 開始讀）
│    已完成 x / 200 篇（進度條）、✅ 今天已經讀完 n 篇
│    🩹 錯題重練（n 題）        ← 有錯題才出現
│    📚 讀過的文章（收合）：✓1 ／ ✓2 🔒（變灰）
├─ ?a=<篇id>  閱讀＋作答
│    ┌ 文章（position:sticky，iPad 直放最多 46% 畫面高，裡面自己捲；🔼 收起文章／🔽 打開）
│    │   🔊 全文朗讀（念到哪句標黃）、點任何一句＝只念那一句、對話兩個人不同聲音
│    └ 題目一題一題：第 1 / 3 題・題型・🔊 念題目 → 四個選項（順序打亂）
│        答完：答對了／再看一次＋正確答案＋中文解說＋📍 答案在這句「…」，文章那句變綠並捲到看得到
│    結果：答對 ≥ 60%（3 題對 2、4 題對 3）＝完成 → 下一篇 ▶；沒過 → 🔁 再做一次
├─ ?mistakes=1  錯題重練（最多 30 題，每題可展開原文，連對 3 次畢業）
└─ ?a=<篇id>&preview=1  作者預覽（不管順序、不管鎖）
```

- 寬螢幕（≥ 1000px，iPad 橫放、電腦）：文章、題目左右兩欄。
- 375 寬手機不會左右捲（瀏覽器測試有檢查）。
- 入口：英文頁 `#en` 的「📰 英文閱讀測驗」方塊（`app.js`）、學習島英文港口的清單（`subjects.js` `ACTS.english`，卡片小字顯示已完成幾篇）。整頁開，不用 iframe。
- 文章免登入可讀、可朗讀；按「開始作答」才要登入＋練習額度（`KidsAuth.requireLogin`、`startActivity('english')`，同英檢）。

## 4. 規則

| 項目 | 規則 | 程式 |
|---|---|---|
| 順序 | 級別 → 字數 → id。下一篇＝第一篇還沒完成的 | `reading-core.js` `order`、`next` |
| 完成一篇 | 全部答完、答對 ≥ 60% | `grade` |
| 不准跳 | 還沒輪到的篇（比下一篇後面、沒完成）打開會看到「照順序來」 | `canOpen` → `ahead` |
| 做滿 2 次鎖 | 同一篇完成 2 次 → 🔒，打開只給「去挑戰下一篇」 | `LOCK = 2`、`locked` |
| 不重複計算 | 「今天讀了幾篇」只算第一次完成；做過、答對過的篇再做不算 | `finish` 回傳 `fresh` |
| 學過 2 次不算（每題） | 這一題答對過 2 次以上，`KidsDaily.rec` 的 prev ≥ 2 → 記代碼 r、不算英文題數 | `bumpOk` |
| 錯題 | 答錯進錯題庫；在錯題庫裡連對 3 次畢業 | `kids-mistakes.js` |

## 5. 接上的全站機制

| 機制 | 怎麼接 | 備註 |
|---|---|---|
| 學習幣 | 每題 `KidsCoins.answer(ok, 'english')`；一篇做完一輪送 `practice_round` `english:reading`（correct／total＝這篇 3～4 題） | GAS `kids-2026-11-24-a` 白名單加 `english:reading`、這個 item 最少題數用 3（其他照 5）；GAS `kids-2026-11-25-a` 起這個 item 答對門檻用 2/3（3 題對 2、4 題對 3 就給，跟「完成一篇」60% 一致；其他照 0.8）。家長部署 GAS 前送出去回 bad_event、移出佇列，頁面不受影響 |
| 每日統計 | 每題 `KidsDaily.rec('english', ok, null, prev)` | 算英文總數，不算單字／句型／片語子目標 |
| 每日清單「英文閱讀 1 篇」 | 第一次完成一篇呼叫 `KidsDaily.finish('er', true)` → dd 代碼 `b` | 目標固定 1 篇（不進 dg）、2026-11-24 起；不算英文 30 題。首頁小助理、學習島（英文港口插旗）、家長頁都列 |
| 錯題庫 | `KidsMistakes.record('gept', 'er:<篇id>:<題id>', ok, {u:'r', s:題目前 60 字})` | 用英檢那一本：已在同步範圍；英檢頁只看 `u` 是 e/i/a/u 的，看不到 `r` |
| 完成標示 | 首頁 ✓1／✓2 🔒、卡片小字「已完成 n 篇」、今天讀完 n 篇 | 樣式比照 kids-lock 的 ✓1／✓2 🔒，但不進 `done.n`（見 §6） |
| 朗讀 | `gept/gept-tts.js`（en-US、iPad 挑 Samantha 等聲音、男女聲） | 測試用 `window.__GEPT_FAST` 讓它立刻念完 |
| 禁止複製 | `<head>` 載 `../nocopy.js` | smoke 會檢查 |

## 6. 紀錄存在哪裡、同步要怎麼接（重點）

### 6.1 現在（第一階段）

```
本機 kids_en_reading（不同步）
  a:  { e001: { t:做了幾輪, n:完成幾次, best:最佳%, at:最近一次, done:第一次完成時間 }, … }
  ok: { 'e001:q1': 0～2 }          ← 每題答對過幾次，給「學過 2 次不算」
已同步的地方（沿用，不新增欄位）
  kids_daily（dd）  每題記 e；以後每篇記一個代碼（見下）
  kids_mistakes.gept  錯題 er:<篇>:<題>（p.u='r'）
```

**為什麼不放 `kids_done`**：`syncmerge.js` 的 `normDone` 只認得列好的區段（tb、mm、zh…），新加 `kids_done.er` 會在同步時被丟掉、還可能被合併結果蓋掉本機的；就算改 syncmerge 去收，200 篇 × 每篇一個時間（約 22 B）＝ 約 4.4 KB，遠超過剩下的 700～749 B。`test/english-reading.test.js` 有一條斷言證明 `normDone({er})` 會丟掉。

### 6.2 建議的接法：每日清單從 dd 數「今天完成幾篇」（同步 0 B）

```
english-reading/reading.js                 kids-daily.js（整合人改）
  第一次完成一篇 ──► KidsDaily.finish('er', true)
                         FIN = { comic:'v', geo:'w', er:'b' }   ← 加這一個
                         → dd 今天這台多一格「b1」（第二篇 b2…）
                     清單：row('b', …, '英文閱讀', c('b'), 目標 1, '篇')，連結 english-reading/index.html
```

- **代碼建議 `b`**（book）。dd 已經用掉 e m c s n h g a o x d j p u f v w r，還沒用的：b i k l q t y z。`syncmerge.js` 的 dd 收任何一個小寫字母，不用改 syncmerge（測試已驗證 `ddAdd(…, 'b')` 收得進、加得起來）。
- **同步多用多少**：
  - 最壞情況：**+0 B**。smoke 的最壞情況把 dd 直接算成上限 `DD_MAX`（3,750 B），dd 本身超過就從最舊的一天丟。多一個代碼只會讓 dd 少留幾天，整份文件最壞值不變。
  - 平常：每台每天約 +2～3 B（`b1`），只是 dd 在 3,750 B 裡留的天數略少（五項天天做滿時本來留約 69 天，每天多 2～3 B，大約少 3 天）。
  - 錯題：放在英檢那一本，跟英檢共用「未畢業最多 100 題＋墓碑 300 筆」的上限，不新增上限。p 只有 `{u, s}`，比英檢的 `{u, pt, s}` 還小。
  - 進度 `kids_en_reading`：不同步，0 B。
- 「學過 2 次不算」：`finish('er', fresh)` 的 fresh 已經是「第一次完成」，做過的篇不會再記。
- 目標要不要讓家長改：先固定 1 篇（不加 dg 欄位，0 B）。要改的話 dg 多第 12 欄，3 筆約 +6 B，仍在 `DG_MAX_BYTES` 160 B 內（現在最長 133 B）。

### 6.3 這樣做的限制（shortcut）

- **進度（2026-11-24 已做）**：不准跳篇 → 完成的篇一定是順序的前幾篇，所以只同步一個整數 `kids_en_reading.p`＝照順序完成到第幾篇：`syncmerge.js` pg 的 v 群組 `R`（一格，合併取大），文件裡 `,R=5k` 約 5 B（不用 40 B 的位元圖）。
  `sync.js` PG_KEYS `er: 'kids_en_reading'`；別台來的 p 在閱讀頁打開時（`EnReading.syncIn`）補成前 p 篇「完成 1 次」（done＝1 不算今天）。舊版裝置的 normV 照收、合併不丟、pgApply 不認得就跳過，不會出錯。
  限制：改文章字數會讓順序換位，p 照新順序補（上線後改字數前先確認不會跨篇換位）。
- **鎖只在這台**：`kids-lock.js` 的 `done.n` 一篇一格，200 篇約 200 B，現在放不下，所以鎖、✓1／✓2 只看本機。
- **課程地圖、單元完成（completion.js）、小助理還沒接**：它們讀的是已同步的紀錄，閱讀進度在本機，接了會兩台不一致。等 6.3 第一點做了再接。

### 6.4 整合人清單

| 檔案 | 要做的事 |
|---|---|
| `kids-daily.js` | `FIN` 加 `er: 'b'`；清單加一列「英文閱讀 1 篇」（HREF `english-reading/index.html`）；生效日之前的日子不判這一項 |
| `island.js` | 今日清單那一列對到英文港口（插旗） |
| `test/daily-stats.test.js`、`test/norepeat.test.js` | 加 `b` 代碼與清單列的斷言（`english-reading/index.html` 已列在 PAGES） |
| `test/smoke.js` | 跑 `node test/english-reading.test.js`、`node english-reading/check.js` |
| `README.md` | 每日清單那段補「英文閱讀 1 篇」 |
| GAS（選做） | 白名單加 `english:reading` 後，`reading.js` 一篇做完再送 `practice_round` |
| 部署 | `deploy_copy.py` 會帶走整個 `english-reading/`（含 SPEC、CONTRACT、check.js，跟 gept 一樣） |

## 7. 檔案

```
english-reading/
├─ index.html        頁面（載入順序：auth → coins → mistakes → syncmerge → daily → syncauto → sync → quizkit → gept-tts → core → data → reading.js）
├─ reading-core.js   純函式（Node 也能 require）
├─ reading.js        畫面
├─ reading.css
├─ check.js          檢查工具（node english-reading/check.js）
├─ SPEC.md  CONTRACT.md
└─ data/
   ├─ s0.js          樣本 10 篇（易 4、中 3、難 3）
   └─ a1.js～a5.js   五位作者各 38 篇（現在是空的）
test/english-reading.test.js         node：檢查工具、判分、順序、紀錄、錯題、同步相容
test/english-reading-browser.js      headless Chrome：ER_SHOTS=<截圖資料夾>
```
