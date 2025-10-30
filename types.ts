export interface Stats {
  body: number;
  spirit: number;
  intellect: number;
  dao: number;
  fortune: number;
}

export interface Player {
  name: string;
  level: string;
  sect: string;
  title: string;
  avatarUrl: string;
  health: number;
  maxHealth: number;
  spiritPower: number;
  maxSpiritPower: number;
  experience: number;
  maxExperience: number;
  stats: Stats;
}

export enum LogCategory {
  CULTIVATION = 'Tu luyện',
  COMBAT = 'Chiến đấu',
  TRADE = 'Giao dịch',
  JOURNEY = 'Hành trình',
  SYSTEM = 'Hệ thống',
}

export interface LogEntry {
  id: number;
  category: LogCategory;
  message: string;
  timestamp: string;
}

export interface GameEvent {
  text: string;
  choices: { text: string; action: () => void }[];
}
