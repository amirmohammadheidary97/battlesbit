import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';

import {DetailAvatarItem} from '../../molecules/DetailAvatar';

import type {ChargeWalletItemType} from '@/types/models/store';

type ChargeWalletProps = {
  chargeWalletInfo: ChargeWalletItemType;
};

const ChargeWalletWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}));

export const ChargeWalletDetail: React.FC<ChargeWalletProps> = ({
  chargeWalletInfo,
}) => (
  <ChargeWalletWrapper>
    <Grid container spacing={2} display="flex">
      <Grid
        position={'absolute'}
        sx={{
          img: {
            width: '100%',
            height: '329px',
            filter: 'brightness(40%) blur(7.2px)',
          },
        }}>
        <img src={chargeWalletInfo.iconUrl} alt={chargeWalletInfo.currency} />
      </Grid>
      <Grid
        size={12}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'flex-end'}
        marginTop={'100px'}>
        <DetailAvatarItem
          icon={chargeWalletInfo.iconUrl}
          amount={chargeWalletInfo.amount}
          currency={chargeWalletInfo.currency}
          onClick={() => {}}
        />
      </Grid>
    </Grid>
  </ChargeWalletWrapper>
);
