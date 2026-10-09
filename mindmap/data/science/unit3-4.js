/* 自然科（五年級上）心智圖資料：單元三〈水溶液〉、單元四〈力與運動〉
 * 規則同 unit1-2.js；格式見 ../FORMAT.md。
 * - 單元四「摩擦力小時較省力」與「摩擦力大時較費力」兩格都連到「生活中摩擦力的應用」→ 用 links 畫第二條（多父節點）。
 * - verify:true＝講義原文看得清楚但字面可疑（例：「相同單位時的速度比較」疑似少「間」），等對照課本後拿掉。
 */
window.DATA_SCIENCE = window.DATA_SCIENCE || { units: [], alts: {} };
(function (S) {
  Object.assign(S.alts, {
    "愈長": ["越長"],
    "愈大": ["越大"],
    "都不變色": ["不變色", "都不變"],
    "變紅色": ["變紅"],
    "變藍色": ["變藍"],
    "偏紫色": ["紫色", "偏紫"],
    "偏紅色": ["紅色", "偏紅"],
    "偏藍色": ["藍色", "偏藍"],
    "偏綠色": ["綠色", "偏綠"],
    "不變": ["不會變", "沒有變", "不會改變"]
  });

  S.units.push({
    id: "n3", no: 3, title: "水溶液", keys: ["水溶液"],
    lessons: [
      { id: "n3-a", title: "溶解現象", keys: ["溶解"], children: [
        { id: "n3-a1", rel: "操作", title: "物質溶解在水中", keys: ["溶解", "水"], children: [
          { id: "n3-a1a", rel: "發現", title: "溶解前和溶解後，總重量都不變", keys: ["總重量", "不變"],
            cands: [{ w: "總重量", core: true }, { w: "不變", core: true }], children: [
            { id: "n3-a1a1", title: "把水分蒸發掉，會變回原來的物質", keys: ["蒸發"],
              cands: [{ w: "蒸發", core: true }, { w: "原來的物質" }] }
          ] }
        ] }
      ] },
      { id: "n3-b", title: "水溶液的酸鹼性", keys: ["酸鹼"], children: [
        { id: "n3-b1", rel: "觀察", title: "各種水溶液不相同", keys: ["不相同"], children: [
          { id: "n3-b1a", rel: "發現", title: "由兩種以上的物質混合成的東西", keys: ["兩種以上", "混合"],
            cands: [{ w: "兩種以上", core: true }, { w: "混合" }], children: [
            { id: "n3-b1a1", title: "混合物", keys: ["混合物"], cands: [{ w: "混合物", core: true }] }
          ] }
        ] },
        { id: "n3-b2", rel: "使用", title: "利用石蕊試紙檢驗", keys: ["石蕊"], children: [
          { id: "n3-b2a", rel: "觀察", title: "紅色、藍色石蕊試紙都不變色", keys: ["不變色"],
            cands: [{ w: "都不變色", core: true }], children: [
            { id: "n3-b2a1", rel: "發現", title: "中性", keys: ["中性"], cands: [{ w: "中性", core: true }] }
          ] },
          { id: "n3-b2b", rel: "觀察", title: "藍色石蕊試紙變紅色，紅色石蕊試紙不變色", keys: ["藍", "變紅"],
            cands: [{ w: "變紅色", core: true }, { w: "藍色" }], children: [
            { id: "n3-b2b1", rel: "發現", title: "酸性", keys: ["酸性"], cands: [{ w: "酸性", core: true }] }
          ] },
          { id: "n3-b2c", rel: "觀察", title: "紅色石蕊試紙變藍色，藍色石蕊試紙不變色", keys: ["紅", "變藍"],
            cands: [{ w: "變藍色", core: true }, { w: "紅色" }], children: [
            { id: "n3-b2c1", rel: "發現", title: "鹼性", keys: ["鹼性"], cands: [{ w: "鹼性", core: true }] }
          ] }
        ] },
        { id: "n3-b3", rel: "使用", title: "利用紫色高麗菜汁檢驗", keys: ["高麗菜"], children: [
          { id: "n3-b3a", rel: "觀察", title: "加進水溶液後，顏色偏紫色", keys: ["紫"],
            cands: [{ w: "偏紫色", core: true }], children: [
            { id: "n3-b3a1", rel: "發現", title: "中性", keys: ["中性"], cands: [{ w: "中性", core: true }] }
          ] },
          { id: "n3-b3b", rel: "觀察", title: "加進水溶液後，顏色偏紅色", keys: ["紅"],
            cands: [{ w: "偏紅色", core: true }], children: [
            { id: "n3-b3b1", rel: "發現", title: "酸性", keys: ["酸性"], cands: [{ w: "酸性", core: true }] }
          ] },
          { id: "n3-b3c", rel: "觀察", title: "加進水溶液後，顏色偏藍色或偏綠色", keys: ["藍", "綠"],
            cands: [{ w: "偏藍色", core: true }, { w: "偏綠色", core: true }], children: [
            { id: "n3-b3c1", rel: "發現", title: "鹼性", keys: ["鹼性"], cands: [{ w: "鹼性", core: true }] }
          ] }
        ] }
      ] },
      { id: "n3-c", title: "水溶液的導電性", keys: ["導電"], children: [
        { id: "n3-c1", title: "有的水溶液容易導電，有的不容易導電", keys: ["導電"],
          cands: [{ w: "容易導電", core: true }, { w: "不容易導電" }] }
      ] }
    ],
    quiz: [
      { type: "match", q: "用石蕊試紙檢驗：把看到的結果和酸鹼性配起來。", pairs: [["藍色石蕊試紙變紅色", "酸性"], ["紅色石蕊試紙變藍色", "鹼性"], ["紅、藍色石蕊試紙都不變色", "中性"]],
        why: "酸性讓藍色試紙變紅；鹼性讓紅色試紙變藍；中性兩種都不變。" },
      { type: "match", q: "用紫色高麗菜汁檢驗：把顏色和酸鹼性配起來。", pairs: [["顏色偏紅色", "酸性"], ["顏色偏紫色", "中性"], ["顏色偏藍色或偏綠色", "鹼性"]],
        why: "紫色高麗菜汁遇酸偏紅、遇鹼偏藍綠，中性還是紫色。" },
      { type: "mc", q: "藍色石蕊試紙沾到一杯水溶液後變成紅色，這杯是什麼性質？", opts: ["酸性", "鹼性", "中性", "看不出來"], a: 0,
        why: "藍色石蕊試紙變紅色，表示是酸性。" },
      { type: "mc", q: "加了紫色高麗菜汁以後變成綠色，這杯水溶液是？", opts: ["鹼性", "酸性", "中性", "混合物"], a: 0,
        why: "顏色偏藍色或偏綠色，表示是鹼性。" },
      { type: "tf", q: "紅色和藍色石蕊試紙都沒有變色，表示這杯水溶液是中性。", a: true,
        why: "兩種石蕊試紙都不變色＝中性。" },
      { type: "mc", q: "下面哪一種方法可以檢驗水溶液的酸鹼性？", opts: ["滴紫色高麗菜汁", "用放大鏡看", "用彈簧秤量", "放在太陽下曬"], a: 0,
        why: "石蕊試紙和紫色高麗菜汁都可以檢驗酸鹼性。" },
      { type: "tf", q: "糖溶解在水裡以後就不見了，所以總重量會變輕。", a: false,
        why: "溶解前後的總重量不變，糖只是溶在水裡。" },
      { type: "tf", q: "把食鹽水的水分蒸發掉，會再看到食鹽。", a: true,
        why: "水分蒸發後，會變回原來的物質。" },
      { type: "order", q: "做「溶解前後重量」的實驗，步驟排排看。", items: ["先秤水和糖加起來的總重量", "把糖放進水裡攪拌到溶解", "再秤一次，發現總重量沒有改變"],
        why: "先秤 → 溶解 → 再秤，比一比：溶解前後總重量不變。" },
      { type: "mc", q: "由兩種以上物質混合而成的東西叫做什麼？", opts: ["混合物", "指示劑", "介質", "養分"], a: 0,
        why: "兩種以上的物質混在一起，就是混合物。" },
      { type: "tf", q: "所有的水溶液都很容易導電。", a: false,
        why: "有些水溶液容易導電，有些不容易導電。" }
    ]
  });

  S.units.push({
    id: "n4", no: 4, title: "力與運動", keys: ["力", "運動"],
    lessons: [
      { id: "n4-a", title: "力的測量", keys: ["測量"], children: [
        { id: "n4-a1", rel: "觀察", title: "生活中的力", keys: ["生活", "力"], children: [
          { id: "n4-a1a", rel: "推論", title: "接觸力與非接觸力", keys: ["接觸力", "非接觸力"],
            cands: [{ w: "接觸力" }, { w: "非接觸力", core: true }], children: [
            { id: "n4-a1a1", rel: "了解", title: "地球上有重力", keys: ["重力"], cands: [{ w: "重力", core: true }] }
          ] }
        ] },
        { id: "n4-a2", rel: "觀察", title: "測量力的大小", keys: ["測量", "大小"], children: [
          { id: "n4-a2a", rel: "使用", title: "用彈簧秤來測量", keys: ["彈簧秤"], cands: [{ w: "彈簧秤", core: true }], children: [
            { id: "n4-a2a1", rel: "發現", title: "用的力量愈大，彈簧就被拉得愈長", keys: ["大", "長"],
              cands: [{ w: "愈長", core: true }, { w: "愈大" }] }
          ] }
        ] },
        { id: "n4-a3", rel: "觀察", title: "力的平衡", keys: ["平衡"], children: [
          { id: "n4-a3a", rel: "驗證", title: "兩個力平衡的時候，物體會保持靜止", keys: ["平衡", "靜止"],
            cands: [{ w: "靜止", core: true }, { w: "平衡" }], children: [
            { id: "n4-a3a1", rel: "了解", title: "兩個力的大小相同", keys: ["大小相同"], cands: [{ w: "大小相同", core: true }] },
            { id: "n4-a3a2", rel: "了解", title: "兩個力的方向相反", keys: ["方向相反"], cands: [{ w: "方向相反", core: true }] }
          ] }
        ] }
      ] },
      { id: "n4-b", title: "摩擦力", keys: ["摩擦力"], children: [
        { id: "n4-b1", rel: "發現", title: "摩擦力的大小", keys: ["摩擦力", "大小"], children: [
          { id: "n4-b1a", rel: "驗證", title: "摩擦力大的時候，比較費力", keys: ["大", "費力"],
            cands: [{ w: "費力", core: true }], children: [
            { id: "n4-b1a1", rel: "應用", title: "生活中摩擦力的應用", keys: ["摩擦力", "應用"] }
          ] },
          { id: "n4-b1b", rel: "驗證", title: "摩擦力小的時候，比較省力", keys: ["小", "省力"],
            cands: [{ w: "省力", core: true }] }
        ] }
      ] },
      { id: "n4-c", title: "運動狀態的快慢", keys: ["運動", "快慢"], children: [
        { id: "n4-c1", title: "速度的快慢", keys: ["速度", "快慢"], children: [
          { id: "n4-c1a", rel: "推論", title: "時間相同就比距離，距離相同就比時間", keys: ["比距離", "比時間"],
            cands: [{ w: "比距離", core: true }, { w: "比時間", core: true }] }
        ] },
        { id: "n4-c2", title: "運動速度", keys: ["速度"], children: [
          { id: "n4-c2a", rel: "推論", title: "在相同單位時比較速度", keys: ["相同單位"], verify: true,
            cands: [{ w: "相同單位", core: true }] }
        ] },
        { id: "n4-c3", rel: "觀察", title: "認識動能", keys: ["動能"], children: [
          { id: "n4-c3a", rel: "推論", title: "同一個物體速度愈大，動能就愈大；能量可以互相轉換，總能量維持不變，叫做能量守恆", keys: ["動能", "守恆"],
            cands: [{ w: "能量守恆", core: true }, { w: "動能", core: true }, { w: "轉換" }, { w: "總能量" }] }
        ] }
      ] }
    ],
    links: [ { from: "n4-b1b", to: "n4-b1a1", rel: "應用" } ],
    quiz: [
      { type: "mc", q: "要測量力的大小，可以用哪一種工具？", opts: ["彈簧秤", "溫度計", "量角器", "放大鏡"], a: 0,
        why: "彈簧秤可以用來測量力的大小。" },
      { type: "tf", q: "用彈簧秤時，拉的力量愈大，彈簧被拉得愈長。", a: true,
        why: "力量愈大，彈簧會被拉得愈長。" },
      { type: "match", q: "把力和生活中的例子配起來。", pairs: [["接觸力", "用手推開門"], ["非接觸力", "磁鐵隔一段距離吸住迴紋針"], ["重力", "放開手，球會掉到地上"]],
        why: "要碰到才有作用的是接觸力；不用碰到也有作用的是非接觸力；地球上有重力。" },
      { type: "mc", q: "一個物體被兩個力拉著卻沒有動，這兩個力是什麼關係？", opts: ["大小相同、方向相反", "大小不同、方向相同", "大小相同、方向相同", "大小不同、方向相反"], a: 0,
        why: "力平衡時物體靜止：兩個力大小相同、方向相反。" },
      { type: "tf", q: "摩擦力小的時候，推東西會比較費力。", a: false,
        why: "摩擦力小比較省力，摩擦力大才比較費力。" },
      { type: "mc", q: "鞋底做出凹凸的花紋，下雨天比較不會滑倒，這是利用什麼？", opts: ["增加摩擦力", "減少摩擦力", "減少重力", "增加彈力"], a: 0,
        why: "凹凸花紋讓摩擦力變大，比較不容易滑。" },
      { type: "mc", q: "兩個人跑一樣長的距離，要怎麼比誰比較快？", opts: ["比時間", "比距離", "比身高", "比步數"], a: 0,
        why: "距離相同就比時間，花的時間愈少愈快。" },
      { type: "match", q: "把比較的方法配起來。", pairs: [["跑的時間相同", "比距離，跑得遠的比較快"], ["跑的距離相同", "比時間，用的時間少的比較快"], ["同一個物體速度變大", "動能變大"]],
        why: "時間相同比距離、距離相同比時間；同一物體速度愈大，動能愈大。" },
      { type: "order", q: "三個人都跑 50 公尺，從最快排到最慢。", items: ["花 8 秒的小明", "花 10 秒的小華", "花 12 秒的小美"],
        why: "距離一樣，花的時間愈少跑得愈快。" },
      { type: "tf", q: "能量可以互相轉換，但是總能量會保持不變。", a: true,
        why: "這就是能量守恆。" },
      { type: "tf", q: "同一個物體跑得愈快，動能就愈小。", a: false,
        why: "同一物體速度愈大，動能愈大。" }
    ]
  });
})(window.DATA_SCIENCE);
