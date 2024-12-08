import Grid from '@mui/material/Grid2';

import {ScrollableListSkeleton, WalletInfoSkeleton} from './LoadingStages';

import {flex} from '@/utils/flexHelper';

const WalletTemplate = () => (
  <Grid
    size={12}
    container
    sx={{
      height: 'calc(100vh - 90px)',
      justifyContent: 'center',
      position: 'relative',
    }}>
    <Grid
      size={8.2}
      sx={{
        height: '50vh',
        ...flex().jcenter().aend().result,
        pb: 5,
        gap: 0,
        zIndex: 5,
      }}>
      <WalletInfoSkeleton />
      {/* <WalletInfo /> */}
    </Grid>
    {/* <Suspense fallback={<></>}> */}
    <ScrollableListSkeleton
      containerProps={{bgcolor: 'background.default'}}
      isTransaction
    />
    {/* <ScrollableList
          containerProps={{bgcolor: 'background.default'}}
          isTransaction
          title="Transactions"
        /> */}
    {/* </Suspense> */}
    {/* <Suspense fallback={<></>}> */}
    {/* <DepositDrawer isDepositopen={openDeposit} /> */}
    {/* </Suspense> */}
    {/* // <Suspense fallback={<></>}> */}
    {/* <TransferDrawer isTransferOpen={openTransfer} /> */}
    {/* </Suspense> */}
    {/* <AnimatedBackgroundImgs /> */}
  </Grid>
);

export default WalletTemplate;
