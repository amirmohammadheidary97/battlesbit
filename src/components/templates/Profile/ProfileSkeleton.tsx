import {Avatar, Box, Skeleton, Stack} from '@mui/material';

const ProfileSkeleton = () => (
  <Box
    sx={{
      backgroundColor: 'transparent',
      padding: 2,
      borderRadius: 2,
      margin: 'auto',
      color: '#fff',
    }}>
    <Box display={'flex'} alignItems="center" sx={{marginBottom: 3}}>
      <Skeleton variant="circular">
        <Avatar sx={{width: 84, height: 84}} />
      </Skeleton>
      <Box display={'flex'} ml={1} flexDirection={'column'}>
        <Skeleton variant="text" width={120} height={30} />
        <Skeleton variant="text" width={200} sx={{marginTop: '10px'}} />
      </Box>
    </Box>

    <Stack spacing={2}>
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
    </Stack>
  </Box>
);

export default ProfileSkeleton;
