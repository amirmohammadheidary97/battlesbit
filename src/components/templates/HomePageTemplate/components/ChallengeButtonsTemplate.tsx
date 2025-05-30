import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const ChallengeButtonsTemplate = () => (
  <>
    <Grid size={12} spacing={1} container>
      <Grid size={6}>
        <Skeleton
          variant="rectangular"
          height={52}
          sx={{borderRadius: 2, width: '100%'}}
        />
      </Grid>
      <Grid size={6}>
        <Skeleton
          variant="rectangular"
          height={52}
          sx={{borderRadius: 2, width: '100%'}}
        />
      </Grid>
    </Grid>
  </>
);
