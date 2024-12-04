import Grid from '@mui/material/Grid2';

import {ChargeWallet} from './components/organisms/ChargeWallet';
import {GetNewAvatars} from './components/organisms/GetNewAvatars';
import {HomeHeader} from './components/organisms/HomeHeader';
import {Leverage} from './components/organisms/Leverage';
import AllAvatarsDrawerDrawer from './drawer/AllAvatarsDrawer/AllAvatarsDrawer';
import AllLeverageDrawerDrawer from './drawer/AllLeverageDrawer/AllLeverageDrawer';
import InfoStoreDrawer from './drawer/InfoStoreDrawer/InfoStoreDrawer';
import {useMyStore} from './hooks/useStore';

import {
  AvatarsSkeleton,
  ChangeWalletSkeleton,
  LeverageSkeleton,
  TitleSectionSkeleton,
} from '@/components/templates/Store/LoadingSections';

const Store = () => {
  ///
  const {
    chargeWalletInfo,
    leverageInfo,
    newAvatarInfo,
    openAllAvatars,
    openAllLeverage,
    openChargeWallet,
    openLeverage,
    openNewAvatar,
    chargeWalletItemsList,
    leverageList,
    getNewAvatarsList,
  } = useMyStore();

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
        {chargeWalletItemsList.length != 0 ? (
          <ChargeWallet
            chargeWalletItems={chargeWalletItemsList}
            description="lorem lorem lorem lorem lorem lorem ...."
            title="charge your wallet"
          />
        ) : (
          <>
            <TitleSectionSkeleton />
            <ChangeWalletSkeleton />
          </>
        )}
      </Grid>

      {leverageList.length !== 0 ? (
        <Grid
          sx={{
            backgroundColor: 'transparent',
            borderRadius: '10px',
            position: 'relative',
            marginTop: '10px',
          }}
          size={12}>
          <Leverage
            leverageItems={leverageList.slice(0, 6)}
            description="You can change your avatar and nickname ...."
            title="Leverage"
          />
        </Grid>
      ) : (
        <>
          <Grid>
            <TitleSectionSkeleton />
            <LeverageSkeleton />
          </Grid>
        </>
      )}
      {getNewAvatarsList?.length !== 0 ? (
        <Grid
          sx={{
            backgroundColor: 'transparent',
            borderRadius: '10px',
            position: 'relative',
            marginTop: '10px',
          }}
          size={12}>
          <GetNewAvatars
            getNewAvatars={getNewAvatarsList.slice(0, 6)}
            description="You can change your avatar and nickname"
            title="Get new Avatars"
          />
        </Grid>
      ) : (
        <>
          <Grid>
            <TitleSectionSkeleton />
            <AvatarsSkeleton />
          </Grid>
        </>
      )}
      <InfoStoreDrawer
        isInfoStoreopen={openChargeWallet}
        chargeWalletInfo={chargeWalletInfo}
      />

      <InfoStoreDrawer
        isInfoStoreopen={openLeverage}
        leverageInfo={leverageInfo}
      />
      <InfoStoreDrawer
        isInfoStoreopen={openNewAvatar}
        newAvatarInfo={newAvatarInfo}
      />
      <AllLeverageDrawerDrawer
        allLeverage={leverageList}
        title="You can change your avatar and nickname ...."
        isAllLeverageDraweropen={openAllLeverage}
      />
      <AllAvatarsDrawerDrawer
        allAvatars={getNewAvatarsList}
        isAllAvatarsDraweropen={openAllAvatars}
        title="You can change your avatar and nickname"
      />
    </Grid>
  );
};

export default Store;
