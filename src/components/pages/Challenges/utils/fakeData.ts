import userChallenges1 from '@/assets/img/bg/challenges-list/user-challenges-1.png';
import userChallenges2 from '@/assets/img/bg/challenges-list/user-challenges-2.png';
import userChallenges3 from '@/assets/img/bg/challenges-list/user-challenges-3.png';
import profileImage from '@/assets/img/bg/traders/user-1.png';
import profileImage2 from '@/assets/img/bg/traders/user-2.png';
import type {
  TChallange,
  TChallangeItem,
  TGameHistoryItem,
} from '@/types/models/challanges';

export const openGamesList: TChallange[] = [
  {
    id: 1,
    title: 'Demo for Beginners',
    time: '23:20',
    amount: 10,
    traders: [
      {
        id: 1,
        userName: 'Little Trader',
        balance: 9999,
        profileImage: profileImage,
      },
      {
        id: 2,
        userName: 'Little Trader',
        balance: 9999,
        profileImage: profileImage2,
      },
    ],
  },
  {
    id: 2,
    title: 'Demo for Beginners',
    time: '23:20',
    amount: 10,
    traders: [
      {
        id: 1,
        userName: 'Little Trader',
        balance: 9999,
        profileImage: profileImage,
      },
      {
        id: 2,
        userName: 'Little Trader',
        balance: 9999,
        profileImage: profileImage2,
      },
    ],
  },
];

export const challengesItemList: TChallangeItem[] = [
  {
    id: 1,
    title: 'Noob Challenge',
    time: '30 MIN',
    image: userChallenges1,
    rewards: 1.95,
    xp: 400,
    entry: 1,
  },
  {
    id: 2,
    title: 'Baby Fighter',
    time: '30 MIN',
    image: userChallenges2,
    rewards: 9.8,
    xp: 400,
    entry: 5,
  },
  {
    id: 3,
    title: 'Advance Challenger',
    time: '30 MIN',
    image: userChallenges3,
    rewards: 19.8,
    xp: 400,
    entry: 10,
  },
];

export const gameHistoryItemList: TGameHistoryItem[] = [
  {
    id: 1,
    title: 'Demo challenge',
    time: '30 MIN',
    result: 10,
    xp: 400,
    entry: 1,
    date: '2024.5.23 12:23',
  },
  {
    id: 2,
    title: 'Demo challenge',
    time: '30 MIN',
    result: -10,
    xp: 400,
    entry: 1,
    date: '2024.5.23 12:23',
  },
  {
    id: 3,
    title: 'Demo challenge',
    time: '30 MIN',
    result: 10,
    xp: 400,
    entry: 1,
    date: '2024.5.23 12:23',
  },
];
