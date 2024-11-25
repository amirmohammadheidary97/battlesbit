import {Box, Button, styled} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ConfirmationItem} from '../../molecules/ConfirmationItem';
import {HeaderConfirmation} from '../../molecules/HeaderConfirmation';
import {WalletAmountItem} from '../../molecules/WalletAmount';

type ConfirmationDetailProps = {
  onClose: () => void;
  icon: string;
  type: string;
  amount: number;
  currency: string;
  walletAmount: number;
  amount2: number;
  currency2: string;
};

const ConfirmationDetailWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '5px',
  width: '100%',
  height: '100%',
}));

export const ConfirmationDetail: React.FC<ConfirmationDetailProps> = ({
  amount,
  currency,
  icon,
  onClose,
  type,
  amount2,
  currency2,
  walletAmount,
}) => (
  <ConfirmationDetailWrapper>
    <Grid marginBottom={'5px'} size={12}>
      <HeaderConfirmation onClose={onClose} />
    </Grid>
    <Grid marginBottom={'25px'}>
      <ConfirmationItem
        amount={amount}
        currency={currency}
        icon={icon}
        type={type}
        amount2={amount2}
        currency2={currency2}
      />
    </Grid>
    <Grid>
      <WalletAmountItem walletAmount={walletAmount} />
    </Grid>
    <Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{width: '100%', borderRadius: '8px', margin: '15px 0px'}}>
        Buy
      </Button>
    </Grid>
  </ConfirmationDetailWrapper>
);
