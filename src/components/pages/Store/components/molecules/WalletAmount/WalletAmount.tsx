import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import WalletIcon from '@/assets/img/icons/store/wallet.png';

type WalletAmountTypeProps = {
  walletAmount: number;
};

export const WalletAmountItem: React.FC<WalletAmountTypeProps> = ({
  walletAmount,
}) => (
  <Grid size={12} display={'flex'} alignItems={'center'}>
    <Grid>
      <Grid
        sx={{
          height: '24px',
          width: '24px',
          img: {
            width: '100%',
            height: '100%',
          },
        }}>
        <img src={WalletIcon} alt={`${walletAmount}`} />
      </Grid>
    </Grid>
    <Typography
      color="text.white"
      component="span"
      variant="caption"
      fontFamily="'Nunito Sans', sans-serif"
      fontSize="15px"
      margin={'0px 5px'}
      fontWeight={'400'}
      lineHeight="11px">
      Wallet :
    </Typography>
    <Typography
      color="text.white"
      component="span"
      variant="caption"
      fontFamily="'Nunito Sans', sans-serif"
      fontSize="15px"
      fontWeight={'400'}
      lineHeight="11px">
      {walletAmount} VSD
    </Typography>
  </Grid>
);
