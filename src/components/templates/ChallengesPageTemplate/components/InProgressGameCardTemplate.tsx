import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const InProgressGameCardTemplate = () => (
  <Grid
    container
    size={12}
    columns={12}
    spacing={0.5}
    sx={{
      padding: 2,
      borderRadius: '14px',
      backgroundColor: 'background.paper',
    }}>
    <Grid size={8.5} spacing={1} container columns={12}>
      <Grid size={12}>
        <Skeleton variant="text" height={21.83} width="70%" sx={{zIndex: 2}} />
      </Grid>
      <Grid size={12}>
        <Skeleton variant="text" height={21.83} width="50%" />
      </Grid>
    </Grid>
    <Grid
      size={3.5}
      container
      alignContent={'center'}
      flexDirection={'column'}
      justifyContent={'space-between'}>
      <Skeleton variant="rectangular" height={40} width="100%" />
      <Skeleton variant="rectangular" height={40} width="100%" />
    </Grid>
  </Grid>
);
