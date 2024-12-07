import {Box, Button, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {StatusItem} from '../../atoms/StatusItem/StatusItem';

import type {PackagesType} from '@/types/models/store';

export const PackageItem: React.FC<PackagesType> = ({
  title,
  img,
  status,
  leverage,
  character,
  amount,
  currency,
}) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: '164px',
        minWidth: '164px',
        borderRadius: '8px',
        position: 'relative',
      }}
      spacing={3}
      padding="15px">
      <StatusItem status={status} />
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Grid container alignItems={'flex-end'} spacing={2}>
          <Grid
            sx={{
              height: '100px',
              width: '95px',
              img: {
                borderRadius: '0.75rem',
                width: '100%',
                height: '100%',
              },
            }}>
            <img src={img} alt={title} />
          </Grid>
        </Grid>
        <Typography
          component={'h5'}
          color="text.white"
          variant="caption"
          fontWeight={'500'}
          fontSize={'22px'}
          marginTop={'10px'}
          fontFamily="'Nunito Sans', sans-serif">
          {title}{' '}
        </Typography>
      </Box>
      <Grid container rowSpacing={1} marginTop="10px" columnSpacing={1}>
        <Grid
          display={'flex'}
          alignItems={'center'}
          padding={'0px 5px'}
          sx={{
            backgroundColor: theme.palette.background.default,
          }}
          size={6}
          spacing={3}>
          <Typography
            color={theme.palette.primary.main}
            variant="caption"
            fontWeight={'500'}
            fontSize={'6px'}
            fontFamily="'Nunito Sans', sans-serif">
            {leverage}{' '}
          </Typography>
          <Typography
            color="text.white"
            variant="caption"
            fontWeight={'500'}
            fontSize={'6px'}
            marginLeft={'2px'}
            fontFamily="'Nunito Sans', sans-serif">
            LEVERAGE
          </Typography>
        </Grid>
        <Grid
          display={'flex'}
          alignItems={'center'}
          padding={'0px 5px'}
          sx={{
            backgroundColor: theme.palette.background.default,
          }}
          size={6}
          spacing={3}>
          <Typography
            variant="caption"
            fontWeight={'500'}
            fontSize={'6px'}
            fontFamily="'Nunito Sans', sans-serif">
            {character}{' '}
          </Typography>
          <Typography
            color="text.white"
            variant="caption"
            fontWeight={'500'}
            fontSize={'6px'}
            marginLeft={'2px'}
            fontFamily="'Nunito Sans', sans-serif">
            CHARACTER
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          color={theme.palette.text.primary}
          variant="caption"
          fontWeight={'500'}
          fontSize={'14px'}
          fontFamily="'Nunito Sans', sans-serif">
          {amount}{' '}
        </Typography>
        <Typography
          color="text.white"
          variant="caption"
          fontWeight={'500'}
          fontSize={'14px'}
          marginLeft={'2px'}
          fontFamily="'Nunito Sans', sans-serif">
          {currency}
        </Typography>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{width: '100%', borderRadius: '8px', marginTop: '5px'}}>
          <Typography
            variant="caption"
            fontWeight={'600'}
            fontSize={'14px'}
            marginLeft={'2px'}
            textTransform={'capitalize'}
            fontFamily="'Nunito Sans', sans-serif">
            Show
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
