import Grid from '@mui/material/Grid2';

import {AiAssistantCard} from './components/organisms/AiAssistantCard';
import {ChallengeCard} from './components/organisms/ChallengeCard';
import {HomeHeader} from './components/organisms/HomeHeader';
import {NewGameButton} from './components/organisms/NewGameButton';
import {NextPrize} from './components/organisms/NextPrize';
import panda from './components/organisms/pandaFrame.png';

const LandingPage = () => (
  <Grid
    container
    spacing={2}
    className="hide-scrollbar"
    sx={{
      overflowY: 'auto',
      display: 'flex',
      p: 2,
      pb: '5.5rem',
    }}>
    <Grid size={12} container spacing={3}>
      <HomeHeader
        current={123}
        total={200}
        usdtAmount={1234}
        vsdAmount={5467}
      />
    </Grid>
    <Grid size={12} container>
      <AiAssistantCard />
    </Grid>
    <Grid size={12}>
      <ChallengeCard matchState="Winning" minutesLeft={10} secondsLeft={56} />
    </Grid>
    <Grid
      size={12}
      sx={{
        img: {
          width: '100%',
          height: '170px',
        },
      }}>
      <img src={panda} />
    </Grid>
    <Grid size={12} spacing={1} container>
      <Grid size={6}>
        <NewGameButton text="Quick Game" />
      </Grid>
      <Grid size={6}>
        <NewGameButton text="Play With Friends" />
      </Grid>
    </Grid>
    <Grid size={12}>
      <NextPrize />
    </Grid>
  </Grid>
);

export default LandingPage;
