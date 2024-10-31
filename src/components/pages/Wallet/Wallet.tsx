import Grid from '@mui/material/Grid2';

import TransactionList from './components/organism/ScrollableList';
import WalletInfo from './components/organism/WalletInfo';

import {flex} from '@/utils/flexHelper';

const Wallet = () => (
  <Grid
    size={12}
    container
    sx={{
      height: 'calc(100vh - 90px)',
      justifyContent: 'center',
    }}>
    <Grid
      size={8.2}
      sx={{
        height: '50vh',
        ...flex().jcenter().aend().result,
        pb: 5,
        gap: 0,
      }}>
      <WalletInfo />
    </Grid>
    <TransactionList isTransaction title="Transactions" />
  </Grid>
);
export default Wallet;
