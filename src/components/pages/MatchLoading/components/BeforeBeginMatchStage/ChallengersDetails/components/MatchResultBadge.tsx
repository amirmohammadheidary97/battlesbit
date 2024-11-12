import {Chip, Icon} from '@mui/material';

import cupIcon from '@/assets/img/icons/general/champion-cup.svg?react';
import {theme} from '@/config/theme';

type Props = {label?: 'W' | 'L'; icon?: Boolean};

const MatchResultBadge = ({label, icon}: Props) => (
  <Chip
    sx={{
      height: icon ? '2rem' : '26px',
      width: icon ? '2rem' : '26px',
      bgcolor: theme.palette.background.paper,
      borderRadius: '50%',
      '.MuiChip-label': {
        padding: 0,
        font: '400 10px Nunito Sans',
        color:
          label === 'W' ? theme.palette.success.main : theme.palette.error.main,
      },
      '.MuiChip-icon': {
        margin: 0,
        fontSize: '1rem',
      },
    }}
    label={label ? label : ''}
    icon={icon ? <Icon component={cupIcon} /> : undefined}
    variant="filled"
  />
);

export default MatchResultBadge;
