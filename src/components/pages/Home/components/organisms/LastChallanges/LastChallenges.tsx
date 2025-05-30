import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {lastChallangesData} from '../../../utils/fakeData';
import LastChallangeItem from '../../molecules/LastChallengeItem';

import challengeHistoryImage from '@/assets/img/bg/challenge_history.png';

const LastChallenges = () => (
  <Grid
    sx={{
      backgroundColor: 'background.paper',
      padding: '12px',
      borderRadius: '10px',
      height: '122px',
    }}
    size={12}
    container
    display={'flex'}
    alignItems={'flex-start'}>
    <Grid size={8} display={'flex'} flexDirection={'column'}>
      <Typography
        variant="h6"
        fontSize={'18px'}
        fontWeight={500}
        lineHeight="100%"
        letterSpacing="0%"
        fontFamily="Geogrotesque Wide Semi"
        sx={{textTransform: 'none'}}>
        Last Challanges:
      </Typography>
      <Grid container mt={1}>
        <Typography
          color="text.secondary"
          variant="overline"
          fontWeight={400}
          maxWidth={'180px'}
          lineHeight={'11px'}
          fontSize={'10px'}
          sx={{fontFamily: 'Geogrotesque Wide', textTransform: 'uppercase'}}>
          aining essentially unchanged. It was popularised
        </Typography>
      </Grid>
      <Grid
        container
        size={12}
        display={'flex'}
        flexWrap={'nowrap'}
        gap={1.3}
        mt={1}>
        {lastChallangesData.map(item => (
          <LastChallangeItem key={item.id} balance={item.balance} />
        ))}
      </Grid>
    </Grid>
    <Grid
      container
      size={4}
      height={'100%'}
      display={'flex'}
      justifyContent={'flex-end'}
      alignItems={'end'}>
      <img
        src={challengeHistoryImage}
        width={84}
        height={93}
        alt="challenge history"
      />
    </Grid>
  </Grid>
);

export default LastChallenges;
