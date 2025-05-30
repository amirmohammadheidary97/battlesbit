import Grid from '@mui/material/Grid2';

import levelDownImage from '@/assets/img/bg/levelDown.png';
import levelUpImage from '@/assets/img/bg/levelUp.png';
import Pricing from '@/components/atoms/Pricing';

type Prop = {
  balance: number;
};
const LastChallangeItem = ({balance}: Prop) => (
  <Grid
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    justifyContent={'center'}>
    <img
      src={balance > 0 ? levelUpImage : levelDownImage}
      alt="level"
      width={'24px'}
      height={'26px'}
    />
    <Pricing
      amount={balance}
      formatPrice="$"
      hideDecimalIfZero
      isPriceLimit
      lowLimitColor="divider"
      highLimitColor="primary.main"
      mainTextProps={{
        fontSize: '12px',
        fontWeight: 400,
        sx: {
          fontFamily: 'Geogrotesque Wide',
          lineHeight: '100%',
          letterSpacing: '0.4%',
          textAlign: 'center',
        },
      }}
      symbolTextProps={{
        color: balance > 0 ? 'primary.main' : 'divider',
        fontSize: '12px',
        fontWeight: 400,
        sx: {
          ml: 0.1,
          fontFamily: 'Geogrotesque Wide',
          lineHeight: '100%',
          letterSpacing: '0.4%',
          textAlign: 'center',
        },
      }}
    />
  </Grid>
);

export default LastChallangeItem;
