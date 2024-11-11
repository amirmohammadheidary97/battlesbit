import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {Button, List, Typography} from '@mui/material';
import type {Grid2Props} from '@mui/material/Grid2';
import Grid from '@mui/material/Grid2';

import NetworkSelectItem from '../molecules/NetworkItem';
import TransactionItem from '../molecules/TransactionItem';

import {theme} from '@/config/theme';

type transaction = {
  type: 'Paypal' | 'SOL' | 'Transfer';
  date: string;
  amount: number;
};

type Props = {
  isTransaction: boolean;
  title: string;
  height?: string;
  containerProps?: Grid2Props;
};

const listItem: transaction[] = [
  {amount: 128.22, date: '24 july 2022', type: 'Paypal'},
  {amount: 128.22, date: '20 july 2022', type: 'Transfer'},
  {amount: 128.22, date: '17 july 2022', type: 'SOL'},
  {amount: 128.22, date: '1 july 2022', type: 'Transfer'},
  {amount: 128.22, date: '30 july 2022', type: 'Paypal'},
];

const networkItems: {id: number; title: string}[] = [
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
const ScrollableList = ({
  isTransaction,
  title,
  height,
  containerProps,
}: Props) => {
  const [checkedItem, setCheckedItem] = useState<number>();
  const handleToggle = (value: number) => () => {
    if (checkedItem === value) setCheckedItem(undefined);
    else setCheckedItem(value);
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Grid
      container
      sx={{
        borderTopRightRadius: '24px',
        borderTopLeftRadius: '24px',
        maxHeight: height ?? 'calc(50vh - 83px)',
        overflowY: 'auto',
        position: 'relative',
        zIndex: 2,
      }}
      {...containerProps}
      size={12}>
      <Grid
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 2,
          height: '18%',
          bgcolor: !isTransaction ? 'background.paper' : 'background.default',
        }}
        size={12}>
        <Typography variant="h6" sx={{font: '600 18px Nunito sans', p: '1rem'}}>
          {title}
        </Typography>
      </Grid>
      <Grid height={'82%'} overflow={'auto'} size={12}>
        <List sx={{p: '8px'}}>
          {isTransaction && listItem.length > 0
            ? listItem.map(transaction => (
                <TransactionItem
                  key={transaction.date + transaction.amount}
                  actionDate={transaction.date}
                  amount={transaction.amount}
                  trasactionType={transaction.type}
                />
              ))
            : networkItems.map(item => (
                <NetworkSelectItem
                  checkedItem={checkedItem}
                  handleToggle={handleToggle}
                  title={item.title}
                  value={item.id}
                  key={item.id}
                />
              ))}
          {!isTransaction && checkedItem && (
            <Button
              sx={{
                width: 1,
                py: '1rem',
                borderRadius: theme.shape.borderRadius,
                mt: 3,
              }}
              onClick={() =>
                navigate(
                  `${location.pathname}${location.search}&network=${checkedItem}`,
                )
              }
              variant="contained">
              confirm
            </Button>
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default ScrollableList;
