import {TextField, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

type TProps = {
  handleInputValue: (value: string) => void;
  inputValue: string;
};

const UserName: React.FC<TProps> = ({handleInputValue, inputValue}) => {
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
        onChange={e => {
          handleInputValue(e.target.value);
        }}
        variant="outlined"
        type="text"
        value={inputValue}
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
