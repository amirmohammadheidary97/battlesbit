import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  title: string;
  value: number | string;
  unit: string;
};

export const InvitationTitleValue = ({title, unit, value}: Props) => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems={'flex-end'}
      spacing={0.45}
      sx={{
        '.MuiTypography-root': {
          color: theme.palette.text.secondary,
        },
      }}>
      <Grid>
        <Typography variant="caption">{title}:</Typography>
      </Grid>
      <Grid>
        <Typography variant="body1" fontWeight={600} lineHeight={'normal'}>
          {value}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          variant="overline"
          textTransform={'uppercase'}
          fontWeight={700}
          lineHeight={'0.6875rem'}>
          {unit}
        </Typography>
      </Grid>
    </Grid>
  );
};
