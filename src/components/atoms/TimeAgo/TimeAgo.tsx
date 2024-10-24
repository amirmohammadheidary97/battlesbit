import {useEffect, useState} from 'react';
import {Box} from '@mui/material';

type Props = {
  time: number;
};

const formatTimePassed = (timePassed: number) => {
  const seconds = Math.floor(timePassed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) return `${weeks}w ago`;
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
};

export const TimeAgo = ({time}: Props) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const timePassed = now - time;
      setTimeAgo(formatTimePassed(timePassed));
    };

    update();
    const intervalId = setInterval(update, 60000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <Box
      sx={{
        color: 'text2',
        fontSize: '0.875rem',
      }}>
      {timeAgo}
    </Box>
  );
};
