# 勇者島 · 美術方向（STYLE）

試玩版的所有美術都是程式畫的（`art.js` 裡的 inline SVG，加上 `style.css` 的顆粒疊層），不用外部圖檔。以後要換成 AI 生成的插畫，照這份來畫，風格才會一致。

## 一句話

Editorial flat geometric illustration，現代剪紙感：大片乾淨色塊、邊緣銳利、**完全沒有描邊**；只在陰影裡用同色系的噴槍漸層；整張畫面蓋一層細緻的印刷顆粒。

## 規則

| 項目 | 做法 |
|---|---|
| 色票 | 米白紙底 `#EFEBDD`（再深一階 `#E4DFCC`、`#D3CCB4`）；深綠 `#1F3D2B` → `#2F5A40` → `#5E8C6A` → 淺 `#9DB9A0`；近黑 `#151714`；唯一的暖色是紅 `#E0352B` |
| 紅色怎麼用 | 很省著用：被打中的閃光、稀有掉落（鑽石）、Boss 的眼睛、每個角色身上一個小點（書籤、劍柄、箭羽、盾徽）。感覺像參考圖機車尾燈的那一點紅光 |
| 形狀 | 大色塊、硬邊；沒有外框線。立體感只靠「同一個形狀再疊一層同色系 radial gradient」（`#hi-shade`） |
| 陰影 | 噴槍感：放射漸層＋模糊，只出現在陰影區（腳下的地影、物件背光面、路燈的光錐） |
| 顆粒 | `body::after` 的 SVG `feTurbulence` 雜訊，multiply 疊在最上層，透明度約 0.3；不要粗到像髒污 |
| 構圖 | 強烈斜線（道路從左下斜到右上）、大小對比（近大遠小的路燈）、留大片空白 |
| 文字 | 小小的黑色全大寫英文標題（像參考圖的「SALT ROAD」），字距放寬；中文標題大而粗 |
| 角色 | 小圓頭、細長的膠囊四肢、一大塊不對稱的身體、簡單的手（圓點）、黑色剪紙五官（兩點眼＋一條嘴）。**不要**Q 版大頭、不要動漫臉、不要亮面 3D |
| 招牌物件 | 每個職業都有一個超大的物件跟角色互動：法師抱著巨大的書＋羽毛筆、劍士拖著一把大劍、射手靠著比人還高的弓、守護者躲在大盾牌後面 |
| 夜晚 | 同一組綠變深（接近黑綠），路燈與窗戶變成唯一的光源（暖白＋淡綠光暈） |
| 字根洞窟 | 深綠黑底 `#0E1712`、石頭灰 `#3A423B`／`#6B7366`／`#8C9384`、火把的暖光池 `#F7C77E`；隧道往右下斜；紅色只留給危險（Boss 眼睛、Boss 牌子） |

## 給 AI 生圖用的提示詞（可重複使用）

把 `[主題]` 換成要畫的東西（角色、場景、物件）：

```
Editorial flat geometric illustration of [主題], modern cut-paper graphic style.
Large clean color blocks with crisp edges, absolutely no outlines or line art.
Soft airbrush shading only inside shadow areas, using same-hue radial gradients;
subtle, refined print-grain texture over the whole image (risograph-like noise).
Muted palette: warm cream paper background (#EFEBDD), deep forest greens
(#1F3D2B, #2F5A40, #5E8C6A, pale sage #9DB9A0), near-black (#151714),
and a single warm red accent (#E0352B) used very sparingly, like a glowing taillight.
Strong diagonal composition, big-small scale contrast, generous negative space,
a tiny black uppercase sans-serif title in one corner.
Characters: small round head, elongated capsule-shaped limbs, one large asymmetric
body block, simple round hands, black cut-paper facial features (two dots and a dash).
Each character interacts with one oversized signature object.
No cute chibi proportions, no anime, no glossy 3D, no gradients outside shadows,
no text other than the small title.
```

職業的補充句：

- 法師：`a mage hugging a giant open book, a huge quill rising diagonally behind`
- 劍士：`a swordsman dragging a huge sword behind him, its tip scraping the ground`
- 射手：`an archer leaning against a bow taller than herself`
- 守護者：`a guardian hiding behind a big shield, only the head peeking over`
- 場景：`a diagonal road at dusk with a row of tall curved street lamps casting soft green light cones, rounded bushes behind a thin white railing`

## 實作備註（不是美術，但要記得）

- 遊玩時間（未付費 10 分／付費會員 60 分）、家長延長與家長密碼，試玩版都只存在這台裝置：時間在 `hi_timer`、延長紀錄在 `hi_parent`，家長密碼是全站共用的 `ks_parent_pin`（加鹽 SHA-256，不存明碼；學習站「家長」頁也讀寫同一個）。
- **正式版一定要放到 kids-member 會員後端**（每個小朋友一份）：本機儲存小朋友自己清掉瀏覽器資料就重來了，擋不住。
- 試玩版的所有存檔都用 `hi_` 前綴；不碰學習站其他的鍵。
