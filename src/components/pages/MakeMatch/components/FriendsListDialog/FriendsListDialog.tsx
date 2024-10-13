import {useEffect} from 'react';
// import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid2';

import {useInvitationState} from '../../state/inviteFriend.state';

import {FriendItem} from './FriendItem';

import Avatar from '@/assets/img/icons/avatars/Ava1.png';
import Avatar2 from '@/assets/img/icons/avatars/Ava2.png';
import {theme} from '@/config/theme';
import type {User} from '@/types/models/user';

export const FriendsListDialog = () => {
  const {isOpen, setIsOpen, setFriends} = useInvitationState();

  type friendItem = {
    user: User;
    isOnline: boolean;
  };

  const friendsList: friendItem[] = [
    {user: {id: 1, name: 'john Doe', avatar: Avatar}, isOnline: true},
    {user: {id: 2, name: 'john Sina'}, isOnline: false},
    {user: {id: 3, name: 'john Man', avatar: Avatar2}, isOnline: true},
  ];

  useEffect(() => {
    setFriends(friendsList);
  }, []);

  return (
    <Dialog
      maxWidth={'lg'}
      fullWidth
      open={isOpen}
      onClose={() => setIsOpen()}
      aria-labelledby={'friends-list-dialog'}
      sx={{
        '.MuiPaper-root': {
          borderRadius: theme.shape.borderRadius,
        },
      }}>
      <DialogTitle id={'friends-list-dialog'}>Friends List</DialogTitle>
      <DialogContent>
        <Grid container size={12} spacing={2}>
          {/* <Grid size={12}>
            <Typography variant="h6" color={theme.palette.text.primary}>
              Friends List
            </Typography>
          </Grid> */}
          <Grid size={12}>
            {friendsList.map(fr => (
              <FriendItem
                isOnline={fr.isOnline}
                user={fr.user}
                key={fr.user.id}
              />
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen()} color="primary">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};
