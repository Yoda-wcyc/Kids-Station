# 全民英檢準備區：題目資料契約（寫題的人看這份＋SPEC.md 就夠）

```
gept/
  SPEC.md            官方規格（題型、題數、時間、計分、通過標準、來源、未確認項）
  CONTRACT.md        本檔
  gept-core.js       規格常數（PARTS／LIM）＋檢查規則＋計分（純函式，頁面與 Node 共用）
  gept-tts.js        語音（speechSynthesis en-US，男女聲）
  gept.js、gept.css  畫面（首頁、題型練習、模擬考、寫作口說）
  index.html  practice.html  mock.html  task.html  words.html（中高級單字）
  vocab/             檢查用詞表（教育部 2000、初級補充字 e-extra、CEFR-J、Octanove C1、專有名詞）
  data/catalog.js    題目清單（工具產生，不要手改）
  data/<級>/<部分>-<nn>.js   一檔一組 ← 作者只寫這裡
  tools/check.js     檢查工具
```

## 1. 檔案與 id（上線後不改）

- 級別代號：`e` 初級、`i` 中級、`a` 高級。部分代號：聽力 `L1`～`L4`、閱讀 `R1`～`R3`、寫作 `W1` `W2`、口說 `S1`～`S3`、模擬考 `M`（各級有哪些部分見 SPEC.md／`gept-core.js` `PARTS`）。
- **一檔一組**：`gept/data/<級>/<部分>-<nn>.js`，例 `gept/data/e/L1-03.js`、`gept/data/i/M-02.js`。組 id ＝ `<級>-<部分>-<nn>`（`e-L1-03`），檔名一定跟 id 一致。
- 題目 id：一般組 `<組id>-<題號兩位數>`，題號從 01 照順序（題組裡的小題也接著編，不重來）：`e-R3-01-01` … `e-R3-01-12`。
  模擬考 `<組id>-<部分>-<題號>`：`e-M-01-L1-01` … `e-M-01-R3-12`。
- **id 上線後不改、不重用**（錯題庫、成績紀錄都靠 id）。內容寫錯要修可以改文字，但答案意思要改就換新組號、舊組刪掉要先問家長。
- 檔案格式（照抄外框，只換內容）：

```js
/* e-L2-01 問答 第 1 組（作者、日期） */
(window.GEPT_SETS = window.GEPT_SETS || []).push({
  id: 'e-L2-01',
  title: '問答 1',          // 選填：畫面上的組名
  names: ['Kenting'],       // 選填：這組用到、但不在 vocab/names.js 的專有名詞
  extra: [],                // 選填：表外字（初級不准；中級每組 ≤ 6 個；高級占全部字數 ≤ 3%）
  items: [ /* 見 §3 */ ]
});
```

## 2. 平行寫題的分工規則（不互相衝突）

- 一個作者只碰**自己分到的檔名**（例：作者 A 負責 `e/L1-02`～`e/L1-10`、`e/L2-02`～`e/L2-10`）。不要改 `gept-core.js`、`gept.js`、`vocab/`、別人的檔。
- `data/catalog.js` 是工具產生的：寫完跑 `node gept/tools/check.js --write`。合併時 catalog.js 衝突**不用手解**，合完再跑一次 `--write` 就好。
- 同一級的模擬考（`M-nn`）跟題型練習組**不能出同一題、同一篇文章**（考前要沒看過）。同一作者寫模擬考時，不要從練習組改寫。
- 要新增允許專有名詞：寫在自己那組的 `names`，不要改 `vocab/names.js`（那支由整合的人統一收）。

## 3. 各題型 schema

共通欄位：`spk` 說話的人 `'M'` 男聲／`'F'` 女聲／`'N'` 旁白；`a` 正解索引（0＝A、1＝B…）；`opts` 選項陣列（依官方數量：初級聽力 3 個、其他 4 個）。
**題號、"Question number 1" 這類播報不要寫**，模擬考由程式自動加。英文以外的欄位（`zh`、`points`、`prompt` 的中文說明）不檢查用字。

### 3.1 聽力

