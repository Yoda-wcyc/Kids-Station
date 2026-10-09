# 小朋友學習站（repo：Kids-Station）

給國小孩子（iPad Safari 優先）的多科目學習網站。純 HTML/CSS/JS，不用安裝。瀏覽內容可離線（直接開 `index.html` 也能看），登入與練習需要連網（練習與遊戲要先登入會員）。

## 科目

```
頂端科目列（subjects.js / subjects.css，記住上次的科目：ke_settings.subject）
├─ 國語   #s/chinese   準備中
├─ 數學   #s/math      活動卡片
│    └─ 天平解方程式  #s/math/balance → iframe 開 math/balance.html
├─ 社會   #s/social    心智圖，每單元一張卡（單元一～四）
│    └─ #s/social/u1 … → iframe 開 mindmap/social.html?u=u1
├─ 自然   #s/science   心智圖，每單元一張卡（太陽與光、植物世界、水溶液、力與運動）
│    └─ #s/science/n1 … → iframe 開 mindmap/science.html?u=n1
├─ 英文   #home 等原本路由（app.js，預設科目）
├─ AI     #s/ai        活動卡片
│    ├─ AI 會唬爛     #s/ai/hallucinate → ai/hallucinate.html
│    ├─ 怎麼問得好    #s/ai/ask-well    → ai/ask-well.html
│    └─ 秘密不能說    #s/ai/secrets     → ai/secrets.html
└─ 遊戲   #s/game      活動卡片
     └─ Scratch 塔防（7 堂課） #s/game/scratch-td → game/scratch-td/web/index.html
```

活動卡片定義在 `subjects.js` 的 `ACTS`（新增活動＝加一筆 `{id,title,desc,icon,src}`）。點卡片後頁面用 iframe 開在科目列下方，上面有「← 回某科」。
社會、自然的單元卡由 `subjects.js` 的 `MM_UNITS` 產生（id、標題要跟 `mindmap/data` 一致）；心智圖的資料格式與抽題規則見 `mindmap/data/FORMAT.md`。

### 正本位置（2026-10-05 起，小朋友學AI 系列已退場，以下就是正本，直接改）

