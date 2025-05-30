import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import PlayerAvatarImg from '@/assets/img/homepage-levelcard-avatar.png';
import {theme} from '@/config/theme';
import {numberWithCommas} from '@/utils/money-number-fromatter';

type reward = {
  id: string;
  icon: string;
  profit: number;
};
type Props = {
  level: number;
  nextLevelRewards: reward[];
};

export const LevelCard = ({level, nextLevelRewards}: Props) => (
  <Grid
    container
    size={12}
    spacing={2}
    mt={3}
    bgcolor={'background.default'}
    borderRadius={theme.shape.borderRadius}>
    <Grid
      size={'grow'}
      container
      alignContent={'space-between'}
      spacing={4}
      p={2}>
      {/* Level */}
      <Grid size={12} display={'flex'} alignItems={'flex-end'} gap={1.5}>
        <Typography
          sx={{
            fontFamily: 'Alfa Slab One',
            fontSize: '48px',
            letterSpacing: '3px',
            fontWeight: '600',
            lineHeight: '36.96px',
            textAlign: 'center',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}>
          {level}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Alfa Slab One',
            fontSize: '27px',
            fontWeight: '400',
            lineHeight: '24.96px',
            textAlign: 'center',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}>
          Level
        </Typography>
      </Grid>
      {/* Rewards */}
      <Grid size={12} container rowSpacing={0.75}>
        <Grid size={12}>
          <Typography variant="caption">Next Level Rewards:</Typography>
        </Grid>
        <Grid size={12} display={'flex'} gap={1} alignItems={'center'}>
          {nextLevelRewards.map(rew => (
            <RewardItem key={rew.id} {...rew} />
          ))}
        </Grid>
      </Grid>
    </Grid>
    {/* Avatar */}
    <Grid
      size={4}
      sx={{
        position: 'relative',
        img: {
          position: 'absolute',
          bottom: '0',
          right: '0',
          maxHeight: '130%',
          maxWidth: '100%',
        },
      }}>
      <img src={PlayerAvatarImg} />
    </Grid>
  </Grid>
);

const RewardItem = ({icon, profit}: reward) => (
  <Box
    display={'flex'}
    alignItems={'center'}
    gap={0.5}
    flexWrap={'nowrap'}
    sx={{
      img: {
        width: '14px',
      },
    }}>
    <img src={icon} />
    <Typography variant="overline" lineHeight={'13.64px'}>
      +{numberWithCommas(profit)}
    </Typography>
  </Box>
);
