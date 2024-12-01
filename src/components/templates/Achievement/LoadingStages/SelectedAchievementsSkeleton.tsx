import { Box, Skeleton, Typography } from "@mui/material";
import { flex } from "@/utils/flexHelper";
import Grid from "@mui/material/Grid2";

const SelectedAchievementsSkeleton = () => {
  return (
    <Grid
      container
      size={12}
      rowSpacing={"1rem"}
      sx={{
        p: "1rem",
        bgcolor: "background.paper",
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
    >
      <Grid size={12}>
        <Typography variant="h5" fontFamily={"Nunito Sans"} sx={{ width: 1 }}>
          {" "}
          <Skeleton width={"50%"} />{" "}
        </Typography>
      </Grid>
      <Grid size={12} sx={{ ...flex().jbetween().acenter().result }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Skeleton variant="circular" width={"100px"} height={"100px"} />
            <Typography
              fontSize={"18px"}
              width={"100%"}
              lineHeight={"24.64px"}
              mt={"0.5rem"}
              fontFamily={"Alfa Slab One"}
            >
              <Skeleton width={"100%"} />
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default SelectedAchievementsSkeleton;
