import type {FC} from 'react';
import type {TypographyProps} from '@mui/material';
import {Typography} from '@mui/material';

type ITitleBoxProps = TypographyProps & {
  title: string;
};

export const TitleBox: FC<ITitleBoxProps> = ({title, ...rest}) => (
  <Typography component="div" sx={{fontWeight: 'bold'}} {...rest}>
    {title}
  </Typography>
);
