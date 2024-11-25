import {Avatar, Box, Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useMakeMatchState} from '../../state/make-match.state';

import {theme} from '@/config/theme';
import type {User} from '@/types/models/user';

type Props = {
  user: User;
  isOnline: boolean;
  inviteFriendFn: (user: User) => void;
};

export const FriendItem = ({isOnline, user, inviteFriendFn}: Props) => {
  const {selectedFriend} = useMakeMatchState();
  return (
    <Grid container size={12} justifyContent={'space-between'}>
      {/* avatar & userName and onlineStatus */}
      <Grid
        container
        spacing={1}
        sx={{display: 'flex', alignItems: 'center'}}
        size={'auto'}>
        <Avatar
          src={user.avatar}
          alt={user.name}
          variant="circular"
          color="#BDBDBD"
          sx={{bgcolor: user.avatar ?? '#BDBDBD'}}>
          {user.name.substring(0, 1).toLocaleUpperCase()}
        </Avatar>
        <Box
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: 'Nunito Sans, sans-serif',
          }}>
          <Typography variant="body1">{user.name}</Typography>
          <Typography color={isOnline ? 'success' : 'error'} variant="caption">
            {isOnline ? 'online' : 'Offline'}
          </Typography>
        </Box>
      </Grid>
      {/* invite button */}
      <Grid
        sx={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}
        size={6}>
        <Button
          variant={selectedFriend?.id === user.id ? 'outlined' : 'contained'}
          disabled={!isOnline}
          size="medium"
          color="primary"
          sx={{
            borderRadius: theme.shape.borderRadius,
            height: '2rem',
          }}
          onClick={() => inviteFriendFn(user)}>
          {/* <Typography
            sx={{fontFamily: 'Nunito Sans, sans-serif'}}
            variant="button"> */}
          {selectedFriend?.id === user.id ? 'invited' : 'invite'}

          {/* </Typography> */}
        </Button>
      </Grid>
    </Grid>
  );
};
