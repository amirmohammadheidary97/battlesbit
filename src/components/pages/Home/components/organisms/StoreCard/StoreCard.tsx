import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import bg from '@/assets/img/bg/homepage-storecard-bg.png';
import {Center} from '@/components/atoms/Center';
import {theme} from '@/config/theme';

export const StoreCard = () => (
  <Grid
    container
    size={12}
    alignItems={'stretch'}
    sx={{
      borderRadius: theme.shape.borderRadius,
      bgcolor: 'background.default',
      minHeight: 'calc(110px + 2rem)',
    }}>
    <Grid size={8.3} p={1.5} paddingInlineEnd={0} alignContent={'flex-start'}>
      <Typography variant="h6" color="text.primary">
        Store
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={2}>
        you can get whatever you need to have more enjoyable time from store
      </Typography>
    </Grid>
    <Grid
      size={3.7}
      sx={{
        paddingInlineEnd: 1,
        position: 'relative',
        img: {
          //   maxWidth: 1,
          maxHeight: 1,
          position: 'absolute',
          minHeight: '140px',
          top: '0px',
        },
      }}>
      <Center fullSize>
        <img src={bg} loading="lazy" />
      </Center>
    </Grid>
  </Grid>
);
