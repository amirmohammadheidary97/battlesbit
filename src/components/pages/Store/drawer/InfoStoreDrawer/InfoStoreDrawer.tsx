import {useSearchParams} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import {ChargeWalletDetail} from '../../components/organisms/ChargeWalletDetail';
import FullPageDrawerContainer from '../../components/organisms/DrawerContainer/DrawerContainer';

import type {ChargeWalletItemType} from '@/types/models/store';

type Props = {
  isInfoStoreopen: boolean;
  handleCloseInfoStoreDrawer?: () => void;
  chargeWalletInfo: ChargeWalletItemType | undefined;
};
const InfoStoreDrawer = ({
  handleCloseInfoStoreDrawer,
  isInfoStoreopen,
  chargeWalletInfo,
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
      handleCloseDrawer={handleCloseInfoStoreDrawer}
      PageTitle={getNameTitle()}>
      <Grid size={12}>
        {type === 'ChargeWallet' && chargeWalletInfo && (
          <ChargeWalletDetail chargeWalletInfo={chargeWalletInfo} />
        )}
      </Grid>
    </FullPageDrawerContainer>
  );
};

export default InfoStoreDrawer;
