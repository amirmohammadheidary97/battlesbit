import Grid from '@mui/material/Grid2';

import ChallengeItemInfo from '../../atoms/ChallengeItemInfo';

import type {TChallangeItem} from '@/types/models/challanges';

type ChallengeItemProps = {
  challenge: TChallangeItem;
  href?: string;
};

const ChallengeItem = ({challenge, href}: ChallengeItemProps) => (
  <Grid
    mb={2}
    container
    size={12}
    height={'135px'}
    direction={'row'}
    sx={{
      backgroundColor: 'background.paper',
      padding: '12px 0px 0px 12px',
      borderRadius: '12px',
    }}>
    <Grid
      size={8}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={!href ? 'center' : 'space-between'}>
      <ChallengeItemInfo
        id={challenge.id}
        title={challenge.title}
        time={challenge.time}
        rewards={challenge.rewards}
        xp={challenge.xp}
        entry={challenge.entry}
        href={href}
      />
    </Grid>
    <Grid size={4} display={'flex'} justifyContent={'flex-end'}>
      <img
        width={138}
        height={123}
        style={{
          borderRadius: '0px 0px 12px 0px',
        }}
        src={challenge.image}
        alt={challenge.title}
      />
    </Grid>
  </Grid>
);

export default ChallengeItem;
