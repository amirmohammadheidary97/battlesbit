import {AddCircle, OutboundRounded} from '@mui/icons-material';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
} from '@mui/material';

import WalletBalanceAmount from './MoneyAmount';

import Paypal from '@/assets/img/icons/general/paypal.svg';
import SOL from '@/assets/img/icons/general/SOL.svg';
import Transfer from '@/assets/img/icons/general/transfer.svg';
import {theme} from '@/config/theme';

type Props = {
  trasactionType: 'Paypal' | 'SOL' | 'Transfer';
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
        isTransaction
      />
    }
    sx={{
      height: '4rem',
      '*': {
        fontFamily: 'Nunito Sans !importnat',
      },
    }}>
    <ListItemAvatar sx={{position: 'relative'}}>
      <Avatar
        src={
          trasactionType === 'Paypal'
            ? Paypal
            : trasactionType === 'SOL'
              ? SOL
              : Transfer
        }
        alt={trasactionType}
      />

      <SubIconContainer>
        {trasactionType === 'Transfer' ? <OutboundRounded /> : <AddCircle />}
      </SubIconContainer>
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

const SubIconContainer = styled('div')({
  position: 'absolute',
  left: '30px',
  bottom: '0',
  backgroundColor: '#fff',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  svg: {
    color: theme.palette.primary.main,
    fontSize: '16px',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
  },
});
