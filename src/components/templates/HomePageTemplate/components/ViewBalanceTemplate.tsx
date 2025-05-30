import {Box, Skeleton, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const ViewBalanceTemplate = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={1.5}
      size={12}
      p={1.5}
      sx={{
        bgcolor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        position: 'relative',
        overflow: 'hidden',
        height: '64px',
      }}>
      <Grid
        size={'grow'}
        sx={{
          zIndex: 2,
        }}>
        <Box
          sx={{
            padding: '0.5rem',
            borderRadius: '0.75rem',
            background: 'common.["ai-card-bg"]',
            width: '100%',
            height: '2.25rem',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Skeleton variant="text" width="30%" height="1.25rem" />
          <Skeleton variant="text" width="50%" height="1.25rem" />
          <Skeleton variant="text" width="50%" height="1.25rem" />
        </Box>
      </Grid>

      <Grid size={'auto'}>
        <Skeleton variant="rectangular" width="70px" height="36px" />
      </Grid>
    </Grid>
  );
};
