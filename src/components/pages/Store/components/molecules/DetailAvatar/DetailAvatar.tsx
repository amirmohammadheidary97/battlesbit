import Grid from '@mui/material/Grid2';

import {GetIt} from '../../atoms/GetIt/GetIt';

type DetailAvatarTypeProps = {
  onClick: () => void;
  amount: number;
  currency: string;
  icon: string;
  isFunds: boolean;
  paddingValue?: string;
  backColor?: string;
};

export const DetailAvatarItem: React.FC<DetailAvatarTypeProps> = ({
  amount,
  currency,
  onClick,
  icon,
  isFunds,
  paddingValue = '10px',
  backColor = '#25272f',
}) => (
  <Grid
    sx={{
      height: '100%',
      borderRadius: '12px',
      zIndex: 2,
    }}
    size={10}
    spacing={3}
    padding="12px">
    <Grid alignItems={'flex-end'}>
      <Grid
        position={'relative'}
        sx={{
          backgroundColor: backColor,
          padding: paddingValue,
          maxHeight: '272px',
          width: '100%',
          img: {
            width: '100%',
            maxHeight: '252px',
            height: '100%',
            borderRadius: '10px',
          },
        }}>
        <img src={icon} alt={currency} />
      </Grid>
    </Grid>
    <Grid display={'flex'} justifyContent={'center'} onClick={onClick}>
      <GetIt amount={amount} isFunds={isFunds} currency={currency} />
    </Grid>
  </Grid>
);
