import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  icon: string;
  title?: string;
  count?: number;
};

const ButtonIconBox = ({icon, title, count}: Props) => (
  <Grid
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    width={52}>
    <Grid
      height={52}
      width={52}
      borderRadius={4}
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{backgroundColor: 'background.paper'}}>
      {count !== 0 && (
        <Grid
          sx={{
            backgroundColor: 'primary.main',
            position: 'absolute',
            top: -3,
            right: -3,
            borderRadius: '50%',
            width: 16,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography fontSize={8} fontWeight={400} color="background.paper">
            {count}
          </Typography>
        </Grid>
      )}
      <img src={icon} alt={title} width={28} height={28} />
    </Grid>
    {title && (
      <Typography
        color="text.secondary"
        mt={1}
        fontWeight={500}
        variant="caption"
        fontSize={'12px'}>
        {title}
      </Typography>
    )}
  </Grid>
);

export default ButtonIconBox;
