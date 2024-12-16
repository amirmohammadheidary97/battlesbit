import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useAchievementState} from '../../state/achievement.state';
import CircularAchievement from '../atoms/CircularAchievement';
import EmptyPlaceholder from '../atoms/EmptyPlaceholder';

const SelectedAchievements = () => {
  const {myAchievements} = useAchievementState();
  const selectedAchieves = myAchievements.filter(
    ach => ach.isSelected === true,
  );
  const achievementsCount = selectedAchieves ? selectedAchieves.length : 0;

  return (
    <Grid size={12} container px={2}>
      <Grid
        container
        size={12}
        rowSpacing={'1rem'}
        sx={{
          p: '1rem',
          bgcolor: 'background.paper',
          borderRadius: theme => theme.shape.borderRadius,
        }}>
        <Grid size={12}>
          <Typography variant="h5">Achievements</Typography>
        </Grid>
        <Grid
          size={12}
          container
          spacing={1.5}
          justifyContent={'space-between'}
          flexWrap={'nowrap'}
          alignItems={'center'}>
          {achievementsCount > 0 &&
            achievementsCount < 4 &&
            selectedAchieves.map(ach => (
              <Grid key={ach.id} size={4}>
                <CircularAchievement isFullWidth isSelected title={ach.title} />
              </Grid>
            ))}
          {achievementsCount === 3
            ? null
            : Array(3 - achievementsCount)
                .fill(null)
                .map((_, index) => <EmptyPlaceholder key={index} />)}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectedAchievements;
