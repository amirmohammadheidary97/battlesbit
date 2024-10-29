import {Avatar, ListItem, ListItemAvatar, ListItemText} from '@mui/material';

import WalletBalanceAmount from './moneyAmount';

import Paypal from '@/assets/img/icons/general/paypal.svg';
import SOL from '@/assets/img/icons/general/SOL.svg';
import Transfer from '@/assets/img/icons/general/transfer.svg';

type Props = {
  trasactionType: 'paypal' | 'sol' | 'transfer';
  actionDate: string;
  amount: number;
};
const TransactionItem = ({trasactionType, actionDate, amount}: Props) => (
  <ListItem
    secondaryAction={
      <WalletBalanceAmount
        amount={amount}
        floatSize="10px"
        integerSize="15px"
        havePlus
      />
    }
    sx={{
      height: '4rem',
      '*': {
        fontFamily: 'Nunito Sans !importnat',
      },
      '.MuiTypography-button': {
        fontWeight: '400 !important',
      },
    }}>
    <ListItemAvatar>
      <Avatar
        src={
          trasactionType === 'paypal'
            ? Paypal
            : trasactionType === 'sol'
              ? SOL
              : Transfer
        }
      />
    </ListItemAvatar>
    <ListItemText
      primaryTypographyProps={{
        variant: 'body1',
        fontSize: '16px',
      }}
      secondaryTypographyProps={{
        variant: 'caption',
        fontSize: '12px',
        mt: 0.5,
      }}
      primary={trasactionType}
      secondary={actionDate}
    />
  </ListItem>
);

export default TransactionItem;
