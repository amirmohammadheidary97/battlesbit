import {Box, Typography} from '@mui/material';

import {CustomIcon} from '@/components/atoms/icon';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

export const LeaderBoardCard = () => (
  <Box
    sx={{
      ...flex().jstart().gap(1).acenter().result,
      w: '100%',
      cursor: 'pointer',
      p: 1.5,
      bgcolor: 'background.default',
      borderRadius: theme.shape.borderRadius,
    }}>
    <CustomIcon type="leaderboard" />
    <Typography variant="body2">Leaderboard</Typography>
  </Box>
);
