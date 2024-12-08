import {Suspense} from 'react';
import {useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {MessageLeaderBoard} from './components/organisms/MessageLeaderBoard/MessageLeaderBoard';
import Rating from './components/organisms/Rating';
import ScrollableList from './components/organisms/ScrollableList';
import {useLeaderBoard} from './hooks/useLeaderBoard';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {DoubleButtonSwitch} from '@/components/molecules/DoubleButtonSwitch';
import {
  DoubleButtonSwitchSkeleton,
  RatingSkeleton,
  ScrollabeListSkeleton,
} from '@/components/templates/LeaderBoard/LoadingSections';

const LeaderBoard = () => {
  const theme = useTheme();
  const {
    leaderBoardList,
    topPlayer,
    selectedOption,
    setSelectedOption,
    options,
  } = useLeaderBoard();

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
        backgroundColor: theme.palette.background.default,
      }}>
      <Grid sx={{p: 1}}>
        <BackwardTitle title={'Leaderboard'} />
        {selectedOption ? (
          <>
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
          </>
        ) : (
          <Grid mx={2}>
            <DoubleButtonSwitchSkeleton />
          </Grid>
        )}
      </Grid>
      {topPlayer ? (
        <Grid display={'flex'} flexDirection={'column'}>
          <Grid>
            <Rating
              numberOne={topPlayer.numberOne}
              numberTwo={topPlayer.numberTwo}
              numberThree={topPlayer.numberThree}
            />
          </Grid>
        </Grid>
      ) : (
        <RatingSkeleton />
      )}
      {leaderBoardList.length != 0 ? (
        <Suspense>
          <ScrollableList
            leaderBoardList={leaderBoardList}
            containerProps={{bgcolor: 'background.paper'}}
          />
        </Suspense>
      ) : (
        <Grid mr={3} ml={3}>
          <ScrollabeListSkeleton />
        </Grid>
      )}
    </Grid>
  );
};

export default LeaderBoard;
