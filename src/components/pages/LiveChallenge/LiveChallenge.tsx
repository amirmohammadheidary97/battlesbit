import {lazy, Suspense} from 'react';
import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {BalanceProfit} from './components/BalanceProfit';
import {AssetsChart} from './components/Chart';
import {ClosePositionDrawer} from './components/ClosePositionDrawer';
import {OrderForm} from './components/OrderForm/OrderForm';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {CustomCircularProgress} from '@/components/molecules/CustomCircularProgress';
import {MatchStatusSlider} from '@/components/molecules/MatchStatusSlider';
import {useElementRect} from '@/hooks/custom/useElementRect';

const CancelAndReverseWarningDialog = lazy(
  () => import('./components/CancelAndReverseWarningDialog'),
);
const PositionsTabs = lazy(() => import('./components/PositionsTabs'));
const TpslDrawer = lazy(() => import('./components/TpslDrawer'));

const LiveChallenge = () => {
  //
  const theme = useTheme();
  const {containerRef, rect} = useElementRect({});
  //
  return (
    <Grid container spacing={2} p={2}>
      <Grid size={12}>
        <BackwardTitle title="Live Challenge" />
      </Grid>
      <Grid size={12} container alignItems={'center'} spacing={1} columns={20}>
        <Grid size={8}>
          <BalanceProfit
            ref={containerRef}
            role="balance"
            unit="USDT"
            value={2000}
          />
        </Grid>
        <Grid
          size={4}
          justifyContent={'center'}
          container
          alignItems={'center'}>
          <CustomCircularProgress
            indicatorColor={theme.palette.primary.main}
            trackColor={theme.palette.background.paper}
            size={rect?.height ?? 69}
            percentage={20}
            strokeW={5}
            label={<Typography variant="subtitle1">30:28</Typography>}
          />
        </Grid>
        <Grid size={8}>
          <BalanceProfit role="profit" unit="USDT" value={2000} />
        </Grid>
      </Grid>

      {/*  */}
      <Grid size={12} container>
        <Grid
          size={12}
          container
          sx={{
            backgroundColor: theme.palette.background.paper,
            padding: 1,
            borderRadius: theme.shape.borderRadius,
          }}>
          <MatchStatusSlider
            {...{
              player1: {
                name: 'You',
                progressPercent: 10,
                income: -40,
              },
              player2: {
                name: 'Amir Mohammad',
                progressPercent: 70,
                income: 200,
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid container size={12}>
        <AssetsChart />
      </Grid>
      <OrderForm />
      <ClosePositionDrawer />
      <Suspense fallback={<></>}>
        <TpslDrawer />
      </Suspense>
      <Suspense fallback={<></>}>
        <CancelAndReverseWarningDialog />
      </Suspense>
      <Suspense fallback={<></>}>
        <PositionsTabs />
      </Suspense>
    </Grid>
  );
};

export default LiveChallenge;