| kind（部分） | 一題的格式 | 說明 |
|---|---|---|
| `pic`（e-L1、i-L1） | `{id, pic:{e:'👧🏻🎹', t:'7:30'}, q:'What is the girl doing?', opts:['…','…','…'], a:1}` | `pic.e` 只放表情符號（排成場景，例「👦🏻🚲🌳☀️」）；`pic.t` 圖上的字（時間、價錢、招牌字，選填）。`opts` 是**播出來**的敘述，作答時不顯示。初級 `q` 可省略（官方初級是「聽題目和三個句子」，建議寫）；中級一定要 `q`。選項只能有一個符合圖。 |
| `resp`（e-L2、i-L2） | `{id, spk:'F', say:'Where is your brother?', opts:['…','…','…'], a:0}` | `say` 播出、`opts` 印出來。干擾選項：同字不同義、答非所問的時態／疑問詞。 |
| `dlg`（e-L3、i-L3） | `{id, lines:[['M','…'],['F','…'],['M','…']], q:'What will the boy do next?', opts:[…], a:2, chart:{cap:'Floor Guide', head:['Floor','Shop'], rows:[['1F','Food'],['2F','Books']]}}` | 對話初級 2～4 句、中級 2～6 句；要有男有女。`chart` 選填＝中級「整合聽讀」：印出來的表格，題目要同時用到聽到的和表上的資訊（每組建議 2～3 題有 chart）。 |
| `talk`（e-L4） | `{id, spk:'F', intro:'Listen to the teacher.', say:'…', q:'Where would you hear this?', pics:[{e:'🚆'},{e:'✈️'},{e:'🏥'}], a:1}` | 初級短文聽解的選項是 **3 張圖** `pics`（沒有 `opts`）。 |
| `talk`（i-L4） | `{id, spk:'M', intro:'Listen to the message.', say:'…', q:'…', opts:[4 個], a:3, chart?}` | 廣播、留言、導覽、廣告、氣象。 |
| `short`（a-L1） | 用 `lines`（對話）或 `say`＋`spk`（談話）＋`q`＋`opts`（4）＋`a` | 15 題約 2/3 對話、1/3 談話。 |
| `long`（a-L2、a-L3） | 題組 `{id:'a-L2-01-g1', intro:'Listen to a conversation between two colleagues about …', lines:[…]（L2）或 spk＋say（L3）, qs:[{id, q:'印出來的問題', opts:[4], a}, {id, q:'…', ans:['short answer','other accepted form']}]}` | 長度 250～650 字；`qs` 4～7 題；短答題用 `ans`（可接受答案，最多 8 字，列出常見寫法），每段至少 1 題短答。一組 L2＝2 段共 13 題、L3＝2 段共 12 題。 |

### 3.2 閱讀

| kind（部分） | 格式 | 說明 |
|---|---|---|
| `vocab`（R1） | `{id, s:'My sister ___ the piano every day.', opts:['plays','play','playing','played'], a:0}` | 空格寫 `___`；考字義為主、詞性／時態為輔；四個選項同詞性或同一字的不同形。 |
| `cloze`（R2） | 題組 `{id:'e-R2-01-g1', title:'A Letter to Grandma', text:'… [1] … [2] … [3] … [4] …', qs:[{id, opts:[4], a}, …]}` | `text` 每篇各自從 `[1]` 依序標（畫面自動換成題號，例如第二篇的 [1] 顯示成 5）；初級每篇 4 格、中級每篇 5 格（中級至少 1 格選項是整句或連接詞）。一組＝2 篇。 |
| `read`（R3、a-R2） | 題組 `{id:'e-R3-01-g1', texts:[{type:'ad', title:'Summer Sale', body:'…'}, {type:'email', from:'Amy', to:'Ben', title:'Re: Sale', body:'…'}], qs:[{id, q:'…', opts:[4], a}]}` | `type`：`ad` `notice` `email` `letter` `article` `story` `menu` `schedule` `chat` `table`。表格用 `table:{head, rows}`。初級 4 組共 12 題（每組 3 題，含至少 1 組「兩篇對照」）、中級 5 組共 15 題、高級精讀 4 組共 20 題。題目類型混合：細節、主旨、推論、「下列何者沒提到」、字義。 |
| `skim`（a-R1） | 1A／1B：`{id, type:'head', title, heads:['A …', …共 8～11 個], paras:['…', …≥ 7 段], ex:{p:0, h:4}, qs:[{id, p:段落索引, a:標題索引} ×6]}`；1C：`{id, type:'match', texts:[{title, body} ×3], qs:[{id, q:'Which passage mentions …?', a:0～2} ×8]}` | 一組 R1＝`[1A head, 1B head, 1C match]` 三個題組、共 20 題。`heads` 不要寫 A、B 代號（畫面自動加）。 |

