import {Suspense, useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import {Dialog} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {
  AchievementInfoSkeleton,
  HighlightedAchievesSkeleton,
  InProgressAchievementSkeleton,
  RectangularAchievesSkeleton,
  SelectedAchievementsSkeleton,
} from '../../templates/Achievement/LoadingStages';

import AchievementInfo from './components/molecules/AchievementInfo';
import AllAchievementDrawer from './components/molecules/AllAchievementDrawer';
import HighlightedAchieves from './components/molecules/HighlightedAchieves';
import HighlightedWithLLocked from './components/molecules/HighlightedWithLLocked';
import InProggressAchievements from './components/molecules/InProggressAchievements';
import MyAchievements from './components/molecules/MyAchievemts';
import SelectedAchievements from './components/molecules/SelectedAchievements';
import {
  AllAchievements,
  InProggressAchievement,
  MyAchievements as MyAchieves,
  type TAchieve,
} from './fakeData/fake';
import {useAchievementState} from './state/achievement.state';

import FullPageSkeleton from '@/components/atoms/Skeleton/FullPageSkeleton';

const Achievements = () => {
  const {
    setAllAchievements,
    setMyAcheivements,
    setInProgressAchieves,
    myAchievements,
    allAchievements,
    inProressAchieves,
  } = useAchievementState();
  ///
  const location = useLocation();
  const isOpen = location.search.includes('show');
  //
  const [isReadable, setIsReadable] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<TAchieve | undefined>();
  const [loadingModal, setLoadingModal] = useState<boolean>(false);

  useEffect(() => {
    if (selectedItem) {
      setLoadingModal(true);
      setTimeout(() => {
        setLoadingModal(false);
      }, 1000);
    }
  }, [selectedItem]);
  //
  useEffect(() => {
    if (location.search.includes('all')) setIsReadable(true);
    else if (location.search.includes('highlighted') || location.search === '')
      setIsReadable(false);
  }, [location.search]);
  ///
  useEffect(() => {
    setTimeout(() => {
      setAllAchievements(AllAchievements);
      setMyAcheivements(MyAchieves);
      setInProgressAchieves(InProggressAchievement);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  ///
  return (
    <Grid
      container
      size={12}
      gap={1.75}
      mb={2}
      sx={{
        alignItems: 'start',
        p: 2,
      }}>
      {/*  */}
      {myAchievements.length === 0 ? (
        <SelectedAchievementsSkeleton />
      ) : (
        <SelectedAchievements />
      )}
      {/*  */}
      {myAchievements.length === 0 ? (
        <HighlightedAchievesSkeleton />
      ) : (
        <HighlightedAchieves />
      )}
      {/*  */}
      {allAchievements.length === 0 ? (
        <RectangularAchievesSkeleton isMyAchievement={false} />
      ) : (
        <HighlightedWithLLocked setSelectedItem={setSelectedItem} />
      )}
      {/*  */}
      {inProressAchieves.length === 0 ? (
        <InProgressAchievementSkeleton />
      ) : (
        <InProggressAchievements />
      )}
      {/*  */}
      {myAchievements.length === 0 ? (
        <RectangularAchievesSkeleton isMyAchievement />
      ) : (
        <MyAchievements setSelectedItem={setSelectedItem} />
      )}
      {/*  */}
      <Suspense fallback={<FullPageSkeleton />}>
        <AllAchievementDrawer
          setSelectedItem={setSelectedItem}
          isReadable={isReadable}
          isOpen={isOpen}
        />
      </Suspense>

      <Dialog
        maxWidth={'md'}
        fullWidth
        keepMounted={false}
        sx={{borderRadius: theme => theme.shape.borderRadius}}
        open={selectedItem !== undefined}
        onClose={() => setSelectedItem(undefined)}>
        {/*  */}
        {selectedItem && !loadingModal ? (
          <AchievementInfo achieve={selectedItem} />
        ) : (
          selectedItem && loadingModal && <AchievementInfoSkeleton />
        )}
        {/*  */}
      </Dialog>
    </Grid>
  );
};

export default Achievements;
