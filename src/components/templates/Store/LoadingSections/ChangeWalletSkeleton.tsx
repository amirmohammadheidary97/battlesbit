import {Card, Grid2, Skeleton} from '@mui/material';

const ChangeWalletSkeleton = () => (
  <Grid2 container spacing={1} marginTop="8px" mb={3}>
    {[...Array(4)].map((_, index) => (
      <Grid2 size={3} spacing={3} component="div" key={index}>
        <Card
          sx={{
            padding: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '120px',
            justifyContent: 'center',
          }}>
          <Skeleton variant="rectangular" width={45} height={50} />
          <Skeleton variant="text" width={60} height={20} sx={{mt: 1}} />
          <Skeleton variant="text" width={40} height={15} />
        </Card>
      </Grid2>
    ))}
  </Grid2>
);

export default ChangeWalletSkeleton;
