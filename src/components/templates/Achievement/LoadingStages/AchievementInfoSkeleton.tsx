import { flex } from "@/utils/flexHelper";
import { Box, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const AchievementInfoSkeleton = () => {
  return (
    <Grid container size={12} p={"1rem"} gap={"0.5rem"}>
      <Grid size={12} sx={{ ...flex().column().acenter().jcenter().result }}>
        <Skeleton variant="circular" width={141} height={141} />
      </Grid>

      <Grid size={12} sx={{ ...flex().column().acenter().jcenter().result }}>
        <Typography
          sx={{
            fontFamily: "Alfa Slab One",
            fontSize: "25px",
            lineHeight: "34.23px",
            fontWeight: "400",
            width: "70%",
          }}
        >
          <Skeleton variant="text" width="100%" />
        </Typography>
      </Grid>

      <Grid size={12} sx={{ ...flex().column().acenter().jcenter().result }}>
        <Typography
          sx={{
            fontFamily: "Nunito Sans",
            fontSize: "1rem",
            lineHeight: "21.82px",
            letterSpacing: "0.004em",
            fontWeight: "400",
            width: "80%",
          }}
        >
          <Skeleton variant="text" width="100%" />
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="h6" sx={{ width: 1 }}>
          <Skeleton variant="text" width="100%" />
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="h6" sx={{ width: 1 }}>
          <Skeleton variant="text" width="100%" />
        </Typography>
      </Grid>

      <Grid size={12}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
          height={40}
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

export default AchievementInfoSkeleton;
