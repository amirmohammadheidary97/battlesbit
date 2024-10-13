import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {BalanceProfit} from './components/BalanceProfit';
import {CancelAndReverseWarningDialog} from './components/CancelAndReverseWarningDialog';
import {ClosePositionDrawer} from './components/ClosePositionDrawer';
import {OrderForm} from './components/OrderForm/OrderForm';
import {PositionsTabs} from './components/PositionsTabs';
import {TpslDrawer} from './components/TpslDrawer';
import {useAssetsList} from './hooks/useAssetsList';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {CustomCircularProgress} from '@/components/molecules/CustomCircularProgress';
import {MatchStatusSlider} from '@/components/molecules/MatchStatusSlider';
import {useElementRect} from '@/hooks/custom/useElementRect';

const LiveChallenge = () => {
  //
  const theme = useTheme();
  const {containerRef, rect} = useElementRect({});
  const {assets} = useAssetsList();
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
            padding: 2,
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
      {/*  */}
      <OrderForm assets={assets} />
      <ClosePositionDrawer />
      <TpslDrawer />
      <CancelAndReverseWarningDialog />
      <PositionsTabs />
    </Grid>
  );
};

export default LiveChallenge;
