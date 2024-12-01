import { Box, Skeleton, Typography } from "@mui/material";
import { flex } from "@/utils/flexHelper";
import Grid from "@mui/material/Grid2";

const RectangularAchievesSkeleton = ({
  isMyAchievement,
}: {
  isMyAchievement: boolean;
}) => {
  return (
    <Grid container size={12} rowSpacing={"0.5rem"}>
      <Grid size={12} sx={{ ...flex().jbetween().acenter().result }}>
        {isMyAchievement ? (
          <>
            <Typography variant="subtitle1">
              <Skeleton width={120} />
            </Typography>
            <Typography variant="caption" color="primary">
              <Skeleton width={50} />
            </Typography>
          </>
        ) : (
          <Typography variant="subtitle1">
            <Skeleton width={200} />
          </Typography>
        )}
      </Grid>
      <Grid size={12} sx={{ ...flex().jbetween().acenter().result }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Box
            key={index}
            width={"109px"}
            p={"0.625rem"}
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius,
              ...flex().column().acenter().gap("0.5rem").result,
              position: "relative",
              bgcolor: "background.paper",
            }}
          >
            {/* **** */}
            <Skeleton variant="circular" width={"2.93rem"} height={"2.93rem"} />

            <Box sx={{ ...flex().column().acenter().jcenter().result }}>
              <Typography
                fontSize={"15px"}
                lineHeight={"20.54px"}
                fontWeight={"400"}
                fontFamily={"Alfa Slab One"}
              >
                <Skeleton variant="text" width={85} />
              </Typography>
              <Typography
                fontSize={"8px"}
                lineHeight={"10.91px"}
                fontWeight={"400"}
                letterSpacing={"0.004em"}
                fontFamily={"Nunito Sans"}
              >
                <Skeleton variant="text" width={85} />
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default RectangularAchievesSkeleton;
