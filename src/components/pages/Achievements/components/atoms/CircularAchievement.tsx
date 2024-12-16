import {useNavigate} from 'react-router';
import {Avatar, Box, Typography} from '@mui/material';

import AchieveCup from '@/assets/img/icons/general/achieveCup.svg';
import {flex} from '@/utils/flexHelper';

type Props = {
  isFullWidth: boolean;
  isSelected: boolean;
  title: string;
};
const CircularAchievement = ({isFullWidth, isSelected, title}: Props) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={isFullWidth ? () => navigate('?show=highlighted') : undefined}
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
          width: 1,
          height: 1,
          aspectRatio: 1,
          p: isFullWidth ? '1rem' : '0.5rem',
          svg: {
            width: isFullWidth ? '3.5rem' : '1.875rem',
            height: isFullWidth ? '3.625rem' : '1.875rem',
          },
        }}
        src={AchieveCup}
      />
      <Typography
        fontWeight={400}
        lineHeight={isFullWidth ? '1.54rem' : '0.85rem'}
        fontSize={isFullWidth ? '1rem' : '0.5rem'}
        fontFamily={'Alfa Slab One'}>
        {title}
      </Typography>
    </Box>
  );
};

export default CircularAchievement;
