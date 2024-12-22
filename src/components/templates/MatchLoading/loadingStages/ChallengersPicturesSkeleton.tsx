// import {useState} from 'react';
import {Box, keyframes, Skeleton} from '@mui/material';

// import {PlayerAvatar} from '@/components/atoms/PlayerAvatar';
// import {useMakeMatchState} from '@/components/pages/MakeMatch/state/make-match.state';
import {flex} from '@/utils/flexHelper';

const PlayersPicturesSkeleton = () => (
  <Box
    sx={{
      width: '100%',
      height: '35vh',
      position: 'relative',
      ...flex().astretch().nowrap().result,
      '.pictureContainer': {
        width: '50%',
        position: 'relative',
      },
    }}>
    {' '}
    <Skeleton
      className="pictureContainer"
      sx={{
        left: 0,
        animation: `${slideLeft} 0.6s cubic-bezier(0.55, 0, 1, 0.45) forwards`,
      }}
    />
    <Skeleton
      className="pictureContainer"
      sx={{
        // direction: 'rtl',
        right: 0,
        animation: `${slideRight} 0.6s cubic-bezier(0.55, 0, 1, 0.45) forwards`,
      }}
    />
  </Box>
);

export default PlayersPicturesSkeleton;

const slideRight = keyframes`
 
	0% {
		opacity: 0;
		transform: translateX(800px);
	}

	38% {
		opacity: 1;
		transform: translateX(0);
	}

	65% {
		transform: translateX(50px);
	}

	72% {
		transform: translateX(0);
	}

	81% {
		transform: translateX(15px);
	}
	100% {
		transform: translateX(0);
	}

`;

const slideLeft = keyframes`
 
	0% {
		opacity: 0;
		transform: translateX(-800px);
	}

	38% {
		opacity: 1;
		transform: translateX(0);
	}

	65% {
		transform: translateX(-50px);
	}

	72% {
		transform: translateX(0);
	}

	81% {
		transform: translateX(-15px);
	}
	100% {
		transform: translateX(0);
	}

`;
