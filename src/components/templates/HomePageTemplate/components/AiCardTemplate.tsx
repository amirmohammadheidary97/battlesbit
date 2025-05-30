import {Box, Skeleton, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const AiCardTemplate = () => {
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
        height: '60px',
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
            border: `1px solid ${theme.palette.divider}`,
            background: 'common.["ai-card-bg"]',
            width: '100%',
            height: '2.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          <Skeleton variant="text" width="60%" height="1rem" />
        </Box>
      </Grid>

      <Grid size={'auto'}>
        <Skeleton variant="rectangular" width="100px" height="36px" />
      </Grid>
    </Grid>
  );
};
