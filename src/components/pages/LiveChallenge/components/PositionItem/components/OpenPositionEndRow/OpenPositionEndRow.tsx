import {Button, IconButton, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {GameMatchPositionFakeData} from '../../../ClosePositionDrawer/close-position-drawer.stories';

import {CustomIcon} from '@/components/atoms/icon';
import {usePositionsState} from '@/components/pages/LiveChallenge/state/positions.state';

export const OpenPositionEndRow = () => {
  const theme = useTheme();
  const {
    setSelectedPositionToClose,
    setSelectedPositionToEditTpsl,
    setSelectedPositionToReverse,
  } = usePositionsState();
  const onCloseBtnClick = () => {
    setSelectedPositionToClose(GameMatchPositionFakeData);
  };
  const onTpslBtnClick = () => {
    setSelectedPositionToEditTpsl(GameMatchPositionFakeData);
  };
  const onReverseBtnClick = () => {
    setSelectedPositionToReverse(GameMatchPositionFakeData);
  };
  return (
    <Grid
      container
      size={12}
      spacing={1}
      sx={{
        button: {borderRadius: theme.shape.borderRadius},
      }}>
      <Grid size="grow">
        <Button
          fullWidth
          color="grey1"
          variant="contained"
          onClick={onCloseBtnClick}>
          CLOSE
        </Button>
      </Grid>
      <Grid size="grow">
        <Button
          fullWidth
          color="grey1"
          variant="contained"
          onClick={onTpslBtnClick}>
          TP/SL
        </Button>
      </Grid>
      <Grid size="grow">
        <Button
          fullWidth
          color="grey1"
          variant="contained"
          sx={{whiteSpace: 'nowrap'}}>
          CLOSE ALL
        </Button>
      </Grid>
      <Grid size="auto">
        <IconButton
          color="grey1"
          onClick={onReverseBtnClick}
          sx={{bgcolor: theme.palette.background.paper}}>
          <CustomIcon type="reverse" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
