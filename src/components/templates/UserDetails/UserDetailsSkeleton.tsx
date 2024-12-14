import {Box, Skeleton, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const UserDetailsSkeleton = () => (
  <Box
    sx={{
      p: 2,
      width: '100%',
      margin: '0 auto',
      backgroundColor: 'transparent',
      borderRadius: '8px',
    }}>
    {/* Header */}

    {/* Main Avatar */}
    <Box
      px={6}
      mt={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2,
      }}>
      <Skeleton variant="rounded" width={'100%'} height={252} />
    </Box>

    {/* Avatars Section */}
    <Grid size={12} display={'flex'} justifyContent={'center'}>
      <Typography sx={{mb: 1, textAlign: 'center', color: '#fff'}}>
        <Skeleton variant="text" width={100} height={40} />
      </Typography>
    </Grid>
    <Grid container spacing={1} mt={2} columns={{xs: 5, sm: 7, md: 8}}>
      {Array.from({length: 10}).map((_, index) => (
        <Grid size={1} key={index}>
          <Skeleton variant="circular" width={60} height={60} />
        </Grid>
      ))}
    </Grid>
    {/* Username Input */}
    <Stack spacing={1} sx={{mb: 3}} mt={5}>
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="rectangular" width="100%" height={40} />
    </Stack>

    {/* Save Button */}
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Skeleton variant="rectangular" width={100} height={40} />
    </Box>
  </Box>
);
