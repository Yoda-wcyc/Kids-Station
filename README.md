# 小朋友學習站（repo：kids-english）

給國小孩子（iPad Safari 優先）的多科目學習網站。純 HTML/CSS/JS，不用安裝、不連網路，直接開 `index.html` 也能用（file://）。

## 科目

```
頂端科目列（subjects.js / subjects.css，記住上次的科目：ke_settings.subject）
├─ 國語   #s/chinese   準備中
├─ 數學   #s/math      活動卡片
│    └─ 天平解方程式  #s/math/balance → iframe 開 math/balance.html
├─ 社會   #s/social    準備中
├─ 自然   #s/science   準備中
├─ 英文   #home 等原本路由（app.js，預設科目）
├─ AI     #s/ai        活動卡片
│    ├─ AI 會唬爛     #s/ai/hallucinate → ai/hallucinate.html
│    ├─ 怎麼問得好    #s/ai/ask-well    → ai/ask-well.html
│    └─ 秘密不能說    #s/ai/secrets     → ai/secrets.html
└─ 遊戲   #s/game      活動卡片
     └─ Scratch 塔防（7 堂課） #s/game/scratch-td → game/scratch-td/web/index.html
```

活動卡片定義在 `subjects.js` 的 `ACTS`（新增活動＝加一筆 `{id,title,desc,icon,src}`）。點卡片後頁面用 iframe 開在科目列下方，上面有「← 回某科」。

### 正本位置（2026-10-05 起，小朋友學AI 系列已退場，以下就是正本，直接改）

| 內容 | 正本 | 網站上的檔案 |
|---|---|---|
| 天平解方程式 | `math\balance.html` | 同一支 |
| AI 三頁 | `ai\hallucinate.html`、`ai\ask-well.html`、`ai\secrets.html` | 同一支 |
| Scratch 塔防 | `game\scratch-td\`：`_build\`（產生器與驗證）、`積木腳本規格.md`、中文檔名講義與 .sb3 | `game\scratch-td\web\`（ASCII 檔名，由 `_build\gen_handout.py` 產生，不要手改） |

Scratch 塔防重做：在 `game\scratch-td\_build\` 依序跑 `python build_sb3.py`（.sb3＋規格）、`python check_consistency.py`、`node validate.js <裝有 scratch-parser、jszip 的資料夾>`、`python gen_handout.py`（講義＋web\）。細節見 `_build\驗證報告.md`。

遊戲庫（game repo）已不放單獨的天平或英文頁，只有一張「小朋友學習站」卡片連到本站。

線上版：https://yoda-wcyc.github.io/kids-english/

## 結構

```
index.html        單頁殼（hash 路由：#home #learn/... #practice #quiz #result #mistakes #bank #parent）
style.css         樣式（淺色、大按鈕）
engine.js         題目引擎：不碰 DOM，瀏覽器與 Node 共用（window.KE / module.exports）
app.js            畫面、路由、localStorage、語音（speechSynthesis / SpeechRecognition）
data/words.js     單字 window.DATA_WORDS
data/roots.js     字首字尾字根 window.DATA_ROOTS
data/grammar.js   文法 12 主題 window.DATA_GRAMMAR
data/patterns.js  句型 12 個 window.DATA_PATTERNS
test/smoke.js     node test/smoke.js（檢查資料格式、每種題型各出 30 題、各科活動檔案都在）
subjects.js/.css  科目列與活動卡片、iframe
math/ ai/ game/   其他科目的活動頁（見上方「正本位置」）
deploy_copy.py    正本 → 部署夾的複製（含排除規則）
```

紀錄存在瀏覽器 localStorage：`ke_progress`、`ke_mistakes`、`ke_settings`、`ke_log`、`ke_learned`。家長頁可以匯出／匯入 JSON 備份（含學會紀錄）。

「學會了」：單字、字根、文法、句型四個學習頁的每張卡片都有「👍 學會了」按鈕，按下記錄時間（`ke_learned` = `{itemId: {at}}`，ISO 時間，畫面顯示台北時間），可按「取消」移除。學習頁可篩選 全部／已學會／未學會，家長頁有「學會紀錄」表。itemId 例：`word:apple`、`root:un`、`grammar:be`、`pattern:lets`。


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

正本在 `G:\Yoda x Claude\小朋友學英文\`（Google Drive 鏡像夾，不在這裡跑 git）。
部署副本在 `G:\Yoda x Claude\_deploy\kids-english\`：

1. 在正本跑 `python deploy_copy.py`：複製到部署副本（覆蓋），`game\scratch-td\` 只帶 `web\`（不帶 `_build\`、.md、中文檔名正本）。部署夾多出來的舊檔它只會列出來，要刪就在部署夾 `git rm`。
2. 在部署副本跑 `node test/smoke.js`，再 `git add -A`、`git commit`、`git push`。
3. GitHub Pages（main 分支根目錄）約 1 分鐘後更新。
