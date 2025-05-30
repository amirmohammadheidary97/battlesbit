import {Box, Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

export const NextLevelCardTemplate = () => (
  <>
    <Grid
      container
      size={12}
      spacing={0}
      mt={3}
      bgcolor={'background.default'}
      borderRadius={theme.shape.borderRadius}>
      {/*  */}
      <Grid
        size={'grow'}
        container
        alignContent={'space-between'}
        spacing={2}
        p={1}
        paddingInlineStart={2}
        pt={0}>
        {/* Level */}
        <Grid size={12} alignItems={'flex-end'} container spacing={2}>
          <Skeleton variant="text" width={60} height={80} />
          <Skeleton variant="text" width={70} height={45} sx={{mb: 0.5}} />
        </Grid>
        {/* Rewards */}
        <Grid size={12} container rowSpacing={0.75}>
          <Grid size={12}>
            <Skeleton variant="text" width={100} height={16} />
          </Grid>
          <Grid size={12} display={'flex'} gap={1} alignItems={'center'}>
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <Box
                  key={idx}
                  display={'flex'}
                  alignItems={'center'}
                  gap={0.5}
                  flexWrap={'nowrap'}>
                  <Skeleton variant="circular" width={14} height={14} />
                  <Skeleton variant="text" width={30} height={14} />
                </Box>
              ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Avatar */}
      <Grid
        size={4}
        sx={{
          position: 'relative',
        }}>
        <Skeleton
          variant="rectangular"
          width={80}
          height={120}
          sx={{
            position: 'absolute',
            bottom: theme.spacing(1.5),
            right: theme.spacing(1.5),
          }}
        />
      </Grid>
    </Grid>
  </>
);
