import {type ReactNode} from 'react';
import {useNavigate} from 'react-router';
import {Button} from '@mui/material';

import {theme} from '@/config/theme';

type Icon = ReactNode;
const NavigateButton = ({icon, title}: {icon: Icon; title: string}) => {
  const nav = useNavigate();

  return (
    <Button
      onClick={() => {
        if (title === 'store') {
          nav('/store');
        } else nav('?state=' + title);
      }}
      sx={{
        color: '#fff',
        textTransform: 'capitalize',
        bgcolor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        height: '40px',
        font: '400 14px Nunito Sans',
        px: '12px',
        py: '8px',
      }}
      startIcon={icon}>
      {title}
    </Button>
  );
};
export default NavigateButton;
