import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const HighlightedAchievesSkeleton = () => (
  <Grid size={12} container px={2}>
    <Grid size={12} sx={{...flex().column().gap('0.5rem').result}}>
      <Typography sx={{fontFamily: 'Nunito Sans', px: 2}} variant="caption">
        <Skeleton variant="text" height="2.25rem" width="100%" />
      </Typography>
      <Box
        width={1}
        pr={'1rem'}
        sx={{...flex().acenter().jbetween().gap('0.25rem').result}}>
        {Array.from({length: 6}).map((_, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Skeleton variant="circular" width="3.125rem" height="3.125rem" />
            <Typography
              fontWeight={400}
              lineHeight="0.855625rem"
              fontSize="0.625rem"
              width="100%"
              fontFamily="Alfa Slab One">
              <Skeleton variant="text" width="100%" />
            </Typography>
          </Box>
        ))}
      </Box>
    </Grid>
  </Grid>
);

export default HighlightedAchievesSkeleton;
