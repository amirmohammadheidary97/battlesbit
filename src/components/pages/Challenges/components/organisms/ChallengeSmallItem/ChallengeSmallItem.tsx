import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ChallengePriceItem} from '../../molecules/ChallengePriceItem';

import infoIcon from '@/assets/img/icons/general/info.png';
import prizeIcon from '@/assets/img/icons/general/prize.png';
import ticketIcon from '@/assets/img/icons/general/ticket.png';

type Props = {
  matchType: '1vs1';
  img: string;
  entfee: number;
  prize: number;
};

export const ChallengeSmallItem = ({entfee, img, prize}: Props) => (
  <Grid
    size={6}
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
      src={img}
      minHeight={150}
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
        <Box component="h6" color="white" m="0" fontSize={20}>
          1 vs 1
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
        justifyContent="center"
        alignItems="start"
        width="100%"
        p={1}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="start">
          <ChallengePriceItem
            icon={ticketIcon}
            title="Entry fee"
            value={entfee}
          />
          <ChallengePriceItem icon={prizeIcon} title="Prize" value={prize} />
        </Box>
      </Box>
    </Box>
  </Grid>
);
