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
  isAllAchieves: boolean;
};

const AllAchievementDrawer = ({isOpen, isReadable, setSelectedItem , isAllAchieves}: Props) => {
  const {myAchievements, setSelectedAchieves, allAchievements} =
    useAchievementState();
  return (
    <FullPageDrawerContainer
      isOpen={isOpen}
      handleCloseDrawer={() => setSelectedItem(undefined)}
      PageTitle={isAllAchieves ? "All Achievements" : "My Achievements"}>
      <Grid
        container
        p={'1rem'}
        height={'calc(100vh - 40px)'}
        sx={{...flex().column().acenter().result}}
        size={12}>
        <Grid  spacing={1} container size={12} >
          {(isAllAchieves ? allAchievements : myAchievements).map((achieve, i) => (
            <Grid size={4}>
            <RectangularAchievement
              key={i}
              desc={achieve.desc}
              title={achieve.title}
              isLocked={achieve.isLocked}
              isSelected={!isReadable ? achieve.isSelected : false}
              isReadable={isReadable}
              achieve={achieve}
              setSelectedItem={setSelectedItem}
              setHighlighted={!isReadable ? setSelectedAchieves : undefined}
            />
            </Grid>
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
