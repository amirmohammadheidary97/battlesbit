import {useNavigate} from 'react-router';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import TipsDialogContainer from './TipDialog/TipsDialogContainer';
import MatchloadingPicture from './WaitingPictureContainer/MatchloadingAnimation';

import {useMakeMatchState} from '@/components/pages/MakeMatch/state/make-match.state';
import {theme} from '@/config/theme';

const WaitingToJoinStage = () => {
  const navigate = useNavigate();
  ////
  const {startMatch, selectedFriend, setSelectedFriend} = useMakeMatchState();
  ////
  const handleCancelClick = () => {
    if (selectedFriend) {
      setSelectedFriend(undefined);
    }
    navigate(-1);
  };
  return (
    <>
      <Grid size={12} rowSpacing={'47px'} container>
        <Grid size={12}>
          <Typography
            color="primary"
            sx={{
              font: '400 24px Alfa Slab One, sans-serif',
              textAlign: 'center',
              lineHeight: '32.86px',
            }}>
            {startMatch && startMatch === 'normal'
              ? 'Finding opponent ...'
              : selectedFriend &&
                `Waiting for ${selectedFriend?.name} to join ...`}
          </Typography>
        </Grid>
        <Grid size={12}>
          <MatchloadingPicture />
        </Grid>
      </Grid>

      <Grid size={12} spacing={2} container>
        <Grid size={12}>
          <TipsDialogContainer />
        </Grid>
        <Grid size={12}>
          <Button
            size="large"
            sx={{
              width: 1,
              height: '3.5rem',
              borderRadius: theme.shape.borderRadius,
            }}
            variant="contained"
            color="error"
            onClick={handleCancelClick}>
            cancle
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default WaitingToJoinStage;
