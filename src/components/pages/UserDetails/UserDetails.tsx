import {Button, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import Avatars from './components/organisms/Avatars';
import UserImage from './components/organisms/UserImage';
import UserName from './components/organisms/UserName';
import {useUserDetail} from './hooks/useUserDetail';
import {allAvatarsFakeData} from './utils/fakeData';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {UserDetailsSkeleton} from '@/components/templates/UserDetails';

const UserDetails = () => {
  const theme = useTheme();
  ///
  const {selectAvatar, setSelectAvatar, handleInputValue, inputValue} =
    useUserDetail();

  return selectAvatar ? (
    <Grid
      container
      spacing={3}
      className="hide-scrollbar"
      sx={{
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        height: '100vh',
      }}>
      <Grid sx={{p: 1}}>
        <BackwardTitle title={'User details'} />
        <Grid px={6} mt={3}>
          <UserImage
            image={
              allAvatarsFakeData.find(a => a.id == selectAvatar)?.image || ''
            }
          />
        </Grid>
        <Grid px={2} mt={3}>
          <Avatars
            selectAvatar={selectAvatar}
            setSelectAvatar={setSelectAvatar}
            avatars={allAvatarsFakeData}
            title="Your avatars"
          />
        </Grid>
        <Grid px={2} mt={3}>
          <UserName
            handleInputValue={handleInputValue}
            inputValue={inputValue}
          />
        </Grid>
        <Grid px={2} mt={10}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{width: '100%', borderRadius: '8px', margin: '15px 0px'}}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid spacing={3} p={1}>
      <BackwardTitle title={'User details'} />

      <UserDetailsSkeleton />
    </Grid>
  );
};

export default UserDetails;
