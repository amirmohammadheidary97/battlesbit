import type {FC} from 'react';
import {useNavigate} from 'react-router';
import {Box, IconButton, Typography} from '@mui/material';

import backIcon from '@/assets/img/icons/general/back-white2.png';

type IBackwardTitleProps = {
  title?: string;
  isFixedBackWard?: boolean;
};

export const BackwardTitle: FC<IBackwardTitleProps> = ({
  title,
  isFixedBackWard,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'start'}
      position={isFixedBackWard ? 'absolute' : 'relative'}
      px={1}
      pt={1}
      zIndex={isFixedBackWard ? 10 : 1}>
      <IconButton aria-label="backward" onClick={() => navigate(-1)}>
        <img src={backIcon} style={{width: '20px', height: '20px'}} />
      </IconButton>
      <Typography marginLeft={1} fontSize={18}>
        {title}
      </Typography>
    </Box>
  );
};
