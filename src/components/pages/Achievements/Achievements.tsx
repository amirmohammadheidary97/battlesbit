import {useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import {Dialog} from '@mui/material';
import Grid from '@mui/material/Grid2';

import AchievementInfo from './components/molecules/AchievementInfo';
import AllAchievementDrawer from './components/molecules/AllAchievementDrawer';
import HighlightedAchieves from './components/molecules/HighlightedAchieves';
import HighlightedWithLLocked from './components/molecules/HighlightedWithLLocked';
import InProggressAchievement from './components/molecules/InProggressAchievement';
import MyAchievements from './components/molecules/MyAchievemts';
import SelectedAchievements from './components/molecules/SelectedAchievements';
import type {TAchieve} from './fakeData/fake';

const Achievements = () => {
  const location = useLocation();
  const isOpen = location.search.includes('show');
  //
  const [isReadable, setIsReadable] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<TAchieve | undefined>();

  //
  useEffect(() => {
    if (location.search.includes('all')) setIsReadable(true);
    else if (location.search.includes('highlighted') || location.search === '')
      setIsReadable(false);
  }, [location.search]);
  return (
    <Grid
      container
      size={12}
      gap={'12px'}
      mb={'1rem'}
      sx={{
        alignItems: 'start',
        p: '1rem',
      }}>
      {/*  */}
      <SelectedAchievements />
      {/*  */}
      <HighlightedAchieves />
      {/*  */}
      <HighlightedWithLLocked setSelectedItem={setSelectedItem} />
      {/*  */}
      <InProggressAchievement />
      {/*  */}
      <MyAchievements setSelectedItem={setSelectedItem} />
      {/*  */}
      <AllAchievementDrawer
        setSelectedItem={setSelectedItem}
        isReadable={isReadable}
        isOpen={isOpen}
      />
      <Dialog
        maxWidth={'md'}
        fullWidth
        keepMounted={false}
        sx={{borderRadius: theme => theme.shape.borderRadius}}
        open={selectedItem !== undefined}
        onClose={() => setSelectedItem(undefined)}>
        {/*  */}
        {selectedItem && <AchievementInfo achieve={selectedItem} />}
        {/*  */}
      </Dialog>
    </Grid>
  );
};

export default Achievements;
