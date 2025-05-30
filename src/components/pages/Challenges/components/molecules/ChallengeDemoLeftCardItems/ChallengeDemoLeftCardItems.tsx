import * as React from 'react';
import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import {theme} from '@/config/theme';

type DemoCardProps = {
  date: string;
  result: 'LOST' | 'WON';
};

const StyledCard = styled(Grid)({
  maxWidth: '144px',
  padding: '1px 0',
});

const ResultText = styled(Typography)<{result: 'LOST' | 'WON'}>(({result}) => ({
  color:
    result === 'LOST' ? theme.palette.error.main : theme.palette.success.main,
}));

const ChallengeDemoLeftCardItems: React.FC<DemoCardProps> = ({
  date,
  result,
}) => (
  <StyledCard container direction="column" justifyContent="center">
    <Grid>
      <Typography
        variant="subtitle1"
        color="textPrimary"
        sx={{
          textWrap: 'nowrap',
        }}>
        Demo for Beginners
      </Typography>
    </Grid>
    <Grid container direction="column" sx={{marginTop: 1}}>
      <Typography variant="body2" color="textSecondary">
        Date: {date}
      </Typography>
      <Grid container alignItems="center" sx={{marginTop: 0}}>
        <Typography variant="body2" color="textSecondary" component="span">
          Result:
        </Typography>
        <ResultText variant="body2" ml={0.5} result={result}>
          {result == 'LOST' ? 'LOST' : 'WINNER'}
        </ResultText>
      </Grid>
    </Grid>
  </StyledCard>
);

export {ChallengeDemoLeftCardItems};
