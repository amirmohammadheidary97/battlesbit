import {Avatar, Box, Typography} from '@mui/material';

import AchieveCup from '@/assets/img/icons/general/achieveCup.svg';
import {flex} from '@/utils/flexHelper';

type Props = {
  isFullWidth: boolean;
  isSelected: boolean;
  title: string;
};
const CircularAchievement = ({isFullWidth, isSelected, title}: Props) => (
  <Box
    sx={{
      ...flex()
        .column()
        .gap(isFullWidth ? '0.5rem' : '0.25rem')
        .jbetween()
        .acenter().result,
      bgcolor: 'transparent',
    }}>
    <Avatar
      sx={{
        bgcolor: 'background.paper',
        border: isSelected
          ? theme => `1px solid ${theme.palette.primary.main}`
          : 'none',
        width: isFullWidth ? '100px' : '50px',
        height: isFullWidth ? '100px' : '50px',
        p: isFullWidth ? '1rem' : '0.5rem',
        svg: {
          width: isFullWidth ? '56px' : '30px',
          height: isFullWidth ? '58px' : '30px',
        },
      }}
      src={AchieveCup}
    />
    <Typography
      variant={'h6'}
      fontSize={isFullWidth ? '18px' : '10px'}
      fontFamily={'Alfa Slab One'}>
      {title}
    </Typography>
  </Box>
);

export default CircularAchievement;
