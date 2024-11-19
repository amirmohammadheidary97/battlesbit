import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type ConfirmationInfoTypeProps = {
  type: string;
  amount: number;
  currency: string;
  amount2: number;
  currency2: string;
};
export const ConfirmationInfo: React.FC<ConfirmationInfoTypeProps> = ({
  amount,
  currency,
  type,
  amount2,
  currency2,
}) => (
  <Grid
    size={12}
    display="flex"
    justifyContent={'space-between'}
    flexDirection={'column'}>
    <Typography
      component="span"
      marginTop={'4px'}
      fontFamily="'Nunito Sans', sans-serif"
      fontSize="15px"
      marginBottom={'14px'}
      fontWeight={'400'}
      lineHeight="11px">
      {type}
    </Typography>
    <Typography
      component="span"
      fontFamily="'Nunito Sans', sans-serif"
      fontSize="15px"
      fontWeight={'400'}
      marginBottom={'14px'}
      lineHeight="11px">
      {currency2} {amount2 || ''}
    </Typography>
    <Typography
      component="span"
      fontFamily="'Nunito Sans', sans-serif"
      fontSize="15px"
      fontWeight={'400'}
      marginBottom={'14px'}
      lineHeight="11px">
      {currency} {amount || ''}
    </Typography>
  </Grid>
);
