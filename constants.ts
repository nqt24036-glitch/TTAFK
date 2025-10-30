import type { Player } from './types';
import { LogCategory } from './types';

export const INITIAL_PLAYER: Player = {
  name: 'Vô Danh',
  level: 'Phàm Nhân',
  sect: 'Chưa có',
  title: 'Tân Thủ',
  avatarUrl: 'https://picsum.photos/seed/player_avatar/128/128',
  health: 100,
  maxHealth: 100,
  spiritPower: 50,
  maxSpiritPower: 50,
  experience: 0,
  maxExperience: 100,
  stats: {
    body: 10,
    spirit: 10,
    intellect: 10,
    dao: 5,
    fortune: 5,
  },
};

export const LOG_CATEGORIES: LogCategory[] = [
  LogCategory.CULTIVATION,
  LogCategory.COMBAT,
  LogCategory.TRADE,
  LogCategory.JOURNEY,
];

export const REALMS = [
    "Phàm Nhân",
    "Luyện Khí Kỳ",
    "Trúc Cơ Kỳ",
    "Kim Đan Kỳ",
    "Nguyên Anh Kỳ",
    "Hóa Thần Kỳ",
    "Luyện Hư Kỳ",
    "Hợp Thể Kỳ",
    "Đại Thừa Kỳ",
    "Độ Kiếp Kỳ",
    "Tiên Nhân"
];
