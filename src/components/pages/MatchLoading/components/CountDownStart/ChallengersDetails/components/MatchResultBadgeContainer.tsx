import {Box, Typography} from '@mui/material';

import MatchResultBadge from './MatchResultBadge';

type MatchResult = 'win' | 'lose';

type LastGames = MatchResult[];

const MatchResultBadgeContainer = ({
  lastGames,
  achivements,
}: {
  lastGames: LastGames;
  achivements: number;
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '10.75rem',
    }}>
    <Box gap={'0.5rem'} display={'flex'} flexWrap={'wrap'}>
      <Typography variant="caption" sx={{fontFamily: 'Nunito Sans'}}>
        {lastGames.length > 0 && 'Last games:'}
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 0.3}}>
        {lastGames.map((res, i) => (
          <MatchResultBadge key={i} label={res === 'win' ? 'W' : 'L'} />
        ))}
      </Box>
    </Box>
    <Box
      gap={'0.5rem'}
      flexDirection={'column'}
      display={'flex'}
      flexWrap={'wrap'}>
      <Typography variant="caption" sx={{fontFamily: 'Nunito Sans'}}>
        {achivements > 0 && 'Achivements:'}{' '}
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.6}}>
        {Array.from({length: achivements}).map((_, c) => (
          <MatchResultBadge icon={true} key={c} />
        ))}
      </Box>
    </Box>
  </Box>
);

export default MatchResultBadgeContainer;
