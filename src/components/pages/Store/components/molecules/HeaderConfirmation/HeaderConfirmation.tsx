import CloseIcon from '@mui/icons-material/Close';
import {IconButton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type HeaderConfirmationTypeProps = {
  onClose: () => void;
};

export const HeaderConfirmation: React.FC<HeaderConfirmationTypeProps> = ({
  onClose,
}) => (
  <Grid
    width={'100%'}
    display="flex"
    alignItems={'center'}
    justifyContent={'space-between'}>
    <Typography
      component="span"
      variant="caption"
      fontWeight="600"
      fontFamily="'Nunito Sans', sans-serif"
      fontSize="15px"
      lineHeight="11px">
      Confirmation
    </Typography>
    <IconButton onClick={onClose} color="default">
      <CloseIcon />
    </IconButton>
  </Grid>
);
