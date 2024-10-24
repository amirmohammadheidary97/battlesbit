import type {ReactNode} from 'react';
import {Box, type BoxProps} from '@mui/material';

import {flex} from '@/utils/flexHelper';

type Props = {
  containerProps?: BoxProps;
  fullW?: boolean;
  fullH?: boolean;
  fullSize?: boolean;
  children?: ReactNode;
};
export const Center = ({
  children,
  containerProps,
  fullH,
  fullSize,
  fullW,
}: Props) => (
  <Box
    {...containerProps}
    sx={{
      ...flex().jcenter().acenter().result,
      ...(containerProps?.sx ? containerProps.sx : {}),
      ...(fullW || fullSize ? {width: '100%'} : {}),
      ...(fullH || fullSize ? {height: '100%'} : {}),
    }}>
    {children}
  </Box>
);
