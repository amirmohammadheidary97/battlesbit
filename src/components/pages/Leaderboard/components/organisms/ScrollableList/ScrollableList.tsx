import {List} from '@mui/material';
import type {Grid2Props} from '@mui/material/Grid2';
import Grid from '@mui/material/Grid2';

import {getLeaderBoardUsersList} from '../../../utils/fakeData';
import {UserItem} from '../../molecules/UserItem';

type Props = {
  containerProps?: Grid2Props;
};

const ScrollableList = ({containerProps}: Props) => (
  <Grid
    container
    sx={{
      borderTopRightRadius: '24px',
      borderTopLeftRadius: '24px',
      maxHeight: '330px',
      height: '100%',
      overflowY: 'auto',
      position: 'relative',
      zIndex: 2,
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}
    {...containerProps}
    size={12}>
    <Grid
      height={'100%'}
      sx={{
        px: 1,
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      overflow={'auto'}
      size={12}>
      <List>
        {getLeaderBoardUsersList.map(item => (
          <UserItem {...item} key={item?.id} />
        ))}
      </List>
    </Grid>
  </Grid>
);

export default ScrollableList;
