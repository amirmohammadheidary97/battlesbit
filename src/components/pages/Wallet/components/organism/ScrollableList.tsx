import {useState} from 'react';
import {List, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import NetworkSelectItem from '../molecules/NetworkItem';
import TransactionItem from '../molecules/TransactionItem';

type transaction = {
  type: 'Paypal' | 'SOL' | 'Transfer';
  date: string;
  amount: number;
};

type Props = {
  isTransaction: boolean;
  title: string;
  height?: string;
};

const listItem: transaction[] = [
  {amount: 128.22, date: '24 july 2022', type: 'Paypal'},
  {amount: 128.22, date: '20 july 2022', type: 'Transfer'},
  {amount: 128.22, date: '17 july 2022', type: 'SOL'},
  {amount: 128.22, date: '1 july 2022', type: 'Transfer'},
  {amount: 128.22, date: '30 july 2022', type: 'Paypal'},
];

const listItem2: {id: number; title: string}[] = [
  {
    id: 1,
    title: 'title 1',
  },
  {
    id: 2,
    title: 'title 2',
  },
];
const TransactionList = ({isTransaction, title, height}: Props) => {
  const [checkedItem, setCheckedItem] = useState<number>();
  const handleToggle = (value: number) => () => {
    if (checkedItem === value) setCheckedItem(undefined);
    else setCheckedItem(value);
  };
  return (
    <Grid
      container
      sx={{
        borderTopRightRadius: '24px',
        borderTopLeftRadius: '24px',
        height: height ?? 'calc(50vh - 83px)',
        overflowY: 'auto',
        position: 'relative',
        bgcolor: 'background.default',
      }}
      size={12}>
      <Grid
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 2,
          height: '18%',
        }}
        size={12}>
        <Typography variant="h6" sx={{font: '600 18px Nunito sans', p: '1rem'}}>
          {title}
        </Typography>
      </Grid>
      <Grid height={'82%'} overflow={'auto'} size={12}>
        <List>
          {isTransaction
            ? listItem.map(transaction => (
                <TransactionItem
                  key={transaction.date + transaction.amount}
                  actionDate={transaction.date}
                  amount={transaction.amount}
                  trasactionType={transaction.type}
                />
              ))
            : listItem2.map(item => (
                <NetworkSelectItem
                  checkedItem={checkedItem}
                  handleToggle={handleToggle}
                  title={item.title}
                  value={item.id}
                  key={item.id}
                />
              ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default TransactionList;
