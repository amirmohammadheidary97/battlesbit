import {Typography} from '@mui/material';

import {numberWithCommas} from '@/utils/money-number-fromatter';

export const StatusText = ({result}: {result: number}) => (
  <Typography variant="overline" color={result >= 0 ? 'success' : 'error'}>
    {result >= 0 ? 'GAIN' : 'LOST'}
    &nbsp;
    {result >= 0 ? '+' : ''}
    {numberWithCommas(result)}$
  </Typography>
);
