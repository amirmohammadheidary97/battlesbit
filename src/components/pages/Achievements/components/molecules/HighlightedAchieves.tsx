import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useAchievementState} from '../../state/achievement.state';
import CircularAchievement from '../atoms/CircularAchievement';

import {flex} from '@/utils/flexHelper';

const HighlightedAchieves = () => {
  const {myAchievements} = useAchievementState();
  return (
    <Grid size={12} container px={2}>
      <Grid
        size={12}
        // p={"1rem"}
        sx={{...flex().column().gap('0.5rem').result}}>
        <Typography
          sx={{fontFamily: 'Nunito Sans'}}
          px={'1rem'}
          variant="caption">
          Also you can change your highlighted achievements which other see in
          your profile
        </Typography>
        <Box
          width={1}
          pr={'1rem'}
          sx={{...flex().acenter().jbetween().gap('4px').result}}>
          {myAchievements &&
            myAchievements
              .slice(0, 6)
              .map(ach => (
                <CircularAchievement
                  key={ach.id}
                  isFullWidth={false}
                  isSelected={ach?.isSelected || false}
                  title={ach.title}
                />
              ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HighlightedAchieves;
