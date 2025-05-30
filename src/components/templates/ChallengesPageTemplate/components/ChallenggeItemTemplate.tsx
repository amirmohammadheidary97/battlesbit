import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

const ChallenggeItemTemplate = () => (
  <Grid
    container
    size={12}
    columns={12}
    height={'109px'}
    spacing={0.5}
    sx={{
      padding: 2,
      borderRadius: '14px',
      backgroundColor: 'background.paper',
    }}>
    <Grid size={8.5} spacing={1} container columns={12}>
      <Grid size={12}>
        <Skeleton variant="text" height={21.83} width="50%" sx={{zIndex: 2}} />
        <Skeleton variant="text" height={21.83} width="30%" />
      </Grid>
      <Grid size={12}>
        <Skeleton variant="text" height={21.83} width="70%" />
      </Grid>
    </Grid>
    <Grid
      size={3.5}
      container
      alignContent={'center'}
      flexDirection={'column'}
      justifyContent={'space-between'}>
      <Skeleton variant="circular" height={'100%'} width="100%" />
    </Grid>
  </Grid>
);

export default ChallenggeItemTemplate;
