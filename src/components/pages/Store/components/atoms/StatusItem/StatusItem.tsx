import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type StatusItemProps = {
  status: string;
};
export const StatusItem: React.FC<StatusItemProps> = ({status}) => (
  <Grid
    display="flex"
    alignItems="center"
    justifyContent={'center'}
    paddingTop={'2px'}
    sx={{
      backgroundColor: 'rgba(243, 199, 59, 1)',
      zIndex: 3,
      width: '55px',
      height: '21px',
      borderRadius: '4px',
      position: 'absolute',
      left: '8px',
      top: '8px',
    }}>
    <Typography
      color="#000"
      variant="caption"
      fontWeight={'700'}
      fontSize={'8px'}
      fontFamily="'Nunito Sans', sans-serif">
      {status}{' '}
    </Typography>
  </Grid>
);
