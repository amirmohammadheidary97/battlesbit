import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {InvitationTitleValue} from './molecules/InvitationTitleValue';
import {UserInfo} from './molecules/UserInfo';

import {theme} from '@/config/theme';

type ChallengeInvitationProps = {
  challenger: {
    name: string;
    level: number;
    avatar: string;
  };
  gameDetails: {
    time: number;
    prize: number;
    entryFee: number;
  };
};

export const ChallengeInvitation: React.FC<ChallengeInvitationProps> = ({
  challenger,
  gameDetails,
}) => (
  <Grid
    container
    sx={{
      borderRadius: 1.5,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows['10'],
      overflow: 'hidden',
      padding: 2,
    }}>
    <Grid size={12}>
      <Typography variant="h5" align="center" sx={{mb: 1}}>
        Challenge
        <span style={{color: theme.palette.primary.main}}>invitation</span>
      </Typography>
    </Grid>
    <Grid size={12}>
      <Typography variant="body2" sx={{mb: 2, color: 'text.secondary'}}>
        You have new invitation to join{' '}
        <span style={{color: theme.palette.primary.main}}>
          @{challenger.name}
        </span>{' '}
        <span>to play with him in </span>
        <span style={{fontWeight: 700, color: theme.palette.primary.main}}>
          1 vs 1
        </span>
        <span> if you like to join click on accept otherwise decline it </span>
      </Typography>
    </Grid>
    <Grid container size={12}>
      <Grid size={'grow'}>
        <UserInfo user={challenger} />
      </Grid>
      <Grid size={'auto'}>
        <InvitationTitleValue
          title="Time"
          unit="min"
          value={gameDetails.time}
        />
      </Grid>
    </Grid>
    <Grid container size={12} justifyContent="space-between">
      <InvitationTitleValue
        title="Prize"
        unit="USDT"
        value={gameDetails.prize}
      />
      <InvitationTitleValue
        title="Entry fee"
        unit="USDT"
        value={gameDetails.entryFee}
      />
    </Grid>
    <Grid container spacing={2} size={12} sx={{mt: 2}}>
      <Grid size={6}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            borderRadius: '12px',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
          Accept
        </Button>
      </Grid>
      <Grid size={6}>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          sx={{
            borderRadius: '12px',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
          Decline
        </Button>
      </Grid>
    </Grid>
  </Grid>
);
