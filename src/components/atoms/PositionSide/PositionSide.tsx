import type {SxProps} from '@mui/material';
import {Box} from '@mui/material';

import type {positionSideType} from '@/types/common';

type Props = {
  type: positionSideType;
  sx?: SxProps;
};

export const PositionSide = ({type, sx = {}}: Props) => (
  <Box
    sx={{
      color: type === 'buy' ? 'text6' : 'text8',
      fontSize: '0.75rem',
      lineHeight: '0.7rem',
      ...sx,
    }}>
    {type.toUpperCase()}
  </Box>
);
