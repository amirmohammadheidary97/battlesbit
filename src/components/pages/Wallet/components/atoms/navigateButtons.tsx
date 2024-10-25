import type {ReactNode} from 'react';
import {Button} from '@mui/material';

import {theme} from '@/config/theme';

type Icon = ReactNode;
const NavigateButton = ({icon, title}: {icon: Icon; title: string}) => (
  <Button
    sx={{
      color: '#fff',
      textTransform: 'capitalize',
      bgcolor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      height: '40px',
      font: '400 14px Nunito Sans',
    }}
    startIcon={icon}>
    {title}
  </Button>
);
export default NavigateButton;
