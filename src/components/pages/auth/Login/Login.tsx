import {Button, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {LoginDrawer} from './LoginDrawer';

import BG from '@/assets/img/bg/login-bg.svg';
import {Center} from '@/components/atoms/Center';
import {useDisclosure} from '@/hooks/custom/useDisclosure';

const Login = () => {
  //
  const theme = useTheme();
  const {isOpen, onClose, onOpen} = useDisclosure();
  //
  return (
    <Grid
      container
      size={12}
      alignContent={'space-between'}
      p={2}
      sx={{
        height: '100vh',
      }}>
      <Grid
        size={12}
        sx={{
          overflow: 'hidden',
          height: '45h',
          img: {
            width: '90%',
            maxWidth: '90%',
          },
        }}>
        <Center fullSize>
          <img src={BG} />
        </Center>
      </Grid>
      <Grid size={12}>
        <Typography variant="h4">Welcome</Typography>
        <Typography variant="caption" color={theme.palette.text.secondary}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod.
        </Typography>
      </Grid>
      <Grid size={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={onOpen}
          sx={{
            py: 1.5,
            textTransform: 'none',
            borderRadius: theme.shape.borderRadius,
          }}>
          Sign in with Email
        </Button>
      </Grid>
      {/*  */}
      <LoginDrawer open={isOpen} onClose={onClose} />
    </Grid>
  );
};

export default Login;
