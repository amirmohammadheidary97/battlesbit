import SlideButton from 'react-slide-button';
import {Typography} from '@mui/material';

import './swipable-style.css';

import {CustomIcon} from '@/components/atoms/icon';

const SwipableButton = () => (
  <SlideButton
    onSlideDone={() => console.log('Done!')}
    mainText={
      <Typography
        color="primary.main"
        sx={{
          fontFamily: '"Geogrotesque Wide"',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: 1,
          letterSpacing: 0,
          verticalAlign: 'middle',
          textTransform: 'uppercase',
        }}>
        Slide to submit
      </Typography>
    }
    overlayText={
      <Typography
        color="primary.main"
        sx={{
          fontFamily: '"Geogrotesque Wide"  ',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: 1,
          letterSpacing: 0,
          verticalAlign: 'middle',
          textTransform: 'uppercase',
        }}>
        START
      </Typography>
    }
    customCaretWidth={60}
    caret={
      <CustomIcon
        type="arrowRightDobble"
        viewBox="0 0 20 20"
        sx={{width: '20px', height: '18px'}}
      />
    }
  />
);
export default SwipableButton;
