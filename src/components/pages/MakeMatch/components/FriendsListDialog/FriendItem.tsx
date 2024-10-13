import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

type Props = {
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
  isOnline: boolean;
};

export const FriendItem = ({isOnline, user}: Props) => (
  <Grid container size={12}>
    <Grid
      container
      justifyContent={'space-between'}
      borderBottom={'1px solid #595959'}
      py={2}
      size={12}>
      <Grid size={'auto'}>
        {isOnline} .. {user.name}
      </Grid>
      <Grid
        sx={{display: 'flex', justifyContent: 'end'}}
        border={'1px solid red'}
        size={6}>
        <Button
          variant="contained"
          disabled
          size="medium"
          sx={{
            bgcolor: 'primary.main',
            borderRadius: theme.shape.borderRadius,
          }}>
          <Typography variant="button"> invite</Typography>
        </Button>
      </Grid>
    </Grid>
  </Grid>
);
