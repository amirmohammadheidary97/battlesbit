import MonkeyCircleImg1 from '@/assets/img/bg/monkey.png';
import ChargeWalletItemImg1 from '@/assets/img/icons/store/charge-item-1.png';
import ChargeWalletItemImg2 from '@/assets/img/icons/store/charge-item-2.png';
import ChargeWalletItemImg3 from '@/assets/img/icons/store/charge-item-3.png';
import ChargeWalletItemImg4 from '@/assets/img/icons/store/charge-item-4.png';
import leverageImg1 from '@/assets/img/icons/store/leverage 1.png';

export const chargeWalletItemsList = [
  {
    id: 1,
    amount: 100,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg1,
    funds: 0,
  },
  {
    id: 2,
    amount: 310,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg2,
    funds: 0,
  },
  {
    id: 3,
    amount: 78,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg3,
    funds: 0,
  },
  {
    id: 4,
    amount: 88,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg4,
    funds: 0,
  },
];

export const leverageList = Array.from({length: 30}, (_, index) => ({
  id: index + 1,
  amount: 10,
  currency: 'VSD',
  xpCuntent: 'up to',
  xpValue: 50 + (index % 3) * 20,
  iconUrl: leverageImg1,
  funds: 0,
}));

export const getNewAvatarsList = Array.from({length: 32}, (_, index) => ({
  id: index + 1,
  amount: 10,
  currency: 'VSD',
  iconUrl: MonkeyCircleImg1,
  funds: 0,
}));
