import type {FC} from 'react';
import {useNavigate} from 'react-router';
import {Box, IconButton, Typography} from '@mui/material';

import backIcon from '@/assets/img/icons/general/back-white2.png';

type IBackwardTitleProps = {
  title?: string;
};

export const BackwardTitleFixed: FC<IBackwardTitleProps> = ({title}) => {
  const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'start'}
      position={'fixed'}
      px={1}
      pt={1}
      zIndex={10}>
      {/* <Grid size="auto"> */}
      <IconButton onClick={() => navigate(-1)} aria-label="backward">
        <img src={backIcon} style={{width: '20px', height: '20px'}} />
      </IconButton>
      <Typography marginLeft={1} textTransform={'capitalize'} fontSize={18}>
        {title}
      </Typography>
      {/* </Grid> */}
    </Box>
  );
};
