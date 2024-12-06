import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import UserRatingItem from '../../atoms/UserRatingItem';

import type {UserItemType} from '@/types/models/leaderboard';

type Props = {
  height: string;
  width: string;
  image: string;
  user: UserItemType;
};
const RatingItem: React.FC<Props> = ({height, width, image, user}) => (
  <Grid container alignItems={'flex-end'} spacing={0}>
    <Grid
      position={'relative'}
      display={'flex'}
      alignItems={'start'}
      justifyContent={'center'}
      sx={{
        height: height,
        width: width,
        img: {
          width: '100%',
          height: '100%',
        },
      }}>
      <UserRatingItem user={user} />
      <Typography
        position={'absolute'}
        color={'rgba(255, 220, 108, 1)'}
        variant="caption"
        fontWeight={'400'}
        top={'40px'}
        fontSize={'34px'}
        fontFamily="Alfa Slab One">
        #{user.level}
      </Typography>
      <img src={image} alt={user.level.toString()} />
    </Grid>
  </Grid>
);

export default RatingItem;
