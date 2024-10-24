import type {FC} from 'react';
import {Box, Typography} from '@mui/material';

type ITitleBoxProps = {
  title: string;
};

export const TitleBox: FC<ITitleBoxProps> = ({title}) => (
  <Typography component="div">
    <Box sx={{fontWeight: 'bold', m: 1}}>{title}</Box>
  </Typography>
);
