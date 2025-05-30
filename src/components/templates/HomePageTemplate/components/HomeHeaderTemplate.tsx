import {Box, Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const HomeHeaderTemplate = () => (
  <Grid size={12} container flexWrap={'nowrap'} gap={2}>
    <Grid size={12} container alignItems={'center'} spacing={2}>
      <Grid
        size="auto"
        sx={{
          height: '42px',
          width: '40px',
        }}>
        <Skeleton
          variant="rectangular"
          width={42}
          height={42}
          sx={{
            borderRadius: '0.75rem',
          }}
        />
      </Grid>
      <Grid size={'grow'} display={'flex'} flexDirection={'column'} container>
        <Skeleton variant="rectangular" width="80px" height={'0.75rem'} />
        <Skeleton variant="rectangular" width="80px" height={'1rem'} />
      </Grid>
    </Grid>

    <Grid size="auto" offset={'auto'}>
      <Grid size={12} sx={{marginBottom: '8px'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="text" width={50} height={16} />
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
          <Skeleton variant="circular" width={24} height={24} />
          <Skeleton variant="text" width={50} height={16} />
        </Box>
      </Grid>
    </Grid>
  </Grid>
);
