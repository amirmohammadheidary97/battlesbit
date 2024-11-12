import {useEffect} from 'react';
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

import Avatar from '@/assets/img/icons/avatars/Ava1.png';
import Avatar2 from '@/assets/img/icons/avatars/Ava2.png';
import {theme} from '@/config/theme';
import type {User} from '@/types/models/user';

type friendItem = {
  user: User;
  isOnline: boolean;
};

const friendsList: friendItem[] = [
  {user: {id: 1, name: 'john Doe', avatar: Avatar}, isOnline: true},
  {user: {id: 2, name: 'john Sina'}, isOnline: false},
  {user: {id: 3, name: 'john Man', avatar: Avatar2}, isOnline: true},
];

export const FriendsListDialog = () => {
  const navigate = useNavigate();
  const {
    isOpen,
    toggleOpenDialoge,
    setFriends,
    setStartMatch,
    setSelectedFriend,
  } = useMakeMatchState();

  useEffect(() => {
    setFriends(friendsList);
  });

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
          {friendsList.map((fr, index) => (
            <Grid size={12} key={fr.user.id}>
              <FriendItem
                inviteFriendFn={handleInviteFriend}
                isOnline={fr.isOnline}
                user={fr.user}
              />
              {index < friendsList.length - 1 && <Divider sx={{my: 1}} />}
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
