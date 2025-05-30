export type TChallange = {
  id: number;
  title: string;
  time: string;
  amount: number;
  traders: {
    id: number;
    userName: string;
    balance: number;
    profileImage: string;
  }[];
};

export type TChallangeItem = {
  id: number;
  title: string;
  time: string;
  rewards: number;
  xp: number;
  image: string;
  entry: number;
};

export type TGameHistoryItem = {
  id: number;
  title: string;
  time: string;
  result: number;
  xp: number;
  entry: number;
  date: string;
};
