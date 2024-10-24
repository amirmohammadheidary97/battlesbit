import styled from '@emotion/styled';
import {Avatar, Container} from '@mui/material';

import WaintingPicture from '@/assets/img/loadingmatch.jpeg';

const MatchloadingPicture = () => (
  <Container
    sx={{
      height: '16.43rem',
      width: '16.43rem',
      position: 'relative',
      zIndex: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <LowestImageConatiner></LowestImageConatiner>
    <MiddleImageConatiner> </MiddleImageConatiner>
    <HighestImageConatiner></HighestImageConatiner>
    <Avatar
      sx={{
        width: '10.5rem',
        height: '10.5rem',
        zIndex: 9,
        img: {width: 1, height: 1},
      }}
      src={WaintingPicture}
    />
  </Container>
);
export default MatchloadingPicture;

const pulseAnimation = `
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const LowestImageConatiner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-main, #f3c73b);
  border-radius: 50%;
  opacity: 0.1;
  z-index: 1;
  animation: pulse 2s infinite;
  ${pulseAnimation}
`;

const MiddleImageConatiner = styled.div`
  position: absolute;
  top: 6%;
  left: 6%;
  width: 88%;
  height: 88%;
  background-color: var(--primary-main, #f3c73b);
  border-radius: 50%;
  opacity: 0.2;
  z-index: 2;
  animation: pulse 2s infinite;
  ${pulseAnimation}
`;

const HighestImageConatiner = styled.div`
  position: absolute;
  top: 14%;
  left: 14%;
  width: 72%;
  height: 72%;
  background-color: var(--primary-main, #f3c73b);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  animation: pulse 2s infinite;

  ${pulseAnimation};
`;
