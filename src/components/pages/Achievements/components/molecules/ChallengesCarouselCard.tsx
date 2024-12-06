import Grid from "@mui/material/Grid2";
import { Box, Icon, Typography } from "@mui/material";
import { flex } from "@/utils/flexHelper";
import React from "react";
import CustomLinearProgress from "../atoms/CustomLinearProgress";

type Props = {
    icon:  React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string;
    }>;
    title: string;
    desc: string;
    time?: string;
    caption: string;
    progress: number;
    total:number

}
// const time = "30:10:15";
const ChallengesCarouselCard = ({caption, desc, icon, title, progress, time, total}:Props) => (
  <Grid
    size={12}
    container
    spacing={1}
    sx={{
      borderRadius: (theme) => theme.shape.borderRadius,
      bgcolor: "background.paper",
      p: "0.5rem",
    }}
  >
    <Grid size={12} sx={{ ...flex().acenter().gap("0.5rem").result }}>
      <Icon component={icon} sx={{ fontSize: "4.375rem" }} />
      <Box>
        <Typography
          sx={{
            fontFamily: "Alfa Slab One",
            fontSize: "1.375rem",
            lineHeight: "30.12px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.5rem",
            lineHeight: "10.91px",
            letterSpacing: "0.004em",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Grid>
    <Grid size={12}>
      <Typography variant="caption" >
        {caption}
      </Typography>
    </Grid>
    <Grid size={12}>
      <Typography
        variant="h5"
        sx={{ span: { color: "primary" }, ...flex().jcenter().gap(0.5).result }}
      >
        <Box>
          {time?.split(":").map((t, index, arr) => (
            <Box component={"span"} key={index}>
              {t}
              {index < arr.length - 1 && (
                <Typography
                  variant="inherit"
                  color="primary"
                  component={"span"}
                >
                  :
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        <Typography variant="inherit" component={"span"}>
          Time left
        </Typography>
      </Typography>
    </Grid>
    <Grid size={12}>
      <CustomLinearProgress linearHeight="0.6875rem" progress={progress} total={total} />
    </Grid>
  </Grid>
);

export default ChallengesCarouselCard;
