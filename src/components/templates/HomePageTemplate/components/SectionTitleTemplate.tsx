import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const SectionTitleTemplate = () => (
  <Grid
    container
    size={12}
    p={1.5}
    display={'flex'}
    justifyContent={'space-between'}
    sx={{
      position: 'relative',
      overflow: 'hidden',
    }}>
    <Grid size={4}>
      <Skeleton variant="text" width="100%" height="20px" />
    </Grid>
    <Grid size={2}>
      <Skeleton variant="text" width="100%" height="20px" />
    </Grid>
  </Grid>
);
