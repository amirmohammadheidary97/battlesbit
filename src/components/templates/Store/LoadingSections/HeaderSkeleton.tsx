import {Box, Skeleton} from '@mui/material';

const HeaderSkeleton = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      mb: 2,
    }}>
    <Skeleton
      variant="rounded"
      sx={{margin: '10px 0px 0px 10px'}}
      width={40}
      height={40}
    />
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="text" width={80} height={15} />
    </Box>
  </Box>
);

export default HeaderSkeleton;
