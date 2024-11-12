import {Avatar, Box, keyframes} from '@mui/material';

import Starcoin from '@/assets/img/icons/general/starCoin.png';

export const AnimatedBackgroundImgs = () => (
  <Box
    width={'100%'}
    height={'100%'}
    // bgcolor={'red'}
    position={'absolute'}
    top={0}
    left={0}>
    {/* top animated bg  */}
    <Box
      position={'absolute'}
      sx={{
        zIndex: 1,
        animation: `${floatAnimation} 4s linear infinite`,
        top: ' -100px',
        left: '60%',
      }}>
      <Avatar
        sx={{width: '247px', height: '247px', filter: 'blur(10px)'}}
        src={Starcoin}
        alt=""
      />
    </Box>
    {/* middle animated bg  */}
    <Box
      sx={{
        zIndex: 1,
        position: 'absolute',
        width: '150px',
        height: '150px',
        bgcolor: '#F9BB27',
        filter: 'blur(10px)',
        left: '-15vh',
        top: '5vh',
        borderTopRightRadius: '40%',
        transform: 'rotate(-90deg) skewX(-30deg) scale(1, .866)',
        animation: `${triangleAnimation} 5s 1s linear infinite`,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          width: '150px',
          height: '150px',
          bgcolor: 'inherit',
          borderTopRightRadius: '40%',
        },
        '&::before': {
          transform:
            'rotate(-135deg) skewX(-45deg) scale(1.414, .707) translate(0, -50%)',
        },
        '&::after': {
          transform:
            'rotate(135deg) skewY(-45deg) scale(.707, 1.414) translate(50%)',
        },
        // Hover effects for demonstration
        '&:hover': {
          bgcolor: 'rgba(0, 0, 255, 0.5)',
          '&::before': {bgcolor: 'rgba(255, 0, 0, 0.5)'},
          '&::after': {bgcolor: 'rgba(255, 255, 0, 0.5)'},
        },
      }}
    />
    {/* bottom animated bg */}
    <Box
      position={'absolute'}
      sx={{
        animation: `${floatAnimation} 4s 0.5s linear infinite`,
        top: ' 43vh',
        left: '0',
        zIndex: 1,
      }}>
      <Avatar
        sx={{width: '247px', height: '247px', filter: 'blur(14px)'}}
        src={Starcoin}
        alt=""
      />
    </Box>
  </Box>
);

const triangleAnimation = keyframes`
0% {
top: 5vh;
}
50% {
top : 7vh;
}
100% { top: 5vh}
`;

const floatAnimation = keyframes`
0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;
