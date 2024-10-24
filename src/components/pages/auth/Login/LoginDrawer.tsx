import {Button, Drawer, TextField, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useLogin} from './useLogin';

type Props = {
  open: boolean;
  onClose: () => void;
};
export const LoginDrawer = ({onClose, open}: Props) => {
  //
  const theme = useTheme();
  const {handleSubmit, onSubmit, register} = useLogin();
  //
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{
        'div.MuiPaper-root': {
          borderTopRightRadius: '1.5rem',
          borderTopLeftRadius: '1.5rem',
          height: '40vh',
        },
      }}>
      <Grid
        container
        size={12}
        p={2}
        spacing={4}
        height={1}
        alignContent={'space-between'}>
        <Grid size={12}>
          <Typography variant="h4" color={theme.palette.text.primary}>
            Login With Email
          </Typography>
          <Typography variant="caption" color={theme.palette.text.secondary}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod.
          </Typography>
        </Grid>
        <Grid
          size={12}
          container
          spacing={2}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            '.MuiInputBase-root': {
              height: '52px',
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.paper,
            },
          }}>
          <Grid size={12}>
            <TextField
              label="Email"
              fullWidth
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
          </Grid>
          <Grid size={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                textTransform: 'unset',
                mt: 'auto',
                py: 1.5,
                borderRadius: theme.shape.borderRadius,
              }}>
              Send Code
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};
