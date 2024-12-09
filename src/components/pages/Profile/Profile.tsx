import Grid from '@mui/material/Grid2';

import UserInfoItem from './components/molecules/UserInfoItem';
import ProfileInfo from './components/organisms/ProfileInfo';
import AccountInformationDrawer from './drawer/AccountInformationDrawer/AccountInformationDrawer';
import LanguageDrawer from './drawer/LanguageDrawer/LanguageDrawer';
import {useProfile} from './hook/useProfile';
import {userInfoFakeData, userInfoListFakeData} from './utils/fakeData';

import ProfileSkeleton from '@/components/templates/Profile/ProfileSkeleton';

const Profile = () => {
  const {
    setLanguageType,
    ShowLanguageDrawer,
    setShowLanguageDrawer,
    languageType,
    ShowAccountInformationDrawer,
    setShowAccountInformationDrawer,
  } = useProfile();
  const handleSetLanguageType = (type: number) => {
    setLanguageType(type);
  };

  return languageType != null ? (
    <Grid container display={'flex'} flexDirection={'column'} size={12}>
      <Grid mt={2} container>
        <ProfileInfo userInfo={userInfoFakeData} />
      </Grid>
      <Grid
        px={2}
        mt={1}
        container
        display={'flex'}
        flexDirection={'column'}
        size={12}>
        {userInfoListFakeData.map((item, index) => (
          <UserInfoItem
            onCLickShowAccountInformation={() => {
              setShowAccountInformationDrawer(!ShowAccountInformationDrawer);
            }}
            languageType={languageType}
            onCLickShowLanguage={() =>
              setShowLanguageDrawer(!ShowLanguageDrawer)
            }
            key={index}
            iconUrl={item.iconUrl}
            title={item.title}
          />
        ))}
      </Grid>
      <LanguageDrawer
        handleSetLanguageType={handleSetLanguageType}
        onClose={() => setShowLanguageDrawer(false)}
        open={ShowLanguageDrawer}
        languageType={languageType}
      />
      <AccountInformationDrawer
        open={ShowAccountInformationDrawer}
        onClose={() => setShowAccountInformationDrawer(false)}
      />
    </Grid>
  ) : (
    <ProfileSkeleton />
  );
};

export default Profile;
