import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type DepositButtonTypeProps = {
  onClick: () => void;
};
export const DepositButton: React.FC<DepositButtonTypeProps> = ({onClick}) => (
  <Grid size={12} display="flex" alignItems="center">
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      size="large"
      sx={{width: '100%', padding: '14px 0px', borderRadius: '8px'}}>
      <Typography
        color="text.dark"
        component="span"
        variant="caption"
        fontFamily="'Nunito Sans', sans-serif"
        fontSize="15px"
        fontWeight={'600'}
        lineHeight="11px">
        Deposit
      </Typography>
    </Button>
  </Grid>
);
