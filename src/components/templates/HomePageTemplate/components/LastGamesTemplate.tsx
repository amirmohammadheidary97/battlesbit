import {Box, Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

export const LastGamesTemplate = () => (
  <Grid
    container
    size={12}
    bgcolor={'background.default'}
    spacing={2}
    p={2}
    borderRadius={theme.shape.borderRadius}>
    <Grid size={12}>
      <Skeleton variant="text" width="30%" height={24} />
    </Grid>
    <Grid size={12} container spacing={2} justifyContent={'space-evenly'}>
      {Array.from({length: 4}).map((_, index) => (
        <Grid key={index} size={3}>
          <LastGameItemSkeleton />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

const LastGameItemSkeleton = () => (
  <Box sx={{...flex().column().acenter().gap(0).result}}>
    <Skeleton variant="circular" width={19} height={19} />
    <Box sx={{...flex().row().jcenter().result, gap: 0.2, mt: 0.5}}>
      <Skeleton variant="rectangular" width={25} height={14} />
      <Skeleton variant="rectangular" width={25} height={14} />
    </Box>
    <Skeleton width={60} height={20} />
  </Box>
);
