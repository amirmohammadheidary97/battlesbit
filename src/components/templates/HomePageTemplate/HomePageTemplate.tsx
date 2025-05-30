import Grid from '@mui/material/Grid2';

import {
  BestTradersTemplate,
  ChallengeButtonsTemplate,
  HomeHeaderTemplate,
  LastChallengesTemplate,
  LiveChallengeTemplate,
  QuickAccessButtonTemplate,
  SectionTitleTemplate,
  ViewBalanceTemplate,
} from './components';

export const HomePageTemplate = () => (
  <Grid
    container
    spacing={2}
    className="hide-scrollbar"
    sx={{
      overflowY: 'auto',
      display: 'flex',
      p: 1.25,
      pb: '5.5rem',
    }}>
    <Grid size={12} container>
      <HomeHeaderTemplate />
    </Grid>
    <Grid size={12} container>
      <ViewBalanceTemplate />
    </Grid>
    <Grid size={12} container>
      <QuickAccessButtonTemplate />
    </Grid>
    <Grid size={12} container>
      <ChallengeButtonsTemplate />
    </Grid>
    <Grid size={12}>
      <SectionTitleTemplate />
      <LiveChallengeTemplate />
    </Grid>
    <Grid size={12}>
      <SectionTitleTemplate />
      <BestTradersTemplate />
    </Grid>
    <Grid size={12}>
      <LastChallengesTemplate />
    </Grid>
  </Grid>
);
