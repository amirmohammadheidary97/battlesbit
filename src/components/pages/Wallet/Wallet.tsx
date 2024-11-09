import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import DepositDrawer from './components/drawers/depositDrawer/DepositDrawer';
import TransferDrawer from './components/drawers/TransferDrawer/TransferDrawer';
import ScrollableList from './components/organism/ScrollableList';
import WalletInfo from './components/organism/WalletInfo';

import {flex} from '@/utils/flexHelper';

const Wallet = () => {
  const param = useSearchParams()[0].get('state');
  const [openDeposit, setOpenDeposit] = useState<boolean>(false);
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);

  // const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (param !== null && param === 'deposit') setOpenDeposit(true);
    else if (param !== null && param === 'transfer') setOpenTransfer(true);
    else {
      setOpenDeposit(false);
      setOpenTransfer(false);
    }
  }, [param]);

  return (
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
      <ScrollableList
        containerProps={{bgcolor: 'background.default'}}
        isTransaction
        title="Transactions"
      />
      <DepositDrawer
        handleCloseDepositDrawer={() => {}}
        isDepositopen={openDeposit}
      />
      <TransferDrawer
        handleCloseTransferDrawer={() => {}}
        isTransferOpen={openTransfer}
      />
    </Grid>
  );
};
export default Wallet;
