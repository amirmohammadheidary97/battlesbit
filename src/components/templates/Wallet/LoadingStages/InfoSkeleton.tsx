import {Box, Skeleton} from '@mui/material';

const InfoSkeleton = () => (
  <Box
    sx={{
      width: 1,
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      mt: '1rem',
      color: 'primary.main',
      gap: '4px',
      fontFamily: 'Nunito Sans',
    }}>
    {/* Icon */}
    <Skeleton variant="circular" width={'1rem'} height={'1rem'} />
    {/* Text Skeleton */}
    <Skeleton width="90%" height="1rem" />{' '}
    <Skeleton width="100%" height="1rem" />
    <Skeleton variant="text" width="70%" height="1rem" />
  </Box>
);

export default InfoSkeleton;
