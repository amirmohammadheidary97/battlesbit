import {Box, SvgIcon} from '@mui/material';

import CupIcon from '@/assets/img/icons/cup.svg?react';

type Props = {
  cups: number;
};

export const UserCup = ({cups}: Props) => (
  <Box display={'flex'} width={'25%'}>
    <SvgIcon component={CupIcon} />
    <Box>{cups}</Box>
  </Box>
);
