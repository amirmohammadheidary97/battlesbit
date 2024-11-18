import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

type GetItTypeProps = {
  amount: number;
  currency: string;
};
export const GetIt: React.FC<GetItTypeProps> = ({amount, currency}) => {
  const theme = useTheme();
  return (
    <Grid
      padding={'4px 8px'}
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.primary.main,
        zIndex: 3,
        width: '138px',
        height: '32px',
        transform: 'translateY(-17px)',
      }}>
      <Typography
        color={theme.palette.primary.dark}
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
          backgroundColor: theme.palette.primary.dark,
        }}></Grid>
      <Typography
        color={theme.palette.primary.dark}
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
