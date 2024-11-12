import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import {AnimatedBackgroundImgs} from './components/atoms/AnimatedShapes';
import DepositDrawer from './components/drawers/depositDrawer/DepositDrawer';
import TransferDrawer from './components/drawers/TransferDrawer/TransferDrawer';
import ScrollableList from './components/organism/ScrollableList';
import WalletInfo from './components/organism/WalletInfo';

import {flex} from '@/utils/flexHelper';

const Wallet = () => {
  ///
  const state = useSearchParams()[0].get('state');
  ///
  const [openDeposit, setOpenDeposit] = useState<boolean>(false);
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);
  ///
  useEffect(() => {
    if (state !== null && state === 'deposit') setOpenDeposit(true);
    else if (state !== null && state === 'transfer') setOpenTransfer(true);
    else {
      setOpenDeposit(false);
      setOpenTransfer(false);
    }
  }, [state]);
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
          ...flex().jcenter().acenter().result,
          pb: 5,
          gap: 0,
          zIndex: 2,
        }}>
        <WalletInfo />
      </Grid>
      <ScrollableList
        containerProps={{bgcolor: 'background.default'}}
        isTransaction
        title="Transactions"
      />
      <DepositDrawer isDepositopen={openDeposit} />
      <TransferDrawer isTransferOpen={openTransfer} />
      {/*  */}
      <AnimatedBackgroundImgs />
      {/*  */}
    </Grid>
  );
};
export default Wallet;
