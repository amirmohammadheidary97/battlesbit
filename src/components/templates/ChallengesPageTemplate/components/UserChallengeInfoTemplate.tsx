import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

const UserChallengeInfoTemplate = () => (
  <Grid
    display={'flex'}
    alignItems={'center'}
    size={12}
    justifyContent={'space-between'}>
    <Skeleton
      variant="rectangular"
      width="120px"
      height="70px"
      sx={{
        clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)',
      }}
    />
    <Grid
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mx={2}>
      <Grid>
        <Skeleton width={'80px'} height={'22px'} />
      </Grid>
      <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Skeleton width={'20px'} height={'22px'} />
        <Skeleton width={'120px'} height={'22px'} />
      </Grid>
    </Grid>
    <Skeleton
      variant="rectangular"
      width="120px"
      height="70px"
      sx={{
        clipPath: 'polygon(100% 0, 20% 0, 0 50%, 20% 100%, 100% 100%)',
      }}
    />
  </Grid>
);

export default UserChallengeInfoTemplate;
