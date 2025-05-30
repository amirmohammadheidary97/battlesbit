import {Box, Typography} from '@mui/material';

type TimeRemainingProps = {
  minutes: number;
  seconds: number;
};

export const TimeRemaining: React.FC<TimeRemainingProps> = ({
  minutes,
  seconds,
}) => (
  <Box display={'flex'} alignItems={'baseline'} gap={1}>
    <Typography
      variant="body1"
      color="primary.main">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Typography>
    <Typography variant="body1" color="text.secondary">
      Minutes Left
    </Typography>
  </Box>
);
