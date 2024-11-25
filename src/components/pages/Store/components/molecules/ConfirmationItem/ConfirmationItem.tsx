import Grid from '@mui/material/Grid2';

import {ConfirmationInfo} from '../../atoms/ConfirmationInfo';

type ConfirmationItemTypeProps = {
  icon: string;
  type: string;
  amount: number;
  currency: string;
  amount2: number;
  currency2: string;
};

export const ConfirmationItem: React.FC<ConfirmationItemTypeProps> = ({
  amount,
  currency,
  icon,
  type,
  amount2,
  currency2,
}) => (
  <Grid width={'100%'} display="flex" alignItems={'start'}>
    <Grid>
      <Grid
        sx={{
          height: '75px',
          width: '83px',
          borderRadius: '12px',
          backgroundColor: '#25272f',
          img: {
            borderRadius: '12px',
            width: '100%',
            height: '100%',
          },
        }}>
        <img src={icon} alt={type} />
      </Grid>
    </Grid>
    <Grid
      marginLeft={'10px'}
      sx={{
        height: '100%',
      }}>
      <ConfirmationInfo
        amount={amount}
        amount2={amount2}
        currency={currency}
        currency2={currency2}
        type={type}
      />
    </Grid>
  </Grid>
);
