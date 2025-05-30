import Grid from '@mui/material/Grid2';

import {friendsList} from '../../../utils/fakeData';
import FriendItem from '../../molecules/FriendItem';

import CustomButton from '@/components/atoms/Button';

type InviteFriendsProps = {
  selectedId: number;
  setSelectedId: (id: number) => void;
  handleShowAddFriend: () => void;
};

const InviteFriends = ({
  selectedId,
  setSelectedId,
  handleShowAddFriend,
}: InviteFriendsProps) => (
  <Grid
    display={'flex'}
    flexDirection={'column'}
    height={'100%'}
    justifyContent={'space-between'}>
    <Grid display={'flex'} flexDirection={'column'} gap={2}>
      {friendsList.map(friend => (
        <FriendItem
          key={friend.id}
          {...friend}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </Grid>
    <Grid size={12}>
      <CustomButton
        disabled={!selectedId}
        color="black"
        content="DONE"
        styleButton={{
          height: '43px',
          width: '100%',
          borderRadius: '12px',
        }}
        fontSize="16px"
        fontWeight={500}
        backgroundColor="black"
        onClick={() => {
          handleShowAddFriend();
        }}
        textColor="white"
        variant="contained"
      />
    </Grid>
  </Grid>
);

export default InviteFriends;
