import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import {CustomIcon} from '../icon';

import type {IconType} from '@/types/props/icons';

type BackwardActionIconProps = {
  iconType: IconType;
  href: string;
};

const BackwardActionIcon = ({iconType, href}: BackwardActionIconProps) => {
  const navigate = useNavigate();
  return (
    <Grid
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '10px',
        cursor: 'pointer',
        height: '46px',
        width: '46px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      container
      onClick={() => navigate(href)}>
      <CustomIcon type={iconType} />
    </Grid>
  );
};

export default BackwardActionIcon;
