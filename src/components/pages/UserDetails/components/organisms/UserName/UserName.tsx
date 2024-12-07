import {TextField, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

const UserName = () => {
  const theme = useTheme();
  return (
    <Grid display={'flex'} flexDirection={'column'}>
      <Typography
        color={'text.white'}
        variant="caption"
        fontWeight={'400'}
        top={'40px'}
        fontSize={'12px'}
        mb={1}
        fontFamily="Nunito Sans">
        Username
      </Typography>
      <TextField
        variant="outlined"
        type="text"
        value={'Mohammad'}
        fullWidth
        sx={{
          bgcolor: theme.palette.background.default,
          borderRadius: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '15px',
          },
        }}
      />
    </Grid>
  );
};

export default UserName;
