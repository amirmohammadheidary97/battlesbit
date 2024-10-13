import type {FC} from 'react';
import {Box} from '@mui/material';

type IChallengePriceItemProps = {
  title: string;
  value: number;
  icon: any;
};

export const ChallengePriceItem: FC<IChallengePriceItemProps> = ({
  title,
  value,
  icon,
}) => (
  <Box display="flex" justifyContent="start" alignItems="center" mr={1}>
    <Box component="img" src={icon} width={15} height={15} mr={0.5} />
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      component="span"
      color="#F3C73B"
      fontSize={12}
      // sx={{marginX: '0.2rem'}}
    >
      {title}:
      <Box
        component="span"
        color="white"
        fontSize={16}
        fontWeight="bold"
        sx={{marginLeft: '0.2rem'}}>
        {value}
      </Box>
      <Box
        component="span"
        color="#C3C2C2"
        fontSize={10}
        fontWeight="bold"
        sx={{marginLeft: '0.2rem'}}>
        USDT
      </Box>
    </Box>
  </Box>
);
