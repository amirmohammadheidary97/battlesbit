import {Grid2, Skeleton} from '@mui/material';

const AvatarItem = () => (
  <Grid2 size={1} component="div">
    <Grid2
      sx={{
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width={40} height={15} sx={{mt: 1}} />
    </Grid2>
  </Grid2>
);

export default AvatarItem;
