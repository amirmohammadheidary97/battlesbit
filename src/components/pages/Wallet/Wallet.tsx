import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import DepositDrawer from './components/drawers/depositDrawer/DepositDrawer';
import TransferDrawer from './components/drawers/TransferDrawer/TransferDrawer';
import ScrollableList from './components/organism/ScrollableList';
import WalletInfo from './components/organism/WalletInfo';

import {flex} from '@/utils/flexHelper';
import {Avatar, Box, keyframes} from '@mui/material';
import Starcoin from '@/assets/img/icons/general/starCoin.png';

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
        bgcolor: 'red',
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
      <DepositDrawer isDepositopen={openDeposit} />
      <TransferDrawer isTransferOpen={openTransfer} />
      <Box
        position={'absolute'}
        sx={{
          animation: `${wiggle} 5s ease-in infinite`,
        }}
        >
        <Avatar
          sx={{width: '247px', height: '247px', filter: 'blur(14px)'}}
          src={Starcoin}
          alt=""
        />
      </Box>
      {/* <Box position={'absolute'} bgcolor={'green'}>
        <Avatar
          sx={{width: '247px', height: '247px', filter: 'blur(14px)'}}
          src={Starcoin}
          alt=""
        />
      </Box> */}
      {/* <Box><img src={Starcoin} /></Box> */}
    </Grid>
  );
};
export default Wallet;

// const wiggle = '@keyframes {0% {top : -100px; left: 60%;}}';

const wiggle = keyframes`
0% {top : -100px; left: 60%;}
25% {top : -90px; left: 60%;}
50%{top : -95px; left: 57%;}
75%{top : -95px; left: 63%;}
100% {top : -100px; left: 60%;}
`;
