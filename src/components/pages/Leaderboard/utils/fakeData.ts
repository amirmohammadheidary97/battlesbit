import UserImg1 from '@/assets/img/bg/users/1.png';
import UserImg2 from '@/assets/img/bg/users/2.png';
import UserImg3 from '@/assets/img/bg/users/3.png';
import UserImg4 from '@/assets/img/bg/users/4.png';

export const getLeaderBoardUsersList = Array.from({length: 15}, (_, index) => ({
  id: index + 1,
  amount: Math.floor(Math.random() * 20000),
  currency: 'VSD',
  avatar: UserImg1,
  level: 28,
  userName: 'Alex Telles',
}));

export const topPlayerFakeData = {
  numberOne: {
    id: 1,
    amount: Math.floor(Math.random() * 20000),
    currency: 'VSD',
    avatar: UserImg2,
    level: 1,
    userName: 'mehranM...',
  },
  numberTwo: {
    id: 1,
    amount: Math.floor(Math.random() * 20000),
    currency: 'VSD',
    avatar: UserImg3,
    level: 2,
    userName: 'mehranM...',
  },
  numberThree: {
    id: 1,
    amount: Math.floor(Math.random() * 20000),
    currency: 'VSD',
    avatar: UserImg4,
    level: 3,
    userName: 'mehranM...',
  },
};
