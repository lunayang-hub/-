
import { Activity } from './types';

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/4BHVX7SM4baYUadw7";

export const MAIN_ITINERARY: Activity[] = [
  {
    id: '1',
    time: '08:00',
    location: '三芝國中',
    description: '準時集合出發！記得上車前先買好飲料，車程較長建議先備好音樂。',
    category: 'travel',
    durationToNext: '約 1 小時 15 分'
  },
  {
    id: 'stop-hukou',
    time: '09:15',
    location: '湖口服務區 (北向)',
    description: '中途休息、伸展筋骨、上洗手間。雖然是去程但大家想去北向就去北向！',
    category: 'travel',
    durationToNext: '約 50 分鐘'
  },
  {
    id: '2',
    time: '10:30',
    location: '銅鑼蛋餅',
    description: '在地必吃特色早餐，推薦蛋餅加辣、排骨。口感紮實酥脆。',
    category: 'food',
    durationToNext: '約 25 分鐘'
  },
  {
    id: '3',
    time: '11:30',
    location: '莓有良心草莓園',
    description: '大湖採草莓體驗，挑選最甜美的紅寶石。記得避開踩踏草莓苗。',
    category: 'activity',
    durationToNext: '約 50 分鐘'
  },
  {
    id: '4',
    time: '13:30',
    location: '南庄老街 (可選)',
    description: '慢城氛圍，品嚐桂花釀、豬籠粄。桂花巷內隱藏許多美食。',
    category: 'food',
    durationToNext: '約 45 分鐘'
  },
  {
    id: '5',
    time: '14:30',
    location: '一口香餡餅',
    description: '苗栗市區熱門排隊小吃，肉汁豐富小心燙口。',
    category: 'food',
    durationToNext: '約 15 分鐘'
  },
  {
    id: '6',
    time: '15:30',
    location: '苗栗落羽松秘境',
    description: '享受秋冬浪漫景色，網美必拍地點。光線穿透樹梢非常漂亮。',
    category: 'view',
    durationToNext: '約 25 分鐘'
  },
  {
    id: '7',
    time: '17:00',
    location: '假日之森 (看夕陽)',
    description: '竹南濱海美景，追逐浪漫海邊日落，感受異國沙灘風情。',
    category: 'view',
    durationToNext: '約 35 分鐘'
  },
  {
    id: '8',
    time: '19:00',
    location: '桐遊柿界 (夜景+晚餐)',
    description: '俯瞰苗栗百萬夜景，一邊享用熱騰騰的小火鍋，為旅程畫下完美句點。',
    category: 'food'
  }
];

export const GAS_STATIONS = [
  { name: '中油 湖口服務區站', info: '國道一號 86K', type: '國道' },
  { name: '中油 銅鑼站', info: '距銅鑼蛋餅 3 分鐘車程', type: '市區' },
  { name: '台塑 大湖站', info: '距草莓園 5 分鐘車程', type: '景點' },
  { name: '中油 苗栗站', info: '距一口香餡餅 2 分鐘車程', type: '市區' },
  { name: '中油 竹南站', info: '距假日之森 6 分鐘車程', type: '海邊' }
];

export const ALTERNATIVES: Activity[] = [
  {
    id: 'a1',
    time: '午餐時段',
    location: '洗水坑豆腐街',
    description: '清安豆腐街，各式手工豆腐料理。',
    category: 'food',
    isAlternative: true
  },
  {
    id: 'a2',
    time: '下午時段',
    location: '落羽松! 公館忠義村',
    description: '公館另一處靜謐的落羽松景點。',
    category: 'view',
    isAlternative: true
  },
  {
    id: 'a3',
    time: '點心時間',
    location: 'Wayzzy Gelato',
    description: '精緻義式冰淇淋，多樣化在地口味。',
    category: 'food',
    isAlternative: true
  },
  {
    id: 'a4',
    time: '晚餐備案',
    location: '竺町燒肉苗栗',
    description: '高品質燒肉，適合喜歡大口吃肉的朋友。',
    category: 'food',
    isAlternative: true
  },
  {
    id: 'a5',
    time: '深夜活動',
    location: '釣蝦體驗',
    description: '悠閒的在地夜間消遣。',
    category: 'activity',
    isAlternative: true
  },
  {
    id: 'a6',
    time: '海邊點心',
    location: '蔬皮肚皮 Super Duper',
    description: '假日之森旁的異國風餐車，享受Taco與悠閒氣息。',
    category: 'food',
    isAlternative: true
  }
];
