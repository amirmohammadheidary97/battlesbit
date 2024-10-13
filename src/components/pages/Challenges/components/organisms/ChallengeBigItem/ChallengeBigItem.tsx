import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ChallengePriceItem} from '../../molecules/ChallengePriceItem';

import panda1 from '@/assets/img/bg/matchcard1-bg.png';
import infoIcon from '@/assets/img/icons/general/info.png';
import prizeIcon from '@/assets/img/icons/general/prize.png';
import ticketIcon from '@/assets/img/icons/general/ticket.png';

export const ChallengeBigItem = () => (
  <Grid container mb={1}>
    <Grid
      size={{xs: 12}}
      p={0}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'stretch'}
      justifyContent={'stretch'}
      sx={{borderRadius: '12px'}}
      position="relative">
      {/* img */}
      <Box
        component="img"
        alt="Nothing"
        src={panda1}
        maxHeight={200}
        sx={{borderRadius: '12px', objectFit: 'cover'}}
      />
      {/* Overlay */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        component="div"
        position="absolute"
        width="100%"
        height="100%"
        sx={{
          borderRadius: '14px',
          backgroundImage:
            'linear-gradient(to bottom, rgb(72,72,72, 0.3), rgb(72,72,72, 0.7))',
        }}>
        {/* Top Box */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pl={2}
          pt={1.5}>
          <Box
            sx={{border: '1px solid #F3C73B', color: '#F3C73B'}}
            borderRadius={'20px'}
            px={1}>
            Lorem
          </Box>
          <Box
            component="img"
            alt="alt"
            src={infoIcon}
            width={'1.2rem'}
            height={'1.2rem'}
            mr={1}
          />
        </Box>
        {/* Bottom Box */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          width="100%"
          p={2}
          pb={1}>
          <Box component="h6" color="white" m="0" fontSize={20}>
            1 vs 1
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            mt={1}>
            <ChallengePriceItem
              icon={ticketIcon}
              title="Ticket Price"
              value={20}
            />
            <ChallengePriceItem icon={prizeIcon} title="Prize" value={20} />
          </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
);
