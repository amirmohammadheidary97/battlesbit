import Grid from '@mui/material/Grid2';

import BestTraders from './components/organisms/BestTraders';
import {HomeHeader} from './components/organisms/HomeHeader';
import LastChallenges from './components/organisms/LastChallanges';
import LiveChallanges from './components/organisms/LiveChallenge';
import QuickAccessButton from './components/organisms/QuickAccessButton/QuickAccessButton';
import ViewBalance from './components/organisms/ViewBalance';
import {useLanding} from './hook/useLanding';
import {allQuickAccessButtonList, challangeInfoData} from './utils/fakeData';

import {HomePageTemplate} from '@/components/templates/HomePageTemplate';

const LandingPage = () => {
  //
  const {iShowBalance, handleShowViewBalance, isLoading} = useLanding();
  //
  return isLoading ? (
    <HomePageTemplate />
  ) : (
    <Grid
      container
      spacing={2}
      className="hide-scrollbar"
      sx={{
        overflowY: 'auto',
        display: 'flex',
        fontFamily: 'Geogrotesque Wide',
        pt: 2,
        pb: '1.5rem',
      }}>
      <Grid px={2} size={12} container spacing={3} flexWrap={'nowrap'}>
        <HomeHeader
          level={13}
          current={123}
          total={150}
          usdtAmount={2405}
          vsdAmount={2405}
        />
      </Grid>
      <Grid container size={12} mt={1} px={2}>
        <ViewBalance
          handleShowViewBalance={handleShowViewBalance}
          iShowBalance={iShowBalance}
        />
      </Grid>
      <Grid container size={12} px={2}>
        <QuickAccessButton buttonList={allQuickAccessButtonList} />
      </Grid>
      <Grid container size={12} px={2}>
        <LiveChallanges challangeInfo={challangeInfoData} />
      </Grid>
      <Grid container size={12} pl={2}>
        <BestTraders />
      </Grid>
      <Grid container size={12} px={2}>
        <LastChallenges />
      </Grid>
    </Grid>
  );
};
export default LandingPage;
