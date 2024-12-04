import {Box, Button, Skeleton, Typography} from '@mui/material';

export const DrawerTemplate = () => (
  <Box
    sx={{
      color: '#fff',
      padding: 3,
      borderRadius: 2,
      maxWidth: 360,
      margin: '0 auto',
      textAlign: 'center',
    }}>
    {/* Image Section */}
    <Box
      sx={{
        borderRadius: 2,
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
      }}>
      <Skeleton variant="rectangular" sx={{width: '100%'}} height={200} />
    </Box>

    {/* Button Section */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}>
      <Button
        variant="contained"
        sx={{
          padding: '6px 16px',
          fontSize: '14px',
          backgroundColor: '#FFD700',
          color: '#000',
        }}
        disabled>
        <Skeleton variant="text" width={50} height={20} />
      </Button>
      <Skeleton variant="text" width={60} height={30} />
    </Box>

    {/* Price Section */}
    <Typography
      sx={{
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#FFD700',
        mt: 2,
      }}>
      <Skeleton variant="text" width={80} height={30} />
    </Typography>

    {/* Description Section */}
    <Typography
      sx={{
        textAlign: 'left',
        color: '#ccc',
        fontSize: '14px',
        mt: 1,
      }}>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
    </Typography>
  </Box>
);
