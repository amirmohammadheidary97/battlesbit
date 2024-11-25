import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {TAchieve} from '../../fakeData/fake';
import {useAchievementState} from '../../state/achievement.state';
import RectangularAchievement from '../atoms/RectangularAchievement';

import {flex} from '@/utils/flexHelper';

const HighlightedWithLLocked = ({
  setSelectedItem,
}: {
  setSelectedItem: React.Dispatch<React.SetStateAction<TAchieve | undefined>>;
}) => {
  const {allAchievements} = useAchievementState();
  return (
    <Grid container size={12} rowSpacing={'0.5rem'}>
      <Grid size={12}>
        <Typography variant="subtitle1">Highlighted Achievements</Typography>
      </Grid>
      <Grid size={12} sx={{...flex().jbetween().acenter().result}}>
        {allAchievements &&
          allAchievements.length > 0 &&
          allAchievements
            .slice(6, 9)
            .map(ach => (
              <RectangularAchievement
                key={ach.id}
                desc={ach.desc}
                isLocked={ach?.isLocked}
                title={ach.title}
                isReadable={true}
                achieve={ach}
                setSelectedItem={setSelectedItem}
              />
            ))}
      </Grid>
    </Grid>
  );
};

export default HighlightedWithLLocked;
