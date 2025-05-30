import {Box, Skeleton} from '@mui/material';

import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

export const GotoLeaderBoardCardTemplate = () => (
  <Box
    sx={{
      ...flex().jstart().gap(1).acenter().result,
      width: '100%',
      p: 1.5,
      bgcolor: 'background.default',
      borderRadius: theme.shape.borderRadius,
    }}>
    <Skeleton
      variant="rectangular"
      width={30}
      height={30}
      sx={{flexShrink: 0}}
    />
    <Box sx={{display: 'flex', flexGrow: 1}}>
      <Skeleton width={100} height={20} />
    </Box>
  </Box>
);
