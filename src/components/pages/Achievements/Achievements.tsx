import {Suspense, useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import {Dialog} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {
  AchievementInfoSkeleton,
  ChallengesCarouselSkeleton,
  HighlightedAchievesSkeleton,
  InProgressAchievementSkeleton,
  LeaderboardSectionSkeleton,
  LevelSectionSkeleton,
  RectangularAchievesSkeleton,
  SelectedAchievementsSkeleton,
} from '../../templates/Achievement/LoadingStages';

import LeaderBoardHero from './components/atoms/LeaderBoardHero';
import AchievementInfo from './components/molecules/AchievementInfo';
import AchievementsSection from './components/molecules/AchievementsSection';
import AllAchievementDrawer from './components/molecules/AllAchievementDrawer';
import ChallengesCarousel from './components/molecules/ChallengesCarousel';
import HighlightedAchieves from './components/molecules/HighlightedAchieves';
import HighlightedWithLLocked from './components/molecules/HighlightedWithLLocked';
import InProggressAchievements from './components/molecules/InProggressAchievements';
import LevelSection from './components/molecules/LevelSection';
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
  const [levelLoading, setLevelLoading] = useState<boolean>(true);
  const [leaderLoading, setLeaderoading] = useState<boolean>(true);
  const [carouselLoading, setCarouselLoading] = useState<boolean>(true);

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
    if (location.search.includes('mine') || location.search.includes('all'))
      setIsReadable(true);
    else if (location.search.includes('highlighted') || location.search === '')
      setIsReadable(false);
  }, [location.search]);
  ///
  useEffect(() => {
    setTimeout(() => {
      setAllAchievements(AllAchievements);
      setMyAcheivements(MyAchieves);
      setInProgressAchieves(InProggressAchievement);
      setLevelLoading(false);
      setLeaderoading(false);
      setCarouselLoading(false);
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
        py: 2,
      }}>
      {levelLoading ? <LevelSectionSkeleton /> : <LevelSection />}
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
      {leaderLoading ? <LeaderboardSectionSkeleton /> : <LeaderBoardHero />}
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
      {carouselLoading ? (
        <ChallengesCarouselSkeleton />
      ) : (
        <ChallengesCarousel />
      )}
      {/*  */}
      {myAchievements.length === 0 ? (
        <RectangularAchievesSkeleton isMyAchievement />
      ) : (
        <AchievementsSection
          title="My Achievements"
          setSelectedItem={setSelectedItem}
          isAllAchieves={false}
        />
      )}
      {/*  */}
      {allAchievements.length === 0 ? (
        <RectangularAchievesSkeleton isMyAchievement />
      ) : (
        <AchievementsSection
          title="All Achievements"
          setSelectedItem={setSelectedItem}
          isAllAchieves
        />
      )}
      <Suspense fallback={<FullPageSkeleton />}>
        <AllAchievementDrawer
          setSelectedItem={setSelectedItem}
          isReadable={isReadable}
          isOpen={isOpen}
          isAllAchieves={location.search.includes('all')}
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
