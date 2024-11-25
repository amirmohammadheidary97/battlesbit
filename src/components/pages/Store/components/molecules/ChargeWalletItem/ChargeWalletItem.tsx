import {useLocation, useNavigate} from 'react-router';
import {Box, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {ChargeWalletItemType} from '@/types/models/store';

export const ChargeWalletItem: React.FC<ChargeWalletItemType> = ({
  id,
  amount,
  amountTwo,
  currency,
  currencyTwo,
  iconUrl,
}) => {
  const theme = useTheme();
  ///
  const nav = useNavigate();
  const location = useLocation();
  return (
    <Grid
      sx={{
        backgroundColor: '#181A20',
        height: '100%',
        borderRadius: '12px',
      }}
      size={3}
      spacing={3}
      padding="12px">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={() =>
          nav(
            location.pathname +
              '?state=chargewallet&value=' +
              id +
              '&type=ChargeWallet',
          )
        }>
        <Grid container alignItems={'flex-end'} spacing={2}>
          <Grid
            sx={{
              height: '42px',
              width: '42px',
              img: {
                borderRadius: '0.75rem',
                width: '100%',
                height: '100%',
              },
            }}>
            <img src={iconUrl} alt={currency} />
          </Grid>
        </Grid>
        <Typography
          color={theme.palette.primary.main}
          variant="caption"
          fontFamily="'Nunito Sans', sans-serif"
          marginTop="7px">
          {amount}{' '}
          <Typography
            component="span"
            variant="caption"
            fontWeight="bold"
            fontFamily="'Nunito Sans', sans-serif"
            fontSize="10px"
            lineHeight="11px"
            textTransform="uppercase">
            {currency}
          </Typography>
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          fontFamily="'Nunito Sans', sans-serif"
          color={'text.white'}
          sx={{typography: {sm: 'body2'}}}
          variant="caption"
          fontSize="12px"
          fontWeight="700">
          {amountTwo}{' '}
          <Typography
            sx={{typography: {sm: 'body2'}}}
            fontSize="12px"
            marginLeft="5px">
            {currencyTwo}
          </Typography>
        </Typography>
      </Box>
    </Grid>
  );
};
