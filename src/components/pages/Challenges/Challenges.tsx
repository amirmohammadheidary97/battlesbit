import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ChallengeBigItem} from './components/organisms/ChallengeBigItem';
import {ChallengeDemoResultCard} from './components/organisms/ChallengeDemoResultCard';
import {ChallengeSmallItem} from './components/organisms/ChallengeSmallItem';

import timeIcon from '@/assets/img/icons/general/time.png';
import {ShowMoreBtn} from '@/components/atoms/ShowMoreBtn';
import {TitleBox} from '@/components/atoms/TitleBox';
import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {SearchBox} from '@/components/molecules/SearchBox';
import {LiveChallengeItem} from '@/components/organisms/LiveChallengeItem';

const commonStyles = {
  border: '1px solid #595959',
  // border: 1,
  width: '100%',
  height: '3rem',
  px: 2,
};

const Challenges = () => (
  <Box display={'flex'} flexDirection={'column'} alignItems={'stretch'} p={2}>
    {/* Backward Title */}
    <BackwardTitle title="Challenges" />
    {/* Search Box */}
    <Grid mt={2} container spacing={2}>
      <SearchBox size={10} />
      <Grid size={2}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{...commonStyles, borderRadius: '14px'}}>
          <img src={timeIcon} style={{width: '1.5rem', height: '1.5rem'}} />
        </Box>
      </Grid>
    </Grid>
    {/* Title Box: InprogressGames */}
    <TitleBox title="Inprogress Games" />
    {/* Demos */}
    <LiveChallengeItem />
    <LiveChallengeItem />
    {/* Show More Button */}
    <ShowMoreBtn />
    {/* Title Box: Challenges */}
    <TitleBox title="Challenges" />
    {/* Challenge Carts */}
    <ChallengeBigItem />
    <Grid container spacing={1}>
      <ChallengeSmallItem />
      <ChallengeSmallItem />
    </Grid>
    {/* Show More Button */}
    <ShowMoreBtn textColor="#F3C73B" />
    {/* Challenge Demo Result Card */}
    <ChallengeDemoResultCard challengeDate="2024/5/23" result="WON" />
    <ChallengeDemoResultCard challengeDate="2024/5/23" result="LOST" />
  </Box>
);
export default Challenges;
