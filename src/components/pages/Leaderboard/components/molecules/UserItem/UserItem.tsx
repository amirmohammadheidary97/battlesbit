import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {UserItemType} from '@/types/models/leaderboard';

export const UserItem: React.FC<UserItemType> = ({
  amount,
  avatar,
  currency,
  level,
  userName,
  id,
}) => {
  const theme = useTheme();
  return (
    <Grid
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      my={1}
      sx={{
        backgroundColor: id == 4 ? 'rgba(243, 199, 59, 0.4)' : 'transparent',
        width: '100%',
        padding: '3px 10px',
        borderRadius: id == 4 ? '12px' : '0',
        borderBottom: '1px solid #595959',
      }}>
      <Grid display={'flex'} alignItems={'center'}>
        <Typography
          color={'test.white'}
          variant="caption"
          fontWeight={'400'}
          fontSize={'16px'}
          fontFamily="'Nunito Sans', sans-serif">
          {id}.
        </Typography>
        <Grid display={'flex'} alignItems={'center'} ml={1}>
          <Grid container alignItems={'flex-end'} spacing={2}>
            <Grid
              sx={{
                height: '46px',
                width: '46px',
                img: {
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                },
              }}>
              <img src={avatar} alt={userName} />
            </Grid>
          </Grid>
          <Grid ml={1} display={'flex'} flexDirection={'column'}>
            <Typography
              color={'test.white'}
              variant="caption"
              fontWeight={'400'}
              fontSize={'14px'}
              lineHeight={'19.1px'}
              fontFamily="'Nunito Sans', sans-serif">
              {id == 4 ? 'You' : userName}
            </Typography>
            <Typography
              color={'test.white'}
              variant="caption"
              fontWeight={'400'}
              fontSize={'14px'}
              fontFamily="'Nunito Sans', sans-serif">
              Level{level}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid alignItems={'end'} display={'flex'} flexDirection={'column'}>
        <Typography
          color={theme.palette.primary.main}
          variant="caption"
          fontWeight={'700'}
          fontSize={'14px'}
          lineHeight={'19.1px'}
          fontFamily="'Nunito Sans', sans-serif">
          {amount}
          <Typography
            color={theme.palette.text.primary}
            variant="caption"
            fontWeight={'400'}
            fontSize={'14px'}
            lineHeight={'22.1px'}
            fontFamily="'Nunito Sans', sans-serif">
            .00 {currency}
          </Typography>
        </Typography>
        <Typography
          color={
            id == 4 ? theme.palette.text.primary : theme.palette.text.secondary
          }
          variant="caption"
          fontWeight={'400'}
          fontSize={'10px'}
          lineHeight={'13.64px'}
          fontFamily="'Nunito Sans', sans-serif">
          Earned since joined
        </Typography>
      </Grid>
    </Grid>
  );
};
