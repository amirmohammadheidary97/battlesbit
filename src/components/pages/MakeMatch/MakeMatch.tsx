import {Box, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {FriendsListDialog} from './components/FriendsListDialog';
import {MatchConfig} from './components/MatchConfig';
import {useInvitationState} from './state/inviteFriend.state';

import bg from '@/assets/img/bg/matchmake-bg.png';
import {Center} from '@/components/atoms/Center';
import {CustomIcon} from '@/components/atoms/icon';
import {theme} from '@/config/theme';

const MakeMatch = () => {
  const {setIsOpen, isOpen} = useInvitationState();
  return (
    <Grid
      container
      size={12}
      alignContent={'space-between'}
      sx={{height: '100vh', padding: 2}}>
      {/* BG */}
      <Grid size={12} sx={{height: '75vh', position: 'relative'}}>
        <Center
          fullSize
          containerProps={{
            sx: {
              img: {
                Height: '100%',
                maxHeight: '100%',
                maxWidth: '100%',
              },
            },
          }}>
          <img src={bg} />
        </Center>
        <Box sx={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
          <MatchConfig entryFee={20} prize={200} time={20} />
        </Box>
      </Grid>
      {/* buttons */}
      <Grid
        size={12}
        container
        spacing={1.5}
        //   alignItems={'stretch'}
        sx={{
          height: '52px',
          button: {
            borderRadius: theme.shape.borderRadius,
          },
        }}>
        <Grid size={'grow'}>
          <Button fullWidth color="primary" variant="contained" sx={{py: 1.5}}>
            Start MatchMaking
          </Button>
        </Grid>
        <Grid>
          <Button
            color="primary"
            variant="contained"
            sx={{
              aspectRatio: 1,
              height: '52px',
              width: '52px !important',
              maxWidth: '52px !important',
              p: 0,
            }}
            onClick={() => {
              console.log(isOpen);

              setIsOpen();
            }}>
            <Center fullSize>
              <CustomIcon type="addFriend" />
            </Center>
          </Button>
          <FriendsListDialog />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MakeMatch;
