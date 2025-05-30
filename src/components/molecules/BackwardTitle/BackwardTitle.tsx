import type {FC} from 'react';
import {useNavigate} from 'react-router';
import {Box, IconButton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import backIcon from '@/assets/img/icons/general/back-white2.png';
import BackwardActionIcon from '@/components/atoms/BackwardActionIcon';
import type {IconType} from '@/types/props/icons';

type IBackwardTitleProps = {
  title?: string;
  isFixedBackWard?: boolean;
  isShowBackwardActionIcon?: boolean;
  iconType?: IconType;
};

export const BackwardTitle: FC<IBackwardTitleProps> = ({
  title,
  isFixedBackWard,
  isShowBackwardActionIcon = false,
  iconType,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      position={isFixedBackWard ? 'absolute' : 'relative'}
      pt={1}
      zIndex={isFixedBackWard ? 10 : 1}>
      <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <IconButton aria-label="backward" onClick={() => navigate(-1)}>
          <img src={backIcon} style={{width: '20px', height: '20px'}} />
        </IconButton>
        <Typography
          variant="h6"
          fontWeight={500}
          fontSize={18}
          fontFamily="Geogrotesque Wide"
          lineHeight="100%"
          letterSpacing="0%"
          sx={{verticalAlign: 'middle'}}>
          {title}
        </Typography>
      </Grid>
      {isShowBackwardActionIcon && iconType && (
        <Grid>
          <BackwardActionIcon iconType={iconType} href="/" />
        </Grid>
      )}
    </Box>
  );
};
