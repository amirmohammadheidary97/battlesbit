import {Box, Skeleton, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const NextPrizeCardTemplate = () => {
  const theme = useTheme();

  return (
    <Grid
      size={12}
      container
      spacing={1}
      sx={{
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: 2,
          justifyContent: 'space-between',
        }}>
        <Box width={1} sx={{display: 'flex', flexDirection: 'column', gap: 0}}>
          <Skeleton width="50%" height={33} variant="text" />
          <Skeleton width="30%" height={26} variant="text" />
        </Box>
        {/*  */}
        <Box width={1} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
          <Skeleton variant="text" width="50%" height={15} />
          <Skeleton
            variant="rectangular"
            height={16}
            sx={{
              width: '90%',
              borderRadius: theme.shape.borderRadius,
            }}
          />
        </Box>
      </Box>
      <Grid size="auto" p={2}>
        <Skeleton
          sx={{
            maxHeight: '150px',
          }}
          variant="rectangular"
          width={90}
          height={115}
        />
      </Grid>
    </Grid>
  );
};
