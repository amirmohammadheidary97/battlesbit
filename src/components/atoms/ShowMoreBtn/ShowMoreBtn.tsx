import type {FC} from 'react';
import {Box} from '@mui/material';

type IShowMoreBtnProps = {
  textColor?: string;
  clickHandler?: () => void;
};

export const ShowMoreBtn: FC<IShowMoreBtnProps> = ({
  textColor,
  clickHandler,
}) => {
  const color = textColor ?? 'white';
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={'100%'}
      color={color}
      onClick={clickHandler}>
      show more
    </Box>
  );
};
