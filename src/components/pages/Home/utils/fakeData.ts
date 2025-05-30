import profileImage from '@/assets/img/bg/traders/user-1.png';
import profileImage2 from '@/assets/img/bg/traders/user-2.png';
import profileImage3 from '@/assets/img/bg/traders/user-3.png';
import cupOutlineIcon from '@/assets/img/icons/balanceAccess/cup.svg';
import dateTimeIcon from '@/assets/img/icons/balanceAccess/dateTime.svg';
import depositIcon from '@/assets/img/icons/balanceAccess/deposit.svg';
import leaderBoardIcon from '@/assets/img/icons/balanceAccess/leaderBoard.svg';
import storeIcon from '@/assets/img/icons/balanceAccess/store.svg';
import type {TChallange} from '@/types/models/challanges';
import type {TTrader} from '@/types/models/trader';

export type TQuickAccessButton = {
  title: string;
  icon: string;
  count: number;
};

////// fake data list
export const allQuickAccessButtonList: TQuickAccessButton[] = [
  {
    icon: depositIcon,
    title: 'Deposit',
    count: 0,
  },
  {
    icon: leaderBoardIcon,
    title: 'Leaderboard',
    count: 0,
  },
  {
    icon: storeIcon,
    title: 'Store',
    count: 0,
  },
  {
    icon: cupOutlineIcon,
    title: 'Rewards',
    count: 1,
  },
  {
    icon: dateTimeIcon,
    title: 'Events',
    count: 0,
  },
];

export const challangeInfoData: TChallange = {
  id: 1,
  title: 'Demo for Beginners',
  time: '23:20',
  amount: 10,
  traders: [
    {
      id: 1,
      userName: 'Little Trader',
      balance: 9999.55,
      profileImage: profileImage,
    },
    {
      id: 2,
      userName: 'Little Trader',
      balance: 9999.55,
      profileImage: profileImage2,
    },
  ],
};

export const bestTradersData: TTrader[] = [
  {
    user: {
      profileImage: profileImage3,
      userName: 'Alex shir del',
      cup: 2405,
    },
    pnl: 30,
    balance: 9999.55,
    balancePercentage: 340,
  },
  {
    user: {
      profileImage: profileImage3,
      userName: 'Alex shir del',
      cup: 2405,
    },
    pnl: 30,
    balance: -9999.55,
    balancePercentage: -400,
  },
  {
    user: {
      profileImage: profileImage3,
      userName: 'Alex shir del',
      cup: 2405,
    },
    pnl: 30,
    balance: 9999.55,
    balancePercentage: 340,
  },
];

export const lastChallangesData = [
  {
    id: 1,
    balance: 10,
  },
  {
    id: 1,
    balance: -10,
  },
  {
    id: 1,
    balance: 10,
  },
  {
    id: 1,
    balance: -10,
  },
  {
    id: 1,
    balance: 10,
  },
];
