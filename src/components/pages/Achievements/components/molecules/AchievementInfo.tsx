import { Share } from '@mui/icons-material';
import { Box, Button, Icon, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import type { TAchieve } from '../../fakeData/fake';
import CustomLinearProgress from '../atoms/CustomLinearProgress';
import TitleValueInfo from '../atoms/TitleValueInfo';

import AchieveCup from '@/assets/img/icons/general/achieveCup.svg?react';
import Gift from '@/assets/img/icons/general/gift.svg?react';
import Lock from '@/assets/img/icons/general/lock.svg?react';
import Timer from '@/assets/img/icons/general/timer.svg?react';

type Props = {
  achieve: TAchieve;
};
const AchievementInfo = ({ achieve }: Props) => {
  const time = '35:59:08';
  return (
    <Grid size={12} p={'1rem'} gap={'0.5rem'} container>
      <Grid position={'relative'} size={12} textAlign={'center'}>
        <Icon component={AchieveCup} sx={{ fontSize: '141px' }} />
        {achieve.isLocked && (
          <>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: 2,
                backdropFilter: 'blur(3px)',
                borderRadius: theme => theme.shape.borderRadius,
              }}></Box>
            <Icon
              sx={{
                position: 'absolute',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                fontSize: '55px',
              }}
              component={Lock}
            />
          </>
        )}
      </Grid>
      <Grid size={12} textAlign={'center'}>
        {achieve.isLocked && (
          <Typography variant="h5" sx={{ span: { color: 'primary' } }}>
            {time.split(':').map((t, index, arr) => (
              <Box component={'span'} key={index}>
                {t}
                {index < arr.length - 1 && (
                  <Typography
                    variant="inherit"
                    color="primary"
                    component={'span'}>
                    :
                  </Typography>
                )}
              </Box>
            ))}
          </Typography>
        )}
        <Typography
          sx={{
            fontFamily: 'Alfa Slab One',
            fontSize: '25px',
            lineHeight: '34.23px',
            fontWeight: '400',
          }}>
          {achieve.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans',
            fontSize: '1rem',
            lineHeight: '21.82px',
            letterSpacing: '0.004em',
            fontWeight: '400',
          }}>
          {achieve.desc}
        </Typography>
      </Grid>
      {achieve.isLocked && (
        <Grid size={12}>
          <CustomLinearProgress linearHeight="15px" progress={10} total={20} />
        </Grid>
      )}
      <TitleValueInfo img={Gift} title="prize: " value="22" subValue="VSD" />
      <TitleValueInfo
        img={Timer}
        title="earned time: "
        value="semptember 2022"
      />

      <Grid size={12}>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          color="primary"
          startIcon={<Share />}
          sx={{ borderRadius: theme => theme.shape.borderRadius }}>
          share
        </Button>
      </Grid>
    </Grid>
  );
};

export default AchievementInfo;
