import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import LinearAchievement from '../atoms/LinearAchievement';

import {flex} from '@/utils/flexHelper';

const InProggressAchievement = () => (
  <Grid container size={12} rowSpacing={'0.5rem'}>
    <Grid size={12}>
      <Typography variant="subtitle1">In Progress Achievements</Typography>
    </Grid>
    <Grid size={12} sx={{...flex().jbetween().acenter().result}}>
      <LinearAchievement
        desc="win 20 games in a row"
        title="Predator"
        progress={4}
        total={20}
      />
      <LinearAchievement
        desc="win 15 games in a row"
        title="Predator"
        progress={4}
        total={15}
      />
    </Grid>
  </Grid>
);

export default InProggressAchievement;
