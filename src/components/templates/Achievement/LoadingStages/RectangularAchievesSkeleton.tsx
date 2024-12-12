import {Box, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {flex} from '@/utils/flexHelper';

const RectangularAchievesSkeleton = ({
  isMyAchievement,
}: {
  isMyAchievement: boolean;
}) => (
  <Grid size={12} container px={2}>
    <Grid container size={12} rowSpacing="0.5rem">
      <Grid size={12} sx={{...flex().jbetween().acenter().result}}>
        {isMyAchievement ? (
          <>
            <Typography variant="subtitle1">
              <Skeleton width="7.5rem" />
            </Typography>
            <Typography variant="caption" color="primary">
              <Skeleton width="3.125rem" />
            </Typography>
          </>
        ) : (
          <Typography variant="subtitle1">
            <Skeleton width="12.5rem" />
          </Typography>
        )}
      </Grid>
      <Grid container size={12} alignItems={'center'} spacing={1.5}>
        {Array.from({length: 6}).map((_, index) => (
          <Grid size={4} key={index}>
            <Box
              // width="6.8125rem"
              p="0.625rem"
              sx={{
                borderRadius: theme => theme.shape.borderRadius,
                ...flex().column().acenter().gap('0.5rem').result,
                position: 'relative',
                bgcolor: 'background.paper',
              }}>
              <Skeleton variant="circular" width="2.93rem" height="2.93rem" />
              <Box sx={{...flex().column().acenter().jcenter().result}}>
                <Typography
                  fontSize="0.9375rem"
                  lineHeight="1.28375rem"
                  fontWeight="400"
                  fontFamily="Alfa Slab One">
                  <Skeleton variant="text" width="5.3125rem" />
                </Typography>
                <Typography
                  fontSize="0.5rem"
                  lineHeight="0.681875rem"
                  fontWeight="400"
                  letterSpacing="0.004em"
                  fontFamily="Nunito Sans">
                  <Skeleton variant="text" width="5.3125rem" />
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default RectangularAchievesSkeleton;
