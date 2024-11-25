import {useNavigate} from 'react-router';
import {Divider, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid2';

import {useMakeMatchState} from '../../state/make-match.state';

import {FriendItem} from './FriendItem';

import {theme} from '@/config/theme';
import type {User} from '@/types/models/user';

export const FriendsListDialog = () => {
  const navigate = useNavigate();
  const {isOpen, toggleOpenDialoge, setStartMatch, setSelectedFriend, friends} =
    useMakeMatchState();

  const handleStartMatchWithFriends = () => {
    setStartMatch('friendly');
    toggleOpenDialoge();
    navigate('/matchloading');
  };

  const handleInviteFriend = (user: User) => {
    setSelectedFriend(user);
  };

  return (
    <Dialog
      maxWidth={'lg'}
      fullWidth
      open={isOpen}
      onClose={() => toggleOpenDialoge()}
      aria-labelledby={'friends-list-dialog'}
      sx={{
        '.MuiPaper-root': {
          borderRadius: theme.shape.borderRadius,
          height: '26.43rem',
          p: 1,
        },
      }}>
      <DialogTitle sx={{px: 1}} id={'friends-list-dialog'}>
        <Typography variant="h6" fontFamily={'Nunito Sans, sans-serif'}>
          Friends List
        </Typography>
      </DialogTitle>
      <DialogContent sx={{p: 1}}>
        <Grid container size={12}>
          {friends.map((fr, index) => (
            <Grid size={12} key={fr.user.id}>
              <FriendItem
                inviteFriendFn={handleInviteFriend}
                isOnline={fr.isOnline}
                user={fr.user}
              />
              {index < friends.length - 1 && <Divider sx={{my: 1}} />}
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions sx={{width: 1}}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            width: 1,
            borderRadius: theme.shape.borderRadius,
            py: '1rem',
          }}
          onClick={handleStartMatchWithFriends}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};
