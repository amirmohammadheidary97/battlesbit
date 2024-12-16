import {Grid2} from '@mui/material';

import {
  ChallengesCarouselSkeleton,
  HighlightedAchievesSkeleton,
  InProgressAchievementSkeleton,
  LeaderboardSectionSkeleton,
  LevelSectionSkeleton,
  RectangularAchievesSkeleton,
  SelectedAchievementsSkeleton,
} from './LoadingStages';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';

export const AchievementsTemplate = () => (
  <Grid2 spacing={1.75} container>
    <BackwardTitle title="Achievement" />
    {/*  */}
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
    <ChallengesCarouselSkeleton />
    {/*  */}
    <RectangularAchievesSkeleton isMyAchievement />
    {/*  */}
    <RectangularAchievesSkeleton isMyAchievement />
  </Grid2>
);
