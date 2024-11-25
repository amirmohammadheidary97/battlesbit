import {Drawer} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ConfirmationDetail} from '../../components/organisms/ConfirmationDetail';

type Props = {
  open: boolean;
  onClose: () => void;
  icon: string;
  type: string;
  amount: number;
  amount2: number;
  currency: string;
  currency2: string;
  walletAmount: number;
};
const ConfirmationDrawer: React.FC<Props> = ({
  onClose,
  open,
  amount,
  currency,
  icon,
  type,
  walletAmount,
  amount2,
  currency2,
}) => (
  <Drawer
    keepMounted={false}
    anchor="bottom"
    open={open}
    onClose={onClose}
    sx={{
      '& .MuiDrawer-paper': {
        width: '100%',
        backgroundColor: 'background.default',
      },
    }}>
    <Grid size={12} padding={' 0px 8px'}>
      <ConfirmationDetail
        amount={amount}
        currency={currency}
        icon={icon}
        onClose={onClose}
        type={type}
        walletAmount={walletAmount}
        amount2={amount2}
        currency2={currency2}
      />
    </Grid>
  </Drawer>
);

export default ConfirmationDrawer;
