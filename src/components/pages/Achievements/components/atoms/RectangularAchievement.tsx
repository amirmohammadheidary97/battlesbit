import {Box, Icon, Typography} from '@mui/material';

import type {TAchieve} from '../../fakeData/fake';

import AchieveCup from '@/assets/img/icons/general/achieveCup.svg?react';
import Lock from '@/assets/img/icons/general/lock.svg?react';
import {flex} from '@/utils/flexHelper';

type Props = {
  title: string;
  desc: string;
  isLocked: boolean;
  isSelected?: boolean;
  isReadable: boolean;
  achieve: TAchieve;
  setSelectedItem?: React.Dispatch<React.SetStateAction<TAchieve | undefined>>;
  setHighlighted?: (item: TAchieve) => void;
};

const RectangularAchievement = ({
  desc,
  title,
  isLocked,
  isSelected,
  isReadable,
  achieve,
  setSelectedItem,
  setHighlighted,
}: Props) => {
  const handleClick = () => {
    if (isReadable && setSelectedItem) setSelectedItem(achieve);
    else if (setHighlighted) setHighlighted(achieve);
  };
  return (
    <Box
      p={'0.625rem'}
      sx={{
        borderRadius: theme => theme.shape.borderRadius,
        ...flex().column().acenter().gap('0.5rem').result,
        position: 'relative',
        bgcolor: 'background.paper',
        border:
          !isLocked && isSelected && isSelected === true
            ? theme => `1px solid ${theme.palette.primary.main}`
            : 'none',
      }}
      onClick={handleClick}>
      {/*  */}
      {isLocked && (
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
              top: 15,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
            }}
            component={Lock}
          />
        </>
      )}
      {/* **** */}
      <Icon sx={{fontSize: '2.93rem'}} component={AchieveCup} />

      <Box textAlign={'center'} sx={{position: 'relative', zIndex: 3}}>
        <Typography
          fontSize={'15px'}
          lineHeight={'20.54px'}
          fontWeight={'400'}
          fontFamily={'Alfa Slab One'}>
          {title}
        </Typography>
        <Typography
          fontSize={'8px'}
          lineHeight={'10.91px'}
          fontWeight={'400'}
          letterSpacing={'0.004em'}
          fontFamily={'Nunito Sans'}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default RectangularAchievement;
