import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import {ChargeWallet} from './components/organisms/ChargeWallet';
import {GetNewAvatars} from './components/organisms/GetNewAvatars';
import {HomeHeader} from './components/organisms/HomeHeader';
import {Leverage} from './components/organisms/Leverage';
import InfoStoreDrawer from './drawer/InfoStoreDrawer/InfoStoreDrawer';
import {chargeWalletState} from './state/charge-wallet.state';
import {drawerStoreState} from './state/drawer-store.state';
import {
  chargeWalletItemsList,
  getNewAvatarsList,
  leverageList,
} from './utils/fakeData';

const Store = () => {
  ///
  const state = useSearchParams()[0].get('state');
  const value = useSearchParams()[0].get('value');
  ///
  const {openChargeWallet, setOpenChargeWallet} = drawerStoreState();
  const {chargeWalletInfo, setChargeWalletInfo} = chargeWalletState();

  ///
  useEffect(() => {
    if (state !== null && state === 'chargewallet') setOpenChargeWallet(true);
    else {
      setOpenChargeWallet(false);
    }
  }, [state]);

  useEffect(() => {
    if (value) {
      const findDetialChargeWallet = chargeWalletItemsList.find(
        item => item.id == Number(value),
      );
      if (findDetialChargeWallet) {
        setChargeWalletInfo(findDetialChargeWallet);
      }
    }
  }, [value]);
  ////
  return (
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
      <Grid
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '10px',
          position: 'relative',
          marginTop: '10px',
        }}
        size={12}>
        <Leverage
          leverageItems={leverageList}
          description="You can change your avatar and nickname ...."
          title="Leverage"
        />
      </Grid>
      <Grid
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '10px',
          position: 'relative',
          marginTop: '10px',
        }}
        size={12}>
        <GetNewAvatars
          getNewAvatars={getNewAvatarsList}
          description="You can change your avatar and nickname"
          title="Get new Avatars"
        />
      </Grid>
      <InfoStoreDrawer
        isInfoStoreopen={openChargeWallet}
        chargeWalletInfo={chargeWalletInfo}
      />
    </Grid>
  );
};

export default Store;
