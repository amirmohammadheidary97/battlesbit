import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import crownImg1 from '@/assets/img/bg/crown/crown1.png';
import crownImg2 from '@/assets/img/bg/crown/crown2.png';
import crownImg3 from '@/assets/img/bg/crown/crown3.png';
import type {UserItemType} from '@/types/models/leaderboard';

type Props = {
  user: UserItemType;
};

const UserRatingItem: React.FC<Props> = ({user}) => (
  <Grid
    sx={{transform: 'translateY(-127px) translateX(25px)'}}
    display={'flex'}
    zIndex={10}
    alignItems={'start'}
    flexDirection={'column'}>
    <Grid
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      sx={{
        height: '64px',
        width: '64px',
        img: {
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        },
      }}>
      <Grid
        sx={{
          height: '35px',
          width: '40px',
          img: {
            width: '100%',
            height: '100%',
          },
        }}>
        {user?.level == 1 && (
          <img src={crownImg1} alt={user.level.toString()} />
        )}
        {user?.level == 2 && (
          <img src={crownImg2} alt={user.level.toString()} />
        )}
        {user?.level == 3 && (
          <img src={crownImg3} alt={user.level.toString()} />
        )}
      </Grid>
      <img src={user.avatar} alt={user.userName} />
      <Typography
        color={'text.white'}
        variant="caption"
        fontWeight={'400'}
        mt={1}
        fontSize={'16px'}
        fontFamily="Nunito Sans">
        {user.userName}
      </Typography>
    </Grid>
  </Grid>
);

export default UserRatingItem;
