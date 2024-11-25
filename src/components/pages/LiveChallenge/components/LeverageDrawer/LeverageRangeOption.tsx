import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

type Props = {
  min: number;
  max: number;
  remainings: number;
};

export const LeverageRangeOption = ({max, min, remainings}: Props) => (
  <Grid
    container
    size={12}
    justifyContent={'space-between'}
    p={2}
    sx={{
      borderBottom: `1px solid ${theme.palette.divider}`,
    }}>
    <Grid>
      <Typography variant="body1" color={theme.palette.text.primary}>
        {`${min}X`}-{`${max}X`}
      </Typography>
    </Grid>
    <Grid>
      <Typography variant="body1" color={theme.palette.text.primary}>
        Remains:
        <span
          style={{
            color: theme.palette.primary.main,
            marginInlineStart: 2,
          }}>
          {remainings}
        </span>
      </Typography>
    </Grid>
  </Grid>
);
