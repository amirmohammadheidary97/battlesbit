import {Grid2} from '@mui/material';

import {
  ChallengesCarouselCard,
  HighlightedAchievesSkeleton,
  InProgressAchievementSkeleton,
  LeaderboardSectionSkeleton,
  LevelSectionSkeleton,
  RectangularAchievesSkeleton,
  SelectedAchievementsSkeleton,
} from './LoadingStages';

export const AchievementsTemplate = () => (
  <Grid2
    spacing={1.75}
    container
    sx={{
      py: 2,
    }}>
    <LevelSectionSkeleton />
    {/*  */}
    <SelectedAchievementsSkeleton />
    {/*  */}
    <HighlightedAchievesSkeleton />
    {/*  */}
    <LeaderboardSectionSkeleton />
    {/*  */}
    <RectangularAchievesSkeleton isMyAchievement={false} />
    {/*  */}
    <InProgressAchievementSkeleton />
    {/*  */}
    <ChallengesCarouselCard />
    {/*  */}
    <RectangularAchievesSkeleton isMyAchievement />
  </Grid2>
);
