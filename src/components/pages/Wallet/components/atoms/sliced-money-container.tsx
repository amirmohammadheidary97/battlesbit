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
      font: '400 Alfa Slab One',
      fontSize: fontSize,
    }}>
    {children}
  </Typography>
);
