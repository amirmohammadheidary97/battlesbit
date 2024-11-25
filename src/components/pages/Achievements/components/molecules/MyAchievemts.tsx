import {useNavigate} from 'react-router';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {TAchieve} from '../../fakeData/fake';
import {useAchievementState} from '../../state/achievement.state';
import RectangularAchievement from '../atoms/RectangularAchievement';

import {flex} from '@/utils/flexHelper';

const MyAchievements = ({
  setSelectedItem,
}: {
  setSelectedItem: React.Dispatch<React.SetStateAction<TAchieve | undefined>>;
}) => {
  const navigate = useNavigate();
  const {myAchievements} = useAchievementState();
  // const shuffled = myAchievements.sort(() => 0.5 - Math.random());
  ///
  const onShowMoreClick = () => {
    navigate('?show=all');
  };

  return (
    <Grid container size={12} rowSpacing={'0.5rem'}>
      <Grid size={12} sx={{...flex().jbetween().acenter().result}}>
        <Typography variant="subtitle1">My Achievements</Typography>
        <Typography variant="caption" color="primary" onClick={onShowMoreClick}>
          show all
        </Typography>
      </Grid>
      <Grid size={12} sx={{...flex().jbetween().acenter().result}}>
        {myAchievements.slice(0, 3).map(ach => (
          <RectangularAchievement
            key={ach.id}
            desc={ach.desc}
            isLocked={false}
            title={ach.title}
            achieve={ach}
            setSelectedItem={setSelectedItem}
            isReadable
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default MyAchievements;
