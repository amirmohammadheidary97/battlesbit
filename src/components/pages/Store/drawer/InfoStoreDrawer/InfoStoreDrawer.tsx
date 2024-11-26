import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import {ChargeWalletDetail} from '../../components/organisms/ChargeWalletDetail';
import FullPageDrawerContainer from '../../components/organisms/DrawerContainer/DrawerContainer';
import {LeverageDetail} from '../../components/organisms/LeverageDetail';
import {NewAvatarDetail} from '../../components/organisms/NewAvatarDetail';

import type {
  ChargeWalletItemType,
  LeverageItemType,
  NewAvatarsType,
} from '@/types/models/store';

type Props = {
  isInfoStoreopen: boolean;
  handleCloseInfoStoreDrawer?: () => void;
  chargeWalletInfo?: ChargeWalletItemType | undefined;
  leverageInfo?: LeverageItemType | undefined;
  newAvatarInfo?: NewAvatarsType | undefined;
};
const InfoStoreDrawer = ({
  handleCloseInfoStoreDrawer,
  isInfoStoreopen,
  chargeWalletInfo,
  leverageInfo,
  newAvatarInfo,
}: Props) => {
  ///
  const type = useSearchParams()[0].get('type');
  //
  const getNameTitle = () => {
    switch (type) {
      case 'ChargeWallet':
        return 'Avatar';
      case 'Leverage':
        return 'Leverage';
      case 'NewAvatar':
        return 'Avatar';
      default:
        return '';
    }
  };

  return (
    <FullPageDrawerContainer
      isOpen={isInfoStoreopen}
      isFixedBackWard={true}
      handleCloseDrawer={handleCloseInfoStoreDrawer}
      PageTitle={getNameTitle()}>
      <Grid size={12}>
        {type == 'ChargeWallet' && chargeWalletInfo && (
          <ChargeWalletDetail chargeWalletInfo={chargeWalletInfo} />
        )}
        {type == 'Leverage' && leverageInfo && (
          <LeverageDetail leverageInfo={leverageInfo} />
        )}
        {type == 'NewAvatar' && newAvatarInfo && (
          <NewAvatarDetail newAvatarInfo={newAvatarInfo} />
        )}
      </Grid>
    </FullPageDrawerContainer>
  );
};

export default InfoStoreDrawer;
