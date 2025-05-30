import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import leverageBorderValBoxImg from '@/assets/img/bg/leveragebordervaluebox.png';
import leverageBorderBoxImg from '@/assets/img/bg/levrageborderBox.png';
import type {ILeverage} from '@/types/models/leverage';

type LeverageItemProps = {
  leverage: ILeverage;
};

const LeverageItem = ({leverage}: LeverageItemProps) => (
  <Grid
    display={'flex'}
    alignItems={'center'}
    sx={{
      backgroundColor: 'background.paper',
      width: '156px',
      minWidth: '156px',
      height: '63px',
      borderRadius: '12px',
      padding: '12px',
      flexShrink: 0,
    }}>
    <Grid
      sx={{
        backgroundImage: `url(${leverageBorderBoxImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '40px',
        height: '40px',
      }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Grid
        sx={{
          backgroundImage: `url(${leverageBorderValBoxImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '21px',
        }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Typography
          component={'span'}
          color="primary.main"
          fontWeight="600"
          sx={{
            fontSize: '10px',
            width: '100%',
            textAlign: 'center',
            px: '8px',
            pt: '2px',
            overflow: 'hidden',
            lineHeight: '17px',
            display: 'block',
          }}>
          {leverage.amount}X
        </Typography>
      </Grid>
    </Grid>
    <Grid display={'flex'} flexDirection={'column'} ml={'8px'}>
      <Grid
        size={12}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '16px',
            letterSpacing: 0,
            textAlign: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {leverage.title}
        </Typography>
      </Grid>
      <Grid
        size={12}
        display="flex"
        alignItems="flex-end"
        justifyContent="start">
        <Typography
          color="primary.main"
          sx={{
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '10px',
            letterSpacing: '0.04em',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10px',
          }}>
          {leverage.remain}
        </Typography>
        <Typography
          ml={'2px'}
          mt={'10px'}
          color="primary.main"
          sx={{
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '10px',
            letterSpacing: '0.04em',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10px',
          }}>
          Remain
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default LeverageItem;
