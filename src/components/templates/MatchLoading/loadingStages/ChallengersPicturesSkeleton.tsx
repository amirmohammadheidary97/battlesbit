import {Box, Skeleton} from '@mui/material';

import {flex} from '@/utils/flexHelper';

const PlayersPicturesSkeleton = () => (
  <Box
    sx={{
      width: '100%',
      height: '35vh',
      position: 'relative',
      ...flex().jstart().nowrap().result,
      '.pictureContainer': {
        width: '50%',
        height: '55vh',
        position: 'relative',
        top: '-11.3vh',
      },
    }}>
    {' '}
    <Skeleton
      className="pictureContainer"
      sx={{
        left: 5,
        clipPath:
          'polygon(0% 0%, 100% 0%, 88% 54%, 100% 54%, 90% 100%, 0% 100%)',
      }}
    />
    <Skeleton
      className="pictureContainer"
      sx={{
        clipPath:
          'polygon(10% 0%, 0% 50%, 12% 50%, 0% 100%, 100% 100%, 100% 0%)',
        right: 5,
      }}
    />
  </Box>
);

export default PlayersPicturesSkeleton;
