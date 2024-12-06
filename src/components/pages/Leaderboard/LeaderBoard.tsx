import {Suspense, useState} from 'react';
import {useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {MessageLeaderBoard} from './components/organisms/MessageLeaderBoard/MessageLeaderBoard';
import Rating from './components/organisms/Rating';
import ScrollableList from './components/organisms/ScrollableList';
import {topPlayerFakeData} from './utils/fakeData';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {DoubleButtonSwitch} from '@/components/molecules/DoubleButtonSwitch';

type Option = {
  label: string;
  value: number;
};

const options: [Option, Option] = [
  {
    label: 'Weekly',
    value: 1,
  },
  {
    label: 'monthly',
    value: 2,
  },
];

const LeaderBoard = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  return (
    <Grid
      container
      spacing={3}
      className="hide-scrollbar"
      sx={{
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Grid sx={{p: 1}}>
        <BackwardTitle title={'Leaderboard'} />
        <Grid
          mt={2}
          container
          size={12}
          sx={{
            borderRadius: theme.shape.borderRadius,
            px: 2,
          }}>
          <DoubleButtonSwitch
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            getLabel={op => op.label}
            getValue={op => op.value}
          />
        </Grid>
        <Grid sx={{px: 2, width: '100%'}} mt={2} container>
          <MessageLeaderBoard
            message="You are performing better than
              40% of other players!"
            valueNumber={3}
          />
        </Grid>
      </Grid>
      <Grid display={'flex'} flexDirection={'column'}>
        <Grid>
          <Rating
            numberOne={topPlayerFakeData.numberOne}
            numberTwo={topPlayerFakeData.numberTwo}
            numberThree={topPlayerFakeData.numberThree}
          />
        </Grid>
      </Grid>
      <Suspense>
        <ScrollableList containerProps={{bgcolor: 'background.paper'}} />
      </Suspense>
    </Grid>
  );
};

export default LeaderBoard;