| 內容 | 正本 | 網站上的檔案 |
|---|---|---|
| 天平解方程式 | `math\balance.html` | 同一支 |
| 社會／自然心智圖 | `mindmap\`：`social.html`、`science.html`、`mindmap.js`／`.css`（兩科共用引擎）、`blanks.js`、`data\social\`、`data\science\`；`test\`、`_demo\`、`.md` 只留本機 | 同一批（不含 test、_demo、.md） |
| AI 三頁 | `ai\hallucinate.html`、`ai\ask-well.html`、`ai\secrets.html` | 同一支 |
| Scratch 塔防 | `game\scratch-td\`：`_build\`（產生器與驗證）、`積木腳本規格.md`、中文檔名講義與 .sb3 | `game\scratch-td\web\`（ASCII 檔名，由 `_build\gen_handout.py` 產生，不要手改） |

Scratch 塔防重做：在 `game\scratch-td\_build\` 依序跑 `python build_sb3.py`（.sb3＋規格）、`python check_consistency.py`、`node validate.js <裝有 scratch-parser、jszip 的資料夾>`、`python gen_handout.py`（講義＋web\）。細節見 `_build\驗證報告.md`。

遊戲庫（game repo）已不放單獨的天平或英文頁，只有一張「小朋友學習站」卡片連到本站。

線上版：https://yoda-wcyc.github.io/Kids-Station/

## 結構

```
index.html        單頁殼（hash 路由：#home #learn/... #practice #quiz #result #mistakes #bank #parent）
style.css         樣式（淺色、大按鈕）
engine.js         題目引擎：不碰 DOM，瀏覽器與 Node 共用（window.KE / module.exports）
app.js            畫面、路由、localStorage、語音（speechSynthesis / SpeechRecognition）
data/words.js     單字 window.DATA_WORDS
data/words-2..4.js 單字（續）：教育部國中小基本 1200 字，每支用 window.DATA_WORDS = (window.DATA_WORDS||[]).concat([...]) 接在 words.js 後面
data/phrases.js   片語 window.DATA_PHRASES（{id,p,zh,lv,tag,ex,exZh,form?}；lv 1 必會／2 基本／3 進階）
data/roots.js     字首字尾字根 window.DATA_ROOTS
data/grammar.js   文法 12 主題 window.DATA_GRAMMAR
data/patterns.js  句型 12 個 window.DATA_PATTERNS
test/smoke.js     node test/smoke.js（檢查資料格式、每種題型各出 30 題、各科活動檔案都在）
subjects.js/.css  科目列與活動卡片、iframe
math/ ai/ game/   其他科目的活動頁（見上方「正本位置」）
mindmap/          社會、自然心智圖（node mindmap/test/blanks.test.js、node mindmap/test/data.test.js）
deploy_copy.py    正本 → 部署夾的複製（含排除規則）
```

紀錄存在瀏覽器 localStorage：`ke_progress`、`ke_mistakes`、`ke_settings`、`ke_log`、`ke_learned`、`ke_correct`、`ke_agg`（壓縮過的舊紀錄）；配對資訊 `ke_sync`（只在這台）。家長頁可以匯出／匯入 JSON 備份（含學會紀錄）。

「學會了」：每個學習項目有一組固定題目，**每一題都答對過一次**才能按「👍 學會了」（沒完成前是灰色 🔒「還差 N 題」）。

| 項目 | 題組（打字題一律排最後） |
|---|---|
| 單字 | 5 題：聽音選字、看中文選英文、看英文選中文，＋打字：聽寫拼字、中翻英打字 |
| 片語 | 5 題：聽音選、看中文選、看英文選、例句填空（干擾選項用不同類別的片語），＋打字：中翻英打字（原形或 `form` 都算對）。小測驗＝看中文選＋填空＋打字，3/3 |
| 字根 | 1＋2n 題：字首字尾的意思、每個衍生字的「用字根組單字」，＋打字：每個衍生字的「字根拼字」（藏一部分當提示） |
| 文法 | 15 題：13 題填空／挑正確句，＋2 題中翻英打字（`grammar.js` 的 `typed`） |
| 句型 | 15 題：5 題重組＋5 題看中文選句子（同一組例句）＋3 題加練重組（`extra`），＋2 題中翻英打字（`typed`）。共 48 個：`lv` 1 簡單 24 個、2 基本 12 個、3 進階 12 個 |

- 卡片上有「練習 6/15 ✓」進度條和「🎯 練習這組」：只出還沒答對過的題，打字題最後；答錯會排回後面（「再一次！」）直到答對，中途離開進度照樣保留。
- 一般「練習」頁答對的題目也算（同一個題號）；以前答對過的會從作答紀錄追溯（`ke_log`），另存在 `ke_correct` 避免舊紀錄被截掉。
- 題組完成後「學會了」才解鎖；按下去還要**通過小測驗**才標記（不含開口說）：單字 3 題（聽音選字、看中文選英文、聽寫拼字）全對；字根 3 題（意思＋2 個衍生字）全對；文法從該主題隨機 5 題、答對 4 題；句型 3 題（2 題重組＋1 題看中文選句子）全對。沒過顯示錯題（照常進錯題庫），可「再試一次」或「回去複習」；小測驗答錯不會讓題組重新上鎖。
- 通過才記錄時間與小測驗分數（`ke_learned` = `{itemId: {at, score:"4/5"}}`，畫面顯示台北時間），可按「取消」移除。學習頁可篩選 全部／已學會／未學會／可以按學會了；家長頁「學會紀錄」表有分數欄（舊紀錄顯示「—」）。itemId 例：`word:apple`、`root:un`、`grammar:be`、`pattern:lets`。
- 打字題判分：不分大小寫、空白合併、句尾 .!? 不計、彎引號視同直引號；`typed` 可加 `alts`（例如 `["I'm a student."]`）接受其他正確寫法。答錯會標出第一個不一樣的字。


## 裝置同步（iPad ↔ 電腦）

家長頁「☁️ 裝置同步」：第一台按「產生同步碼」（像 `ABCD-EFGH`），另一台輸入同一組碼或打開同步連結（`https://yoda-wcyc.github.io/Kids-Station/#sync=ABCD-EFGH`），兩台的紀錄就自動合在一起。不用帳號。

