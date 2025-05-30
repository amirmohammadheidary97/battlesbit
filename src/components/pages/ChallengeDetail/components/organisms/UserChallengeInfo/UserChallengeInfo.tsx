import Grid from '@mui/material/Grid2';
import {useTheme} from '@mui/material/styles';

import CustomPolygon from '../../atoms/CustomPolygon';
import UserAmount from '../../molecules/UserAmount';
import UserInfo from '../../molecules/UserInfo';

import userImage11 from '@/assets/img/bg/users/11.png';

const UserChallengeInfo = () => {
  const theme = useTheme();
  return (
    <Grid size={12} display={'flex'} justifyContent={'space-between'}>
      <Grid size={12} display={'flex'} justifyContent={'space-between'}>
        <Grid
          position={'relative'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}>
          <CustomPolygon
            width={123}
            height={81}
            fill={theme.palette.background.paper}
            position="toRight"
          />
          <Grid position={'absolute'} left={'25px'}>
            <UserAmount typeIcon="tether" amount={2405.99} currency="USDT" />
          </Grid>
        </Grid>
        <Grid display={'flex'} position={'relative'}>
          <UserInfo image={userImage11} name={'Mehran ml'} level={23} xp={65} />
        </Grid>
        <Grid
          position={'relative'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}>
          <CustomPolygon
            width={123}
            height={81}
            fill={theme.palette.background.paper}
            position="toLeft"
          />
          <Grid position={'absolute'} right={'25px'}>
            <UserAmount typeIcon="cup" amount={240345} currency="CUP" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserChallengeInfo;
