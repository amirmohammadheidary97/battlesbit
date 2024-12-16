import {useNavigate} from 'react-router';
import {Avatar, Box} from '@mui/material';

import CupPlaceholder from '@/assets/img/icons/general/emptyCup.svg';
import {flex} from '@/utils/flexHelper';

const EmptyPlaceholder = () => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate('?show=highlighted')}
      sx={{
        ...flex().column().gap('0.5rem').acenter().jstart().result,
      }}>
      <Avatar
        sx={{
          width: 1,
          height: 1,
          aspectRatio: 1,
          svg: {
            width: '3.5rem',
            height: '3.625rem',
          },
        }}
        src={CupPlaceholder}
      />
      <Box
        sx={{
          width: '6.25rem',
          height: '1.2rem',
          borderRadius: '0.25rem',
          bgcolor: 'background.default',
        }}
      />
    </Box>
  );
};

export default EmptyPlaceholder;
