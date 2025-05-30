import type {FC} from 'react';
import {Box, LinearProgress, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import LevelFrame from '@/assets/img/icons/general/level-frame.png';
import {flex} from '@/utils/flexHelper';

type PlayerLevelProgressProps = {
  progress: number;
  total: number;
  level: number;
};

export const PlayerLevelProgress: FC<PlayerLevelProgressProps> = ({
  progress,
  total,
  level,
}) => (
  <Grid display={'flex'} flexDirection={'column'} justifyContent={'end'}>
    <Typography
      variant="h6"
      ml={'3px'}
      mb={-0.5}
      fontSize={'18px'}
      fontWeight={500}
      sx={{
        fontFamily: 'Geogrotesque Wide Semi',
        lineHeight: '100%',
        letterSpacing: '0%',
        verticalAlign: 'middle',
      }}>
      Mehran
    </Typography>
    <Grid
      size={12}
      sx={{
        position: 'relative',
        height: '2rem',
      }}>
      <Box
        sx={{
          position: 'absolute',
          borderRadius: '12px',
          height: '30px',
          width: '30px',
          top: '4px',
          zIndex: 2,
          left: '0',
          bottom: 0,
          img: {
            width: '100%',
            height: '100%',
          },
        }}>
        <Grid
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <img src={LevelFrame} />
          <Grid
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
            <Typography
              variant="caption"
              fontSize="10.24px"
              fontWeight={600}
              mt={'2px'}
              ml={'1px'}
              lineHeight="9.28px"
              sx={{
                textAlign: 'center',
                fontFamily: 'Geogrotesque Wide',
                letterSpacing: '0%',
                verticalAlign: 'bottom',
              }}>
              {level}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          flexGrow: 1,
          marginTop: '0.75rem',
          marginInlineStart: '16px',
          height: '16px',
          width: '104px',
          maxWidth: '250px',
          borderRadius: '4px',
          backgroundColor: 'divider',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'background.paper',
            borderRadius: '4px',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '0.35rem',
          left: `40%`,
          ...flex().acenter().nowrap().result,
          '.MuiTypography-root': {
            fontWeight: '600',
          },
        }}>
        <Typography
          variant="body2"
          color="primary.main"
          fontSize={'9.31px'}
          fontWeight={500}>
          {progress}
        </Typography>
        <Typography
          variant="body2"
          color={'white'}
          fontWeight={500}
          fontSize={'9.31px'}>
          {'/' + total}
        </Typography>
      </Box>
    </Grid>
  </Grid>
);
