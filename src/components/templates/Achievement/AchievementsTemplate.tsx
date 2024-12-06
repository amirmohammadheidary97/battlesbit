import { Grid2 } from "@mui/material"
import { HighlightedAchievesSkeleton, InProgressAchievementSkeleton, RectangularAchievesSkeleton, SelectedAchievementsSkeleton } from "./LoadingStages"

export const AchievementsTemplate = () => {
  return <Grid2 spacing={1.75} container sx={{
    p: 2,
  }}>
    <SelectedAchievementsSkeleton />
    {/*  */}
    <HighlightedAchievesSkeleton />
    {/*  */}
    <RectangularAchievesSkeleton isMyAchievement={false} />
    {/*  */}
    <InProgressAchievementSkeleton />
    {/*  */}
    <RectangularAchievesSkeleton isMyAchievement />
  </Grid2>
}