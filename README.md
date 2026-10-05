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
└─ 英文   #home 等原本路由（app.js，預設科目）
```

`math/balance.html` 是天平正本 `G:\Yoda x Claude\小朋友學AI\數學-天平解方程式.html` 的副本，**不要手改**。
天平正本只要有改：照 kids-ai 的規則同步 `_deploy\kids-ai\`、`_deploy\game\` 之外，還要在這裡跑 `python sync_math.py`，再把 kids-english 複製到部署夾並 push。smoke 測試會檢查副本與正本一致。

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
test/smoke.js     node test/smoke.js（檢查資料格式、每種題型各出 30 題）
```

紀錄存在瀏覽器 localStorage：`ke_progress`、`ke_mistakes`、`ke_settings`、`ke_log`、`ke_learned`。家長頁可以匯出／匯入 JSON 備份（含學會紀錄）。

「學會了」：單字、字根、文法、句型四個學習頁的每張卡片都有「👍 學會了」按鈕，按下記錄時間（`ke_learned` = `{itemId: {at}}`，ISO 時間，畫面顯示台北時間），可按「取消」移除。學習頁可篩選 全部／已學會／未學會，家長頁有「學會紀錄」表。itemId 例：`word:apple`、`root:un`、`grammar:be`、`pattern:lets`。

## 遊戲庫單檔版

`python build_single.py` 會把 style.css、engine.js、app.js、data/*.js 內嵌成一支 HTML（只有英文：index.html 裡標了 `<!-- subjects -->` 的科目列、數學 iframe 都會拿掉），寫到遊戲庫正本 `G:\Yoda x Claude\game\英文-句型單字文法.html`（標題「英文-句型/單字/文法」，尾端加遊戲庫標配的角落簽名＋流量 beacon），同步到 `_deploy\game\`，並在遊戲庫 `index.html` 的 GAMES 登錄（已登錄就不重複加）。之後到 `_deploy\game\` commit＋push。
兩個網址（kids-english 與遊戲庫）localStorage 不互通，紀錄各自分開。

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

1. 把正本檔案複製到部署副本（覆蓋）。
2. 在部署副本 `git add -A`、`git commit`、`git push`。
3. GitHub Pages（main 分支根目錄）約 1 分鐘後更新。
