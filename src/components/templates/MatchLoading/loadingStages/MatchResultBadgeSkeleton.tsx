import {Box, Skeleton, Typography} from '@mui/material';

// import MatchResultBadge from './MatchResultBadge';

const MatchResultBadgeContainerSkeleton = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '10.75rem',
    }}>
    <Box gap={'0.5rem'} display={'flex'} flexWrap={'wrap'}>
      <Typography variant="caption" sx={{fontFamily: 'Nunito Sans'}}>
        <Skeleton width={100} />
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 0.3}}>
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            variant="circular"
            width={'1.635rem'}
            height={'1.635rem'}
          />
        ))}
      </Box>
    </Box>
    <Box
      gap={'0.5rem'}
      flexDirection={'column'}
      display={'flex'}
      flexWrap={'wrap'}>
      <Typography variant="caption" sx={{fontFamily: 'Nunito Sans'}}>
        <Skeleton width={100} />
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.6}}>
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} variant="circular" width={'2rem'} height={'2rem'} />
        ))}
      </Box>
    </Box>
  </Box>
);

export default MatchResultBadgeContainerSkeleton;
