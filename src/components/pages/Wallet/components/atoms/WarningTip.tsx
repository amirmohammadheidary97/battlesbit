import type {ReactNode} from 'react';
import {WarningRounded} from '@mui/icons-material';
import {Box, Typography} from '@mui/material';

import {flex} from '@/utils/flexHelper';

const WarningTip = ({children}: {children: ReactNode}) => (
  <Box
    sx={{
      width: 1,
      ...flex().astart().result,
      py: '1rem',
      color: 'primary.main',
      gap: '4px',
      fontFamily: 'Nunito Sans',
    }}>
    <WarningRounded sx={{fontSize: '1rem'}} />
    <Typography variant="caption">{children}</Typography>
  </Box>
);

export default WarningTip;
