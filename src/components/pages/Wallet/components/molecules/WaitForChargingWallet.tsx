import {Box, keyframes, styled, Typography} from '@mui/material';

import {flex} from '@/utils/flexHelper';

const WaitForChargingWallet = () => (
  <ContainerBox>
    <AnimatedBox />
    <Box
      sx={{
        width: '344px',
        height: '54px',
        bgcolor: 'background.paper',
        position: 'relative',
        zIndex: 3,
        borderRadius: '12px',
        px: 1,
        ...flex().jcenter().acenter().result,
      }}>
      <Typography variant="subtitle2" color={'primary'} textAlign={'center'}>
        {/*  eslint-disable-next-line react/no-unescaped-entities */}
        please don't close this page till operation compeletes
      </Typography>
    </Box>
  </ContainerBox>
);

export default WaitForChargingWallet;

const ContainerBox = styled(Box)(() => ({
  width: '350px',
  height: '60px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '12px',
}));

const AnimatedBox = styled(Box)(({theme}) => ({
  width: '6px',
  height: '6px',
  backgroundColor: theme.palette.primary.main,
  boxShadow: `0 0 18px 20px #C19407`,
  borderRadius: '50%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,
  animation: `${rollAnimation} 1.7s ease-out infinite`,
}));

const rollAnimation = keyframes`
    0% {
      top: 0;
      left: 0;
    }
    40% {
      top: 0;
      left: 100%;
    }
    50% {
      top: 100%;
      left: 100%
    }
    90% {
      top: 100%;
      left:0;
    }
      100% {
      top:0 ;
      left: 0;
    }
`;
