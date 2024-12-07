import Grid from '@mui/material/Grid2';

import RatingItem from '../../molecules/RatingItem';

import ColumnImg1 from '@/assets/img/bg/column1.png';
import ColumnImg2 from '@/assets/img/bg/column2.png';
import ColumnImg3 from '@/assets/img/bg/column3.png';
import type {UserItemType} from '@/types/models/leaderboard';

type Props = {
  numberOne: UserItemType;
  numberTwo: UserItemType;
  numberThree: UserItemType;
};

const Rating: React.FC<Props> = ({numberOne, numberThree, numberTwo}) => (
  <Grid
    sx={{transform: 'translateY(110px)'}}
    display={'flex'}
    justifyContent={'center'}>
    <RatingItem
      height="207px"
      width="112px"
      image={ColumnImg1}
      user={numberTwo}
    />
    <RatingItem
      height="263px"
      width="112px"
      image={ColumnImg2}
      user={numberOne}
    />
    <RatingItem
      height="179px"
      width="112px"
      image={ColumnImg3}
      user={numberThree}
    />
  </Grid>
);

export default Rating;
