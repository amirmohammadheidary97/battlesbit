import {lazy, Suspense, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import {AnimatedBackgroundImgs} from './components/atoms/AnimatedShapes';
import ScrollableList from './components/organism/ScrollableList';
import WalletInfo from './components/organism/WalletInfo';

import {
  DepositDrawerSkeleton,
  ScrollableListSkeleton,
  WalletInfoSkeleton,
} from '@/components/templates/Wallet/LoadingStages';
import TransferDrawerSkeleton from '@/components/templates/Wallet/LoadingStages/TransferDrawerSkeleton';
import {flex} from '@/utils/flexHelper';

const TransferDrawer = lazy(
  () => import('./components/drawers/TransferDrawer/TransferDrawer'),
);
const DepositDrawer = lazy(
  () => import('./components/drawers/depositDrawer/DepositDrawer'),
);
const Wallet = () => {
  ///
  const state = useSearchParams()[0].get('state');
  ///
  const [openDeposit, setOpenDeposit] = useState<boolean>(false);
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);
  const [infoLoading, setInfoLoading] = useState<boolean>(true);
  const [transactionLoading, setTransactionLoading] = useState<boolean>(true);
  ///
  useEffect(() => {
    if (state !== null && state === 'deposit') setOpenDeposit(true);
    else if (state !== null && state === 'transfer') setOpenTransfer(true);
    else {
      setOpenDeposit(false);
      setOpenTransfer(false);
    }
  }, [state]);
  //
  useEffect(() => {
    setTimeout(() => {
      setInfoLoading(false);
      setTransactionLoading(false);
    }, 1000);
  }, []);
  ////
  return (
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
        {infoLoading ? <WalletInfoSkeleton /> : <WalletInfo />}
      </Grid>
      {transactionLoading ? (
        <ScrollableListSkeleton
          containerProps={{bgcolor: 'background.default'}}
          isTransaction
        />
      ) : (
        <ScrollableList
          containerProps={{bgcolor: 'background.default'}}
          isTransaction
          title="Transactions"
        />
      )}
      <Suspense fallback={<DepositDrawerSkeleton isDepositopen />}>
        <DepositDrawer isDepositopen={openDeposit} />
      </Suspense>
      <Suspense fallback={<TransferDrawerSkeleton isTransferOpen />}>
        <TransferDrawer isTransferOpen={openTransfer} />
      </Suspense>
      <AnimatedBackgroundImgs />
    </Grid>
  );
};
export default Wallet;
