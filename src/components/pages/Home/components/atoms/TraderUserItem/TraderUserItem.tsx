import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import CustomButton from '@/components/atoms/Button';
import {CustomIcon} from '@/components/atoms/icon';
import type {TTrader} from '@/types/models/trader';

type Props = {
  user: TTrader['user'];
};

const TraderUserItem = ({user}: Props) => (
  <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
    <Grid display={'flex'} alignItems={'start'} gap={1}>
      <Grid>
        <img
          height={40}
          width={40}
          src={user.profileImage}
          alt={user.userName}
        />
      </Grid>
      <Grid display={'flex'} flexDirection={'column'}>
        <Typography fontSize={'14px'} variant="body1" fontWeight={400}>
          {user.userName}
        </Typography>
        <Grid display={'flex'} alignItems={'center'} mt={0.5}>
          <CustomIcon sx={{height: '16px', width: '16px'}} type="cup" />
          <Typography variant="caption" fontSize={'12px'} fontWeight={400}>
            {user.cup}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid>
      <CustomButton
        variant="outlined"
        color="secondary"
        content="Profile"
        fontSize="14px"
        fontWeight={400}
        textColor="text.primary"
        styleText={{
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textTransform: 'uppercase',
        }}
        onClick={() => {}}
        styleButton={{
          backgroundColor: 'transparent',
          border: '1px solid #E0E0E0',
          borderRadius: '10px',
          height: '32px',
          width: '84px',
        }}
      />
    </Grid>
  </Grid>
);

export default TraderUserItem;
