import type {FC} from 'react';
import {Box, LinearProgress, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import Cup from '@/assets/img/icons/general/levelprize.png';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

type PlayerLevelProgressProps = {
  progress: number;
  total: number;
};

export const PlayerLevelProgress: FC<PlayerLevelProgressProps> = ({
  progress,
  total,
}) => (
  <Grid
    size={12}
    alignItems={'flex-end'}
    sx={{
      position: 'relative',
      height: '2rem',
    }}>
    <Box
      sx={{
        position: 'absolute',
        borderRadius: '12px',
        backgroundColor: '#25272F',
        height: '2rem',
        width: '2rem',
        zIndex: 2,
        left: '-0.5rem',
        // top: `-0.1705rem`,
        bottom: 0,
        img: {
          width: '100%',
          height: '100%',
        },
      }}>
      <img src={Cup} />
    </Box>

    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        flexGrow: 1,
        marginTop: '0.75rem',
        marginInlineStart: '16px',
        height: '1.25rem',
        width: '34vw',
        maxWidth: '250px',
        borderRadius: '6px',
        backgroundColor: theme.palette.background.paper,
        '& .MuiLinearProgress-bar': {
          backgroundColor: theme.palette.primary.main,
          borderRadius: '6px',
        },
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '0rem',
        left: `40%`,
        ...flex().acenter().nowrap().result,
        '.MuiTypography-root': {
          fontWeight: '600',
        },
      }}>
      <Typography variant="body2" color={theme.palette.text.primary}>
        {progress}
      </Typography>
      <Typography variant="body2" color={theme.palette.text.secondary}>
        {'/' + total}
      </Typography>
    </Box>
  </Grid>
);
