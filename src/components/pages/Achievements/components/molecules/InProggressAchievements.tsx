import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import LinearAchievement from "../atoms/LinearAchievement";

import { flex } from "@/utils/flexHelper";
import { useAchievementState } from "../../state/achievement.state";

const InProggressAchievements = () => {
  const { inProressAchieves } = useAchievementState();
  return (
    <Grid container size={12} rowSpacing={"0.5rem"}>
      <Grid size={12}>
        <Typography variant="subtitle1">In Progress Achievements</Typography>
      </Grid>
      <Grid size={12} sx={{ ...flex().jbetween().acenter().result }}>
        {inProressAchieves.map((ach, i) => (
          <LinearAchievement
            key={i}
            title={ach.title}
            desc={ach.desc}
            progress={ach.progress}
            total={ach.total}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default InProggressAchievements;