- **會同步**：作答紀錄（`ke_log`）、學會紀錄（`ke_learned`）、錯題庫（`ke_mistakes`）。題組進度、能不能按「學會了」都從合併後的作答紀錄算，所以也會一起同步。語音速度等設定**不**同步。
- **什麼時候**：打開網站、切回這個分頁、做完一回合、按學會了／取消、任何變動後約 3 秒。沒網路就記下來，下次再同步。只有內容真的不一樣才上傳。
- **合併規則**（`syncmerge.js`，純函式）：每筆作答有固定 id（舊紀錄用「時間｜題號｜答案」的雜湊補，兩台算出來一樣），依 id 聯集；學會紀錄每個項目「最新的事件」勝，取消會留墓碑 `{removedAt}`，所以取消會傳到別台、不會被救回；錯題每題「更新時間 u」最新的勝，畢業也留墓碑。合併可以重複做、順序不影響結果。
- **大小上限**：一份同步資料最多 1 MB；作答紀錄超過約 500 KB 時，最舊的會壓成每題一筆（保留「第一次答對的時間」），解鎖狀態不變，只是很舊的逐題紀錄不再保留。
- **隱私**：拿到同步碼的人都看得到練習紀錄（只有練習資料，沒有姓名等個人資料），不要公開分享。「取消同步」只是讓這台不再同步，這台的紀錄會留著。
- **後端**：獨立的 Vercel 專案 `kids-sync`（https://kids-sync.vercel.app/api/sync，原始碼在 `G:\Yoda x Claude\_deploy\kids-sync\`），只用自己的 Blob store `kids-sync-store`。要換後端只改 `sync.js` 裡的 `backend`（create/get/put）。
- **測試**：`node test/smoke.js`（含合併規則）；`node test/live-sync.js`（要網路：兩台假裝置對線上 API 同步、確認收斂）。

## 單字庫（1215 字）

- 來源：**十二年國教課綱 英語文（國家教育研究院）附錄五 參考字彙表 表一「基本 1,200 字」**（官方 PDF 逐字解析，共 1,211 個詞條）。全部標 `src:"moe1200"`；原本 240 字裡不在表內的 4 個（giraffe、panda、kangaroo、dumpling）標 `src:"extra"`（補充字）。官方的 noodle 用原有的 noodles。
- 等級：lv1 387／lv2 423／lv3 405。主題 tag 見 `engine.js` 的 `TAGS`（新增 clothing、transport、sport、job、house、feeling、nature、function、people、thing、holiday）。
- 撞名的字（May／may、Miss／miss）在資料裡寫 `id`（`may-month`、`miss-title`），題號才不會重複。例句裡用的是變化形時寫 `form`。
- 單字卡頁一頁 40 張、可搜尋英文或中文；進度與篩選都以全部 1215 字計算。

## 新增單字（含課本單字）

在 `data/words.js` 的陣列裡加一行（記得前一行結尾要有逗號）：

```js
{w:"pumpkin",ipa:"/ˈpʌmpkɪn/",pos:"n",zh:"南瓜",lv:2,tags:["food"],ex:"We make pumpkin soup.",exZh:"我們煮南瓜湯。",src:"textbook-4A-L3"},
```

- `src`：來源。教育部字彙是 `"moe"`；課本單字用 `"textbook-4A-L3"`（冊別-課次）。只要出現第二種來源，單字卡頁和練習頁就會出現「來源」篩選。
- `tags` 第一個是主題：animal food color number family school body weather place time verb adj（也可以自訂新的英文 tag，會直接顯示英文）。
- `zh` 不可以和別的字完全相同（避免選擇題出現兩個一樣的中文）。
- 改完跑 `node test/smoke.js`，看到 `OK` 就好。

文法題：`fill` 的答案 `a` 一定要在 `opts`（4 個不重複）裡；`fix` 給 `wrong`、`right`、`why`。字根的 `parts` 合起來要等於單字。

## 部署

正本在 `G:\Yoda x Claude\小朋友學習站\`（Google Drive 鏡像夾，不在這裡跑 git）。
部署副本在 `G:\Yoda x Claude\_deploy\Kids-Station\`：

1. 在正本跑 `python deploy_copy.py`：複製到部署副本（覆蓋），`game\scratch-td\` 只帶 `web\`（不帶 `_build\`、.md、中文檔名正本）。部署夾多出來的舊檔它只會列出來，要刪就在部署夾 `git rm`。部署版 `index.html` 的 .js/.css 會自動加 `?v=時間戳`，避免 iPad 用到快取的舊檔。
2. 在部署副本跑 `node test/smoke.js`，再 `git add -A`、`git commit`、`git push`。
3. GitHub Pages（main 分支根目錄）約 1 分鐘後更新。
