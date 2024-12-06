import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import type { TAchieve } from "../../fakeData/fake";
import { useAchievementState } from "../../state/achievement.state";
import RectangularAchievement from "../atoms/RectangularAchievement";

type Props = {
  setSelectedItem: React.Dispatch<React.SetStateAction<TAchieve | undefined>>;
  title: string;
  isAllAchieves: boolean
}
const AchievementsSection = ({
  setSelectedItem,
  title,
  isAllAchieves
}:Props ) => {
  const navigate = useNavigate();
  const onShowMoreClick = () => {
   isAllAchieves ? navigate('?show=all') : navigate("?show=mine");
  };

  const {myAchievements, allAchievements} = useAchievementState()

  return (
    <Grid size={12} container px={2} justifyContent={"center"}>
      <Grid container size={12} spacing={1}>
        <Grid
          size={12}
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle1">{title}</Typography>
          <Typography
            variant="caption"
            color="primary"
            onClick={onShowMoreClick}
          >
            show all
          </Typography>
        </Grid>
        <Grid size={12} container spacing={1.5}>
          {(isAllAchieves ? allAchievements : myAchievements).slice(3, 9).map((ach) => (
            <Grid size={4} key={ach.id} >
              <RectangularAchievement
                desc={ach.desc}
                isLocked={ach.isLocked}
                title={ach.title}
                achieve={ach}
                setSelectedItem={setSelectedItem}
                isReadable
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AchievementsSection;
