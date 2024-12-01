import {useEffect} from 'react';
import Grid from '@mui/material/Grid2';

import type {TAchieve} from '../../fakeData/fake';
import {useAchievementState} from '../../state/achievement.state';
import RectangularAchievement from '../atoms/RectangularAchievement';

import FullPageDrawerContainer from '@/components/pages/Wallet/components/organism/DrawerContainer';
import {flex} from '@/utils/flexHelper';
import { Typography } from '@mui/material';

type Props = {
  isOpen: boolean;
  isReadable: boolean;
  setSelectedItem: React.Dispatch<React.SetStateAction<TAchieve | undefined>>;
};

const AllAchievementDrawer = ({isOpen, isReadable, setSelectedItem}: Props) => {
  const {myAchievements, setSelectedAchieves, selectedAchieves} =
    useAchievementState();
  return (
    <FullPageDrawerContainer
      isOpen={isOpen}
      handleCloseDrawer={() => setSelectedItem(undefined)}
      PageTitle="My Achievements">
      <Grid
        container
        p={'1rem'}
        height={'calc(100vh - 40px)'}
        sx={{...flex().column().acenter().result}}
        size={12}>
        <Grid  gap={'8px'} size={12} container>
          {myAchievements && myAchievements.length > 0 && myAchievements.map((achieve, i) => (
            <RectangularAchievement
              key={i}
              desc={achieve.desc}
              title={achieve.title}
              isLocked={false}
              isSelected={!isReadable ? achieve.isSelected : false}
              isReadable={isReadable}
              achieve={achieve}
              setSelectedItem={setSelectedItem}
              setHighlighted={!isReadable ? setSelectedAchieves : undefined}
            />
          ))}
          {myAchievements.length === 0 && 
            <Typography variant='caption'>
              there is no achievements
            </Typography>
          }
        </Grid>
      </Grid>
    </FullPageDrawerContainer>
  );
};

export default AllAchievementDrawer;
