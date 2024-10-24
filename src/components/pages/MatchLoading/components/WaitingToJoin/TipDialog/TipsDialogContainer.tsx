import {Box, Typography} from '@mui/material';

import {theme} from '@/config/theme';

const TipsDialogContainer = () => (
  <Box
    sx={{
      p: '1rem',
      fontFamily: 'Nunito Sans, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
    }}>
    <Typography variant="subtitle1">tips :</Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
    </Typography>
  </Box>
);

export default TipsDialogContainer;