### 3.3 寫作（不自動給分，家長照 `points` 評分）

| kind（部分） | 格式 |
|---|---|
| `wsent`（e-W1） | 15 題照順序：改寫 5 `{id, type:'rewrite', s1:'Mary went to the market.', frame:'When ________?', ans:['When did Mary go to the market?']}`、合併 5 `{id, type:'combine', s1:'…', s2:'…', frame:'(用 because) ________', ans:[…]}`、重組 5 `{id, type:'order', frame:'Could ________ please?', parts:['you','give me','an extra copy'], ans:['Could you give me an extra copy, please?']}`。`ans` 第一個是標準答案、其他是也算對的寫法；重組的 `parts`＋`frame` 的字要剛好組成 `ans[0]`（檢查工具會比對）。 |
| `write`（e-W2） | `{id, prompt:'請根據三張圖片，寫一篇約 50 字的短文，描述小明週末發生的事。', pics:[{e:'…'},{e:'…'},{e:'…'}], model:'約 50 字範文', points:['寫出三張圖的事情','時態一致（過去式）','…']}` |
| `write`（i-W1 中譯英） | `{id, prompt:'請將下面的中文翻成英文。', zh:'中文一段（約 3～5 句）', model:'英文範譯', points:[…]}` |
| `write`（i-W2 作文） | `{id, prompt:'題目與段落提示（中文或英文）', model:'約 120 字範文', points:[…]}` |
| `write`（a-W1 摘要） | `{id, prompt:'…', sources:[{title, author, body} ×2（每篇 ≤ 450 字）], model:'約 250 字', points:[…]}` |
| `write`（a-W2 圖表） | `{id, prompt:'…', charts:[{cap, head, rows} ×2], model:'約 250 字', points:[…]}` |

`points`＝家長評分要點（中文，3～6 條，對應官方評分重點）。範文字數要在題目字數的 0.8～1.4 倍。

### 3.4 口說（TTS 出題＋計時＋範例自評，不自動給分）

| kind（部分） | 格式 |
|---|---|
| `srepeat`（e-S1） | 5 題 `{id, say:'I like to read books.'}`（≤ 12 字；播兩次、不顯示，作答後才看） |
| `sread`（e-S2、i-S1） | 1 題 `{id, sents:['…' ×5]（初級才有）, passage:'初級 40～90 字／中級 80～170 字'}` |
| `sanswer`（e-S3、i-S2） | 初級 7 題、中級 10 題 `{id, say:'What do you usually do on weekends?', sec:15, sample:'範例回答'}`；中級第 6～10 題 `sec:30`。 |
| `spic`（i-S3） | 1 題 `{id, pic:{e:'…', t:'…'}, qs:['Where are the people?', 'What are they doing?', 'Do you like …? Why?'], sample:'…'}` |
| `sint`（a-S1～S3） | 1 題 `{id, prompt:'情境說明（可中文）', say:['考官問題', …]（S1 3～5 題）, sample:'範例回答', points:[…]}`；S3 的 `prompt` 寫申述題目。高級是多人面談，網站只能念題目＋計時。 |

## 4. 內容規則

