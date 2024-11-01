import {AddRounded, CallMade, ShoppingBagOutlined} from '@mui/icons-material';
import {Box, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import NavigateButton from '../atoms/navigateButtons';
import BalanceTypeSelection from '../molecules/BalanceTypeSelection';
import WalletBalanceAmount from '../molecules/moneyAmount';

import {flex} from '@/utils/flexHelper';
import {numberWithCommas} from '@/utils/money-number-fromatter';

type WalletAction = {
  icon: React.ReactNode;
  title: string;
};
const WalletInfo = () => {
  const navButton: WalletAction[] = [
    {icon: <AddRounded />, title: 'deposit'},
    {icon: <ShoppingBagOutlined />, title: 'store'},
    {icon: <CallMade />, title: 'transfer'},
  ];
  return (
    <Stack
      useFlexGap
      gap={'4px'}
      sx={{
        width: 1,
      }}>
      <Box sx={{...flex().jcenter().acenter().result, width: 1}}>
        <BalanceTypeSelection />
      </Box>
      <WalletBalanceAmount floatSize="28px" integerSize="48px" amount={12500} />
      <Grid container alignItems={'center'} size={12}>
        <Grid size={7}>
          <Typography variant="caption">
            VSD balance: $ {`${numberWithCommas(12500)}`}
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
            <Typography variant="caption" sx={{color: 'success.main'}}>
              +{numberWithCommas(200.6)}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{...flex().acenter().jbetween().result, width: 1, gap: '8px'}}>
        {navButton.map(item => (
          <NavigateButton
            icon={item.icon}
            title={item.title}
            key={item.title}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default WalletInfo;
