import {Box, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  valueNumber: number;
  message: string;
};

export const MessageLeaderBoard: React.FC<Props> = ({valueNumber, message}) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: '8px',
        padding: '8px',
        width: '100%',
      }}
      display={'flex'}
      alignItems={'center'}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          width: '47px',
          height: '47px',
          minWidth: '47px',
          borderRadius: '8px',
          backgroundColor: theme.palette.background.paper,
        }}>
        <Typography
          color={'test.white'}
          variant="caption"
          fontWeight={'400'}
          fontSize={'18px'}
          fontFamily="'Nunito Sans', sans-serif">
          #{valueNumber}
        </Typography>
      </Box>
      <Typography
        color={theme.palette.black.dark}
        variant="caption"
        marginLeft={1}
        fontWeight={'700'}
        lineHeight={'21.82px'}
        fontSize={'16px'}
        fontFamily="'Nunito Sans', sans-serif">
        {message}
      </Typography>
    </Grid>
  );
};
