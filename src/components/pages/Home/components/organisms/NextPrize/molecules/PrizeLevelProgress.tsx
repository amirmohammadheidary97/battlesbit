import type {FC} from 'react';
import {Avatar, LinearProgress} from '@mui/material';
import Grid from '@mui/material/Grid2';

import Cup from '@/assets/img/icons/general/levelprize.png';
import {theme} from '@/config/theme';

type PlayerLevelProgressProps = {
  progress: number;
};

export const PrizeLevelProgress: FC<PlayerLevelProgressProps> = ({
  progress,
}) => (
  <Grid
    size={12}
    sx={{
      position: 'relative',
    }}>
    <Avatar
      src={Cup}
      sx={{
        position: 'absolute',
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: '-1px 2px 5.2px -2px #F3C73B',
        backgroundColor: '#25272F',
        height: '1.3125rem',
        width: '1.3125rem',
        zIndex: 2,
        left: '0.3125rem',
        top: `-0.1705rem`,
      }}
    />
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        flexGrow: 1,
        margin: '0 16px',
        height: '1rem',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        '& .MuiLinearProgress-bar': {
          backgroundColor: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
        },
      }}
    />
  </Grid>
);
