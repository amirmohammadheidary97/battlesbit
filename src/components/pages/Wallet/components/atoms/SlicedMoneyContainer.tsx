import type {ReactNode} from 'react';
import {Typography} from '@mui/material';

export const AmountContainer = ({
  children,
  fontSize,
}: {
  children: ReactNode;
  fontSize: string;
}) => (
  <Typography
    component={'span'}
    variant="button"
    sx={{
      fontSize: fontSize,
      lineHeight: 'normal',
    }}>
    {children}
  </Typography>
);
