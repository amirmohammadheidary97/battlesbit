import {Skeleton, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const QuickAccessButtonTemplate = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      columnSpacing={3}
      size={12}
      p={1.5}
      sx={{
        bgcolor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Grid
        container
        size={12}
        display={'flex'}
        flexWrap={'nowrap'}
        justifyContent={'space-between'}>
        {Array.from({length: 5}).map((_, index) => (
          <Grid
            key={index}
            size={1}
            height="56px"
            alignItems={'center'}
            width="42px"
            display={'flex'}
            flexDirection={'column'}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{borderRadius: '10px'}}
            />
            <Skeleton
              sx={{mt: '2px'}}
              variant="text"
              width="90%"
              height="15px"
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
