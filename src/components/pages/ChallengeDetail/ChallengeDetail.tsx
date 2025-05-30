import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import ChallengeItem from '../Challenges/components/molecules/ChallengeItem';
import {challengesItemList} from '../Challenges/utils/fakeData';

import DescriptionsChallenge from './components/molecules/DescriptionsChallenge';
import PreviewChallengeItemBox from './components/molecules/PreviewChallengeItemBox';
import InviteFriends from './components/organisms/InviteFriends';
import LeveragesContainer from './components/organisms/LeveragesContainer';
import SwipableButton from './components/organisms/SwipableButton';
import UserChallengeInfo from './components/organisms/UserChallengeInfo';
import {useChallenge} from './hook/useChallenge';
import {
  descriptionsChallenge1,
  descriptionsChallenge2,
  leverages,
} from './utils/fakeData';

import {CustomIcon} from '@/components/atoms/icon';
import SectionTitle from '@/components/atoms/SectionTitle';
import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import CustomDialog from '@/components/molecules/CustomDialog/CustomDialog';

const ChallengeDetail = () => {
  const {selectedId, handleSelectedId, handleShowAddFriend, showAddFriend} =
    useChallenge();
  return (
    <Grid
      container
      display={'flex'}
      size={12}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={'100vh'}>
      <Grid display={'flex'} size={12} flexDirection={'column'}>
        <Grid size={12} display={'flex'} flexDirection={'row'} px={2}>
          <BackwardTitle title="A little Johnn" />
        </Grid>
        <Grid size={12} px={2} mt={2}>
          <UserChallengeInfo />
        </Grid>
        <Grid size={12} px={2} mt={2}>
          <ChallengeItem challenge={challengesItemList[0]} />
        </Grid>
        <Grid size={12} px={2}>
          <DescriptionsChallenge description={descriptionsChallenge1} />
        </Grid>
        <Grid size={12} px={2}>
          <DescriptionsChallenge description={descriptionsChallenge2} />
        </Grid>
        <Grid size={12} mt={2}>
          <Grid size={12} px={2}>
            <SectionTitle
              title="Your leverages"
              link="#"
              linkText="see inventory"
            />
          </Grid>
          <Grid size={12} pl={2} mt={'10px'} width={'100%'}>
            <LeveragesContainer leverages={leverages} />
          </Grid>
        </Grid>
        <Grid
          size={12}
          px={2}
          mt={'12px'}
          display={'flex'}
          gap={2}
          justifyContent={'space-between'}>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <PreviewChallengeItemBox typeIcon="graphicXpIcon" value="400 XP" />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <PreviewChallengeItemBox
              typeIcon="graphicTimerIcon"
              value="30 MIN"
              href="#"
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <PreviewChallengeItemBox
              typeIcon="graphicGiftIcon"
              value="1.95"
              viewBox="0 0 42 46"
              currency="USDT"
            />
          </Grid>
        </Grid>
        <Grid size={12} px={2} mt={'12px'}>
          <Grid
            size={12}
            onClick={handleShowAddFriend}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: '8px',
              height: '48px',
            }}>
            <Typography
              component="button"
              color="primary.main"
              sx={{
                fontFamily: 'Geogrotesque Wide',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '0%',
                textAlign: 'center',
                textTransform: 'uppercase',
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
              }}>
              PLAY WITH FRIENDS
            </Typography>
            <Grid ml={'10px'}>
              <CustomIcon
                type="addUserPrimary"
                sx={{
                  mt: '6px',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} px={2} mt={'12px'} mb={2}>
        <SwipableButton />
      </Grid>
      <CustomDialog
        open={showAddFriend}
        onClose={handleShowAddFriend}
        title="Friends list "
        props={{
          mx: '-10px',
          '& .MuiDialog-paper': {
            borderRadius: '12px',
            maxHeight: '423px',
            height: '100%',
          },
        }}
        maxWidth="lg"
        fullWidth>
        <InviteFriends
          selectedId={selectedId}
          setSelectedId={handleSelectedId}
          handleShowAddFriend={handleShowAddFriend}
        />
      </CustomDialog>
    </Grid>
  );
};

export default ChallengeDetail;
