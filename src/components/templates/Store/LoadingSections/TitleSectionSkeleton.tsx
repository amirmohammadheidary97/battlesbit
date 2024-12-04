import {Grid2, Skeleton} from '@mui/material';

const TitleSectionSkeleton = () => (
  <Grid2
    display={'flex'}
    alignItems={'start'}
    justifyContent={'space-between'}
    sx={{width: '100%'}}>
    <Grid2>
      <Skeleton variant="text" width={80} height={15} />
      <Skeleton
        variant="text"
        sx={{marginTop: '5px'}}
        width={130}
        height={15}
      />
    </Grid2>
    <Skeleton variant="text" width={40} height={25} />
  </Grid2>
);

export default TitleSectionSkeleton;
