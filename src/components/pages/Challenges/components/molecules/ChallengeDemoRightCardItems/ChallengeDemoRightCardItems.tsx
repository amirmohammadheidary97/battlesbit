import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';

import MoreButton from './MoreButton';
import ProfileImageStack from './ProfileImageStack';

import Ava1 from '@/assets/img/icons/avatars/Ava1.png';
import Ava2 from '@/assets/img/icons/avatars/Ava2.png';
import {theme} from '@/config/theme';

const ChallengeDemoRightCardItems = () => (
  <Grid container>
    <Grid container size={12}>
      <Grid offset="auto">
        {/* <ProfileImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9c449fe0c7266ec85cad605ca0ecfd5e979621dd79b9fdd4f69c847ffe0b7d3?placeholderIfAbsent=true&apiKey=e3593f98c439412182035cc69eb42dc1"
            alt="Profile"
          /> */}
        <ProfileImageStack
          images={[
            {src: Ava1, alt: 'Profile'},
            {src: Ava2, alt: 'Profile'},
          ]}
        />
      </Grid>
    </Grid>
    <Grid container size={12}>
      <Grid offset="auto">
        <MoreButton />
      </Grid>
    </Grid>
  </Grid>
);

const StyledCard = styled(Grid)(() => ({
  maxWidth: '110px',
  color: theme.palette.primary.main,
  whiteSpace: 'nowrap',
  justifyContent: 'center',
}));

export {ChallengeDemoRightCardItems};
