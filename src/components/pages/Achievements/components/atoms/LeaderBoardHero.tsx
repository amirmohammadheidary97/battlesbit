import {EqualizerRounded} from '@mui/icons-material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

const LeaderBoardHero = () => (
  <Grid size={12} container px={2}>
    <Grid
      size={12}
      container
      spacing={'0.5rem'}
      sx={{
        bgcolor: 'background.paper',
        borderRadius: theme => theme.shape.borderRadius,
        py: '0.75rem',
        px: '1rem',
        alignItems: 'center',
      }}
      onClick={() => ''}>
      <Grid size={1}>
        <EqualizerRounded color="primary" sx={{fontSize: '1.5rem'}} />
      </Grid>
      <Grid size={2}>
        <Typography variant="body2">Leaderboard</Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default LeaderBoardHero;
