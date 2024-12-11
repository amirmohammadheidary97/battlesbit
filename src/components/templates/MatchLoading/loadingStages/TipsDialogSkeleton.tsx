import {Box, Skeleton, Typography} from '@mui/material';

const TipsDialogSkeleton = () => (
  <Box
    sx={{
      p: '1rem',
      fontFamily: 'Nunito Sans, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      borderRadius: theme => theme.shape.borderRadius,
      backgroundColor: theme => theme.palette.background.paper,
    }}>
    <Typography variant="subtitle1">
      <Skeleton width={40} />
    </Typography>
    <Typography variant="body2">
      <Skeleton width={190} />
      <Skeleton width={120} />
    </Typography>
  </Box>
);

export default TipsDialogSkeleton;
