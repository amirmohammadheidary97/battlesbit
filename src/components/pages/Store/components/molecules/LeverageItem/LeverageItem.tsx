import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {LeverageItemType} from '@/types/models/store';

export const LeverageItem: React.FC<LeverageItemType> = ({
  amount,
  currency,
  iconUrl,
  xpCuntent,
  xpValue,
}) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        backgroundColor: '#25272F',
        borderRadius: '12px',
        display: 'flex',
        height: '50px',
        padding: '0 8px',
        alignItems: 'center',
      }}
      size={6}>
      <Grid container alignItems={'flex-end'} spacing={2}>
        <Grid
          sx={{
            height: '32px',
            width: '32px',
            img: {
              borderRadius: '0.75rem',
              width: '100%',
              height: '100%',
            },
          }}>
          <img src={iconUrl} alt={xpCuntent + ' ' + xpValue} />
        </Grid>
      </Grid>
      <Grid
        display="flex"
        alignContent="center"
        marginLeft="8px"
        flexDirection="column">
        <Typography
          variant="caption"
          fontFamily="'Nunito Sans', sans-serif"
          fontSize="16px"
          marginTop="7px">
          {xpCuntent}{' '}
          <Typography
            component="span"
            variant="caption"
            fontFamily="'Nunito Sans', sans-serif"
            fontSize="16px"
            color={theme.palette.primary.main}
            lineHeight="11px"
            textTransform="uppercase">
            {xpValue} X
          </Typography>
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          fontFamily="'Nunito Sans', sans-serif"
          color={'text.white'}
          variant="caption"
          fontSize="10px"
          fontWeight="700"
          marginTop="2px">
          {amount}{' '}
          <Typography fontSize="10px" marginLeft="5px">
            {currency}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};
