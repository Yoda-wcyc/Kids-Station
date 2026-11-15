/* gept/vocab/names.js — 三級共用的「允許專有名詞」：常見人名、臺灣地名、常見國家／城市／語言。
   不在這裡的專有名詞（自編店名、學校名…）寫在該組的 names:[…]（gept/CONTRACT.md §4）。只給檢查工具用，頁面不載。
   規則：不寫具體真人（名人、政治人物、網紅）；人名只用常見名（Amy、Ben、Mr. Lin）。 */
(function (V) {
  V.names = [
    // 英文名（常見、不指涉特定人物）
    'Alan', 'Alice', 'Amy', 'Andy', 'Anna', 'Ben', 'Betty', 'Bill', 'Bob', 'Cathy', 'Chris', 'Cindy', 'Daniel', 'David', 'Dennis', 'Emily', 'Emma', 'Eric', 'Frank', 'Gary',
    'Grace', 'Helen', 'Henry', 'Ivy', 'Jack', 'Jane', 'Jason', 'Jenny', 'Jerry', 'Jessica', 'Jim', 'Joe', 'John', 'Judy', 'Julia', 'Karen', 'Kate', 'Kelly', 'Kevin', 'Kim',
    'Leo', 'Lily', 'Linda', 'Lisa', 'Lucy', 'Mark', 'Mary', 'Max', 'Mia', 'Mike', 'Nancy', 'Nick', 'Nina', 'Oliver', 'Paul', 'Peter', 'Rachel', 'Ray', 'Rose', 'Ryan',
    'Sally', 'Sam', 'Sandy', 'Sara', 'Sarah', 'Sophie', 'Steve', 'Sue', 'Susan', 'Ted', 'Tim', 'Tina', 'Tom', 'Tony', 'Vicky', 'Wendy', 'Will', 'Zoe',
    // 華人姓氏／名字（羅馬拼音）
    'Chang', 'Chen', 'Cheng', 'Chou', 'Hsu', 'Huang', 'Kao', 'Ko', 'Kuo', 'Lai', 'Lee', 'Li', 'Liao', 'Lin', 'Liu', 'Lu', 'Tsai', 'Wang', 'Wu', 'Yang', 'Yeh', 'Yu',
    'Mei', 'Ming', 'Hao', 'Yi', 'Wei', 'Jun', 'Ting', 'Hui',
    // 臺灣地名、景點（一般地名，不是店家）
    'Taipei', 'Taichung', 'Kaohsiung', 'Tainan', 'Hualien', 'Taitung', 'Yilan', 'Keelung', 'Hsinchu', 'Taoyuan', 'Chiayi', 'Pingtung', 'Nantou', 'Miaoli', 'Changhua',
    'Yunlin', 'Penghu', 'Kinmen', 'Matsu', 'Alishan', 'Kenting', 'Jiufen', 'Tamsui', 'Sun', 'Moon', 'Lake', 'Yangmingshan', 'Taroko', 'Xinyi', 'Ximending',
    // 國家、城市、語言、民族
    'Taiwan', 'Taiwanese', 'Japan', 'Japanese', 'Tokyo', 'Osaka', 'Kyoto', 'Korea', 'Korean', 'Seoul', 'China', 'Chinese', 'Hong', 'Kong', 'Singapore', 'Thailand', 'Thai', 'Bangkok',
    'Vietnam', 'Vietnamese', 'India', 'Indian', 'Malaysia', 'Indonesia', 'Philippines', 'Canada', 'Canadian', 'Australia', 'Australian', 'England', 'English', 'British', 'Britain',
    'London', 'France', 'French', 'Paris', 'Germany', 'German', 'Italy', 'Italian', 'Rome', 'Spain', 'Spanish', 'Europe', 'European', 'Asia', 'Asian', 'Africa', 'African',
    'America', 'American', 'USA', 'US', 'U.S.', 'New', 'York', 'California', 'Mexico', 'Brazil', 'Egypt', 'Greece', 'Russia', 'Sweden', 'Finland', 'Netherlands', 'Dutch',
    'Switzerland', 'Swiss', 'Zealand', 'Pacific', 'Atlantic', 'Mars', 'Earth',
    // 常見機構簡稱、星期月份以外的固定名稱
    'MRT', 'HSR', 'NT', 'NTD', 'OK', 'TV', 'PE', 'DVD', 'ID', 'Wi-Fi', 'Wifi', 'Internet', 'Christmas', 'Halloween', 'Easter', 'Thanksgiving', 'Valentine', 'Mid-Autumn', 'Dragon', 'Boat', 'Festival', 'Lantern'
  ];
})(typeof module !== 'undefined' ? module.exports : ((window.GEPT_VOCAB = window.GEPT_VOCAB || {})));
