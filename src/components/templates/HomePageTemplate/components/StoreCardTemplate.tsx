import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {Center} from '@/components/atoms/Center';
import {theme} from '@/config/theme';

export const StoreCardTemplate = () => (
  <Grid
    container
    size={12}
    alignItems={'stretch'}
    sx={{
      borderRadius: theme.shape.borderRadius,
      bgcolor: 'background.default',
      minHeight: 'calc(110px + 2rem)',
    }}>
    <Grid
      size={8.3}
      p={1.5}
      paddingInlineEnd={0}
      container
      alignContent={'flex-start'}>
      <Skeleton width="30%" height={30} />
      <Skeleton width="80%" variant="text" height={20} sx={{mt: 2}} />
      <Skeleton width="80%" variant="text" height={20} />
      <Skeleton width="40%" variant="text" height={20} />
    </Grid>
    <Grid
      size={3.7}
      sx={{
        p: 1,
        paddingInlineEnd: 2,
        position: 'relative',
      }}>
      <Center fullSize>
        <Skeleton variant="rectangular" width="100%" height={100} />
      </Center>
    </Grid>
  </Grid>
);
