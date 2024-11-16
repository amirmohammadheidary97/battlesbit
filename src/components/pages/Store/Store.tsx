import Grid from '@mui/material/Grid2';

import {ChargeWallet} from './components/organisms/ChargeWallet';
import {HomeHeader} from './components/organisms/HomeHeader';

import ChargeWalletItemImg1 from '@/assets/img/icons/store/charge-item-1.png';
import ChargeWalletItemImg2 from '@/assets/img/icons/store/charge-item-2.png';
import ChargeWalletItemImg3 from '@/assets/img/icons/store/charge-item-3.png';
import ChargeWalletItemImg4 from '@/assets/img/icons/store/charge-item-4.png';

const chargeWalletItemsList = [
  {
    amount: 10,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg1,
  },
  {
    amount: 10,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg2,
  },
  {
    amount: 10,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg3,
  },
  {
    amount: 10,
    amountTwo: 0.99,
    currency: 'VSD',
    currencyTwo: 'USDT',
    iconUrl: ChargeWalletItemImg4,
  },
];

const Store = () => (
  <Grid
    container
    spacing={2}
    className="hide-scrollbar"
    sx={{
      overflowY: 'auto',
      display: 'flex',
      p: 2,
      pb: '5.5rem',
      height: '100%',
    }}>
    <Grid size={12} padding="0 10px" container spacing={3}>
      <HomeHeader
        current={123}
        total={200}
        usdtAmount={1234}
        vsdAmount={5467}
      />
    </Grid>
    <Grid
      sx={{
        backgroundColor: '#25272F',
        borderRadius: '10px',
        height: '180px',
        position: 'relative',
        padding: '10px',
        marginTop: '10px',
      }}
      size={12}>
      <ChargeWallet
        chargeWalletItems={chargeWalletItemsList}
        description="lorem lorem lorem lorem lorem lorem ...."
        title="charge your wallet"
      />
    </Grid>
  </Grid>
);

export default Store;
