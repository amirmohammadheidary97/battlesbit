import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {NewAvatarsType} from '@/types/models/store';

export const GetNewAvatarItem: React.FC<NewAvatarsType> = ({
  amount,
  currency,
  iconUrl,
}) => (
  <Grid
    sx={{
      display: 'flex',
      height: '50px',
      padding: '0 8px',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    size={1}>
    <Grid container alignItems={'flex-end'} spacing={2}>
      <Grid
        sx={{
          height: '50px',
          width: '50px',
          img: {
            borderRadius: '100%',
            width: '100%',
            height: '100%',
          },
        }}>
        <img src={iconUrl} alt={currency} />
      </Grid>
    </Grid>
    <Grid display="flex" alignItems="center">
      <Typography
        component="span"
        display="flex"
        alignItems="center"
        fontFamily="'Nunito Sans', sans-serif"
        color={'text.white'}
        variant="caption"
        fontSize="12px"
        fontWeight="700">
        {amount}{' '}
        <Typography fontSize="11px" marginLeft="5px">
          {currency}
        </Typography>
      </Typography>
    </Grid>
  </Grid>
);
