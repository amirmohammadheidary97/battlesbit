import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {Button, List, Typography} from '@mui/material';
import type {Grid2Props} from '@mui/material/Grid2';
import Grid from '@mui/material/Grid2';

import {networkItems, transactionList} from '../fakeData/data';
import NetworkSelectItem from '../molecules/NetworkItem';
import TransactionItem from '../molecules/TransactionItem';

type Props = {
  isTransaction: boolean;
  title: string;
  height?: string;
  containerProps?: Grid2Props;
};

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
        <List sx={{m: '0.5rem'}}>
          {isTransaction && transactionList.length > 0
            ? transactionList.map(transaction => (
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
                borderRadius: theme => theme.shape.borderRadius,
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
