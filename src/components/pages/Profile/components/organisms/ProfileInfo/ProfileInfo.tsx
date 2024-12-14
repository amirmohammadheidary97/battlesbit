import {useNavigate} from 'react-router';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {User} from '@/types/models/user';

type Props = {
  userInfo: User;
};

const ProfileInfo: React.FC<Props> = ({userInfo}) => {
  const navigate = useNavigate();
  return (
    <Grid
      display={'flex'}
      alignItems={'start'}
      m={2}
      p={2}
      size={12}
      sx={{backgroundColor: 'background.default', borderRadius: '10px'}}>
      <Grid container alignItems={'flex-end'} spacing={2}>
        <Grid
          sx={{
            height: '90px',
            width: '90px',
            img: {
              borderRadius: '50%',
              width: '100%',
              height: '100%',
            },
          }}>
          <img src={userInfo.avatar} alt={userInfo.name} />
        </Grid>
      </Grid>
      <Grid ml={2} display={'flex'} flexDirection={'column'}>
        <Typography
          variant="caption"
          fontWeight="400"
          fontSize="18px"
          lineHeight="24px"
          fontFamily="Alfa Slab One"
          color="text.white">
          {userInfo.name}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="400"
          fontSize="12px"
          lineHeight="16px"
          fontFamily="Nunito Sans"
          color="text.secondary">
          You can change your avatar and nickname
        </Typography>
        <Grid size={12} padding={' 0px 0px'} mt={1}>
          <Grid>
            <Button
              onClick={() => navigate('/user-details')}
              variant="contained"
              color="primary"
              size="large"
              sx={{width: '100%', borderRadius: '8px'}}>
              <Typography
                variant="caption"
                fontWeight="600"
                fontSize="15px"
                lineHeight="20px"
                fontFamily="Nunito Sans"
                textTransform={'capitalize'}
                color="text.dark">
                change Details
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
