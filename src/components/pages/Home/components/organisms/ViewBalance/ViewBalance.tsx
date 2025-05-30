import Grid from '@mui/material/Grid2';

import BalanceInfo from '../../molecules/BalanceInfo';

import CustomButton from '@/components/atoms/Button';

type Prop = {
  handleShowViewBalance: () => void;
  iShowBalance: boolean;
};

const ViewBalance = ({handleShowViewBalance, iShowBalance}: Prop) => (
  <Grid
    size={12}
    container
    sx={{backgroundColor: 'transparent'}}
    display={'flex'}
    alignItems={'center'}
    justifyContent={'space-between'}>
    <Grid container>
      <BalanceInfo
        handleShowViewBalance={handleShowViewBalance}
        iShowBalance={iShowBalance}
        balance={9999}
        convertedTomansBalance={67430000}
        currency="USDT"
      />
    </Grid>
    <Grid container>
      <CustomButton
        onClick={() => {}}
        styleButton={{
          borderRadius: '8px',
          width: '93px',
        }}
        content="Deposit"
        color="inherit"
        backgroundColor="text.primary"
        fontSize="13px"
        fontWeight={500}
        variant="contained"
        textColor="background.default"
      />
    </Grid>
  </Grid>
);

export default ViewBalance;
