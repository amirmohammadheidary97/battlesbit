import {Avatar, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import Pricing from '@/components/atoms/Pricing';

type Props = {
  id: number;
  userName: string;
  balance: number;
  profileImage: string;
};

const TraderItem = ({userName, balance, profileImage}: Props) => (
  <Grid display={'flex'} alignItems={'center'} gap={1} height={33}>
    <Grid>
      <Avatar sx={{height: '40px', width: '40px'}} src={profileImage} />
    </Grid>
    <Grid display={'flex'} flexDirection={'column'}>
      <Grid>
        <Typography
          fontSize={'12px'}
          variant="caption"
          color="text.secondary"
          fontWeight={500}
          lineHeight="100%"
          letterSpacing="0.4%">
          {userName}
        </Typography>
      </Grid>
      <Grid>
        <Pricing
          amount={balance}
          formatPrice="USD"
          mainTextProps={{
            color: 'text.primary',
            fontSize: '14px',
            fontWeight: 500,
          }}
          decimalTextProps={{
            color: 'text.secondary',
            fontSize: '12px',
            fontWeight: 400,
          }}
          symbolTextProps={{
            color: 'text.secondary',
            fontSize: '9px',
            fontWeight: 400,
          }}
        />
      </Grid>
    </Grid>
  </Grid>
);

export default TraderItem;
