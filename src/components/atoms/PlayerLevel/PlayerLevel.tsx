import {Box} from '@mui/material';

import bg from '@/assets/img/bg/player-level-bg.png';
import {flex} from '@/utils/flexHelper';

type Props = {
  size?: number;
  level: number;
};
const getFontSize = (width: number) => (40 / 100) * width;
const getBorderWidth = (width: number) => (6 / 100) * width;
export const PlayerLevel = ({level, size = 1}: Props) => (
  <Box
    sx={{
      width: size + 'px',
      aspectRatio: '1/1',
      borderRadius: '50%',
      backgroundImage: `url(${bg})`,
      ...flex().jcenter().acenter().result,
      fontSize: getFontSize(size) + 'px',
      fontWeight: 700,
      border: `${getBorderWidth(size)}px solid #fff`,
      textShadow: '2px 2px 0px rgba(100,100,100,0.5)',
    }}>
    {level}
  </Box>
);
