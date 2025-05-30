import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

const LevrageBoxTemplate = () => (
  <Grid size={12} display={'flex'} flexDirection={'column'}>
    <Grid
      columnSpacing={2}
      container
      sx={{
        overflow: 'hidden',
        overflowX: 'scroll',
        flexWrap: 'nowrap',
        width: '100%',
        marginTop: '7px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
      {[0, 1, 2, 3].map(item => (
        <Grid
          key={item}
          container
          size={6}
          columns={12}
          spacing={1}
          display={'flex'}
          alignItems={'center'}
          sx={{
            backgroundColor: 'background.paper',
            width: '156px',
            minWidth: '156px',
            borderRadius: '12px',
            padding: '12px',
            flexShrink: 0,
          }}>
          <Grid
            size={3.5}
            container
            alignContent={'center'}
            flexDirection={'column'}
            justifyContent={'space-between'}>
            <Skeleton variant="circular" height={30} width="100%" />
          </Grid>
          <Grid size={8.5} container>
            <Grid size={12}>
              <Skeleton
                variant="text"
                height={21.83}
                width="70%"
                sx={{zIndex: 2}}
              />
            </Grid>
            <Grid size={12}>
              <Skeleton variant="text" height={21.83} width="50%" />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
    <Grid
      size={12}
      mt={'12px'}
      display={'flex'}
      gap={2}
      justifyContent={'space-between'}>
      <Grid
        size={{xs: 12, sm: 6, md: 4}}
        sx={{
          width: '100%',
          height: '103px',
          backgroundColor: 'background.paper',
          padding: '12px',
          borderRadius: '12px',
        }}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}>
        <Skeleton sx={{width: '46px', height: '46px'}} />
        <Grid mt={'5px'}>
          <Skeleton width={'60px'} variant="text"></Skeleton>
        </Grid>
      </Grid>
      <Grid
        size={{xs: 12, sm: 6, md: 4}}
        sx={{
          width: '100%',
          height: '103px',
          backgroundColor: 'background.paper',
          padding: '12px',
          borderRadius: '12px',
        }}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}>
        <Skeleton sx={{width: '46px', height: '46px'}} />
        <Grid mt={'5px'}>
          <Skeleton width={'60px'} variant="text"></Skeleton>
        </Grid>
      </Grid>
      <Grid
        size={{xs: 12, sm: 6, md: 4}}
        sx={{
          width: '100%',
          height: '103px',
          backgroundColor: 'background.paper',
          padding: '12px',
          borderRadius: '12px',
        }}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}>
        <Skeleton sx={{width: '46px', height: '46px'}} />
        <Grid mt={'5px'}>
          <Skeleton width={'60px'} variant="text"></Skeleton>
        </Grid>
      </Grid>
    </Grid>
    <Grid size={12}>
      <Skeleton
        width={'100%'}
        sx={{borderRadius: '16px'}}
        height={'78px'}
        variant="text"></Skeleton>
    </Grid>
  </Grid>
);

export default LevrageBoxTemplate;
