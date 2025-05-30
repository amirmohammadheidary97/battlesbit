import styled from '@emotion/styled';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type GameStatusProps = {
  matchState: string;
};

export const GameStatus: React.FC<GameStatusProps> = ({matchState}) => (
  <Grid container size={12} spacing={1}>
    <Grid size={12}>
      <Typography variant="h6" noWrap>
        Demo for Beginners
      </Typography>
    </Grid>
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <Typography variant="body2" noWrap>
        Match State:
      </Typography>
      <StatusValue>{matchState}</StatusValue>
    </Box>
  </Grid>
);

const StatusValue = styled.span`
  color: var(--success, #0ecb81);
  align-self: stretch;
  width: 121px;
  margin: auto 0;
  font:
    20px 'Alfa Slab One',
    sans-serif;
  text-transform: uppercase;
`;
