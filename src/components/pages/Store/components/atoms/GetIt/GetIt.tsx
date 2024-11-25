import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

type GetItTypeProps = {
  amount: number;
  currency: string;
  isFunds: boolean;
};
export const GetIt: React.FC<GetItTypeProps> = ({
  amount,
  currency,
  isFunds,
}) => {
  const theme = useTheme();
  return (
    <Grid
      padding={'4px 8px'}
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: !isFunds
          ? theme.palette.primary.main
          : 'rgba(89, 89, 89, 1)',
        zIndex: 3,
        width: '138px',
        height: '32px',
        transform: 'translateY(-17px)',
        borderRadius: '10px',
      }}>
      <Typography
        color={!isFunds ? theme.palette.primary.dark : 'text.white'}
        variant="caption"
        fontWeight={'800'}
        fontSize={'12px'}
        fontFamily="'Nunito Sans', sans-serif">
        {amount}{' '}
        <Typography
          component="span"
          variant="caption"
          fontFamily="'Nunito Sans', sans-serif"
          fontSize="10px"
          lineHeight="11px"
          textTransform="uppercase">
          {currency}
        </Typography>
      </Typography>
      <Grid
        margin="0px 6px"
        sx={{
          height: '90%',
          width: '1px',
          backgroundColor: !isFunds ? theme.palette.primary.dark : '#fff',
        }}></Grid>
      <Typography
        color={!isFunds ? theme.palette.primary.dark : 'text.white'}
        component="span"
        variant="caption"
        fontFamily="'Nunito Sans', sans-serif"
        fontSize="12px"
        fontWeight="900"
        textTransform="uppercase">
        Get it
      </Typography>
    </Grid>
  );
};
