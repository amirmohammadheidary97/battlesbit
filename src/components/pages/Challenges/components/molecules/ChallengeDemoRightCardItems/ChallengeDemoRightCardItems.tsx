import {Button} from '@mui/material';
import Grid from '@mui/material/Grid2';

import ProfileImageStack from './ProfileImageStack';

import Ava1 from '@/assets/img/icons/avatars/Ava1.png';
import Ava2 from '@/assets/img/icons/avatars/Ava2.png';

const ChallengeDemoRightCardItems = () => (
  <Grid container size={12}>
    <Grid container size={12}>
      <Grid offset="auto">
        <ProfileImageStack
          images={[
            {src: Ava1, alt: 'Profile'},
            {src: Ava2, alt: 'Profile'},
          ]}
        />
      </Grid>
    </Grid>
    <Grid container size={12}>
      <Button
        fullWidth
        color="primary"
        variant="outlined"
        size="small"
        sx={{
          fontWeight: '400',
          borderRadius: '1rem',
        }}>
        MORE
      </Button>
    </Grid>
  </Grid>
);

export {ChallengeDemoRightCardItems};
