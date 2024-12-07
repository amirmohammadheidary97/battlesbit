import {Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

const LeaderBoardHeroSkeleton = () => (
  <Grid size={12} container px={2}>
    <Grid
      size={12}
      container
      spacing="0.5rem"
      sx={{
        bgcolor: 'background.paper',
        borderRadius: theme => theme.shape.borderRadius,
        py: '1rem',
        px: '1rem',
        alignItems: 'center',
      }}>
      <Grid size={1}>
        <Skeleton variant="circular" width="1.5rem" height="1.5rem" />
      </Grid>
      <Grid size={2}>
        <Typography variant="body2">
          <Skeleton width={80} />
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default LeaderBoardHeroSkeleton;