1. **用字**：只用該級詞表（SPEC §6；初級＝教育部 2000＋`vocab/e-extra.js` 初級補充字）＋規則變化形＋允許的專有名詞／數字／時間。初級**零表外字**；中級每組 `extra` ≤ 6；高級 ≤ 3%。檢查工具不認的字＝換一個字，不要硬加 `extra`。
2. **長度**：照 `gept-core.js` `LIM`（SPEC §5）。初級一句 ≤ 20 字、大部分 8～15 字。
3. **選項**：數量照官方；只能有一個正解；干擾選項要「看起來可能、但有明確理由錯」（同音、相關字、時態、聽到的字但意思不對），不要出搞笑或明顯無關的選項；選項長度相近，正解不要老是最長的。
4. **答案分布**：每組每個字母都要當過答案、單一字母不超過平均 1.6 倍＋1、不能連 4 題同一個（檢查工具會擋）。
5. **情境**：台灣小孩、家庭、學校、補習班、夜市、捷運、便利商店、節日為主；中級加打工、社團、旅遊、公共場所；高級可用社會、科學、文化議題（避免政治、宗教爭議、暴力、成人內容）。
6. **不寫具體真人**（名人、政治人物、網紅、真實店家品牌），人名用 `vocab/names.js` 裡的常見名。
7. **原創**：官方樣題、練習題、歷屆題、補習班題本**一律不准照抄或改寫**（換字改寫也不行），只能參考格式與長度。
8. **程度**：初級照 [PE] 的難度——一題一個重點、不繞彎；中級可以推論、需要整合兩篇或圖表；高級照官方學術／專業程度。

## 5. 語音（聽力、口說）

- `gept-tts.js` 用瀏覽器 `speechSynthesis`（en-US）。`M`／`F` 各挑一個男聲／女聲（iPad：Aaron／Samantha 等；找不到就用同一個聲音、音高 0.8／1.25 區分），`N` 旁白。
- 播放次數照官方（`PARTS[lv][part].play`）：初級、中級、高級聽力 1 次；初級複誦、初中級口說回答問題 2 次（間隔 1.5 秒）。
- 速度：初級 0.9、中級 1.0、高級 1.0（官方沒有公布語速，本站訂）。
- 作答時**不顯示文字稿**；作答後（練習）或交卷後（模擬考）才能看文字稿、重聽。
- 不要在文字裡寫給語音看的標記（括號說明、表情符號）；數字直接寫 `7:30`、`NT$120`、`3rd`、`1990s`，語音會念。檢查工具放行：`cannot`、序數（fourth）、感嘆詞（oh、wow）、單一字母（Room B）、重音字母（café）。

## 6. 檢查工具

```
node gept/tools/check.js             # 全部檢查（catalog.js 不是最新也算錯）
node gept/tools/check.js e/L1-03     # 只檢查自己的檔（可多個；不比對 catalog）
node gept/tools/check.js --write     # 全部通過後更新 data/catalog.js（交件前一定要跑）
node gept/tools/check.js --lttc      # 參考：列出不在 LTTC 字表的字（只在家長電腦有本機字表時）
node test/gept.test.js               # 單元測試＋全部題目檢查（網站測試的一部分，失敗就擋部署）
```

檢查內容：id／檔名／題號、題數與題組數、選項數與重複、正解索引、答案分布、句長／篇長／範文字數、表外字（列出位置）、全站 id 不重複、catalog 最新。`⚠` 是提醒（不擋），`✗` 是錯誤（要改到 0）。

## 7. 頁面怎麼用這些資料（給整合的人）

- `index.html?lv=e`：級別首頁；題型練習列表讀 `data/catalog.js`。
- `practice.html?set=e-L1-03`：一組題型練習（官方作答方式；作答後看文字稿與解答）。`practice.html?mistakes=1&lv=e`：錯題重練。
- `mock.html?set=e-M-01`：完整初試，聽力照官方次數自動播、不能重播，閱讀計時；交卷後模擬換算 120 分制、判斷通過。
- `task.html?set=e-W2-01`：寫作、口說（題目＋作答框或計時＋範文＋家長評分）。
- 一組題型練習（聽讀）或一份模擬考做完送學習幣「一輪」`practice_round` `english:gept`（後端 kids-2026-11-16-a 起白名單有）。`words.html?lv=i|a`＝中高級單字（聽發音＋聽寫）。
- 撞題：`check.js` 全站檢查會比對同級不同組的每一題／每一篇（同一句 ≥ 7 字、或 5-gram 重疊 ≥ 50%）＝錯誤；改練習組那一方。
- 紀錄：每題 `KidsCoins.answer(ok,'english')`、`KidsDaily.rec('english', ok)`；聽讀答錯進錯題庫 `kids_mistakes.gept`（id＝題目 id，p＝{u:級, pt:部分, s:題目短句}，連對 3 次畢業，未畢業最多 100 題）；成績存本機 `kids_gept`（不同步）。
