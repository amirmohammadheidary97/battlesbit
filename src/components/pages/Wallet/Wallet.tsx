import {useState} from 'react';
import {AddRounded, CallMade, ShoppingBagOutlined} from '@mui/icons-material';
import type {SelectChangeEvent} from '@mui/material';
import {
  Box,
  FormControl,
  List,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import NavigateButton from './components/atoms/navigateButtons';
import WalletBalanceAmount from './components/molecules/moneyAmount';
import TransactionItem from './components/molecules/TransactionItem';

import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';
import {numberWithCommas} from '@/utils/money-number-fromatter';

const Wallet = () => {
  const [value, setValue] = useState<string>('balance');
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
  };

  const selectOptionItems: string[] = ['Balance', 'Someth', 'Another'];

  const navButton: {icon: React.ReactNode; title: string}[] = [
    {icon: <AddRounded />, title: 'deposit'},
    {icon: <ShoppingBagOutlined />, title: 'store'},
    {icon: <CallMade />, title: 'transfor'},
  ];
  return (
    <Grid
      size={12}
      container
      sx={{
        height: 'calc(100vh - 82px)',
        justifyContent: 'center',
      }}>
      <Grid
        size={8.2}
        sx={{
          height: '40vh',
          ...flex().jcenter().aend().result,
        }}>
        <Stack
          useFlexGap
          gap={'4px'}
          sx={{
            width: 1,
          }}>
          <Box sx={{...flex().jcenter().acenter().result}}>
            <FormControl sx={{width: '35%'}} variant="standard">
              <Select
                value={value}
                onChange={handleChange}
                renderValue={selected => (
                  <Typography
                    sx={{
                      font: '400 22px Nunito Sans',
                    }}>
                    {selected}
                  </Typography>
                )}
                sx={{border: 'none'}}>
                {selectOptionItems.map(opt => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <WalletBalanceAmount
            floatSize="28px"
            integerSize="48px"
            amount={12500}
          />
          <Grid container alignItems={'center'} size={12}>
            <Grid size={7}>
              <Typography variant="caption">
                VSD balance: $ {`  ${numberWithCommas(12500)}`}
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
              size={5}>
              <Typography variant="caption">
                Pnl:{' '}
                <Typography
                  variant="caption"
                  sx={{color: theme.palette.success.main}}>
                  +{numberWithCommas(200.6)}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{...flex().acenter().jbetween().result}}>
            {navButton.map(item => (
              <NavigateButton
                icon={item.icon}
                title={item.title}
                key={item.title}
              />
            ))}
          </Box>
        </Stack>
      </Grid>
      <Grid
        container
        sx={{
          borderTopRightRadius: '24px',
          borderTopLeftRadius: '24px',
          border: '1px solid red',
        }}
        size={12}>
        <Grid size={12} p={'0.8rem'}>
          <Typography variant="h6" sx={{font: '600 18px Nunito sans'}}>
            Transactions
          </Typography>
        </Grid>
        <Grid size={12}>
          <List sx={{height: '35vh', overflow: 'scroll'}}>
            <TransactionItem
              trasactionType="paypal"
              actionDate="24 july 2022"
              amount={128.36}
            />
            <TransactionItem
              trasactionType="paypal"
              actionDate="24 july 2022"
              amount={128.36}
            />
            <TransactionItem
              trasactionType="paypal"
              actionDate="24 july 2022"
              amount={128.36}
            />
            <TransactionItem
              trasactionType="sol"
              actionDate="24 july 2022"
              amount={128.36}
            />
            <TransactionItem
              trasactionType="sol"
              actionDate="24 july 2022"
              amount={128.36}
            />
            <TransactionItem
              trasactionType="sol"
              actionDate="24 july 2022"
              amount={128.36}
            />
            <TransactionItem
              trasactionType="transfer"
              actionDate="24 july 2022"
              amount={128.36}
            />
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Wallet;
