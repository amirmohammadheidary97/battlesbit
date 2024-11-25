import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';

import {ChargeWalletItem} from '../../molecules/ChargeWalletItem';

import type {ChargeWalletItemType} from '@/types/models/store';

type ChargeWalletProps = {
  title: string;
  description: string;
  chargeWalletItems: ChargeWalletItemType[];
};

const ChargeWalletWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '5px',
  width: '100%',
  height: '100%',
}));

export const ChargeWallet: React.FC<ChargeWalletProps> = ({
  description,
  title,
  chargeWalletItems,
}) => (
  <ChargeWalletWrapper>
    <Typography
      component="p"
      variant="caption"
      marginBottom="10px"
      fontSize="16px"
      fontFamily="'Nunito Sans', sans-serif"
      lineHeight="10px"
      color="text.white">
      {title}
    </Typography>
    <Typography
      component="span"
      variant="caption"
      fontWeight="400"
      fontSize="12px"
      lineHeight="15px"
      fontFamily="'Nunito Sans', sans-serif"
      color="text.secondary">
      {description}
    </Typography>
    <Grid container spacing={1} marginTop="8px" sx={{height: '100%'}}>
      {chargeWalletItems.map((item, index) => (
        <ChargeWalletItem key={index} {...item} />
      ))}
    </Grid>
  </ChargeWalletWrapper>
);
