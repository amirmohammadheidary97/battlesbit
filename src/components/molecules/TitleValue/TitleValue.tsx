import type {ReactNode} from 'react';
import type {SxProps} from '@mui/material';
import {Box} from '@mui/system';

export const TitleValue = ({
  title,
  value,
  containerSX = {},
  titleSX = {},
  valueSX = {},
}: {
  containerSX?: SxProps;
  titleSX?: SxProps;
  valueSX?: SxProps;
  title?: ReactNode;
  value?: ReactNode;
}) => (
  <Box
    sx={{display: 'flex', flexDirection: 'column', gap: 0.5, ...containerSX}}>
    {title && <Box sx={{color: 'text2', ...titleSX}}>{title}</Box>}
    {value && <Box sx={{color: 'text1', ...valueSX}}>{value}</Box>}
  </Box>
);
