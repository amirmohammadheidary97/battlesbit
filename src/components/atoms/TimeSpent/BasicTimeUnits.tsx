import type {TypographyProps} from '@mui/material';
import {Typography} from '@mui/material';

import {seperateTimeUnits} from './utils';

type Props = {
  time: number;
  typographyProps?: TypographyProps;
};

export const BasicTimeUnits = ({time, typographyProps = {}}: Props) => (
  <Typography {...typographyProps}>{seperateTimeUnits(time)}</Typography>
);
