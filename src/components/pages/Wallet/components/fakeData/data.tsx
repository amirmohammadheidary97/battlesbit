import {AddRounded, CallMade, ShoppingBagOutlined} from '@mui/icons-material';

type transaction = {
  type: 'Paypal' | 'SOL' | 'Transfer';
  date: string;
  amount: number;
};

type WalletAction = {
  icon: React.ReactNode;
  title: string;
};

export const transactionList: transaction[] = [
  {amount: 128.22, date: '24 july 2022', type: 'Paypal'},
  {amount: 128.22, date: '20 july 2022', type: 'Transfer'},
  {amount: 128.22, date: '17 july 2022', type: 'SOL'},
  {amount: 128.22, date: '1 july 2022', type: 'Transfer'},
  {amount: 128.22, date: '30 july 2022', type: 'Paypal'},
];

export const networkItems: {id: number; title: string}[] = [
  {
    id: 1,
    title: 'Bitcoin Network or any thing else',
  },
  {
    id: 2,
    title: 'Bitcoin Network',
  },
  {
    id: 3,
    title: 'Bitcoin Network',
  },
];

export const selectBalanceOptions: string[] = ['Balance', 'Someth', 'Another'];

export const navButton: WalletAction[] = [
  {icon: <AddRounded />, title: 'deposit'},
  {icon: <ShoppingBagOutlined />, title: 'store'},
  {icon: <CallMade />, title: 'transfer'},
];
