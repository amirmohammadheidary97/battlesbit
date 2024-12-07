import {Card, Grid2, Skeleton} from '@mui/material';

const PackagesItemSkeleton = () => (
  <Grid2 size={6} component="div">
    <Card
      sx={{
        padding: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'start',
      }}>
      <Skeleton variant="rounded" width={95} height={100} />
      <Skeleton variant="text" sx={{marginTop: '5px'}} width={80} height={30} />
      <Grid2
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Skeleton variant="text" width={50} height={20} />
        <Skeleton
          variant="text"
          sx={{marginLeft: '5px'}}
          width={50}
          height={20}
        />
      </Grid2>
      <Skeleton variant="text" sx={{width: '100%'}} height={50} />
    </Card>
  </Grid2>
);

export default PackagesItemSkeleton;
