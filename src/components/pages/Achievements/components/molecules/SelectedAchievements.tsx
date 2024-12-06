import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useAchievementState} from '../../state/achievement.state';
import CircularAchievement from '../atoms/CircularAchievement';
import EmptyPlaceholder from '../atoms/EmptyPlaceholder';

import {flex} from '@/utils/flexHelper';

const SelectedAchievements = () => {
  const {myAchievements} = useAchievementState();
  const selectedAchieves = myAchievements.filter(
    ach => ach.isSelected === true,
  );
  const achievementsCount = selectedAchieves ? selectedAchieves.length : 0;

  return (
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
      <Grid size={12} sx={{...flex().jbetween().acenter().result}}>
        {achievementsCount > 0 &&
          achievementsCount < 4 &&
          selectedAchieves.map(ach => (
            <CircularAchievement
              key={ach.id}
              isFullWidth
              isSelected
              title={ach.title}
            />
          ))}
        {achievementsCount === 3
          ? null
          : Array(3 - achievementsCount)
              .fill(null)
              .map((_, index) => <EmptyPlaceholder key={index} />)}
      </Grid>
    </Grid>
  );
};

export default SelectedAchievements;
