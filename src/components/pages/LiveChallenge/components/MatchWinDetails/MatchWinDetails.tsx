import {useEffect, useRef} from 'react';
import ReactConfetti from 'react-confetti';
import {useTimeout, useWindowSize} from 'react-use';
import {Button, Divider, Drawer, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useMatchState} from '../../state/match.state';

import {Player} from './components/Palyer';
import {PositionResult} from './components/PositionResult';
import {positionResultList} from './fakeData';

import fakeavatar from '@/assets/img/icons/avatars/avatar1.svg';
import btcicon from '@/assets/img/icons/general/bitcoin.png';
import {CustomIcon} from '@/components/atoms/icon';
import {theme} from '@/config/theme';
import {useElementRect} from '@/hooks/custom/useElementRect';

export const MatchWinDetails = () => {
  const {showWinDetails} = useMatchState();
  const {width, height} = useWindowSize();
  const [isConfettiOpen] = useTimeout(5000);
  const {containerRef} = useElementRect({});
  const getLeftColData = () =>
    positionResultList.slice(0, positionResultList.length / 2);
  const getRightColData = () =>
    positionResultList.slice(positionResultList.length / 2);

  const imageRef: any = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = btcicon;
    imageRef.current = img;
  }, []);
  //
  return (
    <Drawer open={showWinDetails} anchor="right">
      <Grid
        container
        size={12}
        spacing={1}
        sx={{
          bgcolor: theme.palette.background.default,
          minHeight: '100vh',
          canvas: {
            // zIndex: 1,
            height: '33.33vh',
            width: '100vw',
          },
        }}>
        <Grid ref={containerRef} container size={12} sx={{height: '33.33vh'}}>
          <ReactConfetti
            width={width}
            height={height}
            numberOfPieces={100}
            recycle={!isConfettiOpen()}
            gravity={0.3}
            drawShape={ctx => {
              const x = Math.random() * 2;
              const y = Math.random() * 2;
              const width = 30;
              const height = 60;
              ctx.drawImage(imageRef.current, x, y, width, height);
            }}
          />
          <Grid container size={12} alignItems={'flex-end'}>
            <Grid size={6} container justifyContent={'center'}>
              <Player
                avatar={fakeavatar}
                isWinner
                level={52}
                name="You"
                size={80}
              />
            </Grid>
            <Grid size={6} container justifyContent={'center'}>
              <Player avatar={fakeavatar} level={42} name="MAMAD" size={80} />
            </Grid>
          </Grid>
        </Grid>
        {/*  */}
        <Grid container size={12} zIndex={100000}>
          <Grid container size={12} spacing={0} p={2}>
            <Grid size={12}>
              <Typography
                color="primary"
                textAlign={'center'}
                sx={{
                  fontFamily: 'Alfa Slab One',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '24.64px',
                }}>
                Match Details
              </Typography>
            </Grid>
            <Grid container size={12} justifyContent={'space-between'}>
              <Grid>
                <Typography variant="h6">Earned Prize:</Typography>
              </Grid>
              <Grid>
                <Typography variant="h5">+9 USDT</Typography>
              </Grid>
            </Grid>
            <Grid container size={12} justifyContent={'space-between'}>
              <Grid>
                <Typography variant="h6">Earned XP:</Typography>
              </Grid>
              <Grid>
                <Typography variant="h5">+999</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid container size={12} p={2}>
            <Grid container size={5.5} spacing={1} alignContent={'flex-start'}>
              {getLeftColData().map((item, idx) => (
                <Grid size={12} key={idx}>
                  <PositionResult {...item} />
                </Grid>
              ))}
            </Grid>
            <Grid size={1} container justifyContent={'center'}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid container size={5.5} spacing={1} alignContent={'flex-start'}>
              {getRightColData().map((item, idx) => (
                <Grid size={12} key={idx}>
                  <PositionResult {...item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/*  */}
          <Grid container size={12} spacing={1} p={2}>
            <Grid container size={12}>
              <Grid size="grow">
                <Button
                  fullWidth
                  color="primary"
                  variant="outlined"
                  sx={{
                    height: '3.25rem',
                  }}>
                  Home
                </Button>
              </Grid>
              <Grid size="auto">
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{
                    height: '3.25rem',
                    width: '3.25rem',
                  }}>
                  <CustomIcon
                    fontSize="large"
                    sx={{pl: 0.5, pt: 0.5}}
                    type="shareIcon"
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                sx={{
                  height: '3.25rem',
                }}>
                New Challenge
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};
