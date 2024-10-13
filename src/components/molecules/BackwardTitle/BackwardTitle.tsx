import type {FC} from 'react';
import {Box, IconButton, Typography} from '@mui/material';

import backIcon from '@/assets/img/icons/general/back-white2.png';

type IBackwardTitleProps = {
  title?: string;
};

export const BackwardTitle: FC<IBackwardTitleProps> = ({title}) => (
  <Box
    display={'flex'}
    flexDirection={'row'}
    alignItems={'center'}
    justifyContent={'start'}
    px={1}
    pt={0}>
    {/* <Grid size="auto"> */}
    <IconButton aria-label="backward">
      <img src={backIcon} style={{width: '20px', height: '20px'}} />
    </IconButton>
    <Typography marginLeft={1} fontSize={18}>
      {title}
    </Typography>
    {/* </Grid> */}
  </Box>
);
