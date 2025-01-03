import {useNavigate} from 'react-router';
import {Box, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {FriendsListDialog} from './components/FriendsListDialog';
import {MatchConfig} from './components/MatchConfig';
import {useMakeMatchState} from './state/make-match.state';

import bg from '@/assets/img/bg/makemach.svg';
import {Center} from '@/components/atoms/Center';
import {CustomIcon} from '@/components/atoms/icon';
import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

const MakeMatch = () => {
  const {toggleOpenDialoge, setStartMatch} = useMakeMatchState();
  const navigate = useNavigate();
  const handleStartMatchNormally = () => {
    setStartMatch('normal');
    navigate('/matchloading');
  };
  return (
    <Grid
      container
      size={12}
      alignContent={'space-between'}
      sx={{height: '100vh', position: 'relative', pb: 5}}>
      {/* backward button */}
      <BackwardTitle title="Make Match" />
      {/* BG */}
      <Grid
        size={12}
        px={2}
        height={'70vh'}
        position={'relative'}
        sx={{...flex().column().jcenter().acenter().result}}>
        <Box
          sx={{
            img: {
              position: 'absolute',
              top: -50,
              left: 0,
              zIndex: 1,
              width: '90%',
              height: '90%',
            },
          }}>
          <img src={bg} />
        </Box>
        <Box
          sx={{
            px: 2,
            position: 'absolute',
            zIndex: 3,
            bottom: 10,
          }}>
          <MatchConfig entryFee={20} prize={200} time={20} />
        </Box>
      </Grid>
      {/* buttons */}
      <Grid
        size={12}
        container
        spacing={1.5}
        px={2}
        sx={{
          height: '52px',
          button: {
            borderRadius: theme.shape.borderRadius,
          },
        }}>
        <Grid size={'grow'}>
          <Button
            onClick={handleStartMatchNormally}
            fullWidth
            color="primary"
            variant="contained"
            sx={{py: 1.5}}>
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
            onClick={() => toggleOpenDialoge()}>
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
