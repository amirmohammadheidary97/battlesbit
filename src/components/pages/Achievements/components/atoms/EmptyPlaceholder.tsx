import {useNavigate} from 'react-router';
import {Box, Icon} from '@mui/material';

import CupPlaceholder from '@/assets/img/icons/general/emptyCup.svg?react';
import {flex} from '@/utils/flexHelper';

const EmptyPlaceholder = () => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate('?show=highlighted')}
      sx={{
        ...flex().column().gap('0.5rem').acenter().result,
        svg: {fontSize: '100px'},
      }}>
      <Icon component={CupPlaceholder} />
      <Box
        sx={{
          width: '100px',
          height: '25px',
          borderRadius: '0.25rem',
          bgcolor: 'background.default',
        }}
      />
    </Box>
  );
};

export default EmptyPlaceholder;
