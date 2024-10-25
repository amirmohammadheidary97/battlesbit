import {useState} from 'react';
import {AddRounded, CallMade, ShoppingBagOutlined} from '@mui/icons-material';
import type {SelectChangeEvent} from '@mui/material';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import WalletBalanceAmount from './components/atoms/moneyAmount';
import NavigateButton from './components/atoms/navigateButtons';

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
        border: '1px solid red',
      }}>
      <Grid
        size={8.2}
        sx={{
          border: '1px solid blue',
          height: '40vh',
          ...flex().jcenter().aend().result,
        }}>
        <Stack
          useFlexGap
          gap={'4px'}
          sx={{
            width: 1,
            border: '1px solid pink',
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
          <WalletBalanceAmount amount={12500} />
          <Grid container alignItems={'center'} size={12}>
            <Grid
              sx={{display: 'flex', gap: '10px', alignItems: 'center'}}
              size={7}>
              <Typography variant="caption">VSD balance:</Typography>
              <Typography variant="caption">
                ${numberWithCommas(12500)}
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
    </Grid>
  );
};
export default Wallet;
