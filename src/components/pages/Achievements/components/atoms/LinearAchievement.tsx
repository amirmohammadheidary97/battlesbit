import {Box, Icon, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import CustomLinearProgress from './CustomLinearProgress';

import AchieveCup from '@/assets/img/icons/general/achieveCup.svg?react';
import {flex} from '@/utils/flexHelper';

type Props = {
  total: number;
  progress: number;
  title: string;
  desc: string;
};
const LinearAchievement = ({desc, progress, title, total}: Props) => (
  <Grid
    container
    sx={{
      p: '10px',
      borderRadius: theme => theme.shape.borderRadius,
      bgcolor: 'background.paper',
      gap: '8px',
      height: '101px',
    }}
    width={'calc(50% - 6px)'}>
    <Grid size={12} sx={{...flex().acenter().gap('8px').result}}>
      <Icon sx={{fontSize: '47px'}} component={AchieveCup} />
      <Box textAlign={'center'}>
        <Typography
          sx={{
            fontFamily: 'Alfa Slab One',
            fontSize: '15px',
            lineHeight: '20.54px',
            fontWeight: '400',
          }}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans',
            fontWeight: '400',
            lineHeight: '10.91px',
            letterSpacing: '0.004em',
            fontSize: '0.5rem',
          }}>
          {desc}
        </Typography>
      </Box>
    </Grid>
    <Grid size={12}>
      <CustomLinearProgress
        linearHeight="11px"
        progress={progress}
        total={total}
      />
    </Grid>
  </Grid>
);

export default LinearAchievement;
