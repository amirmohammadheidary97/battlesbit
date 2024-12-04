import {Card, Grid2, Skeleton} from '@mui/material';

const LeverageItemSkeleton = () => (
  <Grid2 size={6} component="div">
    <Card
      sx={{
        height: '44px',
        padding: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}>
      <Skeleton variant="circular" width={33} height={33} />
      <Grid2 ml={1}>
        <Skeleton variant="text" width={60} height={15} />
        <Skeleton variant="text" width={40} height={15} />
      </Grid2>
    </Card>
  </Grid2>
);

export default LeverageItemSkeleton;
