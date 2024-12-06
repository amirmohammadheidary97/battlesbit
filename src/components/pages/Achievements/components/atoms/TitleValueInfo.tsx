import { Box, Icon, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

type Props = {
  img: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  title: string;
  value?: string;
  subValue?: string;
  ml?: string,
  fs?: string
};
const TitleValueInfo = ({ img, title, value, subValue, ml, fs }: Props) => (
  <Grid sx={{ display: "flex", alignItems: "center" , p: 0 }} size={'auto'}>
    <Box  sx={{ display: "flex", alignItems: "center" }}>
      <Icon component={img} sx={{ fontSize: fs ?? undefined }} />
      <Typography
        variant="caption"
        component={"span"}
        ml={ml ?? undefined}
        color="primary"
        
      >
        {title}
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {value && (
        <Typography marginInlineStart={'0.25rem'} component={"span"} variant="h6">
          {value}
        </Typography>
      )}
      {subValue && (
        <Typography
          variant="h6"
          component={"span"}
          pl={0.5}
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          {subValue}
        </Typography>
      )}
    </Box>
  </Grid>
);

export default TitleValueInfo;
